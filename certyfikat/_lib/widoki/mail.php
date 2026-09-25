<?php
// Mail HTML z certyfikatem. Tabele i style w atrybutach — tak czytają to
// Outlook i Gmail. Zmienne: $cert, $program.
namespace BioSys\Certyfikat;

$url = urlCertyfikatu($cert['id']);
$akcent = $program['kolor'] ?? '#2563EB';
?><!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Certyfikat BioSys</title></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;color:#0F172A;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;">
<tr><td align="center" style="padding:24px 12px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:12px;overflow:hidden;">
    <tr><td style="height:6px;background:<?= e($akcent) ?>;"></td></tr>
    <tr><td style="padding:32px 32px 8px;">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:2px;font-weight:bold;color:<?= e($akcent) ?>;text-transform:uppercase;">Certyfikat BioSys</p>
      <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;">Gratulujemy, <?= e($cert['imie_nazwisko']) ?>!</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
        Szkolenie zaliczone. Twój certyfikat <strong><?= e($cert['program_nazwa']) ?></strong> jest gotowy
        i każdy może go zweryfikować na stronie BioSys.
      </p>
    </td></tr>
    <tr><td style="padding:0 32px;">
      <a href="<?= e($url) ?>"><img src="<?= e(url($cert['id'] . '.png')) ?>" width="536" alt="Certyfikat <?= e($cert['id']) ?>" style="display:block;width:100%;height:auto;border:1px solid #E2E8F0;border-radius:8px;"></a>
    </td></tr>
    <tr><td style="padding:24px 32px 8px;" align="center">
      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
        <td style="border-radius:8px;background:#0A66C2;">
          <a href="<?= e(linkDodajDoProfilu($cert)) ?>" style="display:inline-block;padding:14px 26px;color:#FFFFFF;font-size:16px;font-weight:bold;text-decoration:none;">Dodaj do profilu LinkedIn</a>
        </td>
      </tr></table>
      <p style="margin:12px 0 0;font-size:13px;color:#64748B;">Formularz na LinkedIn otworzy się już wypełniony — wystarczy kliknąć „Zapisz”.</p>
    </td></tr>
    <tr><td style="padding:16px 32px 28px;">
      <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#334155;">
        <a href="<?= e($url) ?>" style="color:#1D4ED8;">Zobacz certyfikat</a> — tam też udostępnisz go w poście, pobierzesz grafikę i wydrukujesz wersję PDF.
      </p>
      <p style="margin:0;font-size:13px;color:#64748B;">Numer: <?= e($cert['id']) ?> · Data wydania: <?= e(dataSlownie($cert['data_wydania'])) ?></p>
    </td></tr>
    <tr><td style="padding:16px 32px;background:#F8FAFC;font-size:12px;line-height:1.5;color:#64748B;">
      Wiadomość wysłana po szkoleniu BioSys. Pytania: <a href="mailto:<?= e(konfig()['poczta']['odpowiedz'] ?? konfig()['poczta']['od']) ?>" style="color:#64748B;"><?= e(konfig()['poczta']['odpowiedz'] ?? konfig()['poczta']['od']) ?></a>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>
