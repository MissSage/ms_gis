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
import { g6 as q$2, g as s$1, g7 as c$2, eh as s$2, t as t$1, b$ as rt, aA as t$2, a as r$1, c6 as pt, e5 as c$3, u as n$2, s as s$3, h as has, g8 as d$5, k as e, fL as c$5, c2 as lt, g9 as ft, ga as h$3, N as n$3, D as D$2, cG as g$2, bW as m$3, dB as T$3, dY as a$5, gb as y$3, cO as x$2, gc as L$1, cs as E, x as l$5, l as f$3, b4 as i$2, m as j$1, U as U$1, V as a$6, ay as at, R as l$6, fW as X$1, gd as w$1, ge as M, aB as i$3, q as b$3, b6 as t$4, b1 as f$4, b5 as U$2, fF as g$3, cg as b$4, aK as k$1, cd as J, gf as _$2, em as gt, el as G$2, b3 as o$3, gg as s$6, aq as v$3, cr as w$2, ao as R$2, gh as o$5, $ as e$1, a0 as y$4, a1 as n$5, d9 as d$6, a8 as f$6, c9 as r$4, d0 as j$2, gi as m$4, bB as E$1, ct as h$4, d3 as j$3, gj as d$7 } from "./index.js";
import { Y as Y$1 } from "./QueryEngine.js";
import { r as r$2, c as c$6, u as u$2, l as l$7 } from "./FeatureStore2D.js";
import { s as s$4 } from "./quantizationUtils.js";
import { q as q$3 } from "./ogcFeatureUtils.js";
import { b as b$2, c as c$4, r as r$3, v as v$4 } from "./ComputedAttributeStorage.js";
import { s as s$5 } from "./CircularArray.js";
import { createConnection as t$3 } from "./createConnection.js";
import { g as g$4, f as f$5 } from "./projectionSupport.js";
import { s as s$7, a as n$4 } from "./visualVariablesUtils.js";
import { Q as o$4 } from "./enums2.js";
import "vue";
import "./QueryEngineResult.js";
import "./WhereClause.js";
import "./utils3.js";
import "./generateRendererUtils.js";
import "./utils4.js";
import "./QueryEngineCapabilities.js";
import "./timeSupport.js";
import "./geojson.js";
import "./clientSideDefaults.js";
import "./centroid.js";
import "./Utils2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./json.js";
import "./visualVariablesUtils2.js";
function o$2(o2) {
  return o2 === "heatmap" ? import("./HeatmapProcessor.js") : import("./SymbolProcessor.js");
}
const r = 268435455;
class n$1 {
  constructor() {
    this.fieldMap = new Map(), this.fields = [], this.hasFeatures = false, this.exceededTransferLimit = false, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.vertexCount = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
  hasField(e2) {
    return this.fieldMap.has(e2);
  }
  isDateField(e2) {
    var _a, _b;
    return (_b = (_a = this.fieldMap.get(e2)) == null ? void 0 : _a.isDate) != null ? _b : false;
  }
  getFieldIndex(e2) {
    var _a;
    return (_a = this.fieldMap.get(e2)) == null ? void 0 : _a.index;
  }
}
function a$4(e2) {
  const t2 = 1, r2 = 2, n2 = e2.asUnsafe(), a2 = n2.getLength(), i2 = n2.pos() + a2, o2 = { name: "", isDate: false };
  for (; n2.pos() < i2 && n2.next(); )
    switch (n2.tag()) {
      case t2:
        o2.name = n2.getString();
        break;
      case r2:
        c$2(n2.getEnum()) === "esriFieldTypeDate" && (o2.isDate = true);
        break;
      default:
        n2.skip();
    }
  return o2;
}
function i$1(e2) {
  return e2.toLowerCase().trim();
}
function o$1(s2, o2, f2 = false) {
  const c2 = 1, d2 = 3, u2 = 9, l2 = 12, g2 = 13, p2 = 15, h2 = s2.asUnsafe(), m2 = h2.pos(), b2 = new n$1();
  let w2 = 0, k2 = 0;
  const x2 = 1, y2 = 2, I2 = 4, F2 = 3;
  let L2 = null, A2 = null, C = null, S2 = false;
  for (; h2.next(); )
    switch (h2.tag()) {
      case c2:
        L2 = h2.getString();
        break;
      case d2:
        A2 = h2.getString();
        break;
      case l2:
        C = h2.processMessage(q$2);
        break;
      case u2:
        if (b2.exceededTransferLimit = h2.getBool(), b2.exceededTransferLimit) {
          b2.offsets.geometry = f2 ? new Float64Array(8e3) : new Int32Array(8e3), b2.centroid = f2 ? new Float64Array(16e3) : new Int32Array(16e3);
          for (let e2 = 0; e2 < b2.centroid.length; e2++)
            b2.centroid[e2] = r;
        }
        break;
      case g2: {
        const e2 = a$4(s2), t2 = e2.name, r2 = i$1(e2.name), n2 = { fieldName: t2, index: w2++, isDate: e2.isDate };
        b2.fields.push(n2), b2.fieldMap.set(e2.name, n2), b2.fieldMap.set(r2, n2);
        break;
      }
      case p2: {
        const e2 = h2.getLength(), t2 = h2.pos() + e2;
        if (!b2.exceededTransferLimit) {
          const e3 = b2.offsets.geometry, t3 = b2.centroid;
          e3.push(0), t3.push(r), t3.push(r);
        }
        !S2 && b2.exceededTransferLimit && (S2 = true, b2.offsets.attributes = f2 ? new Float64Array(8e3 * w2) : new Uint32Array(8e3 * w2));
        let s3 = k2 * w2;
        for (; h2.pos() < t2 && h2.next(); )
          switch (h2.tag()) {
            case x2: {
              if (S2)
                b2.offsets.attributes[s3++] = h2.pos();
              else {
                b2.offsets.attributes.push(h2.pos());
              }
              const e3 = h2.getLength();
              h2.skipLen(e3);
              break;
            }
            case y2:
              if (o2) {
                const e3 = h2.getLength(), t3 = h2.pos() + e3;
                for (; h2.pos() < t3 && h2.next(); )
                  switch (h2.tag()) {
                    case F2: {
                      h2.getUInt32();
                      const e4 = h2.getSInt64(), t4 = h2.getSInt64();
                      b2.centroid[2 * k2] = e4, b2.centroid[2 * k2 + 1] = t4;
                      break;
                    }
                    default:
                      h2.skip();
                  }
              } else {
                b2.offsets.geometry[k2] = h2.pos();
                const e3 = h2.getLength();
                b2.vertexCount += e3, h2.skipLen(e3);
              }
              break;
            case I2: {
              const e3 = h2.getLength(), t3 = h2.pos() + e3;
              for (; h2.pos() < t3 && h2.next(); )
                switch (h2.tag()) {
                  case F2: {
                    h2.getUInt32();
                    const e4 = h2.getSInt64(), t4 = h2.getSInt64();
                    b2.centroid[2 * k2] = e4, b2.centroid[2 * k2 + 1] = t4;
                    break;
                  }
                  default:
                    h2.skip();
                }
              break;
            }
            default:
              h2.skip();
          }
        k2++, b2.hasFeatures = true;
        break;
      }
      default:
        h2.skip();
    }
  const M2 = L2 || A2;
  if (!M2)
    throw new s$1("FeatureSet has no objectId or globalId field name");
  return b2.featureCount = k2, b2.fieldCount = w2, b2.objectIdFieldIndex = b2.getFieldIndex(M2), b2.transform = C, b2.displayIds = new Uint32Array(b2.featureCount), b2.groupIds = new Uint16Array(b2.featureCount), h2.move(m2), b2;
}
const g$1 = true, l$4 = 268435455, _$1 = 128, f$2 = 128e3, y$2 = { small: { delta: new Int32Array(_$1), decoded: new Int32Array(_$1) }, large: { delta: new Int32Array(f$2), decoded: new Int32Array(f$2) } };
function I(e2) {
  return e2 <= y$2.small.delta.length ? y$2.small : (e2 <= y$2.large.delta.length || (y$2.large.delta = new Int32Array(Math.round(1.25 * e2)), y$2.large.decoded = new Int32Array(Math.round(1.25 * e2))), y$2.large);
}
function p$2(e2) {
  return e2.toLowerCase().trim();
}
function m$2(r2) {
  try {
    const e2 = 2, t2 = new n$2(new Uint8Array(r2), new DataView(r2));
    for (; t2.next(); ) {
      if (t2.tag() === e2)
        return x$1(t2.getMessage());
      t2.skip();
    }
  } catch (s2) {
    const r3 = new s$1("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: s2 });
    s$3.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF").error(r3);
  }
  return null;
}
function x$1(e2) {
  const t2 = 1;
  for (; e2.next(); ) {
    if (e2.tag() === t2)
      return e2.getMessage();
    e2.skip();
  }
  return null;
}
function S$1(e2) {
  const t2 = 1, r2 = 2, s2 = 3, i2 = 4, n2 = 5, a2 = 6, h2 = 7, o2 = 8, d2 = 9, u2 = e2.getLength(), c2 = e2.pos() + u2;
  for (; e2.pos() < c2 && e2.next(); )
    switch (e2.tag()) {
      case t2:
        return e2.getString();
      case r2:
        return e2.getFloat();
      case s2:
        return e2.getDouble();
      case i2:
        return e2.getSInt32();
      case n2:
        return e2.getUInt32();
      case a2:
        return e2.getInt64();
      case h2:
        return e2.getUInt64();
      case o2:
        return e2.getSInt64();
      case d2:
        return e2.getBool();
      default:
        return e2.skip(), null;
    }
  return null;
}
function F$3(e2, t2, r2, s2, i2, n2) {
  return 0.5 * Math.abs(e2 * s2 + r2 * n2 + i2 * t2 - e2 * n2 - r2 * t2 - i2 * s2);
}
function v$2(e2, t2, r2, s2) {
  return e2 * s2 - r2 * t2 === 0 && e2 * r2 + t2 * s2 > 0;
}
class G$1 extends b$2 {
  constructor(e2, t2, r2, s2) {
    super(e2, s2), this._hasNext = false, this._isPoints = false, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._geometryType = s2.geometryType, this._reader = t2, this._header = r2, this._hasNext = r2.hasFeatures, this._isPoints = s2.geometryType === "esriGeometryPoint";
  }
  static fromBuffer(e2, t2, r2 = false) {
    const s2 = t2.geometryType, i2 = m$2(e2), n2 = o$1(i2, s2 === "esriGeometryPoint", r2), a2 = b$2.createInstance();
    return new G$1(a2, i2, n2, t2);
  }
  get geometryType() {
    return this._geometryType;
  }
  get _size() {
    return this._header.featureCount;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get stride() {
    return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  hasField(e2) {
    return this._header.hasField(e2) || this._header.hasField(p$2(e2));
  }
  getFieldNames() {
    return this._header.fields.map((e2) => e2.fieldName);
  }
  getSize() {
    return this._size;
  }
  getQuantizationTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e2) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e2;
  }
  getAttributeHash() {
    let e2 = "";
    return this._header.fields.forEach(({ index: t2 }) => {
      e2 += this._readAttributeAtIndex(t2) + ".";
    }), e2;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e2) {
    this._header.displayIds[this._featureIndex] = e2;
  }
  getGroupId() {
    return this._header.groupIds[this._featureIndex];
  }
  setGroupId(e2) {
    this._header.groupIds[this._featureIndex] = e2;
  }
  readLegacyFeature() {
    var _a;
    if (this._cache.legacyFeature === void 0) {
      const e2 = this.readCentroid(), t2 = { attributes: this.readAttributes(), geometry: this._isPoints ? this.readLegacyPointGeometry() : this.readLegacyGeometry(), centroid: (_a = e2 && { x: e2.coords[0], y: e2.coords[1] }) != null ? _a : null };
      return this._cache.legacyFeature = t2, t2;
    }
    return this._cache.legacyFeature;
  }
  readOptimizedFeature() {
    if (this._cache.optFeature === void 0) {
      const e2 = new s$2(this.readGeometry(), this.readAttributes(), this.readCentroid());
      return e2.objectId = this.getObjectId(), e2.displayId = this.getDisplayId(), this._cache.optFeature = e2, e2;
    }
    return this._cache.optFeature;
  }
  getXHydrated() {
    const e2 = this._header.centroid[2 * this._featureIndex], t2 = this.getQuantizationTransform();
    return t$1(t2) ? e2 : e2 * t2.scale[0] + t2.translate[0];
  }
  getYHydrated() {
    const e2 = this._header.centroid[2 * this._featureIndex + 1], t2 = this.getQuantizationTransform();
    return t$1(t2) ? e2 : t2.translate[1] - e2 * t2.scale[1];
  }
  getX() {
    return this._header.centroid[2 * this._featureIndex] * this._sx + this._tx;
  }
  getY() {
    return this._header.centroid[2 * this._featureIndex + 1] * this._sy + this._ty;
  }
  readLegacyPointGeometry() {
    return { x: this.getX(), y: this.getY() };
  }
  readLegacyGeometry(e2) {
    const t2 = this.readGeometry(e2);
    return rt(t2, this.geometryType, false, false);
  }
  readLegacyCentroid() {
    const e2 = this.readCentroid();
    if (!e2)
      return null;
    const [t2, r2] = e2.coords;
    return { x: t2, y: r2 };
  }
  readGeometryArea() {
    return this._cache.area || this.readGeometry(true), this._cache.area;
  }
  readUnquantizedGeometry(e2 = false) {
    if (this._cache.unquantGeometry === void 0) {
      const t2 = this.readGeometry(e2);
      if (!t2)
        return this._cache.unquantGeometry = void 0, null;
      const r2 = I(t2.coords.length).decoded, s2 = t2.clone(r2), i2 = s2.coords;
      let n2 = 0;
      for (const e3 of s2.lengths) {
        for (let t3 = 1; t3 < e3; t3++) {
          const e4 = 2 * (n2 + t3), r3 = 2 * (n2 + t3 - 1);
          i2[e4] += i2[r3], i2[e4 + 1] += i2[r3 + 1];
        }
        n2 += e3;
      }
      return this._cache.unquantGeometry = s2, s2;
    }
    return this._cache.unquantGeometry;
  }
  readHydratedGeometry() {
    if (this._isPoints) {
      if (this._header.centroid[2 * this._featureIndex] === l$4)
        return null;
      const e3 = this.getXHydrated(), t3 = this.getYHydrated();
      return new t$2([], [e3, t3]);
    }
    const e2 = this.readGeometry();
    if (!e2)
      return null;
    const t2 = e2.clone(), r2 = this.getQuantizationTransform();
    return r$1(r2) && pt(t2, t2, this.hasZ, this.hasM, r2), t2;
  }
  readGeometry(e2 = false) {
    if (this._cache.geometry === void 0) {
      let r2 = null;
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === l$4)
          return null;
        const e3 = this.getX(), t2 = this.getY();
        r2 = new t$2([], [e3, t2]);
      } else {
        const s2 = this._header.offsets.geometry[this._featureIndex], i2 = this._reader;
        if (s2 === 0) {
          const e3 = this._readServerCentroid();
          if (!e3)
            return null;
          const [t2, r3] = e3.coords;
          return this.createQuantizedExtrudedQuad(t2, r3);
        }
        i2.move(s2);
        try {
          if (r2 = e2 ? this._parseGeometryForDisplay(i2) : this._parseGeometry(i2), r2 === null) {
            const e3 = this._readServerCentroid();
            if (!e3)
              return null;
            const [t2, r3] = e3.coords;
            return this.createQuantizedExtrudedQuad(t2, r3);
          }
        } catch (t2) {
          return console.error("Failed to parse geometry!", t2), null;
        }
      }
      return this._cache.geometry = r2, r2;
    }
    return this._cache.geometry;
  }
  readCentroid() {
    if (this._cache.centroid === void 0) {
      let e2;
      return e2 = this._computeCentroid(), e2 || (e2 = this._readServerCentroid()), this._cache.centroid = e2 != null ? e2 : void 0, e2 != null ? e2 : null;
    }
    return this._cache.centroid;
  }
  copy() {
    const e2 = this._reader.clone(), t2 = new G$1(this.instance, e2, this._header, this.fullSchema());
    return this.copyInto(t2), t2;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this._size && !this._getExists(); )
      ;
    return this._featureIndex < this._size;
  }
  _readAttribute(e2, t2) {
    const r2 = this._header.hasField(e2) ? e2 : p$2(e2), s2 = this._header.getFieldIndex(r2);
    if (s2 == null)
      return;
    const i2 = this._readAttributeAtIndex(s2);
    if (!t2)
      return i2;
    if (i2 == null)
      return i2;
    return this._header.isDateField(r2) ? new Date(i2) : i2;
  }
  _readAttributes() {
    const e2 = {};
    return this._header.fields.forEach(({ fieldName: t2, index: r2 }) => {
      e2[t2] = this._readAttributeAtIndex(r2);
    }), e2;
  }
  copyInto(e2) {
    super.copyInto(e2), e2._featureIndex = this._featureIndex, e2._featureOffset = this._featureOffset, e2._hasNext = this._hasNext;
  }
  _readAttributeAtIndex(e2) {
    const t2 = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e2], r2 = this._reader;
    return r2.move(t2), S$1(r2);
  }
  _readServerCentroid() {
    const e2 = this._header.centroid[2 * this._featureIndex] + this._tx, t2 = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
    return e2 === l$4 ? null : new t$2([], [e2, t2]);
  }
  _parseGeometry(e2) {
    const t2 = 2, r2 = 3, s2 = e2.asUnsafe(), i2 = s2.getLength(), n2 = s2.pos() + i2, a2 = [], h2 = [];
    for (; s2.pos() < n2 && s2.next(); )
      switch (s2.tag()) {
        case t2: {
          const e3 = s2.getUInt32(), t3 = s2.pos() + e3;
          for (; s2.pos() < t3; )
            h2.push(s2.getUInt32());
          break;
        }
        case r2: {
          const e3 = s2.getUInt32(), t3 = s2.pos() + e3;
          for (a2.push(s2.getSInt32() + this._tx), a2.push(s2.getSInt32() + this._ty), this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32(); s2.pos() < t3; )
            a2.push(s2.getSInt32()), a2.push(s2.getSInt32()), this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32();
          break;
        }
        default:
          s2.skip();
      }
    return new t$2(h2, a2);
  }
  _parseGeometryForDisplay(e2) {
    const t2 = 2, r2 = 3, s2 = e2.asUnsafe(), n2 = s2.getLength(), a2 = s2.pos() + n2, h2 = [], o2 = [];
    let u2 = 0, c2 = 0, l2 = null, _2 = 0;
    const f2 = this.geometryType === "esriGeometryPolygon";
    for (; s2.pos() < a2 && s2.next(); )
      switch (s2.tag()) {
        case t2: {
          const e3 = s2.getUInt32(), t3 = s2.pos() + e3;
          for (; s2.pos() < t3; ) {
            const e4 = s2.getUInt32();
            h2.push(e4), u2 += e4;
          }
          l2 = I(2 * u2).delta;
          break;
        }
        case r2: {
          s2.getUInt32();
          const e3 = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
          c$3(l2);
          for (const t3 of h2)
            if (c2 + e3 * t3 > l2.length)
              for (let e4 = 0; e4 < t3; e4++)
                s2.getSInt32(), s2.getSInt32(), this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32();
            else if (f2 && g$1) {
              const e4 = this.getAreaSimplificationThreshold(t3, this._header.vertexCount);
              let r3 = 2, i2 = 1;
              const n3 = false;
              let a3 = s2.getSInt32(), h3 = s2.getSInt32();
              l2[c2++] = a3, l2[c2++] = h3, this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32();
              let d2 = s2.getSInt32(), u3 = s2.getSInt32();
              for (this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32(); r3 < t3; ) {
                let t4 = s2.getSInt32(), n4 = s2.getSInt32();
                this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32();
                const o3 = a3 + d2, g2 = h3 + u3;
                F$3(a3, h3, o3, g2, o3 + t4, g2 + n4) >= e4 ? (_2 += -0.5 * (o3 - a3) * (g2 + h3), i2 > 1 && v$2(l2[c2 - 2], l2[c2 - 1], d2, u3) ? (l2[c2 - 2] += d2, l2[c2 - 1] += u3) : (l2[c2++] = d2, l2[c2++] = u3, i2++), a3 = o3, h3 = g2) : (t4 += d2, n4 += u3), d2 = t4, u3 = n4, r3++;
              }
              i2 < 3 || n3 ? c2 -= 2 * i2 : (_2 += -0.5 * (a3 + d2 - a3) * (h3 + u3 + h3), v$2(l2[c2 - 2], l2[c2 - 1], d2, u3) ? (l2[c2 - 2] += d2, l2[c2 - 1] += u3, o2.push(i2)) : (l2[c2++] = d2, l2[c2++] = u3, o2.push(++i2)));
            } else {
              let e4 = 0, r3 = s2.getSInt32(), i2 = s2.getSInt32();
              this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32(), l2[c2++] = r3, l2[c2++] = i2, e4 += 1;
              for (let n3 = 1; n3 < t3; n3++) {
                const t4 = s2.getSInt32(), a3 = s2.getSInt32(), h3 = r3 + t4, o3 = i2 + a3;
                _2 += -0.5 * (h3 - r3) * (o3 + i2), this.hasZ && s2.getSInt32(), this.hasM && s2.getSInt32(), n3 > 2 && v$2(l2[c2 - 2], l2[c2 - 1], t4, a3) ? (l2[c2 - 2] += t4, l2[c2 - 1] += a3) : (l2[c2++] = t4, l2[c2++] = a3, e4 += 1), r3 = h3, i2 = o3;
              }
              o2.push(e4);
            }
          break;
        }
        default:
          s2.skip();
      }
    if (this._cache.area = _2, !o2.length)
      return null;
    if (this._tx || this._ty) {
      let e3 = 0;
      c$3(l2);
      for (const t3 of o2)
        l2[2 * e3] += this._tx, l2[2 * e3 + 1] += this._ty, e3 += t3;
    }
    return new t$2(o2, l2);
  }
}
class p$1 {
  constructor(e2) {
    this.service = e2;
  }
  destroy() {
  }
}
function f$1(e2) {
  return Array.isArray(e2.source);
}
function l$3(e2) {
  return (e2 == null ? void 0 : e2.type) === "ogc-source";
}
function y$1(e2) {
  const { capabilities: t2 } = e2;
  return l$3(e2.source) ? new q$1(e2) : f$1(e2) ? new d$4(e2) : t2.query.supportsFormatPBF && has("featurelayer-pbf") ? new v$1(e2) : new F$2(e2);
}
async function h$2(e2) {
  const t2 = new h$3();
  return await t2.open(e2, {}), t2;
}
class d$4 extends p$1 {
  constructor(e2) {
    super(e2), this._portsOpen = h$2(e2.source).then((e3) => this.client = e3);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  async executeQuery(e2, t2) {
    await this._portsOpen;
    const r2 = await this.client.invoke("queryFeatures", e2.toJSON(), t2);
    return c$4.fromFeatureSet(r2, this.service);
  }
}
class v$1 extends p$1 {
  async executeQuery(e2, t2) {
    const { data: r2 } = await d$5(this.service.source, e2, t2), s2 = !e2.quantizationParameters;
    return G$1.fromBuffer(r2, this.service, s2);
  }
}
class F$2 extends p$1 {
  async executeQuery(r2, o2) {
    var _a;
    const { source: n2, capabilities: m2, spatialReference: p2, objectIdField: f2, geometryType: l2 } = this.service;
    if (r$1(r2.quantizationParameters) && !m2.query.supportsQuantization) {
      const e$12 = r2.clone(), m3 = s$4(e(e$12.quantizationParameters));
      e$12.quantizationParameters = null;
      const { data: l3 } = await c$5(n2, e$12, p2, o2), y3 = lt(l3, f2);
      return ft(m3, y3), c$4.fromOptimizedFeatureSet(y3, this.service);
    }
    const { data: y2 } = await c$5(n2, r2, this.service.spatialReference, o2);
    return l2 === "esriGeometryPoint" && (y2.features = (_a = y2.features) == null ? void 0 : _a.filter((t2) => {
      if (r$1(t2.geometry)) {
        const e2 = t2.geometry;
        return Number.isFinite(e2.x) && Number.isFinite(e2.y);
      }
      return true;
    })), c$4.fromFeatureSet(y2, this.service);
  }
}
class q$1 extends p$1 {
  async executeQuery(e$12, r2) {
    const { capabilities: i2 } = this.service;
    if (e$12.quantizationParameters && !i2.query.supportsQuantization) {
      const i3 = e$12.clone(), n3 = s$4(e(i3.quantizationParameters));
      i3.quantizationParameters = null;
      const c2 = await q$3(this.service.source, e$12, r2);
      return ft(n3, c2), c$4.fromOptimizedFeatureSet(c2, this.service);
    }
    const n2 = await q$3(this.service.source, e$12, r2);
    return c$4.fromOptimizedFeatureSet(n2, this.service);
  }
}
class t {
  constructor() {
    this.version = 0, this.source = false, this.targets = { feature: false, aggregate: false }, this.storage = { filters: false, data: false }, this.mesh = false, this.queryFilter = false, this.why = { mesh: [], source: [] };
  }
  static create(e2) {
    const s2 = new t();
    for (const t2 in e2) {
      const r2 = e2[t2];
      if (typeof r2 == "object")
        for (const e3 in r2) {
          const a2 = r2[e3];
          s2[t2][e3] = a2;
        }
      s2[t2] = r2;
    }
    return s2;
  }
  static empty() {
    return t.create({});
  }
  static all() {
    return t.create({ source: true, targets: { feature: true, aggregate: true }, storage: { filters: true, data: true }, mesh: true });
  }
  unset(t2) {
    this.version = t2.version, t2.source && (this.source = false), t2.targets.feature && (this.targets.feature = false), t2.targets.aggregate && (this.targets.aggregate = false), t2.storage.filters && (this.storage.filters = false), t2.storage.data && (this.storage.data = false), t2.mesh && (this.mesh = false), t2.queryFilter && (this.queryFilter = false);
  }
  any() {
    return this.source || this.mesh || this.storage.filters || this.storage.data || this.targets.feature || this.targets.aggregate || this.queryFilter;
  }
  describe() {
    let t2 = 0, e2 = "";
    if (this.mesh) {
      t2 += 20, e2 += "-> (20) Mesh needs update\n";
      for (const t3 of this.why.mesh)
        e2 += `    + ${t3}
`;
    }
    if (this.source) {
      t2 += 10, e2 += "-> (10) The source needs update\n";
      for (const t3 of this.why.source)
        e2 += `    + ${t3}
`;
    }
    this.targets.feature && (t2 += 5, e2 += "-> (5) Feature target parameters changed\n"), this.storage.filters && (t2 += 5, e2 += "-> (5) Feature filter parameters changed\n"), this.targets.aggregate && (t2 += 4, e2 += "-> (4) Aggregate target parameters changed\n"), this.storage.data && (t2 += 1, e2 += "-> (1) Texture storage parameters changed");
    const s2 = t2 < 5 ? "Fastest" : t2 < 10 ? "Fast" : t2 < 15 ? "Moderate" : t2 < 20 ? "Slow" : "Very Slow";
    console.debug(`Applying ${s2} update of cost ${t2}/45 `), console.debug(e2);
  }
  toJSON() {
    return { queryFilter: this.queryFilter, source: this.source, targets: this.targets, storage: this.storage, mesh: this.mesh };
  }
}
class a$3 {
  constructor(s2, t2) {
    this.requests = { done: new Array(), stream: new s$5(10) }, this._edits = null, this._abortController = new AbortController(), this._version = 0, this._done = false, this.didSend = false, this.tile = s2, this._version = t2;
  }
  get signal() {
    return this._abortController.signal;
  }
  get options() {
    return { signal: this._abortController.signal };
  }
  get empty() {
    return !this.requests.done.length;
  }
  get edits() {
    return this._edits;
  }
  get done() {
    return this._done;
  }
  end() {
    this._done = true;
  }
  clear() {
    this.requests.done = [];
  }
  applyUpdate(e2) {
    this.requests.done.forEach((s2) => s2.message.status.unset(e2)), this._version = e2.version, r$1(this._edits) && this._edits.status.unset(e2);
  }
  add(e2) {
    var _a;
    e2.message.status = (_a = e2.message.status) != null ? _a : t.empty(), e2.message.status.version = this._version, has("esri-2d-update-debug") && console.debug(this.tile.id, "DataTileSubscription:add", this._version), e2.message.end && this.requests.done.forEach((e3) => {
      r$1(e3.message) && e3.message.end && (e3.message.end = false);
    }), this.requests.done.push(e2);
  }
  edit(e$12, s2) {
    const a2 = e$12.getQuantizationTransform(), o2 = e$12.fullSchema(), n2 = Array.from(e$12.features()), h2 = [...s2, ...n2.map((e2) => e2.objectId)];
    if (this.removeIds(h2), this._invalidate(), t$1(this._edits))
      return void (this._edits = { type: "append", addOrUpdate: c$4.fromOptimizedFeatures(n2, o2, e(a2)), id: this.tile.id, status: t.empty(), end: true });
    this.requests.done.forEach((e2) => e2.message.end = false);
    e(this._edits.addOrUpdate).append(e$12.features());
  }
  *readers() {
    for (const { message: e2 } of this.requests.done)
      r$1(e2.addOrUpdate) && (yield e2.addOrUpdate);
    r$1(this._edits) && r$1(this._edits.addOrUpdate) && (yield this._edits.addOrUpdate);
  }
  _invalidate() {
    for (const e2 of this.requests.done)
      e2.message.status = t.empty();
    r$1(this._edits) && (this._edits.status = t.empty());
  }
  removeIds(e2) {
    this._invalidate();
    for (const { message: t2 } of this.requests.done) {
      const r2 = t2.addOrUpdate;
      r$1(r2) && (r2.removeIds(e2), r2.isEmpty && (t2.addOrUpdate = null));
    }
    r$1(this._edits) && r$1(this._edits.addOrUpdate) && this._edits.addOrUpdate.removeIds(e2), this.requests.done = this.requests.done.filter((e3) => e3.message.addOrUpdate || e3.message.end);
  }
  abort() {
    this._abortController.abort();
  }
}
function l$2(e2, s2) {
  const t2 = new Set();
  return e2 && e2.forEach((e3) => t2.add(e3)), s2 && s2.forEach((e3) => t2.add(e3)), t2.has("*") ? ["*"] : Array.from(t2);
}
class m$1 {
  constructor(e2) {
    this.events = new n$3(), this._resolver = D$2(), this._didEdit = false, this._subscriptions = new Map(), this._outSR = e2.outSR, this._serviceInfo = e2.serviceInfo, this._onTileUpdateMessage = e2.onMessage;
  }
  destroy() {
  }
  async _onMessage(e2) {
    var _a, _b;
    const s2 = this._subscriptions.get(e2.id);
    if (!s2)
      return;
    const t$12 = __spreadProps(__spreadValues({}, e2), { remove: (_a = e2.remove) != null ? _a : [], status: (_b = e2.status) != null ? _b : t.empty() });
    return g$2(this._onTileUpdateMessage(t$12, s2.options));
  }
  update(s2, t2) {
    var _a;
    const r2 = t2.fields.length;
    t2.outFields = l$2((_a = this._schema) == null ? void 0 : _a.outFields, t2.outFields), t2.outFields = t2.outFields.length >= 0.75 * r2 ? ["*"] : t2.outFields, t2.outFields.sort();
    const i2 = m$3(this._schema, t2);
    if (!i2)
      return;
    has("esri-2d-update-debug") && console.debug("Applying Update - Source:", i2);
    const o2 = "orderByFields" in this._serviceInfo && this._serviceInfo.orderByFields ? this._serviceInfo.orderByFields : this._serviceInfo.objectIdField + " ASC", n2 = { returnCentroid: this._serviceInfo.geometryType === "esriGeometryPolygon", returnGeometry: true, timeReferenceUnknownClient: this._serviceInfo.type !== "stream" && this._serviceInfo.timeReferenceUnknownClient, outFields: t2.outFields, outSpatialReference: this._outSR, orderByFields: [o2], where: t2.definitionExpression || "1=1", gdbVersion: t2.gdbVersion, historicMoment: t2.historicMoment, timeExtent: T$3.fromJSON(t2.timeExtent) }, a2 = this._schema && a$5(i2, "outFields");
    this._schema && y$3(i2, ["timeExtent", "definitionExpression", "gdbVersion", "historicMoment", "customParameters"]) && (s2.why.mesh.push("Layer filter and/or custom parameters changed"), s2.why.source.push("Layer filter and/or custom parameters changed"), s2.mesh = true, s2.source = true, s2.queryFilter = true), a2 && (s2.why.source.push("Layer required fields changed"), s2.source = true), m$3(n2, this._queryInfo) && (this._queryInfo = n2), this._schema = t2, this._resolver.resolve();
  }
  whenInitialized() {
    return this._resolver.promise;
  }
  async applyUpdate(e2) {
    if (e2.queryFilter || e2.source && this._didEdit)
      return this.refresh(e2.version), void (this._didEdit = false);
    this._subscriptions.forEach((s2) => s2.applyUpdate(e2)), await this.resend();
  }
  refresh(e2, s2) {
    for (const t2 of this._tiles())
      this.unsubscribe(t2), this.subscribe(t2, e2);
  }
  subscribe(e2, s2) {
    const t2 = new a$3(e2, s2);
    this._subscriptions.set(e2.id, t2);
  }
  unsubscribe(e2) {
    const s2 = this.get(e2.id);
    r$1(s2) && s2.abort(), this._subscriptions.delete(e2.id);
  }
  createQuery(e2 = {}) {
    const s2 = this._queryInfo.historicMoment ? new Date(this._queryInfo.historicMoment) : null;
    return new x$2(__spreadValues(__spreadProps(__spreadValues({}, this._queryInfo), { historicMoment: s2 }), e2));
  }
  get(e2) {
    return this._subscriptions.has(e2) ? this._subscriptions.get(e2) : null;
  }
  async queryLastEditDate() {
    throw new Error("Service does not support query type");
  }
  async query(e2) {
    throw new Error("Service does not support query");
  }
  *_tiles() {
    const e2 = Array.from(this._subscriptions.values());
    for (const s2 of e2)
      yield s2.tile;
  }
  async edit(e2, s2) {
    const t2 = Array.from(this._subscriptions.values()), r2 = t2.map(({ tile: e3 }) => e3);
    for (const i2 of t2)
      i2.removeIds(s2);
    if (e2.length) {
      const t3 = r2.map((s3) => {
        const t4 = this.createTileQuery(s3);
        return t4.objectIds = e2, { tile: s3, query: t4 };
      }).map(async ({ tile: e3, query: s3 }) => ({ tile: e3, result: await this.query(s3), query: s3 })), i2 = (await L$1(t3)).map(async ({ tile: t4, result: r3 }) => {
        if (!r3.hasFeatures && !s2.length && !e2.length)
          return;
        const i3 = this._subscriptions.get(t4.key.id);
        i3 && i3.edit(r3, e2);
      });
      await E(i2);
    }
    this._didEdit = true;
  }
}
const p = 4;
class d$3 extends m$1 {
  constructor(e2) {
    super(e2), this.type = "feature", this.mode = "on-demand", this._adapter = y$1(e2.serviceInfo), this._queue = new l$5({ concurrency: 8, process: async (e3) => {
      if (f$3(e3), r$1(e3.tile)) {
        const t2 = e3.tile.key.id, { signal: r2 } = e3, s2 = has("esri-tiles-debug") ? { tile: t2.replace(/\//g, "."), depth: e3.depth } : void 0, i2 = await this._adapter.executeQuery(e3.query, { signal: r2, query: __spreadValues(__spreadValues({}, s2), this._schema.customParameters) });
        return i2.level = e3.tile.key.level, i2;
      }
      return this._adapter.executeQuery(e3.query, __spreadProps(__spreadValues({}, e3), { query: this._schema.customParameters }));
    } }), this._patchQueue = new l$5({ concurrency: 8, process: async (e3) => {
      if (f$3(e3), r$1(e3.tile)) {
        const t2 = e3.tile.key.id, { signal: r2 } = e3, s2 = has("esri-tiles-debug") ? { tile: t2.replace(/\//g, "."), depth: e3.depth } : void 0, i2 = await this._adapter.executeQuery(e3.query, { signal: r2, query: __spreadValues(__spreadValues({}, s2), this._schema.customParameters) });
        return i2.level = e3.tile.key.level, i2;
      }
      return this._adapter.executeQuery(e3.query, __spreadProps(__spreadValues({}, e3), { query: this._schema.customParameters }));
    } });
  }
  destroy() {
    super.destroy(), this._adapter.destroy(), this._queue.destroy(), this._patchQueue.destroy();
  }
  get updating() {
    return !!this._queue.length || Array.from(this._subscriptions.values()).some((e2) => !e2.done);
  }
  get maxRecordCountFactor() {
    const { query: e2 } = this._serviceInfo.capabilities;
    return e2.supportsMaxRecordCountFactor ? p : null;
  }
  get maxPageSize() {
    var _a;
    const { query: e2 } = this._serviceInfo.capabilities;
    return ((_a = e2.maxRecordCount) != null ? _a : 8e3) * i$2(this.maxRecordCountFactor, 1);
  }
  get pageSize() {
    return Math.min(8e3, this.maxPageSize);
  }
  enableEvent(e2, t2) {
  }
  subscribe(e2, s2) {
    super.subscribe(e2, s2);
    const i2 = this._subscriptions.get(e2.id);
    this._fetchDataTile(e2).catch((s3) => {
      j$1(s3) || s$3.getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource").error(new s$1("mapview-query-error", "Encountered error when fetching tile", { tile: e2, error: s3 }));
    }).then(() => i2.end());
  }
  unsubscribe(e2) {
    super.unsubscribe(e2);
  }
  readers(e2) {
    return this._subscriptions.get(e2).readers();
  }
  async query(e2) {
    return this._adapter.executeQuery(e2, { query: this._schema.customParameters });
  }
  async queryLastEditDate() {
    const t2 = this._serviceInfo.source, r2 = __spreadProps(__spreadValues({}, t2.query), { f: "json" });
    return (await U$1(t2.path, { query: r2, responseType: "json" })).data.editingInfo.lastEditDate;
  }
  createTileQuery(e2, t2 = {}) {
    var _a;
    const r2 = this._serviceInfo.geometryType, s2 = this.createQuery(t2);
    s2.quantizationParameters = (_a = t2.quantizationParameters) != null ? _a : e2.getQuantizationParameters(), s2.resultType = "tile", s2.geometry = e2.extent, this._serviceInfo.capabilities.query.supportsQuantization ? r2 === "esriGeometryPolyline" && (s2.maxAllowableOffset = e2.resolution * has("feature-polyline-generalization-factor")) : r2 !== "esriGeometryPolyline" && r2 !== "esriGeometryPolygon" || (s2.maxAllowableOffset = e2.resolution, r2 === "esriGeometryPolyline" && (s2.maxAllowableOffset *= has("feature-polyline-generalization-factor")));
    const i2 = this._serviceInfo.capabilities.query;
    return s2.defaultSpatialReferenceEnabled = i2.supportsDefaultSpatialReference, s2.compactGeometryEnabled = i2.supportsCompactGeometry, s2;
  }
  async _executePatchQuery(e2, t2, r2, i2) {
    const a2 = t2.clone();
    a2.outFields = [this._serviceInfo.objectIdField, ...r2], a2.returnCentroid = false, a2.returnGeometry = false;
    const o2 = r$1(a2.start) ? a2.start / 8e3 : 0, n2 = i2.signal;
    return this._patchQueue.push({ tile: e2, query: a2, signal: n2, depth: o2 });
  }
  async _resend(e2, t2) {
    const { query: r2, message: i2 } = e2, n2 = r$1(r2.outFields) ? r2.outFields : [], u2 = this._queryInfo.outFields, c2 = u2.filter((e3) => !n2.includes(e3));
    if (t$1(i2.addOrUpdate))
      this._onMessage(__spreadProps(__spreadValues({}, i2), { type: "append" }));
    else if (c2.length)
      try {
        const e3 = this._subscriptions.get(i2.id).tile, s2 = await this._executePatchQuery(e3, r2, c2, t2);
        f$3(t2), r2.outFields = u2, i2.addOrUpdate.joinAttributes(s2), this._onMessage(__spreadProps(__spreadValues({}, i2), { end: i2.end, type: "append" }));
      } catch (l2) {
      }
    else
      this._onMessage(__spreadProps(__spreadValues({}, i2), { type: "append" }));
  }
  async _resendSubscription(e2) {
    if (has("esri-2d-update-debug") && console.debug(e2.tile.id, "Resend Subscription"), e2.empty)
      return this._onMessage({ id: e2.tile.id, addOrUpdate: null, end: false, type: "append" });
    const t2 = e2.signal;
    for (const r2 of e2.requests.done)
      await this._resend(r2, { signal: t2 });
    return r$1(e2.edits) ? this._onMessage(e2.edits) : void 0;
  }
  async resend() {
    const e2 = Array.from(this._subscriptions.values());
    await Promise.all(e2.map((e3) => this._resendSubscription(e3)));
  }
}
const s = has("esri-mobile"), i = { maxDrillLevel: s ? 1 : 4, maxRecordCountFactor: s ? 1 : 3 };
class a$2 extends d$3 {
  constructor(e2) {
    super(e2);
  }
  async _fetchDataTile(r2) {
    const s2 = this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor, a2 = this._subscriptions.get(r2.key.id), o2 = a2.signal, n2 = r2.getQuantizationParameters();
    let c2 = 0;
    const d2 = async (u2, l2) => {
      const p2 = this._queryInfo, m2 = this.createTileQuery(u2, { maxRecordCountFactor: s2 ? i.maxRecordCountFactor : void 0, returnExceededLimitFeatures: false, quantizationParameters: n2 });
      c2++;
      try {
        const t2 = await this._queue.push({ tile: r2, query: m2, signal: o2, depth: l2 });
        if (c2--, f$3(o2), !t2)
          return;
        if (p2 !== this._queryInfo)
          return void d2(u2, l2);
        if (t2.exceededTransferLimit && l2 < i.maxDrillLevel) {
          for (const e2 of u2.createChildTiles())
            d2(e2, l2 + 1);
          return;
        }
        const s3 = { id: r2.id, addOrUpdate: t2, end: c2 === 0, type: "append" };
        a2.add({ query: m2, message: s3 }), this._onMessage(s3);
      } catch (h2) {
        j$1(h2) || this._onMessage({ id: r2.id, addOrUpdate: null, end: true, type: "append" });
      }
    };
    d2(r2, 0);
  }
}
const o = "__esri_stream_id__", d$2 = "__esri_timestamp__", a$1 = 1e3;
class h$1 {
  constructor(t2, e2, s2, i2, r2 = 128) {
    this._trackIdToObservations = new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = s2, this._purgeOptions = i2, this.store = t2, this.objectIdField = e2, this.purgeInterval = r2, this._useGeneratedIds = this.objectIdField === o;
  }
  add(r2) {
    if (this._useGeneratedIds) {
      const t2 = this._nextId();
      r2.attributes[this.objectIdField] = t2, r2.objectId = t2;
    } else
      r2.objectId = r2.attributes[this.objectIdField];
    if (this._addOrUpdated.set(r2.objectId, r2), this._maxAge = Math.max(this._maxAge, r2.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField)
      return t$1(this._trackIdLessObservations) && (this._trackIdLessObservations = new s$5(1e5)), void this._trackIdLessObservations.enqueue(r2.objectId);
    const o2 = r2.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(o2)) {
      const s2 = r$1(this._purgeOptions) && this._purgeOptions.maxObservations != null ? this._purgeOptions.maxObservations : a$1, r3 = a$6(s2, 0, a$1);
      this._trackIdToObservations.set(o2, new s$5(r3));
    }
    const d2 = this._trackIdToObservations.get(o2).enqueue(r2.objectId);
    r$1(d2) && (this._addOrUpdated.has(d2) ? this._addOrUpdated.delete(d2) : this._removed.push(d2));
  }
  checkForUpdates() {
    const t2 = this._getToAdd(), e2 = this._getToRemove(), s2 = performance.now();
    s2 - this._lastPurge >= this.purgeInterval && (this._purge(s2), this._lastPurge = s2);
    const r2 = [];
    if (r$1(e2))
      for (const o2 of e2) {
        const t3 = this.store.removeById(o2);
        r$1(t3) && r2.push(t3);
      }
    if (r$1(t2))
      for (const i2 of t2)
        i2.attributes[d$2] = s2, this.store.add(i2);
    (t2 || (r2 == null ? void 0 : r2.length)) && this.store.update(t2, r2);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size)
      return null;
    const t2 = new Array(this._addOrUpdated.size);
    let e2 = 0;
    return this._addOrUpdated.forEach((s2) => t2[e2++] = s2), this._addOrUpdated.clear(), t2;
  }
  _getToRemove() {
    const t2 = this._removed;
    return this._removed.length ? (this._removed = [], t2) : null;
  }
  _nextId() {
    const t2 = this._idCounter;
    return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, t2;
  }
  _purge(t2) {
    const e2 = this._purgeOptions;
    r$1(e2) && (this._purgeSomeByDisplayCount(e2), this._purgeByAge(e2), this._purgeByAgeReceived(t2, e2), this._purgeTracks());
  }
  _purgeSomeByDisplayCount(t2) {
    if (!t2.displayCount)
      return;
    let e$12 = this.store.size;
    if (e$12 > t2.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const s2 of this._trackIdToObservations.values())
          if (e$12 > t2.displayCount && s2.size) {
            const t3 = e(s2.dequeue());
            this._removed.push(t3), e$12--;
          }
      }
      if (r$1(this._trackIdLessObservations)) {
        let s2 = e$12 - t2.displayCount;
        for (; s2-- > 0; ) {
          const t3 = this._trackIdLessObservations.dequeue();
          r$1(t3) && this._removed.push(t3);
        }
      }
    }
  }
  _purgeByAge(t2) {
    var _a;
    if (!t2.age || !((_a = this._timeInfo) == null ? void 0 : _a.startTimeField))
      return;
    const e2 = 60 * t2.age * 1e3, s2 = this._maxAge - e2;
    this.store.forEach((t3) => {
      t3.attributes[this._timeInfo.startTimeField] < s2 && this._removed.push(t3.objectId);
    });
  }
  _purgeByAgeReceived(t2, e2) {
    if (!e2.ageReceived)
      return;
    const s2 = t2 - 60 * e2.ageReceived * 1e3;
    this.store.forEach((t3) => {
      t3.attributes[d$2] < s2 && this._removed.push(t3.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((t2, e2) => {
      t2.size === 0 && this._trackIdToObservations.delete(e2);
    });
  }
}
const l$1 = 2500;
function m(t2, s2) {
  const r2 = t2.weakClone();
  if (r$1(t2.geometry)) {
    const e2 = w$1(s2, t2.geometry.coords[0]), i2 = M(s2, t2.geometry.coords[1]);
    r2.geometry = new t$2([], [e2, i2]);
  }
  return r2;
}
function _(e2) {
  return e2 === "esriGeometryPoint" ? m : (t2, s2) => {
    const r2 = t2.weakClone(), n2 = new t$2(), o2 = false, d2 = false, c2 = at(n2, t2.geometry, o2, d2, e2, s2, false, false);
    return r2.geometry = c2, r2;
  };
}
function f(t2) {
  return t2 === "esriGeometryPoint" ? (t3) => r$1(t3.geometry) ? { minX: t3.geometry.coords[0], minY: t3.geometry.coords[1], maxX: t3.geometry.coords[0], maxY: t3.geometry.coords[1] } : { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 } : (t3) => {
    let s2 = 1 / 0, r2 = 1 / 0, i2 = -1 / 0, n2 = -1 / 0;
    return r$1(t3.geometry) && t3.geometry.forEachVertex((e2, t4) => {
      s2 = Math.min(s2, e2), r2 = Math.min(r2, t4), i2 = Math.max(i2, e2), n2 = Math.max(n2, t4);
    }), { minX: s2, minY: r2, maxX: i2, maxY: n2 };
  };
}
function v(e2, t2) {
  const r2 = i$3(9, f(t2));
  return r2.load(e2), r2;
}
function g(e2, t2) {
  return e2.search({ minX: t2.bounds[0], minY: t2.bounds[1], maxX: t2.bounds[2], maxY: t2.bounds[3] });
}
class y {
  constructor(e2, t2) {
    this.onUpdate = e2, this._geometryType = t2, this._objectIdToFeature = new Map();
  }
  get _features() {
    const e2 = [];
    return this._objectIdToFeature.forEach((t2) => e2.push(t2)), e2;
  }
  add(e2) {
    this._objectIdToFeature.set(e2.objectId, e2), this._index = null;
  }
  get(e2) {
    return this._objectIdToFeature.has(e2) ? this._objectIdToFeature.get(e2) : null;
  }
  forEach(e2) {
    this._objectIdToFeature.forEach(e2);
  }
  search(e2) {
    return this._index || (this._index = v(this._features, this._geometryType)), g(this._index, e2);
  }
  removeById(e2) {
    const t2 = this._objectIdToFeature.get(e2);
    return t2 ? (this._objectIdToFeature.delete(e2), this._index = null, t2) : null;
  }
  update(e2, t2) {
    this.onUpdate(e2, t2);
  }
  get size() {
    return this._objectIdToFeature.size;
  }
}
class b$1 extends m$1 {
  constructor(e2) {
    super(e2), this.type = "geoevent", this._dataReceiveEventEnabled = false, this._level = 0, this._updateInfo = { websocket: 0, client: 0 }, this._inUpdate = false;
    const { outSR: s2 } = e2, { geometryType: r2, objectIdField: i2, timeInfo: n2, purgeOptions: o2, source: a2, spatialReference: h2, serviceFilter: u2, maxReconnectionAttempts: p2, maxReconnectionInterval: m2, updateInterval: f2, enableDataReceived: v2, customParameters: g2 } = e2.serviceInfo, b2 = new y(this._onUpdate.bind(this), r2), I2 = new h$1(b2, i2, n2, o2), U2 = t$3(a2, h2, s2, r2, u2, p2, m2, g2);
    this._store = b2, this._manager = I2, this._connection = U2, this._quantize = _(r2), this._dataReceiveEventEnabled = v2, this._handles = [this._connection.on("data-received", (e3) => this._onFeature(e3)), l$6(() => U2.connectionStatus, (e3) => this.events.emit("connectionStatus", e3)), l$6(() => U2.errorString, (e3) => this.events.emit("errorString", e3))], this._initUpdateInterval = () => {
      let t2 = performance.now();
      this._updateIntervalId = setInterval(() => {
        const s3 = performance.now(), r3 = s3 - t2;
        if (r3 > l$1) {
          t2 = s3;
          const e3 = Math.round(this._updateInfo.client / (r3 / 1e3)), i3 = Math.round(this._updateInfo.websocket / (r3 / 1e3));
          this._updateInfo.client = 0, this._updateInfo.websocket = 0, this.events.emit("updateRate", { client: e3, websocket: i3 });
        }
        e2.canAcceptRequest() && !this._inUpdate && this._manager.checkForUpdates();
      }, f2);
    }, this._initUpdateInterval();
  }
  destroy() {
    super.destroy(), this._clearUpdateInterval(), this._handles.forEach((e2) => e2.remove()), this._connection.destroy();
  }
  _fetchDataTile() {
  }
  pauseStream() {
    this._clearUpdateInterval();
  }
  resumeStream() {
    this._initUpdateInterval();
  }
  enableEvent(e2, t2) {
    e2 === "data-received" && (this._dataReceiveEventEnabled = t2);
  }
  get updating() {
    return false;
  }
  subscribe(e2, t2) {
    super.subscribe(e2, t2);
    const s2 = this._subscriptions.get(e2.id);
    this._level = e2.level;
    const r2 = this._getTileFeatures(e2);
    this._onMessage({ type: "append", id: e2.key.id, addOrUpdate: r2, end: true }), s2.didSend = true;
  }
  unsubscribe(e2) {
    super.unsubscribe(e2);
  }
  *readers(t2) {
    const s2 = this._subscriptions.get(t2), { tile: r2 } = s2;
    yield this._getTileFeatures(r2);
    for (const i2 of s2.requests.stream.entries)
      r$1(i2) && r$1(i2.addOrUpdate) && (yield i2.addOrUpdate);
  }
  createTileQuery(e2) {
    throw new Error("Service does not support tile  queries");
  }
  async resend() {
    this._subscriptions.forEach((e2) => {
      const { tile: t2 } = e2, s2 = { type: "append", id: t2.id, addOrUpdate: this._getTileFeatures(t2), end: true };
      this._onMessage(s2);
    });
  }
  _getTileFeatures(e2) {
    const t2 = this._store.search(e2).map((t3) => this._quantize(t3, e2.transform));
    return c$4.fromOptimizedFeatures(t2, this._serviceInfo, e2.transform);
  }
  _onFeature(e2) {
    this._updateInfo.websocket++;
    try {
      this._dataReceiveEventEnabled && this.events.emit("data-received", e2);
      const t2 = X$1(e2, this._serviceInfo.geometryType, false, false, this._serviceInfo.objectIdField);
      this._manager.add(t2);
    } catch (t2) {
    }
  }
  _clearUpdateInterval() {
    clearInterval(this._updateIntervalId), this._updateIntervalId = 0;
  }
  async _onUpdate(t$12, s2) {
    this._inUpdate = true;
    try {
      r$1(t$12) && (this._updateInfo.client += t$12.length), this._subscriptions.forEach((e2, t2) => {
        e2.didSend && e2.tile.level === this._level && this._onMessage({ type: "append", id: t2, addOrUpdate: null, clear: true, end: false });
      });
      const s3 = [];
      this._subscriptions.forEach((e2, t$13) => {
        if (!e2.didSend || e2.tile.level !== this._level)
          return;
        const r2 = e2.tile, i2 = { type: "append", id: t$13, addOrUpdate: this._getTileFeatures(r2), remove: [], end: false, status: t.empty() };
        e2.requests.stream.enqueue(i2), s3.push(this._onMessage(i2));
      }), await Promise.all(s3), this._subscriptions.forEach((e2, t2) => {
        e2.didSend && e2.tile.level === this._level && this._onMessage({ type: "append", id: t2, addOrUpdate: null, end: true });
      });
    } catch {
    }
    this._inUpdate = false;
  }
}
class n extends d$3 {
  constructor(e2) {
    super(e2);
  }
  async _fetchDataTile(r2) {
    const i2 = 6, o2 = 20, n2 = this._subscriptions.get(r2.key.id);
    let d2 = false, c2 = 0, u2 = 0;
    const p2 = (e2, t2) => {
      u2--, f$3(n2);
      const a2 = r2.id, i3 = e2.reader, o3 = e2.query;
      if (!i3.exceededTransferLimit) {
        if (d2 = true, t2 !== 0 && !i3.hasFeatures) {
          const e4 = { id: a2, addOrUpdate: i3, end: u2 === 0, type: "append" };
          return n2.add({ message: e4, query: o3 }), void this._onMessage(e4);
        }
        const e3 = { id: a2, addOrUpdate: i3, end: u2 === 0, type: "append" };
        return n2.add({ message: e3, query: o3 }), void this._onMessage(e3);
      }
      const c3 = { id: a2, addOrUpdate: i3, end: d2 && u2 === 0, type: "append" };
      n2.add({ message: c3, query: o3 }), this._onMessage(c3);
    };
    let h2 = 0, m2 = 0;
    for (; !d2 && m2++ < o2; ) {
      let o3;
      for (let s2 = 0; s2 < h2 + 1; s2++) {
        const s3 = c2++;
        u2++, o3 = this._fetchDataTilePage(r2, s3, n2).then((e2) => e2 && p2(e2, s3)).catch((s4) => {
          d2 = true, j$1(s4) || (s$3.getLogger("esri.views.2d.layers.features.sources.PagedFeatureSource").error(new s$1("mapview-query-error", "Encountered error when fetching tile", { tile: r2, error: s4 })), this._onMessage({ id: r2.id, addOrUpdate: null, end: d2, type: "append" }));
        });
      }
      await o3, f$3(n2), h2 = Math.min(h2 + 2, i2);
    }
  }
  async _fetchDataTilePage(e2, t2, a2) {
    f$3(a2);
    const o2 = this._queryInfo, n2 = { start: this.pageSize * t2, num: this.pageSize, returnExceededLimitFeatures: true, quantizationParameters: e2.getQuantizationParameters() };
    r$1(this.maxRecordCountFactor) && (n2.maxRecordCountFactor = this.maxRecordCountFactor);
    const d2 = this.createTileQuery(e2, n2);
    try {
      const r2 = a2.signal, i2 = await this._queue.push({ tile: e2, query: d2, signal: r2, depth: t2 });
      return f$3(a2), i2 ? o2 !== this._queryInfo ? this._fetchDataTilePage(e2, t2, a2) : { reader: i2, query: d2 } : null;
    } catch (c2) {
      return b$3(c2), null;
    }
  }
}
function h(t2, e2, s2) {
  const r2 = t2.getXHydrated(), o2 = t2.getYHydrated(), a2 = e2.getColumnForX(r2), n2 = Math.floor(e2.normalizeCol(a2));
  return `${s2}/${Math.floor(e2.getRowForY(o2))}/${n2}`;
}
function l(t2, e2) {
  if (t$1(t2))
    return null;
  const s2 = e2.transform, o2 = t2.getQuantizationTransform();
  if (t$1(o2)) {
    const [e3, r2] = s2.scale, [o3, a3] = s2.translate, n3 = -o3 / e3, i3 = 1 / e3, d3 = a3 / r2, u3 = 1 / -r2;
    return t2.transform(n3, d3, i3, u3);
  }
  const [a2, n2] = o2.scale, [i2, d2] = o2.translate, [u2, h2] = s2.scale, [l2, c2] = s2.translate, g2 = a2 / u2, _2 = (i2 - l2) / u2, p2 = n2 / h2, f2 = (-d2 + c2) / h2;
  return t2.transform(_2, f2, g2, p2);
}
class c$1 extends d$3 {
  constructor(t2) {
    super(t2), this.mode = "snapshot", this._loading = true, this._controller = new AbortController(), this._downloadPromise = null, this._didSendEnd = false, this._queries = new Array(), this._invalidated = false, this._hasAggregates = false, this._random = new t$4(1e3), this._store = t2.store, this._markedIdsBufId = this._store.storage.createBitset();
  }
  destroy() {
    super.destroy(), this._controller.abort();
  }
  get loading() {
    return this._loading;
  }
  get _signal() {
    return this._controller.signal;
  }
  update(t2, s2) {
    super.update(t2, s2), this._featureCount == null && (this._featureCount = s2.initialFeatureCount), r$1(s2.changedFeatureCount) && (this._featureCount = s2.changedFeatureCount), this._hasAggregates = t2.targets.aggregate;
  }
  async resend(t2 = false) {
    if (await this._downloadPromise, this._invalidated || t2) {
      const t3 = f$4(this._featureCount, "Expected featureCount to be defined");
      return this._invalidated = false, this._subscriptions.forEach((t4) => t4.clear()), this._downloadPromise = this._download(t3), void await this._downloadPromise;
    }
    const e2 = this._queries.map(({ query: t3, reader: e3 }) => this._sendPatchQuery(t3, e3));
    await Promise.all(e2), this._subscriptions.forEach((t3) => {
      t3.requests.done.forEach((t4) => this._onMessage(t4.message));
    });
  }
  async refresh(t2, e2) {
    e2 && (this._featureCount = e2.featureCount), await this.resend(true);
  }
  async _sendPatchQuery(t2, s2) {
    const r2 = r$1(t2.outFields) ? t2.outFields : [], a2 = this._queryInfo.outFields, n2 = a2.filter((t3) => !r2.includes(t3));
    if (!n2.length)
      return;
    const i2 = t2.clone(), d2 = this._signal;
    i2.returnGeometry = false, i2.returnCentroid = false, i2.outFields = n2, t2.outFields = a2;
    const u2 = await this._queue.push({ query: i2, depth: 0, signal: d2 });
    f$3({ signal: d2 }), s2.joinAttributes(u2);
  }
  async _fetchDataTile(t$12) {
    if (!this._downloadPromise) {
      const t2 = f$4(this._featureCount, "Expected featureCount to be defined");
      this._downloadPromise = this._download(t2);
    }
    const e2 = this._store.search(t$12), r2 = this._subscriptions.get(t$12.key.id), o2 = e2.length - 1;
    for (let s2 = 0; s2 < o2; s2++) {
      const o3 = l(e2[s2], t$12), n3 = { type: "append", id: t$12.id, addOrUpdate: o3, end: false, status: t.empty() };
      r2.add({ query: null, message: n3 }), this._hasAggregates || await U$2(1), this._onMessage(n3);
    }
    const n2 = l(o2 >= 0 ? e2[o2] : null, t$12), i2 = this._didSendEnd, d2 = { type: "append", id: t$12.id, addOrUpdate: n2, end: i2, status: t.empty() };
    r2.add({ query: null, message: d2 }), this._onMessage(d2);
  }
  async _download(e2) {
    try {
      await this.whenInitialized();
      const t2 = this._store.storage.getBitset(this._markedIdsBufId), s2 = new Set();
      t2.clear();
      const r2 = Math.ceil(e2 / this.pageSize), o2 = Array.from({ length: r2 }, (t3, e3) => e3).sort((t3, e3) => this._random.getInt() - this._random.getInt()).map((e3) => this._downloadPage(e3, t2, s2));
      await Promise.all(o2), this._store.sweepFeatures(t2, this._store.storage), this._store.sweepFeatureSets(s2);
    } catch (s2) {
      s$3.getLogger("esri.views.2d.layers.features.sources.SnapshotFeatureSource").error("mapview-snapshot-source", "Encountered and error when downloading feature snapshot", s2);
    }
    this._sendEnd(), this._loading = false;
  }
  async _downloadPage(t2, s2, r2) {
    const a2 = this.pageSize, n2 = { start: t2 * a2, num: a2, cacheHint: true };
    r$1(this.maxRecordCountFactor) && (n2.maxRecordCountFactor = this.maxRecordCountFactor);
    const i2 = this.createQuery(n2), d2 = this._signal, u2 = await this._queue.push({ query: i2, depth: t2, signal: d2 });
    f$3({ signal: d2 }), this._queries.push({ query: i2, reader: u2 }), this._store.insert(u2), r2.add(u2.instance);
    const h2 = u2.getCursor();
    for (; h2.next(); )
      s2.set(h2.getDisplayId());
    this._send(u2);
  }
  _send(t$22) {
    if (!this._subscriptions.size)
      return;
    let s2 = null;
    const o2 = new Map(), a2 = new Set(), n2 = new Map();
    this._subscriptions.forEach((t2) => {
      var _a;
      const e2 = t2.tile;
      o2.set(e2.key.id, null), s2 = e2.tileInfoView, a2.add(e2.level);
      const { row: r2, col: i2 } = e2.key, d2 = `${e2.level}/${r2}/${i2}`, u2 = (_a = n2.get(d2)) != null ? _a : [];
      u2.push(t2), n2.set(d2, u2);
    });
    for (const e2 of a2) {
      const a3 = s2.getLODInfoAt(e2), i2 = t$22.getCursor();
      for (; i2.next(); ) {
        const t2 = h(i2, a3, e2), s3 = i2.getIndex();
        if (n2.has(t2))
          for (const e3 of n2.get(t2)) {
            const t3 = e3.tile.id;
            let a4 = o2.get(t3);
            t$1(a4) && (a4 = [], o2.set(t3, a4)), a4.push(s3);
          }
      }
    }
    o2.forEach((s3, r2) => {
      if (r$1(s3)) {
        const e2 = this._subscriptions.get(r2), o3 = { type: "append", id: r2, addOrUpdate: l(r$2.from(t$22, s3), e2.tile), end: false, status: t.empty() };
        e2.add({ query: null, message: o3 }), this._onMessage(o3);
      }
    });
  }
  _sendEnd() {
    this._subscriptions.forEach((t$12) => {
      const e2 = { type: "append", id: t$12.tile.id, addOrUpdate: null, end: true, status: t.empty() };
      t$12.add({ query: null, message: e2 }), this._onMessage(e2);
    }), this._didSendEnd = true;
  }
}
function a(e2, r2, a2, u2, i2, p2) {
  const f2 = c(e2, r2, a2, u2, i2, p2);
  switch (f2.type) {
    case "feature":
      switch (f2.origin) {
        case "hosted":
        case "local":
          return new n(f2);
        case "snapshot":
          return new c$1(f2);
        case "unknown":
          return new a$2(f2);
      }
    case "geoevent":
      return new b$1(f2);
  }
}
function c(t2, o2, n2, s2, a2, c2) {
  switch (t2.type) {
    case "snapshot":
      return { type: "feature", origin: "snapshot", featureCount: i$2(t2.featureCount, 0), serviceInfo: t2, onMessage: s2, outSR: o2, tileInfoView: n2, canAcceptRequest: a2, store: c2 };
    case "stream":
      return { type: "geoevent", serviceInfo: t2, onMessage: s2, outSR: o2, canAcceptRequest: a2 };
    case "memory":
    case "on-demand":
      return { type: "feature", serviceInfo: t2, onMessage: s2, outSR: o2, origin: u2(t2.source), tileInfoView: n2, canAcceptRequest: a2 };
  }
  function u2(e2) {
    return Array.isArray(e2) ? "local" : "path" in e2 && g$3(e2.path) ? "hosted" : "unknown";
  }
}
function X(t2, n2) {
  let o2 = -90, r2 = 90, e2 = -180, c2 = 180;
  for (let f2 = 0; f2 < n2; f2++) {
    const n3 = Math.ceil((f2 + 1) / 2), u2 = Math.floor((f2 + 1) / 2), l2 = 1 - f2 % 2, h2 = 30 - (3 * n3 + 2 * u2), s2 = 30 - (2 * n3 + 3 * u2), i2 = 3 * l2 + 2 * (1 - l2), a2 = 2 * l2 + 3 * (1 - l2), g2 = 3 * l2 + 7 * (1 - l2) << s2, M2 = (7 * l2 + 3 * (1 - l2) << h2 & t2.geohashX) >> h2, A2 = (g2 & t2.geohashY) >> s2;
    for (let t3 = i2 - 1; t3 >= 0; t3--) {
      const n4 = (e2 + c2) / 2, o3 = M2 & 1 << t3 ? 1 : 0;
      e2 = (1 - o3) * e2 + o3 * n4, c2 = (1 - o3) * n4 + o3 * c2;
    }
    for (let t3 = a2 - 1; t3 >= 0; t3--) {
      const n4 = (o2 + r2) / 2, e3 = A2 & 1 << t3 ? 1 : 0;
      o2 = (1 - e3) * o2 + e3 * n4, r2 = (1 - e3) * n4 + e3 * r2;
    }
  }
  return [e2, o2, c2, r2];
}
function Y(t2, n2, o2, r2) {
  r2 % 2 && (r2 += 1);
  let e2 = 0, c2 = 0, f2 = -90, u2 = 90, l2 = -180, h2 = 180;
  for (let s2 = 0; s2 < r2 / 2; s2++) {
    for (let t3 = 0; t3 < 5; t3++) {
      const n3 = (l2 + h2) / 2, r3 = o2 > n3 ? 1 : 0;
      e2 |= r3 << 29 - (t3 + 5 * s2), l2 = (1 - r3) * l2 + r3 * n3, h2 = (1 - r3) * n3 + r3 * h2;
    }
    for (let t3 = 0; t3 < 5; t3++) {
      const o3 = (f2 + u2) / 2, r3 = n2 > o3 ? 1 : 0;
      c2 |= r3 << 29 - (t3 + 5 * s2), f2 = (1 - r3) * f2 + r3 * o3, u2 = (1 - r3) * o3 + r3 * u2;
    }
  }
  t2.geohashX = e2, t2.geohashY = c2;
}
function b(t2, n2, o2, r2, e2) {
  e2 % 2 && (e2 += 1);
  let c2 = 0, f2 = 0, u2 = -90, l2 = 90, h2 = -180, s2 = 180;
  for (let i2 = 0; i2 < e2 / 2; i2++) {
    for (let t3 = 0; t3 < 5; t3++) {
      const n3 = (h2 + s2) / 2, o3 = r2 > n3 ? 1 : 0;
      c2 |= o3 << 29 - (t3 + 5 * i2), h2 = (1 - o3) * h2 + o3 * n3, s2 = (1 - o3) * n3 + o3 * s2;
    }
    for (let t3 = 0; t3 < 5; t3++) {
      const n3 = (u2 + l2) / 2, r3 = o2 > n3 ? 1 : 0;
      f2 |= r3 << 29 - (t3 + 5 * i2), u2 = (1 - r3) * u2 + r3 * n3, l2 = (1 - r3) * n3 + r3 * l2;
    }
  }
  t2[2 * n2] = c2, t2[2 * n2 + 1] = f2;
}
class u$1 {
  constructor(e2 = [], s2, i2 = 8096) {
    this.onRelease = (t2) => {
    }, this._nodes = 0, this._root = new d$1(this, 0, 0, 0), this._statisticFields = e2, this._pool = i2 ? new s$5(8096) : null, this._serviceInfo = s2;
  }
  destroy() {
    this.clear();
  }
  _acquire(t2, s2, i2) {
    this._nodes++;
    let n2 = null;
    return r$1(this._pool) && (n2 = this._pool.dequeue()), r$1(n2) ? n2.realloc(t2, s2, i2) : n2 = new d$1(this, t2, s2, i2), n2;
  }
  _release(t2) {
    this.onRelease(t2), this._nodes--, r$1(this._pool) && this._pool.enqueue(t2);
  }
  get count() {
    return this._root.count;
  }
  get size() {
    return this._nodes;
  }
  get poolSize() {
    return b$4(this._pool, 0, (t2) => t2.size);
  }
  get depth() {
    let t2 = 0;
    return this.forEach((e2) => t2 = Math.max(t2, e2.depth)), t2;
  }
  dropLevels(t2) {
    this.forEach((e2) => {
      if (e2.depth >= t2)
        for (let t3 = 0; t3 < e2.children.length; t3++) {
          const s2 = e2.children[t3];
          s2 && this._release(s2);
        }
    }), this.forEach((e2) => {
      if (e2.depth >= t2)
        for (let t3 = 0; t3 < e2.children.length; t3++)
          e2.children[t3] = null;
    });
  }
  clear() {
    this.forEach((t2) => this._release(t2)), this._root = new d$1(this, 0, 0, 0);
  }
  insert(t2, e2, s2 = 0) {
    const i2 = c$4.fromOptimizedFeatures([t2], this._serviceInfo).getCursor();
    i2.next();
    const n2 = i2.readGeometry();
    if (!n2)
      return;
    const [o2, a2] = n2.coords, r2 = t2.geohashX, l2 = t2.geohashY;
    this.insertCursor(i2, t2.displayId, o2, a2, r2, l2, e2, s2);
  }
  insertCursor(t2, e2, s2, i2, n2, o2, a2, r2 = 0) {
    let l2 = this._root, h2 = 0, c2 = 0, u2 = 0;
    for (; l2 !== null; ) {
      if (l2.depth >= r2 && (l2.count += 1, l2.xTotal += s2, l2.yTotal += i2, l2.xGeohashTotal += n2, l2.yGeohashTotal += o2, l2.referenceId = e2, this._updateStatisticsCursor(t2, l2, 1)), h2 >= a2)
        return void l2.add(e2);
      const d2 = Math.ceil((h2 + 1) / 2), f2 = Math.floor((h2 + 1) / 2), x2 = 1 - h2 % 2, m2 = 30 - (3 * d2 + 2 * f2), g2 = 30 - (2 * d2 + 3 * f2), y2 = (n2 & 7 * x2 + 3 * (1 - x2) << m2) >> m2, p2 = (o2 & 3 * x2 + 7 * (1 - x2) << g2) >> g2, _2 = y2 + p2 * (8 * x2 + 4 * (1 - x2));
      c2 = c2 << 3 * x2 + 2 * (1 - x2) | y2, u2 = u2 << 2 * x2 + 3 * (1 - x2) | p2, l2.children[_2] == null && (l2.children[_2] = this._acquire(c2, u2, h2 + 1)), h2 += 1, l2 = l2.children[_2];
    }
  }
  remove(t2, e2) {
    const s2 = c$4.fromOptimizedFeatures([t2], this._serviceInfo).getCursor();
    s2.next();
    const i2 = s2.readGeometry();
    if (!i2)
      return;
    const [n2, o2] = i2.coords, a2 = t2.geohashX, r2 = t2.geohashY;
    this.removeCursor(s2, n2, o2, a2, r2, e2);
  }
  removeCursor(t2, e2, s2, i2, n2, o2) {
    let a2 = this._root, r2 = 0;
    for (; a2 !== null; ) {
      if (a2.count -= 1, a2.xTotal -= e2, a2.yTotal -= s2, a2.xGeohashTotal -= i2, a2.yGeohashTotal -= n2, this._updateStatisticsCursor(t2, a2, -1), r2 >= o2)
        return void a2.remove(t2.getDisplayId());
      const l2 = Math.ceil((r2 + 1) / 2), h2 = Math.floor((r2 + 1) / 2), c2 = 1 - r2 % 2, u2 = 30 - (3 * l2 + 2 * h2), d2 = 30 - (2 * l2 + 3 * h2), f2 = ((i2 & 7 * c2 + 3 * (1 - c2) << u2) >> u2) + ((n2 & 3 * c2 + 7 * (1 - c2) << d2) >> d2) * (8 * c2 + 4 * (1 - c2)), x2 = a2.children[f2];
      (x2 == null ? void 0 : x2.count) === 1 && (this._release(x2), a2.children[f2] = null), r2 += 1, a2 = x2;
    }
  }
  forEach(t2) {
    let e2 = this._root;
    for (; e2 !== null; ) {
      const s2 = this._linkChildren(e2) || e2.next;
      t2(e2), e2 = s2;
    }
  }
  find(t2, e2, s2) {
    return this._root.find(t2, e2, s2, 0, 0, 0);
  }
  findIf(t2) {
    let e2 = null;
    return this.forEach((s2) => {
      t2(s2) && (e2 = s2);
    }), e2;
  }
  findAllIf(t2) {
    const e2 = [];
    return this.forEach((s2) => {
      t2(s2) && e2.push(s2);
    }), e2;
  }
  findSingleOccupancyNode(t2, e2, s2, i2, n2) {
    let o2 = this._root;
    for (; o2 !== null; ) {
      const a2 = o2.depth, r2 = o2.xNode, l2 = o2.yNode, h2 = 1 - a2 % 2, c2 = o2.xGeohashTotal / o2.count, u2 = o2.yGeohashTotal / o2.count;
      if (o2.count === 1 && t2 < c2 && c2 <= s2 && e2 < u2 && u2 <= i2)
        return o2;
      if (a2 >= n2) {
        o2 = o2.next;
        continue;
      }
      const d2 = Math.ceil((a2 + 1) / 2), f2 = Math.floor((a2 + 1) / 2), x2 = 30 - (3 * d2 + 2 * f2), m2 = 30 - (2 * d2 + 3 * f2), g2 = ~((1 << x2) - 1), y2 = ~((1 << m2) - 1), p2 = (t2 & g2) >> x2, _2 = (e2 & y2) >> m2, v2 = (s2 & g2) >> x2, M2 = (i2 & y2) >> m2, T2 = r2 << 3 * h2 + 2 * (1 - h2), b2 = l2 << 2 * h2 + 3 * (1 - h2), k2 = T2 + 8 * h2 + 4 * (1 - h2), N = b2 + 4 * h2 + 8 * (1 - h2), I2 = Math.max(T2, p2), C = Math.max(b2, _2), G2 = Math.min(k2, v2), L2 = Math.min(N, M2);
      let S2 = null, w2 = null;
      for (let t3 = C; t3 <= L2; t3++)
        for (let e3 = I2; e3 <= G2; e3++) {
          const s3 = e3 - T2 + (t3 - b2) * (8 * h2 + 4 * (1 - h2)), i3 = o2.children[s3];
          i3 && (S2 || (S2 = i3, S2.next = o2.next), w2 && (w2.next = i3), w2 = i3, i3.next = o2.next);
        }
      o2 = S2 || o2.next;
    }
    return null;
  }
  getRegionDisplayIds(t2) {
    let e2 = this._root;
    const { bounds: s2, geohashBounds: i2, level: n2 } = t2, [o2, a2, r2, l2] = s2, h2 = [];
    for (; e2 !== null; ) {
      const t3 = e2.depth, s3 = e2.xNode, c2 = e2.yNode;
      if (t3 >= n2) {
        const t4 = e2.xTotal / e2.count, s4 = e2.yTotal / e2.count;
        t4 >= o2 && t4 <= r2 && s4 >= a2 && s4 <= l2 && e2.displayIds.forEach((t5) => h2.push(t5)), e2 = e2.next;
        continue;
      }
      const u2 = Math.ceil((t3 + 1) / 2), d2 = Math.floor((t3 + 1) / 2), f2 = 1 - t3 % 2, x2 = 30 - (3 * u2 + 2 * d2), m2 = 30 - (2 * u2 + 3 * d2), g2 = ~((1 << x2) - 1), y2 = ~((1 << m2) - 1), p2 = (i2.xLL & g2) >> x2, _2 = (i2.yLL & y2) >> m2, v2 = (i2.xTR & g2) >> x2, M2 = (i2.yTR & y2) >> m2, T2 = s3 << 3 * f2 + 2 * (1 - f2), b2 = c2 << 2 * f2 + 3 * (1 - f2), k2 = T2 + 8 * f2 + 4 * (1 - f2), N = b2 + 4 * f2 + 8 * (1 - f2), I2 = Math.max(T2, p2), C = Math.max(b2, _2), G2 = Math.min(k2, v2), L2 = Math.min(N, M2);
      let S2 = null, w2 = null;
      for (let i3 = C; i3 <= L2; i3++)
        for (let t4 = I2; t4 <= G2; t4++) {
          const s4 = t4 - T2 + (i3 - b2) * (8 * f2 + 4 * (1 - f2)), n3 = e2.children[s4];
          n3 && (S2 || (S2 = n3, S2.next = e2.next), w2 && (w2.next = n3), w2 = n3, n3.next = e2.next);
        }
      e2 = S2 || e2.next;
    }
    return h2;
  }
  getRegionStatistics(t2) {
    let e2 = this._root, s2 = 0, i2 = 0, n2 = 0;
    const o2 = {}, { bounds: a2, geohashBounds: r2, level: l2 } = t2, [h2, c2, u2, d2] = a2;
    let f2 = 0;
    for (; e2 !== null; ) {
      const t3 = e2.depth, a3 = e2.xNode, x2 = e2.yNode;
      if (t3 >= l2) {
        const t4 = e2.xTotal / e2.count, a4 = e2.yTotal / e2.count;
        t4 > h2 && t4 <= u2 && a4 > c2 && a4 <= d2 && (s2 += e2.count, i2 += e2.xTotal, n2 += e2.yTotal, e2.count === 1 && (f2 = e2.referenceId), this._aggregateStatistics(o2, e2.statistics)), e2 = e2.next;
        continue;
      }
      const m2 = Math.ceil((t3 + 1) / 2), g2 = Math.floor((t3 + 1) / 2), y2 = 1 - t3 % 2, p2 = 30 - (3 * m2 + 2 * g2), _2 = 30 - (2 * m2 + 3 * g2), v2 = ~((1 << p2) - 1), M2 = ~((1 << _2) - 1), T2 = (r2.xLL & v2) >> p2, b2 = (r2.yLL & M2) >> _2, k2 = (r2.xTR & v2) >> p2, N = (r2.yTR & M2) >> _2, I2 = a3 << 3 * y2 + 2 * (1 - y2), C = x2 << 2 * y2 + 3 * (1 - y2), G2 = I2 + 8 * y2 + 4 * (1 - y2), L2 = C + 4 * y2 + 8 * (1 - y2), S2 = Math.max(I2, T2), w2 = Math.max(C, b2), R2 = Math.min(G2, k2), F2 = Math.min(L2, N);
      let j2 = null, z = null;
      for (let r3 = w2; r3 <= F2; r3++)
        for (let t4 = S2; t4 <= R2; t4++) {
          const a4 = t4 - I2 + (r3 - C) * (8 * y2 + 4 * (1 - y2)), l3 = e2.children[a4];
          if (l3) {
            if (r3 !== w2 && r3 !== F2 && t4 !== S2 && t4 !== R2) {
              const t5 = l3.xTotal / l3.count, e3 = l3.yTotal / l3.count;
              t5 > h2 && t5 <= u2 && e3 > c2 && e3 <= d2 && (s2 += l3.count, i2 += l3.xTotal, n2 += l3.yTotal, l3.count === 1 && (f2 = l3.referenceId), this._aggregateStatistics(o2, l3.statistics));
              continue;
            }
            j2 || (j2 = l3, j2.next = e2.next), z && (z.next = l3), z = l3, l3.next = e2.next;
          }
        }
      e2 = j2 || e2.next;
    }
    return { count: s2, attributes: this.normalizeStatistics(o2, s2), xTotal: i2, yTotal: n2, referenceId: f2 };
  }
  getBins(t2) {
    const e2 = [], { geohashBounds: s2, level: i2 } = t2;
    let n2 = this._root;
    for (; n2 !== null; ) {
      const t3 = n2.depth, o2 = n2.xNode, a2 = n2.yNode;
      if (t3 >= i2) {
        e2.push(n2), n2 = n2.next;
        continue;
      }
      const r2 = Math.ceil((t3 + 1) / 2), l2 = Math.floor((t3 + 1) / 2), h2 = 1 - t3 % 2, c2 = 30 - (3 * r2 + 2 * l2), u2 = 30 - (2 * r2 + 3 * l2), d2 = ~((1 << c2) - 1), f2 = ~((1 << u2) - 1), x2 = (s2.xLL & d2) >> c2, m2 = (s2.yLL & f2) >> u2, g2 = (s2.xTR & d2) >> c2, y2 = (s2.yTR & f2) >> u2, p2 = o2 << 3 * h2 + 2 * (1 - h2), _2 = a2 << 2 * h2 + 3 * (1 - h2), v2 = p2 + 8 * h2 + 4 * (1 - h2), M2 = _2 + 4 * h2 + 8 * (1 - h2), T2 = Math.max(p2, x2), b2 = Math.max(_2, m2), k2 = Math.min(v2, g2), N = Math.min(M2, y2);
      let I2 = null, C = null;
      for (let e3 = b2; e3 <= N; e3++)
        for (let t4 = T2; t4 <= k2; t4++) {
          const s3 = t4 - p2 + (e3 - _2) * (8 * h2 + 4 * (1 - h2)), i3 = n2.children[s3];
          i3 && (I2 || (I2 = i3, I2.next = n2.next), C && (C.next = i3), C = i3, i3.next = n2.next);
        }
      n2 = I2 || n2.next;
    }
    return e2;
  }
  _linkChildren(t2) {
    let e2 = null, s2 = null;
    for (let i2 = 0; i2 <= t2.children.length; i2++) {
      const n2 = t2.children[i2];
      n2 && (e2 || (e2 = n2, e2.next = t2.next), s2 && (s2.next = n2), s2 = n2, n2.next = t2.next);
    }
    return e2;
  }
  _updateStatisticsCursor(t2, e2, s2) {
    var _a, _b;
    for (const i2 of this._statisticFields) {
      const n2 = i2.name, o2 = i2.inField ? t2.readAttribute(i2.inField) : t2.getComputedNumericAtIndex(i2.inFieldIndex);
      switch (i2.statisticType) {
        case "min": {
          if (isNaN(o2))
            break;
          if (!e2.statistics[n2]) {
            e2.statistics[n2] = { value: o2 };
            break;
          }
          const t3 = e2.statistics[n2].value;
          e2.statistics[n2].value = Math.min(t3, o2);
          break;
        }
        case "max": {
          if (isNaN(o2))
            break;
          if (!e2.statistics[n2]) {
            e2.statistics[n2] = { value: o2 };
            break;
          }
          const t3 = e2.statistics[n2].value;
          e2.statistics[n2].value = Math.max(t3, o2);
          break;
        }
        case "count":
          break;
        case "sum":
        case "avg": {
          e2.statistics[n2] || (e2.statistics[n2] = { value: 0, nanCount: 0 });
          const t3 = e2.statistics[n2].value, i3 = (_a = e2.statistics[n2].nanCount) != null ? _a : 0;
          o2 == null || isNaN(o2) ? e2.statistics[n2].nanCount = i3 + s2 : e2.statistics[n2].value = t3 + s2 * o2;
          break;
        }
        case "avg_angle": {
          e2.statistics[n2] || (e2.statistics[n2] = { x: 0, y: 0, nanCount: 0 });
          const t3 = e2.statistics[n2].x, i3 = e2.statistics[n2].y, a2 = (_b = e2.statistics[n2].nanCount) != null ? _b : 0, r2 = Math.PI / 180;
          o2 == null || isNaN(o2) ? e2.statistics[n2].nanCount = a2 + s2 : (e2.statistics[n2].x = t3 + s2 * Math.cos(o2 * r2), e2.statistics[n2].y = i3 + s2 * Math.sin(o2 * r2));
          break;
        }
        case "mode": {
          e2.statistics[n2] || (e2.statistics[n2] = {});
          const t3 = e2.statistics[n2][o2] || 0;
          e2.statistics[n2][o2] = t3 + s2;
          break;
        }
      }
    }
  }
  _aggregateStatistics(t2, e2) {
    for (const s2 of this._statisticFields) {
      const i2 = s2.name;
      switch (s2.statisticType) {
        case "min": {
          if (!t2[i2]) {
            t2[i2] = { value: e2[i2].value };
            break;
          }
          const s3 = t2[i2].value;
          t2[i2].value = Math.min(s3, e2[i2].value);
          break;
        }
        case "max": {
          if (!t2[i2]) {
            t2[i2] = { value: e2[i2].value };
            break;
          }
          const s3 = t2[i2].value;
          t2[i2].value = Math.max(s3, e2[i2].value);
          break;
        }
        case "count":
          break;
        case "sum":
        case "avg":
        case "avg_angle":
        case "mode":
          t2[i2] || (t2[i2] = {});
          for (const s3 in e2[i2]) {
            const n2 = t2[i2][s3] || 0;
            t2[i2][s3] = n2 + e2[i2][s3];
          }
      }
    }
  }
  normalizeStatistics(t2, e2) {
    const s2 = {};
    for (const i2 of this._statisticFields) {
      const n2 = i2.name;
      switch (i2.statisticType) {
        case "min":
        case "max": {
          const i3 = t2[n2];
          if (!e2 || !i3)
            break;
          s2[n2] = i3.value;
          break;
        }
        case "count":
          if (!e2)
            break;
          s2[n2] = e2;
          break;
        case "sum": {
          if (!e2)
            break;
          const { value: i3, nanCount: o2 } = t2[n2];
          if (!(e2 - o2))
            break;
          s2[n2] = i3;
          break;
        }
        case "avg": {
          if (!e2)
            break;
          const { value: i3, nanCount: o2 } = t2[n2];
          if (!(e2 - o2))
            break;
          s2[n2] = i3 / (e2 - o2);
          break;
        }
        case "avg_angle": {
          if (!e2)
            break;
          const { x: i3, y: o2, nanCount: a2 } = t2[n2];
          if (!(e2 - a2))
            break;
          const r2 = i3 / (e2 - a2), l2 = o2 / (e2 - a2), h2 = 180 / Math.PI, c2 = Math.atan2(l2, r2) * h2;
          s2[n2] = c2;
          break;
        }
        case "mode": {
          const e3 = t2[n2];
          let i3 = 0, o2 = 0, a2 = null;
          for (const t3 in e3) {
            const s3 = e3[t3];
            s3 === i3 ? o2 += 1 : s3 > i3 && (i3 = s3, o2 = 1, a2 = t3);
          }
          s2[n2] = a2 === "null" || o2 > 1 ? null : a2;
          break;
        }
      }
    }
    return s2;
  }
}
class d$1 {
  constructor(t2, e2, s2, i2) {
    this.count = 0, this.xTotal = 0, this.yTotal = 0, this.statistics = {}, this.displayId = 0, this.referenceId = 0, this.displayIds = new Set(), this.next = null, this.depth = 0, this.xNode = 0, this.yNode = 0, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this._tree = t2, this.children = new Array(32);
    for (let n2 = 0; n2 < this.children.length; n2++)
      this.children[n2] = null;
    this.xNode = e2, this.yNode = s2, this.depth = i2;
  }
  realloc(t2, e2, s2) {
    for (let i2 = 0; i2 < this.children.length; i2++)
      this.children[i2] = null;
    return this.xNode = t2, this.yNode = e2, this.depth = s2, this.next = null, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.displayId = 0, this.referenceId = 0, this.xTotal = 0, this.yTotal = 0, this.count = 0, this.statistics = {}, this.displayIds.clear(), this;
  }
  get id() {
    return `${this.xNode}.${this.yNode}`;
  }
  add(t2) {
    this.displayIds.add(t2);
  }
  remove(t2) {
    this.displayIds.delete(t2);
  }
  getAttributes() {
    const t2 = this._tree.normalizeStatistics(this.statistics, this.count);
    return t2.referenceId = null, t2.aggregateId = this.id, t2.aggregateCount = this.count, t2;
  }
  getGeometry(t2, s2) {
    const i2 = this.getLngLatBounds(), [r2, c2, u2, d2] = i2, f2 = g$4({ rings: [[[r2, c2], [r2, d2], [u2, d2], [u2, c2], [r2, c2]]] }, k$1.WGS84, t2), x2 = J(new t$2(), f2, false, false);
    if (r$1(s2)) {
      return at(new t$2(), x2, false, false, "esriGeometryPolygon", s2, false, false);
    }
    return x2;
  }
  getGeometryCentroid(t2, s2) {
    const i2 = this.getLngLatBounds(), [o2, c2, u2, d2] = i2, f2 = g$4({ x: (o2 + u2) / 2, y: (c2 + d2) / 2 }, k$1.WGS84, t2), x2 = _$2(new t$2(), f2);
    if (r$1(s2)) {
      return at(new t$2(), x2, false, false, "esriGeometryPoint", s2, false, false);
    }
    return x2;
  }
  getLngLatBounds() {
    const t2 = this.depth, e2 = Math.ceil(t2 / 2), s2 = Math.floor(t2 / 2), n2 = 30 - (3 * e2 + 2 * s2), o2 = 30 - (2 * e2 + 3 * s2), a2 = this.xNode << n2, r2 = this.yNode << o2;
    return X({ geohashX: a2, geohashY: r2 }, this.depth);
  }
  find(t2, e2, s2, i2, n2, o2) {
    if (i2 >= s2)
      return this;
    const a2 = 1 - i2 % 2, r2 = 3 * a2 + 2 * (1 - a2), l2 = 2 * a2 + 3 * (1 - a2), h2 = 30 - n2 - r2, c2 = 30 - o2 - l2, u2 = ((t2 & 7 * a2 + 3 * (1 - a2) << h2) >> h2) + ((e2 & 3 * a2 + 7 * (1 - a2) << c2) >> c2) * (8 * a2 + 4 * (1 - a2)), d2 = this.children[u2];
    return d2 == null ? null : d2.find(t2, e2, s2, i2 + 1, n2 + r2, o2 + l2);
  }
}
const G = s$3.getLogger("esri.view.2d.layers.features.support.BinStore"), R$1 = 12, L = 64, T$2 = 5;
function A$1(e2) {
  return 57.29577951308232 * e2;
}
class D$1 extends c$6 {
  constructor(t2, s2, r2, i2) {
    super(t2, r2), this.type = "bin", this.events = new n$3(), this.objectIdField = "aggregateId", this.featureAdapter = u$2, this._geohashLevel = T$2, this._geohashBuf = [], this._serviceInfo = i2, this.geometryInfo = t2.geometryInfo, this._spatialReference = s2, this._projectionSupportCheck = f$5(s2, k$1.WGS84), this._bitsets.geohash = r2.getBitset(r2.createBitset()), this._bitsets.inserted = r2.getBitset(r2.createBitset());
  }
  destroy() {
    this._tree && this._tree.destroy();
  }
  get featureSpatialReference() {
    return this._spatialReference;
  }
  get fields() {
    return this._fields;
  }
  async updateSchema(e2, t2) {
    const r2 = this._schema;
    try {
      await super.updateSchema(e2, t2), await this._projectionSupportCheck;
    } catch (n2) {
    }
    this._fields = this._schema.params.fields;
    const i2 = m$3(r2, t2);
    t2 && (!t$1(i2) || e2.source || e2.storage.filters) ? ((a$5(i2, "params.fields") || a$5(i2, "params") || !this._tree || e2.source) && (this._tree && this._tree.destroy(), this._tree = new u$1(this._statisticFields, this._serviceInfo), this._tree.onRelease = (e3) => e3.displayId && this._storage.releaseDisplayId(e3.displayId), this._geohashLevel = this._schema.params.fixedBinLevel, this._rebuildTree(), has("esri-2d-update-debug") && G.info("Aggregate mesh needs update due to tree changing")), has("esri-2d-update-debug") && G.info("Aggregate mesh needs update due to tree changing"), e2.targets[t2.name] = true, e2.mesh = false) : r2 && (e2.mesh = true);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(e2, t2) {
    this._bitsets.inserted.forEachSet((s2) => {
      if (!e2.has(s2)) {
        const e3 = t2.lookupByDisplayIdUnsafe(s2);
        this._remove(e3);
      }
    });
  }
  sweepAggregates(e2, t2, s2) {
  }
  onTileData(e2, t2, r2, i2, o2 = true) {
    if (!this._schema || t$1(t2.addOrUpdate))
      return t2;
    this.events.emit("changed");
    const a2 = this._getTransforms(e2, this._spatialReference);
    {
      const e3 = t2.addOrUpdate.getCursor();
      for (; e3.next(); )
        this._update(e3, i2);
    }
    if (t2.status.mesh || !o2)
      return t2;
    const h2 = new Array();
    this._getBinsForTile(h2, e2, a2, r2), t2.addOrUpdate = c$4.fromOptimizedFeatures(h2, __spreadProps(__spreadValues({}, this._serviceInfo), { geometryType: "esriGeometryPolygon" })), t2.addOrUpdate.attachStorage(r2), t2.end = true, t2.isRepush || (t2.clear = true);
    {
      const s2 = t2.addOrUpdate.getCursor();
      for (; s2.next(); ) {
        const t3 = s2.getDisplayId();
        this._bitsets.computed.unset(t3), this.setComputedAttributes(r2, s2, t3, e2.scale);
      }
    }
    return t2;
  }
  forEachBin(e2) {
    this._tree.forEach(e2);
  }
  forEach(e2) {
    this._tree.forEach((t2) => {
      if (t2.depth !== this._geohashLevel)
        return;
      const s2 = this._toFeatureJSON(t2), r2 = c$4.fromFeatures([s2], { objectIdField: this.objectIdField, globalIdField: null, geometryType: this.geometryInfo.geometryType, fields: this.fields }).getCursor();
      r2.next(), e2(r2);
    });
  }
  forEachInBounds(e2, t2) {
  }
  forEachBounds(e2, t2, r2) {
    const { hasM: i2, hasZ: o2 } = this.geometryInfo;
    for (const a2 of e2) {
      const e3 = gt([0, 0, 0, 0], a2.readGeometry(), o2, i2);
      t$1(e3) || t2(G$2(r2, e3));
    }
  }
  toArray() {
    const e2 = [];
    return this.forEach((t2) => e2.push(t2)), e2;
  }
  onTileUpdate(e2) {
  }
  getAggregate(e2) {
    const t2 = s$7(e2, true), s2 = this._tree.findIf((e3) => e3.displayId === t2);
    return o$3(s2, (e3) => this._toFeatureJSON(e3));
  }
  getAggregates() {
    return this._tree.findAllIf((e2) => e2.depth === this._geohashLevel).map(this._toFeatureJSON.bind(this));
  }
  getDisplayId(e2) {
    const t2 = this._tree.findIf((t3) => t3.id === e2);
    return o$3(t2, (e3) => e3.displayId);
  }
  getFeatureDisplayIdsForAggregate(e2) {
    const t2 = this._tree.findIf((t3) => t3.id === e2);
    return b$4(t2, [], (e3) => Array.from(e3.displayIds));
  }
  getDisplayIdForReferenceId(e2) {
    const t2 = this._tree.findIf((t3) => t3.displayIds.size === 1 && t3.displayIds.has(e2));
    return o$3(t2, (e3) => e3.displayId);
  }
  _toFeatureJSON(e2) {
    const t2 = this._spatialReference;
    return { displayId: e2.displayId, attributes: e2.getAttributes(), geometry: rt(e2.getGeometry(t2), "esriGeometryPolygon", false, false), centroid: null };
  }
  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }
  _remove(e2) {
    const t2 = e2.getDisplayId(), s2 = e2.getXHydrated(), r2 = e2.getYHydrated(), i2 = this._geohashBuf[2 * t2], o2 = this._geohashBuf[2 * t2 + 1];
    this._bitsets.inserted.has(t2) && (this._bitsets.inserted.unset(t2), this._tree.removeCursor(e2, s2, r2, i2, o2, this._geohashLevel));
  }
  _update(e2, t2) {
    const s2 = e2.getDisplayId(), r2 = this._bitsets.inserted, i2 = t2.isVisible(s2);
    if (i2 === r2.has(s2))
      return;
    if (!i2)
      return void this._remove(e2);
    const o2 = e2.getXHydrated(), a2 = e2.getYHydrated();
    if (!this._setGeohash(s2, o2, a2))
      return;
    const h2 = this._geohashBuf[2 * s2], n2 = this._geohashBuf[2 * s2 + 1];
    this._tree.insertCursor(e2, s2, o2, a2, h2, n2, this._geohashLevel), r2.set(s2);
  }
  _setGeohash(e2, t2, s2) {
    if (this._bitsets.geohash.has(e2))
      return true;
    const r2 = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const i2 = A$1(t2 / s$6.radius), o2 = i2 - 360 * Math.floor((i2 + 180) / 360), a2 = A$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-s2 / s$6.radius)));
      b(r2, e2, a2, o2, R$1);
    } else {
      const i2 = g$4({ x: t2, y: s2 }, this._spatialReference, k$1.WGS84);
      if (!i2)
        return false;
      b(r2, e2, i2.y, i2.x, R$1);
    }
    return this._bitsets.geohash.set(e2), true;
  }
  _getBinsForTile(e2, t2, s2, r2) {
    try {
      const i2 = this._getGeohashBounds(t2), o2 = this._tree.getBins(i2);
      for (const t3 of o2) {
        t3.displayId || (t3.displayId = r2.createDisplayId(true));
        let i3 = null;
        const o3 = t3.getGeometry(this._spatialReference, s2.tile);
        o3 || (i3 = t3.getGeometryCentroid(this._spatialReference, s2.tile));
        const a2 = new s$2(o3, t3.getAttributes(), i3);
        a2.objectId = t3.id, a2.displayId = t3.displayId, e2.push(a2);
      }
    } catch (i2) {
      return void G.error("Unable to get bins for tile", t2.key.id);
    }
  }
  _getGeohash(e2, t2, s2) {
    const r2 = { geohashX: 0, geohashY: 0 };
    return Y(r2, t2, e2, s2), r2;
  }
  _getGeohashBounds(e2) {
    const t2 = this._getGeohashLevel(e2.key.level), s2 = [e2.extent.xmin, e2.extent.ymin, e2.extent.xmax, e2.extent.ymax], r2 = v$3.fromExtent(w$2.fromBounds(s2, this._spatialReference)), i2 = g$4(r2, this._spatialReference, k$1.WGS84, { densificationStep: e2.resolution * L }), o2 = J(new t$2(), i2, false, false), a2 = o2.coords.filter((e3, t3) => !(t3 % 2)), h2 = o2.coords.filter((e3, t3) => t3 % 2), n2 = Math.min(...a2), d2 = Math.min(...h2), l2 = Math.max(...a2), p2 = Math.max(...h2), g2 = this._getGeohash(n2, d2, t2), c2 = this._getGeohash(l2, p2, t2);
    return { bounds: s2, geohashBounds: { xLL: g2.geohashX, yLL: g2.geohashY, xTR: c2.geohashX, yTR: c2.geohashY }, level: t2 };
  }
  _getGeohashLevel(e2) {
    return this._schema.params.fixedBinLevel;
  }
  _getTransforms(e2, t2) {
    const s2 = { originPosition: "upperLeft", scale: [e2.resolution, e2.resolution], translate: [e2.bounds[0], e2.bounds[3]] }, r2 = R$2(t2);
    if (!r2)
      return { tile: s2, left: null, right: null };
    const [i2, o2] = r2.valid;
    return { tile: s2, left: __spreadProps(__spreadValues({}, s2), { translate: [o2, e2.bounds[3]] }), right: __spreadProps(__spreadValues({}, s2), { translate: [i2 - o2 + e2.bounds[0], e2.bounds[3]] }) };
  }
}
const F$1 = 12, w = 64, S = 1;
class V extends o$5 {
  constructor(e2, t2, s2, r2, o2) {
    super(new t$2([], [t2, s2]), r2, null, e2), this.geohashBoundsInfo = o2;
  }
  get count() {
    return this.attributes.cluster_count;
  }
  static create(e2, t2, s2, r2, o2, a2, i2, h2) {
    const n2 = new V(t2, s2, r2, a2, i2);
    return n2.displayId = e2.createDisplayId(true), n2.referenceId = h2, n2.tileLevel = o2, n2;
  }
  update(e2, t2, s2, r2, o2, a2) {
    return this.geometry.coords[0] = e2, this.geometry.coords[1] = t2, this.tileLevel = s2, this.attributes = r2, this.geohashBoundsInfo = o2, this.referenceId = null, this.referenceId = a2, this;
  }
  toJSON() {
    return { attributes: __spreadProps(__spreadValues({}, this.attributes), { aggregateId: this.objectId, referenceId: this.attributes.cluster_count === 1 ? this.referenceId : null }), geometry: { x: this.geometry.coords[0], y: this.geometry.coords[1] } };
  }
}
function T$1(e2) {
  return 57.29577951308232 * e2;
}
class D extends c$6 {
  constructor(t2, s2, r2, o2) {
    super(t2, r2), this.type = "cluster", this.events = new n$3(), this.objectIdField = "aggregateId", this.featureAdapter = u$2, this._geohashLevel = 0, this._tileLevel = 0, this._aggregateValueRanges = {}, this._aggregateValueRangesChanged = false, this._geohashBuf = [], this._clusters = new Map(), this._tiles = new Map(), this._serviceInfo = o2, this.geometryInfo = t2.geometryInfo, this._spatialReference = s2, this._projectionSupportCheck = f$5(s2, k$1.WGS84), this._bitsets.geohash = r2.getBitset(r2.createBitset()), this._bitsets.inserted = r2.getBitset(r2.createBitset());
  }
  destroy() {
    this._tree.destroy();
  }
  get featureSpatialReference() {
    return this._spatialReference;
  }
  get fields() {
    return this._fields;
  }
  async updateSchema(e2, s2) {
    const r2 = this._schema;
    try {
      await super.updateSchema(e2, s2), await this._projectionSupportCheck;
    } catch (n2) {
    }
    this._fields = this._schema.params.fields;
    const h2 = m$3(r2, s2);
    s2 && (!t$1(h2) || e2.source || e2.storage.filters) ? ((a$5(h2, "params.fields") || !this._tree || e2.source) && (this._tree && this._tree.destroy(), this._tree = new u$1(this._statisticFields, this._serviceInfo), this._rebuildTree(), has("esri-2d-update-debug") && console.debug("Aggregate mesh needs update due to tree changing")), has("esri-2d-update-debug") && console.debug("Applying Update - ClusterStore:", h2), e2.targets[s2.name] = true, e2.mesh = false, this._aggregateValueRanges = {}) : r2 && (e2.mesh = true);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(e2, t2) {
    this._bitsets.inserted.forEachSet((s2) => {
      if (!e2.has(s2)) {
        const e3 = t2.lookupByDisplayIdUnsafe(s2);
        this._remove(e3);
      }
    });
  }
  sweepAggregates(e2, t2, s2) {
    this._clusters.forEach((r2, o2) => {
      r2 && r2.tileLevel !== s2 && (e2.releaseDisplayId(r2.displayId), t2.unsetAttributeData(r2.displayId), this._clusters.delete(o2));
    });
  }
  onTileData(e2, s2, r2, o2, a2 = true) {
    if (!this._schema || t$1(s2.addOrUpdate))
      return s2;
    this.events.emit("changed");
    const i2 = this._getTransforms(e2, this._spatialReference);
    {
      const e3 = s2.addOrUpdate.getCursor();
      for (; e3.next(); )
        this._update(e3, o2);
    }
    if (s2.status.mesh || !a2)
      return s2;
    const h2 = new Array(), n2 = this._schema.params.clusterRadius;
    this._getClustersForTile(h2, e2, n2, r2, i2), s2.addOrUpdate = c$4.fromOptimizedFeatures(h2, this._serviceInfo), s2.addOrUpdate.attachStorage(r2), s2.clear = true, s2.end = true;
    {
      const t2 = s2.addOrUpdate.getCursor();
      for (; t2.next(); ) {
        const s3 = t2.getDisplayId();
        this._bitsets.computed.unset(s3), this.setComputedAttributes(r2, t2, s3, e2.scale);
      }
    }
    return this._aggregateValueRangesChanged && s2.end && (this.events.emit("valueRangesChanged", { valueRanges: this._aggregateValueRanges }), this._aggregateValueRangesChanged = false), s2;
  }
  onTileUpdate({ added: e2, removed: t2 }) {
    if (e2.length) {
      const t3 = e2[0].level;
      this._tileLevel = t3, this._setGeohashLevel(t3);
    }
    if (!this._schema)
      return;
    const s2 = this._schema.params.clusterRadius;
    t2.forEach((e3) => {
      this._tiles.delete(e3.key.id), this._markTileClustersForDeletion(e3, s2);
    });
  }
  getAggregate(e2) {
    for (const t2 of this._clusters.values())
      if (((t2 == null ? void 0 : t2.displayId) & n$4) == (e2 & n$4))
        return t2.toJSON();
    return null;
  }
  getAggregates() {
    const e2 = [];
    for (const t2 of this._clusters.values())
      (t2 == null ? void 0 : t2.tileLevel) === this._tileLevel && e2.push(t2.toJSON());
    return e2;
  }
  getDisplayId(e2) {
    const t2 = this._clusters.get(e2);
    return t2 ? t2.displayId : null;
  }
  getFeatureDisplayIdsForAggregate(e2) {
    const t2 = this._clusters.get(e2);
    return t2 ? this._tree.getRegionDisplayIds(t2.geohashBoundsInfo) : [];
  }
  getDisplayIdForReferenceId(e2) {
    for (const t2 of this._clusters.values())
      if ((t2 == null ? void 0 : t2.referenceId) === e2)
        return t2.displayId;
    return null;
  }
  getAggregateValueRanges() {
    return this._aggregateValueRanges;
  }
  forEach(e2) {
    this._clusters.forEach((t2) => {
      if (!t2)
        return;
      const s2 = t2.toJSON(), r2 = c$4.fromFeatures([s2], { objectIdField: this.objectIdField, globalIdField: null, geometryType: this.geometryInfo.geometryType, fields: this.fields }).getCursor();
      r2.next(), e2(r2);
    });
  }
  forEachInBounds(e2, t2) {
  }
  forEachBounds(e2, s2, r2) {
    const { hasM: o2, hasZ: a2 } = this.geometryInfo;
    for (const i2 of e2) {
      const e3 = gt([0, 0, 0, 0], i2.readGeometry(), a2, o2);
      t$1(e3) || s2(G$2(r2, e3));
    }
  }
  toArray() {
    const e2 = [];
    return this.forEach((t2) => e2.push(t2)), e2;
  }
  size() {
    let e2 = 0;
    return this.forEach((t2) => e2++), e2;
  }
  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }
  _remove(e2) {
    const t2 = e2.getDisplayId(), s2 = e2.getXHydrated(), r2 = e2.getYHydrated(), o2 = this._geohashBuf[2 * t2], a2 = this._geohashBuf[2 * t2 + 1];
    this._bitsets.inserted.has(t2) && (this._bitsets.inserted.unset(t2), this._tree.removeCursor(e2, s2, r2, o2, a2, this._geohashLevel));
  }
  _update(e2, t2) {
    const s2 = e2.getDisplayId(), r2 = this._bitsets.inserted, o2 = t2.isVisible(s2);
    if (o2 === r2.has(s2))
      return;
    if (!o2)
      return void this._remove(e2);
    const a2 = e2.getXHydrated(), i2 = e2.getYHydrated();
    if (!this._setGeohash(s2, a2, i2))
      return;
    const h2 = this._geohashBuf[2 * s2], n2 = this._geohashBuf[2 * s2 + 1];
    this._tree.insertCursor(e2, s2, a2, i2, h2, n2, this._geohashLevel), r2.set(s2);
  }
  _setGeohash(e2, t2, s2) {
    if (this._bitsets.geohash.has(e2))
      return true;
    const r2 = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const o2 = T$1(t2 / s$6.radius), a2 = o2 - 360 * Math.floor((o2 + 180) / 360), i2 = T$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-s2 / s$6.radius)));
      b(r2, e2, i2, a2, F$1);
    } else {
      const o2 = g$4({ x: t2, y: s2 }, this._spatialReference, k$1.WGS84);
      if (!o2)
        return false;
      b(r2, e2, o2.y, o2.x, F$1);
    }
    return this._bitsets.geohash.set(e2), true;
  }
  _getClustersForTile(e2, o2, a2, i2, h2, n2 = true) {
    const l2 = this._schema.params.clusterPixelBuffer, u2 = 2 * a2, g2 = Math.ceil(2 ** o2.key.level * o$4 / u2) + 1, c2 = Math.ceil(l2 / u2) + 0, p2 = Math.ceil(o$4 / u2), { row: m2, col: y2 } = o2.key, I2 = y2 * o$4, b2 = m2 * o$4, R2 = Math.floor(I2 / u2) - c2, M$1 = Math.floor(b2 / u2) - c2, x2 = R2 + p2 + 2 * c2, C = M$1 + p2 + 2 * c2, j2 = o2.tileInfoView.getLODInfoAt(o2.key.level);
    for (let v2 = R2; v2 <= x2; v2++)
      for (let a3 = M$1; a3 <= C; a3++) {
        let l3 = v2;
        j2.wrap && (l3 = v2 < 0 ? v2 + g2 : v2 % g2);
        const u3 = j2.wrap && v2 < 0, c3 = j2.wrap && v2 % g2 !== v2, p3 = this._lookupCluster(i2, j2, o2.key.level, l3, a3, o2);
        if (r$1(p3)) {
          const o3 = o$3(h2, (e3) => u3 ? e3.left : c3 ? e3.right : e3.tile);
          if (n2 && t$1(o3))
            continue;
          if (!p3.count)
            continue;
          if (r$1(o3) && n2) {
            const t2 = p3.geometry.clone();
            let r2 = p3.attributes;
            t2.coords[0] = w$1(o3, t2.coords[0]), t2.coords[1] = M(o3, t2.coords[1]), p3.count === 1 && r$1(p3.referenceId) && (r2 = __spreadProps(__spreadValues({}, p3.attributes), { referenceId: p3.referenceId }));
            const a4 = new s$2(t2, r2);
            a4.displayId = p3.displayId, e2.push(a4);
          }
        }
      }
  }
  _getGeohashLevel(e2) {
    return Math.min(Math.ceil(e2 / 2 + 2), F$1);
  }
  _setGeohashLevel(e2) {
    const t2 = this._getGeohashLevel(e2), s2 = (Math.floor(t2 / S) + 1) * S - 1;
    if (this._geohashLevel !== s2)
      return this._geohashLevel = s2, this._rebuildTree(), void this._bitsets.geohash.clear();
  }
  _getTransforms(e2, t2) {
    const s2 = { originPosition: "upperLeft", scale: [e2.resolution, e2.resolution], translate: [e2.bounds[0], e2.bounds[3]] }, r2 = R$2(t2);
    if (!r2)
      return { tile: s2, left: null, right: null };
    const [o2, a2] = r2.valid;
    return { tile: s2, left: __spreadProps(__spreadValues({}, s2), { translate: [a2, e2.bounds[3]] }), right: __spreadProps(__spreadValues({}, s2), { translate: [o2 - a2 + e2.bounds[0], e2.bounds[3]] }) };
  }
  _getClusterId(e2, t2, s2) {
    return (15 & e2) << 28 | (16383 & t2) << 14 | 16383 & s2;
  }
  _markForDeletion(e2, t2, s2) {
    const r2 = this._getClusterId(e2, t2, s2);
    this._clusters.delete(r2);
  }
  _getClusterBounds(e2, t2, s2) {
    const r2 = this._schema.params.clusterRadius, o2 = 2 * r2;
    let a2 = s2 % 2 ? t2 * o2 : t2 * o2 - r2;
    const i2 = s2 * o2;
    let h2 = a2 + o2;
    const n2 = i2 - o2, l2 = 2 ** e2.level * o$4;
    e2.wrap && a2 < 0 && (a2 = 0), e2.wrap && h2 > l2 && (h2 = l2);
    const u2 = a2 / o$4, g2 = i2 / o$4, c2 = h2 / o$4, d2 = n2 / o$4;
    return [e2.getXForColumn(u2), e2.getYForRow(g2), e2.getXForColumn(c2), e2.getYForRow(d2)];
  }
  _getGeohash(e2, t2, s2) {
    const r2 = { geohashX: 0, geohashY: 0 };
    return Y(r2, t2, e2, s2), r2;
  }
  _getGeohashBounds(e2, t2) {
    const s2 = this._getGeohashLevel(e2.key.level);
    if (this._spatialReference.isWebMercator) {
      const [e3, r3, o3, a3] = t2, i3 = { x: e3, y: r3 }, h3 = { x: o3, y: a3 };
      let l3 = 0, g3 = 0, c3 = 0, d3 = 0;
      {
        const e4 = T$1(i3.x / s$6.radius);
        l3 = e4 - 360 * Math.floor((e4 + 180) / 360), g3 = T$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-i3.y / s$6.radius)));
      }
      {
        const e4 = T$1(h3.x / s$6.radius);
        c3 = e4 - 360 * Math.floor((e4 + 180) / 360), d3 = T$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-h3.y / s$6.radius)));
      }
      const f3 = { geohashX: 0, geohashY: 0 }, p2 = { geohashX: 0, geohashY: 0 };
      Y(f3, g3, l3, s2), Y(p2, d3, c3, s2);
      return { bounds: [e3, r3, o3, a3], geohashBounds: { xLL: f3.geohashX, yLL: f3.geohashY, xTR: p2.geohashX, yTR: p2.geohashY }, level: s2 };
    }
    const r2 = v$3.fromExtent(w$2.fromBounds(t2, this._spatialReference)), o2 = g$4(r2, this._spatialReference, k$1.WGS84, { densificationStep: e2.resolution * w });
    if (!o2)
      return null;
    const a2 = J(new t$2(), o2, false, false), i2 = a2.coords.filter((e3, t3) => !(t3 % 2)), h2 = a2.coords.filter((e3, t3) => t3 % 2), l2 = Math.min(...i2), g2 = Math.min(...h2), c2 = Math.max(...i2), d2 = Math.max(...h2), f2 = this._getGeohash(l2, g2, s2), m2 = this._getGeohash(c2, d2, s2);
    return { bounds: t2, geohashBounds: { xLL: f2.geohashX, yLL: f2.geohashY, xTR: m2.geohashX, yTR: m2.geohashY }, level: s2 };
  }
  _lookupCluster(e2, r2, o2, a2, i2, h2) {
    const n2 = this._getClusterId(o2, a2, i2), l2 = this._clusters.get(n2), u2 = this._getClusterBounds(r2, a2, i2), g2 = this._getGeohashBounds(h2, u2);
    if (t$1(g2))
      return null;
    const c2 = this._tree.getRegionStatistics(g2), { count: d2, xTotal: f2, yTotal: p2, referenceId: m2 } = c2, _2 = d2 ? f2 / d2 : 0, y2 = d2 ? p2 / d2 : 0;
    if (d2 === 0)
      return this._clusters.set(n2, null), null;
    const I2 = __spreadValues({ cluster_count: d2 }, c2.attributes), b2 = r$1(l2) ? l2.update(_2, y2, o2, I2, g2, m2) : V.create(e2, n2, _2, y2, o2, I2, g2, m2);
    if (d2 === 0) {
      const [e3, t2, s2, r3] = u2;
      b2.geometry.coords[0] = (e3 + s2) / 2, b2.geometry.coords[1] = (t2 + r3) / 2;
    }
    return this._clusters.set(n2, b2), this._updateAggregateValueRangeForCluster(b2, b2.tileLevel), b2;
  }
  _updateAggregateValueRangeForCluster(e2, t2) {
    const s2 = this._aggregateValueRanges[t2] || { minValue: 1 / 0, maxValue: 0 }, r2 = s2.minValue, o2 = s2.maxValue;
    s2.minValue = Math.min(r2, e2.count), s2.maxValue = Math.max(o2, e2.count), this._aggregateValueRanges[t2] = s2, r2 === s2.minValue && o2 === s2.maxValue || (this._aggregateValueRangesChanged = true);
  }
  _markTileClustersForDeletion(e2, t2) {
    const s2 = 2 * t2, r2 = Math.ceil(o$4 / s2), { row: o2, col: a2 } = e2.key, i2 = a2 * o$4, h2 = o2 * o$4, n2 = Math.floor(i2 / s2), l2 = Math.floor(h2 / s2);
    for (let u2 = n2; u2 < n2 + r2; u2++)
      for (let t3 = l2; t3 < l2 + r2; t3++)
        this._markForDeletion(e2.key.level, u2, t3);
  }
}
const F = 5e3, j = "tileRenderer.featuresView.attributeView.initialize", T = "tileRenderer.featuresView.attributeView.requestUpdate", k = "tileRenderer.featuresView.requestRender";
function x(e2) {
  return e2.name === "worker:port-closed";
}
function R(e2) {
  if (!j$1(e2) && !x(e2))
    throw e2;
}
function A(e2) {
  return e2.type === "feature" && e2.mode === "snapshot";
}
let U = class extends d$6 {
  constructor() {
    super(...arguments), this._storage = new r$3(), this._markedIdsBufId = this._storage.createBitset(), this._lastCleanup = performance.now(), this._cleanupNeeded = false, this._invalidated = false, this._tileToResolver = new Map(), this._didEdit = false, this._updateVersion = 1, this.tileStore = null, this.config = null, this.processor = null, this.remoteClient = null, this.service = null;
  }
  initialize() {
    this._initStores(), this._initSource(), this._updateQueue = new l$5({ concurrency: this._source.type === "geoevent" ? 1 : 4, process: (e2, t2) => this._onTileMessage(e2, { signal: t2 }) }), this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this)), f$6(() => !this.updating, () => this.onIdle())]), this._checkUpdating = setInterval(() => this.notifyChange("updating"), 300);
  }
  _initSource() {
    const e2 = this.tileStore.tileScheme, t2 = () => this._updateQueue.length < 50, r2 = (e3, t3) => (this._invalidated = true, this._patchTile(e3, t3));
    this._source = a(this.service, this.spatialReference, e2, r2, t2, this.featureStore), this._proxyEvents();
  }
  _proxyEvents() {
    if (this._source.type === "geoevent") {
      const e2 = this._source.events;
      this.handles.add([e2.on("connectionStatus", (e3) => this.remoteClient.invoke("setProperty", { propertyName: "connectionStatus", value: e3 }).catch(R)), e2.on("errorString", (e3) => this.remoteClient.invoke("setProperty", { propertyName: "errorString", value: e3 }).catch(R)), e2.on("data-received", (e3) => this.remoteClient.invoke("emitEvent", { name: "data-received", event: { attributes: e3.attributes, centroid: e3.centroid, geometry: e3.geometry } }).catch(R)), e2.on("updateRate", (e3) => this.remoteClient.invoke("emitEvent", { name: "update-rate", event: __spreadValues({}, e3) }).catch(R))]);
    }
  }
  _initAttributeStore(e2) {
    this.attributeStore || (this.attributeStore = new v$4({ type: "remote", initialize: (e3, t2) => g$2(this.remoteClient.invoke(j, e3, { signal: t2 }).catch(R)), update: (e3, t2) => g$2(this.remoteClient.invoke(T, e3, { signal: t2 }).catch(R)), render: (e3) => g$2(this.remoteClient.invoke(k, void 0, { signal: e3 }).catch(R)) }, e2, () => this.notifyChange("updating")));
  }
  _initStores() {
    const e2 = this.service.type === "snapshot" ? "snapshot" : "on-demand", t2 = { geometryInfo: { geometryType: this.service.geometryType, hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
    this.featureStore = new l$7(t2, this._storage, e2);
  }
  _initQueryEngine(e2) {
    var _a;
    const t2 = this;
    (_a = this.featureQueryEngine) == null ? void 0 : _a.destroy(), this.featureQueryEngine = new Y$1({ definitionExpression: e2.schema.source.definitionExpression, fields: this.service.fields, geometryType: this.service.geometryType, objectIdField: this.service.objectIdField, hasM: false, hasZ: false, spatialReference: this.spatialReference.toJSON(), cacheSpatialQueries: true, featureStore: this.featureStore, aggregateAdapter: { getFeatureObjectIds(e3) {
      if (t$1(t2.aggregateStore))
        return [];
      return t2.aggregateStore.getFeatureDisplayIdsForAggregate(e3).map((e4) => t2.getObjectId(e4));
    } }, timeInfo: this.service.timeInfo });
  }
  _initAggregateQueryEngine(e2, t2) {
    var _a;
    if ((_a = this.aggregateQueryEngine) == null ? void 0 : _a.destroy(), t$1(e2))
      return;
    const s2 = t2.targets.aggregate.params.fields.slice();
    this.aggregateQueryEngine = new Y$1({ definitionExpression: null, fields: s2, geometryType: e2.geometryInfo.geometryType, objectIdField: e2.objectIdField, hasM: e2.geometryInfo.hasM, hasZ: e2.geometryInfo.hasZ, spatialReference: this.spatialReference.toJSON(), cacheSpatialQueries: false, featureStore: e2, aggregateAdapter: { getFeatureObjectIds: (e3) => [] } });
  }
  destroy() {
    var _a, _b, _c;
    this._updateQueue.destroy(), this._source.destroy(), (_a = this.featureQueryEngine) == null ? void 0 : _a.destroy(), (_b = this.aggregateQueryEngine) == null ? void 0 : _b.destroy(), (_c = this.attributeStore) == null ? void 0 : _c.destroy();
    for (const e2 of this.tileStore.tiles)
      this._source.unsubscribe(e2);
    clearInterval(this._checkUpdating);
  }
  get fieldsIndex() {
    return new r$4(this.service.fields);
  }
  get spatialReference() {
    return this.tileStore.tileScheme.spatialReference;
  }
  get updating() {
    return this.isUpdating();
  }
  isUpdating() {
    const e2 = this._source.updating, t2 = !!this._updateQueue.length, r2 = !this.attributeStore || this.attributeStore.isUpdating(), s2 = e2 || t2 || r2;
    return has("esri-2d-log-updating") && console.log(`Updating FeatureController2D: ${s2}
  -> updatingSource ${e2}
  -> updateQueue ${t2}
  -> updatingAttributeStore ${r2}
`), s2;
  }
  enableEvent(e2) {
    this._source.enableEvent(e2.name, e2.value);
  }
  pause() {
    this._updateQueue.pause(), this._updateQueue.clear();
  }
  resume() {
    this._updateQueue.resume();
  }
  pauseStream() {
    this._source.type === "geoevent" && this._source.pauseStream();
  }
  resumeStream() {
    this._source.type === "geoevent" && this._source.resumeStream();
  }
  _initAggregateStore(e2) {
    var _a, _b;
    const t2 = (_b = (_a = e2.schema.targets) == null ? void 0 : _a.aggregate) == null ? void 0 : _b.type, r2 = o$3(this.config, (e3) => {
      var _a2, _b2;
      return (_b2 = (_a2 = e3.schema.targets) == null ? void 0 : _a2.aggregate) == null ? void 0 : _b2.type;
    });
    if (r2 !== t2 && (r$1(this.aggregateStore) && (this.handles.remove("valueRangesChanged"), this.aggregateStore.destroy(), this.aggregateStore = null), t2)) {
      switch (t2) {
        case "cluster": {
          const e3 = { geometryInfo: { geometryType: "esriGeometryPoint", hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
          this.aggregateStore = new D(e3, this.spatialReference, this._storage, this.service), this.handles.add(this.aggregateStore.events.on("valueRangesChanged", (e4) => {
            this.remoteClient.invoke("emitEvent", { name: "valueRangesChanged", event: { valueRanges: e4.valueRanges } }).catch(R);
          }), "valueRangesChanged");
          break;
        }
        case "bin": {
          const e3 = { geometryInfo: { geometryType: "esriGeometryPolygon", hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
          this.aggregateStore = new D$1(e3, this.spatialReference, this._storage, this.service);
          break;
        }
      }
      this.aggregateStore.onTileUpdate({ added: this.tileStore.tiles, removed: [] });
    }
  }
  async update(e2, t2) {
    this._updateVersion++, this._initQueryEngine(t2), this._initAttributeStore(t2), this.pause(), await Promise.all([this._source.update(e2, t2.schema.source), this.featureStore.updateSchema(e2, t2.schema.targets.feature), this.attributeStore.update(e2, t2), this.attributeStore.updateFilters(e2, t2, this)]), this._initAggregateStore(t2), r$1(this.aggregateStore) && await this.aggregateStore.updateSchema(e2, t2.schema.targets.aggregate), this._initAggregateQueryEngine(this.aggregateStore, t2.schema), has("esri-2d-update-debug") && e2.describe(), this._set("config", t2);
  }
  async applyUpdate(e2) {
    e2.version = this._updateVersion, has("esri-2d-update-debug") && console.debug(`Applying update ${e2.version}`), e2.mesh && this.clearTiles(), this._updateQueue.resume(), await this._source.applyUpdate(e2), this.notifyChange("updating"), await j$2(() => !this.updating), r$1(this.aggregateStore) && (await U$2(10), await j$2(() => !this.updating));
  }
  async onEdits({ edits: e2 }) {
    has("esri-2d-update-debug") && console.debug("Applying Edit:", e2), this._didEdit = true;
    try {
      const t2 = e2.removed.map((e3) => e3.objectId && e3.objectId !== -1 ? e3.objectId : this._lookupObjectIdByGlobalId(e3.globalId)), r2 = e2.addOrModified.map(({ objectId: e3 }) => e3);
      this.featureStore.invalidate(), await this._source.edit(r2, t2), this.clearTiles(), this.notifyChange("updating"), r$1(this.aggregateStore) && this.aggregateStore.clear(), await this._source.resend(), await j$2(() => !this.updating);
    } catch (t2) {
    }
  }
  async refresh(e2) {
    if (!e2.dataChanged) {
      const e3 = t.empty();
      return e3.storage.filters = true, this.applyUpdate(e3);
    }
    this.featureStore.invalidate(), this.clearTiles(), this._source.refresh(this._updateVersion, e2), this._cleanupNeeded = true, this.notifyChange("updating"), await j$2(() => !this.updating);
  }
  clearTiles() {
    for (const e2 of this.tileStore.tiles)
      this.processor.onTileClear(e2);
  }
  onTileUpdate(e2) {
    r$1(this.aggregateStore) && this.aggregateStore.onTileUpdate(e2);
    for (const t2 of e2.added)
      this._source.subscribe(t2, this._updateVersion), this._level = t2.level;
    for (const t2 of e2.removed)
      this._source.unsubscribe(t2), this._cleanupNeeded = true, this._tileToResolver.has(t2.id) && (this._tileToResolver.get(t2.id).resolve(), this._tileToResolver.delete(t2.id));
    this.notifyChange("updating");
  }
  async onIdle() {
    this._invalidated && (this._invalidated = false, (r$1(this.aggregateStore) || this.processor.type === "heatmap") && await this._repushCurrentLevelTiles()), this._markAndSweep();
  }
  async querySummaryStatistics({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForSummaryStatistics(e2, t2);
  }
  async queryAggregateSummaryStatistics({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForSummaryStatistics(e2, t2);
  }
  async queryUniqueValues({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForUniqueValues(e2, t2);
  }
  async queryAggregateUniqueValues({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForUniqueValues(e2, t2);
  }
  async queryClassBreaks({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForClassBreaks(e2, t2);
  }
  async queryAggregateClassBreaks({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForClassBreaks(e2, t2);
  }
  async queryHistogram({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForHistogram(e2, t2);
  }
  async queryAggregateHistogram({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForHistogram(e2, t2);
  }
  queryExtent(e2) {
    return this.featureQueryEngine.executeQueryForExtent(e2);
  }
  queryAggregates(e2) {
    return this.aggregateQueryEngine.executeQuery(e2);
  }
  queryAggregateCount(e2) {
    return this.aggregateQueryEngine.executeQueryForCount(e2);
  }
  queryAggregateIds(e2) {
    return this.aggregateQueryEngine.executeQueryForIds(e2);
  }
  queryFeatures(e2) {
    return this.featureQueryEngine.executeQuery(e2);
  }
  async queryVisibleFeatures(e2) {
    const t2 = await this.featureQueryEngine.executeQuery(e2), r2 = t2.objectIdFieldName;
    return t2.features = t2.features.filter((e3) => {
      const t3 = e3.attributes[r2], i2 = this.getDisplayId(t3);
      return o$3(i2, (e4) => this.attributeStore.isVisible(e4));
    }), t2;
  }
  queryFeatureCount(e2) {
    return this.featureQueryEngine.executeQueryForCount(e2);
  }
  queryLatestObservations(e2) {
    return this.featureQueryEngine.executeQueryForLatestObservations(e2);
  }
  queryObjectIds(e2) {
    return this.featureQueryEngine.executeQueryForIds(e2);
  }
  async queryStatistics() {
    return this.featureStore.storeStatistics;
  }
  getObjectId(e2) {
    return this.featureStore.lookupObjectId(e2, this._storage);
  }
  getDisplayId(e2) {
    if (r$1(this.aggregateStore)) {
      const t2 = this.aggregateStore.getDisplayId(e2);
      if (t$1(t2)) {
        const t3 = this.featureStore.lookupDisplayId(e2);
        return this.aggregateStore.getDisplayIdForReferenceId(t3);
      }
      return t2;
    }
    return this.featureStore.lookupDisplayId(e2);
  }
  getFeatures(e2) {
    const t2 = [], r2 = [];
    for (const s2 of e2) {
      const e3 = r$1(this.aggregateStore) ? this.getAggregate(s2) : null;
      if (r$1(e3))
        if (r$1(e3.attributes.referenceId)) {
          const r3 = this.getFeature(e3.attributes.referenceId);
          r$1(r3) && t2.push(r3);
        } else
          r2.push(e3);
      else {
        const e4 = this.getFeature(s2);
        r$1(e4) && t2.push(e4);
      }
    }
    return { features: t2, aggregates: r2 };
  }
  getFeature(e2) {
    const t2 = this.featureStore.lookupFeatureByDisplayId(e2, this._storage);
    if (t$1(t2))
      return null;
    const s2 = t2.readHydratedGeometry(), i2 = rt(s2, t2.geometryType, t2.hasZ, t2.hasM);
    return { attributes: t2.readAttributes(), geometry: i2 };
  }
  getAggregate(e2) {
    return t$1(this.aggregateStore) ? null : this.aggregateStore.getAggregate(e2);
  }
  getAggregates() {
    return t$1(this.aggregateStore) ? [] : this.aggregateStore.getAggregates();
  }
  async setHighlight(e2) {
    const t2 = m$4(e2.map((e3) => this.getDisplayId(e3)));
    return this.attributeStore.setHighlight(e2, t2);
  }
  _lookupObjectIdByGlobalId(e2) {
    const t2 = this.service.globalIdField;
    if (t$1(t2))
      throw new Error("Expected globalIdField to be defined");
    let s2 = null;
    if (this.featureStore.forEach((r2) => {
      e2 === r2.readAttribute(t2) && (s2 = r2.getObjectId());
    }), t$1(s2))
      throw new Error(`Expected to find a feature with globalId ${e2}`);
    return s2;
  }
  async _repushCurrentLevelTiles() {
    const e2 = this.tileStore.tiles.filter((e3) => e3.level === this._level);
    e2.map(async (e3) => this._patchTile({ type: "append", id: e3.key.id, clear: true, addOrUpdate: null, end: false }));
    const t$12 = e2.map(async (e3) => this._patchTile({ type: "append", id: e3.key.id, addOrUpdate: c$4.fromOptimizedFeatures([], this.service), remove: [], end: true, isRepush: true, status: t.empty() }));
    await Promise.all(t$12);
  }
  _maybeForceCleanup() {
    performance.now() - this._lastCleanup > F && this._markAndSweep();
  }
  _patchTile(e2, t2) {
    const r2 = this._updateQueue.push(e2, t2).then(() => {
      this.notifyChange("updating");
    }).catch((e3) => {
      this.notifyChange("updating");
    });
    return this.notifyChange("updating"), r2;
  }
  async _onTileMessage(e2, t2) {
    if (f$3(t2), has("esri-2d-update-debug")) {
      const t3 = o$3(e2.addOrUpdate, (e3) => e3.hasFeatures);
      console.debug(e2.id, `FeatureController:onTileMessage: [clear:${e2.clear}, end:${e2.end}, features: ${t3}]`);
    }
    const a2 = this.tileStore.get(e2.id);
    if (!a2)
      return;
    if (e2.clear)
      return this.processor.onTileClear(a2);
    const o2 = e2.status;
    this._cleanupNeeded = true;
    const n2 = [];
    for (const r2 of e2.remove) {
      const e3 = this.featureStore.lookupDisplayId(r2);
      e3 && n2.push(e3);
    }
    e2.remove = n2;
    try {
      if (t$1(e2.addOrUpdate))
        return void this.processor.onTileMessage(a2, __spreadProps(__spreadValues({}, e2), { addOrUpdate: null }), r$1(this.aggregateStore), t2).catch(b$3);
      if (e2.addOrUpdate.setArcadeSpatialReference(this.spatialReference), this.featureStore.hasInstance(e2.addOrUpdate.instance) && o2.targets.feature || (o2.targets.feature = true, this.featureStore.onTileData(a2, e2)), !o2.storage.data || !o2.storage.filters) {
        o2.storage.data = true, o2.storage.filters = true, this.attributeStore.onTileData(a2, e2);
        this._source.type === "geoevent" || this._didEdit ? (await this.attributeStore.sendUpdates(), f$3(t2)) : this.attributeStore.sendUpdates();
      }
      if (r$1(this.aggregateStore) && !o2.targets.aggregate) {
        o2.targets.aggregate = true;
        const t3 = A(this._source) && this._source.loading, r2 = !A(this._source) || t3 || e2.end;
        if (this.aggregateStore.onTileData(a2, e2, this._storage, this.attributeStore, r2), !r2)
          return;
        o2.mesh || (this.attributeStore.onTileData(a2, e2), await this.attributeStore.sendUpdates());
      }
      if (!o2.mesh) {
        o2.mesh = true;
        const r2 = r$1(this.aggregateStore) && this.aggregateStore.type === "cluster";
        await this.processor.onTileMessage(a2, e2, r2, t2), f$3(t2);
      }
      this._maybeForceCleanup();
    } catch (h2) {
      b$3(h2);
    }
  }
  _mark(e2, t2, r2) {
    const s2 = (4294901760 & this._storage.getInstanceId(e2)) >>> 16;
    e2 && (t2.add(s2), r2.set(e2));
  }
  _markAndSweep() {
    this._lastCleanup = performance.now();
    if (!(!(this._source.type === "feature" && this._source.mode === "snapshot") && (this._source.type === "geoevent" || this._cleanupNeeded)))
      return;
    this._cleanupNeeded = false;
    const e2 = this._storage.getBitset(this._markedIdsBufId), t2 = new Set();
    e2.clear();
    for (const r2 of this.tileStore.tiles)
      for (const s2 of this._source.readers(r2.id)) {
        const r3 = s2.getCursor();
        for (; r3.next(); ) {
          let s3 = r3.getDisplayId();
          if (!s3) {
            const e3 = r3.getObjectId();
            s3 = this.featureStore.lookupDisplayId(e3);
          }
          this._mark(s3, t2, e2);
        }
      }
    this.processor.type === "symbol" && this.processor.forEachBufferId((r2) => {
      this._mark(r2, t2, e2);
    }), this._updateQueue.forEach((r2) => {
      for (const s2 of r2.remove) {
        const r3 = this.featureStore.lookupDisplayId(s2);
        this._mark(r3, t2, e2);
      }
    }), r$1(this.aggregateStore) && (this.aggregateStore.sweepFeatures(e2, this.featureStore), "sweepAggregates" in this.aggregateStore && this.aggregateStore.sweepAggregates(this._storage, this.attributeStore, this._level)), this.featureStore.sweepFeatures(e2, this._storage, this.attributeStore), this.featureStore.sweepFeatureSets(t2);
  }
};
e$1([y$4({ constructOnly: true })], U.prototype, "tileStore", void 0), e$1([y$4()], U.prototype, "config", void 0), e$1([y$4({ readOnly: true })], U.prototype, "fieldsIndex", null), e$1([y$4()], U.prototype, "processor", void 0), e$1([y$4({ constructOnly: true })], U.prototype, "remoteClient", void 0), e$1([y$4({ constructOnly: true })], U.prototype, "service", void 0), e$1([y$4()], U.prototype, "spatialReference", null), e$1([y$4()], U.prototype, "updating", null), U = e$1([n$5("esri.views.2d.layers.features.controllers.FeatureController2D")], U);
const q = U;
let d = class extends d$6 {
  constructor() {
    super(...arguments), this.controller = null, this.processor = null, this.remoteClient = null, this.tileStore = null, this.service = null, this.viewState = null, this._paused = false, this._pendingTileUpdates = [];
  }
  initialize() {
    this.handles.add(l$6(() => this.updating, (e2) => {
      this.remoteClient.invoke("setUpdating", e2).catch((e3) => {
      });
    }));
  }
  destroy() {
    var _a, _b;
    this.stop(), (_a = this.controller) == null ? void 0 : _a.destroy(), (_b = this.processor) == null ? void 0 : _b.destroy(), this.controller = this.processor = this.tileStore = this.remoteClient = null;
  }
  get updating() {
    return !this.controller || this.controller.updating;
  }
  stop() {
    var _a, _b, _c;
    this._paused = true, Array.isArray((_a = this.service) == null ? void 0 : _a.source) && (this.service.source.forEach((e2) => e2.close()), this.service.source.length = 0), (_b = this.tileStore) == null ? void 0 : _b.updateTiles({ added: [], removed: this.tileStore.tiles.map((e2) => e2.id) }), (_c = this.tileStore) == null ? void 0 : _c.destroy(), this.tileStore = null, this._pendingTileUpdates.length = 0;
  }
  async startup({ service: e2, config: t2, tileInfo: r2, tiles: s2 }) {
    var _a, _b, _c;
    if (this._paused = true, Array.isArray((_a = this.service) == null ? void 0 : _a.source) && (this.service.source.forEach((e3) => e3.close()), this.service.source.length = 0), this.service = e2, !this.tileStore || !E$1(this.tileStore.tileScheme.spatialReference, r2.spatialReference)) {
      const e3 = new h$4(j$3.fromJSON(r2));
      s2.added.length = s2.removed.length = 0, (_b = this.tileStore) == null ? void 0 : _b.updateTiles({ added: [], removed: this.tileStore.tiles.map((e4) => e4.id) }), (_c = this.tileStore) == null ? void 0 : _c.destroy(), this.tileStore = new d$7(e3), this._pendingTileUpdates.length = 0;
    }
    for (await this._createProcessorAndController(t2), await this.update({ config: t2 }), this.controller.resume(), this.tileStore.clear(), this.tileStore.updateTiles(s2), this._paused = false; this._pendingTileUpdates.length; )
      this.tileStore.updateTiles(this._pendingTileUpdates.pop());
  }
  async updateTiles(e2) {
    this._paused ? this._pendingTileUpdates.push(e2) : this.tileStore.updateTiles(e2);
  }
  async update({ config: e2 }) {
    const t$12 = t.empty();
    return await Promise.all([this.processor.update(t$12, e2), this.controller.update(t$12, e2)]), t$12.toJSON();
  }
  async applyUpdate(e2) {
    return this.controller.applyUpdate(t.create(e2));
  }
  async _createProcessorAndController(e2) {
    await Promise.all([this._handleControllerConfig(e2), this._handleProcessorConfig(e2)]), this.controller.processor = this.processor;
  }
  async _handleControllerConfig(e2) {
    return this._createController(this.service, e2);
  }
  async _handleProcessorConfig(e2) {
    return this._createProcessor(this.service, e2);
  }
  async _createController(e2, t2) {
    this.controller && this.controller.destroy();
    const { tileStore: r2, remoteClient: s2 } = this, o2 = new q({ service: e2, tileStore: r2, remoteClient: s2 });
    return this.controller = o2, o2;
  }
  async _createProcessor(e2, t2) {
    const r2 = t2.schema.processors[0].type, s2 = (await o$2(r2)).default, { remoteClient: o2, tileStore: i2 } = this, l2 = new s2({ service: e2, config: t2, tileStore: i2, remoteClient: o2 });
    return this.processor && this.processor.destroy(), this.processor = l2, l2;
  }
};
e$1([y$4()], d.prototype, "controller", void 0), e$1([y$4()], d.prototype, "processor", void 0), e$1([y$4()], d.prototype, "updating", null), e$1([y$4()], d.prototype, "viewState", void 0), d = e$1([n$5("esri.views.2d.layers.features.Pipeline")], d);
const u = d;
export { u as default };
