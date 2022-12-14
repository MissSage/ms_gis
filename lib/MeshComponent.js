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
import { c as e, f as y$1, hz as f$1, hA as r, hB as o, h as n$2, dh as l$1, fe as m$3, hC as v, aU as l$2, r as r$2, dH as s, dg as s$1, o as y$2 } from "./index.js";
import { r as r$1 } from "./imageUtils.js";
var p$1;
const d = new WeakMap();
let h$1 = 0, u$4 = p$1 = class extends l$1 {
  constructor(t) {
    super(t), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(t) {
    this._set("url", t), t && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(t) {
    this._set("data", t), t && this._set("url", null);
  }
  writeData(t, e2, a2, r2) {
    if (t instanceof HTMLImageElement) {
      const s2 = { type: "image-element", src: m$3(t.src, r2), crossOrigin: t.crossOrigin };
      e2[a2] = s2;
    } else if (t instanceof HTMLCanvasElement) {
      const r3 = t.getContext("2d").getImageData(0, 0, t.width, t.height), s2 = { type: "canvas-element", imageData: this._encodeImageData(r3) };
      e2[a2] = s2;
    } else if (t instanceof HTMLVideoElement) {
      const s2 = { type: "video-element", src: m$3(t.src, r2), autoplay: t.autoplay, loop: t.loop, muted: t.muted, crossOrigin: t.crossOrigin, preload: t.preload };
      e2[a2] = s2;
    } else {
      const r3 = { type: "image-data", imageData: this._encodeImageData(t) };
      e2[a2] = r3;
    }
  }
  readData(t) {
    switch (t.type) {
      case "image-element": {
        const e2 = new Image();
        return e2.src = t.src, e2.crossOrigin = t.crossOrigin, e2;
      }
      case "canvas-element": {
        const e2 = this._decodeImageData(t.imageData), a2 = document.createElement("canvas");
        return a2.width = e2.width, a2.height = e2.height, a2.getContext("2d").putImageData(e2, 0, 0), a2;
      }
      case "image-data":
        return this._decodeImageData(t.imageData);
      case "video-element": {
        const e2 = document.createElement("video");
        return e2.src = t.src, e2.crossOrigin = t.crossOrigin, e2.autoplay = t.autoplay, e2.loop = t.loop, e2.muted = t.muted, e2.preload = t.preload, e2;
      }
      default:
        return;
    }
  }
  get transparent() {
    const t = this.data, e2 = this.url;
    if (t instanceof HTMLCanvasElement)
      return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0, 0, t.width, t.height));
    if (t instanceof ImageData)
      return this._imageDataContainsTransparent(t);
    if (e2) {
      const t2 = e2.substr(e2.length - 4, 4).toLowerCase(), a2 = e2.substr(0, 15).toLocaleLowerCase();
      if (t2 === ".png" || a2 === "data:image/png;")
        return true;
    }
    return false;
  }
  set transparent(t) {
    this._overrideIfSome("transparent", t);
  }
  get contentHash() {
    const t = typeof this.wrap == "string" ? this.wrap : typeof this.wrap == "object" ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", e2 = (e3 = "") => `d:${e3},t:${this.transparent},w:${t}`;
    return this.url != null ? e2(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? e2(this.data.src) : (d.has(this.data) || d.set(this.data, ++h$1), e2(d.get(this.data))) : e2();
  }
  clone() {
    const t = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new p$1(t);
  }
  cloneWithDeduplication(t) {
    const e2 = t.get(this);
    if (e2)
      return e2;
    const a2 = this.clone();
    return t.set(this, a2), a2;
  }
  _cloneWrap() {
    return typeof this.wrap == "string" ? this.wrap : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
  }
  _encodeImageData(t) {
    let e2 = "";
    for (let a2 = 0; a2 < t.data.length; a2++)
      e2 += String.fromCharCode(t.data[a2]);
    return { data: btoa(e2), width: t.width, height: t.height };
  }
  _decodeImageData(t) {
    const a2 = atob(t.data), r2 = new Uint8ClampedArray(a2.length);
    for (let e2 = 0; e2 < a2.length; e2++)
      r2[e2] = a2.charCodeAt(e2);
    return r$1(r2, t.width, t.height);
  }
  _imageDataContainsTransparent(t) {
    for (let e2 = 3; e2 < t.data.length; e2 += 4)
      if (t.data[e2] !== 255)
        return true;
    return false;
  }
  static from(t) {
    return typeof t == "string" ? new p$1({ url: t }) : t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageData || t instanceof HTMLVideoElement ? new p$1({ data: t }) : v(p$1, t);
  }
};
e([y$1({ type: String, json: { write: f$1 } })], u$4.prototype, "url", null), e([y$1({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), y$1()], u$4.prototype, "data", null), e([r("data")], u$4.prototype, "writeData", null), e([o("data")], u$4.prototype, "readData", null), e([y$1({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], u$4.prototype, "transparent", null), e([y$1({ json: { write: true } })], u$4.prototype, "wrap", void 0), e([y$1({ readOnly: true })], u$4.prototype, "contentHash", null), u$4 = p$1 = e([n$2("esri.geometry.support.MeshTexture")], u$4);
const m$2 = u$4;
var n$1;
let u$3 = n$1 = class extends l$1 {
  constructor(o2) {
    super(o2), this.color = null, this.colorTexture = null, this.normalTexture = null, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = true;
  }
  clone() {
    return this.cloneWithDeduplication(null, new Map());
  }
  cloneWithDeduplication(o2, r2) {
    const e2 = r$2(o2) ? o2.get(this) : null;
    if (e2)
      return e2;
    const l2 = new n$1(this.clonePropertiesWithDeduplication(r2));
    return r$2(o2) && o2.set(this, l2), l2;
  }
  clonePropertiesWithDeduplication(o2) {
    return { color: r$2(this.color) ? this.color.clone() : null, colorTexture: r$2(this.colorTexture) ? this.colorTexture.cloneWithDeduplication(o2) : null, normalTexture: r$2(this.normalTexture) ? this.normalTexture.cloneWithDeduplication(o2) : null, alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided, colorTextureTransform: r$2(this.colorTextureTransform) ? this.colorTextureTransform : null, normalTextureTransform: r$2(this.normalTextureTransform) ? this.normalTextureTransform : null };
  }
};
e([y$1({ type: l$2, json: { write: true } })], u$3.prototype, "color", void 0), e([y$1({ type: m$2, json: { write: true } })], u$3.prototype, "colorTexture", void 0), e([y$1({ type: m$2, json: { write: true } })], u$3.prototype, "normalTexture", void 0), e([y$1({ nonNullable: true, json: { write: true } })], u$3.prototype, "alphaMode", void 0), e([y$1({ nonNullable: true, json: { write: true } })], u$3.prototype, "alphaCutoff", void 0), e([y$1({ nonNullable: true, json: { write: true } })], u$3.prototype, "doubleSided", void 0), e([y$1()], u$3.prototype, "colorTextureTransform", void 0), e([y$1()], u$3.prototype, "normalTextureTransform", void 0), u$3 = n$1 = e([n$2("esri.geometry.support.MeshMaterial")], u$3);
const a = u$3;
var n;
let u$2 = n = class extends a {
  constructor(e2) {
    super(e2), this.emissiveColor = null, this.emissiveTexture = null, this.occlusionTexture = null, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null;
  }
  clone() {
    return this.cloneWithDeduplication(null, new Map());
  }
  cloneWithDeduplication(e2, s2) {
    const o2 = r$2(e2) ? e2.get(this) : null;
    if (o2)
      return o2;
    const r2 = new n(this.clonePropertiesWithDeduplication(s2));
    return r$2(e2) && e2.set(this, r2), r2;
  }
  clonePropertiesWithDeduplication(e2) {
    return __spreadProps(__spreadValues({}, super.clonePropertiesWithDeduplication(e2)), { emissiveColor: r$2(this.emissiveColor) ? this.emissiveColor.clone() : null, emissiveTexture: r$2(this.emissiveTexture) ? this.emissiveTexture.cloneWithDeduplication(e2) : null, occlusionTexture: r$2(this.occlusionTexture) ? this.occlusionTexture.cloneWithDeduplication(e2) : null, metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: r$2(this.metallicRoughnessTexture) ? this.metallicRoughnessTexture.cloneWithDeduplication(e2) : null, occlusionTextureTransform: r$2(this.occlusionTextureTransform) ? this.occlusionTextureTransform : null, emissiveTextureTransform: r$2(this.emissiveTextureTransform) ? this.emissiveTextureTransform : null, metallicRoughnessTextureTransform: r$2(this.metallicRoughnessTextureTransform) ? this.metallicRoughnessTextureTransform : null });
  }
};
e([y$1({ type: l$2, json: { write: true } })], u$2.prototype, "emissiveColor", void 0), e([y$1({ type: m$2, json: { write: true } })], u$2.prototype, "emissiveTexture", void 0), e([y$1({ type: m$2, json: { write: true } })], u$2.prototype, "occlusionTexture", void 0), e([y$1({ type: Number, nonNullable: true, json: { write: true }, range: { min: 0, max: 1 } })], u$2.prototype, "metallic", void 0), e([y$1({ type: Number, nonNullable: true, json: { write: true }, range: { min: 0, max: 1 } })], u$2.prototype, "roughness", void 0), e([y$1({ type: m$2, json: { write: true } })], u$2.prototype, "metallicRoughnessTexture", void 0), e([y$1()], u$2.prototype, "occlusionTextureTransform", void 0), e([y$1()], u$2.prototype, "emissiveTextureTransform", void 0), e([y$1()], u$2.prototype, "metallicRoughnessTextureTransform", void 0), u$2 = n = e([n$2("esri.geometry.support.MeshMaterialMetallicRoughness")], u$2);
const c$1 = u$2;
var i;
const l = "esri.geometry.support.MeshVertexAttributes", c = s.getLogger(l);
let p = i = class extends l$1 {
  constructor(r2) {
    super(r2), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(r2) {
    return g$1(r2, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, c);
  }
  castPosition(r2) {
    r2 && r2 instanceof Float32Array && c.warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");
    return g$1(r2, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, c);
  }
  castUv(r2) {
    return g$1(r2, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, c);
  }
  castNormal(r2) {
    return g$1(r2, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, c);
  }
  castTangent(r2) {
    return g$1(r2, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, c);
  }
  clone() {
    const r2 = { position: y$2(this.position), uv: y$2(this.uv), normal: y$2(this.normal), tangent: y$2(this.tangent), color: y$2(this.color) };
    return new i(r2);
  }
  clonePositional() {
    const r2 = { position: y$2(this.position), normal: y$2(this.normal), tangent: y$2(this.tangent), uv: this.uv, color: this.color };
    return new i(r2);
  }
};
function u$1(r2, o2, t, n2) {
  const { loggerTag: e2, stride: a2 } = o2;
  return r2.length % a2 != 0 ? (n2.error(e2, `Invalid array length, expected a multiple of ${a2}`), new t([])) : r2;
}
function g$1(r2, o2, t, n2, e2) {
  if (!r2)
    return r2;
  if (r2 instanceof o2)
    return u$1(r2, n2, o2, e2);
  for (const a2 of t)
    if (r2 instanceof a2)
      return u$1(new o2(r2), n2, o2, e2);
  if (Array.isArray(r2))
    return u$1(new o2(r2), n2, o2, e2);
  {
    const n3 = t.map((r3) => `'${r3.name}'`);
    return e2.error(`Failed to set property, expected one of ${n3}, but got ${r2.constructor.name}`), new o2([]);
  }
}
function m$1(r2, o2, t) {
  o2[t] = y(r2);
}
function y(r2) {
  const o2 = new Array(r2.length);
  for (let t = 0; t < r2.length; t++)
    o2[t] = r2[t];
  return o2;
}
e([y$1({ json: { write: m$1 } })], p.prototype, "color", void 0), e([s$1("color")], p.prototype, "castColor", null), e([y$1({ nonNullable: true, json: { write: m$1 } })], p.prototype, "position", void 0), e([s$1("position")], p.prototype, "castPosition", null), e([y$1({ json: { write: m$1 } })], p.prototype, "uv", void 0), e([s$1("uv")], p.prototype, "castUv", null), e([y$1({ json: { write: m$1 } })], p.prototype, "normal", void 0), e([s$1("normal")], p.prototype, "castNormal", null), e([y$1({ json: { write: m$1 } })], p.prototype, "tangent", void 0), e([s$1("tangent")], p.prototype, "castTangent", null), p = i = e([n$2(l)], p);
var u;
const m = "esri.geometry.support.MeshComponent", h = s.getLogger(m);
let f = u = class extends l$1 {
  constructor(r2) {
    super(r2), this.faces = null, this.material = null, this.shading = "source", this.trustSourceNormals = false;
  }
  static from(r2) {
    return v(u, r2);
  }
  castFaces(r2) {
    return g$1(r2, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, h);
  }
  castMaterial(r2) {
    return v(r2 && typeof r2 == "object" && ("metallic" in r2 || "roughness" in r2 || "metallicRoughnessTexture" in r2) ? c$1 : a, r2);
  }
  clone() {
    return new u({ faces: y$2(this.faces), shading: this.shading, material: y$2(this.material), trustSourceNormals: this.trustSourceNormals });
  }
  cloneWithDeduplication(r2, t) {
    const s2 = { faces: y$2(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(r2, t) : null, trustSourceNormals: this.trustSourceNormals };
    return new u(s2);
  }
};
e([y$1({ json: { write: true } })], f.prototype, "faces", void 0), e([s$1("faces")], f.prototype, "castFaces", null), e([y$1({ type: a, json: { write: true } })], f.prototype, "material", void 0), e([s$1("material")], f.prototype, "castMaterial", null), e([y$1({ type: String, json: { write: true } })], f.prototype, "shading", void 0), e([y$1({ type: Boolean })], f.prototype, "trustSourceNormals", void 0), f = u = e([n$2(m)], f);
const g = f;
export { c$1 as c, g, m$2 as m, p };
