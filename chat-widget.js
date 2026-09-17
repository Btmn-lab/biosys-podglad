/**
 * Widżet asystenta BioSys.
 *
 * Wstawiany jednym znacznikiem, bez zależności:
 *     <script src="/assets/chat-widget.js" defer></script>
 *
 * Cały interfejs siedzi w Shadow DOM. Strona ma rozbudowany, globalny arkusz stylów
 * i kilka własnych runtime'ów — bez izolacji widżet albo przejąłby część tych reguł,
 * albo sam by je zepsuł. Shadow DOM zamyka temat raz, zamiast przykrywać go
 * specyficznością selektorów.
 *
 * Klucz API nie pojawia się tutaj ani razu — rozmowa idzie przez /backend/chat.php.
 */
(function () {
  'use strict';

  var ENDPOINT = '/backend/chat.php';
  var ENDPOINT_KONTAKT = '/backend/chat-kontakt.php';
  var API = '/zaplecze/api/';        // czat na żywo — trasy publiczne w API zaplecza
  var ODPYTYWANIE_MS = 3000;
  var PAMIEC = 'biosys-chat';       // sessionStorage: historia na czas wizyty
  var HISTORIA_MAX = 12;

  var POWITANIE =
    'Dzień dobry. Odpowiem na pytania o systemy RCP, kontrolę dostępu i Task Timer — ' +
    'co robią, dla kogo są i jak wygląda wdrożenie. W czym mogę pomóc?';

  // Zakres podany wprost, zanim ktoś zada pytanie o cenę i usłyszy „nie wiem".
  // Taniej jest uprzedzić niż rozczarować.
  var PODPOWIEDZI = [
    'Czym różni się RCP od kontroli dostępu?',
    'Jak wygląda wdrożenie?',
    'Rozliczamy czas pracy ręcznie — co to zmieni?'
  ];

  /* ------------------------------------------------------------------ stan */

  var historia = [];
  try {
    var zapisana = sessionStorage.getItem(PAMIEC);
    if (zapisana) historia = JSON.parse(zapisana) || [];
  } catch (e) { historia = []; }        // tryb prywatny albo zablokowane dane witryny

  function zapamietaj() {
    try { sessionStorage.setItem(PAMIEC, JSON.stringify(historia.slice(-HISTORIA_MAX))); } catch (e) {}
  }

  /* ----------------------------------------------------------------- style */

  var STYL = [
    ':host{all:initial}',
    '*,*::before,*::after{box-sizing:border-box}',
    ':host{',
    '  --royal:#2563EB; --navy:#0F172A; --sky:#38BDF8; --turkus:#14B8A6;',
    '  --chmura:#F8FAFC; --stal:#64748B;',
    "  font-family:'Open Sans',system-ui,-apple-system,'Segoe UI',Arial,sans-serif;",
    '}',

    '.uchwyt{position:fixed;right:24px;bottom:24px;z-index:9200;width:60px;height:60px;',
    '  border:0;border-radius:50%;cursor:pointer;background:var(--royal);color:#fff;',
    '  box-shadow:0 8px 24px rgba(37,99,235,.35);display:grid;place-items:center;',
    '  transition:transform .18s ease, box-shadow .18s ease}',
    '.uchwyt:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(37,99,235,.45)}',
    '.uchwyt:focus-visible{outline:3px solid var(--sky);outline-offset:3px}',
    '.uchwyt svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2;',
    '  stroke-linecap:round;stroke-linejoin:round}',
    '.uchwyt[hidden]{display:none}',

    // To samo co w regule dla telefonu: `vh` jako zapas, `dvh` dla silników,
    // które je znają. Na tablecie w pionie pasek adresu też się zwija.
    '.panel{position:fixed;right:24px;bottom:24px;z-index:9200;width:384px;max-width:calc(100vw - 32px);',
    '  height:560px;max-height:calc(100vh - 48px);max-height:calc(100dvh - 48px);',
    '  background:var(--chmura);border-radius:16px;',
    '  box-shadow:0 24px 60px rgba(15,23,42,.28);display:flex;flex-direction:column;overflow:hidden}',
    '.panel[hidden]{display:none}',

    '.naglowek{background:linear-gradient(120deg,var(--royal),var(--turkus));color:#fff;',
    '  padding:16px 18px;display:flex;align-items:center;gap:12px;flex:none}',
    ".naglowek h2{margin:0;font-family:'Montserrat',system-ui,sans-serif;font-size:15px;font-weight:700}",
    '.zamknij{margin-left:auto;background:rgba(255,255,255,.16);border:0;border-radius:8px;',
    '  width:32px;height:32px;color:#fff;cursor:pointer;font-size:19px;line-height:1;flex:none}',
    '.zamknij:hover{background:rgba(255,255,255,.28)}',
    '.zamknij:focus-visible{outline:2px solid #fff;outline-offset:2px}',

    '.rozmowa{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:12px}',
    '.dymek{max-width:86%;padding:11px 14px;border-radius:14px;font-size:14px;line-height:1.55;',
    '  white-space:pre-wrap;word-wrap:break-word}',
    '.od-bota{align-self:flex-start;background:#fff;color:var(--navy);',
    '  border:1px solid #E2E8F0;border-bottom-left-radius:5px}',
    '.ode-mnie{align-self:flex-end;background:var(--royal);color:#fff;border-bottom-right-radius:5px}',
    '.blad{align-self:stretch;background:#FEF3C7;color:#78350F;border:1px solid #FCD34D;',
    '  max-width:100%;font-size:13px}',
    '.dymek a{color:inherit;text-decoration:underline;text-underline-offset:2px}',
    '.od-bota a{color:var(--royal)}',


    '.oddaj{align-self:flex-start;background:var(--royal);color:#fff;border:0;border-radius:10px;',
    '  padding:10px 15px;font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;',
    '  margin-top:-2px}',
    '.oddaj:hover{background:#1D4ED8}',
    '.oddaj:focus-visible{outline:2px solid var(--navy);outline-offset:2px}',
    '.oddaj[hidden]{display:none}',

    '.formularz{align-self:stretch;background:#fff;border:1px solid #E2E8F0;border-radius:14px;',
    '  padding:14px;display:flex;flex-direction:column;gap:9px}',
    ".formularz h3{margin:0;font-family:'Montserrat',system-ui,sans-serif;font-size:13.5px;",
    '  color:var(--navy);font-weight:700}',
    '.formularz p.wyjasnienie{margin:0;font-size:12px;color:var(--stal);line-height:1.5}',
    '.formularz label{font-size:11.5px;color:var(--stal);display:flex;flex-direction:column;gap:3px}',
    '.formularz input[type=text],.formularz input[type=email],.formularz input[type=tel]{',
    '  border:1px solid #CBD5E1;border-radius:8px;padding:8px 10px;font-family:inherit;',
    '  font-size:13.5px;color:var(--navy);background:#fff}',
    '.formularz input:focus{outline:2px solid var(--royal);outline-offset:-1px;border-color:var(--royal)}',
    '.formularz .zgoda{flex-direction:row;align-items:flex-start;gap:7px;font-size:11.5px;line-height:1.45}',
    '.formularz .zgoda input{margin-top:2px;flex:none;accent-color:var(--royal)}',
    '.formularz .przyciski{display:flex;gap:8px;margin-top:2px}',
    '.formularz button{flex:1;border:0;border-radius:9px;padding:9px;font-size:13px;font-weight:600;',
    '  cursor:pointer;font-family:inherit}',
    '.formularz .wyslij-zgloszenie{background:var(--royal);color:#fff}',
    '.formularz .wyslij-zgloszenie:disabled{background:#CBD5E1;cursor:not-allowed}',
    '.formularz .anuluj{background:#F1F5F9;color:var(--stal)}',
    '.formularz .blad-pola{color:#B45309;font-size:11.5px;margin:0}',   // Amber Dark

    '.podpowiedzi{display:flex;flex-wrap:wrap;gap:7px;padding:0 18px 14px}',
    '.podpowiedzi[hidden]{display:none}',
    '.podpowiedzi button{background:#fff;border:1px solid #CBD5E1;color:var(--royal);',
    '  border-radius:999px;padding:7px 13px;font-size:12.5px;cursor:pointer;font-family:inherit}',
    '.podpowiedzi button:hover{border-color:var(--royal);background:#EFF6FF}',
    '.podpowiedzi button:focus-visible{outline:2px solid var(--royal);outline-offset:2px}',

    '.pisze{align-self:flex-start;display:flex;gap:5px;padding:13px 15px;background:#fff;',
    '  border:1px solid #E2E8F0;border-radius:14px;border-bottom-left-radius:5px}',
    '.pisze span{width:7px;height:7px;border-radius:50%;background:var(--stal);',
    '  animation:puls 1.3s infinite ease-in-out}',
    '.pisze span:nth-child(2){animation-delay:.18s}',
    '.pisze span:nth-child(3){animation-delay:.36s}',
    '@keyframes puls{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}',

    '.stopka{flex:none;border-top:1px solid #E2E8F0;background:#fff;padding:11px 12px}',
    '.pole{display:flex;gap:8px;align-items:flex-end}',
    '.pole textarea{flex:1;resize:none;border:1px solid #CBD5E1;border-radius:10px;padding:10px 12px;',
    '  font-family:inherit;font-size:14px;line-height:1.45;color:var(--navy);max-height:110px;background:#fff}',
    '.pole textarea:focus{outline:2px solid var(--royal);outline-offset:-1px;border-color:var(--royal)}',
    '.wyslij{flex:none;width:40px;height:40px;border:0;border-radius:10px;background:var(--royal);',
    '  color:#fff;cursor:pointer;display:grid;place-items:center}',
    '.wyslij:disabled{background:#CBD5E1;cursor:not-allowed}',
    '.wyslij:focus-visible{outline:2px solid var(--navy);outline-offset:2px}',
    '.wyslij svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;',
    '  stroke-linecap:round;stroke-linejoin:round}',
    '.nota{margin:7px 2px 0;font-size:10.5px;color:var(--stal);line-height:1.4}',
    '.do-czlowieka{background:none;border:0;padding:0;font:inherit;color:var(--royal);',
    '  text-decoration:underline;text-underline-offset:2px;cursor:pointer}',
    '.do-czlowieka:hover{color:var(--navy)}',
    '.do-czlowieka:focus-visible{outline:2px solid var(--royal);outline-offset:2px;border-radius:3px}',

    // Na telefonie `100vh` to wysokość okna z ROZWINIĘTYM paskiem adresu, a nie
    // to, co widać. Panel wychodził więc pod pasek Safari/Chrome razem z polem do
    // pisania na swoim dole — a że jest `position:fixed`, przewijanie strony nic
    // nie dawało: rozmowy po prostu nie dało się prowadzić z telefonu.
    // `dvh` liczy wysokość faktycznie widoczną. Kolejność jest istotna: `vh` stoi
    // pierwsze jako zapas dla silników bez `dvh` (Safari poniżej 15.4), a te,
    // które `dvh` znają, nadpisują je drugą deklaracją.
    // `safe-area-inset-bottom` odsuwa panel i uchwyt od paska gestu iPhone'a.
    '@media (max-width:520px){',
    '  .panel{right:8px;left:8px;width:auto;max-height:none;',
    '    bottom:calc(8px + env(safe-area-inset-bottom, 0px));',
    '    height:calc(100vh - 16px);',
    '    height:calc(100dvh - 16px - env(safe-area-inset-bottom, 0px))}',
    '  .uchwyt{right:16px;bottom:calc(16px + env(safe-area-inset-bottom, 0px))}',
    '}',
    '@media (prefers-reduced-motion:reduce){',
    '  .uchwyt,.pisze span{transition:none;animation:none}',
    '}'
  ].join('\n');

  /* ------------------------------------------------------------- szkielet */

  var host = document.createElement('div');
  host.setAttribute('data-biosys-chat', '');
  var cien = host.attachShadow({ mode: 'open' });
  var styl = document.createElement('style');
  styl.textContent = STYL;
  cien.appendChild(styl);

  var korzen = document.createElement('div');
  korzen.innerHTML = [
    '<button class="uchwyt" type="button" aria-label="Otwórz asystenta BioSys">',
    '  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-2.8-.4L3 21l1.6-4.6A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z"/></svg>',
    '</button>',
    '<div class="panel" role="dialog" aria-modal="false" aria-label="Asystent BioSys" hidden>',
    '  <div class="naglowek">',
    '    <div>',
    '      <h2>Asystent BioSys</h2>',
    '    </div>',
    '    <button class="zamknij" type="button" aria-label="Zamknij asystenta">&times;</button>',
    '  </div>',
    '  <div class="rozmowa" role="log" aria-live="polite" aria-atomic="false"></div>',
    '  <div class="podpowiedzi"></div>',
    '  <div class="stopka">',
    '    <div class="pole">',
    '      <textarea rows="1" placeholder="Napisz pytanie…" aria-label="Treść pytania" maxlength="1000"></textarea>',
    '      <button class="wyslij" type="button" aria-label="Wyślij pytanie">',
    '        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    '      </button>',
    '    </div>',
    '    <p class="nota">Odpowiada asystent AI — może się pomylić. W sprawach wiążących potwierdź z zespołem BioSys. <button type="button" class="do-czlowieka">Wolisz rozmawiać z człowiekiem?</button></p>',
    '  </div>',
    '</div>'
  ].join('');
  cien.appendChild(korzen);

  var uchwyt     = cien.querySelector('.uchwyt');
  var panel      = cien.querySelector('.panel');
  var zamknij    = cien.querySelector('.zamknij');
  var rozmowa    = cien.querySelector('.rozmowa');
  var podpowiedzi = cien.querySelector('.podpowiedzi');
  var pole       = cien.querySelector('textarea');
  var wyslijBtn  = cien.querySelector('.wyslij');

  /* ----------------------------------------------------------- rysowanie */

  function naDol() { rozmowa.scrollTop = rozmowa.scrollHeight; }

  /**
   * Wstawia tekst odpowiedzi, zamieniając adresy na odnośniki.
   * Treść od modelu traktujemy jak dane, nie jak HTML: najpierw tworzymy węzły
   * tekstowe, a znacznik <a> powstaje wyłącznie z dopasowanego adresu.
   */
  function wstawTresc(el, tekst) {
    var wzor = /https?:\/\/[^\s<>"')]+/g;
    var ostatni = 0, m;
    while ((m = wzor.exec(tekst)) !== null) {
      if (m.index > ostatni) el.appendChild(document.createTextNode(tekst.slice(ostatni, m.index)));
      var adres = m[0].replace(/[.,;:!?]+$/, '');     // interpunkcja kończąca zdanie
      var a = document.createElement('a');
      a.href = adres;
      a.textContent = adres;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      el.appendChild(a);
      ostatni = m.index + adres.length;
    }
    el.appendChild(document.createTextNode(tekst.slice(ostatni)));
  }

  function dymek(rola, tekst) {
    var el = document.createElement('div');
    el.className = 'dymek ' + (rola === 'user' ? 'ode-mnie' : rola === 'blad' ? 'od-bota blad' : 'od-bota');
    wstawTresc(el, tekst);
    rozmowa.appendChild(el);
    naDol();
    return el;
  }

  function pokazPodpowiedzi() {
    podpowiedzi.textContent = '';
    if (historia.length > 0) { podpowiedzi.hidden = true; return; }
    podpowiedzi.hidden = false;
    PODPOWIEDZI.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = t;
      b.addEventListener('click', function () { pole.value = t; wyslij(); });
      podpowiedzi.appendChild(b);
    });
  }

  function odtworz() {
    rozmowa.textContent = '';
    // Bez noty o cenach pod powitaniem. Uprzedzanie pytania, którego nikt nie zadał,
    // brzmi jak zastrzeżenie w umowie — a rozmowa ma się zaczynać od „w czym pomóc".
    // Formuła „zanim przejdziemy do kwestii finansowych" jest w promocie i pada wtedy,
    // gdy rozmówca faktycznie zapyta o cenę.
    dymek('bot', POWITANIE);
    historia.forEach(function (w) { dymek(w.rola === 'bot' ? 'bot' : 'user', w.tresc); });
    pokazPodpowiedzi();
  }

  /* ------------------------------------------- przekazanie do człowieka */

  /* ------------------------------------------- przekazanie do człowieka */

  /**
   * Dwie drogi do człowieka, w tej kolejności:
   *
   *   1. Czat na żywo — gdy ktoś z zespołu jest przy konsoli. Pytamy o to serwer
   *      PRZED zaproponowaniem rozmowy, bo poczekalnia, w której nikt nie odpowiada,
   *      jest gorsza niż uczciwe „napisz, odezwiemy się".
   *   2. Formularz — gdy nikogo nie ma, gdy nikt nie przejął rozmowy w rozsądnym
   *      czasie, albo gdy czat padnie. Działa zawsze i o trzeciej w nocy.
   *
   * Żadna ścieżka błędu nie może zostawić rozmówcy bez wyjścia — stąd formularz
   * jako domyślne zachowanie przy każdym niepowodzeniu.
   */
  var tryb = 'bot';            // 'bot' | 'oczekuje' | 'czat'
  var tokenCzatu = null;
  var ostatniaWiadomosc = 0;
  var timerCzatu = null;
  // Odliczanie „nikt nie odebrał". Trzymamy uchwyt, bo rozmowa potrafi się skończyć
  // wcześniej — a niewykasowany licznik odpalał się wtedy w trakcie NASTĘPNEJ rozmowy
  // i zamykał ją przed czasem, skoro warunek „tryb === 'czat' i zero wiadomości"
  // pasował równie dobrze do tej nowej.
  var timerOczekiwania = null;

  function oddajCzlowiekowi() {
    if (cien.querySelector('.formularz')) return;
    var stary = cien.querySelector('.oddaj');
    if (stary) stary.remove();

    fetch(API + 'czat-dostepnosc', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.ok && d.dostepny) zglosDoCzatu();
        else pokazFormularz();
      })
      .catch(function () { pokazFormularz(); });   // API niedostępne → formularz
  }

  function zglosDoCzatu() {
    tryb = 'oczekuje';
    var info = dymek('bot', 'Łączę z konsultantem — chwileczkę.');

    fetch(API + 'czat-zglos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ strona: location.pathname, historia: historia.slice(-HISTORIA_MAX) })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.ok || !d.dostepny || !d.token) {
          // Operator zniknął między sprawdzeniem a zgłoszeniem — rzecz normalna.
          info.remove(); tryb = 'bot'; pokazFormularz();
          return;
        }
        tokenCzatu = d.token;
        tryb = 'czat';
        try { sessionStorage.setItem(PAMIEC + '-token', tokenCzatu); } catch (e) {}
        pole.placeholder = 'Napisz do konsultanta…';
        timerCzatu = setInterval(odbierzZCzatu, ODPYTYWANIE_MS);
        // Nikt nie przejął w wyznaczonym czasie — nie każemy czekać w nieskończoność.
        timerOczekiwania = setTimeout(function () {
          timerOczekiwania = null;
          if (tryb === 'czat' && ostatniaWiadomosc === 0) {
            dymek('bot', 'Nikt nie odebrał w tej chwili. Zostaw kontakt, a zespół się odezwie.');
            zakonczCzat();
            pokazFormularz();
          }
        }, (d.oczekiwanie_sek || 90) * 1000);
      })
      .catch(function () { info.remove(); tryb = 'bot'; pokazFormularz(); });
  }

  function odbierzZCzatu() {
    if (!tokenCzatu) return;
    // Token jedzie nagłówkiem, nie w adresie. W adresie lądowałby w logach dostępu
    // serwera i w nagłówku Referer — a token to klucz do całej treści rozmowy.
    fetch(API + 'czat-odbierz?od=' + ostatniaWiadomosc,
          { credentials: 'same-origin', headers: { 'X-Czat-Token': tokenCzatu } })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.ok) { zakonczCzat(); return; }
        (d.wiadomosci || []).forEach(function (w) {
          if (w.id > ostatniaWiadomosc) ostatniaWiadomosc = w.id;
          // Własnych wypowiedzi i historii sprzed przekazania nie dublujemy —
          // one już są na ekranie.
          if (w.autor === 'operator') dymek('bot', w.tresc);
        });
        if (d.status === 'zamknieta') {
          dymek('bot', 'Rozmowa z konsultantem została zakończona. Mogę pomóc w czymś jeszcze?');
          zakonczCzat();
        }
      })
      .catch(function () { /* chwilowy brak sieci — kolejne odpytanie spróbuje znowu */ });
  }

  function zakonczCzat() {
    if (timerCzatu) { clearInterval(timerCzatu); timerCzatu = null; }
    if (timerOczekiwania) { clearTimeout(timerOczekiwania); timerOczekiwania = null; }
    tryb = 'bot';
    tokenCzatu = null;
    ostatniaWiadomosc = 0;
    pole.placeholder = 'Napisz pytanie…';
    try { sessionStorage.removeItem(PAMIEC + '-token'); } catch (e) {}
  }

  function pokazOddaj() {
    if (cien.querySelector('.formularz')) return;   // formularz już otwarty
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'oddaj';
    b.textContent = 'Poproś o kontakt';
    b.addEventListener('click', function () {
      b.remove();
      oddajCzlowiekowi();
    });
    rozmowa.appendChild(b);
    naDol();
  }

  function pokazFormularz() {
    var f = document.createElement('form');
    f.className = 'formularz';
    f.innerHTML = [
      '<h3>Przekażę sprawę zespołowi</h3>',
      '<p class="wyjasnienie">Razem ze zgłoszeniem wyślemy przebieg tej rozmowy, ',
      'żebyś nie musiał tłumaczyć wszystkiego drugi raz.</p>',
      '<label>Imię i nazwisko<input type="text" name="imie" maxlength="120" required></label>',
      '<label>E-mail<input type="email" name="email" maxlength="160" required></label>',
      '<label>Telefon (opcjonalnie)<input type="tel" name="telefon" maxlength="40"></label>',
      '<label>Firma (opcjonalnie)<input type="text" name="firma" maxlength="160"></label>',
      '<label class="zgoda"><input type="checkbox" name="zgoda" required>',
      '<span>Zgadzam się na kontakt i przetwarzanie moich danych w celu odpowiedzi ',
      'na zgłoszenie.</span></label>',
      '<p class="blad-pola" hidden></p>',
      '<div class="przyciski">',
      '  <button type="submit" class="wyslij-zgloszenie">Wyślij</button>',
      '  <button type="button" class="anuluj">Anuluj</button>',
      '</div>'
    ].join('');
    rozmowa.appendChild(f);
    // Podpowiedzi startowe nachodziłyby na formularz — i tak nie są teraz w temacie.
    podpowiedzi.hidden = true;
    naDol();
    f.querySelector('input[name=imie]').focus();

    f.querySelector('.anuluj').addEventListener('click', function () {
      f.remove();
      pokazPodpowiedzi();
      dymek('bot', 'Jasne. Gdybyś zmienił zdanie — napisz, a przekażę sprawę dalej.');
    });

    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var blad = f.querySelector('.blad-pola');
      var przycisk = f.querySelector('.wyslij-zgloszenie');
      blad.hidden = true;
      przycisk.disabled = true;
      przycisk.textContent = 'Wysyłam…';

      fetch(ENDPOINT_KONTAKT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imie: f.imie.value,
          email: f.email.value,
          telefon: f.telefon.value,
          firma: f.firma.value,
          zgoda: f.zgoda.checked,
          strona: location.pathname,
          historia: historia.slice(-HISTORIA_MAX)
        })
      })
        .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
        .then(function (dane) {
          if (dane && dane.ok) {
            f.remove();
            dymek('bot', dane.message ||
              'Dziękujemy. Zespół odezwie się w ciągu jednego dnia roboczego.');
          } else {
            blad.textContent = (dane && dane.error) || 'Nie udało się wysłać zgłoszenia.';
            blad.hidden = false;
            przycisk.disabled = false;
            przycisk.textContent = 'Wyślij';
          }
        })
        .catch(function () {
          blad.textContent = 'Brak połączenia. Napisz na biuro@biosys.pl albo zadzwoń: +48 12 378 95 37.';
          blad.hidden = false;
          przycisk.disabled = false;
          przycisk.textContent = 'Wyślij';
        });
    });
  }

  /* ------------------------------------------------------------- wysyłka */

  var czeka = false;

  function wyslij() {
    var tekst = pole.value.trim();
    if (!tekst || czeka) return;

    pole.value = '';
    pole.style.height = 'auto';
    dymek('user', tekst);
    podpowiedzi.hidden = true;

    // W trybie czatu wiadomość idzie do operatora, nie do modelu. Historia rozmowy
    // z człowiekiem nie wraca do bota — gdyby wrócił do gry, nie ma jej udawać.
    if (tryb === 'czat' && tokenCzatu) {
      fetch(API + 'czat-wyslij', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ token: tokenCzatu, tresc: tekst })
      })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (!d || !d.ok) {
            dymek('blad', (d && d.error) || 'Nie udało się wysłać wiadomości do konsultanta.');
            zakonczCzat();
          }
        })
        .catch(function () {
          dymek('blad', 'Brak połączenia z konsultantem. Zostaw kontakt, a zespół się odezwie.');
          zakonczCzat();
          pokazFormularz();
        });
      return;
    }

    var poprzednia = historia.slice(-HISTORIA_MAX);
    historia.push({ rola: 'user', tresc: tekst });
    zapamietaj();

    czeka = true;
    wyslijBtn.disabled = true;
    var kropki = document.createElement('div');
    kropki.className = 'pisze';
    kropki.setAttribute('aria-label', 'Asystent pisze odpowiedź');
    kropki.innerHTML = '<span></span><span></span><span></span>';
    rozmowa.appendChild(kropki);
    naDol();

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pytanie: tekst, historia: poprzednia })
    })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (dane) {
        kropki.remove();
        if (dane && dane.ok && dane.odpowiedz) {
          dymek('bot', dane.odpowiedz);
          historia.push({ rola: 'bot', tresc: dane.odpowiedz });
          zapamietaj();
          // Model uznał, że sprawa jest poza jego kompetencjami — nie zostawiamy
          // klienta z „nie wiem", tylko od razu dajemy drogę do człowieka.
          if (dane.czlowiek) pokazOddaj();
        } else {
          dymek('blad', (dane && dane.error) ||
            'Nie udało się uzyskać odpowiedzi. Napisz na biuro@biosys.pl albo zadzwoń: +48 12 378 95 37.');
        }
      })
      .catch(function () {
        kropki.remove();
        dymek('blad', 'Brak połączenia z asystentem. Sprawdź internet albo napisz na biuro@biosys.pl.');
      })
      .then(function () {
        czeka = false;
        wyslijBtn.disabled = false;
        pole.focus();
      });
  }

  /* ------------------------------------------------------------ zdarzenia */

  function otworz() {
    panel.hidden = false;
    uchwyt.hidden = true;
    if (!rozmowa.childNodes.length) odtworz();
    pole.focus();
    naDol();
  }
  function schowaj() {
    panel.hidden = true;
    uchwyt.hidden = false;
    uchwyt.focus();
  }

  uchwyt.addEventListener('click', otworz);
  zamknij.addEventListener('click', schowaj);
  wyslijBtn.addEventListener('click', wyslij);
  cien.querySelector('.do-czlowieka').addEventListener('click', function () {
    if (tryb === 'czat') return;          // już rozmawia z człowiekiem
    oddajCzlowiekowi();
  });

  pole.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); wyslij(); }
  });
  pole.addEventListener('input', function () {
    pole.style.height = 'auto';
    pole.style.height = Math.min(pole.scrollHeight, 110) + 'px';
  });
  cien.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) schowaj();
  });

  function start() { document.body.appendChild(host); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
