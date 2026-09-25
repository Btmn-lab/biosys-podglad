<?php
// Strona certyfikatu: weryfikacja dla każdego, przyciski LinkedIn dla właściciela.
// Zmienne: $cert, $program (albo null, gdy program wycofano z katalogu).
namespace BioSys\Certyfikat;

$wazny = $cert['status'] === 'wazny';
$url = urlCertyfikatu($cert['id']);
$wydawca = konfig()['wydawca'];
$akcent = $program['kolor'] ?? '#2563EB';

$tytul = $wazny
    ? $cert['imie_nazwisko'] . ' — ' . $cert['program_nazwa'] . ' | Certyfikat BioSys'
    : 'Certyfikat unieważniony | BioSys';
$opis = $wazny
    ? 'Certyfikat BioSys nr ' . $cert['id'] . ' wydany ' . dataSlownie($cert['data_wydania']) . '. '
      . ($program['opis'] ?? '')
    : 'Certyfikat BioSys nr ' . $cert['id'] . ' został unieważniony.';
$og = [
    'url'   => $url,
    'tytul' => $wazny ? $cert['imie_nazwisko'] . ' — certyfikat BioSys: ' . $cert['program_nazwa'] : 'Certyfikat BioSys unieważniony',
    'opis'  => $opis,
    'obraz' => url($cert['id'] . '.png'),
];
$jsonLd = $wazny ? jsonLd($cert) : null;

require __DIR__ . '/_gora.php';
?>
<?php if ($wazny): ?>
  <p class="status status--ok" role="status">
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.2 6.2-5 5.3a.9.9 0 0 1-1.3 0L5.8 11a.9.9 0 1 1 1.3-1.3l1.4 1.4 4.4-4.6a.9.9 0 0 1 1.3 1.2Z"/></svg>
    <span><strong>Certyfikat ważny.</strong> Wydany przez <?= e($wydawca['nazwa']) ?> i zapisany w rejestrze certyfikatów pod numerem <?= e($cert['id']) ?>.</span>
  </p>
<?php else: ?>
  <p class="status status--blad" role="status">
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm3.4 10.6a.9.9 0 1 1-1.3 1.3L10 11.3l-2.1 2.1a.9.9 0 1 1-1.3-1.3L8.7 10 6.6 7.9a.9.9 0 1 1 1.3-1.3L10 8.7l2.1-2.1a.9.9 0 1 1 1.3 1.3L11.3 10l2.1 2.1Z"/></svg>
    <span><strong>Certyfikat unieważniony<?= $cert['uniewazniono_at'] ? ' ' . e(dataSlownie($cert['uniewazniono_at'])) : '' ?>.</strong>
    Numer <?= e($cert['id']) ?> nie potwierdza już kwalifikacji.<?= $cert['powod_uniewaznienia'] ? ' Powód: ' . e($cert['powod_uniewaznienia']) . '.' : '' ?></span>
  </p>
<?php endif; ?>

