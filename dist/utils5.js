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
import { $ as e$6, a0 as y$2, a1 as n$a, co as l$b, cn as s$3, t as t$5, ck as s$4, a as r$4, dW as r$5, aX as y$3, ee as m$3, cD as o$5, ef as p$c, dD as r$6, k as e$7, g as s$5, a7 as w$3, cr as w$4 } from "./index.js";
import { o as o$4, c as c$k, a as a$h, x as x$2, u as u$9, d as d$3 } from "./RasterSymbolizer.js";
import { r as r$3, g as g$2, h as h$4, o as o$6, i as i$e, k as k$2, y as y$4, w as w$2, c as c$l, x as x$1 } from "./pixelUtils.js";
let e$5 = class extends l$b {
  constructor() {
    super(...arguments), this.raster = void 0;
  }
};
e$6([y$2({ json: { write: true } })], e$5.prototype, "raster", void 0), e$5 = e$6([n$a("esri.layers.support.rasterFunctions.AspectFunctionArguments")], e$5);
const p$b = e$5;
var e$4;
let t$4 = e$4 = class extends p$b {
  clone() {
    return new e$4({ raster: this.raster });
  }
};
t$4 = e$4 = e$6([n$a("esri.layers.support.rasterFunctions.AspectFunctionArguments")], t$4);
const c$j = t$4;
let n$9 = class extends l$b {
  constructor() {
    super(...arguments), this.functionArguments = null, this.readingBufferSize = 0;
  }
  bind(r2, t2 = false) {
    const s2 = this._getRasterValues();
    for (let e2 = 0; e2 < s2.length; e2++) {
      const o2 = s2[e2];
      if (o2 && typeof o2 == "object" && "bind" in o2 && (!o2.rasterInfo || t2)) {
        const s3 = o2.bind(r2, t2);
        if (!s3.success)
          return s3;
      }
    }
    return !this.rasterInfo || t2 ? (this.sourceRasterInfos = this._getSourceRasterInfos(r2), this._bindSourceRasters()) : { success: true };
  }
  process(r2) {
    const t2 = this._getRasterValues().map((t3) => this._readRasterValue(t3, r2));
    return this._processPixels(__spreadProps(__spreadValues({}, r2), { pixelBlocks: t2 }));
  }
  getPrimaryRasters() {
    const r2 = [], t2 = [];
    return this._getPrimaryRasters(this, r2, t2), { rasters: r2, rasterIds: t2 };
  }
  _getOutputPixelType(r2) {
    var _a;
    return this.outputPixelType === "unknown" ? r2 : (_a = this.outputPixelType) != null ? _a : r2;
  }
  _getRasterValues() {
    const { rasterArgumentNames: r2 } = this;
    return r2[0] === "rasters" && Array.isArray(this.functionArguments.rasters) ? this.functionArguments.rasters : r2.map((r3) => this.functionArguments[r3]);
  }
  _getSourceRasterInfos(r2) {
    const t2 = this._getRasterValues(), { rasterInfos: s2, rasterIds: e2 } = r2;
    return t2.map((r3) => r3 && typeof r3 == "object" && "bind" in r3 && r3.rasterInfo ? r3.rasterInfo : typeof r3 == "string" && e2.includes(r3) ? s2[e2.indexOf(r3)] : s2[0]);
  }
  _getPrimaryRasterId(r2) {
    return r2 == null ? void 0 : r2.url;
  }
  _getPrimaryRasters(r2, t2 = [], s2 = []) {
    for (let e2 = 0; e2 < r2.sourceRasters.length; e2++) {
      const o2 = r2.sourceRasters[e2];
      if (typeof o2 != "number")
        if ("bind" in o2)
          this._getPrimaryRasters(o2, t2, s2);
        else {
          const r3 = o2, e3 = this._getPrimaryRasterId(r3);
          if (e3 == null)
            continue;
          s2.includes(e3) || (this.mainPrimaryRasterId === e3 ? (t2.unshift(r3), s2.unshift(e3)) : (t2.push(r3), s2.push(e3)));
        }
    }
  }
  _readRasterValue(r2, t2) {
    const { primaryPixelBlocks: e2 } = t2;
    if (t$5(r2) || r2 === "$$") {
      const r3 = e2[0];
      return t$5(r3) ? null : r3.clone();
    }
    if (typeof r2 == "string") {
      const s2 = t2.primaryRasterIds.indexOf(r2);
      return s2 === -1 ? null : e2[s2];
    }
    if (typeof r2 == "number") {
      const t3 = e2[0];
      if (t$5(t3))
        return null;
      const o2 = new Float32Array(t3.width * t3.height);
      o2.fill(r2);
      const i2 = t3.clone();
      return i2.pixels = i2.pixels.map(() => o2), i2;
    }
    return r2.process(t2);
  }
};
e$6([y$2({ json: { write: true } })], n$9.prototype, "functionName", void 0), e$6([y$2({ json: { write: true } })], n$9.prototype, "functionArguments", void 0), e$6([y$2()], n$9.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } }), s$3((r2) => r2 == null ? void 0 : r2.toLowerCase())], n$9.prototype, "outputPixelType", void 0), e$6([y$2({ json: { write: true } })], n$9.prototype, "mainPrimaryRasterId", void 0), e$6([y$2()], n$9.prototype, "sourceRasters", void 0), e$6([y$2({ json: { write: true } })], n$9.prototype, "sourceRasterInfos", void 0), e$6([y$2({ json: { write: true } })], n$9.prototype, "rasterInfo", void 0), e$6([y$2({ json: { write: true } })], n$9.prototype, "readingBufferSize", void 0), n$9 = e$6([n$a("esri.layers.support.rasterFunctions.BaseRasterFunction")], n$9);
const a$g = n$9;
let c$i = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Aspect", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    const t2 = this.sourceRasterInfos[0];
    this.isGCS = t2.spatialReference.isGeographic, this.outputPixelType = this._getOutputPixelType("f32");
    const s2 = t2.clone();
    return s2.pixelType = this.outputPixelType, s2.statistics = null, s2.histograms = null, this.rasterInfo = s2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const e2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(e2))
      return null;
    const { extent: r2 } = t2, o2 = r2 ? { x: r2.width / e2.width, y: r2.height / e2.height } : { x: 1, y: 1 };
    return o$4(e2, { resolution: o2 });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], c$i.prototype, "functionName", void 0), e$6([y$2({ type: c$j, json: { write: true, name: "rasterFunctionArguments" } })], c$i.prototype, "functionArguments", void 0), e$6([y$2()], c$i.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], c$i.prototype, "isGCS", void 0), c$i = e$6([n$a("esri.layers.support.rasterFunctions.AspectFunction")], c$i);
