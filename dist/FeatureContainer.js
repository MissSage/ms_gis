var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { F as e, ce as s, aV as i$1, cf as s$1, bg as n, bh as o$2, a as r$2, t, s as s$2, c7 as A, b3 as o$3, h as has, k as e$1, g as s$3, D, c8 as E$1, cg as b, b4 as i$2, aH as l$1, A as u, ch as $, X as m$1, ci as e$3 } from "./index.js";
import { Q as o$1, L as ct, ab as P, B as B$1, C, ae as D$1, af as E, ag as F, ah as G$1, an as H, ao as M, O, N, ap as R } from "./enums2.js";
import { r as r$1, i as i$3 } from "./TileContainer.js";
import { n as n$1, l, f } from "./visualVariablesUtils.js";
import { m as me, o as le, J, Q } from "./Utils2.js";
import { D as D$2, P as P$1, G as G$2, L as L$1, M as M$1, Y, V as V$1 } from "./enums.js";
import { x } from "./VertexArrayObject.js";
import { E as E$2 } from "./Texture.js";
import { e as e$2, c as c$1 } from "./utils.js";
class h$1 {
  acquire(s2) {
    return { refCount: 1, version: -1, labelMat2d: e(), tileMat3: e(), dvs: e() };
  }
  release(s2) {
  }
}
class m extends r$1 {
  constructor(s2, t2, r2, e2) {
    super(s2, t2, r2, e2, o$1, o$1);
  }
  destroy() {
    super.destroy(), this._transforms && m.TransformCache.release(this.key.hash);
  }
  setTransform(i2) {
    const o2 = this.resolution / i2.resolution, n$12 = this.transforms.tileMat3, [h2, m2] = i2.toScreenNoRotation([0, 0], [this.x, this.y]), c2 = this.width / this.rangeX * o2, f2 = this.height / this.rangeY * o2;
    s(n$12, c2, 0, 0, 0, f2, 0, h2, m2, 1), i$1(this.transforms.dvs, i2.displayViewMat3, n$12);
    const d = this.transforms.labelMat2d, l2 = window.devicePixelRatio, u2 = s$1(n(), c2 * l2, 0, 0, f2 * l2, h2 * l2, m2 * l2);
    o$2(d, i2.viewMat2d, u2);
  }
  _createTransforms() {
    return m.TransformCache.acquire(this.key.hash);
  }
}
m.TransformCache = new h$1();
const r = 2147483647;
class i {
  constructor(t2) {
    this._head = t2, this._cursor = t2;
  }
  static from(t2, e2 = 0, s2 = t2.byteLength / _.BYTES_PER_RECORD - e2) {
    const r2 = new _(new Int32Array(t2, e2 * _.BYTES_PER_RECORD, s2 * _.ELEMENTS_PER_RECORD));
    return new i(r2);
  }
  size() {
    let t2 = this._cursor, e2 = 0;
    for (; t2; )
      e2 += t2.size(), t2 = t2._link;
    return e2;
  }
  get id() {
    return this._cursor.id;
  }
  set id(t2) {
    this._cursor.id = t2;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  set materialKey(t2) {
    this._cursor.materialKey = t2;
  }
  get insertAfter() {
    return this._cursor.insertAfter;
  }
  get indexFrom() {
    return this._cursor.indexFrom;
  }
  set indexFrom(t2) {
    this._cursor.indexFrom = t2;
  }
  get indexCount() {
    return this._cursor.indexCount;
  }
  set indexCount(t2) {
    this._cursor.indexCount = t2;
  }
  get vertexFrom() {
    return this._cursor.vertexFrom;
  }
  set vertexFrom(t2) {
    this._cursor.vertexFrom = t2;
  }
  get vertexCount() {
    return this._cursor.vertexCount;
  }
  set vertexCount(t2) {
    this._cursor.vertexCount = t2;
  }
  get sortKey() {
    return this._cursor.sortKey;
  }
  set sortKey(t2) {
    this._cursor.sortKey = t2;
  }
  get index() {
    return this._cursor._indexStart + this._cursor._index;
  }
  seekIndex(t2) {
    let e2 = t2;
    for (this._cursor = this._head; this._cursor; ) {
      const t3 = this._cursor.size();
      if (e2 < t3)
        return this._cursor._index = e2, true;
      e2 -= t3, this._cursor = this._cursor._link;
    }
    return false;
  }
  forEach(t2) {
    const e2 = this.getCursor();
    for (; e2.next(); )
      t2(e2);
  }
  link(t2) {
    if (!this._head)
      return void (this._head = t2._head);
    let e2 = this._head;
    for (; e2._link; )
      e2 = e2._link;
    e2._link = t2._head, e2._link._indexStart = e2._indexStart + e2.size();
  }
  getCursor() {
    return this.copy();
  }
  lookup(t2) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t2); ) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  copy() {
    var _a;
    const t2 = new i((_a = this._head) == null ? void 0 : _a.copy());
    if (!t2._head)
      return t2;
    let e2 = t2._head, s2 = t2._head._link;
    for (; s2; )
      e2._link = s2.copy(), e2 = s2, s2 = e2._link;
    return t2;
  }
  next() {
    return !!this._cursor && (!!this._cursor.next() || !!this._cursor._link && (this._cursor = this._cursor._link, this.next()));
  }
  peekId() {
    var _a;
    return (_a = this._cursor.peekId()) != null ? _a : this._cursor._link.peekId();
  }
  delete(e2) {
    let s2 = this._head, r2 = null;
    for (; s2; ) {
      if (s2.delete(e2))
        return s2.isEmpty() && (r$2(r2) && (r2._link = s2._link), s2 === this._head && (this._head = s2._link), s2 === this._cursor && (this._cursor = s2._link)), true;
      r2 = s2, s2 = s2._link;
    }
    return false;
  }
}
i.ELEMENTS_PER_RECORD = ct, i.BYTES_PER_RECORD = i.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT;
class _ {
  constructor(t2) {
    this._link = null, this._index = -1, this._indexStart = 0, this._packedRecordsF32 = null, this._deletedCount = 0, this._offsets = { instance: null }, this._packedRecords = t2;
  }
  static from(t2, e2 = 0, s2 = t2.byteLength / this.BYTES_PER_RECORD - e2) {
    return new _(new Int32Array(t2, e2 * this.BYTES_PER_RECORD, s2 * this.ELEMENTS_PER_RECORD));
  }
  delete(t2) {
    const e2 = this._index, s2 = this.lookup(t2);
    if (s2)
      for (this.id = r, ++this._deletedCount; this.next() && this.id === t2; )
        this.id = r, ++this._deletedCount;
    return this._index = e2, s2;
  }
  isEmpty() {
    return this._deletedCount === this.size();
  }
  link(t2) {
    this._link ? this._link.link(t2) : this._link = t2;
  }
  lookup(t$1) {
    if (t(this._offsets.instance)) {
      this._offsets.instance = new Map();
      const t2 = this.copy();
      t2._index = -1;
      let e2 = 0;
      for (; t2.next(); )
        t2.id !== e2 && (this._offsets.instance.set(t2.id, t2._index), e2 = t2.id);
    }
    if (!this._offsets.instance.has(t$1))
      return false;
    const s2 = this._index;
    return this._index = this._offsets.instance.get(t$1), this.id !== r || (this._index = s2, false);
  }
  get id() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD];
  }
  set id(t2) {
    this._packedRecords[this._index * _.ELEMENTS_PER_RECORD] = t2;
  }
  get materialKey() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 1];
  }
  set materialKey(t2) {
    this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 1] = t2;
  }
  get insertAfter() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 2];
  }
  get indexFrom() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 3];
  }
  set indexFrom(t2) {
    this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 3] = t2;
  }
  get indexCount() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 4];
  }
  set indexCount(t2) {
    this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 4] = t2;
  }
  get vertexFrom() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 5];
  }
  set vertexFrom(t2) {
    this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 5] = t2;
  }
  get vertexCount() {
    return this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 6];
  }
  set vertexCount(t2) {
    this._packedRecords[this._index * _.ELEMENTS_PER_RECORD + 6] = t2;
  }
  get sortKey() {
    return this._packedRecordsF32 || (this._packedRecordsF32 = new Float32Array(this._packedRecords.buffer)), this._packedRecordsF32[this._index * _.ELEMENTS_PER_RECORD + 7];
  }
  set sortKey(t2) {
    this._packedRecordsF32 || (this._packedRecordsF32 = new Float32Array(this._packedRecords.buffer)), this._packedRecordsF32[this._index * _.ELEMENTS_PER_RECORD + 7] = t2;
  }
  get index() {
    return this._index;
  }
  size() {
    return this._packedRecords.length / _.ELEMENTS_PER_RECORD;
  }
  next() {
    for (; ++this._index < this.size() && this.id === r; )
      ;
    return this._index < this.size();
  }
  peekId() {
    const t2 = (this._index + 1) * _.ELEMENTS_PER_RECORD;
    return t2 >= this._packedRecords.length ? 0 : this._packedRecords[t2];
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new _(this._packedRecords);
    return t2._indexStart = this._indexStart, t2._link = this._link, t2._index = this._index, t2._offsets = this._offsets, t2._deletedCount = this._deletedCount, t2;
  }
}
_.ELEMENTS_PER_RECORD = ct, _.BYTES_PER_RECORD = _.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT;
const B = s$2.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"), V = n$1(l, B);
class L {
  constructor(t2, e2, i2) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s2, pixelType: r2, textureOnly: a } = t2, h2 = me(r2);
    this.shared = i2, this.pixelType = r2, this.size = e2, this.textureOnly = a, a || (this.data = new h2(e$1(s2))), this._resetRange();
  }
  destroy() {
    o$3(this._texture, (t2) => t2.dispose());
    for (const t2 in this._fbos)
      o$3(this._fbos[t2], (e2) => {
        t2 === "0" && e2.detachColorTexture(), e2.dispose();
      }), this._fbos[t2] = null;
    this._texture = null;
  }
  get _textureDesc() {
    return { target: M$1.TEXTURE_2D, wrapMode: D$2.CLAMP_TO_EDGE, pixelFormat: P$1.RGBA, dataType: this.pixelType, samplingMode: L$1.NEAREST, width: this.size, height: this.size };
  }
  setData(t2, e2, i2) {
    const s2 = f(t2), r2 = e$1(this.data), a = s2 * this.texelSize + e2;
    !r2 || a >= r2.length || (r2[a] = i2, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2));
  }
  getData(t$1, e2) {
    if (t(this.data))
      return null;
    const s2 = f(t$1) * this.texelSize + e2;
    return !this.data || s2 >= this.data.length ? null : this.data[s2];
  }
  getTexture(t2) {
    return i$2(this._texture, () => this._initTexture(t2));
  }
  getFBO(t$1, e2 = 0) {
    if (t(this._fbos[e2])) {
      const i2 = { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE }, s2 = e2 === 0 ? this.getTexture(t$1) : this._textureDesc;
      this._fbos[e2] = new x(t$1, i2, s2);
    }
    return this._fbos[e2];
  }
  get locked() {
    return !(this.pixelType !== G$2.UNSIGNED_BYTE || !this.shared || this.textureOnly || !has("esri-atomics") || !this.data) && Atomics.load(this.data, 0) === 1;
  }
  get hasDirty() {
    const t2 = this.dirtyStart;
    return this.dirtyEnd >= t2;
  }
  updateTexture(e2, i2) {
    if (!this.locked) {
      try {
        const i3 = this.dirtyStart, s2 = this.dirtyEnd;
        if (!this.hasDirty)
          return;
        this._resetRange();
        const r2 = e$1(this.data).buffer, a = this.getTexture(e2), h2 = 4, n2 = (i3 - i3 % this.size) / this.size, o2 = (s2 - s2 % this.size) / this.size, u2 = n2, l2 = this.size, p = o2, x2 = n2 * this.size * h2, _2 = (l2 + p * this.size) * h2 - x2, g = me(this.pixelType), c2 = new g(r2, x2 * g.BYTES_PER_ELEMENT, _2), T = this.size, f2 = p - u2 + 1;
        if (f2 > this.size)
          return void B.error(new s$3("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
        a.updateData(0, 0, u2, T, f2, c2);
      } catch (s2) {
      }
      i2();
    }
  }
  update(t2) {
    const { data: e2, start: i2, end: s2 } = t2;
    if (r$2(e2)) {
      const s3 = this.data, r2 = i2 * this.texelSize;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const a = 1 << i3 % this.texelSize;
        t2.layout & a && (s3[r2 + i3] = e2[i3]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, s2);
  }
  resize(t2, e2) {
    const i2 = this.size;
    if (this.size = e2, this.textureOnly)
      return void (i2 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s2 = me(this.pixelType);
    this.destroy(), this.data = new s2(e$1(t2.buffer));
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t2) {
    const e2 = new E$2(t2, this._textureDesc, i$2(this.data, void 0));
    if (r$2(this._lastTexture) && this._fbos[0]) {
      const i2 = this._lastTexture.descriptor.width, s2 = this._lastTexture.descriptor.height, r2 = this._lastTexture.descriptor.dataType, a = this._lastTexture.descriptor.pixelFormat, d = this.getFBO(t2), h2 = le(r2), n2 = new (me(r2))(new ArrayBuffer(i2 * s2 * h2 * this.texelSize)), o2 = t2.getBoundFramebufferObject(), { x: u2, y: l2, width: p, height: x2 } = t2.getViewport();
      t2.bindFramebuffer(d), d.readPixels(0, 0, i2, s2, a, r2, n2), e2.updateData(0, 0, 0, 2 * i2, s2 / 2, n2), t2.setViewport(u2, l2, p, x2), t2.bindFramebuffer(o2);
    }
    return this.destroy(), this._texture = e2, this._texture;
  }
}
class G {
  constructor(t2) {
    this._onUpdate = t2, this._initialized = false, this._forceNextUpload = false, this._locked = false;
  }
  initialize(t$1) {
    const { blocks: e2, shared: a, size: d } = t$1;
    if (this.shared = a, this.size = d, V("Initializing AttributeStoreView", t$1), t(this._data))
      this._data = A(e2, (t2) => new L(t2, d, a));
    else
      for (let s2 = 0; s2 < this._data.length; s2++) {
        const t$12 = this._data[s2], h2 = e2[s2];
        r$2(h2) && (t(t$12) ? this._data[s2] = new L(h2, d, a) : t$12.resize(h2, d));
      }
    this._initialized = true;
  }
  destroy() {
    o$3(this._data, (t2) => A(t2, (t3) => t3.destroy())), o$3(this._defaultTexture, (t2) => t2.dispose());
  }
  isEmpty() {
    const t$1 = this._data;
    return t(t$1);
  }
  isUpdating() {
    const t2 = r$2(this._pendingAttributeUpdate), e2 = t2;
    return has("esri-2d-log-updating") && console.log(`Updating AttributeStoreView ${e2}
  -> hasPendingUpdate ${t2}`), e2;
  }
  getBlock(t$1) {
    if (t(this._data))
      return null;
    return this._data[t$1];
  }
  setLabelMinZoom(t2, e2) {
    this.setData(t2, 0, 1, e2);
  }
  getLabelMinZoom(t2) {
    return this.getData(t2, 0, 1, 255);
  }
  getFilterFlags(t2) {
    return this.getData(t2, 0, 0, 0);
  }
  getVVSize(t2) {
    return this.getData(t2, P, 0, 0);
  }
  getData(t$1, e2, s2, a) {
    if (!this._data)
      return 0;
    const h2 = e$1(this._data)[e2];
    if (t(h2))
      return 0;
    const n2 = h2.getData(t$1, s2);
    return r$2(n2) ? n2 : a;
  }
  setData(t2, e2, i2, s2) {
    const r2 = e$1(this._data)[e2];
    e$1(r2).setData(t2, i2, s2);
  }
  lockTextureUpload() {
    this._locked = true;
  }
  unlockTextureUpload() {
    this._locked = false;
  }
  forceTextureUpload() {
    this._forceNextUpload = true;
  }
  async requestUpdate(e2) {
    if (this._pendingAttributeUpdate)
      return void B.error(new s$3("mapview-webgl", "Tried to update attribute data with a pending update"));
    const i2 = D();
    return V("AttributeStoreView Update Requested", e2), this._pendingAttributeUpdate = { data: e2, resolver: i2 }, this._onUpdate(), i2.promise;
  }
  update() {
    if (this._initialized && r$2(this._pendingAttributeUpdate)) {
      has("esri-2d-update-debug") && console.debug("AttributeStoreView::update");
      const { data: t2, resolver: e2 } = this._pendingAttributeUpdate, i2 = e$1(this._data);
      for (let s2 = 0; s2 < t2.blocks.length; s2++) {
        const e3 = t2.blocks[s2], r2 = i2[s2];
        o$3(r2, (t3) => o$3(e3, (e4) => {
          V(`Updating block ${s2}`, e4), t3.update(e4);
        }));
      }
      this._pendingAttributeUpdate = null, e2(), this._onUpdate();
    }
  }
  bindTextures(t2, e2 = true) {
    const i2 = this._getDefaultTexture(t2);
    if (!this._initialized)
      return t2.bindTexture(i2, B$1), void (e2 && (t2.bindTexture(i2, C), t2.bindTexture(i2, D$1), t2.bindTexture(i2, E), t2.bindTexture(i2, F), t2.bindTexture(i2, G$1), t2.bindTexture(i2, H)));
    const s2 = e$1(this._data);
    this._locked && !this._forceNextUpload || (E$1(s2, (e3) => e3.updateTexture(t2, () => this._onUpdate())), this._forceNextUpload = false), t2.bindTexture(b(s2[M], i2, (e3) => e3.getTexture(t2)), B$1), e2 && (t2.bindTexture(b(s2[O], i2, (e3) => e3.getTexture(t2)), H), t2.bindTexture(b(s2[N], i2, (e3) => e3.getTexture(t2)), C), t2.bindTexture(b(s2[P], i2, (e3) => e3.getTexture(t2)), D$1), t2.bindTexture(b(s2[R], i2, (e3) => e3.getTexture(t2)), E), t2.bindTexture(b(s2[F], i2, (e3) => e3.getTexture(t2)), F), t2.bindTexture(b(s2[G$1], i2, (e3) => e3.getTexture(t2)), G$1));
  }
  _getDefaultTexture(t$1) {
    if (t(this._defaultTexture)) {
      const e2 = { wrapMode: D$2.CLAMP_TO_EDGE, pixelFormat: P$1.RGBA, dataType: G$2.UNSIGNED_BYTE, samplingMode: L$1.NEAREST, width: 1, height: 1 };
      this._defaultTexture = new E$2(t$1, e2, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
}
function c(e2, t2) {
  const i2 = t2.length;
  if (e2 < t2[0].value || i2 === 1)
    return t2[0].size;
  for (let s2 = 1; s2 < i2; s2++)
    if (e2 < t2[s2].value) {
      const i3 = (e2 - t2[s2 - 1].value) / (t2[s2].value - t2[s2 - 1].value);
      return t2[s2 - 1].size + i3 * (t2[s2].size - t2[s2 - 1].size);
    }
  return t2[i2 - 1].size;
}
class h {
  constructor() {
    this.symbolLevels = [], this.vvColorValues = new Float32Array(8), this.vvColors = new Float32Array(32), this.vvOpacityValues = new Float32Array(8), this.vvOpacities = new Float32Array(8), this.vvSizeMinMaxValue = new Float32Array(4), this._vvMaterialParameters = { vvSizeEnabled: false, vvColorEnabled: false, vvRotationEnabled: false, vvRotationType: "geographic", vvOpacityEnabled: false }, this._technique = e$2;
  }
  getSizeVVFieldStops(i2) {
    const s2 = this._vvSizeFieldStops;
    switch (s2.type) {
      case "static":
        return s2;
      case "level-dependent":
        return i$2(s2.levels[i2], () => {
          let e2 = 1 / 0, a = 0;
          for (const t2 in s2.levels) {
            const s3 = parseFloat(t2), r3 = Math.abs(i2 - s3);
            r3 < e2 && (e2 = r3, a = s3);
          }
          if (e2 === 1 / 0)
            return { sizes: new Float32Array([0, 0, 0, 0, 0, 0]), values: new Float32Array([0, 0, 0, 0, 0, 0]) };
          const r2 = 2 ** ((i2 - a) / 2), o2 = e$1(s2.levels[a]), l2 = new Float32Array(o2.values);
          return l2[2] *= r2, l2[3] *= r2, { sizes: e$1(o2.sizes), values: l2 };
        });
    }
  }
  get vvMaterialParameters() {
    return this._vvMaterialParameters;
  }
  update(e2) {
    r$2(this._vvInfo) && this._updateVisualVariables(this._vvInfo.vvRanges, e2);
  }
  setInfo(e2, t2, i2) {
    this._updateEffects(i2), this._vvInfo = t2, this._technique = c$1(e2), this.rendererSchema = this._technique.createOrUpdateRendererSchema(this.rendererSchema, e2);
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, this._technique.getVariation(this.rendererSchema)), { outsideLabelsVisible: this.outsideLabelsVisible, supportsTextureFloat: l$1("2d").supportsTextureFloat });
  }
  getVariationHash() {
    return this._technique.getVariationHash(this.rendererSchema) << 1 | (this.outsideLabelsVisible ? 1 : 0);
  }
  _updateEffects(e2) {
    r$2(e2) ? this.outsideLabelsVisible = e2.excludedLabelsVisible : this.outsideLabelsVisible = false;
  }
  _updateVisualVariables(e2, t2) {
    const i2 = this._vvMaterialParameters;
    if (i2.vvOpacityEnabled = false, i2.vvSizeEnabled = false, i2.vvColorEnabled = false, i2.vvRotationEnabled = false, !e2)
      return;
    const n2 = e2.size;
    if (n2) {
      if (i2.vvSizeEnabled = true, n2.minMaxValue) {
        const e3 = n2.minMaxValue;
        let i3, a;
        if (J(e3.minSize) && J(e3.maxSize))
          if (Q(e3.minSize) && Q(e3.maxSize))
            i3 = u(e3.minSize), a = u(e3.maxSize);
          else {
            const r2 = t2.scale;
            i3 = u(c(r2, e3.minSize.stops)), a = u(c(r2, e3.maxSize.stops));
          }
        this.vvSizeMinMaxValue.set([e3.minDataValue, e3.maxDataValue, i3, a]);
      }
      if (n2.scaleStops && (this.vvSizeScaleStopsValue = u(c(t2.scale, n2.scaleStops.stops))), n2.unitValue) {
        const e3 = $(t2.spatialReference) / m$1[n2.unitValue.unit];
        this.vvSizeUnitValueToPixelsRatio = e3 / t2.resolution;
      }
      n2.fieldStops && (this._vvSizeFieldStops = n2.fieldStops);
    }
    const v = e2.color;
    v && (i2.vvColorEnabled = true, this.vvColorValues.set(v.values), this.vvColors.set(v.colors));
    const u$1 = e2.opacity;
    u$1 && (i2.vvOpacityEnabled = true, this.vvOpacityValues.set(u$1.values), this.vvOpacities.set(u$1.opacities));
    const h2 = e2.rotation;
    h2 && (i2.vvRotationEnabled = true, i2.vvRotationType = h2.type);
  }
}
class o extends i$3 {
  constructor(e2) {
    super(e2), this._rendererInfo = new h(), this._materialItemsRequestQueue = new e$3(), this.attributeView = new G(() => this.onAttributeStoreUpdate());
  }
  destroy() {
    this.children.forEach((e2) => e2.destroy()), this.removeAllChildren(), this.attributeView.destroy(), this._materialItemsRequestQueue.clear();
  }
  setRendererInfo(e2, t2, r2) {
    this._rendererInfo.setInfo(e2, t2, r2), this.requestRender();
  }
  async getMaterialItems(t2, r2) {
    if (!t2 || t2.length === 0)
      return null;
    const s2 = D();
    return this._materialItemsRequestQueue.push({ items: t2, abortOptions: r2, resolver: s2 }), this.requestRender(), s2.promise;
  }
  doRender(e2) {
    if (e2.context.capabilities.enable("textureFloat"), e2.context.capabilities.enable("vao"), this._materialItemsRequestQueue.length > 0) {
      let t2 = this._materialItemsRequestQueue.pop();
      for (; t2; )
        this._processMaterialItemRequest(e2, t2), t2 = this._materialItemsRequestQueue.pop();
    }
    super.doRender(e2);
  }
  renderChildren(e2) {
    for (const t2 of this.children)
      t2.commit(e2);
    this._rendererInfo.update(e2.state), super.renderChildren(e2);
  }
  updateTransforms(e2) {
    if (this.children.some((e3) => e3.hasData))
      for (const t2 of this.children)
        t2.setTransform(e2);
  }
  createRenderParams(e2) {
    const t2 = super.createRenderParams(e2);
    return t2.rendererInfo = this._rendererInfo, t2.attributeView = this.attributeView, t2;
  }
  onAttributeStoreUpdate() {
  }
  _processMaterialItemRequest(e2, { items: t2, abortOptions: r2, resolver: s2 }) {
    const { painter: i2, pixelRatio: o2 } = e2, n2 = t2.map((e3) => i2.textureManager.rasterizeItem(e3.symbol, o2, e3.glyphIds, r2));
    Promise.all(n2).then((e3) => {
      if (!this.stage)
        return void s2.reject();
      const r3 = e3.map((e4, r4) => ({ id: t2[r4].id, mosaicItem: e4 }));
      s2.resolve(r3);
    }, s2.reject);
  }
}
export { i, m, o };
