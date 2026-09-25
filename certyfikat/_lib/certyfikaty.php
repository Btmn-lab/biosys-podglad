<?php
// Certyfikaty: identyfikatory, wystawianie, odczyt, unieważnianie.
declare(strict_types=1);

namespace BioSys\Certyfikat;

// Alfabet Crockforda: bez I, L, O, U — nie da się pomylić 0 z O ani 1 z I,
// kiedy ktoś przepisuje numer z wydruku albo z ekranu telefonu.
const ALFABET_ID = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const WZOR_ID = '/^BSC-[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/';

/**
 * Nowy numer w formacie BSC-XXXX-XXXX. 40 bitów losowości (ok. 10^12
 * kombinacji) — numerów nie da się przejrzeć po kolei, więc strona
 * weryfikacji nie zdradza listy absolwentów.
 */
function nowyIdentyfikator(): string
{
    do {
        $z = '';
        for ($i = 0; $i < 8; $i++) {
            $z .= ALFABET_ID[random_int(0, 31)];
        }
        $id = 'BSC-' . substr($z, 0, 4) . '-' . substr($z, 4, 4);
    } while (znajdz($id) !== null);
    return $id;
}

/**
 * Numer wpisany przez człowieka → postać kanoniczna albo null.
 * Wybacza małe litery, spacje, brak myślników i typowe pomyłki (O/0, I/L/1).
 */
function normalizujIdentyfikator(string $wpisany): ?string
{
    $s = strtoupper(preg_replace('/[^0-9A-Za-z]/', '', $wpisany) ?? '');
    if (str_starts_with($s, 'BSC')) {
        $s = substr($s, 3);
    }
    $s = strtr($s, ['O' => '0', 'I' => '1', 'L' => '1']);
    if (strlen($s) !== 8) {
        return null;
    }
    $id = 'BSC-' . substr($s, 0, 4) . '-' . substr($s, 4, 4);
    return preg_match(WZOR_ID, $id) ? $id : null;
}

function znajdz(string $id): ?array
{
    $q = baza()->prepare('SELECT * FROM cert_certyfikaty WHERE id = ?');
    $q->execute([$id]);
    $w = $q->fetch();
    return $w ?: null;
}

/**
 * Wystawia certyfikat. $dane: program, imie_nazwisko, email?, firma?,
 * pokaz_firme?, data_wydania?, data_szkolenia?, trener?
 *
 * @return array zapisany wiersz
 */
function wystaw(array $dane, string $uzytkownik): array
{
    $program = program((string) ($dane['program'] ?? ''));
    if ($program === null) {
        throw new \InvalidArgumentException('Nieznany program certyfikacji.');
    }
    $imie = trim(preg_replace('/\s+/u', ' ', (string) ($dane['imie_nazwisko'] ?? '')) ?? '');
    if (mb_strlen($imie) < 3 || mb_strlen($imie) > 160) {
        throw new \InvalidArgumentException('Imię i nazwisko: od 3 do 160 znaków.');
    }
    $email = trim((string) ($dane['email'] ?? ''));
    if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        throw new \InvalidArgumentException('Niepoprawny adres e-mail: ' . $email);
    }
    $dataWydania = (string) ($dane['data_wydania'] ?? '') ?: dzis();
    $dataSzkolenia = (string) ($dane['data_szkolenia'] ?? '') ?: null;
    foreach ([$dataWydania, $dataSzkolenia] as $d) {
        if ($d !== null && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $d)) {
            throw new \InvalidArgumentException('Data w formacie RRRR-MM-DD.');
        }
    }

    $w = [
        'id'             => nowyIdentyfikator(),
        'program'        => $program['kod'],
        'program_nazwa'  => $program['nazwa'],
        'imie_nazwisko'  => $imie,
        'email'          => $email !== '' ? mb_strtolower($email) : null,
        'firma'          => trim((string) ($dane['firma'] ?? '')) ?: null,
        'pokaz_firme'    => !empty($dane['pokaz_firme']) ? 1 : 0,
        'data_wydania'   => $dataWydania,
        'data_szkolenia' => $dataSzkolenia,
        'trener'         => trim((string) ($dane['trener'] ?? '')) ?: null,
        'status'         => 'wazny',
        'sol_odbiorcy'   => bin2hex(random_bytes(12)),
        'wystawil'       => $uzytkownik,
        'utworzono_at'   => teraz(),
    ];
    $kolumny = array_keys($w);
    baza()->prepare(
        'INSERT INTO cert_certyfikaty (' . implode(', ', $kolumny) . ') VALUES (' .
        implode(', ', array_fill(0, count($kolumny), '?')) . ')'
    )->execute(array_values($w));

    zapiszZdarzenie($w['id'], 'wystawienie', $uzytkownik, $program['kod']);
    return znajdz($w['id']);
}

