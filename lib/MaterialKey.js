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
import { ew as s } from "./index.js";
import { i } from "./alignmentUtils.js";
import { S as S$1, b as E$1, k as A$1, o as _$1 } from "./Utils2.js";
function n(t, e, s2) {
  const n2 = A$1.SIZE_FIELD_STOPS | A$1.SIZE_MINMAX_VALUE | A$1.SIZE_SCALE_STOPS | A$1.SIZE_UNIT_VALUE, o2 = (e & (_$1.FIELD_TARGETS_OUTLINE | _$1.MINMAX_TARGETS_OUTLINE | _$1.SCALE_TARGETS_OUTLINE | _$1.UNIT_TARGETS_OUTLINE)) >>> 4;
  return t === E$1.LINE && s2.isOutline || t === E$1.FILL && _(s2.symbologyType) ? n2 & o2 : n2 & ~o2;
}
const o = 0, v = 8, l = 7, h = 8, S = 11, u = 11, p = 12, c = 13, y = 14, V = 15, d = 16, g = 17, T = 18, m = 19, z = 20, E = 21, L = 26, M = Object.keys(S$1).filter((t) => typeof S$1[t] == "number").reduce((t, e) => __spreadProps(__spreadValues({}, t), { [e]: S$1[e] }), {});
function I(t) {
  return t === S$1.SIMPLE || t === S$1.OUTLINE_FILL_SIMPLE;
}
function _(t) {
  return t === S$1.OUTLINE_FILL || t === S$1.OUTLINE_FILL_SIMPLE;
}
function b(t) {
  return I(t.symbologyType);
}
function O(t) {
  return _(t.symbologyType);
}
function f(t, e) {
  switch (t) {
    case E$1.FILL:
      return w.from(e);
    case E$1.LINE:
      return C.from(e);
    case E$1.MARKER:
      return N.from(e);
    case E$1.TEXT:
      return P.from(e);
    case E$1.LABEL:
      return Z.from(e);
    default:
      throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`);
  }
}
function A(t) {
  switch (U.load(t).geometryType) {
    case E$1.MARKER:
      return new N(t);
    case E$1.FILL:
      return new w(t);
    case E$1.LINE:
      return new C(t);
    case E$1.TEXT:
      return new P(t);
    case E$1.LABEL:
      return new Z(t);
  }
}
class U {
  constructor(t) {
    this._data = 0, this._data = t;
  }
  static load(t) {
    const e = this.shared;
    return e.data = t, e;
  }
  set data(t) {
    this._data = t;
  }
  get data() {
    return this._data;
  }
  get geometryType() {
    return this.bits(h, S);
  }
  set geometryType(t) {
    this.setBits(t, h, S);
  }
  get mapAligned() {
    return !!this.bit(z);
  }
  set mapAligned(t) {
    this.setBit(z, t);
  }
  get sdf() {
    return !!this.bit(u);
  }
  set sdf(t) {
    this.setBit(u, t);
  }
  get pattern() {
    return !!this.bit(p);
  }
  set pattern(t) {
    this.setBit(p, t);
  }
  get textureBinding() {
    return this.bits(o, v);
  }
  set textureBinding(t) {
    this.setBits(t, o, v);
  }
  get symbologyType() {
    return this.bits(E, L);
  }
  set symbologyType(t) {
    this.setBits(t, E, L);
  }
  get geometryTypeString() {
    switch (this.geometryType) {
      case E$1.FILL:
        return "fill";
      case E$1.MARKER:
        return "marker";
      case E$1.LINE:
        return "line";
      case E$1.TEXT:
        return "text";
      case E$1.LABEL:
        return "label";
      default:
        throw new s(`Unable to handle unknown geometryType: ${this.geometryType}`);
    }
  }
  setBit(t, e) {
    const s2 = 1 << t;
    e ? this._data |= s2 : this._data &= ~s2;
  }
  bit(t) {
    return (this._data & 1 << t) >> t;
  }
  setBits(t, e, s2) {
    for (let i2 = e, a = 0; i2 < s2; i2++, a++)
      this.setBit(i2, (t & 1 << a) != 0);
  }
  bits(t, e) {
    let s2 = 0;
    for (let i2 = t, a = 0; i2 < e; i2++, a++)
      s2 |= this.bit(i2) << a;
    return s2;
  }
  hasVV() {
    return false;
  }
  setVV(t, e) {
  }
  getVariation() {
    return { mapAligned: this.mapAligned, pattern: this.pattern, sdf: this.sdf, symbologyType: { value: S$1[this.symbologyType], options: M, namespace: "SYMBOLOGY_TYPE" } };
  }
  getVariationHash() {
    return this._data & ~(l & this.textureBinding);
  }
}
U.shared = new U(0);
const F = (t) => class extends t {
  get vvSizeMinMaxValue() {
    return this.bit(d) !== 0;
  }
  set vvSizeMinMaxValue(t2) {
    this.setBit(d, t2);
  }
  get vvSizeScaleStops() {
    return this.bit(g) !== 0;
  }
  set vvSizeScaleStops(t2) {
    this.setBit(g, t2);
  }
  get vvSizeFieldStops() {
    return this.bit(T) !== 0;
  }
  set vvSizeFieldStops(t2) {
    this.setBit(T, t2);
  }
  get vvSizeUnitValue() {
    return this.bit(m) !== 0;
  }
  set vvSizeUnitValue(t2) {
    this.setBit(m, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvSizeMinMaxValue || this.vvSizeScaleStops || this.vvSizeFieldStops || this.vvSizeUnitValue;
  }
  setVV(t2, e) {
    super.setVV(t2, e);
    const s2 = n(this.geometryType, t2, e) & t2;
    this.vvSizeMinMaxValue = !!(s2 & A$1.SIZE_MINMAX_VALUE), this.vvSizeFieldStops = !!(s2 & A$1.SIZE_FIELD_STOPS), this.vvSizeUnitValue = !!(s2 & A$1.SIZE_UNIT_VALUE), this.vvSizeScaleStops = !!(s2 & A$1.SIZE_SCALE_STOPS);
  }
}, x = (t) => class extends t {
  get vvRotation() {
    return this.bit(V) !== 0;
  }
  set vvRotation(t2) {
    this.setBit(V, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvRotation;
  }
  setVV(t2, e) {
    super.setVV(t2, e), this.vvRotation = !e.isOutline && !!(t2 & A$1.ROTATION);
  }
}, B = (t) => class extends t {
  get vvColor() {
    return this.bit(c) !== 0;
  }
  set vvColor(t2) {
    this.setBit(c, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvColor;
  }
  setVV(t2, e) {
    super.setVV(t2, e), this.vvColor = !e.isOutline && !!(t2 & A$1.COLOR);
  }
}, R = (t) => class extends t {
  get vvOpacity() {
    return this.bit(y) !== 0;
  }
  set vvOpacity(t2) {
    this.setBit(y, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvOpacity;
  }
  setVV(t2, e) {
    super.setVV(t2, e), this.vvOpacity = !e.isOutline && !!(t2 & A$1.OPACITY);
  }
};
class w extends B(R(F(U))) {
  static load(t) {
    const e = this.shared;
    return e.data = t, e;
  }
  static from(t) {
    const { symbologyType: e, vvFlags: a } = t, r = this.load(0);
    return r.geometryType = E$1.FILL, r.symbologyType = e, e !== S$1.DOT_DENSITY && r.setVV(a, t), r.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
w.shared = new w(0);
class N extends B(R(x(F(U)))) {
  static load(t) {
    const e = this.shared;
    return e.data = t, e;
  }
  static from(t) {
    const { symbologyType: e, vvFlags: a } = t, r = this.load(0);
    return r.geometryType = E$1.MARKER, r.symbologyType = e, e !== S$1.HEATMAP && r.setVV(a, t), r.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvRotation: this.vvRotation, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
N.shared = new N(0);
class C extends B(R(F(U))) {
  static load(t) {
    const e = this.shared;
    return e.data = t, e;
  }
  static from(t) {
    const e = this.load(0);
    return e.geometryType = E$1.LINE, e.symbologyType = t.symbologyType, e.setVV(t.vvFlags, t), e.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
C.shared = new C(0);
class P extends B(R(x(F(U)))) {
  static load(t) {
    const e = this.shared;
    return e.data = t, e;
  }
  static from(t) {
    const e = this.load(0);
    return e.geometryType = E$1.TEXT, e.symbologyType = t.symbologyType, e.setVV(t.vvFlags, t), e.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvRotation: this.vvRotation, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
P.shared = new P(0);
class Z extends F(U) {
  static load(t) {
    const e = this.shared;
    return e.data = t, e;
  }
  static from(t) {
    const s2 = this.load(0);
    return s2.geometryType = E$1.LABEL, s2.symbologyType = t.symbologyType, s2.setVV(t.vvFlags, t), s2.mapAligned = i(t.placement), s2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
Z.shared = new Z(0);
export { A, C, N, O, P, U, Z, _, b, f, w };
