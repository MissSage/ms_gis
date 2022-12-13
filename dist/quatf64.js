function e() {
  return [0, 0, 0, 1];
}
function r(e2) {
  return [e2[0], e2[1], e2[2], e2[3]];
}
function t(e2, r2, t2, n2) {
  return [e2, r2, t2, n2];
}
function n(e2, r2) {
  return new Float64Array(e2, r2, 4);
}
const o = e();
Object.freeze(Object.defineProperty({ __proto__: null, create: e, clone: r, fromValues: t, createView: n, IDENTITY: o }, Symbol.toStringTag, { value: "Module" }));
export { e, n, o, r };
