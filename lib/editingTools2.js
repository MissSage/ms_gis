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
import { N as e$4, O as y$6, P as n$7, al as m$8, bj as l$4, bk as j$6, bl as u$6, bm as f$6, ad as l$5, bn as a$8, K as n$8, a2 as t$7, C as r$6, bo as G$8, R as h$9, bp as b$7, bq as i$5, aC as ue$2, br as r$7, bs as v$6, bt as l$6, bu as A$a, bv as s$4, af as o$5, bw as n$9, bx as i$6, by as d$9, a1 as n$a, bz as c$5, bA as e$8, aS as o$9, b9 as e$a, bB as p$8, bC as m$9, bD as O$4, bE as z$6, ba as s$6, aR as x$7, bg as r$9, bF as w$a, bG as _$7, bb as _$8, be as u$7, bH as n$d, bI as R$5, bJ as r$a, bK as l$8, bL as a$a, bM as w$b, bN as p$a, b8 as t$b, bO as n$e, bP as d$a, bQ as t$c, A as e$d, bR as h$b, bS as F$5, bT as D$6, bU as a$c, z as i$8, bV as j$7, bW as o$d, bX as h$c, bY as r$c, bd as a$d, bZ as i$9, aQ as jn, b_ as M$9, bh as c$6, b$ as f$8, c0 as x$9, c1 as i$a, I as w$c, c2 as r$d, c3 as t$e, c4 as p$b, c5 as f$9, a0 as A$c, c6 as m$d, c7 as l$a, c8 as E$8, c9 as e$f, ca as y$7, cb as p$c, cc as s$8, cd as a$f, ce as v$9, a8 as n$f, bc as g$6, cf as A$d, cg as r$f, ch as xn, ci as x$a, cj as e$i, ck as p$d, cl as Y$1, cm as s$b, cn as r$h, D as C$9, co as c$9, cp as o$g, cq as u$a, L as s$c, cr as p$e, cs as a$h, ct as u$b, cu as x$c, cv as h$h, cw as k$5, cx as Z$1, cy as d$e, cz as n$i, cA as a$i, cB as S$9, cC as q$6, cD as y$9, bi as p$f, aG as An, cE as pn, cF as F$6, cG as t$h, cH as s$d, cI as u$c, cJ as u$d, cK as pe$2, cL as Xn, cM as r$i, cN as e$j, cO as i$e, cP as f$e, cQ as h$j, cR as p$g, cS as f$f, cT as o$j, cU as Z$2, cV as w$d, cW as gn, cX as l$c, cY as t$i, cZ as d$f, c_ as G$9, c$ as e$l, bf as P$7, d0 as h$k, d1 as M$b, d2 as d$g, d3 as C$a, d4 as g$7, d5 as U$4, d6 as R$6, d7 as g$8, d8 as q$7, d9 as U$5, da as b$a, db as q$8, dc as has, dd as f$g, de as P$8, a7 as a$k, a9 as p$h, k as j$8, ab as p$i, df as u$e, dg as i$f, dh as P$9, di as v$c, dj as D$7, dk as e$m, dl as V$8, ag as g$9, ai as w$e, dm as P$a, dn as t$j, dp as A$g, b2 as Y$2, dq as H$4, b1 as v$e, dr as d$h, ds as E$c, dt as h$l, du as X$1, dv as d$i, dw as o$k, W as m$h, dx as v$f, dy as t$k, dz as H$5, a4 as $, aa as c$b, dA as m$j, dB as l$f, dC as U$6, dD as A$h, dE as r$k, dF as b$b, dG as f$h, dH as b$c, dI as n$k, dJ as i$h, dK as y$b, dL as s$e, dM as l$h, dN as s$f, dO as a$o, dP as i$i, dQ as I$5, dR as Q$1, dS as o$l, dT as t$l, dU as t$m, dV as s$g, dW as c$d, dX as T$c, dY as w$f, dZ as j$a, d_ as f$i, d$ as M$c, a_ as q$9, aP as Z$4, e0 as e$o, e1 as m$k } from "./index.js";
import { d as d$8, x as x$6, v as v$d, b as a$m, y as y$a, j as j$9, c as m$g, e as e$n, f as x$d, m as m$i, l as l$e, a as a$n, g as c$c, p as p$k, h as g$c, D as D$8 } from "./automaticLengthMeasurementUtils.js";
import { r as r$b, t as t$d } from "./vec4f32.js";
import { s as s$7, p as p$9, a as a$b, v as v$8, A as A$b } from "./Octree.js";
import { l as l$7, v as v$7, h as h$a, m as m$a, b as b$8, M as M$a, B as B$4 } from "./lineSegment.js";
import { o as o$a } from "./glUtil.js";
import { T as T$9 } from "./InterleavedLayout.js";
import { a as a$9, n as n$b, o as o$6, e as e$5, f as f$7, b as e$6, c as n$c, d as o$7, g as e$7, t as t$8, h as e$9, i as o$8, r as r$8, j as e$b, k as t$9, l as o$b, m as e$c, p as t$a, E as E$6, S as S$8, q as E$7, B as B$3, u as u$8, s as o$c, v as e$e, L as L$6, w as d$b, x as f$a, y as c$7, z as h$e, A as r$g, C as u$9, D as e$h, F as v$a, G as d$c, H as n$g, I as t$f, J as s$a, K as d$d, M as x$b, N as t$g, O as h$g, P as m$f, Q as y$8, R as o$h, T as e$k, U as o$i, V as f$c, W as h$i } from "./SSAOHelper.js";
import { O as O$3 } from "./VertexAttribute.js";
import { R as R$4, E as E$4, F as F$4, I as I$4 } from "./enums.js";
import { W as W$4, s as s$5, _ as _$6, i as i$7, o as o$f, n as n$h, c as c$8, A as A$e, h as h$f, a as a$g, E as E$a, b as _$9, l as l$b, d as a$j, S as S$a, e as l$i } from "./OrderIndependentTransparency.js";
import { E as E$5 } from "./VertexArrayObject.js";
import { l as l$9, x as x$8, H as H$3, q as q$4, o as o$e, Q, m as m$b, h as h$d, b as b$9, a as a$e, c as m$c, r as r$e, e as e$g, E as E$9, s as s$9, T as T$a, d as m$e, i as i$b, f as f$b, g as T$b, J as J$3, j as i$d, v as v$b, k as f$d, F as F$7, A as A$f, Z as Z$3, B as B$5, n as E$b, X, C as C$b, p as k$6 } from "./NativeLineMaterial.js";
import { i as i$c } from "./BufferView.js";
import { Z, q as q$5 } from "./DrawGraphicTool.js";
import { H as H$6, G as G$a, X as X$2 } from "./boundedPlane.js";
import { C as C$c } from "./GraphicManipulator.js";
import { r as r$j, p as p$j, a as a$l, l as l$d, c as c$a, n as n$j } from "./TranslateTooltipInfos.js";
import { i as i$g } from "./automaticAreaMeasurementUtils.js";
import { g as g$a, l as l$g } from "./axisAngleDegrees.js";
import { g as g$b } from "./persistable.js";
import { i as i$j, p as p$l } from "./ExtentTooltipInfos.js";
let e$3 = (e2) => ({ vnodeSelector: "", properties: void 0, children: void 0, text: e2.toString(), domNode: null }), r$5 = (t2, o2, n2) => {
  for (let l2 = 0, i2 = o2.length; l2 < i2; l2++) {
    let i3 = o2[l2];
    Array.isArray(i3) ? r$5(t2, i3, n2) : i3 != null && i3 !== false && (typeof i3 == "string" && (i3 = e$3(i3)), n2.push(i3));
  }
};
function t$6(e2, t2, o2) {
  if (Array.isArray(t2))
    o2 = t2, t2 = void 0;
  else if (t2 && (typeof t2 == "string" || t2.hasOwnProperty("vnodeSelector")) || o2 && (typeof o2 == "string" || o2.hasOwnProperty("vnodeSelector")))
    throw new Error("h called with invalid arguments");
  let n2, l2;
  return o2 && o2.length === 1 && typeof o2[0] == "string" ? n2 = o2[0] : o2 && (l2 = [], r$5(e2, o2, l2), l2.length === 0 && (l2 = void 0)), { vnodeSelector: e2, properties: t2, children: l2, text: n2 === "" ? void 0 : n2, domNode: null };
}
const l$3 = { bottom: "esri-text-overlay-item-anchor-bottom", "bottom-right": "esri-text-overlay-item-anchor-bottom-right", "bottom-left": "esri-text-overlay-item-anchor-bottom-left", top: "esri-text-overlay-item-anchor-top", "top-right": "esri-text-overlay-item-anchor-top-right", "top-left": "esri-text-overlay-item-anchor-top-left", center: "esri-text-overlay-item-anchor-center", right: "esri-text-overlay-item-anchor-right", left: "esri-text-overlay-item-anchor-left" };
let n$6 = class extends m$8 {
  constructor(t2) {
    super(t2), this.x = 0, this.y = 0, this.text = "-", this.fontSize = 14, this.anchor = "center", this.visible = true, this.backgroundColor = new l$4([0, 0, 0, 0.6]), this.textColor = new l$4([255, 255, 255]), this._textShadowSize = 1;
  }
  get position() {
    return [this.x, this.y];
  }
  set position(t2) {
    this._set("x", t2[0]), this._set("y", t2[1]);
  }
  get _textShadowColor() {
    return this.backgroundColor;
  }
  get _textShadow() {
    const t2 = this._textShadowColor.toCss(false);
    return `0 0 ${this._textShadowSize}px ${t2}`;
  }
  get _padding() {
    return 0.5 * this.fontSize;
  }
  get _borderRadius() {
    return this._padding;
  }
  render() {
    return t$6("div", { classes: this._cssClasses(), styles: { left: Math.floor(this.x) + "px", top: Math.floor(this.y) + "px", visibility: this.visible ? "visible" : "hidden", fontSize: this.fontSize + "px", lineHeight: this.fontSize + "px", backgroundColor: this.backgroundColor.toCss(true), color: this.textColor.toCss(true), padding: this._padding + "px", borderRadius: this._borderRadius + "px", textShadow: this._textShadow } }, [this.text]);
  }
  renderCanvas(t2) {
    if (!this.visible)
      return;
    const e2 = t2.font.replace(/^(.*?)px/, "");
    t2.font = `${this.fontSize}px ${e2}`;
    const o2 = this._padding, i2 = this._borderRadius, r2 = t2.measureText(this.text).width, s2 = this.fontSize, l2 = h$8[this.anchor];
    t2.textAlign = "center", t2.textBaseline = "middle";
    const n2 = r2 + 2 * o2, a2 = s2 + 2 * o2, x2 = this.x + l2.x * n2, p2 = this.y + l2.y * a2;
    this._roundedRect(t2, x2, p2, n2, a2, i2), t2.fillStyle = this.backgroundColor.toCss(true), t2.fill();
    const d2 = this.x + (l2.x + 0.5) * n2, c2 = this.y + (l2.y + 0.5) * a2;
    this._renderTextShadow(t2, this.text, d2, c2), t2.fillStyle = this.textColor.toCss(true), t2.fillText(this.text, d2, c2);
  }
  _renderTextShadow(t2, e2, o2, i2) {
    t2.lineJoin = "miter", t2.fillStyle = `rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1 / a$7.length})`;
    const r2 = this._textShadowSize;
    for (const [s2, l2] of a$7)
      t2.fillText(e2, o2 + r2 * s2, i2 + r2 * l2);
  }
  _roundedRect(t2, e2, o2, i2, r2, s2) {
    t2.beginPath(), t2.moveTo(e2, o2 + s2), t2.arcTo(e2, o2, e2 + s2, o2, s2), t2.lineTo(e2 + i2 - s2, o2), t2.arcTo(e2 + i2, o2, e2 + i2, o2 + s2, s2), t2.lineTo(e2 + i2, o2 + r2 - s2), t2.arcTo(e2 + i2, o2 + r2, e2 + i2 - s2, o2 + r2, s2), t2.lineTo(e2 + s2, o2 + r2), t2.arcTo(e2, o2 + r2, e2, o2 + r2 - s2, s2), t2.closePath();
  }
  _cssClasses() {
    const t2 = { "esri-text-overlay-item": true };
    for (const e2 in l$3)
      t2[l$3[e2]] = this.anchor === e2;
    return t2;
  }
};
e$4([y$6()], n$6.prototype, "x", void 0), e$4([y$6()], n$6.prototype, "y", void 0), e$4([y$6()], n$6.prototype, "position", null), e$4([y$6()], n$6.prototype, "text", void 0), e$4([y$6()], n$6.prototype, "fontSize", void 0), e$4([y$6()], n$6.prototype, "anchor", void 0), e$4([y$6()], n$6.prototype, "visible", void 0), e$4([y$6()], n$6.prototype, "backgroundColor", void 0), e$4([y$6()], n$6.prototype, "textColor", void 0), e$4([y$6()], n$6.prototype, "_textShadowSize", void 0), e$4([y$6()], n$6.prototype, "_textShadowColor", null), e$4([y$6()], n$6.prototype, "_textShadow", null), e$4([y$6()], n$6.prototype, "_padding", null), e$4([y$6()], n$6.prototype, "_borderRadius", null), n$6 = e$4([n$7("esri.views.overlay.TextOverlayItem")], n$6);
const h$8 = { bottom: { x: -0.5, y: -1, textAlign: "center", textBaseline: "bottom" }, "bottom-left": { x: 0, y: -1, textAlign: "left", textBaseline: "bottom" }, "bottom-right": { x: -1, y: -1, textAlign: "right", textBaseline: "bottom" }, center: { x: -0.5, y: -0.5, textAlign: "center", textBaseline: "middle" }, left: { x: 0, y: -0.5, textAlign: "left", textBaseline: "middle" }, right: { x: -1, y: -0.5, textAlign: "right", textBaseline: "middle" }, top: { x: -0.5, y: 0, textAlign: "center", textBaseline: "top" }, "top-left": { x: 0, y: 0, textAlign: "left", textBaseline: "top" }, "top-right": { x: -1, y: 0, textAlign: "right", textBaseline: "top" } }, a$7 = [];
{
  const t2 = 16;
  for (let e2 = 0; e2 < 360; e2 += 360 / t2)
    a$7.push([Math.cos(Math.PI * e2 / 180), Math.sin(Math.PI * e2 / 180)]);
}
const x$5 = n$6;
const S$7 = 3025, w$9 = { default: 15, far: 25 };
let P$6 = class extends m$8 {
  constructor(e2) {
    super(e2), this.context = null, this.stagedVertex = null, this.visible = true, this.edgeDistance = "default", this._messagesUnits = null, this._labelInfos = [], this._nextLabelIndex = 0;
  }
  initialize() {
    const e2 = j$6(async (e3) => {
      const t3 = await u$6("esri/core/t9n/Units");
      f$6(e3), this._messagesUnits = t3;
    }), t2 = () => o$5(this.context, (e3) => e3.editGeometryOperations);
    this.addHandles([l$5(() => [r$6(this.context) && this.getCameraOrExtent(this.context), this.visible, this._edgeDistancePixels, this.stagedVertex, this._messagesUnits], () => this._update()), ...["vertex-add", "vertex-update", "vertex-remove"].map((e3) => a$8(t2, e3, () => this._update())), n$8(() => e2.abort())]);
  }
  destroy() {
    for (this._nextLabelIndex = 0; this._labelInfos.length; )
      this._destroyLabel(this._labelInfos.pop());
  }
  get updating() {
    return t$7(this._messagesUnits);
  }
  get test() {
    return { labelContents: this._labelInfos.slice(0, this._nextLabelIndex).map((e2) => e2.label.text) };
  }
  get _edgeDistancePixels() {
    return w$9[this.edgeDistance];
  }
  _update() {
    this._nextLabelIndex = 0;
    const e2 = this.context;
    if (t$7(e2))
      return void this._destroyUnusedLabels();
    const { components: t2, geometry: s2, coordinateHelper: o2 } = e2.editGeometryOperations.data;
    if (!s2)
      return void this._destroyUnusedLabels();
    const a2 = t2.length;
    for (let i2 = 0; i2 < a2; ++i2) {
      const n2 = [];
      if (t2[i2].iterateVertices((e3) => {
        n2.push(o2.toXYZ(e3.pos));
      }), i2 === 0 && r$6(this.stagedVertex) && n2.push(o2.toXYZ(this.stagedVertex)), n2.length < 2)
        continue;
      const l2 = n2[0], c2 = n2[n2.length - 1];
      s2.type === "polygon" && n2.length > 2 && !G$8(l2, c2) && n2.push(l2);
      const p2 = a2 === 1 && !h$9(n2, false, false);
      let h2 = C$8, d2 = G$7;
      this.toScreenPointArray(e2, l2, h2);
      for (let t3 = 1; t3 < n2.length; ++t3) {
        const s3 = n2[t3 - 1], o3 = n2[t3];
        this.toScreenPointArray(e2, o3, d2), this._addLabel(e2, s3, h2, o3, d2, p2), [h2, d2] = [d2, h2];
      }
    }
    this._destroyUnusedLabels();
  }
  _addLabel(e2, t2, s2, o2, i2, a2) {
    const { label: n2 } = this._getOrCreateLabel(e2);
    if (!this.visible || b$7(s2, i2) < S$7)
      return void (n2.visible = false);
    const c2 = r$6(e2.graphicState) ? e2.graphicState.isDraped ? "on-the-ground" : "absolute-height" : i$5(e2.editGeometryOperations.data.geometry, e2.elevationInfo), { spatialReference: p2 } = e2.editGeometryOperations.data, h2 = d$8(t2, o2, p2, c2), m2 = this._messagesUnits, u2 = ue$2(e2.view);
    n2.text = r$6(m2) && r$6(h2) ? x$6(m2, h2, u2) : "", n2.visible = true;
    const v2 = i2[0] - s2[0], j2 = i2[1] - s2[1];
    a2 ? r$7(V$7, -j2, v2) : r$7(V$7, j2, -v2), v$6(V$7, V$7), l$6(V$7, V$7, this._edgeDistancePixels), A$a(k$4, s2, i2, 0.5), s$4(k$4, k$4, V$7), n2.position = [k$4[0], k$4[1]], Math.abs(V$7[0]) > Math.abs(V$7[1]) ? n2.anchor = V$7[0] > 0 ? "left" : "right" : n2.anchor = -V$7[1] < 0 ? "top" : "bottom";
  }
  _getOrCreateLabel(e2) {
    if (this._labelInfos.length > this._nextLabelIndex)
      return this._labelInfos[this._nextLabelIndex++];
    const t2 = new x$5({ fontSize: 10, anchor: "center" });
    e2.view.overlay.items.add(t2);
    const s2 = { label: t2 };
    return this._labelInfos.push(s2), this._nextLabelIndex = this._labelInfos.length, s2;
  }
  _destroyUnusedLabels() {
    for (; this._labelInfos.length > this._nextLabelIndex; )
      this._destroyLabel(this._labelInfos.pop());
  }
  _destroyLabel({ label: e2 }) {
    o$5(this.context, (t2) => t2.view.overlay.items.remove(e2)), e2.destroy();
  }
};
e$4([y$6()], P$6.prototype, "context", void 0), e$4([y$6()], P$6.prototype, "stagedVertex", void 0), e$4([y$6()], P$6.prototype, "visible", void 0), e$4([y$6()], P$6.prototype, "edgeDistance", void 0), e$4([y$6()], P$6.prototype, "updating", null), e$4([y$6()], P$6.prototype, "_messagesUnits", void 0), e$4([y$6()], P$6.prototype, "_edgeDistancePixels", null), P$6 = e$4([n$7("esri.views.interactive")], P$6);
const V$7 = n$9(), k$4 = n$9(), C$8 = i$6(), G$7 = i$6();
let a$6 = class extends P$6 {
  getCameraOrExtent({ view: e2 }) {
    return e2.state.camera;
  }
  toScreenPointArray({ view: e2, elevationInfo: t2, editGeometryOperations: o2 }, s2, a2 = i$6()) {
    const { spatialReference: m2 } = o2.data.coordinateHelper;
    return d$9(s2, m2, t2, e2, c$4), e2.state.camera.projectToScreen(c$4, a2), a2;
  }
};
a$6 = e$4([n$7("esri.views.3d.interactive.SegmentLabels3D")], a$6);
const c$4 = n$a();
class t$5 {
  constructor(t2) {
    this._attached = false, this._resourcesCreated = false, this._visible = true, this.view = t2, this._handle = l$5(() => this.view.ready, (e2) => {
      this._resourcesCreated && (e2 ? this._createResources() : this._destroyResources());
    });
  }
  applyProps(e2) {
    let t2 = false;
    for (const s2 in e2)
      s2 in this ? s2 === "attached" ? t2 = e2[s2] : this[s2] = e2[s2] : console.error("Cannot set unknown property", s2);
    this.attached = t2;
  }
  destroy() {
    this.attached = false, this._handle.remove();
  }
  get attached() {
    return this._attached;
  }
  set attached(e2) {
    e2 !== this._attached && this.view._stage && (this._attached = e2, this._attached && !this._resourcesCreated ? this._createResources() : !this._attached && this._resourcesCreated && this._destroyResources());
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this.attached && this.updateVisibility(e2));
  }
  _createResources() {
    this.createResources(), this._resourcesCreated = true, this.visible || this.updateVisibility(false);
  }
  _destroyResources() {
    this.destroyResources(), this._resourcesCreated = false;
  }
}
function i$4(i2, s2) {
  i2.extensions.add("GL_OES_standard_derivatives");
  const p2 = i2.fragment;
  p2.include(a$9), i2.include(n$b), p2.uniforms.add([new o$6("globalAlpha", (o2) => o2.globalAlpha), new e$5("glowColor", (o2) => o2.glowColor), new o$6("glowWidth", (o2, e2) => o2.glowWidth * e2.camera.pixelRatio), new o$6("glowFalloff", (o2) => o2.glowFalloff), new e$5("innerColor", (o2) => o2.innerColor), new o$6("innerWidth", (o2, e2) => o2.innerWidth * e2.camera.pixelRatio), new f$7("depthMap", (o2, e2) => e2.linearDepthTexture), new e$6("nearFar", (o2, e2) => e2.camera.nearFar), new f$7("frameColor", (o2, e2) => e2.mainColorTexture)]), p2.code.add(n$c`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`), p2.code.add(n$c`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`), p2.code.add(n$c`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`), p2.code.add(n$c`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`), s2.contrastControlEnabled ? (p2.uniforms.add(new o$6("globalAlphaContrastBoost", (e2) => r$6(e2.globalAlphaContrastBoost) ? e2.globalAlphaContrastBoost : 1)), p2.code.add(n$c`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)) : p2.code.add(n$c`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`);
}
function v$5(i2) {
  const r2 = new o$7();
  r2.include(i$4, i2);
  const { vertex: v2, fragment: w2 } = r2;
  return v2.uniforms.add([new e$7("modelView", (i3, o2) => c$5(m$7, o2.camera.viewMatrix, i3.origin)), new e$7("proj", (e2, i3) => i3.camera.projectionMatrix), new o$6("glowWidth", (e2, i3) => e2.glowWidth * i3.camera.pixelRatio), new e$6("pixelToNDC", (e2, i3) => r$7(p$7, 2 / i3.camera.fullViewport[2], 2 / i3.camera.fullViewport[3]))]), r2.attributes.add(O$3.START, "vec3"), r2.attributes.add(O$3.END, "vec3"), r2.attributes.add(O$3.UP, "vec3"), r2.attributes.add(O$3.EXTRUDE, "vec2"), r2.varyings.add("uv", "vec2"), r2.varyings.add("vViewStart", "vec3"), r2.varyings.add("vViewEnd", "vec3"), r2.varyings.add("vViewPlane", "vec4"), v2.code.add(n$c`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`), w2.uniforms.add(new o$6("perScreenPixelRatio", (e2, i3) => i3.camera.perScreenPixelRatio)), w2.code.add(n$c`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`), r2;
}
const p$7 = n$9(), m$7 = e$8(), w$8 = Object.freeze(Object.defineProperty({ __proto__: null, build: v$5 }, Symbol.toStringTag, { value: "Module" }));
class m$6 extends e$9 {
  initializeProgram(e2) {
    return new o$8(e2.rctx, m$6.shader.get().build(this.configuration), h$7);
  }
  initializePipeline() {
    return W$4({ blending: s$5(R$4.ONE, R$4.ONE_MINUS_SRC_ALPHA), colorWrite: _$6 });
  }
}
m$6.shader = new t$8(w$8, () => import("./LaserlinePath.glsl.js"));
const h$7 = new Map([[O$3.START, 0], [O$3.END, 1], [O$3.UP, 2], [O$3.EXTRUDE, 3]]);
class _$5 {
  constructor(e2) {
    this._renderCoordsHelper = e2, this._buffers = null, this._origin = n$a(), this._dirty = false, this._count = 0, this._vao = null;
  }
  set vertices(e2) {
    const t2 = new Float64Array(3 * e2.length);
    let r2 = 0;
    for (const s2 of e2)
      t2[r2++] = s2[0], t2[r2++] = s2[1], t2[r2++] = s2[2];
    this.buffers = [t2];
  }
  set buffers(e2) {
    if (this._buffers = e2, this._buffers.length > 0) {
      const e3 = this._buffers[0], t2 = 3 * Math.floor(e3.length / 3 / 2);
      o$9(this._origin, e3[t2 + 0], e3[t2 + 1], e3[t2 + 2]);
    } else
      o$9(this._origin, 0, 0, 0);
    this._dirty = true;
  }
  get origin() {
    return this._origin;
  }
  draw(t2) {
    const r2 = this._ensureVAO(t2);
    r$6(r2) && (t2.bindVAO(r2), t2.drawArrays(E$4.TRIANGLES, 0, this._count));
  }
  dispose() {
    r$6(this._vao) && this._vao.dispose();
  }
  _ensureVAO(e2) {
    return t$7(this._buffers) ? null : (t$7(this._vao) && (this._vao = this._createVAO(e2, this._buffers)), this._ensureVertexData(this._vao, this._buffers), this._vao);
  }
  _createVAO(e2, t2) {
    const r2 = this._createDataBuffer(t2);
    return this._dirty = false, new r$8(e2, h$7, { data: o$a(V$6) }, { data: E$5.createVertex(e2, F$4.STATIC_DRAW, r2) });
  }
  _ensureVertexData(e2, t2) {
    if (!this._dirty)
      return;
    const r2 = this._createDataBuffer(t2);
    e2.vertexBuffers.data.setData(r2), this._dirty = false;
  }
  _numberOfRenderVertices(e2) {
    return 3 * (2 * (e2.length / 3 - 1));
  }
  _createDataBuffer(e2) {
    const t2 = e2.reduce((e3, t3) => e3 + this._numberOfRenderVertices(t3), 0);
    this._count = t2;
    const i2 = V$6.createBuffer(t2), o2 = this._origin;
    let n2 = 0, f2 = 0;
    for (const u2 of e2) {
      for (let e3 = 0; e3 < u2.length; e3 += 3) {
        const t3 = o$9(b$6, u2[e3 + 0], u2[e3 + 1], u2[e3 + 2]);
        e3 === 0 ? f2 = this._renderCoordsHelper.getAltitude(t3) : this._renderCoordsHelper.setAltitude(t3, f2);
        const a2 = this._renderCoordsHelper.worldUpAtPosition(t3, d$7), c2 = n2 + 2 * e3, h2 = e$a(b$6, t3, o2);
        if (e3 < u2.length - 3) {
          i2.up.setVec(c2, a2), i2.up.setVec(c2 + 3, a2), i2.up.setVec(c2 + 5, a2);
          for (let e4 = 0; e4 < 6; e4++)
            i2.start.setVec(c2 + e4, h2);
          i2.extrude.setValues(c2 + 0, 0, -1), i2.extrude.setValues(c2 + 1, 1, -1), i2.extrude.setValues(c2 + 2, 1, 1), i2.extrude.setValues(c2 + 3, 0, -1), i2.extrude.setValues(c2 + 4, 1, 1), i2.extrude.setValues(c2 + 5, 0, 1);
        }
        if (e3 > 0) {
          i2.up.setVec(c2 - 2, a2), i2.up.setVec(c2 - 4, a2), i2.up.setVec(c2 - 5, a2);
          for (let e4 = -6; e4 < 0; e4++)
            i2.end.setVec(c2 + e4, h2);
        }
      }
      n2 += this._numberOfRenderVertices(u2);
    }
    return i2.buffer;
  }
}
const d$7 = n$a(), b$6 = n$a(), V$6 = T$9().vec3f(O$3.START).vec3f(O$3.END).vec3f(O$3.UP).vec2f(O$3.EXTRUDE);
class e$2 extends t$9 {
  constructor() {
    super(...arguments), this.contrastControlEnabled = false;
  }
}
e$4([e$b()], e$2.prototype, "contrastControlEnabled", void 0);
const C$7 = m$9(6);
function A$9(e2) {
  const i2 = new o$7();
  i2.extensions.add("GL_OES_standard_derivatives"), i2.include(o$b), i2.include(i$4, e2);
  const t2 = i2.fragment;
  if (e2.lineVerticalPlaneEnabled || e2.heightManifoldEnabled)
    if (t2.uniforms.add(new o$6("maxPixelDistance", (i3, t3) => e2.heightManifoldEnabled ? 2 * t3.camera.computeScreenPixelSizeAt(i3.heightManifoldTarget) : 2 * t3.camera.computeScreenPixelSizeAt(i3.lineVerticalPlaneSegment.origin))), t2.code.add(n$c`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`), e2.spherical) {
      const e3 = (e4, i4, t3) => O$4(e4, i4.heightManifoldTarget, t3.camera.viewMatrix), i3 = (e4, i4) => O$4(e4, [0, 0, 0], i4.camera.viewMatrix);
      t2.uniforms.add([new e$c("heightManifoldOrigin", (t3, r2) => (e3(T$8, t3, r2), i3(_$4, r2), e$a(_$4, _$4, T$8), z$6(G$6, _$4), G$6[3] = s$6(_$4), G$6)), new e$5("globalOrigin", (e4, t3) => i3(T$8, t3)), new o$6("cosSphericalAngleThreshold", (e4, i4) => 1 - Math.max(2, x$7(i4.camera.eye, e4.heightManifoldTarget) * i4.camera.perRenderPixelRatio) / s$6(e4.heightManifoldTarget))]), t2.code.add(n$c`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`);
    } else
      t2.code.add(n$c`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);
  if (e2.pointDistanceEnabled && (t2.uniforms.add(new o$6("maxPixelDistance", (e3, i3) => 2 * i3.camera.computeScreenPixelSizeAt(e3.pointDistanceTarget))), t2.code.add(n$c`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)), e2.intersectsLineEnabled && (t2.uniforms.add(new o$6("perScreenPixelRatio", (e3, i3) => i3.camera.perScreenPixelRatio)), t2.code.add(n$c`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)), (e2.lineVerticalPlaneEnabled || e2.intersectsLineEnabled) && t2.code.add(n$c`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`), t2.code.add(n$c`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`), e2.heightManifoldEnabled) {
    t2.uniforms.add([new e$6("angleCutoff", (e3) => V$5(e3)), new e$c("heightPlane", (e3, i4) => z$5(e3.heightManifoldTarget, e3.renderCoordsHelper.worldUpAtPosition(e3.heightManifoldTarget, T$8), i4.camera.viewMatrix))]);
    const i3 = e2.spherical ? n$c`normalize(globalOrigin - pos)` : n$c`heightPlane.xyz`;
    t2.code.add(n$c`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${i3})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `);
  }
  return e2.pointDistanceEnabled && (t2.uniforms.add([new e$6("angleCutoff", (e3) => V$5(e3)), new e$c("pointDistanceSphere", (e3, i3) => O$2(e3, i3))]), t2.code.add(n$c`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)), e2.lineVerticalPlaneEnabled && (t2.uniforms.add([new e$6("angleCutoff", (e3) => V$5(e3)), new e$c("lineVerticalPlane", (e3, i3) => j$5(e3, i3)), new e$5("lineVerticalStart", (e3, i3) => y$5(e3, i3)), new e$5("lineVerticalEnd", (e3, i3) => E$3(e3, i3))]), t2.code.add(n$c`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)), e2.intersectsLineEnabled && (t2.uniforms.add([new e$6("angleCutoff", (e3) => V$5(e3)), new e$5("intersectsLineStart", (e3, i3) => O$4(T$8, e3.lineStartWorld, i3.camera.viewMatrix)), new e$5("intersectsLineEnd", (e3, i3) => O$4(T$8, e3.lineEndWorld, i3.camera.viewMatrix)), new e$5("intersectsLineDirection", (e3, i3) => (r$9(G$6, e3.intersectsLineSegment.vector), G$6[3] = 0, z$6(T$8, w$a(G$6, G$6, i3.camera.viewMatrix)))), new o$6("intersectsLineRadius", (e3) => e3.intersectsLineRadius)]), t2.code.add(n$c`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)), t2.code.add(n$c`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`), i2;
}
function V$5(t2) {
  return r$7(I$3, Math.cos(t2.angleCutoff), Math.cos(Math.max(0, t2.angleCutoff - m$9(2))));
}
function O$2(e2, i2) {
  return O$4(W$3, e2.pointDistanceOrigin, i2.camera.viewMatrix), W$3[3] = x$7(e2.pointDistanceOrigin, e2.pointDistanceTarget), W$3;
}
function j$5(e2, i2) {
  const t2 = l$7(e2.lineVerticalPlaneSegment, 0.5, T$8), n2 = e2.renderCoordsHelper.worldUpAtPosition(t2, R$3), o2 = z$6(_$4, e2.lineVerticalPlaneSegment.vector), r2 = _$8(G$6, n2, o2);
  return z$6(r2, r2), z$5(e2.lineVerticalPlaneSegment.origin, r2, i2.camera.viewMatrix);
}
function y$5(e2, i2) {
  const t2 = r$9(T$8, e2.lineVerticalPlaneSegment.origin);
  return e2.renderCoordsHelper.setAltitude(t2, 0), O$4(t2, t2, i2.camera.viewMatrix);
}
function E$3(e2, i2) {
  const t2 = u$7(T$8, e2.lineVerticalPlaneSegment.origin, e2.lineVerticalPlaneSegment.vector);
  return e2.renderCoordsHelper.setAltitude(t2, 0), O$4(t2, t2, i2.camera.viewMatrix);
}
function z$5(e2, i2, t2) {
  return O$4(U$3, e2, t2), r$9(G$6, i2), G$6[3] = 0, w$a(G$6, G$6, t2), _$7(U$3, G$6, F$3);
}
const I$3 = n$9(), T$8 = n$a(), G$6 = n$d(), R$3 = n$a(), _$4 = n$a(), U$3 = n$a(), F$3 = p$8(), W$3 = R$5(), H$2 = Object.freeze(Object.defineProperty({ __proto__: null, defaultAngleCutoff: C$7, build: A$9 }, Symbol.toStringTag, { value: "Module" }));
class f$5 extends t$a {
  constructor() {
    super(...arguments), this.innerColor = r$a(1, 1, 1), this.innerWidth = 1, this.glowColor = r$a(1, 0.5, 0), this.glowWidth = 8, this.glowFalloff = 8, this.globalAlpha = 0.75, this.globalAlphaContrastBoost = 2, this.angleCutoff = m$9(6), this.pointDistanceOrigin = n$a(), this.pointDistanceTarget = n$a(), this.lineVerticalPlaneSegment = v$7(), this.intersectsLineSegment = v$7(), this.intersectsLineRadius = 3, this.heightManifoldTarget = n$a(), this.lineStartWorld = n$a(), this.lineEndWorld = n$a();
  }
}
class p$6 extends e$9 {
  initializeProgram(e2) {
    return new o$8(e2.rctx, p$6.shader.get().build(this.configuration), E$6);
  }
  initializePipeline() {
    return W$4({ blending: s$5(R$4.ONE, R$4.ONE_MINUS_SRC_ALPHA), colorWrite: _$6 });
  }
}
p$6.shader = new t$8(H$2, () => import("./Laserlines.glsl.js"));
class n$5 extends e$2 {
  constructor() {
    super(...arguments), this.heightManifoldEnabled = false, this.pointDistanceEnabled = false, this.lineVerticalPlaneEnabled = false, this.intersectsLineEnabled = false, this.spherical = false;
  }
}
e$4([e$b()], n$5.prototype, "heightManifoldEnabled", void 0), e$4([e$b()], n$5.prototype, "pointDistanceEnabled", void 0), e$4([e$b()], n$5.prototype, "lineVerticalPlaneEnabled", void 0), e$4([e$b()], n$5.prototype, "intersectsLineEnabled", void 0), e$4([e$b()], n$5.prototype, "spherical", void 0);
class D$5 {
  constructor(e2, t2 = { contrastControlEnabled: false }) {
    this._config = t2, this._technique = null, this._heightManifoldEnabled = false, this._pointDistanceEnabled = false, this._lineVerticalPlaneEnabled = false, this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._viewingMode = l$8.Local, this._pathVerticalPlaneEnabled = false, this._pathVerticalPlaneData = null, this._pathTechnique = null, this.canRender = true, this._passParameters = S$8(e2, new f$5());
  }
  get renderSlots() {
    return [this._config.contrastControlEnabled ? E$7.LASERLINES_CONTRAST_CONTROL : E$7.LASERLINES];
  }
  get needsLinearDepth() {
    return true;
  }
  get heightManifoldEnabled() {
    return this._heightManifoldEnabled;
  }
  set heightManifoldEnabled(e2) {
    this._heightManifoldEnabled !== e2 && (this._heightManifoldEnabled = e2, this._requestRender());
  }
  get heightManifoldTarget() {
    return this._passParameters.heightManifoldTarget;
  }
  set heightManifoldTarget(e2) {
    r$9(this._passParameters.heightManifoldTarget, e2), this._requestRender();
  }
  get pointDistanceEnabled() {
    return this._pointDistanceEnabled;
  }
  set pointDistanceEnabled(e2) {
    e2 !== this._pointDistanceEnabled && (this._pointDistanceEnabled = e2, this._requestRender());
  }
  get pointDistanceTarget() {
    return this._passParameters.pointDistanceTarget;
  }
  set pointDistanceTarget(e2) {
    r$9(this._passParameters.pointDistanceTarget, e2), this._requestRender();
  }
  get pointDistanceOrigin() {
    return this._passParameters.pointDistanceOrigin;
  }
  set pointDistanceOrigin(e2) {
    r$9(this._passParameters.pointDistanceOrigin, e2), this._requestRender();
  }
  get lineVerticalPlaneEnabled() {
    return this._lineVerticalPlaneEnabled;
  }
  set lineVerticalPlaneEnabled(e2) {
    e2 !== this._lineVerticalPlaneEnabled && (this._lineVerticalPlaneEnabled = e2, this._requestRender());
  }
  get lineVerticalPlaneSegment() {
    return this._passParameters.lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e2) {
    h$a(e2, this._passParameters.lineVerticalPlaneSegment), this._requestRender();
  }
  get intersectsLineEnabled() {
    return this._intersectsLineEnabled;
  }
  set intersectsLineEnabled(e2) {
    e2 !== this._intersectsLineEnabled && (this._intersectsLineEnabled = e2, this._requestRender());
  }
  get intersectsLineSegment() {
    return this._passParameters.intersectsLineSegment;
  }
  set intersectsLineSegment(e2) {
    h$a(e2, this._passParameters.intersectsLineSegment), this._requestRender();
  }
  get intersectsLineRadius() {
    return this._passParameters.intersectsLineRadius;
  }
  set intersectsLineRadius(e2) {
    e2 !== this._passParameters.intersectsLineRadius && (this._passParameters.intersectsLineRadius = e2, this._requestRender());
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e2) {
    e2 !== this._intersectsLineInfinite && (this._intersectsLineInfinite = e2, this._requestRender());
  }
  get viewingMode() {
    return this._viewingMode;
  }
  set viewingMode(e2) {
    e2 !== this._viewingMode && (this._viewingMode = e2, this._requestRender());
  }
  get pathVerticalPlaneEnabled() {
    return this._pathVerticalPlaneEnabled;
  }
  set pathVerticalPlaneEnabled(t2) {
    t2 !== this._pathVerticalPlaneEnabled && (this._pathVerticalPlaneEnabled = t2, r$6(this._pathVerticalPlaneData) && this._requestRender());
  }
  set pathVerticalPlaneVertices(e2) {
    t$7(this._pathVerticalPlaneData) && (this._pathVerticalPlaneData = new _$5(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.vertices = e2, this.pathVerticalPlaneEnabled && this._requestRender();
  }
  set pathVerticalPlaneBuffers(e2) {
    t$7(this._pathVerticalPlaneData) && (this._pathVerticalPlaneData = new _$5(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.buffers = e2, this.pathVerticalPlaneEnabled && this._requestRender();
  }
  setParameters(e2) {
    B$3(this._passParameters, e2) && this._requestRender();
  }
  initializeRenderContext(e2) {
    this._context = e2;
    const t2 = e2.renderContext.rctx;
    this._quadVAO = u$8(t2), this._techniqueRepository = e2.shaderTechniqueRepository, this._techniqueConfig = new n$5();
    const i2 = new e$2();
    i2.contrastControlEnabled = this._config.contrastControlEnabled, this._pathTechnique = this._techniqueRepository.acquire(m$6, i2);
  }
  uninitializeRenderContext() {
    this._quadVAO = a$a(this._quadVAO), this._technique = w$b(this._technique), this._pathVerticalPlaneData = a$a(this._pathVerticalPlaneData), this._pathTechnique = w$b(this._pathTechnique);
  }
  prepareTechnique() {
    return this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled ? (this._techniqueConfig.heightManifoldEnabled = this.heightManifoldEnabled, this._techniqueConfig.lineVerticalPlaneEnabled = this.lineVerticalPlaneEnabled, this._techniqueConfig.pointDistanceEnabled = this.pointDistanceEnabled, this._techniqueConfig.intersectsLineEnabled = this.intersectsLineEnabled, this._techniqueConfig.contrastControlEnabled = this._config.contrastControlEnabled, this._techniqueConfig.spherical = this._viewingMode === l$8.Global, this._technique = this._techniqueRepository.releaseAndAcquire(p$6, this._techniqueConfig, this._technique), this._technique) : this._pathTechnique;
  }
  render(e2, t2) {
    (this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled) && this._renderUnified(e2, t2), this.pathVerticalPlaneEnabled && this._renderPath(e2);
  }
  _renderUnified(e2, t2) {
    const i2 = e2.rctx;
    this._updatePassParameters(e2), i2.bindTechnique(t2, this._passParameters, e2.bindParameters), i2.bindVAO(this._quadVAO), i2.drawArrays(E$4.TRIANGLE_STRIP, 0, 4);
  }
  _renderPath(e2) {
    if (t$7(this._pathVerticalPlaneData) || t$7(this._pathTechnique))
      return;
    const i2 = e2.rctx, n2 = this._pathTechnique;
    i2.bindTechnique(n2, __spreadProps(__spreadValues({}, this._passParameters), { origin: this._pathVerticalPlaneData.origin }), e2.bindParameters), this._pathVerticalPlaneData.draw(e2.rctx);
  }
  _updatePassParameters(e2) {
    if (!this._intersectsLineEnabled)
      return;
    const t2 = e2.bindParameters.camera;
    if (this._intersectsLineInfinite) {
      if (p$9(p$a(this._passParameters.intersectsLineSegment.origin, this._passParameters.intersectsLineSegment.vector), T$7), T$7.c0 = -Number.MAX_VALUE, !a$b(t2.frustum, T$7))
        return;
      v$8(T$7, this._passParameters.lineStartWorld), A$b(T$7, this._passParameters.lineEndWorld);
    } else
      r$9(this._passParameters.lineStartWorld, this._passParameters.intersectsLineSegment.origin), u$7(this._passParameters.lineEndWorld, this._passParameters.intersectsLineSegment.origin, this._passParameters.intersectsLineSegment.vector);
  }
  _requestRender() {
    this._context && this._context.requestRender();
  }
}
const T$7 = s$7();
class d$6 extends t$5 {
  constructor(e2) {
    super(e2.view), this._angleCutoff = C$7, this._style = {}, this._heightManifoldTarget = n$a(), this._heightManifoldEnabled = false, this._intersectsLine = v$7(), this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._lineVerticalPlaneSegment = null, this._pathVerticalPlaneBuffers = null, this._pointDistanceLine = null, this.applyProps(e2);
  }
  get testData() {
    return this._renderer;
  }
  createResources() {
    this._ensureRenderer();
  }
  destroyResources() {
    this._disposeRenderer();
  }
  updateVisibility() {
    this._syncRenderer(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance();
  }
  get angleCutoff() {
    return this._angleCutoff;
  }
  set angleCutoff(e2) {
    this._angleCutoff !== e2 && (this._angleCutoff = e2, this._syncAngleCutoff());
  }
  get style() {
    return this._style;
  }
  set style(e2) {
    this._style = e2, this._syncStyle();
  }
  get heightManifoldTarget() {
    return this._heightManifoldEnabled ? this._heightManifoldTarget : null;
  }
  set heightManifoldTarget(t2) {
    r$6(t2) ? (r$9(this._heightManifoldTarget, t2), this._heightManifoldEnabled = true) : this._heightManifoldEnabled = false, this._syncRenderer(), this._syncHeightManifold();
  }
  set intersectsWorldUpAtLocation(e2) {
    if (t$7(e2))
      return void (this.intersectsLine = null);
    const i2 = this.view.renderCoordsHelper.worldUpAtPosition(e2, o$4);
    this.intersectsLine = m$a(e2, i2), this.intersectsLineInfinite = true;
  }
  get intersectsLine() {
    return this._intersectsLineEnabled ? this._intersectsLine : null;
  }
  set intersectsLine(t2) {
    r$6(t2) ? (h$a(t2, this._intersectsLine), this._intersectsLineEnabled = true) : this._intersectsLineEnabled = false, this._syncIntersectsLine(), this._syncRenderer();
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e2) {
    this._intersectsLineInfinite = e2, this._syncIntersectsLineInfinite();
  }
  get lineVerticalPlaneSegment() {
    return this._lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(t2) {
    this._lineVerticalPlaneSegment = r$6(t2) ? h$a(t2) : null, this._syncLineVerticalPlane(), this._syncRenderer();
  }
  get pathVerticalPlane() {
    return this._pathVerticalPlaneBuffers;
  }
  set pathVerticalPlane(e2) {
    this._pathVerticalPlaneBuffers = e2, this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncRenderer();
  }
  get pointDistanceLine() {
    return this._pointDistanceLine;
  }
  set pointDistanceLine(t2) {
    this._pointDistanceLine = r$6(t2) ? { origin: t$b(t2.origin), target: t$b(t2.target) } : null, this._syncPointDistance(), this._syncRenderer();
  }
  _syncRenderer() {
    this.attached && this.visible && (this._intersectsLineEnabled || this._heightManifoldEnabled || r$6(this._pointDistanceLine) || r$6(this._pathVerticalPlaneBuffers)) ? this._ensureRenderer() : this._disposeRenderer();
  }
  _ensureRenderer() {
    r$6(this._renderer) || (this._renderer = new D$5({ renderCoordsHelper: this.view.renderCoordsHelper }, { contrastControlEnabled: true }), this._renderer.viewingMode = this.view.state.viewingMode, this._syncStyle(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncIntersectsLineInfinite(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncAngleCutoff(), this.view._stage && this.view._stage.addRenderPlugin(this._renderer.renderSlots, this._renderer));
  }
  _syncStyle() {
    t$7(this._renderer) || (this._renderer.setParameters(this._style), this._style.intersectsLineRadius != null && (this._renderer.intersectsLineRadius = this._style.intersectsLineRadius));
  }
  _syncAngleCutoff() {
    t$7(this._renderer) || this._renderer.setParameters({ angleCutoff: this._angleCutoff });
  }
  _syncHeightManifold() {
    t$7(this._renderer) || (this._renderer.heightManifoldEnabled = this._heightManifoldEnabled && this.visible, this._heightManifoldEnabled && (this._renderer.heightManifoldTarget = this._heightManifoldTarget));
  }
  _syncIntersectsLine() {
    t$7(this._renderer) || (this._renderer.intersectsLineEnabled = this._intersectsLineEnabled && this.visible, this._intersectsLineEnabled && (this._renderer.intersectsLineSegment = this._intersectsLine));
  }
  _syncIntersectsLineInfinite() {
    t$7(this._renderer) || (this._renderer.intersectsLineInfinite = this._intersectsLineInfinite);
  }
  _syncPathVerticalPlane() {
    t$7(this._renderer) || (this._renderer.pathVerticalPlaneEnabled = r$6(this._pathVerticalPlaneBuffers) && this.visible, r$6(this._pathVerticalPlaneBuffers) && (this._renderer.pathVerticalPlaneBuffers = this._pathVerticalPlaneBuffers));
  }
  _syncLineVerticalPlane() {
    t$7(this._renderer) || (this._renderer.lineVerticalPlaneEnabled = r$6(this._lineVerticalPlaneSegment) && this.visible, r$6(this._lineVerticalPlaneSegment) && (this._renderer.lineVerticalPlaneSegment = this._lineVerticalPlaneSegment));
  }
  _syncPointDistance() {
    t$7(this._renderer) || (this._renderer.pointDistanceEnabled = r$6(this._pointDistanceLine) && this.visible, r$6(this._pointDistanceLine) && (this._renderer.pointDistanceOrigin = this._pointDistanceLine.origin, this._renderer.pointDistanceTarget = this._pointDistanceLine.target));
  }
  _disposeRenderer() {
    r$6(this._renderer) && this.view._stage && (this.view._stage.removeRenderPlugin(this._renderer), this._renderer = null);
  }
}
const o$4 = n$a();
class n$4 extends t$5 {
  constructor(e2) {
    super(e2.view), this._resources = null, this._transform = e$8();
  }
  get object() {
    return r$6(this._resources) ? this._resources.object : null;
  }
  get transform() {
    return this._transform;
  }
  set transform(s2) {
    n$e(this._transform, s2), r$6(this._resources) && (this._resources.object.transformation = this._transform);
  }
  recreate() {
    this.attached && this.createResources();
  }
  recreateGeometry() {
    if (t$7(this._resources))
      return;
    const e2 = this._resources.object, r2 = this.view._stage;
    r2.removeMany(e2.geometries), e2.removeAllGeometries(), this.createGeometries(e2), this.visible || e2.setVisible(this.visible), r2.addMany(e2.geometries);
  }
  createResources() {
    this.destroyResources();
    const e2 = this.view._stage;
    if (!e2)
      return;
    const s2 = new l$9({ isPickable: false, updatePolicy: i$7.SYNC });
    e2.add(s2);
    const r2 = new x$8({ castShadow: false });
    r2.transformation = this._transform, this.createExternalResources(), this.createGeometries(r2), e2.addMany(r2.geometries), this.forEachExternalMaterial((s3) => e2.add(s3)), e2.add(r2), s2.add(r2), this.visible || r2.setVisible(false), this._resources = { layer: s2, object: r2 };
  }
  destroyResources() {
    const e2 = this.view._stage;
    !t$7(this._resources) && e2 && (e2.remove(this._resources.object), e2.remove(this._resources.layer), this.forEachExternalMaterial((s2) => {
      e2.remove(s2), s2.dispose();
    }), e2.removeMany(this._resources.object.geometries), this._resources.object.dispose(), this.destroyExternalResources(), this._resources = null);
  }
  updateVisibility(e2) {
    t$7(this._resources) || this._resources.object.setVisible(e2);
  }
}
class G$5 extends n$4 {
  constructor(t2) {
    super(t2), this._ray = d$a(), this._externalResources = null, this._handles = new t$c(), this._isWorldDown = false, this._start = n$a(), this._end = r$a(1, 0, 0), this._width = 1, this._color = r$b(1, 0, 1, 1), this._polygonOffset = false, this._writeDepthEnabled = true, this._innerWidth = 0, this._innerColor = r$b(1, 1, 1, 1), this._stipplePattern = null, this._stippleOffColor = null, this._stipplePreferContinuous = true, this._falloff = 0, this._extensionType = V$4.LINE, this._laserlineStyle = null, this._laserlineEnabled = false, this._renderOccluded = o$c.OccludeAndTransparent, this._fadedExtensions = F$2, this.applyProps(t2);
  }
  createExternalResources() {
    const e2 = new H$3(this.materialParameters);
    this._handles.add(l$5(() => this.view.state.camera, () => {
      this._updateGeometry();
    }));
    const t2 = new d$6({ view: this.view, attached: this._laserlineEnabled });
    this._externalResources = { material: e2, laserline: t2 };
  }
  destroyExternalResources() {
    r$6(this._externalResources) && this._externalResources.laserline.destroy(), this._externalResources = null, this._handles.removeAll();
  }
  forEachExternalMaterial(e2) {
    r$6(this._externalResources) && e2(this._externalResources.material);
  }
  createGeometries(e2) {
    const t2 = [n$a(), n$a()], i2 = this.extensionType === V$4.FADED;
    i2 && t2.push(n$a(), n$a());
    const r2 = i2 ? new Float32Array([1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]) : null, n2 = q$4(t2, null, r2);
    e2.addGeometry(n2, e$d(this._externalResources).material), this._updateVertices(e2);
  }
  updateVisibility(e2) {
    super.updateVisibility(e2), r$6(this._externalResources) && (this._externalResources.laserline.visible = e2);
  }
  setStartEndFromWorldDownAtLocation(e2) {
    this._isWorldDown = true, r$9(this._start, e2), this.view.renderCoordsHelper.worldUpAtPosition(e2, this._end), e$a(this._end, e2, this._end), h$b(this._start, this._end, this._ray), this._updateGeometry();
  }
  get start() {
    return this._start;
  }
  set start(e2) {
    this._isWorldDown = false, F$5(this._start, e2) || (r$9(this._start, e2), h$b(this._start, this._end, this._ray), this._updateGeometry());
  }
  get end() {
    return this._end;
  }
  set end(e2) {
    this._isWorldDown = false, F$5(this._end, e2) || (r$9(this._end, e2), h$b(this._start, this._end, this._ray), this._updateGeometry());
  }
  get width() {
    return this._width;
  }
  set width(e2) {
    e2 !== this._width && (this._width = e2, this._updateMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$6(e2, this._color) || (a$c(this._color, e2), this._updateMaterial());
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e2) {
    e2 !== this._polygonOffset && (this._polygonOffset = e2, this._updateMaterial());
  }
  get writeDepthEnabled() {
    return this._writeDepthEnabled;
  }
  set writeDepthEnabled(e2) {
    this._writeDepthEnabled !== e2 && (this._writeDepthEnabled = e2, this._updateMaterial());
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set innerWidth(e2) {
    e2 !== this._innerWidth && (this._innerWidth = e2, this._updateMaterial());
  }
  get innerColor() {
    return this._innerColor;
  }
  set innerColor(e2) {
    D$6(e2, this._innerColor) || (a$c(this._innerColor, e2), this._updateMaterial());
  }
  get stipplePattern() {
    return this._stipplePattern;
  }
  set stipplePattern(e2) {
    const s2 = r$6(e2) !== r$6(this._stipplePattern);
    this._stipplePattern = e2, s2 ? this.recreate() : this._updateMaterial();
  }
  get stippleOffColor() {
    return this._stippleOffColor;
  }
  set stippleOffColor(e2) {
    (t$7(e2) || t$7(this._stippleOffColor) || !D$6(e2, this._stippleOffColor)) && (this._stippleOffColor = r$6(e2) ? t$d(e2) : null, this._updateMaterial());
  }
  get stipplePreferContinuous() {
    return this._stipplePreferContinuous;
  }
  set stipplePreferContinuous(e2) {
    e2 !== this._stipplePreferContinuous && (this._stipplePreferContinuous = e2, this._updateMaterial());
  }
  get falloff() {
    return this._falloff;
  }
  set falloff(e2) {
    e2 !== this._falloff && (this._falloff = e2, this._updateMaterial());
  }
  get extensionType() {
    return this._extensionType;
  }
  set extensionType(e2) {
    e2 !== this._extensionType && (this._extensionType = e2, this._updateGeometry());
  }
  get _laserlineAttached() {
    return this._laserlineEnabled && r$6(this._laserlineStyle);
  }
  get laserlineStyle() {
    return this._laserlineStyle;
  }
  set laserlineStyle(e2) {
    this._laserlineStyle = e2, r$6(this._externalResources) && (this._externalResources.laserline.attached = this._laserlineAttached, r$6(e2) && (this._externalResources.laserline.style = e2));
  }
  get laserlineEnabled() {
    return this._laserlineEnabled;
  }
  set laserlineEnabled(e2) {
    this._laserlineEnabled !== e2 && (this._laserlineEnabled = e2, r$6(this._externalResources) && (this._externalResources.laserline.attached = this._laserlineAttached));
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial());
  }
  get fadedExtensions() {
    return this._fadedExtensions;
  }
  set fadedExtensions(e2) {
    this._fadedExtensions = i$8(e2, F$2), this.recreateGeometry();
  }
  _updateMaterial() {
    if (t$7(this._externalResources))
      return;
    this._externalResources.material.setParameters(this.materialParameters);
  }
  get materialParameters() {
    return { width: this._width, color: this._color, stippleOffColor: this._stippleOffColor, stipplePattern: this._stipplePattern, stipplePreferContinuous: this._stipplePreferContinuous, innerWidth: this._innerWidth, innerColor: this._innerColor, falloff: this._falloff, hasPolygonOffset: this._polygonOffset, renderOccluded: this._renderOccluded, writeDepth: this._writeDepthEnabled };
  }
  _updateGeometry() {
    r$6(this.object) && this._updateVertices(this.object);
  }
  _updateVertices(e2) {
    const s2 = this._extensionType === V$4.FADED ? this._updateLineSegmentFinite(T$6) : this._updateLineSegmentInfinite(this._extensionType, T$6);
    this._updateVertexAttributes(e2, s2), r$6(this._externalResources) && (this._externalResources.laserline.intersectsLine = s2);
  }
  _updateLineSegmentFinite(e2) {
    return b$8(this._start, this._end, e2);
  }
  _updateLineSegmentInfinite(e2, t2) {
    const s2 = this.view.state.camera;
    switch (p$9(this._ray, W$2), e2) {
      case V$4.LINE:
        W$2.c0 = -Number.MAX_VALUE;
        break;
      case V$4.RAY:
      case V$4.GROUND_RAY: {
        const e3 = this._ray.origin, t3 = i$8(this.view.elevationProvider.getElevation(e3[0], e3[1], e3[2], this.view.renderCoordsHelper.spatialReference, "ground"), 0), s3 = this.view.renderCoordsHelper.getAltitude(e3);
        this._isWorldDown && s3 < t3 && j$7(W$2.ray.direction, W$2.ray.direction), this._extensionType === V$4.GROUND_RAY && t3 != null && (W$2.c1 = Math.abs(s3 - t3));
        break;
      }
    }
    if (!a$b(s2.frustum, W$2))
      return b$8(this._start, this._end, t2);
    const i2 = v$8(W$2, L$5), n2 = A$b(W$2, S$6);
    return b$8(i2, n2, t2);
  }
  _updateVertexAttributes(e2, t2) {
    const s2 = e2.geometries[0].getMutableAttribute(O$3.POSITION).data;
    if (this.extensionType === V$4.FADED) {
      const e3 = l$7(t2, -this.fadedExtensions.start, L$5);
      s2[0] = e3[0], s2[1] = e3[1], s2[2] = e3[2];
      const i2 = l$7(t2, 0, L$5);
      s2[3] = i2[0], s2[4] = i2[1], s2[5] = i2[2];
      const r2 = l$7(t2, 1, L$5);
      s2[6] = r2[0], s2[7] = r2[1], s2[8] = r2[2];
      const n2 = l$7(t2, 1 + this.fadedExtensions.end, L$5);
      s2[9] = n2[0], s2[10] = n2[1], s2[11] = n2[2];
    } else {
      const e3 = l$7(t2, 0, L$5);
      s2[0] = e3[0], s2[1] = e3[1], s2[2] = e3[2];
      const i2 = l$7(t2, 1, L$5);
      s2[3] = i2[0], s2[4] = i2[1], s2[5] = i2[2];
    }
    e2.geometryVertexAttrsUpdated(e2.geometryRecords[0]);
  }
}
const W$2 = s$7(), L$5 = n$a(), S$6 = n$a(), T$6 = v$7();
var V$4;
!function(e2) {
  e2[e2.LINE = 0] = "LINE", e2[e2.RAY = 1] = "RAY", e2[e2.GROUND_RAY = 2] = "GROUND_RAY", e2[e2.FADED = 3] = "FADED";
}(V$4 || (V$4 = {}));
const N$4 = 1 / 3, F$2 = { start: N$4, end: N$4 };
class v$4 extends n$4 {
  constructor(t2) {
    super(t2), this._handles = new t$c(), this._location = n$a(), this._direction = r$a(1, 0, 0), this._width = 1, this._offset = 1, this._length = 18, this._color = r$b(1, 0, 1, 1), this._renderOccluded = o$c.OccludeAndTransparent, this.applyProps(t2);
  }
  get location() {
    return this._location;
  }
  set location(e2) {
    F$5(this._location, e2) || (r$9(this._location, e2), this._updateGeometry());
  }
  get direction() {
    return this._direction;
  }
  set direction(e2) {
    F$5(this._direction, e2) || (r$9(this._direction, e2), this._updateGeometry());
  }
  setDirectionFromPoints(e2, t2) {
    z$6(this._direction, e$a(this._direction, t2, e2)), this._updateGeometry();
  }
  get width() {
    return this._width;
  }
  set width(e2) {
    e2 !== this._width && (this._width = e2, this._updateMaterial());
  }
  get offset() {
    return this._offset;
  }
  set offset(e2) {
    e2 !== this._offset && (this._offset = e2, this._updateGeometry());
  }
  get length() {
    return this._length;
  }
  set length(e2) {
    e2 !== this._length && (this._length = e2, this._updateGeometry());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$6(e2, this._color) || (a$c(this._color, e2), this._updateMaterial());
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial());
  }
  createExternalResources() {
    const e2 = new H$3(this.materialParameters);
    this._handles.add(l$5(() => this.view.state.camera, () => {
      this._updateGeometry();
    })), this._externalResources = { material: e2 };
  }
  destroyExternalResources() {
    this._handles.removeAll(), this._externalResources = null;
  }
  createGeometries(e2) {
    const r2 = q$4([n$a(), n$a()]), s2 = q$4([n$a(), n$a()]), i2 = e$d(this._externalResources).material;
    e2.addGeometry(r2, i2), e2.addGeometry(s2, i2), this._updateVertices(e2);
  }
  forEachExternalMaterial(e2) {
    r$6(this._externalResources) && e2(this._externalResources.material);
  }
  _updateMaterial() {
    if (t$7(this._externalResources))
      return;
    this._externalResources.material.setParameters(this.materialParameters);
  }
  get materialParameters() {
    return { width: this._width, color: this._color, renderOccluded: this._renderOccluded };
  }
  _updateGeometry() {
    const e2 = this.object;
    t$7(e2) || this._updateVertices(e2);
  }
  _updateVertices(e2) {
    const t2 = this.view.state.camera;
    t2.projectToScreen(this.location, A$8), u$7(V$3, this.location, this.direction), t2.projectToScreen(V$3, M$8), v$6(M$8, o$d(M$8, M$8, A$8)), this._updateVertexAttributes(t2, e2, 0, A$8, M$8, 1), this._updateVertexAttributes(t2, e2, 1, A$8, M$8, -1);
  }
  _updateVertexAttributes(e2, t2, r2, s2, i2, o2) {
    const a2 = t2.geometryRecords[r2], c2 = a2.geometry.getMutableAttribute(O$3.POSITION).data, d2 = l$6(P$5, r$7(P$5, i2[1] * o2, i2[0] * -o2), this.offset + this.width / 2), m2 = s$4(k$3, s$4(k$3, s$4(k$3, s2, l$6(k$3, i2, this.length / 2)), d2), d2), u2 = s$4(E$2, m2, l$6(E$2, i2, -this.length));
    e2.unprojectFromScreen(m2, V$3), c2[0] = V$3[0], c2[1] = V$3[1], c2[2] = V$3[2], e2.unprojectFromScreen(u2, V$3), c2[3] = V$3[0], c2[4] = V$3[1], c2[5] = V$3[2], t2.geometryVertexAttrsUpdated(a2);
  }
}
const V$3 = n$a(), A$8 = i$6(), M$8 = i$6(), P$5 = i$6(), k$3 = i$6(), E$2 = i$6();
class u$5 {
  constructor(e2) {
    this._resourceFactory = e2, this._resources = null, this._visible = true, this._attached = false;
  }
  destroy() {
    this._destroyResources();
  }
  get object() {
    return r$6(this._resources) ? this._resources.object : null;
  }
  get resources() {
    return r$6(this._resources) ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this._syncVisible());
  }
  get attached() {
    return this._attached;
  }
  set attached(e2) {
    e2 !== this._attached && (this._attached = e2, this._createOrDestroyResources());
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    if (!this._resourceFactory.recreateGeometry)
      return void this.recreate();
    const e2 = this._resourceFactory.view._stage;
    if (t$7(this._resources) || !e2)
      return;
    const r2 = this._resources.object;
    this._resources.external.forEach((s2) => {
      s2.type === e$e.Geometry && e2.remove(s2);
    }), r2.removeAllGeometries();
    const t2 = this._resourceFactory.recreateGeometry(this._resources.external, r2, this._resources.layer);
    e2.addMany(t2);
  }
  _createOrDestroyResources() {
    this._attached ? this._resources || this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const e2 = this._resourceFactory, s2 = e2.view, i2 = s2._stage;
    if (!i2)
      return;
    const u2 = new l$9({ isPickable: false, updatePolicy: i$7.SYNC });
    i2.add(u2);
    const n2 = new x$8({ castShadow: false }), _2 = e2.createResources(n2, u2);
    _2.forEach((e3) => {
      i2.add(e3), e3 instanceof L$6 && i2.loadImmediate(e3);
    }), i2.add(n2), u2.add(n2);
    const l2 = e2.cameraChanged ? l$5(() => s2.state.camera, (s3) => e2.cameraChanged(s3), h$c) : null;
    this._resources = { layer: u2, object: n2, external: _2, cameraHandle: l2 }, this._syncVisible();
  }
  _destroyResources() {
    if (t$7(this._resources))
      return;
    const e2 = this._resourceFactory.view._stage;
    e2 == null ? void 0 : e2.remove(this._resources.object), e2 == null ? void 0 : e2.remove(this._resources.layer), this._resources.external.forEach((s2) => {
      e2 == null ? void 0 : e2.remove(s2), "dispose" in s2 && s2.dispose();
    }), this._resources.object.dispose(), this._resources.cameraHandle && this._resources.cameraHandle.remove(), this._resources = null;
  }
  _syncVisible() {
    t$7(this._resources) || this._resources.object.setVisible(this._visible);
  }
}
class S$5 {
  constructor(e2) {
    this.view = null, this._geometry = null, this._size = 3, this._color = r$c(1, 0, 1, 1), this._pixelSnappingEnabled = true, this._primitive = "square", this._outlineSize = 1, this._outlineColor = r$c(1, 1, 1, 1), this._elevationInfo = null, this._resources = new u$5({ view: e2.view, createResources: (e3) => this._createResources(e3), recreateGeometry: (e3, t3) => (e3.geometry = this._recreateGeometry(t3, e3.material), r$6(e3.geometry) ? [e3.geometry] : []) });
    let t2 = true;
    for (const r2 in e2)
      r2 in this ? r2 === "attached" ? t2 = e2[r2] : this[r2] = e2[r2] : console.error("Cannot set unknown property", r2);
    this.attached = t2;
  }
  destroy() {
    this._resources.destroy();
  }
  get visible() {
    return this._resources.visible;
  }
  set visible(e2) {
    this._resources.visible = e2;
  }
  get attached() {
    return this._resources.attached;
  }
  set attached(e2) {
    this._resources.attached = e2;
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this._resources.recreateGeometry();
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    if (e2 !== this._size) {
      const t2 = this._preferredTextureSize;
      this._size = e2, t2 < this._preferredTextureSize ? r$6(this._resources) && this._resources.recreate() : this._updateSizeAttribute();
    }
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$6(e2, this._color) || (a$c(this._color, e2), this._updateMaterial());
  }
  get pixelSnappingEnabled() {
    return this._pixelSnappingEnabled;
  }
  set pixelSnappingEnabled(e2) {
    this._pixelSnappingEnabled !== e2 && (this._pixelSnappingEnabled = e2, this._updateMaterial());
  }
  get primitive() {
    return this._primitive;
  }
  set primitive(e2) {
    this._primitive !== e2 && (this._primitive = e2, r$6(this._resources) && this._resources.recreate());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e2) {
    e2 !== this._outlineSize && (this._outlineSize = e2, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e2) {
    D$6(e2, this._outlineColor) || (a$c(this._outlineColor, e2), this._updateMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this._resources && this._resources.recreateGeometry();
  }
  _updateMaterial() {
    const e2 = this._resources.resources;
    t$7(e2) || e2.material.setParameters(this._materialParameters(e2.texture.id));
  }
  _updateSizeAttribute() {
    const e2 = this._resources.resources, t2 = this._resources.object;
    if (t$7(e2) || t$7(t2))
      return;
    const r2 = e2.geometry;
    if (t$7(r2))
      return;
    const s2 = r2.getMutableAttribute(O$3.SIZE).data, o2 = this._geometrySize;
    s2[0] = o2, s2[1] = o2, t2.geometryVertexAttrsUpdated(t2.geometryRecords[0]);
  }
  _materialParameters(e2) {
    return { color: this._color, textureIsSignedDistanceField: true, distanceFieldBoundingBox: z$4, occlusionTest: false, outlineColor: this._outlineColor, outlineSize: this._outlineSize, textureId: e2, polygonOffset: false, shaderPolygonOffset: 0, drawInSecondSlot: true, depthEnabled: false, pixelSnappingEnabled: this.pixelSnappingEnabled };
  }
  get _geometrySize() {
    return this._size / b$5;
  }
  _recreateGeometry(e2, t2) {
    const i2 = this._createRenderGeometry();
    return r$6(i2) && e2.addGeometry(i2, t2), i2;
  }
  _createResources(e2) {
    const t2 = o$e(this._primitive, this._preferredTextureSize), i2 = new Q(this._materialParameters(t2.id)), s2 = this._recreateGeometry(e2, i2);
    return { material: i2, texture: t2, geometry: s2, forEach(e3) {
      e3(t2), e3(i2), r$6(this.geometry) && e3(this.geometry);
    } };
  }
  get _preferredTextureSize() {
    return a$d(i$9(2 * this._geometrySize), 16, 128);
  }
  calculateMapBounds(e2) {
    if (t$7(this._resources.resources) || t$7(this._resources.resources.geometry))
      return false;
    const t2 = this._resources.resources.geometry.vertexAttributes.get(O$3.POSITION);
    return jn(t2.data, this.view.renderCoordsHelper.spatialReference, x$4, this.view.spatialReference), M$9(e2, x$4), true;
  }
  _createRenderGeometry() {
    const e2 = this.geometry;
    if (t$7(e2))
      return null;
    const { renderCoordsHelper: t2, elevationProvider: r2 } = this.view, o2 = m$b(e2, r2, h$d.fromElevationInfo(this.elevationInfo), t2), n2 = o$9(c$6.get(), e2.x, e2.y, o2), a2 = c$6.get();
    jn(n2, e2.spatialReference, a2, t2.spatialReference);
    const l2 = this._geometrySize;
    return b$9(null, a2, null, [l2, l2], [0, 0, 0, 1]);
  }
}
const b$5 = a$e, z$4 = [b$5 / 2, b$5 / 2, 1 - b$5 / 2, 1 - b$5 / 2], x$4 = n$a();
class S$4 extends n$4 {
  constructor(t2) {
    super(t2), this._handles = new t$c(), this._quadMaterial = null, this._outlineMaterial = null, this._maxSize = 0, this._position = n$a(), this._up = n$a(), this._right = n$a(), this._renderOccluded = o$c.OccludeAndTransparent, this._color = r$b(1, 0, 0, 1), this._outlineColor = r$b(0, 0, 0, 1), this._outlineSize = 0, this._size = 32, this._outlineRenderOccluded = o$c.Opaque, this.applyProps(t2);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateQuadMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    a$c(this._color, e2), this._updateQuadMaterial();
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e2) {
    a$c(this._outlineColor, e2), this._updateOutlineMaterial();
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e2) {
    const t2 = this._outlineSize === 0 != (e2 === 0);
    this._outlineSize = e2, t2 ? this.recreateGeometry() : this._updateOutlineMaterial();
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    e2 !== this._size && (this._size = e2, this._updateTransform());
  }
  get outlineRenderOccluded() {
    return this._outlineRenderOccluded;
  }
  set outlineRenderOccluded(e2) {
    this._outlineRenderOccluded = e2, this._updateOutlineMaterial();
  }
  set geometry({ previous: e2, center: t2, next: i2 }) {
    this._maxSize = Math.min(x$7(t2, e2), x$7(t2, i2)) / 3, z$6(this._up, e$a(this._up, e2, t2)), z$6(this._right, e$a(this._right, i2, t2)), r$9(this._position, t2), this.recreateGeometry();
  }
  createExternalResources() {
    this._quadMaterial = new m$c(this._quadMaterialParameters), this._outlineMaterial = new H$3(this._outlineMaterialParameters), this._handles.add(l$5(() => this.view.state.camera, () => this._updateTransform()));
  }
  destroyExternalResources() {
    this._quadMaterial = null, this._outlineMaterial = null, this._handles.removeAll();
  }
  forEachExternalMaterial(e2) {
    e2(this._quadMaterial), e2(this._outlineMaterial);
  }
  createGeometries(e2) {
    F$5(this._up, f$8) && F$5(this._right, f$8) || (this._createQuadGeometry(e2), this._createOutlineGeometry(e2), this._updateTransform(e2));
  }
  _createQuadGeometry(e2) {
    const t2 = this._quadGeometryData(this._up, this._right);
    e2.addGeometry(t2, this._quadMaterial);
  }
  _createOutlineGeometry(e2) {
    if (this._outlineSize === 0)
      return;
    const t2 = u$7(c$6.get(), this._up, this._right), i2 = q$4([this._up, t2, this._right]);
    e2.addGeometry(i2, this._outlineMaterial);
  }
  _updateTransform(e2 = this.object) {
    const i2 = this.view.state.camera, a2 = this._size * i2.computeScreenPixelSizeAt(this._position), o2 = Math.min(this._maxSize, a2);
    x$9(w$7, this._position), i$a(w$7, w$7, [o2, o2, o2]), r$6(e2) && (e2.transformation = w$7);
  }
  _quadGeometryData(e2, t2) {
    const i2 = u$7(c$6.get(), e2, t2);
    return new d$b([[O$3.POSITION, { size: 3, data: [0, 0, 0, ...t2, ...e2, ...i2], exclusive: true }]], [[O$3.POSITION, [0, 1, 2, 1, 2, 3]]]);
  }
  get _quadMaterialParameters() {
    return { color: this._color, transparent: true, writeDepth: false, polygonOffset: true, renderOccluded: this._renderOccluded };
  }
  _updateQuadMaterial() {
    this._quadMaterial && this._quadMaterial.setParameters(this._quadMaterialParameters);
  }
  get _outlineMaterialParameters() {
    return { color: this._outlineColor, width: this._outlineSize, renderOccluded: this._outlineRenderOccluded };
  }
  _updateOutlineMaterial() {
    this._outlineMaterial && this._outlineMaterial.setParameters(this._outlineMaterialParameters);
  }
}
const w$7 = e$8();
class _$3 extends r$d {
  visualizeIntersectionPoint(t2, o2) {
    const { coordinateHelper: r2, view: a2 } = o2;
    return t$e(new S$5({ view: a2, primitive: "circle", geometry: r2.vectorToPoint(t2.intersectionPoint), elevationInfo: i$8(t2.elevationInfo, o2.elevationInfo), size: 20, outlineSize: 2, color: [0, 0, 0, 0], outlineColor: l$4.toUnitRGBA(p$b.orange), pixelSnappingEnabled: false }));
  }
  visualizePoint(i2, t2) {
    const { view: o2, coordinateHelper: r2 } = t2, a2 = this._alignPoint(i2.point, i2.domain, t2);
    return t$e(new S$5({ view: o2, primitive: "circle", geometry: r2.vectorToPoint(a2), elevationInfo: this._hintElevationInfo(i2, t2), size: 20, outlineSize: 2, color: [0, 0, 0, 0], outlineColor: l$4.toUnitRGBA(p$b.orange), pixelSnappingEnabled: false }));
  }
  visualizeLine(e2, i2) {
    const { view: t2, coordinateHelper: o2 } = i2, r2 = this._alignPoint(e2.lineStart, e2.domain, i2), a2 = this._alignPoint(e2.lineEnd, e2.domain, i2);
    return t$e(this._createLineSegmentHintFromMap(e2.type, r2, a2, o2, this._hintElevationInfo(e2, i2), t2, e2.fadeLeft, e2.fadeRight));
  }
  visualizeParallelSign(i2, t2) {
    const { view: o2, coordinateHelper: r2 } = t2, l2 = this._hintElevationInfo(i2, t2), s2 = this._alignPoint(i2.lineStart, i2.domain, t2), p2 = this._alignPoint(i2.lineEnd, i2.domain, t2), c2 = f$9(s2, r2, l2, o2), m2 = f$9(p2, r2, l2, o2), g2 = A$c(m2, c2, m2, 0.5), v2 = new v$4({ view: o2, attached: false, offset: p$b.parallelLineHintOffset, length: p$b.parallelLineHintLength, width: p$b.parallelLineHintWidth, color: l$4.toUnitRGBA(p$b.orange), location: g2, renderOccluded: o$c.Opaque });
    return v2.setDirectionFromPoints(c2, g2), v2.attached = true, t$e(v2);
  }
  visualizeRightAngleQuad(i2, t2) {
    const { view: o2, coordinateHelper: r2 } = t2, a2 = this._hintElevationInfo(i2, t2), l2 = this._alignPoint(i2.previousVertex, i2.domain, t2), s2 = this._alignPoint(i2.centerVertex, i2.domain, t2), p2 = this._alignPoint(i2.nextVertex, i2.domain, t2);
    return t$e(new S$4({ view: o2, attached: true, color: l$4.toUnitRGBA(p$b.orange), renderOccluded: o$c.Transparent, outlineRenderOccluded: o$c.Opaque, outlineColor: l$4.toUnitRGBA(p$b.orange), outlineSize: p$b.rightAngleHintOutlineSize, size: p$b.rightAngleHintSize, geometry: { previous: f$9(l2, r2, a2, o2), center: f$9(s2, r2, a2, o2), next: f$9(p2, r2, a2, o2) } }));
  }
  _createLineSegmentHintFromMap(e2, n2, i2, t2, o2, r2, a2 = true, s2 = true) {
    const p2 = n$a(), c2 = n$a();
    return m$d(n2, i2, t2, o2, r2, p2, c2), this._createLineSegmentHint(e2, r2, p2, c2, a2, s2);
  }
  _createLineSegmentHint(n2, i2, t2, o2, r2 = true, a2 = true) {
    const l2 = new G$5({ view: i2, extensionType: V$4.FADED, start: t2, end: o2, color: l$4.toUnitRGBA(p$b.orange), renderOccluded: o$c.Opaque });
    switch (n2) {
      case l$a.TARGET:
        l2.width = p$b.lineHintWidthTarget, l2.fadedExtensions = { start: 0, end: p$b.lineHintFadedExtensions };
        break;
      case l$a.REFERENCE_EXTENSION:
        l2.width = p$b.lineHintWidthReference, l2.fadedExtensions = { start: 0, end: 0 };
        break;
      case l$a.REFERENCE:
        l2.width = p$b.lineHintWidthReference, l2.fadedExtensions = { start: r2 ? p$b.lineHintFadedExtensions : 0, end: a2 ? p$b.lineHintFadedExtensions : 0 };
    }
    return l2.attached = true, l2;
  }
  _alignPoint(e2, n2, i2) {
    const o2 = this._getSelfSnappingZ(n2, i2);
    if (t$7(o2))
      return e2;
    const r2 = i2.coordinateHelper, a2 = r2.vectorToPoint(e2, H$1);
    return a2.z = o2, r2.pointToVector(a2);
  }
  _hintElevationInfo(e2, n2) {
    return r$6(this._getSelfSnappingZ(e2.domain, n2)) ? e$d(n2.selfSnappingZ).elevationInfo : i$8(e2.elevationInfo, n2.elevationInfo);
  }
  _getSelfSnappingZ(e2, { selfSnappingZ: n2 }) {
    return e2 === E$8.SELF && r$6(n2) ? n2.value : null;
  }
}
const H$1 = new w$c();
const r$4 = { main: new l$4([255, 127, 0]), selected: new l$4([255, 255, 255]), staged: new l$4([12, 207, 255]), outline: new l$4([0, 0, 0, 0.5]), selectedOutline: new l$4([255, 255, 255]) }, h$6 = 0.3;
function c$3(t2, e2) {
  const i2 = t2.clone();
  return i2.a *= e2, i2;
}
function a$5(t2, l2) {
  const o2 = t2.clone(), s2 = y$7(o2);
  s2.s *= l2;
  const n2 = p$c(s2);
  return o2.r = n2.r, o2.g = n2.g, o2.b = n2.b, o2;
}
function d$5(t2, e2) {
  if (e2)
    for (const i2 in e2)
      t2[i2] = e2[i2];
}
class u$4 {
  constructor(t2) {
    this.color = r$4.main, this.height = 90, this.coneHeight = 40, this.coneWidth = 23, this.width = 3, this.renderOccluded = o$c.Opaque, d$5(this, t2);
  }
}
class p$5 {
  constructor(t2) {
    this.size = 11, this.outlineSize = 1, this.collisionPadding = 9, this.color = r$4.main, this.outlineColor = r$4.outline, this.renderOccluded = o$c.Opaque, this.hoverOutlineColor = r$4.selectedOutline, d$5(this, t2);
  }
  apply(t2, e2) {
    const i2 = this[t2];
    e2.setParameters({ color: P$4(i2), transparent: t2 !== "color" || i2.a < 1, renderOccluded: this.renderOccluded });
  }
}
class g$5 {
  constructor(t2) {
    this.size = 40, this.height = 0.2, this.offset = 0.25, this.collisionPadding = 2, this.color = c$3(r$4.main, 0.5), this.hoverColor = r$4.main, this.renderOccluded = o$c.Transparent, this.minSquaredEdgeLength = 900, d$5(this, t2);
  }
  apply(t2, e2) {
    const i2 = this[t2];
    e2.setParameters({ color: P$4(i2), transparent: i2.a < 1, renderOccluded: this.renderOccluded });
  }
}
class f$4 {
  constructor(t2) {
    this.vertex = new p$5({ color: r$4.main, outlineColor: r$4.outline }), this.edge = new p$5({ color: a$5(c$3(r$4.main, 2 / 3), 0.5), outlineColor: c$3(r$4.outline, 0.5), size: 8, collisionPadding: 8 }), this.selected = new p$5({ color: r$4.selected, outlineColor: r$4.outline }), this.edgeOffset = new g$5(), d$5(this, t2);
  }
}
class w$6 {
  constructor(t2) {
    this.color = r$4.selected, this.width = 1.5, this.stipplePattern = r$e(5), this.stippleOffColor = r$4.outline, this.falloff = 0, this.innerWidth = 1.5, this.innerColor = r$4.selected, this.renderOccluded = o$c.OccludeAndTransparent, d$5(this, t2);
  }
  apply(t2) {
    t2.color = P$4(this.color), t2.width = this.width, t2.stipplePattern = this.stipplePattern, t2.stippleOffColor = P$4(this.stippleOffColor), t2.falloff = this.falloff, t2.innerWidth = this.innerWidth, t2.innerColor = P$4(this.innerColor), t2.renderOccluded = this.renderOccluded;
  }
}
class C$6 {
  constructor(t2) {
    this.color = r$4.selected, this.size = 4, this.outlineSize = 1, this.outlineColor = r$4.outline, this.shape = "square", d$5(this, t2);
  }
  apply(t2) {
    t2.color = P$4(this.color), t2.size = this.size, t2.outlineSize = this.outlineSize, t2.outlineColor = P$4(this.outlineColor), t2.primitive = this.shape;
  }
}
class m$5 {
  constructor(t2) {
    this.innerColor = r$4.selected, this.innerWidth = 1, this.glowColor = r$4.main, this.glowWidth = 8, this.glowFalloff = 8, this.globalAlpha = h$6, this.globalAlphaContrastBoost = 1.5, this.radius = 3, this.heightFillColor = r$4.main, d$5(this, t2);
  }
  apply(e2, i2 = 1) {
    const l2 = { glowColor: l$4.toUnitRGB(this.glowColor), glowFalloff: this.glowFalloff, glowWidth: this.glowWidth, innerColor: l$4.toUnitRGB(this.innerColor), innerWidth: this.innerWidth, globalAlpha: this.globalAlpha * i2, globalAlphaContrastBoost: this.globalAlphaContrastBoost, intersectsLineRadius: this.radius };
    "style" in e2 ? e2.style = l2 : e2.laserlineStyle = l2;
  }
}
class O$1 {
  constructor(t2) {
    this.outline = new w$6({ color: r$4.outline, renderOccluded: o$c.OccludeAndTransparentStencil, stippleOffColor: r$4.selected, stipplePattern: r$e(5), width: 1.5, innerWidth: 0 }), this.staged = new w$6({ color: r$4.selected, renderOccluded: o$c.OccludeAndTransparentStencil, innerColor: r$4.staged, stippleOffColor: r$4.outline, stipplePattern: r$e(5), width: 1.5 }), this.shadowStyle = new m$5({ globalAlpha: h$6, glowColor: r$4.main, glowFalloff: 8, glowWidth: 8, innerColor: r$4.selected, innerWidth: 1 }), d$5(this, t2);
  }
}
class A$7 {
  constructor(t2) {
    this.outline = new C$6({ color: r$4.selected, outlineColor: r$4.outline, outlineSize: 1, shape: "circle", size: 4 }), this.shadowStyle = new m$5({ globalAlpha: h$6, glowColor: r$4.main, glowFalloff: 1.5, glowWidth: 6, innerColor: r$4.selected, innerWidth: 1, radius: 2 }), d$5(this, t2);
  }
}
class W$1 extends w$6 {
  constructor(t2) {
    super(), this.extensionType = V$4.GROUND_RAY, d$5(this, t2);
  }
}
class b$4 {
  constructor(t2) {
    this.lineGraphics = new O$1(), this.pointGraphics = new A$7(), this.heightPlane = new m$5({ globalAlpha: h$6, glowColor: r$4.main, glowFalloff: 8, glowWidth: 8, innerColor: r$4.selected, innerWidth: 1 }), this.heightBox = new m$5({ globalAlpha: h$6, glowColor: r$4.main, glowFalloff: 8, glowWidth: 8, innerColor: r$4.selected, innerWidth: 0, heightFillColor: r$4.main }), this.zVerticalLine = new W$1({ color: c$3(r$4.main, 5 * h$6 / 3), falloff: 2, innerColor: c$3(r$4.selected, 0), renderOccluded: o$c.OccludeAndTransparent, stipplePattern: null, width: 5, extensionType: V$4.GROUND_RAY }), this.laserlineAlphaMultiplier = 1.5, this.heightPlaneAngleCutoff = 20, d$5(this, t2);
  }
}
class z$3 {
  constructor(t2) {
    this.visualElements = new b$4(), this.reshapeManipulators = new f$4(), this.zManipulator = new u$4(), d$5(this, t2);
  }
  colorToVec4(t2) {
    return P$4(t2);
  }
}
function P$4(e2) {
  return e$f(l$4.toUnitRGBA(e2));
}
const y$4 = new z$3();
class h$5 {
  constructor(e2) {
    this._resourceFactory = e2, this._resources = null, this._visible = true, this._attached = false;
  }
  destroy() {
    this._destroyResources();
  }
  get resources() {
    return r$6(this._resources) ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this._syncGeometriesToRenderer());
  }
  get attached() {
    return this._attached;
  }
  set attached(e2) {
    e2 !== this._attached && (this._attached = e2, this._createOrDestroyResources());
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    this._resourceFactory.recreateGeometry ? t$7(this._resources) || (this._ensureRenderGeometriesRemoved(), this._resourceFactory.recreateGeometry(this._resources.external), this._syncGeometriesToRenderer()) : this.recreate();
  }
  _createOrDestroyResources() {
    this._attached ? t$7(this._resources) && this._createResources() : this._destroyResources();
  }
  _createResources() {
    var _a;
    this._destroyResources();
    const e2 = this._resourceFactory.createResources(), r2 = new n$3({ view: this._resourceFactory.view }), s2 = (_a = this._resourceFactory.view.basemapTerrain) == null ? void 0 : _a.overlayManager;
    this._resources = { layerView: new n$3({ view: this._resourceFactory.view }), external: e2, geometriesAdded: false }, s2 && (this._resources.drapeSourceRenderer = s2.registerGeometryDrapeSource(r2)), this._syncGeometriesToRenderer();
  }
  _destroyResources() {
    var _a;
    if (t$7(this._resources))
      return;
    this._ensureRenderGeometriesRemoved();
    const e2 = (_a = this._resourceFactory.view.basemapTerrain) == null ? void 0 : _a.overlayManager;
    e2 && e2.unregisterDrapeSource(this._resources.layerView), this._resources = null;
  }
  _syncGeometriesToRenderer() {
    this._visible ? this._ensureRenderGeometriesAdded() : this._ensureRenderGeometriesRemoved();
  }
  _ensureRenderGeometriesRemoved() {
    if (t$7(this._resources) || t$7(this._resources.drapeSourceRenderer))
      return;
    if (!this._resources.geometriesAdded)
      return;
    this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries, E$9.UPDATE), this._resources.geometriesAdded = false;
  }
  _ensureRenderGeometriesAdded() {
    if (t$7(this._resources) || t$7(this._resources.drapeSourceRenderer))
      return;
    if (this._resources.geometriesAdded)
      return;
    this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries, E$9.UPDATE), this._resources.geometriesAdded = true;
  }
}
let n$3 = class extends s$8(m$8) {
  constructor(e2) {
    super(e2), this.drapeSourceType = e$g.Features, this.updatePolicy = i$7.SYNC;
  }
};
e$4([y$6({ constructOnly: true })], n$3.prototype, "view", void 0), e$4([y$6({ readOnly: true })], n$3.prototype, "drapeSourceType", void 0), n$3 = e$4([n$7("DrapedVisualElementLayerView")], n$3);
class S$3 {
  constructor(t2) {
    this.view = null, this._attachmentOrigin = v$9(0, 0, 0, null), this._attachmentOriginDirty = true, this.events = new n$f(), this._isDraped = false, this._geometry = null, this._width = 1, this._color = r$b(1, 0, 1, 1), this._innerWidth = 0, this._innerColor = r$b(1, 1, 1, 1), this._stipplePattern = null, this._stippleOffColor = null, this._falloff = 0, this._elevationInfo = null, this._laserlineStyle = null, this._laserlineEnabled = false, this._renderOccluded = o$c.OccludeAndTransparentStencil, this._resources = new u$5({ view: t2.view, createResources: (e2) => this._createResources(e2), recreateGeometry: (e2, t3) => (e2.geometries.length = 0, this._recreateGeometry(t3, e2.material, e2.geometries), e2.geometries) }), this._attachmentOrigin.spatialReference = t2.view.spatialReference, this._drapedResources = new h$5({ view: t2.view, createResources: () => this._createDrapedResources(), recreateGeometry: (e2) => {
      e2.geometries = this._createRenderGeometriesDraped(e2.material), this._attachmentOriginChanged();
    } });
    let r2 = true;
    this._laserline = new d$6({ view: t2.view });
    for (const e2 in t2)
      e2 in this ? e2 === "attached" ? r2 = t2[e2] : this[e2] = t2[e2] : console.error("Cannot set unknown property", e2);
    this.attached = r2;
  }
  destroy() {
    this._resources.destroy(), this._drapedResources.destroy(), this._laserline.destroy();
  }
  get isDraped() {
    return this._isDraped;
  }
  set isDraped(e2) {
    e2 !== this._isDraped && (this._isDraped = e2, this._updateAttached(this.attached), this._laserline.attached = this._laserlineAttached);
  }
  get _laserlineAttached() {
    return this.attached && this.visible && r$6(this._laserlineStyle) && !this.isDraped && this.laserlineEnabled;
  }
  get visible() {
    return this._resources.visible;
  }
  set visible(e2) {
    this._resources.visible = e2, this._drapedResources.visible = e2, this._laserline.attached = this._laserlineAttached;
  }
  get attached() {
    return this._resources.attached || this._drapedResources.attached;
  }
  set attached(e2) {
    this._updateAttached(e2);
  }
  _updateAttached(e2) {
    this._resources.attached = !this.isDraped && e2, this._drapedResources.attached = this.isDraped && e2, this._laserline.attached = this._laserlineAttached, this.attached && this._attachmentOriginChanged();
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this._resources.recreateGeometry(), this._drapedResources.recreateGeometry();
  }
  get width() {
    return this._width;
  }
  set width(e2) {
    e2 !== this._width && (this._width = e2, this._updateMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$6(e2, this._color) || (a$c(this._color, e2), this._updateMaterial());
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set innerWidth(e2) {
    e2 !== this._innerWidth && (this._innerWidth = e2, this._updateMaterial());
  }
  get innerColor() {
    return this._innerColor;
  }
  set innerColor(e2) {
    D$6(e2, this._innerColor) || (a$c(this._innerColor, e2), this._updateMaterial());
  }
  get stipplePattern() {
    return this._stipplePattern;
  }
  set stipplePattern(e2) {
    const r2 = r$6(e2) !== r$6(this._stipplePattern);
    this._stipplePattern = e2, r2 ? this._resources.recreate() : this._updateMaterial();
  }
  get stippleOffColor() {
    return this._stippleOffColor;
  }
  set stippleOffColor(e2) {
    e2 && this._stippleOffColor && D$6(e2, this._stippleOffColor) || (this._stippleOffColor = e2 ? t$d(e2) : null, this._updateMaterial());
  }
  get falloff() {
    return this._falloff;
  }
  set falloff(e2) {
    e2 !== this._falloff && (this._falloff = e2, this._updateMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this._resources.recreateGeometry();
  }
  get laserlineStyle() {
    return this._laserlineStyle;
  }
  set laserlineStyle(e2) {
    this._laserlineStyle = e2, this._laserline.attached = this._laserlineAttached, r$6(e2) && (this._laserline.style = e2);
  }
  get laserlineEnabled() {
    return this._laserlineEnabled;
  }
  set laserlineEnabled(e2) {
    this._laserlineEnabled !== e2 && (this._laserlineEnabled = e2, this._laserline.attached = this._laserlineAttached);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial());
  }
  get attachmentOrigin() {
    if (!this._attachmentOriginDirty)
      return this._attachmentOrigin;
    const e2 = r$6(this._resources.resources) ? this._resources.resources.geometries : null;
    if (!e2 || e2.length === 0)
      return null;
    o$9(W, 0, 0, 0);
    let s2 = 0;
    for (const t2 of e2) {
      const e3 = t2.vertexAttributes.get(O$3.POSITION), i2 = t2.indices.get(O$3.POSITION), n2 = e$d(this._resources.resources).material.isClosed(e3.data, i2);
      f$a(e3, i2, n2, T$5) && (u$7(W, W, T$5), s2++);
    }
    return s2 === 0 ? null : (g$6(W, W, 1 / s2), this.view.renderCoordsHelper.fromRenderCoords(W, this._attachmentOrigin), this._attachmentOriginDirty = false, this._attachmentOrigin);
  }
  _updateMaterial() {
    r$6(this._resources.resources) && this._resources.resources.material.setParameters(this._materialParameters), r$6(this._drapedResources.resources) && this._drapedResources.resources.material.setParameters(this._materialParameters);
  }
  get _isClosed() {
    return r$6(this.geometry) && this.geometry.type === "polygon";
  }
  get _materialParameters() {
    return { width: this._width, color: this._color, stippleOffColor: this._stippleOffColor, stipplePattern: this._stipplePattern, stipplePreferContinuous: false, isClosed: this._isClosed, falloff: this._falloff, innerColor: this._innerColor, innerWidth: this._innerWidth, join: "round", hasPolygonOffset: true, renderOccluded: this._normalizedRenderOccluded };
  }
  get _normalizedRenderOccluded() {
    return this.isDraped && this._renderOccluded === o$c.OccludeAndTransparentStencil ? o$c.OccludeAndTransparent : this._renderOccluded;
  }
  _recreateGeometry(e2, t2, r2) {
    const s2 = this._createRenderGeometries();
    for (const i2 of s2)
      e2.addGeometry(i2, t2), r2.push(i2);
    this._attachmentOriginChanged();
  }
  _attachmentOriginChanged() {
    this._attachmentOriginDirty = true, this.events.emit("attachment-origin-changed");
  }
  _createResources(e2) {
    const t2 = new H$3(this._materialParameters), r2 = [];
    return this._recreateGeometry(e2, t2, r2), { material: t2, geometries: r2, forEach: (e3) => {
      e3(t2), r2.forEach(e3);
    } };
  }
  _createDrapedResources() {
    const e2 = new H$3(this._materialParameters);
    return { material: e2, geometries: this._createRenderGeometriesDraped(e2) };
  }
  _createRenderGeometriesDraped(e2) {
    const t2 = this.geometry;
    if (t$7(t2) || t$7(this.view.basemapTerrain.spatialReference))
      return [];
    const r2 = s$9(t2, this.view.basemapTerrain.spatialReference), i2 = [];
    for (const { position: s2 } of r2.lines) {
      const t3 = { overlayInfo: { spatialReference: this.view.basemapTerrain.spatialReference, renderCoordsHelper: this.view.renderCoordsHelper }, attributeData: { position: s2 }, removeDuplicateStartEnd: this._isClosed }, r3 = new T$a(m$e(t3), e2), a2 = A$d(M$7);
      M$9(a2, s2), r$f(r3.boundingSphere, 0.5 * (a2[0] + a2[3]), 0.5 * (a2[1] + a2[4]), 0, 0.5 * Math.sqrt((a2[3] - a2[0]) * (a2[3] - a2[0]) + (a2[4] - a2[1]) * (a2[4] - a2[1]))), i2.push(r3);
    }
    return i2;
  }
  calculateMapBounds(e2) {
    if (t$7(this._resources.resources))
      return false;
    const t2 = this.view.renderCoordsHelper;
    for (const r2 of this._resources.resources.geometries) {
      const s2 = r2.vertexAttributes.get(O$3.POSITION), i2 = new Float64Array(s2.data.length);
      xn(s2.data, t2.spatialReference, 0, i2, this.view.spatialReference, 0, s2.data.length / 3), M$9(e2, i2);
    }
    return true;
  }
  _createRenderGeometries() {
    var _a;
    const e2 = this.geometry;
    if (t$7(e2))
      return [];
    const t2 = i$b(e2, this.view.elevationProvider, this.view.renderCoordsHelper, h$d.fromElevationInfo((_a = this.elevationInfo) != null ? _a : new x$a({ mode: i$5(e2, null) }))), r2 = [], i2 = [];
    for (const { position: s2, mapPosition: a2 } of t2.lines) {
      const e3 = { attributeData: { position: s2, mapPosition: a2 }, removeDuplicateStartEnd: this._isClosed };
      r2.push(m$e(e3)), i2.push(s2);
    }
    return this._laserline.pathVerticalPlane = i2, r2;
  }
}
const M$7 = a$f(), T$5 = n$a(), W = n$a();
function t$4(t2, e2, o2, l2, r2) {
  const i2 = new Float64Array(3 * t2.length), s2 = new Float64Array(i2.length);
  t2.forEach((n2, t3) => {
    i2[3 * t3 + 0] = n2[0], i2[3 * t3 + 1] = n2[1], i2[3 * t3 + 2] = n2.length > 2 ? n2[2] : 0;
  });
  const a2 = f$b(i2, e2, 0, s2, 0, i2, 0, i2.length / 3, o2, l2, r2), c2 = a2 != null;
  return { numVertices: t2.length, position: i2, mapPosition: s2, projectionSuccess: c2, sampledElevation: a2 };
}
function o$3(o2, n2) {
  if (!n2.screenSizeEnabled)
    return;
  const c2 = o2.vertex;
  c$7(c2, n2), c2.uniforms.add(new o$6("perScreenPixelRatio", (e2, i2) => i2.camera.perScreenPixelRatio)), c2.uniforms.add(new o$6("screenSizeScale", (e2) => e2.screenSizeScale)), c2.code.add(n$c`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`);
}
function w$5(e2) {
  const w2 = new o$7(), b2 = e2.hasMultipassTerrain && (e2.output === h$e.Color || e2.output === h$e.Alpha);
  w2.include(r$g, e2), w2.include(o$3, e2), w2.include(u$9, e2);
  const { vertex: h2, fragment: C2 } = w2;
  return C2.include(e$h), v$a(h2, e2), C2.uniforms.add(new e$c("uColor", (e3) => e3.color)), w2.attributes.add(O$3.POSITION, "vec3"), w2.varyings.add("vWorldPosition", "vec3"), b2 && w2.varyings.add("depth", "float"), e2.screenSizeEnabled && w2.attributes.add(O$3.OFFSET, "vec3"), e2.shadingEnabled && (d$c(h2), w2.attributes.add(O$3.NORMAL, "vec3"), w2.varyings.add("vViewNormal", "vec3")), h2.code.add(n$c`
    void main(void) {
      vWorldPosition = ${e2.screenSizeEnabled ? "screenSizeScaling(offset, position)" : "position"};
  `), e2.shadingEnabled && h2.code.add(n$c`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`), h2.code.add(n$c`
    ${b2 ? "depth = (view * vec4(vWorldPosition, 1.0)).z;" : ""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `), b2 && w2.include(n$g, e2), C2.code.add(n$c`
    void main() {
      discardBySlice(vWorldPosition);
      ${b2 ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
    `), e2.shadingEnabled ? (C2.uniforms.add(new e$5("shadingDirection", (e3) => e3.shadingDirection)), C2.uniforms.add(new e$c("shadedColor", (e3) => f$3(e3.shadingTint, e3.color))), C2.code.add(n$c`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)) : C2.code.add(n$c`vec4 finalColor = uColor;`), C2.code.add(n$c`
      if (finalColor.a < ${n$c.float(t$f)}) {
        discard;
      }
      ${e2.output === h$e.Alpha ? n$c`gl_FragColor = vec4(finalColor.a);` : ""}

      ${e2.output === h$e.Color ? n$c`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e2.transparencyPassType === o$f.Color ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}` : ""}
    }
    `), w2;
}
function f$3(e2, o2) {
  const r2 = 1 - e2[3], i2 = e2[3] + o2[3] * r2;
  return i2 === 0 ? (b$3[3] = i2, b$3) : (b$3[0] = (e2[0] * e2[3] + o2[0] * o2[3] * r2) / i2, b$3[1] = (e2[1] * e2[3] + o2[1] * o2[3] * r2) / i2, b$3[2] = (e2[2] * e2[3] + o2[2] * o2[3] * r2) / i2, b$3[3] = o2[3], b$3);
}
const b$3 = n$d(), h$4 = Object.freeze(Object.defineProperty({ __proto__: null, build: w$5 }, Symbol.toStringTag, { value: "Module" }));
class g$4 extends e$9 {
  initializeProgram(e2) {
    return new o$8(e2.rctx, g$4.shader.get().build(this.configuration), v$3);
  }
  _setPipelineState(e2) {
    const r2 = this.configuration, o2 = e2 === o$f.NONE, i2 = e2 === o$f.FrontFace;
    return W$4({ blending: r2.output !== h$e.Color && r2.output !== h$e.Alpha || !r2.transparent ? null : o2 ? c$8 : A$e(e2), culling: h$f(r2.cullFace), depthTest: { func: i2 ? I$4.LESS : r2.shadingEnabled ? I$4.LEQUAL : I$4.LESS }, depthWrite: o2 ? r2.writeDepth && a$g : E$a(e2), colorWrite: _$6, polygonOffset: o2 || i2 ? null : _$9 });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
}
g$4.shader = new t$8(h$4, () => import("./ShadedColorMaterial.glsl.js"));
class j$4 extends s$a {
  constructor() {
    super(...arguments), this.output = h$e.Color, this.cullFace = n$h.None, this.transparencyPassType = o$f.NONE, this.hasSlicePlane = false, this.transparent = false, this.writeDepth = true, this.screenSizeEnabled = true, this.shadingEnabled = true, this.hasMultipassTerrain = false, this.cullAboveGround = false;
  }
}
e$4([e$b({ count: h$e.COUNT })], j$4.prototype, "output", void 0), e$4([e$b({ count: n$h.COUNT })], j$4.prototype, "cullFace", void 0), e$4([e$b({ count: o$f.COUNT })], j$4.prototype, "transparencyPassType", void 0), e$4([e$b()], j$4.prototype, "hasSlicePlane", void 0), e$4([e$b()], j$4.prototype, "transparent", void 0), e$4([e$b()], j$4.prototype, "writeDepth", void 0), e$4([e$b()], j$4.prototype, "screenSizeEnabled", void 0), e$4([e$b()], j$4.prototype, "shadingEnabled", void 0), e$4([e$b()], j$4.prototype, "hasMultipassTerrain", void 0), e$4([e$b()], j$4.prototype, "cullAboveGround", void 0);
const v$3 = new Map([[O$3.POSITION, 0], [O$3.NORMAL, 1], [O$3.OFFSET, 2]]);
class v$2 extends d$d {
  constructor(e2) {
    super(e2, new x$3()), this.supportsEdges = true, this._configuration = new j$4(), this._vertexAttributeLocations = v$3;
  }
  getConfiguration(e2, t2) {
    return this._configuration.output = e2, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.screenSizeEnabled = this.parameters.screenSizeEnabled, this._configuration.shadingEnabled = this.parameters.shadingEnabled, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.hasMultipassTerrain = t2.multipassTerrain.enabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e2, s2, a2, c2, l2, u2, h2) {
    if (this.parameters.screenSizeEnabled) {
      const a3 = e2.vertexAttributes.get(O$3.OFFSET), p2 = { applyToVertex: (e3, s3, n2, o2) => {
        const l3 = o$9(L$4, a3.data[3 * o2 + 0], a3.data[3 * o2 + 1], a3.data[3 * o2 + 2]), u3 = o$9(w$4, e3, s3, n2);
        return g$6(l3, l3, this.parameters.screenSizeScale * c2.camera.computeRenderPixelSizeAt(l3)), u$7(u3, u3, l3), [u3[0], u3[1], u3[2]];
      }, applyToAabb: (e3) => {
        const t2 = p$d(e3, L$4);
        return Y$1(e3, this.parameters.screenSizeScale * c2.camera.computeRenderPixelSizeAt(t2));
      } };
      x$b(e2, s2, c2, l2, u2, p2, h2);
    } else
      x$b(e2, s2, c2, l2, u2, void 0, h2);
  }
  requiresSlot(e2, t2) {
    if (t2 === h$e.Highlight)
      return e2 === E$7.OPAQUE_MATERIAL;
    if (t2 === h$e.Color || t2 === h$e.Alpha || t2 === h$e.ObjectAndLayerIdColor) {
      let t3 = E$7.OPAQUE_MATERIAL;
      return this.parameters.transparent && (t3 = this.parameters.writeDepth ? E$7.TRANSPARENT_MATERIAL : E$7.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL), e2 === t3 || e2 === E$7.DRAPED_MATERIAL;
    }
    return false;
  }
  createGLMaterial(e2) {
    return new j$3(e2);
  }
  createBufferWriter() {
    return new O(this.parameters.screenSizeEnabled);
  }
}
class j$3 extends t$g {
  beginSlot(e2) {
    return this.ensureTechnique(g$4, e2);
  }
}
class x$3 extends h$g {
  constructor() {
    super(...arguments), this.color = r$c(1, 1, 1, 1), this.shadingTint = r$c(0, 0, 0, 0.25), this.shadingDirection = z$6(n$a(), [0.5, -0.5, -0.5]), this.screenSizeScale = 14, this.transparent = false, this.writeDepth = true, this.hasSlicePlane = false, this.cullFace = n$h.None, this.screenSizeEnabled = false, this.shadingEnabled = true;
  }
}
class O {
  constructor(e2) {
    this.screenSizeEnabled = e2;
    const t2 = T$9().vec3f(O$3.POSITION).vec3f(O$3.NORMAL);
    this.screenSizeEnabled && t2.vec3f(O$3.OFFSET), this.vertexBufferLayout = t2;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return e2.indices.get(O$3.POSITION).length;
  }
  write(e2, t2, r2, i2, s2) {
    if (m$f(r2, this.vertexBufferLayout, e2, t2, i2, s2), this.screenSizeEnabled) {
      if (!r2.vertexAttributes.has(O$3.OFFSET))
        throw new Error(`${O$3.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);
      {
        const e3 = r2.vertexAttributes.get(O$3.OFFSET), a2 = r2.indices.get(O$3.OFFSET);
        e$i(e3.size === 3);
        const n2 = i2.getField(O$3.OFFSET, i$c);
        if (!n2)
          throw new Error("unable to acquire view for " + O$3.OFFSET);
        y$8(a2, e3.data, t2, n2, s2);
      }
    }
  }
}
const L$4 = n$a(), w$4 = n$a();
class _$2 extends n$4 {
  constructor(e2) {
    super(e2), this.view = null, this._renderOccluded = o$c.OccludeAndTransparent, this._vertices = null, this._spatialReference = null, this._color = y$4.colorToVec4(y$4.reshapeManipulators.vertex.color), this._size = y$4.reshapeManipulators.vertex.size, this._outlineColor = y$4.colorToVec4(y$4.reshapeManipulators.vertex.outlineColor), this._outlineSize = y$4.reshapeManipulators.vertex.outlineSize, this._elevationInfo = null, this.applyProps(e2);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial(), this._updateOutlineMaterial());
  }
  get vertices() {
    return this._vertices;
  }
  set vertices(e2) {
    this._vertices = e2, this.recreateGeometry();
  }
  get spatialReference() {
    return this._spatialReference;
  }
  set spatialReference(e2) {
    this._spatialReference = e2, this.recreateGeometry();
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$6(e2, this._color) || (a$c(this._color, e2), this._updateMaterial());
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    e2 !== this._size && (this._size = e2, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e2) {
    D$6(e2, this._outlineColor) || (a$c(this._outlineColor, e2), this._updateOutlineMaterial());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e2) {
    e2 !== this._outlineSize && (this._outlineSize = e2, this._updateOutlineMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this.recreateGeometry();
  }
  get _vertexMaterialParameters() {
    return { color: this._color, transparent: this._color[3] < 1, screenSizeScale: this.size, renderOccluded: this._renderOccluded };
  }
  get _vertexOutlineMaterialParameters() {
    return { color: this._outlineColor, transparent: this._outlineColor[3] < 1, screenSizeScale: this.size + 2 * this.outlineSize, renderOccluded: this._renderOccluded };
  }
  _updateMaterial() {
    this.attached && this._vertexMaterial.setParameters(this._vertexMaterialParameters);
  }
  _updateOutlineMaterial() {
    this.attached && this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters);
  }
  _createRenderGeometries() {
    const r2 = this.vertices;
    if (t$7(r2) || r2.length === 0)
      return [];
    const i2 = 0.5, s2 = 0.5, a2 = t$4(r2, this.spatialReference, this.view.elevationProvider, this.view.renderCoordsHelper, h$d.fromElevationInfo(this.elevationInfo)), o2 = [], c2 = a2.numVertices, h2 = a2.position;
    for (let e2 = 0; e2 < c2; ++e2) {
      const r3 = o$9(p$4, h2[3 * e2 + 0], h2[3 * e2 + 1], h2[3 * e2 + 2]), a3 = m$4(i2, r3), l2 = m$4(s2, r3);
      o2.push({ vertexGeometry: a3, vertexOutlineGeometry: l2 });
    }
    return o2;
  }
  createGeometries(e2) {
    const t2 = this._createRenderGeometries();
    for (const { vertexGeometry: r2, vertexOutlineGeometry: i2 } of t2)
      e2.addGeometry(r2, this._vertexMaterial), e2.addGeometry(i2, this._vertexOutlineMaterial);
  }
  createExternalResources() {
    this._vertexMaterial = new v$2(__spreadProps(__spreadValues({}, this._vertexMaterialParameters), { writeDepth: true, cullFace: n$h.Back, screenSizeEnabled: true })), this._vertexOutlineMaterial = new v$2(__spreadProps(__spreadValues({}, this._vertexOutlineMaterialParameters), { transparent: true, writeDepth: true, cullFace: n$h.Front, screenSizeEnabled: true, shadingEnabled: false }));
  }
  destroyExternalResources() {
    this._vertexMaterial = null, this._vertexOutlineMaterial = null;
  }
  forEachExternalMaterial(e2) {
    e2(this._vertexMaterial), e2(this._vertexOutlineMaterial);
  }
}
const p$4 = n$a();
function m$4(e2, t2) {
  return T$b(e2, 16, 16, { offset: t2 });
}
let e$1 = class extends n$f.EventedAccessor {
  constructor(r2) {
    super(r2), this.tracking = false, this.displaying = false, this.isDraped = false;
  }
};
e$4([y$6({ constructOnly: true })], e$1.prototype, "graphic", void 0), e$4([y$6()], e$1.prototype, "tracking", void 0), e$4([y$6()], e$1.prototype, "displaying", void 0), e$4([y$6()], e$1.prototype, "isDraped", void 0), e$1 = e$4([n$7("esri.views.3d.layers.graphics.GraphicState")], e$1);
let T$4 = class extends Z {
  constructor(e2) {
    super(e2), this._activeVertexVisualElement = null, this._createGraphicState = null, this._outlineVisualElement = null, this._verticesVisualElement = null, this._verticalLineVisualElement = null, this.geometryType = null, this.type = "draw-3d";
  }
  initialize() {
    const { mode: e2, offset: t2 } = this.elevationInfo;
    this.internalGraphicsLayer.elevationInfo = new x$a({ mode: e2, offset: t2 });
  }
  normalizeCtorArgs(e2) {
    var _a;
    if (!e2.elevationInfo) {
      const t2 = (_a = e2.hasZ) != null ? _a : true;
      return __spreadProps(__spreadValues({}, e2), { elevationInfo: s$b(t2) });
    }
    return e2;
  }
  initializeGraphic(e2) {
    const i2 = this._createGraphicState = new e$1({ graphic: e2 });
    return r$h([this.view.maskOccludee(e2), this.view.trackGraphicState(i2), l$5(() => ({ element: this._outlineVisualElement, isDraped: i2.isDraped }), ({ element: e3, isDraped: t2 }) => {
      o$5(e3, (e4) => e4.isDraped = t2);
    }, h$c)]);
  }
  makeDrawOperation() {
    const { geometryType: e2 } = this, t2 = e2 !== "circle" && e2 !== "rectangle";
    return new C$9({ view: this.view, manipulators: this.manipulators, geometryType: q$5(e2), drawingMode: this.mode, hasZ: this.hasZ, defaultZ: this.defaultZ, snapToSceneEnabled: this.snapToScene, drawSurface: new c$9(this.view, this.elevationInfo, [this.internalGraphicsLayer]), elevationDrawSurface: new o$g(this.elevationInfo, this.defaultZ, this.view, this.internalGraphicsLayer), hasM: false, elevationInfo: this.elevationInfo, snappingManager: this.snappingManager, snappingVisualizer: new _$3(), segmentLabels: t2 ? new a$6() : null, labelOptions: this.labelOptions, tooltipOptions: this.tooltipOptions, isDraped: r$6(this._createGraphicState) ? this._createGraphicState.isDraped : u$a(this.hasZ, this.elevationInfo) === "on-the-ground" });
  }
  onActiveVertexChanged(e2) {
    const { view: t2 } = this;
    return r$6(this._activeVertexVisualElement) ? (this._activeVertexVisualElement.vertices = [e2], this._updateVerticalLineVisualElement(e2), null) : (this._activeVertexVisualElement = new _$2({ view: t2, spatialReference: t2.spatialReference, vertices: [e2], elevationInfo: this.internalGraphicsLayer.elevationInfo, renderOccluded: y$4.reshapeManipulators.vertex.renderOccluded, attached: false }), this._activeVertexVisualElement.color = y$4.colorToVec4(y$4.reshapeManipulators.selected.color), this._activeVertexVisualElement.attached = true, this._verticalLineVisualElement = new G$5({ view: t2, extensionType: y$4.visualElements.zVerticalLine.extensionType, innerWidth: 1, attached: false, writeDepthEnabled: false, renderOccluded: o$c.OccludeAndTransparent }), y$4.visualElements.zVerticalLine.apply(this._verticalLineVisualElement), n$8(() => {
      this._activeVertexVisualElement = s$c(this._activeVertexVisualElement), this._verticalLineVisualElement = s$c(this._verticalLineVisualElement);
    }));
  }
  _updateVerticalLineVisualElement(e2) {
    const t2 = this._verticalLineVisualElement;
    if (t$7(t2))
      return;
    const { renderCoordsHelper: i2, spatialReference: s2, elevationProvider: r2 } = this.view;
    o$9(M$6, e2[0], e2[1], e2[2]), b$2.setFromElevationInfo(this.elevationInfo), M$6[2] = m$b(M$6, r2, b$2, i2);
    i2.toRenderCoords(M$6, s2, M$6) ? (t2.setStartEndFromWorldDownAtLocation(M$6), t2.attached = true) : t2.attached = false;
  }
  onOutlineChanged(e2) {
    if (r$6(this._outlineVisualElement))
      return this._outlineVisualElement.geometry = e2, null;
    const t2 = this.internalGraphicsLayer.elevationInfo;
    return this._outlineVisualElement = new S$3({ view: this.view, geometry: e2, elevationInfo: t2, isDraped: r$6(this._createGraphicState) ? this._createGraphicState.isDraped : u$a(this.hasZ, t2) === "on-the-ground", attached: false }), y$4.visualElements.lineGraphics.outline.apply(this._outlineVisualElement), y$4.visualElements.lineGraphics.shadowStyle.apply(this._outlineVisualElement), this._outlineVisualElement.attached = true, this._outlineVisualElement.laserlineEnabled = true, n$8(() => {
      this._outlineVisualElement = s$c(this._outlineVisualElement);
    });
  }
  onRegularVerticesChanged(e2) {
    return r$6(this._verticesVisualElement) ? (this._verticesVisualElement.vertices = e2, null) : (this._verticesVisualElement = new _$2({ view: this.view, spatialReference: this.view.spatialReference, vertices: e2, elevationInfo: this.internalGraphicsLayer.elevationInfo, renderOccluded: y$4.reshapeManipulators.vertex.renderOccluded, attached: false }), this._verticesVisualElement.attached = true, n$8(() => {
      this._verticesVisualElement = s$c(this._verticesVisualElement);
    }));
  }
};
e$4([y$6({ constructOnly: true })], T$4.prototype, "elevationInfo", void 0), e$4([y$6({ constructOnly: true })], T$4.prototype, "geometryType", void 0), e$4([y$6()], T$4.prototype, "type", void 0), e$4([y$6({ constructOnly: true })], T$4.prototype, "view", void 0), T$4 = e$4([n$7("esri.views.3d.interactive.editingTools.draw.DrawGraphicTool3D")], T$4);
const b$2 = new h$d(), M$6 = n$a();
function s$3(e2, n2, o2) {
  return u$3(e2, e2.screenToRender(n2, p$e(c$6.get())), o2);
}
function u$3(t2, c2, s2) {
  const u2 = p$e(a$h(c$6.get(), c2));
  if (u2[2] = 0, !t2.unprojectFromRenderScreen(u2, s2.origin))
    return null;
  const m2 = p$e(a$h(c$6.get(), c2));
  m2[2] = 1;
  const g2 = t2.unprojectFromRenderScreen(m2, c$6.get());
  return t$7(g2) ? null : (e$a(s2.direction, g2, s2.origin), s2);
}
class ie {
  constructor(e2) {
    this._camera = new J$3(), this._elevation = { offset: 0, override: null }, this.collisionType = { type: "point" }, this.collisionPriority = 0, this._renderObjects = [], this.autoScaleRenderObjects = true, this._available = true, this._noDisplayCount = 0, this._radius = 10, this._worldSized = false, this.focusMultiplier = 2, this.touchMultiplier = 2.5, this.worldOriented = false, this._modelTransform = e$8(), this._worldFrame = null, this._renderLocation = n$a(), this._renderLocationDirty = true, this._location = new w$c({ x: 0, y: 0, z: 0 }), this._elevationAlignedLocation = new w$c(), this._elevationAlignedLocationDirty = true, this.interactive = true, this.selectable = false, this.grabbable = true, this.cursor = null, this.grabCursor = null, this._grabbing = false, this.dragging = false, this._hovering = false, this._selected = false, this._state = u$b.None, this._focused = false, this.events = new n$f.EventEmitter(), this._screenLocation = { screenPointArray: i$6(), renderScreenPointArray: x$c(), pixelSize: 0 }, this._screenLocationDirty = true, this._applyObjectTransform = null, this._engineResourcesAddedToStage = false, this._engineResources = null, this._attached = false, this._engineLayer = null, this._materialIdReferences = null, this._location.spatialReference = e2.view.spatialReference;
    for (const t2 in e2)
      this[t2] = e2[t2];
    this.view.state && this.view.state.camera && this._camera.copyFrom(this.view.state.camera);
  }
  destroy() {
    this._removeResourcesFromStage(), this._engineResources = null, this.view = null, this._camera = null;
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this._elevationAlignedLocationDirty = true, this._renderLocationDirty = true, this._updateEngineObject();
  }
  get renderObjects() {
    return this._renderObjects;
  }
  set renderObjects(e2) {
    this._removeResourcesFromStage(), this._engineResources = null, this._renderObjects = e2.slice(), this._updateEngineObject();
  }
  set available(e2) {
    e2 !== this._available && (this._available = e2, this._updateEngineObject());
  }
  get available() {
    return this._available;
  }
  disableDisplay() {
    return this._noDisplayCount++, this._noDisplayCount === 1 && this._updateEngineObject(), { remove: h$h(() => {
      this._noDisplayCount--, this._noDisplayCount === 0 && this._updateEngineObject();
    }) };
  }
  set radius(e2) {
    e2 !== this._radius && (this._radius = e2, this._updateEngineObject());
  }
  get radius() {
    return this._radius;
  }
  set worldSized(e2) {
    e2 !== this._worldSized && (this._worldSized = e2, this._updateEngineObject());
  }
  get worldSized() {
    return this._worldSized;
  }
  get modelTransform() {
    return this._modelTransform;
  }
  set modelTransform(e2) {
    se$1(e2) && (this._screenLocationDirty = true), n$e(this._modelTransform, e2), this._updateEngineObject();
  }
  get renderLocation() {
    return this._renderLocationDirty && (this._renderLocationDirty = false, this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation, this._renderLocation), this.worldOriented ? (this._worldFrame || (this._worldFrame = e$8()), oe$1(this.view, this._renderLocation, this._worldFrame)) : this._worldFrame && (this._worldFrame = null)), this._renderLocation;
  }
  set renderLocation(e2) {
    this.view.renderCoordsHelper.fromRenderCoords(e2, this._location), this.elevationAlignedLocation = this._location;
  }
  get location() {
    return this._location;
  }
  set location(e2) {
    k$5(e2, this._location), this._renderLocationDirty = true, this._screenLocationDirty = true, this._elevationAlignedLocationDirty = true, this._updateEngineObject(), this.events.emit("location-update", { location: this._location });
  }
  get elevationAlignedLocation() {
    return this._elevationAlignedLocationDirty ? (this._evaluateElevationAlignment(), this._updateElevationAlignedLocation(), this._elevationAlignedLocation) : this._elevationAlignedLocation;
  }
  set elevationAlignedLocation(e2) {
    k$5(e2, this._location), this._evaluateElevationAlignment(), this._location.z -= this._elevation.offset, this._updateElevationAlignedLocation(), this._updateEngineObject(), this.events.emit("location-update", { location: this._location });
  }
  _updateElevationAlignedLocation() {
    this._elevationAlignedLocation.x = this.location.x, this._elevationAlignedLocation.y = this.location.y;
    const e2 = r$6(this._elevation.override) ? this._elevation.override : this.location.z || 0;
    this._elevationAlignedLocation.z = e2 + this._elevation.offset, this._elevationAlignedLocation.spatialReference = Z$1(this.location.spatialReference), this._renderLocationDirty = true, this._screenLocationDirty = true, this._elevationAlignedLocationDirty = false;
  }
  grabbableForEvent() {
    return true;
  }
  get grabbing() {
    return this._grabbing;
  }
  set grabbing(e2) {
    e2 !== this._grabbing && (this._grabbing = e2, this._setFocused(this._hovering || this._grabbing), this._updateEngineObject());
  }
  get hovering() {
    return this._hovering;
  }
  set hovering(e2) {
    e2 !== this._hovering && (this._hovering = e2, this._setFocused(this._hovering || this._grabbing), this._updateEngineObject());
  }
  get selected() {
    return this._selected;
  }
  set selected(e2) {
    e2 !== this._selected && (this._selected = e2, this._updateEngineObject(), this.events.emit("select-changed", { action: e2 ? "select" : "deselect" }));
  }
  get state() {
    return this._state;
  }
  set state(e2) {
    e2 !== this._state && (this._state = e2, this._updateEngineObject());
  }
  updateStateEnabled(e2, t2) {
    t2 ? this.state |= e2 : this.state &= ~e2;
  }
  _setFocused(e2) {
    e2 !== this._focused && (this._focused = e2, this.events.emit("focus-changed", { action: e2 === true ? "focus" : "unfocus" }));
  }
  get focused() {
    return this._focused;
  }
  get screenLocation() {
    return this._ensureScreenLocation(), this._screenLocation;
  }
  _ensureScreenLocation() {
    if (!this._screenLocationDirty)
      return;
    this._screenLocation.pixelSize = this._camera.computeScreenPixelSizeAt(this.renderLocation), this._screenLocationDirty = false;
    let e2;
    if (se$1(this._modelTransform)) {
      const t2 = this._calculateModelTransformOffset(pe$1);
      e2 = u$7(t2, t2, this.renderLocation);
    } else
      e2 = this.renderLocation;
    this._camera.projectToRenderScreen(e2, this._screenLocation.renderScreenPointArray), this._camera.renderToScreen(this._screenLocation.renderScreenPointArray, this._screenLocation.screenPointArray);
  }
  get applyObjectTransform() {
    return this._applyObjectTransform;
  }
  set applyObjectTransform(e2) {
    this._applyObjectTransform = e2, this._screenLocationDirty = true, this._updateEngineObject();
  }
  get attached() {
    return this._attached;
  }
  intersectionDistance(t2, i2) {
    var _a;
    if (!this.available)
      return null;
    const s2 = d$e(t2, re$1), r2 = this._getCollisionRadius(i2), n2 = -1 * this.collisionPriority;
    switch (this.collisionType.type) {
      case "point":
        if (b$7(this.screenLocation.screenPointArray, s2) < r2 * r2)
          return this.screenLocation.renderScreenPointArray[2] + n2;
        break;
      case "line": {
        const e2 = this.collisionType.paths, t3 = this._getWorldToScreenObjectScale(), i3 = this._calculateObjectTransform(t3, he), a2 = r2 * this.screenLocation.pixelSize, c2 = s$3(this._camera, s2, ae);
        if (t$7(c2))
          return null;
        for (const s3 of e2) {
          if (s3.length === 0)
            continue;
          const e3 = O$4(_e$1, s3[0], i3);
          for (let t4 = 1; t4 < s3.length; t4++) {
            const o2 = O$4(ue$1, s3[t4], i3), r3 = B$4(b$8(e3, o2, ne$1), c2);
            if (r3 != null && r3 < a2 * a2) {
              const t5 = u$7(c$6.get(), e3, o2);
              g$6(t5, t5, 0.5);
              const i4 = y$9(c$6.get());
              return this._camera.projectToRenderScreen(t5, i4), i4[2] + n2;
            }
            r$9(e3, o2);
          }
        }
        break;
      }
      case "disc": {
        const e2 = this.collisionType.direction, t3 = (_a = this.collisionType.offset) != null ? _a : f$8, i3 = this._getWorldToScreenObjectScale(), a2 = this._calculateObjectTransform(i3, he), c2 = r2 * this.screenLocation.pixelSize, l2 = s$3(this._camera, s2, ae);
        if (t$7(l2))
          return null;
        const h2 = a$i(ce, a2), d2 = S$9(me$1, e2, h2), u2 = O$4(fe, t3, a2);
        _$7(u2, d2, de$1);
        const g2 = ge;
        if (q$6(de$1, l2, g2) && p$f(g2, u2) < c2 * c2)
          return this.screenLocation.renderScreenPointArray[2] + n2;
        break;
      }
      case "ribbon": {
        const { paths: e2, direction: t3 } = this.collisionType, i3 = this._getWorldToScreenObjectScale(), a2 = this._calculateObjectTransform(i3, he), c2 = r2 * this._camera.computeScreenPixelSizeAt(this.renderLocation), l2 = s$3(this._camera, s2, ae);
        if (t$7(l2))
          return null;
        const d2 = a$i(ce, a2), u2 = S$9(me$1, t3, d2), g2 = this._calculateModelTransformPosition(fe);
        _$7(g2, u2, de$1);
        const m2 = ge;
        if (!q$6(de$1, l2, m2))
          break;
        for (const s3 of e2) {
          if (s3.length === 0)
            continue;
          const e3 = O$4(_e$1, s3[0], a2);
          for (let t4 = 1; t4 < s3.length; t4++) {
            const i4 = O$4(ue$1, s3[t4], a2), o2 = M$a(b$8(e3, i4, ne$1), m2);
            if (o2 != null && o2 < c2 * c2) {
              const t5 = u$7(c$6.get(), e3, i4);
              g$6(t5, t5, 0.5);
              const s4 = y$9(c$6.get());
              return this._camera.projectToRenderScreen(t5, s4), s4[2] + n2;
            }
            r$9(e3, i4);
          }
        }
        break;
      }
      default:
        n$i(this.collisionType);
    }
    return null;
  }
  attach(e2 = { manipulator3D: {} }) {
    var _a;
    if (!this.view._stage)
      return;
    const t2 = e2.manipulator3D;
    if (t$7(t2.engineLayerId)) {
      const e3 = new l$9({ isPickable: false, updatePolicy: i$7.SYNC });
      this.view._stage.add(e3), t2.engineLayerId = e3.id, this._engineLayer = e3;
    } else
      ((_a = this.view._stage) == null ? void 0 : _a.getObject) && (this._engineLayer = this.view._stage.getObject(t2.engineLayerId));
    t2.engineLayerReferences = (t2.engineLayerReferences || 0) + 1, this._materialIdReferences = t2.materialIdReferences, t$7(this._materialIdReferences) && (this._materialIdReferences = new Map(), t2.materialIdReferences = this._materialIdReferences), this._camera.copyFrom(this.view.state.camera), this._attached = true, this._updateEngineObject(), An(this._location.spatialReference, this.view.spatialReference) || (this.location = new w$c({ x: 0, y: 0, z: 0, spatialReference: this.view.spatialReference }));
  }
  detach(e2 = { manipulator3D: {} }) {
    const t2 = e2.manipulator3D;
    t2.engineLayerReferences--;
    const i2 = t2.engineLayerReferences === 0;
    i2 && (t2.engineLayerId = null), this._removeResourcesFromStage(i2), this._engineResources = null, this._engineLayer = null, this._materialIdReferences = null, this._attached = false;
  }
  onViewChange() {
    this._camera.copyFrom(this.view.state.camera), this._screenLocationDirty = true, this._updateEngineObject();
  }
  onElevationChange(e2) {
    pn(this.location, be$1, e2.spatialReference), F$6(e2.extent, be$1) && (this.location = this._location);
  }
  _evaluateElevationAlignment(e2 = this.location) {
    if (t$7(this.elevationInfo))
      return false;
    let t2 = null, i2 = 0;
    const s2 = i$8(this.elevationInfo.offset, 0);
    switch (this.elevationInfo.mode) {
      case "on-the-ground":
        t2 = i$8(i$d(this.view.elevationProvider, e2, "ground"), 0);
        break;
      case "relative-to-ground":
        i2 = i$8(i$d(this.view.elevationProvider, e2, "ground"), 0) + s2;
        break;
      case "relative-to-scene":
        i2 = i$8(i$d(this.view.elevationProvider, e2, "scene"), 0) + s2;
        break;
      case "absolute-height":
        i2 = s2;
    }
    return (i2 !== this._elevation.offset || t2 !== this._elevation.override) && (this._elevation.offset = i2, this._elevation.override = t2, true);
  }
  _updateEngineObject() {
    if (!this._attached)
      return;
    if (!this.available)
      return void this._removeResourcesFromStage();
    const e2 = this._getWorldToScreenObjectScale(), t2 = he;
    if (this.autoScaleRenderObjects === true) {
      const i3 = this._getFocusedSize(this._radius, this.focused) * e2;
      this._calculateObjectTransform(i3, t2);
    } else
      this._calculateObjectTransform(e2, t2);
    const { objectsByState: i2 } = this._ensureEngineResources(), s2 = (this.focused ? t$h.Focused : t$h.Unfocused) | (this.selected ? t$h.Selected : t$h.Unselected), o2 = this._noDisplayCount > 0;
    for (const { stateMask: r2, objects: n2 } of i2) {
      if (o2) {
        for (const e4 of n2)
          e4.setVisible(false);
        continue;
      }
      const e3 = (r2 & t$h.All) !== t$h.None, i3 = (r2 & u$b.All) !== u$b.None, a2 = !e3 || (s2 & r2) == (r2 & t$h.All), c2 = !i3 || (this.state & r2) == (r2 & u$b.All);
      if (a2 && c2)
        for (const s3 of n2)
          s3.setVisible(true), s3.transformation = t2;
      else
        for (const t3 of n2)
          t3.setVisible(false);
    }
  }
  _ensureEngineResources() {
    if (t$7(this._engineResources)) {
      const e2 = e$d(this._engineLayer), t2 = [], i2 = new Set();
      this.renderObjects.forEach(({ material: e3 }) => {
        i2.has(e3) || (t2.push(e3), i2.add(e3));
      });
      const s2 = (e3, t3) => {
        const { geometry: i3, material: s3, transform: o3 } = t3;
        Array.isArray(i3) ? i3.forEach((t4) => e3.addGeometry(t4, s3, o3)) : e3.addGeometry(i3, s3, o3);
      }, o2 = new Map();
      this._renderObjects.forEach((e3) => {
        const t3 = new x$8({ castShadow: false });
        s2(t3, e3);
        const i3 = e3.stateMask || 0, r3 = o2.get(i3) || [];
        r3.push(t3), o2.set(i3, r3);
      });
      const r2 = [];
      o2.forEach((e3, t3) => r2.push({ stateMask: t3, objects: e3 })), this._engineResources = { objectsByState: r2, layer: e2, materials: t2 };
    }
    return this._addResourcesToStage(), this._engineResources;
  }
  _addResourcesToStage() {
    if (this._engineResourcesAddedToStage || t$7(this._engineResources))
      return;
    const { objectsByState: e2, layer: t2, materials: i2 } = this._engineResources;
    i2.forEach((e3) => {
      const t3 = e$d(this._materialIdReferences), i3 = t3.get(e3.id) || 0;
      i3 === 0 && this.view._stage.add(e3), t3.set(e3.id, i3 + 1);
    }), e2.forEach(({ objects: e3 }) => {
      t2.addMany(e3), this.view._stage.addMany(e3);
    }), this._engineResourcesAddedToStage = true;
  }
  _removeResourcesFromStage(e2 = false) {
    if (!this._engineResourcesAddedToStage || t$7(this._engineResources) || !this.view._stage)
      return;
    const { objectsByState: t2, layer: i2, materials: s2 } = this._engineResources;
    t2.forEach(({ objects: e3 }) => {
      i2.removeMany(e3), this.view._stage.removeMany(e3);
    }), s2.forEach((e3) => {
      const t3 = e$d(this._materialIdReferences), i3 = t3.get(e3.id);
      i3 === 1 ? (this.view._stage.remove(e3), t3.delete(e3.id)) : t3.set(e3.id, i3 - 1);
    }), e2 && this.view._stage.remove(i2), this._engineResourcesAddedToStage = false;
  }
  _getCollisionRadius(e2) {
    return this._getFocusedSize(this.radius, true) * (e2 === "touch" ? this.touchMultiplier : 1);
  }
  _getFocusedSize(e2, t2) {
    return e2 * (t2 ? this.focusMultiplier : 1);
  }
  _getWorldToScreenObjectScale() {
    return this._worldSized ? 1 : this.screenLocation.pixelSize;
  }
  _calculateModelTransformPosition(e2) {
    const t2 = this._getWorldToScreenObjectScale(), i2 = this._calculateObjectTransform(t2, le);
    return o$9(e2, i2[12], i2[13], i2[14]);
  }
  _calculateModelTransformOffset(e2) {
    const t2 = this._calculateModelTransformPosition(e2);
    return e$a(e2, t2, this.renderLocation);
  }
  _calculateObjectTransform(e2, t2) {
    return s$d(t2, e2, 0, 0, 0, 0, e2, 0, 0, 0, 0, e2, 0, 0, 0, 0, 1), this._worldFrame && u$c(t2, t2, this._worldFrame), u$c(t2, t2, this._modelTransform), t2[12] += this.renderLocation[0], t2[13] += this.renderLocation[1], t2[14] += this.renderLocation[2], t2[15] = 1, r$6(this._applyObjectTransform) && this._applyObjectTransform(t2), t2;
  }
  get test() {
    let e2 = false;
    if (r$6(this._engineResources))
      for (const t2 in this._engineResources.objectsByState) {
        const i2 = this._engineResources.objectsByState[t2];
        for (const t3 of i2.objects)
          if (t3.isVisible) {
            e2 = true;
            break;
          }
        if (e2)
          break;
      }
    return { areAnyResourcesVisible: e2 };
  }
}
function se$1(e2) {
  return e2[12] !== 0 || e2[13] !== 0 || e2[14] !== 0;
}
function oe$1(e2, t2, s2) {
  switch (e2.viewingMode) {
    case "local":
      return r$i(s2), true;
    case "global": {
      const o2 = u$d(e2.renderCoordsHelper.spatialReference);
      return pe$2(t2, 0, _e$1, 0, o2.radius), Xn(m$9(_e$1[0]), m$9(_e$1[1]), s2), true;
    }
  }
}
const re$1 = i$6(), ne$1 = v$7(), ae = d$a(), ce = e$j(), le = e$8(), he = e$8(), de$1 = p$8(), _e$1 = n$a(), ue$1 = n$a(), ge = n$a(), me$1 = n$a(), fe = n$a(), pe$1 = n$a(), be$1 = new w$c({ x: 0, y: 0, z: 0, spatialReference: null });
function f$2(f2) {
  const w2 = new o$7(), { vertex: h2, fragment: b2 } = w2;
  return v$a(h2, f2), w2.include(r$g, f2), w2.attributes.add(O$3.POSITION, "vec3"), w2.attributes.add(O$3.UV0, "vec2"), w2.varyings.add("vpos", "vec3"), f2.hasMultipassTerrain && w2.varyings.add("depth", "float"), h2.uniforms.add(new e$6("textureCoordinateScaleFactor", (o2) => r$6(o2.texture) && r$6(o2.texture.descriptor.textureCoordinateScaleFactor) ? o2.texture.descriptor.textureCoordinateScaleFactor : i$e)), h2.code.add(n$c`
    void main(void) {
      vpos = position;
      ${f2.hasMultipassTerrain ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `), w2.include(u$9, f2), w2.include(n$g, f2), b2.uniforms.add([new f$7("tex", (e2) => e2.texture), new o$6("opacity", (e2) => e2.opacity)]), w2.varyings.add("vTexCoord", "vec2"), f2.output === h$e.Alpha ? b2.code.add(n$c`
    void main() {
      discardBySlice(vpos);
      ${f2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${n$c.float(o$h)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `) : (b2.include(e$h), b2.code.add(n$c`
    void main() {
      discardBySlice(vpos);
      ${f2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${n$c.float(o$h)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${f2.transparencyPassType === o$f.Color ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
    }
    `)), w2;
}
const w$3 = Object.freeze(Object.defineProperty({ __proto__: null, build: f$2 }, Symbol.toStringTag, { value: "Module" }));
class _$1 extends e$9 {
  initializeProgram(e2) {
    return new o$8(e2.rctx, _$1.shader.get().build(this.configuration), E$6);
  }
  _setPipelineState(e2, r2) {
    const i2 = this.configuration, s2 = e2 === o$f.NONE, o2 = e2 === o$f.FrontFace;
    return W$4({ blending: i2.output !== h$e.Color && i2.output !== h$e.Alpha || !i2.transparent ? null : s2 ? C$5 : A$e(e2), culling: h$f(i2.cullFace), depthTest: { func: l$b(e2) }, depthWrite: s2 ? i2.writeDepth && a$g : E$a(e2), colorWrite: _$6, stencilWrite: i2.hasOccludees ? e$k : null, stencilTest: i2.hasOccludees ? r2 ? o$i : f$c : null, polygonOffset: s2 || o2 ? null : a$j(i2.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._setPipelineState(this.configuration.transparencyPassType, true), this._setPipelineState(this.configuration.transparencyPassType, false);
  }
  getPipelineState(e2, t2) {
    return t2 ? this._occludeePipelineState : super.getPipelineState(e2, t2);
  }
}
_$1.shader = new t$8(w$3, () => import("./ImageMaterial.glsl.js"));
const C$5 = s$5(R$4.ONE, R$4.ONE_MINUS_SRC_ALPHA);
class w$2 extends s$a {
  constructor() {
    super(...arguments), this.output = h$e.Color, this.cullFace = n$h.None, this.hasSlicePlane = false, this.transparent = false, this.enableOffset = true, this.writeDepth = true, this.hasOccludees = false, this.transparencyPassType = o$f.NONE, this.hasMultipassTerrain = false, this.cullAboveGround = false;
  }
}
e$4([e$b({ count: h$e.COUNT })], w$2.prototype, "output", void 0), e$4([e$b({ count: n$h.COUNT })], w$2.prototype, "cullFace", void 0), e$4([e$b()], w$2.prototype, "hasSlicePlane", void 0), e$4([e$b()], w$2.prototype, "transparent", void 0), e$4([e$b()], w$2.prototype, "enableOffset", void 0), e$4([e$b()], w$2.prototype, "writeDepth", void 0), e$4([e$b()], w$2.prototype, "hasOccludees", void 0), e$4([e$b({ count: o$f.COUNT })], w$2.prototype, "transparencyPassType", void 0), e$4([e$b()], w$2.prototype, "hasMultipassTerrain", void 0), e$4([e$b()], w$2.prototype, "cullAboveGround", void 0);
class p$3 extends d$d {
  constructor(e2) {
    super(e2, new d$4()), this.supportsEdges = true, this._configuration = new w$2();
  }
  getConfiguration(e2, t2) {
    return this._configuration.output = e2, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.enableOffset = t2.camera.relativeElevation < S$a, this._configuration.hasMultipassTerrain = t2.multipassTerrain.enabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e2, t2, r2, a2, s2, i2, n2) {
    x$b(e2, t2, a2, s2, i2, void 0, n2);
  }
  requiresSlot(t2, r2) {
    if (r2 === h$e.Color || r2 === h$e.Alpha || r2 === h$e.Highlight) {
      if (t2 === E$7.DRAPED_MATERIAL)
        return true;
      if (r2 === h$e.Highlight)
        return t2 === E$7.OPAQUE_MATERIAL;
      return t2 === (this.parameters.transparent ? this.parameters.writeDepth ? E$7.TRANSPARENT_MATERIAL : E$7.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : E$7.OPAQUE_MATERIAL);
    }
    return false;
  }
  createGLMaterial(e2) {
    return new m$3(e2);
  }
  createBufferWriter() {
    return new v$b(f$d);
  }
}
class m$3 extends h$i {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, e2), e2.material.parameters));
  }
  _updateParameters(e2) {
    return this.updateTexture(this._material.parameters.textureId), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(_$1, e2);
  }
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this._material.parameters.hasOccludees && (this._material.setParameters({ hasOccludees: e2.hasOccludees }), this._updateParameters(e2));
  }
  beginSlot(t2) {
    return this._output !== h$e.Color && this._output !== h$e.Alpha || this._updateOccludeeState(t2), this._updateParameters(t2);
  }
}
class d$4 extends h$g {
  constructor() {
    super(...arguments), this.transparent = false, this.writeDepth = true, this.hasSlicePlane = false, this.cullFace = n$h.None, this.hasOccludees = false, this.opacity = 1, this.textureId = null, this.initTextureTransparent = true;
  }
}
function A$6(e2, t2 = o$c.OccludeAndTransparent, r2 = true) {
  const a2 = r$c(e2[0], e2[1], e2[2], e2.length > 3 ? e2[3] : 1), n2 = e2[3] < 1;
  return r2 ? new v$2({ color: a2, transparent: n2, writeDepth: true, cullFace: n$h.Back, renderOccluded: t2 }) : new m$c({ color: a2, transparent: n2, writeDepth: true, cullFace: n$h.Back, renderOccluded: t2 });
}
function I$2(e2, t2 = o$c.OccludeAndTransparent) {
  const r2 = r$c(e2[0], e2[1], e2[2], e2.length === 4 ? e2[3] : 1);
  return new m$c({ color: r2, transparent: true, writeDepth: true, cullFace: n$h.Front, renderOccluded: t2 });
}
const L$3 = Object.freeze({ calloutLength: 40, calloutWidth: 1, discRadius: 27, focusMultiplier: 1.1, calloutColor: r$a(1, 0.5, 0) });
function R$2(e2, t2) {
  const r2 = new ie({ view: e2, autoScaleRenderObjects: false, collisionPriority: 1, metadata: t2.metadata });
  return T$3(r2, t2), r2;
}
function T$3(e2, t2) {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  const r2 = (_b = t2.material) != null ? _b : new p$3({ transparent: true, writeDepth: false, textureId: (_a = t2.texture) == null ? void 0 : _a.id, renderOccluded: o$c.Opaque }), a2 = (_c = t2.focusMultiplier) != null ? _c : L$3.focusMultiplier, n2 = (_d = t2.calloutLength) != null ? _d : L$3.calloutLength, o2 = L$3.discRadius * ((_e2 = t2.discScale) != null ? _e2 : 1), i2 = o2 * a2, c2 = (e3) => {
    const t3 = [0, 1, 2, 2, 3, 0];
    return new d$b([[O$3.POSITION, { size: 3, data: [n2 - e3, -e3, 0, n2 + e3, -e3, 0, n2 + e3, e3, 0, n2 - e3, e3, 0], exclusive: true }], [O$3.UV0, { size: 2, data: [0, 0, 1, 0, 1, 1, 0, 1] }]], [[O$3.POSITION, t3], [O$3.UV0, t3]]);
  }, l2 = q$4([[0, 0, 0], [n2 - o2, 0, 0]]), m2 = q$4([[0, 0, 0], [n2 - i2, 0, 0]]), u2 = L$3.calloutColor, d2 = (_f = t2.calloutWidth) != null ? _f : L$3.calloutWidth, p2 = new (d2 > 1 ? H$3 : F$7)({ width: d2, color: r$c(u2[0], u2[1], u2[2], (_g = t2.calloutOpacity) != null ? _g : 1), renderOccluded: o$c.OccludeAndTransparent }), f2 = (_h = t2.customStateMask) != null ? _h : u$b.None;
  e2.collisionType = { type: "disc", direction: [0, 0, 1], offset: [n2, 0, 0] }, e2.focusMultiplier = a2, e2.metadata = t2.metadata, e2.radius = o2, e2.renderObjects = [{ geometry: c2(o2), material: r2, stateMask: t$h.Unfocused | f2 }, { geometry: l2, material: p2, stateMask: t$h.Unfocused | f2 }, { geometry: c2(i2), material: r2, stateMask: t$h.Focused | f2 }, { geometry: m2, material: p2, stateMask: t$h.Focused | f2 }];
}
const x$2 = Object.freeze({ autoScaleRenderObjects: false, worldSized: true });
function z$2(e2, t2, i2, c2) {
  const s2 = e$a(c$6.get(), e2, i2), u2 = D$4(s2, _$8(c$6.get(), c2, s2), i2, f$e.get());
  h$j(u2, u2);
  const d2 = O$4(c$6.get(), t2, u2);
  return Math.atan2(d2[1], d2[0]);
}
function D$4(e2, t2, r2, a2) {
  const o2 = z$6(c$6.get(), e2), c2 = z$6(c$6.get(), t2), s2 = _$8(c$6.get(), o2, c2);
  return a2[0] = o2[0], a2[1] = o2[1], a2[2] = o2[2], a2[3] = 0, a2[4] = c2[0], a2[5] = c2[1], a2[6] = c2[2], a2[7] = 0, a2[8] = s2[0], a2[9] = s2[1], a2[10] = s2[2], a2[11] = 0, a2[12] = r2[0], a2[13] = r2[1], a2[14] = r2[2], a2[15] = 1, a2;
}
function N$3(t2, r2) {
  const a2 = t2.getViewForGraphic(r2);
  return r$6(a2) && "computeAttachmentOrigin" in a2 ? a2.computeAttachmentOrigin(r2, t2.spatialReference) : null;
}
function C$4(t2, r2, a2) {
  const n2 = N$3(t2, a2);
  r$6(n2) ? r2.elevationAlignedLocation = n2 : V$2(r2, a2.geometry);
}
function V$2(e2, r2) {
  if (t$7(r2))
    return;
  const a2 = r2.type === "mesh" ? r2.anchor : A$f(r2);
  t$7(a2) || (e2.location = p$g(a2));
}
function t$3(o2, t2 = f$f(o2)) {
  return t2.mode !== "on-the-ground" && !(t$7(o2.geometry) || !o2.geometry.hasZ);
}
var N$2;
!function(N2) {
  N2[N2.NONE = 0] = "NONE", N2[N2.ANY = 1] = "ANY", N2[N2.Z = 2] = "Z", N2[N2.XY = 4] = "XY";
}(N$2 || (N$2 = {}));
var A$5;
!function(A2) {
  A2[A2.TRANSLATE_Z = 0] = "TRANSLATE_Z", A2[A2.TRANSLATE_XY = 1] = "TRANSLATE_XY", A2[A2.SCALE = 2] = "SCALE", A2[A2.ROTATE = 3] = "ROTATE", A2[A2.SCALE_ROTATE = 4] = "SCALE_ROTATE";
}(A$5 || (A$5 = {}));
class a$4 {
  constructor() {
    this.grabbingState = N$2.NONE, this.zManipulator = null, this.firstSelected = null, this.numSelected = 0, this.firstGrabbedXY = null;
  }
  update(a2) {
    this.grabbingState = N$2.NONE, this.zManipulator = null, this.numSelected = 0, this.firstSelected = null, this.firstGrabbedXY = null, a2.forEachManipulator((a3, s2) => {
      if (s2 === A$5.TRANSLATE_Z && (this.zManipulator = a3), a3 instanceof ie && (a3.selected && (this.numSelected === 0 && (this.firstSelected = a3), this.numSelected++), t$7(this.firstGrabbedXY) && a3.grabbing && s2 === A$5.TRANSLATE_XY && (this.firstGrabbedXY = a3)), a3.grabbing)
        switch (this.grabbingState |= N$2.ANY, s2) {
          case A$5.TRANSLATE_Z:
            this.grabbingState |= N$2.Z;
            break;
          case A$5.TRANSLATE_XY:
            this.grabbingState |= N$2.XY;
        }
    });
  }
}
function b$1(t2) {
  const { view: a2, graphic: n2 } = t2, i2 = new e$1({ graphic: n2 }), l2 = j$2(t2, i2), r2 = [l2, S$2(t2, l2.visualElement, i2), a2.maskOccludee(n2), a2.trackGraphicState(i2)];
  return { visualElement: l2.visualElement, remove: () => r$h(r2).remove() };
}
function j$2(a2, n2) {
  const { view: i2, graphic: r2 } = a2, o2 = new S$3({ view: i2, geometry: L$2(r2) ? r2.geometry : null, elevationInfo: f$f(r2), attached: false });
  y$4.visualElements.lineGraphics.shadowStyle.apply(o2);
  const s2 = () => {
    o2.attached = n2.displaying;
  };
  y$4.visualElements.lineGraphics.outline.apply(o2);
  const p2 = [l$5(() => n2.displaying, s2), l$5(() => n2.isDraped, (e2) => {
    o2.isDraped = e2;
  }), n2.on("changed", () => o2.geometry = L$2(r2) ? r2.geometry : null), t$e(o2)];
  return s2(), { visualElement: o2, remove: () => r$h(p2).remove() };
}
function S$2(i2, r2, o2) {
  const { graphic: s2, view: p2 } = i2, m2 = [], d2 = f$f(s2), y2 = d2.mode === "on-the-ground" || !d2.offset && d2.mode !== "absolute-height", E2 = new a$4(), b2 = new G$5({ view: p2, extensionType: y$4.visualElements.zVerticalLine.extensionType, innerWidth: 1, attached: false, writeDepthEnabled: false, renderOccluded: o$c.OccludeAndTransparent });
  y$4.visualElements.pointGraphics.shadowStyle.apply(b2);
  const j2 = m$9(y$4.visualElements.heightPlaneAngleCutoff), S2 = new d$6({ view: p2, attached: false, angleCutoff: j2 });
  y$4.visualElements.heightPlane.apply(S2);
  let T2 = 1, A2 = 1;
  const D2 = () => {
    if (E2.update(i2), !o2.displaying || y2 && (o2.isDraped || !L$2(s2) || !s2.geometry.hasZ))
      return r2.laserlineEnabled = false, b2.attached = false, void (S2.attached = false);
    r2.laserlineEnabled = true;
    {
      const e2 = E2.grabbingState & N$2.XY ? y$4.visualElements.laserlineAlphaMultiplier : 1;
      e2 !== T2 && (T2 = e2, y$4.visualElements.lineGraphics.shadowStyle.apply(r2, e2), y$4.visualElements.pointGraphics.shadowStyle.apply(b2, e2));
    }
    {
      const e2 = E2.grabbingState & N$2.Z ? y$4.visualElements.laserlineAlphaMultiplier : 1;
      e2 !== A2 && (A2 = e2, y$4.visualElements.heightPlane.apply(S2, e2));
    }
    M$5(b2, E2), G$4(i2, r2, S2, E2);
  };
  y$4.visualElements.zVerticalLine.apply(b2), m2.push(o2.on("changed", D2), l$5(() => o2.displaying, D2), r2.events.on("attachment-origin-changed", D2), t$e(b2), t$e(S2));
  const C2 = [], O2 = () => {
    r$h(C2).remove(), C2.length = 0, i2.forEachManipulator((e2) => C2.push(e2.events.on("grab-changed", D2))), i2.forEachManipulator((e2) => C2.push(e2.events.on("select-changed", D2))), D2();
  };
  return O2(), m2.push(i2.onManipulatorsChanged(O2), o$j(() => r$h(C2))), r$h(m2);
}
function M$5(e2, t2) {
  const a2 = t2.numSelected === 1 ? t2.firstSelected : t2.numSelected > 1 && r$6(t2.firstGrabbedXY) ? t2.firstGrabbedXY : null;
  r$6(a2) ? (e2.setStartEndFromWorldDownAtLocation(a2.renderLocation), e2.attached = true) : e2.attached = false;
}
function G$4(e2, t2, a2, n2) {
  if (n2.numSelected > 0) {
    o$9(T$2, 0, 0, 0);
    let t3 = 0;
    e2.forEachManipulator((e3, a3) => {
      a3 === A$5.TRANSLATE_XY && e3.selected && e3 instanceof ie && (u$7(T$2, T$2, e3.renderLocation), t3++);
    }), t3 > 0 ? (a2.heightManifoldTarget = g$6(T$2, T$2, 1 / t3), a2.attached = true) : a2.attached = false;
  } else {
    const n3 = t2.attachmentOrigin;
    r$6(n3) && e2.view.renderCoordsHelper.toRenderCoords(n3, T$2) ? (a2.heightManifoldTarget = T$2, a2.attached = true) : a2.attached = false;
  }
}
function L$2(e2) {
  return r$6(e2.geometry) && (e2.geometry.type === "polygon" || e2.geometry.type === "polyline");
}
const T$2 = n$a();
function M$4(t2) {
  const { view: n2, graphic: i2 } = t2, o2 = new e$1({ graphic: i2 }), a2 = [], r2 = C$3(t2, o2, a2);
  return P$3(t2, o2, a2, r2), a2.push(n2.trackGraphicState(o2)), { visualElement: r2, remove() {
    r$h(a2).remove();
  } };
}
function P$3(e2, n2, s2, p2) {
  const { view: m2, graphic: u2 } = e2, f2 = new G$5({ view: m2, extensionType: y$4.visualElements.zVerticalLine.extensionType, innerWidth: 1, attached: false, writeDepthEnabled: false, renderOccluded: o$c.OccludeAndTransparent });
  y$4.visualElements.zVerticalLine.apply(f2);
  const b2 = new d$6({ view: m2, intersectsLineInfinite: true, attached: false });
  y$4.visualElements.pointGraphics.shadowStyle.apply(b2);
  const A2 = m$9(y$4.visualElements.heightPlaneAngleCutoff), M2 = new d$6({ view: m2, attached: false, angleCutoff: A2 });
  y$4.visualElements.heightPlane.apply(M2);
  const P2 = f$f(e2.graphic), C2 = h$d.fromElevationInfo(P2), R2 = P2.mode === "on-the-ground" || !P2.offset && P2.mode !== "absolute-height", U2 = new a$4();
  let D2 = 1, I2 = 1;
  const T2 = () => {
    U2.update(e2);
    const t2 = G$3(u2), i2 = R2 && (n2.isDraped || t$7(t2) || !t2.hasZ);
    let r2 = true;
    if (!i2 && r$6(t2)) {
      const e3 = m$b(t2, m2.elevationProvider, C2, m2.renderCoordsHelper);
      o$9(V$1, t2.x, t2.y, e3), jn(V$1, t2.spatialReference, V$1, m2.renderCoordsHelper.spatialReference), f2.setStartEndFromWorldDownAtLocation(V$1), b2.intersectsWorldUpAtLocation = V$1;
    } else
      r2 = false;
    const s3 = U2.grabbingState & N$2.Z ? y$4.visualElements.laserlineAlphaMultiplier : 1;
    s3 !== D2 && (D2 = s3, y$4.visualElements.heightPlane.apply(M2, s3));
    const g2 = A$d(B$2);
    !i2 && n2.displaying && p2.calculateMapBounds(g2) && jn(Z$2(g2, V$1), m2.spatialReference, V$1, m2.renderCoordsHelper.spatialReference) ? (M2.heightManifoldTarget = V$1, M2.attached = true) : M2.attached = false;
    const y2 = U2.grabbingState & N$2.XY ? y$4.visualElements.laserlineAlphaMultiplier : 1;
    y2 !== I2 && (I2 = y2, y$4.visualElements.pointGraphics.shadowStyle.apply(b2, y2));
    const j2 = r2 && n2.displaying && !i2;
    b2.attached = j2, f2.attached = j2;
  };
  s2.push(l$5(() => [n2.displaying, n2.isDraped], T2), n2.on("changed", T2)), e2.forEachManipulator((e3) => {
    s2.push(e3.events.on("grab-changed", T2));
  }), s2.push(t$e(b2)), s2.push(t$e(f2)), s2.push(t$e(M2)), T2();
}
function C$3(e2, n2, i2) {
  const { view: o2, graphic: a2 } = e2, r2 = new S$5({ view: o2, geometry: G$3(a2), elevationInfo: f$f(a2), attached: false });
  return R$1(e2, r2, n2, i2), i2.push(t$e(r2)), r2;
}
function G$3(e2) {
  const t2 = e2.geometry;
  return t$7(t2) ? null : t2.type === "point" ? t2 : t2.type === "mesh" ? t2.anchor.clone() : null;
}
function R$1(e2, t2, n2, i2) {
  const o2 = () => t2.attached = n2.displaying;
  U$2(e2, t2, n2, i2), y$4.visualElements.pointGraphics.outline.apply(t2), i2.push(l$5(() => n2.displaying, o2, h$c));
}
function U$2(e2, t2, i2, o2) {
  const { view: r2, graphic: s2 } = e2;
  let l2 = null;
  const p2 = (e3) => {
    r$6(l2) && (l2.remove(), l2 = null), i2.isDraped && r$6(e3) && (l2 = D$3(r2, e3, () => {
      t2.geometry = e3;
    }));
  }, c2 = () => {
    const e3 = G$3(s2);
    p2(e3), t2.geometry = e3;
  };
  o2.push(i2.on("changed", c2), o$j(() => l2)), c2();
}
function D$3(e2, t2, n2) {
  const i2 = e2.elevationProvider.spatialReference;
  gn(t2, V$1, i2);
  const o2 = V$1[0], a2 = V$1[1];
  return e2.elevationProvider.on("elevation-change", (e3) => {
    w$d(e3.extent, o2, a2) && n2();
  });
}
const V$1 = n$a(), B$2 = a$f();
function i$3(i2) {
  switch (e$d(i2.graphic.geometry).type) {
    case "point":
    case "mesh":
      return M$4(i2);
    case "polygon":
    case "polyline":
      return b$1(i2);
    default:
      return null;
  }
}
const t$2 = [1, 0.5, 0], a$3 = 128, e = 70, h$3 = 80, M$3 = 0.02, c$2 = 54, o$2 = 100, I$1 = Math.ceil(e / 3 * 2), P$2 = 160, i$2 = 0.5, l$2 = 24, n$2 = 9, p$2 = P$2 + 30, r$3 = P$2 + 53, s$2 = 60, x$1 = 23, b = 5 * Math.PI / 12, d$3 = 1 * Math.PI / 3, f$1 = 10, g$3 = 0.2, j$1 = 30, k$2 = 53, m$2 = 0.2, q$3 = 0.3, u$2 = 200, v$1 = 3, w$1 = 1e6;
class t$1 {
  constructor() {
    this._available = true;
  }
  set location(a2) {
    this._forEachManipulator3D((t2) => t2.location = a2);
  }
  set elevationAlignedLocation(a2) {
    this._forEachManipulator3D((t2) => t2.elevationAlignedLocation = a2);
  }
  set elevationInfo(a2) {
    this._forEachManipulator3D((t2) => t2.elevationInfo = a2);
  }
  get renderLocation() {
    let a2;
    return this._forEachManipulator3D((t2) => {
      a2 || (a2 = t2.renderLocation);
    }), a2;
  }
  get available() {
    return this._available;
  }
  set available(a2) {
    this._available = a2, this._forEachManipulator3D((t2) => t2.available = a2);
  }
  get hovering() {
    return this.someManipulator((a2) => a2.hovering);
  }
  get grabbing() {
    return this.someManipulator((a2) => a2.grabbing);
  }
  get dragging() {
    return this.someManipulator((a2) => a2.dragging);
  }
  hasManipulator(a2) {
    return this.someManipulator((t2) => t2 === a2);
  }
  someManipulator(a2) {
    let t2 = false;
    return this.forEachManipulator((i2) => {
      !t2 && a2(i2) && (t2 = true);
    }), t2;
  }
  _forEachManipulator3D(t2) {
    this.forEachManipulator((i2, o2) => {
      i2 instanceof ie && t2(i2, o2);
    });
  }
}
function C$2(e2, r2) {
  return D$2(e2, () => r2);
}
function T$1(e2) {
  return D$2(e2, (e3) => e3.plane);
}
function D$2(t2, s2) {
  const c2 = n$a(), l2 = n$a();
  let i2 = false;
  return (a2) => {
    const u2 = s2(a2);
    if (a2.action === "start") {
      const r2 = d$e(a2.screenStart, l$c(t$i.get())), s3 = s$3(t2.state.camera, r2, L$1);
      r$6(s3) && (i2 = q$6(u2, s3, c2));
    }
    if (!i2)
      return null;
    const p2 = d$e(a2.screenEnd, l$c(t$i.get())), m2 = s$3(t2.state.camera, p2, L$1);
    return t$7(m2) ? null : q$6(u2, m2, l2) ? __spreadProps(__spreadValues({}, a2), { renderStart: c2, renderEnd: l2, plane: u2, ray: m2 }) : null;
  };
}
function M$2(t2, n2, o2, c2 = null, l2 = null) {
  let i2 = null;
  return (a2) => {
    if (a2.action === "start" && (i2 = t2.sceneIntersectionHelper.intersectElevationFromScreen(i$6(a2.screenStart.x, a2.screenStart.y), n2, o2, l2), r$6(i2) && r$6(c2) && !pn(i2, i2, c2)))
      return null;
    if (t$7(i2))
      return null;
    const u2 = t2.sceneIntersectionHelper.intersectElevationFromScreen(i$6(a2.screenEnd.x, a2.screenEnd.y), n2, o2, l2);
    return r$6(u2) ? r$6(c2) && !pn(u2, u2, c2) ? null : __spreadProps(__spreadValues({}, a2), { mapStart: i2, mapEnd: u2 }) : null;
  };
}
function N$1(e2, r2, t2, n2 = null, o2 = null) {
  return M$2(e2, t2, d$f(r2, e2, t2), n2, o2);
}
function P$1(e2, r2, t2, n2 = null, o2 = null) {
  return N$1(e2, t2, f$f(r2), n2, o2);
}
function h$2(r2, t2, n2, o2) {
  const s2 = t2.toMap(r2.screenStart, { include: [n2] });
  return r$6(s2) ? P$1(t2, n2, s2, o2) : null;
}
function k$1(e2, r2) {
  const t2 = J$2, n2 = K, o2 = p$8();
  e2.renderCoordsHelper.worldUpAtPosition(r2, t2);
  const s2 = _$8(o2, t2, e$a(n2, r2, e2.state.camera.eye));
  return _$8(s2, s2, t2), _$7(r2, s2, o2);
}
function G$2(e2, r2, t2) {
  let n2 = null;
  const o2 = new G$9();
  return o2.next(C$2(e2, k$1(e2, r2))).next(A$4(e2, r2)).next(F$1(e2, t2)).next((e3) => {
    e3.mapEnd.x = e3.mapStart.x, e3.mapEnd.y = e3.mapStart.y, n2 = e3;
  }), (e3) => (n2 = null, o2.execute(e3), n2);
}
function A$4(e2, r2) {
  const t2 = n$a(), n2 = s$6(r2);
  e2.renderCoordsHelper.worldUpAtPosition(r2, t2);
  const o2 = n$a(), s2 = n$a(), i2 = (o3) => {
    if (e$a(o3, o3, r2), e$l(t2, o3, o3), e2.viewingMode === "global") {
      s$6(o3) * Math.sign(P$7(t2, o3)) < 1e-3 - n2 && e$a(o3, g$6(o3, t2, 1e-3), r2);
    }
    return u$7(o3, o3, r2), o3;
  };
  return (e3) => (e3.renderStart = i2(r$9(o2, e3.renderStart)), e3.renderEnd = i2(r$9(s2, e3.renderEnd)), e3);
}
function F$1(r2, t2) {
  const n2 = r2.renderCoordsHelper;
  return (r3) => {
    const o2 = n2.fromRenderCoords(r3.renderStart, t2), s2 = n2.fromRenderCoords(r3.renderEnd, t2);
    return r$6(o2) && r$6(s2) ? __spreadProps(__spreadValues({}, r3), { mapStart: o2, mapEnd: s2 }) : null;
  };
}
var q$2;
!function(e2) {
  e2[e2.GROUND = 0] = "GROUND", e2[e2.OTHER = 1] = "OTHER";
}(q$2 || (q$2 = {}));
const J$2 = n$a(), K = n$a(), L$1 = d$a();
function r$2(t2, r2, a2, i2) {
  const c2 = t2.graphic, s2 = (t3, e2) => r2({ action: t3, graphic: c2, dxScreen: e2.screenDeltaX, dyScreen: e2.screenDeltaY });
  return a2((t3, r3, a3) => {
    const o2 = r3.next((t4) => (t4.action === "start" && s2("start", t4), t4)).next(h$k(c2, i2)).next((t4) => {
      switch (t4.action) {
        case "start":
        case "update":
          (t4.translationX || t4.translationY || t4.translationZ) && s2("update", t4);
          break;
        case "end":
          s2("end", t4);
      }
      return t4;
    });
    return a3.next(M$b(c2)).next(() => {
      s2("end", { screenDeltaX: 0, screenDeltaY: 0 });
    }), o2;
  });
}
function a$2(e2) {
  if (t$7(e2) || e2.type !== "polyline" && e2.type !== "polygon")
    return 0;
  const n2 = (e2.type === "polyline" ? e2.paths : e2.rings)[0];
  if (!n2 || n2.length < 2)
    return 0;
  const r2 = n2[0], a2 = n2[1];
  return Math.atan2(a2[1] - r2[1], a2[0] - r2[0]);
}
function i$1(e2) {
  if (t$7(e2) || t$7(e2.axis))
    return 1;
  const { mapStart: n2, mapEnd: r2, axis: a2 } = e2, i2 = [r2.x - n2.x, r2.y - n2.y];
  return i2[0] * a2[0] + i2[1] * a2[1] > 0 ? 1 : -1;
}
class C$1 extends t$1 {
  constructor(t2) {
    super(), this._handles = new t$c(), this._arrowManipulatorInfos = new Array(), this._opaqueMaterial = this._createMaterial(), this._transparentMaterial = this._createMaterial(0.5), this._angle = 0, this._scale = 1, this._radius = e, this._updateAfterDrag = false, this.events = new n$f(), this._tool = t2.tool, this._view = t2.view, t2.radius != null && (this._radius = t2.radius), this._createManipulators(), this.forEachManipulator((t3) => this._tool.manipulators.add(t3));
  }
  set orthogonalAvailable(t2) {
    this._arrowManipulatorInfos[1].manipulator.available = t2, this._arrowManipulatorInfos[3].manipulator.available = t2;
  }
  destroy() {
    this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    }), this._handles = s$c(this._handles), this._tool = null, this._view = null, this._arrowManipulatorInfos.length = 0;
  }
  forEachManipulator(t2) {
    for (const { manipulator: a2 } of this._arrowManipulatorInfos)
      t2(a2, A$5.TRANSLATE_XY);
  }
  createGraphicDragPipeline(t2, a2, r2) {
    const e2 = a2.graphic, i2 = f$f(e2), s2 = e$d(e2.geometry).spatialReference;
    return r$2(a2, r2, (a3) => this.createDragPipeline((r3, e3, i3, o2, s3) => a3(r3, t2(r3, e3, i3, o2, s3), i3), i2, s2, e2), this._view.state.viewingMode);
  }
  createDragPipeline(t2, a2, r2, i2) {
    return r$h(this._arrowManipulatorInfos.map(({ manipulator: e2 }, o2) => d$g(e2, (e3, s2, n2, l2, p2) => {
      const u2 = s2.next((t3) => __spreadProps(__spreadValues({}, t3), { manipulatorType: A$5.TRANSLATE_XY })).next(C$a(this._view, e3.elevationAlignedLocation)).next(N$1(this._view, e3.elevationAlignedLocation, a2, r2, i2)).next(g$7(e3.location, this.angle + (o2 + 1) * Math.PI * 0.5)).next(U$4());
      t2(e3, u2, n2, l2, p2);
    })));
  }
  get angle() {
    return this._angle;
  }
  set angle(t2) {
    this._angle = t2, this.dragging ? this._updateAfterDrag = true : this._updateManipulatorTransform();
  }
  get displayScale() {
    return this._scale;
  }
  set displayScale(t2) {
    this._scale = t2, this._updateManipulatorTransform();
  }
  get radius() {
    return this._radius;
  }
  set radius(t2) {
    this._radius !== t2 && (this._radius = t2, this._updateManipulators());
  }
  _updateManipulators() {
    for (let t2 = 0; t2 < this._arrowManipulatorInfos.length; t2++)
      this._updateArrowManipulator(this._arrowManipulatorInfos[t2], t2);
    this._updateManipulatorTransform();
  }
  _updateArrowManipulator({ manipulator: t2, transform: a2 }, r2) {
    const e$12 = this._radius / e, i2 = c$2 * e$12, o2 = i2 * Math.sqrt(3) / 2, s2 = Z$3(o2, i2 / 2, i2 / 2, M$3);
    B$5(s2, x$9(f$e.get(), o$9(c$6.get(), 0, -o2 / 3, 0))), t2.renderObjects = [{ geometry: s2, material: this._opaqueMaterial, stateMask: t$h.Focused }, { geometry: s2, material: this._transparentMaterial, stateMask: t$h.Unfocused }], t2.radius = o2 / 3 * 2 * 1.2;
    const u2 = R$6(f$e.get(), r2 * Math.PI / 2), h2 = x$9(f$e.get(), o$9(c$6.get(), 0, o$2 * e$12, 0));
    u$c(a2, u2, h2);
  }
  _createManipulators() {
    for (let t2 = 0; t2 < 4; t2++) {
      const a2 = this._createArrowManipulator(t2);
      this._arrowManipulatorInfos.push(a2);
    }
    this._updateManipulatorTransform();
  }
  _updateManipulatorTransform() {
    const t2 = this.angle, a2 = g$8(f$e.get(), t2, r$a(0, 0, 1));
    if (t$7(a2))
      return;
    const r2 = q$7(f$e.get(), o$9(c$6.get(), this.displayScale, this.displayScale, this.displayScale)), e2 = u$c(f$e.get(), r2, a2);
    for (const i2 of this._arrowManipulatorInfos) {
      const t3 = u$c(f$e.get(), e2, i2.transform);
      i2.manipulator.modelTransform = t3;
    }
  }
  _createArrowManipulator(t2) {
    const a2 = new ie({ view: this._view, autoScaleRenderObjects: false, worldOriented: true, focusMultiplier: 1, touchMultiplier: 1, collisionType: { type: "disc", direction: r$a(0, 0, 1) } }), r2 = { manipulator: a2, transform: e$8() };
    return this._updateArrowManipulator(r2, t2), this._handles.add(a2.events.on("drag", (t3) => {
      this._updateAfterDrag && t3.action === "end" && !this.dragging && (this._updateManipulatorTransform(), this._updateAfterDrag = false);
    })), r2;
  }
  _createMaterial(a2 = 1) {
    const r2 = l$4.toUnitRGBA(r$4.main);
    return r2[3] *= a2, new m$c({ color: r2, transparent: a2 !== 1, cullFace: n$h.Back, renderOccluded: o$c.Transparent });
  }
  get test() {
    return { arrowManipulators: this._arrowManipulatorInfos.map(({ manipulator: t2 }) => t2) };
  }
}
class a$1 {
  constructor() {
    this._view = null, this._elevationInfo = null, this._lastDragEvent = null, this.next = new G$9(), this._enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e2) {
    if (this._enabled !== e2 && r$6(this._lastDragEvent)) {
      const n2 = this._lastDragEvent.mapEnd, a2 = this._snap(this._lastDragEvent.screenEnd);
      if (r$6(a2)) {
        const t2 = { action: "update", mapStart: this._lastDragEvent.mapStart, mapEnd: e2 === true ? a2 : n2, screenStart: this._lastDragEvent.screenEnd, screenEnd: this._lastDragEvent.screenEnd };
        this.next.execute(t2);
      }
    }
    this._enabled = e2;
  }
  _snap(n2) {
    const a2 = r$6(this._view) ? this._view.toMap(n2, { exclude: [] }) : null;
    return r$6(a2) && r$6(this._view) && (a2.z = d$f(a2, this._view, this._elevationInfo)), a2;
  }
  createDragEventPipelineStep(e2, n2) {
    return this._view = e2, this._elevationInfo = n2, this._lastDragEvent = null, (e3) => {
      if (this._lastDragEvent = e3.action !== "end" ? __spreadValues({}, e3) : null, this._enabled) {
        const n3 = this._snap(e3.screenEnd);
        return r$6(n3) ? { action: e3.action, mapStart: e3.mapStart, mapEnd: n3, screenStart: e3.screenStart, screenEnd: e3.screenEnd } : null;
      }
      return { action: e3.action, mapStart: e3.mapStart, mapEnd: e3.mapEnd, screenStart: e3.screenStart, screenEnd: e3.screenEnd };
    };
  }
}
class E$1 extends t$1 {
  constructor(t2) {
    super(), this._snapToScene = new a$1(), this._discMaterial = this._createMaterial(), this._discMaterialTransparent = this._createMaterial(0.5), this._scale = 1, this._radius = e, this._view = t2.view, this._tool = t2.tool, t2.snapToScene != null && (this.snapToScene = t2.snapToScene), t2.radius != null && (this._radius = t2.radius), this._createManipulator(), this.forEachManipulator((t3) => this._tool.manipulators.add(t3));
  }
  destroy() {
    this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    }), this._tool = null, this._view = null, this._manipulator = null;
  }
  forEachManipulator(t2) {
    t2(this._manipulator, A$5.TRANSLATE_XY);
  }
  get displayScale() {
    return this._scale;
  }
  set displayScale(t2) {
    this._scale = t2, this._updateManipulatorTransform();
  }
  get snapToScene() {
    return this._snapToScene.enabled;
  }
  set snapToScene(t2) {
    this._snapToScene.enabled = t2;
  }
  get radius() {
    return this._radius;
  }
  set radius(t2) {
    t2 !== this._radius && (this._radius = t2, this._updateManipulator());
  }
  createGraphicDragPipeline(t2, i2, a2) {
    const r2 = i2.graphic, s2 = f$f(r2), o2 = e$d(r2.geometry).spatialReference;
    return r$2(i2, a2, (e2) => this.createDragPipeline((i3, a3, r3, s3, o3) => e2(i3, t2(i3, a3, r3, s3, o3), r3), s2, o2, r2), this._view.state.viewingMode);
  }
  createDragPipeline(t2, e2, i2, a2) {
    const r2 = this._view;
    return d$g(this._manipulator, (s2, o2, n2, l2, p2) => {
      const u2 = o2.next(C$a(r2, s2.elevationAlignedLocation)).next(N$1(r2, s2.elevationAlignedLocation, e2, i2, a2)).next(this._snapToScene.createDragEventPipelineStep(r2, e2), this._snapToScene.next).next((t3) => __spreadProps(__spreadValues({}, t3), { manipulatorType: A$5.TRANSLATE_XY })).next(U$4());
      t2(s2, u2, n2, l2, p2);
    });
  }
  _updateManipulatorTransform() {
    const t2 = q$7(f$e.get(), o$9(c$6.get(), this.displayScale, this.displayScale, this.displayScale));
    this._manipulator.modelTransform = t2;
  }
  _createManipulator() {
    const t2 = this._view;
    this._manipulator = new ie({ view: t2, worldSized: false, autoScaleRenderObjects: false, focusMultiplier: 1, touchMultiplier: 1, collisionType: { type: "disc", direction: r$a(0, 0, 1) }, worldOriented: true }), this._updateManipulator();
  }
  _updateManipulator() {
    const t2 = E$b(M$3, 1, a$3, r$a(0, 0, 1), r$a(0, 0, 0)), e$12 = q$7(e$8(), r$a(this._radius, this._radius, this._radius));
    this._manipulator.renderObjects = [{ geometry: t2, material: this._discMaterial, transform: e$12, stateMask: t$h.Focused }, { geometry: t2, material: this._discMaterialTransparent, transform: e$12, stateMask: t$h.Unfocused }], this._manipulator.radius = h$3 * (this._radius / e);
  }
  _createMaterial(e2 = 1) {
    const i2 = l$4.toUnitRGBA(r$4.main);
    return i2[3] *= e2, new m$c({ color: i2, transparent: e2 !== 1, cullFace: n$h.Back, renderOccluded: o$c.Transparent });
  }
  get test() {
    return { discManipulator: this._manipulator };
  }
}
class T extends t$1 {
  constructor(t2) {
    super(), this._radius = e, this.events = new n$f(), this._tool = t2.tool, this._view = t2.view, t2.radius != null && (this._radius = t2.radius), this._createManipulator(), this.forEachManipulator((t3) => this._tool.manipulators.add(t3));
  }
  destroy() {
    this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    });
  }
  forEachManipulator(t2) {
    t2(this._manipulator, A$5.TRANSLATE_Z);
  }
  createGraphicDragPipeline(t2, e2, r2) {
    const i2 = e$d(e2.graphic.geometry).spatialReference;
    return r$2(e2, r2, (e3) => this.createDragPipeline((r3, a2, i3, o2, s2) => e3(r3, t2(r3, a2, i3, o2, s2), i3), i2), this._view.state.viewingMode);
  }
  createDragPipeline(t2, e2) {
    const r2 = this._view;
    return d$g(this._manipulator, (a2, i2, o2, s2, n2) => {
      const l2 = i2.next((t3) => __spreadProps(__spreadValues({}, t3), { manipulatorType: A$5.TRANSLATE_Z })).next(G$2(r2, a2.renderLocation, e2)).next(U$4());
      t2(a2, l2, o2, s2, n2);
    });
  }
  get radius() {
    return this._radius;
  }
  set radius(t2) {
    t2 !== this._radius && (this._radius = t2, this._updateManipulator());
  }
  _updateManipulator() {
    const e$12 = this._radius / e, r2 = y$4.zManipulator.height * e$12, a2 = y$4.zManipulator.coneHeight * e$12, l2 = y$4.zManipulator.coneWidth * e$12, m2 = y$4.zManipulator.width * e$12, p2 = [r$a(0, 0, 0), r$a(0, 0, r2)], u2 = X(p2, m2 / 2, 16, false), c2 = C$b(a2, l2 / 2, 16, false), d2 = [r$a(0, 0, 0), r$a(0, 0, r2 + a2)], h2 = (t2) => {
      const e2 = e$8();
      if (c$5(e2, e2, [0, 0, r2]), b$a(e2, e2, Math.PI / 2), t2) {
        const r3 = 1 + 2 * t2 / l2;
        i$a(e2, e2, [r3, r3, r3]);
      }
      return e2;
    }, M2 = h2(0), g2 = (e2, r3) => {
      const a3 = q$8(y$4.zManipulator.color, r3);
      return [a3.r / 255, a3.g / 255, a3.b / 255, y$4.zManipulator.color.a * e2];
    }, j2 = A$6(g2(1, 0.25), o$c.Occlude), w2 = A$6(g2(1, 0), o$c.Occlude), k2 = A$6(g2(0.7, 0), y$4.zManipulator.renderOccluded), P2 = A$6(g2(0.85, 0), y$4.zManipulator.renderOccluded);
    this._manipulator.renderObjects = [{ geometry: c2, transform: M2, material: j2, stateMask: t$h.Unfocused }, { geometry: u2, material: j2, stateMask: t$h.Unfocused }, { geometry: c2, transform: M2, material: w2, stateMask: t$h.Focused }, { geometry: u2, material: w2, stateMask: t$h.Focused }, { geometry: c2, transform: M2, material: k2, stateMask: t$h.Unfocused }, { geometry: u2, material: k2, stateMask: t$h.Unfocused }, { geometry: c2, transform: M2, material: P2, stateMask: t$h.Focused }, { geometry: u2, material: P2, stateMask: t$h.Focused }], this._manipulator.radius = m2 / 2 + 2, this._manipulator.collisionType = { type: "line", paths: [d2] };
  }
  _createManipulator() {
    const t2 = new ie({ view: this._view, autoScaleRenderObjects: false, worldSized: false, selectable: false, cursor: "ns-resize", elevationInfo: this.elevationInfo, worldOriented: true, collisionPriority: 1.6 });
    t2.applyObjectTransform = (t3) => {
      const e$12 = this._view.state.camera, a2 = A$3;
      this._view.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation, a2);
      const i2 = U$5(e$12.eye, a2), o2 = e$12.computeRenderPixelSizeAtDist(i2), s2 = e$a(x, a2, e$12.eye);
      z$6(s2, s2);
      const n2 = D$1;
      this._view.renderCoordsHelper.worldUpAtPosition(A$3, n2);
      const h2 = Math.abs(P$7(s2, n2)), f2 = _$8(x, s2, n2), M2 = _$8(x, f2, n2), _2 = a$d(h2, 0.01, 1), g2 = 1 - Math.sqrt(1 - _2 * _2) / _2 / e$12.fullWidth, j2 = this._radius / e, w2 = y$4.zManipulator.width * j2;
      g$6(M2, z$6(M2, M2), (1 / g2 - 1) * i2 + o2 * w2), t3[12] -= x[0], t3[13] -= x[1], t3[14] -= x[2];
    }, this._manipulator = t2, this._updateManipulator();
  }
  get test() {
    return { manipulator: this._manipulator };
  }
}
const A$3 = n$a(), x = n$a(), D$1 = n$a();
class u$1 extends t$1 {
  constructor(a2) {
    super(), this._handles = new t$c(), this._interactive = true;
    const { tool: t2, view: n2, snapToScene: e2, radius: s2 } = a2;
    this._view = n2, this.xyManipulation = new E$1({ tool: t2, view: n2, snapToScene: e2, radius: s2 }), this.xyAxisManipulation = new C$1({ tool: t2, view: n2, radius: s2 }), this.zManipulation = new T({ tool: t2, view: n2, radius: s2 }), this.xyManipulation.available = a2.xyAvailable, this.xyAxisManipulation.available = a2.xyAxisAvailable, this.zManipulation.available = a2.zAvailable, this._autoHideXYAxis(), this.forEachManipulator((i2) => {
      this._handles.add(i2.events.on("grab-changed", () => this._updateManipulatorInteractivity()));
    });
  }
  destroy() {
    this._handles.destroy(), this.xyManipulation.destroy(), this.xyAxisManipulation.destroy(), this.zManipulation.destroy();
  }
  createGraphicDragPipeline(i2, t2, n2) {
    return r$h([this.xyManipulation.createGraphicDragPipeline((a2, t3, n3, e2, s2) => i2(M$1.XY, a2, t3, n3, e2, s2), t2, n2), this.xyAxisManipulation.createGraphicDragPipeline((a2, t3, n3, e2, s2) => i2(M$1.XY_AXIS, a2, t3, n3, e2, s2), t2, n2), this.zManipulation.createGraphicDragPipeline((a2, t3, n3, e2, s2) => i2(M$1.Z, a2, t3, n3, e2, s2), t2, n2)]);
  }
  createDragPipeline(i2, t2, n2, e2) {
    return r$h([this.xyManipulation.createDragPipeline((a2, t3, n3, e3, s2) => i2(M$1.XY, a2, t3, n3, e3, s2), t2, n2, e2), this.xyAxisManipulation.createDragPipeline((a2, t3, n3, e3, s2) => i2(M$1.XY_AXIS, a2, t3, n3, e3, s2), t2, n2, e2), this.zManipulation.createDragPipeline((a2, t3, n3, e3, s2) => i2(M$1.Z, a2, t3, n3, e3, s2), n2)]);
  }
  set snapToScene(i2) {
    this.xyManipulation.snapToScene = i2;
  }
  set angle(i2) {
    this.xyAxisManipulation.angle = i2;
  }
  set interactive(i2) {
    this._interactive !== i2 && (this._interactive = i2, this._updateManipulatorInteractivity());
  }
  set radius(i2) {
    this.xyAxisManipulation.radius = i2, this.xyManipulation.radius = i2, this.zManipulation.radius = i2;
  }
  set displayScale(i2) {
    this.xyManipulation.displayScale = i2, this.xyAxisManipulation.displayScale = i2;
  }
  forEachManipulator(i2) {
    this.xyManipulation.forEachManipulator((a2) => i2(a2, A$5.TRANSLATE_XY)), this.xyAxisManipulation.forEachManipulator((a2) => i2(a2, A$5.TRANSLATE_XY)), this.zManipulation.forEachManipulator((a2) => i2(a2, A$5.TRANSLATE_Z));
  }
  get _xyAxisVisible() {
    const i2 = this.xyManipulation.someManipulator((i3) => i3.focused) || this.xyAxisManipulation.someManipulator((i3) => i3.focused);
    return this._view.inputManager && this._view.inputManager.latestPointerType === "touch" || i2;
  }
  _autoHideXYAxis() {
    const i2 = this.xyAxisManipulation, a2 = this.xyManipulation;
    if (has("esri-mobile"))
      return;
    const t2 = [];
    a2.forEachManipulator((i3) => t2.push(i3)), i2.forEachManipulator((i3) => t2.push(i3));
    const e2 = () => {
      const a3 = [];
      this._xyAxisVisible || i2.forEachManipulator((i3) => a3.push(i3.disableDisplay())), this._handles.remove(c$1), this._handles.add(a3, c$1);
    };
    for (const n2 of t2)
      this._handles.add(n2.events.on("focus-changed", e2));
    this._view.inputManager && this._handles.add(f$g(() => {
      var _a;
      return (_a = this._view.inputManager) == null ? void 0 : _a.latestPointerType;
    }, e2)), e2();
  }
  _updateManipulatorInteractivity() {
    const i2 = this.grabbing;
    this.forEachManipulator((a2) => {
      a2.interactive = !i2 && this._interactive || a2.grabbing;
    });
  }
  static radiusForSymbol(i2) {
    const a2 = r$6(i2) && i2.type === "point-3d" && i2.symbolLayers;
    return !!a2 && a2.length > 0 && a2.some((i3) => i3.type === "icon") ? I$1 : e;
  }
}
const c$1 = "disable-xy-axis-display";
var M$1;
!function(i2) {
  i2[i2.XY = 0] = "XY", i2[i2.XY_AXIS = 1] = "XY_AXIS", i2[i2.Z = 2] = "Z";
}(M$1 || (M$1 = {}));
class l$1 extends t$1 {
  constructor(t2) {
    super(), this._view = t2.view, this._tool = t2.tool, this._graphicState = t2.graphicState, this._createManipulator(), this.forEachManipulator((t3) => this._tool.manipulators.add(t3));
  }
  destroy() {
    this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    }), this._tool = null, this._view = null, this._manipulator = null, this._graphicState = null;
  }
  forEachManipulator(t2) {
    t2(this._manipulator, A$5.TRANSLATE_XY);
  }
  createGraphicDragPipeline(t2) {
    return r$2(this._graphicState, t2, (t3) => this.createDragPipeline(t3), this._view.state.viewingMode);
  }
  createDragPipeline(e2) {
    const r2 = this._view, a2 = this._graphicState.graphic, p2 = r$6(a2.geometry) ? a2.geometry.spatialReference : null;
    return d$g(this._manipulator, (t2, o2, l2, h2, c2) => {
      const m2 = o2.next(h$2(c2, r2, a2, p2)).next(P$8()).next(U$4());
      e2(t2, m2, l2, h2, c2);
    });
  }
  _createManipulator() {
    const t2 = this._view, i2 = this._graphicState.graphic;
    this._manipulator = new C$c({ graphic: i2, view: t2, selectable: true, cursor: "move" });
  }
}
class L {
  constructor(t2) {
    this.allGraphics = t2, this.type = "graphic-move-start";
  }
}
class N {
  constructor(t2, i2, e2) {
    this.dx = t2, this.dy = i2, this.allGraphics = e2, this.type = "graphic-move";
  }
}
class q$1 {
  constructor(t2) {
    this.allGraphics = t2, this.type = "graphic-move-stop";
  }
}
let B$1 = class extends a$k(n$f.EventedMixin(p$h)) {
  constructor(t2) {
    super(t2), this.graphics = new j$8(), this.enableZ = true, this.tooltipOptions = new p$i(), this.type = "move-3d", this._snappingPipeline = new u$e(), this._tooltip = null;
  }
  initialize() {
    const { graphics: t2, view: i2 } = this;
    this.addHandles([t2.on("change", () => this._refreshManipulators()), l$5(() => this.tooltipOptions.enabled, (t3) => {
      this._tooltip = t3 ? new m$g({ view: i2 }) : s$c(this._tooltip);
    }, w$e)]), this._refreshManipulators(), this.finishToolCreation();
  }
  destroy() {
    this._tooltip = s$c(this._tooltip), this._moveManipulation = s$c(this._moveManipulation), this.graphics.removeAll(), this._set("view", null);
  }
  get updating() {
    return this.updatingHandles.updating;
  }
  reset() {
  }
  _refreshManipulators() {
    this.handles.removeAll(), this._moveManipulation && this._moveManipulation.destroy(), this.manipulators.removeAll();
    const t2 = this.graphics.toArray().filter((t3) => i$f(t3) === P$9.SUPPORTED).map((t3) => new J$1(t3));
    t2.length && (this._createManipulators(t2), this._createVisualElements(t2), this.handles.add(t2.map((t3) => this.view.trackGraphicState(t3.state))), this._updateMoveManipulation(t2));
  }
  _createManipulators(t2) {
    for (const i2 of t2) {
      const e2 = i2.state;
      i2.manipulationXY = new l$1({ tool: this, view: this.view, graphicState: e2 }), i2.manipulationXY.forEachManipulator((t3) => this.handles.add([t3.events.on("immediate-click", (t4) => {
        this.emit("immediate-click", __spreadProps(__spreadValues({}, t4), { graphic: e2.graphic })), t4.stopPropagation();
      }), t3.events.on("grab-changed", ({ action: t4 }) => {
        const { tooltipOptions: i3, _tooltip: e3 } = this;
        t$7(e3) || (t4 === "start" ? e3.info = new r$j({ tooltipOptions: i3 }) : e3.clear());
      })])), this.handles.add(i2.manipulationXY.createDragPipeline((i3, e3, o2, a2) => this._buildDragEventPipeline(t2, M$1.XY, i3, e3, o2, a2)));
    }
    this._createMoveManipulation(t2);
  }
  _createMoveManipulation(t2) {
    const i2 = new u$1({ tool: this, view: this.view, snapToScene: false, xyAvailable: true, xyAxisAvailable: true, zAvailable: true, radius: t2.length === 1 ? u$1.radiusForSymbol(t2[0].graphic.symbol) : e });
    this._moveManipulation = i2, i2.elevationInfo = { mode: "absolute-height", offset: 0 }, i2.forEachManipulator((t3) => {
      this.handles.add(t3.events.on("immediate-click", (e2) => {
        i2.zManipulation.hasManipulator(t3) || this.graphics.length !== 1 || this.emit("immediate-click", __spreadProps(__spreadValues({}, e2), { graphic: this.graphics.getItemAt(0) })), e2.stopPropagation();
      }));
    });
    const e$12 = (i3) => (e2) => {
      this.handles.add(e2.events.on("focus-changed", ({ action: e3 }) => {
        const o3 = this._tooltip;
        t$7(o3) || (e3 === "focus" ? this._updateMoveTooltip(t2, i3) : o3.clear());
      }));
    };
    this._moveManipulation.xyManipulation.forEachManipulator(e$12(M$1.XY)), this._moveManipulation.xyAxisManipulation.forEachManipulator(e$12(M$1.XY_AXIS)), this._moveManipulation.zManipulation.forEachManipulator(e$12(M$1.Z));
    const o2 = () => this._updateMoveManipulation(t2);
    for (const n2 of t2)
      this.handles.add([n2.state.on("changed", o2), l$5(() => n2.state.displaying, o2)]);
    const a2 = t2[t2.length - 1];
    this.handles.add(a2.state.on("changed", () => this._updateMoveManipulationAngle(a2))), this.handles.add(i2.createDragPipeline((i3, e2, o3, a3, n2) => this._buildDragEventPipeline(t2, i3, e2, o3, a3, n2), f$f(a2.graphic), e$d(a2.graphic.geometry).spatialReference, a2.graphic)), this._updateMoveManipulationAngle(a2);
  }
  _createVisualElements(t2) {
    for (const i2 of t2) {
      const e2 = i2.graphic, o2 = i$3({ view: this.view, graphic: e2, forEachManipulator: (t3) => {
        i2.manipulationXY.forEachManipulator(t3), this._moveManipulation.forEachManipulator(t3);
      }, onManipulatorsChanged: () => n$8() });
      t$7(o2) || (i2.geometryRepresentation = o2.visualElement, i2.geometryRepresentation instanceof S$3 && this.handles.add([i2.geometryRepresentation.events.on("attachment-origin-changed", () => {
        i2.state.isDraped || this._updateMoveManipulation(t2);
      }), l$5(() => i2.state.isDraped, () => this._updateMoveManipulation(t2))]), this.handles.add(o2));
    }
  }
  _updateMoveManipulationAngle(t2) {
    this._moveManipulation.angle = a$2(t2.graphic.geometry);
  }
  _updateMoveManipulation(t2) {
    const i2 = v$9(0, 0, 0, this.view.spatialReference);
    let e2 = 0, o2 = false;
    const a2 = this._moveManipulation;
    for (const n2 of t2) {
      if (!n2.state.displaying)
        continue;
      const t3 = n2.state.graphic;
      this.enableZ && t$3(t3) && (o2 = true);
      const a3 = n2.geometryRepresentation instanceof S$3 && !n2.state.isDraped ? n2.geometryRepresentation.attachmentOrigin : N$3(this.view, t3);
      r$6(a3) && (i2.x += a3.x, i2.y += a3.y, i2.z += a3.z, e2++);
    }
    e2 > 0 ? (i2.x /= e2, i2.y /= e2, i2.z /= e2, a2.location = i2, a2.xyManipulation.available = true, a2.xyAxisManipulation.available = true, a2.zManipulation.available = o2) : a2.available = false;
  }
  _buildDragEventPipeline(t2, i2, e2, o2, a2, n2) {
    const s2 = [], r2 = [];
    let p2 = null, l2 = null;
    const h2 = () => {
      for (const t3 of s2)
        t3.dragging = false;
      s2.length = 0, r2.length = 0, p2 = null, l2 = null, this._moveManipulation.interactive = true;
    };
    if (a2 = a2.next((t3) => l2(t3)).next(() => {
      if (this.emit("graphic-move-stop", new q$1(r2)), this.destroyed)
        return null;
      h2();
    }), t2.length === 1 && i2 === M$1.XY) {
      const i3 = t2[0].graphic;
      o2 = this._buildSnappingPipelineSteps(i3, f$f(i3), o2, a2, n2);
    }
    return o2.next((i3) => {
      if (i3.action === "start") {
        s2.length = 0, r2.length = 0;
        for (const i4 of t2)
          i4.dragging || !i4.manipulationXY.hasManipulator(e2) && i4.manipulationXY.grabbing || (s2.push(i4), r2.push(i4.graphic), i4.dragging = true);
        if (r2.length !== 0 && (this._moveManipulation.interactive = false, p2 = v$c(r2, this.view.state.viewingMode), l2 = D$7(r2), this.emit("graphic-move-start", new L(r2)), this.destroyed))
          return null;
      }
      return r2.length !== 0 ? i3 : null;
    }).next((t3) => p2(t3)).next((e3) => (this._updateMoveTooltip(t2, i2, e3), e3)).next((t3) => {
      switch (t3.action) {
        case "start":
        case "update":
          if (t3.translationX || t3.translationY || t3.translationZ) {
            const i3 = this.view.toScreen(t3.mapStart), e3 = this.view.toScreen(t3.mapEnd), o3 = e3.x - i3.x, a3 = e3.y - i3.y;
            if (this.emit("graphic-move", new N(o3, a3, r2)), this.destroyed)
              return null;
          }
          break;
        case "end":
          if (this.emit("graphic-move-stop", new q$1(r2)), this.destroyed)
            return null;
          h2();
      }
    });
  }
  _updateMoveTooltip(t2, i2, e2) {
    const { tooltipOptions: o2, _tooltip: a2 } = this;
    if (t$7(a2))
      return;
    a2.clear();
    const n2 = t2.length === 0 ? "absolute-height" : t2[0].state.isDraped ? "on-the-ground" : "absolute-height";
    switch (i2) {
      case M$1.XY:
        a2.info = new r$j({ tooltipOptions: o2 }), this._updateMoveTooltipDistance(a2.info, e2, (t3, i3) => a$m(t3, i3, n2));
        break;
      case M$1.XY_AXIS:
        a2.info = new a$l({ tooltipOptions: o2 }), this._updateMoveTooltipDistance(a2.info, e2, (t3, i3) => {
          const o3 = a$m(t3, i3, n2);
          return y$a(o3, i$1(e2));
        });
        break;
      case M$1.Z:
        a2.info = new p$j({ tooltipOptions: o2 }), this._updateMoveTooltipDistance(a2.info, e2, v$d);
    }
  }
  _updateMoveTooltipDistance(t2, i2, e2) {
    if (r$6(i2) && i2.action !== "end") {
      const { mapStart: o2, mapEnd: a2 } = i2, n2 = e2(o2, a2);
      t2.distance = r$6(n2) ? n2 : j$9;
    }
  }
  _buildSnappingPipelineSteps(t2, i2, e2, o2, a2) {
    const n2 = t2.geometry;
    if (t$7(n2) || n2.type !== "point" && n2.type !== "mesh")
      return e2;
    const r2 = (n2.type === "point" ? n2 : n2.anchor).clone(), p2 = new e$m({ elevationInfo: i2, pointer: a2, editGeometryOperations: V$8.fromGeometry(r2, this.view.state.viewingMode), visualizer: new _$3(), excludeFeature: t2 }), l2 = this.snappingManager;
    return e2.next((i3) => {
      r2.z = g$9(this.view, r2, f$f(t2), { mode: "absolute-height", offset: 0 });
      return __spreadProps(__spreadValues({}, i3), { snapOrigin: p2.coordinateHelper.pointToVector(r2) });
    }).next(this._snappingPipeline.createSnapDragEventPipelineStep({ snappingContext: p2, snappingManager: l2, cancel: o2, updatingHandles: this.updatingHandles }), this._snappingPipeline.next);
  }
  get test() {
    return { tooltip: this._tooltip };
  }
};
e$4([y$6({ constructOnly: true, nonNullable: true })], B$1.prototype, "view", void 0), e$4([y$6()], B$1.prototype, "graphics", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], B$1.prototype, "enableZ", void 0), e$4([y$6({ constructOnly: true, type: p$i })], B$1.prototype, "tooltipOptions", void 0), e$4([y$6({ constructOnly: true })], B$1.prototype, "snappingManager", void 0), e$4([y$6()], B$1.prototype, "type", void 0), e$4([y$6()], B$1.prototype, "updating", null), B$1 = e$4([n$7("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMoveTool")], B$1);
class J$1 {
  constructor(t2) {
    this.state = null, this.geometryRepresentation = null, this.manipulationXY = null, this.dragging = false, this.state = new e$1({ graphic: t2 });
  }
  get graphic() {
    return this.state.graphic;
  }
}
function j(e2, r2, o2) {
  const n2 = o2.mode === "on-the-ground" ? A$g.XY : A$g.XYZ;
  return new P$a(e2, n2, r2, 0);
}
function h$1(r2, o2, n2) {
  const s2 = n$a();
  if (!r2.renderCoordsHelper.toRenderCoords(o2, s2))
    return null;
  const c2 = y$3(r2, o2, Y$2(n2.plane)), i2 = y$3(r2, o2, n2.edgeDirection);
  if (t$7(c2) || t$7(i2))
    return null;
  const u2 = _$8(n$a(), c2, i2);
  return _$7(s2, u2, p$8());
}
function y$3(e2, r2, o2) {
  const n2 = v$9(r2.x + o2[0], r2.y + o2[1], r2.z + o2[2], r2.spatialReference), t2 = n$a(), c2 = n$a();
  return e2.renderCoordsHelper.toRenderCoords(r2, t2) && e2.renderCoordsHelper.toRenderCoords(n2, c2) ? H$4(c2, t2, c2) : null;
}
function C(e2, r2, o2) {
  const c2 = Y$2(e2), i2 = H$4(n$a(), r2, o2), p2 = _$8(n$a(), i2, c2), m2 = _$8(n$a(), i2, p2);
  return t$j(i2[0], i2[1], i2[2], 0, p2[0], p2[1], p2[2], 0, m2[0], m2[1], m2[2], 0, 0, 0, 0, 1);
}
function R(e2, n2, t2) {
  const s2 = t2.projectToRenderScreen(e2, x$c()), d2 = t2.projectToRenderScreen(n2, x$c());
  return r$6(s2) && r$6(d2) ? v$e(e$a(s2, s2, d2)) : 0;
}
let p$1 = class extends e$n {
  constructor(o2) {
    super(o2), this.type = "reshape-edge-offset", this.distance = j$9, this.area = null, this.totalLength = null;
  }
};
e$4([y$6()], p$1.prototype, "type", void 0), e$4([y$6()], p$1.prototype, "distance", void 0), e$4([y$6()], p$1.prototype, "area", void 0), e$4([y$6()], p$1.prototype, "totalLength", void 0), p$1 = e$4([n$7("esri.views.interactive.tooltip.ReshapeEdgeOffsetTooltipInfo")], p$1);
let Ue = class extends n$f.EventedMixin(d$h) {
  constructor(e2) {
    super(e2), this._vertexManipulatorMaterial = A$6(y$4.colorToVec4(y$4.reshapeManipulators.vertex.color), y$4.reshapeManipulators.vertex.renderOccluded), this._vertexManipulatorOutlineMaterial = I$2(y$4.colorToVec4(y$4.reshapeManipulators.vertex.outlineColor), y$4.reshapeManipulators.vertex.renderOccluded), this._vertexManipulatorHoverOutlineMaterial = I$2(y$4.colorToVec4(y$4.reshapeManipulators.vertex.hoverOutlineColor), y$4.reshapeManipulators.vertex.renderOccluded), this._edgeManipulatorMaterial = A$6(y$4.colorToVec4(y$4.reshapeManipulators.edge.color), y$4.reshapeManipulators.edge.renderOccluded), this._edgeManipulatorOutlineMaterial = I$2(y$4.colorToVec4(y$4.reshapeManipulators.edge.outlineColor), y$4.reshapeManipulators.edge.renderOccluded), this._edgeOffsetManipulatorMaterial = A$6(y$4.colorToVec4(y$4.reshapeManipulators.edgeOffset.color), y$4.reshapeManipulators.edgeOffset.renderOccluded, false), this._edgeOffsetManipulatorHoverMaterial = A$6(y$4.colorToVec4(y$4.reshapeManipulators.edgeOffset.hoverColor), y$4.reshapeManipulators.edgeOffset.renderOccluded, false), this._selectedManipulatorMaterial = A$6(y$4.colorToVec4(y$4.reshapeManipulators.selected.color), y$4.reshapeManipulators.selected.renderOccluded), this._selectedManipulatorOutlineMaterial = I$2(y$4.colorToVec4(y$4.reshapeManipulators.selected.outlineColor), y$4.reshapeManipulators.selected.renderOccluded), this._selectedManipulatorHoverOutlineMaterial = I$2(y$4.colorToVec4(y$4.reshapeManipulators.selected.hoverOutlineColor), y$4.reshapeManipulators.selected.renderOccluded), this._selectedIndex = 0, this._vertexManipulatorGeometry = null, this._vertexManipulatorOutlineGeometry = null, this._edgeManipulatorGeometry = null, this._edgeManipulatorOutlineGeometry = null, this._edgeOffsetManipulatorGeometryInside = null, this._edgeOffsetManipulatorGeometryOutside = null, this._manipulatorHandles = new t$c(), this._manipulatorInfos = [], this._editGeometryOperations = null, this._numGrabbing = 0, this._numDragging = 0, this._reshapeEventState = Xe.NONE, this._outlineVisualElement = null, this._segmentLabels = null, this.outputGeometry = null, this._snappingPipeline = new u$e(), this._snappingPipelineHandle = new u$e(), this._vertexLaserLineVisualElement = null;
  }
  initialize() {
    const { graphic: e2, view: t2 } = this, i2 = this._graphicState = new e$1({ graphic: e2 });
    this._tooltip = new m$g({ view: t2 }), this.addHandles([l$5(() => i2.displaying, (e3) => {
      for (const t3 of this._manipulatorInfos)
        t3.manipulator.available = e3;
    }), l$5(() => ({ labels: this._segmentLabels, enabled: this._labelOptions.enabled, edgeOffsetEnabled: this.enableEdgeOffset }), ({ labels: e3, enabled: t3, edgeOffsetEnabled: i3 }) => {
      r$6(e3) && (e3.visible = t3, e3.edgeDistance = i3 ? "far" : "default");
    }, h$c), f$g(() => !this._tooltipOptions.enabled, () => this._tooltip.clear(), h$c), this.view.trackGraphicState(i2)]);
  }
  destroy() {
    this._segmentLabels = s$c(this._segmentLabels), this._tooltip = s$c(this._tooltip), this._removeManipulators();
  }
  get inputGeometry() {
    return r$6(this._editGeometryOperations) ? this._editGeometryOperations.data.geometry : null;
  }
  set inputGeometry(e2) {
    this._recreateEditGeometryAndManipulators(e2);
  }
  get updating() {
    return this.updatingHandles.updating;
  }
  get manipulators() {
    return this.tool.manipulators;
  }
  get view() {
    return this.tool.view;
  }
  get graphic() {
    return this.tool.graphic;
  }
  get enableZShape() {
    return this.tool.enableZShape;
  }
  get enableZVertex() {
    return this.tool.enableZVertex;
  }
  get enableMoveGraphic() {
    return this.tool.enableMoveGraphic;
  }
  get enableMidpoints() {
    return this.tool.enableMidpoints;
  }
  get enableEdgeOffset() {
    return this.tool.enableEdgeOffset;
  }
  get _labelOptions() {
    return this.tool.labelOptions;
  }
  get _tooltipOptions() {
    return this.tool.tooltipOptions;
  }
  removeSelectedVertices() {
    const e2 = this._manipulatorInfos.filter((e3) => e3.manipulator.selected && e3.type === "vertex");
    this._removeVertices(e2);
  }
  onManipulatorSelectionChanged() {
    this.emit("manipulators-changed");
  }
  _removeManipulators() {
    this._manipulatorHandles.removeAll(), this._moveManipulation = s$c(this._moveManipulation), this._graphicMoveManipulation = s$c(this._graphicMoveManipulation), this.manipulators.removeAll(), this._manipulatorInfos = [], this._numGrabbing = 0, this._numDragging = 0;
  }
  _createManipulators() {
    if (t$7(this._editGeometryOperations))
      return;
    const e2 = f$f(this.graphic);
    for (const t2 of this._editGeometryOperations.data.components) {
      for (const i2 of t2.vertices)
        this._createVertexOrEdgeManipulator(i2, e2);
      for (const i2 of t2.edges)
        this._createVertexOrEdgeManipulator(i2, e2);
    }
    this._createGraphicMoveManipulation(), this._createMoveManipulation(e2), this._createVisualElements();
  }
  get canRedo() {
    return r$6(this._editGeometryOperations) && this._editGeometryOperations.canRedo;
  }
  get canUndo() {
    return r$6(this._editGeometryOperations) && this._editGeometryOperations.canUndo;
  }
  redo() {
    if (t$7(this._editGeometryOperations))
      return null;
    const e2 = this._editGeometryOperations.redo();
    return r$6(e2) && (this.outputGeometry = this._editGeometryOperations.data.geometry, this._recreateManipulators()), e2;
  }
  undo() {
    if (t$7(this._editGeometryOperations))
      return null;
    this.emit("undo");
    const e2 = this._editGeometryOperations.undo();
    return r$6(e2) && (this.outputGeometry = this._editGeometryOperations.data.geometry, this._recreateManipulators()), e2;
  }
  _recreateManipulators() {
    this._removeManipulators(), this._tooltip.clear(), this._createManipulators();
  }
  _recreateEditGeometryAndManipulators(e2 = this.inputGeometry) {
    this._removeManipulators(), this._tooltip.clear(), t$7(e2) || (s$c(this._editGeometryOperations), this._editGeometryOperations = V$8.fromGeometry(e2, this.view.state.viewingMode), this._createManipulators(), s$c(this._segmentLabels), this._segmentLabels = new a$6({ context: { view: this.view, editGeometryOperations: this._editGeometryOperations, elevationInfo: f$f(this.graphic), labelOptions: this._labelOptions, graphic: this.graphic, graphicState: this._graphicState }, visible: this._labelOptions.enabled }));
  }
  _perGraphicManipulatorDragAction(e2, t2) {
    if (t2.action === "end")
      return t2;
    let i2 = 0;
    const a2 = [], o2 = this._manipulatorInfos.some((e3) => e3.type === "vertex" && e3.manipulator.selected), n2 = e2 === Ze.SELECTED_OR_ALL && o2;
    for (const r2 of this._manipulatorInfos)
      r2.type === "vertex" && (r2.manipulator.grabbing || n2 && !r2.manipulator.selected || a2.push(r2), i2++);
    if (a2.length === 0)
      return t2;
    this._moveVertices(a2, t2);
    if (a2.length === i2) {
      if (this._updateEventState(Xe.MOVING), this.destroyed)
        return t2;
      this.emit("move", { type: "move", dx: t2.screenDeltaX, dy: t2.screenDeltaY, mover: this.graphic });
    } else {
      if (this._updateEventState(Xe.RESHAPING), this.destroyed)
        return t2;
      this.emit("reshape", { type: "reshape", mover: this.graphic });
    }
    return t2;
  }
  _isMultiVertexSelection() {
    let e2 = 0;
    for (const t2 of this._manipulatorInfos)
      t2.type === "vertex" && t2.manipulator.selected && e2++;
    return e2 > 1;
  }
  _perVertexManipulatorDragAction(e2) {
    if (this._updateEventState(Xe.RESHAPING), this.destroyed)
      return;
    const { mapDeltaX: t2, mapDeltaY: i2, mapDeltaZ: a2 } = e2;
    if (!t2 && !i2 && !a2)
      return;
    const o2 = [];
    for (const n2 of this._manipulatorInfos)
      n2.type === "vertex" && (n2.manipulator.selected && !n2.manipulator.grabbing || n2 === e2.info) && o2.push(n2);
    this._moveVertices(o2, e2, E$c.ACCUMULATE_STEPS), this.emit("reshape", { type: "reshape", mover: this.graphic });
  }
  _updateEventState(e2) {
    if (e2 === this._reshapeEventState)
      return false;
    switch (e2) {
      case Xe.NONE:
        if (this._numGrabbing !== 0 || this._numDragging !== 0)
          return false;
        switch (this._reshapeEventState) {
          case Xe.MOVING:
            this.emit("move", { type: "move-stop", dx: 0, dy: 0, mover: this.graphic });
            break;
          case Xe.RESHAPING:
            this.emit("reshape", { type: "reshape-stop", mover: this.graphic });
        }
        break;
      case Xe.MOVING:
        switch (this._reshapeEventState) {
          case Xe.NONE:
            this.emit("move", { type: "move-start", dx: 0, dy: 0, mover: this.graphic });
            break;
          case Xe.RESHAPING:
            this.emit("reshape", { type: "reshape-stop", mover: this.graphic }), this.destroyed || this.emit("move", { type: "move-start", dx: 0, dy: 0, mover: this.graphic });
        }
        break;
      case Xe.RESHAPING:
        switch (this._reshapeEventState) {
          case Xe.NONE:
            this.emit("reshape", { type: "reshape-start", mover: this.graphic });
            break;
          case Xe.MOVING:
            this.emit("move", { type: "move-stop", dx: 0, dy: 0, mover: this.graphic }), this.destroyed || this.emit("reshape", { type: "reshape-start", mover: this.graphic });
        }
    }
    if (this.destroyed)
      return false;
    const t2 = this._reshapeEventState !== e2;
    return this._reshapeEventState = e2, t2;
  }
  _createGraphicMoveManipulation() {
    const { tool: e2, view: t2 } = this, i2 = this._graphicState;
    if (this._graphicMoveManipulation = new l$1({ tool: e2, view: t2, graphicState: i2 }), this.enableMoveGraphic) {
      let e3 = null;
      this._manipulatorHandles.add(this._graphicMoveManipulation.createDragPipeline((t3, i3, a2) => {
        i3.next((e4) => this._trackNumDragging(e4)).next((t4) => (t4.action === "start" && (e3 = e$d(this._editGeometryOperations).createUndoGroup()), t4)).next((e4) => this._perGraphicManipulatorDragAction(Ze.ALL, e4)).next((e4) => (this._updateTranslateGraphicTooltip(M$1.XY, e4), e4)).next((t4) => {
          t4.action === "end" && (this._tooltip.clear(), e3 = h$l(e3));
        }), a2.next(() => this._onDragCancel(true, () => e3 = h$l(e3)));
      })), this._graphicMoveManipulation.forEachManipulator((e4) => this._manipulatorHandles.add(this._watchAndUpdateGrabState(e4, false)));
    } else
      this._graphicMoveManipulation.forEachManipulator((e3) => {
        e3.grabbable = false, e3.cursor = null;
      });
    this._graphicMoveManipulation.forEachManipulator((e3) => this._manipulatorHandles.add(e3.events.on("immediate-click", (e4) => {
      this._manipulatorInfos.some((e5) => e5.manipulator.selected) ? this._clearSelection() : this.emit("immediate-click", __spreadProps(__spreadValues({}, e4), { graphic: this.graphic })), e4.stopPropagation();
    })));
  }
  _createMoveManipulation(e2) {
    const { graphic: t2, handles: i2, tool: a2, view: o2 } = this, n2 = this._graphicState;
    this._moveManipulation = new u$1({ tool: a2, view: o2, xyAvailable: true, xyAxisAvailable: true, zAvailable: this.enableZShape && t$3(t2), snapToScene: false, radius: u$1.radiusForSymbol(t2.symbol) }), this._moveManipulation.forEachManipulator((e3) => i2.add([e3.events.on("immediate-click", (i3) => {
      this._moveManipulation.zManipulation.hasManipulator(e3) || this._manipulatorInfos.some((e4) => e4.manipulator.selected) || this.emit("immediate-click", __spreadProps(__spreadValues({}, i3), { graphic: t2 })), i3.stopPropagation();
    }), this._watchAndUpdateGrabState(e3, false)]));
    const r2 = (e3) => (t3) => {
      i2.add(t3.events.on("focus-changed", ({ action: t4 }) => {
        t4 === "focus" && this._tooltipOptions.enabled ? this._updateTranslateTooltip(e3) : this._tooltip.clear();
      }));
    };
    this._moveManipulation.xyManipulation.forEachManipulator(r2(M$1.XY)), this._moveManipulation.xyAxisManipulation.forEachManipulator(r2(M$1.XY_AXIS)), this._moveManipulation.zManipulation.forEachManipulator(r2(M$1.Z)), this._moveManipulation.elevationInfo = { mode: "absolute-height", offset: 0 };
    const s2 = e$d(t2.geometry).spatialReference;
    i2.add([this._moveManipulation.createDragPipeline((i3, o3, n3, r3, s3) => {
      r3 = r3.next((e3) => (this._onDragCancel(), e3));
      return n3.next((e3) => this._trackNumDragging(e3)).next((e3) => {
        const t3 = this._manipulatorInfos.filter((e4) => e4.type === "vertex" && e4.manipulator.selected);
        return e3.manipulatorType === A$5.TRANSLATE_XY && t3.length === 1 ? __spreadProps(__spreadValues({}, e3), { info: t3[0], snapOrigin: t3[0].handle.pos }) : e3;
      }).next(X$1(this.view, e2, t2)).next(this._snappingPipelineHandle.createSnapDragEventPipelineStep({ predicate: (e3) => !!e3.info, cancel: r3, snappingManager: a2.snappingManager, snappingContext: new e$m({ editGeometryOperations: e$d(this._editGeometryOperations), elevationInfo: e2, pointer: s3, excludeFeature: t2, visualizer: new _$3() }), updatingHandles: this.updatingHandles, useZ: false }), this._snappingPipelineHandle.next).next(P$8()).next((e3) => this._perGraphicManipulatorDragAction(Ze.SELECTED_OR_ALL, e3)).next((e3) => (this._updateTranslateTooltip(i3, e3), e3));
    }, e2, s2, t2), l$5(() => n2.displaying, () => {
      this._updateMoveManipulationPosition();
    }, h$c), n2.on("changed", () => this._updateMoveManipulationPosition()), l$5(() => n2.isDraped, (e3) => {
      this._updateMoveManipulationPosition();
      const t3 = "align-move-manipulation";
      e3 ? i2.add(this.view.elevationProvider.on("elevation-change", () => this._updateMoveManipulationPosition()), t3) : i2.remove(t3);
    }, h$c)]);
  }
  _createVisualElements() {
    const { graphic: e2, view: t2 } = this, i2 = i$3({ view: t2, graphic: e2, forEachManipulator: (e3) => {
      if (!this.destroyed) {
        this._graphicMoveManipulation.forEachManipulator(e3), this._moveManipulation.forEachManipulator(e3);
        for (const t3 of this._manipulatorInfos)
          e3(t3.manipulator, A$5.TRANSLATE_XY);
      }
    }, onManipulatorsChanged: (e3) => this.on("manipulators-changed", e3) });
    r$6(i2) && (this._outlineVisualElement = i2.visualElement instanceof S$3 ? i2.visualElement : null), r$6(this._outlineVisualElement) && this._manipulatorHandles.add(this._outlineVisualElement.events.on("attachment-origin-changed", () => {
      this._graphicState.isDraped || this._updateMoveManipulationPosition();
    })), this._manipulatorHandles.add(i2);
  }
  _createEdgeOffsetManipulator(e2, t2 = f$f(this.graphic)) {
    const i2 = y$4.reshapeManipulators.edgeOffset, a2 = i2.size / 2, o2 = a2 + i2.collisionPadding;
    if (t$7(this._edgeOffsetManipulatorGeometryInside) || t$7(this._edgeOffsetManipulatorGeometryOutside)) {
      const e3 = a2 / o2, t3 = e3 * Math.sqrt(3) / 2;
      this._edgeOffsetManipulatorGeometryInside = Z$3(t3, e3 / 2, e3 / 2, i2.height, i2.offset), this._edgeOffsetManipulatorGeometryOutside = Z$3(-t3, e3 / 2, e3 / 2, i2.height, -i2.offset);
    }
    const r2 = [{ geometry: this._edgeOffsetManipulatorGeometryInside, material: this._edgeOffsetManipulatorMaterial, stateMask: t$h.Unfocused }, { geometry: this._edgeOffsetManipulatorGeometryInside, material: this._edgeOffsetManipulatorHoverMaterial, stateMask: t$h.Focused }, { geometry: this._edgeOffsetManipulatorGeometryOutside, material: this._edgeOffsetManipulatorMaterial, stateMask: t$h.Unfocused }, { geometry: this._edgeOffsetManipulatorGeometryOutside, material: this._edgeOffsetManipulatorHoverMaterial, stateMask: t$h.Focused }], s2 = new ie({ view: this.view, renderObjects: r2, elevationInfo: t2.mode !== "on-the-ground" || d$i(this.graphic.symbol) ? { mode: "absolute-height", offset: 0 } : t2, worldOriented: false, focusMultiplier: 1, radius: o2, available: !(!this.graphic.visible || !this.graphic.layer.visible), collisionType: { type: "disc", direction: r$a(0, 0, 1) }, collisionPriority: 1, metadata: { deleting: false } }), h2 = new ie({ view: this.view, renderObjects: [], worldSized: true, worldOriented: false, available: !(!this.graphic.visible || !this.graphic.layer.visible), collisionPriority: -10, cursor: this.enableMoveGraphic ? "move" : "default", metadata: { deleting: false } }), d2 = { manipulator: s2, handle: e2, locationUpdateHandle: null, type: "edge", selectedIndex: 0, edgeManipulator: h2, elevationInfo: t2, visibilityHandle: null };
    this._autoHideEdgeOffsetManipulator(d2, i2.minSquaredEdgeLength), this._updateEdgeOffsetManipulator(d2);
    const u2 = [];
    for (const n2 of [d2.handle.leftVertex, d2.handle.rightVertex]) {
      const e3 = this._getManipulatorInfoFromHandle(n2);
      r$6(e3) && u2.push(e3.manipulator.events.on("location-update", () => this._updateEdgeOffsetManipulator(d2)));
    }
    d2.locationUpdateHandle = r$h(u2), this._manipulatorHandles.add(d2.locationUpdateHandle, s2), this._manipulatorHandles.add([this._watchAndUpdateGrabState(s2, true), this._watchAndUpdateGrabState(h2, true)], s2), this._manipulatorHandles.add(d$g(s2, this._createEdgeOffsetPipeline(d2, t2)), s2), this._manipulatorHandles.add(d$g(h2, (e3, i3, a3, o3) => {
      if (o3 === "touch") {
        this._createEdgeOffsetPipeline(d2, t2)(e3, i3, a3);
      } else if (this.enableMoveGraphic) {
        const o4 = this.graphic, n2 = r$6(o4.geometry) ? o4.geometry.spatialReference : null;
        i3.next((e4) => this._trackNumDragging(e4)).next(C$a(this.view, e3.elevationAlignedLocation)).next(N$1(this.view, e3.elevationAlignedLocation, t2, n2, o4)).next(U$4()).next(P$8()).next((e4) => this._perGraphicManipulatorDragAction(Ze.ALL, e4)).next((e4) => (this._updateTranslateGraphicTooltip(M$1.XY, e4), e4)).next((e4) => {
          e4.action === "end" && this._tooltip.clear();
        }), a3.next(() => this._onDragCancel(!e3.metadata.deleting));
      }
    }), s2);
    const c2 = (e3) => {
      this._manipulatorInfos.some((e4) => e4.manipulator.selected) ? this._clearSelection() : this.emit("immediate-click", __spreadProps(__spreadValues({}, e3), { graphic: this.graphic })), e3.stopPropagation();
    };
    return this._manipulatorHandles.add([s2.events.on("immediate-click", c2), h2.events.on("immediate-click", c2), s2.events.on("focus-changed", ({ action: e3 }) => {
      const t3 = this._tooltipOptions;
      if (e3 === "focus" && t3.enabled) {
        const e4 = this._tooltip.info = new p$1({ tooltipOptions: t3 });
        this._updateTooltipAreaOrTotalLength(e4);
      } else
        this._tooltip.clear();
    })], s2), this._manipulatorInfos.push(d2), this.manipulators.add(s2), this.manipulators.add(h2), this.emit("manipulators-changed"), d2;
  }
  _autoHideEdgeOffsetManipulator(e2, t2) {
    const i2 = e2.manipulator, a2 = e2.edgeManipulator, o2 = () => {
      e2.visibilityHandle = h$l(e2.visibilityHandle);
      const o3 = this._getManipulatorInfoFromHandle(e2.handle.leftVertex), r2 = this._getManipulatorInfoFromHandle(e2.handle.rightVertex), s2 = r$6(o3) && r$6(r2) && R(o3.manipulator.renderLocation, r2.manipulator.renderLocation, this.view.state.camera) < t2;
      (!i2.focused && !a2.focused || s2) && (i2.grabbable = !s2, a2.grabbable = !s2, e2.visibilityHandle = r$h([i2.disableDisplay(), { remove: () => {
        i2.grabbable = true, a2.grabbable = this.enableMoveGraphic;
      } }]));
    };
    this._manipulatorHandles.add([i2.events.on("focus-changed", o2), a2.events.on("focus-changed", o2), { remove: () => {
      h$l(e2.visibilityHandle), a2.metadata.deleting = true, this.manipulators.remove(a2);
    } }], i2), o2();
  }
  _updateEdgeOffsetManipulator(e2) {
    this._updateManipulatorPosition(e2);
    const { coordinateHelper: t2 } = e$d(this._editGeometryOperations).data, i2 = h$1(this.view, e2.manipulator.elevationAlignedLocation, j(t2, e2.handle, e$d(e2.manipulator.elevationInfo))), a2 = this._getManipulatorInfoFromHandle(e2.handle.leftVertex), o2 = this._getManipulatorInfoFromHandle(e2.handle.rightVertex);
    if (t$7(a2) || t$7(o2))
      return;
    const n2 = a2.manipulator.renderLocation, r2 = o2.manipulator.renderLocation, s2 = r$6(i2) ? C(i2, n2, r2) : o$k;
    e2.manipulator.modelTransform = s2, e2.edgeManipulator.elevationAlignedLocation = e2.manipulator.elevationAlignedLocation, e2.edgeManipulator.modelTransform = s2;
    const d2 = s$6(e$a(Re$1, n2, r2)) / 2;
    e2.edgeManipulator.collisionType = { type: "line", paths: [[[-d2, 0, 0], [d2, 0, 0]]] };
  }
  _createEdgeOffsetPipeline(e2, t2) {
    return (i2, a2, o2) => {
      this._clearSelection();
      const { step: n2, cleanup: r2 } = this._initializeEdgeOffset(e2, t2);
      a2.next((e3) => this._trackNumDragging(e3)).next(C$a(this.view, i2.elevationAlignedLocation)).next(n2).next(T$1(this.view)).next(F$1(this.view, e$d(this._editGeometryOperations).data.spatialReference)).next(P$8()).next(this._applyComputeEdgeOffsetDistanceStep()).next(this._applyEdgeOffsetStep(e2)).next(this._showEdgeOffsetTooltip()).next((e3) => {
        e3.action === "end" && r2();
      }), o2.next(() => {
        i2.metadata.deleting || (r2(), this._onDragCancel());
      });
    };
  }
  _initializeEdgeOffset(e2, t2) {
    const i2 = e$d(this._editGeometryOperations), a2 = j(i2.data.coordinateHelper, e2.handle, t2), o2 = i2.createUndoGroup(), s2 = h$1(this.view, e2.manipulator.elevationAlignedLocation, a2);
    if (a2.requiresSplitEdgeLeft) {
      const t3 = this._getManipulatorInfoFromHandle(e2.handle.leftVertex.leftEdge);
      r$6(t3) && this._splitEdgeManipulator(t3, 1);
    }
    if (a2.requiresSplitEdgeRight) {
      const t3 = this._getManipulatorInfoFromHandle(e2.handle.rightVertex.rightEdge);
      r$6(t3) && this._splitEdgeManipulator(t3, 0);
    }
    const u2 = () => new m$h({ paths: [[e2.handle.leftVertex.pos, e2.handle.rightVertex.pos]], spatialReference: i2.data.spatialReference }), c2 = new S$3({ view: this.view, isDraped: this._graphicState.isDraped, geometry: u2(), elevationInfo: e2.elevationInfo, width: y$4.visualElements.lineGraphics.outline.width, color: y$4.colorToVec4(r$4.main), attached: true });
    let m2;
    const _2 = () => {
      this._cleanEdgeOffsetCollapsedEdges(e2), m2 = h$l(m2);
    }, f2 = this.on("undo", _2);
    return m2 = r$h([t$e(c2), l$5(() => this._graphicState.isDraped, (e3) => c2.isDraped = e3), this._graphicState.on("changed", () => c2.geometry = u2()), o2, f2]), { step: (e3) => t$7(a2) || t$7(s2) ? (_2(), null) : __spreadProps(__spreadValues({}, e3), { operation: a2, plane: s2 }), cleanup: _2 };
  }
  _applyEdgeOffsetStep(e2) {
    return (t2) => {
      if (this.destroyed || t$7(t2.operation))
        return t2;
      this._updateEventState(Xe.RESHAPING);
      const { mapDeltaX: i2, mapDeltaY: a2, mapDeltaZ: o2 } = t2;
      return (i2 || a2 || o2) && (this._offsetEdge(e2, t2), this.emit("reshape", { type: "reshape", mover: this.graphic })), t2;
    };
  }
  _applyComputeEdgeOffsetDistanceStep() {
    return (e2) => {
      const { operation: t2, mapEnd: i2 } = e2;
      return t$7(t2) || t$7(i2) ? e2 : (e2.action === "start" && t2.selectArrowFromStartPoint(i2), __spreadProps(__spreadValues({}, e2), { signedDistance: t2.signedDistanceToPoint(i2) }));
    };
  }
  _showEdgeOffsetTooltip() {
    return (e2) => {
      const { mapEnd: t2, signedDistance: i2, operation: a2 } = e2, o2 = this._tooltip, n2 = this._tooltipOptions;
      if (!n2.enabled || t$7(i2))
        return o2.clear(), e2;
      let r2 = o2.info;
      (t$7(r2) || r2.type !== "reshape-edge-offset") && (r2 = o2.info = new p$1({ tooltipOptions: n2 }));
      const { coordinateHelper: s2 } = e$d(this._editGeometryOperations).data;
      return r2.distance = e2.action === "end" ? j$9 : Ne(this._graphicState.isDraped, i2 * a2.selectedArrow, t2, a2.plane, s2), this._updateTooltipAreaOrTotalLength(r2), e2;
    };
  }
  _cleanEdgeOffsetCollapsedEdges(e2) {
    var _a, _b;
    const t2 = (_a = e2.handle.leftVertex.leftEdge) == null ? void 0 : _a.leftVertex, i2 = e2.handle.leftVertex, a2 = (_b = e2.handle.rightVertex.rightEdge) == null ? void 0 : _b.rightVertex, o2 = e2.handle.rightVertex, n2 = e$d(this._editGeometryOperations).data.coordinateHelper, r2 = [];
    if (t2 && n2.distance(t2.pos, i2.pos) < Fe) {
      const e3 = this._getManipulatorInfoFromHandle(i2);
      r$6(e3) && r2.push(e3);
    }
    if (n2.distance(i2.pos, o2.pos) < Fe || a2 && n2.distance(a2.pos, o2.pos) < Fe) {
      const e3 = this._getManipulatorInfoFromHandle(o2);
      r$6(e3) && r2.push(e3);
    }
    r2.length && this._removeVertices(r2);
  }
  _computeVertexManipulatorSizeAndOutline(e2) {
    const t2 = e2.size / 2, i2 = t2 + e2.collisionPadding;
    return { size: t2 / i2, outlineSize: (t2 + e2.outlineSize) / i2 };
  }
  _createVertexOrEdgeManipulator(e2, t2 = f$f(this.graphic)) {
    if (e2.type === "edge") {
      if (this.enableEdgeOffset)
        return this._createEdgeOffsetManipulator(e2, t2);
      if (!this.enableMidpoints)
        return null;
    }
    if (t$7(this._vertexManipulatorGeometry) || t$7(this._vertexManipulatorOutlineGeometry)) {
      const { size: e3, outlineSize: t3 } = this._computeVertexManipulatorSizeAndOutline(y$4.reshapeManipulators.vertex);
      this._vertexManipulatorGeometry = T$b(e3, 16, 16), this._vertexManipulatorOutlineGeometry = T$b(t3, 16, 16);
    }
    if (t$7(this._edgeManipulatorGeometry) || t$7(this._edgeManipulatorOutlineGeometry)) {
      const { size: e3, outlineSize: t3 } = this._computeVertexManipulatorSizeAndOutline(y$4.reshapeManipulators.edge);
      this._edgeManipulatorGeometry = T$b(e3, 16, 16), this._edgeManipulatorOutlineGeometry = T$b(t3, 16, 16);
    }
    const i2 = r$6(this.graphic.geometry) && this.graphic.geometry.type === "point" ? [] : [{ geometry: this._vertexManipulatorGeometry, material: this._vertexManipulatorMaterial, stateMask: ze.Vertex | t$h.Unselected }, { geometry: this._vertexManipulatorOutlineGeometry, material: this._vertexManipulatorOutlineMaterial, stateMask: ze.Vertex | t$h.Unfocused | t$h.Unselected }, { geometry: this._vertexManipulatorOutlineGeometry, material: this._vertexManipulatorHoverOutlineMaterial, stateMask: ze.Vertex | t$h.Focused | t$h.Unselected }, { geometry: this._vertexManipulatorGeometry, material: this._selectedManipulatorMaterial, stateMask: t$h.Selected }, { geometry: this._vertexManipulatorOutlineGeometry, material: this._selectedManipulatorOutlineMaterial, stateMask: t$h.Selected | t$h.Unfocused }, { geometry: this._vertexManipulatorOutlineGeometry, material: this._selectedManipulatorHoverOutlineMaterial, stateMask: t$h.Selected | t$h.Focused }];
    this.enableMidpoints && i2.push({ geometry: this._edgeManipulatorGeometry, material: this._vertexManipulatorMaterial, stateMask: ze.Edge | t$h.Focused | t$h.Unselected }, { geometry: this._edgeManipulatorOutlineGeometry, material: this._vertexManipulatorHoverOutlineMaterial, stateMask: ze.Edge | t$h.Focused | t$h.Unselected }, { geometry: this._edgeManipulatorGeometry, material: this._edgeManipulatorMaterial, stateMask: ze.Edge | t$h.Unfocused | t$h.Unselected }, { geometry: this._edgeManipulatorOutlineGeometry, material: this._edgeManipulatorOutlineMaterial, stateMask: ze.Edge | t$h.Unfocused | t$h.Unselected });
    const a2 = new ie({ view: this.view, renderObjects: i2, elevationInfo: t2, focusMultiplier: 1, touchMultiplier: 1, available: !(!this.graphic.visible || !this.graphic.layer.visible), metadata: { deleting: false } });
    this._setTypeSpecificManipulatorSettings(a2, e2, t2);
    const o2 = e2.type === "edge" ? { manipulator: a2, handle: e2, locationUpdateHandle: null, type: "edge", selectedIndex: 0 } : { manipulator: a2, handle: e2, type: "vertex", selectedIndex: 0 };
    if (this._manipulatorInfos.push(o2), this.manipulators.add(a2), this._updateManipulatorPosition(o2), o2.type === "edge") {
      const e3 = [];
      for (const t3 of [o2.handle.leftVertex, o2.handle.rightVertex]) {
        const i3 = this._getManipulatorInfoFromHandle(t3);
        r$6(i3) && e3.push(i3.manipulator.events.on("location-update", () => this._updateManipulatorPosition(o2)));
      }
      o2.locationUpdateHandle = r$h(e3), this._manipulatorHandles.add(o2.locationUpdateHandle, a2);
    }
    this._manipulatorHandles.add(this._watchAndUpdateGrabState(a2, true), a2);
    const r2 = d$g(a2, (e3, i3, a3, n2) => {
      let r3 = null;
      a3 = a3.next((t3) => (this._onDragCancel(!e3.metadata.deleting, () => r3 = h$l(r3)), t3)), i3.next((e4) => this._trackNumDragging(e4)).next((e4) => {
        if (e4.action === "start" && (r3 = e$d(this._editGeometryOperations).createUndoGroup()), o2.type === "edge") {
          const t3 = this._splitEdgeManipulator(o2);
          return __spreadProps(__spreadValues({}, e4), { info: t3, snapOrigin: t3.handle.pos });
        }
        return __spreadProps(__spreadValues({}, e4), { info: o2, snapOrigin: o2.handle.pos });
      }).next(C$a(this.view, e3.elevationAlignedLocation)).next(P$1(this.view, this.graphic, e3.elevationAlignedLocation, e3.location.spatialReference, this.graphic)).next(X$1(this.view, t2, this.graphic)).next(this._snappingPipeline.createSnapDragEventPipelineStep({ predicate: () => !this._isMultiVertexSelection(), cancel: a3, snappingManager: this.tool.snappingManager, snappingContext: new e$m({ editGeometryOperations: e$d(this._editGeometryOperations), elevationInfo: t2, pointer: n2, excludeFeature: this.graphic, visualizer: new _$3() }), updatingHandles: this.updatingHandles, useZ: false }), this._snappingPipeline.next).next(P$8()).next((t3) => {
        this._perVertexManipulatorDragAction(t3), t3.action === "end" && (r3 = h$l(r3)), this._updateTranslateVertexTooltip(e3, M$1.XY, t3);
      });
    });
    return this._manipulatorHandles.add([r2, a2.events.on("immediate-click", (e3) => this._manipulatorClickCallback(e3, o2)), a2.events.on("select-changed", () => {
      o2.selectedIndex = ++this._selectedIndex, this._updateMoveManipulationPosition();
    }), a2.events.on("focus-changed", ({ action: e3 }) => {
      e3 === "focus" && o2.type !== "edge" ? this._updateTranslateVertexTooltip(a2, M$1.XY) : this._tooltip.clear();
    })], a2), this.emit("manipulators-changed"), o2;
  }
  _trackNumDragging(e2) {
    switch (e2.action) {
      case "start":
        this._numDragging++;
        break;
      case "end":
        this._numDragging--;
    }
    return e2;
  }
  _onDragCancel(e2 = true, t2) {
    switch (this._numDragging--, e2 && (this.undo(), this.outputGeometry = r$6(this._editGeometryOperations) ? this._editGeometryOperations.data.geometry : null), r$6(this.tool.snappingManager) && this.tool.snappingManager.doneSnapping(), this._tooltip.clear(), this._reshapeEventState) {
      case Xe.NONE:
        break;
      case Xe.MOVING:
        this.emit("move", { type: "move", dx: 0, dy: 0, mover: this.graphic });
        break;
      case Xe.RESHAPING:
        this.emit("reshape", { type: "reshape", mover: this.graphic });
    }
    t2 && t2(), this.destroyed || this._updateEventState(Xe.NONE);
  }
  _setTypeSpecificManipulatorSettings(e2, t2, i2) {
    switch (t2.type) {
      case "vertex":
        e2.state = ze.Vertex, e2.selectable = true, e2.cursor = "move", e2.collisionPriority = 2, e2.radius = y$4.reshapeManipulators.vertex.size / 2 + y$4.reshapeManipulators.vertex.collisionPadding, e2.elevationInfo = i2, e2.interactive = r$6(this.graphic.geometry) && this.graphic.geometry.type !== "point";
        break;
      case "edge":
        e2.state = ze.Edge, e2.selectable = false, e2.cursor = "copy", e2.collisionPriority = -1, e2.radius = y$4.reshapeManipulators.edge.size / 2 + y$4.reshapeManipulators.edge.collisionPadding, e2.elevationInfo = i2.mode !== "on-the-ground" || d$i(this.graphic.symbol) ? { mode: "absolute-height", offset: 0 } : i2;
    }
  }
  _watchAndUpdateGrabState(e2, t2) {
    return e2.events.on("grab-changed", (i2) => this._onGrabStateChanged(e2, t2, i2.action, i2.pointerType));
  }
  _onGrabStateChanged(e2, t2, i2, a2 = "mouse") {
    if (i2 === "start")
      t2 && this._updateSelection(e2), this._numGrabbing++;
    else if (this._numGrabbing--, this._updateEventState(Xe.NONE), this.destroyed)
      return;
    this._moveManipulation.interactive = !this._numGrabbing, (a2 !== "touch" || this.enableEdgeOffset) && (this._manipulatorInfos.forEach((e3) => {
      e3.manipulator.interactive = e3.manipulator.grabbing || !this._numGrabbing && r$6(this.graphic.geometry) && this.graphic.geometry.type !== "point", "edgeManipulator" in e3 && (e3.edgeManipulator.interactive = e3.edgeManipulator.grabbing || !this._numGrabbing);
    }), this._graphicMoveManipulation.forEachManipulator((e3) => {
      e3.interactive = e3.grabbing || !this._numGrabbing;
    }));
  }
  _clearSelection() {
    for (const e2 of this._manipulatorInfos)
      e2.manipulator.grabbing || (e2.manipulator.selected = false);
  }
  _updateSelection(e2) {
    e2.grabbing && !e2.selected && e2.selectable && (this._clearSelection(), e2.selected = true, this.emit("manipulators-changed"));
  }
  _removeManipulator(e2) {
    t$7(e2) || (e2.manipulator.metadata.deleting = true, this.manipulators.remove(e2.manipulator), this._manipulatorHandles.remove(e2.manipulator), v$f(this._manipulatorInfos, e2), this.emit("manipulators-changed"));
  }
  _getManipulatorInfoFromHandle(e2) {
    if (e2) {
      for (const t2 of this._manipulatorInfos)
        if (e2 === t2.handle)
          return t2;
    }
    return null;
  }
  _updateManipulatorPosition(e2) {
    if (t$7(e2))
      return;
    const t2 = e$d(this._editGeometryOperations);
    if (e2.type === "vertex")
      e2.manipulator.location = t2.data.coordinateHelper.vectorToDehydratedPoint(e2.handle.pos, Ce), e2.manipulator.grabbing && r$6(this._vertexLaserLineVisualElement) && (this._vertexLaserLineVisualElement.visualElement.intersectsWorldUpAtLocation = e2.manipulator.renderLocation);
    else if (e2.type === "edge") {
      const i2 = this._getManipulatorInfoFromHandle(e2.handle.leftVertex), a2 = this._getManipulatorInfoFromHandle(e2.handle.rightVertex);
      if (t$7(i2) || t$7(a2))
        return;
      const o2 = i2.manipulator, n2 = a2.manipulator;
      if (r$6(e2.manipulator.elevationInfo) && e2.manipulator.elevationInfo.mode === "on-the-ground") {
        const i3 = o2.location, a3 = n2.location, r2 = 0.5, s2 = i3.x + r2 * (a3.x - i3.x), l2 = i3.y + r2 * (a3.y - i3.y), p2 = i3.hasZ && a3.hasZ ? 0 : void 0;
        e2.manipulator.location = v$9(s2, l2, p2, t2.data.spatialReference);
      } else
        A$c(Re$1, o2.renderLocation, n2.renderLocation, 0.5), e2.manipulator.renderLocation = Re$1;
    }
  }
  _splitEdgeManipulator(e2, t2 = 0.5) {
    const i2 = e$d(this._editGeometryOperations), a2 = e$d(i2.splitEdge(e2.handle, t2).createdVertex);
    e2.locationUpdateHandle.remove(), e2.locationUpdateHandle = void 0;
    const o2 = f$f(this.graphic);
    let n2;
    this.enableEdgeOffset ? (this._removeManipulator(e2), n2 = this._createVertexOrEdgeManipulator(a2)) : (n2 = e2, n2.handle = a2, n2.type = "vertex", this._setTypeSpecificManipulatorSettings(e2.manipulator, e2.handle, o2)), a2.leftEdge && this._createVertexOrEdgeManipulator(a2.leftEdge), a2.rightEdge && this._createVertexOrEdgeManipulator(a2.rightEdge), this.outputGeometry = i2.data.geometry, this._updateManipulatorPosition(n2), this.enableEdgeOffset || this._updateTranslateVertexTooltip(n2.manipulator, M$1.XY), this._updateSelection(e2.manipulator);
    const r2 = this._updateEventState(Xe.RESHAPING), s2 = i2.data.coordinateHelper.vectorToArray(n2.handle.pos), l2 = i2.data.components.indexOf(a2.component);
    return this.emit("vertex-add", { type: "vertex-add", vertices: [{ coordinates: s2, componentIndex: l2, vertexIndex: e$d(a2.index) }], added: s2 }), r2 && this._updateEventState(Xe.NONE), n2;
  }
  _updateMoveManipulationPosition() {
    const e2 = o$9(Re$1, 0, 0, 0);
    let t2 = 0, i2 = false, a2 = null, o2 = null;
    for (const n2 of this._manipulatorInfos)
      n2.type === "vertex" && (n2.manipulator.selected ? (t2++, u$7(e2, e2, n2.manipulator.renderLocation), t$7(a2) || n2.selectedIndex > a2.selectedIndex ? (o2 = a2, a2 = n2) : (t$7(o2) || n2.selectedIndex > o2.selectedIndex) && (o2 = n2)) : i2 = true);
    if (t2 !== 0) {
      const e3 = this._graphicState.displaying;
      this._moveManipulation.xyManipulation.available = e3, this._moveManipulation.xyAxisManipulation.available = e3, this._moveManipulation.zManipulation.available = e3 && this.enableZVertex && t$3(this.graphic), this._moveManipulation.xyAxisManipulation.orthogonalAvailable = e3 && t2 !== 1;
    } else {
      const e3 = this._graphicState.displaying && this.enableMoveGraphic;
      this._moveManipulation.xyManipulation.available = e3, this._moveManipulation.xyAxisManipulation.available = e3, this._moveManipulation.xyAxisManipulation.orthogonalAvailable = e3, this._moveManipulation.zManipulation.available = e3 && this.enableZShape && t$3(this.graphic);
    }
    if (t2 !== 0) {
      let e3 = 0;
      if (r$6(a2)) {
        const t3 = a2.handle.pos, i3 = r$6(o2) ? o2.handle.pos : a2.handle.leftEdge && a2.handle.leftEdge.leftVertex ? a2.handle.leftEdge.leftVertex.pos : null, n2 = t$7(o2) && a2.handle.rightEdge && a2.handle.rightEdge.rightVertex ? a2.handle.rightEdge.rightVertex.pos : null;
        i3 && n2 ? this._moveManipulation.xyAxisManipulation.available = false : i3 ? e3 = ke(i3, t3) : n2 && (e3 = ke(t3, n2));
      }
      this._moveManipulation.angle = e3, this._moveManipulation.radius = I$1;
    } else
      this._moveManipulation.angle = a$2(e$d(this.graphic.geometry)), this._moveManipulation.radius = u$1.radiusForSymbol(this.graphic.symbol);
    t2 !== 0 && i2 ? (g$6(e2, e2, 1 / t2), Ce.spatialReference = e$d(this._editGeometryOperations).data.spatialReference, Ce.hasZ = true, this.view.renderCoordsHelper.fromRenderCoords(e2, Ce), this._moveManipulation.elevationAlignedLocation = Ce) : r$6(this._outlineVisualElement) && !this._graphicState.isDraped && r$6(this._outlineVisualElement.attachmentOrigin) ? this._moveManipulation.elevationAlignedLocation = this._outlineVisualElement.attachmentOrigin : C$4(this.view, this._moveManipulation, this.graphic);
  }
  _removeVertices(e2) {
    const t2 = [], i2 = e$d(this._editGeometryOperations);
    for (const a2 of e2)
      if (a2.type === "vertex" && i2.canRemoveVertex()) {
        t2.push(a2.handle), this._removeManipulator(a2), this._removeManipulator(this._getManipulatorInfoFromHandle(a2.handle.leftEdge)), this._removeManipulator(this._getManipulatorInfoFromHandle(a2.handle.rightEdge));
        const e3 = e$d(i2.removeVertices([a2.handle]).removedVertices[0].createdEdge);
        e3 && this._createVertexOrEdgeManipulator(e3);
      }
    if (t2.length > 0) {
      const e3 = t2.map((e4) => {
        const t3 = i2.data.components.indexOf(e4.component);
        return { coordinates: i2.data.coordinateHelper.vectorToArray(e4.pos), componentIndex: t3, vertexIndex: e$d(e4.index) };
      });
      this.outputGeometry = i2.data.geometry;
      const a2 = this._updateEventState(Xe.RESHAPING);
      if (this.destroyed)
        return;
      if (this.emit("vertex-remove", { type: "vertex-remove", removed: e3.map((e4) => e4.coordinates), vertices: e3 }), this.destroyed)
        return;
      if (a2 && (this._updateEventState(Xe.NONE), this.destroyed))
        return;
      this._updateMoveManipulationPosition();
    }
  }
  _moveVertices(e2, t2, i2 = t2.action === "start" ? E$c.NEW_STEP : E$c.ACCUMULATE_STEPS) {
    const a2 = e$d(this._editGeometryOperations);
    a2.moveVertices(e2.map((e3) => e3.handle), t2.mapDeltaX, t2.mapDeltaY, t2.mapDeltaZ, i2), this.outputGeometry = a2.data.geometry;
    for (const o2 of e2)
      this._updateManipulatorPosition(o2);
  }
  _offsetEdge(e2, t2) {
    if (t$7(t2.operation) || t$7(t2.signedDistance))
      return;
    const i2 = e$d(this._editGeometryOperations), a2 = t2.operation.clone();
    a2.distance = t2.signedDistance, i2.updateVertices([e2.handle.leftVertex, e2.handle.rightVertex], a2), this.outputGeometry = i2.data.geometry, this._updateManipulatorPosition(this._getManipulatorInfoFromHandle(e2.handle.leftVertex)), this._updateManipulatorPosition(this._getManipulatorInfoFromHandle(e2.handle.rightVertex));
  }
  _manipulatorClickCallback(e2, t2) {
    e2.shiftKey || this._clearSelection(), t2.type === "vertex" && (t2.manipulator.selected = !t2.manipulator.selected, e2.button === t$k.Right && this._removeVertices([t2])), t2.type === "edge" && e2.button === t$k.Left && this._splitEdgeManipulator(t2), e2.stopPropagation();
  }
  _updateTranslateTooltip(e2, t2) {
    const i2 = this._manipulatorInfos.filter((e3) => e3.type === "vertex" && e3.manipulator.selected);
    i2.length === 1 ? this._updateTranslateVertexTooltip(i2[0].manipulator, e2, t2) : this._updateTranslateGraphicTooltip(e2, t2);
  }
  _updateTranslateGraphicTooltip(e2, t2) {
    const i2 = this._tooltipOptions;
    if (!i2.enabled)
      return;
    const a2 = this._graphicState.isDraped ? "on-the-ground" : "absolute-height";
    switch (e2) {
      case M$1.XY:
        this._tooltip.info = new r$j({ tooltipOptions: i2 }), this._updateTranslateTooltipDistance(this._tooltip.info, t2, (e3, t3) => a$m(e3, t3, a2));
        break;
      case M$1.XY_AXIS:
        this._tooltip.info = new a$l({ tooltipOptions: i2 }), this._updateTranslateTooltipDistance(this._tooltip.info, t2, (e3, i3) => {
          const o2 = a$m(e3, i3, a2);
          return y$a(o2, i$1(t2));
        });
        break;
      case M$1.Z:
        this._tooltip.info = new p$j({ tooltipOptions: i2 }), this._updateTranslateTooltipDistance(this._tooltip.info, t2, v$d);
    }
  }
  _updateTranslateVertexTooltip(e2, t2, i2) {
    const a2 = this._tooltipOptions;
    if (!a2.enabled)
      return;
    let o2;
    const n2 = this._graphicState.isDraped ? "on-the-ground" : "absolute-height";
    switch (t2) {
      case M$1.XY:
        o2 = new n$j({ tooltipOptions: a2 }), this._updateTranslateTooltipDistance(o2, i2, (e3, t3) => a$m(e3, t3, n2)), this._updateTooltipAreaOrTotalLength(o2);
        break;
      case M$1.XY_AXIS:
        o2 = new c$a({ tooltipOptions: a2 }), this._updateTranslateTooltipDistance(o2, i2, (e3, t3) => {
          const a3 = a$m(e3, t3, n2);
          return y$a(a3, i$1(i2));
        }), this._updateTooltipAreaOrTotalLength(o2);
        break;
      case M$1.Z:
        o2 = new l$d({ tooltipOptions: a2 }), this._updateTranslateTooltipDistance(o2, i2, v$d);
    }
    const r2 = x$d(e2.elevationAlignedLocation);
    r$6(r2) && (o2.elevation = __spreadValues({ mode: "absolute-height" }, r2)), this._tooltip.info = o2;
  }
  _updateTranslateTooltipDistance(e2, t2, i2) {
    if (r$6(t2) && t2.action !== "end") {
      const { mapStart: a2, mapEnd: o2 } = t2, n2 = i2(a2, o2);
      e2.distance = r$6(n2) ? n2 : j$9;
    }
  }
  _updateTooltipAreaOrTotalLength(e2) {
    const { geometry: t2 } = this.graphic;
    if (t$7(t2))
      return;
    const i2 = this._graphicState.isDraped ? "on-the-ground" : "absolute-height";
    e2.area = t2.type === "polygon" ? i$g(t2, i2) : null, e2.totalLength = t2.type === "polyline" ? m$i(t2, i2) : null;
  }
  get test() {
    return { segmentLabels: this._segmentLabels, tooltip: this._tooltip };
  }
};
function ke(e2, t2) {
  return Math.atan2(t2[1] - e2[1], t2[0] - e2[0]) + Math.PI / 2;
}
function Ne(e2, t2, i2, a2, o2) {
  if (e2) {
    const e3 = o2.toXYZ(o2.pointToVector(i2)), n2 = H$5(a2, e3, c$6.get()), r2 = l$e(n2, e3, o2.spatialReference);
    if (r$6(r2))
      return a$n(r2.value * Math.sign(t2), r2.unit);
  }
  return a$n(t2 * $(i2.spatialReference), "meters");
}
e$4([y$6()], Ue.prototype, "_segmentLabels", void 0), e$4([y$6({ constructOnly: true })], Ue.prototype, "tool", void 0), e$4([y$6()], Ue.prototype, "_tooltip", void 0), e$4([y$6()], Ue.prototype, "inputGeometry", null), e$4([y$6()], Ue.prototype, "outputGeometry", void 0), e$4([y$6({ readOnly: true })], Ue.prototype, "updating", null), e$4([y$6()], Ue.prototype, "manipulators", null), e$4([y$6()], Ue.prototype, "view", null), e$4([y$6()], Ue.prototype, "graphic", null), e$4([y$6()], Ue.prototype, "enableZShape", null), e$4([y$6()], Ue.prototype, "enableZVertex", null), e$4([y$6()], Ue.prototype, "enableMoveGraphic", null), e$4([y$6()], Ue.prototype, "enableMidpoints", null), e$4([y$6()], Ue.prototype, "enableEdgeOffset", null), e$4([y$6()], Ue.prototype, "_labelOptions", null), e$4([y$6()], Ue.prototype, "_tooltipOptions", null), Ue = e$4([n$7("esri.views.3d.interactive.editingTools.reshapeGraphic.ReshapeOperation")], Ue);
const Ce = v$9(0, 0, null, null), Re$1 = n$a(), Fe = 1e-6;
var ze, Xe, Ze;
!function(e2) {
  e2.Vertex = u$b.Custom1, e2.Edge = u$b.Custom2;
}(ze || (ze = {})), function(e2) {
  e2[e2.NONE = 0] = "NONE", e2[e2.MOVING = 1] = "MOVING", e2[e2.RESHAPING = 2] = "RESHAPING";
}(Xe || (Xe = {})), function(e2) {
  e2[e2.ALL = 0] = "ALL", e2[e2.SELECTED_OR_ALL = 1] = "SELECTED_OR_ALL";
}(Ze || (Ze = {}));
let v = class extends n$f.EventedMixin(p$h) {
  constructor(e2) {
    super(e2), this._handles = new t$c(), this._internalGeometryUpdate = false, this.enableZShape = true, this.enableZVertex = true, this.enableMoveGraphic = true, this.enableMidpoints = true, this.enableEdgeOffset = false, this.type = "reshape-3d", this.labelOptions = new c$b(), this.tooltipOptions = new p$i(), this.snappingManager = null, this.automaticManipulatorSelection = false;
  }
  initialize() {
    const e2 = this._reshapeOperation = new Ue({ tool: this });
    this.addHandles([e2.on("reshape", (e3) => {
      e3.type === "reshape" && this._onReshapeGeometryChanged(), this.emit("reshape", e3);
    }), e2.on("move", (e3) => {
      e3.type === "move" && this._onReshapeGeometryChanged(), this.emit("move", e3);
    }), e2.on("vertex-add", (e3) => {
      this._onReshapeGeometryChanged(), this.emit("vertex-add", e3);
    }), e2.on("vertex-remove", (e3) => {
      this._onReshapeGeometryChanged(), this.emit("vertex-remove", e3);
    }), e2.on("immediate-click", (e3) => this.emit("immediate-click", e3)), this.view.on("pointer-down", ["Shift"], (e3) => {
      e3.stopPropagation();
    }), l$5(() => this.graphic, () => this._updateGraphic(), w$e)]), this.finishToolCreation();
  }
  destroy() {
    this._handles = s$c(this._handles), this._reshapeOperation = s$c(this._reshapeOperation);
  }
  get updating() {
    var _a, _b;
    return (_b = (_a = this._reshapeOperation) == null ? void 0 : _a.updating) != null ? _b : false;
  }
  _updateGeometry() {
    const e2 = m$j(this.graphic);
    this._reshapeOperation.inputGeometry = r$6(e2) ? e2.clone() : null;
  }
  _updateGraphic() {
    if (this._handles.remove("onGraphicGeometryChange"), this._updateGeometry(), l$f(this.graphic) !== P$9.SUPPORTED)
      return;
    const e2 = l$5(() => {
      var _a;
      return (_a = this.graphic) == null ? void 0 : _a.geometry;
    }, () => {
      this._internalGeometryUpdate === false && this._updateGeometry();
    }, U$6);
    this._handles.add(e2, "onGraphicGeometryChange");
  }
  onManipulatorSelectionChanged() {
    this._reshapeOperation && this._reshapeOperation.onManipulatorSelectionChanged();
  }
  _updateGeometryInternally(e2) {
    this._internalGeometryUpdate = true, this.graphic.geometry = e2, this._internalGeometryUpdate = false;
  }
  _onReshapeGeometryChanged() {
    t$7(this.graphic) || this._updateGeometryInternally(this._reshapeOperation.outputGeometry.clone());
  }
  get canUndo() {
    var _a;
    return (_a = this._reshapeOperation.canUndo) != null ? _a : false;
  }
  undo() {
    r$6(this.snappingManager) && this.snappingManager.doneSnapping(), r$6(this._reshapeOperation.undo()) && this._updateGeometryInternally(this._reshapeOperation.outputGeometry.clone());
  }
  get canRedo() {
    var _a;
    return (_a = this._reshapeOperation.canRedo) != null ? _a : false;
  }
  redo() {
    r$6(this.snappingManager) && this.snappingManager.doneSnapping(), r$6(this._reshapeOperation.redo()) && this._updateGeometryInternally(this._reshapeOperation.outputGeometry.clone());
  }
  onInputEvent(e2) {
    e2.type !== "key-down" || e2.key !== "Delete" && e2.key !== "Backspace" || this._reshapeOperation.removeSelectedVertices();
  }
  reset() {
  }
  get test() {
    return { snappingManager: this.snappingManager, reshapeOperation: this._reshapeOperation };
  }
};
e$4([y$6()], v.prototype, "_reshapeOperation", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], v.prototype, "view", void 0), e$4([y$6({ constructOnly: true })], v.prototype, "graphic", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], v.prototype, "enableZShape", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], v.prototype, "enableZVertex", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], v.prototype, "enableMoveGraphic", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], v.prototype, "enableMidpoints", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], v.prototype, "enableEdgeOffset", void 0), e$4([y$6()], v.prototype, "type", void 0), e$4([y$6({ constructOnly: true, type: c$b })], v.prototype, "labelOptions", void 0), e$4([y$6({ constructOnly: true, type: p$i })], v.prototype, "tooltipOptions", void 0), e$4([y$6({ constructOnly: true })], v.prototype, "snappingManager", void 0), e$4([y$6()], v.prototype, "updating", null), e$4([y$6()], v.prototype, "automaticManipulatorSelection", void 0), v = e$4([n$7("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshapeTool")], v);
let r$1 = class extends e$n {
  constructor(o2) {
    super(o2), this.type = "transform-rotate", this.rotationType = "geographic";
  }
};
e$4([y$6()], r$1.prototype, "type", void 0), e$4([y$6()], r$1.prototype, "rotation", void 0), e$4([y$6()], r$1.prototype, "rotationPrecision", void 0), e$4([y$6()], r$1.prototype, "orientation", void 0), e$4([y$6()], r$1.prototype, "orientationPrecision", void 0), e$4([y$6()], r$1.prototype, "rotationType", void 0), r$1 = e$4([n$7("esri.views.interactive.tooltip.TransformRotateTooltipInfo")], r$1);
let s$1 = class extends e$n {
  constructor(o2) {
    super(o2), this.type = "transform-scale", this.sizeUnit = null, this.sizePrecision = null;
  }
};
e$4([y$6()], s$1.prototype, "type", void 0), e$4([y$6()], s$1.prototype, "scale", void 0), e$4([y$6()], s$1.prototype, "size", void 0), e$4([y$6()], s$1.prototype, "sizeUnit", void 0), e$4([y$6()], s$1.prototype, "sizePrecision", void 0), s$1 = e$4([n$7("esri.views.interactive.tooltip.TransformScaleTooltipInfo")], s$1);
let p = class extends e$n {
  constructor(o2) {
    super(o2), this.type = "transform-absolute", this.orientationEnabled = true, this.orientationPrecision = null, this.rotationType = "geographic", this.sizeUnit = null, this.sizeEnabled = true, this.sizePrecision = null;
  }
};
e$4([y$6()], p.prototype, "type", void 0), e$4([y$6()], p.prototype, "orientation", void 0), e$4([y$6()], p.prototype, "orientationEnabled", void 0), e$4([y$6()], p.prototype, "orientationPrecision", void 0), e$4([y$6()], p.prototype, "rotationType", void 0), e$4([y$6()], p.prototype, "size", void 0), e$4([y$6()], p.prototype, "sizeUnit", void 0), e$4([y$6()], p.prototype, "sizeEnabled", void 0), e$4([y$6()], p.prototype, "sizePrecision", void 0), p = e$4([n$7("esri.views.interactive.tooltip.TransformAbsoluteTooltipInfo")], p);
var yt, bt;
!function(t2) {
  t2.ScaleIn = u$b.Custom2, t2.ScaleOut = u$b.Custom3, t2.RotateLeft = u$b.Custom4, t2.RotateRight = u$b.Custom5, t2.Unlocked = u$b.Custom7, t2.DelayedFocused = u$b.Custom8, t2.TouchInput = u$b.Custom12;
}(yt || (yt = {}));
class Tt {
  constructor({ adapter: t2, tooltipOptions: i2, mode: o2, tool: r2 }) {
    this._mode = null, this._handles = new t$c(), this._scaleRotateDragData = null, this._activeAnimation = null, this.events = new n$f(), this.getFocused = () => this._ringManipulator.focused, this.getScale = () => r$6(this._scaleRotateDragData) && this._scaleRotateDragData.mode === "scale" ? this._adapter.scale : 1, this.tool = r2, this._mode = o2, this._adapter = t2, this._tooltipOptions = i2, this._tooltip = new m$g({ view: r2.view }), this._createManipulator(), this._updateDragState(), this._updateManipulatorTransform(), this._handles.add(f$g(() => !this._tooltipOptions.enabled, () => this._tooltip.clear(), h$c));
  }
  get angle() {
    return this._adapter.angle;
  }
  get scale() {
    return this._adapter.scale;
  }
  set location(t2) {
    this._ringManipulator.location = t2;
  }
  set elevationAlignedLocation(t2) {
    this._ringManipulator.elevationAlignedLocation = t2;
  }
  get grabbing() {
    return this._ringManipulator.grabbing;
  }
  set interactive(t2) {
    this._ringManipulator.interactive = t2;
  }
  destroy() {
    r$6(this._activeAnimation) && (this._activeAnimation.frameTask.remove(), this._activeAnimation = null), this._handles = s$c(this._handles), this.tool.manipulators.remove(this._ringManipulator), this._ringManipulator = null, this._tooltip = s$c(this._tooltip);
  }
  startAnimation(t2) {
    this.cancelActiveAnimation(), t2.start();
    const e2 = A$h({ update: ({ deltaTime: e3 }) => {
      t2.update(e3) && this.cancelActiveAnimation();
    } });
    this._activeAnimation = __spreadProps(__spreadValues({}, t2), { frameTask: e2 });
  }
  cancelActiveAnimation() {
    r$6(this._activeAnimation) && (this._activeAnimation.frameTask.remove(), this._activeAnimation = s$c(this._activeAnimation));
  }
  forEachManipulator(t2) {
    t2(this._ringManipulator, A$5.SCALE_ROTATE);
  }
  _createManipulator() {
    const e2 = this._createRingManipulator();
    this._ringManipulator = e2, this.tool.manipulators.add(e2);
    const a2 = this.tool.graphicState.graphic, r2 = d$g(e2, (e3, r3, n2) => {
      this._scaleRotateDragData = null;
      const l2 = this._adapter.startInteraction(), c2 = { mode: "none", origin: t$b(e3.renderLocation), initialAngle: this._adapter.angle, angle: 0, angleDir: 0, scaleDir: 0 };
      this._scaleRotateDragData = c2, this._updateDragState();
      const h2 = c$6.get();
      this.tool.view.renderCoordsHelper.worldUpAtPosition(e3.renderLocation, h2), r3.next(C$2(this.tool.view, _$7(e3.renderLocation, h2, p$8()))).next((e4) => {
        const r4 = Y$2(e4.plane), n3 = z$2(e4.renderStart, e4.renderEnd, c2.origin, r4), h3 = r$k.shortestSignedDiff(c2.angle, n3);
        c2.angleDir = a$d(c2.angleDir + h3, -q$3, q$3), c2.angle = n3;
        const p2 = Rt(c2, e4), u2 = p2 - this._adapter.scale;
        if (c2.scaleDir = a$d(c2.scaleDir + u2, -m$2, m$2), this._onScaleChanged(), c2.mode === "none") {
          const t2 = this._mode || kt$1(e4, e4.plane, c2.origin, this.tool.view.state.camera);
          if (r$6(t2)) {
            switch (t2) {
              case "rotate":
                this.tool.emit("graphic-rotate-start", { graphic: a2, angle: 0 }), this.tool.emit("record-undo", { record: this._adapter.createUndoRecord() });
                break;
              case "scale":
                this.tool.emit("graphic-scale-start", { graphic: a2, xScale: 1, yScale: 1 }), this.tool.emit("record-undo", { record: this._adapter.createUndoRecord() });
            }
            c2.mode = t2;
          }
        }
        switch (c2.mode) {
          case "rotate":
            l2.state.angle = c2.initialAngle + n3;
            break;
          case "scale":
            l2.state.scale = p2, this._onScaleChanged();
        }
        switch (this._updateDragState(), this._updateManipulatorTransform(), e4.action) {
          case "start":
          case "update":
            switch (c2.mode) {
              case "rotate":
                this.tool.emit("graphic-rotate", { graphic: a2, angle: b$b(c2.angle) });
                break;
              case "scale":
                this.tool.emit("graphic-scale", { graphic: a2, xScale: p2, yScale: p2 });
            }
            break;
          case "end":
            switch (c2.mode) {
              case "rotate":
                this.tool.emit("graphic-rotate-stop", { graphic: a2, angle: b$b(c2.angle) });
                break;
              case "scale":
                this.tool.emit("graphic-scale-stop", { graphic: a2, xScale: p2, yScale: p2 });
            }
        }
        return e4.action === "end" && (this.startAnimation(wt(this, () => this._onScaleChanged())), this._scaleRotateDragData = null, this._updateDragState(), l2.done()), e4;
      }).next(this._updateTooltipPipelineStep(c2)), n2.next(() => {
        if (l2.cancel(), r$6(this._scaleRotateDragData)) {
          switch (this._scaleRotateDragData.mode) {
            case "none":
              break;
            case "rotate":
              this.tool.emit("graphic-rotate-stop", { graphic: a2, angle: 0 });
              break;
            case "scale":
              this.tool.emit("graphic-scale-stop", { graphic: a2, xScale: 1, yScale: 1 });
          }
          this.startAnimation(wt(this, () => this._onScaleChanged())), this._scaleRotateDragData = null, this._updateDragState();
        }
        this._updateFocusTooltip();
      });
    });
    this._handles.add([r2, e2.events.on("focus-changed", (t2) => {
      t2.action === "focus" ? this.startAnimation(Ot(this, () => this._updateDelayedFocusedState())) : this._updateDelayedFocusedState();
    }), e2.events.on("immediate-click", (t2) => {
      t2.stopPropagation();
    }), l$5(() => {
      var _a;
      return (_a = this.tool.graphicState) == null ? void 0 : _a.displaying;
    }, (t2) => this._ringManipulator.available = t2, h$c)]);
  }
  _updateTooltipPipelineStep(t2) {
    return (e2) => {
      const a2 = this._tooltipOptions;
      if (!a2.enabled)
        return e2;
      if (e2.action === "end")
        return this._updateFocusTooltip(), e2;
      const i2 = this._tooltip, o2 = this._tooltipOptions.visualVariables, r2 = r$6(o2) ? o2.size : null, l2 = r$6(o2) ? o2.rotation : null;
      switch (t2.mode) {
        case "scale":
          i2.info = new s$1({ tooltipOptions: a2, scale: { value: this._adapter.scale }, size: a$n(i$8(this._adapter.size, -1), "meters"), sizeUnit: r$6(r2) ? r2.unit : null, sizePrecision: r$6(r2) ? At(r2.valueType) : null });
          break;
        case "rotate": {
          const t3 = r$6(l2) ? At(l2.valueType) : null, e3 = r$6(l2) ? l2.rotationType : "geographic";
          i2.info = new r$1({ tooltipOptions: a2, rotation: c$c(i$8(-this._adapter.relativeAngle, 0), "radians", "geographic"), rotationPrecision: t3, orientation: c$c(-this._adapter.angle, "radians", "geographic"), orientationPrecision: t3, rotationType: e3 });
        }
      }
      return e2;
    };
  }
  _updateFocusTooltip() {
    if (!this._tooltipOptions.enabled)
      return;
    if (this.getFocused()) {
      const t2 = this._tooltipOptions.visualVariables, e2 = r$6(t2) ? t2.rotation : null, a2 = r$6(t2) ? t2.size : null;
      this._tooltip.info = new p({ tooltipOptions: this._tooltipOptions, orientation: c$c(-this._adapter.angle, "radians", "geographic"), orientationEnabled: this._mode == null || this._mode === "rotate", orientationPrecision: r$6(e2) ? At(e2.valueType) : null, rotationType: r$6(e2) ? e2.rotationType : "geographic", size: a$n(i$8(this._adapter.size, -1), "meters"), sizeUnit: r$6(a2) ? a2.unit : null, sizeEnabled: this._mode == null || this._mode === "scale", sizePrecision: r$6(a2) ? At(a2.valueType) : null });
    } else
      this._tooltip.clear();
  }
  _onScaleChanged() {
    this.events.emit("scale-changed"), this._updateManipulatorTransform();
  }
  _updateDelayedFocusedState() {
    this._ringManipulator.updateStateEnabled(yt.DelayedFocused, this.getFocused()), this._updateFocusTooltip();
  }
  _updateDragState() {
    if (this._ringManipulator.updateStateEnabled(yt.Unlocked, !(r$6(this._scaleRotateDragData) && this._scaleRotateDragData.mode !== "none")), r$6(this._scaleRotateDragData))
      switch (this._scaleRotateDragData.mode) {
        case "rotate":
          this._ringManipulator.updateStateEnabled(yt.ScaleIn | yt.ScaleOut, false), this._ringManipulator.updateStateEnabled(yt.RotateLeft, this._scaleRotateDragData.angleDir < 0), this._ringManipulator.updateStateEnabled(yt.RotateRight, this._scaleRotateDragData.angleDir >= 0);
          break;
        case "scale":
          this._ringManipulator.updateStateEnabled(yt.RotateLeft | yt.RotateRight, false), this._ringManipulator.updateStateEnabled(yt.ScaleIn, this._scaleRotateDragData.scaleDir < 0), this._ringManipulator.updateStateEnabled(yt.ScaleOut, this._scaleRotateDragData.scaleDir >= 0);
      }
    else
      this._ringManipulator.updateStateEnabled(yt.ScaleIn | yt.ScaleOut | yt.RotateLeft | yt.RotateRight, false);
  }
  _updateManipulatorTransform() {
    const t2 = g$8(f$e.get(), this._adapter.angle, r$a(0, 0, 1));
    if (t$7(t2))
      return;
    const e2 = this.getScale(), a2 = q$7(f$e.get(), o$9(c$6.get(), e2, e2, e2));
    this._ringManipulator.modelTransform = u$c(f$e.get(), a2, t2);
  }
  _createRingManipulator() {
    const t2 = (t3, e3, a3) => {
      const i3 = [], o3 = Math.ceil(a$3 * (e3 - t3) / (2 * Math.PI));
      for (let s3 = 0; s3 < o3 + 1; s3++) {
        const r3 = t3 + s3 * (e3 - t3) / o3;
        i3.push(r$a(a3 * Math.cos(r3), a3 * Math.sin(r3), 0));
      }
      return i3;
    }, e2 = (e3) => t2(0, 2 * Math.PI, e3), a2 = (t3) => [[-t3 / 2, 0], [t3 / 2, 0], [t3 / 2, i$2 / 2], [-t3 / 2, i$2 / 2]], i2 = (t3, e3) => k$6(a2(e3), t3, [], [], false), o2 = e2(P$2), s2 = i2(o2, l$2), r2 = { left: [], right: [] }, n2 = [];
    for (let k2 = 0; k2 < 2; k2++) {
      const e3 = k2 * Math.PI - Math.PI / 4, a3 = Math.PI / 2 - b, o3 = e3 + a3, s3 = e3 + Math.PI / 2 - a3, l3 = t2(o3, s3, p$2), c3 = i2(l3, n$2);
      n2.push(l3), n2.push(t2(o3, s3, r$3 - l$2 / 2)), r2.left.push(c3), r2.right.push(c3);
      for (let t3 = 0; t3 < 2; t3++) {
        const e4 = t3 === 0, a4 = e$8();
        if (e4) {
          i$a(a4, a4, [1, -1, 1]), f$h(a4, a4, -o3, [0, 0, 1]);
          const t4 = Math.round(g$3 * (l3.length - 1));
          a4[12] = l3[t4][0], a4[13] = l3[t4][1], a4[14] = l3[t4][2];
        } else {
          f$h(a4, a4, s3, [0, 0, 1]);
          const t4 = Math.round((1 - g$3) * (l3.length - 1));
          a4[12] = l3[t4][0], a4[13] = l3[t4][1], a4[14] = l3[t4][2];
        }
        const i3 = Z$3(s$2, 0, x$1, i$2);
        B$5(i3, a4), (e4 ? r2.left : r2.right).push(i3);
      }
    }
    const l2 = [];
    for (let D2 = 0; D2 < 2; D2++) {
      const e3 = D2 * Math.PI - Math.PI / 4, a3 = Math.PI / 2 - d$3, o3 = e3 + a3, s3 = e3 + Math.PI / 2 - a3, r3 = t2(o3, s3, r$3);
      l2.push(i2(r3, n$2));
    }
    const c2 = e2(P$2 + j$1), h2 = e2(P$2 + k$2), p2 = i2(c2, n$2), u2 = i2(h2, n$2), d2 = e2(P$2 - j$1), g2 = e2(P$2 - k$2), m2 = i2(d2, n$2), _2 = i2(g2, n$2), f2 = this._createMaterial(), M2 = this._createMaterial(0.66), y2 = this._createMaterial(0.5), b$12 = this._createMaterial(0.33);
    let T2 = [{ geometry: s2, material: f2, stateMask: yt.DelayedFocused }, { geometry: s2, material: y2, stateMask: t$h.None }];
    this._mode && this._mode !== "scale" || (T2 = T2.concat([{ geometry: l2, material: f2, stateMask: yt.DelayedFocused | yt.Unlocked }, { geometry: p2, material: M2, stateMask: yt.DelayedFocused | yt.ScaleIn }, { geometry: u2, material: b$12, stateMask: yt.DelayedFocused | yt.ScaleIn }, { geometry: m2, material: M2, stateMask: yt.DelayedFocused | yt.ScaleOut }, { geometry: _2, material: b$12, stateMask: yt.DelayedFocused | yt.ScaleOut }])), this._mode && this._mode !== "rotate" || (T2 = T2.concat([{ geometry: r2.right, material: f2, stateMask: yt.DelayedFocused | yt.Unlocked }, { geometry: r2.left, material: f2, stateMask: yt.DelayedFocused | yt.RotateLeft }, { geometry: r2.right, material: f2, stateMask: yt.DelayedFocused | yt.RotateRight }]));
    const R2 = [o2, ...n2];
    return new ie({ view: this.tool.view, renderObjects: T2, autoScaleRenderObjects: false, worldOriented: true, radius: l$2, focusMultiplier: 1, touchMultiplier: 1.5, elevationInfo: f$f(this.tool.graphicState.graphic), collisionType: { type: "ribbon", paths: R2, direction: r$a(0, 0, 1) } });
  }
  _createMaterial(t2 = 1) {
    const e2 = e$f([...t$2, t2]);
    return new m$c({ color: e2, transparent: t2 !== 1, cullFace: n$h.Back, renderOccluded: o$c.Transparent });
  }
  get test() {
    return { ringManipulator: this._ringManipulator, tooltip: this._tooltip };
  }
}
function Rt(t2, e2) {
  const a2 = e$a(c$6.get(), e2.renderStart, t2.origin), i2 = e$a(c$6.get(), e2.renderEnd, t2.origin), o2 = s$6(a2), s2 = s$6(i2);
  return o2 === 0 ? 0 : s2 / o2;
}
function kt$1(t2, e2, a2, i2) {
  const { renderStart: o2, renderEnd: s2 } = t2, r2 = jt(o2, i2, c$6.get()), n2 = jt(s2, i2, c$6.get());
  if (p$f(r2, n2) < f$1 * f$1)
    return null;
  const l2 = e$a(c$6.get(), o2, a2), c2 = _$8(c$6.get(), l2, Y$2(e2)), h2 = o2, p2 = u$7(c$6.get(), h2, c2), u2 = jt(a2, i2, c$6.get()), d2 = r2, g2 = jt(p2, i2, c$6.get()), m2 = e$a(c$6.get(), g2, d2), _2 = e$a(c$6.get(), r2, u2), f2 = p$a(d2, m2), M2 = p$a(u2, _2);
  return b$c(f2, n2) < b$c(M2, n2) ? "rotate" : "scale";
}
function jt(t2, e2, a2) {
  return e2.projectToScreen(t2, It), o$9(a2, It[0], It[1], 0);
}
function wt(t2, e2) {
  let a2 = null, i2 = 1;
  const o2 = () => i2;
  return { start: () => {
    i2 = t2.getScale(), a2 = t2.getScale, t2.getScale = o2, e2();
  }, update: (t3) => (i2 += ((i2 + 1) / 2 - i2) * Math.min(t3 * v$1, 1), e2(), Math.abs(i2 - 1) < 0.01 ? bt.STOP : bt.CONTINUE), destroy: () => {
    t2.getScale = a2, e2();
  } };
}
function Ot(t2, e2) {
  let a2 = 0, i2 = null;
  const o2 = () => false;
  return { start: () => {
    i2 = t2.getFocused, t2.getFocused = o2, a2 = 0, e2();
  }, update: (t3) => (a2 += t3, !i2() || a2 > u$2 ? bt.STOP : bt.CONTINUE), destroy: () => {
    t2.getFocused = i2, e2();
  } };
}
function At(t2) {
  switch (t2) {
    case "integer":
    case "long":
      return 0;
    default:
      return null;
  }
}
!function(t2) {
  t2[t2.CONTINUE = 0] = "CONTINUE", t2[t2.STOP = 1] = "STOP";
}(bt || (bt = {}));
const It = i$6();
function r(t2) {
  return r$6(t2.geometry) && t2.geometry.type === "mesh" ? o$1(t2.geometry) : n$1(t2);
}
function o$1(t2) {
  return r$6(t2.transform) ? m$1(t2, t2.transform) : i(t2);
}
function n$1(e2) {
  let r2 = e2.geometry, o2 = n$k;
  return { undo(e3) {
    o2 = e3.geometry, e3.geometry = r2;
  }, redo(e3) {
    r2 = e3.geometry, e3.geometry = o2;
  } };
}
function m$1(t2, r2) {
  let o2 = r2.clone(), n2 = null;
  return { undo: (r3) => {
    n2 = r$6(t2.transform) ? t2.transform.clone() : null, t2.transform = o2, r3.notifyGeometryChanged();
  }, redo: (r3) => {
    o2 = r$6(t2.transform) ? t2.transform.clone() : null, t2.transform = n2, r3.notifyGeometryChanged();
  } };
}
function i(e2) {
  let t2, r2 = e2.vertexAttributes.clonePositional();
  return { undo: (o2) => {
    t2 = e2.vertexAttributes.clonePositional(), e2.vertexAttributes = r2, o2.notifyGeometryChanged();
  }, redo: (o2) => {
    r2 = e2.vertexAttributes.clonePositional(), e2.vertexAttributes = t2, o2.notifyGeometryChanged();
  } };
}
let d$2 = class extends d$h {
  constructor(t2) {
    super(t2), this._interactionState = null;
  }
  initialize() {
    this.addHandles([f$g(() => r$6(this._interactionState) && this._interactionState.angle !== this._interactionState.previousAngle ? { interactionState: this._interactionState, angle: this._interactionState.state.angle } : null, ({ interactionState: t2 }) => {
      this._updateMeshRotation(t2);
    }, U$6), f$g(() => r$6(this._interactionState) && this._interactionState.scale !== this._interactionState.previousScale ? { interactionState: this._interactionState, scale: this._interactionState.state.scale } : null, ({ interactionState: t2 }) => {
      this._updateMeshSize(t2);
    }, U$6)]);
  }
  get angle() {
    const t2 = this.geometry.transform;
    if (t$7(t2))
      return 0;
    const e2 = g$a(t2.rotation)[2];
    return Math.abs(e2) > 0.999999 ? m$9(l$g(t2.rotation)) * Math.sign(e2) : 0;
  }
  get scale() {
    return r$6(this._interactionState) ? this._interactionState.scale : 1;
  }
  startInteraction() {
    const t2 = new y$2({ angle: this.angle });
    this._interactionState = t2;
    const e2 = () => this._interactionState = null;
    return { state: t2, done: e2, cancel: () => {
      t2.cancel(), e2();
    } };
  }
  createUndoRecord() {
    return r(this.graphic);
  }
  _updateMeshRotation(t2) {
    const e2 = this.geometry.anchor, i2 = this.viewingMode === l$8.Global, { angle: o2, previousAngle: a2 } = t2;
    this.geometry.rotate(0, 0, b$b(o2 - a2), { origin: e2, geographic: i2 }), t2.previousAngle = o2, r$6(this.geometry.transform) && this.graphic.notifyMeshTransformChanged(), this.graphic.notifyGeometryChanged();
  }
  _updateMeshSize(t2) {
    const e2 = this.geometry.anchor, i2 = this.viewingMode === l$8.Global, { scale: o2, previousScale: r2 } = t2;
    this.geometry.scale(o2 / r2, { origin: e2, geographic: i2 }), t2.previousScale = o2, r$6(this.geometry.transform) && this.graphic.notifyMeshTransformChanged(), this.graphic.notifyGeometryChanged();
  }
};
e$4([y$6({ constructOnly: true })], d$2.prototype, "graphic", void 0), e$4([y$6({ constructOnly: true })], d$2.prototype, "geometry", void 0), e$4([y$6({ constructOnly: true })], d$2.prototype, "viewingMode", void 0), e$4([y$6()], d$2.prototype, "angle", null), e$4([y$6()], d$2.prototype, "scale", null), e$4([y$6()], d$2.prototype, "_interactionState", void 0), d$2 = e$4([n$7("esri.views.3d.interactive.editingTools.transformGraphic.ScaleRotateMeshAdapter")], d$2);
let y$2 = class extends m$8 {
  constructor(t2) {
    super(t2), this.angle = 0, this.initialAngle = 0, this.previousAngle = 0, this.previousScale = 1, this.scale = 1, this.initialAngle = t2.angle, this.previousAngle = t2.angle;
  }
  get state() {
    const { angle: t2, scale: e2 } = this;
    return { angle: t2, scale: e2 };
  }
  cancel() {
    this.angle = this.initialAngle, this.scale = 1;
  }
};
e$4([y$6()], y$2.prototype, "angle", void 0), e$4([y$6()], y$2.prototype, "initialAngle", void 0), e$4([y$6()], y$2.prototype, "previousAngle", void 0), e$4([y$6()], y$2.prototype, "previousScale", void 0), e$4([y$6()], y$2.prototype, "scale", void 0), e$4([y$6()], y$2.prototype, "state", null), y$2 = e$4([n$7("InteractionState")], y$2);
let y$1 = class extends d$h {
  constructor(t2) {
    super(t2), this.sizeAxis = null, this._interactionState = null;
  }
  initialize() {
    this.addHandles(f$g(() => r$6(this._interactionState) ? this._interactionState.state : null, (t2) => {
      this._updateSymbol(t2);
    }, U$6));
  }
  get angle() {
    return r$6(this._interactionState) ? this._interactionState.angle : r$6(this._orientationReferenceSymbolLayer) ? g$2(this._orientationReferenceSymbolLayer.heading) : 0;
  }
  get scale() {
    return r$6(this._interactionState) ? this._interactionState.scale : 1;
  }
  get relativeAngle() {
    return this.angle - this.initialAngle;
  }
  get initialAngle() {
    return r$6(this._interactionState) ? this._interactionState.initialAngle : 0;
  }
  get size() {
    const t2 = this._sizeReferenceSymbolLayer;
    if (t$7(t2))
      return null;
    const e2 = this.findLayerView(), i2 = this._graphicSymbol;
    if (t$7(e2) || t$7(i2) || i2.type !== "point-3d")
      return null;
    const o2 = e2.getSymbolLayerSize(i2, t2);
    if ("size" in o2 && r$6(o2.size))
      return o2.size;
    const r2 = this.sizeAxis;
    return "width" in o2 && r$6(o2.width) && (t$7(r2) || r2 === "width" || r2 === "all" || r2 === "width-and-depth") ? o2.width : "depth" in o2 && r$6(t2.depth) && (t$7(r2) || r2 === "depth" || r2 === "all" || r2 === "width-and-depth") ? o2.depth : "height" in o2 && r$6(t2.height) && (t$7(r2) || r2 === "height" || r2 === "all") ? o2.height : null;
  }
  get _sizeReferenceSymbolLayer() {
    const t2 = this._graphicSymbol;
    return t$7(t2) || t2.symbolLayers.length === 0 ? null : t2.symbolLayers.find((t3) => t3.type === "object");
  }
  get _orientationReferenceSymbolLayer() {
    const t2 = this._graphicSymbol;
    return t$7(t2) || t2.symbolLayers.length === 0 ? null : t2.symbolLayers.find((t3) => t3.type === "object" && r$6(t3.heading));
  }
  get _graphicSymbol() {
    return r$6(this.graphic) && r$6(this.graphic.symbol) && this.graphic.symbol.type === "point-3d" ? this.graphic.symbol : null;
  }
  set _graphicSymbol(t2) {
    this.graphic.symbol = t2;
  }
  startInteraction() {
    const t2 = this._graphicSymbol, e2 = this.findLayerView();
    if (r$6(this._interactionState) || t$7(t2) || t$7(e2))
      return m;
    const i2 = t2.symbolLayers.map((i3) => i3.type === "object" ? e2.getSymbolLayerSize(t2, i3) : null).toArray(), o2 = t2.clone(), r2 = this.angle, s2 = new d$1({ originalSymbol: o2, angle: r2, initialSizes: i2 });
    this._interactionState = s2;
    const a2 = () => this._interactionState = null;
    return { state: s2, done: a2, cancel: () => {
      this._graphicSymbol = o2, a2();
    } };
  }
  createUndoRecord() {
    let t2 = this.graphic.symbol, e2 = null;
    return { undo: (i2) => {
      e2 = i2.symbol, i2.symbol = t2;
    }, redo: (i2) => {
      t2 = i2.symbol, i2.symbol = e2;
    } };
  }
  _updateSymbol({ scale: t2, angle: e2, originalSymbol: i2, initialSizes: r2 }) {
    const a2 = this._graphicSymbol;
    if (t$7(a2) || a2.type !== "point-3d")
      return;
    const c2 = a2.clone(), h2 = -b$b(e2 - this.initialAngle);
    let p2 = false;
    this._forEachObjectSymbolLayerPair(i2, c2, (e3, i3, o2) => {
      const l2 = i$8(e3.heading, 0) + h2;
      i3.heading !== l2 && (i3.heading = l2, p2 = true);
      const a3 = r2[o2];
      if (r$6(a3) && "width" in a3) {
        a3.width = this.sizeFilter(a3.width), a3.height = this.sizeFilter(a3.height), a3.depth = this.sizeFilter(a3.depth);
        const e4 = a3.width * t2;
        i3.width !== e4 && (i3.width = e4, p2 = true);
        const o3 = a3.depth * t2;
        i3.depth !== o3 && (i3.depth = o3, p2 = true);
        const r3 = a3.height * t2;
        i3.height !== r3 && (i3.height = r3, p2 = true);
      }
    }), p2 && (this._graphicSymbol = c2);
  }
  _forEachObjectSymbolLayerPair(t2, e2, i2) {
    t2.symbolLayers.forEach((t3, o2) => {
      const r2 = e2.symbolLayers.getItemAt(o2);
      t3.type === "object" && r2.type === "object" && i2(t3, r2, o2);
    });
  }
};
function g$2(t2) {
  return -m$9(t2);
}
e$4([y$6()], y$1.prototype, "angle", null), e$4([y$6()], y$1.prototype, "scale", null), e$4([y$6()], y$1.prototype, "relativeAngle", null), e$4([y$6()], y$1.prototype, "initialAngle", null), e$4([y$6()], y$1.prototype, "size", null), e$4([y$6()], y$1.prototype, "sizeAxis", void 0), e$4([y$6({ constructOnly: true })], y$1.prototype, "graphic", void 0), e$4([y$6()], y$1.prototype, "_interactionState", void 0), e$4([y$6({ constructOnly: true })], y$1.prototype, "findLayerView", void 0), e$4([y$6({ constructOnly: true })], y$1.prototype, "sizeFilter", void 0), e$4([y$6()], y$1.prototype, "_sizeReferenceSymbolLayer", null), e$4([y$6()], y$1.prototype, "_orientationReferenceSymbolLayer", null), e$4([y$6()], y$1.prototype, "_graphicSymbol", null), y$1 = e$4([n$7("esri.views.3d.interactive.editingTools.transformGraphic.ScaleRotateObjectSymbol3DAdapter")], y$1);
const m = { state: { angle: 0, scale: 0 }, done: () => {
}, cancel: () => {
} };
let d$1 = class extends m$8 {
  constructor(t2) {
    super(t2), this.angle = 0, this.initialAngle = 0, this.scale = 1, this.initialAngle = t2.angle;
  }
  get state() {
    const { originalSymbol: t2, angle: e2, initialAngle: i2, scale: o2, initialSizes: r2 } = this;
    return { originalSymbol: t2, angle: e2, initialAngle: i2, scale: o2, initialSizes: r2 };
  }
};
e$4([y$6()], d$1.prototype, "originalSymbol", void 0), e$4([y$6()], d$1.prototype, "angle", void 0), e$4([y$6()], d$1.prototype, "initialAngle", void 0), e$4([y$6()], d$1.prototype, "initialSizes", void 0), e$4([y$6()], d$1.prototype, "scale", void 0), e$4([y$6()], d$1.prototype, "state", null), d$1 = e$4([n$7("InteractionState")], d$1);
let V = class extends a$k(n$f.EventedMixin(p$h)) {
  constructor(t2) {
    super(t2), this.enableZ = true, this.enableRotation = true, this.enableScaling = true, this.tooltipOptions = new p$i(), this.type = "transform-3d", this._scaleRotate = null, this._snappingPipeline = new u$e(), this._tooltip = null;
  }
  initialize() {
    const { graphic: t2, view: e2 } = this;
    this.graphicState = new e$1({ graphic: t2 }), this.addHandles(l$5(() => this.tooltipOptions.enabled, (t3) => {
      this._tooltip = t3 ? new m$g({ view: e2 }) : s$c(this._tooltip);
    }, w$e)), this._moveManipulation = new u$1({ tool: this, view: e2, snapToScene: this.snapToScene, xyAvailable: true, xyAxisAvailable: true, zAvailable: this.enableZ && t$3(t2), radius: u$1.radiusForSymbol(t2.symbol) }), this._moveManipulation.forEachManipulator((e3) => this.handles.add(e3.events.on("immediate-click", (e4) => {
      this.emit("immediate-click", __spreadProps(__spreadValues({}, e4), { graphic: t2 })), e4.stopPropagation();
    })));
    const i2 = (t3) => (e3) => {
      this.handles.add(e3.events.on("focus-changed", ({ action: e4 }) => {
        const i3 = this._tooltip;
        t$7(i3) || (e4 === "focus" ? this._updateMoveTooltip(t3) : i3.clear());
      }));
    };
    this._moveManipulation.xyManipulation.forEachManipulator(i2(M$1.XY)), this._moveManipulation.xyAxisManipulation.forEachManipulator(i2(M$1.XY_AXIS)), this._moveManipulation.zManipulation.forEachManipulator(i2(M$1.Z)), this._moveManipulation.elevationInfo = f$f(t2);
    const r2 = t2.geometry;
    if (this._moveManipulation.createGraphicDragPipeline((i3, a2, n2, s2, p2) => (r$6(r2) && i3 === M$1.XY && (n2 = n2.next(this._snappingPipeline.createSnapDragEventPipelineStep({ snappingContext: new e$m({ elevationInfo: f$f(t2), pointer: p2, editGeometryOperations: V$8.fromGeometry(new w$c({ spatialReference: r2.spatialReference }), e2.state.viewingMode), visualizer: new _$3(), excludeFeature: t2 }), snappingManager: this.snappingManager, updatingHandles: this.updatingHandles, cancel: s2, useZ: false }), this._snappingPipeline.next)), n2 = n2.next((t3) => (this._updateMoveTooltip(i3, t3), t3))), this.graphicState, (t3) => {
      const { action: e3, graphic: i3, dxScreen: a2, dyScreen: o2 } = t3, n2 = { graphic: i3, dxScreen: a2, dyScreen: o2 };
      switch (e3) {
        case "start":
          this.emit("graphic-translate-start", n2), this.emit("record-undo", { record: this._createGeometryUndoRecord() });
          break;
        case "update":
          this.emit("graphic-translate", n2);
          break;
        case "end":
          this.emit("graphic-translate-stop", n2);
      }
    }), this._moveManipulation.angle = r$6(this._scaleRotate) ? this._scaleRotate.angle : 0, this._scaleRotateAdapter = this._createScaleRotateAdapter(), this.handles.add(l$5(() => this._scaleRotateAdapter.angle, () => this._updateMoveAngle())), this.enableScaling || this.enableRotation) {
      const t3 = this.enableScaling && this.enableRotation ? null : this.enableScaling ? "scale" : "rotate";
      this._scaleRotate = new Tt({ tool: this, mode: t3, adapter: this._scaleRotateAdapter, tooltipOptions: this.tooltipOptions }), this.handles.add(this._scaleRotate.events.on("scale-changed", () => this._onScaleChanged()));
    }
    this.handles.add([i$3({ view: this.view, graphic: this.graphic, forEachManipulator: (t3) => this._forEachManipulator(t3), onManipulatorsChanged: () => n$8() }), this.graphicState.on("changed", () => this._onGeometryChanged()), this._hideManipulatorsForGraphicState(), l$5(() => e2.scale, () => this._updateMoveAngle())]), this.handles.add(this.view.trackGraphicState(this.graphicState)), this._onGeometryChanged(), this._updateMoveAngle(), this._forEachManipulator((t3) => {
      t3 instanceof ie && this.handles.add(t3.events.on("grab-changed", () => this._updateManipulatorsInteractive()));
    }), this.finishToolCreation();
  }
  destroy() {
    this._tooltip = s$c(this._tooltip), this._moveManipulation.destroy(), this._scaleRotate = s$c(this._scaleRotate), this._scaleRotateAdapter = s$c(this._scaleRotateAdapter), this._set("view", null), this._set("graphic", null);
  }
  _updateManipulatorsInteractive() {
    t$7(this._scaleRotate) || (this._scaleRotate.interactive = !this._moveManipulation.grabbing, this._moveManipulation.interactive = !this._scaleRotate.grabbing);
  }
  _createScaleRotateAdapter() {
    return r$6(this.graphic.geometry) && this.graphic.geometry.type === "mesh" ? new d$2({ graphic: this.graphic, geometry: this.graphic.geometry, viewingMode: this.view.state.viewingMode }) : new y$1({ graphic: this.graphic, sizeFilter: (t2) => this._enforceNonZeroSize(t2), findLayerView: () => this.view.allLayerViews.find((t2) => t2.layer === this.graphic.layer), sizeAxis: r$6(this.tooltipOptions.visualVariables) && r$6(this.tooltipOptions.visualVariables.size) ? this.tooltipOptions.visualVariables.size.axis : null });
  }
  _forEachManipulator(t2) {
    this._moveManipulation.forEachManipulator(t2), r$6(this._scaleRotate) && this._scaleRotate.forEachManipulator(t2);
  }
  _hideManipulatorsForGraphicState() {
    return l$5(() => this.graphicState.displaying, (t2) => {
      this._forEachManipulator((e2) => e2.available = t2), this._moveManipulation.zManipulation.available = t2 && this.enableZ && t$3(this.graphic);
    });
  }
  _createGeometryUndoRecord() {
    return r(this.graphic);
  }
  set snapToScene(t2) {
    this._moveManipulation && (this._moveManipulation.snapToScene = t2), this._set("snapToScene", t2);
  }
  get updating() {
    return this.updatingHandles.updating;
  }
  set location(t2) {
    this._moveManipulation.location = t2, r$6(this._scaleRotate) && (this._scaleRotate.location = t2);
  }
  set elevationAlignedLocation(t2) {
    this._moveManipulation.elevationAlignedLocation = t2, r$6(this._scaleRotate) && (this._scaleRotate.elevationAlignedLocation = t2);
  }
  reset() {
  }
  onHide() {
    r$6(this._scaleRotate) && this._scaleRotate.cancelActiveAnimation();
  }
  _onScaleChanged() {
    if (t$7(this._scaleRotate))
      return;
    const t2 = this._scaleRotate.getScale();
    this._moveManipulation.displayScale = t2;
  }
  _updateMoveAngle() {
    this.view.state.viewingMode === l$8.Local || this.view.scale < w$1 ? this._moveManipulation.angle = this._scaleRotateAdapter.angle : this._moveManipulation.angle = 0;
  }
  _onGeometryChanged() {
    C$4(this.view, this, this.graphic);
  }
  _enforceNonZeroSize(t2) {
    return t2 || this.view.state.camera.computeRenderPixelSizeAt(this._moveManipulation.renderLocation);
  }
  _updateMoveTooltip(t2, e2) {
    const { tooltipOptions: i2, _tooltip: a2 } = this;
    if (t$7(a2))
      return;
    a2.clear();
    const o2 = this.graphicState.isDraped ? "on-the-ground" : "absolute-height";
    switch (t2) {
      case M$1.XY:
        a2.info = new r$j({ tooltipOptions: i2 }), this._updateMoveTooltipDistance(a2.info, e2, (t3, e3) => a$m(t3, e3, o2));
        break;
      case M$1.XY_AXIS:
        a2.info = new a$l({ tooltipOptions: i2 }), this._updateMoveTooltipDistance(a2.info, e2, (t3, i3) => {
          const a3 = a$m(t3, i3, o2);
          return y$a(a3, i$1(e2));
        });
        break;
      case M$1.Z:
        a2.info = new p$j({ tooltipOptions: i2 }), this._updateMoveTooltipDistance(a2.info, e2, v$d);
    }
  }
  _updateMoveTooltipDistance(t2, e2, i2) {
    if (r$6(e2) && e2.action !== "end") {
      const { mapStart: a2, mapEnd: n2 } = e2, s2 = i2(a2, n2);
      t2.distance = r$6(s2) ? s2 : j$9;
    }
  }
  get test() {
    return { discManipulator: this._moveManipulation.xyManipulation.test.discManipulator, zManipulator: this._moveManipulation.zManipulation.test.manipulator, ringManipulator: r$6(this._scaleRotate) ? this._scaleRotate.test.ringManipulator : null, arrowManipulators: this._moveManipulation.xyAxisManipulation.test.arrowManipulators, scaleRotateAdapter: this._scaleRotateAdapter, scaleRotateTransform: this._scaleRotate, tooltip: this._tooltip };
  }
};
e$4([y$6({ constructOnly: true, nonNullable: true })], V.prototype, "view", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], V.prototype, "graphic", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], V.prototype, "enableZ", void 0), e$4([y$6()], V.prototype, "enableRotation", void 0), e$4([y$6()], V.prototype, "enableScaling", void 0), e$4([y$6({ constructOnly: true, type: p$i })], V.prototype, "tooltipOptions", void 0), e$4([y$6()], V.prototype, "graphicState", void 0), e$4([y$6({ value: false })], V.prototype, "snapToScene", null), e$4([y$6({ constructOnly: true })], V.prototype, "snappingManager", void 0), e$4([y$6({ readOnly: true })], V.prototype, "type", void 0), e$4([y$6({ readOnly: true })], V.prototype, "updating", null), V = e$4([n$7("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")], V);
let c = class extends i$h(l$h) {
  constructor(o2) {
    super(o2), this.type = "plane", this.position = null, this.heading = 0, this.tilt = 0, this.width = 10, this.height = 10;
  }
  equals(o2) {
    return this.heading === o2.heading && this.tilt === o2.tilt && y$b(this.position, o2.position) && this.width === o2.width && this.height === o2.height;
  }
};
e$4([y$6({ readOnly: true, json: { read: false, write: true } })], c.prototype, "type", void 0), e$4([y$6({ type: w$c }), g$b()], c.prototype, "position", void 0), e$4([y$6({ type: Number, nonNullable: true, range: { min: 0, max: 360 } }), g$b(), s$e((o2) => s$f.normalize(a$o(o2), 0, true))], c.prototype, "heading", void 0), e$4([y$6({ type: Number, nonNullable: true, range: { min: 0, max: 360 } }), g$b(), s$e((o2) => s$f.normalize(a$o(o2), 0, true))], c.prototype, "tilt", void 0), e$4([y$6({ type: Number, nonNullable: true }), g$b()], c.prototype, "width", void 0), e$4([y$6({ type: Number, nonNullable: true }), g$b()], c.prototype, "height", void 0), c = e$4([n$7("esri.analysis.SlicePlane")], c);
has("mac") ? "Meta" : "Control";
const a = 2, f = 1.15, h = 1.15, k = 0.7, l = r$a(1, 0.5, 0);
e$f([...l, k]);
e$f([...l, 0.5]);
const S$1 = r$c(1, 1, 1, 1), U$1 = r$c(1, 0.8, 0.6, 1), d = r$c(1, 0.93, 0.86, 1), g$1 = e$f([...l, 1]), q = e$f([...l, 1]), w = 3, y = 11, z$1 = 22.5, A$2 = 40, B = 48, D = 2.25, E = e$f([...l, 1]), F = 4, G$1 = 1, H = 0.3, I = 6, J = 4;
function t(t2) {
  const g2 = new o$7();
  g2.extensions.add("GL_OES_standard_derivatives");
  const { vertex: l2, fragment: s2, attributes: n2, varyings: c2 } = g2;
  return v$a(l2, t2), n2.add(O$3.POSITION, "vec3"), n2.add(O$3.UV0, "vec2"), c2.add("vUV", "vec2"), l2.code.add(n$c`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`), s2.uniforms.add([new e$c("backgroundColor", (e2) => e2.backgroundColor), new e$c("gridColor", (e2) => e2.gridColor), new o$6("gridWidth", (e2) => e2.gridWidth)]), s2.code.add(n$c`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
gl_FragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`), g2;
}
const g = Object.freeze(Object.defineProperty({ __proto__: null, build: t }, Symbol.toStringTag, { value: "Module" }));
class u extends e$9 {
  initializeProgram(e2) {
    return new o$8(e2.rctx, u.shader.get().build(this.configuration), E$6);
  }
  initializePipeline() {
    return W$4({ blending: l$i(R$4.ONE, R$4.ONE, R$4.ONE_MINUS_SRC_ALPHA, R$4.ONE_MINUS_SRC_ALPHA), depthTest: { func: I$4.LESS }, colorWrite: _$6 });
  }
}
u.shader = new t$8(g, () => import("./SlicePlaneMaterial.glsl.js"));
function Bt(t2, e2) {
  return D$4(t2.basis1, t2.basis2, t2.origin, e2);
}
function qt(t2, e2, i2, n2) {
  const r2 = e2.worldUpAtPosition(t2.origin, c$6.get()), s2 = c$6.get();
  switch (i2) {
    case Re.HEADING:
      r$9(s2, r2);
      break;
    case Re.TILT:
      r$9(s2, t2.basis1);
  }
  return _$7(t2.origin, s2, n2);
}
function Jt(t2, e2, i2, n2) {
  const r2 = s$6(n2.basis1), s2 = s$6(n2.basis2), o2 = ne(n2), a2 = re(n2), d2 = o$9(c$6.get(), 0, 0, 0);
  u$7(d2, g$6(c$6.get(), n2.basis1, e2.direction[0]), g$6(c$6.get(), n2.basis2, e2.direction[1])), u$7(d2, n2.origin, d2);
  let m2 = 0, p2 = 1;
  if (se(e2))
    e2.direction[0] === 1 && e2.direction[1] === -1 ? m2 = ye : e2.direction[0] === 1 && e2.direction[1] === 1 ? m2 = Math.PI : e2.direction[0] === -1 && e2.direction[1] === 1 && (m2 = 3 * Math.PI / 2), p2 = a2;
  else {
    const t3 = e2.direction[0] !== 0 ? 1 : 2;
    m2 = t3 === 1 ? ye : 0, p2 = (t3 === 1 ? s2 : r2) - o2;
  }
  const g2 = R$6(f$e.get(), m2);
  i$a(g2, g2, o$9(c$6.get(), p2, p2, p2)), u$c(g2, i2, g2), g2[12] = 0, g2[13] = 0, g2[14] = 0, t2.modelTransform = g2, t2.renderLocation = d2;
}
function Kt(t2, e2, i2, n2) {
  const r2 = n2.worldUpAtPosition(i2.origin, c$6.get()), s2 = ee(i2, te.POSITIVE_X), o2 = R$6(f$e.get(), s2.edge * Math.PI / 2);
  b$a(o2, o2, -be(i2, r2)), u$c(o2, e2, o2), o2[12] = 0, o2[13] = 0, o2[14] = 0, t2.modelTransform = o2, t2.renderLocation = s2.position;
}
var te;
function ee(t2, e2) {
  switch (e2) {
    case te.POSITIVE_X:
      return { basis: t2.basis1, direction: 1, position: u$7(c$6.get(), t2.origin, t2.basis1), edge: e2 };
    case te.POSITIVE_Y:
      return { basis: t2.basis2, direction: 1, position: u$7(c$6.get(), t2.origin, t2.basis2), edge: e2 };
    case te.NEGATIVE_X:
      return { basis: t2.basis1, direction: -1, position: e$a(c$6.get(), t2.origin, t2.basis1), edge: e2 };
    case te.NEGATIVE_Y:
      return { basis: t2.basis2, direction: -1, position: e$a(c$6.get(), t2.origin, t2.basis2), edge: e2 };
  }
}
function ne(t2) {
  const e2 = s$6(t2.basis1), i2 = s$6(t2.basis2);
  return H * Math.min(e2, i2);
}
function re(t2) {
  return ne(t2);
}
function se(t2) {
  return t2.direction[0] !== 0 && t2.direction[1] !== 0;
}
function oe(t2, e2 = _e.CENTER_ON_ARROW) {
  const i2 = e2 === _e.CENTER_ON_CALLOUT ? A$2 : 0, n2 = [r$a(i2, 0, -B / 2), r$a(i2, 0, B / 2)], r2 = pe(n2, true), s2 = (t3, e3) => de(n2, n2, { tubeRadius: w, tipRadius: y, tipLength: z$1, tubeFocusMultiplier: f, tipFocusMultiplier: h, padding: t3, bothEnds: true, flat: null, focusTipLength: true, addCap: e3 }), o2 = s2(0, false), a2 = s2(D, true), c2 = new m$c({ color: S$1, cullFace: n$h.Back, renderOccluded: o$c.Opaque }), l2 = new m$c({ color: U$1, cullFace: n$h.Back, renderOccluded: o$c.Opaque }), u2 = new m$c({ color: d, cullFace: n$h.Back, renderOccluded: o$c.Opaque }), d$12 = new m$c({ color: q, transparent: true, writeDepth: false, cullFace: n$h.Front, renderOccluded: o$c.Transparent }), m2 = q$4([[i2, 0, 0], [i2 - A$2, 0, 0]]), p2 = q$4([[i2, 0, 0], [i2 - A$2, 0, 0]]), g2 = new F$7({ color: g$1, renderOccluded: o$c.OccludeAndTransparent });
  return new ie({ view: t2, renderObjects: [...o2.normal.map(({ part: t3, geometry: e3, transform: i3 }) => ({ geometry: e3, material: t3 === "tip" ? c2 : t3 === "cap" ? l2 : u2, transform: i3, stateMask: t$h.Unfocused | Ie })), ...a2.normal.map(({ geometry: t3, transform: e3 }) => ({ geometry: t3, material: d$12, transform: e3, stateMask: t$h.Unfocused | Ie })), { geometry: m2, material: g2, stateMask: t$h.Unfocused | Ie | Ae }, ...o2.focused.map(({ part: t3, geometry: e3, transform: i3 }) => ({ geometry: e3, material: t3 === "tip" ? c2 : t3 === "cap" ? l2 : u2, transform: i3, stateMask: t$h.Focused | Ie })), ...a2.focused.map(({ geometry: t3, transform: e3 }) => ({ geometry: t3, material: d$12, transform: e3, stateMask: t$h.Focused | Ie })), { geometry: p2, material: g2, stateMask: t$h.Focused | Ie | Ae }], autoScaleRenderObjects: false, collisionType: { type: "line", paths: [r2] }, collisionPriority: 1, radius: y, state: Ie });
}
function ue(t2, e2) {
  const i2 = se(e2), n2 = i2 ? [r$a(1, 0, 0), r$a(0, 0, 0), r$a(0, 1, 0)] : [r$a(1, 0, 0), r$a(-1, 0, 0)], r2 = q$4(n2), s2 = E, o2 = (t3) => new H$3({ color: s2, width: t3, renderOccluded: o$c.OccludeAndTransparent }), a$12 = () => new F$7({ color: s2, renderOccluded: o$c.OccludeAndTransparent }), c2 = i2 ? F : G$1, l2 = c2 * a, u2 = G$1, d2 = (t3) => t3 > 1 ? o2(t3) : a$12(), m2 = [{ geometry: r2, material: d2(c2), stateMask: t$h.Unfocused | Me }, { geometry: r2, material: d2(l2), stateMask: t$h.Focused | Me }, { geometry: r2, material: d2(u2), stateMask: Le }], p2 = new ie(__spreadValues({ view: t2, renderObjects: m2, collisionType: { type: "line", paths: [n2] }, radius: i2 ? I : J }, x$2));
  return p2.state = Me, p2;
}
function de(t2, e2, i2) {
  const n2 = (n3) => {
    const r2 = (n3 ? e2 : t2).slice(0), o2 = e$a(c$6.get(), r2[0], r2[1]);
    z$6(o2, o2);
    const a2 = e$a(c$6.get(), r2[r2.length - 1], r2[r2.length - 2]);
    if (z$6(a2, a2), i2.padding > 0) {
      const t3 = g$6(n$a(), a2, -i2.padding);
      if (r2[r2.length - 1] = u$7(t3, t3, r2[r2.length - 1]), i2.bothEnds) {
        const t4 = g$6(n$a(), o2, -i2.padding);
        r2[0] = u$7(t4, t4, r2[0]);
      }
    }
    const c2 = n3 ? i2.tipFocusMultiplier : 1, d2 = i2.tipLength * (i2.focusTipLength ? c2 : 1), T2 = i2.tipRadius * c2, E2 = r$i(f$e.get());
    if (i2.padding > 0) {
      const t3 = d2 / 4, e3 = o$9(c$6.get(), 0, t3, 0), n4 = 1 + i2.padding / t3;
      c$5(E2, E2, e3), i$a(E2, E2, o$9(c$6.get(), n4, n4, n4)), c$5(E2, E2, g$6(e3, e3, -1 / n4));
    }
    const O2 = r$i(e$8()), w2 = r$a(0, 1, 0), y2 = I$5(e$8(), Q$1(o$l.get(), w2, a2));
    y2[12] = r2[r2.length - 1][0], y2[13] = r2[r2.length - 1][1], y2[14] = r2[r2.length - 1][2], u$c(y2, y2, E2);
    const M2 = [{ part: "tube", geometry: me(i2.tubeRadius * (n3 ? i2.tubeFocusMultiplier : 1) + i2.padding, i2.flat, r2), transform: O2 }];
    let L2, C2;
    if (r$6(i2.flat) ? L2 = Z$3(d2, T2, T2, i2.flat.thickness) : (L2 = C$b(d2, T2, 24, false, false, true), C2 = C$b(d2, T2, 24, false, true, false)), M2.push({ part: "tip", geometry: L2, transform: y2 }), C2 && M2.push({ part: "cap", geometry: C2, transform: y2 }), i2.bothEnds) {
      const t3 = I$5(e$8(), Q$1(o$l.get(), w2, o2));
      t3[12] = r2[0][0], t3[13] = r2[0][1], t3[14] = r2[0][2], u$c(t3, t3, E2), M2.push({ part: "tip", geometry: L2, transform: t3 }), C2 && M2.push({ part: "cap", geometry: C2, transform: t3 });
    }
    return M2;
  };
  return { normal: n2(false), focused: n2(true) };
}
function me(t2, e2, i2) {
  const n2 = [];
  if (r$6(e2))
    n2.push([t2, e2.thickness / 2], [-t2, e2.thickness / 2], [-t2, -e2.thickness / 2], [t2, -e2.thickness / 2]);
  else {
    const e3 = 12;
    for (let i3 = 0; i3 < e3; i3++) {
      const r2 = i3 / e3 * 2 * Math.PI;
      n2.push([Math.cos(r2) * t2, Math.sin(r2) * t2]);
    }
  }
  return k$6(n2, i2, [], [], false);
}
function pe(t2, e2) {
  const i2 = e$a(n$a(), t2[t2.length - 1], t2[t2.length - 2]);
  if (z$6(i2, i2), g$6(i2, i2, z$1), u$7(i2, i2, t2[t2.length - 1]), e2) {
    const e3 = e$a(n$a(), t2[0], t2[1]);
    return z$6(e3, e3), g$6(e3, e3, z$1), u$7(e3, e3, t2[0]), [e3, ...t2, i2];
  }
  return [...t2, i2];
}
function be(t2, e2) {
  return i$i(e2, t2.basis2, t2.basis1) + ye;
}
!function(t2) {
  t2[t2.POSITIVE_X = 0] = "POSITIVE_X", t2[t2.POSITIVE_Y = 1] = "POSITIVE_Y", t2[t2.NEGATIVE_X = 2] = "NEGATIVE_X", t2[t2.NEGATIVE_Y = 3] = "NEGATIVE_Y";
}(te || (te = {}));
const Ie = u$b.Custom1;
var Re, we;
!function(t2) {
  t2[t2.HEADING = 1] = "HEADING", t2[t2.TILT = 2] = "TILT";
}(Re || (Re = {})), function(t2) {
  t2[t2.HORIZONTAL_OR_VERTICAL = 0] = "HORIZONTAL_OR_VERTICAL", t2[t2.HORIZONTAL = 1] = "HORIZONTAL", t2[t2.VERTICAL = 2] = "VERTICAL", t2[t2.TILTED = 3] = "TILTED";
}(we || (we = {}));
const Ae = u$b.Custom2;
d$a();
const ye = Math.PI / 2, Me = u$b.Custom1, Le = u$b.Custom2;
var _e;
!function(t2) {
  t2[t2.CENTER_ON_CALLOUT = 0] = "CENTER_ON_CALLOUT", t2[t2.CENTER_ON_ARROW = 1] = "CENTER_ON_ARROW";
}(_e || (_e = {}));
const A$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD/gAD/gAD/cAD/gAD/eAD/gAD/eQD/gAD/egD/gAD/ewD/gAD/fAD/gAD/fAD/gAD/fAD/fQD/fQD/fQD/fQD/fQD/fgD/jR7/mjn/mjf/p1H/plH/smf/sWb/vHr/u3n/xYz/xIv/zZz/zJv/zJr/1Kv/1Kr/06r/06n/27n/27f/4cX/4cT/59D/7dr/8uX/9u7/+/f////u2EN0AAAAM3RSTlMACBAQICAoKDAwODhAQEhIUFBYYGhweICIkJCXmJ+gp6ivsLe4uL+/wMDHx8/P19/n7/cWvjXwAAACeUlEQVR42tWX3XqiMBCGY2pbtbrUnzhhdak/lHWliJD7v7fdJ+KG5AMhh30P8zCTmS+TycDaeBoHi5Wgf4jVYvbKmRfPgSAHMX9mPRnM1tSIGHM/c2QddLp4c8wxCvYIvqROBPfbHlm/sRYC6smMNTKn3sxZAyvyYNW1v38MM/IkcPQnZHPMLtciz9P9hhqwzoLD+cnfpTIUaYinyZlBkE2YKZcMXCyN/YhsPkuFlMfWJLiwo89VMxfpJDForMCwuG+Zx7ttGO2S/w4LJ42ZURDty5M0a4dqsZAQAihQfXqWdlhnpcmdEPAI0tv2EbnsbsKmdgi6/1GN7T1XJLx5sF0P9SWABMC+co5JBE4Ge/1NTM3EGIJgjFONXCdAbeQYwhN7pRrRV20LJNIhWOczdu+xPFzIBiQ62iIsyIOTvlZUY+HXySLQaMUEeSC1CPYxENIlwk+q8e0clFAIfiKG+qpaIvod4wfU8sqvkDLda+xCCqgDaAk7uyeNqD+feFlfGCcg3Hzsk+xS7Nz1Aq4CcauhhMc0uxaqIgcFsF0J+1WQyoCN7Y9ezeCVH5LhSxmyRvsihKbK1m7LafpSpkpj6yJgtsiVBh6AX5UyCVmMbrNpcwj5/h6DPN79JjAiQAhXVeN6SZI0q5bQnn4wBiHEqpUybp1ZJzWxStVCHhKhAhVLp/Emh6trHpGLaB6yZHk7wu3Z+ChOxhwUNEmYYjpUvqJDksSHraQmJm2DdqQK6sGUObybYtpSN+8Phm3pN2xjDH33R6b0CKxAZNLvl8foD3BBnSw5e8RI+G2P8GD9wHw6YN3wkfA0R4Zz8CGCIfOCv8zM738walXuLw6nXBvPr8wvAAAAAElFTkSuQmCC";
const n = { mipmap: true, preMultiplyAlpha: true, width: 64, height: 64 };
function o(r2) {
  return r2.fromData(A$1, () => new L$6(A$1, n));
}
class s {
  constructor() {
    this._lastDragEvent = null, this.next = new G$9(), this._enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(a2) {
    if (this._enabled !== a2 && r$6(this._lastDragEvent)) {
      const t2 = __spreadProps(__spreadValues({}, this._lastDragEvent), { action: "update" });
      a2 && this._adjustScaleFactors(t2), this.next.execute(t2);
    }
    this._enabled = a2;
  }
  createDragEventPipelineStep() {
    return this._lastDragEvent = null, (t2) => (this._lastDragEvent = t2.action !== "end" ? __spreadValues({}, t2) : null, this._enabled && this._adjustScaleFactors(t2), t2);
  }
  _adjustScaleFactors(t2) {
    const e2 = se(t2.handle) ? Math.max(Math.abs(t2.factor1), Math.abs(t2.factor2)) : t2.handle.direction[0] === 0 ? Math.abs(t2.factor2) : Math.abs(t2.factor1);
    t2.factor1 = t2.factor1 < 0 ? -e2 : e2, t2.factor2 = t2.factor2 < 0 ? -e2 : e2;
  }
  get test() {
    return { _adjustScaleFactors: (t2) => this._adjustScaleFactors(t2) };
  }
}
function S(s2, o2) {
  return _(s2, o2, false);
}
function Y(s2, o2) {
  return _(s2, o2, true);
}
function _(s2, o2, i2) {
  if (s2 instanceof t$l) {
    if (s2.operation instanceof t$m)
      return z(s2.operation, o2, i2), true;
    if (s2.operation instanceof s$g)
      return P(s2.operation, o2, i2), true;
    if (s2.operation instanceof c$d)
      return U(s2.operation, o2, i2), true;
  }
  return false;
}
function z(s2, o2, i2 = false) {
  const t2 = i2 ? -1 : 1, n2 = r$a(t2 * s2.dx, t2 * s2.dy, t2 * s2.dz);
  u$7(o2.origin, o2.origin, n2);
}
function P(s2, o2, i2 = false) {
  const t2 = i2 ? -s2.angle : s2.angle;
  T$c(o2.basis1, o2.basis1, f$8, t2), T$c(o2.basis2, o2.basis2, f$8, t2);
}
function U(s2, o2, t2 = false) {
  const n2 = t2 ? 1 / s2.factor1 : s2.factor1, r2 = t2 ? 1 / s2.factor2 : s2.factor2;
  g$6(o2.basis1, o2.basis1, n2), g$6(o2.basis2, o2.basis2, r2), w$f(o2.origin, o2.origin, s2.origin, s2.axis1, n2), w$f(o2.origin, o2.origin, s2.origin, s2.axis2, r2);
}
function A(s2, o2, i2, b2) {
  b2 || (b2 = G$a());
  const f2 = r$7(t$i.get(), s2[1], -s2[0]), u2 = r$7(t$i.get(), Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), m2 = r$7(t$i.get(), Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), p2 = t$i.get();
  o2.components.forEach((o3) => o3.vertices.forEach((o4) => {
    const i3 = o4.pos;
    r$7(p2, j$a(s2, i3), j$a(f2, i3)), f$i(u2, u2, p2), M$c(m2, m2, p2);
  }));
  const I2 = 1e-6, d2 = r$7(t$i.get(), m2[0] - u2[0] < I2 ? i2 / 2 : 0, m2[1] - u2[1] < I2 ? i2 / 2 : 0);
  return o$d(u2, u2, d2), s$4(m2, m2, d2), l$6(b2.basis1, s2, (m2[0] - u2[0]) / 2), l$6(b2.basis2, f2, (m2[1] - u2[1]) / 2), r$7(b2.origin, u2[0] * s2[0] + u2[1] * f2[0], u2[0] * s2[1] + u2[1] * f2[1]), s$4(b2.origin, b2.origin, b2.basis1), s$4(b2.origin, b2.origin, b2.basis2), b2;
}
function G(s2, o2, i2, t2 = 0, n2) {
  n2 || (n2 = G$a()), o2.toRenderCoords(s2.origin, i2, n2.origin);
  const r2 = c$6.get();
  u$7(r2, s2.origin, s2.basis1), u$7(r2, r2, s2.basis2), o2.toRenderCoords(r2, i2, r2);
  const a2 = c$6.get();
  u$7(a2, s2.origin, s2.basis1), e$a(a2, a2, s2.basis2), o2.toRenderCoords(a2, i2, a2);
  const e2 = c$6.get();
  e$a(e2, s2.origin, s2.basis1), e$a(e2, e2, s2.basis2), o2.toRenderCoords(e2, i2, e2);
  const c2 = c$6.get();
  e$a(c2, s2.origin, s2.basis1), u$7(c2, c2, s2.basis2), o2.toRenderCoords(c2, i2, c2);
  const g2 = A$c(c$6.get(), r2, a2, 0.5);
  e$a(g2, g2, n2.origin);
  const f2 = A$c(c$6.get(), e2, c2, 0.5);
  e$a(f2, n2.origin, f2), A$c(n2.basis1, g2, f2, 0.5);
  const h2 = A$c(c$6.get(), c2, r2, 0.5);
  e$a(h2, h2, n2.origin);
  const l2 = A$c(c$6.get(), a2, e2, 0.5);
  e$a(l2, n2.origin, l2), A$c(n2.basis2, h2, l2, 0.5);
  const x2 = _$8(c$6.get(), n2.basis1, n2.basis2), V2 = _$8(x2, x2, n2.basis1);
  return z$6(V2, V2), g$6(n2.basis2, V2, P$7(n2.basis2, V2)), g$6(n2.basis1, n2.basis1, 1 + t2 / s$6(n2.basis1)), g$6(n2.basis2, n2.basis2, 1 + t2 / s$6(n2.basis2)), H$6(n2), n2;
}
function M(i2, t2, n2, r2) {
  const a2 = c$6.get();
  e$a(a2, e$a(a2, i2.origin, i2.basis1), i2.basis2);
  const e2 = c$6.get();
  q$9(e2, a2, i2.basis1, 2);
  const c2 = c$6.get();
  q$9(c2, e2, i2.basis2, 2);
  const g2 = c$6.get();
  q$9(g2, a2, i2.basis2, 2), a2[2] = e2[2] = c2[2] = g2[2] = t2;
  const b2 = r2 ? "on-the-ground" : "absolute-height", f2 = p$k(g$c(a2, e2, n2, b2), g$c(g2, c2, n2, b2)), u2 = p$k(g$c(e2, c2, n2, b2), g$c(a2, g2, n2, b2));
  return t$7(u2) || t$7(f2) ? null : [f2, u2];
}
let Zt = class extends n$f.EventedMixin(p$h) {
  constructor(t2) {
    super(t2), this.enableZ = true, this.enableRotation = true, this.enableScaling = true, this.tooltipOptions = new p$i(), this._preserveAspectRatio = new s(), this.grabbing = false, this.inputState = null, this.type = "transform-3d", this._handles = new t$c(), this._moveZManipulator = null, this._resizeManipulators = null, this._rotateManipulator = null, this._attachmentOrigin = null, this._outlineVisualElement = null, this._mapBounds = G$a(), this._mapBoundsStart = G$a(), this._zmax = 0, this._sizeStart = null, this._displayBounds = G$a(), this._displayBoundsStart = G$a(), this._displayBoundsMarginStart = 0, this._resizeHandles = [{ direction: [1, 0] }, { direction: [1, 1] }, { direction: [0, 1] }, { direction: [-1, 1] }, { direction: [-1, 0] }, { direction: [-1, -1] }, { direction: [0, -1] }, { direction: [1, -1] }], this._moveXYTooltipInfo = null, this._moveZTooltipInfo = null, this._rotateTooltipInfo = null, this._scaleTooltipInfo = null, this._startAngle = 0, this._endAngle = 0, this._startScale = n$9(), this._endScale = n$9();
  }
  initialize() {
    const { view: t2, graphic: e2, manipulators: i2, _handles: s2 } = this, r2 = this._graphicState = new e$1({ graphic: e2 }), n2 = e2.geometry;
    this._editGeometryOperations = V$8.fromGeometry(n2, t2.state.viewingMode), this._graphicMoveManipulation = new l$1({ tool: this, view: t2, graphicState: r2 }), this._moveZManipulator = oe(t2, _e.CENTER_ON_CALLOUT), this._moveZManipulator.state |= Ae, s2.add([this._createMoveXYGraphicDragPipeline(), l$5(() => this.enableZ, () => this._updateManipulatorAvailability(this._moveZManipulator, A$5.TRANSLATE_Z)), this._createMoveZDragPipeline()]), i2.add(this._moveZManipulator), this._resizeManipulators = this._resizeHandles.map((e3) => {
      const i3 = ue(t2, e3);
      return s2.add([l$5(() => this.enableScaling, () => this._updateManipulatorAvailability(i3, A$5.SCALE)), i3.events.on("grab-changed", (t3) => this._onResizeGrab(t3)), this._createResizeDragPipeline(i3, e3)]), i3;
    }), i2.addMany(this._resizeManipulators), this._rotateManipulatorTexture = o(t2.toolViewManager.textures), this._rotateManipulator = R$2(t2, { texture: this._rotateManipulatorTexture.texture }), s2.add([l$5(() => this.enableRotation, () => this._updateManipulatorAvailability(this._rotateManipulator, A$5.ROTATE)), this._rotateManipulator.events.on("grab-changed", (t3) => {
      this._onRotateGrab(t3);
    }), this._createRotateDragPipeline(this._rotateManipulator)]), i2.add(this._rotateManipulator), this._calculateMapBounds(), this._updateDisplayBounds();
    const p2 = i$3({ view: t2, graphic: e2, forEachManipulator: (t3) => this._forEachManipulator(t3), onManipulatorsChanged: () => n$8() });
    r$6(p2) && (this._outlineVisualElement = p2.visualElement instanceof S$3 ? p2.visualElement : null), r$6(this._outlineVisualElement) && s2.add(this._outlineVisualElement.events.on("attachment-origin-changed", () => this._updateDisplayBounds())), s2.add(p2), s2.add([r2.on("changed", () => this._onGeometryChanged()), l$5(() => r2.displaying, () => this._updateAllManipulatorAvailability()), l$5(() => r2.isDraped, () => this._graphicDrapedChanged(), h$c), t2.trackGraphicState(r2)]);
    const l2 = t2.pointsOfInterest;
    l2 && s2.add(l$5(() => l2.centerOnSurfaceFrequent.location, () => this._updateDisplayBounds()));
    const d2 = (t3) => {
      s2.add(t3.events.on("grab-changed", () => {
        this.grabbing = t3.grabbing, this._updateAllManipulatorAvailability();
      }));
    };
    this._forEachManipulator(d2);
    const u2 = (t3, i3) => {
      s2.add(t3.events.on("immediate-click", (t4) => {
        i3 === A$5.TRANSLATE_XY && this.emit("immediate-click", __spreadProps(__spreadValues({}, t4), { graphic: e2 })), t4.stopPropagation();
      }));
    };
    this._forEachManipulator(u2), this._onGeometryChanged(), this._updateAllManipulatorAvailability(), this._initializeTooltip(), this.finishToolCreation();
  }
  destroy() {
    this._mapBounds = null, this._displayBounds = null, this._rotateManipulatorTexture.release(), this._handles.destroy(), this._graphicMoveManipulation.destroy(), this._editGeometryOperations.destroy(), this._tooltip.destroy(), this._set("view", null), this._set("graphic", null);
  }
  _initializeTooltip() {
    const { _handles: t2, view: e2 } = this, i2 = this._tooltip = new m$g({ view: e2 }), a2 = () => {
      i2.info = this._getUpdatedTooltipInfo();
    };
    t2.add([this.on("graphic-translate-start", a2), this.on("graphic-translate", a2), this.on("graphic-translate-stop", () => {
      this._moveXYTooltipInfo = null, this._moveZTooltipInfo = null, this._tooltip.clear();
    }), this.on("graphic-rotate-start", (t3) => {
      this._startAngle = t3.angle, a2();
    }), this.on("graphic-rotate", (t3) => {
      this._endAngle = t3.angle, a2();
    }), this.on("graphic-rotate-stop", () => {
      this._startAngle = 0, this._endAngle = 0, a2();
    }), this.on("graphic-scale-start", (t3) => {
      r$7(this._startScale, t3.xScale, t3.yScale), r$7(this._endScale, t3.xScale, t3.yScale), a2();
    }), this.on("graphic-scale", (t3) => {
      r$7(this._endScale, t3.xScale, t3.yScale), a2();
    }), this.on("graphic-scale-stop", () => {
      r$7(this._startScale, 0, 0), r$7(this._endScale, 0, 0), a2();
    })]), this._forEachManipulator((e3) => {
      t2.add([e3.events.on("focus-changed", a2), e3.events.on("grab-changed", a2), e3.events.on("drag", (t3) => {
        t3.action === "cancel" ? this._tooltip.clear() : a2();
      })]);
    });
  }
  _getUpdatedTooltipInfo() {
    return this.tooltipOptions.enabled ? this._graphicMoveManipulation.grabbing || this._graphicMoveManipulation.dragging ? this._computeMoveXYTooltipInfo() : this._moveZManipulator.focused ? this._computeMoveZTooltipInfo() : this._rotateManipulator.focused ? this._computeRotateTooltipInfo() : this._resizeManipulators.some((t2) => t2.focused) ? this._computeScaleTooltipInfo() : null : null;
  }
  _computeMoveXYTooltipInfo() {
    return this._moveXYTooltipInfo = i$8(this._moveXYTooltipInfo, () => new r$j({ tooltipOptions: this.tooltipOptions }));
  }
  _computeMoveZTooltipInfo() {
    const t2 = this._moveZTooltipInfo = i$8(this._moveZTooltipInfo, () => new p$j({ tooltipOptions: this.tooltipOptions })), e2 = this._moveUnit;
    if (this._moveZManipulator.dragging) {
      const e3 = this._mapBoundsStart.origin, i2 = this._mapBounds.origin, a2 = D$8(e3, i2, this.view.spatialReference);
      if (t$7(a2))
        return null;
      t2.distance = a2;
    } else
      t2.distance = a$n(0, e2);
    return t2;
  }
  _computeRotateTooltipInfo() {
    const t2 = this._rotateTooltipInfo = i$8(this._rotateTooltipInfo, () => new i$j({ tooltipOptions: this.tooltipOptions }));
    return t2.angle = this._startAngle - this._endAngle, t2;
  }
  _computeScaleTooltipInfo() {
    const t2 = this.graphic.geometry;
    if (t$7(t2))
      return null;
    const e2 = this._scaleTooltipInfo = i$8(this._scaleTooltipInfo, () => new p$l({ tooltipOptions: this.tooltipOptions })), i2 = M(this._mapBounds, this._zmax, t2.spatialReference, this._graphicState.isDraped);
    return t$7(i2) ? null : (e2.xSize = i2[0], e2.ySize = i2[1], r$6(this._sizeStart) && this._resizeManipulators.some((t3) => t3.dragging) ? (e2.xScale = i2[0].value / this._sizeStart[0].value, e2.yScale = i2[1].value / this._sizeStart[1].value) : (e2.xScale = 1, e2.yScale = 1), e2);
  }
  _graphicDrapedChanged() {
    this._handles.remove(Ct), this._updateDisplayBounds(), this._graphicState.isDraped && this._handles.add(this.view.elevationProvider.on("elevation-change", (t2) => {
      r$6(this._attachmentOrigin) && w$d(t2.extent, this._attachmentOrigin.x, this._attachmentOrigin.y) && this._updateDisplayBounds();
    }), Ct);
  }
  _updateAllManipulatorAvailability() {
    this._forEachManipulator((t2, e2) => this._updateManipulatorAvailability(t2, e2));
  }
  _updateManipulatorAvailability(t2, e2) {
    const i2 = this.grabbing && !t2.grabbing;
    if (t2.interactive = !i2, t2 instanceof ie) {
      const a2 = this._graphicState.displaying, s2 = this.enableZ && t$3(this.graphic);
      switch (e2) {
        case A$5.ROTATE:
          t2.available = a2 && this.enableRotation;
          break;
        case A$5.SCALE:
          t2.available = a2 && (this.enableScaling || this.enableRotation || s2), t2.interactive = !i2 && this.enableScaling, t2.state = this.enableScaling ? Me : Le;
          break;
        case A$5.TRANSLATE_Z:
          t2.available = a2 && s2;
          break;
        default:
          t2.available = a2;
      }
    }
  }
  _forEachManipulator(t2) {
    this._graphicMoveManipulation.forEachManipulator(t2), this._resizeManipulators.forEach((e2) => t2(e2, A$5.SCALE)), t2(this._rotateManipulator, A$5.ROTATE), t2(this._moveZManipulator, A$5.TRANSLATE_Z);
  }
  get preserveAspectRatio() {
    return this._preserveAspectRatio.enabled;
  }
  set preserveAspectRatio(t2) {
    this._preserveAspectRatio.enabled = t2, this._set("preserveAspectRatio", t2);
  }
  get _moveUnit() {
    return i$8(Z$4(this.view.spatialReference), "meters");
  }
  reset() {
  }
  _onGeometryChanged() {
    this._updateDisplayBounds();
  }
  _calculateMapBounds() {
    const t2 = this.graphic.geometry, e2 = this._editGeometryOperations.data, i2 = e2.components[0].edges[0], a2 = o$d(t$i.get(), i2.leftVertex.pos, i2.rightVertex.pos);
    v$6(a2, a2);
    const s2 = i$8(N$3(this.view, this.graphic), () => t2.extent.center);
    let o2 = Xt * this.view.pixelSizeAt(s2);
    const n2 = this.view.spatialReference, p2 = t2.spatialReference;
    n2.equals(p2) || (o2 *= $(n2) / $(p2)), A(a2, e2, o2, this._mapBounds), this._updateZMax();
  }
  _updateZMax() {
    const t2 = this._editGeometryOperations.data;
    if (!t2.geometry.hasZ)
      return void (this._zmax = 0);
    const e2 = t2.coordinateHelper;
    let i2 = Number.NEGATIVE_INFINITY;
    for (const a2 of t2.components)
      for (const t3 of a2.vertices) {
        const a3 = e2.getZ(t3.pos);
        i2 = Math.max(a3, i2);
      }
    this._zmax = i2;
  }
  _updateDisplayBounds() {
    const t2 = this.graphic.geometry;
    if (t$7(t2))
      return;
    const e2 = r$6(this._outlineVisualElement) && !this._graphicState.isDraped && r$6(this._outlineVisualElement.attachmentOrigin) ? this._outlineVisualElement.attachmentOrigin : N$3(this.view, this.graphic);
    this._attachmentOrigin = i$8(e2, t2.extent.center);
    const i2 = r$6(e2) ? e2.z : m$b(this._mapBounds.origin, this.view.elevationProvider, h$d.fromElevationInfo(f$f(this.graphic)), this.view.renderCoordsHelper), a2 = X$2(this._mapBounds);
    a2.origin[2] = i2, G(a2, this.view.renderCoordsHelper, t2.spatialReference, this._displayBoundsMargin, this._displayBounds), this._updateManipulators();
  }
  get _displayBoundsMargin() {
    const t2 = this.view.pointsOfInterest, e2 = t2 ? t2.centerOnSurfaceFrequent.location : this._editGeometryOperations.data.geometry.extent.center;
    return kt * this.view.pixelSizeAt(e2);
  }
  _createMoveXYGraphicDragPipeline() {
    return this._graphicMoveManipulation.createDragPipeline((t2, e2, i2) => this._applyGraphicMoveSteps(e2, i2, M$1.XY));
  }
  _createMoveZDragPipeline() {
    const t2 = this.view, e2 = this._editGeometryOperations.data.spatialReference;
    return d$g(this._moveZManipulator, (i2, a2, s2) => {
      const o2 = t$b(i2.renderLocation), r2 = a2.next(G$2(t2, o2, e2)).next(U$4());
      this._applyGraphicMoveSteps(r2, s2, M$1.Z);
    });
  }
  _applyGraphicMoveSteps(t2, e2, i2) {
    const a2 = t2.next((t3) => (t3.action === "start" && (this.inputState = { type: "move" }, this._updateOperationStartProperties(), this.emit("graphic-translate-start", { graphic: this.graphic, dxScreen: t3.screenDeltaX, dyScreen: t3.screenDeltaY })), t3)).next(P$8()).next(this._moveDragUpdateGeometry()).next((t3) => {
      const e3 = { graphic: this.graphic, dxScreen: t3.screenDeltaX, dyScreen: t3.screenDeltaY };
      switch (t3.action) {
        case "start":
        case "update":
          (t3.mapEnd.x - t3.mapStart.x || t3.mapEnd.y - t3.mapStart.y || t3.mapEnd.z - t3.mapStart.z) && this.emit("graphic-translate", e3);
          break;
        case "end":
          this.inputState = null, this.emit("graphic-translate-stop", e3);
      }
      return t3;
    }).next((t3) => this._updateMoveTooltip(t3, i2));
    return e2.next(() => {
      r$6(this.inputState) && this.emit("graphic-translate-stop", { graphic: this.graphic, dxScreen: 0, dyScreen: 0 }), this._cancel();
    }), a2;
  }
  _updateOperationStartProperties() {
    X$2(this._displayBounds, this._displayBoundsStart), X$2(this._mapBounds, this._mapBoundsStart), t$7(this.graphic.geometry) ? this._sizeStart = null : this._sizeStart = M(this._mapBoundsStart, this._zmax, this.graphic.geometry.spatialReference, this._graphicState.isDraped);
  }
  _moveDragUpdateGeometry() {
    return (t2) => {
      if (t$7(this.inputState) || this.inputState.type !== "move")
        return t2;
      const e2 = [];
      for (const s2 of this._editGeometryOperations.data.components)
        e2.push(...s2.vertices);
      const i2 = t2.action === "start" ? E$c.NEW_STEP : E$c.ACCUMULATE_STEPS, a2 = this._editGeometryOperations.moveVertices(e2, t2.mapDeltaX, t2.mapDeltaY, t2.mapDeltaZ, i2);
      return S(a2, this._mapBounds), this.graphic.geometry = this._editGeometryOperations.data.geometry, t2;
    };
  }
  _updateMoveTooltip(t2, e2) {
    if (e2 === M$1.XY || e2 === M$1.XY_AXIS) {
      const e3 = a$m(t2.mapStart, t2.mapEnd, this._graphicState.isDraped ? "on-the-ground" : "absolute-height");
      r$6(e3) && r$6(this._moveXYTooltipInfo) && (this._moveXYTooltipInfo.distance = e3);
    }
    return t2;
  }
  _onResizeGrab(t2) {
    if (t2.action !== "start")
      return;
    const e2 = this._calculatePickRay(t2.screenPoint);
    q$6(this._displayBounds.plane, e2, c$6.get()) && (this._updateOperationStartProperties(), this._displayBoundsMarginStart = this._displayBoundsMargin, this.inputState = { type: "resize" });
  }
  _createResizeDragPipeline(t2, e2) {
    return d$g(t2, (t3, i2, a2) => {
      t$7(this.inputState) || (i2.next((t4) => (t4.action === "start" && this.emit("graphic-scale-start", { graphic: this.graphic, xScale: 1, yScale: 1 }), t4)).next(C$2(this.view, this._displayBoundsStart.plane)).next((t4) => __spreadProps(__spreadValues({}, t4), { handle: e2 })).next(this._resizeDragRenderPlaneToFactors()).next(this._preserveAspectRatio.createDragEventPipelineStep(), this._preserveAspectRatio.next).next(this._resizeDragUpdateGeometry()).next((t4) => {
        const e3 = { graphic: this.graphic, xScale: t4.factor1, yScale: t4.factor2 };
        switch (t4.action) {
          case "start":
          case "update":
            this.emit("graphic-scale", e3);
            break;
          case "end":
            this.inputState = null, this.emit("graphic-scale-stop", e3);
        }
        return t4;
      }), a2.next(() => {
        r$6(this.inputState) && this.emit("graphic-scale-stop", { graphic: this.graphic, xScale: 1, yScale: 1 }), this._cancel();
      }));
    });
  }
  _resizeDragRenderPlaneToFactors() {
    return (t2) => {
      const e2 = this._displayBoundsStart, i2 = t2.handle.direction, a2 = this._displayBoundsMargin, s2 = this._displayBoundsMarginStart, o2 = r$9(c$6.get(), e2.origin);
      q$9(o2, o2, e2.basis1, -i2[0]), q$9(o2, o2, e2.basis2, -i2[1]);
      const r2 = e$a(c$6.get(), t2.renderEnd, o2), n2 = e$a(c$6.get(), t2.renderStart, o2), p2 = se(t2.handle), l2 = re(e2), h2 = re(this._displayBounds) / l2, c2 = (t3, e3) => {
        if (t3 === 0)
          return 1;
        let i3 = s$6(e3), o3 = 0.5 * t3 * P$7(e3, r2) / i3;
        const l3 = o3 < 0 ? -1 : 1;
        if (p2) {
          o3 += (i3 - 0.5 * t3 * P$7(e3, n2) / i3) * l3 * h2;
        }
        const c3 = i3 < 1.5 * s2 ? 1 : Yt;
        return i3 = Math.max(i3 - s2, Yt), l3 > 0 && (o3 -= a2), l3 * Math.max(l3 * (o3 / i3), c3);
      };
      return __spreadProps(__spreadValues({}, t2), { factor1: c2(i2[0], e2.basis1), factor2: c2(i2[1], e2.basis2) });
    };
  }
  _resizeDragUpdateGeometry() {
    return (t2) => {
      const e2 = r$9(n$a(), this._mapBoundsStart.origin);
      q$9(e2, e2, this._mapBoundsStart.basis1, -t2.handle.direction[0]), q$9(e2, e2, this._mapBoundsStart.basis2, -t2.handle.direction[1]);
      const i2 = r$7(n$9(), this._mapBoundsStart.basis1[0], this._mapBoundsStart.basis1[1]);
      v$6(i2, i2);
      const a2 = [];
      for (const r2 of this._editGeometryOperations.data.components)
        a2.push(...r2.vertices);
      const s2 = t2.action === "start" ? E$c.NEW_STEP : E$c.ACCUMULATE_STEPS, o2 = this._editGeometryOperations.scaleVertices(a2, e2, i2, t2.factor1, t2.factor2, s2, e$o.REPLACE);
      return X$2(this._mapBoundsStart, this._mapBounds), S(o2, this._mapBounds), this.graphic.geometry = this._editGeometryOperations.data.geometry, t2;
    };
  }
  _onRotateGrab(t2) {
    if (t2.action !== "start")
      return;
    const e2 = qt(this._displayBounds, this.view.renderCoordsHelper, Re.HEADING, p$8()), i2 = this._calculatePickRay(t2.screenPoint);
    q$6(e2, i2, c$6.get()) && (this._updateOperationStartProperties(), this.inputState = { type: "rotate", rotatePlane: e2 });
  }
  _createRotateDragPipeline(t2) {
    return d$g(t2, (t3, e2, i2) => {
      const a2 = this.inputState;
      t$7(a2) || (e2.next((t4) => (t4.action === "start" && this.emit("graphic-rotate-start", { graphic: this.graphic, angle: 0 }), t4)).next(C$2(this.view, a2.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a2)).next(this._rotateDragUpdateGeometry()).next((t4) => {
        const e3 = { graphic: this.graphic, angle: b$b(t4.rotateAngle) };
        switch (t4.action) {
          case "start":
          case "update":
            this.emit("graphic-rotate", e3);
            break;
          case "end":
            this.inputState = null, this.emit("graphic-rotate-stop", e3);
        }
        return t4;
      }), i2.next(() => {
        r$6(this.inputState) && this.emit("graphic-rotate-stop", { graphic: this.graphic, angle: 0 }), this._cancel();
      }));
    });
  }
  _rotateDragRenderPlaneToRotate(t2) {
    return (e2) => {
      const i2 = Y$2(t2.rotatePlane), a2 = z$2(e2.renderStart, e2.renderEnd, this._displayBounds.origin, i2);
      return __spreadProps(__spreadValues({}, e2), { rotateAxis: i2, rotateAngle: a2 });
    };
  }
  _rotateDragUpdateGeometry() {
    return (t2) => {
      const e2 = r$9(n$a(), this._mapBoundsStart.origin), i2 = [];
      for (const o2 of this._editGeometryOperations.data.components)
        i2.push(...o2.vertices);
      const a2 = t2.action === "start" ? E$c.NEW_STEP : E$c.ACCUMULATE_STEPS, s2 = this._editGeometryOperations.rotateVertices(i2, e2, t2.rotateAngle, a2, e$o.REPLACE);
      return X$2(this._mapBoundsStart, this._mapBounds), S(s2, this._mapBounds), this.graphic.geometry = this._editGeometryOperations.data.geometry, t2;
    };
  }
  _calculatePickRay(t2) {
    const e2 = d$a(), i2 = d$e(t2);
    return s$3(this.view.state.camera, i2, e2), z$6(e2.direction, e2.direction), e2;
  }
  _updateManipulators() {
    if (!this.visible)
      return;
    const t2 = Bt(this._displayBounds, f$e.get());
    Kt(this._rotateManipulator, t2, this._displayBounds, this.view.renderCoordsHelper), this._updateZMoveHandle(this._moveZManipulator, t2), this._resizeManipulators.forEach((e2, i2) => {
      Jt(e2, this._resizeHandles[i2], t2, this._displayBounds);
    });
  }
  _updateZMoveHandle(t2, e2) {
    const i2 = this._displayBounds, a2 = { basis: i2.basis1, direction: -1, position: e$a(c$6.get(), i2.origin, i2.basis1), edge: 2 }, s2 = f$e.get();
    m$k(s2, e2, a2.edge * Math.PI / 2), s2[12] = 0, s2[13] = 0, s2[14] = 0, t2.modelTransform = s2, t2.renderLocation = a2.position;
  }
  _cancel() {
    const t2 = this._editGeometryOperations.lastOperation;
    t$7(t2) || (this._editGeometryOperations.undo(), this.graphic.geometry = this._editGeometryOperations.data.geometry, Y(t2, this._mapBounds), this._updateDisplayBounds(), this.inputState = null);
  }
  get canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  undo() {
    if (r$6(this.inputState))
      this.view.activeTool = null;
    else if (this.canUndo) {
      const t2 = this._editGeometryOperations.undo();
      this.graphic.geometry = this._editGeometryOperations.data.geometry, Y(e$d(t2), this._mapBounds), this._updateDisplayBounds();
    }
  }
  get canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  redo() {
    if (this.canRedo) {
      const t2 = this._editGeometryOperations.redo();
      this.graphic.geometry = this._editGeometryOperations.data.geometry, S(e$d(t2), this._mapBounds), this._updateDisplayBounds();
    }
  }
  get test() {
    return { resizeManipulators: this._resizeManipulators, rotateManipulator: this._rotateManipulator, moveZManipulator: this._moveZManipulator, tooltip: this._tooltip };
  }
};
e$4([y$6({ constructOnly: true, nonNullable: true })], Zt.prototype, "view", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], Zt.prototype, "graphic", void 0), e$4([y$6({ constructOnly: true, nonNullable: true })], Zt.prototype, "enableZ", void 0), e$4([y$6()], Zt.prototype, "enableRotation", void 0), e$4([y$6()], Zt.prototype, "enableScaling", void 0), e$4([y$6({ constructOnly: true, type: p$i })], Zt.prototype, "tooltipOptions", void 0), e$4([y$6()], Zt.prototype, "preserveAspectRatio", null), e$4([y$6()], Zt.prototype, "grabbing", void 0), e$4([y$6()], Zt.prototype, "inputState", void 0), e$4([y$6({ readOnly: true })], Zt.prototype, "type", void 0), e$4([y$6()], Zt.prototype, "_moveUnit", null), Zt = e$4([n$7("esri.views.3d.interactive.editingTools.graphicTransform3D.ExtentTransformTool")], Zt);
const Ct = "draped-elevation-changes", kt = 10, Xt = 80, Yt = 1e-6;
var editingTools = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get DrawGraphicTool3D() {
    return T$4;
  },
  get GraphicMoveTool() {
    return B$1;
  },
  get GraphicReshapeTool() {
    return v;
  },
  get GraphicTransformTool() {
    return V;
  },
  get ExtentTransformTool() {
    return Zt;
  }
});
export { A$9 as A, C$7 as C, editingTools as e, f$2 as f, t, v$5 as v, w$5 as w };
