<?php
// Router dla wbudowanego serwera PHP — robi to, co na produkcji robi .htaccess.
// Uruchomienie z katalogu głównego repozytorium:
//
//   BIOSYS_CERT_CONFIG=/ścieżka/do/config.php php -S localhost:8080 certyfikat/_lib/dev-router.php
//
// i dalej http://localhost:8080/certyfikat/ oraz /certyfikat/admin/.
// W konfiguracji do testów lokalnych ustaw 'url_serwisu' => 'http://localhost:8080'.

$sciezka = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/');
$root = dirname(__DIR__, 2);

if (preg_match('#^/certyfikat/(_lib|_dane)(/|$)#', $sciezka)) {
    http_response_code(403);
    exit('403');
}
if (preg_match('#^/certyfikat/admin/?$#', $sciezka)) {
    require $root . '/certyfikat/admin/index.php';
    return true;
}
if (str_starts_with($sciezka, '/certyfikat') && !is_file($root . $sciezka)) {
    require $root . '/certyfikat/index.php';
    return true;
}
return false; // plik statyczny — serwer poda go sam
