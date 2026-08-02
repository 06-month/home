import { useEffect, useRef } from 'react';

/**
 * Decorative 3D Gaussian splat field that converges into a solid shaded object.
 *
 * Splats sit on the surface of a trefoil tube and carry a normal, so the loop can
 * go from loose translucent blobs (coarse) to an opaque, lit, back-face-culled
 * surface (converged) — the same coarse-to-fine arc as 3DGS densification.
 *
 * Rendering mirrors a real splat rasteriser: depth sort back-to-front, alpha
 * blend, no additive glow. Deliberately carries no metrics — it illustrates the
 * technique and is not a readout of any experiment.
 */

/** Stratified grid over the tube surface: NU steps along the curve, NV around it. */
const NU = 84;
const NV = 30;
const MAX_SPLATS = NU * NV;
const MIN_VISIBLE = 130;
const CYCLE_MS = 12000;
const SPRITE_PX = 48;
const SHADE_STEPS = 28;
const TUBE_R = 0.26;

type Splat = {
  /** Surface position. */
  x: number;
  y: number;
  z: number;
  /** Surface normal, used for shading and back-face culling. */
  nx: number;
  ny: number;
  nz: number;
  ax: number;
  ay: number;
  rot: number;
  /** Densification order in [0,1) — low values appear first and start coarser. */
  order: number;
};

