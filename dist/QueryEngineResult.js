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
import { ey as e$1, g as s$1, t as t$2, bA as I, bB as E$1, a as r$2, ez as te, eA as v$2, eB as l$1, au as r$3, eC as e$2, cP as i } from "./index.js";
import { s as s$2 } from "./quantizationUtils.js";
import { WhereClause as f$1 } from "./WhereClause.js";
import { c as c$2, x, m, f as f$2, d as d$1, V, T, F, D as D$1, N as N$1, S, v, p } from "./utils3.js";
import { g } from "./projectionSupport.js";
import { E as E$2, v as v$1, b } from "./utils4.js";
class c$1 {
  constructor(e2, c2) {
    this._cache = new e$1(e2), this._invalidCache = new e$1(c2);
  }
  get(t2, c2) {
    const i2 = `${c2.uid}:${t2}`, r2 = this._cache.get(i2);
    if (r2)
      return r2;
    if (this._invalidCache.get(i2) !== void 0)
      return null;
    try {
      const r3 = f$1.create(t2, c2);
      return this._cache.put(i2, r3), r3;
    } catch {
      return this._invalidCache.put(i2, null), null;
    }
  }
}
const s = new c$1(50, 500), n = "feature-store:unsupported-query", t$1 = " as ", r$1 = new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeDate"]);
function o(i2, t2) {
  if (!t2)
    return true;
  const r2 = s.get(t2, i2);
  if (!r2)
    throw new s$1(n, "invalid SQL expression", { where: t2 });
  if (!r2.isStandardized)
    throw new s$1(n, "where clause is not standard", { where: t2 });
  return c(i2, r2.fieldNames, "where clause contains missing fields"), true;
}
function a(i2, t2, r2) {
  if (!t2)
    return true;
  const o2 = s.get(t2, i2);
  if (!o2)
    throw new s$1(n, "invalid SQL expression", { having: t2 });
  if (!o2.isAggregate)
    throw new s$1(n, "having does not contain a valid aggregate function", { having: t2 });
  const a2 = o2.fieldNames;
  c(i2, a2, "having contains missing fields");
  if (!o2.getExpressions().every((e2) => {
    const { aggregateType: s2, field: n2 } = e2, t3 = i2.has(n2) && i2.get(n2).name;
    return r2.some((e3) => {
      const { onStatisticField: n3, statisticType: r3 } = e3;
      return (i2.has(n3) && i2.get(n3).name) === t3 && r3.toLowerCase().trim() === s2;
    });
  }))
    throw new s$1(n, "expressions in having should also exist in outStatistics", { having: t2 });
  return true;
}
function l(e2, i2) {
  return e2 ? s.get(e2, i2) : null;
}
function c(i2, s2, t2, r2 = true) {
  const o2 = [];
  for (const u2 of s2)
    if (u2 !== "*" && !i2.has(u2))
      if (r2) {
        const s3 = d(u2);
        try {
          const t3 = l(s3, i2);
          if (!t3)
            throw new s$1(n, "invalid SQL expression", { where: s3 });
          if (!t3.isStandardized)
            throw new s$1(n, "expression is not standard", { clause: t3 });
          c(i2, t3.fieldNames, "expression contains missing fields");
        } catch (a2) {
          const e2 = a2 && a2.details;
          if (e2 && (e2.clause || e2.where))
            throw a2;
          e2 && e2.missingFields ? o2.push(...e2.missingFields) : o2.push(u2);
        }
      } else
        o2.push(u2);
  if (o2.length)
    throw new s$1(n, t2, { missingFields: o2 });
}
function d(e2) {
  return e2.split(t$1)[0];
}
function u(e2) {
  return e2.split(t$1)[1];
}
function f(e2, i2) {
  const s2 = i2.get(e2);
  return !!s2 && !r$1.has(s2.type);
}
class r {
  constructor(t2, a2, l$12) {
    var _a;
    this._fieldDataCache = new Map(), this._returnDistinctMap = new Map(), this.returnDistinctValues = (_a = t2.returnDistinctValues) != null ? _a : false, this.fieldsIndex = l$12, this.featureAdapter = a2;
    const r2 = t2.outFields;
    if (r2 && !r2.includes("*")) {
      this.outFields = r2;
      let t3 = 0;
      for (const a3 of r2) {
        const r3 = d(a3), n2 = this.fieldsIndex.get(r3), u$1 = n2 ? null : l(r3, l$12), d$12 = n2 ? n2.name : u(a3) || "FIELD_EXP_" + t3++;
        this._fieldDataCache.set(a3, { alias: d$12, clause: u$1 });
      }
    }
  }
  countDistinctValues(t2) {
    return this.returnDistinctValues ? (t2.forEach((t3) => this.getAttributes(t3)), this._returnDistinctMap.size) : t2.length;
  }
  getAttributes(t2) {
    const e2 = this._processAttributesForOutFields(t2);
    return this._processAttributesForDistinctValues(e2);
  }
  getFieldValue(t2, e2, s2) {
    const a2 = s2 ? s2.name : e2;
    let l$12 = null;
    return this._fieldDataCache.has(a2) ? l$12 = this._fieldDataCache.get(a2).clause : s2 || (l$12 = l(e2, this.fieldsIndex), this._fieldDataCache.set(a2, { alias: a2, clause: l$12 })), s2 ? this.featureAdapter.getAttribute(t2, a2) : l$12.calculateValue(t2, this.featureAdapter);
  }
  getDataValue(t2, e2) {
    const i2 = e2.normalizationType, s2 = e2.normalizationTotal;
    let r2 = this.getFieldValue(t2, e2.field, this.fieldsIndex.get(e2.field));
    if (e2.field2 && (r2 = `${c$2(r2)}${e2.fieldDelimiter}${c$2(this.getFieldValue(t2, e2.field2, this.fieldsIndex.get(e2.field2)))}`, e2.field3 && (r2 = `${r2}${e2.fieldDelimiter}${c$2(this.getFieldValue(t2, e2.field3, this.fieldsIndex.get(e2.field3)))}`)), i2 && Number.isFinite(r2)) {
      const a2 = i2 === "field" && e2.normalizationField ? this.getFieldValue(t2, e2.normalizationField, this.fieldsIndex.get(e2.normalizationField)) : null;
      r2 = x(r2, i2, a2, s2);
    }
    return r2;
  }
  getExpressionValue(t2, e2, i2, s2) {
    const a2 = { attributes: this.featureAdapter.getAttributes(t2), layer: { fields: this.fieldsIndex.fields } }, l2 = s2.createExecContext(a2, i2);
    return s2.executeFunction(e2, l2);
  }
  getExpressionValues(t2, e2, i2, s2) {
    const a2 = { fields: this.fieldsIndex.fields };
    return t2.map((t3) => {
      const l2 = { attributes: this.featureAdapter.getAttributes(t3), layer: a2 }, r2 = s2.createExecContext(l2, i2);
      return s2.executeFunction(e2, r2);
    });
  }
  validateItem(t2, e2) {
    return this._fieldDataCache.has(e2) || this._fieldDataCache.set(e2, { alias: e2, clause: l(e2, this.fieldsIndex) }), this._fieldDataCache.get(e2).clause.testFeature(t2, this.featureAdapter);
  }
  validateItems(t2, e2) {
    return this._fieldDataCache.has(e2) || this._fieldDataCache.set(e2, { alias: e2, clause: l(e2, this.fieldsIndex) }), this._fieldDataCache.get(e2).clause.testSet(t2, this.featureAdapter);
  }
  _processAttributesForOutFields(t2) {
    const e2 = this.outFields;
    if (!e2 || !e2.length)
      return this.featureAdapter.getAttributes(t2);
    const i2 = {};
    for (const s2 of e2) {
      const { alias: e3, clause: a2 } = this._fieldDataCache.get(s2);
      i2[e3] = a2 ? a2.calculateValue(t2, this.featureAdapter) : this.featureAdapter.getAttribute(t2, e3);
    }
    return i2;
  }
  _processAttributesForDistinctValues(e2) {
    if (t$2(e2) || !this.returnDistinctValues)
      return e2;
    const i2 = this.outFields, s2 = [];
    if (i2)
      for (const t2 of i2) {
        const { alias: i3 } = this._fieldDataCache.get(t2);
        s2.push(e2[i3]);
      }
    else
      for (const t2 in e2)
        s2.push(e2[t2]);
    const a2 = `${(i2 || ["*"]).join(",")}=${s2.join(",")}`;
    let l2 = this._returnDistinctMap.get(a2) || 0;
    return this._returnDistinctMap.set(a2, ++l2), l2 > 1 ? null : e2;
  }
}
function t(t2, e2, r2) {
  return { objectId: t2, target: e2, distance: r2, type: "vertex" };
}
function e(t2, e2, r2, n2, d2, a2 = false) {
  return { objectId: t2, target: e2, distance: r2, type: "edge", start: n2, end: d2, draped: a2 };
}
class A {
  constructor(e2, t2, i2) {
    this.items = e2, this.query = t2, this.geometryType = i2.geometryType, this.hasM = i2.hasM, this.hasZ = i2.hasZ, this.fieldsIndex = i2.fieldsIndex, this.objectIdField = i2.objectIdField, this.spatialReference = i2.spatialReference, this.featureAdapter = i2.featureAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const e2 = new r(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics)
      return e2.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: t2, having: i2, outStatistics: s2 } = this.query, a2 = t2 == null ? void 0 : t2.length;
    if (!!!a2)
      return 1;
    const r$12 = new Map(), n2 = new Map(), o2 = new Set();
    for (const l2 of s2) {
      const { statisticType: s3 } = l2, a3 = s3 !== "exceedslimit" ? l2.onStatisticField : void 0;
      if (!n2.has(a3)) {
        const i3 = [];
        for (const s4 of t2) {
          const t3 = this._getAttributeValues(e2, s4, r$12);
          i3.push(t3);
        }
        n2.set(a3, this._calculateUniqueValues(i3, e2.returnDistinctValues));
      }
      const u2 = n2.get(a3);
      for (const t3 in u2) {
        const { data: s4, items: a4 } = u2[t3], r2 = s4.join(",");
        i2 && !e2.validateItems(a4, i2) || o2.add(r2);
      }
    }
    return o2.size;
  }
  async createQueryResponse() {
    let e2;
    if (this.query.outStatistics) {
      e2 = this.query.outStatistics.some((e3) => e3.statisticType === "exceedslimit") ? this._createExceedsLimitQueryResponse(this.query) : await this._createStatisticsQueryResponse(this.query);
    } else
      e2 = this._createFeatureQueryResponse(this.query);
    return this.query.returnQueryGeometry && (I(this.query.outSR) && !E$1(this.query.geometry.spatialReference, this.query.outSR) ? e2.queryGeometry = E$2(__spreadValues({ spatialReference: this.query.outSR }, g(this.query.geometry, this.query.geometry.spatialReference, this.query.outSR))) : e2.queryGeometry = E$2(__spreadValues({ spatialReference: this.query.outSR }, this.query.geometry))), e2;
  }
  createSnappingResponse(t$12, i2) {
    const s2 = this.featureAdapter, a2 = N(this.hasZ, this.hasM), { point: r2 } = t$12, n2 = typeof t$12.distance == "number" ? t$12.distance : t$12.distance.x, o2 = typeof t$12.distance == "number" ? t$12.distance : t$12.distance.y, l2 = { candidates: [] }, u2 = this.geometryType === "esriGeometryPolygon", c2 = r2.z != null, h = r2.m != null, f2 = this._getPointCreator(r2, c2, h, this.spatialReference, i2), g2 = new D(null, 0), p2 = new D(null, 0), y = { x: 0, y: 0, z: 0 };
    for (const x2 of this.items) {
      const i3 = s2.getGeometry(x2);
      if (t$2(i3))
        continue;
      const { coords: c3, lengths: h2 } = i3;
      if (g2.coords = c3, p2.coords = c3, t$12.types & q.EDGE) {
        let e$12 = 0;
        for (let t2 = 0; t2 < h2.length; t2++) {
          const i4 = h2[t2];
          for (let t3 = 0; t3 < i4; t3++, e$12 += a2) {
            const u3 = g2;
            if (u3.coordsIndex = e$12, t3 !== i4 - 1) {
              const t4 = p2;
              t4.coordsIndex = e$12 + a2;
              const i5 = y;
              E(y, r2, u3, t4);
              const c4 = (r2.x - i5.x) / n2, m2 = (r2.y - i5.y) / o2, h3 = c4 * c4 + m2 * m2;
              h3 <= 1 && l2.candidates.push(e(s2.getObjectId(x2), f2(i5), Math.sqrt(h3), f2(u3), f2(t4)));
            }
          }
        }
      }
      if (t$12.types & q.VERTEX) {
        const e2 = u2 ? c3.length - a2 : c3.length;
        for (let t$13 = 0; t$13 < e2; t$13 += a2) {
          const e3 = g2;
          e3.coordsIndex = t$13;
          const i4 = (r2.x - e3.x) / n2, a3 = (r2.y - e3.y) / o2, u3 = i4 * i4 + a3 * a3;
          u3 <= 1 && l2.candidates.push(t(s2.getObjectId(x2), f2(e3), Math.sqrt(u3)));
        }
      }
    }
    return l2.candidates.sort((e2, t2) => e2.distance - t2.distance), l2;
  }
  _getPointCreator(e2, i2, s2, a2, r2) {
    const n2 = r$2(r2) && !E$1(a2, r2) ? (e3) => g(e3, a2, r2) : (e3) => e3, { hasZ: o2 } = this, u2 = 0, d2 = e2.m;
    return i2 && s2 ? o2 ? ({ x: e3, y: t2, z: i3 }) => n2({ x: e3, y: t2, z: i3, m: d2 }) : ({ x: e3, y: t2 }) => n2({ x: e3, y: t2, z: u2, m: d2 }) : i2 ? o2 ? ({ x: e3, y: t2, z: i3 }) => n2({ x: e3, y: t2, z: i3 }) : ({ x: e3, y: t2 }) => n2({ x: e3, y: t2, z: u2 }) : s2 ? ({ x: e3, y: t2 }) => n2({ x: e3, y: t2, m: d2 }) : ({ x: e3, y: t2 }) => n2({ x: e3, y: t2 });
  }
  async createSummaryStatisticsResponse(e2) {
    const { field: t2, valueExpression: i2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, minValue: n2, maxValue: o2, scale: l2 } = e2, u2 = this.fieldsIndex.isDateField(t2), c2 = await this._getDataValues({ field: t2, valueExpression: i2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, scale: l2 }), d2 = m({ normalizationType: a2, normalizationField: s2, minValue: n2, maxValue: o2 }), m$1 = this.fieldsIndex.get(t2), h = { value: 0.5, fieldType: m$1 == null ? void 0 : m$1.type }, f2 = te(m$1) ? f$2({ values: c2, supportsNullCount: d2, percentileParams: h }) : d$1({ values: c2, minValue: n2, maxValue: o2, useSampleStdDev: !a2, supportsNullCount: d2, percentileParams: h });
    return V(f2, u2);
  }
  async createUniqueValuesResponse(e2) {
    const { field: t2, valueExpression: i2, domains: s2, returnAllCodedValues: a2, scale: r2 } = e2, n2 = await this._getDataValues({ field: t2, field2: e2.field2, field3: e2.field3, fieldDelimiter: e2.fieldDelimiter, valueExpression: i2, scale: r2 }), o2 = T(n2);
    return F(o2, s2, a2, e2.fieldDelimiter);
  }
  async createClassBreaksResponse(e2) {
    const { field: t2, valueExpression: i2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numClasses: c2, scale: d2 } = e2, m2 = await this._getDataValues({ field: t2, valueExpression: i2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, scale: d2 }), h = D$1(m2, { field: t2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numClasses: c2 });
    return N$1(h, n2);
  }
  async createHistogramResponse(e2) {
    const { field: t2, valueExpression: i2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numBins: c2, scale: d2 } = e2, m2 = await this._getDataValues({ field: t2, valueExpression: i2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, scale: d2 });
    return S(m2, { field: t2, normalizationField: s2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numBins: c2 });
  }
  _sortFeatures(e2, t2, i2) {
    if (e2.length > 1 && t2 && t2.length)
      for (const s2 of t2.reverse()) {
        const t3 = s2.split(" "), a2 = t3[0], r2 = this.fieldsIndex.get(a2), n2 = t3[1] && t3[1].toLowerCase() === "desc", o2 = v(r2 == null ? void 0 : r2.type, n2);
        e2.sort((e3, t4) => {
          const s3 = i2(e3, a2, r2), n3 = i2(t4, a2, r2);
          return o2(s3, n3);
        });
      }
  }
  _createFeatureQueryResponse(e2) {
    const t2 = this.items, { geometryType: i2, hasM: s2, hasZ: a2, objectIdField: r2, spatialReference: o2 } = this, { outFields: l2, outSR: u2, quantizationParameters: c2, resultRecordCount: d2, resultOffset: m2, returnZ: f2, returnM: g2 } = e2, p2 = d2 != null && t2.length > (m2 || 0) + d2, y = l2 && (l2.includes("*") ? [...this.fieldsIndex.fields] : l2.map((e3) => this.fieldsIndex.get(e3)));
    return { exceededTransferLimit: p2, features: this._createFeatures(e2, t2), fields: y, geometryType: i2, hasM: s2 && g2, hasZ: a2 && f2, objectIdFieldName: r2, spatialReference: E$2(u2 || o2), transform: c2 && s$2(c2) || null };
  }
  _createFeatures(e2, t2) {
    const i2 = new r(e2, this.featureAdapter, this.fieldsIndex), { hasM: s2, hasZ: a2 } = this, { orderByFields: r$12, quantizationParameters: o2, returnGeometry: l2, returnCentroid: c2, maxAllowableOffset: d2, resultOffset: m2, resultRecordCount: h, returnZ: p2 = false, returnM: y = false } = e2, x2 = a2 && p2, I2 = s2 && y;
    let T2 = [], V2 = 0;
    const F2 = [...t2];
    if (this._sortFeatures(F2, r$12, (e3, t3, s3) => i2.getFieldValue(e3, t3, s3)), l2 || c2) {
      const e3 = s$2(o2);
      if (l2 && !c2)
        for (const t3 of F2)
          T2[V2++] = { attributes: i2.getAttributes(t3), geometry: v$1(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(t3), d2, e3, x2, I2) };
      else if (!l2 && c2)
        for (const t3 of F2)
          T2[V2++] = { attributes: i2.getAttributes(t3), centroid: b(this, this.featureAdapter.getCentroid(t3, this), e3) };
      else
        for (const t3 of F2)
          T2[V2++] = { attributes: i2.getAttributes(t3), centroid: b(this, this.featureAdapter.getCentroid(t3, this), e3), geometry: v$1(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(t3), d2, e3, x2, I2) };
    } else
      for (const n2 of F2) {
        const e3 = i2.getAttributes(n2);
        e3 && (T2[V2++] = { attributes: e3 });
      }
    const z = m2 || 0;
    if (h != null) {
      const e3 = z + h;
      T2 = T2.slice(z, Math.min(T2.length, e3));
    }
    return T2;
  }
  _createExceedsLimitQueryResponse(e2) {
    let i2 = false, s2 = Number.POSITIVE_INFINITY, a2 = Number.POSITIVE_INFINITY, r2 = Number.POSITIVE_INFINITY;
    for (const t2 of e2.outStatistics)
      if (t2.statisticType === "exceedslimit") {
        s2 = t2.maxPointCount != null ? t2.maxPointCount : Number.POSITIVE_INFINITY, a2 = t2.maxRecordCount != null ? t2.maxRecordCount : Number.POSITIVE_INFINITY, r2 = t2.maxVertexCount != null ? t2.maxVertexCount : Number.POSITIVE_INFINITY;
        break;
      }
    if (this.geometryType === "esriGeometryPoint")
      i2 = this.items.length > s2;
    else if (this.items.length > a2)
      i2 = true;
    else {
      const e3 = N(this.hasZ, this.hasM), s3 = this.featureAdapter;
      i2 = this.items.reduce((e4, i3) => {
        const a3 = s3.getGeometry(i3);
        return e4 + (r$2(a3) && a3.coords.length || 0);
      }, 0) / e3 > r2;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(i2) } }] };
  }
  async _createStatisticsQueryResponse(e2) {
    const t2 = { attributes: {} }, i2 = [], s2 = new Map(), a2 = new Map(), r$12 = new Map(), n2 = new Map(), o2 = new r(e2, this.featureAdapter, this.fieldsIndex), l2 = e2.outStatistics, { groupByFieldsForStatistics: c2, having: d2, orderByFields: m2 } = e2, h = c2 && c2.length, f2 = !!h, g2 = f2 && c2[0], p2 = f2 && !this.fieldsIndex.get(g2);
    for (const u2 of l2) {
      const { outStatisticFieldName: e3, statisticType: l3 } = u2, m3 = u2, y2 = l3 !== "exceedslimit" ? u2.onStatisticField : void 0, x2 = l3 === "percentile_disc" || l3 === "percentile_cont", I2 = l3 === "EnvelopeAggregate" || l3 === "CentroidAggregate" || l3 === "ConvexHullAggregate", T2 = f2 && h === 1 && (y2 === g2 || p2) && l3 === "count";
      if (f2) {
        if (!r$12.has(y2)) {
          const e4 = [];
          for (const t4 of c2) {
            const i3 = this._getAttributeValues(o2, t4, s2);
            e4.push(i3);
          }
          r$12.set(y2, this._calculateUniqueValues(e4, !I2 && o2.returnDistinctValues));
        }
        const t3 = r$12.get(y2);
        for (const i3 in t3) {
          const { count: a3, data: r2, items: l4, itemPositions: u3 } = t3[i3], h2 = r2.join(",");
          if (!d2 || o2.validateItems(l4, d2)) {
            const t4 = n2.get(h2) || { attributes: {} };
            if (I2) {
              t4.aggregateGeometries || (t4.aggregateGeometries = {});
              const { aggregateGeometries: e4, outStatisticFieldName: i5 } = await this._getAggregateGeometry(m3, l4);
              t4.aggregateGeometries[i5] = e4;
            } else {
              let i5 = null;
              if (T2)
                i5 = a3;
              else {
                const e4 = this._getAttributeValues(o2, y2, s2), t5 = u3.map((t6) => e4[t6]);
                i5 = x2 && "statisticParameters" in m3 ? this._getPercentileValue(m3, t5) : this._getStatisticValue(m3, t5, null, o2.returnDistinctValues);
              }
              t4.attributes[e3] = i5;
            }
            let i4 = 0;
            c2.forEach((e4, s3) => t4.attributes[this.fieldsIndex.get(e4) ? e4 : "EXPR_" + ++i4] = r2[s3]), n2.set(h2, t4);
          }
        }
      } else if (I2) {
        t2.aggregateGeometries || (t2.aggregateGeometries = {});
        const { aggregateGeometries: e4, outStatisticFieldName: i3 } = await this._getAggregateGeometry(m3, this.items);
        t2.aggregateGeometries[i3] = e4;
      } else {
        const i3 = this._getAttributeValues(o2, y2, s2);
        t2.attributes[e3] = x2 && "statisticParameters" in m3 ? this._getPercentileValue(m3, i3) : this._getStatisticValue(m3, i3, a2, o2.returnDistinctValues);
      }
      i2.push({ name: e3, alias: e3, type: "esriFieldTypeDouble" });
    }
    const y = f2 ? Array.from(n2.values()) : [t2];
    return this._sortFeatures(y, m2, (e3, t3) => e3.attributes[t3]), { fields: i2, features: y };
  }
  async _getAggregateGeometry(e2, t2) {
    const n2 = await import("./geometryEngineJSON2.js"), { statisticType: o2, outStatisticFieldName: l2 } = e2, { featureAdapter: u2, spatialReference: c2, geometryType: d2, hasZ: m2, hasM: h } = this, g2 = t2.map((e3) => v$1(d2, m2, h, u2.getGeometry(e3))), p2 = n2.convexHull(c2, g2, true)[0], y = { aggregateGeometries: null, outStatisticFieldName: null };
    if (o2 === "EnvelopeAggregate") {
      const e3 = p2 ? v$2(p2) : l$1(n2.union(c2, g2));
      y.aggregateGeometries = __spreadProps(__spreadValues({}, e3), { spatialReference: c2 }), y.outStatisticFieldName = l2 || "extent";
    } else if (o2 === "CentroidAggregate") {
      const e3 = p2 ? r$3(p2) : e$2(l$1(n2.union(c2, g2)));
      y.aggregateGeometries = { x: e3[0], y: e3[1], spatialReference: c2 }, y.outStatisticFieldName = l2 || "centroid";
    } else
      o2 === "ConvexHullAggregate" && (y.aggregateGeometries = p2, y.outStatisticFieldName = l2 || "convexHull");
    return y;
  }
  _getStatisticValue(e2, t2, i2, s2) {
    const { onStatisticField: a2, statisticType: r2 } = e2;
    let n2 = null;
    n2 = (i2 == null ? void 0 : i2.has(a2)) ? i2.get(a2) : te(this.fieldsIndex.get(a2)) ? f$2({ values: t2, returnDistinct: s2 }) : d$1({ values: t2, minValue: null, maxValue: null, useSampleStdDev: true }), i2 && i2.set(a2, n2);
    return n2[r2 === "var" ? "variance" : r2];
  }
  _getPercentileValue(e2, t2) {
    const { onStatisticField: i2, statisticParameters: s2, statisticType: a2 } = e2, { value: r2, orderBy: n2 } = s2, o2 = this.fieldsIndex.get(i2);
    return p(t2, { value: r2, orderBy: n2, fieldType: o2 == null ? void 0 : o2.type, isDiscrete: a2 === "percentile_disc" });
  }
  _getAttributeValues(e2, t2, i2) {
    if (i2.has(t2))
      return i2.get(t2);
    const s2 = this.fieldsIndex.get(t2), a2 = this.items.map((i3) => e2.getFieldValue(i3, t2, s2));
    return i2.set(t2, a2), a2;
  }
  _getAttributeDataValues(e2, t2) {
    return this.items.map((i2) => e2.getDataValue(i2, { field: t2.field, field2: t2.field2, field3: t2.field3, fieldDelimiter: t2.fieldDelimiter, normalizationField: t2.normalizationField, normalizationType: t2.normalizationType, normalizationTotal: t2.normalizationTotal }));
  }
  async _getAttributeExpressionValues(e2, t2, i$1) {
    const { arcadeUtils: s2 } = await i(), a2 = s2.createFunction(t2), r2 = i$1 && s2.getViewInfo(i$1);
    return e2.getExpressionValues(this.items, a2, r2, s2);
  }
  _calculateUniqueValues(e2, t2) {
    const i2 = {}, s2 = this.items, a2 = s2.length;
    for (let r2 = 0; r2 < a2; r2++) {
      const a3 = s2[r2], n2 = [];
      for (const t3 of e2)
        n2.push(t3[r2]);
      const o2 = n2.join(",");
      t2 ? i2[o2] == null && (i2[o2] = { count: 1, data: n2, items: [a3], itemPositions: [r2] }) : i2[o2] == null ? i2[o2] = { count: 1, data: n2, items: [a3], itemPositions: [r2] } : (i2[o2].count++, i2[o2].items.push(a3), i2[o2].itemPositions.push(r2));
    }
    return i2;
  }
  async _getDataValues(e2) {
    const t2 = new r(this.query, this.featureAdapter, this.fieldsIndex), { valueExpression: i2, field: s2, normalizationField: a2, normalizationType: r$12, normalizationTotal: n2, scale: o2 } = e2, l2 = i2 ? { viewingMode: "map", scale: o2, spatialReference: this.query.outSR || this.spatialReference } : null;
    return i2 ? this._getAttributeExpressionValues(t2, i2, l2) : this._getAttributeDataValues(t2, { field: s2, field2: e2.field2, field3: e2.field3, fieldDelimiter: e2.fieldDelimiter, normalizationField: a2, normalizationType: r$12, normalizationTotal: n2 });
  }
}
function E(e2, t2, i2, s2) {
  const a2 = s2.x - i2.x, r2 = s2.y - i2.y, n2 = a2 * a2 + r2 * r2, o2 = (t2.x - i2.x) * a2 + (t2.y - i2.y) * r2, l2 = Math.min(1, Math.max(0, o2 / n2));
  e2.x = i2.x + a2 * l2, e2.y = i2.y + r2 * l2;
}
function N(e2, t2) {
  return e2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
var q;
!function(e2) {
  e2[e2.NONE = 0] = "NONE", e2[e2.EDGE = 1] = "EDGE", e2[e2.VERTEX = 2] = "VERTEX";
}(q || (q = {}));
class D {
  constructor(e2, t2) {
    this.coords = e2, this.coordsIndex = t2;
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
}
export { A, a, c, f, l, o, q };
