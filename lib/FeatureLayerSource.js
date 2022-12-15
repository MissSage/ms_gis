var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { N as e, O as y, P as n, al as m, v as j$1, li as K, dc as has, lj as n$1, lk as a, a2 as t, ll as x, lm as y$1, ln as n$2, lo as m$1, lp as s, lq as d, lr as n$3, ls as u, lt as a$1, lu as s$1, lv as s$2, lw as m$2, lx as s$3, hO as x$1, C as r, s as s$4, lh as s$5, ly as m$3, lz as x$2, U, lA as i$1, A as e$1, fO as w, lB as T$1, lC as a$2, lD as g$1, f_ as G, lE as o$1, r as k, J as g$2, l1 as v, gR as nt } from "./index.js";
import { o } from "./clientSideDefaults.js";
import "vue";
import "./QueryEngineCapabilities.js";
var E$1;
!function(E2) {
  E2[E2.PROJECT_VERTICES = 1] = "PROJECT_VERTICES";
}(E$1 || (E$1 = {}));
let i = class extends m {
  constructor(...r2) {
    super(...r2), this.requestOptions = null, this.url = null;
  }
  normalizeCtorArgs(r2, s2) {
    return typeof r2 != "string" ? r2 : __spreadValues({ url: r2 }, s2);
  }
  get parsedUrl() {
    return this._parseUrl(this.url);
  }
  _parseUrl(r2) {
    return j$1(r2);
  }
  _encode(r2, s2, t2) {
    const e2 = {};
    for (const o2 in r2) {
      if (o2 === "declaredClass")
        continue;
      const i2 = r2[o2];
      if (i2 != null && typeof i2 != "function")
        if (Array.isArray(i2)) {
          e2[o2] = [];
          for (let r3 = 0; r3 < i2.length; r3++)
            e2[o2][r3] = this._encode(i2[r3]);
        } else if (typeof i2 == "object")
          if (i2.toJSON) {
            const r3 = i2.toJSON(t2 && t2[o2]);
            e2[o2] = s2 ? r3 : JSON.stringify(r3);
          } else
            e2[o2] = s2 ? i2 : JSON.stringify(i2);
        else
          e2[o2] = i2;
    }
    return e2;
  }
};
e([y({ readOnly: true })], i.prototype, "parsedUrl", null), e([y()], i.prototype, "requestOptions", void 0), e([y({ type: String })], i.prototype, "url", void 0), i = e([n("esri.tasks.Task")], i);
const p = i;
let q = class extends p {
  constructor(t2) {
    super(t2), this.dynamicDataSource = null, this.fieldsIndex = null, this.format = "json", this.gdbVersion = null, this.infoFor3D = null, this.sourceSpatialReference = null;
  }
  async execute(t2, e2) {
    const r2 = await this.executeJSON(t2, e2);
    return this.featureSetFromJSON(t2, r2, e2);
  }
  async executeJSON(t2, e2) {
    var _a;
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2), s2 = ((_a = t2.outStatistics) == null ? void 0 : _a[0]) != null, i2 = has("featurelayer-pbf-statistics"), u2 = !s2 || i2;
    let n2;
    if (this.format === "pbf" && u2)
      try {
        n2 = await n$1(this.url, o2, r2);
      } catch (p2) {
        if (p2.name !== "query:parsing-pbf")
          throw p2;
        this.format = "json";
      }
    return this.format !== "json" && u2 || (n2 = await a(this.url, o2, r2)), this._normalizeFields(n2.fields), n2;
  }
  async featureSetFromJSON(t$1, e2, o2) {
    if (!this._queryIs3DObjectFormat(t$1) || t(this.infoFor3D) || !e2.assetMaps || !e2.features || !e2.features.length)
      return x.fromJSON(e2);
    const { meshFeatureSetFromJSON: i2 } = await y$1(import("./meshFeatureSet.js"), o2);
    return i2(t$1, this.infoFor3D, e2);
  }
  executeForCount(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2);
    return n$2(this.url, o2, r2);
  }
  executeForExtent(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2);
    return m$1(this.url, o2, r2);
  }
  executeForIds(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2);
    return s(this.url, o2, r2);
  }
  executeRelationshipQuery(t2, e2) {
    t2 = d.from(t2);
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return (this.gdbVersion || this.dynamicDataSource) && ((t2 = t2.clone()).gdbVersion = t2.gdbVersion || this.gdbVersion, t2.dynamicDataSource = t2.dynamicDataSource || this.dynamicDataSource), n$3(this.url, t2, r2);
  }
  executeRelationshipQueryForCount(t2, e2) {
    t2 = d.from(t2);
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return (this.gdbVersion || this.dynamicDataSource) && ((t2 = t2.clone()).gdbVersion = t2.gdbVersion || this.gdbVersion, t2.dynamicDataSource = t2.dynamicDataSource || this.dynamicDataSource), u(this.url, t2, r2);
  }
  executeAttachmentQuery(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return a$1(this.url, t2, r2);
  }
  executeTopFeaturesQuery(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return s$1(this.parsedUrl, t2, this.sourceSpatialReference, r2);
  }
  executeForTopIds(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return s$2(this.parsedUrl, t2, r2);
  }
  executeForTopExtents(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return m$2(this.parsedUrl, t2, r2);
  }
  executeForTopCount(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return s$3(this.parsedUrl, t2, r2);
  }
  _normalizeQuery(t$1) {
    let s2 = x$1.from(t$1);
    if (s2.sourceSpatialReference = s2.sourceSpatialReference || this.sourceSpatialReference, (this.gdbVersion || this.dynamicDataSource) && (s2 = s2 === t$1 ? s2.clone() : s2, s2.gdbVersion = t$1.gdbVersion || this.gdbVersion, s2.dynamicDataSource = t$1.dynamicDataSource ? K.from(t$1.dynamicDataSource) : this.dynamicDataSource), r(this.infoFor3D) && this._queryIs3DObjectFormat(t$1)) {
      s2 = s2 === t$1 ? s2.clone() : s2, s2.formatOf3DObjects = null;
      for (const t2 of this.infoFor3D.queryFormats) {
        if (t2 === "3D_glb") {
          s2.formatOf3DObjects = t2;
          break;
        }
        t2 !== "3D_gltf" || s2.formatOf3DObjects || (s2.formatOf3DObjects = t2);
      }
      if (!s2.formatOf3DObjects)
        throw new s$4("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
      if (t(s2.outFields) || !s2.outFields.includes("*")) {
        s2 = s2 === t$1 ? s2.clone() : s2, t(s2.outFields) && (s2.outFields = []);
        const { originX: e2, originY: o2, originZ: i2, translationX: u2, translationY: n2, translationZ: a2, scaleX: c, scaleY: p2, scaleZ: m2, rotationX: f, rotationY: l, rotationZ: h, rotationDeg: d2 } = this.infoFor3D.transformFieldRoles;
        s2.outFields.push(e2, o2, i2, u2, n2, a2, c, p2, m2, f, l, h, d2);
      }
    }
    return s2;
  }
  _normalizeFields(t2) {
    if (r(this.fieldsIndex) && r(t2))
      for (const e2 of t2) {
        const t3 = this.fieldsIndex.get(e2.name);
        t3 && Object.assign(e2, t3.toJSON());
      }
  }
  _queryIs3DObjectFormat(t2) {
    return r(this.infoFor3D) && t2.returnGeometry && t2.multipatchOption !== "xyFootprint" && !t2.outStatistics;
  }
};
e([y({ type: K })], q.prototype, "dynamicDataSource", void 0), e([y()], q.prototype, "fieldsIndex", void 0), e([y()], q.prototype, "format", void 0), e([y()], q.prototype, "gdbVersion", void 0), e([y()], q.prototype, "infoFor3D", void 0), e([y()], q.prototype, "sourceSpatialReference", void 0), q = e([n("esri.tasks.QueryTask")], q);
const g = q;
const O = new s$5({ originalAndCurrentFeatures: "original-and-current-features", none: "none" });
async function E(e2) {
  if (typeof e2 == "string") {
    const t2 = nt(e2);
    return t2 || { data: e2 };
  }
  return new Promise((t2, s2) => {
    const a2 = new FileReader();
    a2.readAsDataURL(e2), a2.onload = () => t2(nt(a2.result)), a2.onerror = (e3) => s2(e3);
  });
}
const S = new Set(["Feature Layer", "Table"]), j = new s$5({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
let T = class extends m$3 {
  constructor() {
    super(...arguments), this.type = "feature-layer", this.refresh = x$2(async () => {
      var _a, _b;
      await this.load();
      const e2 = (_a = this.sourceJSON.editingInfo) == null ? void 0 : _a.lastEditDate;
      if (e2 == null)
        return { dataChanged: true, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: true, updates: {} };
      }
      const t2 = e2 !== ((_b = this.sourceJSON.editingInfo) == null ? void 0 : _b.lastEditDate);
      return { dataChanged: t2, updates: t2 ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    });
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON, t2)), Promise.resolve(this);
  }
  get queryTask() {
    const { capabilities: { query: { supportsFormatPBF: e2 } }, parsedUrl: t$1, dynamicDataSource: s2, infoFor3D: a2, gdbVersion: r2, spatialReference: o2, fieldsIndex: i2 } = this.layer, n2 = has("featurelayer-pbf") && e2 && t(a2) ? "pbf" : "json";
    return new g({ url: t$1.path, format: n2, fieldsIndex: i2, infoFor3D: a2, dynamicDataSource: s2, gdbVersion: r2, sourceSpatialReference: o2 });
  }
  async addAttachment(e2, t2) {
    await this.load();
    const a2 = e2.attributes[this.layer.objectIdField], r2 = this.layer.parsedUrl.path + "/" + a2 + "/addAttachment", o2 = this._getLayerRequestOptions(), i2 = this._getFormDataForAttachment(t2, o2.query);
    try {
      const e3 = await U(r2, { body: i2 });
      return this._createFeatureEditResult(e3.data.addAttachmentResult);
    } catch (n2) {
      throw this._createAttachmentErrorResult(a2, n2);
    }
  }
  async updateAttachment(e2, t2, a2) {
    await this.load();
    const r2 = e2.attributes[this.layer.objectIdField], o2 = this.layer.parsedUrl.path + "/" + r2 + "/updateAttachment", i2 = this._getLayerRequestOptions({ query: { attachmentId: t2 } }), n2 = this._getFormDataForAttachment(a2, i2.query);
    try {
      const e3 = await U(o2, { body: n2 });
      return this._createFeatureEditResult(e3.data.updateAttachmentResult);
    } catch (u2) {
      throw this._createAttachmentErrorResult(r2, u2);
    }
  }
  async applyEdits(e2, t2) {
    await this.load();
    const a2 = this.layer.infoFor3D, r$1 = r(a2), o2 = r$1 || (t2 == null ? void 0 : t2.globalIdUsed), i2 = e2.addFeatures.map((e3) => this._serializeFeature(e3, a2)), u2 = e2.updateFeatures.map((e3) => this._serializeFeature(e3, a2)), d2 = this._getFeatureIds(e2.deleteFeatures, o2);
    i$1(i2, u2, this.layer.spatialReference);
    const c = [], p2 = [], h = [...e2.deleteAttachments];
    for (const s2 of e2.addAttachments)
      c.push(await this._serializeAttachment(s2));
    for (const s2 of e2.updateAttachments)
      p2.push(await this._serializeAttachment(s2));
    const y2 = c.length || p2.length || h.length ? { adds: c, updates: p2, deletes: h } : null;
    let m2, f = null;
    if (r$1) {
      f = new Map();
      const t3 = [];
      for (const a3 of e2.addAssets)
        t3.push(this._serializeAssetMapEditAndUploadAssets(a3, f));
      const s2 = await Promise.all(t3);
      m2 = s2.length ? { adds: s2, updates: [], deletes: [] } : void 0;
    }
    const g2 = { gdbVersion: (t2 == null ? void 0 : t2.gdbVersion) || this.layer.gdbVersion, rollbackOnFailure: t2 == null ? void 0 : t2.rollbackOnFailureEnabled, useGlobalIds: o2, returnEditMoment: t2 == null ? void 0 : t2.returnEditMoment, usePreviousEditMoment: t2 == null ? void 0 : t2.usePreviousEditMoment, sessionId: t2 == null ? void 0 : t2.sessionId };
    (t2 == null ? void 0 : t2.returnServiceEditsOption) ? (g2.edits = JSON.stringify([{ id: this.layer.layerId, adds: i2, updates: u2, deletes: d2, attachments: y2, assetMaps: e$1(m2) }]), g2.returnServiceEditsOption = O.toJSON(t2 == null ? void 0 : t2.returnServiceEditsOption), g2.returnServiceEditsInSourceSR = t2 == null ? void 0 : t2.returnServiceEditsInSourceSR) : (g2.adds = i2.length ? JSON.stringify(i2) : null, g2.updates = u2.length ? JSON.stringify(u2) : null, g2.deletes = d2.length ? o2 ? JSON.stringify(d2) : d2.join(",") : null, g2.attachments = y2 && JSON.stringify(y2), g2.assetMaps = r(m2) ? JSON.stringify(m2) : void 0);
    const R = this._getLayerRequestOptions({ method: "post", query: g2 }), F = (t2 == null ? void 0 : t2.returnServiceEditsOption) ? this.layer.url : this.layer.parsedUrl.path, b = await U(F + "/applyEdits", R);
    if (r$1 && b.data != null && b.data.assetMaps != null) {
      const e3 = b.data, t3 = this.layer.objectIdField, a3 = [];
      for (const s2 of e3.addResults)
        s2.success && a3.push(s2.objectId);
      for (const s2 of e3.updateResults)
        s2.success && a3.push(s2.objectId);
      const r$12 = this._createRequestQueryOptions(), o3 = await U(F + "/query", __spreadProps(__spreadValues({}, r$12), { query: { f: "json", formatOf3DObjects: "3D_glb", where: `OBJECTID IN (${a3.join(",")})`, outFields: `${t3}` } }));
      if (o3 && o3.data && o3.data.assetMaps && r(f)) {
        const e4 = o3.data.assetMaps;
        for (const t4 of e4) {
          const e5 = f.get(t4.parentGlobalId).geometry;
          r(e5) && e5.type === "mesh" && e5.updateExternalSource({ source: [{ name: t4.assetName, source: t4.assetName }], extent: e5.extent });
        }
      }
    }
    return this._createEditsResult(b);
  }
  async deleteAttachments(e2, t2) {
    await this.load();
    const a2 = e2.attributes[this.layer.objectIdField], r2 = this.layer.parsedUrl.path + "/" + a2 + "/deleteAttachments";
    try {
      return (await U(r2, this._getLayerRequestOptions({ query: { attachmentIds: t2.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(this._createFeatureEditResult);
    } catch (o2) {
      throw this._createAttachmentErrorResult(a2, o2);
    }
  }
  fetchRecomputedExtents(e2 = {}) {
    const t2 = e2.signal;
    return this.load({ signal: t2 }).then(async () => {
      const t3 = this._getLayerRequestOptions(__spreadProps(__spreadValues({}, e2), { query: { returnUpdates: true } })), { layerId: r2, url: o2 } = this.layer, { data: i2 } = await U(`${o2}/${r2}`, t3), { id: n2, extent: u2, fullExtent: l, timeExtent: d2 } = i2, c = u2 || l;
      return { id: n2, fullExtent: c && w.fromJSON(c), timeExtent: d2 && T$1.fromJSON({ start: d2[0], end: d2[1] }) };
    });
  }
  async queryAttachments(e2, t2 = {}) {
    const { parsedUrl: a2 } = this.layer, r2 = a2.path;
    await this.load();
    const o2 = this._getLayerRequestOptions(t2);
    if (!this.layer.get("capabilities.operations.supportsQueryAttachments")) {
      const { objectIds: t3 } = e2, a3 = [];
      for (const e3 of t3) {
        const t4 = r2 + "/" + e3 + "/attachments";
        a3.push(U(t4, o2));
      }
      return Promise.all(a3).then((e3) => t3.map((t4, s2) => ({ parentObjectId: t4, attachmentInfos: e3[s2].data.attachmentInfos }))).then((e3) => a$2(e3, r2));
    }
    return this.queryTask.executeAttachmentQuery(e2, o2);
  }
  async queryFeatures(e2, t2) {
    return await this.load(), this.queryTask.execute(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryFeaturesJSON(e2, t2) {
    return await this.load(), this.queryTask.executeJSON(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryObjectIds(e2, t2) {
    return await this.load(), this.queryTask.executeForIds(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryFeatureCount(e2, t2) {
    return await this.load(), this.queryTask.executeForCount(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryExtent(e2, t2) {
    return await this.load(), this.queryTask.executeForExtent(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryRelatedFeatures(e2, t2) {
    return await this.load(), this.queryTask.executeRelationshipQuery(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryRelatedFeaturesCount(e2, t2) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopFeatures(e2, t2) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopObjectIds(e2, t2) {
    return await this.load(), this.queryTask.executeForTopIds(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopExtents(e2, t2) {
    return await this.load(), this.queryTask.executeForTopExtents(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopCount(e2, t2) {
    return await this.load(), this.queryTask.executeForTopCount(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async fetchPublishingStatus() {
    if (!g$1(this.layer.url))
      return "unavailable";
    const e2 = G(this.layer.url, "status"), t2 = await U(e2, { query: { f: "json" } });
    return j.fromJSON(t2.data.status);
  }
  _createRequestQueryOptions(e2) {
    const t2 = __spreadValues(__spreadProps(__spreadValues({}, this.layer.customParameters), { token: this.layer.apiKey }), e2 == null ? void 0 : e2.query);
    return this.layer.datesInUnknownTimezone && (t2.timeReferenceUnknownClient = true), t2;
  }
  async _fetchService(e2, t2) {
    if (!e2) {
      const { data: a3 } = await U(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: has("featurelayer-advanced-symbols") ? { returnAdvancedSymbols: true } : {}, signal: t2 }));
      e2 = a3;
    }
    this.sourceJSON = this._patchServiceJSON(e2);
    const a2 = e2.type;
    if (!S.has(a2))
      throw new s$4("feature-layer-source:unsupported-type", `Source type "${a2}" is not supported`);
  }
  _patchServiceJSON(e2) {
    var _a;
    if (e2.type !== "Table" && e2.geometryType && !((_a = e2 == null ? void 0 : e2.drawingInfo) == null ? void 0 : _a.renderer) && !e2.defaultSymbol) {
      const t2 = o(e2.geometryType).renderer;
      o$1("drawingInfo.renderer", t2, e2);
    }
    return e2.geometryType === "esriGeometryMultiPatch" && e2.infoFor3D && (e2.geometryType = "mesh"), e2;
  }
  _serializeFeature(e2, t$1) {
    const { geometry: s2, attributes: a2 } = e2;
    if (r(t$1) && r(e2.geometry) && e2.geometry.type === "mesh") {
      const s3 = __spreadValues({}, a2), r$1 = e2.geometry, o2 = r$1.origin, i2 = r$1.transform;
      if (s3[t$1.transformFieldRoles.originX] = o2.x, s3[t$1.transformFieldRoles.originY] = o2.y, s3[t$1.transformFieldRoles.originZ] = o2.z, r(i2)) {
        const e3 = i2.translation, a3 = i2.scale, r2 = i2.rotation;
        s3[t$1.transformFieldRoles.translationX] = e3[0], s3[t$1.transformFieldRoles.translationY] = e3[1], s3[t$1.transformFieldRoles.translationZ] = e3[2], s3[t$1.transformFieldRoles.scaleX] = a3[0], s3[t$1.transformFieldRoles.scaleY] = a3[1], s3[t$1.transformFieldRoles.scaleZ] = a3[2], s3[t$1.transformFieldRoles.rotationX] = r2[0], s3[t$1.transformFieldRoles.rotationY] = r2[1], s3[t$1.transformFieldRoles.rotationZ] = r2[2], s3[t$1.transformFieldRoles.rotationDeg] = r2[3];
      }
      return { geometry: null, attributes: s3 };
    }
    return t(s2) ? { attributes: a2 } : s2.type === "mesh" || s2.type === "extent" ? null : { geometry: s2.toJSON(), attributes: a2 };
  }
  async _serializeAttachment(e2) {
    const { feature: t2, attachment: s2 } = e2, { globalId: a2, name: r2, contentType: o2, data: i2, uploadId: n2 } = s2, u2 = { globalId: a2, parentGlobalId: null, contentType: null, name: null, uploadId: null, data: null };
    if (t2 && (u2.parentGlobalId = "attributes" in t2 ? t2.attributes && t2.attributes[this.layer.globalIdField] : t2.globalId), n2)
      u2.uploadId = n2;
    else if (i2) {
      const e3 = await E(i2);
      u2.contentType = e3.mediaType, u2.data = e3.data, i2 instanceof File && (u2.name = i2.name);
    }
    return r2 && (u2.name = r2), o2 && (u2.contentType = o2), u2;
  }
  async _serializeAssetMapEditAndUploadAssets(e2, t$1) {
    const a2 = this.layer.url;
    let o2 = null;
    try {
      const t2 = new Blob([e2.data], { type: e2.mimeType }), i3 = new FormData();
      i3.append("f", "json"), i3.append("file", t2, `${e2.assetName}`);
      const n3 = { body: i3, method: "post", responseType: "json" }, { data: u2 } = await U(`${a2}/uploads/upload`, n3);
      if (!u2.success)
        throw new s$4("feature-layer-source:upload-failure", "Expected upload to be successfull.");
      o2 = { assetType: e2.assetType, assetUploadId: u2.item.itemID };
    } catch (h) {
      o2 = null;
    }
    if (t(o2)) {
      const t2 = await E(new Blob([e2.data]));
      if (!t2.isBase64)
        throw new s$4("feature-layer-source:uploadAssets-failure", "Expected gltf data in base64 format after conversion.");
      o2 = { assetType: e2.assetType, assetData: t2.data };
    }
    if (t(o2))
      throw new s$4("feature-layer-source:uploadAssets-failure", "Unable to prepare uploadAsset request options.");
    const i2 = { method: "post", query: { f: "json", assets: JSON.stringify([o2]) }, responseType: "json" }, n2 = await U(G(this.layer.parsedUrl.path, "uploadAssets"), i2);
    if (n2.data.uploadResults.length !== 1 || !n2.data.uploadResults[0].success)
      throw new s$4("feature-layer-source:uploadAssets-failure", "Bad response.");
    const l = n2.data.uploadResults[0].assetHash, d2 = [];
    e2.flags & E$1.PROJECT_VERTICES && d2.push("PROJECT_VERTICES");
    const c = { globalId: e2.assetMapGlobalId, parentGlobalId: e2.featureGlobalId, assetName: e2.assetName, assetHash: l, flags: d2 };
    return t$1.set(e2.featureGlobalId, e2.feature), c;
  }
  _getFeatureIds(e2, t2) {
    const s2 = e2[0];
    return s2 ? this._canUseGlobalIds(t2, e2) ? this._getGlobalIdsFromFeatureIdentifier(e2) : "objectId" in s2 ? this._getObjectIdsFromFeatureIdentifier(e2) : this._getIdsFromFeatures(e2) : [];
  }
  _getIdsFromFeatures(e2) {
    const t2 = this.layer.objectIdField;
    return e2.map((e3) => e3.attributes && e3.attributes[t2]);
  }
  _canUseGlobalIds(e2, t2) {
    return e2 && "globalId" in t2[0];
  }
  _getObjectIdsFromFeatureIdentifier(e2) {
    return e2.map((e3) => e3.objectId);
  }
  _getGlobalIdsFromFeatureIdentifier(e2) {
    return e2.map((e3) => e3.globalId);
  }
  _createEditsResult(e2) {
    const t2 = e2.data, { layerId: s2 } = this.layer, a2 = [];
    let r2 = null;
    if (Array.isArray(t2))
      for (const n2 of t2)
        a2.push({ id: n2.id, editedFeatures: n2.editedFeatures }), n2.id === s2 && (r2 = { addResults: n2.addResults, updateResults: n2.updateResults, deleteResults: n2.deleteResults, attachments: n2.attachments, editMoment: n2.editMoment });
    else
      r2 = t2;
    const o2 = r2 == null ? void 0 : r2.attachments, i2 = { addFeatureResults: r2.addResults ? r2.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: r2.updateResults ? r2.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: r2.deleteResults ? r2.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: o2 && o2.addResults ? o2.addResults.map(this._createFeatureEditResult, this) : [], updateAttachmentResults: o2 && o2.updateResults ? o2.updateResults.map(this._createFeatureEditResult, this) : [], deleteAttachmentResults: o2 && o2.deleteResults ? o2.deleteResults.map(this._createFeatureEditResult, this) : [] };
    if (r2.editMoment && (i2.editMoment = r2.editMoment), a2.length > 0) {
      i2.editedFeatureResults = [];
      for (const e3 of a2) {
        const { adds: t3, updates: s3, deletes: a3, spatialReference: r3 } = e3.editedFeatures, o3 = r3 ? new k(r3) : null;
        i2.editedFeatureResults.push({ layerId: e3.id, editedFeatures: { adds: (t3 == null ? void 0 : t3.map((e4) => this._createEditedFeature(e4, o3))) || [], updates: (s3 == null ? void 0 : s3.map((e4) => ({ original: this._createEditedFeature(e4[0], o3), current: this._createEditedFeature(e4[1], o3) }))) || [], deletes: (a3 == null ? void 0 : a3.map((e4) => this._createEditedFeature(e4, o3))) || [], spatialReference: o3 } });
      }
    }
    return i2;
  }
  _createEditedFeature(e2, s2) {
    return new g$2({ attributes: e2.attributes, geometry: v(__spreadProps(__spreadValues({}, e2.geometry), { spatialReference: s2 })) });
  }
  _createFeatureEditResult(e2) {
    const t2 = e2.success === true ? null : e2.error || { code: void 0, description: void 0 };
    return { objectId: e2.objectId, globalId: e2.globalId, error: t2 ? new s$4("feature-layer-source:edit-failure", t2.description, { code: t2.code }) : null };
  }
  _createAttachmentErrorResult(e2, t2) {
    const s2 = t2.details.messages && t2.details.messages[0] || t2.message, a2 = t2.details.httpStatus || t2.details.messageCode;
    return { objectId: e2, globalId: null, error: new s$4("feature-layer-source:attachment-failure", s2, { code: a2 }) };
  }
  _getFormDataForAttachment(e2, t2) {
    const s2 = e2 instanceof FormData ? e2 : e2 && e2.elements ? new FormData(e2) : null;
    if (s2)
      for (const a2 in t2) {
        const e3 = t2[a2];
        e3 != null && (s2.set ? s2.set(a2, e3) : s2.append(a2, e3));
      }
    return s2;
  }
  _getLayerRequestOptions(e2 = {}) {
    const { parsedUrl: t2, gdbVersion: s2, dynamicDataSource: a2 } = this.layer;
    return __spreadProps(__spreadValues({}, e2), { query: __spreadValues(__spreadProps(__spreadValues({ gdbVersion: s2, layer: a2 ? JSON.stringify({ source: a2 }) : void 0 }, t2.query), { f: "json" }), this._createRequestQueryOptions(e2)), responseType: "json" });
  }
};
e([y()], T.prototype, "type", void 0), e([y({ constructOnly: true })], T.prototype, "layer", void 0), e([y({ readOnly: true })], T.prototype, "queryTask", null), T = e([n("esri.layers.graphics.sources.FeatureLayerSource")], T);
const A = T;
export { A as default };
