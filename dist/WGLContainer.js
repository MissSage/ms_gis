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
import { F as e$3, t as t$5, a as r$3, r as r$4, ca as f$1, aU as r$6, M as M$2, aW as t$6, J as h$3, cb as b$1, aV as i$2, b4 as i$3, e as a$2, b6 as t$8, b1 as f$2, g as s$7, s as s$8, p as f$3, B as n$6, cc as K$1, aA as t$9, cd as J, z as r$8, af as n$8, R as l$6 } from "./index.js";
import { I, M as M$1, P, U, G, L, D, o as o$4, F, C, E as E$3, R, O as O$2, Y, V, B as B$2, _ as _$2, N as N$2 } from "./enums.js";
import { s as s$4 } from "./pixelUtils.js";
import { r as r$5, p as p$4, s as s$5, i as i$4 } from "./utils.js";
import { E as E$1 } from "./Texture.js";
import { E as E$2, a as a$1, s as s$6, x as x$4 } from "./VertexArrayObject.js";
import { t as t$7 } from "./VertexElementDescriptor.js";
import { ad as A$2, S as at, B as B$1, C as C$1, ae as D$1, af as E$4, ag as F$1, ah as G$1, ai as K, aj as L$1, Q as o$5, ak as Z, al as _$3, am as $ } from "./enums2.js";
import { g as ge, b as E$5, S as S$1, I as I$1, n as M$3, e as w$2 } from "./Utils2.js";
import { e as e$4, a as e$5 } from "./ProgramTemplate.js";
import { U as U$1, w as w$1, N as N$1, Z as Z$1, C as C$2, P as P$1 } from "./MaterialKey.js";
import { r as r$7, l as l$5, n as n$7 } from "./StyleDefinition.js";
import { e as e$6 } from "./config.js";
import { M as M$4 } from "./GeometryUtils2.js";
import { x as x$5 } from "./earcut.js";
class t$4 {
  constructor() {
    this.name = this.constructor.name || "UnnamedBrush", this.brushEffect = null;
  }
  prepareState(t2, r2) {
  }
  draw(t2, r2, s2) {
  }
  drawMany(t2, r2, s2) {
    for (const a2 of r2)
      a2.visible && this.draw(t2, a2, s2);
  }
}
class i$1 extends t$4 {
  constructor() {
    super(...arguments), this._visualState = { time: 0, dvsMat3: e$3(), displayViewMat3: e$3() };
  }
  dispose() {
  }
  prepareState(t2) {
    const { context: e2 } = t2;
    e2.setColorMask(true, true, true, true), e2.setStencilFunction(I.EQUAL, 0, 255);
  }
  draw(s2, a2) {
    const { requestRender: r2, allowDelayedRender: i2 } = s2, { displayData: o2 } = a2;
    if (t$5(o2))
      return;
    if (o2.state.name === "loaded" && o2.attach(s2), o2.state.name !== "attached")
      return;
    const l2 = o2.state.resources;
    i2 && !l2.ready && r$3(r2) ? r2() : (this._visualState.time = s2.time / 1e3, this._visualState.dvsMat3 = a2.transforms.dvs, this._visualState.displayViewMat3 = s2.state.displayViewMat3, o2.flowStyle.render(s2, this._visualState, l2), o2.flowStyle.animated && r$3(r2) && r2());
  }
}
function m$9(e2, u2, m2 = "nearest", c2 = false) {
  var _a;
  const l2 = !(c2 && u2.pixelType === "u8"), _2 = l2 ? G.FLOAT : G.UNSIGNED_BYTE, p2 = u2.pixels == null || u2.pixels.length === 0 ? null : l2 ? u2.getAsRGBAFloat() : u2.getAsRGBA(), g2 = (_a = e2.capabilities.textureFloat) == null ? void 0 : _a.textureFloatLinear, T2 = { width: u2.width, height: u2.height, target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, internalFormat: e2.type === r$4.WEBGL2 && l2 ? U.RGBA32F : P.RGBA, samplingMode: !g2 || m2 !== "bilinear" && m2 !== "cubic" ? L.NEAREST : L.LINEAR, dataType: _2, wrapMode: D.CLAMP_TO_EDGE, flipped: false };
  return new E$1(e2, T2, p2);
}
function c$6(e2, u2) {
  const { spacing: m2, offsets: c2, coefficients: l2, size: [_2, p2] } = u2, g2 = m2[0] > 1, T2 = { width: g2 ? 4 * _2 : _2, height: p2, target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, internalFormat: e2.type === r$4.WEBGL2 ? U.RGBA32F : P.RGBA, dataType: G.FLOAT, samplingMode: L.NEAREST, wrapMode: D.CLAMP_TO_EDGE, flipped: false }, E2 = new Float32Array(g2 ? _2 * p2 * 16 : 2 * c2.length);
  if (g2)
    for (let t2 = 0, n2 = 0; t2 < l2.length; t2++)
      E2[n2++] = l2[t2], t2 % 3 == 2 && (E2[n2++] = 1);
  else
    for (let t2 = 0; t2 < p2; t2++)
      for (let e3 = 0; e3 < _2; e3++) {
        const n2 = 4 * (t2 * _2 + e3), a2 = 2 * (e3 * p2 + t2);
        E2[n2] = c2[a2], E2[n2 + 1] = c2[a2 + 1], E2[n2 + 3] = c2[a2] === -1 ? 0 : 1;
      }
  return new E$1(e2, T2, E2);
}
function l$4(e2, t2) {
  const i2 = { width: t2.length / 4, height: 1, target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, internalFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, wrapMode: D.CLAMP_TO_EDGE, flipped: false };
  return new E$1(e2, i2, t2);
}
function _$1(t2, n2, a2, r2 = 1, i2 = true) {
  return { u_flipY: i2, u_applyTransform: !!t2, u_opacity: r2, u_transformSpacing: t2 ? t2.spacing : f$1, u_transformGridSize: t2 ? t2.size : f$1, u_targetImageSize: n2, u_srcImageSize: a2 };
}
function p$3(e2, t2) {
  return { u_colormapOffset: t2 || 0, u_colormapMaxIndex: e2 ? e2.length / 4 - 1 : 0 };
}
function g$1(e2, t2) {
  return { u_scale: e2, u_offset: t2 };
}
function T$1(e2) {
  return { u_bandCount: e2.bandCount, u_minOutput: e2.outMin, u_maxOutput: e2.outMax, u_minCutOff: e2.minCutOff, u_maxCutOff: e2.maxCutOff, u_factor: e2.factor, u_useGamma: e2.useGamma, u_gamma: e2.gamma, u_gammaCorrection: e2.gammaCorrection };
}
function E(e2) {
  return { u_hillshadeType: e2.hillshadeType, u_sinZcosAs: e2.sinZcosAs, u_sinZsinAs: e2.sinZsinAs, u_cosZs: e2.cosZs, u_weights: e2.weights, u_factor: e2.factor, u_minValue: e2.minValue, u_maxValue: e2.maxValue };
}
function A$1(e2, t2) {
  const n2 = e2.gl, a2 = t2.glName, r2 = n2.getProgramParameter(a2, n2.ACTIVE_UNIFORMS), i2 = new Map();
  let o2;
  for (let s2 = 0; s2 < r2; s2++)
    o2 = n2.getActiveUniform(a2, s2), o2 && i2.set(o2.name, { location: n2.getUniformLocation(a2, o2.name), info: o2 });
  return i2;
}
function h$2(e2, t2, n2) {
  Object.keys(n2).forEach((a2) => {
    const r2 = t2.get(a2) || t2.get(a2 + "[0]");
    r2 && d$5(e2, a2, n2[a2], r2);
  });
}
function O$1(e2, t2, n2, a2) {
  n2.length === a2.length && (a2.some((e3) => e3 == null) || n2.some((e3) => e3 == null) || n2.forEach((n3, r2) => {
    t2.setUniform1i(n3, r2), e2.bindTexture(a2[r2], r2);
  }));
}
function d$5(e2, t2, n2, a2) {
  if (a2 === null || n2 == null)
    return false;
  const { info: r2 } = a2;
  switch (r2.type) {
    case o$4.FLOAT:
      r2.size > 1 ? e2.setUniform1fv(t2, n2) : e2.setUniform1f(t2, n2);
      break;
    case o$4.FLOAT_VEC2:
      e2.setUniform2fv(t2, n2);
      break;
    case o$4.FLOAT_VEC3:
      e2.setUniform3fv(t2, n2);
      break;
    case o$4.FLOAT_VEC4:
      e2.setUniform4fv(t2, n2);
      break;
    case o$4.FLOAT_MAT3:
      e2.setUniformMatrix3fv(t2, n2);
      break;
    case o$4.FLOAT_MAT4:
      e2.setUniformMatrix4fv(t2, n2);
      break;
    case o$4.INT:
      r2.size > 1 ? e2.setUniform1iv(t2, n2) : e2.setUniform1i(t2, n2);
      break;
    case o$4.BOOL:
      e2.setUniform1i(t2, n2 ? 1 : 0);
      break;
    case o$4.INT_VEC2:
    case o$4.BOOL_VEC2:
      e2.setUniform2iv(t2, n2);
      break;
    case o$4.INT_VEC3:
    case o$4.BOOL_VEC3:
      e2.setUniform3iv(t2, n2);
      break;
    case o$4.INT_VEC4:
    case o$4.BOOL_VEC4:
      e2.setUniform4iv(t2, n2);
      break;
    default:
      return false;
  }
  return true;
}
const x$3 = { bandCount: 3, outMin: 0, outMax: 1, minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255], factor: [1 / 255, 1 / 255, 1 / 255], useGamma: false, gamma: [1, 1, 1], gammaCorrection: [1, 1, 1], colormap: null, colormapOffset: null, stretchType: "none", type: "stretch" };
class p$2 extends r$5 {
  constructor(t2 = null, e2 = null, r2 = null) {
    super(), this._textureInvalidated = true, this._colormapTextureInvalidated = true, this._supportsBilinearTexture = true, this.stencilRef = 0, this.coordScale = [1, 1], this._symbolizerParameters = null, this.height = null, this.isRendereredSource = false, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this.rawPixelData = null, this._suspended = false, this._bandIds = null, this._interpolation = null, this._transformGrid = null, this.width = null, this.x = 0, this.y = 0, this.source = t2, this.transformGrid = e2, this.interpolation = r2;
  }
  destroy() {
    var _a;
    (_a = this.getTextures()) == null ? void 0 : _a.textures.forEach((t2) => t2.dispose()), this._rasterTexture = null, this._transformGridTexture = null, this._colormapTexture = null;
  }
  get symbolizerParameters() {
    return this._symbolizerParameters || x$3;
  }
  set symbolizerParameters(t2) {
    this._symbolizerParameters !== t2 && (this._symbolizerParameters = t2, this._colormapTextureInvalidated = true);
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    this._source !== t2 && (this._source = t2, this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this.invalidateTexture());
  }
  get suspended() {
    return this._suspended;
  }
  set suspended(t2) {
    this._suspended && !t2 && this.stage && (this.ready(), this.requestRender()), this._suspended = t2;
  }
  get bandIds() {
    return this._bandIds;
  }
  set bandIds(t2) {
    this._bandIds = t2, this._isBandIdschanged(t2) && this.invalidateTexture();
  }
  get interpolation() {
    return this._interpolation || "nearest";
  }
  set interpolation(t2) {
    this._interpolation = t2, this._rasterTexture && this._rasterTexture.setSamplingMode(this._getTextureSamplingMethod(t2) === "bilinear" ? L.LINEAR : L.NEAREST);
  }
  get transformGrid() {
    return this._transformGrid;
  }
  set transformGrid(t2) {
    this._transformGrid = t2, this._transformGridTexture && (this._transformGridTexture.dispose(), this._transformGridTexture = null);
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this.requestRender());
  }
  _createTransforms() {
    return { dvs: e$3() };
  }
  setTransform(t2) {
    const o2 = r$6(this.transforms.dvs), [n2, h2] = t2.toScreenNoRotation([0, 0], [this.x, this.y]), l2 = this.resolution / this.pixelRatio / t2.resolution, d2 = l2 * this.width, _2 = l2 * this.height, m2 = Math.PI * this.rotation / 180;
    M$2(o2, o2, t$6(n2, h2)), M$2(o2, o2, t$6(d2 / 2, _2 / 2)), h$3(o2, o2, -m2), M$2(o2, o2, t$6(-d2 / 2, -_2 / 2)), b$1(o2, o2, t$6(d2, _2)), i$2(this.transforms.dvs, t2.displayViewMat3, o2);
  }
  getTextures() {
    if (!this._rasterTexture)
      return null;
    const t2 = [], e2 = [];
    return this._transformGridTexture && (e2.push(this._transformGridTexture), t2.push("u_transformGrid")), this._rasterTexture && (e2.push(this._rasterTexture), t2.push("u_image")), this._colormapTexture && (e2.push(this._colormapTexture), t2.push("u_colormap")), { names: t2, textures: e2 };
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
  updateTexture({ context: t2 }) {
    var _a, _b, _c;
    if (!this.stage)
      return (_a = this._rasterTexture) == null ? void 0 : _a.dispose(), (_b = this._transformGridTexture) == null ? void 0 : _b.dispose(), (_c = this._colormapTexture) == null ? void 0 : _c.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null, this._transformGridTexture = null, void (this._colormapTexture = null);
    const e2 = this._isValidSource(this.source);
    e2 && this._colormapTextureInvalidated && (this._colormapTextureInvalidated = false, this._updateColormapTexture(t2)), this._textureInvalidated && (this._textureInvalidated = false, this._createOrDestroyRasterTexture(t2), this._rasterTexture && (e2 ? this.transformGrid && !this._transformGridTexture && (this._transformGridTexture = c$6(t2, this.transformGrid)) : this._rasterTexture.setData(null)), this.suspended || (this.ready(), this.requestRender()));
  }
  _createOrDestroyRasterTexture(e2) {
    var _a, _b;
    const r2 = r$3(this.source) ? s$4(this.source, this.bandIds) : null;
    if (!this._isValidSource(r2))
      return void (this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null));
    const s2 = !this._isBandIdschanged(this.bandIds);
    if (this._rasterTexture) {
      if (s2)
        return;
      this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null;
    }
    this._supportsBilinearTexture = (_a = e2.capabilities.textureFloat) == null ? void 0 : _a.textureFloatLinear;
    const i2 = this._getTextureSamplingMethod(this.interpolation), a2 = this.isRendereredSource || !((_b = e2.capabilities.textureFloat) == null ? void 0 : _b.textureFloat);
    this._rasterTexture = m$9(e2, r2, i2, a2), this._rasterTextureBandIds = this.bandIds ? [...this.bandIds] : null;
  }
  _isBandIdschanged(t2) {
    const e2 = this._rasterTextureBandIds;
    return !(e2 == null && t2 == null || e2 && t2 && e2.join("") === t2.join(""));
  }
  _isValidSource(e2) {
    var _a;
    return r$3(e2) && ((_a = e2.pixels) == null ? void 0 : _a.length) > 0;
  }
  _getTextureSamplingMethod(e2) {
    const { type: r2, colormap: s2 } = this.symbolizerParameters, i2 = r2 === "lut" || r2 === "stretch" && r$3(s2);
    return !this._supportsBilinearTexture || i2 || e2 !== "bilinear" && e2 !== "cubic" ? "nearest" : "bilinear";
  }
  _updateColormapTexture(t2) {
    const e2 = this._colormap, r2 = this.symbolizerParameters.colormap;
    return r2 ? e2 ? r2.length !== e2.length || r2.some((t3, r3) => t3 !== e2[r3]) ? (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), this._colormapTexture = l$4(t2, r2), void (this._colormap = r2)) : void 0 : (this._colormapTexture = l$4(t2, r2), void (this._colormap = r2)) : (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), void (this._colormap = null));
  }
}
function T(e2) {
  return r$3(e2.source);
}
class n$5 {
  constructor(s2, n2) {
    this._rctx = s2, this._vertexBuffer = E$2.createVertex(s2, F.STATIC_DRAW, new Uint16Array(n2)), this._vao = new a$1(s2, new Map([["a_position", 0]]), { geometry: [new t$7("a_position", 2, C.SHORT, 0, 4)] }, { geometry: this._vertexBuffer }), this._count = n2.length / 2;
  }
  bind() {
    this._rctx.bindVAO(this._vao);
  }
  unbind() {
    this._rctx.bindVAO(null);
  }
  dispose() {
    this._vao.dispose(false), this._vertexBuffer.dispose();
  }
  draw() {
    this._rctx.bindVAO(this._vao), this._rctx.drawArrays(E$3.TRIANGLE_STRIP, 0, this._count);
  }
}
class m$8 extends t$4 {
  constructor() {
    super(...arguments), this._desc = { lut: { vsPath: "raster/lut", fsPath: "raster/lut", attributes: new Map([["a_position", 0], ["a_texcoord", 1]]) }, stretch: { vsPath: "raster/stretch", fsPath: "raster/stretch", attributes: new Map([["a_position", 0], ["a_texcoord", 1]]) }, hillshade: { vsPath: "raster/hillshade", fsPath: "raster/hillshade", attributes: new Map([["a_position", 0], ["a_texcoord", 1]]) } }, this._rendererUniformInfos = new Map();
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  prepareState({ context: e2 }) {
    e2.setBlendingEnabled(true), e2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(true);
  }
  draw(e2, r2) {
    var _a;
    if (!T(r2) || r2.suspended)
      return;
    const { timeline: s2, context: a2, painter: o2 } = e2;
    s2.begin(this.name), a2.setStencilFunction(I.EQUAL, r2.stencilRef, 255);
    const n2 = !((_a = a2.capabilities.textureFloat) == null ? void 0 : _a.textureFloatLinear);
    r2.updateTexture(e2);
    const h2 = this._getShaderVariations(r2, n2), l2 = o2.materialManager.getProgram(this._desc[r2.symbolizerParameters.type], h2);
    this._drawWithProgram(e2, l2, r2), s2.end(this.name);
  }
  _drawWithProgram({ context: t2, requestRender: s2, allowDelayedRender: a2 }, i2, p2, m2 = 1, f2 = [0, 0], _2 = false) {
    if (this._quad || (this._quad = new n$5(t2, [0, 0, 1, 0, 0, 1, 1, 1])), a2 && r$3(s2) && !i2.isCompiled)
      return void s2();
    const { symbolizerParameters: g2, transformGrid: b2, width: P2, height: w2, opacity: S2 } = p2, x2 = g2.type;
    t2.useProgram(i2);
    const y2 = this._getShaderVariations(p2), M2 = this._getUniformInfos(x2, t2, i2, y2), { names: U2, textures: j } = p2.getTextures();
    O$1(t2, i2, U2, j);
    const I2 = g$1(m2, f2), E$12 = _$1(b2, [P2, w2], [p2.source.width, p2.source.height], S2, _2);
    if (h$2(i2, M2, __spreadValues(__spreadValues({ u_coordScale: p2.coordScale, u_dvsMat3: p2.transforms.dvs }, I2), E$12)), g2.colormap) {
      const { colormap: e2, colormapOffset: t3 } = g2, r2 = p$3(e2, t3);
      h$2(i2, M2, r2);
    }
    if (g2.type === "stretch") {
      const e2 = T$1(g2);
      h$2(i2, M2, e2);
    } else if (g2.type === "hillshade") {
      const e2 = E(g2);
      h$2(i2, M2, e2);
    }
    this._quad.draw();
  }
  _getUniformInfos(e2, t2, r2, s2) {
    const a2 = s2.length > 0 ? e2 + "-" + s2.join("-") : e2;
    if (this._rendererUniformInfos.has(a2))
      return this._rendererUniformInfos.get(a2);
    const i2 = A$1(t2, r2);
    return this._rendererUniformInfos.set(a2, i2), i2;
  }
  _getShaderVariations(e2, t2 = false) {
    const r2 = [], { interpolation: s2 } = e2, { type: a2, colormap: i2 } = e2.symbolizerParameters;
    return s2 === "cubic" ? r2.push("bicubic") : s2 === "bilinear" && a2 === "stretch" && i2 != null ? (r2.push("bilinear"), r2.push("nnedge")) : t2 && s2 === "bilinear" && r2.push("bilinear"), e2.isRendereredSource ? r2.push("noop") : i2 && r2.push("applyColormap"), e2.transformGrid && (r2.push("applyProjection"), e2.transformGrid.spacing[0] === 1 && r2.push("lookupProjection")), r2;
  }
}
const l$3 = new Float32Array([0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1, 0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1, 0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1, 0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1, 0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177, 0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1, 0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451, 0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902, 0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824, 0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274, 0.08235294117647059, 0.08235294117647059, 1]), c$5 = { beaufort_ft: l$3, beaufort_m: l$3, beaufort_km: l$3, beaufort_mi: l$3, beaufort_kn: new Float32Array([0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1, 0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1, 0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1, 0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1, 0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1, 0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1, 0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1, 0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1, 0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451, 0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922, 0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353, 0.2784313725490196, 0.11372549019607843, 1]), classified_arrow: new Float32Array([0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862, 1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0, 0, 1]), ocean_current_m: new Float32Array([0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), ocean_current_kn: new Float32Array([0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1, 0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0, 0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254, 0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), single_arrow: new Float32Array([0, 92 / 255, 230 / 255, 1]), wind_speed: new Float32Array([0, 0, 0, 1]) };
class d$4 extends t$4 {
  constructor() {
    super(...arguments), this._desc = { magdir: { vsPath: "raster/magdir", fsPath: "raster/magdir", attributes: new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) }, scalar: { vsPath: "raster/scalar", fsPath: "raster/scalar", attributes: new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) } };
  }
  dispose() {
  }
  prepareState({ context: e2 }) {
    e2.setBlendingEnabled(true), e2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(true), e2.setStencilOp(O$2.KEEP, O$2.KEEP, O$2.REPLACE);
  }
  draw(t2, a2) {
    if (t$5(a2.source) || a2.source.validPixelCount === 0)
      return;
    const { context: r2, timeline: s2 } = t2;
    if (s2.begin(this.name), r2.setStencilFunction(I.EQUAL, a2.stencilRef, 255), a2.updateVectorFieldVAO(t2), t2.renderPass === "scalar") {
      const e2 = a2.vaoData.scalar;
      e2 && this._drawScalars(t2, a2, e2.vao, e2.elementCount);
    } else {
      const e2 = a2.vaoData.magdir;
      e2 && this._drawTriangles(t2, a2, e2.vao, e2.elementCount);
    }
    s2.end(this.name);
  }
  _drawTriangles(e2, a2, r2, s2) {
    const { context: o2, painter: l2, requestRender: d2, allowDelayedRender: m2 } = e2, { symbolizerParameters: f2 } = a2, u2 = f2.dataRange ? ["dataRange"] : [];
    f2.rotationType === "geographic" && u2.push("rotationGeographic");
    const _2 = l2.materialManager.getProgram(this._desc.magdir, u2);
    if (m2 && r$3(d2) && !_2.isCompiled)
      return void d2();
    o2.useProgram(_2);
    const { coordScale: g2, opacity: p2, transforms: y2 } = a2;
    _2.setUniform2fv("u_coordScale", g2), _2.setUniform1f("u_opacity", p2), _2.setUniformMatrix3fv("u_dvsMat3", y2.dvs);
    const { style: v2, dataRange: b2, rotation: S2, symbolPercentRange: h2 } = f2;
    _2.setUniform4fv("u_colors", c$5[v2] || c$5.single_arrow), _2.setUniform2fv("u_dataRange", b2), _2.setUniform1f("u_rotation", S2), _2.setUniform2fv("u_symbolPercentRange", h2);
    const w2 = this._getSymbolSize(e2, a2);
    _2.setUniform2fv("u_symbolSize", w2), o2.bindVAO(r2), o2.drawElements(E$3.TRIANGLES, s2, C.UNSIGNED_INT, 0);
  }
  _drawScalars(e2, a2, r2, s2) {
    const { context: o2, painter: l2, requestRender: c2, allowDelayedRender: d2 } = e2, { symbolizerParameters: m2 } = a2, f2 = [];
    m2.style === "wind_speed" ? f2.push("innerCircle") : m2.dataRange && f2.push("dataRange"), m2.rotationType === "geographic" && f2.push("rotationGeographic");
    const u2 = l2.materialManager.getProgram(this._desc.scalar, f2);
    if (d2 && r$3(c2) && !u2.isCompiled)
      return void c2();
    o2.useProgram(u2);
    const { coordScale: _2, opacity: g2, transforms: p2 } = a2;
    u2.setUniform2fv("u_coordScale", _2), u2.setUniform1f("u_opacity", g2), u2.setUniformMatrix3fv("u_dvsMat3", p2.dvs);
    const { dataRange: y2, symbolPercentRange: v2 } = m2;
    u2.setUniform2fv("u_dataRange", y2), u2.setUniform2fv("u_symbolPercentRange", v2);
    const b2 = this._getSymbolSize(e2, a2);
    u2.setUniform2fv("u_symbolSize", b2), o2.bindVAO(r2), o2.drawElements(E$3.TRIANGLES, s2, C.UNSIGNED_INT, 0);
  }
  _getSymbolSize(e2, t2) {
    const a2 = t2.key ? 2 ** (e2.displayLevel - t2.key.level) : t2.resolution / e2.state.resolution, { symbolTileSize: r2 } = t2.symbolizerParameters;
    return [r2 / (Math.round((t2.width - t2.offset[0]) / r2) * r2) / a2, r2 / (Math.round((t2.height - t2.offset[1]) / r2) * r2) / a2];
  }
}
const o$3 = { nearest: { defines: [], samplingMode: L.NEAREST, mips: false }, bilinear: { defines: [], samplingMode: L.LINEAR, mips: false }, bicubic: { defines: ["bicubic"], samplingMode: L.LINEAR, mips: false }, trilinear: { defines: [], samplingMode: L.LINEAR_MIPMAP_LINEAR, mips: true } }, d$3 = (e2, t2, i2) => {
  if (i2.samplingMode === "dynamic") {
    const { state: i3 } = e2, s2 = t2.resolution / t2.pixelRatio / i3.resolution, n2 = Math.round(e2.pixelRatio) !== e2.pixelRatio, r2 = s2 > 1.05 || s2 < 0.95;
    return i3.rotation || r2 || n2 || t2.isSourceScaled || t2.rotation ? o$3.bilinear : o$3.nearest;
  }
  return o$3[i2.samplingMode];
};
class m$7 extends t$4 {
  constructor() {
    super(...arguments), this._desc = { vsPath: "raster/bitmap", fsPath: "raster/bitmap", attributes: new Map([["a_pos", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  prepareState({ context: e2 }) {
    e2.setBlendingEnabled(true), e2.setColorMask(true, true, true, true), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(true);
  }
  draw(s2, n2) {
    const { context: o2, renderingOptions: m2, painter: l2, requestRender: c2, allowDelayedRender: p2 } = s2;
    if (!n2.source || !n2.isReady)
      return;
    const u2 = d$3(s2, n2, m2), f2 = l2.materialManager.getProgram(this._desc, u2.defines);
    if (p2 && r$3(c2) && !f2.isCompiled)
      return void c2();
    s2.timeline.begin(this.name), n2.blendFunction === "additive" ? o2.setBlendFunctionSeparate(R.ONE, R.ONE, R.ONE, R.ONE) : o2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), o2.setStencilFunction(I.EQUAL, n2.stencilRef, 255), this._quad || (this._quad = new n$5(o2, [0, 0, 1, 0, 0, 1, 1, 1]));
    const { coordScale: _2, computedOpacity: E2, transforms: M2 } = n2;
    n2.setSamplingProfile(u2), n2.bind(s2.context, A$2), o2.useProgram(f2), f2.setUniformMatrix3fv("u_dvsMat3", M2.dvs), f2.setUniform1i("u_texture", A$2), f2.setUniform2fv("u_coordScale", _2), f2.setUniform1f("u_opacity", E2), this._quad.draw(), s2.timeline.end(this.name);
  }
}
function n$4() {
  return new Float32Array(4);
}
function t$3(n2) {
  const t2 = new Float32Array(4);
  return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2[3] = n2[3], t2;
}
function r$2(n2, t2, r2, e2) {
  const a2 = new Float32Array(4);
  return a2[0] = n2, a2[1] = t2, a2[2] = r2, a2[3] = e2, a2;
}
function e$2(n2, t2) {
  return new Float32Array(n2, t2, 4);
}
function a() {
  return n$4();
}
function o$2() {
  return r$2(1, 1, 1, 1);
}
function u$4() {
  return r$2(1, 0, 0, 0);
}
function s$3() {
  return r$2(0, 1, 0, 0);
}
function c$4() {
  return r$2(0, 0, 1, 0);
}
function i() {
  return r$2(0, 0, 0, 1);
}
const f = a(), l$2 = o$2(), _ = u$4(), y$1 = s$3(), w = c$4(), N = i();
Object.freeze(Object.defineProperty({ __proto__: null, create: n$4, clone: t$3, fromValues: r$2, createView: e$2, zeros: a, ones: o$2, unitX: u$4, unitY: s$3, unitZ: c$4, unitW: i, ZEROS: f, ONES: l$2, UNIT_X: _, UNIT_Y: y$1, UNIT_Z: w, UNIT_W: N }, Symbol.toStringTag, { value: "Module" }));
const e$1 = { background: { "background.frag": "uniform lowp vec4 u_color;\nvoid main() {\ngl_FragColor = u_color;\n}", "background.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\nvec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}" }, bitBlit: { "bitBlit.frag": "uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nlowp vec4 color = texture2D(u_tex, v_uv);\ngl_FragColor = color *  u_opacity;\n}", "bitBlit.vert": "attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_pos, 0.0, 1.0);\nv_uv = a_tex;\n}" }, blend: { "blend.frag": "precision mediump float;\nuniform sampler2D u_layerTexture;\nuniform lowp float u_opacity;\nuniform lowp float u_inFadeOpacity;\n#ifndef NORMAL\nuniform sampler2D u_backbufferTexture;\n#endif\nvarying mediump vec2 v_uv;\nfloat rgb2v(in vec3 c) {\nreturn max(c.x, max(c.y, c.z));\n}\nvec3 rgb2hsv(in vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(in vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec3 tint(in vec3 Cb, in vec3 Cs) {\nfloat vIn = rgb2v(Cb);\nvec3 hsvTint = rgb2hsv(Cs);\nvec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\nreturn hsv2rgb(hsvOut);\n}\nfloat overlay(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);\n}\nfloat colorDodge(in float Cb, in float Cs) {\nreturn (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));\n}\nfloat colorBurn(in float Cb, in float Cs) {\nreturn (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);\n}\nfloat hardLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));\n}\nfloat reflectBlend(in float Cb, in float Cs) {\nreturn (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);\n}\nfloat softLight(in float Cb, in float Cs) {\nif (Cs <= 0.5) {\nreturn Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);\n}\nif (Cb <= 0.25) {\nreturn Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);\n}\nreturn Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);\n}\nfloat vividLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));\n}\nfloat minv3(in vec3 c) {\nreturn min(min(c.r, c.g), c.b);\n}\nfloat maxv3(in vec3 c) {\nreturn max(max(c.r, c.g), c.b);\n}\nfloat lumv3(in vec3 c) {\nreturn dot(c, vec3(0.3, 0.59, 0.11));\n}\nfloat satv3(vec3 c) {\nreturn maxv3(c) - minv3(c);\n}\nvec3 clipColor(vec3 color) {\nfloat lum = lumv3(color);\nfloat mincol = minv3(color);\nfloat maxcol = maxv3(color);\nif (mincol < 0.0) {\ncolor = lum + ((color - lum) * lum) / (lum - mincol);\n}\nif (maxcol > 1.0) {\ncolor = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);\n}\nreturn color;\n}\nvec3 setLum(vec3 cbase, vec3 clum) {\nfloat lbase = lumv3(cbase);\nfloat llum = lumv3(clum);\nfloat ldiff = llum - lbase;\nvec3 color = cbase + vec3(ldiff);\nreturn clipColor(color);\n}\nvec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)\n{\nfloat minbase = minv3(cbase);\nfloat sbase = satv3(cbase);\nfloat ssat = satv3(csat);\nvec3 color;\nif (sbase > 0.0) {\ncolor = (cbase - minbase) * ssat / sbase;\n} else {\ncolor = vec3(0.0);\n}\nreturn setLum(color, clum);\n}\nvoid main() {\nvec4 src = texture2D(u_layerTexture, v_uv);\n#ifdef NORMAL\ngl_FragColor = src *  u_opacity;\n#else\nvec4 dst = texture2D(u_backbufferTexture, v_uv);\nvec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);\nvec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);\nfloat as = u_opacity * src.a;\nfloat ab = dst.a;\n#ifdef DESTINATION_OVER\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);\n#endif\n#ifdef SOURCE_IN\nvec4 color = vec4(as * Cs * ab, as * ab);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef DESTINATION_IN\nvec4 color = vec4(ab * Cb * as, ab * as);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef SOURCE_OUT\ngl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));\n#endif\n#ifdef DESTINATION_OUT\ngl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));\n#endif\n#ifdef SOURCE_ATOP\ngl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);\n#endif\n#ifdef DESTINATION_ATOP\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);\n#endif\n#ifdef XOR\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),\nas * (1.0 - ab) + ab * (1.0 - as));\n#endif\n#ifdef MULTIPLY\ngl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,\nas + ab * (1.0 - as));\n#endif\n#ifdef SCREEN\ngl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef OVERLAY\nvec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DARKEN\ngl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LIGHTER\ngl_FragColor = vec4(as * Cs + ab * Cb, as + ab);\n#endif\n#ifdef LIGHTEN\ngl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_DODGE\nvec3 f = clamp(vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_BURN\nvec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HARD_LIGHT\nvec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SOFT_LIGHT\nvec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DIFFERENCE\ngl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef EXCLUSION\nvec3 f = Cs + Cb - 2.0 * Cs * Cb;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef INVERT\ngl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);\n#endif\n#ifdef VIVID_LIGHT\nvec3 f = vec3(clamp(vividLight(Cb.r, Cs.r), 0.0, 1.0),\nclamp(vividLight(Cb.g, Cs.g), 0.0, 1.0),\nclamp(vividLight(Cb.b, Cs.b), 0.0, 1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HUE\nvec3 f = setLumSat(Cs,Cb,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SATURATION\nvec3 f = setLumSat(Cb,Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR\nvec3 f = setLum(Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LUMINOSITY\nvec3 f = setLum(Cb,Cs);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef PLUS\ngl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);\n#endif\n#ifdef MINUS\ngl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);\n#endif\n#ifdef AVERAGE\nvec3 f = (Cb + Cs) / 2.0;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef REFLECT\nvec3 f = clamp(vec3(reflectBlend(Cb.r, Cs.r),\nreflectBlend(Cb.g, Cs.g),\nreflectBlend(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#endif\n}", "blend.vert": "attribute vec2 a_position;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_position , 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}" }, debug: { overlay: { "overlay.frag": "precision mediump float;\nvarying vec4 v_color;\nvoid main(void) {\ngl_FragColor = v_color;\n}", "overlay.vert": "attribute vec3 a_PositionAndFlags;\nuniform mat3 u_dvsMat3;\nuniform vec4 u_colors[4];\nuniform float u_opacities[4];\nvarying vec4 v_color;\nvoid main(void) {\nvec2 position = a_PositionAndFlags.xy;\nfloat flags = a_PositionAndFlags.z;\nint colorIndex = int(mod(flags, 4.0));\nvec4 color;\nfor (int i = 0; i < 4; i++) {\ncolor = u_colors[i];\nif (i == colorIndex) {\nbreak;\n}\n}\nint opacityIndex = int(mod(floor(flags / 4.0), 4.0));\nfloat opacity;\nfor (int i = 0; i < 4; i++) {\nopacity = u_opacities[i];\nif (i == opacityIndex) {\nbreak;\n}\n}\nv_color = color * opacity;\ngl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);\n}" } }, dot: { dot: { "dot.frag": "precision mediump float;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nuniform highp float u_tileZoomFactor;\nvoid main()\n{\nfloat dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;\nfloat alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);\ngl_FragColor = v_color * alpha;\n}", "dot.vert": "precision highp float;\nattribute vec2 a_pos;\nuniform sampler2D u_texture;\nuniform highp mat3 u_dvsMat3;\nuniform highp float u_tileZoomFactor;\nuniform highp float u_dotSize;\nuniform highp float u_pixelRatio;\nvarying vec2 v_pos;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nconst float EPSILON = 0.000001;\nvoid main()\n{\nmat3 tileToTileTexture = mat3(  1., 0., 0.,\n0., -1., 0.,\n0., 1., 1.  );\nvec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);\nv_color = texture2D(u_texture, texCoords.xy);\nfloat smoothEdgeWidth = max(u_dotSize / 2., 1.) ;\nfloat z = 0.;\nz += 2.0 * step(v_color.a, EPSILON);\ngl_PointSize = (smoothEdgeWidth + u_dotSize);\ngl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);\nv_dotRatio = u_dotSize / gl_PointSize;\nv_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );\ngl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);\n}" } }, filtering: { "bicubic.glsl": "vec4 computeWeights(float v) {\nfloat b = 1.0 / 6.0;\nfloat v2 = v * v;\nfloat v3 = v2 * v;\nfloat w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\nfloat w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\nfloat w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\nfloat w3 = b * v3;\nreturn vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\nvec4 w = computeWeights(v);\nfloat g0 = w.x + w.y;\nfloat g1 = w.z + w.w;\nfloat h0 = 1.0 - (w.y / g0) + v;\nfloat h1 = 1.0 + (w.w / g1) - v;\nreturn vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 eX = vec2(1.0 / texSize.x, 0.0);\nvec2 eY = vec2(0.0, 1.0 / texSize.y);\nvec2 texel = coords * texSize - 0.5;\nvec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\nvec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\nvec2 coords10 = coords + hgX.x * eX;\nvec2 coords00 = coords - hgX.y * eX;\nvec2 coords11 = coords10 + hgY.x * eY;\nvec2 coords01 = coords00 + hgY.x * eY;\ncoords10 = coords10 - hgY.y * eY;\ncoords00 = coords00 - hgY.y * eY;\nvec4 color00 = texture2D(sampler, coords00);\nvec4 color10 = texture2D(sampler, coords10);\nvec4 color01 = texture2D(sampler, coords01);\nvec4 color11 = texture2D(sampler, coords11);\ncolor00 = mix(color00, color01, hgY.z);\ncolor10 = mix(color10, color11, hgY.z);\ncolor00 = mix(color00, color10, hgX.z);\nreturn color00;\n}", "bilinear.glsl": "vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 texelStart = floor(coords * texSize);\nvec2 coord0 = texelStart / texSize;\nvec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\nvec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\nvec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\nvec4 color0 = texture2D(sampler, coord0);\nvec4 color1 = texture2D(sampler, coord1);\nvec4 color2 = texture2D(sampler, coord2);\nvec4 color3 = texture2D(sampler, coord3);\nvec2 blend = fract(coords * texSize);\nvec4 color01 = mix(color0, color1, blend.x);\nvec4 color23 = mix(color2, color3, blend.x);\nvec4 color = mix(color01, color23, blend.y);\n#ifdef NNEDGE\nfloat alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);\ncolor = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);\n#endif\nreturn color;\n}", "epx.glsl": "vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\nvec2 invSize = 1.0 / texSize;\nvec2 texel = coords * texSize;\nvec2 texel_i = floor(texel);\nvec2 texel_frac = fract(texel);\nvec4 colorP = texture2D(sampler, texel_i * invSize);\nvec4 colorP1 = vec4(colorP);\nvec4 colorP2 = vec4(colorP);\nvec4 colorP3 = vec4(colorP);\nvec4 colorP4 = vec4(colorP);\nvec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\nvec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\nvec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\nvec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\nif (colorC == colorA && colorC != colorD && colorA != colorB) {\ncolorP1 = colorA;\n}\nif (colorA == colorB && colorA != colorC && colorB != colorD) {\ncolorP2 = colorB;\n}\nif (colorD == colorC && colorD != colorB && colorC != colorA) {\ncolorP3 = colorC;\n}\nif (colorB == colorD && colorB != colorA && colorD != colorC) {\ncolorP4 = colorD;\n}\nvec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\nvec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\nreturn mix(colorP12, colorP34, texel_frac.y);\n}" }, fx: { integrate: { "integrate.frag": "precision mediump float;\nuniform lowp sampler2D u_sourceTexture;\nuniform lowp sampler2D u_maskTexture;\nuniform mediump float u_zoomLevel;\nuniform highp float u_timeDelta;\nuniform highp float u_animationTime;\nvarying highp vec2 v_texcoord;\n#include <materials/utils.glsl>\nvoid main()\n{\n#ifdef DELTA\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\nvec4 data0 = texture2D(u_maskTexture, v_texcoord);\nfloat flags = data0.r * 255.0;\nfloat groupMinZoom = data0.g * 255.0;\nfloat isVisible = getFilterBit(flags, 0);\nfloat wouldClip = step(groupMinZoom, u_zoomLevel);\nfloat direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;\nfloat dt = u_timeDelta / max(u_animationTime, 0.0001);\nvec4 nextState = vec4(texel + direction * dt);\ngl_FragColor =  vec4(nextState);\n#elif defined(UPDATE)\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\ngl_FragColor = texel;\n#endif\n}", "integrate.vert": "precision mediump float;\nattribute vec2 a_pos;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}" } }, heatmap: { heatmapResolve: { "heatmapResolve.frag": "precision highp float;\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 4.0\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform sampler2D u_texture;\nuniform sampler2D u_gradient;\nuniform vec2 u_densityMinAndInvRange;\nuniform float u_densityNormalization;\nvarying vec2 v_uv;\nvoid main() {\nvec4 data = texture2D(u_texture, v_uv);\nfloat density = data.r * COMPRESSION_FACTOR;\ndensity *= u_densityNormalization;\ndensity = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;\nvec4 color = texture2D(u_gradient, vec2(density, 0.5));\ngl_FragColor = vec4(color.rgb * color.a, color.a);\n}", "heatmapResolve.vert": "precision highp float;\nattribute vec2 a_pos;\nvarying vec2 v_uv;\nvoid main() {\nv_uv = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);\n}" } }, highlight: { "blur.frag": "varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump float u_sigma;\nuniform sampler2D u_texture;\nmediump float gauss1(mediump vec2 dir) {\nreturn exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\nreturn u_channelSelector * sample;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\nmediump float w = gauss1(i * u_direction.xy);\ntot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\nweight += w;\n}\nvoid main(void) {\nmediump float tot = 0.0;\nmediump float weight = 0.0;\naccumGauss1(-5.0, tot, weight);\naccumGauss1(-4.0, tot, weight);\naccumGauss1(-3.0, tot, weight);\naccumGauss1(-2.0, tot, weight);\naccumGauss1(-1.0, tot, weight);\naccumGauss1(0.0, tot, weight);\naccumGauss1(1.0, tot, weight);\naccumGauss1(2.0, tot, weight);\naccumGauss1(3.0, tot, weight);\naccumGauss1(4.0, tot, weight);\naccumGauss1(5.0, tot, weight);\ngl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}", "highlight.frag": "varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump float u_sigma;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\nmediump float y = texture2D(u_texture, v_texcoord)[3];\nconst mediump float y0 = 0.5;\nmediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);\nmediump float d = (y - y0) / m0;\nreturn d;\n}\nmediump vec4 shade(mediump float d) {\nmediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\nmappedDistance = clamp(mappedDistance, 0.0, 1.0);\nreturn texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\nmediump float d = estimateDistance();\ngl_FragColor = shade(d);\n}", "textured.vert": "attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}" }, magnifier: { "magnifier.frag": "uniform lowp vec4 u_background;\nuniform mediump sampler2D u_readbackTexture;\nuniform mediump sampler2D u_maskTexture;\nuniform mediump sampler2D u_overlayTexture;\nuniform bool u_maskEnabled;\nuniform bool u_overlayEnabled;\nvarying mediump vec2 v_texCoord;\nconst lowp float barrelFactor = 1.1;\nlowp vec2 barrel(lowp vec2 uv) {\nlowp vec2 uvn = uv * 2.0 - 1.0;\nif (uvn.x == 0.0 && uvn.y == 0.0) {\nreturn vec2(0.5, 0.5);\n}\nlowp float theta = atan(uvn.y, uvn.x);\nlowp float r = pow(length(uvn), barrelFactor);\nreturn r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;\n}\nvoid main(void)\n{\nlowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));\ncolor = (color + (1.0 - color.a) * u_background);\nlowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;\ncolor *= mask;\nlowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);\ngl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;\n}", "magnifier.vert": "precision mediump float;\nattribute mediump vec2 a_pos;\nuniform mediump vec4 u_drawPos;\nvarying mediump vec2 v_texCoord;\nvoid main(void)\n{\nv_texCoord = a_pos;\ngl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);\n}" }, materials: { "attributeData.glsl": "uniform highp sampler2D u_attributeData0;\nuniform highp sampler2D u_attributeData1;\nuniform highp sampler2D u_attributeData2;\nuniform highp sampler2D u_attributeData3;\nuniform highp sampler2D u_attributeData4;\nuniform highp sampler2D u_attributeData5;\nuniform highp int u_attributeTextureSize;\nhighp vec2 getAttributeDataCoords(in highp vec3 id) {\nhighp vec3  texel = unpackDisplayIdTexel(id);\nhighp float size = float(u_attributeTextureSize);\nhighp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);\nhighp float col = mod(u32, size);\nhighp float row = (u32 - col) / size;\nhighp float u = col / size;\nhighp float v = row / size;\nreturn vec2(u, v);\n}\nhighp vec2 getAttributeDataTextureCoords(in highp vec3 id) {\nreturn (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(u_attributeTextureSize));\n}\nhighp vec4 getAttributeData0(in highp vec3 id) {\nvec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData0, coords);\n}\nhighp vec4 getAttributeData1(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData1, coords);\n}\nhighp vec4 getAttributeData2(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData2, coords);\n}\nhighp vec4 getAttributeData3(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData3, coords);\n}\nhighp vec4 getAttributeData4(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData4, coords);\n}\nhighp vec4 getAttributeData5(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(u_attributeData5, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\nbool isMagic = v.x == 255.0 && v.y == 255.0;\nif (isMagic) {\nreturn NAN_MAGIC_NUMBER;\n}\nreturn (v.x + v.y * float(0x100)) - 32768.0;\n}", "barycentric.glsl": "float inTriangle(vec3 bary) {\nvec3 absBary = abs(bary);\nreturn step((absBary.x + absBary.y + absBary.z), 1.05);\n}\nvec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {\nmat3 xyToBarycentricMat3 = mat3(\nv1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,\nv1.y - v2.y, v2.y - v0.y, v0.y - v1.y,\nv2.x - v1.x, v0.x - v2.x, v1.x - v0.x\n);\nfloat A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);\nreturn (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);\n}", "constants.glsl": "const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_RAD_TO_DEG = 180.0 / 3.141592654;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.00001;\nconst float EPSILON_HITTEST = 0.05;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;\nconst int BITSET_GENERIC_LOCK_COLOR = 1;\nconst int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;\nconst int BITSET_MARKER_ALIGNMENT_MAP = 0;\nconst int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;\nconst int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;\nconst int BITSET_TYPE_FILL_OUTLINE = 0;\nconst int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;\nconst int BITSET_LINE_SCALE_DASH = 2;", fill: { "common.glsl": "#include <materials/symbologyTypeUtils.glsl>\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying highp vec3 v_id;\nvarying lowp vec4 v_color;\nvarying lowp float v_opacity;\nvarying mediump vec4 v_aux1;\n#ifdef PATTERN\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvarying lowp float v_isOutline;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif", "fill.frag": "precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\nlowp vec4 drawLine() {\nfloat v_lineWidth = v_aux1.x;\nvec2  v_normal    = v_aux1.yz;\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineWidth,\nv_opacity,\nv_id\n);\nreturn shadeLine(inputs);\n}\n#endif\nlowp vec4 drawFill() {\nlowp vec4 out_color = vec4(0.);\n#ifdef HITTEST\nout_color = v_color;\n#elif defined(PATTERN)\nmediump vec4 v_tlbr = v_aux1;\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\n#ifdef VV_COLOR\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\n#endif\nout_color = v_opacity * v_color * color;\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)\nvec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\nvec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\nvec4 difference0 = v_dotThresholds[0] - textureThresholds0;\nvec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\nvec4 isPositive0 = step(0.0, difference0);\nvec4 isPositive1 = step(0.0, difference1);\nfloat weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\nfloat lessThanEqZero = step(weightSum, 0.0);\nfloat greaterThanZero = 1.0 - lessThanEqZero ;\nfloat divisor = (weightSum + lessThanEqZero);\nvec4 weights0 = difference0 * isPositive0 / divisor;\nvec4 weights1 = difference1 * isPositive1 / divisor;\nvec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\nvec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\nfloat diffMax = max(max4(difference0), max4(difference1));\nfloat lessThanZero = step(diffMax, 0.0);\nfloat greaterOrEqZero = 1.0 - lessThanZero;\nvec4 isMax0 = step(diffMax, difference0);\nvec4 isMax1 = step(diffMax, difference1);\nvec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\nvec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\nout_color = preEffectColor;\n#else\nout_color = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\nout_color.a = 1.0;\n#endif\nreturn out_color;\n}\nvoid main() {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (v_isOutline > 0.5) {\ngl_FragColor = drawLine();\n} else {\ngl_FragColor = drawFill();\n}\n#else\ngl_FragColor = drawFill();\n#endif\n}", "fill.vert": "#include <materials/symbologyTypeUtils.glsl>\n#define PACKED_LINE\nprecision highp float;\nattribute float a_bitset;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_aux2;\nattribute vec4 a_aux3;\n#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\nattribute vec4 a_aux1;\nattribute vec2 a_zoomRange;\n#else\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#endif\n#endif\nuniform vec2 u_tileOffset;\n#include <util/encoding.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#include <materials/fill/hittest.glsl>\nconst float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\nreturn featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\nvoid drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {\nLineData outputs = buildLine(\nout_pos,\na_id,\na_pos,\na_color,\n(a_aux3.xy - 128.) / 16.,\n(a_aux3.zw - 128.) / 16.,\n0.,\na_aux2.z / 16.,\na_bitset,\nvec4(0.),\nvec2(0.),\na_aux2.w / 16.\n);\nv_id      = outputs.id;\nv_opacity = outputs.opacity;\nv_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);\nout_color = outputs.color;\n}\n#endif\nvoid drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {\nfloat a_bitSet = a_bitset;\nout_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity = getOpacity();\nv_id      = norm(a_id);\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nmat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,\n0., -2. / 512.,  0.,\n-1.,  1.,  1.  );\nout_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);\n#else\nout_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n#endif\n#ifdef PATTERN\nvec4  a_tlbr   = a_aux1;\nfloat a_width  = a_aux2.x;\nfloat a_height = a_aux2.y;\nvec2  a_offset = a_aux2.zw;\nvec2  a_scale  = a_aux3.xy;\nfloat a_angle  = a_aux3.z;\nvec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;\nfloat width = u_zoomFactor * a_width * scale.x;\nfloat height = u_zoomFactor * a_height * scale.y;\nfloat angle = C_256_TO_RAD * a_angle;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nfloat dx = 0.0;\nfloat dy = 0.0;\nif (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {\nfloat id = rgba2float(vec4(a_id, 0.0));\ndx = rand(vec2(id, 0.0));\ndy = rand(vec2(0.0, id));\n}\nmat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n-sinA / width, cosA / height, 0,\ndx,            dy,           1);\nvec2 tileOffset = vec2(u_tileOffset.x * cosA - u_tileOffset.y * sinA, u_tileOffset.x * sinA + u_tileOffset.y * cosA);\ntileOffset = mod(tileOffset, vec2(a_aux2.x, a_aux2.y));\nvec2 symbolOffset = (a_offset - tileOffset) / vec2(width, height);\nv_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\nv_aux1 = a_tlbr / u_mosaicSize.xyxy;\nv_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\nvec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\nfloat size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\nv_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\nv_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\nv_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n}\n#ifdef HITTEST\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {\nout_pos = vec3(0., 0., 2.);\nreturn;\n}\n#endif\nhittestFill(out_color, out_pos);\ngl_PointSize = 1.0;\n}\n#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\nv_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);\nif (v_isOutline > 0.5) {\ndrawLine(out_color, out_pos);\n} else {\ndrawFill(out_color, out_pos);\n}\n}\n#else\n#define draw drawFill\n#endif\nvoid main()\n{\nINIT;\nhighp vec3 pos  = vec3(0.);\nhighp vec4 color  = vec4(0.);\ndraw(color, pos);\nv_color = color;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}", "hittest.glsl": "#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestFill(\nout lowp vec4 out_color,\nout highp vec3 out_pos\n) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);\nfloat hittestDist = u_hittestDist;\nfloat dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist < 0. || dist >= hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);\n}\n#endif" }, hittest: { "common.glsl": "#ifdef HITTEST\nuniform float u_hittestDist;\nuniform highp vec2 u_hittestPos;\nfloat projectScalar(vec2 a, vec2 b) {\nreturn dot(a, normalize(b));\n}\nfloat distPointSegment(vec2 p0, vec2 p1, vec2 p2) {\nvec2 L = p2 - p1;\nvec2 A = p0 - p1;\nfloat projAL = projectScalar(A, L);\nfloat t = clamp(projAL / length(L), 0., 1.);\nreturn distance(p0, p1 + t * (p2 - p1));\n}\nvoid hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {\nfloat dist = distance(pos, vec3(u_hittestPos, 1.));\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif ((dist - size) > u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);\n}\nfloat intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {\nreturn inTriangle(xyToBarycentric(p, a, b, c));\n}\nfloat distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {\nvec2 ba = b - a;\nvec2 ca = c - a;\nfloat crossProduct = ba.x * ca.y - ca.x * ba.y;\nbool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;\nif (isParallel) {\nreturn -1.;\n}\nif (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {\nreturn 0.;\n}\nfloat distAB = distPointSegment(p, a, b);\nfloat distBC = distPointSegment(p, b, c);\nfloat distCA = distPointSegment(p, c, a);\nreturn min(min(distAB, distBC), distCA);\n}\n#endif" }, icon: { "common.glsl": "#include <util/encoding.glsl>\nuniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif\n#ifdef SDF\nvec4 getColor(vec2 v_size, vec2 v_tex) {\nlowp vec4 fillPixelColor = v_color;\nfloat d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nfloat outlineWidth = v_outlineWidth;\n#ifdef HIGHLIGHT\noutlineWidth = max(outlineWidth, 4.0 * v_isThin);\n#endif\nif (outlineWidth > 0.25) {\nlowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\nfloat clampedOutlineSize = min(outlineWidth, size);\noutlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\nreturn v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n}\nreturn v_opacity * fillPixelColor;\n}\n#else\nvec4 getColor(vec2 _v_size, vec2 v_tex) {\nlowp vec4 texColor = texture2D(u_texture, v_tex);\nreturn v_opacity * texColor * v_color;\n}\n#endif", heatmapAccumulate: { "common.glsl": "varying lowp vec4 v_hittestResult;\nvarying mediump vec2 v_offsetFromCenter;\nvarying highp float v_fieldValue;", "heatmapAccumulate.frag": "precision mediump float;\n#include <materials/icon/heatmapAccumulate/common.glsl>\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 0.25\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform lowp sampler2D u_texture;\nvoid main() {\n#ifdef HITTEST\ngl_FragColor = v_hittestResult;\n#else\nfloat radius = length(v_offsetFromCenter);\nfloat shapeWeight = step(radius, 1.0);\nfloat oneMinusRadiusSquared = 1.0 - radius * radius;\nfloat kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;\ngl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);\n#endif\n}", "heatmapAccumulate.vert": "precision highp float;\nattribute vec2 a_vertexOffset;\nvec4 a_color = vec4(0.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\nuniform float u_radius;\nuniform float u_isFieldActive;\n#include <materials/vcommon.glsl>\n#include <materials/hittest/common.glsl>\n#include <materials/icon/heatmapAccumulate/common.glsl>\nvoid main() {\nfloat filterFlags = getFilterFlags();\n#ifdef HITTEST\nhighp vec4 out_hittestResult = vec4(0.);\nhighp vec3 out_pos = vec3(0.);\nvec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nhittestMarker(out_hittestResult, out_pos, pos, u_radius);\nv_hittestResult = out_hittestResult;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\nv_offsetFromCenter = sign(a_vertexOffset);\nv_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;\nvec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nvec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;\ngl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);\n#endif\n}" }, "hittest.glsl": "#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_vertexOffset1;\nattribute vec2 a_vertexOffset2;\nattribute vec2 a_texCoords1;\nattribute vec2 a_texCoords2;\nvec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {\nreturn texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;\n}\nvoid hittestIcon(\ninout lowp vec4 out_color,\nout highp vec3 out_pos,\nin vec3 pos,\nin vec3 offset,\nin vec2 size,\nin float scaleFactor,\nin float isMapAligned\n) {\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nvec3 posBase = u_viewMat3 * u_tileMat3  * pos;\nvec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);\nvec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);\nvec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;\nvec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;\nvec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;\nvec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);\nvec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);\nvec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);\nvec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec2 tex0 = a_texCoords  / u_mosaicSize;\nvec2 tex1 = a_texCoords1 / u_mosaicSize;\nvec2 tex2 = a_texCoords2 / u_mosaicSize;\nfloat alphaSum = 0.;\nalphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;\nout_pos.z += step(alphaSum, .05) * 2.0;\nout_color = vec4(1. / 255., 0., 0., alphaSum / 255.);\n}\n#endif", "icon.frag": "precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvoid main()\n{\n#ifdef HITTEST\nvec4 color = v_color;\n#else\nvec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);\n#endif\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}", "icon.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/icon/hittest.glsl>\nfloat getMarkerScaleFactor(inout vec2 size, in float referenceSize) {\n#ifdef VV_SIZE\nfloat f = getSize(size.y) / size.y;\nfloat sizeFactor = size.y / referenceSize;\nreturn getSize(referenceSize) / referenceSize;\n#else\nreturn 1.;\n#endif\n}\nvoid main()\n{\nINIT;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);\nvec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec3  offset        = vec3(a_vertexOffset / 16.0, 0.);\nfloat outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\nfloat isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nfloat referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;\nfloat scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\nfloat scaleFactor               = getMarkerScaleFactor(size, referenceSize);\nsize.xy     *= scaleFactor;\noffset.xy   *= scaleFactor;\noutlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;\nvec2 v_tex   = a_texCoords / u_mosaicSize;\nfloat filterFlags = getFilterFlags();\nv_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity  = getOpacity();\nv_id       = norm(a_id);\nv_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;\nv_sizeTex  = vec4(size.xy, v_tex.xy);\n#ifdef SDF\nv_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);\n#ifdef VV_COLOR\nv_overridingOutlineColor = v_isThin;\n#else\nv_overridingOutlineColor = 0.0;\n#endif\nv_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));\nv_outlineColor = a_outlineColor;\nv_distRatio = a_bitSetAndDistRatio.y / 126.0;\n#endif\n#ifdef HITTEST\nhighp vec4 out_color = vec4(0.);\nhighp vec3 out_pos   = vec3(0.);\nhittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);\nv_color = out_color;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}" }, label: { "common.glsl": "uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;", "label.frag": "#include <materials/text/text.frag>", "label.vert": "precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHalo;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\nfloat glyphAngle = angle * 360.0 / 254.0;\nfloat mapAngle = u_mapRotation * 360.0 / 254.0;\nfloat diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\nfloat z = 0.0;\nz += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));\nz += u_mapAligned * 2.0 * step(90.0, diffAngle);\nz += 2.0 * (1.0 - step(u_currentZoom, maxZoom));\nreturn z;\n}\nvoid main()\n{\nINIT;\nfloat groupMinZoom    = getMinZoom();\nfloat glyphMinZoom    = a_glyphData.x;\nfloat glyphMaxZoom    = a_glyphData.y;\nfloat glyphAngle      = a_glyphData.z;\nfloat a_minZoom          = max(groupMinZoom, glyphMinZoom);\nfloat a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\nvec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\nfloat a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\nfloat fontSize           = a_texAndSize.z;\nfloat haloSize           = a_texAndSize.w * OUTLINE_SCALE;\nvec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\nvec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\nfloat fontScale    = fontSize / SDF_FONT_SIZE;\nfloat halfSize     = getSize(a_refSymbolSize) / 2.0;\nfloat animation    = pow(getAnimationState(), vec4(2.0)).r;\nv_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));\nv_opacity   = 1.0;\nv_tex       = a_texCoords / u_mosaicSize;\nv_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\nvec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\nvec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\nvec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\ngl_Position = vec4(v_pos, 1.0);\n#ifdef DEBUG\nv_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}" }, line: { "common.glsl": "varying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif\n#ifdef SDF\nvarying mediump float v_lineWidthRatio;\n#endif", "hittest.glsl": "#include <materials/hittest/common.glsl>\n#ifdef HITTEST\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);\nvec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nfloat dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),\ndistPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist >= u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);\n}\n#endif", "line.frag": "precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\n#ifdef HITTEST\nvoid main() {\ngl_FragColor = v_color;\n}\n#else\nvoid main() {\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineHalfWidth,\nv_opacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr,\nv_patternSize,\n#endif\n#ifdef SDF\nv_lineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance,\n#endif\n#endif\nv_id\n);\ngl_FragColor = shadeLine(inputs);\n}\n#endif", "line.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/line/hittest.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\n#ifdef HITTEST\nvoid draw() {\nfloat aa        = 0.5 * u_antialiasing;\nfloat a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;\nfloat a_cimHalfWidth = a_aux.x / 16. ;\nvec2  a_offset = a_offsetAndNormal.xy / 16.;\nfloat baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nhighp vec3 pos  = vec3(0.);\nv_color = vec4(0.);\nhittestLine(v_color, pos, halfWidth);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#else\nvoid draw()\n{\nhighp vec3 pos = vec3(0.);\nLineData outputs = buildLine(\npos,\na_id,\na_pos,\na_color,\na_offsetAndNormal.xy / 16.,\na_offsetAndNormal.zw / 16.,\na_accumulatedDistanceAndHalfWidth.x,\na_accumulatedDistanceAndHalfWidth.y / 16.,\na_segmentDirection.w,\na_tlbr,\na_segmentDirection.xy / 16.,\na_aux.x / 16.\n);\nv_id              = outputs.id;\nv_color           = outputs.color;\nv_normal          = outputs.normal;\nv_lineHalfWidth   = outputs.lineHalfWidth;\nv_opacity         = outputs.opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr          = outputs.tlbr;\nv_patternSize   = outputs.patternSize;\n#endif\n#ifdef SDF\nv_lineWidthRatio = outputs.lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance = outputs.accumulatedDistance;\n#endif\n#endif\ngl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#endif\nvoid main() {\nINIT;\ndraw();\n}" }, pie: { "pie.frag": "precision mediump float;\n#include <util/atan2.glsl>\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvarying float v_size;\nvarying vec2 v_offset;\nvarying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nuniform lowp vec4 u_colors[NUMBER_OF_FIELDS];\nuniform lowp vec4 u_defaultColor;\nuniform lowp vec4 u_othersColor;\nuniform lowp vec4 u_outlineColor;\nuniform float u_donutRatio;\nuniform float u_sectorThreshold;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};\nlowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {\n#if __VERSION__ == 300\nmediump int colorIndex = int(filteredSectorToColorId[index].y);\nreturn u_colors[colorIndex];\n#else\nmediump int colorIndex;\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == index) {\ncolorIndex = int(filteredSectorToColorId[i].y);\n}\n}\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == colorIndex) {\nreturn u_colors[i];\n}\n}\nreturn u_colors[NUMBER_OF_FIELDS - 1];\n#endif\n}\nconst int OTHER_SECTOR_ID = 255;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor() {\nfloat angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);\nif (angle < 0.0) {\nangle += 360.0;\n} else if (angle > 360.0) {\nangle = mod(angle, 360.0);\n}\nint numOfEntries = int(v_numOfEntries);\nfloat maxSectorAngle = v_maxSectorAngle;\nlowp vec4 fillColor = (maxSectorAngle > 0.0 || u_sectorThreshold > 0.0) ? u_othersColor : u_defaultColor;\nlowp vec4 prevColor = vec4(0.0);\nlowp vec4 nextColor = vec4(0.0);\nfloat startSectorAngle = 0.0;\nfloat endSectorAngle = 0.0;\nif (angle < maxSectorAngle) {\nfor (int index = 0; index < NUMBER_OF_FIELDS; ++index) {\nstartSectorAngle = endSectorAngle;\nendSectorAngle = v_filteredSectorToColorId[index].x;\nif (endSectorAngle > angle) {\nfillColor = getSectorColor(index, v_filteredSectorToColorId);\nprevColor = u_sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? u_othersColor :\ngetSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = u_sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? u_othersColor :\ngetSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);\nbreak;\n}\nif (index == numOfEntries - 1) {\nbreak;\n}\n}\n} else {\nprevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = getSectorColor(0, v_filteredSectorToColorId);\nstartSectorAngle = maxSectorAngle;\nendSectorAngle = 360.0;\n}\nlowp vec4 outlineColor = u_outlineColor;\nfloat offset = length(v_offset);\nfloat distanceSize = offset * v_size;\nif (startSectorAngle != 0.0 || endSectorAngle != 360.0) {\nfloat distanceToStartSector = (angle - startSectorAngle);\nfloat distanceToEndSector = (endSectorAngle - angle);\nfloat sectorThreshold = 0.6;\nfloat beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);\nfloat endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);\nif (endSectorAlpha > 0.0) {\nfillColor = mix(nextColor, fillColor, endSectorAlpha);\n} else if (beginSectorAlpha > 0.0) {\nfillColor = mix(prevColor, fillColor, beginSectorAlpha);\n}\n}\nfloat donutSize = u_donutRatio * (v_size - v_outlineWidth);\nfloat endOfDonut = donutSize - v_outlineWidth;\nfloat aaThreshold = 0.75;\nfloat innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;\nfloat outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);\nfloat circleAlpha = innerCircleAlpha * outerCircleAlpha;\nfloat startOfOutline = v_size - v_outlineWidth;\nif (startOfOutline > 0.0 && v_outlineWidth > 0.25) {\nfloat outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);\nfloat innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;\nfillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);\n}\nreturn v_opacity * circleAlpha * fillColor;\n}\n#endif\nvoid main()\n{\nvec4 color = getColor();\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}", "pie.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\nuniform float u_outlineWidth;\nuniform mediump float u_sectorThreshold;\nvarying float v_size;\nvarying vec2 v_offset;\nvarying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};\nint filter(in float sectorAngle,\nin int currentIndex,\ninout FilteredChartInfo filteredInfo,\ninout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {\nif (sectorAngle > u_sectorThreshold * 360.0) {\nfilteredInfo.endSectorAngle += sectorAngle;\n#if __VERSION__ == 300\nfilteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);\n#else\nfor (int i = 0; i < NUMBER_OF_FIELDS; i++) {\nif (i == filteredInfo.colorId) {\nfilteredSectorToColorId[i] = vec2(filteredInfo.endSectorAngle, currentIndex);\n}\n}\n#endif\n++filteredInfo.colorId;\n}\nreturn 0;\n}\nint filterValues(inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS],\ninout FilteredChartInfo filteredInfo,\nin float sectorAngles[NUMBER_OF_FIELDS]) {\nfor (int index = 0; index < NUMBER_OF_FIELDS; ++index) {\nfloat sectorValue = sectorAngles[index];\nfilter(sectorValue, index, filteredInfo, filteredSectorToColorId);\n}\nreturn filteredInfo.colorId;\n}\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/hittest/common.glsl>\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {\nvec2 outSize = baseSize;\n#ifdef VV_SIZE\nfloat r = 0.5 * getSize(referenceSize) / referenceSize;\noutSize.xy *= r;\noffset.xy *= r;\nfloat scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\noutlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\nreturn outSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\nfloat isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nvec3  offset       = vec3(in_offset, 0.0);\nreturn getMatrix(isMapAligned) * offset;\n}\nfloat filterNaNValues(in float value) {\nreturn value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;\n}\nvoid main()\n{\nINIT;\nvec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec2  a_offset = a_vertexOffset / 16.0;\nfloat outlineSize = u_outlineWidth;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec2 size = getMarkerSize(a_offset, a_size, outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);\nfloat filterFlags = getFilterFlags();\nvec3  pos         = vec3(a_pos * POSITION_PRECISION, 1.0);\nv_opacity      = getOpacity();\nv_id           = norm(a_id);\nv_pos          = u_dvsMat3 * pos + getOffset(a_offset, a_bitSet);\nv_offset       = sign(a_texCoords - 0.5);\nv_size         = max(size.x, size.y);\nv_outlineWidth = outlineSize;\nfloat attributeData[10];\nvec4 attributeData0 = getAttributeData3(a_id);\nattributeData[0] = filterNaNValues(attributeData0.x);\nattributeData[1] = filterNaNValues(attributeData0.y);\nattributeData[2] = filterNaNValues(attributeData0.z);\nattributeData[3] = filterNaNValues(attributeData0.w);\n#if (NUMBER_OF_FIELDS > 4)\nvec4 attributeData1 = getAttributeData4(a_id);\nattributeData[4] = filterNaNValues(attributeData1.x);\nattributeData[5] = filterNaNValues(attributeData1.y);\nattributeData[6] = filterNaNValues(attributeData1.z);\nattributeData[7] = filterNaNValues(attributeData1.w);\n#endif\n#if (NUMBER_OF_FIELDS > 8)\nvec4 attributeData2 = getAttributeData5(a_id);\nattributeData[8] = filterNaNValues(attributeData2.x);\nattributeData[9] = filterNaNValues(attributeData2.y);\n#endif\nfloat sum = 0.0;\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nsum += attributeData[i];\n}\nfloat sectorAngles[NUMBER_OF_FIELDS];\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nsectorAngles[i] = 360.0 * attributeData[i] / sum;\n}\nvec2 filteredSectorToColorId[NUMBER_OF_FIELDS];\nFilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);\nint numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);\nv_numOfEntries = float(numOfEntries);\nv_maxSectorAngle = filteredInfo.endSectorAngle;\n#if __VERSION__ == 300\nv_filteredSectorToColorId = filteredSectorToColorId;\n#else\nfor (int i = 0; i < NUMBER_OF_FIELDS; ++i) {\nif (i == numOfEntries) {\nbreak;\n}\nv_filteredSectorToColorId[i] = filteredSectorToColorId[i];\n}\n#endif\n#ifdef HITTEST\nhighp vec3 out_pos = vec3(0.0);\nv_color            = vec4(0.0);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  pos, v_size);\ngl_PointSize = 1.0;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}" }, shared: { line: { "common.glsl": "#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\nstruct LineData {\nlowp vec4 color;\nmediump vec2 normal;\nmediump float lineHalfWidth;\nlowp float opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nmediump vec4 tlbr;\nmediump vec2 patternSize;\n#endif\n#ifdef SDF\nmediump float lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nhighp float accumulatedDistance;\n#endif\n#endif\nhighp vec3 id;\n};", "line.frag": "uniform lowp float u_blur;\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\nuniform highp float u_pixelRatio;\n#endif\n#endif\n#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;\nmediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);\nmediump float relativeTexY = 0.5 + 0.25 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * line.lineHalfWidth;\nreturn line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;\n}\n#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float lineHalfWidth = line.lineHalfWidth;\nmediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;\nmediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);\nmediump float relativeTexX = 0.5 + 0.5 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\n#ifdef VV_COLOR\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\n#endif\nreturn line.opacity * line.color * color;\n}\n#else\nlowp vec4 getLineColor(LineData line) {\nreturn line.opacity * line.color;\n}\n#endif\nvec4 shadeLine(LineData line)\n{\nmediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nmediump float fragDist = length(line.normal) * line.lineHalfWidth;\nlowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\nlowp vec4 out_color = getLineColor(line) * alpha;\n#ifdef HIGHLIGHT\nout_color.a = step(1.0 / 255.0, out_color.a);\n#endif\n#ifdef ID\nif (out_color.a < 1.0 / 255.0) {\ndiscard;\n}\nout_color = vec4(line.id, 0.0);\n#endif\nreturn out_color;\n}", "line.vert": "float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {\n#ifdef VV_SIZE\nfloat refLineWidth = 2.0 * referenceHalfWidth;\nreturn 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);\n#else\nreturn lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\nfloat halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\nhalfWidth = max(halfWidth, 2.0);\n#endif\nreturn halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\nfloat thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nreturn thinLineFactor * halfWidth * offset;\n}\nLineData buildLine(\nout vec3 out_pos,\nin vec3 in_id,\nin vec2 in_pos,\nin vec4 in_color,\nin vec2 in_offset,\nin vec2 in_normal,\nin float in_accumulatedDist,\nin float in_lineHalfWidth,\nin float in_bitSet,\nin vec4 in_tlbr,\nin vec2 in_segmentDirection,\nin float in_referenceHalfWidth\n)\n{\nfloat aa        = 0.5 * u_antialiasing;\nfloat baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nfloat z         = 2.0 * step(baseWidth, 0.0);\nvec2  dist      = getDist(in_offset, halfWidth);\nvec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\nvec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvec4  color     = in_color;\nfloat opacity   = 1.0;\n#else\nvec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);\nfloat opacity   = getOpacity();\n#ifdef SDF\nconst float SDF_PATTERN_HALF_WIDTH = 15.5;\nfloat scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);\nfloat lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;\n#endif\n#endif\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nv_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\n#endif\nout_pos = vec3(pos.xy, z);\nreturn LineData(\ncolor,\nin_normal,\nhalfWidth,\nopacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nin_tlbr / u_mosaicSize.xyxy,\nvec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),\n#endif\n#ifdef SDF\nlineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nin_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),\n#endif\n#endif\nnorm(in_id)\n);\n}" } }, "symbologyTypeUtils.glsl": "#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\n#endif", text: { "common.glsl": "uniform highp vec2 u_mosaicSize;\nvarying highp vec3 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;", "hittest.glsl": "#include <materials/hittest/common.glsl>", "text.frag": "precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor()\n{\nfloat SDF_CUTOFF = (2.0 / 8.0);\nfloat SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\nedge /= 2.0;\n#endif\nlowp float aa = v_antialiasingWidth;\nlowp float alpha = smoothstep(edge - aa, edge + aa, dist);\nreturn alpha * v_color * v_opacity;\n}\n#endif\nvoid main()\n{\ngl_FragColor = getColor();\n}", "text.vert": "precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\n#include <materials/text/hittest.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_zoomRange;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHalo;\nfloat getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\nfloat r = getSize(referenceSize) / referenceSize;\nbaseSize *= r;\noffset.xy *= r;\nreturn baseSize;\n#endif\nreturn baseSize;\n}\nvoid main()\n{\nINIT;\nfloat a_referenceSize = a_aux.z * a_aux.z / 256.0;\nfloat a_bitSet        = a_aux.w;\nfloat a_fontSize      = a_texFontSize.z;\nvec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;\nvec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);\nfloat fontScale     = fontSize / SDF_FONT_SIZE;\nvec3  offset        = getRotation() * vec3(a_offset, 0.0);\nmat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\nv_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);\nv_opacity = getOpacity();\nv_id      = norm(a_id);\nv_tex     = a_texCoords / u_mosaicSize;\nv_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\nv_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n#ifdef HITTEST\nhighp vec3 out_pos  = vec3(0.);\nv_color = vec4(0.);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)\n+ u_tileMat3 * offset, fontSize / 2.);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);\n#else\ngl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);\n#endif\n}" }, "utils.glsl": "float rshift(in float u32, in int amount) {\nreturn floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\nfloat offset = pow(2.0, float(bitIndex));\nreturn mod(floor(bitset / offset), 2.0);\n}\nfloat getFilterBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex + 1);\n}\nfloat getHighlightBit(in float bitset) {\nreturn getBit(bitset, 0);\n}\nhighp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {\nfloat isAggregate = getBit(bitset.b, 7);\nreturn (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\nfloat r = mod(rshift(u32, 0), 255.0);\nfloat g = mod(rshift(u32, 8), 255.0);\nfloat b = mod(rshift(u32, 16), 255.0);\nfloat a = mod(rshift(u32, 24), 255.0);\nreturn vec4(r, g, b, a);\n}\nvec3 norm(in vec3 v) {\nreturn v /= 255.0;\n}\nvec4 norm(in vec4 v) {\nreturn v /= 255.0;\n}\nfloat max4(vec4 target) {\nreturn max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\nreturn (bytes - 127.0) / 127.0;\n}\nhighp float rand(in vec2 co) {\nhighp float a = 12.9898;\nhighp float b = 78.233;\nhighp float c = 43758.5453;\nhighp float dt = dot(co, vec2(a,b));\nhighp float sn = mod(dt, 3.14);\nreturn fract(sin(sn) * c);\n}", "vcommon.glsl": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\n#include <materials/barycentric.glsl>\nattribute vec2 a_pos;\nattribute highp vec3 a_id;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform highp mat3 u_tileMat3;\nuniform highp mat3 u_viewMat3;\nuniform highp float u_pixelRatio;\nuniform mediump float u_zoomFactor;\nuniform mediump float u_antialiasing;\nuniform mediump float u_currentZoom;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\n#ifdef SUPPORTS_TEXTURE_FLOAT\ntarget.rgba = getAttributeData2(a_id);\n#else\nvec4 data0 = getAttributeData2(a_id);\nvec4 data1 = getAttributeData3(a_id);\ntarget.r = u88VVToFloat(data0.rg * 255.0);\ntarget.g = u88VVToFloat(data0.ba * 255.0);\ntarget.b = u88VVToFloat(data1.rg * 255.0);\ntarget.a = u88VVToFloat(data1.ba * 255.0);\n#endif\n}\n#ifdef VV\n#define INIT loadVisualVariableData(VV_ADATA)\n#else\n#define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\nfloat isColorLocked   = getBit(a_bitSet, index);\nreturn getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\nreturn a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\nreturn getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\nreturn 1.0;\n#endif\n}\nfloat getSize(in float in_size) {\n#ifdef VV_SIZE\nreturn getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);\n#else\nreturn in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\nreturn getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\nreturn mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\nreturn ceil(getAttributeData0(a_id).x * 255.0);\n#else\nreturn getAttributeData0(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\nreturn getAttributeData1(a_id);\n}\nfloat getMinZoom() {\nvec4 data0 = getAttributeData0(a_id) * 255.0;\nreturn data0.g;\n}\nmat3 getMatrixNoDisplay(float isMapAligned) {\nreturn isMapAligned * u_viewMat3 * u_tileMat3 + (1.0 - isMapAligned) * u_tileMat3;\n}\nmat3 getMatrix(float isMapAligned) {\nreturn isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;\n}\nvec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef INSIDE\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(OUTSIDE)\npos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(HIGHLIGHT)\n#if !defined(HIGHLIGHT_ALL)\npos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));\n#endif\n#endif\npos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));\nreturn pos;\n}", "vv.glsl": "#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n#define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n#define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float u_vvColorValues[8];\nuniform vec4 u_vvColors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 u_vvSizeMinMaxValue;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float u_vvSizeScaleStopsValue;\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float u_vvSizeFieldStopsValues[6];\nuniform float u_vvSizeFieldStopsSizes[6];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float u_vvSizeUnitValueWorldToPixelsRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float u_vvOpacityValues[8];\nuniform float u_vvOpacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float u_vvRotationType;\n#endif\nbool isNan(float val) {\nreturn (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nfloat interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\ninterpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\nreturn u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 6;\nfloat getVVStopsSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nif (sizeValue <= u_vvSizeFieldStopsValues[0]) {\nreturn u_vvSizeFieldStopsSizes[0];\n}\nfor (int i = 1; i < VV_SIZE_N; ++i) {\nif (u_vvSizeFieldStopsValues[i] >= sizeValue) {\nfloat f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\nreturn mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n}\n}\nreturn u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nreturn u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\nif (isNan(opacityValue)) {\nreturn 1.0;\n}\nif (opacityValue <= u_vvOpacityValues[0]) {\nreturn u_vvOpacities[0];\n}\nfor (int i = 1; i < VV_OPACITY_N; ++i) {\nif (u_vvOpacityValues[i] >= opacityValue) {\nfloat f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\nreturn mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n}\n}\nreturn u_vvOpacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat4(1, 0, 0, 0,\n0, 1, 0, 0,\n0, 0, 1, 0,\n0, 0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (u_vvRotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat4(cosA, sinA, 0, 0,\n-sinA,  cosA, 0, 0,\n0,     0, 1, 0,\n0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat3(1, 0, 0,\n0, 1, 0,\n0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (u_vvRotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * -rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat3(cosA, -sinA, 0,\nsinA, cosA, 0,\n0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\nif (isNan(colorValue) || isColorLocked == 1.0) {\nreturn fallback;\n}\nif (colorValue <= u_vvColorValues[0]) {\nreturn u_vvColors[0];\n}\nfor (int i = 1; i < VV_COLOR_N; ++i) {\nif (u_vvColorValues[i] >= colorValue) {\nfloat f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\nreturn mix(u_vvColors[i-1], u_vvColors[i], f);\n}\n}\nreturn u_vvColors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\nreturn getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\nreturn u_vvSizeScaleStopsValue;\n#elif defined(VV_SIZE_FIELD_STOPS)\nfloat outSize = getVVStopsSize(vvSize, size);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\nreturn getVVUnitValue(vvSize, size);\n#else\nreturn size;\n#endif\n}" }, overlay: { overlay: { "overlay.frag": "precision lowp float;\nuniform lowp sampler2D u_texture;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_texture, v_uv);\ngl_FragColor = color *  u_opacity;\n}", "overlay.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_uv;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_perspective;\nvarying mediump vec2 v_uv;\nvoid main(void) {\nv_uv = a_uv;\nfloat w = 1.0 + dot(a_uv, u_perspective);\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0);\ngl_Position = vec4(w * pos.xy, 0.0, w);\n}" } }, "post-processing": { blit: { "blit.frag": "precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\ngl_FragColor = texture2D(u_texture, v_uv);\n}" }, bloom: { composite: { "composite.frag": "precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\nfloat mirrorFactor = 1.2 - factor;\nreturn mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\nvec4 color = u_bloomStrength * (\nlerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\nlerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\nlerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\nlerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\nlerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n);\ngl_FragColor = clamp(color, 0.0, 1.0);\n}" }, gaussianBlur: { "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = float(SIGMA);\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}" }, luminosityHighPass: { "luminosityHighPass.frag": "precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\nvec4 texel = texture2D(u_texture, v_uv);\nvec3 luma = vec3(0.299, 0.587, 0.114);\nfloat v = dot(texel.xyz, luma);\nvec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\nfloat alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\ngl_FragColor = mix(outputColor, texel, alpha);\n}" } }, blur: { gaussianBlur: { "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = u_sigma;\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}" }, "radial-blur": { "radial-blur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\nfloat samples[10];\nsamples[0] = -0.08;\nsamples[1] = -0.05;\nsamples[2] = -0.03;\nsamples[3] = -0.02;\nsamples[4] = -0.01;\nsamples[5] =  0.01;\nsamples[6] =  0.02;\nsamples[7] =  0.03;\nsamples[8] =  0.05;\nsamples[9] =  0.08;\nvec2 dir = 0.5 - v_uv;\nfloat dist = sqrt(dir.x * dir.x + dir.y * dir.y);\ndir = dir / dist;\nvec4 color = texture2D(u_colorTexture,v_uv);\nvec4 sum = color;\nfor (int i = 0; i < 10; i++) {\nsum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n}\nsum *= 1.0 / 11.0;\nfloat t = dist * sampleStrength;\nt = clamp(t, 0.0, 1.0);\ngl_FragColor = mix(color, sum, t);\n}" } }, dra: { "dra.frag": "precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\nvec4 minColor = texture2D(u_minColor, vec2(0.5));\nvec4 maxColor = texture2D(u_maxColor, vec2(0.5));\nvec4 color = texture2D(u_texture, v_uv);\nvec3 minColorUnpremultiply = minColor.rgb / minColor.a;\nvec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\nvec3 colorUnpremultiply = color.rgb / color.a;\nvec3 range = maxColorUnpremultiply - minColorUnpremultiply;\ngl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}", "min-max": { "min-max.frag": "#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\nvec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\nvec2 onePixel = vec2(1.0) / u_srcResolution;\nvec2 uv = (srcPixel + 0.5) / u_srcResolution;\nvec4 minColor = vec4(1.0);\nvec4 maxColor = vec4(0.0);\nfor (int y = 0; y < CELL_SIZE; ++y) {\nfor (int x = 0; x < CELL_SIZE; ++x) {\nvec2 offset = uv + vec2(x, y) * onePixel;\nminColor = min(minColor, texture2D(u_minTexture, offset));\nmaxColor = max(maxColor, texture2D(u_maxTexture, offset));\n}\n}\ngl_FragData[0] = minColor;\ngl_FragData[1] = maxColor;\n}" } }, "drop-shadow": { composite: { "composite.frag": "precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nuniform vec2 u_shadowOffset;\nuniform highp mat3 u_displayViewMat3;\nvarying vec2 v_uv;\nvoid main() {\nvec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);\nvec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\nvec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);\ngl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}" } }, "edge-detect": { "frei-chen": { "frei-chen.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\nG[0] = g0,\nG[1] = g1,\nG[2] = g2,\nG[3] = g3,\nG[4] = g4,\nG[5] = g5,\nG[6] = g6,\nG[7] = g7,\nG[8] = g8;\nmat3 I;\nfloat cnv[9];\nvec3 sample;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 9; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\nfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\ngl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}" }, sobel: { "sobel.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\ngl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}" } }, "edge-enhance": { "edge-enhance.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nvec4 color = texture2D(u_colorTexture, v_uv);\ngl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}" }, filterEffect: { "filterEffect.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_colorTexture, v_uv);\nvec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\nfloat a = color.a;\ngl_FragColor = vec4(a * rgbw.rgb, a);\n}" }, pp: { "pp.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}" } }, raster: { bitmap: { "bitmap.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform highp vec2 u_coordScale;\nuniform lowp float u_opacity;\n#include <filtering/bicubic.glsl>\nvoid main() {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);\n#else\nvec4 color = texture2D(u_texture, v_texcoord);\n#endif\ngl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);\n}", "bitmap.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" }, common: { "common.glsl": "uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\nvec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\ntargetLocation = projectPixelLocation(targetLocation);\n#endif\nreturn targetLocation;\n}\nbool isOutside(vec2 coords){\nif (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\nreturn true;\n} else {\nreturn false;\n}\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\nvec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\nvec4 color = texture2D(u_image, pixelLocation);\n#endif\nreturn color;\n}", "contrastBrightness.glsl": "uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\nvec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\nfloat maxI = 255.0;\nfloat mid = 128.0;\nfloat c = u_contrastOffset;\nfloat b = u_brightnessOffset;\nvec4 v;\nif (c > 0.0 && c < 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n} else if (c <= 0.0 && c > -100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n} else if (c == 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\nv = (sign(v) + 1.0) / 2.0;\n} else if (c == -100.0) {\nv = vec4(mid, mid, mid, currentPixel.a);\n}\nreturn vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);\n}", "projection.glsl": "uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n#ifdef LOOKUP_PROJECTION\nvec4 pv = texture2D(u_transformGrid, coords);\nreturn vec2(pv.r, pv.g);\n#endif\nvec2 index_image = floor(coords * u_targetImageSize);\nvec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\nvec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\nvec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\nvec2 srcLocation;\nvec2 transform_location = index_transform + oneTransformPixel * 0.5;\nif (pos.s <= pos.t) {\nvec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\nvec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n} else {\nvec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\nvec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n}\nreturn srcLocation;\n}" }, flow: { "getFadeOpacity.glsl": "uniform float u_decayRate;\nuniform float u_fadeToZero;\nfloat getFadeOpacity(float x) {\nfloat cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);\nreturn (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);\n}", "getFragmentColor.glsl": "vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {\nfloat featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);\nif (dist > featheringStart) {\ncolor *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);\n}\nreturn color;\n}", imagery: { "imagery.frag": "precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform float u_Min;\nuniform float u_Max;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nfloat getIntensity(float v) {\nreturn u_Min + v * (u_Max - u_Min);\n}\nvoid main(void) {\nvec4 sampled = texture2D(u_texture, v_texcoord);\nfloat intensity = getIntensity(sampled.r);\ngl_FragColor = getColor(intensity);\ngl_FragColor.a *= getOpacity(sampled.r);\ngl_FragColor.a *= sampled.a;\ngl_FragColor.rgb *= gl_FragColor.a;\n}", "imagery.vert": "attribute vec2 a_position;\nattribute vec2 a_texcoord;\nuniform mat3 u_dvsMat3;\nvarying vec2 v_texcoord;\nvoid main(void) {\nvec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}" }, particles: { "particles.frag": "precision highp float;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/getFragmentColor.glsl>\nvoid main(void) {\ngl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);\n}", "particles.vert": "attribute vec4 a_xyts0;\nattribute vec4 a_xyts1;\nattribute vec4 a_typeIdDurationSeed;\nattribute vec4 a_extrudeInfo;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/vv.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nvec2 position0 = a_xyts0.xy;\nfloat t0 = a_xyts0.z;\nfloat speed0 = a_xyts0.w;\nvec2 position1 = a_xyts1.xy;\nfloat t1 = a_xyts1.z;\nfloat speed1 = a_xyts1.w;\nfloat type = a_typeIdDurationSeed.x;\nfloat id = a_typeIdDurationSeed.y;\nfloat duration = a_typeIdDurationSeed.z;\nfloat seed = a_typeIdDurationSeed.w;\nvec2 e0 = a_extrudeInfo.xy;\nvec2 e1 = a_extrudeInfo.zw;\nfloat animationPeriod = duration + u_trailLength;\nfloat scaledTime = u_time * u_flowSpeed;\nfloat randomizedTime = scaledTime + seed * animationPeriod;\nfloat t = mod(randomizedTime, animationPeriod);\nfloat fUnclamped = (t - t0) / (t1 - t0);\nfloat f = clamp(fUnclamped, 0.0, 1.0);\nfloat clampedTime = mix(t0, t1, f);\nfloat speed = mix(speed0, speed1, f);\nvec2 extrude;\nvec2 position;\nfloat fadeOpacity;\nfloat introOpacity;\nif (type == 2.0) {\nif (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nvec2 ortho = mix(e0, e1, f);\nvec2 parallel;\nparallel = normalize(position1 - position0) * 0.5;\nif (id == 1.0) {\nextrude = ortho;\nv_texcoord = vec2(0.5, 0.0);\n} else if (id == 2.0) {\nextrude = -ortho;\nv_texcoord = vec2(0.5, 1.0);\n} else if (id == 3.0) {\nextrude = ortho + parallel;\nv_texcoord = vec2(1.0, 0.0);\n} else if (id == 4.0) {\nextrude = -ortho + parallel;\nv_texcoord = vec2(1.0, 1.0);\n}\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else {\nif (fUnclamped < 0.0) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nif (id == 1.0) {\nextrude = e0;\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 2.0) {\nextrude = -e0;\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 3.0) {\nextrude = mix(e0, e1, f);\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else if (id == 4.0) {\nextrude = -mix(e0, e1, f);\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n}\n}\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_color.a *= fadeOpacity;\nv_color.a *= mix(1.0, introOpacity, u_introFade);\nv_color.rgb *= v_color.a;\n}" }, streamlines: { "streamlines.frag": "precision highp float;\nvarying float v_side;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_size;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/getFragmentColor.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nfloat t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;\nvec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);\ncolor *= mix(1.0, 1.0 - exp(-v_time), u_introFade);\ngl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);\n}", "streamlines.vert": "attribute vec3 a_positionAndSide;\nattribute vec3 a_timeInfo;\nattribute vec2 a_extrude;\nattribute float a_speed;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_side;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nvoid main(void) {\nvec4 lineColor = getColor(a_speed);\nfloat lineOpacity = getOpacity(a_speed);\nfloat lineSize = getSize(a_speed);\nvec2 position = a_positionAndSide.xy;\nv_side = a_positionAndSide.z;\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_time = a_timeInfo.x;\nv_totalTime = a_timeInfo.y;\nv_timeSeed = a_timeInfo.z;\nv_color = lineColor;\nv_color.a *= lineOpacity;\nv_color.rgb *= v_color.a;\nv_size = lineSize;\n}" }, "vv.glsl": "#define MAX_STOPS 8\n#ifdef VV_COLOR\nuniform float u_color_stops[MAX_STOPS];\nuniform vec4 u_color_values[MAX_STOPS];\nuniform int u_color_count;\n#else\nuniform vec4 u_color;\n#endif\n#ifdef VV_OPACITY\nuniform float u_opacity_stops[MAX_STOPS];\nuniform float u_opacity_values[MAX_STOPS];\nuniform int u_opacity_count;\n#else\nuniform float u_opacity;\n#endif\n#ifdef VV_SIZE\nuniform float u_size_stops[MAX_STOPS];\nuniform float u_size_values[MAX_STOPS];\nuniform int u_size_count;\n#else\nuniform float u_size;\n#endif\nuniform float u_featheringOffset;\nvec4 getColor(float x) {\n#ifdef VV_COLOR\nvec4 color = u_color_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_color_count) {\nbreak;\n}\nfloat x1 = u_color_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_color_stops[i];\nvec4 y2 = u_color_values[i];\nif (x < x2) {\nvec4 y1 = u_color_values[i - 1];\ncolor = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\ncolor = y2;\n}\n}\n}\n#else\nvec4 color = u_color;\n#endif\nreturn color;\n}\nfloat getOpacity(float x) {\n#ifdef VV_OPACITY\nfloat opacity = u_opacity_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_opacity_count) {\nbreak;\n}\nfloat x1 = u_opacity_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_opacity_stops[i];\nfloat y2 = u_opacity_values[i];\nif (x < x2) {\nfloat y1 = u_opacity_values[i - 1];\nopacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nopacity = y2;\n}\n}\n}\n#else\nfloat opacity = u_opacity;\n#endif\nreturn opacity;\n}\nfloat getSize(float x) {\n#ifdef VV_SIZE\nfloat size = u_size_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_size_count) {\nbreak;\n}\nfloat x1 = u_size_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_size_stops[i];\nfloat y2 = u_size_values[i];\nif (x < x2) {\nfloat y1 = u_size_values[i - 1];\nsize = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nsize = y2;\n}\n}\n}\n#else\nfloat size = u_size;\n#endif\nreturn size + 2.0 * u_featheringSize * u_featheringOffset;\n}" }, hillshade: { "hillshade.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\n#include <raster/lut/colorize.glsl>\nfloat getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){\nif (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {\nreturn 0.0;\n}\nelse {\nreturn e;\n}\n}\nvec3 rgb2hsv(vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\nval = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\nvec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\nvec3 hsv = rgb2hsv(rgb.xyz);\nhsv.z = hillshade;\nreturn vec4(hsv2rgb(hsv), 1.0) * rgb.a;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nif (currentPixel.a == 0.0) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec2 axy = vec2(-1.0, -1.0);\nvec2 bxy = vec2(0.0, -1.0);\nvec2 cxy = vec2(1.0, -1.0);\nvec2 dxy = vec2(-1.0, 0.0);\nvec2 fxy = vec2(1.0, 0.0);\nvec2 gxy = vec2(-1.0, 1.0);\nvec2 hxy = vec2(0.0, 1.0);\nvec2 ixy = vec2(1.0, 1.0);\nvec2 onePixel = 1.0 / u_srcImageSize;\nif (pixelLocation.s < onePixel.s) {\naxy[0] = 1.0;\ndxy[0] = 1.0;\ngxy[0] = 1.0;\n}\nif (pixelLocation.t < onePixel.t) {\naxy[1] = 1.0;\nbxy[1] = 1.0;\ncxy[1] = 1.0;\n}\nif (pixelLocation.s > 1.0 - onePixel.s) {\ncxy[0] = -1.0;\nfxy[0] = -1.0;\nixy[0] = -1.0;\n}\nif (pixelLocation.t > 1.0 - onePixel.t) {\ngxy[1] = -1.0;\nhxy[1] = -1.0;\nixy[1] = -1.0;\n}\nvec4 va = texture2D(u_image, pixelLocation + onePixel * axy);\nvec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);\nvec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);\nvec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);\nvec4 ve = texture2D(u_image, pixelLocation);\nvec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);\nvec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);\nvec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);\nvec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);\nfloat dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;\nfloat dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;\nfloat dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\nfloat hillshade = 0.0;\nif (u_hillshadeType == 0){\nfloat cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\nfloat z = (u_cosZs[0] + cosDelta) / dzd;\nif (z < 0.0)  z = 0.0;\nhillshade = z;\n} else {\nfor (int k = 0; k < 6; k++) {\nfloat cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\nfloat z = (u_cosZs[k] + cosDelta) / dzd;\nif (z < 0.0) z = 0.0;\nhillshade = hillshade + z * u_weights[k];\nif (k == 5) break;\n}\n}\nfloat alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);\n#ifdef APPLY_COLORMAP\ngl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\ngl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n}", "hillshade.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" }, lut: { "colorize.glsl": "uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\nfloat clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\nvec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\nvec4 color = texture2D(u_colormap, clrPosition);\nvec4 result = vec4(color.rgb, color.a * currentPixel.a);\nreturn result;\n}", "lut.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nvec4 result = colorize(currentPixel, 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}", "lut.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos * u_scale + u_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" }, magdir: { "magdir.frag": "precision mediump float;\nvarying vec4 v_color;\nuniform lowp float u_opacity;\nvoid main() {\ngl_FragColor = v_color * u_opacity;\n}", "magdir.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nuniform float u_rotation;\nuniform vec4 u_colors[12];\nvarying vec4 v_color;\nvoid main()\n{\nfloat angle = a_offset.y + u_rotation;\n#ifndef ROTATION_GEOGRAPHIC\nangle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;\n#endif\nvec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 pos = a_pos + offset * sizePercentage * u_symbolSize;\nv_color = u_colors[int(a_vv.x)];\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}" }, reproject: { "reproject.frag": "precision mediump float;\nvarying vec2 v_texcoord;\n#include <raster/common/common.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n}", "reproject.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_position;\ngl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);\n}" }, scalar: { "scalar.frag": "precision mediump float;\nuniform lowp float u_opacity;\nvarying vec2 v_pos;\nconst vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);\nconst float outlineSize = 0.02;\nconst float innerRadius = 0.25;\nconst float outerRadius = 0.42;\nconst float innerSquareLength = 0.15;\nvoid main() {\nmediump float dist = length(v_pos);\nmediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);\nfillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));\n#ifdef INNER_CIRCLE\nmediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);\nfillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));\n#else\nmediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);\n#endif\ngl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;\n}", "scalar.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nvarying vec2 v_pos;\nvoid main()\n{\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 size = u_symbolSize * sizePercentage;\nvec2 pos = a_pos + a_offset * size;\nv_pos = a_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}" }, stretch: { "stretch.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\nif (val >= maxCutOff) {\nreturn maxOutput;\n} else if (val <= minCutOff) {\nreturn minOutput;\n}\nfloat stretchedVal;\nif (useGamma) {\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\nif (gamma > 1.0) {\ntempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n}\nstretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n} else {\nstretchedVal = minOutput + (val - minCutOff) * factor;\n}\nreturn stretchedVal;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\nreturn;\n#endif\nif (u_bandCount == 1) {\nfloat grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\nvec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\ngl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n} else {\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n}\n}", "stretch.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos * u_scale + u_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" } }, stencil: { "stencil.frag": "void main() {\ngl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}", "stencil.vert": "attribute vec2 a_pos;\nuniform mat3 u_worldExtent;\nvoid main() {\ngl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);\n}" }, tileInfo: { "tileInfo.frag": "uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\nlowp vec4 color = texture2D(u_texture, v_tex);\ngl_FragColor = 0.75 * color;\n}", "tileInfo.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\nmediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\nvec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\nv_tex = a_pos;\n}" }, util: { "atan2.glsl": "float atan2(in float y, in float x) {\nfloat t0, t1, t2, t3, t4;\nt3 = abs(x);\nt1 = abs(y);\nt0 = max(t3, t1);\nt1 = min(t3, t1);\nt3 = 1.0 / t0;\nt3 = t1 * t3;\nt4 = t3 * t3;\nt0 =         - 0.013480470;\nt0 = t0 * t4 + 0.057477314;\nt0 = t0 * t4 - 0.121239071;\nt0 = t0 * t4 + 0.195635925;\nt0 = t0 * t4 - 0.332994597;\nt0 = t0 * t4 + 0.999995630;\nt3 = t0 * t3;\nt3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;\nt3 = x < 0.0 ?  3.141592654 - t3 : t3;\nt3 = y < 0.0 ? -t3 : t3;\nreturn t3;\n}", "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}" } };
function o$1(e2) {
  let o2 = e$1;
  return e2.split("/").forEach((r2) => {
    o2 && (o2 = o2[r2]);
  }), o2;
}
const t$2 = new e$4(o$1);
function n$3(r2) {
  return t$2.resolveIncludes(r2);
}
const e = { shaders: { vertexShader: n$3("background/background.vert"), fragmentShader: n$3("background/background.frag") }, attributes: new Map([["a_pos", 0]]) };
const c$3 = () => ge("clip", { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }] });
class d$2 extends t$4 {
  constructor() {
    super(...arguments), this._color = r$2(0, 1, 0, 1);
  }
  dispose() {
    this._program && this._program.dispose();
  }
  prepareState({ context: r2 }) {
    r2.setStencilTestEnabled(true), r2.setBlendingEnabled(false), r2.setFaceCullingEnabled(false), r2.setColorMask(false, false, false, false), r2.setStencilOp(O$2.KEEP, O$2.KEEP, O$2.REPLACE), r2.setStencilWriteMask(255), r2.setStencilFunction(I.ALWAYS, 0, 255);
  }
  draw(t2, s2) {
    const { context: o2, state: a2, requestRender: m2, allowDelayedRender: d2 } = t2, f2 = c$3(), g2 = s2.getVAO(o2, a2, f2.attributes, f2.bufferLayouts);
    t$5(g2.indexBuffer) || (this._program || (this._program = e$5(o2, e)), d2 && r$3(m2) && !this._program.isCompiled ? m2() : (o2.useProgram(this._program), this._program.setUniform2fv("u_coord_range", [1, 1]), this._program.setUniform4fv("u_color", this._color), this._program.setUniformMatrix3fv("u_dvsMat3", a2.displayMat3), o2.bindVAO(g2), o2.drawElements(E$3.TRIANGLES, g2.indexBuffer.size, C.UNSIGNED_INT, 0), o2.bindVAO()));
  }
}
const m$6 = () => ge("overlay", { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.FLOAT }], tex: [{ location: 1, name: "a_uv", count: 2, type: C.UNSIGNED_SHORT }] });
class u$3 extends t$4 {
  constructor() {
    super(...arguments), this._desc = { vsPath: "overlay/overlay", fsPath: "overlay/overlay", attributes: new Map([["a_pos", 0], ["a_uv", 1]]) };
  }
  dispose() {
  }
  prepareState({ context: e2 }) {
    e2.setBlendingEnabled(true), e2.setColorMask(true, true, true, true), e2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(true), e2.setStencilFunction(I.GREATER, 255, 255);
  }
  draw(r2, s2) {
    const { context: o2, painter: n2, requestRender: i2, allowDelayedRender: u2 } = r2;
    if (!s2.isReady)
      return;
    const { computedOpacity: c2, dvsMat3: d2, isWrapAround: l2, perspectiveTransform: p2, texture: f2 } = s2;
    r2.timeline.begin(this.name);
    const _2 = n2.materialManager.getProgram(this._desc);
    if (u2 && r$3(i2) && !_2.isCompiled)
      return void i2();
    const v2 = m$6(), y2 = s2.getVAO(o2, v2.bufferLayouts, v2.attributes);
    if (!y2)
      return;
    o2.bindVAO(y2), o2.useProgram(_2), o2.bindTexture(f2, A$2), _2.setUniformMatrix3fv("u_dvsMat3", d2), _2.setUniform1i("u_texture", A$2), _2.setUniform1f("u_opacity", c2), _2.setUniform2fv("u_perspective", p2);
    const A2 = l2 ? 10 : 4;
    o2.drawArrays(E$3.TRIANGLE_STRIP, 0, A2), o2.bindVAO(), r2.timeline.end(this.name);
  }
}
class p$1 extends t$4 {
  constructor() {
    super(...arguments), this._computeDesc = new Map();
  }
  prepareState({ context: t2 }, e2) {
    e2 && e2.includes("hittest") ? t2.setBlendFunctionSeparate(R.ONE, R.ONE, R.ONE, R.ONE) : t2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), t2.setBlendingEnabled(true), t2.setColorMask(true, true, true, true), t2.setStencilWriteMask(0), t2.setStencilTestEnabled(true);
  }
  draw(e2, i2, s2) {
    const o2 = this.getGeometryType();
    i2.commit(e2);
    const a2 = i2.getGeometry(o2);
    t$5(a2) || (e2.timeline.begin(this.name), e2.attributeView.bindTextures(e2.context), e2.context.setStencilFunction(I.EQUAL, i2.stencilRef, 255), a2.forEachCommand((t2) => {
      const o3 = U$1.load(t2.materialKey).symbologyType;
      this.supportsSymbology(o3) && this.drawGeometry(e2, i2, t2, s2);
    }));
  }
  _setSharedUniforms(t2, u2, v2) {
    const { displayLevel: f2, pixelRatio: l2, state: p2, passOptions: c2 } = u2;
    r$3(c2) && c2.type === "hittest" && (t2.setUniform2fv("u_hittestPos", c2.position), t2.setUniform1f("u_hittestDist", c2.distance)), t2.setUniform1f("u_pixelRatio", l2), t2.setUniformMatrix3fv("u_tileMat3", v2.transforms.tileMat3), t2.setUniformMatrix3fv("u_viewMat3", p2.viewMat3), t2.setUniformMatrix3fv("u_dvsMat3", v2.transforms.dvs), t2.setUniformMatrix3fv("u_displayViewMat3", p2.displayViewMat3), t2.setUniform1f("u_currentZoom", Math.round(f2 * at)), t2.setUniform1i("u_attributeTextureSize", u2.attributeView.size), t2.setUniform1i("u_attributeData0", B$1), t2.setUniform1i("u_attributeData1", C$1), t2.setUniform1i("u_attributeData2", D$1), t2.setUniform1i("u_attributeData3", E$4), t2.setUniform1i("u_attributeData4", F$1), t2.setUniform1i("u_attributeData5", G$1);
  }
  _setSizeVVUniforms(t2, e2, i2, s2) {
    if (t2.vvSizeMinMaxValue && e2.setUniform4fv("u_vvSizeMinMaxValue", i2.vvSizeMinMaxValue), t2.vvSizeScaleStops && e2.setUniform1f("u_vvSizeScaleStopsValue", i2.vvSizeScaleStopsValue), t2.vvSizeFieldStops) {
      const t3 = i2.getSizeVVFieldStops(s2.key.level);
      e2.setUniform1fv("u_vvSizeFieldStopsValues", t3.values), e2.setUniform1fv("u_vvSizeFieldStopsSizes", t3.sizes);
    }
    t2.vvSizeUnitValue && e2.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", i2.vvSizeUnitValueToPixelsRatio);
  }
  _setColorAndOpacityVVUniforms(t2, e2, i2) {
    t2.vvColor && (e2.setUniform1fv("u_vvColorValues", i2.vvColorValues), e2.setUniform4fv("u_vvColors", i2.vvColors)), t2.vvOpacity && (e2.setUniform1fv("u_vvOpacityValues", i2.vvOpacityValues), e2.setUniform1fv("u_vvOpacities", i2.vvOpacities));
  }
  _setRotationVVUniforms(t2, e2, i2) {
    t2.vvRotation && e2.setUniform1f("u_vvRotationType", i2.vvMaterialParameters.vvRotationType === "geographic" ? 0 : 1);
  }
  _getTriangleDesc(t2, e2, i2 = ["a_pos"]) {
    const s2 = e2.bufferLayouts.geometry, o2 = i2.map((t3) => s2.findIndex((e3) => e3.name === t3)), a2 = `${t2}-${o2.join("-")}`;
    let r2 = this._computeDesc.get(a2);
    if (!r2) {
      const t3 = e2.strides, i3 = e2.strides.geometry, n2 = new Map(e2.attributes), m2 = s2.map((t4) => __spreadValues({}, t4)), u2 = Math.max(...e2.attributes.values()), v2 = { geometry: m2 };
      let f2 = 0;
      for (const e3 of o2) {
        const t4 = s2[e3];
        v2.geometry.push({ count: t4.count, name: t4.name + "1", divisor: t4.divisor, normalized: t4.normalized, offset: i3 + t4.offset, stride: i3, type: t4.type }), v2.geometry.push({ count: t4.count, name: t4.name + "2", divisor: t4.divisor, normalized: t4.normalized, offset: 2 * i3 + t4.offset, stride: i3, type: t4.type }), n2.set(t4.name + "1", u2 + ++f2), n2.set(t4.name + "2", u2 + ++f2);
      }
      r2 = { bufferLayouts: v2, attributes: n2, strides: t3 }, this._computeDesc.set(a2, r2);
    }
    return r2;
  }
}
function u$2(e2) {
  const t2 = { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_id", count: 3, type: C.UNSIGNED_BYTE }, { location: 2, name: "a_bitset", count: 1, type: C.UNSIGNED_BYTE }, { location: 3, name: "a_color", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 4, name: "a_aux1", count: 4, type: C.UNSIGNED_SHORT }, { location: 5, name: "a_aux2", count: 4, type: C.SHORT }, { location: 6, name: "a_aux3", count: 4, type: C.UNSIGNED_BYTE }, { location: 7, name: "a_zoomRange", count: 2, type: C.UNSIGNED_SHORT }] };
  switch (e2.symbologyType) {
    case S$1.SIMPLE:
    case S$1.OUTLINE_FILL_SIMPLE:
      t2.geometry.splice(7, 1), t2.geometry.splice(4, 1);
  }
  return { shader: "materials/fill", vertexLayout: t2 };
}
class c$2 extends p$1 {
  dispose() {
  }
  getGeometryType() {
    return E$5.FILL;
  }
  supportsSymbology(e2) {
    return e2 !== S$1.DOT_DENSITY;
  }
  drawGeometry(o2, r2, i2, l2) {
    const { context: c2, painter: y2, rendererInfo: p2, requiredLevel: _2, passOptions: d2, requestRender: f2, allowDelayedRender: E2 } = o2, S2 = w$1.load(i2.materialKey), g2 = p$4(S2.data), N2 = r$3(d2) && d2.type === "hittest", T2 = y2.materialManager, { shader: I2, vertexLayout: U2, hittestAttributes: x2 } = i$3(g2.programSpec, u$2(S2));
    let L2 = E$3.TRIANGLES, h2 = ge(S2.data, U2);
    N2 && (h2 = this._getTriangleDesc(i2.materialKey, h2, x2), L2 = E$3.POINTS);
    const { attributes: G2, bufferLayouts: O2 } = h2, b2 = T2.getMaterialProgram(o2, S2, I2, G2, l2);
    if (E2 && r$3(f2) && !b2.isCompiled)
      return void f2();
    if (c2.useProgram(b2), this._setSharedUniforms(b2, o2, r2), b2.setUniform2f("u_tileOffset", 512 * r2.key.col, 512 * r2.key.row), S2.textureBinding) {
      y2.textureManager.bindTextures(c2, b2, S2);
      const e2 = 1 / 2 ** (_2 - r2.key.level);
      b2.setUniform1f("u_zoomFactor", e2);
    }
    const D2 = 1 / o2.pixelRatio;
    b2.setUniform1f("u_blur", D2), b2.setUniform1f("u_antialiasing", D2), this._setSizeVVUniforms(S2, b2, p2, r2), this._setColorAndOpacityVVUniforms(S2, b2, p2);
    const R2 = i2.target.getVAO(c2, O2, G2, N2);
    let w2 = i2.indexCount, j = i2.indexFrom * Uint32Array.BYTES_PER_ELEMENT;
    N2 && (w2 /= 3, j /= 3), c2.bindVAO(R2), this._drawFills(o2, r2, b2, L2, w2, j);
  }
  _drawFills(e2, t2, o2, r2, a2, i2) {
    e2.context.drawElements(r2, a2, C.UNSIGNED_INT, i2);
  }
}
class O extends c$2 {
  constructor() {
    super(...arguments), this._dotTextureSize = 0, this._dotTextures = null, this._dotSamplers = new Int32Array([K, L$1]), this._dotVAO = null, this._dotDesc = { vsPath: "dot/dot", fsPath: "dot/dot", attributes: new Map([["a_pos", 0]]) };
  }
  dispose() {
    super.dispose(), this._disposeTextures(), this._dotFBO = a$2(this._dotFBO), this._dotVAO = a$2(this._dotVAO);
  }
  getGeometryType() {
    return E$5.FILL;
  }
  supportsSymbology(e2) {
    return e2 === S$1.DOT_DENSITY;
  }
  _drawFills(e2, o2, r2, s2, i2, n2) {
    const { passOptions: d2 } = e2;
    if (r$3(d2) && d2.type === "hittest")
      super._drawFills(e2, o2, r2, s2, i2, n2);
    else {
      const t2 = this._drawDotLocations(e2, o2, r2, i2, n2);
      this._drawDotDensity(e2, o2, t2);
    }
  }
  _drawDotDensity(e2, o2, r2) {
    const { context: s2, painter: i2, rendererInfo: n2, requestRender: d2, allowDelayedRender: a2 } = e2, l2 = i2.materialManager.getProgram(this._dotDesc);
    if (a2 && r$3(d2) && !l2.isCompiled)
      return void d2();
    const { rendererSchema: u2 } = n2;
    s$5(u2, "dot-density");
    const c2 = this._createDotDensityMesh(s2, this._dotDesc.attributes, { geometry: [{ name: "a_pos", count: 2, type: C.SHORT, divisor: 0, normalized: false, offset: 0, stride: 4 }] });
    s2.setStencilTestEnabled(true), s2.useProgram(l2), l2.setUniform1f("u_tileZoomFactor", 1), l2.setUniform1i("u_texture", this._dotSamplers[0]), l2.setUniform1f("u_dotSize", Math.max(u2.dotSize, 1)), l2.setUniform1f("u_pixelRatio", window.devicePixelRatio), this._setSharedUniforms(l2, e2, o2), s2.bindTexture(r2, this._dotSamplers[0]), s2.bindVAO(c2), s2.drawArrays(E$3.POINTS, 0, 262144);
  }
  _drawDotLocations(e2, t2, o2, r2, s2) {
    const { context: i2, rendererInfo: d2, requiredLevel: a2 } = e2, l2 = i2.getViewport(), { rendererSchema: u2 } = d2;
    s$5(u2, "dot-density");
    const { dotScale: c2, colors: f2, activeDots: T2, backgroundColor: p2, dotValue: x2 } = u2;
    i2.setViewport(0, 0, 512, 512);
    const w2 = i2.getBoundFramebufferObject(), D2 = this._createFBO(i2);
    i2.bindFramebuffer(D2), i2.setClearColor(0, 0, 0, 0), i2.clear(i2.gl.COLOR_BUFFER_BIT | i2.gl.STENCIL_BUFFER_BIT), i2.setStencilTestEnabled(false);
    const y2 = 1 / 2 ** (a2 - t2.key.level), g2 = o$5, S2 = g2 * window.devicePixelRatio * g2 * window.devicePixelRatio, E2 = 1 / y2 * (1 / y2), b2 = c2 ? e2.state.scale / c2 : 1;
    return o2.setUniform1f("u_tileZoomFactor", y2), o2.setUniform1f("u_tileDotsOverArea", S2 / (o$5 * window.devicePixelRatio * o$5 * window.devicePixelRatio)), o2.setUniformMatrix4fv("u_dotColors", f2), o2.setUniform4fv("u_isActive", T2), o2.setUniform4fv("u_dotBackgroundColor", p2), o2.setUniform1f("u_dotValue", Math.max(1, x2 * b2 * E2)), this._bindDotDensityTextures(i2, o2, d2, g2), i2.drawElements(E$3.TRIANGLES, r2, C.UNSIGNED_INT, s2), i2.setViewport(l2.x, l2.y, l2.width, l2.height), i2.bindFramebuffer(w2), D2.colorTexture;
  }
  _createFBO(e2) {
    if (t$5(this._dotFBO)) {
      const t2 = 512, o2 = 512, r2 = { target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, wrapMode: D.CLAMP_TO_EDGE, width: t2, height: o2 }, s2 = { colorTarget: Y.TEXTURE, depthStencilTarget: V.DEPTH_STENCIL_RENDER_BUFFER }, i2 = new s$6(e2, { width: t2, height: o2, internalFormat: B$2.DEPTH_STENCIL });
      this._dotFBO = new x$4(e2, s2, r2, i2);
    }
    return this._dotFBO;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let e2 = 0; e2 < this._dotTextures.length; e2++)
        this._dotTextures[e2].dispose();
      this._dotTextures = null;
    }
  }
  _bindDotDensityTextures(e2, t2, o2, r2) {
    const { rendererSchema: s2 } = o2;
    s$5(s2, "dot-density");
    const i2 = this._createDotDensityTextures(e2, r2, s2.seed);
    t2.setUniform1iv("u_dotTextures", this._dotSamplers);
    for (let n2 = 0; n2 < i2.length; n2++)
      e2.bindTexture(i2[n2], this._dotSamplers[n2]);
  }
  _createDotDensityMesh(e2, t2, r2) {
    if (t$5(this._dotVAO)) {
      const o2 = 2, s2 = new Int16Array(262144 * o2);
      for (let e3 = 0; e3 < 512; e3++)
        for (let t3 = 0; t3 < 512; t3++)
          s2[o2 * (t3 + 512 * e3)] = t3, s2[o2 * (t3 + 512 * e3) + 1] = e3;
      const i2 = E$2.createVertex(e2, F.STATIC_DRAW, s2);
      this._dotVAO = new a$1(e2, t2, r2, { geometry: i2 }, null);
    }
    return this._dotVAO;
  }
  _createDotDensityTextures(e2, t2, o2) {
    if (this._dotTextureSize === t2 && this._seed === o2 || (this._disposeTextures(), this._dotTextureSize = t2, this._seed = o2), this._dotTextures === null) {
      const s2 = new t$8(o2);
      this._dotTextures = [this._allocDotDensityTexture(e2, t2, s2), this._allocDotDensityTexture(e2, t2, s2)];
    }
    return this._dotTextures;
  }
  _allocDotDensityTexture(e2, t2, o2) {
    const r2 = new Float32Array(t2 * t2 * 4);
    for (let s2 = 0; s2 < r2.length; s2++)
      r2[s2] = o2.getFloat();
    return new E$1(e2, { wrapMode: D.REPEAT, pixelFormat: P.RGBA, dataType: G.FLOAT, samplingMode: L.NEAREST, width: t2, height: t2 }, r2);
  }
}
const d$1 = { shader: "materials/icon", vertexLayout: { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_vertexOffset", count: 2, type: C.SHORT }, { location: 2, name: "a_texCoords", count: 2, type: C.UNSIGNED_SHORT }, { location: 3, name: "a_bitSetAndDistRatio", count: 2, type: C.UNSIGNED_SHORT }, { location: 4, name: "a_id", count: 4, type: C.UNSIGNED_BYTE }, { location: 5, name: "a_color", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 6, name: "a_outlineColor", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 7, name: "a_sizeAndOutlineWidth", count: 4, type: C.UNSIGNED_BYTE }, { location: 8, name: "a_zoomRange", count: 2, type: C.UNSIGNED_SHORT }] }, hittestAttributes: ["a_vertexOffset", "a_texCoords"] };
class u$1 extends p$1 {
  dispose() {
  }
  getGeometryType() {
    return E$5.MARKER;
  }
  supportsSymbology(t2) {
    return t2 !== S$1.HEATMAP && t2 !== S$1.PIE_CHART;
  }
  drawGeometry(o2, a2, i2, m2) {
    const { context: u2, painter: c2, rendererInfo: p2, state: y2, passOptions: _2, requestRender: f2, allowDelayedRender: E2 } = o2, S2 = N$1.load(i2.materialKey), N2 = p$4(S2.data), T2 = r$3(_2) && _2.type === "hittest", { shader: g2, vertexLayout: x2, hittestAttributes: R2 } = i$3(N2.programSpec, d$1);
    let h2 = E$3.TRIANGLES, U2 = ge(S2.data, x2);
    T2 && (U2 = this._getTriangleDesc(i2.materialKey, U2, R2), h2 = E$3.POINTS);
    const { attributes: A2, bufferLayouts: O2 } = U2, G2 = c2.materialManager.getMaterialProgram(o2, S2, g2, A2, m2);
    if (E2 && r$3(f2) && !G2.isCompiled)
      return void f2();
    u2.useProgram(G2), S2.textureBinding && c2.textureManager.bindTextures(u2, G2, S2, true), this._setSharedUniforms(G2, o2, a2);
    const I2 = S2.vvRotation ? y2.displayViewMat3 : y2.displayMat3;
    G2.setUniformMatrix3fv("u_displayMat3", I2), this._setSizeVVUniforms(S2, G2, p2, a2), this._setColorAndOpacityVVUniforms(S2, G2, p2), this._setRotationVVUniforms(S2, G2, p2);
    const M2 = i2.target.getVAO(u2, O2, A2, T2);
    let b2 = i2.indexCount, D2 = i2.indexFrom * Uint32Array.BYTES_PER_ELEMENT;
    T2 && (b2 /= 3, D2 /= 3), u2.bindVAO(M2), this._drawMarkers(o2, a2, G2, h2, b2, D2, T2), u2.bindVAO(null);
  }
  _drawMarkers(t2, e2, o2, a2, r2, i2, n2) {
    t2.context.drawElements(a2, r2, C.UNSIGNED_INT, i2);
  }
}
class t$1 {
  constructor() {
    this.name = this.constructor.name;
  }
  createOptions(t2, r2) {
    return null;
  }
}
function n$2(n2, i2) {
  const { textureFloat: f2, colorBufferFloat: s2 } = n2.capabilities, u2 = f2 == null ? void 0 : f2.textureFloat, m2 = f2 == null ? void 0 : f2.textureFloatLinear, _2 = f2 == null ? void 0 : f2.textureHalfFloat, p2 = f2 == null ? void 0 : f2.textureHalfFloatLinear, d2 = f2 == null ? void 0 : f2.HALF_FLOAT, x2 = s2 == null ? void 0 : s2.textureFloat, b2 = s2 == null ? void 0 : s2.textureHalfFloat, c2 = s2 == null ? void 0 : s2.floatBlend, { floatBufferBlendWorking: h2 } = f$2(n2.driverTest);
  if (!u2 && !_2)
    throw new s$7("heatmap:missing-texture-float", "HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");
  if (!x2 && !b2)
    throw new s$7("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(c2 && h2 || b2))
    throw new s$7("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (h2 ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const E2 = u2 && x2 && c2 && h2, F2 = _2 && b2, R2 = m2, L$12 = p2, T2 = !!(s2 == null ? void 0 : s2.R32F), w2 = !!(s2 == null ? void 0 : s2.R16F);
  if (E2 && (R2 || !L$12))
    return R2 || i2.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), { dataType: G.FLOAT, samplingMode: R2 ? L.LINEAR : L.NEAREST, pixelFormat: T2 ? P.RED : P.RGBA, internalFormat: T2 ? U.R32F : P.RGBA };
  if (F2)
    return L$12 || i2.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."), { dataType: d2, samplingMode: L$12 ? L.LINEAR : L.NEAREST, pixelFormat: w2 ? P.RED : P.RGBA, internalFormat: w2 ? U.R16F : P.RGBA };
  throw new s$7("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}
const S = s$8.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap");
function x$2(e2) {
  return e2.type === "heatmap";
}
class B extends u$1 {
  constructor() {
    super(...arguments), this.brushEffect = new y();
  }
  supportsSymbology(e2) {
    return e2 === S$1.HEATMAP;
  }
  dispose() {
    super.dispose(), this.brushEffect.dispose(), this.brushEffect = null;
  }
  prepareState() {
  }
  drawGeometry(e2, t2, r2, i2) {
    const { defines: a2 } = this.brushEffect.loadQualityProfile(e2.context);
    super.drawGeometry(e2, t2, r2, i2 ? [...i2, ...a2] : a2);
  }
  _drawMarkers(e2, t2, r2, i2, a2, s2, u2) {
    const { context: n2, rendererInfo: h2, state: f2 } = e2, { rendererSchema: m2 } = h2;
    s$5(m2, "heatmap");
    const { referenceScale: d2, radius: p2, isFieldActive: _2 } = m2, b2 = p2 * (d2 !== 0 ? d2 / f2.scale : 1);
    r2.setUniform1f("u_radius", b2), u2 || (r2.setUniform1f("u_isFieldActive", _2), n2.setStencilFunction(I.GEQUAL, t2.stencilRef, 255)), n2.drawElements(i2, a2, C.UNSIGNED_INT, s2);
  }
}
const v = { vsPath: "heatmap/heatmapResolve", fsPath: "heatmap/heatmapResolve", attributes: new Map([["a_position", 0]]) };
class y extends t$1 {
  constructor() {
    super(...arguments), this.name = this.constructor.name;
  }
  createOptions({ passOptions: e2 }) {
    return e2;
  }
  dispose() {
    this._prevFBO = null, this._accumulateOutputTexture = a$2(this._accumulateOutputTexture), r$3(this._accumulateFramebuffer) && this._accumulateFramebuffer.detachDepthStencilBuffer(), this._accumulateOutputStencilBuffer = a$2(this._accumulateOutputStencilBuffer), this._accumulateFramebuffer = a$2(this._accumulateFramebuffer), this._resolveGradientTexture = a$2(this._resolveGradientTexture), this._tileQuad = a$2(this._tileQuad);
  }
  bind(e2) {
    const { context: t2, rendererInfo: i2, passOptions: a2 } = e2, { rendererSchema: s2 } = i2;
    !(r$3(a2) && a2.type === "hittest") && x$2(s2) && (this._prevFBO = t2.getBoundFramebufferObject(), this._prevViewport = t2.getViewport(), s$5(s2, "heatmap"), this._loadResources(e2), this._updateResources(t2, s2), t2.bindFramebuffer(this._accumulateFramebuffer), t2.setViewport(0, 0, this._accumulateFramebuffer.width, this._accumulateFramebuffer.height), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(true), t2.setBlendFunction(R.ONE, R.ONE), t2.setClearColor(0, 0, 0, 0), t2.clear(_$2.COLOR_BUFFER_BIT));
  }
  unbind() {
    this._prevFBO = null, this._prevViewport = null;
  }
  draw(e2) {
    const { context: t2, painter: i2, rendererInfo: a2, passOptions: s2 } = e2, { rendererSchema: u2 } = a2;
    if (r$3(s2) && s2.type === "hittest" || !x$2(u2))
      return;
    const { defines: n2 } = this.loadQualityProfile(t2), o2 = i2.materialManager.getProgram(v, n2);
    t2.useProgram(o2), t2.bindFramebuffer(this._prevFBO), t2.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), t2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), t2.setStencilTestEnabled(false);
    const { radius: h2, minDensity: c2, densityRange: l2 } = u2;
    t2.bindTexture(this._accumulateOutputTexture, 8), t2.bindTexture(this._resolveGradientTexture, 9), o2.setUniform1i("u_texture", 8), o2.setUniform1i("u_gradient", 9), o2.setUniform2f("u_densityMinAndInvRange", c2, 1 / l2), o2.setUniform1f("u_densityNormalization", 3 / (h2 * h2 * Math.PI)), this._tileQuad.draw();
  }
  _loadResources({ context: e2, painter: t2 }) {
    var _a, _b, _c, _d, _e;
    const { dataType: r2, samplingMode: i2, pixelFormat: a2, internalFormat: u2, shadingRate: n2, requiresSharedStencilBuffer: o2 } = this.loadQualityProfile(e2), { width: h2, height: c2 } = this._prevViewport, l2 = h2 * n2, f2 = c2 * n2;
    (_a = this._accumulateOutputTexture) != null ? _a : this._accumulateOutputTexture = new E$1(e2, { target: M$1.TEXTURE_2D, pixelFormat: a2, internalFormat: u2, dataType: r2, samplingMode: i2, wrapMode: D.CLAMP_TO_EDGE, width: l2, height: f2 }), o2 || ((_b = this._accumulateOutputStencilBuffer) != null ? _b : this._accumulateOutputStencilBuffer = new s$6(e2, { width: l2, height: f2, internalFormat: B$2.DEPTH_STENCIL })), (_c = this._accumulateFramebuffer) != null ? _c : this._accumulateFramebuffer = new x$4(e2, {}, this._accumulateOutputTexture, o2 ? t2.getSharedStencilBuffer() : this._accumulateOutputStencilBuffer), (_d = this._resolveGradientTexture) != null ? _d : this._resolveGradientTexture = new E$1(e2, { target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.LINEAR, wrapMode: D.CLAMP_TO_EDGE }), (_e = this._tileQuad) != null ? _e : this._tileQuad = new n$5(e2, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  _updateResources(e2, t2) {
    const { gradientHash: i2, gradient: a2 } = t2;
    this._prevGradientHash !== i2 && (this._resolveGradientTexture.resize(a2.length / 4, 1), this._resolveGradientTexture.setData(a2), this._prevGradientHash = i2);
    const { shadingRate: s2, requiresSharedStencilBuffer: u2 } = this.loadQualityProfile(e2), { width: n2, height: o2 } = this._prevViewport, h2 = n2 * s2, c2 = o2 * s2, { width: l2, height: f2 } = this._accumulateFramebuffer;
    if (l2 !== h2 || f2 !== c2) {
      const e3 = this._accumulateFramebuffer.depthStencilAttachment;
      if (u2 && r$3(e3)) {
        const { width: t3, height: r2 } = e3.descriptor;
        t3 === h2 && r2 === c2 || (S.errorOnce("Attempted to resize shared stencil buffer! Detaching instead."), this._accumulateFramebuffer.detachDepthStencilBuffer());
      }
      this._accumulateFramebuffer.resize(h2, c2);
    }
    u2 || e2.blitFramebuffer(this._prevFBO, this._accumulateFramebuffer, 0, 0, this._prevFBO.width, this._prevFBO.height, 0, 0, this._accumulateFramebuffer.width, this._accumulateFramebuffer.height, _$2.STENCIL_BUFFER_BIT, L.NEAREST);
  }
  loadQualityProfile(e2) {
    if (t$5(this._qualityProfile)) {
      const t2 = n$2(e2, S), r2 = e2.type === r$4.WEBGL1;
      this._qualityProfile = __spreadProps(__spreadValues({}, t2), { requiresSharedStencilBuffer: r2, shadingRate: r2 ? 1 : 0.25, defines: t2.dataType !== G.FLOAT ? ["heatmapPrecisionHalfFloat"] : [] });
    }
    return this._qualityProfile;
  }
}
const r$1 = { geometry: [new t$7("a_pos", 2, C.BYTE, 0, 2)] }, t = { geometry: [new t$7("a_pos", 2, C.BYTE, 0, 4), new t$7("a_tex", 2, C.BYTE, 2, 4)] }, m$5 = { geometry: [new t$7("a_pos", 2, C.UNSIGNED_SHORT, 0, 4)] };
const r = { shaders: { vertexShader: n$3("tileInfo/tileInfo.vert"), fragmentShader: n$3("tileInfo/tileInfo.frag") }, attributes: new Map([["a_pos", 0]]) };
const A = 300, b = 32;
class x$1 extends t$4 {
  constructor() {
    super(...arguments), this._color = r$2(1, 0, 0, 1);
  }
  dispose() {
    this._outlineProgram && (this._outlineProgram.dispose(), this._outlineProgram = null), this._tileInfoProgram && (this._tileInfoProgram.dispose(), this._tileInfoProgram = null), this._outlineVertexArrayObject && (this._outlineVertexArrayObject.dispose(), this._outlineVertexArrayObject = null), this._tileInfoVertexArrayObject && (this._tileInfoVertexArrayObject.dispose(), this._tileInfoVertexArrayObject = null), this._canvas = null;
  }
  prepareState({ context: t2 }) {
    t2.setBlendingEnabled(true), t2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), t2.setColorMask(true, true, true, true), t2.setStencilWriteMask(0), t2.setStencilTestEnabled(false);
  }
  draw(e2, r2) {
    const { context: i2, requestRender: o2, allowDelayedRender: s2 } = e2;
    if (!r2.isReady)
      return;
    if (this._loadWGLResources(i2), s2 && r$3(o2) && (!this._outlineProgram.isCompiled || !this._tileInfoProgram.isCompiled))
      return void o2();
    i2.bindVAO(this._outlineVertexArrayObject), i2.useProgram(this._outlineProgram), this._outlineProgram.setUniformMatrix3fv("u_dvsMat3", r2.transforms.dvs), this._outlineProgram.setUniform2f("u_coord_range", r2.rangeX, r2.rangeY), this._outlineProgram.setUniform1f("u_depth", 0), this._outlineProgram.setUniform4fv("u_color", this._color), i2.drawArrays(E$3.LINE_STRIP, 0, 4);
    const n2 = this._getTexture(i2, r2);
    n2 ? (i2.bindVAO(this._tileInfoVertexArrayObject), i2.useProgram(this._tileInfoProgram), i2.bindTexture(n2, 0), this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3", r2.transforms.dvs), this._tileInfoProgram.setUniform1f("u_depth", 0), this._tileInfoProgram.setUniform2f("u_coord_ratio", r2.rangeX / r2.width, r2.rangeY / r2.height), this._tileInfoProgram.setUniform2f("u_delta", 8, 8), this._tileInfoProgram.setUniform2f("u_dimensions", n2.descriptor.width, n2.descriptor.height), i2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4), i2.bindVAO()) : i2.bindVAO();
  }
  _loadWGLResources(t2) {
    if (this._outlineProgram && this._tileInfoProgram)
      return;
    const e$12 = e$5(t2, e), i2 = e$5(t2, r), a2 = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]), l2 = E$2.createVertex(t2, F.STATIC_DRAW, a2), m2 = new a$1(t2, e.attributes, r$1, { geometry: l2 }), _2 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), f2 = E$2.createVertex(t2, F.STATIC_DRAW, _2), h2 = new a$1(t2, r.attributes, r$1, { geometry: f2 });
    this._outlineProgram = e$12, this._tileInfoProgram = i2, this._outlineVertexArrayObject = m2, this._tileInfoVertexArrayObject = h2;
  }
  _getTexture(t2, e2) {
    if (e2.texture && e2.triangleCountReportedInDebug === e2.triangleCount)
      return e2.texture;
    e2.triangleCountReportedInDebug = e2.triangleCount, this._canvas || (this._canvas = document.createElement("canvas"), this._canvas.setAttribute("id", "canvas2d"), this._canvas.setAttribute("width", `${A}`), this._canvas.setAttribute("height", `${b}`), this._canvas.setAttribute("style", "display:none"));
    const r2 = e2.triangleCount;
    let i2 = e2.key.id;
    e2.triangleCount > 0 && (i2 += `, ${r2}`);
    const o2 = this._canvas, s2 = o2.getContext("2d");
    return s2.font = "24px sans-serif", s2.textAlign = "left", s2.textBaseline = "top", s2.clearRect(0, 0, A, b), r2 > 1e5 ? (s2.fillStyle = "red", s2.fillRect(0, 0, A, b), s2.fillStyle = "black") : (s2.clearRect(0, 0, A, b), s2.fillStyle = "blue"), s2.fillText(i2, 0, 0), e2.texture = new E$1(t2, { target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, wrapMode: D.CLAMP_TO_EDGE }, o2), e2.texture;
  }
}
class s$2 extends u$1 {
  supportsSymbology(r2) {
    return r2 === S$1.PIE_CHART;
  }
  _drawMarkers(o2, r2, s2, n2, l2, f2, u2) {
    const { context: i2 } = o2, { rendererInfo: m2 } = o2, { rendererSchema: a2 } = m2;
    s$5(a2, "pie-chart"), s2.setUniform4fv("u_colors", a2.colors), s2.setUniform4fv("u_defaultColor", a2.defaultColor), s2.setUniform4fv("u_othersColor", a2.othersColor), s2.setUniform4fv("u_outlineColor", a2.outlineColor), s2.setUniform1f("u_donutRatio", a2.holePercentage), s2.setUniform1f("u_sectorThreshold", a2.sectorThreshold), s2.setUniform1f("u_outlineWidth", a2.outlineWidth), i2.drawElements(n2, l2, C.UNSIGNED_INT, f2);
  }
}
class h$1 extends t$4 {
  constructor() {
    super(...arguments), this._color = r$2(1, 0, 0, 1), this._initialized = false;
  }
  dispose() {
    this._solidProgram && (this._solidProgram.dispose(), this._solidProgram = null), this._solidVertexArrayObject && (this._solidVertexArrayObject.dispose(), this._solidVertexArrayObject = null);
  }
  prepareState({ context: r2 }) {
    r2.setDepthWriteEnabled(false), r2.setDepthTestEnabled(false), r2.setStencilTestEnabled(true), r2.setBlendingEnabled(false), r2.setColorMask(false, false, false, false), r2.setStencilOp(O$2.KEEP, O$2.KEEP, O$2.REPLACE), r2.setStencilWriteMask(255);
  }
  draw(e2, t2) {
    const { context: i2, requestRender: s2, allowDelayedRender: o2 } = e2;
    this._initialized || this._initialize(i2), o2 && r$3(s2) && !this._solidProgram.isCompiled ? s2() : (i2.setStencilFunctionSeparate(N$2.FRONT_AND_BACK, I.GREATER, t2.stencilRef, 255), i2.bindVAO(this._solidVertexArrayObject), i2.useProgram(this._solidProgram), this._solidProgram.setUniformMatrix3fv("u_dvsMat3", t2.transforms.dvs), this._solidProgram.setUniform2fv("u_coord_range", [t2.rangeX, t2.rangeY]), this._solidProgram.setUniform1f("u_depth", 0), this._solidProgram.setUniform4fv("u_color", this._color), i2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4), i2.bindVAO());
  }
  _initialize(r2) {
    if (this._initialized)
      return true;
    const e$12 = e$5(r2, e);
    if (!e$12)
      return false;
    const i2 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), a2 = E$2.createVertex(r2, F.STATIC_DRAW, i2), l2 = new a$1(r2, e.attributes, r$1, { geometry: a2 });
    return this._solidProgram = e$12, this._solidVertexArrayObject = l2, this._initialized = true, true;
  }
}
class d extends t$4 {
  constructor() {
    super(...arguments), this._color = r$2(1, 0, 0, 1), this._patternMatrix = e$3(), this._programOptions = { id: false, pattern: false };
  }
  dispose() {
    this._vao && (this._vao.dispose(), this._vao = null);
  }
  drawMany(e2, o2) {
    const { context: c2, painter: m2, styleLayerUID: p2, requestRender: _2, allowDelayedRender: d2 } = e2;
    this._loadWGLResources(e2);
    const h2 = e2.displayLevel, g2 = e2.styleLayer, v2 = g2.backgroundMaterial, y2 = m2.vectorTilesMaterialManager, b2 = g2.getPaintValue("background-color", h2), M2 = g2.getPaintValue("background-opacity", h2), x2 = g2.getPaintValue("background-pattern", h2), j = x2 !== void 0, U2 = b2[3] * M2, w2 = 1 | window.devicePixelRatio, L$12 = e2.spriteMosaic;
    let A2, P2;
    const I$2 = w2 > _$3 ? 2 : 1, R2 = e2.drawPhase === I$1.HITTEST, k = this._programOptions;
    k.id = R2, k.pattern = j;
    const T2 = y2.getMaterialProgram(c2, v2, k);
    if (d2 && r$3(_2) && !T2.isCompiled)
      _2();
    else {
      if (c2.bindVAO(this._vao), c2.useProgram(T2), j) {
        const t2 = L$12.getMosaicItemPosition(x2, true);
        if (r$3(t2)) {
          const { tl: e3, br: o3, page: s2 } = t2;
          A2 = o3[0] - e3[0], P2 = o3[1] - e3[1];
          const a2 = L$12.getPageSize(s2);
          r$3(a2) && (L$12.bind(c2, L.LINEAR, s2, Z), T2.setUniform4f("u_tlbr", e3[0], e3[1], o3[0], o3[1]), T2.setUniform2fv("u_mosaicSize", a2), T2.setUniform1i("u_texture", Z));
        }
        T2.setUniform1f("u_opacity", M2);
      } else
        this._color[0] = U2 * b2[0], this._color[1] = U2 * b2[1], this._color[2] = U2 * b2[2], this._color[3] = U2, T2.setUniform4fv("u_color", this._color);
      if (T2.setUniform1f("u_depth", g2.z || 0), R2) {
        const t2 = M$3(p2 + 1);
        T2.setUniform4fv("u_id", t2);
      }
      for (const r2 of o2) {
        if (T2.setUniform1f("u_coord_range", r2.rangeX), T2.setUniformMatrix3fv("u_dvsMat3", r2.transforms.dvs), j) {
          const e3 = Math.max(2 ** (Math.round(h2) - r2.key.level), 1), o3 = I$2 * r2.width * e3, i2 = o3 / f$3(A2), s2 = o3 / f$3(P2);
          this._patternMatrix[0] = i2, this._patternMatrix[4] = s2, T2.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
        }
        c2.setStencilFunction(I.EQUAL, 0, 255), c2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4);
      }
    }
  }
  _loadWGLResources(t2) {
    if (this._vao)
      return;
    const { context: r2, styleLayer: e2 } = t2, o2 = e2.backgroundMaterial, i2 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), s2 = E$2.createVertex(r2, F.STATIC_DRAW, i2), a2 = new a$1(r2, o2.getAttributeLocations(), o2.getLayoutInfo(), { geometry: s2 });
    this._vao = a2;
  }
}
class c$1 extends t$4 {
  constructor() {
    super(...arguments), this._programOptions = { id: false };
  }
  dispose() {
  }
  drawMany(n2, c2) {
    const { context: m2, displayLevel: d2, requiredLevel: f2, state: u2, drawPhase: p2, painter: y2, spriteMosaic: g2, styleLayerUID: v2, requestRender: E2, allowDelayedRender: M2 } = n2;
    if (!c2.some((e2) => {
      var _a, _b;
      return (_b = (_a = e2.layerData.get(v2)) == null ? void 0 : _a.circleIndexCount) != null ? _b : false;
    }))
      return;
    const T2 = n2.styleLayer, x2 = T2.circleMaterial, I$2 = y2.vectorTilesMaterialManager, U2 = 1.2, _2 = T2.getPaintValue("circle-translate", d2), R2 = T2.getPaintValue("circle-translate-anchor", d2), h2 = p2 === I$1.HITTEST, D2 = this._programOptions;
    D2.id = h2;
    const L2 = I$2.getMaterialProgram(m2, x2, D2);
    if (M2 && r$3(E2) && !L2.isCompiled)
      return void E2();
    m2.useProgram(L2), L2.setUniformMatrix3fv("u_displayMat3", R2 === r$7.VIEWPORT ? u2.displayMat3 : u2.displayViewMat3), L2.setUniform2fv("u_circleTranslation", _2), L2.setUniform1f("u_depth", T2.z), L2.setUniform1f("u_antialiasingWidth", U2);
    let S2 = -1;
    if (h2) {
      const e2 = M$3(v2 + 1);
      L2.setUniform4fv("u_id", e2);
    }
    for (const e2 of c2) {
      if (!e2.layerData.has(v2))
        continue;
      e2.key.level !== S2 && (S2 = e2.key.level, x2.setDataUniforms(L2, d2, T2, S2, g2));
      const r2 = e2.layerData.get(v2);
      if (!r2.circleIndexCount)
        continue;
      r2.prepareForRendering(m2);
      const i2 = r2.circleVertexArrayObject;
      t$5(i2) || (m2.bindVAO(i2), L2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), f2 !== e2.key.level ? m2.setStencilFunction(I.EQUAL, e2.stencilRef, 255) : m2.setStencilFunction(I.GREATER, 255, 255), m2.drawElements(E$3.TRIANGLES, r2.circleIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * r2.circleIndexStart), e2.triangleCount += r2.circleIndexCount / 3);
    }
  }
}
const c = 1 / 65536;
class m$4 extends t$4 {
  constructor() {
    super(...arguments), this._fillProgramOptions = { id: false, pattern: false }, this._outlineProgramOptions = { id: false };
  }
  dispose() {
  }
  drawMany(t2, e2) {
    const { displayLevel: i2, drawPhase: r2, renderPass: a2, spriteMosaic: l2, styleLayerUID: s2 } = t2;
    let f2 = false;
    for (const n2 of e2)
      if (n2.layerData.has(s2)) {
        const t3 = n2.layerData.get(s2);
        if (t3.fillIndexCount > 0 || t3.outlineIndexCount > 0) {
          f2 = true;
          break;
        }
      }
    if (!f2)
      return;
    const u2 = t2.styleLayer, d2 = u2.getPaintProperty("fill-pattern"), c2 = d2 !== void 0, m2 = c2 && d2.isDataDriven;
    let p2;
    if (c2 && !m2) {
      const t3 = d2.getValue(i2);
      p2 = l2.getMosaicItemPosition(t3, true);
    }
    const y2 = !c2 && u2.getPaintValue("fill-antialias", i2);
    let g2 = true, _2 = 1;
    if (!c2) {
      const t3 = u2.getPaintProperty("fill-color"), e3 = u2.getPaintProperty("fill-opacity");
      if (!(t3 == null ? void 0 : t3.isDataDriven) && !(e3 == null ? void 0 : e3.isDataDriven)) {
        const t4 = u2.getPaintValue("fill-color", i2);
        _2 = u2.getPaintValue("fill-opacity", i2) * t4[3], _2 >= 1 && (g2 = false);
      }
    }
    if (g2 && a2 === "opaque")
      return;
    let E2;
    r2 === I$1.HITTEST && (E2 = M$3(s2 + 1));
    const v2 = u2.getPaintValue("fill-translate", i2), M2 = u2.getPaintValue("fill-translate-anchor", i2);
    (g2 || a2 !== "translucent") && this._drawFill(t2, s2, u2, e2, v2, M2, c2, p2, m2, E2);
    const P2 = !u2.hasDataDrivenOutlineColor && u2.outlineUsesFillColor && _2 < 1;
    y2 && a2 !== "opaque" && !P2 && this._drawOutline(t2, s2, u2, e2, v2, M2, E2);
  }
  _drawFill(o2, l2, m2, p2, y2, g2, _2, E2, v2, M2) {
    if (_2 && !v2 && t$5(E2))
      return;
    const { context: P2, displayLevel: I$2, state: T2, drawPhase: U2, painter: x2, pixelRatio: D2, spriteMosaic: h2, requestRender: S2, allowDelayedRender: R2 } = o2, w2 = m2.fillMaterial, N2 = x2.vectorTilesMaterialManager, L$12 = D2 > _$3 ? 2 : 1, A2 = U2 === I$1.HITTEST, C$12 = this._fillProgramOptions;
    C$12.id = A2, C$12.pattern = _2;
    const V2 = N2.getMaterialProgram(P2, w2, C$12);
    if (R2 && r$3(S2) && !V2.isCompiled)
      return void S2();
    if (P2.useProgram(V2), r$3(E2)) {
      const { page: t2 } = E2, i2 = h2.getPageSize(t2);
      r$3(i2) && (h2.bind(P2, L.LINEAR, t2, Z), V2.setUniform2fv("u_mosaicSize", i2), V2.setUniform1i("u_texture", Z));
    }
    V2.setUniformMatrix3fv("u_displayMat3", g2 === r$7.VIEWPORT ? T2.displayMat3 : T2.displayViewMat3), V2.setUniform2fv("u_fillTranslation", y2), V2.setUniform1f("u_depth", m2.z + c), A2 && V2.setUniform4fv("u_id", M2);
    let O2 = -1;
    for (const i2 of p2) {
      if (!i2.layerData.has(l2))
        continue;
      i2.key.level !== O2 && (O2 = i2.key.level, w2.setDataUniforms(V2, I$2, m2, O2, h2));
      const a2 = i2.layerData.get(l2);
      if (!a2.fillIndexCount)
        continue;
      a2.prepareForRendering(P2);
      const n2 = a2.fillVertexArrayObject;
      if (!t$5(n2)) {
        if (P2.bindVAO(n2), V2.setUniformMatrix3fv("u_dvsMat3", i2.transforms.dvs), P2.setStencilFunction(I.EQUAL, i2.stencilRef, 255), _2) {
          const t2 = Math.max(2 ** (Math.round(I$2) - i2.key.level), 1), e2 = i2.rangeX / (L$12 * i2.width * t2);
          V2.setUniform1f("u_patternFactor", e2);
        }
        if (v2) {
          const t2 = a2.patternMap;
          if (!t2)
            continue;
          for (const [i3, a3] of t2) {
            const t3 = h2.getPageSize(i3);
            r$3(t3) && (h2.bind(P2, L.LINEAR, i3, Z), V2.setUniform2fv("u_mosaicSize", t3), V2.setUniform1i("u_texture", Z), P2.drawElements(E$3.TRIANGLES, a3[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * a3[0]));
          }
        } else
          P2.drawElements(E$3.TRIANGLES, a2.fillIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * a2.fillIndexStart);
        i2.triangleCount += a2.fillIndexCount / 3;
      }
    }
  }
  _drawOutline(r2, a2, o2, l2, s2, m2, p2) {
    const { context: y2, displayLevel: g2, state: _2, drawPhase: E2, painter: v2, pixelRatio: M2, spriteMosaic: P2, requestRender: I$2, allowDelayedRender: T2 } = r2, U2 = o2.outlineMaterial, x2 = v2.vectorTilesMaterialManager, D2 = 0.75 / M2, h2 = E2 === I$1.HITTEST, S2 = this._outlineProgramOptions;
    S2.id = h2;
    const R2 = x2.getMaterialProgram(y2, U2, S2);
    if (T2 && r$3(I$2) && !R2.isCompiled)
      return void I$2();
    y2.useProgram(R2), R2.setUniformMatrix3fv("u_displayMat3", m2 === r$7.VIEWPORT ? _2.displayMat3 : _2.displayViewMat3), R2.setUniform2fv("u_fillTranslation", s2), R2.setUniform1f("u_depth", o2.z + c), R2.setUniform1f("u_outline_width", D2), h2 && R2.setUniform4fv("u_id", p2);
    let w2 = -1;
    for (const e2 of l2) {
      if (!e2.layerData.has(a2))
        continue;
      e2.key.level !== w2 && (w2 = e2.key.level, U2.setDataUniforms(R2, g2, o2, w2, P2));
      const i2 = e2.layerData.get(a2);
      if (i2.prepareForRendering(y2), !i2.outlineIndexCount)
        continue;
      const r3 = i2.outlineVertexArrayObject;
      t$5(r3) || (y2.bindVAO(r3), R2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), y2.setStencilFunction(I.EQUAL, e2.stencilRef, 255), y2.drawElements(E$3.TRIANGLES, i2.outlineIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * i2.outlineIndexStart), e2.triangleCount += i2.outlineIndexCount / 3);
    }
  }
}
class u extends t$4 {
  constructor() {
    super(...arguments), this._programOptions = { id: false, pattern: false, sdf: false };
  }
  dispose() {
  }
  drawMany(o2, u2) {
    const { context: c2, displayLevel: d2, state: p2, drawPhase: y2, painter: g2, pixelRatio: E2, spriteMosaic: M2, styleLayerUID: _2, requestRender: v2, allowDelayedRender: U2 } = o2;
    if (!u2.some((e2) => {
      var _a, _b;
      return (_b = (_a = e2.layerData.get(_2)) == null ? void 0 : _a.lineIndexCount) != null ? _b : false;
    }))
      return;
    const I$2 = o2.styleLayer, P2 = I$2.lineMaterial, x2 = g2.vectorTilesMaterialManager, T2 = I$2.getPaintValue("line-translate", d2), D2 = I$2.getPaintValue("line-translate-anchor", d2), S2 = I$2.getPaintProperty("line-pattern"), L$12 = S2 !== void 0, N2 = L$12 && S2.isDataDriven;
    let R2, V2;
    if (L$12 && !N2) {
      const e2 = S2.getValue(d2);
      R2 = M2.getMosaicItemPosition(e2);
    }
    let h2 = false;
    if (!L$12) {
      const e2 = I$2.getPaintProperty("line-dasharray");
      if (V2 = e2 !== void 0, h2 = V2 && e2.isDataDriven, V2 && !h2) {
        const t2 = e2.getValue(d2), i2 = I$2.getDashKey(t2, I$2.getLayoutValue("line-cap", d2));
        R2 = M2.getMosaicItemPosition(i2);
      }
    }
    const w2 = 1 / E2, A2 = y2 === I$1.HITTEST, j = this._programOptions;
    j.id = A2, j.pattern = L$12, j.sdf = V2;
    const b2 = x2.getMaterialProgram(c2, P2, j);
    if (U2 && r$3(v2) && !b2.isCompiled)
      return void v2();
    if (c2.useProgram(b2), b2.setUniformMatrix3fv("u_displayViewMat3", p2.displayViewMat3), b2.setUniformMatrix3fv("u_displayMat3", D2 === r$7.VIEWPORT ? p2.displayMat3 : p2.displayViewMat3), b2.setUniform2fv("u_lineTranslation", T2), b2.setUniform1f("u_depth", I$2.z), b2.setUniform1f("u_antialiasing", w2), A2) {
      const e2 = M$3(_2 + 1);
      b2.setUniform4fv("u_id", e2);
    }
    if (R2 && r$3(R2)) {
      const { page: t2 } = R2, i2 = M2.getPageSize(t2);
      r$3(i2) && (M2.bind(c2, L.LINEAR, t2, Z), b2.setUniform2fv("u_mosaicSize", i2), b2.setUniform1i("u_texture", Z));
    }
    let z = -1;
    for (const i2 of u2) {
      if (!i2.layerData.has(_2))
        continue;
      i2.key.level !== z && (z = i2.key.level, P2.setDataUniforms(b2, d2, I$2, z, M2));
      const r2 = 2 ** (d2 - z) / E2;
      b2.setUniform1f("u_zoomFactor", r2);
      const a2 = i2.layerData.get(_2);
      if (!a2.lineIndexCount)
        continue;
      a2.prepareForRendering(c2);
      const o3 = a2.lineVertexArrayObject;
      if (!t$5(o3)) {
        if (c2.bindVAO(o3), b2.setUniformMatrix3fv("u_dvsMat3", i2.transforms.dvs), c2.setStencilFunction(I.EQUAL, i2.stencilRef, 255), N2 || h2) {
          const t2 = a2.patternMap;
          if (!t2)
            continue;
          for (const [i3, r3] of t2) {
            const t3 = M2.getPageSize(i3);
            r$3(t3) && (M2.bind(c2, L.LINEAR, i3, Z), b2.setUniform2fv("u_mosaicSize", t3), b2.setUniform1i("u_texture", Z), c2.drawElements(E$3.TRIANGLES, r3[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * r3[0]));
          }
        } else
          c2.drawElements(E$3.TRIANGLES, a2.lineIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * a2.lineIndexStart);
        i2.triangleCount += a2.lineIndexCount / 3;
      }
    }
  }
}
const h = 1 / 65536;
class M extends t$4 {
  constructor() {
    super(...arguments), this._iconProgramOptions = { id: false, sdf: false }, this._sdfProgramOptions = { id: false }, this._spritesTextureSize = n$6();
  }
  dispose() {
  }
  drawMany(e2, t2) {
    const { drawPhase: i2, styleLayerUID: a2 } = e2, r2 = e2.styleLayer;
    let s2;
    i2 === I$1.HITTEST && (s2 = M$3(a2 + 1)), this._drawIcons(e2, r2, t2, s2), this._drawText(e2, r2, t2, s2);
  }
  _drawIcons(i2, a2, f2, p2) {
    const { context: c2, displayLevel: d2, drawPhase: y2, painter: g2, spriteMosaic: _2, state: h2, styleLayerUID: M2, requestRender: P2, allowDelayedRender: T2 } = i2, U2 = a2.iconMaterial, E2 = g2.vectorTilesMaterialManager;
    let x2, v2 = false;
    for (const e2 of f2)
      if (e2.layerData.has(M2) && (x2 = e2.layerData.get(M2), x2.iconPerPageElementsMap.size > 0)) {
        v2 = true;
        break;
      }
    if (!v2)
      return;
    const D2 = a2.getPaintValue("icon-translate", d2), I2 = a2.getPaintValue("icon-translate-anchor", d2);
    let R2 = a2.getLayoutValue("icon-rotation-alignment", d2);
    R2 === l$5.AUTO && (R2 = a2.getLayoutValue("symbol-placement", d2) === n$7.POINT ? l$5.VIEWPORT : l$5.MAP);
    const S2 = R2 === l$5.MAP, V2 = a2.getLayoutValue("icon-keep-upright", d2) && S2, w2 = x2.isIconSDF, A2 = y2 === I$1.HITTEST, L2 = this._iconProgramOptions;
    L2.id = A2, L2.sdf = w2;
    const O2 = E2.getMaterialProgram(c2, U2, L2);
    if (T2 && r$3(P2) && !O2.isCompiled)
      return void P2();
    c2.useProgram(O2), O2.setUniformMatrix3fv("u_displayViewMat3", R2 === l$5.MAP ? h2.displayViewMat3 : h2.displayMat3), O2.setUniformMatrix3fv("u_displayMat3", I2 === r$7.VIEWPORT ? h2.displayMat3 : h2.displayViewMat3), O2.setUniform2fv("u_iconTranslation", D2), O2.setUniform1f("u_depth", a2.z), O2.setUniform1f("u_mapRotation", M$4(h2.rotation)), O2.setUniform1f("u_keepUpright", V2 ? 1 : 0), O2.setUniform1f("u_level", 10 * d2), O2.setUniform1i("u_texture", Z), O2.setUniform1f("u_fadeDuration", e$6 / 1e3), A2 && O2.setUniform4fv("u_id", p2);
    let N2 = -1;
    for (const e2 of f2) {
      if (!e2.layerData.has(M2))
        continue;
      if (e2.key.level !== N2 && (N2 = e2.key.level, U2.setDataUniforms(O2, d2, a2, N2, _2)), x2 = e2.layerData.get(M2), x2.iconPerPageElementsMap.size === 0)
        continue;
      x2.prepareForRendering(c2), x2.updateOpacityInfo();
      const r2 = x2.iconVertexArrayObject;
      if (!t$5(r2)) {
        c2.bindVAO(r2), O2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), O2.setUniform1f("u_time", (performance.now() - x2.lastOpacityUpdate) / 1e3);
        for (const [t2, a3] of x2.iconPerPageElementsMap)
          this._renderIconRange(i2, O2, a3, t2, e2);
      }
    }
  }
  _renderIconRange(e2, t2, i2, a2, r2) {
    const { context: s2, spriteMosaic: n2 } = e2;
    this._spritesTextureSize[0] = n2.getWidth(a2) / 4, this._spritesTextureSize[1] = n2.getHeight(a2) / 4, t2.setUniform2fv("u_mosaicSize", this._spritesTextureSize), n2.bind(s2, L.LINEAR, a2, Z), s2.setStencilTestEnabled(true), s2.setStencilFunction(I.GREATER, 255, 255), s2.setStencilWriteMask(0), s2.drawElements(E$3.TRIANGLES, i2[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * i2[0]), r2.triangleCount += i2[1] / 3;
  }
  _drawText(i2, l2, p2, c2) {
    const { context: d2, displayLevel: g2, drawPhase: _2, glyphMosaic: M2, painter: P2, pixelRatio: T2, spriteMosaic: U2, state: E2, styleLayerUID: x2, requestRender: v2, allowDelayedRender: D2 } = i2, I$2 = l2.textMaterial, R2 = P2.vectorTilesMaterialManager;
    let S2, V2 = false;
    for (const e2 of p2)
      if (e2.layerData.has(x2) && (S2 = e2.layerData.get(x2), S2.glyphPerPageElementsMap.size > 0)) {
        V2 = true;
        break;
      }
    if (!V2)
      return;
    const w2 = l2.getPaintProperty("text-opacity");
    if (w2 && !w2.isDataDriven && w2.getValue(g2) === 0)
      return;
    const A2 = l2.getPaintProperty("text-color"), L2 = !A2 || A2.isDataDriven || A2.getValue(g2)[3] > 0, O2 = l2.getPaintProperty("text-halo-width"), N2 = l2.getPaintProperty("text-halo-color"), b2 = (!O2 || O2.isDataDriven || O2.getValue(g2) > 0) && (!N2 || N2.isDataDriven || N2.getValue(g2)[3] > 0);
    if (!L2 && !b2)
      return;
    const z = 24 / 8;
    let k = l2.getLayoutValue("text-rotation-alignment", g2);
    k === l$5.AUTO && (k = l2.getLayoutValue("symbol-placement", g2) === n$7.POINT ? l$5.VIEWPORT : l$5.MAP);
    const j = k === l$5.MAP, G2 = l2.getLayoutValue("text-keep-upright", g2) && j, W = _2 === I$1.HITTEST, C2 = 0.8 * z / T2;
    this._glyphTextureSize || (this._glyphTextureSize = t$6(M2.width / 4, M2.height / 4));
    const F2 = l2.getPaintValue("text-translate", g2), B2 = l2.getPaintValue("text-translate-anchor", g2), H = this._sdfProgramOptions;
    H.id = W;
    const Y2 = R2.getMaterialProgram(d2, I$2, H);
    if (D2 && r$3(v2) && !Y2.isCompiled)
      return void v2();
    d2.useProgram(Y2), Y2.setUniformMatrix3fv("u_displayViewMat3", k === l$5.MAP ? E2.displayViewMat3 : E2.displayMat3), Y2.setUniformMatrix3fv("u_displayMat3", B2 === r$7.VIEWPORT ? E2.displayMat3 : E2.displayViewMat3), Y2.setUniform2fv("u_textTranslation", F2), Y2.setUniform1f("u_depth", l2.z + h), Y2.setUniform2fv("u_mosaicSize", this._glyphTextureSize), Y2.setUniform1f("u_mapRotation", M$4(E2.rotation)), Y2.setUniform1f("u_keepUpright", G2 ? 1 : 0), Y2.setUniform1f("u_level", 10 * g2), Y2.setUniform1i("u_texture", $), Y2.setUniform1f("u_antialiasingWidth", C2), Y2.setUniform1f("u_fadeDuration", e$6 / 1e3), W && Y2.setUniform4fv("u_id", c2);
    let q = -1;
    for (const e2 of p2) {
      if (!e2.layerData.has(x2))
        continue;
      if (e2.key.level !== q && (q = e2.key.level, I$2.setDataUniforms(Y2, g2, l2, q, U2)), S2 = e2.layerData.get(x2), S2.glyphPerPageElementsMap.size === 0)
        continue;
      S2.prepareForRendering(d2), S2.updateOpacityInfo();
      const i3 = S2.textVertexArrayObject;
      if (t$5(i3))
        continue;
      d2.bindVAO(i3), Y2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), d2.setStencilTestEnabled(true), d2.setStencilFunction(I.GREATER, 255, 255), d2.setStencilWriteMask(0);
      const a2 = (performance.now() - S2.lastOpacityUpdate) / 1e3;
      Y2.setUniform1f("u_time", a2), S2.glyphPerPageElementsMap.forEach((t2, i4) => {
        this._renderGlyphRange(d2, t2, i4, M2, Y2, b2, L2, e2);
      });
    }
  }
  _renderGlyphRange(e2, t2, i2, a2, r2, s2, n2, o2) {
    a2.bind(e2, L.LINEAR, i2, $), s2 && (r2.setUniform1f("u_halo", 1), e2.drawElements(E$3.TRIANGLES, t2[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t2[0]), o2.triangleCount += t2[1] / 3), n2 && (r2.setUniform1f("u_halo", 0), e2.drawElements(E$3.TRIANGLES, t2[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t2[0]), o2.triangleCount += t2[1] / 3);
  }
}
const m$3 = (e2) => ge(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_id", count: 4, type: C.UNSIGNED_BYTE }, { location: 2, name: "a_color", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 3, name: "a_haloColor", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 4, name: "a_texAndSize", count: 4, type: C.UNSIGNED_BYTE }, { location: 5, name: "a_refSymbolAndPlacementOffset", count: 4, type: C.UNSIGNED_BYTE }, { location: 6, name: "a_glyphData", count: 4, type: C.UNSIGNED_BYTE }, { location: 7, name: "a_vertexOffset", count: 2, type: C.SHORT }, { location: 8, name: "a_texCoords", count: 2, type: C.UNSIGNED_SHORT }] });
class l$1 extends p$1 {
  dispose() {
  }
  getGeometryType() {
    return E$5.LABEL;
  }
  supportsSymbology(e2) {
    return true;
  }
  drawGeometry(t2, o2, a2, l2) {
    const { context: d2, painter: u2, state: c2, rendererInfo: f2, requestRender: p2, allowDelayedRender: y2 } = t2, _2 = Z$1.load(a2.materialKey), E2 = _2.mapAligned ? 1 : 0;
    if (!E2 && Math.abs(o2.key.level - Math.round(100 * t2.displayLevel) / 100) >= 1)
      return;
    const { bufferLayouts: N2, attributes: S2 } = m$3(_2), U2 = u2.materialManager.getMaterialProgram(t2, _2, "materials/label", S2, l2);
    if (y2 && r$3(p2) && !U2.isCompiled)
      return void p2();
    t2.context.setStencilFunction(I.EQUAL, 0, 255), d2.useProgram(U2), this._setSharedUniforms(U2, t2, o2), u2.textureManager.bindTextures(d2, U2, _2);
    const T2 = E2 === 1 ? c2.displayViewMat3 : c2.displayMat3;
    this._setSizeVVUniforms(_2, U2, f2, o2), U2.setUniform1f("u_mapRotation", Math.floor(c2.rotation / 360 * 254)), U2.setUniform1f("u_mapAligned", E2), U2.setUniformMatrix3fv("u_displayMat3", T2), U2.setUniform1f("u_opacity", 1), U2.setUniform2fv("u_screenSize", t2.state.size), U2.setUniform1f("u_isHalo", 1);
    const g2 = a2.target.getVAO(d2, N2, S2), G2 = a2.indexFrom * Uint32Array.BYTES_PER_ELEMENT;
    d2.bindVAO(g2), d2.drawElements(E$3.TRIANGLES, a2.indexCount, C.UNSIGNED_INT, G2), U2.setUniform1f("u_isHalo", 0), d2.drawElements(E$3.TRIANGLES, a2.indexCount, C.UNSIGNED_INT, G2), d2.setStencilTestEnabled(true), d2.setBlendingEnabled(true);
  }
}
const s$1 = (e2) => ge(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_id", count: 4, type: C.UNSIGNED_BYTE }, { location: 2, name: "a_color", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 3, name: "a_offsetAndNormal", count: 4, type: C.BYTE }, { location: 4, name: "a_accumulatedDistanceAndHalfWidth", count: 2, type: C.UNSIGNED_SHORT }, { location: 5, name: "a_tlbr", count: 4, type: C.UNSIGNED_SHORT }, { location: 6, name: "a_segmentDirection", count: 4, type: C.BYTE }, { location: 7, name: "a_aux", count: 2, type: C.UNSIGNED_SHORT }, { location: 8, name: "a_zoomRange", count: 2, type: C.UNSIGNED_SHORT }] });
class m$2 extends p$1 {
  dispose() {
  }
  getGeometryType() {
    return E$5.LINE;
  }
  supportsSymbology(e2) {
    return true;
  }
  drawGeometry(t2, o2, a2, m2) {
    const { context: l2, painter: c2, rendererInfo: u2, displayLevel: p2, passOptions: d2, requestRender: y2, allowDelayedRender: _2 } = t2, f2 = C$2.load(a2.materialKey), E2 = r$3(d2) && d2.type === "hittest";
    let N2 = s$1(f2), g2 = E$3.TRIANGLES;
    E2 && (N2 = this._getTriangleDesc(a2.materialKey, N2), g2 = E$3.POINTS);
    const { attributes: S2, bufferLayouts: T2 } = N2, U2 = c2.materialManager.getMaterialProgram(t2, f2, "materials/line", S2, m2);
    if (_2 && r$3(y2) && !U2.isCompiled)
      return void y2();
    const G2 = 1 / t2.pixelRatio, I2 = 0;
    l2.useProgram(U2), this._setSharedUniforms(U2, t2, o2), f2.textureBinding && c2.textureManager.bindTextures(l2, U2, f2);
    const D2 = 2 ** (p2 - o2.key.level);
    U2.setUniform1f("u_zoomFactor", D2), U2.setUniform1f("u_blur", I2 + G2), U2.setUniform1f("u_antialiasing", G2), this._setSizeVVUniforms(f2, U2, u2, o2), this._setColorAndOpacityVVUniforms(f2, U2, u2), l2.setFaceCullingEnabled(false);
    const R2 = a2.target.getVAO(l2, T2, S2, E2);
    let b2 = a2.indexCount, x2 = a2.indexFrom * Uint32Array.BYTES_PER_ELEMENT;
    E2 && (b2 /= 3, x2 /= 3), l2.bindVAO(R2), l2.drawElements(g2, b2, C.UNSIGNED_INT, x2);
  }
}
const s = (t2) => ge(t2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_id", count: 4, type: C.UNSIGNED_BYTE }, { location: 2, name: "a_color", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 3, name: "a_haloColor", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 4, name: "a_texFontSize", count: 4, type: C.UNSIGNED_BYTE }, { location: 5, name: "a_aux", count: 4, type: C.BYTE }, { location: 6, name: "a_zoomRange", count: 2, type: C.UNSIGNED_SHORT }, { location: 7, name: "a_vertexOffset", count: 2, type: C.SHORT }, { location: 8, name: "a_texCoords", count: 2, type: C.UNSIGNED_SHORT }] });
class m$1 extends p$1 {
  dispose() {
  }
  getGeometryType() {
    return E$5.TEXT;
  }
  supportsSymbology(t2) {
    return true;
  }
  drawGeometry(e2, o2, a2, m2) {
    const { context: l2, painter: p2, rendererInfo: u2, state: d2, passOptions: y2, requestRender: _2, allowDelayedRender: c2 } = e2, f2 = P$1.load(a2.materialKey), E2 = r$3(y2) && y2.type === "hittest", { bufferLayouts: N2, attributes: S2 } = s(f2), T2 = p2.materialManager.getMaterialProgram(e2, f2, "materials/text", S2, m2);
    if (c2 && r$3(_2) && !T2.isCompiled)
      return void _2();
    l2.useProgram(T2);
    let U2 = E$3.TRIANGLES;
    E2 && (U2 = E$3.POINTS), this._setSharedUniforms(T2, e2, o2), p2.textureManager.bindTextures(l2, T2, f2), T2.setUniformMatrix3fv("u_displayMat3", d2.displayMat3), T2.setUniformMatrix3fv("u_displayViewMat3", d2.displayViewMat3), this._setSizeVVUniforms(f2, T2, u2, o2), this._setColorAndOpacityVVUniforms(f2, T2, u2), this._setRotationVVUniforms(f2, T2, u2), T2.setUniform1f("u_isHalo", 1);
    const x2 = a2.target.getVAO(l2, N2, S2), G2 = a2.indexFrom * Uint32Array.BYTES_PER_ELEMENT;
    l2.bindVAO(x2), l2.drawElements(E$3.TRIANGLES, a2.indexCount, C.UNSIGNED_INT, G2), T2.setUniform1f("u_isHalo", 0), l2.drawElements(U2, a2.indexCount, C.UNSIGNED_INT, G2);
  }
}
const n$1 = { marker: u$1, line: m$2, fill: c$2, text: m$1, label: l$1, clip: d$2, stencil: h$1, bitmap: m$7, overlay: u$3, raster: m$8, rasterVF: d$4, flow: i$1, tileInfo: x$1, vtlBackground: d, vtlFill: m$4, vtlLine: u, vtlCircle: c$1, vtlSymbol: M, dotDensity: O, heatmap: B, pieChart: s$2 };
const x = (t2) => {
  switch (t2.BYTES_PER_ELEMENT) {
    case 1:
      return C.UNSIGNED_BYTE;
    case 2:
      return C.UNSIGNED_SHORT;
    case 4:
      return C.UNSIGNED_INT;
    default:
      throw new s$7("Cannot get DataType of array");
  }
}, g = (e2, t2, r2, s2) => {
  let o2 = 0;
  for (let n2 = 1; n2 < r2; n2++) {
    const r3 = e2[2 * (t2 + n2 - 1)], s3 = e2[2 * (t2 + n2 - 1) + 1];
    o2 += (e2[2 * (t2 + n2)] - r3) * (e2[2 * (t2 + n2) + 1] + s3);
  }
  return s2 ? o2 > 0 : o2 < 0;
}, p = ({ coords: e2, lengths: t2 }, r2) => {
  const o2 = [];
  for (let n2 = 0, i2 = 0; n2 < t2.length; i2 += t2[n2], n2 += 1) {
    const c2 = i2, a2 = [];
    for (; n2 < t2.length - 1 && g(e2, i2 + t2[n2], t2[n2 + 1], r2); n2 += 1, i2 += t2[n2])
      a2.push(i2 + t2[n2] - c2);
    const f2 = e2.slice(2 * c2, 2 * (i2 + t2[n2])), h2 = x$5(f2, a2, 2);
    for (const e3 of h2)
      o2.push(e3 + c2);
  }
  return o2;
};
class l {
  constructor(e2, t2, r2, s2 = false) {
    this._cache = {}, this.vertices = e2, this.indices = t2, this.primitiveType = r2, this.isMapSpace = s2;
  }
  static fromRect({ x: e2, y: t2, width: r2, height: s2 }) {
    const o2 = e2, n2 = t2, i2 = o2 + r2, c2 = n2 + s2;
    return l.fromScreenExtent({ xmin: o2, ymin: n2, xmax: i2, ymax: c2 });
  }
  static fromPath(e2) {
    const t2 = K$1(new t$9(), e2.path, false, false), r2 = t2.coords, s2 = new Uint32Array(p(t2, true)), o2 = new Uint32Array(r2.length / 2);
    for (let n2 = 0; n2 < o2.length; n2++)
      o2[n2] = w$2(Math.floor(r2[2 * n2]), Math.floor(r2[2 * n2 + 1]));
    return new l({ geometry: o2 }, s2, E$3.TRIANGLES);
  }
  static fromGeometry(r2, s2) {
    const o2 = s2.geometry.type;
    switch (o2) {
      case "polygon":
        return l.fromPolygon(r2, s2.geometry);
      case "extent":
        return l.fromMapExtent(r2, s2.geometry);
      default:
        return s$8.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new s$7("mapview-bad-type", `Unable to create a mesh from type ${o2}`, s2)), l.fromRect({ x: 0, y: 0, width: 1, height: 1 });
    }
  }
  static fromPolygon(e2, t2) {
    const r2 = J(new t$9(), t2, false, false), s2 = r2.coords, i2 = new Uint32Array(p(r2, false)), h2 = new Uint32Array(s2.length / 2), u2 = n$8(), y2 = n$8();
    for (let n2 = 0; n2 < h2.length; n2++)
      r$8(u2, s2[2 * n2], s2[2 * n2 + 1]), e2.toScreen(y2, u2), h2[n2] = w$2(Math.floor(y2[0]), Math.floor(y2[1]));
    return new l({ geometry: h2 }, i2, E$3.TRIANGLES, true);
  }
  static fromScreenExtent({ xmin: e2, xmax: t2, ymin: r2, ymax: s2 }) {
    const o2 = { geometry: new Uint32Array([w$2(e2, r2), w$2(t2, r2), w$2(e2, s2), w$2(e2, s2), w$2(t2, r2), w$2(t2, s2)]) }, n2 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new l(o2, n2, E$3.TRIANGLES);
  }
  static fromMapExtent(e2, t2) {
    const [r2, s2] = e2.toScreen([0, 0], [t2.xmin, t2.ymin]), [o2, n2] = e2.toScreen([0, 0], [t2.xmax, t2.ymax]), i2 = { geometry: new Uint32Array([w$2(r2, s2), w$2(o2, s2), w$2(r2, n2), w$2(r2, n2), w$2(o2, s2), w$2(o2, n2)]) }, c2 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new l(i2, c2, E$3.TRIANGLES);
  }
  destroy() {
    r$3(this._cache.indexBuffer) && this._cache.indexBuffer.dispose();
    for (const e2 in this._cache.vertexBuffers)
      r$3(this._cache.vertexBuffers[e2]) && this._cache.vertexBuffers[e2].dispose();
  }
  get elementType() {
    return x(this.indices);
  }
  getIndexBuffer(e2, t2 = F.STATIC_DRAW) {
    return this._cache.indexBuffer || (this._cache.indexBuffer = E$2.createIndex(e2, t2, this.indices)), this._cache.indexBuffer;
  }
  getVertexBuffers(e2, t2 = F.STATIC_DRAW) {
    return this._cache.vertexBuffers || (this._cache.vertexBuffers = Object.keys(this.vertices).reduce((r2, s2) => __spreadProps(__spreadValues({}, r2), { [s2]: E$2.createVertex(e2, t2, this.vertices[s2]) }), {})), this._cache.vertexBuffers;
  }
}
const n = (t2) => parseFloat(t2) / 100;
class m extends r$5 {
  constructor(t2, e2) {
    super(), this._clip = e2, this._cache = {}, this.stage = t2, this._handle = l$6(() => e2.version, () => this._invalidate()), this.ready();
  }
  static fromClipArea(t2, e2) {
    return new m(t2, e2);
  }
  _destroyGL() {
    r$3(this._cache.mesh) && (this._cache.mesh.destroy(), this._cache.mesh = null), r$3(this._cache.vao) && (this._cache.vao.dispose(), this._cache.vao = null);
  }
  destroy() {
    this._destroyGL(), this._handle.remove();
  }
  getVAO(t2, e2, r2, i2) {
    const [o2, h2] = e2.size;
    if (this._clip.type !== "geometry" && this._lastWidth === o2 && this._lastHeight === h2 || (this._lastWidth = o2, this._lastHeight = h2, this._destroyGL()), t$5(this._cache.vao)) {
      const s2 = this._createMesh(e2, this._clip), o3 = s2.getIndexBuffer(t2), h3 = s2.getVertexBuffers(t2);
      this._cache.mesh = s2, this._cache.vao = new a$1(t2, r2, i2, h3, o3);
    }
    return this._cache.vao;
  }
  _createTransforms() {
    return { dvs: e$3() };
  }
  _invalidate() {
    this._destroyGL(), this.requestRender();
  }
  _createScreenRect(t2, e2) {
    const [r2, s2] = t2.size, i2 = typeof e2.left == "string" ? n(e2.left) * r2 : e2.left, o2 = typeof e2.right == "string" ? n(e2.right) * r2 : e2.right, h2 = typeof e2.top == "string" ? n(e2.top) * s2 : e2.top, a2 = typeof e2.bottom == "string" ? n(e2.bottom) * s2 : e2.bottom, c2 = i2, m2 = h2;
    return { x: c2, y: m2, width: Math.max(r2 - o2 - c2, 0), height: Math.max(s2 - a2 - m2, 0) };
  }
  _createMesh(r2, s2) {
    switch (s2.type) {
      case "rect":
        return l.fromRect(this._createScreenRect(r2, s2));
      case "path":
        return l.fromPath(s2);
      case "geometry":
        return l.fromGeometry(r2, s2);
      default:
        return s$8.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new s$7("mapview-bad-type", "Unable to create ClippingInfo mesh from clip of type: ${clip.type}")), l.fromRect({ x: 0, y: 0, width: 1, height: 1 });
    }
  }
}
class o extends i$4 {
  constructor() {
    super(...arguments), this.name = this.constructor.name;
  }
  set clips(e2) {
    this._clips = e2, this.children.forEach((r2) => r2.clips = e2), this._updateClippingInfo();
  }
  beforeRender(e2) {
    super.beforeRender(e2), this.updateTransforms(e2.state);
  }
  _createTransforms() {
    return { dvs: e$3() };
  }
  doRender(e2) {
    const r2 = this.createRenderParams(e2), { painter: s2, globalOpacity: t2, profiler: i2, drawPhase: n2 } = r2, o2 = n2 === I$1.LABEL || n2 === I$1.HIGHLIGHT ? 1 : t2 * this.computedOpacity;
    i2.recordContainerStart(this.name), s2.beforeRenderLayer(r2, this._clippingInfos ? 255 : 0, o2), this.renderChildren(r2), s2.compositeLayer(r2, o2), i2.recordContainerEnd();
  }
  renderChildren(r2) {
    t$5(this._renderPasses) && (this._renderPasses = this.prepareRenderPasses(r2.painter));
    for (const e2 of this._renderPasses)
      try {
        e2.render(r2);
      } catch (s2) {
      }
  }
  createRenderParams(e2) {
    return e2.requireFBO = this.requiresDedicatedFBO, e2;
  }
  prepareRenderPasses(e2) {
    return [e2.registerRenderPass({ name: "clip", brushes: [n$1.clip], target: () => this._clippingInfos, drawPhase: I$1.MAP | I$1.LABEL | I$1.LABEL_ALPHA | I$1.DEBUG | I$1.HIGHLIGHT })];
  }
  updateTransforms(e2) {
    for (const r2 of this.children)
      r2.setTransform(e2);
  }
  onAttach() {
    super.onAttach(), this._updateClippingInfo();
  }
  onDetach() {
    super.onDetach(), this._updateClippingInfo();
  }
  _updateClippingInfo() {
    if (r$3(this._clippingInfos) && (this._clippingInfos.forEach((e3) => e3.destroy()), this._clippingInfos = null), !this.stage)
      return;
    const e2 = this._clips;
    r$3(e2) && e2.length && (this._clippingInfos = e2.items.map((e3) => m.fromClipArea(this.stage, e3))), this.requestRender();
  }
}
export { n$5 as a, t$1 as b, n$1 as c, d$4 as d, c$6 as e, h$1 as h, i$1 as i, m$5 as m, n$3 as n, o, p$2 as p, t, x$1 as x };
