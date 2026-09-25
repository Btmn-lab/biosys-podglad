<?php
// Wspólny start modułu certyfikatów: konfiguracja, baza, drobne narzędzia.
declare(strict_types=1);

namespace BioSys\Certyfikat;

use PDO;

const LIB = __DIR__;

require_once LIB . '/certyfikaty.php';
require_once LIB . '/linkedin.php';
require_once LIB . '/grafika.php';
require_once LIB . '/openbadges.php';
require_once LIB . '/poczta.php';

final class BrakKonfiguracji extends \RuntimeException {}

function konfig(): array
{
    static $k = null;
    if ($k === null) {
        // BIOSYS_CERT_CONFIG pozwala testom i serwerowi deweloperskiemu podać
        // własny plik bez ruszania produkcyjnego config.php.
        $plik = getenv('BIOSYS_CERT_CONFIG') ?: LIB . '/config.php';
        if (!is_file($plik)) {
            throw new BrakKonfiguracji('Brak pliku ' . $plik . ' — skopiuj config.example.php.');
        }
        $k = require $plik;
    }
    return $k;
}

function programy(): array
{
    static $p = null;
    return $p ??= require LIB . '/programy.php';
}

function program(string $kod): ?array
{
    $p = programy()[$kod] ?? null;
    return $p === null ? null : $p + ['kod' => $kod];
}

function baza(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $b = konfig()['baza'];
        $pdo = new PDO($b['dsn'], $b['login'] ?? null, $b['haslo'] ?? null, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        if ($pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'sqlite') {
            // SQLite zakładamy sami przy pierwszym użyciu — to jest wariant
            // „bez konfiguracji”, więc nie wymagamy osobnego kroku instalacji.
            $pdo->exec('PRAGMA foreign_keys = ON');
            $pdo->exec('PRAGMA journal_mode = WAL');
            $pdo->exec((string) file_get_contents(LIB . '/schema.sqlite.sql'));
        }
    }
    return $pdo;
}

/** Katalog na pliki robocze (baza SQLite, pamięć podręczna grafik, blokady logowania). */
function katalogDanych(string $pod = ''): string
{
    $d = dirname(LIB) . '/_dane' . ($pod !== '' ? '/' . $pod : '');
    if (!is_dir($d)) {
        mkdir($d, 0775, true);
    }
    return $d;
}

// ---- Adresy ----

function sciezka(string $reszta = ''): string
{
    return rtrim(konfig()['sciezka'], '/') . '/' . ltrim($reszta, '/');
}

/** Pełny adres https — dla LinkedIn, maili i Open Badges. */
function url(string $reszta = ''): string
{
    return rtrim(konfig()['url_serwisu'], '/') . sciezka($reszta);
}

function urlCertyfikatu(string $id): string
{
    return url($id);
}

function zasob(string $plik): string
{
    return rtrim(konfig()['sciezka_zasobow'], '/') . '/' . ltrim($plik, '/');
}

// ---- Drobiazgi ----

function e(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

const MIESIACE_DOPELNIACZ = [1 => 'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
    'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

/** „25 września 2026” — forma, którą czyta się na certyfikacie. */
function dataSlownie(string $data): string
{
    $t = new \DateTimeImmutable($data);
    return (int) $t->format('j') . ' ' . MIESIACE_DOPELNIACZ[(int) $t->format('n')] . ' ' . $t->format('Y');
}

function teraz(): string
{
    return (new \DateTimeImmutable('now', new \DateTimeZone('Europe/Warsaw')))->format('Y-m-d H:i:s');
}

function dzis(): string
{
    return substr(teraz(), 0, 10);
}

function widok(string $nazwa, array $dane = []): string
{
    extract($dane, EXTR_SKIP);
    ob_start();
    require LIB . '/widoki/' . $nazwa . '.php';
    return (string) ob_get_clean();
}

function odpowiedzJson(mixed $dane, int $kod = 200): never
{
    http_response_code($kod);
    header('Content-Type: application/ld+json; charset=utf-8');
    header('Access-Control-Allow-Origin: *'); // walidatory Open Badges pobierają z przeglądarki
    echo json_encode($dane, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}
