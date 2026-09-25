<?php
// Lista certyfikatów. Zmienne: $certyfikaty, $filtr, $komunikat.
namespace BioSys\Certyfikat;
$tytul = 'Certyfikaty';
require __DIR__ . '/_gora.php';
?>
<div class="naglowek">
  <h1>Wystawione certyfikaty</h1>
  <a class="przycisk" href="?a=wystaw">+ Wystaw certyfikaty</a>
</div>
<?php if ($komunikat): ?><p class="status status--blad"><span><?= e($komunikat) ?></span></p><?php endif; ?>

<form class="filtry" method="get">
  <input type="search" name="szukaj" value="<?= e($filtr['szukaj'] ?? '') ?>" placeholder="Nazwisko, e-mail, firma, numer…" aria-label="Szukaj">
  <select name="program" aria-label="Program">
    <option value="">Wszystkie programy</option>
    <?php foreach (programy() as $kod => $p): ?>
      <option value="<?= e($kod) ?>" <?= ($filtr['program'] ?? '') === $kod ? 'selected' : '' ?>><?= e($p['nazwa']) ?></option>
    <?php endforeach; ?>
  </select>
  <select name="status" aria-label="Status">
    <option value="">Każdy status</option>
    <option value="wazny" <?= ($filtr['status'] ?? '') === 'wazny' ? 'selected' : '' ?>>Ważne</option>
    <option value="uniewazniony" <?= ($filtr['status'] ?? '') === 'uniewazniony' ? 'selected' : '' ?>>Unieważnione</option>
  </select>
  <button class="przycisk przycisk--maly" type="submit">Filtruj</button>
  <a class="link" href="?<?= e(http_build_query(['a' => 'eksport'] + $filtr)) ?>">Eksport CSV</a>
</form>

<?php if (!$certyfikaty): ?>
  <p class="pusto">Brak certyfikatów<?= array_filter($filtr) ? ' spełniających kryteria' : '' ?>. <a href="?a=wystaw">Wystaw pierwsze</a>.</p>
<?php else: ?>
<div class="tabela-okno">
<table class="tabela">
  <thead><tr><th>Numer</th><th>Osoba</th><th>Program</th><th>Wydano</th><th>Status</th></tr></thead>
  <tbody>
  <?php foreach ($certyfikaty as $c): ?>
    <tr>
      <td><a href="?a=certyfikat&amp;id=<?= e($c['id']) ?>" class="mono"><?= e($c['id']) ?></a></td>
      <td><strong><?= e($c['imie_nazwisko']) ?></strong><br><span class="drobne"><?= e(implode(' · ', array_filter([$c['firma'], $c['email']]))) ?></span></td>
      <td><?= e($c['program_nazwa']) ?></td>
      <td class="nowrap"><?= e($c['data_wydania']) ?></td>
      <td><?= $c['status'] === 'wazny' ? '<span class="znacznik znacznik--ok">ważny</span>' : '<span class="znacznik znacznik--blad">unieważniony</span>' ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
</div>
<p class="drobne">Pokazano <?= count($certyfikaty) ?> najnowszych. Pełna lista: eksport CSV.</p>
<?php endif; ?>
<?php require __DIR__ . '/_dol.php'; ?>
