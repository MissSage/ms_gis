import { e as e$1 } from "./mat3f64.js";
import { e } from "./quatf64.js";
import { fp as a, fq as a$1, f1 as r, fr as s, fs as l, ft as y$1, fu as j, fv as x$1, fw as q, fx as v$1, fy as D$1, fz as E$1, eV as P, eW as _$1, fA as Y$1, e_ as z$1, E as n, ab as r$1, fB as n$1 } from "./index.js";
function b(t) {
  return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
}
function v(t, s2, a2) {
  a2 *= 0.5;
  const n2 = Math.sin(a2);
  return t[0] = n2 * s2[0], t[1] = n2 * s2[1], t[2] = n2 * s2[2], t[3] = Math.cos(a2), t;
}
function x(t, s2) {
  const a$12 = 2 * Math.acos(s2[3]), n2 = Math.sin(a$12 / 2);
  return n2 > a() ? (t[0] = s2[0] / n2, t[1] = s2[1] / n2, t[2] = s2[2] / n2) : (t[0] = 1, t[1] = 0, t[2] = 0), a$12;
}
function y(t, s2, a2) {
  const n2 = s2[0], o = s2[1], r2 = s2[2], e2 = s2[3], c = a2[0], u = a2[1], i = a2[2], h = a2[3];
  return t[0] = n2 * h + e2 * c + o * i - r2 * u, t[1] = o * h + e2 * u + r2 * c - n2 * i, t[2] = r2 * h + e2 * i + n2 * u - o * c, t[3] = e2 * h - n2 * c - o * u - r2 * i, t;
}
function A(t, s2, a2) {
  a2 *= 0.5;
  const n2 = s2[0], o = s2[1], r2 = s2[2], e2 = s2[3], c = Math.sin(a2), u = Math.cos(a2);
  return t[0] = n2 * u + e2 * c, t[1] = o * u + r2 * c, t[2] = r2 * u - o * c, t[3] = e2 * u - n2 * c, t;
}
function I(t, s2, a2) {
  a2 *= 0.5;
  const n2 = s2[0], o = s2[1], r2 = s2[2], e2 = s2[3], c = Math.sin(a2), u = Math.cos(a2);
  return t[0] = n2 * u - r2 * c, t[1] = o * u + e2 * c, t[2] = r2 * u + n2 * c, t[3] = e2 * u - o * c, t;
}
function _(t, s2, a2) {
  a2 *= 0.5;
  const n2 = s2[0], o = s2[1], r2 = s2[2], e2 = s2[3], c = Math.sin(a2), u = Math.cos(a2);
  return t[0] = n2 * u + o * c, t[1] = o * u - n2 * c, t[2] = r2 * u + e2 * c, t[3] = e2 * u - r2 * c, t;
}
function z(t, s2) {
  const a2 = s2[0], n2 = s2[1], o = s2[2];
  return t[0] = a2, t[1] = n2, t[2] = o, t[3] = Math.sqrt(Math.abs(1 - a2 * a2 - n2 * n2 - o * o)), t;
}
function E(t, s2, a$12, n2) {
  const r2 = s2[0], e2 = s2[1], c = s2[2], u = s2[3];
  let i, h, M, f, l2, m = a$12[0], p = a$12[1], q2 = a$12[2], g = a$12[3];
  return h = r2 * m + e2 * p + c * q2 + u * g, h < 0 && (h = -h, m = -m, p = -p, q2 = -q2, g = -g), 1 - h > a() ? (i = Math.acos(h), M = Math.sin(i), f = Math.sin((1 - n2) * i) / M, l2 = Math.sin(n2 * i) / M) : (f = 1 - n2, l2 = n2), t[0] = f * r2 + l2 * m, t[1] = f * e2 + l2 * p, t[2] = f * c + l2 * q2, t[3] = f * u + l2 * g, t;
}
function L(t) {
  const s2 = n$1, a2 = s2(), n2 = s2(), o = s2(), e2 = Math.sqrt(1 - a2), c = Math.sqrt(a2);
  return t[0] = e2 * Math.sin(2 * Math.PI * n2), t[1] = e2 * Math.cos(2 * Math.PI * n2), t[2] = c * Math.sin(2 * Math.PI * o), t[3] = c * Math.cos(2 * Math.PI * o), t;
}
function O(t, s2) {
  const a2 = s2[0], n2 = s2[1], o = s2[2], r2 = s2[3], e2 = a2 * a2 + n2 * n2 + o * o + r2 * r2, c = e2 ? 1 / e2 : 0;
  return t[0] = -a2 * c, t[1] = -n2 * c, t[2] = -o * c, t[3] = r2 * c, t;
}
function S(t, s2) {
  return t[0] = -s2[0], t[1] = -s2[1], t[2] = -s2[2], t[3] = s2[3], t;
}
function T(t, s2) {
  const a2 = s2[0] + s2[4] + s2[8];
  let n2;
  if (a2 > 0)
    n2 = Math.sqrt(a2 + 1), t[3] = 0.5 * n2, n2 = 0.5 / n2, t[0] = (s2[5] - s2[7]) * n2, t[1] = (s2[6] - s2[2]) * n2, t[2] = (s2[1] - s2[3]) * n2;
  else {
    let a3 = 0;
    s2[4] > s2[0] && (a3 = 1), s2[8] > s2[3 * a3 + a3] && (a3 = 2);
    const o = (a3 + 1) % 3, r2 = (a3 + 2) % 3;
    n2 = Math.sqrt(s2[3 * a3 + a3] - s2[3 * o + o] - s2[3 * r2 + r2] + 1), t[a3] = 0.5 * n2, n2 = 0.5 / n2, t[3] = (s2[3 * o + r2] - s2[3 * r2 + o]) * n2, t[o] = (s2[3 * o + a3] + s2[3 * a3 + o]) * n2, t[r2] = (s2[3 * r2 + a3] + s2[3 * a3 + r2]) * n2;
  }
  return t;
}
function k(t, s2, a2, n2) {
  const o = 0.5 * Math.PI / 180;
  s2 *= o, a2 *= o, n2 *= o;
  const r2 = Math.sin(s2), e2 = Math.cos(s2), c = Math.sin(a2), u = Math.cos(a2), i = Math.sin(n2), h = Math.cos(n2);
  return t[0] = r2 * u * h - e2 * c * i, t[1] = e2 * c * h + r2 * u * i, t[2] = e2 * u * i - r2 * c * h, t[3] = e2 * u * h + r2 * c * i, t;
}
function w(t) {
  return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
}
const B = a$1, C = r, D = s, F = y, G = l, R = y$1, W = j, X = x$1, Y = X, Z = q, H = Z, J = v$1, K = D$1, N = E$1;
function Q(t, s2, a2) {
  const n2 = P(s2, a2);
  return n2 < -0.999999 ? (_$1(U, V, s2), Y$1(U) < 1e-6 && _$1(U, $, s2), z$1(U, U), v(t, U, Math.PI), t) : n2 > 0.999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (_$1(U, s2, a2), t[0] = U[0], t[1] = U[1], t[2] = U[2], t[3] = 1 + n2, J(t, t));
}
const U = n(), V = r$1(1, 0, 0), $ = r$1(0, 1, 0);
function tt(t, s2, a2, n2, o, r2) {
  return E(st, s2, o, r2), E(at, a2, n2, r2), E(t, st, at, 2 * r2 * (1 - r2)), t;
}
const st = e(), at = e();
function nt(t, s2, a2, n2) {
  const o = ot;
  return o[0] = a2[0], o[3] = a2[1], o[6] = a2[2], o[1] = n2[0], o[4] = n2[1], o[7] = n2[2], o[2] = -s2[0], o[5] = -s2[1], o[8] = -s2[2], J(t, T(t, o));
}
const ot = e$1();
Object.freeze(Object.defineProperty({ __proto__: null, identity: b, setAxisAngle: v, getAxisAngle: x, multiply: y, rotateX: A, rotateY: I, rotateZ: _, calculateW: z, slerp: E, random: L, invert: O, conjugate: S, fromMat3: T, fromEuler: k, str: w, copy: B, set: C, add: D, mul: F, scale: G, dot: R, lerp: W, length: X, len: Y, squaredLength: Z, sqrLen: H, normalize: J, exactEquals: K, equals: N, rotationTo: Q, sqlerp: tt, setAxes: nt }, Symbol.toStringTag, { value: "Module" }));
export { K, S, k, v, x, y };
