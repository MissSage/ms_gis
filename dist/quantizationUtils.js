import { aP as s$1, aM as f, at as y$1, aQ as l, aN as u, a as r, t } from "./index.js";
const a = (n, t2, e) => [t2, e], m = (n, t2, e) => [t2, e, n[2]], c = (n, t2, e) => [t2, e, n[2], n[3]];
function s(t2) {
  if (!t2)
    return null;
  return { originPosition: t2.originPosition === "upper-left" ? "upperLeft" : t2.originPosition === "lower-left" ? "lowerLeft" : t2.originPosition, scale: t2.tolerance ? [t2.tolerance, t2.tolerance] : [1, 1], translate: r(t2.extent) ? [t2.extent.xmin, t2.extent.ymax] : [0, 0] };
}
function x({ scale: n, translate: t2 }, e) {
  return Math.round((e - t2[0]) / n[0]);
}
function h({ scale: n, translate: t2 }, e) {
  return Math.round((t2[1] - e) / n[1]);
}
function I(n, t2, e) {
  const r2 = [];
  let u2, i, o, l2;
  for (let a2 = 0; a2 < e.length; a2++) {
    const m2 = e[a2];
    a2 > 0 ? (o = x(n, m2[0]), l2 = h(n, m2[1]), o === u2 && l2 === i || (r2.push(t2(m2, o - u2, l2 - i)), u2 = o, i = l2)) : (u2 = x(n, m2[0]), i = h(n, m2[1]), r2.push(t2(m2, u2, i)));
  }
  return r2.length > 0 ? r2 : null;
}
function p(n, t2, e, r2) {
  return I(n, e ? r2 ? c : m : r2 ? m : a, t2);
}
function N(n, t2, e, r2) {
  const u2 = [], i = e ? r2 ? c : m : r2 ? m : a;
  for (let o = 0; o < t2.length; o++) {
    const e2 = I(n, i, t2[o]);
    e2 && e2.length >= 3 && u2.push(e2);
  }
  return u2.length ? u2 : null;
}
function y(n, t2, e, r2) {
  const u2 = [], i = e ? r2 ? c : m : r2 ? m : a;
  for (let o = 0; o < t2.length; o++) {
    const e2 = I(n, i, t2[o]);
    e2 && e2.length >= 2 && u2.push(e2);
  }
  return u2.length ? u2 : null;
}
function z({ scale: n, translate: t2 }, e) {
  return e * n[0] + t2[0];
}
function T({ scale: n, translate: t2 }, e) {
  return t2[1] - e * n[1];
}
function M(n, t2, e) {
  const r2 = new Array(e.length);
  if (!e.length)
    return r2;
  const [u2, i] = n.scale;
  let o = z(n, e[0][0]), l2 = T(n, e[0][1]);
  r2[0] = t2(e[0], o, l2);
  for (let a2 = 1; a2 < e.length; a2++) {
    const n2 = e[a2];
    o += n2[0] * u2, l2 -= n2[1] * i, r2[a2] = t2(n2, o, l2);
  }
  return r2;
}
function E(n, t2, e) {
  const r2 = new Array(e.length);
  for (let u2 = 0; u2 < e.length; u2++)
    r2[u2] = M(n, t2, e[u2]);
  return r2;
}
function b(n, t2, e, r2) {
  return M(n, e ? r2 ? c : m : r2 ? m : a, t2);
}
function F(n, t2, e, r2) {
  return E(n, e ? r2 ? c : m : r2 ? m : a, t2);
}
function V(n, t2, e, r2) {
  return E(n, e ? r2 ? c : m : r2 ? m : a, t2);
}
function G(n, t2, e, r2, u2) {
  return t2.xmin = x(n, e.xmin), t2.ymin = h(n, e.ymin), t2.xmax = x(n, e.xmax), t2.ymax = h(n, e.ymax), t2 !== e && (r2 && (t2.zmin = e.zmin, t2.zmax = e.zmax), u2 && (t2.mmin = e.mmin, t2.mmax = e.mmax)), t2;
}
function L(n, t2, e, r2, u2) {
  var _a;
  return t2.points = (_a = p(n, e.points, r2, u2)) != null ? _a : [], t2;
}
function O(n, t2, e, r2, u2) {
  return t2.x = x(n, e.x), t2.y = h(n, e.y), t2 !== e && (r2 && (t2.z = e.z), u2 && (t2.m = e.m)), t2;
}
function S(n, t2, e, r2, u2) {
  const i = N(n, e.rings, r2, u2);
  return i ? (t2.rings = i, t2) : null;
}
function d(n, t2, e, r2, u2) {
  const i = y(n, e.paths, r2, u2);
  return i ? (t2.paths = i, t2) : null;
}
function U(n, t2) {
  return n && t2 ? s$1(t2) ? O(n, {}, t2, false, false) : f(t2) ? d(n, {}, t2, false, false) : y$1(t2) ? S(n, {}, t2, false, false) : l(t2) ? L(n, {}, t2, false, false) : u(t2) ? G(n, {}, t2, false, false) : null : null;
}
function q(t2, e, r$1, u2, i) {
  return r(r$1) && (e.points = b(t2, r$1.points, u2, i)), e;
}
function v(n, e, r2, u2, i) {
  return t(r2) || (e.x = z(n, r2.x), e.y = T(n, r2.y), e !== r2 && (u2 && (e.z = r2.z), i && (e.m = r2.m))), e;
}
function B(t2, e, r$1, u2, i) {
  return r(r$1) && (e.rings = V(t2, r$1.rings, u2, i)), e;
}
function C(t2, e, r$1, u2, i) {
  return r(r$1) && (e.paths = F(t2, r$1.paths, u2, i)), e;
}
export { B, C, O, U, q, s, v };
