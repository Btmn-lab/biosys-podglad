/* <tesseract-bg> — 4D hypercube particle swarm, canvas 2D, BioSys palette.
   Attributes: count, opacity, speed, amber (0-1), zoom */
(function () {
  if (typeof customElements === 'undefined' || customElements.get('tesseract-bg')) return;

  const PAL = [[37, 99, 235], [56, 189, 248], [20, 184, 166]];
  const AMBER = [245, 158, 11];
  const EDGES = 32;

  function lerpPal(t) {
    const x = Math.min(0.9999, Math.max(0, t)) * (PAL.length - 1);
    const i = Math.floor(x), f = x - i;
    const a = PAL[i], b = PAL[Math.min(PAL.length - 1, i + 1)];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
  }

  class TesseractBg extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.style.position = this.style.position || 'relative';
      this.style.overflow = 'hidden';

      const c = document.createElement('canvas');
      c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
      this.appendChild(c);
      this._c = c;
      this._ctx = c.getContext('2d', { alpha: true });

      const mob = window.matchMedia('(max-width:820px)').matches;
      const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
      this._reduce = reduce;
      const asked = parseInt(this.getAttribute('count') || '0', 10);
      const base = asked || 2560;
      this._count = Math.max(120, Math.round(mob ? base * 0.38 : base));
      this._opacity = parseFloat(this.getAttribute('opacity') || '1');
      this._speed = parseFloat(this.getAttribute('speed') || '1');
      this._amber = parseFloat(this.getAttribute('amber') || '0.16');
      this._zoom = parseFloat(this.getAttribute('zoom') || '1');
      this._dpr = Math.min(window.devicePixelRatio || 1, mob ? 1.5 : 1.75);

      this._fit = () => {
        const r = this.getBoundingClientRect();
        if (r.height < 2) {
          this.style.position = 'absolute';
          this.style.top = '0'; this.style.left = '0'; this.style.right = '0'; this.style.bottom = '0';
        }
      };
      this._fit();
      this._build();
      this._resize();
      requestAnimationFrame(() => { this._fit(); this._resize(); });

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

      if (reduce) { this._t = 4; this._frame(true); } else this._start();
    }

    disconnectedCallback() {
      this._stop();
      if (this._ro) this._ro.disconnect();
      if (this._io) this._io.disconnect();
      document.removeEventListener('visibilitychange', this._onVis);
      this._init = false;
    }

    _build() {
      const n = this._count, per = Math.max(1, Math.floor(n / EDGES));
      const P = new Float32Array(n * 4), meta = new Float32Array(n * 3);
      const col = new Uint8Array(n * 3);
      for (let i = 0; i < n; i++) {
        const e = Math.floor(i / per) % EDGES;
        const t = (i % per) / per;
        const v = t * 2 - 1;
        const axis = e % 4, fb = Math.floor(e / 4);
        const b1 = (fb & 1) ? 1 : -1, b2 = (fb & 2) ? 1 : -1, b3 = (fb & 4) ? 1 : -1;
        let x, y, z, w;
        if (axis === 0) { x = v; y = b1; z = b2; w = b3; }
        else if (axis === 1) { x = b1; y = v; z = b2; w = b3; }
        else if (axis === 2) { x = b1; y = b2; z = v; w = b3; }
        else { x = b1; y = b2; z = b3; w = v; }
        P[i * 4] = x; P[i * 4 + 1] = y; P[i * 4 + 2] = z; P[i * 4 + 3] = w;
        meta[i * 3] = i * 1.3; meta[i * 3 + 1] = i * 1.7; meta[i * 3 + 2] = i * 2.1;
        const amber = ((i * 7919) % 1000) / 1000 < this._amber;
        const rgb = amber ? AMBER : lerpPal(t * 0.65 + (e / EDGES) * 0.35);
        col[i * 3] = rgb[0]; col[i * 3 + 1] = rgb[1]; col[i * 3 + 2] = rgb[2];
      }
      this._P = P; this._meta = meta; this._col = col;
    }

    _resize() {
      let r = this.getBoundingClientRect();
      if (r.height < 2 && this.parentElement) r = this.parentElement.getBoundingClientRect();
      const w = Math.max(1, r.width), h = Math.max(1, r.height);
      this._w = w; this._h = h;
      this._c.width = Math.round(w * this._dpr);
      this._c.height = Math.round(h * this._dpr);
      if (this._reduce) this._frame(true);
    }

    _start() {
      if (this._raf || this._reduce) return;
      this._last = performance.now();
      const loop = (now) => {
        this._raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - this._last) / 1000);
        this._last = now;
        this._t = (this._t || 0) + dt * this._speed;
        this._frame();
      };
      this._raf = requestAnimationFrame(loop);
    }

    _stop() { if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; } }

    _frame() {
      const ctx = this._ctx, dpr = this._dpr;
      const W = this._c.width, H = this._c.height;
      if (!W || !H) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      const t = this._t || 0, n = this._count, P = this._P, M = this._meta, C = this._col;
      const rot = 0.15, fuzz = 0.10;
      const a1 = t * rot, c1 = Math.cos(a1), s1 = Math.sin(a1);
      const a2 = a1 * 0.618, c2 = Math.cos(a2), s2 = Math.sin(a2);
      const a3 = a1 * 0.382, c3 = Math.cos(a3), s3 = Math.sin(a3);
      const cx = W / 2, cy = H / 2;
      const k = (Math.min(W, H) / 114) * this._zoom;
      const op = this._opacity;
      const per = Math.max(2, Math.floor(n / 32));

      const sxA = this._sx || (this._sx = new Float32Array(n));
      const syA = this._sy || (this._sy = new Float32Array(n));
      const dpA = this._dp || (this._dp = new Float32Array(n));

      for (let i = 0; i < n; i++) {
        const x4 = P[i * 4], y4 = P[i * 4 + 1], z4 = P[i * 4 + 2], w4 = P[i * 4 + 3];
        const x1 = x4 * c1 - w4 * s1, w1 = x4 * s1 + w4 * c1;
        const y1 = y4 * c2 - z4 * s2, z1 = y4 * s2 + z4 * c2;
        const X = x1 * c3 - y1 * s3, Y = x1 * s3 + y1 * c3;
        const pX = X + Math.sin(M[i * 3] + t) * fuzz;
        const pY = Y + Math.cos(M[i * 3 + 1] - t) * fuzz;
        const wf = 1 / (4 - w1 + 0.0001);
        sxA[i] = cx + pX * wf * 100 * k;
        syA[i] = cy + pY * wf * 100 * k;
        dpA[i] = Math.min(1, Math.max(0, (wf - 0.19) / 0.19));
      }

      for (let e = 0; e < 32; e++) {
        const s0 = e * per, s1i = Math.min(n, s0 + per);
        if (s1i - s0 < 2) continue;
        const mid = (s0 + s1i) >> 1;
        const d = dpA[mid];
        const r = C[mid * 3], g = C[mid * 3 + 1], b = C[mid * 3 + 2];
        ctx.beginPath();
        ctx.moveTo(sxA[s0], syA[s0]);
        for (let i = s0 + 1; i < s1i; i++) ctx.lineTo(sxA[i], syA[i]);
        ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + (op * (0.10 + d * 0.42)).toFixed(3) + ')';
        ctx.lineWidth = (0.6 + d * 1.5) * dpr;
        ctx.stroke();
        if (d > 0.55) {
          ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + (op * 0.07 * d).toFixed(3) + ')';
          ctx.lineWidth = (3.5 + d * 5) * dpr;
          ctx.stroke();
        }
      }

      const step = 5;
      for (let i = 0; i < n; i += step) {
        const d = dpA[i], sx = sxA[i], sy = syA[i];
        if (sx < -10 || sy < -10 || sx > W + 10 || sy > H + 10) continue;
        const a = op * (0.16 + d * 0.7);
        const sz = (0.7 + d * 1.7) * dpr;
        ctx.fillStyle = 'rgba(' + C[i * 3] + ',' + C[i * 3 + 1] + ',' + C[i * 3 + 2] + ',' + a.toFixed(3) + ')';
        ctx.fillRect(sx - sz / 2, sy - sz / 2, sz, sz);
      }
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  customElements.define('tesseract-bg', TesseractBg);
})();
