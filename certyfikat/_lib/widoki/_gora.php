<?php
// Początek strony publicznej. Zmienne: $tytul, $opis, $og (tablica albo null), $jsonLd (albo null).
namespace BioSys\Certyfikat;

$og ??= null;
$jsonLd ??= null;
?><!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($tytul) ?></title>
<meta name="description" content="<?= e($opis) ?>">
<meta name="robots" content="noindex, nofollow">
<?php if ($og): ?>
<link rel="canonical" href="<?= e($og['url']) ?>">
<meta property="og:type" content="website">
<meta property="og:site_name" content="<?= e(konfig()['wydawca']['nazwa']) ?>">
<meta property="og:locale" content="pl_PL">
<meta property="og:url" content="<?= e($og['url']) ?>">
<meta property="og:title" content="<?= e($og['tytul']) ?>">
<meta property="og:description" content="<?= e($og['opis']) ?>">
<meta property="og:image" content="<?= e($og['obraz']) ?>">
<meta property="og:image:secure_url" content="<?= e($og['obraz']) ?>">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="<?= OG_SZER ?>">
<meta property="og:image:height" content="<?= OG_WYS ?>">
<meta property="og:image:alt" content="<?= e($og['tytul']) ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= e($og['tytul']) ?>">
<meta name="twitter:description" content="<?= e($og['opis']) ?>">
<meta name="twitter:image" content="<?= e($og['obraz']) ?>">
<?php endif; ?>
<?php if ($jsonLd): ?>
<script type="application/ld+json"><?= json_encode($jsonLd, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) ?></script>
<?php endif; ?>
<link rel="icon" href="<?= e(zasob('favicon.svg')) ?>" type="image/svg+xml">
<?php require __DIR__ . '/_fonty.php'; ?>
<link rel="stylesheet" href="<?= e(sciezka('assets/certyfikat.css')) ?>">
</head>
<body>
<header class="pasek">
  <div class="pasek__srodek">
    <a class="pasek__logo" href="<?= e(konfig()['wydawca']['url']) ?>"><img src="<?= e(zasob('biosys-logo-cropped.webp')) ?>" alt="BioSys" width="116" height="40"></a>
    <a class="pasek__link" href="<?= e(sciezka()) ?>">Weryfikacja certyfikatów</a>
  </div>
</header>
<main class="strona">
