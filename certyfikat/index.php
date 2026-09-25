<?php
// Publiczna część modułu certyfikatów — jeden punkt wejścia dla wszystkich
// adresów pod /certyfikat/ (przekierowuje tu .htaccess).
//
//   /certyfikat/                     formularz weryfikacji po numerze
//   /certyfikat/BSC-XXXX-XXXX        strona certyfikatu (tę stronę czyta LinkedIn)
//   /certyfikat/BSC-XXXX-XXXX.png    grafika do podglądu posta (og:image)
//   /certyfikat/BSC-XXXX-XXXX/druk   wersja do druku i zapisu jako PDF
//   /certyfikat/BSC-XXXX-XXXX.json   asercja Open Badges 2.0
//   /certyfikat/odznaka/KOD.png      odznaka programu
//   /certyfikat/ob/wydawca.json      Open Badges: wydawca
//   /certyfikat/ob/program/KOD.json  Open Badges: program (BadgeClass)
declare(strict_types=1);

namespace BioSys\Certyfikat;

require __DIR__ . '/_lib/bootstrap.php';

try {
    konfig();
} catch (BrakKonfiguracji) {
    http_response_code(503);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Moduł certyfikatów nie jest jeszcze skonfigurowany.\n";
    exit;
}

$sciezkaUrl = rawurldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
$prefiks = rtrim(konfig()['sciezka'], '/');
$trasa = str_starts_with($sciezkaUrl, $prefiks) ? substr($sciezkaUrl, strlen($prefiks)) : $sciezkaUrl;
$trasa = trim($trasa, '/');

// Strony z danymi osobowymi nie trafiają do wyszukiwarek. LinkedIn i tak
// je pobierze — noindex dotyczy indeksu, nie pobierania podglądu.
header('X-Robots-Tag: noindex, nofollow');

function nieZnaleziono(string $komunikat = 'Nie znaleźliśmy certyfikatu o tym numerze.'): never
{
    http_response_code(404);
    header('Content-Type: text/html; charset=utf-8');
    echo widok('weryfikacja', ['blad' => $komunikat, 'wpisany' => '']);
    exit;
}

function wyslijPlik(string $plik, string $typ, int $czas, ?string $nazwaPobierania = null): never
{
    header('Content-Type: ' . $typ);
    header('Content-Length: ' . filesize($plik));
    header('Cache-Control: public, max-age=' . $czas);
    if ($nazwaPobierania !== null) {
        header('Content-Disposition: attachment; filename="' . $nazwaPobierania . '"');
    }
    readfile($plik);
    exit;
}

/** Certyfikat z adresu; numer wpisany „po ludzku” przekierowuje na kanoniczny. */
function certyfikatZTrasy(string $surowy, string $przyrostek): array
{
    $id = normalizujIdentyfikator($surowy);
    if ($id === null || ($cert = znajdz($id)) === null) {
        nieZnaleziono();
    }
    if ($id !== $surowy) {
        header('Location: ' . sciezka($id . $przyrostek), true, 301);
        exit;
    }
    return $cert;
}

if ($trasa === '') {
    $wpisany = trim((string) ($_GET['id'] ?? ''));
    if ($wpisany !== '') {
        $id = normalizujIdentyfikator($wpisany);
        if ($id !== null && znajdz($id) !== null) {
            header('Location: ' . sciezka($id), true, 303);
            exit;
        }
        http_response_code(404);
        echo widok('weryfikacja', ['blad' => 'Nie znaleźliśmy certyfikatu o numerze „' . $wpisany . '”. Sprawdź numer — ma postać BSC-XXXX-XXXX.', 'wpisany' => $wpisany]);
        exit;
    }
    echo widok('weryfikacja', ['blad' => null, 'wpisany' => '']);
    exit;
}

if (preg_match('#^([0-9A-Za-z-]{8,20})(\.png|\.json|/druk)?$#', $trasa, $m) && stripos($m[1], 'BSC') === 0) {
    $przyrostek = $m[2] ?? '';
    $cert = certyfikatZTrasy($m[1], $przyrostek);
    switch ($przyrostek) {
        case '.png':
            wyslijPlik(grafikaOg($cert), 'image/png', 3600,
                isset($_GET['pobierz']) ? 'certyfikat-biosys-' . $cert['id'] . '.png' : null);
        case '.json':
            [$tresc, $kod] = obAsercja($cert);
            odpowiedzJson($tresc, $kod);
        case '/druk':
            header('Content-Type: text/html; charset=utf-8');
            echo widok('druk', ['cert' => $cert, 'program' => program($cert['program'])]);
            exit;
        default:
            header('Content-Type: text/html; charset=utf-8');
            header('Cache-Control: public, max-age=300');
            echo widok('certyfikat', ['cert' => $cert, 'program' => program($cert['program'])]);
            exit;
    }
}

if (preg_match('#^odznaka/([A-Z]+-[A-Z]+)\.png$#', $trasa, $m)) {
    $plik = odznakaPng($m[1]) ?? nieZnaleziono('Nie ma takiej odznaki.');
    wyslijPlik($plik, 'image/png', 86400);
}

if ($trasa === 'ob/wydawca.json') {
    odpowiedzJson(obWydawca());
}

if (preg_match('#^ob/program/([A-Z]+-[A-Z]+)\.json$#', $trasa, $m)) {
    $program = program($m[1]) ?? nieZnaleziono('Nie ma takiego programu.');
    odpowiedzJson(obProgram($program));
}

nieZnaleziono('Nie ma takiej strony.');
