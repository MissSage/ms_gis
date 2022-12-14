var __defProp = Object.defineProperty;
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
import { aq as o, bg as n, c as e$1, f as y, h as n$1, U as m$2, r, hb as c$1, x as t, lk as t$1, L as l$1, d7 as U, cY as d$1, bw as h, hT as S, b as g, aU as l$2, fA as h$1, og as j, g_ as m$3, ee as h$2, bp as t$2, n as n$2, v as v$1, lh as f$1, ks as y$1, n$ as i, jx as o$1, lL as j$1, w, oh as p$1, E as a$2, aX as f$2, oi as t$3, oj as y$2, M as o$2, gH as b$1, bE as t$4, ok as p$2, ol as E } from "./index.js";
import { G, Q, e as es } from "./boundedPlane.js";
import { r as r$1, a as a$3 } from "./queryEngineUtils.js";
import { h as h$3 } from "./WorkerHandle.js";
import "vue";
import "./lineSegment.js";
import "./VertexSnappingCandidate.js";
function c(n2, o$12) {
  return Q(o$12.extent, e), es(e, o(a$1, n2.x, n2.y, 0));
}
const e = G(), a$1 = n();
let u$1 = class extends m$2 {
  constructor(e2) {
    super(e2), this.pointOfInterest = null;
  }
  get tiles() {
    const e2 = this.tilesCoveringView, t2 = r(this.pointOfInterest) ? this.pointOfInterest : this.view.center;
    return e2.sort((e3, r2) => c(t2, e3) - c(t2, r2)), e2;
  }
  _scaleEnabled() {
    return c$1(this.view.scale, this.layer.minScale || 0, this.layer.maxScale || 0);
  }
  get tilesCoveringView() {
    if (!this.view.ready || !this.view.featuresTilingScheme || !this.view.state || t(this.tileInfo))
      return [];
    if (!this._scaleEnabled)
      return [];
    const { spans: e2, lodInfo: t$22 } = this.view.featuresTilingScheme.getTileCoverage(this.view.state, 0), { level: r2 } = t$22, o2 = [];
    for (const { row: i2, colFrom: s2, colTo: l2 } of e2)
      for (let e3 = s2; e3 <= l2; e3++) {
        const s3 = t$22.normalizeCol(e3), l3 = new t$1(null, r2, i2, s3);
        this.tileInfo.updateTileInfo(l3), o2.push(l3);
      }
    return o2;
  }
  get tileInfo() {
    var _a, _b;
    return (_b = (_a = this.view.featuresTilingScheme) == null ? void 0 : _a.tileInfo) != null ? _b : null;
  }
  get tileSize() {
    return r(this.tileInfo) ? this.tileInfo.size[0] : 256;
  }
  initialize() {
    this.addHandles(l$1(() => {
      var _a, _b;
      return (_b = (_a = this.view) == null ? void 0 : _a.state) == null ? void 0 : _b.viewpoint;
    }, () => this.notifyChange("tilesCoveringView"), U));
  }
};
e$1([y({ readOnly: true })], u$1.prototype, "tiles", null), e$1([y({ readOnly: true })], u$1.prototype, "_scaleEnabled", null), e$1([y({ readOnly: true })], u$1.prototype, "tilesCoveringView", null), e$1([y({ readOnly: true })], u$1.prototype, "tileInfo", null), e$1([y({ readOnly: true })], u$1.prototype, "tileSize", null), e$1([y({ constructOnly: true })], u$1.prototype, "view", void 0), e$1([y({ constructOnly: true })], u$1.prototype, "layer", void 0), e$1([y()], u$1.prototype, "pointOfInterest", void 0), u$1 = e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")], u$1);
var s;
!function(i2) {
  i2[i2.INVISIBLE = 0] = "INVISIBLE", i2[i2.VISIBLE_WHEN_EXTENDED = 1] = "VISIBLE_WHEN_EXTENDED", i2[i2.VISIBLE_ON_SURFACE = 2] = "VISIBLE_ON_SURFACE";
}(s || (s = {}));
let u = class extends d$1 {
  constructor(e2) {
    super(e2), this.pointOfInterest = null;
  }
  get tiles() {
    const e2 = this.tilesCoveringView, t2 = this._effectivePointOfInterest;
    if (r(t2)) {
      const r2 = e2.map((e3) => c(t2, e3));
      for (let i2 = 1; i2 < r2.length; i2++)
        if (r2[i2 - 1] > r2[i2])
          return e2.sort((e3, r3) => c(t2, e3) - c(t2, r3)), e2.slice();
    }
    return e2;
  }
  get tilesCoveringView() {
    var _a, _b;
    return this._filterTiles((_b = (_a = this.view.featureTiles) == null ? void 0 : _a.tiles) == null ? void 0 : _b.toArray()).map(f);
  }
  get tileInfo() {
    var _a, _b;
    return (_b = (_a = this.view.featureTiles) == null ? void 0 : _a.tilingScheme.toTileInfo()) != null ? _b : null;
  }
  get tileSize() {
    var _a, _b;
    return (_b = (_a = this.view.featureTiles) == null ? void 0 : _a.tileSize) != null ? _b : 256;
  }
  get _effectivePointOfInterest() {
    var _a;
    const e2 = this.pointOfInterest;
    return r(e2) ? e2 : (_a = this.view.pointsOfInterest) == null ? void 0 : _a.focus.location;
  }
  initialize() {
    this.handles.add(l$1(() => this.view.featureTiles, (e2) => {
      this.handles.remove(v), e2 && this.handles.add(e2.addClient(), v);
    }, h));
  }
  _filterTiles(e2) {
    if (t(e2))
      return [];
    return e2.filter((e3) => Math.abs(e3.measures.screenRect[3] - e3.measures.screenRect[1]) > m$1 && e3.measures.visibility === s.VISIBLE_ON_SURFACE);
  }
};
function f({ lij: [e2, t2, r2], extent: i2 }) {
  return new t$1(`${e2}/${t2}/${r2}`, e2, t2, r2, i2);
}
e$1([y({ readOnly: true })], u.prototype, "tiles", null), e$1([y({ readOnly: true })], u.prototype, "tilesCoveringView", null), e$1([y({ readOnly: true })], u.prototype, "tileInfo", null), e$1([y({ readOnly: true })], u.prototype, "tileSize", null), e$1([y({ constructOnly: true })], u.prototype, "view", void 0), e$1([y()], u.prototype, "pointOfInterest", void 0), e$1([y()], u.prototype, "_effectivePointOfInterest", null), u = e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")], u);
const m$1 = 50, v = "feature-tiles";
const m = [[0, 179, 255], [117, 62, 128], [0, 104, 255], [215, 189, 166], [32, 0, 193], [98, 162, 206], [102, 112, 129], [52, 125, 0], [142, 118, 246], [138, 83, 0], [92, 122, 255], [122, 55, 83], [0, 142, 255], [81, 40, 179], [0, 200, 244], [13, 24, 127], [0, 170, 147], [19, 58, 241], [22, 44, 35]];
let b = class extends m$2 {
  constructor(e2) {
    super(e2), this.updating = false, this.enablePolygons = true, this.enableLabels = true, this._polygons = new Map(), this._labels = new Map(), this._enabled = true;
  }
  initialize() {
    this._symbols = m.map((e2) => new S({ color: [e2[0], e2[1], e2[2], 0.6], outline: { color: "black", width: 1 } })), this.update();
  }
  destroy() {
    this._enabled = false, this.clear();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e2) {
    this._enabled !== e2 && (this._enabled = e2, this.update());
  }
  update() {
    if (!this._enabled)
      return void this.clear();
    const e2 = (e3) => {
      if (r(e3.label))
        return e3.label;
      let s2 = e3.lij.toString();
      return r(e3.loadPriority) && (s2 += ` (${e3.loadPriority})`), s2;
    }, o2 = this.getTiles(), a2 = new Array(), n2 = new Set((this._labels.size, this._labels.keys()));
    o2.forEach((p3, m2) => {
      const b2 = p3.lij.toString();
      n2.delete(b2);
      const d2 = p3.lij[0], g$1 = p3.geometry;
      if (this.enablePolygons && !this._polygons.has(b2)) {
        const e3 = new g({ geometry: g$1, symbol: this._symbols[d2 % this._symbols.length] });
        this._polygons.set(b2, e3), a2.push(e3);
      }
      if (this.enableLabels) {
        const n3 = e2(p3), d3 = m2 / (o2.length - 1), u2 = h$2(0, 200, d3), _ = h$2(20, 6, d3) / 0.75, f2 = r(p3.loadPriority) && p3.loadPriority >= o2.length, w2 = new l$2([u2, f2 ? 0 : u2, f2 ? 0 : u2]), j$12 = this.view.type === "3d" ? () => new h$1({ verticalOffset: { screenLength: 40 / 0.75 }, callout: { type: "line", color: "white", border: { color: "black" } }, symbolLayers: [new j({ text: n3, halo: { color: "white", size: 1 / 0.75 }, material: { color: w2 }, size: _ })] }) : () => new m$3({ text: n3, haloColor: "white", haloSize: 1 / 0.75, color: w2, size: _ });
        if (this._labels.has(b2)) {
          const e3 = this._labels.get(b2), s2 = j$12();
          (t(e3.symbol) || JSON.stringify(s2) !== JSON.stringify(e3.symbol)) && (e3.symbol = s2);
        } else {
          const e3 = new g({ geometry: g$1.extent.center, symbol: j$12() });
          this._labels.set(b2, e3), a2.push(e3);
        }
      }
    });
    const p2 = new Array();
    n2.forEach((e3) => {
      this._polygons.has(e3) && (p2.push(this._polygons.get(e3)), this._polygons.delete(e3)), this._labels.has(e3) && (p2.push(this._labels.get(e3)), this._labels.delete(e3));
    }), this.view.graphics.removeMany(p2), this.view.graphics.addMany(a2);
  }
  clear() {
    this.view.graphics.removeMany(Array.from(this._polygons.values())), this.view.graphics.removeMany(Array.from(this._labels.values())), this._polygons.clear(), this._labels.clear();
  }
};
e$1([y({ constructOnly: true })], b.prototype, "view", void 0), e$1([y({ readOnly: true })], b.prototype, "updating", void 0), e$1([y()], b.prototype, "enabled", null), b = e$1([n$1("esri.views.support.TileTreeDebugger")], b);
let d = class extends b {
  constructor(e2) {
    super(e2), this._handles = new t$2();
  }
  initialize() {
    const e2 = setInterval(() => this._fetchDebugInfo(), 2e3);
    this._handles.add(n$2(() => clearInterval(e2)));
  }
  destroy() {
    this._handles.destroy();
  }
  getTiles() {
    if (!this._debugInfo)
      return [];
    const e2 = new Map(), t2 = new Map();
    this._debugInfo.storedTiles.forEach((t3) => {
      e2.set(t3.data.id, t3.featureCount);
    }), this._debugInfo.pendingTiles.forEach((r3) => {
      e2.set(r3.data.id, r3.featureCount), t2.set(r3.data.id, r3.state);
    });
    const r2 = (r3) => {
      var _a;
      const o3 = t2.get(r3), s2 = (_a = e2.get(r3)) != null ? _a : "?";
      return o3 ? `${o3}:${s2}
${r3}` : `store:${s2}
${r3}`;
    }, o2 = new Map();
    return this._debugInfo.storedTiles.forEach((e3) => {
      o2.set(e3.data.id, e3.data);
    }), this._debugInfo.pendingTiles.forEach((e3) => {
      o2.set(e3.data.id, e3.data);
    }), Array.from(o2.values()).map((e3) => ({ lij: [e3.level, e3.row, e3.col], geometry: v$1.fromExtent(f$1(e3.extent, this.view.spatialReference)), label: r2(e3.id) }));
  }
  _fetchDebugInfo() {
    this.handle.getDebugInfo(null).then((e2) => {
      this._debugInfo = e2, this.update();
    });
  }
};
e$1([y({ constructOnly: true })], d.prototype, "handle", void 0), d = e$1([n$1("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")], d);
let l = class extends d$1 {
  constructor(e2) {
    super(e2), this.schedule = null, this.hasZ = false, this.elevationAlignPointsInFeatures = async (e3) => {
      const t2 = [];
      for (const { points: i2 } of e3)
        for (const { z: e4 } of i2)
          t2.push(e4);
      return { elevations: t2, drapedObjectIds: new Set(), failedObjectIds: new Set() };
    }, this.queryForSymbologySnapping = async () => ({ candidates: [], sourceCandidateIndices: [] }), this.availability = 0, this._workerHandleUpdating = true, this._editId = 0;
  }
  get updating() {
    return this.updatingHandles.updating || this._workerHandleUpdating;
  }
  destroy() {
    this._workerHandle.destroy();
  }
  initialize() {
    this._workerHandle = new p(this.schedule, { alignElevation: async (e2, { signal: t2 }) => ({ result: await this.elevationAlignPointsInFeatures(e2.points, t2) }), getSymbologyCandidates: async (e2, { signal: t2 }) => ({ result: await this.queryForSymbologySnapping(e2, t2) }) }), this.handles.add([this._workerHandle.on("notify-updating", ({ updating: e2 }) => this._workerHandleUpdating = e2), this._workerHandle.on("notify-availability", ({ availability: e2 }) => this._set("availability", e2))]);
  }
  async setup(e2, t$12) {
    var _a;
    const o2 = this._serviceInfoFromLayer(e2.layer);
    if (t(o2))
      return;
    const a2 = { configuration: this._convertConfiguration(e2.configuration), serviceInfo: o2, spatialReference: e2.spatialReference.toJSON(), hasZ: this.hasZ, elevationInfo: (_a = e2.layer.elevationInfo) == null ? void 0 : _a.toJSON() };
    await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("setup", a2, t$12)), this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t$12));
  }
  async configure(e2, t2) {
    const i2 = this._convertConfiguration(e2);
    await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("configure", i2, t2)), this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  async refresh(e2) {
    await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh", {}, e2)), this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, e2));
  }
  async fetchCandidates(e2, t2) {
    const i2 = { distance: e2.distance, point: e2.coordinateHelper.vectorToPoint(e2.point).toJSON(), types: e2.types, filter: r(e2.filter) ? e2.filter.toJSON() : null };
    return this._workerHandle.invoke(i2, t2);
  }
  async updateTiles(e2, t2) {
    const i2 = { tiles: e2.tiles, tileInfo: r(e2.tileInfo) ? e2.tileInfo.toJSON() : null, tileSize: e2.tileSize };
    await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles", i2, t2)), this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  async applyEdits(e2, t2) {
    var _a, _b, _c, _d, _e, _f;
    const i2 = this._editId++, n2 = { id: i2 };
    await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits", n2, t2));
    const r$12 = await this.updatingHandles.addPromise(y$1(e2.result, t2)), s2 = { id: i2, edits: { addedFeatures: (_b = (_a = r$12.addedFeatures) == null ? void 0 : _a.map(({ objectId: e3 }) => e3).filter(r)) != null ? _b : [], deletedFeatures: (_d = (_c = r$12.deletedFeatures) == null ? void 0 : _c.map(({ objectId: e3, globalId: t3 }) => ({ objectId: e3, globalId: t3 }))) != null ? _d : [], updatedFeatures: (_f = (_e = r$12.updatedFeatures) == null ? void 0 : _e.map(({ objectId: e3 }) => e3).filter(r)) != null ? _f : [] } };
    await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits", s2, t2)), this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  getDebugInfo(e2) {
    return this._workerHandle.invokeMethod("getDebugInfo", {}, e2);
  }
  async notifyElevationSourceChange() {
    await this._workerHandle.invokeMethod("notifyElevationSourceChange", {});
  }
  async notifySymbologyChange() {
    await this._workerHandle.invokeMethod("notifySymbologyChange", {});
  }
  async setSymbologySnappingSupported(e2) {
    await this._workerHandle.invokeMethod("setSymbologySnappingSupported", e2);
  }
  _convertConfiguration(e2) {
    return { filter: r(e2.filter) ? e2.filter.toJSON() : null, customParameters: e2.customParameters, viewType: e2.viewType };
  }
  _serviceInfoFromLayer(e2) {
    var _a, _b, _c;
    return e2.geometryType === "multipatch" || e2.geometryType === "mesh" ? null : { url: (_b = (_a = e2.parsedUrl) == null ? void 0 : _a.path) != null ? _b : "", fields: e2.fields.map((e3) => e3.toJSON()), geometryType: i.toJSON(e2.geometryType), capabilities: e2.capabilities, objectIdField: e2.objectIdField, globalIdField: e2.globalIdField, spatialReference: e2.spatialReference.toJSON(), timeInfo: (_c = e2.timeInfo) == null ? void 0 : _c.toJSON() };
  }
};
e$1([y({ constructOnly: true })], l.prototype, "schedule", void 0), e$1([y({ constructOnly: true })], l.prototype, "hasZ", void 0), e$1([y({ constructOnly: true })], l.prototype, "elevationAlignPointsInFeatures", void 0), e$1([y({ constructOnly: true })], l.prototype, "queryForSymbologySnapping", void 0), e$1([y({ readOnly: true })], l.prototype, "updating", null), e$1([y({ readOnly: true })], l.prototype, "availability", void 0), e$1([y()], l.prototype, "_workerHandleUpdating", void 0), l = e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")], l);
class p extends h$3 {
  constructor(e2, t2) {
    super("FeatureServiceSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
}
let a = class extends m$2 {
  constructor(e2) {
    super(e2), this.pointOfInterest = null;
  }
  get tiles() {
    return [new t$1("0/0/0", 0, 0, 0, o$1(-1e8, -1e8, 1e8, 1e8))];
  }
  get tileInfo() {
    return new j$1({ origin: new w({ x: -1e8, y: 1e8, spatialReference: this.layer.spatialReference }), size: [512, 512], lods: [new p$1({ level: 0, scale: 1, resolution: 390625 })], spatialReference: this.layer.spatialReference });
  }
  get tileSize() {
    return this.tileInfo.size[0];
  }
};
e$1([y({ readOnly: true })], a.prototype, "tiles", null), e$1([y({ readOnly: true })], a.prototype, "tileInfo", null), e$1([y({ readOnly: true })], a.prototype, "tileSize", null), e$1([y({ constructOnly: true })], a.prototype, "layer", void 0), e$1([y()], a.prototype, "pointOfInterest", void 0), a = e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")], a);
let k = class extends a$2(m$2) {
  constructor(e2) {
    super(e2);
  }
  get _updateTilesParameters() {
    return { tiles: this._tilesOfInterest.tiles, tileInfo: this._tilesOfInterest.tileInfo, tileSize: this._tilesOfInterest.tileSize };
  }
  get updating() {
    return this._workerHandle.updating || this.updatingHandles.updating;
  }
  get configuration() {
    const { view: e2 } = this, t2 = r(e2) ? e2.type : "2d";
    return { filter: this._layer.createQuery(), customParameters: this._layer.customParameters, viewType: t2 };
  }
  get availability() {
    return this._workerHandle.availability;
  }
  get _layer() {
    return this.layerSource.layer;
  }
  initialize() {
    var _a;
    const e2 = this.view;
    if (r(e2))
      switch (e2.type) {
        case "2d":
          this._tilesOfInterest = new u$1({ view: e2, layer: this._layer }), this._workerHandle = new l();
          break;
        case "3d": {
          const { resourceController: t2 } = e2, r2 = this._layer, i2 = e2.whenLayerView(r2);
          this._tilesOfInterest = new u({ view: e2 }), this._workerHandle = new l({ schedule: (e3) => t2.schedule(e3), hasZ: this._layer.hasZ && ((_a = this._layer.returnZ) != null ? _a : true), elevationAlignPointsInFeatures: async (e3, t3) => {
            const r3 = await i2;
            return f$2(t3), r3.elevationAlignPointsInFeatures(e3, t3);
          }, queryForSymbologySnapping: async (e3, t3) => {
            const r3 = await i2;
            return f$2(t3), r3.queryForSymbologySnapping(e3, t3);
          } });
          const o2 = new t$3(null);
          i2.then((e3) => o2.set(e3)), this.addHandles([e2.elevationProvider.on("elevation-change", ({ context: e3 }) => {
            var _a2;
            const { elevationInfo: t3 } = r2;
            y$2(e3, t3) && ((_a2 = this._workerHandle) == null ? void 0 : _a2.notifyElevationSourceChange());
          }), l$1(() => r2.elevationInfo, () => {
            var _a2;
            return (_a2 = this._workerHandle) == null ? void 0 : _a2.notifyElevationSourceChange();
          }, h), l$1(() => o$2(o2.get(), ({ processor: e3 }) => e3 == null ? void 0 : e3.renderer), () => {
            var _a2;
            return (_a2 = this._workerHandle) == null ? void 0 : _a2.notifySymbologyChange();
          }, h), l$1(() => b$1(o2.get(), false, (e3) => e3.symbologySnappingSupported), (e3) => {
            var _a2;
            return (_a2 = this._workerHandle) == null ? void 0 : _a2.setSymbologySnappingSupported(e3);
          }, h)]);
          break;
        }
      }
    else
      this._tilesOfInterest = new a({ layer: this._layer }), this._workerHandle = new l();
    this.handles.add([t$4(this._workerHandle)]), this._workerHandle.setup({ layer: this._layer, spatialReference: this.spatialReference, configuration: this.configuration }, null), this.updatingHandles.add(() => this._updateTilesParameters, () => this._workerHandle.updateTiles(this._updateTilesParameters, null), h), this.handles.add([l$1(() => this.configuration, (e3) => this._workerHandle.configure(e3, null), U)]), r(e2) && this.handles.add(l$1(() => p$2.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES, (t2) => {
      t2 && !this._debug ? (this._debug = new d({ view: e2, handle: this._workerHandle }), this.handles.add(t$4(this._debug), "debug")) : !t2 && this._debug && this.handles.remove("debug");
    }, h)), this.handles.add(this.layerSource.layer.on("apply-edits", (e3) => {
      this._workerHandle.applyEdits(e3, null);
    }));
  }
  refresh() {
    this._workerHandle.refresh(null);
  }
  async fetchCandidates(e2, t2) {
    const { coordinateHelper: r2, elevationInfo: i2, point: o2 } = e2;
    this._tilesOfInterest.pointOfInterest = r2.vectorToPoint(o2);
    const s2 = r2.hasZ() ? E : i2, n2 = this._getGroundElevation;
    return (await this._workerHandle.fetchCandidates(__spreadValues({}, e2), t2)).candidates.map((e3) => r$1(e3, r2, s2, n2));
  }
  getDebugInfo(e2) {
    return this._workerHandle.getDebugInfo(e2);
  }
  get _getGroundElevation() {
    return a$3(this.view);
  }
};
e$1([y({ constructOnly: true })], k.prototype, "spatialReference", void 0), e$1([y({ constructOnly: true })], k.prototype, "layerSource", void 0), e$1([y({ constructOnly: true })], k.prototype, "view", void 0), e$1([y()], k.prototype, "_tilesOfInterest", void 0), e$1([y({ readOnly: true })], k.prototype, "_updateTilesParameters", null), e$1([y({ readOnly: true })], k.prototype, "updating", null), e$1([y({ readOnly: true })], k.prototype, "configuration", null), e$1([y({ readOnly: true })], k.prototype, "availability", null), e$1([y()], k.prototype, "_getGroundElevation", null), k = e$1([n$1("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")], k);
export { k as FeatureServiceSnappingSource };
