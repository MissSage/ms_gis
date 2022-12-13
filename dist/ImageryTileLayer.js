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
import { cB as m$1, co as l$1, d3 as j, a as r$1, jb as S$1, s, g as s$1, dC as v$1, a7 as w$2, k as e$1, t as t$2, cr as w$3, U as U$2, b1 as f$3, v as v$2, $ as e$2, a0 as y$2, h7 as f$5, a1 as n$4, aK as k, ao as R$1, cE as x$2, cs as E$1, h as has, w as a$1, e5 as c$5, bO as j$4, i2 as n$8, i3 as t$3, h2 as c$7, h3 as v$3, iJ as o$1, iM as a$2, i4 as p$3, h4 as O$1, e0 as b$3, aL as w$5, g2 as y$3, i7 as p$4, R as l$4, gp as T$3, dW as r$4, iE as c$8, d4 as k$1, cD as o$3 } from "./index.js";
import { c as c$3, w as w$4, l as l$2, $ as $$2, V as V$2, L, j as j$3, n as n$5, m as m$6, u as u$3, o as o$2, a as i$3 } from "./fetchRasterInfo.js";
import { f as f$2, g, i as i$1, s as s$2, p as p$1, c as c$4, m as m$4, d as d$4 } from "./multidimensionalUtils.js";
import { S as S$2, b as n$3, T as T$2, r as r$2, e as u$2, p as p$2, j as g$1, P, l as r$3, N as N$2, D as D$1, m as n$7, G, q as b$2, O } from "./RasterSymbolizer.js";
import { a, x as x$1, h as h$1, d as d$2, m as m$3 } from "./RawBlockCache.js";
import { T as T$1, D, j as j$2, W, b as b$1, g as g$2 } from "./pixelUtils.js";
import { T, U as U$1, j as j$1, o as oe, n as ne, Q, J as J$1, $ as $$1, V as V$1, C } from "./rasterProjectionHelper.js";
import { m as m$2, b as f$4, d as d$3, f as f$6 } from "./dataUtils.js";
import { l as l$3, f as f$7, i as i$2, m as m$5, c as c$6 } from "./utils5.js";
import { n as n$6, z } from "./TilemapCache.js";
import "vue";
import "./generateRendererUtils.js";
import "./colorUtils.js";
const V = 8;
let $ = class extends m$1(l$1) {
  constructor() {
    super(...arguments), this.rasterJobHandler = null, this.datasetName = null, this.datasetFormat = null, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  async init() {
    const t2 = T();
    this.addResolvingPromise(t2), await this.when();
  }
  normalizeCtorArgs(t2) {
    return t2 && t2.ioConfig && (t2 = __spreadProps(__spreadValues({}, t2), { ioConfig: __spreadValues({ resolution: null, bandIds: null, sampling: "closest", tileInfo: j.create() }, t2.ioConfig) })), t2;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: t2 } = this, e2 = U$1(t2.spatialReference);
    return r$1(e2) && t2.extent.width >= e2 / 2;
  }
  set url(t2) {
    this._set("url", S$1(t2, s.getLogger(this.declaredClass)));
  }
  async open(t2) {
    throw new s$1("BaseRaster:open-not-implemented", "open() is not implemented");
  }
  async fetchTile(t2, e2, i2, o2 = {}) {
    const r2 = o2.tileInfo || this.rasterInfo.storageInfo.tileInfo, n2 = this.getTileExtentFromTileInfo(t2, e2, i2, r2);
    return this.fetchPixels(n2, r2.size[0], r2.size[1], o2);
  }
  async identify(t2, e2 = {}) {
    var _a, _b;
    t2 = v$1(w$2, t2).clone().normalize();
    const { multidimensionalDefinition: i2, timeExtent: o2 } = e2, { hasMultidimensionalTranspose: r2, multidimensionalInfo: l2 } = this.rasterInfo;
    let { transposedVariableName: c2 } = e2;
    const m2 = r$1(l2) && r2 && (o2 != null || f$2(i2));
    if (m2 && !c2) {
      c2 = r$1(i2) && i2.length > 0 ? (_a = i2[0].variableName) != null ? _a : void 0 : l2.variables[0].name, e2 = __spreadProps(__spreadValues({}, e2), { transposedVariableName: c2 });
    }
    e2 = this._getRequestOptionsWithSliceId(e2);
    const { spatialReference: f2, extent: u2 } = this.rasterInfo, { datumTransformation: p2 } = e2;
    let d2 = j$1(t2, f2, p2);
    if (!u2.intersects(d2))
      return { location: d2, value: null };
    if (r$1(this.rasterInfo.transform)) {
      const t3 = this.rasterInfo.transform.inverseTransform(d2);
      if (!this.rasterInfo.nativeExtent.intersects(t3))
        return { location: t3, value: null };
      d2 = t3;
    }
    let x2 = 0;
    const g2 = r$1(c2) && r$1(l2) && this.rasterInfo.hasMultidimensionalTranspose;
    if (!g2) {
      if (e2.srcResolution) {
        x2 = oe(e2.srcResolution, this.rasterInfo, this.ioConfig.sampling).pyramidLevel;
      } else if (x2 = await this.computeBestPyramidLevelForLocation(t2, e2), x2 == null)
        return { location: d2, value: null };
    }
    const y2 = this.identifyPixelLocation(d2, x2, null, g2);
    if (y2 === null)
      return { location: d2, value: null };
    const { row: R2, col: w2, rowOffset: k2, colOffset: T2, blockWidth: B } = y2, P2 = c2 != null ? c2 : e$1(e2.sliceId), W2 = a(this.url, P2), M = `${x2}/${R2}/${w2}`;
    let C2 = x$1(W2, null, M);
    t$2(C2) && (C2 = this.fetchRawTile(x2, R2, w2, e2), h$1(W2, null, M, C2));
    const _ = await C2;
    if (t$2(_) || !((_b = _.pixels) == null ? void 0 : _b.length))
      return { location: d2, value: null };
    const j2 = k2 * B + T2;
    return this._processIdentifyResult(_, { srcLocation: d2, position: j2, pyramidLevel: x2, useTransposedTile: !!g2, requestSomeSlices: m2, identifyOptions: e2 });
  }
  async fetchPixels(t2, e2, i2, o2 = {}) {
    if (t2 = ne(t2), (o2 = this._getRequestOptionsWithSliceId(o2)).requestRawData)
      return this._fetchPixels(t2, e2, i2, o2);
    const r2 = U$1(t2.spatialReference), n2 = Q(t2);
    if (t$2(r2) || n2 === 0 || n2 === 1 && this._isGlobalWrappableSource)
      return this._fetchPixels(t2, e2, i2, o2);
    if (n2 >= 3)
      return { extent: t2, pixelBlock: null };
    const s2 = [], { xmin: l2, xmax: c2 } = t2, m2 = Math.round(r2 / (c2 - l2) * e2), f2 = m2 - Math.round((r2 / 2 - l2) / (c2 - l2) * e2);
    let h2 = 0;
    const u2 = [];
    for (let a2 = 0; a2 <= n2; a2++) {
      const p3 = new w$3({ xmin: a2 === 0 ? l2 : -r2 / 2, xmax: a2 === n2 ? c2 - r2 * a2 : r2 / 2, ymin: t2.ymin, ymax: t2.ymax, spatialReference: t2.spatialReference }), d3 = a2 === 0 ? m2 - f2 : a2 === n2 ? e2 - h2 : m2;
      h2 += d3, u2.push(d3);
      const x3 = o2.disableWrapAround && a2 > 0 ? null : this._fetchPixels(p3, d3, i2, o2);
      s2.push(x3);
    }
    const p2 = (await Promise.all(s2)).map((t3) => t3 == null ? void 0 : t3.pixelBlock);
    let d2 = null;
    const x2 = { width: e2, height: i2 };
    if (this.rasterJobHandler) {
      d2 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: p2, srcMosaicSize: x2, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: u2 }, o2)).pixelBlock;
    } else
      d2 = T$1(p2, x2, { blockWidths: u2 });
    return { extent: t2, srcExtent: J$1(t2, this.rasterInfo.spatialReference, o2.datumTransformation), pixelBlock: d2 };
  }
  async fetchRawPixels(t2, e2, i2, o2 = {}) {
    e2 = { x: Math.floor(e2.x), y: Math.floor(e2.y) };
    const r2 = await this._fetchRawTiles(t2, e2, i2, o2), { nativeExtent: s2, nativePixelSize: a2, storageInfo: l2 } = this.rasterInfo, c2 = 2 ** t2, m2 = a2.x * c2, f2 = a2.y * c2, h2 = new w$3({ xmin: s2.xmin + m2 * e2.x, xmax: s2.xmin + m2 * (e2.x + i2.width - 1), ymin: s2.ymax - f2 * (e2.y + i2.height - 1), ymax: s2.ymax - f2 * e2.y, spatialReference: s2.spatialReference });
    if (!r2)
      return { extent: h2, srcExtent: h2, pixelBlock: null };
    const { pixelBlocks: u2, mosaicSize: p2 } = r2;
    if (u2.length === 1 && r$1(u2[0]) && u2[0].width === i2.width && u2[0].height === i2.height)
      return { extent: h2, srcExtent: h2, pixelBlock: r2.pixelBlocks[0] };
    const d2 = t2 > 0 ? l2.pyramidBlockWidth : l2.blockWidth, x2 = t2 > 0 ? l2.pyramidBlockHeight : l2.blockHeight, g2 = { x: e2.x % d2, y: e2.y % x2 };
    let y2;
    if (this.rasterJobHandler) {
      y2 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: u2, srcMosaicSize: p2, destDimension: i2, clipOffset: g2, clipSize: i2, coefs: null, sampleSpacing: null, interpolation: o2.interpolation, alignmentInfo: null, blockWidths: null }, o2)).pixelBlock;
    } else
      y2 = T$1(u2, p2, { clipOffset: g2, clipSize: i2 });
    return { extent: h2, srcExtent: h2, pixelBlock: y2 };
  }
  fetchRawTile(t2, e2, o2, r2) {
    throw new s$1("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(t2) {
    return J$1(this.rasterInfo.extent, t2);
  }
  decodePixelBlock(t2, e2) {
    return !this.rasterJobHandler || e2.useCanvas ? S$2(t2, e2) : this.rasterJobHandler.decode({ data: t2, options: e2 });
  }
  async request(t2, i2, o2 = 0) {
    var _a;
    const { customFetchParameters: r2 } = this.ioConfig, { range: n2, query: s2, headers: a2 } = i2;
    o2 = (_a = o2 != null ? o2 : i2.retryCount) != null ? _a : this.ioConfig.retryCount;
    const l2 = n2 ? { Range: `bytes=${n2.from}-${n2.to}` } : null;
    try {
      return await U$2(t2, __spreadProps(__spreadValues({}, i2), { query: __spreadValues(__spreadValues({}, s2), r2), headers: __spreadValues(__spreadValues({}, a2), l2) }));
    } catch (c2) {
      if (o2 > 0)
        return o2--, this.request(t2, i2, o2);
      throw c2;
    }
  }
  getSliceIndex(t2) {
    const { multidimensionalInfo: e2 } = this.rasterInfo;
    return t$2(e2) || t$2(t2) || t2.length === 0 ? null : g(t2, e2);
  }
  getTileExtentFromTileInfo(t2, e2, i2, o2) {
    const r2 = f$3(o2.lodAt(t2));
    return this.getTileExtent({ x: r2.resolution, y: r2.resolution }, e2, i2, o2.origin, o2.spatialReference, o2.size);
  }
  updateTileInfo() {
    const { storageInfo: t2, spatialReference: e2, extent: i2, pixelSize: o2 } = this.rasterInfo;
    if (!t2.tileInfo) {
      const r2 = [], n2 = t2.maximumPyramidLevel || 0;
      let s2 = Math.max(o2.x, o2.y), a2 = 1 / 0.0254 * 96 * s2;
      for (let t3 = 0; t3 <= n2; t3++)
        r2.push({ level: n2 - t3, resolution: s2, scale: a2 }), s2 *= 2, a2 *= 2;
      const l2 = new w$2({ x: i2.xmin, y: i2.ymax, spatialReference: e2 });
      t2.tileInfo = new j({ origin: l2, size: [t2.blockWidth, t2.blockHeight], spatialReference: e2, lods: r2 }), t2.isVirtualTileInfo = true;
    }
  }
  createRemoteDatasetStorageInfo(t2, e2 = 512, i2 = 512, o2) {
    const { width: r2, height: n2, nativeExtent: s2, pixelSize: a2, spatialReference: l2 } = t2, c2 = new w$2({ x: s2.xmin, y: s2.ymax, spatialReference: l2 });
    o2 == null && (o2 = Math.max(0, Math.round(Math.log(Math.max(r2, n2)) / Math.LN2 - 8)));
    const m2 = this.computeBlockBoundary(s2, 512, 512, { x: s2.xmin, y: s2.ymax }, [a2], o2);
    t2.storageInfo = new n$3({ blockWidth: e2, blockHeight: i2, pyramidBlockWidth: e2, pyramidBlockHeight: i2, origin: c2, firstPyramidLevel: 1, maximumPyramidLevel: o2, blockBoundary: m2 });
  }
  async computeBestPyramidLevelForLocation(t2, e2 = {}) {
    return 0;
  }
  computeBlockBoundary(t2, e2, i2, o2, r2, n2 = 0, s2 = 2) {
    if (r2.length === 1 && n2 > 0) {
      r2 = [...r2];
      let { x: t3, y: e3 } = r2[0];
      for (let i3 = 0; i3 < n2; i3++)
        t3 *= s2, e3 *= s2, r2.push({ x: t3, y: e3 });
    }
    const a2 = [], { x: l2, y: c2 } = o2;
    for (let m2 = 0; m2 < r2.length; m2++) {
      const { x: o3, y: n3 } = r2[m2];
      a2.push({ minCol: Math.floor((t2.xmin - l2 + 0.1 * o3) / e2 / o3), maxCol: Math.floor((t2.xmax - l2 - 0.1 * o3) / e2 / o3), minRow: Math.floor((c2 - t2.ymax + 0.1 * n3) / i2 / n3), maxRow: Math.floor((c2 - t2.ymin - 0.1 * n3) / i2 / n3) });
    }
    return a2;
  }
  getPyramidPixelSize(t2) {
    const { nativePixelSize: e2 } = this.rasterInfo, { pyramidResolutions: i2, pyramidScalingFactor: o2 } = this.rasterInfo.storageInfo;
    if (t2 === 0)
      return e2;
    if (r$1(i2) && i2.length)
      return i2[t2 - 1];
    const r2 = o2 ** t2;
    return { x: e2.x * r2, y: e2.y * r2 };
  }
  identifyPixelLocation(t2, e2, i2, o2) {
    const { spatialReference: r2, nativeExtent: s2, storageInfo: a2 } = this.rasterInfo, { maximumPyramidLevel: l2, origin: c2, transposeInfo: m2 } = a2, f2 = o2 && r$1(m2) ? m2.tileSize[0] : a2.blockWidth, h2 = o2 && r$1(m2) ? m2.tileSize[1] : a2.blockHeight, u2 = j$1(t2, r2, i2);
    if (!s2.intersects(u2))
      return null;
    if (e2 < 0 || e2 > l2)
      return null;
    const p2 = this.getPyramidPixelSize(e2), { x: d2, y: x2 } = p2, g2 = (c2.y - u2.y) / x2 / h2, y2 = (u2.x - c2.x) / d2 / f2, I2 = Math.min(h2 - 1, Math.floor((g2 - Math.floor(g2)) * h2)), R2 = Math.min(f2 - 1, Math.floor((y2 - Math.floor(y2)) * f2));
    return { pyramidLevel: e2, row: Math.floor(g2), col: Math.floor(y2), rowOffset: I2, colOffset: R2, blockWidth: f2, srcLocation: u2 };
  }
  getTileExtent(t2, e2, i2, o2, r2, n2) {
    const [s2, a2] = n2, l2 = o2.x + i2 * s2 * t2.x, c2 = l2 + s2 * t2.x, m2 = o2.y - e2 * a2 * t2.y, f2 = m2 - a2 * t2.y;
    return new w$3({ xmin: l2, xmax: c2, ymin: f2, ymax: m2, spatialReference: r2 });
  }
  getBlockWidthHeight(t2) {
    return { blockWidth: t2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: t2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(t2, e2, i2) {
    const o2 = this.rasterInfo.storageInfo.blockBoundary[t2];
    return !o2 || o2.maxRow < e2 || o2.maxCol < i2 || o2.minRow > e2 || o2.minCol > i2;
  }
  async _fetchPixels(t2, e2, i2, o2 = {}) {
    let r2 = Q(t2);
    if (r2 >= 2)
      return { extent: t2, pixelBlock: null };
    const a2 = this._getSourceDataInfo(t2, e2, i2, o2), { pyramidLevel: l2, pyramidResolution: c2, srcResolution: m2, srcExtent: f2, srcWidth: h2, srcHeight: u2 } = a2;
    if (h2 === 0 || u2 === 0)
      return { extent: t2, srcExtent: f2, pixelBlock: null };
    const p2 = e$1(this.rasterInfo.transform), d2 = (p2 == null ? void 0 : p2.type) === "gcs-shift", x2 = r$1(U$1(t2.spatialReference));
    !d2 && x2 || (r2 = Q(a2.srcExtent, d2));
    const g2 = this.rasterInfo.storageInfo, y2 = { x: Math.floor((f2.xmin - g2.origin.x) / c2.x + 0.1), y: Math.floor((g2.origin.y - f2.ymax) / c2.y + 0.1) }, I2 = await this._fetchRawTiles(l2, y2, { width: h2, height: u2, wrapCount: r2 }, o2);
    if (!I2)
      return { extent: t2, srcExtent: f2, pixelBlock: null };
    const R2 = l2 > 0 ? g2.pyramidBlockWidth : g2.blockWidth, w2 = l2 > 0 ? g2.pyramidBlockHeight : g2.blockHeight, k2 = R2 === h2 && w2 === u2 && y2.x % R2 == 0 && y2.y % w2 == 0, b2 = new w$2({ x: (t2.xmax - t2.xmin) / e2, y: (t2.ymax - t2.ymin) / i2, spatialReference: t2.spatialReference }), v2 = !t2.spatialReference.equals(this.rasterInfo.spatialReference), { datumTransformation: S2 } = o2;
    if (!v2 && k2 && I2.pixelBlocks.length === 1 && R2 === e2 && w2 === i2 && m2.x === b2.x && m2.y === b2.y)
      return { extent: t2, srcExtent: f2, pixelBlock: I2.pixelBlocks[0] };
    const T$22 = x2 && r$1(U$1(f2.spatialReference)), B = o2.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    B && !this.rasterJobHandler && await T();
    const P2 = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: t2, srcBufferExtent: I2.extent, pixelSize: b2.toJSON(), datumTransformation: S2, rasterTransform: p2, hasWrapAround: r2 > 0 || T$22, isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== false, includeGCSGrid: B }, o2) : $$1({ projectedExtent: t2, srcBufferExtent: I2.extent, pixelSize: b2, datumTransformation: S2, rasterTransform: p2, hasWrapAround: r2 > 0 || T$22, isAdaptive: false, includeGCSGrid: B });
    let H;
    const E2 = !o2.requestRawData, L2 = { rows: P2.spacing[0], cols: P2.spacing[1] }, z2 = e$1(this._getRasterTileAlignmentInfo(l2, I2.extent.xmin)), { pixelBlocks: F2, mosaicSize: O2, isPartiallyFilled: G2 } = I2;
    let J2 = null;
    if (this.rasterJobHandler) {
      const t3 = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: F2, srcMosaicSize: O2, destDimension: E2 ? { width: e2, height: i2 } : null, coefs: E2 ? P2.coefficients : null, sampleSpacing: E2 ? L2 : null, projectDirections: B, gcsGrid: B ? P2.gcsGrid : null, isUV: this.rasterInfo.dataType === "vector-uv", interpolation: o2.interpolation, alignmentInfo: z2, blockWidths: null }, o2);
      ({ pixelBlock: H, localNorthDirections: J2 } = t3);
    } else {
      const t3 = T$1(F2, O2, { alignmentInfo: z2 });
      H = E2 ? D(t3, { width: e2, height: i2 }, P2.coefficients, L2, o2.interpolation) : t3, B && P2.gcsGrid && (J2 = j$2({ width: e2, height: i2 }, P2.gcsGrid), H = m$2(H, this.rasterInfo.dataType, J2));
    }
    return o2.requestRawData || B ? { srcExtent: f2, pixelBlock: H, transformGrid: P2, localNorthDirections: J2, extent: t2, isPartiallyFilled: G2 } : { srcExtent: f2, extent: t2, pixelBlock: H };
  }
  async _fetchRawTiles(t2, e2, i2, o2) {
    const { origin: r2, blockBoundary: s2 } = this.rasterInfo.storageInfo, { blockWidth: a2, blockHeight: l2 } = this.getBlockWidthHeight(t2);
    let { x: c2, y: m2 } = e2, { width: f2, height: h2, wrapCount: u2 } = i2;
    const p2 = this._getRasterTileAlignmentInfo(t2, 0);
    o2.buffer && (c2 -= o2.buffer.cols, m2 -= o2.buffer.rows, f2 += 2 * o2.buffer.cols, h2 += 2 * o2.buffer.rows);
    let d2 = 0, x2 = 0, g2 = 0;
    if (u2 && r$1(p2)) {
      ({ worldColumnCountFromOrigin: x2, originColumnOffset: g2, rightPadding: d2 } = p2);
      x2 * p2.blockWidth - d2 >= c2 + f2 && (d2 = 0);
    }
    const y2 = Math.floor(c2 / a2), I2 = Math.floor(m2 / l2), R2 = Math.floor((c2 + f2 + d2 - 1) / a2), w2 = Math.floor((m2 + h2 + d2 - 1) / l2), k2 = s2[t2];
    if (!k2)
      return null;
    const { minRow: b2, minCol: v2, maxCol: S2, maxRow: T2 } = k2;
    if (u2 === 0 && (w2 < b2 || R2 < v2 || I2 > T2 || y2 > S2))
      return null;
    const B = new Array();
    let P2 = false;
    const W2 = this.ioConfig.allowPartialFill == null ? o2.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let L2 = I2; L2 <= w2; L2++)
      for (let e3 = y2; e3 <= R2; e3++) {
        let i3 = e3;
        if (!o2.disableWrapAround && u2 && r$1(p2) && x2 <= e3 && (i3 = e3 - x2 - g2), L2 >= b2 && i3 >= v2 && T2 >= L2 && S2 >= i3) {
          const e4 = this._fetchRawTile(t2, L2, i3, o2);
          W2 ? B.push(new Promise((t3) => {
            e4.then((e5) => t3(e5)).catch(() => {
              P2 = true, t3(null);
            });
          })) : B.push(e4);
        } else
          B.push(Promise.resolve(null));
      }
    if (B.length === 0)
      return null;
    const M = await Promise.all(B), C2 = { height: (w2 - I2 + 1) * l2, width: (R2 - y2 + 1) * a2 }, { spatialReference: _ } = this.rasterInfo, j2 = this.getPyramidPixelSize(t2), { x: H, y: E2 } = j2;
    return { extent: new w$3({ xmin: r2.x + y2 * a2 * H, xmax: r2.x + (R2 + 1) * a2 * H, ymin: r2.y - (w2 + 1) * l2 * E2, ymax: r2.y - I2 * l2 * E2, spatialReference: _ }), pixelBlocks: M, mosaicSize: C2, isPartiallyFilled: P2 };
  }
  _fetchRawTile(t2, e2, i2, o2) {
    const r2 = this.rasterInfo.storageInfo.blockBoundary[t2];
    if (!r2)
      return Promise.resolve(null);
    const { minRow: n2, minCol: s2, maxCol: l2, maxRow: c2 } = r2;
    if (e2 < n2 || i2 < s2 || e2 > c2 || i2 > l2)
      return Promise.resolve(null);
    const f2 = a(this.url, o2.sliceId), h2 = `${t2}/${e2}/${i2}`;
    let u2 = x$1(f2, o2.registryId, h2);
    if (t$2(u2)) {
      const r3 = new AbortController();
      u2 = this.fetchRawTile(t2, e2, i2, __spreadProps(__spreadValues({}, o2), { signal: r3.signal })), h$1(f2, o2.registryId, h2, u2, r3), u2.catch(() => d$2(f2, o2.registryId, h2));
    }
    return o2.signal && v$2(o2, () => {
      m$3(f2, o2.registryId, h2);
    }), u2;
  }
  _computeMagDirValues(t2) {
    var _a;
    const { bandCount: e2, dataType: i2 } = this.rasterInfo;
    if (!(e2 === 2 && i2 === "vector-magdir" || i2 === "vector-uv") || (t2 == null ? void 0 : t2.length) !== 2 || !((_a = t2[0]) == null ? void 0 : _a.length))
      return null;
    const o2 = t2[0].length;
    if (i2 === "vector-magdir") {
      const e3 = t2[1].map((t3) => (t3 + 360) % 360);
      return [t2[0], e3];
    }
    const [r2, n2] = t2, s2 = [], a2 = [];
    for (let l2 = 0; l2 < o2; l2++) {
      const [t3, e3] = f$4([r2[l2], n2[l2]]);
      s2.push(t3), a2.push(e3);
    }
    return [s2, a2];
  }
  _getRasterTileAlignmentInfo(t2, e2) {
    return this._rasterTileAlighmentInfo == null && (this._rasterTileAlighmentInfo = V$1(this.rasterInfo)), t$2(this._rasterTileAlighmentInfo.pyramidsInfo) ? null : __spreadValues({ startX: e2, halfWorldWidth: this._rasterTileAlighmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlighmentInfo.hasGCSSShiftTransform }, this._rasterTileAlighmentInfo.pyramidsInfo[t2]);
  }
  _getSourceDataInfo(t2, e2, i2, o2 = {}) {
    const r2 = { datumTransformation: o2.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0 };
    o2.srcResolution && (r2.srcResolution = o2.srcResolution, this._updateSourceDataInfo(t2, r2));
    const n2 = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: s2, srcHeight: a2, pyramidLevel: l2 } = r2, c2 = s2 / e2, m2 = a2 / i2, f2 = l2 < n2 && c2 * m2 >= 16;
    if (f2 || l2 === n2 && (c2 > V || m2 > V) || (s2 === 0 || a2 === 0)) {
      const s3 = new w$2({ x: (t2.xmax - t2.xmin) / e2, y: (t2.ymax - t2.ymin) / i2, spatialReference: t2.spatialReference });
      let a3 = C(s3, this.rasterInfo.spatialReference, t2, r2.datumTransformation);
      const h2 = !a3 || o2.srcResolution && a3.x + a3.y < o2.srcResolution.x + o2.srcResolution.y;
      if (f2 && o2.srcResolution && h2) {
        const t3 = Math.round(Math.log(Math.max(c2, m2)) / Math.LN2) - 1;
        if (n2 - l2 + 3 >= t3) {
          const e3 = 2 ** t3;
          a3 = { x: o2.srcResolution.x * e3, y: o2.srcResolution.y * e3 };
        }
      }
      a3 && (r2.srcResolution = a3, this._updateSourceDataInfo(t2, r2));
    }
    return (r2.srcWidth / e2 > V || r2.srcHeight / i2 > V) && (r2.srcWidth = 0, r2.srcHeight = 0), r2;
  }
  _updateSourceDataInfo(t2, e2) {
    e2.srcWidth = 0, e2.srcHeight = 0;
    const i2 = this.rasterInfo.spatialReference, { srcResolution: o2, datumTransformation: r2 } = e2, { pyramidLevel: n2, pyramidResolution: a2, excessiveReading: l2 } = oe(o2, this.rasterInfo, this.ioConfig.sampling);
    if (l2)
      return;
    let c2 = e2.srcExtent || J$1(t2, i2, r2);
    if (c2 == null)
      return;
    const m2 = e$1(this.rasterInfo.transform);
    m2 && (c2 = m2.inverseTransform(c2)), e2.srcExtent = c2;
    const f2 = Math.ceil((c2.xmax - c2.xmin) / a2.x - 0.1), h2 = Math.ceil((c2.ymax - c2.ymin) / a2.y - 0.1);
    e2.pyramidLevel = n2, e2.pyramidResolution = a2, e2.srcWidth = f2, e2.srcHeight = h2;
  }
  _getRequestOptionsWithSliceId(t2) {
    return r$1(this.rasterInfo.multidimensionalInfo) && t2.sliceId == null && (t2 = __spreadProps(__spreadValues({}, t2), { sliceId: this.getSliceIndex(t2.multidimensionalDefinition) })), t2;
  }
  _processIdentifyResult(t2, e2) {
    const { srcLocation: i2, position: o2, pyramidLevel: r2, useTransposedTile: n2 } = e2, l2 = t2.pixels[0].length / t2.width / t2.height;
    if (!(!t2.mask || t2.mask[o2]))
      return { location: i2, value: null };
    const { multidimensionalInfo: c2 } = this.rasterInfo;
    if (t$2(c2) || !n2) {
      const e3 = t2.pixels.map((t3) => t3[o2]), n3 = { location: i2, value: e3, pyramidLevel: r2 }, s2 = this._computeMagDirValues(e3.map((t3) => [t3]));
      return (s2 == null ? void 0 : s2.length) && (n3.magdirValue = s2.map((t3) => t3[0])), n3;
    }
    let m2 = t2.pixels.map((t3) => Array.prototype.slice.call(t3, o2 * l2, o2 * l2 + l2)), f2 = this._computeMagDirValues(m2);
    const { requestSomeSlices: h2, identifyOptions: u2 } = e2;
    let p2 = i$1(c2, u2.transposedVariableName);
    if (h2) {
      const t3 = s$2(p2, e$1(u2.multidimensionalDefinition), e$1(u2.timeExtent));
      m2 = m2.map((e3) => t3.map((t4) => e3[t4])), f2 = f2 == null ? void 0 : f2.map((e3) => t3.map((t4) => e3[t4])), p2 = t3.map((t4) => p2[t4]);
    }
    return { location: i2, value: null, dataSeries: p2.map((t3, e3) => {
      const i3 = { value: m2.map((t4) => t4[e3]), multidimensionalDefinition: t3.multidimensionalDefinition.map((t4) => new p$1(__spreadProps(__spreadValues({}, t4), { isSlice: true }))) };
      return (f2 == null ? void 0 : f2.length) && (i3.magdirValue = [f2[0][e3], f2[1][e3]]), i3;
    }), pyramidLevel: r2 };
  }
};
e$2([y$2()], $.prototype, "_rasterTileAlighmentInfo", void 0), e$2([y$2({ readOnly: true })], $.prototype, "_isGlobalWrappableSource", null), e$2([y$2(f$5)], $.prototype, "url", null), e$2([y$2({ type: String, json: { write: true } })], $.prototype, "datasetName", void 0), e$2([y$2({ type: String, json: { write: true } })], $.prototype, "datasetFormat", void 0), e$2([y$2()], $.prototype, "rasterInfo", void 0), e$2([y$2()], $.prototype, "ioConfig", void 0), e$2([y$2()], $.prototype, "sourceJSON", void 0), $ = e$2([n$4("esri.layers.support.rasterDatasets.BaseRaster")], $);
const U = $;
let n$2 = class extends U {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._primaryRasters = null;
  }
  async open(r2) {
    var _a;
    await this.init();
    const { rasterFunction: s2 } = this, { rasters: e2, rasterIds: o2 } = s2.getPrimaryRasters(), a2 = e2.map((t2) => t2.rasterInfo ? void 0 : t2.open(r2));
    await Promise.all(a2);
    const i2 = e2.map(({ rasterInfo: r3 }) => r3), n2 = s2.bind({ rasterInfos: i2, rasterIds: o2 });
    if (!n2.success)
      throw new s$1("raster-function:open", `cannot bind the function: ${(_a = n2.error) != null ? _a : ""}`);
    await this.syncJobHandler(), this.set("sourceJSON", e2[0].sourceJSON), this.set("rasterInfo", s2.rasterInfo);
  }
  async syncJobHandler() {
    const { rasterFunction: r2 } = this;
    if (this._primaryRasters = r2.getPrimaryRasters(), this.rasterJobHandler)
      return this.rasterJobHandler.updateRasterFunction(r2);
  }
  async fetchPixels(r2, t2, o2, a2 = {}) {
    var _a, _b;
    const { rasters: i2, rasterIds: n2 } = this._primaryRasters, c2 = i2.map((s2) => s2.fetchPixels(r2, t2, o2, a2)), p2 = await Promise.all(c2), l2 = p2.map((r3) => r3.pixelBlock);
    if (l2.every((r3) => t$2(r3)))
      return p2[0];
    const m2 = (_b = (_a = p2.find((r3) => r$1(r3.pixelBlock))) == null ? void 0 : _a.extent) != null ? _b : r2, u2 = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: m2, primaryPixelBlocks: l2, primaryRasterIds: n2 }) : this.rasterFunction.process({ extent: m2, primaryPixelBlocks: l2, primaryRasterIds: n2 });
    return __spreadProps(__spreadValues({}, p2[0]), { pixelBlock: u2 });
  }
};
e$2([y$2({ type: String, json: { write: true } })], n$2.prototype, "datasetFormat", void 0), e$2([y$2()], n$2.prototype, "tileType", void 0), e$2([y$2()], n$2.prototype, "rasterFunction", void 0), n$2 = e$2([n$4("esri.layers.support.rasterDatasets.FunctionRaster")], n$2);
const c$2 = n$2;
const w$1 = s.getLogger("esri.layers.mixins.ImageryTileMixin"), N$1 = (s2) => {
  let N2 = class extends s2 {
    constructor() {
      super(...arguments), this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.interpolation = "nearest", this.multidimensionalDefinition = null, this.multidimensionalSubset = null, this.raster = null, this.rasterFunction = null, this.sourceJSON = null, this.symbolizer = null;
    }
    get fullExtent() {
      var _a;
      return (_a = this.rasterInfo) == null ? void 0 : _a.extent;
    }
    get rasterInfo() {
      var _a;
      return (_a = this.raster) == null ? void 0 : _a.rasterInfo;
    }
    get spatialReference() {
      var _a, _b;
      return (_b = (_a = this.rasterInfo) == null ? void 0 : _a.spatialReference) != null ? _b : k.WGS84;
    }
    get tileInfo() {
      var _a;
      return (_a = this.rasterInfo) == null ? void 0 : _a.storageInfo.tileInfo;
    }
    set url(e2) {
      this._set("url", S$1(e2, w$1));
    }
    set renderer(e2) {
      this._set("renderer", e2), this.updateRenderer();
    }
    async convertVectorFieldData(e2, t2) {
      if (t$2(e2) || !this.rasterInfo)
        return null;
      const r2 = this._rasterJobHandler.instance, i2 = this.rasterInfo.dataType;
      return r2 ? r2.convertVectorFieldData({ pixelBlock: e2, dataType: i2 }, t2) : d$3(e2, i2);
    }
    async createFlowMesh(e2, t2) {
      const r2 = this._rasterJobHandler.instance;
      return r2 ? r2.createFlowMesh(e2, t2) : f$6(e2.meshType, e2.simulationSettings, e2.flowData, r$1(t2.signal) ? t2.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(e2) {
      var _a, _b, _c;
      const { multidimensionalInfo: t2 } = (_a = this.rasterInfo) != null ? _a : {};
      if (t$2(t2))
        return e2;
      let r2 = e2.multidimensionalDefinition || this.multidimensionalDefinition;
      !t$2(r2) && r2.length || (r2 = c$4(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset }));
      const i2 = e2.timeExtent || this.timeExtent;
      if (r$1(r2) && r$1(i2) && (r$1(i2.start) || r$1(i2.end))) {
        r2 = r2.map((e3) => e3.clone());
        const s3 = (_c = (_b = t2.variables.find(({ name: e3 }) => e3 === r2[0].variableName)) == null ? void 0 : _b.dimensions) == null ? void 0 : _c.find(({ name: e3 }) => e3 === "StdTime"), a2 = r2.find(({ dimensionName: e3 }) => e3 === "StdTime");
        if (!s3 || !a2)
          return __spreadProps(__spreadValues({}, e2), { multidimensionalDefinition: null });
        const { start: l2, end: m2 } = i2, u2 = t$2(l2) ? null : l2.getTime(), d2 = t$2(m2) ? null : m2.getTime(), h2 = u2 != null ? u2 : d2, c2 = d2 != null ? d2 : u2;
        if (r$1(s3.values)) {
          const e3 = s3.values.filter((e4) => {
            if (Array.isArray(e4)) {
              if (h2 === c2)
                return e4[0] <= h2 && e4[1] >= h2;
              const t3 = e4[0] <= h2 && e4[1] > h2 || e4[0] < c2 && e4[1] >= c2, r3 = e4[0] >= h2 && e4[1] <= c2 || e4[0] < h2 && e4[1] > c2;
              return t3 || r3;
            }
            return h2 === c2 ? e4 === h2 : e4 >= h2 && e4 <= c2;
          });
          if (e3.length) {
            const t3 = e3.sort((e4, t4) => {
              var _a2, _b2, _c2, _d;
              if (h2 === c2)
                return ((_a2 = e4[0]) != null ? _a2 : e4) - ((_b2 = t4[0]) != null ? _b2 : t4);
              return Math.abs(((_c2 = e4[1]) != null ? _c2 : e4) - c2) - Math.abs(((_d = t4[1]) != null ? _d : t4) - c2);
            })[0];
            a2.values = [t3];
          } else
            r2 = null;
        } else if (s3.hasRegularIntervals && s3.extent) {
          const [e3, t3] = s3.extent;
          h2 > t3 || c2 < e3 ? r2 = null : a2.values = h2 === c2 ? [h2] : [Math.max(e3, h2), Math.min(t3, c2)];
        }
      }
      return r$1(r2) && m$4(r2, this.multidimensionalSubset) ? __spreadProps(__spreadValues({}, e2), { multidimensionalDefinition: null }) : __spreadProps(__spreadValues({}, e2), { multidimensionalDefinition: r2 });
    }
    async updateRenderer() {
      const { loaded: e2, symbolizer: t2 } = this;
      if (!e2 || !t2)
        return;
      if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(this.renderer))
        return;
      const r2 = this._rasterJobHandler.instance;
      r2 && (t2.rendererJSON = $$2(this.renderer.toJSON()), t2.bind(), await r2.updateSymbolizer(t2), this._cachedRendererJson = this.renderer.toJSON());
    }
    async applyRenderer(e2, t2) {
      var _a;
      const r2 = e2 && e2.pixelBlock;
      if (!(r$1(r2) && r2.pixels && r2.pixels.length > 0))
        return null;
      let i2;
      await this.updateRenderer();
      const s3 = this._rasterJobHandler.instance, n2 = (_a = this.bandIds) != null ? _a : [];
      return i2 = s3 ? await s3.symbolize(__spreadProps(__spreadValues({}, e2), { simpleStretchParams: t2, bandIds: n2 })) : this.symbolizer.symbolize(__spreadProps(__spreadValues({}, e2), { simpleStretchParams: t2, bandIds: n2 })), i2;
    }
    getTileUrl(e2, t2, r2) {
      var _a;
      return ((_a = this.raster) == null ? void 0 : _a.datasetFormat) === "RasterTileServer" ? `${this.url}/tile/${e2}/${t2}/${r2}` : "";
    }
    getCompatibleTileInfo(e2, t2, r2 = false) {
      if (!this.loaded || t$2(t2))
        return null;
      if (r2 && e2.equals(this.spatialReference))
        return this.tileInfo;
      const i2 = R$1(e2);
      return j.create({ size: 256, spatialReference: e2, origin: i2 ? { x: i2.origin[0], y: i2.origin[1] } : { x: t2.xmin, y: t2.ymax } });
    }
    getCompatibleFullExtent(e2) {
      return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(e2) || (this._compatibleFullExtent = this.raster.computeExtent(e2)), this._compatibleFullExtent) : null;
    }
    async fetchTile(e2, t2, i2, s3 = {}) {
      if (O2(this), s3.requestAsImageElement) {
        const n2 = this.getTileUrl(e2, t2, i2);
        return U$2(n2, { responseType: "image", query: __spreadValues(__spreadValues({}, this.refreshParameters), this.raster.ioConfig.customFetchParameters), signal: s3.signal }).then((e3) => e3.data);
      }
      if (r$1(this.rasterInfo.multidimensionalInfo) && (s3 = this.normalizeRasterFetchOptions(s3), t$2(s3.multidimensionalDefinition))) {
        const r2 = s3.tileInfo || this.rasterInfo.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(e2, t2, i2, r2), pixelBlock: null };
      }
      return await this._initJobHandler(), await this._updateRasterFunction(), this.renderer.type === "raster-shaded-relief" && (s3 = __spreadProps(__spreadValues({}, s3), { buffer: { cols: 1, rows: 1 } })), this.raster.fetchTile(e2, t2, i2, s3);
    }
    async fetchPixels(e2, t2, r2, i2 = {}) {
      return r$1(this.rasterInfo.multidimensionalInfo) && (i2 = this.normalizeRasterFetchOptions(i2), t$2(i2.multidimensionalDefinition)) ? { extent: e2, pixelBlock: null } : (await this._initJobHandler(), await this._updateRasterFunction(), this.raster.fetchPixels(e2, t2, r2, i2));
    }
    async identify(e2, t2 = {}) {
      if (O2(this), r$1(this.rasterInfo.multidimensionalInfo)) {
        if (!(this.rasterInfo.hasMultidimensionalTranspose && !!(f$2(t2.multidimensionalDefinition) || t2.transposedVariableName || t2.timeExtent)) && (t2 = this.normalizeRasterFetchOptions(t2), t$2(t2.multidimensionalDefinition)))
          return { location: e2, value: null };
      }
      return this.raster.identify(e2, t2);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      var _a, _b, _c;
      const e2 = (_a = this.rasterInfo) == null ? void 0 : _a.multidimensionalInfo;
      if (t$2(e2) || ((_b = this.rasterInfo) == null ? void 0 : _b.dataType) !== "standard-time")
        return false;
      const t2 = this.multidimensionalDefinition, r2 = (_c = t2 == null ? void 0 : t2[0]) == null ? void 0 : _c.variableName;
      return e2.variables.some((e3) => e3.name === r2 && (!(t2 == null ? void 0 : t2[0].dimensionName) || e3.dimensions.some((e4) => e4.name === "StdTime")));
    }
    getStandardTimeValue(e2) {
      return new Date(24 * (e2 - 25569) * 3600 * 1e3).toString();
    }
    getMultidimensionalSubsetVariables(e2) {
      const t2 = e2 != null ? e2 : this.rasterInfo.multidimensionalInfo;
      return d$4(this.multidimensionalSubset, t2);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = c$4(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null)
        return this._rasterJobHandler.connectionPromise;
      const e2 = new n$5();
      return this._rasterJobHandler.connectionPromise = e2.initialize().then(() => {
        O2(this), this._rasterJobHandler.instance = e2, this.raster.rasterJobHandler = e2, this.renderer && this.updateRenderer(), this.raster.datasetFormat === "Function" && this.raster.syncJobHandler();
      }).catch(() => {
      }), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null, this.raster && (this.raster.rasterJobHandler = null);
    }
    _configDefaultInterpolation() {
      var _a;
      if (this.interpolation == null) {
        O2(this);
        const e2 = V$2(this.rasterInfo, this.raster.tileType, (_a = this.sourceJSON) == null ? void 0 : _a.defaultResamplingMethod);
        this._set("interpolation", e2);
      }
    }
    _configDefaultRenderer() {
      var _a, _b, _c, _d, _e;
      O2(this);
      const e2 = this.raster.rasterInfo;
      if (this.bandIds || (this.bandIds = L(e2)), !this.renderer) {
        const t3 = j$3(e2, { bandIds: this.bandIds, variableName: r$1(this.multidimensionalDefinition) ? (_a = this.multidimensionalDefinition[0]) == null ? void 0 : _a.variableName : null });
        this.raster.datasetFormat === "WCSServer" && t3.type === "raster-stretch" && (((_c = (_b = e2.statistics) == null ? void 0 : _b[0].max) != null ? _c : 0) > 1e24 || ((_e = (_d = e2.statistics) == null ? void 0 : _d[0].min) != null ? _e : 0) < -1e24) && (t3.dynamicRangeAdjustment = true, t3.statistics = null, t3.stretchType === "none" && (t3.stretchType = "min-max")), this.renderer = t3;
      }
      this.symbolizer ? (this.symbolizer.rendererJSON = $$2(this.renderer.toJSON()), this.symbolizer.rasterInfo = e2) : this.symbolizer = new T$2({ rendererJSON: this.renderer.toJSON(), rasterInfo: e2 });
      const t2 = this.symbolizer.bind();
      t2.success || w$1.warn("imagery-tile-mixin", t2.error || "The given renderer is not supported by the layer.");
    }
    async _updateRasterFunction() {
      var _a;
      if (this.type !== "imagery-tile" || JSON.stringify(this.rasterFunction) === JSON.stringify(this._cachedRasterFunctionJson))
        return;
      let e2 = this.raster;
      if ((e2 == null ? void 0 : e2.datasetFormat) === "Function") {
        const t3 = e2.rasterFunction.getPrimaryRasters();
        e2 = t3.rasters[0];
      }
      const { rasterFunction: t2 } = this;
      if (t2) {
        const r2 = l$3(t2.toJSON(), { raster: e2 }), i2 = new c$2({ rasterFunction: r2 });
        i2.rasterJobHandler = this._rasterJobHandler.instance, await i2.open(), this._cachedRasterFunctionJson = (_a = this.rasterFunction) == null ? void 0 : _a.toJSON(), this.raster = i2;
      } else
        this.raster = e2;
    }
  };
  function O2(e2) {
    if (!e2.raster || !e2.rasterInfo)
      throw new s$1("imagery-tile", "no raster");
  }
  return e$2([y$2()], N2.prototype, "_cachedRendererJson", void 0), e$2([y$2()], N2.prototype, "_cachedRasterFunctionJson", void 0), e$2([y$2()], N2.prototype, "_compatibleFullExtent", void 0), e$2([y$2()], N2.prototype, "_rasterJobHandler", void 0), e$2([y$2()], N2.prototype, "bandIds", void 0), e$2([y$2({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], N2.prototype, "copyright", void 0), e$2([y$2({ json: { read: false } })], N2.prototype, "fullExtent", null), e$2([y$2()], N2.prototype, "interpolation", void 0), e$2([y$2()], N2.prototype, "ioConfig", void 0), e$2([y$2({ type: [p$1] })], N2.prototype, "multidimensionalDefinition", void 0), e$2([y$2({ type: c$3, json: { write: true } })], N2.prototype, "multidimensionalSubset", void 0), e$2([y$2()], N2.prototype, "raster", void 0), e$2([y$2({ type: w$4 })], N2.prototype, "rasterFunction", void 0), e$2([y$2()], N2.prototype, "rasterInfo", null), e$2([y$2()], N2.prototype, "sourceJSON", void 0), e$2([y$2({ json: { read: false } })], N2.prototype, "spatialReference", null), e$2([y$2({ json: { read: false } })], N2.prototype, "tileInfo", null), e$2([y$2(f$5)], N2.prototype, "url", null), e$2([y$2({ types: l$2 })], N2.prototype, "renderer", null), e$2([y$2()], N2.prototype, "symbolizer", void 0), N2 = e$2([n$4("esri.layers.ImageryTileMixin")], N2), N2;
};
function t$1(e2) {
  const t2 = e2.fields, r2 = e2.records, n2 = t2.some((e3) => e3.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", i2 = [{ name: n2, type: "esriFieldTypeOID", alias: "OID" }].concat(t2.map((e3) => ({ name: e3.name, type: "esriFieldType" + e3.typeName, alias: e3.name }))), s2 = i2.map((e3) => e3.name), a2 = [];
  let o2 = 0, l2 = 0;
  return r2.forEach((e3) => {
    const t3 = {};
    for (t3[n2] = o2++, l2 = 1; l2 < s2.length; l2++)
      t3[s2[l2]] = e3[l2 - 1];
    a2.push({ attributes: t3 });
  }), { displayFieldName: "", fields: i2, features: a2 };
}
class r {
  static get supportedVersions() {
    return [5];
  }
  static parse(r2) {
    const n2 = new DataView(r2), i2 = 3 & n2.getUint8(0);
    if (i2 !== 3)
      return { header: { version: i2 }, recordSet: null };
    const s2 = n2.getUint32(4, true), a2 = n2.getUint16(8, true), o2 = n2.getUint16(10, true), l2 = { version: i2, recordCount: s2, headerByteCount: a2, recordByteCount: o2 };
    let p2 = 32;
    const g2 = [], u2 = [];
    let d2;
    if (i2 === 3) {
      for (; n2.getUint8(p2) !== 13; )
        d2 = String.fromCharCode(n2.getUint8(p2 + 11)).trim(), g2.push({ name: r$2(new Uint8Array(r2, p2, 11)), type: d2, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(d2)], length: n2.getUint8(p2 + 16) }), p2 += 32;
      if (p2 += 1, g2.length > 0)
        for (; u2.length < s2 && r2.byteLength - p2 > o2; ) {
          const t2 = [];
          n2.getUint8(p2) === 32 ? (p2 += 1, g2.forEach((n3) => {
            if (n3.type === "C")
              t2.push(r$2(new Uint8Array(r2, p2, n3.length)).trim());
            else if (n3.type === "N")
              t2.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(r2, p2, n3.length)).trim(), 10));
            else if (n3.type === "F")
              t2.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(r2, p2, n3.length)).trim()));
            else if (n3.type === "D") {
              const e2 = String.fromCharCode.apply(null, new Uint8Array(r2, p2, n3.length)).trim();
              t2.push(new Date(parseInt(e2.substring(0, 4), 10), parseInt(e2.substring(4, 6), 10) - 1, parseInt(e2.substring(6, 8), 10)));
            }
            p2 += n3.length;
          }), u2.push(t2)) : p2 += o2;
        }
    }
    return { header: l2, fields: g2, records: u2, recordSet: t$1({ fields: g2, records: u2 }) };
  }
}
const y$1 = new Map();
y$1.set("int16", "esriFieldTypeSmallInteger"), y$1.set("int32", "esriFieldTypeInteger"), y$1.set("int64", "esriFieldTypeInteger"), y$1.set("float32", "esriFieldTypeSingle"), y$1.set("float64", "esriFieldTypeDouble"), y$1.set("text", "esriFieldTypeString");
const x = 8;
let S = class extends U {
  constructor() {
    super(...arguments), this.storageInfo = null, this.datasetFormat = "CRF";
  }
  async open(e2) {
    await this.init();
    const { data: r2 } = await this.request(this.url + "/conf.json", { signal: e2 == null ? void 0 : e2.signal });
    if (!this._validateHeader(r2))
      throw new s$1("cloudraster:open", "Invalid or unsupported conf.json.");
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { storageInfo: i2, rasterInfo: o2 } = this._parseHeader(r2);
    if (o2.dataType === "thematic") {
      const e3 = await this._fetchAuxiliaryInformation();
      o2.attributeTable = e3;
    }
    this._set("storageInfo", i2), this._set("rasterInfo", o2), this.ioConfig.retryCount = this.ioConfig.retryCount || 0;
  }
  async fetchRawTile(e2, t2, r2, i2 = {}) {
    const { transposeInfo: o2 } = this.rasterInfo.storageInfo, { transposedVariableName: a2 } = i2, s2 = !(!o2 || !a2), n2 = s2 ? 0 : this.rasterInfo.storageInfo.maximumPyramidLevel - e2;
    if (n2 < 0)
      return null;
    const l2 = this._buildCacheFilePath(n2, t2, r2, i2.multidimensionalDefinition, a2), f2 = this._getIndexRecordFromBundle(t2, r2, s2), m2 = await this.request(l2, { range: { from: 0, to: this.storageInfo.headerSize - 1 }, responseType: "array-buffer", signal: i2.signal });
    if (!m2)
      return null;
    const c2 = new Uint8Array(m2.data), p2 = this._getTileEndAndContentType(c2, f2);
    if (p2.recordSize === 0)
      return null;
    const d2 = await this.request(l2, { range: { from: p2.position, to: p2.position + p2.recordSize }, responseType: "array-buffer", signal: i2.signal });
    if (!d2)
      return null;
    const [u2, h2] = this._getTileSize(s2);
    return this.decodePixelBlock(d2.data, { width: u2, height: h2, planes: null, pixelType: null, returnInterleaved: s2 });
  }
  _validateHeader(e2) {
    const t2 = ["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"];
    return e2 && e2.type === "RasterInfo" && !t2.some((t3) => !e2[t3]);
  }
  _parseHeader(e2) {
    var _a, _b;
    const t2 = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e2.pixelType], { bandCount: r2, histograms: i2, colormap: o2, blockWidth: a2, blockHeight: f2, firstPyramidLevel: m2, maximumPyramidLevel: c2 } = e2, p2 = e2.statistics && e2.statistics.map((e3) => ({ min: e3.min, max: e3.max, avg: e3.mean, stddev: e3.standardDeviation, median: e3.median, mode: e3.mode })), d2 = e2.extent.spatialReference, y2 = (_a = e2.geodataXform) == null ? void 0 : _a.spatialReference, S2 = new k((d2 == null ? void 0 : d2.wkid) || (d2 == null ? void 0 : d2.wkt) ? d2 : y2);
    let I2 = new w$3({ xmin: e2.extent.xmin, ymin: e2.extent.ymin, xmax: e2.extent.xmax, ymax: e2.extent.ymax, spatialReference: S2 });
    const w2 = new w$2({ x: e2.pixelSizeX, y: e2.pixelSizeY, spatialReference: S2 }), _ = Math.round((I2.xmax - I2.xmin) / w2.x), v2 = Math.round((I2.ymax - I2.ymin) / w2.y), b2 = this._parseTransform(e2.geodataXform), z2 = b2 ? I2 : null;
    b2 && (I2 = b2.forwardTransform(I2), w2.x = (I2.xmax - I2.xmin) / _, w2.y = (I2.ymax - I2.ymin) / v2);
    const T2 = (_b = e2.properties) != null ? _b : {}, k$12 = e2.format.toLowerCase().replace("cache/", ""), j$12 = new w$2(e2.origin.x, e2.origin.y, S2);
    let C2, R2, F2, P2;
    if (o2 && o2.colors)
      for (C2 = [], R2 = 0; R2 < o2.colors.length; R2++)
        F2 = o2.colors[R2], P2 = o2.values ? o2.values[R2] : R2, C2.push([P2, 255 & F2, F2 << 16 >>> 24, F2 << 8 >>> 24, F2 >>> 24]);
    const H = e2.LODInfos, D2 = [];
    for (R2 = 0; R2 < H.levels.length; R2++)
      D2.push({ level: H.levels[R2], resolution: H.resolutions[R2], scale: 96 / 0.0254 * H.resolutions[R2] });
    const L2 = new j({ dpi: 96, lods: D2, format: k$12, origin: j$12, size: [a2, f2], spatialReference: S2 }), M = { recordSize: x, packetSize: e2.packetSize, headerSize: e2.packetSize * e2.packetSize * x + 64 }, B = [{ maxCol: Math.ceil(_ / a2) - 1, maxRow: Math.ceil(v2 / f2) - 1, minCol: 0, minRow: 0 }];
    let O2 = 2;
    if (c2 > 0)
      for (R2 = 0; R2 < c2; R2++)
        B.push({ maxCol: Math.ceil(_ / O2 / a2) - 1, maxRow: Math.ceil(v2 / O2 / f2) - 1, minCol: 0, minRow: 0 }), O2 *= 2;
    const $2 = e2.mdInfo;
    let N2 = null;
    if ($2 && T2._yxs) {
      const e3 = T2._yxs;
      N2 = { packetSize: e3.PacketSize, tileSize: [e3.TileXSize, e3.TileYSize] };
    }
    return { storageInfo: M, rasterInfo: new u$2({ width: _, height: v2, pixelType: t2, bandCount: r2, extent: I2, nativeExtent: z2, transform: b2, spatialReference: S2, pixelSize: w2, keyProperties: T2, statistics: p2, histograms: i2, multidimensionalInfo: $2, colormap: C2, storageInfo: new n$3({ blockWidth: a2, blockHeight: f2, pyramidBlockWidth: a2, pyramidBlockHeight: f2, origin: j$12, tileInfo: L2, transposeInfo: N2, firstPyramidLevel: m2, maximumPyramidLevel: c2, blockBoundary: B }) }) };
  }
  _parseTransform(e2) {
    var _a, _b;
    if (!f$7(e2))
      throw new s$1("cloudraster:open", "the data contains unsupported geodata transform types");
    const r2 = i$2(e2);
    if (r2.type === "identity")
      return null;
    if (r2.type !== "polynomial" || !((_a = r2.forwardCoefficients) == null ? void 0 : _a.length) || !((_b = r2.inverseCoefficients) == null ? void 0 : _b.length))
      throw new s$1("cloudraster:open", "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");
    return r2;
  }
  async _fetchAuxiliaryInformation(e2) {
    const t2 = this.request(this.url + "/conf.vat.json", { signal: e2 }).then((e3) => e3.data).catch(() => null), r$12 = this.request(this.url + "/conf.vat.dbf", { responseType: "array-buffer", signal: e2 }).then((e3) => e3.data).catch(() => null), i2 = await Promise.all([t2, r$12]);
    let o2;
    if (i2[0]) {
      let e3 = i2[0].fields;
      const t3 = i2[0].values;
      if (e3 && t3) {
        e3 = e3.map((e4) => ({ type: e4.name === "OID" ? "esriFieldTypeOID" : y$1.get(e4.type), name: e4.name, alias: e4.alias || e4.name }));
        const r2 = t3.map((e4) => ({ attributes: e4 }));
        e3 && t3 && (o2 = { fields: e3, features: r2 });
      }
    }
    if (!o2 && i2[1]) {
      o2 = r.parse(i2[1]).recordSet;
    }
    return x$2.fromJSON(o2);
  }
  _buildCacheFilePath(e2, t2, i2, o2, a2) {
    const s2 = this._getPackageSize(!!a2), n2 = Math.floor(t2 / s2) * s2, l2 = Math.floor(i2 / s2) * s2, f2 = "R" + this._toHexString4(n2) + "C" + this._toHexString4(l2);
    let m2 = "L";
    m2 += e2 >= 10 ? e2.toString() : "0" + e2.toString();
    const { multidimensionalInfo: c2 } = this.rasterInfo, p2 = o2 == null ? void 0 : o2[0];
    if (t$2(c2) || !p2)
      return `${this.url}/_alllayers/${m2}/${f2}.bundle`;
    let d2 = "_yxs";
    if (!a2) {
      d2 = c2.variables.find((e4) => e4.name === p2.variableName).dimensions[0].values.indexOf(p2.values[0]).toString(16);
      const e3 = 4 - d2.length;
      for (let t3 = 0; t3 < e3; t3++)
        d2 = "0" + d2;
      d2 = "S" + d2;
    }
    const u2 = this._getVariableFolderName(a2 || p2.variableName);
    return `${this.url}/_alllayers/${u2}/${d2}/${m2}/${f2}.bundle`;
  }
  _getPackageSize(e2 = false) {
    var _a;
    const { transposeInfo: t2 } = this.rasterInfo.storageInfo;
    return e2 && r$1(t2) ? (_a = t2.packetSize) != null ? _a : 0 : this.storageInfo.packetSize;
  }
  _getTileSize(e2 = false) {
    const { storageInfo: t2 } = this.rasterInfo, { transposeInfo: r2 } = t2;
    return e2 && r$1(r2) ? r2.tileSize : t2.tileInfo.size;
  }
  _getVariableFolderName(e2) {
    return (e2 = e2.trim()) === "" ? "_v" : e2.replace(/[\{|\}\-]/g, "_").replace("\\*", "_v");
  }
  _getIndexRecordFromBundle(e2, t2, r2 = false) {
    const i2 = this._getPackageSize(r2), o2 = i2 * (e2 % i2) + t2 % i2;
    if (o2 < 0)
      throw "Invalid level / row / col";
    return 20 + o2 * this.storageInfo.recordSize + 44;
  }
  _getTileEndAndContentType(e2, t2) {
    const r2 = e2.subarray(t2, t2 + 8);
    let i2, o2 = 0;
    for (i2 = 0; i2 < 5; i2++)
      o2 |= (255 & r2[i2]) << 8 * i2;
    const a2 = 1099511627775 & o2;
    for (o2 = 0, i2 = 5; i2 < 8; i2++)
      o2 |= (255 & r2[i2]) << 8 * (i2 - 5);
    return { position: a2, recordSize: 1099511627775 & o2 };
  }
  _toHexString4(e2) {
    let t2 = e2.toString(16);
    if (t2.length !== 4) {
      let e3 = 4 - t2.length;
      for (; e3-- > 0; )
        t2 = "0" + t2;
    }
    return t2;
  }
};
e$2([y$2({ readOnly: true })], S.prototype, "storageInfo", void 0), e$2([y$2({ type: String, json: { write: true } })], S.prototype, "datasetFormat", void 0), S = e$2([n$4("esri.layers.support.rasterDatasets.CloudRaster")], S);
const I$2 = S;
let h = class extends U {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.data = null;
  }
  async open(t2) {
    var _a, _b;
    await this.init();
    const e2 = this.data, { pixelBlock: s2, statistics: r2, histograms: i2, name: o2, keyProperties: m2, nativeExtent: n2, transform: l2 } = this.data, { width: h2, height: f2, pixelType: d2 } = s2, u2 = (_a = e2.extent) != null ? _a : new w$3({ xmin: -0.5, ymin: 0.5, xmax: h2 - 0.5, ymax: f2 - 0.5, spatialReference: new k({ wkid: 3857 }) }), y2 = (_b = e2.isPseudoSpatialReference) != null ? _b : !e2.extent, x2 = { x: u2.width / h2, y: u2.height / f2 }, g2 = new u$2({ width: h2, height: f2, pixelType: d2, extent: u2, nativeExtent: n2, transform: l2, pixelSize: x2, spatialReference: u2.spatialReference, bandCount: 3, keyProperties: m2 || {}, statistics: r2, isPseudoSpatialReference: y2, histograms: i2 });
    this.createRemoteDatasetStorageInfo(g2, 512, 512), this._set("rasterInfo", g2), this.updateTileInfo(), await this._buildInMemoryRaster(s2, { width: 512, height: 512 }, t2), this.datasetName = o2, this.url = "/InMemory/" + o2;
  }
  fetchRawTile(t2, e2, s2, r2 = {}) {
    const i2 = this._pixelBlockTiles.get(`${t2}/${e2}/${s2}`);
    return Promise.resolve(i2);
  }
  async _buildInMemoryRaster(t2, i2, o2) {
    var _a, _b;
    const a2 = this.rasterInfo.storageInfo.maximumPyramidLevel, m2 = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: t2, tileSize: i2, maximumPyramidLevel: a2 }, o2) : Promise.resolve(W(t2, i2, a2)), p2 = r$1(this.rasterInfo.statistics), c2 = r$1(this.rasterInfo.histograms), h2 = p2 ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: t2 }, o2) : Promise.resolve(p$2(t2)), f2 = await E$1([m2, h2]);
    if (!f2[0].value && f2[1].value)
      throw new s$1("inmemory-raster:open", "failed to build in memory raster");
    this._pixelBlockTiles = f2[0].value, p2 || (this.rasterInfo.statistics = (_a = f2[1].value) == null ? void 0 : _a.statistics), c2 || (this.rasterInfo.histograms = (_b = f2[1].value) == null ? void 0 : _b.histograms);
  }
};
e$2([y$2({ type: String, json: { write: true } })], h.prototype, "datasetFormat", void 0), e$2([y$2()], h.prototype, "data", void 0), h = e$2([n$4("esri.layers.support.rasterDatasets.InMemoryRaster")], h);
const f$1 = h;
function n$1(e2, t2) {
  if (!e2 || !t2)
    return [];
  let l2 = t2;
  t2.includes("/") ? (l2 = t2.slice(0, t2.indexOf("/")), t2 = t2.slice(t2.indexOf("/") + 1)) : t2 = "";
  const r2 = [];
  if (t2) {
    const u3 = n$1(e2, l2);
    for (let e3 = 0; e3 < u3.length; e3++) {
      n$1(u3[e3], t2).forEach((n2) => r2.push(n2));
    }
    return r2;
  }
  const u2 = e2.getElementsByTagNameNS("*", l2);
  if (!u2 || u2.length === 0)
    return [];
  for (let n2 = 0; n2 < u2.length; n2++)
    r2.push(u2[n2] || u2.item[n2]);
  return r2;
}
function e(t2, l2) {
  if (!t2 || !l2)
    return null;
  let r2 = l2;
  l2.includes("/") ? (r2 = l2.slice(0, l2.indexOf("/")), l2 = l2.slice(l2.indexOf("/") + 1)) : l2 = "";
  const u2 = n$1(t2, r2);
  return u2.length > 0 ? l2 ? e(u2[0], l2) : u2[0] : null;
}
function t(n2, t2 = null) {
  const l2 = t2 ? e(n2, t2) : n2;
  let r2;
  return l2 ? (r2 = l2.textContent || l2.nodeValue, r2 ? r2.trim() : null) : null;
}
function l(e2, t2) {
  const l2 = n$1(e2, t2), r2 = [];
  let u2;
  for (let n2 = 0; n2 < l2.length; n2++)
    u2 = l2[n2].textContent || l2[n2].nodeValue, u2 && (u2 = u2.trim(), u2 !== "" && r2.push(u2));
  return r2;
}
function u$1(n2, e2) {
  return l(n2, e2).map((n3) => Number(n3));
}
function o(n2, e2) {
  const l2 = t(n2, e2);
  return Number(l2);
}
function i(n2, e2) {
  var _a;
  const t2 = (_a = n2 == null ? void 0 : n2.nodeName) == null ? void 0 : _a.toLowerCase(), l2 = e2.toLowerCase();
  return t2.slice(t2.lastIndexOf(":") + 1) === l2;
}
function f(e2, t2) {
  if (!e2 || !t2)
    return null;
  const n2 = [];
  for (let r2 = 0; r2 < e2.length; r2++)
    n2.push(e2[r2]), n2.push(t2[r2]);
  return n2;
}
function u(e$12) {
  var _a;
  const t$12 = e(e$12, "GeodataXform"), r2 = m(o(t$12, "SpatialReference/WKID") || t(t$12, "SpatialReference/WKT"));
  if (t$12.getAttribute("xsi:type") !== "typens:PolynomialXform")
    return { spatialReference: r2, transform: null };
  const o$12 = (_a = o(t$12, "PolynomialOrder")) != null ? _a : 1, u2 = u$1(t$12, "CoeffX/Double"), c2 = u$1(t$12, "CoeffY/Double"), d2 = u$1(t$12, "InverseCoeffX/Double"), p2 = u$1(t$12, "InverseCoeffY/Double"), S2 = f(u2, c2), C2 = f(d2, p2);
  return { spatialReference: r2, transform: S2 && C2 && S2.length && C2.length ? new m$5({ spatialReference: r2, polynomialOrder: o$12, forwardCoefficients: S2, inverseCoefficients: C2 }) : null };
}
function c$1(e$12) {
  var _a;
  const t$12 = o(e$12, "NoDataValue"), i2 = e(e$12, "Histograms/HistItem"), l2 = o(i2, "HistMin"), o$12 = o(i2, "HistMax"), f2 = o(i2, "BucketCount"), u2 = (_a = t(i2, "HistCounts")) == null ? void 0 : _a.split("|").map((e2) => Number(e2));
  let c2, m2, d2, p2;
  n$1(e$12, "Metadata/MDI").forEach((e2) => {
    var _a2;
    const t2 = Number((_a2 = e2.textContent) != null ? _a2 : e2.nodeValue);
    switch (e2.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        c2 = t2;
        break;
      case "STATISTICS_MAXIMUM":
        m2 = t2;
        break;
      case "STATISTICS_MEAN":
        d2 = t2;
        break;
      case "STATISTICS_STDDEV":
        p2 = t2;
    }
  });
  const S2 = o(e$12, "Metadata/SourceBandIndex");
  return { noDataValue: t$12, histogram: (u2 == null ? void 0 : u2.length) && l2 != null && o$12 != null ? { min: l2, max: o$12, size: f2 || u2.length, counts: u2 } : null, sourceBandIndex: S2, statistics: c2 != null && m2 != null ? { min: c2, max: m2, avg: d2, stddev: p2 } : null };
}
function m(e2) {
  if (!e2)
    return null;
  let t2 = Number(e2);
  if (!isNaN(t2) && t2 !== 0)
    return new k({ wkid: t2 });
  if ((e2 = String(e2)).startsWith("COMPD_CS")) {
    if (!e2.includes("VERTCS") || !e2.includes("GEOGCS") && !e2.startsWith("PROJCS"))
      return null;
    const n2 = e2.indexOf("VERTCS"), r2 = e2.indexOf("PROJCS"), s2 = r2 > -1 ? r2 : e2.indexOf("GEOGCS");
    if (s2 === -1)
      return null;
    const a2 = e2.slice(s2, e2.lastIndexOf("]", n2) + 1).trim(), i2 = e2.slice(n2, e2.lastIndexOf("]")).trim();
    t2 = d$1(a2);
    const l2 = new k(t2 ? { wkid: t2 } : { wkt: a2 }), f2 = d$1(i2);
    return f2 && (l2.vcsWkid = f2), l2;
  }
  return e2.startsWith("GEOGCS") || e2.startsWith("PROJCS") ? (t2 = d$1(e2), new k(t2 !== 0 ? { wkid: t2 } : { wkt: e2 })) : null;
}
function d$1(e2) {
  var _a;
  const t2 = e2.replace(/\]/g, "[").replace(/\"/g, "").split("[").map((e3) => e3.trim()).filter((e3) => e3 !== ""), n2 = t2[t2.length - 1].split(","), r2 = (_a = n2[0]) == null ? void 0 : _a.toLowerCase();
  if ((r2 === "epsg" || r2 === "esri") && e2.endsWith('"]]')) {
    const e3 = Number(n2[1]);
    if (!isNaN(e3) && e3 !== 0)
      return e3;
  }
  return 0;
}
function p(s2) {
  var _a;
  if (((_a = s2 == null ? void 0 : s2.documentElement.tagName) == null ? void 0 : _a.toLowerCase()) !== "pamdataset")
    return {};
  const a2 = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  s2.documentElement.childNodes.forEach((e2) => {
    if (e2.nodeType === 1) {
      if (i(e2, "SRS")) {
        if (!a2.spatialReference) {
          const t$12 = t(e2);
          a2.spatialReference = m(t$12);
        }
      } else if (i(e2, "Metadata"))
        if (e2.getAttribute("domain") === "xml:ESRI") {
          const { spatialReference: t2, transform: n2 } = u(e2);
          a2.transform = n2, a2.spatialReference || (a2.spatialReference = t2);
        } else {
          n$1(e2, "MDI").forEach((e3) => a2.metadata[e3.getAttribute("key")] = t(e3));
        }
      else if (i(e2, "PAMRasterBand")) {
        const t2 = c$1(e2);
        t2.sourceBandIndex != null && a2.rasterBands[t2.sourceBandIndex] == null ? a2.rasterBands[t2.sourceBandIndex] = t2 : a2.rasterBands.push(t2);
      }
    }
  });
  const i$12 = a2.rasterBands;
  if (i$12.length) {
    const t2 = !!i$12[0].statistics;
    a2.statistics = t2 ? i$12.map((e2) => e2.statistics).filter(r$1) : null;
    const n2 = !!i$12[0].histogram;
    a2.histograms = n2 ? i$12.map((e2) => e2.histogram).filter(r$1) : null;
  }
  return a2;
}
let d = class extends U {
  async open(t2) {
    await this.init();
    const s2 = await this._fetchData(t2);
    let { spatialReference: e2, statistics: r2, histograms: a2, transform: o2 } = await this._fetchAuxiliaryData(t2);
    const i2 = !e2;
    i2 && (e2 = new k({ wkid: 3857 })), (a2 == null ? void 0 : a2.length) && r2 == null && (r2 = g$1(a2));
    const { width: n2, height: l2 } = s2;
    let p2 = new w$3({ xmin: -0.5, ymin: 0.5 - l2, xmax: n2 - 0.5, ymax: 0.5, spatialReference: e2 });
    const f2 = o2 ? o2.forwardTransform(p2) : p2;
    let d2 = true;
    if (o2) {
      const t3 = o2.forwardCoefficients;
      d2 = t3 && t3[1] === 0 && t3[2] === 0, d2 && (o2 = null, p2 = f2);
    }
    const y2 = new f$1({ data: { extent: f2, nativeExtent: p2, transform: o2, pixelBlock: s2, statistics: r2, histograms: a2, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: i2 } });
    await y2.open(), y2.data = null, this._set("rasterInfo", y2.rasterInfo), this._inMemoryRaster = y2;
  }
  fetchRawTile(t2, s2, e2, r2 = {}) {
    return this._inMemoryRaster.fetchRawTile(t2, s2, e2, r2);
  }
  async _fetchData(t2) {
    const { data: e2 } = await this.request(this.url, { responseType: "array-buffer", signal: t2 == null ? void 0 : t2.signal }), r2 = P(e2).toUpperCase();
    if (r2 !== "JPG" && r2 !== "PNG" && r2 !== "GIF" && r2 !== "BMP")
      throw new s$1("image-aux-raster:open", "the data is not a supported format");
    this._set("datasetFormat", r2);
    const a2 = r2.toLowerCase(), o2 = a2 === "gif" || a2 === "bmp" || !has("ios");
    return await this.decodePixelBlock(e2, { format: a2, useCanvas: o2, hasNoZlibMask: true });
  }
  async _fetchAuxiliaryData(t2) {
    var _a, _b;
    const s2 = e$1(t2 == null ? void 0 : t2.signal), o2 = (_a = this.ioConfig.skipExtensions) != null ? _a : [], i2 = o2.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: s2 }), n2 = this.datasetFormat, m2 = n2 === "JPG" ? "jgw" : n2 === "PNG" ? "pgw" : n2 === "BMP" ? "bpw" : null, p$12 = m2 && o2.includes(m2) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + m2, { responseType: "text", signal: s2 }), c2 = await E$1([i2, p$12]);
    if (s2 == null ? void 0 : s2.aborted)
      throw a$1();
    const u2 = p((_b = c2[0].value) == null ? void 0 : _b.data);
    if (!u2.transform) {
      const t3 = c2[1].value ? c2[1].value.data.split("\n").slice(0, 6).map((t4) => Number(t4)) : null;
      u2.transform = (t3 == null ? void 0 : t3.length) === 6 ? new m$5({ forwardCoefficients: [t3[4], t3[5], t3[0], -t3[1], t3[2], -t3[3]] }) : null;
    }
    return u2;
  }
};
e$2([y$2({ type: String, json: { write: true } })], d.prototype, "datasetFormat", void 0), d = e$2([n$4("esri.layers.support.rasterDatasets.ImageAuxRaster")], d);
const y = d;
let I$1 = class extends U {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  async open(e2) {
    var _a, _b, _c, _d;
    await this.init();
    const r2 = e2 && e2.signal, a2 = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: r2 });
    a2.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const o2 = a2.data;
    if (this.sourceJSON = o2, !o2)
      throw new s$1("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!o2.tileInfo)
      throw new s$1("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const n2 = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = o2.cacheType, this.tileType == null && (n2.includes(o2.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : o2.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = (_b = (_a = o2.name) == null ? void 0 : _a.slice(o2.name.indexOf("/") + 1)) != null ? _b : "";
    const c2 = await this._fetchRasterInfo({ signal: r2 });
    if (t$2(c2))
      throw new s$1("image-server-raster:open", "cannot initialize image service");
    const u2 = this.tileType === "Map" ? n$6(o2.tileInfo, o2) : j.fromJSON(o2.tileInfo);
    c$5(u2);
    const [y2, d2] = this._computeMinMaxLOD(c2, u2), { extent: x2, pixelSize: g2 } = c2, v2 = 0.5 / c2.width * g2.x, S2 = Math.max(g2.x, g2.y), { lods: I2 } = u2;
    (this.tileType !== "Map" && o2.maxScale !== 0 || Math.abs(g2.x - g2.y) > v2 || !I2.some((e3) => Math.abs(e3.resolution - S2) < v2)) && (g2.x = g2.y = y2.resolution, c2.width = Math.ceil((x2.xmax - x2.xmin) / g2.x - 0.1), c2.height = Math.ceil((x2.ymax - x2.ymin) / g2.y - 0.1));
    const w2 = y2.level - d2.level, [j$12, T2] = u2.size, b2 = [];
    I2.forEach((e3) => {
      e3.level >= d2.level && e3.level <= y2.level && b2.push({ x: e3.resolution, y: e3.resolution });
    }), b2.sort((e3, t2) => e3.x - t2.x);
    const _ = this.computeBlockBoundary(x2, j$12, T2, u2.origin, b2, w2), M = b2.length > 1 ? b2.slice(1) : null;
    let R2;
    if (o2.transposeInfo && (R2 = { tileSize: [o2.transposeInfo.rows, o2.transposeInfo.cols], packetSize: (_d = (_c = c2.keyProperties) == null ? void 0 : _c._yxs.PacketSize) != null ? _d : 0 }), c2.storageInfo = new n$3({ blockWidth: u2.size[0], blockHeight: u2.size[1], pyramidBlockWidth: u2.size[0], pyramidBlockHeight: u2.size[1], pyramidResolutions: M, compression: u2.format, origin: u2.origin, firstPyramidLevel: 1, maximumPyramidLevel: w2, tileInfo: u2, transposeInfo: R2, blockBoundary: _ }), this._fixGCSShift(c2), this._set("rasterInfo", c2), o2.capabilities.toLowerCase().includes("tilemap")) {
      const e3 = { tileInfo: c2.storageInfo.tileInfo, parsedUrl: j$4(this.url), url: this.url, tileServers: [], type: "tile" };
      this._tilemapCache = new z({ layer: e3 });
    }
  }
  async fetchRawTile(e2, t2, i2, s2 = {}) {
    const { storageInfo: a2, extent: l2 } = this.rasterInfo, { transposeInfo: o2 } = a2, n2 = r$1(o2) && !!s2.transposedVariableName;
    if (this._slices && !n2 && s2.sliceId == null)
      return null;
    const c2 = n2 ? 0 : a2.maximumPyramidLevel - e2 + this._levelOffset, m2 = `${this.url}/tile/${c2}/${t2}/${i2}`, h2 = this._slices ? n2 ? { variable: s2.transposedVariableName } : { sliceId: s2.sliceId || 0 } : null, { data: f2 } = await this.request(m2, { query: h2, responseType: "array-buffer", signal: s2.signal });
    if (!f2)
      return null;
    const p2 = n2 ? o2.tileSize : a2.tileInfo.size, u2 = await this.decodePixelBlock(f2, { width: p2[0], height: p2[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation", returnInterleaved: n2 }), d2 = a2.blockBoundary[e2];
    if (a2.compression !== "jpg" || i2 > d2.minCol && i2 < d2.maxCol && t2 > d2.minRow && t2 < d2.maxRow)
      return u2;
    const { origin: x2, blockWidth: g2, blockHeight: v2 } = a2, { x: S2, y: I2 } = this.getPyramidPixelSize(e2), w2 = Math.round((l2.xmin - x2.x) / S2) % g2, j2 = Math.round((l2.xmax - x2.x) / S2) % g2 || g2, T2 = Math.round((x2.y - l2.ymax) / I2) % v2, b2 = Math.round((x2.y - l2.ymin) / I2) % v2 || v2, _ = i2 === d2.minCol ? w2 : 0, M = t2 === d2.minRow ? T2 : 0, R2 = i2 === d2.maxCol ? j2 : g2, z2 = t2 === d2.maxRow ? b2 : v2;
    return b$1(u2, { x: _, y: M }, { width: R2 - _, height: z2 - M }), u2;
  }
  getSliceIndex(e2) {
    if (!this._slices || t$2(e2) || e2.length === 0)
      return null;
    const t2 = e2;
    for (let i2 = 0; i2 < this._slices.length; i2++) {
      const e3 = this._slices[i2].multidimensionalDefinition;
      if (e3.length === t2.length && !e3.some((e4) => {
        const i3 = t2.find((t3) => e4.variableName === t3.variableName && t3.dimensionName === e4.dimensionName);
        if (!i3)
          return true;
        return (Array.isArray(e4.values[0]) ? `${e4.values[0][0]}-${e4.values[0][1]}` : e4.values[0]) !== (Array.isArray(i3.values[0]) ? `${i3.values[0][0]}-${i3.values[0][1]}` : i3.values[0]);
      }))
        return i2;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(e2, t2) {
    const i2 = this.request(this.url + "/statistics", { query: { variable: e2, f: "json" }, signal: t2 }).then((e3) => {
      var _a;
      return (_a = e3.data) == null ? void 0 : _a.statistics;
    }), s2 = this.request(this.url + "/histograms", { query: { variable: e2, f: "json" }, signal: t2 }).then((e3) => {
      var _a;
      return (_a = e3.data) == null ? void 0 : _a.histograms;
    }), r2 = await Promise.all([i2, s2]);
    return r2[0] && r2[0].forEach((e3) => {
      e3.avg = e3.mean, e3.stddev = e3.standardDeviation;
    }), { statistics: r2[0] || null, histograms: r2[1] || null };
  }
  async computeBestPyramidLevelForLocation(e2, t2 = {}) {
    if (!this._tilemapCache)
      return 0;
    let i2 = this.identifyPixelLocation(e2, 0, e$1(t2.datumTransformation));
    if (i2 === null)
      return null;
    let s2 = 0;
    const { maximumPyramidLevel: r2 } = this.rasterInfo.storageInfo;
    let l2 = r2 - s2 + this._levelOffset;
    const o2 = i2.srcLocation;
    for (; l2 >= 0; ) {
      try {
        if (await this._tilemapCache.fetchAvailability(l2, i2.row, i2.col, t2) === "available")
          break;
      } catch {
      }
      if (l2--, s2++, i2 = this.identifyPixelLocation(o2, s2, e$1(t2.datumTransformation)), i2 === null)
        return null;
    }
    return l2 === -1 || i2 == null ? null : s2;
  }
  async _fetchRasterInfo(e2) {
    const t2 = this.sourceJSON;
    if (this.tileType === "Map") {
      const e3 = t2.fullExtent || t2.extent, i3 = Math.ceil((e3.xmax - e3.xmin) / t2.pixelSizeX - 0.1), s3 = Math.ceil((e3.ymax - e3.ymin) / t2.pixelSizeY - 0.1), r3 = k.fromJSON(t2.spatialReference || e3.spatialReference), a3 = new w$2({ x: t2.pixelSizeX, y: t2.pixelSizeY, spatialReference: r3 });
      return new u$2({ width: i3, height: s3, bandCount: 3, extent: w$3.fromJSON(e3), spatialReference: r3, pixelSize: a3, pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    }
    const { signal: i2 } = e2, s2 = m$6(this.url, this.sourceJSON, { signal: i2, query: this.ioConfig.customFetchParameters }), r2 = t2.hasMultidimensions ? this.request(`${this.url}/slices`, { query: { f: "json" }, signal: i2 }).then((e3) => e3.data && e3.data.slices).catch(() => null) : null, a2 = await Promise.all([s2, r2]);
    return this._slices = a2[1], a2[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: e2 } = this;
    e2.minScale && e2.minScale < 0 && (e2.minScale = 0), e2.maxScale && e2.maxScale < 0 && (e2.maxScale = 0);
  }
  _fixGCSShift(e2) {
    const { extent: t2, spatialReference: i2 } = e2;
    t2.xmin > -1 && t2.xmax > 181 && (i2 == null ? void 0 : i2.wkid) && i2.isGeographic && (e2.nativeExtent = e2.extent, e2.transform = new c$6(), e2.extent = e2.transform.forwardTransform(t2));
  }
  _computeMinMaxLOD(e2, t2) {
    var _a, _b, _c;
    const { pixelSize: i2 } = e2, s2 = 0.5 / e2.width * i2.x, { lods: r2 } = t2, a2 = t2.lodAt(Math.max.apply(null, r2.map((e3) => e3.level))), l2 = t2.lodAt(Math.min.apply(null, r2.map((e3) => e3.level))), { tileType: o2 } = this;
    if (o2 === "Map")
      return this._levelOffset = r2[0].level, [a2, l2];
    if (o2 === "Raster") {
      return [(_a = r2.find((e3) => e3.resolution === i2.x)) != null ? _a : a2, l2];
    }
    const { minScale: n2, maxScale: c2 } = this.sourceJSON;
    let m2 = a2;
    c2 > 0 && (m2 = r2.find((e3) => Math.abs(e3.scale - c2) < s2), m2 || (m2 = (_b = r2.filter((e3) => e3.scale > c2).sort((e3, t3) => e3.scale > t3.scale ? 1 : -1)[0]) != null ? _b : a2));
    let h2 = l2;
    return n2 > 0 && (h2 = (_c = r2.find((e3) => Math.abs(e3.scale - n2) < s2)) != null ? _c : l2, this._levelOffset = h2.level - l2.level), [m2, h2];
  }
};
e$2([y$2({ type: String, json: { write: true } })], I$1.prototype, "datasetFormat", void 0), e$2([y$2()], I$1.prototype, "tileType", void 0), I$1 = e$2([n$4("esri.layers.support.rasterDatasets.ImageServerRaster")], I$1);
const w = I$1;
const I = new Map();
I.set("Int8", "s8"), I.set("UInt8", "u8"), I.set("Int16", "s16"), I.set("UInt16", "u16"), I.set("Int32", "s32"), I.set("UInt32", "u32"), I.set("Float32", "f32"), I.set("Float64", "f32"), I.set("Double64", "f32");
const b = new Map();
b.set("none", { blobExtension: ".til", isOneSegment: true, decoderFormat: "bip" }), b.set("lerc", { blobExtension: ".lrc", isOneSegment: false, decoderFormat: "lerc" }), b.set("deflate", { blobExtension: ".pzp", isOneSegment: true, decoderFormat: "deflate" }), b.set("jpeg", { blobExtension: ".pjg", isOneSegment: true, decoderFormat: "jpg" });
let A = class extends U {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async open(t2) {
    var _a, _b;
    await this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const e2 = t2 ? e$1(t2.signal) : null, o2 = await this.request(this.url, { responseType: "xml", signal: e2 }), { rasterInfo: i2, files: a2 } = this._parseHeader(o2.data);
    if (((_a = this.ioConfig.skipExtensions) == null ? void 0 : _a.indexOf("aux.xml")) === -1) {
      const e3 = await this._fetchAuxiliaryData(t2);
      e3 != null && (i2.statistics = (_b = e3.statistics) != null ? _b : i2.statistics, i2.histograms = e3.histograms, e3.histograms && t$2(i2.statistics) && (i2.statistics = g$1(e3.histograms)));
    }
    this._set("rasterInfo", i2), this._files = a2;
    const n2 = await this.request(a2.index, { responseType: "array-buffer", signal: e2 });
    this._storageIndex = this._parseIndex(n2.data);
    const { blockWidth: l2, blockHeight: f2 } = this.rasterInfo.storageInfo, c2 = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: m2, height: p2 } = this.rasterInfo, h2 = [], u2 = this._getBandSegmentCount();
    let g2 = 0, y2 = -1;
    for (; g2 < this._storageIndex.length; ) {
      y2++;
      const t3 = Math.ceil(m2 / l2 / c2 ** y2) - 1, e3 = Math.ceil(p2 / f2 / c2 ** y2) - 1;
      g2 += (t3 + 1) * (e3 + 1) * u2 * 4, h2.push({ maxRow: e3, maxCol: t3, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = h2, y2 > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = y2), this.updateTileInfo();
  }
  async fetchRawTile(t2, e2, r2, s2 = {}) {
    const { blockWidth: i2, blockHeight: a2, blockBoundary: l2 } = this.rasterInfo.storageInfo, f2 = l2[t2];
    if (!f2 || f2.maxRow < e2 || f2.maxCol < r2 || f2.minRow > e2 || f2.minCol > r2)
      return null;
    const { bandCount: c2, pixelType: m2 } = this.rasterInfo, { ranges: p2, actualTileWidth: h2, actualTileHeight: u2 } = this._getTileLocation(t2, e2, r2);
    if (!p2 || p2.length === 0)
      return null;
    if (p2[0].from === 0 && p2[0].to === 0) {
      const t3 = new Uint8Array(i2 * a2);
      return new g$2({ width: i2, height: a2, pixels: null, mask: t3, validPixelCount: 0 });
    }
    const { bandIds: g2 } = this.ioConfig, d2 = this._getBandSegmentCount(), y2 = [];
    let x2 = 0;
    for (x2 = 0; x2 < d2; x2++)
      (!g2 || g2.indexOf[x2] > -1) && y2.push(this.request(this._files.data, { range: { from: p2[x2].from, to: p2[x2].to }, responseType: "array-buffer", signal: s2.signal }));
    const w2 = await Promise.all(y2), I2 = w2.map((t3) => t3.data.byteLength).reduce((t3, e3) => t3 + e3), A2 = new Uint8Array(I2);
    let F2 = 0;
    for (x2 = 0; x2 < d2; x2++)
      A2.set(new Uint8Array(w2[x2].data), F2), F2 += w2[x2].data.byteLength;
    const _ = b.get(this.rasterInfo.storageInfo.compression).decoderFormat, R2 = await this.decodePixelBlock(A2.buffer, { width: i2, height: a2, format: _, planes: (g2 == null ? void 0 : g2.length) || c2, pixelType: m2 });
    if (r$1(this.rasterInfo.noDataValue) && _ !== "lerc" && !R2.mask) {
      const t3 = this.rasterInfo.noDataValue[0];
      if (t3 != null) {
        const e3 = R2.width * R2.height, r3 = new Uint8Array(e3);
        if (Math.abs(t3) > 1e24)
          for (x2 = 0; x2 < e3; x2++)
            Math.abs((R2.pixels[0][x2] - t3) / t3) > 1e-6 && (r3[x2] = 1);
        else
          for (x2 = 0; x2 < e3; x2++)
            R2.pixels[0][x2] !== t3 && (r3[x2] = 1);
        R2.mask = r3;
      }
    }
    let S2 = 0, j2 = 0;
    if (h2 !== i2 || u2 !== a2) {
      let t3 = R2.mask;
      if (t3)
        for (x2 = 0; x2 < a2; x2++)
          if (j2 = x2 * i2, x2 < u2)
            for (S2 = h2; S2 < i2; S2++)
              t3[j2 + S2] = 0;
          else
            for (S2 = 0; S2 < i2; S2++)
              t3[j2 + S2] = 0;
      else
        for (t3 = new Uint8Array(i2 * a2), R2.mask = t3, x2 = 0; x2 < u2; x2++)
          for (j2 = x2 * i2, S2 = 0; S2 < h2; S2++)
            t3[j2 + S2] = 1;
    }
    return R2;
  }
  _parseIndex(t2) {
    if (t2.byteLength % 16 > 0)
      throw "invalid array buffer must be multiples of 16";
    let e2, r2, s2, o2, i2, a2;
    if (r$3) {
      for (r2 = new Uint8Array(t2), o2 = new ArrayBuffer(t2.byteLength), s2 = new Uint8Array(o2), i2 = 0; i2 < t2.byteLength / 4; i2++)
        for (a2 = 0; a2 < 4; a2++)
          s2[4 * i2 + a2] = r2[4 * i2 + 3 - a2];
      e2 = new Uint32Array(o2);
    } else
      e2 = new Uint32Array(t2);
    return e2;
  }
  _getBandSegmentCount() {
    return b.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(t2, e2, r2) {
    const { blockWidth: s2, blockHeight: o2, pyramidScalingFactor: i2 } = this.rasterInfo.storageInfo, { width: a2, height: n2 } = this.rasterInfo, l2 = this._getBandSegmentCount();
    let f2, c2, m2, p2 = 0, h2 = 0;
    for (m2 = 0; m2 < t2; m2++)
      h2 = i2 ** m2, f2 = Math.ceil(a2 / s2 / h2), c2 = Math.ceil(n2 / o2 / h2), p2 += f2 * c2;
    h2 = i2 ** t2, f2 = Math.ceil(a2 / s2 / h2), c2 = Math.ceil(n2 / o2 / h2), p2 += e2 * f2 + r2, p2 *= 4 * l2;
    const u2 = this._storageIndex.subarray(p2, p2 + 4 * l2);
    let g2 = 0, d2 = 0;
    const y2 = [];
    for (let x2 = 0; x2 < l2; x2++)
      g2 = u2[4 * x2 + 0] * 2 ** 32 + u2[4 * x2 + 1], d2 = g2 + u2[4 * x2 + 2] * 2 ** 32 + u2[4 * x2 + 3], y2.push({ from: g2, to: d2 });
    return { ranges: y2, actualTileWidth: r2 < f2 - 1 ? s2 : Math.ceil(a2 / h2) - s2 * (f2 - 1), actualTileHeight: e2 < c2 - 1 ? o2 : Math.ceil(n2 / h2) - o2 * (c2 - 1) };
  }
  _parseHeader(t$12) {
    var _a;
    const r2 = e(t$12, "MRF_META/Raster");
    if (!r2)
      throw new s$1("mrf:open", "not a valid MRF format");
    const s2 = e(r2, "Size"), o2 = parseInt(s2.getAttribute("x"), 10), i2 = parseInt(s2.getAttribute("y"), 10), a2 = parseInt(s2.getAttribute("c"), 10), n2 = (t(r2, "Compression") || "none").toLowerCase();
    if (!b.has(n2))
      throw new s$1("mrf:open", "currently does not support compression " + n2);
    const c2 = t(r2, "DataType") || "UInt8", p2 = I.get(c2);
    if (p2 == null)
      throw new s$1("mrf:open", "currently does not support pixel type " + c2);
    const g2 = e(r2, "PageSize"), d2 = parseInt(g2.getAttribute("x"), 10), A2 = parseInt(g2.getAttribute("y"), 10), F2 = e(r2, "DataValues");
    let _, R2;
    F2 && (R2 = F2.getAttribute("NoData"), R2 != null && (_ = R2.trim().split(" ").map((t2) => parseFloat(t2))));
    if (e(t$12, "MRF_META/CachedSource"))
      throw new s$1("mrf:open", "currently does not support MRF referencing other data files");
    const S2 = e(t$12, "MRF_META/GeoTags"), j2 = e(S2, "BoundingBox");
    let k$12, M = false;
    if (j2 != null) {
      const t$13 = parseFloat(j2.getAttribute("minx")), e2 = parseFloat(j2.getAttribute("miny")), r3 = parseFloat(j2.getAttribute("maxx")), s3 = parseFloat(j2.getAttribute("maxy")), o3 = t(S2, "Projection") || "";
      let i3 = k.WGS84;
      if (o3 !== "LOCAL_CS[]")
        if (o3.toLowerCase().startsWith("epsg:")) {
          const t2 = Number(o3.slice(5));
          isNaN(t2) || t2 === 0 || (i3 = new k({ wkid: t2 }));
        } else
          i3 = (_a = m(o3)) != null ? _a : k.WGS84;
      else
        M = true, i3 = new k({ wkid: 3857 });
      k$12 = new w$3(t$13, e2, r3, s3), k$12.spatialReference = i3;
    } else
      M = true, k$12 = new w$3({ xmin: -0.5, ymin: 0.5 - i2, xmax: o2 - 0.5, ymax: 0.5, spatialReference: new k({ wkid: 3857 }) });
    const T2 = e(t$12, "MRF_META/Rsets"), C2 = parseInt(T2 && T2.getAttribute("scale") || "2", 10), U2 = k$12.spatialReference, B = new n$3({ origin: new w$2({ x: k$12.xmin, y: k$12.ymax, spatialReference: U2 }), blockWidth: d2, blockHeight: A2, pyramidBlockWidth: d2, pyramidBlockHeight: A2, compression: n2, pyramidScalingFactor: C2 }), L2 = new w$2({ x: k$12.width / o2, y: k$12.height / i2, spatialReference: U2 }), E2 = new u$2({ width: o2, height: i2, extent: k$12, isPseudoSpatialReference: M, spatialReference: U2, bandCount: a2, pixelType: p2, pixelSize: L2, noDataValue: _, storageInfo: B }), P2 = t(t$12, "datafile"), O2 = t(t$12, "IndexFile");
    return { rasterInfo: E2, files: { mrf: this.url, index: O2 || this.url.replace(".mrf", ".idx"), data: P2 || this.url.replace(".mrf", b.get(n2).blobExtension) } };
  }
  async _fetchAuxiliaryData(t2) {
    try {
      const { data: e2 } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: t2 == null ? void 0 : t2.signal });
      return p(e2);
    } catch {
      return null;
    }
  }
};
e$2([y$2()], A.prototype, "_files", void 0), e$2([y$2()], A.prototype, "_storageIndex", void 0), e$2([y$2({ type: String, json: { write: true } })], A.prototype, "datasetFormat", void 0), A = e$2([n$4("esri.layers.support.rasterIO.MRFRaster")], A);
const F$1 = A;
const E = (e2, t2) => {
  var _a;
  return (_a = e2.get(t2)) == null ? void 0 : _a.values;
}, F = (e2, t2) => {
  var _a, _b;
  return (_b = (_a = e2.get(t2)) == null ? void 0 : _a.values) == null ? void 0 : _b[0];
};
let R = class extends U {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  async open(e2) {
    await this.init();
    const s2 = e2 ? e$1(e2.signal) : null, { data: a2 } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: s2 });
    if (!a2)
      throw new s$1("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { littleEndian: n2, firstIFDPos: o2, isBigTiff: f2 } = N$2(a2), l2 = [];
    await this._readIFDs(l2, a2, n2, o2, 0, f2 ? 8 : 4, s2);
    const { imageInfo: u2, rasterInfo: p2 } = this._parseIFDs(l2);
    if (this._headerInfo = __spreadValues({ littleEndian: n2, isBigTiff: f2, ifds: l2 }, u2), this._set("rasterInfo", p2), !u2.isSupported)
      throw new s$1("tiffraster:open", "this tiff is not supported: " + u2.message);
    if (!u2.tileWidth)
      throw new s$1("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
    const { skipExtensions: m2 = [] } = this.ioConfig;
    if (!m2.includes("aux.xml")) {
      const t2 = await this._fetchAuxiliaryMetaData(e2);
      t2 != null && this._processPAMInfo(t2, p2);
    }
    m2.includes("vat.dbf") || p2.bandCount !== 1 || p2.pixelType !== "u8" || (p2.attributeTable = await this._fetchAuxiliaryTable(e2), r$1(p2.attributeTable) && (p2.keyProperties.DataType = "thematic")), this.updateTileInfo();
  }
  async fetchRawTile(e2, t2, r2, i2 = {}) {
    var _a;
    if (!((_a = this._headerInfo) == null ? void 0 : _a.isSupported) || this.isBlockOutside(e2, t2, r2))
      return null;
    const s2 = this._getTileLocation(e2, t2, r2);
    if (!s2)
      return null;
    const { ranges: a2, actualTileWidth: n2, actualTileHeight: o2, ifd: f2 } = s2, l2 = a2.map((e3) => this.request(this.url, { range: e3, responseType: "array-buffer", signal: i2.signal })), u2 = await Promise.all(l2), p2 = u2.map((e3) => e3.data.byteLength).reduce((e3, t3) => e3 + t3), m2 = u2.length === 1 ? u2[0].data : new ArrayBuffer(p2), c2 = [0], h2 = [0];
    if (u2.length > 1) {
      const e3 = new Uint8Array(m2);
      for (let t3 = 0, r3 = 0; t3 < u2.length; t3++) {
        const i3 = u2[t3].data;
        e3.set(new Uint8Array(i3), r3), c2[t3] = r3, r3 += i3.byteLength, h2[t3] = i3.byteLength;
      }
    }
    const { blockWidth: d2, blockHeight: y2 } = this.getBlockWidthHeight(e2), g2 = await this.decodePixelBlock(m2, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: f2, offsets: c2, sizes: h2 }, width: d2, height: y2, planes: null, pixelType: null });
    let x2, T2, I2;
    if (n2 !== d2 || o2 !== y2) {
      let e3 = g2.mask;
      if (e3)
        for (x2 = 0; x2 < y2; x2++)
          if (I2 = x2 * d2, x2 < o2)
            for (T2 = n2; T2 < d2; T2++)
              e3[I2 + T2] = 0;
          else
            for (T2 = 0; T2 < d2; T2++)
              e3[I2 + T2] = 0;
      else
        for (e3 = new Uint8Array(d2 * y2), g2.mask = e3, x2 = 0; x2 < o2; x2++)
          for (I2 = x2 * d2, T2 = 0; T2 < n2; T2++)
            e3[I2 + T2] = 1;
    }
    return g2;
  }
  _parseIFDs(e2) {
    var _a, _b;
    const t2 = D$1(e2), { width: r2, height: i2, tileWidth: s2, tileHeight: a2, planes: n2, pixelType: l2, compression: u2, firstPyramidLevel: m$12, maximumPyramidLevel: c2, pyramidBlockWidth: d2, pyramidBlockHeight: y2, tileBoundary: g2, affine: x2, metadata: T2 } = t2, w2 = ((_a = t2.extent.spatialReference) == null ? void 0 : _a.wkt) || ((_b = t2.extent.spatialReference) == null ? void 0 : _b.wkid);
    let R2 = m(w2), v2 = false;
    R2 == null && (v2 = true, R2 = new k({ wkid: 3857 }));
    const k$12 = new w$3(__spreadProps(__spreadValues({}, t2.extent), { spatialReference: R2 })), D2 = new w$2(k$12 ? { x: k$12.xmin, y: k$12.ymax, spatialReference: R2 } : { x: 0, y: 0 }), j2 = new n$3({ blockWidth: s2, blockHeight: a2, pyramidBlockWidth: d2, pyramidBlockHeight: y2, compression: u2, origin: D2, firstPyramidLevel: m$12, maximumPyramidLevel: c2, blockBoundary: g2 }), O2 = new w$2({ x: (k$12.xmax - k$12.xmin) / r2, y: (k$12.ymax - k$12.ymin) / i2, spatialReference: R2 }), P2 = T2 ? { BandProperties: T2.bandProperties, DataType: T2.dataType } : {};
    let B = null;
    const L2 = F(e2[0], "PHOTOMETRICINTERPRETATION"), A2 = E(e2[0], "COLORMAP");
    if (L2 === 3 && (A2 == null ? void 0 : A2.length) > 3 && A2.length % 3 == 0) {
      B = [];
      const e3 = A2.length / 3;
      for (let t3 = 0; t3 < e3; t3++)
        B.push([t3, A2[t3] >>> 8, A2[t3 + e3] >>> 8, A2[t3 + 2 * e3] >>> 8]);
    }
    const z2 = new u$2({ width: r2, height: i2, bandCount: n2, pixelType: l2, pixelSize: O2, storageInfo: j2, spatialReference: R2, isPseudoSpatialReference: v2, keyProperties: P2, extent: k$12, colormap: B, statistics: T2 ? T2.statistics : null });
    return (x2 == null ? void 0 : x2.length) && (z2.nativeExtent = new w$3({ xmin: -0.5, ymin: 0.5 - i2, xmax: r2 - 0.5, ymax: 0.5, spatialReference: R2 }), z2.transform = new m$5({ polynomialOrder: 1, forwardCoefficients: [x2[2] + x2[0] / 2, x2[5] - x2[3] / 2, x2[0], x2[3], -x2[1], -x2[4]] }), z2.extent = z2.transform.forwardTransform(z2.nativeExtent), z2.pixelSize = new w$2({ x: (k$12.xmax - k$12.xmin) / r2, y: (k$12.ymax - k$12.ymin) / i2, spatialReference: R2 }), j2.origin.x = -0.5, j2.origin.y = 0.5), { imageInfo: t2, rasterInfo: z2 };
  }
  _processPAMInfo(e2, t2) {
    var _a;
    if (t2.statistics = (_a = e2.statistics) != null ? _a : t2.statistics, t2.histograms = e2.histograms, e2.histograms && t$2(t2.statistics) && (t2.statistics = g$1(e2.histograms)), e2.transform && t$2(t2.transform)) {
      t2.transform = e2.transform, t2.nativeExtent = t2.extent;
      const r2 = t2.transform.forwardTransform(t2.nativeExtent);
      t2.pixelSize = new w$2({ x: (r2.xmax - r2.xmin) / t2.width, y: (r2.ymax - r2.ymin) / t2.height, spatialReference: t2.spatialReference }), t2.extent = r2;
    }
    t2.spatialReference || (t2.spatialReference = e2.spatialReference);
  }
  async _readIFDs(e2, t2, r2, i2, s2, a2 = 4, n2) {
    if (!i2)
      return null;
    if (i2 >= t2.byteLength || i2 < 0) {
      t2 = (await this.request(this.url, { range: { from: i2 + s2, to: i2 + s2 + this._bufferSize }, responseType: "array-buffer", signal: n2 })).data, s2 = i2 + s2, i2 = 0;
    }
    const o2 = await this._readIFD(t2, r2, i2, s2, n$7.TIFF_TAGS, a2, n2);
    if (e2.push(o2.ifd), !o2.nextIFD)
      return null;
    await this._readIFDs(e2, t2, r2, o2.nextIFD - s2, s2, a2, n2);
  }
  async _readIFD(e2, t2, r2, s2, a2 = n$7.TIFF_TAGS, n2 = 4, o2) {
    var _a, _b;
    if (!e2)
      return null;
    const f2 = G(e2, t2, r2, s2, a2, n2);
    if (f2.success) {
      const r3 = [];
      if ((_a = f2.ifd) == null ? void 0 : _a.forEach((e3) => {
        e3.values || r3.push(e3);
      }), r3.length > 0) {
        const a3 = r3.map((e3) => e3.offlineOffsetSize).filter(r$1), n3 = Math.min.apply(null, a3.map((e3) => e3[0]));
        if (Math.min.apply(null, a3.map((e3) => e3[0] + e3[1])) - n3 <= this._bufferSize) {
          const { data: i2 } = await this.request(this.url, { range: { from: n3, to: n3 + this._bufferSize }, responseType: "array-buffer", signal: o2 });
          e2 = i2, s2 = n3, r3.forEach((r4) => b$2(e2, t2, r4, s2));
        }
      }
      if ((_b = f2.ifd) == null ? void 0 : _b.has("GEOKEYDIRECTORY")) {
        const r4 = f2.ifd.get("GEOKEYDIRECTORY"), i2 = r4 == null ? void 0 : r4.values;
        if (i2 && i2.length > 4) {
          const a3 = i2[0] + "." + i2[1] + "." + i2[2], n3 = await this._readIFD(e2, t2, r4.valueOffset + 6 - s2, s2, n$7.GEO_KEYS, 2, o2);
          r4.data = n3.ifd, r4.data && r4.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [a3] });
        }
      }
      return f2;
    }
    if (f2.requiredBufferSize && f2.requiredBufferSize !== e2.byteLength) {
      const r3 = await this.request(this.url, { range: { from: s2, to: s2 + f2.requiredBufferSize + 4 }, responseType: "array-buffer", signal: o2 });
      return (e2 = r3.data).byteLength < f2.requiredBufferSize ? null : this._readIFD(e2, t2, 0, s2, n$7.TIFF_TAGS, 4, o2);
    }
  }
  _getTileLocation(e2, t2, r2) {
    var _a;
    const { firstPyramidLevel: i2, blockBoundary: s2 } = this.rasterInfo.storageInfo, a2 = e2 === 0 ? 0 : e2 - (i2 - 1), n2 = (_a = this._headerInfo) == null ? void 0 : _a.ifds[a2];
    if (!n2)
      return null;
    const o2 = O(n2, this._headerInfo), f2 = E(n2, "TILEOFFSETS");
    if (f2 === void 0)
      return null;
    const l2 = E(n2, "TILEBYTECOUNTS"), { minRow: u2, minCol: p2, maxRow: m2, maxCol: c2 } = s2[a2];
    if (t2 > m2 || r2 > c2 || t2 < u2 || r2 < p2)
      return null;
    const h2 = F(n2, "IMAGEWIDTH"), d2 = F(n2, "IMAGELENGTH"), y2 = F(n2, "TILEWIDTH"), x2 = F(n2, "TILELENGTH"), T2 = o2 ? this.rasterInfo.bandCount : 1, I2 = T2 * t2 * (c2 + 1) + r2, w2 = [{ from: f2[I2], to: f2[I2 + T2 - 1] + l2[I2 + T2 - 1] - 1 }];
    if (o2) {
      let e3 = true;
      for (let t3 = 0; t3 < T2; t3++)
        if (f2[I2 + t3] + l2[I2 + t3] !== f2[I2 + t3 + 1]) {
          e3 = false;
          break;
        }
      if (!e3)
        for (let t3 = 0; t3 < T2; t3++)
          w2[t3] = { from: f2[I2 + t3], to: f2[I2 + t3] + l2[I2 + t3] - 1 };
    }
    const b2 = f2[I2], _ = l2[I2];
    if (b2 == null || _ == null)
      return null;
    return { ranges: w2, ifd: n2, actualTileWidth: r2 === c2 && h2 % y2 || y2, actualTileHeight: t2 === m2 && d2 % x2 || x2 };
  }
  async _fetchAuxiliaryMetaData(e2) {
    try {
      const { data: t2 } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: e2 == null ? void 0 : e2.signal });
      return p(t2);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(e2) {
    try {
      const { data: t2 } = await this.request(this.url + ".vat.dbf", { responseType: "array-buffer", signal: e2 == null ? void 0 : e2.signal }), r$12 = r.parse(t2);
      return (r$12 == null ? void 0 : r$12.recordSet) ? x$2.fromJSON(r$12.recordSet) : null;
    } catch {
      return null;
    }
  }
};
e$2([y$2()], R.prototype, "_files", void 0), e$2([y$2()], R.prototype, "_headerInfo", void 0), e$2([y$2()], R.prototype, "_bufferSize", void 0), e$2([y$2({ type: String, json: { write: true } })], R.prototype, "datasetFormat", void 0), R = e$2([n$4("esri.layers.support.rasterDatasets.TIFFRaster")], R);
const v = R;
const c = new Map();
c.set("CRF", { desc: "Cloud Raster Format", constructor: I$2 }), c.set("MRF", { desc: "Meta Raster Format", constructor: F$1 }), c.set("TIFF", { desc: "GeoTIFF", constructor: v }), c.set("RasterTileServer", { desc: "Raster Tile Server", constructor: w }), c.set("JPG", { desc: "JPG Raster Format", constructor: y }), c.set("PNG", { desc: "PNG Raster Format", constructor: y }), c.set("GIF", { desc: "GIF Raster Format", constructor: y }), c.set("BMP", { desc: "BMP Raster Format", constructor: y });
class n {
  static get supportedFormats() {
    const t2 = new Set();
    return c.forEach((e2, r2) => t2.add(r2)), t2;
  }
  static async open(e2) {
    const { url: r2, ioConfig: s2, sourceJSON: o2 } = e2;
    let a2 = e2.datasetFormat;
    a2 == null && r2.lastIndexOf(".") && (a2 = r2.slice(r2.lastIndexOf(".") + 1).toUpperCase()), a2 === "OVR" || a2 === "TIF" ? a2 = "TIFF" : a2 !== "JPG" && a2 !== "JPEG" && a2 !== "JFIF" || (a2 = "JPG"), r2.toLowerCase().includes("/imageserver") && !r2.toLowerCase().includes("/wcsserver") && (a2 = "RasterTileServer");
    const n2 = { url: r2, sourceJSON: o2, datasetFormat: a2, ioConfig: s2 != null ? s2 : { bandIds: null, sampling: null } };
    let l2, i2;
    if (a2 && this.supportedFormats.has(a2)) {
      if (a2 === "CRF" && !(s2 == null ? void 0 : s2.enableCRF))
        throw new s$1("rasterfactory:open", `cannot open raster: ${r2}`);
      return l2 = c.get(a2).constructor, i2 = new l2(n2), await i2.open({ signal: e2.signal }), i2;
    }
    if (a2)
      throw new s$1("rasterfactory:open", "not a supported format " + a2);
    const u2 = Array.from(c.keys());
    let F2 = 0;
    const m2 = () => (a2 = u2[F2++], a2 && (a2 !== "CRF" || (s2 == null ? void 0 : s2.enableCRF)) ? (l2 = c.get(a2).constructor, i2 = new l2(n2), i2.open({ signal: e2.signal }).then(() => i2).catch(() => m2())) : null);
    return m2();
  }
  static register(t2, e2, r2) {
    c.has(t2.toUpperCase()) || c.set(t2.toUpperCase(), { desc: e2, constructor: r2 });
  }
}
let N = class extends n$8(t$3(c$7(v$3(o$1(N$1(a$2(p$3(O$1(b$3))))))))) {
  constructor(...e2) {
    super(...e2), this.bandIds = null, this.interpolation = null, this.legendEnabled = true, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.title = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = true, this.popupTemplate = null, this.fields = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, e2).catch(w$5).then(() => this._openRaster(r2))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    var _a;
    let e2 = [new y$3({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: false, length: 50, type: "string" })];
    const { rasterInfo: r2 } = this, { attributeTable: t2 } = r2, o2 = r$1(t2) ? t2.fields : null, i2 = "Raster.";
    if (o2) {
      const r3 = o2.filter((e3) => e3.type !== "oid" && e3.name.toLowerCase() !== "value").map((e3) => {
        const r4 = e3.clone();
        return r4.name = i2 + e3.name, r4;
      });
      e2 = e2.concat(r3);
    }
    const { dataType: s2, multidimensionalInfo: n2 } = r2;
    if ((s2 === "vector-magdir" || s2 === "vector-uv") && r$1(n2)) {
      const r3 = (_a = n2.variables[0].unit) == null ? void 0 : _a.trim(), t3 = "Magnitude" + (r3 ? ` (${r3})` : "");
      e2.push(new y$3({ name: "Raster.Magnitude", alias: t3, domain: null, editable: false, type: "double" })), e2.push(new y$3({ name: "Raster.Direction", alias: "Direction (\xB0)", domain: null, editable: false, type: "double" }));
    }
    return e2;
  }
  set renderer(e2) {
    this._set("renderer", e2), this.updateRenderer();
  }
  readRenderer(e2, r2, o2) {
    const i2 = r2 && r2.layerDefinition && r2.layerDefinition.drawingInfo && r2.layerDefinition.drawingInfo.renderer, s2 = u$3(i2, o2) || void 0;
    if (s2 != null)
      return s2;
  }
  createPopupTemplate(e2) {
    return p$4({ fields: this.rasterFields, title: this.title }, e2);
  }
  write(e2, r2) {
    const { raster: t2 } = this;
    if (this.loaded ? t2.datasetFormat === "RasterTileServer" && (t2.tileType === "Raster" || t2.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url))
      return super.write(e2, r2);
    if (r2 && r2.messages) {
      const e3 = `${r2.origin}/${r2.layerContainerType || "operational-layers"}`;
      r2.messages.push(new s$1("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e3}'`, { layer: this }));
    }
    return null;
  }
  async _openRaster(e2) {
    if (this.raster)
      this.raster.rasterInfo || await this.raster.open(), this.url = this.raster.url;
    else {
      const r3 = await n.open({ url: this.url, sourceJSON: this.sourceJSON, ioConfig: __spreadProps(__spreadValues({ sampling: "closest" }, this.ioConfig), { customFetchParameters: this.customParameters }), signal: e2 });
      if (this.rasterFunction) {
        const e3 = l$3(this.rasterFunction.toJSON(), { raster: r3 }), t2 = new c$2({ rasterFunction: e3 });
        await t2.open(), this.raster = t2;
      } else
        this.raster = r3;
    }
    const { rasterInfo: r2 } = this.raster;
    if (!r2)
      throw new s$1("imagery-tile-layer:load", "cannot load resources on " + this.url);
    if (this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null) {
      const e3 = this.raster.tileType === "Map" && this.sourceJSON.minLOD != null && this.sourceJSON.maxLOD != null ? this.sourceJSON : __spreadProps(__spreadValues({}, this.sourceJSON), { minScale: 0, maxScale: 0 });
      this.read(e3, { origin: "service" });
    }
    this.title == null && (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = false), this._configDefaultSettings(), this.addHandles(l$4(() => this.customParameters, (e3) => {
      this.raster.ioConfig.customFetchParameters = e3;
    }));
  }
};
e$2([y$2({ type: [T$3], json: { write: { overridePolicy() {
  var _a;
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || ((_a = this.bandIds) == null ? void 0 : _a.join(",")) !== "0,1,2" };
} } } })], N.prototype, "bandIds", void 0), e$2([y$2({ json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.interpolation !== "bilinear" };
} } } }), r$4(o$2)], N.prototype, "interpolation", void 0), e$2([y$2({ json: { write: true } })], N.prototype, "multidimensionalDefinition", void 0), e$2([y$2(c$8)], N.prototype, "legendEnabled", void 0), e$2([y$2({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], N.prototype, "isReference", void 0), e$2([y$2({ type: ["show", "hide"] })], N.prototype, "listMode", void 0), e$2([y$2({ json: { read: true, write: true } })], N.prototype, "blendMode", void 0), e$2([y$2()], N.prototype, "sourceJSON", void 0), e$2([y$2({ readOnly: true, json: { origins: { service: { read: { source: "currentVersion" } } } } })], N.prototype, "version", void 0), e$2([y$2()], N.prototype, "title", void 0), e$2([y$2({ readOnly: true, json: { read: false } })], N.prototype, "type", void 0), e$2([y$2({ type: ["ArcGISTiledImageServiceLayer"] })], N.prototype, "operationalLayerType", void 0), e$2([y$2({ type: Boolean, value: true, json: { read: { source: "disablePopup", reader: (e2, r2) => !r2.disablePopup }, write: { target: "disablePopup", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
}, writer(e2, r2, t2) {
  r2[t2] = !e2;
} } } })], N.prototype, "popupEnabled", void 0), e$2([y$2({ type: k$1, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
} } } })], N.prototype, "popupTemplate", void 0), e$2([y$2({ readOnly: true })], N.prototype, "defaultPopupTemplate", null), e$2([y$2({ readOnly: true, type: [y$3] })], N.prototype, "fields", void 0), e$2([y$2({ readOnly: true, type: [y$3] })], N.prototype, "rasterFields", null), e$2([y$2({ types: l$2, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
  var _a;
  const e2 = ((_a = this.renderer) == null ? void 0 : _a.type) === "raster-stretch" && this.renderer.stretchType === "none" && !this.renderer.useGamma;
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || !e2 };
} }, origins: { "web-scene": { types: i$3, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e2) => ({ enabled: e2 && e2.type !== "vector-field" && e2.type !== "flow" }) } } } } })], N.prototype, "renderer", null), e$2([o$3("renderer")], N.prototype, "readRenderer", null), N = e$2([n$4("esri.layers.ImageryTileLayer")], N);
const J = N;
export { J as default };
