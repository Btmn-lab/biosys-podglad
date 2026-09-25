<?php
// Wynik wystawienia grupy. Zmienne: $wynik (wiersze z kluczem _mail: true/false/null).
namespace BioSys\Certyfikat;
$tytul = 'Wystawiono';
require __DIR__ . '/_gora.php';
?>
<div class="naglowek"><h1>Wystawiono <?= count($wynik) ?> <?= count($wynik) === 1 ? 'certyfikat' : (count($wynik) % 10 >= 2 && count($wynik) % 10 <= 4 && (count($wynik) % 100 < 10 || count($wynik) % 100 >= 20) ? 'certyfikaty' : 'certyfikatów') ?></h1></div>
<p>Link do certyfikatu możesz też przekazać uczestnikowi sam — na stronie certyfikatu jest przycisk „Dodaj do profilu LinkedIn”.</p>
<div class="tabela-okno">
<table class="tabela">
  <thead><tr><th>Osoba</th><th>Numer</th><th>Mail</th><th>Link</th></tr></thead>
  <tbody>
  <?php foreach ($wynik as $c): ?>
    <tr>
      <td><strong><?= e($c['imie_nazwisko']) ?></strong><br><span class="drobne"><?= e($c['email'] ?? '') ?></span></td>
      <td><a class="mono" href="?a=certyfikat&amp;id=<?= e($c['id']) ?>"><?= e($c['id']) ?></a></td>
      <td><?php if ($c['_mail'] === true): ?><span class="znacznik znacznik--ok">wysłany</span>
          <?php elseif ($c['_mail'] === false): ?><span class="znacznik znacznik--blad">błąd wysyłki</span>
          <?php else: ?><span class="drobne">—</span><?php endif; ?></td>
      <td><button type="button" class="link" data-kopiuj-tekst="<?= e(urlCertyfikatu($c['id'])) ?>">kopiuj link</button>
          · <a class="link" href="<?= e(sciezka($c['id'])) ?>" target="_blank" rel="noopener">otwórz</a></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
</div>
<p><a class="przycisk" href="?a=wystaw">Wystaw kolejne</a> <a class="link" href="./">Wróć do listy</a></p>
<?php require __DIR__ . '/_dol.php'; ?>
