import { v, l as m, w, u, hV as h, y, hT as S, hS as m$1, F as n, J as p, dO as u$1, hW as r, hX as h$1, cK as f, L as l, s as s$1, hR as s$2, hY as i$1, hZ as a, h_ as m$3, b as g, r as r$1, x as t, c as e, f as y$1, h as n$1, hP as e$1, P as w$1 } from "./index.js";
import { c as m$2, k as h$3, j } from "./automaticLengthMeasurementUtils.js";
import { h as h$2, D as D$1 } from "./GraphicMover.js";
import { i as i$2, p as p$1 } from "./ExtentTooltipInfos.js";
import { r as r$2 } from "./TranslateTooltipInfos.js";
import "vue";
import "./GraphicManipulator.js";
import "./drapedUtils.js";
function i(n2) {
  let e2 = 0, t2 = 0;
  const r2 = n2.length;
  let i2, o2 = n2[t2];
  for (t2 = 0; t2 < r2 - 1; t2++)
    i2 = n2[t2 + 1], e2 += (i2[0] - o2[0]) * (i2[1] + o2[1]), o2 = i2;
  return e2 >= 0;
}
function o(n2, e2, t2, r2) {
  const i2 = [];
  for (const o2 of n2) {
    const n3 = o2.slice(0);
    i2.push(n3);
    const s2 = e2 * (o2[0] - r2.x) - t2 * (o2[1] - r2.y) + r2.x, c = t2 * (o2[0] - r2.x) + e2 * (o2[1] - r2.y) + r2.y;
    n3[0] = s2, n3[1] = c;
  }
  return i2;
}
function s(s2, c, a2) {
  const f2 = s2.spatialReference, m$12 = c * Math.PI / 180, x = Math.cos(m$12), p2 = Math.sin(m$12);
  if ("xmin" in s2 && (a2 = a2 != null ? a2 : s2.center, s2 = new v({ spatialReference: f2, rings: [[[s2.xmin, s2.ymin], [s2.xmin, s2.ymax], [s2.xmax, s2.ymax], [s2.xmax, s2.ymin], [s2.xmin, s2.ymin]]] })), "paths" in s2) {
    a2 = a2 != null ? a2 : s2.extent.center;
    const n2 = [];
    for (const e2 of s2.paths)
      n2.push(o(e2, x, p2, a2));
    return new m({ spatialReference: f2, paths: n2 });
  }
  if ("rings" in s2) {
    a2 = a2 != null ? a2 : s2.extent.center;
    const e2 = [];
    for (const n2 of s2.rings) {
      const t2 = i(n2), r2 = o(n2, x, p2, a2);
      i(r2) !== t2 && r2.reverse(), e2.push(r2);
    }
    return new v({ spatialReference: f2, rings: e2 });
  }
  if ("x" in s2) {
    a2 = a2 != null ? a2 : s2;
    const n2 = new w({ x: x * (s2.x - a2.x) - p2 * (s2.y - a2.y) + a2.x, y: p2 * (s2.x - a2.x) + x * (s2.y - a2.y) + a2.y, spatialReference: f2 });
    return s2.z != null && (n2.z = s2.z), s2.m != null && (n2.m = s2.m), n2;
  }
  return "points" in s2 ? (a2 = a2 != null ? a2 : s2.extent.center, new u({ points: o(s2.points, x, p2, a2), spatialReference: f2 })) : null;
}
class L {
  constructor(t2, e2, i2, s2) {
    this.graphics = t2, this.mover = e2, this.dx = i2, this.dy = s2, this.type = "move-start";
  }
}
class z {
  constructor(t2, e2, i2, s2) {
    this.graphics = t2, this.mover = e2, this.dx = i2, this.dy = s2, this.type = "move";
  }
}
class Y {
  constructor(t2, e2, i2, s2) {
    this.graphics = t2, this.mover = e2, this.dx = i2, this.dy = s2, this.type = "move-stop";
  }
}
class N {
  constructor(t2, e2, i2) {
    this.graphics = t2, this.mover = e2, this.angle = i2, this.type = "rotate-start";
  }
}
class U {
  constructor(t2, e2, i2) {
    this.graphics = t2, this.mover = e2, this.angle = i2, this.type = "rotate";
  }
}
class A {
  constructor(t2, e2, i2) {
    this.graphics = t2, this.mover = e2, this.angle = i2, this.type = "rotate-stop";
  }
}
class P {
  constructor(t2, e2, i2, s2) {
    this.graphics = t2, this.mover = e2, this.xScale = i2, this.yScale = s2, this.type = "scale-start";
  }
}
class X {
  constructor(t2, e2, i2, s2) {
    this.graphics = t2, this.mover = e2, this.xScale = i2, this.yScale = s2, this.type = "scale";
  }
}
class D {
  constructor(t2, e2, i2, s2) {
    this.graphics = t2, this.mover = e2, this.xScale = i2, this.yScale = s2, this.type = "scale-stop";
  }
}
const V = h.transformGraphics, F = { centerIndicator: new y({ style: "cross", size: V.center.size, color: V.center.color }), fill: { default: new S({ color: V.fill.color, outline: { color: V.fill.outlineColor, join: "round", width: 1 } }), active: new S({ color: V.fill.stagedColor, outline: { color: V.fill.outlineColor, join: "round", style: "dash", width: 1 } }) }, handles: { default: new y({ style: "square", size: V.vertex.size, color: V.vertex.color, outline: { color: V.vertex.outlineColor, width: 1 } }), hover: new y({ style: "square", size: V.vertex.hoverSize, color: V.vertex.hoverColor, outline: { color: V.vertex.hoverOutlineColor, width: 1 } }) }, rotator: { default: new y({ style: "circle", size: V.vertex.size, color: V.vertex.color, outline: { color: V.vertex.outlineColor, width: 1 } }), hover: new y({ style: "circle", size: V.vertex.hoverSize, color: V.vertex.hoverColor, outline: { color: V.vertex.hoverOutlineColor, width: 1 } }) }, rotatorLine: new m$1({ color: V.line.color, width: 1 }) };
let q = class extends n.EventedAccessor {
  constructor(t2) {
    super(t2), this._activeHandleGraphic = null, this._graphicAttributes = { esriSketchTool: "box" }, this._mover = null, this._centerGraphic = null, this._backgroundGraphic = null, this._vertexGraphics = [], this._rotateHandleGraphic = null, this._rotateGraphicOffset = 20, this._angleOfRotation = 0, this._rotateLineGraphic = null, this._startInfo = null, this._tooltip = null, this._totalDx = 0, this._totalDy = 0, this._xScale = 1, this._yScale = 1, this.type = "box", this.callbacks = { onMoveStart() {
    }, onMove() {
    }, onMoveStop() {
    }, onScaleStart() {
    }, onScale() {
    }, onScaleStop() {
    }, onRotateStart() {
    }, onRotate() {
    }, onRotateStop() {
    }, onGraphicClick() {
    } }, this.enableMovement = true, this.enableRotation = true, this.enableScaling = true, this.graphics = [], this.highlightsEnabled = true, this.layer = null, this.preserveAspectRatio = false, this.showCenterGraphic = true, this.symbols = F, this.tooltipOptions = new p(), this.view = null, this._getBounds = (() => {
      const t3 = u$1();
      return (e2, i2) => {
        e2[0] = Number.POSITIVE_INFINITY, e2[1] = Number.POSITIVE_INFINITY, e2[2] = Number.NEGATIVE_INFINITY, e2[3] = Number.NEGATIVE_INFINITY;
        for (const s2 of i2) {
          if (!s2)
            continue;
          let i3, r$12, o2, a2;
          if (s2.type === "point")
            i3 = o2 = s2.x, r$12 = a2 = s2.y;
          else if (s2.type === "multipoint") {
            const e3 = r(s2);
            [i3, r$12, o2, a2] = h$1(t3, [e3]);
          } else if (s2.type === "extent")
            [i3, r$12, o2, a2] = [s2.xmin, s2.ymin, s2.xmax, s2.ymax];
          else {
            const e3 = r(s2);
            [i3, r$12, o2, a2] = h$1(t3, e3);
          }
          e2[0] = Math.min(i3, e2[0]), e2[1] = Math.min(r$12, e2[1]), e2[2] = Math.max(o2, e2[2]), e2[3] = Math.max(a2, e2[3]);
        }
        return e2;
      };
    })();
  }
  initialize() {
    const t2 = this.view;
    this._highlightHelper = new h$2({ view: t2 }), this._tooltip = new m$2({ view: t2 }), this._setup(), this.addHandles([f(() => t2 == null ? void 0 : t2.ready, () => {
      const { layer: t3, view: e2 } = this;
      e$1(e2, t3);
    }, { once: true, initial: true }), l(() => this.preserveAspectRatio, () => {
      this._activeHandleGraphic && (this._scaleGraphic(this._activeHandleGraphic), this._updateGraphics(), this._updateTooltip(this._activeHandleGraphic));
    }), l(() => t2 == null ? void 0 : t2.scale, () => {
      this._updateRotateGraphic(), this._updateRotateLineGraphic();
    }), l(() => this.graphics, () => this.refresh()), l(() => this.layer, (t3, e2) => {
      e2 && this._resetGraphics(e2), this.refresh();
    }), l(() => this.highlightsEnabled, () => {
      var _a;
      (_a = this._highlightHelper) == null ? void 0 : _a.removeAll(), this._setUpHighlights();
    }), l(() => this.tooltipOptions.enabled, (t3) => {
      this._tooltip = t3 ? new m$2({ view: this.view }) : s$1(this._tooltip);
    }, w$1), this.on("move-start", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onMoveStart) == null ? void 0 : _b.call(_a, t3);
    }), this.on("move", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onMove) == null ? void 0 : _b.call(_a, t3);
    }), this.on("move-stop", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onMoveStop) == null ? void 0 : _b.call(_a, t3);
    }), this.on("rotate-start", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onRotateStart) == null ? void 0 : _b.call(_a, t3);
    }), this.on("rotate", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onRotate) == null ? void 0 : _b.call(_a, t3);
    }), this.on("rotate-stop", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onRotateStop) == null ? void 0 : _b.call(_a, t3);
    }), this.on("scale-start", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onScaleStart) == null ? void 0 : _b.call(_a, t3);
    }), this.on("scale", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onScale) == null ? void 0 : _b.call(_a, t3);
    }), this.on("scale-stop", (t3) => {
      var _a, _b;
      return (_b = (_a = this.callbacks) == null ? void 0 : _a.onScaleStop) == null ? void 0 : _b.call(_a, t3);
    })]);
  }
  destroy() {
    this._reset(), this._tooltip = s$1(this._tooltip);
  }
  get state() {
    var _a, _b;
    const t2 = (_b = (_a = this.view) == null ? void 0 : _a.ready) != null ? _b : false, e2 = this.graphics.length && this.layer;
    return t2 && e2 ? "active" : t2 ? "ready" : "disabled";
  }
  isUIGraphic(t2) {
    return this._vertexGraphics.includes(t2) || t2 === this._backgroundGraphic || t2 === this._centerGraphic || t2 === this._rotateHandleGraphic || t2 === this._rotateLineGraphic;
  }
  move(t2, e2) {
    if (this._mover && this.graphics.length) {
      for (const i2 of this.graphics) {
        const s2 = i2.geometry, r2 = s$2(s2, t2, e2, this.view);
        i2.geometry = r2;
      }
      this.refresh(), this.emit("move-stop", new Y(this.graphics, null, t2, e2));
    }
  }
  scale(t2, e2) {
    if (this._mover && this.graphics.length) {
      for (const i2 of this.graphics) {
        const s2 = i2.geometry, r2 = i$1(s2, t2, e2);
        i2.geometry = r2;
      }
      this.refresh(), this.emit("scale-stop", new D(this.graphics, null, t2, e2));
    }
  }
  rotate(t2, e2) {
    if (this._mover && this.graphics.length) {
      if (!e2) {
        const t3 = this._vertexGraphics[1].geometry.x, i2 = this._vertexGraphics[3].geometry.y;
        e2 = new w(t3, i2, this.view.spatialReference);
      }
      for (const i2 of this.graphics) {
        const s$12 = i2.geometry, r2 = s(s$12, t2, e2);
        i2.geometry = r2;
      }
      this.refresh(), this.emit("rotate-stop", new A(this.graphics, null, t2));
    }
  }
  refresh() {
    this._reset(), this._setup();
  }
  reset() {
    this.graphics = [];
  }
  _setup() {
    this.state === "active" && (this._setUpHighlights(), this._setupGraphics(), this._setupMover(), this._updateGraphics());
  }
  _reset() {
    this._highlightHelper.removeAll(), this._resetGraphicStateVars(), this._resetGraphics(), this._updateTooltip(), this._mover && this._mover.destroy(), this._mover = null, this.view.cursor = "default";
  }
  _resetGraphicStateVars() {
    this._startInfo = null, this._activeHandleGraphic = null, this._totalDx = 0, this._totalDy = 0, this._xScale = 1, this._yScale = 1, this._angleOfRotation = 0;
  }
  _resetGraphics(t2) {
    (t2 = t2 || this.layer) && (t2.removeMany(this._vertexGraphics), t2.remove(this._backgroundGraphic), t2.remove(this._centerGraphic), t2.remove(this._rotateHandleGraphic), t2.remove(this._rotateLineGraphic)), this._vertexGraphics = [], this._backgroundGraphic = null, this._centerGraphic = null, this._rotateHandleGraphic = null, this._rotateLineGraphic = null;
  }
  _setupMover() {
    let t2 = [];
    this.enableScaling && (t2 = t2.concat(this._vertexGraphics)), this.enableMovement && (t2 = t2.concat(this.graphics, this._backgroundGraphic)), this.enableRotation && t2.push(this._rotateHandleGraphic), this.showCenterGraphic && t2.push(this._centerGraphic), this._mover = new D$1({ enableMoveAllGraphics: false, highlightsEnabled: false, indicatorsEnabled: false, view: this.view, graphics: t2, callbacks: { onGraphicClick: (t3) => this._onGraphicClickCallback(t3), onGraphicMoveStart: (t3) => this._onGraphicMoveStartCallback(t3), onGraphicMove: (t3) => this._onGraphicMoveCallback(t3), onGraphicMoveStop: (t3) => this._onGraphicMoveStopCallback(t3), onGraphicPointerOver: (t3) => this._onGraphicPointerOverCallback(t3), onGraphicPointerOut: (t3) => this._onGraphicPointerOutCallback(t3) } });
  }
  _getStartInfo(t2) {
    const [e2, i2, s2, r2] = this._getBoxBounds(u$1()), o2 = Math.abs(s2 - e2), a2 = Math.abs(r2 - i2), h2 = (s2 + e2) / 2, c = (r2 + i2) / 2, { x: n2, y: l2 } = t2.geometry;
    return { width: o2, height: a2, centerX: h2, centerY: c, startX: n2, startY: l2, graphicInfos: this._getGraphicInfos(), box: this._backgroundGraphic.geometry, rotate: this._rotateHandleGraphic.geometry };
  }
  _getGraphicInfos() {
    return this.graphics.map((t2) => this._getGraphicInfo(t2));
  }
  _getGraphicInfo(t2) {
    const e2 = t2.geometry, [i2, s2, r2, o2] = this._getBounds(u$1(), [e2]);
    return { width: Math.abs(r2 - i2), height: Math.abs(o2 - s2), centerX: (r2 + i2) / 2, centerY: (o2 + s2) / 2, geometry: e2 };
  }
  _onGraphicClickCallback(t2) {
    t2.viewEvent.stopPropagation(), this.emit("graphic-click", t2), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(t2);
  }
  _onGraphicMoveStartCallback(t2) {
    const { _angleOfRotation: e2, _xScale: i2, _yScale: s2, _backgroundGraphic: r2, _vertexGraphics: o2, _rotateHandleGraphic: a2, symbols: h2 } = this, c = t2.graphic;
    this._resetGraphicStateVars(), this._hideGraphicsBeforeUpdate(), r2.symbol = h2.fill.active, this._startInfo = this._getStartInfo(c), this._updateTooltip(c, t2.viewEvent), c === a2 ? (this.view.cursor = "grabbing", this.emit("rotate-start", new N(this.graphics, c, e2))) : o2.includes(c) ? (this._activeHandleGraphic = c, this.emit("scale-start", new P(this.graphics, c, i2, s2))) : this.emit("move-start", new L(this.graphics, c, t2.dx, t2.dy));
  }
  _onGraphicMoveCallback(t2) {
    const e2 = t2.graphic;
    if (this._startInfo)
      if (this._vertexGraphics.includes(e2))
        this._scaleGraphic(e2), this._updateTooltip(e2, t2.viewEvent), this.emit("scale", new X(this.graphics, e2, this._xScale, this._yScale));
      else if (e2 === this._rotateHandleGraphic)
        this._rotateGraphic(e2), this._updateTooltip(e2, t2.viewEvent), this.emit("rotate", new U(this.graphics, e2, this._angleOfRotation));
      else {
        const { dx: i2, dy: s2 } = t2;
        this._totalDx += i2, this._totalDy += s2, this._moveGraphic(e2, i2, s2), this._updateTooltip(e2, t2.viewEvent), this.emit("move", new z(this.graphics, e2, i2, s2));
      }
  }
  _onGraphicMoveStopCallback(t2) {
    const e2 = t2.graphic;
    if (!this._startInfo)
      return void this.refresh();
    const { _angleOfRotation: i2, _totalDx: s2, _totalDy: r2, _xScale: o2, _yScale: a2, _vertexGraphics: h2, _rotateHandleGraphic: c } = this;
    this.refresh(), e2 === c ? (this.view.cursor = "pointer", this.emit("rotate-stop", new A(this.graphics, e2, i2))) : h2.includes(e2) ? this.emit("scale-stop", new D(this.graphics, e2, o2, a2)) : this.emit("move-stop", new Y(this.graphics, e2, s2, r2));
  }
  _onGraphicPointerOverCallback(t2) {
    const { _backgroundGraphic: e2, _vertexGraphics: i2, graphics: s2, _rotateHandleGraphic: r2, symbols: o2, view: a2 } = this, h2 = t2.graphic;
    if (h2 === r2)
      return r2.symbol = o2.rotator.hover, a2.cursor = "pointer", void this._updateTooltip(h2);
    if (s2.includes(h2) || h2 === e2)
      return void (a2.cursor = "move");
    if (!i2.includes(h2))
      return void (a2.cursor = "pointer");
    this._updateTooltip(h2), t2.graphic.symbol = o2.handles.hover;
    const c = a2.rotation;
    let n2, l2 = t2.index;
    switch (l2 < 8 && (c >= 0 && c < 45 ? l2 %= 8 : l2 = c >= 45 && c < 90 ? (l2 + 1) % 8 : c >= 90 && c < 135 ? (l2 + 2) % 8 : c >= 135 && c < 180 ? (l2 + 3) % 8 : c >= 180 && c < 225 ? (l2 + 4) % 8 : c >= 225 && c < 270 ? (l2 + 5) % 8 : c >= 270 && c < 315 ? (l2 + 6) % 8 : (l2 + 7) % 8), l2) {
      case 0:
      case 4:
        n2 = "nwse-resize";
        break;
      case 1:
      case 5:
        n2 = "ns-resize";
        break;
      case 2:
      case 6:
        n2 = "nesw-resize";
        break;
      case 3:
      case 7:
        n2 = "ew-resize";
        break;
      default:
        n2 = "pointer";
    }
    a2.cursor = n2;
  }
  _onGraphicPointerOutCallback(t2) {
    const { _vertexGraphics: e2, _rotateHandleGraphic: i2, symbols: s2, view: r2 } = this;
    t2.graphic === i2 ? i2.symbol = s2.rotator.default : e2.includes(t2.graphic) && (t2.graphic.symbol = s2.handles.default), r2.cursor = "default", this._updateTooltip();
  }
  _scaleGraphic(t2) {
    const { _startInfo: e2, _vertexGraphics: i2, preserveAspectRatio: s2, view: r2 } = this, { centerX: o2, centerY: a$1, startX: h2, startY: c } = e2, { resolution: n2, transform: l2 } = r2.state, p2 = i2.indexOf(t2);
    p2 !== 1 && p2 !== 5 || this._updateX(t2, o2), p2 !== 3 && p2 !== 7 || this._updateY(t2, a$1);
    const { x: _, y: d } = t2.geometry, g2 = l2[0] * _ + l2[2] * d + l2[4], u2 = l2[1] * _ + l2[3] * d + l2[5], m2 = e2.graphicInfos.map((t3) => t3.geometry);
    if (s2) {
      const t3 = l2[0] * o2 + l2[2] * a$1 + l2[4], e3 = l2[1] * o2 + l2[3] * a$1 + l2[5], i3 = l2[0] * h2 + l2[2] * c + l2[4], s3 = l2[1] * h2 + l2[3] * c + l2[5];
      this._xScale = this._yScale = a(t3, e3, i3, s3, g2, u2);
      for (const r3 of m2) {
        const t4 = m2.indexOf(r3);
        this.graphics[t4].geometry = i$1(r3, this._xScale, this._yScale, [o2, a$1]);
      }
      this._updateBackgroundGraphic();
    } else {
      const { width: t3, height: i3 } = e2;
      let s3 = _ - h2, l3 = c - d;
      if (p2 === 1 || p2 === 5 ? s3 = 0 : p2 !== 3 && p2 !== 7 || (l3 = 0), s3 === 0 && l3 === 0)
        return;
      const g3 = t3 + (h2 > o2 ? s3 : -1 * s3), u3 = i3 + (c < a$1 ? l3 : -1 * l3), v2 = o2 + s3 / 2, y2 = a$1 + l3 / 2;
      this._xScale = g3 / t3 || 1, this._yScale = u3 / i3 || 1, p2 === 1 || p2 === 5 ? this._xScale = 1 : p2 !== 3 && p2 !== 7 || (this._yScale = 1);
      const b = (v2 - o2) / n2, w$12 = (y2 - a$1) / n2, x = i$1(e2.box, this._xScale, this._yScale);
      this._backgroundGraphic.geometry = s$2(x, b, w$12, r2, true);
      const { centerX: S2, centerY: k } = this._getGraphicInfo(this._backgroundGraphic), R = (S2 - o2) / n2, I = -1 * (k - a$1) / n2;
      for (const e3 of m2) {
        const t4 = m2.indexOf(e3), i4 = i$1(e3, this._xScale, this._yScale, [o2, a$1]);
        this.graphics[t4].geometry = s$2(i4, R, I, r2, true);
      }
      this._centerGraphic.geometry = new w(S2, k, r2.spatialReference);
    }
  }
  _rotateGraphic(t2) {
    const { centerX: e2, centerY: i2, startX: s$12, startY: r2, box: o2, rotate: a2 } = this._startInfo, h2 = new w(s$12, r2, this.view.spatialReference), c = new w(e2, i2, this.view.spatialReference), n2 = t2.geometry;
    this._angleOfRotation = m$3(h2, n2, c);
    const l2 = this._startInfo.graphicInfos.map((t3) => t3.geometry);
    for (const p2 of l2) {
      const t3 = l2.indexOf(p2), e3 = s(p2, this._angleOfRotation, c);
      this.graphics[t3].geometry = e3;
    }
    this._backgroundGraphic.geometry = s(o2, this._angleOfRotation, c), this._rotateHandleGraphic.geometry = s(a2, this._angleOfRotation, c);
  }
  _moveGraphic(t2, e2, i2) {
    if (this.graphics.includes(t2)) {
      const s2 = this._backgroundGraphic.geometry;
      this._backgroundGraphic.geometry = s$2(s2, e2, i2, this.view);
      for (const r2 of this.graphics)
        r2 !== t2 && (r2.geometry = s$2(r2.geometry, e2, i2, this.view));
    } else if (t2 === this._centerGraphic) {
      const t3 = this._backgroundGraphic.geometry;
      this._backgroundGraphic.geometry = s$2(t3, e2, i2, this.view);
    }
    if (t2 === this._backgroundGraphic || t2 === this._centerGraphic)
      for (const s2 of this.graphics)
        s2.geometry = s$2(s2.geometry, e2, i2, this.view);
  }
  _setUpHighlights() {
    var _a;
    this.highlightsEnabled && this.graphics.length && ((_a = this._highlightHelper) == null ? void 0 : _a.add(this.graphics));
  }
  _setupGraphics() {
    const { _graphicAttributes: t2, symbols: i2 } = this;
    this._centerGraphic = new g(null, i2.centerIndicator, t2), this.showCenterGraphic && this.layer.add(this._centerGraphic), this._backgroundGraphic = new g(null, i2.fill.default, t2), this.layer.add(this._backgroundGraphic), this._rotateLineGraphic = new g(null, i2.rotatorLine, t2), this._rotateHandleGraphic = new g(null, i2.rotator.default, t2), this.enableRotation && !this._hasExtentGraphic() && this.layer.addMany([this._rotateLineGraphic, this._rotateHandleGraphic]);
    for (let s2 = 0; s2 < 8; s2++)
      this._vertexGraphics.push(new g(null, i2.handles.default, t2));
    this.enableScaling && this.layer.addMany(this._vertexGraphics);
  }
  _updateGraphics() {
    this._updateBackgroundGraphic(), this._updateHandleGraphics(), this._updateCenterGraphic(), this._updateRotateGraphic(), this._updateRotateLineGraphic();
  }
  _hideGraphicsBeforeUpdate() {
    this._centerGraphic.visible = false, this._rotateHandleGraphic.visible = false, this._rotateLineGraphic.visible = false, this._vertexGraphics.forEach((t2) => t2.visible = false);
  }
  _updateHandleGraphics() {
    const t2 = this._getCoordinates(true);
    this._vertexGraphics.forEach((e2, i2) => {
      const [s2, r2] = t2[i2];
      this._updateXY(e2, s2, r2);
    });
  }
  _updateBackgroundGraphic() {
    const t2 = this._getCoordinates();
    this._backgroundGraphic.geometry = new v({ rings: t2, spatialReference: this.view.spatialReference });
  }
  _updateCenterGraphic() {
    const [t2, e2, i2, s2] = this._getBoxBounds(u$1()), r2 = (i2 + t2) / 2, o2 = (s2 + e2) / 2;
    this._centerGraphic.geometry = new w(r2, o2, this.view.spatialReference);
  }
  _updateRotateGraphic() {
    if (!this._vertexGraphics.length)
      return;
    const { x: t2, y: e2 } = this._vertexGraphics[1].geometry, i2 = e2 + this.view.state.resolution * this._rotateGraphicOffset;
    this._rotateHandleGraphic.geometry = new w(t2, i2, this.view.spatialReference);
  }
  _updateRotateLineGraphic() {
    if (!this._vertexGraphics.length || !this._rotateHandleGraphic || !this._rotateHandleGraphic.geometry)
      return;
    const t2 = this._vertexGraphics[1].geometry, e2 = this._rotateHandleGraphic.geometry;
    this._rotateLineGraphic.geometry = new m({ paths: [[t2.x, t2.y], [e2.x, e2.y]], spatialReference: this.view.spatialReference });
  }
  _updateXY(t2, e2, i2) {
    t2.geometry = new w(e2, i2, this.view.spatialReference);
  }
  _updateX(t2, e2) {
    const i2 = t2.geometry.y;
    t2.geometry = new w(e2, i2, this.view.spatialReference);
  }
  _updateY(t2, e2) {
    const i2 = t2.geometry.x;
    t2.geometry = new w(i2, e2, this.view.spatialReference);
  }
  _hasExtentGraphic() {
    return this.graphics.some((t2) => t2 && r$1(t2.geometry) && t2.geometry.type === "extent");
  }
  _getBoxBounds(t2) {
    const e2 = this.graphics.map((t3) => t3.geometry);
    return this._getBounds(t2, e2);
  }
  _getCoordinates(t2) {
    const [e2, i2, s2, r2] = this._getBoxBounds(u$1());
    if (t2) {
      const t3 = (e2 + s2) / 2, o2 = (r2 + i2) / 2;
      return [[e2, r2], [t3, r2], [s2, r2], [s2, o2], [s2, i2], [t3, i2], [e2, i2], [e2, o2]];
    }
    return [[e2, r2], [s2, r2], [s2, i2], [e2, i2]];
  }
  _updateTooltip(t$1, e2) {
    if (t(this._tooltip))
      return;
    if (!t$1)
      return void this._tooltip.clear();
    const { _backgroundGraphic: i2, graphics: s2, _vertexGraphics: r2, _rotateHandleGraphic: a2 } = this;
    t$1 === a2 ? this._updateRotateTooltip() : r2.includes(t$1) ? this._updateScaleTooltip() : (s2.includes(t$1) || t$1 === i2) && this._updateMoveTooltip(e2);
  }
  _updateRotateTooltip() {
    t(this._tooltip) || (this._tooltip.info = new i$2({ tooltipOptions: this.tooltipOptions, angle: -this._angleOfRotation }));
  }
  _updateScaleTooltip() {
    const { _tooltip: t$1, _xScale: e2, _yScale: i2, tooltipOptions: s2, view: r2 } = this;
    if (t(t$1))
      return;
    const a2 = r2.spatialReference, h2 = this._getCoordinates(), c = new w(h2[0][0], h2[0][1], a2), n2 = new w(h2[1][0], h2[1][1], a2), l2 = new w(h2[2][0], h2[2][1], a2), p2 = h$3(c, n2), _ = h$3(n2, l2);
    if (t(p2) || t(_))
      return;
    const d = Math.abs(e2), g2 = Math.abs(i2);
    t$1.info = new p$1({ tooltipOptions: s2, xScale: d, yScale: g2, xSize: p2, ySize: _ });
  }
  _updateMoveTooltip(t$1) {
    const { _tooltip: e2, tooltipOptions: i2, view: s2 } = this;
    if (t(e2))
      return;
    const h2 = new r$2({ tooltipOptions: i2 });
    if (t$1) {
      const { x: e3, y: i3 } = t$1.origin, o2 = s2.toMap(t$1), c = s2.toMap({ x: e3, y: i3 }), n2 = h$3(c, o2);
      h2.distance = r$1(n2) ? n2 : j;
    }
    e2.info = h2;
  }
};
e([y$1()], q.prototype, "_tooltip", void 0), e([y$1({ readOnly: true })], q.prototype, "type", void 0), e([y$1()], q.prototype, "callbacks", void 0), e([y$1()], q.prototype, "enableMovement", void 0), e([y$1()], q.prototype, "enableRotation", void 0), e([y$1()], q.prototype, "enableScaling", void 0), e([y$1()], q.prototype, "graphics", void 0), e([y$1()], q.prototype, "highlightsEnabled", void 0), e([y$1()], q.prototype, "layer", void 0), e([y$1()], q.prototype, "preserveAspectRatio", void 0), e([y$1()], q.prototype, "showCenterGraphic", void 0), e([y$1({ readOnly: true })], q.prototype, "state", null), e([y$1({ value: F, cast(t2) {
  const { centerIndicator: e2 = F.centerIndicator, fill: i2 = F.fill, handles: s2 = F.handles, rotator: r2 = F.rotator, rotatorLine: o2 = F.rotatorLine } = t2 || {};
  return { centerIndicator: e2, fill: i2, handles: s2, rotator: r2, rotatorLine: o2 };
} })], q.prototype, "symbols", void 0), e([y$1({ type: p })], q.prototype, "tooltipOptions", void 0), e([y$1({ constructOnly: true })], q.prototype, "view", void 0), q = e([n$1("esri.views.draw.support.Box")], q);
const J = q;
export { J as default };
