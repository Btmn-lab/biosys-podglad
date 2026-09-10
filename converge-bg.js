// <converge-bg> — dane spływające z kanałów do centralnego rdzenia. Canvas 2D, bez zależności.
// Port kompozycji three.js na 2D. Paleta BioSys: Sky Blue/Slate na zewnątrz → Royal Blue/Turkus w rdzeniu, puls Amber.
// Atrybuty: count, zoom, opacity, speed, chaos, core, theme="light".
(function () {
  if (customElements.get('converge-bg')) return;

  class ConvergeBg extends HTMLElement {
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
      const base = parseInt(this.getAttribute('count') || '0', 10) || 5200;
      this._count = Math.max(200, Math.round(mob ? base * 0.4 : base));
      this._zoom = parseFloat(this.getAttribute('zoom') || '1');
      this._opacity = parseFloat(this.getAttribute('opacity') || '1');
      this._speed = parseFloat(this.getAttribute('speed') || '1') * 0.4;
      this._chaos = parseFloat(this.getAttribute('chaos') || '20');
      this._core = parseFloat(this.getAttribute('core') || '10');
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
      const n = this._count, pos = this._pos;
      const lerp = this._init ? 0.1 : 1;

      // 150 jednostek w oryginale = promień pola; skalujemy do kontenera
      const unit = (Math.min(w, h) * 0.46 * this._zoom) / 150;
      const coreSize = this._core, chaos = this._chaos, speed = this._speed;
      const cx = w * 0.5, cy = h * 0.5;

      const rot = time * 0.2;
      const cr = Math.cos(rot), sr = Math.sin(rot);
      const F = Math.max(300, 150 * unit * 3.2);
      const GOLD = (1 + Math.sqrt(5)) / 2;

      for (let i = 0; i < n; i++) {
        const norm = i / n;
        const progress = (norm + time * speed * 0.2) % 1;
        const easeProgress = Math.pow(progress, 1.5);

        const theta = 2 * Math.PI * i / GOLD;
        const phi = Math.acos(1 - 2 * norm);
        const currentRadius = coreSize + 150 * (1 - easeProgress);

        const instability = Math.pow(1 - progress, 2);
        const wx = Math.sin(time * 2 + norm * 100) * chaos * instability;
        const wy = Math.cos(time * 1.5 + norm * 200) * chaos * instability;
        const wz = Math.sin(time * 3 - norm * 300) * chaos * instability;

        const sinPhi = Math.sin(phi);
        const tx = (currentRadius * sinPhi * Math.cos(theta) + wx) * unit;
        const ty = (currentRadius * sinPhi * Math.sin(theta) + wy) * unit;
        const tz = (currentRadius * Math.cos(phi) + wz) * unit;

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

        // barwa dokładnie z pasków systemów: Sky Blue #38BDF8 → Royal Blue #2563EB → Turkus #0FA9B4, puls Amber #F59E0B
        let r, g, b;
        if (progress < 0.45) {
          const q = progress / 0.45;
          r = 56 - q * 19; g = 189 - q * 90; b = 248 - q * 13;           // Sky Blue → Royal Blue
        } else {
          const q = (progress - 0.45) / 0.55;
          r = 37 - q * 22; g = 99 + q * 70; b = 235 - q * 55;            // Royal Blue → Turkus
        }
        const pulse = progress > 0.95 ? Math.max(0, Math.sin(time * 10)) : 0;
        if (pulse > 0) {
          r += (245 - r) * pulse; g += (158 - g) * pulse; b += (11 - b) * pulse;
        }
        if (light) { r *= 0.9; g *= 0.86; b *= 0.9; }

        const lum = 0.2 + 0.6 * progress + pulse * 0.3;
        const al = (light ? 0.16 + lum * 0.6 : 0.14 + lum * 0.72) * this._opacity * (0.5 + 0.5 * persp);
        const size = Math.max(0.9, (1.2 + Math.pow(progress, 2) * 2.2) * persp);
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

  customElements.define('converge-bg', ConvergeBg);
})();
