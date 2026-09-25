// Kopiowanie do schowka, drukowanie i potwierdzenia w panelu. Plik, nie skrypt w treści strony —
// żeby działał także pod ostrzejszym CSP bez 'unsafe-inline'.
(function () {
  'use strict';

  function kopiuj(tekst, przycisk) {
    var gotowe = function () {
      przycisk.classList.add('skopiowano');
      setTimeout(function () { przycisk.classList.remove('skopiowano'); }, 1800);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(tekst).then(gotowe, function () { zapasowo(tekst); gotowe(); });
    } else {
      zapasowo(tekst);
      gotowe();
    }
  }

  // Starsze przeglądarki i strony bez https nie mają Clipboard API.
  function zapasowo(tekst) {
    var pole = document.createElement('textarea');
    pole.value = tekst;
    pole.setAttribute('readonly', '');
    pole.style.position = 'fixed';
    pole.style.opacity = '0';
    document.body.appendChild(pole);
    pole.select();
    try { document.execCommand('copy'); } catch (e) { /* trudno — tekst jest zaznaczony */ }
    document.body.removeChild(pole);
  }

  document.addEventListener('click', function (zd) {
    var el = zd.target.closest('[data-kopiuj], [data-kopiuj-tekst], [data-drukuj]');
    if (!el) return;
    if (el.hasAttribute('data-drukuj')) {
      window.print();
    } else if (el.hasAttribute('data-kopiuj-tekst')) {
      kopiuj(el.getAttribute('data-kopiuj-tekst'), el);
    } else {
      var zrodlo = document.querySelector(el.getAttribute('data-kopiuj'));
      if (zrodlo) kopiuj(zrodlo.value || zrodlo.textContent, el);
    }
  });

  // Nieodwracalne działania w panelu pytają o potwierdzenie.
  document.addEventListener('submit', function (zd) {
    var pytanie = zd.target.getAttribute('data-potwierdz');
    if (pytanie && !window.confirm(pytanie)) zd.preventDefault();
  });
})();
