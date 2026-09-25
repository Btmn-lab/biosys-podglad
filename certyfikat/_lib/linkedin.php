<?php
// Integracja z LinkedIn — bez API, bez aplikacji i bez tokenów.
//
// LinkedIn udostępnia dwa publiczne mechanizmy, które tu wykorzystujemy:
//
// 1. „Add to Profile” — link otwiera formularz sekcji „Licencje i certyfikaty”
//    w profilu zalogowanej osoby, już wypełniony: nazwa, wydawca, data,
//    numer i adres weryfikacji. Osoba klika „Zapisz” i gotowe.
//    https://addtoprofile.linkedin.com/
//
// 2. Udostępnienie posta — LinkedIn pobiera stronę certyfikatu i buduje
//    podgląd z jej tagów Open Graph (og:title, og:description, og:image).
//    Dlatego strona certyfikatu renderuje się po stronie serwera, a grafika
//    og:image to prawdziwy plik PNG 1200×627 z imieniem i nazwiskiem.
declare(strict_types=1);

namespace BioSys\Certyfikat;

/** Nazwa certyfikatu w sekcji „Licencje i certyfikaty”. */
function nazwaNaLinkedIn(array $cert): string
{
    return $cert['program_nazwa'];
}

function linkDodajDoProfilu(array $cert): string
{
    $wydawca = konfig()['wydawca'];
    $d = new \DateTimeImmutable($cert['data_wydania']);
    $p = [
        'startTask' => 'CERTIFICATION_NAME',
        'name'      => nazwaNaLinkedIn($cert),
        'issueYear' => $d->format('Y'),
        'issueMonth'=> $d->format('n'),
        'certUrl'   => urlCertyfikatu($cert['id']),
        'certId'    => $cert['id'],
    ];
    // Z ID strony firmowej LinkedIn podpina logo i link do strony BioSys.
    // Bez niego wpis też powstaje, tylko z nazwą wydawcy zwykłym tekstem.
    if (!empty($wydawca['linkedin_organization_id'])) {
        $p['organizationId'] = (string) $wydawca['linkedin_organization_id'];
    } else {
        $p['organizationName'] = $wydawca['nazwa'];
    }
    // Certyfikat bezterminowy: nie wysyłamy expirationYear/expirationMonth,
    // więc LinkedIn zaznacza „Bez daty wygaśnięcia”.
    return 'https://www.linkedin.com/profile/add?' . http_build_query($p, '', '&', PHP_QUERY_RFC3986);
}

function linkUdostepnij(array $cert): string
{
    return 'https://www.linkedin.com/sharing/share-offsite/?url=' . rawurlencode(urlCertyfikatu($cert['id']));
}

/**
 * Propozycja treści posta. LinkedIn nie pozwala wypełnić treści posta
 * z linku, więc strona podaje ją z przyciskiem „Kopiuj”.
 */
function tekstPosta(array $cert): string
{
    $p = program($cert['program']);
    $system = $p['system_dopelniacz'] ?? '';
    $tagi = match ($p['system'] ?? '') {
        'RCP'   => '#RCP #CzasPracy #HR #BioSys',
        'KD'    => '#KontrolaDostępu #Bezpieczeństwo #BioSys',
        'TT'    => '#Produkcja #RozliczanieProdukcji #OEE #BioSys',
        default => '#BioSys',
    };
    // Sformułowania bez rodzaju gramatycznego („za mną”, „mam”) — ten sam
    // tekst pasuje każdemu, bez „ukończyłem/-am”.
    return "Mam nowy certyfikat: {$cert['program_nazwa']} 🎓\n\n"
        . "Za mną szkolenie BioSys z obsługi systemu {$system} zakończone częścią praktyczną. "
        . "Certyfikat można zweryfikować tutaj:\n"
        . urlCertyfikatu($cert['id']) . "\n\n"
        . $tagi;
}
