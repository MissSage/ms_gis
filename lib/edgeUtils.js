var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { bY as r, C as r$1, a2 as t$1, c9 as e$1, bj as l, fK as u$1 } from "./index.js";
var A;
!function(A2) {
  A2[A2.INVISIBLE = 0] = "INVISIBLE", A2[A2.TRANSPARENT = 1] = "TRANSPARENT", A2[A2.OPAQUE = 2] = "OPAQUE";
}(A || (A = {}));
function t(t2) {
  return t2.type === "fill";
}
function e(t2) {
  return t2.type === "extrude";
}
function a(e$12) {
  return e$12 && e$12.enabled && (e(e$12) || t(e$12)) && r$1(e$12.edges);
}
function u(e2) {
  return e2 && e2.enabled && e2.edges || null;
}
function f(e2, n) {
  return p(u(e2), n);
}
function p(i, c) {
  if (t$1(i))
    return null;
  const l$1 = r$1(i.color) ? e$1(l.toUnitRGBA(i.color)) : r(0, 0, 0, 0), a2 = u$1(i.size), u2 = u$1(i.extensionLength);
  switch (i.type) {
    case "solid":
      return m(__spreadValues({ color: l$1, size: a2, extensionLength: u2 }, c));
    case "sketch":
      return h(__spreadValues({ color: l$1, size: a2, extensionLength: u2 }, c));
    default:
      return;
  }
}
function m(e2) {
  return __spreadProps(__spreadValues(__spreadValues({}, g), e2), { type: "solid" });
}
function h(e2) {
  return __spreadProps(__spreadValues(__spreadValues({}, d), e2), { type: "sketch" });
}
const g = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: A.OPAQUE, hasSlicePlane: false }, d = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: A.OPAQUE, hasSlicePlane: false };
export { A, a, f, m };
