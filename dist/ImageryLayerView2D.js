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
import { $ as e, a0 as y, a1 as n, Z as m$2, m as j, s, cC as g$2, a as r, cY as x, cr as w, t as t$1, d9 as d$2, k as e$1, R as l, cz as w$1, U, cL as g$3, g as s$1, cO as x$2, a7 as w$2, da as i$3, d8 as U$1, cx as j$1 } from "./index.js";
import { y as y$1, d as d$4 } from "./RasterVFDisplayObject.js";
import { y as y$2, u as u$1 } from "./LayerView.js";
import { o as oe } from "./BaseGraphicContainer.js";
import { n as n$1 } from "./HighlightGraphicContainer.js";
import { A } from "./pixelUtils.js";
import { a } from "./BitmapContainer.js";
import { i } from "./utils.js";
import { i as i$1 } from "./Bitmap.js";
import { v } from "./ExportStrategy.js";
import { J } from "./rasterProjectionHelper.js";
import { x as x$1, d as d$3 } from "./dataUtils.js";
import { o, d as d$1 } from "./WGLContainer.js";
import { I } from "./Utils2.js";
import { s as s$2 } from "./popupUtils.js";
import { i as i$2 } from "./RefreshableLayerView.js";
import "vue";
import "./VertexArrayObject.js";
import "./Texture.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./enums2.js";
import "./MaterialKey.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./normalizeUtilsSync.js";
import "./projectionSupport.js";
import "./json.js";
import "./FeatureContainer.js";
import "./TileContainer.js";
import "./visualVariablesUtils.js";
import "./visualVariablesUtils2.js";
import "./Matcher.js";
import "./tileUtils.js";
import "./TileClipper.js";
import "./Geometry.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./devEnvironmentUtils.js";
import "./schemaUtils.js";
import "./createSymbolSchema.js";
import "./util.js";
import "./ComputedAttributeStorage.js";
import "./centroid.js";
import "./vec3f32.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
let d = class extends m$2 {
  constructor() {
    super(...arguments), this.attached = false, this.container = new i(), this.updateRequested = false, this.type = "imagery", this._bitmapView = new a();
  }
  destroy() {
    this.attached && (this.detach(), this.attached = false), this.updateRequested = false;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      j(e3) || s.getLogger(this.declaredClass).error(e3);
    });
  }
  hitTest(e2) {
    return new g$2({ attributes: {}, geometry: e2.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const e2 = this.layer.version >= 10, t2 = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, r2 = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new v({ container: this._bitmapView, imageNormalizationSupported: e2, imageMaxHeight: t2, imageMaxWidth: r2, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren(), this.updateRequested = false;
  }
  redraw() {
    this.strategy.updateExports(async (e2) => {
      var _a;
      if (e2.source instanceof HTMLImageElement)
        return;
      const t2 = await this.layer.applyRenderer({ extent: e2.source.extent, pixelBlock: (_a = e2.source.originalPixelBlock) != null ? _a : e2.source.pixelBlock }), r2 = e2.source;
      r2.filter = (e3) => this.layer.pixelFilter ? this.layer.applyFilter(e3) : __spreadProps(__spreadValues({}, t2), { extent: r2.extent });
    }).catch((e2) => {
      j(e2) || s.getLogger(this.declaredClass).error(e2);
    });
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view.requestUpdate());
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  getPixelData() {
    if (this.updating)
      return null;
    const e2 = this.strategy.bitmaps;
    if (e2.length === 1 && e2[0].source)
      return { extent: e2[0].source.extent, pixelBlock: e2[0].source.originalPixelBlock };
    if (e2.length > 1) {
      const t2 = this.view.extent, r$1 = e2.map((e3) => e3.source).filter((e3) => e3.extent && e3.extent.intersects(t2)).map((e3) => ({ extent: e3.extent, pixelBlock: e3.originalPixelBlock })), i2 = A(r$1, t2);
      return r(i2) ? { extent: i2.extent, pixelBlock: i2.pixelBlock } : null;
    }
    return null;
  }
  _fetchImage(e2, t2, r2, i2) {
    return (i2 = i2 || {}).timeExtent = this.timeExtent, i2.requestAsImageElement = true, this.layer.fetchImage(e2, t2, r2, i2).then((e3) => e3.imageOrCanvasElement ? e3.imageOrCanvasElement : this.layer.applyRenderer(e3.pixelData, { signal: i2.signal }).then((t3) => {
      const r3 = new i$1(t3.pixelBlock, t3.extent.clone(), e3.pixelData.pixelBlock);
      return r3.filter = (e4) => this.layer.applyFilter(e4), r3;
    }));
  }
};
e([y()], d.prototype, "attached", void 0), e([y()], d.prototype, "container", void 0), e([y()], d.prototype, "layer", void 0), e([y()], d.prototype, "strategy", void 0), e([y()], d.prototype, "timeExtent", void 0), e([y()], d.prototype, "view", void 0), e([y()], d.prototype, "updateRequested", void 0), e([y()], d.prototype, "updating", null), e([y()], d.prototype, "type", void 0), d = e([n("esri.views.2d.layers.imagery.ImageryView2D")], d);
const u = d;
class t extends o {
  constructor() {
    super(...arguments), this.symbolTypes = ["triangle"];
  }
  get requiresDedicatedFBO() {
    return false;
  }
  prepareRenderPasses(s2) {
    const t2 = s2.registerRenderPass({ name: "imagery (vf)", brushes: [d$1], target: () => this.children, drawPhase: I.MAP });
    return [...super.prepareRenderPasses(s2), t2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === I.MAP && this.symbolTypes.forEach((r2) => {
      e2.renderPass = r2, super.doRender(e2);
    });
  }
}
let p = class extends m$2 {
  constructor(e2) {
    super(e2), this.update = x((e3, t2) => this._update(e3, t2).catch((e4) => {
      j(e4) || s.getLogger(this.declaredClass).error(e4);
    }));
  }
  get updating() {
    return !!this._loading;
  }
  redraw(e2) {
    if (!this.container.children.length)
      return;
    const t2 = this.container.children[0];
    t2.symbolizerParameters = e2, t2.invalidateVAO(), this.container.symbolTypes = e2.style === "wind_speed" ? ["scalar", "triangle"] : e2.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.requestRender();
  }
  async _update(e2, t2, r2) {
    if (!e2.stationary)
      return;
    const { extent: i2, spatialReference: s2 } = e2.state, o2 = new w({ xmin: i2.xmin, ymin: i2.ymin, xmax: i2.xmax, ymax: i2.ymax, spatialReference: s2 }), [a2, n2] = e2.state.size;
    this._loading = this.fetchPixels(o2, a2, n2, r2);
    const c = await this._loading;
    this._addToDisplay(c, t2, e2.state), this._loading = null;
  }
  _addToDisplay(e2, t2, r2) {
    if (t$1(e2.pixelBlock))
      return this.container.children.forEach((e3) => e3.destroy()), void this.container.removeAllChildren();
    const { extent: s2, pixelBlock: o2 } = e2, a2 = new y$1(o2);
    a2.offset = [0, 0], a2.symbolizerParameters = t2, a2.rawPixelData = e2, a2.invalidateVAO(), a2.x = s2.xmin, a2.y = s2.ymax, a2.pixelRatio = r2.pixelRatio, a2.rotation = r2.rotation, a2.resolution = r2.resolution, a2.width = o2.width * t2.symbolTileSize, a2.height = o2.height * t2.symbolTileSize, this.container.children.forEach((e3) => e3.destroy()), this.container.removeAllChildren(), this.container.symbolTypes = t2.style === "wind_speed" ? ["scalar", "triangle"] : t2.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.addChild(a2);
  }
};
e([y()], p.prototype, "fetchPixels", void 0), e([y()], p.prototype, "container", void 0), e([y()], p.prototype, "_loading", void 0), e([y()], p.prototype, "updating", null), p = e([n("esri.views.2d.layers.imagery.ImageryVFStrategy")], p);
const m$1 = p;
let f = class extends d$2 {
  constructor() {
    super(...arguments), this.attached = false, this.container = new t(), this.type = "imageryVF", this._dataParameters = { exportParametersVersion: 0, bbox: "", symbolTileSize: 0, time: "" }, this._fetchpixels = async (e2, t2, r$1, i2) => {
      const n2 = await this._projectFullExtentPromise, { symbolTileSize: l2 } = this.layer.renderer, { extent: c, width: m2, height: p2 } = x$1(e2, t2, r$1, l2, n2);
      if (r(n2) && !n2.intersects(e2))
        return { extent: c, pixelBlock: null };
      const h = { bbox: `${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`, exportParametersVersion: this.layer.exportImageServiceParameters.version, symbolTileSize: l2, time: JSON.stringify(this.timeExtent || "") };
      if (this._canReuseVectorFieldData(h)) {
        const e3 = this.getPixelData();
        if (r(e3)) {
          if (`${e3.extent.xmin}, ${e3.extent.ymin}, ${e3.extent.xmax}, ${e3.extent.ymax}` === h.bbox)
            return e3;
        }
      }
      const { pixelData: u2 } = await this.layer.fetchImage(c, m2, p2, { timeExtent: this.timeExtent, requestAsImageElement: false, signal: i2 });
      if (this._dataParameters = h, t$1(u2.pixelBlock))
        return { extent: c, pixelBlock: null };
      return { extent: c, pixelBlock: this.layer.rasterInfo.dataType === "vector-uv" ? e$1(d$3(u2.pixelBlock, "vector-uv")) : u2.pixelBlock };
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    this._projectFullExtentPromise = this._getProjectedFullExtent(this.view.spatialReference), this._strategy = new m$1({ container: this.container, fetchPixels: this._fetchpixels }), this.handles.add(l(() => this.layer.renderer, (e2) => this._updateSymbolizerParams(e2), w$1), "vector-field-view-update");
  }
  detach() {
    this._strategy.destroy(), this.container.children.forEach((e2) => e2.destroy()), this.container.removeAllChildren(), this.handles.remove("vector-field-view-update"), this._strategy = this.container = this._projectFullExtentPromise = null;
  }
  getPixelData() {
    if (this.updating || !this.container.children.length)
      return null;
    const { extent: e2, pixelBlock: t2 } = this.container.children[0].rawPixelData;
    return { extent: e2, pixelBlock: t2 };
  }
  hitTest(e2) {
    return new g$2({ attributes: {}, geometry: e2.clone(), layer: this.layer });
  }
  update(e2) {
    this._strategy.update(e2, this._symbolizerParams);
  }
  redraw() {
    this._updateSymbolizerParams(this.layer.renderer), this._strategy.redraw(this._symbolizerParams);
  }
  _canReuseVectorFieldData(e2) {
    const t2 = this._dataParameters.exportParametersVersion === e2.exportParametersVersion, r2 = this._dataParameters.time === e2.time, i2 = this._dataParameters.symbolTileSize === e2.symbolTileSize, s2 = this._dataParameters.bbox === e2.bbox;
    return t2 && r2 && i2 && s2;
  }
  async _getProjectedFullExtent(e2) {
    try {
      return await J(this.layer.fullExtent, e2);
    } catch (t2) {
      try {
        const t3 = (await U(this.layer.url, { query: { option: "footprints", outSR: e2.wkid || JSON.stringify(e2.toJSON()), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
        return t3 ? w.fromJSON(t3) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(e2) {
    e2.type === "vector-field" && (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null }));
  }
};
e([y()], f.prototype, "attached", void 0), e([y()], f.prototype, "container", void 0), e([y()], f.prototype, "layer", void 0), e([y()], f.prototype, "timeExtent", void 0), e([y()], f.prototype, "type", void 0), e([y()], f.prototype, "view", void 0), e([y()], f.prototype, "updating", null), f = e([n("esri.views.2d.layers.imagery.VectorFieldView2D")], f);
const g$1 = f;
const m = (m2) => {
  let c = class extends m2 {
    constructor() {
      super(...arguments), this.view = null;
    }
    async fetchPopupFeatures(e2, s2) {
      const { layer: p2 } = this;
      if (!e2)
        throw new s$1("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: p2 });
      const { popupEnabled: a2 } = p2, m3 = s$2(p2, s2);
      if (!a2 || t$1(m3))
        throw new s$1("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: a2, popupTemplate: m3 });
      const c2 = await m3.getRequiredFields(), l2 = new x$2();
      l2.timeExtent = this.timeExtent, l2.geometry = e2, l2.outFields = c2, l2.outSpatialReference = e2.spatialReference;
      const y2 = this.view.resolution, w2 = this.view.type === "2d" ? new w$2(y2, y2, this.view.spatialReference) : new w$2(0.5 * y2, 0.5 * y2, this.view.spatialReference), { returnTopmostRaster: d2, showNoDataRecords: h } = m3.layerOptions || { returnTopmostRaster: true, showNoDataRecords: false }, f2 = { returnDomainValues: true, returnTopmostRaster: d2, pixelSize: w2, showNoDataRecords: h, signal: r(s2) ? s2.signal : null };
      return p2.queryVisibleRasters(l2, f2).then((e3) => e3);
    }
    canResume() {
      var _a;
      return !!super.canResume() && !((_a = this.timeExtent) == null ? void 0 : _a.isEmpty);
    }
  };
  return e([y()], c.prototype, "layer", void 0), e([y()], c.prototype, "suspended", void 0), e([y(g$3)], c.prototype, "timeExtent", void 0), e([y()], c.prototype, "view", void 0), c = e([n("esri.views.layers.ImageryLayerView")], c), c;
};
let g = class extends m(i$2(y$2(u$1))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1, this._highlightGraphics = new i$3(), this.subview = null;
  }
  get pixelData() {
    return this.updating ? null : "getPixelData" in this.subview ? this.subview.getPixelData() : null;
  }
  async hitTest(e2, i2) {
    return this.subview ? [{ type: "graphic", graphic: this.subview.hitTest(e2), layer: this.layer, mapPoint: e2 }] : null;
  }
  update(e2) {
    var _a;
    (_a = this.subview) == null ? void 0 : _a.update(e2);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.view && (this._highlightView = new oe({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new n$1(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container)), this.handles.add([l(() => {
      var _a;
      return (_a = this.layer.blendMode) != null ? _a : "normal";
    }, (e2) => this.subview.container.blendMode = e2, w$1), l(() => {
      var _a;
      return (_a = this.layer.effect) != null ? _a : null;
    }, (e2) => this.subview.container.effect = e2, w$1), l(() => this.layer.exportImageServiceParameters.version, (e2) => {
      e2 && this._exportImageVersion !== e2 && (this._exportImageVersion = e2, this.requestUpdate());
    }, U$1), l(() => this.timeExtent, (e2) => {
      this.subview.timeExtent = e2, "redraw" in this.subview ? this.requestUpdate() : this.subview.redrawOrRefetch();
    }, U$1), this.layer.on("redraw", () => {
      "redraw" in this.subview ? this.subview.redraw() : this.subview.redrawOrRefetch();
    }), l(() => this.layer.renderer, () => this._setSubView())], "imagerylayerview-update");
  }
  detach() {
    var _a, _b;
    this.layer.decreaseRasterJobHandlerUsage(), this.container.removeAllChildren(), this._detachSubview(this.subview), (_a = this.subview) == null ? void 0 : _a.destroy(), this.handles.remove("imagerylayerview-update"), this.subview = null, (_b = this._highlightView) == null ? void 0 : _b.destroy(), this._exportImageVersion = -1;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e2, r2) {
    if (!((Array.isArray(e2) ? e2[0] : j$1.isCollection(e2) ? e2.getItemAt(0) : e2) instanceof g$2))
      return { remove: () => {
      } };
    let s2 = [];
    return Array.isArray(e2) || j$1.isCollection(e2) ? s2 = e2.map((e3) => e3.clone()) : e2 instanceof g$2 && (s2 = [e2.clone()]), this._highlightGraphics.addMany(s2), { remove: () => {
      this._highlightGraphics.removeMany(s2);
    } };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  _setSubView() {
    var _a, _b;
    if (!this.view)
      return;
    const e2 = (_a = this.layer.renderer) == null ? void 0 : _a.type;
    let i2 = "imagery";
    if (e2 === "vector-field" ? i2 = "imageryVF" : e2 === "flow" && (i2 = "flow"), this.subview) {
      const { type: e3 } = this.subview;
      if (e3 === i2)
        return this._attachSubview(this.subview), void (e3 === "flow" ? this.subview.redrawOrRefetch() : e3 === "imagery" && this.layer.format === "lerc" ? this.subview.redraw() : this.requestUpdate());
      this._detachSubview(this.subview), (_b = this.subview) == null ? void 0 : _b.destroy();
    }
    this.subview = i2 === "imagery" ? new u({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : i2 === "imageryVF" ? new g$1({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new d$4({ layer: this.layer, layerView: this }), this._attachSubview(this.subview), this.requestUpdate();
  }
  _attachSubview(e2) {
    e2 && !e2.attached && (e2.attach(), e2.attached = true, this.container.addChildAt(e2.container, 0), e2.container.blendMode = this.layer.blendMode, e2.container.effect = this.layer.effect);
  }
  _detachSubview(e2) {
    (e2 == null ? void 0 : e2.attached) && (this.container.removeChild(e2.container), e2.detach(), e2.attached = false);
  }
};
e([y()], g.prototype, "pixelData", null), e([y()], g.prototype, "subview", void 0), g = e([n("esri.views.2d.layers.ImageryLayerView2D")], g);
const b = g;
export { b as default };
