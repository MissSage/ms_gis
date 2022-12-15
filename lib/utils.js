var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { dc as has, a8 as n$2, a2 as t, iQ as D, jC as a, hY as e$1, C as r$1, fK as u, jD as u$1, bj as l$1, s as s$2 } from "./index.js";
import { d as a$1, b as E, S } from "./Utils2.js";
import { U } from "./MaterialKey.js";
import { r as r$2, s as s$1 } from "./definitions.js";
import { C } from "./enums.js";
const i$1 = 1 / has("mapview-transitions-duration");
class r extends n$2 {
  constructor() {
    super(...arguments), this._fadeOutResolver = null, this._fadeInResolver = null, this._clips = null, this.computedVisible = true, this.computedOpacity = 1, this.fadeTransitionEnabled = false, this.inFadeTransition = false, this._isReady = false, this._opacity = 1, this._stage = null, this._visible = true;
  }
  get clips() {
    return this._clips;
  }
  set clips(e2) {
    this._clips = e2, this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(e2) {
    this._opacity !== e2 && (this._opacity = Math.min(1, Math.max(e2, 0)), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(e2) {
    if (this._stage === e2)
      return;
    const t2 = this._stage;
    this._stage = e2, e2 ? this._stage.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : t2.trashDisplayObject(this);
  }
  get transforms() {
    return this._getTransforms();
  }
  _getTransforms() {
    return t(this._transforms) && (this._transforms = this._createTransforms()), this._transforms;
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    this._visible !== e2 && (this._visible = e2, this.requestRender());
  }
  fadeIn() {
    return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.opacity = 1, this.computedOpacity = 0, this.fadeTransitionEnabled = true, this._fadeInResolver = D(), this.requestRender()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this.opacity = 0, this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = true, this._fadeOutResolver = D(), this.requestRender()), this._fadeOutResolver.promise;
  }
  endTransitions() {
    var _a, _b;
    (_a = this._fadeInResolver) == null ? void 0 : _a.call(this), this._fadeInResolver = null, (_b = this._fadeOutResolver) == null ? void 0 : _b.call(this), this._fadeOutResolver = null, this.computedOpacity = this.visible ? this.opacity : 0, this.requestRender();
  }
  beforeRender(e2) {
    this.updateTransitionProperties(e2.deltaTime, e2.state.scale);
  }
  afterRender(e2) {
    this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && this.computedOpacity === 0 && (this._fadeOutResolver(), this._fadeOutResolver = null);
  }
  remove() {
    var _a;
    (_a = this.parent) == null ? void 0 : _a.removeChild(this);
  }
  setTransform(e2) {
  }
  processRender(e2) {
    this.stage && this.computedVisible && this.doRender(e2);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.onDetach(), this.emit("detach");
  }
  updateTransitionProperties(e2, t2) {
    if (this.fadeTransitionEnabled) {
      const t3 = this._fadeOutResolver || !this.visible ? 0 : this.opacity, s2 = this.computedOpacity;
      if (s2 === t3)
        this.computedVisible = this.visible;
      else {
        const r2 = e2 * i$1;
        this.computedOpacity = s2 > t3 ? Math.max(t3, s2 - r2) : Math.min(t3, s2 + r2), this.computedVisible = this.computedOpacity > 0;
        const a2 = t3 === this.computedOpacity;
        this.inFadeTransition = !a2, a2 || this.requestRender();
      }
    } else
      this.computedOpacity = this.opacity, this.computedVisible = this.visible;
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(e2) {
  }
  ready() {
    this._isReady || (this._isReady = true, this.emit("isReady"), this.requestRender());
  }
}
class i extends r {
  constructor() {
    super(...arguments), this._childrenSet = new Set(), this._needsSort = false, this.children = [], this._effectView = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e2) {
    this._blendMode = e2, this.requestRender();
  }
  get clips() {
    return this._clips;
  }
  set clips(e2) {
    this._clips = e2, this.children.forEach((t2) => t2.clips = e2);
  }
  get computedEffects() {
    var _a, _b;
    return (_b = (_a = this._effectView) == null ? void 0 : _a.effects) != null ? _b : null;
  }
  get effect() {
    var _a, _b;
    return (_b = (_a = this._effectView) == null ? void 0 : _a.effect) != null ? _b : "";
  }
  set effect(e2) {
    (this._effectView || e2) && (this._effectView || (this._effectView = new a()), this._effectView.effect = e2, this.requestRender());
  }
  updateTransitionProperties(e2, t2) {
    super.updateTransitionProperties(e2, t2), this._effectView && (this._effectView.transitionStep(e2, t2), this._effectView.transitioning && this.requestRender());
  }
  doRender(e2) {
    const t2 = this.createRenderParams(e2);
    this.renderChildren(t2);
  }
  addChild(e2) {
    return this.addChildAt(e2, this.children.length);
  }
  addChildAt(e2, t2 = this.children.length) {
    if (!e2)
      return e2;
    if (this.contains(e2))
      return e2;
    this._needsSort = true;
    const s2 = e2.parent;
    return s2 && s2 !== this && s2.removeChild(e2), t2 >= this.children.length ? this.children.push(e2) : this.children.splice(t2, 0, e2), this._childrenSet.add(e2), e2.parent = this, e2.stage = this.stage, this !== this.stage && (e2.clips = this.clips), this.requestRender(), e2;
  }
  contains(e2) {
    return this._childrenSet.has(e2);
  }
  endTransitions() {
    super.endTransitions(), this._effectView && (this._effectView.endTransitions(), this.requestRender());
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = true;
    for (const e2 of this.children)
      this !== this.stage && (e2.clips = null), e2.stage = null, e2.parent = null;
    this.children.length = 0;
  }
  removeChild(e2) {
    return this.contains(e2) ? this.removeChildAt(this.children.indexOf(e2)) : e2;
  }
  removeChildAt(e2) {
    if (e2 < 0 || e2 >= this.children.length)
      return null;
    this._needsSort = true;
    const t2 = this.children.splice(e2, 1)[0];
    return this._childrenSet.delete(t2), this !== this.stage && (t2.clips = null), t2.stage = null, t2.parent = null, t2;
  }
  sortChildren(e2) {
    this._needsSort && (this.children.sort(e2), this._needsSort = false);
  }
  beforeRender(e2) {
    super.beforeRender(e2);
    for (const t2 of this.children)
      t2.beforeRender(e2);
  }
  afterRender(e2) {
    super.afterRender(e2);
    for (const t2 of this.children)
      t2.afterRender(e2);
  }
  _createTransforms() {
    return { dvs: e$1() };
  }
  onAttach() {
    super.onAttach();
    const e2 = this.stage;
    for (const t2 of this.children)
      t2.stage = e2;
  }
  onDetach() {
    super.onDetach();
    for (const e2 of this.children)
      e2.stage = null;
  }
  renderChildren(e2) {
    for (const t2 of this.children)
      t2.processRender(e2);
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, e2), { blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: e2.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition });
  }
}
class e {
  static getStorageSpec(t2) {
    return null;
  }
  static createOrUpdateRendererSchema(e2, r2) {
    return r$1(e2) && e2.type === "default" ? e2 : { type: "default" };
  }
  static getVariation(t2) {
    return {};
  }
  static getVariationHash(t2) {
    return 0;
  }
}
e.type = "default", e.programSpec = null;
class n$1 extends e {
  static getStorageSpec({ attributes: e2 }) {
    return { visualVariables: false, attributes: e2 != null ? e2 : null };
  }
  static _createRendererSchema() {
    return { type: "dot-density", colors: new Float32Array(32), dotValue: -1, dotSize: -1, dotScale: -1, dotBlending: false, backgroundColor: new Float32Array(4), activeDots: new Float32Array(8), seed: -1 };
  }
  static createOrUpdateRendererSchema(r2, a2) {
    const { attributes: n2, dotValue: i2, referenceScale: d, dotSize: l2, dotBlendingEnabled: s2, seed: c2, backgroundColor: u2 } = a2, m = r$1(r2) && r2.type === "dot-density" ? r2 : this._createRendererSchema();
    m.dotValue = i2, m.dotSize = l2, m.dotScale = d, m.dotBlending = s2, m.seed = c2;
    const { colors: g, activeDots: p2, backgroundColor: y } = m;
    for (let e2 = 0; e2 < r$2; e2++) {
      const o = e2 >= n2.length ? null : n2[e2].color;
      a$1(g, o, 4 * e2);
    }
    for (let e2 = 0; e2 < 8; e2++)
      p2[e2] = e2 < a2.attributes.length ? 1 : 0;
    return a$1(y, u2), m;
  }
  static getVariation(e2) {
    return { ddDotBlending: e2.dotBlending };
  }
  static getVariationHash(e2) {
    return e2.dotBlending ? 1 : 0;
  }
}
n$1.type = "dot-density", n$1.programSpec = { shader: "materials/fill", vertexLayout: { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_id", count: 3, type: C.UNSIGNED_BYTE }, { location: 2, name: "a_bitset", count: 1, type: C.UNSIGNED_BYTE }, { location: 3, name: "a_inverseArea", count: 1, type: C.FLOAT }] } };
class n extends e {
  static getStorageSpec({ field: e2, valueExpression: t2 }) {
    return { visualVariables: false, attributes: e2 || t2 ? [{ field: e2, valueExpression: t2 }] : null };
  }
  static _createRendererSchema() {
    return { type: "heatmap", radius: -1, referenceScale: -1, isFieldActive: 0, minDensity: -1, densityRange: -1, kernel: null, gradient: null, gradientHash: "invalid" };
  }
  static createOrUpdateRendererSchema(a2, i2) {
    const { radius: n2, minDensity: s2, maxDensity: o, referenceScale: c2, field: l2, valueExpression: m, colorStops: p2 } = i2, d = o - s2, u$2 = l2 || m ? 1 : 0, y = p2.map(({ color: e2, ratio: t2 }) => `${t2}:${e2.toString()}`).join();
    let h, S2 = true;
    return r$1(a2) && a2.type === "heatmap" ? (h = a2, S2 = y !== a2.gradientHash) : h = this._createRendererSchema(), h.radius = u(n2), h.minDensity = s2, h.densityRange = d, h.referenceScale = c2, h.isFieldActive = u$2, S2 && (h.gradient = u$1(p2), h.gradientHash = y), h;
  }
}
n.type = "heatmap", n.programSpec = { shader: "materials/icon/heatmapAccumulate", vertexLayout: { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_vertexOffset", count: 2, type: C.SHORT }, { location: 4, name: "a_id", count: 4, type: C.UNSIGNED_BYTE }] } };
class l extends e {
  static getStorageSpec({ attributes: e2 }) {
    return { visualVariables: true, attributes: e2 != null ? e2 : null };
  }
  static _createRendererSchema() {
    return { type: "pie-chart", colors: new Float32Array(4 * s$1), defaultColor: new Float32Array(4), othersColor: new Float32Array(4), outlineColor: new Float32Array(4), holePercentage: 0, sectorThreshold: 0, outlineWidth: 1, numberOfFields: 10 };
  }
  static createOrUpdateRendererSchema(n2, i2) {
    const { attributes: l2, defaultColor: s2, holePercentage: c2, othersCategory: m, outline: u$12 } = i2, d = r$1(n2) && n2.type === "pie-chart" ? n2 : this._createRendererSchema();
    for (let t2 = 0; t2 < s$1; t2++) {
      const o = t2 >= l2.length ? new l$1([0, 0, 0, 0]) : l2[t2].color;
      a$1(d.colors, o, 4 * t2);
    }
    return a$1(d.defaultColor, s2), a$1(d.othersColor, m == null ? void 0 : m.color), a$1(d.outlineColor, u$12 == null ? void 0 : u$12.color), d.outlineWidth = u((u$12 == null ? void 0 : u$12.width) || 0), d.holePercentage = c2, d.sectorThreshold = (m == null ? void 0 : m.threshold) || 0, d.numberOfFields = l2.length, d;
  }
  static getVariation(e2) {
    return { numberOfFields: e2.numberOfFields };
  }
  static getVariationHash(e2) {
    return e2.numberOfFields;
  }
}
l.type = "pie-chart", l.programSpec = { shader: "materials/pie", vertexLayout: { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }, { location: 1, name: "a_vertexOffset", count: 2, type: C.SHORT }, { location: 2, name: "a_texCoords", count: 2, type: C.UNSIGNED_SHORT }, { location: 3, name: "a_bitSetAndDistRatio", count: 2, type: C.UNSIGNED_SHORT }, { location: 4, name: "a_id", count: 4, type: C.UNSIGNED_BYTE }, { location: 5, name: "a_color", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 6, name: "a_outlineColor", count: 4, type: C.UNSIGNED_BYTE, normalized: true }, { location: 7, name: "a_sizeAndOutlineWidth", count: 4, type: C.UNSIGNED_BYTE }, { location: 8, name: "a_zoomRange", count: 2, type: C.UNSIGNED_SHORT }] }, hittestAttributes: ["a_vertexOffset", "a_texCoords"] };
function s(r2, t2) {
  if (r2.type !== t2)
    throw new s$2("material-view-model:unexpected-renderer-schema", `expected to find renderer schema of type "${t2}" but found type "${r2.type}"`);
}
function c(e$12) {
  switch (e$12 == null ? void 0 : e$12.type) {
    case "dot-density":
      return n$1;
    case "heatmap":
      return n;
    case "pie-chart":
      return l;
    default:
      return e;
  }
}
function p(e$12) {
  const { geometryType: s2, symbologyType: c2 } = U.load(e$12);
  switch (s2) {
    case E.FILL:
      if (c2 === S.DOT_DENSITY)
        return n$1;
      break;
    case E.MARKER:
      switch (c2) {
        case S.HEATMAP:
          return n;
        case S.PIE_CHART:
          return l;
      }
  }
  return e;
}
export { c, e, i, p, r, s };
