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
import { $ as e, a0 as y, dn as N, a1 as n$1, co as l$1, aX as y$1, t, a as r$1 } from "./index.js";
var a$1;
let n = a$1 = class extends l$1 {
  constructor(e2) {
    super(e2), this.variableName = null, this.dimensionName = null, this.values = [], this.isSlice = false;
  }
  clone() {
    return new a$1({ variableName: this.variableName, dimensionName: this.dimensionName, values: y$1(this.values), isSlice: this.isSlice });
  }
};
e([y({ type: String, json: { write: true } })], n.prototype, "variableName", void 0), e([y({ type: String, json: { write: true } })], n.prototype, "dimensionName", void 0), e([y({ type: N.array(N.oneOf([N.native(Number), N.array(N.native(Number))])), json: { write: true } })], n.prototype, "values", void 0), e([y({ type: Boolean, json: { write: true } })], n.prototype, "isSlice", void 0), n = a$1 = e([n$1("esri.layers.support.DimensionalDefinition")], n);
const p = n;
function a(e2, n2, t2) {
  var _a;
  const i2 = n2.shift();
  if (t2.length === 0) {
    const e3 = [];
    t2.push({ sliceId: -1, multidimensionalDefinition: e3 });
  }
  const s2 = t2.length;
  for (let a2 = 0; a2 < s2; a2++) {
    const n3 = t2.shift().multidimensionalDefinition;
    (_a = i2.values) == null ? void 0 : _a.forEach((a3) => {
      t2.push({ sliceId: -1, multidimensionalDefinition: [...n3, { variableName: e2, dimensionName: i2.name, values: [a3] }] });
    });
  }
  n2.length && a(e2, n2, t2);
}
function i(e2, n2) {
  const t2 = [];
  let i2 = 0;
  return (n2 ? e2.variables.filter((e3) => e3.name.toLowerCase() === n2.toLowerCase()) : [...e2.variables].sort((e3, n3) => e3.name > n3.name ? 1 : -1)).forEach((e3) => {
    const n3 = [], s2 = [...e3.dimensions].sort((e4, n4) => e4.name > n4.name ? -1 : 1);
    a(e3.name, s2, n3), n3.forEach((e4) => {
      t2.push(__spreadProps(__spreadValues({}, e4), { sliceId: i2++ }));
    });
  }), t2;
}
function s(n2, t2, a2) {
  let i2 = n2;
  if (t2 && (t2 = [...t2].sort((e2, n3) => e2.dimensionName < n3.dimensionName ? -1 : 1)).forEach(({ dimensionName: e2, values: n3, isSlice: t3 }) => {
    n3.length && (i2 = i2.filter((a3) => {
      const i3 = a3.multidimensionalDefinition.find((n4) => n4.dimensionName === e2);
      if (i3 == null)
        return false;
      const s2 = i3.values[0];
      return typeof s2 == "number" ? typeof n3[0] == "number" ? n3.includes(s2) : n3.some((e3) => e3[0] <= s2 && e3[1] >= s2) : typeof n3[0] == "number" ? n3.some((e3) => s2[0] <= e3 && s2[1] >= e3) : t3 ? n3.some((e3) => e3[0] === s2[0] && e3[0] === s2[1]) : n3.some((e3) => e3[0] >= s2[0] && e3[0] <= s2[1] || e3[1] >= s2[0] && e3[1] <= s2[1] || e3[0] < s2[0] && e3[1] > s2[1]);
    }));
  }), i2.length && a2 && r$1(a2.start) && r$1(a2.end)) {
    const e2 = a2.start.getTime(), n3 = a2.end.getTime(), t3 = i2[0].multidimensionalDefinition.findIndex((e3) => e3.dimensionName === "StdTime");
    t3 > -1 && (i2 = i2.filter((a3) => {
      const i3 = a3.multidimensionalDefinition[t3].values[0];
      return e2 <= i3 && n3 >= i3;
    }));
  }
  return i2.map((e2) => e2.sliceId);
}
function r(e2, n2) {
  return Array.isArray(e2) ? n2[0] === n2[1] ? e2[0] === n2[0] || e2[1] === n2[0] : e2[0] >= n2[0] && e2[0] <= n2[1] && e2[1] >= n2[0] && e2[1] <= n2[1] : e2 >= n2[0] && e2 <= n2[1];
}
function l(e2, n2) {
  return e2[0] <= n2[0] && e2[1] >= n2[0] || e2[0] <= n2[1] && e2[1] >= n2[1] || e2[0] >= n2[0] && e2[1] <= n2[1];
}
function o(e2) {
  return e2.length === 1 ? [e2[0], e2[0]] : [e2[0], e2[e2.length - 1]];
}
function u(e2, n2, t2) {
  var _a, _b, _c;
  if (!((_a = n2 == null ? void 0 : n2.subsetDefinitions) == null ? void 0 : _a.length))
    return e2;
  let a2;
  if (t2) {
    const { variables: i3 } = n2;
    if (i3.length && !i3.includes(t2))
      return null;
    const s3 = n2.subsetDefinitions.find((n3) => n3.dimensionName === e2.name && n3.variableName === t2);
    if (!((_b = s3 == null ? void 0 : s3.values) == null ? void 0 : _b.length))
      return e2;
    a2 = o(s3.values);
  } else {
    a2 = (_c = n2.dimensions.find(({ name: n3 }) => n3 === e2.name)) == null ? void 0 : _c.extent;
  }
  const i2 = a2;
  if (!i2 || !(i2 == null ? void 0 : i2.length))
    return e2;
  const s2 = e2.values.filter((e3) => r(e3, i2));
  return __spreadProps(__spreadValues({}, e2), { extent: [...i2], values: s2 });
}
function m(e2, n2, t2) {
  var _a;
  if (!((_a = n2 == null ? void 0 : n2.subsetDefinitions) == null ? void 0 : _a.length))
    return false;
  const { variables: a2 } = n2;
  if (a2.length && e2.some(({ variableName: e3 }) => e3 && !a2.includes(e3)))
    return true;
  for (let i2 = 0; i2 < e2.length; i2++) {
    const a3 = e2[i2], s2 = n2.subsetDefinitions.find((e3) => (a3.variableName === "" || e3.variableName === a3.variableName) && e3.dimensionName === a3.dimensionName);
    if (s2 == null ? void 0 : s2.values.length) {
      const e3 = o(s2.values);
      if (!a3.isSlice && a3.values.length === 2 && !Array.isArray(a3.values[0]) && a3.values[0] !== a3.values[1] && t2) {
        if (!l(a3.values, e3))
          return true;
      } else if (a3.values.some((n3) => !r(n3, e3)))
        return true;
    }
  }
  return false;
}
function c(e2, a2 = {}) {
  var _a, _b, _c;
  const { multidimensionalInfo: i2, keyProperties: s2 } = e2;
  if (t(i2))
    return null;
  const r2 = a2.variableName || (s2 == null ? void 0 : s2.DefaultVariable);
  let { variables: l2 } = i2;
  const { multidimensionalSubset: o2 } = a2;
  ((_a = o2 == null ? void 0 : o2.variables) == null ? void 0 : _a.length) && (l2 = l2.filter(({ name: e3 }) => o2.variables.includes(e3)));
  const m2 = r2 ? (_b = l2.find(({ name: e3 }) => e3 === r2)) != null ? _b : l2[0] : l2[0];
  if (!m2)
    return null;
  const c2 = [], { dimensions: f2, name: d2 } = m2;
  if (f2.length === 0)
    return [new p({ variableName: d2, dimensionName: "", values: [], isSlice: true })];
  for (let n2 = 0; n2 < f2.length; n2++) {
    const e3 = u(f2[n2], o2, d2);
    if (!e3)
      return null;
    const { values: i3, extent: s3 } = e3;
    let r3 = (_c = i3 == null ? void 0 : i3[0]) != null ? _c : s3[0];
    e3.name.toLowerCase() === "stdz" && !e3.hasRanges && Math.abs(s3[1]) <= Math.abs(s3[0]) && (r3 = (i3 == null ? void 0 : i3.length) ? i3[i3.length - 1] : s3[1]), c2.push(new p({ variableName: d2, dimensionName: e3.name, values: [r3], isSlice: !a2.useRangeForRangedDimensionInfo || !!e3.hasRanges }));
  }
  return c2;
}
function f(e2) {
  return !(t(e2) || !e2.length) && e2.some((e3) => {
    if (e3.values == null)
      return true;
    const n2 = e3.values.length;
    return n2 === 0 || n2 > 1 || !e3.isSlice && Array.isArray(e3.values[0]);
  });
}
function d(e2, t$1) {
  var _a;
  if (t(t$1) || t(e2))
    return null;
  let a2 = t$1.variables.map((e3) => __spreadValues({}, e3));
  return ((_a = e2 == null ? void 0 : e2.variables) == null ? void 0 : _a.length) && (a2 = a2.filter(({ name: n2 }) => e2.variables.includes(n2)), a2.forEach((n2) => {
    n2.dimensions = n2.dimensions.map((t2) => u(t2, e2, n2.name));
  })), a2;
}
function h(e2, n2) {
  var _a;
  const { values: t2 } = n2;
  if (t2 == null ? void 0 : t2.length)
    return Array.isArray(t2[0]) !== Array.isArray(e2) ? -1 : Array.isArray(t2[0]) ? t2.findIndex((n3) => n3[0] === e2[0] && n3[1] === e2[1]) : t2.indexOf(e2);
  const { extent: a2 } = n2;
  if (Array.isArray(e2) || e2 < a2[0] || e2 > a2[1])
    return -1;
  const i2 = n2.interval || 1;
  if (n2.unit !== "ISO8601")
    return Math.round((e2 - a2[0]) / i2);
  const s2 = a2[0];
  let r2 = -1;
  switch (((_a = n2.intervalUnit) == null ? void 0 : _a.toLowerCase()) || "seconds") {
    case "seconds":
      r2 = Math.round((e2 - s2) / 1e3 / i2);
      break;
    case "minutes":
      r2 = Math.round((e2 - s2) / 6e4 / i2);
      break;
    case "hours":
      r2 = Math.round((e2 - s2) / 36e5 / i2);
      break;
    case "days":
      r2 = Math.round((e2 - s2) / 864e5 / i2);
      break;
    case "months":
      {
        const n3 = new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear(), t3 = new Date(s2).getUTCMonth(), a3 = new Date(e2).getUTCMonth();
        r2 = n3 === 0 ? a3 - t3 : a3 + 11 - t3 + 12 * (n3 - 1);
      }
      break;
    case "years":
      r2 = Math.round((new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear()) / i2);
      break;
    case "decades":
      r2 = Math.round((new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear()) / 10 / i2);
  }
  return r2;
}
function v(e2) {
  var _a, _b, _c;
  let n2 = (_a = e2.values) == null ? void 0 : _a.length;
  if (n2)
    return n2;
  const { extent: t2, unit: a2 } = e2, i2 = e2.interval || 1, s2 = t2 ? t2[1] - t2[0] : 0;
  if (a2 !== "ISO8601")
    return Math.round(s2 / i2);
  switch ((_c = (_b = e2.intervalUnit) == null ? void 0 : _b.toLowerCase()) != null ? _c : "seconds") {
    case "seconds":
      n2 = Math.round(s2 / 1e3 / i2);
      break;
    case "minutes":
      n2 = Math.round(s2 / 6e4 / i2);
      break;
    case "hours":
      n2 = Math.round(s2 / 36e5 / i2);
      break;
    case "days":
      n2 = Math.round(s2 / 864e5 / i2);
      break;
    case "months":
      {
        const e3 = new Date(t2[1]).getUTCFullYear() - new Date(t2[0]).getUTCFullYear(), a3 = new Date(t2[1][0]).getUTCMonth(), i3 = new Date(t2[1][1]).getUTCMonth();
        n2 = e3 === 0 ? i3 - a3 + 1 : i3 + 11 - a3 + 12 * (e3 - 1) + 1;
      }
      break;
    case "years":
      n2 = Math.round((new Date(t2[1]).getUTCFullYear() - new Date(t2[0]).getUTCFullYear()) / i2);
      break;
    case "decades":
      n2 = Math.round((new Date(t2[1]).getUTCFullYear() - new Date(t2[0]).getUTCFullYear()) / 10 / i2);
      break;
    default:
      n2 = 0;
  }
  return n2;
}
function g(e2, n2) {
  let t2 = 0;
  const a2 = e2[0].variableName, i2 = [...n2.variables].sort((e3, n3) => e3.name > n3.name ? 1 : -1);
  for (let s2 = 0; s2 < i2.length; s2++) {
    const n3 = i2[s2], r2 = [...n3.dimensions].sort((e3, n4) => e3.name > n4.name ? -1 : 1);
    if (n3.name !== a2) {
      t2 += r2.map((e3) => v(e3)).reduce((e3, n4) => e3 * n4);
      continue;
    }
    const l2 = r2.map((e3) => v(e3)), o2 = r2.length;
    for (let a3 = 0; a3 < o2; a3++) {
      const n4 = e2.find((e3) => e3.dimensionName === r2[a3].name);
      if (n4 == null)
        return null;
      const i3 = h(n4.values[0], r2[a3]);
      if (i3 === -1)
        return null;
      l2.shift(), t2 += a3 === o2 - 1 ? i3 : i3 * l2.reduce((e3, n5) => e3 * n5);
    }
    break;
  }
  return t2;
}
export { c, d, f, g, i, m, p, s };
