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
import { i2 as n, i3 as t, h2 as c, h3 as v, h1 as p, h4 as O, Y as a, i4 as p$1, ie as i, iJ as o, e0 as b, a as r, aL as w, aK as k, bO as j, U, ds as I, g as s$1, hc as m, fF as g, e1 as d, hA as Q, $ as e, a0 as y$1, cD as o$1, dD as r$1, cn as s$2, h7 as f, a1 as n$1 } from "./index.js";
import { s } from "./ArcGISCachedService.js";
import { E, y, z } from "./SublayersOwner.js";
import "vue";
import "./TilemapCache.js";
import "./Version.js";
import "./sublayerUtils.js";
const M = ["Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Elevation/World_Hillshade", "Elevation/World_Hillshade_Dark", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Ocean_Basemap", "Reference/World_Boundaries_and_Places", "Reference/World_Boundaries_and_Places_Alternate", "Reference/World_Transportation", "World_Imagery", "World_Street_Map", "World_Topo_Map"];
let W = class extends n(E(t(c(v(s(y(p(O(a(p$1(i(o(b))))))))))))) {
  constructor(...e2) {
    super(...e2), this.listMode = "show", this.isReference = null, this.operationalLayerType = "ArcGISTiledMapServiceLayer", this.resampling = true, this.sourceJSON = null, this.spatialReference = null, this.path = null, this.sublayers = null, this.type = "tile", this.url = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const r$12 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }, e2).catch(w).then(() => this._fetchService(r$12))), Promise.resolve(this);
  }
  get attributionDataUrl() {
    var _a;
    const e2 = (_a = this.parsedUrl) == null ? void 0 : _a.path.toLowerCase();
    return e2 ? this._getDefaultAttribution(this._getMapName(e2)) : null;
  }
  readSpatialReference(e2, r2) {
    return (e2 = e2 || r2.tileInfo && r2.tileInfo.spatialReference) && k.fromJSON(e2);
  }
  writeSublayers(e2, r2, t2, s2) {
    if (!this.loaded || !e2)
      return;
    const i2 = e2.slice().reverse().flatten(({ sublayers: e3 }) => e3 && e3.toArray().reverse()).toArray(), o2 = [], a2 = __spreadValues({ writeSublayerStructure: false }, s2);
    i2.forEach((e3) => {
      const r3 = e3.write({}, a2);
      o2.push(r3);
    });
    o2.some((e3) => Object.keys(e3).length > 1) && (r2.layers = o2);
  }
  get tileServers() {
    return this._getDefaultTileServers(this.parsedUrl.path);
  }
  castTileServers(e2) {
    return Array.isArray(e2) ? e2.map((e3) => j(e3).path) : null;
  }
  fetchTile(e2, t2, s2, i2 = {}) {
    const { signal: o2 } = i2, a2 = this.getTileUrl(e2, t2, s2), l = { responseType: "image", signal: o2, query: __spreadValues({}, this.refreshParameters) };
    return U(a2, l).then((e3) => e3.data);
  }
  async fetchImageBitmapTile(e2, t2, s2, i2 = {}) {
    const { signal: o2 } = i2, a2 = this.getTileUrl(e2, t2, s2), l = { responseType: "blob", signal: o2, query: __spreadValues({}, this.refreshParameters) }, n2 = await U(a2, l);
    return createImageBitmap(n2.data);
  }
  getTileUrl(e2, r2, t2) {
    const s2 = !this.tilemapCache && this.supportsBlankTile, i2 = I(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, this.parsedUrl.query), { blankTile: !s2 && null }), this.customParameters), { token: this.apiKey })), o2 = this.tileServers;
    return `${o2 && o2.length ? o2[r2 % o2.length] : this.parsedUrl.path}/tile/${e2}/${r2}/${t2}${i2 ? "?" + i2 : ""}`;
  }
  _fetchService(e2) {
    return new Promise((s2, o2) => {
      if (this.sourceJSON) {
        if (this.sourceJSON.bandCount != null && this.sourceJSON.pixelSizeX != null)
          throw new s$1("tile-layer:unsupported-url", "use ImageryTileLayer to open a tiled image service");
        return void s2({ data: this.sourceJSON });
      }
      if (!this.parsedUrl)
        throw new s$1("tile-layer:undefined-url", "layer's url is not defined");
      const a2 = m(this.parsedUrl.path);
      if (r(a2) && a2.serverType === "ImageServer")
        throw new s$1("tile-layer:unsupported-url", "use ImageryTileLayer to open a tiled image service");
      U(this.parsedUrl.path, { query: __spreadProps(__spreadValues(__spreadValues({ f: "json" }, this.parsedUrl.query), this.customParameters), { token: this.apiKey }), responseType: "json", signal: e2 }).then(s2, o2);
    }).then((r2) => {
      if (r2.ssl && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = r2.data, this.read(r2.data, { origin: "service", url: this.parsedUrl }), this.version === 10.1 && !g(this.url))
        return this._fetchServerVersion(this.url, e2).then((e3) => {
          this.read({ currentVersion: e3 });
        }).catch(() => {
        });
    });
  }
  _fetchServerVersion(e2, s2) {
    if (!d(e2))
      return Promise.reject();
    const i2 = e2.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
    return U(i2, { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: s2 }).then((e3) => {
      if (e3.data && e3.data.currentVersion)
        return e3.data.currentVersion;
      throw new s$1("tile-layer:version-not-available");
    });
  }
  _getMapName(e2) {
    const r2 = e2.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);
    return r2 && r2[2];
  }
  _getDefaultAttribution(e2) {
    if (!e2)
      return;
    let r2;
    e2 = e2.toLowerCase();
    for (let t2 = 0, s2 = M.length; t2 < s2; t2++)
      if (r2 = M[t2], r2.toLowerCase().includes(e2))
        return Q("//static.arcgis.com/attribution/" + r2);
  }
  _getDefaultTileServers(e2) {
    const r2 = e2.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i) !== -1, t2 = e2.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i) !== -1;
    return r2 || t2 ? [e2, e2.replace(r2 ? /server\.arcgisonline/i : /services\.arcgisonline/i, r2 ? "services.arcgisonline" : "server.arcgisonline")] : [];
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile.__isDefault__;
  }
};
e([y$1({ readOnly: true })], W.prototype, "attributionDataUrl", null), e([y$1({ type: ["show", "hide", "hide-children"] })], W.prototype, "listMode", void 0), e([y$1({ json: { read: true, write: true } })], W.prototype, "blendMode", void 0), e([y$1({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], W.prototype, "isReference", void 0), e([y$1({ readOnly: true, type: ["ArcGISTiledMapServiceLayer"] })], W.prototype, "operationalLayerType", void 0), e([y$1({ type: Boolean })], W.prototype, "resampling", void 0), e([y$1()], W.prototype, "sourceJSON", void 0), e([y$1({ type: k })], W.prototype, "spatialReference", void 0), e([o$1("spatialReference", ["spatialReference", "tileInfo"])], W.prototype, "readSpatialReference", null), e([y$1({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], W.prototype, "path", void 0), e([y$1({ readOnly: true })], W.prototype, "sublayers", void 0), e([r$1("sublayers", { layers: { type: [z] } })], W.prototype, "writeSublayers", null), e([y$1({ json: { read: false, write: false } })], W.prototype, "popupEnabled", void 0), e([y$1()], W.prototype, "tileServers", null), e([s$2("tileServers")], W.prototype, "castTileServers", null), e([y$1({ readOnly: true, json: { read: false } })], W.prototype, "type", void 0), e([y$1(f)], W.prototype, "url", void 0), W = e([n$1("esri.layers.TileLayer")], W), W.prototype.fetchTile.__isDefault__ = true;
const B = W;
export { B as default };
