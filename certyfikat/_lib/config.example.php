<?php
// Konfiguracja modułu certyfikatów BioSys.
//
// Skopiuj ten plik jako config.php (w tym samym katalogu) i uzupełnij.
// config.php jest w .gitignore — hasła i sól nie trafiają do repozytorium.

return [
    // Adres publiczny serwisu, bez końcowego ukośnika. Z niego składane są linki
    // w mailach, w przycisku LinkedIn i w tagach Open Graph. LinkedIn przyjmuje
    // tylko pełne adresy https — adres względny albo http popsuje podgląd posta.
    'url_serwisu' => 'https://biosys.pl',

    // Ścieżka, pod którą leży katalog modułu.
    'sciezka' => '/certyfikat',

    // Ścieżka do zasobów strony głównej (fonty, logo). Na biosys.pl to „/”.
    'sciezka_zasobow' => '/assets',

    // Baza danych. SQLite wystarcza przy setkach certyfikatów rocznie i nie
    // wymaga niczego od hostingu. MySQL/MariaDB — gdy chcesz trzymać dane obok
    // reszty backendu (schemat: _lib/schema.mysql.sql).
    'baza' => [
        'dsn'   => 'sqlite:' . __DIR__ . '/../_dane/certyfikaty.sqlite',
        'login' => null,
        'haslo' => null,
        // 'dsn' => 'mysql:host=localhost;dbname=biosys;charset=utf8mb4',
    ],

    // Wydawca — widoczny na certyfikacie, na LinkedIn i w Open Badges.
    'wydawca' => [
        'nazwa' => 'BioSys',
        'url'   => 'https://biosys.pl',
        'email' => 'szkolenia@biosys.pl',
        // ID strony firmowej BioSys na LinkedIn. Z nim w sekcji „Licencje
        // i certyfikaty” pojawia się logo BioSys i link do strony firmy; bez
        // niego LinkedIn pokaże samą nazwę tekstem. Gdzie go znaleźć: README.md.
        'linkedin_organization_id' => null,
    ],

    // Poczta. 'wlaczona' => false — certyfikaty wystawiają się normalnie, tylko
    // bez maila; link do certyfikatu trener kopiuje z panelu.
    'poczta' => [
        'wlaczona'  => true,
        'od'        => 'szkolenia@biosys.pl',
        'od_nazwa'  => 'BioSys — Szkolenia',
        'odpowiedz' => 'szkolenia@biosys.pl',
    ],

    // Konta panelu trenera. Hasło zapisujemy wyłącznie jako skrót:
    //   php certyfikat/_lib/narzedzia.php haslo
    // Role: 'trener' — wystawia certyfikaty i wysyła maile;
    //       'admin'  — dodatkowo unieważnia i anonimizuje.
    'uzytkownicy' => [
        // 'k.jura' => [
        //     'nazwa' => 'Karol Jura',
        //     'rola'  => 'admin',
        //     'haslo' => '$2y$12$...',
        // ],
    ],
];
