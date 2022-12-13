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
import { $ as e, a0 as y$5, is as f$5, dD as r$1, cD as o$1, a1 as n$2, co as l$5, je as m$7, dC as v$3, b0 as l$6, a as r$3, s as s$1, cn as s$2, aX as y$6, hD as h$4, kR as gn, E as n$4, e6 as y$7, a7 as w$4, kS as _, hf as Ot, gc as L, bU as p$6, l as f$6, t, g as s$3, f0 as u$7, f8 as Zn, f7 as O$2, fi as a$2, dP as S$1, e_ as z$1, G as o$2, eZ as e$3, kI as f$7, gD as g$6, f6 as O$4, a5 as g$7, Y as a$4, hS as m$8, cB as m$9, cw as p$7, R as l$7, cr as w$5, aq as v$5, ab as r$5, cE as x$6, cC as g$8 } from "./index.js";
import { r as r$4, b as b$2, x as x$4, M as M$2, j, a as k$3, O as O$3, h as h$5, L as L$1, _ as _$1, c as a$3, v as v$4, g as g$5, d as x$5, e as k$4, f as L$2 } from "./georeference.js";
import { r as r$2 } from "./imageUtils.js";
import { x as x$3 } from "./earcut.js";
import { n as n$3 } from "./deduplicate.js";
import { e as e$2 } from "./mat3f64.js";
import { e as e$1 } from "./mat4f64.js";
var p$5;
const d$3 = new WeakMap();
let h$3 = 0, u$6 = p$5 = class extends l$5 {
  constructor(t2) {
    super(t2), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(t2) {
    this._set("url", t2), t2 && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(t2) {
    this._set("data", t2), t2 && this._set("url", null);
  }
  writeData(t2, e2, a2, r2) {
    if (t2 instanceof HTMLImageElement) {
      const s2 = { type: "image-element", src: m$7(t2.src, r2), crossOrigin: t2.crossOrigin };
      e2[a2] = s2;
    } else if (t2 instanceof HTMLCanvasElement) {
      const r3 = t2.getContext("2d").getImageData(0, 0, t2.width, t2.height), s2 = { type: "canvas-element", imageData: this._encodeImageData(r3) };
      e2[a2] = s2;
    } else if (t2 instanceof HTMLVideoElement) {
      const s2 = { type: "video-element", src: m$7(t2.src, r2), autoplay: t2.autoplay, loop: t2.loop, muted: t2.muted, crossOrigin: t2.crossOrigin, preload: t2.preload };
      e2[a2] = s2;
    } else {
      const r3 = { type: "image-data", imageData: this._encodeImageData(t2) };
      e2[a2] = r3;
    }
  }
  readData(t2) {
    switch (t2.type) {
      case "image-element": {
        const e2 = new Image();
        return e2.src = t2.src, e2.crossOrigin = t2.crossOrigin, e2;
      }
      case "canvas-element": {
        const e2 = this._decodeImageData(t2.imageData), a2 = document.createElement("canvas");
        return a2.width = e2.width, a2.height = e2.height, a2.getContext("2d").putImageData(e2, 0, 0), a2;
      }
      case "image-data":
        return this._decodeImageData(t2.imageData);
      case "video-element": {
        const e2 = document.createElement("video");
        return e2.src = t2.src, e2.crossOrigin = t2.crossOrigin, e2.autoplay = t2.autoplay, e2.loop = t2.loop, e2.muted = t2.muted, e2.preload = t2.preload, e2;
      }
      default:
        return;
    }
  }
  get transparent() {
    const t2 = this.data, e2 = this.url;
    if (t2 instanceof HTMLCanvasElement)
      return this._imageDataContainsTransparent(t2.getContext("2d").getImageData(0, 0, t2.width, t2.height));
    if (t2 instanceof ImageData)
      return this._imageDataContainsTransparent(t2);
    if (e2) {
      const t3 = e2.substr(e2.length - 4, 4).toLowerCase(), a2 = e2.substr(0, 15).toLocaleLowerCase();
      if (t3 === ".png" || a2 === "data:image/png;")
        return true;
    }
    return false;
  }
  set transparent(t2) {
    this._overrideIfSome("transparent", t2);
  }
  get contentHash() {
    const t2 = typeof this.wrap == "string" ? this.wrap : typeof this.wrap == "object" ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", e2 = (e3 = "") => `d:${e3},t:${this.transparent},w:${t2}`;
    return this.url != null ? e2(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? e2(this.data.src) : (d$3.has(this.data) || d$3.set(this.data, ++h$3), e2(d$3.get(this.data))) : e2();
  }
  clone() {
    const t2 = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new p$5(t2);
  }
  cloneWithDeduplication(t2) {
    const e2 = t2.get(this);
    if (e2)
      return e2;
    const a2 = this.clone();
    return t2.set(this, a2), a2;
  }
  _cloneWrap() {
    return typeof this.wrap == "string" ? this.wrap : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
  }
  _encodeImageData(t2) {
    let e2 = "";
    for (let a2 = 0; a2 < t2.data.length; a2++)
      e2 += String.fromCharCode(t2.data[a2]);
    return { data: btoa(e2), width: t2.width, height: t2.height };
  }
  _decodeImageData(t2) {
    const a2 = atob(t2.data), r2 = new Uint8ClampedArray(a2.length);
    for (let e2 = 0; e2 < a2.length; e2++)
      r2[e2] = a2.charCodeAt(e2);
    return r$2(r2, t2.width, t2.height);
  }
  _imageDataContainsTransparent(t2) {
    for (let e2 = 3; e2 < t2.data.length; e2 += 4)
      if (t2.data[e2] !== 255)
        return true;
    return false;
  }
  static from(t2) {
    return typeof t2 == "string" ? new p$5({ url: t2 }) : t2 instanceof HTMLImageElement || t2 instanceof HTMLCanvasElement || t2 instanceof ImageData || t2 instanceof HTMLVideoElement ? new p$5({ data: t2 }) : v$3(p$5, t2);
  }
};
e([y$5({ type: String, json: { write: f$5 } })], u$6.prototype, "url", null), e([y$5({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), y$5()], u$6.prototype, "data", null), e([r$1("data")], u$6.prototype, "writeData", null), e([o$1("data")], u$6.prototype, "readData", null), e([y$5({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], u$6.prototype, "transparent", null), e([y$5({ json: { write: true } })], u$6.prototype, "wrap", void 0), e([y$5({ readOnly: true })], u$6.prototype, "contentHash", null), u$6 = p$5 = e([n$2("esri.geometry.support.MeshTexture")], u$6);
const m$6 = u$6;
var n$1;
let u$5 = n$1 = class extends l$5 {
  constructor(o2) {
    super(o2), this.color = null, this.colorTexture = null, this.normalTexture = null, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = true;
  }
  clone() {
    return this.cloneWithDeduplication(null, new Map());
  }
  cloneWithDeduplication(o2, r2) {
    const e2 = r$3(o2) ? o2.get(this) : null;
    if (e2)
      return e2;
    const l2 = new n$1(this.clonePropertiesWithDeduplication(r2));
    return r$3(o2) && o2.set(this, l2), l2;
  }
  clonePropertiesWithDeduplication(o2) {
    return { color: r$3(this.color) ? this.color.clone() : null, colorTexture: r$3(this.colorTexture) ? this.colorTexture.cloneWithDeduplication(o2) : null, normalTexture: r$3(this.normalTexture) ? this.normalTexture.cloneWithDeduplication(o2) : null, alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided, colorTextureTransform: r$3(this.colorTextureTransform) ? this.colorTextureTransform : null, normalTextureTransform: r$3(this.normalTextureTransform) ? this.normalTextureTransform : null };
  }
};
e([y$5({ type: l$6, json: { write: true } })], u$5.prototype, "color", void 0), e([y$5({ type: m$6, json: { write: true } })], u$5.prototype, "colorTexture", void 0), e([y$5({ type: m$6, json: { write: true } })], u$5.prototype, "normalTexture", void 0), e([y$5({ nonNullable: true, json: { write: true } })], u$5.prototype, "alphaMode", void 0), e([y$5({ nonNullable: true, json: { write: true } })], u$5.prototype, "alphaCutoff", void 0), e([y$5({ nonNullable: true, json: { write: true } })], u$5.prototype, "doubleSided", void 0), e([y$5()], u$5.prototype, "colorTextureTransform", void 0), e([y$5()], u$5.prototype, "normalTextureTransform", void 0), u$5 = n$1 = e([n$2("esri.geometry.support.MeshMaterial")], u$5);
const a$1 = u$5;
var n;
let u$4 = n = class extends a$1 {
  constructor(e2) {
    super(e2), this.emissiveColor = null, this.emissiveTexture = null, this.occlusionTexture = null, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null;
  }
  clone() {
    return this.cloneWithDeduplication(null, new Map());
  }
  cloneWithDeduplication(e2, s2) {
    const o2 = r$3(e2) ? e2.get(this) : null;
    if (o2)
      return o2;
    const r2 = new n(this.clonePropertiesWithDeduplication(s2));
    return r$3(e2) && e2.set(this, r2), r2;
  }
  clonePropertiesWithDeduplication(e2) {
    return __spreadProps(__spreadValues({}, super.clonePropertiesWithDeduplication(e2)), { emissiveColor: r$3(this.emissiveColor) ? this.emissiveColor.clone() : null, emissiveTexture: r$3(this.emissiveTexture) ? this.emissiveTexture.cloneWithDeduplication(e2) : null, occlusionTexture: r$3(this.occlusionTexture) ? this.occlusionTexture.cloneWithDeduplication(e2) : null, metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: r$3(this.metallicRoughnessTexture) ? this.metallicRoughnessTexture.cloneWithDeduplication(e2) : null, occlusionTextureTransform: r$3(this.occlusionTextureTransform) ? this.occlusionTextureTransform : null, emissiveTextureTransform: r$3(this.emissiveTextureTransform) ? this.emissiveTextureTransform : null, metallicRoughnessTextureTransform: r$3(this.metallicRoughnessTextureTransform) ? this.metallicRoughnessTextureTransform : null });
  }
};
e([y$5({ type: l$6, json: { write: true } })], u$4.prototype, "emissiveColor", void 0), e([y$5({ type: m$6, json: { write: true } })], u$4.prototype, "emissiveTexture", void 0), e([y$5({ type: m$6, json: { write: true } })], u$4.prototype, "occlusionTexture", void 0), e([y$5({ type: Number, nonNullable: true, json: { write: true }, range: { min: 0, max: 1 } })], u$4.prototype, "metallic", void 0), e([y$5({ type: Number, nonNullable: true, json: { write: true }, range: { min: 0, max: 1 } })], u$4.prototype, "roughness", void 0), e([y$5({ type: m$6, json: { write: true } })], u$4.prototype, "metallicRoughnessTexture", void 0), e([y$5()], u$4.prototype, "occlusionTextureTransform", void 0), e([y$5()], u$4.prototype, "emissiveTextureTransform", void 0), e([y$5()], u$4.prototype, "metallicRoughnessTextureTransform", void 0), u$4 = n = e([n$2("esri.geometry.support.MeshMaterialMetallicRoughness")], u$4);
const c$5 = u$4;
var i$1;
const l$4 = "esri.geometry.support.MeshVertexAttributes", c$4 = s$1.getLogger(l$4);
let p$4 = i$1 = class extends l$5 {
  constructor(r2) {
    super(r2), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(r2) {
    return g$4(r2, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, c$4);
  }
  castPosition(r2) {
    r2 && r2 instanceof Float32Array && c$4.warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");
    return g$4(r2, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, c$4);
  }
  castUv(r2) {
    return g$4(r2, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, c$4);
  }
  castNormal(r2) {
    return g$4(r2, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, c$4);
  }
  castTangent(r2) {
    return g$4(r2, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, c$4);
  }
  clone() {
    const r2 = { position: y$6(this.position), uv: y$6(this.uv), normal: y$6(this.normal), tangent: y$6(this.tangent), color: y$6(this.color) };
    return new i$1(r2);
  }
  clonePositional() {
    const r2 = { position: y$6(this.position), normal: y$6(this.normal), tangent: y$6(this.tangent), uv: this.uv, color: this.color };
    return new i$1(r2);
  }
};
function u$3(r2, o2, t2, n2) {
  const { loggerTag: e2, stride: a2 } = o2;
  return r2.length % a2 != 0 ? (n2.error(e2, `Invalid array length, expected a multiple of ${a2}`), new t2([])) : r2;
}
function g$4(r2, o2, t2, n2, e2) {
  if (!r2)
    return r2;
  if (r2 instanceof o2)
    return u$3(r2, n2, o2, e2);
  for (const a2 of t2)
    if (r2 instanceof a2)
      return u$3(new o2(r2), n2, o2, e2);
  if (Array.isArray(r2))
    return u$3(new o2(r2), n2, o2, e2);
  {
    const n3 = t2.map((r3) => `'${r3.name}'`);
    return e2.error(`Failed to set property, expected one of ${n3}, but got ${r2.constructor.name}`), new o2([]);
  }
}
function m$5(r2, o2, t2) {
  o2[t2] = y$4(r2);
}
function y$4(r2) {
  const o2 = new Array(r2.length);
  for (let t2 = 0; t2 < r2.length; t2++)
    o2[t2] = r2[t2];
  return o2;
}
e([y$5({ json: { write: m$5 } })], p$4.prototype, "color", void 0), e([s$2("color")], p$4.prototype, "castColor", null), e([y$5({ nonNullable: true, json: { write: m$5 } })], p$4.prototype, "position", void 0), e([s$2("position")], p$4.prototype, "castPosition", null), e([y$5({ json: { write: m$5 } })], p$4.prototype, "uv", void 0), e([s$2("uv")], p$4.prototype, "castUv", null), e([y$5({ json: { write: m$5 } })], p$4.prototype, "normal", void 0), e([s$2("normal")], p$4.prototype, "castNormal", null), e([y$5({ json: { write: m$5 } })], p$4.prototype, "tangent", void 0), e([s$2("tangent")], p$4.prototype, "castTangent", null), p$4 = i$1 = e([n$2(l$4)], p$4);
var u$2;
const m$4 = "esri.geometry.support.MeshComponent", h$2 = s$1.getLogger(m$4);
let f$4 = u$2 = class extends l$5 {
  constructor(r2) {
    super(r2), this.faces = null, this.material = null, this.shading = "source", this.trustSourceNormals = false;
  }
  static from(r2) {
    return v$3(u$2, r2);
  }
  castFaces(r2) {
    return g$4(r2, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, h$2);
  }
  castMaterial(r2) {
    return v$3(r2 && typeof r2 == "object" && ("metallic" in r2 || "roughness" in r2 || "metallicRoughnessTexture" in r2) ? c$5 : a$1, r2);
  }
  clone() {
    return new u$2({ faces: y$6(this.faces), shading: this.shading, material: y$6(this.material), trustSourceNormals: this.trustSourceNormals });
  }
  cloneWithDeduplication(r2, t2) {
    const s2 = { faces: y$6(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(r2, t2) : null, trustSourceNormals: this.trustSourceNormals };
    return new u$2(s2);
  }
};
e([y$5({ json: { write: true } })], f$4.prototype, "faces", void 0), e([s$2("faces")], f$4.prototype, "castFaces", null), e([y$5({ type: a$1, json: { write: true } })], f$4.prototype, "material", void 0), e([s$2("material")], f$4.prototype, "castMaterial", null), e([y$5({ type: String, json: { write: true } })], f$4.prototype, "shading", void 0), e([y$5({ type: Boolean })], f$4.prototype, "trustSourceNormals", void 0), f$4 = u$2 = e([n$2(m$4)], f$4);
const g$3 = f$4;
function o(t2) {
  const o2 = l$3(t2.rings, t2.hasZ, c$3.CCW_IS_HOLE), s2 = new Array();
  let i2 = 0, h2 = 0;
  for (const e2 of o2.polygons) {
    const t3 = e2.count, r2 = e2.index, l2 = new Float64Array(o2.position.buffer, 3 * r2 * o2.position.BYTES_PER_ELEMENT, 3 * t3), c2 = e2.holeIndices.map((n2) => n2 - r2), f3 = new Uint32Array(x$3(l2, c2, 3));
    s2.push({ position: l2, faces: f3 }), i2 += l2.length, h2 += f3.length;
  }
  const f2 = r(s2, i2, h2), a2 = n$3(f2.position.buffer, 6, { originalIndices: f2.faces });
  return f2.position = new Float64Array(a2.buffer), f2.faces = a2.indices, f2;
}
function r(n2, t2, e2) {
  if (n2.length === 1)
    return n2[0];
  const o2 = new Float64Array(t2), r2 = new Uint32Array(e2);
  let l2 = 0, s2 = 0, i2 = 0;
  for (const c2 of n2) {
    for (let n3 = 0; n3 < c2.position.length; n3++)
      o2[l2++] = c2.position[n3];
    for (let n3 = 0; n3 < c2.faces.length; n3++)
      r2[s2++] = c2.faces[n3] + i2;
    i2 = l2 / 3;
  }
  return { position: o2, faces: r2 };
}
function l$3(n2, t2, e2) {
  const o2 = n2.length, r2 = new Array(o2), l2 = new Array(o2), h2 = new Array(o2);
  let f2 = 0, a2 = 0, g2 = 0, u2 = 0;
  for (let s2 = 0; s2 < o2; ++s2)
    u2 += n2[s2].length;
  const p2 = new Float64Array(3 * u2);
  let y2 = 0;
  for (let d2 = o2 - 1; d2 >= 0; d2--) {
    const u3 = n2[d2], w2 = e2 === c$3.CCW_IS_HOLE && i(u3);
    if (w2 && o2 !== 1)
      r2[f2++] = u3;
    else {
      let n3 = u3.length;
      for (let t3 = 0; t3 < f2; ++t3)
        n3 += r2[t3].length;
      const e3 = { index: y2, pathLengths: new Array(f2 + 1), count: n3, holeIndices: new Array(f2) };
      e3.pathLengths[0] = u3.length, u3.length > 0 && (h2[g2++] = { index: y2, count: u3.length }), y2 = w2 ? s(u3, u3.length - 1, -1, p2, y2, u3.length, t2) : s(u3, 0, 1, p2, y2, u3.length, t2);
      for (let o3 = 0; o3 < f2; ++o3) {
        const n4 = r2[o3];
        e3.holeIndices[o3] = y2, e3.pathLengths[o3 + 1] = n4.length, n4.length > 0 && (h2[g2++] = { index: y2, count: n4.length }), y2 = s(n4, 0, 1, p2, y2, n4.length, t2);
      }
      f2 = 0, e3.count > 0 && (l2[a2++] = e3);
    }
  }
  for (let i2 = 0; i2 < f2; ++i2) {
    const n3 = r2[i2];
    n3.length > 0 && (h2[g2++] = { index: y2, count: n3.length }), y2 = s(n3, 0, 1, p2, y2, n3.length, t2);
  }
  return l2.length = a2, h2.length = g2, { position: p2, polygons: l2, outlines: h2 };
}
function s(n2, t2, e2, o2, r2, l2, s2) {
  r2 *= 3;
  for (let i2 = 0; i2 < l2; ++i2) {
    const l3 = n2[t2];
    o2[r2++] = l3[0], o2[r2++] = l3[1], o2[r2++] = s2 ? l3[2] : 0, t2 += e2;
  }
  return r2 / 3;
}
function i(n2) {
  return !h$4(n2, false, false);
}
var c$3;
!function(n2) {
  n2[n2.NONE = 0] = "NONE", n2[n2.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
}(c$3 || (c$3 = {}));
const a = s$1.getLogger("esri.geometry.support.meshUtils.centerAt");
function c$2(e2, r2, i2) {
  var _a;
  if (!e2.vertexAttributes || !e2.vertexAttributes.position)
    return;
  const n2 = (_a = i2 == null ? void 0 : i2.origin) != null ? _a : e2.origin;
  if (r$3(e2.transform))
    (i2 == null ? void 0 : i2.geographic) != null && i2.geographic !== e2.transform.geographic && a.warn(`Specifying the 'geographic' parameter (${i2.geographic}) different from the Mesh transform setting (${e2.transform.geographic}) is not supported`), f$3(e2.transform, r2, n2);
  else {
    r$4(e2.spatialReference, i2) ? p$3(e2, r2, n2) : g$2(e2, r2, n2);
  }
}
function f$3(e2, t2, r2) {
  const i2 = t2.x - r2.x, o2 = t2.y - r2.y, n2 = t2.hasZ && r2.hasZ ? t2.z - r2.z : 0, s2 = e2.origin;
  e2.origin = [s2[0] + i2, s2[1] + o2, s2[2] + n2];
}
function p$3(e2, t2, r2) {
  const i2 = b$2(e2.vertexAttributes, r2, { geographic: true }), { position: o2, normal: a2, tangent: c2 } = x$4(i2, t2, { geographic: true });
  e2.vertexAttributes.position = o2, e2.vertexAttributes.normal = a2, e2.vertexAttributes.tangent = c2, e2.vertexAttributesChanged();
}
function g$2(e2, t2, r2) {
  const o2 = h$1, n2 = l$2;
  if (gn(t2, n2, e2.spatialReference)) {
    if (!gn(r2, o2, e2.spatialReference)) {
      const t3 = e2.origin;
      o2[0] = t3.x, o2[1] = t3.y, o2[2] = t3.z, a.error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${e2.spatialReference.wkid}).`);
    }
    m$3(e2.vertexAttributes.position, n2, o2), e2.vertexAttributesChanged();
  } else
    a.error(`Failed to project centerAt location (wkid:${t2.spatialReference.wkid}) to mesh spatial reference (wkid:${e2.spatialReference.wkid})`);
}
function m$3(e2, t2, r2) {
  if (e2)
    for (let i2 = 0; i2 < e2.length; i2 += 3)
      for (let o2 = 0; o2 < 3; o2++)
        e2[i2 + o2] += t2[o2] - r2[o2];
}
const l$2 = n$4(), h$1 = n$4();
async function u$1(e2, s2, o2) {
  const { loadGLTFMesh: n2 } = await y$7(import("./loadGLTFMesh.js"), o2), a2 = await m$2(s2, o2), i2 = n2(new w$4({ x: 0, y: 0, z: 0, spatialReference: e2.spatialReference }), a2.url, { resolveFile: f$2(a2), useTransform: true, signal: r$3(o2) ? o2.signal : null });
  i2.then(() => a2.dispose(), () => a2.dispose());
  const { vertexAttributes: l2, components: u2 } = await i2;
  e2.vertexAttributes = l2, e2.components = u2;
}
function f$2(e2) {
  const t2 = Ot(e2.url);
  return (s2) => {
    var _a;
    const r2 = _(s2, t2, t2), o2 = r2 ? r2.replace(/^ *\.\//, "") : null;
    return (_a = o2 ? e2.files.get(o2) : null) != null ? _a : s2;
  };
}
async function m$2(e2, t2) {
  return e2 instanceof Blob ? y$3.fromBlob(e2) : typeof e2 == "string" ? new y$3(e2) : Array.isArray(e2) ? p$2(e2, t2) : w$3(e2, t2);
}
async function p$2(t$1, r2) {
  const i2 = new Map();
  let l2 = null;
  const c2 = await L(t$1.map(async (e2) => ({ name: e2.name, source: await m$2(e2 instanceof Blob ? e2 : e2.source, r2) }))), u2 = [];
  for (const e2 of c2)
    e2 && (p$6(r2) ? e2.source.dispose() : u2.push(e2));
  f$6(r2);
  for (const { name: e2, source: o2 } of u2)
    (t(l2) || /\.(gltf|glb)/i.test(e2)) && (l2 = o2.url), i2.set(e2, o2.url), o2.files && o2.files.forEach((e3, t2) => i2.set(t2, e3));
  if (t(l2))
    throw new s$3("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new y$3(l2, () => u2.forEach(({ source: e2 }) => e2.dispose()), i2);
}
async function w$3(e2, t2) {
  const { default: s2 } = await y$7(import("./index.js").then(function(n2) {
    return n2.k$;
  }), t2), o2 = typeof e2.multipart[0] == "string" ? await Promise.all(e2.multipart.map(async (e3) => (await s2(e3, { responseType: "array-buffer" })).data)) : e2.multipart;
  return y$3.fromBlob(new Blob(o2));
}
class y$3 {
  constructor(e2, t2 = () => {
  }, s2 = new Map()) {
    this.url = e2, this.dispose = t2, this.files = s2;
  }
  static fromBlob(e2) {
    const t2 = URL.createObjectURL(e2);
    return new y$3(t2, () => URL.revokeObjectURL(t2));
  }
}
function x$2(e2, o2, i2) {
  if (e2.vertexAttributes && e2.vertexAttributes.position)
    if (r$3(e2.transform))
      (i2 == null ? void 0 : i2.geographic) != null && i2.geographic !== e2.transform.geographic && s$1.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${i2.geographic}) different from the Mesh transform setting (${e2.transform.geographic}) is not supported`), A$2(e2.transform, o2);
    else {
      r$4(e2.spatialReference, i2) ? v$2(e2, o2) : b$1(e2, o2);
    }
}
function A$2(t2, r2) {
  const e2 = t2.origin;
  t2.origin = u$7(n$4(), e2, r2);
}
function v$2(t2, o2) {
  const i2 = t2.spatialReference, n2 = t2.vertexAttributes.position, a2 = t2.vertexAttributes.normal, c2 = t2.vertexAttributes.tangent, x2 = new Float64Array(n2.length), A2 = r$3(a2) ? new Float32Array(a2.length) : null, v2 = r$3(c2) ? new Float32Array(c2.length) : null, b2 = t2.extent.center, F2 = d$2;
  Zn(i2, [b2.x, b2.y, b2.z], k$2, O$2(i2)), a$2(w$2, k$2), S$1(F2, o2, w$2), M$2(n2, i2, x2), r$3(a2) && r$3(A2) && j(a2, n2, x2, i2, A2), r$3(c2) && r$3(v2) && k$3(c2, n2, x2, i2, v2), y$2(x2, F2), O$3(x2, n2, i2), r$3(a2) && r$3(A2) && h$5(A2, n2, x2, i2, a2), r$3(c2) && r$3(v2) && L$1(v2, n2, x2, i2, c2), t2.vertexAttributesChanged();
}
function b$1(t2, r2) {
  y$2(t2.vertexAttributes.position, r2), t2.vertexAttributesChanged();
}
function y$2(t2, r2) {
  if (t2)
    for (let e2 = 0; e2 < t2.length; e2 += 3)
      for (let o2 = 0; o2 < 3; o2++)
        t2[e2 + o2] += r2[o2];
}
const d$2 = n$4(), k$2 = e$1(), w$2 = e$2();
function c$1() {
  const { faceDescriptions: t2, faceVertexOffsets: e2, uvScales: n2 } = d$1, r2 = 4 * t2.length, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i2 = new Uint32Array(2 * t2.length * 3);
  let c2 = 0, l2 = 0, f2 = 0, u2 = 0;
  for (let h2 = 0; h2 < t2.length; h2++) {
    const r3 = t2[h2], p2 = c2 / 3;
    for (const t3 of e2)
      i2[u2++] = p2 + t3;
    const m2 = r3.corners;
    for (let t3 = 0; t3 < 4; t3++) {
      const e3 = m2[t3];
      let i3 = 0;
      a2[f2++] = 0.25 * n2[t3][0] + r3.uvOrigin[0], a2[f2++] = r3.uvOrigin[1] - 0.25 * n2[t3][1];
      for (let t4 = 0; t4 < 3; t4++)
        r3.axis[t4] !== 0 ? (o2[c2++] = 0.5 * r3.axis[t4], s2[l2++] = r3.axis[t4]) : (o2[c2++] = 0.5 * e3[i3++], s2[l2++] = 0);
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i2 };
}
function l$1(e2, n2) {
  const r2 = e2.components[0], o2 = r2.faces, a2 = M$1[n2], i2 = 6 * a2, c2 = new Array(6), l2 = new Array(o2.length - 6);
  let f2 = 0, u2 = 0;
  for (let t2 = 0; t2 < o2.length; t2++)
    t2 >= i2 && t2 < i2 + 6 ? c2[f2++] = o2[t2] : l2[u2++] = o2[t2];
  if (r$3(e2.vertexAttributes.uv)) {
    const t2 = new Float32Array(e2.vertexAttributes.uv), n3 = 4 * a2 * 2, r3 = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let e3 = 0; e3 < r3.length; e3++)
      t2[n3 + e3] = r3[e3];
    e2.vertexAttributes.uv = t2;
  }
  return e2.components = [new g$3({ faces: c2, material: r2.material }), new g$3({ faces: l2 })], e2;
}
function f$1(t2 = 0) {
  const e2 = Math.round(8 * 2 ** t2), n2 = 2 * e2, r2 = (e2 - 1) * (n2 + 1) + 2 * n2, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i2 = new Uint32Array(3 * ((e2 - 1) * n2 * 2));
  let c2 = 0, l2 = 0, f2 = 0, u2 = 0;
  for (let h2 = 0; h2 <= e2; h2++) {
    const t3 = h2 / e2 * Math.PI + 0.5 * Math.PI, r3 = Math.cos(t3), p2 = Math.sin(t3);
    F[2] = p2;
    const m2 = h2 === 0 || h2 === e2, w2 = m2 ? n2 - 1 : n2;
    for (let v2 = 0; v2 <= w2; v2++) {
      const t4 = v2 / w2 * 2 * Math.PI;
      F[0] = -Math.sin(t4) * r3, F[1] = Math.cos(t4) * r3;
      for (let e3 = 0; e3 < 3; e3++)
        o2[c2] = 0.5 * F[e3], s2[c2] = F[e3], ++c2;
      a2[l2++] = (v2 + (m2 ? 0.5 : 0)) / n2, a2[l2++] = h2 / e2, h2 !== 0 && v2 !== n2 && (h2 !== e2 && (i2[f2++] = u2, i2[f2++] = u2 + 1, i2[f2++] = u2 - n2), h2 !== 1 && (i2[f2++] = u2, i2[f2++] = u2 - n2, i2[f2++] = u2 - n2 - 1)), u2++;
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i2 };
}
function u(t2 = 0) {
  const e2 = 5, n2 = Math.round(16 * 2 ** t2), r2 = (e2 - 1) * (n2 + 1) + 2 * n2, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i2 = new Uint32Array(3 * (4 * n2));
  let c2 = 0, l2 = 0, f2 = 0, u2 = 0, h2 = 0;
  for (let p2 = 0; p2 <= e2; p2++) {
    const t3 = p2 === 0 || p2 === e2, r3 = p2 <= 1 || p2 >= e2 - 1, m2 = p2 === 2 || p2 === 4, w2 = t3 ? n2 - 1 : n2;
    for (let v2 = 0; v2 <= w2; v2++) {
      const g2 = v2 / w2 * 2 * Math.PI, A2 = t3 ? 0 : 0.5;
      F[0] = A2 * Math.sin(g2), F[1] = A2 * -Math.cos(g2), F[2] = p2 <= 2 ? 0.5 : -0.5;
      for (let t4 = 0; t4 < 3; t4++)
        o2[c2++] = F[t4], s2[l2++] = r3 ? t4 === 2 ? p2 <= 1 ? 1 : -1 : 0 : t4 === 2 ? 0 : F[t4] / A2;
      a2[f2++] = (v2 + (t3 ? 0.5 : 0)) / n2, a2[f2++] = p2 <= 1 ? 1 * p2 / 3 : p2 <= 3 ? 1 * (p2 - 2) / 3 + 1 / 3 : 1 * (p2 - 4) / 3 + 2 / 3, m2 || p2 === 0 || v2 === n2 || (p2 !== e2 && (i2[u2++] = h2, i2[u2++] = h2 + 1, i2[u2++] = h2 - n2), p2 !== 1 && (i2[u2++] = h2, i2[u2++] = h2 - n2, i2[u2++] = h2 - n2 - 1)), h2++;
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i2 };
}
function h(t2, e2) {
  const n2 = typeof e2 == "number" ? e2 : e2 != null ? e2.width : 1, r2 = typeof e2 == "number" ? e2 : e2 != null ? e2.height : 1;
  switch (t2) {
    case "up":
    case "down":
      return { width: n2, depth: r2 };
    case "north":
    case "south":
      return { width: n2, height: r2 };
    case "east":
    case "west":
      return { depth: n2, height: r2 };
  }
}
function p$1(t2) {
  const e2 = g$1.facingAxisOrderSwap[t2], n2 = g$1.position, r2 = g$1.normal, o2 = new Float64Array(n2.length), s2 = new Float32Array(r2.length);
  let a2 = 0;
  for (let i2 = 0; i2 < 4; i2++) {
    const t3 = a2;
    for (let i3 = 0; i3 < 3; i3++) {
      const c2 = e2[i3], l2 = Math.abs(c2) - 1, f2 = c2 >= 0 ? 1 : -1;
      o2[a2] = n2[t3 + l2] * f2, s2[a2] = r2[t3 + l2] * f2, a2++;
    }
  }
  return { position: o2, normal: s2, uv: new Float32Array(g$1.uv), faces: new Uint32Array(g$1.faces), isPlane: true };
}
const m$1 = 1, w$1 = 2, v$1 = 3, g$1 = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [v$1, m$1, w$1], west: [-v$1, -m$1, w$1], north: [-m$1, v$1, w$1], south: [m$1, -v$1, w$1], up: [m$1, w$1, v$1], down: [m$1, -w$1, -v$1] } };
function A$1(t2, e2, n2) {
  t2.isPlane || y$1(t2), x$1(t2, n2 == null ? void 0 : n2.size);
  const { vertexAttributes: r2, transform: o2 } = _$1(t2, e2, n2);
  return { vertexAttributes: new p$4(__spreadProps(__spreadValues({}, r2), { uv: t2.uv })), transform: o2, components: [new g$3({ faces: t2.faces, material: n2 && n2.material || null })], spatialReference: e2.spatialReference };
}
function y$1(t2) {
  for (let e2 = 0; e2 < t2.position.length; e2 += 3)
    t2.position[e2 + 2] += 0.5;
}
function x$1(t2, e2) {
  if (e2 == null)
    return;
  const o2 = typeof e2 == "number" ? [e2, e2, e2] : [e2.width != null ? e2.width : 1, e2.depth != null ? e2.depth : 1, e2.height != null ? e2.height : 1];
  O$1[0] = o2[0], O$1[4] = o2[1], O$1[8] = o2[2];
  for (let r2 = 0; r2 < t2.position.length; r2 += 3) {
    for (let e3 = 0; e3 < 3; e3++)
      F[e3] = t2.position[r2 + e3];
    S$1(F, F, O$1);
    for (let e3 = 0; e3 < 3; e3++)
      t2.position[r2 + e3] = F[e3];
  }
  if (o2[0] !== o2[1] || o2[1] !== o2[2]) {
    O$1[0] = 1 / o2[0], O$1[4] = 1 / o2[1], O$1[8] = 1 / o2[2];
    for (let e3 = 0; e3 < t2.normal.length; e3 += 3) {
      for (let n2 = 0; n2 < 3; n2++)
        F[n2] = t2.normal[e3 + n2];
      S$1(F, F, O$1), z$1(F, F);
      for (let n2 = 0; n2 < 3; n2++)
        t2.normal[e3 + n2] = F[n2];
    }
  }
}
const d$1 = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, M$1 = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, F = n$4(), O$1 = e$2();
const $ = s$1.getLogger("esri.geometry.support.meshUtils.rotate");
function z(t2, r2, o2) {
  var _a, _b;
  if (!t2.vertexAttributes || !t2.vertexAttributes.position || r2[3] === 0)
    return;
  const i2 = t2.spatialReference;
  if (r$3(t2.transform)) {
    (o2 == null ? void 0 : o2.geographic) != null && o2.geographic !== t2.transform.geographic && $.warn(`Specifying the 'geographic' parameter (${o2.geographic}) different from the Mesh transform setting (${t2.transform.geographic}) is not supported`);
    const e2 = (_a = o2 == null ? void 0 : o2.origin) != null ? _a : t2.transform.getOriginPoint(i2);
    C(t2.transform, r2, e2);
  } else {
    const e2 = (_b = o2 == null ? void 0 : o2.origin) != null ? _b : t2.origin;
    r$4(t2.spatialReference, o2) ? I$1(t2, r2, e2) : U(t2, r2, e2);
  }
}
function C(t2, e2, r2) {
  const o2 = o$2(E$1, r2.x, r2.y, r2.z), i2 = e$3(E$1, o2, t2.origin);
  t2.applyLocalInverse(i2, M), t2.rotation = v$4(t2.rotation, e2, a$3()), t2.applyLocalInverse(i2, i2), e$3(i2, i2, M), t2.translation = u$7(n$4(), t2.translation, i2);
}
function I$1(t2, r2, i2) {
  const n2 = t2.spatialReference, s2 = O$2(n2), a2 = Z$1;
  gn(i2, a2, s2) || gn(t2.origin, a2, s2);
  const c2 = t2.vertexAttributes.position, f2 = t2.vertexAttributes.normal, m2 = t2.vertexAttributes.tangent, g2 = new Float64Array(c2.length), l2 = r$3(f2) ? new Float32Array(f2.length) : null, v2 = r$3(m2) ? new Float32Array(m2.length) : null;
  Zn(s2, a2, P, s2), a$2(S, P);
  const x2 = O;
  S$1(g$5(O), g$5(r2), S), x2[3] = r2[3], M$2(c2, n2, g2), r$3(f2) && r$3(l2) && j(f2, c2, g2, n2, l2), r$3(m2) && r$3(v2) && k$3(m2, c2, g2, n2, v2), D$2(g2, x2, 3, a2), O$3(g2, c2, n2), r$3(f2) && r$3(l2) && (D$2(l2, x2, 3), h$5(l2, c2, g2, n2, f2)), r$3(m2) && r$3(v2) && (D$2(v2, x2, 4), L$1(v2, c2, g2, n2, m2)), t2.vertexAttributesChanged();
}
function U(t2, e2, r2) {
  const o2 = Z$1;
  if (!gn(r2, o2, t2.spatialReference)) {
    const e3 = t2.origin;
    o2[0] = e3.x, o2[1] = e3.y, o2[2] = e3.z, $.error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${t2.spatialReference.wkid}).`);
  }
  D$2(t2.vertexAttributes.position, e2, 3, o2), D$2(t2.vertexAttributes.normal, e2, 3), D$2(t2.vertexAttributes.tangent, e2, 4), t2.vertexAttributesChanged();
}
function D$2(t$1, e2, o2, i2 = f$7) {
  if (!t(t$1)) {
    g$6(P, x$5(e2), g$5(e2));
    for (let e3 = 0; e3 < t$1.length; e3 += o2) {
      for (let r2 = 0; r2 < 3; r2++)
        E$1[r2] = t$1[e3 + r2] - i2[r2];
      O$4(E$1, E$1, P);
      for (let r2 = 0; r2 < 3; r2++)
        t$1[e3 + r2] = E$1[r2] + i2[r2];
    }
  }
}
const E$1 = n$4(), M = n$4(), O = a$3(), P = e$1(), S = e$2(), Z$1 = n$4();
const v = s$1.getLogger("esri.geometry.support.meshUtils.scale");
function d(e2, r2, o2) {
  var _a;
  if (!e2.vertexAttributes || !e2.vertexAttributes.position)
    return;
  const i2 = e2.spatialReference;
  if (r$3(e2.transform)) {
    (o2 == null ? void 0 : o2.geographic) != null && o2.geographic !== e2.transform.geographic && v.warn(`Specifying the 'geographic' parameter (${o2.geographic}) different from the Mesh transform setting (${e2.transform.geographic}) is not supported`);
    const t2 = (_a = o2 == null ? void 0 : o2.origin) != null ? _a : e2.transform.getOriginPoint(i2);
    x(e2.transform, r2, t2);
  } else {
    const t2 = r$4(e2.spatialReference, o2), i3 = o2 && o2.origin || e2.origin;
    t2 ? A(e2, r2, i3) : b(e2, r2, i3);
  }
}
function x(e2, t2, a2) {
  const c2 = o$2(w, a2.x, a2.y, a2.z), p2 = e$3(w, c2, e2.origin);
  e2.applyLocalInverse(p2, k$1);
  const f2 = g$7(n$4(), e2.scale, t2);
  e2.scale = f2, e2.applyLocalInverse(p2, p2), e$3(p2, p2, k$1), e2.translation = u$7(n$4(), e2.translation, p2);
}
function A(e2, r2, o2) {
  const i2 = e2.spatialReference, n2 = O$2(i2), s2 = R;
  gn(o2, s2, n2) || gn(e2.origin, s2, n2);
  const a2 = e2.vertexAttributes.position, f2 = e2.vertexAttributes.normal, v2 = e2.vertexAttributes.tangent, d2 = new Float64Array(a2.length), x2 = r$3(f2) ? new Float32Array(f2.length) : null, A2 = r$3(v2) ? new Float32Array(v2.length) : null;
  M$2(a2, i2, d2), r$3(f2) && r$3(x2) && j(f2, a2, d2, i2, x2), r$3(v2) && r$3(A2) && k$3(v2, a2, d2, i2, A2), y(d2, r2, s2), O$3(d2, a2, i2), r$3(f2) && r$3(x2) && h$5(x2, a2, d2, i2, f2), r$3(v2) && r$3(A2) && L$1(A2, a2, d2, i2, v2), e2.vertexAttributesChanged();
}
function b(e2, t2, r2) {
  const o2 = R;
  if (!gn(r2, o2, e2.spatialReference)) {
    const t3 = e2.origin;
    o2[0] = t3.x, o2[1] = t3.y, o2[2] = t3.z, v.error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${e2.spatialReference.wkid}).`);
  }
  y(e2.vertexAttributes.position, t2, o2), e2.vertexAttributesChanged();
}
function y(e2, t2, r2 = f$7) {
  if (e2)
    for (let o2 = 0; o2 < e2.length; o2 += 3) {
      for (let t3 = 0; t3 < 3; t3++)
        w[t3] = e2[o2 + t3] - r2[t3];
      g$7(w, w, t2);
      for (let t3 = 0; t3 < 3; t3++)
        e2[o2 + t3] = w[t3] + r2[t3];
    }
}
const w = n$4(), k$1 = n$4(), R = n$4();
var G;
const I = "esri.geometry.Mesh";
let B = G = class extends a$4(m$8.LoadableMixin(m$9(p$7))) {
  constructor(e2) {
    super(e2), this.components = null, this.transform = null, this.external = null, this.hasZ = true, this.hasM = false, this.vertexAttributes = new p$4(), this.type = "mesh";
  }
  initialize() {
    (t(this.external) || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.handles.add(l$7(() => {
        var _a;
        return { vertexAttributes: this.vertexAttributes, components: (_a = this.components) == null ? void 0 : _a.map((e2) => e2.clone()) };
      }, () => this._set("external", null), { once: true, sync: true }));
    });
  }
  get hasExtent() {
    return !this.loaded && r$3(this.external) && r$3(this.external.extent) || this.loaded && this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0);
  }
  get _boundingInfo() {
    const e2 = this.vertexAttributes.position, t2 = this.spatialReference;
    if (e2.length === 0 || this.components && this.components.length === 0)
      return { extent: new w$5({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t2 }), center: new w$4({ x: 0, y: 0, z: 0, spatialReference: t2 }) };
    const r2 = r$3(this.transform) ? this.transform.project(e2, t2) : e2;
    let o2 = 1 / 0, n2 = 1 / 0, s2 = 1 / 0, a2 = -1 / 0, l2 = -1 / 0, c2 = -1 / 0, p2 = 0, m2 = 0, h2 = 0;
    const f2 = r2.length, d2 = 1 / (f2 / 3);
    let x2 = 0;
    for (; x2 < f2; ) {
      const e3 = r2[x2++], t3 = r2[x2++], i2 = r2[x2++];
      o2 = Math.min(o2, e3), n2 = Math.min(n2, t3), s2 = Math.min(s2, i2), a2 = Math.max(a2, e3), l2 = Math.max(l2, t3), c2 = Math.max(c2, i2), p2 += d2 * e3, m2 += d2 * t3, h2 += d2 * i2;
    }
    return { extent: new w$5({ xmin: o2, ymin: n2, zmin: s2, xmax: a2, ymax: l2, zmax: c2, spatialReference: t2 }), center: new w$4({ x: p2, y: m2, z: h2, spatialReference: t2 }) };
  }
  get anchor() {
    if (r$3(this.transform))
      return this.transform.getOriginPoint(this.spatialReference);
    const e2 = this._boundingInfo;
    return new w$4({ x: e2.center.x, y: e2.center.y, z: e2.extent.zmin, spatialReference: this.spatialReference });
  }
  get origin() {
    return r$3(this.transform) ? this.transform.getOriginPoint(this.spatialReference) : this._boundingInfo.center;
  }
  get extent() {
    return !this.loaded && r$3(this.external) && r$3(this.external.extent) ? this.external.extent.clone() : this._boundingInfo.extent;
  }
  addComponent(e2) {
    this.loaded ? (this.components || (this.components = []), this.components.push(g$3.from(e2)), this.notifyChange("components")) : s$1.getLogger(this.declaredClass).error("addComponent()", "Mesh must be loaded before applying operations");
  }
  removeComponent(e2) {
    if (this.loaded) {
      if (this.components) {
        const t2 = this.components.indexOf(e2);
        if (t2 !== -1)
          return this.components.splice(t2, 1), void this.notifyChange("components");
      }
      s$1.getLogger(this.declaredClass).error("removeComponent()", "Provided component is not part of the list of components");
    } else
      s$1.getLogger(this.declaredClass).error("removeComponent()", "Mesh must be loaded before applying operations");
  }
  rotate(e2, t2, r2, o2) {
    return k$4(k.x, e2, D$1), k$4(k.y, t2, W), k$4(k.z, r2, Z), v$4(D$1, W, D$1), v$4(D$1, Z, D$1), z(this, D$1, o2), this;
  }
  offset(e2, t2, r2, o2) {
    return this.loaded ? (H[0] = e2, H[1] = t2, H[2] = r2, x$2(this, H, o2), this) : (s$1.getLogger(this.declaredClass).error("offset()", "Mesh must be loaded before applying operations"), this);
  }
  scale(e2, t2) {
    return this.loaded ? (d(this, e2, t2), this) : (s$1.getLogger(this.declaredClass).error("scale()", "Mesh must be loaded before applying operations"), this);
  }
  centerAt(e2, t2) {
    return this.loaded ? (c$2(this, e2, t2), this) : (s$1.getLogger(this.declaredClass).error("centerAt()", "Mesh must be loaded before applying operations"), this);
  }
  load(e2) {
    return r$3(this.external) && this.addResolvingPromise(u$1(this, this.external.source, e2)), Promise.resolve(this);
  }
  updateExternalSource(e2) {
    this._set("external", e2);
  }
  clone() {
    let e2 = null;
    if (this.components) {
      const t3 = new Map(), r2 = new Map();
      e2 = this.components.map((e3) => e3.cloneWithDeduplication(t3, r2));
    }
    const t2 = { components: e2, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes.clone(), transform: r$3(this.transform) ? this.transform.clone() : null, external: r$3(this.external) ? { source: this.external.source, extent: r$3(this.external.extent) ? this.external.extent.clone() : null } : null };
    return new G(t2);
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e2) {
    const t2 = import("./gltfexport.js"), r2 = this.load(), o2 = await Promise.all([t2, r2]), { toBinaryGLTF: n2 } = o2[0];
    return n2(this, e2);
  }
  static createBox(e2, t2) {
    if (!(e2 instanceof w$4))
      return s$1.getLogger(I).error(".createBox()", "expected location to be a Point instance"), null;
    const r2 = new G(A$1(c$1(), e2, t2));
    return t2 && t2.imageFace && t2.imageFace !== "all" ? l$1(r2, t2.imageFace) : r2;
  }
  static createSphere(e2, t2) {
    return e2 instanceof w$4 ? new G(A$1(f$1(t2 && t2.densificationFactor || 0), e2, t2)) : (s$1.getLogger(I).error(".createSphere()", "expected location to be a Point instance"), null);
  }
  static createCylinder(e2, t2) {
    return e2 instanceof w$4 ? new G(A$1(u(t2 && t2.densificationFactor || 0), e2, t2)) : (s$1.getLogger(I).error(".createCylinder()", "expected location to be a Point instance"), null);
  }
  static createPlane(e2, t2) {
    var _a;
    if (!(e2 instanceof w$4))
      return s$1.getLogger(I).error(".createPlane()", "expected location to be a Point instance"), null;
    const r2 = (_a = t2 == null ? void 0 : t2.facing) != null ? _a : "up", o2 = h(r2, t2 == null ? void 0 : t2.size);
    return new G(A$1(p$1(r2), e2, __spreadProps(__spreadValues({}, t2), { size: o2 })));
  }
  static createFromPolygon(e2, t2) {
    var _a;
    if (!(e2 instanceof v$5))
      return s$1.getLogger(I).error(".createFromPolygon()", "expected polygon to be a Polygon instance"), null;
    const r2 = o(e2);
    return new G({ vertexAttributes: new p$4({ position: r2.position }), components: [new g$3({ faces: r2.faces, shading: "flat", material: (_a = t2 == null ? void 0 : t2.material) != null ? _a : null })], spatialReference: e2.spatialReference });
  }
  static async createFromGLTF(e2, r2, o2) {
    if (!(e2 instanceof w$4))
      throw s$1.getLogger(I).error(".createfromGLTF()", "expected location to be a Point instance"), new s$3("invalid-input", "Expected location to be a Point instance");
    const { loadGLTFMesh: s2 } = await y$7(import("./loadGLTFMesh.js"), o2);
    return new G(await s2(e2, r2, o2));
  }
  static createWithExternalSource(e2, t2, r2) {
    var _a, _b, _c, _d;
    const o2 = (_a = r2 == null ? void 0 : r2.extent) != null ? _a : null, n2 = (_c = (_b = r2 == null ? void 0 : r2.transform) == null ? void 0 : _b.clone()) != null ? _c : new L$2();
    n2.origin = [e2.x, e2.y, (_d = e2.z) != null ? _d : 0];
    const s2 = e2.spatialReference;
    return new G({ external: { source: t2, extent: o2 }, transform: n2, spatialReference: s2 });
  }
  static createIncomplete(e2, r2) {
    var _a, _b, _c;
    const o2 = (_b = (_a = r2 == null ? void 0 : r2.transform) == null ? void 0 : _a.clone()) != null ? _b : new L$2();
    o2.origin = [e2.x, e2.y, (_c = e2.z) != null ? _c : 0];
    const n2 = e2.spatialReference, s2 = new G({ transform: o2, spatialReference: n2 });
    return s2.addResolvingPromise(Promise.reject(new s$3("mesh-incomplete", "Mesh resources are not complete"))), s2;
  }
};
e([y$5({ type: [g$3], json: { write: true } })], B.prototype, "components", void 0), e([y$5({ type: L$2, json: { write: true } })], B.prototype, "transform", void 0), e([y$5({ constructOnly: true })], B.prototype, "external", void 0), e([y$5({ readOnly: true })], B.prototype, "hasExtent", null), e([y$5({ readOnly: true })], B.prototype, "_boundingInfo", null), e([y$5({ readOnly: true })], B.prototype, "anchor", null), e([y$5({ readOnly: true })], B.prototype, "origin", null), e([y$5({ readOnly: true, json: { read: false } })], B.prototype, "extent", null), e([y$5({ readOnly: true, json: { read: false, write: true, default: true } })], B.prototype, "hasZ", void 0), e([y$5({ readOnly: true, json: { read: false, write: true, default: false } })], B.prototype, "hasM", void 0), e([y$5({ type: p$4, nonNullable: true, json: { write: true } })], B.prototype, "vertexAttributes", void 0), B = G = e([n$2(I)], B);
const k = { x: r$5(1, 0, 0), y: r$5(0, 1, 0), z: r$5(0, 0, 1) }, D$1 = a$3(), W = a$3(), Z = a$3(), H = n$4(), N = B;
function l(o2, s2, n2) {
  const a2 = n2.features;
  n2.features = [], delete n2.geometryType;
  const i2 = x$6.fromJSON(n2);
  if (i2.geometryType = "mesh", !n2.assetMaps)
    return i2;
  const l2 = E(s2, n2.assetMaps), m2 = i2.spatialReference, p2 = n2.globalIdFieldName, g2 = t(o2.outFields) || !o2.outFields.length ? () => ({}) : c(o2.outFields.includes("*") ? null : new Set(o2.outFields));
  for (const e2 of a2) {
    const o3 = f(e2, p2, m2, s2, l2);
    r$3(o3) && i2.features.push(new g$8({ geometry: o3, attributes: g2(e2) }));
  }
  return i2;
}
function c(t2) {
  return ({ attributes: e2 }) => {
    if (!e2)
      return {};
    if (!t2)
      return e2;
    for (const r2 in e2)
      t2.has(r2) || delete e2[r2];
    return e2;
  };
}
function f(t2, e2, r2, n2, a2) {
  const i2 = t2.attributes[e2], u2 = a2.get(i2);
  if (u2 == null || u2.status === g.FAILED || u2.url == null)
    return null;
  const l2 = m(t2, r2, n2), c2 = w$5.fromJSON(t2.geometry);
  c2.spatialReference = r2;
  const f2 = p(t2.attributes, n2, u2.geographic);
  return u2.status === g.PENDING ? N.createIncomplete(l2, { extent: c2, transform: f2 }) : N.createWithExternalSource(l2, [{ name: u2.name, source: u2.url }], { extent: c2, transform: f2 });
}
function m({ attributes: t2 }, e2, { transformFieldRoles: r2 }) {
  return new w$4({ x: t2[r2.originX], y: t2[r2.originY], z: t2[r2.originZ], spatialReference: e2 });
}
function p(t2, { transformFieldRoles: e2 }, r2) {
  return new L$2({ translation: [t2[e2.translationX], t2[e2.translationY], t2[e2.translationZ]], rotation: k$4([t2[e2.rotationX], t2[e2.rotationY], t2[e2.rotationZ]], t2[e2.rotationDeg]), scale: [t2[e2.scaleX], t2[e2.scaleY], t2[e2.scaleZ]], geographic: r2 });
}
var g;
function E(t2, e2) {
  const r2 = new Map();
  for (const o2 of e2) {
    const t3 = o2.parentGlobalId;
    if (t3 == null)
      continue;
    const e3 = o2.assetName, s2 = o2.assetURL, n2 = o2.conversionStatus;
    let a2 = r2.get(t3);
    if (a2 != null)
      throw new Error("multiple asset parts not expected.");
    switch (a2 = { name: e3, status: g.FAILED, url: s2, geographic: D(o2.flags).projectVertices }, r2.set(t3, a2), n2) {
      case "COMPLETED":
      case "SUBMITTED":
        a2.status = g.COMPLETED;
        break;
      case "INPROGRESS":
        a2.status = g.PENDING;
        break;
      default:
        a2.status = g.FAILED;
    }
  }
  return r2;
}
function D(t2) {
  return { projectVertices: t2.includes("PROJECT_VERTICES") };
}
!function(t2) {
  t2[t2.FAILED = 0] = "FAILED", t2[t2.PENDING = 1] = "PENDING", t2[t2.COMPLETED = 2] = "COMPLETED";
}(g || (g = {}));
var meshFeatureSet = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  meshFeatureSetFromJSON: l
});
export { meshFeatureSet as a, c$5 as c, g$3 as g, m$6 as m, p$4 as p };