const p$a = c$i;
const e$3 = new Set(["+", "-", "*", "/", "(", ")"]);
function t$3(t2, n2) {
  (t2 = t2.replace(/ /g, "")).startsWith("-") && (t2 = "0" + t2), t2.startsWith("+") && (t2 = t2.slice(1, t2.length));
  const r2 = t2.split(""), l2 = [], o2 = [];
  let s2 = "";
  for (let a2 = 0; a2 < r2.length; a2++) {
    const t3 = r2[a2];
    if (e$3.has(t3))
      s2 !== "" && o2.push(parseFloat(s2)), l2.push(t3), s2 = "";
    else {
      if (t3.toLowerCase() === "b") {
        a2++, s2 = t3.concat(r2[a2]), o2.push(n2[parseInt(s2[1], 10) - 1]), s2 = "";
        continue;
      }
      s2 = s2.concat(t3), a2 === r2.length - 1 && o2.push(parseFloat(s2));
    }
  }
  return { ops: l2, nums: o2 };
}
function n$8(e2, t2, n2, r2) {
  if (typeof n2 == "number" && typeof r2 == "number")
    return n2 + r2;
  let l2;
  if (typeof n2 == "number") {
    l2 = r2.length;
    const e3 = n2;
    (n2 = new Float32Array(l2)).fill(e3);
  } else if (l2 = n2.length, r2.constructor === Number) {
    const e3 = r2;
    (r2 = new Float32Array(l2)).fill(e3);
  }
  const o2 = new Float32Array(l2);
  switch (t2) {
    case "+":
      for (let t3 = 0; t3 < l2; t3++)
        (e2 == null || e2[t3]) && (o2[t3] = n2[t3] + r2[t3]);
      break;
    case "-":
      for (let t3 = 0; t3 < l2; t3++)
        (e2 == null || e2[t3]) && (o2[t3] = n2[t3] - r2[t3]);
      break;
    case "*":
      for (let t3 = 0; t3 < l2; t3++)
        (e2 == null || e2[t3]) && (o2[t3] = n2[t3] * r2[t3]);
      break;
    case "/":
      for (let t3 = 0; t3 < l2; t3++)
        (e2 == null || e2[t3]) && r2[t3] && (o2[t3] = n2[t3] / r2[t3]);
      break;
    case "(":
    case ")":
      throw "encountered error with custom band index equation";
  }
  return o2;
}
function r$2(e2, t2) {
  e2.splice(t2, 1);
  let n2 = 0, r2 = 0;
  do {
    n2 = 0, r2 = 0;
    for (let t3 = 0; t3 < e2.length; t3++)
      if (e2[t3] === "(")
        n2 = t3;
      else if (e2[t3] === ")") {
        r2 = t3;
        break;
      }
    r2 === n2 + 1 && e2.splice(n2, 2);
  } while (r2 === n2 + 1);
  return e2;
}
function l$a(e2) {
  if (e2.length === 1)
    return { opIndex: 0, numIndex: 0 };
  let t2 = 0, n2 = 0;
  for (let s2 = 0; s2 < e2.length; s2++)
    if (e2[s2] === "(")
      t2 = s2;
    else if (e2[s2] === ")") {
      n2 = s2;
      break;
    }
  const r2 = n2 === 0 ? e2 : e2.slice(t2 + 1, n2);
  let l2 = -1;
  for (let s2 = 0; s2 < r2.length; s2++)
    if (r2[s2] === "*" || r2[s2] === "/") {
      l2 = s2;
      break;
    }
  if (l2 > -1)
    n2 > 0 && (l2 += t2 + 1);
  else {
    for (let e3 = 0; e3 < r2.length; e3++)
      if (r2[e3] === "+" || r2[e3] === "-") {
        l2 = e3;
        break;
      }
    n2 > 0 && (l2 += t2 + 1);
  }
  let o2 = 0;
  for (let s2 = 0; s2 < l2; s2++)
    e2[s2] === "(" && o2++;
  return { opIndex: l2, numIndex: l2 - o2 };
}
function o$3(e2, o2, s2) {
  let a2, { ops: f2, nums: i2 } = t$3(s2, o2);
  if (f2.length === 0) {
    const e3 = i2.length === 1 ? i2[0] : o2[0];
    if (e3 instanceof Float32Array)
      return [e3];
    const t2 = new Float32Array(o2[0].length);
    return typeof e3 == "number" ? t2.fill(e3) : t2.set(e3), [t2];
  }
  for (; f2.length > 0; ) {
    const { numIndex: t2, opIndex: o3 } = l$a(f2);
    if (a2 = n$8(e2, f2[o3], i2[t2], i2[t2 + 1]), f2.length === 1)
      break;
    f2 = r$2(f2, o3), i2.splice(t2, 2, a2);
  }
  return [a2];
}
const a$f = new s$4({ 0: "custom", 1: "ndvi", 2: "savi", 3: "tsavi", 4: "msavi", 5: "gemi", 6: "pvi", 7: "gvitm", 8: "sultan", 9: "vari", 10: "gndvi", 11: "sr", 12: "ndvi-re", 13: "sr-re", 14: "mtvi2", 15: "rtvi-core", 16: "ci-re", 17: "ci-g", 18: "ndwi", 19: "evi", 20: "iron-oxide", 21: "ferrous-minerals", 22: "clay-minerals", 23: "wndwi", 24: "bai", 25: "nbr", 26: "ndbi", 27: "ndmi", 28: "ndsi", 29: "mndwi" }, { useNumericKeys: true });
function s$2(n2, a2) {
  var _a;
  if (!r$3(n2))
    return n2;
  const { equation: s2, method: i2 } = a2, x2 = a2.bandIndexes.map((n3) => n3 - 1), { pixels: j2, mask: q2 } = n2;
  let M2;
  switch (i2) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      M2 = l$9(q2, j2[x2[0]], j2[x2[1]]);
      break;
    case "ndwi":
      M2 = l$9(q2, j2[x2[1]], j2[x2[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      M2 = c$h(q2, j2[x2[0]], j2[x2[1]]);
      break;
    case "ci-g":
    case "ci-re":
      M2 = u$8(q2, j2[x2[0]], j2[x2[1]]);
      break;
    case "savi":
      M2 = f$2(q2, j2[x2[0]], j2[x2[1]], x2[2] + 1);
      break;
    case "tsavi":
      M2 = m$2(q2, j2[x2[0]], j2[x2[1]], x2[2] + 1, x2[3] + 1, x2[4] + 1);
      break;
    case "msavi":
      M2 = w$1(q2, j2[x2[0]], j2[x2[1]]);
      break;
    case "gemi":
      M2 = h$3(q2, j2[x2[0]], j2[x2[1]]);
      break;
    case "pvi":
      M2 = d$2(q2, j2[x2[0]], j2[x2[1]], x2[2] + 1, x2[3] + 1);
      break;
    case "gvitm":
      M2 = g$1(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]], j2[x2[3]], j2[x2[4]], j2[x2[5]]]);
      break;
    case "sultan":
      M2 = y$1(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]], j2[x2[3]], j2[x2[4]], j2[x2[5]]]);
      break;
    case "vari":
      M2 = b$1(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]]]);
      break;
    case "mtvi2":
      M2 = v$1(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]]]);
      break;
    case "rtvi-core":
      M2 = k$1(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]]]);
      break;
    case "evi":
      M2 = p$9(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]]]);
      break;
    case "wndwi":
      M2 = A$1(q2, [j2[x2[0]], j2[x2[1]], j2[x2[2]]], (_a = x2[3]) != null ? _a : 0.5);
      break;
    case "bai":
      M2 = F$1(q2, j2[x2[0]], j2[x2[1]]);
      break;
    case "custom":
      M2 = o$3(q2, j2, s2);
      break;
    default:
      return n2;
  }
  const U2 = r$4(q2) ? new Uint8Array(q2.length) : null;
  r$4(q2) && r$4(U2) && U2.set(q2);
  const B2 = new g$2({ width: n2.width, height: n2.height, pixelType: "f32", pixels: M2, mask: U2 });
  return B2.updateStatistics(), B2;
}
function i$d(n2, t2, r2, o2) {
  const { mask: a2, pixels: s2, width: i2, height: l2 } = n2, c2 = s2[r2], u2 = s2[t2], f2 = u2.length, m2 = o2 ? new Uint8Array(f2) : new Float32Array(f2), w2 = o2 ? 100 : 1, h2 = o2 ? 100 : 0;
  for (let e2 = 0; e2 < f2; e2++)
    if (a2 == null || a2[e2]) {
      const n3 = c2[e2], t3 = u2[e2], r3 = n3 + t3;
      r3 && (m2[e2] = (n3 - t3) / r3 * w2 + h2);
    }
  const d2 = new g$2({ width: i2, height: l2, mask: a2, pixelType: o2 ? "u8" : "f32", pixels: [m2] });
  return d2.updateStatistics(), d2;
}
function l$9(n2, t2, e2) {
  const r2 = e2.length, o2 = new Float32Array(r2);
  for (let a2 = 0; a2 < r2; a2++)
    if (n2 == null || n2[a2]) {
      const n3 = t2[a2], r3 = e2[a2], s2 = n3 + r3;
      s2 && (o2[a2] = (n3 - r3) / s2);
    }
  return [o2];
}
function c$h(n2, t2, e2) {
  const r2 = e2.length, o2 = new Float32Array(r2);
  for (let a2 = 0; a2 < r2; a2++)
    if (n2 == null || n2[a2]) {
      const n3 = t2[a2], r3 = e2[a2];
      r3 && (o2[a2] = n3 / r3);
    }
  return [o2];
}
function u$8(n2, t2, e2) {
  const r2 = t2.length, o2 = new Float32Array(r2);
  for (let a2 = 0; a2 < r2; a2++)
    if (n2 == null || n2[a2]) {
      const n3 = t2[a2], r3 = e2[a2];
      r3 && (o2[a2] = n3 / r3 - 1);
    }
  return [o2];
}
function f$2(n2, t2, e2, r2) {
  const o2 = e2.length, a2 = new Float32Array(o2);
  for (let s2 = 0; s2 < o2; s2++)
    if (n2 == null || n2[s2]) {
      const n3 = e2[s2], o3 = t2[s2], i2 = o3 + n3 + r2;
      i2 && (a2[s2] = (o3 - n3) / i2 * (1 + r2));
    }
  return [a2];
}
function m$2(n2, t2, e2, r2, o2, a2) {
  const s2 = e2.length, i2 = new Float32Array(s2), l2 = -o2 * r2 + a2 * (1 + r2 * r2);
  for (let c2 = 0; c2 < s2; c2++)
    if (n2 == null || n2[c2]) {
      const n3 = e2[c2], a3 = t2[c2], s3 = o2 * a3 + n3 + l2;
      s3 && (i2[c2] = r2 * (a3 - r2 * n3 - o2) / s3);
    }
  return [i2];
}
function w$1(n2, t2, e2) {
  const r2 = e2.length, o2 = new Float32Array(r2);
  for (let a2 = 0; a2 < r2; a2++)
    if (n2 == null || n2[a2]) {
      const n3 = e2[a2], r3 = t2[a2];
      o2[a2] = 0.5 * (2 * (r3 + 1) - Math.sqrt((2 * r3 + 1) ** 2 - 8 * (r3 - n3)));
    }
  return [o2];
}
function h$3(n2, t2, e2) {
  const r2 = e2.length, o2 = new Float32Array(r2);
  for (let a2 = 0; a2 < r2; a2++)
    if (n2 == null || n2[a2]) {
      const n3 = e2[a2], r3 = t2[a2];
      if (n3 !== 1) {
        const t3 = (2 * (r3 * r3 - n3 * n3) + 1.5 * r3 + 0.5 * n3) / (r3 + n3 + 0.5);
        o2[a2] = t3 * (1 - 0.25 * t3) - (n3 - 0.125) / (1 - n3);
      }
    }
  return [o2];
}
function d$2(n2, t2, e2, r2, o2) {
  const a2 = e2.length, s2 = new Float32Array(a2), i2 = Math.sqrt(1 + r2 * r2);
  for (let l2 = 0; l2 < a2; l2++)
    if (n2 == null || n2[l2]) {
      const n3 = e2[l2], a3 = t2[l2];
      s2[l2] = (a3 - r2 * n3 - o2) / i2;
    }
  return [s2];
}
function g$1(n2, t2) {
  const [e2, r2, o2, a2, s2, i2] = t2, l2 = e2.length, c2 = new Float32Array(l2);
  for (let u2 = 0; u2 < l2; u2++)
    (n2 == null || n2[u2]) && (c2[u2] = -0.2848 * e2[u2] - 0.2435 * r2[u2] - 0.5436 * o2[u2] + 0.7243 * a2[u2] + 0.084 * s2[u2] - 1.18 * i2[u2]);
  return [c2];
}
function y$1(n2, t2) {
  const [e2, , r2, o2, a2, s2] = t2, i2 = e2.length, l2 = new Float32Array(i2), c2 = new Float32Array(i2), u2 = new Float32Array(i2);
  for (let f2 = 0; f2 < i2; f2++)
    (n2 == null || n2[f2]) && (l2[f2] = s2[f2] ? a2[f2] / s2[f2] * 100 : 0, c2[f2] = e2[f2] ? a2[f2] / e2[f2] * 100 : 0, u2[f2] = o2[f2] ? r2[f2] / o2[f2] * (a2[f2] / o2[f2]) * 100 : 0);
  return [l2, c2, u2];
}
function b$1(n2, t2) {
  const [e2, r2, o2] = t2, a2 = e2.length, s2 = new Float32Array(a2);
  for (let i2 = 0; i2 < a2; i2++)
    if (n2 == null || n2[i2])
      for (i2 = 0; i2 < a2; i2++) {
        const n3 = e2[i2], t3 = r2[i2], a3 = t3 + n3 - o2[i2];
        a3 && (s2[i2] = (t3 - n3) / a3);
      }
  return [s2];
}
function v$1(n2, t2) {
  const [e2, r2, o2] = t2, a2 = e2.length, s2 = new Float32Array(a2);
  for (let i2 = 0; i2 < a2; i2++)
    if (n2 == null || n2[i2])
      for (i2 = 0; i2 < a2; i2++) {
        const n3 = e2[i2], t3 = r2[i2], a3 = o2[i2], l2 = Math.sqrt((2 * n3 + 1) ** 2 - 6 * n3 - 5 * Math.sqrt(t3) - 0.5);
        s2[i2] = 1.5 * (1.2 * (n3 - a3) - 2.5 * (t3 - a3)) * l2;
      }
  return [s2];
}
function k$1(n2, t2) {
  const [e2, r2, o2] = t2, a2 = e2.length, s2 = new Float32Array(a2);
  for (let i2 = 0; i2 < a2; i2++)
    if (n2 == null || n2[i2])
      for (i2 = 0; i2 < a2; i2++) {
        const n3 = e2[i2], t3 = r2[i2], a3 = o2[i2];
        s2[i2] = 100 * (n3 - t3) - 10 * (n3 - a3);
      }
  return [s2];
}
function p$9(n2, t2) {
  const [e2, r2, o2] = t2, a2 = e2.length, s2 = new Float32Array(a2);
  for (let i2 = 0; i2 < a2; i2++)
    if (n2 == null || n2[i2])
      for (i2 = 0; i2 < a2; i2++) {
        const n3 = e2[i2], t3 = r2[i2], a3 = n3 + 6 * t3 - 7.5 * o2[i2] + 1;
        a3 && (s2[i2] = 2.5 * (n3 - t3) / a3);
      }
  return [s2];
}
function A$1(n2, t2, e2 = 0.5) {
  const [r2, o2, a2] = t2, s2 = o2.length, i2 = new Float32Array(s2);
  for (let l2 = 0; l2 < s2; l2++)
    if (n2 == null || n2[l2])
      for (l2 = 0; l2 < s2; l2++) {
        const n3 = r2[l2], t3 = o2[l2], s3 = a2[l2], c2 = n3 + e2 * t3 + (1 - e2) * s3;
        c2 && (i2[l2] = (n3 - e2 * t3 - (1 - e2) * s3) / c2);
      }
  return [i2];
}
function F$1(n2, t2, e2) {
  const r2 = e2.length, o2 = new Float32Array(r2);
  for (let a2 = 0; a2 < r2; a2++)
    if (n2 == null || n2[a2])
      for (a2 = 0; a2 < r2; a2++) {
        const n3 = (0.1 - t2[a2]) ** 2 + (0.06 - e2[a2]) ** 2;
        n3 && (o2[a2] = 1 / n3);
      }
  return [o2];
}
var p$8;
let a$e = p$8 = class extends p$b {
  constructor() {
    super(...arguments), this.method = "custom";
  }
  clone() {
    return new p$8({ method: this.method, bandIndexes: this.bandIndexes, raster: y$3(this.raster) });
  }
};
e$6([y$2({ json: { type: String, write: true } })], a$e.prototype, "bandIndexes", void 0), e$6([r$5(a$f)], a$e.prototype, "method", void 0), a$e = p$8 = e$6([n$a("esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments")], a$e);
const i$c = a$e;
let u$7 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "BandArithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t2 = this.sourceRasterInfos[0], s2 = t2.clone();
    return s2.pixelType = this.outputPixelType, s2.statistics = null, s2.histograms = null, s2.bandCount = this.functionArguments.method === "sultan" ? t2.bandCount : 1, this.rasterInfo = s2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const e2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(e2))
      return e2;
    const { method: r2, bandIndexes: o2 } = this.functionArguments, i2 = o2.split(" ").map((t3) => parseFloat(t3));
    return s$2(e2, { method: r2, bandIndexes: i2, equation: o2 });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], u$7.prototype, "functionName", void 0), e$6([y$2({ type: i$c, json: { write: true, name: "rasterFunctionArguments" } })], u$7.prototype, "functionArguments", void 0), e$6([y$2()], u$7.prototype, "rasterArgumentNames", void 0), u$7 = e$6([n$a("esri.layers.support.rasterFunctions.BandArithmeticFunction")], u$7);
