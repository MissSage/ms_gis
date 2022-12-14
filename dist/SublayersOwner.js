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
import { $ as e, a0 as y$1, cD as o, cr as w, ij as j, i9 as p, aK as k, a1 as n, U, bO as j$1, l as f$1, Y as a, h4 as O, aG as s, hS as m$1, g as s$1, dL as r$1, hc as m$2, a as r$2, c9 as r$3, js as s$2, hg as c, s as s$3, jt as c$1, hl as b, cx as j$2, ds as I, iC as e$1, i7 as p$1, cO as x, aX as y$2, bX as t, bY as c$2, gL as i, g2 as y$3, ju as p$2, gp as T, iQ as j$3, dD as r$4, d4 as k$1, iT as p$3, i8 as n$1, hQ as K$1, dC as v, cn as s$4, iW as n$2, jg as t$1, dS as l, R as l$1, d8 as U$1, jv as n$3 } from "./index.js";
import { r } from "./Version.js";
import { t as t$2 } from "./sublayerUtils.js";
const y = (y2) => {
  let d = class extends y2 {
    constructor() {
      super(...arguments), this.capabilities = void 0, this.copyright = null, this.fullExtent = null, this.legendEnabled = true, this.spatialReference = null, this.version = void 0, this._allLayersAndTablesPromise = null, this._allLayersAndTablesMap = null;
    }
    readCapabilities(e2, r$12) {
      var _a, _b;
      const s2 = r$12.capabilities && r$12.capabilities.split(",").map((e3) => e3.toLowerCase().trim());
      if (!s2)
        return { operations: { supportsExportMap: false, supportsExportTiles: false, supportsIdentify: false, supportsQuery: false, supportsTileMap: false }, exportMap: null, exportTiles: null };
      const t2 = this.type, i2 = s2.includes("data"), p2 = s2.includes("query"), a2 = s2.includes("map"), l2 = !!r$12.exportTilesAllowed, n2 = s2.includes("tilemap"), u = t2 !== "tile" && !!r$12.supportsDynamicLayers, c2 = t2 !== "tile" && (!r$12.tileInfo || u), y3 = t2 !== "tile" && (!r$12.tileInfo || u), d2 = t2 !== "tile", m2 = r$12.cimVersion && r.parse(r$12.cimVersion), h2 = (_a = m2 == null ? void 0 : m2.since(1, 4)) != null ? _a : false, b2 = (_b = m2 == null ? void 0 : m2.since(2, 0)) != null ? _b : false;
      return { operations: { supportsExportMap: a2, supportsExportTiles: l2, supportsIdentify: p2, supportsQuery: i2, supportsTileMap: n2 }, exportMap: a2 ? { supportsArcadeExpressionForLabeling: h2, supportsSublayersChanges: d2, supportsDynamicLayers: u, supportsSublayerVisibility: c2, supportsSublayerDefinitionExpression: y3, supportsCIMSymbols: b2 } : null, exportTiles: l2 ? { maxExportTilesCount: +r$12.maxExportTilesCount } : null };
    }
    readVersion(e2, r2) {
      let s2 = r2.currentVersion;
      return s2 || (s2 = r2.hasOwnProperty("capabilities") || r2.hasOwnProperty("tables") ? 10 : r2.hasOwnProperty("supportedImageFormatTypes") ? 9.31 : 9.3), s2;
    }
    async fetchSublayerInfo(e2, r2) {
      var _a;
      return await this.fetchAllLayersAndTables(r2), (_a = this._allLayersAndTablesMap) == null ? void 0 : _a.get(e2);
    }
    async fetchAllLayersAndTables(e2) {
      await this.load(e2), this._allLayersAndTablesPromise || (this._allLayersAndTablesPromise = U(j$1(this.url).path + "/layers", { responseType: "json", query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }) }).then((e3) => {
        this._allLayersAndTablesMap = new Map();
        for (const r2 of e3.data.layers)
          this._allLayersAndTablesMap.set(r2.id, r2);
        return { result: e3.data };
      }, (e3) => ({ error: e3 })));
      const o2 = await this._allLayersAndTablesPromise;
      if (f$1(e2), "result" in o2)
        return o2.result;
      throw o2.error;
    }
  };
  return e([y$1({ readOnly: true })], d.prototype, "capabilities", void 0), e([o("service", "capabilities", ["capabilities", "exportTilesAllowed", "maxExportTilesCount", "supportsDynamicLayers", "tileInfo"])], d.prototype, "readCapabilities", null), e([y$1({ json: { read: { source: "copyrightText" } } })], d.prototype, "copyright", void 0), e([y$1({ type: w })], d.prototype, "fullExtent", void 0), e([y$1(j)], d.prototype, "id", void 0), e([y$1({ type: Boolean, json: { origins: { service: { read: { enabled: false } } }, read: { source: "showLegend" }, write: { target: "showLegend" } } })], d.prototype, "legendEnabled", void 0), e([y$1(p)], d.prototype, "popupEnabled", void 0), e([y$1({ type: k })], d.prototype, "spatialReference", void 0), e([y$1({ readOnly: true })], d.prototype, "version", void 0), e([o("version", ["currentVersion", "capabilities", "tables", "supportedImageFormatTypes"])], d.prototype, "readVersion", null), d = e([n("esri.layers.mixins.ArcGISMapService")], d), d;
};
var $;
function J(e2) {
  return e2 && e2.type === "esriSMS";
}
function B(e2, r2, t2) {
  var _a;
  const i2 = this.originIdOf(r2) >= t$1(t2.origin);
  return { ignoreOrigin: true, allowNull: i2, enabled: !!t2 && (((_a = t2.layer) == null ? void 0 : _a.type) === "map-image" && (t2.writeSublayerStructure || i2)) };
}
function Q(e2, r2, t2) {
  var _a;
  return { enabled: !!t2 && (((_a = t2.layer) == null ? void 0 : _a.type) === "tile" && this._isOverridden(r2)) };
}
function G(e2, r2, t2) {
  return { ignoreOrigin: true, enabled: t2 && t2.writeSublayerStructure || false };
}
function H(e2, r2, t2) {
  return { ignoreOrigin: true, enabled: !!t2 && (t2.writeSublayerStructure || this.originIdOf(r2) >= t$1(t2.origin)) };
}
let K = 0;
const W = new Set();
W.add("layer"), W.add("parent"), W.add("loaded"), W.add("loadStatus"), W.add("loadError"), W.add("loadWarnings");
let X = $ = class extends a(O(s(m$1))) {
  constructor(e2) {
    super(e2), this.capabilities = void 0, this.fields = null, this.fullExtent = null, this.geometryType = null, this.globalIdField = null, this.legendEnabled = true, this.objectIdField = null, this.popupEnabled = true, this.popupTemplate = null, this.sourceJSON = null, this.title = null, this.typeIdField = null, this.types = null;
  }
  async load(e2) {
    return this.addResolvingPromise((async () => {
      var _a, _b;
      if (!this.layer && !this.url)
        throw new s$1("sublayer:missing-layer", "Sublayer can't be loaded without being part of a layer", { sublayer: this });
      let r2 = null;
      if (!this.layer || this.originIdOf("url") > r$1.SERVICE || ((_a = this.source) == null ? void 0 : _a.type) === "data-layer") {
        r2 = (await U(this.url, __spreadValues({ responseType: "json", query: { f: "json" } }, e2))).data;
      } else {
        let t2 = this.id;
        ((_b = this.source) == null ? void 0 : _b.type) === "map-layer" && (t2 = this.source.mapLayerId), r2 = await this.layer.fetchSublayerInfo(t2, e2);
      }
      r2 && (this.sourceJSON = r2, this.read({ layerDefinition: r2 }, { origin: "service" }));
    })()), this;
  }
  readCapabilities(e2, r2) {
    const t2 = (e2 = (r2 = r2.layerDefinition || r2).capabilities || e2) ? e2.toLowerCase().split(",").map((e3) => e3.trim()) : [], i2 = this.url ? m$2(this.url) : null, o2 = t2.includes(r$2(i2) && i2.serverType === "MapServer" ? "data" : "query");
    return { exportMap: { supportsModification: !!r2.canModifyLayer }, operations: { supportsQuery: o2 } };
  }
  set definitionExpression(e2) {
    this._setAndNotifyLayer("definitionExpression", e2);
  }
  get fieldsIndex() {
    return new r$3(this.fields || []);
  }
  set floorInfo(e2) {
    this._setAndNotifyLayer("floorInfo", e2);
  }
  readGlobalIdFieldFromService(e2, r2) {
    if ((r2 = r2.layerDefinition || r2).globalIdField)
      return r2.globalIdField;
    if (r2.fields) {
      for (const t2 of r2.fields)
        if (t2.type === "esriFieldTypeGlobalID")
          return t2.name;
    }
  }
  get id() {
    const e2 = this._get("id");
    return e2 != null ? e2 : K++;
  }
  set id(e2) {
    this._get("id") !== e2 && (this.get("layer.capabilities.exportMap.supportsDynamicLayers") !== false ? this._set("id", e2) : this._logLockedError("id", "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));
  }
  set labelingInfo(e2) {
    this._setAndNotifyLayer("labelingInfo", e2);
  }
  writeLabelingInfo(e2, r2, t2, i2) {
    e2 && e2.length && (r2.layerDefinition = { drawingInfo: { labelingInfo: e2.map((e3) => e3.write({}, i2)) } });
  }
  set labelsVisible(e2) {
    this._setAndNotifyLayer("labelsVisible", e2);
  }
  set layer(e2) {
    this._set("layer", e2), this.sublayers && this.sublayers.forEach((r2) => r2.layer = e2);
  }
  set listMode(e2) {
    this._set("listMode", e2);
  }
  set minScale(e2) {
    this._setAndNotifyLayer("minScale", e2);
  }
  readMinScale(e2, r2) {
    return r2.minScale || r2.layerDefinition && r2.layerDefinition.minScale || 0;
  }
  set maxScale(e2) {
    this._setAndNotifyLayer("maxScale", e2);
  }
  readMaxScale(e2, r2) {
    return r2.maxScale || r2.layerDefinition && r2.layerDefinition.maxScale || 0;
  }
  get effectiveScaleRange() {
    const { minScale: e2, maxScale: r2 } = this;
    return { minScale: e2, maxScale: r2 };
  }
  readObjectIdFieldFromService(e2, r2) {
    if ((r2 = r2.layerDefinition || r2).objectIdField)
      return r2.objectIdField;
    if (r2.fields) {
      for (const t2 of r2.fields)
        if (t2.type === "esriFieldTypeOID")
          return t2.name;
    }
  }
  set opacity(e2) {
    this._setAndNotifyLayer("opacity", e2);
  }
  readOpacity(e2, r2) {
    const t2 = r2.layerDefinition;
    return 1 - 0.01 * (t2.transparency != null ? t2.transparency : t2.drawingInfo.transparency);
  }
  writeOpacity(e2, r2, t2, i2) {
    r2.layerDefinition = { drawingInfo: { transparency: 100 - 100 * e2 } };
  }
  writeParent(e2, r2) {
    this.parent && this.parent !== this.layer ? r2.parentLayerId = s$2(this.parent.id) : r2.parentLayerId = -1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e2) {
    if (e2) {
      for (const r2 of e2.getSymbols())
        if (c(r2)) {
          s$3.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");
          break;
        }
    }
    this._setAndNotifyLayer("renderer", e2);
  }
  get source() {
    return this._get("source") || new c$1({ mapLayerId: this.id });
  }
  set source(e2) {
    this._setAndNotifyLayer("source", e2);
  }
  set sublayers(e2) {
    this._handleSublayersChange(e2, this._get("sublayers")), this._set("sublayers", e2);
  }
  castSublayers(e2) {
    return b(j$2.ofType($), e2);
  }
  writeSublayers(e2, r2, t2) {
    this.get("sublayers.length") && (r2[t2] = this.sublayers.map((e3) => e3.id).toArray().reverse());
  }
  readTypeIdField(e2, r2) {
    let t2 = (r2 = r2.layerDefinition || r2).typeIdField;
    if (t2 && r2.fields) {
      t2 = t2.toLowerCase();
      const e3 = r2.fields.find((e4) => e4.name.toLowerCase() === t2);
      e3 && (t2 = e3.name);
    }
    return t2;
  }
  get url() {
    var _a, _b;
    const e2 = (_b = (_a = this.layer) == null ? void 0 : _a.parsedUrl) != null ? _b : this._lastParsedUrl, r2 = this.source;
    if (!e2)
      return null;
    if (this._lastParsedUrl = e2, (r2 == null ? void 0 : r2.type) === "map-layer")
      return `${e2.path}/${r2.mapLayerId}`;
    const t2 = { layer: JSON.stringify({ source: this.source }) };
    return `${e2.path}/dynamicLayer?${I(t2)}`;
  }
  set url(e2) {
    this._overrideIfSome("url", e2);
  }
  set visible(e2) {
    this._setAndNotifyLayer("visible", e2);
  }
  writeVisible(e2, r2, t2, i2) {
    r2[t2] = this.getAtOrigin("defaultVisibility", "service") || e2;
  }
  clone() {
    const { store: e2 } = e$1(this), r2 = new $();
    return e$1(r2).store = e2.clone(W), this.commitProperty("url"), r2._lastParsedUrl = this._lastParsedUrl, r2;
  }
  createPopupTemplate(e2) {
    return p$1(this, e2);
  }
  createQuery() {
    return new x({ returnGeometry: true, where: this.definitionExpression || "1=1" });
  }
  async createFeatureLayer() {
    var _a, _b;
    if (this.hasOwnProperty("sublayers"))
      return null;
    const e2 = (_a = this.layer) == null ? void 0 : _a.parsedUrl, r2 = new (await import("./index.js").then(function(n2) {
      return n2.l4;
    })).default({ url: e2.path });
    return e2 && this.source && (this.source.type === "map-layer" ? r2.layerId = this.source.mapLayerId : r2.dynamicDataSource = this.source), this.layer.refreshInterval != null && (r2.refreshInterval = this.layer.refreshInterval), this.definitionExpression && (r2.definitionExpression = this.definitionExpression), this.floorInfo && (r2.floorInfo = y$2(this.floorInfo)), this.originIdOf("labelingInfo") > r$1.SERVICE && (r2.labelingInfo = y$2(this.labelingInfo)), this.originIdOf("labelsVisible") > r$1.DEFAULTS && (r2.labelsVisible = this.labelsVisible), this.originIdOf("legendEnabled") > r$1.DEFAULTS && (r2.legendEnabled = this.legendEnabled), this.originIdOf("visible") > r$1.DEFAULTS && (r2.visible = this.visible), this.originIdOf("minScale") > r$1.DEFAULTS && (r2.minScale = this.minScale), this.originIdOf("maxScale") > r$1.DEFAULTS && (r2.maxScale = this.maxScale), this.originIdOf("opacity") > r$1.DEFAULTS && (r2.opacity = this.opacity), this.originIdOf("popupTemplate") > r$1.DEFAULTS && (r2.popupTemplate = y$2(this.popupTemplate)), this.originIdOf("renderer") > r$1.SERVICE && (r2.renderer = y$2(this.renderer)), ((_b = this.source) == null ? void 0 : _b.type) === "data-layer" && (r2.dynamicDataSource = this.source.clone()), this.originIdOf("title") > r$1.DEFAULTS && (r2.title = this.title), this.layer.type === "map-image" && this.layer.originIdOf("customParameters") > r$1.DEFAULTS && (r2.customParameters = this.layer.customParameters), this.layer.type === "tile" && this.layer.originIdOf("customParameters") > r$1.DEFAULTS && (r2.customParameters = this.layer.customParameters), r2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFeatureType(e2) {
    const { typeIdField: r2, types: t2 } = this;
    if (!r2 || !e2)
      return null;
    const i2 = e2.attributes ? e2.attributes[r2] : void 0;
    if (i2 == null)
      return null;
    let o2 = null;
    return t2.some((e3) => {
      const { id: r3 } = e3;
      return r3 != null && (r3.toString() === i2.toString() && (o2 = e3), !!o2);
    }), o2;
  }
  getFieldDomain(e2, r2) {
    const t2 = r2 && r2.feature, i2 = this.getFeatureType(t2);
    if (i2) {
      const r3 = i2.domains && i2.domains[e2];
      if (r3 && r3.type !== "inherited")
        return r3;
    }
    return this._getLayerDomain(e2);
  }
  async queryFeatures(e2 = this.createQuery(), r2) {
    var _a, _b, _c, _d, _e, _f;
    if (await this.load(), !((_b = (_a = this.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsQuery))
      throw new s$1("Sublayer.queryFeatures", "this layer doesn't support queries.");
    const [{ executeQuery: t2 }, { default: i2 }] = await Promise.all([import("./index.js").then(function(n2) {
      return n2.l0;
    }), import("./index.js").then(function(n2) {
      return n2.l1;
    })]), o2 = await t2(this.url, x.from(e2), (_d = (_c = this.layer) == null ? void 0 : _c.spatialReference) != null ? _d : null, __spreadProps(__spreadValues({}, r2), { query: __spreadProps(__spreadValues({}, (_e = this.layer) == null ? void 0 : _e.customParameters), { token: (_f = this.layer) == null ? void 0 : _f.apiKey }) })), a2 = i2.fromJSON(o2.data);
    if (a2 == null ? void 0 : a2.features)
      for (const s2 of a2.features)
        s2.sourceLayer = this;
    return a2;
  }
  toExportImageJSON(e2) {
    var _a;
    const r2 = { id: this.id, source: ((_a = this.source) == null ? void 0 : _a.toJSON()) || { mapLayerId: this.id, type: "mapLayer" } }, t$12 = t(e2, this.definitionExpression);
    r$2(t$12) && (r2.definitionExpression = t$12);
    const i$1 = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce((e3, r3) => (e3[r3] = this.originIdOf(r3), e3), {}), o2 = Object.keys(i$1).some((e3) => i$1[e3] > r$1.SERVICE);
    if (o2) {
      const e3 = r2.drawingInfo = {};
      if (i$1.renderer > r$1.SERVICE && (e3.renderer = this.renderer ? this.renderer.toJSON() : null), i$1.labelsVisible > r$1.SERVICE && (e3.showLabels = this.labelsVisible), this.labelsVisible && i$1.labelingInfo > r$1.SERVICE) {
        !this.loaded && this.labelingInfo.some((e4) => !e4.labelPlacement) && s$3.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`, { sublayer: this });
        let r3 = this.labelingInfo;
        r$2(this.geometryType) && (r3 = c$2(this.labelingInfo, i.toJSON(this.geometryType))), e3.labelingInfo = r3.filter((e4) => e4.labelPlacement).map((e4) => e4.toJSON({ origin: "service", layer: this.layer })), e3.showLabels = true;
      }
      i$1.opacity > r$1.SERVICE && (e3.transparency = 100 - 100 * this.opacity), this._assignDefaultSymbolColors(e3.renderer);
    }
    return r2;
  }
  _assignDefaultSymbolColors(e2) {
    this._forEachSimpleMarkerSymbols(e2, (e3) => {
      e3.color || e3.style !== "esriSMSX" && e3.style !== "esriSMSCross" || (e3.outline && e3.outline.color ? e3.color = e3.outline.color : e3.color = [0, 0, 0, 0]);
    });
  }
  _forEachSimpleMarkerSymbols(e2, r2) {
    if (e2) {
      const t2 = "uniqueValueInfos" in e2 ? e2.uniqueValueInfos : "classBreakInfos" in e2 ? e2.classBreakInfos : [];
      for (const e3 of t2)
        J(e3.symbol) && r2(e3.symbol);
      "symbol" in e2 && J(e2.symbol) && r2(e2.symbol), "defaultSymbol" in e2 && J(e2.defaultSymbol) && r2(e2.defaultSymbol);
    }
  }
  _setAndNotifyLayer(e2, r2) {
    const t2 = this.layer, i2 = this._get(e2);
    let o2, a2;
    switch (e2) {
      case "definitionExpression":
      case "floorInfo":
        o2 = "supportsSublayerDefinitionExpression";
      case "minScale":
      case "maxScale":
      case "visible":
        o2 = "supportsSublayerVisibility";
        break;
      case "labelingInfo":
      case "labelsVisible":
      case "opacity":
      case "renderer":
      case "source":
        o2 = "supportsDynamicLayers", a2 = "supportsModification";
    }
    const s2 = e$1(this).getDefaultOrigin();
    if (s2 !== "service") {
      if (o2 && this.get(`layer.capabilities.exportMap.${o2}`) === false)
        return void this._logLockedError(e2, `capability not available 'layer.capabilities.exportMap.${o2}'`);
      if (a2 && this.get(`capabilities.exportMap.${a2}`) === false)
        return void this._logLockedError(e2, `capability not available 'capabilities.exportMap.${a2}'`);
    }
    e2 !== "source" || this.loadStatus === "not-loaded" ? (this._set(e2, r2), s2 !== "service" && i2 !== r2 && t2 && t2.emit && t2.emit("sublayer-update", { propertyName: e2, target: this })) : this._logLockedError(e2, "'source' can't be changed after calling sublayer.load()");
  }
  _handleSublayersChange(e2, r2) {
    r2 && (r2.forEach((e3) => {
      e3.parent = null, e3.layer = null;
    }), this.handles.removeAll()), e2 && (e2.forEach((e3) => {
      e3.parent = this, e3.layer = this.layer;
    }), this.handles.add([e2.on("after-add", ({ item: e3 }) => {
      e3.parent = this, e3.layer = this.layer;
    }), e2.on("after-remove", ({ item: e3 }) => {
      e3.parent = null, e3.layer = null;
    }), e2.on("before-changes", (e3) => {
      const r3 = this.get("layer.capabilities.exportMap.supportsSublayersChanges");
      r3 == null || r3 || (s$3.getLogger(this.declaredClass).error(new s$1("sublayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", { sublayer: this, layer: this.layer })), e3.preventDefault());
    })]));
  }
  _logLockedError(e2, r2) {
    s$3.getLogger(this.declaredClass).error(new s$1("sublayer:locked", `Property '${String(e2)}' can't be changed on Sublayer from the layer '${this.layer.id}'`, { reason: r2, sublayer: this, layer: this.layer }));
  }
  _getLayerDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2 ? r2.domain : null;
  }
};
X.test = { isMapImageLayerOverridePolicy: (e2) => e2 === G || e2 === B, isTileImageLayerOverridePolicy: (e2) => e2 === Q }, e([y$1({ readOnly: true })], X.prototype, "capabilities", void 0), e([o("service", "capabilities", ["layerDefinition.canModifyLayer", "layerDefinition.capabilities"])], X.prototype, "readCapabilities", null), e([y$1({ type: String, value: null, json: { name: "layerDefinition.definitionExpression", write: { allowNull: true, overridePolicy: B } } })], X.prototype, "definitionExpression", null), e([y$1({ type: [y$3], json: { origins: { service: { read: { source: "layerDefinition.fields" } } } } })], X.prototype, "fields", void 0), e([y$1({ readOnly: true })], X.prototype, "fieldsIndex", null), e([y$1({ type: p$2, value: null, json: { name: "layerDefinition.floorInfo", read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo", overridePolicy: B }, origins: { "web-scene": { read: false, write: false } } } })], X.prototype, "floorInfo", null), e([y$1({ type: w, json: { read: { source: "layerDefinition.extent" } } })], X.prototype, "fullExtent", void 0), e([y$1({ type: i.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: i.read } } } } })], X.prototype, "geometryType", void 0), e([y$1({ type: String })], X.prototype, "globalIdField", void 0), e([o("service", "globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], X.prototype, "readGlobalIdFieldFromService", null), e([y$1({ type: T, json: { write: { ignoreOrigin: true } } })], X.prototype, "id", null), e([y$1({ value: null, type: [j$3], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo" }, write: { target: "layerDefinition.drawingInfo.labelingInfo", overridePolicy: G } } })], X.prototype, "labelingInfo", null), e([r$4("labelingInfo")], X.prototype, "writeLabelingInfo", null), e([y$1({ type: Boolean, value: true, json: { read: { source: "layerDefinition.drawingInfo.showLabels" }, write: { target: "layerDefinition.drawingInfo.showLabels", overridePolicy: G } } })], X.prototype, "labelsVisible", null), e([y$1({ value: null })], X.prototype, "layer", null), e([y$1({ type: Boolean, value: true, json: { origins: { service: { read: { enabled: false } } }, read: { source: "showLegend" }, write: { target: "showLegend", overridePolicy: H } } })], X.prototype, "legendEnabled", void 0), e([y$1({ type: ["show", "hide", "hide-children"], value: "show", json: { read: false, write: false, origins: { "web-scene": { read: true, write: true } } } })], X.prototype, "listMode", null), e([y$1({ type: Number, value: 0, json: { write: { overridePolicy: G } } })], X.prototype, "minScale", null), e([o("minScale", ["minScale", "layerDefinition.minScale"])], X.prototype, "readMinScale", null), e([y$1({ type: Number, value: 0, json: { write: { overridePolicy: G } } })], X.prototype, "maxScale", null), e([o("maxScale", ["maxScale", "layerDefinition.maxScale"])], X.prototype, "readMaxScale", null), e([y$1({ readOnly: true })], X.prototype, "effectiveScaleRange", null), e([y$1({ type: String })], X.prototype, "objectIdField", void 0), e([o("service", "objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], X.prototype, "readObjectIdFieldFromService", null), e([y$1({ type: Number, value: 1, json: { write: { target: "layerDefinition.drawingInfo.transparency", overridePolicy: G } } })], X.prototype, "opacity", null), e([o("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], X.prototype, "readOpacity", null), e([r$4("opacity")], X.prototype, "writeOpacity", null), e([y$1({ json: { type: T, write: { target: "parentLayerId", writerEnsuresNonNull: true, overridePolicy: G } } })], X.prototype, "parent", void 0), e([r$4("parent")], X.prototype, "writeParent", null), e([y$1({ type: Boolean, value: true, json: { read: { source: "disablePopup", reader: (e2, r2) => !r2.disablePopup }, write: { target: "disablePopup", overridePolicy: H, writer(e2, r2, t2) {
  r2[t2] = !e2;
} } } })], X.prototype, "popupEnabled", void 0), e([y$1({ type: k$1, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy: H } } })], X.prototype, "popupTemplate", void 0), e([y$1({ readOnly: true })], X.prototype, "defaultPopupTemplate", null), e([y$1({ types: p$3, value: null, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: G }, origins: { "web-scene": { types: n$1, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: G } } } } })], X.prototype, "renderer", null), e([y$1({ types: { key: "type", base: null, typeMap: { "data-layer": K$1, "map-layer": c$1 } }, cast(e2) {
  if (e2) {
    if ("mapLayerId" in e2)
      return v(c$1, e2);
    if ("dataSource" in e2)
      return v(K$1, e2);
  }
  return e2;
}, json: { name: "layerDefinition.source", write: { overridePolicy: G } } })], X.prototype, "source", null), e([y$1()], X.prototype, "sourceJSON", void 0), e([y$1({ value: null, json: { type: [T], write: { target: "subLayerIds", allowNull: true, overridePolicy: G } } })], X.prototype, "sublayers", null), e([s$4("sublayers")], X.prototype, "castSublayers", null), e([r$4("sublayers")], X.prototype, "writeSublayers", null), e([y$1({ type: String, json: { name: "name", write: { overridePolicy: H } } })], X.prototype, "title", void 0), e([y$1({ type: String })], X.prototype, "typeIdField", void 0), e([o("typeIdField", ["layerDefinition.typeIdField"])], X.prototype, "readTypeIdField", null), e([y$1({ type: [n$2], json: { origins: { service: { read: { source: "layerDefinition.types" } } } } })], X.prototype, "types", void 0), e([y$1({ type: String, json: { read: { source: "layerUrl" }, write: { target: "layerUrl", overridePolicy: Q } } })], X.prototype, "url", null), e([y$1({ type: Boolean, value: true, json: { read: { source: "defaultVisibility" }, write: { target: "defaultVisibility", overridePolicy: G } } })], X.prototype, "visible", null), e([r$4("visible")], X.prototype, "writeVisible", null), X = $ = e([n("esri.layers.support.Sublayer")], X);
const z = X;
const f = s$3.getLogger("esri.layers.TileLayer");
function S(e2, r2) {
  const s2 = [], t2 = {};
  return e2 ? (e2.forEach((e3) => {
    const o2 = new z();
    if (o2.read(e3, r2), t2[o2.id] = o2, e3.parentLayerId != null && e3.parentLayerId !== -1) {
      const r3 = t2[e3.parentLayerId];
      r3.sublayers || (r3.sublayers = []), r3.sublayers.unshift(o2);
    } else
      s2.unshift(o2);
  }), s2) : s2;
}
const h = j$2.ofType(z);
function m(e2, r2) {
  e2 && e2.forEach((e3) => {
    r2(e3), e3.sublayers && e3.sublayers.length && m(e3.sublayers, r2);
  });
}
const E = (o2) => {
  let E2 = class extends o2 {
    constructor(...e2) {
      super(...e2), this.allSublayers = new l({ getCollections: () => [this.sublayers], getChildrenFunction: (e3) => e3.sublayers }), this.sublayersSourceJSON = { [r$1.SERVICE]: {}, [r$1.PORTAL_ITEM]: {}, [r$1.WEB_SCENE]: {}, [r$1.WEB_MAP]: {} }, this.addHandles(l$1(() => this.sublayers, (e3, r2) => this._handleSublayersChange(e3, r2), U$1));
    }
    readSublayers(e2, r2) {
      if (!r2 || !e2)
        return;
      const { sublayersSourceJSON: s2 } = this, t2 = t$1(r2.origin);
      if (t2 < r$1.SERVICE)
        return;
      if (s2[t2] = { context: r2, visibleLayers: e2.visibleLayers || s2[t2].visibleLayers, layers: e2.layers || s2[t2].layers }, t2 > r$1.SERVICE)
        return;
      this._set("serviceSublayers", this.createSublayersForOrigin("service").sublayers);
      const { sublayers: o3, origin: a2 } = this.createSublayersForOrigin("web-document"), l2 = e$1(this);
      l2.setDefaultOrigin(a2), this._set("sublayers", new h(o3)), l2.setDefaultOrigin("user");
    }
    findSublayerById(e2) {
      return this.allSublayers.find((r2) => r2.id === e2);
    }
    createServiceSublayers() {
      return this.createSublayersForOrigin("service").sublayers;
    }
    createSublayersForOrigin(e2) {
      const r2 = t$1(e2 === "web-document" ? "web-map" : e2);
      let s2 = r$1.SERVICE, t2 = this.sublayersSourceJSON[r$1.SERVICE].layers, o3 = this.sublayersSourceJSON[r$1.SERVICE].context, a2 = null;
      const l2 = [r$1.PORTAL_ITEM, r$1.WEB_SCENE, r$1.WEB_MAP].filter((e3) => e3 <= r2);
      for (const y2 of l2) {
        const e3 = this.sublayersSourceJSON[y2];
        t$2(e3.layers) && (s2 = y2, t2 = e3.layers, o3 = e3.context, e3.visibleLayers && (a2 = { visibleLayers: e3.visibleLayers, context: e3.context }));
      }
      const i2 = [r$1.PORTAL_ITEM, r$1.WEB_SCENE, r$1.WEB_MAP].filter((e3) => e3 > s2 && e3 <= r2);
      let n2 = null;
      for (const y2 of i2) {
        const { layers: e3, visibleLayers: r3, context: s3 } = this.sublayersSourceJSON[y2];
        e3 && (n2 = { layers: e3, context: s3 }), r3 && (a2 = { visibleLayers: r3, context: s3 });
      }
      const u = S(t2, o3), p2 = new Map(), f2 = new Set();
      if (n2)
        for (const y2 of n2.layers)
          p2.set(y2.id, y2);
      if (a2)
        for (const y2 of a2.visibleLayers)
          f2.add(y2);
      return m(u, (e3) => {
        n2 && e3.read(p2.get(e3.id), n2.context), a2 && e3.read({ defaultVisibility: f2.has(e3.id) }, a2.context);
      }), { origin: n$3(s2), sublayers: new h({ items: u }) };
    }
    read(e2, r2) {
      super.read(e2, r2), this.readSublayers(e2, r2);
    }
    _handleSublayersChange(e2, r2) {
      r2 && (r2.forEach((e3) => {
        e3.parent = null, e3.layer = null;
      }), this.handles.remove("sublayers-owner")), e2 && (e2.forEach((e3) => {
        e3.parent = this, e3.layer = this;
      }), this.handles.add([e2.on("after-add", ({ item: e3 }) => {
        e3.parent = this, e3.layer = this;
      }), e2.on("after-remove", ({ item: e3 }) => {
        e3.parent = null, e3.layer = null;
      })], "sublayers-owner"), this.type === "tile" && this.handles.add(e2.on("before-changes", (e3) => {
        f.error(new s$1("tilelayer:sublayers-non-modifiable", "ISublayer can't be added, moved, or removed from the layer's sublayers", { layer: this })), e3.preventDefault();
      }), "sublayers-owner"));
    }
  };
  return e([y$1({ readOnly: true })], E2.prototype, "allSublayers", void 0), e([y$1({ readOnly: true, type: j$2.ofType(z) })], E2.prototype, "serviceSublayers", void 0), e([y$1({ value: null, type: h, json: { read: false, write: { allowNull: true, ignoreOrigin: true } } })], E2.prototype, "sublayers", void 0), e([y$1({ readOnly: true })], E2.prototype, "sublayersSourceJSON", void 0), E2 = e([n("esri.layers.mixins.SublayersOwner")], E2), E2;
};
export { E, y, z };
