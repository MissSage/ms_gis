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
import { s as s$1 } from "./CircularArray.js";
import { t, s, bW as m, dY as a$1, h as has, a as r$1, bp as o$1, N as n, aB as i, k as e, el as G } from "./index.js";
import { b } from "./ComputedAttributeStorage.js";
function a(a2, t$1, o2) {
  if (t(a2))
    return null;
  const u2 = t$1.readArcadeFeature();
  try {
    return a2.evaluate(__spreadProps(__spreadValues({}, o2), { $feature: u2 }));
  } catch (n2) {
    return s.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", n2), null;
  }
}
const o = import("./labelFormatUtils.js");
class c$1 {
  constructor(e2, s2) {
    this._canCacheExpressionValue = false, this._sourceInfo = e2, this._storage = s2, this._bitsets = { computed: s2.getBitset(s2.createBitset()) };
  }
  get storage() {
    return this._storage;
  }
  invalidate() {
    this._bitsets.computed.clear();
  }
  async updateSchema(r2, a2) {
    const o2 = m(this._schema, a2);
    if (this._schema = a2, !a2 || t(o2) || !a$1(o2, "attributes"))
      return;
    has("esri-2d-update-debug") && console.debug("Applying Update - Store:", o2), this._bitsets.computed.clear(), r2.targets[a2.name] = true;
    const c2 = a2.attributes, n2 = [], p = [];
    for (const e2 in c2) {
      const s2 = c2[e2];
      switch (s2.type) {
        case "field":
          break;
        case "expression":
          n2.push(this._createArcadeComputedField(s2));
          break;
        case "label-expression":
          n2.push(this._createLabelArcadeComputedField(s2));
          break;
        case "statistic":
          p.push(s2);
      }
    }
    this._computedFields = await Promise.all(n2), this._canCacheExpressionValue = !this._computedFields.some((e2) => e2.type === "expression" && r$1(e2.expression) && e2.expression.referencesScale()), this._statisticFields = p;
  }
  setComputedAttributes(e2, s2, t2, i2) {
    const r2 = this._bitsets.computed;
    if (!this._canCacheExpressionValue || !r2.has(t2)) {
      r2.set(t2);
      for (const r3 of this._computedFields) {
        const a2 = this._evaluateField(s2, r3, i2);
        switch (r3.resultType) {
          case "numeric":
            e2.setComputedNumericAtIndex(t2, r3.fieldIndex, a2);
            break;
          case "string":
            e2.setComputedStringAtIndex(t2, r3.fieldIndex, a2);
        }
      }
    }
  }
  async _createArcadeComputedField(e2) {
    const s2 = this._sourceInfo.spatialReference, t2 = this._sourceInfo.fieldsIndex;
    return __spreadProps(__spreadValues({}, e2), { expression: await o$1(e2.valueExpression, s2, t2) });
  }
  async _createLabelArcadeComputedField(e2) {
    const s2 = this._sourceInfo.spatialReference, t2 = this._sourceInfo.fieldsIndex, { createLabelFunction: i2 } = await o, r2 = await i2(e2.label, t2, s2);
    return __spreadProps(__spreadValues({}, e2), { builder: r2 });
  }
  _evaluateField(e2, s2, t2) {
    switch (s2.type) {
      case "label-expression": {
        const t3 = e2.readArcadeFeature();
        return s2.builder.evaluate(t3) || "";
      }
      case "expression": {
        const { expression: i2 } = s2;
        return a(i2, e2, { $view: { scale: t2 } });
      }
    }
  }
}
class r extends b {
  constructor(r2, t2) {
    super(b.createInstance(), r2.fullSchema()), this._currentIndex = -1, this._reader = r2, this._indices = t2;
  }
  static from(e2, t2) {
    return new r(e2.copy(), t2);
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e2 = new r(this._reader.copy(), this._indices);
    return e2._currentIndex = this._currentIndex, e2;
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); )
      ;
    return this._currentIndex < this._indices.length;
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), true);
  }
  setArcadeSpatialReference(e2) {
    this._reader.setArcadeSpatialReference(e2);
  }
  attachStorage(e2) {
    this._reader.attachStorage(e2);
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  getStorage() {
    return this._reader.getStorage();
  }
  getComputedNumeric(e2) {
    return this._reader.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(e2, r2) {
    return this._reader.setComputedNumericAtIndex(r2, 0);
  }
  getComputedString(e2) {
    return this._reader.getComputedStringAtIndex(0);
  }
  setComputedString(e2, r2) {
    return this._reader.setComputedStringAtIndex(0, r2);
  }
  getComputedNumericAtIndex(e2) {
    return this._reader.getComputedNumericAtIndex(e2);
  }
  setComputedNumericAtIndex(e2, r2) {
    this._reader.setComputedNumericAtIndex(e2, r2);
  }
  getComputedStringAtIndex(e2) {
    return this._reader.getComputedStringAtIndex(e2);
  }
  setComputedStringAtIndex(e2, r2) {
    return this._reader.setComputedStringAtIndex(e2, r2);
  }
  transform(e2, r2, t2, d) {
    const a2 = this.copy();
    return a2._reader = this._reader.transform(e2, r2, t2, d), a2;
  }
  readAttribute(e2, r2 = false) {
    return this._reader.readAttribute(e2, r2);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e2) {
    return this._reader.joinAttributes(e2);
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e2) {
    return this.readAttribute(e2, true);
  }
  hasField(e2) {
    return this._reader.hasField(e2);
  }
  setField(e2, r2) {
    return this._reader.setField(e2, r2);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e2 = false) {
    return this._reader.castToText(e2);
  }
  getQuantizationTransform() {
    return this._reader.getQuantizationTransform();
  }
  getFieldNames() {
    return this._reader.getFieldNames();
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e2) {
    return this._reader.setDisplayId(e2);
  }
  getGroupId() {
    return this._reader.getGroupId();
  }
  setGroupId(e2) {
    return this._reader.setGroupId(e2);
  }
  getXHydrated() {
    return this._reader.getXHydrated();
  }
  getYHydrated() {
    return this._reader.getYHydrated();
  }
  getX() {
    return this._reader.getX();
  }
  getY() {
    return this._reader.getY();
  }
  setIndex(e2) {
    return this._reader.setIndex(e2);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readLegacyFeature() {
    return this._reader.readLegacyFeature();
  }
  readOptimizedFeature() {
    return this._reader.readOptimizedFeature();
  }
  readLegacyPointGeometry() {
    return this._reader.readLegacyPointGeometry();
  }
  readLegacyGeometry() {
    return this._reader.readLegacyGeometry();
  }
  readLegacyCentroid() {
    return this._reader.readLegacyCentroid();
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readUnquantizedGeometry() {
    return this._reader.readUnquantizedGeometry();
  }
  readHydratedGeometry() {
    return this._reader.readHydratedGeometry();
  }
  readGeometry() {
    return this._reader.readGeometry();
  }
  readCentroid() {
    return this._reader.readCentroid();
  }
  _readAttribute(e2, r2) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
}
function h(t2, e2) {
  return t2 << 16 | e2;
}
function c(t2) {
  return (4294901760 & t2) >>> 16;
}
function I(t2) {
  return 65535 & t2;
}
const u = { getObjectId: (t2) => t2.getObjectId(), getAttributes: (t2) => t2.readAttributes(), getAttribute: (t2, e2) => t2.readAttribute(e2), cloneWithGeometry: (t2, e2) => t2, getGeometry: (t2) => t2.readHydratedGeometry(), getCentroid: (t2, e2) => t2.readCentroid() };
class l extends c$1 {
  constructor(s2, a2, r2) {
    super(s2, a2), this.featureAdapter = u, this.events = new n(), this._featureSetsByInstance = new Map(), this._objectIdToDisplayId = new Map(), this._spatialIndexInvalid = true, this._indexSearchCache = new s$1(50), this._index = i(9, (t2) => ({ minX: this._storage.getXMin(t2), minY: this._storage.getYMin(t2), maxX: this._storage.getXMax(t2), maxY: this._storage.getYMax(t2) })), this.mode = r2;
  }
  get storeStatistics() {
    let t2 = 0, e2 = 0, s2 = 0;
    return this.forEach((a2) => {
      const r2 = a2.readGeometry();
      r2 && (e2 += r2.isPoint ? 1 : r2.lengths.reduce((t3, e3) => t3 + e3, 0), s2 += r2.isPoint ? 1 : r2.lengths.length, t2 += 1);
    }), { featureCount: t2, vertexCount: e2, ringCount: s2 };
  }
  hasInstance(t2) {
    return this._featureSetsByInstance.has(t2);
  }
  onTileData(t$1, e2) {
    if (t(e2.addOrUpdate))
      return e2;
    if (e2.addOrUpdate.attachStorage(this._storage), this.mode === "snapshot") {
      const s2 = e2.addOrUpdate.getCursor();
      for (; s2.next(); ) {
        const e3 = s2.getDisplayId();
        this.setComputedAttributes(this._storage, s2, e3, t$1.scale);
      }
      return e2;
    }
    this._featureSetsByInstance.set(e2.addOrUpdate.instance, e2.addOrUpdate);
    const a2 = e2.addOrUpdate.getCursor();
    for (; a2.next(); )
      this._insertFeature(a2, t$1.scale);
    return this._spatialIndexInvalid = true, this.events.emit("changed"), e2;
  }
  search(t2) {
    this._rebuildIndex();
    const e2 = t2.id, s2 = this._indexSearchCache.find((t3) => t3.tileId === e2);
    if (r$1(s2))
      return s2.readers;
    const r$2 = new Map(), n2 = this._searchIndex(t2.bounds), i2 = [];
    for (const a2 of n2) {
      const t3 = this._storage.getInstanceId(a2), e3 = c(t3), s3 = I(t3);
      r$2.has(e3) || r$2.set(e3, []);
      r$2.get(e3).push(s3);
    }
    return r$2.forEach((t3, e3) => {
      const s3 = this._featureSetsByInstance.get(e3);
      i2.push(r.from(s3, t3));
    }), this._indexSearchCache.enqueue({ tileId: e2, readers: i2 }), i2;
  }
  insert(t2) {
    var _a;
    const e2 = t2.getCursor(), s2 = this._storage;
    for (; e2.next(); ) {
      const t3 = h(e2.instance, e2.getIndex()), a2 = e2.getObjectId(), r2 = (_a = this._objectIdToDisplayId.get(a2)) != null ? _a : this._storage.createDisplayId();
      e2.setDisplayId(r2), s2.setInstanceId(r2, t3), this._objectIdToDisplayId.set(a2, r2);
    }
    this._featureSetsByInstance.set(t2.instance, t2), this._spatialIndexInvalid = true;
  }
  remove(t2) {
    const e2 = this._objectIdToDisplayId.get(t2);
    if (!e2)
      return;
    const s2 = this._storage.getInstanceId(e2), a2 = I(s2), r2 = c(s2), n2 = this._featureSetsByInstance.get(r2);
    this._objectIdToDisplayId.delete(t2), this._storage.releaseDisplayId(e2), n2.removeAtIndex(a2), n2.isEmpty && this._featureSetsByInstance.delete(r2), this._spatialIndexInvalid = true;
  }
  toArray() {
    const t2 = new Array();
    return this.forEach((e2) => t2.push(e2)), t2;
  }
  forEach(t2) {
    this._objectIdToDisplayId.forEach((e2) => {
      const s2 = this._storage.getInstanceId(e2), a2 = this._lookupFeature(s2);
      t2(a2);
    });
  }
  forEachUnsafe(t2) {
    this._objectIdToDisplayId.forEach((e2) => {
      const s2 = this._storage.getInstanceId(e2), a2 = c(s2), r2 = I(s2), n2 = this._getFeatureSet(a2);
      n2.setIndex(r2), t2(n2);
    });
  }
  forEachInBounds(t2, e$1) {
    const s2 = this._searchIndex(t2);
    for (const a2 of s2) {
      const t3 = this.lookupFeatureByDisplayId(a2, this._storage);
      e$1(e(t3));
    }
  }
  forEachBounds(t2, e2, s2) {
    this._rebuildIndex();
    const a2 = [0, 0, 0, 0];
    for (const r2 of t2) {
      if (!r2.readGeometry())
        continue;
      const t3 = r2.getDisplayId();
      a2[0] = this._storage.getXMin(t3), a2[1] = this._storage.getYMin(t3), a2[2] = this._storage.getXMax(t3), a2[3] = this._storage.getYMax(t3), e2(G(s2, a2));
    }
  }
  sweepFeatures(t2, e2, s2) {
    this._spatialIndexInvalid = true, this._objectIdToDisplayId.forEach((a2, r2) => {
      t2.has(a2) || (e2.releaseDisplayId(a2), s2 && s2.unsetAttributeData(a2), this._objectIdToDisplayId.delete(r2));
    }), this.events.emit("changed");
  }
  sweepFeatureSets(t2) {
    this._spatialIndexInvalid = true, this._featureSetsByInstance.forEach((e2, s2) => {
      t2.has(s2) || this._featureSetsByInstance.delete(s2);
    });
  }
  lookupObjectId(t$1, e2) {
    const a2 = this.lookupFeatureByDisplayId(t$1, e2);
    return t(a2) ? null : a2.getObjectId();
  }
  lookupDisplayId(t2) {
    return this._objectIdToDisplayId.get(t2);
  }
  lookupFeatureByDisplayId(t2, e2) {
    const s2 = e2.getInstanceId(t2);
    return this._lookupFeature(s2);
  }
  lookupByDisplayIdUnsafe(t2) {
    const e2 = this._storage.getInstanceId(t2), s2 = c(e2), a2 = I(e2), r2 = this._getFeatureSet(s2);
    return r2 ? (r2.setIndex(a2), r2) : null;
  }
  _insertFeature(t2, e2) {
    const s2 = this._storage, a2 = t2.getObjectId(), r2 = h(t2.instance, t2.getIndex());
    s2.getInstanceId(t2.getDisplayId());
    let n2 = this._objectIdToDisplayId.get(a2);
    n2 || (n2 = s2.createDisplayId(), this._objectIdToDisplayId.set(a2, n2), this._spatialIndexInvalid = true), t2.setDisplayId(n2), s2.setInstanceId(n2, r2), this.setComputedAttributes(s2, t2, n2, e2);
  }
  _searchIndex(t2) {
    this._rebuildIndex();
    const e2 = { minX: t2[0], minY: t2[1], maxX: t2[2], maxY: t2[3] };
    return this._index.search(e2);
  }
  _rebuildIndex() {
    if (!this._spatialIndexInvalid)
      return;
    const t2 = [];
    this.mode === "snapshot" ? this._featureSetsByInstance.forEach((e2) => {
      const s2 = e2.getCursor();
      for (; s2.next(); ) {
        const e3 = s2.getDisplayId();
        this._storage.setBounds(e3, s2) && t2.push(e3);
      }
    }) : this._objectIdToDisplayId.forEach((e2) => {
      const s2 = this._storage.getInstanceId(e2);
      this._storage.setBounds(e2, this._lookupFeature(s2)) && t2.push(e2);
    }), this._index.clear(), this._index.load(t2), this._indexSearchCache.clear(), this._spatialIndexInvalid = false;
  }
  _lookupFeature(t2) {
    const e2 = c(t2), s2 = this._getFeatureSet(e2);
    if (!s2)
      return null;
    const a2 = s2.getCursor(), r2 = I(t2);
    return a2.setIndex(r2), a2;
  }
  _getFeatureSet(t2) {
    return this._featureSetsByInstance.get(t2);
  }
}
export { c$1 as c, l, r, u };