const a$d = u$7;
var c$g;
let l$8 = c$g = class extends p$b {
  readColorRamp(o2) {
    return p$c(o2);
  }
  clone() {
    var _a;
    return new c$g({ colormap: y$3(this.colormap), colormapName: this.colormapName, colorRamp: (_a = this.colorRamp) == null ? void 0 : _a.clone(), colorRampName: this.colorRampName });
  }
};
e$6([y$2({ type: [[Number]], json: { write: true } })], l$8.prototype, "colormap", void 0), e$6([y$2({ type: String, json: { write: true } })], l$8.prototype, "colormapName", void 0), e$6([y$2({ types: m$3, json: { write: true } })], l$8.prototype, "colorRamp", void 0), e$6([o$5("colorRamp")], l$8.prototype, "readColorRamp", null), e$6([y$2({ type: String, json: { write: true } })], l$8.prototype, "colorRampName", void 0), l$8 = c$g = e$6([n$a("esri.layers.support.rasterFunctions.ColormapFunctionArguments")], l$8);
const i$b = l$8;
let i$a = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Colormap", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const r2 = this.sourceRasterInfos[0];
    if (r2.bandCount > 1)
      return { success: false, error: "colormap-function: source data must be single band" };
    let { colormap: o2, colorRamp: t2 } = this.functionArguments;
    if ((o2 == null ? void 0 : o2.length) || t2 && (o2 = c$k(t2, 256, true)), !(o2 == null ? void 0 : o2.length))
      return { success: false, error: "colormap-function: missing colormap argument" };
    this.outputPixelType = this._getOutputPixelType("u8");
    const s2 = r2.clone();
    return s2.pixelType = this.outputPixelType, s2.colormap = o2, this.rasterInfo = s2, { success: true };
  }
  _processPixels(r2) {
    var _a;
    return (_a = r2.pixelBlocks) == null ? void 0 : _a[0];
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], i$a.prototype, "functionName", void 0), e$6([y$2({ type: i$b, json: { write: true, name: "rasterFunctionArguments" } })], i$a.prototype, "functionArguments", void 0), e$6([y$2()], i$a.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], i$a.prototype, "indexedColormap", void 0), i$a = e$6([n$a("esri.layers.support.rasterFunctions.ColormapFunction")], i$a);
const p$7 = i$a;
var a$c;
let c$f = a$c = class extends p$b {
  writeRasters(r2, s2) {
    s2.rasters = r2.map((r3) => typeof r3 == "number" || typeof r3 == "string" ? r3 : r3.toJSON());
  }
  clone() {
    return new a$c({ rasters: y$3(this.rasters) });
  }
};
e$6([y$2({ json: { write: true } })], c$f.prototype, "rasters", void 0), e$6([r$6("rasters")], c$f.prototype, "writeRasters", null), c$f = a$c = e$6([n$a("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")], c$f);
const n$7 = c$f;
let p$6 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "CompositeBand", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t2 } = this, r2 = t2[0];
    this.outputPixelType = this._getOutputPixelType(r2.pixelType);
    const e2 = r2.clone();
    if (e2.attributeTable = null, e2.colormap = null, e2.pixelType = this.outputPixelType, e2.bandCount = t2.map(({ bandCount: t3 }) => t3).reduce((t3, s2) => t3 + s2), t2.every(({ statistics: t3 }) => r$4(t3) && t3.length)) {
      const r3 = [];
      t2.forEach(({ statistics: t3 }) => r$4(t3) && r3.push(...t3)), e2.statistics = r3;
    }
    if (t2.every(({ histograms: t3 }) => r$4(t3) && t3.length)) {
      const r3 = [];
      t2.forEach(({ histograms: t3 }) => r$4(t3) && r3.push(...t3)), e2.histograms = r3;
    }
    return this.rasterInfo = e2, { success: true };
  }
  _processPixels(t2) {
    const { pixelBlocks: s2 } = t2;
    if (!s2)
      return null;
    const e2 = s2 == null ? void 0 : s2[0];
    return t$5(e2) ? null : h$4(s2);
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], p$6.prototype, "functionName", void 0), e$6([y$2({ type: n$7, json: { write: true, name: "rasterFunctionArguments" } })], p$6.prototype, "functionArguments", void 0), e$6([y$2()], p$6.prototype, "rasterArgumentNames", void 0), p$6 = e$6([n$a("esri.layers.support.rasterFunctions.CompositeBandFunction")], p$6);
const u$6 = p$6;
var t$2;
!function(e2) {
  e2[e2.UserDefined = -1] = "UserDefined", e2[e2.LineDetectionHorizontal = 0] = "LineDetectionHorizontal", e2[e2.LineDetectionVertical = 1] = "LineDetectionVertical", e2[e2.LineDetectionLeftDiagonal = 2] = "LineDetectionLeftDiagonal", e2[e2.LineDetectionRightDiagonal = 3] = "LineDetectionRightDiagonal", e2[e2.GradientNorth = 4] = "GradientNorth", e2[e2.GradientWest = 5] = "GradientWest", e2[e2.GradientEast = 6] = "GradientEast", e2[e2.GradientSouth = 7] = "GradientSouth", e2[e2.GradientNorthEast = 8] = "GradientNorthEast", e2[e2.GradientNorthWest = 9] = "GradientNorthWest", e2[e2.SmoothArithmeticMean = 10] = "SmoothArithmeticMean", e2[e2.Smoothing3x3 = 11] = "Smoothing3x3", e2[e2.Smoothing5x5 = 12] = "Smoothing5x5", e2[e2.Sharpening3x3 = 13] = "Sharpening3x3", e2[e2.Sharpening5x5 = 14] = "Sharpening5x5", e2[e2.Laplacian3x3 = 15] = "Laplacian3x3", e2[e2.Laplacian5x5 = 16] = "Laplacian5x5", e2[e2.SobelHorizontal = 17] = "SobelHorizontal", e2[e2.SobelVertical = 18] = "SobelVertical", e2[e2.Sharpen = 19] = "Sharpen", e2[e2.Sharpen2 = 20] = "Sharpen2", e2[e2.PointSpread = 21] = "PointSpread", e2[e2.None = 255] = "None";
}(t$2 || (t$2 = {}));
const n$6 = new Map();
function o$2(e2) {
  const t2 = Math.sqrt(e2.length), n2 = e2.slice(0, t2), o2 = [1];
  for (let i2 = 1; i2 < t2; i2++) {
    let n3 = null;
    for (let o3 = 0; o3 < t2; o3++) {
      const r2 = e2[o3 + i2 * t2], a2 = e2[o3];
      if (n3 == null)
        if (a2 === 0) {
          if (r2)
            return { separable: false, row: null, col: null };
        } else
          n3 = r2 / a2;
      else if (r2 / a2 !== n3)
        return { separable: false, row: null, col: null };
    }
    if (n3 == null)
      return { separable: false, row: null, col: null };
    o2.push(n3);
  }
  return { separable: true, row: n2, col: o2 };
}
function i$9(e2, t2, n2, o2, i2, r2, a2) {
  const l2 = new Float32Array(t2 * n2), s2 = r2.length, h2 = a2 ? 0 : o2, c2 = a2 ? o2 : 0, p2 = a2 ? 1 : t2;
  for (let f2 = h2; f2 < n2 - h2; f2++) {
    const n3 = f2 * t2;
    for (let a3 = c2; a3 < t2 - c2; a3++) {
      if (i2 && !i2[n3 + a3])
        continue;
      let t3 = 0;
      for (let i3 = 0; i3 < s2; i3++)
        t3 += e2[n3 + a3 + (i3 - o2) * p2] * r2[i3];
      l2[n3 + a3] = t3;
    }
  }
  return l2;
}
function r$1(e2, t2, n2, o2, i2, r2, a2) {
  const l2 = new Float32Array(t2 * n2), s2 = Math.floor(o2 / 2), h2 = Math.floor(i2 / 2);
  for (let c2 = s2; c2 < n2 - s2; c2++) {
    const n3 = c2 * t2;
    for (let c3 = h2; c3 < t2 - h2; c3++) {
      if (r2 && !r2[n3 + c3])
        continue;
      let p2 = 0;
      for (let r3 = 0; r3 < o2; r3++)
        for (let o3 = 0; o3 < i2; o3++)
          p2 += e2[n3 + c3 + (r3 - s2) * t2 + o3 - h2] * a2[r3 * i2 + o3];
      l2[n3 + c3] = p2;
    }
  }
  return l2;
}
function a$b(t2, n2, o2 = true) {
  const { pixels: i2, width: a2, height: s2, pixelType: h2, mask: c2 } = t2, p2 = i2.length, f2 = [], { kernel: u2, rows: S2, cols: g2 } = n2;
  for (let e2 = 0; e2 < p2; e2++) {
    const t3 = r$1(i2[e2], a2, s2, S2, g2, c2, u2);
    o2 && l$7(t3, a2, s2, S2, g2), f2.push(t3);
  }
  return new g$2({ width: a2, height: s2, pixelType: h2, pixels: f2, mask: c2 });
}
function l$7(e2, t2, n2, o2, i2) {
  const r2 = Math.floor(o2 / 2);
  for (let l2 = 0; l2 < r2; l2++)
    for (let o3 = 0; o3 < t2; o3++)
      e2[l2 * t2 + o3] = e2[(i2 - 1 - l2) * t2 + o3], e2[(n2 - 1 - l2) * t2 + o3] = e2[(n2 - i2 + l2) * t2 + o3];
  const a2 = Math.floor(i2 / 2);
  for (let l2 = 0; l2 < n2; l2++) {
    const n3 = l2 * t2;
    for (let o3 = 0; o3 < a2; o3++)
      e2[n3 + o3] = e2[n3 + i2 - 1 - o3], e2[n3 + t2 - o3 - 1] = e2[n3 + t2 + o3 - i2];
  }
}
function s$1(t2, n2, o2, r2 = true) {
  const { pixels: a2, width: s2, height: h2, pixelType: c2, mask: p2 } = t2, f2 = a2.length, u2 = [], S2 = n2.length, g2 = o2.length, x2 = Math.floor(S2 / 2), d2 = Math.floor(g2 / 2);
  for (let e2 = 0; e2 < f2; e2++) {
    let t3 = i$9(a2[e2], s2, h2, x2, p2, n2, true);
    t3 = i$9(t3, s2, h2, d2, p2, o2, false), r2 && l$7(t3, s2, h2, S2, g2), u2.push(t3);
  }
  return new g$2({ width: s2, height: h2, pixelType: c2, pixels: u2, mask: p2 });
}
function h$2(e2, t2) {
  const n2 = o$2(t2.kernel), i2 = t2.mirrorEdges !== false, r2 = n2.separable ? s$1(e2, n2.row, n2.col, i2) : a$b(e2, t2, i2), { outputPixelType: l2 } = t2;
  return l2 && r2.clamp(l2), r2;
}
n$6.set(t$2.None, [0, 0, 0, 0, 1, 0, 0, 0, 0]), n$6.set(t$2.LineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]), n$6.set(t$2.LineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]), n$6.set(t$2.LineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]), n$6.set(t$2.LineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]), n$6.set(t$2.GradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), n$6.set(t$2.GradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), n$6.set(t$2.GradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]), n$6.set(t$2.GradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]), n$6.set(t$2.GradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]), n$6.set(t$2.GradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]), n$6.set(t$2.SmoothArithmeticMean, [0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111]), n$6.set(t$2.Smoothing3x3, [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]), n$6.set(t$2.Smoothing5x5, [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]), n$6.set(t$2.Sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]), n$6.set(t$2.Sharpening5x5, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1]), n$6.set(t$2.Laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]), n$6.set(t$2.Laplacian5x5, [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0]), n$6.set(t$2.SobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), n$6.set(t$2.SobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), n$6.set(t$2.Sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]), n$6.set(t$2.Sharpen2, [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]), n$6.set(t$2.PointSpread, [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]);
var i$8;
let c$e = i$8 = class extends p$b {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  }
  set kernelType(e2) {
    this._set("kernelType", e2);
    const r2 = n$6.get(e2);
    if (!r2 || e2 === t$2.UserDefined || e2 === t$2.None)
      return;
    const s2 = Math.sqrt(r2.length);
    this._set("kernel", r2), this._set("cols", s2), this._set("rows", s2);
  }
  clone() {
    return new i$8({ cols: this.cols, rows: this.rows, kernel: [...this.kernel], kernelType: this.kernelType, raster: y$3(this.raster) });
  }
};
e$6([y$2({ json: { type: Number, write: true } })], c$e.prototype, "rows", void 0), e$6([y$2({ json: { type: Number, write: true } })], c$e.prototype, "cols", void 0), e$6([y$2({ json: { name: "type", type: Number, write: true } })], c$e.prototype, "kernelType", null), e$6([y$2({ json: { type: [Number], write: true } })], c$e.prototype, "kernel", void 0), c$e = i$8 = e$6([n$a("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")], c$e);
const l$6 = c$e;
let p$5 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Convolution", this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { kernelType: e2, rows: t2, cols: o2, kernel: s2 } = this.functionArguments;
    if (!n$6.has(e2))
      return { success: false, error: `convolution-function: the specified kernel type is not supported ${e2}` };
    if (e2 !== t$2.None && t2 * o2 !== s2.length)
      return { success: false, error: "convolution-function: the specified rows and cols do not match the length of the kernel" };
    const r2 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(r2.pixelType);
    const n2 = r2.clone();
    n2.pixelType = this.outputPixelType;
    const c2 = [t$2.None, t$2.Sharpen, t$2.Sharpen2, t$2.Sharpening3x3, t$2.Sharpening5x5];
    return this.outputPixelType === "u8" || c2.includes(e2) || (n2.statistics = null, n2.histograms = null), this.rasterInfo = n2, { success: true };
  }
  _processPixels(e2) {
    var _a;
    const o2 = (_a = e2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(o2) || this.functionArguments.kernelType === t$2.None)
      return o2;
    let { kernel: s2, rows: r2, cols: n2 } = this.functionArguments;
    const i2 = s2.reduce((e3, t2) => e3 + t2);
    return i2 !== 0 && i2 !== 1 && (s2 = s2.map((e3) => e3 / i2)), h$2(o2, { kernel: s2, rows: r2, cols: n2, outputPixelType: this.outputPixelType });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], p$5.prototype, "functionName", void 0), e$6([y$2({ type: l$6, json: { write: true, name: "rasterFunctionArguments" } })], p$5.prototype, "functionArguments", void 0), e$6([y$2()], p$5.prototype, "rasterArgumentNames", void 0), p$5 = e$6([n$a("esri.layers.support.rasterFunctions.ConvolutionFunction")], p$5);
