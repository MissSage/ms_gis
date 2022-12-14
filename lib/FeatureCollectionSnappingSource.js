import { U as m, r, oj as y, L as l, bw as h, os as m$1, ot as h$1, aX as f$1, ol as E, c as e, f as y$1, h as n$1, ks as y$2 } from "./index.js";
import { r as r$3, a } from "./queryEngineUtils.js";
import { r as r$1, a as r$2, n } from "./symbologySnappingCandidates.js";
import "vue";
import "./VertexSnappingCandidate.js";
let f = class extends m {
  constructor(e2) {
    super(e2), this.view = null, this._layerView3D = null;
  }
  get availability() {
    return 1;
  }
  get updating() {
    return this.layerSource.updating;
  }
  get _snappingElevationAligner() {
    const { view: e2 } = this, { layer: t } = this.layerSource, r$22 = r(e2) && e2.type === "3d";
    if (!r$22 || t.type === "subtype-group")
      return r$1();
    const n2 = async (o, r2) => (await y$2(e2.whenLayerView(t), r2)).elevationAlignPointsInFeatures(o, r2);
    return r$1(r$22, { elevationInfo: t.elevationInfo, alignPointsInFeatures: n2, spatialReference: e2.spatialReference });
  }
  get _snappingElevationFilter() {
    const { view: e2 } = this, t = r(e2) && e2.type === "3d" && this.layerSource.layer.type !== "subtype-group";
    return r$2(t);
  }
  get _symbologySnappingFetcher() {
    const { view: e2 } = this, { layer: t } = this.layerSource;
    return r(e2) && e2.type === "3d" && t.type !== "subtype-group" ? n(this._symbologySnappingSupported, async (o, i) => {
      const n2 = await e2.whenLayerView(t);
      return f$1(i), n2.queryForSymbologySnapping({ candidates: o, spatialReference: e2.spatialReference }, i);
    }) : n();
  }
  get _symbologySnappingSupported() {
    return r(this._layerView3D) && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e2 } = this, { layer: t } = this.layerSource;
    r(e2) && e2.type === "3d" && t.type !== "subtype-group" && (e2.whenLayerView(t).then((e3) => this._layerView3D = e3), this.addHandles([e2.elevationProvider.on("elevation-change", ({ context: e3 }) => {
      const { elevationInfo: o } = t;
      y(e3, o) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), l(() => t.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), h), l(() => {
      var _a;
      return r(this._layerView3D) ? (_a = this._layerView3D.processor) == null ? void 0 : _a.renderer : null;
    }, () => this._symbologySnappingFetcher.notifySymbologyChange(), h)]));
  }
  refresh() {
  }
  async fetchCandidates(e2, t) {
    const { layer: o } = this.layerSource, { coordinateHelper: i, elevationInfo: n2 } = e2, a2 = o.source;
    if (!a2.querySnapping)
      return [];
    const s = m$1(o), p = h$1(e2, s), l2 = await a2.querySnapping(p, { signal: t });
    f$1(t);
    const h2 = await this._snappingElevationAligner.alignCandidates(l2.candidates, t);
    f$1(t);
    const m2 = await this._symbologySnappingFetcher.fetch(h2, t);
    f$1(t);
    const d = m2.length === 0 ? h2 : [...h2, ...m2], v = this._snappingElevationFilter.filter(p, d), f2 = i.hasZ() ? E : n2, S = this._getGroundElevation;
    return v.map((e3) => r$3(e3, i, f2, S));
  }
  get _getGroundElevation() {
    return a(this.view);
  }
};
e([y$1({ constructOnly: true })], f.prototype, "layerSource", void 0), e([y$1({ constructOnly: true })], f.prototype, "view", void 0), e([y$1()], f.prototype, "_snappingElevationAligner", null), e([y$1()], f.prototype, "_snappingElevationFilter", null), e([y$1()], f.prototype, "_symbologySnappingFetcher", null), e([y$1()], f.prototype, "_layerView3D", void 0), e([y$1()], f.prototype, "_symbologySnappingSupported", null), e([y$1()], f.prototype, "_getGroundElevation", null), f = e([n$1("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export { f as FeatureCollectionSnappingSource };
