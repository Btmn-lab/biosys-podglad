// <particle-swarm> — pętla energii (Terra Nature Energy Loop) w Canvas 2D, bez zależności.
// Pasma rysowane jako jednolite linie (nie kropki), z poświatą i sortowaniem po głębokości.
// Atrybuty: samples, flow, heat, recovery, data, spin, width, glow, alpha,
//           cx-frac / cy-frac (środek rzutu), amber / teal / blue (nadpisanie palety)
(function () {
  if (customElements.get('particle-swarm')) return;

  const hexToRgb = (h) => {
    const n = parseInt(h.replace('#', ''), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };

  const TAU = Math.PI * 2;
  const LANES = 10;
  const BANDS = 5;

  // paleta pasm: Task Timer (amber), KD (turkus), RCP (błękit) — 4 / 4 / 2
  const FAMILY = ['amber', 'teal', 'amber', 'teal', 'amber', 'teal', 'amber', 'blue', 'blue', 'teal'];
  const SHADE = [0, 1, 2, 0, 1, 2, 1, 0, 1, 1];

  class ParticleSwarm extends HTMLElement {
    connectedCallback() {
      if (this._canvas) return;
      this.style.display = 'block';
      this.style.position = 'relative';
      if (!this.style.height) this.style.height = '100%';
      const c = document.createElement('canvas');
      c.style.cssText = 'position:absolute;inset:0;display:block;width:100%;height:100%';
      c.setAttribute('aria-hidden', 'true');
      this.appendChild(c);
      this._canvas = c;
      this._ctx = c.getContext('2d');

      const num = (a, d) => {
        // runtime DC potrafi zamienić atrybuty z myślnikiem na camelCase — czytaj oba warianty
        const raw = this.getAttribute(a);
        const alt = raw == null ? this.getAttribute(a.replace(/-/g, '')) : null;
        const v = parseFloat(raw == null ? alt : raw);
        return isNaN(v) ? d : v;
      };
      const str = (a) => this.getAttribute(a) || this.getAttribute(a.replace(/-/g, ''));
      const small = innerWidth < 760;
      this.cfg = {
        flow: num('flow', 1.05),
        heat: num('heat', 1.982),
        recovery: num('recovery', 0),
        data: num('data', 2),
        spin: num('spin', 0.2),
        width: num('width', small ? 1.5 : 1.9),
        glow: num('glow', 3.4),
        alpha: num('alpha', 1),
        cxf: num('cx-frac', 0.58),
        cyf: num('cy-frac', 0.6),
        zoom: num('zoom', 1),
      };
      this.samples = Math.max(48, Math.round(num('samples', small ? 96 : 168)));

      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

      this._palette({
        amber: [str('amber') || '#B45309', '#F59E0B', '#FCD34D'],
        teal: [str('teal') || '#106A73', '#0FA9B4', '#5EEAD4'],
        blue: [str('blue') || '#1D4ED8', '#2563EB', '#38BDF8'],
      });

      this.p = new Float32Array(LANES * this.samples * 3);
      this._sx = new Float32Array(LANES * this.samples);
      this._sy = new Float32Array(LANES * this.samples);
      this._sb = new Uint8Array(LANES * this.samples);
      this._sw = new Float32Array(LANES * this.samples);
      this._seeded = false;

      this._ro = new ResizeObserver(() => this._resize());
      this._ro.observe(this);
      this._io = new IntersectionObserver(
        (e) => { this._visible = e[0].isIntersecting; this._tick(); },
        { rootMargin: '140px' }
      );
      this._io.observe(this);
      this._resize();
      this._visible = true;
      this._t0 = performance.now();
      this._tick();
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      this._ro && this._ro.disconnect();
      this._io && this._io.disconnect();
    }

    // dla każdego pasma: kolor rodziny + odcień, w pięciu progach głębokości
    _palette(fam) {
      const rgb = {};
      Object.keys(fam).forEach((k) => { rgb[k] = fam[k].map(hexToRgb); });
      this.line = [];
      this.halo = [];
      for (let lane = 0; lane < LANES; lane++) {
        const col = rgb[FAMILY[lane]][SHADE[lane]];
        const isData = lane >= 7;
        const l = [], h = [];
        for (let b = 0; b < BANDS; b++) {
          const t = b / (BANDS - 1);
          const a = (isData ? 0.3 : 0.26) + t * (isData ? 0.58 : 0.62);
          l.push(`rgba(${col[0]},${col[1]},${col[2]},${(a * this.cfg.alpha).toFixed(3)})`);
          h.push(`rgba(${col[0]},${col[1]},${col[2]},${(0.05 + t * 0.09).toFixed(3)})`);
        }
        this.line.push(l);
        this.halo.push(h);
      }
    }

    _resize() {
      const r = this.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      this._canvas.width = Math.round(r.width * dpr);
      this._canvas.height = Math.round(r.height * dpr);
      this.w = r.width;
      this.h = r.height;
      this.dpr = dpr;
      this.s = Math.min((r.width * 0.98) / 2.62, (r.height * 1.62) / 1.06) * ((this.cfg && this.cfg.zoom) || 1);
    }

    _tick = () => {
      cancelAnimationFrame(this._raf);
      if (!this._visible) return;
      this._raf = requestAnimationFrame(this._tick);
      this._draw((performance.now() - this._t0) / 1000);
    };

    // pozycja próbki pasma w przestrzeni pętli
    _point(lane, u, t, time2, out) {
      const { heat, recovery, data } = this.cfg;
      const isData = lane >= 8;
      const a = u * TAU;
      const ca = Math.cos(a), sa = Math.sin(a);
      const c2 = Math.cos(a * 2), s2 = Math.sin(a * 2);
      const top = 0.5 * (sa + Math.abs(sa));
      const bot = 0.5 * (-sa + Math.abs(sa));
      const cx = 1.15 * ca + 0.08 * c2;
      const cy = 0.42 * top - 0.28 * bot + 0.03 * s2;
      const cz = 0.72 * sa;
      const lu = (lane + 0.5) / LANES;

      if (!isData) {
        const sp = lu * TAU * 2 + a * (1.4 + recovery * 0.5) - t * (1.2 + heat * 0.15);
        const cs = Math.cos(sp), ss = Math.sin(sp);
        const tube = 0.05 + 0.02 * heat;
        const wave = 0.012 * Math.sin(a * 6 - t * 2 + sp);
        out[0] = cx + ca * tube * cs - sa * tube * 0.3 * ss;
        out[1] = cy + tube * ss + wave;
        out[2] = cz + sa * tube * cs + ca * tube * 0.3 * ss;
      } else {
        const ds = lu * TAU * 3 + a * (3 + data) - time2 * (0.8 + data) * 1.5;
        const dc = Math.cos(ds), dn = Math.sin(ds);
        const dr = 0.18 + 0.03 * recovery;
        const tube = 0.05 + 0.02 * heat;
        out[0] = cx + ca * dr + ca * tube * 0.5 * dc;
        out[1] = cy + 0.16 + dr * 0.35 * dn;
        out[2] = cz + sa * dr + sa * tube * 0.5 * dc;
      }
    }

    _draw(time) {
      const ctx = this._ctx;
      if (!ctx || !this.w) return;
      const { flow, spin, width, glow, cxf, cyf } = this.cfg;
      const N = this.samples;
      const time2 = this.reduced ? 4 : time;
      const t = time2 * flow;
      const ang = this.reduced ? 0.5 : time2 * spin;
      const ca_ = Math.cos(ang), sa_ = Math.sin(ang);
      const tilt = 0.26, ct = Math.cos(tilt), st = Math.sin(tilt);
      const S = this.s, cxp = this.w * cxf, cyp = this.h * cyf, d = this.dpr;
      const persp = 4.2;
      const lw = width * Math.max(0.62, Math.min(1.5, S / 300));
      const ease = this._seeded ? 0.12 : 1;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const out = this._out || (this._out = [0, 0, 0]);
      for (let lane = 0; lane < LANES; lane++) {
        for (let j = 0; j < N; j++) {
          const u0 = (j + 0.5) / N + t * 0.04;
          this._point(lane, u0 - Math.floor(u0), t, time2, out);
          const k = (lane * N + j) * 3;
          this.p[k] += (out[0] - this.p[k]) * ease;
          this.p[k + 1] += (out[1] - this.p[k + 1]) * ease;
          this.p[k + 2] += (out[2] - this.p[k + 2]) * ease;

          const px = this.p[k], py = this.p[k + 1], pz = this.p[k + 2];
          const rx = px * ca_ + pz * sa_;
          const rz = -px * sa_ + pz * ca_;
          const ry = py * ct - rz * st;
          const rz2 = py * st + rz * ct;
          const f = persp / (persp - rz2);
          const depth = Math.max(0, Math.min(0.999, (rz2 + 1.35) / 2.7));
          const idx = lane * N + j;
          this._sx[idx] = cxp + rx * S * f;
          this._sy[idx] = cyp + ry * S * f;
          this._sb[idx] = (depth * BANDS) | 0;
          this._sw[idx] = lw * f * (0.55 + depth * 0.85);
        }
      }
      this._seeded = true;

      // każde pasmo to jedna zamknięta, jednolita linia — najpierw poświata, potem rdzeń;
      // kolejność od najdalszego do najbliższego, żeby nakładanie się zgadzało z głębokością
      const order = this._order || (this._order = Array.from({ length: LANES }, (_, i) => i));
      const bavg = this._bavg || (this._bavg = new Float32Array(LANES));
      const wavg = this._wavg || (this._wavg = new Float32Array(LANES));
      for (let lane = 0; lane < LANES; lane++) {
        let bs = 0, ws = 0;
        for (let j = 0; j < N; j++) { bs += this._sb[lane * N + j]; ws += this._sw[lane * N + j]; }
        bavg[lane] = bs / N;
        wavg[lane] = ws / N;
      }
      order.sort((a, b) => bavg[a] - bavg[b]);

      for (let pass = 0; pass < 2; pass++) {
        for (let o = 0; o < LANES; o++) {
          const lane = order[o];
          const base = lane * N;
          ctx.beginPath();
          ctx.moveTo(this._sx[base], this._sy[base]);
          for (let j = 1; j < N; j++) ctx.lineTo(this._sx[base + j], this._sy[base + j]);
          ctx.closePath();
          const b = Math.max(0, Math.min(BANDS - 1, Math.round(bavg[lane])));
          if (pass === 0) {
            ctx.strokeStyle = this.halo[lane][b];
            ctx.lineWidth = wavg[lane] * glow;
          } else {
            ctx.strokeStyle = this.line[lane][b];
            ctx.lineWidth = wavg[lane];
          }
          ctx.stroke();
        }
      }
    }
  }

  customElements.define('particle-swarm', ParticleSwarm);
})();
