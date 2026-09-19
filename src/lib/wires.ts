// SVG path builders for the stylised previews. They mirror the shape of each
// NodeCraft routing style, not its obstacle avoidance: every wire here runs
// forward, so the illustration never needs a detour.

export type Pt = { x: number; y: number };
export type Routing = 'default' | 'manhattan' | 'subway' | 'sketch';

const STUB = 16;
const f = (n: number) => Math.round(n * 10) / 10;

function dedupe(points: Pt[]): Pt[] {
	return points.filter((p, i) => i === 0 || Math.hypot(p.x - points[i - 1].x, p.y - points[i - 1].y) > 0.5);
}

/** Polyline with its corners rounded by radius `r`. */
function rounded(input: Pt[], r: number): string {
	const pts = dedupe(input);
	let d = `M${f(pts[0].x)} ${f(pts[0].y)}`;
	for (let i = 1; i < pts.length - 1; i++) {
		const [p0, p1, p2] = [pts[i - 1], pts[i], pts[i + 1]];
		const l1 = Math.hypot(p1.x - p0.x, p1.y - p0.y);
		const l2 = Math.hypot(p2.x - p1.x, p2.y - p1.y);
		const rr = Math.min(r, l1 / 2, l2 / 2);
		const a = { x: p1.x - ((p1.x - p0.x) / l1) * rr, y: p1.y - ((p1.y - p0.y) / l1) * rr };
		const b = { x: p1.x + ((p2.x - p1.x) / l2) * rr, y: p1.y + ((p2.y - p1.y) / l2) * rr };
		d += ` L${f(a.x)} ${f(a.y)} Q${f(p1.x)} ${f(p1.y)} ${f(b.x)} ${f(b.y)}`;
	}
	const last = pts[pts.length - 1];
	return `${d} L${f(last.x)} ${f(last.y)}`;
}

export function bezier(a: Pt, b: Pt): string {
	const dx = Math.max(36, Math.abs(b.x - a.x) * 0.5);
	return `M${f(a.x)} ${f(a.y)} C${f(a.x + dx)} ${f(a.y)} ${f(b.x - dx)} ${f(b.y)} ${f(b.x)} ${f(b.y)}`;
}

/** Target behind the source: leave right, loop through a horizontal corridor, enter left. */
function backward(a: Pt, b: Pt, r: number): string {
	const mid = Math.abs(b.y - a.y) < 50 ? Math.max(a.y, b.y) + 48 : (a.y + b.y) / 2;
	return rounded(
		[a, { x: a.x + STUB, y: a.y }, { x: a.x + STUB, y: mid }, { x: b.x - STUB, y: mid }, { x: b.x - STUB, y: b.y }, b],
		r,
	);
}

/** `turnX` moves the vertical run, as ribbon spacing does for wires sharing a corridor. */
export function manhattan(a: Pt, b: Pt, turnX?: number): string {
	if (b.x - a.x < 2 * STUB + 4) return backward(a, b, 8);
	if (Math.abs(b.y - a.y) < 1) return `M${f(a.x)} ${f(a.y)} L${f(b.x)} ${f(b.y)}`;
	const mx = turnX ?? (a.x + b.x) / 2;
	return rounded([a, { x: mx, y: a.y }, { x: mx, y: b.y }, b], 8);
}

export function subway(a: Pt, b: Pt): string {
	if (b.x - a.x < 2 * STUB + 4) return backward(a, b, 6);
	const dy = b.y - a.y;
	const ady = Math.abs(dy);
	if (ady < 1) return `M${f(a.x)} ${f(a.y)} L${f(b.x)} ${f(b.y)}`;
	const sign = Math.sign(dy);
	const avail = Math.max(0, b.x - a.x - 2 * STUB);
	if (ady <= avail) {
		// One 45° diagonal carries the whole vertical offset.
		const xs = a.x + STUB + (avail - ady) / 2;
		return rounded([a, { x: xs, y: a.y }, { x: xs + ady, y: b.y }, b], 6);
	}
	// Not enough room: 45° in, vertical run, 45° out.
	const k = avail / 2;
	const x0 = a.x + STUB;
	return rounded(
		[a, { x: x0, y: a.y }, { x: x0 + k, y: a.y + sign * k }, { x: x0 + k, y: b.y - sign * k }, { x: b.x - STUB, y: b.y }, b],
		6,
	);
}

/** Deterministic PRNG so the hand-drawn waver is identical on every build. */
function rng(seed: number) {
	let s = seed >>> 0;
	return () => {
		s = (s * 1664525 + 1013904223) >>> 0;
		return s / 4294967296;
	};
}

/** Hand-drawn arc: a bezier resampled with a low-frequency perpendicular waver. */
export function sketch(a: Pt, b: Pt, seed = 1): string {
	const rand = rng(seed * 7919 + 17);
	const dx = Math.max(36, Math.abs(b.x - a.x) * 0.5);
	const c1 = { x: a.x + dx, y: a.y };
	const c2 = { x: b.x - dx, y: b.y };
	const at = (t: number) => {
		const u = 1 - t;
		return {
			x: u * u * u * a.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * b.x,
			y: u * u * u * a.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * b.y,
		};
	};
	const ph1 = rand() * Math.PI * 2;
	const ph2 = rand() * Math.PI * 2;
	const amp = 1.4 + rand() * 1.2;
	const n = 14;
	const pts: Pt[] = [];
	for (let i = 0; i <= n; i++) {
		const t = i / n;
		const p = at(t);
		const q = at(Math.min(1, t + 0.01));
		const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
		const nx = -(q.y - p.y) / len;
		const ny = (q.x - p.x) / len;
		const env = Math.sin(Math.PI * t); // pinned at both pins
		const w = env * amp * (Math.sin(t * 7 + ph1) * 0.7 + Math.sin(t * 17 + ph2) * 0.3);
		pts.push({ x: p.x + nx * w, y: p.y + ny * w });
	}
	// Catmull-Rom through the points, emitted as cubic beziers.
	let d = `M${f(pts[0].x)} ${f(pts[0].y)}`;
	for (let i = 0; i < pts.length - 1; i++) {
		const p0 = pts[Math.max(0, i - 1)];
		const p1 = pts[i];
		const p2 = pts[i + 1];
		const p3 = pts[Math.min(pts.length - 1, i + 2)];
		d += ` C${f(p1.x + (p2.x - p0.x) / 6)} ${f(p1.y + (p2.y - p0.y) / 6)} ${f(p2.x - (p3.x - p1.x) / 6)} ${f(p2.y - (p3.y - p1.y) / 6)} ${f(p2.x)} ${f(p2.y)}`;
	}
	return d;
}

export function route(style: Routing, a: Pt, b: Pt, seed = 1): string {
	switch (style) {
		case 'manhattan':
			return manhattan(a, b);
		case 'subway':
			return subway(a, b);
		case 'sketch':
			return sketch(a, b, seed);
		default:
			return bezier(a, b);
	}
}
