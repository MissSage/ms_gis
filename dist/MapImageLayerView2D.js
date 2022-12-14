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
import { a as r, ar as c, bX as t, $ as e, a0 as y$1, dA as i$2, c0 as v$1, cr as w, aK as k, dB as T, a1 as n$1, co as l$1, dC as v$2, cC as g, cD as o$1, dD as r$1, dE as t$1, dr as f$3, dF as v$3, dG as s, dH as i$3, U, cL as g$1, da as i$4, cY as x, cA as a$3, g as s$1, dI as y$2, dJ as r$2, ch as $, t as t$2, h as has, cs as E, cP as i$5, m as j, s as s$4, R as l$2, cx as j$1 } from "./index.js";
import { a as a$4 } from "./BitmapContainer.js";
import { y as y$3, u as u$1 } from "./LayerView.js";
import { o as oe } from "./BaseGraphicContainer.js";
import { n as n$2 } from "./HighlightGraphicContainer.js";
import { v as v$4 } from "./ExportStrategy.js";
import { i, r as r$3 } from "./scaleUtils.js";
import { c as c$1 } from "./ExportImageParameters.js";
import { n } from "./floorFilterUtils.js";
import { s as s$2, a as a$5 } from "./drapedUtils.js";
import { i as i$1 } from "./sublayerUtils.js";
import { d, s as s$3 } from "./popupUtils.js";
import { i as i$6 } from "./RefreshableLayerView.js";
import "vue";
import "./WGLContainer.js";
import "./enums.js";
import "./pixelUtils.js";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./VertexArrayObject.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
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
import "./devEnvironmentUtils.js";
import "./schemaUtils.js";
import "./createSymbolSchema.js";
import "./util.js";
import "./ComputedAttributeStorage.js";
import "./centroid.js";
import "./vec3f32.js";
import "./Bitmap.js";
const o = (e2) => e2.spatialReference.wkid || JSON.stringify(e2.spatialReference);
function l(r$12, i2) {
  const { dpi: n2, gdbVersion: s2, geometry: l2, geometryPrecision: f2, height: p2, layerOption: m2, mapExtent: y2, maxAllowableOffset: c$12, returnFieldName: u2, returnGeometry: d2, returnUnformattedValues: g2, returnZ: x2, spatialReference: b, timeExtent: h, tolerance: E2, width: O } = r$12.toJSON(), { dynamicLayers: S, layerDefs: j2, layerIds: N } = a$2(r$12), J = i2 && r(i2.geometry) ? i2.geometry : null, R = { geometryPrecision: f2, maxAllowableOffset: c$12, returnFieldName: u2, returnGeometry: d2, returnUnformattedValues: g2, returnZ: x2, tolerance: E2 }, $2 = J && J.toJSON() || l2;
  if (R.imageDisplay = `${O},${p2},${n2}`, s2 && (R.gdbVersion = s2), $2 && (delete $2.spatialReference, R.geometry = JSON.stringify($2), R.geometryType = c($2)), b ? R.sr = b.wkid || JSON.stringify(b) : $2 && $2.spatialReference ? R.sr = o($2) : y2 && y2.spatialReference && (R.sr = o(y2)), R.time = h ? [h.start, h.end].join(",") : null, y2) {
    const { xmin: e2, ymin: r2, xmax: t2, ymax: i3 } = y2;
    R.mapExtent = `${e2},${r2},${t2},${i3}`;
  }
  return j2 && (R.layerDefs = j2), S && !j2 && (R.dynamicLayers = S), R.layers = m2 === "popup" ? "visible" : m2, N && !S && (R.layers += `:${N.join(",")}`), R;
}
function a$2(r$12) {
  var _a, _b;
  const { mapExtent: t2, floors: o2, width: l2, sublayers: a2, layerIds: p2, layerOption: m2, gdbVersion: y2 } = r$12, c2 = (_b = (_a = a2 == null ? void 0 : a2.find((e2) => e2.layer != null)) == null ? void 0 : _a.layer) == null ? void 0 : _b.serviceSublayers, u2 = m2 === "popup", d2 = {}, g2 = i({ extent: t2, width: l2, spatialReference: t2 == null ? void 0 : t2.spatialReference }), x2 = [], b = (e2) => {
    const r2 = g2 === 0, t3 = e2.minScale === 0 || g2 <= e2.minScale, i2 = e2.maxScale === 0 || g2 >= e2.maxScale;
    if (e2.visible && (r2 || t3 && i2))
      if (e2.sublayers)
        e2.sublayers.forEach(b);
      else {
        if ((p2 == null ? void 0 : p2.includes(e2.id)) === false || u2 && (!e2.popupTemplate || !e2.popupEnabled))
          return;
        x2.unshift(e2);
      }
  };
  if (a2 == null ? void 0 : a2.forEach(b), a2 && !x2.length)
    d2.layerIds = [];
  else {
    const r$13 = i$1(x2, c2, y2), t3 = x2.map((e2) => {
      const r2 = n(o2, e2);
      return e2.toExportImageJSON(r2);
    });
    if (r$13)
      d2.dynamicLayers = JSON.stringify(t3);
    else {
      if (a2) {
        let e2 = x2.map(({ id: e3 }) => e3);
        p2 && (e2 = e2.filter((e3) => p2.includes(e3))), d2.layerIds = e2;
      } else
        (p2 == null ? void 0 : p2.length) && (d2.layerIds = p2);
      const r$14 = f$2(o2, x2);
      if (r(r$14) && r$14.length) {
        const e2 = {};
        for (const t4 of r$14)
          t4.definitionExpression && (e2[t4.id] = t4.definitionExpression);
        Object.keys(e2).length && (d2.layerDefs = JSON.stringify(e2));
      }
    }
  }
  return d2;
}
function f$2(e2, t$12) {
  const i2 = !!(e2 == null ? void 0 : e2.length), s2 = t$12.filter((e3) => e3.definitionExpression != null || i2 && e3.floorInfo != null);
  return s2.length ? s2.map((t$13) => {
    const i3 = n(e2, t$13), s3 = t(i3, t$13.definitionExpression);
    return { id: t$13.id, definitionExpression: s3 };
  }) : null;
}
var m$2;
let a$1 = m$2 = class extends l$1 {
  constructor(t2) {
    super(t2), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  static from(t2) {
    return v$2(m$2, t2);
  }
};
e([y$1({ type: Number, json: { write: true } })], a$1.prototype, "dpi", void 0), e([y$1()], a$1.prototype, "floors", void 0), e([y$1({ type: String, json: { write: true } })], a$1.prototype, "gdbVersion", void 0), e([y$1({ types: i$2, json: { read: v$1, write: true } })], a$1.prototype, "geometry", void 0), e([y$1({ type: Number, json: { write: true } })], a$1.prototype, "geometryPrecision", void 0), e([y$1({ type: Number, json: { write: true } })], a$1.prototype, "height", void 0), e([y$1({ type: [Number], json: { write: true } })], a$1.prototype, "layerIds", void 0), e([y$1({ type: ["top", "visible", "all", "popup"], json: { write: true } })], a$1.prototype, "layerOption", void 0), e([y$1({ type: w, json: { write: true } })], a$1.prototype, "mapExtent", void 0), e([y$1({ type: Number, json: { write: true } })], a$1.prototype, "maxAllowableOffset", void 0), e([y$1({ type: Boolean, json: { write: true } })], a$1.prototype, "returnFieldName", void 0), e([y$1({ type: Boolean, json: { write: true } })], a$1.prototype, "returnGeometry", void 0), e([y$1({ type: Boolean, json: { write: true } })], a$1.prototype, "returnM", void 0), e([y$1({ type: Boolean, json: { write: true } })], a$1.prototype, "returnUnformattedValues", void 0), e([y$1({ type: Boolean, json: { write: true } })], a$1.prototype, "returnZ", void 0), e([y$1({ type: k, json: { write: true } })], a$1.prototype, "spatialReference", void 0), e([y$1()], a$1.prototype, "sublayers", void 0), e([y$1({ type: T, json: { write: true } })], a$1.prototype, "timeExtent", void 0), e([y$1({ type: Number, json: { write: true } })], a$1.prototype, "tolerance", void 0), e([y$1({ type: Number, json: { write: true } })], a$1.prototype, "width", void 0), a$1 = m$2 = e([n$1("esri.rest.support.IdentifyParameters")], a$1);
const u = a$1;
let m$1 = class extends l$1 {
  constructor(r2) {
    super(r2), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(r2, t2) {
    return g.fromJSON({ attributes: __spreadValues({}, t2.attributes), geometry: __spreadValues({}, t2.geometry) });
  }
  writeFeature(r$12, e2) {
    if (!r$12)
      return;
    const { attributes: t2, geometry: s2 } = r$12;
    t2 && (e2.attributes = __spreadValues({}, t2)), r(s2) && (e2.geometry = s2.toJSON(), e2.geometryType = t$1.toJSON(s2.type));
  }
};
e([y$1({ type: String, json: { write: true } })], m$1.prototype, "displayFieldName", void 0), e([y$1({ type: g })], m$1.prototype, "feature", void 0), e([o$1("feature", ["attributes", "geometry"])], m$1.prototype, "readFeature", null), e([r$1("feature")], m$1.prototype, "writeFeature", null), e([y$1({ type: Number, json: { write: true } })], m$1.prototype, "layerId", void 0), e([y$1({ type: String, json: { write: true } })], m$1.prototype, "layerName", void 0), m$1 = e([n$1("esri.rest.support.IdentifyResult")], m$1);
const y = m$1;
async function f$1(u2, i2, f2) {
  const c2 = (i2 = a(i2)).geometry ? [i2.geometry] : [], l$12 = f$3(u2);
  return l$12.path += "/identify", v$3(c2).then((e2) => {
    const t2 = l(i2, { geometry: e2 && e2[0] }), u3 = s(__spreadValues(__spreadProps(__spreadValues({}, l$12.query), { f: "json" }), t2)), a2 = i$3(u3, f2);
    return U(l$12.path, a2).then(m).then((r2) => p(r2, i2.sublayers));
  });
}
function m(r2) {
  const e2 = r2.data;
  return e2.results = e2.results || [], e2.exceededTransferLimit = Boolean(e2.exceededTransferLimit), e2.results = e2.results.map((r3) => y.fromJSON(r3)), e2;
}
function a(r2) {
  return r2 = u.from(r2);
}
function p(r2, e2) {
  if (!(e2 == null ? void 0 : e2.length))
    return r2;
  const t2 = new Map();
  function o2(r3) {
    t2.set(r3.id, r3), r3.sublayers && r3.sublayers.forEach(o2);
  }
  e2.forEach(o2);
  for (const s2 of r2.results)
    s2.feature.sourceLayer = t2.get(s2.layerId);
  return r2;
}
let _ = null;
const F = (F2) => {
  let I = class extends F2 {
    constructor() {
      super(...arguments), this._featuresResolutions = new WeakMap(), this.highlightGraphics = new i$4(), this.updateHighlightedFeatures = x(async (e2) => {
        this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e2).catch(() => {
        }));
      });
    }
    initialize() {
      this.exportImageParameters = new c$1({ layer: this.layer }), this.handles.add([a$3(() => this.highlightGraphics, "change", (e2) => {
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
      const { layer: s2 } = this;
      if (!e2)
        throw new s$1("mapimagelayer:fetchPopupFeatures", "Nothing to fetch without area", { layer: s2 });
      const i2 = (_c = (_b = (_a = this.layer.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsQuery) != null ? _c : true;
      if (!(((_f = (_e = (_d = this.layer.capabilities) == null ? void 0 : _d.operations) == null ? void 0 : _e.supportsIdentify) != null ? _f : true) && this.layer.version >= 10.5) && !i2)
        throw new s$1("mapimagelayer:fetchPopupFeatures-not-supported", "query operation is disabled for this service", { layer: s2 });
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
            return n2.l2;
          })).getSize), s2 = _(i2, t2, { view: this.view.type, scale: this.view.scale, shape: r2.type === "simple-marker" ? r2.style : null })), this.highlightGraphics.includes(t2) && (t2.symbol = new y$2({ style: "square", size: s2, xoffset: "xoffset" in r2 ? r2.xoffset : 0, yoffset: "yoffset" in r2 ? r2.yoffset : 0 }), t2.visible = true, this.highlightGraphicUpdated(t2, "symbol"));
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
          r$2(i2, e3, () => new Map()).set(n2.getObjectId(), n2);
        }
      const o2 = Array.from(i2, ([e3, t3]) => {
        const r2 = e3.createQuery();
        return r2.objectIds = [...t3.keys()], r2.outFields = [e3.objectIdField], r2.returnGeometry = true, r2.maxAllowableOffset = s2, r2.outSpatialReference = this.view.spatialReference, e3.queryFeatures(r2);
      }), a2 = await Promise.all(o2);
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
    async _fetchPopupFeaturesUsingIdentify(e2, t2) {
      const r2 = await this._createIdentifyParameters(e2, t2);
      if (t$2(r2))
        return [];
      const { results: i2 } = await f$1(this.layer.parsedUrl, r2);
      return i2.map((e3) => e3.feature);
    }
    async _createIdentifyParameters(e2, t2) {
      const { floors: r$12, spatialReference: s2, scale: o2 } = this.view, a2 = r(t2) ? t2.event : null, n2 = await this._collectPopupProviders(this.layer.sublayers, o2, t2);
      if (!n2.length)
        return null;
      await Promise.all(n2.map(({ sublayer: e3 }) => e3.load().catch(() => {
      })));
      const l2 = Math.min(has("mapimagelayer-popup-identify-max-tolerance"), this.layer.allSublayers.reduce((e3, t3) => t3.renderer ? s$2({ renderer: t3.renderer, event: a2 }) : e3, 2)), p2 = this.createFetchPopupFeaturesQueryGeometry(e2, l2), u$12 = r$3(o2, s2), m2 = Math.round(p2.width / u$12), y2 = new w({ xmin: p2.center.x - u$12 * m2, ymin: p2.center.y - u$12 * m2, xmax: p2.center.x + u$12 * m2, ymax: p2.center.y + u$12 * m2, spatialReference: p2.spatialReference });
      return new u({ floors: r$12, gdbVersion: this.layer.gdbVersion, geometry: e2, height: m2, layerOption: "popup", mapExtent: y2, returnGeometry: true, spatialReference: s2, sublayers: this.layer.sublayers, timeExtent: this.timeExtent, tolerance: l2, width: m2 });
    }
    async _fetchPopupFeaturesUsingQueries(e2, t2) {
      const r$12 = await this._collectPopupProviders(this.layer.sublayers, this.view.scale, t2), s2 = r(t2) ? t2.event : null, o2 = r$12.map(async ({ sublayer: t3, popupTemplate: r$13 }) => {
        var _a, _b;
        await t3.load().catch(() => {
        });
        const o3 = t3.createQuery(), a2 = s$2({ renderer: t3.renderer, event: s2 }), n$12 = this.createFetchPopupFeaturesQueryGeometry(e2, a2);
        if (o3.geometry = n$12, o3.outFields = await d(t3, r$13), o3.timeExtent = this.timeExtent, "floors" in this.view) {
          const e3 = (_b = (_a = this.view) == null ? void 0 : _a.floors) == null ? void 0 : _b.clone(), r$14 = n(e3, t3);
          r(r$14) && (o3.where = o3.where ? `(${o3.where}) AND (${r$14})` : r$14);
        }
        const l2 = this._getTargetResolution(n$12.width / a2), p2 = await this._loadArcadeModules(r$13), u2 = t3.geometryType === "point" || p2 && p2.arcadeUtils.hasGeometryOperations(r$13);
        u2 || (o3.maxAllowableOffset = l2);
        const { features: h } = await t3.queryFeatures(o3), c2 = u2 ? 0 : l2;
        for (const e3 of h)
          this._featuresResolutions.set(e3, c2);
        return h;
      });
      return (await E(o2)).reverse().reduce((e3, t3) => t3.value ? [...e3, ...t3.value] : e3, []).filter((e3) => e3 != null);
    }
    async _collectPopupProviders(e2, t2, r$12) {
      const s2 = [], o2 = async (e3) => {
        const a3 = e3.minScale === 0 || t2 <= e3.minScale, n2 = e3.maxScale === 0 || t2 >= e3.maxScale;
        if (e3.visible && a3 && n2) {
          if (e3.sublayers)
            e3.sublayers.forEach(o2);
          else if (e3.popupEnabled) {
            const t3 = s$3(e3, __spreadProps(__spreadValues({}, r$12), { defaultPopupTemplateEnabled: false }));
            r(t3) && s2.unshift({ sublayer: e3, popupTemplate: t3 });
          }
        }
      }, a2 = e2.toArray().reverse().map(o2);
      return await Promise.all(a2), s2;
    }
    _loadArcadeModules(e2) {
      var _a;
      if (((_a = e2.expressionInfos) == null ? void 0 : _a.length) || Array.isArray(e2.content) && e2.content.some((e3) => e3.type === "expression"))
        return i$5();
    }
  };
  return e([y$1()], I.prototype, "highlightGraphics", void 0), e([y$1()], I.prototype, "exportImageParameters", void 0), e([y$1({ readOnly: true })], I.prototype, "exportImageVersion", null), e([y$1()], I.prototype, "layer", void 0), e([y$1()], I.prototype, "suspended", void 0), e([y$1(g$1)], I.prototype, "timeExtent", void 0), I = e([n$1("esri.views.layers.MapImageLayerView")], I), I;
};
let f = class extends F(i$6(y$3(u$1))) {
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      j(e3) || s$4.getLogger(this.declaredClass).error(e3);
    }), e2.stationary && this.updateHighlightedFeatures(e2.state.resolution), this._highlightView.processUpdate(e2);
  }
  attach() {
    const { imageMaxWidth: e2, imageMaxHeight: t2, version: i2 } = this.layer, r2 = i2 >= 10.3, s2 = i2 >= 10;
    this._bitmapContainer = new a$4(), this.container.addChild(this._bitmapContainer), this._highlightView = new oe({ view: this.view, graphics: this.highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new n$2(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container), this.strategy = new v$4({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: e2, imageMaxHeight: t2, imageRotationSupported: r2, imageNormalizationSupported: s2, hidpi: true }), this.handles.add(l$2(() => this.exportImageVersion, () => this.requestUpdate()), "exportImageVersion"), this.handles.add(l$2(() => {
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
    if (e2 instanceof g ? r2 = [e2] : j$1.isCollection(e2) && e2.length > 0 ? r2 = e2.toArray() : Array.isArray(e2) && e2.length > 0 && (r2 = e2), r2 = r2 == null ? void 0 : r2.filter(Boolean), !r2 || !r2.length)
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
    return a$5(e2, t2, this.view);
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
e([y$1()], f.prototype, "strategy", void 0), e([y$1()], f.prototype, "updating", void 0), f = e([n$1("esri.views.2d.layers.MapImageLayerView2D")], f);
const v = f;
export { v as default };
