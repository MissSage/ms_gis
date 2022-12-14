import { $ as e, a0 as y, a1 as n, hS as m, cE as x, t, aK as k, a as r, dE as t$1, g as s, ie as i, iJ as o, iK as n$1, iL as p, i2 as n$2, iI as c, iM as a, i3 as t$2, h2 as c$1, h3 as v$1, i4 as p$1, h4 as O, e0 as b, iN as F$1, i7 as p$2, cO as x$2, iO as x$3, ii as d, g2 as y$1, cr as w, gL as i$1, iQ as j$1, iR as i$2, iP as m$1, iE as c$2, i9 as p$3, d4 as k$2, iT as p$4, i8 as n$3, iU as l, iW as n$4, h7 as f, ia as s$1 } from "./index.js";
import { N, F, v, x as x$1, k as k$1, T, S, I, j } from "./ogcFeatureUtils.js";
import "vue";
import "./geojson.js";
import "./clientSideDefaults.js";
import "./QueryEngineCapabilities.js";
let C = class extends m {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }
  load(e2) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, e2)), this.when();
  }
  getSource() {
    const { featureDefinition: { collection: e2, layerDefinition: t2, spatialReference: s2, supportedCrs: r2 }, layer: { apiKey: o2, customParameters: p2, effectiveMaxRecordCount: i2 } } = this;
    return { type: "ogc-source", collection: e2, layerDefinition: t2, maxRecordCount: i2, queryParameters: { apiKey: o2, customParameters: p2 }, spatialReference: s2, supportedCrs: r2 };
  }
  queryExtent(e2, t2 = {}) {
    return null;
  }
  queryFeatureCount(e2, t2 = {}) {
    return null;
  }
  queryFeatures(e2, t2 = {}) {
    return this.queryFeaturesJSON(e2, t2).then((e3) => x.fromJSON(e3));
  }
  queryFeaturesJSON(e2, t2 = {}) {
    const s2 = this.getSource();
    return this.load(t2).then(() => N(s2, e2, t2));
  }
  queryObjectIds(e2, t2 = {}) {
    return null;
  }
  serviceSupportsSpatialReference(e2) {
    return !(!e2.isWGS84 && !e2.isWebMercator) || !!this.featureDefinition.supportedCrs[e2.wkid];
  }
  _conformsToType(e2, t2) {
    var _a;
    const s2 = new RegExp(`^${t2}$`, "i");
    return (_a = e2.conformsTo.some((e3) => s2.test(e3))) != null ? _a : false;
  }
  _getCapabilities(e2, t2) {
    return { analytics: { supportsCacheHint: false }, attachment: null, data: { isVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: e2 }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: false, supportsDelete: false, supportsEditing: false, supportsChangeTracking: false, supportsQuery: false, supportsQueryAnalytics: false, supportsQueryAttachments: false, supportsQueryTopFeatures: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: false, supportsExceedsLimitStatistics: false }, query: { maxRecordCount: t2, maxRecordCountFactor: void 0, standardMaxRecordCount: void 0, supportsCacheHint: false, supportsCentroid: false, supportsDisjointSpatialRelationship: false, supportsDistance: false, supportsDistinct: false, supportsExtent: false, supportsFormatPBF: false, supportsGeometryProperties: false, supportsHavingClause: false, supportsHistoricMoment: false, supportsMaxRecordCountFactor: false, supportsOrderBy: false, supportsPagination: false, supportsPercentileStatistics: false, supportsQuantization: false, supportsQuantizationEditMode: false, supportsQueryByOthers: false, supportsQueryGeometry: false, supportsResultType: false, supportsStandardizedQueriesOnly: false, supportsTopFeaturesQuery: false, supportsStatistics: false, supportsSpatialAggregationStatistics: false, supportedSpatialAggregationStatistics: { envelope: false, centroid: false, convexHull: false }, supportsDefaultSpatialReference: false, supportsFullTextSearch: false, supportsCompactGeometry: false, supportsSqlExpression: false, tileMaxRecordCount: void 0 }, queryRelated: { supportsCount: false, supportsOrderBy: false, supportsPagination: false, supportsCacheHint: false }, queryTopFeatures: { supportsCacheHint: false }, editing: { supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsGeometryUpdate: false, supportsGlobalId: false, supportsReturnServiceEditsInSourceSpatialReference: false, supportsRollbackOnFailure: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false, supportsUploadWithItemId: false, supportsUpdateWithoutM: false } };
  }
  _getMaxRecordCount(e2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    return (_i = (_d = (_c = (_b = (_a = e2 == null ? void 0 : e2.components) == null ? void 0 : _a.parameters) == null ? void 0 : _b.limit) == null ? void 0 : _c.schema) == null ? void 0 : _d.maximum) != null ? _i : (_h = (_g = (_f = (_e = e2 == null ? void 0 : e2.components) == null ? void 0 : _e.parameters) == null ? void 0 : _f.limitFeatures) == null ? void 0 : _g.schema) == null ? void 0 : _h.maximum;
  }
  _getStorageSpatialReference(e2) {
    var _a;
    const t$12 = (_a = e2.storageCrs) != null ? _a : F, s2 = v(t$12);
    return t(s2) ? k.WGS84 : new k({ wkid: s2 });
  }
  _getSupportedSpatialReferences(e2, t2) {
    var _a;
    const s2 = "#/crs", r2 = (_a = e2.crs) != null ? _a : [F], o2 = r2.includes(s2) ? r2.filter((e3) => e3 !== s2).concat(t2.crs) : r2, p2 = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return o2.filter((e3) => !p2.test(e3));
  }
  async _loadOGCServices(e2, s$12) {
    const r$1 = r(s$12) ? s$12.signal : null, { apiKey: p2, collectionId: i2, customParameters: a2, fields: u, geometryType: g, hasZ: h, objectIdField: C2, timeInfo: R, url: w2 } = e2, x2 = { fields: u == null ? void 0 : u.map((e3) => e3.toJSON()), geometryType: t$1.toJSON(g), hasZ: h, objectIdField: C2, timeInfo: R == null ? void 0 : R.toJSON() }, j$12 = { apiKey: p2, customParameters: a2, signal: r$1 }, F2 = await x$1(w2, j$12), [O2, v$12] = await Promise.all([k$1(F2, j$12), T(F2, j$12)]);
    if (!this._conformsToType(O2, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))
      throw new s("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
    const T$1 = v$12.collections.find((e3) => e3.id === i2);
    if (!T$1)
      throw new s("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");
    const D = this._conformsToType(O2, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? await S(F2, j$12) : null, _ = await I(T$1, x2, j$12), b2 = this._getMaxRecordCount(D), P = this._getCapabilities(_.hasZ, b2), q = this._getStorageSpatialReference(T$1).toJSON(), M2 = this._getSupportedSpatialReferences(T$1, v$12), A = new RegExp(`^${j}`, "i"), E = {};
    for (const t2 of M2) {
      const e3 = v(t2);
      r(e3) && (E[e3] || (E[e3] = t2.replace(A, "")));
    }
    this.featureDefinition = { capabilities: P, collection: T$1, layerDefinition: _, spatialReference: q, supportedCrs: E };
  }
};
e([y()], C.prototype, "featureDefinition", void 0), e([y({ constructOnly: true })], C.prototype, "layer", void 0), e([y()], C.prototype, "type", void 0), C = e([n("esri.layers.graphics.sources.OGCFeatureSource")], C);
const M = s$1();
let B = class extends i(o(n$1(p(n$2(c(a(t$2(c$1(v$1(p$1(O(b)))))))))))) {
  constructor(e2) {
    super(e2), this.collectionId = null, this.copyright = null, this.definitionExpression = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = true, this.legendEnabled = true, this.maxRecordCount = null, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = true, this.popupTemplate = null, this.screenSizePerspectiveEnabled = true, this.source = new C({ layer: this }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
  }
  destroy() {
    var _a;
    (_a = this.source) == null ? void 0 : _a.destroy();
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["OGCFeatureServer"] }, e2).then(() => this._fetchService(e2))), this.when();
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get effectiveMaxRecordCount() {
    var _a, _b, _c;
    return (_c = (_b = this.maxRecordCount) != null ? _b : (_a = this.capabilities) == null ? void 0 : _a.query.maxRecordCount) != null ? _c : 5e3;
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  set renderer(e2) {
    F$1(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  on(e2, r2) {
    return super.on(e2, r2);
  }
  createPopupTemplate(e2) {
    return p$2(this, e2);
  }
  createQuery() {
    return new x$2();
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2, r2) {
    var _a;
    let t2, i2 = false;
    const o2 = (_a = r2 == null ? void 0 : r2.feature) == null ? void 0 : _a.attributes, s2 = this.typeIdField && (o2 == null ? void 0 : o2[this.typeIdField]);
    return s2 != null && this.types && (i2 = this.types.some((r3) => {
      var _a2;
      return r3.id == s2 && (t2 = (_a2 = r3.domains) == null ? void 0 : _a2[e2], (t2 == null ? void 0 : t2.type) === "inherited" && (t2 = this._getLayerDomain(e2)), true);
    })), i2 || t2 || (t2 = this._getLayerDomain(e2)), t2;
  }
  queryFeatures(e2, r2) {
    return this.load().then(() => this.source.queryFeatures(x$2.from(e2) || this.createQuery(), r2)).then((e3) => {
      var _a;
      return (_a = e3 == null ? void 0 : e3.features) == null ? void 0 : _a.forEach((e4) => {
        e4.layer = e4.sourceLayer = this;
      }), e3;
    });
  }
  serviceSupportsSpatialReference(e2) {
    var _a, _b;
    return (_b = (_a = this.source) == null ? void 0 : _a.serviceSupportsSpatialReference(e2)) != null ? _b : false;
  }
  async _fetchService(e2) {
    await this.source.load(e2), this.read(this.source.featureDefinition, { origin: "service" }), F$1(this.renderer, this.fieldsIndex), x$3(this.timeInfo, this.fieldsIndex);
  }
  _getLayerDomain(e2) {
    if (!this.fields)
      return null;
    for (const r2 of this.fields)
      if (r2.name === e2 && r2.domain)
        return r2.domain;
    return null;
  }
};
e([y({ readOnly: true, json: { origins: { service: { read: true } } } })], B.prototype, "capabilities", void 0), e([y({ type: String, json: { write: true } })], B.prototype, "collectionId", void 0), e([y({ type: String })], B.prototype, "copyright", void 0), e([y({ readOnly: true })], B.prototype, "defaultPopupTemplate", null), e([y({ type: String })], B.prototype, "definitionExpression", void 0), e([y({ readOnly: true, type: String, json: { origins: { service: { name: "collection.description" } } } })], B.prototype, "description", void 0), e([y({ type: String })], B.prototype, "displayField", void 0), e([y({ type: Number })], B.prototype, "effectiveMaxRecordCount", null), e([y(d)], B.prototype, "elevationInfo", void 0), e([y({ type: [y$1], json: { origins: { service: { name: "layerDefinition.fields" } } } })], B.prototype, "fields", void 0), e([y(M.fieldsIndex)], B.prototype, "fieldsIndex", void 0), e([y({ readOnly: true, type: w, json: { origins: { service: { name: "layerDefinition.extent" } } } })], B.prototype, "fullExtent", void 0), e([y({ type: i$1.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: i$1.read } } } } })], B.prototype, "geometryType", void 0), e([y({ type: Boolean, json: { origins: { service: { name: "layerDefinition.hasZ" } } } })], B.prototype, "hasZ", void 0), e([y({ type: Boolean, readOnly: true })], B.prototype, "isTable", null), e([y({ type: [j$1], json: { origins: { "web-document": { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$2 }, write: true } } } })], B.prototype, "labelingInfo", void 0), e([y(m$1)], B.prototype, "labelsVisible", void 0), e([y(c$2)], B.prototype, "legendEnabled", void 0), e([y({ type: Number })], B.prototype, "maxRecordCount", void 0), e([y({ type: String, json: { origins: { service: { name: "layerDefinition.objectIdField" } } } })], B.prototype, "objectIdField", void 0), e([y({ type: ["OGCFeatureLayer"] })], B.prototype, "operationalLayerType", void 0), e([y(p$3)], B.prototype, "popupEnabled", void 0), e([y({ type: k$2, json: { name: "popupInfo", write: true } })], B.prototype, "popupTemplate", void 0), e([y({ types: p$4, json: { origins: { service: { name: "layerDefinition.drawingInfo.renderer", write: false }, "web-scene": { types: n$3, name: "layerDefinition.drawingInfo.renderer", write: true } }, name: "layerDefinition.drawingInfo.renderer", write: true } })], B.prototype, "renderer", null), e([y(l)], B.prototype, "screenSizePerspectiveEnabled", void 0), e([y({ readOnly: true })], B.prototype, "source", void 0), e([y({ readOnly: true, type: k, json: { origins: { service: { read: true } } } })], B.prototype, "spatialReference", void 0), e([y({ type: String, json: { write: { enabled: true, ignoreOrigin: true, isRequired: true }, origins: { service: { name: "collection.title" } } } })], B.prototype, "title", void 0), e([y({ readOnly: true, json: { read: false } })], B.prototype, "type", void 0), e([y({ type: String, readOnly: true })], B.prototype, "typeIdField", void 0), e([y({ type: [n$4] })], B.prototype, "types", void 0), e([y(f)], B.prototype, "url", void 0), B = e([n("esri.layers.OGCFeatureLayer")], B);
const V = B;
export { V as default };
