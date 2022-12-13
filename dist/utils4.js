import { ck as s, eB as l, aN as u, dF as v$1, c0 as v$2, t, at as y, aM as f$1, bB as E$1, df as An, eH as X, eI as o, bs as k$1, ei as c, aA as t$1, a as r, ax as ht, ay as at, eJ as It, eK as F$1, az as $, eL as D, eM as O$1 } from "./index.js";
import { f, g } from "./projectionSupport.js";
const O = new s({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" }), F = Object.freeze({}), N = new t$1(), _ = new t$1(), G = new t$1(), P = { esriGeometryPoint: F$1, esriGeometryPolyline: $, esriGeometryPolygon: D, esriGeometryMultipoint: O$1 };
function b(e, i, r2, n = e.hasZ, o2 = e.hasM) {
  if (t(i))
    return null;
  const s2 = e.hasZ && n, a = e.hasM && o2;
  if (r2) {
    const t2 = at(G, i, e.hasZ, e.hasM, "esriGeometryPoint", r2, n, o2);
    return F$1(t2, s2, a);
  }
  return F$1(i, s2, a);
}
function v(e, r$1, n, o2, s2, a, l2 = r$1, m = n) {
  var _a, _b, _c, _d, _e, _f;
  const f2 = r$1 && l2, u2 = n && m, c2 = r(o2) ? "coords" in o2 ? o2 : o2.geometry : null;
  if (t(c2))
    return null;
  if (s2) {
    let t2 = ht(_, c2, r$1, n, e, s2, l2, m);
    return a && (t2 = at(G, t2, f2, u2, e, a)), (_b = (_a = P[e]) == null ? void 0 : _a.call(P, t2, f2, u2)) != null ? _b : null;
  }
  if (a) {
    const t2 = at(G, c2, r$1, n, e, a, l2, m);
    return (_d = (_c = P[e]) == null ? void 0 : _c.call(P, t2, f2, u2)) != null ? _d : null;
  }
  return It(N, c2, r$1, n, l2, m), (_f = (_e = P[e]) == null ? void 0 : _e.call(P, N, f2, u2)) != null ? _f : null;
}
async function z(e, t2, i) {
  const { outFields: r2, orderByFields: n, groupByFieldsForStatistics: o2, outStatistics: s2 } = e;
  if (r2)
    for (let a = 0; a < r2.length; a++)
      r2[a] = r2[a].trim();
  if (n)
    for (let a = 0; a < n.length; a++)
      n[a] = n[a].trim();
  if (o2)
    for (let a = 0; a < o2.length; a++)
      o2[a] = o2[a].trim();
  if (s2)
    for (let a = 0; a < s2.length; a++)
      s2[a].onStatisticField && (s2[a].onStatisticField = s2[a].onStatisticField.trim());
  return e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference), J(e, t2, i);
}
async function J(e, i, r2) {
  var _a;
  if (!e)
    return null;
  let { where: n } = e;
  if (e.where = n = n && n.trim(), (!n || /^1 *= *1$/.test(n) || i && i === n) && (e.where = null), !e.geometry)
    return e;
  let a = await Z(e);
  if (e.distance = 0, e.units = null, e.spatialRel === "esriSpatialRelEnvelopeIntersects") {
    const { spatialReference: t2 } = e.geometry;
    a = l(a), a.spatialReference = t2;
  }
  if (a) {
    await f(a.spatialReference, r2), a = B(a, r2);
    const i2 = (await v$1(v$2(a)))[0];
    if (t(i2))
      throw F;
    const n2 = "quantizationParameters" in e && ((_a = e.quantizationParameters) == null ? void 0 : _a.tolerance) || "maxAllowableOffset" in e && e.maxAllowableOffset || 0, o2 = n2 && A(a, r2) ? { densificationStep: 8 * n2 } : void 0, l2 = i2.toJSON(), m = await g(l2, l2.spatialReference, r2, o2);
    if (!m)
      throw F;
    m.spatialReference = r2, e.geometry = m;
  }
  return e;
}
function A(e, t2) {
  if (!e)
    return false;
  const i = e.spatialReference;
  return (u(e) || y(e) || f$1(e)) && !E$1(i, t2) && !An(i, t2);
}
function B(e, t2) {
  const i = e.spatialReference;
  return A(e, t2) && u(e) ? { spatialReference: i, rings: [[[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]] } : e;
}
async function Z(e) {
  const { distance: t2, units: i } = e, n = e.geometry;
  if (t2 == null || "vertexAttributes" in n)
    return n;
  const o$1 = n.spatialReference, s2 = i ? O.fromJSON(i) : X(o$1), a = o$1 && (o(o$1) || k$1(o$1)) ? n : await f(o$1, c).then(() => g(n, c));
  return (await q())(a.spatialReference, a, t2, s2);
}
async function q() {
  return (await import("./geometryEngineJSON2.js")).geodesicBuffer;
}
function E(e) {
  return e && k in e ? JSON.parse(JSON.stringify(e, C)) : e;
}
const k = "_geVersion", C = (e, t2) => e !== k ? t2 : void 0;
export { E, F, J, b, v, z };
