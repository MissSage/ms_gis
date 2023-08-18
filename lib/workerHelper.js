var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { y, u, i, c, l, p, o, m, T, h, a, b, d, A, O as O$1, x, g, w, E, L, B, F as F$1, I, U, j, V, M, S, k, q, v, z as z$1, C, D as D$1, G as G$1, H as H$1 } from "./BufferView.js";
import { T as T$1 } from "./InterleavedLayout.js";
function z(e, t) {
  return t.push(e.buffer), { buffer: e.buffer, layout: F(e.layout) };
}
function D(e) {
  return G(e.layout).createView(e.buffer);
}
function F(e) {
  const t = new Array();
  return e.fields.forEach((e2, r) => {
    const o2 = __spreadProps(__spreadValues({}, e2), { constructor: J(e2.constructor) });
    t.push([r, o2]);
  }), { stride: e.stride, fields: t, fieldNames: e.fieldNames };
}
function G(e) {
  const t = T$1();
  return t.stride = e.stride, t.fieldNames = e.fieldNames, e.fields.forEach((e2) => t.fields.set(e2[0], __spreadProps(__spreadValues({}, e2[1]), { constructor: K(e2[1].constructor) }))), t;
}
const H = [y, u, i, c, l, p, o, m, T, h, a, b, d, A, O$1, x, g, w, E, L, B, F$1, I, U, j, V, M, S, k, q, v, z$1, C, D$1, G$1, H$1];
function J(e) {
  return `${e.ElementType}_${e.ElementCount}`;
}
function K(e) {
  return O.get(e);
}
const O = new Map();
H.forEach((e) => O.set(J(e), e));
export { D, z };
