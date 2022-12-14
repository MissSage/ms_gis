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
import { a as r, cr as w, k as e, gs as s } from "./index.js";
import { g, W, T as T$1, D, j } from "./pixelUtils.js";
import { S, T, p } from "./RasterSymbolizer.js";
import { l, i } from "./utils5.js";
import { M, T as T$2, $ } from "./rasterProjectionHelper.js";
import { d, m, f } from "./dataUtils.js";
import "vue";
import "./colorUtils.js";
class N {
  convertVectorFieldData(e2) {
    const t = g.fromJSON(e2.pixelBlock), o = d(t, e2.type);
    return Promise.resolve(r(o) && o.toJSON());
  }
  async decode(r2) {
    const e2 = await S(r2.data, r2.options);
    return e2 && e2.toJSON();
  }
  symbolize(e2) {
    e2.pixelBlock = g.fromJSON(e2.pixelBlock), e2.extent = e2.extent ? w.fromJSON(e2.extent) : null;
    const t = this.symbolizer.symbolize(e2);
    return Promise.resolve(r(t) && t.toJSON());
  }
  async updateSymbolizer(r2) {
    var _a;
    this.symbolizer = T.fromJSON(r2.symbolizerJSON), r2.histograms && ((_a = this.symbolizer) == null ? void 0 : _a.rendererJSON.type) === "rasterStretch" && (this.symbolizer.rendererJSON.histograms = r2.histograms);
  }
  async updateRasterFunction(r2) {
    this.rasterFunction = l(r2.rasterFunctionJSON);
  }
  async process(e2) {
    const t = this.rasterFunction.process({ extent: w.fromJSON(e2.extent), primaryPixelBlocks: e2.primaryPixelBlocks.map((e3) => r(e3) ? g.fromJSON(e3) : null), primaryRasterIds: e2.primaryRasterIds });
    return r(t) ? t.toJSON() : null;
  }
  stretch(e2) {
    const t = this.symbolizer.simpleStretch(g.fromJSON(e2.srcPixelBlock), e2.stretchParams);
    return Promise.resolve(r(t) && t.toJSON());
  }
  estimateStatisticsHistograms(r2) {
    const e2 = p(g.fromJSON(r2.srcPixelBlock));
    return Promise.resolve(e2);
  }
  split(r2) {
    const e2 = W(g.fromJSON(r2.srcPixelBlock), r2.tileSize, r2.maximumPyramidLevel);
    return e2 && e2.forEach((r3, t) => {
      e2.set(t, r3 == null ? void 0 : r3.toJSON());
    }), Promise.resolve(e2);
  }
  async mosaicAndTransform(r2) {
    const t = r2.srcPixelBlocks.map((r3) => r3 ? new g(r3) : null), o = T$1(t, r2.srcMosaicSize, { blockWidths: r2.blockWidths, alignmentInfo: r2.alignmentInfo, clipOffset: r2.clipOffset, clipSize: r2.clipSize });
    let i2, l2 = o;
    return r2.coefs && (l2 = D(o, r2.destDimension, r2.coefs, r2.sampleSpacing, r2.interpolation)), r2.projectDirections && r2.gcsGrid && (i2 = j(r2.destDimension, r2.gcsGrid), l2 = e(m(l2, r2.isUV ? "vector-uv" : "vector-magdir", i2))), { pixelBlock: l2 == null ? void 0 : l2.toJSON(), localNorthDirections: i2 };
  }
  async createFlowMesh(r2, e2) {
    const t = { data: new Float32Array(r2.flowData.buffer), mask: new Uint8Array(r2.flowData.maskBuffer), width: r2.flowData.width, height: r2.flowData.height }, { vertexData: s2, indexData: o } = await f(r2.meshType, r2.simulationSettings, t, e2.signal);
    return { result: { vertexBuffer: s2.buffer, indexBuffer: o.buffer }, transferList: [s2.buffer, o.buffer] };
  }
  async getProjectionOffsetGrid(r2) {
    const e2 = w.fromJSON(r2.projectedExtent), s$1 = w.fromJSON(r2.srcBufferExtent);
    let o = null;
    r2.datumTransformationSteps && (o = new s({ steps: r2.datumTransformationSteps })), (r2.includeGCSGrid || M(e2.spatialReference, s$1.spatialReference, o)) && await T$2();
    const i$1 = r2.rasterTransform ? i(r2.rasterTransform) : null;
    return $(__spreadProps(__spreadValues({}, r2), { projectedExtent: e2, srcBufferExtent: s$1, datumTransformation: o, rasterTransform: i$1 }));
  }
}
export { N as default };
