<?php
// Panel trenera: sesja, logowanie, CSRF.
//
// Konta są w config.php, nie w bazie — trenerów jest kilku, a dopisanie
// osoby to jedna linijka. Gdy panel ma korzystać z logowania /zaplecze,
// wystarczy podmienić zalogowany() tak, by czytała sesję zaplecza.
declare(strict_types=1);

namespace BioSys\Certyfikat;

const LIMIT_PROB = 5;           // nieudane logowania z jednego adresu…
const OKNO_PROB = 15 * 60;      // …w ciągu 15 minut blokują kolejne próby

function startSesji(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    $https = str_starts_with(konfig()['url_serwisu'], 'https://');
    session_name('biosys_cert');
    session_set_cookie_params([
        'path'     => sciezka('admin/'),
        'secure'   => $https,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    session_start();
}

/** @return array{login: string, nazwa: string, rola: string}|null */
function zalogowany(): ?array
{
    startSesji();
    $login = $_SESSION['login'] ?? null;
    $konto = $login !== null ? (konfig()['uzytkownicy'][$login] ?? null) : null;
    if ($konto === null) {
        return null;
    }
    return ['login' => $login, 'nazwa' => $konto['nazwa'] ?? $login, 'rola' => $konto['rola'] ?? 'trener'];
}

function zaloguj(string $login, string $haslo): bool
{
    startSesji();
    $konto = konfig()['uzytkownicy'][$login] ?? null;
    // password_verify także dla nieistniejącego konta — czas odpowiedzi nie
    // zdradza, które loginy istnieją.
    $skrot = $konto['haslo'] ?? '$2y$12$1f8XGseISREkZwnt9l.KVu0RUyPAIIHsmQ4Xv2ATXUXFYYpK5jqF2';
    if (!password_verify($haslo, $skrot) || $konto === null) {
        return false;
    }
    session_regenerate_id(true);
    $_SESSION['login'] = $login;
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
    return true;
}

function wyloguj(): void
{
    startSesji();
    $_SESSION = [];
    session_destroy();
}

function tokenCsrf(): string
{
    startSesji();
    return $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
}

function sprawdzCsrf(): void
{
    startSesji();
    if (!hash_equals($_SESSION['csrf'] ?? '', (string) ($_POST['csrf'] ?? ''))) {
        http_response_code(400);
        exit('Formularz wygasł. Wróć, odśwież stronę i spróbuj ponownie.');
    }
}

// ---- Ograniczenie prób logowania ----

function plikProb(): string
{
    return katalogDanych() . '/logowania.json';
}

function kluczAdresu(): string
{
    return hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|biosys-cert');
}

/** Wykonuje $zmiana na zapisie prób pod blokadą pliku; zwraca liczbę świeżych prób. */
function proby(?callable $zmiana = null): int
{
    $f = fopen(plikProb(), 'c+');
    flock($f, LOCK_EX);
    $dane = json_decode((string) stream_get_contents($f), true) ?: [];
    $granica = time() - OKNO_PROB;
    foreach ($dane as $k => $czasy) {
        $dane[$k] = array_values(array_filter($czasy, fn($t) => $t > $granica));
        if (!$dane[$k]) {
            unset($dane[$k]);
        }
    }
    $klucz = kluczAdresu();
    if ($zmiana) {
        $dane[$klucz] = $zmiana($dane[$klucz] ?? []);
        if (!$dane[$klucz]) {
            unset($dane[$klucz]);
        }
    }
    ftruncate($f, 0);
    rewind($f);
    fwrite($f, json_encode($dane));
    flock($f, LOCK_UN);
    fclose($f);
    return count($dane[$klucz] ?? []);
}

function zablokowany(): bool
{
    return proby() >= LIMIT_PROB;
}

function zapiszNieudanaProbe(): void
{
    proby(fn(array $c) => [...$c, time()]);
}

function wyczyscProby(): void
{
    proby(fn(array $c) => []);
}
