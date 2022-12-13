var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { a7 as w, k as e, ea as p$1, ao as R, A as u, cP as i, aK as k, eb as y$1, ec as m } from "./index.js";
import { O } from "./quantizationUtils.js";
import { c as c$1, x, m as m$1, f, d as d$1, V, T, F, D, N, S } from "./utils3.js";
import "vue";
import "./generateRendererUtils.js";
let y = null;
function $(e2, t, n) {
  return e2.x < 0 ? e2.x += t : e2.x > n && (e2.x -= t), e2;
}
function I(e$1, n, r, i2) {
  const a = p$1(r) ? R(r) : null, u2 = a ? Math.round((a.valid[1] - a.valid[0]) / n.scale[0]) : null;
  return e$1.map((e$12) => {
    const r2 = new w(e(e$12.geometry));
    return O(n, r2, r2, r2.hasZ, r2.hasM), e$12.geometry = a ? $(r2, u2, i2[0]) : r2, e$12;
  });
}
function g(e2, t = 18, n, i2, o, s) {
  const l = new Float64Array(o * s);
  t = Math.round(u(t));
  let a = Number.POSITIVE_INFINITY, u$1 = Number.NEGATIVE_INFINITY, m$12 = 0, d2 = 0, p2 = 0, h = 0;
  const y2 = y$1(i2, n);
  for (const { geometry: r, attributes: c2 } of e2) {
    const { x: e3, y: n2 } = r, i3 = Math.max(0, e3 - t), $3 = Math.max(0, n2 - t), I2 = Math.min(s, n2 + t), g2 = Math.min(o, e3 + t), j2 = +y2(c2);
    for (let r2 = $3; r2 < I2; r2++)
      for (let s2 = i3; s2 < g2; s2++) {
        const i4 = r2 * o + s2, c3 = m(s2 - e3, r2 - n2, t), y3 = l[i4];
        m$12 = l[i4] += c3 * j2;
        const $4 = m$12 - y3;
        d2 += $4, p2 += $4 * $4, m$12 < a && (a = m$12), m$12 > u$1 && (u$1 = m$12), h++;
      }
  }
  if (!h)
    return { mean: 0, stddev: 0, min: 0, max: 0, mid: 0, count: 0 };
  const $2 = (u$1 - a) / 2;
  return { mean: d2 / h, stdDev: Math.sqrt((p2 - d2 * d2 / h) / h), min: a, max: u$1, mid: $2, count: h };
}
async function j(e2, t) {
  if (!t)
    return [];
  const { field: n, field2: r, field3: o, fieldDelimiter: s } = e2, l = e2.valueExpression, a = e2.normalizationType, u2 = e2.normalizationField, f2 = e2.normalizationTotal, c2 = [], h = e2.viewInfoParams;
  let $2 = null, I2 = null;
  if (l) {
    if (!y) {
      const { arcadeUtils: e3 } = await i();
      y = e3;
    }
    $2 = y.createFunction(l), I2 = h && y.getViewInfo({ viewingMode: h.viewingMode, scale: h.scale, spatialReference: new k(h.spatialReference) });
  }
  const g2 = e2.fieldInfos, j2 = !(t[0] && "declaredClass" in t[0] && t[0].declaredClass === "esri.Graphic") && g2 ? { fields: g2 } : null;
  return t.forEach((e3) => {
    const t2 = e3.attributes;
    let i2;
    if (l) {
      const t3 = j2 ? __spreadProps(__spreadValues({}, e3), { layer: j2 }) : e3, n2 = y.createExecContext(t3, I2);
      i2 = y.executeFunction($2, n2);
    } else
      t2 && (i2 = t2[n], r && (i2 = `${c$1(i2)}${s}${c$1(t2[r])}`, o && (i2 = `${i2}${s}${c$1(t2[o])}`)));
    if (a && typeof i2 == "number" && isFinite(i2)) {
      const e4 = t2 && parseFloat(t2[u2]);
      i2 = x(i2, a, e4, f2);
    }
    c2.push(i2);
  }), c2;
}
async function d(i2) {
  const { attribute: e2, features: s } = i2, { normalizationType: r, normalizationField: m2, minValue: f$1, maxValue: u2, fieldType: d2 } = e2, p2 = await j({ field: e2.field, valueExpression: e2.valueExpression, normalizationType: r, normalizationField: m2, normalizationTotal: e2.normalizationTotal, viewInfoParams: e2.viewInfoParams, fieldInfos: e2.fieldInfos }, s), v2 = m$1({ normalizationType: r, normalizationField: m2, minValue: f$1, maxValue: u2 }), c2 = { value: 0.5, fieldType: d2 }, z2 = d2 === "esriFieldTypeString" ? f({ values: p2, supportsNullCount: v2, percentileParams: c2 }) : d$1({ values: p2, minValue: f$1, maxValue: u2, useSampleStdDev: !r, supportsNullCount: v2, percentileParams: c2 });
  return V(z2, d2 === "esriFieldTypeDate");
}
async function p(i2) {
  const { attribute: e2, features: n } = i2, l = await j({ field: e2.field, field2: e2.field2, field3: e2.field3, fieldDelimiter: e2.fieldDelimiter, valueExpression: e2.valueExpression, viewInfoParams: e2.viewInfoParams, fieldInfos: e2.fieldInfos }, n), t = T(l);
  return F(t, e2.domains, e2.returnAllCodedValues, e2.fieldDelimiter);
}
async function v(i2) {
  const { attribute: e2, features: n } = i2, { field: l, normalizationType: t, normalizationField: o, normalizationTotal: s, classificationMethod: r } = e2, u2 = await j({ field: l, valueExpression: e2.valueExpression, normalizationType: t, normalizationField: o, normalizationTotal: s, viewInfoParams: e2.viewInfoParams, fieldInfos: e2.fieldInfos }, n), d2 = D(u2, { field: l, normalizationType: t, normalizationField: o, normalizationTotal: s, classificationMethod: r, standardDeviationInterval: e2.standardDeviationInterval, numClasses: e2.numClasses, minValue: e2.minValue, maxValue: e2.maxValue });
  return N(d2, r);
}
async function c(i2) {
  const { attribute: e2, features: n } = i2, { field: l, normalizationType: t, normalizationField: o, normalizationTotal: s, classificationMethod: r } = e2, m2 = await j({ field: l, valueExpression: e2.valueExpression, normalizationType: t, normalizationField: o, normalizationTotal: s, viewInfoParams: e2.viewInfoParams, fieldInfos: e2.fieldInfos }, n);
  return S(m2, { field: l, normalizationType: t, normalizationField: o, normalizationTotal: s, classificationMethod: r, standardDeviationInterval: e2.standardDeviationInterval, numBins: e2.numBins, minValue: e2.minValue, maxValue: e2.maxValue });
}
async function z(a) {
  const { attribute: n, features: l } = a, { field: t, radius: o, fieldOffset: s, transform: r, spatialReference: m2, size: f2 } = n, u2 = I(l, r, m2, f2), { count: d2, min: p2, max: v2, mean: c2, stdDev: z2 } = g(u2, o, s, t, f2[0], f2[1]);
  return { count: d2, min: p2, max: v2, avg: c2, stddev: z2 };
}
export { v as classBreaks, z as heatmapStatistics, c as histogram, d as summaryStatistics, p as uniqueValues };
