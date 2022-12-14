import { a as a$1, l as l$1 } from "./generateRendererUtils.js";
const t = "<Null>", i = "equal-interval", l = 1, a = 5, o = 10, r = /\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi, u = new Set(["esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"]), s = ["min", "max", "avg", "stddev", "count", "sum", "variance", "nullcount", "median"];
function c(n) {
  return n == null || typeof n == "string" && !n ? t : n;
}
function m(n) {
  const e = n.normalizationField != null || n.normalizationType != null, t2 = n.minValue != null || n.maxValue != null, i2 = !!n.sqlExpression && n.supportsSQLExpression;
  return !e && !t2 && !i2;
}
function f(n) {
  const e = n.returnDistinct ? [...new Set(n.values)] : n.values, t2 = e.filter((n2) => n2 != null).length, i2 = { count: t2 };
  return n.supportsNullCount && (i2.nullcount = e.length - t2), n.percentileParams && (i2.median = p(e, n.percentileParams)), i2;
}
function d(n) {
  const { values: e, useSampleStdDev: t2, supportsNullCount: i2 } = n;
  let l2 = Number.POSITIVE_INFINITY, a2 = Number.NEGATIVE_INFINITY, o2 = null, r2 = null, u2 = null, s2 = null, c2 = 0;
  const m2 = n.minValue == null ? -1 / 0 : n.minValue, f2 = n.maxValue == null ? 1 / 0 : n.maxValue;
  for (const p2 of e)
    Number.isFinite(p2) ? p2 >= m2 && p2 <= f2 && (o2 += p2, l2 = Math.min(l2, p2), a2 = Math.max(a2, p2), c2++) : typeof p2 == "string" && c2++;
  if (c2 && o2 != null) {
    r2 = o2 / c2;
    let n2 = 0;
    for (const t3 of e)
      Number.isFinite(t3) && t3 >= m2 && t3 <= f2 && (n2 += (t3 - r2) ** 2);
    s2 = t2 ? c2 > 1 ? n2 / (c2 - 1) : 0 : c2 > 0 ? n2 / c2 : 0, u2 = Math.sqrt(s2);
  } else
    l2 = null, a2 = null;
  const d2 = { avg: r2, count: c2, max: a2, min: l2, stddev: u2, sum: o2, variance: s2 };
  return i2 && (d2.nullcount = e.length - c2), n.percentileParams && (d2.median = p(e, n.percentileParams)), d2;
}
function p(n, e) {
  const { fieldType: t2, value: i2, orderBy: l2, isDiscrete: a2 } = e, o2 = v(t2, l2 === "desc");
  if ((n = [...n].filter((n2) => n2 != null).sort((n2, e2) => o2(n2, e2))).length === 0)
    return null;
  if (i2 <= 0)
    return n[0];
  if (i2 >= 1)
    return n[n.length - 1];
  const r2 = (n.length - 1) * i2, u2 = Math.floor(r2), s2 = u2 + 1, c2 = r2 % 1, m2 = n[u2], f2 = n[s2];
  return s2 >= n.length || a2 || typeof m2 == "string" || typeof f2 == "string" ? m2 : m2 * (1 - c2) + f2 * c2;
}
function v(n, e) {
  const t2 = e ? 1 : -1, i2 = h(e), l2 = b(e);
  if (!(!!n && ["esriFieldTypeDate", "esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...u].includes(n)))
    return (n2, e2) => typeof n2 == "number" && typeof e2 == "number" ? i2(n2, e2) : typeof n2 == "string" && typeof e2 == "string" ? l2(n2, e2) : t2;
  if (n === "esriFieldTypeDate")
    return (n2, e2) => {
      const l3 = new Date(n2).getTime(), a2 = new Date(e2).getTime();
      return isNaN(l3) || isNaN(a2) ? t2 : i2(l3, a2);
    };
  if (u.has(n))
    return (n2, e2) => i2(n2, e2);
  if (n === "esriFieldTypeString")
    return (n2, e2) => l2(n2, e2);
  if (n === "esriFieldTypeGUID" || n === "esriFieldTypeGlobalID") {
    const n2 = b(e);
    return (e2, t3) => n2(g(e2), g(t3));
  }
  return e ? (n2, e2) => 1 : (n2, e2) => -1;
}
function b(n) {
  return n ? (n2, e) => (n2 = n2 == null ? void 0 : n2.toUpperCase(), e = e == null ? void 0 : e.toUpperCase(), n2 > e ? -1 : n2 < e ? 1 : 0) : (n2, e) => (n2 = n2 == null ? void 0 : n2.toUpperCase(), e = e == null ? void 0 : e.toUpperCase(), n2 < e ? -1 : n2 > e ? 1 : 0);
}
function h(n) {
  return n ? (n2, e) => e - n2 : (n2, e) => n2 - e;
}
function g(n) {
  return n.substr(24, 12) + n.substr(19, 4) + n.substr(16, 2) + n.substr(14, 2) + n.substr(11, 2) + n.substr(9, 2) + n.substr(6, 2) + n.substr(4, 2) + n.substr(2, 2) + n.substr(0, 2);
}
function V(n, e) {
  let t2;
  for (t2 in n)
    s.includes(t2) && (Number.isFinite(n[t2]) || (n[t2] = null));
  return e ? (["avg", "stddev", "variance"].forEach((e2) => {
    n[e2] != null && (n[e2] = Math.ceil(n[e2]));
  }), n) : n;
}
function T(n) {
  const e = {};
  for (let t2 of n)
    (t2 == null || typeof t2 == "string" && t2.trim() === "") && (t2 = null), e[t2] == null ? e[t2] = { count: 1, data: t2 } : e[t2].count++;
  return { count: e };
}
function y(n) {
  return (n == null ? void 0 : n.type) !== "coded-value" ? [] : n.codedValues.map((n2) => n2.code);
}
function F(n, e, t2, i2) {
  const l2 = n.count, a2 = [];
  if (t2 && e) {
    const n2 = [], t3 = y(e[0]);
    for (const l3 of t3)
      if (e[1]) {
        const t4 = y(e[1]);
        for (const a3 of t4)
          if (e[2]) {
            const t5 = y(e[2]);
            for (const e2 of t5)
              n2.push(`${c(l3)}${i2}${c(a3)}${i2}${c(e2)}`);
          } else
            n2.push(`${c(l3)}${i2}${c(a3)}`);
      } else
        n2.push(l3);
    for (const e2 of n2)
      l2.hasOwnProperty(e2) || (l2[e2] = { data: e2, count: 0 });
  }
  for (const o2 in l2) {
    const n2 = l2[o2];
    a2.push({ value: n2.data, count: n2.count, label: n2.label });
  }
  return { uniqueValueInfos: a2 };
}
function x(n, e, t2, i2) {
  let l2 = null;
  switch (e) {
    case "log":
      n !== 0 && (l2 = Math.log(n) * Math.LOG10E);
      break;
    case "percent-of-total":
      Number.isFinite(i2) && i2 !== 0 && (l2 = n / i2 * 100);
      break;
    case "field":
      Number.isFinite(t2) && t2 !== 0 && (l2 = n / t2);
      break;
    case "natural-log":
      n > 0 && (l2 = Math.log(n));
      break;
    case "square-root":
      n > 0 && (l2 = n ** 0.5);
  }
  return l2;
}
function D(n, t2) {
  const i2 = I({ field: t2.field, normalizationType: t2.normalizationType, normalizationField: t2.normalizationField, classificationMethod: t2.classificationMethod, standardDeviationInterval: t2.standardDeviationInterval, breakCount: t2.numClasses || a });
  return n = z(n, t2.minValue, t2.maxValue), a$1({ definition: i2, values: n, normalizationTotal: t2.normalizationTotal });
}
function z(n, e, t2) {
  return e = e != null ? e : -1 / 0, t2 = t2 != null ? t2 : 1 / 0, n.filter((n2) => Number.isFinite(n2) && n2 >= e && n2 <= t2);
}
function I(e) {
  const t2 = e.field, a2 = e.classificationMethod || i, o2 = e.normalizationType, r2 = e.normalizationField, u2 = new l$1();
  return u2.classificationField = t2, u2.breakCount = e.breakCount, u2.classificationMethod = a2, u2.standardDeviationInterval = a2 === "standard-deviation" ? e.standardDeviationInterval || l : void 0, u2.normalizationType = o2, u2.normalizationField = o2 === "field" ? r2 : void 0, u2;
}
function N(n, e) {
  let t2 = n.classBreaks;
  const i2 = t2.length, l2 = t2[0].minValue, a2 = t2[i2 - 1].maxValue, o2 = e === "standard-deviation", u2 = r;
  return t2 = t2.map((n2) => {
    const e2 = n2.label, t3 = { minValue: n2.minValue, maxValue: n2.maxValue, label: e2 };
    if (o2 && e2) {
      const n3 = e2.match(u2).map((n4) => +n4.trim());
      n3.length === 2 ? (t3.minStdDev = n3[0], t3.maxStdDev = n3[1], n3[0] < 0 && n3[1] > 0 && (t3.hasAvg = true)) : n3.length === 1 && (e2.includes("<") ? (t3.minStdDev = null, t3.maxStdDev = n3[0]) : e2.includes(">") && (t3.minStdDev = n3[0], t3.maxStdDev = null));
    }
    return t3;
  }), { minValue: l2, maxValue: a2, classBreakInfos: t2, normalizationTotal: n.normalizationTotal };
}
function S(n, e) {
  const { min: t2, max: i2, intervals: l2 } = M(n, e), a2 = l2.map((n2, e2) => ({ minValue: l2[e2][0], maxValue: l2[e2][1], count: 0 }));
  for (const o2 of n)
    if (o2 != null && o2 >= t2 && o2 <= i2) {
      const n2 = C(l2, o2);
      n2 > -1 && a2[n2].count++;
    }
  return { bins: a2, minValue: t2, maxValue: i2, normalizationTotal: e.normalizationTotal };
}
function M(n, e) {
  const { field: t2, classificationMethod: i2, standardDeviationInterval: l2, normalizationType: a2, normalizationField: r2, normalizationTotal: u2, minValue: s2, maxValue: c2 } = e, f2 = e.numBins || o;
  let p2 = null, v2 = null, b2 = null;
  if ((!i2 || i2 === "equal-interval") && !a2) {
    if (s2 != null && c2 != null)
      p2 = s2, v2 = c2;
    else {
      const e2 = d({ values: n, minValue: s2, maxValue: c2, useSampleStdDev: !a2, supportsNullCount: m({ normalizationType: a2, normalizationField: r2, minValue: s2, maxValue: c2 }) });
      p2 = e2.min, v2 = e2.max;
    }
    b2 = k(p2, v2, f2);
  } else {
    const { classBreaks: e2 } = D(n, { field: t2, normalizationType: a2, normalizationField: r2, normalizationTotal: u2, classificationMethod: i2, standardDeviationInterval: l2, minValue: s2, maxValue: c2, numClasses: f2 });
    p2 = e2[0].minValue, v2 = e2[e2.length - 1].maxValue, b2 = e2.map((n2) => [n2.minValue, n2.maxValue]);
  }
  return { min: p2, max: v2, intervals: b2 };
}
function C(n, e) {
  let t2 = -1;
  for (let i2 = n.length - 1; i2 >= 0; i2--) {
    if (e >= n[i2][0]) {
      t2 = i2;
      break;
    }
  }
  return t2;
}
function k(n, e, t2) {
  const i2 = (e - n) / t2, l2 = [];
  let a2, o2 = n;
  for (let r2 = 1; r2 <= t2; r2++)
    a2 = o2 + i2, a2 = Number(a2.toFixed(16)), l2.push([o2, r2 === t2 ? e : a2]), o2 = a2;
  return l2;
}
export { D, F, N, S, T, V, c, d, f, m, p, v, x };
