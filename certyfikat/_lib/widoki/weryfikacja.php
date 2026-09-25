<?php
// Formularz weryfikacji po numerze. Zmienne: $blad (albo null), $wpisany.
namespace BioSys\Certyfikat;

$tytul = 'Weryfikacja certyfikatów | BioSys';
$opis = 'Sprawdź, czy certyfikat BioSys jest ważny — wpisz jego numer.';

require __DIR__ . '/_gora.php';
?>
<section class="weryfikacja">
  <p class="cert__nadtytul">Rejestr certyfikatów</p>
  <h1>Weryfikacja certyfikatu BioSys</h1>
  <p>Wpisz numer z certyfikatu. Ma postać <strong>BSC-XXXX-XXXX</strong> i znajdziesz go na wydruku, w mailu z certyfikatem oraz w sekcji „Licencje i certyfikaty” na LinkedIn.</p>
  <?php if ($blad): ?>
    <p class="status status--blad" role="alert"><span><?= e($blad) ?></span></p>
  <?php endif; ?>
  <form class="weryfikacja__form" method="get" action="<?= e(sciezka()) ?>">
    <label for="id" class="ukryte">Numer certyfikatu</label>
    <input id="id" name="id" type="text" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false"
           placeholder="BSC-XXXX-XXXX" value="<?= e($wpisany) ?>" required maxlength="20">
    <button class="przycisk" type="submit">Sprawdź</button>
  </form>
</section>
<?php require __DIR__ . '/_dol.php'; ?>
