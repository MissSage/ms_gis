import { C as r, I as w } from "./index.js";
import { J, C, o as oe } from "./rasterProjectionHelper.js";
class t {
  constructor(t2 = 15e3, e = 5e3) {
    this._timer = null, this._cachedBlocks = new Map(), this._size = -1, this._duration = t2, this._interval = Math.min(t2, e);
  }
  decreaseRefCount(t2, e) {
    const s = t2 + "/" + e, r2 = this._cachedBlocks;
    if (r2.has(s)) {
      const t3 = r2.get(s);
      return t3.refCount--, t3.refCount <= 0 && (r2.delete(s), t3.controller && t3.controller.abort()), t3.refCount;
    }
    return 0;
  }
  getBlock(t2, e) {
    const s = t2 + "/" + e, r2 = this._cachedBlocks;
    if (r2.has(s)) {
      const t3 = r2.get(s);
      return t3.ts = Date.now(), t3.refCount++, r2.delete(s), r2.set(s, t3), t3.block;
    }
    return null;
  }
  putBlock(t2, e, s, r2) {
    const i2 = this._cachedBlocks, c2 = t2 + "/" + e;
    if (i2.has(c2)) {
      const t3 = i2.get(c2);
      t3.ts = Date.now(), t3.refCount++;
    } else
      i2.set(c2, { block: s, ts: Date.now(), refCount: 1, controller: r2 });
    this._trim(), this._updateTimer();
  }
  deleteBlock(t2, e) {
    const s = this._cachedBlocks, r2 = t2 + "/" + e;
    s.has(r2) && s.delete(r2);
  }
  updateMaxSize(t2) {
    this._size = t2, this._trim();
  }
  empty() {
    this._cachedBlocks.clear(), this._clearTimer();
  }
  getCurrentSize() {
    return this._cachedBlocks.size;
  }
  _updateTimer() {
    if (this._timer != null)
      return;
    const t2 = this._cachedBlocks;
    this._timer = setInterval(() => {
      const e = Array.from(t2), s = Date.now();
      for (let r2 = 0; r2 < e.length && e[r2][1].ts <= s - this._duration; r2++)
        t2.delete(e[r2][0]);
      t2.size === 0 && this._clearTimer();
    }, this._interval);
  }
  _trim() {
    const t2 = this._cachedBlocks;
    if (this._size === -1 || this._size >= t2.size)
      return;
    const e = Array.from(t2);
    for (let s = 0; s < e.length - this._size; s++)
      t2.delete(e[s][0]);
  }
  _clearTimer() {
    this._timer != null && (clearInterval(this._timer), this._timer = null);
  }
}
const c = new Map(), i = new t();
function a(e, t2) {
  return t2 == null ? e : `${e}?sliceId=${t2}`;
}
function u(e, t2) {
  const n = { extent: null, rasterInfo: t2, cache: new Map() }, o = c.get(e);
  return o ? (o.push(n), o.length - 1) : (c.set(e, [n]), 0);
}
function f(e, t2) {
  const n = c.get(e);
  n && (n[t2] = null, n.some((e2) => e2 != null) || c.delete(e));
}
function m(e, t2, n) {
  var _a, _b;
  const o = c.get(e);
  if (!o)
    return t2 == null ? i.decreaseRefCount(e, n) : 0;
  if (t2 == null || o[t2] == null)
    return i.decreaseRefCount(e, n);
  const l = (_a = o[t2]) == null ? void 0 : _a.cache, r2 = l == null ? void 0 : l.get(n);
  if (l && r2) {
    if (r2.refCount--, r2.refCount === 0) {
      l.delete(n);
      for (let e2 = 0; e2 < o.length; e2++)
        (_b = o[e2]) == null ? void 0 : _b.cache.delete(n);
      r2.controller && r2.controller.abort();
    }
    return r2.refCount;
  }
  return 0;
}
function x(e, t2, n) {
  var _a, _b, _c;
  const o = c.get(e);
  if (!o)
    return t2 == null ? i.getBlock(e, n) : null;
  if (t2 == null || o[t2] == null) {
    for (let e2 = 0; e2 < o.length; e2++) {
      const t3 = (_a = o[e2]) == null ? void 0 : _a.cache.get(n);
      if (t3)
        return t3.refCount++, t3.block;
    }
    return i.getBlock(e, n);
  }
  const l = (_b = o[t2]) == null ? void 0 : _b.cache.get(n);
  if (l)
    return l.refCount++, l.block;
  for (let r2 = 0; r2 < o.length; r2++) {
    if (r2 === t2 || !o[r2])
      continue;
    const e2 = (_c = o[r2]) == null ? void 0 : _c.cache, l2 = e2 == null ? void 0 : e2.get(n);
    if (e2 && l2)
      return l2.refCount++, e2.set(n, l2), l2.block;
  }
  return null;
}
function h(e, t2, n, o, l = null) {
  var _a;
  const r2 = c.get(e);
  if (!r2)
    return void (t2 == null && i.putBlock(e, n, o, l));
  if (t2 == null || r2[t2] == null)
    return void i.putBlock(e, n, o, l);
  const a2 = { refCount: 1, block: o, isResolved: false, isRejected: false, controller: l };
  o.then(() => a2.isResolved = true).catch(() => a2.isRejected = true), (_a = r2[t2]) == null ? void 0 : _a.cache.set(n, a2);
}
function d(e, t2, n) {
  var _a;
  const o = c.get(e);
  o ? t2 != null && o[t2] != null ? (_a = o[t2]) == null ? void 0 : _a.cache.delete(n) : i.deleteBlock(e, n) : t2 == null && i.deleteBlock(e, n);
}
function y(e, t2) {
  var _a;
  const n = c.get(e);
  return n ? (_a = n[t2]) != null ? _a : null : null;
}
function g(t2, c2, i2, a2, u2, f2, s = null) {
  const m2 = y(t2, c2);
  if (!m2)
    return;
  const x2 = m2.extent, { cache: h2, rasterInfo: d2 } = m2;
  if (x2 && x2.xmin === i2.xmin && x2.xmax === i2.xmax && x2.ymin === i2.ymin && x2.ymax === i2.ymax)
    return;
  a2 = a2 != null ? a2 : 0;
  const g2 = i2.clone().normalize(), { spatialReference: p, transform: k } = d2, M = new Set();
  for (let y2 = 0; y2 < g2.length; y2++) {
    const t3 = g2[y2];
    if (t3.xmax - t3.xmin <= a2 || t3.ymax - t3.ymin <= a2)
      continue;
    let c3 = J(t3, p, s);
    r(k) && (c3 = k.inverseTransform(c3));
    const i3 = new w({ x: a2, y: a2, spatialReference: t3.spatialReference });
    if (u2 == null && !(u2 = C(i3, p, t3, s)))
      return;
    const { pyramidLevel: m3, pyramidResolution: x3, excessiveReading: h3 } = oe(u2, d2, f2 || "closest");
    if (h3)
      return;
    const { storageInfo: R } = d2, { origin: C$1 } = R, j = { x: Math.max(0, Math.floor((c3.xmin - C$1.x) / x3.x)), y: Math.max(0, Math.floor((C$1.y - c3.ymax) / x3.y)) }, B = Math.ceil((c3.xmax - c3.xmin) / x3.x - 0.1), b = Math.ceil((c3.ymax - c3.ymin) / x3.y - 0.1), v = m3 > 0 ? R.pyramidBlockWidth : R.blockWidth, w$1 = m3 > 0 ? R.pyramidBlockHeight : R.blockHeight, $ = 1, I = Math.max(0, Math.floor(j.x / v) - $), H = Math.max(0, Math.floor(j.y / w$1) - $), E = Math.floor((j.x + B - 1) / v) + $, P = Math.floor((j.y + b - 1) / w$1) + $;
    for (let e = H; e <= P; e++)
      for (let t4 = I; t4 <= E; t4++)
        M.add(`${m3}/${e}/${t4}`);
  }
  h2.forEach((e, t3) => {
    if (!M.has(t3)) {
      const e2 = h2.get(t3);
      (e2 == null || e2.isResolved || e2.isRejected) && h2.delete(t3);
    }
  }), m2.extent = { xmin: i2.xmin, ymin: i2.ymin, xmax: i2.xmax, ymax: i2.ymax };
}
export { a, d, f, g, h, m, u, x };
