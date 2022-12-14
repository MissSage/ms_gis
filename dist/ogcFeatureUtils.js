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
import { s, t, g as s$1, U, fV as i, c9 as r, aK as k$1, gl as ut, b4 as i$1, a as r$1, b$ as rt, bG as nt, e4 as M$1, ei as c, gm as e } from "./index.js";
import { T as T$1, L, I as I$1 } from "./geojson.js";
import { o } from "./clientSideDefaults.js";
const h = s.getLogger("esri.layers.graphics.sources.ogcfeature"), j = "http://www.opengis.net/def/crs/", F = `${j}OGC/1.3/CRS84`;
async function I(n, r$12, a = {}, o$1 = 5) {
  const { links: s2 } = n, l = D(s2, "items", "application/geo+json") || D(s2, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (t(l))
    throw new s$1("ogc-feature-layer:missing-items-page", "Missing items url");
  const { data: c2 } = await U(l.href, { signal: a.signal, query: __spreadProps(__spreadValues({ limit: o$1 }, a.customParameters), { token: a.apiKey }), headers: { accept: "application/geo+json" } });
  await T$1(c2);
  const d = L(c2, { geometryType: r$12.geometryType }), u = r$12.fields || d.fields || [], f = r$12.hasZ != null ? r$12.hasZ : d.hasZ, b = d.geometryType, j2 = r$12.objectIdField || d.objectIdFieldName || "OBJECTID";
  let F2 = r$12.timeInfo;
  const I2 = u.find(({ name: e2 }) => e2 === j2);
  if (I2)
    I2.editable = false, I2.nullable = false;
  else {
    if (!d.objectIdFieldType)
      throw new s$1("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    u.unshift({ name: j2, alias: j2, type: d.objectIdFieldType === "number" ? "esriFieldTypeOID" : "esriFieldTypeString", editable: false, nullable: false });
  }
  if (j2 !== d.objectIdFieldName) {
    const e2 = u.find(({ name: e3 }) => e3 === d.objectIdFieldName);
    e2 && (e2.type = "esriFieldTypeInteger");
  }
  u === d.fields && d.unknownFields.length > 0 && h.warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: d.unknownFields } });
  for (const e2 of u) {
    if (e2.name == null && (e2.name = e2.alias), e2.alias == null && (e2.alias = e2.name), e2.type !== "esriFieldTypeOID" && e2.type !== "esriFieldTypeGlobalID" && (e2.editable = e2.editable == null || !!e2.editable, e2.nullable = e2.nullable == null || !!e2.nullable), !e2.name)
      throw new s$1("ogc-feature-layer:invalid-field-name", "field name is missing", { field: e2 });
    if (!i.jsonValues.includes(e2.type))
      throw new s$1("ogc-feature-layer:invalid-field-type", `invalid type for field "${e2.name}"`, { field: e2 });
  }
  if (F2) {
    const e2 = new r(u);
    if (F2.startTimeField) {
      const t2 = e2.get(F2.startTimeField);
      t2 ? (F2.startTimeField = t2.name, t2.type = "esriFieldTypeDate") : F2.startTimeField = null;
    }
    if (F2.endTimeField) {
      const t2 = e2.get(F2.endTimeField);
      t2 ? (F2.endTimeField = t2.name, t2.type = "esriFieldTypeDate") : F2.endTimeField = null;
    }
    if (F2.trackIdField) {
      const t2 = e2.get(F2.trackIdField);
      t2 ? F2.trackIdField = t2.name : (F2.trackIdField = null, h.warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: F2 } }));
    }
    F2.startTimeField || F2.endTimeField || (h.warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: F2 } }), F2 = null);
  }
  return { drawingInfo: b ? o(b) : null, extent: W(n), geometryType: b, fields: u, hasZ: !!f, objectIdField: j2, timeInfo: F2 };
}
async function T(n, r2 = {}) {
  const { links: a } = n, o2 = D(a, "data", "application/json") || D(a, "http://www.opengis.net/def/rel/ogc/1.0/data", "application/json");
  if (t(o2))
    throw new s$1("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: s2, customParameters: l, signal: c2 } = r2, { data: d } = await U(o2.href, { signal: c2, headers: { accept: "application/json" }, query: __spreadProps(__spreadValues({}, l), { token: s2 }) });
  return d;
}
async function k(n, r2 = {}) {
  const { links: a } = n, o2 = D(a, "conformance", "application/json") || D(a, "http://www.opengis.net/def/rel/ogc/1.0/conformance", "application/json");
  if (t(o2))
    throw new s$1("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: s2, customParameters: l, signal: c2 } = r2, { data: d } = await U(o2.href, { signal: c2, headers: { accept: "application/json" }, query: __spreadProps(__spreadValues({}, l), { token: s2 }) });
  return d;
}
async function x(t2, n = {}) {
  const { apiKey: i2, customParameters: r2, signal: a } = n, { data: o2 } = await U(t2, { signal: a, headers: { accept: "application/json" }, query: __spreadProps(__spreadValues({}, r2), { token: i2 }) });
  return o2;
}
async function S(t$1, n = {}) {
  const r2 = "application/vnd.oai.openapi+json;version=3.0", a = D(t$1.links, "service-desc", r2);
  if (t(a))
    return h.warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: o2, customParameters: s2, signal: l } = n, { data: c2 } = await U(a.href, { signal: l, headers: { accept: r2 }, query: __spreadProps(__spreadValues({}, s2), { token: o2 }) });
  return c2;
}
function v(e2) {
  var _a;
  const t2 = (_a = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e2)) == null ? void 0 : _a.groups;
  if (!t2)
    return null;
  const { authority: n, code: i2 } = t2;
  switch (n.toLowerCase()) {
    case "ogc":
      switch (i2.toLowerCase()) {
        case "crs27":
          return k$1.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return k$1.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const e3 = Number.parseInt(i2, 10);
      return Number.isNaN(e3) ? null : e3;
    }
    default:
      return null;
  }
}
async function N(e2, t2, n) {
  const i2 = await q(e2, t2, n);
  return ut(i2);
}
async function q(n, l, m) {
  const { collection: p, layerDefinition: g, maxRecordCount: y, queryParameters: { apiKey: w, customParameters: h2 }, spatialReference: j2, supportedCrs: F2 } = n, { links: I2 } = p, T2 = D(I2, "items", "application/geo+json") || D(I2, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (t(T2))
    throw new s$1("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: k2, num: x2, start: S2, timeExtent: v2, where: N2 } = l;
  if (l.objectIds)
    throw new s$1("ogc-feature-layer:query-by-objectids-not-supported", "Queries with objectids are not supported");
  const q2 = k$1.fromJSON(j2), O2 = i$1(l.outSpatialReference, q2), C2 = O2.isWGS84 ? null : R(O2, F2), W2 = G(k2, F2), P = M(v2), Z = $(N2), K = x2 != null ? x2 : S2 != null && S2 !== void 0 ? 10 : y, { data: L2 } = await U(T2.href, __spreadProps(__spreadValues({}, m), { query: __spreadProps(__spreadValues(__spreadValues({}, h2), W2), { crs: C2, datetime: P, query: Z, limit: K, startindex: S2, token: w }), headers: { accept: "application/geo+json" } }));
  let J = false;
  if (L2.links) {
    const e2 = L2.links.find((e3) => e3.rel === "next");
    J = !!e2;
  }
  !J && Number.isInteger(L2.numberMatched) && Number.isInteger(L2.numberReturned) && (J = L2.numberReturned < L2.numberMatched);
  const { fields: z, geometryType: A, hasZ: E, objectIdField: U$1 } = g, _ = I$1(L2, { geometryType: A, hasZ: E, objectIdField: U$1 });
  if (!C2 && O2.isWebMercator) {
    for (const e2 of _)
      if (r$1(e2.geometry)) {
        const t2 = rt(e2.geometry, A, E, false);
        t2.spatialReference = k$1.WGS84, e2.geometry = nt(M$1(t2, O2));
      }
  }
  for (const e2 of _)
    e2.objectId = e2.attributes[U$1];
  const B = C2 || !C2 && O2.isWebMercator ? O2.toJSON() : c, Q = new e();
  return Q.exceededTransferLimit = J, Q.features = _, Q.fields = z, Q.geometryType = A, Q.hasZ = E, Q.objectIdFieldName = U$1, Q.spatialReference = B, Q;
}
function O(e2) {
  return r$1(e2) && e2.type === "extent";
}
function R(e2, t2) {
  var _a, _b, _c;
  const { isWebMercator: n, wkid: i2 } = e2;
  if (!i2)
    return null;
  const r2 = n ? (_c = (_b = (_a = t2[3857]) != null ? _a : t2[102100]) != null ? _b : t2[102113]) != null ? _c : t2[900913] : t2[e2.wkid];
  return r2 ? `${j}${r2}` : null;
}
function C(e2) {
  if (t(e2))
    return "";
  const { xmin: t$1, ymin: n, xmax: r2, ymax: a } = e2;
  return `${t$1},${n},${r2},${a}`;
}
function M(e2) {
  if (t(e2))
    return null;
  const { start: t$1, end: n } = e2;
  return `${r$1(t$1) ? t$1.toISOString() : ".."}/${r$1(n) ? n.toISOString() : ".."}`;
}
function $(e2) {
  return t(e2) || !e2 || e2 === "1=1" ? null : e2;
}
function G(e2, t2) {
  if (!O(e2))
    return null;
  const { spatialReference: n } = e2;
  if (!n || n.isWGS84)
    return { bbox: C(e2) };
  const i2 = R(n, t2);
  return r$1(i2) ? { bbox: C(e2), "bbox-crs": i2 } : n.isWebMercator ? { bbox: C(M$1(e2, k$1.WGS84)) } : null;
}
function W(e2) {
  var _a;
  const t2 = (_a = e2.extent) == null ? void 0 : _a.spatial;
  if (!t2)
    return null;
  const n = t2.bbox[0], i2 = n.length === 4, r2 = n[0], a = n[1], o2 = i2 ? void 0 : n[2];
  return { xmin: r2, ymin: a, xmax: i2 ? n[2] : n[3], ymax: i2 ? n[3] : n[4], zmin: o2, zmax: i2 ? void 0 : n[5], spatialReference: k$1.WGS84.toJSON() };
}
function D(e2, t2, n) {
  return e2.find((e3) => e3.rel === t2 && e3.type === n) || e2.find((e3) => e3.rel === t2 && !e3.type);
}
export { F, I, N, S, T, j, k, q, v, x };
