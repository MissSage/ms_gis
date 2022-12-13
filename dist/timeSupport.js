import { eD as o$1, eE as Z, at as y, cd as J, aA as t$2, aN as u$1, eF as r$1, eG as i, g as s, bA as I$1, ar as c$1 } from "./index.js";
import { f } from "./projectionSupport.js";
import { v as v$1 } from "./utils4.js";
function n$2(n2) {
  return n2 === "mesh" ? o$1 : Z(n2);
}
function n$1(n2, t2) {
  return n2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
function t$1(n2, t2, r2, e2) {
  return o(n2, t2, r2, e2.coords[0], e2.coords[1]);
}
function r(t2, r2, e2, c2, u2, f2) {
  const s2 = n$1(u2, f2), { coords: i2, lengths: l2 } = c2;
  if (!l2)
    return false;
  for (let n2 = 0, d = 0; n2 < l2.length; n2++, d += s2)
    if (!o(t2, r2, e2, i2[d], i2[d + 1]))
      return false;
  return true;
}
function o(t2, r2, o2, c2, u2) {
  if (!t2)
    return false;
  const f2 = n$1(r2, o2), { coords: s2, lengths: i2 } = t2;
  let l2 = false, d = 0;
  for (const n2 of i2)
    l2 = e$1(l2, s2, f2, d, n2, c2, u2), d += n2 * f2;
  return l2;
}
function e$1(n2, t2, r2, o2, e2, c2, u2) {
  let f2 = n2, s2 = o2;
  for (let i2 = o2, l2 = o2 + e2 * r2; i2 < l2; i2 += r2) {
    s2 = i2 + r2, s2 === l2 && (s2 = o2);
    const n3 = t2[i2], e3 = t2[i2 + 1], d = t2[s2], g2 = t2[s2 + 1];
    (e3 < u2 && g2 >= u2 || g2 < u2 && e3 >= u2) && n3 + (u2 - e3) / (g2 - e3) * (d - n3) < c2 && (f2 = !f2);
  }
  return f2;
}
const c = "feature-store:unsupported-query", R = { esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "intersects", esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: null }, S = { spatialRelationship: { esriSpatialRelIntersects: true, esriSpatialRelContains: true, esriSpatialRelWithin: true, esriSpatialRelCrosses: true, esriSpatialRelDisjoint: true, esriSpatialRelTouches: true, esriSpatialRelOverlaps: true, esriSpatialRelEnvelopeIntersects: true, esriSpatialRelIndexIntersects: false, esriSpatialRelRelation: false }, queryGeometry: { esriGeometryPoint: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: true }, layerGeometry: { esriGeometryPoint: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: false } };
function G(e2) {
  return e2 != null && S.spatialRelationship[e2] === true;
}
function g(e2) {
  return e2 != null && S.queryGeometry[c$1(e2)] === true;
}
function j(e2) {
  return e2 != null && S.layerGeometry[e2] === true;
}
function h() {
  return import("./geometryEngineJSON2.js");
}
function v(e2, n2, l2, y$1, c2) {
  if (y(n2) && l2 === "esriGeometryPoint" && (e2 === "esriSpatialRelIntersects" || e2 === "esriSpatialRelContains")) {
    const e3 = J(new t$2(), n2, false, false);
    return Promise.resolve((r2) => t$1(e3, false, false, r2));
  }
  if (y(n2) && l2 === "esriGeometryMultipoint") {
    const r$12 = J(new t$2(), n2, false, false);
    if (e2 === "esriSpatialRelContains")
      return Promise.resolve((e3) => r(r$12, false, false, e3, y$1, c2));
  }
  if (u$1(n2) && l2 === "esriGeometryPoint" && (e2 === "esriSpatialRelIntersects" || e2 === "esriSpatialRelContains"))
    return Promise.resolve((e3) => r$1(n2, v$1(l2, y$1, c2, e3)));
  if (u$1(n2) && l2 === "esriGeometryMultipoint" && e2 === "esriSpatialRelContains")
    return Promise.resolve((e3) => i(n2, v$1(l2, y$1, c2, e3)));
  if (u$1(n2) && e2 === "esriSpatialRelIntersects") {
    const e3 = n$2(l2);
    return Promise.resolve((r2) => e3(n2, v$1(l2, y$1, c2, r2)));
  }
  return h().then((r2) => {
    const t2 = r2[R[e2]].bind(null, n2.spatialReference, n2);
    return (e3) => t2(v$1(l2, y$1, c2, e3));
  });
}
async function P(r2, t2, i2) {
  const { spatialRel: s$1, geometry: o2 } = r2;
  if (o2) {
    if (!G(s$1))
      throw new s(c, "Unsupported query spatial relationship", { query: r2 });
    if (I$1(o2.spatialReference) && I$1(i2)) {
      if (!g(o2))
        throw new s(c, "Unsupported query geometry type", { query: r2 });
      if (!j(t2))
        throw new s(c, "Unsupported layer geometry type", { query: r2 });
      if (r2.outSR)
        return f(r2.geometry && r2.geometry.spatialReference, r2.outSR);
    }
  }
}
function I(e2) {
  if (u$1(e2))
    return true;
  if (y(e2)) {
    for (const r2 of e2.rings) {
      if (r2.length !== 5)
        return false;
      if (r2[0][0] !== r2[1][0] || r2[0][0] !== r2[4][0] || r2[2][0] !== r2[3][0] || r2[0][1] !== r2[3][1] || r2[0][1] !== r2[4][1] || r2[1][1] !== r2[2][1])
        return false;
    }
    return true;
  }
  return false;
}
function t(t2, n2) {
  if (!t2)
    return null;
  const e2 = n2.featureAdapter, { startTimeField: u2, endTimeField: l2 } = t2;
  let r2 = Number.POSITIVE_INFINITY, i2 = Number.NEGATIVE_INFINITY;
  if (u2 && l2)
    n2.forEach((t3) => {
      const n3 = e2.getAttribute(t3, u2), o2 = e2.getAttribute(t3, l2);
      n3 == null || isNaN(n3) || (r2 = Math.min(r2, n3)), o2 == null || isNaN(o2) || (i2 = Math.max(i2, o2));
    });
  else {
    const t3 = u2 || l2;
    n2.forEach((n3) => {
      const u3 = e2.getAttribute(n3, t3);
      u3 == null || isNaN(u3) || (r2 = Math.min(r2, u3), i2 = Math.max(i2, u3));
    });
  }
  return { start: r2, end: i2 };
}
function n(t2, n2, r2) {
  if (!n2 || !t2)
    return null;
  const { startTimeField: i2, endTimeField: o2 } = t2;
  if (!i2 && !o2)
    return null;
  const { start: s2, end: a } = n2;
  return s2 === null && a === null ? null : s2 === void 0 && a === void 0 ? l() : i2 && o2 ? e(r2, i2, o2, s2, a) : u(r2, i2 || o2, s2, a);
}
function e(t2, n2, e2, u2, l2) {
  return u2 != null && l2 != null ? (r2) => {
    const i2 = t2.getAttribute(r2, n2), o2 = t2.getAttribute(r2, e2);
    return (i2 == null || i2 <= l2) && (o2 == null || o2 >= u2);
  } : u2 != null ? (n3) => {
    const l3 = t2.getAttribute(n3, e2);
    return l3 == null || l3 >= u2;
  } : l2 != null ? (e3) => {
    const u3 = t2.getAttribute(e3, n2);
    return u3 == null || u3 <= l2;
  } : void 0;
}
function u(t2, n2, e2, u2) {
  return e2 != null && u2 != null && e2 === u2 ? (u3) => t2.getAttribute(u3, n2) === e2 : e2 != null && u2 != null ? (l2) => {
    const r2 = t2.getAttribute(l2, n2);
    return r2 >= e2 && r2 <= u2;
  } : e2 != null ? (u3) => t2.getAttribute(u3, n2) >= e2 : u2 != null ? (e3) => t2.getAttribute(e3, n2) <= u2 : void 0;
}
function l() {
  return () => false;
}
export { I, P, n, t, v };
