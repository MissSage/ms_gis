var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { d3 as j$1, h8 as m, g as s, aX as y, U, Y as a, fM as s$1, bV as e, R as l$1, s as s$2, v, m as j$2, h9 as y$1, bU as p, ds as I, eP as l$2, $ as e$1, a0 as y$2, cn as s$3, a1 as n$2, Z as m$1, cz as w, w as a$1, e7 as t } from "./index.js";
const r = { type: j$1, json: { origins: { service: { read: { source: ["tileInfo", "minScale", "maxScale", "minLOD", "maxLOD"], reader: n$1 } } } } };
function n$1(r2, n2, l2, o2) {
  if (!r2)
    return null;
  const { minScale: i, maxScale: t2, minLOD: m2, maxLOD: s2 } = n2;
  if (m2 != null && s2 != null)
    return o2 && o2.ignoreMinMaxLOD ? j$1.fromJSON(r2) : j$1.fromJSON(__spreadProps(__spreadValues({}, r2), { lods: r2.lods.filter(({ level: e2 }) => e2 != null && e2 >= m2 && e2 <= s2) }));
  if (i !== 0 && t2 !== 0) {
    const n3 = (e2) => Math.round(1e4 * e2) / 1e4, l3 = i ? n3(i) : 1 / 0, o3 = t2 ? n3(t2) : -1 / 0;
    return j$1.fromJSON(__spreadProps(__spreadValues({}, r2), { lods: r2.lods.filter((e2) => {
      const r3 = n3(e2.scale);
      return r3 <= l3 && r3 >= o3;
    }) }));
  }
  return j$1.fromJSON(r2);
}
class l {
  constructor() {
    this.location = { left: 0, top: 0, width: 0, height: 0 }, this._allAvailability = "unknown", this.byteSize = 40;
  }
  getAvailability(t2, i) {
    if (this._allAvailability !== "unknown")
      return this._allAvailability;
    const e2 = (t2 - this.location.top) * this.location.width + (i - this.location.left), a2 = e2 % 8, l2 = e2 >> 3, o2 = this._tileAvailabilityBitSet;
    return l2 < 0 || l2 > o2.length ? "unknown" : o2[l2] & 1 << a2 ? "available" : "unavailable";
  }
  _updateFromData(t2) {
    const i = this.location.width, e2 = this.location.height;
    let a2 = true, l2 = true;
    const o2 = Math.ceil(i * e2 / 8), n2 = new Uint8Array(o2);
    let r2 = 0;
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i2 = s2 % 8;
      t2[s2] ? (l2 = false, n2[r2] |= 1 << i2) : a2 = false, i2 === 7 && ++r2;
    }
    l2 ? this._allAvailability = "unavailable" : a2 ? this._allAvailability = "available" : (this._allAvailability = "unknown", this._tileAvailabilityBitSet = n2, this.byteSize += n2.length);
  }
  static fromDefinition(a2, o2) {
    const r2 = a2.service.request || U, { row: s$12, col: h, width: c, height: m$12 } = a2, d = { query: { f: "json" } };
    return o2 = o2 ? __spreadValues(__spreadValues({}, d), o2) : d, r2(n(a2), o2).then((t2) => t2.data).catch((t2) => {
      if (t2 && t2.details && t2.details.httpStatus === 422)
        return { location: { top: s$12, left: h, width: c, height: m$12 }, valid: true, data: m(c * m$12, 0) };
      throw t2;
    }).then((t2) => {
      if (t2.location && (t2.location.top !== s$12 || t2.location.left !== h || t2.location.width !== c || t2.location.height !== m$12))
        throw new s("tilemap:location-mismatch", "Tilemap response for different location than requested", { response: t2, definition: { top: s$12, left: h, width: c, height: m$12 } });
      return l.fromJSON(t2);
    });
  }
  static fromJSON(t2) {
    l._validateJSON(t2);
    const i = new l();
    return i.location = Object.freeze(y(t2.location)), i._updateFromData(t2.data), Object.freeze(i);
  }
  static _validateJSON(t2) {
    if (!t2 || !t2.location)
      throw new s("tilemap:missing-location", "Location missing from tilemap response");
    if (t2.valid === false)
      throw new s("tilemap:invalid", "Tilemap response was marked as invalid");
    if (!t2.data)
      throw new s("tilemap:missing-data", "Data missing from tilemap response");
    if (!Array.isArray(t2.data))
      throw new s("tilemap:data-mismatch", "Data must be an array of numbers");
    if (t2.data.length !== t2.location.width * t2.location.height)
      throw new s("tilemap:data-mismatch", "Number of data items does not match width/height of tilemap");
  }
}
function o(t2) {
  return `${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
}
function n(t2) {
  let i;
  if (t2.service.type === "vector-tile")
    i = `${t2.service.url}/tilemap/${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
  else {
    const e3 = t2.service.tileServers;
    i = `${e3 && e3.length ? e3[t2.row % e3.length] : t2.service.url}/tilemap/${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
  }
  const e2 = t2.service.query;
  return e2 && (i = `${i}?${e2}`), i;
}
var j;
let z = j = class extends a(m$1) {
  constructor(e2) {
    super(e2), this._pendingTilemapRequests = {}, this._availableLevels = {}, this.levels = 5, this.cacheByteSize = 2 * s$1.MEGABYTES, this.request = U, this._prefetchingEnabled = true;
  }
  initialize() {
    this._tilemapCache = new e(this.cacheByteSize), this.addHandles([l$1(() => {
      const { layer: e2 } = this;
      return [e2 == null ? void 0 : e2.parsedUrl, e2 == null ? void 0 : e2.tileServers, e2 == null ? void 0 : e2.apiKey, e2 == null ? void 0 : e2.customParameters];
    }, () => this._initializeTilemapDefinition()), l$1(() => {
      var _a, _b;
      return (_b = (_a = this.layer) == null ? void 0 : _a.tileInfo) == null ? void 0 : _b.lods;
    }, (e2) => this._initializeAvailableLevels(e2), w)]), this._initializeTilemapDefinition();
  }
  castLevels(e2) {
    return e2 <= 2 ? (s$2.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ", e2), 3) : e2;
  }
  get size() {
    return 1 << this.levels;
  }
  fetchTilemap(e2, t2, i, r2) {
    if (!this._availableLevels[e2])
      return Promise.reject(new s("tilemap-cache:level-unavailable", `Level ${e2} is unavailable in the service`));
    const l$12 = this._tmpTilemapDefinition, a2 = this._tilemapFromCache(e2, t2, i, l$12);
    if (a2)
      return Promise.resolve(a2);
    const o$1 = r2 && r2.signal;
    return r2 = __spreadProps(__spreadValues({}, r2), { signal: null }), new Promise((e3, t3) => {
      v(o$1, () => t3(a$1()));
      const i2 = o(l$12);
      let s2 = this._pendingTilemapRequests[i2];
      if (!s2) {
        s2 = l.fromDefinition(l$12, r2).then((e5) => (this._tilemapCache.put(i2, e5, e5.byteSize), e5));
        const e4 = () => delete this._pendingTilemapRequests[i2];
        this._pendingTilemapRequests[i2] = s2, s2.then(e4, e4);
      }
      s2.then(e3, t3);
    });
  }
  getAvailability(e2, t2, i) {
    if (!this._availableLevels[e2])
      return "unavailable";
    const r2 = this._tilemapFromCache(e2, t2, i, this._tmpTilemapDefinition);
    return r2 ? r2.getAvailability(t2, i) : "unknown";
  }
  fetchAvailability(e2, t2, i, r2) {
    return this._availableLevels[e2] ? this.fetchTilemap(e2, t2, i, r2).catch((e3) => e3).then((r3) => {
      if (r3 instanceof l) {
        const l2 = r3.getAvailability(t2, i);
        if (l2 === "unavailable")
          throw new s("tile-map:tile-unavailable", "Tile is not available", { level: e2, row: t2, col: i });
        return l2;
      }
      if (j$2(r3))
        throw r3;
      return "unknown";
    }) : Promise.reject(new s("tilemap-cache:level-unavailable", `Level ${e2} is unavailable in the service`));
  }
  fetchAvailabilityUpsample(e2, t2, i, r2, s2) {
    r2.level = e2, r2.row = t2, r2.col = i;
    const l2 = this.layer.tileInfo;
    l2.updateTileInfo(r2);
    const a2 = this.fetchAvailability(e2, t2, i, s2).catch((e3) => {
      if (j$2(e3))
        throw e3;
      if (l2.upsampleTile(r2))
        return this.fetchAvailabilityUpsample(r2.level, r2.row, r2.col, r2);
      throw e3;
    });
    return this._fetchAvailabilityUpsamplePrefetch(r2.id, e2, t2, i, s2, a2), a2;
  }
  async _fetchAvailabilityUpsamplePrefetch(e2, t$1, i, r2, s2, l2) {
    if (!this._prefetchingEnabled)
      return;
    const a2 = `prefetch-${e2}`;
    if (this.handles.has(a2))
      return;
    const o2 = new AbortController();
    l2.then(() => o2.abort(), () => o2.abort());
    let n2 = false;
    const c = { remove() {
      n2 || (n2 = true, o2.abort());
    } };
    if (this.handles.add(c, a2), await y$1(10, o2.signal).catch(() => {
    }), n2 || (n2 = true, this.handles.remove(a2)), p(o2))
      return;
    const h = new t(e2, t$1, i, r2), m2 = __spreadProps(__spreadValues({}, s2), { signal: o2.signal }), f = this.layer.tileInfo;
    for (let p2 = 0; j._prefetches.length < j._maxPrefetch && f.upsampleTile(h); ++p2) {
      const e3 = this.fetchAvailability(h.level, h.row, h.col, m2);
      j._prefetches.push(e3);
      const t2 = () => {
        j._prefetches.removeUnordered(e3);
      };
      e3.then(t2, t2);
    }
  }
  _initializeTilemapDefinition() {
    var _a;
    if (!this.layer.parsedUrl)
      return;
    const { parsedUrl: e2, apiKey: t2, customParameters: i } = this.layer;
    this._tilemapCache.clear(), this._tmpTilemapDefinition = { service: { url: e2.path, query: I(__spreadProps(__spreadValues(__spreadValues({}, e2.query), i), { token: t2 != null ? t2 : (_a = e2.query) == null ? void 0 : _a.token })), tileServers: this.layer.tileServers, request: this.request, type: this.layer.type }, width: this.size, height: this.size, level: 0, row: 0, col: 0 };
  }
  _tilemapFromCache(e2, t2, i, r2) {
    r2.level = e2, r2.row = t2 - t2 % this.size, r2.col = i - i % this.size;
    const s2 = o(r2);
    return this._tilemapCache.get(s2);
  }
  _initializeAvailableLevels(e2) {
    this._availableLevels = {}, e2 && e2.forEach((e3) => this._availableLevels[e3.level] = true);
  }
  get test() {
    const e2 = this;
    return { get prefetchingEnabled() {
      return e2._prefetchingEnabled;
    }, set prefetchingEnabled(t2) {
      e2._prefetchingEnabled = t2;
    }, hasTilemap: (t2, i, r2) => !!e2._tilemapFromCache(t2, i, r2, e2._tmpTilemapDefinition) };
  }
};
z._maxPrefetch = 4, z._prefetches = new l$2({ initialSize: j._maxPrefetch }), e$1([y$2({ constructOnly: true, type: Number })], z.prototype, "levels", void 0), e$1([s$3("levels")], z.prototype, "castLevels", null), e$1([y$2({ readOnly: true, type: Number })], z.prototype, "size", null), e$1([y$2({ constructOnly: true, type: Number })], z.prototype, "cacheByteSize", void 0), e$1([y$2({ constructOnly: true })], z.prototype, "layer", void 0), e$1([y$2({ constructOnly: true })], z.prototype, "request", void 0), z = j = e$1([n$2("esri.layers.support.TilemapCache")], z);
export { n$1 as n, r, z };
