import { b7 as s, b8 as t, a1 as n, bc as g, bd as a, be as u, bf as P, bg as r, b9 as e, bh as c, b1 as v$1, bi as p$1 } from "./index.js";
function v(t$1) {
  return t$1 ? { origin: t(t$1.origin), vector: t(t$1.vector) } : { origin: n(), vector: n() };
}
function p(t2, r2) {
  const n2 = x.get();
  return n2.origin = t2, n2.vector = r2, n2;
}
function h(t2, r2 = v()) {
  return m(t2.origin, t2.vector, r2);
}
function m(t2, r$1, o = v()) {
  return r(o.origin, t2), r(o.vector, r$1), o;
}
function b(t2, r$1, e$1 = v()) {
  return r(e$1.origin, t2), e(e$1.vector, r$1, t2), e$1;
}
function M(r2, n2) {
  const c$1 = e(c.get(), n2, r2.origin), s2 = P(r2.vector, c$1), u2 = P(r2.vector, r2.vector), a$1 = a(s2 / u2, 0, 1), g$1 = e(c.get(), g(c.get(), r2.vector, a$1), c$1);
  return P(g$1, g$1);
}
function j(t2, r2, n2) {
  return A(t2, r2, 0, 1, n2);
}
function l(t2, r2, n2) {
  return u(n2, t2.origin, g(n2, t2.vector, r2));
}
function A(r2, n2, u$1, a$1, g$1) {
  const { vector: v2, origin: p2 } = r2, h2 = e(c.get(), n2, p2), m2 = P(v2, h2) / v$1(v2);
  return g(g$1, v2, a(m2, u$1, a$1)), u(g$1, g$1, r2.origin);
}
function B(t2, r2) {
  if (q(t2, p(r2.origin, r2.direction), false, w)) {
    const { tA: r3, pB: n2, distance2: o } = w;
    if (r3 >= 0 && r3 <= 1)
      return o;
    if (r3 < 0)
      return p$1(t2.origin, n2);
    if (r3 > 1)
      return p$1(u(c.get(), t2.origin, t2.vector), n2);
  }
  return null;
}
function k(t2, r$1, o) {
  return !!q(t2, r$1, true, w) && (r(o, w.pA), true);
}
function q(r2, n2, o, e2) {
  const i = 1e-6, s2 = r2.origin, a$1 = u(c.get(), s2, r2.vector), g2 = n2.origin, v2 = u(c.get(), g2, n2.vector), p2 = c.get(), h2 = c.get();
  if (p2[0] = s2[0] - g2[0], p2[1] = s2[1] - g2[1], p2[2] = s2[2] - g2[2], h2[0] = v2[0] - g2[0], h2[1] = v2[1] - g2[1], h2[2] = v2[2] - g2[2], Math.abs(h2[0]) < i && Math.abs(h2[1]) < i && Math.abs(h2[2]) < i)
    return false;
  const m2 = c.get();
  if (m2[0] = a$1[0] - s2[0], m2[1] = a$1[1] - s2[1], m2[2] = a$1[2] - s2[2], Math.abs(m2[0]) < i && Math.abs(m2[1]) < i && Math.abs(m2[2]) < i)
    return false;
  const b2 = p2[0] * h2[0] + p2[1] * h2[1] + p2[2] * h2[2], M2 = h2[0] * m2[0] + h2[1] * m2[1] + h2[2] * m2[2], d = p2[0] * m2[0] + p2[1] * m2[1] + p2[2] * m2[2], j2 = h2[0] * h2[0] + h2[1] * h2[1] + h2[2] * h2[2], l2 = (m2[0] * m2[0] + m2[1] * m2[1] + m2[2] * m2[2]) * j2 - M2 * M2;
  if (Math.abs(l2) < i)
    return false;
  let A2 = (b2 * M2 - d * j2) / l2, B2 = (b2 + M2 * A2) / j2;
  o && (A2 = a(A2, 0, 1), B2 = a(B2, 0, 1));
  const k2 = c.get(), S = c.get();
  return k2[0] = s2[0] + A2 * m2[0], k2[1] = s2[1] + A2 * m2[1], k2[2] = s2[2] + A2 * m2[2], S[0] = g2[0] + B2 * h2[0], S[1] = g2[1] + B2 * h2[1], S[2] = g2[2] + B2 * h2[2], e2.tA = A2, e2.tB = B2, e2.pA = k2, e2.pB = S, e2.distance2 = p$1(k2, S), true;
}
const w = { tA: 0, tB: 0, pA: n(), pB: n(), distance2: 0 }, x = new s(() => v());
export { A, B, M, b, h, j, k, l, m, v };
