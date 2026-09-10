/* BioSys — lekki tracker heatmapy (klikni, ruch kursora, głębokość scrolla).
   Dane zbierane anonimowo, wysyłane wsadowo do backend/heatmap.php.
   Warunki działania:
     - zgoda statystyczna (localStorage 'biosys_consent_v1' → stats:true),
     - brak Do Not Track,
     - brak wyłącznika localStorage['bs_heatmap_off'] = '1',
     - strona nie jest otwarta w podglądzie heatmapy (iframe o name 'bs-heatmap-view').
   Współrzędne zapisujemy jako x w promilach szerokości dokumentu (0–1000)
   i y w pikselach dokumentu — dzięki temu podglądy z różnych ekranów są porównywalne. */
(function () {
  'use strict';

  var CFG = {
    endpoint: '/backend/heatmap.php',
    flushMs: 6000,           // co ile sekund wysyłamy paczkę
    maxBatch: 220,           // maks. zdarzeń w jednej paczce
    moveSampleMs: 120,       // próbkowanie ruchu kursora
    moveMinPx: 22,           // minimalny dystans, by zapisać ruch
    dwellPx: 26,             // promień, w którym kursor uznajemy za „stojący"
    dwellMs: 1200,           // po tym czasie bez ruchu dopisujemy wagę uwagi
    maxWeight: 40            // sufit wagi jednego punktu
  };

  if (window.__bsHeatmap) return;
  if (window.name === 'bs-heatmap-view' || window.top !== window.self) return;
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;
  try { if (localStorage.getItem('bs_heatmap_off') === '1') return; } catch (e) {}

  function consentOk() {
    try {
      var c = JSON.parse(localStorage.getItem('biosys_consent_v1') || 'null');
      return !!(c && c.stats);
    } catch (e) { return false; }
  }

  var sid;
  try {
    sid = sessionStorage.getItem('bs_hm_sid');
    if (!sid) { sid = Math.random().toString(36).slice(2, 12); sessionStorage.setItem('bs_hm_sid', sid); }
  } catch (e) { sid = Math.random().toString(36).slice(2, 12); }

  var buf = [];
  var scrollMax = 0;
  var lastMove = 0, lastX = 0, lastY = 0;
  var started = Date.now();
  var lastMoveIdx = -1;      // indeks ostatniego punktu ruchu w paczce (do wag uwagi)
  var lastMoveAt = 0;

  function docW() {
    return Math.max(document.documentElement.scrollWidth, document.body ? document.body.scrollWidth : 0, 1);
  }
  function docH() {
    return Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0, 1);
  }
  function device() {
    var w = window.innerWidth;
    return w < 700 ? 'm' : (w < 1100 ? 't' : 'd');
  }
  function pagePath() {
    return (location.pathname + (location.hash || '')).slice(0, 160) || '/';
  }
  function push(type, x, y, extra) {
    if (buf.length >= CFG.maxBatch) return -1;
    var e = { t: type, x: Math.round(x / docW() * 1000), y: Math.round(y) };
    if (extra) e.s = extra;
    buf.push(e);
    return buf.length - 1;
  }

  // Uwaga: kursor stojący w miejscu dopisuje wagę do ostatniego punktu ruchu,
  // zamiast produkować kolejne punkty w tym samym miejscu.
  function bumpDwell() {
    if (lastMoveIdx < 0 || !buf[lastMoveIdx]) return;
    var e = buf[lastMoveIdx];
    e.w = Math.min(CFG.maxWeight, (e.w || 1) + 1);
  }

  document.addEventListener('click', function (ev) {
    if (!consentOk()) return;
    var tgt = ev.target && ev.target.closest ? ev.target.closest('a,button,[role="button"],input,select,summary') : null;
    var label = '';
    if (tgt) {
      label = (tgt.getAttribute('aria-label') || tgt.textContent || tgt.value || tgt.tagName || '').trim().replace(/\s+/g, ' ').slice(0, 60);
    }
    push('c', ev.pageX, ev.pageY, label);
  }, true);

  document.addEventListener('mousemove', function (ev) {
    if (!consentOk()) return;
    var now = Date.now();
    if (now - lastMove < CFG.moveSampleMs) return;
    if (Math.abs(ev.pageX - lastX) + Math.abs(ev.pageY - lastY) < CFG.moveMinPx) return;
    lastMove = now; lastX = ev.pageX; lastY = ev.pageY;
    lastMoveIdx = push('m', ev.pageX, ev.pageY);
    lastMoveAt = now;
  }, { passive: true });

  // Zegar uwagi: co dwellMs sprawdzamy, czy kursor stoi w tym samym miejscu.
  setInterval(function () {
    if (!consentOk() || document.visibilityState === 'hidden') return;
    if (lastMoveIdx < 0) return;
    if (Date.now() - lastMoveAt < CFG.dwellMs) return;
    bumpDwell();
    lastMoveAt = Date.now();
  }, CFG.dwellMs);

  window.addEventListener('scroll', function () {
    var y = (window.pageYOffset || 0) + window.innerHeight;
    var pct = Math.min(100, Math.round(y / docH() * 100));
    if (pct > scrollMax) scrollMax = pct;
  }, { passive: true });

  function payload(final) {
    return JSON.stringify({
      v: 1,
      sid: sid,
      p: pagePath(),
      ref: (document.referrer || '').slice(0, 160),
      dev: device(),
      vw: window.innerWidth,
      dh: docH(),
      sc: scrollMax,
      dur: Math.round((Date.now() - started) / 1000),
      fin: final ? 1 : 0,
      ev: buf
    });
  }

  function flush(final) {
    if (!consentOk()) { buf = []; return; }
    if (!buf.length && !final) return;
    var body = payload(final);
    buf = [];
    try {
      if (final && navigator.sendBeacon) {
        navigator.sendBeacon(CFG.endpoint, new Blob([body], { type: 'application/json' }));
        return;
      }
    } catch (e) {}
    try {
      fetch(CFG.endpoint, { method: 'POST', body: body, headers: { 'Content-Type': 'application/json' }, keepalive: true });
    } catch (e) {}
  }

  setInterval(function () { flush(false); }, CFG.flushMs);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush(true); });
  window.addEventListener('pagehide', function () { flush(true); });

  window.__bsHeatmap = {
    off: function () { try { localStorage.setItem('bs_heatmap_off', '1'); } catch (e) {} },
    on: function () { try { localStorage.removeItem('bs_heatmap_off'); } catch (e) {} },
    flush: flush
  };
})();
