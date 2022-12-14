import { cw as p$1, cr as w, cp as m$1, a7 as w$2, aq as v$1, dp as a$1, cq as u, c0 as v$3, ch as $ } from "./index.js";
import { q as pe, V, z, K, t, e, Y, E, g as se, v as c, P, x as r, y as v, G as he, H as a, S as Se, I as be, r as re, L as le, O as l, R as u$1, T as s, U as e$1 } from "./arcadeUtils.js";
import { A, h, S, m, x, p, O, g, R, D, b, E as E$1, k, y, w as w$1, W, K as K$1, F, M, d, C, U, B, L, P as P$1, v as v$2, H, N, J, j } from "./geometryEngineAsync.js";
import "vue";
import "./number.js";
function un(t2) {
  return a$1.indexOf("4.") === 0 ? v$1.fromExtent(t2) : new v$1({ spatialReference: t2.spatialReference, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] });
}
function fn(n, t$1, e$12) {
  if (V(n, 2, 2, t$1, e$12), n[0] instanceof p$1 && n[1] instanceof p$1)
    ;
  else if (n[0] instanceof p$1 && n[1] === null)
    ;
  else if (n[1] instanceof p$1 && n[0] === null)
    ;
  else if (n[0] !== null || n[1] !== null)
    throw new t(t$1, e.InvalidParameter, e$12);
}
async function cn(n, t2) {
  if (n.type !== "polygon" && n.type !== "polyline" && n.type !== "extent")
    return 0;
  let e2 = 1;
  if (n.spatialReference.vcsWkid || n.spatialReference.latestVcsWkid) {
    e2 = s(n.spatialReference) / $(n.spatialReference);
  }
  let r2 = 0;
  if (n.type === "polyline")
    for (const a2 of n.paths)
      for (let n2 = 1; n2 < a2.length; n2++)
        r2 += e$1(a2[n2], a2[n2 - 1], e2);
  else if (n.type === "polygon")
    for (const a2 of n.rings) {
      for (let n2 = 1; n2 < a2.length; n2++)
        r2 += e$1(a2[n2], a2[n2 - 1], e2);
      (a2[0][0] !== a2[a2.length - 1][0] || a2[0][1] !== a2[a2.length - 1][1] || a2[0][2] !== void 0 && a2[0][2] !== a2[a2.length - 1][2]) && (r2 += e$1(a2[0], a2[a2.length - 1], e2));
    }
  else
    n.type === "extent" && (r2 += 2 * e$1([n.xmin, n.ymin, 0], [n.xmax, n.ymin, 0], e2), r2 += 2 * e$1([n.xmin, n.ymin, 0], [n.xmin, n.ymax, 0], e2), r2 *= 2, r2 += 4 * Math.abs(v(n.zmax, 0) * e2 - v(n.zmin, 0) * e2));
  const i = new m$1({ hasZ: false, hasM: false, spatialReference: n.spatialReference, paths: [[0, 0], [0, r2]] });
  return F(i, t2);
}
function dn(n) {
  n.mode === "async" && (n.functions.disjoint = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] === null || a2[1] === null || A(a2[0], a2[1])));
  }, n.functions.intersects = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] !== null && a2[1] !== null && h(a2[0], a2[1])));
  }, n.functions.touches = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] !== null && a2[1] !== null && S(a2[0], a2[1])));
  }, n.functions.crosses = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] !== null && a2[1] !== null && m(a2[0], a2[1])));
  }, n.functions.within = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] !== null && a2[1] !== null && x(a2[0], a2[1])));
  }, n.functions.contains = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] !== null && a2[1] !== null && p(a2[0], a2[1])));
  }, n.functions.overlaps = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] !== null && a2[1] !== null && O(a2[0], a2[1])));
  }, n.functions.equals = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, i) => (V(i, 2, 2, t2, e2), i[0] === i[1] || (i[0] instanceof p$1 && i[1] instanceof p$1 ? g(i[0], i[1]) : !(!z(i[0]) || !z(i[1])) && i[0].getTime() === i[1].getTime())));
  }, n.functions.relate = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, r2, o) => {
      if (o = pe(o), V(o, 3, 3, t$1, e$12), o[0] instanceof p$1 && o[1] instanceof p$1)
        return R(o[0], o[1], K(o[2]));
      if (o[0] instanceof p$1 && o[1] === null)
        return false;
      if (o[1] instanceof p$1 && o[0] === null)
        return false;
      if (o[0] === null && o[1] === null)
        return false;
      throw new t(t$1, e.InvalidParameter, e$12);
    });
  }, n.functions.intersection = function(t2, e2) {
    return n.standardFunctionAsync(t2, e2, (n2, r2, a2) => (fn(a2 = pe(a2), t2, e2), a2[0] === null || a2[1] === null ? null : D(a2[0], a2[1])));
  }, n.functions.union = function(e$12, r2) {
    return n.standardFunctionAsync(e$12, r2, (n2, a2, o) => {
      const s2 = [];
      if ((o = pe(o)).length === 0)
        throw new t(e$12, e.WrongNumberOfParameters, r2);
      if (o.length === 1)
        if (Y(o[0])) {
          const n3 = pe(o[0]);
          for (let t$1 = 0; t$1 < n3.length; t$1++)
            if (n3[t$1] !== null) {
              if (!(n3[t$1] instanceof p$1))
                throw new t(e$12, e.InvalidParameter, r2);
              s2.push(n3[t$1]);
            }
        } else {
          if (!E(o[0])) {
            if (o[0] instanceof p$1)
              return se(c(o[0]), e$12.spatialReference);
            if (o[0] === null)
              return null;
            throw new t(e$12, e.InvalidParameter, r2);
          }
          {
            const n3 = pe(o[0].toArray());
            for (let t$1 = 0; t$1 < n3.length; t$1++)
              if (n3[t$1] !== null) {
                if (!(n3[t$1] instanceof p$1))
                  throw new t(e$12, e.InvalidParameter, r2);
                s2.push(n3[t$1]);
              }
          }
        }
      else
        for (let t$1 = 0; t$1 < o.length; t$1++)
          if (o[t$1] !== null) {
            if (!(o[t$1] instanceof p$1))
              throw new t(e$12, e.InvalidParameter, r2);
            s2.push(o[t$1]);
          }
      return s2.length === 0 ? null : b(s2);
    });
  }, n.functions.difference = function(e2, r2) {
    return n.standardFunctionAsync(e2, r2, (n2, a2, o) => (fn(o = pe(o), e2, r2), o[0] !== null && o[1] === null ? c(o[0]) : o[0] === null ? null : E$1(o[0], o[1])));
  }, n.functions.symmetricdifference = function(e2, r2) {
    return n.standardFunctionAsync(e2, r2, (n2, a2, o) => (fn(o = pe(o), e2, r2), o[0] === null && o[1] === null ? null : o[0] === null ? c(o[1]) : o[1] === null ? c(o[0]) : k(o[0], o[1])));
  }, n.functions.clip = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, r2, o) => {
      if (o = pe(o), V(o, 2, 2, t$1, e$12), !(o[1] instanceof w) && o[1] !== null)
        throw new t(t$1, e.InvalidParameter, e$12);
      if (o[0] === null)
        return null;
      if (!(o[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return o[1] === null ? null : y(o[0], o[1]);
    });
  }, n.functions.cut = function(e$12, r2) {
    return n.standardFunctionAsync(e$12, r2, (n2, o, s2) => {
      if (s2 = pe(s2), V(s2, 2, 2, e$12, r2), !(s2[1] instanceof m$1) && s2[1] !== null)
        throw new t(e$12, e.InvalidParameter, r2);
      if (s2[0] === null)
        return [];
      if (!(s2[0] instanceof p$1))
        throw new t(e$12, e.InvalidParameter, r2);
      return s2[1] === null ? [c(s2[0])] : w$1(s2[0], s2[1]);
    });
  }, n.functions.area = function(t$1, r$1) {
    return n.standardFunctionAsync(t$1, r$1, async (n2, o, s2) => {
      if (V(s2, 1, 2, t$1, r$1), (s2 = pe(s2))[0] === null)
        return 0;
      if (P(s2[0])) {
        const n3 = await s2[0].sumArea(r(v(s2[1], -1)), false, t$1.abortSignal);
        if (t$1.abortSignal.aborted)
          throw new t(t$1, e.Cancelled, r$1);
        return n3;
      }
      if (Y(s2[0]) || E(s2[0])) {
        const n3 = he(s2[0], t$1.spatialReference);
        return n3 === null ? 0 : W(n3, r(v(s2[1], -1)));
      }
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, r$1);
      return W(s2[0], r(v(s2[1], -1)));
    });
  }, n.functions.areageodetic = function(t$1, r$1) {
    return n.standardFunctionAsync(t$1, r$1, async (n2, o, s2) => {
      if (V(s2, 1, 2, t$1, r$1), (s2 = pe(s2))[0] === null)
        return 0;
      if (P(s2[0])) {
        const n3 = await s2[0].sumArea(r(v(s2[1], -1)), true, t$1.abortSignal);
        if (t$1.abortSignal.aborted)
          throw new t(t$1, e.Cancelled, r$1);
        return n3;
      }
      if (Y(s2[0]) || E(s2[0])) {
        const n3 = he(s2[0], t$1.spatialReference);
        return n3 === null ? 0 : K$1(n3, r(v(s2[1], -1)));
      }
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, r$1);
      return K$1(s2[0], r(v(s2[1], -1)));
    });
  }, n.functions.length = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, async (n2, o, s2) => {
      if (V(s2, 1, 2, t$1, e$12), (s2 = pe(s2))[0] === null)
        return 0;
      if (P(s2[0])) {
        const n3 = await s2[0].sumLength(a(v(s2[1], -1)), false, t$1.abortSignal);
        if (t$1.abortSignal.aborted)
          throw new t(t$1, e.Cancelled, e$12);
        return n3;
      }
      if (Y(s2[0]) || E(s2[0])) {
        const n3 = Se(s2[0], t$1.spatialReference);
        return n3 === null ? 0 : F(n3, a(v(s2[1], -1)));
      }
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return F(s2[0], a(v(s2[1], -1)));
    });
  }, n.functions.length3d = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, s2) => {
      if (V(s2, 1, 2, t$1, e$12), (s2 = pe(s2))[0] === null)
        return 0;
      if (Y(s2[0]) || E(s2[0])) {
        const n3 = Se(s2[0], t$1.spatialReference);
        return n3 === null ? 0 : n3.hasZ === true ? cn(n3, a(v(s2[1], -1))) : F(n3, a(v(s2[1], -1)));
      }
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return s2[0].hasZ === true ? cn(s2[0], a(v(s2[1], -1))) : F(s2[0], a(v(s2[1], -1)));
    });
  }, n.functions.lengthgeodetic = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, async (n2, o, s2) => {
      if (V(s2, 1, 2, t$1, e$12), (s2 = pe(s2))[0] === null)
        return 0;
      if (P(s2[0])) {
        const n3 = await s2[0].sumLength(a(v(s2[1], -1)), true, t$1.abortSignal);
        if (t$1.abortSignal.aborted)
          throw new t(t$1, e.Cancelled, e$12);
        return n3;
      }
      if (Y(s2[0]) || E(s2[0])) {
        const n3 = Se(s2[0], t$1.spatialReference);
        return n3 === null ? 0 : M(n3, a(v(s2[1], -1)));
      }
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return M(s2[0], a(v(s2[1], -1)));
    });
  }, n.functions.distance = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, s2) => {
      s2 = pe(s2), V(s2, 2, 3, t$1, e$12);
      let f = s2[0];
      (Y(s2[0]) || E(s2[0])) && (f = be(s2[0], t$1.spatialReference));
      let c2 = s2[1];
      if ((Y(s2[1]) || E(s2[1])) && (c2 = be(s2[1], t$1.spatialReference)), !(f instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      if (!(c2 instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return d(f, c2, a(v(s2[2], -1)));
    });
  }, n.functions.distancegeodetic = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, s2) => {
      s2 = pe(s2), V(s2, 2, 3, t$1, e$12);
      const l2 = s2[0], u2 = s2[1];
      if (!(l2 instanceof w$2))
        throw new t(t$1, e.InvalidParameter, e$12);
      if (!(u2 instanceof w$2))
        throw new t(t$1, e.InvalidParameter, e$12);
      const f = new m$1({ paths: [], spatialReference: l2.spatialReference });
      return f.addPath([l2, u2]), M(f, a(v(s2[2], -1)));
    });
  }, n.functions.densify = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, s2) => {
      if (s2 = pe(s2), V(s2, 2, 3, t$1, e$12), s2[0] === null)
        return null;
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      const l2 = re(s2[1]);
      if (isNaN(l2))
        throw new t(t$1, e.InvalidParameter, e$12);
      if (l2 <= 0)
        throw new t(t$1, e.InvalidParameter, e$12);
      return s2[0] instanceof v$1 || s2[0] instanceof m$1 ? C(s2[0], l2, a(v(s2[2], -1))) : s2[0] instanceof w ? C(un(s2[0]), l2, a(v(s2[2], -1))) : s2[0];
    });
  }, n.functions.densifygeodetic = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, s2) => {
      if (s2 = pe(s2), V(s2, 2, 3, t$1, e$12), s2[0] === null)
        return null;
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      const l2 = re(s2[1]);
      if (isNaN(l2))
        throw new t(t$1, e.InvalidParameter, e$12);
      if (l2 <= 0)
        throw new t(t$1, e.InvalidParameter, e$12);
      return s2[0] instanceof v$1 || s2[0] instanceof m$1 ? U(s2[0], l2, a(v(s2[2], -1))) : s2[0] instanceof w ? U(un(s2[0]), l2, a(v(s2[2], -1))) : s2[0];
    });
  }, n.functions.generalize = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, s2) => {
      if (s2 = pe(s2), V(s2, 2, 4, t$1, e$12), s2[0] === null)
        return null;
      if (!(s2[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      const l2 = re(s2[1]);
      if (isNaN(l2))
        throw new t(t$1, e.InvalidParameter, e$12);
      return B(s2[0], l2, le(v(s2[2], true)), a(v(s2[3], -1)));
    });
  }, n.functions.buffer = function(e$12, o) {
    return n.standardFunctionAsync(e$12, o, (n2, s2, l2) => {
      if (l2 = pe(l2), V(l2, 2, 3, e$12, o), l2[0] === null)
        return null;
      if (!(l2[0] instanceof p$1))
        throw new t(e$12, e.InvalidParameter, o);
      const u2 = re(l2[1]);
      if (isNaN(u2))
        throw new t(e$12, e.InvalidParameter, o);
      return u2 === 0 ? c(l2[0]) : L(l2[0], u2, a(v(l2[2], -1)));
    });
  }, n.functions.buffergeodetic = function(e$12, o) {
    return n.standardFunctionAsync(e$12, o, (n2, s2, l2) => {
      if (l2 = pe(l2), V(l2, 2, 3, e$12, o), l2[0] === null)
        return null;
      if (!(l2[0] instanceof p$1))
        throw new t(e$12, e.InvalidParameter, o);
      const u2 = re(l2[1]);
      if (isNaN(u2))
        throw new t(e$12, e.InvalidParameter, o);
      return u2 === 0 ? c(l2[0]) : P$1(l2[0], u2, a(v(l2[2], -1)));
    });
  }, n.functions.offset = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, o, l2) => {
      if (l2 = pe(l2), V(l2, 2, 6, t$1, e$12), l2[0] === null)
        return null;
      if (!(l2[0] instanceof v$1 || l2[0] instanceof m$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      const u2 = re(l2[1]);
      if (isNaN(u2))
        throw new t(t$1, e.InvalidParameter, e$12);
      const f = re(v(l2[4], 10));
      if (isNaN(f))
        throw new t(t$1, e.InvalidParameter, e$12);
      const c2 = re(v(l2[5], 0));
      if (isNaN(c2))
        throw new t(t$1, e.InvalidParameter, e$12);
      return v$2(l2[0], u2, a(v(l2[2], -1)), K(v(l2[3], "round")).toLowerCase(), f, c2);
    });
  }, n.functions.rotate = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, r2, o) => {
      o = pe(o), V(o, 2, 3, t$1, e$12);
      let s2 = o[0];
      if (s2 === null)
        return null;
      if (!(s2 instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      s2 instanceof w && (s2 = v$1.fromExtent(s2));
      const l2 = re(o[1]);
      if (isNaN(l2))
        throw new t(t$1, e.InvalidParameter, e$12);
      const u2 = v(o[2], null);
      if (u2 === null)
        return H(s2, l2);
      if (u2 instanceof w$2)
        return H(s2, l2, u2);
      throw new t(t$1, e.InvalidParameter, e$12);
    });
  }, n.functions.centroid = function(e$12, r2) {
    return n.standardFunctionAsync(e$12, r2, (n2, o, s2) => {
      if (s2 = pe(s2), V(s2, 1, 1, e$12, r2), s2[0] === null)
        return null;
      let c$1 = s2[0];
      if ((Y(s2[0]) || E(s2[0])) && (c$1 = be(s2[0], e$12.spatialReference)), c$1 === null)
        return null;
      if (!(c$1 instanceof p$1))
        throw new t(e$12, e.InvalidParameter, r2);
      return c$1 instanceof w$2 ? se(c(s2[0]), e$12.spatialReference) : c$1 instanceof v$1 ? c$1.centroid : c$1 instanceof m$1 ? l(c$1) : c$1 instanceof u ? u$1(c$1) : c$1 instanceof w ? c$1.center : null;
    });
  }, n.functions.multiparttosinglepart = function(e$12, r2) {
    return n.standardFunctionAsync(e$12, r2, async (n2, o, s2) => {
      s2 = pe(s2), V(s2, 1, 1, e$12, r2);
      const l2 = [];
      if (s2[0] === null)
        return null;
      if (!(s2[0] instanceof p$1))
        throw new t(e$12, e.InvalidParameter, r2);
      if (s2[0] instanceof w$2)
        return [se(c(s2[0]), e$12.spatialReference)];
      if (s2[0] instanceof w)
        return [se(c(s2[0]), e$12.spatialReference)];
      const u$12 = await N(s2[0]);
      if (u$12 instanceof v$1) {
        const n3 = [], t2 = [];
        for (let e2 = 0; e2 < u$12.rings.length; e2++)
          if (u$12.isClockwise(u$12.rings[e2])) {
            const t3 = v$3({ rings: [u$12.rings[e2]], hasZ: u$12.hasZ === true, hazM: u$12.hasM === true, spatialReference: u$12.spatialReference.toJSON() });
            n3.push(t3);
          } else
            t2.push({ ring: u$12.rings[e2], pt: u$12.getPoint(e2, 0) });
        for (let e2 = 0; e2 < t2.length; e2++)
          for (let r3 = 0; r3 < n3.length; r3++)
            if (n3[r3].contains(t2[e2].pt)) {
              n3[r3].addRing(t2[e2].ring);
              break;
            }
        return n3;
      }
      if (u$12 instanceof m$1) {
        const n3 = [];
        for (let t2 = 0; t2 < u$12.paths.length; t2++) {
          const e2 = v$3({ paths: [u$12.paths[t2]], hasZ: u$12.hasZ === true, hazM: u$12.hasM === true, spatialReference: u$12.spatialReference.toJSON() });
          n3.push(e2);
        }
        return n3;
      }
      if (s2[0] instanceof u) {
        const n3 = se(c(s2[0]), e$12.spatialReference);
        for (let t2 = 0; t2 < n3.points.length; t2++)
          l2.push(n3.getPoint(t2));
        return l2;
      }
      return null;
    });
  }, n.functions.issimple = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, r2, o) => {
      if (o = pe(o), V(o, 1, 1, t$1, e$12), o[0] === null)
        return true;
      if (!(o[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return J(o[0]);
    });
  }, n.functions.simplify = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, r2, o) => {
      if (o = pe(o), V(o, 1, 1, t$1, e$12), o[0] === null)
        return null;
      if (!(o[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return N(o[0]);
    });
  }, n.functions.convexhull = function(t$1, e$12) {
    return n.standardFunctionAsync(t$1, e$12, (n2, r2, o) => {
      if (o = pe(o), V(o, 1, 1, t$1, e$12), o[0] === null)
        return null;
      if (!(o[0] instanceof p$1))
        throw new t(t$1, e.InvalidParameter, e$12);
      return j(o[0]);
    });
  });
}
export { dn as registerFunctions };
