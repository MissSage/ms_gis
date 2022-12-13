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
import { en as h, dw as a, eo as r, c9 as r$1, ep as h$1, eq as s, t as t$1, er as w, dx as C, dz as f, ch as $, bB as E$1, dF as v, c0 as v$1, g as s$1, a as r$2, es as F$1, aX as y, bA as I, et as x, eu as b, bG as nt, aN as u, bm as o, at as y$1, aF as c, ap as u$1, cP as i } from "./index.js";
import { A, q, l, c as c$1, o as o$1, a as a$1, f as f$2 } from "./QueryEngineResult.js";
import { g, f as f$1, M } from "./projectionSupport.js";
import { t } from "./QueryEngineCapabilities.js";
import { t as t$2, v as v$2, n, I as I$1, P } from "./timeSupport.js";
import { E, F, z, v as v$3 } from "./utils4.js";
function V(e) {
  return e.every((e2) => e2.statisticType !== "exceedslimit");
}
const W = "feature-store:unsupported-query";
const K = new h(2e6);
let X = 0;
class Y {
  constructor(e) {
    this.capabilities = { query: t }, this.geometryType = e.geometryType, this.hasM = e.hasM, this.hasZ = e.hasZ, this.objectIdField = e.objectIdField, this.spatialReference = e.spatialReference, this.definitionExpression = e.definitionExpression, this.featureStore = e.featureStore, this.aggregateAdapter = e.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e.timeInfo, e.cacheSpatialQueries && (this._geometryQueryCache = new r(X++ + "$$", K)), this.fieldsIndex = new r$1(e.fields), e.scheduler && e.priority && (this._frameTask = e.scheduler.registerTask(e.priority));
  }
  destroy() {
    this._frameTask = h$1(this._frameTask), this.clearCache(), s(this._geometryQueryCache), this._changeHandle = h$1(this._changeHandle), s(this.fieldsIndex);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  get fullExtent() {
    const e = this.featureStore.fullBounds;
    return t$1(e) ? null : { xmin: e[0], ymin: e[1], xmax: e[2], ymax: e[3], spatialReference: E(this.spatialReference) };
  }
  get timeExtent() {
    return this.timeInfo ? (this._timeExtent || (this._timeExtent = t$2(this.timeInfo, this.featureStore)), this._timeExtent) : null;
  }
  clearCache() {
    var _a;
    (_a = this._geometryQueryCache) == null ? void 0 : _a.clear(), this._allItems = null, this._timeExtent = null;
  }
  async executeQuery(e, t2) {
    try {
      return (await this._executeQuery(e, {}, t2)).createQueryResponse();
    } catch (i2) {
      if (i2 !== F)
        throw i2;
      return new A([], e, this).createQueryResponse();
    }
  }
  async executeQueryForCount(e = {}, t2) {
    try {
      return (await this._executeQuery(e, { returnGeometry: false, returnCentroid: false, outSR: null }, t2)).createQueryResponseForCount();
    } catch (i2) {
      if (i2 !== F)
        throw i2;
      return 0;
    }
  }
  async executeQueryForExtent(e, t2) {
    const i2 = e.outSR;
    try {
      const s2 = await this._executeQuery(e, { returnGeometry: true, returnCentroid: false, outSR: null }, t2), r2 = s2.size;
      if (!r2)
        return { count: 0, extent: null };
      w(te, C), this.featureStore.forEachBounds(s2.items, (e2) => f(te, e2), ee);
      const a2 = { xmin: te[0], ymin: te[1], xmax: te[3], ymax: te[4], spatialReference: E(this.spatialReference) };
      this.hasZ && isFinite(te[2]) && isFinite(te[5]) && (a2.zmin = te[2], a2.zmax = te[5]);
      const n2 = g(a2, s2.spatialReference, i2);
      if (n2.spatialReference = E(i2 || this.spatialReference), n2.xmax - n2.xmin == 0) {
        const e2 = $(n2.spatialReference);
        n2.xmin -= e2, n2.xmax += e2;
      }
      if (n2.ymax - n2.ymin == 0) {
        const e2 = $(n2.spatialReference);
        n2.ymin -= e2, n2.ymax += e2;
      }
      if (this.hasZ && n2.zmin != null && n2.zmax != null && n2.zmax - n2.zmin == 0) {
        const e2 = $(n2.spatialReference);
        n2.zmin -= e2, n2.zmax += e2;
      }
      return { count: r2, extent: n2 };
    } catch (s2) {
      if (s2 === F)
        return { count: 0, extent: null };
      throw s2;
    }
  }
  async executeQueryForIds(e, t2) {
    return this.executeQueryForIdSet(e, t2).then((e2) => Array.from(e2));
  }
  async executeQueryForIdSet(e, t2) {
    try {
      const i2 = await this._executeQuery(e, { returnGeometry: true, returnCentroid: false, outSR: null }, t2), s2 = i2.items, r2 = new Set();
      return await this._reschedule(() => {
        for (const e2 of s2)
          r2.add(i2.featureAdapter.getObjectId(e2));
      }, t2), r2;
    } catch (i2) {
      if (i2 === F)
        return new Set();
      throw i2;
    }
  }
  async executeQueryForSnapping(e, t2) {
    const { point: i2, distance: s2, types: r2 } = e;
    if (r2 === q.NONE)
      return { candidates: [] };
    const a2 = await this._reschedule(() => this._checkQuerySupport(e.query), t2), o2 = !E$1(i2.spatialReference, this.spatialReference);
    o2 && await f$1(i2.spatialReference, this.spatialReference);
    const u2 = typeof s2 == "number" ? s2 : s2.x, c2 = typeof s2 == "number" ? s2 : s2.y, h2 = { xmin: i2.x - u2, xmax: i2.x + u2, ymin: i2.y - c2, ymax: i2.y + c2, spatialReference: i2.spatialReference }, l2 = o2 ? g(h2, this.spatialReference) : h2;
    if (!l2)
      return { candidates: [] };
    const f2 = (await v(v$1(i2), null, { signal: t2 }))[0], m = (await v(v$1(l2), null, { signal: t2 }))[0];
    if (t$1(f2) || t$1(m))
      return { candidates: [] };
    const p = new A(this._searchFeatures(this._getQueryBBoxes(m.toJSON())), a2, this);
    await this._reschedule(() => this._executeObjectIdsQuery(p), t2), await this._reschedule(() => this._executeTimeQuery(p), t2), await this._reschedule(() => this._executeAttributesQuery(p), t2);
    const d = f2.toJSON(), y2 = o2 ? g(d, this.spatialReference) : d, g$1 = o2 ? Math.max(l2.xmax - l2.xmin, l2.ymax - l2.ymin) / 2 : s2;
    return p.createSnappingResponse(__spreadProps(__spreadValues({}, e), { point: y2, distance: g$1 }), i2.spatialReference);
  }
  async executeQueryForLatestObservations(e, t2) {
    if (!this.timeInfo || !this.timeInfo.trackIdField)
      throw new s$1(W, "Missing timeInfo or timeInfo.trackIdField", { query: e, timeInfo: this.timeInfo });
    try {
      const i2 = await this._executeQuery(e, {}, t2);
      return await this._reschedule(() => this._filterLatest(i2), t2), i2.createQueryResponse();
    } catch (s2) {
      if (s2 !== F)
        throw s2;
      return new A([], e, this).createQueryResponse();
    }
  }
  async executeQueryForSummaryStatistics(e = {}, t2, i2) {
    const { field: s2, normalizationField: r2, valueExpression: a2 } = t2;
    return (await this._getQueryEngineResultForStats(e, { field: s2, normalizationField: r2, valueExpression: a2 }, i2)).createSummaryStatisticsResponse(t2);
  }
  async executeQueryForUniqueValues(e = {}, t2, i2) {
    const { field: s2, field2: r2, field3: a2, valueExpression: n2 } = t2;
    return (await this._getQueryEngineResultForStats(e, { field: s2, field2: r2, field3: a2, valueExpression: n2 }, i2)).createUniqueValuesResponse(t2);
  }
  async executeQueryForClassBreaks(e = {}, t2, i2) {
    const { field: s2, normalizationField: r2, valueExpression: a2 } = t2;
    return (await this._getQueryEngineResultForStats(e, { field: s2, normalizationField: r2, valueExpression: a2 }, i2)).createClassBreaksResponse(t2);
  }
  async executeQueryForHistogram(e = {}, t2, i2) {
    const { field: s2, normalizationField: r2, valueExpression: a2 } = t2;
    return (await this._getQueryEngineResultForStats(e, { field: s2, normalizationField: r2, valueExpression: a2 }, i2)).createHistogramResponse(t2);
  }
  async _schedule(e, t2) {
    return r$2(this._frameTask) ? this._frameTask.schedule(e, t2) : e(F$1);
  }
  async _reschedule(e, t2) {
    return r$2(this._frameTask) ? this._frameTask.reschedule(e, t2) : e(F$1);
  }
  _getAll(e) {
    return t$1(this._allItems) && (this._allItems = this.featureStore.toArray()), new A(this._allItems, e, this);
  }
  async _executeQuery(e, t2, i2) {
    e = y(e), e = await this._schedule(() => z(e, this.definitionExpression, this.spatialReference), i2), e = await this._reschedule(() => this._checkQuerySupport(e), i2), e = __spreadValues(__spreadValues({}, e), t2);
    const r2 = await this._reschedule(() => this._executeSceneFilterQuery(e, i2), i2), a2 = await this._reschedule(() => this._executeGeometryQuery(e, r2, i2), i2);
    return await this._reschedule(() => this._executeAggregateIdsQuery(a2), i2), await this._reschedule(() => this._executeObjectIdsQuery(a2), i2), await this._reschedule(() => this._executeTimeQuery(a2), i2), await this._reschedule(() => this._executeAttributesQuery(a2), i2), a2;
  }
  async _executeSceneFilterQuery(e, t2) {
    if (t$1(e.sceneFilter))
      return null;
    const { outSR: i2, returnGeometry: s2, returnCentroid: r2 } = e, a2 = this.featureStore.featureSpatialReference, o2 = e.sceneFilter.geometry, u2 = t$1(a2) || E$1(a2, o2.spatialReference) ? o2 : g(o2, a2);
    if (!u2)
      return null;
    const c2 = s2 || r2, h2 = I(i2) && !E$1(this.spatialReference, i2) && c2 ? async (e2) => this._project(e2, i2) : (e2) => e2, l2 = this.featureAdapter, f2 = this._searchFeatures(this._getQueryBBoxes(u2));
    if (e.sceneFilter.spatialRelationship === "disjoint") {
      if (!f2.length)
        return null;
      const i3 = new Set();
      for (const e2 of f2)
        i3.add(l2.getObjectId(e2));
      const s3 = await this._reschedule(() => this.featureStore.toArray(), t2), r3 = await this._reschedule(async () => {
        const r4 = await v$2("esriSpatialRelDisjoint", u2, this.geometryType, this.hasZ, this.hasM), a3 = (e2) => !i3.has(l2.getObjectId(e2)) || r4(l2.getGeometry(e2)), n2 = await this._runSpatialFilter(s3, a3, t2);
        return new A(n2, e, this);
      }, t2);
      return h2(r3);
    }
    if (!f2.length)
      return new A([], e, this);
    if (this._canExecuteSinglePass(u2, e))
      return h2(new A(f2, e, this));
    const m = await v$2("esriSpatialRelContains", u2, this.geometryType, this.hasZ, this.hasM), p = await this._runSpatialFilter(f2, (e2) => m(l2.getGeometry(e2)), t2);
    return h2(new A(p, e, this));
  }
  async _executeGeometryQuery(i2, s2, r2) {
    if (r$2(s2) && s2.items.length === 0)
      return s2;
    i2 = r$2(s2) ? s2.query : i2;
    const { geometry: a2, outSR: u2, spatialRel: c2, returnGeometry: h2, returnCentroid: l2 } = i2, f2 = this.featureStore.featureSpatialReference, m = !a2 || t$1(f2) || E$1(f2, a2.spatialReference) ? a2 : g(a2, f2), p = h2 || l2, d = I(u2) && !E$1(this.spatialReference, u2), y2 = this._geometryQueryCache && t$1(s2) ? d && p ? JSON.stringify({ originalFilterGeometry: a2, spatialRelationship: c2, outSpatialReference: u2 }) : JSON.stringify({ originalFilterGeometry: a2, spatialRelationship: c2 }) : null, g$1 = y2 ? this._geometryQueryCache.get(y2) : null;
    if (r$2(g$1))
      return new A(g$1, i2, this);
    const x$1 = async (e) => (d && p && await this._project(e, u2), y2 && this._geometryQueryCache.put(y2, e.items, e.items.length + 1), e);
    if (!m)
      return x$1(r$2(s2) ? s2 : this._getAll(i2));
    const _ = this.featureAdapter;
    let w2 = this._searchFeatures(this._getQueryBBoxes(a2));
    if (c2 === "esriSpatialRelDisjoint") {
      if (!w2.length)
        return x$1(r$2(s2) ? s2 : this._getAll(i2));
      const e = new Set();
      for (const i3 of w2)
        e.add(_.getObjectId(i3));
      const t2 = r$2(s2) ? s2.items : await this._reschedule(() => this.featureStore.toArray(), r2), a3 = await this._reschedule(async () => {
        const s3 = await v$2(c2, m, this.geometryType, this.hasZ, this.hasM), a4 = (t3) => !e.has(_.getObjectId(t3)) || s3(_.getGeometry(t3)), n2 = await this._runSpatialFilter(t2, a4, r2);
        return new A(n2, i2, this);
      }, r2);
      return x$1(a3);
    }
    if (r$2(s2)) {
      const i3 = new x();
      w2 = w2.filter((e) => b(s2.items, e, s2.items.length, i3) >= 0);
    }
    if (!w2.length) {
      const e = new A([], i2, this);
      return y2 && this._geometryQueryCache.put(y2, e.items, 1), e;
    }
    if (this._canExecuteSinglePass(m, i2))
      return x$1(new A(w2, i2, this));
    const S = await v$2(c2, m, this.geometryType, this.hasZ, this.hasM), Q = await this._runSpatialFilter(w2, (e) => S(_.getGeometry(e)), r2);
    return x$1(new A(Q, i2, this));
  }
  _executeAggregateIdsQuery(e) {
    if (e.items.length === 0 || !e.query.aggregateIds || !e.query.aggregateIds.length || t$1(this.aggregateAdapter))
      return;
    const t2 = new Set();
    for (const s2 of e.query.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(s2).forEach((e2) => t2.add(e2));
    }
    const i2 = this.featureAdapter.getObjectId;
    e.items = e.items.filter((e2) => t2.has(i2(e2)));
  }
  _executeObjectIdsQuery(e) {
    if (e.items.length === 0 || !e.query.objectIds || !e.query.objectIds.length)
      return;
    const t2 = new Set(e.query.objectIds), i2 = this.featureAdapter.getObjectId;
    e.items = e.items.filter((e2) => t2.has(i2(e2)));
  }
  _executeTimeQuery(e) {
    if (e.items.length === 0)
      return;
    const t2 = n(this.timeInfo, e.query.timeExtent, this.featureAdapter);
    t$1(t2) || (e.items = e.items.filter(t2));
  }
  _executeAttributesQuery(e) {
    if (e.items.length === 0)
      return;
    const t2 = l(e.query.where, this.fieldsIndex);
    if (t2) {
      if (!t2.isStandardized)
        throw new TypeError("Where clause is not standardized");
      e.items = e.items.filter((e2) => t2.testFeature(e2, this.featureAdapter));
    }
  }
  async _runSpatialFilter(e, t2, i2) {
    if (!t2)
      return e;
    if (t$1(this._frameTask))
      return e.filter((e2) => t2(e2));
    let s2 = 0;
    const r2 = new Array(), a2 = async (n2) => {
      for (; s2 < e.length; ) {
        const o2 = e[s2++];
        t2(o2) && (r2.push(o2), n2.madeProgress()), n2.done && await this._reschedule((e2) => a2(e2), i2);
      }
    };
    return this._reschedule((e2) => a2(e2), i2).then(() => r2);
  }
  _filterLatest(e) {
    const { trackIdField: t2, startTimeField: i2, endTimeField: s2 } = this.timeInfo, r2 = s2 || i2, a2 = new Map(), n2 = this.featureAdapter.getAttribute;
    for (const o2 of e.items) {
      const e2 = n2(o2, t2), i3 = n2(o2, r2), s3 = a2.get(e2);
      (!s3 || i3 > n2(s3, r2)) && a2.set(e2, o2);
    }
    e.items = Array.from(a2.values());
  }
  _canExecuteSinglePass(e, t2) {
    const { spatialRel: i2 } = t2;
    return I$1(e) && (i2 === "esriSpatialRelEnvelopeIntersects" || this.geometryType === "esriGeometryPoint" && (i2 === "esriSpatialRelIntersects" || i2 === "esriSpatialRelContains" || i2 === "esriSpatialRelWithin"));
  }
  async _project(e, t2) {
    if (!t2 || E$1(this.spatialReference, t2))
      return e;
    const i2 = this.featureAdapter, s2 = await M(e.items.map((e2) => v$3(this.geometryType, this.hasZ, this.hasM, i2.getGeometry(e2))), this.spatialReference, t2);
    return e.items = s2.map((t3, s3) => i2.cloneWithGeometry(e.items[s3], nt(t3, this.hasZ, this.hasM))), e;
  }
  _getQueryBBoxes(e) {
    if (I$1(e)) {
      if (u(e))
        return [o(e.xmin, e.ymin, e.xmax, e.ymax)];
      if (y$1(e))
        return e.rings.map((e2) => o(Math.min(e2[0][0], e2[2][0]), Math.min(e2[0][1], e2[2][1]), Math.max(e2[0][0], e2[2][0]), Math.max(e2[0][1], e2[2][1])));
    }
    return [c(u$1(), e)];
  }
  _searchFeatures(e) {
    for (const i2 of e)
      this.featureStore.forEachInBounds(i2, (e2) => ie.add(e2));
    const t2 = Array.from(ie.values());
    return ie.clear(), t2;
  }
  async _checkStatisticsSupport(e, t2) {
    if (e.distance < 0 || e.geometryPrecision != null || e.multipatchOption || e.pixelSize || e.relationParam || e.text || e.outStatistics || e.groupByFieldsForStatistics || e.having || e.orderByFields)
      throw new s$1(W, "Unsupported query options", { query: e });
    return this._checkAttributesQuerySupport(e), Promise.all([this._checkStatisticsParamsSupport(t2), P(e, this.geometryType, this.spatialReference), f$1(this.spatialReference, e.outSR)]).then(() => e);
  }
  async _checkStatisticsParamsSupport(e) {
    let t2 = [];
    if (e.valueExpression) {
      const { arcadeUtils: i$1 } = await i();
      t2 = i$1.extractFieldNames(e.valueExpression);
    }
    if (e.field && t2.push(e.field), e.field2 && t2.push(e.field2), e.field3 && t2.push(e.field3), e.normalizationField && t2.push(e.normalizationField), !t2.length)
      throw new s$1(W, "params should have at least a field or valueExpression", { params: e });
    c$1(this.fieldsIndex, t2, "params contains missing fields");
  }
  async _checkQuerySupport(e) {
    if (e.distance < 0 || e.geometryPrecision != null || e.multipatchOption || e.pixelSize || e.relationParam || e.text)
      throw new s$1(W, "Unsupported query options", { query: e });
    return this._checkAttributesQuerySupport(e), this._checkStatisticsQuerySupport(e), Promise.all([P(e, this.geometryType, this.spatialReference), f$1(this.spatialReference, e.outSR)]).then(() => e);
  }
  _checkAttributesQuerySupport(e) {
    const { outFields: t2, orderByFields: s2, returnDistinctValues: r2, outStatistics: a2 } = e, n2 = a2 ? a2.map((e2) => e2.outStatisticFieldName && e2.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
    if (s2 && s2.length > 0) {
      const e2 = " asc", t3 = " desc", i2 = s2.map((i3) => {
        const s3 = i3.toLowerCase();
        return s3.includes(e2) ? s3.split(e2)[0] : s3.includes(t3) ? s3.split(t3)[0] : i3;
      }).filter((e3) => !n2.includes(e3));
      c$1(this.fieldsIndex, i2, "orderByFields contains missing fields");
    }
    if (t2 && t2.length > 0)
      c$1(this.fieldsIndex, t2, "outFields contains missing fields");
    else if (r2)
      throw new s$1(W, "outFields should be specified for returnDistinctValues", { query: e });
    o$1(this.fieldsIndex, e.where);
  }
  _checkStatisticsQuerySupport(e) {
    const { outStatistics: t2, groupByFieldsForStatistics: s2, having: r2 } = e, a2 = s2 && s2.length, n2 = t2 && t2.length;
    if (r2) {
      if (!a2 || !n2)
        throw new s$1(W, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: e });
      a$1(this.fieldsIndex, r2, t2);
    }
    if (n2) {
      if (!V(t2))
        return;
      const r3 = t2.map((e2) => e2.onStatisticField).filter(Boolean);
      c$1(this.fieldsIndex, r3, "onStatisticFields contains missing fields"), a2 && c$1(this.fieldsIndex, s2, "groupByFieldsForStatistics contains missing fields");
      for (const s3 of t2) {
        const { onStatisticField: t3, statisticType: r4 } = s3;
        if ((r4 === "percentile_disc" || r4 === "percentile_cont") && "statisticParameters" in s3) {
          const { statisticParameters: t4 } = s3;
          if (!t4)
            throw new s$1(W, "statisticParamters should be set for percentile type", { definition: s3, query: e });
        } else if (r4 !== "count" && t3 && f$2(t3, this.fieldsIndex))
          throw new s$1(W, "outStatistics contains non-numeric fields", { definition: s3, query: e });
      }
    }
  }
  async _getQueryEngineResultForStats(e, t2, i2) {
    e = y(e);
    try {
      e = await this._schedule(() => z(e, this.definitionExpression, this.spatialReference), i2), e = await this._reschedule(() => this._checkStatisticsSupport(e, t2), i2);
      const s2 = await this._reschedule(() => this._executeSceneFilterQuery(e, i2), i2), r2 = await this._reschedule(() => this._executeGeometryQuery(e, s2, i2), i2);
      return await this._reschedule(() => this._executeAggregateIdsQuery(r2), i2), await this._reschedule(() => this._executeObjectIdsQuery(r2), i2), await this._reschedule(() => this._executeTimeQuery(r2), i2), await this._reschedule(() => this._executeAttributesQuery(r2), i2), r2;
    } catch (r2) {
      if (r2 !== F)
        throw r2;
      return new A([], e, this);
    }
  }
}
const ee = a(), te = a(), ie = new Set();
export { Y };
