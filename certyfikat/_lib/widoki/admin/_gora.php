<?php
// Początek strony panelu. Zmienne: $tytul, $uzytkownik (albo null).
namespace BioSys\Certyfikat;
?><!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title><?= e($tytul) ?> | Certyfikaty BioSys</title>
<link rel="icon" href="<?= e(zasob('favicon.svg')) ?>" type="image/svg+xml">
<?php require dirname(__DIR__) . '/_fonty.php'; ?>
<link rel="stylesheet" href="<?= e(sciezka('assets/certyfikat.css')) ?>">
<link rel="stylesheet" href="<?= e(sciezka('assets/panel.css')) ?>">
</head>
<body class="panel">
<header class="pasek">
  <div class="pasek__srodek">
    <a class="pasek__logo" href="<?= e(sciezka('admin/')) ?>"><img src="<?= e(zasob('biosys-logo-cropped.webp')) ?>" alt="BioSys" width="116" height="40"></a>
    <?php if ($uzytkownik): ?>
      <nav class="menu">
        <a href="<?= e(sciezka('admin/')) ?>">Certyfikaty</a>
        <a href="<?= e(sciezka('admin/')) ?>?a=wystaw" class="menu__glowny">+ Wystaw</a>
        <form method="post" action="<?= e(sciezka('admin/')) ?>?a=wyloguj">
          <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
          <button type="submit" class="link" title="Zalogowano: <?= e($uzytkownik['login']) ?>">Wyloguj (<?= e($uzytkownik['nazwa']) ?>)</button>
        </form>
      </nav>
    <?php endif; ?>
  </div>
</header>
<main class="strona">
