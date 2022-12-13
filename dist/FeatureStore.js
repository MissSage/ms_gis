import { h as has, ek as D, eh as s, t as t$1, aA as t$2, N as n$1, a as r, el as G, s as s$1, g as s$2, em as gt, ap as u$1 } from "./index.js";
import { h } from "./PooledRBush.js";
import { e as e$1 } from "./centroid.js";
const d = 5e4, n = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
function t(i2) {
  n.minX = i2[0], n.minY = i2[1], n.maxX = i2[2], n.maxY = i2[3];
}
function e(i2, s2, d2) {
  t(s2), i2.search(n, d2);
}
class o {
  constructor() {
    this._indexInvalid = false, this._boundsToLoad = [], this._boundsById = new Map(), this._idByBounds = new Map(), this._index = new h(9, has("esri-csp-restrictions") ? (i2) => ({ minX: i2[0], minY: i2[1], maxX: i2[2], maxY: i2[3] }) : ["[0]", "[1]", "[2]", "[3]"]), this._loadIndex = () => {
      if (this._indexInvalid) {
        const i2 = new Array(this._idByBounds.size);
        let s2 = 0;
        this._idByBounds.forEach((d2, n2) => {
          i2[s2++] = n2;
        }), this._indexInvalid = false, this._index.clear(), this._index.load(i2);
      } else
        this._boundsToLoad.length && (this._index.load(this._boundsToLoad.filter((i2) => this._idByBounds.has(i2))), this._boundsToLoad.length = 0);
    };
  }
  get fullBounds() {
    if (!this._boundsById.size)
      return null;
    const i2 = D();
    for (const s2 of this._boundsById.values())
      s2 && (i2[0] = Math.min(s2[0], i2[0]), i2[1] = Math.min(s2[1], i2[1]), i2[2] = Math.max(s2[2], i2[2]), i2[3] = Math.max(s2[3], i2[3]));
    return i2;
  }
  get valid() {
    return !this._indexInvalid;
  }
  clear() {
    this._indexInvalid = false, this._boundsToLoad.length = 0, this._boundsById.clear(), this._idByBounds.clear(), this._index.clear();
  }
  delete(i2) {
    const s2 = this._boundsById.get(i2);
    this._boundsById.delete(i2), s2 && (this._idByBounds.delete(s2), this._indexInvalid || this._index.remove(s2));
  }
  forEachInBounds(i2, s2) {
    this._loadIndex(), e(this._index, i2, (i3) => s2(this._idByBounds.get(i3)));
  }
  get(i2) {
    return this._boundsById.get(i2);
  }
  has(i2) {
    return this._boundsById.has(i2);
  }
  invalidateIndex() {
    this._indexInvalid || (this._indexInvalid = true, this._boundsToLoad.length = 0);
  }
  set(i2, s2) {
    if (!this._indexInvalid) {
      const s3 = this._boundsById.get(i2);
      s3 && (this._index.remove(s3), this._idByBounds.delete(s3));
    }
    this._boundsById.set(i2, s2), s2 && (this._idByBounds.set(s2, i2), this._indexInvalid || (this._boundsToLoad.push(s2), this._boundsToLoad.length > d && this._loadIndex()));
  }
}
const i = { getObjectId: (t2) => t2.objectId, getAttributes: (t2) => t2.attributes, getAttribute: (t2, e2) => t2.attributes[e2], cloneWithGeometry: (t2, e2) => new s(e2, t2.attributes, null, t2.objectId), getGeometry: (t2) => t2.geometry, getCentroid: (r2, i2) => (t$1(r2.centroid) && (r2.centroid = e$1(new t$2(), r2.geometry, i2.hasZ, i2.hasM)), r2.centroid) };
class u {
  constructor(e2) {
    this.geometryInfo = e2, this._boundsStore = new o(), this._featuresById = new Map(), this._markedIds = new Set(), this.events = new n$1(), this.featureAdapter = i;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    return this._boundsStore.fullBounds;
  }
  get storeStatistics() {
    let e2 = 0;
    return this._featuresById.forEach((t2) => {
      r(t2.geometry) && t2.geometry.coords && (e2 += t2.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e2 / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  add(e2) {
    this._add(e2), this._emitChanged();
  }
  addMany(e2) {
    for (const t2 of e2)
      this._add(t2);
    this._emitChanged();
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged();
  }
  removeById(e2) {
    const t2 = this._featuresById.get(e2);
    return t2 ? (this._remove(t2), this._emitChanged(), t2) : null;
  }
  removeManyById(e2) {
    this._boundsStore.invalidateIndex();
    for (const t2 of e2) {
      const e3 = this._featuresById.get(t2);
      e3 && this._remove(e3);
    }
    this._emitChanged();
  }
  forEachBounds(e2, t2, r2) {
    for (const s2 of e2) {
      const e3 = this._boundsStore.get(s2.objectId);
      e3 && t2(G(r2, e3));
    }
  }
  getFeature(e2) {
    return this._featuresById.get(e2);
  }
  has(e2) {
    return this._featuresById.has(e2);
  }
  toArray() {
    return Array.from(this._featuresById.values());
  }
  forEach(e2) {
    this._featuresById.forEach((t2) => e2(t2));
  }
  forEachInBounds(e2, t2) {
    this._boundsStore.forEachInBounds(e2, (e3) => {
      t2(this._featuresById.get(e3));
    });
  }
  startMarkingUsedFeatures() {
    this._boundsStore.invalidateIndex(), this._markedIds.clear();
  }
  sweep() {
    let e2 = false;
    this._featuresById.forEach((t2, r2) => {
      this._markedIds.has(r2) || (e2 = true, this._remove(t2));
    }), this._markedIds.clear(), e2 && this._emitChanged();
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(t2) {
    if (!t2)
      return;
    const i2 = t2.objectId;
    if (i2 == null)
      return void s$1.getLogger("esri.layers.graphics.data.FeatureStore").error(new s$2("featurestore:invalid-feature", "feature id is missing", { feature: t2 }));
    const n2 = this._featuresById.get(i2);
    let h2;
    if (this._markedIds.add(i2), n2 ? (t2.displayId = n2.displayId, h2 = this._boundsStore.get(i2), this._boundsStore.delete(i2)) : r(this.onFeatureAdd) && this.onFeatureAdd(t2), t$1(t2.geometry) || !t2.geometry.coords || !t2.geometry.coords.length)
      return this._boundsStore.set(i2, null), void this._featuresById.set(i2, t2);
    h2 = gt(r(h2) ? h2 : u$1(), t2.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), r(h2) && this._boundsStore.set(i2, h2), this._featuresById.set(i2, t2);
  }
  _remove(e2) {
    return r(this.onFeatureRemove) && this.onFeatureRemove(e2), this._markedIds.delete(e2.objectId), this._boundsStore.delete(e2.objectId), this._featuresById.delete(e2.objectId), e2;
  }
}
export { o, u };
