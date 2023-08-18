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
import { Q as m, R as h, S as p, T as I$1, V as w$1, C as r, M as u, I as w$2, W as m$1, X as y$1, Y as i, Z as v$1, $ as R$1, a0 as A, a1 as n$1, a2 as t, a3 as y$2, a4 as $, a5 as f, a6 as m$2, N as e, O as y$3, P as n$2, a7 as a$1, a8 as n$3, a9 as p$1, aa as c, ab as p$2, ac as h$1, ad as l$1, L as s$1, J as g, K as n$4, ae as S, A as e$2, af as o, z as i$1, ag as g$1, ah as L$1, ai as w$3 } from "./index.js";
import { e as e$1, j as j$1, U as U$1, a as a$2, m as m$3, b as a$3, c as m$4 } from "./automaticLengthMeasurementUtils.js";
import { i as i$2 } from "./automaticAreaMeasurementUtils.js";
function R(t2, e2) {
  const o2 = new w$2({ x: t2[0], y: t2[1], spatialReference: e2 });
  return t2.length > 2 && (o2.z = t2[2]), o2;
}
function j(t2, e2) {
  return new u({ points: t2, spatialReference: e2 });
}
function T(t2, e2, o2) {
  const n2 = new m$1({ paths: t2, spatialReference: e2 });
  return o2 && p(n2), n2;
}
function b(o2, n2, r2, a2 = true) {
  const s2 = y$1(o2);
  s2.forEach((e2) => {
    const o3 = e2[0], n3 = e2[e2.length - 1];
    i(o3, n3) && e2.length !== 1 || e2.push(e2[0]);
  });
  let l2 = new v$1({ rings: s2, spatialReference: n2 });
  return l2.rings.forEach((t2) => {
    h(t2, false, false) || t2.reverse();
  }), r2 && p(l2), a2 && l2.isSelfIntersecting && I$1(n2) && (l2 = w$1(l2)), l2;
}
function U(t2, e2, n2) {
  const r2 = e2.mapToLocalMultiple(t2), a2 = [], s2 = { x: r2[0].x, y: r2[0].y }, l2 = { x: r2[1].x, y: r2[1].y }, i2 = Math.round(l2.x - s2.x), c2 = Math.round(l2.y - s2.y), y2 = Math.max(Math.abs(i2), Math.abs(c2));
  if (n2) {
    const t3 = { x: s2.x + y2, y: s2.y + y2 }, e3 = { x: s2.x - y2, y: s2.y - y2 };
    a2.push(R$1(t3.x, e3.y), R$1(e3.x, e3.y), R$1(e3.x, t3.y), R$1(t3.x, t3.y));
  } else {
    const t3 = { x: i2 > 0 ? s2.x + y2 : s2.x - y2, y: c2 > 0 ? s2.y + y2 : s2.y - y2 };
    a2.push(R$1(s2.x, s2.y), R$1(t3.x, s2.y), R$1(t3.x, t3.y), R$1(s2.x, t3.y));
  }
  return z(b([m(a2.map((t3) => e2.localToMap(t3)))], e2.spatialReference, e2.doUnnormalization, true), a2, e2);
}
function P(t2, e2, n2) {
  let r2 = e2.mapToLocalMultiple(t2);
  if (r2.length === 1) {
    const t3 = 48, e3 = r2[0];
    r2 = [R$1(e3.x - t3, e3.y + t3), R$1(e3.x + t3, e3.y - t3), R$1(e3.x + t3, e3.y - t3), R$1(e3.x - t3, e3.y + t3)];
  }
  const a2 = [], s2 = { x: r2[0].x, y: r2[0].y }, l2 = { x: r2[1].x, y: r2[1].y };
  if (n2) {
    const t3 = Math.round(l2.x - s2.x), e3 = Math.round(l2.y - s2.y);
    a2.push(R$1(s2.x - t3, s2.y - e3), R$1(l2.x, s2.y - e3), R$1(l2.x, l2.y), R$1(s2.x - t3, l2.y));
  } else
    a2.push(R$1(s2.x, s2.y), R$1(l2.x, s2.y), R$1(l2.x, l2.y), R$1(s2.x, l2.y));
  return z(b([m(a2.map((t3) => e2.localToMap(t3)))], e2.spatialReference, e2.doUnnormalization, true), a2, e2);
}
function z(t2, e2, o2) {
  const r$1 = w(e2[3], e2[2], o2), a2 = w(e2[1], e2[2], o2), s2 = w(e2[0], e2[1], o2), l2 = w(e2[0], e2[3], o2);
  return { geometry: t2, midpoints: r(r$1) && r(a2) && r(s2) && r(l2) ? { top: r$1, right: a2, bottom: s2, left: l2 } : null };
}
function w(t2, e2, o2) {
  L[0] = t2.x, L[1] = t2.y, L[2] = 0, v[0] = e2.x, v[1] = e2.y, v[2] = 0, A(L, L, v, 0.5), I.x = L[0], I.y = v[1], I.z = v[2];
  const r$1 = o2.localToMap(I);
  return r(r$1) ? R(r$1, o2.spatialReference) : null;
}
const I = R$1(0, 0, 0), L = n$1(), v = n$1();
function E(t$1, e2, o2, n2) {
  const s2 = e2.mapToLocalMultiple(t$1);
  let l2 = null, c2 = null;
  if (o2)
    l2 = s2[0], c2 = s2[1];
  else {
    const t2 = s2[0], e3 = s2[1], o3 = Math.round(e3.x - t2.x), n3 = Math.round(e3.y - t2.y), r2 = Math.max(Math.abs(o3), Math.abs(n3));
    l2 = R$1(o3 > 0 ? t2.x + r2 / 2 : t2.x - r2 / 2, n3 > 0 ? t2.y + r2 / 2 : t2.y - r2 / 2), c2 = R$1(Math.abs(o3) > Math.abs(n3) ? l2.x - r2 / 2 : l2.x, Math.abs(o3) > Math.abs(n3) ? l2.y : l2.y - r2 / 2);
  }
  const p2 = e2.localToMap(l2), m2 = e2.localToMap(c2);
  if (t(p2) || t(m2))
    return null;
  e2.doUnnormalization && y$2([[p2, m2]], e2.spatialReference);
  const h2 = R(p2, e2.spatialReference), M = R(m2, e2.spatialReference), g2 = $(e2.spatialReference);
  let d = 0;
  if (I$1(e2.spatialReference))
    d = g2 * f(h2, M, null);
  else {
    const t2 = l2.x - c2.x, e3 = l2.y - c2.y;
    d = g2 * Math.sqrt(t2 * t2 + e3 * e3) * (n2 || 1);
  }
  const j2 = new m$2({ center: h2, radius: d, radiusUnit: "meters", spatialReference: e2.spatialReference });
  return { geometry: b(j2.rings, j2.spatialReference, false), center: h2, edge: M };
}
function k(t2, e2, r$1) {
  const a2 = e2.mapToLocalMultiple(t2), s2 = a2[0], l2 = a2[1], i2 = Math.round(l2.x - s2.x), c2 = Math.round(l2.y - s2.y), y2 = R$1(r$1 ? s2.x : s2.x + i2 / 2, r$1 ? s2.y : s2.y + c2 / 2), p2 = r$1 ? i2 : i2 / 2, m$12 = r$1 ? c2 : c2 / 2, x = 60, u2 = [], h2 = 2 * Math.PI / x;
  function M(t3) {
    const e3 = Math.cos(t3), o2 = Math.sin(t3);
    return R$1(p2 * e3 + y2.x, m$12 * o2 + y2.y);
  }
  for (let o2 = 0; o2 < x; o2++)
    u2.push(M(o2 * h2));
  u2.push(u2[0]);
  const { spatialReference: g2, doUnnormalization: d } = e2, j2 = b([m(u2.map((t3) => e2.localToMap(t3)))], g2, d, false), T2 = e2.localToMap(M(Math.PI / 2)), U2 = e2.localToMap(M(0)), P2 = e2.localToMap(M(-Math.PI / 2)), z2 = e2.localToMap(M(Math.PI));
  return { geometry: j2, midpoints: r(T2) && r(U2) && r(P2) && r(z2) ? { top: R(T2, g2), right: R(U2, g2), bottom: R(P2, g2), left: R(z2, g2) } : null };
}
let s = class extends e$1 {
  constructor(t2) {
    super(t2), this.type = "draw-point";
  }
};
e([y$3()], s.prototype, "type", void 0), e([y$3()], s.prototype, "elevation", void 0), s = e([n$2("esri.views.interactive.tooltip.DrawPointTooltipInfo")], s);
let a = class extends e$1 {
  constructor(t2) {
    super(t2), this.type = "draw-polyline";
  }
};
e([y$3()], a.prototype, "type", void 0), e([y$3()], a.prototype, "elevation", void 0), e([y$3()], a.prototype, "totalLength", void 0), e([y$3()], a.prototype, "viewType", void 0), a = e([n$2("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")], a);
let l = class extends e$1 {
  constructor(t2) {
    super(t2), this.type = "draw-polygon";
  }
};
e([y$3()], l.prototype, "type", void 0), e([y$3()], l.prototype, "elevation", void 0), e([y$3()], l.prototype, "area", void 0), e([y$3()], l.prototype, "viewType", void 0), l = e([n$2("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")], l);
let y = class extends e$1 {
  constructor(t2) {
    super(t2), this.type = "draw-rectangle", this.xSize = j$1, this.ySize = j$1, this.area = U$1;
  }
};
e([y$3()], y.prototype, "type", void 0), e([y$3()], y.prototype, "xSize", void 0), e([y$3()], y.prototype, "ySize", void 0), e([y$3()], y.prototype, "area", void 0), y = e([n$2("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")], y);
let n = class extends e$1 {
  constructor(t2) {
    super(t2), this.type = "draw-circle", this.radius = null, this.xSize = null, this.ySize = null, this.area = U$1;
  }
};
e([y$3()], n.prototype, "type", void 0), e([y$3()], n.prototype, "radius", void 0), e([y$3()], n.prototype, "xSize", void 0), e([y$3()], n.prototype, "ySize", void 0), e([y$3()], n.prototype, "area", void 0), n = e([n$2("esri.views.interactive.tooltip.DrawCircleTooltipInfo")], n);
let Z = class extends a$1(n$3.EventedMixin(p$1)) {
  constructor(e2) {
    super(e2), this._graphic = null, this._createOperationGeometry = null, this.defaultZ = 0, this.geometryType = null, this.hasZ = true, this.labelOptions = new c(), this.mode = null, this.snappingManager = null, this.snapToScene = false, this.tooltip = null, this.tooltipOptions = new p$2();
  }
  initialize() {
    this.internalGraphicsLayer = new h$1({ listMode: "hide", internal: true }), this.view.map.layers.add(this.internalGraphicsLayer), this.drawOperation = this.makeDrawOperation(), this.handles.add([this.drawOperation.on("vertex-add", (e2) => this.onVertexAdd(e2)), this.drawOperation.on("vertex-remove", (e2) => this.onVertexRemove(e2)), this.drawOperation.on("vertex-update", (e2) => this.onVertexUpdate(e2)), this.drawOperation.on("cursor-update", (e2) => this.onCursorUpdate(e2)), this.drawOperation.on("complete", (e2) => this.onComplete(e2)), l$1(() => this.tooltipOptions.enabled, (e2) => {
      this.tooltip = e2 ? new m$4({ view: this.view, info: this._tooltipInfo }) : s$1(this.tooltip);
    }, w$3), l$1(() => this._tooltipInfo, (e2) => {
      r(this.tooltip) && (this.tooltip.info = e2);
    }, w$3)]), this.finishToolCreation();
  }
  destroy() {
    this.drawOperation = s$1(this.drawOperation), this.tooltip = s$1(this.tooltip), this._destroyAllVisualisations(), this.view.map.remove(this.internalGraphicsLayer), this.internalGraphicsLayer = s$1(this.internalGraphicsLayer), this._set("view", null);
  }
  get _defaultElevation() {
    return a$2(this.defaultZ, "meters");
  }
  get canRedo() {
    return this.drawOperation.canRedo;
  }
  get canUndo() {
    return this.drawOperation.canUndo;
  }
  set centered(e2) {
    this._set("centered", e2), this._updateGraphic();
  }
  set enabled(e2) {
    this.drawOperation.interactive = e2, this._set("enabled", e2);
  }
  set forceUniformSize(e2) {
    this._set("forceUniformSize", e2), this._updateGraphic();
  }
  get graphic() {
    return this._graphic;
  }
  set graphicSymbol(e2) {
    this._set("graphicSymbol", e2), r(this._graphic) && (this._graphic.symbol = e2);
  }
  get updating() {
    var _a, _b;
    return (_b = (_a = this.drawOperation) == null ? void 0 : _a.updating) != null ? _b : false;
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onInputEvent(e2) {
    this.drawOperation.onInputEvent(e2);
  }
  redo() {
    this.drawOperation.redo();
  }
  reset() {
  }
  undo() {
    this.drawOperation.undo();
  }
  _createGraphic(e2) {
    this._graphic = new g(__spreadProps(__spreadValues({}, this.graphicProperties), { geometry: e2, symbol: this.graphicSymbol })), this.internalGraphicsLayer.add(this._graphic), this.handles.add(this.initializeGraphic(this._graphic)), this.notifyChange("graphic"), this.handles.add(n$4(() => {
      r(this._graphic) && (this.internalGraphicsLayer.remove(this._graphic), this._graphic = s$1(this._graphic));
    }), H);
  }
  _destroyAllVisualisations() {
    this.handles.remove(N.outline), this.handles.remove(N.regularVertices), this.handles.remove(N.activeVertex), this.handles.remove(H);
  }
  _getCreateOperationGeometry(e2 = { operationComplete: false }) {
    if (this.drawOperation == null || this.drawOperation.numVertices === 0)
      return null;
    const t2 = this.drawOperation.stagedVertex, i2 = this.drawOperation.committedVertices, o2 = i2.slice();
    r(t2) && o2.push(this.drawOperation.coordinateHelper.pointToArray(t2));
    const r$1 = r(t2) ? this.drawOperation.coordinateHelper.pointToArray(t2) : i2.splice(-1)[0], n2 = { regularVertices: null, activeVertex: null, full: null, outline: null, circle: null, rectangle: null }, a2 = o2.length, s2 = this.view.spatialReference, p2 = this.view.type === "3d" && this.view.viewingMode === "global";
    switch (this.geometryType) {
      case "point":
        n2.regularVertices = i2, n2.activeVertex = r$1, n2.full = this.drawOperation.coordinateHelper.arrayToPoint(o2[0]);
        break;
      case "multipoint":
        n2.regularVertices = i2, n2.activeVertex = r$1, a2 > 0 && (n2.full = j(o2, s2));
        break;
      case "polyline":
        n2.regularVertices = i2, n2.activeVertex = r$1, a2 > 0 && (n2.full = T([o2], s2, p2));
        break;
      case "polygon":
        n2.regularVertices = i2, n2.activeVertex = r$1, a2 > 0 && (n2.full = b([o2], s2, p2, true));
        break;
      case "circle":
        if (a2 > 0) {
          const t3 = S(this.view, o2[0]);
          if (a2 === 1 && e2.operationComplete) {
            const e3 = o2[0], i3 = t3.makeMapPoint(e3[0] + B * this.view.resolution, e3[1]);
            n2.circle = E([e3, i3], t3, true), n2.full = r(n2.circle) ? n2.circle.geometry : null;
          } else
            a2 === 2 && (this.forceUniformSize ? (n2.circle = E(o2, t3, this.centered), n2.full = r(n2.circle) ? n2.circle.geometry : null) : (n2.rectangle = k(o2, t3, this.centered), n2.full = n2.rectangle.geometry));
        }
        break;
      case "rectangle":
        if (a2 > 0) {
          const t3 = S(this.view, o2[0]);
          if (a2 === 1 && e2.operationComplete) {
            const e3 = o2[0], i3 = t3.makeMapPoint(e3[0] + B * this.view.resolution, e3[1]);
            n2.rectangle = U([e3, i3], t3, true), n2.full = n2.rectangle.geometry;
          } else
            a2 === 2 && (n2.rectangle = this.forceUniformSize ? U(o2, t3, this.centered) : P(o2, t3, this.centered), n2.full = n2.rectangle.geometry);
        }
        break;
      default:
        return null;
    }
    switch (this.geometryType) {
      case "point":
      case "multipoint":
        break;
      case "polyline":
      case "polygon":
        a2 > 1 && (n2.outline = T([o2], s2, p2));
        break;
      case "circle":
      case "rectangle":
        r(n2.full) && n2.full.type === "polygon" && (n2.outline = b(n2.full.rings, s2, p2));
    }
    return n2;
  }
  initializeGraphic(e2) {
    return null;
  }
  onComplete(e2) {
    this._updateGraphic();
    let t$1 = null;
    if (this.drawOperation.isCompleted) {
      const e3 = this._getCreateOperationGeometry({ operationComplete: true });
      r(e3) && (t(this._graphic) ? this._createGraphic(e3.full) : this._graphic.geometry = e3.full, t$1 = e$2(this._graphic).clone());
    }
    this._createOperationGeometry = null, this.emit("complete", __spreadValues({ graphic: t$1 }, e2));
  }
  onCursorUpdate(e2) {
    this._updateGraphic(), this.emit("cursor-update", e2);
  }
  onDeactivate() {
    this.drawOperation.isCompleted || this.drawOperation.cancel();
  }
  onVertexAdd(e2) {
    this._updateGraphic(), this.emit("vertex-add", e2);
  }
  onVertexRemove(e2) {
    this._updateGraphic(), this.emit("vertex-remove", e2);
  }
  onVertexUpdate(e2) {
    this._updateGraphic(), this.emit("vertex-update", e2);
  }
  _updateGraphic() {
    const e2 = this._getCreateOperationGeometry();
    this._createOperationGeometry = e2, t(e2) ? this._destroyAllVisualisations() : (r(e2.outline) ? this.handles.add(this.onOutlineChanged(e2.outline), N.outline) : this.handles.remove(N.outline), r(e2.regularVertices) ? this.handles.add(this.onRegularVerticesChanged(e2.regularVertices), N.regularVertices) : this.handles.remove(N.regularVertices), r(e2.activeVertex) ? this.handles.add(this.onActiveVertexChanged(e2.activeVertex), N.activeVertex) : this.handles.remove(N.activeVertex), r(e2.full) ? t(this._graphic) ? this._createGraphic(e2.full) : this._graphic.geometry = e2.full : this.handles.remove(H));
  }
  get _tooltipInfo() {
    const { drawOperation: e2 } = this;
    if (!e2)
      return null;
    switch (this.geometryType) {
      case "point":
        return this._drawPointTooltipInfo;
      case "polyline":
        return this._drawPolylineTooltipInfo;
      case "polygon":
        return this._drawPolygonTooltipInfo;
      case "rectangle":
        return this._drawRectangleTooltipInfo;
      case "circle":
        return this._drawCircleTooltipInfo;
      default:
        return null;
    }
  }
  get _drawPointTooltipInfo() {
    const e2 = o(this.graphic, (e3) => e3.geometry);
    return t(e2) || e2.type !== "point" || this.view.type === "2d" && this.defaultZ === 0 ? null : new s({ tooltipOptions: this.tooltipOptions, elevation: this._elevationTooltipDetail });
  }
  get _drawPolylineTooltipInfo() {
    const e2 = this._createOperationGeometry, t$1 = r(e2) ? e2.full : null;
    if (t(t$1) || t$1.type !== "polyline")
      return null;
    const i2 = m$3(t$1, this._elevationMode);
    return new a({ tooltipOptions: this.tooltipOptions, elevation: this._elevationTooltipDetail, totalLength: i$1(i2, j$1), viewType: this.view.type });
  }
  get _drawPolygonTooltipInfo() {
    const e2 = this._createOperationGeometry, t$1 = r(e2) ? e2.full : null;
    if (t(t$1) || t$1.type !== "polygon")
      return null;
    const i2 = i$2(t$1, this._elevationMode);
    return new l({ tooltipOptions: this.tooltipOptions, elevation: this._elevationTooltipDetail, area: i$1(i2, U$1), viewType: this.view.type });
  }
  get _drawRectangleTooltipInfo() {
    return t(this.drawOperation) ? null : new y({ tooltipOptions: this.tooltipOptions, xSize: i$1(this._xSize, j$1), ySize: i$1(this._ySize, j$1), area: i$1(this._fullGeometryArea, U$1) });
  }
  get _drawCircleTooltipInfo() {
    if (t(this.drawOperation))
      return null;
    const e2 = this.forceUniformSize;
    return new n({ tooltipOptions: this.tooltipOptions, radius: e2 ? i$1(this._circleRadius, j$1) : null, xSize: e2 ? null : i$1(this._xSize, j$1), ySize: e2 ? null : i$1(this._ySize, j$1), area: i$1(this._fullGeometryArea, U$1) });
  }
  get _circleRadius() {
    const e2 = this._createOperationGeometry;
    return r(e2) && r(e2.circle) && r(e2.circle.center) && r(e2.circle.edge) ? a$3(e2.circle.center, e2.circle.edge, this._elevationMode) : null;
  }
  get _xSize() {
    const e2 = this._createOperationGeometry;
    if (t(e2) || t(e2.rectangle))
      return null;
    const { midpoints: t$1 } = e2.rectangle;
    return r(t$1) ? a$3(t$1.left, t$1.right, this._elevationMode) : null;
  }
  get _ySize() {
    const e2 = this._createOperationGeometry;
    if (t(e2) || t(e2.rectangle))
      return null;
    const { midpoints: t$1 } = e2.rectangle;
    return r(t$1) ? a$3(t$1.top, t$1.bottom, this._elevationMode) : null;
  }
  get _fullGeometryArea() {
    const e2 = this._createOperationGeometry, t$1 = r(e2) ? e2.full : null;
    return t(t$1) || t$1.type !== "polygon" ? null : i$2(t$1, this._elevationMode);
  }
  get _elevationTooltipDetail() {
    return __spreadValues({ mode: this.drawOperation.elevationInfo.mode }, this._vertexTooltipElevation);
  }
  get _vertexTooltipElevation() {
    var _a;
    const { tooltipOptions: e2, view: t$1, drawOperation: i2 } = this;
    if (t(i2))
      return this._defaultElevation;
    const o2 = (_a = i2.stagedVertex) != null ? _a : i2.lastVertex;
    if (t(o2) || t$1.type === "2d")
      return this._defaultElevation;
    const r2 = { mode: e2.elevation.mode, offset: 0 }, n2 = g$1(t$1, o2, i2.elevationInfo, r2) * L$1(o2.spatialReference);
    return a$2(n2, "meters");
  }
  get _elevationMode() {
    return this.drawOperation.isDraped ? "on-the-ground" : "absolute-height";
  }
};
e([y$3()], Z.prototype, "_createOperationGeometry", void 0), e([y$3()], Z.prototype, "_defaultElevation", null), e([y$3({ value: true })], Z.prototype, "centered", null), e([y$3({ nonNullable: true })], Z.prototype, "defaultZ", void 0), e([y$3()], Z.prototype, "drawOperation", void 0), e([y$3({ value: true })], Z.prototype, "enabled", null), e([y$3({ value: true })], Z.prototype, "forceUniformSize", null), e([y$3({ constructOnly: true })], Z.prototype, "geometryType", void 0), e([y$3()], Z.prototype, "graphic", null), e([y$3({ constructOnly: true })], Z.prototype, "graphicProperties", void 0), e([y$3()], Z.prototype, "graphicSymbol", null), e([y$3({ constructOnly: true })], Z.prototype, "hasZ", void 0), e([y$3({ constructOnly: true, type: c })], Z.prototype, "labelOptions", void 0), e([y$3({ constructOnly: true })], Z.prototype, "mode", void 0), e([y$3()], Z.prototype, "snappingManager", void 0), e([y$3()], Z.prototype, "snapToScene", void 0), e([y$3()], Z.prototype, "tooltip", void 0), e([y$3({ constructOnly: true, type: p$2 })], Z.prototype, "tooltipOptions", void 0), e([y$3({ readOnly: true })], Z.prototype, "type", void 0), e([y$3({ readOnly: true })], Z.prototype, "updating", null), e([y$3({ constructOnly: true, nonNullable: true })], Z.prototype, "view", void 0), e([y$3()], Z.prototype, "_tooltipInfo", null), e([y$3()], Z.prototype, "_drawPointTooltipInfo", null), e([y$3()], Z.prototype, "_drawPolylineTooltipInfo", null), e([y$3()], Z.prototype, "_drawPolygonTooltipInfo", null), e([y$3()], Z.prototype, "_drawRectangleTooltipInfo", null), e([y$3()], Z.prototype, "_drawCircleTooltipInfo", null), e([y$3()], Z.prototype, "_circleRadius", null), e([y$3()], Z.prototype, "_xSize", null), e([y$3()], Z.prototype, "_ySize", null), e([y$3()], Z.prototype, "_fullGeometryArea", null), e([y$3()], Z.prototype, "_elevationTooltipDetail", null), e([y$3()], Z.prototype, "_vertexTooltipElevation", null), e([y$3()], Z.prototype, "_elevationMode", null), Z = e([n$2("esri.views.draw.DrawGraphicTool")], Z);
const H = "create-operation-graphic", N = { outline: "outline-visual", regularVertices: "regular-vertices-visual", activeVertex: "active-vertex-visual" };
function q(e2) {
  switch (e2) {
    case "point":
    case "polyline":
    case "polygon":
    case "multipoint":
      return e2;
    case "circle":
    case "rectangle":
      return "segment";
    default:
      return null;
  }
}
const B = 48;
export { Z, q };
