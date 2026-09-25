<?php
// Katalog ścieżek certyfikacji: 3 systemy × 2 poziomy.
//
// Katalog żyje w kodzie, nie w bazie: zmienia się rzadko, a każda zmiana
// powinna przejść przez przegląd. Certyfikat w bazie zapamiętuje nazwę
// programu z dnia wydania, więc przemianowanie ścieżki nie zmienia treści
// certyfikatów już wiszących na profilach LinkedIn.
//
// system_dopelniacz wchodzi w zdania „szkolenie z obsługi systemu …”.
//
// Klucz (kod) jest trwały — pojawia się w adresach Open Badges. Nie zmieniaj
// kodu istniejącej ścieżki; dodaj nową.

return [
    'RCP-OP' => [
        'system'            => 'RCP',
        'system_nazwa'      => 'Etatomierz (RCP)',
        'system_dopelniacz' => 'Etatomierz (RCP)',
        'poziom'            => 'Operator',
        'nazwa'             => 'Operator systemu Etatomierz (RCP)',
        'kolor'             => '#2563EB',
        'opis'              => 'Potwierdza umiejętność codziennej obsługi systemu rejestracji czasu pracy Etatomierz: prowadzenia ewidencji, grafików i wniosków oraz przygotowania danych do rozliczenia płac.',
        'umiejetnosci'      => [
            'Prowadzenie ewidencji czasu pracy i korekta zdarzeń z rejestratorów',
            'Układanie grafików zmian oraz obsługa wniosków urlopowych i nieobecności',
            'Raporty obecności, nadgodzin, spóźnień i przerw',
            'Zatwierdzanie ewidencji i przekazanie jej do rozliczenia płac',
        ],
    ],
    'RCP-ADM' => [
        'system'            => 'RCP',
        'system_nazwa'      => 'Etatomierz (RCP)',
        'system_dopelniacz' => 'Etatomierz (RCP)',
        'poziom'            => 'Administrator',
        'nazwa'             => 'Administrator systemu Etatomierz (RCP)',
        'kolor'             => '#2563EB',
        'opis'              => 'Potwierdza umiejętność konfiguracji i utrzymania systemu Etatomierz: reguł rozliczania czasu pracy, uprawnień, urządzeń i integracji z systemem kadrowo-płacowym.',
        'umiejetnosci'      => [
            'Konfiguracja systemów i rozkładów czasu pracy, nadgodzin, dodatków i limitów przerw',
            'Zarządzanie pracownikami, identyfikatorami oraz uprawnieniami kierowników i kadr',
            'Obsługa rejestratorów czasu pracy i zdalnej rejestracji',
            'Integracja i eksport danych do systemu kadrowo-płacowego',
            'Zamykanie okresów rozliczeniowych',
        ],
    ],
    'KD-OP' => [
        'system'            => 'KD',
        'system_nazwa'      => 'Kontrola dostępu BioSys',
        'system_dopelniacz' => 'kontroli dostępu BioSys',
        'poziom'            => 'Operator',
        'nazwa'             => 'Operator systemu Kontroli Dostępu BioSys',
        'kolor'             => '#0B95A0',
        'opis'              => 'Potwierdza umiejętność codziennej obsługi systemu kontroli dostępu BioSys: nadawania uprawnień, obsługi identyfikatorów i gości oraz reagowania na zdarzenia.',
        'umiejetnosci'      => [
            'Nadawanie i cofanie uprawnień dostępu do stref',
            'Wydawanie identyfikatorów i natychmiastowe blokowanie zgubionych kart',
            'Rejestr wejść gości bez papierowej książki',
            'Lista obecnych w budynku i raport ewakuacyjny',
            'Przegląd historii zdarzeń i alarmów',
        ],
    ],
    'KD-ADM' => [
        'system'            => 'KD',
        'system_nazwa'      => 'Kontrola dostępu BioSys',
        'system_dopelniacz' => 'kontroli dostępu BioSys',
        'poziom'            => 'Administrator',
        'nazwa'             => 'Administrator systemu Kontroli Dostępu BioSys',
        'kolor'             => '#0B95A0',
        'opis'              => 'Potwierdza umiejętność projektowania i utrzymania konfiguracji systemu kontroli dostępu BioSys: stref, harmonogramów, przejść, scenariuszy bezpieczeństwa i integracji z RCP.',
        'umiejetnosci'      => [
            'Projektowanie stref, poziomów dostępu i harmonogramów',
            'Konfiguracja kontrolerów oraz przejść: drzwi, bramek i kołowrotów',
            'Scenariusze bezpieczeństwa: alarmy forsowania, tryby awaryjne i ewakuacyjne',
            'Wspólny identyfikator i integracja z systemem RCP',
            'Audyt zdarzeń i kopie zapasowe konfiguracji',
        ],
    ],
    'TT-OP' => [
        'system'            => 'TT',
        'system_nazwa'      => 'Task Timer',
        'system_dopelniacz' => 'Task Timer',
        'poziom'            => 'Operator',
        'nazwa'             => 'Operator systemu Task Timer',
        'kolor'             => '#DD6B2A',
        'opis'              => 'Potwierdza umiejętność codziennej obsługi systemu Task Timer: rejestracji czasu zleceń i czynności, zdarzeń specjalnych i śledzenia postępu prac.',
        'umiejetnosci'      => [
            'Rejestracja czynności w ramach zlecenia na terminalu POS lub stacji PC',
            'Rejestracja zdarzeń specjalnych: awarii, przestojów i zdarzeń losowych',
            'Śledzenie postępu aktywnych zleceń i projektów',
            'Raporty czasu rzeczywistego na tle czasu technologicznego',
        ],
    ],
    'TT-ADM' => [
        'system'            => 'TT',
        'system_nazwa'      => 'Task Timer',
        'system_dopelniacz' => 'Task Timer',
        'poziom'            => 'Administrator',
        'nazwa'             => 'Administrator systemu Task Timer',
        'kolor'             => '#DD6B2A',
        'opis'              => 'Potwierdza umiejętność konfiguracji systemu Task Timer, jego integracji z ERP oraz analizy wskaźników produkcyjnych na podstawie zarejestrowanego czasu.',
        'umiejetnosci'      => [
            'Konfiguracja zleceń, czynności, stanowisk i terminali',
            'Import zleceń z systemu ERP i przekazywanie wyników zwrotnie',
            'Analiza wskaźników: Lead Time, OEE, straty z awarii i przestojów',
            'Zarządzanie użytkownikami i uprawnieniami',
        ],
    ],
];
