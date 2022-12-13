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
import { aX as y$6, iX as j$2, t as t$1, dT as o, $ as e$1, a0 as y$7, cD as o$1, gp as T$2, cn as s, a7 as w$3, a1 as n$3, co as l$2, dD as r, aK as k$1, cE as x$1, a as r$1, dr as f$3, dG as s$1, dH as i$3, U, dF as v$1, cr as w$4, dA as i$4, c0 as v$2, dB as T$3, ar as c$4, cq as u$3, g2 as y$8, iS as w$5, h7 as f$4, c9 as r$2, bO as j$3, s as s$2, g as s$3, dC as v$3, k as e$2, cO as x$2, iY as s$4, aq as v$4, R as l$4, cC as g$3, iZ as j$5, iw as a$1, i2 as n$7, iM as a$2, i3 as t$2, h2 as c$7, h3 as v$5, i4 as p$8, iJ as o$3, h1 as p$9, h4 as O, e0 as b$1, aL as w$6, i7 as p$a, i_ as e$3, iE as c$8, i9 as p$b, d4 as k$3 } from "./index.js";
import { w as w$2, o as o$2, i as i$2, c as c$5, l as l$3, a as i$5, u as u$4, m as m$5, k as k$2, L as L$1, j as j$4, $, f as f$6, n as n$6 } from "./fetchRasterInfo.js";
import { p as p$7, m as m$4, d as d$5, c as c$6 } from "./multidimensionalUtils.js";
import { k, _, h as h$4, n as n$2, f as f$2, b as n$4, e as u$2, T as T$4, S as S$2, P } from "./RasterSymbolizer.js";
import { g as g$2 } from "./pixelUtils.js";
import { f as f$5, b as f$7 } from "./dataUtils.js";
import { s as s$5, n as n$5 } from "./executeForIds.js";
import "vue";
import "./generateRendererUtils.js";
import "./colorUtils.js";
const e = { StretchFunction: { arguments: { ComputeGamma: { isDataset: false, isPublic: false, name: "ComputeGamma", type: "RasterFunctionVariable", value: false }, DRA: { isDataset: false, isPublic: false, name: "DRA", type: "RasterFunctionVariable", value: false }, EstimateStatsHistogram: { isDataset: false, isPublic: false, name: "EstimateStatsHistogram", type: "RasterFunctionVariable", value: false }, Gamma: { displayName: "Gamma", isDataset: false, isPublic: false, name: "Gamma", type: "RasterFunctionVariable" }, Histograms: { isDataset: false, isPublic: false, name: "Histograms", type: "RasterFunctionVariable" }, Max: { isDataset: false, isPublic: false, name: "Max", type: "RasterFunctionVariable", value: 255 }, MaxPercent: { isDataset: false, isPublic: false, name: "MaxPercent", type: "RasterFunctionVariable", value: 0.5 }, Min: { isDataset: false, isPublic: false, name: "Min", type: "RasterFunctionVariable", value: 0 }, MinPercent: { isDataset: false, isPublic: false, name: "MinPercent", type: "RasterFunctionVariable", value: 0.25 }, NumberOfStandardDeviations: { isDataset: false, isPublic: false, name: "NumberOfStandardDeviation", type: "RasterFunctionVariable", value: 2 }, Raster: { isDataset: true, isPublic: false, name: "Raster", type: "RasterFunctionVariable" }, SigmoidStrengthLevel: { isDataset: false, isPublic: false, name: "SigmoidStrengthLevel", type: "RasterFunctionVariable", value: 2 }, Statistics: { isDataset: false, isPublic: false, name: "Statistics", type: "RasterFunctionVariable" }, StretchType: { isDataset: false, isPublic: false, name: "StretchType", type: "RasterFunctionVariable", value: 0 }, type: "StretchFunctionArguments", UseGamma: { isDataset: false, isPublic: false, name: "UseGamma", type: "RasterFunctionVariable", value: false } }, description: "Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.", function: { description: "Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.", name: "Stretch", pixelType: "UNKNOWN", type: "StretchFunction" }, functionType: 0, name: "Stretch", thumbnail: "" }, RemapFunction: { name: "Remap", description: "Changes pixel values by assigning new values to ranges of pixel values or using an external table.", function: { type: "RemapFunction", pixelType: "UNKNOWN", name: "Remap", description: "Changes pixel values by assigning new values to ranges of pixel values or using an external table." }, arguments: { Raster: { name: "Raster", isPublic: false, isDataset: true, type: "RasterFunctionVariable" }, UseTable: { name: "UseTable", isPublic: false, isDataset: false, value: false, type: "RasterFunctionVariable" }, InputRanges: { name: "InputRanges", isPublic: false, isDataset: false, type: "RasterFunctionVariable", displayName: "Input Ranges" }, OutputValues: { name: "OutputValues", isPublic: false, isDataset: false, type: "RasterFunctionVariable", displayName: "Output Values" }, NoDataRanges: { name: "NoDataRanges", isPublic: false, isDataset: false, type: "RasterFunctionVariable", displayName: "NoData Ranges" }, Table: { name: "Table", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, InputField: { name: "InputField", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, OutputField: { name: "OutputField", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, InputMaxField: { name: "InputMaxField", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, RemapTableType: { name: "RemapTableType", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, AllowUnmatched: { name: "AllowUnmatched", isPublic: false, isDataset: false, value: true, type: "RasterFunctionVariable" }, type: "RemapFunctionArguments" }, functionType: 0, thumbnail: "" }, ColormapFunction: { name: "Colormap", description: "Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.", function: { type: "ColormapFunction", pixelType: "UNKNOWN", name: "Colormap", description: "Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp." }, arguments: { Raster: { name: "Raster", isPublic: false, isDataset: true, type: "RasterFunctionVariable" }, ColorSchemeType: { name: "ColorSchemeType", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, Colormap: { name: "Colormap", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, ColormapName: { name: "ColormapName", isPublic: false, isDataset: false, value: "Gray", type: "RasterFunctionVariable" }, ColorRamp: { name: "ColorRamp", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, type: "ColormapFunctionArguments" }, functionType: 0, thumbnail: "" }, ShadedReliefFunction: { name: "Shaded Relief", description: "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.", function: { type: "ShadedReliefFunction", pixelType: "UNKNOWN", name: "Shaded Relief", description: "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image." }, arguments: { Raster: { name: "Raster", isPublic: false, isDataset: true, type: "RasterFunctionVariable" }, ColorSchemeType: { name: "ColorSchemeType", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, ColorRamp: { name: "ColorRamp", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, HillshadeType: { name: "HillshadeType", isPublic: false, isDataset: false, value: 0, type: "RasterFunctionVariable" }, Colormap: { name: "Colormap", isPublic: false, isDataset: false, type: "RasterFunctionVariable" }, Azimuth: { name: "Azimuth", isPublic: false, isDataset: false, value: 315, type: "RasterFunctionVariable" }, Altitude: { name: "Altitude", isPublic: false, isDataset: false, value: 45, type: "RasterFunctionVariable" }, SlopeType: { name: "SlopeType", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, ZFactor: { name: "ZFactor", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, PSPower: { name: "PSPower", isPublic: false, isDataset: false, value: 0.664, type: "RasterFunctionVariable" }, PSZFactor: { name: "PSZFactor", isPublic: false, isDataset: false, value: 0.024, type: "RasterFunctionVariable" }, RemoveEdgeEffect: { name: "RemoveEdgeEffect", isPublic: false, isDataset: false, value: false, type: "RasterFunctionVariable" }, type: "ShadedReliefFunctionArguments" }, functionType: 0, thumbnail: "" }, HillshadeFunction: { name: "Hillshade", description: "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image", function: { type: "HillshadeFunction", pixelType: "UNKNOWN", name: "Hillshade", description: "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image" }, arguments: { DEM: { name: "DEM", isPublic: false, isDataset: true, type: "RasterFunctionVariable" }, HillshadeType: { name: "HillshadeType", isPublic: false, isDataset: false, value: 0, type: "RasterFunctionVariable" }, Azimuth: { name: "Azimuth", isPublic: false, isDataset: false, value: 315, type: "RasterFunctionVariable" }, Altitude: { name: "Altitude", isPublic: false, isDataset: false, value: 45, type: "RasterFunctionVariable" }, SlopeType: { name: "SlopeType", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, ZFactor: { name: "ZFactor", isPublic: false, isDataset: false, value: 1, type: "RasterFunctionVariable" }, PSPower: { name: "PSPower", isPublic: false, isDataset: false, value: 0.664, type: "RasterFunctionVariable" }, PSZFactor: { name: "PSZFactor", isPublic: false, isDataset: false, value: 0.024, type: "RasterFunctionVariable" }, RemoveEdgeEffect: { name: "RemoveEdgeEffect", isPublic: false, isDataset: false, value: false, type: "RasterFunctionVariable" }, type: "HillshadeFunctionArguments" }, functionType: 0, thumbnail: "" }, ResampleFunction: { name: "Resample", description: "Changes the cell size of a raster.", function: { type: "ResampleFunction", pixelType: "UNKNOWN", name: "Resample", description: "Changes the cell size of a raster." }, arguments: { Raster: { name: "Raster", isPublic: false, isDataset: true, type: "RasterFunctionVariable" }, ResamplingType: { name: "ResamplingType", isPublic: false, isDataset: false, value: 0, type: "RasterFunctionVariable" }, InputCellSize: { name: "InputCellsize", isPublic: false, isDataset: false, value: { x: 0, y: 0 }, type: "RasterFunctionVariable" }, OutputCellSize: { name: "OutputCellsize", isPublic: false, isDataset: false, value: { x: 0, y: 0 }, type: "RasterFunctionVariable" }, type: "ResampleFunctionArguments" }, functionType: 0, thumbnail: "" } };
const c$3 = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767] }, m$3 = { simple_scalar: "Simple Scalar", wind_barb: "Wind Barb", single_arrow: "Single Arrow", beaufort_kn: "Beaufort Wind (Knots)", beaufort_m: "Beaufort Wind (MetersPerSecond)", ocean_current_m: "Ocean Current (MetersPerSecond)", ocean_current_kn: "Ocean Current (Knots)" }, p$6 = new Set(["raster-stretch", "unique-value", "class-breaks", "raster-shaded-relief", "vector-field", "raster-colormap"]);
function f$1(e2) {
  return p$6.has(e2.type);
}
function g$1(t2, n2) {
  if (!t2 || !n2)
    return y$6(t2 || n2);
  const r2 = y$6(t2);
  if (n2.rasterFunctionDefinition) {
    const e2 = n2.rasterFunctionDefinition;
    (e2.thumbnail || e2.thumbnailEx) && (e2.thumbnail = e2.thumbnailEx = null), d$4(r2.rasterFunctionDefinition.arguments, n2);
  } else if (n2.functionName.toLowerCase() !== "none") {
    b(r2.functionArguments).Raster = n2;
  }
  return r2;
}
function d$4(e2, t2) {
  for (const n2 in e2)
    n2.toLowerCase() === "raster" && (e2[n2].type === "RasterFunctionVariable" ? (e2[n2] = t2.rasterFunctionDefinition, e2[n2].type = "RasterFunctionTemplate") : e2[n2].type === "RasterFunctionTemplate" && d$4(e2[n2].arguments, t2));
}
function h$3(t2) {
  const n2 = y$6(e[t2.functionName + "Function"]), o2 = t2.functionArguments;
  for (const e2 in o2)
    e2.toLowerCase() === "raster" ? (n2.arguments[e2] = h$3(o2[e2]), n2.arguments[e2].type = "RasterFunctionTemplate") : e2.toLowerCase() === "colormap" ? (n2.arguments[e2].value = D(o2[e2]), n2.arguments.ColorSchemeType.value = 0) : n2.arguments[e2].value = o2[e2];
  return n2;
}
function y$5(e2, t2) {
  switch (t2 = t2 || {}, e2.type) {
    case "raster-stretch":
      return v(e2, t2);
    case "class-breaks":
      return C(e2, t2);
    case "unique-value":
      return A(e2, t2);
    case "raster-colormap":
      return F(e2, t2);
    case "vector-field":
      return T$1(e2, t2);
    case "raster-shaded-relief":
      return w$1(e2, t2);
    case "flow":
      throw new Error("Unsupported rendering rule.");
  }
}
function b(e2) {
  const t2 = e2 == null ? void 0 : e2.Raster;
  return t2 && t2.declaredClass === "esri.layers.support.RasterFunction" ? b(t2.functionArguments) : e2;
}
const R$1 = { none: 0, standardDeviation: 3, histogramEqualization: 4, minMax: 5, percentClip: 6, sigmoid: 9 };
function T$1(e2, t2) {
  const r2 = new w$2();
  r2.functionName = "VectorFieldRenderer";
  const { dataType: o2, bandProperties: a2 } = t2, i2 = o2 === "vector-uv";
  let s2, u2;
  a2 && a2.length === 2 && (s2 = a2.map((e3) => e3.BandName.toLowerCase()).indexOf("magnitude"), u2 = a2.map((e3) => e3.BandName.toLowerCase()).indexOf("direction")), s2 !== -1 && s2 !== null || (s2 = 0, u2 = 1);
  const c2 = e2.rotationType === "arithmetic" ? 1 : 2, p2 = e2.flowRepresentation === "flow-from" ? 0 : 1, f2 = e2.visualVariables ? e2.visualVariables.find((e3) => e3.field === "Magnitude") : new j$2(), g2 = { magnitudeBandID: s2, directionBandID: u2, isUVComponents: i2, referenceSystem: c2, massFlowAngleRepresentation: p2, symbolTileSize: 50, symbolTileSizeUnits: 100, calculationMethod: "Vector Average", symbologyName: m$3[e2.style.toLowerCase().replace("-", "_")], minimumMagnitude: f2.minDataValue, maximumMagnitude: f2.maxDataValue, minimumSymbolSize: f2.minSize, maximumSymbolSize: f2.maxSize };
  return r2.functionArguments = g2, t2.convertToRFT ? new w$2({ rasterFunctionDefinition: h$3(r2) }) : r2;
}
function w$1(e2, t2) {
  const r2 = t2.convertToRFT;
  if (t2.dataType !== "elevation" && (t2.dataType !== "generic" || t2.bandCount !== 1 || t2.pixelType !== "s16" && t2.pixelType !== "s32" && t2.pixelType !== "f32" && t2.pixelType !== "f64"))
    return new w$2();
  const i2 = new w$2();
  i2.functionName = "Hillshade";
  const s2 = e2.hillshadeType === "traditional" ? 0 : 1, u2 = e2.scalingType === "none" ? 1 : 3, l2 = { HillshadeType: s2, SlopeType: u2, ZFactor: e2.zFactor };
  return s2 === 0 && (l2.Azimuth = e2.azimuth, l2.Altitude = e2.altitude), u2 === 3 && (l2.PSPower = e2.pixelSizePower, l2.PSZFactor = e2.pixelSizeFactor), i2.functionArguments = l2, i2.variableName = "Raster", e2.colorRamp && (i2.functionName = "ShadedRelief", r2 ? l2.ColorRamp = _(e2.colorRamp) : l2.Colormap = h$4(e2.colorRamp, 256)), r2 ? new w$2({ rasterFunctionDefinition: h$3(i2) }) : i2;
}
function v(e2, t2) {
  var _a;
  const r2 = t2.convertToRFT, s2 = new w$2();
  s2.functionName = "Stretch";
  const l2 = R$1[n$2.toJSON(e2.stretchType)], c2 = "u8", m2 = { StretchType: l2, Statistics: N$1(e2.statistics), DRA: e2.dynamicRangeAdjustment, UseGamma: e2.useGamma, Gamma: e2.gamma, ComputeGamma: e2.computeGamma };
  if (e2.outputMin != null && (m2.Min = e2.outputMin), e2.outputMax != null && (m2.Max = e2.outputMax), l2 === R$1.standardDeviation ? (m2.NumberOfStandardDeviations = e2.numberOfStandardDeviations, s2.outputPixelType = c2) : l2 === R$1.percentClip ? (m2.MinPercent = e2.minPercent, m2.MaxPercent = e2.maxPercent, s2.outputPixelType = c2) : l2 === R$1.minMax ? s2.outputPixelType = c2 : l2 === R$1.sigmoid && (m2.SigmoidStrengthLevel = e2.sigmoidStrengthLevel), s2.functionArguments = m2, s2.variableName = "Raster", e2.colorRamp) {
    const u2 = e2.colorRamp, l3 = new w$2();
    if (r2)
      l3.functionArguments = { ColorRamp: _(u2) };
    else {
      const n2 = f$2(u2);
      if (n2)
        l3.functionArguments = { colorRamp: n2 };
      else if (!t2.convertColorRampToColormap || u2.type !== "algorithmic" && u2.type !== "multipart") {
        const t3 = e2.colorRamp.toJSON();
        t3.type === "algorithmic" ? t3.algorithm = t3.algorithm || "esriCIELabAlgorithm" : t3.type === "multipart" && ((_a = t3.colorRamps) == null ? void 0 : _a.length) && t3.colorRamps.forEach((e3) => e3.algorithm = e3.algorithm || "esriCIELabAlgorithm"), l3.functionArguments = { colorRamp: t3 };
      } else
        l3.functionArguments = { Colormap: h$4(u2, 256) };
    }
    return l3.variableName = "Raster", l3.functionName = "Colormap", l3.functionArguments.Raster = s2, r2 ? new w$2({ rasterFunctionDefinition: h$3(l3) }) : l3;
  }
  return r2 ? new w$2({ rasterFunctionDefinition: h$3(s2) }) : s2;
}
function C(e2, r2) {
  const o2 = [], a2 = [], i2 = [], s2 = [], u2 = 1e-6, { pixelType: l2, rasterAttributeTable: c2 } = r2, m2 = t$1(c2) ? null : c2.features, p2 = x(c2);
  if (m2 && Array.isArray(m2) && e2.classBreakInfos) {
    e2.classBreakInfos.forEach((t3, n2) => {
      const r3 = t3.symbol.color;
      let o4;
      r3.a && m2.forEach((a3) => {
        o4 = a3.attributes[e2.field], (o4 >= t3.minValue && o4 < t3.maxValue || n2 === e2.classBreakInfos.length - 1 && o4 >= t3.minValue) && s2.push([a3.attributes[p2], r3.r, r3.g, r3.b]);
      });
    });
    const t2 = l2 ? S$1(s2, l2) : s2, o3 = new w$2();
    return o3.functionName = "Colormap", o3.functionArguments = {}, o3.functionArguments.Colormap = t2, o3.variableName = "Raster", r2.convertToRFT ? new w$2({ rasterFunctionDefinition: h$3(o3) }) : o3;
  }
  e2.classBreakInfos.forEach((e3, t2) => {
    const n2 = e3.symbol && e3.symbol.color;
    n2.a ? (t2 === 0 ? o2.push(e3.minValue, e3.maxValue + u2) : o2.push(e3.minValue + u2, e3.maxValue + u2), a2.push(t2), s2.push([t2, n2.r, n2.g, n2.b])) : i2.push(e3.minValue, e3.maxValue);
  });
  const f2 = l2 ? S$1(s2, l2) : s2, g2 = new w$2();
  g2.functionName = "Remap", g2.functionArguments = { InputRanges: o2, OutputValues: a2, NoDataRanges: i2 }, g2.variableName = "Raster";
  const d2 = new w$2();
  return d2.functionName = "Colormap", d2.functionArguments = { Colormap: f2, Raster: g2 }, r2.convertToRFT ? new w$2({ rasterFunctionDefinition: h$3(d2) }) : d2;
}
function S$1(e2, t2) {
  const n2 = c$3[String(t2).toLowerCase()];
  return n2 && e2.push([Math.floor(n2[0] - 1), 0, 0, 0], [Math.ceil(n2[1] + 1), 0, 0, 0]), e2;
}
function x(e2) {
  if (t$1(e2))
    return;
  const { fields: n2 } = e2, r2 = n2 && n2.find((e3) => e3 && e3.name && e3.name.toLowerCase() === "value");
  return r2 && r2.name;
}
function A(e2, r2) {
  var _a, _b;
  const o2 = [], { pixelType: a2, rasterAttributeTable: i2 } = r2, s2 = t$1(i2) ? null : i2.features, u2 = x(i2), l2 = (_b = (_a = e2.defaultSymbol) == null ? void 0 : _a.color) == null ? void 0 : _b.toRgb(), c2 = e2.uniqueValueInfos;
  if (c2)
    if (s2) {
      const t2 = new Map();
      c2.forEach((e3) => {
        const n3 = e3.value, r3 = e3.symbol.color;
        n3 != null && r3 && r3.a && t2.set(String(n3), r3.toRgb());
      });
      const n2 = e2.field;
      s2.forEach(({ attributes: e3 }) => {
        const r3 = String(e3[n2]), a3 = e3[u2];
        if (t2.has(r3)) {
          const e4 = t2.get(r3);
          o2.push([a3, ...e4]);
        } else
          l2 && o2.push([a3, ...l2]);
      });
    } else
      for (let t2 = 0; t2 < c2.length; t2++) {
        const e3 = c2[t2], n2 = e3.symbol.color, r3 = +e3.value;
        if (n2 == null ? void 0 : n2.a) {
          if (isNaN(r3))
            return null;
          o2.push([r3, n2.r, n2.g, n2.b]);
        }
      }
  const m2 = a2 && o2.length > 0 ? S$1(o2, a2) : o2, p2 = new w$2();
  return p2.functionName = "Colormap", p2.functionArguments = {}, p2.functionArguments.Colormap = m2, p2.variableName = "Raster", r2.convertToRFT ? new w$2({ rasterFunctionDefinition: h$3(p2) }) : p2;
}
function F(e2, t2) {
  const r2 = e2.extractColormap();
  if (!r2 || r2.length === 0)
    return;
  const { pixelType: o2 } = t2, a2 = o2 ? S$1(r2, o2) : r2, i2 = new w$2();
  return i2.functionName = "Colormap", i2.functionArguments = {}, i2.functionArguments.Colormap = a2, t2.convertToRFT ? new w$2({ rasterFunctionDefinition: h$3(i2) }) : i2;
}
function N$1(e2) {
  const t2 = [];
  return e2.forEach((e3) => {
    const n2 = e3;
    if (Array.isArray(n2))
      t2.push(n2);
    else {
      if (n2.min == null || n2.max == null)
        return;
      const e4 = [n2.min, n2.max, n2.avg || 0, n2.stddev || 0];
      t2.push(e4);
    }
  }), t2;
}
function D(e2) {
  const t2 = [], n2 = [];
  return e2.forEach((e3) => {
    t2.push(e3[0]), n2.push(k([...e3.slice(1), 255]));
  }), { type: "RasterColormap", values: t2, colors: n2 };
}
var u$1;
const m$2 = o()({ MT_FIRST: "first", MT_LAST: "last", MT_MIN: "min", MT_MAX: "max", MT_MEAN: "mean", MT_BLEND: "blend", MT_SUM: "sum" }), h$2 = o()({ esriMosaicNone: "none", esriMosaicCenter: "center", esriMosaicNadir: "nadir", esriMosaicViewpoint: "viewpoint", esriMosaicAttribute: "attribute", esriMosaicLockRaster: "lock-raster", esriMosaicNorthwest: "northwest", esriMosaicSeamline: "seamline" });
function M(e2) {
  let t2;
  switch (e2 ? e2.toLowerCase().replace("esrimosaic", "") : "") {
    case "byattribute":
    case "attribute":
      t2 = "esriMosaicAttribute";
      break;
    case "lockraster":
      t2 = "esriMosaicLockRaster";
      break;
    case "center":
      t2 = "esriMosaicCenter";
      break;
    case "northwest":
      t2 = "esriMosaicNorthwest";
      break;
    case "nadir":
      t2 = "esriMosaicNadir";
      break;
    case "viewpoint":
      t2 = "esriMosaicViewpoint";
      break;
    case "seamline":
      t2 = "esriMosaicSeamline";
      break;
    default:
      t2 = "esriMosaicNone";
  }
  return h$2.fromJSON(t2);
}
let w = u$1 = class extends l$2 {
  constructor(e2) {
    super(e2), this.ascending = true, this.itemRenderingRule = null, this.lockRasterIds = null, this.method = null, this.multidimensionalDefinition = null, this.objectIds = null, this.operation = null, this.sortField = null, this.sortValue = null, this.viewpoint = null, this.where = null;
  }
  readAscending(e2, t2) {
    return t2.ascending != null ? t2.ascending : t2.sortAscending == null || t2.sortAscending;
  }
  readMethod(e2, t2) {
    return M(t2.mosaicMethod || t2.defaultMosaicMethod);
  }
  readOperation(e2, t2) {
    const o2 = t2.mosaicOperation, r2 = t2.mosaicOperator && t2.mosaicOperator.toLowerCase(), i2 = o2 || (r2 ? m$2.toJSON(r2) : null);
    return m$2.fromJSON(i2) || "first";
  }
  castSortValue(e2) {
    return e2 == null || typeof e2 == "string" || typeof e2 == "number" ? e2 : `${e2}`;
  }
  clone() {
    return new u$1({ ascending: this.ascending, itemRenderingRule: y$6(this.itemRenderingRule), lockRasterIds: y$6(this.lockRasterIds), method: this.method, multidimensionalDefinition: y$6(this.multidimensionalDefinition), objectIds: y$6(this.objectIds), operation: this.operation, sortField: this.sortField, sortValue: this.sortValue, viewpoint: y$6(this.viewpoint), where: this.where });
  }
};
e$1([y$7({ type: Boolean, json: { write: true } })], w.prototype, "ascending", void 0), e$1([o$1("ascending", ["ascending", "sortAscending"])], w.prototype, "readAscending", null), e$1([y$7({ type: w$2, json: { write: true } })], w.prototype, "itemRenderingRule", void 0), e$1([y$7({ type: [T$2], json: { write: { overridePolicy() {
  return { enabled: this.method === "lock-raster" };
} } } })], w.prototype, "lockRasterIds", void 0), e$1([y$7({ type: String, json: { type: h$2.jsonValues, write: { target: "mosaicMethod", writer: h$2.write } } })], w.prototype, "method", void 0), e$1([o$1("method", ["mosaicMethod", "defaultMosaicMethod"])], w.prototype, "readMethod", null), e$1([y$7({ type: [p$7], json: { write: true } })], w.prototype, "multidimensionalDefinition", void 0), e$1([y$7({ type: [T$2], json: { name: "fids", write: true } })], w.prototype, "objectIds", void 0), e$1([y$7({ json: { type: m$2.jsonValues, read: { reader: m$2.read }, write: { target: "mosaicOperation", writer: m$2.write } } })], w.prototype, "operation", void 0), e$1([o$1("operation", ["mosaicOperation", "mosaicOperator"])], w.prototype, "readOperation", null), e$1([y$7({ type: String, json: { write: { overridePolicy() {
  return { enabled: this.method === "attribute" };
} } } })], w.prototype, "sortField", void 0), e$1([y$7({ type: [String, Number], json: { write: { allowNull: true, overridePolicy() {
  return { enabled: this.method === "attribute", allowNull: true };
} } } })], w.prototype, "sortValue", void 0), e$1([s("sortValue")], w.prototype, "castSortValue", null), e$1([y$7({ type: w$3, json: { write: true } })], w.prototype, "viewpoint", void 0), e$1([y$7({ type: String, json: { write: true } })], w.prototype, "where", void 0), w = u$1 = e$1([n$3("esri.layers.support.MosaicRule")], w);
const y$4 = w;
let y$3 = class extends l$2 {
  constructor() {
    super(...arguments), this.layer = null, this.adjustAspectRatio = void 0, this.compression = void 0, this.pixelType = void 0, this.lercVersion = 2;
  }
  writeAdjustAspectRatio(e2, t2, r2) {
    this.layer.version < 10.3 || (t2[r2] = e2);
  }
  get bandIds() {
    return this.layer.bandIds;
  }
  set bandIds(e2) {
    this.layer && (this.layer.bandIds = e2);
  }
  get compressionQuality() {
    var _a;
    return (_a = this.layer) == null ? void 0 : _a.compressionQuality;
  }
  set compressionQuality(e2) {
    this.layer && (this.layer.compressionQuality = e2);
  }
  writeCompressionQuality(e2, t2, r2) {
    this.format && this.format.toLowerCase().includes("jpg") && e2 != null && (t2[r2] = e2);
  }
  get compressionTolerance() {
    var _a;
    return (_a = this.layer) == null ? void 0 : _a.compressionTolerance;
  }
  set compressionTolerance(e2) {
    this.layer && (this.layer.compressionTolerance = e2);
  }
  writeCompressionTolerance(e2, t2, r2) {
    this.format === "lerc" && e2 != null && (t2[r2] = e2);
  }
  get format() {
    var _a;
    return ((_a = this.layer.renderer) == null ? void 0 : _a.type) === "vector-field" ? "lerc" : this.layer.format;
  }
  get interpolation() {
    var _a;
    return (_a = this.layer) == null ? void 0 : _a.interpolation;
  }
  set interpolation(e2) {
    this.layer && (this.layer.interpolation = e2);
  }
  get noData() {
    var _a;
    return (_a = this.layer) == null ? void 0 : _a.noData;
  }
  set noData(e2) {
    this.layer && (this.layer.noData = e2);
  }
  get noDataInterpretation() {
    var _a;
    return (_a = this.layer) == null ? void 0 : _a.noDataInterpretation;
  }
  set noDataInterpretation(e2) {
    this.layer && (this.layer.noDataInterpretation = e2);
  }
  writeLercVersion(e2, t2, r2) {
    this.format === "lerc" && this.layer.version >= 10.5 && (t2[r2] = e2);
  }
  get version() {
    const e2 = this.layer;
    return e2.commitProperty("bandIds"), e2.commitProperty("format"), e2.commitProperty("compressionQuality"), e2.commitProperty("compressionTolerance"), e2.commitProperty("interpolation"), e2.commitProperty("noData"), e2.commitProperty("noDataInterpretation"), e2.commitProperty("mosaicRule"), e2.commitProperty("renderingRule"), e2.commitProperty("adjustAspectRatio"), e2.commitProperty("pixelFilter"), e2.commitProperty("definitionExpression"), e2.commitProperty("multidimensionalSubset"), (this._get("version") || 0) + 1;
  }
  set version(e2) {
    this._set("version", e2);
  }
  get mosaicRule() {
    const e2 = this.layer;
    let t2 = e2.mosaicRule;
    const r2 = e2.definitionExpression;
    return t2 ? r2 && r2 !== t2.where && (t2 = t2.clone(), t2.where = r2) : r2 && (t2 = new y$4({ where: r2 })), t2;
  }
  get renderingRule() {
    var _a, _b;
    const e2 = this.layer;
    let t2 = e2.renderingRule;
    const r2 = e2.pixelFilter, o2 = !e2.format || e2.format.includes("jpg") || e2.format.includes("png");
    t2 = this._addResampleRasterFunction(t2);
    const i2 = (_a = e2.multidimensionalSubset) == null ? void 0 : _a.areaOfInterest;
    return i2 && (t2 = this._addClipFunction(t2, i2)), o2 && !r2 && ((_b = e2.renderer) == null ? void 0 : _b.type) !== "vector-field" && (t2 = this.combineRendererWithRenderingRule(t2)), t2;
  }
  combineRendererWithRenderingRule(e2) {
    var _a;
    const t2 = this.layer, { rasterInfo: r2, renderer: o2 } = t2;
    if (e2 = e2 || t2.renderingRule, !o2 || !f$1(o2))
      return e2;
    return g$1(y$5(o2, { rasterAttributeTable: r2.attributeTable, pixelType: r2.pixelType, dataType: r2.dataType, bandProperties: (_a = r2.keyProperties) == null ? void 0 : _a.BandProperties, convertColorRampToColormap: t2.version < 10.6, convertToRFT: !!(e2 == null ? void 0 : e2.rasterFunctionDefinition), bandCount: r2.bandCount }), e2);
  }
  _addResampleRasterFunction(e2) {
    var _a;
    if (!(((_a = this.layer.renderer) == null ? void 0 : _a.type) === "vector-field") || (e2 == null ? void 0 : e2.functionName) === "Resample")
      return e2;
    const t2 = this.layer.serviceDataType === "esriImageServiceDataTypeVector-UV" ? 7 : 10, r2 = this.layer.serviceRasterInfo.pixelSize;
    let o2 = new w$2({ functionName: "Resample", functionArguments: { ResamplingType: t2, InputCellSize: r2 } });
    return o2 = (e2 == null ? void 0 : e2.rasterFunctionDefinition) ? new w$2({ rasterFunctionDefinition: h$3(o2) }) : o2, g$1(o2, e2);
  }
  _addClipFunction(e2, t2) {
    const r2 = new w$2({ functionName: "Clip", functionArguments: { ClippingGeometry: t2.toJSON(), ClippingType: 1 } });
    return g$1(r2, e2);
  }
};
e$1([y$7()], y$3.prototype, "layer", void 0), e$1([y$7({ json: { write: true } })], y$3.prototype, "adjustAspectRatio", void 0), e$1([r("adjustAspectRatio")], y$3.prototype, "writeAdjustAspectRatio", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "bandIds", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "compression", void 0), e$1([y$7({ json: { write: true } })], y$3.prototype, "compressionQuality", null), e$1([r("compressionQuality")], y$3.prototype, "writeCompressionQuality", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "compressionTolerance", null), e$1([r("compressionTolerance")], y$3.prototype, "writeCompressionTolerance", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "format", null), e$1([y$7({ type: String, json: { read: { reader: o$2.read }, write: { writer: o$2.write } } })], y$3.prototype, "interpolation", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "noData", null), e$1([y$7({ type: String, json: { read: { reader: i$2.read }, write: { writer: i$2.write } } })], y$3.prototype, "noDataInterpretation", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "pixelType", void 0), e$1([y$7({ json: { write: true } })], y$3.prototype, "lercVersion", void 0), e$1([r("lercVersion")], y$3.prototype, "writeLercVersion", null), e$1([y$7({ type: Number })], y$3.prototype, "version", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "mosaicRule", null), e$1([y$7({ json: { write: true } })], y$3.prototype, "renderingRule", null), y$3 = e$1([n$3("esri.layers.mixins.ExportImageServiceParameters")], y$3);
let p$5 = class extends l$2 {
  constructor() {
    super(...arguments), this.north = null, this.up = null, this.spatialReference = null;
  }
};
e$1([y$7({ type: Number, json: { write: true } })], p$5.prototype, "north", void 0), e$1([y$7({ type: Number, json: { write: true } })], p$5.prototype, "up", void 0), e$1([y$7({ type: k$1, json: { write: true } })], p$5.prototype, "spatialReference", void 0), p$5 = e$1([n$3("esri.rest.support.ImageAngleResult")], p$5);
const i$1 = p$5;
let p$4 = class extends l$2 {
  constructor() {
    super(...arguments), this.catalogItemVisibilities = null, this.catalogItems = null, this.location = null, this.name = null, this.objectId = null, this.processedValues = null, this.properties = null, this.value = null;
  }
};
e$1([y$7({ json: { write: true } })], p$4.prototype, "catalogItemVisibilities", void 0), e$1([y$7({ type: x$1, json: { write: true } })], p$4.prototype, "catalogItems", void 0), e$1([y$7({ type: w$3, json: { write: true } })], p$4.prototype, "location", void 0), e$1([y$7({ json: { write: true } })], p$4.prototype, "name", void 0), e$1([y$7({ json: { write: true } })], p$4.prototype, "objectId", void 0), e$1([y$7({ json: { write: true } })], p$4.prototype, "processedValues", void 0), e$1([y$7({ json: { write: true } })], p$4.prototype, "properties", void 0), e$1([y$7({ json: { write: true } })], p$4.prototype, "value", void 0), p$4 = e$1([n$3("esri.rest.support.ImageIdentifyResult")], p$4);
const l$1 = p$4;
let t = class extends l$2 {
  constructor() {
    super(...arguments), this.geometries = null;
  }
};
e$1([y$7({ json: { write: true } })], t.prototype, "geometries", void 0), t = e$1([n$3("esri.rest.support.ImagePixelLocationResult")], t);
const p$3 = t;
let i = class extends l$2 {
  constructor() {
    super(...arguments), this.attributes = null, this.location = null, this.locationId = null, this.rasterId = null, this.resolution = null, this.pixelValue = null;
  }
};
e$1([y$7({ json: { write: true } })], i.prototype, "attributes", void 0), e$1([y$7({ type: w$3, json: { write: true } })], i.prototype, "location", void 0), e$1([y$7({ json: { write: true } })], i.prototype, "locationId", void 0), e$1([y$7({ json: { write: true } })], i.prototype, "rasterId", void 0), e$1([y$7({ json: { write: true } })], i.prototype, "resolution", void 0), e$1([y$7({ json: { write: true } })], i.prototype, "pixelValue", void 0), i = e$1([n$3("esri.rest.support.ImageSample")], i);
const p$2 = i;
let p$1 = class extends l$2 {
  constructor() {
    super(...arguments), this.samples = null;
  }
};
e$1([y$7({ type: [p$2], json: { write: true } })], p$1.prototype, "samples", void 0), p$1 = e$1([n$3("esri.rest.support.ImageSampleResult")], p$1);
const c$2 = p$1;
function u(e2) {
  const t2 = e2 == null ? void 0 : e2.time;
  if (t2 && (t2.start != null || t2.end != null)) {
    const n2 = [];
    t2.start != null && n2.push(t2.start), t2.end == null || n2.includes(t2.end) || n2.push(t2.end), e2.time = n2.join(",");
  }
}
async function p(e2, i2, r2) {
  const m2 = f$3(e2), c2 = i2.geometry ? [i2.geometry] : [], l2 = await v$1(c2), p2 = i2.toJSON();
  u(p2);
  const f2 = l2 && l2[0];
  r$1(f2) && (p2.geometry = f2.toJSON());
  const g2 = s$1(__spreadValues(__spreadProps(__spreadValues({}, m2.query), { f: "json" }), p2));
  return i$3(g2, r2);
}
async function f(n2, r2, m2) {
  var _a;
  const c2 = r2.toJSON();
  r$1(c2.angleName) && (c2.angleName = c2.angleName.join(",")), r$1(r2.point) && ((_a = r2.point.spatialReference) == null ? void 0 : _a.imageCoordinateSystem) && (c2.point.spatialReference = h$1(r2.point.spatialReference)), r$1(r2.spatialReference) && r2.spatialReference.imageCoordinateSystem && (c2.spatialReference = R(r2.spatialReference));
  const u2 = f$3(n2), p2 = s$1(__spreadValues(__spreadProps(__spreadValues({}, u2.query), { f: "json" }), c2)), f2 = i$3(p2, m2), { data: g2 } = await U(`${u2.path}/computeAngles`, f2);
  return g2.spatialReference = g2.spatialReference ? g2.spatialReference.geodataXform != null ? new k$1({ wkid: 0, imageCoordinateSystem: g2.spatialReference }) : k$1.fromJSON(g2.spatialReference) : null, g2.north === "NaN" && (g2.north = null), g2.up === "NaN" && (g2.up = null), new i$1(g2);
}
async function g(t2, n2, i2) {
  var _a;
  const r2 = n2.toJSON(), { geometries: c2 } = n2;
  if (c2)
    for (let e2 = 0; e2 < c2.length; e2++)
      ((_a = c2[e2].spatialReference) == null ? void 0 : _a.imageCoordinateSystem) && (r2.geometries.geometries[e2].spatialReference = h$1(c2[e2].spatialReference));
  const l2 = f$3(t2), u2 = s$1(__spreadValues(__spreadProps(__spreadValues({}, l2.query), { f: "json" }), r2)), p2 = i$3(u2, i2), { data: f2 } = await U(`${l2.path}/computePixelLocation`, p2);
  return p$3.fromJSON(f2);
}
async function y$2(t2, n2, a2) {
  const s2 = await p(t2, n2, a2), i2 = f$3(t2), { data: r2 } = await U(`${i2.path}/computeStatisticsHistograms`, s2), { statistics: m2 } = r2;
  return (m2 == null ? void 0 : m2.length) && m2.forEach((e2) => {
    e2.avg = e2.mean, e2.stddev = e2.standardDeviation;
  }), { statistics: m2, histograms: r2.histograms };
}
async function d$3(t2, n2, a2) {
  const s2 = await p(t2, n2, a2), i2 = f$3(t2), { data: r2 } = await U(`${i2.path}/computeHistograms`, s2);
  return { histograms: r2.histograms };
}
async function N(i2, r2, m2) {
  var _a, _b, _c;
  const l2 = r2.toJSON();
  u(l2), ((_a = l2.outFields) == null ? void 0 : _a.length) && (l2.outFields = l2.outFields.join(","));
  const p2 = (_b = await v$1(r2.geometry)) == null ? void 0 : _b[0];
  r$1(p2) && (l2.geometry = p2.toJSON());
  const f2 = f$3(i2), g2 = s$1(__spreadValues(__spreadProps(__spreadValues({}, f2.query), { f: "json" }), l2)), y2 = i$3(g2, m2), { data: d2 } = await U(`${f2.path}/getSamples`, y2), N2 = (_c = d2 == null ? void 0 : d2.samples) == null ? void 0 : _c.map((e2) => {
    const t2 = e2.value === "NaN" || e2.value === "" ? null : e2.value.split(" ").map((e3) => Number(e3));
    return __spreadProps(__spreadValues({}, e2), { pixelValue: t2 });
  });
  return c$2.fromJSON({ samples: N2 });
}
async function S(i2, m2, c2) {
  const l2 = f$3(i2), u2 = m2.geometry ? [m2.geometry] : [];
  return v$1(u2).then((n2) => {
    const o2 = m2.toJSON(), i3 = n2 && n2[0];
    r$1(i3) && (o2.geometry = JSON.stringify(i3.toJSON()));
    const r2 = s$1(__spreadValues(__spreadProps(__spreadValues({}, l2.query), { f: "json" }), o2)), u3 = i$3(r2, c2);
    return U(l2.path + "/identify", u3);
  }).then((e2) => l$1.fromJSON(e2.data));
}
function h$1(e2) {
  const { imageCoordinateSystem: t2 } = e2;
  if (t2) {
    const { id: e3, referenceServiceName: n2 } = t2;
    return e3 != null ? n2 ? { icsid: e3, icsns: n2 } : { icsid: e3 } : { ics: t2 };
  }
  return e2.toJSON();
}
function R(e2, t2) {
  const n2 = h$1(e2), { icsid: o2, icsns: a2, wkid: s2 } = n2;
  return o2 != null ? a2 == null || (t2 == null ? void 0 : t2.toLowerCase().includes("/" + a2.toLowerCase() + "/")) ? `0:${o2}` : JSON.stringify(n2) : s2 ? s2.toString() : JSON.stringify(n2);
}
async function n$1(n2, m2, p2) {
  var _a, _b;
  const f2 = f$3(n2), u2 = s$1(__spreadProps(__spreadValues({}, f2 == null ? void 0 : f2.query), { f: "json" })), h2 = i$3(u2, p2), d2 = `${f2 == null ? void 0 : f2.path}/${m2}/info`, c2 = U(`${d2}`, h2), g2 = U(`${d2}/keyProperties`, h2), x2 = await Promise.allSettled([c2, g2]), y2 = x2[0].status === "fulfilled" ? x2[0].value.data : null, v2 = x2[1].status === "fulfilled" ? x2[1].value.data : null;
  let P2 = null;
  ((_a = y2.statistics) == null ? void 0 : _a.length) && (P2 = y2.statistics.map((e2) => ({ min: e2[0], max: e2[1], avg: e2[2], stddev: e2[3] })));
  const S2 = w$4.fromJSON(y2.extent), j2 = Math.ceil(S2.width / y2.pixelSizeX - 0.1), w2 = Math.ceil(S2.height / y2.pixelSizeY - 0.1), b2 = S2.spatialReference, k2 = new w$3({ x: y2.pixelSizeX, y: y2.pixelSizeY, spatialReference: b2 }), z = ((_b = y2.histograms) == null ? void 0 : _b.length) ? y2.histograms : null, L2 = new n$4({ origin: y2.origin, blockWidth: y2.blockWidth, blockHeight: y2.blockHeight, firstPyramidLevel: y2.firstPyramidLevel, maximumPyramidLevel: y2.maxPyramidLevel });
  return new u$2({ width: j2, height: w2, bandCount: y2.bandCount, extent: S2, spatialReference: b2, pixelSize: k2, pixelType: y2.pixelType.toLowerCase(), statistics: P2, histograms: z, keyProperties: v2, storageInfo: L2 });
}
var n;
let m$1 = n = class extends l$2 {
  constructor() {
    super(...arguments), this.angleNames = null, this.point = null, this.spatialReference = null, this.rasterId = null;
  }
  clone() {
    return new n(y$6({ angleNames: this.angleNames, point: this.point, spatialReference: this.spatialReference, rasterId: this.rasterId }));
  }
};
e$1([y$7({ type: [String], json: { name: "angleName", write: true } })], m$1.prototype, "angleNames", void 0), e$1([y$7({ type: w$3, json: { write: true } })], m$1.prototype, "point", void 0), e$1([y$7({ type: k$1, json: { write: true } })], m$1.prototype, "spatialReference", void 0), e$1([y$7({ type: T$2, json: { write: true } })], m$1.prototype, "rasterId", void 0), m$1 = n = e$1([n$3("esri.rest.support.ImageAngleParameters")], m$1);
const l = m$1;
var y$1;
let j$1 = y$1 = class extends l$2 {
  constructor() {
    super(...arguments), this.geometry = null, this.mosaicRule = null, this.renderingRule = null, this.pixelSize = null, this.raster = void 0, this.timeExtent = null;
  }
  writeGeometry(e2, r2, t2) {
    e2 != null && (r2.geometryType = c$4(e2), r2[t2] = e2.toJSON());
  }
  clone() {
    return new y$1(y$6({ geometry: this.geometry, mosaicRule: this.mosaicRule, renderingRule: this.renderingRule, pixelSize: this.pixelSize, raster: this.raster, timeExtent: this.timeExtent }));
  }
};
e$1([y$7({ types: i$4, json: { read: v$2 } })], j$1.prototype, "geometry", void 0), e$1([r("geometry")], j$1.prototype, "writeGeometry", null), e$1([y$7({ type: y$4, json: { write: true } })], j$1.prototype, "mosaicRule", void 0), e$1([y$7({ type: w$2, json: { write: true } })], j$1.prototype, "renderingRule", void 0), e$1([y$7({ type: w$3, json: { write: true } })], j$1.prototype, "pixelSize", void 0), e$1([y$7({ json: { write: true } })], j$1.prototype, "raster", void 0), e$1([y$7({ type: T$3, json: { read: { source: "time" }, write: { target: "time" } } })], j$1.prototype, "timeExtent", void 0), j$1 = y$1 = e$1([n$3("esri.rest.support.ImageHistogramParameters")], j$1);
const d$2 = j$1;
var y;
let c$1 = y = class extends l$2 {
  constructor() {
    super(...arguments), this.geometry = null, this.renderingRules = null, this.pixelSize = null, this.returnGeometry = true, this.returnCatalogItems = true, this.returnPixelValues = true, this.maxItemCount = null, this.timeExtent = null, this.raster = void 0, this.viewId = void 0, this.processAsMultidimensional = false;
  }
  writeGeometry(e2, t2, r2) {
    e2 != null && (t2.geometryType = c$4(e2), t2[r2] = JSON.stringify(e2.toJSON()));
  }
  set mosaicRule(e2) {
    let t2 = e2;
    t2 && t2.mosaicMethod && (t2 = y$4.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { mosaicMethod: t2.mosaicMethod, mosaicOperation: t2.mosaicOperation }))), this._set("mosaicRule", t2);
  }
  writeMosaicRule(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2.toJSON()));
  }
  set renderingRule(e2) {
    let t2 = e2;
    t2 && t2.rasterFunction && (t2 = w$2.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { rasterFunction: t2.rasterFunction, rasterFunctionArguments: t2.rasterFunctionArguments }))), this._set("renderingRule", t2);
  }
  writeRenderingRule(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2.toJSON())), e2.rasterFunctionDefinition && (t2[r2] = JSON.stringify(e2.rasterFunctionDefinition));
  }
  writeRenderingRules(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2.map((e3) => e3.rasterFunctionDefinition || e3.toJSON())));
  }
  writePixelSize(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2));
  }
  writeTimeExtent(e2, t2, r2) {
    if (e2 != null) {
      const o2 = r$1(e2.start) ? e2.start.getTime() : null, s2 = r$1(e2.end) ? e2.end.getTime() : null;
      t2[r2] = o2 != null ? s2 != null ? `${o2},${s2}` : `${o2}` : null;
    }
  }
  clone() {
    return new y(y$6({ geometry: this.geometry, mosaicRule: this.mosaicRule, renderingRule: this.renderingRule, pixelSize: this.pixelSize, returnGeometry: this.returnGeometry, returnCatalogItems: this.returnCatalogItems, returnPixelValues: this.returnPixelValues, maxItemCount: this.maxItemCount, processAsMultidimensional: this.processAsMultidimensional, raster: this.raster, viewId: this.viewId, timeExtent: this.timeExtent }));
  }
};
e$1([y$7({ json: { write: true } })], c$1.prototype, "geometry", void 0), e$1([r("geometry")], c$1.prototype, "writeGeometry", null), e$1([y$7({ type: y$4, json: { write: true } })], c$1.prototype, "mosaicRule", null), e$1([r("mosaicRule")], c$1.prototype, "writeMosaicRule", null), e$1([y$7({ type: w$2, json: { write: true } })], c$1.prototype, "renderingRule", null), e$1([r("renderingRule")], c$1.prototype, "writeRenderingRule", null), e$1([y$7({ type: [w$2], json: { write: true } })], c$1.prototype, "renderingRules", void 0), e$1([r("renderingRules")], c$1.prototype, "writeRenderingRules", null), e$1([y$7({ type: w$3, json: { write: true } })], c$1.prototype, "pixelSize", void 0), e$1([r("pixelSize")], c$1.prototype, "writePixelSize", null), e$1([y$7({ type: Boolean, json: { write: true } })], c$1.prototype, "returnGeometry", void 0), e$1([y$7({ type: Boolean, json: { write: true } })], c$1.prototype, "returnCatalogItems", void 0), e$1([y$7({ type: Boolean, json: { write: true } })], c$1.prototype, "returnPixelValues", void 0), e$1([y$7({ type: Number, json: { write: true } })], c$1.prototype, "maxItemCount", void 0), e$1([y$7({ type: T$3, json: { write: { target: "time" } } })], c$1.prototype, "timeExtent", void 0), e$1([r("timeExtent")], c$1.prototype, "writeTimeExtent", null), e$1([y$7({ json: { write: true } })], c$1.prototype, "raster", void 0), e$1([y$7({ json: { write: true } })], c$1.prototype, "viewId", void 0), e$1([y$7({ type: Boolean, json: { write: true } })], c$1.prototype, "processAsMultidimensional", void 0), c$1 = y = e$1([n$3("esri.rest.support.ImageIdentifyParameters")], c$1);
const d$1 = c$1;
var m;
let c = m = class extends l$2 {
  constructor() {
    super(...arguments), this.geometries = null, this.rasterId = null;
  }
  writeGeometry(r2, e2, o2) {
    e2.geometries = { geometryType: "esriGeometryPoint", geometries: r2.map((r3) => r3.toJSON()) };
  }
  clone() {
    var _a, _b;
    return new m({ geometries: (_b = (_a = this.geometries) == null ? void 0 : _a.map((r2) => r2.clone())) != null ? _b : [], rasterId: this.rasterId });
  }
};
e$1([y$7({ type: [w$3], json: { write: true } })], c.prototype, "geometries", void 0), e$1([r("geometries")], c.prototype, "writeGeometry", null), e$1([y$7({ type: T$2, json: { write: true } })], c.prototype, "rasterId", void 0), c = m = e$1([n$3("esri.rest.support.ImagePixelLocationParameters")], c);
const a = c;
var d;
let j = d = class extends l$2 {
  constructor() {
    super(...arguments), this.geometry = null, this.interpolation = "nearest", this.mosaicRule = null, this.outFields = null, this.pixelSize = null, this.returnFirstValueOnly = true, this.sampleDistance = null, this.sampleCount = null, this.sliceId = null, this.timeExtent = null;
  }
  writeGeometry(t2, e2, o2) {
    t2 != null && (e2.geometryType = c$4(t2), e2[o2] = t2.toJSON());
  }
  set locations(t2) {
    if (t2 == null ? void 0 : t2.length) {
      const e2 = new u$3({ spatialReference: t2[0].spatialReference });
      e2.points = t2.map((t3) => [t3.x, t3.y]), this._set("locations", t2), this.geometry = e2;
    }
  }
  clone() {
    return new d(y$6({ geometry: this.geometry, locations: this.locations, interpolation: this.interpolation, mosaicRule: this.mosaicRule, outFields: this.outFields, raster: this.raster, returnFirstValueOnly: this.returnFirstValueOnly, sampleDistance: this.sampleDistance, sampleCount: this.sampleCount, sliceId: this.sliceId, pixelSize: this.pixelSize, timeExtent: this.timeExtent }));
  }
};
e$1([y$7({ types: i$4, json: { read: v$2 } })], j.prototype, "geometry", void 0), e$1([r("geometry")], j.prototype, "writeGeometry", null), e$1([y$7()], j.prototype, "locations", null), e$1([y$7({ type: String, json: { type: o$2.jsonValues, read: o$2.read, write: o$2.write } })], j.prototype, "interpolation", void 0), e$1([y$7({ type: y$4, json: { write: true } })], j.prototype, "mosaicRule", void 0), e$1([y$7({ type: [String], json: { write: true } })], j.prototype, "outFields", void 0), e$1([y$7({ type: w$3, json: { write: true } })], j.prototype, "pixelSize", void 0), e$1([y$7({ type: String, json: { write: true } })], j.prototype, "raster", void 0), e$1([y$7({ type: Boolean, json: { write: true } })], j.prototype, "returnFirstValueOnly", void 0), e$1([y$7({ type: Number, json: { write: true } })], j.prototype, "sampleDistance", void 0), e$1([y$7({ type: Number, json: { write: true } })], j.prototype, "sampleCount", void 0), e$1([y$7({ type: Number, json: { write: true } })], j.prototype, "sliceId", void 0), e$1([y$7({ type: T$3, json: { read: { source: "time" }, write: { target: "time" } } })], j.prototype, "timeExtent", void 0), j = d = e$1([n$3("esri.rest.support.ImageSampleParameters")], j);
const h = j;
const Se = o()({ U1: "u1", U2: "u2", U4: "u4", U8: "u8", S8: "s8", U16: "u16", S16: "s16", U32: "u32", S32: "s32", F32: "f32", F64: "f64", C64: "c64", C128: "c128", UNKNOWN: "unknown" }), ve = new Set(["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"]), be = j$5(a$1, { min: 0, max: 255 });
function Ie(e2) {
  var _a;
  if (!e2)
    return null;
  const t2 = (_a = JSON.stringify(e2).match(/"rasterFunction":"(.*?")/gi)) == null ? void 0 : _a.map((e3) => e3.replace('"rasterFunction":"', "").replace('"', ""));
  return t2 ? t2.join("/") : null;
}
const xe = (a$12) => {
  let y2 = class extends a$12 {
    constructor() {
      super(...arguments), this._functionRasterInfos = {}, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this._cachedRendererJson = null, this._serviceSupportsMosaicRule = null, this._rasterAttributeTableFieldPrefix = "Raster.", this.adjustAspectRatio = null, this.bandIds = void 0, this.capabilities = null, this.compressionQuality = void 0, this.compressionTolerance = 0.01, this.copyright = null, this.defaultMosaicRule = null, this.definitionExpression = null, this.exportImageServiceParameters = null, this.rasterInfo = null, this.fields = null, this.fullExtent = null, this.hasMultidimensions = false, this.imageMaxHeight = 4100, this.imageMaxWidth = 4100, this.interpolation = void 0, this.minScale = 0, this.maxScale = 0, this.multidimensionalSubset = null, this.noData = null, this.noDataInterpretation = void 0, this.objectIdField = null, this.geometryType = "polygon", this.typeIdField = null, this.types = [], this.pixelFilter = null, this.raster = void 0, this.sourceType = null, this.viewId = void 0, this.symbolizer = null, this.rasterFunctionInfos = null, this.serviceDataType = null, this.spatialReference = null, this.pixelType = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.url = null, this.version = void 0;
    }
    initialize() {
      this._set("exportImageServiceParameters", new y$3({ layer: this }));
    }
    readServiceSupportsMosaicRule(e2, t2) {
      return this._isMosaicRuleSupported(t2);
    }
    get _rasterFunctionNamesIndex() {
      const e2 = new Map();
      return !this.rasterFunctionInfos || r$1(this.rasterFunctionInfos) && this.rasterFunctionInfos.length < 1 || r$1(this.rasterFunctionInfos) && this.rasterFunctionInfos.forEach((t2) => {
        e2.set(t2.name.toLowerCase().replace(/ /gi, "_"), t2.name);
      }), e2;
    }
    readBandIds(e2, t2) {
      if (Array.isArray(e2) && e2.length > 0 && e2.every((e3) => typeof e3 == "number"))
        return e2;
    }
    readCapabilities(e2, t2) {
      return this._readCapabilities(t2);
    }
    writeCompressionQuality(e2, t2, r2) {
      e2 != null && this.format !== "lerc" && (t2[r2] = e2);
    }
    writeCompressionTolerance(e2, t2, r2) {
      this.format === "lerc" && e2 != null && (t2[r2] = e2);
    }
    readDefaultMosaicRule(e2, t2) {
      return this._serviceSupportsMosaicRule ? y$4.fromJSON(t2) : null;
    }
    get fieldsIndex() {
      return this.fields ? new r$2(this.fields) : null;
    }
    set format(e2) {
      e2 && ve.has(e2.toLowerCase()) && this._set("format", e2.toLowerCase());
    }
    readFormat(e2, t2) {
      return t2.serviceDataType === "esriImageServiceDataTypeVector-UV" || t2.serviceDataType === "esriImageServiceDataTypeVector-MagDir" || this.pixelFilter != null ? "lerc" : "jpgpng";
    }
    readMinScale(e2, t2) {
      return t2.minLOD != null && t2.maxLOD != null ? e2 : 0;
    }
    readMaxScale(e2, t2) {
      return t2.minLOD != null && t2.maxLOD != null ? e2 : 0;
    }
    set mosaicRule(e2) {
      let t2 = e2;
      t2 && t2.mosaicMethod && (t2 = y$4.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { mosaicMethod: t2.mosaicMethod, mosaicOperation: t2.mosaicOperation }))), this._set("mosaicRule", t2);
    }
    readMosaicRule(e2, t2) {
      const r2 = e2 || t2.mosaicRule;
      return r2 ? y$4.fromJSON(r2) : this._isMosaicRuleSupported(t2) ? y$4.fromJSON(t2) : null;
    }
    writeMosaicRule(e2, t2, r2) {
      let i2 = this.mosaicRule;
      const s2 = this.definitionExpression;
      i2 ? s2 && s2 !== i2.where && (i2 = i2.clone(), i2.where = s2) : s2 && (i2 = new y$4({ where: s2 })), this._isValidCustomizedMosaicRule(i2) && (t2[r2] = i2.toJSON());
    }
    get multidimensionalInfo() {
      return r$1(this.serviceRasterInfo) ? this.serviceRasterInfo.multidimensionalInfo : null;
    }
    writeNoData(e2, t2, r2) {
      e2 != null && typeof e2 == "number" && (t2[r2] = be(e2));
    }
    readObjectIdField(e2, t2) {
      if (!e2) {
        const r2 = t2.fields.filter((e3) => e3.type === "esriFieldTypeOID" || e3.type === "oid");
        e2 = r2 && r2[0] && r2[0].name;
      }
      return e2;
    }
    get parsedUrl() {
      return j$3(this.url);
    }
    readSourceType(e2, t2) {
      return this._isMosaicDataset(t2) ? "mosaic-dataset" : "raster-dataset";
    }
    set renderer(e2) {
      this.loaded && (e2 = this._configRenderer(e2)), this._set("renderer", e2);
    }
    readRenderer(e2, t2, r2) {
      var _a, _b;
      const i2 = (_b = (_a = t2 == null ? void 0 : t2.layerDefinition) == null ? void 0 : _a.drawingInfo) == null ? void 0 : _b.renderer, n2 = u$4(i2, r2);
      return n2 == null ? null : (n2.type === "vector-field" && t2.symbolTileSize && !i2.symbolTileSize && (n2.symbolTileSize = t2.symbolTileSize), f$1(n2) || s$2.getLogger(this.declaredClass).warn("ArcGISImageService", "Imagery layer doesn't support given renderer type."), n2);
    }
    writeRenderer(e2, t2, r2) {
      t2.layerDefinition = t2.layerDefinition || {}, t2.layerDefinition.drawingInfo = t2.layerDefinition.drawingInfo || {}, t2.layerDefinition.drawingInfo.renderer = e2.toJSON(), e2.type === "vector-field" && (t2.symbolTileSize = e2.symbolTileSize);
    }
    get rasterFields() {
      var _a, _b;
      const e2 = this._rasterAttributeTableFieldPrefix || "Raster.", t2 = new y$8({ name: "Raster.ItemPixelValue", alias: "Item Pixel Value", domain: null, editable: false, length: 50, type: "string" }), r2 = new y$8({ name: "Raster.ServicePixelValue", alias: "Service Pixel Value", domain: null, editable: false, length: 50, type: "string" }), i2 = new y$8({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Service Pixel Value", domain: null, editable: false, length: 50, type: "string" });
      let s2 = this.fields ? y$6(this.fields) : [];
      s2.push(r2), ((_a = this.capabilities) == null ? void 0 : _a.operations.supportsQuery) && this.fields && this.fields.length > 0 && s2.push(t2), this.version >= 10.4 && r$1(this.rasterFunctionInfos) && this.rasterFunctionInfos.some((e3) => e3.name.toLowerCase() === "none") && s2.push(i2), r$1(this.rasterFunctionInfos) && this.rasterFunctionInfos.filter((e3) => e3.name.toLowerCase() !== "none").forEach((e3) => {
        s2.push(new y$8({ name: "Raster.ServicePixelValue." + e3.name, alias: e3.name, domain: null, editable: false, length: 50, type: "string" }));
      }), this._isVectorDataSet() && (s2.push(new y$8({ name: "Raster.Magnitude", alias: "Magnitude", domain: null, editable: false, type: "double" })), s2.push(new y$8({ name: "Raster.Direction", alias: "Direction", domain: null, editable: false, type: "double" })));
      const { attributeTable: n2 } = (_b = this.rasterInfo) != null ? _b : {};
      if (r$1(n2)) {
        const t3 = n2.fields.filter((e3) => e3.type !== "esriFieldTypeOID" && e3.name.toLowerCase() !== "value").map((t4) => {
          const r3 = y$6(t4);
          return r3.name = e2 + t4.name, r3;
        });
        s2 = s2.concat(t3);
      }
      return s2;
    }
    set renderingRule(e2) {
      let t2 = e2;
      t2 && t2.rasterFunction && (t2 = w$2.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { rasterFunction: t2.rasterFunction, rasterFunctionArguments: t2.rasterFunctionArguments }))), this._set("renderingRule", t2);
    }
    readRenderingRule(e2, t2) {
      const r2 = t2.rasterFunctionInfos;
      return t2.renderingRule || r2 && r2.length && r2[0].name !== "None" ? this._isRFTJson(t2.renderingRule) ? w$2.fromJSON({ rasterFunctionDefinition: t2.renderingRule }) : w$2.fromJSON(t2.renderingRule || { rasterFunctionInfos: t2.rasterFunctionInfos }) : null;
    }
    writeRenderingRule(e2, t2, r2) {
      const i2 = e2.toJSON();
      i2.rasterFunctionDefinition ? t2[r2] = i2.rasterFunctionDefinition : t2[r2] = i2;
    }
    readSpatialReference(e2, t2) {
      const r2 = e2 || t2.extent.spatialReference;
      return r2 ? k$1.fromJSON(r2) : null;
    }
    readPixelType(e2) {
      return Se.fromJSON(e2) || e2;
    }
    writePixelType(e2, t2, r2) {
      (t$1(this.serviceRasterInfo) || this.pixelType !== this.serviceRasterInfo.pixelType) && (t2[r2] = Se.toJSON(e2));
    }
    readVersion(e2, t2) {
      let r2 = t2.currentVersion;
      return r2 || (r2 = t2.hasOwnProperty("fields") || t2.hasOwnProperty("timeInfo") ? 10 : 9.3), r2;
    }
    applyFilter(e2) {
      let t2 = e2;
      return this.pixelFilter && (t2 = this._clonePixelData(e2), this.pixelFilter(t2)), t2;
    }
    async applyRenderer(e2, t2) {
      let r2 = e2;
      const { renderer: i2, symbolizer: s2, pixelFilter: n2, bandIds: o2 } = this;
      if (!this._isPicture() && i2 && s2 && !n2) {
        const n3 = JSON.stringify(this._cachedRendererJson) !== JSON.stringify(i2.toJSON()), a2 = this._rasterJobHandler.instance;
        if (a2) {
          n3 && (s2.bind(), await a2.updateSymbolizer(s2, t2), this._cachedRendererJson = i2.toJSON());
          const l2 = await a2.symbolize(__spreadValues({ bandIds: o2 }, e2), t2);
          r2 = { extent: e2.extent, pixelBlock: l2 };
        } else
          r2 = { extent: e2.extent, pixelBlock: s2.symbolize(__spreadValues({ bandIds: o2 }, e2)) };
      }
      return r2;
    }
    destroy() {
      this._shutdownJobHandler();
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    async computeAngles(e2, t2) {
      if (!(await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)).operations.supportsComputeAngles)
        throw new s$3("imagery-layer:compute-angles", "this operation is not supported on the input image service");
      return e2 = v$3(l, e2).clone(), f(this.url, e2, this._getRequestOptions(t2));
    }
    async computePixelSpaceLocations(e2, t2) {
      if (!(await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)).operations.supportsComputePixelLocation)
        throw new s$3("imagery-layer:compute-pixel-space-locations", "this operation is not supported on the input image service");
      return e2 = v$3(a, e2).clone(), g(this.url, e2, this._getRequestOptions(t2));
    }
    async computeHistograms(e2, t2) {
      if (!(await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)).operations.supportsComputeHistograms)
        throw new s$3("imagery-layer:compute-histograms", "this operation is not supported on the input image service");
      e2 = v$3(d$2, e2).clone();
      const { raster: r2, mosaicRule: i2, renderingRule: s2 } = this;
      return s2 && e2.renderingRule == null && (e2.renderingRule = s2), i2 && e2.mosaicRule == null && (e2.mosaicRule = i2), r2 && e2.raster == null && (e2.raster = r2), d$3(this.url, e2, this._getRequestOptions(t2));
    }
    async computeStatisticsHistograms(e2, t2) {
      if (!(await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)).operations.supportsComputeStatisticsHistograms)
        throw new s$3("imagery-layer:compute-statistics-histograms", "this operation is not supported on the input image service");
      e2 = v$3(d$2, e2).clone();
      const { raster: r2, mosaicRule: i2, renderingRule: s2 } = this;
      return s2 && e2.renderingRule == null && (e2.renderingRule = s2), i2 && e2.mosaicRule == null && (e2.mosaicRule = i2), r2 && e2.raster == null && (e2.raster = r2), y$2(this.url, e2, this._getRequestOptions(t2));
    }
    getField(e2) {
      const { fieldsIndex: t2 } = this;
      return r$1(t2) ? t2.get(e2) : void 0;
    }
    getFieldDomain(e2, t2) {
      const r2 = this.getField(e2);
      return r2 ? r2.domain : null;
    }
    async fetchImage(e2, t2, r2, i2 = {}) {
      var _a, _b, _c, _d, _e;
      if (e2 == null || t2 == null || r2 == null)
        throw new s$3("imagery-layer:fetch-image", "Insufficient parameters for requesting an image. A valid extent, width and height values are required.");
      if (this.renderer || this.symbolizer) {
        const e3 = await this.generateRasterInfo(this.renderingRule, { signal: i2.signal });
        e3 && (this.rasterInfo = e3);
      }
      const s2 = this.getExportImageServiceParameters(e2, t2, r2, i2.timeExtent);
      if (s2 == null) {
        if (i2.requestAsImageElement && this._canRequestImageElement(this.format)) {
          const e3 = document.createElement("canvas");
          return e3.width = t2, e3.height = r2, { imageOrCanvasElement: e3 };
        }
        const s3 = (_c = ((_a = this.bandIds) == null ? void 0 : _a.length) || ((_b = this.rasterInfo) == null ? void 0 : _b.bandCount)) != null ? _c : 0, n3 = t2 * r2, o2 = (_e = (_d = this.rasterInfo) == null ? void 0 : _d.pixelType) != null ? _e : "unknown", a2 = [];
        for (let e3 = 0; e3 < s3; e3++)
          a2.push(g$2.createEmptyBand(o2, n3));
        return { pixelData: { pixelBlock: new g$2({ width: t2, height: r2, pixels: a2, mask: new Uint8Array(n3), pixelType: o2 }), extent: e2 } };
      }
      const n2 = { imageServiceParameters: s2, imageProps: { extent: e2, width: t2, height: r2, format: this.format }, requestAsImageElement: i2.requestAsImageElement && !this.pixelFilter || false, signal: i2.signal };
      return this._requestArrayBuffer(n2);
    }
    fetchKeyProperties(e2) {
      return U(S$12(this.parsedUrl) + "/keyProperties", { query: this._getQueryParams({ renderingRule: this.version >= 10.3 ? e2 == null ? void 0 : e2.renderingRule : null }) }).then((e3) => e3.data);
    }
    fetchRasterAttributeTable(e2) {
      return this.version < 10.1 ? Promise.reject(new s$3("#fetchRasterAttributeTable()", "Failed to get rasterAttributeTable")) : U(S$12(this.parsedUrl) + "/rasterAttributeTable", { query: this._getQueryParams({ renderingRule: this.version >= 10.3 ? e2 == null ? void 0 : e2.renderingRule : null }) }).then((e3) => x$1.fromJSON(e3.data));
    }
    getCatalogItemRasterInfo(e2, t2) {
      const r2 = __spreadProps(__spreadValues({}, t2), { query: this._getQueryParams() });
      return n$1(S$12(this.parsedUrl), e2, r2);
    }
    async getCatalogItemICSInfo(e2, t2) {
      var _a, _b, _c;
      const { data: r2 } = await U(S$12(this.parsedUrl) + "/" + e2 + "/info/ics", __spreadValues({ query: this._getQueryParams() }, t2)), i2 = r2 && r2.ics;
      if (!i2)
        return;
      let s2 = null;
      try {
        s2 = (await U(S$12(this.parsedUrl) + "/" + e2 + "/info", __spreadValues({ query: this._getQueryParams() }, t2))).data.extent;
      } catch {
      }
      if (!s2 || !s2.spatialReference)
        return { ics: i2, icsToPixelTransform: null, icsExtent: null, northDirection: null };
      const o2 = this.version >= 10.7 ? U(S$12(this.parsedUrl) + "/" + e2 + "/info/icstopixel", __spreadValues({ query: this._getQueryParams() }, t2)).then((e3) => e3.data).catch(() => ({})) : {}, a2 = s2.spatialReference, l2 = { geometries: JSON.stringify({ geometryType: "esriGeometryEnvelope", geometries: [s2] }), inSR: a2.wkid || JSON.stringify(a2), outSR: "0:" + e2 }, u2 = U(S$12(this.parsedUrl) + "/project", __spreadValues({ query: this._getQueryParams(l2) }, t2)).then((e3) => e3.data).catch(() => ({})), p2 = 5, c2 = (s2.xmin + s2.xmax) / 2, m2 = (s2.ymax - s2.ymin) / (p2 + 1), d2 = s2.ymin + m2, h2 = [];
      for (let n2 = 0; n2 < p2; n2++)
        h2.push({ x: c2, y: d2 + m2 * n2 });
      const f2 = { geometries: JSON.stringify({ geometryType: "esriGeometryPoint", geometries: h2 }), inSR: a2.wkid || JSON.stringify(a2), outSR: "0:" + e2 }, y3 = U(S$12(this.parsedUrl) + "/project", __spreadValues({ query: this._getQueryParams(f2) }, t2)).then((e3) => e3.data).catch(() => ({})), g2 = await Promise.all([o2, u2, y3]);
      let R2 = g2[0].ipxf;
      if (R2 == null) {
        const e3 = (_a = i2.geodataXform) == null ? void 0 : _a.xf_0;
        ((_b = e3 == null ? void 0 : e3.name) == null ? void 0 : _b.toLowerCase()) === "topup" && ((_c = e3 == null ? void 0 : e3.coefficients) == null ? void 0 : _c.length) === 6 && (R2 = { affine: { name: "ics [sensor: Frame] to pixel (column, row) transformation", coefficients: e3.coefficients, cellsizeRatio: 0, type: "GeometricXform" } });
      }
      const v2 = w$4.fromJSON(g2[1] && g2[1].geometries && g2[1].geometries[0]);
      v2 && (v2.spatialReference = new k$1({ wkid: 0, imageCoordinateSystem: i2 }));
      const b2 = g2[2].geometries ? g2[2].geometries.filter((e3) => e3 != null && e3.x != null && e3.y != null && e3.x !== "NaN" && e3.y !== "NaN") : [], I = b2.length;
      if (I < 3)
        return { ics: i2, icsToPixelTransform: R2, icsExtent: v2, northDirection: null };
      let x2 = 0, w2 = 0, _2 = 0, F2 = 0;
      for (let n2 = 0; n2 < I; n2++)
        x2 += b2[n2].x, w2 += b2[n2].y, _2 += b2[n2].x * b2[n2].x, F2 += b2[n2].x * b2[n2].y;
      const D2 = (I * F2 - x2 * w2) / (I * _2 - x2 * x2);
      let j2 = 0;
      const T2 = b2[p2 - 1].x > b2[0].x, P2 = b2[p2 - 1].y > b2[0].y;
      return D2 === 1 / 0 ? j2 = P2 ? 90 : 270 : D2 === 0 ? j2 = T2 ? 0 : 180 : D2 > 0 ? j2 = T2 ? 180 * Math.atan(D2) / Math.PI : 180 * Math.atan(D2) / Math.PI + 180 : D2 < 0 && (j2 = P2 ? 180 + 180 * Math.atan(D2) / Math.PI : 360 + 180 * Math.atan(D2) / Math.PI), { ics: i2, icsToPixelTransform: R2, icsExtent: v2, northDirection: j2 };
    }
    async generateRasterInfo(e2, t2) {
      var _a;
      if (this.serviceRasterInfo && (!e2 || ((_a = e2.functionName) == null ? void 0 : _a.toLowerCase()) === "none" || this._isVectorFieldResampleFunction(e2)))
        return this.serviceRasterInfo;
      const r2 = Ie(e2);
      if (!r2)
        return null;
      if (this._functionRasterInfos[r2])
        return this._functionRasterInfos[r2];
      const i2 = this._generateRasterInfo(e2, t2);
      this._functionRasterInfos[r2] = i2;
      try {
        return await i2;
      } catch {
        return this._functionRasterInfos[r2] = null, null;
      }
    }
    getExportImageServiceParameters(e2, t2, r2, i2) {
      var _a, _b, _c;
      e2 = e2.clone().shiftCentralMeridian();
      const s2 = R(e2.spatialReference, S$12(this.parsedUrl));
      this.pixelType !== ((_a = this.serviceRasterInfo) == null ? void 0 : _a.pixelType) && (this.exportImageServiceParameters.pixelType = this.pixelType);
      const n2 = this.exportImageServiceParameters.toJSON(), { bandIds: o2, noData: a2 } = n2;
      let { renderingRule: l2 } = n2;
      const u2 = (_b = this.renderingRule) == null ? void 0 : _b.rasterFunctionDefinition, c2 = !this.renderer || this.renderer.type === "raster-stretch";
      if ((o2 == null ? void 0 : o2.length) && this._hasRenderingRule(this.renderingRule) && !u2 && c2) {
        const e3 = { rasterFunction: "ExtractBand", rasterFunctionArguments: { BandIds: o2 } };
        if (l2.rasterFunction === "Stretch")
          e3.rasterFunctionArguments.Raster = l2.rasterFunctionArguments.Raster, l2.rasterFunctionArguments.Raster = e3;
        else if (l2.rasterFunction === "Colormap") {
          const t3 = l2.rasterFunctionArguments.Raster;
          (t3 == null ? void 0 : t3.rasterFunction) === "Stretch" ? (e3.rasterFunctionArguments.Raster = t3.rasterFunctionArguments.Raster, t3.rasterFunctionArguments.Raster = e3) : (e3.rasterFunctionArguments.Raster = t3, l2.rasterFunctionArguments.Raster = e3);
        } else
          e3.rasterFunctionArguments.Raster = l2, l2 = e3;
        n2.bandIds = void 0;
      } else
        n2.bandIds = o2 == null ? void 0 : o2.join(",");
      a2 instanceof Array && a2.length > 0 && (n2.noData = a2.join(","));
      const m2 = this._serviceSupportsMosaicRule ? this._combineMosaicRuleWithTimeExtent(this.exportImageServiceParameters.mosaicRule, i2) : null;
      n2.mosaicRule = r$1(m2) ? JSON.stringify(m2) : null;
      const { multidimensionalSubset: d2 } = this;
      if (d2 && r$1(m2) && m2.multidimensionalDefinition && m$4(m2.multidimensionalDefinition, d2, true))
        return null;
      n2.renderingRule = this._getRenderingRuleString(w$2.fromJSON(l2));
      const h2 = {};
      if (i2) {
        const { start: e3, end: t3 } = i2.toJSON();
        let r3;
        if (e3 && t3 && e3 === t3 ? (h2.time = "" + e3, r3 = [e3]) : e3 == null && t3 == null || (h2.time = `${e3 != null ? e3 : "null"},${t3 != null ? t3 : "null"}`, r3 = e3 != null && t3 != null ? [e3, t3] : [e3 != null ? e3 : t3]), r3 && d2) {
          const e4 = d2.dimensions.find(({ name: e5 }) => e5 === "StdTime");
          if (r3.length === 2 && e4.extent.length) {
            if (r3[0] = Math.max(r3[0], e4.extent[0]), r3[1] = Math.min(r3[1], (_c = e4.extent[1]) != null ? _c : e4.extent[0]), r3[1] < r3[0])
              return null;
            h2.time = r3.join();
          }
          const t4 = new p$7({ variableName: "", dimensionName: "StdTime", isSlice: r3.length === 1, values: r3 });
          if (m$4([t4], d2, true))
            return null;
        }
      }
      return __spreadValues(__spreadValues({ bbox: e2.xmin + "," + e2.ymin + "," + e2.xmax + "," + e2.ymax, bboxSR: s2, imageSR: s2, size: t2 + "," + r2 }, n2), h2);
    }
    async getSamples(e2, t2) {
      var _a;
      if (!((_a = await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)) == null ? void 0 : _a.operations.supportsGetSamples))
        throw new s$3("imagery-layer:get-samples", "getSamples operation is not supported on the input image service");
      e2 = v$3(h, e2).clone();
      const { raster: r2 } = this;
      return r2 && e2.raster == null && (e2.raster = r2), N(this.url, e2, this._getRequestOptions(t2));
    }
    async identify(e2, t2) {
      if (!(await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)).operations.supportsIdentify)
        throw new s$3("imagery-layer:query-rasters", "query operation is not supported on the input image service");
      e2 = v$3(d$1, e2).clone();
      const { raster: r2, mosaicRule: i2, renderingRule: s2 } = this;
      if (s2 && e2.renderingRule == null && (e2.renderingRule = s2), i2 && e2.mosaicRule == null) {
        const t3 = this._combineMosaicRuleWithTimeExtent(i2, e2.timeExtent);
        e2.mosaicRule = e$2(t3);
      }
      return r2 && e2.raster == null && (e2.raster = r2), S(this.url, e2, this._getRequestOptions(t2));
    }
    createQuery() {
      const e2 = new x$2();
      return e2.outFields = ["*"], e2.returnGeometry = true, e2.where = this.definitionExpression || "1=1", e2;
    }
    async queryRasters(e2, t2) {
      return { query: e2, requestOptions: t2 } = await this._prepareForQuery(e2, t2), s$4(this.url, e2, t2);
    }
    async queryObjectIds(e2, t2) {
      return { query: e2, requestOptions: t2 } = await this._prepareForQuery(e2, t2), s$5(this.url, e2, t2);
    }
    async queryRasterCount(e2, t2) {
      return { query: e2, requestOptions: t2 } = await this._prepareForQuery(e2, t2), n$5(this.url, e2, t2);
    }
    async queryVisibleRasters(e2, t2) {
      var _a, _b, _c, _d;
      if (!e2)
        throw new s$3("imagery-layer: query-visible-rasters", "missing query parameter");
      await this.load();
      const { pixelSize: r2, returnDomainValues: i2, returnTopmostRaster: s2, showNoDataRecords: n2 } = t2 || { pixelSize: null, returnDomainValues: false, returnTopmostRaster: false, showNoDataRecords: false };
      let a2 = false, l2 = null, u2 = null;
      const m2 = "raster.servicepixelvalue", d2 = this._rasterFunctionNamesIndex;
      if (r$1(e2.outFields) && (a2 = e2.outFields.some((e3) => !e3.toLowerCase().includes(m2)), this.version >= 10.4)) {
        const t3 = e2.outFields.filter((e3) => e3.toLowerCase().includes(m2) && e3.length > m2.length).map((e3) => {
          const t4 = e3.slice(m2.length + 1);
          return [this._updateRenderingRulesFunctionName(t4, d2), t4];
        });
        l2 = t3.map((e3) => new w$2({ functionName: e3[0] })), u2 = t3.map((e3) => e3[1]);
        const { renderingRule: r3 } = this;
        l2.length === 0 ? (r3 == null ? void 0 : r3.functionName) ? (l2.push(r3), u2.push(r3.functionName)) : l2 = null : (r3 == null ? void 0 : r3.functionName) && !l2.some((e3) => e3.functionName === r3.functionName) && (l2.push(r3), u2.push(r3.functionName));
      }
      const h2 = t$1(e2.outSpatialReference) || e2.outSpatialReference.equals(this.spatialReference), f2 = e2.timeExtent || this.timeExtent, y3 = this._combineMosaicRuleWithTimeExtent(this.exportImageServiceParameters.mosaicRule, f2), g2 = this._getQueryParams({ geometry: e2.geometry, timeExtent: f2, mosaicRule: y3, renderingRule: this.version < 10.4 ? this.renderingRule : null, renderingRules: l2, pixelSize: r2, returnCatalogItems: a2, returnGeometry: h2, raster: this.raster, maxItemCount: s2 ? 1 : null });
      delete g2.f;
      const R2 = new d$1(g2);
      try {
        await this.generateRasterInfo(this.renderingRule);
        const r3 = await S(this.url, R2, { signal: t2 == null ? void 0 : t2.signal, query: __spreadValues({}, this.customParameters) }), s3 = e2.outFields, o2 = r3.value != null && r3.value.toLowerCase().includes("nodata");
        if (!(a2 && !h2 && ((_a = r3 == null ? void 0 : r3.catalogItems) == null ? void 0 : _a.features.length) && (n2 || !o2)))
          return this._processVisibleRastersResponse(r3, { returnDomainValues: i2, templateRRFunctionNames: u2, showNoDataRecords: n2, templateFields: s3 });
        const l3 = this.objectIdField || "ObjectId", c2 = (_c = (_b = r3.catalogItems) == null ? void 0 : _b.features) != null ? _c : [], m3 = c2.map((e3) => {
          var _a2;
          return (_a2 = e3.attributes) == null ? void 0 : _a2[l3];
        }), d3 = new x$2({ objectIds: m3, returnGeometry: true, outSpatialReference: e2.outSpatialReference, outFields: [l3] }), f3 = await this.queryRasters(d3);
        return ((_d = f3 == null ? void 0 : f3.features) == null ? void 0 : _d.length) && f3.features.forEach((t3) => {
          c2.forEach((r4) => {
            r4.attributes[l3] === t3.attributes[l3] && (r4.geometry = new v$4(t3.geometry), r$1(e2.outSpatialReference) && (r4.geometry.spatialReference = e2.outSpatialReference));
          });
        }), this._processVisibleRastersResponse(r3, { returnDomainValues: i2, templateRRFunctionNames: u2, showNoDataRecords: n2, templateFields: s3 });
      } catch {
        throw new s$3("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters");
      }
    }
    async fetchVariableStatisticsHistograms(e2, t2) {
      const r2 = U(S$12(this.parsedUrl) + "/statistics", { query: this._getQueryParams({ variable: e2 }), signal: t2 }).then((e3) => {
        var _a;
        return (_a = e3.data) == null ? void 0 : _a.statistics;
      }), i2 = U(S$12(this.parsedUrl) + "/histograms", { query: this._getQueryParams({ variable: e2 }), signal: t2 }).then((e3) => {
        var _a;
        return (_a = e3.data) == null ? void 0 : _a.histograms;
      }), s2 = await Promise.all([r2, i2]);
      return s2[0] && s2[0].forEach((e3) => {
        e3.avg = e3.mean, e3.stddev = e3.standardDeviation;
      }), { statistics: s2[0] || null, histograms: s2[1] || null };
    }
    async createFlowMesh(e2, t2) {
      const r2 = this._rasterJobHandler.instance;
      return r2 ? r2.createFlowMesh(e2, t2) : f$5(e2.meshType, e2.simulationSettings, e2.flowData, r$1(t2.signal) ? t2.signal : new AbortController().signal);
    }
    getMultidimensionalSubsetVariables(e2) {
      const t2 = e2 != null ? e2 : this.multidimensionalInfo;
      return d$5(this.multidimensionalSubset, t2);
    }
    async _fetchService(e2) {
      await this._fetchServiceInfo(e2), this.rasterInfo || (this.rasterInfo = this.serviceRasterInfo);
      const t2 = this.sourceJSON, r2 = r$1(this.serviceRasterInfo) ? Promise.resolve(this.serviceRasterInfo) : m$5(S$12(this.parsedUrl), t2, { signal: e2, query: this._getQueryParams() }).then((e3) => (this._set("serviceRasterInfo", e3), e3)), i2 = this._hasRenderingRule(this.renderingRule) ? this.generateRasterInfo(this.renderingRule, { signal: e2 }) : null, s2 = this._getRasterFunctionInfos();
      return Promise.all([r2, i2, s2]).then((e3) => {
        e3[1] ? this._set("rasterInfo", e3[1]) : this._set("rasterInfo", e3[0]), e3[2] && this._set("rasterFunctionInfos", e3[2]), this.renderer && !this._isSupportedRenderer(this.renderer) && (this._set("renderer", null), s$2.getLogger(this.declaredClass).warn("ArcGISImageService", "Switching to the default renderer. Renderer applied is not valid for this Imagery Layer")), this._set("renderer", this._configRenderer(this.renderer)), this.addHandles([l$4(() => this.renderingRule, (e4) => {
          (this.renderer || this.symbolizer || this.popupEnabled && this.popupTemplate) && this.generateRasterInfo(e4).then((e5) => {
            e5 && (this.rasterInfo = e5);
          });
        })]);
        const { serviceRasterInfo: t3 } = this;
        t3 && r$1(t3.multidimensionalInfo) && this._updateMultidimensionalDefinition(t3);
      });
    }
    _combineMosaicRuleWithTimeExtent(e2, t2) {
      var _a;
      const r2 = this.timeInfo;
      if (t$1(e2) || t$1(this.multidimensionalInfo) || t$1(t2) || t$1(r2 == null ? void 0 : r2.startField))
        return e2;
      const { startField: i2 } = r2, s2 = this.multidimensionalInfo.variables.some((e3) => e3.dimensions.some((e4) => e4.name === i2)) ? i2 : "StdTime";
      if (e2 = e2.clone(), this.sourceType === "mosaic-dataset")
        return e2.multidimensionalDefinition = (_a = e2.multidimensionalDefinition) == null ? void 0 : _a.filter((e3) => e3.dimensionName !== s2), this._cleanupMultidimensionalDefinition(e2);
      e2.multidimensionalDefinition = e2.multidimensionalDefinition || [];
      const n2 = e2.multidimensionalDefinition.filter((e3) => e3.dimensionName === s2), o2 = r$1(t2.start) ? t2.start.getTime() : null, a2 = r$1(t2.end) ? t2.end.getTime() : null, l2 = o2 == null || a2 == null || o2 === a2, u2 = l2 ? [o2 || a2] : [[o2, a2]], m2 = this.version >= 10.8;
      if (n2.length)
        n2.forEach((e3) => {
          e3.dimensionName === s2 && (m2 ? (e3.dimensionName = null, e3.isSlice = false, e3.values = []) : (e3.isSlice = l2, e3.values = u2));
        });
      else if (!m2) {
        const t3 = e2.multidimensionalDefinition.filter((e3) => e3.variableName != null && e3.dimensionName == null);
        t3.length ? t3.forEach((e3) => {
          e3.dimensionName = s2, e3.isSlice = l2, e3.values = u2;
        }) : e2.multidimensionalDefinition.push(new p$7({ variableName: "", dimensionName: s2, isSlice: l2, values: u2 }));
      }
      return this._cleanupMultidimensionalDefinition(e2);
    }
    _cleanupMultidimensionalDefinition(e2) {
      return t$1(e2) ? null : (e2.multidimensionalDefinition && (e2.multidimensionalDefinition = e2.multidimensionalDefinition.filter((e3) => !(!e3.variableName && !e3.dimensionName)), e2.multidimensionalDefinition.length === 0 && (e2.multidimensionalDefinition = null)), this.sourceType !== "mosaic-dataset" && e2.multidimensionalDefinition == null ? null : e2);
    }
    async _prepareForQuery(e2, t2) {
      if (!(await this._fetchCapabilities(t2 == null ? void 0 : t2.signal)).operations.supportsQuery)
        throw new s$3("imagery-layer:query-rasters", "query operation is not supported on the input image service");
      return e2 = r$1(e2) ? v$3(x$2, e2) : this.createQuery(), t2 = this._getRequestOptions(t2), this.raster && (t2.query = __spreadProps(__spreadValues({}, t2.query), { raster: this.raster })), { query: e2, requestOptions: t2 };
    }
    async _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null)
        return this._rasterJobHandler.connectionPromise;
      const e2 = new n$6();
      this._rasterJobHandler.connectionPromise = e2.initialize().then(() => {
        this._rasterJobHandler.instance = e2;
      }, () => {
      }), await this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null;
    }
    _isSupportedRenderer(e2) {
      const { rasterInfo: t2, renderingRule: r2 } = this;
      return e2.type === "unique-value" && this._hasRenderingRule(r2) && (t2 == null ? void 0 : t2.bandCount) === 1 && ["u8", "s8"].includes(t2.pixelType) || t2 != null && e2 != null && k$2(t2).includes(e2.type);
    }
    async _fetchCapabilities(e2) {
      return this.capabilities || await this._fetchServiceInfo(e2), this.capabilities;
    }
    async _fetchServiceInfo(e2) {
      var _a;
      let t2 = this.sourceJSON;
      if (!t2) {
        const { data: r2, ssl: i2 } = await U(S$12(this.parsedUrl), { query: this._getQueryParams(), signal: e2 });
        t2 = r2, this.sourceJSON = t2, i2 && (this.url = this.url.replace(/^http:/i, "https:"));
      }
      if (((_a = t2.capabilities) == null ? void 0 : _a.toLowerCase().split(",").map((e3) => e3.trim()).indexOf("tilesonly")) > -1)
        throw new s$3("imagery-layer:fetch-service-info", "use ImageryTileLayer to open tiles-only image services");
      this.read(t2, { origin: "service", url: this.parsedUrl });
    }
    _isMosaicDataset(e2) {
      var _a;
      return e2.serviceSourceType ? e2.serviceSourceType === "esriImageServiceSourceTypeMosaicDataset" : ((_a = e2.fields) == null ? void 0 : _a.length) > 0;
    }
    _isMosaicRuleSupported(e2) {
      var _a;
      if (!e2)
        return false;
      const t2 = this._isMosaicDataset(e2), r2 = e2.currentVersion >= 10.71 && e2.hasMultidimensions && !(((_a = e2.fields) == null ? void 0 : _a.length) > 1);
      return t2 || r2;
    }
    _isVectorFieldResampleFunction(e2) {
      if (t$1(e2))
        return false;
      const { functionName: t2, functionArguments: r2 } = e2, i2 = (t2 == null ? void 0 : t2.toLowerCase()) === "resample", s2 = (r2 == null ? void 0 : r2.ResampleType) || (r2 == null ? void 0 : r2.resampleType);
      return i2 && (s2 === 7 || s2 === 10);
    }
    _isPicture() {
      return !this.format || this.format.includes("jpg") || this.format.includes("png");
    }
    _configRenderer(e2) {
      var _a, _b;
      if (!this._isPicture() && !this.pixelFilter || this._isVectorDataSet()) {
        if (!this.bandIds && this.rasterInfo && this.rasterInfo.bandCount >= 3) {
          const e3 = L$1(this.rasterInfo);
          !e3 || this.rasterInfo.bandCount === 3 && e3[0] === 0 && e3[1] === 1 && e3[2] === 2 || (this.bandIds = e3);
        }
        e2 || (e2 = j$4(this.rasterInfo, { bandIds: this.bandIds, variableName: this.renderingRule ? null : (_b = (_a = this.mosaicRule) == null ? void 0 : _a.multidimensionalDefinition) == null ? void 0 : _b[0].variableName }));
        const t2 = $(e2.toJSON());
        this.symbolizer ? (this.symbolizer.rendererJSON = t2, this.symbolizer.rasterInfo = this.rasterInfo) : this.symbolizer = new T$4({ rendererJSON: t2, rasterInfo: this.rasterInfo }), this.symbolizer.bind().success || (this.symbolizer = null);
      }
      return e2;
    }
    _clonePixelData(e2) {
      return e2 == null ? e2 : { extent: e2.extent && e2.extent.clone(), pixelBlock: r$1(e2.pixelBlock) ? e2.pixelBlock.clone() : null };
    }
    _getQueryParams(e2) {
      e2 && r$1(e2.renderingRule) && typeof e2.renderingRule != "string" && (e2.renderingRule = this._getRenderingRuleString(e2.renderingRule));
      const { raster: t2, viewId: r2 } = this;
      return __spreadValues(__spreadValues({ raster: t2, viewId: r2, f: "json" }, e2), this.customParameters);
    }
    _getRequestOptions(e2) {
      return __spreadProps(__spreadValues({}, e2), { query: __spreadValues(__spreadValues({}, e2 == null ? void 0 : e2.query), this.customParameters) });
    }
    _decodePixelBlock(e2, t2, r2) {
      return this._rasterJobHandler.instance ? this._rasterJobHandler.instance.decode({ data: e2, options: t2 }) : S$2(e2, t2, r2);
    }
    async _getRasterFunctionInfos(e2) {
      var _a;
      const t2 = this.sourceJSON.rasterFunctionInfos;
      if (this.loaded)
        return t2;
      if (t2 && this.version >= 10.3) {
        if (t2.length === 1 && t2[0].name.toLowerCase() === "none")
          return t2;
        return (_a = (await U(S$12(this.parsedUrl) + "/rasterFunctionInfos", { query: this._getQueryParams(), signal: e2 })).data) == null ? void 0 : _a.rasterFunctionInfos;
      }
      return null;
    }
    _canRequestImageElement(e2) {
      return !this.pixelFilter && (!e2 || e2.includes("png"));
    }
    async _requestArrayBuffer(e2) {
      const { imageProps: t2, requestAsImageElement: r2, signal: i2 } = e2;
      if (r2 && this._canRequestImageElement(t2.format)) {
        return { imageOrCanvasElement: (await U(S$12(this.parsedUrl) + "/exportImage", { responseType: "image", query: this._getQueryParams(__spreadValues(__spreadValues({ f: "image" }, this.refreshParameters), e2.imageServiceParameters)), signal: i2 })).data, params: t2 };
      }
      const s2 = this._initJobHandler(), a2 = U(S$12(this.parsedUrl) + "/exportImage", { responseType: "array-buffer", query: this._getQueryParams(__spreadValues({ f: "image" }, e2.imageServiceParameters)), signal: i2 }), l2 = (await Promise.all([a2, s2]))[0].data, u2 = t2.format || "jpgpng";
      let p2 = u2;
      if (p2 !== "bsq" && p2 !== "bip" && (p2 = P(l2)), !p2)
        throw new s$3("imagery-layer:fetch-image", "unsupported format signature " + String.fromCharCode.apply(null, new Uint8Array(l2)));
      const c2 = { signal: i2 }, m2 = u2 === "gif" || u2 === "bmp" || u2.includes("png") && (p2 === "png" || p2 === "jpg") ? S$2(l2, __spreadValues({ useCanvas: true }, t2), c2) : this._decodePixelBlock(l2, { width: t2.width, height: t2.height, planes: null, pixelType: null, noDataValue: null, format: u2 }, c2);
      return { pixelData: { pixelBlock: await m2, extent: t2.extent }, params: t2 };
    }
    _generateRasterInfo(e2, t2) {
      const r2 = __spreadProps(__spreadValues({}, t2), { query: this._getQueryParams() });
      return f$6(S$12(this.parsedUrl), e2, r2);
    }
    _isValidCustomizedMosaicRule(e2) {
      var _a;
      return e2 && JSON.stringify(e2.toJSON()) !== JSON.stringify((_a = this.defaultMosaicRule) == null ? void 0 : _a.toJSON());
    }
    _updateMultidimensionalDefinition(e2) {
      var _a;
      if (this._isValidCustomizedMosaicRule(this.mosaicRule))
        return;
      const t2 = c$6(e2, { multidimensionalSubset: this.multidimensionalSubset });
      if (r$1(t2) && t2.length > 0) {
        this.mosaicRule = this.mosaicRule || new y$4();
        const e3 = this.mosaicRule.multidimensionalDefinition;
        !this.sourceJSON.defaultVariableName && this.renderingRule && ((_a = this.renderingRule.functionName) == null ? void 0 : _a.toLowerCase()) !== "none" && t2.forEach((e4) => e4.variableName = ""), (!e3 || e3 && e3.length <= 0) && (this.mosaicRule.multidimensionalDefinition = t2);
      }
    }
    _processVisibleRastersResponse(e2, r2) {
      var _a;
      r2 = r2 || {};
      const i2 = e2.value, { templateRRFunctionNames: s2, showNoDataRecords: n2, returnDomainValues: o2, templateFields: a2 } = r2, l2 = e2.processedValues;
      let u2 = e2.catalogItems && e2.catalogItems.features, c2 = e2.properties && e2.properties.Values && e2.properties.Values.map((e3) => e3.replace(/ /gi, ", ")) || [];
      const m2 = this.objectIdField || "ObjectId", d2 = typeof i2 == "string" && i2.toLowerCase().includes("nodata"), h2 = [];
      if (i2 && !u2 && !d2) {
        const e3 = {};
        e3[m2] = 0;
        c2 = [i2], u2 = [new g$3(this.fullExtent, null, e3)];
      }
      if (!u2)
        return [];
      let f2, y3, g2;
      this._updateResponseFieldNames(u2, a2), d2 && !n2 && (u2 = []);
      for (let t2 = 0; t2 < u2.length; t2++) {
        if (f2 = u2[t2], i2 != null) {
          if (y3 = c2[t2], g2 = this.renderingRule && l2 && l2.length > 0 && s2 && s2.length > 0 && s2.includes(this.renderingRule.functionName) ? l2[s2.indexOf(this.renderingRule.functionName)] : i2, y3.toLowerCase() === "nodata" && !n2)
            continue;
          const e3 = "Raster.ItemPixelValue", r3 = "Raster.ServicePixelValue";
          f2.attributes[e3] = y3, f2.attributes[r3] = g2, this._updateFeatureWithMagDirValues(f2, y3);
          const o3 = this.fields && this.fields.length > 0;
          let a3 = this.renderingRule && r$1((_a = this.serviceRasterInfo) == null ? void 0 : _a.attributeTable) ? o3 ? y3 : i2 : g2;
          this.renderingRule || (a3 = o3 ? y3 : i2), this._updateFeatureWithRasterAttributeTableValues(f2, a3);
        }
        if (f2.sourceLayer = f2.layer = this, o2 && this._updateFeatureWithDomainValues(f2), s2 && l2 && s2.length === l2.length)
          for (let e3 = 0; e3 < s2.length; e3++) {
            const t3 = "Raster.ServicePixelValue." + s2[e3];
            f2.attributes[t3] = l2[e3];
          }
        h2.push(u2[t2]);
      }
      return h2;
    }
    _updateFeatureWithRasterAttributeTableValues(e2, t2) {
      var _a;
      const r2 = this.rasterInfo && this.rasterInfo.attributeTable || ((_a = this.serviceRasterInfo) == null ? void 0 : _a.attributeTable);
      if (t$1(r2))
        return;
      const { features: i2, fields: s2 } = r2, n2 = s2.map((e3) => e3.name).filter((e3) => e3.toLowerCase() === "value"), o2 = n2 && n2[0];
      if (!o2)
        return;
      const a2 = i2.filter((e3) => e3.attributes[o2] === (t2 != null ? parseInt(t2, 10) : null));
      a2 && a2[0] && s2.forEach((t3) => {
        const r3 = this._rasterAttributeTableFieldPrefix + t3.name;
        e2.attributes[r3] = a2[0].attributes[t3.name];
      });
    }
    _updateFeatureWithMagDirValues(e2, t2) {
      if (!this._isVectorDataSet())
        return;
      const r2 = t2.split(/,\s*/).map((e3) => parseFloat(e3)), i2 = r2.map((e3) => [e3]), s2 = r2.map((e3) => ({ minValue: e3, maxValue: e3, noDataValue: null })), n2 = new g$2({ height: 1, width: 1, pixelType: "f32", pixels: i2, statistics: s2 });
      this.pixelFilter != null && this.pixelFilter({ pixelBlock: n2, extent: new w$4(0, 0, 0, 0, this.spatialReference) });
      const o2 = this.serviceDataType === "esriImageServiceDataTypeVector-MagDir" ? [n2.pixels[0][0], n2.pixels[1][0]] : f$7([n2.pixels[0][0], n2.pixels[1][0]]);
      e2.attributes["Raster.Magnitude"] = o2[0], e2.attributes["Raster.Direction"] = o2[1];
    }
    _updateFeatureWithDomainValues(e2) {
      const t2 = this.fields && this.fields.filter((e3) => e3.domain && e3.domain.type === "coded-value");
      t2 != null && t2.forEach((t3) => {
        const r2 = e2.attributes[t3.name];
        if (r2 != null) {
          const i2 = t3.domain.codedValues.find((e3) => e3.code === r2);
          i2 && (e2.attributes[t3.name] = i2.name);
        }
      });
    }
    _updateResponseFieldNames(e2, t2) {
      if (!t2 || t2.length < 1)
        return;
      const r2 = this.fieldsIndex;
      t$1(r2) || e2.forEach((e3) => {
        var _a;
        if (e3 && e3.attributes)
          for (const i2 of t2) {
            const t3 = (_a = r2.get(i2)) == null ? void 0 : _a.name;
            t3 && t3 !== i2 && (e3.attributes[i2] = e3.attributes[t3], delete e3.attributes[t3]);
          }
      });
    }
    _getRenderingRuleString(e2) {
      var _a;
      if (this._hasRenderingRule(e2)) {
        let t2 = e2.toJSON();
        return t2 = (_a = t2.rasterFunctionDefinition) != null ? _a : t2, (t2.thumbnail || t2.thumbnailEx) && (t2.thumbnail = t2.thumbnailEx = null), JSON.stringify(t2);
      }
      return null;
    }
    _hasRenderingRule(e2) {
      return e2 != null && e2.functionName != null && e2.functionName.toLowerCase() !== "none";
    }
    _updateRenderingRulesFunctionName(e2, t2) {
      if (!e2 || e2.length < 1)
        return;
      if (e2 === "Raw")
        return e2.replace("Raw", "None");
      const r2 = e2.toLowerCase().replace(/ /gi, "_");
      return t2.has(r2) ? t2.get(r2) : e2;
    }
    _isRFTJson(e2) {
      return e2 && e2.name && e2.arguments && e2.function && e2.hasOwnProperty("functionType");
    }
    _isVectorDataSet() {
      return this.serviceDataType === "esriImageServiceDataTypeVector-UV" || this.serviceDataType === "esriImageServiceDataTypeVector-MagDir";
    }
    _readCapabilities(e2) {
      const t2 = e2.capabilities ? e2.capabilities.toLowerCase().split(",").map((e3) => e3.trim()) : ["image", "catalog"], { currentVersion: r2, advancedQueryCapabilities: i2, maxRecordCount: s2 } = e2, n2 = t2.includes("image"), o2 = e2.serviceDataType === "esriImageServiceDataTypeElevation", a2 = !!(e2.spatialReference || e2.extent && e2.extent.spatialReference), l2 = t2.includes("edit");
      return { data: { supportsAttachment: false }, operations: { supportsComputeHistograms: n2, supportsExportImage: n2, supportsIdentify: n2, supportsMeasure: t2.includes("mensuration") && a2, supportsDownload: t2.includes("download"), supportsQuery: t2.includes("catalog") && e2.fields && e2.fields.length > 0, supportsGetSamples: r2 >= 10.2 && n2, supportsProject: r2 >= 10.3 && n2, supportsComputeStatisticsHistograms: r2 >= 10.4 && n2, supportsQueryBoundary: r2 >= 10.6 && n2, supportsCalculateVolume: r2 >= 10.7 && o2, supportsComputePixelLocation: r2 >= 10.7 && t2.includes("catalog"), supportsComputeAngles: r2 >= 10.91, supportsAdd: l2, supportsDelete: l2, supportsEditing: l2, supportsUpdate: l2, supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsChangeTracking: false, supportsQueryAttachments: false, supportsResizeAttachments: false, supportsSync: false, supportsExceedsLimitStatistics: false, supportsQueryAnalytics: false, supportsQueryTopFeatures: false }, query: { maxRecordCount: s2, maxRecordCountFactor: void 0, supportsStatistics: !!(i2 == null ? void 0 : i2.supportsStatistics), supportsOrderBy: !!(i2 == null ? void 0 : i2.supportsOrderBy), supportsDistinct: !!(i2 == null ? void 0 : i2.supportsDistinct), supportsPagination: !!(i2 == null ? void 0 : i2.supportsPagination), supportsStandardizedQueriesOnly: !!(i2 == null ? void 0 : i2.useStandardizedQueries), supportsPercentileStatistics: !!(i2 == null ? void 0 : i2.supportsPercentileStatistics), supportsCentroid: !!(i2 == null ? void 0 : i2.supportsReturningGeometryCentroid), supportsDistance: !!(i2 == null ? void 0 : i2.supportsQueryWithDistance), supportsExtent: !!(i2 == null ? void 0 : i2.supportsReturningQueryExtent), supportsGeometryProperties: !!(i2 == null ? void 0 : i2.supportsReturningGeometryProperties), supportsHavingClause: !!(i2 == null ? void 0 : i2.supportsHavingClause), supportsQuantization: false, supportsQuantizationEditMode: false, supportsQueryGeometry: false, supportsResultType: false, supportsMaxRecordCountFactor: false, supportsSqlExpression: false, supportsTopFeaturesQuery: false, supportsQueryByOthers: false, supportsHistoricMoment: false, supportsFormatPBF: false, supportsDisjointSpatialRelationship: false, supportsCacheHint: false, supportsSpatialAggregationStatistics: false, supportedSpatialAggregationStatistics: { envelope: false, centroid: false, convexHull: false }, supportsDefaultSpatialReference: !!(i2 == null ? void 0 : i2.supportsDefaultSR), supportsFullTextSearch: false, supportsCompactGeometry: false, standardMaxRecordCount: void 0, tileMaxRecordCount: void 0 } };
    }
  };
  function S$12(e2) {
    var _a;
    return (_a = e2 == null ? void 0 : e2.path) != null ? _a : "";
  }
  return e$1([y$7()], y2.prototype, "_functionRasterInfos", void 0), e$1([y$7()], y2.prototype, "_rasterJobHandler", void 0), e$1([y$7()], y2.prototype, "_cachedRendererJson", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "_serviceSupportsMosaicRule", void 0), e$1([o$1("_serviceSupportsMosaicRule", ["currentVersion", "fields"])], y2.prototype, "readServiceSupportsMosaicRule", null), e$1([y$7()], y2.prototype, "_rasterAttributeTableFieldPrefix", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "_rasterFunctionNamesIndex", null), e$1([y$7()], y2.prototype, "adjustAspectRatio", void 0), e$1([y$7({ type: [T$2], json: { write: true } })], y2.prototype, "bandIds", void 0), e$1([o$1("bandIds")], y2.prototype, "readBandIds", null), e$1([y$7({ readOnly: true, json: { read: false } })], y2.prototype, "capabilities", void 0), e$1([o$1("service", "capabilities", ["capabilities", "currentVersion", "serviceDataType"])], y2.prototype, "readCapabilities", null), e$1([y$7({ type: Number })], y2.prototype, "compressionQuality", void 0), e$1([r("compressionQuality")], y2.prototype, "writeCompressionQuality", null), e$1([y$7({ type: Number })], y2.prototype, "compressionTolerance", void 0), e$1([r("compressionTolerance")], y2.prototype, "writeCompressionTolerance", null), e$1([y$7({ json: { read: { source: "copyrightText" } } })], y2.prototype, "copyright", void 0), e$1([y$7({ readOnly: true, dependsOn: ["_serviceSupportsMosaicRule"] })], y2.prototype, "defaultMosaicRule", void 0), e$1([o$1("defaultMosaicRule", ["defaultMosaicMethod"])], y2.prototype, "readDefaultMosaicRule", null), e$1([y$7({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], y2.prototype, "definitionExpression", void 0), e$1([y$7({ readOnly: true, constructOnly: true })], y2.prototype, "exportImageServiceParameters", void 0), e$1([y$7()], y2.prototype, "rasterInfo", void 0), e$1([y$7({ readOnly: true, type: [y$8] })], y2.prototype, "fields", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "fieldsIndex", null), e$1([y$7({ type: ["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"], json: { write: true } })], y2.prototype, "format", null), e$1([o$1("service", "format", ["serviceDataType"])], y2.prototype, "readFormat", null), e$1([y$7({ type: w$4 })], y2.prototype, "fullExtent", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "hasMultidimensions", void 0), e$1([y$7({ json: { read: { source: "maxImageHeight" } } })], y2.prototype, "imageMaxHeight", void 0), e$1([y$7({ json: { read: { source: "maxImageWidth" } } })], y2.prototype, "imageMaxWidth", void 0), e$1([y$7({ type: String, json: { type: o$2.jsonValues, read: o$2.read, write: o$2.write } })], y2.prototype, "interpolation", void 0), e$1([y$7()], y2.prototype, "minScale", void 0), e$1([o$1("service", "minScale")], y2.prototype, "readMinScale", null), e$1([y$7()], y2.prototype, "maxScale", void 0), e$1([o$1("service", "maxScale")], y2.prototype, "readMaxScale", null), e$1([y$7({ type: y$4 })], y2.prototype, "mosaicRule", null), e$1([o$1("mosaicRule", ["mosaicRule", "defaultMosaicMethod"])], y2.prototype, "readMosaicRule", null), e$1([r("mosaicRule")], y2.prototype, "writeMosaicRule", null), e$1([y$7()], y2.prototype, "multidimensionalInfo", null), e$1([y$7({ type: c$5, json: { write: true } })], y2.prototype, "multidimensionalSubset", void 0), e$1([y$7({ json: { type: T$2 } })], y2.prototype, "noData", void 0), e$1([r("noData")], y2.prototype, "writeNoData", null), e$1([y$7({ type: String, json: { type: i$2.jsonValues, read: i$2.read, write: i$2.write } })], y2.prototype, "noDataInterpretation", void 0), e$1([y$7({ type: String, readOnly: true, json: { read: { source: ["fields"] } } })], y2.prototype, "objectIdField", void 0), e$1([o$1("objectIdField")], y2.prototype, "readObjectIdField", null), e$1([y$7({})], y2.prototype, "geometryType", void 0), e$1([y$7({})], y2.prototype, "typeIdField", void 0), e$1([y$7({})], y2.prototype, "types", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "parsedUrl", null), e$1([y$7({ type: Function })], y2.prototype, "pixelFilter", void 0), e$1([y$7()], y2.prototype, "raster", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "sourceType", void 0), e$1([o$1("sourceType", ["serviceSourceType", "fields"])], y2.prototype, "readSourceType", null), e$1([y$7()], y2.prototype, "viewId", void 0), e$1([y$7({ types: l$3, json: { name: "layerDefinition.drawingInfo.renderer", origins: { "web-scene": { types: i$5, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e2) => ({ enabled: e2 && e2.type !== "vector-field" && e2.type !== "flow" }) } } } } })], y2.prototype, "renderer", null), e$1([o$1("renderer")], y2.prototype, "readRenderer", null), e$1([r("renderer")], y2.prototype, "writeRenderer", null), e$1([y$7()], y2.prototype, "symbolizer", void 0), e$1([y$7(w$5)], y2.prototype, "opacity", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "rasterFields", null), e$1([y$7({ constructOnly: true })], y2.prototype, "rasterFunctionInfos", void 0), e$1([y$7({ type: w$2 })], y2.prototype, "renderingRule", null), e$1([o$1("renderingRule", ["renderingRule", "rasterFunctionInfos"])], y2.prototype, "readRenderingRule", null), e$1([r("renderingRule")], y2.prototype, "writeRenderingRule", null), e$1([y$7()], y2.prototype, "serviceDataType", void 0), e$1([y$7({ readOnly: true, type: k$1 })], y2.prototype, "spatialReference", void 0), e$1([o$1("spatialReference", ["spatialReference", "extent"])], y2.prototype, "readSpatialReference", null), e$1([y$7({ json: { type: Se.jsonValues } })], y2.prototype, "pixelType", void 0), e$1([o$1("pixelType")], y2.prototype, "readPixelType", null), e$1([r("pixelType")], y2.prototype, "writePixelType", null), e$1([y$7({ constructOnly: true, type: u$2 })], y2.prototype, "serviceRasterInfo", void 0), e$1([y$7()], y2.prototype, "sourceJSON", void 0), e$1([y$7(f$4)], y2.prototype, "url", void 0), e$1([y$7({ readOnly: true })], y2.prototype, "version", void 0), e$1([o$1("version", ["currentVersion", "fields", "timeInfo"])], y2.prototype, "readVersion", null), y2 = e$1([n$3("esri.layers.mixins.ArcGISImageService")], y2), y2;
};
let L = class extends n$7(a$2(t$2(c$7(v$5(xe(p$8(o$3(p$9(O(b$1)))))))))) {
  constructor(...e2) {
    super(...e2), this.legendEnabled = true, this.isReference = null, this.operationalLayerType = "ArcGISImageServiceLayer", this.popupEnabled = true, this.popupTemplate = null, this.type = "imagery";
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, e2).catch(w$6).then(() => this._fetchService(r2))), Promise.resolve(this);
  }
  writeOperationalLayerType(e2, r2, t2) {
    var _a;
    const o2 = ((_a = this.renderer) == null ? void 0 : _a.type) === "vector-field";
    r2[t2] = o2 ? "ArcGISImageServiceVectorLayer" : "ArcGISImageServiceLayer";
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(e2) {
    const r2 = this.rasterFields, t2 = this.title, o2 = new Set();
    let i2 = false, s2 = false;
    this.capabilities && (i2 = this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0, s2 = this.serviceDataType === "esriImageServiceDataTypeVector-UV" || this.serviceDataType === "esriImageServiceDataTypeVector-MagDir");
    const a2 = new Set();
    i2 && a2.add("raster.itempixelvalue");
    for (const p2 of r2) {
      const e3 = p2.name.toLowerCase();
      a2.has(e3) || e3.includes("raster.servicepixelvalue.") || o2.add(p2.name);
    }
    return s2 && o2.add("raster.magnitude").add("raster.direction"), p$a({ fields: r2, title: t2 }, __spreadProps(__spreadValues({}, e2), { visibleFieldNames: o2 }));
  }
  queryFeatures(e2, r2) {
    return this.queryRasters(e2, r2).then((e3) => {
      if (e3 == null ? void 0 : e3.features)
        for (const r3 of e3.features)
          r3.layer = r3.sourceLayer = this;
      return e3;
    });
  }
  queryFeatureCount(e2, r2) {
    return this.queryRasterCount(e2, r2);
  }
  redraw() {
    this.emit("redraw");
  }
  serviceSupportsSpatialReference(e2) {
    return e$3(this, e2);
  }
};
e$1([y$7(c$8)], L.prototype, "legendEnabled", void 0), e$1([y$7({ type: ["show", "hide"] })], L.prototype, "listMode", void 0), e$1([y$7({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], L.prototype, "isReference", void 0), e$1([y$7({ type: ["ArcGISImageServiceLayer"], json: { origins: { "web-map": { type: ["ArcGISImageServiceLayer", "ArcGISImageServiceVectorLayer"], read: false, write: { target: "layerType", ignoreOrigin: true } } } } })], L.prototype, "operationalLayerType", void 0), e$1([r("web-map", "operationalLayerType")], L.prototype, "writeOperationalLayerType", null), e$1([y$7(p$b)], L.prototype, "popupEnabled", void 0), e$1([y$7({ type: k$3, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], L.prototype, "popupTemplate", void 0), e$1([y$7({ readOnly: true })], L.prototype, "defaultPopupTemplate", null), e$1([y$7({ readOnly: true, json: { read: false } })], L.prototype, "type", void 0), L = e$1([n$3("esri.layers.ImageryLayer")], L);
const T = L;
export { T as default };
