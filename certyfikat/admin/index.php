<?php
// Panel trenera: wystawianie, przegląd i unieważnianie certyfikatów.
declare(strict_types=1);

namespace BioSys\Certyfikat;

require dirname(__DIR__) . '/_lib/bootstrap.php';
require dirname(__DIR__) . '/_lib/panel.php';

try {
    konfig();
} catch (BrakKonfiguracji $e) {
    http_response_code(503);
    header('Content-Type: text/plain; charset=utf-8');
    exit($e->getMessage() . "\n");
}

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');
header('Content-Type: text/html; charset=utf-8');

$akcja = (string) ($_GET['a'] ?? '');
$post = ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST';

function adresPanelu(array $param = []): string
{
    return sciezka('admin/') . ($param ? '?' . http_build_query($param) : '');
}

function przekieruj(array $param = []): never
{
    header('Location: ' . adresPanelu($param), true, 303);
    exit;
}

function strona(string $widok, array $dane = []): never
{
    echo widok('admin/' . $widok, $dane + ['uzytkownik' => zalogowany()]);
    exit;
}

// ---- Logowanie ----

if ($akcja === 'logowanie') {
    $blad = null;
    if ($post) {
        sprawdzCsrf();
        if (zablokowany()) {
            $blad = 'Zbyt wiele nieudanych prób. Spróbuj ponownie za kwadrans.';
        } elseif (zaloguj(trim((string) ($_POST['login'] ?? '')), (string) ($_POST['haslo'] ?? ''))) {
            wyczyscProby();
            przekieruj();
        } else {
            zapiszNieudanaProbe();
            $blad = 'Nieprawidłowy login lub hasło.';
        }
    }
    strona('logowanie', ['blad' => $blad]);
}

$ja = zalogowany();
if ($ja === null) {
    przekieruj(['a' => 'logowanie']);
}

if ($akcja === 'wyloguj' && $post) {
    sprawdzCsrf();
    wyloguj();
    przekieruj(['a' => 'logowanie']);
}

// ---- Wystawianie ----

if ($akcja === 'wystaw') {
    $formularz = [
        'program' => '', 'data_szkolenia' => '', 'data_wydania' => dzis(), 'trener' => $ja['nazwa'],
        'firma' => '', 'pokaz_firme' => '1', 'uczestnicy' => '', 'wyslij_mail' => '1', 'potwierdzenie' => '',
    ];
    $bledy = [];
    if ($post) {
        sprawdzCsrf();
        foreach ($formularz as $k => $_) {
            $formularz[$k] = trim((string) ($_POST[$k] ?? ''));
        }
        [$osoby, $bledy] = parsujUczestnikow($formularz['uczestnicy']);
        if (program($formularz['program']) === null) {
            $bledy[] = 'Wybierz program certyfikacji.';
        }
        if (!$osoby && !$bledy) {
            $bledy[] = 'Wpisz co najmniej jednego uczestnika.';
        }
        if ($formularz['potwierdzenie'] !== '1') {
            $bledy[] = 'Potwierdź zaliczenie i poinformowanie uczestników o publikacji certyfikatu.';
        }
        if (!$bledy) {
            $wynik = [];
            baza()->beginTransaction();
            try {
                foreach ($osoby as $o) {
                    $wynik[] = wystaw([
                        'program'        => $formularz['program'],
                        'imie_nazwisko'  => $o['imie_nazwisko'],
                        'email'          => $o['email'],
                        'firma'          => $o['firma'] !== '' ? $o['firma'] : $formularz['firma'],
                        'pokaz_firme'    => $formularz['pokaz_firme'] === '1',
                        'data_wydania'   => $formularz['data_wydania'],
                        'data_szkolenia' => $formularz['data_szkolenia'],
                        'trener'         => $formularz['trener'],
                    ], $ja['login']);
                }
                baza()->commit();
            } catch (\InvalidArgumentException $e) {
                baza()->rollBack();
                strona('wystaw', ['f' => $formularz, 'bledy' => [$e->getMessage()]]);
            }
            // Maile dopiero po zapisie całej grupy: błąd w 7. wierszu nie
            // może zostawić sześciu osób z mailem o nieistniejącym certyfikacie.
            foreach ($wynik as $i => $cert) {
                $wynik[$i]['_mail'] = null;
                if ($formularz['wyslij_mail'] === '1' && $cert['email']) {
                    $ok = wyslijCertyfikatMailem($cert);
                    $wynik[$i]['_mail'] = $ok;
                    if ($ok) {
                        oznaczWyslanie($cert['id'], $ja['login']);
                    }
                }
            }
            strona('wynik', ['wynik' => $wynik]);
        }
    }
    strona('wystaw', ['f' => $formularz, 'bledy' => $bledy]);
}

