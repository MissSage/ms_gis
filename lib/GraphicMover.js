import { c as e$1, f as y, h as n$1, cY as d, hN as n$2, hO as e$2, F as n$3, bp as t$1, K as h$2, hP as e$3, L as l$1, cK as f, s as s$1, hQ as n$4, hR as s$2, o as y$1, x as t$2, y as y$2, hS as m, hT as S$1, hU as P$1, r as r$1 } from "./index.js";
import { C } from "./GraphicManipulator.js";
let l = class extends d {
  constructor(r2) {
    super(r2), this.view = null;
  }
  get count() {
    return this.handles.size;
  }
  add(r2) {
    const e2 = Array.isArray(r2) ? r2 : [r2];
    r2 != null && e2 && e2.length && e2.forEach((r3) => this._highlight(r3));
  }
  remove(r2) {
    const e2 = Array.isArray(r2) ? r2 : [r2];
    r2 != null && e2 && e2.length && e2.forEach((r3) => this._unhighlight(r3));
  }
  removeAll() {
    this.handles.removeAll();
  }
  _highlight(r2) {
    const e2 = n$2(this.view, r2.layer);
    e$2(e2) && this.handles.add(e2.highlight(r2), `feature-${r2.getObjectId()}`);
  }
  _unhighlight(r2) {
    r2 && this.handles.remove(`feature-${r2.getObjectId()}`);
  }
};
e$1([y({ readOnly: true })], l.prototype, "count", null), e$1([y()], l.prototype, "view", void 0), e$1([y()], l.prototype, "add", null), l = e$1([n$1("esri.views.draw.support.HighlightHelper")], l);
const h$1 = l;
class t {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-click";
  }
}
class i {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-double-click";
  }
}
class s {
  constructor(t2, i2, s2, h2, e2, r2, c2, a2, n2, p) {
    this.graphic = t2, this.allGraphics = i2, this.index = s2, this.x = h2, this.y = e2, this.dx = r2, this.dy = c2, this.totalDx = a2, this.totalDy = n2, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move-start";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class h {
  constructor(t2, i2, s2, h2, e2, r2, c2, a2, n2, p) {
    this.graphic = t2, this.allGraphics = i2, this.index = s2, this.x = h2, this.y = e2, this.dx = r2, this.dy = c2, this.totalDx = a2, this.totalDy = n2, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class e {
  constructor(t2, i2, s2, h2, e2, r2, c2, a2, n2, p) {
    this.graphic = t2, this.allGraphics = i2, this.index = s2, this.x = h2, this.y = e2, this.dx = r2, this.dy = c2, this.totalDx = a2, this.totalDy = n2, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move-stop";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class r {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-over";
  }
}
class c {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-out";
  }
}
class a {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-down";
  }
}
class n {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-up";
  }
}
const P = "indicator-symbols";
let S = class extends n$3.EventedAccessor {
  constructor(i2) {
    super(i2), this._activeGraphic = null, this._dragEvent = null, this._handles = new t$1(), this._hoverGraphic = null, this._indicators = [], this._initialDragGeometry = null, this._viewHandles = new t$1(), this._manipulators = [], this._layerViews = null, this.type = "graphic-mover", this.callbacks = { onGraphicClick() {
    }, onGraphicDoubleClick() {
    }, onGraphicMoveStart() {
    }, onGraphicMove() {
    }, onGraphicMoveStop() {
    }, onGraphicPointerOver() {
    }, onGraphicPointerOut() {
    }, onGraphicPointerDown() {
    }, onGraphicPointerUp() {
    } }, this.enableMoveAllGraphics = false, this.graphics = [], this.indicatorsEnabled = false, this.layer = new h$2({ listMode: "hide", internal: true, title: "GraphicMover highlight layer" }), this.view = null;
  }
  initialize() {
    e$3(this.view, this.layer), this._highlightHelper = new h$1({ view: this.view }), this.refresh(), this._handles.add([l$1(() => {
      var _a;
      return [this.graphics, (_a = this.graphics) == null ? void 0 : _a.length];
    }, () => this.refresh()), f(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.ready;
    }, () => {
      this._viewHandles.add([this.view.on("immediate-click", (i2) => this._clickHandler(i2), P$1.TOOL), this.view.on("double-click", (i2) => this._doubleClickHandler(i2), P$1.TOOL), this.view.on("pointer-down", (i2) => this._pointerDownHandler(i2), P$1.TOOL), this.view.on("pointer-move", (i2) => this._pointerMoveHandler(i2), P$1.TOOL), this.view.on("pointer-up", (i2) => this._pointerUpHandler(i2), P$1.TOOL), this.view.on("drag", (i2) => this._dragHandler(i2), P$1.TOOL), this.view.on("key-down", (i2) => this._keyDownHandler(i2), P$1.TOOL)]);
    }, { once: true, initial: true }), l$1(() => this.view, (i2) => {
      this._highlightHelper.removeAll(), this._highlightHelper.view = i2;
    })]);
  }
  destroy() {
    var _a;
    this._removeIndicators(), (_a = this.view.map) == null ? void 0 : _a.remove(this.layer), this.layer.destroy(), this.reset(), this._manipulators.forEach((i2) => i2.destroy()), this._manipulators = null, this._handles = s$1(this._handles), this._viewHandles = s$1(this._viewHandles);
  }
  set highlightsEnabled(i2) {
    var _a, _b;
    (_a = this._highlightHelper) == null ? void 0 : _a.removeAll(), this._set("highlightsEnabled", i2), i2 && ((_b = this._highlightHelper) == null ? void 0 : _b.add(this.graphics));
  }
  get state() {
    const i2 = !!this.get("view.ready"), t2 = !!this.get("graphics.length"), e2 = this._activeGraphic;
    return i2 && t2 ? e2 ? "moving" : "active" : i2 ? "ready" : "disabled";
  }
  refresh() {
    this.reset(), this._setup();
  }
  reset() {
    this._activeGraphic = null, this._hoverGraphic = null, this._dragEvent = null, this._highlightHelper.removeAll();
  }
  updateGeometry(i2, t2) {
    const e2 = this.graphics[i2];
    e2 && (e2.set("geometry", t2), this._setUpIndicators());
  }
  _setup() {
    this._setUpHighlights(), this._setUpIndicators(), this._setUpManipulators(), this._syncLayerViews();
  }
  _clickHandler(i2) {
    const t$12 = this._findTargetGraphic(n$4(i2));
    if (t$12) {
      const e2 = new t(t$12, this.graphics.indexOf(t$12), i2.x, i2.y, i2);
      this.emit("graphic-click", e2), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e2);
    }
  }
  _doubleClickHandler(i$1) {
    const t2 = this._findTargetGraphic(n$4(i$1));
    if (t2) {
      const e2 = new i(t2, this.graphics.indexOf(t2), i$1.x, i$1.y, i$1);
      this.emit("graphic-double-click", e2), this.callbacks.onGraphicDoubleClick && this.callbacks.onGraphicDoubleClick(e2);
    }
  }
  _pointerDownHandler(i2) {
    const t2 = this._findTargetGraphic(n$4(i2));
    if (t2) {
      this._activeGraphic = t2;
      const { x: e2, y: s2 } = i2, r2 = new a(t2, this.graphics.indexOf(t2), e2, s2, i2);
      this.emit("graphic-pointer-down", r2), this.callbacks.onGraphicPointerDown && this.callbacks.onGraphicPointerDown(r2);
    } else
      this._activeGraphic = null;
  }
  _pointerUpHandler(i2) {
    if (this._activeGraphic) {
      const { x: t2, y: e2 } = i2, s2 = this.graphics.indexOf(this._activeGraphic), r2 = new n(this._activeGraphic, s2, t2, e2, i2);
      this.emit("graphic-pointer-up", r2), this.callbacks.onGraphicPointerUp && this.callbacks.onGraphicPointerUp(r2);
    }
  }
  _pointerMoveHandler(i2) {
    if (this._dragEvent)
      return;
    const t2 = this._findTargetGraphic(n$4(i2));
    if (t2) {
      const { x: e2, y: s2 } = i2;
      if (this._hoverGraphic) {
        if (this._hoverGraphic === t2)
          return;
        const r2 = this.graphics.indexOf(this._hoverGraphic), h3 = new c(this.graphics[r2], r2, e2, s2, i2);
        this._hoverGraphic = null, this.emit("graphic-pointer-out", h3), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(h3);
      }
      const r$12 = this.graphics.indexOf(t2), h2 = new r(t2, r$12, e2, s2, i2);
      return this._hoverGraphic = t2, this.emit("graphic-pointer-over", h2), void (this.callbacks.onGraphicPointerOver && this.callbacks.onGraphicPointerOver(h2));
    }
    if (this._hoverGraphic) {
      const { x: t3, y: e2 } = i2, s2 = this.graphics.indexOf(this._hoverGraphic), r2 = new c(this.graphics[s2], s2, t3, e2, i2);
      this._hoverGraphic = null, this.emit("graphic-pointer-out", r2), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(r2);
    }
  }
  _dragHandler(i2) {
    if (i2.action !== "start" && !this._dragEvent || !this._activeGraphic || !this._activeGraphic.geometry)
      return;
    i2.action === "start" && this._removeIndicators(), i2.stopPropagation();
    const { action: t2, x: e$12, y: r2 } = i2, h$12 = this.graphics.indexOf(this._activeGraphic), a2 = this._dragEvent ? e$12 - this._dragEvent.x : 0, o = this._dragEvent ? r2 - this._dragEvent.y : 0, c2 = e$12 - i2.origin.x, n2 = r2 - i2.origin.y, l2 = t2 === "start" ? this._activeGraphic.geometry : this._initialDragGeometry, p = s$2(l2, c2, n2, this.view);
    if (this._activeGraphic.geometry = p, this.enableMoveAllGraphics && this.graphics.forEach((i3) => {
      i3 !== this._activeGraphic && (i3.geometry = s$2(i3.geometry, a2, o, this.view));
    }), this._dragEvent = i2, t2 === "start") {
      this._initialDragGeometry = y$1(l2);
      const t3 = new s(this._activeGraphic, this.graphics, h$12, e$12, r2, a2, o, c2, n2, i2);
      this.emit("graphic-move-start", t3), this.callbacks.onGraphicMoveStart && this.callbacks.onGraphicMoveStart(t3), t3.defaultPrevented && this._activeGraphic.set("geometry", l2);
    } else if (t2 === "update") {
      const t3 = new h(this._activeGraphic, this.graphics, h$12, e$12, r2, a2, o, c2, n2, i2);
      this.emit("graphic-move", t3), this.callbacks.onGraphicMove && this.callbacks.onGraphicMove(t3), t3.defaultPrevented && (this._activeGraphic.geometry = l2);
    } else {
      const t3 = new e(this._activeGraphic, this.graphics, h$12, e$12, r2, a2, o, c2, n2, i2);
      this._dragEvent = null, this._activeGraphic = null, this._setUpIndicators(), this.emit("graphic-move-stop", t3), this.callbacks.onGraphicMoveStop && this.callbacks.onGraphicMoveStop(t3), t3.defaultPrevented && (this.graphics[h$12].set("geometry", this._initialDragGeometry), this._setUpIndicators()), this._initialDragGeometry = null;
    }
  }
  _keyDownHandler(i2) {
    i2.key !== "a" && i2.key !== "d" && i2.key !== "n" || this.state !== "moving" || i2.stopPropagation();
  }
  _findTargetGraphic(i2) {
    const t2 = this.view.toMap(i2);
    let e2 = null, s2 = Number.MAX_VALUE;
    this._syncLayerViews();
    const r2 = this._layerViews.flatMap((i3) => "graphicsViews" in i3 ? Array.from(i3.graphicsViews(), (i4) => i4.hitTest(t2)).flat() : i3.graphicsView.hitTest(t2)).filter((i3) => this.graphics.includes(i3));
    return r2.length ? r2[0] : (this._manipulators.forEach((t3) => {
      const r3 = t3.intersectionDistance(i2);
      r$1(r3) && r3 < s2 && (s2 = r3, e2 = t3.graphic);
    }), e2);
  }
  _syncLayerViews() {
    this._layerViews = [];
    const i2 = new Set();
    for (const t2 of this.graphics) {
      const e2 = n$2(this.view, t2.layer);
      e2 && i2.add(e2);
    }
    this._layerViews = [...i2];
  }
  _setUpManipulators() {
    const { graphics: i2, view: t2 } = this;
    this._manipulators.forEach((i3) => i3.destroy()), this._manipulators = (i2 == null ? void 0 : i2.length) ? i2.map((i3) => new C({ graphic: i3, view: t2 })) : [];
  }
  _setUpHighlights() {
    this.highlightsEnabled && this._highlightHelper.add(this.graphics);
  }
  _setUpIndicators() {
    if (this._removeIndicators(), this.indicatorsEnabled) {
      for (const i2 of this.graphics) {
        const t2 = i2.clone();
        t2.symbol = this._getSymbolForIndicator(i2), this._indicators.push(t2), this._handles.add(l$1(() => i2.symbol, () => this._setUpIndicators()), P);
      }
      this.layer.addMany(this._indicators);
    }
  }
  _removeIndicators() {
    this._handles.remove(P), this._indicators.length && (this.layer.removeMany(this._indicators), this._indicators.forEach((i2) => i2.destroy()), this._indicators = []);
  }
  _getSymbolForIndicator(i2) {
    const t2 = 12;
    if (t$2(i2.symbol))
      return null;
    switch (i2.symbol.type) {
      case "cim":
        return new y$2({ style: "circle", size: t2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      case "picture-marker": {
        const { xoffset: t3, yoffset: e2, height: s2, width: r2 } = i2.symbol, h2 = s2 === r2 ? r2 : Math.max(s2, r2);
        return new y$2({ xoffset: t3, yoffset: e2, size: h2, style: "square", color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      }
      case "simple-marker": {
        const { xoffset: t3, yoffset: e2, size: s2, style: r2 } = i2.symbol;
        return new y$2({ xoffset: t3, yoffset: e2, style: r2 === "circle" ? "circle" : "square", size: s2 + 2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      }
      case "simple-fill":
        return new S$1({ color: [0, 0, 0, 0], outline: { style: "dash", color: [255, 127, 0, 1], width: 1 } });
      case "simple-line":
        return new m({ color: [255, 127, 0, 1], style: "dash", width: 1 });
      case "text": {
        const { xoffset: e2, yoffset: s2 } = i2.symbol;
        return new y$2({ xoffset: e2, yoffset: s2, size: t2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      }
      default:
        return null;
    }
  }
};
e$1([y()], S.prototype, "_activeGraphic", void 0), e$1([y({ readOnly: true })], S.prototype, "type", void 0), e$1([y()], S.prototype, "callbacks", void 0), e$1([y()], S.prototype, "enableMoveAllGraphics", void 0), e$1([y()], S.prototype, "graphics", void 0), e$1([y({ value: false })], S.prototype, "highlightsEnabled", null), e$1([y()], S.prototype, "indicatorsEnabled", void 0), e$1([y()], S.prototype, "layer", void 0), e$1([y({ readOnly: true })], S.prototype, "state", null), e$1([y()], S.prototype, "view", void 0), S = e$1([n$1("esri.views.draw.support.GraphicMover")], S);
const D = S;
var GraphicMover = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": D
});
export { D, GraphicMover as G, h$1 as h };