function makeRandom(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function buildSplats(): Splat[] {
  const rand = makeRandom(20260803);
  const splats: Splat[] = [];
  const SCALE = 3.15;

  const TAU = Math.PI * 2;

  // Jittered grid rather than pure random: uniform sampling clumps, which leaves
  // holes the converged surface can never close.
  for (let cell = 0; cell < MAX_SPLATS; cell++) {
    const iu = cell % NU;
    const iv = (cell / NU) | 0;
    const u = ((iu + 0.5 + (rand() - 0.5) * 0.8) / NU) * TAU;
    const v = ((iv + 0.5 + (rand() - 0.5) * 0.8) / NV) * TAU;

    // Trefoil centreline and its derivatives, for a Frenet frame.
    const cx = (Math.sin(u) + 2 * Math.sin(2 * u)) / SCALE;
    const cy = (Math.cos(u) - 2 * Math.cos(2 * u)) / SCALE;
    const cz = -Math.sin(3 * u) / SCALE;

    let tx = Math.cos(u) + 4 * Math.cos(2 * u);
    let ty = -Math.sin(u) + 4 * Math.sin(2 * u);
    let tz = -3 * Math.cos(3 * u);
    const tl = Math.hypot(tx, ty, tz);
    tx /= tl;
    ty /= tl;
    tz /= tl;

    const ddx = -Math.sin(u) - 8 * Math.sin(2 * u);
    const ddy = -Math.cos(u) + 8 * Math.cos(2 * u);
    const ddz = 9 * Math.sin(3 * u);

    // Gram-Schmidt the second derivative against the tangent to get the normal.
    const dot = ddx * tx + ddy * ty + ddz * tz;
    let nx = ddx - dot * tx;
    let ny = ddy - dot * ty;
    let nz = ddz - dot * tz;
    const nl = Math.hypot(nx, ny, nz);
    nx /= nl;
    ny /= nl;
    nz /= nl;

    // Binormal completes the frame.
    const bx = ty * nz - tz * ny;
    const by = tz * nx - tx * nz;
    const bz = tx * ny - ty * nx;

    const cv = Math.cos(v);
    const sv = Math.sin(v);

    // Outward surface normal, then the point it belongs to.
    const snx = cv * nx + sv * bx;
    const sny = cv * ny + sv * by;
    const snz = cv * nz + sv * bz;

    splats.push({
      x: cx + TUBE_R * snx,
      y: cy + TUBE_R * sny,
      z: cz + TUBE_R * snz,
      nx: snx,
      ny: sny,
      nz: snz,
      ax: 0.92 + rand() * 0.3,
      ay: 0.86 + rand() * 0.26,
      rot: rand() * Math.PI,
      order: rand(),
    });
  }

  return splats;
}

/**
 * A luminance ramp of Gaussian sprites. Pre-tinting lets every splat draw at full
 * opacity with its own shade, which is what makes the converged form read solid.
 */
function buildSpriteRamp(): HTMLCanvasElement[] {
  const ramp: HTMLCanvasElement[] = [];
  const half = SPRITE_PX / 2;

  for (let i = 0; i < SHADE_STEPS; i++) {
    const c = document.createElement('canvas');
    c.width = c.height = SPRITE_PX;
    const g = c.getContext('2d')!;
    const l = Math.round((i / (SHADE_STEPS - 1)) * 255);
    const rgb = `${l},${l},${l}`;

    // Flat-ish core so neighbouring splats merge into a continuous surface.
    const grad = g.createRadialGradient(half, half, 0, half, half, half);
    grad.addColorStop(0, `rgba(${rgb},1)`);
    grad.addColorStop(0.5, `rgba(${rgb},0.95)`);
    grad.addColorStop(0.78, `rgba(${rgb},0.45)`);
    grad.addColorStop(1, `rgba(${rgb},0)`);

    g.fillStyle = grad;
    g.fillRect(0, 0, SPRITE_PX, SPRITE_PX);
    ramp.push(c);
  }

  return ramp;
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);


export function GaussianField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const splats = buildSplats();
    const ramp = buildSpriteRamp();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    type Proj = { sx: number; sy: number; s: number; rot: number; ax: number; ay: number; z: number; shade: number };
    const projected: Proj[] = [];

    // Light sits up and to the right of the camera. Negative Z points at the viewer,
    // since `persp = focal / (focal + z)` puts larger z further away.
    const LX = 0.45;
    const LY = -0.62;
    const LZ = -0.65;

    const draw = (elapsed: number) => {
      if (width === 0 || height === 0) return;

      // Ping-pong so the loop never snaps back.
      const phase = (elapsed % CYCLE_MS) / CYCLE_MS;
      const tri = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
      const density = easeInOut(tri);

      const visible = MIN_VISIBLE + (MAX_SPLATS - MIN_VISIBLE) * density;
      const sizeScale = 2.4 - 1.45 * density;
      // Coarse splats stay translucent; the converged surface goes fully opaque.
      const opacity = 0.42 + 0.58 * density;
      // Shading fades in with convergence, so early frames read as raw blobs.
      const lit = 0.25 + 0.75 * density;

      const yaw = elapsed / 6500;
      const pitch = 0.38 + Math.sin(elapsed / 9000) * 0.14;

      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosX = Math.cos(pitch);
      const sinX = Math.sin(pitch);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.29;
      const focal = 3.4;

      projected.length = 0;

      for (let i = 0; i < MAX_SPLATS; i++) {
        const sp = splats[i];
        if (sp.order * MAX_SPLATS > visible) continue;

        // Rotate the normal first so we can cull before doing more work.
        const rnx1 = sp.nx * cosY - sp.nz * sinY;
        const rnz1 = sp.nx * sinY + sp.nz * cosY;
        const rny = sp.ny * cosX - rnz1 * sinX;
        const rnz = sp.ny * sinX + rnz1 * cosX;

        // Back-face cull: this is what stops the far side showing through.
        // Front faces point at the viewer, i.e. negative Z.
        const facing = -rnz;
        if (facing <= 0.02) continue;

        const x1 = sp.x * cosY - sp.z * sinY;
        const z1 = sp.x * sinY + sp.z * cosY;
        const y2 = sp.y * cosX - z1 * sinX;
        const z2 = sp.y * sinX + z1 * cosX;

        const persp = focal / (focal + z2);
        const coarse = 0.75 + 0.8 * (1 - sp.order);

        // Lambert + a tight specular, then depth fog for air.
        const diff = Math.max(0, rnx1 * LX + rny * LY + rnz * LZ);
        const spec = Math.pow(facing, 18) * 0.35;
        let shade = 0.14 + 0.78 * diff + spec;
        shade = 0.14 + (shade - 0.14) * lit;
        shade *= 0.74 + 0.26 * persp;

        projected.push({
          sx: cx + x1 * radius * persp,
          sy: cy + y2 * radius * persp,
          s: radius * 0.062 * persp * sizeScale * coarse,
          rot: sp.rot + yaw * 0.4,
          ax: sp.ax,
          ay: sp.ay,
          z: z2,
          shade: Math.max(0, Math.min(1, shade)),
        });
      }

      // Painter's algorithm: farthest splat first, as a splat rasteriser does.
      projected.sort((a, b) => b.z - a.z);

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const sprite = ramp[Math.round(p.shade * (SHADE_STEPS - 1))];
        ctx.save();
        ctx.translate(p.sx, p.sy);
        ctx.rotate(p.rot);
        ctx.globalAlpha = opacity;
        const w = p.s * p.ax;
        const h = p.s * p.ay;
        ctx.drawImage(sprite, -w, -h, w * 2, h * 2);
        ctx.restore();
      }

      ctx.globalAlpha = 1;
    };

    if (reduceMotion) {
      // Hold a single converged frame rather than animating.
      draw(CYCLE_MS / 2);
    } else {
      // Offset so the first painted frame is the converged surface, not raw blobs.
      const start = performance.now() - CYCLE_MS / 2;
      const loop = (now: number) => {
        draw(now - start);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="card relative overflow-hidden border-transparent bg-[#0b0b0d] p-0">
      <div className="relative aspect-[5/4] w-full">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

        {/* Soft vignette to seat the object in the viewport. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 45%, transparent 45%, rgba(11,11,13,0.7) 100%)',
          }}
          aria-hidden
        />

        <span className="absolute left-5 top-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
          3D Gaussian Field
        </span>
        <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-[0.04em] text-white/30">
          densification
        </span>
      </div>
    </div>
  );
}