// ---- Jeden certyfikat ----

if (in_array($akcja, ['certyfikat', 'uniewaznij', 'anonimizuj', 'wyslij'], true)) {
    $cert = znajdz((string) ($_GET['id'] ?? ''));
    if ($cert === null) {
        http_response_code(404);
        strona('lista', ['certyfikaty' => [], 'filtr' => [], 'komunikat' => 'Nie ma takiego certyfikatu.']);
    }
    $komunikat = null;
    if ($post) {
        sprawdzCsrf();
        try {
            if ($akcja === 'wyslij') {
                $ok = wyslijCertyfikatMailem($cert);
                if ($ok) {
                    oznaczWyslanie($cert['id'], $ja['login']);
                }
                $komunikat = $ok ? 'Mail wysłany.' : 'Mail nie został wysłany — sprawdź adres i konfigurację poczty.';
            } elseif ($ja['rola'] !== 'admin') {
                $komunikat = 'Unieważniać i anonimizować może tylko administrator.';
            } elseif ($akcja === 'uniewaznij') {
                uniewaznij($cert['id'], (string) ($_POST['powod'] ?? ''), $ja['login']);
                usunGrafiki($cert['id']);
                $komunikat = 'Certyfikat unieważniony.';
            } elseif ($akcja === 'anonimizuj') {
                anonimizuj($cert['id'], $ja['login']);
                $komunikat = 'Dane osobowe usunięte.';
            }
        } catch (\InvalidArgumentException $e) {
            $komunikat = $e->getMessage();
        }
        $cert = znajdz($cert['id']);
    }
    strona('certyfikat', ['cert' => $cert, 'zdarzenia' => zdarzenia($cert['id']), 'komunikat' => $komunikat]);
}

// ---- Lista i eksport ----

$filtr = [
    'szukaj'  => (string) ($_GET['szukaj'] ?? ''),
    'program' => (string) ($_GET['program'] ?? ''),
    'status'  => (string) ($_GET['status'] ?? ''),
];

if ($akcja === 'eksport') {
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="certyfikaty-biosys-' . dzis() . '.csv"');
    $f = fopen('php://output', 'w');
    fwrite($f, "\xEF\xBB\xBF"); // BOM — Excel inaczej psuje polskie znaki
    fputcsv($f, ['Numer', 'Imię i nazwisko', 'E-mail', 'Firma', 'Program', 'Data wydania', 'Data szkolenia',
        'Trener', 'Status', 'Adres certyfikatu'], ';');
    // Pole zaczynające się od =, +, - lub @ Excel wykonałby jak formułę —
    // a nazwiska i firmy wpisuje człowiek. Apostrof wyłącza tę interpretację.
    $bezpieczne = fn(?string $v) => $v !== null && preg_match('/^[=+\-@\t\r]/', $v) ? "'" . $v : $v;
    foreach (lista($filtr, 100000) as $c) {
        fputcsv($f, array_map($bezpieczne, [$c['id'], $c['imie_nazwisko'], $c['email'], $c['firma'], $c['program_nazwa'],
            $c['data_wydania'], $c['data_szkolenia'], $c['trener'], $c['status'], urlCertyfikatu($c['id'])]), ';');
    }
    exit;
}

strona('lista', ['certyfikaty' => lista($filtr), 'filtr' => $filtr, 'komunikat' => null]);
