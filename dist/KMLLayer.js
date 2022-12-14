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
import { N as n, it as u, hS as m, cA as a, d8 as U, R as l, d0 as j, a as r, cr as w, hl as b, cx as j$2, $ as e, a0 as y, jn as u$1, cD as o, a1 as n$1, i2 as n$2, i4 as p, i3 as t, h2 as c, h3 as v, h4 as O$1, e0 as b$1, dS as l$1, aK as k$1, ej as Ut, aL as w$1, dD as r$1, h7 as f } from "./index.js";
import { j as j$1, S as S$1, g as g$1, d } from "./kmlUtils.js";
import "vue";
var S;
let k = S = class extends n.EventedMixin(u(m)) {
  constructor(...e2) {
    super(...e2), this.description = null, this.id = null, this.networkLink = null, this.sublayers = null, this.title = null, this.sourceJSON = null, this.fullExtent = null, this.addHandles([a(() => this.sublayers, "after-add", ({ item: e3 }) => {
      e3.parent = this, e3.layer = this.layer;
    }, U), a(() => this.sublayers, "after-remove", ({ item: e3 }) => {
      e3.layer = e3.parent = null;
    }, U), l(() => this.sublayers, (e3, t2) => {
      if (t2)
        for (const r2 of t2)
          r2.layer = r2.parent = null;
      if (e3)
        for (const r2 of e3)
          r2.parent = this, r2.layer = this.layer;
    }, U)]);
  }
  initialize() {
    j(() => this.networkLink).then(() => j(() => this.visible === true)).then(() => this.load());
  }
  load(e2) {
    var _a, _b;
    if (!this.networkLink)
      return;
    if (this.networkLink.viewFormat)
      return;
    const r$12 = r(e2) ? e2.signal : null, s = this._fetchService((_b = (_a = this._get("networkLink")) == null ? void 0 : _a.href) != null ? _b : "", r$12).then((e3) => {
      var _a2;
      const r2 = j$1(e3.sublayers);
      this.fullExtent = w.fromJSON(r2), this.sourceJSON = e3;
      const s2 = b(j$2.ofType(S), S$1(S, e3));
      this.sublayers ? this.sublayers.addMany(s2) : this.sublayers = s2, (_a2 = this.layer) == null ? void 0 : _a2.emit("sublayer-update"), this.layer && this.layer.notifyChange("visibleSublayers");
    });
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e2) {
    this._get("visible") !== e2 && (this._set("visible", e2), this.layer && this.layer.notifyChange("visibleSublayers"));
  }
  readVisible(e2, t2) {
    return !!t2.visibility;
  }
  set layer(e2) {
    this._set("layer", e2), this.sublayers && this.sublayers.forEach((t2) => t2.layer = e2);
  }
  _fetchService(e2, t2) {
    return g$1(e2, this.layer.outSpatialReference, this.layer.refreshInterval, t2).then((e3) => d(e3.data));
  }
};
e([y()], k.prototype, "description", void 0), e([y()], k.prototype, "id", void 0), e([y({ readOnly: true, value: null })], k.prototype, "networkLink", void 0), e([y({ json: { write: { allowNull: true } } })], k.prototype, "parent", void 0), e([y({ type: j$2.ofType(S), json: { write: { allowNull: true } } })], k.prototype, "sublayers", void 0), e([y({ value: null, json: { read: { source: "name", reader: (e2) => u$1(e2) } } })], k.prototype, "title", void 0), e([y({ value: true })], k.prototype, "visible", null), e([o("visible", ["visibility"])], k.prototype, "readVisible", null), e([y()], k.prototype, "sourceJSON", void 0), e([y({ value: null })], k.prototype, "layer", null), e([y({ type: w })], k.prototype, "fullExtent", void 0), k = S = e([n$1("esri.layers.support.KMLSublayer")], k);
const g = k;
const F = ["kml", "xml"];
let O = class extends n$2(p(t(c(v(O$1(b$1)))))) {
  constructor(...e2) {
    super(...e2), this._visibleFolders = [], this.allSublayers = new l$1({ getCollections: () => [this.sublayers], getChildrenFunction: (e3) => e3.sublayers }), this.outSpatialReference = k$1.WGS84, this.path = null, this.legendEnabled = false, this.operationalLayerType = "KML", this.sublayers = null, this.type = "kml", this.url = null;
  }
  initialize() {
    this.addHandles([l(() => this.sublayers, (e2, r2) => {
      r2 && r2.forEach((e3) => {
        e3.parent = null, e3.layer = null;
      }), e2 && e2.forEach((e3) => {
        e3.parent = this, e3.layer = this;
      });
    }, U), this.on("sublayer-update", () => this.notifyChange("fullExtent"))]);
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  readSublayersFromItemOrWebMap(e2, r2) {
    this._visibleFolders = r2.visibleFolders;
  }
  readSublayers(e2, r2, t2) {
    return S$1(g, r2, t2, this._visibleFolders);
  }
  writeSublayers(e2, r2) {
    const t2 = [], o2 = e2.toArray();
    for (; o2.length; ) {
      const e3 = o2[0];
      e3.networkLink || (e3.visible && t2.push(e3.id), e3.sublayers && o2.push(...e3.sublayers.toArray())), o2.shift();
    }
    r2.visibleFolders = t2;
  }
  get title() {
    const e2 = this._get("title");
    return e2 && this.originOf("title") !== "defaults" ? e2 : this.url ? Ut(this.url, F) || "KML" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  get visibleSublayers() {
    const e2 = this.sublayers, r2 = [], t2 = (e3) => {
      e3.visible && (r2.push(e3), e3.sublayers && e3.sublayers.forEach(t2));
    };
    return e2 && e2.forEach(t2), r2;
  }
  get fullExtent() {
    return this._recomputeFullExtent();
  }
  load(e2) {
    const r$12 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["KML"], supportsData: false }, e2).catch(w$1).then(() => this._fetchService(r$12))), Promise.resolve(this);
  }
  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }
  async _fetchService(e2) {
    const r2 = await Promise.resolve().then(() => {
      var _a;
      return this.resourceInfo ? { ssl: false, data: this.resourceInfo } : g$1((_a = this.url) != null ? _a : "", this.outSpatialReference, this.refreshInterval, e2);
    }), t2 = d(r2.data);
    t2 && this.read(t2, { origin: "service" });
  }
  _recomputeFullExtent() {
    let e2 = null;
    r(this.extent) && (e2 = this.extent.clone());
    const r$12 = (t2) => {
      if (t2.sublayers)
        for (const s of t2.sublayers.items)
          r$12(s), s.visible && s.fullExtent && (r(e2) ? e2.union(s.fullExtent) : e2 = s.fullExtent.clone());
    };
    return r$12(this), e2;
  }
};
e([y({ readOnly: true })], O.prototype, "allSublayers", void 0), e([y({ type: k$1 })], O.prototype, "outSpatialReference", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], O.prototype, "path", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], O.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide", "hide-children"] })], O.prototype, "listMode", void 0), e([y({ type: ["KML"] })], O.prototype, "operationalLayerType", void 0), e([y({})], O.prototype, "resourceInfo", void 0), e([y({ type: j$2.ofType(g), json: { write: { ignoreOrigin: true } } })], O.prototype, "sublayers", void 0), e([o(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], O.prototype, "readSublayersFromItemOrWebMap", null), e([o("service", "sublayers", ["sublayers"])], O.prototype, "readSublayers", null), e([r$1("sublayers")], O.prototype, "writeSublayers", null), e([y({ readOnly: true, json: { read: false } })], O.prototype, "type", void 0), e([y({ json: { origins: { "web-map": { read: { source: "title" } } }, write: { ignoreOrigin: true } } })], O.prototype, "title", null), e([y(f)], O.prototype, "url", void 0), e([y({ readOnly: true })], O.prototype, "visibleSublayers", null), e([y({ type: w })], O.prototype, "extent", void 0), e([y()], O.prototype, "fullExtent", null), O = e([n$1("esri.layers.KMLLayer")], O);
const M = O;
export { M as default };
