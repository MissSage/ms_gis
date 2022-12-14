var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
import { e7 as t, i2 as n, i3 as t$1, i4 as p, e0 as b$1, d3 as j, aK as k, cr as w, ap as u$1, U, g as s, $ as e, a0 as y, a1 as n$1, ck as s$1, h2 as c$1, h4 as O, a as r, t as t$2 } from "./index.js";
import "vue";
var u;
const h$1 = new t("0/0/0", 0, 0, 0, void 0);
let d = u = class extends n(t$1(p(b$1))) {
  constructor() {
    super(...arguments), this.tileInfo = j.create({ spatialReference: k.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new w(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, k.WebMercator), this.spatialReference = k.WebMercator;
  }
  getTileBounds(e2, t2, r2, o) {
    const s2 = o || u$1();
    return h$1.level = e2, h$1.row = t2, h$1.col = r2, h$1.extent = s2, this.tileInfo.updateTileInfo(h$1), h$1.extent = void 0, s2;
  }
  fetchTile(e2, r2, o, s2 = {}) {
    const { signal: i } = s2, a = this.getTileUrl(e2, r2, o), p2 = { responseType: "image", signal: i, query: __spreadValues({}, this.refreshParameters) };
    return U(a != null ? a : "", p2).then((e3) => e3.data);
  }
  async fetchImageBitmapTile(e2, r2, o, s2 = {}) {
    const { signal: i } = s2;
    if (this.fetchTile !== u.prototype.fetchTile)
      return createImageBitmap(await this.fetchTile(e2, r2, o, s2));
    const a = this.getTileUrl(e2, r2, o), p2 = { responseType: "blob", signal: i, query: __spreadValues({}, this.refreshParameters) }, { data: l } = await U(a != null ? a : "", p2);
    return createImageBitmap(l);
  }
  getTileUrl() {
    throw new s("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
e([y({ type: j })], d.prototype, "tileInfo", void 0), e([y({ type: ["show", "hide"] })], d.prototype, "listMode", void 0), e([y({ readOnly: true, value: "base-tile" })], d.prototype, "type", void 0), e([y({ nonNullable: true })], d.prototype, "fullExtent", void 0), e([y()], d.prototype, "spatialReference", void 0), d = u = e([n$1("esri.layers.BaseTileLayer")], d);
const g = d;
const c = new s$1({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" }), h = "https://dev.virtualearth.net";
let m = class extends n(c$1(O(g))) {
  constructor(e2) {
    super(e2), this.type = "bing-maps", this.tileInfo = new j({ size: [256, 256], dpi: 96, origin: { x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: k.WebMercator }, spatialReference: k.WebMercator, lods: [{ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }, { level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }, { level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }, { level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }, { level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }, { level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }, { level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }, { level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }, { level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }, { level: 10, resolution: 152.874056570411, scale: 577790.554289 }, { level: 11, resolution: 76.4370282850732, scale: 288895.277144 }, { level: 12, resolution: 38.2185141425366, scale: 144447.638572 }, { level: 13, resolution: 19.1092570712683, scale: 72223.819286 }, { level: 14, resolution: 9.55462853563415, scale: 36111.909643 }, { level: 15, resolution: 4.77731426794937, scale: 18055.954822 }, { level: 16, resolution: 2.38865713397468, scale: 9027.977411 }, { level: 17, resolution: 1.19432856685505, scale: 4513.988705 }, { level: 18, resolution: 0.597164283559817, scale: 2256.994353 }, { level: 19, resolution: 0.298582141647617, scale: 1128.497176 }, { level: 20, resolution: 0.1492910708238085, scale: 564.248588 }] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e2) {
    this._set("bingMetadata", e2);
  }
  get copyright() {
    return r(this.bingMetadata) ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return c.toJSON(this.style);
  }
  get bingLogo() {
    return r(this.bingMetadata) ? this.bingMetadata.brandLogoUri : null;
  }
  load(e2) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e2, t2, r2) {
    if (!this.loaded || t$2(this.bingMetadata))
      return null;
    const a = this.bingMetadata.resourceSets[0].resources[0], o = a.imageUrlSubdomains[t2 % a.imageUrlSubdomains.length], i = this._getQuadKey(e2, t2, r2);
    return a.imageUrl.replace("{subdomain}", o).replace("{quadkey}", i);
  }
  async fetchAttributionData() {
    return this.load().then(() => {
      if (t$2(this.bingMetadata))
        return null;
      return { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e2) => ({ attribution: e2.attribution, coverageAreas: e2.coverageAreas.map((e3) => ({ zoomMin: e3.zoomMin, zoomMax: e3.zoomMax, score: 1, bbox: [e3.bbox[0], e3.bbox[1], e3.bbox[2], e3.bbox[3]] })) })) };
    });
  }
  _getMetadata() {
    const e2 = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return U(`${h}/REST/v1/Imagery/Metadata/${e2}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: true, output: "json", culture: this.culture, userRegion: this.region } }).then((e3) => {
      const t2 = e3.data;
      if (t2.statusCode !== 200)
        throw new s("bingmapslayer:getmetadata", t2.statusDescription);
      if (this.bingMetadata = t2, this.bingMetadata.resourceSets.length === 0)
        throw new s("bingmapslayer:getmetadata", "no bing resourcesets");
      if (this.bingMetadata.resourceSets[0].resources.length === 0)
        throw new s("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e3) => {
      throw new s("bingmapslayer:getmetadata", e3.message);
    });
  }
  _getPortalBingKey() {
    var _a;
    return U((_a = this.portalUrl) != null ? _a : "", { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e2) => {
      if (!e2.data.bingKey)
        throw new s("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e2.data.bingKey;
    }).catch((e2) => {
      throw new s("bingmapslayer:getportalbingkey", e2.message);
    });
  }
  _getQuadKey(e2, t2, r2) {
    let a = "";
    for (let o = e2; o > 0; o--) {
      let e3 = 0;
      const s2 = 1 << o - 1;
      (r2 & s2) != 0 && (e3 += 1), (t2 & s2) != 0 && (e3 += 2), a += e3.toString();
    }
    return a;
  }
};
e([y({ json: { read: false, write: false }, value: null })], m.prototype, "bingMetadata", null), e([y({ json: { read: false, write: false }, value: "bing-maps", readOnly: true })], m.prototype, "type", void 0), e([y({ type: j })], m.prototype, "tileInfo", void 0), e([y({ type: String, readOnly: true, json: { read: false, write: false } })], m.prototype, "copyright", null), e([y({ type: String, json: { write: false, read: false } })], m.prototype, "key", void 0), e([y({ type: c.apiValues, nonNullable: true, json: { read: { source: "layerType", reader: c.read } } })], m.prototype, "style", void 0), e([y({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], m.prototype, "operationalLayerType", null), e([y({ type: String, json: { write: false, read: false } })], m.prototype, "culture", void 0), e([y({ type: String, json: { write: false, read: false } })], m.prototype, "region", void 0), e([y({ type: String, json: { write: true, read: true } })], m.prototype, "portalUrl", void 0), e([y({ type: Boolean, json: { write: false, read: false } })], m.prototype, "hasAttributionData", void 0), e([y({ type: String, readOnly: true })], m.prototype, "bingLogo", null), m = e([n$1("esri.layers.BingMapsLayer")], m);
const b = m;
export { b as default };
