import { E as a, U as m, r, aX as f, bw as h, oj as y, L as l, hM as L, ol as E, ou as a$1, ot as h$1, x as t, aV as j, kU as _n, v, ov as B, ae as An, f5 as rn, g0 as nt, fN as s, n$ as i, c as e, f as y$1, h as n$1, ks as y$2, d2 as v$1 } from "./index.js";
import { p } from "./normalizeUtilsSync.js";
import { u } from "./FeatureStore.js";
import { Y } from "./QueryEngine.js";
import { r as r$3, a as a$2 } from "./queryEngineUtils.js";
import { r as r$1, a as r$2, n } from "./symbologySnappingCandidates.js";
import "vue";
import "./PooledRBush.js";
import "./optimizedFeatureQueryEngineAdapter.js";
import "./centroid.js";
import "./QueryEngineCapabilities.js";
import "./timeSupport.js";
import "./VertexSnappingCandidate.js";
const U = "graphics-collections";
let x = class extends a(m) {
  constructor(e2) {
    super(e2), this.availability = 1, this._sources = { multipoint: null, point: null, polygon: null, polyline: null }, this._loadedWkids = new Set(), this._loadedWkts = new Set(), this._pendingAdds = [], this._extrudedPolygonSymbolsCount = 0;
  }
  get updating() {
    return this.updatingHandles.updating;
  }
  get _hasZ() {
    const e2 = this.view;
    return r(e2) && e2.type === "3d" && this.layerSource.layer.type !== "map-notes";
  }
  get _snappingElevationAligner() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, o = r(e2) && e2.type === "3d";
    if (!o || t2.type === "map-notes")
      return r$1();
    const r$22 = async (o2, r2) => (await y$2(e2.whenLayerView(t2), r2)).elevationAlignPointsInFeatures(o2, r2);
    return r$1(o, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: r$22, spatialReference: e2.spatialReference });
  }
  get _snappingElevationFilter() {
    const { view: e2 } = this, t2 = r(e2) && e2.type === "3d" && this.layerSource.layer.type !== "map-notes";
    return r$2(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, o = r(e2) && e2.type === "3d", r$12 = this._extrudedPolygonSymbolsCount > 0;
    return o && t2.type !== "map-notes" && r$12 ? n(r$12, async (o2, r2) => {
      const s2 = await e2.whenLayerView(t2);
      return f(r2), s2.queryForSymbologySnapping({ candidates: o2, spatialReference: e2.spatialReference }, r2);
    }) : n();
  }
  destroy() {
    for (const e2 of this._pendingAdds)
      e2.task.abort();
    this._pendingAdds.length = 0, this._mapSources((e2) => this._destroySource(e2));
  }
  initialize() {
    this.updatingHandles.add(() => this.getGraphicsLayers(), (e3) => {
      this.updatingHandles.removeHandles(U);
      for (const t3 of e3)
        this._addMany(t3.graphics.toArray()), this.handles.add([t3.on("graphic-update", (e4) => this._onGraphicUpdate(e4)), this.updatingHandles.addOnCollectionChange(() => t3.graphics, (e4) => this._onGraphicsChanged(e4))], U);
    }, h);
    const { view: e2 } = this, { layer: t2 } = this.layerSource;
    r(e2) && e2.type === "3d" && t2.type !== "map-notes" && this.addHandles([e2.elevationProvider.on("elevation-change", ({ context: e3 }) => {
      y(e3, t2.elevationInfo) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), l(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), h)]);
  }
  async fetchCandidates(e2, t2) {
    const { point: o, coordinateHelper: r2, elevationInfo: s2 } = e2, i2 = await L(this._mapSources((o2) => this._fetchCandidatesForSource(o2, e2, t2)));
    f(t2);
    const n2 = r2.hasZ() ? E : s2, l2 = this._getGroundElevation, c = i2.flat().map((e3) => r$3(e3, r2, n2, l2));
    return a$1(o, c, r2), c;
  }
  get _getGroundElevation() {
    return a$2(this.view);
  }
  async _fetchCandidatesForSource(e2, t2, o) {
    const r2 = h$1(t2), s2 = await e2.queryEngine.executeQueryForSnapping(r2, o);
    f(o);
    const i2 = await this._snappingElevationAligner.alignCandidates(s2.candidates, o);
    f(o);
    const n2 = await this._symbologySnappingFetcher.fetch(i2, o);
    f(o);
    const a2 = n2.length === 0 ? i2 : [...i2, ...n2];
    return this._snappingElevationFilter.filter(r2, a2);
  }
  refresh() {
  }
  _onGraphicUpdate(e2) {
    if (this.getGraphicsLayers().some((t2) => t2.graphics.includes(e2.graphic)))
      switch (e2.property) {
        case "geometry":
        case "visible":
          this._remove(e2.graphic), this._addMany([e2.graphic]);
      }
  }
  _onGraphicsChanged(e2) {
    for (const t2 of e2.removed)
      this._remove(t2);
    this._addMany(e2.added);
  }
  _addMany(e2) {
    const t$1 = [], o = new Map();
    for (const r2 of e2)
      t(r2.geometry) || (this._needsInitializeProjection(r2.geometry.spatialReference) ? (t$1.push(r2.geometry.spatialReference), o.set(r2.uid, r2)) : this._add(r2));
    this._createPendingAdd(t$1, o);
  }
  _createPendingAdd(e2, t2) {
    if (!e2.length)
      return;
    const s2 = j(async (o) => {
      await _n(e2.map((e3) => ({ source: e3, dest: this.spatialReference })), { signal: o }), this._markLoadedSpatialReferences(e2);
      for (const [, e3] of t2)
        this._add(e3);
    });
    this.updatingHandles.addPromise(s2.promise);
    const i2 = { task: s2, graphics: t2 }, n2 = () => v$1(this._pendingAdds, i2);
    s2.promise.then(n2, n2), this._pendingAdds.push(i2);
  }
  _markLoadedSpatialReferences(e2) {
    for (const t2 of e2)
      t2.wkid != null && this._loadedWkids.add(t2.wkid), t2.wkt != null && this._loadedWkts.add(t2.wkt);
  }
  _add(e2) {
    if (t(e2.geometry) || !e2.visible)
      return;
    let t$1 = e2.geometry;
    if (t$1.type === "mesh")
      return;
    t$1.type === "extent" && (t$1 = v.fromExtent(t$1));
    const o = this._ensureSource(t$1.type);
    if (t(o))
      return;
    const r2 = this._createOptimizedFeature(e2.uid, t$1);
    t(r2) || (o.featureStore.add(r2), B(e2.symbol) && this._extrudedPolygonSymbolsCount++);
  }
  _needsInitializeProjection(e2) {
    return (e2.wkid == null || !this._loadedWkids.has(e2.wkid)) && ((e2.wkt == null || !this._loadedWkts.has(e2.wkt)) && !An(e2, this.spatialReference));
  }
  _createOptimizedFeature(e2, t2) {
    const o = rn(p(t2), this.spatialReference);
    if (!o)
      return null;
    const r2 = this._ensureGeometryHasZ(o), s$1 = nt(r2, this._hasZ, false);
    return new s(s$1, { [H]: e2 }, null, e2);
  }
  _ensureGeometryHasZ(e2) {
    var _a;
    if (!this._hasZ)
      return e2;
    const t2 = (e3) => {
      for (; e3.length < 3; )
        e3.push(0);
    }, o = e2.clone();
    switch (o.hasZ = true, o.type) {
      case "point":
        o.z = (_a = o.z) != null ? _a : 0;
        break;
      case "multipoint":
        o.points.forEach(t2);
        break;
      case "polyline":
        o.paths.forEach((e3) => e3.forEach(t2));
        break;
      case "polygon":
        o.rings.forEach((e3) => e3.forEach(t2));
    }
    return o;
  }
  _ensureSource(e2) {
    const t2 = this._sources[e2];
    if (r(t2))
      return t2;
    const o = this._createSource(e2);
    return this._sources[e2] = o, o;
  }
  _createSource(e2) {
    const t2 = i.toJSON(e2), o = this._hasZ, r$12 = new u({ geometryType: t2, hasZ: o, hasM: false });
    return { featureStore: r$12, queryEngine: new Y({ featureStore: r$12, fields: [{ name: H, type: "esriFieldTypeOID", alias: H }], geometryType: t2, hasM: false, hasZ: o, objectIdField: H, spatialReference: this.spatialReference, scheduler: r(this.view) && this.view.type === "3d" ? this.view.resourceController.scheduler : null }), type: e2 };
  }
  _remove(e2) {
    this._mapSources((t2) => this._removeFromSource(t2, e2));
    for (const t2 of this._pendingAdds)
      t2.graphics.delete(e2.uid), t2.graphics.size === 0 && t2.task.abort();
  }
  _removeFromSource(e2, t2) {
    const o = t2.uid;
    e2.featureStore.has(o) && (e2.featureStore.removeById(t2.uid), B(t2.symbol) && this._extrudedPolygonSymbolsCount--);
  }
  _destroySource(e2) {
    e2.queryEngine.destroy(), this._sources[e2.type] = null;
  }
  _mapSources(e2) {
    const { point: t2, polygon: o, polyline: r$12, multipoint: s2 } = this._sources, n2 = [];
    return r(t2) && n2.push(e2(t2)), r(o) && n2.push(e2(o)), r(r$12) && n2.push(e2(r$12)), r(s2) && n2.push(e2(s2)), n2;
  }
};
e([y$1()], x.prototype, "getGraphicsLayers", void 0), e([y$1({ constructOnly: true })], x.prototype, "layerSource", void 0), e([y$1({ constructOnly: true })], x.prototype, "spatialReference", void 0), e([y$1({ constructOnly: true })], x.prototype, "view", void 0), e([y$1({ readOnly: true })], x.prototype, "updating", null), e([y$1({ readOnly: true })], x.prototype, "availability", void 0), e([y$1()], x.prototype, "_hasZ", null), e([y$1()], x.prototype, "_snappingElevationAligner", null), e([y$1()], x.prototype, "_snappingElevationFilter", null), e([y$1()], x.prototype, "_symbologySnappingFetcher", null), e([y$1()], x.prototype, "_extrudedPolygonSymbolsCount", void 0), e([y$1()], x.prototype, "_getGroundElevation", null), x = e([n$1("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")], x);
const H = "OBJECTID";
export { x as GraphicsSnappingSource };
