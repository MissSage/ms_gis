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
import { i2 as n, iM as a, i3 as t, h1 as p, h2 as c, h3 as v, h4 as O, i4 as p$1, ie as i, iJ as o, Y as a$1, e0 as b, a as r, aL as w, jg as t$1, dL as r$1, U, cr as w$1, dB as T, ig as n$2, i_ as e, g as s, m as j, $ as e$1, a0 as y$1, cD as o$1, dD as r$2, gp as T$1, h7 as f, a1 as n$3 } from "./index.js";
import { i as i$1 } from "./scaleUtils.js";
import { E, y, z } from "./SublayersOwner.js";
import { c as c$1 } from "./ExportImageParameters.js";
import { n as n$1 } from "./sublayerUtils.js";
import "vue";
import "./Version.js";
import "./floorFilterUtils.js";
let q = class extends n(a(t(E(y(p(c(v(O(p$1(i(o(a$1(b))))))))))))) {
  constructor(...e2) {
    super(...e2), this.datesInUnknownTimezone = false, this.dpi = 96, this.gdbVersion = null, this.imageFormat = "png24", this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = true, this.isReference = null, this.labelsVisible = false, this.operationalLayerType = "ArcGISMapServiceLayer", this.sourceJSON = null, this.sublayers = null, this.type = "map-image", this.url = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const r$12 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }, e2).catch(w).then(() => this._fetchService(r$12))), Promise.resolve(this);
  }
  readImageFormat(e2, r2) {
    const t2 = r2.supportedImageFormatTypes;
    return t2 && t2.includes("PNG32") ? "png32" : "png24";
  }
  writeSublayers(e2, r2, t2, o2) {
    if (!this.loaded || !e2)
      return;
    const i2 = e2.slice().reverse().flatten(({ sublayers: e3 }) => e3 && e3.toArray().reverse()).toArray();
    let s2 = false;
    if (this.capabilities && this.capabilities.operations.supportsExportMap && this.capabilities.exportMap.supportsDynamicLayers) {
      const e3 = t$1(o2.origin);
      if (e3 === r$1.PORTAL_ITEM) {
        const e4 = this.createSublayersForOrigin("service").sublayers;
        s2 = n$1(i2, e4, r$1.SERVICE);
      } else if (e3 > r$1.PORTAL_ITEM) {
        const e4 = this.createSublayersForOrigin("portal-item");
        s2 = n$1(i2, e4.sublayers, t$1(e4.origin));
      }
    }
    const a2 = [], p2 = __spreadValues({ writeSublayerStructure: s2 }, o2);
    let n2 = s2;
    i2.forEach((e3) => {
      const r3 = e3.write({}, p2);
      a2.push(r3), n2 = n2 || e3.originOf("visible") === "user";
    });
    a2.some((e3) => Object.keys(e3).length > 1) && (r2.layers = a2), n2 && (r2.visibleLayers = i2.filter((e3) => e3.visible).map((e3) => e3.id));
  }
  createExportImageParameters(e2, r2, t2, o2) {
    const i2 = o2 && o2.pixelRatio || 1;
    e2 && this.version >= 10 && (e2 = e2.clone().shiftCentralMeridian());
    const s2 = new c$1({ layer: this, floors: o2 == null ? void 0 : o2.floors, scale: i$1({ extent: e2, width: r2 }) * i2 }), a2 = s2.toJSON();
    s2.destroy();
    const p2 = !o2 || !o2.rotation || this.version < 10.3 ? {} : { rotation: -o2.rotation }, n2 = e2 && e2.spatialReference, m = n2.wkid || JSON.stringify(n2.toJSON());
    a2.dpi *= i2;
    const l = {};
    if (o2 == null ? void 0 : o2.timeExtent) {
      const { start: e3, end: r3 } = o2.timeExtent.toJSON();
      l.time = e3 && r3 && e3 === r3 ? "" + e3 : `${e3 != null ? e3 : "null"},${r3 != null ? r3 : "null"}`;
    } else
      this.timeInfo && !this.timeInfo.hasLiveData && (l.time = "null,null");
    return __spreadValues(__spreadValues(__spreadValues({ bbox: e2 && e2.xmin + "," + e2.ymin + "," + e2.xmax + "," + e2.ymax, bboxSR: m, imageSR: m, size: r2 + "," + t2 }, a2), p2), l);
  }
  async fetchImage(e2, r2, t2, o2) {
    return this._fetchImage("image", e2, r2, t2, o2);
  }
  async fetchImageBitmap(e2, r2, t2, o2) {
    const i2 = await this._fetchImage("blob", e2, r2, t2, o2);
    return createImageBitmap(i2);
  }
  async fetchRecomputedExtents(e2 = {}) {
    const o2 = __spreadProps(__spreadValues({}, e2), { query: __spreadProps(__spreadValues({ returnUpdates: true, f: "json" }, this.customParameters), { token: this.apiKey }) }), { data: i2 } = await U(this.url, o2), { extent: s2, fullExtent: a2, timeExtent: p2 } = i2, n2 = s2 || a2;
    return { fullExtent: n2 && w$1.fromJSON(n2), timeExtent: p2 && T.fromJSON({ start: p2[0], end: p2[1] }) };
  }
  loadAll() {
    return n$2(this, (e2) => {
      e2(this.allSublayers);
    });
  }
  serviceSupportsSpatialReference(e$12) {
    return e(this, e$12);
  }
  async _fetchImage(e2, t2, i2, s$1, a2) {
    var _a;
    const p2 = { responseType: e2, signal: (_a = a2 == null ? void 0 : a2.signal) != null ? _a : null, query: __spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, this.parsedUrl.query), this.createExportImageParameters(t2, i2, s$1, a2)), { f: "image" }), this.refreshParameters), this.customParameters), { token: this.apiKey }) }, n2 = this.parsedUrl.path + "/export";
    if (p2.query.dynamicLayers != null && !this.capabilities.exportMap.supportsDynamicLayers)
      throw new s("mapimagelayer:dynamiclayer-not-supported", `service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`, { query: p2.query });
    try {
      const { data: e3 } = await U(n2, p2);
      return e3;
    } catch (l) {
      if (j(l))
        throw l;
      throw new s("mapimagelayer:image-fetch-error", `Unable to load image: ${n2}`, { error: l });
    }
  }
  async _fetchService(e2) {
    if (this.sourceJSON)
      return void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    const { data: t2, ssl: o2 } = await U(this.parsedUrl.path, { query: __spreadProps(__spreadValues(__spreadValues({ f: "json" }, this.parsedUrl.query), this.customParameters), { token: this.apiKey }), signal: e2 });
    o2 && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = t2, this.read(t2, { origin: "service", url: this.parsedUrl });
  }
};
e$1([y$1({ type: Boolean })], q.prototype, "datesInUnknownTimezone", void 0), e$1([y$1()], q.prototype, "dpi", void 0), e$1([y$1()], q.prototype, "gdbVersion", void 0), e$1([y$1()], q.prototype, "imageFormat", void 0), e$1([o$1("imageFormat", ["supportedImageFormatTypes"])], q.prototype, "readImageFormat", null), e$1([y$1({ json: { origins: { service: { read: { source: "maxImageHeight" } } } } })], q.prototype, "imageMaxHeight", void 0), e$1([y$1({ json: { origins: { service: { read: { source: "maxImageWidth" } } } } })], q.prototype, "imageMaxWidth", void 0), e$1([y$1()], q.prototype, "imageTransparency", void 0), e$1([y$1({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], q.prototype, "isReference", void 0), e$1([y$1({ json: { read: false, write: false } })], q.prototype, "labelsVisible", void 0), e$1([y$1({ type: ["ArcGISMapServiceLayer"] })], q.prototype, "operationalLayerType", void 0), e$1([y$1({ json: { read: false, write: false } })], q.prototype, "popupEnabled", void 0), e$1([y$1()], q.prototype, "sourceJSON", void 0), e$1([y$1({ json: { write: { ignoreOrigin: true } } })], q.prototype, "sublayers", void 0), e$1([r$2("sublayers", { layers: { type: [z] }, visibleLayers: { type: [T$1] } })], q.prototype, "writeSublayers", null), e$1([y$1({ type: ["show", "hide", "hide-children"] })], q.prototype, "listMode", void 0), e$1([y$1({ json: { read: false }, readOnly: true, value: "map-image" })], q.prototype, "type", void 0), e$1([y$1(f)], q.prototype, "url", void 0), q = e$1([n$3("esri.layers.MapImageLayer")], q);
const F = q;
export { F as default };
