import { cs as E$1, t as t$1, G as o$1, eZ as e$1, eW as _, e_ as z, a as r$2, a7 as w$1, E as n, s as s$2, fc as F, kI as f$3, fe as t$2, kT as l$1, dJ as r$4, h0 as C$1, kU as it } from "./index.js";
import { K, k } from "./quat.js";
import { o as o$2, r as r$3, e as e$2 } from "./quatf64.js";
import { c as c$1 } from "./meshFeatureSet.js";
import { i as M } from "./georeference.js";
import { C, D } from "./enums.js";
import { o as o$3, i as i$1, g, s as s$3 } from "./imageutils2.js";
import "vue";
import "./mat3f64.js";
import "./imageUtils.js";
import "./earcut.js";
import "./deduplicate.js";
import "./mat4f64.js";
import "./BufferView.js";
import "./vec33.js";
var t;
!function(t2) {
  t2[t2.JSON = 1313821514] = "JSON", t2[t2.BIN = 5130562] = "BIN";
}(t || (t = {}));
class e {
  constructor(i2, r2) {
    if (!i2)
      throw new Error("GLB requires a JSON gltf chunk");
    this._length = e.HEADER_SIZE, this._length += e.CHUNK_HEADER_SIZE;
    const n2 = this._textToArrayBuffer(i2);
    if (this._length += this._alignTo(n2.byteLength, 4), r2 && (this._length += e.CHUNK_HEADER_SIZE, this._length += r2.byteLength, r2.byteLength % 4))
      throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const h2 = this._writeChunk(n2, 12, t.JSON, 32);
    r2 && this._writeChunk(r2, h2, t.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, e.MAGIC, true), this._outView.setUint32(4, e.VERSION, true), this._outView.setUint32(8, this._length, true);
  }
  _writeChunk(t2, e2, i2, r2 = 0) {
    const n2 = this._alignTo(t2.byteLength, 4);
    for (this._outView.setUint32(e2, n2, true), this._outView.setUint32(e2 += 4, i2, true), this._writeArrayBuffer(this._outView.buffer, t2, e2 += 4, 0, t2.byteLength), e2 += t2.byteLength; e2 % 4; )
      r2 && this._outView.setUint8(e2, r2), e2++;
    return e2;
  }
  _writeArrayBuffer(t2, e2, i2, r2, n2) {
    new Uint8Array(t2, i2, n2).set(new Uint8Array(e2, r2, n2), 0);
  }
  _textToArrayBuffer(t2) {
    return new TextEncoder().encode(t2).buffer;
  }
  _alignTo(t2, e2) {
    return e2 * Math.ceil(t2 / e2);
  }
}
e.HEADER_SIZE = 12, e.CHUNK_HEADER_SIZE = 8, e.MAGIC = 1179937895, e.VERSION = 2;
var E, A, R, L, o, I, N;
!function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(E || (E = {})), function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(A || (A = {})), function(E2) {
  E2[E2.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", E2[E2.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(R || (R = {})), function(E2) {
  E2.SCALAR = "SCALAR", E2.VEC2 = "VEC2", E2.VEC3 = "VEC3", E2.VEC4 = "VEC4", E2.MAT2 = "MAT2", E2.MAT3 = "MAT3", E2.MAT4 = "MAT4";
}(L || (L = {})), function(E2) {
  E2[E2.POINTS = 0] = "POINTS", E2[E2.LINES = 1] = "LINES", E2[E2.LINE_LOOP = 2] = "LINE_LOOP", E2[E2.LINE_STRIP = 3] = "LINE_STRIP", E2[E2.TRIANGLES = 4] = "TRIANGLES", E2[E2.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", E2[E2.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
}(o || (o = {})), function(E2) {
  E2.OPAQUE = "OPAQUE", E2.MASK = "MASK", E2.BLEND = "BLEND";
}(I || (I = {})), function(E2) {
  E2[E2.NoColor = 0] = "NoColor", E2[E2.FaceColor = 1] = "FaceColor", E2[E2.VertexColor = 2] = "VertexColor";
}(N || (N = {}));
class r$1 {
  constructor(e2, s2, i2, r2, n2) {
    this._buffer = e2, this._componentType = i2, this._dataType = r2, this._data = [], this._isFinalized = false, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, s2.bufferViews || (s2.bufferViews = []), this.index = s2.bufferViews.length, this._bufferView = { buffer: e2.index, byteLength: -1, target: n2 };
    const a2 = this._getElementSize();
    a2 >= 4 && n2 !== R.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a2), s2.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e2) {
    const t2 = this._data.length;
    if (this._data.push(e2), this._accessorIndex >= 0) {
      const s2 = t2 % this._numComponentsForDataType, i2 = this._accessorMin[s2];
      this._accessorMin[s2] = typeof i2 != "number" ? e2 : Math.min(i2, e2);
      const r2 = this._accessorMax[s2];
      this._accessorMax[s2] = typeof r2 != "number" ? e2 : Math.max(r2, e2);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e2(e3, t2) {
      return t2 * Math.ceil(e3 / t2);
    }
    return e2(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized)
      throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized)
      throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(e2, t2) {
    switch (this._componentType) {
      case C.BYTE:
        return new Int8Array(e2, t2);
      case C.FLOAT:
        return new Float32Array(e2, t2);
      case C.SHORT:
        return new Int16Array(e2, t2);
      case C.UNSIGNED_BYTE:
        return new Uint8Array(e2, t2);
      case C.UNSIGNED_INT:
        return new Uint32Array(e2, t2);
      case C.UNSIGNED_SHORT:
        return new Uint16Array(e2, t2);
    }
  }
  writeOutToBuffer(e2, t2) {
    this._createTypedArray(e2, t2).set(this._data);
  }
  writeAsync(e2) {
    if (this._asyncWritePromise)
      throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e2.then((e3) => {
      const t2 = new Uint8Array(e3);
      for (let s2 = 0; s2 < t2.length; ++s2)
        this._data.push(t2[s2]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e2) {
    if (this._accessorIndex >= 0)
      throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e2;
    const t2 = this._numComponentsForDataType;
    this._accessorMin = new Array(t2), this._accessorMax = new Array(t2);
  }
  endAccessor() {
    if (this._accessorIndex < 0)
      throw new Error("An accessor was not started, but was attempted to be ended");
    const e2 = this._getElementSize(), t2 = this._numComponentsForDataType, s2 = (this._data.length - this._accessorIndex) / t2;
    if (s2 % 1)
      throw new Error("An accessor was ended with missing component values");
    for (let i2 = 0; i2 < this._accessorMin.length; ++i2)
      typeof this._accessorMin[i2] != "number" && (this._accessorMin[i2] = 0), typeof this._accessorMax[i2] != "number" && (this._accessorMax[i2] = 0);
    const r2 = { byteOffset: e2 * (this._accessorIndex / t2), componentType: this._componentType, count: s2, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case C.UNSIGNED_BYTE:
          case C.UNSIGNED_SHORT:
            r2.normalized = true;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r2;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e2) => this._finalizedPromiseResolve = e2);
  }
  finalize() {
    const t2 = this._bufferView;
    return new Promise((t3) => {
      const s2 = this._buffer.getViewFinalizePromises(this);
      this._asyncWritePromise && s2.push(this._asyncWritePromise), t3(E$1(s2));
    }).then(() => {
      this._isFinalized = true, t2.byteOffset = this.getByteOffset(), t2.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
    });
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case C.BYTE:
      case C.UNSIGNED_BYTE:
        return 1;
      case C.SHORT:
      case C.UNSIGNED_SHORT:
        return 2;
      case C.UNSIGNED_INT:
      case C.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case L.SCALAR:
        return 1;
      case L.VEC2:
        return 2;
      case L.VEC3:
        return 3;
      case L.VEC4:
      case L.MAT2:
        return 4;
      case L.MAT3:
        return 9;
      case L.MAT4:
        return 16;
    }
  }
}
class r {
  constructor(e2) {
    this._gltf = e2, this._bufferViews = [], this._isFinalized = false, e2.buffers || (e2.buffers = []), this.index = e2.buffers.length;
    const i2 = { byteLength: -1 };
    e2.buffers.push(i2), this._buffer = i2;
  }
  addBufferView(e2, r2, t2) {
    if (this._finalizePromise)
      throw new Error("Cannot add buffer view after fiinalizing buffer");
    const f2 = new r$1(this, this._gltf, e2, r2, t2);
    return this._bufferViews.push(f2), f2;
  }
  getByteOffset(e2) {
    let i2 = 0;
    for (const r2 of this._bufferViews) {
      if (r2 === e2)
        return i2;
      i2 += r2.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e2) {
    const i2 = [];
    for (const r2 of this._bufferViews) {
      if (e2 && r2 === e2)
        return i2;
      i2.push(r2.finalized);
    }
    return i2;
  }
  getArrayBuffer() {
    if (!this._isFinalized)
      throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e2 = this._getTotalSize(), i2 = new ArrayBuffer(e2);
    let r2 = 0;
    for (const t2 of this._bufferViews)
      t2.writeOutToBuffer(i2, r2), r2 += t2.byteSize;
    return i2;
  }
  finalize() {
    var _a;
    if (this._finalizePromise)
      throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = new Promise((i2) => {
      i2(E$1(this.getViewFinalizePromises()));
    }).then(() => {
      this._isFinalized = true;
      const e2 = this.getArrayBuffer();
      this._buffer.byteLength = e2.byteLength, this._buffer.uri = e2;
    }), (_a = this._gltf.extras) == null ? void 0 : _a.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e2 = 0;
    for (const i2 of this._bufferViews)
      e2 += i2.byteSize;
    return e2;
  }
}
function f$2(t2, n2) {
  if (t2.components)
    for (const e2 of t2.components)
      e2.faces && e2.shading === "smooth" && c(e2, n2);
}
function c(n2, a2) {
  t$1(a2.normal) && (a2.normal = new Float32Array(a2.position.length));
  const i2 = n2.faces, { position: f2, normal: c2 } = a2, m2 = i2.length / 3;
  for (let t2 = 0; t2 < m2; ++t2) {
    const n3 = 3 * i2[3 * t2 + 0], s2 = 3 * i2[3 * t2 + 1], a3 = 3 * i2[3 * t2 + 2], m3 = o$1(l, f2[n3 + 0], f2[n3 + 1], f2[n3 + 2]), h2 = o$1(p$1, f2[s2 + 0], f2[s2 + 1], f2[s2 + 2]), g2 = o$1(x, f2[a3 + 0], f2[a3 + 1], f2[a3 + 2]), u = e$1(h2, h2, m3), j = e$1(g2, g2, m3), y = _(u, u, j);
    c2[n3 + 0] += y[0], c2[n3 + 1] += y[1], c2[n3 + 2] += y[2], c2[s2 + 0] += y[0], c2[s2 + 1] += y[1], c2[s2 + 2] += y[2], c2[a3 + 0] += y[0], c2[a3 + 1] += y[1], c2[a3 + 2] += y[2];
  }
  for (let t2 = 0; t2 < c2.length; t2 += 3)
    o$1(h, c2[t2], c2[t2 + 1], c2[t2 + 2]), z(h, h), c2[t2 + 0] = h[0], c2[t2 + 1] = h[1], c2[t2 + 2] = h[2];
}
function m$1(t2) {
  if (r$2(t2.transform))
    return t2.transform.getOriginPoint(t2.spatialReference);
  const e2 = t2.extent.xmax - t2.extent.width / 2, o2 = t2.extent.ymax - t2.extent.height / 2, r2 = t2.extent.zmin;
  return new w$1({ x: e2, y: o2, z: r2, spatialReference: t2.extent.spatialReference });
}
const l = n(), p$1 = n(), x = n(), h = n();
const O = s$2.getLogger("gltf");
class w {
  constructor(e2, t2, s2) {
    this.params = {}, this._materialMap = new Array(), this._imageMap = new Map(), this._textureMap = new Map(), this.gltf = { asset: { version: "2.0", copyright: e2.copyright, generator: e2.generator }, extras: { options: t2, binChunkBuffer: null, promises: [] } }, s2 && (this.params = s2), this._addScenes(e2);
  }
  _addScenes(e2) {
    this.gltf.scene = e2.defaultScene;
    const t2 = this.gltf.extras, s2 = t2.options.bufferOutputType === E.GLB || t2.options.imageOutputType === A.GLB;
    s2 && (t2.binChunkBuffer = new r(this.gltf)), e2.forEachScene((e3) => {
      this._addScene(e3);
    }), s2 && t2.binChunkBuffer.finalize();
  }
  _addScene(e2) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t2 = {};
    e2.name && (t2.name = e2.name), e2.forEachNode((e3) => {
      t2.nodes || (t2.nodes = []);
      const s2 = this._addNode(e3);
      t2.nodes.push(s2);
    }), this.gltf.scenes.push(t2);
  }
  _addNode(e2) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t2 = {};
    e2.name && (t2.name = e2.name);
    const s2 = e2.translation;
    F(s2, f$3) || (t2.translation = t$2(s2));
    const i2 = e2.rotation;
    K(i2, o$2) || (t2.rotation = r$3(i2));
    const u = e2.scale;
    F(u, l$1) || (t2.scale = t$2(u)), e2.mesh && e2.mesh.vertexAttributes.position ? t2.mesh = this._addMesh(e2.mesh) : e2.forEachNode((e3) => {
      t2.children || (t2.children = []);
      const s3 = this._addNode(e3);
      t2.children.push(s3);
    });
    const f2 = this.gltf.nodes.length;
    return this.gltf.nodes.push(t2), f2;
  }
  _addMesh(e2) {
    this.gltf.meshes || (this.gltf.meshes = []);
    const t2 = { primitives: [] }, i2 = this.gltf.extras, r$12 = i2.options.bufferOutputType === E.GLB;
    let a2;
    a2 = r$12 ? i2.binChunkBuffer : new r(this.gltf), this.params.origin || (this.params.origin = m$1(e2));
    const o2 = M(e2.vertexAttributes, e2.transform, this.params.origin, { geographic: this.params.geographic, unit: "meters" });
    f$2(e2, o2), this._flipYZAxis(o2);
    const n2 = a2.addBufferView(C.FLOAT, L.VEC3, R.ARRAY_BUFFER);
    let l2, c2, h2, u;
    o2.normal && (l2 = a2.addBufferView(C.FLOAT, L.VEC3, R.ARRAY_BUFFER)), e2.vertexAttributes.uv && (c2 = a2.addBufferView(C.FLOAT, L.VEC2, R.ARRAY_BUFFER)), o2.tangent && (h2 = a2.addBufferView(C.FLOAT, L.VEC4, R.ARRAY_BUFFER)), e2.vertexAttributes.color && (u = a2.addBufferView(C.UNSIGNED_BYTE, L.VEC4, R.ARRAY_BUFFER)), n2.startAccessor("POSITION"), l2 && l2.startAccessor("NORMAL"), c2 && c2.startAccessor("TEXCOORD_0"), h2 && h2.startAccessor("TANGENT"), u && u.startAccessor("COLOR_0");
    const _2 = o2.position.length / 3, { position: R$1, normal: T, tangent: E$12 } = o2, { color: M$1, uv: O2 } = e2.vertexAttributes;
    for (let f2 = 0; f2 < _2; ++f2)
      n2.push(R$1[3 * f2 + 0]), n2.push(R$1[3 * f2 + 1]), n2.push(R$1[3 * f2 + 2]), l2 && r$2(T) && (l2.push(T[3 * f2 + 0]), l2.push(T[3 * f2 + 1]), l2.push(T[3 * f2 + 2])), c2 && r$2(O2) && (c2.push(O2[2 * f2 + 0]), c2.push(O2[2 * f2 + 1])), h2 && r$2(E$12) && (h2.push(E$12[4 * f2 + 0]), h2.push(E$12[4 * f2 + 1]), h2.push(E$12[4 * f2 + 2]), h2.push(E$12[4 * f2 + 3])), u && r$2(M$1) && (u.push(M$1[4 * f2 + 0]), u.push(M$1[4 * f2 + 1]), u.push(M$1[4 * f2 + 2]), u.push(M$1[4 * f2 + 3]));
    const w2 = n2.endAccessor(), N2 = this._addAccessor(n2.index, w2);
    let C$12, B, L$1, y, I2;
    if (l2) {
      const e3 = l2.endAccessor();
      C$12 = this._addAccessor(l2.index, e3);
    }
    if (c2) {
      const e3 = c2.endAccessor();
      B = this._addAccessor(c2.index, e3);
    }
    if (h2) {
      const e3 = h2.endAccessor();
      L$1 = this._addAccessor(h2.index, e3);
    }
    if (u) {
      const e3 = u.endAccessor();
      y = this._addAccessor(u.index, e3);
    }
    e2.components && e2.components.length > 0 && e2.components[0].faces ? (I2 = a2.addBufferView(C.UNSIGNED_INT, L.SCALAR, R.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(I2, e2.components, t2, N2, C$12, B, L$1, y)) : this._addMeshVertexNonIndexed(e2.components, t2, N2, C$12, B, L$1, y), n2.finalize(), l2 && l2.finalize(), c2 && c2.finalize(), h2 && h2.finalize(), I2 && I2.finalize(), u && u.finalize(), r$12 || a2.finalize();
    const S = this.gltf.meshes.length;
    return this.gltf.meshes.push(t2), S;
  }
  _flipYZAxis({ position: e2, normal: t2, tangent: s2 }) {
    this._flipYZBuffer(e2, 3), this._flipYZBuffer(t2, 3), this._flipYZBuffer(s2, 4);
  }
  _flipYZBuffer(e2, t2) {
    if (!t$1(e2))
      for (let s2 = 1, i2 = 2; s2 < e2.length; s2 += t2, i2 += t2) {
        const t3 = e2[s2], r2 = e2[i2];
        e2[s2] = r2, e2[i2] = -t3;
      }
  }
  _addMaterial(e2) {
    if (e2 === null)
      return;
    const t2 = this._materialMap.indexOf(e2);
    if (t2 !== -1)
      return t2;
    this.gltf.materials || (this.gltf.materials = []);
    const i2 = {};
    switch (e2.alphaMode) {
      case "mask":
        i2.alphaMode = I.MASK;
        break;
      case "auto":
      case "blend":
        i2.alphaMode = I.BLEND;
    }
    e2.alphaCutoff !== 0.5 && (i2.alphaCutoff = e2.alphaCutoff), e2.doubleSided && (i2.doubleSided = e2.doubleSided), i2.pbrMetallicRoughness = {};
    const r2 = (e3) => e3 ** 2.1, a2 = (e3) => {
      const t3 = e3.toRgba();
      return t3[0] = r2(t3[0] / 255), t3[1] = r2(t3[1] / 255), t3[2] = r2(t3[2] / 255), t3;
    };
    if (r$2(e2.color) && (i2.pbrMetallicRoughness.baseColorFactor = a2(e2.color)), r$2(e2.colorTexture) && (i2.pbrMetallicRoughness.baseColorTexture = { index: this._addTexture(e2.colorTexture) }), r$2(e2.normalTexture) && (i2.normalTexture = { index: this._addTexture(e2.normalTexture) }), e2 instanceof c$1) {
      if (r$2(e2.emissiveTexture) && (i2.emissiveTexture = { index: this._addTexture(e2.emissiveTexture) }), r$2(e2.emissiveColor)) {
        const t3 = a2(e2.emissiveColor);
        i2.emissiveFactor = [t3[0], t3[1], t3[2]];
      }
      r$2(e2.occlusionTexture) && (i2.occlusionTexture = { index: this._addTexture(e2.occlusionTexture) }), r$2(e2.metallicRoughnessTexture) && (i2.pbrMetallicRoughness.metallicRoughnessTexture = { index: this._addTexture(e2.metallicRoughnessTexture) }), i2.pbrMetallicRoughness.metallicFactor = e2.metallic, i2.pbrMetallicRoughness.roughnessFactor = e2.roughness;
    } else
      i2.pbrMetallicRoughness.metallicFactor = 1, i2.pbrMetallicRoughness.roughnessFactor = 1, O.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const o2 = this.gltf.materials.length;
    return this.gltf.materials.push(i2), this._materialMap.push(e2), o2;
  }
  _addTexture(e2) {
    var _a;
    const s2 = (_a = this.gltf.textures) != null ? _a : [];
    return this.gltf.textures = s2, r$4(this._textureMap, e2, () => {
      const t2 = { sampler: this._addSampler(e2), source: this._addImage(e2) }, i2 = s2.length;
      return s2.push(t2), i2;
    });
  }
  _addImage(e2) {
    const t2 = this._imageMap.get(e2);
    if (t2 != null)
      return t2;
    this.gltf.images || (this.gltf.images = []);
    const s2 = {};
    if (e2.url)
      s2.uri = e2.url;
    else {
      const t3 = e2.data;
      s2.extras = t3;
      for (let e3 = 0; e3 < this.gltf.images.length; ++e3)
        if (t3 === this.gltf.images[e3].extras)
          return e3;
      const i3 = this.gltf.extras;
      switch (i3.options.imageOutputType) {
        case A.GLB: {
          const e3 = i3.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE, L.SCALAR), r2 = o$3(t3).then(({ data: e4, type: t4 }) => (s2.mimeType = t4, e4));
          e3.writeAsync(r2).then(() => {
            e3.finalize();
          }), s2.bufferView = e3.index;
          break;
        }
        case A.DataURI:
          s2.uri = i$1(t3);
          break;
        default:
          i3.promises.push(o$3(t3).then(({ data: e3, type: t4 }) => {
            s2.uri = e3, s2.mimeType = t4;
          }));
      }
    }
    const i2 = this.gltf.images.length;
    return this.gltf.images.push(s2), this._imageMap.set(e2, i2), i2;
  }
  _addSampler(e2) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t2 = D.REPEAT, s2 = D.REPEAT;
    if (typeof e2.wrap == "string")
      switch (e2.wrap) {
        case "clamp":
          t2 = D.CLAMP_TO_EDGE, s2 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t2 = D.MIRRORED_REPEAT, s2 = D.MIRRORED_REPEAT;
      }
    else {
      switch (e2.wrap.vertical) {
        case "clamp":
          s2 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s2 = D.MIRRORED_REPEAT;
      }
      switch (e2.wrap.horizontal) {
        case "clamp":
          t2 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t2 = D.MIRRORED_REPEAT;
      }
    }
    const i2 = { wrapS: t2, wrapT: s2 };
    for (let a2 = 0; a2 < this.gltf.samplers.length; ++a2)
      if (JSON.stringify(i2) === JSON.stringify(this.gltf.samplers[a2]))
        return a2;
    const r2 = this.gltf.samplers.length;
    return this.gltf.samplers.push(i2), r2;
  }
  _addAccessor(e2, t2) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s2 = { bufferView: e2, byteOffset: t2.byteOffset, componentType: t2.componentType, count: t2.count, type: t2.type, min: t2.min, max: t2.max, name: t2.name };
    t2.normalized && (s2.normalized = true);
    const i2 = this.gltf.accessors.length;
    return this.gltf.accessors.push(s2), i2;
  }
  _addMeshVertexIndexed(e2, t2, s2, i2, r2, a2, o2, n2) {
    for (const l2 of t2) {
      e2.startAccessor("INDICES");
      for (let s3 = 0; s3 < l2.faces.length; ++s3)
        e2.push(l2.faces[s3]);
      const t3 = e2.endAccessor(), c2 = { attributes: { POSITION: i2 }, indices: this._addAccessor(e2.index, t3), material: this._addMaterial(l2.material) };
      r2 && l2.shading !== "flat" && (c2.attributes.NORMAL = r2), a2 && (c2.attributes.TEXCOORD_0 = a2), o2 && l2.shading !== "flat" && (c2.attributes.TANGENT = o2), n2 && (c2.attributes.COLOR_0 = n2), s2.primitives.push(c2);
    }
  }
  _addMeshVertexNonIndexed(e2, t2, s2, i2, r2, a2, o2) {
    const n2 = { attributes: { POSITION: s2 } };
    i2 && (n2.attributes.NORMAL = i2), r2 && (n2.attributes.TEXCOORD_0 = r2), a2 && (n2.attributes.TANGENT = a2), o2 && (n2.attributes.COLOR_0 = o2), e2 && (n2.material = this._addMaterial(e2[0].material)), t2.primitives.push(n2);
  }
}
class s$1 {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e2) {
    if (this._scenes.includes(e2))
      throw new Error("Scene already added");
    this._scenes.push(e2);
  }
  removeScene(s2) {
    C$1(this._scenes, s2);
  }
  forEachScene(e2) {
    this._scenes.forEach(e2);
  }
}
class d {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(d2) {
    if (this._nodes.includes(d2))
      throw new Error("Node already added");
    this._nodes.push(d2);
  }
  forEachNode(d2) {
    this._nodes.forEach(d2);
  }
}
class i {
  constructor(s2) {
    this.mesh = s2, this.name = "", this.translation = n(), this.rotation = e$2(), this.scale = t$2(l$1), this._nodes = [];
  }
  addNode(s2) {
    if (this._nodes.includes(s2))
      throw new Error("Node already added");
    this._nodes.push(s2);
  }
  forEachNode(s2) {
    this._nodes.forEach(s2);
  }
  set rotationAngles(t2) {
    k(this.rotation, t2[0], t2[1], t2[2]);
  }
}
const f$1 = "model.gltf", p = "model.glb";
function a(a2, m2, c2) {
  var _a, _b;
  const l2 = new w(a2, m2 = m2 || {}, c2);
  let g$1 = l2.params;
  g$1 ? g$1.origin || (g$1.origin = new w$1({ x: -1, y: -1, z: -1 })) : g$1 = { origin: new w$1({ x: -1, y: -1, z: -1 }) };
  const y = g$1.origin, d2 = l2.gltf, j = (_b = (_a = d2.extras) == null ? void 0 : _a.promises) != null ? _b : [];
  let x2 = 1, b = 1, B = null;
  return E$1(j).then(() => {
    const e$12 = { origin: y };
    delete d2.extras;
    const t2 = typeof m2.jsonSpacing == "number" ? m2.jsonSpacing : 4, o2 = JSON.stringify(d2, (t3, r2) => {
      if (t3 !== "extras") {
        if (r2 instanceof ArrayBuffer) {
          if (g(r2))
            switch (m2.imageOutputType) {
              case A.DataURI:
              case A.GLB:
                break;
              case A.External:
              default: {
                const t4 = `img${b}.png`;
                return b++, e$12[t4] = r2, t4;
              }
            }
          switch (m2.bufferOutputType) {
            case E.DataURI:
              return s$3(r2);
            case E.GLB:
              if (B)
                throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
              return void (B = r2);
            case E.External:
            default: {
              const t4 = `data${x2}.bin`;
              return x2++, e$12[t4] = r2, t4;
            }
          }
        }
        return r2;
      }
    }, t2);
    return m2.bufferOutputType === E.GLB || m2.imageOutputType === A.GLB ? e$12[p] = new e(o2, B).buffer : e$12[f$1] = o2, e$12;
  });
}
function m(e2, t2) {
  return a(e2, { bufferOutputType: E.GLB, imageOutputType: A.GLB, jsonSpacing: 0 }, t2);
}
class s {
  constructor(e2, o2) {
    this._file = { type: "model/gltf-binary", data: e2 }, this.origin = o2;
  }
  buffer() {
    return Promise.resolve(this._file);
  }
  download(o2) {
    it(new Blob([this._file.data], { type: this._file.type }), o2);
  }
}
function f(e2, f2) {
  const d$1 = new s$1(), l2 = new d();
  return d$1.addScene(l2), l2.addNode(new i(e2)), m(d$1, f2).then((e3) => new s(e3[p], e3.origin));
}
export { f as toBinaryGLTF };
