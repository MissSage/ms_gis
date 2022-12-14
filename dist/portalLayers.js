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
import { d$ as x, g as s } from "./index.js";
import { a } from "./lazyLayerLoader.js";
import { b, w as w$1, g as g$1, T as T$1, n } from "./layersLoader.js";
import { s as s$1 } from "./portalItemUtils.js";
import "vue";
import "./jsonContext.js";
function i(e) {
  return !e.portalItem || e.portalItem instanceof x || (e = __spreadProps(__spreadValues({}, e), { portalItem: new x(e.portalItem) })), l(e.portalItem).then((r) => {
    const t = __spreadValues({ portalItem: e.portalItem }, r.properties);
    return new r.constructor(t);
  });
}
function l(e) {
  return e.load().then(y).then(m);
}
function y(r) {
  switch (r.type) {
    case "Map Service":
      return p(r);
    case "Feature Service":
      return L(r);
    case "Feature Collection":
      return d(r);
    case "Scene Service":
      return f(r);
    case "Image Service":
      return N(r);
    case "Stream Service":
      return S();
    case "Vector Tile Service":
      return I();
    case "GeoJson":
      return h();
    case "CSV":
      return g();
    case "KML":
      return w();
    case "WFS":
      return M();
    case "WMTS":
      return j();
    case "WMS":
      return T();
    case "Feed":
      return v();
    default:
      return Promise.reject(new s("portal:unknown-item-type", "Unknown item type '${type}'", { type: r.type }));
  }
}
function m(e) {
  return (0, a[e.className])().then((r) => ({ constructor: r, properties: e.properties }));
}
function p(e) {
  return G(e).then((e2) => e2 ? { className: "TileLayer" } : { className: "MapImageLayer" });
}
function L(e) {
  return s$1(e, "Oriented Imagery Layer") ? C(e) : P(e).then((e2) => {
    if (typeof e2 == "object") {
      const r = {};
      return e2.id != null && (r.layerId = e2.id), { className: e2.className || "FeatureLayer", properties: r };
    }
    return { className: "GroupLayer" };
  });
}
function f(e) {
  return P(e).then((r) => {
    if (typeof r == "object") {
      const t = {};
      let a2;
      if (r.id != null ? (t.layerId = r.id, a2 = `${e.url}/layers/${r.id}`) : a2 = e.url, Array.isArray(e.typeKeywords) && e.typeKeywords.length > 0) {
        const r2 = { IntegratedMesh: "IntegratedMeshLayer", "3DObject": "SceneLayer", Point: "SceneLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
        for (const t2 of Object.keys(r2))
          if (e.typeKeywords.includes(t2))
            return { className: r2[t2] };
      }
      return n(a2).then((e2) => {
        let r2 = "SceneLayer";
        const a3 = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
        return e2 && e2.layerType && a3[e2.layerType] && (r2 = a3[e2.layerType]), { className: r2, properties: t };
      });
    }
    return r === false ? n(e.url).then((e2) => (e2 == null ? void 0 : e2.layerType) === "Voxel" ? { className: "VoxelLayer" } : { className: "GroupLayer" }) : { className: "GroupLayer" };
  });
}
async function d(e) {
  await e.load();
  const r = s$1(e, "Map Notes"), t = s$1(e, "Markup");
  if (r || t)
    return { className: "MapNotesLayer" };
  if (s$1(e, "Route Layer"))
    return { className: "RouteLayer" };
  const n2 = await e.fetchData();
  return w$1(n2) === 1 ? { className: "FeatureLayer" } : { className: "GroupLayer" };
}
async function N(e) {
  var _a, _b, _c, _d, _e;
  await e.load();
  const r = (_b = (_a = e.typeKeywords) == null ? void 0 : _a.map((e2) => e2.toLowerCase())) != null ? _b : [];
  if (r.includes("elevation 3d layer"))
    return { className: "ElevationLayer" };
  if (r.includes("tiled imagery"))
    return { className: "ImageryTileLayer" };
  const t = (_c = await e.fetchData()) == null ? void 0 : _c.layerType;
  if (t === "ArcGISTiledImageServiceLayer")
    return { className: "ImageryTileLayer" };
  if (t === "ArcGISImageServiceLayer")
    return { className: "ImageryLayer" };
  const a2 = await n(e.url), n$1 = (_d = a2.cacheType) == null ? void 0 : _d.toLowerCase(), s2 = (_e = a2.capabilities) == null ? void 0 : _e.toLowerCase().includes("tilesonly");
  return n$1 === "map" || s2 ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
}
function S() {
  return { className: "StreamLayer" };
}
function I() {
  return { className: "VectorTileLayer" };
}
function h() {
  return { className: "GeoJSONLayer" };
}
function g() {
  return { className: "CSVLayer" };
}
function w() {
  return { className: "KMLLayer" };
}
function M() {
  return { className: "WFSLayer" };
}
function T() {
  return { className: "WMSLayer" };
}
function j() {
  return { className: "WMTSLayer" };
}
function v() {
  return { className: "StreamLayer" };
}
function C(e) {
  return e.load().then(() => e.fetchData()).then((e2) => e2.coverage ? { className: "GroupLayer" } : { className: "OrientedImageryLayer", properties: e2 });
}
function G(e) {
  return n(e.url).then((e2) => e2.tileInfo);
}
function P(e) {
  return !e.url || e.url.match(/\/\d+$/) ? Promise.resolve({}) : e.load().then(() => e.fetchData()).then(async (r) => {
    if (e.type === "Feature Service") {
      const t = F(await b(r, e.url));
      if (typeof t == "object") {
        const e2 = T$1(r);
        t.className = e2.includes(t.id) ? "SubtypeGroupLayer" : "FeatureLayer";
      }
      return t;
    }
    return w$1(r) > 0 ? F(r) : n(e.url).then(F);
  });
}
function F(e) {
  return w$1(e) === 1 && { id: g$1(e) };
}
export { i as fromItem, y as selectLayerClassPath };
