(() => {
  if (customElements.get('puzzle-join')) return;

  const PIECES = [
    { d: 'M 0,110 L 300,110 L 300,203 C 360,163 360,307 300,267 L 300,360 L 0,360 Z',
      a: '#A5E4FD', b: '#38BDF8', ink: '#0F172A', num: '01', label: 'ANALIZA', cx: 150, avail: 264 },
    { d: 'M 300,110 L 600,110 L 600,203 C 660,163 660,307 600,267 L 600,360 L 300,360 L 300,267 C 360,307 360,163 300,203 Z',
      a: '#7FEADD', b: '#14B8A6', ink: '#0F172A', num: '02', label: 'PROJEKT', cx: 474, avail: 238 },
    { d: 'M 600,110 L 900,110 L 900,203 C 960,163 960,307 900,267 L 900,360 L 600,360 L 600,267 C 660,307 660,163 600,203 Z',
      a: '#FCD34D', b: '#F59E0B', ink: '#0F172A', num: '03', label: 'WDROŻENIE', cx: 774, avail: 238 },
    { d: 'M 900,110 L 1200,110 L 1200,360 L 900,360 L 900,267 C 960,307 960,163 900,203 Z',
      a: '#7BA8F9', b: '#2563EB', ink: '#FFFFFF', num: '04', label: 'OPIEKA', cx: 1074, avail: 238 }
  ];

  const TRACKS = [
    { from: 'translate(-230px,36px) rotate(-13deg) scale(.84)', over: 'translate(11px,-2px) rotate(1.6deg) scale(1.025)', in0: 2, in1: 11, in2: 15, out0: 85, out1: 96 },
    { from: 'translate(-34px,186px) rotate(11deg) scale(.84)', over: 'translate(-2px,-10px) rotate(-1.4deg) scale(1.025)', in0: 9, in1: 18, in2: 22, out0: 86, out1: 96 },
    { from: 'translate(34px,-186px) rotate(-10deg) scale(.84)', over: 'translate(2px,10px) rotate(1.4deg) scale(1.025)', in0: 16, in1: 25, in2: 29, out0: 87, out1: 97 },
    { from: 'translate(230px,36px) rotate(13deg) scale(.84)', over: 'translate(-11px,-2px) rotate(-1.6deg) scale(1.025)', in0: 23, in1: 32, in2: 36, out0: 88, out1: 98 }
  ];

  const JOINS = [{ x: 300, at: 18 }, { x: 600, at: 25 }, { x: 900, at: 32 }];

  const kf = [
    ...TRACKS.map((t, i) => `@keyframes pjIn${i}{
      0%,${t.in0}%{transform:${t.from};opacity:0}
      ${t.in1}%{transform:${t.over};opacity:1}
      ${t.in2}%,${t.out0}%{transform:translate(0,0) rotate(0) scale(1);opacity:1}
      ${t.out1}%,100%{transform:${t.from};opacity:0}
    }`),
    ...JOINS.map((j, i) => `@keyframes pjFlash${i}{
      0%,${j.at - 3}%{opacity:0;transform:scale(.5)}
      ${j.at + 1}%{opacity:1;transform:scale(1)}
      ${j.at + 8}%,100%{opacity:0;transform:scale(1.7)}
    }
    @keyframes pjBurst${i}{
      0%,${j.at - 2}%{opacity:0;transform:scale(.25)}
      ${j.at + 1}%{opacity:.9;transform:scale(1)}
      ${j.at + 10}%,100%{opacity:0;transform:scale(1.85)}
    }`),
    `@keyframes pjSheen{
      0%,40%{transform:translateX(-620px);opacity:0}
      43%{opacity:.9}
      56%{opacity:.9}
      60%,100%{transform:translateX(1980px);opacity:0}
    }`,
    `@keyframes pjGround{
      0%,10%{opacity:0;transform:scaleX(.5)}
      40%{opacity:1;transform:scaleX(1)}
      84%{opacity:1;transform:scaleX(1)}
      96%,100%{opacity:0;transform:scaleX(.5)}
    }`,
    `@keyframes pjFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}`
  ].join('\n');

  const css = `
    :host{display:block;width:100%}
    svg{display:block;width:100%;height:auto;overflow:visible}
    .pj-stage{animation:pjFloat 7.5s ease-in-out infinite}
    .pj-piece{animation:var(--pj-dur,14s) cubic-bezier(.2,.86,.22,1.04) infinite both;transform-box:fill-box;transform-origin:center;filter:drop-shadow(0 10px 16px rgba(15,23,42,.2))}
    .pj-p0{animation-name:pjIn0}
    .pj-p1{animation-name:pjIn1}
    .pj-p2{animation-name:pjIn2}
    .pj-p3{animation-name:pjIn3}
    .pj-label{font-family:'Montserrat',system-ui,sans-serif;font-weight:700;font-size:38px;letter-spacing:.005em}
    .pj-num{font-family:'Montserrat',system-ui,sans-serif;font-weight:700;font-size:29px;letter-spacing:.14em;opacity:.8}
    .pj-sheen{animation:var(--pj-dur,14s) linear infinite both;animation-name:pjSheen;opacity:0}
    .pj-flash,.pj-burst{animation:var(--pj-dur,14s) ease-out infinite both;transform-box:fill-box;transform-origin:center;opacity:0}
    .pj-f0{animation-name:pjFlash0}
    .pj-f1{animation-name:pjFlash1}
    .pj-f2{animation-name:pjFlash2}
    .pj-b0{animation-name:pjBurst0}
    .pj-b1{animation-name:pjBurst1}
    .pj-b2{animation-name:pjBurst2}
    .pj-ground{animation:var(--pj-dur,14s) ease-in-out infinite both;animation-name:pjGround;transform-box:fill-box;transform-origin:center;opacity:0}
    .pj-paused .pj-piece,.pj-paused .pj-flash,.pj-paused .pj-burst,.pj-paused .pj-sheen,.pj-paused .pj-ground,.pj-paused .pj-stage{animation-play-state:paused}
    @media (prefers-reduced-motion: reduce){
      .pj-piece{animation:none;opacity:1;transform:none}
      .pj-stage,.pj-sheen{animation:none}
      .pj-flash,.pj-burst{display:none}
      .pj-ground{animation:none;opacity:1}
    }
    ${kf}
  `;

  const svgNS = 'http://www.w3.org/2000/svg';
  const RAYS = [0, 60, 120, 180, 240, 300];

  class PuzzleJoin extends HTMLElement {
    connectedCallback() {
      if (this._mounted) return;
      this._mounted = true;
      const root = this.attachShadow({ mode: 'open' });
      const style = document.createElement('style');
      style.textContent = css;
      root.appendChild(style);

      const dur = this.getAttribute('duration');
      if (dur) this.style.setProperty('--pj-dur', dur);

      const defs = `
        ${PIECES.map((p, i) => `<linearGradient id="pjg${i}" x1=".12" y1="0" x2=".85" y2="1">
            <stop offset="0" stop-color="${p.a}"/><stop offset=".52" stop-color="${p.b}"/><stop offset="1" stop-color="${p.b}"/>
          </linearGradient>
          <clipPath id="pjc${i}"><path d="${p.d}"/></clipPath>`).join('')}
        <linearGradient id="pjShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0F172A" stop-opacity="0"/>
          <stop offset=".58" stop-color="#0F172A" stop-opacity="0"/>
          <stop offset="1" stop-color="#0F172A" stop-opacity=".26"/>
        </linearGradient>
        <linearGradient id="pjGloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".72"/>
          <stop offset=".45" stop-color="#fff" stop-opacity=".08"/>
          <stop offset="1" stop-color="#fff" stop-opacity=".3"/>
        </linearGradient>
        <linearGradient id="pjSheenGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0"/>
          <stop offset=".5" stop-color="#fff" stop-opacity=".55"/>
          <stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="pjFlashGrad"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".45" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        <radialGradient id="pjGroundGrad"><stop offset="0" stop-color="#0F172A" stop-opacity=".3"/><stop offset="1" stop-color="#0F172A" stop-opacity="0"/></radialGradient>`;

      const pieces = PIECES.map((p, i) => `<g class="pj-piece pj-p${i}">
          <path d="${p.d}" fill="#0F172A" opacity=".26" transform="translate(0,14)"/>
          <path d="${p.d}" fill="url(#pjg${i})"/>
          <path d="${p.d}" fill="url(#pjShade)"/>
          <rect class="pj-sheen" clip-path="url(#pjc${i})" x="-260" y="60" width="230" height="360" fill="url(#pjSheenGrad)" transform-origin="center"/>
          <path d="${p.d}" fill="none" stroke="url(#pjGloss)" stroke-width="3" stroke-linejoin="round"/>
          <text class="pj-num" x="${p.cx}" y="${i % 2 ? 326 : 160}" text-anchor="middle" fill="${p.ink}">${p.num}</text>
          <text class="pj-label" data-avail="${p.avail}" x="${p.cx}" y="235" text-anchor="middle" dominant-baseline="central" fill="${p.ink}">${p.label}</text>
        </g>`).join('');

      const flashes = JOINS.map((j, i) => `<circle class="pj-flash pj-f${i}" cx="${j.x}" cy="235" r="52" fill="url(#pjFlashGrad)"/>`).join('');
      const bursts = JOINS.map((j, i) => `<g class="pj-burst pj-b${i}">${RAYS.map(a => {
        const rad = a * Math.PI / 180, x1 = j.x + Math.cos(rad) * 44, y1 = 235 + Math.sin(rad) * 44,
          x2 = j.x + Math.cos(rad) * 92, y2 = 235 + Math.sin(rad) * 92;
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".9"/>`;
      }).join('')}</g>`).join('');

      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '-22 62 1244 356');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', this.getAttribute('label') || 'Etapy współpracy: analiza, projekt, wdrożenie, opieka');
      svg.innerHTML = `<defs>${defs}</defs>
        <ellipse class="pj-ground" cx="600" cy="390" rx="580" ry="26" fill="url(#pjGroundGrad)"/>
        <g class="pj-stage">${pieces}${bursts}${flashes}</g>`;
      root.appendChild(svg);
      this._svg = svg;

      const fit = () => svg.querySelectorAll('.pj-label').forEach(t => {
        const avail = +t.dataset.avail, base = 38;
        let w = 0;
        try { w = t.getComputedTextLength(); } catch (e) { return; }
        if (w > avail) t.style.fontSize = (base * avail / w).toFixed(2) + 'px';
      });
      requestAnimationFrame(fit);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

      if ('IntersectionObserver' in window) {
        this._io = new IntersectionObserver(es => {
          es.forEach(e => svg.classList.toggle('pj-paused', !e.isIntersecting));
        }, { rootMargin: '120px' });
        this._io.observe(this);
      }
    }
    disconnectedCallback() { if (this._io) this._io.disconnect(); }
  }

  customElements.define('puzzle-join', PuzzleJoin);
})();
