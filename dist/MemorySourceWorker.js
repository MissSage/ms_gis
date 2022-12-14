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
import { g as s, fV as i, eg as M, c9 as r, t as t$1, ar as c, aP as s$1, a as r$1, c1 as tt, c3 as ot, fW as X, ei as c$1 } from "./index.js";
import { t, n } from "./objectIdUtils.js";
import { u } from "./FeatureStore.js";
import { f, g } from "./projectionSupport.js";
import { Y } from "./QueryEngine.js";
import { i as i$1, o, a } from "./clientSideDefaults.js";
import { w as w$1, a as a$1, m, f as f$1, g as g$1 } from "./sourceUtils.js";
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
const R = c$1, q = { xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: c$1 }, D = { hasAttachments: false, capabilities: "query, editing, create, delete, update", useStandardizedQueries: true, supportsCoordinatesQuantization: true, supportsReturningQueryGeometry: true, advancedQueryCapabilities: { supportsQueryAttachments: false, supportsStatistics: true, supportsPercentileStatistics: true, supportsReturningGeometryCentroid: true, supportsQueryWithDistance: true, supportsDistinct: true, supportsReturningQueryExtent: true, supportsReturningGeometryProperties: false, supportsHavingClause: true, supportsOrderBy: true, supportsPagination: true, supportsQueryWithResultType: false, supportsSqlExpression: true, supportsDisjointSpatialRel: true } };
function O(e) {
  return s$1(e) ? e.z != null : !!e.hasZ;
}
function w(e) {
  return s$1(e) ? e.m != null : !!e.hasM;
}
class S {
  constructor() {
    this._queryEngine = null, this._nextObjectId = null;
  }
  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = this._fieldsIndex = this._createDefaultAttributes = null;
  }
  async load(t$12) {
    const i$2 = [], { features: s$12 } = t$12, r$12 = this._inferLayerProperties(s$12, t$12.fields), n$1 = t$12.fields || [], a$12 = t$12.hasM != null ? t$12.hasM : r$12.hasM, o$1 = t$12.hasZ != null ? t$12.hasZ : r$12.hasZ, l = !t$12.spatialReference && !r$12.spatialReference, y = l ? R : t$12.spatialReference || r$12.spatialReference, I = l ? q : null, b = t$12.geometryType || r$12.geometryType, F = !b;
    let j = t$12.objectIdField || r$12.objectIdField, _ = t$12.timeInfo;
    if (!F && (l && i$2.push({ name: "feature-layer:spatial-reference-not-found", message: "Spatial reference not provided or found in features. Defaults to WGS84" }), !b))
      throw new s("feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");
    if (!j)
      throw new s("feature-layer:missing-property", "objectIdField not set and couldn't be found in the provided fields");
    if (r$12.objectIdField && j !== r$12.objectIdField && (i$2.push({ name: "feature-layer:duplicated-oid-field", message: `Provided objectIdField "${j}" doesn't match the field name "${r$12.objectIdField}", found in the provided fields` }), j = r$12.objectIdField), j && !r$12.objectIdField) {
      let e = null;
      n$1.some((t2) => t2.name === j && (e = t2, true)) ? (e.type = "esriFieldTypeOID", e.editable = false, e.nullable = false) : n$1.unshift({ alias: j, name: j, type: "esriFieldTypeOID", editable: false, nullable: false });
    }
    for (const u2 of n$1) {
      if (u2.name == null && (u2.name = u2.alias), u2.alias == null && (u2.alias = u2.name), !u2.name)
        throw new s("feature-layer:invalid-field-name", "field name is missing", { field: u2 });
      if (u2.name === j && (u2.type = "esriFieldTypeOID"), !i.jsonValues.includes(u2.type))
        throw new s("feature-layer:invalid-field-type", `invalid type for field "${u2.name}"`, { field: u2 });
    }
    const O2 = {};
    for (const e of n$1)
      if (e.type !== "esriFieldTypeOID" && e.type !== "esriFieldTypeGlobalID") {
        const t2 = M(e);
        t2 !== void 0 && (O2[e.name] = t2);
      }
    if (this._fieldsIndex = new r(n$1), this._createDefaultAttributes = i$1(O2, j), _) {
      if (_.startTimeField) {
        const e = this._fieldsIndex.get(_.startTimeField);
        e ? (_.startTimeField = e.name, e.type = "esriFieldTypeDate") : _.startTimeField = null;
      }
      if (_.endTimeField) {
        const e = this._fieldsIndex.get(_.endTimeField);
        e ? (_.endTimeField = e.name, e.type = "esriFieldTypeDate") : _.endTimeField = null;
      }
      if (_.trackIdField) {
        const e = this._fieldsIndex.get(_.trackIdField);
        e ? _.trackIdField = e.name : (_.trackIdField = null, i$2.push({ name: "feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: _ } }));
      }
      _.startTimeField || _.endTimeField || (i$2.push({ name: "feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing or invalid", details: { timeInfo: _ } }), _ = null);
    }
    const w2 = { warnings: i$2, featureErrors: [], layerDefinition: __spreadProps(__spreadValues({}, D), { drawingInfo: o(b), templates: a(O2), extent: I, geometryType: b, objectIdField: j, fields: n$1, hasZ: !!o$1, hasM: !!a$12, timeInfo: _ }), assignedObjectIds: {} };
    if (this._queryEngine = new Y({ fields: n$1, geometryType: b, hasM: a$12, hasZ: o$1, objectIdField: j, spatialReference: y, featureStore: new u({ geometryType: b, hasM: a$12, hasZ: o$1 }), timeInfo: _, cacheSpatialQueries: true }), !s$12 || !s$12.length)
      return this._nextObjectId = t, w2;
    const S2 = n(j, s$12);
    return this._nextObjectId = S2 + 1, await f(s$12, y), this._loadInitialFeatures(w2, s$12);
  }
  async applyEdits(e) {
    const { spatialReference: t2, geometryType: i2 } = this._queryEngine;
    return await Promise.all([w$1(t2, i2), f(e.adds, t2), f(e.updates, t2)]), this._applyEdits(e);
  }
  queryFeatures(e, t2 = {}) {
    return this._queryEngine.executeQuery(e, t2.signal);
  }
  queryFeatureCount(e, t2 = {}) {
    return this._queryEngine.executeQueryForCount(e, t2.signal);
  }
  queryObjectIds(e, t2 = {}) {
    return this._queryEngine.executeQueryForIds(e, t2.signal);
  }
  queryExtent(e, t2 = {}) {
    return this._queryEngine.executeQueryForExtent(e, t2.signal);
  }
  querySnapping(e, t2 = {}) {
    return this._queryEngine.executeQueryForSnapping(e, t2.signal);
  }
  _inferLayerProperties(e, i2) {
    let r2, n2, a2 = null, o2 = null, l = null;
    for (const u2 of e) {
      const e2 = u2.geometry;
      if (!t$1(e2) && (a2 || (a2 = c(e2)), o2 || (o2 = e2.spatialReference), r2 == null && (r2 = O(e2)), n2 == null && (n2 = w(e2)), a2 && o2 && r2 != null && n2 != null))
        break;
    }
    if (i2 && i2.length) {
      let e2 = null;
      i2.some((t2) => {
        const i3 = t2.type === "esriFieldTypeOID", s2 = !t2.type && t2.name && t2.name.toLowerCase() === "objectid";
        return e2 = t2, i3 || s2;
      }) && (l = e2.name);
    }
    return { geometryType: a2, spatialReference: o2, objectIdField: l, hasM: n2, hasZ: r2 };
  }
  _loadInitialFeatures(e, t2) {
    const { geometryType: r2, hasM: n2, hasZ: o2, objectIdField: l, spatialReference: u2, featureStore: d } = this._queryEngine, p = [];
    for (const a2 of t2) {
      if (a2.uid != null && (e.assignedObjectIds[a2.uid] = -1), a2.geometry && r2 !== c(a2.geometry)) {
        e.featureErrors.push(a$1("Incorrect geometry type."));
        continue;
      }
      const t3 = this._createDefaultAttributes(), n3 = m(this._fieldsIndex, t3, a2.attributes, true, e.warnings);
      n3 ? e.featureErrors.push(n3) : (this._assignObjectId(t3, a2.attributes, true), a2.attributes = t3, a2.uid != null && (e.assignedObjectIds[a2.uid] = a2.attributes[l]), r$1(a2.geometry) && (a2.geometry = g(a2.geometry, a2.geometry.spatialReference, u2)), p.push(a2));
    }
    if (d.addMany(tt([], p, r2, o2, n2, l)), e.layerDefinition.extent = this._queryEngine.fullExtent, e.layerDefinition.timeInfo) {
      const { start: t3, end: i2 } = this._queryEngine.timeExtent;
      e.layerDefinition.timeInfo.timeExtent = [t3, i2];
    }
    return e;
  }
  _applyEdits(e) {
    const { adds: t2, updates: i2, deletes: s2 } = e, r2 = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t2 && t2.length && this._applyAddEdits(r2, t2), i2 && i2.length && this._applyUpdateEdits(r2, i2), s2 && s2.length) {
      for (const e2 of s2)
        r2.deleteResults.push(f$1(e2));
      this._queryEngine.featureStore.removeManyById(s2);
    }
    return { fullExtent: this._queryEngine.fullExtent, featureEditResults: r2 };
  }
  _applyAddEdits(e, t2) {
    var _a;
    const { addResults: r2 } = e, { geometryType: n2, hasM: o2, hasZ: l, objectIdField: u2, spatialReference: d, featureStore: p } = this._queryEngine, f2 = [];
    for (const a2 of t2) {
      if (a2.geometry && n2 !== c(a2.geometry)) {
        r2.push(a$1("Incorrect geometry type."));
        continue;
      }
      const t3 = this._createDefaultAttributes(), o3 = m(this._fieldsIndex, t3, a2.attributes);
      if (o3)
        r2.push(o3);
      else {
        if (this._assignObjectId(t3, a2.attributes), a2.attributes = t3, a2.uid != null) {
          const t4 = a2.attributes[u2];
          e.uidToObjectId[a2.uid] = t4;
        }
        if (r$1(a2.geometry)) {
          const e2 = (_a = a2.geometry.spatialReference) != null ? _a : d;
          a2.geometry = g(g$1(a2.geometry, e2), e2, d);
        }
        f2.push(a2), r2.push(f$1(a2.attributes[u2]));
      }
    }
    p.addMany(tt([], f2, n2, l, o2, u2));
  }
  _applyUpdateEdits({ updateResults: e }, t2) {
    var _a;
    const { geometryType: r2, hasM: n2, hasZ: a2, objectIdField: u2, spatialReference: d, featureStore: p } = this._queryEngine;
    for (const f2 of t2) {
      const { attributes: t3, geometry: c$12 } = f2, m$1 = t3 && t3[u2];
      if (m$1 == null) {
        e.push(a$1(`Identifier field ${u2} missing`));
        continue;
      }
      if (!p.has(m$1)) {
        e.push(a$1(`Feature with object id ${m$1} missing`));
        continue;
      }
      const h = ot(p.getFeature(m$1), r2, a2, n2);
      if (r$1(c$12)) {
        if (r2 !== c(c$12)) {
          e.push(a$1("Incorrect geometry type."));
          continue;
        }
        const t4 = (_a = c$12.spatialReference) != null ? _a : d;
        h.geometry = g(g$1(c$12, t4), t4, d);
      }
      if (t3) {
        const i2 = m(this._fieldsIndex, h.attributes, t3);
        if (i2) {
          e.push(i2);
          continue;
        }
      }
      p.add(X(h, r2, a2, n2, u2)), e.push(f$1(m$1));
    }
  }
  _assignObjectId(e, t2, i2 = false) {
    const s2 = this._queryEngine.objectIdField;
    i2 && t2 && isFinite(t2[s2]) ? e[s2] = t2[s2] : e[s2] = this._nextObjectId++;
  }
}
export { S as default };
