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
import { a as e$5 } from "./vec33.js";
import { s as s$1, r as r$5, c as c$3, e as e$6 } from "./types.js";
import { cl as X, l as f$5, kO as Y$1, t as t$6, U, e8 as b, aL as w, g as s$2, s as s$3, g3 as n$5, kP as p$1, cm as nt, dJ as r$6, f9 as u$3, kJ as c$5, kQ as f$6, fm as i$4, hA as Q, gc as L$2, a as r$9, i as i$5, kD as e$9 } from "./index.js";
import { e as e$7, r as r$7 } from "./mat4f64.js";
import { D, L, C, E as E$2 } from "./enums.js";
import { r as r$8 } from "./Version.js";
import { x as x$2 } from "./quat.js";
import { e as e$8 } from "./quatf64.js";
import { B, g, d as d$2, i as i$3, c as c$4, u as u$2, x as x$1, L as L$1, O, E as E$1, F as F$1, w as w$1, q as q$1, A as A$1, V as V$1 } from "./BufferView.js";
function t$5(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$5.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u2 = f2[1], d2 = f2[2], s2 = f2[3], c2 = f2[4], i2 = f2[5], a2 = f2[6], p2 = f2[7], y = f2[8], B2 = f2[9], m2 = f2[10], l2 = f2[11], S = f2[12], h = f2[13], b2 = f2[14], M2 = f2[15], v = t2.typedBuffer, g2 = t2.typedBufferStride, _ = r2.typedBuffer, j = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * g2, r3 = e2 * j, f3 = _[r3], o3 = _[r3 + 1], z = _[r3 + 2], O2 = _[r3 + 3];
    v[t3] = n2 * f3 + c2 * o3 + y * z + S * O2, v[t3 + 1] = u2 * f3 + i2 * o3 + B2 * z + h * O2, v[t3 + 2] = d2 * f3 + a2 * o3 + m2 * z + b2 * O2, v[t3 + 3] = s2 * f3 + p2 * o3 + l2 * z + M2 * O2;
  }
}
function r$4(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$5.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u2 = f2[1], d2 = f2[2], s2 = f2[3], c2 = f2[4], i2 = f2[5], a2 = f2[6], p2 = f2[7], y = f2[8], B2 = t2.typedBuffer, m2 = t2.typedBufferStride, l2 = r2.typedBuffer, S = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * m2, r3 = e2 * S, f3 = l2[r3], o3 = l2[r3 + 1], h = l2[r3 + 2], b2 = l2[r3 + 3];
    B2[t3] = n2 * f3 + s2 * o3 + a2 * h, B2[t3 + 1] = u2 * f3 + c2 * o3 + p2 * h, B2[t3 + 2] = d2 * f3 + i2 * o3 + y * h, B2[t3 + 3] = b2;
  }
}
function f$4(e2, t2) {
  const r2 = Math.min(e2.count, t2.count), f2 = e2.typedBuffer, o2 = e2.typedBufferStride, n2 = t2.typedBuffer, u2 = t2.typedBufferStride;
  for (let d2 = 0; d2 < r2; d2++) {
    const e3 = d2 * o2, t3 = d2 * u2, r3 = n2[t3], s2 = n2[t3 + 1], c2 = n2[t3 + 2], i2 = r3 * r3 + s2 * s2 + c2 * c2;
    if (i2 > 0) {
      const t4 = 1 / Math.sqrt(i2);
      f2[e3] = t4 * r3, f2[e3 + 1] = t4 * s2, f2[e3 + 2] = t4 * c2;
    }
  }
}
function o$4(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u2 = t2.typedBuffer, d2 = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d2;
    o2[e3] = r2 * u2[t3], o2[e3 + 1] = r2 * u2[t3 + 1], o2[e3 + 2] = r2 * u2[t3 + 2], o2[e3 + 3] = r2 * u2[t3 + 3];
  }
}
function n$4(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u2 = t2.typedBuffer, d2 = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d2;
    o2[e3] = u2[t3] >> r2, o2[e3 + 1] = u2[t3 + 1] >> r2, o2[e3 + 2] = u2[t3 + 2] >> r2, o2[e3 + 3] = u2[t3 + 3] >> r2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, transformMat4: t$5, transformMat3: r$4, normalize: f$4, scale: o$4, shiftRight: n$4 }, Symbol.toStringTag, { value: "Module" }));
function e$4(e2, t2, r2) {
  const o2 = e2.typedBuffer, d2 = e2.typedBufferStride, f2 = t2.typedBuffer, n2 = t2.typedBufferStride, c2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * d2, l2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * n2;
  for (let p2 = 0; p2 < c2; ++p2) {
    for (let e3 = 0; e3 < 9; ++e3)
      o2[u2 + e3] = f2[l2 + e3];
    u2 += d2, l2 += n2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e$4 }, Symbol.toStringTag, { value: "Module" }));
function e$3(e2, t2, r2) {
  const o2 = e2.typedBuffer, d2 = e2.typedBufferStride, f2 = t2.typedBuffer, n2 = t2.typedBufferStride, c2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * d2, l2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * n2;
  for (let p2 = 0; p2 < c2; ++p2) {
    for (let e3 = 0; e3 < 16; ++e3)
      o2[u2 + e3] = f2[l2 + e3];
    u2 += d2, l2 += n2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e$3 }, Symbol.toStringTag, { value: "Module" }));
