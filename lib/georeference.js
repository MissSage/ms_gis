import { c as e, f as y, h as n, dh as l, t as n$1, bi as r$1, f7 as v, le as P$1, cm as h, b9 as e$1, bc as O$1, af as O$2, dW as Zn, ce as u, bQ as xn, lf as C$1, d1 as o, w, r as r$2, br as F, lg as B$2, aJ as t$1, eP as e$3, bC as i, gb as g$1, x as t$2, $, O as L$3, T as E, cj as e$4 } from "./index.js";
import { a, x as x$1, g } from "./axisAngleDegrees.js";
import { T as T$1, i as i$1 } from "./BufferView.js";
import { t, e as e$2, r as r$3 } from "./vec33.js";
import { O as O$3, h as h$1, L as L$2, M as M$1, j, k as k$1, R, v as v$1, V as V$1 } from "./projection.js";
var T;
let q$1 = T = class extends l {
  constructor(r2) {
    super(r2), this.origin = n$1(), this.translation = n$1(), this.rotation = a(), this.scale = r$1(1, 1, 1), this.geographic = true;
  }
  get localMatrix() {
    const r2 = e$1();
    return v(B$1, g(this.rotation), x$1(this.rotation)), P$1(r2, B$1, this.translation, this.scale), r2;
  }
  get localMatrixInverse() {
    return h(e$1(), this.localMatrix);
  }
  applyLocal(r2, o2) {
    return O$1(o2, r2, this.localMatrix);
  }
  applyLocalInverse(r2, o2) {
    return O$1(o2, r2, this.localMatrixInverse);
  }
  project(r2, o$1) {
    const t$12 = new Float64Array(r2.length), s = T$1.fromTypedArray(t$12), e2 = T$1.fromTypedArray(r2);
    if (this.geographic) {
      const r3 = O$2(o$1), i3 = e$1();
      return Zn(o$1, this.origin, i3, r3), u(i3, i3, this.localMatrix), t(s, e2, i3), xn(t$12, r3, 0, t$12, o$1, 0, t$12.length / 3), t$12;
    }
    const { localMatrix: i2, origin: a2 } = this;
    C$1(i2, o) ? e$2(s, e2) : t(s, e2, i2);
    for (let n2 = 0; n2 < t$12.length; n2 += 3)
      t$12[n2 + 0] += a2[0], t$12[n2 + 1] += a2[1], t$12[n2 + 2] += a2[2];
    return t$12;
  }
  getOriginPoint(r2) {
    const [o2, t2, s] = this.origin;
    return new w({ x: o2, y: t2, z: s, spatialReference: r2 });
  }
  equals(r2) {
    return r$2(r2) && this.geographic === r2.geographic && F(this.origin, r2.origin) && B$2(this.localMatrix, r2.localMatrix);
  }
  clone() {
    const r2 = { origin: t$1(this.origin), translation: t$1(this.translation), rotation: a(this.rotation), scale: t$1(this.scale), geographic: this.geographic };
    return new T(r2);
  }
};
e([y({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "origin", void 0), e([y({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "translation", void 0), e([y({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "rotation", void 0), e([y({ type: [Number], nonNullable: true, json: { write: true } })], q$1.prototype, "scale", void 0), e([y({ type: Boolean, nonNullable: true, json: { write: true } })], q$1.prototype, "geographic", void 0), e([y()], q$1.prototype, "localMatrix", null), e([y()], q$1.prototype, "localMatrixInverse", null), q$1 = T = e([n("esri.geometry.support.MeshTransform")], q$1);
const B$1 = e$3(), L$1 = q$1;
function r(r2, e2) {
  var _a;
  return r2.isGeographic || r2.isWebMercator && ((_a = e2 == null ? void 0 : e2.geographic) != null ? _a : true);
}
function x(n2, r$12, t2) {
  return r(r$12.spatialReference, t2) ? B(n2, r$12, t2) : P(n2, r$12, t2);
}
function k(t2, o2, e2) {
  const { position: a2, normal: i2, tangent: l2 } = t2;
  if (t$2(o2))
    return { position: a2, normal: i2, tangent: l2 };
  const s = o2.localMatrix;
  return x({ position: R(a2, new Float64Array(a2.length), s), normal: r$2(i2) ? v$1(i2, new Float32Array(i2.length), s) : null, tangent: r$2(l2) ? V$1(l2, new Float32Array(l2.length), s) : null }, o2.getOriginPoint(e2), { geographic: o2.geographic });
}
function _(n2, r$12, t2) {
  var _a;
  if (t2 == null ? void 0 : t2.useTransform) {
    const { position: o2, normal: e2, tangent: a2 } = n2;
    return { vertexAttributes: { position: o2, normal: e2, tangent: a2 }, transform: new L$1({ origin: [r$12.x, r$12.y, (_a = r$12.z) != null ? _a : 0], geographic: r(r$12.spatialReference, t2) }) };
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
  const o2 = new Float64Array(n2.position.length), e2 = n2.position, a2 = r2.x, i2 = r2.y, l2 = r2.z || 0, { horizontal: s, vertical: f } = C(t2 ? t2.unit : null, r2.spatialReference);
  for (let c = 0; c < e2.length; c += 3)
    o2[c + 0] = e2[c + 0] * s + a2, o2[c + 1] = e2[c + 1] * s + i2, o2[c + 2] = e2[c + 2] * f + l2;
  return { position: o2, normal: n2.normal, tangent: n2.tangent };
}
function B(n2, r2, t2) {
  const o2 = r2.spatialReference, e2 = O(r2, t2, D), a2 = new Float64Array(n2.position.length), i2 = L(n2.position, e2, o2, a2), l2 = g$1(I, e2);
  return { position: i2, normal: N(i2, a2, n2.normal, l2, o2), tangent: S(i2, a2, n2.tangent, l2, o2) };
}
function L(n2, r2, t$12, o2) {
  t(T$1.fromTypedArray(o2), T$1.fromTypedArray(n2), r2);
  const e2 = new Float64Array(n2.length);
  return O$3(o2, e2, t$12);
}
function N(r2, t2, o2, e2, a2) {
  if (t$2(o2))
    return null;
  const i2 = new Float32Array(o2.length);
  return r$3(i$1.fromTypedArray(i2), i$1.fromTypedArray(o2), e2), h$1(i2, r2, t2, a2, i2), i2;
}
function S(r2, t2, o2, e2, a2) {
  if (t$2(o2))
    return null;
  const i2 = new Float32Array(o2.length);
  r$3(i$1.fromTypedArray(i2, 4 * Float32Array.BYTES_PER_ELEMENT), i$1.fromTypedArray(o2, 4 * Float32Array.BYTES_PER_ELEMENT), e2);
  for (let n2 = 3; n2 < i2.length; n2 += 4)
    i2[n2] = o2[n2];
  return L$2(i2, r2, t2, a2, i2), i2;
}
function Y(n2, r2, t2) {
  const o2 = new Float64Array(n2.position.length), e2 = n2.position, a2 = r2.x, i2 = r2.y, l2 = r2.z || 0, { horizontal: s, vertical: f } = C(t2 ? t2.unit : null, r2.spatialReference);
  for (let c = 0; c < e2.length; c += 3)
    o2[c + 0] = (e2[c + 0] - a2) / s, o2[c + 1] = (e2[c + 1] - i2) / s, o2[c + 2] = (e2[c + 2] - l2) / f;
  return { position: o2, normal: n2.normal, tangent: n2.tangent };
}
function G(n2, r2, t2) {
  const o2 = r2.spatialReference;
  O(r2, t2, D);
  const e2 = h(H, D), a2 = new Float64Array(n2.position.length), l2 = U(n2.position, o2, e2, a2), s = g$1(I, e2);
  return { position: l2, normal: q(n2.normal, n2.position, a2, o2, s), tangent: V(n2.tangent, n2.position, a2, o2, s) };
}
function O(n2, r2, t2) {
  Zn(n2.spatialReference, [n2.x, n2.y, n2.z || 0], t2, O$2(n2.spatialReference));
  const { horizontal: o2, vertical: e2 } = C(r2 ? r2.unit : null, n2.spatialReference);
  return i(t2, t2, [o2, o2, e2]), t2;
}
function U(n2, r2, t$12, o2) {
  const e2 = M$1(n2, r2, o2), a2 = T$1.fromTypedArray(e2), i2 = new Float64Array(e2.length), l2 = T$1.fromTypedArray(i2);
  return t(l2, a2, t$12), i2;
}
function q(r2, t2, o2, e2, a2) {
  if (t$2(r2))
    return null;
  const i2 = j(r2, t2, o2, e2, new Float32Array(r2.length)), l2 = i$1.fromTypedArray(i2);
  return r$3(l2, l2, a2), i2;
}
function V(r2, t2, o2, e2, a2) {
  if (t$2(r2))
    return null;
  const i2 = k$1(r2, t2, o2, e2, new Float32Array(r2.length)), l2 = i$1.fromTypedArray(i2, 4 * Float32Array.BYTES_PER_ELEMENT);
  return r$3(l2, l2, a2), i2;
}
function C(r2, a2) {
  if (t$2(r2))
    return J;
  const i2 = a2.isGeographic ? 1 : $(a2), l2 = a2.isGeographic ? 1 : L$3(a2), s = E(1, r2, "meters");
  return { horizontal: s * i2, vertical: s * l2 };
}
const D = e$1(), H = e$1(), I = e$4(), J = { horizontal: 1, vertical: 1 };
export { L$1 as L, M, _, b, k, r, x };
