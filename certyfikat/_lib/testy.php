<?php
// Testy modułu certyfikatów na tymczasowej bazie SQLite:
//
//   php certyfikat/_lib/testy.php
//
// Nie dotyka config.php ani danych produkcyjnych.
declare(strict_types=1);

namespace BioSys\Certyfikat;

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

$tmp = sys_get_temp_dir() . '/biosys-cert-test-' . bin2hex(random_bytes(4));
mkdir($tmp);
file_put_contents($tmp . '/config.php', '<?php return ' . var_export([
    'url_serwisu'     => 'https://biosys.pl',
    'sciezka'         => '/certyfikat',
    'sciezka_zasobow' => '/assets',
    'baza'            => ['dsn' => 'sqlite:' . $tmp . '/test.sqlite'],
    'wydawca'         => ['nazwa' => 'BioSys', 'url' => 'https://biosys.pl', 'email' => 'szkolenia@biosys.pl',
                          'linkedin_organization_id' => '12345'],
    'poczta'          => ['wlaczona' => false, 'od' => 'szkolenia@biosys.pl', 'od_nazwa' => 'BioSys', 'odpowiedz' => 'szkolenia@biosys.pl'],
    'uzytkownicy'     => [],
], true) . ';');
putenv('BIOSYS_CERT_CONFIG=' . $tmp . '/config.php');

require __DIR__ . '/bootstrap.php';

$bledy = 0;
$liczba = 0;
function sprawdz(string $opis, bool $warunek): void
{
    global $bledy, $liczba;
    $liczba++;
    if (!$warunek) {
        $bledy++;
        echo "  ✗ $opis\n";
    }
}

// ---- Identyfikatory ----
$id = nowyIdentyfikator();
sprawdz('format BSC-XXXX-XXXX', (bool) preg_match(WZOR_ID, $id));
sprawdz('normalizacja: małe litery i brak myślników', normalizujIdentyfikator(strtolower(str_replace('-', '', $id))) === $id);
sprawdz('normalizacja: O→0, I/L→1', normalizujIdentyfikator('bsc-o1il-2345') === 'BSC-0111-2345');
sprawdz('normalizacja odrzuca śmieci', normalizujIdentyfikator('BSC-12') === null && normalizujIdentyfikator('<script>') === null);
sprawdz('normalizacja odrzuca U (spoza alfabetu)', normalizujIdentyfikator('BSC-UUUU-0000') === null);

// ---- Wystawianie ----
$c = wystaw(['program' => 'RCP-ADM', 'imie_nazwisko' => '  Jan   Kowalski ', 'email' => 'Jan@Example.com',
    'firma' => 'Polan', 'pokaz_firme' => true, 'data_szkolenia' => '2026-03-10', 'data_wydania' => '2026-03-12'], 'test');
sprawdz('imię znormalizowane', $c['imie_nazwisko'] === 'Jan Kowalski');
sprawdz('e-mail małymi literami', $c['email'] === 'jan@example.com');
sprawdz('nazwa programu zapamiętana', $c['program_nazwa'] === 'Administrator systemu Etatomierz (RCP)');
sprawdz('status ważny', $c['status'] === 'wazny');
sprawdz('zdarzenie wystawienia', count(zdarzenia($c['id'])) === 1);

foreach ([
    ['program' => 'XXX', 'imie_nazwisko' => 'Jan Kowalski'],
    ['program' => 'KD-OP', 'imie_nazwisko' => 'J'],
    ['program' => 'KD-OP', 'imie_nazwisko' => 'Jan Kowalski', 'email' => 'nie-mail'],
    ['program' => 'KD-OP', 'imie_nazwisko' => 'Jan Kowalski', 'data_wydania' => '12.03.2026'],
] as $zle) {
    try {
        wystaw($zle, 'test');
        sprawdz('odrzucenie niepoprawnych danych: ' . json_encode($zle, JSON_UNESCAPED_UNICODE), false);
    } catch (\InvalidArgumentException) {
        sprawdz('odrzucenie', true);
    }
}

// ---- Lista uczestników ----
[$osoby, $bl] = parsujUczestnikow("Anna Nowak; anna@x.pl\nPiotr Zieliński\tp@x.pl\tFirma A\n\nEwa Lis, ewa@x.pl, Firma B\nZ; zly\nOla Kot; zly-mail");
sprawdz('parsowanie: 3 poprawne osoby', count($osoby) === 3);
sprawdz('parsowanie: tabulator z Excela', $osoby[1]['firma'] === 'Firma A');
sprawdz('parsowanie: przecinki', $osoby[2]['email'] === 'ewa@x.pl');
sprawdz('parsowanie: 2 błędy', count($bl) === 2);

// ---- LinkedIn ----
$link = linkDodajDoProfilu($c);
parse_str((string) parse_url($link, PHP_URL_QUERY), $q);
sprawdz('LinkedIn: adres Add to Profile', str_starts_with($link, 'https://www.linkedin.com/profile/add?'));
sprawdz('LinkedIn: startTask', $q['startTask'] === 'CERTIFICATION_NAME');
sprawdz('LinkedIn: nazwa', $q['name'] === 'Administrator systemu Etatomierz (RCP)');
sprawdz('LinkedIn: organizationId zamiast nazwy', ($q['organizationId'] ?? '') === '12345' && !isset($q['organizationName']));
sprawdz('LinkedIn: data wydania', $q['issueYear'] === '2026' && $q['issueMonth'] === '3');
sprawdz('LinkedIn: bez daty wygaśnięcia', !isset($q['expirationYear']) && !isset($q['expirationMonth']));
sprawdz('LinkedIn: certUrl i certId', $q['certUrl'] === 'https://biosys.pl/certyfikat/' . $c['id'] && $q['certId'] === $c['id']);
sprawdz('LinkedIn: udostępnianie', linkUdostepnij($c) === 'https://www.linkedin.com/sharing/share-offsite/?url=' . rawurlencode('https://biosys.pl/certyfikat/' . $c['id']));
sprawdz('LinkedIn: tekst posta zawiera link', str_contains(tekstPosta($c), 'https://biosys.pl/certyfikat/' . $c['id']));