function e$2(e2, t2, r2) {
  const n2 = e2.typedBuffer, o2 = e2.typedBufferStride, c2 = t2.typedBuffer, d2 = t2.typedBufferStride, f2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * o2, s2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * d2;
  for (let p2 = 0; p2 < f2; ++p2)
    n2[u2] = c2[s2], u2 += o2, s2 += d2;
}
function t$4(e2, t2) {
  const r2 = e2.count;
  t2 || (t2 = new e2.TypedArrayConstructor(r2));
  for (let n2 = 0; n2 < r2; n2++)
    t2[n2] = e2.get(n2);
  return t2;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e$2, makeDense: t$4 }, Symbol.toStringTag, { value: "Module" }));
function f$3(e2, t2, r2) {
  const f2 = e2.typedBuffer, n2 = e2.typedBufferStride, d2 = t2.typedBuffer, o2 = t2.typedBufferStride, u2 = r2 ? r2.count : t2.count;
  let s2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * n2, c2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * o2;
  for (let p2 = 0; p2 < u2; ++p2)
    f2[s2] = d2[c2], f2[s2 + 1] = d2[c2 + 1], s2 += n2, c2 += o2;
}
function n$3(n2, d2, o2) {
  const u2 = n2.typedBuffer, s2 = n2.typedBufferStride, c2 = d2.typedBuffer, p2 = d2.typedBufferStride, l2 = o2 ? o2.count : d2.count;
  let y = (o2 && o2.dstIndex ? o2.dstIndex : 0) * s2, i2 = (o2 && o2.srcIndex ? o2.srcIndex : 0) * p2;
  if (s$1(d2.elementType)) {
    const e2 = r$5(d2.elementType);
    if (c$3(d2.elementType))
      for (let t2 = 0; t2 < l2; ++t2)
        u2[y] = Math.max(c2[i2] / e2, -1), u2[y + 1] = Math.max(c2[i2 + 1] / e2, -1), y += s2, i2 += p2;
    else
      for (let t2 = 0; t2 < l2; ++t2)
        u2[y] = c2[i2] / e2, u2[y + 1] = c2[i2 + 1] / e2, y += s2, i2 += p2;
  } else
    f$3(n2, d2, o2);
  return n2;
}
function d$1(e2, t2, r2, f2) {
  var _a, _b;
  const n2 = e2.typedBuffer, d2 = e2.typedBufferStride, o2 = (_a = f2 == null ? void 0 : f2.count) != null ? _a : e2.count;
  let u2 = ((_b = f2 == null ? void 0 : f2.dstIndex) != null ? _b : 0) * d2;
  for (let s2 = 0; s2 < o2; ++s2)
    n2[u2] = t2, n2[u2 + 1] = r2, u2 += d2;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: f$3, normalizeIntegerBuffer: n$3, fill: d$1 }, Symbol.toStringTag, { value: "Module" }));
function e$1(e2, t2, f2) {
  const d2 = e2.typedBuffer, n2 = e2.typedBufferStride, o2 = t2.typedBuffer, r2 = t2.typedBufferStride, c2 = f2 ? f2.count : t2.count;
  let u2 = (f2 && f2.dstIndex ? f2.dstIndex : 0) * n2, l2 = (f2 && f2.srcIndex ? f2.srcIndex : 0) * r2;
  for (let s2 = 0; s2 < c2; ++s2)
    d2[u2] = o2[l2], d2[u2 + 1] = o2[l2 + 1], d2[u2 + 2] = o2[l2 + 2], d2[u2 + 3] = o2[l2 + 3], u2 += n2, l2 += r2;
}
function t$3(e2, t2, f2, d2, n2, o2) {
  var _a, _b;
  const r2 = e2.typedBuffer, c2 = e2.typedBufferStride, u2 = (_a = o2 == null ? void 0 : o2.count) != null ? _a : e2.count;
  let l2 = ((_b = o2 == null ? void 0 : o2.dstIndex) != null ? _b : 0) * c2;
  for (let s2 = 0; s2 < u2; ++s2)
    r2[l2] = t2, r2[l2 + 1] = f2, r2[l2 + 2] = d2, r2[l2 + 3] = n2, l2 += c2;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e$1, fill: t$3 }, Symbol.toStringTag, { value: "Module" }));
