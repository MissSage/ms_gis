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
import { a2 as t, ea as s, s as s$1, i5 as q, i6 as C, i7 as B, i8 as v } from "./index.js";
function i(e, o, n, a, s$12) {
  if (t(e))
    return null;
  const i2 = e.referencesGeometry() && s$12 ? c(o, a, s$12) : o, u2 = e.repurposeFeature(i2);
  try {
    return e.evaluate(__spreadProps(__spreadValues({}, n), { $feature: u2 }));
  } catch (m2) {
    return s.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", m2), null;
  }
}
const u = new Map();
function c(e, r, t2) {
  const { transform: o, hasZ: n, hasM: a } = t2;
  u.has(r) || u.set(r, m(r));
  const s2 = u.get(r)(e.geometry, o, n, a);
  return __spreadProps(__spreadValues({}, e), { geometry: s2 });
}
function m(t2) {
  const i2 = {};
  switch (t2) {
    case "esriGeometryPoint":
      return (e, r, t3, o) => v(r, i2, e, t3, o);
    case "esriGeometryPolygon":
      return (e, r, t3, o) => B(r, i2, e, t3, o);
    case "esriGeometryPolyline":
      return (e, r, t3, o) => C(r, i2, e, t3, o);
    case "esriGeometryMultipoint":
      return (e, r, t3, n) => q(r, i2, e, t3, n);
    default:
      return s.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s$1("mapview-arcade", `Unable to handle geometryType: ${t2}`)), (e) => e;
  }
}
export { i };
