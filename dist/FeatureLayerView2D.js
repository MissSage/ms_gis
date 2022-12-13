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
import { $ as e$1, a0 as y, a1 as n$1, cC as g, Z as m$1, h as has, k as e$2, cD as o$1, cE as x, aK as k, a as r$1, x as l$2, cF as _$1, D, cG as g$1, cH as u$2, q as b, bE as e$3, cI as l$3, s as s$2, cJ as w, cK as y$1, cL as g$2, R as l$4, cz as w$1, cA as a$2, cM as T, cN as v, cO as x$1, cP as i$2, cs as E, cQ as W, cR as D$1, cS as j, cT as O$1, cU as z, cV as h, cW as w$2, t, g as s$3, cX as xe, cY as x$2, b3 as o$3, cx as j$1, cr as w$3, S as h$1, aX as y$3, m as j$2, cZ as f, c_ as b$1, bZ as m$2, c$ as g$3, b_ as d$2, aH as l$5, d0 as j$3 } from "./index.js";
import { a as a$1 } from "./utils.js";
import { a9 as S } from "./enums2.js";
import { y as y$2, u as u$3 } from "./LayerView.js";
import { F, h as h$2 } from "./schemaUtils.js";
import { e as e$4 } from "./util.js";
import { o as o$2 } from "./floorFilterUtils.js";
import { s as s$4, d as d$1 } from "./popupUtils.js";
import { i as i$3 } from "./RefreshableLayerView.js";
import "vue";
import "./Utils2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./visualVariablesUtils2.js";
import "./createSymbolSchema.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
let p = class extends g {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e2 = false) {
    if (this.popupTemplate)
      return this.popupTemplate;
    const r2 = this.sourceLayer && this.sourceLayer.featureReduction;
    return r2 && "popupTemplate" in r2 && r2.popupEnabled ? r2.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
e$1([y({ type: Boolean })], p.prototype, "isAggregate", void 0), p = e$1([n$1("esri.AggregateGraphic")], p);
const s$1 = p;
let r = class extends m$1 {
  constructor(e2) {
    super(e2), this._filter = null, this.duration = has("mapview-transitions-duration"), this._excludedEffectView = new a$1(e2), this._includedEffectView = new a$1(e2);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e2) {
    this._get("featureEffect") !== e2 && this._transitionTo(e2);
  }
  get filter() {
    var _a;
    return this._filter || ((_a = e$2(this.featureEffect)) == null ? void 0 : _a.filter) || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e2) {
    this._set("scale", e2), this._excludedEffectView.scale = e2, this._includedEffectView.scale = e2;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(e2, t2) {
    this._set("scale", t2), this.transitioning ? (this._includedEffectView.transitionStep(e2, t2), this._excludedEffectView.transitionStep(e2, t2), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t2, this._includedEffectView.scale = t2);
  }
  endTransitions() {
    this._includedEffectView.endTransitions(), this._excludedEffectView.endTransitions(), this._filter = null;
  }
  _transitionTo(e2) {
    const t2 = this._get("featureEffect"), s2 = e$2(e2), f2 = e$2(s2 == null ? void 0 : s2.includedEffect), c2 = e$2(s2 == null ? void 0 : s2.excludedEffect), r2 = this._includedEffectView.canTransitionTo(f2) && this._excludedEffectView.canTransitionTo(c2);
    this._includedEffectView.effect = f2, this._excludedEffectView.effect = c2, this._set("featureEffect", s2), this._filter = (s2 == null ? void 0 : s2.filter) || (t2 == null ? void 0 : t2.filter) || null, r2 || this.endTransitions();
  }
};
e$1([y()], r.prototype, "_filter", void 0), e$1([y()], r.prototype, "_excludedEffectView", void 0), e$1([y()], r.prototype, "_includedEffectView", void 0), e$1([y()], r.prototype, "duration", void 0), e$1([y()], r.prototype, "excludedEffects", null), e$1([y()], r.prototype, "featureEffect", null), e$1([y()], r.prototype, "filter", null), e$1([y()], r.prototype, "hasEffects", null), e$1([y()], r.prototype, "includedEffects", null), e$1([y({ value: 0 })], r.prototype, "scale", null), e$1([y()], r.prototype, "transitioning", null), r = e$1([n$1("esri.layers.effects.FeatureEffectView")], r);
const o = r;
let m = class extends x {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e2, o2) {
    var _a;
    const s2 = k.fromJSON(o2.spatialReference), a2 = [];
    for (let p2 = 0; p2 < e2.length; p2++) {
      const o3 = e2[p2], c2 = s$1.fromJSON(o3), m2 = o3.geometry && o3.geometry.spatialReference;
      r$1(c2.geometry) && !m2 && (c2.geometry.spatialReference = s2);
      const i2 = o3.aggregateGeometries, f2 = c2.aggregateGeometries;
      if (i2 && r$1(f2))
        for (const e3 in f2) {
          const r2 = f2[e3], o4 = (_a = i2[e3]) == null ? void 0 : _a.spatialReference;
          r$1(r2) && !o4 && (r2.spatialReference = s2);
        }
      a2.push(c2);
    }
    return a2;
  }
};
e$1([y({ type: [s$1], json: { write: true } })], m.prototype, "features", void 0), e$1([o$1("features")], m.prototype, "readFeatures", null), m = e$1([n$1("esri.rest.support.AggregateFeatureSet")], m);
const i$1 = m;
async function e(e2, r2) {
  if (!e2)
    return null;
  switch (e2.type) {
    case "symbol":
      return new (await import("./SymbolTileRenderer.js")).default(r2);
    case "heatmap":
      return new (await import("./HeatmapTileRenderer.js")).default(r2);
  }
}
function a(e2) {
  return e2.some((e3) => e3.globalId);
}
function d(e2) {
  return e2.filter((e3) => !e3.error).map((e3) => {
    var _a;
    return (_a = e3.objectId) != null ? _a : e3.globalId;
  });
}
function i(e2, r2) {
  const s2 = new Set(e2);
  for (const t2 of r2.values())
    s2.add(t2);
  return s2;
}
function n(e2, r2) {
  const s2 = new Set(e2);
  for (const t2 of r2.values())
    s2.delete(t2);
  return s2;
}
let c$1 = class extends m$1 {
  constructor(e2) {
    super(e2), this._hasGlobalIds = false;
  }
  normalizeCtorArgs(e2) {
    return this._queueProcessor = new l$2({ concurrency: 1, process: e2.process }), {};
  }
  destroy() {
    this.clear();
  }
  get updating() {
    return this._queueProcessor.length > 0;
  }
  clear() {
    this._queueProcessor.clear();
  }
  push(e2) {
    const r2 = this._queueProcessor, s2 = r2.last();
    switch (e2.type) {
      case "update":
      case "refresh":
        if ((s2 == null ? void 0 : s2.type) === e2.type)
          return;
        r2.push(e2).finally(() => this.notifyChange("updating"));
        break;
      case "edit": {
        const t2 = (s2 == null ? void 0 : s2.type) === "processed-edit" ? s2 : null;
        t2 && r2.popLast();
        const o2 = this._mergeEdits(t2, e2);
        for (const e3 of o2)
          r2.push(e3).finally(() => this.notifyChange("updating"));
        break;
      }
    }
    this.notifyChange("updating");
  }
  _mergeEdits(e2, r2) {
    var _a, _b;
    const { addedFeatures: s2, deletedFeatures: t2, updatedFeatures: o2 } = r2.edits;
    if (this._hasGlobalIds = this._hasGlobalIds || a(s2) || a(o2) || a(t2), this._hasGlobalIds) {
      return [e2, { type: "processed-edit", edits: { addOrModified: [...s2, ...o2], removed: t2 } }];
    }
    const c2 = new Set(d((_a = e2 == null ? void 0 : e2.edits.addOrModified) != null ? _a : [])), u2 = new Set(d((_b = e2 == null ? void 0 : e2.edits.removed) != null ? _b : [])), p2 = new Set([...d(s2), ...d(o2)]), l2 = new Set(d(t2));
    return [{ type: "processed-edit", edits: { addOrModified: Array.from(i(n(c2, l2), p2)).map((e3) => ({ objectId: e3 })), removed: Array.from(i(n(u2, p2), l2)).map((e3) => ({ objectId: e3 })) } }];
  }
};
e$1([y({ readOnly: true })], c$1.prototype, "updating", null), c$1 = e$1([n$1("esri.views.2d.layers.support.FeatureCommandQueue")], c$1);
const u$1 = c$1;
function c(e2) {
  return Array.isArray(e2);
}
let u = class extends _$1 {
  constructor(e2) {
    super(e2), this._startupResolver = D(), this.isReady = false;
  }
  initialize() {
    this._controller = new AbortController(), this.addResolvingPromise(this._startWorker(this._controller.signal));
  }
  destroy() {
    this._controller.abort(), this._connection && this._connection.close();
  }
  set tileRenderer(e2) {
    this.client.tileRenderer = e2;
  }
  get closed() {
    return this._connection.closed;
  }
  async startup(e2, t2, r2, s2) {
    await this.when();
    const o2 = this._controller.signal, i2 = c(r2.source) ? { transferList: r2.source, signal: o2 } : void 0, n2 = { service: r2, config: t2, tileInfo: e2.tileInfo.toJSON(), tiles: s2 };
    await this._connection.invoke("startup", n2, i2), this._startupResolver.resolve(), this._set("isReady", true);
  }
  async updateTiles(e2) {
    return await this._startupResolver.promise, g$1(this._connection.invoke("updateTiles", e2));
  }
  async update(e2) {
    const t2 = { config: e2 };
    return await this._startupResolver.promise, this._connection.invoke("update", t2);
  }
  async applyUpdate(e2) {
    return await this._startupResolver.promise, this._connection.invoke("applyUpdate", e2);
  }
  async setHighlight(e2) {
    return await this._startupResolver.promise, g$1(this._connection.invoke("controller.setHighlight", e2));
  }
  async stop() {
    if (await this._startupResolver.promise, !this.closed)
      return g$1(this._connection.invoke("stop"));
  }
  async refresh(e2) {
    return await this._startupResolver.promise, g$1(this._connection.invoke("controller.refresh", e2));
  }
  async querySummaryStatistics(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.querySummaryStatistics", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryAggregateSummaryStatistics(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateSummaryStatistics", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryUniqueValues(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryUniqueValues", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryAggregateUniqueValues(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateUniqueValues", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryClassBreaks(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryClassBreaks", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryAggregateClassBreaks(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateClassBreaks", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryHistogram(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryHistogram", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryAggregateHistogram(e2, t2, r2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateHistogram", { query: e2.toJSON(), params: t2 }, r2);
  }
  async queryFeatures(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryFeatures", e2.toJSON(), t2);
  }
  async queryVisibleFeatures(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryVisibleFeatures", e2.toJSON(), t2);
  }
  async queryObjectIds(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryObjectIds", e2.toJSON(), t2);
  }
  async queryFeatureCount(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryFeatureCount", e2.toJSON(), t2);
  }
  async queryExtent(e2, t2) {
    return this._connection.invoke("controller.queryExtent", e2.toJSON(), t2);
  }
  async queryLatestObservations(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryLatestObservations", e2.toJSON(), t2);
  }
  async queryStatistics(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryStatistics", e2);
  }
  async queryAggregates(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregates", e2.toJSON(), t2);
  }
  async queryAggregateCount(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateCount", e2.toJSON(), t2);
  }
  async queryAggregateIds(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateIds", e2.toJSON(), t2);
  }
  async getObjectId(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getObjectId", e2);
  }
  async getDisplayId(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getDisplayId", e2);
  }
  async getFeatures(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getFeatures", e2);
  }
  async getAggregates() {
    return await this._startupResolver.promise, this._connection.invoke("controller.getAggregates");
  }
  async getAggregateValueRanges() {
    return await this._startupResolver.promise, this._connection.invoke("controller.getAggregateValueRanges");
  }
  async mapValidDisplayIds(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.mapValidDisplayIds", e2);
  }
  async onEdits(e2) {
    return await this._startupResolver.promise, g$1(this._connection.invoke("controller.onEdits", e2));
  }
  async enableEvent(e2, t2) {
    return await this._startupResolver.promise, g$1(this._connection.invoke("controller.enableEvent", { name: e2, value: t2 }));
  }
  pauseStream() {
    return g$1(this._connection.invoke("controller.pauseStream"));
  }
  resumeStream() {
    return g$1(this._connection.invoke("controller.resumeStream"));
  }
  async _startWorker(e2) {
    try {
      this._connection = await u$2("Pipeline", { client: this.client, strategy: "dedicated", signal: e2 });
    } catch (t2) {
      b(t2);
    }
  }
};
e$1([y()], u.prototype, "isReady", void 0), e$1([y({ constructOnly: true })], u.prototype, "client", void 0), e$1([y()], u.prototype, "tileRenderer", null), u = e$1([n$1("esri.views.2d.layers.support.FeatureLayerProxy")], u);
const l$1 = u;
const s = 1e-6;
class l {
  constructor(e2) {
    this._tiles = new Map(), this.buffer = 0, this.acquireTile = e2.acquireTile, this.releaseTile = e2.releaseTile, this.tileInfoView = e2.tileInfoView, this.buffer = e2.buffer;
  }
  destroy() {
  }
  clear() {
    this._tiles.forEach((e2) => this._releaseTile(e2));
  }
  tileKeys() {
    const e2 = [];
    return this._tiles.forEach((i2, t2) => e2.push(t2)), e2;
  }
  update(e2) {
    const s2 = this.tileInfoView.getTileCoverage(e2.state, this.buffer, "closest"), { spans: l2, lodInfo: r2 } = s2, { level: a2 } = r2, o2 = [], d2 = [], h2 = new Set(), n2 = new Set();
    for (const { row: i2, colFrom: c2, colTo: f2 } of l2)
      for (let e3 = c2; e3 <= f2; e3++) {
        const s3 = e$3.getId(a2, i2, r2.normalizeCol(e3), r2.getWorldForColumn(e3)), l3 = this._getOrAcquireTile(o2, s3);
        h2.add(s3), l3.isReady ? l3.visible = true : n2.add(l3.key);
      }
    n2.forEach((e3) => this._addPlaceholders(h2, e3)), this._tiles.forEach((e3) => {
      h2.has(e3.key.id) || (d2.push(e3.key.id), this._releaseTile(e3));
    }), l$3.pool.release(s2);
    return { hasMissingTiles: n2.size > 0, added: o2, removed: d2 };
  }
  _getOrAcquireTile(e2, i2) {
    if (!this._tiles.has(i2)) {
      const s2 = this.acquireTile(new e$3(i2));
      e2.push(i2), this._tiles.set(i2, s2), s2.visible = false;
    }
    return this._tiles.get(i2);
  }
  _getTile(e2) {
    return this._tiles.get(e2);
  }
  _releaseTile(e2) {
    this._tiles.delete(e2.key.id), this.releaseTile(e2);
  }
  _addPlaceholders(e2, i2) {
    const t2 = this._addPlaceholderChildren(e2, i2);
    if (!(Math.abs(1 - t2) < s)) {
      if (!this._addPlaceholderParent(e2, i2)) {
        this._getTile(i2.id).visible = true;
      }
    }
  }
  _addPlaceholderChildren(e2, i2) {
    let t2 = 0;
    return this._tiles.forEach((s2) => {
      t2 += this._addPlaceholderChild(e2, s2, i2);
    }), t2;
  }
  _addPlaceholderChild(e2, i2, t2) {
    if (i2.key.level <= t2.level || !i2.hasData || !t2.contains(i2.key))
      return 0;
    i2.visible = true, e2.add(i2.key.id);
    return 1 / (1 << 2 * (i2.key.level - t2.level));
  }
  _addPlaceholderParent(i2, t2) {
    let s2 = t2.getParentKey(), l2 = 0, r2 = null;
    for (; r$1(s2); ) {
      if (i2.has(s2.id))
        return true;
      const e2 = this._getTile(s2.id);
      if (e2 == null ? void 0 : e2.isReady) {
        for (const e3 of i2) {
          const i3 = this._getTile(e3);
          s2.contains(i3.key) && (i3.visible = false);
        }
        return e2.visible = true, i2.add(e2.key.id), true;
      }
      (e2 == null ? void 0 : e2.hasData) && e2.patchCount > l2 && (l2 = e2.patchCount, r2 = e2), s2 = s2.getParentKey();
    }
    return !!r2 && (r2.visible = true, i2.add(r2.key.id), true);
  }
}
const _ = "esri.views.layers.FeatureLayerView", O = s$2.getLogger(_), A = (r2) => {
  let A2 = class extends r2 {
    constructor(...e2) {
      super(...e2), this._updatingRequiredFieldsPromise = null, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.handles.add([l$4(() => {
        var _a;
        const e2 = this.layer;
        return [(_a = e2 == null ? void 0 : e2.elevationInfo) == null ? void 0 : _a.featureExpressionInfo, e2 && "displayField" in e2 ? e2.displayField : null, e2 == null ? void 0 : e2.timeInfo, e2 && "renderer" in e2 && e2.renderer, e2 && "labelingInfo" in e2 && e2.labelingInfo, e2 && "floorInfo" in e2 && e2.floorInfo, this.filter, this.featureEffect, this.timeExtent];
      }, () => this._handleRequiredFieldsChange(), w$1), a$2(() => {
        var _a;
        return (_a = this.view) == null ? void 0 : _a.floors;
      }, "change", () => this._handleRequiredFieldsChange()), a$2(() => {
        const e2 = this.layer;
        return e2 && "sublayers" in e2 && e2.sublayers;
      }, "change", () => this._handleRequiredFieldsChange())]);
    }
    get availableFields() {
      const { layer: e2, layer: { fieldsIndex: t2 }, requiredFields: r3 } = this;
      return "outFields" in e2 && e2.outFields ? T(t2, [...v(t2, e2.outFields), ...r3]) : T(t2, r3);
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(e2) {
      this._override("featureEffect", e2);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(e2) {
      O.error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return false;
    }
    highlight(e2) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference }, t2 = r$1(this.filter) ? this.filter.createQuery(e2) : new x$1(e2);
      if (this.layer.type === "feature") {
        const e3 = o$2(this);
        r$1(e3) && (t2.where = t2.where ? `(${t2.where}) AND (${e3})` : e3);
      }
      return r$1(this.timeExtent) && (t2.timeExtent = r$1(t2.timeExtent) ? t2.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), t2;
    }
    createAggregateQuery() {
      const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference };
      return new x$1(e2);
    }
    queryFeatures(e2, t2) {
      throw new Error("missing implementation");
    }
    queryObjectIds(e2, t2) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(e2, t2) {
      throw new Error("missing implementation");
    }
    queryExtent(e2, t2) {
      throw new Error("missing implementation");
    }
    async fetchPopupFeatures(e2, t2) {
      const r3 = this.validateFetchPopupFeatures(t2);
      if (r3)
        throw r3;
      return this.fetchClientPopupFeatures(t2);
    }
    _loadArcadeModules(e2) {
      if (e2.get("expressionInfos.length") || Array.isArray(e2.content) && e2.content.some((e3) => e3.type === "expression"))
        return i$2();
    }
    _handleRequiredFieldsChange() {
      const e2 = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", e2), e2.then(() => {
        this._updatingRequiredFieldsPromise === e2 && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    async _updateRequiredFields() {
      if (!this.layer || !this.view)
        return;
      const e2 = this.view.type === "3d", { layer: t2, layer: { fieldsIndex: r3, objectIdField: s2 } } = this, n2 = "renderer" in t2 && t2.renderer, a2 = "orderBy" in t2 && t2.orderBy, l2 = "featureReduction" in t2 ? t2.featureReduction : null, u2 = new Set(), p2 = await E([n2 ? n2.collectRequiredFields(u2, r3) : null, W(u2, t2), e2 ? D$1(u2, t2) : null, r$1(this.filter) ? j(u2, t2, this.filter) : null, r$1(this.featureEffect) ? j(u2, t2, this.featureEffect.filter) : null, l2 ? O$1(u2, t2, l2) : null, a2 ? z(u2, t2, a2) : null]);
      if (t2.timeInfo && this.timeExtent && h(u2, t2.fieldsIndex, [t2.timeInfo.startField, t2.timeInfo.endField]), t2.type === "feature" && (t2.floorInfo && h(u2, t2.fieldsIndex, [t2.floorInfo.floorField]), e2 && r$1(t2.infoFor3D) && (t2.globalIdField == null && O.error("globalIdField missing on 3DObjectFeatureLayer"), h(u2, t2.fieldsIndex, [t2.globalIdField]))), t2.type === "subtype-group") {
        w$2(u2, r3, t2.subtypeField);
        const e3 = t2.sublayers.map((e4) => {
          var _a;
          return Promise.all([(_a = e4.renderer) == null ? void 0 : _a.collectRequiredFields(u2, r3), W(u2, e4)]);
        });
        await E(e3);
      }
      for (const i2 of p2)
        i2.error && O.error(i2.error);
      w$2(u2, r3, s2), e2 && "displayField" in t2 && t2.displayField && w$2(u2, r3, t2.displayField);
      const d2 = Array.from(u2).sort();
      this._set("requiredFields", d2);
    }
    validateFetchPopupFeatures(e2) {
      if (t(e2))
        return null;
      for (const r3 of e2.clientGraphics) {
        const i2 = r3.layer;
        if ("popupEnabled" in i2 && !i2.popupEnabled)
          return new s$3("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: i2 });
        if (r3.isAggregate) {
          const e3 = "featureReduction" in i2 ? i2.featureReduction : null;
          if (!(e3 && "popupTemplate" in e3 && e3.popupEnabled && e3.popupTemplate))
            return new s$3("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: i2 });
        } else if ("popupTemplate" in i2) {
          if (!s$4(i2, e2))
            return new s$3("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: i2 });
        }
      }
    }
    async fetchClientPopupFeatures(e2) {
      const t$1 = r$1(e2) ? e2.clientGraphics : null;
      if (!t$1 || t$1.length === 0)
        return [];
      const r3 = new Array(t$1.length), o2 = new Map(), n2 = await this.createPopupQuery(e2);
      for (let i2 = 0; i2 < t$1.length; i2++) {
        const a2 = t$1[i2];
        if (a2.isAggregate) {
          r3[i2] = a2;
          continue;
        }
        const { layer: l2 } = a2;
        if (!("popupEnabled" in l2))
          continue;
        const u2 = v(this.layer.fieldsIndex, n2.outFields), p2 = s$4(l2, e2);
        if (t(p2))
          continue;
        const d2 = await this._loadArcadeModules(p2);
        d2 && d2.arcadeUtils.hasGeometryOperations(p2) || !xe(u2, a2) ? o2.set(a2.getObjectId(), i2) : r3[i2] = a2;
      }
      if (this.layer.type === "stream" || o2.size === 0)
        return r3.filter(Boolean);
      n2.objectIds = Array.from(o2.keys());
      try {
        const e3 = await this.layer.queryFeatures(n2);
        for (const t2 of e3.features) {
          r3[o2.get(t2.getObjectId())] = t2;
        }
      } catch {
      }
      return r3.filter(Boolean);
    }
    async createPopupQuery(e2) {
      const t$1 = this.layer.createQuery(), r3 = new Set();
      let o2 = false;
      const n2 = r$1(e2) && e2.clientGraphics ? e2.clientGraphics.map((e3) => e3.layer) : [this.layer];
      for (const i2 of n2) {
        if (!("popupEnabled" in i2))
          continue;
        const t$12 = s$4(i2, e2);
        if (t(t$12))
          continue;
        const n3 = await this._loadArcadeModules(t$12), a2 = n3 && n3.arcadeUtils.hasGeometryOperations(t$12);
        o2 = !(this.layer.geometryType !== "point" && !a2);
        const l2 = await d$1(this.layer, t$12);
        for (const e3 of l2)
          r3.add(e3);
      }
      if (t$1.returnGeometry = o2, t$1.returnZ = o2, t$1.returnM = o2, t$1.outFields = Array.from(r3), t$1.outSpatialReference = this.view.spatialReference, this.layer.type === "feature") {
        const e3 = o$2(this);
        r$1(e3) && (t$1.where = t$1.where ? `(${t$1.where}) AND (${e3})` : e3);
      }
      return t$1;
    }
    canResume() {
      return !!super.canResume() && (!r$1(this.timeExtent) || !this.timeExtent.isEmpty);
    }
  };
  return e$1([y()], A2.prototype, "_updatingRequiredFieldsPromise", void 0), e$1([y({ readOnly: true })], A2.prototype, "availableFields", null), e$1([y({ type: w })], A2.prototype, "featureEffect", null), e$1([y({ type: y$1 })], A2.prototype, "filter", void 0), e$1([y(g$2)], A2.prototype, "timeExtent", void 0), e$1([y()], A2.prototype, "layer", void 0), e$1([y({ type: Number })], A2.prototype, "maximumNumberOfFeatures", null), e$1([y({ readOnly: true, type: Boolean })], A2.prototype, "maximumNumberOfFeaturesExceeded", null), e$1([y({ readOnly: true })], A2.prototype, "requiredFields", void 0), e$1([y()], A2.prototype, "suspended", void 0), e$1([y()], A2.prototype, "view", void 0), A2 = e$1([n$1(_)], A2), A2;
};
function J(e2) {
  return e2 && "openPorts" in e2;
}
let M = class extends A(i$3(y$2(u$3))) {
  constructor() {
    super(...arguments), this._pipelineIsUpdating = true, this._commandsQueue = new u$1({ process: (e2) => {
      switch (e2.type) {
        case "processed-edit":
          return this._doEdit(e2);
        case "refresh":
          return this._doRefresh(e2.dataChanged);
        case "update":
          return this._doUpdate();
      }
    } }), this._visibilityOverrides = new Set(), this._highlightIds = new Map(), this._updateHighlight = x$2(async () => this._proxy.setHighlight(Array.from(this._highlightIds.keys()))), this._uploadsLocked = false, this._needsClusterSizeUpdate = false, this.featureEffectView = new o(), this._lastDefinitionExpression = null;
  }
  destroy() {
    var _a;
    o$3(this._updateClusterSizeTask, (e2) => e2.remove()), (_a = this._proxy) == null ? void 0 : _a.destroy(), this._commandsQueue.destroy();
  }
  initialize() {
    this.addResolvingPromise(Promise.all([this._initProxy(), this._initServiceOptions()])), this.handles.add([this.on("valueRangesChanged", (e2) => {
      this._set("_aggregateValueRanges", e2.valueRanges);
    }), l$4(() => this.featureEffect, (e2) => {
      this.featureEffectView.featureEffect = e2;
    }, w$1)]), this.featureEffectView.endTransitions();
  }
  async _initProxy() {
    const e2 = this.layer;
    if ("isTable" in e2 && e2.isTable)
      throw new s$3("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: this.layer });
    const t2 = e2.type === "feature" || e2.type === "subtype-group", r2 = "capabilities" in e2 && e2.capabilities.operations.supportsQuery;
    if (t2 && !r2)
      throw new s$3("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: e2 });
    this._proxy && this._proxy.destroy();
    const i2 = this._createClientOptions();
    return this._set("_proxy", new l$1({ client: i2 })), this._proxy.when();
  }
  async _initServiceOptions() {
    return this._set("_serviceOptions", await this._createServiceOptions()), this._serviceOptions;
  }
  get orderByFields() {
    return this._serviceOptions.type !== "stream" && this._serviceOptions.orderByFields;
  }
  get labelsVisible() {
    const e2 = this.layer.type === "subtype-group" ? this.layer.sublayers.items : [this.layer];
    return !this.suspended && e2.some((e3) => e3.labelingInfo && e3.labelsVisible);
  }
  get queryMode() {
    return this._serviceOptions.type;
  }
  get renderingConfigHash() {
    var _a, _b;
    if (!this.layer)
      return null;
    const e2 = this.availableFields, t2 = this.layer, r2 = this.view.floors, { definitionExpression: i2 } = t2, s2 = this.layer.type !== "subtype-group" && this.layer.labelsVisible && this.layer.labelingInfo, a2 = "renderer" in t2 && t2.renderer, n2 = "gdbVersion" in t2 ? t2.gdbVersion : void 0, o2 = "historicMoment" in t2 ? (_a = t2.historicMoment) == null ? void 0 : _a.getTime() : void 0, { timeExtent: u2 } = this, h2 = "customParameters" in t2 ? JSON.stringify(t2.customParameters) : void 0, d2 = "apiKey" in t2 ? t2.apiKey : void 0, p2 = t2.type === "stream" ? `${JSON.stringify(t2.geometryDefinition)}${t2.definitionExpression}` : null, c2 = JSON.stringify(this.clips), y2 = "featureReduction" in t2 ? (_b = t2.featureReduction) == null ? void 0 : _b.toJSON() : null, g2 = "orderBy" in this.layer && JSON.stringify(this.layer.orderBy), f2 = "sublayers" in this.layer && this.layer.sublayers.items.reduce((e3, t3) => e3 + `${t3.visible ? 1 : 0}.${JSON.stringify(t3.renderer)}.${t3.labelsVisible}
.${JSON.stringify(t3.labelingInfo)}`, ""), m2 = "subtypeCode" in this.layer && this.layer.subtypeCode;
    return JSON.stringify({ orderBy: g2, sublayerHash: f2, subtypeCode: m2, filterHash: r$1(this.filter) && this.filter.toJSON(), effectHash: r$1(this.featureEffect) && this.featureEffect.toJSON(), streamFilter: p2, gdbVersion: n2, definitionExpression: i2, historicMoment: o2, availableFields: e2, renderer: a2, labelingInfo: s2, timeExtent: u2, floors: r2, clipsHash: c2, featureReduction: y2, customParameters: h2, apiKey: d2 });
  }
  highlight(e2) {
    let t2;
    return e2 instanceof g ? t2 = [e2.getObjectId()] : typeof e2 == "number" || typeof e2 == "string" ? t2 = [e2] : j$1.isCollection(e2) && e2.length > 0 ? t2 = e2.map((e3) => e3 == null ? void 0 : e3.getObjectId()).toArray() : Array.isArray(e2) && e2.length > 0 && (t2 = typeof e2[0] == "number" || typeof e2[0] == "string" ? e2 : e2.map((e3) => e3 == null ? void 0 : e3.getObjectId())), t2 = t2 == null ? void 0 : t2.filter((e3) => e3 != null), t2 && t2.length ? (this._addHighlight(t2), { remove: () => this._removeHighlight(t2) }) : { remove: () => {
    } };
  }
  hasHighlight() {
    return !!this._highlightIds.size;
  }
  async hitTest(e2, i2) {
    if (!this.tileRenderer)
      return null;
    const s2 = await this.tileRenderer.hitTest(i2);
    if (s2.length === 0)
      return null;
    const { features: a2, aggregates: n2 } = await this._proxy.getFeatures(s2);
    return [...n2.map((r2) => this._createGraphicHit(e2, s$1.fromJSON(r2))), ...a2.map((t2) => this._createGraphicHit(e2, g.fromJSON(t2)))];
  }
  queryStatistics() {
    return this._proxy.queryStatistics();
  }
  async querySummaryStatistics(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.querySummaryStatistics(this._cleanUpQuery(e2), i2, r2);
  }
  async queryAggregateSummaryStatistics(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryAggregateSummaryStatistics(this._cleanUpAggregateQuery(e2), i2, r2);
  }
  async queryUniqueValues(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryUniqueValues(this._cleanUpQuery(e2), i2, r2);
  }
  async queryAggregateUniqueValues(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryAggregateUniqueValues(this._cleanUpAggregateQuery(e2), i2, r2);
  }
  async queryClassBreaks(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryClassBreaks(this._cleanUpQuery(e2), i2, r2);
  }
  async queryAggregateClassBreaks(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryAggregateClassBreaks(this._cleanUpAggregateQuery(e2), i2, r2);
  }
  async queryHistogram(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryHistogram(this._cleanUpQuery(e2), i2, r2);
  }
  async queryAggregateHistogram(e2, t2, r2) {
    const i2 = __spreadProps(__spreadValues({}, t2), { scale: this.view.scale });
    return this._proxy.queryAggregateHistogram(this._cleanUpAggregateQuery(e2), i2, r2);
  }
  queryFeatures(e2, t2) {
    return this.queryFeaturesJSON(e2, t2).then((e3) => {
      const t3 = x.fromJSON(e3);
      return t3.features.forEach((e4) => this._setLayersForFeature(e4)), t3;
    });
  }
  queryVisibleFeatures(e2, t2) {
    return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e2), t2).then((e3) => {
      const t3 = x.fromJSON(e3);
      return t3.features.forEach((e4) => this._setLayersForFeature(e4)), t3;
    });
  }
  async queryAggregates(e2, t2) {
    const r2 = await this._proxy.queryAggregates(this._cleanUpAggregateQuery(e2), t2), i2 = i$1.fromJSON(r2);
    return i2.features.forEach((e3) => this._setLayersForFeature(e3)), i2;
  }
  queryAggregateIds(e2, t2) {
    return this._proxy.queryAggregateIds(this._cleanUpAggregateQuery(e2), t2);
  }
  queryAggregateCount(e2, t2) {
    return this._proxy.queryAggregateCount(this._cleanUpAggregateQuery(e2), t2);
  }
  queryAggregateJSON(e2, t2) {
    return this._proxy.queryAggregates(this._cleanUpAggregateQuery(e2), t2);
  }
  queryFeaturesJSON(e2, t2) {
    return this._proxy.queryFeatures(this._cleanUpQuery(e2), t2);
  }
  queryObjectIds(e2, t2) {
    return this._proxy.queryObjectIds(this._cleanUpQuery(e2), t2);
  }
  queryFeatureCount(e2, t2) {
    return this._proxy.queryFeatureCount(this._cleanUpQuery(e2), t2);
  }
  queryExtent(e2, t2) {
    return this._proxy.queryExtent(this._cleanUpQuery(e2), t2).then((e3) => ({ count: e3.count, extent: w$3.fromJSON(e3.extent) }));
  }
  setVisibility(e2, t2) {
    t2 ? this._visibilityOverrides.delete(e2) : this._visibilityOverrides.add(e2), this._update();
  }
  update(e2) {
    if (!this._tileStrategy || !this.tileRenderer)
      return;
    const { hasMissingTiles: t2, added: r2, removed: i2 } = this._tileStrategy.update(e2);
    (r2.length || i2.length) && this._proxy.updateTiles({ added: r2, removed: i2 }), t2 && this.requestUpdate(), this.notifyChange("updating");
  }
  attach() {
    this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._tileStrategy = new l({ acquireTile: (e2) => this._acquireTile(e2), releaseTile: (e2) => this._releaseTile(e2), tileInfoView: this.view.featuresTilingScheme, buffer: 0 }), this.handles.add(l$4(() => this.renderingConfigHash, () => this._update(), h$1), "attach"), this.layer.type !== "stream" && this.handles.add(this.layer.on("edits", (e2) => this._edit(e2)), "attach");
  }
  detach() {
    var _a;
    this._commandsQueue.clear(), (_a = this._proxy) == null ? void 0 : _a.stop(), this.container.removeAllChildren(), this.handles.remove("attach"), this.tileRenderer && (this.tileRenderer.uninstall(this.container), this.tileRenderer = null), this._tileStrategy && (this._tileStrategy.destroy(), this._tileStrategy = null), this._tileRendererHash = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  isUpdating() {
    var _a;
    const e2 = "renderer" in this.layer && this.layer.renderer != null, t2 = this._commandsQueue.updating, r2 = this._updatingRequiredFieldsPromise != null, i2 = !this._proxy || !this._proxy.isReady, s2 = this._pipelineIsUpdating, a2 = this.tileRenderer == null || ((_a = this.tileRenderer) == null ? void 0 : _a.updating), n2 = e2 && (t2 || r2 || i2 || s2 || a2);
    return has("esri-2d-log-updating") && console.log(`Updating FLV2D: ${n2}
  -> hasRenderer ${e2}
  -> hasPendingCommand ${t2}
  -> updatingRequiredFields ${r2}
  -> updatingProxy ${i2}
  -> updatingPipeline ${s2}
  -> updatingTileRenderer ${a2}
`), n2;
  }
  _createClientOptions() {
    return { setUpdating: (e2) => {
      this._set("_pipelineIsUpdating", e2);
    }, emitEvent: (e2) => {
      this.emit(e2.name, e2.event);
    } };
  }
  async _detectQueryMode(e2) {
    var _a;
    const t2 = "path" in e2, r2 = "editingInfo" in this.layer && ((_a = this.layer.editingInfo) == null ? void 0 : _a.lastEditDate), i2 = !!this.layer.refreshInterval, s2 = !r2 && i2;
    if (t2 && (this.layer.type === "feature" || this.layer.type === "subtype-group") && this.layer.geometryType === "point" && this.layer.capabilities.query.supportsPagination && !this.layer.capabilities.operations.supportsEditing && !s2 && has("featurelayer-snapshot-enabled"))
      try {
        const e3 = await this.layer.queryFeatureCount();
        if (e3 <= has("featurelayer-snapshot-point-min-threshold"))
          return { mode: "snapshot", featureCount: e3 };
        const t3 = has("featurelayer-snapshot-point-max-threshold"), r3 = has("featurelayer-snapshot-point-coverage"), i3 = this.view.extent, s3 = e$2(this.layer.fullExtent), a2 = s3 == null ? void 0 : s3.clone().intersection(i3), n2 = r$1(a2) ? a2.width * a2.height : 0, o2 = (s3 == null ? void 0 : s3.width) * (s3 == null ? void 0 : s3.height), h2 = o2 === 0 ? 0 : n2 / o2;
        if (e3 <= t3 && h2 >= r3)
          return { mode: "snapshot", featureCount: e3 };
      } catch (a2) {
        s$2.getLogger(this.declaredClass).warn("mapview-feature-layer", "Encountered an error when querying for featureCount", { error: a2 });
      }
    return { mode: "on-demand" };
  }
  async _createServiceOptions() {
    var _a;
    const e2 = this.layer;
    if (e2.type === "stream")
      return null;
    const { capabilities: t2, objectIdField: r2 } = e2, i2 = e2.fields.map((e3) => e3.toJSON()), s2 = r$1(e2.fullExtent) && e2.fullExtent.toJSON(), n2 = e$4(e2.geometryType), o2 = e2.timeInfo && e2.timeInfo.toJSON() || null, u2 = e2.spatialReference ? e2.spatialReference.toJSON() : null, h2 = e2.type === "feature" ? e2.globalIdField : null;
    let d2;
    e2.type === "ogc-feature" ? d2 = e2.source.getSource() : J(e2.source) ? d2 = await e2.source.openPorts() : e2.parsedUrl && (d2 = y$3(e2.parsedUrl), "dynamicDataSource" in e2 && e2.dynamicDataSource && (d2.query = { layer: JSON.stringify({ source: e2.dynamicDataSource }) }));
    const p2 = "datesInUnknownTimezone" in this.layer && this.layer.datesInUnknownTimezone, c2 = (_a = "subtypeField" in this.layer && this.layer.subtypeField) != null ? _a : null, { mode: y2, featureCount: g2 } = await this._detectQueryMode(d2);
    let f2 = this.layer.objectIdField;
    if (this.layer.type === "feature" && r$1(this.layer.orderBy) && this.layer.orderBy.length) {
      const e3 = !this.layer.orderBy[0].valueExpression && this.layer.orderBy[0].field;
      e3 && (f2 = e3);
    }
    return { type: y2, timeReferenceUnknownClient: p2, subtypeField: c2, featureCount: g2, globalIdField: h2, maxRecordCount: t2.query.maxRecordCount, tileMaxRecordCount: t2.query.tileMaxRecordCount, capabilities: t2, fields: i2, fullExtent: s2, geometryType: n2, objectIdField: r2, source: d2, timeInfo: o2, spatialReference: u2, orderByFields: f2 };
  }
  async _createMemoryServiceOptions(e2) {
    const t2 = await e2.openPorts();
    return __spreadProps(__spreadValues({}, this._createServiceOptions()), { type: "memory", source: t2 });
  }
  _cleanUpQuery(e2) {
    const t2 = x$1.from(e2) || this.createQuery();
    return t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference), t2;
  }
  _cleanUpAggregateQuery(e2) {
    const t2 = x$1.from(e2) || this.createAggregateQuery();
    return t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference), t2;
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(e2) {
    if (this.suspended)
      return void this._clearTiles();
    return this._validateEdit(e2) ? this._commandsQueue.push({ type: "edit", edits: e2 }) : void 0;
  }
  async doRefresh(e2) {
    if (this.attached && this._tileStrategy.tileKeys().length)
      return this.suspended && e2 ? void this._clearTiles() : this._commandsQueue.push({ type: "refresh", dataChanged: e2 });
  }
  _clearTiles() {
    this._tileStrategy.tileKeys().length && (this._proxy.updateTiles({ added: [], removed: this._tileStrategy.tileKeys() }), this._tileStrategy.clear(), this.requestUpdate(), this._commandsQueue.clear(), this._update());
  }
  _validateEdit(e2) {
    const t2 = "globalIdField" in this.layer && this.layer.globalIdField, r2 = e2.deletedFeatures.some((e3) => e3.objectId === -1 || !e3.objectId), i2 = t2 && this.availableFields.includes(t2);
    return r2 && !i2 ? (s$2.getLogger(this.declaredClass).error(new s$3("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${t2} to be included the layer's outFields for updates to be reflected on the map`)), null) : e2;
  }
  async _doUpdate() {
    try {
      if (this.destroyed || !this._hasRequiredSupport(this.layer) || !this._tileStrategy)
        return;
      const { featureEffectView: t2, filter: r2 } = this;
      await this._updateRequiredFields();
      const { renderer: i2 } = this._getEffectiveRenderer();
      this._set("_effectiveRenderer", i2);
      const s2 = this._createSchemaConfig(), a2 = this._createConfiguration(s2, r2, t2.filter), o2 = this._lastDefinitionExpression !== a2.schema.source.definitionExpression;
      this._lastDefinitionExpression = a2.schema.source.definitionExpression;
      const l2 = a2.schema.tileRenderer, u2 = this._createTileRendererHash(l2);
      if (this._serviceOptions.type === "snapshot" && (a2.schema.source.initialFeatureCount = this._serviceOptions.featureCount), u2 !== this._tileRendererHash) {
        await this._initTileRenderer(l2, i2);
        const e2 = this.layer, t3 = e2.type === "stream" ? await this._initServiceOptions() : this._serviceOptions;
        this.tileRenderer.onConfigUpdate(i2), e2.type !== "stream" && J(e2.source) && (t3.source = await e2.source.openPorts());
        const r3 = { added: this._tileStrategy.tileKeys(), removed: [] };
        await this._proxy.startup(this.view.featuresTilingScheme, a2, t3, r3), this.hasHighlight() && await this._proxy.setHighlight(Array.from(this._highlightIds.keys())), await this._onceTilesUpdated(), this.tileRenderer.onConfigUpdate(i2);
      } else {
        this._serviceOptions.type === "snapshot" && o2 && (a2.schema.source.changedFeatureCount = await this.layer.queryFeatureCount());
        const t3 = await this._proxy.update(a2);
        (t3.mesh || t3.targets.aggregate) && this._lockGPUUploads();
        try {
          await this._proxy.applyUpdate(t3);
        } catch (e2) {
          j$2(e2) || s$2.getLogger(this.declaredClass).error(e2);
        }
        (t3.mesh || t3.targets.aggregate) && this._unlockGPUUploads(), this.tileRenderer.onConfigUpdate(i2), this._updateClusterSizeVariable(), this._forceAttributeTextureUpload();
      }
      this._tileRendererHash = u2, this.tileRenderer.invalidateLabels(), this.requestUpdate();
    } catch (e2) {
    }
  }
  async _doEdit(e2) {
    try {
      await this._proxy.onEdits(e2);
    } catch (t2) {
      j$2(t2);
    }
  }
  async _doRefresh(e2) {
    this._lockGPUUploads();
    try {
      let t3;
      e2 && this.queryMode === "snapshot" && "queryFeatureCount" in this.layer && (t3 = await this.layer.queryFeatureCount()), await this._proxy.refresh({ dataChanged: e2, featureCount: t3 });
    } catch (r2) {
      j$2(r2);
    }
    this._unlockGPUUploads();
    const t2 = this.layer;
    t2 && "featureReduction" in t2 && t2.featureReduction && this._updateClusterSizeVariable();
  }
  _updateClusterSizeVariable() {
    this._needsClusterSizeUpdate && (this.tileRenderer.onConfigUpdate(this._effectiveRenderer), this._needsClusterSizeUpdate = false);
  }
  _createUpdateClusterSizeTask(e2, t2) {
    return l$4(() => this._aggregateValueRanges, (r2) => {
      this._updateClusterEffectiveRendererSizeVariable(e2, t2, r2), this._needsClusterSizeUpdate = true, this._uploadsLocked || this._updateClusterSizeVariable();
    });
  }
  async _updateClusterEffectiveRendererSizeVariable(e2, t2, r2) {
    if (e2.dynamicClusterSize && "visualVariables" in e2 && e2.visualVariables) {
      const i2 = f(e2.visualVariables);
      if (r$1(i2) && i2.field === "cluster_count") {
        const s2 = e2.visualVariables.indexOf(i2);
        e2.visualVariables[s2] = b$1(t2, r2);
        const a2 = e2.clone();
        a2.dynamicClusterSize = true, this._set("_effectiveRenderer", a2);
      }
    }
  }
  _getEffectiveRenderer() {
    var _a;
    const e2 = this.layer, t2 = "renderer" in e2 ? e2.renderer : null, r2 = "featureReduction" in e2 ? e2.featureReduction : null;
    if (r$1(this._updateClusterSizeTask) && (this._updateClusterSizeTask.remove(), this._updateClusterSizeTask = null), r2 && "renderer" in r2 && r2.renderer && !((_a = r2.renderer.authoringInfo) == null ? void 0 : _a.isAutoGenerated)) {
      const e3 = r2.fields;
      if (r2.type === "cluster") {
        const { renderer: t3, didInject: i2 } = m$2(r2.renderer, r2, this._aggregateValueRanges);
        return i2 && (o$3(this._updateClusterSizeTask, (e4) => e4.remove()), this._updateClusterSizeTask = this._createUpdateClusterSizeTask(t3, r2)), { renderer: t3, aggregateFields: e3, featureReduction: r2 };
      }
      return { renderer: r2.renderer, aggregateFields: e3, featureReduction: r2 };
    }
    if (r2 && r2.type === "cluster" && g$3(t2)) {
      const e3 = r2, i2 = [], s2 = d$2(i2, t2, e3, this._aggregateValueRanges, true);
      return o$3(this._updateClusterSizeTask, (e4) => e4.remove()), this._updateClusterSizeTask = this._createUpdateClusterSizeTask(s2, e3), { renderer: s2, aggregateFields: i2, featureReduction: r2 };
    }
    return { renderer: t2, aggregateFields: [], featureReduction: null };
  }
  _acquireTile(e2) {
    const t2 = this.tileRenderer.acquireTile(e2);
    return t2.once("attach", () => {
      this.requestUpdate();
    }), t2;
  }
  _releaseTile(e2) {
    this.tileRenderer.releaseTile(e2);
  }
  async _initTileRenderer(e$12, t2) {
    const r2 = await e(e$12, { layerView: this, tileInfoView: this.view.featuresTilingScheme, layer: this.layer });
    return this.tileRenderer && (this._tileStrategy.clear(), this.tileRenderer.uninstall(this.container), this.tileRenderer.destroy(), this.tileRenderer = null), this.destroyed ? null : (this._proxy.tileRenderer = r2, this._set("tileRenderer", r2), this.tileRenderer.install(this.container), this.tileRenderer.onConfigUpdate(t2), this.requestUpdate(), this.tileRenderer);
  }
  _createTileRendererHash(e2) {
    return `${e2.type}`;
  }
  get hasFilter() {
    const e2 = !!("floorInfo" in this.layer && this.layer.floorInfo && this.view.floors && this.view.floors.length);
    return !!this.filter || e2 || !!this._visibilityOverrides.size || !!this.timeExtent;
  }
  _injectOverrides(e2) {
    const t2 = r$1(e2) ? e2.timeExtent : null, r2 = r$1(this.timeExtent) && r$1(t2) ? this.timeExtent.intersection(t2) : this.timeExtent || t2;
    let i2 = null;
    const s2 = "floorInfo" in this.layer && this.layer.floorInfo;
    if (s2) {
      const t3 = r$1(e2) && e2.where;
      i2 = this._addFloorFilterClause(t3);
    }
    if (!this._visibilityOverrides.size && !r2 && !s2)
      return r$1(e2) ? e2.toJSON() : null;
    (e2 = r$1(e2) && e2.clone() || new y$1()).timeExtent = r2, i2 && (e2.where = i2);
    const a2 = e2.toJSON();
    return a2.hiddenIds = Array.from(this._visibilityOverrides), a2;
  }
  _addFloorFilterClause(e2) {
    var _a;
    const t2 = this.layer;
    let r2 = e2 || "";
    if ("floorInfo" in t2 && t2.floorInfo) {
      let e3 = this.view.floors;
      if (!e3 || !e3.length)
        return r2;
      ((_a = t2.floorInfo.viewAllLevelIds) == null ? void 0 : _a.length) && (e3 = t2.floorInfo.viewAllLevelIds);
      const i2 = e3.filter((e4) => e4 !== "").map((e4) => "'" + e4 + "'");
      i2.push("''");
      const s2 = t2.floorInfo.floorField;
      let a2 = "(" + s2 + " IN ({ids}) OR " + s2 + " IS NULL)";
      if (a2 = a2.replace("{ids}", i2.join(", ")), r$1(r2) && r2.includes(s2)) {
        let e4 = new RegExp("AND \\(" + s2 + ".*NULL\\)", "g");
        r2 = r2.replace(e4, ""), e4 = new RegExp("\\(" + s2 + ".*NULL\\)", "g"), r2 = r2.replace(e4, ""), r2 = r2.replace(/\s+/g, " ").trim();
      }
      r2 = r2 !== "" ? "(" + r2 + ") AND " + a2 : a2;
    }
    return r2 !== "" ? r2 : null;
  }
  _createConfiguration(e2, t$1, r2) {
    const i2 = this.layer.type === "feature" && this.layer.historicMoment ? this.layer.historicMoment.getTime() : void 0, s2 = this.layer.type === "feature" ? this.layer.gdbVersion : void 0, a2 = new Array(S), n2 = this._injectOverrides(t$1);
    a2[0] = n2, a2[1] = r$1(r2) ? r2.toJSON() : null;
    const o2 = F(e2);
    if (t(o2))
      return null;
    const u2 = l$5("2d");
    return { availableFields: this.availableFields, gdbVersion: s2, historicMoment: i2, devicePixelRatio: window.devicePixelRatio || 1, filters: a2, schema: o2, supportsTextureFloat: u2.supportsTextureFloat, maxTextureSize: u2.maxTextureSize };
  }
  _hasRequiredSupport(e2) {
    return !("renderer" in e2) || h$2(e2.renderer);
  }
  _onceTilesUpdated() {
    return this.requestUpdate(), j$3(() => !this._pipelineIsUpdating);
  }
  _lockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = true, this.tileRenderer.lockGPUUploads());
  }
  _unlockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = false, this.tileRenderer.unlockGPUUploads());
  }
  _forceAttributeTextureUpload() {
    this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
  }
  _createSchemaConfig() {
    const e2 = this.layer;
    return { renderer: "renderer" in e2 ? e2.renderer : null, spatialReference: e2.spatialReference, timeExtent: e2.timeExtent, definitionExpression: e2.definitionExpression, featureReduction: "featureReduction" in e2 ? e2.featureReduction : null, fields: e2.fields, geometryType: e2.geometryType, historicMoment: "historicMoment" in e2 ? e2.historicMoment : null, labelsVisible: "labelsVisible" in e2 && e2.labelsVisible, labelingInfo: "labelingInfo" in e2 && e2.labelingInfo, availableFields: this.availableFields, featureEffect: this.featureEffect, filter: this.filter, gdbVersion: "gdbVersion" in e2 ? e2.gdbVersion : null, pixelBuffer: 0, orderBy: "orderBy" in e2 && e2.orderBy ? e2.orderBy : null, customParameters: __spreadProps(__spreadValues({}, "customParameters" in e2 ? e2.customParameters : void 0), { token: "apiKey" in e2 ? e2.apiKey : void 0 }), subtypeCode: "subtypeCode" in e2 ? e2.subtypeCode : void 0, subtypeField: "subtypeField" in e2 ? e2.subtypeField : void 0 };
  }
  _addHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2);
        this._highlightIds.set(t2, e3 + 1);
      } else
        this._highlightIds.set(t2, 1);
    this._updateHighlight().catch((e3) => {
      j$2(e3) || s$2.getLogger(this.declaredClass).error(e3);
    });
  }
  _removeHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2) - 1;
        e3 === 0 ? this._highlightIds.delete(t2) : this._highlightIds.set(t2, e3);
      }
    this._updateHighlight().catch((e3) => {
      j$2(e3) || s$2.getLogger(this.declaredClass).error(e3);
    });
  }
  _setLayersForFeature(e2) {
    const t2 = this.layer;
    e2.layer = t2, e2.sourceLayer = t2;
  }
  _createGraphicHit(e2, t2) {
    return this._setLayersForFeature(t2), r$1(t2.geometry) && (t2.geometry.spatialReference = this.view.spatialReference), { type: "graphic", graphic: t2, layer: this.layer, mapPoint: e2 };
  }
};
e$1([y()], M.prototype, "_serviceOptions", void 0), e$1([y()], M.prototype, "_proxy", void 0), e$1([y()], M.prototype, "_pipelineIsUpdating", void 0), e$1([y()], M.prototype, "_effectiveRenderer", void 0), e$1([y()], M.prototype, "_aggregateValueRanges", void 0), e$1([y()], M.prototype, "_commandsQueue", void 0), e$1([y()], M.prototype, "featureEffectView", void 0), e$1([y()], M.prototype, "labelsVisible", null), e$1([y({ readOnly: true })], M.prototype, "queryMode", null), e$1([y()], M.prototype, "renderingConfigHash", null), e$1([y()], M.prototype, "tileRenderer", void 0), e$1([y()], M.prototype, "updating", void 0), M = e$1([n$1("esri.views.2d.layers.FeatureLayerView2D")], M);
const B = M;
export { B as default };
