import { eh as s$1, aA as t, g as s$2, fX as p$1, fY as ie } from "./index.js";
const i = { LineString: "esriGeometryPolyline", MultiLineString: "esriGeometryPolyline", MultiPoint: "esriGeometryMultipoint", Point: "esriGeometryPoint", Polygon: "esriGeometryPolygon", MultiPolygon: "esriGeometryPolygon" };
function s(e) {
  return i[e];
}
function* c(e) {
  switch (e.type) {
    case "Feature":
      yield e;
      break;
    case "FeatureCollection":
      for (const t2 of e.features)
        t2 && (yield t2);
  }
}
function* u(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "Point":
      yield e.coordinates;
      break;
    case "LineString":
    case "MultiPoint":
      yield* e.coordinates;
      break;
    case "MultiLineString":
    case "Polygon":
      for (const t2 of e.coordinates)
        yield* t2;
      break;
    case "MultiPolygon":
      for (const t2 of e.coordinates)
        for (const e2 of t2)
          yield* e2;
  }
}
function* l(e, o = {}) {
  var _a;
  const { geometryType: r, objectIdField: i2 } = o;
  for (const c2 of e) {
    const { geometry: e2, properties: u2, id: l2 } = c2;
    if (e2 && s(e2.type) !== r)
      continue;
    const f2 = u2 || {};
    let a2 = (_a = f2[i2]) != null ? _a : null;
    i2 && l2 != null && !f2[i2] && (f2[i2] = a2 = l2);
    const y2 = new s$1(e2 ? g(new t(), e2, o) : null, f2, null, a2);
    yield y2;
  }
}
function f(e) {
  for (const t2 of e)
    if (t2.length > 2)
      return true;
  return false;
}
function a(e) {
  return !p(e);
}
function y(e) {
  return p(e);
}
function p(e) {
  let t2 = 0;
  for (let n = 0; n < e.length; n++) {
    const o = e[n], r = e[(n + 1) % e.length];
    t2 += o[0] * r[1] - r[0] * o[1];
  }
  return t2 <= 0;
}
function d(e) {
  const t2 = e[0], n = e[e.length - 1];
  return t2[0] === n[0] && t2[1] === n[1] && t2[2] === n[2] || e.push(t2), e;
}
function g(e, t2, n) {
  switch (t2.type) {
    case "LineString":
      return m(e, t2, n);
    case "MultiLineString":
      return h(e, t2, n);
    case "MultiPoint":
      return w(e, t2, n);
    case "MultiPolygon":
      return P(e, t2, n);
    case "Point":
      return b(e, t2, n);
    case "Polygon":
      return j(e, t2, n);
  }
}
function m(e, t2, n) {
  return G(e, t2.coordinates, n), e;
}
function h(e, t2, n) {
  for (const o of t2.coordinates)
    G(e, o, n);
  return e;
}
function w(e, t2, n) {
  return G(e, t2.coordinates, n), e;
}
function P(e, t2, n) {
  for (const o of t2.coordinates) {
    S(e, o[0], n);
    for (let t3 = 1; t3 < o.length; t3++)
      F(e, o[t3], n);
  }
  return e;
}
function b(e, t2, n) {
  return k(e, t2.coordinates, n), e;
}
function j(e, t2, n) {
  const o = t2.coordinates;
  S(e, o[0], n);
  for (let r = 1; r < o.length; r++)
    F(e, o[r], n);
  return e;
}
function S(e, t2, n) {
  const o = d(t2);
  a(o) ? M(e, o, n) : G(e, o, n);
}
function F(e, t2, n) {
  const o = d(t2);
  y(o) ? M(e, o, n) : G(e, o, n);
}
function G(e, t2, n) {
  for (const o of t2)
    k(e, o, n);
  e.lengths.push(t2.length);
}
function M(e, t2, n) {
  for (let o = t2.length - 1; o >= 0; o--)
    k(e, t2[o], n);
  e.lengths.push(t2.length);
}
function k(e, t2, n) {
  const [o, r, i2] = t2;
  e.coords.push(o, r), n.hasZ && e.coords.push(i2 || 0);
}
function O(e) {
  switch (typeof e) {
    case "string":
      return "esriFieldTypeString";
    case "number":
      return "esriFieldTypeDouble";
    default:
      return "unknown";
  }
}
function T(t2) {
  if (!t2)
    throw new s$2("geojson-layer:empty", "GeoJSON data is empty");
  if (t2.type !== "Feature" && t2.type !== "FeatureCollection")
    throw new s$2("geojson-layer:unsupported-geojson-object", "missing or not supported GeoJSON object type", { data: t2 });
  const { crs: n } = t2;
  if (!n)
    return;
  const o = typeof n == "string" ? n : n.type === "name" ? n.properties.name : n.type === "EPSG" ? n.properties.code : null, r = new RegExp(".*(CRS84H?|4326)$", "i");
  if (!o || !r.test(o))
    throw new s$2("geojson-layer:unsupported-crs", "unsupported GeoJSON 'crs' member", { crs: n });
}
function L(e, t2 = {}) {
  const n = [], i2 = new Set(), l2 = new Set();
  let a2, y2 = false, p2 = null, d2 = false, { geometryType: g2 = null } = t2, m2 = false;
  for (const r of c(e)) {
    const { geometry: e2, properties: t3, id: c2 } = r;
    if (!e2 || (g2 || (g2 = s(e2.type)), s(e2.type) === g2)) {
      if (!y2) {
        y2 = f(u(e2));
      }
      if (d2 || (d2 = c2 != null, d2 && (a2 = typeof c2, p2 = Object.keys(t3).filter((e3) => t3[e3] === c2))), d2 && c2 != null && (p2.length > 1 ? p2 = p2.filter((e3) => t3[e3] === c2) : p2.length === 1 && (p2 = t3[p2[0]] === c2 ? p2 : [])), !m2 && t3) {
        let e3 = true;
        for (const r2 in t3) {
          if (i2.has(r2))
            continue;
          const s2 = t3[r2];
          if (s2 == null) {
            e3 = false, l2.add(r2);
            continue;
          }
          const c3 = O(s2);
          c3 !== "unknown" ? (l2.delete(r2), i2.add(r2), n.push({ name: p$1(r2), alias: r2, type: c3 })) : l2.add(r2);
        }
        m2 = e3;
      }
    }
  }
  const h2 = p$1((p2 == null ? void 0 : p2.length) === 1 && p2[0] || null);
  if (h2) {
    for (const o of n)
      if (o.name === h2 && ie(o)) {
        o.type = "esriFieldTypeOID";
        break;
      }
  }
  return { fields: n, geometryType: g2, hasZ: y2, objectIdFieldName: h2, objectIdFieldType: a2, unknownFields: Array.from(l2) };
}
function I(e, t2) {
  return Array.from(l(c(e), t2));
}
export { I, L, T, s };
