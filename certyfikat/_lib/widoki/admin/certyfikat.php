<?php
// Szczegóły certyfikatu w panelu. Zmienne: $cert, $zdarzenia, $komunikat, $uzytkownik.
namespace BioSys\Certyfikat;
$tytul = $cert['id'];
require __DIR__ . '/_gora.php';
$wazny = $cert['status'] === 'wazny';
$admin = $uzytkownik['rola'] === 'admin';
$nazwyZdarzen = ['wystawienie' => 'Wystawienie', 'email' => 'Wysłanie maila', 'uniewaznienie' => 'Unieważnienie', 'anonimizacja' => 'Usunięcie danych (RODO)'];
?>
<p><a class="link" href="./">← Lista certyfikatów</a></p>
<div class="naglowek">
  <h1><?= e($cert['imie_nazwisko']) ?> <span class="mono drobne"><?= e($cert['id']) ?></span></h1>
  <?= $wazny ? '<span class="znacznik znacznik--ok">ważny</span>' : '<span class="znacznik znacznik--blad">unieważniony</span>' ?>
</div>
<?php if ($komunikat): ?><p class="status status--ok" role="status"><span><?= e($komunikat) ?></span></p><?php endif; ?>

<div class="kolumny">
  <section class="karta">
    <h2>Dane</h2>
    <dl class="pola">
      <div><dt>Program</dt><dd><?= e($cert['program_nazwa']) ?></dd></div>
      <div><dt>E-mail</dt><dd><?= e($cert['email'] ?? '—') ?></dd></div>
      <div><dt>Firma</dt><dd><?= e($cert['firma'] ?? '—') ?><?= $cert['firma'] && !$cert['pokaz_firme'] ? ' (ukryta na certyfikacie)' : '' ?></dd></div>
      <div><dt>Data szkolenia / wydania</dt><dd><?= e($cert['data_szkolenia'] ?? '—') ?> / <?= e($cert['data_wydania']) ?></dd></div>
      <div><dt>Trener</dt><dd><?= e($cert['trener'] ?? '—') ?></dd></div>
      <div><dt>Mail z certyfikatem</dt><dd><?= e($cert['wyslano_email_at'] ?? 'nie wysłano') ?></dd></div>
      <?php if (!$wazny): ?><div><dt>Powód unieważnienia</dt><dd><?= e($cert['powod_uniewaznienia']) ?></dd></div><?php endif; ?>
    </dl>
    <p class="linki">
      <a class="link" href="<?= e(sciezka($cert['id'])) ?>" target="_blank" rel="noopener">Strona certyfikatu</a>
      · <button type="button" class="link" data-kopiuj-tekst="<?= e(urlCertyfikatu($cert['id'])) ?>">kopiuj link</button>
      · <button type="button" class="link" data-kopiuj-tekst="<?= e(linkDodajDoProfilu($cert)) ?>">kopiuj link „Dodaj do LinkedIn”</button>
      · <a class="link" href="<?= e(sciezka($cert['id'] . '/druk')) ?>" target="_blank" rel="noopener">wydruk</a>
    </p>
  </section>

  <section class="karta">
    <h2>Działania</h2>
    <?php if ($wazny && $cert['email']): ?>
      <form method="post" action="?a=wyslij&amp;id=<?= e($cert['id']) ?>">
        <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
        <button class="przycisk przycisk--maly" type="submit">Wyślij mail ponownie</button>
      </form>
    <?php endif; ?>
    <?php if ($admin && $wazny): ?>
      <form method="post" action="?a=uniewaznij&amp;id=<?= e($cert['id']) ?>" class="formularz">
        <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
        <label>Powód unieważnienia (widoczny publicznie)
          <input name="powod" required maxlength="500" placeholder="np. certyfikat wystawiony omyłkowo">
        </label>
        <button class="przycisk przycisk--maly przycisk--niebezpieczny" type="submit">Unieważnij</button>
      </form>
    <?php endif; ?>
    <?php if ($admin && $cert['imie_nazwisko'] !== '(dane usunięte)'): ?>
      <form method="post" action="?a=anonimizuj&amp;id=<?= e($cert['id']) ?>" class="formularz" data-potwierdz="Usunąć dane osobowe? Tego nie da się cofnąć.">
        <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
        <p class="drobne">Wniosek RODO o usunięcie danych: imię, nazwisko, e-mail i firma zostaną trwale usunięte, a certyfikat unieważniony.</p>
        <button class="przycisk przycisk--maly przycisk--niebezpieczny" type="submit">Usuń dane osobowe</button>
      </form>
    <?php endif; ?>
    <?php if (!$admin): ?><p class="drobne">Unieważnianie i usuwanie danych — tylko administrator.</p><?php endif; ?>
  </section>
</div>

<section class="karta">
  <h2>Historia</h2>
  <ul class="historia">
    <?php foreach ($zdarzenia as $z): ?>
      <li><span class="nowrap"><?= e($z['kiedy']) ?></span> — <?= e($nazwyZdarzen[$z['rodzaj']] ?? $z['rodzaj']) ?> (<?= e($z['uzytkownik']) ?>)<?= $z['opis'] ? ': ' . e($z['opis']) : '' ?></li>
    <?php endforeach; ?>
  </ul>
</section>
<?php require __DIR__ . '/_dol.php'; ?>
