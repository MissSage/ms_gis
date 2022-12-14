var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { cH as u, s as s$1, fH as n$1, h0 as C, a as r, l as f, k as e, h1 as p, h2 as c, h3 as v, h4 as O, h5 as w$1, g as s$3, aL as w$2, U, ds as I, $ as e$1, a0 as y, h6 as v$1, h7 as f$1, cD as o$1, a1 as n$2, e0 as b } from "./index.js";
import { s as s$2 } from "./ArcGISCachedService.js";
import "vue";
import "./TilemapCache.js";
class h {
  constructor(e2, t, s2, i, h2 = {}) {
    this._mainMethod = t, this._transferLists = s2, this._listeners = [], this._promise = u(e2, __spreadProps(__spreadValues({}, h2), { schedule: i })).then((e3) => {
      if (this._thread === void 0) {
        this._thread = e3, this._promise = null, h2.hasInitialize && this.broadcast({}, "initialize");
        for (const e4 of this._listeners)
          this._connectListener(e4);
      } else
        e3.close();
    }), this._promise.catch((t2) => s$1.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e2} worker: ${t2}`));
  }
  on(r$1, i) {
    const o2 = { removed: false, eventName: r$1, callback: i, threadHandle: null };
    return this._listeners.push(o2), this._connectListener(o2), n$1(() => {
      o2.removed = true, C(this._listeners, o2), this._thread && r(o2.threadHandle) && o2.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null;
  }
  invoke(e2, t) {
    return this.invokeMethod(this._mainMethod, e2, t);
  }
  invokeMethod(e2, t, r2) {
    if (this._thread) {
      const s2 = this._transferLists[e2], i = s2 ? s2(t) : [];
      return this._thread.invoke(e2, t, { transferList: i, signal: r2 });
    }
    return this._promise ? this._promise.then(() => (f(r2), this.invokeMethod(e2, t, r2))) : Promise.reject(null);
  }
  broadcast(e2, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e2)).then(() => {
    }) : this._promise ? this._promise.then(() => this.broadcast(e2, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e2) {
    this._thread && this._thread.on(e2.eventName, e2.callback).then((t) => {
      e2.removed || (e2.threadHandle = t);
    });
  }
}
class s extends h {
  constructor(e2 = null) {
    super("LercWorker", "_decode", { _decode: (e3) => [e3.buffer] }, e2, { strategy: "dedicated" }), this.schedule = e2, this.ref = 0;
  }
  decode(e2, r2, t) {
    return e2 && e2.byteLength !== 0 ? this.invoke({ buffer: e2, options: r2 }, t) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (o.forEach((e2, r2) => {
      e2 === this && o.delete(r2);
    }), this.destroy());
  }
}
const o = new Map();
function n(t = null) {
  let n2 = o.get(e(t));
  return n2 || (r(t) ? (n2 = new s((e2) => t.schedule(e2)), o.set(t, n2)) : (n2 = new s(), o.set(null, n2))), ++n2.ref, n2;
}
let j = class extends s$2(p(c(v(O(b))))) {
  constructor(...e2) {
    super(...e2), this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = n();
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  destroy() {
    this._lercDecoder = w$1(this._lercDecoder);
  }
  readVersion(e2, r2) {
    let t = r2.currentVersion;
    return t || (t = 9.3), t;
  }
  load(e2) {
    const r$1 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e3) => {
      for (let r2 = 0; r2 < e3.typeKeywords.length; r2++)
        if (e3.typeKeywords[r2].toLowerCase() === "elevation 3d layer")
          return true;
      throw new s$3("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e2).catch(w$2).then(() => this._fetchImageService(r$1))), Promise.resolve(this);
  }
  fetchTile(e2, t, o2, s2) {
    const a = r((s2 = s2 || { signal: null }).signal) ? s2.signal : s2.signal = new AbortController().signal, l = { responseType: "array-buffer", signal: a }, p2 = { noDataValue: s2.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e2, t, o2, s2)).then(() => U(this.getTileUrl(e2, t, o2), l)).then((e3) => this._lercDecoder.decode(e3.data, p2, a)).then((e3) => {
      var _a;
      return { values: e3.pixelData, width: e3.width, height: e3.height, maxZError: (_a = e3.fileInfo) == null ? void 0 : _a.maxZError, noDataValue: e3.noDataValue, minValue: e3.minValue, maxValue: e3.maxValue };
    });
  }
  getTileUrl(e2, r2, t) {
    const o2 = !this.tilemapCache && this.supportsBlankTile, i = I(__spreadProps(__spreadValues({}, this.parsedUrl.query), { blankTile: !o2 && null }));
    return `${this.parsedUrl.path}/tile/${e2}/${r2}/${t}${i ? "?" + i : ""}`;
  }
  async queryElevation(e2, r2) {
    const { ElevationQuery: t } = await import("./ElevationQuery.js");
    f(r2);
    return new t().query(this, e2, r2);
  }
  async createElevationSampler(e2, r2) {
    const { ElevationQuery: t } = await import("./ElevationQuery.js");
    f(r2);
    return new t().createSampler(this, e2, r2);
  }
  _fetchTileAvailability(e2, r2, t, o2) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e2, r2, t, o2) : Promise.resolve("unknown");
  }
  async _fetchImageService(e2) {
    var _a;
    if (this.sourceJSON)
      return this.sourceJSON;
    const t = { query: __spreadValues({ f: "json" }, this.parsedUrl.query), responseType: "json", signal: e2 }, o2 = await U(this.parsedUrl.path, t);
    o2.ssl && (this.url = (_a = this.url) == null ? void 0 : _a.replace(/^http:/i, "https:")), this.sourceJSON = o2.data, this.read(o2.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile.__isDefault__;
  }
};
e$1([y({ json: { read: { source: "copyrightText" } } })], j.prototype, "copyright", void 0), e$1([y({ readOnly: true, type: v$1 })], j.prototype, "heightModelInfo", void 0), e$1([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], j.prototype, "path", void 0), e$1([y({ type: ["show", "hide"] })], j.prototype, "listMode", void 0), e$1([y({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], j.prototype, "minScale", void 0), e$1([y({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], j.prototype, "maxScale", void 0), e$1([y({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], j.prototype, "opacity", void 0), e$1([y({ type: ["ArcGISTiledElevationServiceLayer"] })], j.prototype, "operationalLayerType", void 0), e$1([y()], j.prototype, "sourceJSON", void 0), e$1([y({ json: { read: false }, value: "elevation", readOnly: true })], j.prototype, "type", void 0), e$1([y(f$1)], j.prototype, "url", void 0), e$1([y()], j.prototype, "version", void 0), e$1([o$1("version", ["currentVersion"])], j.prototype, "readVersion", null), j = e$1([n$2("esri.layers.ElevationLayer")], j), j.prototype.fetchTile.__isDefault__ = true;
const w = j;
export { w as default };
