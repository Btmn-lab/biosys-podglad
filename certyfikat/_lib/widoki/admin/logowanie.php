<?php
namespace BioSys\Certyfikat;
$tytul = 'Logowanie';
require __DIR__ . '/_gora.php';
?>
<section class="weryfikacja">
  <p class="cert__nadtytul">Panel trenera</p>
  <h1>Certyfikaty BioSys</h1>
  <?php if ($blad): ?><p class="status status--blad" role="alert"><span><?= e($blad) ?></span></p><?php endif; ?>
  <form method="post" action="?a=logowanie" class="formularz">
    <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
    <label>Login <input name="login" autocomplete="username" required autofocus></label>
    <label>Hasło <input name="haslo" type="password" autocomplete="current-password" required></label>
    <button class="przycisk" type="submit">Zaloguj</button>
  </form>
</section>
<?php require __DIR__ . '/_dol.php'; ?>
