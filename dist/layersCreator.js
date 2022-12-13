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
import { cs as E, d_ as t$1, d$ as x, cx as j } from "./index.js";
import { a } from "./lazyLayerLoader.js";
import { selectLayerClassPath as y } from "./portalLayers.js";
import "vue";
import "./layersLoader.js";
import "./jsonContext.js";
import "./portalItemUtils.js";
function e(e2) {
  return t(e2, "notes");
}
function r(e2) {
  return t(e2, "markup");
}
function n(e2) {
  return t(e2, "route");
}
function t(e2, r2) {
  return !(!e2.layerType || e2.layerType !== "ArcGISFeatureLayer") && e2.featureCollectionType === r2;
}
async function l(e2, a2, y2) {
  if (!a2)
    return;
  const t2 = [];
  for (const r2 of a2) {
    const e3 = d(r2, y2);
    r2.layerType === "GroupLayer" ? t2.push(M(e3, r2, y2)) : t2.push(e3);
  }
  const i = await E(t2);
  for (const r2 of i)
    !r2.value || y2.filter && !y2.filter(r2.value) || e2.add(r2.value);
}
const c = { ArcGISDimensionLayer: "DimensionLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", PointCloudLayer: "PointCloudLayer", ArcGISSceneServiceLayer: "SceneLayer", IntegratedMeshLayer: "IntegratedMeshLayer", OGCFeatureLayer: "OGCFeatureLayer", BuildingSceneLayer: "BuildingSceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", GroupLayer: "GroupLayer", GeoJSON: "GeoJSONLayer", WebTiledLayer: "WebTileLayer", CSV: "CSVLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer", KML: "KMLLayer", RasterDataLayer: "UnsupportedLayer", Voxel: "VoxelLayer", LineOfSightLayer: "LineOfSightLayer" }, s = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" }, p = { ArcGISTiledMapServiceLayer: "TileLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", OpenStreetMap: "OpenStreetMapLayer", WebTiledLayer: "WebTileLayer", VectorTileLayer: "VectorTileLayer", ArcGISImageServiceLayer: "UnsupportedLayer", WMS: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", DefaultTileLayer: "TileLayer" }, S = { ArcGISAnnotationLayer: "UnsupportedLayer", ArcGISDimensionLayer: "UnsupportedLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoRSS: "GeoRSSLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", SubtypeGroupLayer: "SubtypeGroupLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, u = { ArcGISFeatureLayer: "FeatureLayer" }, I = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WebTiledLayer: "WebTileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer" };
async function d(e2, r2) {
  return m(await T(e2, r2), e2, r2);
}
async function m(e2, r2, a2) {
  const y2 = new e2();
  return y2.read(r2, a2.context), y2.type === "group" && g(r2) && await A(y2, r2, a2.context), await t$1(y2, a2.context), y2;
}
async function T(e$1, r$1) {
  const o = r$1.context, l2 = G(o);
  let c2 = e$1.layerType || e$1.type;
  !c2 && r$1 && r$1.defaultLayerType && (c2 = r$1.defaultLayerType);
  const s2 = l2[c2];
  let p2 = s2 ? a[s2] : a.UnknownLayer;
  if (f(e$1)) {
    const r2 = o == null ? void 0 : o.portal;
    if (e$1.itemId) {
      const t2 = new x({ id: e$1.itemId, portal: r2 });
      await t2.load();
      const i = (await y(t2)).className || "UnknownLayer";
      p2 = a[i];
    }
  } else
    c2 === "ArcGISFeatureLayer" ? e(e$1) || r(e$1) ? p2 = a.MapNotesLayer : n(e$1) ? p2 = a.RouteLayer : g(e$1) && (p2 = a.GroupLayer) : e$1.wmtsInfo && e$1.wmtsInfo.url && e$1.wmtsInfo.layerIdentifier ? p2 = a.WMTSLayer : c2 === "WFS" && e$1.wfsInfo.version !== "2.0.0" && (p2 = a.UnsupportedLayer);
  return p2();
}
function g(e2) {
  var _a, _b, _c;
  if (e2.layerType !== "ArcGISFeatureLayer" || f(e2))
    return false;
  return ((_c = (_b = (_a = e2.featureCollection) == null ? void 0 : _a.layers) == null ? void 0 : _b.length) != null ? _c : 0) > 1;
}
function f(e2) {
  return e2.type === "Feature Collection";
}
function G(e2) {
  let r2;
  if (e2.origin === "web-scene")
    switch (e2.layerContainerType) {
      case "basemap":
        r2 = p;
        break;
      case "ground":
        r2 = s;
        break;
      default:
        r2 = c;
    }
  else
    switch (e2.layerContainerType) {
      case "basemap":
        r2 = I;
        break;
      case "tables":
        r2 = u;
        break;
      default:
        r2 = S;
    }
  return r2;
}
async function M(r2, a2, y2) {
  const t2 = new j(), i = l(t2, Array.isArray(a2.layers) ? a2.layers : [], y2), L = await r2;
  if (await i, L.type === "group")
    return L.layers.addMany(t2), L;
}
async function A(e2, r2, y2) {
  const t2 = a.FeatureLayer, i = await t2(), L = r2.featureCollection, n2 = L.showLegend, o = L.layers.map((a2, t3) => {
    var _a, _b;
    const L2 = new i();
    L2.read(a2, y2);
    const o2 = __spreadProps(__spreadValues({}, y2), { ignoreDefaults: true });
    return L2.read({ id: `${e2.id}-sublayer-${t3}`, visibility: (_b = (_a = r2.visibleLayers) == null ? void 0 : _a.includes(t3)) != null ? _b : true }, o2), n2 != null && L2.read({ showLegend: n2 }, o2), L2;
  });
  e2.layers.addMany(o);
}
export { l as populateOperationalLayers };
