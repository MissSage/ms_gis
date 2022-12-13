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
import { $ as e, a0 as y, a1 as n, co as l$1, it as u, cx as j$1, aq as v, df as An, ib as t, jc as mn, cD as o, al as t$1, cA as a, d8 as U, bP as c$1, t as t$2, U as U$1, gk as q, aX as y$1, jI as a$1, h1 as p$1, h2 as c$2, h3 as v$1, i3 as t$3, h4 as O, ie as i, e0 as b, a as r, c9 as r$1, iN as F, jJ as t$5, s as s$2, aL as w, d_ as t$6, cO as x, cN as v$2, g as s$4, cC as g$2, i7 as p$2, ha as G, iC as e$1, dL as r$2, m as j$2, d0 as j$3, jK as t$7, jL as p$3, ju as p$4, ii as d$1, iP as m$1, iQ as j$4, iR as i$1, iE as c$3, jM as r$3, i8 as n$1, i9 as p$5, d4 as k, iU as l$4, ia as s$5 } from "./index.js";
import { N, L } from "./SceneService.js";
import { t as t$4, y as ye, l as l$2 } from "./FetchAssociatedFeatureLayer.js";
import { s as s$1, l as l$3, u as u$1, m } from "./I3SLayerDefinitions.js";
import { g as g$1 } from "./persistable.js";
import { d, s as s$3 } from "./popupUtils.js";
import "vue";
import "./originUtils.js";
import "./multiOriginJSONSupportUtils.js";
import "./resourceUtils.js";
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
let s = class extends l$1 {
  constructor() {
    super(...arguments), this.name = null, this.field = null, this.currentRangeExtent = null, this.fullRangeExtent = null, this.type = "rangeInfo";
  }
};
e([y({ type: String, json: { read: true, write: true } })], s.prototype, "name", void 0), e([y({ type: String, json: { read: true, write: true } })], s.prototype, "field", void 0), e([y({ type: [Number], json: { read: true, write: true } })], s.prototype, "currentRangeExtent", void 0), e([y({ type: [Number], json: { read: true, write: true } })], s.prototype, "fullRangeExtent", void 0), e([y({ type: ["rangeInfo"], readOnly: true, json: { read: false, write: true } })], s.prototype, "type", void 0), s = e([n("esri.layers.support.RangeInfo")], s);
var c;
let p = c = class extends u(j$1.ofType(v)) {
  constructor(e2) {
    super(e2);
  }
  clone() {
    return new c(this.items.map((e2) => e2.clone()));
  }
  write(e2, r2) {
    return this.toJSON(r2);
  }
  toJSON(e2) {
    var _a;
    const r2 = (_a = e2 == null ? void 0 : e2.layer) == null ? void 0 : _a.spatialReference;
    return r2 ? this.toArray().map((t$12) => {
      if (!r2.equals(t$12.spatialReference)) {
        if (!An(t$12.spatialReference, r2))
          return e2 && e2.messages && e2.messages.push(new t("scenefilter:unsupported", "Scene filters with incompatible spatial references are not supported", { modification: this, spatialReference: e2.layer.spatialReference, context: e2 })), null;
        const s3 = new v();
        mn(t$12, s3, r2), t$12 = s3;
      }
      const s2 = t$12.toJSON(e2);
      return delete s2.spatialReference, s2;
    }).filter((e3) => e3 != null) : ((e2 == null ? void 0 : e2.messages) && e2.messages.push(new t("scenefilter:unsupported", "Writing Scene filters without context layer is not supported", { modification: this, spatialReference: e2.layer.spatialReference, context: e2 })), this.toArray().map((r3) => r3.toJSON(e2)));
  }
  static fromJSON(e2, r2) {
    const t2 = new c();
    return e2.forEach((e3) => t2.add(v.fromJSON(e3, r2))), t2;
  }
};
p = c = e([n("esri.layers.support.PolygonCollection")], p);
const l = p;
var g;
let f = g = class extends l$1 {
  constructor(e2) {
    super(e2), this.spatialRelationship = "disjoint", this.geometries = new l(), this._geometriesSource = null, this._handles = new t$1();
  }
  initialize() {
    this._handles.add(a(() => this.geometries, "after-changes", () => this.geometries = this.geometries, U));
  }
  destroy() {
    this._handles.destroy();
  }
  readGeometries(e2, o2, r2) {
    this._geometriesSource = { url: c$1(e2, r2), context: r2 };
  }
  async loadGeometries(e2, r2) {
    if (t$2(this._geometriesSource))
      return;
    const { url: s2, context: t2 } = this._geometriesSource, p2 = await U$1(s2, { responseType: "json", signal: q(r2, "signal") }), n2 = e2.toJSON(), c2 = p2.data.map((e3) => __spreadProps(__spreadValues({}, e3), { spatialReference: n2 }));
    this.geometries = l.fromJSON(c2, t2), this._geometriesSource = null;
  }
  clone() {
    return new g({ geometries: y$1(this.geometries), spatialRelationship: this.spatialRelationship });
  }
};
e([y({ type: ["disjoint", "contains"], nonNullable: true, json: { write: true } })], f.prototype, "spatialRelationship", void 0), e([y({ type: l, nonNullable: true, json: { write: true } }), g$1({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "geometries" })], f.prototype, "geometries", void 0), e([o(["web-scene", "portal-item"], "geometries")], f.prototype, "readGeometries", null), f = g = e([n("esri.layers.support.SceneFilter")], f);
const j = f;
const oe = ["3DObject", "Point"], ae = s$5();
let ne = class extends a$1(N(p$1(c$2(v$1(t$3(O(i(b)))))))) {
  constructor(...e2) {
    super(...e2), this.featureReduction = null, this.rangeInfos = null, this.operationalLayerType = "ArcGISSceneServiceLayer", this.type = "scene", this.fields = null, this.floorInfo = null, this.outFields = null, this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.excludeObjectIds = new j$1(), this.definitionExpression = null, this.filter = null, this.path = null, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.priority = null, this.semantic = null, this.cachedDrawingInfo = { color: false }, this.popupEnabled = true, this.popupTemplate = null, this.objectIdField = null, this.globalIdField = null, this._fieldUsageInfo = {}, this.screenSizePerspectiveEnabled = true;
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2, t2) {
    var _a, _b, _c, _d;
    const r2 = (_b = (_a = this.getFeatureType(t2 == null ? void 0 : t2.feature)) == null ? void 0 : _a.domains) == null ? void 0 : _b[e2];
    return r2 && r2.type !== "inherited" ? r2 : (_d = (_c = this.getField(e2)) == null ? void 0 : _c.domain) != null ? _d : null;
  }
  getFeatureType(e2) {
    return e2 != null && r(this.associatedLayer) ? this.associatedLayer.getFeatureType(e2) : null;
  }
  get types() {
    var _a;
    return r(this.associatedLayer) ? (_a = this.associatedLayer.types) != null ? _a : [] : [];
  }
  get typeIdField() {
    return r(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }
  get formTemplate() {
    return r(this.associatedLayer) ? this.associatedLayer.formTemplate : null;
  }
  get fieldsIndex() {
    return new r$1(this.fields);
  }
  readNodePages(e2, t2, r2) {
    return t2.layerType === "Point" && (e2 = t2.pointNodePages), e2 == null || typeof e2 != "object" ? null : s$1.fromJSON(e2, r2);
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this.loaded && this._validateElevationInfo();
  }
  get geometryType() {
    return le[this.profile] || "mesh";
  }
  set renderer(e2) {
    F(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  readCachedDrawingInfo(e2) {
    return e2 != null && typeof e2 == "object" || (e2 = {}), e2.color == null && (e2.color = false), e2;
  }
  get capabilities() {
    const e2 = r(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : t$4, { query: t2, editing: { supportsGlobalId: r$12, supportsRollbackOnFailure: s2, supportsUploadWithItemId: i2, supportsReturnServiceEditsInSourceSpatialReference: o2 }, data: { supportsZ: a2, supportsM: n2, isVersioned: l2, supportsAttachment: d2 }, operations: { supportsEditing: y2, supportsAdd: u2, supportsUpdate: c2, supportsDelete: f2, supportsQuery: h, supportsQueryAttachments: m2 } } = e2, g2 = e2.operations.supportsChangeTracking, v2 = t$5();
    return { query: t2, editing: { supportsGlobalId: r$12, supportsReturnServiceEditsInSourceSpatialReference: o2, supportsRollbackOnFailure: s2, supportsGeometryUpdate: false, supportsUploadWithItemId: i2 }, data: { supportsAttachment: d2, supportsZ: a2, supportsM: n2, isVersioned: l2 }, operations: { supportsQuery: h, supportsQueryAttachments: m2, supportsEditing: y2 && g2, supportsAdd: v2 && u2 && g2, supportsDelete: v2 && f2 && g2, supportsUpdate: c2 && g2 } };
  }
  get editingEnabled() {
    return this._isOverridden("editingEnabled") ? this._get("editingEnabled") : this.userHasEditingPrivileges;
  }
  set editingEnabled(e2) {
    this._overrideIfSome("editingEnabled", e2);
  }
  get infoFor3D() {
    return r(this.associatedLayer) ? this.associatedLayer.infoFor3D : null;
  }
  get defaultPopupTemplate() {
    return r(this.associatedLayer) || this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  readObjectIdField(e2, t2) {
    return !e2 && t2.fields && t2.fields.some((t3) => (t3.type === "esriFieldTypeOID" && (e2 = t3.name), !!e2)), e2 || void 0;
  }
  readGlobalIdField(e2, t2) {
    return !e2 && t2.fields && t2.fields.some((t3) => (t3.type === "esriFieldTypeGlobalID" && (e2 = t3.name), !!e2)), e2 || void 0;
  }
  get displayField() {
    return r(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }
  readProfile(e2, t2) {
    const r2 = t2.store.profile;
    return r2 != null && pe[r2] ? pe[r2] : (s$2.getLogger(this.declaredClass).error("Unknown or missing profile", { profile: r2, layer: this }), "mesh-pyramids");
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null, r$12 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w).then(() => this._fetchService(t2)).then(() => Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages, t2), this._setAssociatedFeatureLayer(t2), r(this.filter) ? this.filter.loadGeometries(this.spatialReference) : null])).then(() => this._validateElevationInfo()).then(() => this._applyAssociatedLayerOverrides()).then(() => this._populateFieldUsageInfo()).then(() => t$6(this, { origin: "service" }, t2)).then(() => F(this.renderer, this.fieldsIndex)).then(() => this.finishLoadEditablePortalLayer(e2));
    return this.addResolvingPromise(r$12), Promise.resolve(this);
  }
  async beforeSave() {
    r(this.filter) && await this.load();
  }
  createQuery() {
    const e2 = new x();
    return this.geometryType !== "mesh" && (e2.returnGeometry = true, e2.returnZ = true), e2.where = this.definitionExpression || "1=1", e2.sqlFormat = "standard", e2;
  }
  queryExtent(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryExtent(e2 || this.createQuery(), t2));
  }
  queryFeatureCount(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryFeatureCount(e2 || this.createQuery(), t2));
  }
  queryFeatures(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryFeatures(e2 || this.createQuery(), t2)).then((e3) => {
      if (e3 == null ? void 0 : e3.features)
        for (const t3 of e3.features)
          t3.layer = this, t3.sourceLayer = this;
      return e3;
    });
  }
  async queryCachedAttributes(e2, t2) {
    const r2 = v$2(this.fieldsIndex, await d(this, s$3(this)));
    return ye(this.parsedUrl.path, this.attributeStorageInfo, e2, t2, r2);
  }
  async queryCachedFeature(e2, r2) {
    const s2 = await this.queryCachedAttributes(e2, [r2]);
    if (!s2 || s2.length === 0)
      throw new s$4("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    const i2 = new g$2();
    return i2.attributes = s2[0], i2.layer = this, i2.sourceLayer = this, i2;
  }
  queryObjectIds(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryObjectIds(e2 || this.createQuery(), t2));
  }
  queryAttachments(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryAttachments(e2, t2));
  }
  getFieldUsageInfo(e2) {
    const t2 = { supportsLabelingInfo: false, supportsRenderer: false, supportsPopupTemplate: false, supportsLayerQuery: false };
    return this.loaded ? this._fieldUsageInfo[e2] || t2 : (s$2.getLogger(this.declaredClass).error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t2);
  }
  createPopupTemplate(e2) {
    return p$2(this, e2);
  }
  _getAssociatedLayerForQuery() {
    const e2 = this.associatedLayer;
    return r(e2) && e2.loaded ? Promise.resolve(e2) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), t$2(this.associatedLayer))
      throw new s$4("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e2) {
      throw new s$4("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", { layer: this, error: e2 });
    }
    return this.associatedLayer;
  }
  hasCachedStatistics(e2) {
    return this.statisticsInfo != null && this.statisticsInfo.some((t2) => t2.name === e2);
  }
  async queryCachedStatistics(e2, t2) {
    if (await this.load(t2), !this.statisticsInfo)
      throw new s$4("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const r2 = this.fieldsIndex.get(e2);
    if (!r2)
      throw new s$4("scenelayer:field-unexisting", `Field '${e2}' does not exist on the layer`);
    for (const s2 of this.statisticsInfo)
      if (s2.name === r2.name) {
        const e3 = G(this.parsedUrl.path, s2.href);
        return U$1(e3, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: t2 ? t2.signal : null }).then((e4) => e4.data);
      }
    throw new s$4("scenelayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e2, t2) {
    return this._debouncedSaveOperations(L.SAVE_AS, __spreadProps(__spreadValues({}, t2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" }), e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" };
    return this._debouncedSaveOperations(L.SAVE, e2);
  }
  async applyEdits(e2, t2) {
    const r2 = await import("./editingSupport.js");
    if (await this.load(), t$2(this.associatedLayer))
      throw new s$4(`${this.type}-layer:not-editable`, "Service is not editable");
    return await this.associatedLayer.load(), r2.applyEdits(this, this.associatedLayer.source, e2, t2);
  }
  on(e2, t2) {
    return super.on(e2, t2);
  }
  validateLayer(e2) {
    if (e2.layerType && !oe.includes(e2.layerType))
      throw new s$4("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s$4("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    if (this.version.major > 2)
      throw new s$4("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    function t2(e3, t3) {
      let r2 = false, s2 = false;
      if (e3 == null)
        r2 = true, s2 = true;
      else {
        const i2 = t3 && t3.isGeographic;
        switch (e3) {
          case "east-north-up":
          case "earth-centered":
            r2 = true, s2 = i2;
            break;
          case "vertex-reference-frame":
            r2 = true, s2 = !i2;
            break;
          default:
            r2 = false;
        }
      }
      if (!r2)
        throw new s$4("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
      if (!s2)
        throw new s$4("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
    }
    t2(this.normalReferenceFrame, this.spatialReference);
  }
  _getTypeKeywords() {
    const e2 = [];
    if (this.profile === "points")
      e2.push("Point");
    else {
      if (this.profile !== "mesh-pyramids")
        throw new s$4("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
      e2.push("3DObject");
    }
    return e2;
  }
  _populateFieldUsageInfo() {
    if (this._fieldUsageInfo = {}, this.fields)
      for (const e2 of this.fields) {
        const t2 = !(!this.attributeStorageInfo || !this.attributeStorageInfo.some((t3) => t3.name === e2.name)), r$12 = !!(r(this.associatedLayer) && this.associatedLayer.fields && this.associatedLayer.fields.some((t3) => t3 && e2.name === t3.name)), s2 = { supportsLabelingInfo: t2, supportsRenderer: t2, supportsPopupTemplate: t2 || r$12, supportsLayerQuery: r$12 };
        this._fieldUsageInfo[e2.name] = s2;
      }
  }
  _applyAssociatedLayerOverrides() {
    this._applyAssociatedLayerFieldsOverrides(), this._applyAssociatedLayerPopupOverrides();
  }
  _applyAssociatedLayerFieldsOverrides() {
    if (t$2(this.associatedLayer) || !this.associatedLayer.fields)
      return;
    let e2 = null;
    for (const t2 of this.associatedLayer.fields) {
      const r2 = this.getField(t2.name);
      r2 ? (!r2.domain && t2.domain && (r2.domain = t2.domain.clone()), r2.editable = t2.editable, r2.nullable = t2.nullable, r2.length = t2.length) : (e2 || (e2 = this.fields ? this.fields.slice() : []), e2.push(t2.clone()));
    }
    e2 && this._set("fields", e2);
  }
  _applyAssociatedLayerPopupOverrides() {
    if (t$2(this.associatedLayer))
      return;
    const e2 = ["popupTemplate", "popupEnabled"], t2 = e$1(this);
    for (let r2 = 0; r2 < e2.length; r2++) {
      const s2 = e2[r2], i2 = this.originIdOf(s2), o2 = this.associatedLayer.originIdOf(s2);
      i2 < o2 && (o2 === r$2.SERVICE || o2 === r$2.PORTAL_ITEM) && t2.setAtOrigin(s2, this.associatedLayer[s2], o2);
    }
  }
  async _setAssociatedFeatureLayer(e2) {
    if (!["mesh-pyramids", "points"].includes(this.profile))
      return;
    const t2 = new l$2(this.parsedUrl, this.portalItem, this.apiKey, e2);
    try {
      this.associatedLayer = await t2.fetch();
    } catch (r2) {
      j$2(r2) || this._logWarningOnPopupEnabled();
    }
  }
  async _logWarningOnPopupEnabled() {
    await j$3(() => this.popupEnabled && this.popupTemplate != null);
    const e2 = `this SceneLayer: ${this.title}`;
    this.attributeStorageInfo == null ? s$2.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e2}`) : s$2.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e2}`);
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    e2 && (this.profile === "mesh-pyramids" && e2.mode === "relative-to-scene" && s$2.getLogger(this.declaredClass).warn(".elevationInfo=", "Mesh scene layers don't support relative-to-scene elevation mode"), e2.featureExpressionInfo && e2.featureExpressionInfo.expression !== "0" && s$2.getLogger(this.declaredClass).warn(".elevationInfo=", "Scene layers do not support featureExpressionInfo"));
  }
};
e([y({ types: { key: "type", base: t$7, typeMap: { selection: p$3 } }, json: { origins: { "web-scene": { name: "layerDefinition.featureReduction", write: true }, "portal-item": { name: "layerDefinition.featureReduction", write: true } } } })], ne.prototype, "featureReduction", void 0), e([y({ type: [s], json: { read: false, origins: { "web-scene": { name: "layerDefinition.rangeInfos", write: true }, "portal-item": { name: "layerDefinition.rangeInfos", write: true } } } })], ne.prototype, "rangeInfos", void 0), e([y({ json: { read: false } })], ne.prototype, "associatedLayer", void 0), e([y({ type: ["show", "hide"] })], ne.prototype, "listMode", void 0), e([y({ type: ["ArcGISSceneServiceLayer"] })], ne.prototype, "operationalLayerType", void 0), e([y({ json: { read: false }, readOnly: true })], ne.prototype, "type", void 0), e([y(__spreadProps(__spreadValues({}, ae.fields), { readOnly: true, json: { read: false, origins: { service: { read: true } } } }))], ne.prototype, "fields", void 0), e([y()], ne.prototype, "types", null), e([y()], ne.prototype, "typeIdField", null), e([y()], ne.prototype, "formTemplate", null), e([y({ readOnly: true })], ne.prototype, "fieldsIndex", null), e([y({ type: p$4, json: { read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo" } } })], ne.prototype, "floorInfo", void 0), e([y(ae.outFields)], ne.prototype, "outFields", void 0), e([y({ type: s$1, readOnly: true, json: { read: false } })], ne.prototype, "nodePages", void 0), e([o("service", "nodePages", ["nodePages", "pointNodePages"])], ne.prototype, "readNodePages", null), e([y({ type: [l$3], readOnly: true })], ne.prototype, "materialDefinitions", void 0), e([y({ type: [u$1], readOnly: true })], ne.prototype, "textureSetDefinitions", void 0), e([y({ type: [m], readOnly: true })], ne.prototype, "geometryDefinitions", void 0), e([y({ readOnly: true })], ne.prototype, "serviceUpdateTimeStamp", void 0), e([y({ readOnly: true })], ne.prototype, "attributeStorageInfo", void 0), e([y({ readOnly: true })], ne.prototype, "statisticsInfo", void 0), e([y({ type: j$1.ofType(Number), nonNullable: true, json: { origins: { service: { read: false, write: false } }, name: "layerDefinition.excludeObjectIds", write: { enabled: true } } })], ne.prototype, "excludeObjectIds", void 0), e([y({ type: String, json: { origins: { service: { read: false, write: false } }, name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], ne.prototype, "definitionExpression", void 0), e([y({ type: j, json: { name: "layerDefinition.polygonFilter", write: { enabled: true, allowNull: true }, origins: { service: { read: false, write: false } } } })], ne.prototype, "filter", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], ne.prototype, "path", void 0), e([y(d$1)], ne.prototype, "elevationInfo", null), e([y({ type: String })], ne.prototype, "geometryType", null), e([y(m$1)], ne.prototype, "labelsVisible", void 0), e([y({ type: [j$4], json: { origins: { service: { name: "drawingInfo.labelingInfo", read: { reader: i$1 }, write: false } }, name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$1 }, write: true } })], ne.prototype, "labelingInfo", void 0), e([y(c$3)], ne.prototype, "legendEnabled", void 0), e([y({ type: Number, json: { origins: { "web-document": { default: 1, write: { enabled: true, target: { opacity: { type: Number }, "layerDefinition.drawingInfo.transparency": { type: Number } } }, read: { source: ["opacity", "layerDefinition.drawingInfo.transparency"], reader(e2, t2) {
  var _a, _b;
  if (typeof e2 == "number" && e2 >= 0 && e2 <= 1)
    return e2;
  const r2 = (_b = (_a = t2.layerDefinition) == null ? void 0 : _a.drawingInfo) == null ? void 0 : _b.transparency;
  return r2 !== void 0 ? r$3(r2) : void 0;
} } }, "portal-item": { write: true }, service: { read: false } } } })], ne.prototype, "opacity", void 0), e([y({ type: ["Low", "High"], readOnly: true, json: { read: false, origins: { service: { read: true } } } })], ne.prototype, "priority", void 0), e([y({ type: ["Labels"], readOnly: true, json: { read: false, origins: { service: { read: true } } } })], ne.prototype, "semantic", void 0), e([y({ types: n$1, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: true }, value: null })], ne.prototype, "renderer", null), e([y({ json: { read: false } })], ne.prototype, "cachedDrawingInfo", void 0), e([o("service", "cachedDrawingInfo")], ne.prototype, "readCachedDrawingInfo", null), e([y({ readOnly: true, json: { read: false } })], ne.prototype, "capabilities", null), e([y({ type: Boolean, json: { read: false } })], ne.prototype, "editingEnabled", null), e([y({ readOnly: true, json: { write: false, read: false } })], ne.prototype, "infoFor3D", null), e([y(p$5)], ne.prototype, "popupEnabled", void 0), e([y({ type: k, json: { name: "popupInfo", write: true } })], ne.prototype, "popupTemplate", void 0), e([y({ readOnly: true, json: { read: false } })], ne.prototype, "defaultPopupTemplate", null), e([y({ type: String, json: { read: false } })], ne.prototype, "objectIdField", void 0), e([o("service", "objectIdField", ["objectIdField", "fields"])], ne.prototype, "readObjectIdField", null), e([y({ type: String, json: { read: false } })], ne.prototype, "globalIdField", void 0), e([o("service", "globalIdField", ["globalIdField", "fields"])], ne.prototype, "readGlobalIdField", null), e([y({ readOnly: true, type: String, json: { read: false } })], ne.prototype, "displayField", null), e([y({ type: String, json: { read: false } })], ne.prototype, "profile", void 0), e([o("service", "profile", ["store.profile"])], ne.prototype, "readProfile", null), e([y({ readOnly: true, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: false } })], ne.prototype, "normalReferenceFrame", void 0), e([y(l$4)], ne.prototype, "screenSizePerspectiveEnabled", void 0), ne = e([n("esri.layers.SceneLayer")], ne);
const pe = { "mesh-pyramids": "mesh-pyramids", meshpyramids: "mesh-pyramids", "features-meshes": "mesh-pyramids", points: "points", "features-points": "points", lines: "lines", "features-lines": "lines", polygons: "polygons", "features-polygons": "polygons" }, le = { "mesh-pyramids": "mesh", points: "point", lines: "polyline", polygons: "polygon" }, de = ne;
export { de as default };