// ---- Grafika ----
$png = rysujKarteOg($c);
$info = getimagesizefromstring($png);
sprawdz('og:image 1200×627 PNG', $info[0] === 1200 && $info[1] === 627 && $info['mime'] === 'image/png');
sprawdz('og:image poniżej 5 MB (limit LinkedIn)', strlen($png) < 5 * 1024 * 1024);
$dlugie = $c;
$dlugie['imie_nazwisko'] = 'Maria Konstancja Wiśniewska-Żółkiewska-Brzęczyszczykiewicz';
sprawdz('długie nazwisko nie wywraca rysowania', getimagesizefromstring(rysujKarteOg($dlugie))[0] === 1200);
$odz = getimagesizefromstring(rysujOdznakePng(program('TT-OP')));
sprawdz('odznaka 600×600', $odz[0] === 600 && $odz[1] === 600);
$plik = grafikaOg($c);
sprawdz('grafika w pamięci podręcznej', is_file($plik) && grafikaOg($c) === $plik);

// ---- Open Badges ----
[$a, $kod] = obAsercja($c);
sprawdz('OB: asercja 200', $kod === 200 && $a['type'] === 'Assertion');
sprawdz('OB: weryfikacja hosted', $a['verification']['type'] === 'hosted' && $a['id'] === 'https://biosys.pl/certyfikat/' . $c['id'] . '.json');
sprawdz('OB: skrót odbiorcy', $a['recipient']['identity'] === 'sha256$' . hash('sha256', 'jan@example.com' . $c['sol_odbiorcy']));
sprawdz('OB: e-mail nie wycieka', !str_contains(json_encode($a), 'jan@example.com'));
$bc = obProgram(program('RCP-ADM'));
sprawdz('OB: BadgeClass', $bc['type'] === 'BadgeClass' && $bc['issuer'] === 'https://biosys.pl/certyfikat/ob/wydawca.json');

// ---- Mail ----
$html = widok('mail', ['cert' => $c, 'program' => program($c['program'])]);
sprawdz('mail: przycisk LinkedIn', str_contains($html, e($link)));
sprawdz('mail: wyłączona poczta nie wysyła', wyslijCertyfikatMailem($c) === false);

// ---- Strony ----
$strona = widok('certyfikat', ['cert' => $c, 'program' => program($c['program'])]);
sprawdz('strona: og:image absolutny https', str_contains($strona, '<meta property="og:image" content="https://biosys.pl/certyfikat/' . $c['id'] . '.png">'));
sprawdz('strona: og:title z nazwiskiem', str_contains($strona, 'og:title" content="Jan Kowalski'));
sprawdz('strona: e-mail nie jest publiczny', !str_contains($strona, 'jan@example.com'));
$xss = wystaw(['program' => 'KD-OP', 'imie_nazwisko' => '<script>alert(1)</script>', 'firma' => '"><img src=x>', 'pokaz_firme' => true], 'test');
$strona = widok('certyfikat', ['cert' => $xss, 'program' => program('KD-OP')]);
sprawdz('strona: dane uciekają przed HTML', !str_contains($strona, '<script>alert') && !str_contains($strona, '"><img src=x>'));

// ---- Unieważnienie i RODO ----
uniewaznij($c['id'], 'Pomyłka w danych', 'test');
$c = znajdz($c['id']);
[$a, $kod] = obAsercja($c);
sprawdz('unieważnienie: status', $c['status'] === 'uniewazniony');
sprawdz('unieważnienie: OB 410 + revoked', $kod === 410 && $a['revoked'] === true);
$strona = widok('certyfikat', ['cert' => $c, 'program' => program($c['program'])]);
sprawdz('unieważnienie: strona bez przycisków LinkedIn', !str_contains($strona, 'linkedin.com/profile/add'));
sprawdz('unieważnienie: nowa grafika', grafikaOg($c) !== $plik && !is_file($plik));
anonimizuj($c['id'], 'test');
$c = znajdz($c['id']);
sprawdz('RODO: dane usunięte', $c['email'] === null && $c['firma'] === null && !str_contains($c['imie_nazwisko'], 'Kowalski'));
sprawdz('RODO: numer nadal istnieje', $c['id'] !== '' && $c['status'] === 'uniewazniony');

// ---- Lista ----
sprawdz('lista: wyszukiwanie', count(lista(['szukaj' => 'script'])) === 1);
sprawdz('lista: filtr statusu', count(lista(['status' => 'uniewazniony'])) === 1);

// sprzątanie
array_map('unlink', glob($tmp . '/*') ?: []);
@rmdir($tmp);
foreach (glob(katalogDanych('grafiki') . '/BSC-*') ?: [] as $f) {
    // grafiki testowych certyfikatów — numerów nie ma w bazie produkcyjnej
    if (str_contains($f, $xss['id']) || str_contains($f, $c['id'])) {
        unlink($f);
    }
}

echo $bledy === 0 ? "OK — $liczba sprawdzeń\n" : "BŁĘDY: $bledy z $liczba\n";
exit($bledy === 0 ? 0 : 1);
