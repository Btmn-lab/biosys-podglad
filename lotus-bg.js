// <lotus-bg> — „Celestial Lotus": kwiatowa hiperpowierzchnia z cząstek, Canvas 2D, bez zależności.
// Port kompozycji three.js na 2D. Paleta BioSys (Navy → Royal Blue → Sky Blue → Turquoise, akcent Amber).
// Atrybuty: count, zoom, opacity, speed, petals, theme="light".
(function () {
  if (customElements.get('lotus-bg')) return;

  class LotusBg extends HTMLElement {
    connectedCallback() {
      if (this._canvas) return;
      this.style.display = 'block';
      if (!this.style.position) this.style.position = 'relative';
      if (!this.style.height) this.style.height = '100%';

      const c = document.createElement('canvas');
      c.style.cssText = 'position:absolute;inset:0;display:block;width:100%;height:100%';
      c.setAttribute('aria-hidden', 'true');
      this.appendChild(c);
      this._canvas = c;
      this._ctx = c.getContext('2d');

      const mob = window.matchMedia('(max-width:820px)').matches;
      this._reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
      const base = parseInt(this.getAttribute('count') || '0', 10) || 5000;
      this._count = Math.max(200, Math.round(mob ? base * 0.4 : base));
      this._zoom = parseFloat(this.getAttribute('zoom') || '1');
      this._opacity = parseFloat(this.getAttribute('opacity') || '1');
      this._flow = parseFloat(this.getAttribute('speed') || '1') * 2.84;
      this._petals = parseFloat(this.getAttribute('petals') || '11.8');
      this._light = this.getAttribute('theme') === 'light';
      this._dpr = Math.min(window.devicePixelRatio || 1, mob ? 1.5 : 1.75);
      this._t = 0;

      this._pos = new Float32Array(this._count * 3);
      this._init = false;

      this._resize();
      requestAnimationFrame(() => this._resize());
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

      if (this._reduce) { this._t = 4; this._frame(); } else this._start();
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
        this._t += dt;
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
      const flow = this._flow;
      const petals = this._petals;
      const bloom = 1;
      const n = this._count, pos = this._pos;
      const lerp = this._init ? 0.1 : 1;

      const radius = Math.min(w, h) * 0.42 * this._zoom;
      const cx = w * 0.5, cy = h * 0.5;

      const rot = time * 0.22;
      const cr = Math.cos(rot), sr = Math.sin(rot);
      const F = Math.max(340, radius * 4.2);

      const TAU = 6.283185307179586, PI = 3.141592653589793;

      for (let i = 0; i < n; i++) {
        const u = (i + 0.5) / n;
        const a = u * TAU;
        const v = (u * 2 - 1) * PI;

        const p = Math.sin(petals * a + time * flow);
        const q = Math.cos(3 * v - time * 0.7);
        const rr = radius * (0.35 + 0.65 * (0.5 + 0.5 * p) * (0.55 + 0.45 * bloom));
        const c0 = Math.cos(v);

        const x = rr * c0 * Math.cos(a) + radius * 0.18 * Math.sin(5 * a + time);
        const y = rr * Math.sin(v) + radius * 0.12 * q;
        const z = rr * c0 * Math.sin(a) + radius * 0.18 * Math.cos(5 * a - time);
        const s = 0.35 + 0.65 * Math.sin(2 * a + time * 0.4);

        const tx = x * s, ty = y * (1.1 - 0.3 * s), tz = z * s;

        const k = i * 3;
        pos[k] += (tx - pos[k]) * lerp;
        pos[k + 1] += (ty - pos[k + 1]) * lerp;
        pos[k + 2] += (tz - pos[k + 2]) * lerp;

        const px = pos[k], py = pos[k + 1], pz = pos[k + 2];
        const rx = px * cr - pz * sr;
        const rz = px * sr + pz * cr;

        const persp = F / (F + rz);
        if (persp <= 0.05) continue;
        const sx = cx + rx * persp;
        const sy = cy + py * persp;
        if (sx < -24 || sx > w + 24 || sy < -24 || sy > h + 24) continue;

        // barwa: pozycja w palecie zamiast pełnego koła HSL
        const mix = (0.5 + 0.5 * Math.sin(a * petals * 0.15 + time * 0.15) + u) % 1;
        const lum = 0.42 + 0.22 * (0.5 + 0.5 * p) + 0.18 * (persp - 1);
        let br, bg, bb;
        if (mix < 0.34) {
          const t2 = mix / 0.34;
          br = 15 + t2 * 22; bg = 23 + t2 * 76; bb = 42 + t2 * 193;      // Navy → Royal Blue
        } else if (mix < 0.7) {
          const t2 = (mix - 0.34) / 0.36;
          br = 37 + t2 * 19; bg = 99 + t2 * 90; bb = 235 + t2 * 13;      // Royal Blue → Sky Blue
        } else {
          const t2 = (mix - 0.7) / 0.3;
          br = 56 - t2 * 36; bg = 189 - t2 * 5; bb = 248 - t2 * 82;      // Sky Blue → Turquoise
        }
        if (light) { br *= 0.72; bg *= 0.66; bb *= 0.82; }
        const hotT = Math.max(0, (lum - 0.6) / 0.4);
        const ar = light ? 180 : 245, ag = light ? 83 : 190, ab = light ? 9 : 60;
        const r = br + (ar - br) * hotT;
        const g = bg + (ag - bg) * hotT;
        const b = bb + (ab - bb) * hotT;

        const al = (light ? 0.2 + lum * 0.62 : 0.16 + lum * 0.72) * this._opacity * (0.5 + 0.5 * persp);
        const size = Math.max(0.9, (1.3 + Math.pow(lum, 2.2) * 2) * persp);
        ctx.fillStyle = 'rgba(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ',' + al.toFixed(3) + ')';
        ctx.beginPath();
        ctx.moveTo(sx, sy - size * 0.62);
        ctx.lineTo(sx + size * 0.56, sy + size * 0.5);
        ctx.lineTo(sx - size * 0.56, sy + size * 0.5);
        ctx.closePath();
        ctx.fill();
      }

      this._init = true;
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  customElements.define('lotus-bg', LotusBg);
})();
