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
import { s, $ as e, a0 as y$1, a1 as n, hS as m, cY as x, a as r, cE as x$1, cr as w, g as s$1, t, aq as v, cH as u, h as has, gL as i, iI as c, iJ as o, iK as n$1, iL as p, i2 as n$2, iM as a, i3 as t$1, i4 as p$1, h2 as c$1, h3 as v$1, h4 as O, e0 as b, aK as k$1, aL as w$1, iN as F, iO as x$2, bO as j, i7 as p$2, cO as x$3, ii as d, g2 as y$2, ij as j$1, iP as m$1, iQ as j$2, iR as i$1, iE as c$2, iS as w$2, i9 as p$3, d4 as k$2, iT as p$4, i8 as n$3, iU as l$1, iV as p$5, iW as n$4, h7 as f$1, ia as s$2 } from "./index.js";
import { l } from "./clientSideDefaults.js";
import "vue";
import "./QueryEngineCapabilities.js";
const y = "esri.layers.graphics.sources.GeoJSONSource", f = s.getLogger(y);
let g = class extends m {
  constructor() {
    super(...arguments), this.type = "geojson", this.refresh = x(async (e2) => {
      await this.load();
      const { extent: t2, timeExtent: r2 } = await this._connection.invoke("refresh", e2);
      return this.sourceJSON.extent = t2, r2 && (this.sourceJSON.timeInfo.timeExtent = [r2.start, r2.end]), { dataChanged: true, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._startWorker(t2)), Promise.resolve(this);
  }
  destroy() {
    var _a;
    (_a = this._connection) == null ? void 0 : _a.close(), this._connection = null;
  }
  applyEdits(e2) {
    return this.load().then(() => this._applyEdits(e2));
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  queryFeatures(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryFeatures", e2 ? e2.toJSON() : null, t2)).then((e3) => x$1.fromJSON(e3));
  }
  queryFeaturesJSON(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryFeatures", e2 ? e2.toJSON() : null, t2));
  }
  queryFeatureCount(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryFeatureCount", e2 ? e2.toJSON() : null, t2));
  }
  queryObjectIds(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryObjectIds", e2 ? e2.toJSON() : null, t2));
  }
  queryExtent(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryExtent", e2 ? e2.toJSON() : null, t2)).then((e3) => ({ count: e3.count, extent: w.fromJSON(e3.extent) }));
  }
  querySnapping(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("querySnapping", e2, t2));
  }
  _applyEdits(e2) {
    if (!this._connection)
      throw new s$1("geojson-layer-source:edit-failure", "Memory source not loaded");
    const r2 = this.layer.objectIdField, o2 = [], s2 = [], i2 = [];
    if (e2.addFeatures)
      for (const t2 of e2.addFeatures)
        o2.push(this._serializeFeature(t2));
    if (e2.deleteFeatures)
      for (const t2 of e2.deleteFeatures)
        "objectId" in t2 && t2.objectId != null ? s2.push(t2.objectId) : "attributes" in t2 && t2.attributes[r2] != null && s2.push(t2.attributes[r2]);
    if (e2.updateFeatures)
      for (const t2 of e2.updateFeatures)
        i2.push(this._serializeFeature(t2));
    return this._connection.invoke("applyEdits", { adds: o2, updates: i2, deletes: s2 }).then(({ extent: e3, timeExtent: t2, featureEditResults: r3 }) => (this.sourceJSON.extent = e3, t2 && (this.sourceJSON.timeInfo.timeExtent = [t2.start, t2.end]), this._createEditsResult(r3)));
  }
  _createEditsResult(e2) {
    return { addFeatureResults: e2.addResults ? e2.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: e2.updateResults ? e2.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: e2.deleteResults ? e2.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] };
  }
  _createFeatureEditResult(e2) {
    const r2 = e2.success === true ? null : e2.error || { code: void 0, description: void 0 };
    return { objectId: e2.objectId, globalId: e2.globalId, error: r2 ? new s$1("geojson-layer-source:edit-failure", r2.description, { code: r2.code }) : null };
  }
  _serializeFeature(e2) {
    const { attributes: t2 } = e2, r2 = this._geometryForSerialization(e2);
    return r2 ? { geometry: r2.toJSON(), attributes: t2 } : { attributes: t2 };
  }
  _geometryForSerialization(e2) {
    const { geometry: t$12 } = e2;
    return t(t$12) ? null : t$12.type === "mesh" || t$12.type === "extent" ? v.fromExtent(t$12.extent) : t$12;
  }
  async _startWorker(e2) {
    this._connection = await u("GeoJSONSourceWorker", { strategy: has("feature-layers-workers") ? "dedicated" : "local", signal: e2 });
    const { fields: t2, spatialReference: r2, hasZ: o2, geometryType: s2, objectIdField: i$12, url: n2, timeInfo: u$1, customParameters: l$12 } = this.layer, d2 = this.layer.originOf("spatialReference") === "defaults", p2 = { url: n2, customParameters: l$12, fields: t2 && t2.map((e3) => e3.toJSON()), geometryType: i.toJSON(s2), hasZ: o2, objectIdField: i$12, timeInfo: u$1 ? u$1.toJSON() : null, spatialReference: d2 ? null : r2 && r2.toJSON() }, h = await this._connection.invoke("load", p2, { signal: e2 });
    for (const a2 of h.warnings)
      f.warn(a2.message, { layer: this.layer, warning: a2 });
    h.featureErrors.length && f.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`, h.featureErrors), this.sourceJSON = h.layerDefinition, this.capabilities = l(this.sourceJSON.hasZ, true);
  }
};
e([y$1()], g.prototype, "capabilities", void 0), e([y$1()], g.prototype, "type", void 0), e([y$1({ constructOnly: true })], g.prototype, "layer", void 0), e([y$1()], g.prototype, "sourceJSON", void 0), g = e([n(y)], g);
const Z = s$2();
let M = class extends c(o(n$1(p(n$2(a(t$1(p$1(c$1(v$1(O(b))))))))))) {
  constructor(e2) {
    super(e2), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.editingEnabled = false, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.objectIdField = null, this.operationalLayerType = "GeoJSON", this.popupEnabled = true, this.popupTemplate = null, this.screenSizePerspectiveEnabled = true, this.source = new g({ layer: this }), this.spatialReference = k$1.WGS84, this.templates = null, this.title = "GeoJSON", this.type = "geojson", this.typeIdField = null, this.types = null;
  }
  destroy() {
    var _a;
    (_a = this.source) == null ? void 0 : _a.destroy();
  }
  load(e2) {
    const t2 = this.loadFromPortal({ supportedTypes: ["GeoJson"], supportsData: false }, e2).catch(w$1).then(() => this.source.load(e2)).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo"], "service"), F(this.renderer, this.fieldsIndex), x$2(this.timeInfo, this.fieldsIndex);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get capabilities() {
    return this.source ? this.source.capabilities : null;
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  get parsedUrl() {
    return this.url ? j(this.url) : null;
  }
  set renderer(e2) {
    F(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  set url(e2) {
    if (!e2)
      return void this._set("url", e2);
    const t2 = j(e2);
    this._set("url", t2.path), t2.query && (this.customParameters = __spreadValues(__spreadValues({}, this.customParameters), t2.query));
  }
  async applyEdits(e2, t2) {
    const r2 = await import("./editingSupport.js");
    await this.load();
    const i2 = await r2.applyEdits(this, this.source, e2, t2);
    return this.read({ extent: this.source.sourceJSON.extent, timeInfo: this.source.sourceJSON.timeInfo }, { origin: "service", ignoreDefaults: true }), i2;
  }
  on(e2, t2) {
    return super.on(e2, t2);
  }
  createPopupTemplate(e2) {
    return p$2(this, e2);
  }
  createQuery() {
    const e2 = new x$3(), t2 = this.get("capabilities.data");
    e2.returnGeometry = true, t2 && t2.supportsZ && (e2.returnZ = true), e2.outFields = ["*"], e2.where = this.definitionExpression || "1=1";
    const { timeOffset: r2, timeExtent: i2 } = this;
    return e2.timeExtent = r2 != null && i2 != null ? i2.offset(-r2.value, r2.unit) : i2 || null, e2;
  }
  getFieldDomain(e2, t2) {
    let r2, i2 = false;
    const o2 = t2 && t2.feature, s2 = o2 && o2.attributes, p2 = this.typeIdField && s2 && s2[this.typeIdField];
    return p2 != null && this.types && (i2 = this.types.some((t3) => t3.id == p2 && (r2 = t3.domains && t3.domains[e2], r2 && r2.type === "inherited" && (r2 = this._getLayerDomain(e2)), true))), i2 || r2 || (r2 = this._getLayerDomain(e2)), r2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  queryFeatures(e2, t2) {
    return this.load().then(() => this.source.queryFeatures(x$3.from(e2) || this.createQuery(), t2)).then((e3) => {
      if (e3 == null ? void 0 : e3.features)
        for (const t3 of e3.features)
          t3.layer = t3.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, t2) {
    return this.load().then(() => this.source.queryObjectIds(x$3.from(e2) || this.createQuery(), t2));
  }
  queryFeatureCount(e2, t2) {
    return this.load().then(() => this.source.queryFeatureCount(x$3.from(e2) || this.createQuery(), t2));
  }
  queryExtent(e2, t2) {
    return this.load().then(() => this.source.queryExtent(x$3.from(e2) || this.createQuery(), t2));
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e2, updates: t2 } = await this.source.refresh(this.customParameters);
      return r(t2) && this.read(t2, { origin: "service", url: this.parsedUrl, ignoreDefaults: true }), e2;
    } catch {
    }
    return false;
  }
  _getLayerDomain(e2) {
    if (!this.fields)
      return null;
    let t2 = null;
    return this.fields.some((r2) => (r2.name === e2 && (t2 = r2.domain), !!t2)), t2;
  }
};
e([y$1({ readOnly: true, json: { read: false, write: false } })], M.prototype, "capabilities", null), e([y$1({ type: String })], M.prototype, "copyright", void 0), e([y$1({ readOnly: true })], M.prototype, "createQueryVersion", null), e([y$1({ readOnly: true })], M.prototype, "defaultPopupTemplate", null), e([y$1({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], M.prototype, "definitionExpression", void 0), e([y$1({ type: String })], M.prototype, "displayField", void 0), e([y$1({ type: Boolean })], M.prototype, "editingEnabled", void 0), e([y$1(d)], M.prototype, "elevationInfo", void 0), e([y$1({ type: [y$2], json: { name: "layerDefinition.fields", write: { ignoreOrigin: true, isRequired: true }, origins: { service: { name: "fields" } } } })], M.prototype, "fields", void 0), e([y$1(Z.fieldsIndex)], M.prototype, "fieldsIndex", void 0), e([y$1({ type: w, json: { name: "extent" } })], M.prototype, "fullExtent", void 0), e([y$1({ type: ["point", "polygon", "polyline", "multipoint"], json: { read: { reader: i.read } } })], M.prototype, "geometryType", void 0), e([y$1({ type: Boolean })], M.prototype, "hasZ", void 0), e([y$1(j$1)], M.prototype, "id", void 0), e([y$1({ type: Boolean, readOnly: true })], M.prototype, "isTable", null), e([y$1(m$1)], M.prototype, "labelsVisible", void 0), e([y$1({ type: [j$2], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$1 }, write: true } })], M.prototype, "labelingInfo", void 0), e([y$1(c$2)], M.prototype, "legendEnabled", void 0), e([y$1({ type: ["show", "hide"] })], M.prototype, "listMode", void 0), e([y$1({ type: String, json: { name: "layerDefinition.objectIdField", write: { ignoreOrigin: true, isRequired: true }, origins: { service: { name: "objectIdField" } } } })], M.prototype, "objectIdField", void 0), e([y$1(w$2)], M.prototype, "opacity", void 0), e([y$1({ type: ["GeoJSON"] })], M.prototype, "operationalLayerType", void 0), e([y$1({ readOnly: true })], M.prototype, "parsedUrl", null), e([y$1(p$3)], M.prototype, "popupEnabled", void 0), e([y$1({ type: k$2, json: { name: "popupInfo", write: true } })], M.prototype, "popupTemplate", void 0), e([y$1({ types: p$4, json: { name: "layerDefinition.drawingInfo.renderer", write: true, origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: n$3 } } } })], M.prototype, "renderer", null), e([y$1(l$1)], M.prototype, "screenSizePerspectiveEnabled", void 0), e([y$1({ readOnly: true })], M.prototype, "source", void 0), e([y$1({ type: k$1 })], M.prototype, "spatialReference", void 0), e([y$1({ type: [p$5] })], M.prototype, "templates", void 0), e([y$1()], M.prototype, "title", void 0), e([y$1({ json: { read: false }, readOnly: true })], M.prototype, "type", void 0), e([y$1({ type: String, readOnly: true })], M.prototype, "typeIdField", void 0), e([y$1({ type: [n$4] })], M.prototype, "types", void 0), e([y$1(f$1)], M.prototype, "url", null), M = e([n("esri.layers.GeoJSONLayer")], M);
const k = M;
export { k as default };
