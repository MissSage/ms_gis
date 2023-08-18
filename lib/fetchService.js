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
import { U } from "./index.js";
async function r(e, r2) {
  var _a, _b, _c;
  let s = await a(e, r2);
  s = s || {}, s.layers = ((_a = s.layers) == null ? void 0 : _a.filter(t)) || [];
  const n = { serviceJSON: s };
  if (((_b = s.currentVersion) != null ? _b : 0) < 10.5)
    return n;
  const o = await a(e + "/layers", r2);
  return n.layersJSON = { layers: ((_c = o == null ? void 0 : o.layers) == null ? void 0 : _c.filter(t)) || [], tables: (o == null ? void 0 : o.tables) || [] }, n;
}
function t(e) {
  return !e.type || e.type === "Feature Layer";
}
async function a(r2, t2) {
  return (await U(r2, { responseType: "json", query: __spreadProps(__spreadValues({ f: "json" }, t2 == null ? void 0 : t2.customParameters), { token: t2 == null ? void 0 : t2.apiKey }) })).data;
}
export { a, r };
