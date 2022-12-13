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
import { b0 as l$9, aX as y$3, at as y$4, aM as f$7, aQ as l$a, aP as s$8, aN as u$9, ap as u$a, aF as c$a, b6 as t$6, b7 as M$2, b8 as s$9, b9 as u$b, ba as i$9, bb as G$2, bc as o$7, k as e$9, bd as s$a, h as has, be as g$6, A as u$c, aW as t$7, B as n$d, bf as h$6, bg as n$e, bh as o$8, z as r$f, bi as z$1, bj as i$a, bk as e$a, bl as a$d, s as s$b, bm as o$9, a as r$g, t as t$a, bn as e$b, b2 as e$d, au as r$h, g as s$c, bo as m$7, bp as o$a, bq as c$b, br as p$4 } from "./index.js";
import { C as C$2 } from "./BidiEngine.js";
import { c as O$1, P as P$3, R as R$1, k as k$2, f as B$2, A as A$2, X, o as o$6, g as Y$3, Z as Z$3, K as K$3, j as j$4, h as f$8, i as U$3, l as w$4, m as C$4, p as l$b, q as a$e, u as u$d, t as y$5, v as ne$2, D as oe$2, E as m$6, F as ie$2, G as dt, H as i$b, a as e$e, n as n$g } from "./enums2.js";
import { t as t$9, e as e$c, f as f$9 } from "./MaterialKey.js";
import { e as w$3, b as E$2, S as S$1 } from "./Utils2.js";
import { t as t$8 } from "./Rect.js";
import { q as q$4, C as C$3, B as B$3, v as v$1 } from "./quantizationUtils.js";
import { n as n$f } from "./GeometryUtils.js";
import { o as o$b } from "./floatRGBA.js";
function e$8(e2) {
  return typeof e2 == "function";
}
function t$5(t2, r2, n2, o2) {
  return e$8(t2) ? t2(r2, n2, o2) : t2;
}
const n$c = " /-,\n";
function o$5(e2) {
  let t2 = e2.length;
  for (; t2--; )
    if (!n$c.includes(e2.charAt(t2)))
      return false;
  return true;
}
function i$8(e2, t2) {
  const r2 = [];
  let n2 = 0, i2 = -1;
  do {
    if (i2 = e2.indexOf("[", n2), i2 >= n2) {
      if (i2 > n2) {
        const t3 = e2.substr(n2, i2 - n2);
        r2.push([t3, null, o$5(t3)]);
      }
      if (n2 = i2 + 1, i2 = e2.indexOf("]", n2), i2 >= n2) {
        if (i2 > n2) {
          const o2 = t2[e2.substr(n2, i2 - n2)];
          o2 && r2.push([null, o2, false]);
        }
        n2 = i2 + 1;
      }
    }
  } while (i2 !== -1);
  if (n2 < e2.length - 1) {
    const t3 = e2.substr(n2);
    r2.push([t3, null, o$5(t3)]);
  }
  return r2;
}
function l$8(e2, t2, r2) {
  let n2 = "", o2 = null;
  for (const i2 of t2) {
    const [t3, r3, l2] = i2;
    if (t3)
      l2 ? o2 = t3 : (o2 && (n2 += o2, o2 = null), n2 += t3);
    else {
      const t4 = e2.attributes[r3];
      t4 && (o2 && (n2 += o2, o2 = null), n2 += t4);
    }
  }
  return s$7(n2, r2);
}
function c$9(e2, t2, r2) {
  const n2 = i$8(t2, e2);
  return (e3) => l$8(e3, n2, r2);
}
function s$7(e2, t2) {
  switch (typeof e2 != "string" && (e2 = String(e2)), t2) {
    case "LowerCase":
      return e2.toLowerCase();
    case "Allcaps":
      return e2.toUpperCase();
    default:
      return e2;
  }
}
function a$c(e2, t2, r2, n2, o2, i2, l2 = true) {
  const c2 = t2 / o2, s2 = r2 / i2, a2 = Math.ceil(c2 / 2), u2 = Math.ceil(s2 / 2);
  for (let f2 = 0; f2 < i2; f2++)
    for (let r3 = 0; r3 < o2; r3++) {
      const y2 = 4 * (r3 + (l2 ? i2 - f2 - 1 : f2) * o2);
      let M2 = 0, C2 = 0, m2 = 0, b2 = 0, d2 = 0, p2 = 0, I2 = 0;
      const h2 = (f2 + 0.5) * s2;
      for (let n3 = Math.floor(f2 * s2); n3 < (f2 + 1) * s2; n3++) {
        const o3 = Math.abs(h2 - (n3 + 0.5)) / u2, i3 = (r3 + 0.5) * c2, l3 = o3 * o3;
        for (let s3 = Math.floor(r3 * c2); s3 < (r3 + 1) * c2; s3++) {
          let r4 = Math.abs(i3 - (s3 + 0.5)) / a2;
          const o4 = Math.sqrt(l3 + r4 * r4);
          o4 >= -1 && o4 <= 1 && (M2 = 2 * o4 * o4 * o4 - 3 * o4 * o4 + 1, M2 > 0 && (r4 = 4 * (s3 + n3 * t2), I2 += M2 * e2[r4 + 3], m2 += M2, e2[r4 + 3] < 255 && (M2 = M2 * e2[r4 + 3] / 250), b2 += M2 * e2[r4], d2 += M2 * e2[r4 + 1], p2 += M2 * e2[r4 + 2], C2 += M2));
        }
      }
      n2[y2] = b2 / C2, n2[y2 + 1] = d2 / C2, n2[y2 + 2] = p2 / C2, n2[y2 + 3] = I2 / m2;
    }
}
function u$8(e2) {
  return e2 ? { r: e2[0], g: e2[1], b: e2[2], a: e2[3] / 255 } : { r: 0, g: 0, b: 0, a: 0 };
}
function m$5(e2) {
  return e2.type === "CIMMarkerPlacementAlongLineRandomSize" || e2.type === "CIMMarkerPlacementAlongLineSameSize" || e2.type === "CIMMarkerPlacementAlongLineVariableSize" || e2.type === "CIMMarkerPlacementAtExtremities" || e2.type === "CIMMarkerPlacementAtMeasuredUnits" || e2.type === "CIMMarkerPlacementAtRatioPositions" || e2.type === "CIMMarkerPlacementOnLine" || e2.type === "CIMMarkerPlacementOnVertices";
}
const b$3 = (e2, t2 = 0) => isNaN(e2) || e2 == null ? t2 : e2, d$2 = (e2) => {
  if (!e2)
    return false;
  for (const t2 of e2)
    switch (t2.type) {
      case "CIMGeometricEffectBuffer":
      case "CIMGeometricEffectOffset":
        return true;
    }
  return false;
};
function p$3() {
  return import("./geometryEngineJSON2.js");
}
function I$1(e2) {
  if (!e2)
    return "normal";
  switch (e2.toLowerCase()) {
    case "italic":
      return "italic";
    case "oblique":
      return "oblique";
    default:
      return "normal";
  }
}
function h$5(e2) {
  if (!e2)
    return "normal";
  switch (e2.toLowerCase()) {
    case "bold":
      return "bold";
    case "bolder":
      return "bolder";
    case "lighter":
      return "lighter";
    default:
      return "normal";
  }
}
function S(e2) {
  let t2 = "", r2 = "";
  if (e2) {
    const n2 = e2.toLowerCase();
    n2.includes("italic") ? t2 = "italic" : n2.includes("oblique") && (t2 = "oblique"), n2.includes("bold") ? r2 = "bold" : n2.includes("light") && (r2 = "lighter");
  }
  return { style: t2, weight: r2 };
}
function g$5(e2) {
  return e2.underline ? "underline" : e2.strikethrough ? "line-through" : "none";
}
function k$1(e2) {
  if (!e2)
    return null;
  switch (e2.type) {
    case "CIMPolygonSymbol":
      if (e2.symbolLayers)
        for (const t2 of e2.symbolLayers) {
          const e3 = k$1(t2);
          if (e3 != null)
            return e3;
        }
      break;
    case "CIMTextSymbol":
      return k$1(e2.symbol);
    case "CIMSolidFill":
      return e2.color;
  }
}
function P$2(e2) {
  if (e2)
    switch (e2.type) {
      case "CIMPolygonSymbol":
      case "CIMLineSymbol":
        if (e2.symbolLayers)
          for (const t2 of e2.symbolLayers) {
            const e3 = P$2(t2);
            if (e3 !== void 0)
              return e3;
          }
        break;
      case "CIMTextSymbol":
        return P$2(e2.symbol);
      case "CIMSolidStroke":
      case "CIMSolidFill":
        return e2.color;
    }
}
function L$1(e2) {
  if (e2)
    switch (e2.type) {
      case "CIMPolygonSymbol":
      case "CIMLineSymbol":
        if (e2.symbolLayers)
          for (const t2 of e2.symbolLayers) {
            const e3 = L$1(t2);
            if (e3 !== void 0)
              return e3;
          }
        break;
      case "CIMTextSymbol":
        return L$1(e2.symbol);
      case "CIMSolidStroke":
      case "CIMGradientStroke":
      case "CIMPictureStroke":
        return e2.width;
    }
}
function w$2(e2) {
  switch (e2) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
    case "Justify":
      return "center";
  }
}
function x$3(e2) {
  switch (e2) {
    case "Top":
    default:
      return "top";
    case "Center":
      return "middle";
    case "Baseline":
      return "baseline";
    case "Bottom":
      return "bottom";
  }
}
function F$1(e2) {
  return (e2 ? Object.keys(e2) : []).map((t2) => ({ name: t2, alias: t2, type: typeof e2[t2] == "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
}
const A$1 = (e2) => e2.includes("data:image/svg+xml");
function a$b(e2) {
  if (!e2)
    return "arial-unicode-ms";
  const t2 = e2.toLowerCase().split(" ").join("-");
  switch (t2) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return t2;
  }
}
function i$7(e2) {
  const t2 = c$8(e2) + f$6(e2);
  return a$b(e2.family) + (t2.length > 0 ? t2 : "-regular");
}
function c$8(e2) {
  if (!e2.weight)
    return "";
  switch (e2.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function f$6(e2) {
  if (!e2.style)
    return "";
  switch (e2.style.toLowerCase()) {
    case "italic":
    case "oblique":
      return "-italic";
  }
  return "";
}
const i$6 = new C$2();
function n$b(r2) {
  if (!i$6.hasBidiChar(r2))
    return [r2, false];
  let n2;
  return n2 = i$6.checkContextual(r2) === "rtl" ? "IDNNN" : "ICNNN", [i$6.bidiTransform(r2, n2, "VLYSN"), true];
}
class t$4 {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (this.rz == null || this.rz === 0 && this.rzCos !== 1 && this.rzSin !== 0) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t2, s2) {
    this.tx = t2, this.ty = s2;
  }
  setTranslateZ(t2) {
    this.tz = t2;
  }
  setRotateCS(t2, s2) {
    this.rz = void 0, this.rzCos = t2, this.rzSin = s2;
  }
  setRotate(t2) {
    this.rz = t2, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t2) {
    this.ry = t2;
  }
  setScale(t2) {
    this.s = t2;
  }
  setMeasure(t2) {
    this.m = t2;
  }
}
class r$e {
  constructor(t2) {
    this._geometry = t2;
  }
  next() {
    const t2 = this._geometry;
    return this._geometry = null, t2;
  }
}
class a$a {
  applyColorSubstituition(t2, a2) {
    if (!a2)
      return t2;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e2, height: n2 } = t2, o2 = this._rasterizationCanvas, r2 = o2.getContext("2d");
    t2 !== o2 && (o2.width = e2, o2.height = n2, r2.drawImage(t2, 0, 0, e2, n2));
    const i2 = r2.getImageData(0, 0, e2, n2).data;
    if (a2) {
      for (const l2 of a2)
        if (l2 && l2.oldColor && l2.oldColor.length === 4 && l2.newColor && l2.newColor.length === 4) {
          const [t3, a3, e3, n3] = l2.oldColor, [o3, r3, s3, g2] = l2.newColor;
          if (t3 === o3 && a3 === r3 && e3 === s3 && n3 === g2)
            continue;
          for (let l3 = 0; l3 < i2.length; l3 += 4)
            t3 === i2[l3] && a3 === i2[l3 + 1] && e3 === i2[l3 + 2] && n3 === i2[l3 + 3] && (i2[l3] = o3, i2[l3 + 1] = r3, i2[l3 + 2] = s3, i2[l3 + 3] = g2);
        }
    }
    const s2 = new ImageData(i2, e2, n2);
    return r2.putImageData(s2, 0, 0), o2;
  }
  tintImageData(a2, e2) {
    if (!e2)
      return a2;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: n2, height: o2 } = a2, r2 = this._rasterizationCanvas, i2 = r2.getContext("2d");
    a2 !== r2 && (r2.width = n2, r2.height = o2, i2.drawImage(a2, 0, 0, n2, o2));
    const s2 = i2.getImageData(0, 0, n2, o2), l2 = new Uint8Array(s2.data), g2 = new l$9(e2), h2 = [g2.r / 255, g2.g / 255, g2.b / 255, g2.a];
    for (let t2 = 0; t2 < l2.length; t2 += 4)
      l2[t2 + 0] *= h2[0], l2[t2 + 1] *= h2[1], l2[t2 + 2] *= h2[2], l2[t2 + 3] *= h2[3];
    const d2 = new ImageData(new Uint8ClampedArray(l2.buffer), n2, o2);
    return i2.putImageData(d2, 0, 0), r2;
  }
}
function a$9(i2) {
  const n2 = y$3(i2);
  return P$1(n2), n2;
}
function l$7(t2) {
  t2 && (s$8(t2) ? t2.y = -t2.y : y$4(t2) ? u$7(t2.rings) : f$7(t2) ? u$7(t2.paths) : l$a(t2) && r$d(t2.points));
}
function r$d(t2) {
  if (t2) {
    const i2 = t2.length;
    for (let n2 = 0; n2 < i2; n2++)
      t2[n2][1] = -t2[n2][1];
  }
}
function u$7(t2) {
  if (t2)
    for (const i2 of t2)
      r$d(i2);
}
function c$7(t2) {
  if (t2) {
    for (let i2 = t2.length - 1; i2 > 0; --i2)
      t2[i2][0] -= t2[i2 - 1][0], t2[i2][1] -= t2[i2 - 1][1];
  }
}
function f$5(t2) {
  if (t2)
    for (const i2 of t2)
      c$7(i2);
}
function p$2(t2) {
  if (t2) {
    const i2 = t2.length;
    for (let n2 = 1; n2 < i2; ++n2)
      t2[n2][0] += t2[n2 - 1][0], t2[n2][1] += t2[n2 - 1][1];
  }
}
function m$4(t2) {
  if (t2)
    for (const i2 of t2)
      p$2(i2);
}
function P$1(t2) {
  t2 && (y$4(t2) ? m$4(t2.rings) : f$7(t2) ? m$4(t2.paths) : l$a(t2) && p$2(t2.points), l$7(t2));
}
function x$2(t2) {
  t2 && (l$7(t2), y$4(t2) ? f$5(t2.rings) : f$7(t2) ? f$5(t2.paths) : l$a(t2) && c$7(t2.points));
}
function g$4(t2) {
  if (t2)
    for (const i2 of t2)
      d$1(i2);
}
function d$1(t2) {
  t2 && t2.reverse();
}
function C$1(t2, i2, n2) {
  return [t2[0] + (i2[0] - t2[0]) * n2, t2[1] + (i2[1] - t2[1]) * n2];
}
function y$2(t2) {
  return !(!t2 || t2.length === 0) && (t2[0][0] === t2[t2.length - 1][0] && t2[0][1] === t2[t2.length - 1][1]);
}
function I(t2) {
  return t2[4];
}
function j$3(t2, i2) {
  t2[4] = i2;
}
class G$1 {
  constructor(t2, s2, e2, a2 = 0) {
    this.isClosed = false, this.multiPath = null, this.acceptPolygon = s2, this.acceptPolyline = e2, this.geomUnitsPerPoint = a2, this.pathCount = -1, this.pathIndex = -1, this.iteratePath = false, t2 && (y$4(t2) ? s2 && (this.multiPath = t2.rings, this.isClosed = true) : f$7(t2) ? e2 && (this.multiPath = t2.paths, this.isClosed = false) : u$9(t2) && s2 && (this.multiPath = b$2(t2).rings, this.isClosed = true), this.multiPath && (this.pathCount = this.multiPath.length)), this.internalPlacement = new t$4();
  }
  next() {
    if (!this.multiPath)
      return null;
    for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
      this.iteratePath || this.pathIndex++;
      const t2 = this.processPath(this.multiPath[this.pathIndex]);
      if (t2)
        return t2;
    }
    return this.pathCount = -1, this.pathIndex = -1, this.multiPath = null, null;
  }
}
class U$2 {
  constructor(t2, i2, n2, s2 = 0) {
    this.isClosed = false, this.multiPath = null, this.inputGeometries = t2, this.acceptPolygon = i2, this.acceptPolyline = n2, this.geomUnitsPerPoint = s2, this.pathCount = -1, this.pathIndex = -1, this.iteratePath = false;
  }
  next() {
    for (; ; ) {
      if (!this.multiPath) {
        let t2 = this.inputGeometries.next();
        for (; t2; ) {
          if (y$4(t2) ? this.acceptPolygon && (this.multiPath = t2.rings, this.isClosed = true) : f$7(t2) ? this.acceptPolyline && (this.multiPath = t2.paths, this.isClosed = false) : u$9(t2) && this.acceptPolygon && (this.multiPath = b$2(t2).rings, this.isClosed = true), this.multiPath) {
            this.pathCount = this.multiPath.length, this.pathIndex = -1;
            break;
          }
          t2 = this.inputGeometries.next();
        }
        if (!this.multiPath)
          return null;
      }
      for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
        this.iteratePath || this.pathIndex++;
        const t2 = this.processPath(this.multiPath[this.pathIndex]);
        if (t2)
          return t2;
      }
      this.pathCount = -1, this.pathIndex = -1, this.multiPath = null;
    }
  }
}
function b$2(t2) {
  return { rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] };
}
class o$4 {
  static local() {
    return o$4.instance === null && (o$4.instance = new o$4()), o$4.instance;
  }
  execute(s2, t2, e2, i2) {
    return new r$c(s2, t2, e2);
  }
}
o$4.instance = null;
class r$c {
  constructor(s2, t2, e2) {
    this._inputGeometries = s2, this._angleTolerance = t2.angleTolerance !== void 0 ? t2.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let n2 = this._inputGeometries.next();
    for (; n2; ) {
      if (y$4(n2)) {
        this._isClosed = true;
        const t2 = y$3(n2);
        return this._processMultipath(t2.rings), t2;
      }
      if (f$7(n2)) {
        this._isClosed = false;
        const t2 = y$3(n2);
        return this._processMultipath(t2.paths), t2;
      }
      if (u$9(n2)) {
        if (this._maxCosAngle)
          return n2;
        this._isClosed = true;
        const s2 = [[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [n2.xmin, n2.ymin]];
        return this._processPath(s2), { rings: [s2] };
      }
      n2 = this._inputGeometries.next();
    }
    return null;
  }
  _processMultipath(s2) {
    if (s2)
      for (const t2 of s2)
        this._processPath(t2);
  }
  _processPath(s2) {
    if (s2) {
      let t2, e2, i2, o2, r2, l2, a2 = s2.length, h2 = s2[0];
      this._isClosed && ++a2;
      for (let c2 = 1; c2 < a2; ++c2) {
        let m2;
        m2 = this._isClosed && c2 === a2 - 1 ? s2[0] : s2[c2];
        const _2 = m2[0] - h2[0], u2 = m2[1] - h2[1], p2 = Math.sqrt(_2 * _2 + u2 * u2);
        if (c2 > 1 && p2 > 0 && i2 > 0) {
          (t2 * _2 + e2 * u2) / p2 / i2 <= this._maxCosAngle && j$3(h2, 1);
        }
        c2 === 1 && (o2 = _2, r2 = u2, l2 = p2), p2 > 0 && (h2 = m2, t2 = _2, e2 = u2, i2 = p2);
      }
      if (this._isClosed && i2 > 0 && l2 > 0) {
        (t2 * o2 + e2 * r2) / l2 / i2 <= this._maxCosAngle && j$3(s2[0], 1);
      }
    }
  }
}
const e$7 = 0.03;
class s$6 {
  constructor() {
    this._path = [];
  }
  path() {
    return this._path;
  }
  addPath(t2, e2) {
    e2 || t2.reverse(), Array.prototype.push.apply(this._path, t2), e2 || t2.reverse();
  }
  static mergePath(t2, e2) {
    e2 && Array.prototype.push.apply(t2, e2);
  }
  startPath(t2) {
    this._path.push(t2);
  }
  lineTo(t2) {
    this._path.push(t2);
  }
  close() {
    const t2 = this._path;
    t2.length > 1 && (t2[0][0] === t2[t2.length - 1][0] && t2[0][1] === t2[t2.length - 1][1] || t2.push([t2[0][0], t2[0][1]]));
  }
}
class n$a {
  constructor(t2 = 0, e2 = false) {
  }
  normalize(t2) {
    const e2 = Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1]);
    e2 !== 0 && (t2[0] /= e2, t2[1] /= e2);
  }
  calculateLength(t2, e2) {
    const s2 = e2[0] - t2[0], n2 = e2[1] - t2[1];
    return Math.sqrt(s2 * s2 + n2 * n2);
  }
  calculateSegLength(t2, e2) {
    return this.calculateLength(t2[e2], t2[e2 + 1]);
  }
  calculatePathLength(t2) {
    let e2 = 0;
    const s2 = t2 ? t2.length : 0;
    for (let n2 = 0; n2 < s2 - 1; ++n2)
      e2 += this.calculateSegLength(t2, n2);
    return e2;
  }
  calculatePathArea(t2) {
    let e2 = 0;
    const s2 = t2 ? t2.length : 0;
    for (let n2 = 0; n2 < s2 - 1; ++n2)
      e2 += (t2[n2 + 1][0] - t2[n2][0]) * (t2[n2 + 1][1] + t2[n2][1]);
    return e2 / 2;
  }
  getCoord2D(t2, e2, s2) {
    return [t2[0] + (e2[0] - t2[0]) * s2, t2[1] + (e2[1] - t2[1]) * s2];
  }
  getSegCoord2D(t2, e2, s2) {
    return this.getCoord2D(t2[e2], t2[e2 + 1], s2);
  }
  getAngle(t2, e2, s2) {
    const n2 = e2[0] - t2[0], r2 = e2[1] - t2[1];
    return Math.atan2(r2, n2);
  }
  getSegAngle(t2, e2, s2) {
    return this.getAngle(t2[e2], t2[e2 + 1], s2);
  }
  getAngleCS(t2, e2, s2) {
    const n2 = e2[0] - t2[0], r2 = e2[1] - t2[1], h2 = Math.sqrt(n2 * n2 + r2 * r2);
    return h2 > 0 ? [n2 / h2, r2 / h2] : [1, 0];
  }
  getSegAngleCS(t2, e2, s2) {
    return this.getAngleCS(t2[e2], t2[e2 + 1], s2);
  }
  cut(t2, e2, s2, n2) {
    return [s2 <= 0 ? t2[e2] : this.getSegCoord2D(t2, e2, s2), n2 >= 1 ? t2[e2 + 1] : this.getSegCoord2D(t2, e2, n2)];
  }
  addSegment(t2, e2, s2) {
    s2 && t2.push(e2[0]), t2.push(e2[1]);
  }
  getSubCurve(t2, e2, s2) {
    const n2 = [];
    return this.appendSubCurve(n2, t2, e2, s2) ? n2 : null;
  }
  appendSubCurve(t2, e2, s2, n2) {
    const r2 = e2 ? e2.length - 1 : 0;
    let h2 = 0, l2 = true, o2 = 0;
    for (; o2 < r2; ) {
      const r3 = this.calculateSegLength(e2, o2);
      if (r3 !== 0) {
        if (l2) {
          if (h2 + r3 > s2) {
            const a2 = (s2 - h2) / r3;
            let u2 = 1, c2 = false;
            h2 + r3 >= n2 && (u2 = (n2 - h2) / r3, c2 = true);
            const i2 = this.cut(e2, o2, a2, u2);
            if (i2 && this.addSegment(t2, i2, l2), c2)
              break;
            l2 = false;
          }
        } else {
          if (h2 + r3 > n2) {
            const s3 = this.cut(e2, o2, 0, (n2 - h2) / r3);
            s3 && this.addSegment(t2, s3, l2);
            break;
          }
          this.addSegment(t2, [e2[o2], e2[o2 + 1]], l2);
        }
        h2 += r3, ++o2;
      } else
        ++o2;
    }
    return true;
  }
  getCIMPointAlong(t2, e2) {
    const s2 = t2 ? t2.length - 1 : 0;
    let n2 = 0, r2 = -1;
    for (; r2 < s2; ) {
      ++r2;
      const s3 = this.calculateSegLength(t2, r2);
      if (s3 !== 0) {
        if (n2 + s3 > e2) {
          const h2 = (e2 - n2) / s3;
          return this.getCoord2D(t2[r2], t2[r2 + 1], h2);
        }
        n2 += s3;
      }
    }
    return null;
  }
  isEmpty(t2, e2) {
    if (!t2 || t2.length <= 1)
      return true;
    const s2 = t2 ? t2.length - 1 : 0;
    let n2 = -1;
    for (; n2 < s2; ) {
      if (++n2, t2[n2 + 1][0] !== t2[n2][0] || t2[n2 + 1][1] !== t2[n2][1])
        return false;
      if (e2 && t2[n2 + 1][2] !== t2[n2][2])
        return false;
    }
    return true;
  }
  offset(e2, s2, n2, r2, h2) {
    if (!e2 || e2.length < 2)
      return null;
    let l2 = 0, o2 = e2[l2++], a2 = l2;
    for (; l2 < e2.length; ) {
      const t2 = e2[l2];
      t2[0] === o2[0] && t2[1] === o2[1] || (l2 !== a2 && (e2[a2] = e2[l2]), o2 = e2[a2++]), l2++;
    }
    const u2 = e2[0][0] === e2[a2 - 1][0] && e2[0][1] === e2[a2 - 1][1];
    if (u2 && --a2, a2 < (u2 ? 3 : 2))
      return null;
    const c2 = [];
    o2 = u2 ? e2[a2 - 1] : null;
    let i2 = e2[0];
    for (let g2 = 0; g2 < a2; g2++) {
      const h3 = g2 === a2 - 1 ? u2 ? e2[0] : null : e2[g2 + 1];
      if (o2)
        if (h3) {
          const e3 = [h3[0] - i2[0], h3[1] - i2[1]];
          this.normalize(e3);
          const l3 = [i2[0] - o2[0], i2[1] - o2[1]];
          this.normalize(l3);
          const a3 = l3[0] * e3[1] - l3[1] * e3[0], u3 = l3[0] * e3[0] + l3[1] * e3[1];
          if (a3 === 0 && u3 === 1) {
            i2 = h3;
            continue;
          }
          if (a3 >= 0 == s2 <= 0) {
            if (u3 < 1) {
              const t2 = [e3[0] - l3[0], e3[1] - l3[1]];
              this.normalize(t2);
              const n3 = Math.sqrt((1 + u3) / 2);
              if (n3 > 1 / r2) {
                const e4 = -Math.abs(s2) / n3;
                c2.push([i2[0] - t2[0] * e4, i2[1] - t2[1] * e4]);
              }
            }
          } else
            switch (n2) {
              case O$1.Mitered: {
                const t2 = Math.sqrt((1 + u3) / 2);
                if (t2 > 0 && 1 / t2 < r2) {
                  const n3 = [e3[0] - l3[0], e3[1] - l3[1]];
                  this.normalize(n3);
                  const r3 = Math.abs(s2) / t2;
                  c2.push([i2[0] - n3[0] * r3, i2[1] - n3[1] * r3]);
                  break;
                }
              }
              case O$1.Bevelled:
                c2.push([i2[0] + l3[1] * s2, i2[1] - l3[0] * s2]), c2.push([i2[0] + e3[1] * s2, i2[1] - e3[0] * s2]);
                break;
              case O$1.Rounded:
                if (u3 < 1) {
                  c2.push([i2[0] + l3[1] * s2, i2[1] - l3[0] * s2]);
                  const t2 = Math.floor(2.5 * (1 - u3));
                  if (t2 > 0) {
                    const n3 = 1 / t2;
                    let r3 = n3;
                    for (let h4 = 1; h4 < t2; h4++, r3 += n3) {
                      const t3 = [l3[1] * (1 - r3) + e3[1] * r3, -l3[0] * (1 - r3) - e3[0] * r3];
                      this.normalize(t3), c2.push([i2[0] + t3[0] * s2, i2[1] + t3[1] * s2]);
                    }
                  }
                  c2.push([i2[0] + e3[1] * s2, i2[1] - e3[0] * s2]);
                }
                break;
              case O$1.Square:
              default:
                if (a3 < 0)
                  c2.push([i2[0] + (l3[1] + l3[0]) * s2, i2[1] + (l3[1] - l3[0]) * s2]), c2.push([i2[0] + (e3[1] - e3[0]) * s2, i2[1] - (e3[0] + e3[1]) * s2]);
                else {
                  const t2 = Math.sqrt((1 + Math.abs(u3)) / 2), n3 = [e3[0] - l3[0], e3[1] - l3[1]];
                  this.normalize(n3);
                  const r3 = s2 / t2;
                  c2.push([i2[0] - n3[0] * r3, i2[1] - n3[1] * r3]);
                }
            }
        } else {
          const t2 = [i2[0] - o2[0], i2[1] - o2[1]];
          this.normalize(t2), c2.push([i2[0] + t2[1] * s2, i2[1] - t2[0] * s2]);
        }
      else {
        const t2 = [h3[0] - i2[0], h3[1] - i2[1]];
        this.normalize(t2), c2.push([i2[0] + t2[1] * s2, i2[1] - t2[0] * s2]);
      }
      o2 = i2, i2 = h3;
    }
    return c2.length < (u2 ? 3 : 2) ? null : (u2 && c2.push([c2[0][0], c2[0][1]]), c2);
  }
}
const l$6 = 1.7320508075688772, c$6 = 5, u$6 = P$3.OpenEnded;
class h$4 {
  static local() {
    return h$4.instance === null && (h$4.instance = new h$4()), h$4.instance;
  }
  execute(t2, e2, r2, n2) {
    return new a$8(t2, e2, r2);
  }
}
h$4.instance = null;
class a$8 extends U$2 {
  constructor(t2, e2, o2) {
    super(t2, false, true), this._curveHelper = new n$a(), this._width = (e2.width !== void 0 ? e2.width : c$6) * o2, this._arrowType = e2.geometricEffectArrowType !== void 0 ? e2.geometricEffectArrowType : e2.arrowType !== void 0 ? e2.arrowType : u$6, this._offsetFlattenError = e$7 * o2;
  }
  processPath(t2) {
    switch (this._arrowType) {
      case P$3.OpenEnded:
      default:
        return this._constructSimpleArrow(t2, true);
      case P$3.Block:
        return this._constructSimpleArrow(t2, false);
      case P$3.Crossed:
        return this._constructCrossedArrow(t2);
    }
  }
  _constructSimpleArrow(t2, e2) {
    const r2 = this._curveHelper.calculatePathLength(t2);
    let n2 = this._width;
    r2 < 2 * n2 && (n2 = r2 / 2);
    const s2 = this._curveHelper.getSubCurve(t2, 0, r2 - n2);
    if (!s2)
      return null;
    const i2 = n2 / 2;
    if (this._curveHelper.isEmpty(s2, false))
      return null;
    const l2 = this._constructOffset(s2, -i2);
    if (!l2)
      return null;
    const c2 = this._constructOffset(s2, i2);
    if (!c2)
      return null;
    const u2 = this._constructArrowBasePoint(l2, -i2 / 2);
    if (!u2)
      return null;
    const h2 = this._constructArrowBasePoint(c2, i2 / 2);
    if (!h2)
      return null;
    const a2 = t2[t2.length - 1];
    e2 || (this._makeControlPoint(c2, true), this._makeControlPoint(l2, true));
    const _2 = new s$6();
    return _2.addPath(c2, true), _2.lineTo(h2), this._makeControlPoint(_2.path()), _2.lineTo(a2), this._makeControlPoint(_2.path()), _2.lineTo(u2), this._makeControlPoint(_2.path()), _2.addPath(l2, false), e2 ? { paths: [_2.path()] } : (_2.close(), { rings: [_2.path()] });
  }
  _constructCrossedArrow(t2) {
    const e2 = this._curveHelper.calculatePathLength(t2);
    let r2 = this._width;
    e2 < r2 * (1 + l$6 + 1) && (r2 = e2 / (1 + l$6 + 1));
    const n2 = this._curveHelper.getSubCurve(t2, 0, e2 - r2 * (1 + l$6));
    if (!n2)
      return null;
    const s2 = r2 / 2;
    if (this._curveHelper.isEmpty(n2, false))
      return null;
    const i2 = this._constructOffset(n2, s2);
    if (!i2)
      return null;
    const c2 = this._constructOffset(n2, -s2);
    if (!c2)
      return null;
    const u2 = this._curveHelper.getSubCurve(t2, 0, e2 - r2);
    if (!u2)
      return null;
    if (this._curveHelper.isEmpty(u2, false))
      return null;
    const h2 = this._constructOffset(u2, s2);
    if (!h2)
      return null;
    const a2 = this._constructOffset(u2, -s2);
    if (!a2)
      return null;
    const _2 = h2[h2.length - 1], f2 = this._constructArrowBasePoint(h2, s2 / 2);
    if (!f2)
      return null;
    const p2 = a2[a2.length - 1], m2 = this._constructArrowBasePoint(a2, -s2 / 2);
    if (!m2)
      return null;
    const d2 = t2[t2.length - 1];
    this._makeControlPoint(i2, false), this._makeControlPoint(c2, false);
    const w2 = new s$6();
    return w2.addPath(i2, true), this._makeControlPoint(w2.path()), w2.lineTo(p2), w2.lineTo(m2), this._makeControlPoint(w2.path()), w2.lineTo(d2), this._makeControlPoint(w2.path()), w2.lineTo(f2), this._makeControlPoint(w2.path()), w2.lineTo(_2), this._makeControlPoint(w2.path()), w2.addPath(c2, false), { paths: [w2.path()] };
  }
  _constructOffset(t2, e2) {
    return this._curveHelper.offset(t2, e2, O$1.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t2, e2) {
    if (!t2 || t2.length < 2)
      return null;
    const r2 = t2[t2.length - 2], n2 = t2[t2.length - 1], o2 = [n2[0] - r2[0], n2[1] - r2[1]];
    return this._curveHelper.normalize(o2), [n2[0] + o2[1] * e2, n2[1] - o2[0] * e2];
  }
  _makeControlPoint(t2, r2 = false) {
    j$3(r2 ? t2[0] : t2[t2.length - 1], 1);
  }
}
class f$4 {
  static local() {
    return f$4.instance === null && (f$4.instance = new f$4()), f$4.instance;
  }
  execute(e2, t2, s2, i2) {
    return new h$3(e2, t2, s2, i2);
  }
}
f$4.instance = null;
class h$3 {
  constructor(e2, t2, s2, i2) {
    this._inputGeometries = e2, this._curveHelper = new n$a(), this._size = (t2.size !== void 0 ? t2.size : 1) * s2, this._offsetFlattenError = e$7 * s2;
  }
  next() {
    let n2 = this._inputGeometries.next();
    for (; n2; ) {
      if (u$9(n2))
        if (this._size > 0) {
          const e2 = [[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [n2.xmin, n2.ymin]], t2 = this._curveHelper.offset(e2, this._size, O$1.Rounded, 4, this._offsetFlattenError);
          if (t2)
            return { rings: [t2] };
        } else {
          if (!(this._size < 0))
            return n2;
          if (Math.min(n2.xmax - n2.xmin, n2.ymax - n2.ymin) + 2 * this._size > 0)
            return { xmin: n2.xmin - this._size, xmax: n2.xmax + this._size, ymin: n2.ymin - this._size, ymax: n2.ymax + this._size };
        }
      if (y$4(n2)) {
        if (this._size === 0)
          return n2;
        const e2 = [];
        for (const t2 of n2.rings) {
          const s2 = this._curveHelper.offset(t2, this._size, O$1.Rounded, 4, this._offsetFlattenError);
          s2 && e2.push(s2);
        }
        if (e2.length)
          return { rings: e2 };
      }
      if (f$7(n2) && this._size > 0) {
        const e2 = [];
        for (const t2 of n2.paths)
          if (t2 && t2.length > 1) {
            const s2 = this._curveHelper.offset(t2, this._size, O$1.Rounded, 4, this._offsetFlattenError), i2 = this._curveHelper.offset(t2, -this._size, O$1.Rounded, 4, this._offsetFlattenError);
            if (s2 && i2) {
              for (let e3 = i2.length - 1; e3 >= 0; e3--)
                s2.push(i2[e3]);
              s2.push([s2[0][0], s2[0][1]]), e2.push(s2);
            }
          }
        if (e2.length)
          return { rings: e2 };
      }
      s$8(n2) && this._size, n2 = this._inputGeometries.next();
    }
    return null;
  }
}
class _$2 {
  static local() {
    return _$2.instance === null && (_$2.instance = new _$2()), _$2.instance;
  }
  execute(s2, t2, i2, h2) {
    return new c$5(s2, t2, i2);
  }
}
_$2.instance = null;
class c$5 {
  constructor(s2, t2, i2) {
    var _a;
    this._defaultPointSize = 20, this._inputGeometries = s2, this._geomUnitsPerPoint = i2, this._rule = (_a = t2.rule) != null ? _a : R$1.FullGeometry, this._defaultSize = this._defaultPointSize * i2;
  }
  next() {
    let e2;
    for (; e2 = this._inputGeometries.next(); ) {
      let r2;
      if (s$8(e2) ? r2 = this._processGeom([[[e2.x, e2.y]]]) : l$a(e2) ? r2 = this._processGeom([e2.points]) : f$7(e2) ? r2 = this._processGeom(e2.paths) : y$4(e2) && (r2 = this._processGeom(e2.rings)), r2 && r2.length)
        return { paths: r2 };
    }
    return null;
  }
  _clone(s2) {
    return [s2[0], s2[1]];
  }
  _mid(s2, t2) {
    return [(s2[0] + t2[0]) / 2, (s2[1] + t2[1]) / 2];
  }
  _mix(s2, t2, i2, h2) {
    return [s2[0] * t2 + i2[0] * h2, s2[1] * t2 + i2[1] * h2];
  }
  _add(s2, t2) {
    return [s2[0] + t2[0], s2[1] + t2[1]];
  }
  _add2(s2, t2, i2) {
    return [s2[0] + t2, s2[1] + i2];
  }
  _sub(s2, t2) {
    return [s2[0] - t2[0], s2[1] - t2[1]];
  }
  _dist(s2, t2) {
    return Math.sqrt((s2[0] - t2[0]) * (s2[0] - t2[0]) + (s2[1] - t2[1]) * (s2[1] - t2[1]));
  }
  _norm(s2) {
    return Math.sqrt(s2[0] * s2[0] + s2[1] * s2[1]);
  }
  _normalize(s2, t2 = 1) {
    const i2 = t2 / this._norm(s2);
    s2[0] *= i2, s2[1] *= i2;
  }
  _leftPerpendicular(s2) {
    const t2 = -s2[1], i2 = s2[0];
    s2[0] = t2, s2[1] = i2;
  }
  _leftPerp(s2) {
    return [-s2[1], s2[0]];
  }
  _rightPerpendicular(s2) {
    const t2 = s2[1], i2 = -s2[0];
    s2[0] = t2, s2[1] = i2;
  }
  _rightPerp(s2) {
    return [s2[1], -s2[0]];
  }
  _dotProduct(s2, t2) {
    return s2[0] * t2[0] + s2[1] * t2[1];
  }
  _crossProduct(s2, t2) {
    return s2[0] * t2[1] - s2[1] * t2[0];
  }
  _rotateDirect(s2, t2, i2) {
    const h2 = s2[0] * t2 - s2[1] * i2, e2 = s2[0] * i2 + s2[1] * t2;
    s2[0] = h2, s2[1] = e2;
  }
  _makeCtrlPt(s2) {
    const t2 = [s2[0], s2[1]];
    return j$3(t2, 1), t2;
  }
  _addAngledTicks(s2, t2, i2, h2) {
    const e2 = this._sub(i2, t2);
    this._normalize(e2);
    const r2 = this._crossProduct(e2, this._sub(h2, t2));
    let _2;
    _2 = r2 > 0 ? this._rightPerp(e2) : this._leftPerp(e2);
    const c2 = Math.abs(r2) / 2, u2 = [];
    u2.push([t2[0] + (_2[0] - e2[0]) * c2, t2[1] + (_2[1] - e2[1]) * c2]), u2.push(t2), u2.push(i2), u2.push([i2[0] + (_2[0] + e2[0]) * c2, i2[1] + (_2[1] + e2[1]) * c2]), s2.push(u2);
  }
  _addBezier2(s2, t2, i2, h2, e2) {
    if (e2-- == 0)
      return void s2.push(h2);
    const r2 = this._mid(t2, i2), _2 = this._mid(i2, h2), c2 = this._mid(r2, _2);
    this._addBezier2(s2, t2, r2, c2, e2), this._addBezier2(s2, c2, _2, h2, e2);
  }
  _addBezier3(s2, t2, i2, h2, e2, r2) {
    if (r2-- == 0)
      return void s2.push(e2);
    const _2 = this._mid(t2, i2), c2 = this._mid(i2, h2), u2 = this._mid(h2, e2), o2 = this._mid(_2, c2), n2 = this._mid(c2, u2), a2 = this._mid(o2, n2);
    this._addBezier3(s2, t2, _2, o2, a2, r2), this._addBezier3(s2, a2, n2, u2, e2, r2);
  }
  _add90DegArc(s2, t2, i2, h2, e2) {
    const r2 = e2 != null ? e2 : this._crossProduct(this._sub(i2, t2), this._sub(h2, t2)) > 0, _2 = this._mid(t2, i2), c2 = this._sub(_2, t2);
    r2 ? this._leftPerpendicular(c2) : this._rightPerpendicular(c2), _2[0] += c2[0], _2[1] += c2[1], this._addBezier3(s2, t2, this._mix(t2, 0.33333, _2, 0.66667), this._mix(i2, 0.33333, _2, 0.66667), i2, 4);
  }
  _addArrow(s2, t2, i2) {
    const h2 = t2[0], e2 = t2[1], r2 = t2[t2.length - 1], _2 = this._sub(h2, e2);
    this._normalize(_2);
    const c2 = this._crossProduct(_2, this._sub(r2, e2)), u2 = 0.5 * c2, o2 = this._leftPerp(_2), n2 = [r2[0] - o2[0] * c2, r2[1] - o2[1] * c2], a2 = t2.length - 1, p2 = [];
    p2.push(i2 ? [-o2[0], -o2[1]] : o2);
    let l2 = [-_2[0], -_2[1]];
    for (let d2 = 1; d2 < a2 - 1; d2++) {
      const s3 = this._sub(t2[d2 + 1], t2[d2]);
      this._normalize(s3);
      const i3 = this._dotProduct(s3, l2), h3 = this._crossProduct(s3, l2), e3 = Math.sqrt((1 + i3) / 2), r3 = this._sub(s3, l2);
      this._normalize(r3), r3[0] /= e3, r3[1] /= e3, p2.push(h3 < 0 ? [-r3[0], -r3[1]] : r3), l2 = s3;
    }
    p2.push(this._rightPerp(l2));
    for (let d2 = p2.length - 1; d2 > 0; d2--)
      s2.push([t2[d2][0] + p2[d2][0] * u2, t2[d2][1] + p2[d2][1] * u2]);
    s2.push([n2[0] + p2[0][0] * u2, n2[1] + p2[0][1] * u2]), s2.push([n2[0] + p2[0][0] * c2, n2[1] + p2[0][1] * c2]), s2.push(h2), s2.push([n2[0] - p2[0][0] * c2, n2[1] - p2[0][1] * c2]), s2.push([n2[0] - p2[0][0] * u2, n2[1] - p2[0][1] * u2]);
    for (let d2 = 1; d2 < p2.length; d2++)
      s2.push([t2[d2][0] - p2[d2][0] * u2, t2[d2][1] - p2[d2][1] * u2]);
  }
  _cp2(s2, t2, i2) {
    return s2.length >= 2 ? s2[1] : this._add2(s2[0], t2 * this._defaultSize, i2 * this._defaultSize);
  }
  _cp3(s2, t2, i2, h2) {
    if (s2.length >= 3)
      return s2[2];
    const e2 = this._mix(s2[0], 1 - i2, t2, i2), r2 = this._sub(t2, s2[0]);
    return this._normalize(r2), this._rightPerpendicular(r2), [e2[0] + r2[0] * h2 * this._defaultSize, e2[1] + r2[1] * h2 * this._defaultSize];
  }
  _arrowPath(s2) {
    if (s2.length > 2)
      return s2;
    const t2 = s2[0], i2 = this._cp2(s2, -4, 0), h2 = this._sub(t2, i2);
    this._normalize(h2);
    const e2 = this._rightPerp(h2);
    return [t2, i2, [t2[0] + (e2[0] - h2[0]) * this._defaultSize, t2[1] + (e2[1] - h2[1]) * this._defaultSize]];
  }
  _arrowLastSeg(s2) {
    const t2 = s2[0], i2 = this._cp2(s2, -4, 0);
    let h2;
    if (s2.length >= 3)
      h2 = s2[s2.length - 1];
    else {
      const s3 = this._sub(t2, i2);
      this._normalize(s3);
      const e2 = this._rightPerp(s3);
      h2 = [t2[0] + (e2[0] - s3[0]) * this._defaultSize, t2[1] + (e2[1] - s3[1]) * this._defaultSize];
    }
    return [i2, h2];
  }
  _processGeom(s2) {
    if (!s2)
      return null;
    const t2 = [];
    for (const i2 of s2) {
      if (!i2 || i2.length === 0)
        continue;
      const s3 = i2.length;
      let h2 = i2[0];
      switch (this._rule) {
        case R$1.PerpendicularFromFirstSegment: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 4), r2 = [];
          r2.push(e2), r2.push(this._mid(h2, s4)), t2.push(r2);
          break;
        }
        case R$1.ReversedFirstSegment: {
          const s4 = this._cp2(i2, 0, -1);
          t2.push([s4, h2]);
          break;
        }
        case R$1.PerpendicularToSecondSegment: {
          const s4 = this._cp2(i2, -4, 1), e2 = this._cp3(i2, s4, 0.882353, -1.94), r2 = [];
          r2.push(this._mid(s4, e2)), r2.push(h2), t2.push(r2);
          break;
        }
        case R$1.SecondSegmentWithTicks: {
          const s4 = this._cp2(i2, -4, 1), e2 = this._cp3(i2, s4, 0.882353, -1.94), r2 = this._sub(e2, s4);
          let _2;
          _2 = this._crossProduct(r2, this._sub(h2, s4)) > 0 ? this._rightPerp(_2) : this._leftPerp(r2);
          const c2 = [];
          c2.push([s4[0] + (_2[0] - r2[0]) / 3, s4[1] + (_2[1] - r2[1]) / 3]), c2.push(s4), c2.push(e2), c2.push([e2[0] + (_2[0] + r2[0]) / 3, e2[1] + (_2[1] + r2[1]) / 3]), t2.push(c2);
          break;
        }
        case R$1.DoublePerpendicular: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 3), r2 = this._mid(h2, s4), _2 = this._sub(r2, e2);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(h2, e2));
          this._leftPerpendicular(_2);
          const u2 = [];
          u2.push(h2), u2.push([e2[0] + _2[0] * c2, e2[1] + _2[1] * c2]), t2.push(u2);
          const o2 = [];
          o2.push([e2[0] - _2[0] * c2, e2[1] - _2[1] * c2]), o2.push(s4), t2.push(o2);
          break;
        }
        case R$1.OppositeToFirstSegment: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 3), r2 = this._mid(h2, s4), _2 = this._sub(r2, e2);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(h2, e2));
          this._leftPerpendicular(_2);
          const u2 = [];
          u2.push([e2[0] + _2[0] * c2, e2[1] + _2[1] * c2]), u2.push([e2[0] - _2[0] * c2, e2[1] - _2[1] * c2]), t2.push(u2);
          break;
        }
        case R$1.TriplePerpendicular: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 4), r2 = this._mid(h2, s4), _2 = this._sub(r2, e2);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(h2, e2));
          this._leftPerpendicular(_2);
          const u2 = [];
          u2.push([e2[0] + _2[0] * c2 * 0.8, e2[1] + _2[1] * c2 * 0.8]), u2.push([r2[0] + 0.8 * (h2[0] - r2[0]), r2[1] + 0.8 * (h2[1] - r2[1])]), t2.push(u2), t2.push([e2, r2]);
          const o2 = [];
          o2.push([e2[0] - _2[0] * c2 * 0.8, e2[1] - _2[1] * c2 * 0.8]), o2.push([r2[0] + 0.8 * (s4[0] - r2[0]), r2[1] + 0.8 * (s4[1] - r2[1])]), t2.push(o2);
          break;
        }
        case R$1.HalfCircleFirstSegment: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 4), r2 = this._mid(h2, s4);
          let _2 = this._sub(s4, h2);
          const c2 = Math.cos(Math.PI / 18), u2 = Math.sin(Math.PI / 18), o2 = Math.sqrt((1 + c2) / 2), n2 = Math.sqrt((1 - c2) / 2), a2 = [];
          let p2;
          this._crossProduct(_2, this._sub(e2, h2)) > 0 ? (a2.push(h2), _2 = this._sub(h2, r2), p2 = s4) : (a2.push(s4), _2 = this._sub(s4, r2), p2 = h2), this._rotateDirect(_2, o2, n2), _2[0] /= o2, _2[1] /= o2;
          for (let t3 = 1; t3 <= 18; t3++)
            a2.push(this._add(r2, _2)), this._rotateDirect(_2, c2, u2);
          a2.push(p2), t2.push(a2);
          break;
        }
        case R$1.HalfCircleSecondSegment: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 1, -1);
          let r2 = this._sub(h2, s4);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, s4)) / 2;
          this._leftPerpendicular(r2);
          const c2 = [s4[0] + r2[0] * _2, s4[1] + r2[1] * _2];
          r2 = this._sub(s4, c2);
          const u2 = Math.cos(Math.PI / 18);
          let o2 = Math.sin(Math.PI / 18);
          _2 > 0 && (o2 = -o2);
          const n2 = [s4];
          for (let t3 = 1; t3 <= 18; t3++)
            this._rotateDirect(r2, u2, o2), n2.push(this._add(c2, r2));
          t2.push(n2);
          break;
        }
        case R$1.HalfCircleExtended: {
          const e2 = this._cp2(i2, 0, -2), r2 = this._cp3(i2, e2, 1, -1);
          let _2;
          if (s3 >= 4)
            _2 = i2[3];
          else {
            const s4 = this._sub(h2, e2);
            _2 = this._add(r2, s4);
          }
          const c2 = this._dist(e2, r2) / 2 / 0.75, u2 = this._sub(e2, h2);
          this._normalize(u2, c2);
          const o2 = this._sub(r2, _2);
          this._normalize(o2, c2);
          const n2 = [_2, r2];
          t2.push(n2);
          const a2 = [this._clone(r2)];
          this._addBezier3(a2, r2, this._add(r2, o2), this._add(e2, u2), e2, 4), a2.push(h2), t2.push(a2);
          break;
        }
        case R$1.OpenCircle: {
          const s4 = this._cp2(i2, -2, 0), e2 = this._sub(s4, h2), r2 = Math.cos(Math.PI / 18), _2 = -Math.sin(Math.PI / 18), c2 = [s4];
          for (let t3 = 1; t3 <= 33; t3++)
            this._rotateDirect(e2, r2, _2), c2.push(this._add(h2, e2));
          t2.push(c2);
          break;
        }
        case R$1.CoverageEdgesWithTicks: {
          const e2 = this._cp2(i2, 0, -1);
          let r2, _2;
          if (s3 >= 3)
            r2 = i2[2];
          else {
            const s4 = this._sub(e2, h2), t3 = this._leftPerp(s4);
            r2 = [h2[0] + t3[0] - 0.25 * s4[0], h2[1] + t3[1] - 0.25 * s4[1]];
          }
          if (s3 >= 4)
            _2 = i2[3];
          else {
            const s4 = this._mid(h2, e2), t3 = this._sub(h2, e2);
            this._normalize(t3), this._leftPerpendicular(t3);
            const i3 = this._crossProduct(t3, this._sub(r2, s4));
            this._rightPerpendicular(t3), _2 = [r2[0] + t3[0] * i3 * 2, r2[1] + t3[1] * i3 * 2];
          }
          const c2 = this._sub(e2, h2);
          let u2, o2;
          u2 = this._crossProduct(c2, this._sub(r2, h2)) > 0 ? this._rightPerp(c2) : this._leftPerp(c2), o2 = [], o2.push(r2), o2.push(h2), o2.push([h2[0] + (u2[0] - c2[0]) / 3, h2[1] + (u2[1] - c2[1]) / 3]), t2.push(o2), u2 = this._crossProduct(c2, this._sub(_2, e2)) > 0 ? this._rightPerp(u2) : this._leftPerp(c2), o2 = [], o2.push([e2[0] + (u2[0] + c2[0]) / 3, e2[1] + (u2[1] + c2[1]) / 3]), o2.push(e2), o2.push(_2), t2.push(o2);
          break;
        }
        case R$1.GapExtentWithDoubleTicks: {
          const e2 = this._cp2(i2, 0, 2), r2 = this._cp3(i2, e2, 0, 1);
          let _2;
          if (s3 >= 4)
            _2 = i2[3];
          else {
            const s4 = this._sub(e2, h2);
            _2 = this._add(r2, s4);
          }
          this._addAngledTicks(t2, h2, e2, this._mid(r2, _2)), this._addAngledTicks(t2, r2, _2, this._mid(h2, e2));
          break;
        }
        case R$1.GapExtentMidline: {
          const e2 = this._cp2(i2, 2, 0), r2 = this._cp3(i2, e2, 0, 1);
          let _2;
          if (s3 >= 4)
            _2 = i2[3];
          else {
            const s4 = this._sub(e2, h2);
            _2 = this._add(r2, s4);
          }
          const c2 = [];
          c2.push(this._mid(h2, r2)), c2.push(this._mid(e2, _2)), t2.push(c2);
          break;
        }
        case R$1.Chevron: {
          const e2 = this._cp2(i2, -1, -1);
          let r2;
          if (s3 >= 3)
            r2 = i2[2];
          else {
            const s4 = this._sub(e2, h2);
            this._leftPerpendicular(s4), r2 = this._add(h2, s4);
          }
          t2.push([e2, this._makeCtrlPt(h2), r2]);
          break;
        }
        case R$1.PerpendicularWithArc: {
          const s4 = this._cp2(i2, 0, -2), e2 = this._cp3(i2, s4, 0.5, -1);
          let r2 = this._sub(s4, h2);
          const _2 = this._norm(r2);
          r2[0] /= _2, r2[1] /= _2;
          const c2 = this._crossProduct(r2, this._sub(e2, h2));
          let u2 = this._dotProduct(r2, this._sub(e2, h2));
          u2 < 0.05 * _2 ? u2 = 0.05 * _2 : u2 > 0.95 * _2 && (u2 = 0.95 * _2);
          const o2 = [h2[0] + r2[0] * u2, h2[1] + r2[1] * u2];
          this._leftPerpendicular(r2);
          let n2 = [];
          n2.push([o2[0] - r2[0] * c2, o2[1] - r2[1] * c2]), n2.push([o2[0] + r2[0] * c2, o2[1] + r2[1] * c2]), t2.push(n2);
          const a2 = [s4[0] + r2[0] * c2, s4[1] + r2[1] * c2];
          r2 = this._sub(s4, a2);
          const p2 = Math.cos(Math.PI / 18);
          let l2 = Math.sin(Math.PI / 18);
          c2 < 0 && (l2 = -l2), n2 = [h2, s4];
          for (let t3 = 1; t3 <= 9; t3++)
            this._rotateDirect(r2, p2, l2), n2.push(this._add(a2, r2));
          t2.push(n2);
          break;
        }
        case R$1.ClosedHalfCircle: {
          const s4 = this._cp2(i2, 2, 0), e2 = this._mid(h2, s4), r2 = this._sub(s4, e2), _2 = Math.cos(Math.PI / 18), c2 = Math.sin(Math.PI / 18), u2 = [h2, s4];
          for (let t3 = 1; t3 <= 18; t3++)
            this._rotateDirect(r2, _2, c2), u2.push(this._add(e2, r2));
          t2.push(u2);
          break;
        }
        case R$1.TripleParallelExtended: {
          const s4 = this._cp2(i2, 0, -2), r2 = this._cp3(i2, s4, 1, -2), _2 = this._mid(h2, s4), c2 = this._sub(r2, s4);
          this._normalize(c2);
          const u2 = Math.abs(this._crossProduct(c2, this._sub(_2, s4))) / 2, o2 = this._dist(s4, r2), n2 = [s4, h2];
          n2.push([h2[0] + c2[0] * o2 * 0.5, h2[1] + c2[1] * o2 * 0.5]), t2.push(n2);
          const a2 = [];
          a2.push([_2[0] - c2[0] * u2, _2[1] - c2[1] * u2]), a2.push([_2[0] + c2[0] * o2 * 0.375, _2[1] + c2[1] * o2 * 0.375]), j$3(a2[a2.length - 1], 1), a2.push([_2[0] + c2[0] * o2 * 0.75, _2[1] + c2[1] * o2 * 0.75]), t2.push(a2);
          const p2 = [s4, r2];
          t2.push(p2);
          break;
        }
        case R$1.ParallelWithTicks: {
          const s4 = this._cp2(i2, 3, 0), e2 = this._cp3(i2, s4, 0.5, -1), r2 = this._sub(e2, s4);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, h2));
          this._leftPerpendicular(r2), this._addAngledTicks(t2, h2, s4, e2), this._addAngledTicks(t2, this._mix(h2, 1, r2, _2), this._mix(s4, 1, r2, _2), this._mid(h2, s4));
          break;
        }
        case R$1.Parallel: {
          const s4 = this._cp2(i2, 3, 0), e2 = this._cp3(i2, s4, 0.5, -1), r2 = this._sub(s4, h2);
          this._normalize(r2);
          const _2 = this._leftPerp(r2), c2 = this._crossProduct(r2, this._sub(e2, h2));
          let u2 = [h2, s4];
          t2.push(u2), u2 = [], u2.push([h2[0] + _2[0] * c2, h2[1] + _2[1] * c2]), u2.push([s4[0] + _2[0] * c2, s4[1] + _2[1] * c2]), t2.push(u2);
          break;
        }
        case R$1.PerpendicularToFirstSegment: {
          const s4 = this._cp2(i2, 3, 0), e2 = this._cp3(i2, s4, 0.5, -1), r2 = this._mid(h2, s4), _2 = this._sub(s4, h2);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(e2, h2));
          this._leftPerpendicular(_2);
          const u2 = [];
          u2.push([r2[0] - _2[0] * c2 * 0.25, r2[1] - _2[1] * c2 * 0.25]), u2.push([r2[0] + _2[0] * c2 * 1.25, r2[1] + _2[1] * c2 * 1.25]), t2.push(u2);
          break;
        }
        case R$1.ParallelOffset: {
          const s4 = this._cp2(i2, 3, 0), e2 = this._cp3(i2, s4, 0.5, -1), r2 = this._sub(s4, h2);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, h2));
          this._leftPerpendicular(r2);
          const c2 = [];
          c2.push([h2[0] - r2[0] * _2, h2[1] - r2[1] * _2]), c2.push([s4[0] - r2[0] * _2, s4[1] - r2[1] * _2]), t2.push(c2);
          const u2 = [];
          u2.push([h2[0] + r2[0] * _2, h2[1] + r2[1] * _2]), u2.push([s4[0] + r2[0] * _2, s4[1] + r2[1] * _2]), t2.push(u2);
          break;
        }
        case R$1.OffsetOpposite: {
          const s4 = this._cp2(i2, 3, 0), e2 = this._cp3(i2, s4, 0.5, -1), r2 = this._sub(s4, h2);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, h2));
          this._leftPerpendicular(r2);
          const c2 = [];
          c2.push([h2[0] - r2[0] * _2, h2[1] - r2[1] * _2]), c2.push([s4[0] - r2[0] * _2, s4[1] - r2[1] * _2]), t2.push(c2);
          break;
        }
        case R$1.OffsetSame: {
          const s4 = this._cp2(i2, 3, 0), e2 = this._cp3(i2, s4, 0.5, -1), r2 = this._sub(s4, h2);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, h2));
          this._leftPerpendicular(r2);
          const c2 = [];
          c2.push([h2[0] + r2[0] * _2, h2[1] + r2[1] * _2]), c2.push([s4[0] + r2[0] * _2, s4[1] + r2[1] * _2]), t2.push(c2);
          break;
        }
        case R$1.CircleWithArc: {
          let r2 = this._cp2(i2, 3, 0);
          const _2 = this._cp3(i2, r2, 0.5, -1);
          let c2, u2;
          if (s3 >= 4)
            c2 = i2[3], u2 = this._crossProduct(this._sub(c2, r2), this._sub(_2, r2)) > 0;
          else {
            c2 = r2, u2 = this._crossProduct(this._sub(c2, h2), this._sub(_2, h2)) > 0;
            const s4 = 24 * this._geomUnitsPerPoint, t3 = this._sub(c2, h2);
            this._normalize(t3, s4);
            const i3 = Math.sqrt(2) / 2;
            this._rotateDirect(t3, i3, u2 ? i3 : -i3), r2 = this._add(h2, t3);
          }
          const o2 = this._sub(r2, h2), n2 = Math.cos(Math.PI / 18), a2 = Math.sin(Math.PI / 18), p2 = [r2];
          for (let s4 = 1; s4 <= 36; s4++)
            this._rotateDirect(o2, n2, a2), p2.push(this._add(h2, o2));
          this._add90DegArc(p2, r2, c2, _2, u2), j$3(p2[p2.length - 8], 1), t2.push(p2);
          break;
        }
        case R$1.DoubleJog: {
          let e2, r2, _2 = this._cp2(i2, -3, 1);
          if (e2 = s3 >= 3 ? i2[2] : this._add(h2, this._sub(h2, _2)), s3 >= 4)
            r2 = i2[3];
          else {
            const s4 = h2;
            h2 = _2, r2 = e2;
            const t3 = this._dist(h2, s4), i3 = this._dist(r2, s4);
            let c3 = 30 * this._geomUnitsPerPoint;
            0.5 * t3 < c3 && (c3 = 0.5 * t3), 0.5 * i3 < c3 && (c3 = 0.5 * i3), _2 = this._mix(h2, c3 / t3, s4, (t3 - c3) / t3), e2 = this._mix(r2, c3 / i3, s4, (i3 - c3) / i3);
          }
          const c2 = this._mid(h2, _2), u2 = this._mid(r2, e2), o2 = this._dist(h2, _2), n2 = this._dist(e2, r2);
          let a2 = Math.min(o2, n2) / 8;
          a2 = Math.min(a2, 24 * this._geomUnitsPerPoint);
          const p2 = Math.cos(Math.PI / 4);
          let l2 = this._sub(h2, _2);
          this._normalize(l2, a2), this._crossProduct(l2, this._sub(r2, _2)) > 0 ? this._rotateDirect(l2, p2, -p2) : this._rotateDirect(l2, p2, p2);
          let d2 = [];
          d2.push(_2), d2.push(this._add(c2, l2)), d2.push(this._sub(c2, l2)), d2.push(h2), t2.push(d2), l2 = this._sub(r2, e2), this._normalize(l2, a2), this._crossProduct(l2, this._sub(h2, e2)) < 0 ? this._rotateDirect(l2, p2, p2) : this._rotateDirect(l2, p2, -p2), d2 = [], d2.push(e2), d2.push(this._add(u2, l2)), d2.push(this._sub(u2, l2)), d2.push(r2), t2.push(d2);
          break;
        }
        case R$1.PerpendicularOffset: {
          const s4 = this._cp2(i2, -4, 1), e2 = this._cp3(i2, s4, 0.882353, -1.94), r2 = this._sub(e2, s4);
          this._crossProduct(r2, this._sub(h2, s4)) > 0 ? this._rightPerpendicular(r2) : this._leftPerpendicular(r2);
          const _2 = [r2[0] / 8, r2[1] / 8], c2 = this._sub(this._mid(s4, e2), _2);
          t2.push([c2, h2]);
          break;
        }
        case R$1.LineExcludingLastSegment: {
          const s4 = this._arrowPath(i2), h3 = [];
          let e2 = s4.length - 2;
          for (; e2--; )
            h3.push(s4[e2]);
          t2.push(h3);
          break;
        }
        case R$1.MultivertexArrow: {
          const s4 = this._arrowPath(i2), h3 = [];
          this._addArrow(h3, s4, false), t2.push(h3);
          break;
        }
        case R$1.CrossedArrow: {
          const s4 = this._arrowPath(i2), h3 = [];
          this._addArrow(h3, s4, true), t2.push(h3);
          break;
        }
        case R$1.ChevronArrow: {
          const [s4, e2] = this._arrowLastSeg(i2), r2 = 10 * this._geomUnitsPerPoint, _2 = this._sub(h2, s4);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(e2, s4)), u2 = this._leftPerp(_2), o2 = [e2[0] - u2[0] * c2 * 2, e2[1] - u2[1] * c2 * 2], n2 = [];
          n2.push([e2[0] + _2[0] * r2, e2[1] + _2[1] * r2]), n2.push(h2), n2.push([o2[0] + _2[0] * r2, o2[1] + _2[1] * r2]), t2.push(n2);
          break;
        }
        case R$1.ChevronArrowOffset: {
          const [s4, e2] = this._arrowLastSeg(i2), r2 = this._sub(h2, s4);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, s4));
          this._leftPerpendicular(r2);
          const c2 = [e2[0] - r2[0] * _2, e2[1] - r2[1] * _2], u2 = [];
          u2.push([c2[0] + r2[0] * _2 * 0.5, c2[1] + r2[1] * _2 * 0.5]), u2.push(this._mid(c2, h2)), u2.push([c2[0] - r2[0] * _2 * 0.5, c2[1] - r2[1] * _2 * 0.5]), t2.push(u2);
          break;
        }
        case R$1.PartialFirstSegment: {
          const [s4, e2] = this._arrowLastSeg(i2), r2 = this._sub(h2, s4);
          this._normalize(r2);
          const _2 = this._crossProduct(r2, this._sub(e2, s4));
          this._leftPerpendicular(r2);
          const c2 = [e2[0] - r2[0] * _2, e2[1] - r2[1] * _2];
          t2.push([s4, c2]);
          break;
        }
        case R$1.Arch: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 1), r2 = this._sub(h2, s4), _2 = this._mix(e2, 1, r2, 0.55), c2 = this._mix(e2, 1, r2, -0.55), u2 = [h2];
          this._addBezier2(u2, h2, _2, e2, 4), this._addBezier2(u2, e2, c2, s4, 4), t2.push(u2);
          break;
        }
        case R$1.CurvedParallelTicks: {
          const s4 = this._cp2(i2, -4, 1), e2 = this._cp3(i2, s4, 0.882353, -1.94), r2 = this._sub(e2, s4);
          this._crossProduct(r2, this._sub(h2, s4)) > 0 ? this._rightPerpendicular(r2) : this._leftPerpendicular(r2);
          const _2 = [r2[0] / 8, r2[1] / 8], c2 = this._sub(this._mid(s4, e2), _2), u2 = this._sub(this._mix(s4, 0.75, e2, 0.25), _2), o2 = this._sub(this._mix(s4, 0.25, e2, 0.75), _2), n2 = [s4];
          this._addBezier2(n2, s4, u2, c2, 3), this._addBezier2(n2, c2, o2, e2, 3), t2.push(n2);
          for (let i3 = 0; i3 < 8; i3++) {
            const s5 = n2[2 * i3 + 1], h3 = [this._clone(s5)];
            h3.push(this._add(s5, [r2[0] / 4, r2[1] / 4])), t2.push(h3);
          }
          break;
        }
        case R$1.Arc90Degrees: {
          const s4 = this._cp2(i2, 0, -1), e2 = this._cp3(i2, s4, 0.5, 1), r2 = [s4];
          this._add90DegArc(r2, s4, h2, e2), t2.push(r2);
          break;
        }
        case R$1.FullGeometry:
        default:
          t2.push(i2);
      }
    }
    return t2;
  }
}
class u$5 {
  static local() {
    return u$5.instance === null && (u$5.instance = new u$5()), u$5.instance;
  }
  execute(e2, t2, u2, i2) {
    return new s$5(e2, t2, u2);
  }
}
u$5.instance = null;
class s$5 extends U$2 {
  constructor(e2, u2, s2) {
    super(e2, true, true), this._curveHelper = new n$a(), this._beginCut = (u2.beginCut !== void 0 ? u2.beginCut : 1) * s2, this._endCut = (u2.endCut !== void 0 ? u2.endCut : 1) * s2, this._middleCut = (u2.middleCut !== void 0 ? u2.middleCut : 0) * s2, this._invert = u2.invert !== void 0 && u2.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(e2) {
    const t2 = this._beginCut, u2 = this._endCut, s2 = this._middleCut, i2 = this._curveHelper.calculatePathLength(e2), r2 = [];
    if (this._invert)
      if (t2 === 0 && u2 === 0 && s2 === 0)
        ;
      else if (t2 + u2 + s2 >= i2)
        r2.push(e2);
      else {
        let n2 = this._curveHelper.getSubCurve(e2, 0, t2);
        n2 && r2.push(n2), n2 = this._curveHelper.getSubCurve(e2, 0.5 * (i2 - s2), 0.5 * (i2 + s2)), n2 && r2.push(n2), n2 = this._curveHelper.getSubCurve(e2, i2 - u2, u2), n2 && r2.push(n2);
      }
    else if (t2 === 0 && u2 === 0 && s2 === 0)
      r2.push(e2);
    else if (t2 + u2 + s2 >= i2)
      ;
    else if (s2 === 0) {
      const s3 = this._curveHelper.getSubCurve(e2, t2, i2 - u2);
      s3 && r2.push(s3);
    } else {
      let n2 = this._curveHelper.getSubCurve(e2, t2, 0.5 * (i2 - s2));
      n2 && r2.push(n2), n2 = this._curveHelper.getSubCurve(e2, 0.5 * (i2 + s2), i2 - u2), n2 && r2.push(n2);
    }
    return r2.length === 0 ? null : { paths: r2 };
  }
}
const i$5 = 1e-7;
class n$9 {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return this._values.length === 0;
  }
  size() {
    return this._values.length;
  }
  init(t2, s2, e2 = true) {
    if (this._setEmpty(), !t2 || t2.length === 0)
      return false;
    for (let n2 = 0; n2 < t2.length; n2++) {
      let s3 = Math.abs(t2[n2]);
      e2 && s3 < i$5 && (s3 = i$5), this._values.push(s3), this._length += s3;
    }
    return s2 && 1 & t2.length && (this._length *= 2), this._length !== 0 && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, true);
  }
  scale(t2) {
    const s2 = this._values ? this._values.length : 0;
    for (let e2 = 0; e2 < s2; ++e2)
      this._values[e2] *= t2;
    this._length *= t2, this.extPtGap *= t2, this.ctrlPtGap *= t2;
  }
  addValue(t2) {
    this._length += t2, this._values.push(t2);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
}
class h$2 {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
}
var r$b;
!function(t2) {
  t2[t2.FAIL = 0] = "FAIL", t2[t2.END = 1] = "END", t2[t2.CONTINUE = 2] = "CONTINUE";
}(r$b || (r$b = {}));
class a$7 {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = -1, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = false, this.isPartEnd = false;
  }
  isValid() {
    return this.segment !== -1;
  }
  copyTo(t2) {
    t2.segment = this.segment, t2.segmentLength = this.segmentLength, t2.abscissa = this.abscissa, t2.isPathEnd = this.isPathEnd, t2.isPartEnd = this.isPartEnd;
  }
}
class g$3 extends n$a {
  constructor(t2 = 0, s2 = false) {
    super(t2, s2), this._tolerance = e$7, this._currentPosition = new a$7();
  }
  updateTolerance(t2) {
    this._tolerance = e$7 * t2;
  }
  init(t2, s2, e2 = true) {
    return e2 ? (this._patternLength = s2.length(), this._partExtPtGap = s2.extPtGap, this._partCtrlPtGap = s2.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._path = t2, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t2, s2 = r$b.FAIL) {
    const e2 = new a$7();
    return !!this._nextPosition(t2, e2, null, s2) && (e2.copyTo(this._currentPosition), true);
  }
  curPointAndAngle(t2) {
    t2.pt = this._getPoint(this._currentPosition);
    const [s2, e2] = this._getAngle(this._currentPosition);
    t2.ca = s2, t2.sa = e2;
  }
  nextPointAndAngle(t2, s2, e2 = r$b.FAIL) {
    const i2 = new a$7();
    if (!this._nextPosition(t2, i2, null, e2))
      return false;
    i2.copyTo(this._currentPosition), s2.pt = this._getPoint(i2);
    const [n2, h2] = this._getAngle(i2);
    return s2.ca = n2, s2.sa = h2, true;
  }
  nextCurve(t2) {
    if (t2 === 0)
      return null;
    const s2 = [], e2 = new a$7();
    return this._nextPosition(t2, e2, s2, r$b.END) ? (e2.copyTo(this._currentPosition), s2) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    if (this._currentPosition.segment === -1)
      throw new Error("missing segment");
    return this._path[this._currentPosition.segment + 1];
  }
  _nextPosition(t2, s2, e2, i2) {
    if (this._currentPosition.isPathEnd)
      return false;
    let n2 = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (n2 /= this._currentPosition.segmentLength), this._currentPosition.copyTo(s2); s2.abscissa + t2 * this._partLengthRatio > s2.segmentLength + this._tolerance; ) {
      if (e2) {
        if (e2.length === 0)
          if (n2 === 0) {
            const t4 = this._path[s2.segment];
            e2.push([t4[0], t4[1]]);
          } else
            e2.push(this.getSegCoord2D(this._path, s2.segment, n2));
        const t3 = this._path[s2.segment + 1];
        e2.push([t3[0], t3[1]]);
      }
      if (n2 = 0, t2 -= (s2.segmentLength - s2.abscissa) / this._partLengthRatio, this._partSegCount)
        s2.segment = this._nextSegment(), s2.segmentLength = this.calculateSegLength(this._path, s2.segment), s2.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart())
          return i2 !== r$b.FAIL && (s2.segmentLength = this.calculateSegLength(this._path, s2.segment), s2.isPartEnd = true, i2 === r$b.END ? (s2.abscissa = s2.segmentLength, s2.isPathEnd = true) : s2.abscissa = s2.segmentLength + t2, true);
        this._currentPosition.copyTo(s2);
      }
    }
    if (s2.abscissa += t2 * this._partLengthRatio, e2) {
      if (e2.length === 0)
        if (n2 === 0) {
          const t4 = this._path[s2.segment];
          e2.push([t4[0], t4[1]]);
        } else
          e2.push(this.getSegCoord2D(this._path, s2.segment, n2));
      const t3 = s2.abscissa / s2.segmentLength;
      if (t3 === 1) {
        const t4 = this._path[s2.segment + 1];
        e2.push([t4[0], t4[1]]);
      } else
        e2.push(this.getSegCoord2D(this._path, s2.segment, t3));
    }
    return this._partSegCount || Math.abs(s2.abscissa - s2.segmentLength) < this._tolerance && (s2.isPathEnd = this._partIsLast, s2.isPartEnd = true), true;
  }
  _getPoint(t2) {
    if (t2.segment === -1)
      throw new Error("missing segment");
    const s2 = t2.segmentLength <= 0 ? 0 : t2.abscissa / t2.segmentLength;
    return this.getSegCoord2D(this._path, t2.segment, s2);
  }
  _getAngle(t2) {
    if (t2.segment === -1)
      throw new Error("missing segment");
    const s2 = t2.segmentLength <= 0 ? 0 : t2.abscissa / t2.segmentLength;
    return this.getSegAngleCS(this._path, t2.segment, s2);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; )
      this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment())
      return false;
    for (this._partLength = 0, this._partIsLast = true, this._partSegCount = 0; this._hasNextSegment(); )
      if (this._partLength += this.calculateSegLength(this._path, this._nextSegment()), this._partSegCount++, I(this._path[this._getEndPointIndex()]) === 1) {
        this._partIsLast = !this._hasNextSegment();
        break;
      }
    let s2 = this._partSegCount;
    for (; s2; )
      this._previousSegment(), --s2;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.calculateSegLength(this._path, this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = false, --this._partSegCount;
    const e2 = this._getStartPointIndex();
    this._ctrlPtBegin = I(this._path[e2]) === 1;
    let i2 = e2 + this._partSegCount + 1;
    if (i2 >= this._path.length && (i2 = 0), this._ctrlPtEnd = I(this._path[i2]) === 1, this._patternLength > 0) {
      const t2 = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, s3 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let e3 = Math.round((this._partLength - (t2 + s3)) / this._patternLength);
      e3 <= 0 && (e3 = t2 + s3 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t2 + s3 + e3 * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else
      this._partLengthRatio = 1;
    return true;
  }
  _hasNextSegment() {
    return this._seg < this._path.length - 2;
  }
  _previousSegment() {
    return --this._seg;
  }
  _nextSegment() {
    return ++this._seg;
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
}
class r$a {
  static local() {
    return r$a.instance === null && (r$a.instance = new r$a()), r$a.instance;
  }
  execute(t2, e2, s2, a2) {
    return new n$8(t2, e2, s2);
  }
}
r$a.instance = null;
class n$8 extends U$2 {
  constructor(t2, e2, s2) {
    var _a, _b;
    super(t2, true, true), this._firstCurve = null, this._walker = new g$3(), this._walker.updateTolerance(s2), this._endings = e2.lineDashEnding, this._customDashPos = -((_a = e2.offsetAlongLine) != null ? _a : 0) * s2, this._offsetAtEnd = ((_b = e2.customEndingOffset) != null ? _b : 0) * s2, this._pattern = new n$9(), this._pattern.init(e2.dashTemplate, true), this._pattern.scale(s2);
  }
  processPath(t2) {
    if (this._pattern.length() === 0)
      return this.iteratePath = false, { paths: [t2] };
    if (!this.iteratePath) {
      let e2 = true;
      switch (this._endings) {
        case k$2.HalfPattern:
        case k$2.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case k$2.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case k$2.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case k$2.NoConstraint:
          this.isClosed || (e2 = false);
          break;
        case k$2.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const a3 = this._walker.calculatePathLength(t2);
      if (this._pattern.isEmpty() || a3 < 0.1 * this._pattern.length())
        return { paths: [t2] };
      if (!this._walker.init(t2, this._pattern, e2))
        return { paths: [t2] };
    }
    let a2;
    if (this.iteratePath)
      a2 = this._pattern.nextValue();
    else {
      let t3;
      switch (this._endings) {
        case k$2.HalfPattern:
        default:
          t3 = 0.5 * this._pattern.firstValue();
          break;
        case k$2.HalfGap:
          t3 = 0.5 * -this._pattern.lastValue();
          break;
        case k$2.FullGap:
          t3 = -this._pattern.lastValue();
          break;
        case k$2.FullPattern:
          t3 = 0;
          break;
        case k$2.NoConstraint:
        case k$2.Custom:
          t3 = -this._customDashPos;
      }
      let e2 = t3 / this._pattern.length();
      e2 -= Math.floor(e2), t3 = e2 * this._pattern.length(), this._pattern.reset(), a2 = this._pattern.nextValue();
      let i3 = false;
      for (; t3 >= a2; )
        t3 -= a2, a2 = this._pattern.nextValue(), i3 = !i3;
      a2 -= t3, i3 ? (this._walker.nextPosition(a2), a2 = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(a2), a2 = this._pattern.nextValue(), this._walker.nextPosition(a2), a2 = this._pattern.nextValue());
    }
    let i2 = this._walker.nextCurve(a2);
    return i2 ? this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (this._firstCurve.splice(0, 1), s$6.mergePath(i2, this._firstCurve), this._firstCurve = null)) : (a2 = this._pattern.nextValue(), !this._walker.nextPosition(a2) || this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (i2 = this._firstCurve, this._firstCurve = null)) : this.iteratePath = true) : (this.iteratePath = false, i2 = this._firstCurve, this._firstCurve = null), { paths: [i2] };
  }
}
class r$9 {
  static local() {
    return r$9.instance === null && (r$9.instance = new r$9()), r$9.instance;
  }
  execute(t2, i2, e2, s2) {
    return new m$3(t2, i2, e2);
  }
}
r$9.instance = null;
class m$3 {
  constructor(t2, i2, r2) {
    switch (this._inputGeometries = t2, this._curveHelper = new n$a(), this._width = (i2.width !== void 0 ? i2.width : 2) * r2, i2.method) {
      case B$2.Mitered:
      default:
        this._method = O$1.Mitered;
        break;
      case B$2.Bevelled:
        this._method = O$1.Bevelled;
        break;
      case B$2.Rounded:
      case B$2.TrueBuffer:
        this._method = O$1.Rounded;
        break;
      case B$2.Square:
        this._method = O$1.Square;
    }
    this._option = i2.option, this._offsetFlattenError = e$7 * r2;
  }
  next() {
    let e2 = this._inputGeometries.next();
    for (; e2; ) {
      if (u$9(e2) && this._width > 0) {
        if (Math.min(e2.xmax - e2.xmin, e2.ymax - e2.ymin) - 2 * this._width < 0)
          return e2;
        const t2 = [];
        return t2.push([[e2.xmin, e2.ymin], [e2.xmin, e2.ymax], [e2.xmax, e2.ymax], [e2.xmax, e2.ymin], [e2.xmin, e2.ymin]]), t2.push([[e2.xmin + this._width, e2.ymin + this._width], [e2.xmax - this._width, e2.ymin + this._width], [e2.xmax - this._width, e2.ymax - this._width], [e2.xmin + this._width, e2.ymax - this._width], [e2.xmin + this._width, e2.ymin + this._width]]), { rings: t2 };
      }
      if (y$4(e2) && this._width > 0) {
        const t2 = [];
        for (const i2 of e2.rings) {
          const e3 = this._curveHelper.calculatePathLength(i2), s2 = this._curveHelper.offset(i2, this._width, this._method, 4, this._offsetFlattenError);
          s2 && (e3 < 0 && s2.reverse(), t2.push(s2));
        }
        if (t2.length)
          return { rings: t2 };
      }
      e2 = this._inputGeometries.next();
    }
    return null;
  }
}
class s$4 {
  static local() {
    return s$4.instance === null && (s$4.instance = new s$4()), s$4.instance;
  }
  execute(t2, i2, s2, n2) {
    return new e$6(t2, i2, s2);
  }
}
s$4.instance = null;
class e$6 extends U$2 {
  constructor(t2, s2, e2) {
    super(t2, false, true), this._curveHelper = new n$a(), this._length = (s2.length !== void 0 ? s2.length : 20) * e2, this._angle = s2.angle !== void 0 ? s2.angle : 225, this._position = s2.position !== void 0 ? s2.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = false;
  }
  processPath(t2) {
    if (this._curveHelper.isEmpty(t2, false))
      return null;
    const i2 = t2[0], s2 = t2[t2.length - 1], e2 = [s2[0] - i2[0], s2[1] - i2[1]];
    this._curveHelper.normalize(e2);
    const n2 = [i2[0] + (s2[0] - i2[0]) * this._position / 100, i2[1] + (s2[1] - i2[1]) * this._position / 100], h2 = Math.cos((90 - this._angle) / 180 * Math.PI);
    let r2 = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (r2 = -r2), this._mirror = !this._mirror;
    return { paths: [[i2, [n2[0] - this._length / 2 * h2, n2[1] - this._length / 2 * r2], [n2[0] + this._length / 2 * h2, n2[1] + this._length / 2 * r2], s2]] };
  }
}
class n$7 {
  static local() {
    return n$7.instance === null && (n$7.instance = new n$7()), n$7.instance;
  }
  execute(t2, s2, e2, i2) {
    return new r$8(t2, s2, e2);
  }
}
n$7.instance = null;
class r$8 {
  constructor(t2, s2, e2) {
    this._inputGeometries = t2, this._offsetX = s2.offsetX !== void 0 ? s2.offsetX * e2 : 0, this._offsetY = s2.offsetY !== void 0 ? -s2.offsetY * e2 : 0;
  }
  next() {
    let n2 = this._inputGeometries.next();
    for (; n2; ) {
      if (u$9(n2))
        return { xmin: n2.xmin + this._offsetX, xmax: n2.xmax + this._offsetX, ymin: n2.ymin + this._offsetY, ymax: n2.ymax + this._offsetY };
      if (y$4(n2)) {
        const s2 = y$3(n2);
        return this._moveMultipath(s2.rings, this._offsetX, this._offsetY), s2;
      }
      if (f$7(n2)) {
        const s2 = y$3(n2);
        return this._moveMultipath(s2.paths, this._offsetX, this._offsetY), s2;
      }
      if (l$a(n2)) {
        const s2 = y$3(n2);
        return this._movePath(s2.points, this._offsetX, this._offsetY), s2;
      }
      if (s$8(n2))
        return { x: n2.x + this._offsetX, y: n2.y + this._offsetY };
      n2 = this._inputGeometries.next();
    }
    return null;
  }
  _moveMultipath(t2, s2, e2) {
    if (t2)
      for (const i2 of t2)
        this._movePath(i2, s2, e2);
  }
  _movePath(t2, s2, e2) {
    if (t2)
      for (const i2 of t2)
        i2[0] += s2, i2[1] += e2;
  }
}
class r$7 {
  static local() {
    return r$7.instance === null && (r$7.instance = new r$7()), r$7.instance;
  }
  execute(t2, e2, s2, i2) {
    return new f$3(t2, e2, s2);
  }
}
r$7.instance = null;
class f$3 {
  constructor(t2, e2, s2) {
    var _a;
    this._inputGeometries = t2, this._curveHelper = new n$a(), this._offset = ((_a = e2.offset) != null ? _a : 1) * s2, this._method = e2.method, this._option = e2.option, this._offsetFlattenError = e$7 * s2;
  }
  next() {
    let i2 = this._inputGeometries.next();
    for (; i2; ) {
      if (this._offset === 0)
        return i2;
      if (u$9(i2)) {
        if (this._method === O$1.Rounded && this._offset > 0) {
          const t2 = [[i2.xmin, i2.ymin], [i2.xmin, i2.ymax], [i2.xmax, i2.ymax], [i2.xmax, i2.ymin], [i2.xmin, i2.ymin]], e2 = this._curveHelper.offset(t2, -this._offset, this._method, 4, this._offsetFlattenError);
          return e2 ? { rings: [e2] } : null;
        }
        if (Math.min(i2.xmax - i2.xmin, i2.ymax - i2.ymin) + 2 * this._offset > 0)
          return { xmin: i2.xmin - this._offset, xmax: i2.xmax + this._offset, ymin: i2.ymin - this._offset, ymax: i2.ymax + this._offset };
      }
      if (y$4(i2)) {
        const t2 = [];
        for (const e2 of i2.rings) {
          const s2 = this._curveHelper.offset(e2, -this._offset, this._method, 4, this._offsetFlattenError);
          s2 && t2.push(s2);
        }
        if (t2.length)
          return { rings: t2 };
      }
      if (f$7(i2)) {
        const t2 = [];
        for (const e2 of i2.paths) {
          const s2 = this._curveHelper.offset(e2, -this._offset, this._method, 4, this._offsetFlattenError);
          s2 && t2.push(s2);
        }
        if (t2.length)
          return { paths: t2 };
      }
      i2 = this._inputGeometries.next();
    }
    return null;
  }
}
class s$3 {
  static local() {
    return s$3.instance === null && (s$3.instance = new s$3()), s$3.instance;
  }
  execute(e2, t2, r2, s2) {
    return new n$6(e2, t2, r2);
  }
}
s$3.instance = null;
class n$6 {
  constructor(e2, t2, r2) {
    this._inputGeometries = e2, this._reverse = t2.reverse === void 0 || t2.reverse;
  }
  next() {
    let s2 = this._inputGeometries.next();
    for (; s2; ) {
      if (!this._reverse)
        return s2;
      if (f$7(s2)) {
        const t2 = y$3(s2);
        return g$4(t2.paths), t2;
      }
      s2 = this._inputGeometries.next();
    }
    return null;
  }
}
class u$4 {
  static local() {
    return u$4.instance === null && (u$4.instance = new u$4()), u$4.instance;
  }
  execute(t2, n2, e2, r2) {
    return new c$4(t2, n2, e2);
  }
}
u$4.instance = null;
class c$4 {
  constructor(t2, n2, e2) {
    this._inputGeometries = t2, this._rotateAngle = n2.angle !== void 0 ? n2.angle * Math.PI / 180 : 0;
  }
  next() {
    let u2 = this._inputGeometries.next();
    for (; u2; ) {
      if (this._rotateAngle === 0)
        return u2;
      const c2 = u$a();
      c$a(c2, u2);
      const l2 = (c2[2] + c2[0]) / 2, m2 = (c2[3] + c2[1]) / 2;
      if (u$9(u2)) {
        const t2 = { rings: [[[u2.xmin, u2.ymin], [u2.xmin, u2.ymax], [u2.xmax, u2.ymax], [u2.xmax, u2.ymin], [u2.xmin, u2.ymin]]] };
        return this._rotateMultipath(t2.rings, l2, m2), t2;
      }
      if (y$4(u2)) {
        const n2 = y$3(u2);
        return this._rotateMultipath(n2.rings, l2, m2), n2;
      }
      if (f$7(u2)) {
        const n2 = y$3(u2);
        return this._rotateMultipath(n2.paths, l2, m2), n2;
      }
      if (l$a(u2)) {
        const n2 = y$3(u2);
        return this._rotatePath(n2.points, l2, m2), n2;
      }
      if (s$8(u2))
        return u2;
      u2 = this._inputGeometries.next();
    }
    return null;
  }
  _rotateMultipath(t2, n2, e2) {
    if (t2)
      for (const r2 of t2)
        this._rotatePath(r2, n2, e2);
  }
  _rotatePath(t2, n2, e2) {
    if (t2) {
      const r2 = Math.cos(this._rotateAngle), i2 = Math.sin(this._rotateAngle);
      for (const o2 of t2) {
        const t3 = o2[0] - n2, s2 = o2[1] - e2;
        o2[0] = n2 + t3 * r2 - s2 * i2, o2[1] = e2 + t3 * i2 + s2 * r2;
      }
    }
  }
}
class c$3 {
  static local() {
    return c$3.instance === null && (c$3.instance = new c$3()), c$3.instance;
  }
  execute(t2, s2, i2, r2) {
    return new l$5(t2, s2, i2);
  }
}
c$3.instance = null;
class l$5 {
  constructor(t2, s2, i2) {
    this._inputGeometries = t2, this._xFactor = s2.xScaleFactor !== void 0 ? s2.xScaleFactor : 1.15, this._yFactor = s2.yScaleFactor !== void 0 ? s2.yScaleFactor : 1.15;
  }
  next() {
    let c2 = this._inputGeometries.next();
    for (; c2; ) {
      if (this._xFactor === 1 && this._yFactor === 1)
        return c2;
      const l2 = u$a();
      c$a(l2, c2);
      const u2 = (l2[2] + l2[0]) / 2, m2 = (l2[3] + l2[1]) / 2;
      if (u$9(c2)) {
        const t2 = { rings: [[[c2.xmin, c2.ymin], [c2.xmin, c2.ymax], [c2.xmax, c2.ymax], [c2.xmax, c2.ymin], [c2.xmin, c2.ymin]]] };
        return this._scaleMultipath(t2.rings, u2, m2), t2;
      }
      if (y$4(c2)) {
        const s2 = y$3(c2);
        return this._scaleMultipath(s2.rings, u2, m2), s2;
      }
      if (f$7(c2)) {
        const s2 = y$3(c2);
        return this._scaleMultipath(s2.paths, u2, m2), s2;
      }
      if (l$a(c2)) {
        const s2 = y$3(c2);
        return this._scalePath(s2.points, u2, m2), s2;
      }
      if (s$8(c2))
        return c2;
      c2 = this._inputGeometries.next();
    }
    return null;
  }
  _scaleMultipath(t2, s2, i2) {
    if (t2)
      for (const r2 of t2)
        this._scalePath(r2, s2, i2);
  }
  _scalePath(t2, s2, i2) {
    if (t2)
      for (const r2 of t2) {
        const t3 = (r2[0] - s2) * this._xFactor, n2 = (r2[1] - i2) * this._yFactor;
        r2[0] = s2 + t3, r2[1] = i2 + n2;
      }
  }
}
class a$6 {
  static local() {
    return a$6.instance === null && (a$6.instance = new a$6()), a$6.instance;
  }
  execute(t2, e2, i2, s2) {
    return new o$3(t2, e2, i2);
  }
}
a$6.instance = null;
class o$3 {
  constructor(t2, e2, i2) {
    this._inputGeometries = t2, this._height = (e2.amplitude !== void 0 ? e2.amplitude : 2) * i2, this._period = (e2.period !== void 0 ? e2.period : 3) * i2, this._style = e2.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new n$9(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new g$3(), this._walker.updateTolerance(i2);
  }
  next() {
    let i2 = this._inputGeometries.next();
    for (; i2; ) {
      if (this._height === 0 || this._period === 0)
        return i2;
      if (f$7(i2)) {
        const t2 = this._processGeom(i2.paths);
        if (t2.length)
          return { paths: t2 };
      }
      if (y$4(i2)) {
        const t2 = this._processGeom(i2.rings);
        if (t2.length)
          return { rings: t2 };
      }
      i2 = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(t2) {
    const e2 = [];
    for (const i2 of t2)
      if (this._walker.init(i2, this._pattern))
        switch (this._style) {
          case A$2.Sinus:
          default:
            e2.push(this._constructCurve(i2, false));
            break;
          case A$2.Square:
            e2.push(this._constructSquare(i2));
            break;
          case A$2.Triangle:
            e2.push(this._constructTriangle(i2));
            break;
          case A$2.Random:
            e2.push(this._constructCurve(i2, true));
        }
      else
        e2.push(i2);
    return e2;
  }
  _constructCurve(t2, e2) {
    const s2 = new s$6(), h2 = this._walker.calculatePathLength(t2);
    let n2 = Math.round(h2 / this._period);
    n2 === 0 && (n2 = 1);
    const a2 = n2 * 16 + 1, o2 = h2 / n2, l2 = this._period / 16, _2 = 1 / a2, c2 = 2 * Math.PI * h2 / o2, p2 = 2 * Math.PI * Math.random(), u2 = 2 * Math.PI * Math.random(), d2 = 2 * Math.PI * Math.random(), g2 = 0.75 - Math.random() / 2, w2 = 0.75 - Math.random() / 2, f2 = new h$2();
    this._walker.curPointAndAngle(f2), s2.startPath(f2.pt);
    let k2 = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(l2, f2)) {
        s2.lineTo(t2[t2.length - 1]);
        break;
      }
      {
        const t3 = k2;
        let i2;
        if (k2 += _2, e2) {
          const e3 = this._height / 2 * (1 + 0.3 * Math.sin(g2 * c2 * t3 + p2));
          i2 = e3 * Math.sin(c2 * t3 + u2), i2 += e3 * Math.sin(w2 * c2 * t3 + d2), i2 /= 2;
        } else
          i2 = 0.5 * this._height * Math.sin(0.5 * c2 * t3);
        s2.lineTo([f2.pt[0] - i2 * f2.sa, f2.pt[1] + i2 * f2.ca]);
      }
    }
    return s2.path();
  }
  _constructSquare(t2) {
    const e2 = new s$6(), s2 = this._walker.calculatePathLength(t2);
    Math.round(s2 / this._period);
    let h2 = true;
    for (; ; ) {
      let t3 = false;
      if (this._walker.curPositionIsValid()) {
        const i2 = new h$2();
        this._walker.curPointAndAngle(i2);
        const s3 = new h$2();
        if (this._walker.nextPointAndAngle(this._period, s3)) {
          const n2 = new h$2();
          this._walker.nextPointAndAngle(this._period, n2) && (h2 ? (e2.startPath(i2.pt), h2 = false) : e2.lineTo(i2.pt), e2.lineTo([i2.pt[0] - this._height / 2 * i2.sa, i2.pt[1] + this._height / 2 * i2.ca]), e2.lineTo([s3.pt[0] - this._height / 2 * s3.sa, s3.pt[1] + this._height / 2 * s3.ca]), e2.lineTo([s3.pt[0] + this._height / 2 * s3.sa, s3.pt[1] - this._height / 2 * s3.ca]), e2.lineTo([n2.pt[0] + this._height / 2 * n2.sa, n2.pt[1] - this._height / 2 * n2.ca]), t3 = true);
        }
      }
      if (!t3) {
        e2.lineTo(this._walker.getPathEnd());
        break;
      }
    }
    return e2.path();
  }
  _constructTriangle(t2) {
    const e2 = new s$6(), s2 = this._walker.calculatePathLength(t2);
    Math.round(s2 / this._period);
    let h2 = true;
    for (; ; ) {
      let t3 = false;
      if (this._walker.curPositionIsValid()) {
        const i2 = new h$2();
        this._walker.curPointAndAngle(i2);
        const s3 = new h$2();
        if (this._walker.nextPointAndAngle(this._period / 2, s3)) {
          const n2 = new h$2();
          this._walker.nextPointAndAngle(this._period, n2) && (this._walker.nextPosition(this._period / 2) && (h2 ? (e2.startPath(i2.pt), h2 = false) : e2.lineTo(i2.pt), e2.lineTo([s3.pt[0] - this._height / 2 * s3.sa, s3.pt[1] + this._height / 2 * s3.ca]), e2.lineTo([n2.pt[0] + this._height / 2 * n2.sa, n2.pt[1] - this._height / 2 * n2.ca])), t3 = true);
        }
      }
      if (!t3) {
        e2.lineTo(this._walker.getPathEnd());
        break;
      }
    }
    return e2.path();
  }
}
class a$5 {
  static local() {
    return a$5.instance === null && (a$5.instance = new a$5()), a$5.instance;
  }
  execute(t2, e2, s2, i2) {
    return new r$6(t2, e2, s2);
  }
}
a$5.instance = null;
class r$6 extends G$1 {
  constructor(t2, e2, n2) {
    var _a;
    super(t2, true, true), this._geometryWalker = new g$3(), this._geometryWalker.updateTolerance(n2), this._angleToLine = (_a = e2.angleToLine) != null ? _a : true, this._offset = (e2.offset ? e2.offset : 0) * n2, this._originalEndings = e2.endings, this._offsetAtEnd = (e2.customEndingOffset ? e2.customEndingOffset : 0) * n2, this._position = -(e2.offsetAlongLine ? e2.offsetAlongLine : 0) * n2, this._pattern = new n$9(), this._pattern.init(e2.placementTemplate, false), this._pattern.scale(n2), this._endings = this._originalEndings;
  }
  processPath(t2) {
    if (this._pattern.isEmpty())
      return null;
    let s2;
    if (this.iteratePath)
      s2 = this._pattern.nextValue();
    else {
      this._originalEndings === X.WithFullGap && this.isClosed ? this._endings = X.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let i3, n2 = true;
      switch (this._endings) {
        case X.NoConstraint:
          i3 = -this._position, i3 = this._adjustPosition(i3), n2 = false;
          break;
        case X.WithHalfGap:
        default:
          i3 = -this._pattern.lastValue() / 2;
          break;
        case X.WithFullGap:
          i3 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case X.WithMarkers:
          i3 = 0;
          break;
        case X.Custom:
          i3 = -this._position, i3 = this._adjustPosition(i3), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t2, this._pattern, n2))
        return null;
      this._pattern.reset();
      let a2 = 0;
      for (; i3 > a2; )
        i3 -= a2, a2 = this._pattern.nextValue();
      a2 -= i3, s2 = a2, this.iteratePath = true;
    }
    const i2 = new h$2();
    return this._geometryWalker.nextPointAndAngle(s2, i2) ? this._endings === X.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = false, null) : this._endings === X.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = false, this.isClosed) ? null : (this.internalPlacement.setTranslate(i2.pt[0] - this._offset * i2.sa, i2.pt[1] + this._offset * i2.ca), this._angleToLine && this.internalPlacement.setRotateCS(i2.ca, i2.sa), this.internalPlacement) : (this.iteratePath = false, null);
  }
  _adjustPosition(t2) {
    let e2 = t2 / this._pattern.length();
    return e2 -= Math.floor(e2), e2 * this._pattern.length();
  }
}
class n$5 {
  static local() {
    return n$5.instance === null && (n$5.instance = new n$5()), n$5.instance;
  }
  execute(t2, e2, s2, i2) {
    return new r$5(t2, e2, s2);
  }
}
n$5.instance = null;
class r$5 extends G$1 {
  constructor(t2, e2, i2) {
    super(t2, false, true), this._curveHelper = new n$a(), this._angleToLine = e2.angleToLine === void 0 || e2.angleToLine, this._offset = e2.offset !== void 0 ? e2.offset * i2 : 0, this._type = e2.extremityPlacement, this._position = e2.offsetAlongLine !== void 0 ? e2.offsetAlongLine * i2 : 0, this._beginProcessed = false;
  }
  processPath(t2) {
    let e2;
    switch (this._type) {
      case o$6.Both:
      default:
        this._beginProcessed ? (e2 = this._atExtremities(t2, this._position, false), this._beginProcessed = false, this.iteratePath = false) : (e2 = this._atExtremities(t2, this._position, true), this._beginProcessed = true, this.iteratePath = true);
        break;
      case o$6.JustBegin:
        e2 = this._atExtremities(t2, this._position, true);
        break;
      case o$6.JustEnd:
        e2 = this._atExtremities(t2, this._position, false);
      case o$6.None:
    }
    return e2;
  }
  _atExtremities(t2, s2, i2) {
    const n2 = t2.length;
    if (n2 < 2)
      return null;
    const r2 = i2 ? 1 : n2 - 2, o2 = i2 ? n2 : -1, a2 = i2 ? 1 : -1;
    let l2, h2 = 0, c2 = i2 ? t2[0] : t2[n2 - 1];
    for (let _2 = r2; _2 !== o2; _2 += a2) {
      l2 = c2, c2 = t2[_2];
      const i3 = this._curveHelper.calculateLength(l2, c2);
      if (h2 + i3 > s2) {
        const t3 = (s2 - h2) / i3, [n3, r3] = this._curveHelper.getAngleCS(l2, c2, t3), o3 = C$1(l2, c2, t3);
        return this.internalPlacement.setTranslate(o3[0] - this._offset * r3, o3[1] + this._offset * n3), this._angleToLine && this.internalPlacement.setRotateCS(-n3, -r3), this.internalPlacement;
      }
      h2 += i3;
    }
    return null;
  }
}
class a$4 {
  static local() {
    return a$4.instance === null && (a$4.instance = new a$4()), a$4.instance;
  }
  execute(t2, i2, s2, e2) {
    return new r$4(t2, i2, s2);
  }
}
a$4.instance = null;
class r$4 extends G$1 {
  constructor(t2, e2, n2) {
    super(t2, true, true), this._walker = new g$3(), this._walker.updateTolerance(n2), this._angleToLine = e2.angleToLine === void 0 || e2.angleToLine, this._offset = e2.offset !== void 0 ? e2.offset * n2 : 0, this._beginGap = e2.beginPosition !== void 0 ? e2.beginPosition * n2 : 0, this._endGap = e2.endPosition !== void 0 ? e2.endPosition * n2 : 0, this._flipFirst = e2.flipFirst === void 0 || e2.flipFirst, this._pattern = new n$9(), this._pattern.init(e2.positionArray, false, false), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0;
  }
  processPath(t2) {
    if (this._pattern.isEmpty())
      return null;
    let i2;
    if (this.iteratePath) {
      const t3 = this._pattern.nextValue() * this._subPathLen, s3 = this._beginGap + t3;
      i2 = s3 - this._prevPos, this._prevPos = s3;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0, this._subPathLen = this._walker.calculatePathLength(t2) - this._beginGap - this._endGap, this._subPathLen < 0)
        return this.iteratePath = false, null;
      if (!this._walker.init(t2, this._pattern, false))
        return null;
      this._pattern.reset();
      const s3 = this._pattern.nextValue() * this._subPathLen, e2 = this._beginGap + s3;
      i2 = e2 - this._prevPos, this._prevPos = e2, this.iteratePath = true;
    }
    const s2 = new h$2();
    if (!this._walker.nextPointAndAngle(i2, s2, r$b.END))
      return this.iteratePath = false, null;
    this.internalPlacement.setTranslate(s2.pt[0] - this._offset * s2.sa, s2.pt[1] + this._offset * s2.ca);
    const a2 = this._isFirst && this._flipFirst;
    let r2, h2;
    return this._angleToLine ? (r2 = s2.ca, h2 = s2.sa) : (r2 = 1, h2 = 0), a2 && (r2 = -r2, h2 = -h2), this.internalPlacement.setRotateCS(r2, h2), this._isFirst = false, this._posCount--, this._posCount === 0 && (this.iteratePath = false), this.internalPlacement;
  }
}
function h$1(t2) {
  return t2.rings !== void 0;
}
class e$5 {
  static local() {
    return e$5.instance === null && (e$5.instance = new e$5()), e$5.instance;
  }
  execute(t2, s2, i2, h2) {
    return new n$4(t2, s2, i2, h2);
  }
}
e$5.instance = null;
class n$4 {
  constructor(e2, n2, _2, r2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._stepX = Math.abs((_a = n2.stepX) != null ? _a : 16) * _2, this._stepY = Math.abs((_b = n2.stepY) != null ? _b : 16) * _2, this._stepX !== 0 && this._stepY !== 0 && e2 && h$1(e2) && e2.rings) {
      if (this._gridType = (_c = n2.gridType) != null ? _c : Y$3.Fixed, this._gridType === Y$3.Random) {
        const s2 = (_d = n2.seed) != null ? _d : 13, i2 = 1;
        this._randomLCG = new t$6(s2 * i2), this._randomness = ((_e = n2.randomness) != null ? _e : 100) / 100, this._gridAngle = 0, this._shiftOddRows = false, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0;
      } else {
        if (this._randomness = 0, this._gridAngle = (_f = n2.gridAngle) != null ? _f : 0, this._shiftOddRows = (_g = n2.shiftOddRows) != null ? _g : false, this._offsetX = ((_h = n2.offsetX) != null ? _h : 0) * _2, this._offsetY = ((_i = n2.offsetY) != null ? _i : 0) * _2, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX)
          if (this._offsetX < 0)
            for (; this._offsetX < -0.5 * this._stepX; )
              this._offsetX += this._stepX;
          else
            for (; this._offsetX >= 0.5 * this._stepX; )
              this._offsetX -= this._stepX;
        if (this._stepY)
          if (this._offsetY < 0)
            for (; this._offsetY < -0.5 * this._stepY; )
              this._offsetY += this._stepY;
          else
            for (; this._offsetY >= 0.5 * this._stepY; )
              this._offsetY -= this._stepY;
      }
      this._graphicOriginX = 0, this._graphicOriginY = 0, this._internalPlacement = new t$4(), this._calculateMinMax(e2), this._geometry = e2;
    }
  }
  next() {
    return this._geometry ? this._nextInside() : null;
  }
  _calculateMinMax(t2) {
    let s2, i2, h2, e2, n2, _2, r2, o2;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, n2 = _2 = Number.MAX_VALUE, r2 = o2 = -Number.MAX_VALUE;
    for (const a2 of t2.rings) {
      const t3 = a2 ? a2.length : 0;
      for (let f2 = 0; f2 < t3; ++f2)
        s2 = a2[f2][0] - this._graphicOriginX - this._offsetX, i2 = a2[f2][1] - this._graphicOriginY - this._offsetY, h2 = this._cosAngle * s2 - this._sinAngle * i2, e2 = this._sinAngle * s2 + this._cosAngle * i2, n2 = Math.min(n2, h2), r2 = Math.max(r2, h2), _2 = Math.min(_2, e2), o2 = Math.max(o2, e2);
    }
    n2 += this._graphicOriginX, r2 += this._graphicOriginX, _2 += this._graphicOriginY, o2 += this._graphicOriginY, this._xMin = Math.round(n2 / this._stepX), this._xMax = Math.round(r2 / this._stepX), this._yMin = Math.round(_2 / this._stepY), this._yMax = Math.round(o2 / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax)
          return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t2 = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t2 += 0.5 * this._stepX);
      const s2 = this._currentY * this._stepY + this._offsetY;
      let h2, e2;
      return this._currentX++, this._gridType === Y$3.Random ? (h2 = this._graphicOriginX + t2 + this._stepX * this._randomness * (0.5 - this._randomLCG.getFloat()) * 2 / 3, e2 = this._graphicOriginY + s2 + this._stepY * this._randomness * (0.5 - this._randomLCG.getFloat()) * 2 / 3) : (h2 = this._graphicOriginX + this._cosAngle * t2 + this._sinAngle * s2, e2 = this._graphicOriginY - this._sinAngle * t2 + this._cosAngle * s2), this._internalPlacement.setTranslate(h2, e2), this._internalPlacement;
    }
  }
}
const r$3 = 1e-3;
class l$4 {
  static local() {
    return l$4.instance === null && (l$4.instance = new l$4()), l$4.instance;
  }
  execute(e2, t2, n2, i2) {
    return new o$2(e2, t2, n2);
  }
}
l$4.instance = null;
class o$2 extends G$1 {
  constructor(e2, t2, n2) {
    super(e2, true, true), this._curveHelper = new n$a(), this._angleToLine = t2.angleToLine === void 0 || t2.angleToLine, this._offset = t2.offset !== void 0 ? t2.offset * n2 : 0, this._relativeTo = t2.relativeTo, this._position = t2.startPointOffset !== void 0 ? t2.startPointOffset * n2 : 0, this._epsilon = r$3 * n2;
  }
  processPath(e2) {
    const i2 = this._position;
    if (this._relativeTo === Z$3.SegmentMidpoint) {
      for (this.iteratePath || (this._segmentCount = e2.length, this._curSegment = 1, this.iteratePath = true); this._curSegment < this._segmentCount; ) {
        const n2 = this._curSegment;
        this._curSegment++;
        const i3 = e2[n2 - 1], s2 = e2[n2], r3 = this._curveHelper.calculateLength(i3, s2);
        if (r3 < this._epsilon)
          continue;
        const l2 = 0.5 + this._position / r3, [o2, a2] = this._curveHelper.getAngleCS(i3, s2, l2), h2 = C$1(i3, s2, l2);
        return this.internalPlacement.setTranslate(h2[0] - this._offset * a2, h2[1] + this._offset * o2), this._angleToLine && this.internalPlacement.setRotateCS(o2, a2), this.internalPlacement;
      }
      return this.iteratePath = false, null;
    }
    this._relativeTo === Z$3.LineEnd && d$1(e2);
    const r2 = this.onLine(e2, i2);
    return this._relativeTo === Z$3.LineEnd && d$1(e2), r2;
  }
  onLine(e2, n2) {
    let i2, r2 = false;
    switch (this._relativeTo) {
      case Z$3.LineMiddle:
      default:
        i2 = this._curveHelper.calculatePathLength(e2) / 2 + n2;
        break;
      case Z$3.LineBeginning:
        i2 = n2;
        break;
      case Z$3.LineEnd:
        i2 = n2, r2 = true;
    }
    const l2 = e2.length;
    let o2, a2 = 0, h2 = e2[0];
    for (let s2 = 1; s2 < l2; ++s2) {
      o2 = h2, h2 = e2[s2];
      const n3 = this._curveHelper.calculateLength(o2, h2);
      if (a2 + n3 > i2) {
        const e3 = (i2 - a2) / n3, [s3, l3] = this._curveHelper.getAngleCS(o2, h2, e3), c2 = C$1(o2, h2, e3), u2 = r2 ? -this._offset : this._offset;
        return this.internalPlacement.setTranslate(c2[0] - u2 * l3, c2[1] + u2 * s3), this._angleToLine && (r2 ? this.internalPlacement.setRotateCS(-s3, -l3) : this.internalPlacement.setRotateCS(s3, l3)), this.internalPlacement;
      }
      a2 += n3;
    }
    return null;
  }
}
class n$3 {
  static local() {
    return n$3.instance === null && (n$3.instance = new n$3()), n$3.instance;
  }
  execute(t2, s2, e2, i2) {
    return new a$3(t2, s2, e2);
  }
}
n$3.instance = null;
const r$2 = 1e-15;
class a$3 extends G$1 {
  constructor(t2, s2, e2) {
    super(t2, true, true), this._curveHelper = new n$a(), this._angleToLine = s2.angleToLine === void 0 || s2.angleToLine, this._offset = s2.offset !== void 0 ? s2.offset * e2 : 0, this._endPoints = s2.placeOnEndPoints === void 0 || s2.placeOnEndPoints, this._controlPoints = s2.placeOnControlPoints === void 0 || s2.placeOnControlPoints, this._regularVertices = s2.placeOnRegularVertices === void 0 || s2.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t2) {
    if (this.iteratePath || (this._preparePath(t2), this.iteratePath = true), this._tagIterator >= this._tags.length)
      return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = false, null;
    const s2 = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(s2[2]);
    let e2 = s2[0], i2 = s2[1];
    if (this._offset !== 0) {
      const t3 = Math.cos(s2[2]), n2 = Math.sin(s2[2]);
      e2 -= this._offset * n2, i2 += this._offset * t3;
    }
    return this.internalPlacement.setTranslate(e2, i2), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t2) {
    this._tags.length = 0, this._tagIterator = 0;
    const i2 = y$2(t2), n2 = t2.length - 1;
    let r2, a2, h2 = 0, l2 = 0, _2 = 0, c2 = 0, g2 = 0;
    for (; h2 < n2; ) {
      h2++, r2 = t2[h2 - 1], a2 = t2[h2];
      const s2 = I(r2), u2 = I(a2);
      (this._angleToLine || this._offset !== 0) && (c2 = this._curveHelper.getAngle(r2, a2, 0)), h2 === 1 ? i2 ? (l2 = c2, _2 = s2) : (this._endPoints || this._controlPoints && s2 === 1) && this._tags.push([r2[0], r2[1], c2]) : s2 === 1 ? this._controlPoints && this._tags.push([r2[0], r2[1], o$1(g2, c2)]) : this._regularVertices && this._tags.push([r2[0], r2[1], o$1(g2, c2)]), (this._angleToLine || this._offset !== 0) && (g2 = this._curveHelper.getAngle(r2, a2, 1)), h2 === n2 && (i2 ? u2 === 1 || _2 === 1 ? this._controlPoints && this._tags.push([a2[0], a2[1], o$1(g2, l2)]) : this._regularVertices && this._tags.push([a2[0], a2[1], o$1(g2, l2)]) : (this._endPoints || this._controlPoints && u2 === 1) && this._tags.push([a2[0], a2[1], g2]));
    }
    this._tagIterator = 0;
  }
}
function o$1(t2, s2) {
  const e2 = Math.PI;
  for (; Math.abs(s2 - t2) > e2 + 2 * r$2; )
    s2 - t2 > e2 ? s2 -= 2 * e2 : s2 += 2 * e2;
  return (t2 + s2) / 2;
}
class t$3 {
  constructor(t2 = e$4) {
    this._data = [], this._compare = t2;
  }
  get size() {
    return this._data.length;
  }
  enqueue(t2) {
    if (t2 == null)
      return;
    const { _data: e2, _compare: n2 } = this;
    e2.push(t2);
    let l2 = e2.length - 1 >>> 0;
    const r2 = e2[l2];
    for (; l2 > 0; ) {
      const t3 = l2 - 1 >> 1, s2 = e2[t3];
      if (!(n2(s2, r2) <= 0))
        break;
      e2[t3] = r2, e2[l2] = s2, l2 = t3;
    }
  }
  dequeue() {
    const { _data: t2, _compare: e2 } = this, n2 = t2[0], l2 = t2.pop();
    if (t2.length === 0)
      return n2;
    t2[0] = l2;
    let r2 = 0;
    const s2 = t2.length, u2 = t2[0];
    let a2, o2, c2 = null;
    for (; ; ) {
      const n3 = 2 * r2 + 1, l3 = 2 * r2 + 2;
      if (c2 = null, n3 < s2 && (a2 = t2[n3], e2(a2, u2) > 0 && (c2 = n3)), l3 < s2 && (o2 = t2[l3], (c2 === null && e2(o2, u2) <= 0 || c2 !== null && e2(o2, a2) <= 0) && (c2 = l3)), c2 === null)
        break;
      t2[r2] = t2[c2], t2[c2] = u2, r2 = c2;
    }
    return n2;
  }
}
const e$4 = (t2, e2) => t2 < e2 ? -1 : t2 > e2 ? 1 : 0;
const N$1 = 100 * 222045e-21;
function u$3(t2) {
  const { rings: n2 } = t2;
  if (!n2 || n2.length === 0)
    return null;
  const s2 = c$a(u$a(), t2);
  if (!s2)
    return null;
  const c2 = 4 * (Math.abs(s2[0]) + Math.abs(s2[2]) + Math.abs(s2[1]) + Math.abs(s2[3]) + 1) * N$1;
  let l2 = 0, f2 = 0;
  for (let e2 = 0; e2 < n2.length; e2++) {
    const t3 = M$2(n2[e2]);
    t3 > f2 && (f2 = t3, l2 = e2);
  }
  if (Math.abs(f2) <= 2 * c2 * c2) {
    const t3 = s$9(u$a(), n2[l2]);
    return [(t3[0] + t3[2]) / 2, (t3[1] + t3[3]) / 2];
  }
  const u2 = u$b(n2[l2], false, u$a());
  if (u2 === null)
    return null;
  if (n2.length === 1 && n2[0].length < 4)
    return u2;
  const d2 = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], x2 = [NaN, NaN, NaN, NaN], M2 = [NaN, NaN, NaN, NaN];
  let b2 = false, w2 = m$2(u2, t2, true);
  w2.distance === 0 && (b2 = true, d2[0][0] = u2[0], d2[0][1] = u2[1], w2 = m$2(u2, t2, false)), x2[0] = w2.distance, M2[0] = 0;
  const y2 = [NaN, NaN];
  let C2 = false, k2 = 0.25, P2 = -1;
  const T2 = s$9(u$a(), n2[l2]);
  let z2 = NaN;
  do {
    if (z2 = NaN, d2[1] = g$2(t2, p$1(T2[0], T2[2], k2), c2, s2), isNaN(d2[1][0]) || isNaN(d2[1][1]) || (w2 = m$2(d2[1], t2, false), z2 = w2.distance), !isNaN(z2) && z2 > c2 && h(d2[1], t2))
      C2 = true, x2[1] = z2, M2[1] = j$2(d2[1], u2);
    else if (!isNaN(z2) && z2 > P2 && (P2 = z2, y2[0] = d2[1][0], y2[1] = d2[1][1]), k2 -= 0.01, k2 < 0.1) {
      if (!(P2 >= 0))
        break;
      C2 = true, x2[1] = P2, d2[1][0] = y2[0], d2[1][1] = y2[1], M2[1] = j$2(d2[1], u2);
    }
  } while (!C2);
  C2 = false, k2 = 0.5, P2 = -1;
  let D2 = 0.01, S2 = 1;
  do {
    if (z2 = NaN, d2[2] = g$2(t2, p$1(T2[0], T2[2], k2), c2, s2), isNaN(d2[2][0]) || isNaN(d2[2][1]) || (w2 = m$2(d2[2], t2, false), z2 = w2.distance), !isNaN(z2) && z2 > c2 && h(d2[2], t2))
      C2 = true, x2[2] = z2, M2[2] = j$2(d2[2], u2);
    else if (!isNaN(z2) && z2 > P2)
      P2 = z2, y2[0] = d2[2][0], y2[1] = d2[2][1];
    else if (z2 > P2 && (P2 = z2, y2[0] = d2[2][0], y2[1] = d2[2][1]), k2 = 0.5 + D2 * S2, D2 += 0.01, S2 *= -1, k2 < 0.3 || k2 > 0.7) {
      if (!(P2 >= 0))
        break;
      C2 = true, x2[2] = P2, d2[2][0] = y2[0], d2[2][1] = y2[1], M2[2] = j$2(d2[2], u2);
    }
  } while (!C2);
  C2 = false, k2 = 0.75, P2 = -1;
  do {
    if (z2 = NaN, d2[3] = g$2(t2, p$1(T2[0], T2[2], k2), c2, s2), isNaN(d2[3][0]) || isNaN(d2[3][1]) || (w2 = m$2(d2[3], t2, false), z2 = w2.distance), !isNaN(z2) && z2 > c2 && h(d2[3], t2))
      C2 = true, x2[3] = z2, M2[3] = j$2(d2[3], u2);
    else if (z2 > P2 && (P2 = z2, y2[0] = d2[3][0], y2[1] = d2[3][1]), k2 += 0.01, k2 > 0.9) {
      if (!(P2 >= 0))
        break;
      C2 = true, x2[3] = P2, d2[3][0] = y2[0], d2[3][1] = y2[1], M2[3] = j$2(d2[3], u2);
    }
  } while (!C2);
  const B2 = [0, 1, 2, 3], Q2 = b2 ? 0 : 1;
  let R2;
  for (let e2 = Q2; e2 < 4; e2++)
    for (let t3 = Q2; t3 < 3; t3++) {
      const n3 = M2[t3], e3 = M2[t3 + 1];
      q$3(n3, e3) > 0 && (R2 = B2[t3], B2[t3] = B2[t3 + 1], B2[t3 + 1] = R2, M2[t3] = e3, M2[t3 + 1] = n3);
    }
  let U2 = Q2, v2 = 0, A2 = 0;
  for (let e2 = Q2; e2 < 4; e2++) {
    switch (e2) {
      case 0:
        A2 = 2 * x2[B2[e2]];
        break;
      case 1:
        A2 = 1.66666666 * x2[B2[e2]];
        break;
      case 2:
        A2 = 1.33333333 * x2[B2[e2]];
        break;
      case 3:
        A2 = x2[B2[e2]];
    }
    A2 > v2 && (v2 = A2, U2 = B2[e2]);
  }
  return d2[U2];
}
function h(t2, n2) {
  const { rings: e2 } = n2;
  let i2 = 0;
  for (const r2 of e2) {
    const n3 = r2.length;
    for (let e3 = 1; e3 < n3; ++e3) {
      const n4 = r2[e3 - 1], o2 = r2[e3];
      if (n4[1] > t2[1] == o2[1] > t2[1])
        continue;
      (o2[0] - n4[0]) * (t2[1] - n4[1]) - (o2[1] - n4[1]) * (t2[0] - n4[0]) > 0 ? i2++ : i2--;
    }
  }
  return i2 !== 0;
}
function m$2(t2, n2, e2) {
  if (e2 && h(t2, n2))
    return { coord: t2, distance: 0 };
  let i2 = 1 / 0, r2 = 0, o2 = 0;
  const s2 = [0, 0], { rings: a2 } = n2;
  for (const l2 of a2)
    if (!(l2.length < 2))
      for (let n3 = 0; n3 < l2.length - 1; n3++) {
        i$9(s2, t2, l2, n3);
        const e3 = j$2(t2, s2);
        e3 < i2 && (i2 = e3, r2 = s2[0], o2 = s2[1]);
      }
  return { coord: [r2, o2], distance: Math.sqrt(i2) };
}
function g$2(t2, n2, i2, r2) {
  const o2 = [n2, 0];
  let s2 = 1 / 0, a2 = 1 / 0, c2 = false, l2 = false;
  const N2 = [[n2, r2[1] - 1], [n2, r2[3] + 1]], u2 = [0, 0], h2 = [0, 0], m2 = [0, 0], g2 = [[0, 0], [0, 0]], x2 = u$a(), { rings: M2 } = t2;
  for (const e2 of M2)
    if (!(e2.length < 2))
      for (let t3 = 1; t3 < e2.length; t3++) {
        if (g2[0][0] = e2[t3 - 1][0], g2[0][1] = e2[t3 - 1][1], g2[1][0] = e2[t3][0], g2[1][1] = e2[t3][1], d(x2, g2) === null)
          continue;
        if (h2[0] = N2[0][0], h2[1] = N2[0][1], m2[0] = N2[1][0], m2[1] = N2[1][1], y$1(x2, h2, m2) === 0)
          continue;
        if (!G$2(N2[0], N2[1], g2[0], g2[1], u2))
          continue;
        const n3 = u2[1];
        s2 > a2 ? n3 < s2 && (s2 = n3, c2 = true) : n3 < a2 && (a2 = n3, l2 = true);
      }
  return c2 && l2 ? o2[1] = (s2 + a2) / 2 : o2[0] = o2[1] = NaN, o2;
}
function d(t2, n2) {
  if (n2.length < 2)
    return null;
  t2 || (t2 = u$a());
  const [i2, r2] = n2[0], [o2, s2] = n2[1];
  return t2[0] = Math.min(i2, o2), t2[1] = Math.min(r2, s2), t2[2] = Math.max(i2, o2), t2[3] = Math.max(r2, s2), t2;
}
const x$1 = 1, M$1 = 4, b$1 = 3, w$1 = 12;
function y$1(t2, n2, e2) {
  let i2 = C(n2, t2), r2 = C(e2, t2);
  const o2 = t2[0], s2 = t2[1], a2 = t2[2], c2 = t2[3];
  if (i2 & r2)
    return 0;
  if (!(i2 | r2))
    return 4;
  const l2 = (i2 ? 1 : 0) | (r2 ? 2 : 0);
  do {
    const l3 = e2[0] - n2[0], f2 = e2[1] - n2[1];
    if (l3 > f2)
      i2 & b$1 ? (i2 & x$1 ? (n2[1] += f2 * (o2 - n2[0]) / l3, n2[0] = o2) : (n2[1] += f2 * (a2 - n2[0]) / l3, n2[0] = a2), i2 = C(n2, t2)) : r2 & b$1 ? (r2 & x$1 ? (e2[1] += f2 * (o2 - e2[0]) / l3, e2[0] = o2) : (e2[1] += f2 * (a2 - e2[0]) / l3, e2[0] = a2), r2 = C(e2, t2)) : i2 ? (i2 & M$1 ? (n2[0] += l3 * (s2 - n2[1]) / f2, n2[1] = s2) : (n2[0] += l3 * (c2 - n2[1]) / f2, n2[1] = c2), i2 = C(n2, t2)) : (r2 & M$1 ? (e2[0] += l3 * (s2 - e2[1]) / f2, e2[1] = s2) : (e2[0] += l3 * (c2 - e2[1]) / f2, e2[1] = c2), r2 = C(e2, t2));
    else if (i2 & w$1 ? (i2 & M$1 ? (n2[0] += l3 * (s2 - n2[1]) / f2, n2[1] = s2) : (n2[0] += l3 * (c2 - n2[1]) / f2, n2[1] = c2), i2 = C(n2, t2)) : r2 & w$1 ? (r2 & M$1 ? (e2[0] += l3 * (s2 - e2[1]) / f2, e2[1] = s2) : (e2[0] += l3 * (c2 - e2[1]) / f2, e2[1] = c2), r2 = C(e2, t2)) : i2 ? (i2 & x$1 ? (n2[1] += f2 * (o2 - n2[0]) / l3, n2[0] = o2) : (n2[1] += f2 * (a2 - n2[0]) / l3, n2[0] = a2), i2 = C(n2, t2)) : (r2 & x$1 ? (e2[1] += f2 * (o2 - e2[0]) / l3, e2[0] = o2) : (e2[1] += f2 * (a2 - e2[0]) / l3, e2[0] = a2), r2 = C(e2, t2)), i2 & r2)
      return 0;
  } while (i2 | r2);
  return l2;
}
function C(t2, n2) {
  return (t2[0] < n2[0] ? 1 : 0) | (t2[0] > n2[2] ? 1 : 0) << 1 | (t2[1] < n2[1] ? 1 : 0) << 2 | (t2[1] > n2[3] ? 1 : 0) << 3;
}
function p$1(t2, n2, e2) {
  return t2 + (n2 - t2) * e2;
}
function j$2(t2, n2) {
  return (t2[0] - n2[0]) * (t2[0] - n2[0]) + (t2[1] - n2[1]) * (t2[1] - n2[1]);
}
function q$3(t2, n2) {
  if (t2 < n2)
    return -1;
  if (t2 > n2)
    return 1;
  if (t2 === n2)
    return 0;
  const e2 = isNaN(t2), i2 = isNaN(n2);
  return e2 < i2 ? -1 : e2 > i2 ? 1 : 0;
}
class k {
  constructor(t2, n2, e2, i2) {
    this.x = t2, this.y = n2, this.cellSize = e2, this.distancefromCellCenter = s$a(t2, n2, i2), this.maxDistanceToPolygon = this.distancefromCellCenter + this.cellSize * Math.SQRT2;
  }
}
const P = 1, T$2 = 100;
function z(i2) {
  if (!i2 || !i2.rings || i2.rings.length === 0)
    return null;
  const o2 = s$9(u$a(), i2.rings[0]);
  if (!o2)
    return null;
  const a2 = o2[2] - o2[0], c2 = o2[3] - o2[1];
  if (a2 === 0 || c2 === 0)
    return [o2[0] + a2 / 2, o2[1] + c2 / 2];
  const l2 = Math.max(Math.min(a2, c2) / T$2, P), f2 = new t$3((t2, n2) => n2.maxDistanceToPolygon - t2.maxDistanceToPolygon), N2 = Math.min(a2, c2);
  let u2 = N2 / 2, h2 = 0, m2 = 0;
  for (h2 = o2[0]; h2 < o2[2]; h2 += N2)
    for (m2 = o2[1]; m2 < o2[3]; m2 += N2)
      f2.enqueue(new k(h2 + u2, m2 + u2, u2, i2));
  const g2 = o$7(i2.rings, false);
  if (g2 === null)
    return null;
  let d2, x2 = new k(g2[0], g2[1], 0, i2);
  for (; f2.size > 0; )
    d2 = e$9(f2.dequeue()), d2.distancefromCellCenter > x2.distancefromCellCenter && (x2 = d2), d2.maxDistanceToPolygon - x2.distancefromCellCenter <= l2 || (u2 = d2.cellSize / 2, f2.enqueue(new k(d2.x - u2, d2.y - u2, u2, i2)), f2.enqueue(new k(d2.x + u2, d2.y - u2, u2, i2)), f2.enqueue(new k(d2.x - u2, d2.y + u2, u2, i2)), f2.enqueue(new k(d2.x + u2, d2.y + u2, u2, i2)));
  return [x2.x, x2.y];
}
function l$3(t2) {
  return t2.rings !== void 0;
}
class a$2 {
  static local() {
    return a$2.instance === null && (a$2.instance = new a$2()), a$2.instance;
  }
  execute(t2, e2, s2, n2) {
    return new f$2(t2, e2, s2);
  }
}
a$2.instance = null;
class f$2 {
  constructor(t2, e2, s2) {
    this._geometry = t2, this._offsetX = e2.offsetX !== void 0 ? e2.offsetX * s2 : 0, this._offsetY = e2.offsetY !== void 0 ? e2.offsetY * s2 : 0, this._method = e2.method !== void 0 ? e2.method : K$3.OnPolygon, this._internalPlacement = new t$4();
  }
  next() {
    const t2 = this._geometry;
    return this._geometry = null, t2 && l$3(t2) ? this._polygonCenter(t2) : null;
  }
  _polygonCenter(r2) {
    let l2 = false;
    switch (this._method) {
      case K$3.CenterOfMass:
        {
          const t2 = g$6(r2);
          t2 && (this._internalPlacement.setTranslate(t2[0] + this._offsetX, t2[1] + this._offsetY), l2 = true);
        }
        break;
      case K$3.BoundingBoxCenter:
        {
          const s2 = u$a();
          c$a(s2, r2), s2 && (this._internalPlacement.setTranslate((s2[2] + s2[0]) / 2 + this._offsetX, (s2[3] + s2[1]) / 2 + this._offsetY), l2 = true);
        }
        break;
      case K$3.OnPolygon:
      default: {
        let t2;
        t2 = has("polylabel-placement-enabled") ? z(r2) : u$3(r2), t2 !== null && (this._internalPlacement.setTranslate(t2[0] + this._offsetX, t2[1] + this._offsetY), l2 = true);
      }
    }
    return l2 ? this._internalPlacement : null;
  }
}
function A(p2) {
  if (!p2)
    return null;
  switch (p2.type) {
    case "CIMGeometricEffectAddControlPoints":
      return o$4.local();
    case "CIMGeometricEffectArrow":
      return h$4.local();
    case "CIMGeometricEffectBuffer":
      return f$4.local();
    case "CIMGeometricEffectControlMeasureLine":
      return _$2.local();
    case "CIMGeometricEffectCut":
      return u$5.local();
    case "CIMGeometricEffectDashes":
      return r$a.local();
    case "CIMGeometricEffectDonut":
      return r$9.local();
    case "CIMGeometricEffectJog":
      return s$4.local();
    case "CIMGeometricEffectMove":
      return n$7.local();
    case "CIMGeometricEffectOffset":
      return r$7.local();
    case "CIMGeometricEffectReverse":
      return s$3.local();
    case "CIMGeometricEffectRotate":
      return u$4.local();
    case "CIMGeometricEffectScale":
      return c$3.local();
    case "CIMGeometricEffectWave":
      return a$6.local();
  }
  return null;
}
function g$1(e2) {
  if (!e2)
    return null;
  switch (e2.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return a$5.local();
    case "CIMMarkerPlacementAtExtremities":
      return n$5.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return a$4.local();
    case "CIMMarkerPlacementInsidePolygon":
      return e$5.local();
    case "CIMMarkerPlacementOnLine":
      return l$4.local();
    case "CIMMarkerPlacementOnVertices":
      return n$3.local();
    case "CIMMarkerPlacementPolygonCenter":
      return a$2.local();
  }
  return null;
}
function t$2(t2) {
  const e2 = t2.getFrame(0);
  if (e2 instanceof HTMLImageElement || e2 instanceof HTMLCanvasElement)
    return e2;
  const n2 = document.createElement("canvas");
  n2.width = t2.width, n2.height = t2.height;
  const a2 = n2.getContext("2d");
  return e2 instanceof ImageData ? a2.putImageData(e2, 0, 0) : a2.drawImage(e2, 0, 0), n2;
}
class t$1 {
  constructor(t2 = 0, h2 = 0, i2 = 0, s2 = 0) {
    this.x = t2, this.y = h2, this.width = i2, this.height = s2;
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t2) {
    this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.width = Math.max(this.width, t2.width), this.height = Math.max(this.height, t2.height);
  }
}
function e$3(t2) {
  return `rgb(${t2.slice(0, 3).toString()})`;
}
function i$4(t2) {
  return `rgba(${t2.slice(0, 3).toString()},${t2[3]})`;
}
class s$2 {
  constructor(t2) {
    t2 && (this._textRasterizationCanvas = t2);
  }
  rasterizeText(t2, s2) {
    var _a;
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const r2 = this._textRasterizationCanvas, o2 = r2.getContext("2d");
    this._setFontProperties(o2, s2), this._parameters = s2, this._textLines = t2.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const h2 = this._computeTextWidth(o2, s2), { decoration: a2, weight: l2 } = s2.font;
    this._lineThroughWidthOffset = a2 && a2 === "line-through" ? 0.1 * this._lineHeight : 0;
    const d2 = this._lineHeight * this._textLines.length;
    r2.width = h2 + 2 * this._lineThroughWidthOffset, r2.height = d2, this._renderedLineHeight = Math.round(this._lineHeight * s2.pixelRatio), this._renderedHaloSize = s2.halo.size * s2.pixelRatio, this._renderedWidth = h2 * s2.pixelRatio, this._renderedHeight = d2 * s2.pixelRatio, this._lineThroughWidthOffset *= s2.pixelRatio;
    const c2 = (_a = s2.color) != null ? _a : [0, 0, 0, 0], _2 = s2.halo && s2.halo.color ? s2.halo.color : [0, 0, 0, 0];
    this._fillStyle = i$4(c2), this._haloStyle = e$3(_2);
    const g2 = this._renderedLineHeight, f2 = this._renderedHaloSize;
    o2.save(), o2.clearRect(0, 0, r2.width, r2.height), this._setFontProperties(o2, s2);
    const u2 = n$2(o2.textAlign, this._renderedWidth) + f2, p2 = f2, x2 = f2 > 0;
    let m2 = this._lineThroughWidthOffset, b2 = 0;
    x2 && this._renderHalo(o2, u2, p2, m2, b2, s2), b2 += p2, m2 += u2;
    for (const e2 of this._textLines)
      x2 ? (o2.globalCompositeOperation = "destination-out", o2.fillStyle = "rgb(0, 0, 0)", o2.fillText(e2, m2, b2), o2.globalCompositeOperation = "source-over", o2.fillStyle = this._fillStyle, o2.fillText(e2, m2, b2)) : (o2.fillStyle = this._fillStyle, o2.fillText(e2, m2, b2)), a2 && a2 !== "none" && this._renderDecoration(o2, m2, b2, a2, l2), b2 += g2;
    o2.restore();
    const z2 = this._renderedWidth + 2 * this._lineThroughWidthOffset, w2 = this._renderedHeight, v2 = o2.getImageData(0, 0, z2, w2), H2 = new Uint8Array(v2.data);
    if (s2.premultiplyColors) {
      let t3;
      for (let e2 = 0; e2 < H2.length; e2 += 4)
        t3 = H2[e2 + 3] / 255, H2[e2] = H2[e2] * t3, H2[e2 + 1] = H2[e2 + 1] * t3, H2[e2 + 2] = H2[e2 + 2] * t3;
    }
    let y2, R2;
    switch (s2.horizontalAlignment) {
      case "left":
        y2 = -0.5;
        break;
      case "right":
        y2 = 0.5;
        break;
      default:
        y2 = 0;
    }
    switch (s2.verticalAlignment) {
      case "bottom":
        R2 = -0.5;
        break;
      case "top":
        R2 = 0.5;
        break;
      default:
        R2 = 0;
    }
    return { size: [z2, w2], image: new Uint32Array(H2.buffer), sdf: false, simplePattern: false, anchorX: y2, anchorY: R2, canvas: r2 };
  }
  _renderHalo(t2, e2, i2, s2, n2, r2) {
    const o2 = this._renderedWidth, h2 = this._renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = o2, this._haloRasterizationCanvas.height = h2;
    const a2 = this._haloRasterizationCanvas, l2 = a2.getContext("2d");
    l2.clearRect(0, 0, o2, h2), this._setFontProperties(l2, r2);
    const { decoration: d2, weight: c2 } = r2.font;
    l2.fillStyle = this._haloStyle, l2.strokeStyle = this._haloStyle, l2.lineJoin = "round", this._renderHaloNative(l2, e2, i2, d2, c2), t2.globalAlpha = this._parameters.halo.color[3], t2.drawImage(a2, 0, 0, o2, h2, s2, n2, o2, h2), t2.globalAlpha = 1;
  }
  _renderHaloNative(t2, e2, i2, s2, n2) {
    const r2 = this._renderedLineHeight, o2 = this._renderedHaloSize;
    for (const h2 of this._textLines) {
      const a2 = 2 * o2, l2 = 5, d2 = 0.1;
      for (let r3 = 0; r3 < l2; r3++) {
        const o3 = (1 - (l2 - 1) * d2 + r3 * d2) * a2;
        t2.lineWidth = o3, t2.strokeText(h2, e2, i2), s2 && s2 !== "none" && this._renderDecoration(t2, e2, i2, s2, n2, o3);
      }
      i2 += r2;
    }
  }
  _setFontProperties(e2, i2) {
    const s2 = Math.max(i2.size, 0.5), n2 = i2.font, r2 = `${n2.style} ${n2.weight} ${u$c(s2 * i2.pixelRatio).toFixed(1)}px ${n2.family}, sans-serif`;
    let o2;
    switch (e2.font = r2, e2.textBaseline = "top", i2.horizontalAlignment) {
      case "left":
      default:
        o2 = "left";
        break;
      case "right":
        o2 = "right";
        break;
      case "center":
        o2 = "center";
    }
    e2.textAlign = o2;
  }
  computeTextSize(t2, e2) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const i2 = this._textRasterizationCanvas, s2 = i2.getContext("2d");
    this._setFontProperties(s2, e2), this._parameters = e2, this._textLines = t2.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const n2 = this._computeTextWidth(s2, e2), r2 = this._lineHeight * this._textLines.length;
    return i2.width = n2, i2.height = r2, [n2 * e2.pixelRatio, r2 * e2.pixelRatio];
  }
  _computeTextWidth(t2, e2) {
    let i2 = 0;
    for (const n2 of this._textLines)
      i2 = Math.max(i2, t2.measureText(n2).width);
    const s2 = e2.font;
    return (s2.style === "italic" || s2.style === "oblique" || typeof s2.weight == "string" && (s2.weight === "bold" || s2.weight === "bolder") || typeof s2.weight == "number" && s2.weight > 600) && (i2 += 0.3 * t2.measureText("w").width), i2 += 2 * this._parameters.halo.size, Math.round(i2);
  }
  _computeLineHeight() {
    let t2 = 1.275 * this._parameters.size;
    const e2 = this._parameters.font.decoration;
    return e2 && e2 === "underline" && (t2 *= 1.3), Math.round(t2 + 2 * this._parameters.halo.size);
  }
  _renderDecoration(t2, e2, i2, s2, n2, r2) {
    const o2 = 0.9 * this._lineHeight, h2 = n2 === "bold" ? 0.06 : n2 === "bolder" ? 0.09 : 0.04;
    switch (t2.textAlign) {
      case "center":
        e2 -= this._renderedWidth / 2;
        break;
      case "right":
        e2 -= this._renderedWidth;
    }
    const a2 = t2.textBaseline;
    if (s2 === "underline")
      switch (a2) {
        case "top":
          i2 += o2;
          break;
        case "middle":
          i2 += o2 / 2;
      }
    else if (s2 === "line-through")
      switch (a2) {
        case "top":
          i2 += o2 / 1.5;
          break;
        case "middle":
          i2 += o2 / 3;
      }
    const l2 = r2 ? 1.5 * r2 : Math.ceil(o2 * h2);
    t2.save(), t2.beginPath(), t2.strokeStyle = t2.fillStyle, t2.lineWidth = l2, t2.moveTo(e2 - this._lineThroughWidthOffset, i2), t2.lineTo(e2 + this._renderedWidth + 2 * this._lineThroughWidthOffset, i2), t2.stroke(), t2.restore();
  }
}
function n$2(t2, e2) {
  return t2 === "center" ? 0.5 * e2 : t2 === "right" ? e2 : 0;
}
class i$3 {
  constructor(i2, e2, s2, r2) {
    this.center = t$7(i2, e2), this.centerT = n$d(), this.halfWidth = s2 / 2, this.halfHeight = r2 / 2, this.width = s2, this.height = r2;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t2) {
    this.center[0] = t2;
  }
  set y(t2) {
    this.center[1] = t2;
  }
  clone() {
    return new i$3(this.x, this.y, this.width, this.height);
  }
  serialize(t2) {
    return t2.writeF32(this.center[0]), t2.writeF32(this.center[1]), t2.push(this.width), t2.push(this.height), t2;
  }
  findCollisionDelta(t2, h2 = 4) {
    const i2 = Math.abs(t2.centerT[0] - this.centerT[0]), e2 = Math.abs(t2.centerT[1] - this.centerT[1]), s2 = (t2.halfWidth + this.halfWidth + h2) / i2, r2 = (t2.halfHeight + this.halfHeight + h2) / e2, n2 = Math.min(s2, r2);
    return Math.log2(n2);
  }
  extend(t2) {
    const h2 = Math.min(this.xmin, t2.xmin), i2 = Math.min(this.ymin, t2.ymin), e2 = Math.max(this.xmax, t2.xmax) - h2, s2 = Math.max(this.ymax, t2.ymax) - i2, r2 = h2 + e2 / 2, n2 = i2 + s2 / 2;
    this.width = e2, this.height = s2, this.halfWidth = e2 / 2, this.halfHeight = s2 / 2, this.x = r2, this.y = n2;
  }
  static deserialize(t2) {
    const h2 = t2.readF32(), e2 = t2.readF32(), s2 = t2.readInt32(), r2 = t2.readInt32();
    return new i$3(h2, e2, s2, r2);
  }
}
const l$2 = 26, u$2 = 4, g = l$2 + u$2, _$1 = l$2 - 6, p = 3, x = 8, w = Math.PI / 180;
class y {
  constructor(t2, s2, e2, i2) {
    this._rotationT = n$e(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const o2 = e2.rect, h2 = new Float32Array(8);
    t2 *= i2, s2 *= i2;
    const r2 = e2.code ? o2.width * i2 : e2.metrics.width, a2 = e2.code ? o2.height * i2 : e2.metrics.height;
    h2[0] = t2, h2[1] = s2, h2[2] = t2 + r2, h2[3] = s2, h2[4] = t2, h2[5] = s2 + a2, h2[6] = t2 + r2, h2[7] = s2 + a2, this._data = h2, this._setTextureCoords(o2), this._scale = i2, this._mosaic = e2, this.x = t2, this.y = s2, this.maxOffset = Math.max(t2 + r2, s2 + a2);
  }
  get width() {
    return this._mosaic.metrics.width * this._scale;
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(s2) {
    this._angle = s2, h$6(this._rotationT, -s2), this._setOffsets(this._data);
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(this._data), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t2, width: e2 } = this._mosaic.metrics, i2 = e2 * this._scale, h2 = Math.abs(t2) * this._scale, r2 = new Float32Array(8);
      r2[0] = this.x, r2[1] = this.y, r2[2] = this.x + i2, r2[3] = this.y, r2[4] = this.x, r2[5] = this.y + h2, r2[6] = this.x + i2, r2[7] = this.y + h2;
      const a2 = o$8(n$e(), this._rotationT, this._transform);
      a$d(r2, r2, a2);
      let c2 = 1 / 0, f2 = 1 / 0, d2 = 0, l2 = 0;
      for (let s2 = 0; s2 < 4; s2++) {
        const t3 = r2[2 * s2], e3 = r2[2 * s2 + 1];
        c2 = Math.min(c2, t3), f2 = Math.min(f2, e3), d2 = Math.max(d2, t3), l2 = Math.max(l2, e3);
      }
      const u2 = d2 - c2, g2 = l2 - f2, _2 = c2 + u2 / 2, p2 = f2 + g2 / 2;
      this._bounds = new i$3(_2, p2, u2, g2);
    }
    return this._bounds;
  }
  setTransform(t2) {
    this._transform = t2, this._offsets = null;
  }
  _setOffsets(t2) {
    this._offsets || (this._offsets = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 });
    const e2 = this._offsets, i2 = new Float32Array(8), h2 = o$8(n$e(), this._rotationT, this._transform);
    a$d(i2, t2, h2), e2.upperLeft = w$3(i2[0] * x, i2[1] * x), e2.upperRight = w$3(i2[2] * x, i2[3] * x), e2.lowerLeft = w$3(i2[4] * x, i2[5] * x), e2.lowerRight = w$3(i2[6] * x, i2[7] * x);
  }
  _setTextureCoords({ x: t2, y: s2, width: e2, height: i2 }) {
    this._texcoords = { upperLeft: w$3(t2, s2), upperRight: w$3(t2 + e2, s2), lowerLeft: w$3(t2, s2 + i2), lowerRight: w$3(t2 + e2, s2 + i2) };
  }
}
const M = (t2, s2) => ({ code: 0, page: 0, sdf: true, rect: new t$8(0, 0, 11, 8), textureBinding: s2, metrics: { advance: 0, height: 4, width: t2, left: 0, top: 0 } });
class T$1 {
  constructor(t2, s2, e2) {
    this._rotation = 0, this._decorate(t2, s2, e2), this.glyphs = t2, this.bounds = this._createBounds(t2), this.isMultiline = s2.length > 1, this._hasRotation = e2.angle !== 0, this._transform = this._createGlyphTransform(this.bounds, e2);
    for (const i2 of t2)
      i2.setTransform(this._transform);
  }
  setRotation(e2) {
    if (e2 === 0 && this._rotation === 0)
      return;
    this._rotation = e2;
    const i2 = this._transform, o2 = h$6(n$e(), e2);
    o$8(i2, o2, i2);
    for (const t2 of this.glyphs)
      t2.setTransform(this._transform);
  }
  _decorate(t2, s2, e2) {
    if (!e2.decoration || e2.decoration === "none" || !t2.length)
      return;
    const i2 = e2.scale, n2 = e2.decoration === "underline" ? g : _$1, o2 = t2[0].textureBinding;
    for (const h2 of s2) {
      const s3 = h2.startX * i2, e3 = h2.startY * i2, r2 = (h2.width + h2.glyphWidthEnd) * i2;
      t2.push(new y(s3, e3 + n2 * i2, M(r2, o2), 1));
    }
  }
  get boundsT() {
    const t2 = this.bounds, s2 = r$f(n$d(), t2.x, t2.y);
    if (z$1(s2, s2, this._transform), this._hasRotation) {
      const e2 = Math.max(t2.width, t2.height);
      return new i$3(s2[0], s2[1], e2, e2);
    }
    return new i$3(s2[0], s2[1], t2.width, t2.height);
  }
  _createBounds(t2) {
    let s2 = 1 / 0, e2 = 1 / 0, i2 = 0, n2 = 0;
    for (const r2 of t2)
      s2 = Math.min(s2, r2.xTopLeft), e2 = Math.min(e2, r2.yTopLeft), i2 = Math.max(i2, r2.xTopLeft + r2.width), n2 = Math.max(n2, r2.yBottomRight);
    const o2 = i2 - s2, h2 = n2 - e2;
    return new i$3(s2 + o2 / 2, e2 + h2 / 2, o2, h2);
  }
  _createGlyphTransform(t2, s2) {
    const o2 = w * s2.angle, r2 = n$e(), c2 = n$d();
    return i$a(r2, r2, r$f(c2, s2.xOffset, -s2.yOffset)), s2.isCIM ? e$a(r2, r2, o2) : (i$a(r2, r2, r$f(c2, t2.x, t2.y)), e$a(r2, r2, o2), i$a(r2, r2, r$f(c2, -t2.x, -t2.y))), r2;
  }
}
class B$1 {
  constructor(t2, s2, e2, i2, n2, o2) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s2, e2)), this.end = Math.max(0, Math.max(s2, e2)), this.end < t2.length && (this.glyphWidthEnd = t2[this.end].metrics.width), this.width = i2, this.yMin = n2, this.yMax = o2;
  }
}
const b = (t2) => t2 === 10, R = (t2) => t2 === 32;
function L(t2, s2, e2) {
  const i2 = new Array(), n2 = 1 / e2.scale, o2 = e2.maxLineWidth * n2, h2 = s2 ? t2.length - 1 : 0, r2 = s2 ? -1 : t2.length, a2 = s2 ? -1 : 1;
  let c2 = h2, f2 = 0, d2 = 0, m2 = c2, l2 = m2, u2 = 0, g2 = 1 / 0, _2 = 0;
  for (; c2 !== r2; ) {
    const { code: s3, metrics: e3 } = t2[c2], n3 = Math.abs(e3.top);
    if (b(s3) || R(s3) || (g2 = Math.min(g2, n3), _2 = Math.max(_2, n3 + e3.height)), b(s3))
      c2 !== h2 && (i2.push(new B$1(t2, m2, c2 - a2, f2, g2, _2)), g2 = 1 / 0, _2 = 0), f2 = 0, m2 = c2 + a2, l2 = c2 + a2, d2 = 0;
    else if (R(s3))
      l2 = c2 + a2, d2 = 0, u2 = e3.advance, f2 += e3.advance;
    else if (f2 > o2) {
      if (l2 !== m2) {
        const s4 = l2 - 2 * a2;
        f2 -= u2, i2.push(new B$1(t2, m2, s4, f2 - d2, g2, _2)), g2 = 1 / 0, _2 = 0, m2 = l2, f2 = d2;
      } else
        i2.push(new B$1(t2, m2, c2 - a2, f2, g2, _2)), g2 = 1 / 0, _2 = 0, m2 = c2, l2 = c2, f2 = 0;
      f2 += e3.advance, d2 += e3.advance;
    } else
      f2 += e3.advance, d2 += e3.advance;
    c2 += a2;
  }
  const p2 = new B$1(t2, m2, c2 - a2, f2, g2, _2);
  return p2.start >= 0 && p2.end < t2.length && i2.push(p2), i2;
}
function v(t2, s2) {
  let e2 = 0;
  for (let o2 = 0; o2 < t2.length; o2++) {
    const { width: s3 } = t2[o2];
    e2 = Math.max(s3, e2);
  }
  const i2 = s2.decoration === "underline" ? u$2 : 0, n2 = t2[0].yMin;
  return { x: 0, y: n2, height: t2[t2.length - 1].yMax + s2.lineHeight * (t2.length - 1) + i2 - n2, width: e2 };
}
function j$1(t2, s2, e2) {
  const i2 = e2.scale, n2 = new Array(), o2 = L(t2, s2, e2), h2 = v(o2, e2), { vAlign: r2, hAlign: a2 } = e2, f2 = r2 === t$9.Baseline ? 1 : 0, d2 = f2 ? 0 : r2 - 1, m2 = (1 - f2) * -h2.y + d2 * (h2.height / 2) + (f2 ? 1 : 0) * -l$2;
  for (let c2 = 0; c2 < o2.length; c2++) {
    const { start: s3, end: h3, width: r3 } = o2[c2];
    let f3 = -1 * (a2 + 1) * (r3 / 2) - p;
    const d3 = c2 * e2.lineHeight + m2 - p;
    o2[c2].startX = f3, o2[c2].startY = d3;
    for (let e3 = s3; e3 <= h3; e3++) {
      const s4 = t2[e3];
      if (b(s4.code))
        continue;
      const o3 = new y(f3 + s4.metrics.left, d3 - s4.metrics.top, s4, i2);
      f3 += s4.metrics.advance, n2.push(o3);
    }
  }
  return new T$1(n2, o2, e2);
}
const E$1 = Math.PI / 180, J$2 = 10, N = s$b.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
class O {
  constructor(t2) {
    this._t = t2;
  }
  static createIdentity() {
    return new O([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t2 = this._t;
    return new O(t2.slice());
  }
  transform(t2) {
    const e2 = this._t;
    return [e2[0] * t2[0] + e2[1] * t2[1] + e2[2], e2[3] * t2[0] + e2[4] * t2[1] + e2[5]];
  }
  static createScale(t2, e2) {
    return new O([t2, 0, 0, 0, e2, 0]);
  }
  scale(t2, e2) {
    const r2 = this._t;
    return r2[0] *= t2, r2[1] *= t2, r2[2] *= t2, r2[3] *= e2, r2[4] *= e2, r2[5] *= e2, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t2, e2) {
    return new O([0, 0, t2, 0, 0, e2]);
  }
  translate(t2, e2) {
    const r2 = this._t;
    return r2[2] += t2, r2[5] += e2, this;
  }
  static createRotate(t2) {
    const e2 = Math.cos(t2), r2 = Math.sin(t2);
    return new O([e2, -r2, 0, r2, e2, 0]);
  }
  rotate(t2) {
    return O.multiply(this, O.createRotate(t2), this);
  }
  angle() {
    const t2 = this._t[0], e2 = this._t[3], r2 = Math.sqrt(t2 * t2 + e2 * e2);
    return [t2 / r2, e2 / r2];
  }
  static multiply(t2, e2, r2) {
    const i2 = t2._t, s2 = e2._t, o2 = i2[0] * s2[0] + i2[3] * s2[1], n2 = i2[1] * s2[0] + i2[4] * s2[1], a2 = i2[2] * s2[0] + i2[5] * s2[1] + s2[2], l2 = i2[0] * s2[3] + i2[3] * s2[4], h2 = i2[1] * s2[3] + i2[4] * s2[4], c2 = i2[2] * s2[3] + i2[5] * s2[4] + s2[5], m2 = r2._t;
    return m2[0] = o2, m2[1] = n2, m2[2] = a2, m2[3] = l2, m2[4] = h2, m2[5] = c2, r2;
  }
  invert() {
    const t2 = this._t;
    let e2 = t2[0] * t2[4] - t2[1] * t2[3];
    if (e2 === 0)
      return new O([0, 0, 0, 0, 0, 0]);
    e2 = 1 / e2;
    const r2 = (t2[1] * t2[5] - t2[2] * t2[4]) * e2, i2 = (t2[2] * t2[3] - t2[0] * t2[5]) * e2, s2 = t2[4] * e2, o2 = -t2[1] * e2, n2 = -t2[3] * e2, a2 = t2[0] * e2;
    return new O([s2, o2, r2, n2, a2, i2]);
  }
}
class Y$2 {
  constructor(t2, e2) {
    this._resourceManager = t2, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new e$d(t$4, void 0, void 0, 100), this._earlyReturn = false, this._mapRotation = 0, this._transfos.push(e2 || O.createIdentity()), this._sizeTransfos.push(e2 ? e2.scaleRatio() : 1);
  }
  setTransform(t2, e2) {
    this._transfos = [t2 || O.createIdentity()], this._sizeTransfos = [e2 || (t2 ? t2.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t2) {
    this._geomUnitsPerPoint = t2;
  }
  transformPt(t2) {
    return this._transfos[this._transfos.length - 1].transform(t2);
  }
  transformSize(t2) {
    return t2 * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t2) {
    return this._transfos[this._transfos.length - 1].invert().transform(t2);
  }
  reverseTransformSize(t2) {
    return t2 / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t2, e2) {
    const r2 = e2 ? t2.scaleRatio() : 1;
    O.multiply(t2, this.back(), t2), this._transfos.push(t2), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * r2);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t2, e2, r2) {
    if (t2)
      switch (t2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          this.drawMultiLayerSymbol(t2, e2);
          break;
        case "CIMTextSymbol":
          this.drawTextSymbol(t2, e2, r2);
      }
  }
  drawMultiLayerSymbol(t2, e2) {
    if (!t2)
      return;
    const r2 = t2.symbolLayers;
    if (!r2)
      return;
    const i2 = t2.effects;
    if (i2 && i2.length > 0) {
      const t3 = this.executeEffects(i2, e2);
      if (t3) {
        let e3 = t3.next();
        for (; e3; )
          this.drawSymbolLayers(r2, e3), e3 = t3.next();
      }
    } else
      this.drawSymbolLayers(r2, e2);
  }
  executeEffects(t2, e2) {
    const r2 = this._resourceManager.geometryEngine;
    let i2 = new r$e(e2);
    for (const s2 of t2) {
      const t3 = A(s2);
      t3 && (i2 = t3.execute(i2, s2, this.geomUnitsPerPoint(), r2));
    }
    return i2;
  }
  drawSymbolLayers(t2, e2) {
    let r2 = t2.length;
    for (; r2--; ) {
      const i2 = t2[r2];
      if (!i2 || i2.enable === false)
        continue;
      const s2 = i2.effects;
      if (s2 && s2.length > 0) {
        const t3 = this.executeEffects(s2, e2);
        if (t3) {
          let e3 = null;
          for (; (e3 = t3.next()) && (this.drawSymbolLayer(i2, e3), !this._earlyReturn); )
            ;
        }
      } else
        this.drawSymbolLayer(i2, e2);
      if (this._earlyReturn)
        return;
    }
  }
  drawSymbolLayer(t2, e2) {
    switch (t2.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e2, t2.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e2, t2);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e2, t2);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e2, t2);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e2, t2.color, t2.width, t2.capStyle, t2.joinStyle, t2.miterLimit);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e2, t2);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e2, t2);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t2, e2);
    }
  }
  drawHatchFill(t2, e2) {
    const r2 = this._buildHatchPolyline(e2, t2, this.geomUnitsPerPoint());
    r2 && (this.pushClipPath(t2), this.drawMultiLayerSymbol(e2.lineSymbol, r2), this.popClipPath());
  }
  drawPictureFill(t2, e2) {
  }
  drawGradientFill(t2, e2) {
  }
  drawPictureStroke(t2, e2) {
  }
  drawGradientStroke(t2, e2) {
  }
  drawMarkerLayer(t2, e2) {
    const r2 = t2.markerPlacement;
    if (r2) {
      const i2 = g$1(r2);
      if (i2) {
        const s2 = r2.type === "CIMMarkerPlacementInsidePolygon" || r2.type === "CIMMarkerPlacementPolygonCenter" && r2.clipAtBoundary;
        s2 && this.pushClipPath(e2);
        const o2 = i2.execute(e2, r2, this.geomUnitsPerPoint(), this._resourceManager.geometryEngine);
        if (o2) {
          let e3 = null;
          for (; (e3 = o2.next()) && (this.drawMarker(t2, e3), !this._earlyReturn); )
            ;
        }
        s2 && this.popClipPath();
      }
    } else {
      const r3 = this._placementPool.acquire();
      if (s$8(e2))
        r3.tx = e2.x, r3.ty = e2.y, this.drawMarker(t2, r3);
      else if (y$4(e2))
        [r3.tx, r3.ty] = r$h(e2), this.drawMarker(t2, r3);
      else
        for (const i2 of e2.points)
          if (r3.tx = i2[0], r3.ty = i2[1], this.drawMarker(t2, r3), this._earlyReturn)
            break;
      this._placementPool.release(r3);
    }
  }
  drawMarker(t2, e2) {
    switch (t2.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t2, e2);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t2, e2);
    }
  }
  drawPictureMarker(t2, e2) {
    var _a, _b, _c, _d, _e;
    if (!t2)
      return;
    const r2 = this._resourceManager.getResource(t2.url), i2 = (_a = t2.size) != null ? _a : 10;
    if (t$a(r2) || i2 <= 0)
      return;
    const o2 = r2.width, n2 = r2.height;
    if (!o2 || !n2)
      return;
    const a2 = o2 / n2, l2 = (_b = t2.scaleX) != null ? _b : 1, h2 = O.createIdentity(), c2 = t2.anchorPoint;
    if (c2) {
      let e3 = c2.x, r3 = c2.y;
      t2.anchorPointUnits !== "Absolute" && (e3 *= i2 * a2 * l2, r3 *= i2), h2.translate(-e3, -r3);
    }
    let m2 = (_c = t2.rotation) != null ? _c : 0;
    t2.rotateClockwise && (m2 = -m2), this._mapRotation && (m2 += this._mapRotation), m2 && h2.rotate(m2 * E$1);
    let f2 = (_d = t2.offsetX) != null ? _d : 0, u2 = (_e = t2.offsetY) != null ? _e : 0;
    if (f2 || u2) {
      if (this._mapRotation) {
        const t3 = E$1 * this._mapRotation, e3 = Math.cos(t3), r3 = Math.sin(t3), i3 = f2 * r3 + u2 * e3;
        f2 = f2 * e3 - u2 * r3, u2 = i3;
      }
      h2.translate(f2, u2);
    }
    const p2 = this.geomUnitsPerPoint();
    p2 !== 1 && h2.scale(p2, p2);
    const d2 = e2.getAngle();
    d2 && h2.rotate(d2), h2.translate(e2.tx, e2.ty), this.push(h2, false), this.drawImage(t2, i2), this.pop();
  }
  drawVectorMarker(t2, e2) {
    var _a, _b, _c, _d;
    if (!t2)
      return;
    const r2 = t2.markerGraphics;
    if (!r2)
      return;
    const i2 = (_a = t2.size) != null ? _a : 10, s2 = t2.frame, o2 = s2 ? s2.ymax - s2.ymin : 0, n2 = i2 && o2 ? i2 / o2 : 1, a2 = O.createIdentity();
    s2 && a2.translate(0.5 * -(s2.xmax + s2.xmin), 0.5 * -(s2.ymax + s2.ymin));
    const l2 = t2.anchorPoint;
    if (l2) {
      let e3 = l2.x, r3 = l2.y;
      t2.anchorPointUnits !== "Absolute" ? s2 && (e3 *= s2.xmax - s2.xmin, r3 *= s2.ymax - s2.ymin) : (e3 /= n2, r3 /= n2), a2.translate(-e3, -r3);
    }
    n2 !== 1 && a2.scale(n2, n2);
    let h2 = (_b = t2.rotation) != null ? _b : 0;
    t2.rotateClockwise && (h2 = -h2), this._mapRotation && (h2 += this._mapRotation), h2 && a2.rotate(h2 * E$1);
    let c2 = (_c = t2.offsetX) != null ? _c : 0, m2 = (_d = t2.offsetY) != null ? _d : 0;
    if (c2 || m2) {
      if (this._mapRotation) {
        const t3 = E$1 * this._mapRotation, e3 = Math.cos(t3), r3 = Math.sin(t3), i3 = c2 * r3 + m2 * e3;
        c2 = c2 * e3 - m2 * r3, m2 = i3;
      }
      a2.translate(c2, m2);
    }
    const f2 = this.geomUnitsPerPoint();
    f2 !== 1 && a2.scale(f2, f2);
    const u2 = e2.getAngle();
    u2 && a2.rotate(u2), a2.translate(e2.tx, e2.ty), this.push(a2, t2.scaleSymbolsProportionally);
    for (const p2 of r2)
      if (p2 && p2.symbol && p2.geometry || N.error("Invalid marker graphic", p2), this.drawSymbol(p2.symbol, p2.geometry, p2.textString), this._earlyReturn)
        break;
    this.pop();
  }
  drawTextSymbol(t2, e2, r2) {
    var _a, _b, _c, _d;
    if (!t2)
      return;
    if (!s$8(e2))
      return;
    if (((_a = t2.height) != null ? _a : 10) <= 0)
      return;
    const i2 = O.createIdentity();
    let s2 = (_b = t2.angle) != null ? _b : 0;
    s2 = -s2, s2 && i2.rotate(s2 * E$1);
    const o2 = (_c = t2.offsetX) != null ? _c : 0, n2 = (_d = t2.offsetY) != null ? _d : 0;
    (o2 || n2) && i2.translate(o2, n2);
    const a2 = this.geomUnitsPerPoint();
    a2 !== 1 && i2.scale(a2, a2), i2.translate(e2.x, e2.y), this.push(i2, false), this.drawText(t2, r2), this.pop();
  }
  _buildHatchPolyline(t2, e2, r2) {
    let i2 = (t2.separation !== void 0 ? t2.separation : 4) * r2, s2 = t2.rotation !== void 0 ? t2.rotation : 0;
    if (i2 === 0)
      return null;
    i2 < 0 && (i2 = -i2);
    let o2 = 0;
    const n2 = 0.5 * i2;
    for (; o2 > n2; )
      o2 -= i2;
    for (; o2 < -n2; )
      o2 += i2;
    const a2 = u$a();
    c$a(a2, e2), a2[0] -= n2, a2[1] -= n2, a2[2] += n2, a2[3] += n2;
    const l2 = [[a2[0], a2[1]], [a2[0], a2[3]], [a2[2], a2[3]], [a2[2], a2[1]]];
    for (; s2 > 180; )
      s2 -= 180;
    for (; s2 < 0; )
      s2 += 180;
    const c2 = Math.cos(s2 * E$1), f2 = Math.sin(s2 * E$1), u2 = -i2 * f2, p2 = i2 * c2;
    let d2, _2, g2, y2;
    o2 = (t2.offsetX !== void 0 ? t2.offsetX * r2 : 0) * f2 - (t2.offsetY !== void 0 ? t2.offsetY * r2 : 0) * c2, d2 = g2 = Number.MAX_VALUE, _2 = y2 = -Number.MAX_VALUE;
    for (const h2 of l2) {
      const t3 = h2[0], e3 = h2[1], r3 = c2 * t3 + f2 * e3, i3 = -f2 * t3 + c2 * e3;
      d2 = Math.min(d2, r3), g2 = Math.min(g2, i3), _2 = Math.max(_2, r3), y2 = Math.max(y2, i3);
    }
    g2 = Math.floor(g2 / i2) * i2;
    let P2 = c2 * d2 - f2 * g2 - u2 * o2 / i2, w2 = f2 * d2 + c2 * g2 - p2 * o2 / i2, x2 = c2 * _2 - f2 * g2 - u2 * o2 / i2, S2 = f2 * _2 + c2 * g2 - p2 * o2 / i2;
    const M2 = 1 + Math.round((y2 - g2) / i2), b2 = [];
    for (let h2 = 0; h2 < M2; h2++)
      P2 += u2, w2 += p2, x2 += u2, S2 += p2, b2.push([[P2, w2], [x2, S2]]);
    return { paths: b2 };
  }
}
class q$2 extends Y$2 {
  constructor(t2, e2) {
    super(t2, e2), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new t$1(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return o$9(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t2) {
    if (t2 && !(this._clipCount > 0))
      if (y$4(t2))
        this._processPath(t2.rings, 0);
      else if (f$7(t2))
        this._processPath(t2.paths, 0);
      else if (u$9(t2)) {
        const e2 = Q$2(t2);
        e2 && this._processPath(e2.rings, 0);
      } else
        console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t2, e2, r2) {
    if (!t2 || this._clipCount > 0)
      return;
    const i2 = 0.5 * this.transformSize(r2);
    if (y$4(t2))
      this._processPath(t2.rings, i2);
    else if (f$7(t2))
      this._processPath(t2.paths, i2);
    else if (u$9(t2)) {
      const e3 = Q$2(t2);
      e3 && this._processPath(e3.rings, i2);
    } else
      console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t2, e2) {
    y$4(e2) && t2.markerPlacement && (t2.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t2.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t2.markerPlacement.clipAtBoundary) ? this._processPath(e2.rings, 0) : super.drawMarkerLayer(t2, e2);
  }
  drawHatchFill(t2, e2) {
    this.drawSolidFill(t2);
  }
  drawPictureFill(t2, e2) {
    this.drawSolidFill(t2);
  }
  drawGradientFill(t2, e2) {
    this.drawSolidFill(t2);
  }
  drawPictureStroke(t2, e2) {
    this.drawSolidStroke(t2, null, e2.width);
  }
  drawGradientStroke(t2, e2) {
    this.drawSolidStroke(t2, null, e2.width);
  }
  pushClipPath(t2) {
    this.drawSolidFill(t2), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t2, e2) {
    var _a;
    const { url: r2 } = t2, i2 = (_a = t2.scaleX) != null ? _a : 1;
    let s2 = i2 * e2, n2 = e2;
    const a2 = this._resourceManager.getResource(r2);
    !e2 && r$g(a2) && (s2 = i2 * a2.width, n2 = a2.height), this._merge(this.transformPt([-s2 / 2, -n2 / 2]), 0), this._merge(this.transformPt([-s2 / 2, n2 / 2]), 0), this._merge(this.transformPt([s2 / 2, -n2 / 2]), 0), this._merge(this.transformPt([s2 / 2, n2 / 2]), 0);
  }
  drawText(t2, e2) {
    if (!e2 || e2.length === 0)
      return;
    this._textRasterizer || (this._textRasterizer = new s$2());
    const r2 = et(t2), [i2, s2] = this._textRasterizer.computeTextSize(e2, r2);
    let o2 = 0;
    switch (t2.horizontalAlignment) {
      case "Left":
        o2 = i2 / 2;
        break;
      case "Right":
        o2 = -i2 / 2;
    }
    let n2 = 0;
    switch (t2.verticalAlignment) {
      case "Bottom":
        n2 = s2 / 2;
        break;
      case "Top":
        n2 = -s2 / 2;
        break;
      case "Baseline":
        n2 = s2 / 6;
    }
    this._merge(this.transformPt([-i2 / 2 + o2, -s2 / 2 + n2]), 0), this._merge(this.transformPt([-i2 / 2 + o2, s2 / 2 + n2]), 0), this._merge(this.transformPt([i2 / 2 + o2, -s2 / 2 + n2]), 0), this._merge(this.transformPt([i2 / 2 + o2, s2 / 2 + n2]), 0);
  }
  _processPath(t2, e2) {
    if (t2)
      for (const r2 of t2) {
        const t3 = r2 ? r2.length : 0;
        if (t3 > 1) {
          this._merge(this.transformPt(r2[0]), e2);
          for (let i2 = 1; i2 < t3; i2++)
            this._merge(this.transformPt(r2[i2]), e2);
        }
      }
  }
  _merge(t2, e2) {
    t2[0] - e2 < this._xmin && (this._xmin = t2[0] - e2), t2[0] + e2 > this._xmax && (this._xmax = t2[0] + e2), t2[1] - e2 < this._ymin && (this._ymin = t2[1] - e2), t2[1] + e2 > this._ymax && (this._ymax = t2[1] + e2);
  }
}
class V$1 extends Y$2 {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0;
  }
  hitTest(t2, e2, r2, i2, s2, o2) {
    const n2 = o2 * u$c(1);
    this.setTransform(), this.setGeomUnitsPerPoint(n2), this._searchPoint = [(t2[0] + t2[2]) / 2, (t2[1] + t2[3]) / 2], this._searchDistPoint = (t2[2] - t2[0]) / 2 / n2, this._textInfo = i2;
    const a2 = e2 && (e2.type === "CIMPointSymbol" && e2.angleAlignment !== "Map" || e2.type === "CIMTextSymbol");
    return this._mapRotation = a2 ? s2 : 0, this._earlyReturn = false, this.drawSymbol(e2, r2), this._earlyReturn;
  }
  drawSolidFill(t2, e2) {
    this._hitTestFill(t2);
  }
  drawHatchFill(t2, e2) {
    this._hitTestFill(t2);
  }
  drawPictureFill(t2, e2) {
    this._hitTestFill(t2);
  }
  drawGradientFill(t2, e2) {
    this._hitTestFill(t2);
  }
  drawSolidStroke(t2, e2, r2, i2, s2, o2) {
    this._hitTestStroke(t2, r2);
  }
  drawPictureStroke(t2, e2) {
    this._hitTestStroke(t2, e2.width);
  }
  drawGradientStroke(t2, e2) {
    this._hitTestStroke(t2, e2.width);
  }
  drawMarkerLayer(t2, e2) {
    t2.markerPlacement && (t2.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t2.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t2.markerPlacement.clipAtBoundary) ? this._hitTestFill(e2) : super.drawMarkerLayer(t2, e2);
  }
  pushClipPath(t2) {
  }
  popClipPath() {
  }
  drawImage(t2, e2) {
    var _a;
    const { url: r2 } = t2, i2 = (_a = t2.scaleX) != null ? _a : 1, o2 = this._resourceManager.getResource(r2);
    if (t$a(o2) || o2.height === 0 || e2 === 0)
      return;
    const n2 = e2 * this.geomUnitsPerPoint(), a2 = n2 * i2 * (o2.width / o2.height), l2 = this.reverseTransformPt(this._searchPoint), h2 = this._searchDistPoint;
    Math.abs(l2[0]) < a2 / 2 + h2 && Math.abs(l2[1]) < n2 / 2 + h2 && (this._earlyReturn = true);
  }
  drawText(e2, r2) {
    var _a, _b;
    const i2 = this._textInfo;
    if (!i2)
      return;
    const s2 = i2.get(e2);
    if (!s2)
      return;
    const { text: o2, mosaicItem: n2 } = s2;
    if (!n2 || n2.glyphMosaicItems.length === 0)
      return;
    const a2 = (_a = e2.height) != null ? _a : J$2, l2 = tt(e2.lineGapType, (_b = e2.lineGap) != null ? _b : 0, a2), h2 = n$b(o2)[1], c2 = n2.glyphMosaicItems, m2 = j$1(c2, h2, { scale: a2 / j$4, angle: 0, xOffset: 0, yOffset: 0, hAlign: Z$2(e2.horizontalAlignment), vAlign: $$2(e2.verticalAlignment), maxLineWidth: 512, lineHeight: f$8 * Math.max(0.25, Math.min(l2 || 1, 4)), decoration: e2.font.decoration || "none", isCIM: true }), f2 = this.reverseTransformPt(this._searchPoint), u2 = f2[0], p2 = f2[1];
    for (const t2 of m2.glyphs)
      if (u2 > t2.xTopLeft && u2 < t2.xBottomRight && p2 > -t2.yBottomRight && p2 < -t2.yTopLeft) {
        this._earlyReturn = true;
        break;
      }
  }
  _hitTestFill(t2) {
    let e2 = null;
    if (u$9(t2)) {
      const r3 = t2;
      e2 = [[[r3.xmin, r3.ymin], [r3.xmin, r3.ymax], [r3.xmax, r3.ymax], [r3.xmax, r3.ymin], [r3.xmin, r3.ymin]]];
    } else if (y$4(t2))
      e2 = t2.rings;
    else {
      if (!f$7(t2))
        return;
      e2 = t2.paths;
    }
    const r2 = this.reverseTransformPt(this._searchPoint);
    if (this._pointInPolygon(r2, e2) && (this._earlyReturn = true), !this._earlyReturn) {
      const t3 = this.reverseTransformSize(this._searchDistPoint) * this.geomUnitsPerPoint();
      this._nearLine(r2, e2, t3) && (this._earlyReturn = true);
    }
  }
  _hitTestStroke(t2, e2) {
    let r2 = null;
    if (u$9(t2)) {
      const e3 = t2;
      r2 = [[[e3.xmin, e3.ymin], [e3.xmin, e3.ymax], [e3.xmax, e3.ymax], [e3.xmax, e3.ymin], [e3.xmin, e3.ymin]]];
    } else if (y$4(t2))
      r2 = t2.rings;
    else {
      if (!f$7(t2))
        return;
      r2 = t2.paths;
    }
    const i2 = this.reverseTransformPt(this._searchPoint), s2 = e2 * this.geomUnitsPerPoint(), o2 = this.reverseTransformSize(this._searchDistPoint) * this.geomUnitsPerPoint();
    this._nearLine(i2, r2, s2 / 2 + o2) && (this._earlyReturn = true);
  }
  _pointInPolygon(t2, e2) {
    let r2 = 0;
    for (const i2 of e2) {
      const e3 = i2.length;
      for (let s2 = 1; s2 < e3; s2++) {
        const e4 = i2[s2 - 1], o2 = i2[s2];
        if (e4[1] > t2[1] == o2[1] > t2[1])
          continue;
        (o2[0] - e4[0]) * (t2[1] - e4[1]) - (o2[1] - e4[1]) * (t2[0] - e4[0]) > 0 ? r2++ : r2--;
      }
    }
    return r2 !== 0;
  }
  _nearLine(t2, e2, r2) {
    for (const i2 of e2) {
      const e3 = i2.length;
      for (let s2 = 1; s2 < e3; s2++) {
        const e4 = i2[s2 - 1], o2 = i2[s2];
        let n2 = (o2[0] - e4[0]) * (o2[0] - e4[0]) + (o2[1] - e4[1]) * (o2[1] - e4[1]);
        if (n2 === 0)
          continue;
        n2 = Math.sqrt(n2);
        const a2 = ((o2[0] - e4[0]) * (t2[1] - e4[1]) - (o2[1] - e4[1]) * (t2[0] - e4[0])) / n2;
        if (Math.abs(a2) < r2) {
          const i3 = ((o2[0] - e4[0]) * (t2[0] - e4[0]) + (o2[1] - e4[1]) * (t2[1] - e4[1])) / n2;
          if (i3 > -r2 && i3 < n2 + r2)
            return true;
        }
      }
    }
    return false;
  }
}
class W$2 extends Y$2 {
  constructor(t2, e2, r2, i2) {
    super(e2, r2), this._applyAdditionalRenderProps = i2, this._colorSubstitutionHelper = new a$a(), this._ctx = t2;
  }
  drawSolidFill(t2, e2) {
    if (!t2)
      return;
    if (y$4(t2))
      this._buildPath(t2.rings, true);
    else if (f$7(t2))
      this._buildPath(t2.paths, true);
    else if (u$9(t2))
      this._buildPath(Q$2(t2).rings, true);
    else {
      if (!l$a(t2))
        return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const r2 = this._ctx;
    r2.fillStyle = typeof e2 == "string" ? e2 : "rgba(" + Math.round(e2[0]) + "," + Math.round(e2[1]) + "," + Math.round(e2[2]) + "," + e2[3] / 255 + ")", r2.fill("evenodd");
  }
  drawSolidStroke(t2, e2, r2, i2, s2, o2) {
    if (!t2 || !e2 || r2 === 0)
      return;
    if (y$4(t2))
      this._buildPath(t2.rings, true);
    else if (f$7(t2))
      this._buildPath(t2.paths, false);
    else {
      if (!u$9(t2))
        return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(Q$2(t2).rings, true);
    }
    const n2 = this._ctx;
    n2.strokeStyle = typeof e2 == "string" ? e2 : "rgba(" + Math.round(e2[0]) + "," + Math.round(e2[1]) + "," + Math.round(e2[2]) + "," + e2[3] / 255 + ")", n2.lineWidth = Math.max(this.transformSize(r2), 0.5), this._setCapStyle(i2), this._setJoinStyle(s2), n2.miterLimit = o2, n2.stroke();
  }
  pushClipPath(t2) {
    if (this._ctx.save(), y$4(t2))
      this._buildPath(t2.rings, true);
    else if (f$7(t2))
      this._buildPath(t2.paths, true);
    else {
      if (!u$9(t2))
        return;
      this._buildPath(Q$2(t2).rings, true);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t2, e2) {
    var _a;
    const { colorSubstitutions: r2, url: i2, tintColor: o2 } = t2, n2 = (_a = t2.scaleX) != null ? _a : 1, a2 = this._resourceManager.getResource(i2);
    if (t$a(a2))
      return;
    let l2 = e2 * (a2.width / a2.height), h2 = e2;
    e2 || (l2 = a2.width, h2 = a2.height);
    const c2 = A$1(i2) || "src" in a2 && A$1(a2.src);
    let m2 = "getFrame" in a2 ? t$2(a2) : a2;
    r2 && (m2 = this._colorSubstitutionHelper.applyColorSubstituition(m2, r2)), this._applyAdditionalRenderProps && !c2 && o2 && (m2 = this._colorSubstitutionHelper.tintImageData(m2, o2));
    const f2 = this.transformPt([0, 0]), [u2, p2] = this.getTransformAngle(), d2 = this.transformSize(1), _2 = this._ctx;
    _2.save(), _2.setTransform({ m11: n2 * d2 * u2, m12: n2 * d2 * p2, m21: -d2 * p2, m22: d2 * u2, m41: f2[0], m42: f2[1] }), _2.drawImage(m2, -l2 / 2, -h2 / 2, l2, h2), _2.restore();
  }
  drawText(t2, e2) {
    if (!e2 || e2.length === 0)
      return;
    this._textRasterizer || (this._textRasterizer = new s$2());
    const r2 = et(t2);
    r2.size *= this.transformSize(e$b(1));
    const i2 = this._textRasterizer.rasterizeText(e2, r2);
    if (!i2)
      return;
    const { size: s2, anchorX: o2, anchorY: n2, canvas: l2 } = i2, h2 = s2[0] * (o2 + 0.5), c2 = s2[1] * (n2 - 0.5), m2 = this._ctx, f2 = this.transformPt([0, 0]), [u2, p2] = this.getTransformAngle(), d2 = 1;
    m2.save(), m2.setTransform({ m11: d2 * u2, m12: d2 * p2, m21: -d2 * p2, m22: d2 * u2, m41: f2[0] - d2 * h2, m42: f2[1] + d2 * c2 }), m2.drawImage(l2, 0, 0), m2.restore();
  }
  drawPictureFill(t2, e2) {
    if (!t2)
      return;
    let { colorSubstitutions: r2, height: i2, offsetX: o2, offsetY: n2, rotation: a2, scaleX: l2, tintColor: h2, url: c2 } = e2;
    const m2 = this._resourceManager.getResource(c2);
    if (t$a(m2))
      return;
    if (y$4(t2))
      this._buildPath(t2.rings, true);
    else if (f$7(t2))
      this._buildPath(t2.paths, true);
    else if (u$9(t2))
      this._buildPath(Q$2(t2).rings, true);
    else {
      if (!l$a(t2))
        return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const f2 = this._ctx, u2 = A$1(c2) || "src" in m2 && A$1(m2.src);
    let y2, P2 = "getFrame" in m2 ? t$2(m2) : m2;
    if (r2 && (P2 = this._colorSubstitutionHelper.applyColorSubstituition(P2, r2)), this._applyAdditionalRenderProps) {
      u2 || h2 && (P2 = this._colorSubstitutionHelper.tintImageData(P2, h2)), y2 = f2.createPattern(P2, "repeat");
      const t3 = this.transformSize(1);
      a2 || (a2 = 0), o2 ? o2 *= t3 : o2 = 0, n2 ? n2 *= t3 : n2 = 0, i2 && (i2 *= t3);
      const e3 = i2 ? i2 / m2.height : 1, r3 = l2 && i2 ? l2 * i2 / m2.width : 1;
      if (a2 !== 0 || e3 !== 1 || r3 !== 1 || o2 !== 0 || n2 !== 0) {
        const t4 = new DOMMatrix();
        t4.rotateSelf(0, 0, -a2).translateSelf(o2, n2).scaleSelf(r3, e3, 1), y2.setTransform(t4);
      }
    } else
      y2 = f2.createPattern(P2, "repeat");
    f2.save(), f2.fillStyle = y2, f2.fill("evenodd"), f2.restore();
  }
  drawPictureStroke(t2, e2) {
    if (!t2)
      return;
    let { colorSubstitutions: i2, capStyle: o2, joinStyle: n2, miterLimit: a2, tintColor: h2, url: c2, width: m2 } = e2;
    const f2 = this._resourceManager.getResource(c2);
    if (t$a(f2))
      return;
    let u2;
    if (y$4(t2))
      u2 = t2.rings;
    else if (f$7(t2))
      u2 = t2.paths;
    else if (u$9(t2))
      u2 = Q$2(t2).rings;
    else {
      if (!l$a(t2))
        return;
      console.log("CanvasDrawHelper.drawPictureStroke - No implementation!");
    }
    m2 || (m2 = f2.width);
    const y2 = A$1(c2) || "src" in f2 && A$1(f2.src);
    let P2 = "getFrame" in f2 ? t$2(f2) : f2;
    i2 && (P2 = this._colorSubstitutionHelper.applyColorSubstituition(P2, i2)), this._applyAdditionalRenderProps && (y2 || h2 && (P2 = this._colorSubstitutionHelper.tintImageData(P2, h2)));
    const w2 = Math.max(this.transformSize(u$c(m2)), 0.5), x2 = w2 / P2.width, S2 = this._ctx, M2 = S2.createPattern(P2, "repeat-y");
    let b2, C2;
    S2.save(), this._setCapStyle(o2), this._setJoinStyle(n2), S2.miterLimit = a2, S2.lineWidth = w2;
    for (let s2 of u2)
      if (s2 = y$3(s2), it(s2), s2 && !(s2.length <= 1)) {
        b2 = this.transformPt(s2[0]);
        for (let t3 = 1; t3 < s2.length; t3++) {
          C2 = this.transformPt(s2[t3]);
          const e3 = K$2(b2, C2), r2 = new DOMMatrix();
          r2.translateSelf(0, b2[1] - w2 / 2).scaleSelf(x2, x2, 1).rotateSelf(0, 0, 90 - e3), M2.setTransform(r2), S2.strokeStyle = M2, S2.beginPath(), S2.moveTo(b2[0], b2[1]), S2.lineTo(C2[0], C2[1]), S2.stroke(), b2 = C2;
        }
      }
    S2.restore();
  }
  _buildPath(t2, e2) {
    const r2 = this._ctx;
    if (r2.beginPath(), t2)
      for (const i2 of t2) {
        const t3 = i2 ? i2.length : 0;
        if (t3 > 1) {
          let s2 = this.transformPt(i2[0]);
          r2.moveTo(s2[0], s2[1]);
          for (let e3 = 1; e3 < t3; e3++)
            s2 = this.transformPt(i2[e3]), r2.lineTo(s2[0], s2[1]);
          e2 && r2.closePath();
        }
      }
  }
  _setCapStyle(t2) {
    switch (t2) {
      case U$3.Butt:
        this._ctx.lineCap = "butt";
        break;
      case U$3.Round:
        this._ctx.lineCap = "round";
        break;
      case U$3.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t2) {
    switch (t2) {
      case w$4.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case w$4.Round:
        this._ctx.lineJoin = "round";
        break;
      case w$4.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
}
function K$2(t2, e2) {
  const r2 = e2[0] - t2[0], i2 = e2[1] - t2[1];
  return 180 / Math.PI * Math.atan2(i2, r2);
}
const Q$2 = (t2) => t2 ? { spatialReference: t2.spatialReference, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] } : null, Z$2 = (t2) => {
  switch (t2) {
    case "Left":
      return e$c.Left;
    case "Right":
      return e$c.Right;
    case "Center":
      return e$c.Center;
    case "Justify":
      return N.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), e$c.Center;
  }
}, $$2 = (t2) => {
  switch (t2) {
    case "Top":
      return t$9.Top;
    case "Center":
      return t$9.Center;
    case "Bottom":
      return t$9.Bottom;
    case "Baseline":
      return t$9.Baseline;
  }
}, tt = (t2, e2, r2) => {
  switch (t2) {
    case "ExtraLeading":
      return 1 + e2 / r2;
    case "Multiple":
      return e2;
    case "Exact":
      return e2 / r2;
  }
};
function et(t2, r2 = 1) {
  const i2 = g$5(t2), s2 = S(t2.fontStyleName), o2 = a$b(t2.fontFamilyName), { weight: n2, style: a2 } = s2, l2 = r2 * (t2.height || 5), h2 = w$2(t2.horizontalAlignment), c2 = x$3(t2.verticalAlignment), m2 = k$1(t2), f2 = P$2(t2.haloSymbol), u2 = f2 ? r2 * (0 | t2.haloSize) : 0;
  return { color: m2, size: l2, horizontalAlignment: h2, verticalAlignment: c2, font: { family: o2, style: I$1(a2), weight: h$5(n2), decoration: i2 }, halo: { size: u2 || 0, color: f2, style: a2 }, pixelRatio: 1, premultiplyColors: true };
}
const rt = 1e-4;
function it(t2) {
  let e2, r2, i2, s2, o2, n2 = t2[0], a2 = 1;
  for (; a2 < t2.length; )
    e2 = t2[a2][0] - n2[0], r2 = t2[a2][1] - n2[1], s2 = e2 !== 0 ? r2 / e2 : Math.PI / 2, i2 !== void 0 && s2 - i2 <= rt ? (t2.splice(a2 - 1, 1), n2 = o2) : (o2 = n2, n2 = t2[a2], a2++), i2 = s2;
}
function i$2(e2, o2, n2, a2, s2) {
  if (t$a(e2))
    return null;
  const i2 = e2.referencesGeometry() && s2 ? c$2(o2, a2, s2) : o2, u2 = e2.repurposeFeature(i2);
  try {
    return e2.evaluate(__spreadProps(__spreadValues({}, n2), { $feature: u2 }));
  } catch (m2) {
    return s$b.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", m2), null;
  }
}
const u$1 = new Map();
function c$2(e2, r2, t2) {
  const { transform: o2, hasZ: n2, hasM: a2 } = t2;
  u$1.has(r2) || u$1.set(r2, m$1(r2));
  const s2 = u$1.get(r2)(e2.geometry, o2, n2, a2);
  return __spreadProps(__spreadValues({}, e2), { geometry: s2 });
}
function m$1(t2) {
  const i2 = {};
  switch (t2) {
    case "esriGeometryPoint":
      return (e2, r2, t3, o2) => v$1(r2, i2, e2, t3, o2);
    case "esriGeometryPolygon":
      return (e2, r2, t3, o2) => B$3(r2, i2, e2, t3, o2);
    case "esriGeometryPolyline":
      return (e2, r2, t3, o2) => C$3(r2, i2, e2, t3, o2);
    case "esriGeometryMultipoint":
      return (e2, r2, t3, n2) => q$4(r2, i2, e2, t3, n2);
    default:
      return s$b.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s$c("mapview-arcade", `Unable to handle geometryType: ${t2}`)), (e2) => e2;
  }
}
const Y$1 = Math.PI, $$1 = Y$1 / 2, U$1 = 4, q$1 = 10, W$1 = 96 / 72, J$1 = Math.PI / 180, K$1 = s$b.getLogger("esri.symbols.cim.CIMSymbolHelper");
function Q$1(e2) {
  if (!e2 || !e2.type)
    return null;
  let t2;
  switch (e2.type) {
    case "cim":
      return e2.data;
    case "web-style":
      return e2;
    case "simple-marker":
      t2 = oe$1.fromSimpleMarker(e2);
      break;
    case "picture-marker":
      t2 = oe$1.fromPictureMarker(e2);
      break;
    case "simple-line":
      t2 = oe$1.fromSimpleLineSymbol(e2);
      break;
    case "simple-fill":
      t2 = oe$1.fromSimpleFillSymbol(e2);
      break;
    case "picture-fill":
      t2 = oe$1.fromPictureFillSymbol(e2);
      break;
    case "text":
      t2 = oe$1.fromTextSymbol(e2);
  }
  return { type: "CIMSymbolReference", symbol: t2 };
}
function Z$1(e2, t2, r2) {
  switch (t2.type) {
    case "CIMSymbolReference":
      return Z$1(e2, t2.symbol, r2);
    case "CIMPointSymbol":
      r2 == null && (r2 = { x: 0, y: 0 }), e2.drawSymbol(t2, r2);
      break;
    case "CIMLineSymbol":
      r2 == null && (r2 = { paths: [[[0, 0], [10, 0]]] }), e2.drawSymbol(t2, r2);
      break;
    case "CIMPolygonSymbol":
      r2 == null && (r2 = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), e2.drawSymbol(t2, r2);
      break;
    case "CIMTextSymbol": {
      const r3 = { x: 0, y: 0 };
      e2.drawSymbol(t2, r3);
      break;
    }
    case "CIMVectorMarker": {
      const r3 = new t$4();
      e2.drawMarker(t2, r3);
      break;
    }
  }
  return e2.envelope();
}
function ee$1(e2) {
  if (!e2)
    return 0;
  switch (e2.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(e2.offset);
    default:
      return 0;
  }
}
function te$1(e2) {
  if (!e2)
    return 0;
  switch (e2.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * e2.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(e2.size);
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(e2.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * e2.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(b$3(e2.offsetX)), Math.abs(b$3(e2.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(e2.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(e2.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(e2.fromWidth), Math.abs(e2.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(e2.amplitude);
  }
}
function re$1(e2) {
  if (!e2)
    return 0;
  let t2 = 0;
  for (const r2 of e2)
    t2 += te$1(r2);
  return t2;
}
class ae$1 {
  getSymbolInflateSize(e2, t2, r2, a2, o2) {
    return e2 || (e2 = [0, 0, 0, 0]), t2 ? this._getInflateSize(e2, t2, r2, a2, o2) : e2;
  }
  static safeSize(e2) {
    const t2 = Math.max(Math.abs(e2[0]), Math.abs(e2[2])), r2 = Math.max(Math.abs(e2[1]), Math.abs(e2[3]));
    return Math.sqrt(t2 * t2 + r2 * r2);
  }
  _vectorMarkerBounds(e2, t2, r2, a2) {
    let o2 = true;
    const i2 = u$a();
    if (t2 && t2.markerGraphics)
      for (const s2 of t2.markerGraphics) {
        const t3 = [0, 0, 0, 0];
        s2.geometry && (c$a(i2, s2.geometry), t3[0] = 0, t3[1] = 0, t3[2] = 0, t3[3] = 0, this.getSymbolInflateSize(t3, s2.symbol, r2, 0, a2), i2[0] += t3[0], i2[1] += t3[1], i2[2] += t3[2], i2[3] += t3[3], o2 ? (e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], o2 = false) : (e2[0] = Math.min(e2[0], i2[0]), e2[1] = Math.min(e2[1], i2[1]), e2[2] = Math.max(e2[2], i2[2]), e2[3] = Math.max(e2[3], i2[3])));
      }
    return e2;
  }
  _getInflateSize(e2, t2, r2, a2, o2) {
    if (ue$1(t2)) {
      const i2 = this._getLayersInflateSize(e2, t2.symbolLayers, r2, a2, o2), s2 = re$1(t2.effects);
      return s2 > 0 && (i2[0] -= s2, i2[1] -= s2, i2[2] += s2, i2[3] += s2), i2;
    }
    return this._getTextInflatedSize(e2, t2, o2);
  }
  _getLayersInflateSize(e2, t2, r2, a2, i2) {
    let s2 = true;
    if (!t2)
      return e2;
    for (const n2 of t2) {
      if (!n2)
        continue;
      let t3 = [0, 0, 0, 0];
      switch (n2.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const e3 = n2;
          let r3 = e3.width;
          e3.capStyle === U$3.Square || e3.joinStyle === w$4.Miter ? r3 /= 1.4142135623730951 : r3 /= 2, t3[0] = -r3, t3[1] = -r3, t3[2] = r3, t3[3] = r3;
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const e3 = n2;
          if (n2.type === "CIMVectorMarker") {
            const e4 = n2;
            if (t3 = this._vectorMarkerBounds(t3, e4, r2, i2), e4.frame) {
              const r3 = (e4.frame.xmin + e4.frame.xmax) / 2, a3 = (e4.frame.ymin + e4.frame.ymax) / 2;
              t3[0] -= r3, t3[1] -= a3, t3[2] -= r3, t3[3] -= a3;
              const o2 = e4.size / (e4.frame.ymax - e4.frame.ymin);
              t3[0] *= o2, t3[1] *= o2, t3[2] *= o2, t3[3] *= o2;
            }
          } else if (n2.type === "CIMPictureMarker") {
            const a3 = n2, i3 = r2.getResource(a3.url);
            let s4 = 1;
            r$g(i3) && i3.height && (s4 = i3.width / i3.height);
            const l4 = e3.size / 2, c2 = e3.size * s4 * a3.scaleX / 2;
            t3 = [-c2, -l4, c2, l4];
          } else {
            const r3 = e3.size / 2;
            t3 = [-r3, -r3, r3, r3];
          }
          if (e3.anchorPoint) {
            let r3, a3;
            e3.anchorPointUnits === "Absolute" ? (r3 = e3.anchorPoint.x, a3 = e3.anchorPoint.y) : (r3 = e3.anchorPoint.x * (t3[2] - t3[0]), a3 = e3.anchorPoint.y * (t3[3] - t3[1])), t3[0] -= r3, t3[1] -= a3, t3[2] -= r3, t3[3] -= a3;
          }
          let s3 = b$3(e3.rotation);
          if (e3.rotateClockwise && (s3 = -s3), a2 && (s3 -= a2), s3) {
            const e4 = J$1 * s3, r3 = Math.cos(e4), a3 = Math.sin(e4), o2 = u$a([n$f, n$f, -n$f, -n$f]);
            m$7(o2, [t3[0] * r3 - t3[1] * a3, t3[0] * a3 + t3[1] * r3]), m$7(o2, [t3[0] * r3 - t3[3] * a3, t3[0] * a3 + t3[3] * r3]), m$7(o2, [t3[2] * r3 - t3[1] * a3, t3[2] * a3 + t3[1] * r3]), m$7(o2, [t3[2] * r3 - t3[3] * a3, t3[2] * a3 + t3[3] * r3]), t3 = o2;
          }
          let l3 = b$3(e3.offsetX), m2 = b$3(e3.offsetY);
          if (a2) {
            const e4 = J$1 * a2, t4 = Math.cos(e4), r3 = Math.sin(e4), o2 = l3 * r3 + m2 * t4;
            l3 = l3 * t4 - m2 * r3, m2 = o2;
          }
          t3[0] += l3, t3[1] += m2, t3[2] += l3, t3[3] += m2;
          const y2 = ee$1(e3.markerPlacement);
          y2 > 0 && (t3[0] -= y2, t3[1] -= y2, t3[2] += y2, t3[3] += y2);
          break;
        }
      }
      const l2 = re$1(n2.effects);
      l2 > 0 && (t3[0] -= l2, t3[1] -= l2, t3[2] += l2, t3[3] += l2), s2 ? (e2[0] = t3[0], e2[1] = t3[1], e2[2] = t3[2], e2[3] = t3[3], s2 = false) : (e2[0] = Math.min(e2[0], t3[0]), e2[1] = Math.min(e2[1], t3[1]), e2[2] = Math.max(e2[2], t3[2]), e2[3] = Math.max(e2[3], t3[3]));
    }
    return e2;
  }
  _getTextInflatedSize(e2, r2, a2) {
    var _a, _b;
    const o2 = (_a = r2.height) != null ? _a : q$1;
    if (e2[0] = -o2 / 2, e2[1] = -o2 / 2, e2[2] = o2 / 2, e2[3] = o2 / 2, !a2)
      return e2;
    const i2 = a2.get(r2);
    if (!i2)
      return e2;
    const { text: s2, mosaicItem: n2 } = i2;
    if (!n2 || n2.glyphMosaicItems.length === 0)
      return e2;
    const l2 = tt(r2.lineGapType, (_b = r2.lineGap) != null ? _b : 0, o2), c2 = n$b(s2)[1], f2 = n2.glyphMosaicItems, m2 = j$1(f2, c2, { scale: o2 / j$4, angle: b$3(r2.angle), xOffset: b$3(r2.offsetX), yOffset: b$3(r2.offsetY), hAlign: Z$2(r2.horizontalAlignment), vAlign: $$2(r2.verticalAlignment), maxLineWidth: 512, lineHeight: f$8 * Math.max(0.25, Math.min(l2 || 1, 4)), decoration: r2.font.decoration || "none", isCIM: true }).boundsT;
    return e2[0] = m2.x - m2.halfWidth, e2[1] = -m2.y - m2.halfHeight, e2[2] = m2.x + m2.halfWidth, e2[3] = -m2.y + m2.halfHeight, e2;
  }
}
class oe$1 {
  static getEnvelope(e2, t2, r2) {
    const a2 = new q$2(r2);
    if (Array.isArray(e2)) {
      let r3;
      for (const o2 of e2)
        r3 ? r3.union(Z$1(a2, o2, t2)) : r3 = Z$1(a2, o2, t2);
      return r3;
    }
    return Z$1(a2, e2, t2);
  }
  static getTextureAnchor(e2, t2) {
    const r2 = this.getEnvelope(e2, null, t2);
    if (!r2)
      return [0, 0, 0];
    const a2 = (r2.x + 0.5 * r2.width) * W$1, o2 = (r2.y + 0.5 * r2.height) * W$1, i2 = r2.width * W$1 + 2, s2 = r2.height * W$1 + 2;
    return [-a2 / i2, -o2 / s2, s2];
  }
  static rasterize(e2, t2, r2, a2, o2 = true) {
    const i2 = r2 || this.getEnvelope(t2, null, a2);
    if (!i2)
      return [null, 0, 0, 0, 0];
    const s2 = (i2.x + 0.5 * i2.width) * W$1, n2 = (i2.y + 0.5 * i2.height) * W$1;
    e2.width = i2.width * W$1, e2.height = i2.height * W$1, r2 || (e2.width += 2, e2.height += 2);
    const l2 = e2.getContext("2d"), c2 = O.createScale(W$1, -W$1);
    c2.translate(0.5 * e2.width - s2, 0.5 * e2.height + n2);
    const f2 = new W$2(l2, a2, c2);
    switch (t2.type) {
      case "CIMPointSymbol": {
        const e3 = { type: "point", x: 0, y: 0 };
        f2.drawSymbol(t2, e3);
        break;
      }
      case "CIMVectorMarker": {
        const e3 = new t$4();
        f2.drawMarker(t2, e3);
        break;
      }
    }
    const m2 = l2.getImageData(0, 0, e2.width, e2.height), y2 = new Uint8Array(m2.data);
    if (o2) {
      let e3;
      for (let t3 = 0; t3 < y2.length; t3 += 4)
        e3 = y2[t3 + 3] / 255, y2[t3] = y2[t3] * e3, y2[t3 + 1] = y2[t3 + 1] * e3, y2[t3 + 2] = y2[t3 + 2] * e3;
    }
    return [y2, e2.width, e2.height, -s2 / e2.width, -n2 / e2.height];
  }
  static fromTextSymbol(e2) {
    const { angle: r2, color: a2, font: o2, haloColor: i2, haloSize: s2, horizontalAlignment: n2, kerning: l2, text: c2, verticalAlignment: f2, xoffset: m2, yoffset: y2 } = e2;
    let h2, p2, u2, M2, d2;
    o2 && (h2 = o2.family, p2 = o2.style, u2 = o2.weight, M2 = o2.size, d2 = o2.decoration);
    let S2 = false;
    if (c2) {
      S2 = n$b(c2)[1];
    }
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: { type: "CIMTextSymbol", angle: r2, blockProgression: C$4.BTT, depth3D: 1, extrapolateBaselines: true, fontEffects: l$b.Normal, fontEncoding: a$e.Unicode, fontFamilyName: h2 || "Arial", fontStyleName: me$1(p2, u2), fontType: u$d.Unspecified, haloSize: s2, height: M2, hinting: y$5.Default, horizontalAlignment: le$1(n2 != null ? n2 : "center"), kerning: l2, letterWidth: 100, ligatures: true, lineGapType: "Multiple", offsetX: b$3(m2), offsetY: b$3(y2), strikethrough: d2 === "line-through", underline: d2 === "underline", symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: fe$1(a2) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: fe$1(i2) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: S2 ? ne$2.RTL : ne$2.LTR, verticalAlignment: ce$1(f2 != null ? f2 : "baseline"), verticalGlyphOrientation: oe$2.Right, wordSpacing: 100, billboardMode3D: m$6.FaceNearPlane }, textString: c2 }], scaleSymbolsProportionally: true, respectFrame: true }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(e2) {
    const { height: t2, outline: r2, width: a2, xoffset: o2, xscale: i2, yoffset: s2, yscale: n2 } = e2, l2 = [], c2 = { type: "CIMPolygonSymbol", symbolLayers: l2 };
    if (r2) {
      const { cap: e3, join: t3, miterLimit: a3, width: o3 } = r2;
      l2.push({ type: "CIMSolidStroke", color: fe$1(r2.color), capStyle: se$1(e3), joinStyle: ne$1(t3), miterLimit: a3, width: o3 });
    }
    let f2 = e2.url;
    e2.type === "esriPFS" && e2.imageData && (f2 = e2.imageData);
    const m2 = "angle" in e2 ? e2.angle : 0, y2 = a2 * (i2 || 1), h2 = t2 * (n2 || 1);
    return l2.push({ type: "CIMPictureFill", invertBackfaceTexture: false, scaleX: 1, textureFilter: ie$2.Picture, tintColor: null, url: f2, height: h2, width: y2, offsetX: b$3(o2), offsetY: b$3(s2), rotation: b$3(-m2), colorSubstitutions: null }), c2;
  }
  static fromSimpleFillSymbol(e2) {
    const { color: t2, style: a2, outline: o2 } = e2, i2 = [], s2 = { type: "CIMPolygonSymbol", symbolLayers: i2 };
    let n2 = null;
    if (o2) {
      const { cap: e3, join: t3, style: r2 } = o2;
      r2 !== "solid" && r2 !== "none" && r2 !== "esriSLSSolid" && r2 !== "esriSLSNull" && (n2 = [{ type: "CIMGeometricEffectDashes", dashTemplate: pe$1(r2, e3), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]), i2.push({ type: "CIMSolidStroke", color: fe$1(o2.color), capStyle: se$1(e3), joinStyle: ne$1(t3), miterLimit: o2.miterLimit, width: o2.width, effects: n2 });
    }
    if (a2 && a2 !== "solid" && a2 !== "none" && a2 !== "esriSFSSolid" && a2 !== "esriSFSNull") {
      const e3 = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: fe$1(t2), capStyle: U$3.Butt, joinStyle: w$4.Miter, width: 0.75 }] };
      let o3 = 0;
      const s3 = e$b(de(a2) ? 8 : 10);
      switch (a2) {
        case "vertical":
        case "esriSFSVertical":
          o3 = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          o3 = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          o3 = 45;
          break;
        case "cross":
        case "esriSFSCross":
          o3 = 0;
      }
      i2.push({ type: "CIMHatchFill", lineSymbol: e3, offsetX: 0, offsetY: 0, rotation: o3, separation: s3 }), a2 === "cross" || a2 === "esriSFSCross" ? i2.push({ type: "CIMHatchFill", lineSymbol: y$3(e3), offsetX: 0, offsetY: 0, rotation: 90, separation: s3 }) : a2 !== "diagonal-cross" && a2 !== "esriSFSDiagonalCross" || i2.push({ type: "CIMHatchFill", lineSymbol: y$3(e3), offsetX: 0, offsetY: 0, rotation: 45, separation: s3 });
    } else
      !a2 || a2 !== "solid" && a2 !== "esriSFSSolid" || i2.push({ type: "CIMSolidFill", enable: true, color: fe$1(t2) });
    return s2;
  }
  static fromSimpleLineSymbol(e2) {
    const { cap: t2, color: r2, join: a2, marker: o2, miterLimit: i2, style: s2, width: n2 } = e2;
    let l2 = null;
    s2 !== "solid" && s2 !== "none" && s2 !== "esriSLSSolid" && s2 !== "esriSLSNull" && (l2 = [{ type: "CIMGeometricEffectDashes", dashTemplate: pe$1(s2, t2), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]);
    const c2 = [];
    if (o2) {
      let e3;
      switch (o2.placement) {
        case "begin-end":
          e3 = o$6.Both;
          break;
        case "begin":
          e3 = o$6.JustBegin;
          break;
        case "end":
          e3 = o$6.JustEnd;
          break;
        default:
          e3 = o$6.None;
      }
      const t3 = oe$1.fromSimpleMarker(o2, n2, r2).symbolLayers[0];
      t3.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: e3, offsetAlongLine: 0 }, c2.push(t3);
    }
    return s2 !== "none" && s2 !== "esriSLSNull" && c2.push({ type: "CIMSolidStroke", color: fe$1(r2), capStyle: se$1(t2), joinStyle: ne$1(a2), miterLimit: i2, width: n2, effects: l2 }), { type: "CIMLineSymbol", symbolLayers: c2 };
  }
  static fromPictureMarker(e2) {
    const { angle: t2, height: r2, width: a2, xoffset: o2, yoffset: i2 } = e2;
    let s2 = e2.url;
    return e2.type === "esriPMS" && e2.imageData && (s2 = e2.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: false, scaleX: 1, textureFilter: ie$2.Picture, tintColor: null, url: s2, size: r2, width: a2, offsetX: b$3(o2), offsetY: b$3(i2), rotation: b$3(-t2) }] };
  }
  static fromSimpleMarker(e2, t2, r2) {
    var _a;
    const { style: a2 } = e2, o2 = (_a = e2.color) != null ? _a : r2;
    if (a2 === "path") {
      const t3 = [];
      if ("outline" in e2 && e2.outline) {
        const r4 = e2.outline;
        t3.push({ type: "CIMSolidStroke", enable: true, width: u$c(Math.round(e$b(r4.width))), color: fe$1(r4.color) });
      }
      t3.push({ type: "CIMSolidFill", enable: true, color: fe$1(o2), path: e2.path });
      const [r3, a3] = Me("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: b$3(-e2.angle), size: b$3(e2.size || 6), offsetX: b$3(e2.xoffset), offsetY: b$3(e2.yoffset), frame: r3, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: a3, symbol: { type: "CIMPolygonSymbol", symbolLayers: t3 } }] }] };
    }
    const [i2, s2] = Me(a2);
    let c2;
    if (s2 && i2) {
      const r3 = [];
      if ("outline" in e2 && e2.outline) {
        const t3 = e2.outline;
        r3.push({ type: "CIMSolidStroke", enable: true, width: t3.width > 0.667 ? u$c(Math.round(e$b(t3.width))) : t3.width, color: fe$1(t3.color) });
      } else
        !t2 || e2.type !== "line-marker" || e2.style !== "cross" && e2.style !== "x" || r3.push({ type: "CIMSolidStroke", enable: true, width: t2, color: fe$1(o2) });
      r3.push({ type: "CIMSolidFill", enable: true, color: fe$1(o2) });
      const a3 = { type: "CIMPolygonSymbol", symbolLayers: r3 };
      c2 = { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: b$3(-e2.angle), size: b$3(e2.size || 6 * t2), offsetX: b$3(e2.xoffset), offsetY: b$3(e2.yoffset), frame: i2, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: s2, symbol: a3 }] }] };
    }
    return c2;
  }
  static fromCIMHatchFill(e2, t2) {
    var _a;
    const a2 = t2 * ((_a = e2.separation) != null ? _a : U$1), o2 = a2 / 2, i2 = 4, s2 = y$3(e2.lineSymbol);
    let n2 = this._getLineSymbolPeriod(s2) || i2;
    for (; n2 < i2; )
      n2 *= 2;
    const l2 = n2 / 2, c2 = { xmin: -l2, xmax: l2, ymin: -o2, ymax: o2 }, f2 = s2.symbolLayers.find((e3) => e3.type === "CIMSolidStroke");
    f2 && (f2.width *= t2);
    return { type: "CIMVectorMarker", frame: c2, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-l2, 0], [l2, 0]]] }, symbol: s2 }], size: a2 };
  }
  static fetchResources(e2, t2, r2) {
    if (e2 && t2)
      switch (e2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          const a2 = e2.symbolLayers;
          if (!a2)
            return;
          for (const e3 of a2)
            switch (Ce(e3, t2, r2), e3.type) {
              case "CIMPictureFill":
              case "CIMHatchFill":
              case "CIMGradientFill":
              case "CIMPictureStroke":
              case "CIMGradientStroke":
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
                "url" in e3 && e3.url && r2.push(t2.fetchResource(e3.url, null));
                break;
              case "CIMVectorMarker": {
                const a3 = e3.markerGraphics;
                if (!a3)
                  continue;
                for (const e4 of a3)
                  if (e4) {
                    const a4 = e4.symbol;
                    a4 && oe$1.fetchResources(a4, t2, r2);
                  }
              }
            }
        }
      }
  }
  static _getLineSymbolPeriod(e2) {
    if (e2) {
      const t2 = this._getEffectsRepeat(e2.effects);
      if (t2)
        return t2;
      if (e2.symbolLayers) {
        for (const r2 of e2.symbolLayers)
          if (r2) {
            const e3 = this._getEffectsRepeat(r2.effects);
            if (e3)
              return e3;
            switch (r2.type) {
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
              case "CIMVectorMarker":
              case "CIMObjectMarker3D":
              case "CIMglTFMarker3D": {
                const e4 = this._getPlacementRepeat(r2.markerPlacement);
                if (e4)
                  return e4;
              }
            }
          }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(e2) {
    if (e2) {
      for (const t2 of e2)
        if (t2)
          switch (t2.type) {
            case "CIMGeometricEffectDashes": {
              const e3 = t2.dashTemplate;
              if (e3 && e3.length) {
                let t3 = 0;
                for (const r2 of e3)
                  t3 += r2;
                return 1 & e3.length && (t3 *= 2), t3;
              }
              break;
            }
            case "CIMGeometricEffectWave":
              return t2.period;
            default:
              K$1.error(`unsupported geometric effect type ${t2.type}`);
          }
    }
    return 0;
  }
  static _getPlacementRepeat(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMMarkerPlacementAlongLineSameSize":
        case "CIMMarkerPlacementAlongLineRandomSize":
        case "CIMMarkerPlacementAlongLineVariableSize": {
          const t2 = e2.placementTemplate;
          if (t2 && t2.length) {
            let e3 = 0;
            for (const r2 of t2)
              e3 += r2;
            return 1 & t2.length && (e3 *= 2), e3;
          }
          break;
        }
      }
    return 0;
  }
  static fromCIMInsidePolygon(e2) {
    var _a;
    const t2 = e2.markerPlacement, r2 = __spreadValues({ type: e2.type }, e2);
    r2.markerPlacement = null, r2.anchorPoint = null;
    const a2 = Math.abs(t2.stepX), o2 = Math.abs(t2.stepY), i2 = ((_a = t2.randomness) != null ? _a : 100) / 100;
    let n2, c2, f2, m2;
    if (t2.gridType === "Random") {
      const e3 = e$b(dt), r3 = Math.max(Math.floor(e3 / a2), 1), y2 = Math.max(Math.floor(e3 / o2), 1);
      n2 = r3 * a2 / 2, c2 = y2 * o2 / 2, f2 = 2 * c2;
      const h2 = new t$6(t2.seed), p2 = i2 * a2 / 1.5, u2 = i2 * o2 / 1.5;
      m2 = [];
      for (let t3 = 0; t3 < r3; t3++)
        for (let e4 = 0; e4 < y2; e4++) {
          const r4 = t3 * a2 - n2 + p2 * (0.5 - h2.getFloat()), i3 = e4 * o2 - c2 + u2 * (0.5 - h2.getFloat());
          m2.push({ x: r4, y: i3 }), t3 === 0 && m2.push({ x: r4 + 2 * n2, y: i3 }), e4 === 0 && m2.push({ x: r4, y: i3 + 2 * c2 });
        }
    } else
      t2.shiftOddRows === true ? (n2 = a2 / 2, c2 = o2, f2 = 2 * o2, m2 = [{ x: -n2, y: 0 }, { x: n2, y: 0 }, { x: 0, y: c2 }, { x: 0, y: -c2 }]) : (n2 = a2 / 2, c2 = o2 / 2, f2 = o2, m2 = [{ x: -a2, y: 0 }, { x: 0, y: -o2 }, { x: -a2, y: -o2 }, { x: 0, y: 0 }, { x: a2, y: 0 }, { x: 0, y: o2 }, { x: a2, y: o2 }, { x: -a2, y: o2 }, { x: a2, y: -o2 }]);
    return { type: "CIMVectorMarker", frame: { xmin: -n2, xmax: n2, ymin: -c2, ymax: c2 }, markerGraphics: m2.map((e3) => ({ type: "CIMMarkerGraphic", geometry: e3, symbol: { type: "CIMPointSymbol", symbolLayers: [r2] } })), size: f2 };
  }
  static getSize(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMTextSymbol":
          return e2.height;
        case "CIMPointSymbol": {
          let t2 = 0;
          if (e2.symbolLayers) {
            for (const r2 of e2.symbolLayers)
              if (r2)
                switch (r2.type) {
                  case "CIMCharacterMarker":
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                  case "CIMObjectMarker3D":
                  case "CIMglTFMarker3D": {
                    const e3 = r2.size;
                    e3 > t2 && (t2 = e3);
                    break;
                  }
                }
          }
          return t2;
        }
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          let t2 = 0;
          if (e2.symbolLayers) {
            for (const r2 of e2.symbolLayers)
              if (r2)
                switch (r2.type) {
                  case "CIMSolidStroke":
                  case "CIMPictureStroke":
                  case "CIMGradientStroke": {
                    const e3 = r2.width;
                    e3 > t2 && (t2 = e3);
                    break;
                  }
                  case "CIMCharacterMarker":
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                  case "CIMObjectMarker3D":
                  case "CIMglTFMarker3D":
                    if (m$5(r2.markerPlacement)) {
                      const e3 = r2.size;
                      e3 > t2 && (t2 = e3);
                    }
                }
          }
          return t2;
        }
      }
  }
  static getMarkerScaleRatio(e2) {
    if (e2 && e2.type === "CIMVectorMarker") {
      if (e2.scaleSymbolsProportionally !== false && e2.frame) {
        const t2 = e2.frame.ymax - e2.frame.ymin;
        return e2.size / t2;
      }
    }
    return 1;
  }
}
class ie$1 {
  static findApplicableOverrides(e2, t2, r2) {
    if (e2 && t2) {
      if (e2.primitiveName) {
        let a2 = false;
        for (const t3 of r2)
          if (t3.primitiveName === e2.primitiveName) {
            a2 = true;
            break;
          }
        if (!a2)
          for (const o2 of t2)
            o2.primitiveName === e2.primitiveName && r2.push(o2);
      }
      switch (e2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (e2.effects)
            for (const a2 of e2.effects)
              ie$1.findApplicableOverrides(a2, t2, r2);
          if (e2.symbolLayers)
            for (const a2 of e2.symbolLayers)
              ie$1.findApplicableOverrides(a2, t2, r2);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
        case "CIMVectorMarker":
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          if (e2.effects)
            for (const a2 of e2.effects)
              ie$1.findApplicableOverrides(a2, t2, r2);
          if (e2.markerPlacement && ie$1.findApplicableOverrides(e2.markerPlacement, t2, r2), e2.type === "CIMVectorMarker") {
            if (e2.markerGraphics)
              for (const a2 of e2.markerGraphics)
                ie$1.findApplicableOverrides(a2, t2, r2), ie$1.findApplicableOverrides(a2.symbol, t2, r2);
          } else
            e2.type === "CIMCharacterMarker" ? ie$1.findApplicableOverrides(e2.symbol, t2, r2) : e2.type === "CIMHatchFill" ? ie$1.findApplicableOverrides(e2.lineSymbol, t2, r2) : e2.type === "CIMPictureMarker" && ie$1.findApplicableOverrides(e2.animatedSymbolProperties, t2, r2);
      }
    }
  }
  static findEffectOverrides(e2, t2, r2) {
    var _a;
    if (!t2 || !e2)
      return;
    const a2 = e2.length;
    for (let o2 = 0; o2 < a2; o2++) {
      const a3 = (_a = e2[o2]) == null ? void 0 : _a.primitiveName;
      if (a3) {
        let e3 = false;
        for (const t3 of r2)
          if (t3.primitiveName === a3) {
            e3 = true;
            break;
          }
        if (!e3)
          for (const o3 of t2)
            o3.primitiveName === a3 && r2.push(o3);
      }
    }
  }
  static async resolveSymbolOverrides(e2, t2, a2, o2, i2, s2, n2) {
    if (!e2 || !e2.symbol)
      return null;
    let { symbol: l2, primitiveOverrides: c2 } = e2;
    const f2 = !!c2;
    if (!f2 && !o2)
      return l2;
    l2 = y$3(l2);
    let m2 = true;
    if (t2 || (t2 = { attributes: {} }, m2 = false), f2) {
      if (m2 || (c2 = c2.filter((e3) => {
        var _a;
        return !((_a = e3.valueExpressionInfo) == null ? void 0 : _a.expression.includes("$feature"));
      })), n2 || (c2 = c2.filter((e3) => {
        var _a;
        return !((_a = e3.valueExpressionInfo) == null ? void 0 : _a.expression.includes("$view"));
      })), c2.length > 0) {
        const e3 = F$1(t2.attributes);
        await ie$1.evaluateOverrides(c2, t2, { spatialReference: a2, fields: e3, geometryType: i2 }, s2, n2);
      }
      ie$1.applyOverrides(l2, c2);
    }
    return o2 && ie$1.applyDictionaryTextOverrides(l2, t2, o2), l2;
  }
  static async evaluateOverrides(e2, t2, r2, a2, o2) {
    if (!t2)
      return;
    let i2;
    for (const s2 of e2) {
      const e3 = s2.valueExpressionInfo;
      if (e3 && r2) {
        i2 || (i2 = []), s2.value = void 0;
        const n2 = o$a(e3.expression, r2.spatialReference, r2.fields).then((e4) => {
          s2.value = i$2(e4, t2, { $view: o2 }, r2.geometryType, a2);
        });
        i2.push(n2);
      }
    }
    i2 !== void 0 && i2.length > 0 && await Promise.all(i2);
  }
  static applyDictionaryTextOverrides(e2, t2, r2, a2 = "Normal") {
    if (e2 && e2.type)
      switch (e2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
        case "CIMTextSymbol":
          {
            const o2 = e2.symbolLayers;
            if (!o2)
              return;
            for (const i2 of o2)
              i2 && i2.type === "CIMVectorMarker" && ie$1.applyDictionaryTextOverrides(i2, t2, r2, e2.type === "CIMTextSymbol" ? e2.textCase : a2);
          }
          break;
        case "CIMVectorMarker":
          {
            const a3 = e2.markerGraphics;
            if (!a3)
              return;
            for (const e3 of a3)
              e3 && ie$1.applyDictionaryTextOverrides(e3, t2, r2);
          }
          break;
        case "CIMMarkerGraphic": {
          const o2 = e2.textString;
          if (o2 && o2.includes("[")) {
            const i2 = i$8(o2, r2);
            e2.textString = l$8(t2, i2, a2);
          }
        }
      }
  }
  static applyOverrides(e2, t2, r2, a2) {
    if (e2.primitiveName) {
      for (const i2 of t2)
        if (i2.primitiveName === e2.primitiveName) {
          const t3 = Se(i2.propertyName);
          if (a2 && a2.push({ cim: e2, nocapPropertyName: t3, value: e2[t3] }), i2.expression && (i2.value = ie$1.toValue(i2.propertyName, i2.expression)), r2) {
            let t4 = false;
            for (const a3 of r2)
              a3.primitiveName === e2.primitiveName && (t4 = true);
            t4 || r2.push(i2);
          }
          r$g(i2.value) && (e2[t3] = i2.value);
        }
    }
    switch (e2.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e2.effects)
          for (const o2 of e2.effects)
            ie$1.applyOverrides(o2, t2, r2, a2);
        if (e2.symbolLayers)
          for (const o2 of e2.symbolLayers)
            ie$1.applyOverrides(o2, t2, r2, a2);
        break;
      case "CIMTextSymbol":
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
      case "CIMVectorMarker":
        if (e2.effects)
          for (const o2 of e2.effects)
            ie$1.applyOverrides(o2, t2, r2, a2);
        if (e2.type === "CIMVectorMarker" && e2.markerGraphics)
          for (const o2 of e2.markerGraphics)
            ie$1.applyOverrides(o2, t2, r2, a2), ie$1.applyOverrides(o2.symbol, t2, r2, a2);
    }
  }
  static restoreOverrides(e2) {
    for (const t2 of e2)
      t2.cim[t2.nocapPropertyName] = t2.value;
  }
  static buildOverrideKey(e2) {
    let t2 = "";
    for (const r2 of e2)
      r2.value !== void 0 && (t2 += `${r2.primitiveName}${r2.propertyName}${JSON.stringify(r2.value)}`);
    return t2;
  }
  static toValue(t2, r2) {
    if (t2 === "DashTemplate")
      return r2.split(" ").map((e2) => Number(e2));
    if (t2 === "Color") {
      const t3 = new l$9(r2).toRgba();
      return t3[3] *= 255, t3;
    }
    return r2;
  }
}
const se$1 = (e2) => {
  if (!e2)
    return U$3.Butt;
  switch (e2) {
    case "butt":
      return U$3.Butt;
    case "square":
      return U$3.Square;
    case "round":
      return U$3.Round;
  }
}, ne$1 = (e2) => {
  if (!e2)
    return w$4.Miter;
  switch (e2) {
    case "miter":
      return w$4.Miter;
    case "round":
      return w$4.Round;
    case "bevel":
      return w$4.Bevel;
  }
}, le$1 = (e2) => {
  if (t$a(e2))
    return "Center";
  switch (e2) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
}, ce$1 = (e2) => {
  if (t$a(e2))
    return "Center";
  switch (e2) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
}, fe$1 = (e2) => {
  if (!e2)
    return [0, 0, 0, 0];
  const { r: t2, g: r2, b: a2, a: o2 } = e2;
  return [t2, r2, a2, 255 * o2];
}, me$1 = (e2, t2) => {
  const r2 = ye(t2), a2 = he(e2);
  return r2 && a2 ? `${r2}-${a2}` : `${r2}${a2}`;
}, ye = (e2) => {
  if (!e2)
    return "";
  switch (e2.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
}, he = (e2) => {
  if (!e2)
    return "";
  switch (e2.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
}, pe$1 = (e2, t2) => {
  const r2 = t2 === "butt";
  switch (e2) {
    case "dash":
    case "esriSLSDash":
      return r2 ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return r2 ? [4, 3, 1, 3] : [3, 4, 0, 4];
    case "dot":
    case "esriSLSDot":
      return r2 ? [1, 3] : [0, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return r2 ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return r2 ? [8, 3, 1, 3] : [7, 4, 0, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return r2 ? [8, 3, 1, 3, 1, 3] : [7, 4, 0, 4, 0, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return r2 ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return r2 ? [4, 1, 1, 1] : [3, 2, 0, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return r2 ? [4, 1, 1, 1, 1, 1] : [3, 2, 0, 2, 0, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return r2 ? [1, 1] : [0, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return K$1.error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return K$1.error(`Tried to rasterize SLS, but found an unexpected style: ${e2}!`), [0, 0];
  }
};
function ue$1(e2) {
  return e2.symbolLayers !== void 0;
}
const Me = (e2) => {
  const t2 = 100, r2 = 50;
  let a2, o2;
  const i2 = e2;
  if (i2 === "circle" || i2 === "esriSMSCircle") {
    const e3 = 0.25;
    let t3 = Math.acos(1 - e3 / r2), i3 = Math.ceil(Y$1 / t3 / 4);
    i3 === 0 && (i3 = 1), t3 = $$1 / i3, i3 *= 4;
    const s2 = [];
    s2.push([r2, 0]);
    for (let a3 = 1; a3 < i3; a3++)
      s2.push([r2 * Math.cos(a3 * t3), -r2 * Math.sin(a3 * t3)]);
    s2.push([r2, 0]), a2 = { rings: [s2] }, o2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
  } else if (i2 === "cross" || i2 === "esriSMSCross") {
    const e3 = 0;
    a2 = { rings: [[[e3, r2], [e3, e3], [r2, e3], [r2, -e3], [e3, -e3], [e3, -r2], [-e3, -r2], [-e3, -e3], [-r2, -e3], [-r2, e3], [-e3, e3], [-e3, r2], [e3, r2]]] }, o2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
  } else if (i2 === "diamond" || i2 === "esriSMSDiamond")
    a2 = { rings: [[[-r2, 0], [0, r2], [r2, 0], [0, -r2], [-r2, 0]]] }, o2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
  else if (i2 === "square" || i2 === "esriSMSSquare")
    a2 = { rings: [[[-r2, -r2], [-r2, r2], [r2, r2], [r2, -r2], [-r2, -r2]]] }, o2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
  else if (i2 === "x" || i2 === "esriSMSX") {
    const e3 = 0;
    a2 = { rings: [[[0, e3], [r2 - e3, r2], [r2, r2 - e3], [e3, 0], [r2, e3 - r2], [r2 - e3, -r2], [0, -e3], [e3 - r2, -r2], [-r2, e3 - r2], [-e3, 0], [-r2, r2 - e3], [e3 - r2, r2], [0, e3]]] }, o2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
  } else if (i2 === "triangle" || i2 === "esriSMSTriangle") {
    const e3 = t2 * 0.5773502691896257, r3 = -e3, i3 = 2 / 3 * t2, s2 = i3 - t2;
    a2 = { rings: [[[r3, s2], [0, i3], [e3, s2], [r3, s2]]] }, o2 = { xmin: r3, ymin: s2, xmax: e3, ymax: i3 };
  } else
    i2 === "arrow" && (a2 = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, o2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 });
  return [o2, a2];
}, de = (e2) => e2 === "vertical" || e2 === "horizontal" || e2 === "cross" || e2 === "esriSFSCross" || e2 === "esriSFSVertical" || e2 === "esriSFSHorizontal", Se = (e2) => e2 ? e2.charAt(0).toLowerCase() + e2.substr(1) : e2;
let be;
function Ce(e2, t2, r2) {
  if (!e2.effects || r$g(t2.geometryEngine))
    return;
  if (be)
    return void r2.push(be);
  d$2(e2.effects) && (be = p$3(), r2.push(be), be.then((e3) => t2.geometryEngine = e3));
}
const t = 0.05;
function n$1(n2) {
  return Math.max(Math.round(n2 / t), 1) * t;
}
const e$2 = new Set(["StartTimeOffset", "Duration", "RepeatDelay"]);
function a$1(t2, a2) {
  return e$2.has(a2) ? n$1(t2) : t2;
}
function r$1(t2) {
  var _a;
  if (!t2)
    return null;
  switch (t2.type) {
    case "CIMPointSymbol": {
      const o2 = t2.symbolLayers;
      return o2 && o2.length === 1 ? r$1(o2[0]) : null;
    }
    case "CIMVectorMarker": {
      const o2 = t2.markerGraphics;
      if (!o2 || o2.length !== 1)
        return null;
      const n2 = o2[0];
      if (!n2)
        return null;
      const r2 = n2.geometry;
      if (!r2)
        return null;
      const l2 = n2.symbol;
      return !l2 || l2.type !== "CIMPolygonSymbol" && l2.type !== "CIMLineSymbol" || ((_a = l2.symbolLayers) == null ? void 0 : _a.some((t3) => !!t3.effects)) ? null : { geom: r2, asFill: l2.type === "CIMPolygonSymbol" };
    }
    case "sdf":
      return { geom: t2.geom, asFill: t2.asFill };
  }
  return null;
}
function l$1(t2) {
  return t2 ? t2.rings ? t2.rings : t2.paths ? t2.paths : t2.xmin !== void 0 && t2.ymin !== void 0 && t2.xmax !== void 0 && t2.ymax !== void 0 ? [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] : null : null;
}
function e$1(t2) {
  let o2 = 1 / 0, r2 = -1 / 0, l2 = 1 / 0, e2 = -1 / 0;
  for (const n2 of t2)
    for (const t3 of n2)
      t3[0] < o2 && (o2 = t3[0]), t3[0] > r2 && (r2 = t3[0]), t3[1] < l2 && (l2 = t3[1]), t3[1] > e2 && (e2 = t3[1]);
  return new t$1(o2, l2, r2 - o2, e2 - l2);
}
function s$1(t2) {
  let o2 = 1 / 0, n2 = -1 / 0, r2 = 1 / 0, l2 = -1 / 0;
  for (const e2 of t2)
    for (const t3 of e2)
      t3[0] < o2 && (o2 = t3[0]), t3[0] > n2 && (n2 = t3[0]), t3[1] < r2 && (r2 = t3[1]), t3[1] > l2 && (l2 = t3[1]);
  return [o2, r2, n2, l2];
}
function i$1(t2) {
  return t2 ? t2.rings ? s$1(t2.rings) : t2.paths ? s$1(t2.paths) : u$9(t2) ? [t2.xmin, t2.ymin, t2.xmax, t2.ymax] : null : null;
}
function f$1(t2, o2, n2, r2, l2) {
  const [e2, s2, i2, f2] = t2;
  if (i2 < e2 || f2 < s2)
    return [0, 0, 0];
  const a2 = i2 - e2, m2 = f2 - s2, u2 = 128, c2 = 1, h2 = Math.floor(0.5 * (0.5 * u2 - c2)), y2 = (u2 - 2 * (h2 + c2)) / Math.max(a2, m2), x2 = Math.round(a2 * y2) + 2 * h2, M2 = Math.round(m2 * y2) + 2 * h2;
  let g2 = 1;
  if (o2) {
    g2 = M2 / y2 / (o2.ymax - o2.ymin);
  }
  let p2 = 0, d2 = 0, b2 = 1;
  r2 && (l2 ? o2 && n2 && o2.ymax - o2.ymin > 0 && (b2 = (o2.xmax - o2.xmin) / (o2.ymax - o2.ymin), p2 = r2.x / (n2 * b2), d2 = r2.y / n2) : (p2 = r2.x, d2 = r2.y)), p2 = 0.5 * (o2.xmax + o2.xmin) + p2 * (o2.xmax - o2.xmin), d2 = 0.5 * (o2.ymax + o2.ymin) + d2 * (o2.ymax - o2.ymin), p2 -= e2, d2 -= s2, p2 *= y2, d2 *= y2, p2 += h2, d2 += h2;
  let w2 = p2 / x2 - 0.5, F2 = d2 / M2 - 0.5;
  return l2 && (w2 *= n2 * b2, F2 *= n2), [g2, w2, F2];
}
function a(t2) {
  const o2 = l$1(t2.geom), n2 = e$1(o2), r2 = 128, s2 = 1, i2 = Math.floor(0.5 * (0.5 * r2 - s2)), f2 = (r2 - 2 * (i2 + s2)) / Math.max(n2.width, n2.height), a2 = Math.round(n2.width * f2) + 2 * i2, h2 = Math.round(n2.height * f2) + 2 * i2, y2 = [];
  for (const l2 of o2)
    if (l2 && l2.length > 1) {
      const o3 = [];
      for (const r3 of l2) {
        let [l3, e2] = r3;
        l3 -= n2.x, e2 -= n2.y, l3 *= f2, e2 *= f2, l3 += i2 - 0.5, e2 += i2 - 0.5, t2.asFill ? o3.push([l3, e2]) : o3.push([Math.round(l3), Math.round(e2)]);
      }
      if (t2.asFill) {
        const t3 = o3.length - 1;
        o3[0][0] === o3[t3][0] && o3[0][1] === o3[t3][1] || o3.push(o3[0]);
      }
      y2.push(o3);
    }
  const x2 = m(y2, a2, h2, i2);
  return t2.asFill && u(y2, a2, h2, i2, x2), [c$1(x2, i2), a2, h2];
}
function m(t2, o2, n2, r2) {
  const l2 = o2 * n2, e2 = new Array(l2), s2 = r2 * r2 + 1;
  for (let i2 = 0; i2 < l2; ++i2)
    e2[i2] = s2;
  for (const i2 of t2) {
    const t3 = i2.length;
    for (let l3 = 1; l3 < t3; ++l3) {
      const t4 = i2[l3 - 1], s3 = i2[l3];
      let f2, a2, m2, u2;
      t4[0] < s3[0] ? (f2 = t4[0], a2 = s3[0]) : (f2 = s3[0], a2 = t4[0]), t4[1] < s3[1] ? (m2 = t4[1], u2 = s3[1]) : (m2 = s3[1], u2 = t4[1]);
      let c2 = Math.floor(f2) - r2, h2 = Math.floor(a2) + r2, y2 = Math.floor(m2) - r2, x2 = Math.floor(u2) + r2;
      c2 < 0 && (c2 = 0), h2 > o2 && (h2 = o2), y2 < 0 && (y2 = 0), x2 > n2 && (x2 = n2);
      const M2 = s3[0] - t4[0], g2 = s3[1] - t4[1], p2 = M2 * M2 + g2 * g2;
      for (let r3 = c2; r3 < h2; r3++)
        for (let l4 = y2; l4 < x2; l4++) {
          let i3, f3, a3 = (r3 - t4[0]) * M2 + (l4 - t4[1]) * g2;
          a3 < 0 ? (i3 = t4[0], f3 = t4[1]) : a3 > p2 ? (i3 = s3[0], f3 = s3[1]) : (a3 /= p2, i3 = t4[0] + a3 * M2, f3 = t4[1] + a3 * g2);
          const m3 = (r3 - i3) * (r3 - i3) + (l4 - f3) * (l4 - f3), u3 = (n2 - l4 - 1) * o2 + r3;
          m3 < e2[u3] && (e2[u3] = m3);
        }
    }
  }
  for (let i2 = 0; i2 < l2; ++i2)
    e2[i2] = Math.sqrt(e2[i2]);
  return e2;
}
function u(t2, o2, n2, r2, l2) {
  for (const e2 of t2) {
    const t3 = e2.length;
    for (let s2 = 1; s2 < t3; ++s2) {
      const t4 = e2[s2 - 1], i2 = e2[s2];
      let f2, a2, m2, u2;
      t4[0] < i2[0] ? (f2 = t4[0], a2 = i2[0]) : (f2 = i2[0], a2 = t4[0]), t4[1] < i2[1] ? (m2 = t4[1], u2 = i2[1]) : (m2 = i2[1], u2 = t4[1]);
      let c2 = Math.floor(f2), h2 = Math.floor(a2) + 1, y2 = Math.floor(m2), x2 = Math.floor(u2) + 1;
      c2 < r2 && (c2 = r2), h2 > o2 - r2 && (h2 = o2 - r2), y2 < r2 && (y2 = r2), x2 > n2 - r2 && (x2 = n2 - r2);
      for (let e3 = y2; e3 < x2; ++e3) {
        if (t4[1] > e3 == i2[1] > e3)
          continue;
        const s3 = (n2 - e3 - 1) * o2;
        for (let o3 = c2; o3 < h2; ++o3)
          o3 < (i2[0] - t4[0]) * (e3 - t4[1]) / (i2[1] - t4[1]) + t4[0] && (l2[s3 + o3] = -l2[s3 + o3]);
        for (let t5 = r2; t5 < c2; ++t5)
          l2[s3 + t5] = -l2[s3 + t5];
      }
    }
  }
}
function c$1(o2, n2) {
  const r2 = 2 * n2, l2 = o2.length, e2 = new Uint8Array(4 * l2);
  for (let s2 = 0; s2 < l2; ++s2) {
    const n3 = 0.5 - o2[s2] / r2;
    o$b(n3, e2, 4 * s2);
  }
  return e2;
}
const c = 96 / 72;
class f {
  static executeEffects(t2, s2, r2) {
    const f2 = a$9(s2), p2 = c;
    let u2 = new r$e(f2);
    for (const e2 of t2) {
      const t3 = A(e2);
      t3 && (u2 = t3.execute(u2, e2, p2, r2));
    }
    return u2;
  }
  static next(t2) {
    const s2 = t2.next();
    return x$2(s2), s2;
  }
  static applyEffects(e2, r2, c2) {
    if (!e2)
      return r2;
    let f2 = new r$e(r2);
    for (const t2 of e2) {
      const s2 = A(t2);
      s2 && (f2 = s2.execute(f2, t2, 1, c2));
    }
    let p2, u2 = null;
    for (; p2 = f2.next(); )
      u2 ? f$7(u2) ? f$7(p2) && u2.paths.push(...p2.paths) : y$4(u2) && y$4(p2) && u2.rings.push(...p2.rings) : u2 = p2;
    return u2;
  }
}
function e(e2, o2) {
  let r2;
  if (typeof e2 == "string")
    r2 = c$b(e2 + `-seed(${o2})`);
  else {
    let t2 = 12;
    r2 = e2 ^ o2;
    do {
      r2 = 107 * (r2 >> 8 ^ r2) + t2 | 0;
    } while (--t2 != 0);
  }
  return (1 + r2 / (1 << 31)) / 2;
}
function o(t2) {
  return Math.floor(e(t2, r) * n);
}
const r = 53290320, n = 10;
const J = s$b.getLogger("esri.symbols.cim.cimAnalyzer");
function H(e2) {
  switch (e2) {
    case "Butt":
      return e$e.BUTT;
    case "Square":
      return e$e.SQUARE;
    default:
      return e$e.ROUND;
  }
}
function Y(e2) {
  switch (e2) {
    case "Bevel":
      return n$g.BEVEL;
    case "Miter":
      return n$g.MITER;
    default:
      return n$g.ROUND;
  }
}
function $(e2, t2, i2, o2) {
  let r2;
  e2[t2] ? r2 = e2[t2] : (r2 = {}, e2[t2] = r2), r2[i2] = o2;
}
function E(e2) {
  const t2 = e2.markerPlacement;
  return t2 && t2.angleToLine ? i$b.MAP : i$b.SCREEN;
}
async function T(e2, t2, i2, o2, n2) {
  const l2 = o2 != null ? o2 : [];
  if (!e2)
    return l2;
  let a2, s2;
  const c2 = {};
  if (e2.type !== "CIMSymbolReference")
    return J.error("Expect cim type to be 'CIMSymbolReference'"), l2;
  if (a2 = e2.symbol, s2 = e2.primitiveOverrides, s2) {
    const e3 = [];
    for (const i3 of s2) {
      const o3 = i3.valueExpressionInfo;
      if (o3 && t2) {
        const n3 = o3.expression, l3 = o$a(n3, t2.spatialReference, t2.fields).then((e4) => {
          t$a(e4) || $(c2, i3.primitiveName, i3.propertyName, e4);
        });
        e3.push(l3);
      } else
        i3.value != null && $(c2, i3.primitiveName, i3.propertyName, i3.value);
    }
    e3.length > 0 && await Promise.all(e3);
  }
  const p2 = [];
  switch (oe$1.fetchResources(a2, i2, p2), p2.length > 0 && await Promise.all(p2), a2.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      j(a2, s2, c2, t2, l2, i2, n2);
  }
  return l2;
}
function j(e2, t2, i2, o2, r2, n2, l2) {
  if (!e2)
    return;
  const a2 = e2.symbolLayers;
  if (!a2)
    return;
  const s2 = e2.effects;
  let f2;
  const c2 = oe$1.getSize(e2);
  e2.type === "CIMPointSymbol" && e2.angleAlignment === "Map" && (f2 = i$b.MAP);
  let y2 = a2.length;
  for (; y2--; ) {
    const m2 = a2[y2];
    if (!m2 || m2.enable === false)
      continue;
    let u2;
    s2 && s2.length && (u2 = [...s2]);
    const h2 = m2.effects;
    h2 && h2.length && (s2 ? u2.push(...h2) : u2 = [...h2]);
    const g2 = [];
    let d2;
    ie$1.findEffectOverrides(u2, t2, g2), d2 = g2.length > 0 ? ae(u2, g2, i2, o2) : u2;
    const S2 = [];
    switch (ie$1.findApplicableOverrides(m2, t2, S2), m2.type) {
      case "CIMSolidFill":
        D(m2, d2, i2, S2, o2, r2);
        break;
      case "CIMPictureFill":
        F(m2, d2, i2, S2, o2, n2, r2);
        break;
      case "CIMHatchFill":
        U(m2, d2, i2, S2, o2, r2);
        break;
      case "CIMGradientFill":
        W(m2, d2, i2, S2, o2, r2);
        break;
      case "CIMSolidStroke":
        G(m2, d2, i2, S2, o2, r2, e2.type === "CIMPolygonSymbol", c2);
        break;
      case "CIMPictureStroke":
        B(m2, d2, i2, S2, o2, r2, e2.type === "CIMPolygonSymbol", c2);
        break;
      case "CIMGradientStroke":
        q(m2, d2, i2, S2, o2, r2, e2.type === "CIMPolygonSymbol", c2);
        break;
      case "CIMCharacterMarker":
        if (V(m2, d2, i2, S2, o2, r2))
          break;
        break;
      case "CIMPictureMarker":
        if (V(m2, d2, i2, S2, o2, r2))
          break;
        e2.type === "CIMLineSymbol" && (f2 = E(m2)), K(m2, d2, i2, S2, o2, n2, r2, f2, c2);
        break;
      case "CIMVectorMarker":
        if (V(m2, d2, i2, S2, o2, r2))
          break;
        e2.type === "CIMLineSymbol" && (f2 = E(m2)), Q(m2, d2, i2, S2, o2, r2, n2, f2, c2, l2);
        break;
      default:
        J.error("Cannot analyze CIM layer", m2.type);
    }
  }
}
function D(e2, t2, i2, o2, r2, n2) {
  const l2 = e2.primitiveName, a2 = u$8(e2.color), [f2, c2] = pe(o2, l2, t2, null, null), m2 = c$b(JSON.stringify(e2) + c2).toString();
  n2.push({ type: "fill", templateHash: m2, materialHash: f2 ? () => m2 : m2, cim: e2, materialOverrides: null, colorLocked: e2.colorLocked, color: ne(l2, i2, "Color", r2, a2, re), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: t2, applyRandomOffset: false, sampleAlphaOnly: true });
}
function F(e2, t2, i2, o2, r2, l2, a2) {
  const f2 = e2.primitiveName, c2 = e2.tintColor ? u$8(e2.tintColor) : { r: 255, g: 255, b: 255, a: 1 }, [m2, p2] = pe(o2, f2, t2, null, null), u2 = c$b(JSON.stringify(e2) + p2).toString(), y2 = c$b(`${e2.url}${JSON.stringify(e2.colorSubstitutions)}`).toString();
  let h2 = b$3(e2.scaleX);
  if ("width" in e2) {
    const t3 = e2.width;
    let i3 = 1;
    const o3 = l2.getResource(e2.url);
    r$g(o3) && (i3 = o3.width / o3.height), h2 /= i3 * (e2.height / t3);
  }
  a2.push({ type: "fill", templateHash: u2, materialHash: m2 ? () => y2 : y2, cim: e2, materialOverrides: null, colorLocked: e2.colorLocked, effects: t2, color: ne(f2, i2, "TintColor", r2, c2, re), height: ne(f2, i2, "Height", r2, e2.height), scaleX: ne(f2, i2, "ScaleX", r2, h2), angle: ne(f2, i2, "Rotation", r2, b$3(e2.rotation)), offsetX: ne(f2, i2, "OffsetX", r2, b$3(e2.offsetX)), offsetY: ne(f2, i2, "OffsetY", r2, b$3(e2.offsetY)), url: e2.url, applyRandomOffset: false, sampleAlphaOnly: false });
}
function U(e2, t2, i2, o2, r2, n2) {
  var _a;
  const l2 = ["Rotation", "OffsetX", "OffsetY"], a2 = o2.filter((t3) => t3.primitiveName !== e2.primitiveName || !l2.includes(t3.propertyName)), f2 = e2.primitiveName, [c2, m2] = pe(o2, f2, t2, null, null), p2 = c$b(JSON.stringify(e2) + m2).toString(), u2 = c$b(`${e2.separation}${JSON.stringify(e2.lineSymbol)}`).toString();
  let y2 = { r: 255, g: 255, b: 255, a: 1 };
  if (e2.lineSymbol) {
    const t3 = (_a = e2.lineSymbol) == null ? void 0 : _a.symbolLayers.find((e3) => e3.type === "CIMSolidStroke");
    t3 && (y2 = u$8(t3.color));
  }
  n2.push({ type: "fill", templateHash: p2, materialHash: c2 ? ce(u2, i2, a2, r2) : u2, cim: e2, materialOverrides: a2, colorLocked: e2.colorLocked, effects: t2, color: y2, height: ne(f2, i2, "Separation", r2, e2.separation), scaleX: 1, angle: ne(f2, i2, "Rotation", r2, b$3(e2.rotation)), offsetX: ne(f2, i2, "OffsetX", r2, b$3(e2.offsetX)), offsetY: ne(f2, i2, "OffsetY", r2, b$3(e2.offsetY)), applyRandomOffset: false, sampleAlphaOnly: true });
}
function W(e2, t2, i2, o2, r2, n2) {
  const l2 = e2.primitiveName, [a2, f2] = pe(o2, l2, t2, null, null), c2 = c$b(JSON.stringify(e2) + f2).toString();
  n2.push({ type: "fill", templateHash: c2, materialHash: a2 ? ce(c2, i2, o2, r2) : c2, cim: e2, materialOverrides: null, colorLocked: e2.colorLocked, effects: t2, color: { r: 128, g: 128, b: 128, a: 1 }, height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, applyRandomOffset: false, sampleAlphaOnly: false });
}
function G(e2, t2, i2, o2, r2, n2, l2, a2) {
  const f2 = e2.primitiveName, c2 = u$8(e2.color), m2 = e2.width !== void 0 ? e2.width : 4, p2 = H(e2.capStyle), u2 = Y(e2.joinStyle), y2 = e2.miterLimit, [h2, g2] = pe(o2, f2, t2, null, null), d2 = c$b(JSON.stringify(e2) + g2).toString();
  let S2, N2;
  if (t2 && t2 instanceof Array && t2.length > 0) {
    const e3 = t2[t2.length - 1];
    if (e3.type === "CIMGeometricEffectDashes" && e3.lineDashEnding === "NoConstraint" && e3.offsetAlongLine === null) {
      const e4 = (t2 = [...t2]).pop();
      S2 = e4.dashTemplate, N2 = e4.scaleDash;
    }
  }
  n2.push({ type: "line", templateHash: d2, materialHash: h2 ? () => d2 : d2, cim: e2, materialOverrides: null, isOutline: l2, colorLocked: e2.colorLocked, effects: t2, color: ne(f2, i2, "Color", r2, c2, re), width: ne(f2, i2, "Width", r2, m2), cap: ne(f2, i2, "CapStyle", r2, p2), join: ne(f2, i2, "JoinStyle", r2, u2), miterLimit: ne(f2, i2, "MiterLimit", r2, y2), referenceWidth: a2, zOrder: oe(e2.name), dashTemplate: S2, scaleDash: N2, sampleAlphaOnly: true });
}
function B(e2, t2, i2, o2, r2, n2, l2, a2) {
  const f2 = c$b(`${e2.url}${JSON.stringify(e2.colorSubstitutions)}`).toString(), c2 = e2.primitiveName, m2 = u$8(e2.tintColor), p2 = e2.width !== void 0 ? e2.width : 4, u2 = H(e2.capStyle), y2 = Y(e2.joinStyle), h2 = e2.miterLimit, [g2, d2] = pe(o2, c2, t2, null, null), S2 = c$b(JSON.stringify(e2) + d2).toString();
  n2.push({ type: "line", templateHash: S2, materialHash: g2 ? () => f2 : f2, cim: e2, materialOverrides: null, isOutline: l2, colorLocked: e2.colorLocked, effects: t2, color: ne(c2, i2, "TintColor", r2, m2, re), width: ne(c2, i2, "Width", r2, p2), cap: ne(c2, i2, "CapStyle", r2, u2), join: ne(c2, i2, "JoinStyle", r2, y2), miterLimit: ne(c2, i2, "MiterLimit", r2, h2), referenceWidth: a2, zOrder: oe(e2.name), dashTemplate: null, scaleDash: false, url: e2.url, sampleAlphaOnly: false });
}
function q(e2, t2, i2, o2, r2, n2, l2, a2) {
  const f2 = e2.primitiveName, c2 = e2.width !== void 0 ? e2.width : 4, m2 = H(e2.capStyle), p2 = Y(e2.joinStyle), u2 = e2.miterLimit, [y2, h2] = pe(o2, f2, t2, null, null), g2 = c$b(JSON.stringify(e2) + h2).toString();
  n2.push({ type: "line", templateHash: g2, materialHash: y2 ? ce(g2, i2, o2, r2) : g2, cim: e2, materialOverrides: null, isOutline: l2, colorLocked: e2.colorLocked, effects: t2, color: { r: 128, g: 128, b: 128, a: 1 }, width: ne(f2, i2, "Width", r2, c2), cap: ne(f2, i2, "CapStyle", r2, m2), join: ne(f2, i2, "JoinStyle", r2, p2), miterLimit: ne(f2, i2, "MiterLimit", r2, u2), referenceWidth: a2, zOrder: oe(e2.name), dashTemplate: null, scaleDash: false, sampleAlphaOnly: false });
}
function V(e2, t2, i2, o2, r2, n2) {
  const l2 = e2.markerPlacement;
  if (!l2 || l2.type !== "CIMMarkerPlacementInsidePolygon")
    return false;
  const f2 = l2, c2 = Math.abs(f2.stepX), m2 = Math.abs(f2.stepY);
  if (c2 === 0 || m2 === 0)
    return true;
  const p2 = ["Rotation", "OffsetX", "OffsetY"], u2 = o2.filter((t3) => t3.primitiveName !== e2.primitiveName || !p2.includes(t3.propertyName)), y2 = "url" in e2 ? e2.url : null, [h2, g2] = pe(o2, f2.primitiveName, t2, null, null), d2 = c$b(JSON.stringify(e2) + g2).toString();
  let S2, b2, O2 = null;
  if (l2.gridType === "Random") {
    const e3 = e$b(dt), t3 = Math.max(Math.floor(e3 / c2), 1), i3 = Math.max(Math.floor(e3 / m2), 1);
    S2 = m2 * i3, O2 = (e4) => e4 ? e4 * i3 : 0;
    b2 = t3 * c2 / S2;
  } else
    l2.shiftOddRows ? (S2 = 2 * m2, O2 = (e3) => e3 ? 2 * e3 : 0, b2 = c2 / m2 * 0.5) : (S2 = m2, O2 = null, b2 = c2 / m2);
  let k2 = { r: 255, g: 255, b: 255, a: 1 };
  return "tintColor" in e2 && (k2 = u$8(e2.tintColor)), n2.push({ type: "fill", templateHash: d2, materialHash: h2 ? ce(d2, i2, u2, r2) : d2, cim: e2, materialOverrides: u2, colorLocked: e2.colorLocked, effects: t2, color: ne(f2.primitiveName, i2, "TintColor", r2, k2, re), height: ne(f2.primitiveName, i2, "StepY", r2, S2, O2), scaleX: b2, angle: ne(f2.primitiveName, i2, "GridAngle", r2, f2.gridAngle), offsetX: ne(f2.primitiveName, i2, "OffsetX", r2, b$3(f2.offsetX)), offsetY: ne(f2.primitiveName, i2, "OffsetY", r2, b$3(f2.offsetY)), url: y2, applyRandomOffset: l2.gridType === "Random", sampleAlphaOnly: !y2 }), true;
}
function K(e2, t2, i2, o$12, r2, l2, a2, f2, c2) {
  var _a;
  const m2 = e2.primitiveName, p2 = b$3(e2.size);
  let u2 = b$3(e2.scaleX, 1);
  const y2 = b$3(e2.rotation), h2 = b$3(e2.offsetX), g2 = b$3(e2.offsetY), d2 = e2.tintColor ? u$8(e2.tintColor) : { r: 255, g: 255, b: 255, a: 1 }, S2 = c$b(`${e2.url}${JSON.stringify(e2.colorSubstitutions)}${JSON.stringify(e2.animatedSymbolProperties)}`).toString(), b2 = se(e2.markerPlacement, o$12, i2, r2), O2 = fe(e2.animatedSymbolProperties, o$12, i2, r2), [k2, C2] = pe(o$12, m2, t2, b2, O2), P2 = c$b(JSON.stringify(e2) + C2).toString(), M2 = (_a = e2.anchorPoint) != null ? _a : { x: 0, y: 0 };
  if ("width" in e2) {
    const t3 = e2.width;
    let i3 = 1;
    const o2 = l2.getResource(e2.url);
    r$g(o2) && (i3 = o2.width / o2.height), u2 /= i3 * (p2 / t3);
  }
  function L2(e3, t3) {
    return t$5(O2, e3, t3);
  }
  const I2 = e2.animatedSymbolProperties && e2.animatedSymbolProperties.randomizeStartTime === true ? (e3, t3, i3, o$13) => {
    const r3 = o(o$13), n2 = L2(e3, t3);
    return S2 + `-MATERIALGROUP(${r3})-ASP(${JSON.stringify(n2)})`;
  } : k2 ? (e3, t3) => {
    const i3 = L2(e3, t3);
    return S2 + `-ASP(${JSON.stringify(i3)})`;
  } : S2;
  a2.push({ type: "marker", templateHash: P2, materialHash: I2, cim: e2, materialOverrides: null, colorLocked: e2.colorLocked, effects: t2, scaleSymbolsProportionally: false, alignment: f2, size: ne(m2, i2, "Size", r2, p2), scaleX: ne(m2, i2, "ScaleX", r2, u2), rotation: ne(m2, i2, "Rotation", r2, y2), offsetX: ne(m2, i2, "OffsetX", r2, h2), offsetY: ne(m2, i2, "OffsetY", r2, g2), color: ne(m2, i2, "TintColor", r2, d2, re), anchorPoint: { x: M2.x, y: -M2.y }, isAbsoluteAnchorPoint: e2.anchorPointUnits !== "Relative", outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, frameHeight: 0, rotateClockwise: e2.rotateClockwise, referenceSize: c2, sizeRatio: 1, markerPlacement: b2, url: e2.url, animatedSymbolProperties: O2 });
}
function Q(e2, t2, i2, o2, r2, n2, l2, a2, s2, f2) {
  const c2 = e2.markerGraphics;
  if (!c2)
    return;
  let m2 = 0;
  if (e2.scaleSymbolsProportionally) {
    const t3 = e2.frame;
    t3 && (m2 = t3.ymax - t3.ymin);
  }
  const p2 = se(e2.markerPlacement, o2, i2, r2);
  for (const u2 of c2)
    if (u2) {
      const c3 = u2.symbol;
      if (!c3)
        continue;
      switch (c3.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          Z(e2, t2, p2, null, u2, o2, i2, r2, n2, l2, a2, s2, m2, f2);
          break;
        case "CIMTextSymbol":
          _(e2, t2, p2, u2, i2, o2, r2, n2, a2, s2, m2);
      }
    }
}
function _(e2, i2, o2, r2, n2, l2, a2, f2, c2, m2, u2) {
  const y2 = [];
  ie$1.findApplicableOverrides(r2, l2, y2);
  const h2 = r2.geometry;
  if (!("x" in h2) || !("y" in h2))
    return;
  const g2 = r2.symbol, d2 = g$5(g2), S$12 = S(g2.fontStyleName), z2 = a$b(g2.fontFamilyName);
  g2.font = __spreadValues({ family: z2, decoration: d2 }, S$12);
  const A2 = e2.frame, R2 = h2.x - 0.5 * (A2.xmin + A2.xmax), x2 = h2.y - 0.5 * (A2.ymin + A2.ymax), J2 = e2.size / u2, H2 = e2.primitiveName, Y2 = b$3(g2.height) * J2, $2 = b$3(g2.angle), E2 = b$3(e2.offsetX) + (b$3(g2.offsetX) + R2) * J2, T2 = b$3(e2.offsetY) + (b$3(g2.offsetY) + x2) * J2, j2 = u$8(k$1(g2));
  let D2 = u$8(P$2(g2)), F2 = L$1(g2);
  F2 || (D2 = u$8(k$1(g2.haloSymbol)), F2 = g2.haloSize * J2);
  const [U2, W2] = pe(l2, H2, i2, o2, null), G2 = JSON.stringify(e2.effects) + Number(e2.colorLocked).toString() + JSON.stringify(e2.anchorPoint) + e2.anchorPointUnits + JSON.stringify(e2.markerPlacement) + e2.size.toString(), B2 = c$b(JSON.stringify(r2) + G2 + W2).toString();
  let q2 = ne(r2.primitiveName, n2, "TextString", a2, r2.textString, s$7, g2.textCase);
  if (q2 == null)
    return;
  const { fontStyleName: V2 } = g2, K2 = z2 + (V2 ? "-" + V2.toLowerCase() : "-regular"), Q2 = K2;
  typeof q2 == "string" && q2.includes("[") && g2.fieldMap && (q2 = c$9(g2.fieldMap, q2, g2.textCase)), f2.push({ type: "text", templateHash: B2, materialHash: U2 || typeof q2 == "function" || q2.match(/\[(.*?)\]/) ? (e3, t2, i3) => Q2 + "-" + t$5(q2, e3, t2, i3) : Q2 + "-" + c$b(q2), cim: g2, materialOverrides: null, colorLocked: e2.colorLocked, effects: i2, alignment: c2, anchorPoint: { x: e2.anchorPoint ? e2.anchorPoint.x : 0, y: e2.anchorPoint ? e2.anchorPoint.y : 0 }, isAbsoluteAnchorPoint: e2.anchorPointUnits !== "Relative", fontName: K2, decoration: d2, weight: ne(H2, n2, "Weight", a2, S$12.weight), style: ne(H2, n2, "Size", a2, S$12.style), size: ne(H2, n2, "Size", a2, Y2), angle: ne(H2, n2, "Rotation", a2, $2), offsetX: ne(H2, n2, "OffsetX", a2, E2), offsetY: ne(H2, n2, "OffsetY", a2, T2), horizontalAlignment: w$2(g2.horizontalAlignment), verticalAlignment: x$3(g2.verticalAlignment), text: q2, color: j2, outlineColor: D2, outlineSize: F2, referenceSize: m2, sizeRatio: 1, markerPlacement: o2 });
}
function Z(e2, t2, i2, o2, r2, l2, a2, f$22, c2, m2, p2, u2, y2, h2) {
  var _a;
  const g2 = r2.symbol, b2 = g2.symbolLayers;
  if (!b2)
    return;
  if (h2)
    return void te(e2, t2, i2, o2, r2, a2, l2, f$22, c2, m2, p2, u2, y2);
  let O2 = b2.length;
  if (ue(b2))
    return void ee(e2, t2, i2, o2, r2, b2, l2, a2, f$22, c2, p2, u2, y2);
  const M2 = f.applyEffects(g2.effects, r2.geometry, m2.geometryEngine);
  if (M2)
    for (; O2--; ) {
      const h3 = b2[O2];
      if (h3 && h3.enable !== false)
        switch (h3.type) {
          case "CIMSolidFill":
          case "CIMSolidStroke": {
            const g3 = f.applyEffects(h3.effects, M2, m2.geometryEngine), b3 = i$1(g3);
            if (!b3)
              continue;
            const O3 = e2.anchorPointUnits !== "Relative", [L2, w2, I2] = f$1(b3, e2.frame, e2.size, e2.anchorPoint, O3), X2 = h3.type === "CIMSolidFill", A2 = { type: "sdf", geom: g3, asFill: X2 }, R2 = e2.primitiveName, x2 = (_a = b$3(e2.size)) != null ? _a : 10, J2 = b$3(e2.rotation), H2 = b$3(e2.offsetX), Y2 = b$3(e2.offsetY), $2 = h3.path, E2 = h3.primitiveName, T2 = u$8(X2 ? k$1(h3) : P$2(h3)), j2 = X2 ? { r: 0, g: 0, b: 0, a: 0 } : u$8(P$2(h3)), D2 = L$1(h3);
            if (!X2 && !D2)
              break;
            let F2 = false, U2 = "";
            for (const e3 of l2)
              e3.primitiveName !== E2 && e3.primitiveName !== R2 || (e3.value !== void 0 ? U2 += `-${e3.primitiveName}-${e3.propertyName}-${JSON.stringify(e3.value)}` : e3.valueExpressionInfo && (F2 = true));
            r$g(t2) && typeof t2 == "function" && (F2 = true);
            const W2 = JSON.stringify(__spreadProps(__spreadValues({}, e2), { markerGraphics: null })), G2 = c$b(JSON.stringify(A2) + $2).toString(), B2 = { type: "marker", templateHash: c$b(JSON.stringify(r2) + JSON.stringify(h3) + W2 + U2).toString(), materialHash: F2 ? () => G2 : G2, cim: A2, materialOverrides: null, colorLocked: e2.colorLocked, effects: t2, scaleSymbolsProportionally: e2.scaleSymbolsProportionally, alignment: p2, anchorPoint: { x: w2, y: I2 }, isAbsoluteAnchorPoint: O3, size: ne(e2.primitiveName, a2, "Size", f$22, x2), rotation: ne(e2.primitiveName, a2, "Rotation", f$22, J2), offsetX: ne(e2.primitiveName, a2, "OffsetX", f$22, H2), offsetY: ne(e2.primitiveName, a2, "OffsetY", f$22, Y2), scaleX: 1, frameHeight: y2, rotateClockwise: e2.rotateClockwise, referenceSize: u2, sizeRatio: L2, color: ne(E2, a2, "Color", f$22, T2, re), outlineColor: ne(E2, a2, "Color", f$22, j2, re), outlineWidth: ne(E2, a2, "Width", f$22, D2), markerPlacement: i2, animatedSymbolProperties: o2, path: $2 };
            c2.push(B2);
            break;
          }
          default:
            te(e2, t2, i2, o2, r2, a2, l2, f$22, c2, m2, p2, u2, y2);
        }
    }
}
function ee(e2, t2, i2, o2, r2, n2, l2, a2, f2, c2, m2, p2, u2) {
  const y2 = r2.geometry, h2 = n2[0], g2 = n2[1], b2 = i$1(y2);
  if (!b2)
    return;
  const O2 = e2.anchorPointUnits !== "Relative", [M2, L2, w2] = f$1(b2, e2.frame, e2.size, e2.anchorPoint, O2), I2 = { type: "sdf", geom: y2, asFill: true }, X2 = e2.primitiveName, z2 = b$3(e2.size), A2 = b$3(e2.rotation), R2 = b$3(e2.offsetX), x2 = b$3(e2.offsetY), J2 = g2.path, H2 = g2.primitiveName, Y2 = h2.primitiveName, $2 = u$8(k$1(g2)), E2 = u$8(P$2(h2)), T2 = L$1(h2);
  let j2 = false, D2 = "";
  for (const s2 of l2)
    s2.primitiveName !== H2 && s2.primitiveName !== Y2 && s2.primitiveName !== X2 || (s2.value !== void 0 ? D2 += `-${s2.primitiveName}-${s2.propertyName}-${JSON.stringify(s2.value)}` : s2.valueExpressionInfo && (j2 = true));
  const F2 = JSON.stringify(__spreadProps(__spreadValues({}, e2), { markerGraphics: null })), U2 = c$b(JSON.stringify(I2) + J2).toString(), W2 = { type: "marker", templateHash: c$b(JSON.stringify(r2) + JSON.stringify(g2) + JSON.stringify(h2) + F2 + D2).toString(), materialHash: j2 ? () => U2 : U2, cim: I2, materialOverrides: null, colorLocked: e2.colorLocked, effects: t2, scaleSymbolsProportionally: e2.scaleSymbolsProportionally, alignment: m2, anchorPoint: { x: L2, y: w2 }, isAbsoluteAnchorPoint: O2, size: ne(e2.primitiveName, a2, "Size", f2, z2), rotation: ne(e2.primitiveName, a2, "Rotation", f2, A2), offsetX: ne(e2.primitiveName, a2, "OffsetX", f2, R2), offsetY: ne(e2.primitiveName, a2, "OffsetY", f2, x2), scaleX: 1, frameHeight: u2, rotateClockwise: e2.rotateClockwise, referenceSize: p2, sizeRatio: M2, color: ne(H2, a2, "Color", f2, $2, re), outlineColor: ne(Y2, a2, "Color", f2, E2, re), outlineWidth: ne(Y2, a2, "Width", f2, T2), markerPlacement: i2, path: J2, animatedSymbolProperties: o2 };
  c2.push(W2);
}
function te(e2, t2, i2, o2, r2, a2, f2, c2, p2, u2, y2, h2, g2) {
  const d2 = ie(e2, r2), S2 = ["Rotation", "OffsetX", "OffsetY"], v2 = f2.filter((t3) => t3.primitiveName !== e2.primitiveName || !S2.includes(t3.propertyName));
  let b2 = "";
  for (const n2 of f2)
    n2.value !== void 0 && (b2 += `-${n2.primitiveName}-${n2.propertyName}-${JSON.stringify(n2.value)}`);
  const [O2, k2, C2] = oe$1.getTextureAnchor(d2, u2), P2 = e2.primitiveName, M2 = b$3(e2.rotation), L2 = b$3(e2.offsetX), w2 = b$3(e2.offsetY), I2 = c$b(JSON.stringify(d2) + b2).toString(), X2 = { type: "marker", templateHash: I2, materialHash: v2.length > 0 || r$g(t2) && typeof t2 == "function" ? ce(I2, a2, v2, c2) : I2, cim: d2, materialOverrides: v2, colorLocked: e2.colorLocked, effects: t2, scaleSymbolsProportionally: e2.scaleSymbolsProportionally, alignment: y2, anchorPoint: { x: O2, y: k2 }, isAbsoluteAnchorPoint: false, size: e2.size, rotation: ne(P2, a2, "Rotation", c2, M2), offsetX: ne(P2, a2, "OffsetX", c2, L2), offsetY: ne(P2, a2, "OffsetY", c2, w2), color: { r: 255, g: 255, b: 255, a: 1 }, outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, scaleX: 1, frameHeight: g2, rotateClockwise: e2.rotateClockwise, referenceSize: h2, sizeRatio: C2 / u$c(e2.size), markerPlacement: i2, animatedSymbolProperties: o2 };
  p2.push(X2);
}
function ie(e2, t2) {
  return { type: e2.type, enable: true, name: e2.name, colorLocked: e2.colorLocked, primitiveName: e2.primitiveName, anchorPoint: e2.anchorPoint, anchorPointUnits: e2.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: e2.rotateClockwise, rotation: 0, size: e2.size, billboardMode3D: e2.billboardMode3D, depth3D: e2.depth3D, frame: e2.frame, markerGraphics: [t2], scaleSymbolsProportionally: e2.scaleSymbolsProportionally, respectFrame: e2.respectFrame, clippingPath: e2.clippingPath };
}
function oe(e2) {
  if (e2 && e2.indexOf("Level_") === 0) {
    const t2 = parseInt(e2.substr(6), 10);
    if (!isNaN(t2))
      return t2;
  }
  return 0;
}
function re(t2) {
  if (!t2 || t2.length === 0)
    return null;
  const i2 = new l$9(t2).toRgba();
  return { r: i2[0], g: i2[1], b: i2[2], a: i2[3] };
}
function ne(e2, t2, i2, o2, r2, n2, l2) {
  const a2 = t2[e2];
  if (a2) {
    const e3 = a2[i2];
    if (typeof e3 == "string" || typeof e3 == "number" || e3 instanceof Array)
      return n2 ? n2.call(null, e3, l2) : e3;
    if (e3 != null && e3 instanceof p$4)
      return (t3, i3, a3) => {
        let s2 = i$2(e3, t3, { $view: a3 }, o2.geometryType, i3);
        return s2 !== null && n2 && (s2 = n2.call(null, s2, l2)), s2 !== null ? s2 : r2;
      };
  }
  return r2;
}
function le(e2) {
  return e2 ? e2.charAt(0).toLowerCase() + e2.substr(1) : e2;
}
function ae(e2, t2, o2, r2) {
  for (const i2 of t2) {
    if (i2.valueExpressionInfo) {
      const e3 = o2[i2.primitiveName] && o2[i2.primitiveName][i2.propertyName];
      e3 instanceof p$4 && (i2.fn = (t3, i3, o3) => i$2(e3, t3, { $view: o3 }, r2.geometryType, i3));
    }
  }
  return (o3, r3, n2) => {
    for (const e3 of t2)
      e3.fn && (e3.value = e3.fn(o3, r3, n2));
    const l2 = [];
    for (let a2 of e2) {
      const e3 = a2 == null ? void 0 : a2.primitiveName;
      if (e3) {
        let o4 = false;
        for (const r4 of t2)
          if (r4.primitiveName === e3) {
            const e4 = le(r4.propertyName);
            r4.value != null && r4.value !== a2[e4] && (o4 || (a2 = y$3(a2), o4 = true), a2[e4] = r4.value);
          }
      }
      l2.push(a2);
    }
    return l2;
  };
}
function se(e2, t2, o2, r2) {
  const n2 = [];
  if (ie$1.findApplicableOverrides(e2, t2, n2), n2.length === 0)
    return e2;
  for (const i2 of n2) {
    if (i2.valueExpressionInfo) {
      const e3 = o2[i2.primitiveName] && o2[i2.primitiveName][i2.propertyName];
      e3 instanceof p$4 && (i2.fn = (t3, i3, o3) => i$2(e3, t3, { $view: o3 }, r2.geometryType, i3));
    }
  }
  return (t3, o3, r3) => {
    for (const e3 of n2)
      e3.fn && (e3.value = e3.fn(t3, o3, r3));
    const l2 = y$3(e2), a2 = e2.primitiveName;
    for (const e3 of n2)
      if (e3.primitiveName === a2) {
        const t4 = le(e3.propertyName);
        e3.value != null && e3.value !== l2[t4] && (l2[t4] = e3.value);
      }
    return l2;
  };
}
function fe(e2, t2, o2, r2) {
  const n2 = [];
  if (ie$1.findApplicableOverrides(e2, t2, n2), n2.length === 0)
    return e2;
  for (const i2 of n2) {
    if (i2.valueExpressionInfo) {
      const e3 = o2[i2.primitiveName] && o2[i2.primitiveName][i2.propertyName];
      e3 instanceof p$4 && (i2.fn = (t3, i3, o3) => i$2(e3, t3, { $view: o3 }, r2.geometryType, i3));
    }
  }
  return (t3, o3, r3) => {
    for (const e3 of n2)
      e3.fn && (e3.value = e3.fn(t3, o3, r3));
    const l2 = y$3(e2), a2 = e2.primitiveName;
    for (const e3 of n2)
      if (e3.primitiveName === a2) {
        const t4 = le(e3.propertyName);
        if (e3.value != null) {
          const i2 = a$1(e3.value, e3.propertyName);
          i2 !== l2[t4] && (l2[t4] = i2);
        }
      }
    return l2;
  };
}
function ce(e2, t2, i2, o2) {
  for (const r2 of i2) {
    if (r2.valueExpressionInfo) {
      const e3 = t2[r2.primitiveName] && t2[r2.primitiveName][r2.propertyName];
      e3 instanceof p$4 && (r2.fn = (t3, i3, r3) => i$2(e3, t3, { $view: r3 }, o2.geometryType, i3));
    }
  }
  return (t3, o3, r2) => {
    for (const e3 of i2)
      e3.fn && (e3.value = e3.fn(t3, o3, r2));
    return c$b(e2 + ie$1.buildOverrideKey(i2)).toString();
  };
}
function me(e2, t2) {
  if (!t2 || t2.length === 0)
    return e2;
  const o2 = y$3(e2);
  return ie$1.applyOverrides(o2, t2), o2;
}
function pe(e2, t2, i2, o2, r2) {
  let l2 = false, a2 = "";
  for (const n2 of e2)
    n2.primitiveName === t2 && (n2.value !== void 0 ? a2 += `-${n2.primitiveName}-${n2.propertyName}-${JSON.stringify(n2.value)}` : n2.valueExpressionInfo && (l2 = true));
  return r$g(i2) && typeof i2 == "function" && (l2 = true), r$g(o2) && typeof o2 == "function" && (l2 = true), r$g(r2) && typeof r2 == "function" && (l2 = true), [l2, a2];
}
const ue = (e2) => e2 && e2.length === 2 && e2[0].enable && e2[1].enable && e2[0].type === "CIMSolidStroke" && e2[1].type === "CIMSolidFill" && !e2[0].effects && !e2[1].effects;
const s = { marker: E$2.MARKER, fill: E$2.FILL, line: E$2.LINE, text: E$2.TEXT };
class l {
  constructor(e2, l2, n2, r2) {
    const c2 = { minScale: l2 == null ? void 0 : l2.minScale, maxScale: l2 == null ? void 0 : l2.maxScale }, m2 = i(c2);
    this.layers = e2, this.data = l2, this.hash = this._createHash() + m2, this.rendererKey = n2;
    const o2 = { isOutline: false, placement: null, symbologyType: S$1.DEFAULT, vvFlags: n2 };
    for (const t2 of e2) {
      const e3 = s[t2.type];
      o2.isOutline = t2.type === "line" && t2.isOutline, t2.materialKey = f$9(e3, o2), t2.maxVVSize = r2, t2.scaleInfo = c2, t2.templateHash += m2;
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let e2 = "";
    for (const t2 of this.layers)
      e2 += t2.templateHash;
    return e2;
  }
}
function i(e2) {
  return e2.minScale || e2.maxScale ? e2.minScale + "-" + e2.maxScale : "";
}
export { Q$1 as Q, T, V$1 as V, a$c as a, a as b, o as c, ae$1 as d, e, a$9 as f, g$1 as g, f as h, i$7 as i, j$1 as j, t$5 as k, l, me as m, n$b as n, oe$1 as o, pe$1 as p, i$2 as q, r$1 as r, t$1 as t };
