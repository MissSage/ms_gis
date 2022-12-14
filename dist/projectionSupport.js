import { bx as y$1, by as d, a as r, bz as _n, bA as I, bB as E, bC as g$1, bs as k, bD as ln } from "./index.js";
import { t } from "./json.js";
const l = [0, 0];
function h(s, t2) {
  if (!t2)
    return null;
  if ("x" in t2) {
    const e = { x: 0, y: 0 };
    return [e.x, e.y] = s(t2.x, t2.y, l), t2.z != null && (e.z = t2.z), t2.m != null && (e.m = t2.m), e;
  }
  if ("xmin" in t2) {
    const e = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [e.xmin, e.ymin] = s(t2.xmin, t2.ymin, l), [e.xmax, e.ymax] = s(t2.xmax, t2.ymax, l), t2.hasZ && (e.zmin = t2.zmin, e.zmax = t2.zmax, e.hasZ = true), t2.hasM && (e.mmin = t2.mmin, e.mmax = t2.mmax, e.hasM = true), e;
  }
  return "rings" in t2 ? { rings: c(t2.rings, s), hasM: t2.hasM, hasZ: t2.hasZ } : "paths" in t2 ? { paths: c(t2.paths, s), hasM: t2.hasM, hasZ: t2.hasZ } : "points" in t2 ? { points: p(t2.points, s), hasM: t2.hasM, hasZ: t2.hasZ } : null;
}
function c(s, t2) {
  const e = [];
  for (const n of s)
    e.push(p(n, t2));
  return e;
}
function p(s, t2) {
  const e = [];
  for (const n of s) {
    const s2 = t2(n[0], n[1], [0, 0]);
    e.push(s2), n.length > 2 && s2.push(n[2]), n.length > 3 && s2.push(n[3]);
  }
  return e;
}
async function f(e, n) {
  if (!e || !n)
    return;
  const r$1 = Array.isArray(e) ? e.map((t2) => r(t2.geometry) ? t2.geometry.spatialReference : null).filter(r) : [e];
  await _n(r$1.map((s) => ({ source: s, dest: n })));
}
const x = h.bind(null, y$1), y = h.bind(null, d);
function g(s, t$1, a, m) {
  if (!s)
    return s;
  if (a || (a = t$1, t$1 = s.spatialReference), !I(t$1) || !I(a) || E(t$1, a))
    return s;
  if (g$1(t$1, a)) {
    const t2 = k(a) ? x(s) : y(s);
    return t2.spatialReference = a, t2;
  }
  return ln(t, [s], t$1, a, null, m)[0];
}
class _ {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  async push(s, t2, e) {
    if (!s || !s.length || !t2 || !e || E(t2, e))
      return s;
    const n = { geometries: s, inSpatialReference: t2, outSpatialReference: e, resolve: null };
    return this._jobs.push(n), new Promise((s2) => {
      n.resolve = s2, this._timer === null && (this._timer = setTimeout(this._process, 10));
    });
  }
  _process() {
    this._timer = null;
    const s = this._jobs.shift();
    if (!s)
      return;
    const { geometries: t$1, inSpatialReference: r2, outSpatialReference: i, resolve: a } = s;
    g$1(r2, i) ? k(i) ? a(t$1.map(x)) : a(t$1.map(y)) : a(ln(t, t$1, r2, i, null, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
}
const j = new _();
function M(s, t2, e) {
  return j.push(s, t2, e);
}
export { M, f, g };
