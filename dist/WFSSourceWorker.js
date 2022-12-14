import { l as f, bB as E$1, ei as c, a as r, bG as nt, b$ as rt, c9 as r$1, k as e, g as s, am as j, m as j$1, s as s$1 } from "./index.js";
import { u } from "./FeatureStore.js";
import { g, f as f$1 } from "./projectionSupport.js";
import { Y } from "./QueryEngine.js";
import { T, I } from "./geojson.js";
import { m } from "./sourceUtils.js";
import { K } from "./wfsUtils.js";
import "vue";
import "./PooledRBush.js";
import "./centroid.js";
import "./json.js";
import "./QueryEngineResult.js";
import "./quantizationUtils.js";
import "./WhereClause.js";
import "./utils3.js";
import "./generateRendererUtils.js";
import "./utils4.js";
import "./QueryEngineCapabilities.js";
import "./timeSupport.js";
import "./xmlUtils.js";
class E {
  constructor() {
    this._queryEngine = null, this._customParameters = null, this._snapshotFeatures = async (e2) => {
      var _a;
      const { objectIdField: t } = this._queryEngine, r$12 = await K((_a = this._getFeatureUrl) != null ? _a : "", this._featureType.typeName, this._getFeatureOutputFormat, { customParameters: this._customParameters, dateFields: this._queryEngine.fieldsIndex.dateFields.map((e3) => e3.name), signal: e2 });
      await T(r$12), f(e2);
      const a = I(r$12, { geometryType: this._queryEngine.geometryType, hasZ: false, objectIdField: t });
      if (!E$1(this._queryEngine.spatialReference, c))
        for (const i of a)
          r(i.geometry) && (i.geometry = nt(g(rt(i.geometry, this._queryEngine.geometryType, false, false), c, this._queryEngine.spatialReference)));
      let o = 1;
      for (const s2 of a) {
        const e3 = {};
        m(this._fieldsIndex, e3, s2.attributes, true), s2.attributes = e3, s2.attributes[t] == null && (s2.objectId = s2.attributes[t] = o++);
      }
      return a;
    };
  }
  destroy() {
    var _a;
    (_a = this._queryEngine) == null ? void 0 : _a.destroy(), this._queryEngine = null;
  }
  async load(e$1, t) {
    const { getFeatureUrl: r2, getFeatureOutputFormat: s2, spatialReference: o, fields: n, geometryType: u$1, featureType: p, objectIdField: h, customParameters: c2 } = e$1;
    this._featureType = p, this._customParameters = c2, this._getFeatureUrl = r2, this._getFeatureOutputFormat = s2, this._fieldsIndex = new r$1(n), await this._checkProjection(o), f(t), this._queryEngine = new Y({ fields: n, geometryType: u$1, hasM: false, hasZ: false, objectIdField: h, spatialReference: o, timeInfo: null, featureStore: new u({ geometryType: u$1, hasM: false, hasZ: false }) });
    const m2 = await this._snapshotFeatures(e(t.signal));
    return this._queryEngine.featureStore.addMany(m2), { extent: this._queryEngine.fullExtent };
  }
  async applyEdits() {
    throw new s("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
  }
  async queryFeatures(e2 = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e2, t.signal);
  }
  async queryFeatureCount(e2 = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e2, t.signal);
  }
  async queryObjectIds(e2 = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e2, t.signal);
  }
  async queryExtent(e2 = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e2, t.signal);
  }
  async querySnapping(e2, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e2, t.signal);
  }
  async refresh(s$2) {
    var _a;
    return this._customParameters = s$2, (_a = this._snapshotTask) == null ? void 0 : _a.abort(), this._snapshotTask = j(this._snapshotFeatures), this._snapshotTask.promise.then((e2) => {
      this._queryEngine.featureStore.clear(), e2 && this._queryEngine.featureStore.addMany(e2);
    }, (e2) => {
      this._queryEngine.featureStore.clear(), j$1(e2) || s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error", "An error occurred during the GetFeature request", { error: e2 }));
    }), await this._waitSnapshotComplete(), { extent: this._queryEngine.fullExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _checkProjection(e2) {
    try {
      await f$1(c, e2);
    } catch {
      throw new s("unsupported-projection", "Projection not supported", { spatialReference: e2 });
    }
  }
}
export { E as default };