const l$5 = p$5;
var i$7;
let n$5 = i$7 = class extends p$b {
  constructor() {
    super(...arguments), this.bandIDs = [], this.missingBandAction = o$6.bestMatch;
  }
  clone() {
    return new i$7({ bandIDs: [...this.bandIDs], missingBandAction: this.missingBandAction });
  }
};
e$6([y$2({ json: { write: true } })], n$5.prototype, "bandIDs", void 0), e$6([y$2({ json: { write: true } })], n$5.prototype, "missingBandAction", void 0), n$5 = i$7 = e$6([n$a("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")], n$5);
const c$d = n$5;
let c$c = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "ExtractBand", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t2 } = this, r2 = t2[0], { bandCount: e2 } = r2, { bandIDs: o2, missingBandAction: n2 } = this.functionArguments;
    if (n2 === o$6.fail && o2.some((t3) => t3 < 0 || t3 >= e2))
      return { success: false, error: "extract-band-function: invalid bandIDs" };
    this.outputPixelType = this._getOutputPixelType("f32");
    const i2 = r2.clone();
    i2.pixelType = this.outputPixelType;
    const { statistics: c2, histograms: u2 } = i2;
    return r$4(c2) && c2.length && (i2.statistics = o2.map((t3) => c2[t3] || c2[c2.length - 1])), r$4(u2) && u2.length && (i2.histograms = o2.map((t3) => u2[t3] || u2[u2.length - 1])), this.rasterInfo = i2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const s2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(s2))
      return null;
    const e2 = s2.pixels.length, o2 = this.functionArguments.bandIDs.map((t3) => t3 >= e2 ? e2 - 1 : t3);
    return s2.extractBands(o2);
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], c$c.prototype, "functionName", void 0), e$6([y$2({ type: c$d, json: { write: true, name: "rasterFunctionArguments" } })], c$c.prototype, "functionArguments", void 0), e$6([y$2()], c$c.prototype, "rasterArgumentNames", void 0), c$c = e$6([n$a("esri.layers.support.rasterFunctions.ExtractBandFunction")], c$c);
const u$5 = c$c;
var a$a;
let i$6 = a$a = class extends p$b {
  constructor() {
    super(...arguments), this.rasters = [], this.processAsMultiband = false;
  }
  writeRasters(r2, s2) {
    s2.rasters = r2.map((r3) => typeof r3 == "number" || typeof r3 == "string" ? r3 : r3.toJSON());
  }
  clone() {
    return new a$a({ method: this.operation, processAsMultiband: this.processAsMultiband, rasters: y$3(this.rasters) });
  }
};
e$6([y$2({ json: { write: true } })], i$6.prototype, "operation", void 0), e$6([y$2({ json: { write: true } })], i$6.prototype, "rasters", void 0), e$6([r$6("rasters")], i$6.prototype, "writeRasters", null), e$6([y$2({ json: { write: true } })], i$6.prototype, "processAsMultiband", void 0), i$6 = a$a = e$6([n$a("esri.layers.support.rasterFunctions.LocalFunctionArguments")], i$6);
const c$b = i$6;
var o$1;
!function(t2) {
  t2[t2.Plus = 1] = "Plus", t2[t2.Minus = 2] = "Minus", t2[t2.Times = 3] = "Times", t2[t2.SquareRoot = 4] = "SquareRoot", t2[t2.Power = 5] = "Power", t2[t2.ACos = 6] = "ACos", t2[t2.ASin = 7] = "ASin", t2[t2.ATan = 8] = "ATan", t2[t2.ATanH = 9] = "ATanH", t2[t2.Abs = 10] = "Abs", t2[t2.BitwiseAnd = 11] = "BitwiseAnd", t2[t2.BitwiseLeftShift = 12] = "BitwiseLeftShift", t2[t2.BitwiseNot = 13] = "BitwiseNot", t2[t2.BitwiseOr = 14] = "BitwiseOr", t2[t2.BitwiseRightShift = 15] = "BitwiseRightShift", t2[t2.BitwiseXOr = 16] = "BitwiseXOr", t2[t2.BooleanAnd = 17] = "BooleanAnd", t2[t2.BooleanNot = 18] = "BooleanNot", t2[t2.BooleanOr = 19] = "BooleanOr", t2[t2.BooleanXOr = 20] = "BooleanXOr", t2[t2.Cos = 21] = "Cos", t2[t2.CosH = 22] = "CosH", t2[t2.Divide = 23] = "Divide", t2[t2.EqualTo = 24] = "EqualTo", t2[t2.Exp = 25] = "Exp", t2[t2.Exp10 = 26] = "Exp10", t2[t2.Exp2 = 27] = "Exp2", t2[t2.GreaterThan = 28] = "GreaterThan", t2[t2.GreaterThanEqual = 29] = "GreaterThanEqual", t2[t2.Int = 30] = "Int", t2[t2.IsNull = 31] = "IsNull", t2[t2.Float = 32] = "Float", t2[t2.LessThan = 33] = "LessThan", t2[t2.LessThanEqual = 34] = "LessThanEqual", t2[t2.Ln = 35] = "Ln", t2[t2.Log10 = 36] = "Log10", t2[t2.Log2 = 37] = "Log2", t2[t2.Majority = 38] = "Majority", t2[t2.Max = 39] = "Max", t2[t2.Mean = 40] = "Mean", t2[t2.Med = 41] = "Med", t2[t2.Min = 42] = "Min", t2[t2.Minority = 43] = "Minority", t2[t2.Mod = 44] = "Mod", t2[t2.Negate = 45] = "Negate", t2[t2.NotEqual = 46] = "NotEqual", t2[t2.Range = 47] = "Range", t2[t2.RoundDown = 48] = "RoundDown", t2[t2.RoundUp = 49] = "RoundUp", t2[t2.SetNull = 50] = "SetNull", t2[t2.Sin = 51] = "Sin", t2[t2.SinH = 52] = "SinH", t2[t2.Square = 53] = "Square", t2[t2.Std = 54] = "Std", t2[t2.Sum = 55] = "Sum", t2[t2.Tan = 56] = "Tan", t2[t2.TanH = 57] = "TanH", t2[t2.Variety = 58] = "Variety", t2[t2.ACosH = 59] = "ACosH", t2[t2.ASinH = 60] = "ASinH", t2[t2.ATan2 = 61] = "ATan2", t2[t2.FloatDivide = 64] = "FloatDivide", t2[t2.FloorDivide = 65] = "FloorDivide", t2[t2.MajorityIgnoreNoData = 66] = "MajorityIgnoreNoData", t2[t2.MaxIgnoreNoData = 67] = "MaxIgnoreNoData", t2[t2.MeanIgnoreNoData = 68] = "MeanIgnoreNoData", t2[t2.MedIgnoreNoData = 69] = "MedIgnoreNoData", t2[t2.MinIgnoreNoData = 70] = "MinIgnoreNoData", t2[t2.MinorityIgnoreNoData = 71] = "MinorityIgnoreNoData", t2[t2.RangeIgnoreNoData = 72] = "RangeIgnoreNoData", t2[t2.StdIgnoreNoData = 73] = "StdIgnoreNoData", t2[t2.SumIgnoreNoData = 74] = "SumIgnoreNoData", t2[t2.VarietyIgnoreNoData = 75] = "VarietyIgnoreNoData", t2[t2.Con = 76] = "Con";
}(o$1 || (o$1 = {}));
function a$9(t2) {
  const n2 = t2.map((t3) => t3.mask).filter((t3) => r$4(t3));
  if (n2.length === 0)
    return null;
  const o2 = n2[0].length, r2 = new Uint8Array(o2);
  if (n2.length === 1)
    return r2.set(n2[0]), r2;
  let a2, s2 = n2[0];
  for (let e2 = 1; e2 < n2.length; e2++) {
    a2 = n2[e2];
    for (let t3 = 0; t3 < o2; t3++)
      r2[t3] = s2[t3] | a2[t3];
    s2 = a2;
  }
  return r2;
}
function s(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] + a2[n2]);
  return l2;
}
function l$4(t2, e2, o2) {
  const [r2] = t2, a2 = r2.length, s2 = g$2.createEmptyBand("f32", a2);
  return s2.set(r2), s2;
}
function i$5(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] - a2[n2]);
  return l2;
}
function c$a(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] * a2[n2]);
  return l2;
}
function u$4(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = a2[n2] === 0 ? 0 : r2[n2] / a2[n2]);
  return l2;
}
function f$1(t2, e2, n2) {
  return u$4(t2, e2, "f32");
}
function h$1(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = a2[n2] === 0 ? 0 : Math.floor(r2[n2] / a2[n2]));
  return l2;
}
function g(t2, e2, o2, r2) {
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2(a2[n2]));
  return l2;
}
function d$1(t2, e2, o2, r2) {
  const [a2, s2] = t2, l2 = a2.length, i2 = g$2.createEmptyBand(o2, l2);
  for (let n2 = 0; n2 < l2; n2++)
    e2 && !e2[n2] || (i2[n2] = r2(a2[n2], s2[n2]));
  return i2;
}
function p$4(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] & a2[n2]);
  return l2;
}
function y(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] << a2[n2]);
  return l2;
}
function B(t2, e2, o2) {
  const [r2] = t2, a2 = r2.length, s2 = g$2.createEmptyBand(o2, a2);
  for (let n2 = 0; n2 < a2; n2++)
    e2 && !e2[n2] || (s2[n2] = ~r2[n2]);
  return s2;
}
function M(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] | a2[n2]);
  return l2;
}
function m$1(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] >> a2[n2]);
  return l2;
}
function E(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] ^ a2[n2]);
  return l2;
}
function N$1(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] && a2[n2] ? 1 : 0);
  return l2;
}
function w(t2, e2, o2) {
  const [r2] = t2, a2 = r2.length, s2 = g$2.createEmptyBand(o2, a2);
  for (let n2 = 0; n2 < a2; n2++)
    e2 && !e2[n2] || (s2[n2] = r2[n2] ? 0 : 1);
  return s2;
}
function D(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] || a2[n2] ? 1 : 0);
  return l2;
}
function S(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = (r2[n2] ? 1 : 0) ^ (a2[n2] ? 1 : 0));
  return l2;
}
function A(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] === a2[n2] ? 1 : 0);
  return l2;
}
function I(t2, e2, o2, r2) {
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2 ** a2[n2]);
  return l2;
}
function T(t2, e2, n2) {
  return I(t2, e2, n2, 10);
}
function x(t2, e2, n2) {
  return I(t2, e2, n2, 2);
}
function q(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] > a2[n2] ? 1 : 0);
  return l2;
}
function H(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] >= a2[n2] ? 1 : 0);
  return l2;
}
function L(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] < a2[n2] ? 1 : 0);
  return l2;
}
function R(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] <= a2[n2] ? 1 : 0);
  return l2;
}
function C(t2, e2, o2) {
  const [r2] = t2, a2 = r2.length, s2 = g$2.createEmptyBand(o2, a2);
  if (!e2)
    return s2;
  for (let n2 = 0; n2 < a2; n2++)
    s2[n2] = e2[n2] ? 0 : 1;
  return s2;
}
function F(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] % a2[n2]);
  return l2;
}
function O(t2, e2, o2) {
  const [r2] = t2, a2 = r2.length, s2 = g$2.createEmptyBand(o2, a2);
  for (let n2 = 0; n2 < a2; n2++)
    e2 && !e2[n2] || (s2[n2] = -r2[n2]);
  return s2;
}
function b(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 && !e2[n2] || (l2[n2] = r2[n2] === a2[n2] ? 0 : 1);
  return l2;
}
function k(t2, e2, o2) {
  const [r2, a2] = t2, s2 = r2.length, l2 = g$2.createEmptyBand(o2, s2), i2 = new Uint8Array(s2);
  for (let n2 = 0; n2 < s2; n2++)
    e2 != null && !e2[n2] || r2[n2] !== 0 || (l2[n2] = a2[n2], i2[n2] = 255);
  return { band: l2, mask: i2 };
}
function v(t2, e2, o2) {
  const [r2, a2, s2] = t2, l2 = r2.length, i2 = g$2.createEmptyBand(o2, l2);
  for (let n2 = 0; n2 < l2; n2++)
    e2 && !e2[n2] || (i2[n2] = r2[n2] ? a2[n2] : s2[n2]);
  return i2;
}
function j(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  l2.set(a2);
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2])
      for (let e3 = 1; e3 < r2; e3++) {
        const o3 = t2[e3];
        l2[n2] < o3[n2] && (l2[n2] = o3[n2]);
      }
  return l2;
}
function P(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  l2.set(a2);
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2])
      for (let e3 = 1; e3 < r2; e3++) {
        const o3 = t2[e3];
        l2[n2] > o3[n2] && (l2[n2] = o3[n2]);
      }
  return l2;
}
function G(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  l2.set(a2);
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2]) {
      let e3 = l2[n2];
      for (let o3 = 1; o3 < r2; o3++) {
        const r3 = t2[o3];
        l2[n2] < r3[n2] && (l2[n2] = r3[n2]), e3 > r3[n2] && (e3 = r3[n2]);
      }
      l2[n2] -= e3;
    }
  return l2;
}
function U(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  l2.set(a2);
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2]) {
      for (let e3 = 1; e3 < r2; e3++) {
        const o3 = t2[e3];
        l2[n2] += o3[n2];
      }
      l2[n2] /= r2;
    }
  return l2;
}
function V(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  l2.set(a2);
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2])
      for (let e3 = 1; e3 < r2; e3++) {
        const o3 = t2[e3];
        l2[n2] += o3[n2];
      }
  return l2;
}
function X(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2);
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2]) {
      const e3 = new Float32Array(r2);
      let o3 = 0;
      for (let s3 = 0; s3 < r2; s3++) {
        const r3 = t2[s3];
        o3 += r3[n2], e3[s3] = r3[n2];
      }
      o3 /= r2;
      let a3 = 0;
      for (let t3 = 0; t3 < r2; t3++)
        a3 += (e3[t3] - o3) * e3[t3] - o3;
      l2[n2] = Math.sqrt(a3 / r2 - 1);
    }
  return l2;
}
function z(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const a2 = Math.floor(r2 / 2), [s2] = t2, l2 = s2.length, i2 = g$2.createEmptyBand(o2, l2), c2 = new Float32Array(r2);
  for (let n2 = 0; n2 < l2; n2++)
    if (!e2 || e2[n2]) {
      for (let e3 = 0; e3 < r2; e3++)
        c2[e3] = t2[e3][n2];
      c2.sort(), i2[n2] = c2[a2];
    }
  return i2;
}
function J(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2), i2 = new Map();
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2]) {
      let e3;
      i2.clear();
      for (let s3 = 0; s3 < r2; s3++)
        e3 = t2[s3][n2], i2.set(e3, i2.has(e3) ? i2.get(e3) + 1 : 1);
      let o3 = 0, a3 = 0;
      for (const t3 of i2.keys())
        o3 = i2.get(t3), o3 > a3 && (a3 = o3, e3 = t3);
      l2[n2] = e3;
    }
  return l2;
}
function K(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2), i2 = new Map();
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2]) {
      let e3;
      i2.clear();
      for (let s3 = 0; s3 < r2; s3++)
        e3 = t2[s3][n2], i2.set(e3, i2.has(e3) ? i2.get(e3) + 1 : 1);
      let o3 = 0, a3 = t2.length;
      for (const t3 of i2.keys())
        o3 = i2.get(t3), o3 < a3 && (a3 = o3, e3 = t3);
      l2[n2] = e3;
    }
  return l2;
}
function Q(t2, e2, o2) {
  const r2 = t2.length;
  if (r2 < 2)
    return t2[0];
  const [a2] = t2, s2 = a2.length, l2 = g$2.createEmptyBand(o2, s2), i2 = new Set();
  for (let n2 = 0; n2 < s2; n2++)
    if (!e2 || e2[n2]) {
      let e3;
      i2.clear();
      for (let o3 = 0; o3 < r2; o3++)
        e3 = t2[o3][n2], i2.add(e3);
      l2[n2] = i2.size;
    }
  return l2;
}
function W(t2, e2, n2) {
  return J(t2, null, n2);
}
function Y(t2, e2, n2) {
  return K(t2, null, n2);
}
function Z(t2, e2, n2) {
  return Q(t2, null, n2);
}
function $(t2, e2, n2) {
  return j(t2, null, n2);
}
function _(t2, e2, n2) {
  return P(t2, null, n2);
}
function tt(t2, e2, n2) {
  return X(t2, null, n2);
}
function et(t2, e2, n2) {
  return V(t2, null, n2);
}
function nt(t2, e2, n2) {
  return U(t2, null, n2);
}
function ot(t2, e2, n2) {
  return z(t2, null, n2);
}
function rt(t2, e2, n2) {
  return G(t2, null, n2);
}
const at = new Map(), st = new Map(), lt = new Map();
function it() {
  at.size || (at.set(4, Math.sqrt), at.set(6, Math.acos), at.set(7, Math.asin), at.set(8, Math.atan), at.set(9, Math.atanh), at.set(10, Math.abs), at.set(21, Math.cos), at.set(22, Math.cosh), at.set(25, Math.exp), at.set(30, Math.floor), at.set(35, Math.log), at.set(36, Math.log10), at.set(37, Math.log2), at.set(48, Math.floor), at.set(49, Math.ceil), at.set(51, Math.sin), at.set(52, Math.sinh), at.set(56, Math.tan), at.set(57, Math.tanh), at.set(59, Math.acosh), at.set(60, Math.asinh), at.set(65, Math.floor), st.set(5, Math.pow), st.set(61, Math.atan2), lt.set(1, s), lt.set(2, i$5), lt.set(3, c$a), lt.set(11, p$4), lt.set(12, y), lt.set(12, y), lt.set(13, B), lt.set(14, M), lt.set(15, m$1), lt.set(16, E), lt.set(17, N$1), lt.set(18, w), lt.set(19, D), lt.set(20, S), lt.set(23, u$4), lt.set(24, A), lt.set(26, T), lt.set(27, x), lt.set(28, q), lt.set(29, H), lt.set(31, C), lt.set(32, l$4), lt.set(33, L), lt.set(34, R), lt.set(44, F), lt.set(45, O), lt.set(46, b), lt.set(64, f$1), lt.set(65, h$1), lt.set(76, v), lt.set(38, J), lt.set(39, j), lt.set(40, U), lt.set(41, z), lt.set(42, P), lt.set(43, K), lt.set(47, G), lt.set(54, X), lt.set(55, V), lt.set(58, Q), lt.set(66, W), lt.set(67, $), lt.set(68, nt), lt.set(69, ot), lt.set(70, _), lt.set(71, Y), lt.set(72, rt), lt.set(73, tt), lt.set(74, et), lt.set(75, Z));
}
function ct(e2, r2, s2 = {}) {
  it();
  const l2 = e$7(a$9(e2)), { processAsMultiband: i2, outputPixelType: c2 = "f32" } = s2, u2 = i2 ? e2[0].pixels.length : 1, f2 = [];
  let h2;
  for (let t2 = 0; t2 < u2; t2++) {
    const n2 = e2.map((e3) => e3.pixels[t2]);
    let a2;
    if (r2 === o$1.SetNull) {
      const t3 = k(n2, l2, c2);
      a2 = t3.band, h2 = t3.mask;
    } else if (lt.has(r2)) {
      a2 = lt.get(r2)(n2, l2, c2);
    } else
      at.has(r2) ? a2 = g(n2, l2, c2, at.get(r2)) : st.has(r2) && (a2 = d$1(n2, l2, c2, st.get(r2)));
    if (a2 == null)
      return null;
    f2.push(a2);
  }
  h2 || r2 === o$1.IsNull || (h2 = l2);
  const p2 = e2[0];
  return new g$2({ width: p2.width, height: p2.height, pixelType: c2, mask: h2, pixels: f2 });
}
let u$3 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Local", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t2 } = this, s2 = t2[0], { bandCount: o2 } = s2, { processAsMultiband: r2 } = this.functionArguments;
    if (r2 && t2.some((t3) => t3.bandCount !== o2))
      return { success: false, error: "local-function: input rasters do not have same band count" };
    this.outputPixelType = this._getOutputPixelType("f32");
    const e2 = s2.clone();
    return e2.pixelType = this.outputPixelType, e2.statistics = null, e2.histograms = null, r2 || (e2.bandCount = 1), this.rasterInfo = e2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const { pixelBlocks: o2 } = t2;
    return t$5(o2) || o2.some((t3) => t$5(t3)) ? null : ct(o2, this.functionArguments.operation, { processAsMultiband: this.functionArguments.processAsMultiband, outputPixelType: (_a = this.outputPixelType) != null ? _a : void 0 });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], u$3.prototype, "functionName", void 0), e$6([y$2({ type: c$b, json: { write: true, name: "rasterFunctionArguments" } })], u$3.prototype, "functionArguments", void 0), e$6([y$2()], u$3.prototype, "rasterArgumentNames", void 0), u$3 = e$6([n$a("esri.layers.support.rasterFunctions.LocalFunction")], u$3);
