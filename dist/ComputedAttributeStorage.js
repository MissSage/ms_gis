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
var _a, _b, _c;
import { h as has, a as r$2, aA as t$1, b$ as rt, c0 as v$1, t as t$2, b1 as f$1, b4 as i, c1 as tt, c2 as lt, c3 as ot, c4 as e$1, c5 as Mt, c6 as pt, s, bW as m$1, D, m as j, g as s$1, c7 as A, c8 as E, c9 as r$3, b3 as o, k as e$3, V as a } from "./index.js";
import { e } from "./centroid.js";
import { a9 as S, aa as T, ab as P, ac as c$3, N, O } from "./enums2.js";
import { c as c$2, u as u$1, f as f$2, e as e$2, i as i$1, n as n$1, l as l$1, r as r$4, s as s$2, a as n$2 } from "./visualVariablesUtils.js";
import { m as me } from "./Utils2.js";
import { G } from "./enums.js";
class t {
  constructor(t2, e2) {
    this._mask = 0, this._buf = t2, this._mask = e2;
  }
  static fromBuffer(e2, s2) {
    return new t(e2, s2);
  }
  static create(e2, s2 = 4294967295) {
    const r2 = new Uint32Array(Math.ceil(e2 / 32));
    return new t(r2, s2);
  }
  _getIndex(t2) {
    return Math.floor(t2 / 32);
  }
  has(t2) {
    const e2 = this._mask & t2;
    return !!(this._buf[this._getIndex(e2)] & 1 << e2 % 32);
  }
  hasRange(t2, e2) {
    let s2 = t2, r2 = e2;
    for (; s2 % 32 && s2 !== r2; ) {
      if (this.has(s2))
        return true;
      s2++;
    }
    for (; r2 % 32 && s2 !== r2; ) {
      if (this.has(s2))
        return true;
      r2--;
    }
    if (s2 === r2)
      return false;
    for (let h2 = s2 / 32; h2 !== r2 / 32; h2++) {
      if (this._buf[h2])
        return true;
    }
    return false;
  }
  set(t2) {
    const e2 = this._mask & t2, s2 = this._getIndex(e2), r2 = 1 << e2 % 32;
    this._buf[s2] |= r2;
  }
  setRange(t2, e2) {
    let s2 = t2, r2 = e2;
    for (; s2 % 32 && s2 !== r2; )
      this.set(s2++);
    for (; r2 % 32 && s2 !== r2; )
      this.set(r2--);
    if (s2 !== r2)
      for (let h2 = s2 / 32; h2 !== r2 / 32; h2++)
        this._buf[h2] = 4294967295;
  }
  unset(t2) {
    const e2 = this._mask & t2, s2 = this._getIndex(e2), r2 = 1 << e2 % 32;
    this._buf[s2] &= 4294967295 ^ r2;
  }
  resize(t2) {
    const e2 = this._buf, s2 = new Uint32Array(Math.ceil(t2 / 32));
    s2.set(e2), this._buf = s2;
  }
  or(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] |= t2._buf[e2];
    return this;
  }
  and(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] &= t2._buf[e2];
    return this;
  }
  xor(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] ^= t2._buf[e2];
    return this;
  }
  ior(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] |= ~t2._buf[e2];
    return this;
  }
  iand(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] &= ~t2._buf[e2];
    return this;
  }
  ixor(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] ^= ~t2._buf[e2];
    return this;
  }
  any() {
    for (let t2 = 0; t2 < this._buf.length; t2++)
      if (this._buf[t2])
        return true;
    return false;
  }
  copy(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] = t2._buf[e2];
    return this;
  }
  clone() {
    return new t(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t2 = 0; t2 < this._buf.length; t2++)
      this._buf[t2] = 0;
  }
  forEachSet(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++) {
      let s2 = this._buf[e2], r2 = 32 * e2;
      if (s2)
        for (; s2; ) {
          1 & s2 && t2(r2), s2 >>>= 1, r2++;
        }
    }
  }
  countSet() {
    let t2 = 0;
    return this.forEachSet((e2) => {
      t2++;
    }), t2;
  }
}
let h = 0;
const u = (_a = has("featurelayer-simplify-thresholds")) != null ? _a : [0.5, 0.5, 0.5, 0.5], l = u[0], c$1 = u[1], m = u[2], g = u[3], y = (_b = has("featurelayer-simplify-payload-size-factors")) != null ? _b : [1, 2, 4], _ = y[0], f = y[1], p = y[2], x = (_c = has("featurelayer-simplify-mobile-factor")) != null ? _c : 2, I = has("esri-mobile");
class b {
  constructor(e2, t2) {
    this.type = "FeatureSetReader", this.arcadeDeclaredClass = "esri.arcade.Feature", this.seen = false, this.instance = 0, this._tx = 0, this._ty = 0, this._sx = 1, this._sy = 1, this._deleted = null, this._joined = [], this._objectIdToIndex = null, this._level = 0, this.instance = e2, this._layerSchema = t2;
  }
  static createInstance() {
    return h++, h = h > 65535 ? 0 : h, h;
  }
  get isEmpty() {
    return r$2(this._deleted) && this._deleted.countSet() === this.getSize();
  }
  set level(e2) {
    this._level = e2;
  }
  getAreaSimplificationThreshold(e2, t2) {
    let r2 = 1;
    const s2 = I ? x : 1;
    t2 > 4e6 ? r2 = p * s2 : t2 > 1e6 ? r2 = f * s2 : t2 > 5e5 ? r2 = _ * s2 : t2 > 1e5 && (r2 = s2);
    let i2 = 0;
    e2 > 4e3 ? i2 = g * r2 : e2 > 2e3 ? i2 = m * r2 : e2 > 100 ? i2 = c$1 : e2 > 15 && (i2 = l);
    let o2 = 8;
    return this._level < 4 ? o2 = 1 : this._level < 5 ? o2 = 2 : this._level < 6 && (o2 = 4), i2 * o2;
  }
  createQuantizedExtrudedQuad(e2, t2) {
    return new t$1([5], [e2 - 1, t2, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  setArcadeSpatialReference(e2) {
    this._arcadeSpatialReference = e2;
  }
  attachStorage(e2) {
    this._storage = e2;
  }
  getQuantizationTransform() {
    throw new Error("Unable to find transform for featureSet");
  }
  getStorage() {
    return this._storage;
  }
  getComputedNumeric(e2) {
    return this.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(e2, t2) {
    return this.setComputedNumericAtIndex(t2, 0);
  }
  getComputedString(e2) {
    return this.getComputedStringAtIndex(0);
  }
  setComputedString(e2, t2) {
    return this.setComputedStringAtIndex(0, t2);
  }
  getComputedNumericAtIndex(e2) {
    return this._storage.getComputedNumericAtIndex(this.getDisplayId(), e2);
  }
  setComputedNumericAtIndex(e2, t2) {
    this._storage.setComputedNumericAtIndex(this.getDisplayId(), e2, t2);
  }
  getComputedStringAtIndex(e2) {
    return this._storage.getComputedStringAtIndex(this.getDisplayId(), e2);
  }
  setComputedStringAtIndex(e2, t2) {
    return this._storage.setComputedStringAtIndex(this.getDisplayId(), e2, t2);
  }
  transform(e2, t2, r2, s2) {
    const i2 = this.copy();
    return i2._tx += e2, i2._ty += t2, i2._sx *= r2, i2._sy *= s2, i2;
  }
  readAttribute(e2, t2 = false) {
    const r2 = this._readAttribute(e2, t2);
    if (r2 !== void 0)
      return r2;
    for (const s2 of this._joined) {
      s2.setIndex(this.getIndex());
      const r3 = s2._readAttribute(e2, t2);
      if (r3 !== void 0)
        return r3;
    }
  }
  readAttributes() {
    const e2 = this._readAttributes();
    for (const t2 of this._joined) {
      t2.setIndex(this.getIndex());
      const r2 = t2._readAttributes();
      for (const t3 of Object.keys(r2))
        e2[t3] = r2[t3];
    }
    return e2;
  }
  joinAttributes(e2) {
    this._joined.push(e2);
  }
  readArcadeFeature() {
    return this;
  }
  geometry() {
    const e2 = this.readHydratedGeometry(), t2 = rt(e2, this.geometryType, this.hasZ, this.hasM), r2 = v$1(t2);
    return r2 && (r2.spatialReference = this._arcadeSpatialReference), r2;
  }
  field(e2) {
    if (this.hasField(e2))
      return this.readAttribute(e2, true);
    for (const t2 of this._joined)
      if (t2.setIndex(this.getIndex()), t2.hasField(e2)) {
        return t2._readAttribute(e2, true);
      }
    throw new Error(`Field ${e2} does not exist`);
  }
  setField(e2, t2) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.getFieldNames();
  }
  castToText(e2 = false) {
    if (!e2)
      return JSON.stringify(this.readLegacyFeature());
    const t2 = this.readLegacyFeature();
    if (!t2)
      return JSON.stringify(null);
    const r2 = { geometry: t2.geometry, attributes: __spreadValues({}, t2.attributes ? t2.attributes : {}) };
    for (const s2 in r2.attributes) {
      const e3 = r2.attributes[s2];
      e3 instanceof Date && (r2.attributes[s2] = e3.getTime());
    }
    return JSON.stringify(r2);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this._layerSchema;
  }
  castAsJson(e2 = null) {
    return { attributes: this._readAttributes(), geometry: (e2 == null ? void 0 : e2.keepGeometryType) === true ? this.geometry() : this.geometry().toJSON() };
  }
  castAsJsonAsync(e2 = null, t2 = null) {
    return Promise.resolve(this.castAsJson(t2));
  }
  removeIds(e2) {
    if (t$2(this._objectIdToIndex)) {
      const e3 = new Map(), t2 = this.getCursor();
      for (; t2.next(); ) {
        const s3 = f$1(t2.getObjectId());
        e3.set(s3, t2.getIndex());
      }
      this._objectIdToIndex = e3;
    }
    const s2 = this._objectIdToIndex;
    for (const t2 of e2)
      s2.has(t2) && this.removeAtIndex(s2.get(t2));
  }
  removeAtIndex(e2) {
    t$2(this._deleted) && (this._deleted = t.create(this.getSize())), this._deleted.set(e2);
  }
  readGeometryForDisplay() {
    return this.readUnquantizedGeometry(true);
  }
  readLegacyGeometryForDisplay() {
    return this.readLegacyGeometry(true);
  }
  *features() {
    const e2 = this.getCursor();
    for (; e2.next(); )
      yield e2.readOptimizedFeature();
  }
  _getExists() {
    return t$2(this._deleted) || !this._deleted.has(this.getIndex());
  }
  _computeCentroid() {
    if (this.geometryType !== "esriGeometryPolygon")
      return null;
    const e$12 = this.readUnquantizedGeometry();
    if (!e$12 || e$12.hasIndeterminateRingOrder)
      return null;
    const t2 = i(this.getQuantizationTransform(), null);
    return e(new t$1(), e$12, this.hasM, this.hasZ, t2);
  }
  copyInto(e2) {
    e2.seen = this.seen, e2._storage = this._storage, e2._arcadeSpatialReference = this._arcadeSpatialReference, e2._joined = this._joined, e2._tx = this._tx, e2._ty = this._ty, e2._sx = this._sx, e2._sy = this._sy, e2._deleted = this._deleted, e2._objectIdToIndex = this._objectIdToIndex;
  }
}
function d({ coords: t2, lengths: e2 }) {
  let r2 = 0;
  for (const s2 of e2) {
    for (let e3 = 1; e3 < s2; e3++)
      t2[2 * (r2 + e3)] += t2[2 * (r2 + e3) - 2], t2[2 * (r2 + e3) + 1] += t2[2 * (r2 + e3) - 1];
    r2 += s2;
  }
}
class c extends b {
  constructor(t2, e2, r2) {
    super(t2, r2), this._exceededTransferLimit = false, this._featureIndex = -1, this._dateFields = new Set(), this._geometryType = r2 == null ? void 0 : r2.geometryType, this._features = e2;
  }
  static fromFeatures(t2, e2) {
    const { objectIdField: s2, geometryType: i2 } = e2, n2 = tt([], t2, i2, false, false, s2);
    for (let r2 = 0; r2 < n2.length; r2++)
      n2[r2].displayId = t2[r2].displayId;
    return c.fromOptimizedFeatures(n2, e2);
  }
  static fromFeatureSet(t2, e2) {
    const r2 = lt(t2, e2.objectIdField);
    return c.fromOptimizedFeatureSet(r2, e2);
  }
  static fromOptimizedFeatureSet(t2, e2) {
    const { features: r2 } = t2, s2 = c.fromOptimizedFeatures(r2, e2);
    s2._exceededTransferLimit = t2.exceededTransferLimit, s2._transform = t2.transform;
    for (const i2 of t2.fields)
      i2.type === "esriFieldTypeDate" && s2._dateFields.add(i2.name);
    return s2;
  }
  static fromOptimizedFeatures(t2, e2, r2) {
    const s2 = b.createInstance(), i2 = new c(s2, t2, e2);
    return i2._transform = r2, i2;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  removeIds(t2) {
    const e2 = new Set(t2);
    this._features = this._features.filter((t3) => !(t3.objectId && e2.has(t3.objectId)));
  }
  append(t2) {
    for (const e2 of t2)
      this._features.push(e2);
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getQuantizationTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let t2 = "";
    for (const e2 in this._current.attributes)
      t2 += this._current.attributes[e2];
    return t2;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(t2) {
    this._featureIndex = t2;
  }
  getObjectId() {
    return this._current.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t2) {
    this._current.displayId = t2;
  }
  getGroupId() {
    return this._current.groupId;
  }
  setGroupId(t2) {
    this._current.groupId = t2;
  }
  copy() {
    const t2 = new c(this.instance, this._features, this.fullSchema());
    return this.copyInto(t2), t2;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); )
      ;
    return this._featureIndex < this._features.length;
  }
  readLegacyFeature() {
    return ot(this._current, this.geometryType, this.hasZ, this.hasM);
  }
  readOptimizedFeature() {
    return this._current;
  }
  readLegacyPointGeometry() {
    return this.readGeometry() ? { x: this.getX(), y: this.getY() } : null;
  }
  readLegacyGeometry() {
    const t2 = this.readGeometry();
    return rt(t2, this.geometryType, this.hasZ, this.hasM);
  }
  readLegacyCentroid() {
    const e2 = this.readCentroid();
    return t$2(e2) ? null : { x: e2.coords[0] * this._sx + this._tx, y: e2.coords[1] * this._sy + this._ty };
  }
  readGeometryArea() {
    return e$1(this._current) ? Mt(this._current.geometry, 2) : 0;
  }
  readUnquantizedGeometry() {
    const t2 = this.readGeometry();
    if (this.geometryType === "esriGeometryPoint" || !t2)
      return t2;
    const e2 = t2.clone();
    return d(e2), e2;
  }
  readHydratedGeometry() {
    const r2 = this._current.geometry;
    if (t$2(r2))
      return null;
    const s2 = r2.clone();
    return r$2(this._transform) && pt(s2, s2, this.hasZ, this.hasM, this._transform), s2;
  }
  getXHydrated() {
    if (!e$1(this._current))
      return 0;
    const e2 = this._current.geometry.coords[0], r2 = this.getQuantizationTransform();
    return t$2(r2) ? e2 : e2 * r2.scale[0] + r2.translate[0];
  }
  getYHydrated() {
    if (!e$1(this._current))
      return 0;
    const e2 = this._current.geometry.coords[1], r2 = this.getQuantizationTransform();
    return t$2(r2) ? e2 : r2.translate[1] - e2 * r2.scale[1];
  }
  getX() {
    return e$1(this._current) ? this._current.geometry.coords[0] * this._sx + this._tx : 0;
  }
  getY() {
    return e$1(this._current) ? this._current.geometry.coords[1] * this._sy + this._ty : 0;
  }
  readGeometry() {
    if (!e$1(this._current)) {
      if (r$2(this._current.centroid)) {
        const [t3, e2] = this._current.centroid.coords;
        return this.createQuantizedExtrudedQuad(t3, e2);
      }
      return null;
    }
    const t2 = this._current.geometry.clone();
    if (t2.isPoint)
      return t2.coords[0] = t2.coords[0] * this._sx + this._tx, t2.coords[1] = t2.coords[1] * this._sy + this._ty, t2;
    let r2 = 0;
    for (const e2 of t2.lengths)
      t2.coords[2 * r2] = t2.coords[2 * r2] * this._sx + this._tx, t2.coords[2 * r2 + 1] = t2.coords[2 * r2 + 1] * this._sy + this._ty, r2 += e2;
    return t2;
  }
  readCentroid() {
    return e$1(this._current) ? this._computeCentroid() : this._current.centroid;
  }
  hasField(t2) {
    if (t2 in this._current.attributes)
      return true;
    return this.getFieldNames().map((t3) => t3.toLowerCase()).includes(t2.toLowerCase());
  }
  getFieldNames() {
    return Object.keys(this._current.attributes);
  }
  _readAttribute(t2, e2) {
    const r2 = this._current.attributes[t2];
    if (r2 !== void 0)
      return r2 != null && e2 && this._dateFields.has(t2) ? new Date(r2) : r2;
    const s2 = this.readAttributes(), i2 = t2.toLocaleLowerCase().trim();
    for (const n2 in s2)
      if (n2.toLocaleLowerCase().trim() === i2) {
        const t3 = this._current.attributes[n2];
        return t3 != null && e2 && this._dateFields.has(n2) ? new Date(t3) : t3;
      }
  }
  copyInto(t2) {
    super.copyInto(t2), t2._featureIndex = this._featureIndex, t2._transform = this._transform, t2._dateFields = this._dateFields;
  }
  _readAttributes() {
    return this._current.attributes;
  }
}
const k = s.getLogger("esri.views.layers.2d.features.support.AttributeStore"), F = n$1(l$1, k), M = { sharedArrayBuffer: has("esri-shared-array-buffer"), atomics: has("esri-atomics") };
function B(t2, e2) {
  return (i2) => e2(t2(i2));
}
class C {
  constructor(t2, e2, i2, s2) {
    this.size = 0, this.texelSize = 4;
    const { pixelType: r2, layout: a2, textureOnly: o2 } = s2;
    this.textureOnly = o2 || false, this.pixelType = r2, this._ctype = e2, this.layout = a2, this._resetRange(), this._shared = t2, this.size = i2, o2 || (this.data = this._initData(r2, i2, t2, e2));
  }
  get buffer() {
    return o(this.data, (t2) => t2.buffer);
  }
  unsetComponentAllTexels(t2, e2) {
    const i2 = e$3(this.data);
    for (let s2 = 0; s2 < this.size * this.size; s2++)
      i2[s2 * this.texelSize + t2] &= ~e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t2, e2) {
    const i2 = e$3(this.data);
    for (let s2 = 0; s2 < this.size * this.size; s2++)
      i2[s2 * this.texelSize + t2] |= 255 & e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t2, e2, i2) {
    const s2 = e$3(this.data);
    for (const r2 of i2)
      s2[r2 * this.texelSize + t2] |= e2, this.dirtyStart = Math.min(this.dirtyStart, r2), this.dirtyEnd = Math.max(this.dirtyEnd, r2);
  }
  setComponentTexel(t2, e2, i2) {
    e$3(this.data)[i2 * this.texelSize + t2] |= e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  unsetComponentTexel(t2, e2, i2) {
    e$3(this.data)[i2 * this.texelSize + t2] &= ~e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  getData(t2, e2) {
    const i2 = f$2(t2);
    return e$3(this.data)[i2 * this.texelSize + e2];
  }
  setData(t2, e2, i2) {
    const s2 = f$2(t2), r2 = 1 << e2;
    (this.layout & r2) != 0 ? (this.data[s2 * this.texelSize + e2] = i2, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2)) : k.error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  lock() {
    this.pixelType === G.UNSIGNED_BYTE && this._shared && M.atomics && this._ctype !== "local" && Atomics.store(this.data, 0, 1);
  }
  unlock() {
    this.pixelType === G.UNSIGNED_BYTE && this._shared && M.atomics && this._ctype !== "local" && Atomics.store(this.data, 0, 0);
  }
  expand(t2) {
    if (this.size = t2, !this.textureOnly) {
      const e2 = this._initData(this.pixelType, t2, this._shared, this._ctype), i2 = e$3(this.data);
      e2.set(i2), this.data = e2;
    }
  }
  toMessage() {
    const t2 = this.dirtyStart, e2 = this.dirtyEnd, i2 = this.texelSize;
    if (t2 > e2)
      return null;
    this._resetRange();
    const s2 = !(this._shared || this._ctype === "local"), r2 = this.pixelType, a2 = this.layout, o2 = e$3(this.data);
    return { start: t2, end: e2, data: s2 && o2.slice(t2 * i2, (e2 + 1) * i2) || null, pixelType: r2, layout: a2 };
  }
  _initData(t2, e2, i2, s2) {
    const r2 = i2 && s2 !== "local" ? SharedArrayBuffer : ArrayBuffer, a2 = me(t2), o2 = new a2(new r2(e2 * e2 * 4 * a2.BYTES_PER_ELEMENT));
    for (let n2 = 0; n2 < o2.length; n2 += 4)
      o2[n2 + 1] = 255;
    return o2;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
}
class v {
  constructor(t2, e2, i2 = () => {
  }) {
    this._client = t2, this.config = e2, this._notifyChange = i2, this._attributeComputeMap = new Map(), this._blocks = new Array(), this._filters = new Array(S), this._targetType = 0, this._abortController = new AbortController(), this._hasScaleExpr = false, this._size = 32, this._idsToHighlight = new Set();
    const s2 = e2.supportsTextureFloat ? G.FLOAT : G.UNSIGNED_BYTE;
    F(`Creating AttributeStore ${M.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{ pixelType: G.UNSIGNED_BYTE, layout: 1 }, { pixelType: G.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: G.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: s2, layout: 15 }, { pixelType: s2, layout: 15 }, { pixelType: s2, layout: 15 }, { pixelType: s2, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  destroy() {
    this._abortController.abort();
  }
  get hasScaleExpr() {
    return this._hasScaleExpr;
  }
  get _signal() {
    return this._abortController.signal;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  isUpdating() {
    return !!this._currUpdate || !!this._nextUpdate;
  }
  update(t2, e2) {
    this.config = e2;
    const i2 = e2.schema.processors[0].storage, a2 = m$1(this._schema, i2);
    if ((t2.targets.feature || t2.targets.aggregate) && (t2.storage.data = true), a2 && (has("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", a2), t2.storage.data = true, this._schema = i2, this._attributeComputeMap.clear(), !t$2(i2))) {
      switch (i2.target) {
        case "feature":
          this._targetType = u$1;
          break;
        case "aggregate":
          this._targetType = c$2;
      }
      if (i2.type === "subtype")
        for (const t3 in i2.mapping) {
          const e3 = i2.mapping[t3];
          if (r$2(e3) && r$2(e3.vvMapping))
            for (const t4 of e3.vvMapping)
              this._bindAttribute(t4);
        }
      else {
        if (r$2(i2.vvMapping))
          for (const t3 of i2.vvMapping)
            this._bindAttribute(t3);
        if (r$2(i2.attributeMapping))
          for (const t3 of i2.attributeMapping)
            this._bindAttribute(t3);
      }
    }
  }
  onTileData(t2, e2) {
    if (t$2(e2.addOrUpdate))
      return;
    const i2 = e2.addOrUpdate.getCursor();
    for (; i2.next(); ) {
      const t3 = i2.getDisplayId();
      this.setAttributeData(t3, i2);
    }
  }
  async setHighlight(t2, e2) {
    const i2 = 1, s2 = this._getBlock(0), r2 = e2.map((t3) => f$2(t3));
    s2.lock(), s2.unsetComponentAllTexels(0, i2), s2.setComponent(0, i2, r2), s2.unlock(), this._idsToHighlight.clear();
    for (const a2 of t2)
      this._idsToHighlight.add(a2);
    await this.sendUpdates();
  }
  async updateFilters(t2, e2, i2) {
    const { service: s2, spatialReference: r2 } = i2, { filters: a2 } = e2, o2 = a2.map((t3, e3) => this._updateFilter(t3, e3, s2, r2));
    (await Promise.all(o2)).some((t3) => t3) && (t2.storage.filters = true, has("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", "Filters changed"));
  }
  setData(t2, e2, i2, s2) {
    const r2 = f$2(t2);
    this._ensureSizeForTexel(r2), this._getBlock(e2).setData(t2, i2, s2);
  }
  getData(t2, e2, i2) {
    return this._getBlock(e2).getData(t2, i2);
  }
  getHighlightFlag(t2) {
    return this._idsToHighlight.has(t2) ? T : 0;
  }
  unsetAttributeData(t2) {
    const e2 = f$2(t2);
    this._getBlock(0).setData(e2, 0, 0);
  }
  setAttributeData(t2, e2) {
    const s2 = f$2(t2);
    if (this._ensureSizeForTexel(s2), this._getBlock(0).setData(s2, 0, this.getFilterFlags(e2)), this._targetType !== e$2(t2))
      return;
    const r2 = this._attributeComputeMap, a$1 = this.config.supportsTextureFloat ? 1 : 2, o2 = 4;
    r2.size && r2.forEach((t3, r3) => {
      const n2 = r3 * a$1 % o2, h2 = Math.floor(r3 * a$1 / o2), l2 = this._getBlock(h2 + P), u2 = t3(e2);
      if (this.config.supportsTextureFloat)
        l2.setData(s2, n2, u2);
      else if (u2 === c$3)
        l2.setData(s2, n2, 255), l2.setData(s2, n2 + 1, 255);
      else {
        const t4 = a(Math.round(u2), -32767, 32766) + 32768, e3 = 255 & t4, r4 = (65280 & t4) >> 8;
        l2.setData(s2, n2, e3), l2.setData(s2, n2 + 1, r4);
      }
    });
  }
  sendUpdates() {
    if (has("esri-2d-update-debug") && console.debug("AttributeStore::sendUpdate"), this._notifyChange(), this._nextUpdate)
      return this._nextUpdate.promise;
    if (this._currUpdate)
      return this._nextUpdate = D(), this._nextUpdate.promise;
    const e2 = { blocks: this._blocks.map((t2) => r$2(t2) ? t2.toMessage() : null) };
    return this._currUpdate = this._createResources().then(() => {
      const t2 = () => {
        if (this._currUpdate = null, this._nextUpdate) {
          const t3 = this._nextUpdate;
          this._nextUpdate = null, this.sendUpdates().then(() => t3.resolve());
        } else
          has("esri-2d-update-debug") && console.debug("AttributeStore::sendUpdate::No additional updates queued");
        this._notifyChange();
      };
      has("esri-2d-update-debug") && console.debug("AttributeStore::sendUpdate::client.update");
      const i2 = this._client.update(e2, this._signal).then(t2).catch(t2);
      return this._client.render(this._signal), i2;
    }).catch((e3) => {
      if (j(e3))
        return this._createResourcesPromise = null, this._createResources();
      this._notifyChange(), k.error(new s$1("mapview-attribute-store", "Encountered an error during client update", e3));
    }), this._currUpdate;
  }
  _ensureSizeForTexel(t2) {
    for (; t2 >= this._size * this._size; )
      if (this._expand())
        return;
  }
  _bindAttribute(t2) {
    function e2() {
      return t2.normalizationField ? (e3) => {
        const i3 = e3.readAttribute(t2.normalizationField);
        if (!i3)
          return null;
        return e3.readAttribute(t2.field) / i3;
      } : (e3) => e3.readAttribute(t2.field);
    }
    function i2() {
      return t2.normalizationField && k.warn("mapview-arcade", "Ignoring normalizationField specified with an arcade expression which is not supported."), (e3) => e3.getComputedNumericAtIndex(t2.fieldIndex);
    }
    let s2;
    if (t2.fieldIndex != null)
      s2 = i2();
    else {
      if (!t2.field)
        return;
      s2 = e2();
    }
    if (t2.valueRepresentation) {
      s2 = B(s2, (e3) => r$4(e3, t2.valueRepresentation));
    }
    const r2 = (t3) => t3 === null || isNaN(t3) || t3 === 1 / 0 || t3 === -1 / 0 ? c$3 : t3;
    this._attributeComputeMap.set(t2.binding, B(s2, r2));
  }
  _createResources() {
    if (r$2(this._createResourcesPromise))
      return this._createResourcesPromise;
    this._getBlock(N), this._getBlock(O), F("Initializing AttributeStore");
    const e2 = { shared: M.sharedArrayBuffer && !(this._client.type === "local"), size: this._size, blocks: A(this._blocks, (t2) => ({ textureOnly: t2.textureOnly, buffer: t2.buffer, pixelType: t2.pixelType })) }, i2 = this._client.initialize(e2, this._signal).catch((e3) => {
      j(e3) ? this._createResourcesPromise = null : k.error(new s$1("mapview-attribute-store", "Encountered an error during client initialization", e3));
    });
    return this._createResourcesPromise = i2, i2.then(() => t$2(this._createResourcesPromise) ? this._createResources() : void 0), i2;
  }
  _getBlock(t2) {
    const e2 = this._blocks[t2];
    if (r$2(e2))
      return e2;
    F(`Initializing AttributeBlock at index ${t2}`);
    const i2 = M.sharedArrayBuffer, s2 = this._client.type, a2 = new C(i2, s2, this._size, this._blockDescriptors[t2]);
    return this._blocks[t2] = a2, this._createResourcesPromise = null, a2;
  }
  _expand() {
    if (this._size < this.config.maxTextureSize) {
      const t2 = this._size <<= 1;
      return F("Expanding block size to", t2, this._blocks), E(this._blocks, (e2) => e2.expand(t2)), this._createResourcesPromise = null, this._size = t2, 0;
    }
    return k.error(new s$1("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  async _updateFilter(t2, e2, i2, a2) {
    const o2 = this._filters[e2], n2 = r$2(o2) && o2.hash;
    if (!o2 && !t2)
      return false;
    if (n2 === JSON.stringify(t2))
      return false;
    if (t$2(t2)) {
      if (!o2)
        return false;
      const t3 = 1 << e2 + 1, i3 = this._getBlock(0);
      return this._filters[e2] = null, i3.setComponentAllTexels(0, t3), this.sendUpdates(), true;
    }
    const h2 = await this._getFilter(e2, i2);
    return await h2.update(t2, a2), true;
  }
  async _getFilter(t2, e2) {
    const i2 = this._filters[t2];
    if (r$2(i2))
      return i2;
    const { default: s2 } = await import("./FeatureFilter.js"), a2 = new s2({ geometryType: e2.geometryType, hasM: false, hasZ: false, timeInfo: e2.timeInfo, fieldsIndex: new r$3(e2.fields) });
    return this._filters[t2] = a2, a2;
  }
  isVisible(t2) {
    return !!(2 & this._getBlock(0).getData(t2, 0));
  }
  getFilterFlags(t2) {
    let e2 = 0;
    const i2 = i$1(t2.getDisplayId());
    for (let a2 = 0; a2 < this._filters.length; a2++) {
      const r3 = !!(i2 & 1 << a2), o2 = this._filters[a2];
      e2 |= (!r3 || t$2(o2) || o2.check(t2) ? 1 : 0) << a2;
    }
    let r2 = 0;
    if (this._idsToHighlight.size) {
      const e3 = t2.getObjectId();
      r2 = this.getHighlightFlag(e3);
    }
    return e2 << 1 | r2;
  }
}
class r$1 {
  constructor() {
    this._freeIds = [], this._idCounter = 1;
  }
  createId(r2 = false) {
    return s$2(this._getFreeId(), r2);
  }
  releaseId(e2) {
    this._freeIds.push(e2);
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
}
function n(t2, e2, s2) {
  if (!(t2.length > e2))
    for (; t2.length <= e2; )
      t2.push(s2);
}
class r {
  constructor() {
    this._numerics = [], this._strings = [], this._idGenerator = new r$1(), this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [];
  }
  createBitset() {
    const e2 = this._bitsets.length;
    return this._bitsets.push(t.create(this._allocatedSize, n$2)), e2 + 1;
  }
  getBitset(t2) {
    return this._bitsets[t2 - 1];
  }
  _expand() {
    this._allocatedSize <<= 1;
    for (const t2 of this._bitsets)
      t2.resize(this._allocatedSize);
  }
  _ensureNumeric(t2, e2) {
    this._numerics[t2] || (this._numerics[t2] = []);
    n(this._numerics[t2], e2, 0);
  }
  _ensureInstanceId(t2) {
    n(this._instanceIds, t2, 0);
  }
  _ensureString(t2, e2) {
    this._strings[t2] || (this._strings[t2] = []);
    n(this._strings[t2], e2, null);
  }
  createDisplayId(t2 = false) {
    const s2 = this._idGenerator.createId();
    return s2 > this._allocatedSize && this._expand(), s$2(s2, t2);
  }
  releaseDisplayId(e2) {
    for (const t2 of this._bitsets)
      t2.unset(e2);
    return this._idGenerator.releaseId(e2 & n$2);
  }
  getComputedNumeric(e2, s2) {
    return this.getComputedNumericAtIndex(e2 & n$2, 0);
  }
  setComputedNumeric(e2, s2, i2) {
    return this.setComputedNumericAtIndex(e2 & n$2, i2, 0);
  }
  getComputedString(e2, s2) {
    return this.getComputedStringAtIndex(e2 & n$2, 0);
  }
  setComputedString(e2, s2, i2) {
    return this.setComputedStringAtIndex(e2 & n$2, 0, i2);
  }
  getComputedNumericAtIndex(e2, s2) {
    const i2 = e2 & n$2;
    return this._ensureNumeric(s2, i2), this._numerics[s2][i2];
  }
  setComputedNumericAtIndex(e2, s2, i2) {
    const n2 = e2 & n$2;
    this._ensureNumeric(s2, n2), this._numerics[s2][n2] = i2;
  }
  getInstanceId(e2) {
    const s2 = e2 & n$2;
    return this._ensureInstanceId(s2), this._instanceIds[s2];
  }
  setInstanceId(e2, s2) {
    const i2 = e2 & n$2;
    this._ensureInstanceId(i2), this._instanceIds[i2] = s2;
  }
  getComputedStringAtIndex(e2, s2) {
    const i2 = e2 & n$2;
    return this._ensureString(s2, i2), this._strings[s2][i2];
  }
  setComputedStringAtIndex(e2, s2, i2) {
    const n2 = e2 & n$2;
    this._ensureString(s2, n2), this._strings[s2][n2] = i2;
  }
  getXMin(e2) {
    return this._bounds[4 * (e2 & n$2)];
  }
  getYMin(e2) {
    return this._bounds[4 * (e2 & n$2) + 1];
  }
  getXMax(e2) {
    return this._bounds[4 * (e2 & n$2) + 2];
  }
  getYMax(e2) {
    return this._bounds[4 * (e2 & n$2) + 3];
  }
  setBounds(e2, s2) {
    const i2 = s2.readHydratedGeometry();
    if (!i2 || !i2.coords.length)
      return false;
    let r2 = 1 / 0, u2 = 1 / 0, o2 = -1 / 0, h2 = -1 / 0;
    i2.forEachVertex((t2, e3) => {
      r2 = Math.min(r2, t2), u2 = Math.min(u2, e3), o2 = Math.max(o2, t2), h2 = Math.max(h2, e3);
    });
    const d2 = e2 & n$2;
    return n(this._bounds, 4 * d2 + 4, 0), this._bounds[4 * d2] = r2, this._bounds[4 * d2 + 1] = u2, this._bounds[4 * d2 + 2] = o2, this._bounds[4 * d2 + 3] = h2, true;
  }
}
export { b, c, r, t, v };
