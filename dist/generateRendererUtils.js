import { ck as s$1, $ as e, a0 as y, ed as a$2, ee as m$2, ef as p, a1 as n$1, co as l$3, s as s$2 } from "./index.js";
const c$1 = new s$1({ classBreaksDef: "class-breaks-definition", uniqueValueDef: "unique-value-definition" });
let l$2 = class extends l$3 {
  constructor() {
    super(...arguments), this.baseSymbol = null, this.colorRamp = null, this.type = null;
  }
};
e([y({ type: a$2, json: { write: true } })], l$2.prototype, "baseSymbol", void 0), e([y({ types: m$2, json: { read: { reader: p }, write: true } })], l$2.prototype, "colorRamp", void 0), e([y({ json: { read: c$1.read, write: c$1.write } })], l$2.prototype, "type", void 0), l$2 = e([n$1("esri.rest.support.ClassificationDefinition")], l$2);
const m$1 = l$2;
const o$1 = new s$1({ esriClassifyEqualInterval: "equal-interval", esriClassifyManual: "manual", esriClassifyNaturalBreaks: "natural-breaks", esriClassifyQuantile: "quantile", esriClassifyStandardDeviation: "standard-deviation", esriClassifyDefinedInterval: "defined-interval" }), a$1 = new s$1({ esriNormalizeByLog: "log", esriNormalizeByPercentOfTotal: "percent-of-total", esriNormalizeByField: "field" });
let n = class extends m$1 {
  constructor() {
    super(...arguments), this.breakCount = null, this.classificationField = null, this.classificationMethod = null, this.normalizationField = null, this.normalizationType = null, this.type = "class-breaks-definition";
  }
  set standardDeviationInterval(e2) {
    this.classificationMethod === "standard-deviation" && this._set("standardDeviationInterval", e2);
  }
  set definedInterval(e2) {
    this.classificationMethod === "defined-interval" && this._set("definedInterval", e2);
  }
};
e([y({ json: { write: true } })], n.prototype, "breakCount", void 0), e([y({ json: { write: true } })], n.prototype, "classificationField", void 0), e([y({ type: String, json: { read: o$1.read, write: o$1.write } })], n.prototype, "classificationMethod", void 0), e([y({ json: { write: true } })], n.prototype, "normalizationField", void 0), e([y({ json: { read: a$1.read, write: a$1.write } })], n.prototype, "normalizationType", void 0), e([y({ value: null, json: { write: true } })], n.prototype, "standardDeviationInterval", null), e([y({ value: null, json: { write: true } })], n.prototype, "definedInterval", null), e([y()], n.prototype, "type", void 0), n = e([n$1("esri.rest.support.ClassBreaksDefinition")], n);
const l$1 = n;
const t = s$2.getLogger("esri.rest.support.generateRendererUtils");
function l(e2, t2) {
  return Number(e2.toFixed(t2));
}
function a(e2) {
  const { normalizationTotal: t2 } = e2;
  return { classBreaks: u(e2), normalizationTotal: t2 };
}
function u(e2) {
  const t2 = e2.definition, { classificationMethod: n2, breakCount: a2, normalizationType: u2, definedInterval: i2 } = t2, c2 = [];
  let b2 = e2.values;
  if (b2.length === 0)
    return [];
  b2 = b2.sort((e3, t3) => e3 - t3);
  const V = b2[0], p2 = b2[b2.length - 1];
  if (n2 === "equal-interval")
    if (b2.length >= a2) {
      const e3 = (p2 - V) / a2;
      let t3 = V;
      for (let n3 = 1; n3 < a2; n3++) {
        const a3 = l(V + n3 * e3, 6);
        c2.push({ minValue: t3, maxValue: a3, label: s(t3, a3, u2) }), t3 = a3;
      }
      c2.push({ minValue: t3, maxValue: p2, label: s(t3, p2, u2) });
    } else
      b2.forEach((e3) => {
        c2.push({ minValue: e3, maxValue: e3, label: s(e3, e3, u2) });
      });
  else if (n2 === "natural-breaks") {
    const t3 = o(b2), n3 = e2.valueFrequency || t3.valueFrequency, i3 = r(t3.uniqueValues, n3, a2);
    let f2 = V;
    for (let e3 = 1; e3 < a2; e3++)
      if (t3.uniqueValues.length > e3) {
        const n4 = l(t3.uniqueValues[i3[e3]], 6);
        c2.push({ minValue: f2, maxValue: n4, label: s(f2, n4, u2) }), f2 = n4;
      }
    c2.push({ minValue: f2, maxValue: p2, label: s(f2, p2, u2) });
  } else if (n2 === "quantile")
    if (b2.length >= a2 && V !== p2) {
      let e3 = V, t3 = Math.ceil(b2.length / a2), l2 = 0;
      for (let n3 = 1; n3 < a2; n3++) {
        let o2 = t3 + l2 - 1;
        o2 > b2.length && (o2 = b2.length - 1), o2 < 0 && (o2 = 0), c2.push({ minValue: e3, maxValue: b2[o2], label: s(e3, b2[o2], u2) }), e3 = b2[o2], l2 += t3, t3 = Math.ceil((b2.length - l2) / (a2 - n3));
      }
      c2.push({ minValue: e3, maxValue: p2, label: s(e3, p2, u2) });
    } else {
      let e3 = -1;
      for (let t3 = 0; t3 < b2.length; t3++) {
        const l2 = b2[t3];
        l2 !== e3 && (e3 = l2, c2.push({ minValue: e3, maxValue: l2, label: s(e3, l2, u2) }), e3 = l2);
      }
    }
  else if (n2 === "standard-deviation") {
    const e3 = h(b2), t3 = m(b2, e3);
    if (t3 === 0)
      c2.push({ minValue: b2[0], maxValue: b2[0], label: s(b2[0], b2[0], u2) });
    else {
      const n3 = f(V, p2, a2, e3, t3) * t3;
      let o2 = 0, r2 = V;
      for (let t4 = a2; t4 >= 1; t4--) {
        const a3 = l(e3 - (t4 - 0.5) * n3, 6);
        c2.push({ minValue: r2, maxValue: a3, label: s(r2, a3, u2) }), r2 = a3, o2++;
      }
      let i3 = l(e3 + 0.5 * n3, 6);
      c2.push({ minValue: r2, maxValue: i3, label: s(r2, i3, u2) }), r2 = i3, o2++;
      for (let t4 = 1; t4 <= a2; t4++)
        i3 = o2 === 2 * a2 ? p2 : l(e3 + (t4 + 0.5) * n3, 6), c2.push({ minValue: r2, maxValue: i3, label: s(r2, i3, u2) }), r2 = i3, o2++;
    }
  } else if (n2 === "defined-interval") {
    if (!i2)
      return c2;
    const e3 = b2[0], t3 = b2[b2.length - 1], n3 = Math.ceil((t3 - e3) / i2);
    let a3 = e3;
    for (let o2 = 1; o2 < n3; o2++) {
      const t4 = l(e3 + o2 * i2, 6);
      c2.push({ minValue: a3, maxValue: t4, label: s(a3, t4, u2) }), a3 = t4;
    }
    c2.push({ minValue: a3, maxValue: t3, label: s(a3, t3, u2) });
  }
  return c2;
}
function s(e2, t2, l2) {
  let n2 = null;
  return n2 = e2 === t2 ? l2 && l2 === "percent-of-total" ? e2 + "%" : e2.toString() : l2 && l2 === "percent-of-total" ? e2 + "% - " + t2 + "%" : e2 + " - " + t2, n2;
}
function o(e2) {
  const t2 = [], l2 = [];
  let n2 = Number.MIN_VALUE, a2 = 1, u2 = -1;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const o2 = e2[s2];
    o2 === n2 ? (a2++, l2[u2] = a2) : o2 !== null && (t2.push(o2), n2 = o2, a2 = 1, l2.push(a2), u2++);
  }
  return { uniqueValues: t2, valueFrequency: l2 };
}
function r(e2, t2, l2) {
  const n2 = e2.length, a2 = [];
  l2 > n2 && (l2 = n2);
  for (let s2 = 0; s2 < l2; s2++)
    a2.push(Math.round(s2 * n2 / l2 - 1));
  a2.push(n2 - 1);
  let u2 = i(a2, e2, t2, l2);
  return c(u2.mean, u2.sdcm, a2, e2, t2, l2) && (u2 = i(a2, e2, t2, l2)), a2;
}
function i(e2, t2, l2, n2) {
  let a2 = [], u2 = [], s2 = [], o2 = 0;
  const r2 = [], i2 = [];
  for (let m2 = 0; m2 < n2; m2++) {
    const n3 = b(m2, e2, t2, l2);
    r2.push(n3.sbMean), i2.push(n3.sbSdcm), o2 += i2[m2];
  }
  let c2, f2 = o2, h2 = true;
  for (; h2 || o2 < f2; ) {
    h2 = false, a2 = [];
    for (let t3 = 0; t3 < n2; t3++)
      a2.push(e2[t3]);
    for (let l3 = 0; l3 < n2; l3++)
      for (let a3 = e2[l3] + 1; a3 <= e2[l3 + 1]; a3++)
        if (c2 = t2[a3], l3 > 0 && a3 !== e2[l3 + 1] && Math.abs(c2 - r2[l3]) > Math.abs(c2 - r2[l3 - 1]))
          e2[l3] = a3;
        else if (l3 < n2 - 1 && e2[l3] !== a3 - 1 && Math.abs(c2 - r2[l3]) > Math.abs(c2 - r2[l3 + 1])) {
          e2[l3 + 1] = a3 - 1;
          break;
        }
    f2 = o2, o2 = 0, u2 = [], s2 = [];
    for (let a3 = 0; a3 < n2; a3++) {
      u2.push(r2[a3]), s2.push(i2[a3]);
      const n3 = b(a3, e2, t2, l2);
      r2[a3] = n3.sbMean, i2[a3] = n3.sbSdcm, o2 += i2[a3];
    }
  }
  if (o2 > f2) {
    for (let t3 = 0; t3 < n2; t3++)
      e2[t3] = a2[t3], r2[t3] = u2[t3], i2[t3] = s2[t3];
    o2 = f2;
  }
  return { mean: r2, sdcm: i2 };
}
function c(e2, t2, l2, n2, a2, u2) {
  let s2 = 0, o2 = 0, r2 = 0, i2 = 0, c2 = true;
  for (let f2 = 0; f2 < 2 && c2; f2++) {
    f2 === 0 && (c2 = false);
    for (let f3 = 0; f3 < u2 - 1; f3++)
      for (; l2[f3 + 1] + 1 !== l2[f3 + 2]; ) {
        l2[f3 + 1] = l2[f3 + 1] + 1;
        const u3 = b(f3, l2, n2, a2);
        r2 = u3.sbMean, s2 = u3.sbSdcm;
        const h2 = b(f3 + 1, l2, n2, a2);
        if (i2 = h2.sbMean, o2 = h2.sbSdcm, !(s2 + o2 < t2[f3] + t2[f3 + 1])) {
          l2[f3 + 1] = l2[f3 + 1] - 1;
          break;
        }
        t2[f3] = s2, t2[f3 + 1] = o2, e2[f3] = r2, e2[f3 + 1] = i2, c2 = true;
      }
    for (let f3 = u2 - 1; f3 > 0; f3--)
      for (; l2[f3] !== l2[f3 - 1] + 1; ) {
        l2[f3] = l2[f3] - 1;
        const u3 = b(f3 - 1, l2, n2, a2);
        r2 = u3.sbMean, s2 = u3.sbSdcm;
        const h2 = b(f3, l2, n2, a2);
        if (i2 = h2.sbMean, o2 = h2.sbSdcm, !(s2 + o2 < t2[f3 - 1] + t2[f3])) {
          l2[f3] = l2[f3] + 1;
          break;
        }
        t2[f3 - 1] = s2, t2[f3] = o2, e2[f3 - 1] = r2, e2[f3] = i2, c2 = true;
      }
  }
  return c2;
}
function f(e2, t2, l2, n2, a2) {
  let u2 = Math.max(n2 - e2, t2 - n2) / a2 / l2;
  return u2 = u2 >= 1 ? 1 : u2 >= 0.5 ? 0.5 : 0.25, u2;
}
function h(e2) {
  let t2 = 0;
  for (let l2 = 0; l2 < e2.length; l2++)
    t2 += e2[l2];
  return t2 /= e2.length, t2;
}
function m(e2, t2) {
  let l2 = 0;
  for (let n2 = 0; n2 < e2.length; n2++) {
    const a2 = e2[n2];
    l2 += (a2 - t2) * (a2 - t2);
  }
  l2 /= e2.length;
  return Math.sqrt(l2);
}
function b(e2, l2, n2, a2) {
  let u2 = 0, s2 = 0;
  for (let t2 = l2[e2] + 1; t2 <= l2[e2 + 1]; t2++) {
    const e3 = a2[t2];
    u2 += n2[t2] * e3, s2 += e3;
  }
  s2 <= 0 && t.warn("Exception in Natural Breaks calculation");
  const o2 = u2 / s2;
  let r2 = 0;
  for (let t2 = l2[e2] + 1; t2 <= l2[e2 + 1]; t2++)
    r2 += a2[t2] * (n2[t2] - o2) ** 2;
  return { sbMean: o2, sbSdcm: r2 };
}
export { a, l$1 as l };
