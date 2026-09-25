<?php
// Formularz wystawiania dla całej grupy z jednego szkolenia. Zmienne: $f, $bledy.
namespace BioSys\Certyfikat;
$tytul = 'Wystaw certyfikaty';
require __DIR__ . '/_gora.php';
$grupy = [];
foreach (programy() as $kod => $p) {
    $grupy[$p['system_nazwa']][$kod] = $p;
}
?>
<div class="naglowek"><h1>Wystaw certyfikaty po szkoleniu</h1></div>
<?php if ($bledy): ?>
  <div class="status status--blad" role="alert"><ul class="bledy"><?php foreach ($bledy as $b): ?><li><?= e($b) ?></li><?php endforeach; ?></ul></div>
<?php endif; ?>

<form method="post" action="?a=wystaw" class="formularz formularz--szeroki">
  <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">

  <fieldset>
    <legend>Szkolenie</legend>
    <label class="pelna">Program certyfikacji
      <select name="program" required>
        <option value="">— wybierz —</option>
        <?php foreach ($grupy as $system => $lista): ?>
          <optgroup label="<?= e($system) ?>">
            <?php foreach ($lista as $kod => $p): ?>
              <option value="<?= e($kod) ?>" <?= $f['program'] === $kod ? 'selected' : '' ?>><?= e($p['nazwa']) ?></option>
            <?php endforeach; ?>
          </optgroup>
        <?php endforeach; ?>
      </select>
    </label>
    <label>Data szkolenia <input type="date" name="data_szkolenia" value="<?= e($f['data_szkolenia']) ?>"></label>
    <label>Data wydania certyfikatu <input type="date" name="data_wydania" value="<?= e($f['data_wydania']) ?>" required></label>
    <label>Trener prowadzący <input name="trener" value="<?= e($f['trener']) ?>" maxlength="160"></label>
    <label>Firma klienta <input name="firma" value="<?= e($f['firma']) ?>" maxlength="200" placeholder="dla wszystkich, jeśli nie podano w wierszu"></label>
  </fieldset>

  <fieldset>
    <legend>Uczestnicy, którzy zaliczyli</legend>
    <label class="pelna"><span>Jedna osoba w wierszu: <code>Imię Nazwisko; e-mail; firma</code> — e-mail i firma opcjonalne. Można wkleić kolumny z Excela.</span>
      <textarea name="uczestnicy" rows="8" required placeholder="Anna Kowalska; anna.kowalska@firma.pl&#10;Piotr Nowak; p.nowak@firma.pl; Firma Sp. z o.o."><?= e($f['uczestnicy']) ?></textarea>
    </label>
    <label class="zaznacz"><input type="checkbox" name="pokaz_firme" value="1" <?= $f['pokaz_firme'] === '1' ? 'checked' : '' ?>> Pokazuj nazwę firmy na certyfikacie</label>
    <label class="zaznacz"><input type="checkbox" name="wyslij_mail" value="1" <?= $f['wyslij_mail'] === '1' ? 'checked' : '' ?>> Wyślij uczestnikom mail z certyfikatem i przyciskiem „Dodaj do LinkedIn”</label>
    <label class="zaznacz zaznacz--wazne"><input type="checkbox" name="potwierdzenie" value="1" required <?= $f['potwierdzenie'] === '1' ? 'checked' : '' ?>>
      Potwierdzam, że wymienione osoby zaliczyły część praktyczną oraz zostały poinformowane, że certyfikat z imieniem i nazwiskiem będzie publicznie dostępny pod unikalnym adresem.</label>
  </fieldset>

  <button class="przycisk" type="submit">Wystaw certyfikaty</button>
</form>
<?php require __DIR__ . '/_dol.php'; ?>
