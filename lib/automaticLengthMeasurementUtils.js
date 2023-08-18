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
import { aj as P, a2 as t$1, ak as E, N as e$1, O as y$4, P as n, al as m$6, am as w$1, an as Z$1, z as i$1, ao as g$4, ap as D$2, aq as h$4, ar as p$i, as as x$4, at as d$4, au as y$5, av as j$4, aw as F$1, ax as B, ay as M$2, az as $, aA as e$2, aB as M$3, aC as ue, aD as m$7, aE as n$1, C as r$2, ad as l$8, ai as w$2, af as o$2, L as s, aF as f$1, aG as An, aH as O, aI as I$1, aJ as p$j, aK as o$3, aL as M$4, aM as k$3, aN as E$1, aO as ee, aP as Z$2, aQ as jn, aR as x$5, aS as o$4, a1 as n$2, aT as b$1, aU as q$1, aV as wn, aW as v$2, aX as y$6, aY as hn } from "./index.js";
function r$1(t2, u2) {
  return { type: P(u2), value: t2, unit: u2 };
}
function a$c(t2, u2) {
  return { type: P(u2), value: t2, unit: u2 };
}
function o$1(t2, u2) {
  return { type: P(u2), value: t2, unit: u2 };
}
function c$6(t2, u2, e2 = "arithmetic") {
  return { type: P(u2), value: t2, unit: u2, rotationType: e2 };
}
function v$1(t2, n2) {
  return r$1(E(t2.value, t2.unit, n2), n2);
}
function p$h(n2, u2) {
  return t$1(n2) ? u2 : t$1(u2) || n2.value > E(u2.value, u2.unit, n2.unit) ? n2 : u2;
}
function y$3(n2, u2) {
  return t$1(n2) ? null : __spreadProps(__spreadValues({}, n2), { value: n2.value * u2 });
}
const j$3 = a$c(0, "meters"), U$3 = o$1(0, "square-meters");
c$6(0, "radians");
let e = class extends m$6 {
  constructor(o2) {
    super(o2);
  }
};
e$1([y$4()], e.prototype, "tooltipOptions", void 0), e = e$1([n("esri.views.interactive.tooltip.SketchTooltipInfo")], e);
const t = "esri-tooltip", o = `${t}-content`;
function g$3(t2, a2, n2, u2 = 2, i2 = "abbr") {
  return g$4(t2, v$1(a2, n2).value, n2, u2, i2);
}
function L(t2, e2, n2, u2 = 2, i2 = "abbr") {
  return p$i(t2, v$1(e2, n2).value, n2, u2, i2);
}
function M$1(t2, r2, e2 = 2, a2 = "abbr") {
  return D$2(t2, r2.value, r2.unit, e2, a2);
}
function d$3(t2, r2, e2 = 2, a2 = "abbr") {
  return x$4(t2, r2.value, r2.unit, e2, a2);
}
function w(t2, r2, e2 = 2, a2 = "abbr") {
  return y$5(t2, r2.value, r2.unit, e2, a2);
}
function I(t2, r2, e2 = 2, a2 = "abbr") {
  return F$1(t2, r2.value, r2.unit, e2, a2);
}
function R$2(t2, r2, e2 = 2, a2 = "abbr") {
  return M$2(t2, r2.value, r2.unit, e2, a2);
}
function y$2(t2, r2, e2 = 2, a2 = "abbr") {
  return h$4(t2, r2.value, r2.unit, e2, a2);
}
function V$1(t2, r2, e2 = 2, a2 = "abbr") {
  return d$4(t2, r2.value, r2.unit, e2, a2);
}
function j$2(t2, r2, e2 = 2, a2 = "abbr") {
  return j$4(t2, r2.value, r2.unit, e2, a2);
}
function D$1(t2, r2, e2 = 2, a2 = "abbr") {
  return B(t2, r2.value, r2.unit, e2, a2);
}
function A(t2, r2, e2 = 2, a2 = "abbr") {
  return $(t2, r2.value, r2.unit, e2, a2);
}
function U$2(t2, r2, e2) {
  return w$1(t2.value, t2.unit, t2.rotationType, r2, e2);
}
function q(t2, r2, e2) {
  return Z$1(t2.value, t2.unit, t2.rotationType, r2, e2);
}
function x$3(r2, e2, a2, n2, u2 = "abbr") {
  switch (n2 = i$1(n2, 2), a2) {
    case "imperial":
      return y$2(r2, e2, n2, u2);
    case "metric":
      return M$1(r2, e2, n2, u2);
    default:
      return g$3(r2, e2, a2, n2, u2);
  }
}
function F(t2, r2, e2, a2 = 2, n2 = "abbr") {
  switch (e2) {
    case "imperial":
      return V$1(t2, r2, a2, n2);
    case "metric":
      return d$3(t2, r2, a2, n2);
    default:
      return L(t2, r2, e2, a2, n2);
  }
}
function S$1(t2, r2, e2, a2 = 2, n2 = "abbr") {
  switch (e2) {
    case "imperial":
      return j$2(t2, r2, a2, n2);
    case "metric":
      return w(t2, r2, a2, n2);
    default:
      return g$3(t2, r2, e2, a2, n2);
  }
}
function k$2(t2, r2, e2, a2 = 2, n2 = "abbr") {
  switch (e2) {
    case "imperial":
      return D$1(t2, r2, a2, n2);
    case "metric":
      return I(t2, r2, a2, n2);
    default:
      return L(t2, r2, e2, a2, n2);
  }
}
function z$1(t2, r2, e2, a2 = 2, n2 = "abbr") {
  switch (e2) {
    case "imperial":
      return A(t2, r2, a2, n2);
    case "metric":
      return R$2(t2, r2, a2, n2);
    default:
      return g$3(t2, r2, e2, a2, n2);
  }
}
let g$2 = class extends M$3 {
  get _units() {
    const t2 = ue(this.tooltip.view);
    return { length: t2, verticalLength: t2, area: t2 };
  }
  _formatScale(t2) {
    return m$7(t2, { style: "percent", maximumFractionDigits: 0 });
  }
  _formatRelativeOrientation(t2) {
    return m$7(t2, { maximumFractionDigits: 2, minimumFractionDigits: 2, signDisplay: "exceptZero" });
  }
  _formatLength(t2, r2, i2) {
    return x$3(this._messagesUnits, t2, i$1(r2, this._units.length), i2);
  }
  _formatRelativeLength(t2) {
    return F(this._messagesUnits, t2, this._units.length);
  }
  _formatVerticalLength(t2) {
    return S$1(this._messagesUnits, t2, this._units.verticalLength);
  }
  _formatRelativeVerticalLength(t2) {
    return k$2(this._messagesUnits, t2, this._units.verticalLength);
  }
  _formatTotalLength(t2) {
    return x$3(this._messagesUnits, t2, this._units.length);
  }
  _formatArea(t2) {
    return z$1(this._messagesUnits, t2, this._units.area);
  }
  _formatPercentage(t2) {
    return m$7(t2.value, { style: "percent" });
  }
};
e$1([y$4()], g$2.prototype, "info", void 0), e$1([y$4()], g$2.prototype, "tooltip", void 0), e$1([y$4()], g$2.prototype, "_units", null), e$1([e$2("esri/core/t9n/Units"), y$4()], g$2.prototype, "_messagesUnits", void 0), e$1([e$2("esri/views/interactive/tooltip/t9n/Tooltip"), y$4()], g$2.prototype, "_messagesTooltip", void 0), g$2 = e$1([n("esri.views.interactive.tooltip.content.TooltipContent")], g$2);
const p$g = `${t}-field`, a$b = { base: p$g, title: `${p$g}__title`, value: `${p$g}__value` };
let l$7 = class extends M$3 {
  render() {
    return n$1("div", { class: a$b.base }, n$1("div", { class: a$b.title }, this.title), n$1("div", { class: a$b.value }, this.value));
  }
};
e$1([y$4()], l$7.prototype, "title", void 0), e$1([y$4()], l$7.prototype, "value", void 0), l$7 = e$1([n("esri.views.interactive.tooltip.support.TooltipField")], l$7);
const p$f = { base: `${t}-value-by-value` };
let a$a = class extends M$3 {
  constructor() {
    super(...arguments), this.divider = "\xD7";
  }
  render() {
    return n$1("div", { class: p$f.base }, n$1("span", null, this.left), n$1("span", null, this.divider), n$1("span", null, this.right));
  }
};
e$1([y$4()], a$a.prototype, "left", void 0), e$1([y$4()], a$a.prototype, "divider", void 0), e$1([y$4()], a$a.prototype, "right", void 0), a$a = e$1([n("esri.views.interactive.tooltip.support.ValueByValue")], a$a);
const m$5 = { base: `${o} ${`${o}--draw-rectangle`}` };
let l$6 = class extends g$2 {
  render() {
    const { area: t2, radius: s2, xSize: o2, ySize: e2, tooltipOptions: l2 } = this.info, { visibleElements: c2 } = l2, n2 = this._messagesTooltip.sketch;
    return n$1("div", { class: m$5.base }, c2.radius && r$2(s2) && n$1(l$7, { title: n2.radius, value: this._formatLength(s2) }), c2.size && r$2(o2) && r$2(e2) && n$1(l$7, { title: n2.size, value: n$1(a$a, { left: this._formatLength(o2), right: this._formatLength(e2) }) }), c2.area && n$1(l$7, { title: n2.area, value: this._formatArea(t2) }));
  }
};
l$6 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")], l$6);
const p$e = { base: `${o} ${`${o}--draw-point`}` };
let a$9 = class extends g$2 {
  render() {
    const { elevation: t2, tooltipOptions: o2 } = this.info, { visibleElements: s2 } = o2, r2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$e.base }, s2.elevation && n$1(l$7, { title: r2.elevation, value: this._formatVerticalLength(t2) }));
  }
};
a$9 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")], a$9);
const p$d = { base: `${o} ${`${o}--draw-polygon`}` };
let a$8 = class extends g$2 {
  render() {
    const { area: o2, elevation: t2, tooltipOptions: e2, viewType: s2 } = this.info, { visibleElements: a2 } = e2, l2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$d.base }, a2.elevation && s2 !== "2d" && n$1(l$7, { title: l2.elevation, value: this._formatVerticalLength(t2) }), a2.area && n$1(l$7, { title: l2.area, value: this._formatArea(o2) }));
  }
};
a$8 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")], a$8);
const p$c = { base: `${o} ${`${o}--draw-polyline`}` };
let l$5 = class extends g$2 {
  render() {
    const { elevation: t2, totalLength: o2, tooltipOptions: e2, viewType: s2 } = this.info, { visibleElements: l2 } = e2, a2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$c.base }, l2.elevation && s2 !== "2d" && n$1(l$7, { title: a2.elevation, value: this._formatVerticalLength(t2) }), l2.totalLength && n$1(l$7, { title: a2.totalLength, value: this._formatLength(o2) }));
  }
};
l$5 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")], l$5);
const m$4 = { base: `${o} ${`${o}--draw-rectangle`}` };
let c$5 = class extends g$2 {
  render() {
    const { area: t2, xSize: r2, ySize: s2, tooltipOptions: e2 } = this.info, { visibleElements: c2 } = e2, l2 = this._messagesTooltip.sketch;
    return n$1("div", { class: m$4.base }, c2.size && r$2(r2) && r$2(s2) && n$1(l$7, { title: l2.size, value: n$1(a$a, { left: this._formatLength(r2), right: this._formatLength(s2) }) }), c2.area && n$1(l$7, { title: l2.area, value: this._formatArea(t2) }));
  }
};
c$5 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")], c$5);
const p$b = { base: `${o} ${`${o}--extent-rotate`}` };
let a$7 = class extends g$2 {
  render() {
    const { angle: t2, tooltipOptions: o2 } = this.info, { visibleElements: s2 } = o2, r2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$b.base }, s2.rotation && n$1(l$7, { title: r2.rotation, value: this._formatRelativeOrientation(t2) }));
  }
};
a$7 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")], a$7);
const l$4 = { base: `${o} ${`${o}--extent-scale`}` };
let a$6 = class extends g$2 {
  render() {
    const t2 = this.info, { visibleElements: s2 } = t2.tooltipOptions, e2 = this._messagesTooltip.sketch;
    return n$1("div", { class: l$4.base }, s2.size && n$1(l$7, { title: e2.size, value: n$1(a$a, { left: this._formatLength(t2.xSize), right: this._formatLength(t2.ySize) }) }), s2.scale && n$1(l$7, { title: e2.scale, value: n$1(a$a, { left: this._formatScale(t2.xScale), right: this._formatScale(t2.yScale) }) }));
  }
};
a$6 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentExtentScale")], a$6);
const p$a = { base: `${o} ${`${o}--reshape-edge-offset`}` };
let c$4 = class extends g$2 {
  render() {
    const { area: t2, distance: s2, totalLength: o2, tooltipOptions: r2 } = this.info, { visibleElements: c2 } = r2, l2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$a.base }, c2.distance && n$1(l$7, { title: l2.distance, value: this._formatRelativeLength(s2) }), c2.area && r$2(t2) && n$1(l$7, { title: l2.area, value: this._formatArea(t2) }), c2.totalLength && r$2(o2) && n$1(l$7, { title: l2.totalLength, value: this._formatLength(o2) }));
  }
};
c$4 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")], c$4);
const p$9 = { base: `${o} ${`${o}--transform-absolute`}` };
let a$5 = class extends g$2 {
  render() {
    const { info: t2 } = this, { visibleElements: s2 } = t2.tooltipOptions, r2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$9.base }, s2.orientation && t2.orientationEnabled && n$1(l$7, { title: r2.orientation, value: U$2(t2.orientation, t2.rotationType, t2.orientationPrecision) }), s2.size && t2.sizeEnabled && n$1(l$7, { title: r2.size, value: this._formatLength(t2.size, t2.sizeUnit, t2.sizePrecision) }));
  }
};
a$5 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")], a$5);
const a$4 = { base: `${o} ${`${o}--transform-rotate`}` };
let c$3 = class extends g$2 {
  render() {
    const { info: o2 } = this, { visibleElements: s2 } = o2.tooltipOptions, i2 = this._messagesTooltip.sketch;
    return n$1("div", { class: a$4.base }, s2.rotation && n$1(l$7, { title: i2.rotation, value: q(o2.rotation, o2.rotationType, o2.rotationPrecision) }), s2.orientation && n$1(l$7, { title: i2.orientation, value: U$2(o2.orientation, o2.rotationType, o2.orientationPrecision) }));
  }
};
c$3 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")], c$3);
const p$8 = { base: `${o} ${`${o}--transform-scale`}` };
let c$2 = class extends g$2 {
  render() {
    const { scale: s2, size: t2, sizePrecision: o2, sizeUnit: e2, tooltipOptions: c2 } = this.info, { visibleElements: a2 } = c2, l2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$8.base }, a2.scale && n$1(l$7, { title: l2.scale, value: this._formatPercentage(s2) }), a2.size && n$1(l$7, { title: l2.size, value: this._formatLength(t2, e2, o2) }));
  }
};
c$2 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTransformScale")], c$2);
const p$7 = { base: `${o} ${`${o}--translate-graphic`}` };
let c$1 = class extends g$2 {
  render() {
    const { info: t2 } = this, { visibleElements: s2 } = t2.tooltipOptions, o2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$7.base }, s2.distance && n$1(l$7, { title: o2.distance, value: this._formatLength(t2.distance) }));
  }
};
c$1 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")], c$1);
const p$6 = { base: `${o} ${`${o}--translate-graphic-xy`}` };
let a$3 = class extends g$2 {
  render() {
    const { info: t2 } = this, { visibleElements: s2 } = t2.tooltipOptions, o2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$6.base }, s2.distance && n$1(l$7, { title: o2.distance, value: this._formatRelativeLength(t2.distance) }));
  }
};
a$3 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")], a$3);
const p$5 = { base: `${o} ${`${o}--translate-graphic-z`}` };
let a$2 = class extends g$2 {
  render() {
    const { info: t2 } = this, { visibleElements: s2 } = t2.tooltipOptions, o2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$5.base }, s2.distance && n$1(l$7, { title: o2.distance, value: this._formatRelativeVerticalLength(t2.distance) }));
  }
};
a$2 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")], a$2);
const l$3 = { base: `${o} ${`${o}--translate-vertex`}` };
let p$4 = class extends g$2 {
  render() {
    const { distance: t2, elevation: o2, area: s2, totalLength: r2, tooltipOptions: p2 } = this.info, { visibleElements: n2 } = p2, c2 = this._messagesTooltip.sketch;
    return n$1("div", { class: l$3.base }, n2.distance && n$1(l$7, { title: c2.distance, value: this._formatLength(t2) }), n2.elevation && r$2(o2) && n$1(l$7, { title: c2.elevation, value: this._formatVerticalLength(o2) }), n2.area && r$2(s2) && n$1(l$7, { title: c2.area, value: this._formatArea(s2) }), n2.totalLength && r$2(r2) && n$1(l$7, { title: c2.totalLength, value: this._formatLength(r2) }));
  }
};
p$4 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")], p$4);
const l$2 = { base: `${o} ${`${o}--translate-vertex`}` };
let p$3 = class extends g$2 {
  render() {
    const { area: t2, distance: o2, elevation: s2, totalLength: r2, tooltipOptions: p2 } = this.info, { visibleElements: n2 } = p2, c2 = this._messagesTooltip.sketch;
    return n$1("div", { class: l$2.base }, n2.distance && n$1(l$7, { title: c2.distance, value: this._formatRelativeLength(o2) }), n2.elevation && r$2(s2) && n$1(l$7, { title: c2.elevation, value: this._formatVerticalLength(s2) }), n2.area && r$2(t2) && n$1(l$7, { title: c2.area, value: this._formatArea(t2) }), n2.totalLength && r$2(r2) && n$1(l$7, { title: c2.totalLength, value: this._formatLength(r2) }));
  }
};
p$3 = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")], p$3);
const p$2 = { base: `${o} ${`${o}--translate-vertex`}` };
let c = class extends g$2 {
  render() {
    const { distance: t2, elevation: o2, tooltipOptions: s2 } = this.info, { visibleElements: r2 } = s2, c2 = this._messagesTooltip.sketch;
    return n$1("div", { class: p$2.base }, r2.distance && n$1(l$7, { title: c2.distance, value: this._formatRelativeVerticalLength(t2) }), r2.elevation && r$2(o2) && n$1(l$7, { title: c2.elevation, value: this._formatVerticalLength(o2) }));
  }
};
c = e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")], c);
function x$2(x2, d2) {
  if (t$1(d2))
    return null;
  const g2 = document.createElement("div");
  switch (d2.type) {
    case "draw-point":
      return new a$9({ tooltip: x2, info: d2, container: g2 });
    case "draw-polygon":
      return new a$8({ tooltip: x2, info: d2, container: g2 });
    case "draw-polyline":
      return new l$5({ tooltip: x2, info: d2, container: g2 });
    case "draw-rectangle":
      return new c$5({ tooltip: x2, info: d2, container: g2 });
    case "draw-circle":
      return new l$6({ tooltip: x2, info: d2, container: g2 });
    case "extent-rotate":
      return new a$7({ tooltip: x2, info: d2, container: g2 });
    case "extent-scale":
      return new a$6({ tooltip: x2, info: d2, container: g2 });
    case "transform-absolute":
      return new a$5({ tooltip: x2, info: d2, container: g2 });
    case "transform-rotate":
      return new c$3({ tooltip: x2, info: d2, container: g2 });
    case "transform-scale":
      return new c$2({ tooltip: x2, info: d2, container: g2 });
    case "translate-graphic":
      return new c$1({ tooltip: x2, info: d2, container: g2 });
    case "translate-graphic-z":
      return new a$2({ tooltip: x2, info: d2, container: g2 });
    case "translate-graphic-xy":
      return new a$3({ tooltip: x2, info: d2, container: g2 });
    case "translate-vertex":
      return new p$4({ tooltip: x2, info: d2, container: g2 });
    case "translate-vertex-z":
      return new c({ tooltip: x2, info: d2, container: g2 });
    case "translate-vertex-xy":
      return new p$3({ tooltip: x2, info: d2, container: g2 });
    case "reshape-edge-offset":
      return new c$4({ tooltip: x2, info: d2, container: g2 });
  }
}
const h$3 = { base: `${t}` };
let m$3 = class extends m$6 {
  constructor(t2) {
    super(t2), this.info = null, this._contentContainer = (() => {
      const t3 = document.createElement("div");
      return t3.classList.add(h$3.base), t3;
    })(), this._contentWidget = null;
  }
  initialize() {
    const t2 = this._contentContainer;
    this.addHandles([l$8(() => {
      var _a;
      return (_a = this.view.overlay) == null ? void 0 : _a.surface;
    }, (e2) => {
      t2.remove(), o$2(e2, (e3) => e3.appendChild(t2));
    }, w$2), l$8(() => this.info, (e2, s$1) => {
      r$2(this._contentWidget) && r$2(e2) && r$2(s$1) && e2.type === s$1.type ? this._contentWidget.info = e2 : (this._contentWidget = s(this._contentWidget), o$2(x$2(this, e2), (e3) => {
        this._contentWidget = e3, e3.container && t2.appendChild(e3.container);
      }));
    }, w$2), l$8(() => ({ container: this._contentContainer, contentWidget: this._contentWidget, screenPoint: this._screenPoint }), u, w$2)]);
  }
  destroy() {
    this._contentWidget = s(this._contentWidget), this._contentContainer.remove();
  }
  clear() {
    this.info = null;
  }
  get _screenPoint() {
    const t2 = this.view.inputManager;
    return (t2 == null ? void 0 : t2.multiTouchActive) ? null : t2 == null ? void 0 : t2.latestPointerLocation;
  }
  get test() {
    var _a;
    return { contentContainer: this._contentContainer, visible: ((_a = this._contentContainer) == null ? void 0 : _a.style.display) !== "none" };
  }
};
function u({ container: t2, contentWidget: e2, screenPoint: o2 }) {
  const { style: i2 } = t2;
  if (r$2(o2) && r$2(e2)) {
    i2.display = "block";
    const e3 = f$1(t2), n2 = `translate(${Math.round(o2.x) + _[0] * (e3 ? -1 : 1)}px, ${Math.round(o2.y) + _[1]}px)`;
    i2.transform = e3 ? `translate(-100%, 0) ${n2}` : n2;
  } else
    i2.display = "none";
}
e$1([y$4({ nonNullable: true })], m$3.prototype, "view", void 0), e$1([y$4()], m$3.prototype, "info", void 0), e$1([y$4()], m$3.prototype, "_contentContainer", void 0), e$1([y$4()], m$3.prototype, "_contentWidget", void 0), e$1([y$4()], m$3.prototype, "_screenPoint", null), m$3 = e$1([n("esri.views.interactive.tooltip.Tooltip")], m$3);
const _ = [20, 20];
function i(i2) {
  const m2 = O(i2), n2 = m2 === I$1 ? p$j : m2;
  return An(i2, n2) ? n2 : i2;
}
function r(r2, t2, i2, s2, ...l2) {
  return o$3(r2) && M$4(r2) ? t2.apply(void 0, l2) : k$3(r2) ? i2.apply(void 0, l2) : s2.apply(void 0, l2);
}
var f;
function p$1(t2) {
  return m$2(t2, f.Direct);
}
function h$2(t2) {
  return m$2(t2, f.Horizontal);
}
function m$2(n2, i$12) {
  const { hasZ: o2, spatialReference: c2 } = n2, u2 = i(c2);
  let l2 = 0;
  const a2 = Z$2(u2);
  if (t$1(a2))
    return null;
  const p2 = i$12 === f.Direct ? j$1 : d$2;
  for (const r2 of n2.paths) {
    if (r2.length < 2)
      continue;
    const n3 = r2.length - 1;
    for (let e2 = 0; e2 < n3; ++e2) {
      const n4 = r2[e2];
      U$1[0] = n4[0], U$1[1] = n4[1], U$1[2] = o2 ? n4[2] : 0;
      const i2 = r2[e2 + 1];
      b[0] = i2[0], b[1] = i2[1], b[2] = o2 ? i2[2] : 0;
      const u3 = p2(U$1, b, c2);
      if (t$1(u3))
        return null;
      l2 += u3.value;
    }
  }
  return a$c(l2, a2);
}
function R$1(t2, n2) {
  const { spatialReference: r2 } = t2;
  return E$1(r2, n2.spatialReference) ? (U$1[0] = t2.x, U$1[1] = t2.y, U$1[2] = t2.hasZ ? t2.z : 0, b[0] = n2.x, b[1] = n2.y, b[2] = n2.hasZ ? n2.z : 0, d$2(U$1, b, r2)) : null;
}
function v(t2, n2) {
  const { spatialReference: r2 } = t2;
  return E$1(r2, n2.spatialReference) ? (U$1[0] = t2.x, U$1[1] = t2.y, U$1[2] = t2.hasZ ? t2.z : 0, b[0] = n2.x, b[1] = n2.y, b[2] = n2.hasZ ? n2.z : 0, D(U$1, b, r2)) : null;
}
function x$1(t2) {
  return U$1[0] = t2.x, U$1[1] = t2.y, U$1[2] = t2.hasZ ? t2.z : 0, H(U$1, t2.spatialReference);
}
function j$1(t2, e2, i2) {
  const o2 = V(t2, e2, i2, f.Direct);
  return r$2(o2) ? a$c(o2.direct, o2.unit) : null;
}
function d$2(t2, e2, i2) {
  const o2 = V(t2, e2, i2, f.Horizontal);
  return r$2(o2) ? a$c(o2.horizontal, o2.unit) : null;
}
function D(t2, e2, i2) {
  const o2 = V(t2, e2, i2, f.Vertical);
  return r$2(o2) ? a$c(o2.verticalSigned, o2.unit) : null;
}
function H(t2, e2) {
  const o2 = ee(e2);
  return r$2(o2) ? a$c(t2[2], o2) : null;
}
function V(n2, r2, i$12, u2) {
  const a2 = i(i$12), p2 = Z$2(a2);
  if (t$1(p2))
    return null;
  const h2 = r2[2] - n2[2];
  if (u2 === f.Vertical)
    return { verticalSigned: h2, unit: p2 };
  if (!jn(n2, i$12, S, a2) || !jn(r2, i$12, k$1, a2))
    return null;
  if (u2 === f.Direct) {
    return { direct: x$5(k$1, S), unit: p2 };
  }
  if (o$4(M, n2[0], n2[1], r2[2]), !jn(M, i$12, M, a2))
    return null;
  const m2 = x$5(M, k$1);
  if (u2 === f.Horizontal)
    return { horizontal: m2, unit: p2 };
  return { direct: x$5(k$1, S), horizontal: m2, vertical: Math.abs(h2), unit: p2 };
}
!function(t2) {
  t2[t2.Direct = 0] = "Direct", t2[t2.Horizontal = 1] = "Horizontal", t2[t2.Vertical = 2] = "Vertical";
}(f || (f = {}));
const U$1 = n$2(), b = n$2(), S = n$2(), k$1 = n$2(), M = n$2();
function m$1(e2) {
  const { spatialReference: t2 } = e2;
  return r(t2, j, d$1, h$1, e2);
}
function a$1(e2, t2) {
  if (!E$1(e2.spatialReference, t2.spatialReference))
    return null;
  const { spatialReference: r2 } = e2;
  return x[0] = e2.x, x[1] = e2.y, x[2] = e2.hasZ ? e2.z : 0, z[0] = t2.x, z[1] = t2.y, z[2] = t2.hasZ ? t2.z : 0, l$1(x, z, r2);
}
function l$1(e2, t2, r$12) {
  return r(r$12, p, g$1, y$1, e2, t2, r$12);
}
function p(t2, r2, n2) {
  return a$c(b$1(U, t2, r2, n2).distance, "meters");
}
function g$1(t2, n2, o2) {
  return a$c(q$1(R(t2, n2, o2), "meters"), "meters");
}
function y$1(t2, r2, o2) {
  return wn(t2, o2, Z) && wn(r2, o2, k) ? a$c(b$1(U, Z, k).distance, "meters") : null;
}
function j(t2) {
  return a$c(y$6([t2], "meters")[0], "meters");
}
function d$1(t2) {
  return a$c(q$1(t2, "meters"), "meters");
}
function h$1(t2) {
  const r2 = [];
  if (!hn(t2, r2))
    return null;
  let n2 = 0;
  for (const e2 of r2) {
    let t3 = 0;
    for (let r3 = 1; r3 < e2.length; ++r3)
      t3 += b$1(U, e2[r3 - 1], e2[r3]).distance;
    n2 += t3;
  }
  return a$c(n2, "meters");
}
function R(e2, t2, r2) {
  return { type: "polyline", spatialReference: r2, paths: [[[...e2], [...t2]]] };
}
const U = new v$2(), x = n$2(), z = n$2(), Z = n$2(), k = n$2();
function m(n2, e2) {
  return y(p$1, m$1, h$2, e2, n2);
}
function d(n2, r2, t2, e2) {
  return y(j$1, l$1, d$2, e2, n2, r2, t2);
}
function a(n2, r2, t2) {
  return y(R$1, a$1, R$1, t2, n2, r2);
}
function g(n2, r2, t2, e2) {
  return y(d$2, l$1, d$2, e2, n2, r2, t2);
}
function l(n2) {
  return y(p$1, m$1, h$2, "on-the-ground", n2);
}
function h(n2, r2) {
  return y(R$1, a$1, R$1, "on-the-ground", n2, r2);
}
function y(r2, t2, e2, o2, ...u2) {
  if (o2 === "on-the-ground") {
    const r3 = t2.apply(void 0, u2);
    return r$2(r3) ? r3 : e2.apply(void 0, u2);
  }
  return r2.apply(void 0, u2);
}
export { D, U$3 as U, a$c as a, a as b, m$3 as c, d, e, x$1 as f, c$6 as g, g as h, i, j$3 as j, h as k, l$1 as l, m, l as n, o$1 as o, p$h as p, r, v, x$3 as x, y$3 as y };
