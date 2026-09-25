<?php
// Certyfikat do druku (A4 poziomo). „Zapisz jako PDF” w oknie drukowania
// przeglądarki daje PDF bez biblioteki po stronie serwera.
// Zmienne: $cert, $program.
namespace BioSys\Certyfikat;

$wazny = $cert['status'] === 'wazny';
$akcent = $program['kolor'] ?? '#2563EB';
$wydawca = konfig()['wydawca'];
?><!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Certyfikat <?= e($cert['id']) ?> — <?= e($cert['imie_nazwisko']) ?></title>
<?php require __DIR__ . '/_fonty.php'; ?>
<link rel="stylesheet" href="<?= e(sciezka('assets/druk.css')) ?>">
</head>
<body>
<div class="narzedzia">
  <a href="<?= e(sciezka($cert['id'])) ?>">← Wróć do certyfikatu</a>
  <button type="button" data-drukuj>Drukuj / zapisz jako PDF</button>
</div>
<div class="arkusz" style="--akcent: <?= e($akcent) ?>">
  <?php if (!$wazny): ?><div class="pieczec">Certyfikat unieważniony</div><?php endif; ?>
  <div class="arkusz__rama">
    <header class="arkusz__gora">
      <img src="<?= e(zasob('biosys-logo-cropped.webp')) ?>" alt="BioSys" class="arkusz__logo">
      <span class="arkusz__numer">Nr <?= e($cert['id']) ?></span>
    </header>
    <div class="arkusz__srodek">
      <div>
        <p class="arkusz__nadtytul">Certyfikat</p>
        <p class="arkusz__wstep">Potwierdzamy, że</p>
        <h1 class="arkusz__imie"><?= e($cert['imie_nazwisko']) ?></h1>
        <p class="arkusz__wstep">posiada certyfikat BioSys</p>
        <p class="arkusz__program"><?= e($cert['program_nazwa']) ?></p>
        <?php if ($program): ?>
          <ul class="arkusz__zakres">
            <?php foreach ($program['umiejetnosci'] as $u): ?><li><?= e($u) ?></li><?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </div>
      <img class="arkusz__odznaka" src="<?= e(sciezka('odznaka/' . $cert['program'] . '.png')) ?>" alt="">
    </div>
    <footer class="arkusz__dol">
      <div><span>Data wydania</span><strong><?= e(dataSlownie($cert['data_wydania'])) ?></strong></div>
      <?php if ($cert['trener']): ?>
        <div><span>Trener prowadzący</span><strong><?= e($cert['trener']) ?></strong></div>
      <?php endif; ?>
      <div><span>Wydawca</span><strong><?= e($wydawca['nazwa']) ?></strong></div>
      <div class="arkusz__weryfikacja"><span>Weryfikacja</span><strong><?= e(preg_replace('#^https?://#', '', urlCertyfikatu($cert['id']))) ?></strong></div>
    </footer>
  </div>
</div>
<script src="<?= e(sciezka('assets/certyfikat.js')) ?>" defer></script>
</body>
</html>
