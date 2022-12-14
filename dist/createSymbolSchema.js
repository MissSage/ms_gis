var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { b as E, S } from "./Utils2.js";
import { A, f, _ } from "./MaterialKey.js";
import "./index.js";
import "vue";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
function l(e) {
  var _a;
  if (e.type === "line-marker") {
    return { type: "line-marker", color: (_a = e.color) == null ? void 0 : _a.toJSON(), placement: e.placement, style: e.style };
  }
  return e.constructor.fromJSON(e.toJSON()).toJSON();
}
function s(e) {
  return A(e);
}
function o(e, a, t = false) {
  if (!e)
    return null;
  switch (e.type) {
    case "simple-fill":
    case "picture-fill":
      return c(e, a, t);
    case "simple-marker":
    case "picture-marker":
      return h(e, a, t);
    case "simple-line":
      return m(e, a, t);
    case "text":
      return y(e, a, t);
    case "label":
      return i(e, a, t);
    case "cim":
      return { type: "cim", rendererKey: a.vvFlags, data: e.data, maxVVSize: a.maxVVSize };
    case "CIMSymbolReference":
      return { type: "cim", rendererKey: a.vvFlags, data: e, maxVVSize: a.maxVVSize };
    case "web-style":
      return __spreadProps(__spreadValues({}, l(e)), { type: "web-style", hash: e.hash(), rendererKey: a.vvFlags, maxVVSize: a.maxVVSize });
    default:
      throw new Error(`symbol not supported ${e.type}`);
  }
}
function i(a, r, n) {
  const l2 = a.toJSON(), o2 = f(E.LABEL, __spreadProps(__spreadValues({}, r), { placement: l2.labelPlacement }));
  return __spreadProps(__spreadValues({ materialKey: n ? s(o2) : o2, hash: a.hash() }, l2), { labelPlacement: l2.labelPlacement });
}
function c(a, n, o2) {
  const i2 = f(E.FILL, n), c2 = o2 ? s(i2) : i2, m2 = a.clone(), h2 = m2.outline, y2 = _(n.symbologyType);
  y2 || (m2.outline = null);
  const u = __spreadValues({ materialKey: c2, hash: m2.hash() }, l(m2));
  if (y2)
    return u;
  const p = [];
  if (p.push(u), h2) {
    const a2 = f(E.LINE, __spreadProps(__spreadValues({}, n), { isOutline: true })), r = __spreadValues({ materialKey: o2 ? s(a2) : a2, hash: h2.hash() }, l(h2));
    p.push(r);
  }
  return { type: "composite-symbol", layers: p, hash: p.reduce((e, a2) => a2.hash + e, "") };
}
function m(n, o2, i2) {
  var _a;
  const c2 = _(o2.symbologyType) ? S.DEFAULT : o2.symbologyType, m2 = f(E.LINE, __spreadProps(__spreadValues({}, o2), { symbologyType: c2 })), h2 = i2 ? s(m2) : m2, y2 = n.clone(), u = y2.marker;
  y2.marker = null;
  const p = [];
  if (p.push(__spreadValues({ materialKey: h2, hash: y2.hash() }, l(y2))), u) {
    const a = f(E.MARKER, o2), r = i2 ? s(a) : a;
    u.color = (_a = u.color) != null ? _a : y2.color, p.push(__spreadValues({ materialKey: r, hash: u.hash(), lineWidth: y2.width }, l(u)));
  }
  return { type: "composite-symbol", layers: p, hash: p.reduce((e, a) => a.hash + e, "") };
}
function h(a, r, n) {
  const o2 = f(E.MARKER, r), i2 = n ? s(o2) : o2, c2 = l(a);
  return __spreadProps(__spreadValues({ materialKey: i2, hash: a.hash() }, c2), { angle: a.angle, maxVVSize: r.maxVVSize });
}
function y(a, r, n) {
  const o2 = f(E.TEXT, r), i2 = n ? s(o2) : o2, c2 = l(a);
  return __spreadProps(__spreadValues({ materialKey: i2, hash: a.hash() }, c2), { angle: a.angle, maxVVSize: r.maxVVSize });
}
export { o as createSymbolSchema };