function r$3(s2, r2) {
  return new s2(new ArrayBuffer(r2 * s2.ElementCount * e$6(s2.ElementType)));
}
class n$2 {
  constructor(r2) {
    this._streamDataRequester = r2;
  }
  async loadJSON(r2, e2) {
    return this._load("json", r2, e2);
  }
  async loadBinary(r2, e2) {
    return X(r2) ? (f$5(e2), Y$1(r2)) : this._load("binary", r2, e2);
  }
  async loadImage(r2, e2) {
    return this._load("image", r2, e2);
  }
  async _load(t2, i2, m2) {
    if (t$6(this._streamDataRequester))
      return (await U(i2, { responseType: c$2[t2] })).data;
    const n2 = await b(this._streamDataRequester.request(i2, t2, m2));
    if (n2.ok === true)
      return n2.value;
    throw w(n2.error), new s$2("", `Request for resource failed: ${n2.error}`);
  }
}
const c$2 = { image: "image", binary: "array-buffer", json: "json" };
class o$3 {
  error(e2) {
    throw new s$2("gltf-loader-error", e2);
  }
  errorUnsupported(e2) {
    throw new s$2("gltf-loader-unsupported-feature", e2);
  }
  errorUnsupportedIf(r2, e2) {
    r2 && this.errorUnsupported(e2);
  }
  assert(r2, e2) {
    r2 || this.error(e2);
  }
  warn(r2) {
    s$3.getLogger("esri.views.3d.glTF").warn(r2);
  }
  warnUnsupported(r2) {
    this.warn("[Unsupported Feature] " + r2);
  }
  warnUnsupportedIf(r2, e2) {
    r2 && this.warnUnsupported(e2);
  }
}
function r$2(e2 = {}) {
  return __spreadValues({ color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false, castShadows: true, receiveShadows: true, receiveAmbientOcclustion: true, textureColor: null, textureNormal: null, textureOcclusion: null, textureEmissive: null, textureMetallicRoughness: null, colorTextureTransform: null, normalTextureTransform: null, occlusionTextureTransform: null, emissiveTextureTransform: null, metallicRoughnessTextureTransform: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply" }, e2);
}
function l$1(r2, l2 = {}) {
  return { data: r2, parameters: __spreadValues({ wrap: __spreadValues({ s: D.REPEAT, t: D.REPEAT }, l2.wrap), noUnpackFlip: true, mipmap: false }, l2) };
}
class t$2 {
  constructor(t2) {
    this._data = t2, this._offset4 = 0, this._dataUint32 = new Uint32Array(this._data, 0, Math.floor(this._data.byteLength / 4));
  }
  readUint32() {
    const t2 = this._offset4;
    return this._offset4 += 1, this._dataUint32[t2];
  }
  readUint8Array(t2) {
    const s2 = 4 * this._offset4;
    return this._offset4 += t2 / 4, new Uint8Array(this._data, s2, t2);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
}
var A, E;
!function(A2) {
  A2.SCALAR = "SCALAR", A2.VEC2 = "VEC2", A2.VEC3 = "VEC3", A2.VEC4 = "VEC4", A2.MAT2 = "MAT2", A2.MAT3 = "MAT3", A2.MAT4 = "MAT4";
}(A || (A = {})), function(A2) {
  A2[A2.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", A2[A2.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(E || (E = {}));
const t$1 = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 }, a = { pbrMetallicRoughness: t$1, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false }, l = { ESRI_externalColorMixMode: "tint" }, i$2 = (e2 = {}) => {
  const o2 = __spreadValues(__spreadValues({}, t$1), e2.pbrMetallicRoughness), r2 = s(__spreadValues(__spreadValues({}, l), e2.extras));
  return __spreadProps(__spreadValues(__spreadValues({}, a), e2), { pbrMetallicRoughness: o2, extras: r2 });
};
function s(o2) {
  switch (o2.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      n$5(o2.ESRI_externalColorMixMode), o2.ESRI_externalColorMixMode = "tint";
  }
  return o2;
}
const n$1 = { magFilter: L.LINEAR, minFilter: L.LINEAR_MIPMAP_LINEAR, wrapS: D.REPEAT, wrapT: D.REPEAT }, c$1 = (e2) => __spreadValues(__spreadValues({}, n$1), e2);
function r$1(r2) {
  let e2, t2;
  return r2.replace(/^(.*\/)?([^/]*)$/, (r3, a2, i2) => (e2 = a2 || "", t2 = i2 || "", "")), { dirPart: e2, filePart: t2 };
}
const M = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562, MIN_HEADER_LENGTH: 20 };
class F {
  constructor(e2, t2, r2, s2, n2) {
    this._context = e2, this._errorContext = t2, this.uri = r2, this.json = s2, this._glbBuffer = n2, this._bufferLoaders = new Map(), this._textureLoaders = new Map(), this._textureCache = new Map(), this._materialCache = new Map(), this._nodeParentMap = new Map(), this._nodeTransformCache = new Map(), this._baseUri = r$1(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), t2.errorUnsupportedIf(s2.scenes == null, "Scenes must be defined."), t2.errorUnsupportedIf(s2.meshes == null, "Meshes must be defined"), t2.errorUnsupportedIf(s2.nodes == null, "Nodes must be defined."), this._computeNodeParents();
  }
  static async load(e2, t2, o2, a2) {
    if (X(o2)) {
      const r2 = nt(o2);
      if (r2 && r2.mediaType !== "model/gltf-binary")
        try {
          const s2 = JSON.parse(r2.isBase64 ? atob(r2.data) : r2.data);
          return new F(e2, t2, o2, s2);
        } catch {
        }
      const a3 = Y$1(o2);
      if (F._isGLBData(a3))
        return this._fromGLBData(e2, t2, o2, a3);
    }
    if (o2.endsWith(".gltf")) {
      const r2 = await e2.loadJSON(o2, a2);
      return new F(e2, t2, o2, r2);
    }
    const i2 = await e2.loadBinary(o2, a2);
    if (F._isGLBData(i2))
      return this._fromGLBData(e2, t2, o2, i2);
    const u2 = await e2.loadJSON(o2, a2);
    return new F(e2, t2, o2, u2);
  }
  static _isGLBData(e2) {
    if (e2 == null)
      return false;
    const t2 = new t$2(e2);
    return t2.remainingBytes() >= 4 && t2.readUint32() === M.MAGIC;
  }
  static async _fromGLBData(e2, t2, r2, s2) {
    const n2 = await F._parseGLBData(t2, s2);
    return new F(e2, t2, r2, n2.json, n2.binaryData);
  }
  static async _parseGLBData(e2, t2) {
    const r2 = new t$2(t2);
    e2.assert(r2.remainingBytes() >= 12, "GLB binary data is insufficiently large.");
    const s2 = r2.readUint32(), n2 = r2.readUint32(), o2 = r2.readUint32();
    e2.assert(s2 === M.MAGIC, "Magic first 4 bytes do not fit to expected GLB value."), e2.assert(t2.byteLength >= o2, "GLB binary data is smaller than header specifies."), e2.errorUnsupportedIf(n2 !== 2, "An unsupported GLB container version was detected. Only version 2 is supported.");
    let a2, i2, u2 = 0;
    for (; r2.remainingBytes() >= 8; ) {
      const t3 = r2.readUint32(), s3 = r2.readUint32();
      u2 === 0 ? (e2.assert(s3 === M.CHUNK_TYPE_JSON, "First GLB chunk must be JSON."), e2.assert(t3 >= 0, "No JSON data found."), a2 = await K(r2.readUint8Array(t3))) : u2 === 1 ? (e2.errorUnsupportedIf(s3 !== M.CHUNK_TYPE_BIN, "Second GLB chunk expected to be BIN."), i2 = r2.readUint8Array(t3)) : e2.warnUnsupported("More than 2 GLB chunks detected. Skipping."), u2 += 1;
    }
    return a2 || e2.error("No GLB JSON chunk detected."), { json: a2, binaryData: i2 };
  }
  async getBuffer(e2, t2) {
    const r2 = this.json.buffers[e2], s2 = this._errorContext;
    if (r2.uri == null)
      return s2.assert(this._glbBuffer != null, "GLB buffer not present"), this._glbBuffer;
    const n2 = await this._getBufferLoader(e2, t2);
    return s2.assert(n2.byteLength === r2.byteLength, "Buffer byte lengths should match."), n2;
  }
  async _getBufferLoader(e2, t2) {
    const r2 = this._bufferLoaders.get(e2);
    if (r2)
      return r2;
    const s2 = this.json.buffers[e2].uri, n2 = this._context.loadBinary(this._resolveUri(s2), t2).then((e3) => new Uint8Array(e3));
    return this._bufferLoaders.set(e2, n2), n2;
  }
  async getAccessor(e2, t2) {
    const r2 = this._errorContext;
    r2.errorUnsupportedIf(!this.json.accessors, "Accessors missing.");
    const s2 = this.json.accessors[e2];
    r2.errorUnsupportedIf((s2 == null ? void 0 : s2.bufferView) == null, "Some accessor does not specify a bufferView."), r2.errorUnsupportedIf(s2.type in [A.MAT2, A.MAT3, A.MAT4], `AttributeType ${s2.type} is not supported`);
    const n2 = this.json.bufferViews[s2.bufferView], o2 = await this.getBuffer(n2.buffer, t2), a2 = V[s2.type], i2 = Y[s2.componentType], u2 = a2 * i2, c2 = n2.byteStride || u2;
    return { raw: o2.buffer, byteStride: c2, byteOffset: o2.byteOffset + (n2.byteOffset || 0) + (s2.byteOffset || 0), entryCount: s2.count, isDenselyPacked: c2 === u2, componentCount: a2, componentByteSize: i2, componentType: s2.componentType, min: s2.min, max: s2.max, normalized: !!s2.normalized };
  }
  async getIndexData(e2, t2) {
    if (e2.indices == null)
      return;
    const r2 = await this.getAccessor(e2.indices, t2);
    if (r2.isDenselyPacked)
      switch (r2.componentType) {
        case C.UNSIGNED_BYTE:
          return new Uint8Array(r2.raw, r2.byteOffset, r2.entryCount);
        case C.UNSIGNED_SHORT:
          return new Uint16Array(r2.raw, r2.byteOffset, r2.entryCount);
        case C.UNSIGNED_INT:
          return new Uint32Array(r2.raw, r2.byteOffset, r2.entryCount);
      }
    else
      switch (r2.componentType) {
        case C.UNSIGNED_BYTE:
          return t$4(this._wrapAccessor(d$2, r2));
        case C.UNSIGNED_SHORT:
          return t$4(this._wrapAccessor(g, r2));
        case C.UNSIGNED_INT:
          return t$4(this._wrapAccessor(B, r2));
      }
  }
  async getPositionData(e2, t2) {
    const r2 = this._errorContext;
    r2.errorUnsupportedIf(e2.attributes.POSITION == null, "No POSITION vertex data found.");
    const s2 = await this.getAccessor(e2.attributes.POSITION, t2);
    return r2.errorUnsupportedIf(s2.componentType !== C.FLOAT, "Expected type FLOAT for POSITION vertex attribute, but found " + C[s2.componentType]), r2.errorUnsupportedIf(s2.componentCount !== 3, "POSITION vertex attribute must have 3 components, but found " + s2.componentCount.toFixed()), this._wrapAccessor(i$3, s2);
  }
  async getNormalData(e2, t2) {
    const r2 = this._errorContext;
    r2.assert(e2.attributes.NORMAL != null, "No NORMAL vertex data found.");
    const s2 = await this.getAccessor(e2.attributes.NORMAL, t2);
    return r2.errorUnsupportedIf(s2.componentType !== C.FLOAT, "Expected type FLOAT for NORMAL vertex attribute, but found " + C[s2.componentType]), r2.errorUnsupportedIf(s2.componentCount !== 3, "NORMAL vertex attribute must have 3 components, but found " + s2.componentCount.toFixed()), this._wrapAccessor(i$3, s2);
  }
  async getTangentData(e2, t2) {
    const r2 = this._errorContext;
    r2.assert(e2.attributes.TANGENT != null, "No TANGENT vertex data found.");
    const s2 = await this.getAccessor(e2.attributes.TANGENT, t2);
    return r2.errorUnsupportedIf(s2.componentType !== C.FLOAT, "Expected type FLOAT for TANGENT vertex attribute, but found " + C[s2.componentType]), r2.errorUnsupportedIf(s2.componentCount !== 4, "TANGENT vertex attribute must have 4 components, but found " + s2.componentCount.toFixed()), new c$4(s2.raw, s2.byteOffset, s2.byteStride, s2.byteOffset + s2.byteStride * s2.entryCount);
  }
  async getTextureCoordinates(e2, t2) {
    const r2 = this._errorContext;
    r2.assert(e2.attributes.TEXCOORD_0 != null, "No TEXCOORD_0 vertex data found.");
    const s2 = await this.getAccessor(e2.attributes.TEXCOORD_0, t2);
    return r2.errorUnsupportedIf(s2.componentCount !== 2, "TEXCOORD_0 vertex attribute must have 2 components, but found " + s2.componentCount.toFixed()), s2.componentType === C.FLOAT ? this._wrapAccessor(u$2, s2) : (r2.errorUnsupportedIf(!s2.normalized, "Integer component types are only supported for a normalized accessor for TEXCOORD_0."), J(s2));
  }
  async getVertexColors(e2, t2) {
    const r2 = this._errorContext;
    r2.assert(e2.attributes.COLOR_0 != null, "No COLOR_0 vertex data found.");
    const s2 = await this.getAccessor(e2.attributes.COLOR_0, t2);
    if (r2.errorUnsupportedIf(s2.componentCount !== 4 && s2.componentCount !== 3, "COLOR_0 attribute must have 3 or 4 components, but found " + s2.componentCount.toFixed()), s2.componentCount === 4) {
      if (s2.componentType === C.FLOAT)
        return this._wrapAccessor(c$4, s2);
      if (s2.componentType === C.UNSIGNED_BYTE)
        return this._wrapAccessor(x$1, s2);
      if (s2.componentType === C.UNSIGNED_SHORT)
        return this._wrapAccessor(L$1, s2);
    } else if (s2.componentCount === 3) {
      if (s2.componentType === C.FLOAT)
        return this._wrapAccessor(i$3, s2);
      if (s2.componentType === C.UNSIGNED_BYTE)
        return this._wrapAccessor(O, s2);
      if (s2.componentType === C.UNSIGNED_SHORT)
        return this._wrapAccessor(E$1, s2);
    }
    r2.errorUnsupported("Unsupported component type for COLOR_0 attribute: " + C[s2.componentType]);
  }
  hasPositions(e2) {
    return e2.attributes.POSITION !== void 0;
  }
  hasNormals(e2) {
    return e2.attributes.NORMAL !== void 0;
  }
  hasVertexColors(e2) {
    return e2.attributes.COLOR_0 !== void 0;
  }
  hasTextureCoordinates(e2) {
    return e2.attributes.TEXCOORD_0 !== void 0;
  }
  hasTangents(e2) {
    return e2.attributes.TANGENT !== void 0;
  }
  async getMaterial(e2, t2, r2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    let s2 = e2.material ? this._materialCache.get(e2.material) : void 0;
    if (!s2) {
      const n2 = e2.material != null ? i$2(this.json.materials[e2.material]) : i$2(), o2 = n2.pbrMetallicRoughness, a2 = this.hasVertexColors(e2), i2 = this.getTexture(o2.baseColorTexture, t2), u2 = this.getTexture(n2.normalTexture, t2), c2 = r2 ? this.getTexture(n2.occlusionTexture, t2) : void 0, f2 = r2 ? this.getTexture(n2.emissiveTexture, t2) : void 0, d2 = r2 ? this.getTexture(o2.metallicRoughnessTexture, t2) : void 0, p2 = e2.material != null ? e2.material : -1;
      s2 = { alphaMode: n2.alphaMode, alphaCutoff: n2.alphaCutoff, color: o2.baseColorFactor, doubleSided: !!n2.doubleSided, colorTexture: await i2, normalTexture: await u2, name: n2.name, id: p2, occlusionTexture: await c2, emissiveTexture: await f2, emissiveFactor: n2.emissiveFactor, metallicFactor: o2.metallicFactor, roughnessFactor: o2.roughnessFactor, metallicRoughnessTexture: await d2, hasVertexColors: a2, ESRI_externalColorMixMode: n2.extras.ESRI_externalColorMixMode, colorTextureTransform: (_b = (_a = o2 == null ? void 0 : o2.baseColorTexture) == null ? void 0 : _a.extensions) == null ? void 0 : _b.KHR_texture_transform, normalTextureTransform: (_d = (_c = n2.normalTexture) == null ? void 0 : _c.extensions) == null ? void 0 : _d.KHR_texture_transform, occlusionTextureTransform: (_f = (_e = n2.occlusionTexture) == null ? void 0 : _e.extensions) == null ? void 0 : _f.KHR_texture_transform, emissiveTextureTransform: (_h = (_g = n2.emissiveTexture) == null ? void 0 : _g.extensions) == null ? void 0 : _h.KHR_texture_transform, metallicRoughnessTextureTransform: (_j = (_i = o2 == null ? void 0 : o2.metallicRoughnessTexture) == null ? void 0 : _i.extensions) == null ? void 0 : _j.KHR_texture_transform };
    }
    return s2;
  }
  async getTexture(t2, r2) {
    if (!t2)
      return;
    this._errorContext.errorUnsupportedIf((t2.texCoord || 0) !== 0, "Only TEXCOORD with index 0 is supported.");
    const s2 = t2.index, n2 = this._errorContext, o2 = this.json.textures[s2], a2 = c$1(o2.sampler != null ? this.json.samplers[o2.sampler] : {});
    n2.errorUnsupportedIf(o2.source == null, "Source is expected to be defined for a texture.");
    const i2 = this.json.images[o2.source], u2 = await this._loadTextureImageData(s2, o2, r2);
    return r$6(this._textureCache, s2, () => {
      const e2 = (e3) => e3 === 33071 || e3 === 33648 || e3 === 10497, t3 = (e3) => (n2.error(`Unexpected TextureSampler WrapMode: ${e3}. Using default REPEAT(10497).`), 10497);
      return { data: u2, wrapS: e2(a2.wrapS) ? a2.wrapS : t3(a2.wrapS), wrapT: e2(a2.wrapT) ? a2.wrapT : t3(a2.wrapT), minFilter: a2.minFilter, name: i2.name, id: s2 };
    });
  }
  getNodeTransform(e2) {
    if (e2 === void 0)
      return k;
    let t2 = this._nodeTransformCache.get(e2);
    if (!t2) {
      const r2 = this.getNodeTransform(this._getNodeParent(e2)), s2 = this.json.nodes[e2];
      s2.matrix ? t2 = u$3(e$7(), r2, s2.matrix) : s2.translation || s2.rotation || s2.scale ? (t2 = r$7(r2), s2.translation && c$5(t2, t2, s2.translation), s2.rotation && (H[3] = x$2(H, s2.rotation), f$6(t2, t2, H[3], H)), s2.scale && i$4(t2, t2, s2.scale)) : t2 = r2, this._nodeTransformCache.set(e2, t2);
    }
    return t2;
  }
  _wrapAccessor(e2, t2) {
    return new e2(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * (t2.entryCount - 1) + t2.componentByteSize * t2.componentCount);
  }
  _resolveUri(e2) {
    return Q(e2, this._baseUri);
  }
  _getNodeParent(e2) {
    return this._nodeParentMap.get(e2);
  }
  _checkVersionSupported() {
    const e2 = r$8.parse(this.json.asset.version, "glTF");
    P.validate(e2);
  }
  _checkRequiredExtensionsSupported() {
    const e2 = this.json, t2 = this._errorContext;
    e2.extensionsRequired && e2.extensionsRequired.length !== 0 && t2.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: " + e2.extensionsRequired.join(", "));
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e2, t2) => {
      e2.children && e2.children.forEach((e3) => {
        this._nodeParentMap.set(e3, t2);
      });
    });
  }
  async _loadTextureImageData(e2, t2, r2) {
    const s2 = this._textureLoaders.get(e2);
    if (s2)
      return s2;
    const n2 = this._createTextureLoader(t2, r2);
    return this._textureLoaders.set(e2, n2), n2;
  }
  async _createTextureLoader(e2, t2) {
    const r2 = this.json.images[e2.source];
    if (r2.uri)
      return this._context.loadImage(this._resolveUri(r2.uri), t2);
    const s2 = this._errorContext;
    s2.errorUnsupportedIf(r2.bufferView == null, "Image bufferView must be defined."), s2.errorUnsupportedIf(r2.mimeType == null, "Image mimeType must be defined.");
    const n2 = this.json.bufferViews[r2.bufferView], o2 = await this.getBuffer(n2.buffer, t2);
    return s2.errorUnsupportedIf(n2.byteStride != null, "byteStride not supported for image buffer"), q(new Uint8Array(o2.buffer, o2.byteOffset + (n2.byteOffset || 0), n2.byteLength), r2.mimeType);
  }
  async getLoadedBuffersSize() {
    if (this._glbBuffer)
      return this._glbBuffer.byteLength;
    const e2 = await L$2(Array.from(this._bufferLoaders.values())), r2 = await L$2(Array.from(this._textureLoaders.values()));
    return e2.reduce((e3, t2) => {
      var _a;
      return e3 + ((_a = t2 == null ? void 0 : t2.byteLength) != null ? _a : 0);
    }, 0) + r2.reduce((e3, t2) => e3 + (t2 ? t2.width * t2.height * 4 : 0), 0);
  }
}
const P = new r$8(2, 0, "glTF"), k = p$1(e$7(), Math.PI / 2), H = e$8(), V = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }, Y = { [C.BYTE]: 1, [C.UNSIGNED_BYTE]: 1, [C.SHORT]: 2, [C.UNSIGNED_SHORT]: 2, [C.FLOAT]: 4, [C.UNSIGNED_INT]: 4 };
function J(e2) {
  switch (e2.componentType) {
    case C.BYTE:
      return new V$1(e2.raw, e2.byteOffset, e2.byteStride, e2.byteOffset + e2.byteStride * e2.entryCount);
    case C.UNSIGNED_BYTE:
      return new A$1(e2.raw, e2.byteOffset, e2.byteStride, e2.byteOffset + e2.byteStride * e2.entryCount);
    case C.SHORT:
      return new q$1(e2.raw, e2.byteOffset, e2.byteStride, e2.byteOffset + e2.byteStride * e2.entryCount);
    case C.UNSIGNED_SHORT:
      return new w$1(e2.raw, e2.byteOffset, e2.byteStride, e2.byteOffset + e2.byteStride * e2.entryCount);
    case C.UNSIGNED_INT:
      return new F$1(e2.raw, e2.byteOffset, e2.byteStride, e2.byteOffset + e2.byteStride * e2.entryCount);
    case C.FLOAT:
      return new u$2(e2.raw, e2.byteOffset, e2.byteStride, e2.byteOffset + e2.byteStride * e2.entryCount);
  }
}
async function K(e2) {
  return new Promise((t2, r2) => {
    const s2 = new Blob([e2]), n2 = new FileReader();
    n2.onload = () => {
      const e3 = n2.result;
      t2(JSON.parse(e3));
    }, n2.onerror = (e3) => {
      r2(e3);
    }, n2.readAsText(s2);
  });
}
async function q(e2, t2) {
  return new Promise((r2, s2) => {
    const n2 = new Blob([e2], { type: t2 }), o2 = URL.createObjectURL(n2), a2 = new Image(), i2 = () => {
      URL.revokeObjectURL(o2), "decode" in a2 ? a2.decode().then(() => r2(a2), () => r2(a2)).then(c2) : (r2(a2), c2());
    }, u2 = (e3) => {
      URL.revokeObjectURL(o2), s2(e3), c2();
    }, c2 = () => {
      a2.removeEventListener("load", i2), a2.removeEventListener("error", u2);
    };
    a2.addEventListener("load", i2), a2.addEventListener("error", u2), a2.src = o2;
  });
}
let u$1 = 0;
async function m(r2, s2, a2 = {}, i2 = true) {
  const m2 = await F.load(r2, x, s2, a2), p2 = "gltf_" + u$1++, T2 = { lods: [], materials: new Map(), textures: new Map(), meta: c(m2) }, h = !(!m2.json.asset.extras || m2.json.asset.extras.ESRI_type !== "symbolResource"), g2 = new Map();
  await d(m2, async (r3, s3, n2, u2) => {
    var _a;
    const c2 = (_a = g2.get(n2)) != null ? _a : 0;
    g2.set(n2, c2 + 1);
    const d2 = r3.mode !== void 0 ? r3.mode : E$2.TRIANGLES, h2 = d2 === E$2.TRIANGLES || d2 === E$2.TRIANGLE_STRIP || d2 === E$2.TRIANGLE_FAN ? d2 : null;
    if (t$6(h2))
      return void x.warnUnsupported("Unsupported primitive mode (" + E$2[d2] + "). Skipping primitive.");
    if (!m2.hasPositions(r3))
      return void x.warn("Skipping primitive without POSITION vertex attribute.");
    const R2 = m2.getPositionData(r3, a2), w2 = m2.getMaterial(r3, a2, i2), v = m2.hasNormals(r3) ? m2.getNormalData(r3, a2) : null, S = m2.hasTangents(r3) ? m2.getTangentData(r3, a2) : null, _ = m2.hasTextureCoordinates(r3) ? m2.getTextureCoordinates(r3, a2) : null, E2 = m2.hasVertexColors(r3) ? m2.getVertexColors(r3, a2) : null, I = m2.getIndexData(r3, a2), M2 = { transform: r$7(s3), attributes: { position: await R2, normal: v ? await v : null, texCoord0: _ ? await _ : null, color: E2 ? await E2 : null, tangent: S ? await S : null }, indices: await I, primitiveType: h2, material: f$2(T2, await w2, p2) };
    let F2 = null;
    r$9(T2.meta) && r$9(T2.meta.ESRI_lod) && T2.meta.ESRI_lod.metric === "screenSpaceRadius" && (F2 = T2.meta.ESRI_lod.thresholds[n2]), T2.lods[n2] = T2.lods[n2] || { parts: [], name: u2, lodThreshold: F2 }, T2.lods[n2].parts[c2] = M2;
  });
  for (const e2 of T2.lods)
    e2.parts = e2.parts.filter((e3) => !!e3);
  const R = await m2.getLoadedBuffersSize();
  return { model: T2, meta: { isEsriSymbolResource: h, uri: m2.uri }, customMeta: {}, size: R };
}
function c(o2) {
  const t2 = o2.json;
  let r2 = null;
  return t2.nodes.forEach((o3) => {
    const t3 = o3.extras;
    r$9(t3) && (t3.ESRI_proxyEllipsoid || t3.ESRI_lod) && (r2 = t3);
  }), r2;
}
async function d(e2, o2) {
  const t2 = e2.json, r2 = t2.scenes[t2.scene || 0].nodes, s2 = r2.length > 1, a2 = [];
  for (const i2 of r2) {
    const e3 = t2.nodes[i2];
    if (a2.push(n2(i2, 0)), p(e3) && !s2) {
      e3.extensions.MSFT_lod.ids.forEach((e4, o3) => n2(e4, o3 + 1));
    }
  }
  async function n2(r3, s3) {
    const i2 = t2.nodes[r3], l2 = e2.getNodeTransform(r3);
    if (x.warnUnsupportedIf(i2.weights != null, "Morph targets are not supported."), i2.mesh != null) {
      const e3 = t2.meshes[i2.mesh];
      for (const t3 of e3.primitives)
        a2.push(o2(t3, l2, s3, e3.name));
    }
    for (const e3 of i2.children || [])
      a2.push(n2(e3, s3));
  }
  await Promise.all(a2);
}
function p(e2) {
  return e2.extensions && e2.extensions.MSFT_lod && Array.isArray(e2.extensions.MSFT_lod.ids);
}
function f$2(e2, o2, t2) {
  const r2 = (o3) => {
    const r3 = `${t2}_tex_${o3 && o3.id}${o3 && o3.name ? "_" + o3.name : ""}`;
    if (o3 && !e2.textures.has(r3)) {
      const t3 = l$1(o3.data, { wrap: { s: o3.wrapS, t: o3.wrapT }, mipmap: T.includes(o3.minFilter), noUnpackFlip: true });
      e2.textures.set(r3, t3);
    }
    return r3;
  }, n2 = `${t2}_mat_${o2.id}_${o2.name}`;
  if (!e2.materials.has(n2)) {
    const t3 = r$2({ color: [o2.color[0], o2.color[1], o2.color[2]], opacity: o2.color[3], alphaMode: o2.alphaMode, alphaCutoff: o2.alphaCutoff, doubleSided: o2.doubleSided, colorMixMode: o2.ESRI_externalColorMixMode, textureColor: o2.colorTexture ? r2(o2.colorTexture) : void 0, textureNormal: o2.normalTexture ? r2(o2.normalTexture) : void 0, textureOcclusion: o2.occlusionTexture ? r2(o2.occlusionTexture) : void 0, textureEmissive: o2.emissiveTexture ? r2(o2.emissiveTexture) : void 0, textureMetallicRoughness: o2.metallicRoughnessTexture ? r2(o2.metallicRoughnessTexture) : void 0, emissiveFactor: [o2.emissiveFactor[0], o2.emissiveFactor[1], o2.emissiveFactor[2]], colorTextureTransform: o2.colorTextureTransform, normalTextureTransform: o2.normalTextureTransform, occlusionTextureTransform: o2.occlusionTextureTransform, emissiveTextureTransform: o2.emissiveTextureTransform, metallicRoughnessTextureTransform: o2.metallicRoughnessTextureTransform, metallicFactor: o2.metallicFactor, roughnessFactor: o2.roughnessFactor });
    e2.materials.set(n2, t3);
  }
  return n2;
}
const x = new o$3(), T = [L.LINEAR_MIPMAP_LINEAR, L.LINEAR_MIPMAP_NEAREST];
const r = 1024;
function n(n2) {
  if (Array.isArray(n2)) {
    if (n2.length < r)
      return n2;
    for (const r2 of n2)
      if (r2 >= 65536)
        return new Uint32Array(n2);
    return new Uint16Array(n2);
  }
  if (n2.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT)
    return n2;
  for (const r2 of n2)
    if (r2 >= 65536)
      return n2;
  return new Uint16Array(n2);
}
function t(n2) {
  const t2 = 3 * n2;
  return t2 <= r ? new Array(t2) : t2 <= 65536 ? new Uint16Array(t2) : new Uint32Array(t2);
}
let e = (() => {
  const r2 = new Uint32Array(131072);
  for (let n2 = 0; n2 < r2.length; ++n2)
    r2[n2] = n2;
  return r2;
})();
const i$1 = [0], f$1 = (() => {
  const r2 = new Uint16Array(65536);
  for (let n2 = 0; n2 < r2.length; ++n2)
    r2[n2] = n2;
  return r2;
})();
function u(n2) {
  if (n2 === 1)
    return i$1;
  if (n2 < r)
    return Array.from(new Uint16Array(f$1.buffer, 0, n2));
  if (n2 < f$1.length)
    return new Uint16Array(f$1.buffer, 0, n2);
  if (n2 > e.length) {
    const r2 = Math.max(2 * e.length, n2);
    e = new Uint32Array(r2);
    for (let n3 = 0; n3 < e.length; n3++)
      e[n3] = n3;
  }
  return new Uint32Array(e.buffer, 0, n2);
}
function o$2(n2) {
  if (n2 === 1)
    return i$1;
  if (n2 < r)
    return Array.from(new Uint16Array(f$1.buffer, 0, n2));
  if (n2 < f$1.length)
    return new Uint16Array(f$1.slice(0, n2));
  if (n2 > e.length) {
    const r2 = new Uint32Array(n2);
    for (let n3 = 0; n3 < r2.length; n3++)
      r2[n3] = n3;
    return r2;
  }
  return new Uint32Array(e.slice(0, n2));
}
function o$1(r2, o2 = u) {
  return typeof r2 == "number" ? o2(r2) : i$5(r2) || e$9(r2) ? new Uint32Array(r2) : r2;
}
function f(e2) {
  const t$12 = typeof e2 == "number" ? e2 : e2.length;
  if (t$12 < 3)
    return [];
  const n2 = t$12 - 2, o2 = t(n2);
  if (typeof e2 == "number") {
    let e3 = 0;
    for (let t2 = 0; t2 < n2; t2 += 1)
      t2 % 2 == 0 ? (o2[e3++] = t2, o2[e3++] = t2 + 1, o2[e3++] = t2 + 2) : (o2[e3++] = t2 + 1, o2[e3++] = t2, o2[e3++] = t2 + 2);
  } else {
    let t2 = 0;
    for (let r2 = 0; r2 < n2; r2 += 1)
      if (r2 % 2 == 0) {
        const n3 = e2[r2], f2 = e2[r2 + 1], i2 = e2[r2 + 2];
        o2[t2++] = n3, o2[t2++] = f2, o2[t2++] = i2;
      } else {
        const n3 = e2[r2 + 1], f2 = e2[r2], i2 = e2[r2 + 2];
        o2[t2++] = n3, o2[t2++] = f2, o2[t2++] = i2;
      }
  }
  return o2;
}
function i(e2) {
  const t2 = typeof e2 == "number" ? e2 : e2.length;
  if (t2 < 3)
    return new Uint16Array(0);
  const n2 = t2 - 2, r2 = n2 <= 65536 ? new Uint16Array(3 * n2) : new Uint32Array(3 * n2);
  if (typeof e2 == "number") {
    let e3 = 0;
    for (let t3 = 0; t3 < n2; ++t3)
      r2[e3++] = 0, r2[e3++] = t3 + 1, r2[e3++] = t3 + 2;
    return r2;
  }
  {
    const t3 = e2[0];
    let o2 = e2[1], f2 = 0;
    for (let i2 = 0; i2 < n2; ++i2) {
      const n3 = e2[i2 + 2];
      r2[f2++] = t3, r2[f2++] = o2, r2[f2++] = n3, o2 = n3;
    }
    return r2;
  }
}
const o = 2.1;
export { n$2 as a, r$4 as b, n$3 as c, o$4 as d, e$1 as e, f, o$1 as g, f$4 as h, i, d$1 as j, n$4 as k, o$2 as l, m, n, o, r$3 as r, t$3 as t, u };
