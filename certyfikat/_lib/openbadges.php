<?php
// Open Badges 2.0 z weryfikacją „hosted”.
//
// Po co, skoro LinkedIn tego nie czyta: to otwarty standard (1EdTech), który
// rozumieją portfele odznak i platformy HR. Certyfikat BioSys można w nich
// zaimportować po samym adresie JSON, a weryfikacja polega na tym, że
// asercja leży pod adresem w domenie wydawcy — nie potrzeba kluczy
// kryptograficznych. Unieważnienie: pod tym samym adresem odpowiadamy 410
// z „revoked: true”, tak jak wymaga specyfikacja.
declare(strict_types=1);

namespace BioSys\Certyfikat;

const OB_KONTEKST = 'https://w3id.org/openbadges/v2';

function obWydawca(): array
{
    $w = konfig()['wydawca'];
    return [
        '@context' => OB_KONTEKST,
        'type'     => 'Issuer',
        'id'       => url('ob/wydawca.json'),
        'name'     => $w['nazwa'],
        'url'      => $w['url'],
        'email'    => $w['email'],
    ];
}

function obProgram(array $program): array
{
    return [
        '@context'    => OB_KONTEKST,
        'type'        => 'BadgeClass',
        'id'          => url('ob/program/' . $program['kod'] . '.json'),
        'name'        => $program['nazwa'],
        'description' => $program['opis'],
        'image'       => url('odznaka/' . $program['kod'] . '.png'),
        'criteria'    => [
            'narrative' => kryteria($program),
        ],
        'issuer'      => url('ob/wydawca.json'),
        'tags'        => ['BioSys', $program['system_nazwa'], $program['poziom']],
    ];
}

function kryteria(array $program): string
{
    return 'Ukończenie szkolenia BioSys z obsługi systemu ' . $program['system_dopelniacz']
        . ' na poziomie ' . $program['poziom'] . ' i zaliczenie części praktycznej, potwierdzone przez trenera BioSys. '
        . 'Zakres: ' . implode('; ', $program['umiejetnosci']) . '.';
}

/** @return array{0: array, 1: int} [treść, kod HTTP] */
function obAsercja(array $cert): array
{
    $id = url($cert['id'] . '.json');
    if ($cert['status'] !== 'wazny') {
        return [[
            '@context'         => OB_KONTEKST,
            'id'               => $id,
            'revoked'          => true,
            'revocationReason' => $cert['powod_uniewaznienia'] ?: 'Certyfikat unieważniony',
        ], 410];
    }
    $a = [
        '@context'     => OB_KONTEKST,
        'type'         => 'Assertion',
        'id'           => $id,
        'badge'        => url('ob/program/' . $cert['program'] . '.json'),
        'image'        => url($cert['id'] . '.png'),
        'issuedOn'     => (new \DateTimeImmutable($cert['data_wydania'], new \DateTimeZone('Europe/Warsaw')))->format(DATE_ATOM),
        'verification' => ['type' => 'hosted'],
        'evidence'     => [['id' => urlCertyfikatu($cert['id']), 'name' => 'Strona weryfikacji certyfikatu BioSys']],
    ];
    // Odbiorca jako skrót e-maila z solą: portfel odznak potwierdzi, że to
    // „jego” odznaka, a z samej asercji adresu nie da się odczytać.
    if (!empty($cert['email'])) {
        $a['recipient'] = [
            'type'     => 'email',
            'hashed'   => true,
            'salt'     => $cert['sol_odbiorcy'],
            'identity' => 'sha256$' . hash('sha256', $cert['email'] . $cert['sol_odbiorcy']),
        ];
    } else {
        $a['recipient'] = [
            'type'     => 'url',
            'hashed'   => false,
            'identity' => urlCertyfikatu($cert['id']),
        ];
    }
    return [$a, 200];
}

/** Dane strukturalne schema.org na stronę certyfikatu. */
function jsonLd(array $cert): array
{
    $w = konfig()['wydawca'];
    $program = program($cert['program']);
    $d = [
        '@context'           => 'https://schema.org',
        '@type'              => 'EducationalOccupationalCredential',
        'name'               => $cert['program_nazwa'],
        'identifier'         => $cert['id'],
        'url'                => urlCertyfikatu($cert['id']),
        'credentialCategory' => 'certificate',
        'dateCreated'        => $cert['data_wydania'],
        'recognizedBy'       => ['@type' => 'Organization', 'name' => $w['nazwa'], 'url' => $w['url']],
    ];
    if ($program !== null) {
        $d['description'] = $program['opis'];
        $d['competencyRequired'] = $program['umiejetnosci'];
    }
    return $d;
}
