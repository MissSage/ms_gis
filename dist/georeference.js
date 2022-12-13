import { eU as r$1, db as m, f3 as b$3, $ as e$1, a0 as y$1, a1 as n, co as l, E as n$1, ab as r$2, f4 as P$1, f5 as h$1, f6 as O$2, f7 as O$3, f8 as Zn, f9 as u, fa as xn, fb as C$1, a7 as w$2, a as r$3, fc as F, fd as B$3, fe as t$1, s, ff as u$1, fg as P$2, fh as s$1, fi as a$1, dQ as o$1, dP as S$2, fj as c, e_ as z, t as t$2, fk as g$2, fl as B$4, fm as i$1, ch as $, fn as L$3, fo as E } from "./index.js";
import { e as e$4 } from "./mat3f64.js";
import { e as e$2, o } from "./mat4f64.js";
import { v as v$2, y, x as x$3 } from "./quat.js";
import { e } from "./quatf64.js";
import { T as T$1, i } from "./BufferView.js";
import { t, e as e$3, r as r$4, o as o$2 } from "./vec33.js";
function a(n2 = b$2) {
  return [n2[0], n2[1], n2[2], n2[3]];
}
function k$2(n2, r2, t2 = a()) {
  return r$1(g$1(t2), n2), t2[3] = r2, t2;
}
function v$1(r2, c2, f = a()) {
  return v$2(d, g$1(r2), x$2(r2)), v$2(w$1, g$1(c2), x$2(c2)), y(d, w$1, d), U$2(f, b$3(x$3(g$1(f), d)));
}
function g$1(n2) {
  return n2;
}
function x$2(n2) {
  return m(n2[3]);
}
function U$2(n2, r2) {
  return n2[3] = r2, n2;
}
const b$2 = [0, 0, 1, 0], d = e(), w$1 = e();
a();
var T;
let q$1 = T = class extends l {
  constructor(r2) {
    super(r2), this.origin = n$1(), this.translation = n$1(), this.rotation = a(), this.scale = r$2(1, 1, 1), this.geographic = true;
  }
  get localMatrix() {
    const r2 = e$2();
    return v$2(B$2, g$1(this.rotation), x$2(this.rotation)), P$1(r2, B$2, this.translation, this.scale), r2;
  }
  get localMatrixInverse() {
    return h$1(e$2(), this.localMatrix);
  }
  applyLocal(r2, o2) {
    return O$2(o2, r2, this.localMatrix);
  }
  applyLocalInverse(r2, o2) {
    return O$2(o2, r2, this.localMatrixInverse);
  }
  project(r2, o$12) {
    const t$12 = new Float64Array(r2.length), s2 = T$1.fromTypedArray(t$12), e2 = T$1.fromTypedArray(r2);
    if (this.geographic) {
      const r3 = O$3(o$12), i3 = e$2();
      return Zn(o$12, this.origin, i3, r3), u(i3, i3, this.localMatrix), t(s2, e2, i3), xn(t$12, r3, 0, t$12, o$12, 0, t$12.length / 3), t$12;
    }
    const { localMatrix: i2, origin: a2 } = this;
    C$1(i2, o) ? e$3(s2, e2) : t(s2, e2, i2);
    for (let n2 = 0; n2 < t$12.length; n2 += 3)
      t$12[n2 + 0] += a2[0], t$12[n2 + 1] += a2[1], t$12[n2 + 2] += a2[2];
    return t$12;
  }
  getOriginPoint(r2) {
    const [o2, t2, s2] = this.origin;
    return new w$2({ x: o2, y: t2, z: s2, spatialReference: r2 });
  }
  equals(r2) {
    return r$3(r2) && this.geographic === r2.geographic && F(this.origin, r2.origin) && B$3(this.localMatrix, r2.localMatrix);
  }
  clone() {
    const r2 = { origin: t$1(this.origin), translation: t$1(this.translation), rotation: a(this.rotation), scale: t$1(this.scale), geographic: this.geographic };
    return new T(r2);
  }
};
e$1([y$1({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "origin", void 0), e$1([y$1({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "translation", void 0), e$1([y$1({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "rotation", void 0), e$1([y$1({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "scale", void 0), e$1([y$1({ type: Boolean, nonNullable: true, json: { write: true } })], q$1.prototype, "geographic", void 0), e$1([y$1()], q$1.prototype, "localMatrix", null), e$1([y$1()], q$1.prototype, "localMatrixInverse", null), q$1 = T = e$1([n("esri.geometry.support.MeshTransform")], q$1);
const B$2 = e(), L$2 = q$1;
function r(r2, e2) {
  var _a;
  return r2.isGeographic || r2.isWebMercator && ((_a = e2 == null ? void 0 : e2.geographic) != null ? _a : true);
}
const g = s.getLogger("esri.geometry.support.meshUtils.normalProjection");
function j(r2, e2, o2, t2, n2) {
  return B$1(t2) ? (b$1(Y$1.TO_PCPF, i.fromTypedArray(r2), T$1.fromTypedArray(e2), T$1.fromTypedArray(o2), t2, i.fromTypedArray(n2)), n2) : (g.error("Cannot convert spatial reference to PCPF"), n2);
}
function h(r2, e2, o2, t2, n2) {
  return B$1(t2) ? (b$1(Y$1.FROM_PCPF, i.fromTypedArray(r2), T$1.fromTypedArray(e2), T$1.fromTypedArray(o2), t2, i.fromTypedArray(n2)), n2) : (g.error("Cannot convert to spatial reference from PCPF"), n2);
}
function M$1(r2, e2, o2) {
  return xn(r2, e2, 0, o2, O$3(e2), 0, r2.length / 3), o2;
}
function O$1(r2, e2, o2) {
  return xn(r2, O$3(o2), 0, e2, o2, 0, r2.length / 3), e2;
}
function R(r2, o2, t$12) {
  if (t$2(r2))
    return o2;
  const n2 = T$1.fromTypedArray(r2), f = T$1.fromTypedArray(o2);
  return t(f, n2, t$12), o2;
}
function v(r2, n2, f) {
  if (t$2(r2))
    return n2;
  g$2(x$1, f);
  const a2 = i.fromTypedArray(r2), c2 = i.fromTypedArray(n2);
  return r$4(c2, a2, x$1), B$4(x$1) || o$2(c2, c2), n2;
}
function V$1(r2, n2, f) {
  if (t$2(r2))
    return n2;
  g$2(x$1, f);
  const a2 = i.fromTypedArray(r2, 4 * Float32Array.BYTES_PER_ELEMENT), c2 = i.fromTypedArray(n2, 4 * Float32Array.BYTES_PER_ELEMENT);
  if (r$4(c2, a2, x$1), B$4(x$1) || o$2(c2, c2), r2 !== n2)
    for (let e2 = 3; e2 < r2.length; e2 += 4)
      n2[e2] = r2[e2];
  return n2;
}
function k$1(r2, e2, o2, t2, n2) {
  if (!B$1(t2))
    return g.error("Cannot convert spatial reference to PCPF"), n2;
  b$1(Y$1.TO_PCPF, i.fromTypedArray(r2, 4 * Float32Array.BYTES_PER_ELEMENT), T$1.fromTypedArray(e2), T$1.fromTypedArray(o2), t2, i.fromTypedArray(n2, 4 * Float32Array.BYTES_PER_ELEMENT));
  for (let f = 3; f < r2.length; f += 4)
    n2[f] = r2[f];
  return n2;
}
function L$1(r2, e2, o2, t2, n2) {
  if (!B$1(t2))
    return g.error("Cannot convert to spatial reference from PCPF"), n2;
  b$1(Y$1.FROM_PCPF, i.fromTypedArray(r2, 16), T$1.fromTypedArray(e2), T$1.fromTypedArray(o2), t2, i.fromTypedArray(n2, 16));
  for (let f = 3; f < r2.length; f += 4)
    n2[f] = r2[f];
  return n2;
}
function b$1(r2, e2, o2, t2, a2, c$1) {
  if (!e2)
    return;
  const i2 = o2.count, y2 = O$3(a2);
  if (S$1(a2))
    for (let s2 = 0; s2 < i2; s2++)
      t2.getVec(s2, U$1), e2.getVec(s2, w), Zn(y2, U$1, W, y2), a$1(x$1, W), r2 === Y$1.FROM_PCPF && o$1(x$1, x$1), S$2(w, w, x$1), c$1.setVec(s2, w);
  else
    for (let u2 = 0; u2 < i2; u2++) {
      t2.getVec(u2, U$1), e2.getVec(u2, w), Zn(y2, U$1, W, y2), a$1(x$1, W);
      const a3 = c(o2.get(u2, 1));
      let i3 = Math.cos(a3);
      r2 === Y$1.TO_PCPF && (i3 = 1 / i3), x$1[0] *= i3, x$1[1] *= i3, x$1[2] *= i3, x$1[3] *= i3, x$1[4] *= i3, x$1[5] *= i3, r2 === Y$1.FROM_PCPF && o$1(x$1, x$1), S$2(w, w, x$1), z(w, w), c$1.setVec(u2, w);
    }
  return c$1;
}
function B$1(r2) {
  return S$1(r2) || N$1(r2);
}
function S$1(r2) {
  return r2.isWGS84 || u$1(r2) || P$2(r2) || s$1(r2);
}
function N$1(r2) {
  return r2.isWebMercator;
}
var Y$1;
!function(r2) {
  r2[r2.TO_PCPF = 0] = "TO_PCPF", r2[r2.FROM_PCPF = 1] = "FROM_PCPF";
}(Y$1 || (Y$1 = {}));
const U$1 = n$1(), w = n$1(), W = e$2(), x$1 = e$4();
function x(n2, r$12, t2) {
  return r(r$12.spatialReference, t2) ? B(n2, r$12, t2) : P(n2, r$12, t2);
}
function k(t2, o2, e2) {
  const { position: a2, normal: i2, tangent: l2 } = t2;
  if (t$2(o2))
    return { position: a2, normal: i2, tangent: l2 };
  const s2 = o2.localMatrix;
  return x({ position: R(a2, new Float64Array(a2.length), s2), normal: r$3(i2) ? v(i2, new Float32Array(i2.length), s2) : null, tangent: r$3(l2) ? V$1(l2, new Float32Array(l2.length), s2) : null }, o2.getOriginPoint(e2), { geographic: o2.geographic });
}
function _(n2, r$12, t2) {
  var _a;
  if (t2 == null ? void 0 : t2.useTransform) {
    const { position: o2, normal: e2, tangent: a2 } = n2;
    return { vertexAttributes: { position: o2, normal: e2, tangent: a2 }, transform: new L$2({ origin: [r$12.x, r$12.y, (_a = r$12.z) != null ? _a : 0], geographic: r(r$12.spatialReference, t2) }) };
  }
  return { vertexAttributes: x(n2, r$12, t2), transform: null };
}
function b(n2, r$12, t2) {
  return r(r$12.spatialReference, t2) ? G(n2, r$12, t2) : Y(n2, r$12, t2);
}
function M(r$12, t2, o2, e2) {
  if (t$2(t2))
    return b(r$12, o2, e2);
  const a2 = k(r$12, t2, o2.spatialReference);
  return o2.equals(t2.getOriginPoint(o2.spatialReference)) ? Y(a2, o2, e2) : r(o2.spatialReference, e2) ? G(a2, o2, e2) : Y(a2, o2, e2);
}
function P(n2, r2, t2) {
  const o2 = new Float64Array(n2.position.length), e2 = n2.position, a2 = r2.x, i2 = r2.y, l2 = r2.z || 0, { horizontal: s2, vertical: f } = C(t2 ? t2.unit : null, r2.spatialReference);
  for (let c2 = 0; c2 < e2.length; c2 += 3)
    o2[c2 + 0] = e2[c2 + 0] * s2 + a2, o2[c2 + 1] = e2[c2 + 1] * s2 + i2, o2[c2 + 2] = e2[c2 + 2] * f + l2;
  return { position: o2, normal: n2.normal, tangent: n2.tangent };
}
function B(n2, r2, t2) {
  const o2 = r2.spatialReference, e2 = O(r2, t2, D), a2 = new Float64Array(n2.position.length), i2 = L(n2.position, e2, o2, a2), l2 = g$2(I, e2);
  return { position: i2, normal: N(i2, a2, n2.normal, l2, o2), tangent: S(i2, a2, n2.tangent, l2, o2) };
}
function L(n2, r2, t$12, o2) {
  t(T$1.fromTypedArray(o2), T$1.fromTypedArray(n2), r2);
  const e2 = new Float64Array(n2.length);
  return O$1(o2, e2, t$12);
}
function N(r2, t2, o2, e2, a2) {
  if (t$2(o2))
    return null;
  const i$12 = new Float32Array(o2.length);
  return r$4(i.fromTypedArray(i$12), i.fromTypedArray(o2), e2), h(i$12, r2, t2, a2, i$12), i$12;
}
function S(r2, t2, o2, e2, a2) {
  if (t$2(o2))
    return null;
  const i$12 = new Float32Array(o2.length);
  r$4(i.fromTypedArray(i$12, 4 * Float32Array.BYTES_PER_ELEMENT), i.fromTypedArray(o2, 4 * Float32Array.BYTES_PER_ELEMENT), e2);
  for (let n2 = 3; n2 < i$12.length; n2 += 4)
    i$12[n2] = o2[n2];
  return L$1(i$12, r2, t2, a2, i$12), i$12;
}
function Y(n2, r2, t2) {
  const o2 = new Float64Array(n2.position.length), e2 = n2.position, a2 = r2.x, i2 = r2.y, l2 = r2.z || 0, { horizontal: s2, vertical: f } = C(t2 ? t2.unit : null, r2.spatialReference);
  for (let c2 = 0; c2 < e2.length; c2 += 3)
    o2[c2 + 0] = (e2[c2 + 0] - a2) / s2, o2[c2 + 1] = (e2[c2 + 1] - i2) / s2, o2[c2 + 2] = (e2[c2 + 2] - l2) / f;
  return { position: o2, normal: n2.normal, tangent: n2.tangent };
}
function G(n2, r2, t2) {
  const o2 = r2.spatialReference;
  O(r2, t2, D);
  const e2 = h$1(H, D), a2 = new Float64Array(n2.position.length), l2 = U(n2.position, o2, e2, a2), s2 = g$2(I, e2);
  return { position: l2, normal: q(n2.normal, n2.position, a2, o2, s2), tangent: V(n2.tangent, n2.position, a2, o2, s2) };
}
function O(n2, r2, t2) {
  Zn(n2.spatialReference, [n2.x, n2.y, n2.z || 0], t2, O$3(n2.spatialReference));
  const { horizontal: o2, vertical: e2 } = C(r2 ? r2.unit : null, n2.spatialReference);
  return i$1(t2, t2, [o2, o2, e2]), t2;
}
function U(n2, r2, t$12, o2) {
  const e2 = M$1(n2, r2, o2), a2 = T$1.fromTypedArray(e2), i2 = new Float64Array(e2.length), l2 = T$1.fromTypedArray(i2);
  return t(l2, a2, t$12), i2;
}
function q(r2, t2, o2, e2, a2) {
  if (t$2(r2))
    return null;
  const i$12 = j(r2, t2, o2, e2, new Float32Array(r2.length)), l2 = i.fromTypedArray(i$12);
  return r$4(l2, l2, a2), i$12;
}
function V(r2, t2, o2, e2, a2) {
  if (t$2(r2))
    return null;
  const i$12 = k$1(r2, t2, o2, e2, new Float32Array(r2.length)), l2 = i.fromTypedArray(i$12, 4 * Float32Array.BYTES_PER_ELEMENT);
  return r$4(l2, l2, a2), i$12;
}
function C(r2, a2) {
  if (t$2(r2))
    return J;
  const i2 = a2.isGeographic ? 1 : $(a2), l2 = a2.isGeographic ? 1 : L$3(a2), s2 = E(1, r2, "meters");
  return { horizontal: s2 * i2, vertical: s2 * l2 };
}
const D = e$2(), H = e$2(), I = e$4(), J = { horizontal: 1, vertical: 1 };
export { L$1 as L, M$1 as M, O$1 as O, _, k$1 as a, b, a as c, x$2 as d, k$2 as e, L$2 as f, g$1 as g, h, M as i, j, k, r, v$1 as v, x };
