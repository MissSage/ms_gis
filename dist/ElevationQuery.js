var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { s as s$1, a7 as w, d2 as f$1, ap as u$1, ch as $, t as t$1, e3 as w$1, b4 as i, e4 as M, a as r, g as s$2, bz as _n, de as rn, dM as c$1, e5 as c$2, e6 as y$1, aL as w$2, cs as E$1, e7 as t$2, e8 as b, cq as u$2, cp as m$1, e9 as R$2 } from "./index.js";
import "vue";
const m = s$1.getLogger("esri.layers.support.ElevationSampler");
class c {
  queryElevation(e2) {
    return h(e2.clone(), this);
  }
  on() {
    return g$1;
  }
  projectIfRequired(e2, t2) {
    return f(e2, t2);
  }
}
class u extends c {
  constructor(e2, t2, n) {
    super(), this.tile = e2, this.noDataValue = n;
    const o = e2.tile.extent;
    this.extent = f$1(o, t2.spatialReference), this.extent.zmin = e2.zmin, this.extent.zmax = e2.zmax, this._aaExtent = o;
    const a = $(t2.spatialReference), r2 = t2.lodAt(e2.tile.level).resolution * a;
    this.demResolution = { min: r2, max: r2 };
  }
  get spatialReference() {
    return this.extent.spatialReference;
  }
  contains(e2) {
    const n = this.projectIfRequired(e2, this.spatialReference);
    return !t$1(n) && this.containsAt(n.x, n.y);
  }
  containsAt(e2, t2) {
    return w$1(this._aaExtent, e2, t2);
  }
  elevationAt(e2, t2) {
    if (!this.containsAt(e2, t2)) {
      const n = this.extent, s2 = `${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`;
      return m.warn("#elevationAt()", `Point used to sample elevation (${e2}, ${t2}) is outside of the sampler extent (${s2})`), this.noDataValue;
    }
    return i(this.tile.sample(e2, t2), this.noDataValue);
  }
}
class p extends c {
  constructor(e2, t2, n) {
    let s2;
    super(), typeof t2 == "number" ? (this.noDataValue = t2, s2 = null) : (s2 = t2, this.noDataValue = n), this.samplers = s2 ? e2.map((e3) => new u(e3, s2, this.noDataValue)) : e2;
    const o = this.samplers[0];
    if (o) {
      this.extent = o.extent.clone();
      const { min: e3, max: t3 } = o.demResolution;
      this.demResolution = { min: e3, max: t3 };
      for (let n2 = 1; n2 < this.samplers.length; n2++) {
        const e4 = this.samplers[n2];
        this.extent.union(e4.extent), this.demResolution.min = Math.min(this.demResolution.min, e4.demResolution.min), this.demResolution.max = Math.max(this.demResolution.max, e4.demResolution.max);
      }
    } else
      this.extent = f$1(u$1(), s2.spatialReference), this.demResolution = { min: 0, max: 0 };
  }
  get spatialReference() {
    return this.extent.spatialReference;
  }
  elevationAt(e2, t2) {
    for (const n of this.samplers)
      if (n.containsAt(e2, t2))
        return n.elevationAt(e2, t2);
    return m.warn("#elevationAt()", `Point used to sample elevation (${e2}, ${t2}) is outside of the sampler`), this.noDataValue;
  }
}
function h(e2, t2) {
  const n = f(e2, t2.spatialReference);
  if (!n)
    return null;
  switch (e2.type) {
    case "point":
      x$1(e2, n, t2);
      break;
    case "polyline":
      R$1(e2, n, t2);
      break;
    case "multipoint":
      d(e2, n, t2);
  }
  return e2;
}
function f(e2, n) {
  if (t$1(e2))
    return null;
  const s2 = e2.spatialReference;
  if (s2.equals(n))
    return e2;
  const i2 = M(e2, n);
  return i2 || m.error(`Cannot project geometry spatial reference (wkid:${s2.wkid}) to elevation sampler spatial reference (wkid:${n.wkid})`), i2;
}
function x$1(e2, t2, n) {
  e2.z = n.elevationAt(t2.x, t2.y);
}
function R$1(e2, t2, n) {
  y.spatialReference = t2.spatialReference;
  const s2 = e2.hasM && !e2.hasZ;
  for (let i2 = 0; i2 < e2.paths.length; i2++) {
    const o = e2.paths[i2], a = t2.paths[i2];
    for (let e3 = 0; e3 < o.length; e3++) {
      const t3 = o[e3], i3 = a[e3];
      y.x = i3[0], y.y = i3[1], s2 && (t3[3] = t3[2]), t3[2] = n.elevationAt(y.x, y.y);
    }
  }
  e2.hasZ = true;
}
function d(e2, t2, n) {
  y.spatialReference = t2.spatialReference;
  const s2 = e2.hasM && !e2.hasZ;
  for (let i2 = 0; i2 < e2.points.length; i2++) {
    const o = e2.points[i2], a = t2.points[i2];
    y.x = a[0], y.y = a[1], s2 && (o[3] = o[2]), o[2] = n.elevationAt(y.x, y.y);
  }
  e2.hasZ = true;
}
const y = new w(), g$1 = { remove() {
} };
class t {
  constructor({ values: t2, width: h2, height: i2, noDataValue: s2 }, a) {
    this.pixelData = t2, this.width = h2, this.height = i2, this.safeWidth = 0.99999999 * (h2 - 1), this.noDataValue = s2, this.dx = (h2 - 1) / (a[2] - a[0]), this.dy = (h2 - 1) / (a[3] - a[1]), this.x0 = a[0], this.y1 = a[3];
  }
}
class e {
  constructor(a, e2 = null) {
    if (this.tile = a, this.zmin = 0, this.zmax = 0, r(e2) && r(a)) {
      const t$12 = a.extent;
      this._samplerData = new t(e2, t$12), this.zmin = e2.minValue, this.zmax = e2.maxValue;
    }
  }
  sample(t2, i2) {
    if (t$1(this._samplerData))
      return;
    const { safeWidth: e2, width: r2, pixelData: o, noDataValue: n, dx: l, dy: m2, y1: h2, x0: f2 } = this._samplerData, p2 = s(m2 * (h2 - i2), 0, e2), u2 = s(l * (t2 - f2), 0, e2), c2 = Math.floor(p2), x2 = Math.floor(u2), D = c2 * r2 + x2, d2 = D + r2, z = o[D], y2 = o[d2], V = o[D + 1], _2 = o[d2 + 1];
    if (z !== n && y2 !== n && V !== n && _2 !== n) {
      const t3 = u2 - x2, a = z + (V - z) * t3;
      return a + (y2 + (_2 - y2) * t3 - a) * (p2 - c2);
    }
  }
}
function s(t2, a, i2) {
  return t2 < a ? a : t2 > i2 ? i2 : t2;
}
class g {
  async queryAll(e2, i2, s2) {
    if (!(e2 = s2 && s2.ignoreInvisibleLayers ? e2.filter((e3) => e3.visible) : e2.slice()).length)
      throw new s$2("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    const n = x.fromGeometry(i2);
    let o = false;
    s2 && s2.returnSampleInfo || (o = true);
    const l = __spreadProps(__spreadValues(__spreadValues({}, A), s2), { returnSampleInfo: true }), a = await this.query(e2[e2.length - 1], n, l), r2 = await this._queryAllContinue(e2, a, l);
    return r2.geometry = r2.geometry.export(), o && delete r2.sampleInfo, r2;
  }
  async query(e2, i2, s2) {
    if (!e2)
      throw new s$2("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!i2 || !(i2 instanceof x) && i2.type !== "point" && i2.type !== "multipoint" && i2.type !== "polyline")
      throw new s$2("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
    const n = __spreadValues(__spreadValues({}, A), s2), o = new R(e2, i2.spatialReference, n), l = n.signal;
    return await e2.load({ signal: l }), await this._createGeometryDescriptor(o, i2, l), await this._selectTiles(o, l), await this._populateElevationTiles(o, l), this._sampleGeometryWithElevation(o), this._createQueryResult(o, l);
  }
  async createSampler(e2, i2, s2) {
    if (!e2)
      throw new s$2("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!i2 || i2.type !== "extent")
      throw new s$2("elevation-query:invalid-extent", "Invalid or undefined extent");
    const n = __spreadValues(__spreadValues({}, A), s2);
    return this._createSampler(e2, i2, n);
  }
  async createSamplerAll(e2, i2, s2) {
    if (!(e2 = s2 && s2.ignoreInvisibleLayers ? e2.filter((e3) => e3.visible) : e2.slice()).length)
      throw new s$2("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    if (!i2 || i2.type !== "extent")
      throw new s$2("elevation-query:invalid-extent", "Invalid or undefined extent");
    const n = __spreadProps(__spreadValues(__spreadValues({}, A), s2), { returnSampleInfo: true }), o = await this._createSampler(e2[e2.length - 1], i2, n);
    return this._createSamplerAllContinue(e2, i2, o, n);
  }
  async _createSampler(e2, t2, i2, s2) {
    const n = i2.signal;
    await e2.load({ signal: n });
    const o = t2.spatialReference, l = e2.tileInfo.spatialReference;
    o.equals(l) || (await _n([{ source: o, dest: l }], { signal: n }), t2 = rn(t2, l));
    const a = new q(e2, t2, i2, s2);
    return await this._selectTiles(a, n), await this._populateElevationTiles(a, n), new p(a.elevationTiles, a.layer.tileInfo, a.options.noDataValue);
  }
  async _createSamplerAllContinue(e2, t2, i2, s2) {
    if (e2.pop(), !e2.length)
      return i2;
    const n = i2.samplers.map((e3) => c$1(e3.extent)), o = await this._createSampler(e2[e2.length - 1], t2, s2, n);
    if (o.samplers.length === 0)
      return i2;
    const l = i2.samplers.concat(o.samplers), a = new p(l, s2.noDataValue);
    return this._createSamplerAllContinue(e2, t2, a, s2);
  }
  async _queryAllContinue(e2, t2, s2) {
    const n = e2.pop(), o = t2.geometry.coordinates, l = t2.sampleInfo;
    c$2(l);
    const a = [], r2 = [];
    for (let i2 = 0; i2 < o.length; i2++) {
      const t3 = l[i2];
      t3.demResolution >= 0 ? t3.source || (t3.source = n) : e2.length && (a.push(o[i2]), r2.push(i2));
    }
    if (!e2.length || a.length === 0)
      return t2;
    const c2 = t2.geometry.clone(a), u2 = await this.query(e2[e2.length - 1], c2, s2), h2 = u2.sampleInfo;
    if (!h2)
      throw new Error("no sampleInfo");
    return r2.forEach((e3, t3) => {
      o[e3].z = u2.geometry.coordinates[t3].z, l[e3].demResolution = h2[t3].demResolution;
    }), this._queryAllContinue(e2, t2, s2);
  }
  async _createQueryResult(e2, t2) {
    const s2 = await e2.geometry.project(e2.outSpatialReference, t2);
    c$2(s2);
    const n = { geometry: s2.export(), noDataValue: e2.options.noDataValue };
    return e2.options.returnSampleInfo && (n.sampleInfo = this._extractSampleInfo(e2)), e2.geometry.coordinates.forEach((e3) => {
      e3.tile = null, e3.elevationTile = null;
    }), n;
  }
  async _createGeometryDescriptor(e2, i2, s2) {
    let n;
    const o = e2.layer.tileInfo.spatialReference;
    if (i2 instanceof x ? n = await i2.project(o, s2) : (await _n([{ source: i2.spatialReference, dest: o }], { signal: s2 }), n = rn(i2, o)), !n)
      throw new s$2("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${i2.spatialReference.wkid}' on an elevation service in '${o.wkid}'`);
    e2.geometry = x.fromGeometry(n);
  }
  async _selectTiles(e2, i2) {
    const s2 = e2.options.demResolution;
    if (e2.type === "geometry" && this._preselectOutsideLayerExtent(e2), typeof s2 == "number")
      this._selectTilesClosestResolution(e2);
    else if (s2 === "finest-contiguous")
      await this._selectTilesFinestContiguous(e2, i2);
    else {
      if (s2 !== "auto")
        throw new s$2("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${s2}', expected a number, "finest-contiguous" or "auto"`);
      await this._selectTilesAuto(e2, i2);
    }
  }
  _preselectOutsideLayerExtent(e$1) {
    if (t$1(e$1.layer.fullExtent))
      return;
    const t2 = new e(null);
    t2.sample = () => e$1.options.noDataValue, e$1.outsideExtentTile = t2;
    const i2 = e$1.layer.fullExtent;
    e$1.geometry.coordinates.forEach((e2) => {
      const s2 = e2.x, n = e2.y;
      (s2 < i2.xmin || s2 > i2.xmax || n < i2.ymin || n > i2.ymax) && (e2.elevationTile = t2);
    });
  }
  _selectTilesClosestResolution(e2) {
    const t2 = e2.layer.tileInfo, i2 = this._findNearestDemResolutionLODIndex(t2, e2.options.demResolution);
    e2.selectTilesAtLOD(i2);
  }
  _findNearestDemResolutionLODIndex(e2, t2) {
    const i2 = t2 / $(e2.spatialReference);
    let s2 = e2.lods[0], n = 0;
    for (let o = 1; o < e2.lods.length; o++) {
      const t3 = e2.lods[o];
      Math.abs(t3.resolution - i2) < Math.abs(s2.resolution - i2) && (s2 = t3, n = o);
    }
    return n;
  }
  async _selectTilesFinestContiguous(e2, t2) {
    const i2 = I(e2.layer.tileInfo, e2.options.minDemResolution);
    await this._selectTilesFinestContiguousAt(e2, i2, t2);
  }
  async _selectTilesFinestContiguousAt(e2, i2, s2) {
    const n = e2.layer;
    if (e2.selectTilesAtLOD(i2), i2 < 0)
      return;
    const a = n.tilemapCache, r2 = e2.getTilesToFetch();
    try {
      if (a)
        await y$1(Promise.all(r2.map((e3) => a.fetchAvailability(e3.level, e3.row, e3.col, { signal: s2 }))), s2);
      else if (await this._populateElevationTiles(e2, s2), !e2.allElevationTilesFetched())
        throw e2.clearElevationTiles(), new s$2("elevation-query:has-unavailable-tiles");
    } catch (c2) {
      w$2(c2), await this._selectTilesFinestContiguousAt(e2, i2 - 1, s2);
    }
  }
  async _populateElevationTiles(e$1, t2) {
    const i2 = e$1.getTilesToFetch(), s2 = {}, l = e$1.options.cache, r$1 = e$1.options.noDataValue, c2 = i2.map(async (i3) => {
      if (i3.id == null)
        return;
      const o = `${e$1.layer.uid}:${i3.id}:${r$1}`, a = r(l) ? l.get(o) : null, c3 = r(a) ? a : await e$1.layer.fetchTile(i3.level, i3.row, i3.col, { noDataValue: r$1, signal: t2 });
      r(l) && l.put(o, c3), s2[i3.id] = new e(i3, c3);
    });
    await y$1(E$1(c2), t2), e$1.populateElevationTiles(s2);
  }
  async _selectTilesAuto(t2, i2) {
    this._selectTilesAutoFinest(t2), this._reduceTilesForMaximumRequests(t2);
    const s2 = t2.layer.tilemapCache;
    if (!s2)
      return this._selectTilesAutoPrefetchUpsample(t2, i2);
    const n = t2.getTilesToFetch(), a = {}, r2 = n.map(async (t3) => {
      const n2 = new t$2(null, 0, 0, 0, u$1()), o = await b(s2.fetchAvailabilityUpsample(t3.level, t3.row, t3.col, n2, { signal: i2 }));
      o.ok !== false ? t3.id != null && (a[t3.id] = n2) : w$2(o.error);
    });
    await y$1(Promise.all(r2), i2), t2.remapTiles(a);
  }
  _reduceTilesForMaximumRequests(e2) {
    const t2 = e2.layer.tileInfo;
    let i2 = 0;
    const s2 = {}, n = (e3) => {
      e3.id != null && (e3.id in s2 ? s2[e3.id]++ : (s2[e3.id] = 1, i2++));
    }, o = (e3) => {
      if (e3.id == null)
        return;
      const t3 = s2[e3.id];
      t3 === 1 ? (delete s2[e3.id], i2--) : s2[e3.id] = t3 - 1;
    };
    e2.forEachTileToFetch(n, o);
    let l = true;
    for (; l && (l = false, e2.forEachTileToFetch((s3) => {
      i2 <= e2.options.maximumAutoTileRequests || (o(s3), t2.upsampleTile(s3) && (l = true), n(s3));
    }, o), l); )
      ;
  }
  _selectTilesAutoFinest(e2) {
    const t2 = I(e2.layer.tileInfo, e2.options.minDemResolution);
    e2.selectTilesAtLOD(t2, e2.options.maximumAutoTileRequests);
  }
  async _selectTilesAutoPrefetchUpsample(e2, t2) {
    const i2 = e2.layer.tileInfo;
    await this._populateElevationTiles(e2, t2);
    let s2 = false;
    e2.forEachTileToFetch((e3, t3) => {
      i2.upsampleTile(e3) ? s2 = true : t3();
    }), s2 && await this._selectTilesAutoPrefetchUpsample(e2, t2);
  }
  _sampleGeometryWithElevation(e2) {
    e2.geometry.coordinates.forEach((t2) => {
      const i2 = t2.elevationTile;
      let s2 = e2.options.noDataValue;
      if (i2) {
        const e3 = i2.sample(t2.x, t2.y);
        r(e3) ? s2 = e3 : t2.elevationTile = null;
      }
      t2.z = s2;
    });
  }
  _extractSampleInfo(e2) {
    const t2 = e2.layer.tileInfo, i2 = $(t2.spatialReference);
    return e2.geometry.coordinates.map((s2) => {
      let n = -1;
      if (s2.elevationTile && s2.elevationTile !== e2.outsideExtentTile) {
        n = t2.lodAt(s2.elevationTile.tile.level).resolution * i2;
      }
      return { demResolution: n };
    });
  }
}
class x {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e2) {
    const t2 = new x();
    return t2.geometry = this.geometry, t2.spatialReference = this.spatialReference, t2.coordinates = e2 || this.coordinates.map((e3) => e3.clone()), t2._exporter = this._exporter, t2;
  }
  async project(e2, t2) {
    if (this.spatialReference.equals(e2))
      return this.clone();
    await _n([{ source: this.spatialReference, dest: e2 }], { signal: t2 });
    const i2 = new u$2({ spatialReference: this.spatialReference, points: this.coordinates.map((e3) => [e3.x, e3.y]) }), s2 = rn(i2, e2);
    if (!s2)
      return null;
    const n = this.coordinates.map((e3, t3) => {
      const i3 = e3.clone(), n2 = s2.points[t3];
      return i3.x = n2[0], i3.y = n2[1], i3;
    }), o = this.clone(n);
    return o.spatialReference = e2, o;
  }
  static fromGeometry(e2) {
    const t2 = new x();
    if (t2.geometry = e2, t2.spatialReference = e2.spatialReference, e2 instanceof x)
      t2.coordinates = e2.coordinates.map((e3) => e3.clone()), t2._exporter = (t3, i2) => {
        const s2 = e2.clone(t3);
        return s2.spatialReference = i2, s2;
      };
    else
      switch (e2.type) {
        case "point": {
          const i2 = e2, { hasZ: s2, hasM: n } = i2;
          t2.coordinates = s2 && n ? [new _(i2.x, i2.y, i2.z, i2.m)] : s2 ? [new _(i2.x, i2.y, i2.z)] : n ? [new _(i2.x, i2.y, null, i2.m)] : [new _(i2.x, i2.y)], t2._exporter = (t3, i3) => e2.hasM ? new w(t3[0].x, t3[0].y, t3[0].z, t3[0].m, i3) : new w(t3[0].x, t3[0].y, t3[0].z, i3);
          break;
        }
        case "multipoint": {
          const i2 = e2, { hasZ: s2, hasM: n } = i2;
          t2.coordinates = s2 && n ? i2.points.map((e3) => new _(e3[0], e3[1], e3[2], e3[3])) : s2 ? i2.points.map((e3) => new _(e3[0], e3[1], e3[2])) : n ? i2.points.map((e3) => new _(e3[0], e3[1], null, e3[2])) : i2.points.map((e3) => new _(e3[0], e3[1])), t2._exporter = (t3, i3) => e2.hasM ? new u$2({ points: t3.map((e3) => [e3.x, e3.y, e3.z, e3.m]), hasZ: true, hasM: true, spatiaReference: i3 }) : new u$2(t3.map((e3) => [e3.x, e3.y, e3.z]), i3);
          break;
        }
        case "polyline": {
          const i2 = e2, s2 = [], n = [], { hasZ: o, hasM: l } = e2;
          let a = 0;
          for (const e3 of i2.paths)
            if (n.push([a, a + e3.length]), a += e3.length, o && l)
              for (const t3 of e3)
                s2.push(new _(t3[0], t3[1], t3[2], t3[3]));
            else if (o)
              for (const t3 of e3)
                s2.push(new _(t3[0], t3[1], t3[2]));
            else if (l)
              for (const t3 of e3)
                s2.push(new _(t3[0], t3[1], null, t3[2]));
            else
              for (const t3 of e3)
                s2.push(new _(t3[0], t3[1]));
          t2.coordinates = s2, t2._exporter = (t3, i3) => {
            const s3 = e2.hasM ? t3.map((e3) => [e3.x, e3.y, e3.z, e3.m]) : t3.map((e3) => [e3.x, e3.y, e3.z]), o2 = n.map((e3) => s3.slice(e3[0], e3[1]));
            return new m$1({ paths: o2, hasM: e2.hasM, hasZ: true, spatialReference: i3 });
          };
          break;
        }
      }
    return t2;
  }
}
class _ {
  constructor(e2, t2, i2 = null, s2 = null, n = null, o = null) {
    this.x = e2, this.y = t2, this.z = i2, this.m = s2, this.tile = n, this.elevationTile = o;
  }
  clone() {
    return new _(this.x, this.y, this.z, this.m);
  }
}
class E {
  constructor(e2, t2) {
    this.layer = e2, this.options = t2;
  }
}
class R extends E {
  constructor(e2, t2, i2) {
    super(e2, i2), this.outSpatialReference = t2, this.type = "geometry";
  }
  selectTilesAtLOD(e2) {
    if (e2 < 0)
      this.geometry.coordinates.forEach((e3) => {
        e3.tile = null;
      });
    else {
      const t2 = this.layer.tileInfo, i2 = t2.lods[e2].level;
      this.geometry.coordinates.forEach((e3) => {
        e3.tile = t2.tileAt(i2, e3.x, e3.y);
      });
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e2) => !e2.elevationTile);
  }
  clearElevationTiles() {
    for (const e2 of this.geometry.coordinates)
      e2.elevationTile !== this.outsideExtentTile && (e2.elevationTile = null);
  }
  populateElevationTiles(e2) {
    var _a;
    for (const t2 of this.geometry.coordinates)
      !t2.elevationTile && ((_a = t2.tile) == null ? void 0 : _a.id) && (t2.elevationTile = e2[t2.tile.id]);
  }
  remapTiles(e2) {
    var _a;
    for (const t2 of this.geometry.coordinates) {
      const i2 = (_a = t2.tile) == null ? void 0 : _a.id;
      t2.tile = i2 ? e2[i2] : null;
    }
  }
  getTilesToFetch() {
    var _a;
    const e2 = {}, t2 = [];
    for (const i2 of this.geometry.coordinates) {
      const s2 = i2.tile;
      if (!s2)
        continue;
      const n = (_a = i2.tile) == null ? void 0 : _a.id;
      i2.elevationTile || !n || e2[n] || (e2[n] = s2, t2.push(s2));
    }
    return t2;
  }
  forEachTileToFetch(e2) {
    for (const t2 of this.geometry.coordinates)
      t2.tile && !t2.elevationTile && e2(t2.tile, () => {
        t2.tile = null;
      });
  }
}
class q extends E {
  constructor(e2, t2, i2, s2) {
    super(e2, i2), this.type = "extent", this.elevationTiles = [], this._candidateTiles = [], this._fetchedCandidates = new Set(), this.extent = t2.intersection(e2.fullExtent), this.maskExtents = s2;
  }
  selectTilesAtLOD(e2, t2) {
    const i2 = this._maximumLodForRequests(t2), s2 = Math.min(i2, e2);
    s2 < 0 ? this._candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(s2);
  }
  _maximumLodForRequests(e2) {
    const t2 = this.layer.tileInfo;
    if (!e2)
      return t2.lods.length - 1;
    const i2 = this.extent;
    if (t$1(i2))
      return -1;
    for (let s2 = t2.lods.length - 1; s2 >= 0; s2--) {
      const n = t2.lods[s2], o = n.resolution * t2.size[0], l = n.resolution * t2.size[1];
      if (Math.ceil(i2.width / o) * Math.ceil(i2.height / l) <= e2)
        return s2;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this._candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    this.elevationTiles.length = 0, this._fetchedCandidates.clear();
  }
  populateElevationTiles(e2) {
    for (const t2 of this._candidateTiles) {
      const i2 = t2.id && e2[t2.id];
      i2 && (this._fetchedCandidates.add(t2), this.elevationTiles.push(i2));
    }
  }
  remapTiles(e2) {
    this._candidateTiles = this._uniqueNonOverlappingTiles(this._candidateTiles.map((t2) => e2[t2.id]));
  }
  getTilesToFetch() {
    return this._candidateTiles;
  }
  forEachTileToFetch(e2, t2) {
    const i2 = this._candidateTiles;
    this._candidateTiles = [], i2.forEach((i3) => {
      if (this._fetchedCandidates.has(i3))
        return void (t2 && t2(i3));
      let s2 = false;
      e2(i3, () => s2 = true), s2 ? t2 && t2(i3) : this._candidateTiles.push(i3);
    }), this._candidateTiles = this._uniqueNonOverlappingTiles(this._candidateTiles, t2);
  }
  _uniqueNonOverlappingTiles(e2, t2) {
    const i2 = {}, s2 = [];
    for (const o of e2) {
      const e3 = o.id;
      e3 && !i2[e3] ? (i2[e3] = o, s2.push(o)) : t2 && t2(o);
    }
    const n = s2.sort((e3, t3) => e3.level - t3.level);
    return n.filter((e3, i3) => {
      for (let s3 = 0; s3 < i3; s3++) {
        const i4 = n[s3].extent;
        if (i4 && e3.extent && R$2(i4, e3.extent))
          return t2 && t2(e3), false;
      }
      return true;
    });
  }
  _selectCandidateTilesCoveringExtentAt(e2) {
    this._candidateTiles.length = 0;
    const t2 = this.extent;
    if (t$1(t2))
      return;
    const i2 = this.layer.tileInfo, n = i2.lods[e2], o = i2.tileAt(n.level, t2.xmin, t2.ymin), l = o.extent;
    if (t$1(l))
      return;
    const a = n.resolution * i2.size[0], r2 = n.resolution * i2.size[1], c2 = Math.ceil((t2.xmax - l[0]) / a), u2 = Math.ceil((t2.ymax - l[1]) / r2);
    for (let s2 = 0; s2 < u2; s2++)
      for (let e3 = 0; e3 < c2; e3++) {
        const t3 = new t$2(null, o.level, o.row - s2, o.col + e3);
        i2.updateTileInfo(t3), this._tileIsMasked(t3) || this._candidateTiles.push(t3);
      }
  }
  _tileIsMasked(e2) {
    return !!this.maskExtents && this.maskExtents.some((t2) => e2.extent && R$2(t2, e2.extent));
  }
}
function I(e2, t2 = 0) {
  let i2 = e2.lods.length - 1;
  if (t2 > 0) {
    const s2 = t2 / $(e2.spatialReference), n = e2.lods.findIndex((e3) => e3.resolution < s2);
    n === 0 ? i2 = 0 : n > 0 && (i2 = n - 1);
  }
  return i2;
}
const A = { maximumAutoTileRequests: 20, noDataValue: 0, returnSampleInfo: false, demResolution: "auto", minDemResolution: 0 };
export { g as ElevationQuery, x as GeometryDescriptor, I as getFinestLodIndex };