const c$9 = u$3;
var a$8;
let n$4 = a$8 = class extends p$b {
  constructor() {
    super(...arguments), this.includedRanges = null, this.noDataValues = null, this.noDataInterpretation = i$e.matchAny;
  }
  clone() {
    var _a, _b, _c, _d;
    return new a$8({ includedRanges: (_b = (_a = this.includedRanges) == null ? void 0 : _a.slice()) != null ? _b : [], noDataValues: (_d = (_c = this.noDataValues) == null ? void 0 : _c.slice()) != null ? _d : [], noDataInterpretation: this.noDataInterpretation });
  }
};
e$6([y$2({ json: { write: true } })], n$4.prototype, "includedRanges", void 0), e$6([y$2({ json: { write: true } })], n$4.prototype, "noDataValues", void 0), e$6([y$2({ json: { write: true } })], n$4.prototype, "noDataInterpretation", void 0), n$4 = a$8 = e$6([n$a("esri.layers.support.rasterFunctions.MaskFunctionArguments")], n$4);
const i$4 = n$4;
let p$3 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Mask", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t2 = this.sourceRasterInfos[0].clone(), { pixelType: s2 } = t2;
    this.outputPixelType = this._getOutputPixelType(s2), t2.pixelType = this.outputPixelType, this.rasterInfo = t2;
    const { includedRanges: e2, noDataValues: o2 } = this.functionArguments;
    return (e2 == null ? void 0 : e2.length) || (o2 == null ? void 0 : o2.length) ? (this.lookup = k$2(s2, this.functionArguments.includedRanges, this.functionArguments.noDataValues), { success: true }) : { success: false, error: "missing includedRanges or noDataValues argument" };
  }
  _processPixels(t2) {
    var _a;
    const e2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(e2))
      return null;
    const { outputPixelType: o2, lookup: r2 } = this, { includedRanges: n2, noDataValues: u2, noDataInterpretation: p2 } = this.functionArguments, c2 = p2 === i$e.matchAll;
    return y$4(e2, { includedRanges: n2, noDataValues: u2, outputPixelType: o2, matchAll: c2, lookup: r2 });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], p$3.prototype, "functionName", void 0), e$6([y$2({ type: i$4, json: { write: true, name: "rasterFunctionArguments" } })], p$3.prototype, "functionArguments", void 0), e$6([y$2()], p$3.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], p$3.prototype, "lookup", void 0), p$3 = e$6([n$a("esri.layers.support.rasterFunctions.MaskFunction")], p$3);