<div class="uklad">
  <article class="cert<?= $wazny ? '' : ' cert--niewazny' ?>" style="--akcent: <?= e($akcent) ?>">
    <div class="cert__tresc">
      <p class="cert__nadtytul">Certyfikat BioSys</p>
      <h1 class="cert__imie"><?= e($cert['imie_nazwisko']) ?></h1>
      <p class="cert__program"><?= e($cert['program_nazwa']) ?></p>
      <?php if ($cert['pokaz_firme'] && $cert['firma']): ?>
        <p class="cert__firma"><?= e($cert['firma']) ?></p>
      <?php endif; ?>
      <dl class="cert__meta">
        <div><dt>Data wydania</dt><dd><?= e(dataSlownie($cert['data_wydania'])) ?></dd></div>
        <div><dt>Ważność</dt><dd><?= $wazny ? 'bezterminowo' : 'unieważniony' ?></dd></div>
        <div><dt>Numer</dt><dd class="cert__numer"><?= e($cert['id']) ?></dd></div>
        <?php if ($cert['trener']): ?>
          <div><dt>Trener</dt><dd><?= e($cert['trener']) ?></dd></div>
        <?php endif; ?>
      </dl>
    </div>
    <img class="cert__odznaka" src="<?= e(sciezka('odznaka/' . $cert['program'] . '.png')) ?>" width="600" height="600"
         alt="Odznaka: <?= e($cert['program_nazwa']) ?>">
  </article>

  <?php if ($wazny): ?>
  <aside class="akcje" aria-labelledby="akcje-tytul">
    <h2 id="akcje-tytul">Pochwal się na LinkedIn</h2>
    <p class="akcje__wstep">Certyfikat trafi do sekcji „Licencje i certyfikaty” z linkiem do tej strony — każdy rekruter czy klient sprawdzi go jednym kliknięciem.</p>

    <a class="przycisk przycisk--linkedin" href="<?= e(linkDodajDoProfilu($cert)) ?>" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
      Dodaj do profilu LinkedIn
    </a>
    <a class="przycisk przycisk--obrys" href="<?= e(linkUdostepnij($cert)) ?>" target="_blank" rel="noopener">Udostępnij w poście</a>

    <details class="rozwin">
      <summary>Propozycja treści posta</summary>
      <textarea id="tekst-posta" class="rozwin__tekst" rows="8" readonly><?= e(tekstPosta($cert)) ?></textarea>
      <button type="button" class="przycisk przycisk--maly" data-kopiuj="#tekst-posta">Kopiuj treść</button>
      <p class="podpowiedz">Wklej treść w oknie posta. LinkedIn sam dołączy grafikę certyfikatu z imieniem i nazwiskiem.</p>
    </details>

    <div class="akcje__inne">
      <button type="button" class="link" data-kopiuj-tekst="<?= e($url) ?>">Kopiuj link</button>
      <a class="link" href="<?= e(sciezka($cert['id'] . '.png')) ?>?pobierz=1">Pobierz grafikę</a>
      <a class="link" href="<?= e(sciezka($cert['id'] . '/druk')) ?>">Drukuj lub zapisz PDF</a>
    </div>

    <details class="rozwin">
      <summary>Wolisz wpisać ręcznie?</summary>
      <p class="podpowiedz">Profil → „Dodaj sekcję” → „Licencje i certyfikaty”. Pola:</p>
      <dl class="pola">
        <?php foreach ([
            'Nazwa'                => nazwaNaLinkedIn($cert),
            'Organizacja wydająca' => $wydawca['nazwa'],
            'Data wydania'         => (new \DateTimeImmutable($cert['data_wydania']))->format('m.Y'),
            'Data wygaśnięcia'     => 'brak — certyfikat bezterminowy',
            'Identyfikator'        => $cert['id'],
            'Adres URL'            => $url,
        ] as $pole => $wartosc): ?>
          <div>
            <dt><?= e($pole) ?></dt>
            <dd><span><?= e($wartosc) ?></span>
              <?php if (!str_starts_with($wartosc, 'brak')): ?>
                <button type="button" class="link link--maly" data-kopiuj-tekst="<?= e($wartosc) ?>">kopiuj</button>
              <?php endif; ?>
            </dd>
          </div>
        <?php endforeach; ?>
      </dl>
    </details>
  </aside>
  <?php endif; ?>
</div>

<?php if ($wazny && $program): ?>
<section class="zakres">
  <h2>Co potwierdza ten certyfikat</h2>
  <p><?= e($program['opis']) ?></p>
  <ul class="zakres__lista">
    <?php foreach ($program['umiejetnosci'] as $u): ?>
      <li><?= e($u) ?></li>
    <?php endforeach; ?>
  </ul>
  <h3>Jak się go zdobywa</h3>
  <p>Szkolenie BioSys z obsługi systemu <?= e($program['system_dopelniacz']) ?> na poziomie <?= e($program['poziom']) ?> prowadzone przez trenera BioSys<?= $cert['data_szkolenia'] ? ' (szkolenie: ' . e(dataSlownie($cert['data_szkolenia'])) . ')' : '' ?>, zakończone zaliczeniem części praktycznej na systemie.</p>
</section>
<?php endif; ?>

<section class="zakres zakres--cichy">
  <h2>Skąd wiadomo, że certyfikat jest prawdziwy</h2>
  <p>Ta strona jest w domenie <?= e(preg_replace('#^https?://#', '', $wydawca['url'])) ?> i pokazuje dane wprost z rejestru certyfikatów BioSys. Jeśli numer zostanie unieważniony, zobaczysz to tutaj od razu.
  Certyfikat jest też dostępny w otwartym standardzie <a href="<?= e(sciezka($cert['id'] . '.json')) ?>">Open Badges 2.0</a>.
  Pytania: <a href="mailto:<?= e($wydawca['email']) ?>"><?= e($wydawca['email']) ?></a>.</p>
</section>
<?php require __DIR__ . '/_dol.php'; ?>
