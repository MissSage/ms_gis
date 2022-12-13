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
import { s as s$1, h as has, aH as l$2, g as s$2, bH as o, a as r, bW as m$2, bX as t$1, k as e$1, A as u$1, bY as c$1, t as t$2, b4 as i$1, bZ as m$3, b_ as d } from "./index.js";
import { l as A$1, S as S$1, r as re } from "./Utils2.js";
import { c as c$2 } from "./utils.js";
import { l as l$1 } from "./visualVariablesUtils2.js";
import { createSymbolSchema as o$1 } from "./createSymbolSchema.js";
import { t } from "./ExpandedCIM.js";
import { a8 as q$1 } from "./enums2.js";
import "./MaterialKey.js";
import { e as e$2 } from "./util.js";
function e(e2) {
  if (!e2)
    return A$1.NONE;
  let r2 = 0;
  for (const i2 of e2)
    if (i2.type === "size") {
      const t2 = l$1(i2);
      r2 |= t2, i2.target === "outline" && (r2 |= t2 << 4);
    } else
      i2.type === "color" ? r2 |= A$1.COLOR : i2.type === "opacity" ? r2 |= A$1.OPACITY : i2.type === "rotation" && (r2 |= A$1.ROTATION);
  return r2;
}
function m$1(t2, e2) {
  if (!("visualVariables" in t2))
    return 0;
  if (!t2.hasVisualVariables("size"))
    return 0;
  const r2 = t2.getVisualVariablesForType("size");
  if (!r2[0])
    return 0;
  const i2 = r2[0];
  if (e2 && i2.field === "cluster_count" && e2.type === "cluster")
    return e2.clusterMaxSize;
  if (i2.target === "outline")
    return 0;
  if (i2.transformationType === "stops")
    return i2.stops.map((t3) => t3.size).reduce(g$1, 0);
  if (i2.transformationType === "clamped-linear") {
    let t3 = -1 / 0, e3 = -1 / 0;
    return t3 = typeof i2.maxSize == "number" ? i2.maxSize : i2.maxSize.stops.map((t4) => t4.size).reduce(g$1, 0), e3 = typeof i2.minSize == "number" ? i2.minSize : i2.minSize.stops.map((t4) => t4.size).reduce(g$1, 0), Math.max(t3, e3);
  }
  return i2.transformationType === "real-world-size" ? 30 : void 0;
}
({ sdf: true, code: 99, metrics: q$1.metrics, rect: new t(0, 0, 24, 24), page: 0, textureBinding: 2 });
function g$1(t2, e2) {
  return Math.max(t2, e2);
}
const s = 8, l = s - 2, a = s$1.getLogger("esri.views.2d.layers.features.support.rendererUtils"), n = (e2) => {
  if (!("visualVariables" in e2) || !e2.visualVariables || !e2.visualVariables.length)
    return e2;
  const r2 = e2.clone(), t2 = r2.visualVariables.map((e3) => u(e3) ? p(e3) : e3);
  return r2.visualVariables = t2, r2;
};
function i(e2) {
  return e2.map((e3) => u(e3) ? p(e3.clone()) : e3);
}
function u(e2) {
  return (e2.type === "size" || e2.type === "color" || e2.type === "opacity") && e2.stops != null;
}
function p(e2) {
  return e2.stops = m(e2.type, e2.stops), e2;
}
function c(e2, r2, t2) {
  return (1 - t2) * e2 + t2 * r2;
}
function f(e2, r2) {
  const [o$12, ...s2] = r2, a2 = s2.pop(), n2 = s2[0].value, i2 = s2[s2.length - 1].value, u2 = (i2 - n2) / l, p2 = [];
  for (let l2 = n2; l2 < i2; l2 += u2) {
    let o$13 = 0;
    for (; l2 >= s2[o$13].value; )
      o$13++;
    const a3 = s2[o$13], n3 = r2[o$13 - 1], i3 = l2 - n3.value, u3 = a3.value === n3.value ? 1 : i3 / (a3.value - n3.value);
    if (e2 === "color") {
      const e3 = s2[o$13], t2 = r2[o$13 - 1], a4 = e3.color.clone();
      a4.r = c(t2.color.r, a4.r, u3), a4.g = c(t2.color.g, a4.g, u3), a4.b = c(t2.color.b, a4.b, u3), a4.a = c(t2.color.a, a4.a, u3), p2.push({ value: l2, color: a4, label: e3.label });
    } else if (e2 === "size") {
      const e3 = s2[o$13], a4 = r2[o$13 - 1], n4 = o(e3.size), i4 = c(o(a4.size), n4, u3);
      p2.push({ value: l2, size: i4, label: e3.label });
    } else {
      const e3 = s2[o$13], t2 = c(r2[o$13 - 1].opacity, e3.opacity, u3);
      p2.push({ value: l2, opacity: t2, label: e3.label });
    }
  }
  return [o$12, ...p2, a2];
}
function b(e2) {
  const [r2, ...t2] = e2, o2 = t2.pop();
  for (; t2.length > l; ) {
    let e3 = 0, r3 = 0;
    for (let o3 = 1; o3 < t2.length; o3++) {
      const s2 = t2[o3 - 1], l2 = t2[o3], a2 = Math.abs(l2.value - s2.value);
      a2 > r3 && (r3 = a2, e3 = o3);
    }
    t2.splice(e3, 1);
  }
  return [r2, ...t2, o2];
}
function m(e2, r2) {
  return r2.length <= s ? r2 : (a.warn(`Found ${r2.length} Visual Variable stops, but MapView only supports ${s}. Displayed stops will be simplified.`), r2.length > 2 * s ? f(e2, r2) : b(r2));
}
function g() {
  if (has("heatmap-force-raster"))
    return "raster";
  const { supportsTextureFloat: e2, supportsTextureHalfFloat: r2, supportsColorBufferFloat: t2, supportsColorBufferFloatBlend: s2, supportsColorBufferHalfFloat: l2 } = l$2("2d");
  return e2 && t2 && s2 || r2 && l2 ? "symbol" : has("heatmap-allow-raster-fallback") ? "raster" : "none";
}
function h(r2) {
  if (!r2)
    return true;
  switch (r2.type) {
    case "dot-density":
      if (!l$2("2d").supportsTextureFloat)
        return a.error(new s$2("webgl-missing-extension", "Missing WebGL extension OES_Texture_Float which is required for DotDensity")), false;
      break;
    case "heatmap": {
      const r3 = g();
      if (r3 === "none" || r3 === "raster" && !has("heatmap-force-raster")) {
        const t2 = l$2("2d"), s2 = ["supportsTextureFloat", "supportsTextureHalfFloat", "supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((e2) => !t2[e2]).join(", ");
        if (r3 === "none")
          return a.errorOnce(new s$2("webgl-missing-extension", `Missing WebGL${t2.type} requirements for Heatmap: ${s2}`)), false;
        r3 === "raster" && a.warnOnce(`Missing WebGL${t2.type} requirements for accelerated Heatmap: ${s2}. Feature support may be limited.`);
      }
      break;
    }
  }
  return true;
}
const T = s$1.getLogger("esri.views.2d.layers.features.schemaUtils"), S = "ValidationError";
function E(e2) {
  return e2;
}
function w(e$12, t2) {
  let i2 = 0, n2 = 0, s2 = S$1.DEFAULT;
  if (r(e$12)) {
    if (n2 = m$1(e$12, t2), "visualVariables" in e$12 && (i2 = e(e$12.visualVariables || []), e$12.type === "dot-density" && (s2 = S$1.DOT_DENSITY)), e$12.type === "heatmap" && (s2 = S$1.HEATMAP), e$12.type === "dictionary")
      return { maxVVSize: n2, vvFlags: i2, symbologyType: S$1.DEFAULT };
    if (e$12.type === "pie-chart")
      return { maxVVSize: n2, vvFlags: i2, symbologyType: S$1.PIE_CHART };
    if (s2 !== S$1.DOT_DENSITY && s2 !== S$1.HEATMAP) {
      const t3 = e$12.getSymbols();
      "backgroundFillSymbol" in e$12 && e$12.backgroundFillSymbol && t3.push(e$12.backgroundFillSymbol);
      let r2 = true, i3 = true;
      for (const e2 of t3)
        if (e2.type === "cim" && (i3 = false), e2.type === "simple-fill" || e2.type === "picture-fill") {
          const t4 = e2.outline, n3 = t4 && t4.style !== "none" && t4.style !== "solid", s3 = e2.type === "simple-fill" && e2.style !== "none" && e2.style !== "solid", l2 = e2.type === "picture-fill" || s3 || n3;
          n3 && (r2 = false), l2 && (i3 = false);
        }
      r2 ? s2 = i3 ? S$1.OUTLINE_FILL_SIMPLE : S$1.OUTLINE_FILL : i3 && (s2 = S$1.SIMPLE);
    }
  }
  return { vvFlags: i2, maxVVSize: n2, symbologyType: s2 };
}
let I = null;
function F(e2) {
  if (has("esri-2d-update-debug")) {
    const t2 = V(e2, true);
    console.debug("Created new schema", t2), console.debug("Schema diff", m$2(I, t2)), I = t2;
  }
  return V(e2);
}
function V(e2, t2 = false) {
  var _a, _b;
  try {
    const i2 = D(e2, t2), n2 = C(e2), s2 = {};
    i2.map((t3) => O(s2, e2, t3));
    const l2 = r(e2.subtypeCode) ? `${e2.subtypeField} = ${e2.subtypeCode}` : null, a2 = t$1(e2.definitionExpression, l2);
    return { source: { definitionExpression: a2, fields: e2.fields.map((e3) => e3.toJSON()), gdbVersion: e2.gdbVersion, historicMoment: (_a = e2.historicMoment) == null ? void 0 : _a.getTime(), outFields: e2.availableFields, pixelBuffer: e2.pixelBuffer, spatialReference: e2.spatialReference.toJSON(), timeExtent: (_b = e2.timeExtent) == null ? void 0 : _b.toJSON(), customParameters: e2.customParameters }, attributes: { fields: {}, indexCount: 0 }, processors: i2, tileRenderer: n2, targets: s2 };
  } catch (i2) {
    if (i2.fieldName === S)
      return T.error(i2), null;
    throw i2;
  }
}
function O(t2, r2, i2) {
  switch (i2.target) {
    case "feature":
      return void M(t2, N(r2), i2);
    case "aggregate": {
      if (!("featureReduction" in r2))
        return;
      const n2 = r2.featureReduction;
      switch (n2.type) {
        case "selection":
          throw new s$2(S, "Mapview does not support `selection` reduction type", n2);
        case "binning":
          return M(t2, N(r2), i2), void L(t2, n2, r2.fields.map((e2) => e2.toJSON()), i2);
        case "cluster":
          return M(t2, N(r2), i2), void R(t2, n2, r2.fields.map((e2) => e2.toJSON()), i2);
      }
    }
  }
}
function z(e2, t2) {
  for (const r2 in t2) {
    const i2 = t2[r2];
    if (i2.target !== e2.name)
      continue;
    const n2 = e2.attributes[r2];
    n2 ? (n2.context.mesh = n2.context.mesh || i2.context.mesh, n2.context.storage = n2.context.storage || i2.context.storage) : e2.attributes[r2] = i2;
  }
  return e2;
}
function N(e2) {
  var _a, _b, _c, _d, _e;
  return [(_b = (_a = e$1(e2.filter)) == null ? void 0 : _a.toJSON()) != null ? _b : null, (_e = (_d = e$1((_c = e$1(e2.featureEffect)) == null ? void 0 : _c.filter)) == null ? void 0 : _d.toJSON()) != null ? _e : null];
}
function M(e2, t2, r2) {
  return e2.feature || (e2.feature = { name: "feature", input: "source", filters: t2, attributes: {} }), z(e2.feature, r2.attributes.fields), e2;
}
function j(t2, r2) {
  const { onStatisticExpression: i2, onStatisticField: n2, statisticType: s2 } = t2;
  switch (s2) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (i2) {
        const { returnType: r3 } = i2;
        return r3 ? r3 === "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" : (T.error(new s$2(S, "Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined", t2)), "esriFieldTypeString");
      }
      const s3 = r2.find((e2) => e2.name === n2);
      return s3 ? s3.type : (T.error(new s$2(S, "Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined", t2)), "esriFieldTypeString");
    }
  }
}
function L(e2, t2, r2, i2) {
  var _a;
  return e2.aggregate || (e2.aggregate = { name: "aggregate", type: "bin", filters: null, input: "feature", params: { fixedBinLevel: t2.fixedBinLevel, fields: ((_a = t2.fields) != null ? _a : []).map((e3) => __spreadProps(__spreadValues({}, e3.toJSON()), { type: j(e3, r2) })) }, attributes: {} }), z(e2.aggregate, i2.attributes.fields), e2;
}
function R(e2, t2, r2, i2) {
  var _a, _b;
  return e2.aggregate || (e2.aggregate = { name: "aggregate", type: "cluster", input: "feature", filters: null, attributes: {}, params: { clusterRadius: u$1(t2.clusterRadius / 2), clusterPixelBuffer: 64 * Math.ceil(u$1(t2.clusterMaxSize) / 64), fields: (_b = (_a = t2.fields) != null ? _a : []) == null ? void 0 : _b.map((e3) => __spreadProps(__spreadValues({}, e3.toJSON()), { type: j(e3, r2) })) } }), z(e2.aggregate, i2.attributes.fields), e2;
}
function U(e2, t2) {
  return t2.field ? B(e2, __spreadProps(__spreadValues({}, t2), { type: "field", field: t2.field })) : t2.valueExpression ? B(e2, __spreadProps(__spreadValues({}, t2), { type: "expression", valueExpression: t2.valueExpression })) : { field: null, fieldIndex: null };
}
function B(e2, t2) {
  switch (t2.type) {
    case "expression": {
      const r2 = E(t2.valueExpression);
      if (!e2.fields[r2]) {
        const i2 = e2.indexCount++;
        e2.fields[r2] = __spreadProps(__spreadValues({}, t2), { name: r2, fieldIndex: i2 });
      }
      return { fieldIndex: e2.fields[r2].fieldIndex };
    }
    case "label-expression": {
      const r2 = E(JSON.stringify(t2.label));
      if (!e2.fields[r2]) {
        const i2 = e2.indexCount++;
        e2.fields[r2] = __spreadProps(__spreadValues({}, t2), { name: r2, fieldIndex: i2 });
      }
      return { fieldIndex: e2.fields[r2].fieldIndex };
    }
    case "field": {
      const r2 = t2.field;
      return t2.target === "aggregate" && e2.fields[r2] || (e2.fields[r2] = __spreadProps(__spreadValues({}, t2), { name: r2 })), { field: r2 };
    }
    case "statistic":
      return e2.fields[t2.name] = __spreadValues({}, t2), { field: t2.name };
  }
}
function D(e2, t2 = false) {
  const r2 = new Array();
  let i2 = 0;
  return r2.push(A(e2, i2++, t2)), r2;
}
function P(e2, t2, r2, i2, n2, s2 = false) {
  const l2 = B(e2, { type: "label-expression", target: r2, context: { mesh: true }, resultType: "string", label: { labelExpression: t2.labelExpression, labelExpressionInfo: t2.labelExpressionInfo ? { expression: t2.labelExpressionInfo.expression } : null, symbol: !!t2.symbol, where: t2.where } }), { fieldIndex: o2 } = l2;
  return __spreadProps(__spreadValues({}, o$1(t2, n2, s2)), { fieldIndex: o2, target: r2, index: i2 });
}
function k(t2, r2, i2) {
  var _a, _b;
  const n2 = "featureReduction" in r2 && r2.featureReduction;
  if (!n2)
    return { fields: [], labels: [], matcher: null, rendererOverride: null };
  const s2 = "aggregate", l2 = [];
  let o2 = null, a2 = e$2(r2.geometryType), d$1 = [], f2 = null;
  if (n2)
    switch (n2.type) {
      case "selection":
        return T.error(new s$2(S, "Mapview does not support `selection` reduction type", n2)), { fields: [], labels: [], matcher: null, rendererOverride: null };
      case "cluster":
      case "binning":
        if (l2.push(...(_a = n2.fields) != null ? _a : []), n2.type === "cluster" ? a2 = "esriGeometryPoint" : n2.type === "binning" && (a2 = "esriGeometryPolygon"), n2.renderer && !((_b = n2.renderer.authoringInfo) == null ? void 0 : _b.isAutoGenerated)) {
          if (n2.type === "cluster") {
            const { renderer: e3 } = m$3(n2.renderer, n2, null);
            f2 = e3;
          } else
            f2 = n2.renderer;
          const e2 = w(n2.renderer, n2);
          o2 = $(null, s2, n2.renderer, e2, i2), d$1 = n2 && n2.labelsVisible && n2.labelingInfo || [];
        } else if (n2.type === "cluster") {
          if (f2 = d(l2, r2.renderer, n2, null, true), n2.symbol) {
            const e2 = w(f2, n2);
            o2 = { type: "simple", symbol: o$1(n2.symbol, e2, i2), symbologyType: e2.symbologyType };
          }
          d$1 = n2 && n2.labelsVisible && n2.labelingInfo || [];
        }
    }
  _(t2, l2);
  return { labels: c$1(d$1, n2.type === "binning" ? "esriGeometryPolygon" : a2), matcher: o2, fields: l2, rendererOverride: f2 };
}
function A(t2, i2, n2 = false) {
  var _a;
  const s2 = { indexCount: 0, fields: {} }, l2 = "featureReduction" in t2 && t2.featureReduction, o2 = l2 ? "aggregate" : "feature";
  if ("sublayers" in t2) {
    const i3 = { type: "subtype", subtypeField: t2.subtypeField, renderers: {}, symbologyType: S$1.DEFAULT }, l3 = { type: "subtype", mapping: {}, target: "feature" }, a3 = { type: "subtype", classes: {} }, u2 = { type: "symbol", target: "feature", aggregateFields: [], attributes: s2, storage: l3, mesh: { matcher: i3, aggregateMatcher: null, labels: a3, sortKey: null } }, f3 = new Set();
    let p3 = 0;
    for (const { renderer: c3, subtypeCode: y2, labelingInfo: m3, labelsVisible: g2 } of t2.sublayers) {
      const t3 = { symbologyType: S$1.DEFAULT, vvFlags: 0, maxVVSize: 0 }, u3 = $(s2, o2, c3, t3, n2), b3 = q(s2, o2, c3), x2 = g2 && m3;
      if ("visualVariables" in c3 && c3.visualVariables && c3.visualVariables.length)
        throw new s$2(S, "Visual variables are currently not supported for subtype layers");
      if (u3.type === "dictionary")
        throw new s$2(S, "Dictionary renderer is not supported in subtype layers");
      if (u3.type === "subtype")
        throw new s$2(S, "Nested subtype renderers is not supported");
      if (r(b3) && b3.type === "subtype")
        throw new s$2(S, "Nested subtype storage is not supported");
      if (r(b3) && r(b3.attributeMapping))
        throw new s$2(S, "Non-visual-variable attributes are not supported in subtype layers");
      if (u3.type === "heatmap")
        throw new s$2(S, "Heatmaps are not supported in subtype layers");
      if (u3.type === "pie-chart")
        throw new s$2(S, "Pie-charts are not supported in subtype layers");
      if (f3.has(y2))
        throw new s$2(S, "Subtype codes for sublayers must be unique");
      f3.add(y2), i3.renderers[y2] = u3, l3.mapping[y2] = b3, x2 && (a3.classes[y2] = x2.map((e2) => P(s2, e2, "feature", p3++, t3, n2)));
    }
    return u2;
  }
  if (t2.renderer.type === "heatmap" && g() === "raster") {
    const { radius: e2, fieldOffset: r2, field: i3 } = t2.renderer;
    return { type: "heatmap", aggregateFields: [], attributes: s2, target: o2, storage: null, mesh: { radius: e2, fieldOffset: r2, field: U(s2, { target: o2, field: i3, resultType: "numeric" }).field } };
  }
  const a2 = k(s2, t2, n2), f2 = e$2(t2.geometryType), p2 = (_a = a2.rendererOverride) != null ? _a : t2.renderer, c2 = w(p2, l2), y = $(s2, o2, p2, c2, n2), m2 = q(s2, o2, p2), b2 = J(s2, t2.orderBy, l2), x = t2.labelsVisible && t2.labelingInfo || [], h2 = c$1(x, f2);
  let T2 = 0;
  const E2 = [...h2.map((e2) => P(s2, e2, "feature", T2++, c2, n2)), ...a2.labels.map((e2) => P(s2, e2, "aggregate", T2++, c2, n2))];
  return { type: "symbol", target: o2, attributes: s2, aggregateFields: a2.fields, storage: m2, mesh: { matcher: y, labels: { type: "simple", classes: E2 }, aggregateMatcher: a2.matcher, sortKey: b2 } };
}
function C(e2) {
  var _a;
  return ((_a = e2.renderer) == null ? void 0 : _a.type) === "heatmap" && g() === "raster" ? { type: "heatmap" } : { type: "symbol" };
}
function J(t2, i2, s2) {
  if (r(s2) || t$2(i2) || !i2.length)
    return null;
  i2.length > 1 && T.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${i2.length}. All but the first will be discarded`);
  const l2 = i2[0], o2 = l2.order === "ascending" ? "asc" : "desc";
  if (l2.field)
    return { field: l2.field, order: o2 };
  if (l2.valueExpression) {
    return { fieldIndex: B(t2, { type: "expression", target: "feature", valueExpression: l2.valueExpression, resultType: "numeric" }).fieldIndex, order: o2 };
  }
  return T.error(new s$2(S, "Expected to find a field or valueExpression for OrderByInfo", l2)), null;
}
function _(e2, t2) {
  const r2 = { mesh: true, storage: true };
  for (const i2 of t2) {
    const { name: t3, onStatisticField: n2, onStatisticExpression: s2, statisticType: l2 } = i2;
    let o2 = null, a2 = null;
    const u2 = "numeric", d2 = "feature";
    if (s2) {
      a2 = B(e2, { type: "expression", target: d2, valueExpression: s2.expression, resultType: u2 }).fieldIndex;
    } else {
      o2 = B(e2, { type: "field", target: d2, field: n2, resultType: u2 }).field;
    }
    B(e2, { type: "statistic", target: "aggregate", name: t3, context: r2, inField: o2, inFieldIndex: a2, statisticType: l2 });
  }
}
function q(e2, t2, r2) {
  let i2;
  switch (r2.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      i2 = { visualVariables: true, attributes: null };
      break;
    default:
      i2 = c$2(r2).getStorageSpec(r2);
  }
  return G(e2, t2, i2, r2);
}
function G(e2, t2, i2, s2) {
  if (t$2(i2))
    return null;
  const { visualVariables: l2, attributes: o2 } = i2;
  let a2 = null;
  l2 && "visualVariables" in s2 && (a2 = H(e2, t2, s2.visualVariables));
  const u2 = r(a2) ? 4 : 0;
  let d2 = null;
  return r(o2) && (d2 = o2.map((r2, i3) => {
    const { field: n2, fieldIndex: s3 } = U(e2, { valueExpression: r2.valueExpression, field: r2.field, resultType: "numeric", target: t2 });
    return { binding: i3 + u2, field: n2, fieldIndex: s3 };
  })), { type: "simple", target: t2, attributeMapping: d2, vvMapping: a2 };
}
function H(e2, t2, r2) {
  if (!r2 || !r2.length)
    return [];
  const i$12 = { storage: true }, n2 = "numeric";
  return i(r2).map((r3) => {
    var _a;
    const s2 = re(r3.type), { field: l2, fieldIndex: o2 } = U(e2, { target: t2, valueExpression: r3.valueExpression, field: r3.field, context: i$12, resultType: n2 });
    switch (r3.type) {
      case "size":
        return r3.valueExpression === "$view.scale" ? null : { type: "size", binding: s2, field: l2, fieldIndex: o2, normalizationField: U(e2, { target: t2, field: r3.normalizationField, context: i$12, resultType: n2 }).field, valueRepresentation: (_a = r3.valueRepresentation) != null ? _a : null };
      case "color":
        return { type: "color", binding: s2, field: l2, fieldIndex: o2, normalizationField: U(e2, { target: t2, field: r3.normalizationField, context: i$12, resultType: n2 }).field };
      case "opacity":
        return { type: "opacity", binding: s2, field: l2, fieldIndex: o2, normalizationField: U(e2, { target: t2, field: r3.normalizationField, context: i$12, resultType: n2 }).field };
      case "rotation":
        return { type: "rotation", binding: s2, field: l2, fieldIndex: o2 };
    }
  }).filter((e3) => e3);
}
function $(e2, t2, r2, i2, n2 = false) {
  const l2 = i$1(e2, { indexCount: 0, fields: {} });
  switch (r2.type) {
    case "simple":
    case "dot-density":
      return K(l2, r2, i2, n2);
    case "class-breaks":
      return Q(l2, t2, r2, i2, n2);
    case "unique-value":
      return W(l2, t2, r2, i2, n2);
    case "dictionary":
      return X(l2, r2, i2, n2);
    case "heatmap":
      return Z(l2, r2, i2, n2);
    case "pie-chart":
      return Y(l2, r2, i2, n2);
  }
}
function K(e2, t2, r2, i2 = false) {
  const n2 = t2.getSymbols(), s2 = n2.length ? n2[0] : null;
  return { type: "simple", symbol: o$1(s2, r2, i2), symbologyType: r2.symbologyType };
}
function Y(e2, t2, r2, i2 = false) {
  const n2 = t2.getSymbols(), s2 = n2[0], l2 = n2.length > 1 ? n2[1] : null;
  return { type: "pie-chart", markerSymbol: o$1(s2, r2, i2), fillSymbol: o$1(l2, r2, i2), symbologyType: r2.symbologyType };
}
function Q(e2, t2, r2, i2, n2 = false) {
  const s2 = { mesh: true, use: "renderer.field" }, l2 = r2.backgroundFillSymbol, { field: o2, fieldIndex: a2 } = U(e2, { target: t2, field: r2.field, valueExpression: r2.valueExpression, resultType: "numeric", context: s2 }), u2 = r2.normalizationType, d2 = u2 === "log" ? "esriNormalizeByLog" : u2 === "percent-of-total" ? "esriNormalizeByPercentOfTotal" : u2 === "field" ? "esriNormalizeByField" : null, f2 = r2.classBreakInfos.map((e3) => ({ symbol: o$1(e3.symbol, i2, n2), min: e3.minValue, max: e3.maxValue })).sort((e3, t3) => e3.min - t3.min);
  return { type: "interval", attributes: e2.fields, field: o2, fieldIndex: a2, backgroundFillSymbol: o$1(l2, i2, n2), defaultSymbol: o$1(r2.defaultSymbol, i2, n2), intervals: f2, normalizationField: r2.normalizationField, normalizationTotal: r2.normalizationTotal, normalizationType: d2, isMaxInclusive: r2.isMaxInclusive, symbologyType: i2.symbologyType };
}
function W(t2, r2, i2, n2, s2 = false) {
  const l2 = [], o2 = i2.backgroundFillSymbol, a2 = { target: r2, context: { mesh: true }, resultType: "string" };
  if (i2.field && typeof i2.field != "string")
    throw new s$2(S, "Expected renderer.field to be a string", i2);
  const { field: u2, fieldIndex: d2 } = U(t2, __spreadProps(__spreadValues({}, a2), { field: i2.field, valueExpression: i2.valueExpression }));
  for (const e2 of i2.uniqueValueInfos)
    l2.push({ value: "" + e2.value, symbol: o$1(e2.symbol, n2, s2) });
  return { type: "map", attributes: t2.fields, field: u2, fieldIndex: d2, field2: U(t2, __spreadProps(__spreadValues({}, a2), { field: i2.field2 })).field, field3: U(t2, __spreadProps(__spreadValues({}, a2), { field: i2.field3 })).field, fieldDelimiter: i2.fieldDelimiter, backgroundFillSymbol: o$1(o2, n2), defaultSymbol: o$1(i2.defaultSymbol, n2), map: l2, symbologyType: n2.symbologyType };
}
function X(e2, t2, r2, i2 = false) {
  return { type: "dictionary", config: t2.config, fieldMap: t2.fieldMap, scaleExpression: t2.scaleExpression, url: t2.url, symbolOptions: r2, symbologyType: r2.symbologyType };
}
function Z(e2, t2, r2, i2 = false) {
  const n2 = t2.getSymbols(), s2 = n2.length ? n2[0] : null;
  return { type: "heatmap", symbol: o$1(s2, r2, i2), symbologyType: r2.symbologyType };
}
export { $, F, h, n, w };
