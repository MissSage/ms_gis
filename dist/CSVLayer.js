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
import { $ as e, a0 as y, a1 as n, hS as m$1, cY as x, a as r, cE as x$1, cr as w, cH as u$1, h as has, cD as o, ir as p, is as f$1, hY as Ze, aK as k, aL as w$1, bO as j, cO as x$2, g as s } from "./index.js";
import { l } from "./clientSideDefaults.js";
import "vue";
import "./QueryEngineCapabilities.js";
let u = class extends m$1 {
  constructor(t) {
    super(t), this.type = "csv", this.refresh = x(async (t2) => {
      await this.load();
      const { extent: e2, timeExtent: o2 } = await this._connection.invoke("refresh", t2);
      return this.sourceJSON.extent = e2, o2 && (this.sourceJSON.timeInfo.timeExtent = [o2.start, o2.end]), { dataChanged: true, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(t) {
    const e2 = r(t) ? t.signal : null;
    return this.addResolvingPromise(this._startWorker(e2)), Promise.resolve(this);
  }
  destroy() {
    var _a;
    (_a = this._connection) == null ? void 0 : _a.close(), this._connection = null;
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(t, e2 = {}) {
    await this.load(e2);
    const o2 = await this._connection.invoke("queryFeatures", t ? t.toJSON() : null, e2);
    return x$1.fromJSON(o2);
  }
  async queryFeaturesJSON(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("queryFeatures", t ? t.toJSON() : null, e2);
  }
  async queryFeatureCount(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("queryFeatureCount", t ? t.toJSON() : null, e2);
  }
  async queryObjectIds(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("queryObjectIds", t ? t.toJSON() : null, e2);
  }
  async queryExtent(t, e2 = {}) {
    await this.load(e2);
    const o2 = await this._connection.invoke("queryExtent", t ? t.toJSON() : null, e2);
    return { count: o2.count, extent: w.fromJSON(o2.extent) };
  }
  async querySnapping(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("querySnapping", t, e2);
  }
  async _startWorker(t) {
    this._connection = await u$1("CSVSourceWorker", { strategy: has("feature-layers-workers") ? "dedicated" : "local", signal: t });
    const { url: e2, delimiter: o2, fields: r2, latitudeField: i, longitudeField: n2, spatialReference: a, timeInfo: c } = this.loadOptions, u2 = await this._connection.invoke("load", { url: e2, customParameters: this.customParameters, parsingOptions: { delimiter: o2, fields: r2 == null ? void 0 : r2.map((t2) => t2.toJSON()), latitudeField: i, longitudeField: n2, spatialReference: a == null ? void 0 : a.toJSON(), timeInfo: c == null ? void 0 : c.toJSON() } }, { signal: t });
    this.locationInfo = u2.locationInfo, this.sourceJSON = u2.layerDefinition, this.delimiter = u2.delimiter;
  }
};
e([y()], u.prototype, "type", void 0), e([y()], u.prototype, "loadOptions", void 0), e([y()], u.prototype, "customParameters", void 0), e([y()], u.prototype, "locationInfo", void 0), e([y()], u.prototype, "sourceJSON", void 0), e([y()], u.prototype, "delimiter", void 0), u = e([n("esri.layers.graphics.sources.CSVSource")], u);
function m(e2, r2) {
  throw new s(r2, `CSVLayer (title: ${e2.title}, id: ${e2.id}) cannot be saved to a portal item`);
}
let f = class extends Ze {
  constructor(...e2) {
    super(...e2), this.geometryType = "point", this.capabilities = l(false, false), this.delimiter = null, this.editingEnabled = false, this.fields = null, this.latitudeField = null, this.locationType = "coordinates", this.longitudeField = null, this.operationalLayerType = "CSV", this.outFields = ["*"], this.path = null, this.spatialReference = k.WGS84, this.source = null, this.type = "csv";
  }
  normalizeCtorArgs(e2, t) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t) : e2;
  }
  load(e2) {
    const t = r(e2) ? e2.signal : null, o2 = this.loadFromPortal({ supportedTypes: ["CSV"], supportsData: false }, e2).catch(w$1).then(async () => this.initLayerProperties(await this.createGraphicsSource(t)));
    return this.addResolvingPromise(o2), Promise.resolve(this);
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  readWebMapLabelsVisible(e2, t) {
    return t.showLabels != null ? t.showLabels : !!(t.layerDefinition && t.layerDefinition.drawingInfo && t.layerDefinition.drawingInfo.labelingInfo);
  }
  set url(e2) {
    if (!e2)
      return void this._set("url", e2);
    const t = j(e2);
    this._set("url", t.path), t.query && (this.customParameters = __spreadValues(__spreadValues({}, this.customParameters), t.query));
  }
  async createGraphicsSource(e2) {
    const t = new u({ loadOptions: { delimiter: this.delimiter, fields: this.fields, latitudeField: this.latitudeField, longitudeField: this.longitudeField, spatialReference: this.spatialReference, timeInfo: this.timeInfo, url: this.url }, customParameters: this.customParameters });
    return this._set("source", t), await t.load({ signal: e2 }), this.read({ locationInfo: t.locationInfo, columnDelimiter: t.delimiter }, { origin: "service", url: this.parsedUrl }), t;
  }
  queryFeatures(e2, t) {
    return this.load().then(() => this.source.queryFeatures(x$2.from(e2) || this.createQuery())).then((e3) => {
      if (e3 == null ? void 0 : e3.features)
        for (const t2 of e3.features)
          t2.layer = t2.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, t) {
    return this.load().then(() => this.source.queryObjectIds(x$2.from(e2) || this.createQuery()));
  }
  queryFeatureCount(e2, t) {
    return this.load().then(() => this.source.queryFeatureCount(x$2.from(e2) || this.createQuery()));
  }
  queryExtent(e2, t) {
    return this.load().then(() => this.source.queryExtent(x$2.from(e2) || this.createQuery()));
  }
  read(e2, t) {
    super.read(e2, t), t && t.origin === "service" && this.revert(["latitudeField", "longitudeField"], "service");
  }
  write(e2, t) {
    return super.write(e2, __spreadProps(__spreadValues({}, t), { writeLayerSchema: true }));
  }
  clone() {
    throw new s("csv-layer:clone", `CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);
  }
  async save(e2) {
    return m(this, "csv-layer:save");
  }
  async saveAs(e2, t) {
    return m(this, "csv-layer:save-as");
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e2, updates: t } = await this.source.refresh(this.customParameters);
      return r(t) && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: true }), e2;
    } catch {
    }
    return false;
  }
  _verifyFields() {
  }
  _verifySource() {
  }
  _hasMemorySource() {
    return false;
  }
};
e([y({ readOnly: true, json: { read: false, write: false } })], f.prototype, "capabilities", void 0), e([y({ type: [",", " ", ";", "|", "	"], json: { read: { source: "columnDelimiter" }, write: { target: "columnDelimiter", ignoreOrigin: true } } })], f.prototype, "delimiter", void 0), e([y({ readOnly: true, type: Boolean, json: { origins: { "web-scene": { read: false, write: false } } } })], f.prototype, "editingEnabled", void 0), e([y({ json: { read: { source: "layerDefinition.fields" }, write: { target: "layerDefinition.fields" } } })], f.prototype, "fields", void 0), e([y({ type: Boolean, readOnly: true })], f.prototype, "isTable", null), e([o("web-map", "labelsVisible", ["layerDefinition.drawingInfo.labelingInfo", "showLabels"])], f.prototype, "readWebMapLabelsVisible", null), e([y({ type: String, json: { read: { source: "locationInfo.latitudeFieldName" }, write: { target: "locationInfo.latitudeFieldName", ignoreOrigin: true } } })], f.prototype, "latitudeField", void 0), e([y({ type: ["show", "hide"] })], f.prototype, "listMode", void 0), e([y({ type: ["coordinates"], json: { read: { source: "locationInfo.locationType" }, write: { target: "locationInfo.locationType", ignoreOrigin: true, isRequired: true } } })], f.prototype, "locationType", void 0), e([y({ type: String, json: { read: { source: "locationInfo.longitudeFieldName" }, write: { target: "locationInfo.longitudeFieldName", ignoreOrigin: true } } })], f.prototype, "longitudeField", void 0), e([y({ type: ["CSV"] })], f.prototype, "operationalLayerType", void 0), e([y()], f.prototype, "outFields", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: false, write: false } }, read: false, write: false } })], f.prototype, "path", void 0), e([y({ json: { read: false }, cast: null, type: u, readOnly: true })], f.prototype, "source", void 0), e([y({ json: { read: false }, value: "csv", readOnly: true })], f.prototype, "type", void 0), e([y({ json: { read: p, write: { isRequired: true, ignoreOrigin: true, writer: f$1 } } })], f.prototype, "url", null), f = e([n("esri.layers.CSVLayer")], f);
const g = f;
export { g as default };
