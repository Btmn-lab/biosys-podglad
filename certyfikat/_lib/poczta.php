<?php
// Mail do absolwenta z linkiem do certyfikatu i przyciskiem „Dodaj do LinkedIn”.
//
// Wysyłka przez mail() — tak jak reszta backendu na współdzielonym hostingu.
// Gdy trzeba SMTP, podmień tylko funkcję wyslijMail(); treść i wywołania
// zostają bez zmian.
declare(strict_types=1);

namespace BioSys\Certyfikat;

function wyslijCertyfikatMailem(array $cert): bool
{
    $cfg = konfig()['poczta'];
    if (empty($cfg['wlaczona']) || empty($cert['email']) || $cert['status'] !== 'wazny') {
        return false;
    }
    $temat = 'Twój certyfikat BioSys: ' . $cert['program_nazwa'];
    $html = widok('mail', ['cert' => $cert, 'program' => program($cert['program'])]);
    $tekst = tekstMaila($cert);
    return wyslijMail($cert['email'], $temat, $html, $tekst);
}

function tekstMaila(array $cert): string
{
    return "Dzień dobry,\n\n"
        . "gratulujemy ukończenia szkolenia BioSys. Twój certyfikat „{$cert['program_nazwa']}” jest gotowy:\n"
        . urlCertyfikatu($cert['id']) . "\n\n"
        . "Dodaj go do profilu LinkedIn jednym kliknięciem — formularz otworzy się już wypełniony:\n"
        . linkDodajDoProfilu($cert) . "\n\n"
        . "Numer certyfikatu: {$cert['id']}\n"
        . 'Data wydania: ' . dataSlownie($cert['data_wydania']) . "\n\n"
        . "Pozdrawiamy,\nZespół szkoleń BioSys\n";
}

function wyslijMail(string $do, string $temat, string $html, string $tekst): bool
{
    $cfg = konfig()['poczta'];
    $granica = 'bs-' . bin2hex(random_bytes(8));
    $naglowki = [
        'MIME-Version: 1.0',
        'From: ' . mb_encode_mimeheader($cfg['od_nazwa'], 'UTF-8') . ' <' . $cfg['od'] . '>',
        'Reply-To: ' . ($cfg['odpowiedz'] ?? $cfg['od']),
        'Content-Type: multipart/alternative; boundary="' . $granica . '"',
    ];
    $tresc = "--$granica\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($tekst))
        . "--$granica\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html))
        . "--$granica--\r\n";
    // -f ustawia kopertę nadawcy; bez tego część serwerów odrzuca mail przez SPF.
    return mail($do, mb_encode_mimeheader($temat, 'UTF-8'), $tresc, implode("\r\n", $naglowki), '-f' . $cfg['od']);
}
