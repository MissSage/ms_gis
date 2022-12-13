import { gx as t, fM as s$1, gy as o, gz as u, gA as u$1, fe as t$1, E as n$4, f0 as u$2, a5 as g, eV as P, eZ as e, eX as l, a4 as s$2, gB as n$5, fq as a$2, gC as r, eU as r$1, s as s$3, t as t$2, gD as g$1, f6 as O$1, e$ as x, eW as _$1, gw as v, e_ as z$1, gE as L$1, G as o$1, gt as p$1 } from "./index.js";
import { n as n$1 } from "./mat3f64.js";
import { n as n$2 } from "./mat4f64.js";
import { n as n$3 } from "./quatf64.js";
class s {
  constructor(t2) {
    this._allocator = t2, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return this._itemsPtr === 0 && t(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const t2 = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * i);
    this._items.length = Math.min(t2, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let t2 = 0; t2 < Math.max(8, Math.min(this._items.length, i)); t2++)
      this._items.push(this._allocator());
  }
}
const i = 1024;
class a$1 {
  constructor(t2, e2, s2) {
    this._itemByteSize = t2, this._itemCreate = e2, this._buffers = new Array(), this._items = new Array(), this._itemsPtr = 0, this._itemsPerBuffer = Math.ceil(s2 / this._itemByteSize);
  }
  get() {
    this._itemsPtr === 0 && t(() => this._reset());
    const t$12 = Math.floor(this._itemsPtr / this._itemsPerBuffer);
    for (; this._buffers.length <= t$12; ) {
      const t2 = new ArrayBuffer(this._itemsPerBuffer * this._itemByteSize);
      for (let e2 = 0; e2 < this._itemsPerBuffer; ++e2)
        this._items.push(this._itemCreate(t2, e2 * this._itemByteSize));
      this._buffers.push(t2);
    }
    return this._items[this._itemsPtr++];
  }
  _reset() {
    const t2 = 2 * (Math.floor(this._itemsPtr / this._itemsPerBuffer) + 1);
    for (; this._buffers.length > t2; )
      this._buffers.pop(), this._items.length = this._buffers.length * this._itemsPerBuffer;
    this._itemsPtr = 0;
  }
  static createVec2f64(t2 = c$1) {
    return new a$1(16, o, t2);
  }
  static createVec3f64(t2 = c$1) {
    return new a$1(24, u, t2);
  }
  static createVec4f64(t2 = c$1) {
    return new a$1(32, u$1, t2);
  }
  static createMat3f64(t2 = c$1) {
    return new a$1(72, n$1, t2);
  }
  static createMat4f64(t2 = c$1) {
    return new a$1(128, n$2, t2);
  }
  static createQuatf64(t2 = c$1) {
    return new a$1(32, n$3, t2);
  }
  get test() {
    return { size: this._buffers.length * this._itemsPerBuffer * this._itemByteSize };
  }
}
const c$1 = 4 * s$1.KILOBYTES;
a$1.createVec2f64();
const c = a$1.createVec3f64();
a$1.createVec4f64();
a$1.createMat3f64();
const f = a$1.createMat4f64();
a$1.createQuatf64();
var n;
!function(n2) {
  n2[n2.X = 0] = "X", n2[n2.Y = 1] = "Y", n2[n2.Z = 2] = "Z";
}(n || (n = {}));
function d(i2) {
  return i2 ? m(t$1(i2.origin), t$1(i2.direction)) : m(n$4(), n$4());
}
function m(i2, n2) {
  return { origin: i2, direction: n2 };
}
function p(i2, n2) {
  const r2 = S.get();
  return r2.origin = i2, r2.direction = n2, r2;
}
function q$1(i2, n2, r2) {
  const o2 = P(i2.direction, e(r2, n2, i2.origin));
  return u$2(r2, i2.origin, g(r2, i2.direction, o2)), r2;
}
const S = new s(() => d());
function a(o2, s2) {
  const c2 = P(o2, s2) / (s$2(o2) * s$2(s2));
  return -l(c2);
}
function R() {
  return n$5();
}
function _(t2, r2 = R()) {
  return a$2(r2, t2);
}
function q(t2, r$12) {
  return r(t2[0], t2[1], t2[2], r$12);
}
function w(t2) {
  return t2;
}
function C(t2) {
  t2[0] = t2[1] = t2[2] = t2[3] = 0;
}
function O(t2, r2) {
  return t2[0] = t2[1] = t2[2] = 0, t2[3] = r2, t2;
}
function T(t2) {
  return t2[3];
}
function k(t2) {
  return t2;
}
function E(t2, r$12, n2, e2) {
  return r(t2, r$12, n2, e2);
}
function L(t2, r2, n2) {
  return t2 !== n2 && r$1(n2, t2), n2[3] = t2[3] + r2, n2;
}
function Z(r2, n2, e2) {
  return s$3.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"), r2 === e2 ? e2 : _(r2, e2);
}
function z(t2, r2, n2) {
  if (t$2(r2))
    return false;
  const { origin: o2, direction: s2 } = r2, i2 = U;
  i2[0] = o2[0] - t2[0], i2[1] = o2[1] - t2[1], i2[2] = o2[2] - t2[2];
  const a2 = s2[0] * s2[0] + s2[1] * s2[1] + s2[2] * s2[2];
  if (a2 === 0)
    return false;
  const c2 = 2 * (s2[0] * i2[0] + s2[1] * i2[1] + s2[2] * i2[2]), u2 = c2 * c2 - 4 * a2 * (i2[0] * i2[0] + i2[1] * i2[1] + i2[2] * i2[2] - t2[3] * t2[3]);
  if (u2 < 0)
    return false;
  const f2 = Math.sqrt(u2);
  let m2 = (-c2 - f2) / (2 * a2);
  const p2 = (-c2 + f2) / (2 * a2);
  return (m2 < 0 || p2 < m2 && p2 > 0) && (m2 = p2), !(m2 < 0) && (n2 && (n2[0] = o2[0] + s2[0] * m2, n2[1] = o2[1] + s2[1] * m2, n2[2] = o2[2] + s2[2] * m2), true);
}
const U = n$4();
function V(t2, r2) {
  return z(t2, r2, null);
}
function X(t2, r2, n2) {
  if (z(t2, r2, n2))
    return n2;
  const e2 = Y(t2, r2, c.get());
  return u$2(n2, r2.origin, g(c.get(), r2.direction, x(r2.origin, e2) / s$2(r2.direction))), n2;
}
function Y(t2, r2, n2) {
  const e2 = c.get(), s2 = f.get();
  _$1(e2, r2.origin, r2.direction);
  const i2 = T(t2);
  _$1(n2, e2, r2.origin), g(n2, n2, 1 / s$2(n2) * i2);
  const c$12 = G(t2, r2.origin), p2 = a(r2.origin, n2);
  return g$1(s2, p2 + c$12, e2), O$1(n2, n2, s2), n2;
}
function B(t2, r2, n2) {
  return z(t2, r2, n2) ? n2 : (q$1(r2, k(t2), n2), D(t2, n2, n2));
}
function D(t2, r2, n2) {
  const e$1 = e(c.get(), r2, k(t2)), o2 = g(c.get(), e$1, t2[3] / s$2(e$1));
  return u$2(n2, o2, k(t2));
}
function F(t2, r2) {
  const n2 = e(c.get(), r2, k(t2)), e$1 = v(n2), o2 = t2[3] * t2[3];
  return Math.sqrt(Math.abs(e$1 - o2));
}
function G(t2, n2) {
  const e$1 = e(c.get(), n2, k(t2)), o2 = s$2(e$1), s2 = T(t2), i2 = s2 + Math.abs(s2 - o2);
  return l(s2 / i2);
}
const H = n$4();
function I(t2, r2, e$1, o2) {
  const s2 = e(H, r2, k(t2));
  switch (e$1) {
    case n.X: {
      const t3 = L$1(s2, H)[2];
      return o$1(o2, -Math.sin(t3), Math.cos(t3), 0);
    }
    case n.Y: {
      const t3 = L$1(s2, H), r3 = t3[1], e2 = t3[2], i2 = Math.sin(r3);
      return o$1(o2, -i2 * Math.cos(e2), -i2 * Math.sin(e2), Math.cos(r3));
    }
    case n.Z:
      return z$1(o2, s2);
    default:
      return;
  }
}
function J(t2, r2) {
  const n2 = e(Q, r2, k(t2));
  return s$2(n2) - t2[3];
}
function K(t2, r2, n$12, e2) {
  const o2 = J(t2, r2), s2 = I(t2, r2, n.Z, Q), c2 = g(Q, s2, n$12 - o2);
  return u$2(e2, r2, c2);
}
function N(t2, r2) {
  const n2 = p$1(k(t2), r2), e2 = T(t2);
  return n2 <= e2 * e2;
}
const Q = n$4(), W = R();
Object.freeze(Object.defineProperty({ __proto__: null, create: R, copy: _, fromCenterAndRadius: q, wrap: w, clear: C, fromRadius: O, getRadius: T, getCenter: k, fromValues: E, elevate: L, setExtent: Z, intersectRay: z, intersectsRay: V, intersectRayClosestSilhouette: X, closestPointOnSilhouette: Y, closestPoint: B, projectPoint: D, distanceToSilhouette: F, angleToSilhouette: G, axisAt: I, altitudeAt: J, setAltitudeAt: K, containsPoint: N, tmpSphere: W }, Symbol.toStringTag, { value: "Module" }));
export { N, R, T, V, _, c, d, k, p, s };
