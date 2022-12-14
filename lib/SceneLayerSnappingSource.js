import { fr as s, c as e, f as y, h as n$1, cY as d, t as n$2, ow as E, ol as E$1, op as e$1, c_ as h$2, fR as p$1, x as t, bE as t$1, M as o$1, gt as p$2, U as m, aX as f$1, r } from "./index.js";
import { h as h$1 } from "./WorkerHandle.js";
import { D } from "./workerHelper.js";
import { f } from "./edgeProcessing.js";
import { o } from "./VertexSnappingCandidate.js";
import "vue";
import "./BufferView.js";
import "./InterleavedLayout.js";
import "./types.js";
import "./deduplicate.js";
import "./VertexAttribute.js";
import "./glUtil.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
class n extends h$1 {
  constructor(e2) {
    super("EdgeProcessingWorker", "extract", { extract: (e3) => [e3.dataBuffer], extractComponentsEdgeLocations: (e3) => [e3.dataBuffer], extractEdgeLocations: (e3) => [e3.dataBuffer] }, e2);
  }
  async process(e2, t2, r2) {
    if (r2)
      return f(e2);
    const n2 = await this.invoke(new a(e2), t2);
    return this._unpackOutput(n2);
  }
  async extractEdgeLocations(e2, t2) {
    const s2 = await this.invokeMethod("extractEdgeLocations", new a(e2), t2);
    return D(s2);
  }
  async extractComponentsEdgeLocations(e2, t2) {
    const s2 = await this.invokeMethod("extractComponentsEdgeLocations", new a(e2), t2);
    return D(s2);
  }
  _unpackOutput(e2) {
    return { regular: { instancesData: D(e2.regular.instancesData), lodInfo: { lengths: new Float32Array(e2.regular.lodInfo.lengths) } }, silhouette: { instancesData: D(e2.silhouette.instancesData), lodInfo: { lengths: new Float32Array(e2.silhouette.lodInfo.lengths) } }, averageEdgeLength: e2.averageEdgeLength };
  }
}
class a {
  constructor(t2) {
    this.dataBuffer = t2.data.buffer, this.writerSettings = t2.writerSettings, this.skipDeduplicate = t2.skipDeduplicate, this.indices = Array.isArray(t2.indices) ? t2.indices : t2.indices.buffer, this.indicesType = Array.isArray(t2.indices) ? "Array" : s(t2.indices) ? "Uint32Array" : "Uint16Array", this.indicesLength = t2.indicesLength;
  }
}
let p = class extends d {
  constructor(e2) {
    super(e2), this.availability = 0, this._ids = new Set(), this._tmpP = n$2();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new l(this.schedule, { fetchAllEdgeLocations: (e2, t2) => this._fetchAllEdgeLocations(e2, t2) });
  }
  async fetchCandidates(e2, t2) {
    const r2 = e2.coordinateHelper, o2 = r2.toXYZ(e2.point);
    this.renderCoordsHelper.toRenderCoords(o2, r2.spatialReference, o2);
    const s2 = e2.distance, n2 = typeof s2 == "number" ? s2 : s2.distance, a2 = await this._workerHandle.invoke({ bounds: E(o2[0], o2[1], o2[2], n2), types: e2.types }, t2);
    return a2.candidates.sort((e3, t3) => e3.distance - t3.distance), a2.candidates.map((e3) => this._convertCandidate(r2, e3));
  }
  async add(e2, t2) {
    this._ids.add(e2.id), await this._workerHandle.invokeMethod("add", e2, t2);
  }
  async remove(e2, t2) {
    this._ids.delete(e2.id), await this._workerHandle.invokeMethod("remove", e2, t2);
  }
  _convertCandidate(e2, t2) {
    switch (t2.type) {
      case "edge":
        return new e$1({ coordinateHelper: e2, objectId: t2.objectId, targetPoint: this._convertRenderCoordinate(e2, t2.target), edgeStart: this._convertRenderCoordinate(e2, t2.start), edgeEnd: this._convertRenderCoordinate(e2, t2.end), elevationInfo: E$1 });
      case "vertex":
        return new o({ coordinateHelper: e2, objectId: t2.objectId, targetPoint: this._convertRenderCoordinate(e2, t2.target), elevationInfo: E$1 });
    }
  }
  _convertRenderCoordinate(e2, t2) {
    return this.renderCoordsHelper.fromRenderCoords(t2, this._tmpP, e2.spatialReference), e2.fromXYZ(this._tmpP);
  }
  async _fetchAllEdgeLocations(e2, t2) {
    const r2 = [], o2 = [];
    for (const { id: s2, uid: n2 } of e2.components)
      this._ids.has(s2) && r2.push((async () => {
        const e3 = await this.fetchEdgeLocations(s2, t2.signal);
        return o2.push(e3.locations.buffer), { id: s2, uid: n2, objectIds: e3.objectIds, locations: e3.locations.buffer, origin: e3.origin, type: e3.type };
      })());
    return { result: { components: (await Promise.all(r2)).filter(({ id: e3 }) => this._ids.has(e3)) }, transferList: o2 };
  }
};
e([y({ constructOnly: true })], p.prototype, "renderCoordsHelper", void 0), e([y({ constructOnly: true })], p.prototype, "fetchEdgeLocations", void 0), e([y({ constructOnly: true })], p.prototype, "schedule", void 0), e([y({ readOnly: true })], p.prototype, "availability", void 0), p = e([n$1("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], p);
class l extends h$1 {
  constructor(e2, t2) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
}
let h = class extends d {
  constructor(e2) {
    super(e2), this.availability = 1, this._abortController = new AbortController();
  }
  get updating() {
    return this.updatingHandles.updating;
  }
  destroy() {
    this._tracker = h$2(this._tracker), this._abortController = p$1(this._abortController);
  }
  initialize() {
    const { view: e2 } = this, r2 = e2.resourceController;
    this._edgeWorker = new n((e3) => r2.schedule(e3)), this._workerHandle = new p({ renderCoordsHelper: this.view.renderCoordsHelper, schedule: (e3) => r2.schedule(e3), fetchEdgeLocations: async (e3, r3) => {
      if (t(this._tracker))
        throw new Error("tracker-not-initialized");
      return this._tracker.fetchEdgeLocations(e3, this._edgeWorker, r3);
    } }), this.updatingHandles.addPromise(this._setupLayerView()), this.handles.add([t$1(this._workerHandle), t$1(this._edgeWorker)]);
  }
  async fetchCandidates(e2, r2) {
    return this._workerHandle.fetchCandidates(e2, r2);
  }
  refresh() {
  }
  async _setupLayerView() {
    if (this.destroyed)
      return;
    const e2 = o$1(this._abortController, (e3) => e3.signal), r2 = await this.getLayerView();
    t(r2) || p$2(e2) || (this._tracker = r2.trackSnappingSources({ add: (r3, t2) => {
      this.updatingHandles.addPromise(this._workerHandle.add({ id: r3, bounds: t2 }, e2));
    }, remove: (r3) => {
      this.updatingHandles.addPromise(this._workerHandle.remove({ id: r3 }, e2));
    } }));
  }
};
e([y({ constructOnly: true })], h.prototype, "getLayerView", void 0), e([y({ constructOnly: true })], h.prototype, "view", void 0), e([y({ readOnly: true })], h.prototype, "updating", null), e([y({ readOnly: true })], h.prototype, "availability", void 0), h = e([n$1("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], h);
let c = class extends m {
  constructor(e2) {
    super(e2), this.availability = 1, this._i3sSources = [];
  }
  get updating() {
    return this._i3sSources.some((e2) => e2.updating);
  }
  destroy() {
    this._i3sSources.forEach((e2) => e2.destroy()), this._i3sSources.length = 0;
  }
  initialize() {
    const { view: e2 } = this, r2 = this.layerSource.layer;
    this._i3sSources = r2.type === "building-scene" ? this._getBuildingSceneI3SSources(e2, r2) : [this._getSceneLayerI3SSource(e2, r2)];
  }
  async fetchCandidates(e2, r2) {
    const t2 = await Promise.all(this._i3sSources.map((t3) => t3.fetchCandidates(e2, r2)));
    return f$1(r2), t2.flat();
  }
  refresh() {
    this._i3sSources.forEach((e2) => e2.refresh());
  }
  _getBuildingSceneI3SSources(e2, r$1) {
    return r$1.allSublayers.toArray().map((t2) => t2.type === "building-component" ? new h({ getLayerView: async () => (await e2.whenLayerView(r$1)).whenSublayerView(t2), view: e2 }) : null).filter(r);
  }
  _getSceneLayerI3SSource(e2, r2) {
    return new h({ getLayerView: async () => {
      const t2 = await e2.whenLayerView(r2);
      return t2.type === "scene-layer-graphics-3d" ? void 0 : t2;
    }, view: e2 });
  }
};
e([y({ constructOnly: true })], c.prototype, "layerSource", void 0), e([y({ constructOnly: true })], c.prototype, "view", void 0), e([y({ readOnly: true })], c.prototype, "updating", null), e([y({ readOnly: true })], c.prototype, "availability", void 0), c = e([n$1("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], c);
export { c as SceneLayerSnappingSource };
