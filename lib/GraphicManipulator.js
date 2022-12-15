import { N as e, O as y, P as n, al as m, a8 as n$1, fI as l, ci as x, a2 as t, C as r, ad as l$1, dC as U, fJ as J, aG as An, u as rn, fK as u, cy as d, bp as b, cW as gn, aR as x$1, a1 as n$2, bx as i } from "./index.js";
import { o } from "./drapedUtils.js";
let C = class extends m {
  constructor(e2) {
    super(e2), this.layer = null, this.interactive = true, this.selectable = false, this.grabbable = true, this.dragging = false, this.cursor = null, this.events = new n$1.EventEmitter(), this._circleCollisionCache = null, this._graphicSymbolChangedHandle = null, this._originalSymbol = null;
  }
  set graphic(e2) {
    this._circleCollisionCache = null, this._originalSymbol = e2.symbol, this._set("graphic", e2), this.attachSymbolChanged();
  }
  get elevationInfo() {
    const e2 = "elevationInfo" in this.graphic.layer && this.graphic.layer.elevationInfo, t2 = l(this.graphic), i2 = e2 ? e2.offset : 0;
    return new x({ mode: t2, offset: i2 });
  }
  set focusedSymbol(e2) {
    e2 !== this._get("focusedSymbol") && (this._set("focusedSymbol", e2), this._updateGraphicSymbol(), this._circleCollisionCache = null);
  }
  grabbableForEvent() {
    return true;
  }
  set grabbing(e2) {
    e2 !== this._get("grabbing") && (this._set("grabbing", e2), this._updateGraphicSymbol());
  }
  set hovering(e2) {
    e2 !== this._get("hovering") && (this._set("hovering", e2), this._updateGraphicSymbol());
  }
  set selected(e2) {
    e2 !== this._get("selected") && (this._set("selected", e2), this._updateGraphicSymbol(), this.events.emit("select-changed", { action: e2 ? "select" : "deselect" }));
  }
  get _focused() {
    return this._get("hovering") || this._get("grabbing");
  }
  destroy() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), this._set("view", null);
  }
  intersectionDistance(e2) {
    const t$1 = this.graphic;
    if (t$1.visible === false)
      return null;
    const i2 = t$1.geometry;
    if (t(i2))
      return null;
    const r$1 = this._get("focusedSymbol"), l2 = r(r$1) ? r$1 : t$1.symbol;
    return this.view.type === "2d" ? this._intersectDistance2D(this.view, e2, i2, l2) : this._intersectDistance3D(this.view, e2, t$1);
  }
  attach() {
    this.attachSymbolChanged(), r(this.layer) && this.layer.add(this.graphic);
  }
  detach() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), r(this.layer) && this.layer.remove(this.graphic);
  }
  attachSymbolChanged() {
    this.detachSymbolChanged(), this._graphicSymbolChangedHandle = l$1(() => {
      var _a;
      return (_a = this.graphic) == null ? void 0 : _a.symbol;
    }, (e2) => {
      r(e2) && e2 !== this.focusedSymbol && e2 !== this._originalSymbol && (this._originalSymbol = e2, this._focused && r(this.focusedSymbol) && (this.graphic.symbol = this.focusedSymbol));
    }, U);
  }
  detachSymbolChanged() {
    r(this._graphicSymbolChangedHandle) && (this._graphicSymbolChangedHandle.remove(), this._graphicSymbolChangedHandle = null);
  }
  _updateGraphicSymbol() {
    this.graphic.symbol = this._focused && r(this.focusedSymbol) ? this.focusedSymbol : this._originalSymbol;
  }
  _resetGraphicSymbol() {
    this.graphic.symbol = this._originalSymbol;
  }
  _intersectDistance2D(e2, t$1, i2, r$1) {
    if (r$1 = r$1 || J(i2), t(r$1))
      return null;
    const l2 = 1;
    let c = this._circleCollisionCache;
    if (i2.type !== "point" || r$1.type !== "simple-marker")
      return o(t$1, i2, e2) ? l2 : null;
    if (t(c) || !c.originalPoint.equals(i2)) {
      const t2 = i2, o2 = e2.spatialReference;
      if (An(t2.spatialReference, o2)) {
        const e3 = rn(t2, o2);
        c = { originalPoint: t2.clone(), mapPoint: e3, radiusPx: u(r$1.size) }, this._circleCollisionCache = c;
      }
    }
    if (r(c)) {
      const i3 = d(t$1, D), o2 = e2.toScreen(c.mapPoint), s = c.radiusPx, h = o2.x + u(r$1.xoffset), p = o2.y - u(r$1.yoffset);
      return b(i3, [h, p]) < s * s ? l2 : null;
    }
    return null;
  }
  _intersectDistance3D(e2, t2, i2) {
    const o2 = e2.toMap(t2, { include: [i2] });
    return o2 && gn(o2, j, e2.renderSpatialReference) ? x$1(j, e2.state.camera.eye) : null;
  }
};
e([y({ constructOnly: true, nonNullable: true })], C.prototype, "graphic", null), e([y()], C.prototype, "elevationInfo", null), e([y({ constructOnly: true, nonNullable: true })], C.prototype, "view", void 0), e([y({ value: null })], C.prototype, "focusedSymbol", null), e([y({ constructOnly: true })], C.prototype, "layer", void 0), e([y()], C.prototype, "interactive", void 0), e([y()], C.prototype, "selectable", void 0), e([y()], C.prototype, "grabbable", void 0), e([y({ value: false })], C.prototype, "grabbing", null), e([y()], C.prototype, "dragging", void 0), e([y()], C.prototype, "hovering", null), e([y({ value: false })], C.prototype, "selected", null), e([y()], C.prototype, "cursor", void 0), C = e([n("esri.views.interactive.GraphicManipulator")], C);
const j = n$2(), D = i();
export { C };