const c$8 = p$3;
var t$1;
let i$3 = t$1 = class extends p$b {
  constructor() {
    super(...arguments), this.visibleBandID = 0, this.infraredBandID = 1, this.scaled = true;
  }
  clone() {
    const { visibleBandID: r2, infraredBandID: s2, scaled: e2 } = this;
    return new t$1({ visibleBandID: r2, infraredBandID: s2, scaled: e2 });
  }
};
e$6([y$2({ json: { write: true } })], i$3.prototype, "visibleBandID", void 0), e$6([y$2({ json: { write: true } })], i$3.prototype, "infraredBandID", void 0), e$6([y$2({ json: { write: true } })], i$3.prototype, "scaled", void 0), i$3 = t$1 = e$6([n$a("esri.layers.support.rasterFunctions.NDVIFunctionArguments")], i$3);
const a$7 = i$3;
let c$7 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "NDVI", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { scaled: t2 } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t2 ? "u8" : "f32");
    const s2 = this.sourceRasterInfos[0].clone();
    s2.pixelType = this.outputPixelType, s2.colormap = null, s2.histograms = null;
    const [r2, e2, o2, n2] = t2 ? [0, 200, 100, 10] : [-1, 1, 0, 0.1];
    return s2.statistics = [{ min: r2, max: e2, avg: o2, stddev: n2 }], this.rasterInfo = s2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const r2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(r2))
      return null;
    const { visibleBandID: e2, infraredBandID: n2, scaled: i2 } = this.functionArguments;
    return i$d(r2, e2, n2, i2);
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], c$7.prototype, "functionName", void 0), e$6([y$2({ type: a$7, json: { write: true, name: "rasterFunctionArguments" } })], c$7.prototype, "functionArguments", void 0), e$6([y$2()], c$7.prototype, "rasterArgumentNames", void 0), c$7 = e$6([n$a("esri.layers.support.rasterFunctions.NDVIFunction")], c$7);
const u$2 = c$7;
var r;
let a$6 = r = class extends p$b {
  constructor() {
    super(...arguments), this.inputRanges = null, this.outputValues = null, this.noDataRanges = null, this.allowUnmatched = false;
  }
  clone() {
    return new r({ inputRanges: [...this.inputRanges], outputValues: [...this.outputValues], noDataRanges: [...this.noDataRanges], allowUnmatched: this.allowUnmatched });
  }
};
e$6([y$2({ json: { write: true } })], a$6.prototype, "inputRanges", void 0), e$6([y$2({ json: { write: true } })], a$6.prototype, "outputValues", void 0), e$6([y$2({ json: { write: true } })], a$6.prototype, "noDataRanges", void 0), e$6([y$2({ json: { write: true } })], a$6.prototype, "allowUnmatched", void 0), a$6 = r = e$6([n$a("esri.layers.support.rasterFunctions.RemapFunctionArguments")], a$6);
const n$3 = a$6;
let l$3 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Remap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t2 = this.sourceRasterInfos[0].clone(), { pixelType: o2 } = t2;
    this.outputPixelType = this._getOutputPixelType(o2), t2.pixelType = this.outputPixelType, t2.colormap = null, t2.histograms = null;
    const { statistics: s2 } = t2, { allowUnmatched: r2, outputValues: n2 } = this.functionArguments;
    if (r$4(s2) && s2.length && !r2) {
      let t3 = n2[0], e2 = t3;
      for (let o3 = 0; o3 < n2.length; o3++)
        t3 = t3 > n2[o3] ? n2[o3] : t3, e2 = e2 > n2[o3] ? e2 : n2[o3];
      for (let o3 = 0; o3 < s2.length; o3++)
        s2[o3] = __spreadProps(__spreadValues({}, s2[o3]), { min: t3, max: e2 });
    }
    return this.rasterInfo = t2, this.lookup = r2 ? null : w$2(o2, this.functionArguments.inputRanges, n2), { success: true };
  }
  _processPixels(t2) {
    var _a;
    const e2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(e2))
      return null;
    const { lookup: s2, outputPixelType: r2 } = this;
    if (s2)
      return c$l(e2, { lut: [s2.lut], offset: s2.offset, outputPixelType: r2 });
    const { inputRanges: n2, outputValues: u2, noDataRanges: a2, allowUnmatched: l2 } = this.functionArguments;
    return x$1(e2, { inputRanges: n2, outputValues: u2, noDataRanges: a2, allowUnmatched: l2, outputPixelType: r2 });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], l$3.prototype, "functionName", void 0), e$6([y$2({ type: n$3, json: { write: true, name: "rasterFunctionArguments" } })], l$3.prototype, "functionArguments", void 0), e$6([y$2()], l$3.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], l$3.prototype, "lookup", void 0), l$3 = e$6([n$a("esri.layers.support.rasterFunctions.RemapFunction")], l$3);
