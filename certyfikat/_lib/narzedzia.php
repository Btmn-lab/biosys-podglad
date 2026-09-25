<?php
// Narzędzia z wiersza poleceń:
//
//   php certyfikat/_lib/narzedzia.php sprawdz     — czy serwer ma wszystko, czego moduł potrzebuje
//   php certyfikat/_lib/narzedzia.php haslo       — skrót hasła do config.php
//   php certyfikat/_lib/narzedzia.php wystaw KOD "Imię Nazwisko" [e-mail] [firma]
//   php certyfikat/_lib/narzedzia.php programy    — lista kodów programów
declare(strict_types=1);

namespace BioSys\Certyfikat;

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

require __DIR__ . '/bootstrap.php';

$polecenie = $argv[1] ?? '';

switch ($polecenie) {
    case 'haslo':
        fwrite(STDOUT, 'Hasło (min. 12 znaków): ');
        $cichy = stripos(PHP_OS, 'WIN') !== 0 && function_exists('shell_exec');
        if ($cichy) {
            shell_exec('stty -echo');
        }
        $haslo = rtrim((string) fgets(STDIN), "\r\n");
        if ($cichy) {
            shell_exec('stty echo');
        }
        fwrite(STDOUT, "\n");
        if (mb_strlen($haslo) < 12) {
            fwrite(STDERR, "Za krótkie.\n");
            exit(1);
        }
        echo password_hash($haslo, PASSWORD_DEFAULT), "\n";
        break;

    case 'programy':
        foreach (programy() as $kod => $p) {
            printf("%-8s %s\n", $kod, $p['nazwa']);
        }
        break;

    case 'wystaw':
        [, , $kod, $imie] = $argv + [2 => '', 3 => ''];
        $cert = wystaw(['program' => $kod, 'imie_nazwisko' => $imie, 'email' => $argv[4] ?? '',
            'firma' => $argv[5] ?? '', 'pokaz_firme' => true], 'cli');
        echo $cert['id'], '  ', urlCertyfikatu($cert['id']), "\n";
        break;

    case 'sprawdz':
        $ok = true;
        $test = function (string $opis, bool $wynik, string $rada = '') use (&$ok): void {
            $ok = $ok && $wynik;
            echo ($wynik ? '[ OK ] ' : '[BRAK] ') . $opis . ($wynik || $rada === '' ? '' : "\n       → $rada") . "\n";
        };
        $test('PHP 8.1+', PHP_VERSION_ID >= 80100, 'moduł korzysta ze składni PHP 8.1 (typ never, match)');
        $test('rozszerzenie GD z FreeType', function_exists('imagettftext'), 'włącz gd z obsługą FreeType w panelu hostingu');
        $test('GD czyta WebP (logo)', function_exists('imagecreatefromwebp'), 'bez tego grafika pokaże nazwę tekstem zamiast logo');
        $test('mbstring', function_exists('mb_strlen'));
        $test('PDO', class_exists(\PDO::class));
        try {
            konfig();
            $test('config.php', true);
        } catch (BrakKonfiguracji $e) {
            $test('config.php', false, $e->getMessage());
            exit(1);
        }
        $test('url_serwisu zaczyna się od https://', str_starts_with(konfig()['url_serwisu'], 'https://'),
            'LinkedIn wymaga adresu https w og:image i certUrl');
        $test('są konta panelu', !empty(konfig()['uzytkownicy']), 'dodaj konto w config.php (polecenie: haslo)');
        try {
            baza()->query('SELECT COUNT(*) FROM cert_certyfikaty')->fetchColumn();
            $test('baza danych i tabele', true);
        } catch (\Throwable $e) {
            $test('baza danych i tabele', false, $e->getMessage());
        }
        $test('zapis do _dane/', is_writable(katalogDanych()), 'nadaj serwerowi prawo zapisu do certyfikat/_dane');
        if (empty(konfig()['wydawca']['linkedin_organization_id'])) {
            echo "[UWAGA] brak ID strony firmowej LinkedIn\n       → opcjonalne, ale bez niego LinkedIn nie pokaże logo BioSys przy certyfikacie\n";
        }
        exit($ok ? 0 : 1);

    default:
        fwrite(STDERR, "Polecenia: sprawdz | haslo | programy | wystaw KOD \"Imię Nazwisko\" [e-mail] [firma]\n");
        exit(1);
}
