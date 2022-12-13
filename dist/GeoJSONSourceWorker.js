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
import { ei as c, c9 as r, g as s, fV as i, eg as M, am as j, m as j$1, s as s$1, bB as E, a as r$1, bG as nt, b$ as rt, U, ar as c$1, c1 as tt, c3 as ot, fW as X } from "./index.js";
import { u } from "./FeatureStore.js";
import { f, g } from "./projectionSupport.js";
import { Y } from "./QueryEngine.js";
import { L, I, T } from "./geojson.js";
import { o, a, i as i$1 } from "./clientSideDefaults.js";
import { w, m, f as f$1, a as a$1, g as g$1 } from "./sourceUtils.js";
import "vue";
import "./PooledRBush.js";
import "./centroid.js";
import "./json.js";
import "./QueryEngineResult.js";
import "./quantizationUtils.js";
import "./WhereClause.js";
import "./utils3.js";
import "./generateRendererUtils.js";
import "./utils4.js";
import "./QueryEngineCapabilities.js";
import "./timeSupport.js";
const O = { hasAttachments: false, capabilities: "query, editing, create, delete, update", useStandardizedQueries: true, supportsCoordinatesQuantization: true, supportsReturningQueryGeometry: true, advancedQueryCapabilities: { supportsQueryAttachments: false, supportsStatistics: true, supportsPercentileStatistics: true, supportsReturningGeometryCentroid: true, supportsQueryWithDistance: true, supportsDistinct: true, supportsReturningQueryExtent: true, supportsReturningGeometryProperties: false, supportsHavingClause: true, supportsOrderBy: true, supportsPagination: true, supportsQueryWithResultType: false, supportsSqlExpression: true, supportsDisjointSpatialRel: true } };
class C {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e) => {
      const t = await this._fetch(e);
      return this._createFeatures(t);
    };
  }
  destroy() {
    var _a;
    (_a = this._queryEngine) == null ? void 0 : _a.destroy(), this._queryEngine = this._fieldsIndex = this._createDefaultAttributes = null;
  }
  async load(e, t = {}) {
    this._loadOptions = { url: e.url, customParameters: e.customParameters };
    const i$2 = [];
    await this._checkProjection(e.spatialReference);
    let r$12 = null;
    e.url && (r$12 = await this._fetch(t == null ? void 0 : t.signal));
    const n = L(r$12, { geometryType: e.geometryType }), a$12 = e.fields || n.fields || [], l = e.hasZ != null ? e.hasZ : n.hasZ, u$1 = n.geometryType;
    let d = e.objectIdField || n.objectIdFieldName || "__OBJECTID";
    const p = e.spatialReference || c;
    let c$12 = e.timeInfo;
    a$12 === n.fields && n.unknownFields.length > 0 && i$2.push({ name: "geojson-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: n.unknownFields } });
    let y = new r(a$12).get(d);
    y ? (y.type !== "esriFieldTypeString" && (y.type = "esriFieldTypeOID"), y.editable = false, y.nullable = false, d = y.name) : (y = { alias: d, name: d, type: n.objectIdFieldType === "string" ? "esriFieldTypeString" : "esriFieldTypeOID", editable: false, nullable: false }, a$12.unshift(y));
    const m2 = {};
    for (const o2 of a$12) {
      if (o2.name == null && (o2.name = o2.alias), o2.alias == null && (o2.alias = o2.name), !o2.name)
        throw new s("geojson-layer:invalid-field-name", "field name is missing", { field: o2 });
      if (!i.jsonValues.includes(o2.type))
        throw new s("geojson-layer:invalid-field-type", `invalid type for field "${o2.name}"`, { field: o2 });
      if (o2.name !== y.name) {
        const e2 = M(o2);
        e2 !== void 0 && (m2[o2.name] = e2);
      }
    }
    this._fieldsIndex = new r(a$12);
    const f2 = this._fieldsIndex.requiredFields.indexOf(y);
    if (f2 > -1 && this._fieldsIndex.requiredFields.splice(f2, 1), c$12) {
      if (c$12.startTimeField) {
        const e2 = this._fieldsIndex.get(c$12.startTimeField);
        e2 ? (c$12.startTimeField = e2.name, e2.type = "esriFieldTypeDate") : c$12.startTimeField = null;
      }
      if (c$12.endTimeField) {
        const e2 = this._fieldsIndex.get(c$12.endTimeField);
        e2 ? (c$12.endTimeField = e2.name, e2.type = "esriFieldTypeDate") : c$12.endTimeField = null;
      }
      if (c$12.trackIdField) {
        const e2 = this._fieldsIndex.get(c$12.trackIdField);
        e2 ? c$12.trackIdField = e2.name : (c$12.trackIdField = null, i$2.push({ name: "geojson-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: c$12 } }));
      }
      c$12.startTimeField || c$12.endTimeField || (i$2.push({ name: "geojson-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: c$12 } }), c$12 = null);
    }
    const I2 = u$1 ? o(u$1) : null, j2 = { warnings: i$2, featureErrors: [], layerDefinition: __spreadProps(__spreadValues({}, O), { drawingInfo: I2, templates: a(m2), extent: null, geometryType: u$1, objectIdField: d, fields: a$12, hasZ: !!l, timeInfo: c$12 }) };
    this._queryEngine = new Y({ fields: a$12, geometryType: u$1, hasM: false, hasZ: l, objectIdField: d, spatialReference: p, timeInfo: c$12, featureStore: new u({ geometryType: u$1, hasM: false, hasZ: l }), cacheSpatialQueries: true }), this._createDefaultAttributes = i$1(m2, d);
    const w2 = await this._createFeatures(r$12);
    this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, w2);
    const T2 = this._normalizeFeatures(w2, j2.warnings, j2.featureErrors);
    if (this._queryEngine.featureStore.addMany(T2), j2.layerDefinition.extent = this._queryEngine.fullExtent, j2.layerDefinition.timeInfo) {
      const { start: e2, end: t2 } = this._queryEngine.timeExtent;
      j2.layerDefinition.timeInfo.timeExtent = [e2, t2];
    }
    return j2;
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: s2 } = this._queryEngine;
    return await Promise.all([w(t, s2), f(e.adds, t), f(e.updates, t)]), await this._waitSnapshotComplete(), this._applyEdits(e);
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t.signal);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  async refresh(e) {
    var _a;
    return this._loadOptions.customParameters = e, (_a = this._snapshotTask) == null ? void 0 : _a.abort(), this._snapshotTask = j(this._snapshotFeatures), this._snapshotTask.promise.then((e2) => {
      this._queryEngine.featureStore.clear(), this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, e2);
      const t = this._normalizeFeatures(e2);
      t && this._queryEngine.featureStore.addMany(t);
    }, (e2) => {
      this._queryEngine.featureStore.clear(), j$1(e2) || s$1.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh", "An error occurred during refresh", { error: e2 }));
    }), await this._waitSnapshotComplete(), { extent: this._queryEngine.fullExtent, timeExtent: this._queryEngine.timeExtent };
  }
  async _createFeatures(e) {
    const { geometryType: t, hasZ: s2, objectIdField: i2 } = this._queryEngine, n = I(e, { geometryType: t, hasZ: s2, objectIdField: i2 });
    if (!E(this._queryEngine.spatialReference, c))
      for (const a2 of n)
        r$1(a2.geometry) && (a2.geometry = nt(g(rt(a2.geometry, this._queryEngine.geometryType, this._queryEngine.hasZ, false), c, this._queryEngine.spatialReference)));
    return n;
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(t) {
    const { url: s2, customParameters: i2 } = this._loadOptions, r2 = (await U(s2, { responseType: "json", query: __spreadValues({}, i2), signal: t })).data;
    return await T(r2), r2;
  }
  _normalizeFeatures(e, t, s2) {
    const { objectIdField: i2 } = this._queryEngine, r2 = [];
    for (const n of e) {
      const e2 = this._createDefaultAttributes(), a2 = m(this._fieldsIndex, e2, n.attributes, true, t);
      a2 ? s2 == null ? void 0 : s2.push(a2) : (this._assignObjectId(e2, n.attributes, true), n.attributes = e2, n.objectId = e2[i2], r2.push(n));
    }
    return r2;
  }
  _applyEdits(e) {
    const { adds: t, updates: s2, deletes: i2 } = e, r2 = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t && t.length && this._applyAddEdits(r2, t), s2 && s2.length && this._applyUpdateEdits(r2, s2), i2 && i2.length) {
      for (const e2 of i2)
        r2.deleteResults.push(f$1(e2));
      this._queryEngine.featureStore.removeManyById(i2);
    }
    return { extent: this._queryEngine.fullExtent, timeExtent: this._queryEngine.timeExtent, featureEditResults: r2 };
  }
  _applyAddEdits(e, t) {
    var _a;
    const { addResults: s2 } = e, { geometryType: i2, hasM: n, hasZ: o2, objectIdField: l, spatialReference: u2, featureStore: d } = this._queryEngine, c2 = [];
    for (const p of t) {
      if (p.geometry && i2 !== c$1(p.geometry)) {
        s2.push(a$1("Incorrect geometry type."));
        continue;
      }
      const t2 = this._createDefaultAttributes(), n2 = m(this._fieldsIndex, t2, p.attributes);
      if (n2)
        s2.push(n2);
      else {
        if (this._assignObjectId(t2, p.attributes), p.attributes = t2, p.uid != null) {
          const t3 = p.attributes[l];
          e.uidToObjectId[p.uid] = t3;
        }
        if (r$1(p.geometry)) {
          const e2 = (_a = p.geometry.spatialReference) != null ? _a : u2;
          p.geometry = g(g$1(p.geometry, e2), e2, u2);
        }
        c2.push(p), s2.push(f$1(p.attributes[l]));
      }
    }
    d.addMany(tt([], c2, i2, o2, n, l));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    var _a;
    const { geometryType: s2, hasM: i2, hasZ: n, objectIdField: o2, spatialReference: l, featureStore: u2 } = this._queryEngine;
    for (const d of t) {
      const { attributes: t2, geometry: p } = d, h = t2 && t2[o2];
      if (h == null) {
        e.push(a$1(`Identifier field ${o2} missing`));
        continue;
      }
      if (!u2.has(h)) {
        e.push(a$1(`Feature with object id ${h} missing`));
        continue;
      }
      const m$1 = ot(u2.getFeature(h), s2, n, i2);
      if (r$1(p)) {
        if (s2 !== c$1(p)) {
          e.push(a$1("Incorrect geometry type."));
          continue;
        }
        const t3 = (_a = p.spatialReference) != null ? _a : l;
        m$1.geometry = g(g$1(p, t3), t3, l);
      }
      if (t2) {
        const s3 = m(this._fieldsIndex, m$1.attributes, t2);
        if (s3) {
          e.push(s3);
          continue;
        }
      }
      u2.add(X(m$1, s2, n, i2, o2)), e.push(f$1(h));
    }
  }
  _createObjectIdGenerator(e, t) {
    const s2 = e.fieldsIndex.get(e.objectIdField);
    if (s2.type === "esriFieldTypeString")
      return () => s2.name + "-" + Date.now().toString(16);
    let i2 = Number.NEGATIVE_INFINITY;
    for (const r2 of t)
      r2.objectId && (i2 = Math.max(i2, r2.objectId));
    return i2 = Math.max(0, i2) + 1, () => i2++;
  }
  _assignObjectId(e, t, s2 = false) {
    const i2 = this._queryEngine.objectIdField;
    e[i2] = s2 && i2 in t ? t[i2] : this._objectIdGenerator();
  }
  async _checkProjection(e) {
    try {
      await f(c, e);
    } catch {
      throw new s("geojson-layer", "Projection not supported");
    }
  }
}
export { C as default };
