var __defProp = Object.defineProperty;
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
import { a as r$3, ao as R, ap as u$1, aq as v$1, k as e$7, ar as c$2, as as et, at as y$4, t as t$7, au as r$4, av as q, aw as C, ax as ht, ay as at, az as $, aA as t$8, aB as i$2, aC as U$2, aD as E$1, aE as e$8, aF as c$3, A as u$2, aG as s$3, $ as e$9, a0 as y$5, a1 as n$3, h as has, Y as a$2, Z as m$1, aH as l$2, R as l$4, l as f$4, aI as s$4, aJ as l$5, m as j, aK as k, aL as w$1, aM as f$5, aN as u$3, aO as g$6, aP as s$5, aQ as l$6, aR as O$1, aS as j$1, aT as N, F as e$a, aU as r$7, aV as i$3, M, aW as t$9, I as f$7, J as h$2 } from "./index.js";
import { d as ae$1, V, Q, n as n$5 } from "./ExpandedCIM.js";
import { p as p$2 } from "./normalizeUtilsSync.js";
import { f as f$6, g as g$5 } from "./projectionSupport.js";
import { U as U$3 } from "./enums2.js";
import { K, X, c as ae, i as ie$1, s as se$1, W, G, h as he, S, g as ge } from "./Utils2.js";
import { a as a$1, E } from "./VertexArrayObject.js";
import { F, R as R$1, E as E$3, C as C$1, I as I$1 } from "./enums.js";
import { m, i as i$1, o as o$5 } from "./FeatureContainer.js";
import { U } from "./MaterialKey.js";
import { a as e$6, l as l$1, x as x$2, b as l$3, n as n$4, E as E$2 } from "./Matcher.js";
import { w, $ as $$1 } from "./schemaUtils.js";
import { c as c$1, b as b$3, r as r$5, v as v$2 } from "./ComputedAttributeStorage.js";
import { O, U as U$1 } from "./quantizationUtils.js";
import { createSymbolSchema as o$4 } from "./createSymbolSchema.js";
import { r as r$8 } from "./vec3f32.js";
import { r as r$6 } from "./utils.js";
const t$6 = -1;
class e$5 {
  constructor() {
    this._dirties = [{ vertexFrom: t$6, vertexCount: t$6, indexFrom: t$6, indexCount: t$6, allDirty: false }, { vertexFrom: t$6, vertexCount: t$6, indexFrom: t$6, indexCount: t$6, allDirty: false }, { vertexFrom: t$6, vertexCount: t$6, indexFrom: t$6, indexCount: t$6, allDirty: false }, { vertexFrom: t$6, vertexCount: t$6, indexFrom: t$6, indexCount: t$6, allDirty: false }, { vertexFrom: t$6, vertexCount: t$6, indexFrom: t$6, indexCount: t$6, allDirty: false }];
  }
  hasDirty() {
    return this._dirties.some((e2) => e2.indexCount !== t$6 || e2.allDirty);
  }
  markAllClean() {
    for (const e2 of this._dirties)
      e2.indexFrom = t$6, e2.indexCount = t$6, e2.vertexFrom = t$6, e2.vertexCount = t$6, e2.allDirty = false;
  }
  markAllDirty() {
    for (const t2 of this._dirties)
      t2.allDirty = true;
  }
  forEach(e2) {
    for (let r2 = 0; r2 < this._dirties.length; ++r2) {
      const { indexCount: i2, indexFrom: o2, vertexCount: n2, vertexFrom: x2, allDirty: l2 } = this._dirties[r2], s2 = {};
      let d2, m2 = false;
      (l2 || x2 !== t$6 && n2 > 0) && (s2.geometry = { count: n2, from: x2, allDirty: l2 }, m2 = true), (l2 || o2 !== t$6 && i2 > 0) && (d2 = { count: i2, from: o2, allDirty: l2 }, m2 = true), m2 && e2({ indices: d2, vertices: s2 }, r2);
    }
  }
  markDirtyIndices(e2, r2, i2) {
    const o2 = this._dirties[e2], n2 = r2, x2 = i2;
    if (!o2.allDirty)
      if (o2.indexCount !== t$6) {
        const t2 = Math.min(o2.indexFrom, n2), e3 = Math.max(o2.indexFrom + o2.indexCount, n2 + x2) - t2;
        o2.indexFrom = t2, o2.indexCount = e3;
      } else
        o2.indexFrom = n2, o2.indexCount = x2;
  }
  markDirtyVertices(e2, r2, i2, o2) {
    const n2 = this._dirties[e2], x2 = i2, l2 = o2;
    if (!n2.allDirty)
      if (n2.vertexCount !== t$6) {
        const t2 = Math.min(n2.vertexFrom, x2), e3 = Math.max(n2.vertexFrom + n2.vertexCount, x2 + l2) - t2;
        n2.vertexFrom = t2, n2.vertexCount = e3;
      } else
        n2.vertexFrom = x2, n2.vertexCount = l2;
  }
}
class e$4 {
  constructor(e2) {
    this._largestRange = null, this._parent = e2, this._updateLargestRange();
  }
  get largestRange() {
    return this._largestRange;
  }
  rangeCreated(e2) {
    (!this._largestRange || e2.count > this._largestRange.count) && (this._largestRange = e2);
  }
  rangeResized(e2, t2) {
    e2 === this._largestRange ? e2.count < t2 && this._updateLargestRange() : (!this._largestRange || e2.count > this._largestRange.count) && (this._largestRange = e2);
  }
  findBestRange(e2) {
    let t2 = this._parent._freeHead, n2 = null;
    for (; t2 !== null; )
      t2.count >= e2 && (!n2 || t2.count - e2 < n2.count - e2) && (n2 = t2), t2 = t2.next;
    return n2;
  }
  findAdjacentRanges(e2, t2) {
    let n2 = true, r2 = false, s2 = null, o2 = this._parent._freeHead;
    for (; n2 && !r2; ) {
      const a2 = s2 !== null ? s2.from + s2.count : 0, l2 = o2 !== null ? o2.from : this._parent._size;
      e2 >= a2 && e2 + t2 <= l2 ? (n2 = false, r2 = true) : o2 !== null ? (s2 = o2, o2 = o2.next) : n2 = false;
    }
    return [s2, o2];
  }
  _updateLargestRange() {
    let e2 = null, t2 = this._parent._freeHead;
    for (; t2 !== null; )
      (!e2 || t2.count > e2.count) && (e2 = t2), t2 = t2.next;
    this._largestRange = e2;
  }
}
class t$5 {
  constructor(t2, n2) {
    this._allocated = 0, this._size = t2, this._freeHead = t2 > 0 ? { from: 0, count: t2, prev: null, next: null } : null, this._bookKeeper = n2 || new e$4(this), this._freeHead && this._bookKeeper.rangeCreated(this._freeHead);
  }
  allocate(e2) {
    const n2 = this._bookKeeper.findBestRange(e2);
    if (n2 === null)
      return -1;
    const r2 = n2.from, s2 = n2.count;
    if (n2.from += e2, n2.count -= e2, this._bookKeeper.rangeResized(n2, r2, s2), this._allocated += e2, n2.count === 0) {
      const e3 = n2.prev !== null ? this._freeHead : n2.next;
      t$5._removeRange(n2), this._freeHead = e3;
    }
    return r2;
  }
  free(e2, n2) {
    const [r2, s2] = this._bookKeeper.findAdjacentRanges(e2, n2), o2 = { from: e2, count: n2, prev: r2, next: s2 };
    if (r2 !== null && (r2.next = o2), s2 !== null && (s2.prev = o2), this._bookKeeper.rangeCreated(o2), this._allocated -= n2, s2 !== null && o2.from + o2.count === s2.from) {
      const e3 = o2.from, n3 = o2.count;
      t$5._fuse(o2, s2), t$5._removeRange(s2), this._bookKeeper.rangeResized(o2, e3, n3), this._bookKeeper.rangeResized(s2, void 0, 0);
    }
    if (r2 !== null && r2.from + r2.count === o2.from) {
      const e3 = r2.from, n3 = r2.count;
      t$5._fuse(r2, o2), t$5._removeRange(o2), this._bookKeeper.rangeResized(r2, e3, n3), this._bookKeeper.rangeResized(o2, void 0, 0);
    }
    this._freeHead = o2.prev !== null ? this._freeHead : o2;
  }
  get fragmentation() {
    const e2 = this._size - this._allocated;
    if (e2 === 0)
      return 0;
    return 1 - this._bookKeeper.largestRange.count / e2;
  }
  static _removeRange(e2) {
    e2.prev !== null ? e2.next !== null ? (e2.prev.next = e2.next, e2.next.prev = e2.prev) : e2.prev.next = null : e2.next !== null && (e2.next.prev = null);
  }
  static _fuse(e2, t2) {
    e2.count += t2.count, e2.next = t2.next, t2.from += t2.count, t2.count = 0, t2.next !== null && (t2.next.prev = e2);
  }
}
const s$2 = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"];
function o$3(e2) {
  const t2 = e2.getStrides(), r2 = {};
  for (let i2 = 0; i2 < t2.length; i2++)
    r2[s$2[i2]] = t2[i2];
  return r2;
}
const n$2 = 0.5;
class d$3 {
  constructor(r2, i2, s2, o2) {
    this._strides = r2, this._displayList = i2, this._freeListsAndStorage = {}, this._dirtyMap = null, this._dirtyMap = s2;
    for (const n2 in r2) {
      this._freeListsAndStorage[n2] = { vtxFreeList: o2 ? new t$5(o2) : null, idxFreeList: o2 ? new t$5(o2) : null, vertexBuffers: {}, indexBuffer: o2 ? new Uint32Array(o2) : null };
      for (const e2 in r2[n2])
        this._freeListsAndStorage[n2].vertexBuffers[e2] = { data: o2 ? K(o2, r2[n2][e2]) : null, stride: r2[n2][e2] };
    }
  }
  static fromTileData(t2, i2) {
    const n2 = o$3(t2), a2 = [0, 0, 0, 0, 0], x2 = [0, 0, 0, 0, 0], u2 = t2.tileDisplayData.displayObjects;
    for (const e2 of u2)
      for (const t3 of e2.displayRecords)
        a2[t3.geometryType] = Math.max(a2[t3.geometryType], t3.vertexFrom + t3.vertexCount), x2[t3.geometryType] = Math.max(x2[t3.geometryType], t3.indexFrom + t3.indexCount);
    const f2 = new d$3(n2, t2.tileDisplayData.displayList, i2, null);
    for (let o2 = 0; o2 < t2.tileBufferData.geometries.length; ++o2) {
      const i3 = a2[o2], n3 = x2[o2], d2 = t2.tileBufferData.geometries[o2], u3 = s$2[o2], l2 = f2._storageFor(u3), c2 = t2.tileBufferData.geometries[o2].indexBuffer;
      let m2;
      l2.indexBuffer = c2, l2.idxFreeList = new t$5(c2.length), l2.idxFreeList.allocate(n3);
      for (const e2 in d2.vertexBuffer) {
        const i4 = t2.tileBufferData.geometries[o2].vertexBuffer[e2];
        l2.vertexBuffers[e2].data = i4.data, l2.vertexBuffers[e2].stride = i4.stride;
        const s2 = X(i4.stride), n4 = i4.data.length * s2 / i4.stride;
        m2 || (m2 = n4);
      }
      l2.vtxFreeList = new t$5(m2), l2.vtxFreeList.allocate(i3);
    }
    return f2;
  }
  delete(e2) {
    const t2 = s$2[e2.geometryType];
    this._freeVertices(t2, e2.vertexFrom, e2.vertexCount), this._freeIndices(t2, e2.indexFrom, e2.indexCount), this._displayList.removeFromList(e2), e2.vertexFrom = void 0, e2.indexFrom = void 0;
  }
  setMeshData(e2, t2, r2, o2, n2) {
    const d2 = s$2[e2.geometryType];
    let a2, x2;
    e2.meshData = null, e2.vertexFrom === void 0 ? (x2 = t2.vertexCount, a2 = this._allocateVertices(d2, x2)) : t2.vertexCount > e2.vertexCount ? (this._freeVertices(d2, e2.vertexFrom, e2.vertexCount), x2 = t2.vertexCount, a2 = this._allocateVertices(d2, x2)) : t2.vertexCount === e2.vertexCount ? (a2 = e2.vertexFrom, x2 = e2.vertexCount) : (this._freeVertices(d2, e2.vertexFrom + t2.vertexCount, e2.vertexCount - t2.vertexCount), a2 = e2.vertexFrom, x2 = t2.vertexCount);
    let u2, f2, l2, c2 = true;
    if (e2.indexFrom === void 0 ? (u2 = n2, l2 = t2.indexCount, f2 = this._allocateIndices(d2, l2)) : t2.indexCount > e2.indexCount ? (u2 = this._displayList.removeFromList(e2), this._freeIndices(d2, e2.indexFrom, e2.indexCount), l2 = t2.indexCount, f2 = this._allocateIndices(d2, l2)) : t2.indexCount === e2.indexCount ? (c2 = false, f2 = e2.indexFrom, l2 = e2.indexCount) : (u2 = this._displayList.removeFromList(e2), this._freeIndices(d2, e2.indexFrom + t2.indexCount, e2.indexCount - t2.indexCount), f2 = e2.indexFrom, l2 = t2.indexCount), a2 !== -1 && f2 !== -1) {
      const s2 = this._storageFor(d2);
      if (ae(a2, f2, s2.vertexBuffers, s2.indexBuffer, t2, r2, o2), e2.vertexFrom = a2, e2.indexFrom = f2, e2.vertexCount = t2.vertexCount, e2.indexCount = t2.indexCount, this._dirtyMap) {
        this._dirtyMap.markDirtyIndices(e2.geometryType, e2.indexFrom, e2.indexCount);
        for (const t3 in r2)
          this._dirtyMap.markDirtyVertices(e2.geometryType, t3, e2.vertexFrom, e2.vertexCount);
      }
      return c2 && this._displayList.addToList(e2, u2), true;
    }
    return a2 !== -1 && this._freeVertices(d2, a2, x2), f2 !== -1 && this._freeIndices(d2, f2, l2), e2.setMeshDataFromBuffers(t2, r2, o2), e2.vertexFrom = void 0, e2.vertexCount = 0, e2.indexFrom = void 0, e2.indexCount = 0, false;
  }
  tryAddMeshData(e2, t2) {
    const r2 = t2.vertexBuffer, o2 = t2.indexBuffer, n2 = s$2[e2.geometryType], d2 = this._allocateVertices(n2, e2.vertexCount);
    if (d2 === -1)
      return this._freeVertices(n2, d2, e2.vertexCount), false;
    const a2 = this._allocateIndices(n2, e2.indexCount);
    if (a2 === -1)
      return this._freeVertices(n2, d2, e2.vertexCount), this._freeIndices(n2, a2, e2.indexCount), false;
    const x2 = this._storageFor(n2);
    if (ae(d2, a2, x2.vertexBuffers, x2.indexBuffer, e2, r2, o2), e2.vertexFrom = d2, e2.indexFrom = a2, this._dirtyMap) {
      this._dirtyMap.markDirtyIndices(e2.geometryType, e2.indexFrom, e2.indexCount);
      for (const t3 in r2)
        this._dirtyMap.markDirtyVertices(e2.geometryType, t3, d2, e2.vertexCount);
    }
    return this._displayList.addToList(e2), true;
  }
  _allocateVertices(e2, t2) {
    const r2 = this._storageFor(e2), i2 = r2.vtxFreeList.allocate(t2);
    if (i2 === -1)
      return -1;
    return r2.vtxFreeList.fragmentation > n$2 ? -1 : i2;
  }
  _freeVertices(e2, t2, r2) {
    this._storageFor(e2).vtxFreeList.free(t2, r2);
  }
  _freeIndices(e2, t2, r2) {
    this._storageFor(e2).idxFreeList.free(t2, r2);
  }
  _allocateIndices(e2, t2) {
    const r2 = this._storageFor(e2), i2 = r2.idxFreeList.allocate(t2);
    if (i2 === -1)
      return -1;
    return r2.idxFreeList.fragmentation > n$2 ? -1 : i2;
  }
  _storageFor(e2) {
    return this._freeListsAndStorage[e2];
  }
  _stridesFor(e2, t2) {
    return this._strides[e2][t2];
  }
}
class f$3 {
  constructor(a2) {
    this.geometryMap = ie$1(() => ({ indexBuffer: E.createIndex(a2, F.STATIC_DRAW), vao: null }), (e2, s2) => ({ vertexBuffer: E.createVertex(a2, se$1[s2]) }));
  }
  dispose() {
    for (let e2 = 0; e2 < 5; e2++) {
      const t2 = this.geometryMap[e2];
      if (t2) {
        t2.data.vao && t2.data.vao.dispose(false), t2.data.indexBuffer && t2.data.indexBuffer.dispose();
        for (const e3 in t2.buffers)
          t2.buffers[e3] && t2.buffers[e3].data.vertexBuffer.dispose();
      }
    }
  }
  get(e2) {
    const t2 = this.geometryMap[e2];
    return { getVAO(e3, r2, s2) {
      if (!t2.data.vao) {
        const f2 = {};
        for (const e4 in t2.buffers)
          f2[e4] = t2.buffers[e4].data.vertexBuffer;
        t2.data.vao = new a$1(e3, s2, r2, f2, t2.data.indexBuffer);
      }
      return t2.data.vao;
    } };
  }
  has(e2) {
    return this.geometryMap[e2] != null;
  }
  upload(e2, t2) {
    t2.forEach((t3, r2) => {
      this._upload(t3, r2, e2);
    });
  }
  _upload(e2, t2, r2) {
    if (e2.indices && (e2.indices.allDirty ? this._uploadIndices(r2, t2) : e2.indices.from != null && e2.indices.count != null && this._uploadIndices(r2, t2, e2.indices.from, e2.indices.count)), e2.vertices) {
      const s2 = e2.vertices;
      for (const e3 in s2) {
        const a2 = s2[e3];
        a2.allDirty ? this._uploadVertices(r2, t2, e3) : a2.from != null && a2.count != null && this._uploadVertices(r2, t2, e3, a2.from, a2.count);
      }
    }
  }
  _uploadVertices(e2, t2, r2, s2, a2) {
    const f2 = this.geometryMap[t2];
    if (!f2)
      return;
    const o2 = e2.geometries[t2].vertexBuffer[r2];
    if (!o2)
      return;
    const { data: i2, stride: n2 } = o2;
    if (f2.buffers[r2] && i2.length > 0) {
      const e3 = n2 / i2.BYTES_PER_ELEMENT;
      s2 != null && a2 != null ? f2.buffers[r2].data.vertexBuffer.setSubData(i2, s2 * e3, s2 * e3, (s2 + a2) * e3) : f2.buffers[r2].data.vertexBuffer.setData(i2);
    }
  }
  _uploadIndices(e2, t2, r2, s2) {
    const a2 = this.geometryMap[t2];
    if (!a2)
      return;
    const f2 = e2.geometries[t2].indexBuffer;
    a2.data.indexBuffer && f2.length > 0 && (r2 != null && s2 != null ? a2.data.indexBuffer.setSubData(f2, r2, r2, r2 + s2) : a2.data.indexBuffer.setData(f2));
  }
}
class a extends m {
  constructor() {
    super(...arguments), this._data = null, this._displayList = null, this._lastCommitTime = 0, this._hasData = false, this._invalidated = false, this._wglBuffers = null, this._dirtyMap = new e$5();
  }
  destroy() {
    super.destroy(), this.clear();
  }
  get hasData() {
    return !!this._hasData;
  }
  get displayObjects() {
    var _a2;
    return (_a2 = this._displayObjects) != null ? _a2 : [];
  }
  getGeometry(t2) {
    return this._wglBuffers && this._wglBuffers.has(t2) ? this._wglBuffers.get(t2) : null;
  }
  getDisplayList() {
    return this._displayList;
  }
  patch(e2) {
    if (e2.clear === true)
      return this.clear(), void (this._hasData = false);
    const i2 = e2.addOrUpdate, a2 = e2.remove;
    !this._data && i2 && i2.tileDisplayData.displayObjects.length ? (i2.tileDisplayData.computeDisplayList(), this._dirtyMap = new e$5(), this._dispRecStore = d$3.fromTileData(i2, this._dirtyMap), this._data = i2, this._dirtyMap.markAllDirty(), this._hasData = true, e2.end && this.ready()) : this._data && (i2 && i2.tileDisplayData.displayObjects.length || a2.length) ? this._doPatchData(e2) : e2.end && this.ready(), e2.end && !this._data && this.clear(), this.requestRender(), this.emit("change");
  }
  commit(t2) {
    t2.time && t2.time === this._lastCommitTime || (this._lastCommitTime = t2.time, this.visible && this._data && (this._wglBuffers || (this._wglBuffers = new f$3(t2.context)), (this._dirtyMap.hasDirty() || this._invalidated) && (this._invalidated = false, this._wglBuffers.upload(this._data.tileBufferData, this._dirtyMap), this._displayList = this._data.tileDisplayData.displayList.clone(), this._displayObjects = this._data.tileDisplayData.displayObjects.slice(), this._dirtyMap.markAllClean())));
  }
  clear() {
    this._data = null, this._displayList = null, this._dispRecStore = null, this._wglBuffers && (this._wglBuffers.dispose(), this._wglBuffers = null);
  }
  _doPatchData(t2) {
    this._invalidated = true, this._patchData(t2) || (this._dirtyMap.markAllDirty(), this._data.reshuffle(), this._dispRecStore = d$3.fromTileData(this._data, this._dirtyMap)), this.requestRender();
  }
  _patchData(t2) {
    let s2 = true;
    const e2 = t2.addOrUpdate && t2.addOrUpdate.tileDisplayData && t2.addOrUpdate.tileDisplayData.displayObjects || [], i2 = (t2.remove || []).slice();
    for (const l2 of e2)
      l2.insertAfter != null && i2.push(l2.id);
    let a2;
    i2.length > 0 && (a2 = new Set(i2));
    for (const l2 of i2) {
      const t3 = this._data.tileDisplayData.displayObjectRegistry.get(l2);
      if (t3) {
        this._data.tileDisplayData.displayList.removeFromList(t3.displayRecords);
        for (const s3 of t3.displayRecords)
          this._dispRecStore.delete(s3);
        this._data.tileDisplayData.displayObjectRegistry.delete(l2);
      }
    }
    a2 && a2.size && (this._data.tileDisplayData.displayObjects = this._data.tileDisplayData.displayObjects.filter((t3) => !a2.has(t3.id)));
    for (const l2 of e2) {
      let e3, i3 = this._data.tileDisplayData.displayObjectRegistry.get(l2.id);
      if (i3) {
        const t3 = i3.displayRecords;
        i3.set(l2), i3.displayRecords = t3;
        const s3 = i3.displayRecords.length;
        for (let e4 = 0; e4 < s3; ++e4) {
          const t4 = i3.displayRecords[e4], s4 = l2.displayRecords[e4];
          (e4 >= l2.displayRecords.length || t4.geometryType !== s4.geometryType || t4.symbolLevel !== s4.symbolLevel || t4.zOrder !== s4.zOrder || t4.materialKey !== s4.materialKey) && (this._dispRecStore.delete(i3.displayRecords[e4]), e4 < l2.displayRecords.length && (i3.displayRecords[e4] = void 0));
        }
        i3.displayRecords.length = l2.displayRecords.length;
      } else {
        let t3;
        i3 = l2.copy(), i3.displayRecords = [], this._data.tileDisplayData.displayObjectRegistry.set(l2.id, i3);
        const s3 = this._data.tileDisplayData.displayObjects;
        if (i3.insertAfter != null)
          if (e3 = {}, i3.insertAfter >= 0) {
            const e4 = this._data.tileDisplayData.displayObjectRegistry.get(i3.insertAfter);
            e4 ? (t3 = s3.indexOf(e4) + 1, t3 < s3.length ? s3.splice(t3, 0, i3) : (s3.push(i3), t3 = s3.length)) : (s3.push(i3), t3 = s3.length);
          } else
            s3.unshift(i3), t3 = 0;
        else
          s3.push(i3), t3 = s3.length;
        if (e3) {
          const i4 = l2.displayRecords.length > 0 ? 1 : 0;
          let a4 = 0;
          for (let l3 = t3 - 1; l3 >= 0 && a4 < i4; --l3)
            for (let t4 = s3[l3].displayRecords.length - 1; t4 >= 0 && a4 < i4; --t4) {
              const i5 = s3[l3].displayRecords[t4], d2 = this._data.tileDisplayData.displayList.getDPInfoType();
              e3[d2] || (e3[d2] = i5, ++a4);
            }
        }
      }
      const a3 = l2.displayRecords.length;
      for (let d2 = 0; d2 < a3; ++d2) {
        const a4 = l2.displayRecords[d2];
        let r2 = i3.displayRecords[d2];
        r2 ? (r2.meshData = a4.meshData, r2.materialKey = a4.materialKey) : (r2 = a4.copy(), r2.vertexFrom = void 0, r2.indexFrom = void 0, i3.displayRecords[d2] = r2);
        const h2 = a4.geometryType, p2 = this._data.tileDisplayData.displayList.getDPInfoType(), o2 = t2.addOrUpdate.tileBufferData.geometries[h2], y2 = o2.vertexBuffer, c2 = o2.indexBuffer;
        let n2;
        e3 && (n2 = e3[p2] ? this._data.tileDisplayData.displayList.splitAfter(e3[p2]) : -1), s2 = this._dispRecStore.setMeshData(r2, a4, y2, c2, n2) && s2, e3 && r2.indexFrom != null && r2.indexFrom != null && (e3[p2] = r2);
      }
    }
    return s2;
  }
}
class e$3 {
  constructor() {
    this._byGeometryType = null;
  }
  get satisfied() {
    return !this._byGeometryType;
  }
  reset() {
    this._byGeometryType = null;
  }
  verticesFor(e2) {
    return this._byGeometryType ? this._byGeometryType[e2].vertices : 0;
  }
  indicesFor(e2) {
    return this._byGeometryType ? this._byGeometryType[e2].indices : 0;
  }
  needMore(e2, t2, i2) {
    if (!t2 && !i2)
      return;
    this._byGeometryType || (this._byGeometryType = [{ vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }]);
    const s2 = this._byGeometryType[e2];
    s2.vertices += t2, s2.indices += i2;
  }
}
const r$2 = 5;
class f$2 {
  constructor() {
    this.geometries = [{ indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }];
  }
  clone() {
    const e2 = new f$2();
    for (let r2 = 0; r2 < this.geometries.length; r2++) {
      const f2 = this.geometries[r2], t2 = e2.geometries[r2];
      t2.indexBuffer = f2.indexBuffer.slice(), t2.vertexBuffer = {};
      for (const e3 in f2.vertexBuffer) {
        const { data: r3, stride: i2 } = f2.vertexBuffer[e3];
        t2.vertexBuffer[e3] = { data: r3.slice(), stride: i2 };
      }
    }
    return e2;
  }
  static deserialize(t2) {
    const i2 = new f$2();
    for (let f2 = 0; f2 < r$2; ++f2) {
      i2.geometries[f2].indexBuffer = new Uint32Array(t2.geometries[f2].indexBuffer), i2.geometries[f2].vertexBuffer = {};
      for (const r2 in t2.geometries[f2].vertexBuffer)
        i2.geometries[f2].vertexBuffer[r2] = { data: W(t2.geometries[f2].vertexBuffer[r2].data, t2.geometries[f2].vertexBuffer[r2].stride), stride: t2.geometries[f2].vertexBuffer[r2].stride };
    }
    return i2;
  }
  serialize() {
    const e2 = { geometries: [{ indexBuffer: this.geometries[0].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[1].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[2].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[3].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[4].indexBuffer.buffer, vertexBuffer: {} }] };
    for (let f2 = 0; f2 < r$2; ++f2)
      for (const r2 in this.geometries[f2].vertexBuffer)
        e2.geometries[f2].vertexBuffer[r2] = { data: this.geometries[f2].vertexBuffer[r2].data.buffer, stride: this.geometries[f2].vertexBuffer[r2].stride };
    return e2;
  }
  getBuffers() {
    const e2 = [];
    for (let f2 = 0; f2 < r$2; ++f2) {
      e2.push(this.geometries[f2].indexBuffer.buffer);
      for (const r2 in this.geometries[f2].vertexBuffer)
        e2.push(this.geometries[f2].vertexBuffer[r2].data.buffer);
    }
    return e2;
  }
}
function t$4(e2, t2, n2, ...o2) {
  t2 < e2.length ? e2.splice(t2, n2, ...o2) : e2.push(...o2);
}
class n$1 {
  constructor() {
    this.symbolLevels = [];
  }
  replay(t2, n2, o2) {
    for (const i2 of this.symbolLevels)
      for (const r2 of i2.zLevels) {
        const i3 = r2.geometryDPInfo.unified;
        if (i3)
          for (const r3 of i3) {
            const { geometryType: i4, materialKey: l2, indexFrom: s2, indexCount: m2 } = r3, y2 = U.load(l2).symbologyType, d2 = t2.painter.getBrush(i4, y2), u2 = { geometryType: i4, materialKey: l2, indexFrom: s2, indexCount: m2, target: n2.getGeometry(i4) };
            d2.prepareState(t2), d2.drawGeometry(t2, n2, u2, o2);
          }
      }
  }
  get empty() {
    return !this.symbolLevels || this.symbolLevels.length === 0;
  }
  clear() {
    this.symbolLevels.length = 0;
  }
  addToList(e2, t2) {
    if (Array.isArray(e2))
      for (const n2 of e2)
        this._addToList(n2, t2);
    else
      this._addToList(e2, t2);
  }
  removeFromList(e2) {
    Array.isArray(e2) || (e2 = [e2]);
    let t2 = null;
    for (const n2 of e2)
      t2 = this._removeFromList(n2);
    return t2;
  }
  clone() {
    const e2 = new n$1();
    for (const t2 of this.symbolLevels)
      e2.symbolLevels.push(t2.clone());
    return e2;
  }
  splitAfter(e2) {
    const t2 = this._getDisplayList(e2.symbolLevel, e2.zOrder), n2 = t2.length, i2 = e2.indexFrom + e2.indexCount;
    for (let r2 = 0; r2 < n2; ++r2) {
      const n3 = t2[r2];
      if (n3.geometryType === e2.geometryType && i2 > n3.indexFrom && i2 <= n3.indexFrom + n3.indexCount) {
        if (i2 < n3.indexFrom + n3.indexCount) {
          const e3 = new o$2();
          e3.geometryType = n3.geometryType, e3.materialKey = n3.materialKey, e3.indexFrom = i2, e3.indexCount = n3.indexFrom + n3.indexCount - i2, t2.splice(r2 + 1, 0, e3), n3.indexCount = i2 - n3.indexFrom;
        }
        return r2;
      }
    }
  }
  _addToList(e2, n2) {
    const i2 = e2.symbolLevel, r2 = e2.zOrder, l2 = this._getDisplayList(i2, r2), s2 = n2 != null ? n2 : l2.length - 1, m2 = s2 >= 0 && s2 < l2.length ? l2[s2] : null;
    if (m2 !== null && m2.materialKey === e2.materialKey && m2.indexFrom + m2.indexCount === e2.indexFrom && m2.geometryType === e2.geometryType)
      m2.indexCount += e2.indexCount;
    else {
      const n3 = new o$2();
      n3.indexFrom = e2.indexFrom, n3.indexCount = e2.indexCount, n3.materialKey = e2.materialKey, n3.geometryType = e2.geometryType, t$4(l2, s2 + 1, 0, n3);
    }
  }
  _removeFromList(e2) {
    const n2 = e2.symbolLevel, i2 = e2.zOrder, r2 = this._getDisplayList(n2, i2), l2 = r2.length;
    let s2;
    for (let t2 = 0; t2 < l2; ++t2) {
      const n3 = r2[t2];
      if (e2.indexFrom + e2.indexCount > n3.indexFrom && e2.indexFrom < n3.indexFrom + n3.indexCount && n3.geometryType === e2.geometryType) {
        s2 = t2;
        break;
      }
    }
    if (s2 !== void 0) {
      const n3 = r2[s2];
      if (e2.indexFrom === n3.indexFrom)
        return n3.indexCount -= e2.indexCount, n3.indexFrom += e2.indexCount, n3.indexCount === 0 && t$4(r2, s2, 1), s2 - 1;
      if (e2.indexFrom + e2.indexCount === n3.indexFrom + n3.indexCount)
        return n3.indexCount -= e2.indexCount, n3.indexCount === 0 ? (t$4(r2, s2, 1), s2 - 1) : s2;
      {
        const i3 = n3.indexFrom, l3 = e2.indexFrom - n3.indexFrom, m2 = e2.indexCount, y2 = n3.indexFrom + n3.indexCount - (e2.indexFrom + e2.indexCount);
        n3.indexCount = l3;
        const d2 = new o$2();
        return d2.geometryType = n3.geometryType, d2.materialKey = n3.materialKey, d2.indexFrom = i3 + l3 + m2, d2.indexCount = y2, t$4(r2, s2 + 1, 0, d2), s2;
      }
    }
    return null;
  }
  _getDisplayList(e2, t2) {
    let n2;
    const o2 = this.symbolLevels.length;
    for (let i2 = 0; i2 < o2; i2++)
      if (this.symbolLevels[i2].symbolLevel === e2) {
        n2 = this.symbolLevels[i2];
        break;
      }
    let s2;
    n2 || (n2 = new l(), n2.symbolLevel = e2, this.symbolLevels.push(n2));
    const m2 = n2.zLevels.length;
    for (let i2 = 0; i2 < m2; i2++)
      if (n2.zLevels[i2].zLevel === t2) {
        s2 = n2.zLevels[i2];
        break;
      }
    return s2 || (s2 = new r$1(), s2.geometryDPInfo = new i(), s2.zLevel = t2, n2.zLevels.push(s2)), s2.geometryDPInfo.unified || (s2.geometryDPInfo.unified = []), s2.geometryDPInfo.unified;
  }
  getDPInfoType() {
    return "unified";
  }
}
class o$2 {
  constructor() {
    this.materialKey = null, this.indexFrom = 0, this.indexCount = 0;
  }
  clone() {
    const e2 = new o$2();
    return e2.geometryType = this.geometryType, e2.materialKey = this.materialKey, e2.indexFrom = this.indexFrom, e2.indexCount = this.indexCount, e2;
  }
}
class i {
  constructor() {
    this.fill = null, this.line = null, this.marker = null, this.text = null, this.label = null, this.unified = null;
  }
  clone() {
    const e2 = new i();
    return e2.fill = this.fill && this.fill.map((e3) => e3.clone()), e2.line = this.line && this.line.map((e3) => e3.clone()), e2.marker = this.marker && this.marker.map((e3) => e3.clone()), e2.text = this.text && this.text.map((e3) => e3.clone()), e2.label = this.label && this.label.map((e3) => e3.clone()), e2.unified = this.unified && this.unified.map((e3) => e3.clone()), e2;
  }
}
class r$1 {
  constructor() {
    this.geometryDPInfo = new i();
  }
  clone() {
    const e2 = new r$1();
    return e2.zLevel = this.zLevel, e2.geometryDPInfo = this.geometryDPInfo.clone(), e2;
  }
}
class l {
  constructor() {
    this.zLevels = [];
  }
  clone() {
    const e2 = new l();
    e2.symbolLevel = this.symbolLevel;
    for (const t2 of this.zLevels)
      e2.zLevels.push(t2.clone());
    return e2;
  }
}
class t$3 {
  constructor() {
    this.vertexData = new Map(), this.vertexCount = 0, this.indexData = [];
  }
  clear() {
    this.vertexData.clear(), this.vertexCount = 0, this.indexData = [];
  }
  update(t2, e2, a2) {
    for (const s2 in t2)
      this.vertexData.set(s2, t2[s2]);
    for (const s2 in this.vertexData)
      t2[s2] === null && this.vertexData.delete(s2);
    this.vertexCount = e2, this.indexData = a2;
  }
}
class s$1 {
  constructor(t2, e2, s2, r2 = 0, i2 = 0) {
    this.id = t2, this.geometryType = e2, this.materialKey = s2, this.minZoom = r2, this.maxZoom = i2, this.meshData = null, this.symbolLevel = 0, this.zOrder = 0, this.vertexFrom = 0, this.vertexCount = 0, this.indexFrom = 0, this.indexCount = 0;
  }
  get sortKey() {
    return this._sortKey === void 0 && this._computeSortKey(), this._sortKey;
  }
  clone() {
    return this.copy();
  }
  copy() {
    const t2 = new s$1(this.id, this.geometryType, this.materialKey);
    return t2.vertexFrom = this.vertexFrom, t2.vertexCount = this.vertexCount, t2.indexFrom = this.indexFrom, t2.indexCount = this.indexCount, t2.zOrder = this.zOrder, t2.symbolLevel = this.symbolLevel, t2.meshData = this.meshData, t2.minZoom = this.minZoom, t2.maxZoom = this.maxZoom, t2;
  }
  setMeshDataFromBuffers(s2, r2, i2) {
    const o2 = new t$3();
    for (const t2 in r2) {
      const i3 = r2[t2].stride, a2 = r2[t2].data, h2 = [], n2 = X(i3);
      for (let t3 = 0; t3 < i3 * s2.vertexCount / n2; ++t3)
        h2[t3] = a2[t3 + i3 * s2.vertexFrom / n2];
      o2.vertexData.set(t2, h2);
    }
    o2.indexData.length = 0;
    for (let t2 = 0; t2 < s2.indexCount; ++t2)
      o2.indexData[t2] = i2[t2 + s2.indexFrom] - s2.vertexFrom;
    o2.vertexCount = s2.vertexCount, this.meshData = o2;
  }
  readMeshDataFromBuffers(s2, r2) {
    this.meshData ? this.meshData.clear() : this.meshData = new t$3();
    for (const t2 in s2) {
      const r3 = s2[t2].stride, i2 = s2[t2].data, o2 = [], a2 = X(r3);
      for (let t3 = 0; t3 < r3 * this.vertexCount / a2; ++t3)
        o2[t3] = i2[t3 + r3 * this.vertexFrom / a2];
      this.meshData.vertexData.set(t2, o2);
    }
    this.meshData.indexData.length = 0;
    for (let t2 = 0; t2 < this.indexCount; ++t2)
      this.meshData.indexData[t2] = r2[t2 + this.indexFrom] - this.vertexFrom;
    this.meshData.vertexCount = this.vertexCount;
  }
  writeMeshDataToBuffers(t2, s2, r2, i2) {
    for (const o2 in s2) {
      const r3 = s2[o2].stride, i3 = this.meshData.vertexData.get(o2), a2 = s2[o2].data, h2 = X(r3);
      for (let e2 = 0; e2 < r3 * this.meshData.vertexCount / h2; ++e2)
        a2[e2 + r3 * t2 / h2] = i3[e2];
    }
    for (let e2 = 0; e2 < this.meshData.indexData.length; ++e2)
      i2[e2 + r2] = this.meshData.indexData[e2] + t2;
    this.vertexFrom = t2, this.vertexCount = this.meshData.vertexCount, this.indexFrom = r2, this.indexCount = this.meshData.indexData.length;
  }
  static writeAllMeshDataToBuffers(t2, e2, s2) {
    let r2 = 0, i2 = 0;
    for (const o2 of t2)
      o2.writeMeshDataToBuffers(r2, e2, i2, s2), r2 += o2.vertexCount, i2 += o2.indexCount;
  }
  _computeSortKey() {
    this._sortKey = (31 & this.symbolLevel) << 12 | (127 & this.zOrder) << 4 | 7 & this.geometryType;
  }
  serialize(t2) {
    return t2.push(this.geometryType), t2.push(this.materialKey), t2.push(this.vertexFrom), t2.push(this.vertexCount), t2.push(this.indexFrom), t2.push(this.indexCount), t2.push(this.minZoom), t2.push(this.maxZoom), t2;
  }
  static deserialize(t2, e2) {
    const r2 = t2.readInt32(), i2 = t2.readInt32(), o2 = new s$1(e2.id, r2, i2);
    return o2.vertexFrom = t2.readInt32(), o2.vertexCount = t2.readInt32(), o2.indexFrom = t2.readInt32(), o2.indexCount = t2.readInt32(), o2.minZoom = t2.readInt32(), o2.maxZoom = t2.readInt32(), o2;
  }
}
function e$2(e2, n2) {
  if (n2 !== null) {
    e2.push(n2.length);
    for (const r2 of n2)
      r2.serialize(e2);
    return e2;
  }
  e2.push(0);
}
function n(e2, n2, r2) {
  const t2 = e2.readInt32(), o2 = new Array(t2);
  for (let i2 = 0; i2 < o2.length; i2++)
    o2[i2] = n2.deserialize(e2, r2);
  return o2;
}
class e$1 {
  constructor(s2) {
    this.insertAfter = null, this.id = s2, this.displayRecords = [];
  }
  copy() {
    const s2 = new e$1(this.id);
    return s2.set(this), s2;
  }
  clone() {
    const s2 = new e$1(this.id);
    return s2.displayRecords = this.displayRecords.map((s3) => s3.clone()), s2.insertAfter = this.insertAfter, s2;
  }
  set(s2) {
    this.id = s2.id, this.displayRecords = s2.displayRecords, this.insertAfter = s2.insertAfter;
  }
  serialize(s2) {
    return s2.push(this.id), e$2(s2, this.displayRecords), s2;
  }
  static deserialize(i2) {
    const r2 = i2.readInt32(), d2 = new e$1(r2), o2 = { id: r2 };
    return d2.displayRecords = n(i2, s$1, o2), d2;
  }
}
class e {
  get displayObjectRegistry() {
    if (!this._displayObjectRegistry) {
      this._displayObjectRegistry = new Map();
      for (const s2 of this.displayObjects)
        this._displayObjectRegistry.set(s2.id, s2);
    }
    return this._displayObjectRegistry;
  }
  get displayList() {
    return this._displayList;
  }
  computeDisplayList() {
    this._displayList = new n$1();
    for (const s2 of this.displayObjects)
      for (const t2 of s2.displayRecords)
        this._displayList.addToList(t2);
  }
  clone() {
    const s2 = new e();
    return this.displayObjects && (s2.displayObjects = this.displayObjects.map((s3) => s3.clone())), s2;
  }
  serialize(s2) {
    return e$2(s2, this.displayObjects), s2;
  }
  _deserializeObjects(s2) {
    const i2 = s2.readInt32(), e2 = new Array(i2), a2 = new Map();
    for (let l2 = 0; l2 < e2.length; ++l2) {
      const i3 = e$1.deserialize(s2);
      e2[l2] = i3, a2.set(i3.id, i3);
    }
    this.displayObjects = e2, this._displayList = null, this._displayObjectRegistry = a2;
  }
  static deserialize(s2) {
    const t2 = new e();
    return t2._deserializeObjects(s2), t2;
  }
}
class t$2 {
  constructor(e2, t2) {
    this.data = e2, this.stride = t2;
  }
  static decode(r2) {
    const s2 = W(r2.data, r2.stride), n2 = r2.stride;
    return new t$2(s2, n2);
  }
  static fromVertexVector(r2) {
    const s2 = W(r2.data.buffer(), r2.stride), n2 = r2.stride;
    return new t$2(s2, n2);
  }
}
class r {
  constructor(e2, t2, r2) {
    this.geometryType = e2, this.indexBuffer = new Uint32Array(t2), this.namedBuffers = r2;
  }
  static decode(e2) {
    const s2 = e2.geometryType, n2 = e2.indexBuffer, o2 = {};
    for (const r2 in e2.namedBuffers)
      o2[r2] = t$2.decode(e2.namedBuffers[r2]);
    return new r(s2, n2, o2);
  }
  static fromVertexData(s2, n2) {
    const o2 = s2.indices, c2 = W(s2.vertices, s2.stride), i2 = s2.stride, d2 = { geometry: new t$2(c2, i2) };
    return new r(n2, o2, d2);
  }
  static fromVertexVectors(e2) {
    const s2 = e2.geometryType, n2 = e2.indexVector.buffer(), o2 = {};
    for (const r2 in e2.namedVectors)
      o2[r2] = t$2.fromVertexVector(e2.namedVectors[r2]);
    return new r(s2, n2, o2);
  }
}
class s {
  constructor(t2, e2) {
    this.data = t2, this.stride = e2;
  }
  get vertexCount() {
    const t2 = this.stride / 4, e2 = this.data.length / t2;
    return e2 !== (0 | e2) && console.debug("Corrupted stride"), e2;
  }
  transfer(t2, e2) {
    const r2 = this.data.buffer();
    t2.vertexCount = this.vertexCount, t2.data = r2, t2.stride = this.stride, e2.push(r2);
  }
}
class o$1 {
  constructor(e2, o2, n2) {
    this.geometryType = e2, this.indexVector = new e$6(Uint32Array, 6 * o2), this.namedVectors = {};
    const i2 = G(e2, n2);
    for (const t2 in i2) {
      const e3 = i2[t2];
      let n3;
      switch (e3 % 4) {
        case 0:
        case 2:
          n3 = new e$6(Uint32Array, e3 * o2);
          break;
        case 1:
        case 3:
          n3 = new e$6(Uint8Array, e3 * o2);
      }
      this.namedVectors[t2] = new s(n3, e3);
    }
  }
  get(t2) {
    return this.namedVectors[t2].data;
  }
  getVector(t2) {
    return this.namedVectors[t2];
  }
  transfer(t2, e2) {
    const r2 = this.indexVector.buffer(), s2 = {};
    e2.push(r2);
    for (const o2 in this.namedVectors) {
      const t3 = this.namedVectors[o2];
      s2[o2] = {}, t3.transfer(s2[o2], e2);
    }
    t2.geometryType = this.geometryType, t2.indexBuffer = r2, t2.namedBuffers = s2, this.destroy();
  }
  intoBuffers() {
    const t2 = r.fromVertexVectors(this);
    return this.destroy(), t2;
  }
  destroy() {
    this.indexVector = null, this.namedVectors = null;
  }
}
const D = new e$3(), d$2 = new e$3(), p$1 = 1.5, h$1 = 5;
function x$1(e2, t2) {
  const r2 = {};
  for (const s2 in e2) {
    const i2 = { data: K(t2, e2[s2]), stride: e2[s2] };
    r2[s2] = i2;
  }
  return r2;
}
function y$3(e2) {
  return [e2.fill || {}, e2.line || {}, e2.icon || {}, e2.text || {}, e2.label || {}];
}
function B(e2) {
  const t2 = [[], [], [], [], []], r2 = e2;
  for (const s2 of r2)
    for (const e3 of s2.displayRecords)
      t2[e3.geometryType].push(e3);
  return t2;
}
class g$4 {
  constructor() {
    this.tileDisplayData = null, this.tileBufferData = null;
  }
  reshuffle() {
    D.reset();
    const e2 = B(this.tileDisplayData.displayObjects);
    for (const s2 of e2)
      for (const e3 of s2)
        e3 && D.needMore(e3.geometryType, e3.meshData ? e3.meshData.vertexCount : e3.vertexCount, e3.meshData ? e3.meshData.indexData.length : e3.indexCount);
    const t2 = e2.length, r2 = new f$2();
    for (let s2 = 0; s2 < t2; ++s2) {
      r2.geometries[s2].indexBuffer = new Uint32Array(Math.round(p$1 * D.indicesFor(s2)));
      const e3 = [];
      for (const r3 in this.tileBufferData.geometries[s2].vertexBuffer)
        e3.push(this.tileBufferData.geometries[s2].vertexBuffer[r3].stride);
      const t3 = g$4._computeVertexAlignment(e3), i2 = Math.round(p$1 * D.verticesFor(s2)), a2 = g$4._align(i2, t3);
      for (const f2 in this.tileBufferData.geometries[s2].vertexBuffer) {
        const e4 = this.tileBufferData.geometries[s2].vertexBuffer[f2].stride;
        r2.geometries[s2].vertexBuffer[f2] = { stride: e4, data: K(a2, e4) };
      }
    }
    d$2.reset(), this.tileDisplayData.displayList.clear();
    for (let s2 = 0; s2 < t2; ++s2) {
      const t3 = e2[s2];
      for (const e3 of t3) {
        if (e3.meshData)
          e3.writeMeshDataToBuffers(d$2.verticesFor(s2), r2.geometries[s2].vertexBuffer, d$2.indicesFor(s2), r2.geometries[s2].indexBuffer), e3.meshData = null;
        else {
          const t4 = this.tileBufferData.geometries[s2].vertexBuffer, i2 = this.tileBufferData.geometries[s2].indexBuffer, o2 = r2.geometries[s2].vertexBuffer, f2 = r2.geometries[s2].indexBuffer, n2 = d$2.verticesFor(s2), l2 = d$2.indicesFor(s2);
          ae(n2, l2, o2, f2, e3, t4, i2), e3.vertexFrom = n2, e3.indexFrom = l2;
        }
        d$2.needMore(s2, e3.vertexCount, e3.indexCount);
      }
    }
    for (const s2 of this.tileDisplayData.displayObjects)
      this.tileDisplayData.displayList.addToList(s2.displayRecords);
    this.tileBufferData = r2;
  }
  getStrides() {
    const e2 = [];
    for (let t2 = 0; t2 < this.tileBufferData.geometries.length; ++t2) {
      const r2 = this.tileBufferData.geometries[t2];
      e2[t2] = {};
      for (const s2 in r2.vertexBuffer)
        e2[t2][s2] = r2.vertexBuffer[s2].stride;
    }
    return e2;
  }
  clone() {
    const e2 = new g$4();
    return e2.tileBufferData = this.tileBufferData.clone(), e2.tileDisplayData = this.tileDisplayData.clone(), e2;
  }
  _guessSize() {
    const { displayObjects: e2 } = this.tileDisplayData, t2 = Math.min(e2.length, 4), r2 = 12, s2 = 40;
    let i2 = 0;
    for (let o2 = 0; o2 < t2; o2++)
      i2 = Math.max(i2, e2[o2].displayRecords.length);
    return 2 * (e2.length * r2 + e2.length * i2 * s2);
  }
  serialize() {
    const e2 = this.tileBufferData.serialize(), t2 = this.tileBufferData.getBuffers(), r2 = this.tileDisplayData.serialize(new e$6(Int32Array, this._guessSize())).buffer();
    return t2.push(r2), { result: { displayData: r2, bufferData: e2 }, transferList: t2 };
  }
  static fromVertexData(r$12, s2) {
    const i2 = {}, o2 = new Map();
    for (const e2 of s2)
      o2.set(e2.id, e2);
    return he((s3) => {
      const a2 = r$12.data[s3];
      if (r$3(a2)) {
        const e2 = i$1.from(a2.records).getCursor();
        for (; e2.next(); ) {
          const t2 = e2.id, r2 = e2.materialKey, i3 = e2.indexFrom, a3 = e2.indexCount, f2 = e2.vertexFrom, l2 = e2.vertexCount, u2 = o2.get(t2), c2 = new s$1(t2, s3, r2);
          c2.indexFrom = i3, c2.indexCount = a3, c2.vertexFrom = f2, c2.vertexCount = l2, u2.displayRecords.push(c2);
        }
        i2[s3] = r.fromVertexData(a2, s3);
      } else
        i2[s3] = new o$1(s3, 0, S.DEFAULT).intoBuffers();
    }), g$4.fromMeshData({ displayObjects: s2, vertexBuffersMap: i2 });
  }
  static fromMeshData(e$12) {
    const t2 = new g$4(), r2 = new e(), o2 = new f$2();
    r2.displayObjects = e$12.displayObjects;
    for (const s2 in e$12.vertexBuffersMap) {
      const t3 = e$12.vertexBuffersMap[s2];
      o2.geometries[s2].indexBuffer = t3.indexBuffer, o2.geometries[s2].vertexBuffer = t3.namedBuffers;
    }
    return t2.tileDisplayData = r2, t2.tileBufferData = o2, t2;
  }
  static bind(e2, t2) {
    const r2 = new g$4();
    return r2.tileDisplayData = e2, r2.tileBufferData = t2, r2;
  }
  static create(e$12, t2) {
    const r2 = new g$4();
    r2.tileDisplayData = new e(), r2.tileDisplayData.displayObjects = e$12;
    const o2 = [0, 0, 0, 0, 0], a2 = [0, 0, 0, 0, 0], f2 = [[], [], [], [], []];
    for (const s2 of e$12)
      for (const e2 of s2.displayRecords)
        f2[e2.geometryType].push(e2), o2[e2.geometryType] += e2.meshData.vertexCount, a2[e2.geometryType] += e2.meshData.indexData.length;
    const l2 = new f$2(), u2 = y$3(t2);
    for (let s2 = 0; s2 < h$1; s2++) {
      const e2 = new Uint32Array(a2[s2]), t3 = x$1(u2[s2], o2[s2]);
      s$1.writeAllMeshDataToBuffers(f2[s2], t3, e2), l2.geometries[s2] = { indexBuffer: e2, vertexBuffer: t3 };
    }
    return r2.tileBufferData = l2, r2;
  }
  static _align(e2, t2) {
    const r2 = e2 % t2;
    return r2 === 0 ? e2 : e2 + (t2 - r2);
  }
  static _computeVertexAlignment(e2) {
    let t2 = false, r2 = false;
    for (const s2 of e2)
      s2 % 4 == 2 ? t2 = true : s2 % 4 != 0 && (r2 = true);
    return r2 ? 4 : t2 ? 2 : 1;
  }
}
const c = 512, g$3 = 50;
function p(e2, t2) {
  const n2 = R(t2);
  if (!n2)
    return null;
  const [i2, s2] = n2.valid;
  return e2[2] > s2 ? [u$1([e2[0], e2[1], s2, e2[3]]), u$1([i2, e2[1], i2 + e2[2] - s2, e2[3]])] : e2[0] < i2 ? [u$1([i2, e2[1], e2[2], e2[3]]), u$1([s2 - (i2 - e2[0]), e2[1], s2, e2[3]])] : null;
}
function u(e2) {
  return e2 === "text" || e2 === "esriTS";
}
function h(e2) {
  return e2 === "simple-marker" || e2 === "picture-marker" || e2 === "esriSMS" || e2 === "esriPMS";
}
function y$2(e2) {
  switch (e$7(e2.geometry).type) {
    case "point":
    case "multipoint":
      return 0;
    case "polyline":
      return 1;
    case "polygon":
    case "extent":
      return 2;
  }
  return 0;
}
function d$1(e2) {
  if (!e2)
    return null;
  const { xmin: t2, ymin: n2, xmax: r2, ymax: o2, spatialReference: s2 } = e2;
  return new v$1({ rings: [[[t2, n2], [t2, o2], [r2, o2], [r2, n2], [t2, n2]]], spatialReference: s2 });
}
class o extends c$1 {
  constructor(r2, t2, e2) {
    super(r2, t2, null), this._transform = e2;
  }
  static from(s2, n2, i2) {
    const c2 = b$3.createInstance(), u2 = [], a2 = s2.filter((r2) => !!r2.geometry);
    for (const e2 of a2) {
      const s3 = c$2(e2.geometry);
      et(u2, [e2], s3, false, false, n2);
    }
    return new o(c2, u2, i2);
  }
  get geometryType() {
    const r2 = this._current;
    return r2 ? r2.geometryType : null;
  }
  get insertAfter() {
    return this._current.insertAfter;
  }
  readGraphic() {
    return this._current;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const r2 = new o(this.instance, this._features, this._transform);
    return this.copyInto(r2), r2;
  }
}
const y$1 = new t$8(), g$2 = new t$8(), f$1 = "esriGeometryPolyline";
function d(t2) {
  t2.coords.length = 0, t2.lengths.length = 0;
}
class b$2 {
  constructor() {
    this.bounds = u$1(), this.graphic = null;
  }
  static acquire(t2 = null, e2, s2, r2, o2) {
    let i2;
    return b$2._pool.length === 0 ? i2 = new b$2() : (i2 = b$2._pool.pop(), this._set.delete(i2)), i2.acquire(t2, e2, s2, r2, o2), i2;
  }
  static release(t2) {
    t2 && !this._set.has(t2) && (t2.release(), this._pool.push(t2), this._set.add(t2));
  }
  static getCentroidQuantized(e2, s2) {
    if (y$4(e2.geometry)) {
      const o2 = e2.symbol;
      if (t$7(o2))
        return null;
      if ((o2 == null ? void 0 : o2.layers.length) > 0 && o2.layers.some((t2) => t2.type === "text" || t2.type === "marker")) {
        const t2 = r$4(e2.geometry);
        return t2 !== null ? O(s2, {}, { x: t2[0], y: t2[1] }, false, false) : null;
      }
    }
    return null;
  }
  acquire(t2 = null, e2, s2, r2, o2) {
    t2 && this.set(t2, e2, s2, r2, o2);
  }
  release() {
    this.graphic = null, this.symbolResource = null, this.geometry = null;
  }
  get symbol() {
    return this.symbolResource.symbol;
  }
  set(t2, e2, s2, r2, o2) {
    this.graphic = t2, this.geometry = s2, this.symbolResource = e2, this.bounds = r2, o2 && (this.size = o2);
  }
  getGeometryQuantized(e2, r2, o2, n2) {
    const c2 = this.geometry, b2 = c$2(c2);
    if (t$7(b2))
      return null;
    switch (b2) {
      case "esriGeometryPolygon": {
        const t2 = c2, { rings: s2 } = t2;
        if (!s2 || s2.length === 0)
          return null;
        let r3;
        if (r3 = s2.length === 1 && s2[0].length === 2 ? U$1(e2, { paths: [[s2[0][0], s2[0][1]]] }) : U$1(e2, this.geometry), !r3) {
          const t3 = { x: s2[0][0][0], y: s2[0][0][1] };
          if (r3 = U$1(e2, t3), r3) {
            const { x: t4, y: e3 } = r3;
            return { rings: [[[t4 - 1, e3], [1, -1], [1, 1], [-1, 1], [-1, -1]]] };
          }
        }
        return r3;
      }
      case "esriGeometryPolyline": {
        const t2 = c2;
        return d(y$1), d(g$2), C(y$1, t2), ht(g$2, y$1, t2.hasZ, t2.hasM, f$1, e2.scale[0]), at(y$1, g$2, t2.hasZ, t2.hasM, f$1, e2), $(y$1, t2.hasZ, t2.hasM);
      }
      case "esriGeometryMultipoint": {
        const t2 = c2, i2 = 0.5 * n2 * Math.max(Math.abs(this.size[0]) + this.size[2] - this.size[0], Math.abs(this.size[1]) + this.size[3] - this.size[1]), h2 = R(o2);
        let u2 = t2.points;
        if (h2) {
          const [t3, e3] = h2.valid, o3 = e3 - t3;
          u2 = u2.filter((n3) => {
            if (n3[0] + i2 > e3 || n3[0] - i2 < t3) {
              const t4 = [...n3];
              return n3[0] + i2 > e3 ? t4[0] -= o3 : t4[0] += o3, q(r2, n3, i2) || q(r2, t4, i2);
            }
            return q(r2, n3, i2);
          });
        }
        return u2.length === 0 ? { points: u2 } : U$1(e2, { points: u2 });
      }
    }
    return U$1(e2, this.geometry);
  }
}
b$2._pool = [], b$2._set = new Set();
const g$1 = { minX: 0, minY: 0, maxX: 0, maxY: 0 }, f = u$1(), _ = 1e-5;
function b$1(e2, t2, r2, i2, s2) {
  return g$1.minX = t2, g$1.minY = r2, g$1.maxX = i2, g$1.maxY = s2, e2.search(g$1);
}
function y(e2) {
  return { minX: e2.bounds[0], minY: e2.bounds[1], maxX: e2.bounds[2], maxY: e2.bounds[3] };
}
class I {
  constructor(e2, t2, r2, s2, o2, n2, h2) {
    this._graphics = s2, this._onAdd = o2, this._onRemove = n2, this._hashToCIM = h2, this._index = i$2(9, y), this._itemByGraphic = new Map(), this._inflatedSizeHelper = new ae$1(), this._tileInfoView = e2, this._uidFieldName = r2;
    const a2 = e2.getClosestInfoForScale(t2);
    a2 && (this._resolution = this._tileInfoView.getTileResolution(a2.level));
  }
  setResourceManager(e2) {
    this._cimResourceManager = e2, this._hittestDrawHelper = new V(e2);
  }
  hitTest(e2, t2, r2, i2, n2) {
    e2 = U$2(e2, this._tileInfoView.spatialReference);
    const h2 = 0.5 * i2 * window.devicePixelRatio * r2;
    f[0] = e2 - h2, f[1] = t2 - h2, f[2] = e2 + h2, f[3] = t2 + h2;
    const u2 = 0.5 * i2 * (r2 + g$3), l2 = b$1(this._index, e2 - u2, t2 - u2, e2 + u2, t2 + u2);
    if (!l2 || l2.length === 0)
      return [];
    const c2 = [], d2 = u$1(), p2 = u$1();
    for (const s2 of l2) {
      const { geometry: e3, symbolResource: t3 } = s2;
      this._getSymbolBounds(d2, t3, e3, p2, n2), p2[3] = p2[2] = p2[1] = p2[0] = 0, E$1(d2, f) && s2.graphic.visible && c2.push(s2);
    }
    if (c2.length === 0)
      return [];
    const g2 = this._hittestDrawHelper, _2 = [];
    for (const s2 of c2) {
      const { geometry: e3, symbolResource: t3 } = s2, { hash: r3, textInfo: o2 } = t3, h3 = this._hashToCIM.get(r3);
      h3 && (g2.hitTest(f, h3.symbol, e3, o2, n2, i2) && _2.push(s2));
    }
    return _2.sort(z), _2.map((e3) => e3.graphic);
  }
  getGraphicsData(e2, t2, r2) {
    const i2 = this._searchForItems(t2);
    if (i2.length === 0 || r2.length === 0)
      return [];
    i2.sort((e3, t3) => e3.zorder - t3.zorder), i2[0].insertAfter = -1;
    for (let l2 = 1; l2 < i2.length; l2++)
      i2[l2].insertAfter = i2[l2 - 1].graphic.uid;
    i2.sort((e3, t3) => e3.graphic.uid - t3.graphic.uid), r2.sort((e3, t3) => e3.uid - t3.uid);
    let s2, o2 = 0, n2 = 0;
    const h2 = t2.resolution, a2 = [], u2 = { originPosition: "upperLeft", scale: [h2, h2], translate: [t2.bounds[0], t2.bounds[3]] };
    for (const l2 of r2) {
      for (n2 = -2; o2 < i2.length; )
        if (s2 = i2[o2], o2++, l2.uid === s2.graphic.uid) {
          n2 = s2.insertAfter;
          break;
        }
      if (!s2.geometry || n2 === -2)
        continue;
      const r3 = s2.getGeometryQuantized(u2, t2.bounds, this._tileInfoView.spatialReference, h2), c2 = __spreadValues({}, s2.graphic.attributes);
      c2[this._uidFieldName] = l2.uid, s2.groupId == null && (s2.groupId = e2.createTemplateGroup(s2.symbol, null)), a2.push({ centroid: b$2.getCentroidQuantized(s2, u2), geometry: r3, attributes: c2, symbol: s2.symbol, groupId: s2.groupId, insertAfter: n2, zorder: s2.zorder });
    }
    return a2.sort((e3, t3) => e3.zorder - t3.zorder), a2;
  }
  queryTileData(e2, t2) {
    if (this._graphics.length === 0)
      return [];
    const { bounds: r2, resolution: i2 } = t2, s2 = this._searchForItems(t2), o2 = [];
    return s2.length === 0 || this._createTileGraphics(o2, e2, s2, { originPosition: "upperLeft", scale: [i2, i2], translate: [r2[0], r2[3]] }, t2), o2;
  }
  has(e2) {
    return this._itemByGraphic.has(e2);
  }
  getBounds(e2) {
    const t2 = this._itemByGraphic.get(e2);
    return t2 ? t2.bounds : null;
  }
  getAllBounds() {
    return Array.from(this._itemByGraphic.values()).filter((e2) => e2.graphic.visible).map((e2) => e2.bounds);
  }
  addOrModify(r2, i2, s2) {
    if (!r2 || t$7(i2))
      return;
    this.has(r2) && this.remove(r2), this._onAdd(r2);
    const o2 = [0, 0, 0, 0], n2 = this._getSymbolBounds(null, i2, s2, o2, 0), h2 = b$2.acquire(r2, i2, s2, r$3(n2) ? n2 : null, o2);
    return this._itemByGraphic.set(r2, h2), s2 && this._index.insert(h2), h2.bounds;
  }
  remove(e2) {
    if (!this._itemByGraphic.has(e2))
      return;
    this._onRemove(e2);
    const t2 = this._itemByGraphic.get(e2);
    t2.bounds && this._index.remove(t2), this._itemByGraphic.delete(e2);
  }
  updateZ() {
    const e2 = this._graphics.items;
    let t2, r2;
    for (let i2 = 0; i2 < e2.length; i2++)
      r2 = e2[i2], t2 = this._itemByGraphic.get(r2), t2 && (t2.zorder = i2);
  }
  update(e2, r2, i2) {
    const s2 = this._itemByGraphic.get(e2);
    s2.groupId = null;
    const o2 = e$8(s2.bounds);
    this._index.remove(s2);
    const h2 = this._getSymbolBounds(s2.bounds, r2, i2, s2.size, 0);
    return r$3(h2) && s2.set(e2, r2, i2, h2, s2.size), i2 && this._index.insert(s2), { oldBounds: o2, newBounds: s2.bounds };
  }
  updateLevel(e2) {
    if (this._resolution === e2)
      return;
    this._resolution = e2, this._index.clear();
    const r2 = this._itemByGraphic, i2 = [];
    for (const [s2, o2] of r2) {
      const e3 = this._getSymbolBounds(o2.bounds, o2.symbolResource, o2.geometry, o2.size, 0);
      o2.geometry && r$3(e3) && (o2.bounds = e3, i2.push(o2));
    }
    this._index.load(i2);
  }
  clear() {
    this._itemByGraphic.clear(), this._index.clear();
  }
  _createTileGraphics(e2, t2, r2, i2, s2) {
    const o2 = this._uidFieldName, n2 = this._tileInfoView.spatialReference, { bounds: h2, resolution: a2 } = s2;
    let u2, l2, c2, m2;
    r2.sort((e3, t3) => e3.zorder - t3.zorder);
    for (let p2 = 0; p2 < r2.length; p2++) {
      c2 = r2[p2], u2 = c2.graphic, l2 = c2.getGeometryQuantized(i2, h2, n2, a2), m2 = p2 === 0 ? -1 : r2[p2 - 1].graphic.uid;
      const s3 = __spreadValues({}, c2.graphic.attributes);
      s3[o2] = u2.uid, c2.groupId == null && (c2.groupId = t2.createTemplateGroup(c2.symbol, null)), e2.push({ centroid: b$2.getCentroidQuantized(c2, i2), geometry: l2, attributes: s3, symbol: c2.symbol, groupId: c2.groupId, insertAfter: m2, zorder: c2.zorder });
    }
  }
  _searchForItems(e2) {
    const t2 = this._tileInfoView.spatialReference, r2 = e2.bounds;
    if (t2.isWrappable) {
      const [i2, o2] = R(t2).valid, n2 = Math.abs(r2[2] - o2) < _, h2 = Math.abs(r2[0] - i2) < _;
      if ((!n2 || !h2) && (n2 || h2)) {
        const t3 = e2.resolution;
        let h3;
        h3 = u$1(n2 ? [i2, r2[1], i2 + t3 * g$3, r2[3]] : [o2 - t3 * g$3, r2[1], o2, r2[3]]);
        const a2 = b$1(this._index, r2[0], r2[1], r2[2], r2[3]), u2 = b$1(this._index, h3[0], h3[1], h3[2], h3[3]);
        return [...new Set([...a2, ...u2])];
      }
    }
    return b$1(this._index, r2[0], r2[1], r2[2], r2[3]);
  }
  _getSymbolBounds(e2, t2, i2, o2, n2) {
    if (!t2 || !t2.symbol || !i2)
      return null;
    if (e2 || (e2 = u$1()), c$3(e2, i2), !o2 || o2[0] === 0 && o2[1] === 0 && o2[2] === 0 && o2[3] === 0) {
      const { hash: e3, textInfo: i3 } = t2, s2 = this._hashToCIM.get(e3);
      if (!s2)
        return null;
      o2 || (o2 = [0, 0, 0, 0]);
      const h2 = this._inflatedSizeHelper.getSymbolInflateSize(o2, s2.symbol, this._cimResourceManager, n2, i3);
      o2[0] = u$2(h2[0]), o2[1] = u$2(h2[1]), o2[2] = u$2(h2[2]), o2[3] = u$2(h2[3]);
    }
    const a2 = this._resolution, u2 = ae$1.safeSize(o2);
    return e2[0] -= u2 * a2, e2[1] -= u2 * a2, e2[2] += u2 * a2, e2[3] += u2 * a2, e2;
  }
}
const z = (e2, t2) => {
  const r2 = y$2(e2.graphic), i2 = y$2(t2.graphic);
  return r2 === i2 ? t2.zorder - e2.zorder : r2 - i2;
};
const t$1 = (t2) => {
  let p2 = class extends s$3(t2) {
    constructor() {
      super(...arguments), this.graphics = null, this.renderer = null;
    }
  };
  return e$9([y$5()], p2.prototype, "graphics", void 0), e$9([y$5()], p2.prototype, "renderer", void 0), e$9([y$5()], p2.prototype, "updating", void 0), e$9([y$5()], p2.prototype, "view", void 0), p2 = e$9([n$3("esri.views.layers.GraphicsView")], p2), p2;
};
const se = has("esri-2d-graphic-debug");
function ie(e2, t2, s2) {
  if (s2.has(e2))
    return s2.get(e2);
  const i2 = { tile: t2, addedOrModified: [], removed: [] };
  return s2.set(e2, i2), i2;
}
let re = class extends t$1(a$2(m$1)) {
  constructor(e2) {
    super(e2), this._storage = new r$5(), this._displayIds = new Map(), this._controller = new AbortController(), this._tiles = new Map(), this._graphicStoreUpdate = false, this._graphicsSet = new Set(), this._matcher = Promise.resolve(null), this._tileUpdateSet = new Set(), this._tilesToUpdate = new Map(), this._graphicIdToAbortController = new Map(), this._attached = false, this._updatingGraphicsTimer = null, this._hashToExpandedSymbol = new Map(), this._hashToExpandedSymbolPromise = new Map(), this._hashToCIMSymbolPromise = new Map(), this._hashToCIM = new Map(), this._processing = false, this._needsProcessing = false, this._pendingUpdate = { added: new Set(), updated: new Set(), removed: new Set() }, this.lastUpdateId = -1, this.updateRequested = false, this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this._updatingGraphicsTimer && (clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = null, this.notifyChange("updating")), this._controller.abort(), this.container.destroy(), this._set("graphics", null), this._graphicStore.clear(), this._attributeStore = null, this._hashToExpandedSymbol.clear(), this.view = null, this.renderer = null, this._hashToCIM.clear(), this._hashToCIMSymbolPromise.clear(), this._hashToExpandedSymbolPromise.clear();
  }
  _createMatcher(e2, t2, s2) {
    if (e2) {
      const i2 = w(e2), r2 = $$1({ indexCount: 0, fields: {} }, "feature", e2, i2);
      this._matcher = l$1(r2, t2, null, s2);
    }
  }
  _createDisplayId(e2) {
    return this._displayIds.has(e2) || this._displayIds.set(e2, this._storage.createDisplayId()), this._displayIds.get(e2);
  }
  initialize() {
    this._attributeStore = new v$2({ type: "local", initialize: (e3) => Promise.resolve(this.container.attributeView.initialize(e3)), update: (e3) => this.container.attributeView.requestUpdate(e3), render: () => this.container.requestRender() }, l$2("2d"), () => this.notifyChange("updating")), this.container.hasHighlight = () => this._attributeStore.hasHighlight;
    const e2 = (e3) => {
      this._createDisplayId(e3.uid), this._setFilterState(e3.uid, e3.visible);
    }, t2 = (e3) => {
      const t3 = this._displayIds.get(e3.uid);
      this._displayIds.delete(e3.uid), this._storage.releaseDisplayId(t3);
    }, s2 = new x$2(this.container.getMaterialItems.bind(this.container), this.view.featuresTilingScheme.tileInfo);
    this._graphicStore = new I(this.view.featuresTilingScheme, this.view.state.scale, this.uid, this.graphics, e2, t2, this._hashToCIM), this._meshFactory = new l$3(null, this.uid, s2), this._templateStore = s2, this.handles.add([l$4(() => this.renderer, (e3) => {
      this._createMatcher(e3, s2, this.container.stage.resourceManager);
      for (const t3 of this.graphics)
        this._pendingUpdate.updated.add(t3);
      this.requestUpdate();
    }), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      se && this.container.enableRenderingBounds(() => this._graphicStore.getAllBounds()), this.graphics.items.length > 0 && this._graphicsChangeHandler({ target: this.graphics, added: this.graphics.items, removed: [], moved: [] }), this.handles.add(this.graphics.on("change", (e4) => this._graphicsChangeHandler(e4)), "graphics");
      const e3 = this.container.stage.resourceManager;
      this._createMatcher(this.renderer, s2, e3), this._graphicStore.setResourceManager(e3), this._attached = true, this.notifyChange("updating");
    })]);
    const i2 = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: i2, removed: [] });
  }
  get updating() {
    return !this._attached || this._updatingGraphicsTimer !== null || this._tileUpdateSet.size > 0 || this._tilesToUpdate.size > 0 || this._attributeStore.isUpdating();
  }
  hitTest(e2) {
    if (!this.view || !this.view.position)
      return [];
    const { resolution: t2, rotation: s2 } = this.view.state;
    return this._graphicStore.hitTest(e2.x, e2.y, 2, t2, s2);
  }
  update(e2) {
    f$4(this._controller.signal);
    const t2 = e2.state, { resolution: s2 } = t2;
    if (this._graphicStore.updateLevel(s2), this._graphicStoreUpdate = true, this.updateRequested = false, this._pendingUpdate.updated.size > 0) {
      if (!this._processing)
        return void this._updateGraphics();
      this._needsProcessing = true;
    }
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback());
  }
  processUpdate(e2) {
    this.updateRequested && (this.updateRequested = false, this.update(e2));
  }
  graphicUpdateHandler(e2) {
    const { graphic: t2, property: s2 } = e2;
    switch (s2) {
      case "attributes":
      case "geometry":
      case "symbol":
        this._pendingUpdate.updated.add(t2), this.requestUpdate();
        break;
      case "visible":
        this._setFilterState(t2.uid, t2.visible), this._attributeStore.sendUpdates();
    }
  }
  setHighlight(e2) {
    const t2 = e2.map((e3) => this._displayIds.get(e3));
    this._attributeStore.setHighlight(e2, t2);
  }
  _getIntersectingTiles(e2) {
    const t2 = this._graphicStore.getBounds(e2);
    if (!t2 || s$4(t2) === 0 || l$5(t2) === 0)
      return [];
    const s2 = p(t2, this.view.spatialReference);
    return r$3(s2) ? [...new Set([...this.view.graphicsTileStore.boundsIntersections(s2[0]), ...this.view.graphicsTileStore.boundsIntersections(s2[1])])] : this.view.graphicsTileStore.boundsIntersections(t2);
  }
  async _updateTile(e2) {
    f$4(this._controller.signal);
    const t2 = e2.tile, s2 = this._getGraphicsData(this._templateStore, t2, e2.addedOrModified), i2 = await this._processGraphics(t2, s2);
    return f$4(this._controller.signal), this._patchTile(t2.key, { type: "update", addOrUpdate: i2, remove: e2.removed, end: true, clear: false, sort: false }), i2;
  }
  _patchTile(e2, t2) {
    if (!this._tiles.has(e2))
      return;
    const s2 = this._tiles.get(e2);
    this.container.onTileData(s2, t2), this.container.requestRender();
  }
  _graphicsChangeHandler(e2) {
    const t2 = this._pendingUpdate;
    for (const s2 of e2.added)
      t2.added.add(s2);
    for (const s2 of e2.moved)
      t2.updated.add(s2);
    for (const s2 of e2.removed)
      this._pendingUpdate.added.has(s2) ? t2.added.delete(s2) : t2.removed.add(s2);
    this._processing ? this._needsProcessing = true : this._updateGraphics();
  }
  _getGraphicsToUpdate() {
    const e2 = { added: [], removed: [], updated: [] };
    if (!this.graphics)
      return e2;
    const t2 = this._pendingUpdate;
    for (const s2 of this.graphics.items)
      t2.added.has(s2) ? e2.added.push(s2) : t2.updated.has(s2) && e2.updated.push(s2);
    for (const s2 of t2.removed)
      this._graphicStore.has(s2) && e2.removed.push(s2);
    return t2.added.clear(), t2.removed.clear(), t2.updated.clear(), e2;
  }
  async _updateGraphics() {
    this._processing = true;
    const { added: e2, removed: t2, updated: s2 } = this._getGraphicsToUpdate(), i2 = this._tilesToUpdate;
    let r2;
    try {
      if (!this._graphicStoreUpdate) {
        const e3 = this.view.state, { resolution: t3 } = e3;
        this._graphicStore.updateLevel(t3);
      }
      const o2 = [], a2 = new Array(e2.length + t2.length);
      for (let e3 = 0; e3 < s2.length; e3++) {
        const t3 = s2[e3], h3 = this._getIntersectingTiles(t3);
        for (const e4 of h3) {
          r2 = e4.id;
          ie(r2, e4, i2).removed.push(this._displayIds.get(t3.uid));
        }
        o2.push(this._updateGraphic(t3, null)), a2[e3] = t3;
      }
      const h2 = s2.length;
      for (let t3 = 0; t3 < e2.length; t3++) {
        const s3 = e2[t3];
        a2[h2 + t3] = s3, this._graphicsSet.add(s3), o2.push(this._addGraphic(s3));
      }
      for (const e3 of t2) {
        this._abortProcessingGraphic(e3.uid);
        const t3 = this._getIntersectingTiles(e3);
        for (const s3 of t3) {
          r2 = s3.id;
          ie(r2, s3, i2).removed.push(this._displayIds.get(e3.uid));
        }
        this._graphicsSet.delete(e3), this._graphicStore.remove(e3);
      }
      let n2;
      this._flipUpdatingGraphics(), await Promise.all(o2);
      for (let e3 = 0; e3 < a2.length; e3++) {
        n2 = a2[e3];
        const t3 = this._getIntersectingTiles(n2);
        for (const e4 of t3) {
          r2 = e4.id;
          ie(r2, e4, i2).addedOrModified.push(n2);
        }
      }
      this._graphicStore.updateZ();
      const l2 = [];
      for (const [e3, t3] of i2)
        l2.push(this._updateTile(t3));
      await Promise.all(l2);
    } catch (o2) {
      j(o2);
    }
    for (const a2 of t2)
      try {
        const e3 = await this._getSymbolForGraphic(a2, null);
        if (e3) {
          const t3 = e3.hash();
          this._hashToExpandedSymbol.delete(t3);
        }
      } catch (o2) {
        j(o2);
      }
    i2.clear(), this.notifyChange("updating"), this._processing = false, this._needsProcessing && (this._needsProcessing = false, this._updateGraphics());
  }
  _getArcadeInfo(e2) {
    const t2 = (e2.attributes ? Object.keys(e2.attributes) : []).map((t3) => ({ name: t3, alias: t3, type: typeof e2.attributes[t3] == "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
    return t$7(e2.geometry) ? null : { geometryType: c$2(e2.geometry), spatialReference: k.fromJSON(e2.geometry.spatialReference), fields: t2 };
  }
  _getSymbolForGraphic(e2, t2) {
    return f$4(this._controller.signal), r$3(e2.symbol) ? Promise.resolve(e2.symbol) : r$3(this.renderer) ? this.renderer.getSymbolAsync(e2, { scale: this.view.scale, signal: r$3(t2) ? t2.signal : null }) : Promise.resolve(this._getNullSymbol(e2));
  }
  _getCIMSymbol(e2, t2, s2) {
    let i2 = this._hashToCIM.get(t2);
    if (i2)
      return Promise.resolve(i2);
    const o2 = Q(e2);
    if (r$3(o2)) {
      if (o2.type === "CIMSymbolReference")
        return i2 = o2, this._hashToCIM.set(t2, i2), Promise.resolve(i2);
      let e3 = this._hashToCIMSymbolPromise.get(t2);
      return e3 || (e3 = o2.fetchCIMSymbol(s2).then((e4) => (this._hashToCIM.set(t2, e4.data), this._hashToCIMSymbolPromise.delete(t2), e4)).catch((e4) => (this._hashToCIMSymbolPromise.delete(t2), w$1(e4), null)), this._hashToCIMSymbolPromise.set(t2, e3), e3);
    }
    return Promise.resolve(null);
  }
  _expandCIMSymbol(e2, t2, s2, i2) {
    const r2 = this._hashToExpandedSymbol.get(s2);
    if (r2)
      return Promise.resolve(r2);
    let o2 = this._hashToExpandedSymbolPromise.get(s2);
    if (o2)
      return o2;
    const a2 = this.container.stage, h2 = this._getArcadeInfo(t2), n2 = w(null), l2 = o$4(e2, n2);
    return o2 = n$4(l2, h2, a2.resourceManager, i2), this._hashToExpandedSymbolPromise.set(s2, o2), o2.then((e3) => (this._hashToExpandedSymbol.set(s2, e3), this._hashToExpandedSymbolPromise.delete(s2), e3)), o2;
  }
  async _getSymbolResources(e2, t2) {
    f$4(this._controller.signal);
    return this.container.stage ? this._getSymbolForGraphic(e2, t2).then((i2) => {
      const r2 = i2.hash();
      return this._getCIMSymbol(i2, r2, t2).then((i3) => t$7(i3) ? null : this._expandCIMSymbol(i3, e2, r2, t2).then((e3) => {
        const t3 = e3.layers.filter((e4) => e4.type === "text" && typeof e4.text == "string");
        if (t3 && t3.length > 0) {
          const i4 = new Array(t3.length);
          for (let e4 = 0; e4 < t3.length; e4++) {
            const r3 = t3[e4], o3 = [], [a2] = n$5(r3.text);
            r3.text = a2;
            for (let e5 = 0; e5 < a2.length; e5++)
              o3.push(a2.charCodeAt(e5));
            i4[e4] = { symbol: r3, id: e4, glyphIds: o3 };
          }
          const o2 = new Map();
          return this.container.getMaterialItems(i4).then((s2) => {
            for (let e4 = 0; e4 < t3.length; e4++) {
              const i5 = t3[e4];
              o2.set(i5.cim, { text: i5.text, mosaicItem: s2[e4].mosaicItem });
            }
            return { symbol: e3, textInfo: o2, hash: r2 };
          });
        }
        return { symbol: e3, hash: r2 };
      }));
    }).catch((e3) => (w$1(e3), null)) : null;
  }
  async _projectAndNormalizeGeometry(e2, t2) {
    if (f$4(this._controller.signal), t$7(e2.geometry) || e2.geometry.type === "mesh")
      return null;
    let s2 = e2.geometry;
    if (y$4(s2)) {
      const e3 = s2.rings;
      s2.rings = e3;
    } else if (f$5(s2)) {
      const e3 = s2.paths;
      s2.paths = e3;
    } else if (u$3(s2)) {
      const i3 = await this._getSymbolForGraphic(e2, t2);
      if (f$4(this._controller.signal), h(i3.type) || u(i3.type)) {
        s2 = s2.center;
      } else
        s2 = d$1(s2);
    }
    await f$6(s2.spatialReference, this.view.spatialReference);
    const i2 = p$2(s2), r2 = g$5(i2, s2.spatialReference, this.view.spatialReference);
    return r2 && g$6(r2), r2;
  }
  _onTileUpdate(e2) {
    const t2 = R(this.view.spatialReference);
    if (e2.added && e2.added.length > 0)
      for (const s2 of e2.added)
        this._addNewTile(s2, t2);
    if (e2.removed && e2.removed.length > 0)
      for (const s2 of e2.removed)
        this._removeTile(s2.key);
  }
  async _addGraphic(e2) {
    this._abortProcessingGraphic(e2.uid), f$4(this._controller.signal);
    const t2 = new AbortController();
    this._graphicIdToAbortController.set(e2.uid, t2);
    const s2 = { signal: t2.signal };
    try {
      await this._addOrUpdateGraphic(e2, s2), f$4(this._controller.signal), this._graphicIdToAbortController.delete(e2.uid);
    } catch (i2) {
      if (this._graphicIdToAbortController.delete(e2.uid), !j(i2))
        throw i2;
    }
  }
  _updateGraphic(e2, t2) {
    f$4(this._controller.signal);
    const s2 = this._projectAndNormalizeGeometry(e2, t2), i2 = this._getSymbolResources(e2, t2);
    return Promise.all([s2, i2]).then(([t3, s3]) => {
      f$4(this._controller.signal), this._graphicStore.addOrModify(e2, s3, t3);
    });
  }
  _addOrUpdateGraphic(e2, t2) {
    f$4(this._controller.signal);
    const s2 = this._projectAndNormalizeGeometry(e2, t2), i2 = this._getSymbolResources(e2, t2);
    return Promise.all([s2, i2]).then(([t3, s3]) => {
      f$4(this._controller.signal), this._graphicsSet.has(e2) && this._graphicStore.addOrModify(e2, s3, t3);
    });
  }
  _addTile(e2) {
    const t2 = this.view.featuresTilingScheme.getTileBounds(u$1(), e2), s2 = this.view.featuresTilingScheme.getTileResolution(e2.level), i2 = new a(e2, s2, t2[0], t2[3]);
    return this._tiles.set(e2, i2), this.container.addChild(i2), i2;
  }
  async _addNewTile(e2, t2) {
    const s2 = this._addTile(e2.key), i2 = this._graphicStore.queryTileData(this._templateStore, e2);
    if (i2.length === 0)
      return;
    if (t2) {
      const s3 = Math.round((t2.valid[1] - t2.valid[0]) / e2.resolution);
      for (const e3 of i2)
        e3.geometry && (s$5(e3.geometry) || l$6(e3.geometry)) && this._wrapPoints(e3, s3);
    }
    const r2 = e2.key;
    this._tileUpdateSet.add(e2.key), this.notifyChange("updating");
    try {
      const t3 = { type: "update", clear: false, addOrUpdate: await this._processGraphics(e2, i2), remove: [], end: true, sort: false };
      s2.patch(t3), this._tileUpdateSet.delete(r2), this.notifyChange("updating");
    } catch (o2) {
      if (this._tileUpdateSet.delete(r2), this.notifyChange("updating"), !j(o2))
        throw o2;
    }
  }
  _removeTile(e2) {
    if (!this._tiles.has(e2))
      return;
    const t2 = this._tiles.get(e2);
    this.container.removeChild(t2), t2.destroy(), this._tiles.delete(e2);
  }
  _setFilterState(e2, t2) {
    const s2 = this._displayIds.get(e2), i2 = this._attributeStore.getHighlightFlag(e2);
    this._attributeStore.setData(s2, 0, 0, i2 | (t2 ? U$3 : 0));
  }
  _getGraphicsData(e2, t2, s2) {
    const i2 = this.view, r2 = R(i2.spatialReference), o2 = this._graphicStore.getGraphicsData(e2, t2, s2);
    if (r2) {
      const e3 = Math.round((r2.valid[1] - r2.valid[0]) / t2.resolution);
      for (const t3 of o2)
        t3.geometry && (s$5(t3.geometry) || l$6(t3.geometry)) && this._wrapPoints(t3, e3);
    }
    return o2;
  }
  _wrapPoints(e2, t2) {
    const s2 = e2.geometry;
    l$6(s2) ? this._wrapMultipoint(s2, t2) : this._wrapPoint(e2, t2);
  }
  _wrapMultipoint(e2, t2) {
    const s2 = e2.points, i2 = [];
    let r2 = 0, o2 = 0;
    for (const [a2, h2] of s2) {
      if (i2.push([a2 + r2, h2]), r2 = 0, t2 === c) {
        const e3 = 5 * g$3;
        a2 + o2 < e3 ? (i2.push([t2, 0]), r2 = -t2) : a2 + o2 > c - e3 && (i2.push([-t2, 0]), r2 = t2);
      } else
        a2 + o2 < -g$3 ? (i2.push([t2, 0]), r2 = -t2) : a2 + o2 > c + g$3 && (i2.push([-t2, 0]), r2 = t2);
      o2 += a2;
    }
    e2.points = i2;
  }
  _wrapPoint(e2, t2) {
    const s2 = e2.geometry;
    if (t2 === c) {
      const i2 = 5 * g$3;
      s2.x < i2 ? e2.geometry = { points: [[s2.x, s2.y], [t2, 0]] } : s2.x > c - i2 && (e2.geometry = { points: [[s2.x, s2.y], [-t2, 0]] });
    } else
      s2.x < -g$3 ? e2.geometry = { points: [[s2.x, s2.y], [t2, 0]] } : s2.x > c + g$3 && (e2.geometry = { points: [[s2.x, s2.y], [-t2, 0]] });
  }
  _processGraphics(e2, t2, s2) {
    if (!(t2 && t2.length) || !this._meshFactory)
      return null;
    const i2 = o.from(t2, this.uid, e2.transform), r2 = this._meshFactory;
    return this._matcher.then((t3) => r2.analyzeGraphics(i2, this.container.stage.resourceManager, t3, null, null, s2).then(() => (this._attributeStore.sendUpdates(), this._processAnalyzedGraphics(e2, i2))));
  }
  _processAnalyzedGraphics(e2, t2) {
    const s2 = this._meshFactory, i2 = t2.getSize(), r2 = t2.getCursor(), o2 = { features: i2, records: i2, metrics: 0 }, a2 = new E$2(e2.key.id, o2, S.DEFAULT, false, false), h2 = [];
    for (; r2.next(); ) {
      const t3 = r2.readGraphic();
      t3.insertAfter = t3.insertAfter === -1 ? -1 : this._displayIds.get(t3.insertAfter), t3.displayId = this._displayIds.get(t3.attributes[this.uid]);
      const i3 = new e$1(t3.displayId);
      i3.insertAfter = t3.insertAfter, h2.push(i3), s2.writeGraphic(a2, r2, e2.level, this.container.stage.resourceManager);
    }
    const n2 = e2.tileInfoView.tileInfo.isWrappable, l2 = a2.serialize(n2);
    if (l2.length !== 1)
      return new g$4();
    const d2 = l2[0].message;
    return g$4.fromVertexData(d2, h2);
  }
  _abortProcessingGraphic(e2) {
    if (this._graphicIdToAbortController.has(e2)) {
      this._graphicIdToAbortController.get(e2).abort();
    }
  }
  _getNullSymbol(e2) {
    const t2 = e2.geometry;
    return f$5(t2) ? O$1 : y$4(t2) || u$3(t2) ? j$1 : N;
  }
  _flipUpdatingGraphics() {
    this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = setTimeout(() => {
      this._updatingGraphicsTimer = null, this.notifyChange("updating");
    }, 160), this.notifyChange("updating");
  }
};
e$9([y$5({ constructOnly: true })], re.prototype, "requestUpdateCallback", void 0), e$9([y$5()], re.prototype, "container", void 0), e$9([y$5({ constructOnly: true })], re.prototype, "graphics", void 0), e$9([y$5()], re.prototype, "updating", null), e$9([y$5()], re.prototype, "view", void 0), e$9([y$5()], re.prototype, "updateRequested", void 0), re = e$9([n$3("esri.views.2d.layers.support.GraphicsView2D")], re);
const oe = re;
const g = Math.PI / 180, v = 4;
class x extends r$6 {
  constructor(t2) {
    super(), this._dvsMat3 = e$a(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = t2;
  }
  destroy() {
    this._vao && (this._vao.dispose(true), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program && (this._program.dispose(), this._program = null);
  }
  doRender(t2) {
    const { context: e2 } = t2, s2 = this._getBounds();
    if (s2.length < 1)
      return;
    this._createShaderProgram(e2), this._updateMatricesAndLocalOrigin(t2), this._updateBufferData(e2, s2), e2.setBlendingEnabled(true), e2.setDepthTestEnabled(false), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(false), e2.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true);
    const r2 = this._program;
    e2.bindVAO(this._vao), e2.useProgram(r2), r2.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), e2.gl.lineWidth(1), e2.drawElements(E$3.LINES, 8 * s2.length, C$1.UNSIGNED_INT, 0), e2.bindVAO();
  }
  _createTransforms() {
    return { dvs: e$a() };
  }
  _createShaderProgram(t2) {
    if (this._program)
      return;
    const e2 = "precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }", s2 = "precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";
    this._program = t2.programCache.acquire(e2, s2, b().attributes);
  }
  _updateMatricesAndLocalOrigin(o2) {
    const { state: l2 } = o2, { displayMat3: u2, size: c2, resolution: _2, pixelRatio: h2, rotation: m2, viewpoint: d2 } = l2, p2 = g * m2, { x: v2, y: x2 } = d2.targetGeometry, b2 = U$2(v2, l2.spatialReference);
    this._localOrigin.x = b2, this._localOrigin.y = x2;
    const y2 = h2 * c2[0], B2 = h2 * c2[1], M$1 = _2 * y2, A = _2 * B2, O2 = r$7(this._dvsMat3);
    i$3(O2, O2, u2), M(O2, O2, t$9(y2 / 2, B2 / 2)), f$7(O2, O2, r$8(c2[0] / M$1, -B2 / A, 1)), h$2(O2, O2, -p2);
  }
  _updateBufferData(t2, e2) {
    const { x: s2, y: r2 } = this._localOrigin, i2 = 2 * v * e2.length, o2 = new Float32Array(i2), a2 = new Uint32Array(8 * e2.length);
    let n2 = 0, f2 = 0;
    for (const l2 of e2)
      l2 && (o2[2 * n2 + 0] = l2[0] - s2, o2[2 * n2 + 1] = l2[1] - r2, o2[2 * n2 + 2] = l2[0] - s2, o2[2 * n2 + 3] = l2[3] - r2, o2[2 * n2 + 4] = l2[2] - s2, o2[2 * n2 + 5] = l2[3] - r2, o2[2 * n2 + 6] = l2[2] - s2, o2[2 * n2 + 7] = l2[1] - r2, a2[f2 + 0] = n2 + 0, a2[f2 + 1] = n2 + 3, a2[f2 + 2] = n2 + 3, a2[f2 + 3] = n2 + 2, a2[f2 + 4] = n2 + 2, a2[f2 + 5] = n2 + 1, a2[f2 + 6] = n2 + 1, a2[f2 + 7] = n2 + 0, n2 += 4, f2 += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(o2.buffer) : this._vertexBuffer = E.createVertex(t2, F.DYNAMIC_DRAW, o2.buffer), this._indexBuffer ? this._indexBuffer.setData(a2) : this._indexBuffer = E.createIndex(t2, F.DYNAMIC_DRAW, a2), !this._vao) {
      const e3 = b();
      this._vao = new a$1(t2, e3.attributes, e3.bufferLayouts, { geometry: this._vertexBuffer }, this._indexBuffer);
    }
  }
}
const b = () => ge("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: C$1.FLOAT }] });
class t extends o$5 {
  constructor(e2) {
    super(e2), this.hasHighlight = () => true;
  }
  destroy() {
    super.destroy(), this._boundsRenderer && (this._boundsRenderer.destroy(), this._boundsRenderer = null);
  }
  enableRenderingBounds(e2) {
    this._boundsRenderer = new x(e2), this.requestRender();
  }
  get hasLabels() {
    return false;
  }
  onTileData(e2, s2) {
    e2.patch(s2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  onTileError(e2) {
    e2.clear(), this.contains(e2) || this.addChild(e2);
  }
  _renderChildren(e2, s2) {
    for (const t2 of this.children)
      t2.isReady && t2.hasData && (t2.commit(e2), e2.context.setStencilFunction(I$1.EQUAL, t2.stencilRef, 255), t2._displayList.replay(e2, t2, s2));
  }
}
export { oe as o, t };
