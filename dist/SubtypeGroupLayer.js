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
import { $ as e, a0 as y, cD as o, dD as r, a1 as n, co as l, jR as t, jP as s, Y as a$1, h4 as O, aG as s$1, hS as m, aX as y$1, hU as o$1, iN as F, d6 as p, iV as p$1, a as r$1, i7 as p$2, dL as r$2, jS as y$2, iP as m$1, iQ as j, iR as i, iE as c$1, jO as v, jN as I, i9 as p$3, d4 as k$1, jT as p$4, j8 as C, j6 as _$1, ia as s$2, jU as a$2, jV as u, jW as c$2, jX as M$1, jI as a$3, i2 as n$1, iM as a$4, i3 as t$1, i4 as p$5, h1 as p$6, h2 as c$3, h3 as v$1, iJ as o$2, ie as i$1, e0 as b, al as t$2, cx as j$1, R as l$1, d8 as U$1, eq as s$3, aL as w, g as s$4, bO as j$2, ha as G$1, ik as y$3, jY as F$1, jZ as x, j_ as P, e6 as y$4, j$ as L$1, bX as t$3, k0 as O$1, k1 as v$2, k2 as E, cO as x$1, b4 as i$2, k3 as I$1, k4 as T, k5 as j$3, k6 as M$2, k7 as D, i_ as e$1, iO as x$2, k8 as G$2, ij as j$4, jg as t$4, fT as v$3 } from "./index.js";
import "vue";
let a = class extends l {
  constructor() {
    super(...arguments), this.code = null, this.defaultValues = {}, this.domains = null, this.name = null;
  }
  readDomains(o2) {
    if (!o2)
      return null;
    const r2 = {};
    for (const t$12 of Object.keys(o2))
      r2[t$12] = t(o2[t$12]);
    return r2;
  }
  writeDomains(o2, r2) {
    var _a;
    if (!o2)
      return;
    const t2 = {};
    for (const s2 of Object.keys(o2))
      o2[s2] && (t2[s2] = (_a = o2[s2]) == null ? void 0 : _a.toJSON());
    r2.domains = t2;
  }
};
e([y({ type: Number, json: { write: true } })], a.prototype, "code", void 0), e([y({ type: Object, json: { write: true } })], a.prototype, "defaultValues", void 0), e([y({ json: { write: true } })], a.prototype, "domains", void 0), e([o("domains")], a.prototype, "readDomains", null), e([r("domains")], a.prototype, "writeDomains", null), e([y({ type: String, json: { write: true } })], a.prototype, "name", void 0), a = e([n("esri.layers.support.Subtype")], a);
const c = a;
const L = ["charts", "editingEnabled", "formTemplate", "labelsVisible", "labelingInfo", "legendEnabled", "minScale", "maxScale", "opacity", "popupEnabled", "popupTemplate", "renderer", "subtypeCode", "templates", "title", "visible"], N = { key: "type", base: p$4, errorContext: "renderer", typeMap: { simple: p, "unique-value": C, "class-breaks": _$1 } }, k = s$2(), G = s({ types: N });
let M = 0;
function U(e2) {
  const r2 = e2.json.write;
  return typeof r2 == "object" ? r2.ignoreOrigin = true : e2.json.write = { ignoreOrigin: true }, e2;
}
function _(e2) {
  return new p({ symbol: q(e2) });
}
function q(e2) {
  switch (e2) {
    case "point":
    case "multipoint":
      return c$2.clone();
    case "polyline":
      return u.clone();
    case "polygon":
    case "multipatch":
      return a$2.clone();
    default:
      return null;
  }
}
function B(e2, r2) {
  return !!r2 && ((e2 == null ? void 0 : e2.type) === "unique-value" && typeof e2.field == "string" && e2.field.toLowerCase() === r2.toLowerCase() && !e2.field2 && !e2.field3 && !e2.valueExpression);
}
function A(e2, r2) {
  var _a;
  return e2 == null ? null : (_a = r2.subtypes) == null ? void 0 : _a.find((r3) => r3.code === e2);
}
function H(e2, r2) {
  let t2 = null;
  switch (r2.geometryType) {
    case "esriGeometryPoint":
    case "esriGeometryMultipoint":
      t2 = "point";
      break;
    case "esriGeometryPolyline":
      t2 = "line";
      break;
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      t2 = "polygon";
      break;
    default:
      r2.type, t2 = null;
  }
  const i2 = {}, o2 = A(e2, r2);
  if (r$1(o2)) {
    const { defaultValues: e3 } = o2;
    for (const r3 in e3)
      i2[r3] = e3[r3];
  }
  return i2[r2.subtypeField] = e2, new p$1({ name: "New Feature", drawingTool: t2, prototype: { attributes: i2 } });
}
const $ = "esri.layers.support.SubtypeSublayer";
let z = class extends a$1(O(s$1(m))) {
  constructor(e2) {
    super(e2), this.charts = null, this.editingEnabled = true, this.fieldOverrides = null, this.fieldsIndex = null, this.formTemplate = null, this.id = `${Date.now().toString(16)}-subtype-sublayer-${M++}`, this.type = "subtype-sublayer", this.labelsVisible = true, this.labelingInfo = null, this.layerType = "ArcGISFeatureLayer", this.legendEnabled = true, this.listMode = "show", this.minScale = 0, this.maxScale = 0, this.opacity = 1, this.popupEnabled = true, this.popupTemplate = null, this.subtypeCode = null, this.templates = null, this.title = null, this.visible = true;
  }
  writeFieldOverrides(e2, r2, t2) {
    const { fields: i2, parent: o2 } = this;
    let n2;
    if (i2) {
      n2 = [];
      let e3 = 0;
      i2.forEach(({ name: r3, alias: t3, editable: i3, visible: s2 }) => {
        var _a;
        if (!s2)
          return;
        const l2 = (_a = o2 == null ? void 0 : o2.fields) == null ? void 0 : _a.find((e4) => e4.name === r3);
        if (!l2)
          return;
        const p2 = { name: r3 };
        let a2 = false;
        t3 !== l2.alias && (p2.alias = t3, a2 = true), i3 !== l2.editable && (p2.editable = i3, a2 = true), n2.push(p2), a2 && e3++;
      }), e3 === 0 && n2.length === i2.length && (n2 = null);
    } else
      n2 = y$1(e2);
    (n2 == null ? void 0 : n2.length) && o$1(t2, n2, r2);
  }
  get fields() {
    var _a, _b;
    const { parent: e2, fieldOverrides: r2, subtypeCode: t2 } = this, i2 = e2 == null ? void 0 : e2.fields;
    if (!(i2 == null ? void 0 : i2.length))
      return null;
    const { subtypes: o2, subtypeField: n2 } = e2, s2 = o2.find((e3) => e3.code === t2), l2 = s2 == null ? void 0 : s2.defaultValues, p2 = s2 == null ? void 0 : s2.domains, a2 = [];
    for (const d of i2) {
      const e3 = d.clone(), { name: i3 } = e3, o3 = r2 == null ? void 0 : r2.find((e4) => e4.name === i3);
      if (e3.visible = !r2 || !!o3, o3) {
        const { alias: r3, editable: t3 } = o3;
        r3 && (e3.alias = r3), t3 === false && (e3.editable = false);
      }
      const s3 = (_a = l2 == null ? void 0 : l2[i3]) != null ? _a : null;
      e3.defaultValue = i3 === n2 ? t2 : s3;
      const u2 = (_b = p2 == null ? void 0 : p2[i3]) != null ? _b : null;
      e3.domain = i3 === n2 ? null : u2 ? u2.type === "inherited" ? e3.domain : u2.clone() : null, a2.push(e3);
    }
    return a2;
  }
  get effectiveScaleRange() {
    const { minScale: e2, maxScale: r2 } = this;
    return { minScale: e2, maxScale: r2 };
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e2) {
    F(e2, this.fieldsIndex), this._override("renderer", e2);
  }
  get renderer() {
    if (this._isOverridden("renderer"))
      return this._get("renderer");
    const { parent: e2 } = this;
    return e2 && !e2.isTable && e2.geometryType !== "mesh" ? _(e2.geometryType) : null;
  }
  readRendererFromService(e2, r2, t2) {
    var _a, _b, _c;
    if (r2.type === "Table")
      return null;
    const i2 = (_a = r2.drawingInfo) == null ? void 0 : _a.renderer, n2 = G(i2, r2, t2);
    let s2;
    const { subtypeCode: l2 } = this;
    if (l2 != null && B(n2, r2.subtypeField)) {
      const e3 = (_b = n2.uniqueValueInfos) == null ? void 0 : _b.find(({ value: e4 }) => (e4 = typeof e4 == "number" ? String(e4) : e4) === String(l2));
      e3 && (s2 = new p({ symbol: e3.symbol }));
    } else
      (n2 == null ? void 0 : n2.type) !== "simple" || ((_c = n2.visualVariables) == null ? void 0 : _c.length) || (s2 = n2);
    return s2;
  }
  readRenderer(e2, r2, t2) {
    var _a, _b, _c;
    const i2 = (_b = (_a = r2 == null ? void 0 : r2.layerDefinition) == null ? void 0 : _a.drawingInfo) == null ? void 0 : _b.renderer;
    if (i2 && !((_c = i2.visualVariables) == null ? void 0 : _c.length))
      return G(i2, r2, t2) || void 0;
  }
  readTemplatesFromService(e2, r2) {
    return [H(this.subtypeCode, r2)];
  }
  readTitleFromService(e2, r2) {
    const t2 = A(this.subtypeCode, r2);
    return r$1(t2) ? t2.name : null;
  }
  createPopupTemplate(e2) {
    let r2 = this;
    const { parent: t2, fields: i2, title: o2 } = this;
    if (t2) {
      const { displayField: e3, editFieldsInfo: n2, objectIdField: s2 } = t2;
      r2 = { displayField: e3, editFieldsInfo: n2, fields: i2, objectIdField: s2, title: o2 };
    }
    return p$2(r2, e2);
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2) {
    return this._getLayerDomain(e2);
  }
  hasUserOverrides() {
    return L.some((e2) => this.originIdOf(e2) === r$2.USER);
  }
  _getLayerDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2 ? r2.domain : null;
  }
};
e([y({ json: { write: { ignoreOrigin: true } } })], z.prototype, "charts", void 0), e([y({ type: Boolean, nonNullable: true, json: { name: "enableEditing", write: { ignoreOrigin: true } } })], z.prototype, "editingEnabled", void 0), e([y({ readOnly: true, json: { name: "layerDefinition.fieldOverrides", origins: { service: { read: false } }, write: { ignoreOrigin: true, allowNull: true } } })], z.prototype, "fieldOverrides", void 0), e([r("fieldOverrides")], z.prototype, "writeFieldOverrides", null), e([y(__spreadProps(__spreadValues({}, k.fields), { readOnly: true, json: { read: false } }))], z.prototype, "fields", null), e([y(k.fieldsIndex)], z.prototype, "fieldsIndex", void 0), e([y({ type: y$2, json: { name: "formInfo", write: { ignoreOrigin: true } } })], z.prototype, "formTemplate", void 0), e([y({ type: String, readOnly: true, json: { origins: { service: { read: false } }, write: { ignoreOrigin: true } } })], z.prototype, "id", void 0), e([y({ readOnly: true, json: { read: false } })], z.prototype, "type", void 0), e([y(U(y$1(m$1)))], z.prototype, "labelsVisible", void 0), e([y({ type: [j], json: { name: "layerDefinition.drawingInfo.labelingInfo", origins: { service: { read: false } }, read: { reader: i }, write: { ignoreOrigin: true } } })], z.prototype, "labelingInfo", void 0), e([y({ type: ["ArcGISFeatureLayer"], readOnly: true, json: { read: false, write: { ignoreOrigin: true } } })], z.prototype, "layerType", void 0), e([y(U(y$1(c$1)))], z.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"] })], z.prototype, "listMode", void 0), e([y((() => {
  const e2 = y$1(v);
  return e2.json.origins.service.read = false, U(e2);
})())], z.prototype, "minScale", void 0), e([y((() => {
  const e2 = y$1(I);
  return e2.json.origins.service.read = false, U(e2);
})())], z.prototype, "maxScale", void 0), e([y({ readOnly: true })], z.prototype, "effectiveScaleRange", null), e([y({ type: Number, range: { min: 0, max: 1 }, nonNullable: true, json: { write: { ignoreOrigin: true } } })], z.prototype, "opacity", void 0), e([y()], z.prototype, "parent", void 0), e([y(U(y$1(p$3)))], z.prototype, "popupEnabled", void 0), e([y({ type: k$1, json: { name: "popupInfo", write: { ignoreOrigin: true } } })], z.prototype, "popupTemplate", void 0), e([y({ readOnly: true })], z.prototype, "defaultPopupTemplate", null), e([y({ types: N, json: { write: { target: "layerDefinition.drawingInfo.renderer", ignoreOrigin: true } } })], z.prototype, "renderer", null), e([o("service", "renderer", ["drawingInfo.renderer", "subtypeField", "type"])], z.prototype, "readRendererFromService", null), e([o("renderer", ["layerDefinition.drawingInfo.renderer"])], z.prototype, "readRenderer", null), e([y({ type: Number, json: { origins: { service: { read: false } }, write: { ignoreOrigin: true } } })], z.prototype, "subtypeCode", void 0), e([y({ type: [p$1], json: { name: "layerDefinition.templates", write: { ignoreOrigin: true } } })], z.prototype, "templates", void 0), e([o("service", "templates", ["geometryType", "subtypeField", "subtypes", "type"])], z.prototype, "readTemplatesFromService", null), e([y({ type: String, json: { write: { ignoreOrigin: true } } })], z.prototype, "title", void 0), e([o("service", "title", ["subtypes"])], z.prototype, "readTitleFromService", null), e([y({ type: Boolean, nonNullable: true, json: { name: "visibility", write: { ignoreOrigin: true } } })], z.prototype, "visible", void 0), z = e([n($)], z);
const J = z;
const re = "SubtypeGroupLayer", te = "esri.layers.SubtypeGroupLayer";
function se(e2, r2) {
  return new s$4("layer:unsupported", `Layer (${e2.title}, ${e2.id}) of type '${e2.declaredClass}' ${r2}`, { layer: e2 });
}
const ie = s$2();
let oe = class extends M$1(a$3(n$1(a$4(t$1(p$5(p$6(c$3(v$1(O(o$2(i$1(a$1(b))))))))))))) {
  constructor(...e2) {
    super(...e2), this._handles = new t$2(), this._sublayersCollectionChanged = false, this.fields = null, this.fieldsIndex = null, this.outFields = null, this.subtypes = null, this.sublayers = new (j$1.ofType(J))(), this.timeInfo = null, this.title = "Layer", this.type = "subtype-group", this.addHandles(l$1(() => this.sublayers, (e3, r2) => this._handleSublayersChange(e3, r2), U$1));
  }
  destroy() {
    var _a;
    (_a = this.source) == null ? void 0 : _a.destroy(), this._handles = s$3(this._handles);
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null, s2 = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e2).catch(w).then(async () => {
      if (!this.url)
        throw new s$4("subtype-grouplayer:missing-url-or-source", "SubtypeGroupLayer must be created with either a url or a portal item");
      if (this.layerId == null)
        throw new s$4("subtype-grouplayer:missing-layerid", "layerId is required for a SubtypeGroupLayer created with url");
      return this._initLayerProperties(await this.createGraphicsSource(r2));
    }).then(() => this.finishLoadEditablePortalLayer(e2));
    return this.addResolvingPromise(s2), Promise.resolve(this);
  }
  get createQueryVersion() {
    var _a;
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("gdbVersion"), this.commitProperty("historicMoment"), this.commitProperty("returnZ"), this.commitProperty("capabilities"), this.commitProperty("returnM"), ((_a = this._get("createQueryVersion")) != null ? _a : 0) + 1;
  }
  get editingEnabled() {
    return this.loaded && this.capabilities.operations.supportsEditing && this.userHasEditingPrivileges;
  }
  get parsedUrl() {
    const e2 = j$2(this.url);
    return e2 != null && this.layerId != null && (e2.path = G$1(e2.path, this.layerId.toString())), e2;
  }
  set source(e2) {
    this._get("source") !== e2 && this._set("source", e2);
  }
  readTitleFromService(e2, { name: r2 }) {
    return this.url ? y$3(this.url, r2) : r2;
  }
  async addAttachment(e2, r2) {
    return F$1(this, e2, r2, re);
  }
  async updateAttachment(e2, r2, t2) {
    return x(this, e2, r2, t2, re);
  }
  async applyEdits(e2, r2) {
    return P(this, e2, r2);
  }
  on(e2, r2) {
    return super.on(e2, r2);
  }
  async createGraphicsSource(e2) {
    const { default: r2 } = await y$4(import("./FeatureLayerSource.js"), e2);
    return new r2({ layer: this }).load({ signal: e2 });
  }
  createQuery() {
    const e2 = L$1(this), r2 = this.sublayers.map((e3) => e3.subtypeCode);
    return e2.where = t$3(`${this.subtypeField} IN (${r2.join(",")})`, this.definitionExpression), e2;
  }
  async deleteAttachments(e2, r2) {
    return O$1(this, e2, r2, re);
  }
  async fetchRecomputedExtents(e2) {
    return v$2(this, e2, re);
  }
  getFieldDomain(e2, r2) {
    return this._getLayerDomain(e2);
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  async queryAttachments(e2, r2) {
    return E(this, e2, r2, re);
  }
  async queryFeatures(e2, r2) {
    var _a;
    const t2 = await this.load(), s2 = (_a = x$1.from(e2)) != null ? _a : t2.createQuery(), i2 = i$2(s2.outFields, []);
    i2.includes(this.subtypeField) || (i2.push(this.subtypeField), s2.outFields = i2);
    const o2 = await t2.source.queryFeatures(s2, r2);
    if (o2 == null ? void 0 : o2.features)
      for (const a2 of o2.features)
        a2.layer = this._findSublayerForFeature(a2), a2.sourceLayer = this;
    return o2;
  }
  async queryObjectIds(e2, r2) {
    return I$1(this, e2, r2, re);
  }
  async queryFeatureCount(e2, r2) {
    return T(this, e2, r2, re);
  }
  async queryExtent(e2, r2) {
    return j$3(this, e2, r2, re);
  }
  async queryRelatedFeatures(e2, r2) {
    return M$2(this, e2, r2, re);
  }
  async queryRelatedFeaturesCount(e2, r2) {
    return D(this, e2, r2, re);
  }
  write(e2, r2) {
    var _a;
    const { origin: s2, layerContainerType: i2, messages: o2 } = r2;
    if (this.isTable) {
      if (s2 === "web-scene" || s2 === "web-map" && i2 !== "tables")
        return o2 == null ? void 0 : o2.push(se(this, "using a table source cannot be written to web scenes and web maps")), null;
    } else if (this.loaded && s2 === "web-map" && i2 === "tables")
      return o2 == null ? void 0 : o2.push(se(this, "using a non-table source cannot be written to tables in web maps")), null;
    return ((_a = this.sublayers) == null ? void 0 : _a.length) ? super.write(e2, r2) : (o2 == null ? void 0 : o2.push(new s$4("web-document-write:invalid-property", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`, { layer: this })), null);
  }
  serviceSupportsSpatialReference(e2) {
    return !!this.loaded && e$1(this, e2);
  }
  _findSublayerForFeature(e2) {
    const r2 = this.fieldsIndex.get(this.subtypeField), t2 = e2.attributes[r2.name];
    return this.sublayers.find((e3) => e3.subtypeCode === t2);
  }
  _getLayerDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2 ? r2.domain : null;
  }
  async _initLayerProperties(e2) {
    var _a;
    this._set("source", e2);
    const { sourceJSON: r2 } = e2;
    if (r2 && (this.sourceJSON = r2, this.read(r2, { origin: "service", url: this.parsedUrl })), this.isTable)
      throw new s$4("subtype-grouplayer:unsupported-source", "SubtypeGroupLayer cannot be created using a layer with table source");
    if (!((_a = this.subtypes) == null ? void 0 : _a.length))
      throw new s$4("subtype-grouplayer:missing-subtypes", "SubtypeGroupLayer must be created using a layer with subtypes");
    this._verifyFields(), x$2(this.timeInfo, this.fieldsIndex);
  }
  async hasDataChanged() {
    return G$2(this);
  }
  _verifyFields() {
    var _a, _b, _c;
    const e2 = (_b = (_a = this.parsedUrl) == null ? void 0 : _a.path) != null ? _b : "undefined";
    this.objectIdField || console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: " + e2 + ")"), this.isTable || e2.search(/\/FeatureServer\//i) !== -1 || ((_c = this.fields) == null ? void 0 : _c.some((e3) => e3.type === "geometry")) || console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " + e2 + ")");
  }
  _handleSublayersChange(e2, r2) {
    r2 && (r2.forEach((e3) => {
      e3.parent = null;
    }), this.handles.remove("sublayers-owner")), e2 && (e2.forEach((e3) => {
      e3.parent = this;
    }), this._sublayersCollectionChanged = false, this.handles.add([e2.on("after-add", ({ item: e3 }) => {
      e3.parent = this;
    }), e2.on("after-remove", ({ item: e3 }) => {
      e3.parent = null;
    }), e2.on("after-changes", () => {
      this._sublayersCollectionChanged = true;
    })], "sublayers-owner"));
  }
};
e([y({ readOnly: true })], oe.prototype, "createQueryVersion", null), e([y({ type: Boolean, readOnly: true })], oe.prototype, "editingEnabled", null), e([y(__spreadProps(__spreadValues({}, ie.fields), { readOnly: true, json: { origins: { service: { read: true } }, read: false } }))], oe.prototype, "fields", void 0), e([y(ie.fieldsIndex)], oe.prototype, "fieldsIndex", void 0), e([y(j$4)], oe.prototype, "id", void 0), e([y({ type: ["show", "hide", "hide-children"] })], oe.prototype, "listMode", void 0), e([y({ value: "SubtypeGroupLayer", type: ["SubtypeGroupLayer"] })], oe.prototype, "operationalLayerType", void 0), e([y(ie.outFields)], oe.prototype, "outFields", void 0), e([y({ readOnly: true })], oe.prototype, "parsedUrl", null), e([y()], oe.prototype, "source", null), e([y({ type: [c], readOnly: true, json: { read: false, origins: { service: { read: true } } } })], oe.prototype, "subtypes", void 0), e([y({ type: j$1.ofType(J), json: { origins: { service: { read: { source: "subtypes", reader: (e2, t2, s2) => {
  const i2 = e2.map(({ code: e3 }) => {
    const r2 = new J({ subtypeCode: e3 });
    return r2.read(t2, s2), r2;
  });
  return new (j$1.ofType(J))(i2);
} } } }, name: "layers", write: { overridePolicy(e2, r2, t2) {
  const s2 = this.originOf("sublayers"), i2 = r$2.PORTAL_ITEM;
  let o2 = true;
  if (t$4(s2) === i2 && t$4(t2.origin) > i2) {
    const r3 = e2.some((e3) => e3.hasUserOverrides());
    o2 = this._sublayersCollectionChanged || r3;
  }
  return { enabled: o2, ignoreOrigin: true };
} } } })], oe.prototype, "sublayers", void 0), e([y({ type: v$3 })], oe.prototype, "timeInfo", void 0), e([y({ json: { origins: { "portal-item": { write: { ignoreOrigin: true, writerEnsuresNonNull: true } } } } })], oe.prototype, "title", void 0), e([o("service", "title", ["name"])], oe.prototype, "readTitleFromService", null), e([y({ json: { read: false } })], oe.prototype, "type", void 0), oe = e([n(te)], oe);
const ae = oe;
export { ae as default };
