var __defProp = Object.defineProperty;
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
import { ev as l$1, ew as o$1, ex as S, aX as y, h as has } from "./index.js";
import { t } from "./QueryEngineCapabilities.js";
function o(t2) {
  return { renderer: { type: "simple", symbol: t2 === "esriGeometryPoint" || t2 === "esriGeometryMultipoint" ? l$1 : t2 === "esriGeometryPolyline" ? o$1 : S } };
}
const u = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
let n = 1;
function i(t2, s) {
  if (has("esri-csp-restrictions"))
    return () => __spreadValues({ [s]: null }, t2);
  try {
    let e = `this.${s} = null;`;
    for (const s2 in t2) {
      e += `this${u.test(s2) ? `.${s2}` : `["${s2}"]`} = ${JSON.stringify(t2[s2])};`;
    }
    const r = new Function(`
      return class AttributesClass$${n++} {
        constructor() {
          ${e};
        }
      }
    `)();
    return () => new r();
  } catch (e) {
    return () => __spreadValues({ [s]: null }, t2);
  }
}
function a(s = {}) {
  return [{ name: "New Feature", description: "", prototype: { attributes: y(s) } }];
}
function l(t$1, e) {
  return { analytics: { supportsCacheHint: false }, attachment: null, data: { isVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: t$1 }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: e, supportsDelete: e, supportsEditing: e, supportsChangeTracking: false, supportsQuery: true, supportsQueryAnalytics: false, supportsQueryAttachments: false, supportsQueryTopFeatures: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: e, supportsExceedsLimitStatistics: true }, query: t, queryRelated: { supportsCount: true, supportsOrderBy: true, supportsPagination: true, supportsCacheHint: false }, queryTopFeatures: { supportsCacheHint: false }, editing: { supportsGeometryUpdate: e, supportsGlobalId: false, supportsReturnServiceEditsInSourceSpatialReference: false, supportsRollbackOnFailure: false, supportsUpdateWithoutM: false, supportsUploadWithItemId: false, supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false } };
}
export { a, i, l, o };
