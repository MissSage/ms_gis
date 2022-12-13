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
import { bV as e$1, fn as L, a as r$4, t as t$2, fC as r$5, dJ as r$6, l as f, aX as y, bq as c$3, $ as e$2, a0 as y$1, a1 as n$2, Z as m, ap as u$2, am as j$3, fD as d$1, dM as c$4, aD as E$3, d9 as d$2, fE as i$2, d8 as U, fF as g, fG as x$2, cO as x$3, cr as w$2, aL as w$3, s as s$1, fH as n$3, k as e$3, fI as f$1, fJ as a$2, fK as it, fL as c$5, c2 as lt, d2 as f$2, fM as s$2, fN as t$3, em as gt, fO as S$2, d3 as j$4, fP as c$6, fQ as y$2, e7 as t$4, N as n$4, fR as A, al as t$5, fS as c$7, aK as k, fT as v$1, fU as x$4, R as l$1, d0 as j$5 } from "./index.js";
import { o as o$2, u as u$3 } from "./FeatureStore.js";
import { Y } from "./QueryEngine.js";
import "vue";
import "./PooledRBush.js";
import "./centroid.js";
import "./QueryEngineResult.js";
import "./quantizationUtils.js";
import "./WhereClause.js";
import "./utils3.js";
import "./generateRendererUtils.js";
import "./projectionSupport.js";
import "./json.js";
import "./utils4.js";
import "./QueryEngineCapabilities.js";
import "./timeSupport.js";
function r$3(e2 = false, t2) {
  if (e2) {
    const { elevationInfo: e3, alignPointsInFeatures: s2, spatialReference: n2 } = t2;
    return new l(e3, s2, n2);
  }
  return new c$2();
}
class c$2 {
  async alignCandidates(e2, t2) {
    return e2;
  }
  notifyElevationSourceChange() {
  }
}
const h = 1024;
class l {
  constructor(t2, s2, n2) {
    this._elevationInfo = t2, this._alignPointsInFeatures = s2, this.spatialReference = n2, this._alignmentsCache = new e$1(h), this._cacheVersion = 0, this._metersPerVerticalUnit = L(n2);
  }
  async alignCandidates(e2, t2) {
    const n2 = this._elevationInfo;
    return r$4(n2) && n2.mode === "absolute-height" && !n2.featureExpressionInfo ? (this._alignAbsoluteElevationCandidates(e2, n2), e2) : this._alignComputedElevationCandidates(e2, t2);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e2, t2) {
    const { offset: s2, unit: o2 } = t2;
    if (t$2(s2))
      return;
    const i2 = s2 * (r$5(o2 != null ? o2 : "meters") / this._metersPerVerticalUnit);
    for (const n2 of e2)
      switch (n2.type) {
        case "edge":
          n2.start.z += i2, n2.end.z += i2;
          continue;
        case "vertex":
          n2.target.z += i2;
          continue;
      }
  }
  async _alignComputedElevationCandidates(e2, s2) {
    const n2 = new Map();
    for (const o2 of e2)
      r$6(n2, o2.objectId, p).push(o2);
    const [i2, a2, r2] = this._prepareQuery(n2), c2 = await this._alignPointsInFeatures(i2, s2);
    f(s2);
    if (r2 !== this._cacheVersion)
      return this._alignComputedElevationCandidates(e2, s2);
    this._applyCacheAndResponse(i2, c2, a2);
    const { drapedObjectIds: h2, failedObjectIds: l2 } = c2, d2 = [];
    for (const t2 of e2) {
      const { objectId: e3 } = t2;
      h2.has(e3) && t2.type === "edge" && (t2.draped = true), l2.has(e3) || d2.push(t2);
    }
    return d2;
  }
  _prepareQuery(e2) {
    const t2 = [], s2 = [];
    for (const [n2, o2] of e2) {
      const e3 = [];
      for (const t3 of o2)
        this._addToQueriesOrCachedResult(n2, t3.target, e3, s2), t3.type === "edge" && (this._addToQueriesOrCachedResult(n2, t3.start, e3, s2), this._addToQueriesOrCachedResult(n2, t3.end, e3, s2));
      e3.length !== 0 && t2.push({ objectId: n2, points: e3 });
    }
    return [t2, s2, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e2, t2, n2, o2) {
    const i2 = u$1(e2, t2), a2 = this._alignmentsCache.get(i2);
    r$4(a2) ? o2.push(new d(t2, a2)) : n2.push(t2);
  }
  _applyCacheAndResponse(e2, { elevations: t2, drapedObjectIds: s2, failedObjectIds: n2 }, o2) {
    for (const r2 of o2)
      r2.apply();
    let i2 = 0;
    const a2 = this._alignmentsCache;
    for (const { objectId: r2, points: c2 } of e2) {
      if (n2.has(r2)) {
        i2 += c2.length;
        continue;
      }
      const e3 = !s2.has(r2);
      for (const s3 of c2) {
        const n3 = u$1(r2, s3), o3 = t2[i2++];
        s3.z = o3, e3 && a2.put(n3, o3, 1);
      }
    }
  }
}
class d {
  constructor(e2, t2) {
    this.point = e2, this.z = t2;
  }
  apply() {
    this.point.z = this.z;
  }
}
function u$1(e2, { x: t2, y: s2, z: n2 }) {
  return `${e2}-${t2}-${s2}-${n2 != null ? n2 : 0}}`;
}
function p() {
  return [];
}
class t$1 {
  filter(t2, n2) {
    return n2;
  }
  notifyElevationSourceChange() {
  }
}
class n$1 {
  filter(t2, n2) {
    const { point: r2, distance: c2 } = t2, { z: i2 } = r2;
    if (!(i2 != null))
      return n2;
    if (n2.length === 0)
      return n2;
    const o2 = s(c2), u2 = this._updateCandidatesTo3D(n2, r2, o2).filter(e);
    return u2.sort(a$1), u2;
  }
  _updateCandidatesTo3D(t2, n2, e2) {
    for (const r2 of t2)
      switch (r2.type) {
        case "edge":
          c$1(r2, n2, e2);
          continue;
        case "vertex":
          o$1(r2, n2, e2);
          continue;
      }
    return t2;
  }
}
function e(t2) {
  return t2.distance <= 1;
}
function r$2(e2 = false) {
  return e2 ? new n$1() : new t$1();
}
function c$1(t2, n2, { x: e2, y: r2, z: c2 }) {
  const { start: o2, end: s2, target: a2 } = t2;
  t2.draped || i$1(a2, n2, o2, s2);
  const u2 = (n2.x - a2.x) / e2, d2 = (n2.y - a2.y) / r2, f2 = (n2.z - a2.z) / c2;
  t2.distance = Math.sqrt(u2 * u2 + d2 * d2 + f2 * f2);
}
function i$1(t2, n2, e2, r2) {
  const c2 = r2.x - e2.x, i2 = r2.y - e2.y, o2 = r2.z - e2.z, s2 = c2 * c2 + i2 * i2 + o2 * o2, a2 = (n2.x - e2.x) * c2 + (n2.y - e2.y) * i2 + o2 * (n2.z - e2.z), u2 = Math.min(1, Math.max(0, a2 / s2)), d2 = e2.x + c2 * u2, f2 = e2.y + i2 * u2, x2 = e2.z + o2 * u2;
  t2.x = d2, t2.y = f2, t2.z = x2;
}
function o$1(t2, n2, { x: e2, y: r2, z: c2 }) {
  const { target: i2 } = t2, o2 = (n2.x - i2.x) / e2, s2 = (n2.y - i2.y) / r2, a2 = (n2.z - i2.z) / c2, u2 = Math.sqrt(o2 * o2 + s2 * s2 + a2 * a2);
  t2.distance = u2;
}
function s(t2) {
  return typeof t2 == "number" ? { x: t2, y: t2, z: t2 } : t2;
}
function a$1(t2, n2) {
  return t2.distance - n2.distance;
}
function n(t2 = false, e2) {
  return t2 ? new i(e2) : new c();
}
class c {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
}
const r$1 = 1024;
class i {
  constructor(t2) {
    this._getSymbologyCandidates = t2, this._candidatesCache = new e$1(r$1), this._cacheVersion = 0;
  }
  async fetch(e2, o2) {
    if (e2.length === 0)
      return [];
    const n2 = [], c2 = [], r2 = this._candidatesCache;
    for (const s2 of e2) {
      const e3 = a(s2), o3 = r2.get(e3);
      if (o3)
        for (const s3 of o3)
          c2.push(y(s3));
      else
        n2.push(s2), r2.put(e3, [], 1);
    }
    if (n2.length === 0)
      return c2;
    const i2 = this._cacheVersion, { candidates: h2, sourceCandidateIndices: d2 } = await this._getSymbologyCandidates(n2, o2);
    f(o2);
    if (i2 !== this._cacheVersion)
      return this.fetch(e2, o2);
    const f$12 = [], { length: g2 } = h2;
    for (let s2 = 0; s2 < g2; ++s2) {
      const e3 = h2[s2], o3 = a(n2[d2[s2]]), c3 = r2.get(o3);
      c3.push(e3), r2.put(o3, c3, c3.length), f$12.push(y(e3));
    }
    return c2.concat(f$12);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
}
function a(t2) {
  var _a, _b, _c;
  switch (t2.type) {
    case "vertex": {
      const { objectId: e2, target: s2 } = t2, n2 = `${e2}-vertex-${s2.x}-${s2.y}-${(_a = s2.z) != null ? _a : 0}`;
      return c$3(n2).toString();
    }
    case "edge": {
      const { objectId: e2, start: s2, end: n2 } = t2, c2 = `${e2}-edge-${s2.x}-${s2.y}-${(_b = s2.z) != null ? _b : 0}-to-${n2.x}-${n2.y}-${(_c = n2.z) != null ? _c : 0}`;
      return c$3(c2).toString();
    }
    default:
      return "";
  }
}
let r = class extends m {
  constructor() {
    super(...arguments), this.updating = false, this._pending = [];
  }
  push(s2, t2) {
    this._pending.push({ promise: s2, callback: t2 }), this._pending.length === 1 && this._process();
  }
  _process() {
    if (!this._pending.length)
      return void (this.updating = false);
    this.updating = true;
    const s2 = this._pending[0];
    s2.promise.then((t2) => s2.callback(t2)).catch(() => {
    }).then(() => {
      this._pending.shift(), this._process();
    });
  }
};
e$2([y$1()], r.prototype, "updating", void 0), r = e$2([n$2("esri.core.AsyncSequence")], r);
class o {
  constructor(t2, e2) {
    this.data = t2, this.resolution = e2, this.state = { type: u.CREATED }, this.alive = true;
  }
  process(t2) {
    switch (this.state.type) {
      case u.CREATED:
        return this.state = this._gotoFetchCount(this.state, t2), this.state.task.promise.then(t2.resume, t2.resume);
      case u.FETCH_COUNT:
        break;
      case u.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, t2), this.state.task.promise.then(t2.resume, t2.resume);
      case u.FETCH_FEATURES:
        break;
      case u.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, t2);
      case u.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this._featureCount, state: this._stateToString };
  }
  get _featureCount() {
    switch (this.state.type) {
      case u.CREATED:
      case u.FETCH_COUNT:
        return 0;
      case u.FETCHED_COUNT:
        return this.state.featureCount;
      case u.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case u.FETCHED_FEATURES:
        return this.state.features.length;
      case u.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case u.CREATED:
        return "created";
      case u.FETCH_COUNT:
        return "fetch-count";
      case u.FETCHED_COUNT:
        return "fetched-count";
      case u.FETCH_FEATURES:
        return "fetch-features";
      case u.FETCHED_FEATURES:
        return "fetched-features";
      case u.DONE:
        return "done";
    }
  }
  _gotoFetchCount(s2, a2) {
    return { type: u.FETCH_COUNT, previous: s2, task: j$3(async (t2) => {
      const s3 = await d$1(a2.fetchCount(this, t2));
      this.state.type === u.FETCH_COUNT && (this.state = this._gotoFetchedCount(this.state, s3.ok ? s3.value : 1 / 0));
    }) };
  }
  _gotoFetchedCount(t2, e2) {
    return { type: u.FETCHED_COUNT, featureCount: e2, previous: t2 };
  }
  _gotoFetchFeatures(s2, a2) {
    return { type: u.FETCH_FEATURES, previous: s2, task: j$3(async (t2) => {
      const r2 = await d$1(a2.fetchFeatures(this, s2.featureCount, t2));
      this.state.type === u.FETCH_FEATURES && (this.state = this._gotoFetchedFeatures(this.state, r2.ok ? r2.value : []));
    }) };
  }
  _gotoFetchedFeatures(t2, e2) {
    return { type: u.FETCHED_FEATURES, previous: t2, features: e2 };
  }
  _goToDone(t2, e2) {
    return e2.finish(this, t2.features), { type: u.DONE, previous: t2 };
  }
  reset() {
    const t2 = this.state;
    switch (this.state = { type: u.CREATED }, t2.type) {
      case u.CREATED:
      case u.FETCHED_COUNT:
      case u.FETCHED_FEATURES:
      case u.DONE:
        break;
      case u.FETCH_COUNT:
      case u.FETCH_FEATURES:
        t2.task.abort();
    }
  }
  intersects(t2) {
    return !(!t$2(t2) && this.data.extent) || (c$4(t2, T$1), E$3(this.data.extent, T$1));
  }
}
var u;
!function(t2) {
  t2[t2.CREATED = 0] = "CREATED", t2[t2.FETCH_COUNT = 1] = "FETCH_COUNT", t2[t2.FETCHED_COUNT = 2] = "FETCHED_COUNT", t2[t2.FETCH_FEATURES = 3] = "FETCH_FEATURES", t2[t2.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", t2[t2.DONE = 5] = "DONE";
}(u || (u = {}));
const T$1 = u$2();
let C$2 = class extends d$2 {
  constructor(e2) {
    super(e2), this.tilesOfInterest = [], this.availability = 0, this._pendingTiles = new Map(), this._pendingEdits = new r(), this._pendingEditsAbortController = new AbortController();
  }
  get _minimumVerticesPerFeature() {
    var _a;
    switch ((_a = this.store) == null ? void 0 : _a.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  set filter(e2) {
    const t2 = this._get("filter"), i2 = this._filterProperties(e2);
    JSON.stringify(t2) !== JSON.stringify(i2) && this._set("filter", i2);
  }
  set customParameters(e2) {
    const t2 = this._get("customParameters");
    JSON.stringify(t2) !== JSON.stringify(e2) && this._set("customParameters", e2);
  }
  get _configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(e2) {
    const t2 = this._get("tileInfo");
    t2 !== e2 && (r$4(e2) && r$4(t2) && JSON.stringify(e2) === JSON.stringify(t2) || (this._set("tileInfo", e2), this.store.tileInfo = e2));
  }
  set tileSize(e2) {
    this._get("tileSize") !== e2 && this._set("tileSize", e2);
  }
  get updating() {
    return this.updatingExcludingEdits || this._pendingEdits.updating;
  }
  get updatingExcludingEdits() {
    return this.updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  initialize() {
    this._initializeFetchExtent(), this.updatingHandles.add(() => this._configuration, () => this.refresh()), this.updatingHandles.add(() => this.tilesOfInterest, (e2, i2) => {
      i$2(e2, i2, ({ id: e3 }, { id: t2 }) => e3 === t2) || this._process();
    }, U);
  }
  destroy() {
    this._pendingTiles.forEach((e2) => this._deletePendingTile(e2)), this._pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this._pendingEditsAbortController.abort(), this._pendingEditsAbortController = null;
  }
  refresh() {
    this.store.refresh(), this._pendingTiles.forEach((e2) => this._deletePendingTile(e2)), this._process();
  }
  applyEdits(e2) {
    this._pendingEdits.push(e2, async (e3) => {
      if (e3.addedFeatures.length === 0 && e3.updatedFeatures.length === 0 && e3.deletedFeatures.length === 0)
        return;
      for (const [, i2] of this._pendingTiles)
        i2.reset();
      const t2 = __spreadProps(__spreadValues({}, e3), { deletedFeatures: e3.deletedFeatures.map(({ objectId: e4, globalId: t3 }) => e4 && e4 !== -1 ? e4 : this._lookupObjectIdByGlobalId(t3)) });
      await this.updatingHandles.addPromise(this.store.processEdits(t2, (e4, t3) => this._queryFeaturesById(e4, t3), this._pendingEditsAbortController.signal)), this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !g(this.url))
      return;
    const e2 = j$3(async (e3) => {
      var _a;
      try {
        const t2 = await x$2(this.url, new x$3({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: !!this.capabilities.query.supportsCacheHint || void 0 }), { query: this._configuration.customParameters, signal: e3 });
        this.store.extent = w$2.fromJSON((_a = t2.data) == null ? void 0 : _a.extent);
      } catch (t2) {
        w$3(t2), s$1.getLogger(this.declaredClass).warn("Failed to fetch data extent", t2);
      }
    });
    this.updatingHandles.addPromise(e2.promise.then(() => this._process())), this.handles.add(n$3(() => e2.abort()));
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this._pendingTiles.values()).map((e2) => e2.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, e2] of this._pendingTiles)
      e2.alive = false;
  }
  _createPendingTiles() {
    const e2 = this._collectMissingTilesInfo();
    if (this._setAvailability(t$2(e2) ? 1 : e2.coveredArea / e2.fullArea), !t$2(e2))
      for (const { data: t2, resolution: i2 } of e2.missingTiles) {
        const e3 = this._pendingTiles.get(t2.id);
        e3 ? (e3.resolution = i2, e3.alive = true) : this._createPendingTile(t2, i2);
      }
  }
  _collectMissingTilesInfo() {
    let e2 = null;
    for (let t2 = this.tilesOfInterest.length - 1; t2 >= 0; t2--) {
      const i2 = this.tilesOfInterest[t2], s2 = this.store.process(i2, (e3, t3) => this._verifyTileComplexity(e3, t3));
      t$2(e2) ? e2 = s2 : e2.prepend(s2);
    }
    return e2;
  }
  _deletePendingTiles() {
    for (const [, e2] of this._pendingTiles)
      e2.alive || this._deletePendingTile(e2);
  }
  _processPendingTiles() {
    const e2 = { fetchCount: (e3, t2) => this._fetchCount(e3, t2), fetchFeatures: (e3, t2, i2) => this._fetchFeatures(e3, t2, i2), finish: (e3, t2) => this._finishPendingTile(e3, t2), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(e2))
      for (const [, t2] of this._pendingTiles)
        this._verifyTileComplexity(this.store.getFeatureCount(t2.data), t2.resolution) && this.updatingHandles.addPromise(t2.process(e2));
  }
  _verifyTileComplexity(e2, t2) {
    return this._verifyVertexComplexity(e2) && this._verifyFeatureDensity(e2, t2);
  }
  _verifyVertexComplexity(e2) {
    return e2 * this._minimumVerticesPerFeature < x$1;
  }
  _verifyFeatureDensity(e2, t2) {
    if (t$2(this.tileInfo))
      return false;
    const i2 = this.tileSize * t2;
    return e2 * (j$2 / (i2 * i2)) < w$1;
  }
  _ensureFetchAllCounts(e2) {
    let t2 = true;
    for (const [, i2] of this._pendingTiles)
      i2.state.type < u.FETCHED_COUNT && this.updatingHandles.addPromise(i2.process(e2)), i2.state.type <= u.FETCH_COUNT && (t2 = false);
    return t2;
  }
  _finishPendingTile(e2, t2) {
    this.store.add(e2.data, t2), this._deletePendingTile(e2), this._updateAvailability();
  }
  _updateAvailability() {
    const e2 = this._collectMissingTilesInfo();
    this._setAvailability(t$2(e2) ? 1 : e2.coveredArea / e2.fullArea);
  }
  _setAvailability(e2) {
    this._set("availability", e2);
  }
  _createPendingTile(e2, t2) {
    const i2 = new o(e2, t2);
    return this._pendingTiles.set(e2.id, i2), i2;
  }
  _deletePendingTile(e2) {
    e2.reset(), this._pendingTiles.delete(e2.data.id);
  }
  async _fetchCount(e2, t2) {
    return this.store.fetchCount(e2.data, this.url, this._createCountQuery(e2), { query: this.customParameters, timeout: S$1, signal: t2 });
  }
  async _fetchFeatures(e2, t2, i2) {
    let s2, r2 = 0, o2 = 0, n2 = t2;
    for (; ; ) {
      const a2 = this._createFeaturesQuery(e2), l2 = this._setPagingParameters(a2, r2, n2), { features: c2, exceededTransferLimit: d2 } = await this._queryFeatures(a2, i2);
      if (l2 && (r2 += e$3(a2.num)), o2 += c2.length, s2 = s2 ? s2.concat(c2) : c2, n2 = t2 - o2, !l2 || !d2 || n2 <= 0)
        return s2;
    }
  }
  _filterProperties(e2) {
    return t$2(e2) ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: e2.where || "1=1", timeExtent: e2.timeExtent, gdbVersion: e2.gdbVersion };
  }
  _lookupObjectIdByGlobalId(e2) {
    const t2 = this.globalIdField, i2 = this.objectIdField;
    if (t$2(t2))
      throw new Error("Expected globalIdField to be defined");
    let s2 = null;
    if (this.store.featureStore.forEach((r2) => {
      var _a;
      e2 === r2.attributes[t2] && (s2 = (_a = r2.objectId) != null ? _a : r2.attributes[i2]);
    }), t$2(s2))
      throw new Error(`Expected to find a feature with globalId ${e2}`);
    return s2;
  }
  _queryFeaturesById(e2, t2) {
    const i2 = this._createFeaturesQuery();
    return i2.objectIds = e2, this._queryFeatures(i2, t2);
  }
  _queryFeatures(e2, t2) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(e2, t2) : this._queryFeaturesJSON(e2, t2);
  }
  async _queryFeaturesPBF(e2, t2) {
    const { sourceSpatialReference: i2 } = this, { data: s2 } = await f$1(this.url, e2, new a$2({ sourceSpatialReference: i2 }), { query: this._configuration.customParameters, timeout: S$1, signal: t2 });
    return it(s2);
  }
  async _queryFeaturesJSON(e2, t2) {
    const { sourceSpatialReference: i2 } = this, { data: s2 } = await c$5(this.url, e2, i2, { query: this._configuration.customParameters, timeout: S$1, signal: t2 });
    return lt(s2, this.objectIdField);
  }
  _createCountQuery(e2) {
    const t2 = this._createBaseQuery(e2);
    return this.capabilities.query.supportsCacheHint && (t2.cacheHint = true), t2;
  }
  _createFeaturesQuery(e2 = null) {
    const t2 = this._createBaseQuery(e2);
    return t2.outFields = this.globalIdField ? [this.globalIdField, this.objectIdField] : [this.objectIdField], t2.returnGeometry = true, r$4(e2) && (this.capabilities.query.supportsResultType ? t2.resultType = "tile" : this.capabilities.query.supportsCacheHint && (t2.cacheHint = true)), t2;
  }
  _createBaseQuery(e2) {
    const t2 = new x$3({ returnZ: this.hasZ, returnM: false, geometry: r$4(this.tileInfo) && r$4(e2) ? f$2(e2.data.extent, this.tileInfo.spatialReference) : void 0 }), i2 = this._configuration.filter;
    return r$4(i2) && (t2.where = i2.where, t2.gdbVersion = i2.gdbVersion, t2.timeExtent = i2.timeExtent), t2.outSpatialReference = this.spatialReference, t2;
  }
  _setPagingParameters(e2, t2, i2) {
    if (!this.capabilities.query.supportsPagination)
      return false;
    const { supportsMaxRecordCountFactor: s2, supportsCacheHint: r2, tileMaxRecordCount: o2, maxRecordCount: n2, supportsResultType: a2 } = this.capabilities.query, l2 = s2 ? x$3.MAX_MAX_RECORD_COUNT_FACTOR : 1, u2 = l2 * ((a2 || r2) && o2 ? o2 : n2 || E$2);
    return e2.start = t2, s2 ? (e2.maxRecordCountFactor = Math.min(l2, Math.ceil(i2 / u2)), e2.num = Math.min(i2, e2.maxRecordCountFactor * u2)) : e2.num = Math.min(i2, u2), true;
  }
};
e$2([y$1({ constructOnly: true })], C$2.prototype, "url", void 0), e$2([y$1({ constructOnly: true })], C$2.prototype, "objectIdField", void 0), e$2([y$1({ constructOnly: true })], C$2.prototype, "globalIdField", void 0), e$2([y$1({ constructOnly: true })], C$2.prototype, "capabilities", void 0), e$2([y$1({ constructOnly: true })], C$2.prototype, "sourceSpatialReference", void 0), e$2([y$1({ constructOnly: true })], C$2.prototype, "spatialReference", void 0), e$2([y$1({ constructOnly: true })], C$2.prototype, "store", void 0), e$2([y$1({ readOnly: true })], C$2.prototype, "_minimumVerticesPerFeature", null), e$2([y$1()], C$2.prototype, "filter", null), e$2([y$1()], C$2.prototype, "customParameters", null), e$2([y$1({ readOnly: true })], C$2.prototype, "_configuration", null), e$2([y$1()], C$2.prototype, "tileInfo", null), e$2([y$1()], C$2.prototype, "tileSize", null), e$2([y$1()], C$2.prototype, "tilesOfInterest", void 0), e$2([y$1({ readOnly: true })], C$2.prototype, "updating", null), e$2([y$1({ readOnly: true })], C$2.prototype, "updatingExcludingEdits", null), e$2([y$1({ readOnly: true })], C$2.prototype, "availability", void 0), e$2([y$1()], C$2.prototype, "hasZ", null), C$2 = e$2([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], C$2);
const E$2 = 2e3, S$1 = 6e5, x$1 = 1e6, j$2 = 25, w$1 = 1;
class t {
  constructor() {
    this._store = new Map(), this._byteSize = 0;
  }
  set(t2, e2) {
    this.delete(t2), this._store.set(t2, e2), this._byteSize += e2.byteSize;
  }
  delete(t2) {
    const e2 = this._store.get(t2);
    return !!this._store.delete(t2) && (e2 != null && (this._byteSize -= e2.byteSize), true);
  }
  get(t2) {
    return this._used(t2), this._store.get(t2);
  }
  has(t2) {
    return this._used(t2), this._store.has(t2);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(t2, e2) {
    for (const [s2, r2] of this._store) {
      if (this._byteSize <= t2)
        break;
      this.delete(s2), e2(r2);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(t2) {
    const e2 = this._store.get(t2);
    e2 && (this._store.delete(t2), this._store.set(t2, e2));
  }
}
let v = class extends m {
  constructor(e2) {
    super(e2), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * s$2.MEGABYTES, this._tileBounds = new o$2(), this._tiles = new t(), this._refCounts = new Map(), this._tileFeatureCounts = new Map(), this._tmpBoundingRect = u$2();
  }
  add(e2, t2) {
    const s2 = [];
    for (const i2 of t2)
      this._referenceFeature(i2.objectId) === x.ADDED && s2.push(i2);
    this._addTileStorage(e2, new Set(t2.map(({ objectId: e3 }) => e3)), C$1(t2)), this.featureStore.addMany(s2), this._tiles.applyByteSizeLimit(this.maximumByteSize, (e3) => this._removeTileStorage(e3));
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this._tileBounds.clear(), this._tiles.clear(), this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(e2, t2, s2) {
    return this._processEditsDelete(e2.deletedFeatures.concat(e2.updatedFeatures)), this._processEditsRefetch(e2.addedFeatures.concat(e2.updatedFeatures), t2, s2);
  }
  _addTileStorage(e2, t2, s2) {
    this._tiles.set(e2.id, new T(e2, t2, s2)), this._tileBounds.set(e2.id, e2.extent), this._tileFeatureCounts.set(e2.id, t2.size);
  }
  _remove({ id: e2 }) {
    const t2 = this._tiles.get(e2);
    t2 && this._removeTileStorage(t2);
  }
  _removeTileStorage(e2) {
    const t2 = [];
    for (const i2 of e2.objectIds)
      this._unreferenceFeature(i2) === x.REMOVED && t2.push(i2);
    this.featureStore.removeManyById(t2);
    const s2 = e2.data.id;
    this._tiles.delete(s2), this._tileBounds.delete(s2);
  }
  _processEditsDelete(e2) {
    this.featureStore.removeManyById(e2);
    for (const [, t2] of this._tiles) {
      for (const s2 of e2)
        t2.objectIds.delete(s2);
      this._tileFeatureCounts.set(t2.data.id, t2.objectIds.size);
    }
    for (const t2 of e2)
      this._refCounts.delete(t2);
  }
  async _processEditsRefetch(e2, t2, s2) {
    const i2 = (await t2(e2, s2)).features, { hasZ: r2, hasM: n2 } = this.featureStore;
    for (const l2 of i2) {
      const e3 = gt(this._tmpBoundingRect, l2.geometry, r2, n2);
      t$2(e3) || this._tileBounds.forEachInBounds(e3, (e4) => {
        const t3 = this._tiles.get(e4);
        this.featureStore.add(l2), t3.objectIds.has(l2.objectId) || (t3.objectIds.add(l2.objectId), this._referenceFeature(l2.objectId), this._tileFeatureCounts.set(t3.data.id, t3.objectIds.size));
      });
    }
  }
  process(e2, t2 = () => true) {
    if (t$2(this.tileInfo) || !e2.extent || r$4(this.extent) && !E$3(c$4(this.extent, this._tmpBoundingRect), e2.extent))
      return new j$1(e2);
    if (this._tiles.has(e2.id))
      return new j$1(e2);
    const s2 = this._createTileTree(e2, this.tileInfo);
    return this._simplify(s2, t2, null, 0, 1), this._collectMissingTiles(e2, s2, this.tileInfo);
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: e2 }) => ({ data: e2, featureCount: this._tileFeatureCounts.get(e2.id) || 0 }));
  }
  getFeatureCount(e2) {
    var _a;
    return (_a = this._tileFeatureCounts.get(e2.id)) != null ? _a : 0;
  }
  async fetchCount(e2, t2, s2, i2) {
    const r2 = this._tileFeatureCounts.get(e2.id);
    if (r2 != null)
      return r2;
    const o2 = await S$2(t2, s2, i2);
    return this._tileFeatureCounts.set(e2.id, o2.data.count), o2.data.count;
  }
  _createTileTree(e2, t2) {
    const s2 = new I(e2.level, e2.row, e2.col);
    return t2.updateTileInfo(s2, j$4.ExtrapolateOptions.POWER_OF_TWO), this._tileBounds.forEachInBounds(e2.extent, (i2) => {
      const r2 = this._tiles.get(i2).data;
      this._tilesAreRelated(e2, r2) && this._populateChildren(s2, r2, t2, this._tileFeatureCounts.get(r2.id) || 0);
    }), s2;
  }
  _tilesAreRelated(e2, t2) {
    if (!e2 || !t2)
      return false;
    if (e2.level === t2.level)
      return e2.row === t2.row && e2.col === t2.col;
    const s2 = e2.level < t2.level, i2 = s2 ? e2 : t2, r2 = s2 ? t2 : e2, o2 = 1 << r2.level - i2.level;
    return Math.floor(r2.row / o2) === i2.row && Math.floor(r2.col / o2) === i2.col;
  }
  _populateChildren(e2, t2, s2, i2) {
    const r2 = t2.level - e2.level - 1;
    if (r2 < 0)
      return void (e2.isLeaf = true);
    const o2 = t2.row >> r2, l2 = t2.col >> r2, a2 = e2.row << 1, c2 = l2 - (e2.col << 1) + (o2 - a2 << 1), h2 = e2.children[c2];
    if (r$4(h2))
      this._populateChildren(h2, t2, s2, i2);
    else {
      const r3 = new I(e2.level + 1, o2, l2);
      s2.updateTileInfo(r3, j$4.ExtrapolateOptions.POWER_OF_TWO), e2.children[c2] = r3, this._populateChildren(r3, t2, s2, i2);
    }
  }
  _simplify(e2, t2, s2, i2, r2) {
    const o2 = r2 * r2;
    if (e2.isLeaf)
      return t2(this.getFeatureCount(e2), r2) ? 0 : (this._remove(e2), r$4(s2) && (s2.children[i2] = null), o2);
    const l2 = r2 / 2, a2 = l2 * l2;
    let c2 = 0;
    for (let h2 = 0; h2 < e2.children.length; h2++) {
      const s3 = e2.children[h2];
      c2 += r$4(s3) ? this._simplify(s3, t2, e2, h2, l2) : a2;
    }
    return c2 === 0 ? this._mergeChildren(e2) : 1 - c2 / o2 < w && (this._purge(e2), r$4(s2) && (s2.children[i2] = null), c2 = o2), c2;
  }
  _mergeChildren(e2) {
    const t2 = new Set();
    let s2 = 0;
    this._forEachLeaf(e2, (e3) => {
      const i2 = this._tiles.get(e3.id);
      if (i2) {
        s2 += i2.byteSize;
        for (const e4 of i2.objectIds)
          t2.has(e4) || (t2.add(e4), this._referenceFeature(e4));
        this._remove(e3);
      }
    }), this._addTileStorage(e2, t2, s2), e2.isLeaf = true, e2.children[0] = e2.children[1] = e2.children[2] = e2.children[3] = null, this._tileFeatureCounts.set(e2.id, t2.size);
  }
  _forEachLeaf(e2, t2) {
    for (const s2 of e2.children)
      t$2(s2) || (s2.isLeaf ? t2(s2) : this._forEachLeaf(s2, t2));
  }
  _purge(e2) {
    if (!t$2(e2))
      if (e2.isLeaf)
        this._remove(e2);
      else
        for (let t2 = 0; t2 < e2.children.length; t2++) {
          const s2 = e2.children[t2];
          this._purge(s2), e2.children[t2] = null;
        }
  }
  _collectMissingTiles(e2, t2, s2) {
    const i2 = new F(s2, e2, this.extent);
    return this._collectMissingTilesRecurse(t2, i2, 1), i2.info;
  }
  _collectMissingTilesRecurse(e2, t2, s2) {
    if (e2.isLeaf)
      return;
    if (!e2.hasChildren)
      return void t2.addMissing(e2.level, e2.row, e2.col, s2);
    const i2 = s2 / 2;
    for (let r2 = 0; r2 < e2.children.length; r2++) {
      const s3 = e2.children[r2];
      t$2(s3) ? t2.addMissing(e2.level + 1, (e2.row << 1) + ((2 & r2) >> 1), (e2.col << 1) + (1 & r2), i2) : this._collectMissingTilesRecurse(s3, t2, i2);
    }
  }
  _referenceFeature(e2) {
    const t2 = (this._refCounts.get(e2) || 0) + 1;
    return this._refCounts.set(e2, t2), t2 === 1 ? x.ADDED : x.UNCHANGED;
  }
  _unreferenceFeature(e2) {
    const t2 = (this._refCounts.get(e2) || 0) - 1;
    return t2 === 0 ? (this._refCounts.delete(e2), x.REMOVED) : (t2 > 0 && this._refCounts.set(e2, t2), x.UNCHANGED);
  }
  get test() {
    return { tiles: Array.from(this._tiles.values()).map((e2) => `${e2.data.id}:[${Array.from(e2.objectIds)}]`), featureReferences: Array.from(this._refCounts.keys()).map((e2) => `${e2}:${this._refCounts.get(e2)}`) };
  }
};
function C$1(e2) {
  return e2.reduce((e3, t2) => e3 + E$1(t2), 0);
}
function E$1(e2) {
  return 32 + S(e2.geometry) + t$3(e2.attributes);
}
function S(e2) {
  if (t$2(e2))
    return 0;
  const t2 = c$6(e2.lengths, 4);
  return 32 + c$6(e2.coords, 8) + t2;
}
e$2([y$1({ constructOnly: true })], v.prototype, "featureStore", void 0), e$2([y$1()], v.prototype, "tileInfo", void 0), e$2([y$1()], v.prototype, "extent", void 0), e$2([y$1()], v.prototype, "maximumByteSize", void 0), v = e$2([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], v);
class T {
  constructor(e2, t2, s2) {
    this.data = e2, this.objectIds = t2, this.byteSize = s2;
  }
}
class I {
  constructor(e2, t2, s2) {
    this.level = e2, this.row = t2, this.col = s2, this.isLeaf = false, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (r$4(this.children[0]) || r$4(this.children[1]) || r$4(this.children[2]) || r$4(this.children[3]));
  }
}
class j$1 {
  constructor(e2, t2 = []) {
    this.missingTiles = t2, this.fullArea = 0, this.coveredArea = 0, this.fullArea = y$2(e2.extent), this.coveredArea = this.fullArea;
  }
  prepend(e2) {
    this.missingTiles = e2.missingTiles.concat(this.missingTiles), this.coveredArea += e2.coveredArea, this.fullArea += e2.fullArea;
  }
}
class F {
  constructor(e2, t2, s2) {
    this._tileInfo = e2, this._extent = null, this.info = new j$1(t2), r$4(s2) && (this._extent = c$4(s2));
  }
  addMissing(e2, t2, s2, i2) {
    const r2 = new t$4(null, e2, t2, s2);
    this._tileInfo.updateTileInfo(r2, j$4.ExtrapolateOptions.POWER_OF_TWO), t$2(r2.extent) || r$4(this._extent) && !E$3(this._extent, r2.extent) || (this.info.missingTiles.push({ data: r2, resolution: i2 }), this.info.coveredArea -= y$2(r2.extent));
  }
}
const w = 0.18751;
var x;
!function(e2) {
  e2[e2.ADDED = 0] = "ADDED", e2[e2.REMOVED = 1] = "REMOVED", e2[e2.UNCHANGED = 2] = "UNCHANGED";
}(x || (x = {}));
let E = class extends n$4.EventedAccessor {
  constructor() {
    super(...arguments), this._isInitializing = true, this.remoteClient = null, this._whenSetup = A(), this._elevationAligner = r$3(), this._elevationFilter = r$2(), this._symbologyCandidatesFetcher = n(), this._handles = new t$5(), this._updatingHandles = new c$7(), this._editsUpdatingHandles = new c$7(), this._pendingApplyEdits = new Map(), this._alignPointsInFeatures = async (e2, t2) => {
      const i2 = { points: e2 }, s2 = await this.remoteClient.invoke("alignElevation", i2, { signal: t2 });
      return f(t2), s2;
    }, this._getSymbologyCandidates = async (e2, t2) => {
      const i2 = { candidates: e2, spatialReference: this._spatialReference.toJSON() }, s2 = await this.remoteClient.invoke("getSymbologyCandidates", i2, { signal: t2 });
      return f(t2), s2;
    };
  }
  get updating() {
    return this.updatingExcludingEdits || this._editsUpdatingHandles.updating || this._featureFetcher.updating;
  }
  get updatingExcludingEdits() {
    return this._featureFetcher.updatingExcludingEdits || this._isInitializing || this._updatingHandles.updating;
  }
  destroy() {
    this._featureFetcher.destroy(), this._queryEngine.destroy(), this._featureStore.clear(), this._handles.destroy();
  }
  async setup(e2) {
    const { geometryType: t2, objectIdField: i2, timeInfo: r2, fields: n2 } = e2.serviceInfo, { hasZ: o2 } = e2, p2 = k.fromJSON(e2.spatialReference);
    this._spatialReference = p2, this._featureStore = new u$3(__spreadProps(__spreadValues({}, e2.serviceInfo), { hasZ: o2, hasM: false })), this._queryEngine = new Y({ spatialReference: e2.spatialReference, featureStore: this._featureStore, geometryType: t2, fields: n2, hasZ: o2, hasM: false, objectIdField: i2, timeInfo: r2 ? v$1.fromJSON(r2) : null }), this._featureFetcher = new C$2({ store: new v({ featureStore: this._featureStore }), url: e2.serviceInfo.url, objectIdField: e2.serviceInfo.objectIdField, globalIdField: e2.serviceInfo.globalIdField, capabilities: e2.serviceInfo.capabilities, spatialReference: p2, sourceSpatialReference: k.fromJSON(e2.serviceInfo.spatialReference) });
    const d2 = e2.configuration.viewType === "3d";
    return this._elevationAligner = r$3(d2, { elevationInfo: r$4(e2.elevationInfo) ? x$4.fromJSON(e2.elevationInfo) : null, alignPointsInFeatures: this._alignPointsInFeatures, spatialReference: p2 }), this._elevationFilter = r$2(d2), this._handles.add([l$1(() => this._featureFetcher.availability, (e3) => this.emit("notify-availability", { availability: e3 }), U), l$1(() => this.updating, () => this._notifyUpdating())]), this._whenSetup.resolve(), this._isInitializing = false, this.configure(e2.configuration);
  }
  async configure(e2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), this._updateFeatureFetcherConfiguration(e2), { result: {} };
  }
  async fetchCandidates(e2, t2) {
    await this._whenSetup.promise, f(t2);
    const i2 = j(e2), r2 = r$4(t2) ? t2.signal : null, a2 = await this._queryEngine.executeQueryForSnapping(i2, r2);
    f(r2);
    const o2 = await this._elevationAligner.alignCandidates(a2.candidates, r2);
    f(r2);
    const l2 = await this._symbologyCandidatesFetcher.fetch(o2, r2);
    f(r2);
    const p2 = l2.length === 0 ? o2 : o2.concat(l2);
    return { result: { candidates: this._elevationFilter.filter(i2, p2) } };
  }
  async updateTiles(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), f(t2), this._featureFetcher.tileSize = e2.tileSize, this._featureFetcher.tilesOfInterest = e2.tiles, this._featureFetcher.tileInfo = r$4(e2.tileInfo) ? j$4.fromJSON(e2.tileInfo) : null, C;
  }
  async refresh(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), f(t2), this._featureFetcher.refresh(), C;
  }
  async whenNotUpdating(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), f(t2), await j$5(() => !this.updatingExcludingEdits, t2), f(t2), C;
  }
  async getDebugInfo(e2, t2) {
    return f(t2), { result: this._featureFetcher.debugInfo };
  }
  async beginApplyEdits(e2, t2) {
    this._updatingHandles.addPromise(this._whenSetup.promise), f(t2);
    const i2 = A();
    return this._pendingApplyEdits.set(e2.id, i2), this._featureFetcher.applyEdits(i2.promise), this._editsUpdatingHandles.addPromise(i2.promise), C;
  }
  async endApplyEdits(e2, t2) {
    const i2 = this._pendingApplyEdits.get(e2.id);
    return i2 && i2.resolve(e2.edits), f(t2), C;
  }
  async notifyElevationSourceChange(e2, t2) {
    return this._elevationAligner.notifyElevationSourceChange(), C;
  }
  async notifySymbologyChange(e2, t2) {
    return C;
  }
  async setSymbologySnappingSupported(e2) {
    return this._symbologyCandidatesFetcher = n(e2, this._getSymbologyCandidates), C;
  }
  _updateFeatureFetcherConfiguration(e2) {
    this._featureFetcher.filter = r$4(e2.filter) ? x$3.fromJSON(e2.filter) : null, this._featureFetcher.customParameters = e2.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
e$2([y$1({ readOnly: true })], E.prototype, "updating", null), e$2([y$1({ readOnly: true })], E.prototype, "updatingExcludingEdits", null), e$2([y$1()], E.prototype, "_isInitializing", void 0), E = e$2([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], E);
const b = E;
function j(e2) {
  return { point: e2.point, distance: e2.distance, types: e2.types, query: r$4(e2.filter) ? e2.filter : { where: "1=1" } };
}
const C = { result: {} };
export { b as default };
