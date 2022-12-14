import { a as r$2, t, b3 as o$1, b1 as f$1, eq as s, bg as n$1, h as has, b4 as i$3, D, $ as e$2, a1 as n$3, m as j, ap as u$4 } from "./index.js";
import { s as s$1 } from "./CircularArray.js";
import { h as he, b as E$1, I } from "./Utils2.js";
import { i as i$2, m, o as o$2 } from "./FeatureContainer.js";
import { a as a$3, i as i$1, e as e$1 } from "./BufferPool.js";
import { E, a as a$4 } from "./VertexArrayObject.js";
import { F } from "./enums.js";
import { n as n$4 } from "./schemaUtils.js";
import { o as o$3 } from "./BaseTileRenderer.js";
import { b as f$2 } from "./visualVariablesUtils.js";
import { c as n$2 } from "./WGLContainer.js";
import "vue";
import "./enums2.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./TileContainer.js";
import "./utils.js";
import "./MaterialKey.js";
import "./visualVariablesUtils2.js";
import "./createSymbolSchema.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./util.js";
import "./pixelUtils.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
const e = 6, r$1 = 4294967296;
class o {
  constructor(t2) {
    this._savedCursor = null, this._savedOffset = null, this._head = t2, this._cursor = t2;
  }
  static from(t2) {
    const s2 = i.from(new Float32Array(t2));
    return new o(s2);
  }
  get id() {
    return this._cursor.id;
  }
  get baseZoom() {
    return this._cursor.baseZoom;
  }
  get anchorX() {
    return this._cursor.anchorX;
  }
  get anchorY() {
    return this._cursor.anchorY;
  }
  get directionX() {
    return this._cursor.directionX;
  }
  get directionY() {
    return this._cursor.directionY;
  }
  get size() {
    return this._cursor.size;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  get boundsCount() {
    return this._cursor.boundsCount;
  }
  computedMinZoom() {
    return this._cursor.computedMinZoom();
  }
  setComputedMinZoom(t2) {
    return this._cursor.setComputedMinZoom(t2);
  }
  boundsComputedAnchorX(t2) {
    return this._cursor.boundsComputedAnchorX(t2);
  }
  boundsComputedAnchorY(t2) {
    return this._cursor.boundsComputedAnchorY(t2);
  }
  setBoundsComputedAnchorX(t2, s2) {
    return this._cursor.setBoundsComputedAnchorX(t2, s2);
  }
  setBoundsComputedAnchorY(t2, s2) {
    return this._cursor.setBoundsComputedAnchorY(t2, s2);
  }
  boundsX(t2) {
    return this._cursor.boundsX(t2);
  }
  boundsY(t2) {
    return this._cursor.boundsY(t2);
  }
  boundsWidth(t2) {
    return this._cursor.boundsWidth(t2);
  }
  boundsHeight(t2) {
    return this._cursor.boundsHeight(t2);
  }
  link(s2) {
    if (r$2(s2._head))
      return this._cursor.link(s2._head);
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    var _a;
    const t2 = new o((_a = this._head) == null ? void 0 : _a.copy());
    if (!t2._head)
      return t2;
    let s2 = t2._head, e2 = t2._head._link;
    for (; e2; )
      s2._link = e2.copy(), s2 = e2, e2 = s2._link;
    return t2;
  }
  peekId() {
    var _a;
    return (_a = this._cursor.peekId()) != null ? _a : this._cursor._link.peekId();
  }
  nextId() {
    const t2 = this.id;
    for (; t2 === this.id; )
      if (!this.next())
        return false;
    return true;
  }
  save() {
    this._savedCursor = this._cursor, this._savedOffset = this._cursor._offset;
  }
  restore() {
    this._savedCursor && (this._cursor = this._savedCursor), this._savedOffset != null && (this._cursor._offset = this._savedOffset);
  }
  next() {
    if (!this._cursor)
      return false;
    if (!this._cursor.next()) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link, this._cursor._offset = 0;
    }
    return true;
  }
  lookup(t2) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t2); ) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  delete(s2) {
    let e2 = this._head, r2 = null;
    for (; e2; ) {
      if (e2.delete(s2))
        return e2.isEmpty() && r$2(r2) && (r2._link = e2._link), true;
      r2 = e2, e2 = e2._link;
    }
    return false;
  }
}
class i {
  constructor(t2) {
    this._offset = -1, this._link = null, this._count = 0, this._deletedCount = 0, this._offsets = { instance: null }, this._buffer = t2;
  }
  static from(t2) {
    return new i(new Float32Array(t2));
  }
  isEmpty() {
    return this._deletedCount === this.count;
  }
  get count() {
    return this._count || (this._count = this._computeCount()), this._count;
  }
  get id() {
    return this._buffer[this._offset + 0];
  }
  set id(t2) {
    this._buffer[this._offset + 0] = t2;
  }
  get baseZoom() {
    return this._buffer[this._offset + 1];
  }
  get anchorX() {
    return this._buffer[this._offset + 2];
  }
  get anchorY() {
    return this._buffer[this._offset + 3];
  }
  get directionX() {
    return this._buffer[this._offset + 4];
  }
  get directionY() {
    return this._buffer[this._offset + 5];
  }
  get size() {
    return this._buffer[this._offset + 6];
  }
  get materialKey() {
    return this._buffer[this._offset + 7];
  }
  computedMinZoom() {
    return this._buffer[this._offset + 8];
  }
  setComputedMinZoom(t2) {
    this._buffer[this._offset + 8] = t2;
  }
  get boundsCount() {
    return this._buffer[this._offset + 9];
  }
  boundsComputedAnchorX(t2) {
    return this._buffer[this._offset + 10 + t2 * e + 0];
  }
  boundsComputedAnchorY(t2) {
    return this._buffer[this._offset + 10 + t2 * e + 1];
  }
  setBoundsComputedAnchorX(t2, s2) {
    this._buffer[this._offset + 10 + t2 * e + 0] = s2;
  }
  setBoundsComputedAnchorY(t2, s2) {
    this._buffer[this._offset + 10 + t2 * e + 1] = s2;
  }
  boundsX(t2) {
    return this._buffer[this._offset + 10 + t2 * e + 2];
  }
  boundsY(t2) {
    return this._buffer[this._offset + 10 + t2 * e + 3];
  }
  boundsWidth(t2) {
    return this._buffer[this._offset + 10 + t2 * e + 4];
  }
  boundsHeight(t2) {
    return this._buffer[this._offset + 10 + t2 * e + 5];
  }
  link(t2) {
    let s2 = this;
    for (; s2._link; )
      s2 = s2._link;
    s2._link = t2;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new i(this._buffer);
    return t2._link = this._link, t2._offset = this._offset, t2._deletedCount = this._deletedCount, t2._offsets = this._offsets, t2._count = this._count, t2;
  }
  peekId() {
    const t2 = this._offset + 10 + this.boundsCount * e + 0;
    return t2 >= this._buffer.length ? 0 : this._buffer[t2];
  }
  next() {
    let t2 = 0;
    for (; this._offset < this._buffer.length && t2++ < 100 && (this._offset === -1 ? this._offset = 0 : this._offset += 10 + this.boundsCount * e, this.id === r$1); )
      ;
    return this.id !== r$1 && this._offset < this._buffer.length;
  }
  delete(t2) {
    const s2 = this._offset, e2 = this.lookup(t2);
    if (e2)
      for (this.id = 4294967295, ++this._deletedCount; this.next() && this.id === t2; )
        this.id = 4294967295, ++this._deletedCount;
    return this._offset = s2, e2;
  }
  lookup(t$1) {
    const e2 = this._offset;
    if (t(this._offsets.instance)) {
      this._offsets.instance = new Map();
      const t2 = this.copy();
      t2._offset = -1;
      let s2 = 0;
      for (; t2.next(); )
        t2.id !== s2 && (this._offsets.instance.set(t2.id, t2._offset), s2 = t2.id);
    }
    return !!this._offsets.instance.has(t$1) && (this._offset = this._offsets.instance.get(t$1), this.id !== r$1 || (this._offset = e2, false));
  }
  _computeCount() {
    const t2 = this._offset;
    let s2 = 0;
    for (this._offset = -1; this.next(); )
      s2++;
    return this._offset = t2, s2;
  }
}
class n {
  constructor(t2, e2, i2, n2, a2) {
    this.target = t2, this.geometryType = e2, this.materialKey = i2, this.indexFrom = n2, this.indexCount = a2;
  }
  get indexEnd() {
    return this.indexFrom + this.indexCount;
  }
  extend(t2) {
    this.indexCount += t2;
  }
}
class a$2 {
  constructor(t2, e2) {
    this.geometryType = 0, this._target = t2, this.geometryType = e2;
  }
  static from(e2, i2, n2, d2) {
    const r2 = new a$2(e2, i2);
    if (r$2(d2))
      for (const t2 of d2)
        n2.seekIndex(t2), r2.addRecord(n2);
    else
      for (; n2.next(); )
        r2.addRecord(n2);
    return r2;
  }
  addRecord(t$1) {
    const a2 = this._target, d2 = this.geometryType, r2 = t$1.materialKey;
    let s2 = t$1.indexFrom, o2 = t$1.indexCount;
    const h2 = t$1.vertexFrom, x = t$1.vertexCount;
    if (o2 || (s2 = h2, o2 = x), t(this._head)) {
      const t2 = new n(a2, d2, r2, s2, o2);
      return void (this._head = new a$3(t2));
    }
    let m2 = null, c2 = this._head;
    for (; c2; ) {
      if (s2 < c2.data.indexFrom)
        return this._insert(r2, s2, o2, m2, c2);
      m2 = c2, c2 = c2.next;
    }
    this._insert(r2, s2, o2, m2, null);
  }
  forEach(e2) {
    r$2(this._head) && this._head.forEach(e2);
  }
  *infos() {
    if (r$2(this._head))
      for (const t2 of this._head.values())
        yield t2;
  }
  _insert(a2, d2, r2, s2, o2) {
    if (t(s2) && t(o2)) {
      const t2 = new n(this._target, this.geometryType, a2, d2, r2);
      this._head = new a$3(t2);
    }
    return t(s2) && r$2(o2) ? this._insertAtHead(a2, d2, r2, o2) : r$2(s2) && t(o2) ? this._insertAtEnd(a2, d2, r2, s2) : r$2(s2) && r$2(o2) ? this._insertAtMiddle(a2, d2, r2, s2, o2) : void 0;
  }
  _insertAtHead(t2, e2, a2, d2) {
    const r2 = e2 + a2;
    if (t2 === d2.data.materialKey && r2 === d2.data.indexFrom)
      d2.data.indexFrom = e2, d2.data.indexCount += a2;
    else {
      const r3 = new n(this._target, this.geometryType, t2, e2, a2);
      this._head = new a$3(r3), this._head.next = d2;
    }
  }
  _insertAtEnd(t2, e2, a2, d2) {
    if (d2.data.materialKey === t2 && d2.data.indexEnd === e2)
      d2.data.indexCount += a2;
    else {
      const r2 = new n(this._target, this.geometryType, t2, e2, a2), s2 = new a$3(r2);
      d2.next = s2;
    }
  }
  _insertAtMiddle(t2, e2, a2, d2, r2) {
    const s2 = e2 + a2;
    if (d2.data.materialKey === t2 && d2.data.indexEnd === e2)
      d2.data.indexCount += a2, d2.data.materialKey === r2.data.materialKey && d2.data.indexEnd === r2.data.indexFrom && (d2.data.indexCount += r2.data.indexCount, d2.next = r2.next);
    else if (t2 === r2.data.materialKey && s2 === r2.data.indexFrom)
      r2.data.indexFrom = e2, r2.data.indexCount += a2;
    else {
      const s3 = new n(this._target, this.geometryType, t2, e2, a2), o2 = new a$3(s3);
      d2.next = o2, o2.next = r2;
    }
  }
}
const a$1 = 1.25, u$3 = 32767, d = u$3 << 16 | u$3;
class f {
  constructor(t2, i2, e2, s2) {
    const h2 = i$1.create(i2 * e2 * Uint32Array.BYTES_PER_ELEMENT, s2);
    this.size = i2, this.strideInt = e2, this.bufferType = t2, this.dirty = { start: 1 / 0, end: 0 }, this._gpu = null, this._cpu = h2, this.clear();
  }
  get elementSize() {
    return this._cpu.length / this.strideInt;
  }
  get invalidated() {
    return this.bufferSize && !this._gpu;
  }
  get invalidatedComputeBuffer() {
    return this.bufferSize && !this._gpuComputeTriangles;
  }
  invalidate() {
    this._invalidateTriangleBuffer(), o$1(this._gpu, (t2) => t2.dispose()), this._gpu = null;
  }
  _invalidateTriangleBuffer() {
    o$1(this._gpuComputeTriangles, (t2) => t2.dispose()), this._gpuComputeTriangles = null;
  }
  destroy() {
    o$1(this._gpu, (t2) => t2.dispose()), o$1(this._gpuComputeTriangles, (t2) => t2.dispose()), o$1(this._cpu, (t2) => t2.destroy()), o$1(this._cpu2, (t2) => t2.destroy());
  }
  clear() {
    this.dirty.start = 1 / 0, this.dirty.end = 0, this.freeList = new e$1({ start: 0, end: this._cpu.length / this.strideInt }), this.fillPointer = 0;
  }
  ensure(t2) {
    if (this.maxAvailableSpace() >= t2)
      return;
    if (t2 * this.strideInt > this._cpu.length - this.fillPointer) {
      this.invalidate();
      const i2 = this._cpu.length / this.strideInt, e2 = Math.round((i2 + t2) * a$1), r2 = e2 * this.strideInt;
      this._cpu.expand(r2 * Uint32Array.BYTES_PER_ELEMENT), this.freeList.free(i2, e2 - i2);
    }
  }
  set(t2, i2) {
    this._cpu.array[t2] !== i2 && (this._cpu.array[t2] = i2, this.dirty.start = Math.min(t2, this.dirty.start), this.dirty.end = Math.max(t2, this.dirty.end));
  }
  getGPUBuffer(t$1, e2 = false) {
    if (!this.bufferSize)
      return null;
    if (e2) {
      if (this.bufferType !== "index")
        throw new Error("Tired to get triangle buffer, but target is not an index buffer");
      return t(this._gpuComputeTriangles) && (this._gpuComputeTriangles = this._createComputeBuffer(t$1)), this._gpuComputeTriangles;
    }
    return t(this._gpu) && (this._gpu = this._createBuffer(t$1)), this._gpu;
  }
  getCPUBuffer() {
    if (!this._cpu2) {
      const t2 = this._cpu.slice();
      this._cpu2 = t2;
    }
    return this._cpu2.length !== this._cpu.length && this._cpu2.expand(this._cpu.length * this._cpu.array.BYTES_PER_ELEMENT), this._cpu2.set(this._cpu), this._cpu2;
  }
  get bufferSize() {
    return this._cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(t2, i2, r2, s2) {
    const h2 = r2 * this.strideInt;
    if (!h2)
      return 0;
    const n2 = i2 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, a2 = new Uint32Array(t2, n2, h2), u2 = f$1(this.freeList.firstFit(r2), "First fit region must be defined") * this.strideInt, d2 = h2, f2 = u2 / this.strideInt - i2;
    if (s2 !== 0)
      for (let e2 = 0; e2 < a2.length; e2++)
        a2[e2] += s2;
    return this._cpu.array.set(a2, u2), this.dirty.start = Math.min(this.dirty.start, u2), this.dirty.end = Math.max(this.dirty.end, u2 + d2), this.fillPointer = Math.max(this.fillPointer, u2 + d2), f2;
  }
  free(t2, i2, e2) {
    const r2 = t2 * this.strideInt, s2 = (t2 + i2) * this.strideInt;
    if (e2 === true)
      for (let h2 = t2; h2 !== t2 + i2; h2++)
        this._cpu.array[h2 * this.strideInt] = d;
    this.dirty.start = Math.min(this.dirty.start, r2), this.dirty.end = Math.max(this.dirty.end, s2), this.freeList.free(t2, i2);
  }
  upload() {
    if (this.dirty.end) {
      if (this._invalidateTriangleBuffer(), t(this._gpu))
        return this.dirty.start = 1 / 0, void (this.dirty.end = 0);
      this._gpu.setSubData(this._cpu.array, this.dirty.start, this.dirty.start, this.dirty.end), this.dirty.start = 1 / 0, this.dirty.end = 0;
    }
  }
  _createBuffer(t2) {
    const i2 = F.DYNAMIC_DRAW;
    return this.bufferType === "index" ? E.createIndex(t2, i2, this._cpu.array) : E.createVertex(t2, i2, this._cpu.array);
  }
  _createComputeBuffer(t2) {
    const i2 = F.DYNAMIC_DRAW, e2 = new Uint32Array(this.fillPointer / 3);
    for (let r2 = 0; r2 < this.fillPointer; r2 += 3)
      e2[r2 / 3] = this._cpu.array[r2];
    return E.createIndex(t2, i2, e2);
  }
}
const h = 0, u$2 = 1;
class c$1 {
  constructor(e2, t2) {
    this._vaos = new Map(), this._indicesInvalid = false, this.geometryType = e2, this._stage = t2;
  }
  destroy() {
    for (const [t2, r2] of this._vaos)
      r$2(r2) && r2.dispose(false);
    this._indexBuffer = s(this._indexBuffer), this._vertexBuffer = s(this._vertexBuffer);
  }
  insert(e2, t2, i2) {
    if (!e2.records.byteLength)
      return;
    const s2 = e2.stride;
    if (this._vertexBuffer && this._indexBuffer) {
      const i3 = e2.indices.byteLength / 4, f2 = e2.vertices.byteLength / s2;
      this._indexBuffer.ensure(i3), this._vertexBuffer.ensure(f2);
      const { vertices: n2, indices: d2 } = e2, h2 = i$2.from(e2.records), u2 = this._vertexBuffer.insert(n2, 0, n2.byteLength / s2, 0), c2 = this._indexBuffer.insert(d2, 0, d2.byteLength / 4, u2);
      if (h2.forEach((e3) => {
        e3.indexFrom += c2, e3.vertexFrom += u2;
      }), f$1(this._records, "Expected records to be defined").link(h2), t2)
        this._indicesInvalid = true;
      else if (this._displayList) {
        const e3 = h2.getCursor();
        for (; e3.next(); )
          this._displayList.addRecord(e3);
      }
    } else {
      const r2 = e2.indices.byteLength / 4, i3 = e2.vertices.byteLength / s2, f$12 = s2 / Uint32Array.BYTES_PER_ELEMENT, d2 = this._stage.bufferPool;
      this._records = i$2.from(e2.records), this._indexBuffer = new f("index", r2, 1, d2), this._vertexBuffer = new f("vertex", i3, f$12, d2), this._indexBuffer.insert(e2.indices, 0, e2.indices.byteLength / 4, 0), this._vertexBuffer.insert(e2.vertices, 0, e2.vertices.byteLength / s2, 0), t2 && (this._indicesInvalid = true);
    }
  }
  remove(e2) {
    if (!t(this._records))
      for (const t2 of e2) {
        const e3 = this._records.getCursor();
        if (!e3.lookup(t2))
          continue;
        const r2 = e3.indexFrom, i2 = e3.vertexFrom;
        let s2 = e3.indexCount, f2 = e3.vertexCount;
        for (; e3.next() && e3.id === t2; )
          s2 += e3.indexCount, f2 += e3.vertexCount;
        this._indexBuffer.free(r2, s2), this._vertexBuffer.free(i2, f2, true), this._records.delete(t2);
      }
  }
  getVAO(e2, t$1, r2, f2) {
    if (!this._vertexBuffer || !this._indexBuffer || t(this._records) || !this._vertexBuffer.bufferSize)
      return null;
    const n2 = f2 ? u$2 : h;
    let o2 = this._vaos.get(n2);
    (this._vertexBuffer.invalidated || this._indexBuffer.invalidated || f2 && this._indexBuffer.invalidatedComputeBuffer) && (o$1(o2, (e3) => e3.dispose(false)), o2 = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
    const c2 = this._indexBuffer.getGPUBuffer(e2, n2 === 1), _2 = this._vertexBuffer.getGPUBuffer(e2);
    return o2 || (o2 = new a$4(e2, r2, t$1, { geometry: _2 }, c2), this._vaos.set(n2, o2)), o2;
  }
  forEachCommand(e2) {
    if (!t(this._records)) {
      if (this._sortIndices(this._records), !this._displayList) {
        const e3 = this._cursorIndexOrder;
        this._displayList = a$2.from(this, this.geometryType, this._records.getCursor(), e3);
      }
      this._displayList.forEach(e2);
    }
  }
  _sortIndices(e2) {
    const t2 = !!this._indexBuffer.bufferSize;
    if (!this._indicesInvalid)
      return;
    this._indicesInvalid = false;
    let r2 = 0;
    const i2 = e2.getCursor(), s2 = [], f2 = [], n2 = [];
    for (; i2.next(); )
      f2.push(i2.index), n2.push(i2.sortKey), s2.push(i2.id);
    f2.sort((e3, t3) => {
      const r3 = n2[t3], i3 = n2[e3];
      return i3 === r3 ? s2[t3] - s2[e3] : r3 - i3;
    });
    const o2 = e2.getCursor(), d2 = t2 ? this._indexBuffer.getCPUBuffer() : this._vertexBuffer.getCPUBuffer();
    for (const h2 of f2) {
      if (!o2.seekIndex(h2))
        throw new Error("Expected to find index");
      if (t2) {
        const { indexFrom: e3, indexCount: t3 } = o2;
        o2.indexFrom = r2;
        for (let i3 = 0; i3 < t3; i3++)
          this._indexBuffer.set(r2++, d2.array[e3 + i3]);
      } else {
        const { vertexFrom: e3, vertexCount: t3 } = o2, i3 = this._vertexBuffer.strideInt, s3 = e3 * i3, f3 = s3 + t3 * i3;
        o2.vertexFrom = r2 / i3;
        for (let n3 = s3; n3 < f3; n3++)
          this._vertexBuffer.set(r2++, d2.array[n3]);
      }
    }
    this._cursorIndexOrder = f2, this._displayList = null;
  }
}
const c = 50, u$1 = 4, _ = 100;
let p$1 = 0;
class l extends m {
  constructor(t2, r2, s2, a2, n2, h2) {
    super(t2, r2, s2, a2), this.instanceId = p$1++, this.patchCount = 0, this._renderState = { current: { geometry: new Map(), metrics: null }, next: null, swap: false, swapFrames: 0, locked: false }, this._patches = new s$1(_), this._bufferPatches = new s$1(_), this._lastCommitTime = 0, this.transforms.labelMat2d = n$1(), this._store = n2, this._requestLabelUpdate = h2;
  }
  destroy() {
    super.destroy(), this._renderState.current.geometry.forEach((e2) => e2.destroy()), r$2(this._renderState.next) && this._renderState.next.geometry.forEach((e2) => e2.destroy()), this._renderState.current = null, this._renderState.next = null;
  }
  get labelMetrics() {
    return this._renderState.current.metrics;
  }
  get hasData() {
    return !!this._renderState.current.geometry.size;
  }
  getGeometry(e2) {
    return this._renderState.current.geometry.get(e2);
  }
  patch(e2, t2) {
    this.patchCount++, e2.clear && this._patches.size >= c && this._dropPatches();
    const r2 = e2, s2 = r2.addOrUpdate && this.key.id !== r2.addOrUpdate.tileKeyOrigin;
    t2 && s2 ? this._bufferPatches.enqueue(r2) : (r2.sort = r2.sort && !t2, this._patches.enqueue(r2)), this.requestRender();
  }
  commit(e2) {
    if (this._lastCommitTime !== e2.time) {
      this._lastCommitTime = e2.time;
      for (let e3 = 0; e3 < u$1; e3++)
        this._updateMesh(), this.isReady && this._updateBufferMesh();
      this._renderState.swap && (this._swapRenderStates(), this.requestRender());
    }
  }
  lock() {
    this._renderState.locked = true;
  }
  unlock() {
    this._renderState.locked = false, this._flushUpdates(), this._swap();
  }
  _swapRenderStates() {
    if (this._renderState.next) {
      if (this._renderState.locked)
        return this._renderState.swap = true, void this.requestRender();
      this._renderState.swap = true, this._swap();
    }
  }
  _swap() {
    this._renderState.swap && (this._renderState.swap = false, r$2(this._renderState.next) && (this._renderState.current.geometry.forEach((e2) => e2.destroy()), this._renderState.current = this._renderState.next, this._renderState.next = null, this._requestLabelUpdate()));
  }
  _flushUpdates() {
    let e2 = this._patches.maxSize;
    for (; this._patches.size && e2--; )
      this._updateMesh(), this._swap();
  }
  _updateBufferMesh() {
    const e2 = this._bufferPatches.peek();
    if (!r$2(e2) || !e2.clear || this._renderState.next === null)
      for (; this._bufferPatches.size; ) {
        const e3 = this._bufferPatches.dequeue();
        r$2(e3) && this._patchBuffer(e3);
      }
  }
  _updateMesh() {
    var _a, _b, _c, _d;
    const e2 = this._patches.dequeue();
    if (r$2(e2)) {
      if (has("esri-2d-update-debug")) {
        const t2 = e2, r2 = (_a = t2.addOrUpdate) == null ? void 0 : _a.tileKeyOrigin, s2 = this.key.id === r2 ? "SELF" : r2;
        let i2 = "";
        for (let e3 = 0; e3 < 5; e3++)
          i2 += ((_d = (_c = (_b = t2.addOrUpdate) == null ? void 0 : _b.data[e3]) == null ? void 0 : _c.records) == null ? void 0 : _d.byteLength) ? 1 : 0;
        console.debug(this.key.id, "FeatureTile:patch", `[clear: ${t2.clear} origin: ${s2}, end:${t2.end} data:${i2}]`);
      }
      e2.clear === true && (r$2(this._renderState.next) && (this._renderState.next.geometry.forEach((e3) => e3.destroy()), this._renderState.next = null), this._renderState.next = { geometry: new Map(), metrics: null }, has("esri-2d-update-debug") && console.debug(this.key.id, "FeatureTile:_updateMesh - Creating new renderState")), this.requestRender(), this._patch(e2), e2.end && (has("esri-2d-update-debug") && console.debug(this.key.id, "FeatureTile:_updateMesh - Encountered end message"), this.ready(), this._swapRenderStates());
    }
  }
  _patch(e2) {
    he((t2) => {
      this._remove(t2, e2.remove), this._insert(t2, e2, false);
    });
  }
  _patchBuffer(e2) {
    he((t2) => {
      this._insert(t2, e2, true);
    });
  }
  _insert(e2, t$1, i2) {
    var _a;
    try {
      const n2 = i$3(this._renderState.next, this._renderState.current), h2 = (_a = t$1.addOrUpdate) == null ? void 0 : _a.data[e2], d2 = n2.geometry;
      if (t(h2))
        return;
      d2.has(e2) || (has("esri-2d-update-debug") && console.debug(this.key.id, `FeatureTile:_insert - Creating geometry buffer ${e2}`), d2.set(e2, new c$1(e2, this.stage))), has("esri-2d-update-debug") && console.debug(this.key.id, `FeatureTile:_insert - Inserting into ${e2}, version=${t$1.addOrUpdate.version} stride=${h2.stride}`), d2.get(e2).insert(h2, t$1.sort, i2), e2 === E$1.LABEL && this._insertLabelMetrics(t$1.type, h2.metrics, t$1.clear);
    } catch (n2) {
    }
  }
  _insertLabelMetrics(e2, t$1, i2) {
    const a2 = i$3(this._renderState.next, this._renderState.current);
    if (t(t$1))
      return;
    const n2 = o.from(t$1);
    if (t(a2.metrics))
      a2.metrics = n2;
    else {
      if (e2 === "update") {
        const e3 = n2.getCursor();
        for (; e3.next(); )
          a2.metrics.delete(e3.id);
      }
      a2.metrics.link(n2);
    }
  }
  _remove(e2, t2) {
    const s2 = i$3(this._renderState.next, this._renderState.current).geometry.get(e2);
    t2 && t2.length && s2 && (s2.remove(t2), this._removeLabelMetrics(t2));
  }
  _removeLabelMetrics(e2) {
    const { metrics: t$1 } = i$3(this._renderState.next, this._renderState.current);
    if (!t(t$1) && e2.length)
      for (const r2 of e2)
        for (; t$1.delete(r2); )
          ;
  }
  _dropPatches() {
    const e2 = new Array();
    let t$1 = false;
    for (; this._patches.size; ) {
      const r2 = this._patches.dequeue();
      if (t(r2))
        break;
      if (r2.clear) {
        if (t$1)
          break;
        t$1 = true;
      }
      e2.push(r2);
    }
    this._patches.clear(), e2.forEach((e3) => this._patches.enqueue(e3));
  }
}
const r = has("featurelayer-order-by-server-enabled");
class a extends o$2 {
  constructor(e2, t2, s2, i2) {
    super(e2), this._hitTestsRequests = [], this._layer = s2, this._layerView = t2, this._onUpdate = i2;
  }
  renderChildren(e2) {
    if (this.attributeView.update(), this.hasAnimation) {
      e2.painter.effects.integrate.draw(e2, e2.attributeView);
    }
    super.renderChildren(e2);
  }
  hasEmptyAttributeView() {
    return this.attributeView.isEmpty();
  }
  isUpdating() {
    return this.attributeView.isUpdating();
  }
  hitTest(t2) {
    let s2 = this._hitTestsRequests.find(({ x: e2, y: s3 }) => e2 === t2.x && s3 === t2.y);
    const i2 = D();
    return s2 ? s2.resolvers.push(i2) : (s2 = { x: t2.x, y: t2.y, resolvers: [i2] }, this._hitTestsRequests.push(s2)), this.requestRender(), i2.promise;
  }
  onTileData(e2, t2) {
    const s2 = r && "orderBy" in this._layer && this._layer.orderBy, i2 = (s2 == null ? void 0 : s2.length) && !s2[0].valueExpression && s2[0].field, a2 = s2 && this._layerView.orderByFields === i2;
    e2.patch(t2, a2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  onTileError(e2) {
    this.contains(e2) || this.addChild(e2);
  }
  updateTransitionProperties(e2, t2) {
    super.updateTransitionProperties(e2, t2), this._layerView.featureEffectView.transitionStep(e2, t2), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(e2) {
    const { minScale: t2, maxScale: s2 } = this._layer, i2 = e2.state.scale;
    i2 <= (t2 || 1 / 0) && i2 >= s2 && super.doRender(e2);
  }
  afterRender(e2) {
    super.afterRender(e2), this._hitTestsRequests.length && this.requestRender();
  }
  onAttributeStoreUpdate() {
    this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this._onUpdate();
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  setStencilReference(e2) {
    const { rendererSchema: t2 } = e2.rendererInfo;
    if ((t2 == null ? void 0 : t2.type) === "dot-density" && (t2 == null ? void 0 : t2.dotSize) > 1 || (t2 == null ? void 0 : t2.type) === "heatmap") {
      const e3 = 1;
      for (const t3 of this.children)
        t3.stencilRef = t3.key.level + e3;
    } else
      super.setStencilReference(e2);
  }
  get hasLabels() {
    if ("sublayers" in this._layer)
      return this._layer.sublayers.some((e3) => e3.labelingInfo && e3.labelingInfo.length && e3.labelsVisible);
    const e2 = this._layer.featureReduction, t2 = e2 && "labelingInfo" in e2 && e2.labelsVisible && e2.labelingInfo && e2.labelingInfo.length;
    return this._layer.labelingInfo && this._layer.labelingInfo.length && this._layer.labelsVisible || !!t2;
  }
  prepareRenderPasses(e2) {
    const s2 = e2.registerRenderPass({ name: "label", brushes: [n$2.label], target: () => this.hasLabels ? this.children : null, drawPhase: I.LABEL | I.LABEL_ALPHA }), r2 = e2.registerRenderPass({ name: "geometry", brushes: [n$2.fill, n$2.dotDensity, n$2.line, n$2.marker, n$2.heatmap, n$2.pieChart, n$2.text], target: () => this.children, enableDefaultDraw: () => !this._layerView.featureEffectView.hasEffects, effects: [{ apply: e2.effects.outsideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.excludedEffects }, { apply: e2.effects.insideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.includedEffects }, { apply: e2.effects.hittest, enable: () => !!this._hitTestsRequests.length, args: () => this._hitTestsRequests }] }), a2 = e2.registerRenderPass({ name: "highlight", brushes: [n$2.fill, n$2.dotDensity, n$2.line, n$2.marker, n$2.pieChart, n$2.text], target: () => this.children, drawPhase: I.HIGHLIGHT, enableDefaultDraw: () => false, effects: [{ apply: e2.effects.highlight, enable: () => !!this._layerView.hasHighlight() }] });
    return [...super.prepareRenderPasses(e2), r2, a2, s2];
  }
}
let u = class extends o$3 {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  install(e2) {
    const t2 = () => this.notifyChange("updating"), i2 = new a(this.tileInfoView, this.layerView, this.layer, t2);
    this.featuresView = i2, e2.addChild(i2);
  }
  uninstall(e2) {
    e2.removeChild(this.featuresView), this.featuresView.destroy(), this.featuresView = null;
  }
  fetchResource(e2, i2) {
    const { url: s2 } = e2, r2 = this.featuresView.stage;
    try {
      return r2.resourceManager.fetchResource(s2, { signal: i2.signal });
    } catch (a2) {
      return j(a2) ? Promise.resolve({ width: 0, height: 0 }) : Promise.reject(a2);
    }
  }
  isUpdating() {
    var _a;
    const e2 = super.isUpdating(), t2 = !this.featuresView || this.featuresView.isUpdating(), i2 = (_a = this.featuresView) == null ? void 0 : _a.hasEmptyAttributeView(), s2 = e2 || t2 || e2 && i2;
    return has("esri-2d-log-updating") && console.log(`Updating SymbolTileRenderer ${s2}
  -> updatingTiles ${e2}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${t2}`), s2;
  }
  hitTest(e2) {
    return this.featuresView.hitTest(e2);
  }
  supportsRenderer(e2) {
    return e2 != null && ["simple", "class-breaks", "unique-value", "dot-density", "dictionary", "heatmap", "pie-chart"].includes(e2.type);
  }
  onConfigUpdate(e2) {
    let t2 = null;
    if (e2 && "visualVariables" in e2) {
      const i2 = (n$4(e2).visualVariables || []).map((e3) => {
        const t3 = e3.clone();
        return "normalizationField" in e3 && (t3.normalizationField = null), e3.valueExpression && e3.valueExpression !== "$view.scale" && (t3.valueExpression = null, t3.field = "nop"), t3;
      });
      t2 = f$2(i2);
    }
    this.featuresView.setRendererInfo(e2, t2, this.layerView.featureEffect);
  }
  onTileData(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    t2 && e2.data && this.featuresView.onTileData(t2, e2.data), this.layerView.view.labelManager.requestUpdate();
  }
  onTileError(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    t2 && this.featuresView.onTileError(t2);
  }
  forceAttributeTextureUpload() {
    this.featuresView.attributeView.forceTextureUpload();
  }
  lockGPUUploads() {
    this.featuresView.attributeView.lockTextureUpload(), this.tiles.forEach((e2) => e2.lock());
  }
  unlockGPUUploads() {
    this.featuresView.attributeView.unlockTextureUpload(), this.tiles.forEach((e2) => e2.unlock());
  }
  async getMaterialItems(e2) {
    return this.featuresView.getMaterialItems(e2);
  }
  invalidateLabels() {
    this.featuresView.hasLabels && this.layerView.view.labelManager.requestUpdate();
  }
  createTile(e2) {
    const t2 = this.tileInfoView.getTileBounds(u$4(), e2), i2 = () => this.layerView.view.labelManager.requestUpdate(), a2 = this.tileInfoView.getTileResolution(e2.level), o2 = this.featuresView.attributeView;
    return new l(e2, a2, t2[0], t2[3], o2, i2);
  }
  disposeTile(e2) {
    this.featuresView.removeChild(e2), e2.destroy(), this.layerView.view.labelManager.requestUpdate();
  }
};
u = e$2([n$3("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")], u);
const p = u;
export { p as default };
