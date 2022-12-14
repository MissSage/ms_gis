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
import { g as s$1 } from "./index.js";
import { S as S$1, b as E$1, l as A$1, q as _$1 } from "./Utils2.js";
var e, t;
function r(t2) {
  switch (t2) {
    case "left":
      return e.Left;
    case "right":
      return e.Right;
    case "center":
      return e.Center;
  }
}
function n$1(e2) {
  switch (e2) {
    case "top":
      return t.Top;
    case "middle":
      return t.Center;
    case "baseline":
      return t.Baseline;
    case "bottom":
      return t.Bottom;
  }
}
function a(r2) {
  switch (r2) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return [e.Right, t.Bottom];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return [e.Center, t.Bottom];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return [e.Left, t.Bottom];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return [e.Right, t.Center];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return [e.Center, t.Center];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return [e.Left, t.Center];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return [e.Right, t.Top];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return [e.Center, t.Top];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return [e.Left, t.Top];
    default:
      return console.debug(`Found invalid placement type ${r2}`), [e.Center, t.Center];
  }
}
function c$1(t2) {
  switch (t2) {
    case e.Right:
      return -1;
    case e.Center:
      return 0;
    case e.Left:
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${t2}`), 0;
  }
}
function o$1(e2) {
  switch (e2) {
    case t.Top:
      return 1;
    case t.Center:
      return 0;
    case t.Bottom:
    case t.Baseline:
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${e2}`), 0;
  }
}
function s(t2) {
  switch (t2) {
    case "left":
      return e.Left;
    case "right":
      return e.Right;
    case "center":
      return e.Center;
  }
}
function i(e2) {
  switch (e2) {
    case "above-along":
    case "below-along":
    case "center-along":
    case "esriServerLinePlacementAboveAlong":
    case "esriServerLinePlacementBelowAlong":
    case "esriServerLinePlacementCenterAlong":
      return true;
    default:
      return false;
  }
}
!function(e2) {
  e2[e2.Left = -1] = "Left", e2[e2.Center = 0] = "Center", e2[e2.Right = 1] = "Right";
}(e || (e = {})), function(e2) {
  e2[e2.Top = 1] = "Top", e2[e2.Center = 0] = "Center", e2[e2.Bottom = -1] = "Bottom", e2[e2.Baseline = 2] = "Baseline";
}(t || (t = {}));
function n(t2, e2, s2) {
  const n2 = A$1.SIZE_FIELD_STOPS | A$1.SIZE_MINMAX_VALUE | A$1.SIZE_SCALE_STOPS | A$1.SIZE_UNIT_VALUE, o2 = (e2 & (_$1.FIELD_TARGETS_OUTLINE | _$1.MINMAX_TARGETS_OUTLINE | _$1.SCALE_TARGETS_OUTLINE | _$1.UNIT_TARGETS_OUTLINE)) >>> 4;
  return t2 === E$1.LINE && s2.isOutline || t2 === E$1.FILL && _(s2.symbologyType) ? n2 & o2 : n2 & ~o2;
}
const o = 0, v = 8, l = 7, h = 8, S = 11, u = 11, p = 12, c = 13, y = 14, V = 15, d = 16, g = 17, T = 18, m = 19, z = 20, E = 21, L = 26, M = Object.keys(S$1).filter((t2) => typeof S$1[t2] == "number").reduce((t2, e2) => __spreadProps(__spreadValues({}, t2), { [e2]: S$1[e2] }), {});
function I(t2) {
  return t2 === S$1.SIMPLE || t2 === S$1.OUTLINE_FILL_SIMPLE;
}
function _(t2) {
  return t2 === S$1.OUTLINE_FILL || t2 === S$1.OUTLINE_FILL_SIMPLE;
}
function b(t2) {
  return I(t2.symbologyType);
}
function O(t2) {
  return _(t2.symbologyType);
}
function f(t2, e2) {
  switch (t2) {
    case E$1.FILL:
      return w.from(e2);
    case E$1.LINE:
      return C.from(e2);
    case E$1.MARKER:
      return N.from(e2);
    case E$1.TEXT:
      return P.from(e2);
    case E$1.LABEL:
      return Z.from(e2);
    default:
      throw new Error(`Unable to createMaterialKey for unknown geometryType ${t2}`);
  }
}
function A(t2) {
  switch (U.load(t2).geometryType) {
    case E$1.MARKER:
      return new N(t2);
    case E$1.FILL:
      return new w(t2);
    case E$1.LINE:
      return new C(t2);
    case E$1.TEXT:
      return new P(t2);
    case E$1.LABEL:
      return new Z(t2);
  }
}
class U {
  constructor(t2) {
    this._data = 0, this._data = t2;
  }
  static load(t2) {
    const e2 = this.shared;
    return e2.data = t2, e2;
  }
  set data(t2) {
    this._data = t2;
  }
  get data() {
    return this._data;
  }
  get geometryType() {
    return this.bits(h, S);
  }
  set geometryType(t2) {
    this.setBits(t2, h, S);
  }
  get mapAligned() {
    return !!this.bit(z);
  }
  set mapAligned(t2) {
    this.setBit(z, t2);
  }
  get sdf() {
    return !!this.bit(u);
  }
  set sdf(t2) {
    this.setBit(u, t2);
  }
  get pattern() {
    return !!this.bit(p);
  }
  set pattern(t2) {
    this.setBit(p, t2);
  }
  get textureBinding() {
    return this.bits(o, v);
  }
  set textureBinding(t2) {
    this.setBits(t2, o, v);
  }
  get symbologyType() {
    return this.bits(E, L);
  }
  set symbologyType(t2) {
    this.setBits(t2, E, L);
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
        throw new s$1(`Unable to handle unknown geometryType: ${this.geometryType}`);
    }
  }
  setBit(t2, e2) {
    const s2 = 1 << t2;
    e2 ? this._data |= s2 : this._data &= ~s2;
  }
  bit(t2) {
    return (this._data & 1 << t2) >> t2;
  }
  setBits(t2, e2, s2) {
    for (let i2 = e2, a2 = 0; i2 < s2; i2++, a2++)
      this.setBit(i2, (t2 & 1 << a2) != 0);
  }
  bits(t2, e2) {
    let s2 = 0;
    for (let i2 = t2, a2 = 0; i2 < e2; i2++, a2++)
      s2 |= this.bit(i2) << a2;
    return s2;
  }
  hasVV() {
    return false;
  }
  setVV(t2, e2) {
  }
  getVariation() {
    return { mapAligned: this.mapAligned, pattern: this.pattern, sdf: this.sdf, symbologyType: { value: S$1[this.symbologyType], options: M, namespace: "SYMBOLOGY_TYPE" } };
  }
  getVariationHash() {
    return this._data & ~(l & this.textureBinding);
  }
}
U.shared = new U(0);
const F = (t2) => class extends t2 {
  get vvSizeMinMaxValue() {
    return this.bit(d) !== 0;
  }
  set vvSizeMinMaxValue(t3) {
    this.setBit(d, t3);
  }
  get vvSizeScaleStops() {
    return this.bit(g) !== 0;
  }
  set vvSizeScaleStops(t3) {
    this.setBit(g, t3);
  }
  get vvSizeFieldStops() {
    return this.bit(T) !== 0;
  }
  set vvSizeFieldStops(t3) {
    this.setBit(T, t3);
  }
  get vvSizeUnitValue() {
    return this.bit(m) !== 0;
  }
  set vvSizeUnitValue(t3) {
    this.setBit(m, t3);
  }
  hasVV() {
    return super.hasVV() || this.vvSizeMinMaxValue || this.vvSizeScaleStops || this.vvSizeFieldStops || this.vvSizeUnitValue;
  }
  setVV(t3, e2) {
    super.setVV(t3, e2);
    const s2 = n(this.geometryType, t3, e2) & t3;
    this.vvSizeMinMaxValue = !!(s2 & A$1.SIZE_MINMAX_VALUE), this.vvSizeFieldStops = !!(s2 & A$1.SIZE_FIELD_STOPS), this.vvSizeUnitValue = !!(s2 & A$1.SIZE_UNIT_VALUE), this.vvSizeScaleStops = !!(s2 & A$1.SIZE_SCALE_STOPS);
  }
}, x = (t2) => class extends t2 {
  get vvRotation() {
    return this.bit(V) !== 0;
  }
  set vvRotation(t3) {
    this.setBit(V, t3);
  }
  hasVV() {
    return super.hasVV() || this.vvRotation;
  }
  setVV(t3, e2) {
    super.setVV(t3, e2), this.vvRotation = !e2.isOutline && !!(t3 & A$1.ROTATION);
  }
}, B = (t2) => class extends t2 {
  get vvColor() {
    return this.bit(c) !== 0;
  }
  set vvColor(t3) {
    this.setBit(c, t3);
  }
  hasVV() {
    return super.hasVV() || this.vvColor;
  }
  setVV(t3, e2) {
    super.setVV(t3, e2), this.vvColor = !e2.isOutline && !!(t3 & A$1.COLOR);
  }
}, R = (t2) => class extends t2 {
  get vvOpacity() {
    return this.bit(y) !== 0;
  }
  set vvOpacity(t3) {
    this.setBit(y, t3);
  }
  hasVV() {
    return super.hasVV() || this.vvOpacity;
  }
  setVV(t3, e2) {
    super.setVV(t3, e2), this.vvOpacity = !e2.isOutline && !!(t3 & A$1.OPACITY);
  }
};
class w extends B(R(F(U))) {
  static load(t2) {
    const e2 = this.shared;
    return e2.data = t2, e2;
  }
  static from(t2) {
    const { symbologyType: e2, vvFlags: a2 } = t2, r2 = this.load(0);
    return r2.geometryType = E$1.FILL, r2.symbologyType = e2, e2 !== S$1.DOT_DENSITY && r2.setVV(a2, t2), r2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
w.shared = new w(0);
class N extends B(R(x(F(U)))) {
  static load(t2) {
    const e2 = this.shared;
    return e2.data = t2, e2;
  }
  static from(t2) {
    const { symbologyType: e2, vvFlags: a2 } = t2, r2 = this.load(0);
    return r2.geometryType = E$1.MARKER, r2.symbologyType = e2, e2 !== S$1.HEATMAP && r2.setVV(a2, t2), r2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvRotation: this.vvRotation, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
N.shared = new N(0);
class C extends B(R(F(U))) {
  static load(t2) {
    const e2 = this.shared;
    return e2.data = t2, e2;
  }
  static from(t2) {
    const e2 = this.load(0);
    return e2.geometryType = E$1.LINE, e2.symbologyType = t2.symbologyType, e2.setVV(t2.vvFlags, t2), e2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
C.shared = new C(0);
class P extends B(R(x(F(U)))) {
  static load(t2) {
    const e2 = this.shared;
    return e2.data = t2, e2;
  }
  static from(t2) {
    const e2 = this.load(0);
    return e2.geometryType = E$1.TEXT, e2.symbologyType = t2.symbologyType, e2.setVV(t2.vvFlags, t2), e2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvRotation: this.vvRotation, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
P.shared = new P(0);
class Z extends F(U) {
  static load(t2) {
    const e2 = this.shared;
    return e2.data = t2, e2;
  }
  static from(t2) {
    const s2 = this.load(0);
    return s2.geometryType = E$1.LABEL, s2.symbologyType = t2.symbologyType, s2.setVV(t2.vvFlags, t2), s2.mapAligned = i(t2.placement), s2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
Z.shared = new Z(0);
export { A, C, N, O, P, U, Z, _, a, b, c$1 as c, e, f, i, n$1 as n, o$1 as o, r, s, t, w };
