var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ix as h, y, a8 as n, bQ as t, k as j, ab as p, dd as f, iD as P, ad as l, L as s, a2 as t$1, iE as g, W as m, dl as V, bK as l$1, ac as h$2, dk as e, G as g$1, C as r, gq as p$1, iy as r$1, J as g$2, I as w, gJ as q, iF as f$1, bk as j$1, it as s$1, iG as e$1, iH as c, ea as s$2, s as s$3, N as e$2, O as y$1, P as n$2, ir as e$3, iw as P$1, ai as w$1 } from "./index.js";
import { k as h$3, j as j$2, n as l$2, c as m$1 } from "./automaticLengthMeasurementUtils.js";
import { h as h$1, D } from "./GraphicMover.js";
import { r as r$2, n as n$1 } from "./TranslateTooltipInfos.js";
import { u } from "./automaticAreaMeasurementUtils.js";
import "vue";
import "./GraphicManipulator.js";
import "./drapedUtils.js";
import "./earcut.js";
import "./triangle.js";
import "./lineSegment.js";
class B {
  constructor(e2, t2, i) {
    this.graphic = e2, this.mover = t2, this.selected = i, this.type = "reshape-start";
  }
}
class J {
  constructor(e2, t2, i) {
    this.graphic = e2, this.mover = t2, this.selected = i, this.type = "reshape";
  }
}
class Q {
  constructor(e2, t2, i) {
    this.graphic = e2, this.mover = t2, this.selected = i, this.type = "reshape-stop";
  }
}
class W {
  constructor(e2, t2, i) {
    this.mover = e2, this.dx = t2, this.dy = i, this.type = "move-start";
  }
}
class X {
  constructor(e2, t2, i) {
    this.mover = e2, this.dx = t2, this.dy = i, this.type = "move";
  }
}
class Y {
  constructor(e2, t2, i) {
    this.mover = e2, this.dx = t2, this.dy = i, this.type = "move-stop";
  }
}
class Z {
  constructor(e2) {
    this.added = e2, this.type = "vertex-select";
  }
}
class $ {
  constructor(e2) {
    this.removed = e2, this.type = "vertex-deselect";
  }
}
class ee {
  constructor(e2, t2, i, s2) {
    this.added = e2, this.graphic = t2, this.oldGraphic = i, this.vertices = s2, this.type = "vertex-add";
  }
}
class te {
  constructor(e2, t2, i, s2) {
    this.removed = e2, this.graphic = t2, this.oldGraphic = i, this.vertices = s2, this.type = "vertex-remove";
  }
}
const ie = h.reshapeGraphics, se = { vertices: { default: new y({ style: "circle", size: ie.vertex.size, color: ie.vertex.color, outline: { color: ie.vertex.outlineColor, width: 1 } }), hover: new y({ style: "circle", size: ie.vertex.hoverSize, color: ie.vertex.hoverColor, outline: { color: ie.vertex.hoverOutlineColor, width: 1 } }), selected: new y({ style: "circle", size: ie.selected.size, color: ie.selected.color, outline: { color: ie.selected.outlineColor, width: 1 } }) }, midpoints: { default: new y({ style: "circle", size: ie.midpoint.size, color: ie.midpoint.color, outline: { color: ie.midpoint.outlineColor, width: 1 } }), hover: new y({ style: "circle", size: ie.midpoint.size, color: ie.midpoint.color, outline: { color: ie.midpoint.outlineColor, width: 1 } }) } };
let oe = class extends n.EventedAccessor {
  constructor(e2) {
    super(e2), this._activeOperationInfo = null, this._editGeometryOperations = null, this._handles = new t(), this._graphicAttributes = { esriSketchTool: "box" }, this._mover = null, this._snappingTask = null, this._stagedVertex = null, this._tooltip = null, this._viewHandles = new t(), this.callbacks = { onReshapeStart() {
    }, onReshape() {
    }, onReshapeStop() {
    }, onMoveStart() {
    }, onMove() {
    }, onMoveStop() {
    }, onGraphicClick() {
    } }, this.enableMidpoints = true, this.enableMovement = true, this.enableVertices = true, this.graphic = null, this.layer = null, this.midpointGraphics = new j(), this.midpointSymbol = new y({ style: "circle", size: 6, color: [200, 200, 200], outline: { color: [100, 100, 100], width: 1 } }), this.selectedVertices = [], this.snappingManager = null, this.tooltipOptions = new p(), this.type = "reshape", this.vertexGraphics = new j(), this.view = null;
  }
  initialize() {
    const e2 = this.view;
    this._highlightHelper = new h$1({ view: e2 }), this._setup(), this._handles.add([f(() => e2 == null ? void 0 : e2.ready, () => {
      const { layer: e3, view: t2 } = this;
      e$3(t2, e3), this._viewHandles.add(t2.on("key-down", (e4) => this._keyDownHandler(e4), P$1.TOOL));
    }, { once: true, initial: true }), P(() => this.graphic, () => this.refresh()), P(() => this.layer, (e3, t2) => {
      t2 && (this._clearSelection(), this._resetGraphics(t2)), this.refresh();
    }), P(() => this.enableMidpoints, () => this.refresh()), l(() => this.tooltipOptions.enabled, (e3) => {
      this._tooltip = e3 ? new m$1({ view: this.view }) : s(this._tooltip);
    }, w$1)]);
  }
  destroy() {
    var _a;
    this._reset(), (_a = this._mover) == null ? void 0 : _a.destroy(), this._mover = null, this._tooltip = s(this._tooltip), this._handles = s(this._handles), this._viewHandles = s(this._viewHandles);
  }
  set highlightsEnabled(e2) {
    var _a;
    (_a = this._highlightHelper) == null ? void 0 : _a.removeAll(), this._set("highlightsEnabled", e2), this._setUpHighlights();
  }
  get state() {
    const e2 = !!this.get("view.ready"), t2 = !(!this.get("graphic") || !this.get("layer"));
    return e2 && t2 ? "active" : e2 ? "ready" : "disabled";
  }
  set symbols(e2) {
    const { midpoints: t2 = se.midpoints, vertices: i = se.vertices } = e2 || {};
    this._set("symbols", { midpoints: t2, vertices: i });
  }
  isUIGraphic(e2) {
    const t2 = [];
    return this.graphic && t2.push(this.graphic), t2.concat(this.vertexGraphics.items, this.midpointGraphics.items), t2.length && t2.includes(e2);
  }
  refresh() {
    this._reset(), this._setup();
  }
  reset() {
    this.graphic = null;
  }
  clearSelection() {
    this._clearSelection();
  }
  removeSelectedVertices() {
    this.selectedVertices.length && this._removeVertices(this.selectedVertices);
  }
  _setup() {
    const { graphic: e2, layer: t2 } = this;
    if (!t2 || !e2 || t$1(e2.geometry))
      return;
    const i = e2.geometry;
    i.type !== "mesh" && i.type !== "extent" ? (i.type === "polygon" && g(i), this._setUpHighlights(), this._setupGraphics(), this._setupMover()) : this._logGeometryTypeError();
  }
  _setUpHighlights() {
    this.highlightsEnabled && this.graphic && this._highlightHelper.add(this.graphic);
  }
  _setUpGeometryHelper() {
    const e2 = this.graphic.geometry;
    if (t$1(e2) || e2.type === "mesh" || e2.type === "extent")
      return void this._logGeometryTypeError();
    const t2 = e2.type === "multipoint" ? new m({ paths: e2.points, spatialReference: e2.spatialReference }) : e2;
    this._editGeometryOperations = V.fromGeometry(t2, l$1.Local);
  }
  _saveSnappingContextForHandle(e$12, t2) {
    var _a;
    this._snappingGraphicsLayer = new h$2({ listMode: "hide", internal: true, title: "Reshape snapping layer" }), this.view.map.layers.add(this._snappingGraphicsLayer), this._snappingContext = new e({ editGeometryOperations: this._editGeometryOperations, elevationInfo: { mode: "on-the-ground", offset: 0 }, pointer: ((_a = t2.viewEvent) == null ? void 0 : _a.pointerType) || "mouse", excludeFeature: this.graphic, visualizer: new g$1(this._snappingGraphicsLayer), vertexHandle: this._getVertexFromEditGeometry(e$12) });
  }
  _reset() {
    this._clearSelection(), this._highlightHelper.removeAll(), this._updateTooltip(), this._resetGraphics(), this._resetSnappingStateVars(), this._activeOperationInfo = null, this._mover && this._mover.destroy(), this._mover = null, this.view.cursor = "default";
  }
  _resetSnappingStateVars() {
    var _a;
    r(this.snappingManager) && this.snappingManager.doneSnapping(), r(this._snappingGraphicsLayer) && (((_a = this.view) == null ? void 0 : _a.map) && this.view.map.layers.remove(this._snappingGraphicsLayer), this._snappingGraphicsLayer.destroy()), this._editGeometryOperations = s(this._editGeometryOperations), this._snappingTask = p$1(this._snappingTask), this._snappingTask = null, this._snappingContext = null, this._stagedVertex = null;
  }
  _resetGraphics(e2) {
    this._removeMidpointGraphics(e2), this._removeVertexGraphics(e2), this._set("selectedVertices", []);
  }
  _removeMidpointGraphics(e2) {
    const t2 = e2 || this.layer;
    t2 && t2.removeMany(this.midpointGraphics.items), this.midpointGraphics.items.forEach((e3) => e3.destroy()), this.midpointGraphics.removeAll();
  }
  _removeVertexGraphics(e2) {
    const t2 = e2 || this.layer;
    t2 && t2.removeMany(this.vertexGraphics.items), this.vertexGraphics.items.forEach((e3) => e3.destroy()), this.vertexGraphics.removeAll();
  }
  _getCoordinatesForUI(e2) {
    const t2 = r$1(e2.clone());
    if (e2.type === "polygon")
      for (const i of t2) {
        const e3 = i[i.length - 1];
        i[0][0] === e3[0] && i[0][1] === e3[1] && i.length > 2 && i.pop();
      }
    return t2;
  }
  _setupGraphics() {
    const e2 = this.graphic.geometry;
    if (r(e2) && (e2.type === "polyline" || e2.type === "polygon")) {
      const t2 = this._getCoordinatesForUI(e2);
      this.enableMidpoints && this._setUpMidpointGraphics(t2), this.enableVertices && this._setUpVertexGraphics(t2);
    }
  }
  _setUpMidpointGraphics(e2) {
    this._removeMidpointGraphics();
    const t2 = this._createMidpointGraphics(e2);
    this.midpointGraphics.addMany(t2), this.layer.addMany(t2);
  }
  _setUpVertexGraphics(e2) {
    this._removeVertexGraphics();
    const t2 = this._createVertexGraphics(e2);
    this.vertexGraphics.addMany(t2), this._storeRelatedVertexIndices(), this.layer.addMany(t2);
  }
  _createVertexGraphics(e2) {
    const { _graphicAttributes: i, symbols: s2, view: { spatialReference: o } } = this, r2 = [];
    return e2 == null ? void 0 : e2.forEach((e3, n2) => {
      e3.forEach((e4, a) => {
        var _a;
        const [h2, p2] = e4;
        r2.push(new g$2({ geometry: new w({ x: h2, y: p2, spatialReference: o }), symbol: (_a = s2 == null ? void 0 : s2.vertices) == null ? void 0 : _a.default, attributes: __spreadProps(__spreadValues({}, i), { pathIndex: n2, pointIndex: a }) }));
      });
    }), r2;
  }
  _createMidpointGraphics(e2) {
    const { _graphicAttributes: i, symbols: s2, view: { spatialReference: o } } = this, r2 = [];
    return e2 == null ? void 0 : e2.forEach((e3, n2) => {
      e3.forEach((a, h2) => {
        const [p2, c2] = a, l2 = e3[h2 + 1] ? h2 + 1 : 0;
        if (q(this.graphic.geometry, "type") === "polygon" || l2 !== 0) {
          const [a2, d] = e3[l2], [m2, v] = f$1([p2, c2], [a2, d]);
          r2.push(new g$2({ geometry: new w({ x: m2, y: v, spatialReference: o }), symbol: s2.midpoints.default, attributes: __spreadProps(__spreadValues({}, i), { pathIndex: n2, pointIndexStart: h2, pointIndexEnd: l2 }) }));
        }
      });
    }), r2;
  }
  _storeRelatedVertexIndices() {
    const e2 = this.vertexGraphics.items;
    if (!e2)
      return;
    const t2 = e2.map(({ geometry: e3 }) => ({ x: e3.x, y: e3.y }));
    for (let i = 0; i < t2.length; i++) {
      const s2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        if (i === e3)
          continue;
        const o = t2[i], r2 = t2[e3];
        o.x === r2.x && o.y === r2.y && s2.push(e3);
      }
      e2[i].attributes.relatedGraphicIndices = s2;
    }
  }
  _setupMover() {
    const { enableMovement: e2, graphic: t2, midpointGraphics: i, vertexGraphics: s2, view: o } = this, r2 = s2.concat(i).items;
    e2 && r2.push(t2), this._mover = new D({ enableMoveAllGraphics: false, highlightsEnabled: false, indicatorsEnabled: false, graphics: r2, view: o, callbacks: { onGraphicClick: (e3) => this._onGraphicClickCallback(e3), onGraphicMoveStart: (e3) => this._onGraphicMoveStartCallback(e3), onGraphicMove: (e3) => this._onGraphicMoveCallback(e3), onGraphicMoveStop: (e3) => this._onGraphicMoveStopCallback(e3), onGraphicPointerOver: (e3) => this._onGraphicPointerOverCallback(e3), onGraphicPointerOut: (e3) => this._onGraphicPointerOutCallback(e3) } });
  }
  _onGraphicClickCallback(e2) {
    e2.viewEvent.stopPropagation();
    const t2 = e2.graphic;
    if (t2 === this.graphic)
      this.clearSelection(), this.emit("graphic-click", e2), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e2);
    else if (this._isMidpoint(t2)) {
      if (e2.viewEvent.button === 2)
        return;
      const i = this.graphic.clone(), s2 = this._createVertexFromMidpoint(t2);
      this.refresh(), this._emitVertexAddEvent([t2], i, s2);
    } else if (this._isVertex(t2))
      if (e2.viewEvent.stopPropagation(), e2.viewEvent.button === 2)
        this._removeVertices(t2);
      else {
        e2.viewEvent.native.shiftKey || this._clearSelection(), this.selectedVertices.includes(t2) ? this._removeFromSelection(t2, true) : this._addToSelection(t2);
      }
  }
  _setUpOperation(e2) {
    const { graphic: t2, dx: i, dy: s2 } = e2, o = t2 === this.graphic;
    this._resetSnappingStateVars(), this._setUpGeometryHelper(), this._saveSnappingContextForHandle(t2, e2), this._activeOperationInfo = { target: this.graphic, mover: t2, operationType: o ? "move" : "reshape", totalDx: i, totalDy: s2 };
  }
  _onGraphicMoveStartCallback(e2) {
    const { dx: t2, dy: i, graphic: s2 } = e2;
    if (s2 === this.graphic) {
      const { geometry: o } = s2;
      return this._setUpOperation(e2), this._emitMoveStartEvent(t2, i), void (r(o) && o.type === "point" && this._onHandleMove(s2, t2, i, e2, () => {
        this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(t2, i);
      }));
    }
    if (!this.selectedVertices.includes(s2)) {
      if (this._clearSelection(), this._isMidpoint(s2)) {
        const e3 = this.graphic.clone(), t3 = this._createVertexFromMidpoint(s2);
        this._emitVertexAddEvent([s2], e3, t3);
      }
      this._addToSelection(s2);
    }
    this._setUpOperation(e2), this._emitReshapeStartEvent(s2), this._onHandleMove(s2, t2, i, e2, () => {
      this._updateTooltip(s2, e2.viewEvent), this._emitReshapeEvent(s2);
    });
  }
  _onGraphicMoveCallback(e2) {
    const { dx: t2, dy: i, graphic: s2 } = e2;
    this._activeOperationInfo.totalDx += t2, this._activeOperationInfo.totalDy += i;
    const { operationType: o } = this._activeOperationInfo, { geometry: r2 } = s2;
    if (!t$1(r2)) {
      if (o !== "move")
        this._onHandleMove(s2, t2, i, e2, () => {
          this._updateTooltip(s2, e2.viewEvent), this._emitReshapeEvent(s2);
        });
      else if (r2.type === "point")
        this._onHandleMove(s2, t2, i, e2, () => {
          this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(t2, i);
        });
      else if (r2.type === "polyline" || r2.type === "polygon") {
        const s3 = this._getCoordinatesForUI(r2);
        this._updateVertexGraphicLocations(s3), this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(t2, i);
      }
    }
  }
  _onGraphicMoveStopCallback(e2) {
    const { dx: t2, dy: i, graphic: s2 } = e2, { operationType: o } = this._activeOperationInfo;
    this._activeOperationInfo.totalDx += t2, this._activeOperationInfo.totalDy += i, this._onHandleMove(s2, t2, i, e2, () => o === "move" ? this._emitMoveStopEvent() : this._emitReshapeStopEvent(s2)), this._isMidpoint(s2) ? this.refresh() : (this._updateTooltip(this._isVertex(s2) ? s2 : null), this._resetSnappingStateVars(), this._activeOperationInfo = null);
  }
  _updateVertexGraphicLocations(e2) {
    const t2 = this.view.spatialReference;
    for (const i of this.vertexGraphics) {
      const { pathIndex: s2, pointIndex: o } = i.attributes, [r2, n2] = e2[s2][o];
      i.geometry = new w({ x: r2, y: n2, spatialReference: t2 });
    }
    this._updateMidpointGraphicLocations(e2);
  }
  _updateMidpointGraphicLocations(e2) {
    for (const t2 of this.midpointGraphics) {
      const { pathIndex: i, pointIndexStart: s2, pointIndexEnd: o } = t2.attributes, [r2, n2] = e2[i][s2], [a, h2] = e2[i][o], [p2, c2] = f$1([r2, n2], [a, h2]);
      t2.geometry = new w({ x: p2, y: c2, spatialReference: this.view.spatialReference });
    }
  }
  _getIndicesForVertexGraphic({ attributes: e2 }) {
    return [(e2 == null ? void 0 : e2.pathIndex) || 0, (e2 == null ? void 0 : e2.pointIndex) || 0];
  }
  _getVertexFromEditGeometry(e2) {
    const [t2, i] = this._getIndicesForVertexGraphic(e2);
    return this._editGeometryOperations.data.components[t2].vertices[i];
  }
  _onHandleMove(e2, t2, s2, o, r$12) {
    if (p$1(this._snappingTask), !this._snappingContext)
      return;
    const n2 = e2.geometry, a = o.type === "graphic-move-stop";
    if (r(this.snappingManager) && this.selectedVertices.length < 2 && !a) {
      const o2 = this.snappingManager;
      this._stagedVertex = o2.update({ point: n2, context: this._snappingContext }), this._syncGeometryAfterVertexMove(e2, new w(this._stagedVertex), t2, s2, a), r$12(), this._snappingTask = j$1(async (i) => {
        const h2 = await o2.snap({ point: n2, context: this._snappingContext, signal: i });
        h2.valid && (this._stagedVertex = h2.apply(), this._syncGeometryAfterVertexMove(e2, new w(this._stagedVertex), t2, s2, a), r$12());
      });
    } else {
      const i = r(this._stagedVertex) ? new w(this._stagedVertex) : n2;
      this._syncGeometryAfterVertexMove(e2, i, t2, s2, a), r$12();
    }
  }
  async _syncGeometryAfterVertexMove(e2, t2, i, s2, o = false) {
    const r2 = this._editGeometryOperations.data.geometry;
    if (r2.type === "point")
      e2.geometry = t2;
    else {
      const { x: n2, y: a } = t2, [h2, p2] = this._getIndicesForVertexGraphic(e2);
      let c2 = r$1(r2);
      const l2 = c2[h2].length - 1;
      c2[h2][p2] = [n2, a], r2.type === "polygon" && (p2 === 0 ? c2[h2][l2] = [n2, a] : p2 === l2 && (c2[h2][0] = [n2, a])), this._isVertex(e2) && (c2 = this._moveRelatedCoordinates(c2, e2, n2, a), c2 = this._moveSelectedHandleCoordinates(c2, e2, i, s2, r2.type === "polygon"), this._updateMidpointGraphicLocations(c2)), this.graphic.geometry = r2.clone();
      const d = this._getVertexFromEditGeometry(e2), m2 = n2 - d.pos[0], v = a - d.pos[1];
      this._editGeometryOperations.moveVertices([d], m2, v, 0), o && (this._mover ? this._mover.updateGeometry(this._mover.graphics.indexOf(e2), t2) : e2.geometry = t2);
    }
  }
  _moveRelatedCoordinates(e2, t2, i, s2) {
    const { relatedGraphicIndices: o } = t2.attributes;
    for (const r2 of o) {
      const o2 = this.vertexGraphics.getItemAt(r2), { pathIndex: n2, pointIndex: a } = o2.attributes;
      e2[n2][a] = [i, s2], o2.geometry = t2.geometry;
    }
    return e2;
  }
  _moveSelectedHandleCoordinates(e2, t2, i, s2, o) {
    for (const r2 of this.selectedVertices)
      if (r2 !== t2) {
        const { pathIndex: t3, pointIndex: n2, relatedGraphicIndices: a } = r2.attributes, h2 = s$1(r2.geometry, i, s2, this.view), p2 = e2[t3].length - 1;
        e2[t3][n2] = [h2.x, h2.y], r2.geometry = h2, o && (n2 === 0 ? e2[t3][p2] = [h2.x, h2.y] : n2 === p2 && (e2[t3][0] = [h2.x, h2.y]));
        for (const i2 of a) {
          const t4 = this.vertexGraphics.getItemAt(i2), { pathIndex: s3, pointIndex: o2 } = t4.attributes;
          e2[s3][o2] = [h2.x, h2.y], t4.geometry = h2;
        }
      }
    return e2;
  }
  _onGraphicPointerOverCallback(e2) {
    const t2 = e2.graphic, i = this._isVertex(t2);
    i && !this._isSelected(t2) && (t2.symbol = this.symbols.vertices.hover), this._updateTooltip(i ? t2 : null), this._updateHoverCursor(t2);
  }
  _onGraphicPointerOutCallback(e2) {
    const t2 = e2.graphic;
    this._isVertex(t2) && !this._isSelected(t2) && (t2.symbol = this.symbols.vertices.default), this.view.cursor = "default", this._updateTooltip();
  }
  _createVertexFromMidpoint(e2) {
    const { _graphicAttributes: t2, graphic: i } = this, s2 = i.geometry;
    if (t$1(s2) || s2.type !== "polygon" && s2.type !== "polyline")
      return [];
    const o = s2.clone(), r2 = [], { pathIndex: n2, pointIndexStart: a, pointIndexEnd: h2 } = e2.attributes, { x: c2, y: l2 } = e2.geometry, d = h2 === 0 ? a + 1 : h2, m2 = r$1(o);
    return m2[n2].splice(d, 0, [c2, l2]), e2.attributes = __spreadProps(__spreadValues({}, t2), { pathIndex: n2, pointIndex: d, relatedGraphicIndices: [] }), r2.push({ coordinates: m2[n2][d], componentIndex: n2, vertexIndex: d }), this.graphic.geometry = o, r2;
  }
  _addToSelection(e2) {
    e2 instanceof g$2 && (e2 = [e2]);
    for (const t2 of e2)
      t2.symbol = this.symbols.vertices.selected;
    this._set("selectedVertices", this.selectedVertices.concat(e2)), this._emitSelectEvent(e2);
  }
  _removeFromSelection(e2, i) {
    const { vertices: s2 } = this.symbols, o = i ? s2.hover : s2.default;
    e2 instanceof g$2 && (e2 = [e2]);
    for (const t2 of e2)
      this.selectedVertices.splice(this.selectedVertices.indexOf(t2), 1), this._set("selectedVertices", this.selectedVertices), t2.set("symbol", o);
    this._emitDeselectEvent(e2);
  }
  _clearSelection() {
    if (this.selectedVertices.length) {
      const e2 = this.selectedVertices;
      for (const t2 of this.selectedVertices)
        t2.set("symbol", this.symbols.vertices.default);
      this._set("selectedVertices", []), this._emitDeselectEvent(e2);
    }
  }
  _keyDownHandler(e2) {
    e$1.delete.includes(e2.key) && !e2.repeat && this.selectedVertices.length && this._removeVertices(this.selectedVertices);
  }
  _removeVertices(e2) {
    const i = this.graphic.geometry;
    if (t$1(i) || i.type !== "polygon" && i.type !== "polyline")
      return;
    if (i.type === "polygon" && this.vertexGraphics.length < 4 || this.vertexGraphics.length < 3)
      return;
    e2 instanceof g$2 && (e2 = [e2]);
    const s2 = this.graphic.clone(), o = i.clone();
    let r2 = r$1(o);
    const n2 = [];
    e2 instanceof g$2 && (e2 = [e2]);
    for (const t2 of e2) {
      const { x: e3, y: i2 } = t2.geometry;
      for (let t3 = 0; t3 < r2.length; t3++) {
        const s3 = r2[t3];
        for (let o2 = 0; o2 < s3.length; o2++) {
          const [a, h2] = s3[o2];
          e3 === a && i2 === h2 && (n2.push({ coordinates: r2[t3][o2], componentIndex: t3, vertexIndex: o2 }), r2[t3].splice(Number(o2), 1));
        }
      }
    }
    if (o.type === "polygon")
      r2 = r2.filter((e3) => {
        if (e3.length < 2)
          return false;
        const [t2, i2] = e3[0], [s3, o2] = e3[e3.length - 1];
        return (e3.length !== 2 || t2 !== s3 || i2 !== o2) && (t2 === s3 && i2 === o2 || e3.push(e3[0]), true);
      }), o.rings = r2;
    else {
      for (const e3 of r2)
        e3.length === 1 && r2.splice(r2.indexOf(e3), 1);
      o.paths = r2;
    }
    this.graphic.geometry = o, this.refresh(), this._emitVertexRemoveEvent(e2, s2, n2);
  }
  _isVertex(e2) {
    return this.vertexGraphics.includes(e2);
  }
  _isSelected(e2) {
    return this._isVertex(e2) && this.selectedVertices.includes(e2);
  }
  _isMidpoint(e2) {
    return this.midpointGraphics.includes(e2);
  }
  _updateHoverCursor(e2) {
    this.view.cursor = this._isMidpoint(e2) ? "copy" : "move";
  }
  _updateTooltip(e2, t2) {
    t$1(this._tooltip) || (e2 ? e2 === this.graphic ? this._updateMoveGraphicTooltip(t2) : this._updateMoveVertexTooltip(t2) : this._tooltip.clear());
  }
  _updateMoveGraphicTooltip(e2) {
    const { _tooltip: t2, tooltipOptions: i, view: s2 } = this;
    if (t$1(t2))
      return;
    const o = new r$2({ tooltipOptions: i });
    if (e2) {
      const { x: t3, y: i2 } = e2.origin, r$12 = s2.toMap(e2), n2 = s2.toMap(c(t3, i2)), a = h$3(n2, r$12);
      o.distance = r(a) ? a : j$2;
    }
    t2.info = o;
  }
  _updateMoveVertexTooltip(e2) {
    const { _tooltip: t2, graphic: { geometry: i }, tooltipOptions: s2, view: o } = this;
    if (t$1(t2))
      return;
    const r$12 = new n$1({ tooltipOptions: s2 });
    if (r(i) && (i.type === "polygon" ? r$12.area = u(i) : i.type === "polyline" && (r$12.totalLength = l$2(i))), e2) {
      const { x: t3, y: i2 } = e2.origin, s3 = o.toMap(e2), n2 = o.toMap(c(t3, i2)), a = h$3(n2, s3);
      r$12.distance = r(a) ? a : j$2;
    }
    t2.info = r$12;
  }
  _emitMoveStartEvent(e2, t2) {
    const i = new W(this.graphic, e2, t2);
    this.emit("move-start", i), this.callbacks.onMoveStart && this.callbacks.onMoveStart(i);
  }
  _emitMoveEvent(e2, t2) {
    const i = new X(this.graphic, e2, t2);
    this.emit("move", i), this.callbacks.onMove && this.callbacks.onMove(i);
  }
  _emitMoveStopEvent() {
    const { totalDx: e2, totalDy: t2 } = this._activeOperationInfo, i = new Y(this.graphic, e2, t2);
    this.emit("move-stop", i), this.callbacks.onMoveStop && this.callbacks.onMoveStop(i);
  }
  _emitReshapeStartEvent(e2) {
    const t2 = new B(this.graphic, e2, this.selectedVertices);
    this.emit("reshape-start", t2), this.callbacks.onReshapeStart && this.callbacks.onReshapeStart(t2);
  }
  _emitReshapeEvent(e2) {
    const t2 = new J(this.graphic, e2, this.selectedVertices);
    this.emit("reshape", t2), this.callbacks.onReshape && this.callbacks.onReshape(t2);
  }
  _emitReshapeStopEvent(e2) {
    const t2 = new Q(this.graphic, e2, this.selectedVertices);
    this.emit("reshape-stop", t2), this.callbacks.onReshapeStop && this.callbacks.onReshapeStop(t2);
  }
  _emitSelectEvent(e2) {
    const t2 = new Z(e2);
    this.emit("select", t2), this.callbacks.onVertexSelect && this.callbacks.onVertexSelect(t2);
  }
  _emitDeselectEvent(e2) {
    const t2 = new $(e2);
    this.emit("deselect", t2), this.callbacks.onVertexDeselect && this.callbacks.onVertexDeselect(t2);
  }
  _emitVertexAddEvent(e2, t2, i) {
    const s2 = new ee(e2, this.graphic, t2, i);
    this.emit("vertex-add", s2), this.callbacks.onVertexAdd && this.callbacks.onVertexAdd(s2);
  }
  _emitVertexRemoveEvent(e2, t2, i) {
    const s2 = new te(e2, this.graphic, t2, i);
    this.emit("vertex-remove", s2), this.callbacks.onVertexRemove && this.callbacks.onVertexRemove(s2);
  }
  _logGeometryTypeError() {
    s$2.getLogger(this.declaredClass).error(new s$3("reshape:invalid-geometry", "Reshape operation not supported for the provided graphic. The geometry type is not supported."));
  }
};
e$2([y$1()], oe.prototype, "_tooltip", void 0), e$2([y$1()], oe.prototype, "callbacks", void 0), e$2([y$1()], oe.prototype, "enableMidpoints", void 0), e$2([y$1()], oe.prototype, "enableMovement", void 0), e$2([y$1()], oe.prototype, "enableVertices", void 0), e$2([y$1()], oe.prototype, "graphic", void 0), e$2([y$1({ value: true })], oe.prototype, "highlightsEnabled", null), e$2([y$1()], oe.prototype, "layer", void 0), e$2([y$1({ readOnly: true })], oe.prototype, "midpointGraphics", void 0), e$2([y$1()], oe.prototype, "midpointSymbol", void 0), e$2([y$1({ readOnly: true })], oe.prototype, "selectedVertices", void 0), e$2([y$1()], oe.prototype, "snappingManager", void 0), e$2([y$1({ readOnly: true })], oe.prototype, "state", null), e$2([y$1({ value: se })], oe.prototype, "symbols", null), e$2([y$1({ type: p })], oe.prototype, "tooltipOptions", void 0), e$2([y$1({ readOnly: true })], oe.prototype, "type", void 0), e$2([y$1({ readOnly: true })], oe.prototype, "vertexGraphics", void 0), e$2([y$1()], oe.prototype, "view", void 0), oe = e$2([n$2("esri.views.draw.support.Reshape")], oe);
const re = oe;
export { re as default };
