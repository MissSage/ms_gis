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
import { $ as e, a0 as y, a1 as n, co as l, iK as n$1, iL as p$1, i2 as n$2, iM as a, i3 as t$1, i4 as p$2, h1 as p$3, h2 as c, h3 as v, h4 as O, iJ as o, e0 as b, aK as k, g as s, a as r, aL as w, iN as F, jH as o$1, s as s$1, j8 as C, d6 as p$4, gL as i$1, i7 as p$5, cO as x, U, iO as x$1, d_ as t$2, fU as x$2, cr as w$1, iP as m, iQ as j, iR as i$2, iE as c$1, gp as T, jN as I, jO as v$1, i9 as p$6, d4 as k$1, iT as p$7, i8 as n$3, cD as o$2, iU as l$1, h7 as f, jP as s$2, jQ as M, ia as s$3 } from "./index.js";
import "vue";
var t;
let i = t = class extends l {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new t({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
e([y({ type: Number, json: { write: true } })], i.prototype, "age", void 0), e([y({ type: Number, json: { write: true } })], i.prototype, "ageReceived", void 0), e([y({ type: Number, json: { write: true } })], i.prototype, "displayCount", void 0), e([y({ type: Number, json: { write: true } })], i.prototype, "maxObservations", void 0), i = t = e([n("esri.layers.support.PurgeOptions")], i);
const p = i;
const X = s$3();
let Y = class extends n$1(p$1(n$2(a(t$1(p$2(p$3(c(v(O(o(b))))))))))) {
  constructor(...e2) {
    super(...e2), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.popupEnabled = true, this.popupTemplate = null, this.purgeOptions = new p(), this.screenSizePerspectiveEnabled = true, this.sourceJSON = null, this.spatialReference = k.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.webSocketUrl = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    if (!("WebSocket" in globalThis))
      return this.addResolvingPromise(Promise.reject(new s("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const r$1 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, e2).catch(w).then(() => this._fetchService(r$1))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e2) {
    F(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  readRenderer(e2, r2, s2) {
    const n2 = (r2 = r2.layerDefinition || r2).drawingInfo && r2.drawingInfo.renderer || void 0;
    if (n2) {
      const e3 = o$1(n2, r2, s2) || void 0;
      return e3 || s$1.getLogger(this.declaredClass).error("Failed to create renderer", { rendererDefinition: r2.drawingInfo.renderer, layer: this, context: s2 }), e3;
    }
    if (r2.defaultSymbol)
      return r2.types && r2.types.length ? new C({ defaultSymbol: Z(r2.defaultSymbol, r2, s2), field: r2.typeIdField, uniqueValueInfos: r2.types.map((e3) => ({ id: e3.id, symbol: Z(e3.symbol, e3, s2) })) }) : new p$4({ symbol: Z(r2.defaultSymbol, r2, s2) });
  }
  async connect(e2) {
    const [{ createConnection: r2 }] = await Promise.all([import("./createConnection.js"), this.load()]), t2 = i$1.toJSON(this.geometryType), { customParameters: o2 = null, definitionExpression: i2 = null, geometryDefinition: s2 = null, maxReconnectionAttempts: n2 = 0, maxReconnectionInterval: p2 = 20, spatialReference: a2 = this.spatialReference } = e2 || this.createConnectionParameters();
    return r2(this.parsedUrl, this.spatialReference, a2, t2, { geometry: s2, where: i2 }, n2, p2, o2);
  }
  createConnectionParameters() {
    return { spatialReference: this.spatialReference, customParameters: this.customParameters, definitionExpression: this.definitionExpression, geometryDefinition: this.geometryDefinition, maxReconnectionAttempts: this.maxReconnectionAttempts, maxReconnectionInterval: this.maxReconnectionInterval };
  }
  createPopupTemplate(e2) {
    return p$5(this, e2);
  }
  createQuery() {
    const e2 = new x();
    return e2.returnGeometry = true, e2.outFields = ["*"], e2.where = this.definitionExpression || "1=1", e2;
  }
  getFieldDomain(e2, r2) {
    if (!this.fields)
      return null;
    let t2 = null;
    return this.fields.some((r3) => (r3.name === e2 && (t2 = r3.domain), !!t2)), t2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  serviceSupportsSpatialReference(e2) {
    return true;
  }
  async _fetchService(e2) {
    var _a, _b;
    if (!!this.webSocketUrl) {
      if (!((_a = this.timeInfo) == null ? void 0 : _a.trackIdField))
        throw new s("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
      if (!this.objectIdField)
        throw new s("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
      if (!this.fields)
        throw new s("stream-layer:missing-metadata", "The stream layer fields must be specified.");
      if (!this.geometryType)
        throw new s("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
      this.url = this.webSocketUrl;
    } else if (!this.sourceJSON) {
      const { data: r2 } = await U(this.parsedUrl.path, { query: __spreadValues(__spreadValues({ f: "json" }, this.customParameters), this.parsedUrl.query), responseType: "json", signal: e2 });
      this.sourceJSON = r2;
    }
    return this.sourceJSON = __spreadProps(__spreadValues({}, (_b = this.sourceJSON) != null ? _b : {}), { objectIdField: "__esri_stream_id__" }), this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl }), F(this.renderer, this.fieldsIndex), x$1(this.timeInfo, this.fieldsIndex), t$2(this, { origin: "service" });
  }
};
e([y({ type: String })], Y.prototype, "copyright", void 0), e([y({ readOnly: true })], Y.prototype, "defaultPopupTemplate", null), e([y({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], Y.prototype, "definitionExpression", void 0), e([y({ type: String })], Y.prototype, "displayField", void 0), e([y({ type: x$2 })], Y.prototype, "elevationInfo", void 0), e([y(X.fields)], Y.prototype, "fields", void 0), e([y(X.fieldsIndex)], Y.prototype, "fieldsIndex", void 0), e([y({ type: w$1 })], Y.prototype, "geometryDefinition", void 0), e([y({ type: i$1.apiValues, json: { read: { reader: i$1.read } } })], Y.prototype, "geometryType", void 0), e([y(m)], Y.prototype, "labelsVisible", void 0), e([y({ type: [j], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo", reader: i$2 }, write: { target: "layerDefinition.drawingInfo.labelingInfo" } } })], Y.prototype, "labelingInfo", void 0), e([y(c$1)], Y.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"] })], Y.prototype, "listMode", void 0), e([y({ type: T })], Y.prototype, "maxReconnectionAttempts", void 0), e([y({ type: T })], Y.prototype, "maxReconnectionInterval", void 0), e([y(I)], Y.prototype, "maxScale", void 0), e([y(v$1)], Y.prototype, "minScale", void 0), e([y({ type: String })], Y.prototype, "objectIdField", void 0), e([y({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], Y.prototype, "operationalLayerType", void 0), e([y(p$6)], Y.prototype, "popupEnabled", void 0), e([y({ type: k$1, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], Y.prototype, "popupTemplate", void 0), e([y({ type: p })], Y.prototype, "purgeOptions", void 0), e([y({ types: p$7, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: false } }, "web-scene": { name: "layerDefinition.drawingInfo.renderer", types: n$3, write: true } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], Y.prototype, "renderer", null), e([o$2("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), o$2("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], Y.prototype, "readRenderer", null), e([y(l$1)], Y.prototype, "screenSizePerspectiveEnabled", void 0), e([y()], Y.prototype, "sourceJSON", void 0), e([y({ type: k, json: { origins: { service: { read: { source: "spatialReference" } } } } })], Y.prototype, "spatialReference", void 0), e([y({ json: { read: false } })], Y.prototype, "type", void 0), e([y(f)], Y.prototype, "url", void 0), e([y({ type: Number })], Y.prototype, "updateInterval", void 0), e([y({ type: String })], Y.prototype, "webSocketUrl", void 0), Y = e([n("esri.layers.StreamLayer")], Y);
const Z = s$2({ types: M }), $ = Y;
export { $ as default };
