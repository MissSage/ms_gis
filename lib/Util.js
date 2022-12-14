import { b5 as n } from "./index.js";
class o {
  constructor(t) {
    this.message = t;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
}
function e(t, n2) {
  if (!t)
    throw n2 = n2 || "assert", console.log(new Error(n2).stack), new o(n2);
}
function s(t, n2) {
  t || (n2 = n2 || "", console.warn("Verify failed: " + n2 + "\n" + new Error("verify").stack));
}
function c(t, n2, r, a) {
  let o2, e2 = (r[0] - t[0]) / n2[0], s2 = (a[0] - t[0]) / n2[0];
  e2 > s2 && (o2 = e2, e2 = s2, s2 = o2);
  let c2 = (r[1] - t[1]) / n2[1], u2 = (a[1] - t[1]) / n2[1];
  if (c2 > u2 && (o2 = c2, c2 = u2, u2 = o2), e2 > u2 || c2 > s2)
    return false;
  c2 > e2 && (e2 = c2), u2 < s2 && (s2 = u2);
  let i = (r[2] - t[2]) / n2[2], f2 = (a[2] - t[2]) / n2[2];
  return i > f2 && (o2 = i, i = f2, f2 = o2), !(e2 > f2 || i > s2) && (f2 < s2 && (s2 = f2), !(s2 < 0));
}
function u(n$1, r, a, o2, e2, s2 = n()) {
  const c2 = (o2[e2] - a[e2]) * (r[0] - n$1[0]) - (o2[0] - a[0]) * (r[e2] - n$1[e2]), u2 = (o2[0] - a[0]) * (n$1[e2] - a[e2]) - (o2[e2] - a[e2]) * (n$1[0] - a[0]);
  if (c2 === 0)
    return false;
  const i = u2 / c2;
  return s2[0] = n$1[0] + i * (r[0] - n$1[0]), s2[1] = n$1[e2] + i * (r[e2] - n$1[e2]), true;
}
function f(t, n2) {
  return Math.log(t) / Math.log(n2);
}
function h(t, n2, r, a) {
  t[12] = n2, t[13] = r, t[14] = a;
}
function M(t) {
  return t[0] === 1 && t[1] === 0 && t[2] === 0 && t[3] === 0 && t[4] === 0 && t[5] === 1 && t[6] === 0 && t[7] === 0 && t[8] === 0 && t[9] === 0 && t[10] === 1 && t[11] === 0 && t[15] === 1;
}
function l(t, n2, r) {
  return 2 * Math.atan(Math.sqrt(n2 * n2 + r * r) * Math.tan(0.5 * t) / n2);
}
function m(t, n2, r) {
  return 2 * Math.atan(Math.sqrt(n2 * n2 + r * r) * Math.tan(0.5 * t) / r);
}
function g(t, n2, r) {
  return 2 * Math.atan(n2 * Math.tan(0.5 * t) / Math.sqrt(n2 * n2 + r * r));
}
function k(t, n2, r) {
  return 2 * Math.atan(r * Math.tan(0.5 * t) / Math.sqrt(n2 * n2 + r * r));
}
export { M, c, e, f, g, h, k, l, m, s, u };
