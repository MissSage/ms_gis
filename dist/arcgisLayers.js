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
import { a as r, hc as m$1, t, g as s, hd as w, ej as Ut, bO as j } from "./index.js";
import { a, r as r$1 } from "./fetchService.js";
import { a as a$1 } from "./lazyLayerLoader.js";
import "vue";
async function c(e) {
  var _a;
  const r2 = (_a = e.properties) == null ? void 0 : _a.customParameters, a2 = await m(e.url, r2), t2 = __spreadProps(__spreadValues({}, e.properties), { url: e.url });
  if (!a2.sublayerIds)
    return a2.layerOrTableId != null && (t2.layerId = a2.layerOrTableId, t2.sourceJSON = a2.sourceJSON), new a2.Constructor(t2);
  const s2 = new (await import("./GroupLayer.js")).default({ title: a2.parsedUrl.title });
  return d(s2, a2, t2), s2;
}
function i(e, r2) {
  return e ? e.find((e2) => e2.id === r2) : null;
}
function d(e, r$12, t2) {
  function s2(e2, s3) {
    const n = __spreadProps(__spreadValues({}, t2), { layerId: e2, sublayerTitleMode: "service-name" });
    return r(s3) && (n.sourceJSON = s3), new r$12.Constructor(n);
  }
  r$12.sublayerIds.forEach((a2) => {
    const t3 = s2(a2, i(r$12.sublayerInfos, a2));
    e.add(t3);
  }), r$12.tableIds.forEach((a2) => {
    const t3 = s2(a2, i(r$12.tableInfos, a2));
    e.tables.add(t3);
  });
}
async function m(a$12, t$1) {
  var _a, _b;
  let s$1 = m$1(a$12);
  if (t(s$1) && (s$1 = await f(a$12, t$1)), t(s$1))
    throw new s("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: a$12 });
  const { serverType: l, sublayer: u } = s$1;
  let y;
  const c2 = { FeatureServer: "FeatureLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer" };
  switch (l) {
    case "MapServer":
      y = u != null ? "FeatureLayer" : b(a$12, t$1).then((e) => e ? "TileLayer" : "MapImageLayer");
      break;
    case "ImageServer":
      y = a(a$12, { customParameters: t$1 }).then((e) => {
        const r2 = e.tileInfo && e.tileInfo.format;
        return e.tileInfo ? (r2 == null ? void 0 : r2.toUpperCase()) !== "LERC" || e.cacheType && e.cacheType.toLowerCase() !== "elevation" ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      });
      break;
    case "SceneServer":
      y = a(s$1.url.path, { customParameters: t$1 }).then((e) => {
        var _a2;
        if (e) {
          if ((e == null ? void 0 : e.layerType) === "Voxel")
            return "VoxelLayer";
          if ((e == null ? void 0 : e.layers) && Array.isArray(e.layers) && e.layers.length > 0) {
            const r2 = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" }, a2 = (_a2 = e.layers[0]) == null ? void 0 : _a2.layerType;
            if (r2[a2] != null)
              return r2[a2];
          }
        }
        return "SceneLayer";
      });
      break;
    default:
      y = c2[l];
  }
  const i2 = { FeatureLayer: true, SceneLayer: true }, d2 = l === "FeatureServer", m2 = { parsedUrl: s$1, Constructor: null, layerOrTableId: d2 ? u : null, sublayerIds: null, tableIds: null }, p2 = await y;
  if (i2[p2] && u == null) {
    const e = await I(a$12, l, t$1);
    d2 && (m2.sublayerInfos = e.layerInfos, m2.tableInfos = e.tableInfos);
    e.layerIds.length + e.tableIds.length !== 1 ? (m2.sublayerIds = e.layerIds, m2.tableIds = e.tableIds) : d2 && (m2.layerOrTableId = (_a = e.layerIds[0]) != null ? _a : e.tableIds[0], m2.sourceJSON = (_b = e.layerInfos[0]) != null ? _b : e.tableInfos[0]);
  }
  return m2.Constructor = await S(p2), m2;
}
async function f(e, r$12) {
  var _a;
  const n = await a(e, { customParameters: r$12 });
  let u = null, y = null;
  const c2 = n.type;
  if (c2 === "Feature Layer" || c2 === "Table" ? (u = "FeatureServer", y = n.id) : c2 === "indexedVector" ? u = "VectorTileServer" : n.hasOwnProperty("mapName") ? u = "MapServer" : n.hasOwnProperty("bandCount") && n.hasOwnProperty("pixelSizeX") ? u = "ImageServer" : n.hasOwnProperty("maxRecordCount") && n.hasOwnProperty("allowGeometryUpdates") ? u = "FeatureServer" : n.hasOwnProperty("streamUrls") ? u = "StreamServer" : p(n) ? (u = "SceneServer", y = n.id) : n.hasOwnProperty("layers") && p((_a = n.layers) == null ? void 0 : _a[0]) && (u = "SceneServer"), !u)
    return null;
  const i2 = y != null ? w(e) : null;
  return { title: r(i2) && n.name || Ut(e), serverType: u, sublayer: y, url: { path: r(i2) ? i2.serviceUrl : j(e).path } };
}
function p(e) {
  return (e == null ? void 0 : e.hasOwnProperty("store")) && e.hasOwnProperty("id") && typeof e.id == "number";
}
async function I(e, r2, a$12) {
  let t2, s2 = false;
  if (r2 === "FeatureServer") {
    const r3 = await r$1(e, { customParameters: a$12 });
    s2 = !!r3.layersJSON, t2 = r3.layersJSON || r3.serviceJSON;
  } else
    t2 = await a(e, { customParameters: a$12 });
  const n = t2 == null ? void 0 : t2.layers, l = t2 == null ? void 0 : t2.tables;
  return { layerIds: (n == null ? void 0 : n.map((e2) => e2.id).reverse()) || [], tableIds: (l == null ? void 0 : l.map((e2) => e2.id).reverse()) || [], layerInfos: s2 ? n : [], tableInfos: s2 ? l : [] };
}
async function S(e) {
  return (0, a$1[e])();
}
async function b(e, r2) {
  return (await a(e, { customParameters: r2 })).tileInfo;
}
export { c as fromUrl };