const c$6 = l$3;
var i$2;
const c$5 = new s$4({ 0: "degree", 1: "percent-rise", 2: "adjusted" }, { useNumericKeys: true });
let a$5 = i$2 = class extends p$b {
  constructor() {
    super(...arguments), this.slopeType = "degree", this.zFactor = 1, this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024;
  }
  clone() {
    return new i$2({ slopeType: this.slopeType, zFactor: this.zFactor, pixelSizePower: this.pixelSizePower, pixelSizeFactor: this.pixelSizeFactor, raster: this.raster });
  }
};
e$6([r$5(c$5)], a$5.prototype, "slopeType", void 0), e$6([y$2({ type: Number, json: { write: true } })], a$5.prototype, "zFactor", void 0), e$6([y$2({ type: Number, json: { name: "psPower", write: true } })], a$5.prototype, "pixelSizePower", void 0), e$6([y$2({ type: Number, json: { name: "psFactor", write: true } })], a$5.prototype, "pixelSizeFactor", void 0), a$5 = i$2 = e$6([n$a("esri.layers.support.rasterFunctions.SlopeFunctionArguments")], a$5);
const n$2 = a$5;
let p$2 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Slope", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t2 = this.sourceRasterInfos[0].clone();
    return t2.pixelType = this.outputPixelType, t2.statistics = null, t2.histograms = null, this.rasterInfo = t2, this.isGCS = t2.spatialReference.isGeographic, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const s2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(s2))
      return null;
    const { zFactor: r2, slopeType: o2, pixelSizePower: i2, pixelSizeFactor: p2 } = this.functionArguments, { isGCS: c2 } = this, { extent: u2 } = t2, a2 = u2 ? { x: u2.width / s2.width, y: u2.height / s2.height } : { x: 1, y: 1 };
    return a$h(s2, { zFactor: r2, slopeType: o2, pixelSizePower: i2, pixelSizeFactor: p2, isGCS: c2, resolution: a2 });
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], p$2.prototype, "functionName", void 0), e$6([y$2({ type: n$2, json: { write: true, name: "rasterFunctionArguments" } })], p$2.prototype, "functionArguments", void 0), e$6([y$2()], p$2.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], p$2.prototype, "isGCS", void 0), p$2 = e$6([n$a("esri.layers.support.rasterFunctions.SlopeFunction")], p$2);
const c$4 = p$2;
var e$2;
let c$3 = e$2 = class extends p$b {
  constructor() {
    super(...arguments), this.statistics = null, this.histograms = null;
  }
  clone() {
    return new e$2({ statistics: y$3(this.statistics), histograms: y$3(this.histograms) });
  }
};
e$6([y$2({ json: { write: true } })], c$3.prototype, "statistics", void 0), e$6([y$2({ json: { write: true } })], c$3.prototype, "histograms", void 0), c$3 = e$2 = e$6([n$a("esri.layers.support.rasterFunctions.StatisticsHistogramsFunctionArguments")], c$3);
const a$4 = c$3;
let i$1 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "StatisticsHistograms", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const t2 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const s2 = t2.clone(), { statistics: r2, histograms: o2 } = this.functionArguments;
    return s2.histograms = o2, r2 && (s2.statistics = r2.map(([t3, s3, r3, o3]) => ({ min: t3, max: s3, avg: r3, stddev: o3 }))), this.rasterInfo = s2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    return (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], i$1.prototype, "functionName", void 0), e$6([y$2({ type: a$4, json: { write: true, name: "rasterFunctionArguments" } })], i$1.prototype, "functionArguments", void 0), e$6([y$2()], i$1.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], i$1.prototype, "indexedColormap", void 0), i$1 = e$6([n$a("esri.layers.support.rasterFunctions.StatisticsHistogramsFunction")], i$1);
