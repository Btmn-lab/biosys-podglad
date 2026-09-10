// <sun-bg> — gwiazda cząsteczkowa (rdzeń, konwekcja, fotosfera, pętle koronalne, wiatr)
// Canvas 2D, bez zależności. Paleta BioSys + Amber.
// Atrybuty: count, zoom, opacity, speed, amber
(function () {
  if (customElements.get('sun-bg')) return;

  const TAU = Math.PI * 2;
  const h1 = (i, a, b) => Math.abs(Math.sin(i * a) * b) % 1;

  class SunBg extends HTMLElement {
    connectedCallback() {
      if (this._canvas) return;
      this.style.display = 'block';
      this.style.position = this.style.position || 'relative';
      if (!this.style.height) this.style.height = '100%';

      const c = document.createElement('canvas');
      c.style.cssText = 'position:absolute;inset:0;display:block;width:100%;height:100%';
      c.setAttribute('aria-hidden', 'true');
      this.appendChild(c);
      this._canvas = c;
      this._ctx = c.getContext('2d');

      const mob = window.matchMedia('(max-width:820px)').matches;
      this._reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
      const asked = parseInt(this.getAttribute('count') || '0', 10);
      const base = asked || 2200;
      this._count = Math.max(140, Math.round(mob ? base * 0.4 : base));
      this._zoom = parseFloat(this.getAttribute('zoom') || '1');
      this._opacity = parseFloat(this.getAttribute('opacity') || '1');
      this._speed = parseFloat(this.getAttribute('speed') || '1');
      this._amber = parseFloat(this.getAttribute('amber') || '1');
      this._light = this.getAttribute('theme') === 'light';
      this._dpr = Math.min(window.devicePixelRatio || 1, mob ? 1.5 : 1.75);
      this._t = 0;

      this._pts = new Float32Array(this._count * 3);
      for (let i = 0; i < this._count; i++) {
        this._pts[i * 3] = (Math.random() - 0.5) * 2;
        this._pts[i * 3 + 1] = (Math.random() - 0.5) * 2;
        this._pts[i * 3 + 2] = (Math.random() - 0.5) * 2;
      }

      const fit = () => {
        const r = this.getBoundingClientRect();
        if (r.height < 2) {
          this.style.position = 'absolute';
          this.style.top = '0'; this.style.left = '0'; this.style.right = '0'; this.style.bottom = '0';
        }
      };
      fit();
      this._resize();
      requestAnimationFrame(() => { fit(); this._resize(); });

      this._ro = new ResizeObserver(() => this._resize());
      this._ro.observe(this);

      this._visible = true;
      if ('IntersectionObserver' in window) {
        this._io = new IntersectionObserver((e) => {
          this._visible = e[0].isIntersecting;
          if (this._visible && !this._reduce) this._start(); else this._stop();
        }, { rootMargin: '120px' });
        this._io.observe(this);
      }
      this._onVis = () => { if (document.hidden) this._stop(); else if (this._visible && !this._reduce) this._start(); };
      document.addEventListener('visibilitychange', this._onVis);

      if (this._reduce) { this._t = 3.2; this._frame(); } else this._start();
    }

    disconnectedCallback() {
      this._stop();
      if (this._ro) this._ro.disconnect();
      if (this._io) this._io.disconnect();
      document.removeEventListener('visibilitychange', this._onVis);
    }

    _resize() {
      const c = this._canvas;
      if (!c) return;
      const r = this.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
      if (w === this._w && h === this._h) return;
      this._w = w; this._h = h;
      c.width = Math.round(w * this._dpr);
      c.height = Math.round(h * this._dpr);
      this._ctx.setTransform(this._dpr, 0, 0, this._dpr, 0, 0);
      if (this._reduce || !this._raf) this._frame();
    }

    _start() {
      if (this._raf || this._reduce) return;
      this._last = performance.now();
      const loop = (now) => {
        this._raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - this._last) / 1000);
        this._last = now;
        this._t += dt * this._speed;
        this._frame();
      };
      this._raf = requestAnimationFrame(loop);
    }

    _stop() { if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; } }

    _frame() {
      const ctx = this._ctx, w = this._w, h = this._h;
      if (!ctx || !w) return;
      ctx.clearRect(0, 0, w, h);
      const light = this._light;
      ctx.globalCompositeOperation = light ? 'source-over' : 'lighter';

      const time = this._t;
      const R = Math.min(w, h) * 0.36 * this._zoom;
      const cx = w * 0.5, cy = h * 0.5;
      const n = this._count, pts = this._pts;
      const ang = time * 0.12;
      const ca = Math.cos(ang), sa = Math.sin(ang);
      const tilt = 0.42, ct = Math.cos(tilt), st = Math.sin(tilt);
      const amber = this._amber;

      // halo
      const g = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.9);
      if (light) {
        g.addColorStop(0, 'rgba(56,189,248,.16)');
        g.addColorStop(0.3, 'rgba(37,99,235,.09)');
        g.addColorStop(0.65, 'rgba(20,184,166,.04)');
        g.addColorStop(1, 'rgba(248,250,252,0)');
      } else {
        g.addColorStop(0, 'rgba(125,211,252,.52)');
        g.addColorStop(0.22, 'rgba(37,99,235,.28)');
        g.addColorStop(0.6, 'rgba(20,184,166,.08)');
        g.addColorStop(1, 'rgba(11,18,32,0)');
      }
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.9, 0, TAU); ctx.fill();

      for (let i = 0; i < n; i++) {
        const t = i / n;
        const a1 = h1(i, 12.9898, 43758.5453);
        const a2 = h1(i, 78.233, 12543.123);
        const a3 = h1(i, 45.164, 98765.432);
        const a4 = h1(i, 33.719, 54321.987);
        const a5 = h1(i, 61.431, 31415.9265);

        let px, py, pz, r, gg, b, al = 1;

        if (t < 0.16) {                         // rdzeń
          const theta = a1 * TAU, cphi = a2 * 2 - 1;
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi));
          const burst = Math.pow(0.5 + 0.5 * Math.sin(time * 2.4 + a5 * 18.85), 5);
          const rad = R * (0.06 + Math.cbrt(Math.max(a3, 1e-4)) * 0.2) * (1 + burst * 0.05);
          px = rad * sphi * Math.cos(theta); py = rad * sphi * Math.sin(theta); pz = rad * cphi;
          if (light) { r = 15; gg = 23 + burst * 40; b = 42 + burst * 60; al = 0.85 + burst * 0.15; }
          else { r = 215 + burst * 40; gg = 240; b = 255; al = 0.9 + burst * 0.1; }
        } else if (t < 0.44) {                  // konwekcja
          const theta = a1 * TAU, cphi = a2 * 2 - 1;
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi));
          const cell = Math.sin(theta * 6 + time * 0.6) + Math.sin(cphi * 14 + time * 0.5 + a4 * TAU);
          const rad = R * (0.26 + a3 * 0.32) + cell * R * 0.02;
          px = rad * sphi * Math.cos(theta); py = rad * sphi * Math.sin(theta); pz = rad * cphi;
          const heat = (cell + 2) / 4;
          if (light) { r = 30 - heat * 10; gg = 70 + heat * 40; b = 150 + heat * 60; al = 0.3 + heat * 0.35; }
          else { r = 20 + heat * 40; gg = 150 + heat * 70; b = 200 + heat * 45; al = 0.35 + heat * 0.35; }
        } else if (t < 0.66) {                  // fotosfera
          const theta = a1 * TAU, cphi = a2 * 2 - 1;
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi));
          const gran = Math.sin(theta * 22 + time * 0.7) + Math.sin(cphi * 26 - time * 0.6 + a3 * TAU);
          const rad = R * 0.64 + gran * R * 0.006;
          px = rad * sphi * Math.cos(theta); py = rad * sphi * Math.sin(theta); pz = rad * cphi;
          r = 37; gg = 99 + gran * 24; b = 235; al = light ? 0.42 + gran * 0.1 : 0.5 + gran * 0.12;
        } else if (t < 0.9) {                   // pętle koronalne (Amber)
          const li = i % 14;
          const l1 = h1(li, 21.31, 5432.19), l2 = h1(li, 37.77, 6321.98), l3 = h1(li, 59.59, 7219.87);
          const pTheta = l1 * TAU, pc = l2 * 2 - 1, ps = Math.sqrt(Math.max(0, 1 - pc * pc));
          const pX = ps * Math.cos(pTheta), pY = ps * Math.sin(pTheta), pZ = pc;
          let e1x = pZ, e1y = 0, e1z = -pX;
          const L1 = Math.max(Math.hypot(e1x, e1y, e1z), 1e-5); e1x /= L1; e1y /= L1; e1z /= L1;
          let e2x = pY * e1z - pZ * e1y, e2y = pZ * e1x - pX * e1z, e2z = pX * e1y - pY * e1x;
          const L2 = Math.max(Math.hypot(e2x, e2y, e2z), 1e-5); e2x /= L2; e2y /= L2; e2z /= L2;
          const s = a1, alpha = (s - 0.5) * (0.6 + l3 * 0.9);
          const co = Math.cos(alpha), si = Math.sin(alpha);
          let dx = e1x * co + e2x * si, dy = e1y * co + e2y * si, dz = e1z * co + e2z * si;
          const dl = Math.max(Math.hypot(dx, dy, dz), 1e-5); dx /= dl; dy /= dl; dz /= dl;
          const bulge = Math.cos((s - 0.5) * Math.PI);
          const pulse = 0.55 + 0.45 * Math.sin(time * 0.7 + l3 * TAU);
          const rad = R * 0.66 + R * (0.16 + l3 * 0.3) * pulse * bulge;
          px = dx * rad; py = dy * rad; pz = dz * rad;
          if (light) { r = 180 + pulse * 20; gg = 83 + pulse * 40; b = 9; }
          else { r = 245; gg = 158 + pulse * 40; b = 11 + pulse * 60; }
          al = (light ? 0.3 + pulse * 0.35 : 0.28 + pulse * 0.4) * amber;
        } else {                                // wiatr
          const theta = a1 * TAU, cphi = a2 * 2 - 1;
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi));
          const travel = (time * 0.5 + a3 * 12) % 12;
          const rad = R * 0.8 + travel * R * 0.11;
          px = rad * sphi * Math.cos(theta); py = rad * sphi * Math.sin(theta); pz = rad * cphi;
          const fade = Math.max(0, 1 - travel / 12);
          r = light ? 13 : 20; gg = light ? 148 : 184; b = light ? 136 : 166; al = (light ? 0.05 + fade * 0.28 : 0.06 + fade * 0.34);
        }

        // obrót Y + pochylenie
        const rx = px * ca - pz * sa;
        const rz = px * sa + pz * ca;
        const ry = py * ct - rz * st;
        const rz2 = py * st + rz * ct;

        const persp = 1 / (1 + (rz2 / (R * 6)));
        const sx = cx + rx * persp;
        const sy = cy + ry * persp;
        if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) continue;

        const depth = 0.55 + 0.45 * persp;
        const size = Math.max(0.9, 1.75 * persp * (t < 0.16 ? 1.6 : 1));
        ctx.fillStyle = 'rgba(' + (r | 0) + ',' + (gg | 0) + ',' + (b | 0) + ',' + (al * depth * this._opacity).toFixed(3) + ')';
        ctx.fillRect(sx, sy, size, size);
      }

      ctx.globalCompositeOperation = 'source-over';
    }
  }

  customElements.define('sun-bg', SunBg);
})();
