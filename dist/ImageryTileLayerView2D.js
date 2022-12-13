var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { F as e, ap as u, dm as mt, $ as e$1, a0 as y, a1 as n$4, d9 as d, cY as x, cv as r$2, cr as w, aH as l$1, ct as h, cu as y$1, a as r$3, k as e$2, a7 as w$1, d3 as j, m as j$1, s, cs as E, ce as s$2, aV as i$2, R as l$2, cL as g$2, g as s$3, t, cC as g$3, cz as w$2, d8 as U$1, S as h$1 } from "./index.js";
import { m } from "./multidimensionalUtils.js";
import { y as y$2, d as d$2 } from "./RasterVFDisplayObject.js";
import { y as y$3, u as u$2 } from "./LayerView.js";
import { p, c as n$3, d as d$1 } from "./WGLContainer.js";
import { r as r$1, i as i$1 } from "./TileContainer.js";
import { I } from "./Utils2.js";
import { g as g$1, s as s$1 } from "./pixelUtils.js";
import { g, f as f$2, u as u$1, a } from "./RawBlockCache.js";
import { U, i as ie, v as v$1, J } from "./rasterProjectionHelper.js";
import { r as r$4 } from "./util.js";
import { j as j$2 } from "./dataUtils.js";
import { s as s$4 } from "./popupUtils.js";
import { i as i$3 } from "./RefreshableLayerView.js";
import "vue";
import "./VertexArrayObject.js";
import "./Texture.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
import "./utils.js";
import "./MaterialKey.js";
import "./enums2.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
class i extends r$1 {
  constructor(t2, e2, i2, r2, a2, n2, m2 = null) {
    super(t2, e2, i2, r2, a2, n2), this.bitmap = new p(m2, null, null), this.bitmap.coordScale = [a2, n2], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy(), this.bitmap = null, this.stage = null;
  }
  set stencilRef(t2) {
    this.bitmap.stencilRef = t2;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  setTransform(t2) {
    super.setTransform(t2), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  _createTransforms() {
    return { dvs: e(), tileMat3: e() };
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
class n$2 extends i$1 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false;
  }
  createTile(e2) {
    const s2 = this._getTileBounds(e2), [i$12, r2] = this._tileInfoView.tileInfo.size, o2 = this._tileInfoView.getTileResolution(e2.level);
    return new i(e2, o2, s2[0], s2[3], i$12, r2);
  }
  prepareRenderPasses(e2) {
    const s2 = e2.registerRenderPass({ name: "imagery (tile)", brushes: [n$3.raster], target: () => this.children.map((e3) => e3.bitmap), drawPhase: I.MAP });
    return [...super.prepareRenderPasses(e2), s2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === I.MAP && super.doRender(e2);
  }
  _getTileBounds(i2) {
    const t2 = this._tileInfoView.getTileBounds(u(), i2);
    if (this.isCustomTilingScheme && i2.world) {
      const { tileInfo: e2 } = this._tileInfoView, r2 = mt(e2.spatialReference);
      if (r2) {
        const { resolution: s2 } = e2.lodAt(i2.level), o2 = r2 / s2 % e2.size[0], n2 = o2 ? (e2.size[0] - o2) * s2 : 0;
        t2[0] -= n2 * i2.world, t2[2] -= n2 * i2.world;
      }
    }
    return t2;
  }
}
const v = [0, 0];
let T = class extends d {
  constructor() {
    super(...arguments), this._emptyTilePixelBlock = null, this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._srcResolutions = null, this.previousLOD = null, this._needBlockCacheUpdate = false, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._isCustomTilingScheme = false, this._globalUpdateRequested = false, this.attached = false, this.container = null, this.layer = null, this.timeExtent = null, this.redrawOrRefetch = x((e2, t2) => !this.previousLOD || this.layerView.suspended ? Promise.resolve() : e2 ? this.updatingHandles.addPromise(this.doRefresh()) : this.updatingHandles.addPromise(this._redrawImage(t2)));
  }
  get useWebGLForProcessing() {
    var _a;
    return (_a = this._get("useWebGLForProcessing")) != null ? _a : true;
  }
  set useWebGLForProcessing(e2) {
    this._set("useWebGLForProcessing", e2);
  }
  get useProgressiveUpdate() {
    return this._get("useProgressiveUpdate") == null || this._get("useProgressiveUpdate");
  }
  set useProgressiveUpdate(e2) {
    if (this._tileStrategy && this.useProgressiveUpdate !== e2) {
      this._tileStrategy.destroy(), this.container.removeAllChildren();
      const t2 = this._getCacheSize(e2);
      this._tileStrategy = new r$2({ cachePolicy: "purge", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: t2, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", e2), this.layerView.requestUpdate();
    }
  }
  update(e2) {
    var _a;
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
    const { extent: t2, resolution: i2, scale: s2 } = e2.state, r2 = this._tileInfoView.getClosestInfoForScale(s2);
    if (this.layer.raster) {
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const e3 = this._srcResolutions[r2.level], s3 = t2.toJSON ? t2 : w.fromJSON(t2);
        g(this._blockCacheRegistryUrl, this._blockCacheRegistryId, s3, i2, e3, this.layer.raster.ioConfig.sampling);
      }
      this._needBlockCacheUpdate = false, ((_a = this.previousLOD) == null ? void 0 : _a.level) !== r2.level && (this.previousLOD = r2, this._symbolizerParams == null || this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._tileStrategy.updateCacheSize(0));
    }
  }
  moveEnd() {
    !this.layerView.hasTilingEffects && this.useProgressiveUpdate || (this._abortController && this._abortController.abort(), this._abortController = new AbortController(), this._fetchQueue.length === 0 && this._redrawImage(this._abortController.signal).then(() => {
      this._globalUpdateRequested = false, this.layerView.requestUpdate();
    }));
    const e2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy.updateCacheSize(e2), this.layerView.requestUpdate();
  }
  get updating() {
    var _a;
    return ((_a = this._fetchQueue) == null ? void 0 : _a.updating) || this._globalUpdateRequested || !(!this.updatingHandles || !this.updatingHandles.updating);
  }
  attach() {
    l$1("2d").supportsTextureFloat || (this.useWebGLForProcessing = false), this._initializeTileInfo(), this._tileInfoView = new h(this.layerView.tileInfo, this.layerView.fullExtent);
    const e2 = this._computeFetchConcurrency();
    this._fetchQueue = new y$1({ tileInfoView: this._tileInfoView, concurrency: e2, process: (e3, t3) => this._fetchTile1(e3, t3) });
    const t2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new r$2({ cachePolicy: "purge", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: t2, tileInfoView: this._tileInfoView }), this._updateBlockCacheRegistry();
  }
  detach() {
    this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, f$2(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryUrl = this._blockCacheRegistryId = null;
  }
  acquireTile(e2) {
    const t2 = this.container.createTile(e2);
    return this._enqueueTileFetch(t2), this.layerView.requestUpdate(), this._needBlockCacheUpdate = true, this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, t2;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this.container.removeChild(e2), e2.once("detach", () => {
      e2.destroy(), this.layerView.requestUpdate();
    }), this.layerView.requestUpdate();
  }
  createEmptyTilePixelBlock(e2 = null) {
    const t2 = e2 == null || e2.join(",") === this._tileInfoView.tileInfo.size.join(",");
    if (t2 && r$3(this._emptyTilePixelBlock))
      return this._emptyTilePixelBlock;
    e2 = e2 || this._tileInfoView.tileInfo.size;
    const [i2, r2] = e2, l2 = new g$1({ width: i2, height: r2, pixels: [new Uint8Array(i2 * r2)], mask: new Uint8Array(i2 * r2), pixelType: "u8" });
    return t2 && (this._emptyTilePixelBlock = l2), l2;
  }
  _fetchTile1(e2, t2) {
    const i2 = r$3(t2) && t2.signal, l2 = this.canUseWebGLForProcessing(), { layerView: a2 } = this, o2 = !a2.tileInfo.isWrappable && r$3(U(a2.view.spatialReference)), h2 = { allowPartialFill: true, datumTransformation: a2.datumTransformation, interpolation: l2 ? "nearest" : this.layer.interpolation, registryId: this._blockCacheRegistryId, requestRawData: l2, signal: e$2(i2), srcResolution: this._srcResolutions[e2.level], timeExtent: a2.timeExtent, tileInfo: a2.tileInfo, disableWrapAround: o2 };
    return this.fetchTile(e2, h2);
  }
  _getCacheSize(e2) {
    return e2 ? 40 : 0;
  }
  _initializeTileInfo() {
    const e2 = this.layerView.view.spatialReference, t2 = new w$1({ x: this.layerView.fullExtent.xmin, y: this.layerView.fullExtent.ymax, spatialReference: e2 }), { scales: i2, srcResolutions: s2, isCustomTilingScheme: r2 } = ie(this.layer.rasterInfo, e2), l2 = j.create({ spatialReference: e2, size: 512, scales: i2 });
    (l2.origin.x === 0 || l2.origin.x > t2.x) && (l2.origin = t2), this._isCustomTilingScheme = r2, this.layerView.set("tileInfo", l2), this._srcResolutions = s2 != null ? s2 : [];
  }
  _computeFetchConcurrency() {
    const { blockBoundary: e2 } = this.layer.rasterInfo.storageInfo, t2 = e2[e2.length - 1];
    return (t2.maxCol - t2.minCol + 1) * (t2.maxRow - t2.minRow + 1) > 64 ? 2 : 10;
  }
  async _enqueueTileFetch(e2, t2) {
    this.updatingHandles.addPromise(this._enqueueTileFetch1(e2, t2));
  }
  async _enqueueTileFetch1(e2, t2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t3 = await this._fetchQueue.push(e2.key), { bandIds: r2 } = this.layer;
        let l2 = !this.useProgressiveUpdate || this.layerView.hasTilingEffects && !this._globalSymbolizerParams;
        if (this._globalUpdateRequested && !this.layerView.moving && this._fetchQueue.length === 0) {
          l2 = false;
          try {
            await this._redrawImage(this._abortController && this._abortController.signal);
          } catch (s$12) {
            j$1(s$12) && s.getLogger(this.declaredClass).error(s$12);
          }
          this._globalUpdateRequested = false;
        }
        !this.canUseWebGLForProcessing() && this.type !== "rasterVF" || this.layerView.hasTilingEffects || this._symbolizerParams != null || this._updateSymbolizerParams();
        const o2 = this._tileInfoView.getTileCoords(v, e2.key), h2 = this._tileInfoView.getTileResolution(e2.key);
        await this.updateTileSource(e2, { source: t3, symbolizerParams: this._symbolizerParams, globalSymbolizerParams: this._globalSymbolizerParams, suspended: l2, bandIds: r2, coords: o2, resolution: h2 }), e2.once("attach", () => this.layerView.requestUpdate()), this.container.addChild(e2);
      } catch (s$12) {
        j$1(s$12) || s.getLogger(this.declaredClass).error(s$12);
      }
      this.layerView.requestUpdate();
    }
  }
  async _redrawImage(e2) {
    if (this.container.children.length === 0)
      return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects ? await this._updateGlobalSymbolizerParams(e2) : (this._updateSymbolizerParams(), this._globalSymbolizerParams = null);
    const t2 = this.container.children.map(async (e3) => this.updateTileSymbolizerParameters(e3, { local: this._symbolizerParams, global: this._globalSymbolizerParams }));
    await E(t2), this.container.requestRender();
  }
  async _updateGlobalSymbolizerParams(e2) {
    const t2 = { srcResolution: this._srcResolutions[this.previousLOD.level], registryId: this._blockCacheRegistryId, signal: e2 }, i2 = await this.layer.fetchPixels(this.layerView.view.extent, this.layerView.view.width, this.layerView.view.height, t2);
    if (!i2 || !i2.pixelBlock)
      return;
    const s2 = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: s$1(i2.pixelBlock, this.layer.bandIds), isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: this.previousLOD.resolution, y: this.previousLOD.resolution }, bandIds: this.layer.bandIds });
    !this.canUseWebGLForProcessing() && s2 && s2.type === "stretch" && this.layer.renderer && this.layer.renderer.type === "raster-stretch" && (s2.factor = s2.factor.map((e3) => 255 * e3), s2.outMin = Math.round(255 * s2.outMin), s2.outMax = Math.round(255 * s2.outMax)), this._globalSymbolizerParams = s2;
  }
  _updateSymbolizerParams() {
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: this.previousLOD.resolution, y: this.previousLOD.resolution }, bandIds: this.layer.bandIds });
  }
  _updateBlockCacheRegistry(e2 = false) {
    const { url: t2, rasterInfo: i2, raster: s2 } = this.layer, { multidimensionalDefinition: r2 } = this.layer.normalizeRasterFetchOptions({ multidimensionalDefinition: this.layer.multidimensionalDefinition, timeExtent: this.layerView.timeExtent }), l2 = (i2 == null ? void 0 : i2.multidimensionalInfo) ? s2.getSliceIndex(r2) : null, a$1 = a(t2, l2);
    if (a$1 !== this._blockCacheRegistryUrl) {
      if (this._blockCacheRegistryUrl != null && f$2(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = u$1(a$1, this.layer.raster.rasterInfo), e2) {
        const e3 = this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale), t3 = this._srcResolutions[e3.level];
        g(a$1, this._blockCacheRegistryId, this.layerView.view.extent, this.layerView.view.resolution, t3, this.layer.raster.ioConfig.sampling);
      }
      this._blockCacheRegistryUrl = a$1;
    }
  }
  async doRefresh() {
    if (!this.attached)
      return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._updateBlockCacheRegistry(true), this._fetchQueue.reset();
    const e2 = [];
    this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, this._tileStrategy.tiles.forEach((t2) => e2.push(this._enqueueTileFetch(t2))), await E(e2);
  }
};
e$1([y()], T.prototype, "_fetchQueue", void 0), e$1([y()], T.prototype, "_globalUpdateRequested", void 0), e$1([y()], T.prototype, "attached", void 0), e$1([y()], T.prototype, "container", void 0), e$1([y()], T.prototype, "layer", void 0), e$1([y()], T.prototype, "layerView", void 0), e$1([y()], T.prototype, "type", void 0), e$1([y()], T.prototype, "useWebGLForProcessing", null), e$1([y()], T.prototype, "useProgressiveUpdate", null), e$1([y()], T.prototype, "timeExtent", void 0), e$1([y()], T.prototype, "updating", null), T = e$1([n$4("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], T);
let l = class extends T {
  constructor() {
    super(...arguments), this.container = null, this.layer = null, this.type = "raster";
  }
  attach() {
    super.attach(), this.container = new n$2(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme;
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this.container = null;
  }
  canUseWebGLForProcessing() {
    return this.useWebGLForProcessing && this.layer.symbolizer.canRenderInWebGL && !(this.layer.interpolation === "majority" && r$4(this.layer));
  }
  fetchTile(e2, r2) {
    return this.layer.fetchTile(e2.level, e2.row, e2.col, r2);
  }
  async updateTileSource(e2, t2) {
    const { bandIds: s2 } = this.layer, i2 = this._getLayerInterpolation(), o2 = this.canUseWebGLForProcessing(), { source: a2, globalSymbolizerParams: l2, suspended: n2, coords: c2, resolution: p2 } = t2, u2 = this.layerView.hasTilingEffects ? l2 : t2.symbolizerParams, { bitmap: d2 } = e2;
    if ([d2.x, d2.y] = c2, d2.resolution = p2, a2 && r$3(a2) && r$3(a2.pixelBlock)) {
      const e3 = { extent: a2.extent, pixelBlock: a2.pixelBlock };
      if (d2.rawPixelData = e3, o2)
        d2.source = a2.pixelBlock, d2.isRendereredSource = false;
      else {
        const r2 = await this.layer.applyRenderer(e3, (l2 == null ? void 0 : l2.type) === "stretch" ? l2 : null);
        d2.source = r2, d2.isRendereredSource = true;
      }
      d2.symbolizerParameters = o2 ? u2 : null, o2 ? d2.transformGrid || (d2.transformGrid = a2.transformGrid) : d2.transformGrid = null;
    } else {
      const e3 = this.createEmptyTilePixelBlock();
      d2.source = e3, d2.symbolizerParameters = o2 ? u2 : null, d2.transformGrid = null;
    }
    d2.bandIds = o2 ? s2 : null, d2.width = this._tileInfoView.tileInfo.size[0], d2.height = this._tileInfoView.tileInfo.size[1], d2.interpolation = i2, d2.suspended = n2, d2.invalidateTexture();
  }
  async updateTileSymbolizerParameters(e2, t2) {
    const { local: s2, global: i2 } = t2, { bandIds: o2 } = this.layer, a2 = this._getLayerInterpolation(), l2 = this.canUseWebGLForProcessing(), { bitmap: n2 } = e2, { rawPixelData: c2 } = n2;
    !l2 && r$3(c2) ? (n2.source = await this.layer.applyRenderer(c2, (i2 == null ? void 0 : i2.type) === "stretch" ? i2 : null), n2.isRendereredSource = true) : (n2.isRendereredSource && r$3(c2) && (n2.source = c2.pixelBlock), n2.isRendereredSource = false), n2.symbolizerParameters = l2 ? this.layerView.hasTilingEffects ? i2 : s2 : null, n2.bandIds = l2 ? o2 : null, n2.interpolation = a2, n2.suspended = false;
  }
  _getLayerInterpolation() {
    const e2 = this.layer.renderer.type;
    if (e2 === "raster-colormap" || e2 === "unique-value" || e2 === "class-breaks")
      return "nearest";
    const { interpolation: r2 } = this.layer, { renderer: t2 } = this.layer;
    return t2.type === "raster-stretch" && t2.colorRamp != null ? r2 === "bilinear" || r2 === "cubic" ? "bilinear" : "nearest" : r2;
  }
};
e$1([y()], l.prototype, "container", void 0), e$1([y()], l.prototype, "layer", void 0), e$1([y()], l.prototype, "type", void 0), l = e$1([n$4("esri.views.2d.layers.imagery.ImageryTileView2D")], l);
const n$1 = l;
class r extends r$1 {
  constructor(t2, s2, e2, a2, r2, o2, l2 = null) {
    super(t2, s2, e2, a2, r2, o2), this.tileData = new y$2(l2), this.tileData.coordScale = [r2, o2], this.tileData.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.tileData.destroy(), this.tileData = null, this.stage = null;
  }
  set stencilRef(t2) {
    this.tileData.stencilRef = t2;
  }
  get stencilRef() {
    return this.tileData.stencilRef;
  }
  _createTransforms() {
    return { dvs: e(), tileMat3: e() };
  }
  setTransform(e2) {
    super.setTransform(e2);
    const i2 = this.resolution / (e2.resolution * e2.pixelRatio), a2 = this.transforms.tileMat3, [r2, o2] = this.tileData.offset, l2 = [this.x + r2 * this.resolution, this.y - o2 * this.resolution], [h2, n2] = e2.toScreenNoRotation([0, 0], l2), { symbolTileSize: f2 } = this.tileData.symbolizerParameters, m2 = Math.round((this.width - this.tileData.offset[0]) / f2) * f2, c2 = Math.round((this.height - this.tileData.offset[1]) / f2) * f2, u2 = m2 / this.rangeX * i2, D = c2 / this.rangeY * i2;
    s$2(a2, u2, 0, 0, 0, D, 0, h2, n2, 1), i$2(this.transforms.dvs, e2.displayViewMat3, a2), this.tileData.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class o extends i$1 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false, this.symbolTypes = ["triangle"];
  }
  createTile(s2) {
    const t2 = this._tileInfoView.getTileBounds(u(), s2), [i2, o2] = this._tileInfoView.tileInfo.size, n2 = this._tileInfoView.getTileResolution(s2.level);
    return new r(s2, n2, t2[0], t2[3], i2, o2);
  }
  prepareRenderPasses(e2) {
    const r2 = e2.registerRenderPass({ name: "imagery (vf tile)", brushes: [d$1], target: () => this.children.map((e3) => e3.tileData), drawPhase: I.MAP });
    return [...super.prepareRenderPasses(e2), r2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === I.MAP && this.symbolTypes.forEach((s2) => {
      e2.renderPass = s2, super.doRender(e2);
    });
  }
}
let n = class extends T {
  constructor() {
    super(...arguments), this._handle = null, this.container = null, this.layer = null, this.type = "rasterVF";
  }
  canUseWebGLForProcessing() {
    return false;
  }
  async fetchTile(e2, t2) {
    t2 = __spreadProps(__spreadValues({}, t2), { interpolation: "nearest", requestProjectedLocalDirections: true });
    const i2 = await this.layer.fetchTile(e2.level, e2.row, e2.col, t2);
    return this.layer.rasterInfo.dataType === "vector-magdir" && (i2 == null ? void 0 : i2.pixelBlock) && (i2.pixelBlock = await this.layer.convertVectorFieldData(i2.pixelBlock, t2)), i2;
  }
  updateTileSource(e2, i2) {
    const r2 = i2.symbolizerParams, { tileData: o2 } = e2;
    o2.key = e2.key, o2.width = this._tileInfoView.tileInfo.size[0], o2.height = this._tileInfoView.tileInfo.size[1];
    const { symbolTileSize: s2 } = r2, { source: l2 } = i2;
    if (o2.offset = this._getTileSymbolOffset(o2.key, s2), r$3(l2) && r$3(l2.pixelBlock)) {
      const e3 = { extent: l2.extent, pixelBlock: l2.pixelBlock };
      o2.rawPixelData = e3, o2.symbolizerParameters = r2, o2.source = this._sampleVectorFieldData(l2.pixelBlock, r2, o2.offset);
    } else {
      const e3 = [Math.round((this._tileInfoView.tileInfo[0] - o2.offset[0]) / s2), Math.round((this._tileInfoView.tileInfo[1] - o2.offset[1]) / s2)], t2 = this.createEmptyTilePixelBlock(e3);
      o2.source = t2, o2.symbolizerParameters = r2;
    }
    return o2.invalidateVAO(), Promise.resolve(null);
  }
  updateTileSymbolizerParameters(e2, i2) {
    var _a;
    const r2 = i2.local, { symbolTileSize: o2 } = r2, { tileData: s2 } = e2;
    s2.offset = this._getTileSymbolOffset(s2.key, o2);
    const l2 = s2.symbolizerParameters.symbolTileSize;
    return s2.symbolizerParameters = r2, r$3((_a = s2.rawPixelData) == null ? void 0 : _a.pixelBlock) && l2 !== o2 && (s2.source = this._sampleVectorFieldData(s2.rawPixelData.pixelBlock, s2.symbolizerParameters, s2.offset)), Promise.resolve(null);
  }
  attach() {
    super.attach(), this.container = new o(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this._updateSymbolType(this.layer.renderer), this._handle = l$2(() => this.layer.renderer, (e2) => this._updateSymbolType(e2));
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this._handle.remove(), this._handle = null;
  }
  _getTileSymbolOffset(e2, t2) {
    const i2 = e2.col * this._tileInfoView.tileInfo.size[0] % t2, r2 = e2.row * this._tileInfoView.tileInfo.size[1] % t2;
    return [i2 > t2 / 2 ? t2 - i2 : -i2, r2 > t2 / 2 ? t2 - r2 : -r2];
  }
  _sampleVectorFieldData(e2, t2, i2) {
    const { symbolTileSize: r2 } = t2;
    return j$2(e2, "vector-uv", r2, i2);
  }
  _updateSymbolType(e2) {
    e2.type === "vector-field" && (this.container.symbolTypes = e2.style === "wind-barb" ? ["scalar", "triangle"] : e2.style === "simple-scalar" ? ["scalar"] : ["triangle"]);
  }
};
e$1([y()], n.prototype, "container", void 0), e$1([y()], n.prototype, "layer", void 0), e$1([y()], n.prototype, "type", void 0), n = e$1([n$4("esri.views.2d.layers.imagery.VectorFieldTileView2D")], n);
const c = n;
const f$1 = (f2) => {
  let m2 = class extends f2 {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    _getfullExtent() {
      return this.projectFullExtent(this.view.spatialReference);
    }
    get hasTilingEffects() {
      return this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment;
    }
    get datumTransformation() {
      return v$1(e$2(this.layer.fullExtent), this.view.spatialReference, true);
    }
    supportsSpatialReference(e2) {
      return !!this.projectFullExtent(e2);
    }
    projectFullExtent(e2) {
      const t2 = e$2(this.layer.fullExtent), r2 = v$1(t2, e2, false);
      return J(t2, e2, r2);
    }
    async fetchPopupFeatures(e2, o2) {
      const { layer: a2 } = this;
      if (!e2)
        throw new s$3("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: a2 });
      const { popupEnabled: n2 } = a2, l2 = s$4(a2, o2);
      if (!n2 || t(l2))
        throw new s$3("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: n2, popupTemplate: l2 });
      const p2 = [], { value: u2, magdirValue: f3 } = await a2.identify(e2, { timeExtent: this.timeExtent });
      let m3 = "";
      if (u2 && u2.length) {
        m3 = a2.type === "imagery-tile" && a2.hasStandardTime() && u2[0] != null ? u2.map((e4) => a2.getStandardTimeValue(e4)).join(", ") : u2.join(", ");
        const e3 = { ObjectId: 0 };
        e3["Raster.ServicePixelValue"] = m3;
        const r2 = a2.rasterInfo.attributeTable;
        if (r$3(r2)) {
          const { fields: t2, features: o4 } = r2, s3 = t2.find(({ name: e4 }) => e4.toLowerCase() === "value"), i2 = s3 ? o4.find((e4) => String(e4.attributes[s3.name]) === m3) : null;
          if (i2) {
            for (const r3 in i2.attributes)
              if (i2.attributes.hasOwnProperty(r3)) {
                e3[this._rasterFieldPrefix + r3] = i2.attributes[r3];
              }
          }
        }
        const o3 = a2.rasterInfo.dataType;
        o3 !== "vector-magdir" && o3 !== "vector-uv" || (e3["Raster.Magnitude"] = f3 == null ? void 0 : f3[0], e3["Raster.Direction"] = f3 == null ? void 0 : f3[1]);
        const s2 = new g$3(this.fullExtent.clone(), null, e3);
        s2.layer = a2, s2.sourceLayer = s2.layer, p2.push(s2);
      }
      return p2;
    }
  };
  return e$1([y()], m2.prototype, "layer", void 0), e$1([y(g$2)], m2.prototype, "timeExtent", void 0), e$1([y()], m2.prototype, "view", void 0), e$1([y()], m2.prototype, "fullExtent", null), e$1([y()], m2.prototype, "tileInfo", void 0), e$1([y({ readOnly: true })], m2.prototype, "hasTilingEffects", null), m2 = e$1([n$4("esri.views.layers.ImageryTileLayerView")], m2), m2;
};
let f = class extends f$1(i$3(y$3(u$2))) {
  constructor() {
    super(...arguments), this._useWebGLForProcessing = true, this._useProgressiveUpdate = true, this.subview = null;
  }
  get useWebGLForProcessing() {
    return this._useWebGLForProcessing;
  }
  set useWebGLForProcessing(e2) {
    this._useWebGLForProcessing = e2, this.subview && "useWebGLForProcessing" in this.subview && (this.subview.useWebGLForProcessing = e2);
  }
  get useProgressiveUpdate() {
    return this._useWebGLForProcessing;
  }
  set useProgressiveUpdate(e2) {
    this._useProgressiveUpdate = e2, this.subview && "useProgressiveUpdate" in this.subview && (this.subview.useProgressiveUpdate = e2);
  }
  update(e2) {
    this.subview.update(e2), this.notifyChange("updating");
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._updateSubview(), this.handles.add([l$2(() => {
      const { layer: e2 } = this;
      return { bandIds: e2.bandIds, renderer: e2.renderer, interpolation: e2.interpolation, multidimensionalDefinition: e2.multidimensionalDefinition, rasterFunction: e2.type === "imagery-tile" ? e2.rasterFunction : null };
    }, (e2, t2) => {
      var _a, _b;
      const s$12 = e2.interpolation !== t2.interpolation && (e2.interpolation === "majority" || t2.interpolation === "majority") && r$4(this.layer), o2 = e2.renderer !== t2.renderer && ((_a = t2.renderer) == null ? void 0 : _a.type) !== ((_b = e2.renderer) == null ? void 0 : _b.type);
      o2 && this._updateSubview();
      const a2 = e2.multidimensionalDefinition !== t2.multidimensionalDefinition, n2 = e2.rasterFunction !== t2.rasterFunction, u2 = a2 || s$12 || o2 || n2;
      this.subview.redrawOrRefetch(u2).catch((e3) => {
        j$1(e3) || s.getLogger(this.declaredClass).error(e3);
      }), this.notifyChange("updating");
    }), l$2(() => {
      var _a;
      return (_a = this.layer.blendMode) != null ? _a : "normal";
    }, (e2) => {
      this.subview.container.blendMode = e2;
    }, w$2), l$2(() => {
      var _a;
      return (_a = this.layer.effect) != null ? _a : null;
    }, (e2) => {
      this.subview.container.effect = e2;
    }, w$2), l$2(() => {
      var _a;
      return (_a = this.layer.multidimensionalSubset) != null ? _a : null;
    }, (e2, t2) => {
      const { multidimensionalDefinition: o2 } = this.layer;
      r$3(o2) && m(o2, e2) !== m(o2, t2) && (this.subview.redrawOrRefetch(true).catch((e3) => {
        j$1(e3) || s.getLogger(this.declaredClass).error(e3);
      }), this.notifyChange("updating"));
    }, U$1), l$2(() => this.timeExtent, () => {
      this.subview.timeExtent = this.timeExtent, this.subview.redrawOrRefetch(true).catch((e2) => {
        j$1(e2) || s.getLogger(this.declaredClass).error(e2);
      });
    }, h$1)], "attach");
  }
  detach() {
    var _a;
    this.handles.remove("attach"), this.layer.decreaseRasterJobHandlerUsage(), this._detachSubview(this.subview), (_a = this.subview) == null ? void 0 : _a.destroy(), this.subview = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.subview.moveEnd();
  }
  async hitTest(e2, i2) {
    return [{ type: "graphic", layer: this.layer, mapPoint: e2, graphic: new g$3({ attributes: {}, geometry: e2.clone() }) }];
  }
  doRefresh() {
    var _a;
    return (_a = this.subview) == null ? void 0 : _a.doRefresh();
  }
  _updateSubview() {
    var _a;
    const e2 = this.layer.renderer.type === "vector-field" ? "rasterVF" : this.layer.renderer.type === "flow" ? "flow" : "raster";
    if (this.subview) {
      if (this.subview.type === e2)
        return void this._attachSubview(this.subview);
      this._detachSubview(this.subview), (_a = this.subview) == null ? void 0 : _a.destroy(), this.subview = null;
    }
    const { layer: t2 } = this;
    let i2;
    i2 = e2 === "rasterVF" ? new c({ layer: t2, layerView: this }) : e2 === "flow" ? new d$2({ layer: t2, layerView: this }) : new n$1({ layer: t2, layerView: this }), "useWebGLForProcessing" in i2 && (i2.useWebGLForProcessing = this._useWebGLForProcessing), "useProgressiveUpdate" in i2 && (i2.useProgressiveUpdate = this._useProgressiveUpdate), "previousLOD" in i2 && (i2.previousLOD = this.subview && "previousLOD" in this.subview && this.subview.previousLOD), this._attachSubview(i2), this.subview = i2, this.requestUpdate();
  }
  _attachSubview(e2) {
    e2 && !e2.attached && (e2.attach(), e2.attached = true, this.container.addChildAt(e2.container, 0), e2.container.blendMode = this.layer.blendMode, e2.container.effect = this.layer.effect);
  }
  _detachSubview(e2) {
    (e2 == null ? void 0 : e2.attached) && (this.container.removeChild(e2.container), e2.detach(), e2.attached = false);
  }
};
e$1([y()], f.prototype, "subview", void 0), e$1([y()], f.prototype, "useWebGLForProcessing", null), e$1([y()], f.prototype, "useProgressiveUpdate", null), f = e$1([n$4("esri.views.2d.layers.ImageryTileLayerView2D")], f);
const L = f;
export { L as default };
