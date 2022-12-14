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
import { aG as s, i5 as S, $ as e$1, a0 as y$1, cD as o, gp as T, i6 as y$2, a1 as n$4, s as s$1, hS as m$4, cB as m$5, c9 as r, a as r$1, hY as Ze, i7 as p$7, U, cO as x, cN as v, g as s$3, cC as g, t as t$4, cr as w, aK as k, fU as x$1, i8 as n$6, i9 as p$8, d4 as k$1, dW as r$2, ck as s$5, ia as s$6, cx as j, ib as t$5, ic as i$2, co as l$6, aX as y$3, id as t$6, i0 as n$7, h1 as p$9, h2 as c$5, h3 as v$1, i3 as t$7, h4 as O, ie as i$3, e0 as b, dS as l$7, ha as G, aL as w$1, ig as n$8, ih as b$1, ii as d$4 } from "./index.js";
import { t as t$3, y as ye, l as l$8 } from "./FetchAssociatedFeatureLayer.js";
import { n as n$5, N as N$1, L } from "./SceneService.js";
import { s as s$4, l as l$5, u as u$4, m as m$6 } from "./I3SLayerDefinitions.js";
import { d as d$3, s as s$2 } from "./popupUtils.js";
import "vue";
import "./mat3f64.js";
import "./mat4f64.js";
import "./quat.js";
import "./quatf64.js";
import "./I3SBinaryReader.js";
import "./VertexAttribute.js";
import "./symbolColorUtils.js";
import "./vec3f32.js";
import "./plane.js";
import "./sphere.js";
import "./originUtils.js";
import "./multiOriginJSONSupportUtils.js";
import "./resourceUtils.js";
let l$4 = class extends s(S) {
  constructor(e2) {
    super(e2), this.title = "", this.id = -1, this.modelName = null, this.isEmpty = null, this.visible = true, this.opacity = 1;
  }
  readTitle(e2, r2) {
    return typeof r2.alias == "string" ? r2.alias : typeof r2.name == "string" ? r2.name : "";
  }
  readIdOnlyOnce(e2) {
    return this.id !== -1 ? this.id : typeof e2 == "number" ? e2 : -1;
  }
};
e$1([y$1({ type: String, json: { origins: { "web-scene": { write: true }, "portal-item": { write: true } } } })], l$4.prototype, "title", void 0), e$1([o("service", "title", ["alias", "name"])], l$4.prototype, "readTitle", null), e$1([y$1()], l$4.prototype, "layer", void 0), e$1([y$1({ type: T, readOnly: true, json: { read: false, write: { ignoreOrigin: true } } })], l$4.prototype, "id", void 0), e$1([o("service", "id")], l$4.prototype, "readIdOnlyOnce", null), e$1([y$1(y$2(String))], l$4.prototype, "modelName", void 0), e$1([y$1(y$2(Boolean))], l$4.prototype, "isEmpty", void 0), e$1([y$1({ type: Boolean, json: { name: "visibility", write: true } })], l$4.prototype, "visible", void 0), e$1([y$1({ type: Number, json: { write: true } })], l$4.prototype, "opacity", void 0), l$4 = e$1([n$4("esri.layers.buildingSublayers.BuildingSublayer")], l$4);
const n$3 = l$4;
const A = "esri.layers.buildingSublayers.BuildingComponentSublayer", _ = s$1.getLogger(A), C$1 = s$6();
let N = class extends m$4.LoadableMixin(m$5(n$3)) {
  constructor(e2) {
    super(e2), this.type = "building-component", this.nodePages = null, this.materialDefinitions = [], this.textureSetDefinitions = [], this.geometryDefinitions = [], this.indexInfo = null, this.serviceUpdateTimeStamp = null, this.store = null, this.attributeStorageInfo = [], this.fields = [], this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = true, this.popupTemplate = null, this.layerType = "3d-object";
  }
  get parsedUrl() {
    var _a, _b;
    return this.layer ? { path: `${(_a = this.layer.parsedUrl) == null ? void 0 : _a.path}/sublayers/${this.id}`, query: (_b = this.layer.parsedUrl) == null ? void 0 : _b.query } : { path: "" };
  }
  get fieldsIndex() {
    return new r(this.fields);
  }
  readAssociatedLayer(e2, r2) {
    const t2 = this.layer.associatedFeatureServiceItem, o2 = r2.associatedLayerID;
    return r$1(t2) && typeof o2 == "number" ? new Ze({ portalItem: t2, layerId: o2 }) : null;
  }
  get objectIdField() {
    if (this.fields != null) {
      for (const e2 of this.fields)
        if (e2.type === "oid")
          return e2.name;
    }
    return null;
  }
  get displayField() {
    return r$1(this.associatedLayer) ? this.associatedLayer.displayField : void 0;
  }
  get apiKey() {
    return this.layer.apiKey;
  }
  get fullExtent() {
    return this.layer.fullExtent;
  }
  get spatialReference() {
    return this.layer.spatialReference;
  }
  get version() {
    return this.layer.version;
  }
  get elevationInfo() {
    return this.layer.elevationInfo;
  }
  get minScale() {
    return this.layer.minScale;
  }
  get maxScale() {
    return this.layer.maxScale;
  }
  get effectiveScaleRange() {
    return this.layer.effectiveScaleRange;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null, t2 = this._fetchService(r2).then(() => {
      this.indexInfo = n$5(this.parsedUrl.path, this.rootNode, this.nodePages, this.apiKey, _, r2);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  createPopupTemplate(e2) {
    return p$7(this, e2);
  }
  async _fetchService(e2) {
    const r2 = (await U(this.parsedUrl.path, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e2 })).data;
    this.read(r2, { origin: "service", url: this.parsedUrl });
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2, r2) {
    var _a, _b, _c, _d;
    const t2 = (_b = (_a = this.getFeatureType(r2 == null ? void 0 : r2.feature)) == null ? void 0 : _a.domains) == null ? void 0 : _b[e2];
    return t2 && t2.type !== "inherited" ? t2 : (_d = (_c = this.getField(e2)) == null ? void 0 : _c.domain) != null ? _d : null;
  }
  getFeatureType(e2) {
    return e2 && r$1(this.associatedLayer) ? this.associatedLayer.getFeatureType(e2) : null;
  }
  get types() {
    var _a;
    return r$1(this.associatedLayer) ? (_a = this.associatedLayer.types) != null ? _a : [] : [];
  }
  get typeIdField() {
    return r$1(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }
  get geometryType() {
    return this.layerType === "3d-object" ? "mesh" : "point";
  }
  get profile() {
    return this.layerType === "3d-object" ? "mesh-pyramids" : "points";
  }
  get capabilities() {
    const e2 = r$1(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : t$3, { query: r2, data: { supportsZ: t2, supportsM: o2, isVersioned: s2 } } = e2;
    return { query: r2, data: { supportsZ: t2, supportsM: o2, isVersioned: s2 } };
  }
  createQuery() {
    const e2 = new x();
    return this.geometryType !== "mesh" && (e2.returnGeometry = true, e2.returnZ = true), e2.where = this.definitionExpression || "1=1", e2.sqlFormat = "standard", e2;
  }
  queryExtent(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryExtent(e2 || this.createQuery(), r2));
  }
  queryFeatureCount(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryFeatureCount(e2 || this.createQuery(), r2));
  }
  queryFeatures(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryFeatures(e2 || this.createQuery(), r2)).then((e3) => {
      if (e3 == null ? void 0 : e3.features)
        for (const r3 of e3.features)
          r3.layer = this.layer, r3.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryObjectIds(e2 || this.createQuery(), r2));
  }
  async queryCachedAttributes(e2, r2) {
    const t2 = v(this.fieldsIndex, await d$3(this, s$2(this)));
    return ye(this.parsedUrl.path, this.attributeStorageInfo, e2, r2, t2);
  }
  async queryCachedFeature(e2, t2) {
    const o2 = await this.queryCachedAttributes(e2, [t2]);
    if (!o2 || o2.length === 0)
      throw new s$3("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    const s2 = new g();
    return s2.attributes = o2[0], s2.layer = this, s2.sourceLayer = this, s2;
  }
  getFieldUsageInfo(e2) {
    return this.fieldsIndex.has(e2) ? { supportsLabelingInfo: false, supportsRenderer: false, supportsPopupTemplate: false, supportsLayerQuery: false } : { supportsLabelingInfo: false, supportsRenderer: true, supportsPopupTemplate: true, supportsLayerQuery: r$1(this.associatedLayer) };
  }
  _getAssociatedLayerForQuery() {
    const e2 = this.associatedLayer;
    return r$1(e2) && e2.loaded ? Promise.resolve(e2) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), t$4(this.associatedLayer))
      throw new s$3("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e2) {
      throw new s$3("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", { layer: this, error: e2 });
    }
    return this.associatedLayer;
  }
};
e$1([y$1({ readOnly: true })], N.prototype, "parsedUrl", null), e$1([y$1({ type: s$4, readOnly: true })], N.prototype, "nodePages", void 0), e$1([y$1({ type: [l$5], readOnly: true })], N.prototype, "materialDefinitions", void 0), e$1([y$1({ type: [u$4], readOnly: true })], N.prototype, "textureSetDefinitions", void 0), e$1([y$1({ type: [m$6], readOnly: true })], N.prototype, "geometryDefinitions", void 0), e$1([y$1({ readOnly: true })], N.prototype, "serviceUpdateTimeStamp", void 0), e$1([y$1({ readOnly: true })], N.prototype, "store", void 0), e$1([y$1({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], N.prototype, "rootNode", void 0), e$1([y$1({ readOnly: true })], N.prototype, "attributeStorageInfo", void 0), e$1([y$1(C$1.fields)], N.prototype, "fields", void 0), e$1([y$1({ readOnly: true })], N.prototype, "fieldsIndex", null), e$1([y$1({ readOnly: true, type: Ze })], N.prototype, "associatedLayer", void 0), e$1([o("service", "associatedLayer", ["associatedLayerID"])], N.prototype, "readAssociatedLayer", null), e$1([y$1(C$1.outFields)], N.prototype, "outFields", void 0), e$1([y$1({ type: String, readOnly: true })], N.prototype, "objectIdField", null), e$1([y$1({ readOnly: true, type: String, json: { read: false } })], N.prototype, "displayField", null), e$1([y$1({ readOnly: true, type: String })], N.prototype, "apiKey", null), e$1([y$1({ readOnly: true, type: w })], N.prototype, "fullExtent", null), e$1([y$1({ readOnly: true, type: k })], N.prototype, "spatialReference", null), e$1([y$1({ readOnly: true })], N.prototype, "version", null), e$1([y$1({ readOnly: true, type: x$1 })], N.prototype, "elevationInfo", null), e$1([y$1({ readOnly: true, type: Number })], N.prototype, "minScale", null), e$1([y$1({ readOnly: true, type: Number })], N.prototype, "maxScale", null), e$1([y$1({ readOnly: true, type: Number })], N.prototype, "effectiveScaleRange", null), e$1([y$1({ type: ["hide", "show"], json: { write: true } })], N.prototype, "listMode", void 0), e$1([y$1({ types: n$6, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: true }, value: null })], N.prototype, "renderer", void 0), e$1([y$1({ type: String, json: { origins: { service: { read: false, write: false } }, name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], N.prototype, "definitionExpression", void 0), e$1([y$1(p$8)], N.prototype, "popupEnabled", void 0), e$1([y$1({ type: k$1, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], N.prototype, "popupTemplate", void 0), e$1([y$1({ readOnly: true, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: false } })], N.prototype, "normalReferenceFrame", void 0), e$1([y$1({ readOnly: true, json: { read: false } })], N.prototype, "defaultPopupTemplate", null), e$1([y$1()], N.prototype, "types", null), e$1([y$1()], N.prototype, "typeIdField", null), e$1([y$1({ json: { write: false } }), r$2(new s$5({ "3DObject": "3d-object", Point: "point" }))], N.prototype, "layerType", void 0), e$1([y$1()], N.prototype, "geometryType", null), e$1([y$1()], N.prototype, "profile", null), e$1([y$1({ readOnly: true, json: { read: false } })], N.prototype, "capabilities", null), N = e$1([n$4(A)], N);
const M = N;
var a$2;
const l$3 = { type: j, readOnly: true, json: { origins: { service: { read: { source: "sublayers", reader: p$6 } } }, read: false } };
function p$6(r2, o2, t2) {
  if (r2 && Array.isArray(r2))
    return new j(r2.map((r3) => {
      const e2 = y(r3);
      if (e2) {
        const o3 = new e2();
        return o3.read(r3, t2), o3;
      }
      return t2 && t2.messages && r3 && t2.messages.push(new t$5("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (r3.type || "unknown") + "' are not supported", { definition: r3, context: t2 })), null;
    }));
}
let c$4 = a$2 = class extends n$3 {
  constructor(r2) {
    super(r2), this.type = "building-group", this.listMode = "show", this.sublayers = null;
  }
  loadAll() {
    return i$2(this, (r2) => a$2.forEachSublayer(this.sublayers, (e2) => {
      e2.type !== "building-group" && r2(e2);
    }));
  }
};
function y(r2) {
  return r2.layerType === "group" ? c$4 : M;
}
e$1([y$1({ type: ["hide", "show", "hide-children"], json: { write: true } })], c$4.prototype, "listMode", void 0), e$1([y$1(l$3)], c$4.prototype, "sublayers", void 0), c$4 = a$2 = e$1([n$4("esri.layers.buildingSublayers.BuildingGroupSublayer")], c$4), function(r2) {
  function e2(r3, o2) {
    r3.forEach((r4) => {
      o2(r4), r4.type === "building-group" && e2(r4.sublayers, o2);
    });
  }
  r2.sublayersProperty = l$3, r2.readSublayers = p$6, r2.forEachSublayer = e2;
}(c$4 || (c$4 = {}));
const d$2 = c$4;
let e = class extends l$6 {
  constructor() {
    super(...arguments), this.type = null;
  }
};
e$1([y$1({ type: String, readOnly: true, json: { write: true } })], e.prototype, "type", void 0), e = e$1([n$4("esri.layers.support.BuildingFilterAuthoringInfo")], e);
const p$5 = e;
var p$4;
let i$1 = p$4 = class extends l$6 {
  constructor() {
    super(...arguments), this.filterType = null, this.filterValues = null;
  }
  clone() {
    return new p$4({ filterType: this.filterType, filterValues: y$3(this.filterValues) });
  }
};
e$1([y$1({ type: String, json: { write: true } })], i$1.prototype, "filterType", void 0), e$1([y$1({ type: [String], json: { write: true } })], i$1.prototype, "filterValues", void 0), i$1 = p$4 = e$1([n$4("esri.layers.support.BuildingFilterAuthoringInfoType")], i$1);
const l$2 = i$1;
var c$3;
const l$1 = j.ofType(l$2);
let n$2 = c$3 = class extends l$6 {
  clone() {
    return new c$3({ filterTypes: y$3(this.filterTypes) });
  }
};
e$1([y$1({ type: l$1, json: { write: true } })], n$2.prototype, "filterTypes", void 0), n$2 = c$3 = e$1([n$4("esri.layers.support.BuildingFilterAuthoringInfoBlock")], n$2);
const m$3 = n$2;
var p$3;
const l = j.ofType(m$3);
let n$1 = p$3 = class extends p$5 {
  constructor() {
    super(...arguments), this.type = "checkbox";
  }
  clone() {
    return new p$3({ filterBlocks: y$3(this.filterBlocks) });
  }
};
e$1([y$1({ type: ["checkbox"] })], n$1.prototype, "type", void 0), e$1([y$1({ type: l, json: { write: true } })], n$1.prototype, "filterBlocks", void 0), n$1 = p$3 = e$1([n$4("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], n$1);
const u$3 = n$1;
let t$2 = class extends l$6 {
};
e$1([y$1({ readOnly: true, json: { read: false } })], t$2.prototype, "type", void 0), t$2 = e$1([n$4("esri.layers.support.BuildingFilterMode")], t$2);
const p$2 = t$2;
var t$1;
let p$1 = t$1 = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "solid";
  }
  clone() {
    return new t$1();
  }
};
e$1([y$1({ type: ["solid"], readOnly: true, json: { write: true } })], p$1.prototype, "type", void 0), p$1 = t$1 = e$1([n$4("esri.layers.support.BuildingFilterModeSolid")], p$1);
const i = p$1;
var c$2;
let m$2 = c$2 = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "wire-frame", this.edges = null;
  }
  clone() {
    return new c$2({ edges: y$3(this.edges) });
  }
};
e$1([r$2({ wireFrame: "wire-frame" })], m$2.prototype, "type", void 0), e$1([y$1(t$6)], m$2.prototype, "edges", void 0), m$2 = c$2 = e$1([n$4("esri.layers.support.BuildingFilterModeWireFrame")], m$2);
const a$1 = m$2;
var t;
let p = t = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "x-ray";
  }
  clone() {
    return new t();
  }
};
e$1([y$1({ type: ["x-ray"], readOnly: true, json: { write: true } })], p.prototype, "type", void 0), p = t = e$1([n$4("esri.layers.support.BuildingFilterModeXRay")], p);
const c$1 = p;
var d$1;
const a = { nonNullable: true, types: { key: "type", base: p$2, typeMap: { solid: i, "wire-frame": a$1, "x-ray": c$1 } }, json: { read: (e2) => {
  switch (e2 && e2.type) {
    case "solid":
      return i.fromJSON(e2);
    case "wireFrame":
      return a$1.fromJSON(e2);
    case "x-ray":
      return c$1.fromJSON(e2);
    default:
      return;
  }
}, write: { enabled: true, isRequired: true } } };
let u$2 = d$1 = class extends l$6 {
  constructor() {
    super(...arguments), this.filterExpression = null, this.filterMode = new i(), this.title = "";
  }
  clone() {
    return new d$1({ filterExpression: this.filterExpression, filterMode: y$3(this.filterMode), title: this.title });
  }
};
e$1([y$1({ type: String, json: { write: { enabled: true, isRequired: true } } })], u$2.prototype, "filterExpression", void 0), e$1([y$1(a)], u$2.prototype, "filterMode", void 0), e$1([y$1({ type: String, json: { write: { enabled: true, isRequired: true } } })], u$2.prototype, "title", void 0), u$2 = d$1 = e$1([n$4("esri.layers.support.BuildingFilterBlock")], u$2);
const c = u$2;
var u$1;
const d = j.ofType(c);
let m$1 = u$1 = class extends l$6 {
  constructor() {
    super(...arguments), this.description = null, this.filterBlocks = null, this.id = n$7(), this.name = null;
  }
  clone() {
    return new u$1({ description: this.description, filterBlocks: y$3(this.filterBlocks), id: this.id, name: this.name, filterAuthoringInfo: y$3(this.filterAuthoringInfo) });
  }
};
e$1([y$1({ type: String, json: { write: true } })], m$1.prototype, "description", void 0), e$1([y$1({ type: d, json: { write: { enabled: true, isRequired: true } } })], m$1.prototype, "filterBlocks", void 0), e$1([y$1({ types: { key: "type", base: p$5, typeMap: { checkbox: u$3 } }, json: { read: (o2) => (o2 && o2.type) === "checkbox" ? u$3.fromJSON(o2) : null, write: true } })], m$1.prototype, "filterAuthoringInfo", void 0), e$1([y$1({ type: String, constructOnly: true, json: { write: { enabled: true, isRequired: true } } })], m$1.prototype, "id", void 0), e$1([y$1({ type: String, json: { write: { enabled: true, isRequired: true } } })], m$1.prototype, "name", void 0), m$1 = u$1 = e$1([n$4("esri.layers.support.BuildingFilter")], m$1);
const f = m$1;
let n = class extends l$6 {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }
};
e$1([y$1({ type: String })], n.prototype, "fieldName", void 0), e$1([y$1({ type: String })], n.prototype, "modelName", void 0), e$1([y$1({ type: String })], n.prototype, "label", void 0), e$1([y$1({ type: Number })], n.prototype, "min", void 0), e$1([y$1({ type: Number })], n.prototype, "max", void 0), e$1([y$1({ json: { read: (e2) => Array.isArray(e2) && (e2.every((e3) => typeof e3 == "string") || e2.every((e3) => typeof e3 == "number")) ? e2.slice() : null } })], n.prototype, "mostFrequentValues", void 0), e$1([y$1({ type: [Number] })], n.prototype, "subLayerIds", void 0), n = e$1([n$4("esri.layers.support.BuildingFieldStatistics")], n);
let u = class extends m$4.LoadableMixin(m$5(l$6)) {
  constructor() {
    super(...arguments), this.url = null;
  }
  get fields() {
    return this.loaded || this.loadStatus === "loading" ? this._get("fields") : (s$1.getLogger(this.declaredClass).error("building summary statistics are not loaded"), null);
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._fetchService(r2)), Promise.resolve(this);
  }
  async _fetchService(e2) {
    const t2 = (await U(this.url, { query: { f: "json" }, responseType: "json", signal: e2 })).data;
    this.read(t2, { origin: "service" });
  }
};
e$1([y$1({ constructOnly: true, type: String })], u.prototype, "url", void 0), e$1([y$1({ readOnly: true, type: [n], json: { read: { source: "summary" } } })], u.prototype, "fields", null), u = e$1([n$4("esri.layers.support.BuildingSummaryStatistics")], u);
const m = u;
const F = j.ofType(f), B = y$3(d$2.sublayersProperty);
B.json.origins["web-scene"] = { type: [M], write: { enabled: true, overridePolicy: () => ({ enabled: false }) } }, B.json.origins["portal-item"] = { type: [M], write: { enabled: true, overridePolicy: () => ({ enabled: false }) } };
let P = class extends N$1(p$9(c$5(v$1(t$7(O(i$3(b))))))) {
  constructor(e2) {
    super(e2), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new l$7({ getCollections: () => [this.sublayers], getChildrenFunction: (e3) => e3.type === "building-group" ? e3.sublayers : null }), this.sublayers = null, this._sublayerOverrides = null, this.filters = new F(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.type = "building-scene";
  }
  normalizeCtorArgs(e2) {
    return typeof e2 == "string" ? { url: e2 } : e2 != null ? e2 : {};
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e2, r2, t2) {
    const s2 = d$2.readSublayers(e2, r2, t2);
    return d$2.forEachSublayer(s2, (e3) => e3.layer = this), this._sublayerOverrides && (this.applySublayerOverrides(s2, this._sublayerOverrides), this._sublayerOverrides = null), s2;
  }
  applySublayerOverrides(e2, { overrides: r2, context: t2 }) {
    d$2.forEachSublayer(e2, (e3) => e3.read(r2.get(e3.id), t2));
  }
  readSublayerOverrides(e2, r2) {
    var _a;
    const t2 = new Map();
    for (const i2 of e2)
      i2 != null && typeof i2 == "object" && typeof i2.id == "number" ? t2.set(i2.id, i2) : (_a = r2.messages) == null ? void 0 : _a.push(new s$3("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", { value: i2 }));
    return { overrides: t2, context: r2 };
  }
  writeSublayerOverrides(e2, r2, t2) {
    const s2 = [];
    d$2.forEachSublayer(this.sublayers, (e3) => {
      const r3 = e3.write({}, t2);
      Object.keys(r3).length > 1 && s2.push(r3);
    }), s2.length > 0 && (r2.sublayers = s2);
  }
  writeUnappliedOverrides(e2, r2) {
    r2.sublayers = [], e2.overrides.forEach((e3) => {
      r2.sublayers.push(y$3(e3));
    });
  }
  write(e2, r2) {
    return e2 = super.write(e2, r2), !r2 || r2.origin !== "web-scene" && r2.origin !== "portal-item" || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e2, r2) : this._sublayerOverrides && this.writeUnappliedOverrides(this._sublayerOverrides, e2)), e2;
  }
  read(e2, r2) {
    if (super.read(e2, r2), r2 && (r2.origin === "web-scene" || r2.origin === "portal-item") && e2 != null && Array.isArray(e2.sublayers)) {
      const t2 = this.readSublayerOverrides(e2.sublayers, r2);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, t2) : this._sublayerOverrides = t2;
    }
  }
  readSummaryStatistics(e2, r2) {
    var _a;
    if (typeof r2.statisticsHRef == "string") {
      const e3 = G((_a = this.parsedUrl) == null ? void 0 : _a.path, r2.statisticsHRef);
      return new m({ url: e3 });
    }
    return null;
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w$1).then(() => this._fetchService(r2)).then(() => this._fetchAssociatedFeatureService(r2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  loadAll() {
    return n$8(this, (e2) => {
      d$2.forEachSublayer(this.sublayers, (r2) => {
        r2.type !== "building-group" && e2(r2);
      }), this.summaryStatistics && e2(this.summaryStatistics);
    });
  }
  async saveAs(e2, r2) {
    return this._debouncedSaveOperations(L.SAVE_AS, __spreadProps(__spreadValues({}, r2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" }), e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" };
    return this._debouncedSaveOperations(L.SAVE, e2);
  }
  validateLayer(e2) {
    if (!e2.layerType || e2.layerType !== "Building")
      throw new s$3("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", { layerType: e2.layerType });
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    e2 && (e2.mode !== "absolute-height" && s$1.getLogger(this.declaredClass).warn(".elevationInfo=", "Building scene layers only support absolute-height elevation mode"), e2.featureExpressionInfo && e2.featureExpressionInfo.expression !== "0" && s$1.getLogger(this.declaredClass).warn(".elevationInfo=", "Building scene layers do not support featureExpressionInfo"));
  }
  async _fetchAssociatedFeatureService(e2) {
    const r2 = new l$8(this.parsedUrl, this.portalItem, this.apiKey, e2);
    try {
      this.associatedFeatureServiceItem = await r2.fetchPortalItem();
    } catch (t2) {
      s$1.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded", t2);
    }
  }
};
e$1([y$1({ type: ["BuildingSceneLayer"] })], P.prototype, "operationalLayerType", void 0), e$1([y$1({ readOnly: true })], P.prototype, "allSublayers", void 0), e$1([y$1(B)], P.prototype, "sublayers", void 0), e$1([o("service", "sublayers")], P.prototype, "readSublayers", null), e$1([y$1({ type: F, nonNullable: true, json: { write: true } })], P.prototype, "filters", void 0), e$1([y$1({ type: String, json: { write: true } })], P.prototype, "activeFilterId", void 0), e$1([y$1({ readOnly: true, type: m })], P.prototype, "summaryStatistics", void 0), e$1([o("summaryStatistics", ["statisticsHRef"])], P.prototype, "readSummaryStatistics", null), e$1([y$1({ type: [String], json: { read: false } })], P.prototype, "outFields", void 0), e$1([y$1(b$1)], P.prototype, "fullExtent", void 0), e$1([y$1({ type: ["show", "hide", "hide-children"] })], P.prototype, "listMode", void 0), e$1([y$1(y$2(k))], P.prototype, "spatialReference", void 0), e$1([y$1(d$4)], P.prototype, "elevationInfo", null), e$1([y$1({ json: { read: false }, readOnly: true })], P.prototype, "type", void 0), e$1([y$1()], P.prototype, "associatedFeatureServiceItem", void 0), P = e$1([n$4("esri.layers.BuildingSceneLayer")], P);
const C = P;
export { C as default };
