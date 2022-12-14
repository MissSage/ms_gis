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
import { $ as e$1, a0 as y, a1 as n$2, co as l$2, gp as T, dW as r, aX as y$1, h1 as p$3, h2 as c$1, h3 as v, i3 as t$1, h4 as O, ie as i$2, e0 as b, g2 as y$2, hU as o, a as r$1, aL as w, i7 as p$4, jE as i$3, g as s, ha as G, U, s as s$1, i9 as p$5, d4 as k, cD as o$1, ii as d$2, iE as c$2, dD as r$2, ia as s$2 } from "./index.js";
import { N as N$1, L } from "./SceneService.js";
import { c as a, d as d$1, b as a$1, a as a$2 } from "./PointCloudUniqueValueRenderer.js";
import "vue";
import "./originUtils.js";
import "./multiOriginJSONSupportUtils.js";
import "./resourceUtils.js";
let t = class extends l$2 {
  constructor(r2) {
    super(r2), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
e$1([y({ type: String, json: { write: { enabled: true, isRequired: true } } })], t.prototype, "field", void 0), e$1([y({ readOnly: true, nonNullable: true, json: { read: false } })], t.prototype, "type", void 0), t = e$1([n$2("esri.layers.pointCloudFilters.PointCloudFilter")], t);
const l$1 = t;
var d;
let p$2 = d = class extends l$1 {
  constructor(e2) {
    super(e2), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new d({ field: this.field, requiredClearBits: y$1(this.requiredClearBits), requiredSetBits: y$1(this.requiredSetBits) });
  }
};
e$1([y({ type: [T], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredSetBits };
} } } })], p$2.prototype, "requiredClearBits", void 0), e$1([y({ type: [T], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredClearBits };
} } } })], p$2.prototype, "requiredSetBits", void 0), e$1([r({ pointCloudBitfieldFilter: "bitfield" })], p$2.prototype, "type", void 0), p$2 = d = e$1([n$2("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], p$2);
const u$2 = p$2;
var n$1;
let p$1 = n$1 = class extends l$1 {
  constructor(r2) {
    super(r2), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new n$1({ field: this.field, includedReturns: y$1(this.includedReturns) });
  }
};
e$1([y({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: true, isRequired: true } } })], p$1.prototype, "includedReturns", void 0), e$1([r({ pointCloudReturnFilter: "return" })], p$1.prototype, "type", void 0), p$1 = n$1 = e$1([n$2("esri.layers.pointCloudFilters.PointCloudReturnFilter")], p$1);
const u$1 = p$1;
var p;
let l = p = class extends l$1 {
  constructor(e2) {
    super(e2), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new p({ field: this.field, mode: this.mode, values: y$1(this.values) });
  }
};
e$1([y({ type: ["exclude", "include"], json: { write: { enabled: true, isRequired: true } } })], l.prototype, "mode", void 0), e$1([r({ pointCloudValueFilter: "value" })], l.prototype, "type", void 0), e$1([y({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], l.prototype, "values", void 0), l = p = e$1([n$2("esri.layers.pointCloudFilters.PointCloudValueFilter")], l);
const u = l;
const e = { key: "type", base: l$1, typeMap: { value: u, bitfield: u$2, return: u$1 } };
var i$1;
let c = i$1 = class extends a {
  constructor(r2) {
    super(r2), this.type = "point-cloud-rgb", this.field = null;
  }
  clone() {
    return new i$1(__spreadProps(__spreadValues({}, this.cloneProperties()), { field: y$1(this.field) }));
  }
};
e$1([r({ pointCloudRGBRenderer: "point-cloud-rgb" })], c.prototype, "type", void 0), e$1([y({ type: String, json: { write: true } })], c.prototype, "field", void 0), c = i$1 = e$1([n$2("esri.renderers.PointCloudRGBRenderer")], c);
const n = c;
const i = { key: "type", base: a, typeMap: { "point-cloud-class-breaks": d$1, "point-cloud-rgb": n, "point-cloud-stretch": a$1, "point-cloud-unique-value": a$2 }, errorContext: "renderer" };
const A = s$2();
let N = class extends N$1(p$3(c$1(v(t$1(O(i$2(b))))))) {
  constructor(...e2) {
    super(...e2), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = true, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.fieldsIndex = null, this.outFields = null, this.path = null, this.legendEnabled = true, this.renderer = null, this.type = "point-cloud";
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  getFieldDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2 && r2.domain ? r2.domain : null;
  }
  readServiceFields(e2, r2, t2) {
    return Array.isArray(e2) ? e2.map((e3) => {
      const r3 = new y$2();
      return e3.type === "FieldTypeInteger" && ((e3 = y$1(e3)).type = "esriFieldTypeInteger"), r3.read(e3, t2), r3;
    }) : Array.isArray(r2.attributeStorageInfo) ? r2.attributeStorageInfo.map((e3) => new y$2({ name: e3.name, type: e3.name === "ELEVATION" ? "double" : "integer" })) : null;
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  writeRenderer(e2, r2, t2, o$12) {
    o("layerDefinition.drawingInfo.renderer", e2.write({}, o$12), r2);
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w).then(() => this._fetchService(r2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  createPopupTemplate(e2) {
    const r2 = p$4(this, e2);
    return r2 && (this._formatPopupTemplateReturnsField(r2), this._formatPopupTemplateRGBField(r2)), r2;
  }
  _formatPopupTemplateReturnsField(e2) {
    var _a;
    const r2 = this.fieldsIndex.get("RETURNS");
    if (!r2)
      return;
    const t2 = (_a = e2.fieldInfos) == null ? void 0 : _a.find((e3) => e3.fieldName === r2.name);
    if (!t2)
      return;
    const o2 = new i$3({ name: "pcl-returns-decoded", title: r2.alias || r2.name, expression: `
        var returnValue = $feature.${r2.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e2.expressionInfos = [...e2.expressionInfos || [], o2], t2.fieldName = "expression/pcl-returns-decoded";
  }
  _formatPopupTemplateRGBField(e2) {
    var _a;
    const r2 = this.fieldsIndex.get("RGB");
    if (!r2)
      return;
    const t2 = (_a = e2.fieldInfos) == null ? void 0 : _a.find((e3) => e3.fieldName === r2.name);
    if (!t2)
      return;
    const o2 = new i$3({ name: "pcl-rgb-decoded", title: r2.alias || r2.name, expression: `
        var rgb = $feature.${r2.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      ` });
    e2.expressionInfos = [...e2.expressionInfos || [], o2], t2.fieldName = "expression/pcl-rgb-decoded";
  }
  async queryCachedStatistics(e2, r2) {
    if (await this.load(r2), !this.attributeStorageInfo)
      throw new s("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const i2 = this.fieldsIndex.get(e2);
    if (!i2)
      throw new s("pointcloudlayer:field-unexisting", `Field '${e2}' does not exist on the layer`);
    for (const o2 of this.attributeStorageInfo)
      if (o2.name === i2.name) {
        const e3 = G(this.parsedUrl.path, `./statistics/${o2.key}`);
        return U(e3, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: r2 ? r2.signal : null }).then((e4) => e4.data);
      }
    throw new s("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e2, r2) {
    return this._debouncedSaveOperations(L.SAVE_AS, __spreadProps(__spreadValues({}, r2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }), e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
    return this._debouncedSaveOperations(L.SAVE, e2);
  }
  validateLayer(e2) {
    if (e2.layerType && e2.layerType !== "PointCloud")
      throw new s("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
    if (this.version.major > 2)
      throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
  }
  hasCachedStatistics(e2) {
    return this.attributeStorageInfo != null && this.attributeStorageInfo.some((r2) => r2.name === e2);
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    e2 && (e2.mode !== "absolute-height" && s$1.getLogger(this.declaredClass).warn(".elevationInfo=", "Point cloud layers only support absolute-height elevation mode"), e2.featureExpressionInfo && e2.featureExpressionInfo.expression !== "0" && s$1.getLogger(this.declaredClass).warn(".elevationInfo=", "Point cloud layers do not support featureExpressionInfo"));
  }
};
e$1([y({ type: ["PointCloudLayer"] })], N.prototype, "operationalLayerType", void 0), e$1([y(p$5)], N.prototype, "popupEnabled", void 0), e$1([y({ type: k, json: { name: "popupInfo", write: true } })], N.prototype, "popupTemplate", void 0), e$1([y({ readOnly: true, json: { read: false } })], N.prototype, "defaultPopupTemplate", null), e$1([y({ readOnly: true, json: { write: false, read: false, origins: { "web-document": { write: false, read: false } } } })], N.prototype, "opacity", void 0), e$1([y({ type: ["show", "hide"] })], N.prototype, "listMode", void 0), e$1([y({ types: [e], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: true } })], N.prototype, "filters", void 0), e$1([y({ type: [y$2] })], N.prototype, "fields", void 0), e$1([y(A.fieldsIndex)], N.prototype, "fieldsIndex", void 0), e$1([o$1("service", "fields", ["fields", "attributeStorageInfo"])], N.prototype, "readServiceFields", null), e$1([y(A.outFields)], N.prototype, "outFields", void 0), e$1([y({ readOnly: true })], N.prototype, "attributeStorageInfo", void 0), e$1([y(d$2)], N.prototype, "elevationInfo", null), e$1([y({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], N.prototype, "path", void 0), e$1([y(c$2)], N.prototype, "legendEnabled", void 0), e$1([y({ types: i, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: i }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], N.prototype, "renderer", void 0), e$1([r$2("renderer")], N.prototype, "writeRenderer", null), e$1([y({ json: { read: false }, readOnly: true })], N.prototype, "type", void 0), N = e$1([n$2("esri.layers.PointCloudLayer")], N);
const R = N;
export { R as default };
