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
import { ck as s, i$ as y$2, co as l$4, b0 as l$5, $ as e, a0 as y$3, bH as o$1, dW as r, j0 as j$1, gq as p$3, a1 as n$1, gp as T$1, ee as m$5, cD as o$2, ef as p$4, aX as y$4, dD as r$1, iX as j$2, j1 as n$3, t, a as r$2, a7 as w$2, dF as v, cC as g$1, dI as y$5, iF as m$6, j2 as M, j3 as T$2, j4 as N$1, j5 as m$7, j6 as _, iG as n$4, j7 as a$1, j8 as C, ib as t$1, dT as o$3, c0 as v$1, cw as p$6, cr as w$3, aq as v$2, cH as u$6, g as s$1, j9 as a$2, k as e$1, g2 as y$6, ja as n$5, dr as f$3, dG as s$2, dH as i$3, U as U$1, aK as k$1, cE as x$2 } from "./index.js";
import { p as p$5 } from "./multidimensionalUtils.js";
import { g as g$2 } from "./pixelUtils.js";
import { h as h$3, n as n$2, g as a, i as i$2, e as u$7 } from "./RasterSymbolizer.js";
import { c as c$6, l as l$6, d as d$4, g } from "./dataUtils.js";
import "./generateRendererUtils.js";
var c$5;
const d$3 = new s({ flow_from: "flow-from", flow_to: "flow-to" });
let h$2 = c$5 = class extends y$2(l$4) {
  constructor(o2) {
    super(o2), this.density = 0.8, this.color = new l$5([255, 255, 255, 1]), this.maxPathLength = 200, this.trailWidth = 1.5, this.flowSpeed = 10, this.trailLength = 100, this.smoothing = 0, this.flowRepresentation = "flow-from", this.type = "flow", this.authoringInfo = null, this.legendOptions = null, this.trailCap = "butt", this.background = "none";
  }
  clone() {
    var _a, _b;
    const { density: o2, maxPathLength: t2, trailWidth: e2, flowSpeed: r2, trailLength: i2, smoothing: s2, flowRepresentation: n2, trailCap: p2, background: a2 } = this, l2 = this.color.clone(), m2 = (this.visualVariables || []).map((o3) => o3.clone()), d2 = (_a = this.authoringInfo) == null ? void 0 : _a.clone(), h2 = (_b = this.legendOptions) == null ? void 0 : _b.clone();
    return new c$5({ density: o2, color: l2, maxPathLength: t2, trailWidth: e2, flowSpeed: r2, trailLength: i2, trailCap: p2, background: a2, smoothing: s2, flowRepresentation: n2, visualVariables: m2, authoringInfo: d2, legendOptions: h2 });
  }
  getSymbol(o2, t2) {
  }
  async getSymbolAsync(o2, t2) {
  }
  getSymbols() {
    return [];
  }
};
e([y$3({ type: Number, json: { write: true } })], h$2.prototype, "density", void 0), e([y$3({ type: l$5, json: { write: { allowNull: true } } })], h$2.prototype, "color", void 0), e([y$3({ type: Number, cast: o$1, json: { write: true } })], h$2.prototype, "maxPathLength", void 0), e([y$3({ type: Number, cast: o$1, json: { write: true } })], h$2.prototype, "trailWidth", void 0), e([y$3({ type: Number, json: { write: true } })], h$2.prototype, "flowSpeed", void 0), e([y$3({ type: Number, json: { write: true } })], h$2.prototype, "trailLength", void 0), e([y$3({ type: Number, cast: o$1, json: { write: false } })], h$2.prototype, "smoothing", void 0), e([y$3({ type: d$3.apiValues, json: { type: d$3.jsonValues, read: { reader: d$3.read }, write: { writer: d$3.write } } })], h$2.prototype, "flowRepresentation", void 0), e([r({ flowRenderer: "flow" })], h$2.prototype, "type", void 0), e([y$3({ type: j$1, json: { write: true } })], h$2.prototype, "authoringInfo", void 0), e([y$3({ type: p$3, json: { write: true } })], h$2.prototype, "legendOptions", void 0), e([y$3({ type: String, json: { write: true } })], h$2.prototype, "trailCap", void 0), e([y$3({ type: String, json: { write: true } })], h$2.prototype, "background", void 0), h$2 = c$5 = e([n$1("esri.renderers.FlowRenderer")], h$2);
const u$5 = h$2;
let l$3 = class extends l$4 {
  constructor() {
    super(...arguments), this.value = null, this.label = null, this.color = null;
  }
};
e([y$3({ type: Number, json: { write: true } })], l$3.prototype, "value", void 0), e([y$3({ type: String, json: { write: true } })], l$3.prototype, "label", void 0), e([y$3({ type: l$5, json: { type: [T$1], write: true } })], l$3.prototype, "color", void 0), l$3 = e([n$1("esri.renderers.support.ColormapInfo")], l$3);
const c$4 = l$3;
var c$3;
let m$4 = c$3 = class extends l$4 {
  constructor(o2) {
    super(o2), this.colormapInfos = null, this.type = "raster-colormap";
  }
  static createFromColormap(o2, r2) {
    if (!o2)
      return null;
    const t2 = o2[0].length === 5, e2 = [...o2].sort((o3) => o3[0][0] - o3[1][0]).map((o3) => {
      var _a;
      return c$4.fromJSON({ value: o3[0], color: t2 ? o3.slice(1, 5) : o3.slice(1, 4).concat([255]), label: r2 ? (_a = r2[o3[0]]) != null ? _a : "" : o3[0] });
    });
    return new c$3({ colormapInfos: e2 });
  }
  static createFromColorramp(o2) {
    const r2 = h$3(o2, 256);
    return c$3.createFromColormap(r2);
  }
  clone() {
    return new c$3({ colormapInfos: this.colormapInfos.map((o2) => o2.toJSON()) });
  }
  extractColormap() {
    return this.colormapInfos.map(({ value: o2, color: r2 }) => [o2, r2.r, r2.g, r2.b, r2.a > 1 ? r2.a : 255 * r2.a & 255]).sort((o2, r2) => o2[0] - r2[0]);
  }
};
e([y$3({ type: [c$4], json: { write: true } })], m$4.prototype, "colormapInfos", void 0), e([r({ rasterColormap: "raster-colormap" })], m$4.prototype, "type", void 0), m$4 = c$3 = e([n$1("esri.renderers.RasterColormapRenderer")], m$4);
const l$2 = m$4;
var c$2;
let d$2 = c$2 = class extends l$4 {
  constructor(e2) {
    super(e2), this.altitude = 45, this.azimuth = 315, this.colorRamp = null, this.hillshadeType = "traditional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.scalingType = "none", this.type = "raster-shaded-relief", this.zFactor = 1;
  }
  readColorRamp(e2) {
    return p$4(e2);
  }
  clone() {
    return new c$2({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, scalingType: this.scalingType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, colorRamp: y$4(this.colorRamp) });
  }
};
e([y$3({ type: Number, json: { write: true } })], d$2.prototype, "altitude", void 0), e([y$3({ type: Number, json: { write: true } })], d$2.prototype, "azimuth", void 0), e([y$3({ types: m$5, json: { write: true } })], d$2.prototype, "colorRamp", void 0), e([o$2("colorRamp")], d$2.prototype, "readColorRamp", null), e([y$3({ type: ["traditional", "multi-directional"], json: { write: true } })], d$2.prototype, "hillshadeType", void 0), e([y$3({ type: Number, json: { write: true } })], d$2.prototype, "pixelSizePower", void 0), e([y$3({ type: Number, json: { write: true } })], d$2.prototype, "pixelSizeFactor", void 0), e([y$3({ type: ["none", "adjusted"], json: { write: true } })], d$2.prototype, "scalingType", void 0), e([r({ rasterShadedRelief: "raster-shaded-relief" })], d$2.prototype, "type", void 0), e([y$3({ type: Number, json: { write: true } })], d$2.prototype, "zFactor", void 0), d$2 = c$2 = e([n$1("esri.renderers.RasterShadedReliefRenderer")], d$2);
const m$3 = d$2;
var d$1;
let h$1 = d$1 = class extends l$4 {
  constructor(t2) {
    super(t2), this.colorRamp = null, this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.maxPercent = null, this.minPercent = null, this.numberOfStandardDeviations = null, this.outputMax = null, this.outputMin = null, this.sigmoidStrengthLevel = null, this.statistics = [], this.histograms = null, this.useGamma = false, this.stretchType = "none", this.type = "raster-stretch";
  }
  readColorRamp(t2) {
    if (t2)
      return p$4(t2);
  }
  writeStatistics(t2, e2, r2) {
    (t2 == null ? void 0 : t2.length) && (Array.isArray(t2[0]) || (t2 = t2.map((t3) => [t3.min, t3.max, t3.avg, t3.stddev])), e2[r2] = t2);
  }
  readStretchType(t2, e2) {
    let r2 = e2.stretchType;
    return typeof r2 == "number" && (r2 = a[r2]), n$2.read(r2);
  }
  clone() {
    return new d$1({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: y$4(this.statistics), gamma: y$4(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, colorRamp: y$4(this.colorRamp), histograms: y$4(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment });
  }
};
e([y$3({ types: m$5, json: { write: true } })], h$1.prototype, "colorRamp", void 0), e([o$2("colorRamp")], h$1.prototype, "readColorRamp", null), e([y$3({ type: Boolean, json: { write: true } })], h$1.prototype, "computeGamma", void 0), e([y$3({ type: Boolean, json: { write: { target: "dra" }, read: { source: "dra" } } })], h$1.prototype, "dynamicRangeAdjustment", void 0), e([y$3({ type: [Number], json: { write: true } })], h$1.prototype, "gamma", void 0), e([y$3({ type: Number, json: { write: true } })], h$1.prototype, "maxPercent", void 0), e([y$3({ type: Number, json: { write: true } })], h$1.prototype, "minPercent", void 0), e([y$3({ type: Number, json: { write: true } })], h$1.prototype, "numberOfStandardDeviations", void 0), e([y$3({ type: Number, json: { read: { source: "max" }, write: { target: "max" } } })], h$1.prototype, "outputMax", void 0), e([y$3({ type: Number, json: { read: { source: "min" }, write: { target: "min" } } })], h$1.prototype, "outputMin", void 0), e([y$3({ type: Number, json: { write: true } })], h$1.prototype, "sigmoidStrengthLevel", void 0), e([y$3({ json: { type: [[Number]], write: true } })], h$1.prototype, "statistics", void 0), e([y$3()], h$1.prototype, "histograms", void 0), e([r$1("statistics")], h$1.prototype, "writeStatistics", null), e([y$3({ type: Boolean, json: { write: true } })], h$1.prototype, "useGamma", void 0), e([y$3({ type: n$2.apiValues, json: { type: n$2.jsonValues, write: n$2.write } })], h$1.prototype, "stretchType", void 0), e([o$2("stretchType", ["stretchType"])], h$1.prototype, "readStretchType", null), e([r({ rasterStretch: "raster-stretch" })], h$1.prototype, "type", void 0), h$1 = d$1 = e([n$1("esri.renderers.RasterStretchRenderer")], h$1);
const y$1 = h$1;
var u$4;
const Z$1 = new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]), b = new s({ beaufort_ft: "beaufort-ft", beaufort_km: "beaufort-km", beaufort_kn: "beaufort-kn", beaufort_m: "beaufort-m", beaufort_mi: "beaufort-mi", classified_arrow: "classified-arrow", ocean_current_kn: "ocean-current-kn", ocean_current_m: "ocean-current-m", simple_scalar: "simple-scalar", single_arrow: "single-arrow", wind_speed: "wind-barb" }), h = new s({ flow_from: "flow-from", flow_to: "flow-to" });
let E$1 = u$4 = class extends y$2(l$4) {
  constructor(e2) {
    super(e2), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }
  readInputUnit(e2, M2) {
    return Z$1.has(e2) ? c$6.fromJSON(e2) : null;
  }
  readOutputUnit(e2, M2) {
    return Z$1.has(e2) ? c$6.fromJSON(e2) : null;
  }
  get styleRenderer() {
    const e2 = this.style, M2 = this.attributeField, i2 = this._createStyleRenderer(e2);
    return i2.field = M2, i2;
  }
  get sizeVariables() {
    const e2 = [];
    if (this.visualVariables)
      for (const M2 of this.visualVariables)
        M2.type === "size" && e2.push(M2);
    if (e2.length === 0) {
      const M2 = new j$2({ field: "Magnitude", minSize: 0.2 * this.symbolTileSize, maxSize: 0.8 * this.symbolTileSize });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  get rotationVariables() {
    const e2 = [];
    if (this.visualVariables)
      for (const M2 of this.visualVariables)
        M2.type === "rotation" && e2.push(M2);
    if (e2.length === 0) {
      const M2 = new n$3({ field: "Direction", rotationType: this.rotationType });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  clone() {
    return new u$4({ attributeField: this.attributeField, flowRepresentation: this.flowRepresentation, rotationType: this.rotationType, symbolTileSize: this.symbolTileSize, style: this.style, visualVariables: y$4(this.visualVariables), inputUnit: this.inputUnit, outputUnit: this.outputUnit });
  }
  async getGraphicsFromPixelData(e2, M2 = false, t$12 = []) {
    var _a;
    const a2 = new Array(), I2 = l$6(this.inputUnit, this.outputUnit), o2 = ((_a = this.rotationVariables[0]) == null ? void 0 : _a.rotationType) || this.rotationType, A2 = M2 ? d$4(e2.pixelBlock, "vector-uv", o2, I2) : g(e2.pixelBlock, "vector-magdir", I2);
    if (t(A2))
      return a2;
    const s2 = e2.extent, d2 = r$2(A2.mask) && A2.mask.length > 0;
    let n2 = 0;
    const y2 = (s2.xmax - s2.xmin) / A2.width, C2 = (s2.ymax - s2.ymin) / A2.height;
    for (let r2 = 0; r2 < A2.height; r2++)
      for (let e3 = 0; e3 < A2.width; e3++, n2++) {
        let M3 = new w$2({ x: s2.xmin + e3 * y2 + y2 / 2, y: s2.ymax - r2 * C2 - C2 / 2, spatialReference: s2.spatialReference });
        M3 = (await v(M3))[0];
        const I3 = t$12.some((e4) => e4.intersects(M3));
        if ((!d2 || A2.mask[n2]) && !I3) {
          const e4 = { Magnitude: A2.pixels[0][n2], Direction: A2.pixels[1][n2] }, t2 = new g$1({ geometry: { type: "point", x: M3.x, y: M3.y, spatialReference: s2.spatialReference }, attributes: e4 });
          t2.symbol = this._getVisualVariablesAppliedSymbol(t2), a2.push(t2);
        }
      }
    return a2;
  }
  getSymbol(e2, M2) {
  }
  async getSymbolAsync(e2, M2) {
  }
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    var _a;
    return (_a = this.styleRenderer) == null ? void 0 : _a.classBreakInfos;
  }
  getDefaultSymbol() {
    var _a;
    return (_a = this.styleRenderer) == null ? void 0 : _a.defaultSymbol;
  }
  _getDefaultSymbol(e2) {
    return new y$5({ path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z", outline: new m$6({ width: 0 }), size: 20, color: e2 || new l$5([0, 92, 230]) });
  }
  _getVisualVariablesAppliedSymbol(e2) {
    var _a, _b;
    if (!e2)
      return;
    const M$1 = (_b = (_a = this.styleRenderer) == null ? void 0 : _a.getSymbol(e2)) == null ? void 0 : _b.clone(), i2 = this.sizeVariables, t2 = this.rotationVariables;
    if (i2 && i2.length && this.sizeVariables.forEach((i3) => M(M$1, T$2([i3], e2))), t2 && t2.length) {
      const i3 = this.flowRepresentation === "flow-to" === (this.style === "ocean-current-kn" || this.style === "ocean-current-m") ? 0 : 180;
      e2.attributes.Direction = e2.attributes.Direction + i3, this.rotationVariables.forEach((i4) => N$1(M$1, m$7(i4, e2), i4.axis));
    }
    return M$1;
  }
  _createStyleRenderer(e2) {
    let M2 = { defaultSymbol: this._getDefaultSymbol(), classBreakInfos: [] };
    switch (e2) {
      case "single-arrow":
        M2 = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        M2 = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        M2 = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        M2 = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        M2 = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        M2 = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        M2 = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        M2 = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        M2 = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        M2 = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        M2 = this._createClassifiedArrowRenderer();
    }
    return new _(M2);
  }
  _createSingleArrowRenderer() {
    return { defaultSymbol: this._getDefaultSymbol() };
  }
  _createBeaufortKnotsRenderer() {
    const e2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], i2 = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return { defaultSymbol: this._getDefaultSymbol(new l$5([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, i2) };
  }
  _createBeaufortMeterRenderer() {
    const e2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], i2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return { defaultSymbol: this._getDefaultSymbol(new l$5([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, i2) };
  }
  _createBeaufortFeetRenderer() {
    const e2 = this._getDefaultSymbol(new l$5([214, 47, 39]));
    let i2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a2 = 3.28084;
    i2 = i2.map((e3) => e3 * a2);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i2, t2) };
  }
  _createBeaufortMilesRenderer() {
    const e2 = this._getDefaultSymbol(new l$5([214, 47, 39]));
    let i2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a2 = 2.23694;
    i2 = i2.map((e3) => e3 * a2);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i2, t2) };
  }
  _createBeaufortKilometersRenderer() {
    const e2 = this._getDefaultSymbol(new l$5([214, 47, 39]));
    let i2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a2 = 3.6;
    i2 = i2.map((e3) => e3 * a2);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i2, t2) };
  }
  _createCurrentMeterRenderer() {
    const e2 = [0, 0.5, 1, 1.5, 2], i2 = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new l$5([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, i2) };
  }
  _createCurrentKnotsRenderer() {
    const e2 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], i2 = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new l$5([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, i2) };
  }
  _createClassifiedArrowRenderer() {
    var _a;
    const e2 = this._getDefaultSymbol(new l$5([56, 168, 0]));
    let i2 = [0, 1e-6, 3.5, 7, 10.5, 14];
    if ((_a = this.sizeVariables) == null ? void 0 : _a.length) {
      const e3 = this.sizeVariables[0].minDataValue, M2 = this.sizeVariables[0].maxDataValue;
      if (e3 && M2) {
        const t3 = (M2 - e3) / 5;
        i2 = Array.from(Array(6).keys()).map((M3) => e3 + t3 * M3);
      }
    }
    const t2 = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i2, t2) };
  }
  _createSimpleScalarRenderer() {
    return { defaultSymbol: n$4.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=", height: 20, width: 20, type: "esriPMS", angle: 0 }) };
  }
  _createWindBarbsRenderer() {
    const e2 = Array.from(Array(31).keys()).map((e3) => 5 * e3), M2 = [{ range: "0-5", path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "5-10", path: "M25 0 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "10-15", path: "M25 0 L25 40 L10 45 L25 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "15-20", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "20-25", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "25-30", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "30-35", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "35-40", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "40-45", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "45-50", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "50-55", path: "M25 0 L25 40 L10 40 L25 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "55-60", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "60-65", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "65-70", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "70-75", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "75-80", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "80-85", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "85-90", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "90-95", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "95-100", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "100-105", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "105-110", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "110-115", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "115-120", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "120-125", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "125-130", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "130-135", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "135-140", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "140-145", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "145-150", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }], i2 = n$4.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC", height: 20, width: 20, type: "esriPMS", angle: 0 }), t2 = e2.map((t3, a2) => {
      let I2;
      if (a2 !== e2.length - 1)
        if (a2 === 0)
          I2 = { minValue: t3, maxValue: e2[a2 + 1], symbol: i2 };
        else {
          const i3 = n$4.fromJSON({ type: "esriPMS", imageData: M2[a2].imageData, contentType: "image/svg+xml", height: 32, width: 32, angle: 0 });
          I2 = { minValue: t3, maxValue: e2[a2 + 1], symbol: i3 };
        }
      return new a$1(I2);
    });
    return { defaultSymbol: i2, classBreakInfos: t2 };
  }
  _getClassBreaks(e2, i2) {
    return i2.map((i3, t2) => new a$1({ minValue: e2[t2], maxValue: e2[t2 + 1], symbol: this._getDefaultSymbol(new l$5(i3)) }));
  }
};
e([y$3({ type: String, json: { write: true } })], E$1.prototype, "attributeField", void 0), e([y$3({ type: h.apiValues, json: { type: h.jsonValues, read: { reader: h.read }, write: { writer: h.write } } })], E$1.prototype, "flowRepresentation", void 0), e([y$3({ type: ["geographic", "arithmetic"], json: { write: true } })], E$1.prototype, "rotationType", void 0), e([y$3({ type: b.apiValues, json: { type: b.jsonValues, read: { reader: b.read }, write: { writer: b.write } } })], E$1.prototype, "style", void 0), e([y$3({ json: { write: true } })], E$1.prototype, "symbolTileSize", void 0), e([y$3({ type: c$6.apiValues, json: { type: c$6.jsonValues, write: { writer: c$6.write } } })], E$1.prototype, "inputUnit", void 0), e([o$2("inputUnit")], E$1.prototype, "readInputUnit", null), e([y$3({ type: c$6.apiValues, json: { type: c$6.jsonValues, read: { reader: c$6.read }, write: { writer: c$6.write } } })], E$1.prototype, "outputUnit", void 0), e([o$2("outputUnit")], E$1.prototype, "readOutputUnit", null), e([r({ vectorField: "vector-field" })], E$1.prototype, "type", void 0), e([y$3({ type: _ })], E$1.prototype, "styleRenderer", null), e([y$3({ type: j$2 })], E$1.prototype, "sizeVariables", null), e([y$3({ type: n$3 })], E$1.prototype, "rotationVariables", null), E$1 = u$4 = e([n$1("esri.renderers.VectorFieldRenderer")], E$1);
const x$1 = E$1;
const l$1 = { key: "type", base: null, typeMap: { "unique-value": C, "class-breaks": _, "raster-colormap": l$2, "raster-stretch": y$1, "vector-field": x$1, "raster-shaded-relief": m$3, flow: u$5 } }, i$1 = __spreadProps(__spreadValues({}, l$1), { typeMap: __spreadValues({}, l$1.typeMap) });
delete i$1.typeMap["vector-field"], delete i$1.typeMap.flow;
const f$2 = { uniqueValue: C, classBreaks: _, rasterStretch: y$1, rasterColormap: l$2, vectorField: x$1, rasterShadedRelief: m$3, flowRenderer: u$5 };
function p$2(e2) {
  return e2 && f$2[e2.type] || null;
}
function u$3(r2, s2) {
  if (!r2)
    return null;
  if (r2.type === "classBreaks" && r2.classificationMethod) {
    const e2 = r2.authoringInfo || { classificationMethod: "" };
    e2.classificationMethod = r2.classificationMethod, r2.authoringInfo = e2;
  }
  r2.type === "vectorField" && r2.visualVariables && !Array.isArray(r2.visualVariables) && (r2.visualVariables = [r2.visualVariables]);
  const t2 = p$2(r2);
  if (t2) {
    const e2 = new t2();
    return e2.read(r2, s2), e2;
  }
  return s2 && s2.messages && r2 && s2.messages.push(new t$1("renderer:unsupported", "Renderers of type '" + (r2.type || "unknown") + "' are not supported", { definition: r2, context: s2 })), null;
}
var u$2;
const c$1 = new Set(["raster", "raster2", "dem", "fillraster"]), p$1 = new Set(["rasters"]), m$2 = (t2) => t2 && t2.rasterFunction ? d.fromJSON(t2) : t2, f$1 = (t2) => t2 && t2 instanceof d ? t2.toJSON() : t2, l = (t2) => (t2 == null ? void 0 : t2.functionName) && !t2.declaredClass, y = (t2) => l(t2) ? new d(t2) : t2, F$1 = (t2) => {
  if (t2 == null)
    return null;
  t2 = y$4(t2);
  const r2 = {};
  for (const e2 of Object.keys(t2))
    c$1.has(e2.toLowerCase()) ? r2[e2] = m$2(t2[e2]) : p$1.has(e2.toLowerCase()) && Array.isArray(t2[e2]) ? r2[e2] = t2[e2].map(m$2) : r2[e2] = t2[e2];
  return r2;
};
let d = u$2 = class extends l$4 {
  constructor(t2) {
    super(t2), this.functionName = null, this.outputPixelType = "unknown", this.variableName = null, this.rasterFunctionDefinition = null;
  }
  set functionArguments(t2) {
    if (t2) {
      const r2 = Object.keys(t2);
      if (r2.some((r3) => c$1.has(r3.toLowerCase()) && l(t2[r3])) || r2.some((r3) => p$1.has(r3.toLowerCase()) && Array.isArray(t2[r3]) && t2[r3].some((t3) => l(t3)))) {
        t2 = y$4(t2);
        for (const e2 of r2)
          c$1.has(e2.toLowerCase()) ? t2[e2] = y(t2[e2]) : p$1.has(e2.toLowerCase()) && Array.isArray(t2[e2]) && (t2[e2] = t2[e2].map((t3) => y(t3)));
      }
    }
    this._set("functionArguments", t2);
  }
  readFunctionArguments(t2) {
    return F$1(t2);
  }
  writeFunctionArguments(t2, r2, e2) {
    const o2 = {};
    for (const n2 of Object.keys(t2))
      c$1.has(n2.toLowerCase()) ? o2[n2] = f$1(t2[n2]) : p$1.has(n2.toLowerCase()) && Array.isArray(t2[n2]) ? o2[n2] = t2[n2].map(f$1) : o2[n2] = f$1(t2[n2]);
    r2[e2] = o2;
  }
  readFunctionName(t2, r2) {
    const e2 = r2.rasterFunctionInfos, o2 = r2.name;
    return o2 || (e2 && e2.length && e2[0].name !== "None" ? e2[0].name : r2.rasterFunctionDefinition ? r2.rasterFunctionDefinition.name : r2.rasterFunction);
  }
  clone() {
    return new u$2({ functionName: this.functionName, functionArguments: y$4(this.functionArguments), outputPixelType: this.outputPixelType, variableName: this.variableName, rasterFunctionDefinition: y$4(this.rasterFunctionDefinition) });
  }
};
e([y$3({ json: { type: Object, name: "rasterFunctionArguments" } })], d.prototype, "functionArguments", null), e([o$2("functionArguments")], d.prototype, "readFunctionArguments", null), e([r$1("functionArguments")], d.prototype, "writeFunctionArguments", null), e([y$3({ json: { type: String, write: { target: "rasterFunction" } } })], d.prototype, "functionName", void 0), e([o$2("functionName", ["rasterFunction", "rasterFunctionInfos", "rasterFunctionDefinition"])], d.prototype, "readFunctionName", null), e([r({ C128: "c128", C64: "c64", F32: "f32", F64: "f64", S16: "s16", S32: "s32", S8: "s8", U1: "u1", U16: "u16", U2: "u2", U32: "u32", U4: "u4", U8: "u8", UNKNOWN: "unknown" }, { ignoreUnknown: false }), y$3({ json: { default: "unknown" } })], d.prototype, "outputPixelType", void 0), e([y$3({ type: String, json: { read: true, write: true } })], d.prototype, "variableName", void 0), e([y$3({ type: Object, json: { name: "rasterFunctionDefinition" } })], d.prototype, "rasterFunctionDefinition", void 0), d = u$2 = e([n$1("esri.layers.support.RasterFunction")], d);
const w$1 = d;
const o = o$3()({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" }), i = o$3()({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" });
var p;
const m$1 = { base: p$6, key: "type", typeMap: { extent: w$3, polygon: v$2 } };
let u$1 = p = class extends l$4 {
  constructor(e2) {
    super(e2), this.areaOfInterest = null, this.subsetDefinitions = null;
  }
  get dimensions() {
    const { subsetDefinitions: e2 } = this;
    if (e2 == null || e2.length === 0)
      return [];
    const t2 = new Map();
    e2.forEach((e3) => {
      if (!e3.dimensionName)
        return;
      let s3, r2;
      if (Array.isArray(e3.values[0])) {
        const t3 = e3.values;
        s3 = t3[0][0], r2 = t3[e3.values.length - 1][1];
      } else {
        const t3 = e3.values;
        s3 = t3[0], r2 = t3[e3.values.length - 1];
      }
      if (t2.has(e3.dimensionName)) {
        const o2 = t2.get(e3.dimensionName);
        o2[0] = Math.min(s3, o2[0]), o2[1] = Math.max(r2, o2[1]);
      } else
        t2.set(e3.dimensionName, [s3, r2]);
    });
    const s2 = [];
    for (const r2 of t2)
      s2.push({ name: r2[0], extent: r2[1] });
    return s2;
  }
  get variables() {
    const { subsetDefinitions: e2 } = this;
    if (e2 == null || e2.length === 0)
      return [];
    const t2 = new Set();
    return e2.forEach((e3) => {
      e3.variableName && t2.add(e3.variableName);
    }), [...t2];
  }
  clone() {
    var _a;
    const e2 = (_a = this.subsetDefinitions) == null ? void 0 : _a.map((e3) => e3.clone()), t2 = this.areaOfInterest ? this.areaOfInterest.clone() : this.areaOfInterest;
    return new p({ areaOfInterest: t2, subsetDefinitions: e2 });
  }
};
e([y$3({ types: m$1, json: { read: v$1, write: true } })], u$1.prototype, "areaOfInterest", void 0), e([y$3({ readOnly: true })], u$1.prototype, "dimensions", null), e([y$3({ readOnly: true })], u$1.prototype, "variables", null), e([y$3({ type: [p$5], json: { write: true } })], u$1.prototype, "subsetDefinitions", void 0), u$1 = p = e([n$1("esri.layers.support.MultidimensionalSubset")], u$1);
const c = u$1;
class n {
  constructor() {
    this._workerThread = null, this._destroyed = false;
  }
  async initialize() {
    const e2 = await u$6("RasterWorker");
    this._destroyed ? e2.close() : this._workerThread = e2;
  }
  destroy() {
    this._destroyed = true, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }
  async convertVectorFieldData(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const n2 = await this._workerThread.invoke("convertVectorFieldData", { pixelBlock: r2.pixelBlock.toJSON(), type: r2.dataType }, o2);
    return n2 ? new g$2(n2) : null;
  }
  async decode(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const n2 = await this._workerThread.invoke("decode", r2, o2);
    return n2 ? new g$2(n2) : null;
  }
  async symbolize(o2, n2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const a2 = { extent: o2.extent && o2.extent.toJSON(), pixelBlock: r$2(o2.pixelBlock) && o2.pixelBlock.toJSON(), simpleStretchParams: o2.simpleStretchParams, bandIds: o2.bandIds }, i2 = await this._workerThread.invoke("symbolize", a2, n2);
    return i2 ? new g$2(i2) : null;
  }
  async updateSymbolizer(r2, o2) {
    var _a;
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const t2 = (_a = r2 == null ? void 0 : r2.rendererJSON) == null ? void 0 : _a.histograms;
    await Promise.all(this._workerThread.broadcast("updateSymbolizer", { symbolizerJSON: r2.toJSON(), histograms: t2 }, o2));
  }
  async updateRasterFunction(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    await Promise.all(this._workerThread.broadcast("updateRasterFunction", { rasterFunctionJSON: r2.toJSON() }, o2));
  }
  async process(o2, n2) {
    var _a;
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const a2 = await this._workerThread.invoke("process", { extent: (_a = o2.extent) == null ? void 0 : _a.toJSON(), primaryPixelBlocks: o2.primaryPixelBlocks.map((e2) => r$2(e2) ? e2.toJSON() : null), primaryRasterIds: o2.primaryRasterIds }, n2);
    return a2 ? new g$2(a2) : null;
  }
  async stretch(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r2 == null ? void 0 : r2.pixelBlock))
      return null;
    const n2 = { srcPixelBlock: r2.pixelBlock.toJSON(), stretchParams: r2.stretchParams }, a2 = await this._workerThread.invoke("stretch", n2, o2);
    return a2 ? new g$2(a2) : null;
  }
  async split(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r2 == null ? void 0 : r2.pixelBlock))
      return null;
    const n2 = { srcPixelBlock: r2.pixelBlock.toJSON(), tileSize: r2.tileSize, maximumPyramidLevel: r2.maximumPyramidLevel }, a2 = await this._workerThread.invoke("split", n2, o2);
    return a2 && a2.forEach((e2, r3) => {
      a2.set(r3, e2 ? g$2.fromJSON(e2) : null);
    }), a2;
  }
  async estimateStatisticsHistograms(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r2 == null ? void 0 : r2.pixelBlock))
      return null;
    const t2 = { srcPixelBlock: r2.pixelBlock.toJSON() };
    return await this._workerThread.invoke("estimateStatisticsHistograms", t2, o2);
  }
  async mosaicAndTransform(o2, n2) {
    var _a;
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    if (!((_a = o2 == null ? void 0 : o2.srcPixelBlocks) == null ? void 0 : _a.length))
      return { pixelBlock: null };
    const a2 = __spreadProps(__spreadValues({}, o2), { srcPixelBlocks: o2.srcPixelBlocks.map((e2) => r$2(e2) ? e2.toJSON() : null) }), i2 = await this._workerThread.invoke("mosaicAndTransform", a2, n2);
    return { pixelBlock: i2.pixelBlock ? new g$2(i2.pixelBlock) : null, localNorthDirections: i2.localNorthDirections };
  }
  async createFlowMesh(r2, o2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const t2 = { buffer: r2.flowData.data.buffer, maskBuffer: r2.flowData.mask.buffer, width: r2.flowData.width, height: r2.flowData.height }, { meshType: n2, simulationSettings: a2 } = r2, i2 = await this._workerThread.invoke("createFlowMesh", { meshType: n2, flowData: t2, simulationSettings: a2 }, __spreadProps(__spreadValues({}, o2), { transferList: [t2.buffer, t2.maskBuffer] }));
    return { vertexData: new Float32Array(i2.vertexBuffer), indexData: new Uint32Array(i2.indexBuffer) };
  }
  getProjectionOffsetGrid(o2, t2) {
    if (!this._workerThread)
      throw new s$1("raster-jobhandler:no-connection", "no available worker connection");
    const n2 = r$2(o2.datumTransformation) ? o2.datumTransformation.steps.map((e2) => ({ wkid: e2.wkid, wkt: e2.wkt, isInverse: e2.isInverse })) : null, a2 = r$2(o2.rasterTransform) ? o2.rasterTransform.toJSON() : null, i2 = { projectedExtent: o2.projectedExtent.toJSON(), srcBufferExtent: o2.srcBufferExtent.toJSON(), pixelSize: o2.pixelSize, hasWrapAround: o2.hasWrapAround, spacing: o2.spacing, datumTransformationSteps: n2, rasterTransform: a2, isAdaptive: o2.isAdaptive, includeGCSGrid: o2.includeGCSGrid };
    return this._workerThread.invoke("getProjectionOffsetGrid", i2, t2);
  }
}
const w = 0.25, x = a$2.fromJSON({ type: "multipart", colorRamps: [{ fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }), T = a$2.fromJSON(i$2[0]), R = new Set(["scientific", "standard-time", "vector-uv", "vector-magdir", "vector-u", "vector-v", "vector-magnitude", "vector-direction"]);
function j(e2, n2) {
  const { attributeTable: a2, colormap: r2 } = e2;
  if (K(e2)) {
    const n3 = Y(e2);
    if (r$2(n3))
      return n3;
  }
  if (r$2(r2)) {
    const n3 = U(e2);
    if (r$2(n3))
      return n3;
  }
  if (r$2(a2)) {
    const n3 = F(e2);
    if (r$2(n3))
      return n3;
  }
  return I(e2, n2);
}
function k(e2, t2 = false) {
  const n2 = ["raster-stretch"];
  return O(e2) && n2.push("raster-colormap"), W(e2) && n2.push("unique-value"), J(e2, t2) && n2.push("class-breaks"), A(e2) && n2.push("raster-shaded-relief"), K(e2) && n2.push("vector-field"), Q(e2) && n2.push("flow"), n2;
}
function V(e2, t2, n2) {
  const a2 = ["nearest", "bilinear", "cubic", "majority"].find((e3) => e3 === (n2 == null ? void 0 : n2.toLowerCase()));
  if (t2 === "Map")
    return a2 != null ? a2 : "bilinear";
  if (e2.dataType === "standard-time")
    return a2 != null ? a2 : "nearest";
  return e2.dataType === "thematic" || e2.attributeTable || e2.colormap ? a2 === "nearest" || a2 === "majority" ? a2 : "nearest" : a2 != null ? a2 : "bilinear";
}
function I(e2, a2) {
  e2 = S(e2, a2 == null ? void 0 : a2.variableName);
  const { bandCount: r2 } = e2;
  let { bandIds: s2, stretchType: i2 } = a2 || {};
  (s2 == null ? void 0 : s2.some((e3) => e3 >= r2)) && (s2 = null);
  let o2 = e$1(e2.statistics), l2 = e$1(e2.histograms);
  r2 > 1 ? (s2 = (s2 == null ? void 0 : s2.length) ? s2 : L(e2), o2 = o2 == null ? null : s2 == null ? void 0 : s2.map((e3) => o2[e3]), l2 = l2 == null ? null : s2 == null ? void 0 : s2.map((e3) => l2[e3])) : s2 = [0], i2 == null && (i2 = q(e2));
  let u2 = false;
  switch (i2) {
    case "none":
      u2 = false;
      break;
    case "percent-clip":
      u2 = !(l2 == null ? void 0 : l2.length);
      break;
    default:
      u2 = !(o2 == null ? void 0 : o2.length);
  }
  const { dataType: c2 } = e2, m2 = (s2 == null ? void 0 : s2.length) === 1 && R.has(c2) ? x : null, f2 = new y$1({ stretchType: i2, dynamicRangeAdjustment: u2, colorRamp: m2, outputMin: 0, outputMax: 255, gamma: (s2 == null ? void 0 : s2.length) === 1 ? [1] : [1, 1, 1], useGamma: false });
  return i2 === "percent-clip" ? f2.maxPercent = f2.minPercent = w : i2 === "standard-deviation" && (f2.numberOfStandardDeviations = 2), u2 || !r$2(e2.multidimensionalInfo) && !(a2 == null ? void 0 : a2.includeStatisticsInStretch) || (i2 === "percent-clip" ? f2.histograms = l2 : i2 !== "min-max" && i2 !== "standard-deviation" || (f2.statistics = o2)), f2;
}
function S(e2, a2) {
  if (a2 == null)
    return e2;
  let r2 = e$1(e2.statistics), s2 = e$1(e2.histograms);
  const { multidimensionalInfo: o2 } = e2;
  if (a2 && r$2(o2)) {
    const e3 = o2.variables.find((e4) => e4.name === a2);
    if (e3) {
      const { statistics: t2, histograms: n2 } = e3;
      (t2 == null ? void 0 : t2.length) && (r2 = t2), (n2 == null ? void 0 : n2.length) && (s2 = n2);
    }
  }
  return u$7.fromJSON(__spreadProps(__spreadValues({}, e2.toJSON()), { statistics: r2, histograms: s2 }));
}
function L(e2) {
  const t2 = e2.bandCount;
  if (t2 === 1)
    return null;
  if (t2 === 2)
    return [0];
  const n2 = e2.keyProperties && e2.keyProperties.BandProperties;
  let a2;
  if (n2 && n2.length === t2) {
    const { red: e3, green: t3, blue: r2, nir: s2 } = E(n2);
    e3 != null && t3 != null && r2 != null ? a2 = [e3, t3, r2] : s2 != null && e3 != null && t3 != null && (a2 = [s2, e3, t3]);
  }
  return !a2 && t2 >= 3 && (a2 = [0, 1, 2]), a2;
}
function E(e2) {
  var _a;
  const t2 = {};
  for (let n2 = 0; n2 < e2.length; n2++) {
    const a2 = e2[n2], r2 = (_a = a2.BandName) == null ? void 0 : _a.toLowerCase();
    if (r2 === "red")
      t2.red = n2;
    else if (r2 === "green")
      t2.green = n2;
    else if (r2 === "blue")
      t2.blue = n2;
    else if (r2 === "nearinfrared" || r2 === "nearinfrared_1" || r2 === "nir")
      t2.nir = n2;
    else if (a2.WavelengthMax && a2.WavelengthMin) {
      const e3 = a2.WavelengthMin, r3 = a2.WavelengthMax;
      t2.blue == null && e3 >= 410 && e3 <= 480 && r3 >= 480 && r3 <= 540 ? t2.blue = n2 : t2.green == null && e3 >= 490 && e3 <= 560 && r3 >= 560 && r3 <= 610 ? t2.green = n2 : t2.red == null && e3 >= 595 && e3 <= 670 && r3 >= 660 && r3 <= 730 ? t2.red = n2 : t2.nir == null && e3 >= 700 && e3 <= 860 && r3 >= 800 && r3 <= 950 && (t2.nir = n2);
    }
  }
  return t2;
}
function q(e2) {
  let n2 = "percent-clip";
  const { pixelType: a2, dataType: r2, histograms: s2, statistics: i2 } = e2;
  return a2 !== "u8" || r2 !== "processed" && r$2(s2) && r$2(i2) ? a2 === "u8" || r2 === "elevation" || R.has(r2) ? n2 = "min-max" : r$2(s2) ? n2 = "percent-clip" : r$2(i2) && (n2 = "min-max") : n2 = "none", n2;
}
function F(n2, a2, r2, s2) {
  if (!W(n2, a2))
    return null;
  const { attributeTable: i2, statistics: o2 } = n2, u2 = N(i2, a2), c2 = z(i2, "red"), p2 = z(i2, "green"), d2 = z(i2, "blue"), b2 = new j$1(), h2 = [], g2 = new Set(), v2 = !!(c2 && p2 && d2);
  if (r$2(i2))
    i2.features.forEach((t2) => {
      const n3 = t2.attributes[u2.name];
      if (!g2.has(t2.attributes[u2.name]) && n3 != null) {
        g2.add(n3);
        const a3 = v2 && (c2.type === "single" || c2.type === "double") && (p2.type === "single" || p2.type === "double") && (d2.type === "single" || d2.type === "double") && !i2.features.some((e2) => e2.attributes[c2.name] > 1 || e2.attributes[p2.name] > 1 || e2.attributes[d2.name] > 1), r3 = a3 ? 255 : 1;
        h2.push(new n$5({ value: t2.attributes[u2.name], label: t2.attributes[u2.name] + "", symbol: { type: "simple-fill", style: "solid", outline: null, color: new l$5(v2 ? [t2.attributes[c2.name] * r3, t2.attributes[p2.name] * r3, t2.attributes[d2.name] * r3, 1] : [0, 0, 0, 0]) } }));
      }
    });
  else if (o2 == null ? void 0 : o2[0])
    for (let t2 = o2[0].min; t2 <= o2[0].max; t2++)
      h2.push(new n$5({ value: t2, label: t2.toString(), symbol: { type: "simple-fill", style: "solid", outline: null, color: new l$5([0, 0, 0, 0]) } }));
  if (h2.sort((e2, t2) => e2.value && typeof e2.value.valueOf() == "string" ? 0 : e2.value > t2.value ? 1 : -1), !v2) {
    const t2 = h$3(T, h2.length);
    h2.forEach((n3, a3) => n3.symbol.color = new l$5(t2[a3].slice(1, 4))), b2.colorRamp = T;
  }
  if (r2 || s2) {
    const t2 = r2 || h$3(s2, h2.length).map((e2) => e2.slice(1));
    h2.forEach((n3, a3) => n3.symbol.color = new l$5(t2[a3])), b2.colorRamp = s2;
  }
  return new C({ field: u2.name, uniqueValueInfos: h2, authoringInfo: b2 });
}
function N(e2, n2, a2) {
  let r2;
  return r$2(e2) ? (r2 = n2 ? e2.fields.find((e3) => n2.toLowerCase() === e3.name.toLowerCase()) : P(e2.fields), r2 || (a2 || (r2 = e2.fields.find((e3) => e3.type === "string")), r2 || (r2 = z(e2, "value")))) : r2 = new y$6({ name: "value" }), r2;
}
function P(e2) {
  let t2;
  for (let n2 = 0; n2 < e2.length; n2++) {
    const a2 = e2[n2].name.toLowerCase();
    if (e2[n2].type === "string") {
      if (a2.startsWith("class")) {
        t2 = e2[n2];
        break;
      }
      t2 == null && (a2.endsWith("name") || a2.endsWith("type")) && (t2 = e2[n2]);
    }
  }
  return t2;
}
function z(e2, t$12) {
  return t(e2) ? null : e2.fields.find((e3) => e3.name.toLowerCase() === t$12);
}
function W(e2, t$12) {
  const { attributeTable: n2, bandCount: r2 } = e2;
  if (t(n2) && H(e2))
    return true;
  if (t(n2) || r2 > 1)
    return false;
  if (t$12) {
    if (n2.fields.find((e3) => e3.name.toLowerCase() === t$12.toLowerCase()) == null)
      return false;
  }
  return true;
}
function O(e2) {
  const { bandCount: n2, colormap: a2 } = e2;
  return r$2(a2) && a2.length > 0 && n2 === 1;
}
function U(e2) {
  if (!O(e2))
    return null;
  let a2;
  const { attributeTable: r2, colormap: s2 } = e2;
  if (r$2(r2)) {
    const e3 = z(r2, "value"), t2 = N(r2, null, true);
    t2.type === "string" && (a2 = {}, r2.features.forEach((n2) => {
      const r3 = n2.attributes;
      a2[r3[e3.name]] = t2 ? r3[t2.name] : r3[e3.name];
    }));
  }
  return l$2.createFromColormap(e$1(s2), a2);
}
function A(e2) {
  const { bandCount: t2, dataType: n2, pixelType: a2 } = e2;
  return n2 === "elevation" || n2 === "generic" && t2 === 1 && (a2 === "s16" || a2 === "s32" || a2 === "f32" || a2 === "f64");
}
function J(e2, n2 = false) {
  const { attributeTable: a2, bandCount: r2 } = e2;
  return r2 === 1 && (!n2 || r$2(a2) || r$2(e2.histograms));
}
function H(e2) {
  var _a, _b, _c;
  return ["u8", "s8"].includes(e2.pixelType) && ((_b = (_a = e2.statistics) == null ? void 0 : _a[0]) == null ? void 0 : _b.min) != null && ((_c = e2.statistics[0]) == null ? void 0 : _c.max) != null && e2.bandCount === 1;
}
function K(e2) {
  const { dataType: t2 } = e2;
  return t2 === "vector-uv" || t2 === "vector-magdir";
}
function Q(e2) {
  const { dataType: t2 } = e2;
  return t2 === "vector-uv" || t2 === "vector-magdir";
}
const X = new Map([["m/s", "meter-per-second"], ["km/h", "kilometer-per-hour"], ["knots", "knots"], ["ft/s", "feet-per-second"], ["mph", "mile-per-hour"]]);
function Y(e2) {
  if (!K(e2))
    return null;
  let n2;
  if (r$2(e2.statistics) && e2.statistics.length && (e2.dataType === "vector-magdir" || e2.dataType === "vector-uv")) {
    const { minMagnitude: t2, maxMagnitude: a3 } = te(e2.dataType, e2.statistics);
    n2 = [{ type: "size", field: "Magnitude", minSize: 10, maxSize: 40, minDataValue: t2, maxDataValue: a3 }];
  }
  const a2 = r$2(e2.multidimensionalInfo) ? X.get(e2.multidimensionalInfo.variables[0].unit) : null, r2 = new x$1({ visualVariables: n2, inputUnit: a2, rotationType: "geographic" });
  return r2.visualVariables = [...r2.sizeVariables, ...r2.rotationVariables], r2;
}
function Z(e2) {
  var _a;
  return { color: (_a = e2.symbolLayers[0].material) == null ? void 0 : _a.color, type: "esriSFS", style: "esriSFSSolid" };
}
function $(e2) {
  var _a, _b, _c;
  if (e2.type === "uniqueValue") {
    const t2 = e2.uniqueValueInfos, n2 = t2 == null ? void 0 : t2[0].symbol;
    return ((_a = n2 == null ? void 0 : n2.symbolLayers) == null ? void 0 : _a.length) && (e2.uniqueValueInfos = t2 == null ? void 0 : t2.map((e3) => ({ value: e3.value, label: e3.label, symbol: e3.symbol ? Z(e3.symbol) : null }))), e2;
  }
  if (e2.type === "classBreaks") {
    const t2 = e2.classBreakInfos;
    return ((_c = (_b = t2[0].symbol) == null ? void 0 : _b.symbolLayers) == null ? void 0 : _c.length) && (e2.classBreakInfos = t2.map((e3) => ({ classMinValue: e3.classMinValue, classMaxValue: e3.classMaxValue, label: e3.label, symbol: e3.symbol ? Z(e3.symbol) : null }))), e2;
  }
  return e2;
}
function te(e2, t2) {
  let n2, a2;
  if (e2 === "vector-magdir")
    n2 = t2[0].min, a2 = t2[0].max;
  else {
    const e3 = t2[0].min, r2 = t2[0].max, s2 = t2[1].min, i2 = t2[1].max;
    n2 = 0, a2 = Math.max(Math.abs(e3), Math.abs(s2), Math.abs(r2), Math.abs(i2));
  }
  return { minMagnitude: n2, maxMagnitude: a2 };
}
async function u(u2, m2, f2) {
  var _a, _b, _c, _d, _e, _f, _g;
  const p2 = f$3(u2), { renderingRule: c2, sourceJSON: d2 } = m2 || {}, h2 = c2 ? JSON.stringify(c2.rasterFunctionDefinition || c2) : null, g2 = s$2(__spreadProps(__spreadValues({}, p2.query), { renderingRule: h2, f: "json" })), v2 = i$3(g2, f2);
  u2 = p2.path;
  const y2 = d2 || await U$1(u2, v2).then((e2) => e2.data), S2 = y2.hasRasterAttributeTable ? U$1(`${u2}/rasterAttributeTable`, v2) : null, V2 = y2.hasColormap ? U$1(`${u2}/colormap`, v2) : null, x2 = y2.hasHistograms ? U$1(`${u2}/histograms`, v2) : null, b2 = y2.currentVersion >= 10.3 ? U$1(`${u2}/keyProperties`, v2) : null, D = y2.hasMultidimensions ? U$1(`${u2}/multidimensionalInfo`, v2) : null, R2 = await Promise.allSettled([S2, V2, x2, b2, D]);
  let T2 = null;
  if (y2.minValues && y2.minValues.length === y2.bandCount) {
    T2 = [];
    for (let e2 = 0; e2 < y2.minValues.length; e2++)
      T2.push({ min: y2.minValues[e2], max: y2.maxValues[e2], avg: y2.meanValues[e2], stddev: y2.stdvValues[e2] });
  }
  const j2 = w$3.fromJSON(y2.extent), w2 = Math.ceil(j2.width / y2.pixelSizeX - 0.1), J2 = Math.ceil(j2.height / y2.pixelSizeY - 0.1), N2 = k$1.fromJSON(y2.spatialReference || y2.extent.spatialReference), O2 = R2[0].status === "fulfilled" && R2[0].value ? x$2.fromJSON(R2[0].value.data) : null, I2 = R2[1].status === "fulfilled" ? (_a = R2[1].value) == null ? void 0 : _a.data.colormap : null, z2 = R2[2].status === "fulfilled" ? (_b = R2[2].value) == null ? void 0 : _b.data.histograms : null, C2 = R2[3].status === "fulfilled" ? (_d = (_c = R2[3].value) == null ? void 0 : _c.data) != null ? _d : {} : {}, $2 = R2[4].status === "fulfilled" ? (_e = R2[4].value) == null ? void 0 : _e.data.multidimensionalInfo : null;
  ((_f = $2 == null ? void 0 : $2.variables) == null ? void 0 : _f.length) && $2.variables.forEach((e2) => {
    var _a2;
    ((_a2 = e2.statistics) == null ? void 0 : _a2.length) && e2.statistics.forEach((e3) => {
      e3.avg = e3.mean, e3.stddev = e3.standardDeviation;
    });
  });
  const { defaultVariable: P2, serviceDataType: E2 } = y2;
  P2 && P2 !== C2.DefaultVariable && (C2.DefaultVariable = P2), E2 && E2.includes("esriImageServiceDataTypeVector") && !E2.includes(C2.DataType) && (C2.DataType = E2.replace("esriImageServiceDataType", ""));
  let M2 = y2.noDataValue;
  return ((_g = y2.noDataValues) == null ? void 0 : _g.length) && y2.noDataValues.some((e2) => e2 !== M2) && (M2 = y2.noDataValues), new u$7({ width: w2, height: J2, bandCount: y2.bandCount, extent: w$3.fromJSON(y2.extent), spatialReference: N2, pixelSize: new w$2({ x: y2.pixelSizeX, y: y2.pixelSizeY, spatialReference: N2 }), pixelType: y2.pixelType.toLowerCase(), statistics: T2, attributeTable: O2, colormap: I2, histograms: z2, keyProperties: C2, noDataValue: M2, multidimensionalInfo: $2 });
}
function m(e2, t2, a2) {
  return u(e2, { sourceJSON: t2 }, a2);
}
function f(e2, t2, a2) {
  return u(e2, { renderingRule: t2 }, a2);
}
export { $, L, V, i$1 as a, c, f, i, j, k, l$1 as l, m, n, o, u$3 as u, w$1 as w };
