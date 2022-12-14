import { k1 as e$1, O as L, r as r$3, x as t$1, dY as r$4, hK as r$5, aX as f, o as y, jJ as c$3 } from "./index.js";
function r$2(e2 = false, t2) {
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
    return r$3(n2) && n2.mode === "absolute-height" && !n2.featureExpressionInfo ? (this._alignAbsoluteElevationCandidates(e2, n2), e2) : this._alignComputedElevationCandidates(e2, t2);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e2, t2) {
    const { offset: s2, unit: o2 } = t2;
    if (t$1(s2))
      return;
    const i2 = s2 * (r$4(o2 != null ? o2 : "meters") / this._metersPerVerticalUnit);
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
      r$5(n2, o2.objectId, p).push(o2);
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
    const i2 = u(e2, t2), a2 = this._alignmentsCache.get(i2);
    r$3(a2) ? o2.push(new d(t2, a2)) : n2.push(t2);
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
        const n3 = u(r2, s3), o3 = t2[i2++];
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
function u(e2, { x: t2, y: s2, z: n2 }) {
  return `${e2}-${t2}-${s2}-${n2 != null ? n2 : 0}}`;
}
function p() {
  return [];
}
class t {
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
          o(r2, n2, e2);
          continue;
      }
    return t2;
  }
}
function e(t2) {
  return t2.distance <= 1;
}
function r$1(e2 = false) {
  return e2 ? new n$1() : new t();
}
function c$1(t2, n2, { x: e2, y: r2, z: c2 }) {
  const { start: o2, end: s2, target: a2 } = t2;
  t2.draped || i$1(a2, n2, o2, s2);
  const u2 = (n2.x - a2.x) / e2, d2 = (n2.y - a2.y) / r2, f2 = (n2.z - a2.z) / c2;
  t2.distance = Math.sqrt(u2 * u2 + d2 * d2 + f2 * f2);
}
function i$1(t2, n2, e2, r2) {
  const c2 = r2.x - e2.x, i2 = r2.y - e2.y, o2 = r2.z - e2.z, s2 = c2 * c2 + i2 * i2 + o2 * o2, a2 = (n2.x - e2.x) * c2 + (n2.y - e2.y) * i2 + o2 * (n2.z - e2.z), u2 = Math.min(1, Math.max(0, a2 / s2)), d2 = e2.x + c2 * u2, f2 = e2.y + i2 * u2, x = e2.z + o2 * u2;
  t2.x = d2, t2.y = f2, t2.z = x;
}
function o(t2, n2, { x: e2, y: r2, z: c2 }) {
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
const r = 1024;
class i {
  constructor(t2) {
    this._getSymbologyCandidates = t2, this._candidatesCache = new e$1(r), this._cacheVersion = 0;
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
    const f$1 = [], { length: g } = h2;
    for (let s2 = 0; s2 < g; ++s2) {
      const e3 = h2[s2], o3 = a(n2[d2[s2]]), c3 = r2.get(o3);
      c3.push(e3), r2.put(o3, c3, c3.length), f$1.push(y(e3));
    }
    return c2.concat(f$1);
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
export { r$1 as a, n, r$2 as r };
