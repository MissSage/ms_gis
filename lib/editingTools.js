var __defProp = Object.defineProperty;
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
import { d, y, i as i$1, e, r, C, a, g, w, b as g$1, n, s, u, c as e$1, f as y$1, h as n$1 } from "./index.js";
import { Z, q } from "./DrawGraphicTool.js";
import "vue";
import "./automaticLengthMeasurementUtils.js";
import "./automaticAreaMeasurementUtils.js";
import "./earcut.js";
import "./triangle.js";
import "./lineSegment.js";
const t = new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", effects: [{ type: "CIMGeometricEffectDashes", dashTemplate: [3.75, 3.75], lineDashEnding: "HalfPattern", controlPointEnding: "NoConstraint" }], enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: 1.6, color: [255, 255, 255, 255] }, { type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: 2, color: [0, 0, 0, 255] }] } } }), l = new y({ style: "circle", size: 6, color: [127, 127, 127, 1], outline: { color: [50, 50, 50], width: 1 } }), i = new y({ style: "circle", size: 6, color: [255, 127, 0, 1], outline: { color: [50, 50, 50], width: 1 } });
let E = class extends Z {
  constructor(e$12) {
    super(e$12), this._visualElementGraphics = { outline: null, regularVertices: null, activeVertex: null }, this.activeFillSymbol = null, this.type = "draw-2d", this._visualElementSymbols = { outline: i$1(e$12.activeLineSymbol, t), regularVertices: i$1(e$12.regularVerticesSymbol, l), activeVertex: i$1(e$12.activeVertexSymbol, i), fill: e(e$12.activeFillSymbol) };
  }
  normalizeCtorArgs(e2) {
    const t2 = __spreadValues({}, e2);
    return delete t2.activeFillSymbol, delete t2.activeVertexSymbol, delete t2.regularVerticesSymbol, delete t2.activeLineSymbol, t2;
  }
  initializeGraphic(e2) {
    return r(this._visualElementSymbols.fill) && (e2.symbol = this._visualElementSymbols.fill), null;
  }
  makeDrawOperation() {
    const { defaultZ: e2, hasZ: t2, view: i2 } = this;
    return new C({ view: i2, manipulators: this.manipulators, geometryType: q(this.geometryType), drawingMode: this.mode, hasZ: t2, defaultZ: e2, snapToSceneEnabled: this.snapToScene, drawSurface: new a(i2, t2, e2), hasM: false, snappingManager: this.snappingManager, snappingVisualizer: new g(this.internalGraphicsLayer), tooltipOptions: this.tooltipOptions });
  }
  onActiveVertexChanged(e2) {
    if (this.geometryType === "point")
      return null;
    const [r$1, s$1] = e2, n$12 = new w({ x: r$1, y: s$1, spatialReference: this.view.spatialReference });
    return r(this._visualElementGraphics.activeVertex) ? (this._visualElementGraphics.activeVertex.geometry = n$12, null) : (this._visualElementGraphics.activeVertex = new g$1({ geometry: n$12, symbol: this._visualElementSymbols.activeVertex, attributes: { displayOrder: 2 } }), this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex), this.internalGraphicsLayer.graphics.sort(_), n(() => {
      r(this._visualElementGraphics.activeVertex) && (this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex), this._visualElementGraphics.activeVertex = s(this._visualElementGraphics.activeVertex));
    }));
  }
  onOutlineChanged(e2) {
    const r$1 = e2.clone();
    if (r$1.type === "polyline") {
      const e3 = r$1.paths[r$1.paths.length - 1];
      e3.splice(0, e3.length - 2);
    }
    return r(this._visualElementGraphics.outline) ? (this._visualElementGraphics.outline.geometry = r$1, null) : (this._visualElementGraphics.outline = new g$1({ geometry: r$1, symbol: this._visualElementSymbols.outline, attributes: { displayOrder: 0 } }), this.internalGraphicsLayer.add(this._visualElementGraphics.outline), this.internalGraphicsLayer.graphics.sort(_), n(() => {
      r(this._visualElementGraphics.outline) && (this.internalGraphicsLayer.remove(this._visualElementGraphics.outline), this._visualElementGraphics.outline = s(this._visualElementGraphics.outline));
    }));
  }
  onRegularVerticesChanged(e2) {
    const r$1 = new u({ points: e2, spatialReference: this.view.spatialReference });
    return r(this._visualElementGraphics.regularVertices) ? (this._visualElementGraphics.regularVertices.geometry = r$1, null) : (this._visualElementGraphics.regularVertices = new g$1({ geometry: r$1, symbol: this._visualElementSymbols.regularVertices, attributes: { displayOrder: 1 } }), this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices), this.internalGraphicsLayer.graphics.sort(_), n(() => {
      r(this._visualElementGraphics.regularVertices) && (this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices), this._visualElementGraphics.regularVertices = s(this._visualElementGraphics.regularVertices));
    }));
  }
};
function _(e2, t2) {
  var _a, _b, _c, _d;
  return ((_b = (_a = e2.attributes) == null ? void 0 : _a.displayOrder) != null ? _b : -1 / 0) - ((_d = (_c = t2.attributes) == null ? void 0 : _c.displayOrder) != null ? _d : -1 / 0);
}
e$1([y$1()], E.prototype, "activeFillSymbol", void 0), e$1([y$1({ readOnly: true })], E.prototype, "type", void 0), e$1([y$1({ constructOnly: true, nonNullable: true })], E.prototype, "view", void 0), E = e$1([n$1("esri.views.2d.interactive.draw.DrawGraphicTool2D")], E);
export { E as DrawGraphicTool2D };