function uniewaznij(string $id, string $powod, string $uzytkownik): void
{
    $powod = trim($powod);
    if ($powod === '') {
        throw new \InvalidArgumentException('Podaj powód unieważnienia.');
    }
    baza()->prepare(
        "UPDATE cert_certyfikaty SET status = 'uniewazniony', powod_uniewaznienia = ?, uniewazniono_at = ? WHERE id = ?"
    )->execute([mb_substr($powod, 0, 500), teraz(), $id]);
    zapiszZdarzenie($id, 'uniewaznienie', $uzytkownik, $powod);
}

/**
 * Wniosek RODO o usunięcie danych: zostaje numer, program i data — żeby
 * ktoś, kto kiedyś zapisał link, zobaczył „unieważniony”, a nie „nie istnieje”
 * — ale znika wszystko, co wskazuje na osobę.
 */
function anonimizuj(string $id, string $uzytkownik): void
{
    baza()->prepare(
        "UPDATE cert_certyfikaty SET imie_nazwisko = '(dane usunięte)', email = NULL, firma = NULL,
         trener = NULL, status = 'uniewazniony', powod_uniewaznienia = 'Dane usunięte na wniosek osoby',
         uniewazniono_at = COALESCE(uniewazniono_at, ?) WHERE id = ?"
    )->execute([teraz(), $id]);
    zapiszZdarzenie($id, 'anonimizacja', $uzytkownik, null);
    usunGrafiki($id);
}

function oznaczWyslanie(string $id, string $uzytkownik): void
{
    baza()->prepare('UPDATE cert_certyfikaty SET wyslano_email_at = ? WHERE id = ?')->execute([teraz(), $id]);
    zapiszZdarzenie($id, 'email', $uzytkownik, null);
}

function zapiszZdarzenie(string $id, string $rodzaj, string $uzytkownik, ?string $opis): void
{
    baza()->prepare(
        'INSERT INTO cert_zdarzenia (id, certyfikat_id, rodzaj, uzytkownik, opis, kiedy) VALUES (?, ?, ?, ?, ?, ?)'
    )->execute([bin2hex(random_bytes(16)), $id, $rodzaj, $uzytkownik, $opis !== null ? mb_substr($opis, 0, 500) : null, teraz()]);
}

function zdarzenia(string $id): array
{
    $q = baza()->prepare('SELECT * FROM cert_zdarzenia WHERE certyfikat_id = ? ORDER BY kiedy, id');
    $q->execute([$id]);
    return $q->fetchAll();
}

/** Lista do panelu. $filtr: szukaj, program, status. */
function lista(array $filtr = [], int $limit = 200): array
{
    $warunki = [];
    $param = [];
    if (($s = trim((string) ($filtr['szukaj'] ?? ''))) !== '') {
        $warunki[] = '(imie_nazwisko LIKE ? OR email LIKE ? OR firma LIKE ? OR id LIKE ?)';
        array_push($param, "%$s%", "%$s%", "%$s%", "%$s%");
    }
    if (($p = (string) ($filtr['program'] ?? '')) !== '') {
        $warunki[] = 'program = ?';
        $param[] = $p;
    }
    if (($st = (string) ($filtr['status'] ?? '')) !== '') {
        $warunki[] = 'status = ?';
        $param[] = $st;
    }
    $sql = 'SELECT * FROM cert_certyfikaty'
        . ($warunki ? ' WHERE ' . implode(' AND ', $warunki) : '')
        . ' ORDER BY utworzono_at DESC, id LIMIT ' . max(1, $limit);
    $q = baza()->prepare($sql);
    $q->execute($param);
    return $q->fetchAll();
}

/**
 * Lista uczestników wklejona przez trenera: jedna osoba w wierszu,
 * „Imię Nazwisko; e-mail; firma” (średnik, tabulator z Excela albo przecinek).
 *
 * @return array{0: list<array>, 1: list<string>} [osoby, błędy]
 */
function parsujUczestnikow(string $tekst): array
{
    $osoby = [];
    $bledy = [];
    foreach (preg_split('/\R/u', $tekst) ?: [] as $nr => $wiersz) {
        if (trim($wiersz) === '') {
            continue;
        }
        $pola = array_map('trim', preg_split('/\s*[;\t]\s*/u', $wiersz) ?: []);
        if (count($pola) === 1 && str_contains($wiersz, ',')) {
            $pola = array_map('trim', explode(',', $wiersz));
        }
        [$imie, $email, $firma] = array_pad($pola, 3, '');
        if (mb_strlen($imie) < 3) {
            $bledy[] = 'Wiersz ' . ($nr + 1) . ': brak imienia i nazwiska.';
            continue;
        }
        if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            $bledy[] = 'Wiersz ' . ($nr + 1) . ': niepoprawny e-mail „' . $email . '”.';
            continue;
        }
        $osoby[] = ['imie_nazwisko' => $imie, 'email' => $email, 'firma' => $firma];
    }
    return [$osoby, $bledy];
}
