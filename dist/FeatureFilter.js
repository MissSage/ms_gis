import { s as s$1, g as s$2, ap as u, cO as x, aF as c, t as t$1 } from "./index.js";
import { v, n } from "./timeSupport.js";
import { J } from "./utils4.js";
import { u as u$1 } from "./FeatureStore2D.js";
import "vue";
import "./projectionSupport.js";
import "./json.js";
import "./CircularArray.js";
import "./ComputedAttributeStorage.js";
import "./centroid.js";
import "./enums2.js";
import "./visualVariablesUtils.js";
import "./Utils2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./visualVariablesUtils2.js";
const t = s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"), a = { getAttribute: (e, r) => e.field(r) };
async function s(r, s2) {
  const n2 = await import("./WhereClause.js");
  try {
    const o = n2.WhereClause.create(r, s2);
    if (!o.isStandardized) {
      const r2 = new s$2("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", o);
      t.error(r2);
    }
    return (e) => {
      const r2 = e.readArcadeFeature();
      return o.testFeature(r2, a);
    };
  } catch (o) {
    return t.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r), (e) => true;
  }
}
const m = 1, _ = 2;
class p {
  constructor(t2) {
    this._geometryBounds = u(), this._idToVisibility = new Map(), this._serviceInfo = t2;
  }
  get hash() {
    return this._hash;
  }
  check(t2) {
    return this._applyFilter(t2);
  }
  clear() {
    const t2 = this._resetAllHiddenIds();
    return this.update(), { show: t2, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((t2, e) => {
      this._idToVisibility.set(e, 0);
    });
  }
  setKnownIds(t2) {
    for (const e of t2)
      this._idToVisibility.set(e, m);
  }
  setTrue(t2) {
    const e = [], i = [], s2 = new Set(t2);
    return this._idToVisibility.forEach((t3, r) => {
      const o = !!(this._idToVisibility.get(r) & m), h = s2.has(r);
      !o && h ? e.push(r) : o && !h && i.push(r), this._idToVisibility.set(r, h ? m | _ : 0);
    }), { show: e, hide: i };
  }
  createQuery() {
    const { geometry: t2, spatialRel: e, where: i, timeExtent: s2, objectIds: r } = this;
    return x.fromJSON({ geometry: t2, spatialRel: e, where: i, timeExtent: s2, objectIds: r });
  }
  async update(t2, e) {
    this._hash = JSON.stringify(t2);
    const i = await J(t2, null, e);
    await Promise.all([this._setGeometryFilter(i), this._setIdFilter(i), this._setAttributeFilter(i), this._setTimeFilter(i)]);
  }
  async _setAttributeFilter(t2) {
    if (!t2 || !t2.where)
      return this._clause = null, void (this.where = null);
    this._clause = await s(t2.where, this._serviceInfo.fieldsIndex), this.where = t2.where;
  }
  _setIdFilter(t2) {
    this._idsToShow = t2 && t2.objectIds && new Set(t2.objectIds), this._idsToHide = t2 && t2.hiddenIds && new Set(t2.hiddenIds), this.objectIds = t2 && t2.objectIds;
  }
  async _setGeometryFilter(t2) {
    if (!t2 || !t2.geometry)
      return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const e = t2.geometry, i = t2.spatialRel || "esriSpatialRelIntersects", s2 = await v(i, e, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    c(this._geometryBounds, e), this._spatialQueryOperator = s2, this.geometry = e, this.spatialRel = i;
  }
  _setTimeFilter(i) {
    if (this.timeExtent = this._timeOperator = null, i && i.timeExtent)
      if (this._serviceInfo.timeInfo)
        this.timeExtent = i.timeExtent, this._timeOperator = n(this._serviceInfo.timeInfo, i.timeExtent, u$1);
      else {
        const s2 = new s$2("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", i.timeExtent);
        s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s2);
      }
  }
  _applyFilter(t2) {
    return this._filterByGeometry(t2) && this._filterById(t2) && this._filterByTime(t2) && this._filterByExpression(t2);
  }
  _filterByExpression(t2) {
    return !this.where || this._clause(t2);
  }
  _filterById(t2) {
    return (!this._idsToHide || !this._idsToHide.size || !this._idsToHide.has(t2.getObjectId())) && (!this._idsToShow || !this._idsToShow.size || this._idsToShow.has(t2.getObjectId()));
  }
  _filterByGeometry(t2) {
    if (!this.geometry)
      return true;
    const e = t2.readHydratedGeometry();
    return !!e && this._spatialQueryOperator(e);
  }
  _filterByTime(t2) {
    return !!t$1(this._timeOperator) || this._timeOperator(t2);
  }
  _resetAllHiddenIds() {
    const t2 = [];
    return this._idToVisibility.forEach((e, i) => {
      e & m || (this._idToVisibility.set(i, m), t2.push(i));
    }), t2;
  }
}
export { p as default };
