// <field-bg> — „Living Data Field": pasmowy, spiralny rój cząstek w Canvas 2D, bez zależności.
// Port kompozycji three.js na 2D. Paleta BioSys (+ Amber). Atrybuty: count, zoom, opacity, speed, theme="light".
(function () {
  if (customElements.get('field-bg')) return;

  const BANDS = 120;

  class FieldBg extends HTMLElement {
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
      this._count = Math.max(200, Math.round(mob ? base * 0.42 : base));
      this._zoom = parseFloat(this.getAttribute('zoom') || '1');
      this._opacity = parseFloat(this.getAttribute('opacity') || '1');
      this._flow = parseFloat(this.getAttribute('speed') || '1') * 0.7;
      this._light = this.getAttribute('theme') === 'light';
      this._dpr = Math.min(window.devicePixelRatio || 1, mob ? 1.5 : 1.75);
      this._t = 0;

      // wygładzanie pozycji (odpowiednik lerpa w oryginale)
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
      const n = this._count, pos = this._pos;
      const first = !this._init;
      const lerp = first ? 1 : 0.1;

      // skala pola dopasowana do kontenera
      const scale = Math.min(w, h) * 0.26 * this._zoom;
      const chaos = 0.65, twist = 1.4;
      const cx = w * 0.5, cy = h * 0.52;

      // wolny obrót kamery wokół osi Y (odpowiednik autoRotate)
      const rot = time * 0.18;
      const cr = Math.cos(rot), sr = Math.sin(rot);
      const F = Math.max(320, scale * 7.5);

      for (let i = 0; i < n; i++) {
        const u = i / (n > 1 ? n - 1 : 1);
        const bandF = u * BANDS;
        const band = Math.floor(bandF);
        const local = bandF - band;
        const angle = local * Math.PI * 2 + band * 0.618 + time * flow;

        const waveA = Math.sin(angle * 3 + band * 0.13 + time * flow);
        const waveB = Math.cos(angle * 2 - band * 0.09 + time * flow * 0.7);
        const waveC = Math.sin(band * 0.21 + time * flow * 0.5);

        const radius = scale * (0.35 + 0.28 * Math.sin(band * 0.17 + time * flow) + 0.22 * waveA);
        const spiral = band * 0.055 + time * flow * 0.2;
        const distortion = chaos * scale * 0.18;

        const tx = Math.cos(angle + spiral) * radius + Math.sin(band * 0.31 + time * flow) * distortion;
        const ty = (band - 60) * scale * 0.028 + waveA * scale * 0.22 + waveB * distortion;
        const tz = Math.sin(angle * twist + spiral) * radius + waveC * scale * 0.35;

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

        // barwa: interpolacja w palecie zamiast HSL pomarańczu
        const mix = 0.5 + 0.5 * Math.sin(angle + time * flow * 0.4);
        const lum = 0.28 + 0.5 * (0.5 + 0.5 * Math.sin(band * 0.12 + angle * 2));
        let r, g, b;
        // Navy → Royal Blue → Sky Blue → Turquoise, najjaśniejsze punkty w Amber
        const hotT = Math.max(0, (lum - 0.58) / 0.42);
        let br, bg2, bb;
        if (mix < 0.5) {
          const q = mix * 2;
          br = 15 + q * 22; bg2 = 23 + q * 76; bb = 42 + q * 193;      // Navy → Royal Blue
        } else {
          const q = (mix - 0.5) * 2;
          br = 37 + q * 1; bg2 = 99 + q * 90; bb = 235 + q * 13;        // Royal Blue → Sky Blue
        }
        if (light) { br = br * 0.72; bg2 = bg2 * 0.66; bb = bb * 0.82; }
        // domieszka Amber na najjaśniejszych cząstkach
        const ar = light ? 180 : 245, ag = light ? 83 : 190, ab = light ? 9 : 60;
        r = br + (ar - br) * hotT;
        g = bg2 + (ag - bg2) * hotT;
        b = bb + (ab - bb) * hotT;
        const hot = Math.pow(lum, 2.2);
        const al = (light ? 0.22 + lum * 0.68 : 0.18 + lum * 0.7) * this._opacity * (0.55 + 0.45 * persp);
        const size = Math.max(0.9, (1.4 + hot * 1.9) * persp);
        ctx.fillStyle = 'rgba(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ',' + al.toFixed(3) + ')';
        // trójkątny znacznik jak w referencji
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

  customElements.define('field-bg', FieldBg);
})();
