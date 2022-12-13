var __defProp = Object.defineProperty;
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
import { dr as f, fO as S, cO as x, hV as p } from "./index.js";
async function n(n2, s2, m) {
  const p2 = f(n2);
  return S(p2, x.from(s2), __spreadValues({}, m)).then((o) => o.data.count);
}
async function s(s2, e, m) {
  const n2 = f(s2);
  return p(n2, x.from(e), __spreadValues({}, m)).then((o) => o.data.objectIds);
}
export { n, s };
