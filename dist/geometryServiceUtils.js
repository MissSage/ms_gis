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
import { $ as e, a0 as y, a1 as n$2, co as l, ar as c, hl as b, dr as f, dH as i$2, U, hm as o, y as s, g as s$1, bN as j } from "./index.js";
import "vue";
let i$1 = class extends l {
  constructor(r) {
    super(r), this.geometries = null, this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const r = this.geometries.map((r2) => r2.toJSON()), t = this.geometries[0], o2 = {};
    return o2.outSR = this.outSpatialReference.wkid || JSON.stringify(this.outSpatialReference.toJSON()), o2.inSR = t.spatialReference.wkid || JSON.stringify(t.spatialReference.toJSON()), o2.geometries = JSON.stringify({ geometryType: c(t), geometries: r }), this.transformation && (o2.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (o2.transformForward = this.transformForward), o2;
  }
};
e([y()], i$1.prototype, "geometries", void 0), e([y({ json: { read: { source: "outSR" } } })], i$1.prototype, "outSpatialReference", void 0), e([y()], i$1.prototype, "transformation", void 0), e([y()], i$1.prototype, "transformForward", void 0), i$1 = e([n$2("esri.rest.support.ProjectParameters")], i$1);
const a$1 = i$1;
const i = b(a$1);
async function n$1(o$1, m, n2) {
  m = i(m);
  const u = f(o$1), c$1 = __spreadValues(__spreadProps(__spreadValues({}, u.query), { f: "json" }), m.toJSON()), j2 = m.outSpatialReference, a2 = c(m.geometries[0]), f$1 = i$2(c$1, n2);
  return U(u.path + "/project", f$1).then(({ data: { geometries: r } }) => o(r, a2, j2));
}
async function n(o2 = null, i2) {
  var _a, _b;
  if (s.geometryServiceUrl)
    return s.geometryServiceUrl;
  if (!o2)
    throw new s$1("internal:geometry-service-url-not-configured");
  let n2;
  n2 = "portal" in o2 ? o2.portal || j.getDefault() : o2, await n2.load({ signal: i2 });
  const a2 = (_b = (_a = n2.helperServices) == null ? void 0 : _a.geometry) == null ? void 0 : _b.url;
  if (!a2)
    throw new s$1("internal:geometry-service-url-not-configured");
  return a2;
}
async function a(r, t, a2 = null, l2) {
  const c2 = await n(a2, l2), s2 = new a$1();
  s2.geometries = [r], s2.outSpatialReference = t;
  const m = await n$1(c2, s2, { signal: l2 });
  if (m && Array.isArray(m) && m.length === 1)
    return m[0];
  throw new s$1("internal:geometry-service-projection-failed");
}
export { n as getGeometryServiceURL, a as projectGeometry };