const n$1 = i$1;
var n;
const p$1 = new s$4({ 0: "none", 3: "standard-deviation", 4: "histogram-equalization", 5: "min-max", 6: "percent-clip", 7: "sigmoid" }, { useNumericKeys: true });
let c$2 = n = class extends p$b {
  constructor() {
    super(...arguments), this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.histograms = null, this.statistics = null, this.stretchType = "none", this.useGamma = false;
  }
  writeStatistics(t2, e2, o2) {
    (t2 == null ? void 0 : t2.length) && (Array.isArray(t2[0]) || (t2 = t2.map((t3) => [t3.min, t3.max, t3.avg, t3.stddev])), e2[o2] = t2);
  }
  clone() {
    return new n({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: y$3(this.statistics), gamma: y$3(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, histograms: y$3(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment, raster: this.raster });
  }
};
e$6([y$2({ type: Boolean, json: { write: true } })], c$2.prototype, "computeGamma", void 0), e$6([y$2({ type: Boolean, json: { name: "dra", write: true } })], c$2.prototype, "dynamicRangeAdjustment", void 0), e$6([y$2({ type: [Number], json: { write: true } })], c$2.prototype, "gamma", void 0), e$6([y$2()], c$2.prototype, "histograms", void 0), e$6([y$2({ type: Number, json: { write: true } })], c$2.prototype, "maxPercent", void 0), e$6([y$2({ type: Number, json: { write: true } })], c$2.prototype, "minPercent", void 0), e$6([y$2({ type: Number, json: { write: true } })], c$2.prototype, "numberOfStandardDeviations", void 0), e$6([y$2({ type: Number, json: { name: "max", write: true } })], c$2.prototype, "outputMax", void 0), e$6([y$2({ type: Number, json: { name: "min", write: true } })], c$2.prototype, "outputMin", void 0), e$6([y$2({ type: Number, json: { write: true } })], c$2.prototype, "sigmoidStrengthLevel", void 0), e$6([y$2({ json: { type: [[Number]], write: true } })], c$2.prototype, "statistics", void 0), e$6([r$6("statistics")], c$2.prototype, "writeStatistics", null), e$6([r$5(p$1)], c$2.prototype, "stretchType", void 0), e$6([y$2({ type: Boolean, json: { write: true } })], c$2.prototype, "useGamma", void 0), c$2 = n = e$6([n$a("esri.layers.support.rasterFunctions.StretchFunctionArguments")], c$2);
const u$1 = c$2;
let a$3 = class extends a$g {
  constructor() {
    super(...arguments), this.functionName = "Stretch", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null, this.cutOffs = null;
  }
  _bindSourceRasters() {
    this.lookup = null, this.cutOffs = null;
    const t2 = this.sourceRasterInfos[0], { pixelType: s2 } = t2, { functionArguments: e2 } = this, { dynamicRangeAdjustment: o2, gamma: r2, useGamma: i2 } = e2;
    if (!o2 && ["u8", "u16", "s8", "s16"].includes(s2)) {
      const o3 = x$2(e2.toJSON(), { rasterInfo: t2 });
      this.lookup = u$9(__spreadProps(__spreadValues({ pixelType: s2 }, o3), { gamma: i2 ? r2 : null }));
    } else
      o2 && (this.cutOffs = x$2(e2.toJSON(), { rasterInfo: t2 }));
    this.outputPixelType = this._getOutputPixelType(s2);
    const u2 = t2.clone();
    return u2.pixelType = this.outputPixelType, u2.statistics = null, u2.histograms = null, this.outputPixelType === "u8" && (u2.keyProperties.DataType = "processed"), this.rasterInfo = u2, { success: true };
  }
  _processPixels(t2) {
    var _a;
    const e2 = (_a = t2.pixelBlocks) == null ? void 0 : _a[0];
    if (t$5(e2))
      return e2;
    const { lookup: o2 } = this;
    if (o2)
      return c$l(e2, __spreadProps(__spreadValues({}, o2), { outputPixelType: this.rasterInfo.pixelType }));
    const { functionArguments: r2 } = this, u2 = this.cutOffs || x$2(r2.toJSON(), { rasterInfo: this.sourceRasterInfos[0], pixelBlock: e2 }), p2 = r2.useGamma ? r2.gamma : null;
    return d$3(e2, __spreadProps(__spreadValues({}, u2), { gamma: p2, outputPixelType: this.outputPixelType }));
  }
};
e$6([y$2({ json: { write: true, name: "rasterFunction" } })], a$3.prototype, "functionName", void 0), e$6([y$2({ type: u$1, json: { write: true, name: "rasterFunctionArguments" } })], a$3.prototype, "functionArguments", void 0), e$6([y$2()], a$3.prototype, "rasterArgumentNames", void 0), e$6([y$2({ json: { write: true } })], a$3.prototype, "lookup", void 0), e$6([y$2({ json: { write: true } })], a$3.prototype, "cutOffs", void 0), a$3 = e$6([n$a("esri.layers.support.rasterFunctions.StretchFunction")], a$3);
const l$2 = a$3;
const d = new Map();
function l$1(r2, e2) {
  if ("rasterFunction" in r2)
    return h(r2, e2 != null ? e2 : {});
  throw new s$5("raster-function-helper", "unsupported raster function json.");
}
function N(t2, r2) {
  return r2[0] === "rasters" && Array.isArray(t2.rasters) ? t2.rasters : r2.map((r3) => t2[r3]);
}
function h(r2, e2) {
  var _a, _b;
  const { rasterFunction: s2, rasterFunctionArguments: n2 } = r2, o2 = (_a = r2.outputPixelType) == null ? void 0 : _a.toLowerCase();
  if (s2 == null || !d.has(s2))
    throw new s$5("raster-function-helper", `unsupported raster function: ${s2}`);
  const a2 = d.get(s2), c2 = (typeof a2.ctor == "function" ? a2.ctor : a2.ctor.default).fromJSON(__spreadProps(__spreadValues({}, r2), { outputPixelType: o2 })), { rasterArgumentNames: i2 } = c2, u2 = [], m2 = N(n2, i2), p2 = i2[0] === "rasters", f2 = [];
  for (let t2 = 0; t2 < m2.length; t2++) {
    const r3 = m2[t2];
    let s3;
    r3 == null || typeof r3 == "string" && r3.startsWith("$") ? u2.push(e2 == null ? void 0 : e2.raster) : typeof r3 == "string" ? e2[r3] && u2.push(e2[r3]) : typeof r3 != "number" && "rasterFunction" in r3 && (s3 = h(r3, e2), p2 || (c2.functionArguments[i2[t2]] = s3), u2.push(s3)), p2 && f2.push(s3 != null ? s3 : r3);
  }
  if (p2 && (c2.functionArguments.rasters = f2), e2) {
    c2.sourceRasters = u2;
    const t2 = (_b = e2.raster) == null ? void 0 : _b.url;
    t2 && (c2.mainPrimaryRasterId = t2);
  }
  return c2;
}
d.set("Aspect", { desc: "Aspect Function", ctor: p$a, rasterArgumentNames: ["raster"] }), d.set("BandArithmetic", { desc: "Band Arithmetic Function", ctor: a$d, rasterArgumentNames: ["raster"] }), d.set("Colormap", { desc: "Colormap Function", ctor: p$7, rasterArgumentNames: ["raster"] }), d.set("CompositeBand", { desc: "CompositeBand Function", ctor: u$6, rasterArgumentNames: ["rasters"] }), d.set("Convolution", { desc: "Convolution Function", ctor: l$5, rasterArgumentNames: ["raster"] }), d.set("ExtractBand", { desc: "ExtractBand Function", ctor: u$5, rasterArgumentNames: ["raster"] }), d.set("Local", { desc: "Local Function", ctor: c$9, rasterArgumentNames: ["rasters"] }), d.set("Mask", { desc: "Mask Function", ctor: c$8, rasterArgumentNames: ["raster"] }), d.set("NDVI", { desc: "NDVI Function", ctor: u$2, rasterArgumentNames: ["raster"] }), d.set("Remap", { desc: "Remap Function", ctor: c$6, rasterArgumentNames: ["raster"] }), d.set("Slope", { desc: "Slope Function", ctor: c$4, rasterArgumentNames: ["raster"] }), d.set("StatisticsHistograms", { desc: "Statistics Histograms Function", ctor: n$1, rasterArgumentNames: ["raster"] }), d.set("Stretch", { desc: "Stretch Function", ctor: l$2, rasterArgumentNames: ["raster"] });
let t = class extends l$b {
  get affectsPixelSize() {
    return false;
  }
  forwardTransform(r2) {
    return r2;
  }
  inverseTransform(r2) {
    return r2;
  }
};
e$6([y$2()], t.prototype, "affectsPixelSize", null), e$6([y$2({ json: { write: true } })], t.prototype, "spatialReference", void 0), t = e$6([n$a("esri.layers.support.rasterTransforms.BaseRasterTransform")], t);
const a$2 = t;
let a$1 = class extends a$2 {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(r2) {
    return (r2 = r2.clone()).type === "point" ? (r2.x > 180 + this.tolerance && (r2.x -= 360), r2) : (r2.xmin >= 180 - this.tolerance ? (r2.xmax -= 360, r2.xmin -= 360) : r2.xmax > 180 + this.tolerance && (r2.xmin = -180, r2.xmax = 180), r2);
  }
  inverseTransform(r2) {
    return (r2 = r2.clone()).type === "point" ? (r2.x < -this.tolerance && (r2.x += 360), r2) : (r2.xmin < -this.tolerance && (r2.xmin += 360, r2.xmax += 360), r2);
  }
};
e$6([r$5({ GCSShiftXform: "gcs-shift" })], a$1.prototype, "type", void 0), e$6([y$2()], a$1.prototype, "tolerance", void 0), a$1 = e$6([n$a("esri.layers.support.rasterTransforms.GCSShiftTransform")], a$1);
const c$1 = a$1;
let e$1 = class extends a$2 {
  constructor() {
    super(...arguments), this.type = "identity";
  }
};
e$6([r$5({ IdentityXform: "identity" })], e$1.prototype, "type", void 0), e$1 = e$6([n$a("esri.layers.support.rasterTransforms.IdentityTransform")], e$1);
const p = e$1;
function l(e2, r2, o2) {
  const { x: t2, y: s2 } = r2;
  if (o2 < 2) {
    return { x: e2[0] + t2 * e2[2] + s2 * e2[4], y: e2[1] + t2 * e2[3] + s2 * e2[5] };
  }
  if (o2 === 2) {
    const r3 = t2 * t2, o3 = s2 * s2, n3 = t2 * s2;
    return { x: e2[0] + t2 * e2[2] + s2 * e2[4] + r3 * e2[6] + n3 * e2[8] + o3 * e2[10], y: e2[1] + t2 * e2[3] + s2 * e2[5] + r3 * e2[7] + n3 * e2[9] + o3 * e2[11] };
  }
  const n2 = t2 * t2, i2 = s2 * s2, f2 = t2 * s2, p2 = n2 * t2, l2 = n2 * s2, a2 = t2 * i2, c2 = s2 * i2;
  return { x: e2[0] + t2 * e2[2] + s2 * e2[4] + n2 * e2[6] + f2 * e2[8] + i2 * e2[10] + p2 * e2[12] + l2 * e2[14] + a2 * e2[16] + c2 * e2[18], y: e2[1] + t2 * e2[3] + s2 * e2[5] + n2 * e2[7] + f2 * e2[9] + i2 * e2[11] + p2 * e2[13] + l2 * e2[15] + a2 * e2[17] + c2 * e2[19] };
}
function a(e2, r2, o2) {
  const { xmin: t2, ymin: s2, xmax: n2, ymax: i2, spatialReference: f2 } = r2;
  let a2 = [];
  if (o2 < 2)
    a2.push({ x: t2, y: i2 }), a2.push({ x: n2, y: i2 }), a2.push({ x: t2, y: s2 }), a2.push({ x: n2, y: s2 });
  else {
    let e3 = 10;
    for (let r3 = 0; r3 < e3; r3++)
      a2.push({ x: t2, y: s2 + (i2 - s2) * r3 / (e3 - 1) }), a2.push({ x: n2, y: s2 + (i2 - s2) * r3 / (e3 - 1) });
    e3 = 8;
    for (let r3 = 1; r3 <= e3; r3++)
      a2.push({ x: t2 + (n2 - t2) * r3 / e3, y: s2 }), a2.push({ x: t2 + (n2 - t2) * r3 / e3, y: i2 });
  }
  a2 = a2.map((r3) => l(e2, r3, o2));
  const c2 = a2.map((e3) => e3.x), u2 = a2.map((e3) => e3.y);
  return new w$4({ xmin: Math.min.apply(null, c2), xmax: Math.max.apply(null, c2), ymin: Math.min.apply(null, u2), ymax: Math.max.apply(null, u2), spatialReference: f2 });
}
function c(e2) {
  const [r2, o2, t2, s2, n2, i2] = e2, f2 = t2 * i2 - n2 * s2, p2 = n2 * s2 - t2 * i2;
  return [(n2 * o2 - r2 * i2) / f2, (t2 * o2 - r2 * s2) / p2, i2 / f2, s2 / p2, -n2 / f2, -t2 / p2];
}
let u = class extends a$2 {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(e2, r2) {
    const { coeffX: o2, coeffY: t2 } = r2;
    if (!(o2 == null ? void 0 : o2.length) || !(t2 == null ? void 0 : t2.length) || o2.length !== t2.length)
      return null;
    const s2 = [];
    for (let n2 = 0; n2 < o2.length; n2++)
      s2.push(o2[n2]), s2.push(t2[n2]);
    return s2;
  }
  writeForwardCoefficients(e2, r2, o2) {
    const t2 = [], s2 = [];
    for (let n2 = 0; n2 < (e2 == null ? void 0 : e2.length); n2++)
      n2 % 2 == 0 ? t2.push(e2[n2]) : s2.push(e2[n2]);
    r2.coeffX = t2, r2.coeffY = s2;
  }
  get inverseCoefficients() {
    let e2 = this._get("inverseCoefficients");
    const r2 = this._get("forwardCoefficients");
    return !e2 && r2 && this.polynomialOrder < 2 && (e2 = c(r2)), e2;
  }
  set inverseCoefficients(e2) {
    this._set("inverseCoefficients", e2);
  }
  readInverseCoefficients(e2, r2) {
    const { inverseCoeffX: o2, inverseCoeffY: t2 } = r2;
    if (!(o2 == null ? void 0 : o2.length) || !(t2 == null ? void 0 : t2.length) || o2.length !== t2.length)
      return null;
    const s2 = [];
    for (let n2 = 0; n2 < o2.length; n2++)
      s2.push(o2[n2]), s2.push(t2[n2]);
    return s2;
  }
  writeInverseCoefficients(e2, r2, o2) {
    const t2 = [], s2 = [];
    for (let n2 = 0; n2 < (e2 == null ? void 0 : e2.length); n2++)
      n2 % 2 == 0 ? t2.push(e2[n2]) : s2.push(e2[n2]);
    r2.inverseCoeffX = t2, r2.inverseCoeffY = s2;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(e2) {
    if (e2.type === "point") {
      const r2 = l(this.forwardCoefficients, e2, this.polynomialOrder);
      return new w$3({ x: r2.x, y: r2.y, spatialReference: e2.spatialReference });
    }
    return a(this.forwardCoefficients, e2, this.polynomialOrder);
  }
  inverseTransform(e2) {
    if (e2.type === "point") {
      const r2 = l(this.inverseCoefficients, e2, this.polynomialOrder);
      return new w$3({ x: r2.x, y: r2.y, spatialReference: e2.spatialReference });
    }
    return a(this.inverseCoefficients, e2, this.polynomialOrder);
  }
};
e$6([y$2({ json: { write: true } })], u.prototype, "polynomialOrder", void 0), e$6([y$2()], u.prototype, "forwardCoefficients", void 0), e$6([o$5("forwardCoefficients", ["coeffX", "coeffY"])], u.prototype, "readForwardCoefficients", null), e$6([r$6("forwardCoefficients")], u.prototype, "writeForwardCoefficients", null), e$6([y$2({ json: { write: true } })], u.prototype, "inverseCoefficients", null), e$6([o$5("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], u.prototype, "readInverseCoefficients", null), e$6([r$6("inverseCoefficients")], u.prototype, "writeInverseCoefficients", null), e$6([y$2()], u.prototype, "affectsPixelSize", null), e$6([r$5({ PolynomialXform: "polynomial" })], u.prototype, "type", void 0), u = e$6([n$a("esri.layers.support.rasterTransforms.PolynomialTransform")], u);
const m = u;
const o = { GCSShiftXform: c$1, IdentityXform: p, PolynomialXform: m }, e = Object.keys(o);
function f(r2) {
  const t2 = r2 == null ? void 0 : r2.type;
  return !r2 || e.includes(t2);
}
function i(r2) {
  const t2 = r2 == null ? void 0 : r2.type;
  if (!t2)
    return null;
  const n2 = o[r2 == null ? void 0 : r2.type];
  if (n2) {
    const t3 = new n2();
    return t3.read(r2), t3;
  }
  return null;
}
export { c$1 as c, f, i, l$1 as l, m };
