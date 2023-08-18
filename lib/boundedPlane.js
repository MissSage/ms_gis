import { ea as s, bB as p, bJ as r, b7 as s$1, b8 as t, bg as r$1, a1 as n, b0 as E, ft as A, fu as O, bc as g, b2 as Y, bh as c, be as u, aS as o, fv as F, eO as f, cC as q, aR as x, ba as s$2, fw as x$1, dq as H$1, eS as l, bf as P, fx as U, dH as b, fy as z$1, b9 as e, dz as H$2, bS as F$1, cQ as h, eI as o$1, bD as O$1, fz as L$1, d7 as g$1, fA as n$1, bE as z$2, b1 as v$1, bA as e$1 } from "./index.js";
import { v, A as A$1, M } from "./lineSegment.js";
const L = s.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");
class z {
  constructor() {
    this.plane = p(), this.origin = n(), this.basis1 = n(), this.basis2 = n();
  }
}
function G(s2 = vs) {
  return { plane: p(s2.plane), origin: t(s2.origin), basis1: t(s2.basis1), basis2: t(s2.basis2) };
}
function W(s2, t2, i) {
  const n2 = Ss.get();
  return n2.origin = s2, n2.basis1 = t2, n2.basis2 = i, n2.plane = E(0, 0, 0, 0), H(n2), n2;
}
function X(s2, t2 = G()) {
  return D(s2.origin, s2.basis1, s2.basis2, t2);
}
function Z(s2, t2) {
  r$1(t2.origin, s2.origin), r$1(t2.basis1, s2.basis1), r$1(t2.basis2, s2.basis2), A(t2.plane, s2.plane);
}
function D(s2, t2, i, n2 = G()) {
  return r$1(n2.origin, s2), r$1(n2.basis1, t2), r$1(n2.basis2, i), H(n2), ys(n2, "fromValues()"), n2;
}
function H(s2) {
  O(s2.basis2, s2.basis1, s2.origin, s2.plane);
}
function J(s2, t2, i) {
  s2 !== i && X(s2, i);
  const n2 = g(c.get(), ms(s2), t2);
  return u(i.origin, i.origin, n2), i.plane[3] -= t2, i;
}
function K(s2, t2, i) {
  return Q(t2, i), J(i, gs(s2, s2.origin), i), i;
}
function Q(s2, t2 = G()) {
  const i = (s2[2] - s2[0]) / 2, n2 = (s2[3] - s2[1]) / 2;
  return o(t2.origin, s2[0] + i, s2[1] + n2, 0), o(t2.basis1, i, 0, 0), o(t2.basis2, 0, n2, 0), F(0, 0, 1, 0, t2.plane), t2;
}
function $(s2, t2, i) {
  return !!q(s2.plane, t2, i) && hs(s2, i);
}
function ss(s2, t2, i) {
  if ($(s2, t2, i))
    return i;
  const n2 = ts(s2, t2, c.get());
  return u(i, t2.origin, g(c.get(), t2.direction, x(t2.origin, n2) / s$2(t2.direction))), i;
}
function ts(s2, i, n2) {
  const o2 = Ns.get();
  Ps(s2, i, o2, Ns.get());
  let r2 = Number.POSITIVE_INFINITY;
  for (const e2 of Ts) {
    const c$1 = Is(s2, e2, ws.get()), u2 = c.get();
    if (x$1(o2, c$1, u2)) {
      const s3 = H$1(c.get(), i.origin, u2), o3 = Math.abs(l(P(i.direction, s3)));
      o3 < r2 && (r2 = o3, r$1(n2, u2));
    }
  }
  return r2 === Number.POSITIVE_INFINITY ? is(s2, i, n2) : n2;
}
function is(s2, t2, i) {
  if ($(s2, t2, i))
    return i;
  const n2 = Ns.get(), o2 = Ns.get();
  Ps(s2, t2, n2, o2);
  let r2 = Number.POSITIVE_INFINITY;
  for (const e2 of Ts) {
    const c$1 = Is(s2, e2, ws.get()), u2 = c.get();
    if (U(n2, c$1, u2)) {
      const s3 = b(t2, u2);
      if (!z$1(o2, u2))
        continue;
      s3 < r2 && (r2 = s3, r$1(i, u2));
    }
  }
  return rs(s2, t2.origin) < r2 && ns(s2, t2.origin, i), i;
}
function ns(s2, t2, i) {
  const n2 = H$2(s2.plane, t2, c.get()), o2 = A$1(js(s2, s2.basis1), n2, -1, 1, c.get()), r2 = A$1(js(s2, s2.basis2), n2, -1, 1, c.get());
  return e(i, u(c.get(), o2, r2), s2.origin), i;
}
function os(s2, t2, i) {
  const { origin: n2, basis1: o$12, basis2: r2 } = s2, e$12 = e(c.get(), t2, n2), a = f(o$12, e$12), c$1 = f(r2, e$12), u2 = f(ms(s2), e$12);
  return o(i, a, c$1, u2);
}
function rs(s2, t2) {
  const i = os(s2, t2, c.get()), { basis1: n2, basis2: o2 } = s2, r2 = s$2(n2), e2 = s$2(o2), a = Math.max(Math.abs(i[0]) - r2, 0), c$1 = Math.max(Math.abs(i[1]) - e2, 0), u2 = i[2];
  return a * a + c$1 * c$1 + u2 * u2;
}
function es(s2, t2) {
  return Math.sqrt(rs(s2, t2));
}
function as(s2, t2) {
  let i = Number.NEGATIVE_INFINITY;
  for (const n2 of Ts) {
    const o2 = Is(s2, n2, ws.get()), r2 = M(o2, t2);
    r2 > i && (i = r2);
  }
  return Math.sqrt(i);
}
function cs(s2, t2) {
  return z$1(s2.plane, t2) && hs(s2, t2);
}
function us(s2, t2, i, n2) {
  return ds(s2, i, n2);
}
function gs(s2, t2) {
  const i = -s2.plane[3];
  return f(ms(s2), t2) - i;
}
function bs(s2, t2, i, n2) {
  const o2 = gs(s2, t2), r2 = g(Ms, ms(s2), i - o2);
  return u(n2, t2, r2), n2;
}
function fs(s2, t2) {
  return F$1(s2.basis1, t2.basis1) && F$1(s2.basis2, t2.basis2) && F$1(s2.origin, t2.origin);
}
function ps(s2, t2, i) {
  return s2 !== i && X(s2, i), h(As, t2), o$1(As, As), O$1(i.basis1, s2.basis1, As), O$1(i.basis2, s2.basis2, As), O$1(Y(i.plane), Y(s2.plane), As), O$1(i.origin, s2.origin, t2), L$1(i.plane, i.plane, i.origin), i;
}
function ls(s2, t2, i, n2) {
  return s2 !== n2 && X(s2, n2), g$1(xs, t2, i), O$1(n2.basis1, s2.basis1, xs), O$1(n2.basis2, s2.basis2, xs), H(n2), n2;
}
function ms(s2) {
  return Y(s2.plane);
}
function ds(s2, t2, i) {
  switch (t2) {
    case n$1.X:
      r$1(i, s2.basis1), z$2(i, i);
      break;
    case n$1.Y:
      r$1(i, s2.basis2), z$2(i, i);
      break;
    case n$1.Z:
      r$1(i, ms(s2));
  }
  return i;
}
function hs(s2, t2) {
  const i = e(c.get(), t2, s2.origin), n2 = v$1(s2.basis1), o2 = v$1(s2.basis2), r2 = P(s2.basis1, i), e$12 = P(s2.basis2, i);
  return -r2 - n2 < 0 && r2 - n2 < 0 && -e$12 - o2 < 0 && e$12 - o2 < 0;
}
function js(s2, t2) {
  const i = ws.get();
  return r$1(i.origin, s2.origin), r$1(i.vector, t2), i;
}
function Is(s2, t2, i) {
  const { basis1: n2, basis2: o2, origin: r2 } = s2, e2 = g(c.get(), n2, t2.origin[0]), a = g(c.get(), o2, t2.origin[1]);
  u(i.origin, e2, a), u(i.origin, i.origin, r2);
  const g$12 = g(c.get(), n2, t2.direction[0]), b2 = g(c.get(), o2, t2.direction[1]);
  return g(i.vector, u(g$12, g$12, b2), 2), i;
}
function ys(s2, t2) {
  Math.abs(P(s2.basis1, s2.basis2) / (s$2(s2.basis1) * s$2(s2.basis2))) > 1e-6 && L.warn(t2, "Provided basis vectors are not perpendicular"), Math.abs(P(s2.basis1, ms(s2))) > 1e-6 && L.warn(t2, "Basis vectors and plane normal are not perpendicular"), Math.abs(-P(ms(s2), s2.origin) - s2.plane[3]) > 1e-6 && L.warn(t2, "Plane offset is not consistent with plane origin");
}
function Ps(s2, t2, i, n2) {
  const o2 = ms(s2);
  O(o2, t2.direction, t2.origin, i), O(Y(i), o2, t2.origin, n2);
}
const vs = { plane: p(), origin: r(0, 0, 0), basis1: r(1, 0, 0), basis2: r(0, 1, 0) }, Ns = new s$1(p), ws = new s$1(v), Ms = n(), Ss = new s$1(() => G()), Ts = [{ origin: [-1, -1], direction: [1, 0] }, { origin: [1, -1], direction: [0, 1] }, { origin: [1, 1], direction: [-1, 0] }, { origin: [-1, 1], direction: [0, -1] }], As = e$1(), xs = e$1();
Object.freeze(Object.defineProperty({ __proto__: null, BoundedPlaneClass: z, create: G, wrap: W, copy: X, copyWithoutVerify: Z, fromValues: D, updateUnboundedPlane: H, elevate: J, setExtent: K, fromAABoundingRect: Q, intersectRay: $, intersectRayClosestSilhouette: ss, closestPointOnSilhouette: ts, closestPoint: is, projectPoint: ns, projectPointLocal: os, distance2: rs, distance: es, distanceToSilhouette: as, extrusionContainsPoint: cs, axisAt: us, altitudeAt: gs, setAltitudeAt: bs, equals: fs, transform: ps, rotate: ls, normal: ms, UP: vs }, Symbol.toStringTag, { value: "Module" }));
export { G, H, Q, X, es as e };
