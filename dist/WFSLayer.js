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
import { Y as a, hS as m, cY as x, a as r, cE as x$1, cr as w, g as s, k as e, gL as i, cs as E, cH as u, h as has, $ as e$1, a0 as y, a1 as n, iI as c, iJ as o$1, iK as n$1, iL as p, i2 as n$2, iM as a$1, i4 as p$1, i3 as t, h2 as c$1, h3 as v, h4 as O, e0 as b, aK as k$1, iN as F$1, iO as x$2, g2 as y$1, hU as o$2, bO as j, i7 as p$2, cO as x$3, ii as d, dD as r$1, iP as m$1, iQ as j$1, iR as i$1, iE as c$2, gp as T, kk as u$1, i9 as p$3, d4 as k$2, iT as p$4, i8 as n$3, iU as l$1, h7 as f, ia as s$1 } from "./index.js";
import { l, o } from "./clientSideDefaults.js";
import { D, X, z, W, C } from "./wfsUtils.js";
import "vue";
import "./QueryEngineCapabilities.js";
import "./geojson.js";
import "./xmlUtils.js";
let F = class extends a(m) {
  constructor() {
    super(...arguments), this._connection = null, this.capabilities = l(false, false), this.type = "wfs", this.refresh = x(async (e2) => {
      await this.load();
      const { extent: t2 } = await this._connection.invoke("refresh", e2);
      return t2 && (this.sourceJSON.extent = t2), { dataChanged: true, updates: { extent: this.sourceJSON.extent } };
    });
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._startWorker({ signal: t2 })), Promise.resolve(this);
  }
  destroy() {
    var _a;
    (_a = this._connection) == null ? void 0 : _a.close(), this._connection = null;
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(e2, t2 = {}) {
    await this.load(t2);
    const r2 = await this._connection.invoke("queryFeatures", e2 ? e2.toJSON() : null, t2);
    return x$1.fromJSON(r2);
  }
  async queryFeaturesJSON(e2, t2 = {}) {
    return await this.load(t2), this._connection.invoke("queryFeatures", e2 ? e2.toJSON() : null, t2);
  }
  async queryFeatureCount(e2, t2 = {}) {
    return await this.load(t2), this._connection.invoke("queryFeatureCount", e2 ? e2.toJSON() : null, t2);
  }
  async queryObjectIds(e2, t2 = {}) {
    return await this.load(t2), this._connection.invoke("queryObjectIds", e2 ? e2.toJSON() : null, t2);
  }
  async queryExtent(e2, t2 = {}) {
    await this.load(t2);
    const r2 = await this._connection.invoke("queryExtent", e2 ? e2.toJSON() : null, t2);
    return { count: r2.count, extent: w.fromJSON(r2.extent) };
  }
  async querySnapping(e2, t2 = {}) {
    return await this.load(t2), this._connection.invoke("querySnapping", e2, t2);
  }
  async _createLoadOptions(e$12) {
    var _a, _b;
    const { url: r2, customParameters: o2, name: s$12, namespaceUri: i$12, spatialReference: n2, fields: c2, geometryType: p2, swapXY: l2 } = this.layer;
    if (!r2)
      throw new s("wfs-layer:missing-url", "WFSLayer must be created with a url");
    this.wfsCapabilities || (this.wfsCapabilities = await D(r2, __spreadValues({ customParameters: o2 }, e$12)));
    const m2 = ["fields", "geometryType", "name", "namespaceUri", "spatialReference", "swapXY"].some((e2) => this.layer[e2] == null), y2 = m2 ? await X(this.wfsCapabilities, s$12, i$12, { spatialReference: n2, customParameters: o2, signal: e$12 == null ? void 0 : e$12.signal }) : __spreadProps(__spreadValues({}, z(c2 != null ? c2 : [])), { geometryType: p2, name: s$12, namespaceUri: i$12, spatialReference: n2, swapXY: l2 }), g = e(W(this.wfsCapabilities.readFeatureTypes(), y2.name, y2.namespaceUri)), S = i.toJSON(y2.geometryType);
    return { customParameters: o2, featureType: g, fields: (_b = (_a = y2.fields) == null ? void 0 : _a.map((e2) => e2.toJSON())) != null ? _b : [], geometryField: y2.geometryField, geometryType: S, getFeatureUrl: this.wfsCapabilities.operations.GetFeature.url, getFeatureOutputFormat: this.wfsCapabilities.operations.GetFeature.outputFormat, objectIdField: y2.objectIdField, spatialReference: y2.spatialReference.toJSON(), swapXY: !!y2.swapXY };
  }
  async _startWorker(e2) {
    const [t2, r2] = await E([this._createLoadOptions(e2), u("WFSSourceWorker", __spreadProps(__spreadValues({}, e2), { strategy: has("feature-layers-workers") ? "dedicated" : "local" }))]), o$12 = t2.error || r2.error || null, s2 = r2.value || null;
    if (o$12)
      throw s2 && s2.close(), o$12;
    const a2 = t2.value;
    this._connection = r2.value;
    const { extent: i2 } = await this._connection.invoke("load", a2, e2);
    this.sourceJSON = { extent: i2, fields: a2.fields, geometryType: a2.geometryType, objectIdField: a2.objectIdField, geometryField: a2.geometryField, drawingInfo: o(a2.geometryType), name: a2.featureType.title, wfsInfo: { name: a2.featureType.name, featureUrl: a2.getFeatureUrl, maxFeatures: 3e3, swapXY: a2.swapXY, supportedSpatialReferences: a2.featureType.supportedSpatialReferences, version: "2.0.0", wfsNamespace: a2.featureType.namespaceUri } };
  }
};
e$1([y()], F.prototype, "capabilities", void 0), e$1([y({ constructOnly: true })], F.prototype, "layer", void 0), e$1([y()], F.prototype, "sourceJSON", void 0), e$1([y()], F.prototype, "type", void 0), e$1([y()], F.prototype, "wfsCapabilities", void 0), F = e$1([n("esri.layers.graphics.sources.WFSSource")], F);
var J;
const M = s$1();
let _ = J = class extends c(o$1(n$1(p(n$2(a$1(p$1(t(c$1(v(O(b))))))))))) {
  constructor(e2) {
    super(e2), this.copyright = null, this.customParameters = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.featureUrl = void 0, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.objectIdField = null, this.operationalLayerType = "WFS", this.maxFeatures = 3e3, this.mode = 0, this.name = null, this.namespaceUri = null, this.outFields = null, this.popupEnabled = true, this.popupTemplate = null, this.screenSizePerspectiveEnabled = true, this.source = new F({ layer: this }), this.spatialReference = k$1.WGS84, this.spatialReferences = [4326], this.swapXY = void 0, this.title = "WFS", this.type = "wfs", this.url = null, this.version = void 0;
  }
  static fromWFSLayerInfo(e2) {
    const { customParameters: r2, fields: t2, geometryField: i2, geometryType: o2, name: s2, namespaceUri: n2, objectIdField: p2, spatialReference: a2, swapXY: l2, url: d2, wfsCapabilities: m2 } = e2;
    return new J({ customParameters: r2, fields: t2, geometryField: i2, geometryType: o2, name: s2, namespaceUri: n2, objectIdField: p2, spatialReference: a2, swapXY: l2, url: d2, wfsCapabilities: m2 });
  }
  destroy() {
    var _a;
    (_a = this.source) == null ? void 0 : _a.destroy();
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WFS"] }, e2).then(() => this.source.load(e2)).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo", "spatialReference", "name", "namespaceUri"], "service"), F$1(this.renderer, this.fieldsIndex), x$2(this.timeInfo, this.fieldsIndex);
    })), Promise.resolve(this);
  }
  get capabilities() {
    var _a;
    return (_a = this.source) == null ? void 0 : _a.capabilities;
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  writeFields(e2, r2, t2) {
    const i2 = e2.filter((e3) => e3.name !== C);
    this.geometryField && i2.unshift(new y$1({ name: this.geometryField, alias: this.geometryField, type: "geometry" })), o$2(t2, i2.map((e3) => e3.toJSON()), r2);
  }
  get parsedUrl() {
    return j(this.url);
  }
  set renderer(e2) {
    F$1(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  get wfsCapabilities() {
    var _a;
    return (_a = this.source) == null ? void 0 : _a.wfsCapabilities;
  }
  set wfsCapabilities(e2) {
    this.source && (this.source.wfsCapabilities = e2);
  }
  createPopupTemplate(e2) {
    return p$2(this, e2);
  }
  createQuery() {
    const e2 = new x$3();
    e2.returnGeometry = true, e2.outFields = ["*"], e2.where = this.definitionExpression || "1=1";
    const { timeOffset: r2, timeExtent: t2 } = this;
    return e2.timeExtent = r2 != null && t2 != null ? t2.offset(-r2.value, r2.unit) : t2 || null, e2;
  }
  getFieldDomain(e2, r2) {
    var _a;
    return (_a = this.getField(e2)) == null ? void 0 : _a.domain;
  }
  getField(e2) {
    var _a;
    return (_a = this.fieldsIndex) == null ? void 0 : _a.get(e2);
  }
  queryFeatures(e2, r2) {
    return this.load().then(() => this.source.queryFeatures(x$3.from(e2) || this.createQuery(), r2)).then((e3) => {
      if (e3 == null ? void 0 : e3.features)
        for (const r3 of e3.features)
          r3.layer = r3.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, r2) {
    return this.load().then(() => this.source.queryObjectIds(x$3.from(e2) || this.createQuery(), r2));
  }
  queryFeatureCount(e2, r2) {
    return this.load().then(() => this.source.queryFeatureCount(x$3.from(e2) || this.createQuery(), r2));
  }
  queryExtent(e2, r2) {
    return this.load().then(() => this.source.queryExtent(x$3.from(e2) || this.createQuery(), r2));
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e2, updates: r$12 } = await this.source.refresh(this.customParameters);
      return r(r$12) && this.read(r$12, { origin: "service", url: this.parsedUrl, ignoreDefaults: true }), e2;
    } catch {
    }
    return false;
  }
};
e$1([y({ readOnly: true })], _.prototype, "capabilities", null), e$1([y({ type: String })], _.prototype, "copyright", void 0), e$1([y({ readOnly: true })], _.prototype, "createQueryVersion", null), e$1([y({ json: { name: "wfsInfo.customParameters", write: { ignoreOrigin: true } } })], _.prototype, "customParameters", void 0), e$1([y({ readOnly: true })], _.prototype, "defaultPopupTemplate", null), e$1([y({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], _.prototype, "definitionExpression", void 0), e$1([y({ type: String })], _.prototype, "displayField", void 0), e$1([y(d)], _.prototype, "elevationInfo", void 0), e$1([y({ type: String, readOnly: true, json: { name: "wfsInfo.featureUrl", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "featureUrl", void 0), e$1([y({ type: [y$1], json: { name: "layerDefinition.fields", write: { ignoreOrigin: true, isRequired: true }, origins: { service: { name: "fields" } } } })], _.prototype, "fields", void 0), e$1([r$1("fields")], _.prototype, "writeFields", null), e$1([y(M.fieldsIndex)], _.prototype, "fieldsIndex", void 0), e$1([y({ type: w, json: { name: "extent" } })], _.prototype, "fullExtent", void 0), e$1([y()], _.prototype, "geometryField", void 0), e$1([y({ type: String, json: { read: { source: "layerDefinition.geometryType", reader: i.read }, write: { target: "layerDefinition.geometryType", writer: i.write, ignoreOrigin: true }, origins: { service: { read: i.read } } } })], _.prototype, "geometryType", void 0), e$1([y({ type: String })], _.prototype, "id", void 0), e$1([y(m$1)], _.prototype, "labelsVisible", void 0), e$1([y({ type: [j$1], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$1 }, write: true } })], _.prototype, "labelingInfo", void 0), e$1([y(c$2)], _.prototype, "legendEnabled", void 0), e$1([y({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), e$1([y({ type: String })], _.prototype, "objectIdField", void 0), e$1([y({ type: ["WFS"] })], _.prototype, "operationalLayerType", void 0), e$1([y({ type: T, json: { name: "wfsInfo.maxFeatures", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "maxFeatures", void 0), e$1([y({ type: [0], readOnly: true, json: { origins: { "web-map": { write: { ignoreOrigin: true, isRequired: true } } } } })], _.prototype, "mode", void 0), e$1([y({ type: String, json: { name: "wfsInfo.name", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "name", void 0), e$1([y({ type: String, json: { name: "wfsInfo.wfsNamespace", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "namespaceUri", void 0), e$1([y(u$1)], _.prototype, "opacity", void 0), e$1([y(M.outFields)], _.prototype, "outFields", void 0), e$1([y({ readOnly: true })], _.prototype, "parsedUrl", null), e$1([y(p$3)], _.prototype, "popupEnabled", void 0), e$1([y({ type: k$2, json: { name: "popupInfo", write: true } })], _.prototype, "popupTemplate", void 0), e$1([y({ types: p$4, json: { origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: n$3, name: "layerDefinition.drawingInfo.renderer", write: true } }, name: "layerDefinition.drawingInfo.renderer", write: { ignoreOrigin: true } } })], _.prototype, "renderer", null), e$1([y(l$1)], _.prototype, "screenSizePerspectiveEnabled", void 0), e$1([y({ readOnly: true })], _.prototype, "source", void 0), e$1([y({ type: k$1, json: { name: "layerDefinition.spatialReference", write: { ignoreOrigin: true, isRequired: true }, origins: { service: { name: "extent.spatialReference" } } } })], _.prototype, "spatialReference", void 0), e$1([y({ readOnly: true, type: [T], json: { name: "wfsInfo.supportedSpatialReferences", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "spatialReferences", void 0), e$1([y({ type: Boolean, value: false, json: { name: "wfsInfo.swapXY", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "swapXY", void 0), e$1([y({ json: { write: { ignoreOrigin: true, isRequired: true }, origins: { service: { name: "name" } } } })], _.prototype, "title", void 0), e$1([y({ json: { read: false }, readOnly: true })], _.prototype, "type", void 0), e$1([y(f)], _.prototype, "url", void 0), e$1([y({ type: String, readOnly: true, json: { name: "wfsInfo.version", write: { ignoreOrigin: true, isRequired: true } } })], _.prototype, "version", void 0), e$1([y()], _.prototype, "wfsCapabilities", null), _ = J = e$1([n("esri.layers.WFSLayer")], _);
const k = _;
export { k as default };
