function n() {
  return new Float32Array(3);
}
function t(n2) {
  const t2 = new Float32Array(3);
  return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2;
}
function r(n2, t2, r2) {
  const e2 = new Float32Array(3);
  return e2[0] = n2, e2[1] = t2, e2[2] = r2, e2;
}
function e(n2, t2) {
  return new Float32Array(n2, t2, 3);
}
function a() {
  return n();
}
function o() {
  return r(1, 1, 1);
}
function u() {
  return r(1, 0, 0);
}
function s() {
  return r(0, 1, 0);
}
function c() {
  return r(0, 0, 1);
}
const i = a(), f = o(), l = u(), _ = s(), y = c();
Object.freeze(Object.defineProperty({ __proto__: null, create: n, clone: t, fromValues: r, createView: e, zeros: a, ones: o, unitX: u, unitY: s, unitZ: c, ZEROS: i, ONES: f, UNIT_X: l, UNIT_Y: _, UNIT_Z: y }, Symbol.toStringTag, { value: "Module" }));
export { n, r, t };
