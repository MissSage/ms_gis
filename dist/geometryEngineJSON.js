import { G as s$1 } from "./geometryEngineBase.js";
import { t as t$1 } from "./json.js";
function t(n) {
  return s$1.extendedSpatialReferenceInfo(n);
}
function r(t2, r2, i2) {
  return s$1.clip(t$1, t2, r2, i2);
}
function i(t2, r2, i2) {
  return s$1.cut(t$1, t2, r2, i2);
}
function a(t2, r2, i2) {
  return s$1.contains(t$1, t2, r2, i2);
}
function o(t2, r2, i2) {
  return s$1.crosses(t$1, t2, r2, i2);
}
function s(t2, r2, i2, a2) {
  return s$1.distance(t$1, t2, r2, i2, a2);
}
function u(t2, r2, i2) {
  return s$1.equals(t$1, t2, r2, i2);
}
function c(t2, r2, i2) {
  return s$1.intersects(t$1, t2, r2, i2);
}
function f(t2, r2, i2) {
  return s$1.touches(t$1, t2, r2, i2);
}
function l(t2, r2, i2) {
  return s$1.within(t$1, t2, r2, i2);
}
function p(t2, r2, i2) {
  return s$1.disjoint(t$1, t2, r2, i2);
}
function g(t2, r2, i2) {
  return s$1.overlaps(t$1, t2, r2, i2);
}
function d(t2, r2, i2, a2) {
  return s$1.relate(t$1, t2, r2, i2, a2);
}
function m(t2, r2) {
  return s$1.isSimple(t$1, t2, r2);
}
function h(t2, r2) {
  return s$1.simplify(t$1, t2, r2);
}
function y(t2, r2, i2 = false) {
  return s$1.convexHull(t$1, t2, r2, i2);
}
function x(t2, r2, i2) {
  return s$1.difference(t$1, t2, r2, i2);
}
function S(t2, r2, i2) {
  return s$1.symmetricDifference(t$1, t2, r2, i2);
}
function w(t2, r2, i2) {
  return s$1.intersect(t$1, t2, r2, i2);
}
function A(t2, r2, i2 = null) {
  return s$1.union(t$1, t2, r2, i2);
}
function D(t2, r2, i2, a2, o2, s2, u2) {
  return s$1.offset(t$1, t2, r2, i2, a2, o2, s2, u2);
}
function R(t2, r2, i2, a2, o2 = false) {
  return s$1.buffer(t$1, t2, r2, i2, a2, o2);
}
function j(t2, r2, i2, a2, o2, s2, u2) {
  return s$1.geodesicBuffer(t$1, t2, r2, i2, a2, o2, s2, u2);
}
function E(t2, r2, i2, a2 = true) {
  return s$1.nearestCoordinate(t$1, t2, r2, i2, a2);
}
function L(t2, r2, i2) {
  return s$1.nearestVertex(t$1, t2, r2, i2);
}
function T(t2, r2, i2, a2, o2) {
  return s$1.nearestVertices(t$1, t2, r2, i2, a2, o2);
}
function b(n, t2, r2, i2) {
  if (t2 == null || i2 == null)
    throw new Error("Illegal Argument Exception");
  const a2 = s$1.rotate(t2, r2, i2);
  return a2.spatialReference = n, a2;
}
function v(n, t2, r2) {
  if (t2 == null || r2 == null)
    throw new Error("Illegal Argument Exception");
  const i2 = s$1.flipHorizontal(t2, r2);
  return i2.spatialReference = n, i2;
}
function z(n, t2, r2) {
  if (t2 == null || r2 == null)
    throw new Error("Illegal Argument Exception");
  const i2 = s$1.flipVertical(t2, r2);
  return i2.spatialReference = n, i2;
}
function I(t2, r2, i2, a2, o2) {
  return s$1.generalize(t$1, t2, r2, i2, a2, o2);
}
function V(t2, r2, i2, a2) {
  return s$1.densify(t$1, t2, r2, i2, a2);
}
function H(t2, r2, i2, a2, o2 = 0) {
  return s$1.geodesicDensify(t$1, t2, r2, i2, a2, o2);
}
function B(t2, r2, i2) {
  return s$1.planarArea(t$1, t2, r2, i2);
}
function _(t2, r2, i2) {
  return s$1.planarLength(t$1, t2, r2, i2);
}
function q(t2, r2, i2, a2) {
  return s$1.geodesicArea(t$1, t2, r2, i2, a2);
}
function C(t2, r2, i2, a2) {
  return s$1.geodesicLength(t$1, t2, r2, i2, a2);
}
function P(t2, r2, i2) {
  return r2 == null || i2 == null ? [] : s$1.intersectLinesToPoints(t$1, t2, r2, i2);
}
function G(n, t2) {
  s$1.changeDefaultSpatialReferenceTolerance(n, t2);
}
function M(n) {
  s$1.clearDefaultSpatialReferenceTolerance(n);
}
const O = Object.freeze(Object.defineProperty({ __proto__: null, extendedSpatialReferenceInfo: t, clip: r, cut: i, contains: a, crosses: o, distance: s, equals: u, intersects: c, touches: f, within: l, disjoint: p, overlaps: g, relate: d, isSimple: m, simplify: h, convexHull: y, difference: x, symmetricDifference: S, intersect: w, union: A, offset: D, buffer: R, geodesicBuffer: j, nearestCoordinate: E, nearestVertex: L, nearestVertices: T, rotate: b, flipHorizontal: v, flipVertical: z, generalize: I, densify: V, geodesicDensify: H, planarArea: B, planarLength: _, geodesicArea: q, geodesicLength: C, intersectLinesToPoints: P, changeDefaultSpatialReferenceTolerance: G, clearDefaultSpatialReferenceTolerance: M }, Symbol.toStringTag, { value: "Module" }));
export { A, B, C, D, E, G, H, I, L, M, O, P, R, S, T, V, _, a, b, c, d, f, g, h, i, j, l, m, o, p, q, r, s, t, u, v, w, x, y, z };
