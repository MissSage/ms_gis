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
import { N as e, O as y, mA as g, P as n, mV as i, lz as x, n8 as c, bn as a, s, y as y$1, il as r, a4 as $, a2 as t, n9 as f$1, C as r$1, dc as has, na as r$2, fO as w, nb as u, nc as n$1, E, eq as i$1, gp as j, ea as s$3, ad as l, J as g$1, k as j$1 } from "./index.js";
import { a as a$1 } from "./BitmapContainer.js";
import { y as y$2 } from "./LayerView2D.js";
import { o as oe } from "./BaseGraphicContainer.js";
import { n as n$2 } from "./HighlightGraphicContainer.js";
import { v as v$1 } from "./ExportStrategy.js";
import { u as u$1 } from "./LayerView.js";
import { s as s$1, a as a$2 } from "./drapedUtils.js";
import { d, s as s$2 } from "./popupUtils.js";
import { i as i$2 } from "./RefreshableLayerView.js";
import "vue";
import "./WGLContainer.js";
import "./enums.js";
import "./pixelUtils.js";
import "./utils.js";
import "./Utils2.js";
import "./number.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./alignmentUtils.js";
import "./definitions.js";
import "./VertexArrayObject.js";
import "./vec4f32.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./cimAnalyzer.js";
import "./fontUtils.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./callExpressionWithFeature.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./normalizeUtilsSync.js";
import "./FeatureContainer.js";
import "./TileContainer.js";
import "./visualVariablesUtils.js";
import "./visualVariablesUtils2.js";
import "./Matcher.js";
import "./tileUtils.js";
import "./TileClipper.js";
import "./Geometry.js";
import "./ExpandedCIM.js";
import "./schemaUtils.js";
import "./createSymbolSchema.js";
import "./util.js";
import "./ComputedAttributeStorage.js";
import "./centroid.js";
import "./vec3f32.js";
import "./Bitmap.js";
let _ = null;
const F = (F2) => {
  let I = class extends F2 {
    constructor() {
      super(...arguments), this._featuresResolutions = new WeakMap(), this.highlightGraphics = new i(), this.updateHighlightedFeatures = x(async (e2) => {
        this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e2).catch(() => {
        }));
      });
    }
    initialize() {
      this.exportImageParameters = new c({ layer: this.layer }), this.handles.add([a(() => this.highlightGraphics, "change", (e2) => {
        this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e2.added).catch(() => {
        })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
      })]);
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get exportImageVersion() {
      var _a;
      return (_a = this.exportImageParameters) == null ? void 0 : _a.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    async fetchPopupFeatures(e2, r2) {
      var _a, _b, _c, _d, _e, _f;
      const { layer: s$12 } = this;
      if (!e2)
        throw new s("mapimagelayer:fetchPopupFeatures", "Nothing to fetch without area", { layer: s$12 });
      const i2 = (_c = (_b = (_a = this.layer.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsQuery) != null ? _c : true;
      if (!(((_f = (_e = (_d = this.layer.capabilities) == null ? void 0 : _d.operations) == null ? void 0 : _e.supportsIdentify) != null ? _f : true) && this.layer.version >= 10.5) && !i2)
        throw new s("mapimagelayer:fetchPopupFeatures-not-supported", "query operation is disabled for this service", { layer: s$12 });
      return i2 ? this._fetchPopupFeaturesUsingQueries(e2, r2) : this._fetchPopupFeaturesUsingIdentify(e2, r2);
    }
    canResume() {
      var _a;
      return !!super.canResume() && !((_a = this.timeExtent) == null ? void 0 : _a.isEmpty);
    }
    async _updateHighlightedFeaturesSymbols(e2) {
      for (const t2 of e2) {
        const e3 = "renderer" in t2.sourceLayer && t2.sourceLayer.renderer;
        "geometryType" in t2.sourceLayer && t2.sourceLayer.geometryType === "point" && e3 && "getSymbolAsync" in e3 && e3.getSymbolAsync(t2).then(async (r2) => {
          var _a;
          let s2 = "width" in r2 && "height" in r2 && r2.width != null && r2.height != null ? Math.max(r2.width, r2.height) : "size" in r2 ? r2.size : null;
          const i2 = "visualVariables" in e3 && ((_a = e3.visualVariables) == null ? void 0 : _a.find((e4) => e4.type === "size"));
          i2 && (_ || (_ = (await import("./index.js").then(function(n2) {
            return n2.sq;
          })).getSize), s2 = _(i2, t2, { view: this.view.type, scale: this.view.scale, shape: r2.type === "simple-marker" ? r2.style : null })), this.highlightGraphics.includes(t2) && (t2.symbol = new y$1({ style: "square", size: s2, xoffset: "xoffset" in r2 ? r2.xoffset : 0, yoffset: "yoffset" in r2 ? r2.yoffset : 0 }), t2.visible = true, this.highlightGraphicUpdated(t2, "symbol"));
        });
      }
    }
    async _updateHighlightedFeaturesGeometries(e2) {
      this._highlightGeometriesResolution = e2;
      const t2 = this.highlightGraphics;
      if (!t2.length || !this.layer.capabilities.operations.supportsQuery)
        return;
      const s2 = this._getTargetResolution(e2), i2 = new Map();
      for (const n2 of t2)
        if (!this._featuresResolutions.has(n2) || this._featuresResolutions.get(n2) > s2) {
          const e3 = n2.sourceLayer;
          r(i2, e3, () => new Map()).set(n2.getObjectId(), n2);
        }
      const o = Array.from(i2, ([e3, t3]) => {
        const r2 = e3.createQuery();
        return r2.objectIds = [...t3.keys()], r2.outFields = [e3.objectIdField], r2.returnGeometry = true, r2.maxAllowableOffset = s2, r2.outSpatialReference = this.view.spatialReference, e3.queryFeatures(r2);
      }), a2 = await Promise.all(o);
      if (!this.destroyed)
        for (const { features: r2 } of a2)
          for (const e3 of r2) {
            const t3 = e3.sourceLayer, r3 = i2.get(t3).get(e3.getObjectId());
            r3 && this.highlightGraphics.includes(r3) && (r3.geometry = e3.geometry, this.highlightGraphicUpdated(r3, "geometry"), this._featuresResolutions.set(r3, s2));
          }
    }
    _getTargetResolution(e2) {
      const t2 = e2 * $(this.view.spatialReference), r2 = t2 / 16;
      return r2 <= 10 ? 0 : e2 / t2 * r2;
    }
    async _fetchPopupFeaturesUsingIdentify(e2, t$1) {
      const r2 = await this._createIdentifyParameters(e2, t$1);
      if (t(r2))
        return [];
      const { results: i2 } = await f$1(this.layer.parsedUrl, r2);
      return i2.map((e3) => e3.feature);
    }
    async _createIdentifyParameters(e2, t2) {
      const { floors: r2, spatialReference: s2, scale: o } = this.view, a2 = r$1(t2) ? t2.event : null, n2 = await this._collectPopupProviders(this.layer.sublayers, o, t2);
      if (!n2.length)
        return null;
      await Promise.all(n2.map(({ sublayer: e3 }) => e3.load().catch(() => {
      })));
      const l2 = Math.min(has("mapimagelayer-popup-identify-max-tolerance"), this.layer.allSublayers.reduce((e3, t3) => t3.renderer ? s$1({ renderer: t3.renderer, event: a2 }) : e3, 2)), p = this.createFetchPopupFeaturesQueryGeometry(e2, l2), u$12 = r$2(o, s2), m = Math.round(p.width / u$12), y2 = new w({ xmin: p.center.x - u$12 * m, ymin: p.center.y - u$12 * m, xmax: p.center.x + u$12 * m, ymax: p.center.y + u$12 * m, spatialReference: p.spatialReference });
      return new u({ floors: r2, gdbVersion: this.layer.gdbVersion, geometry: e2, height: m, layerOption: "popup", mapExtent: y2, returnGeometry: true, spatialReference: s2, sublayers: this.layer.sublayers, timeExtent: this.timeExtent, tolerance: l2, width: m });
    }
    async _fetchPopupFeaturesUsingQueries(e2, t2) {
      const r2 = await this._collectPopupProviders(this.layer.sublayers, this.view.scale, t2), s2 = r$1(t2) ? t2.event : null, o = r2.map(async ({ sublayer: t3, popupTemplate: r3 }) => {
        var _a, _b;
        await t3.load().catch(() => {
        });
        const o2 = t3.createQuery(), a2 = s$1({ renderer: t3.renderer, event: s2 }), n2 = this.createFetchPopupFeaturesQueryGeometry(e2, a2);
        if (o2.geometry = n2, o2.outFields = await d(t3, r3), o2.timeExtent = this.timeExtent, "floors" in this.view) {
          const e3 = (_b = (_a = this.view) == null ? void 0 : _a.floors) == null ? void 0 : _b.clone(), r4 = n$1(e3, t3);
          r$1(r4) && (o2.where = o2.where ? `(${o2.where}) AND (${r4})` : r4);
        }
        const l2 = this._getTargetResolution(n2.width / a2), p = await this._loadArcadeModules(r3), u2 = t3.geometryType === "point" || p && p.arcadeUtils.hasGeometryOperations(r3);
        u2 || (o2.maxAllowableOffset = l2);
        const { features: h } = await t3.queryFeatures(o2), c2 = u2 ? 0 : l2;
        for (const e3 of h)
          this._featuresResolutions.set(e3, c2);
        return h;
      });
      return (await E(o)).reverse().reduce((e3, t3) => t3.value ? [...e3, ...t3.value] : e3, []).filter((e3) => e3 != null);
    }
    async _collectPopupProviders(e2, t2, r2) {
      const s2 = [], o = async (e3) => {
        const a3 = e3.minScale === 0 || t2 <= e3.minScale, n2 = e3.maxScale === 0 || t2 >= e3.maxScale;
        if (e3.visible && a3 && n2) {
          if (e3.sublayers)
            e3.sublayers.forEach(o);
          else if (e3.popupEnabled) {
            const t3 = s$2(e3, __spreadProps(__spreadValues({}, r2), { defaultPopupTemplateEnabled: false }));
            r$1(t3) && s2.unshift({ sublayer: e3, popupTemplate: t3 });
          }
        }
      }, a2 = e2.toArray().reverse().map(o);
      return await Promise.all(a2), s2;
    }
    _loadArcadeModules(e2) {
      var _a;
      if (((_a = e2.expressionInfos) == null ? void 0 : _a.length) || Array.isArray(e2.content) && e2.content.some((e3) => e3.type === "expression"))
        return i$1();
    }
  };
  return e([y()], I.prototype, "highlightGraphics", void 0), e([y()], I.prototype, "exportImageParameters", void 0), e([y({ readOnly: true })], I.prototype, "exportImageVersion", null), e([y()], I.prototype, "layer", void 0), e([y()], I.prototype, "suspended", void 0), e([y(g)], I.prototype, "timeExtent", void 0), I = e([n("esri.views.layers.MapImageLayerView")], I), I;
};
let f = class extends F(i$2(y$2(u$1))) {
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      j(e3) || s$3.getLogger(this.declaredClass).error(e3);
    }), e2.stationary && this.updateHighlightedFeatures(e2.state.resolution), this._highlightView.processUpdate(e2);
  }
  attach() {
    const { imageMaxWidth: e2, imageMaxHeight: t2, version: i2 } = this.layer, r2 = i2 >= 10.3, s2 = i2 >= 10;
    this._bitmapContainer = new a$1(), this.container.addChild(this._bitmapContainer), this._highlightView = new oe({ view: this.view, graphics: this.highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new n$2(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container), this.strategy = new v$1({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: e2, imageMaxHeight: t2, imageRotationSupported: r2, imageNormalizationSupported: s2, hidpi: true }), this.handles.add(l(() => this.exportImageVersion, () => this.requestUpdate()), "exportImageVersion"), this.handles.add(l(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.floors;
    }, () => this.requestUpdate()), "view.floors"), this.requestUpdate();
  }
  detach() {
    this.handles.remove("exportImageVersion"), this.handles.remove("view.floors"), this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren(), this._highlightView.destroy();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e2) {
    let r2 = null;
    if (e2 instanceof g$1 ? r2 = [e2] : j$1.isCollection(e2) && e2.length > 0 ? r2 = e2.toArray() : Array.isArray(e2) && e2.length > 0 && (r2 = e2), r2 = r2 == null ? void 0 : r2.filter(Boolean), !r2 || !r2.length)
      return { remove: () => {
      } };
    for (const t2 of r2)
      "geometryType" in t2.sourceLayer && t2.sourceLayer.geometryType === "point" && (t2.visible = false);
    return this.highlightGraphics.addMany(r2), { remove: () => {
      this.highlightGraphics.removeMany(r2);
    } };
  }
  supportsSpatialReference(e2) {
    return this.layer.serviceSupportsSpatialReference(e2);
  }
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return a$2(e2, t2, this.view);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  highlightGraphicUpdated(e2, t2) {
    this._highlightView.graphicUpdateHandler({ graphic: e2, property: t2 });
  }
  fetchImage(e2, t2, i2, r2) {
    return this.layer.fetchImage(e2, t2, i2, __spreadValues({ timeExtent: this.timeExtent, floors: this.view.floors }, r2));
  }
  fetchImageBitmap(e2, t2, i2, r2) {
    return this.layer.fetchImageBitmap(e2, t2, i2, __spreadValues({ timeExtent: this.timeExtent, floors: this.view.floors }, r2));
  }
};
e([y()], f.prototype, "strategy", void 0), e([y()], f.prototype, "updating", void 0), f = e([n("esri.views.2d.layers.MapImageLayerView2D")], f);
const v = f;
export { v as default };
