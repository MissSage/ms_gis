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
import { N as N$3, S as S$2, T as T$1, R as R$1, I as I$1 } from "./enums.js";
var n, e$1, N$2, O$1, t$1, i, u$1, a$2, c$2, l$2, C$1, D$1;
!function(n2) {
  n2[n2.None = 0] = "None", n2[n2.Front = 1] = "Front", n2[n2.Back = 2] = "Back", n2[n2.COUNT = 3] = "COUNT";
}(n || (n = {})), function(n2) {
  n2[n2.Less = 0] = "Less", n2[n2.Lequal = 1] = "Lequal", n2[n2.COUNT = 2] = "COUNT";
}(e$1 || (e$1 = {})), function(n2) {
  n2[n2.BACKGROUND = 0] = "BACKGROUND", n2[n2.UPDATE = 1] = "UPDATE";
}(N$2 || (N$2 = {})), function(n2) {
  n2[n2.NOT_LOADED = 0] = "NOT_LOADED", n2[n2.LOADING = 1] = "LOADING", n2[n2.LOADED = 2] = "LOADED";
}(O$1 || (O$1 = {})), function(n2) {
  n2[n2.IntegratedMeshMaskExcluded = 1] = "IntegratedMeshMaskExcluded", n2[n2.OutlineVisualElementMask = 2] = "OutlineVisualElementMask";
}(t$1 || (t$1 = {})), function(n2) {
  n2[n2.ASYNC = 0] = "ASYNC", n2[n2.SYNC = 1] = "SYNC";
}(i || (i = {})), function(n2) {
  n2[n2.Highlight = 0] = "Highlight", n2[n2.MaskOccludee = 1] = "MaskOccludee", n2[n2.COUNT = 2] = "COUNT";
}(u$1 || (u$1 = {})), function(n2) {
  n2[n2.Triangle = 0] = "Triangle", n2[n2.Point = 1] = "Point", n2[n2.Line = 2] = "Line";
}(a$2 || (a$2 = {})), function(n2) {
  n2[n2.STRETCH = 1] = "STRETCH", n2[n2.PAD = 2] = "PAD";
}(c$2 || (c$2 = {})), function(n2) {
  n2[n2.CHANGED = 0] = "CHANGED", n2[n2.UNCHANGED = 1] = "UNCHANGED";
}(l$2 || (l$2 = {})), function(n2) {
  n2[n2.Blend = 0] = "Blend", n2[n2.Opaque = 1] = "Opaque", n2[n2.Mask = 2] = "Mask", n2[n2.MaskBlend = 3] = "MaskBlend", n2[n2.COUNT = 4] = "COUNT";
}(C$1 || (C$1 = {})), function(n2) {
  n2[n2.OFF = 0] = "OFF", n2[n2.ON = 1] = "ON";
}(D$1 || (D$1 = {}));
function s$1(t2, e2, i2 = T$1.ADD, s2 = [0, 0, 0, 0]) {
  return { srcRgb: t2, srcAlpha: t2, dstRgb: e2, dstAlpha: e2, opRgb: i2, opAlpha: i2, color: { r: s2[0], g: s2[1], b: s2[2], a: s2[3] } };
}
function l$1(t2, e2, i2, s2, l2 = T$1.ADD, r2 = T$1.ADD, o2 = [0, 0, 0, 0]) {
  return { srcRgb: t2, srcAlpha: e2, dstRgb: i2, dstAlpha: s2, opRgb: l2, opAlpha: r2, color: { r: o2[0], g: o2[1], b: o2[2], a: o2[3] } };
}
const r$1 = { face: N$3.BACK, mode: S$2.CCW }, o$2 = { face: N$3.FRONT, mode: S$2.CCW }, h = (e2) => e2 === n.Back ? r$1 : e2 === n.Front ? o$2 : null, a$1 = { zNear: 0, zFar: 1 }, _$1 = { r: true, g: true, b: true, a: true };
function c$1(t2) {
  return T.intern(t2);
}
function d(t2) {
  return D.intern(t2);
}
function p(t2) {
  return C.intern(t2);
}
function u(t2) {
  return A$1.intern(t2);
}
function g(t2) {
  return w.intern(t2);
}
function f(t2) {
  return B.intern(t2);
}
function v(t2) {
  return z.intern(t2);
}
function I(t2) {
  return j.intern(t2);
}
function W(t2) {
  return N$1.intern(t2);
}
class S$1 {
  constructor(t2, e2) {
    this._makeKey = t2, this._makeRef = e2, this._interns = new Map();
  }
  intern(t2) {
    var _a;
    if (!t2)
      return null;
    const e2 = this._makeKey(t2), i2 = this._interns;
    return i2.has(e2) || i2.set(e2, this._makeRef(t2)), (_a = i2.get(e2)) != null ? _a : null;
  }
}
function b(t2) {
  return "[" + t2.join(",") + "]";
}
const T = new S$1(y, (t2) => __spreadValues({ __tag: "Blending" }, t2));
function y(t2) {
  return t2 ? b([t2.srcRgb, t2.srcAlpha, t2.dstRgb, t2.dstAlpha, t2.opRgb, t2.opAlpha, t2.color.r, t2.color.g, t2.color.b, t2.color.a]) : null;
}
const D = new S$1(O, (t2) => __spreadValues({ __tag: "Culling" }, t2));
function O(t2) {
  return t2 ? b([t2.face, t2.mode]) : null;
}
const C = new S$1(m, (t2) => __spreadValues({ __tag: "PolygonOffset" }, t2));
function m(t2) {
  return t2 ? b([t2.factor, t2.units]) : null;
}
const A$1 = new S$1(R, (t2) => __spreadValues({ __tag: "DepthTest" }, t2));
function R(t2) {
  return t2 ? b([t2.func]) : null;
}
const w = new S$1(k, (t2) => __spreadValues({ __tag: "StencilTest" }, t2));
function k(t2) {
  return t2 ? b([t2.function.func, t2.function.ref, t2.function.mask, t2.operation.fail, t2.operation.zFail, t2.operation.zPass]) : null;
}
const B = new S$1(P, (t2) => __spreadValues({ __tag: "DepthWrite" }, t2));
function P(t2) {
  return t2 ? b([t2.zNear, t2.zFar]) : null;
}
const z = new S$1(F, (t2) => __spreadValues({ __tag: "ColorWrite" }, t2));
function F(t2) {
  return t2 ? b([t2.r, t2.g, t2.b, t2.a]) : null;
}
const j = new S$1(K, (t2) => __spreadValues({ __tag: "StencilWrite" }, t2));
function K(t2) {
  return t2 ? b([t2.mask]) : null;
}
const N$1 = new S$1(x, (t2) => ({ blending: c$1(t2.blending), culling: d(t2.culling), polygonOffset: p(t2.polygonOffset), depthTest: u(t2.depthTest), stencilTest: g(t2.stencilTest), depthWrite: f(t2.depthWrite), colorWrite: v(t2.colorWrite), stencilWrite: I(t2.stencilWrite) }));
function x(t2) {
  return t2 ? b([y(t2.blending), O(t2.culling), m(t2.polygonOffset), R(t2.depthTest), k(t2.stencilTest), P(t2.depthWrite), F(t2.colorWrite), K(t2.stencilWrite)]) : null;
}
class M {
  constructor(t2) {
    this._pipelineInvalid = true, this._blendingInvalid = true, this._cullingInvalid = true, this._polygonOffsetInvalid = true, this._depthTestInvalid = true, this._stencilTestInvalid = true, this._depthWriteInvalid = true, this._colorWriteInvalid = true, this._stencilWriteInvalid = true, this._stateSetters = t2;
  }
  setPipeline(t2) {
    (this._pipelineInvalid || t2 !== this._pipeline) && (this._setBlending(t2.blending), this._setCulling(t2.culling), this._setPolygonOffset(t2.polygonOffset), this._setDepthTest(t2.depthTest), this._setStencilTest(t2.stencilTest), this._setDepthWrite(t2.depthWrite), this._setColorWrite(t2.colorWrite), this._setStencilWrite(t2.stencilWrite), this._pipeline = t2), this._pipelineInvalid = false;
  }
  invalidateBlending() {
    this._blendingInvalid = true, this._pipelineInvalid = true;
  }
  invalidateCulling() {
    this._cullingInvalid = true, this._pipelineInvalid = true;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  _setBlending(t2) {
    this._blending = this._setSubState(t2, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = false;
  }
  _setCulling(t2) {
    this._culling = this._setSubState(t2, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = false;
  }
  _setPolygonOffset(t2) {
    this._polygonOffset = this._setSubState(t2, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = false;
  }
  _setDepthTest(t2) {
    this._depthTest = this._setSubState(t2, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = false;
  }
  _setStencilTest(t2) {
    this._stencilTest = this._setSubState(t2, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = false;
  }
  _setDepthWrite(t2) {
    this._depthWrite = this._setSubState(t2, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = false;
  }
  _setColorWrite(t2) {
    this._colorWrite = this._setSubState(t2, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = false;
  }
  _setStencilWrite(t2) {
    this._stencilWrite = this._setSubState(t2, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = false;
  }
  _setSubState(t2, e2, i2, n2) {
    return (i2 || t2 !== e2) && (n2(t2), this._pipelineInvalid = true), t2;
  }
}
function t(t2, n2, o2) {
  for (let r2 = 0; r2 < o2; ++r2)
    n2[2 * r2] = t2[r2], n2[2 * r2 + 1] = t2[r2] - n2[2 * r2];
}
function o$1(t2, n2) {
  const o2 = t2.length;
  for (let r2 = 0; r2 < o2; ++r2)
    e[0] = t2[r2], n2[r2] = e[0];
  return n2;
}
function r(t2, n2) {
  const o2 = t2.length;
  for (let r2 = 0; r2 < o2; ++r2)
    e[0] = t2[r2], e[1] = t2[r2] - e[0], n2[r2] = e[1];
  return n2;
}
const e = new Float32Array(2);
var o;
!function(o2) {
  o2[o2.Color = 0] = "Color", o2[o2.Alpha = 1] = "Alpha", o2[o2.FrontFace = 2] = "FrontFace", o2[o2.NONE = 3] = "NONE", o2[o2.COUNT = 4] = "COUNT";
}(o || (o = {}));
const c = l$1(R$1.SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE_MINUS_SRC_ALPHA), N = s$1(R$1.ONE, R$1.ONE), s = s$1(R$1.ZERO, R$1.ONE_MINUS_SRC_ALPHA);
function A(r2) {
  return r2 === o.FrontFace ? null : r2 === o.Alpha ? s : N;
}
const S = 5e5, _ = { factor: -1, units: -2 };
function a(n2) {
  return n2 ? _ : null;
}
function l(r2, e2 = I$1.LESS) {
  return r2 === o.NONE || r2 === o.FrontFace ? e2 : I$1.LEQUAL;
}
export { A, C$1 as C, M, O$1 as O, S, W, _$1 as _, a$2 as a, t$1 as b, c$2 as c, o as d, e$1 as e, c as f, a$1 as g, h, a as i, l, n, o$1 as o, r, s, t };
