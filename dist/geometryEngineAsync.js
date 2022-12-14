import { cH as u$1, c0 as v$1 } from "./index.js";
function r(n) {
  var _a;
  return Array.isArray(n) ? (_a = n[0]) == null ? void 0 : _a.spatialReference : n == null ? void 0 : n.spatialReference;
}
function a(n) {
  return n ? Array.isArray(n) ? n.map(a) : n.toJSON ? n.toJSON() : n : n;
}
function i(n) {
  return Array.isArray(n) ? n.map((n2) => v$1(n2)) : v$1(n);
}
function o(n, t) {
  let e;
  return Array.isArray(n) ? e = n : (e = [], e.push(n), t != null && e.push(t)), e;
}
let c;
async function u() {
  return c || (c = u$1("geometryEngineWorker", { strategy: "distributed" })), c;
}
async function s(n, t) {
  return (await u()).invoke("executeGEOperation", { operation: n, parameters: a(t) });
}
async function y(n, t) {
  return i(await s("clip", [r(n), n, t]));
}
async function w(n, t) {
  return i(await s("cut", [r(n), n, t]));
}
function p(n, t) {
  return s("contains", [r(n), n, t]);
}
function m(n, t) {
  return s("crosses", [r(n), n, t]);
}
function d(n, t, e) {
  return s("distance", [r(n), n, t, e]);
}
function g(n, t) {
  return s("equals", [r(n), n, t]);
}
function h(n, t) {
  return s("intersects", [r(n), n, t]);
}
function S(n, t) {
  return s("touches", [r(n), n, t]);
}
function x(n, t) {
  return s("within", [r(n), n, t]);
}
function A(n, t) {
  return s("disjoint", [r(n), n, t]);
}
function O(n, t) {
  return s("overlaps", [r(n), n, t]);
}
function R(n, t, e) {
  return s("relate", [r(n), n, t, e]);
}
function J(n) {
  return s("isSimple", [r(n), n]);
}
async function N(n) {
  return i(await s("simplify", [r(n), n]));
}
async function j(n, t = false) {
  return i(await s("convexHull", [r(n), n, t]));
}
async function E(n, t) {
  return i(await s("difference", [r(n), n, t]));
}
async function k(n, t) {
  return i(await s("symmetricDifference", [r(n), n, t]));
}
async function D(n, t) {
  return i(await s("intersect", [r(n), n, t]));
}
async function b(n, t = null) {
  const e = o(n, t);
  return i(await s("union", [r(e), e]));
}
async function v(n, t, e, a2, o2, c2) {
  return i(await s("offset", [r(n), n, t, e, a2, o2, c2]));
}
async function L(n, t, e, a2 = false) {
  const o2 = [r(n), n, t, e, a2];
  return i(await s("buffer", o2));
}
async function P(n, t, e, a2, o2, c2) {
  const u2 = [r(n), n, t, e, a2, o2, c2];
  return i(await s("geodesicBuffer", u2));
}
function G(n) {
  var _a;
  return "xmin" in n ? n.center : "x" in n ? n : (_a = n.extent) == null ? void 0 : _a.center;
}
async function H(n, t, e) {
  if (n == null)
    throw new Z();
  const r2 = n.spatialReference;
  if ((e = e != null ? e : G(n)) == null)
    throw new Z();
  const a2 = n.constructor.fromJSON(await s("rotate", [r2, n, t, e]));
  return a2.spatialReference = r2, a2;
}
async function B(n, t, e, a2) {
  return i(await s("generalize", [r(n), n, t, e, a2]));
}
async function C(n, t, e) {
  return i(await s("densify", [r(n), n, t, e]));
}
async function U(n, t, e, a2 = 0) {
  return i(await s("geodesicDensify", [r(n), n, t, e, a2]));
}
function W(n, t) {
  return s("planarArea", [r(n), n, t]);
}
function F(n, t) {
  return s("planarLength", [r(n), n, t]);
}
function K(n, t, e) {
  return s("geodesicArea", [r(n), n, t, e]);
}
function M(n, t, e) {
  return s("geodesicLength", [r(n), n, t, e]);
}
class Z extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export { A, B, C, D, E, F, H, J, K, L, M, N, O, P, R, S, U, W, b, d, g, h, j, k, m, p, v, w, x, y };
