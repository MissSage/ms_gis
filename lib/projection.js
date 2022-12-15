import { ea as s, ch as xn, aH as O$1, id as u, ie as P, ig as s$1, ep as Zn, cA as a, gZ as o, cB as S$1, ih as c, bE as z, a1 as n, bA as e, cN as e$1, a2 as t, gM as g$1, ii as B$1 } from "./index.js";
import { i, T } from "./BufferView.js";
import { t as t$1, r, o as o$1 } from "./vec33.js";
const g = s.getLogger("esri.geometry.support.meshUtils.normalProjection");
function j(r2, e2, o2, t2, n2) {
  return B(t2) ? (b(Y.TO_PCPF, i.fromTypedArray(r2), T.fromTypedArray(e2), T.fromTypedArray(o2), t2, i.fromTypedArray(n2)), n2) : (g.error("Cannot convert spatial reference to PCPF"), n2);
}
function h(r2, e2, o2, t2, n2) {
  return B(t2) ? (b(Y.FROM_PCPF, i.fromTypedArray(r2), T.fromTypedArray(e2), T.fromTypedArray(o2), t2, i.fromTypedArray(n2)), n2) : (g.error("Cannot convert to spatial reference from PCPF"), n2);
}
function M(r2, e2, o2) {
  return xn(r2, e2, 0, o2, O$1(e2), 0, r2.length / 3), o2;
}
function O(r2, e2, o2) {
  return xn(r2, O$1(o2), 0, e2, o2, 0, r2.length / 3), e2;
}
function R(r2, o2, t$2) {
  if (t(r2))
    return o2;
  const n2 = T.fromTypedArray(r2), f = T.fromTypedArray(o2);
  return t$1(f, n2, t$2), o2;
}
function v(r$1, n2, f) {
  if (t(r$1))
    return n2;
  g$1(x, f);
  const a2 = i.fromTypedArray(r$1), c2 = i.fromTypedArray(n2);
  return r(c2, a2, x), B$1(x) || o$1(c2, c2), n2;
}
function V(r$1, n2, f) {
  if (t(r$1))
    return n2;
  g$1(x, f);
  const a2 = i.fromTypedArray(r$1, 4 * Float32Array.BYTES_PER_ELEMENT), c2 = i.fromTypedArray(n2, 4 * Float32Array.BYTES_PER_ELEMENT);
  if (r(c2, a2, x), B$1(x) || o$1(c2, c2), r$1 !== n2)
    for (let e2 = 3; e2 < r$1.length; e2 += 4)
      n2[e2] = r$1[e2];
  return n2;
}
function k(r2, e2, o2, t2, n2) {
  if (!B(t2))
    return g.error("Cannot convert spatial reference to PCPF"), n2;
  b(Y.TO_PCPF, i.fromTypedArray(r2, 4 * Float32Array.BYTES_PER_ELEMENT), T.fromTypedArray(e2), T.fromTypedArray(o2), t2, i.fromTypedArray(n2, 4 * Float32Array.BYTES_PER_ELEMENT));
  for (let f = 3; f < r2.length; f += 4)
    n2[f] = r2[f];
  return n2;
}
function L(r2, e2, o2, t2, n2) {
  if (!B(t2))
    return g.error("Cannot convert to spatial reference from PCPF"), n2;
  b(Y.FROM_PCPF, i.fromTypedArray(r2, 16), T.fromTypedArray(e2), T.fromTypedArray(o2), t2, i.fromTypedArray(n2, 16));
  for (let f = 3; f < r2.length; f += 4)
    n2[f] = r2[f];
  return n2;
}
function b(r2, e2, o$12, t2, a$1, c$1) {
  if (!e2)
    return;
  const i2 = o$12.count, y = O$1(a$1);
  if (S(a$1))
    for (let s2 = 0; s2 < i2; s2++)
      t2.getVec(s2, U), e2.getVec(s2, w), Zn(y, U, W, y), a(x, W), r2 === Y.FROM_PCPF && o(x, x), S$1(w, w, x), c$1.setVec(s2, w);
  else
    for (let u2 = 0; u2 < i2; u2++) {
      t2.getVec(u2, U), e2.getVec(u2, w), Zn(y, U, W, y), a(x, W);
      const a$12 = c(o$12.get(u2, 1));
      let i3 = Math.cos(a$12);
      r2 === Y.TO_PCPF && (i3 = 1 / i3), x[0] *= i3, x[1] *= i3, x[2] *= i3, x[3] *= i3, x[4] *= i3, x[5] *= i3, r2 === Y.FROM_PCPF && o(x, x), S$1(w, w, x), z(w, w), c$1.setVec(u2, w);
    }
  return c$1;
}
function B(r2) {
  return S(r2) || N(r2);
}
function S(r2) {
  return r2.isWGS84 || u(r2) || P(r2) || s$1(r2);
}
function N(r2) {
  return r2.isWebMercator;
}
var Y;
!function(r2) {
  r2[r2.TO_PCPF = 0] = "TO_PCPF", r2[r2.FROM_PCPF = 1] = "FROM_PCPF";
}(Y || (Y = {}));
const U = n(), w = n(), W = e(), x = e$1();
export { L, M, O, R, V, h, j, k, v };
