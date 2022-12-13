var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { m as j, $ as e, a1 as n, bW as m, dY as a, l as f, aK as k, b3 as o, t as t$1, a as r, b1 as f$1, k as e$1 } from "./index.js";
import { n as n$1 } from "./ExpandedCIM.js";
import { p as p$1 } from "./visualVariablesUtils.js";
import { S } from "./Utils2.js";
import { x, l, b as l$1, E, t as t$2 } from "./Matcher.js";
import { p } from "./BaseProcessor.js";
import "vue";
import "./BidiEngine.js";
import "./enums2.js";
import "./MaterialKey.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./visualVariablesUtils2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./tileUtils.js";
import "./TileClipper.js";
import "./Geometry.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./devEnvironmentUtils.js";
class t {
  constructor(e2) {
    this._remoteClient = e2, this._resourceMap = new Map(), this._inFlightResourceMap = new Map(), this.geometryEngine = null;
  }
  destroy() {
  }
  async fetchResource(t2, r2) {
    const s = this._resourceMap, i = s.get(t2);
    if (i)
      return i;
    let n2 = this._inFlightResourceMap.get(t2);
    if (n2)
      return n2;
    try {
      n2 = this._remoteClient.invoke("tileRenderer.fetchResource", { url: t2 }, __spreadValues({}, r2)), this._inFlightResourceMap.set(t2, n2), n2.then((e2) => (this._inFlightResourceMap.delete(t2), s.set(t2, e2), e2));
    } catch (o2) {
      return j(o2) ? null : { width: 0, height: 0 };
    }
    return n2;
  }
  getResource(e2) {
    var _a;
    return (_a = this._resourceMap.get(e2)) != null ? _a : null;
  }
}
function I(e2, t2) {
  return (!e2.minScale || e2.minScale >= t2) && (!e2.maxScale || e2.maxScale <= t2);
}
function M(e2) {
  const t2 = e2.message, r$1 = { message: { data: {}, tileKey: t2.tileKey, tileKeyOrigin: t2.tileKeyOrigin, version: t2.version }, transferList: new Array() };
  for (const a2 in t2.data) {
    const e3 = t2.data[a2];
    if (r$1.message.data[a2] = null, r(e3)) {
      const t3 = e3.stride, i = e3.indices.slice(0), o$1 = e3.vertices.slice(0), n2 = e3.records.slice(0), l2 = { stride: t3, indices: i, vertices: o$1, records: n2, metrics: o(e3.metrics, (e4) => e4.slice(0)) };
      r$1.transferList.push(i, o$1, n2), r$1.message.data[a2] = l2;
    }
  }
  return r$1;
}
let v = class extends p {
  constructor() {
    super(...arguments), this.type = "symbol", this._matchers = { feature: null, aggregate: null }, this._bufferData = new Map(), this._bufferIds = new Map();
  }
  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]), this._resourceManagerProxy = new t(this.remoteClient);
  }
  destroy() {
    this._resourceManagerProxy.destroy();
  }
  get supportsTileUpdates() {
    return true;
  }
  forEachBufferId(e2) {
    this._bufferIds.forEach((t2) => {
      t2.forEach(e2);
    });
  }
  async update(e2, t2) {
    const s = t2.schema.processors[0];
    if (s.type !== "symbol")
      return;
    const r2 = m(this._schema, s);
    (a(r2, "mesh") || a(r2, "target")) && (e2.mesh = true, e2.why.mesh.push("Symbology changed"), this._schema = s, this._factory = this._createFactory(s), this._factory.update(s, this.tileStore.tileScheme.tileInfo));
  }
  onTileMessage(e2, t2, s, r2) {
    return f(r2), this._onTileData(e2, t2, s, r2);
  }
  onTileClear(e2) {
    const t2 = { clear: true };
    return this._bufferData.delete(e2.key.id), this._bufferIds.delete(e2.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t2 });
  }
  onTileError(e2, t2, s) {
    const r2 = s.signal, i = { tileKey: e2.id, error: t2 };
    return this.remoteClient.invoke("tileRenderer.onTileError", i, { signal: r2 });
  }
  onTileUpdate(e2) {
    for (const t2 of e2.removed)
      this._bufferData.has(t2.key.id) && this._bufferData.delete(t2.key.id), this._bufferIds.has(t2.key.id) && this._bufferIds.delete(t2.key.id);
    for (const t2 of e2.added)
      this._bufferData.forEach((e3) => {
        for (const s of e3)
          s.message.tileKey === t2.id && this._updateTileMesh("append", t2, M(s), [], false, false, null);
      });
  }
  _addBufferData(e2, t2) {
    this._bufferData.has(e2) || this._bufferData.set(e2, []), this._bufferData.get(e2).push(M(t2));
  }
  _createFactory(e2) {
    const { geometryType: t2, objectIdField: r2, fields: i } = this.service, a2 = (e3, t3) => this.remoteClient.invoke("tileRenderer.getMaterialItems", e3, t3), o$1 = { geometryType: t2, fields: i, spatialReference: k.fromJSON(this.spatialReference) }, n2 = new x(a2, this.tileStore.tileScheme.tileInfo), { matcher: l$2, aggregateMatcher: c } = e2.mesh;
    return this._store = n2, this._matchers.feature = l(l$2, n2, o$1, this._resourceManagerProxy), this._matchers.aggregate = o(c, (e3) => l(e3, n2, o$1, this._resourceManagerProxy)), new l$1(t2, r2, n2);
  }
  async _onTileData(e2, t2, s, a2) {
    f(a2);
    const { type: o2, addOrUpdate: l2, remove: c, clear: d, end: h } = t2, f$12 = !!this._schema.mesh.sortKey;
    if (!l2) {
      const t3 = { type: o2, addOrUpdate: null, remove: c, clear: d, end: h, sort: f$12 };
      return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t3 }, a2);
    }
    const m2 = this._processFeatures(e2, l2, s, a2, t2.status.version);
    try {
      const s2 = await m2;
      if (t$1(s2)) {
        const t3 = { type: o2, addOrUpdate: null, remove: c, clear: d, end: h, sort: f$12 };
        return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t3 }, a2);
      }
      const n2 = [];
      for (const t3 of s2) {
        let s3 = false;
        const r$1 = t3.message.bufferIds, a3 = e2.key.id, o3 = t3.message.tileKey;
        if (a3 !== o3 && r(r$1)) {
          if (!this.tileStore.get(o3)) {
            this._addBufferData(a3, t3), n2.push(t3);
            continue;
          }
          let e3 = this._bufferIds.get(o3);
          e3 || (e3 = new Set(), this._bufferIds.set(o3, e3));
          const i = Array.from(r$1);
          for (const t4 of i) {
            if (e3.has(t4)) {
              s3 = true;
              break;
            }
            e3.add(t4);
          }
        }
        s3 || (this._addBufferData(a3, t3), n2.push(t3));
      }
      await Promise.all(n2.map((s3) => {
        const r2 = e2.key.id === s3.message.tileKey, i = r2 ? t2.remove : [], n3 = r2 && t2.end;
        return this._updateTileMesh(o2, e2, s3, i, n3, t2.clear, a2.signal);
      }));
    } catch (u) {
      this._handleError(e2, u, a2);
    }
  }
  async _updateTileMesh(e2, t2, r2, i, a2, l2, c) {
    const d = e2, h = r2.message.tileKey, f$12 = !!this._schema.mesh.sortKey;
    h !== t2.key.id && (a2 = false);
    const m2 = o(r2, (e3) => e3.message), u = o(r2, (e3) => e3.transferList) || [], g = { type: d, addOrUpdate: m2, remove: i, clear: l2, end: a2, sort: f$12 }, p2 = { transferList: e$1(u) || [], signal: c };
    return f(p2), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: h, data: g }, p2);
  }
  async _processFeatures(e2, t2, s, i, a2) {
    if (t$1(t2) || !t2.hasFeatures)
      return null;
    const o2 = { transform: e2.transform, hasZ: false, hasM: false }, l2 = this._factory, c = { viewingMode: "", scale: e2.scale }, d = await this._matchers.feature, h = await this._matchers.aggregate;
    f(i);
    const f$12 = this._getLabelInfos(e2, t2);
    return await l2.analyze(t2.getCursor(), this._resourceManagerProxy, d, h, o2, c), f(i), this._writeFeatureSet(e2, t2, o2, f$12, l2, s, a2);
  }
  _writeFeatureSet(e2, t2, s, r$1, a2, o2, n2) {
    const l2 = t2.getSize(), c = this._schema.mesh.matcher.symbologyType, d = new E(e2.key.id, { features: l2, records: l2, metrics: 0 }, c, o2, c !== S.HEATMAP, n2), h = { viewingMode: "", scale: e2.scale }, f2 = t2.getCursor();
    for (; f2.next(); )
      try {
        const t3 = f2.getDisplayId(), o3 = r(r$1) ? r$1.get(t3) : null;
        a2.writeCursor(d, f2, s, h, e2.level, o3, this._resourceManagerProxy);
      } catch (p2) {
      }
    const m2 = e2.tileInfoView.tileInfo.isWrappable;
    return d.serialize(m2);
  }
  _handleError(e2, t2, s) {
    if (!j(t2)) {
      const r2 = { tileKey: e2.id, error: t2.message };
      return this.remoteClient.invoke("tileRenderer.onTileError", r2, { signal: s.signal });
    }
  }
  _getLabelingSchemaForScale(e2) {
    const t2 = this._schema.mesh.labels;
    if (t$1(t2))
      return null;
    if (t2.type === "subtype") {
      const s2 = { type: "subtype", classes: {} };
      let r2 = false;
      for (const i in t2.classes) {
        const a2 = t2.classes[i].filter((t3) => I(t3, e2.scale));
        r2 = r2 || !!a2.length, s2.classes[i] = a2;
      }
      return r2 ? s2 : null;
    }
    const s = t2.classes.filter((t3) => I(t3, e2.scale));
    return s.length ? { type: "simple", classes: s } : null;
  }
  _getLabels(e2, t2) {
    var _a;
    if (t2.type === "subtype") {
      const s = this.service.subtypeField, r2 = f$1(s, "Expected to find subtype Field"), i = e2.readAttribute(r2);
      return i == null ? [] : (_a = t2.classes[i]) != null ? _a : [];
    }
    return t2.classes;
  }
  _getLabelInfos(e2, s) {
    const i = this._getLabelingSchemaForScale(e2);
    if (t$1(i))
      return null;
    const a2 = new Map(), o2 = s.getCursor();
    for (; o2.next(); ) {
      const e3 = o2.getDisplayId(), s2 = [], r2 = p$1(e3), n2 = r2 && o2.readAttribute("cluster_count") !== 1 ? "aggregate" : "feature", l2 = this._getLabels(o2, i);
      for (const i2 of l2) {
        if (i2.target !== n2)
          continue;
        const a3 = o2.getStorage(), l3 = r2 && n2 === "feature" ? a3.getComputedStringAtIndex(o2.readAttribute("referenceId"), i2.fieldIndex) : a3.getComputedStringAtIndex(e3, i2.fieldIndex);
        if (!l3)
          continue;
        const c = n$1(l3.toString()), d = c[0], h = c[1];
        this._store.getMosaicItem(i2.symbol, t$2(d)).then((e4) => {
          s2[i2.index] = { glyphs: e4.glyphMosaicItems, rtl: h, index: i2.index };
        });
      }
      a2.set(e3, s2);
    }
    return a2;
  }
};
v = e([n("esri.views.2d.layers.features.processors.SymbolProcessor")], v);
const T = v;
export { T as default };
