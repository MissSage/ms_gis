function n() {
  return new Float32Array(4);
}
function t(n2) {
  const t2 = new Float32Array(4);
  return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2[3] = n2[3], t2;
}
function r(n2, t2, r2, e2) {
  const a2 = new Float32Array(4);
  return a2[0] = n2, a2[1] = t2, a2[2] = r2, a2[3] = e2, a2;
}
function e(n2, t2) {
  return new Float32Array(n2, t2, 4);
}
function a() {
  return n();
}
function o() {
  return r(1, 1, 1, 1);
}
function u() {
  return r(1, 0, 0, 0);
}
function s() {
  return r(0, 1, 0, 0);
}
function c() {
  return r(0, 0, 1, 0);
}
function i() {
  return r(0, 0, 0, 1);
}
const f = a(), l = o(), _ = u(), y = s(), w = c(), N = i();
Object.freeze(Object.defineProperty({ __proto__: null, create: n, clone: t, fromValues: r, createView: e, zeros: a, ones: o, unitX: u, unitY: s, unitZ: c, unitW: i, ZEROS: f, ONES: l, UNIT_X: _, UNIT_Y: y, UNIT_Z: w, UNIT_W: N }, Symbol.toStringTag, { value: "Module" }));
export { r, t };
