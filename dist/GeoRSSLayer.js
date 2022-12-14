var __defProp = Object.defineProperty;
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
import { i2 as n, i4 as p, h2 as c, h3 as v, i3 as t, h4 as O, e0 as b, ej as Ut, a as r, aL as w$1, U, iD as G, y as s, $ as e, a0 as y, cD as o, cr as w$2, ij as j, iE as c$1, h7 as f, a1 as n$1, ed as a, iF as m, iG as n$2, dI as y$1, iH as S } from "./index.js";
import "vue";
const L = ["atom", "xml"], R = { base: a, key: "type", typeMap: { "simple-line": m }, errorContext: "symbol" }, k = { base: a, key: "type", typeMap: { "picture-marker": n$2, "simple-marker": y$1 }, errorContext: "symbol" }, _ = { base: a, key: "type", typeMap: { "simple-fill": S }, errorContext: "symbol" };
let w = class extends n(p(c(v(t(O(b)))))) {
  constructor(...e2) {
    super(...e2), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e2, o2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, o2) : e2;
  }
  readFeatureCollections(e2, o2) {
    return o2.featureCollection.layers.forEach((e3) => {
      var _a;
      const o3 = e3.layerDefinition.drawingInfo.renderer.symbol;
      o3 && o3.type === "esriSFS" && ((_a = o3.outline) == null ? void 0 : _a.style.includes("esriSFS")) && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e2 = this._get("title");
    return e2 && this.originOf("title") !== "defaults" ? e2 : this.url ? Ut(this.url, L) || "GeoRSS" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  load(e2) {
    const o2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e2).catch(w$1).then(() => this._fetchService(o2)).then((e3) => {
      this.read(e3, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e2 = await this._fetchService();
    return this.read(e2, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e2) {
    var _a;
    const t2 = this.spatialReference, { data: s$1 } = await U(s.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: G(t2) ? void 0 : (_a = t2.wkid) != null ? _a : JSON.stringify(t2) }, signal: e2 });
    return s$1;
  }
  _hasGeometry(e2) {
    var _a, _b;
    return (_b = (_a = this.featureCollections) == null ? void 0 : _a.some((o2) => {
      var _a2, _b2;
      return ((_a2 = o2.featureSet) == null ? void 0 : _a2.geometryType) === e2 && ((_b2 = o2.featureSet.features) == null ? void 0 : _b2.length) > 0;
    })) != null ? _b : false;
  }
};
e([y()], w.prototype, "description", void 0), e([y()], w.prototype, "featureCollections", void 0), e([o("service", "featureCollections", ["featureCollection.layers"])], w.prototype, "readFeatureCollections", null), e([y({ type: w$2, json: { name: "lookAtExtent" } })], w.prototype, "fullExtent", void 0), e([y(j)], w.prototype, "id", void 0), e([y(c$1)], w.prototype, "legendEnabled", void 0), e([y({ types: R, json: { write: true } })], w.prototype, "lineSymbol", void 0), e([y({ type: ["show", "hide"] })], w.prototype, "listMode", void 0), e([y({ types: k, json: { write: true } })], w.prototype, "pointSymbol", void 0), e([y({ types: _, json: { write: true } })], w.prototype, "polygonSymbol", void 0), e([y({ type: ["GeoRSS"] })], w.prototype, "operationalLayerType", void 0), e([y(f)], w.prototype, "url", void 0), e([y({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], w.prototype, "title", null), e([y({ readOnly: true, json: { read: false }, value: "geo-rss" })], w.prototype, "type", void 0), w = e([n$1("esri.layers.GeoRSSLayer")], w);
const F = w;
export { F as default };
