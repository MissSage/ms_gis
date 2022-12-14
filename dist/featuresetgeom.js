import { t, e, q as pe, P, an as s, V, K } from "./arcadeUtils.js";
import { h as f, u } from "./SpatialFilter.js";
import { cw as p } from "./index.js";
import { m, S as S$1, x, O, p as p$1, h as h$1, R as R$1 } from "./geometryEngineAsync.js";
import "./number.js";
import "./WhereClause.js";
import "vue";
function h(e2) {
  return e2 instanceof p;
}
function S(i, a, c, S2) {
  return S2(i, a, async (S3, R2, v) => {
    if (v.length < 2)
      throw new t(i, e.WrongNumberOfParameters, a);
    if ((v = pe(v))[0] === null && v[1] === null)
      return false;
    if (P(v[0])) {
      if (v[1] instanceof p)
        return new f({ parentfeatureset: v[0], relation: c, relationGeom: v[1] });
      if (v[1] === null)
        return new u({ parentfeatureset: v[0] });
      throw new t(i, e.InvalidParameter, a);
    }
    if (h(v[0])) {
      if (h(v[1])) {
        switch (c) {
          case "esriSpatialRelEnvelopeIntersects":
            return h$1(s(v[0]), s(v[1]));
          case "esriSpatialRelIntersects":
            return h$1(v[0], v[1]);
          case "esriSpatialRelContains":
            return p$1(v[0], v[1]);
          case "esriSpatialRelOverlaps":
            return O(v[0], v[1]);
          case "esriSpatialRelWithin":
            return x(v[0], v[1]);
          case "esriSpatialRelTouches":
            return S$1(v[0], v[1]);
          case "esriSpatialRelCrosses":
            return m(v[0], v[1]);
        }
        throw new t(i, e.InvalidParameter, a);
      }
      if (P(v[1]))
        return new f({ parentfeatureset: v[1], relation: c, relationGeom: v[0] });
      if (v[1] === null)
        return false;
      throw new t(i, e.InvalidParameter, a);
    }
    if (v[0] !== null)
      throw new t(i, e.InvalidParameter, a);
    return P(v[1]) ? new u({ parentfeatureset: v[1] }) : !(v[1] instanceof p || v[1] === null) && void 0;
  });
}
function R(t$1) {
  t$1.mode === "async" && (t$1.functions.intersects = function(e2, n) {
    return S(e2, n, "esriSpatialRelIntersects", t$1.standardFunctionAsync);
  }, t$1.functions.envelopeintersects = function(e2, n) {
    return S(e2, n, "esriSpatialRelEnvelopeIntersects", t$1.standardFunctionAsync);
  }, t$1.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), t$1.functions.contains = function(e2, n) {
    return S(e2, n, "esriSpatialRelContains", t$1.standardFunctionAsync);
  }, t$1.functions.overlaps = function(e2, n) {
    return S(e2, n, "esriSpatialRelOverlaps", t$1.standardFunctionAsync);
  }, t$1.functions.within = function(e2, n) {
    return S(e2, n, "esriSpatialRelWithin", t$1.standardFunctionAsync);
  }, t$1.functions.touches = function(e2, n) {
    return S(e2, n, "esriSpatialRelTouches", t$1.standardFunctionAsync);
  }, t$1.functions.crosses = function(e2, n) {
    return S(e2, n, "esriSpatialRelCrosses", t$1.standardFunctionAsync);
  }, t$1.functions.relate = function(u$1, f2) {
    return t$1.standardFunctionAsync(u$1, f2, (t$12, p$12, m2) => {
      if (m2 = pe(m2), V(m2, 3, 3, u$1, f2), h(m2[0]) && h(m2[1]))
        return R$1(m2[0], m2[1], K(m2[2]));
      if (m2[0] instanceof p && m2[1] === null)
        return false;
      if (m2[1] instanceof p && m2[0] === null)
        return false;
      if (P(m2[0]) && m2[1] === null)
        return new u({ parentfeatureset: m2[0] });
      if (P(m2[1]) && m2[0] === null)
        return new u({ parentfeatureset: m2[1] });
      if (P(m2[0]) && m2[1] instanceof p)
        return m2[0].relate(m2[1], K(m2[2]));
      if (P(m2[1]) && m2[0] instanceof p)
        return m2[1].relate(m2[0], K(m2[2]));
      if (m2[0] === null && m2[1] === null)
        return false;
      throw new t(u$1, e.InvalidParameter, f2);
    });
  });
}
export { R as registerFunctions };
