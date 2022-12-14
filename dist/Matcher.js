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
import { g as s$2, bE as e$5, b3 as o$5, t as t$5, a as r$7, bF as Gt, bG as nt, k as e$6, A as u$b, bH as o$6, s as s$5, V as a$4, bg as n$6, bI as f$b, aW as t$6, bk as e$7, z as r$9, bi as z$2, B as n$7, b4 as i$7, aA as t$7, D as D$1, bJ as c$8, l as f$c, bK as w$6, bL as b$6, bM as p$7, bN as j$5, bO as j$6, bP as c$9, bQ as d$6, bR as r$b, bS as s$7, bT as y$5, m as j$7, bU as p$8, bV as e$9, bp as o$9 } from "./index.js";
import { L as ct, M as ht, Q as o$4, h as f$8, j as j$4, H as i$5, S as at, T as k$3, W as rt, _ as pt, $ as nt$1, a0 as st, a1 as ft, e as et, a2 as i$8, o as o$8, a3 as X, a as e$8, a4 as mt, a5 as lt, a6 as gt, a7 as vt } from "./enums2.js";
import { f as f$7, p as p$9 } from "./visualVariablesUtils.js";
import { b as E$2, G as G$2, x as x$7, e as w$4, f as s$4, j as f$a, S as S$2, k as ee, t as te } from "./Utils2.js";
import { l as l$6 } from "./tileUtils.js";
import { n as n$8, r as r$a, c as c$7, i as i$9 } from "./TileClipper.js";
import { U, s as s$3, r as r$8, n as n$4, i as i$6, a as a$5, Z as Z$2, c as c$6, o as o$7, N, C as C$2, w as w$5, O as O$1, b as b$5, P as P$2, f as f$d } from "./MaterialKey.js";
import { g as g$7, f as a$3, j as j$3, h as f$9, n as n$5, m as me, k as t$8, l as l$7, T, q as i$a } from "./ExpandedCIM.js";
import { M as M$6 } from "./GeometryUtils2.js";
import "./earcut.js";
import { s as s$6 } from "./Geometry.js";
import { c as c$a, a as a$6 } from "./devEnvironmentUtils.js";
function e$4(e2, n2) {
  if (e2 && "name" in e2) {
    const o2 = e2;
    return n2 && n2.error(new s$2(o2.name, o2.message, o2.details)), false;
  }
  return true;
}
const t$4 = 1.25;
class e$3 {
  constructor(t2, e2) {
    this._pos = 0;
    const r2 = e2 ? this._roundToNearest(e2, t2.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(r2), this._buffer = new t2(this._array), this._ctor = t2, this._i16View = new Int16Array(this._array);
  }
  get length() {
    return this._pos;
  }
  _roundToNearest(t2, e2) {
    const r2 = Math.round(t2);
    return r2 + (e2 - r2 % e2);
  }
  _ensureSize(e2) {
    if (this._pos + e2 >= this._buffer.length) {
      const r2 = this._roundToNearest((this._array.byteLength + e2 * this._buffer.BYTES_PER_ELEMENT) * t$4, this._buffer.BYTES_PER_ELEMENT), s2 = new ArrayBuffer(r2), i2 = new this._ctor(s2);
      i2.set(this._buffer, 0), this._array = s2, this._buffer = i2, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t2) {
    this._ensureSize(t2);
  }
  writeF32(t2) {
    this._ensureSize(1);
    const e2 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t2, this._pos++, e2;
  }
  push(t2) {
    this._ensureSize(1);
    const e2 = this._pos;
    return this._buffer[this._pos++] = t2, e2;
  }
  writeFixed(t2) {
    this._buffer[this._pos++] = t2;
  }
  setValue(t2, e2) {
    this._buffer[t2] = e2;
  }
  i1616Add(t2, e2, r2) {
    this._i16View[2 * t2] += e2, this._i16View[2 * t2 + 1] += r2;
  }
  getValue(t2) {
    return this._buffer[t2];
  }
  incr(t2) {
    if (this._buffer.length < t2)
      throw new Error("Increment index overflows the target buffer");
    this._buffer[t2]++;
  }
  decr(t2) {
    this._buffer[t2]--;
  }
  writeRegion(t2) {
    this._ensureSize(t2.length);
    const e2 = this._pos;
    return this._buffer.set(t2, this._pos), this._pos += t2.length, e2;
  }
  writeManyFrom(t2, e2, r2) {
    this._ensureSize(r2 - e2);
    for (let s2 = e2; s2 !== r2; s2++)
      this.writeFixed(t2._buffer[s2]);
  }
  buffer() {
    const t2 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t2;
  }
  toArray() {
    const t2 = this._array, e2 = [];
    for (let r2 = 0; r2 < t2.byteLength / 4; r2++)
      e2.push(t2[r2]);
    return e2;
  }
  seek(t2) {
    this._pos = t2;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
}
const i$4 = new Map();
function t$3(r2, t2, c2) {
  const { indicesPerRecord: s2, multiplier: o2, verticesPerRecord: d2 } = i$4.get(r2);
  return { recordBytes: c2 * ct * Uint32Array.BYTES_PER_ELEMENT, indexBytes: o2 * s2 * c2 * Uint32Array.BYTES_PER_ELEMENT, vertexBytes: o2 * d2 * c2 * t2 };
}
i$4.set(E$2.MARKER, { multiplier: 1, indicesPerRecord: 6, verticesPerRecord: 4 }), i$4.set(E$2.LINE, { multiplier: 1, indicesPerRecord: 24, verticesPerRecord: 8 }), i$4.set(E$2.FILL, { multiplier: 1, indicesPerRecord: 10, verticesPerRecord: 10 }), i$4.set(E$2.TEXT, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 }), i$4.set(E$2.LABEL, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 });
class r$6 {
  constructor(e2, r2, i2) {
    this._start = { index: 0, vertex: 0 };
    const h2 = t$3(e2, r2, i2), c2 = r2 / 4;
    this.geometryType = e2, this._records = new e$3(Int32Array, h2.recordBytes), this._indices = new e$3(Uint32Array, h2.indexBytes), this._vertices = new e$3(Uint32Array, h2.vertexBytes), this._metrics = new e$3(Float32Array, 0), this._strideInt = c2;
  }
  serialize(e2) {
    const t2 = this._records.buffer(), s2 = this._indices.buffer(), r2 = this._vertices.buffer(), i2 = this._metrics.length ? this._metrics.buffer() : null, h2 = 4 * this._strideInt;
    return e2.push(t2, s2, r2), { stride: h2, records: t2, indices: s2, vertices: r2, metrics: i2 };
  }
  get strideInt() {
    return this._strideInt;
  }
  get recordCount() {
    return this._records.length / ct;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(e2) {
    this._vertices.ensureSize(e2);
  }
  indexEnsureSize(e2) {
    this._indices.ensureSize(e2);
  }
  recordStart() {
    this._start.index = this._indices.length, this._start.vertex = this._vertices.length;
  }
  recordEnd(e2, t2, s2, r2, i2, h2, c2, n2) {
    this._records.push(e2), this._records.push(t2), this._records.push(s2), this._records.push(r2), this._records.push(i2), this._records.push(h2), this._records.push(c2), this._records.writeF32(n2);
  }
  writeIndex(e2) {
    this._indices.push(e2);
  }
  writeVertex(e2) {
    this._vertices.push(e2);
  }
  writeVertexF32(e2) {
    this._vertices.writeF32(e2);
  }
  copyLastFrom(t2, s2, r2) {
    const i2 = t2._records.length - ct, h2 = t2._records.getValue(i2), c2 = t2._records.getValue(i2 + 1), n2 = t2._records.getValue(i2 + 2), _2 = t2._records.getValue(i2 + 4), d2 = t2._records.getValue(i2 + 6), o2 = t2._records.getValue(i2 + 7), u2 = this._vertices.length, l2 = (t2._start.vertex - this._vertices.length) / this._strideInt, g2 = this._indices.length, p2 = this.vertexCount;
    for (let e2 = t2._start.index; e2 !== t2._indices.length; e2++) {
      const s3 = t2._indices.getValue(e2);
      this._indices.push(s3 - l2);
    }
    for (let e2 = t2._start.vertex; e2 !== t2._vertices.length; e2++) {
      const s3 = t2._vertices.getValue(e2);
      this._vertices.push(s3);
    }
    for (let e2 = u2; e2 <= this._vertices.length; e2 += this._strideInt)
      this._vertices.i1616Add(e2, s2, r2);
    this._records.push(h2), this._records.push(c2), this._records.push(n2), this._records.push(g2), this._records.push(_2), this._records.push(p2), this._records.push(d2), this._records.push(o2);
  }
}
const u$a = 1, c$5 = 2, o$3 = 4, _$3 = 8, l$5 = 16, d$5 = 32, g$6 = 64, p$6 = 128;
function x$6(e2) {
  switch (e2) {
    case u$a:
    case _$3:
    case d$5:
      return -1;
    case c$5:
    case g$6:
      return 0;
    case o$3:
    case l$5:
    case p$6:
      return 1;
  }
}
function m$3(e2) {
  switch (e2) {
    case u$a:
    case c$5:
    case o$3:
      return -1;
    case _$3:
    case l$5:
      return 0;
    case d$5:
    case g$6:
    case p$6:
      return 1;
  }
}
const f$6 = u$a | _$3 | d$5, y$4 = o$3 | l$5 | p$6, w$3 = u$a | c$5 | o$3, v$3 = d$5 | g$6 | p$6;
class E$1 {
  constructor(e2, t2, r2, i2, s2, n2 = 0) {
    this._hasAggregate = false, this.hasRecords = false, this._data = { self: new Map(), neighbors: new Array() }, this._version = 0, this._current = { geometryType: 0, writer: null, overlaps: 0, start: 0, insertAfter: 0, sortKey: 0, id: 0, materialKey: 0, indexStart: 0, vertStart: 0, isDotDensity: false, bufferingEnabled: false, metricBoxLenPointer: 0 }, this.hint = t2, this.tileKey = e2, this._hasAggregate = i2, this._pixelBufferEnabled = s2, this._version = n2, this._symbologyType = r2;
  }
  get hasAggregates() {
    return this._hasAggregate;
  }
  get hasPixelBufferEnabled() {
    return this._pixelBufferEnabled;
  }
  serialize(t2) {
    const r2 = [];
    return r2.push(this._serializeTileVertexData(this.tileKey, this.tileKey, this._data.self)), this._data.neighbors.forEach((i2, s2) => {
      const n2 = 1 << s2, a2 = x$6(n2), u2 = m$3(n2), c2 = l$6(new e$5(this.tileKey), a2, u2, t2), o2 = this._serializeTileVertexData(this.tileKey, c2.id, i2.vertexData);
      o2.message.bufferIds = i2.displayIds, r2.push(o2);
    }), r2;
  }
  _serializeTileVertexData(e2, t2, r2) {
    var _a, _b, _c, _d, _e;
    const i2 = new Array();
    return { message: { tileKeyOrigin: e2, tileKey: t2, data: { [E$2.MARKER]: (_a = r2.get(E$2.MARKER)) == null ? void 0 : _a.serialize(i2), [E$2.FILL]: (_b = r2.get(E$2.FILL)) == null ? void 0 : _b.serialize(i2), [E$2.LINE]: (_c = r2.get(E$2.LINE)) == null ? void 0 : _c.serialize(i2), [E$2.TEXT]: (_d = r2.get(E$2.TEXT)) == null ? void 0 : _d.serialize(i2), [E$2.LABEL]: (_e = r2.get(E$2.LABEL)) == null ? void 0 : _e.serialize(i2) }, version: this._version }, transferList: i2 };
  }
  featureStart(e2, t2) {
    this._current.insertAfter = e2, this._current.sortKey = t2;
  }
  featureEnd() {
  }
  recordStart(e2, t2, r2, i2) {
    this._current.writer = this._getVertexWriter(r2), this._current.overlaps = 0, this._current.indexStart = this._current.writer.indexCount, this._current.vertStart = this._current.writer.vertexCount, this._current.bufferingEnabled = i2, this._current.id = e2, this._current.materialKey = t2, this._current.geometryType = r2, this._current.isDotDensity = false, this._current.writer.recordStart();
  }
  recordCount() {
    return this._current.writer.recordCount;
  }
  vertexCount() {
    return this._current.writer.vertexCount;
  }
  indexCount() {
    return this._current.writer.indexCount;
  }
  vertexEnsureSize(e2) {
    this._current.writer.vertexEnsureSize(e2);
  }
  indexEnsureSize(e2) {
    this._current.writer.indexEnsureSize(e2);
  }
  vertexBounds(e2, t2, r2, i2) {
    this._current.bufferingEnabled && this._addOverlap(e2, t2, r2, i2);
  }
  vertexWrite(e2) {
    this._current.writer.writeVertex(e2);
  }
  vertexWriteF32(e2) {
    this._current.writer.writeVertexF32(e2);
  }
  vertexEnd() {
  }
  vertexWriter() {
    return this._current.writer.vertexWriter;
  }
  indexWrite(e2) {
    this._current.writer.writeIndex(e2);
  }
  indexWriter() {
    return this._current.writer.indexWriter;
  }
  metricWriter() {
    return this._current.writer.metricWriter;
  }
  metricStart(e2, t2, r2, n2, a2, h2, u2, c2) {
    this._current.writer = this._getVertexWriter(E$2.LABEL);
    const o2 = this._current.writer.metricWriter;
    o2.push(f$7(e2)), o2.push(t2), o2.push(r2), o2.push(n2), o2.push(a2), o2.push(h2), o2.push(u2), o2.push(c2), o2.push(255), this._current.metricBoxLenPointer = o2.push(0);
  }
  metricEnd() {
    const e2 = this._current.writer.metricWriter;
    e2.getValue(this._current.metricBoxLenPointer) === 0 && e2.seek(e2.length - 10);
  }
  metricBoxWrite(e2, t2, r2, i2) {
    const s2 = this._current.writer.metricWriter;
    s2.incr(this._current.metricBoxLenPointer), s2.push(0), s2.push(0), s2.push(e2), s2.push(t2), s2.push(r2), s2.push(i2);
  }
  recordEnd() {
    const e2 = this._current.vertStart, r2 = this._current.writer.vertexCount - e2;
    if (!r2)
      return false;
    this.hasRecords = true;
    const i2 = this._current.indexStart, h2 = this._current.writer.indexCount - i2;
    if (this._current.writer.recordEnd(this._current.id, this._current.materialKey, this._current.insertAfter, i2, h2, e2, r2, this._current.sortKey), !this._pixelBufferEnabled || this._hasAggregate || this._current.overlaps === 0 || this._current.geometryType === E$2.LABEL)
      return true;
    const u2 = this._current.writer;
    for (let s2 = 0; s2 < 8; s2++) {
      const e3 = 1 << s2;
      if (!!(this._current.overlaps & e3)) {
        this._data.neighbors[s2] || (this._data.neighbors[s2] = { vertexData: new Map(), displayIds: new Set() });
        const r3 = this._data.neighbors[s2], i3 = this._current.geometryType;
        if (!r3.vertexData.has(i3)) {
          const e4 = G$2(i3, this._symbologyType).geometry, s3 = new r$6(i3, e4, ht);
          r3.vertexData.set(i3, s3);
        }
        const h3 = r3.vertexData.get(this._current.geometryType), c2 = 8, o2 = 512 * -x$6(e3) * c2, _2 = 512 * -m$3(e3) * c2;
        h3.copyLastFrom(u2, o2, _2), r3.displayIds.add(this._current.id);
      }
    }
    return true;
  }
  _addOverlap(e2, t2, i2, s2) {
    const n2 = 255 ^ ((e2 < 0 + i2 ? y$4 : e2 >= o$4 - i2 ? f$6 : y$4 | f$6) | (t2 < 0 + s2 ? v$3 : t2 >= o$4 - s2 ? w$3 : v$3 | w$3));
    this._current.overlaps |= n2;
  }
  _getVertexWriter(e2) {
    if (!this._data.self.has(e2)) {
      const t2 = this._data.self, r2 = G$2(e2, this._symbologyType).geometry;
      t2.set(e2, new r$6(e2, r2, this.hint.records));
    }
    return this._data.self.get(e2);
  }
}
const n$3 = 0, o$2 = 100;
function t$2(n2, o2, t2) {
  return n2[0] = o2[0] - t2[0], n2[1] = o2[1] - t2[1], n2;
}
function i$3(n2, o2) {
  return Math.sqrt(n2 * n2 + o2 * o2);
}
function r$5(n2) {
  const o2 = i$3(n2[0], n2[1]);
  n2[0] /= o2, n2[1] /= o2;
}
function u$9(n2, o2) {
  return i$3(n2[0] - o2[0], n2[1] - o2[1]);
}
function c$4(n2) {
  return typeof n2 == "function";
}
function e$2(n2 = 2) {
  return 1 / Math.max(n2, 1);
}
function x$5(t2, i2) {
  return [!!t2.minScale && i2.scaleToZoom(t2.minScale) || n$3, !!t2.maxScale && i2.scaleToZoom(t2.maxScale) || o$2];
}
function r$4(t2, e2) {
  return t2[e2 + 1];
}
function h$3(t2) {
  return t2.length - 1;
}
function a$2(t2) {
  let e2 = 0;
  for (let s2 = 0; s2 < h$3(t2); s2++)
    e2 += d$4(t2, s2);
  return e2;
}
function d$4(t2, e2, s2 = 1) {
  const [n2, i2] = r$4(t2, e2);
  return Math.sqrt(n2 * n2 + i2 * i2) * s2;
}
class c$3 {
  constructor(t2, e2, s2, n2, i2) {
    this._segments = t2, this._index = e2, this._distance = s2, this._xStart = n2, this._yStart = i2, this._done = false;
  }
  static create(t2) {
    return new c$3(t2, 0, 0, t2[0][0], t2[0][1]);
  }
  clone() {
    return new c$3(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t2) {
    return this._index === t2._index || t2._index === this._index - 1 && (this._distance === 0 || t2._distance === 1) || t2._index === this._index + 1 && (this._distance === 1 || t2._distance === 0);
  }
  leq(t2) {
    return this._index < t2._index || this._index === t2._index && this._distance <= t2._distance;
  }
  geq(t2) {
    return this._index > t2._index || this._index === t2._index && this._distance >= t2._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t2 = this.dy, e2 = (0 * t2 + -1 * -this.dx) / (1 * this.length);
    let s2 = Math.acos(e2);
    return t2 > 0 && (s2 = 2 * Math.PI - s2), s2;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t2, dy: e2 } = this;
    return Math.sqrt(t2 * t2 + e2 * e2);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < h$3(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t2, e2) {
    const s2 = this.backwardLength;
    if (t2 <= s2)
      return this._distance = (s2 - t2) / this.length, this;
    let n2 = this.backwardLength;
    for (; this.prev(); ) {
      if (n2 + this.length > t2)
        return this._seekBackwards(t2 - n2);
      n2 += this.length;
    }
    return this._distance = 0, e2 ? this : null;
  }
  seek(t2, e2 = false) {
    if (t2 < 0)
      return this._seekBackwards(Math.abs(t2), e2);
    if (t2 <= this.remainingLength)
      return this._distance = (this.backwardLength + t2) / this.length, this;
    let s2 = this.remainingLength;
    for (; this.next(); ) {
      if (s2 + this.length > t2)
        return this.seek(t2 - s2, e2);
      s2 += this.length;
    }
    return this._distance = 1, e2 ? this : null;
  }
}
function u$8(t2, e2, s2, n2 = true) {
  const i2 = a$2(t2), r2 = c$3.create(t2), h2 = i2 / 2;
  if (!n2)
    return r2.seek(h2), void s2(r2.clone(), 0, h2 + 0 * e2, i2);
  const d2 = Math.max((i2 - e2) / 2, 0), u2 = Math.floor(d2 / e2), o2 = h2 - u2 * e2;
  r2.seek(o2);
  for (let a2 = -u2; a2 <= u2; a2++)
    r2.x < 512 && r2.x >= 0 && r2.y < 512 && r2.y >= 0 && s2(r2.clone(), a2, h2 + a2 * e2, i2), r2.seek(e2);
}
function l$4(t2, e2) {
  const s2 = e2;
  for (let n2 = 0; n2 < t2.length; n2++) {
    let e3 = t2[n2];
    const i2 = [];
    i2.push(e3[0]);
    for (let t3 = 1; t3 < e3.length; t3++) {
      let [s3, n3] = i2[t3 - 1];
      s3 += e3[t3][0], n3 += e3[t3][1], i2.push([s3, n3]);
    }
    g$5(i2, s2);
    const r2 = [];
    r2.push(i2[0]);
    for (let t3 = 1; t3 < i2.length; t3++) {
      const [e4, s3] = i2[t3 - 1], [n3, h2] = i2[t3], a2 = Math.round(n3 - e4), d2 = Math.round(h2 - s3);
      r2.push([a2, d2]);
    }
    t2[n2] = r2, e3 = r2;
  }
  return t2;
}
function g$5(t2, e2) {
  const r2 = 1e-6;
  if (e2 <= 0)
    return;
  const h2 = t2.length;
  if (h2 < 3)
    return;
  const a2 = [];
  let d2 = 0;
  a2.push(0);
  for (let n2 = 1; n2 < h2; n2++)
    d2 += u$9(t2[n2], t2[n2 - 1]), a2.push(d2);
  e2 = Math.min(e2, 0.2 * d2);
  const c2 = [];
  c2.push(t2[0][0]), c2.push(t2[0][1]);
  const u2 = t2[h2 - 1][0], o2 = t2[h2 - 1][1], _2 = t$2([0, 0], t2[0], t2[1]);
  r$5(_2), t2[0][0] += e2 * _2[0], t2[0][1] += e2 * _2[1], t$2(_2, t2[h2 - 1], t2[h2 - 2]), r$5(_2), t2[h2 - 1][0] += e2 * _2[0], t2[h2 - 1][1] += e2 * _2[1];
  for (let s2 = 1; s2 < h2; s2++)
    a2[s2] += e2;
  a2[h2 - 1] += e2;
  const l2 = 0.5 * e2;
  for (let s2 = 1; s2 < h2 - 1; s2++) {
    let n2 = 0, i2 = 0, d3 = 0;
    for (let h3 = s2 - 1; h3 >= 0 && !(a2[h3 + 1] < a2[s2] - l2); h3--) {
      const c3 = l2 + a2[h3 + 1] - a2[s2], u3 = a2[h3 + 1] - a2[h3], o3 = a2[s2] - a2[h3] < l2 ? 1 : c3 / u3;
      if (Math.abs(o3) < r2)
        break;
      const _3 = o3 * o3, g2 = o3 * c3 - 0.5 * _3 * u3, x2 = o3 * u3 / e2, f2 = t2[h3 + 1], y2 = t2[h3][0] - f2[0], k2 = t2[h3][1] - f2[1];
      n2 += x2 / g2 * (f2[0] * o3 * c3 + 0.5 * _3 * (c3 * y2 - u3 * f2[0]) - _3 * o3 * u3 * y2 / 3), i2 += x2 / g2 * (f2[1] * o3 * c3 + 0.5 * _3 * (c3 * k2 - u3 * f2[1]) - _3 * o3 * u3 * k2 / 3), d3 += x2;
    }
    for (let c3 = s2 + 1; c3 < h2 && !(a2[c3 - 1] > a2[s2] + l2); c3++) {
      const h3 = l2 - a2[c3 - 1] + a2[s2], u3 = a2[c3] - a2[c3 - 1], o3 = a2[c3] - a2[s2] < l2 ? 1 : h3 / u3;
      if (Math.abs(o3) < r2)
        break;
      const _3 = o3 * o3, g2 = o3 * h3 - 0.5 * _3 * u3, x2 = o3 * u3 / e2, f2 = t2[c3 - 1], y2 = t2[c3][0] - f2[0], k2 = t2[c3][1] - f2[1];
      n2 += x2 / g2 * (f2[0] * o3 * h3 + 0.5 * _3 * (h3 * y2 - u3 * f2[0]) - _3 * o3 * u3 * y2 / 3), i2 += x2 / g2 * (f2[1] * o3 * h3 + 0.5 * _3 * (h3 * k2 - u3 * f2[1]) - _3 * o3 * u3 * k2 / 3), d3 += x2;
    }
    c2.push(n2 / d3), c2.push(i2 / d3);
  }
  c2.push(u2), c2.push(o2);
  for (let s2 = 0, n2 = 0; s2 < h2; s2++)
    t2[s2][0] = c2[n2++], t2[s2][1] = c2[n2++];
}
class e$1 {
  static getPlacement(e2, o2, s2, c2) {
    const n2 = g$7(o2);
    if (!n2)
      return null;
    const m2 = a$3(e2);
    return n2.execute(m2, o2, s2, c2);
  }
}
const f$5 = 8, _$2 = (_2) => class extends _2 {
  constructor(...e2) {
    super(...e2), this._isCIM = false, this._vertexBoundsScale = 1, this.geometryType = E$2.TEXT, this._aux = x$7(0, 0, this._referenceSize, this._bitset);
  }
  bindTextInfo(t2, i2) {
    t2 && t2.length ? this._shapingInfo = o$5(t2, (e2) => j$3(e2, i2, { scale: this._scale, angle: this._angle, xOffset: this._xOffset, yOffset: this._yOffset, hAlign: this._xAlignD, vAlign: this._yAlignD, maxLineWidth: Math.max(32, Math.min(this._lineWidth, 512)), lineHeight: f$8 * Math.max(0.25, Math.min(this._lineHeight, 4)), decoration: this._decoration, isCIM: this._isCIM })) : this._shapingInfo = null;
  }
  _write(e2, t2, i2, r2) {
    const s2 = t2.getDisplayId();
    this._writeGeometry(e2, t2, s2, i2, r2);
  }
  _writeGeometry(e2, r2, s2, h2, a2) {
    const x2 = this._shapingInfo;
    if (t$5(x2))
      return;
    if (r$7(this._textPlacement)) {
      const t2 = a2 != null ? a2 : r2.readLegacyGeometryForDisplay();
      return this._writePlacedText(e2, s2, t2, x2, h2);
    }
    const l2 = a2 ? Gt(nt(a2), 2) : r2.geometryType === "esriGeometryPolygon" ? r2.readCentroid() : r2.readGeometryForDisplay();
    if (!t$5(l2)) {
      if (l2.isPoint) {
        const [t2, i2] = l2.coords;
        if (!e2.hasAggregates && e2.hasPixelBufferEnabled && (t2 < 0 || t2 >= 512 || i2 < 0 || i2 >= 512))
          return;
        return this._writeGlyphs(e2, s2, { x: t2, y: i2 }, x2);
      }
      l2.forEachVertex((t2, i2) => this._writeGlyphs(e2, s2, { x: t2, y: i2 }, x2));
    }
  }
  _writePlacedText(e2, t2, i2, o2, n2) {
    const a2 = e$6(this._textPlacement), x2 = e$1.getPlacement(i2, a2, u$b(1), n2.geometryEngine);
    if (!x2)
      return;
    let l2 = x2.next();
    for (; l2 != null; ) {
      const i3 = -l2.getAngle();
      o2.setRotation(i3);
      const r2 = l2.tx, s2 = -l2.ty;
      r2 < 0 || r2 >= 512 || s2 < 0 || s2 >= 512 ? l2 = x2.next() : (this._writeGlyphs(e2, t2, { x: r2, y: s2 }, o2), o2.setRotation(-i3), l2 = x2.next());
    }
  }
  _writeGlyphs(e2, t2, i2, r2) {
    const s2 = U.load(this._materialKey), o2 = w$4(Math.round(f$5 * i2.x), Math.round(f$5 * i2.y)), n2 = this._vertexBoundsScale, h2 = r2.bounds, a2 = 2 * Math.max(h2.width, h2.height);
    for (const x2 of r2.glyphs)
      s2.textureBinding = x2.textureBinding, e2.recordStart(t2, s2.data, this.geometryType, true), e2.vertexBounds(i2.x + h2.x + this._xOffset, i2.y + h2.y - this._yOffset, a2 * n2, a2 * n2), this._writeVertices(e2, t2, o2, x2), e2.recordEnd();
  }
  _writeGlyph(e2, t2, i2, r2, s2) {
    const o2 = U.load(this._materialKey), n2 = w$4(Math.round(f$5 * i2), Math.round(f$5 * r2));
    o2.textureBinding = s2.textureBinding, e2.recordStart(t2, o2.data, this.geometryType, true);
    const h2 = s2.bounds, a2 = this._vertexBoundsScale;
    e2.vertexBounds(i2 + h2.x * a2, r2 + h2.y * a2, h2.width * a2, h2.height * a2), this._writeVertices(e2, t2, n2, s2), e2.recordEnd();
  }
  _writeVertices(e2, t2, i2, r2) {
    const s2 = e2.vertexCount();
    this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.upperLeft), e2.vertexWrite(r2.texcoords.upperLeft), e2.vertexEnd(), this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.upperRight), e2.vertexWrite(r2.texcoords.upperRight), e2.vertexEnd(), this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.lowerLeft), e2.vertexWrite(r2.texcoords.lowerLeft), e2.vertexEnd(), this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.lowerRight), e2.vertexWrite(r2.texcoords.lowerRight), e2.vertexEnd(), e2.indexWrite(s2 + 0), e2.indexWrite(s2 + 1), e2.indexWrite(s2 + 2), e2.indexWrite(s2 + 1), e2.indexWrite(s2 + 3), e2.indexWrite(s2 + 2);
  }
  _writeVertexCommon(e2, t2, i2, r2) {
    const s2 = this._color, o2 = this._haloColor, n2 = x$7(0, 0, this._referenceSize, this._bitset), h2 = x$7(0, 0, this._size, this._haloSize);
    e2.vertexWrite(i2), e2.vertexWrite(t2), e2.vertexWrite(s2), e2.vertexWrite(o2), e2.vertexWrite(h2), e2.vertexWrite(n2), e2.vertexWrite(this._minMaxZoom);
  }
};
class r$3 {
  bindFeature(e2, t2, r2) {
  }
  write(r2, s2, f2, i2) {
    var _a;
    if (t$5(this._effects) || ((_a = this._effects) == null ? void 0 : _a.length) === 0)
      return this._write(r2, s2, i2);
    const c2 = f$9.executeEffects(this._effects, s2.readLegacyGeometryForDisplay(), i2.geometryEngine);
    let o2 = f$9.next(c2);
    for (; o2; )
      this._write(r2, s2, i2, o2), o2 = f$9.next(c2);
  }
  _write(e2, t2, r2, s2) {
  }
}
const M$5 = 5;
class p$5 extends _$2(r$3) {
  constructor(t2, a2, l2, _2, d2, x2, z2, u2, p2, g2, j2, S2, y2, b2, T2, V, A2, C2, I2 = false, K2, R) {
    super(), this._xOffset = u$b(y2), this._yOffset = u$b(b2), this._decoration = g2 || "none", this._color = d2, this._haloColor = x2, this._haloSize = Math.min(Math.floor(M$5 * u$b(o$6(l2))), 127), this._size = Math.min(Math.round(u$b(a2)), 127);
    const v2 = Math.min(Math.round(u$b(_2 || a2)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * v2)), this._scale = this._size / j$4, this._angle = S2, this._justify = s$3(z2 || "center"), this._xAlignD = r$8(z2 || "center"), this._yAlignD = n$4(u2 || "baseline"), this._baseline = (u2 || "baseline") === "baseline", this._bitset = (p2 === i$5.MAP ? 1 : 0) | (j2 ? 1 : 0) << 1;
    const B2 = U.load(t2);
    B2.sdf = true, this._materialKey = B2.data, this._lineWidth = u$b(T2) || 512, this._lineHeight = V || 1, this._textPlacement = A2, this._effects = C2, this._isCIM = I2, this._minMaxZoom = w$4(Math.round(K2 * at), Math.round(R * at));
  }
  static fromText(e2, i2) {
    const s2 = new p$5(e2.materialKey, e2.font.size, e2.haloSize || 0, e2.font.size, e2.color && s$4(e2.color) || 0, e2.haloColor && s$4(e2.haloColor) || 0, e2.horizontalAlignment, e2.verticalAlignment, i$5.SCREEN, e2.font.decoration, false, e2.angle || 0, e2.xoffset, e2.yoffset, e2.lineWidth, e2.lineHeight, null, null, false, n$3, o$2), [, n2] = n$5(e2.text);
    return s2.bindTextInfo(i2, n2), s2._vertexBoundsScale = e2.maxVVSize ? e2.maxVVSize / e2.font.size : 1, s2;
  }
  static fromCIMText(e2, i2, o2) {
    const s2 = e2.scaleFactor || 1, n2 = e2.size * e2.sizeRatio * s2, [r2, a2] = x$5(e2.scaleInfo, o2), m2 = new p$5(e2.materialKey, n2, e2.outlineSize * e2.sizeRatio, e2.referenceSize, f$a(e2.color), f$a(e2.outlineColor), e2.horizontalAlignment, e2.verticalAlignment, e2.alignment, e2.decoration, e2.colorLocked, e2.angle, e2.offsetX * e2.sizeRatio * s2, e2.offsetY * e2.sizeRatio * s2, 512, 1, e2.markerPlacement, e2.effects, true, r2, a2), [, h2] = n$5(e2.text);
    return m2.bindTextInfo(i2, h2), m2._vertexBoundsScale = e2.maxVVSize ? e2.maxVVSize / n2 : 1, m2;
  }
}
const y$3 = s$5.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"), x$4 = (t2, i2 = "mapview-labeling") => y$3.error(new s$2(i2, t2)), L$1 = 1, P$1 = 0, M$4 = 4, S$1 = 25;
function w$2(e2, t2) {
  const n2 = !!e2.minScale && t2.scaleToZoom(e2.minScale) || 0;
  return a$4(n2, 0, 25.5);
}
function v$2(e2, t2) {
  const n2 = !!e2.maxScale && t2.scaleToZoom(e2.maxScale) || 255;
  return a$4(n2, 0, 25.5);
}
function A$1(e2) {
  const t2 = new Map();
  return (i2) => (t2.has(i2) || t2.set(i2, e2(i2)), t2.get(i2));
}
const Z$1 = A$1((e2) => {
  let t2 = 0;
  if (e2 === 0)
    return 1 / 0;
  for (; !(e2 % 2); )
    t2++, e2 /= 2;
  return t2;
}), I = (e2) => Math.floor(127 * e2 + 127), O = (e2) => Math.floor(10 * e2), z$1 = (e2) => Math.round(e2 * (254 / 360));
class G$1 extends p$5 {
  constructor(e2, t2, i2, n2) {
    var _a, _b, _c;
    super(e2, i2.font.size, i2.haloSize || 0, i2.font.size, i2.color && s$4(i2.color) || 0, i2.haloColor && s$4(i2.haloColor) || 0, i2.horizontalAlignment, i2.verticalAlignment, i$6(t2.labelPlacement) ? i$5.MAP : i$5.SCREEN, i2.font.decoration, false, i2.angle || 0, i2.xoffset, i2.yoffset, i2.lineWidth, i2.lineHeight, null, null, null, null, null), this._outLineLabelAngle = 0, this._refPlacementPadding = 0, this._refPlacementDirX = 0, this._refPlacementDirY = 0, this._refOffsetX = 0, this._refOffsetY = 0, this._zoomLevel = 0, this.geometryType = E$2.LABEL, this._allowOverrun = (_a = t2.allowOverrun) != null ? _a : false, this._repeatLabel = (_b = t2.repeatLabel) != null ? _b : true, this._labelPosition = (_c = t2.labelPosition) != null ? _c : "curved";
    const o2 = w$2(t2, n2), h2 = v$2(t2, n2), c2 = t2.labelPlacement, [g2, u2] = a$5(c2);
    this._xAlignD = g2, this._yAlignD = u2, this._minZoom = o2, this._maxZoom = h2, this._refPlacementPadding = u$b(i2.haloSize) + k$3, this._repeatLabelDistance = t2.repeatLabelDistance ? u$b(t2.repeatLabelDistance) : 128;
    const d2 = Z$2.load(e2);
    d2.sdf = true, this._materialKey = d2.data;
  }
  static fromLabelClass(e2, t2) {
    if (e2.labelPlacement === "esriServerLinePlacementCenterAlong") {
      const t3 = e2.symbol;
      t3.xoffset = 0, t3.yoffset = 0, t3.angle = 0, t3.font.decoration = "none";
    }
    return new G$1(e2.materialKey, e2, e2.symbol, t2);
  }
  get _shapedBox() {
    return e$6(this._shapingInfo).bounds;
  }
  setZoomLevel(e2) {
    this._zoomLevel = e2;
  }
  bindReferenceTemplate(e2) {
    let t2 = c$6(this._xAlignD), i2 = o$7(this._yAlignD);
    if (this._refOffsetX = 0, this._refOffsetY = 0, t$5(e2))
      return void (this._refSymbolAndPlacementOffset = x$7(0, 0, I(t2), I(i2)));
    if (e2.boundsType === "circle" && (t2 || i2)) {
      const e3 = Math.sqrt(t2 * t2 + i2 * i2);
      t2 /= e3, i2 /= e3;
    }
    const n2 = Math.max(e2.height, e2.width), s2 = this._refPlacementPadding * M$4;
    this._refSymbolAndPlacementOffset = x$7(s2, n2, I(t2), I(i2)), this._referenceSize = n2, this._refPlacementDirX = t2, this._refPlacementDirY = i2, this._refOffsetX = e2.xOffset, this._refOffsetY = e2.yOffset;
  }
  _write(e2, t2) {
    if (t$5(this._shapingInfo))
      return;
    const i2 = this._shapingInfo, n2 = t2.getDisplayId(), s2 = t2.geometryType === "esriGeometryPolygon" ? t2.readLegacyCentroid() : t2.readLegacyGeometry();
    if (s2)
      switch (this._current = { out: e2, inId: n2, inShaping: i2, zoomLevel: this._zoomLevel }, t2.geometryType) {
        case "esriGeometryPolyline":
          this._placeLineLabels(s2);
          break;
        case "esriGeometryPoint":
        case "esriGeometryPolygon":
          this._placePointLabels(s2);
          break;
        default:
          x$4("mapview-labeling", `Geometry of type ${t2.geometryType} is not supported`);
      }
  }
  _isVisible(e2, t2) {
    const i2 = O(this._current.zoomLevel);
    return O(e2) <= i2 && i2 <= O(t2);
  }
  _placePointLabels(e2) {
    const { out: t2, inId: i2, inShaping: n2 } = this._current;
    this._writeGlyphs(t2, i2, e2, n2);
  }
  _placeLineLabels(e2) {
    const t2 = l$4(e2.paths, this._current.inShaping.bounds.width), i2 = this._placeSubdivGlyphs.bind(this), n2 = (this._shapedBox.width + this._repeatLabelDistance) / (1 << L$1);
    for (const o2 of t2)
      u$8(o2, n2, i2, this._repeatLabel);
  }
  _placeSubdivGlyphs(e2, t2, i2, n2) {
    const o2 = Z$1(t2), s2 = this._shapedBox.width / (1 << L$1), r2 = Math.sqrt(this._repeatLabelDistance) / (1 << L$1), a2 = Math.min(i2, n2 - i2), l2 = this._current.inShaping.isMultiline ? S$1 : Math.log2(a2 / (r2 + s2 / 2)), h2 = t2 === 0 ? l2 : Math.min(o2, l2), c2 = Math.max(this._minZoom, this._current.zoomLevel + L$1 - h2), m2 = this._current.zoomLevel - c2, _2 = this._shapedBox.width / 2 * 2 ** m2;
    this._current.inShaping.isMultiline ? t2 === 0 && this._placeStraight(e2, c2) : this._allowOverrun && m2 < 0 ? this._placeStraightAlong(e2, this._minZoom) : this._labelPosition === "parallel" ? this._placeStraightAlong(e2, c2) : this._labelPosition === "curved" && this._placeCurved(e2, c2, _2);
  }
  _placeStraight(e2, t2) {
    const { out: i2, inId: n2, inShaping: o2 } = this._current, s2 = Math.ceil(e2.angle * (180 / Math.PI) % 360), r2 = Math.ceil((e2.angle * (180 / Math.PI) + 180) % 360);
    this._outLineLabelAngle = z$1(s2), this._writeGlyphs(i2, n2, e2, o2, t2), this._outLineLabelAngle = z$1(r2), this._writeGlyphs(i2, n2, e2, o2, t2);
  }
  _placeCurved(e2, t2, i2) {
    const { out: n2, inId: o2 } = this._current;
    n2.metricStart(o2, t2, e2.x, e2.y, 0, 0, 0, 0);
    const s2 = e2.clone(), r2 = e2.angle * (180 / Math.PI) % 360, a2 = (e2.angle * (180 / Math.PI) + 180) % 360;
    this._outLineLabelAngle = z$1(r2), this._placeFirst(s2, t2, 1), this._placeBack(e2, s2, t2, i2, 1), this._placeForward(e2, s2, t2, i2, 1), this._outLineLabelAngle = z$1(a2), this._placeFirst(s2, t2, 0), this._placeBack(e2, s2, t2, i2, 0), this._placeForward(e2, s2, t2, i2, 0), n2.metricEnd();
  }
  _placeStraightAlong(e2, t2) {
    const { out: i2, inId: n2 } = this._current;
    i2.metricStart(n2, t2, e2.x, e2.y, 0, 0, 0, 0);
    const o2 = e2.clone(), s2 = e2.angle * (180 / Math.PI) % 360, r2 = (e2.angle * (180 / Math.PI) + 180) % 360;
    this._outLineLabelAngle = z$1(s2), this._placeFirst(o2, t2, 1, true), this._outLineLabelAngle = z$1(r2), this._placeFirst(o2, t2, 0, true), i2.metricEnd();
  }
  _placeBack(e2, t2, i2, n2, o2) {
    const s2 = e2.clone();
    let r2 = e2.backwardLength + P$1;
    for (; s2.prev() && !(r2 >= n2); )
      this._placeOnSegment(s2, t2, r2, i2, -1, o2), r2 += s2.length + P$1;
  }
  _placeForward(e2, t2, i2, n2, o2) {
    const s2 = e2.clone();
    let r2 = e2.remainingLength + P$1;
    for (; s2.next() && !(r2 >= n2); )
      this._placeOnSegment(s2, t2, r2, i2, 1, o2), r2 += s2.length + P$1;
  }
  _placeFirst(e2, t2, i2, n2 = false) {
    const o2 = e2, s2 = this._current.inShaping, r2 = s2.glyphs, a2 = this._current.zoomLevel, { out: l2, inId: h2 } = this._current;
    for (const c2 of r2) {
      const r3 = c2.x > s2.bounds.x ? i2 : 1 - i2, m2 = r3 * e2.remainingLength + (1 - r3) * e2.backwardLength, _2 = Math.abs(c2.x + c2.width / 2 - s2.bounds.x), f2 = Math.max(0, a2 + Math.log2(_2 / (m2 + P$1))), g2 = Math.max(t2, n2 ? 0 : f2);
      if (c2.maxZoom = S$1, c2.angle = e2.angle + (1 - i2) * Math.PI, c2.minZoom = g2, this._writeGlyph(l2, h2, o2.x, o2.y, c2), i2 && this._isVisible(c2.minZoom, c2.maxZoom)) {
        const e3 = c2.bounds;
        l2.metricBoxWrite(e3.center[0], e3.center[1], e3.width, e3.height);
      }
    }
  }
  _placeOnSegment(e2, t2, i2, n2, o2, s2) {
    const r2 = this._current.inShaping.glyphs, { out: a2, inId: l2 } = this._current, h2 = this._current.inShaping, c2 = this._current.zoomLevel, m2 = e2.dx / e2.length, _2 = e2.dy / e2.length, f2 = { x: e2.x + i2 * -o2 * m2, y: e2.y + i2 * -o2 * _2 };
    for (const g2 of r2) {
      const r3 = g2.x > h2.bounds.x ? s2 : 1 - s2;
      if (!(r3 && o2 === 1 || !r3 && o2 === -1))
        continue;
      const m3 = Math.abs(g2.x + g2.width / 2 - h2.bounds.x), _3 = Math.max(0, c2 + Math.log2(m3 / i2) - 0.1), p2 = Math.max(n2, c2 + Math.log2(m3 / (i2 + e2.length + P$1)));
      if (_3 !== 0 && (g2.angle = e2.angle + (1 - s2) * Math.PI, g2.minZoom = p2, g2.maxZoom = _3, this._writeGlyph(a2, l2, f2.x, f2.y, g2), s2 && this._isVisible(g2.minZoom, g2.maxZoom))) {
        const i3 = g2.bounds, n3 = e2.x - t2.x, o3 = e2.y - t2.y;
        a2.metricBoxWrite(i3.center[0] + n3, i3.center[1] + o3, i3.width, i3.height);
      }
    }
  }
  _writeGlyphs(e2, t2, i2, n2, o2 = this._minZoom) {
    if (i2.x < 0 || i2.x >= 512 || i2.y < 0 || i2.y >= 512)
      return;
    const s2 = i2.x + this._refOffsetX, r2 = i2.y - this._refOffsetY;
    for (const c2 of n2.glyphs)
      c2.minZoom = o2, c2.maxZoom = this._maxZoom, this._writeGlyph(e2, t2, s2, r2, c2);
    const a2 = this._refPlacementDirX, l2 = this._refPlacementDirY, h2 = n2.boundsT;
    e2.metricStart(t2, o2, s2, r2, a2, l2, this._referenceSize, this._materialKey), e2.metricBoxWrite(h2.center[0], h2.center[1], h2.width, h2.height), e2.metricEnd();
  }
  _writeVertexCommon(e2, t2, i2, n2) {
    const o2 = this._color, s2 = this._haloColor, r2 = x$7(0, 0, this._size, this._haloSize), a2 = Math.max(n2.minZoom, this._minZoom), l2 = Math.min(n2.maxZoom, this._maxZoom), h2 = x$7(O(a2), O(l2), this._outLineLabelAngle, 0);
    e2.vertexWrite(i2), e2.vertexWrite(t2), e2.vertexWrite(o2), e2.vertexWrite(s2), e2.vertexWrite(r2), e2.vertexWrite(this._refSymbolAndPlacementOffset), e2.vertexWrite(h2);
  }
}
const g$4 = 3.14159265359 / 180, y$2 = 8, u$7 = (u2) => class extends u2 {
  constructor(...t2) {
    super(...t2), this.angle = 0, this.xOffset = 0, this.yOffset = 0, this.width = 0, this.height = 0, this.boundsType = "square", this._anchorX = 0, this._anchorY = 0, this._computedWidth = 0, this._computedHeight = 0, this._vertexBoundsScaleX = 1, this._vertexBoundsScaleY = 1, this._offsets = { xUpperLeft: 0, yUpperLeft: 0, xUpperRight: 0, yUpperRight: 0, xBottomLeft: 0, yBottomLeft: 0, xBottomRight: 0, yBottomRight: 0 }, this.geometryType = E$2.MARKER;
  }
  _write(t2, e2, i2, r2) {
    const s2 = e2.getDisplayId();
    t2.recordStart(s2, this._materialKey, this.geometryType, true), this._writeGeometry(t2, e2, s2, i2, r2), t2.recordEnd();
  }
  _writeGeometry(i2, r2, s2, o2, h2) {
    if (r$7(this._markerPlacement))
      return this._writePlacedMarkers(i2, r2, o2, h2);
    if (!h2 && r2.geometryType === "esriGeometryPoint") {
      const t2 = r2.getX(), e2 = r2.getY();
      if (!i2.hasAggregates && i2.hasPixelBufferEnabled && (t2 < 0 || t2 >= 513 || e2 < 0 || e2 >= 513))
        return;
      return this._writeVertices(i2, s2, this._getPos(t2, e2), t2, e2);
    }
    const f2 = h2 ? Gt(nt(h2), 2) : r2.geometryType === "esriGeometryPolygon" ? r2.readCentroid() : r2.readGeometryForDisplay();
    if (!t$5(f2)) {
      if (f2.isPoint) {
        const [t2, e2] = f2.coords;
        if (!i2.hasAggregates && i2.hasPixelBufferEnabled && (t2 < 0 || t2 >= 512 || e2 < 0 || e2 >= 512))
          return;
        return this._writeVertices(i2, s2, this._getPos(t2, e2), t2, e2);
      }
      f2.forEachVertex((t2, e2) => {
        const r3 = 2 * o$4;
        t2 < -r3 || t2 >= r3 || e2 < -r3 || e2 >= r3 || this._writeVertices(i2, s2, this._getPos(t2, e2), t2, e2);
      });
    }
  }
  _writePlacedMarkers(t2, e2, s2, o2) {
    const f2 = o2 != null ? o2 : e2.readLegacyGeometryForDisplay(), n2 = e$1.getPlacement(f2, e$6(this._markerPlacement), u$b(1), s2.geometryEngine);
    if (!n2)
      return;
    const x2 = e2.getDisplayId(), m2 = n$7(), _2 = n$6(), c2 = -128, l2 = 640;
    let v2 = n2.next();
    for (; v2 != null; ) {
      const e3 = v2.tx, i2 = -v2.ty;
      e3 >= c2 && e3 <= l2 && i2 >= c2 && i2 <= l2 && (this._applyTransformation(_2, m2, -v2.getAngle() / g$4), this._writeVertices(t2, x2, this._getPos(e3, i2), e3, i2)), v2 = n2.next();
    }
  }
  _writeVertices(t2, e2, i2, r2, s2) {
    const o2 = N.load(this._materialKey);
    return o2.symbologyType === S$2.HEATMAP ? this._writeHeatmapVertices(t2, e2, i2) : this._writeMarkerVertices(t2, e2, o2, i2, r2, s2);
  }
  _writeMarkerVertices(t2, e2, i2, r2, s2, o2) {
    const h2 = i2.vvRotation, f2 = t2.vertexCount();
    let n2 = this._computedWidth * this._vertexBoundsScaleX, x2 = this._computedHeight * this._vertexBoundsScaleY;
    if (this.angle) {
      const t3 = Math.max(n2, x2);
      n2 = t3, x2 = t3;
    }
    if (h2) {
      const t3 = Math.max(this.xOffset, this.yOffset);
      n2 += t3, x2 += t3;
    }
    t2.vertexBounds(s2 + this.xOffset, o2 - this.yOffset, n2, x2), t2.vertexWrite(r2), t2.vertexWrite(this._offsetUpperLeft), t2.vertexWrite(this._texUpperLeft), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), t2.vertexWrite(r2), t2.vertexWrite(this._offsetUpperRight), t2.vertexWrite(this._texUpperRight), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), t2.vertexWrite(r2), t2.vertexWrite(this._offsetBottomLeft), t2.vertexWrite(this._texBottomLeft), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), t2.vertexWrite(r2), t2.vertexWrite(this._offsetBottomRight), t2.vertexWrite(this._texBottomRight), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), this._writeIndices(t2, f2);
  }
  _writeHeatmapVertices(t2, e2, i2) {
    const r2 = t2.vertexCount();
    t2.vertexWrite(i2), t2.vertexWrite(this._offsetUpperLeft), t2.vertexWrite(e2), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetUpperRight), t2.vertexWrite(e2), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetBottomLeft), t2.vertexWrite(e2), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetBottomRight), t2.vertexWrite(e2), t2.vertexEnd(), this._writeIndices(t2, r2);
  }
  _writeIndices(t2, e2) {
    t2.indexWrite(e2 + 0), t2.indexWrite(e2 + 1), t2.indexWrite(e2 + 2), t2.indexWrite(e2 + 1), t2.indexWrite(e2 + 3), t2.indexWrite(e2 + 2);
  }
  _applyTransformation(t2, e2, i2 = 0) {
    f$b(t2, t$6(this.xOffset, -this.yOffset)), this.angle + i2 !== 0 && e$7(t2, t2, g$4 * (this.angle + i2));
    const r2 = this._computedWidth, h2 = this._computedHeight, a2 = -(0.5 + this._anchorX) * r2, m2 = -(0.5 - this._anchorY) * h2;
    r$9(e2, a2, m2), z$2(e2, e2, t2), this._offsetUpperLeft = w$4(16 * e2[0], 16 * e2[1]), this._offsets.xUpperLeft = e2[0], this._offsets.yUpperLeft = e2[1], r$9(e2, a2 + r2, m2), z$2(e2, e2, t2), this._offsetUpperRight = w$4(16 * e2[0], 16 * e2[1]), this._offsets.xUpperRight = e2[0], this._offsets.yUpperRight = e2[1], r$9(e2, a2, m2 + h2), z$2(e2, e2, t2), this._offsetBottomLeft = w$4(16 * e2[0], 16 * e2[1]), this._offsets.xBottomLeft = e2[0], this._offsets.yBottomLeft = e2[1], r$9(e2, a2 + r2, m2 + h2), z$2(e2, e2, t2), this._offsetBottomRight = w$4(16 * e2[0], 16 * e2[1]), this._offsets.xBottomRight = e2[0], this._offsets.yBottomRight = e2[1];
  }
  _getPos(t2, e2) {
    return w$4(Math.round(y$2 * t2), Math.round(y$2 * e2));
  }
};
class b$4 extends u$7(r$3) {
  constructor(t2, e2, r2, a2, n2, p2, S2, g2, V, z2, B2, b2, k2, L2, R, j2, w2, C2, P2, E2, U2, A2, T2) {
    super(), this.angle = a2, this.height = S2, this.width = p2, this.xOffset = e2 * P2, this.yOffset = r2 * P2, this._markerPlacement = E2, this._effects = U2, this._anchorX = j2, this._anchorY = w2, this._minMaxZoom = w$4(Math.round(A2 * at), Math.round(T2 * at));
    const v2 = (L2 === i$5.MAP ? rt : pt) | (B2 ? nt$1 : 0) | (k2 ? st : 0) | (b2 ? ft : 0), K2 = R && R.sdf, W = N.load(t2);
    W.sdf = K2, W.pattern = true, W.textureBinding = R.textureBinding, this._materialKey = W.data, this._fillColor = n2, this._outlineColor = V, this._sizeOutlineWidth = x$7(Math.round(Math.min(Math.sqrt(128 * p2), 255)), Math.round(Math.min(Math.sqrt(128 * S2), 255)), Math.round(Math.min(Math.sqrt(128 * z2), 255)), Math.round(Math.min(Math.sqrt(128 * g2), 255)));
    const X2 = R.rect.x + et, q2 = R.rect.y + et, Y = X2 + R.width, H = q2 + R.height;
    this._offsets.xUpperLeft = X2, this._offsets.yUpperLeft = q2, this._offsets.xUpperRight = Y, this._offsets.yUpperRight = q2, this._offsets.xBottomLeft = X2, this._offsets.yBottomLeft = H, this._offsets.xBottomRight = Y, this._offsets.yBottomRight = H, W.symbologyType === S$2.PIE_CHART ? (this._texUpperLeft = w$4(0, 1), this._texUpperRight = w$4(1, 1), this._texBottomLeft = w$4(0, 0), this._texBottomRight = w$4(1, 0)) : (this._texUpperLeft = w$4(X2, q2), this._texUpperRight = w$4(Y, q2), this._texBottomLeft = w$4(X2, H), this._texBottomRight = w$4(Y, H)), p2 *= C2, S2 *= C2, p2 *= P2, S2 *= P2;
    const I2 = Math.round(64 * C2);
    this._bitestAndDistRatio = w$4(v2, I2), this._computedWidth = p2, this._computedHeight = S2;
    const N$1 = n$7(), O2 = n$6();
    this._applyTransformation(O2, N$1);
  }
  static fromCIMMarker(o2, s2, r2) {
    const n2 = s2 && s2.width || 1, h2 = s2 && s2.height || 1, l2 = o2.size, m2 = n2 / h2 * o2.scaleX, f2 = o2.scaleSymbolsProportionally && o2.frameHeight ? l2 / o2.frameHeight : 1;
    let c2 = f$a(o2.color);
    const u2 = f$a(o2.outlineColor), d2 = u$b(l2), p2 = d2 * m2, x2 = u$b(o2.offsetX || 0), M2 = u$b(o2.offsetY || 0), y2 = u$b(o2.outlineWidth || 0) * f2, _2 = o2.alignment || i$5.SCREEN, g2 = u$b(o2.referenceSize), [V, z2] = x$5(o2.scaleInfo, r2);
    s2.sdf || c2 !== 0 || (c2 = -1);
    let B2 = o2.rotation || 0;
    o2.rotateClockwise || (B2 = -B2);
    let k2 = 0, L2 = 0;
    const R = o2.anchorPoint;
    R && (o2.isAbsoluteAnchorPoint ? l2 && (k2 = R.x / (l2 * m2), L2 = R.y / l2) : (k2 = R.x, L2 = R.y));
    const j2 = new b$4(o2.materialKey, x2, M2, B2, c2, p2, d2, g2, u2, y2, o2.colorLocked, o2.scaleSymbolsProportionally, false, _2, s2, k2, L2, o2.sizeRatio, i$7(o2.scaleFactor, 1), o2.markerPlacement, o2.effects, V, z2);
    return j2._vertexBoundsScaleX = o2.maxVVSize ? o2.maxVVSize / p2 : 1, j2._vertexBoundsScaleY = o2.maxVVSize ? o2.maxVVSize / d2 : 1, j2;
  }
  static fromPictureMarker(t2, o2) {
    const s2 = Math.round(u$b(t2.width)), r2 = Math.round(u$b(t2.height)), a2 = i$8, n2 = Math.round(u$b(t2.xoffset || 0)), h2 = Math.round(u$b(t2.yoffset || 0)), l2 = new b$4(t2.materialKey, n2, h2, t2.angle, a2, s2, r2, r2, 0, 0, false, false, false, i$5.SCREEN, o2, 0, 0, 1, 1, null, null, n$3, o$2);
    return l2._vertexBoundsScaleX = t2.maxVVSize ? t2.maxVVSize / t2.width : 1, l2._vertexBoundsScaleY = t2.maxVVSize ? t2.maxVVSize / t2.height : 1, l2;
  }
  static fromSimpleMarker(t2, o2) {
    const s2 = s$4(t2.color), r2 = Math.round(u$b(t2.size)), a2 = r2, h2 = Math.round(u$b(t2.xoffset || 0)), l2 = Math.round(u$b(t2.yoffset || 0)), m2 = t2.style, f2 = t2.outline, c2 = 0 | (f2 && f2.color && s$4(f2.color)), u2 = 0 | (f2 && f2.width && Math.round(u$b(f2.width))), d2 = new b$4(t2.materialKey, h2, l2, t2.angle, s2, r2, a2, a2, c2, u2, false, false, m2 === "esriSMSCross" || m2 === "esriSMSX", i$5.SCREEN, o2, 0, 0, 126 / 64, 1, null, null, n$3, o$2);
    return d2.boundsType = m2 === "esriSMSCircle" ? "circle" : "square", d2._vertexBoundsScaleX = t2.maxVVSize ? t2.maxVVSize / t2.size : 1, d2._vertexBoundsScaleY = t2.maxVVSize ? t2.maxVVSize / t2.size : 1, d2;
  }
  static fromLineSymbolMarker(t2, o2) {
    const s2 = s$4(t2.color), a2 = 6, h2 = Math.round(u$b(a2 * t2.lineWidth)), l2 = h2, m2 = t2.style === "cross" || t2.style === "x";
    let f2;
    switch (t2.placement) {
      case "begin-end":
        f2 = o$8.Both;
        break;
      case "begin":
        f2 = o$8.JustBegin;
        break;
      case "end":
        f2 = o$8.JustEnd;
        break;
      default:
        f2 = o$8.None;
    }
    const c2 = { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: f2, offsetAlongLine: 0 }, u2 = new b$4(t2.materialKey, 0, 0, 0, s2, h2, l2, l2 / a2, s2, m2 ? Math.round(u$b(t2.lineWidth)) : 0, false, false, m2, i$5.MAP, o2, 0, 0, 126 / 64, 1, c2, null, n$3, o$2);
    return u2.boundsType = t2.style === "circle" ? "circle" : "square", u2;
  }
}
function e(e2, t2, r2, i2, u2, o2, l2) {
  D = 0;
  const f2 = (i2 - r2) * o2, p2 = u2 && u2.length, c2 = p2 ? (u2[0] - r2) * o2 : f2;
  let v2, s2, h2, d2, Z2, a2 = n$2(t2, r2, i2, 0, c2, o2, true);
  if (a2 && a2.next !== a2.prev) {
    if (p2 && (a2 = y$1(t2, r2, i2, u2, a2, o2)), f2 > 80 * o2) {
      v2 = h2 = t2[0 + r2 * o2], s2 = d2 = t2[1 + r2 * o2];
      for (let e3 = o2; e3 < c2; e3 += o2) {
        const n2 = t2[e3 + r2 * o2], x2 = t2[e3 + 1 + r2 * o2];
        v2 = Math.min(v2, n2), s2 = Math.min(s2, x2), h2 = Math.max(h2, n2), d2 = Math.max(d2, x2);
      }
      Z2 = Math.max(h2 - v2, d2 - s2), Z2 = Z2 !== 0 ? 1 / Z2 : 0;
    }
    x$3(a2, e2, o2, v2, s2, Z2, l2, 0);
  }
}
function n$2(e2, n2, t2, x2, r2, i2, l2) {
  let y2;
  if (l2 === Z(e2, n2, t2, x2, r2, i2) > 0)
    for (let o2 = x2; o2 < r2; o2 += i2)
      y2 = u$6(o2 + n2 * i2, e2[o2 + n2 * i2], e2[o2 + 1 + n2 * i2], y2);
  else
    for (let o2 = r2 - i2; o2 >= x2; o2 -= i2)
      y2 = u$6(o2 + n2 * i2, e2[o2 + n2 * i2], e2[o2 + 1 + n2 * i2], y2);
  return y2 && M$3(y2, y2.next) && (o$1(y2), y2 = y2.next), y2;
}
function t$1(e2, n2 = e2) {
  if (!e2)
    return e2;
  let t2, x2 = e2;
  do {
    if (t2 = false, x2.steiner || !M$3(x2, x2.next) && s$1(x2.prev, x2, x2.next) !== 0)
      x2 = x2.next;
    else {
      if (o$1(x2), x2 = n2 = x2.prev, x2 === x2.next)
        break;
      t2 = true;
    }
  } while (t2 || x2 !== n2);
  return n2;
}
function x$3(e2, n2, u2, l2, y2, f2, p2, v2) {
  if (!e2)
    return;
  !v2 && f2 && (e2 = c$2(e2, l2, y2, f2));
  let s2 = e2;
  for (; e2.prev !== e2.next; ) {
    const c2 = e2.prev, h2 = e2.next;
    if (f2 ? i$2(e2, l2, y2, f2) : r$2(e2))
      n2.push(c2.index / u2 + p2), n2.push(e2.index / u2 + p2), n2.push(h2.index / u2 + p2), o$1(e2), e2 = h2.next, s2 = h2.next;
    else if ((e2 = h2) === s2) {
      v2 ? v2 === 1 ? x$3(e2 = b$3(e2, n2, u2, p2), n2, u2, l2, y2, f2, p2, 2) : v2 === 2 && g$3(e2, n2, u2, l2, y2, f2, p2) : x$3(t$1(e2), n2, u2, l2, y2, f2, p2, 1);
      break;
    }
  }
}
function r$2(e2) {
  const n2 = e2.prev, t2 = e2, x2 = e2.next;
  if (s$1(n2, t2, x2) >= 0)
    return false;
  let r2 = e2.next.next;
  const i2 = r2;
  let u2 = 0;
  for (; r2 !== e2.prev && (u2 === 0 || r2 !== i2); ) {
    if (u2++, a$1(n2.x, n2.y, t2.x, t2.y, x2.x, x2.y, r2.x, r2.y) && s$1(r2.prev, r2, r2.next) >= 0)
      return false;
    r2 = r2.next;
  }
  return true;
}
function i$2(e2, n2, t2, x2) {
  const r2 = e2.prev, i2 = e2, u2 = e2.next;
  if (s$1(r2, i2, u2) >= 0)
    return false;
  const o2 = r2.x < i2.x ? r2.x < u2.x ? r2.x : u2.x : i2.x < u2.x ? i2.x : u2.x, l2 = r2.y < i2.y ? r2.y < u2.y ? r2.y : u2.y : i2.y < u2.y ? i2.y : u2.y, y2 = r2.x > i2.x ? r2.x > u2.x ? r2.x : u2.x : i2.x > u2.x ? i2.x : u2.x, f2 = r2.y > i2.y ? r2.y > u2.y ? r2.y : u2.y : i2.y > u2.y ? i2.y : u2.y, p2 = z(o2, l2, n2, t2, x2), c2 = z(y2, f2, n2, t2, x2);
  let v2 = e2.prevZ, h2 = e2.nextZ;
  for (; v2 && v2.z >= p2 && h2 && h2.z <= c2; ) {
    if (v2 !== e2.prev && v2 !== e2.next && a$1(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && s$1(v2.prev, v2, v2.next) >= 0)
      return false;
    if (v2 = v2.prevZ, h2 !== e2.prev && h2 !== e2.next && a$1(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && s$1(h2.prev, h2, h2.next) >= 0)
      return false;
    h2 = h2.nextZ;
  }
  for (; v2 && v2.z >= p2; ) {
    if (v2 !== e2.prev && v2 !== e2.next && a$1(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && s$1(v2.prev, v2, v2.next) >= 0)
      return false;
    v2 = v2.prevZ;
  }
  for (; h2 && h2.z <= c2; ) {
    if (h2 !== e2.prev && h2 !== e2.next && a$1(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && s$1(h2.prev, h2, h2.next) >= 0)
      return false;
    h2 = h2.nextZ;
  }
  return true;
}
function u$6(e2, n2, t2, x2) {
  const r2 = q.create(e2, n2, t2);
  return x2 ? (r2.next = x2.next, r2.prev = x2, x2.next.prev = r2, x2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
}
function o$1(e2) {
  e2.next.prev = e2.prev, e2.prev.next = e2.next, e2.prevZ && (e2.prevZ.nextZ = e2.nextZ), e2.nextZ && (e2.nextZ.prevZ = e2.prevZ);
}
function l$3(e2) {
  let n2 = e2, t2 = e2;
  do {
    (n2.x < t2.x || n2.x === t2.x && n2.y < t2.y) && (t2 = n2), n2 = n2.next;
  } while (n2 !== e2);
  return t2;
}
function y$1(e2, t2, x2, r2, i2, u2) {
  const o2 = new Array();
  for (let y2 = 0, f2 = r2.length; y2 < f2; y2++) {
    const i3 = n$2(e2, t2, x2, r2[y2] * u2, y2 < f2 - 1 ? r2[y2 + 1] * u2 : x2 * u2, u2, false);
    i3 === i3.next && (i3.steiner = true), o2.push(l$3(i3));
  }
  o2.sort(m$2);
  for (const n2 of o2)
    i2 = f$4(n2, i2);
  return i2;
}
function f$4(e2, n2) {
  const x2 = p$4(e2, n2);
  if (!x2)
    return n2;
  const r2 = j$2(x2, e2);
  return t$1(r2, r2.next), t$1(x2, x2.next);
}
function p$4(e2, n2) {
  let t2 = n2;
  const x2 = e2.x, r2 = e2.y;
  let i2, u2 = -1 / 0;
  do {
    if (r2 <= t2.y && r2 >= t2.next.y && t2.next.y !== t2.y) {
      const e3 = t2.x + (r2 - t2.y) * (t2.next.x - t2.x) / (t2.next.y - t2.y);
      if (e3 <= x2 && e3 > u2) {
        if (u2 = e3, e3 === x2) {
          if (r2 === t2.y)
            return t2;
          if (r2 === t2.next.y)
            return t2.next;
        }
        i2 = t2.x < t2.next.x ? t2 : t2.next;
      }
    }
    t2 = t2.next;
  } while (t2 !== n2);
  if (!i2)
    return null;
  if (x2 === u2)
    return i2.prev;
  const o2 = i2, l2 = i2.x, y2 = i2.y;
  let f2, p2 = 1 / 0;
  for (t2 = i2.next; t2 !== o2; )
    x2 >= t2.x && t2.x >= l2 && x2 !== t2.x && a$1(r2 < y2 ? x2 : u2, r2, l2, y2, r2 < y2 ? u2 : x2, r2, t2.x, t2.y) && (f2 = Math.abs(r2 - t2.y) / (x2 - t2.x), (f2 < p2 || f2 === p2 && t2.x > i2.x) && w$1(t2, e2) && (i2 = t2, p2 = f2)), t2 = t2.next;
  return i2;
}
function c$2(e2, n2, t2, x2) {
  for (let r2; r2 !== e2; r2 = r2.next) {
    if (r2 = r2 || e2, r2.z === null && (r2.z = z(r2.x, r2.y, n2, t2, x2)), r2.prev.next !== r2 || r2.next.prev !== r2)
      return r2.prev.next = r2, r2.next.prev = r2, c$2(e2, n2, t2, x2);
    r2.prevZ = r2.prev, r2.nextZ = r2.next;
  }
  return e2.prevZ.nextZ = null, e2.prevZ = null, v$1(e2);
}
function v$1(e2) {
  let n2, t2 = 1;
  for (; ; ) {
    let x2, r2 = e2;
    e2 = null, n2 = null;
    let i2 = 0;
    for (; r2; ) {
      i2++, x2 = r2;
      let u2 = 0;
      for (; u2 < t2 && x2; u2++)
        x2 = x2.nextZ;
      let o2 = t2;
      for (; u2 > 0 || o2 > 0 && x2; ) {
        let t3;
        u2 === 0 ? (t3 = x2, x2 = x2.nextZ, o2--) : o2 !== 0 && x2 ? r2.z <= x2.z ? (t3 = r2, r2 = r2.nextZ, u2--) : (t3 = x2, x2 = x2.nextZ, o2--) : (t3 = r2, r2 = r2.nextZ, u2--), n2 ? n2.nextZ = t3 : e2 = t3, t3.prevZ = n2, n2 = t3;
      }
      r2 = x2;
    }
    if (n2.nextZ = null, t2 *= 2, i2 < 2)
      return e2;
  }
}
function s$1(e2, n2, t2) {
  return (n2.y - e2.y) * (t2.x - n2.x) - (n2.x - e2.x) * (t2.y - n2.y);
}
function h$2(e2, n2, t2, x2) {
  return !!(M$3(e2, n2) && M$3(t2, x2) || M$3(e2, x2) && M$3(t2, n2)) || s$1(e2, n2, t2) > 0 != s$1(e2, n2, x2) > 0 && s$1(t2, x2, e2) > 0 != s$1(t2, x2, n2) > 0;
}
function d$3(e2, n2) {
  let t2 = e2;
  do {
    if (t2.index !== e2.index && t2.next.index !== e2.index && t2.index !== n2.index && t2.next.index !== n2.index && h$2(t2, t2.next, e2, n2))
      return true;
    t2 = t2.next;
  } while (t2 !== e2);
  return false;
}
function Z(e2, n2, t2, x2, r2, i2) {
  let u2 = 0;
  for (let o2 = x2, l2 = r2 - i2; o2 < r2; o2 += i2)
    u2 += (e2[l2 + n2 * i2] - e2[o2 + n2 * i2]) * (e2[o2 + 1 + n2 * i2] + e2[l2 + 1 + n2 * i2]), l2 = o2;
  return u2;
}
function a$1(e2, n2, t2, x2, r2, i2, u2, o2) {
  return (r2 - u2) * (n2 - o2) - (e2 - u2) * (i2 - o2) >= 0 && (e2 - u2) * (x2 - o2) - (t2 - u2) * (n2 - o2) >= 0 && (t2 - u2) * (i2 - o2) - (r2 - u2) * (x2 - o2) >= 0;
}
function w$1(e2, n2) {
  return s$1(e2.prev, e2, e2.next) < 0 ? s$1(e2, n2, e2.next) >= 0 && s$1(e2, e2.prev, n2) >= 0 : s$1(e2, n2, e2.prev) < 0 || s$1(e2, e2.next, n2) < 0;
}
function z(e2, n2, t2, x2, r2) {
  return (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - t2) * r2) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) | (n2 = 1431655765 & ((n2 = 858993459 & ((n2 = 252645135 & ((n2 = 16711935 & ((n2 = 32767 * (n2 - x2) * r2) | n2 << 8)) | n2 << 4)) | n2 << 2)) | n2 << 1)) << 1;
}
function M$3(e2, n2) {
  return e2.x === n2.x && e2.y === n2.y;
}
function m$2(e2, n2) {
  return e2.x - n2.x;
}
function b$3(e2, n2, t2, x2) {
  let r2 = e2;
  do {
    const i2 = r2.prev, u2 = r2.next.next;
    !M$3(i2, u2) && h$2(i2, r2, r2.next, u2) && w$1(i2, u2) && w$1(u2, i2) && (n2.push(i2.index / t2 + x2), n2.push(r2.index / t2 + x2), n2.push(u2.index / t2 + x2), o$1(r2), o$1(r2.next), r2 = e2 = u2), r2 = r2.next;
  } while (r2 !== e2);
  return r2;
}
function g$3(e2, n2, r2, i2, u2, o2, l2) {
  let y2 = e2;
  do {
    let e3 = y2.next.next;
    for (; e3 !== y2.prev; ) {
      if (y2.index !== e3.index && k$2(y2, e3)) {
        let f2 = j$2(y2, e3);
        return y2 = t$1(y2, y2.next), f2 = t$1(f2, f2.next), x$3(y2, n2, r2, i2, u2, o2, l2, 0), void x$3(f2, n2, r2, i2, u2, o2, l2, 0);
      }
      e3 = e3.next;
    }
    y2 = y2.next;
  } while (y2 !== e2);
}
function k$2(e2, n2) {
  return e2.next.index !== n2.index && e2.prev.index !== n2.index && !d$3(e2, n2) && w$1(e2, n2) && w$1(n2, e2) && A(e2, n2);
}
function A(e2, n2) {
  let t2 = e2, x2 = false;
  const r2 = (e2.x + n2.x) / 2, i2 = (e2.y + n2.y) / 2;
  do {
    t2.y > i2 != t2.next.y > i2 && t2.next.y !== t2.y && r2 < (t2.next.x - t2.x) * (i2 - t2.y) / (t2.next.y - t2.y) + t2.x && (x2 = !x2), t2 = t2.next;
  } while (t2 !== e2);
  return x2;
}
function j$2(e2, n2) {
  const t2 = q.create(e2.index, e2.x, e2.y), x2 = q.create(n2.index, n2.x, n2.y), r2 = e2.next, i2 = n2.prev;
  return e2.next = n2, n2.prev = e2, t2.next = r2, r2.prev = t2, x2.next = t2, t2.prev = x2, i2.next = x2, x2.prev = i2, x2;
}
class q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e2, n2, t2) {
    const x2 = D < B.length ? B[D++] : new q();
    return x2.index = e2, x2.x = n2, x2.y = t2, x2.prev = null, x2.next = null, x2.z = null, x2.prevZ = null, x2.nextZ = null, x2.steiner = false, x2;
  }
}
const B = new Array(), C$1 = 8096;
let D = 0;
for (let E2 = 0; E2 < C$1; E2++)
  B.push(new q());
const f$3 = 1e-5, c$1 = new n$8(0, 0, 0, 1, 0), u$5 = new n$8(0, 0, 0, 1, 0);
function h$1(t2, e2, n2) {
  let o2 = 0;
  for (let r2 = 1; r2 < n2; r2++) {
    const n3 = t2[2 * (e2 + r2 - 1)], s2 = t2[2 * (e2 + r2 - 1) + 1];
    o2 += (t2[2 * (e2 + r2)] - n3) * (t2[2 * (e2 + r2) + 1] + s2);
  }
  return o2;
}
function g$2(t2, e2, n2, o2, r2) {
  let s2 = 0;
  const l2 = 2;
  for (let i2 = n2; i2 < o2; i2 += 3) {
    const n3 = (t2[i2] - r2) * l2, o3 = (t2[i2 + 1] - r2) * l2, f2 = (t2[i2 + 2] - r2) * l2;
    s2 += Math.abs((e2[n3] - e2[f2]) * (e2[o3 + 1] - e2[n3 + 1]) - (e2[n3] - e2[o3]) * (e2[f2 + 1] - e2[n3 + 1]));
  }
  return s2;
}
function a(t2, e$12) {
  const { coords: n2, lengths: o2, hasIndeterminateRingOrder: r2 } = e$12, s2 = 0, l2 = t2;
  if (r2)
    return false;
  let c2 = 0;
  for (let u2 = 0; u2 < o2.length; ) {
    let t3 = u2, e$13 = o2[u2], r3 = h$1(n2, c2, e$13);
    const a2 = [];
    for (; ++t3 < o2.length; ) {
      const s3 = o2[t3], l3 = h$1(n2, c2 + e$13, s3);
      if (!(l3 > 0))
        break;
      r3 += l3, a2.push(c2 + e$13), e$13 += s3;
    }
    const m2 = l2.length;
    e(l2, n2, c2, c2 + e$13, a2, 2, s2);
    const p2 = g$2(l2, n2, m2, l2.length, s2), d2 = Math.abs(r3);
    if (Math.abs((p2 - d2) / Math.max(1e-7, d2)) > f$3)
      return l2.length = 0, false;
    u2 = t3, c2 += e$13;
  }
  return true;
}
function p$3(t2) {
  const { coords: e2, lengths: o2 } = t2, { buffer: r2 } = r$a(e2, o2);
  return r2;
}
function d$2(t2, e2, n2) {
  let o2 = 0;
  for (let r2 = 0; r2 < t2.lengths.length; r2++) {
    const s2 = t2.lengths[r2];
    for (let r3 = 0; r3 < s2; r3++) {
      const s3 = t2.coords[2 * (r3 + o2)], l2 = t2.coords[2 * (r3 + o2) + 1];
      if (s3 < e2 || s3 > n2 || l2 < e2 || l2 > n2)
        return true;
    }
    o2 += s2;
  }
  return false;
}
function b$2(e2, n2) {
  if (t$5(e2))
    return null;
  if (!d$2(e2, -128, o$4 + 128))
    return e2;
  c$1.setPixelMargin(n2), c$1.reset(s$6.Polygon);
  let l2 = 0;
  for (let t2 = 0; t2 < e2.lengths.length; t2++) {
    const n3 = e2.lengths[t2];
    let o2 = e2.coords[2 * (0 + l2)], r2 = e2.coords[2 * (0 + l2) + 1];
    c$1.moveTo(o2, r2);
    for (let t3 = 1; t3 < n3; t3++)
      o2 = e2.coords[2 * (t3 + l2)], r2 = e2.coords[2 * (t3 + l2) + 1], c$1.lineTo(o2, r2);
    c$1.close(), l2 += n3;
  }
  const i2 = c$1.result(false);
  if (!i2)
    return null;
  const f2 = [], u2 = [];
  for (const t2 of i2) {
    let e3 = 0;
    for (const n3 of t2)
      u2.push(n3.x), u2.push(n3.y), e3++;
    f2.push(e3);
  }
  return new t$7(f2, u2);
}
function x$2(t2, e2) {
  u$5.setPixelMargin(e2);
  const n2 = u$5, o2 = -e2, l2 = o$4 + e2;
  let i2 = [], f2 = false, c2 = 0;
  for (; c2 < t2.length; ) {
    const e3 = [], r2 = t2[c2];
    if (!r2)
      return null;
    n2.reset(s$6.LineString);
    let [u2, h2] = r2[0];
    if (f2)
      n2.moveTo(u2, h2);
    else {
      if (u2 < o2 || u2 > l2 || h2 < o2 || h2 > l2) {
        f2 = true;
        continue;
      }
      e3.push({ x: u2, y: h2 });
    }
    let g2 = false;
    const a2 = r2.length;
    for (let t3 = 1; t3 < a2; ++t3)
      if (u2 += r2[t3][0], h2 += r2[t3][1], f2)
        n2.lineTo(u2, h2);
      else {
        if (u2 < o2 || u2 > l2 || h2 < o2 || h2 > l2) {
          g2 = true;
          break;
        }
        e3.push({ x: u2, y: h2 });
      }
    if (g2)
      f2 = true;
    else {
      if (f2) {
        const t3 = n2.resultWithStarts();
        if (t3)
          for (const e4 of t3)
            i2.push(e4);
      } else
        i2.push({ line: e3, start: 0 });
      c2++, f2 = false;
    }
  }
  return i2 = i2.filter((t3) => t3.line.length > 1), i2.length === 0 ? null : i2;
}
c$1.setExtent(o$4), u$5.setExtent(o$4);
const m$1 = 8, x$1 = 16, p$2 = 65535, f$2 = (r2) => class extends r2 {
  constructor(...e2) {
    super(...e2), this.tessellationProperties = {}, this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0 }, this.geometryType = E$2.LINE;
  }
  writeGeometry(e2, t2, i2, r3) {
    this._writeGeometry(e2, t2, i2, r3);
  }
  _initializeTessellator(e2) {
    const i2 = C$2.load(this._materialKey), r3 = w$5.load(this._materialKey), s2 = this._tessellationOptions, h2 = i2.vvSizeFieldStops || i2.vvSizeMinMaxValue || i2.vvSizeScaleStops || i2.vvSizeUnitValue, d2 = this.tessellationProperties._halfWidth < X && !e2 && !h2;
    this.tessellationProperties.minMaxZoom = this._minMaxZoom, s2.wrapDistance = p$2, s2.textured = this._isDashed || this._hasPattern, s2.offset = this.tessellationProperties.offset, s2.halfWidth = this.tessellationProperties._halfWidth;
    const m2 = d2 ? 0 : 1, x2 = O$1(r3) ? v : _$1;
    this._lineTessellator = new c$7(x2(this.tessellationProperties, m2, m2), u$4(this.tessellationProperties), d2);
  }
  _write(e2, t2, i2, r3) {
    const s2 = t2.geometryType === "esriGeometryPoint";
    e2.recordStart(t2.getDisplayId(), this._materialKey, this.geometryType, s2), this._writeGeometry(e2, t2, r3, s2), e2.recordEnd();
  }
  _writeGeometry(t2, i2, r3, s2) {
    const o2 = r3 != null ? r3 : i2.readLegacyGeometryForDisplay(), n2 = this._getLines(o2, s2);
    t$5(n2) || this._writeVertices(t2, i2, n2);
  }
  _getLines(t2, i2) {
    if (t$5(t2))
      return null;
    const r3 = t2.paths || t2.rings;
    if (t$5(r3))
      return null;
    return x$2(r3, i2 ? 256 : 16);
  }
  _writeVertices(e2, t2, i2) {
    const r3 = t2.getDisplayId(), s2 = e2.vertexCount(), o2 = this.tessellationProperties, h2 = this._tessellationOptions;
    o2.out = e2, o2.id = r3, o2.indexCount = 0, o2.vertexCount = 0, o2.offset = s2, h2.capType = this._capType, h2.joinType = this._joinType;
    const d2 = w$5.load(this._materialKey);
    this.tessellationProperties.key = O$1(d2) ? d2 : C$2.load(this._materialKey);
    for (const { line: n2, start: l2 } of i2)
      h2.initialDistance = l2 % p$2, this._lineTessellator.tessellate(n2, h2);
  }
}, _$1 = (e2, t2, i2) => (o2, n2, l2, a2, h2, d2, p2, f2, _2, v2, u2) => {
  const c2 = w$4(u2, Math.ceil(x$1 * e2._halfWidth)), y2 = x$7(Math.round(x$1 * p2), Math.round(x$1 * f2), Math.round(x$1 * _2), Math.round(x$1 * v2)), W = x$7(x$1 * h2, x$1 * d2, 0, e2._bitset), M2 = e2.out;
  return M2.vertexBounds(o2, n2, t2, i2), M2.vertexWrite(w$4(m$1 * o2, m$1 * n2)), M2.vertexWrite(e2.id), M2.vertexWrite(e2._fillColor), M2.vertexWrite(y2), M2.vertexWrite(c2), M2.vertexWrite(e2._tl), M2.vertexWrite(e2._br), M2.vertexWrite(W), M2.vertexWrite(w$4(Math.ceil(x$1 * e2._halfReferenceWidth), 0)), M2.vertexWrite(e2.minMaxZoom), M2.vertexEnd(), e2.offset + e2.vertexCount++;
}, v = (e2, t2, i2) => (o2, n2, l2, a2, d2, p2, f2, _2, v2, u2, c2) => {
  const y2 = w$4(x$1 * e2._halfWidth, x$1 * e2._halfReferenceWidth), W = x$7(x$1 * f2 + 128, x$1 * _2 + 128, x$1 * v2 + 128, x$1 * u2 + 128), M2 = e2.out, P2 = e2._bitset << 24 | e2.id;
  M2.vertexBounds(o2, n2, t2, i2), M2.vertexWrite(w$4(m$1 * o2, m$1 * n2)), M2.vertexWrite(P2), M2.vertexWrite(e2._fillColor);
  const T2 = b$5(e2.key);
  return T2 || (M2.vertexWrite(0), M2.vertexWrite(0)), M2.vertexWrite(0), M2.vertexWrite(y2), M2.vertexWrite(W), T2 || M2.vertexWrite(e2.minMaxZoom), M2.vertexEnd(), e2.offset + e2.vertexCount++;
}, u$4 = (e2) => (t2, i2, r2) => {
  const s2 = e2.out;
  s2.indexWrite(t2), s2.indexWrite(i2), s2.indexWrite(r2), e2.indexCount += 3;
};
class K extends f$2(r$3) {
  constructor(e2, t2, i2, r2, s2, o2, p2, f2, d2, y2, S2, _2, j2, g2, w2, K2, P2, x2, b2, O2) {
    super();
    const T2 = C$2.load(e2);
    t2 && (T2.sdf = t2.sdf, T2.pattern = true, T2.textureBinding = t2.textureBinding), this._capType = r2, this._joinType = s2, this._miterLimitCosine = e$2(o2), this.tessellationProperties._fillColor = p2, this.tessellationProperties._tl = f2, this.tessellationProperties._br = d2, this._hasPattern = y2, this._isDashed = S2, this._zOrder = P2, this._effects = x2, this._minMaxZoom = w$4(Math.round(b2 * at), Math.round(O2 * at)), this._materialKey = T2.data;
    const M2 = (j2 ? nt$1 : 0) | (g2 ? mt : 0) | (_2 ? lt : 0) | (w2 ? gt : 0);
    this.tessellationProperties._bitset = M2, this.tessellationProperties._halfWidth = 0.5 * i2, this.tessellationProperties._halfReferenceWidth = 0.5 * K2, this.tessellationProperties.offset = 0, this._initializeTessellator(false);
  }
  static fromCIMLine(e2, r2, l2) {
    const n2 = e2.color, a2 = e2.scaleFactor || 1, m2 = !!e2.dashTemplate;
    let c2 = e2.cap;
    m2 && c2 === e$8.ROUND && (c2 = e$8.SQUARE);
    const p2 = e2.join, f2 = u$b(e2.width) * a2, u2 = u$b(e2.referenceWidth), d2 = u$b(e2.miterLimit), y2 = n2 && f$a(n2) || 0, [L2, _2] = x$5(e2.scaleInfo, l2), j2 = false;
    if (!r2)
      return new K(e2.materialKey, r2, f2, c2, p2, d2, y2, 0, 0, false, m2, e2.scaleDash, e2.colorLocked, j2, e2.sampleAlphaOnly, u2, e2.zOrder, e2.effects, L2, _2);
    const { rect: g2, width: w2, height: P2 } = r2, x2 = g2.x + et, b2 = g2.y + et, O2 = x2 + w2, T2 = b2 + P2, M2 = w$4(x2, b2), W = w$4(O2, T2), z2 = false;
    return new K(e2.materialKey, r2, f2, c2, p2, d2, y2, M2, W, true, m2, e2.scaleDash, e2.colorLocked, z2, e2.sampleAlphaOnly, u2, e2.zOrder, e2.effects, L2, _2);
  }
  static fromFillOutline(e2) {
    var _a;
    const t2 = w$5.load(e2.materialKey);
    return O$1(t2) && e2.outline && ((_a = e2.outline) == null ? void 0 : _a.style) === "esriSLSSolid" ? K.fromSimpleLine(__spreadValues({ hash: "", materialKey: e2.materialKey }, e2.outline), null, true) : null;
  }
  static fromSimpleLine(e2, i2, s2 = false) {
    const { color: l2 } = e2, n2 = e2.style !== "esriSLSSolid" && e2.style !== "esriSLSNull", a2 = ee(e2.cap || "round"), m2 = te(e2.join || "round");
    let c2 = l2 && e2.style !== "esriSLSNull" && s$4(l2) || 0;
    e2.style === "esriSLSNull" && (c2 = 0);
    const u2 = u$b(e2.width), d2 = e2.miterLimit;
    if (!i2)
      return new K(e2.materialKey, i2, u2, a2, m2, d2, c2, 0, 0, false, n2, true, false, s2, false, u2, 0, null, n$3, o$2);
    const { rect: y2, width: L2, height: S2 } = i2, g2 = y2.x + et, w2 = y2.y + et, P2 = g2 + L2, x2 = w2 + S2, b2 = w$4(g2, w2), O2 = w$4(P2, x2);
    return new K(e2.materialKey, i2, u2, a2, m2, d2, c2, b2, O2, true, n2, true, false, s2, false, u2, 0, null, n$3, o$2);
  }
  static fromPictureLineSymbol(t2, i2, r2, s2) {
    return s$5.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate").error("PictureLineSymbol support does not exist!"), null;
  }
}
const f$1 = 100, u$3 = 1, _ = (_2) => class extends _2 {
  constructor(...e2) {
    super(...e2), this.forceLibtess = false, this._bitset = 0, this._lineTemplate = null, this.geometryType = E$2.FILL;
  }
  _maybeAddLineTemplate(e2) {
    this._lineTemplate = K.fromFillOutline(e2);
  }
  _write(t2, r2, i2, s2) {
    const o2 = r2.geometryType === "esriGeometryPoint", m2 = w$5.load(this._materialKey);
    t2.recordStart(r2.getDisplayId(), this._materialKey, this.geometryType, o2), this._writeGeometry(t2, r2, m2, s2, o2), O$1(m2) && r$7(this._lineTemplate) && this._lineTemplate.writeGeometry(t2, r2, s2, o2), t2.recordEnd();
  }
  _writeGeometry(e2, r2, i2, s2, o2) {
    const m2 = this._getGeometry(r2, s2, o2);
    if (t$5(m2))
      return;
    const l2 = [];
    if (!(m2.maxLength > f$1) && !this.forceLibtess && a(l2, m2))
      return void (l2.length && this._writeVertices(e2, r2, m2.coords, m2.lengths, i2, l2));
    const n2 = p$3(m2);
    this._writeVertices(e2, r2, n2, [n2.length / 2], i2);
  }
  _writeVertex(e2, t2, r2, i2, s2, l2) {
    const n2 = w$4(u$3 * i2, u$3 * s2);
    if (e2.vertexBounds(i2, s2, 0, 0), e2.vertexWrite(n2), e2.vertexWrite(t2), r2.symbologyType === S$2.DOT_DENSITY)
      e2.vertexWriteF32(1 / Math.abs(l2.readGeometryArea()));
    else {
      e2.vertexWrite(this.fillColor);
      const t3 = b$5(r2);
      t3 || (e2.vertexWrite(this.tl), e2.vertexWrite(this.br)), e2.vertexWrite(this.aux21), e2.vertexWrite(this.aux22), e2.vertexWrite(this.aux3), t3 || e2.vertexWrite(this._minMaxZoom);
    }
  }
  _writeVertices(e2, t2, r2, i2, s2, o2) {
    const m2 = t2.getDisplayId(), n2 = this._bitset << 24 | m2, a2 = i2.reduce((e3, t3) => e3 + t3), h2 = G$2(s2.geometryType, s2.symbologyType).geometry / 4, y2 = e2.vertexCount();
    e2.vertexEnsureSize(h2 * a2);
    let p2 = 0;
    if (o2)
      for (const l2 of o2) {
        const i3 = r2[2 * l2], o3 = r2[2 * l2 + 1];
        this._writeVertex(e2, n2, s2, i3, o3, t2), p2++;
      }
    else
      for (let l2 = 0; l2 < r2.length; l2 += 2) {
        const i3 = Math.round(r2[l2]), o3 = Math.round(r2[l2 + 1]);
        this._writeVertex(e2, n2, s2, i3, o3, t2), p2++;
      }
    e2.indexEnsureSize(p2);
    for (let l2 = 0; l2 < p2; l2++)
      e2.indexWrite(l2 + y2);
  }
  _getGeometry(e2, t2, s2) {
    const o2 = t2 ? Gt(nt(t2), 2) : e2.readGeometryForDisplay();
    if (!o2)
      return null;
    return b$2(o2, s2 ? 256 : 8);
  }
};
const i$1 = s$5.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");
class r$1 extends r$3 {
  constructor(e2) {
    super(), this._ongoingMaterialRequestMap = new Map(), this._materialCache = new Map(), this._dynamicPropertyMap = new Map(), this._cimLayer = e2;
  }
  analyze(e2, s2, r2, n2, o2) {
    if (o2 && o2.length === 0)
      return null;
    const l2 = o2 && o2.length > 0, m2 = s2.readLegacyFeature(), c2 = s2.getObjectId(), h2 = this._materialCache, u2 = this._cimLayer.materialHash;
    if (!u2)
      return i$1.error("A Dynamic mesh template must have a material hash value or function!"), Promise.reject(null);
    const p2 = typeof u2 == "function" ? u2(m2, r2, n2, c2) : u2;
    if (h2.has(p2)) {
      const e3 = h2.get(p2);
      return Promise.resolve(e3);
    }
    const g2 = this._ongoingMaterialRequestMap.get(p2);
    if (g2)
      return g2;
    const y2 = this._cimLayer, M2 = me(y2.cim, this._cimLayer.materialOverrides);
    M2.mosaicHash = p2;
    const { type: d2, url: f2 } = y2, _2 = { cim: M2, type: d2, mosaicHash: p2, url: f2, size: null, dashTemplate: null, text: null, fontName: null, objectId: c2, animatedSymbolProperties: null };
    switch (d2) {
      case "marker":
        _2.size = t$8(y2.size, m2, r2, n2), _2.animatedSymbolProperties = t$8(y2.animatedSymbolProperties, m2, r2, n2);
        break;
      case "line":
        _2.dashTemplate = y2.dashTemplate;
        break;
      case "text":
        _2.text = t$8(y2.text, m2, r2, n2), _2.fontName = t$8(y2.fontName, m2, r2, n2);
    }
    const b2 = e2.getMosaicItem(_2, o2).then((e3) => (l2 || (this._ongoingMaterialRequestMap.delete(p2), h2.set(p2, e3)), e3)).catch((e3) => (this._ongoingMaterialRequestMap.delete(p2), i$1.error(".analyze()", e3.message), null));
    return l2 || this._ongoingMaterialRequestMap.set(p2, b2), b2;
  }
}
const u$2 = 128;
class M$2 extends _(r$1) {
  constructor(a2, h2, f2) {
    var _a;
    if (super(a2), this._minMaxZoom = w$4(Math.round(h2 * at), Math.round(f2 * at)), c$4(a2.color)) {
      const t2 = (t3, e2, i2) => {
        const o2 = a2.color(t3, e2, i2);
        return o2 && f$a(o2) || 0;
      };
      this._dynamicPropertyMap.set("fillColor", t2);
    } else {
      const t2 = a2.color;
      this.fillColor = t2 && f$a(t2) || 0;
    }
    const p2 = ((_a = a2.cim.placement) == null ? void 0 : _a.type) === "CIMMarkerPlacementInsidePolygon" && a2.cim.placement.shiftOddRows ? 2 : 1, _2 = a2.height;
    if (c$4(_2)) {
      const t2 = (t3, e2, s2) => _2(t3, e2, s2) * p2;
      this._dynamicPropertyMap.set("_height", t2);
    } else
      this._height = (_2 || 0) * p2;
    const y2 = a2.offsetX;
    if (c$4(y2)) {
      const t2 = (t3, s2, i2) => u$b(y2(t3, s2, i2));
      this._dynamicPropertyMap.set("_offsetX", t2);
    } else
      this._offsetX = u$b(y2 || 0);
    const d2 = a2.offsetY;
    if (c$4(d2)) {
      const t2 = (t3, s2, i2) => u$b(-d2(t3, s2, i2));
      this._dynamicPropertyMap.set("_offsetY", t2);
    } else
      this._offsetY = u$b(-d2 || 0);
    const u2 = a2.scaleX;
    c$4(u2) ? this._dynamicPropertyMap.set("_scaleX", u2) : this._scaleX = u2 || 1;
    const M2 = a2.angle;
    if (c$4(M2)) {
      const t2 = (t3, e2, s2) => M$6(M2(t3, e2, s2));
      this._dynamicPropertyMap.set("_angle", t2);
    } else
      this._angle = M$6(M2) || 0;
    if (r$7(a2.effects)) {
      const t2 = a2.effects;
      c$4(t2) ? this._dynamicPropertyMap.set("_effects", t2) : this._effects = t2;
    }
    this._cimFillLayer = a2, this._bitset = (a2.colorLocked ? nt$1 : 0) | (a2.applyRandomOffset ? vt : 0) | (a2.sampleAlphaOnly ? gt : 0), this._fillMaterialKey = a2.materialKey;
  }
  static fromCIMFill(t2, e2) {
    const [s2, i2] = x$5(t2.scaleInfo, e2);
    return new M$2(t2, s2, i2);
  }
  bindFeature(t2, s2, i2) {
    const o2 = t2.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t3, e2) => {
      this[e2] = t3(o2, s2, i2);
    });
    const r2 = w$5.load(this._fillMaterialKey), l2 = this._materialCache, n2 = (0, this._cimFillLayer.materialHash)(o2, s2, i2), m2 = l2.get(n2);
    let p2 = null;
    if (m2 && e$4(m2.spriteMosaicItem) && (p2 = m2.spriteMosaicItem), p2) {
      const { rect: t3, width: s3, height: i3 } = p2, o3 = t3.x + et, l3 = t3.y + et, n3 = o3 + s3, f2 = l3 + i3;
      let m3 = Math.round(u$b(this._height));
      m3 <= 0 && (m3 = f2 - l3);
      let _2 = Math.round(u$b(this._height / i3 * s3 || 0));
      _2 <= 0 && (_2 = n3 - o3);
      const y2 = this._scaleX, d2 = 1;
      this.tl = w$4(o3, l3), this.br = w$4(n3, f2), this.aux21 = w$4(_2, m3), this.aux22 = w$4(this._offsetX, this._offsetY), this.aux3 = x$7(y2 * u$2, d2 * u$2, this._angle, 0), r2.sdf = p2.sdf, r2.pattern = true, r2.textureBinding = p2.textureBinding;
    } else
      this.tl = 0, this.br = 0, this.aux21 = 0, this.aux22 = 0, this.aux3 = 0, r2.sdf = false, r2.pattern = false, r2.textureBinding = 0;
    this._materialKey = r2.data;
  }
}
class y extends f$2(r$1) {
  constructor(a2, n2, p2) {
    super(a2), this._minMaxZoom = w$4(Math.round(n2 * at), Math.round(p2 * at)), this._cimLineLayer = a2;
    let _2 = 0;
    c$4(a2.width) || (_2 = 0.5 * u$b(a2.width));
    const f2 = (t2, i2, s2) => c$4(a2.width) ? 0.5 * u$b(a2.width(t2, i2, s2)) : _2;
    this._dynamicPropertyMap.set("_halfWidth", f2), c$4(a2.cap) ? this._dynamicPropertyMap.set("_capType", a2.cap) : this._capType = a2.cap, c$4(a2.join) ? this._dynamicPropertyMap.set("_joinType", a2.join) : this._joinType = a2.join;
    const d2 = a2.color;
    if (c$4(d2)) {
      const t2 = (t3, e2, s2) => f$a(d2(t3, e2, s2));
      this._dynamicPropertyMap.set("_fillColor", t2);
    } else
      this._fillColor = d2 && f$a(d2) || 0;
    const y2 = a2.miterLimit;
    if (c$4(y2)) {
      const t2 = (t3, e2, i2) => e$2(y2(t3, e2, i2));
      this._dynamicPropertyMap.set("_miterLimitCosine", t2);
    } else
      this._miterLimitCosine = e$2(y2);
    if (r$7(a2.effects)) {
      const t2 = a2.effects;
      c$4(t2) ? this._dynamicPropertyMap.set("_effects", t2) : this._effects = t2;
    }
    this._scaleFactor = a2.scaleFactor || 1, this._isDashed = a2.dashTemplate != null;
    const P2 = a2.colorLocked ? nt$1 : 0, u2 = a2.scaleDash ? lt : 0, j2 = a2.sampleAlphaOnly ? gt : 0;
    this.tessellationProperties._bitset = P2 | u2 | j2, this._materialKey = a2.materialKey, this._initializeTessellator(true);
  }
  static fromCIMLine(t2, e2) {
    const [i2, s2] = x$5(t2.scaleInfo, e2);
    return new y(t2, i2, s2);
  }
  bindFeature(t2, e2, i2) {
    const s2 = t2.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t3, r3) => {
      this[r3] = t3(s2, e2, i2);
    }), this._halfWidth *= this._scaleFactor;
    const r2 = this._materialCache, o2 = (0, this._cimLineLayer.materialHash)(s2, e2, i2), l2 = r2.get(o2);
    let c2 = null;
    if (l2 && e$4(l2.spriteMosaicItem) && (c2 = l2.spriteMosaicItem), c2) {
      this._hasPattern = true;
      const { rect: t3, width: e3, height: i3 } = c2, s3 = t3.x + et, r3 = t3.y + et, o3 = s3 + e3, l3 = r3 + i3;
      this.tessellationProperties._tl = w$4(s3, r3), this.tessellationProperties._br = w$4(o3, l3);
    } else
      this._hasPattern = false, this.tessellationProperties._tl = 0, this.tessellationProperties._br = 0;
    this.tessellationProperties._fillColor = this._fillColor, this.tessellationProperties._halfWidth = this._halfWidth, this.tessellationProperties.offset = 0, this.tessellationProperties._halfReferenceWidth = this.tessellationProperties._halfWidth;
    const m2 = C$2.load(this._materialKey);
    c2 && (m2.sdf = c2.sdf, m2.pattern = true, m2.textureBinding = c2.textureBinding), this._materialKey = m2.data;
  }
}
const g$1 = n$7(), k$1 = n$6();
class P extends u$7(r$1) {
  constructor(t2, e2, o2) {
    super(t2), this._cimMarkerLayer = t2, this._minMaxZoom = w$4(Math.round(e2 * at), Math.round(o2 * at));
    const a2 = t2.color;
    if (c$4(a2)) {
      const t3 = (t4, e3, i2) => f$a(a2(t4, e3, i2));
      this._dynamicPropertyMap.set("_fillColor", t3);
    } else
      this._fillColor = f$a(a2);
    const n2 = t2.outlineColor;
    if (c$4(n2)) {
      const t3 = (t4, e3, i2) => f$a(n2(t4, e3, i2));
      this._dynamicPropertyMap.set("_outlineColor", t3);
    } else
      this._outlineColor = f$a(n2);
    const f2 = t2.size;
    if (c$4(f2)) {
      const t3 = (t4, e3, i2) => u$b(f2(t4, e3, i2));
      this._dynamicPropertyMap.set("_size", t3);
    } else
      this._size = u$b(f2) || 0;
    const _2 = t2.scaleX;
    c$4(_2) ? this._dynamicPropertyMap.set("_scaleX", _2) : this._scaleX = _2;
    const y2 = t2.offsetX;
    if (c$4(y2)) {
      const t3 = (t4, e3, i2) => u$b(y2(t4, e3, i2));
      this._dynamicPropertyMap.set("xOffset", t3);
    } else
      this.xOffset = u$b(y2) || 0;
    const d2 = t2.offsetY;
    if (c$4(d2)) {
      const t3 = (t4, e3, i2) => u$b(d2(t4, e3, i2));
      this._dynamicPropertyMap.set("yOffset", t3);
    } else
      this.yOffset = u$b(d2) || 0;
    const M2 = t2.outlineWidth;
    if (c$4(M2)) {
      const t3 = (t4, e3, i2) => u$b(M2(t4, e3, i2));
      this._dynamicPropertyMap.set("_outlineWidth", t3);
    } else
      this._outlineWidth = u$b(M2) || 0;
    const u2 = t2.rotation;
    if (c$4(u2) ? this._dynamicPropertyMap.set("_angle", u2) : this._angle = u2 || 0, r$7(t2.effects)) {
      const e3 = t2.effects;
      c$4(e3) ? this._dynamicPropertyMap.set("_effects", e3) : this._effects = e3;
    }
    if (r$7(t2.markerPlacement)) {
      const e3 = t2.markerPlacement;
      c$4(e3) ? this._dynamicPropertyMap.set("_markerPlacement", e3) : this._markerPlacement = e3;
    }
    this._scaleFactor = i$7(t2.scaleFactor, 1), this._bitSet = (t2.alignment === i$5.MAP ? 1 : 0) | (t2.colorLocked ? 1 : 0) << 1 | (t2.scaleSymbolsProportionally ? 1 : 0) << 3, this._materialKey = t2.materialKey;
  }
  static fromCIMMarker(t2, e2) {
    const [i2, s2] = x$5(t2.scaleInfo, e2);
    return new P(t2, i2, s2);
  }
  bindFeature(i2, s2, o2) {
    const a2 = i2.readLegacyFeature(), h2 = i2.getObjectId();
    this._dynamicPropertyMap.forEach((t2, e2) => {
      this[e2] = t2(a2, s2, o2);
    });
    const c2 = this._cimMarkerLayer.materialHash, m2 = typeof c2 == "function" ? c2(a2, s2, o2, h2) : c2, p2 = this._materialCache.get(m2);
    if (!p2 || !e$4(p2.spriteMosaicItem) || !p2.spriteMosaicItem)
      return void s$5.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate").error(new s$2("mapview-cim", "Encountered an error when binding feature"));
    const y2 = p2.spriteMosaicItem, d2 = this._cimMarkerLayer.sizeRatio, M2 = y2.width / y2.height * this._scaleX, P2 = this._cimMarkerLayer.rotateClockwise ? this._angle : -this._angle;
    let L2 = this._size, x2 = L2 * M2;
    const j2 = this.xOffset, b2 = this.yOffset;
    this.xOffset *= this._scaleFactor, this.yOffset *= this._scaleFactor;
    const O2 = this._cimMarkerLayer.scaleSymbolsProportionally && this._cimMarkerLayer.frameHeight ? this._size / u$b(this._cimMarkerLayer.frameHeight) : 1, w2 = this._outlineWidth * O2, z2 = u$b(this._cimMarkerLayer.referenceSize);
    let W = 0, C2 = 0;
    const F2 = this._cimMarkerLayer.anchorPoint;
    F2 && (this._cimMarkerLayer.isAbsoluteAnchorPoint ? this._size && (W = u$b(F2.x) / (this._size * M2), C2 = u$b(F2.y) / this._size) : (W = F2.x, C2 = F2.y)), this._anchorX = W, this._anchorY = C2, this._sizeOutlineWidth = x$7(Math.round(Math.min(Math.sqrt(128 * x2), 255)), Math.round(Math.min(Math.sqrt(128 * L2), 255)), Math.round(Math.min(Math.sqrt(128 * w2), 255)), Math.round(Math.min(Math.sqrt(128 * z2), 255))), this.angle = P2;
    const I2 = Math.round(64 * d2);
    this._bitestAndDistRatio = w$4(this._bitSet, I2);
    const K2 = y2.rect.x + et, X2 = y2.rect.y + et, B2 = K2 + y2.width, R = X2 + y2.height;
    this._texUpperLeft = w$4(K2, X2), this._texUpperRight = w$4(B2, X2), this._texBottomLeft = w$4(K2, R), this._texBottomRight = w$4(B2, R);
    const S2 = N.load(this._materialKey);
    S2.sdf = y2.sdf, S2.pattern = true, S2.textureBinding = y2.textureBinding, this._materialKey = S2.data, x2 *= d2, L2 *= d2, x2 *= this._scaleFactor, L2 *= this._scaleFactor, x2 *= y2.rect.width / y2.width, L2 *= y2.rect.height / y2.height, this._computedWidth = x2, this._computedHeight = L2, this._applyTransformation(k$1, g$1), this.xOffset = j2, this.yOffset = b2;
  }
}
function t(t2) {
  const e2 = new Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++)
    e2[n2] = t2.charCodeAt(n2);
  return e2;
}
const M$1 = 5;
function d$1(t2, e2, i2, s2) {
  return typeof t2.text == "string" ? t2.text : typeof t2.text == "function" ? t2.text(e2, i2, s2) : "";
}
class g extends _$2(r$1) {
  constructor(e2, o2, a2) {
    super(e2), this._horizontalAlignment = "center", this._verticalAlignment = "middle", this._textToGlyphs = new Map(), this._minMaxZoom = w$4(Math.round(o2 * at), Math.round(a2 * at));
    const r2 = e2.scaleFactor || 1;
    this._cimTextLayer = e2;
    const _2 = e2.color;
    if (c$4(_2)) {
      const t2 = (t3, e3, i2) => f$a(_2(t3, e3, i2));
      this._dynamicPropertyMap.set("_color", t2);
    } else
      this._color = f$a(_2);
    const f2 = e2.outlineColor;
    if (c$4(f2)) {
      const t2 = (t3, e3, i2) => f$a(f2(t3, e3, i2));
      this._dynamicPropertyMap.set("_haloColor", t2);
    } else
      this._haloColor = f$a(f2);
    let y2;
    c$4(e2.size) || (y2 = Math.min(Math.round(u$b(e2.size * e2.sizeRatio)), 127));
    const p2 = (t2, s2, o3) => c$4(e2.size) ? Math.min(Math.round(u$b(e2.size(t2, s2, o3) * e2.sizeRatio)), 127) : y2;
    if (this._dynamicPropertyMap.set("_size", p2), c$4(e2.outlineSize)) {
      const t2 = (t3, s2, o3) => Math.min(Math.floor(M$1 * u$b(e2.outlineSize(t3, s2, o3) * e2.sizeRatio)), 127);
      this._dynamicPropertyMap.set("_haloSize", t2);
    } else
      this._haloSize = Math.min(Math.floor(M$1 * u$b(e2.outlineSize * e2.sizeRatio)), 127);
    let d2;
    c$4(e2.offsetX) || (d2 = Math.round(u$b(e2.offsetX * e2.sizeRatio)));
    const g2 = (t2, s2, o3) => c$4(e2.offsetX) ? Math.round(u$b(e2.offsetX(t2, s2, o3) * e2.sizeRatio)) : d2;
    let u2;
    this._dynamicPropertyMap.set("_xOffset", g2), c$4(e2.offsetY) || (u2 = Math.round(u$b(e2.offsetY * e2.sizeRatio)));
    const z2 = (t2, s2, o3) => c$4(e2.offsetY) ? Math.round(u$b(e2.offsetY(t2, s2, o3) * e2.sizeRatio)) : u2;
    if (this._dynamicPropertyMap.set("_yOffset", z2), c$4(e2.angle) ? this._dynamicPropertyMap.set("_angle", e2.angle) : this._angle = e2.angle, c$4(e2.horizontalAlignment) ? this._dynamicPropertyMap.set("_horizontalAlignment", e2.horizontalAlignment) : this._horizontalAlignment = e2.horizontalAlignment, c$4(e2.verticalAlignment) ? this._dynamicPropertyMap.set("_verticalAlignment", e2.verticalAlignment) : this._verticalAlignment = e2.verticalAlignment, r$7(e2.effects)) {
      const t2 = e2.effects;
      c$4(t2) ? this._dynamicPropertyMap.set("_effects", t2) : this._effects = t2;
    }
    if (r$7(e2.markerPlacement)) {
      const t2 = e2.markerPlacement;
      c$4(t2) ? this._dynamicPropertyMap.set("_markerPlacement", t2) : this._textPlacement = t2;
    }
    c$4(e2.text) ? this._dynamicPropertyMap.set("_text", e2.text) : this._text = e2.text, this._scaleFactor = r2;
    const x2 = Math.min(Math.round(u$b(e2.referenceSize * e2.sizeRatio)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * x2)), this._materialKey = e2.materialKey;
    const P2 = P$2.load(this._materialKey);
    P2.sdf = true, this._bitset = (e2.alignment === i$5.MAP ? 1 : 0) | (e2.colorLocked ? 1 : 0) << 1, this._materialKey = P2.data, this._decoration = "none", this._lineHeight = 1, this._lineWidth = 512, this._isCIM = true;
  }
  static fromCIMText(t2, e2) {
    const [i2, s2] = x$5(t2.scaleInfo, e2);
    return new g(t2, i2, s2);
  }
  async analyze(t$12, e2, i2, s2) {
    const o2 = e2.readLegacyFeature(), a2 = d$1(this._cimTextLayer, o2, i2, s2), n2 = await super.analyze(t$12, e2, i2, s2, t(a2));
    return n2 && n2.glyphMosaicItems && this._textToGlyphs.set(a2, n2.glyphMosaicItems), n2;
  }
  bindFeature(t2, i2, s2) {
    const n2 = t2.readLegacyFeature();
    if (this._dynamicPropertyMap.forEach((t3, e2) => {
      this[e2] = t3(n2, i2, s2);
    }), !this._text || this._text.length === 0)
      return void (this._shapingInfo = null);
    this._size *= this._scaleFactor, this._scale = this._size / j$4, this._xOffset *= this._scaleFactor, this._yOffset *= this._scaleFactor, this._xAlignD = r$8(i$7(this._horizontalAlignment, "center")), this._yAlignD = n$4(i$7(this._verticalAlignment, "baseline"));
    const l2 = this._textToGlyphs.get(this._text);
    this.bindTextInfo(l2, false);
  }
}
const M = 128;
class j$1 extends _(r$3) {
  constructor(t2, e2, i2, r2, o2, s2, l2, n2, m2, u2, d2, p2, y2, x2, M2, j2) {
    super(), this._effects = x2;
    const w2 = w$5.load(t2);
    e2 && (w2.sdf = e2.sdf, w2.pattern = true, w2.textureBinding = e2.textureBinding), this.fillColor = i2, this.tl = r2, this.br = o2, this.aux21 = w$4(s2, l2), this.aux22 = w$4(n2, m2), this.aux3 = x$7(u2, d2, p2, 0), this._bitset = y2, this._minMaxZoom = w$4(Math.round(M2 * at), Math.round(j2 * at)), this._materialKey = w2.data;
  }
  static fromCIMFill(e2, a2, n2) {
    const c2 = e2.color, h2 = c2 && f$a(c2) || 0, d2 = e2.materialKey, [p2, y2] = x$5(e2.scaleInfo, n2), x2 = (e2.colorLocked ? nt$1 : 0) | (e2.applyRandomOffset ? vt : 0) | (e2.sampleAlphaOnly ? gt : 0);
    if (!a2)
      return new j$1(d2, null, h2, 0, 0, 0, 0, 0, 0, 0, 0, 0, x2, e2.effects, p2, y2);
    const { rect: w2, width: g2, height: K2 } = a2, _2 = e2.scaleX || 1, b2 = w2.x + et, F2 = w2.y + et, L2 = b2 + g2, T2 = F2 + K2, A2 = u$b(e2.height), B2 = _2 * A2;
    let G2 = Math.round(A2);
    G2 <= 0 && (G2 = T2 - F2);
    let S2 = Math.round(B2);
    S2 <= 0 && (S2 = L2 - b2);
    const C2 = u$b(e2.offsetX || 0), I2 = u$b(-e2.offsetY || 0), O2 = w$4(b2, F2), R = w$4(L2, T2);
    return new j$1(d2, a2, h2, O2, R, S2, G2, C2, I2, M, M, M$6(e2.angle), x2, e2.effects, p2, y2);
  }
  static fromSimpleFill(t2, i2, o2 = false) {
    const { color: s2 } = t2, a2 = s2 && t2.style !== "esriSFSNull" && s$4(s2) || 0, n2 = o2 ? nt$1 : 0, m2 = t2.materialKey;
    let c2;
    if (i2) {
      const { rect: t3, width: e2, height: r2, pixelRatio: o3 } = i2, s3 = t3.x + et, h2 = t3.y + et, u2 = s3 + e2, y2 = h2 + r2, x2 = w$4(s3, h2), w2 = w$4(u2, y2);
      c2 = new j$1(m2, i2, a2, x2, w2, e2 / o3, r2 / o3, 0, 0, M, M, 0, n2, null, n$3, o$2);
    } else
      c2 = new j$1(m2, null, a2, 0, 0, 0, 0, 0, 0, 0, 0, 0, n2, null, n$3, o$2);
    return c2._maybeAddLineTemplate(t2), c2;
  }
  static fromPictureFill(e2, i2, o2 = false) {
    const s2 = i$8, { rect: a2, width: m2, height: c2 } = i2, h2 = a2.x + et, u2 = a2.y + et, y2 = h2 + m2, x2 = u2 + c2, w2 = w$4(h2, u2), g2 = w$4(y2, x2), K2 = Math.round(u$b(e2.width)), _2 = Math.round(u$b(e2.height)), b2 = u$b(e2.xoffset), F2 = u$b(-e2.yoffset), L2 = e2.materialKey, T2 = o2 ? nt$1 : 0, A2 = new j$1(L2, i2, s2, w2, g2, K2, _2, b2, F2, M * e2.xscale, M * e2.yscale, 0, T2, null, n$3, o$2);
    return A2._maybeAddLineTemplate(e2), A2;
  }
}
class r {
  constructor() {
    this._resolver = null;
  }
  isHeld() {
    return !!this._resolver;
  }
  async acquire() {
    this._resolver ? (await this._resolver.promise, await this.acquire()) : this._resolver = D$1();
  }
  release() {
    const e2 = this._resolver;
    this._resolver = null, e2 == null ? void 0 : e2.resolve();
  }
}
async function s(e2, r2, s2) {
  try {
    await e2.acquire(), await r2(s2), e2.release();
  } catch (t2) {
    throw e2.release(), t2;
  }
}
async function u$1(t2, r2, o2) {
  if (!t2.name)
    throw new s$2("style-symbol-reference-name-missing", "Missing name in style symbol reference");
  if (t2.styleName && t2.styleName === "Esri2DPointSymbolsStyle")
    return p$1(t2, o2);
  try {
    return b$1(await c$8(t2, r2, o2), t2.name, r2, o2);
  } catch (s2) {
    return f$c(s2), null;
  }
}
async function p$1(t2, r2) {
  const e2 = w$6.replace(/\{SymbolName\}/gi, t2.name);
  try {
    const t3 = await b$6(e2, r2);
    return p$7(t3.data);
  } catch (o2) {
    return f$c(o2), null;
  }
}
async function b$1(a2, i2, u2, p2) {
  const b2 = a2.data, d2 = { portal: u2 && r$7(u2.portal) ? u2.portal : j$5.getDefault(), url: j$6(a2.baseUrl), origin: "portal-item" }, j2 = b2.items.find((t2) => t2.name === i2);
  if (!j2) {
    throw new s$2("symbolstyleutils:symbol-name-not-found", `The symbol name '${i2}' could not be found`, { symbolName: i2 });
  }
  let h2 = c$9(d$6(j2, "cimRef"), d2);
  c$a() && (h2 = a$6(h2));
  try {
    const t2 = await b$6(h2, p2);
    return p$7(t2.data);
  } catch (w2) {
    return f$c(w2), null;
  }
}
const l$2 = async (a2, r2, l2) => new l$7(await T(a2.data, r2, l2), a2.data, a2.rendererKey, a2.maxVVSize), n$1 = async (e2, t2, r2, n2) => {
  if (!e2)
    return null;
  if (e2.type === "cim")
    return l$2(e2, t2, r2);
  if (e2.type === "web-style") {
    const i2 = { type: "cim", data: await u$1(e2, null, n2), rendererKey: e2.rendererKey, maxVVSize: e2.maxVVSize };
    return l$2(i2, t2, r2);
  }
  return e2;
};
function i(e2) {
  if (!e2)
    return null;
  const { type: t2, cim: a2, url: r2, materialHash: l2 } = e2, n2 = { cim: a2, type: t2, mosaicHash: l2, url: r2, size: null, dashTemplate: null, path: null, text: null, fontName: null, animatedSymbolProperties: null };
  switch (t2) {
    case "marker":
      n2.size = e2.size, n2.path = e2.path, n2.animatedSymbolProperties = e2.animatedSymbolProperties;
      break;
    case "line":
      n2.dashTemplate = e2.dashTemplate;
      break;
    case "text":
      n2.text = e2.text, n2.fontName = e2.fontName;
  }
  return n2;
}
const S = s$5.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"), w = new Array(), k = { isOutline: false, placement: null, symbologyType: S$2.DEFAULT, vvFlags: 0 }, C = __spreadProps(__spreadValues({}, r$b), { hash: JSON.stringify(r$b), materialKey: f$d(E$2.MARKER, k) }), L = __spreadProps(__spreadValues({}, s$7), { hash: JSON.stringify(s$7), materialKey: f$d(E$2.LINE, k) }), b = __spreadProps(__spreadValues({}, y$5), { hash: JSON.stringify(y$5), materialKey: f$d(E$2.FILL, k) });
function E(e2, t2) {
  const r2 = e2.length;
  return e2.push(null), t2.then((t3) => e2[r2] = t3), e2;
}
function G(e2) {
  return !!(1 & e2);
}
function j(e2) {
  return e2.name === "worker:port-closed";
}
class x {
  constructor(e2, t2) {
    this._idCounter = 1, this._templateIdCounter = 1, this._idToTemplateGroup = new Map(), this._symbolToTemplate = new Map(), this._fetchQueue = [], this._idToResolver = new Map(), this._cimTemplateCache = new Map(), this._cimAnalyses = [], this._lock = new r(), this._fetchResource = e2, this._tileInfo = t2;
  }
  get _markerError() {
    return this._errorTemplates.marker[0];
  }
  get _fillError() {
    return this._errorTemplates.fill[0];
  }
  get _lineError() {
    return this._errorTemplates.line[0];
  }
  get _textError() {
    return this._errorTemplates.line[0];
  }
  createTemplateGroup(e2, t2) {
    this._initErrorTemplates();
    const r2 = e2.hash;
    if (this._symbolToTemplate.has(r2))
      return this._symbolToTemplate.get(r2);
    const s2 = new Array();
    t2 && this._createMeshTemplates(s2, t2, true), this._createMeshTemplates(s2, e2, false);
    const i2 = this._createGroupId(e2.type === "expanded-cim" && F(e2));
    return this._idToTemplateGroup.set(i2, s2), this._symbolToTemplate.set(r2, i2), i2;
  }
  getTemplateGroup(e2) {
    return this._idToTemplateGroup.has(e2) ? this._idToTemplateGroup.get(e2) : w;
  }
  getDynamicTemplateGroup(e2) {
    return this._idToTemplateGroup.has(e2) ? (G(e2) || S.error("mapview-template-store", `Id ${e2} does not refer to a dynamic template`), this._idToTemplateGroup.get(e2)) : w;
  }
  getMosaicItem(e2, t2) {
    const r2 = this._createTemplateId(), s2 = new Promise((e3) => this._idToResolver.set(r2, e3));
    return this._fetchQueue.push({ symbol: e2, id: r2, glyphIds: t2 }), s2;
  }
  finalize(e2) {
    return this._fetchQueue.length || this._lock.isHeld() ? s(this._lock, this._fetchAllQueuedResources.bind(this), e2) : Promise.resolve();
  }
  _initErrorTemplates() {
    this._errorTemplates || (this._errorTemplates = { fill: this._createMeshTemplates([], b, false), marker: this._createMeshTemplates([], C, false), line: this._createMeshTemplates([], L, false) });
  }
  _fetchAllQueuedResources(t2) {
    if (!this._fetchQueue.length)
      return Promise.resolve();
    const s2 = this._fetchQueue, i2 = this._cimAnalyses;
    return this._fetchQueue = [], this._cimAnalyses = [], Promise.all(i2).then(() => this._fetchResource(s2, t2).then((e2) => {
      for (const { id: t3, mosaicItem: r2 } of e2) {
        this._idToResolver.get(t3)(r2), this._idToResolver.delete(t3);
      }
    })).catch((t3) => {
      j$7(t3) ? this._fetchQueue = this._fetchQueue.concat(s2) : j(t3) || S.error(new s$2("mapview-template-store", "Unable to fetch requested texture resources", t3));
    });
  }
  _createGroupId(e2) {
    return this._idCounter++ << 1 | (e2 ? 1 : 0);
  }
  _createTemplateId() {
    return this._templateIdCounter++;
  }
  async _createSMS(e2) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(e2);
    return e$4(t2, S) ? b$4.fromSimpleMarker(e2, t2) : this._markerError;
  }
  async _createPMS(e2) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(e2);
    return e$4(t2, S) ? b$4.fromPictureMarker(e2, t2) : this._markerError;
  }
  async _createSFS(e2, t2) {
    const { spriteMosaicItem: r2 } = await this.getMosaicItem(e2);
    return e$4(r2, S) ? j$1.fromSimpleFill(e2, r2, t2) : this._fillError;
  }
  async _createPFS(e2, t2) {
    const { spriteMosaicItem: r2 } = await this.getMosaicItem(e2);
    return e$4(r2, S) ? j$1.fromPictureFill(e2, r2, t2) : this._fillError;
  }
  async _createSLS(e2, t2) {
    const { spriteMosaicItem: r2 } = await this.getMosaicItem(e2);
    return e$4(r2, S) ? K.fromSimpleLine(e2, r2) : this._lineError;
  }
  async _createLMS(e2) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(e2);
    return e$4(t2, S) ? b$4.fromLineSymbolMarker(e2, t2) : this._markerError;
  }
  async _createTS(e2) {
    const { glyphMosaicItems: t2 } = await this.getMosaicItem(e2);
    return p$5.fromText(e2, t2);
  }
  async _createCIMText(e2) {
    const { glyphMosaicItems: t$12 } = await this.getMosaicItem(i(e2), t(e2.text));
    return e$4(t$12, S) ? p$5.fromCIMText(e2, t$12, this._tileInfo) : this._textError;
  }
  async _createCIMFill(e2) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(i(e2));
    return e$4(t2, S) ? j$1.fromCIMFill(e2, t2, this._tileInfo) : this._fillError;
  }
  async _createCIMLine(e2) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(i(e2));
    return e$4(t2, S) ? K.fromCIMLine(e2, t2, this._tileInfo) : this._lineError;
  }
  async _createCIMMarker(e2) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(i(e2));
    return e$4(t2, S) ? b$4.fromCIMMarker(e2, t2, this._tileInfo) : this._markerError;
  }
  async _createCIM(e2) {
    const t2 = e2.templateHash;
    if (this._cimTemplateCache.has(t2))
      return this._cimTemplateCache.get(t2);
    let r2;
    switch (e2.type) {
      case "marker":
        r2 = await this._createCIMMarker(e2);
        break;
      case "line":
        r2 = await this._createCIMLine(e2);
        break;
      case "fill":
        r2 = await this._createCIMFill(e2);
        break;
      case "text":
        r2 = await this._createCIMText(e2);
    }
    return this._cimTemplateCache.set(t2, r2), r2;
  }
  async _createDynamicCIM(e2) {
    const t2 = e2.templateHash;
    if (this._cimTemplateCache.has(t2))
      return this._cimTemplateCache.get(t2);
    let r2;
    switch (e2.type) {
      case "marker":
        r2 = P.fromCIMMarker(e2, this._tileInfo);
        break;
      case "line":
        r2 = y.fromCIMLine(e2, this._tileInfo);
        break;
      case "fill":
        r2 = M$2.fromCIMFill(e2, this._tileInfo);
        break;
      case "text":
        r2 = g.fromCIMText(e2, this._tileInfo);
    }
    return this._cimTemplateCache.set(t2, r2), r2;
  }
  _createPrimitiveMeshTemplates(e2, t2, r2) {
    switch (t2.type) {
      case "esriSMS":
        return E(e2, this._createSMS(t2));
      case "esriPMS":
        return E(e2, this._createPMS(t2));
      case "esriSFS":
        return E(e2, this._createSFS(t2, r2));
      case "line-marker":
        return E(e2, this._createLMS(t2));
      case "esriPFS":
        return E(e2, this._createPFS(t2, r2));
      case "esriSLS":
        return E(e2, this._createSLS(t2, false));
      case "esriTS":
        return E(e2, this._createTS(t2));
      default:
        return S.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"), e2;
    }
  }
  _createMeshTemplates(e2, t2, r2) {
    if (t2.type.includes("3d"))
      return S.error("3D symbols are not supported with MapView"), e2;
    if (t2.type === "expanded-cim") {
      for (const r3 of t2.layers)
        typeof r3.materialHash == "function" ? E(e2, this._createDynamicCIM(r3)) : E(e2, this._createCIM(r3));
      return e2;
    }
    if (t2.type === "composite-symbol") {
      for (const s2 of t2.layers)
        this._createPrimitiveMeshTemplates(e2, s2, r2);
      return e2;
    }
    return t2.type === "cim" || t2.type === "label" || t2.type === "web-style" ? e2 : this._createPrimitiveMeshTemplates(e2, t2, r2);
  }
}
const F = (e2) => {
  if (!e2.layers)
    return false;
  for (const t2 of e2.layers)
    if (typeof t2.materialHash == "function")
      return true;
  return false;
};
class l$1 {
  constructor(e2, t2, s2) {
    this._loadPromise = i$9(), this._geometryType = e2, this._idField = t2, this._templateStore = s2;
  }
  update(t2, r2) {
    r$7(t2.mesh.labels) && (this._labelTemplates = this._createLabelTemplates(t2.mesh.labels, r2)), this._schema = t2;
  }
  _createLabelTemplates(e2, t2) {
    const r2 = new Map();
    if (e2.type === "simple") {
      for (const s2 of e2.classes) {
        const e3 = G$1.fromLabelClass(s2, t2);
        r2.set(s2.index, e3);
      }
      return r2;
    }
    for (const s2 in e2.classes) {
      const o2 = e2.classes[s2];
      for (const e3 of o2) {
        const s3 = G$1.fromLabelClass(e3, t2);
        r2.set(e3.index, s3);
      }
    }
    return r2;
  }
  get templates() {
    return this._templateStore;
  }
  async analyze(r2, i2, o2, l2, n2, m2, p2) {
    if (p$8(p2))
      return;
    let f2;
    o2.type === "dictionary" && (f2 = await o2.analyze(this._idField, r2.copy(), i2, n2, m2, p2));
    let c2 = 0;
    for (; r2.next(); ) {
      let t2;
      if (t2 = f2 ? f2[c2++] : r$7(l2) && p$9(r2.getDisplayId()) && r2.readAttribute("cluster_count") !== 1 ? l2.match(this._idField, r2, this._geometryType, n2, m2) : o2.match(this._idField, r2, this._geometryType, n2, m2), r2.setGroupId(t2), G(t2)) {
        const e2 = this._templateStore.getDynamicTemplateGroup(t2);
        for (const t3 of e2)
          t3 && t3.analyze && t3.analyze(this._templateStore, r2, n2, m2);
      }
    }
    return await this._loadPromise, this._templateStore.finalize(p2);
  }
  async analyzeGraphics(e2, r2, s2, i2, o2, l2) {
    if (p$8(l2))
      return;
    const n2 = e2.getCursor();
    for (s2 && await s2.analyze(this._idField, n2.copy(), r2, i2, o2, l2); n2.next(); ) {
      let e3 = n2.getGroupId();
      if (e3 != null && e3 !== -1 || (e3 = s2.match(this._idField, n2, n2.geometryType, i2, o2), n2.setGroupId(e3)), G(e3)) {
        const t2 = this._templateStore.getDynamicTemplateGroup(e3);
        for (const e4 of t2)
          e4 && e4.analyze && e4.analyze(this._templateStore, n2, i2, o2);
      }
      n2.setGroupId(e3);
    }
    return await this._loadPromise, this._templateStore.finalize(l2);
  }
  writeGraphic(e2, t2, r2, s2) {
    const i2 = t2.getGroupId(), o2 = t2.getDisplayId(), l2 = this._templateStore.getTemplateGroup(i2);
    if (e2.featureStart(t2.insertAfter, 0), o2 != null) {
      if (G(i2))
        for (const e3 of l2)
          e3 && e3.bindFeature(t2, null, null);
      if (l2) {
        for (const i3 of l2)
          i3 && i3.write(e2, t2, r2, s2);
        e2.featureEnd();
      }
    }
  }
  writeCursor(t2, r2, s2, i2, o2, l2, n2) {
    const m2 = r2.getGroupId(), p2 = r2.getDisplayId(), f2 = this._templateStore.getTemplateGroup(m2), c2 = this._schema.mesh.sortKey;
    let d2 = 0;
    if (r$7(c2) && (d2 = c2.fieldIndex != null ? r2.getComputedNumericAtIndex(c2.fieldIndex) : c2.field != null ? r2.readAttribute(c2.field) : r2.readAttribute(this._idField), d2 *= c2.order === "asc" ? 1 : -1), t2.featureStart(0, d2 == null || isNaN(d2) ? 0 : d2), p2 != null && f2) {
      if (G(m2))
        for (const e2 of f2)
          e2.bindFeature(r2, s2, i2);
      for (const e2 of f2)
        e2.write(t2, r2, o2, n2);
      if (r$7(l2) && t2.hasRecords) {
        const e2 = l2 && this._findLabelRef(f2);
        this._writeLabels(t2, r2, l2, e2, o2, n2);
      }
      t2.featureEnd();
    }
  }
  _findLabelRef(e2) {
    for (const t2 of e2)
      if (t2 instanceof b$4)
        return t2;
    return null;
  }
  _writeLabels(t2, r2, s2, i2, o2, a2) {
    for (const l2 of s2)
      if (r$7(l2) && l2) {
        const { glyphs: e2, rtl: s3, index: n2 } = l2, m2 = this._labelTemplates.get(n2);
        m2.setZoomLevel(o2), m2.bindReferenceTemplate(i2), m2.bindTextInfo(e2, s3), m2.write(t2, r2, null, a2);
      }
  }
}
const n = s$5.getLogger("esri/views/2d/engine/webgl/util/Matcher");
async function l(e2, t2, s2, r2) {
  switch (e2.type) {
    case "simple":
    case "heatmap":
      return o.fromBasicRenderer(e2, t2, s2, r2);
    case "map":
      return m.fromUVRenderer(e2, t2, s2, r2);
    case "interval":
      return c.fromCBRenderer(e2, t2, s2, r2);
    case "dictionary":
      return p.fromDictionaryRenderer(e2, t2, s2, r2);
    case "pie-chart":
      return u.fromPieChartRenderer(e2, t2, s2, r2);
    case "subtype":
      return u.fromSubtypes(e2, t2, s2, r2);
  }
}
class o {
  constructor() {
    this.type = "feature", this._defaultResult = null;
  }
  static async fromBasicRenderer(e2, t2, s2, r2) {
    const i2 = new o();
    if (e2.symbol) {
      const n2 = await n$1(e2.symbol, s2, r2), l2 = t2.createTemplateGroup(n2, null);
      i2.setDefault(l2);
    }
    return i2;
  }
  static async fromPieChartRenderer(e2, t2, s2, r2) {
    const i2 = new o();
    if (e2.markerSymbol) {
      const n2 = await n$1(e2.markerSymbol, s2, r2);
      let l2;
      e2.fillSymbol && (l2 = await n$1(e2.fillSymbol, s2, r2));
      const o2 = t2.createTemplateGroup(n2, l2);
      i2.setDefault(o2);
    }
    return i2;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(e2) {
    this._defaultResult = e2;
  }
  match(e2, t2, s2, r2, i2) {
    return this.getDefault();
  }
  async analyze(e2, t2, s2, r2, i2, a2) {
    return null;
  }
}
class u extends o {
  constructor(e2, t2) {
    super(), this._subMatchers = e2, this._subtypeField = t2;
  }
  static async fromSubtypes(e2, t2, s2, r2) {
    const i2 = new Map(), a2 = [];
    for (const n2 in e2.renderers) {
      const o2 = parseInt(n2, 10), u2 = l(e2.renderers[n2], t2, s2, r2).then((e3) => i2.set(o2, e3));
      a2.push(u2);
    }
    return await Promise.all(a2), new u(i2, e2.subtypeField);
  }
  match(e2, t2, s2, r2, i2) {
    const a2 = t2.readAttribute(this._subtypeField), n2 = this._subMatchers.get(a2);
    return n2 ? n2.match(e2, t2, s2, r2, i2) : null;
  }
}
class c extends o {
  constructor(e2, t2, s2, r2) {
    super(), this.type = "interval", this._intervals = [], this._isMaxInclusive = t2, this._fieldIndex = r2, this._field = e2, this._normalizationInfo = s2;
  }
  static async fromCBRenderer(e2, t2, s2, r2) {
    const { isMaxInclusive: i2, normalizationField: n2, normalizationTotal: l2, normalizationType: o2 } = e2, u2 = e2.field, m2 = new c(u2, i2, { normalizationField: n2, normalizationTotal: l2, normalizationType: o2 }, e2.fieldIndex), d2 = await n$1(e2.backgroundFillSymbol, s2, r2);
    await Promise.all(e2.intervals.map(async (e3) => {
      const i3 = await n$1(e3.symbol, s2, r2), n3 = await t2.createTemplateGroup(i3, d2), l3 = { min: e3.min, max: e3.max };
      m2.add(l3, n3);
    }));
    const h2 = await n$1(e2.defaultSymbol, s2, r2);
    if (h2) {
      const e3 = await t2.createTemplateGroup(h2, d2);
      m2.setDefault(e3);
    }
    return m2;
  }
  add(e2, t2) {
    this._intervals.push({ interval: e2, result: t2 }), this._intervals.sort((e3, t3) => e3.interval.min - t3.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  match(e2, t2, s2, r2, i2) {
    if (this._fieldIndex == null && !this._field)
      return this.getDefault();
    const a2 = this._fieldIndex != null ? t2.getComputedNumericAtIndex(this._fieldIndex) : this._getValueFromField(t2);
    if (a2 == null || isNaN(a2) || a2 === 1 / 0 || a2 === -1 / 0)
      return this.getDefault();
    for (let n2 = 0; n2 < this._intervals.length; n2++) {
      const { interval: e3, result: t3 } = this._intervals[n2], s3 = a2 >= e3.min, r3 = this._isMaxInclusive ? a2 <= e3.max : a2 < e3.max;
      if (s3 && r3)
        return t3;
    }
    return this.getDefault();
  }
  _needsNormalization() {
    const e2 = this._normalizationInfo;
    return e2 && (e2.normalizationField || e2.normalizationTotal || e2.normalizationType);
  }
  _getValueFromField(e2) {
    const t2 = e2.readAttribute(this._field);
    if (!this._needsNormalization() || t2 == null)
      return t2;
    const { normalizationField: s2, normalizationTotal: r2, normalizationType: i2 } = this._normalizationInfo, a2 = !!s2 && e2.readAttribute(s2);
    if (i2)
      switch (i2) {
        case "esriNormalizeByField":
          return a2 ? t2 / a2 : void 0;
        case "esriNormalizeByLog":
          return Math.log(t2) * Math.LOG10E;
        case "esriNormalizeByPercentOfTotal":
          return t2 / r2 * 100;
        default:
          return void n.error(`Found unknown normalization type: ${i2}`);
      }
    else
      n.error("Normalization is required, but no type was set!");
  }
}
class m extends o {
  constructor(e2, t2, s2) {
    super(), this.type = "map", this._nullResult = null, this._resultsMap = new Map(), this._fieldsIndex = s2, this._fields = e2, this._seperator = t2 || "";
  }
  static async fromUVRenderer(e2, t2, s2, r2) {
    const i2 = e2.fieldDelimiter, n2 = [e2.field];
    e2.field2 && n2.push(e2.field2), e2.field3 && n2.push(e2.field3);
    const l2 = await n$1(e2.backgroundFillSymbol, s2, r2), o2 = new m(n2, i2, e2.fieldIndex);
    await Promise.all(e2.map.map(async (e3) => {
      const i3 = await n$1(e3.symbol, s2, r2), n3 = await t2.createTemplateGroup(i3, l2);
      e3.value === "<Null>" ? o2.setNullResult(n3) : o2.add(e3.value, n3);
    }));
    const u2 = await n$1(e2.defaultSymbol, s2, r2);
    if (u2) {
      const e3 = await t2.createTemplateGroup(u2, l2);
      o2.setDefault(e3);
    }
    return o2;
  }
  setNullResult(e2) {
    this._nullResult = e2;
  }
  add(e2, t2) {
    this._resultsMap.set(e2.toString(), t2);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  match(e2, t2, s2, r2, i2) {
    if (this._fieldsIndex == null && !this._fields)
      return this.getDefault();
    const a2 = this._fieldsIndex != null ? t2.getComputedStringAtIndex(this._fieldsIndex) : this._getValueFromFields(t2);
    if (this._nullResult !== null && (a2 == null || a2 === "" || a2 === "<Null>"))
      return this._nullResult;
    if (a2 == null)
      return this.getDefault();
    const n2 = a2.toString();
    return this._resultsMap.has(n2) ? this._resultsMap.get(n2) : this.getDefault();
  }
  _getValueFromFields(e2) {
    const t2 = [];
    for (const s2 of this._fields) {
      const r2 = e2.readAttribute(s2);
      r2 == null || r2 === "" ? t2.push("<Null>") : t2.push(r2);
    }
    return t2.join(this._seperator);
  }
}
async function d(e2, t2) {
  const s2 = e2 || 1;
  if (typeof s2 == "number")
    return (e3, t3, r2) => s2;
  const a2 = await o$9(s2, t2.spatialReference, t2.fields);
  return (e3, s3, r2) => i$a(a2, e3, { $view: r2 }, t2.geometryType, s3) || 1;
}
let h;
async function f() {
  return h || (h = import("./createSymbolSchema.js")), h;
}
class p extends o {
  constructor(e2, t2, r2, i2, a2, n2) {
    super(), this.type = "dictionary", this._groupIdCache = new e$9(100), this._loader = e2, this._fieldMap = e2.fieldMap, this._symbolFields = e2.getSymbolFields(), this._templates = t2, this._info = r2, this._scaleFn = i2, this._schemaUtilsModule = a2, this._symbolOptions = n2;
  }
  static async fromDictionaryRenderer(e2, t2, s2, r2) {
    const [{ DictionaryLoader: i2 }, a2] = await Promise.all([import("./index.js").then(function(n3) {
      return n3.l3;
    }), f()]), n2 = new i2(e2.url, e2.config, e2.fieldMap);
    await n2.fetchResources({ spatialReference: s2.spatialReference, fields: s2.fields });
    const l2 = await d(e2.scaleExpression, s2);
    return new p(n2, t2, s2, l2, a2, e2.symbolOptions);
  }
  async _analyzeFeature(t2, s2, r2, i2, l2) {
    const o2 = t2.readLegacyFeature(), u2 = this._scaleFn(o2, r2, i2), c2 = this._attributeHash(o2) + "-" + u2, m2 = this._groupIdCache.get(c2);
    if (m2)
      return m2;
    const d2 = __spreadProps(__spreadValues({}, i2), { spatialReference: this._info.spatialReference, abortOptions: l2, fields: this._info.fields }), h2 = await this._loader.getSymbolAsync(o2, d2), f2 = this._schemaUtilsModule.createSymbolSchema(h2, this._symbolOptions), p2 = n$1(f2, this._info, s2, l2).then((t3) => {
      if (t3.type !== "expanded-cim")
        return n.error(new s$2("mapview-bad-type", `Found unexpected type ${t3.type} in dictionary response`)), null;
      t3.hash += "-" + u2;
      for (const e2 of t3.layers)
        e2.scaleFactor = u2, e2.templateHash += "-" + u2;
      return this._templates.createTemplateGroup(t3, null);
    });
    return this._groupIdCache.put(c2, p2, 1), p2;
  }
  async analyze(e2, t2, s2, r2, i2, a2) {
    const n2 = t2.getCursor(), l2 = [];
    for (; n2.next(); )
      l2.push(this._analyzeFeature(n2, s2, r2, i2, a2));
    return Promise.all(l2);
  }
  match(e2, t2, s2, r2, i2) {
    return null;
  }
  _attributeHash(e2) {
    let t2 = "";
    for (const s2 of this._symbolFields) {
      const r2 = this._fieldMap[s2];
      r2 && (t2 += e2.attributes[r2] + "-");
    }
    return t2;
  }
}
export { E$1 as E, e$3 as a, l$1 as b, e$4 as e, l, n$1 as n, t, x };
