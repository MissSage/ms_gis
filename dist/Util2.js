import { fe as t, E as n, eU as r, eZ as e$1, a5 as g, V as a, f0 as u, eV as P, gw as v$1 } from "./index.js";
import { s, c as c$1 } from "./sphere.js";
function v(t$1) {
  return t$1 ? { origin: t(t$1.origin), vector: t(t$1.vector) } : { origin: n(), vector: n() };
}
function b(t2, r$1, e2 = v()) {
  return r(e2.origin, t2), e$1(e2.vector, r$1, t2), e2;
}
function j(t2, r2, n2) {
  return A(t2, r2, 0, 1, n2);
}
function A(r2, n2, u$1, a$1, g$1) {
  const { vector: v2, origin: p } = r2, h = e$1(c$1.get(), n2, p), m = P(v2, h) / v$1(v2);
  return g(g$1, v2, a(m, u$1, a$1)), u(g$1, g$1, r2.origin);
}
new s(() => v());
class o {
  constructor(t2) {
    this.message = t2;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
}
function e(t2, n2) {
  if (!t2)
    throw n2 = n2 || "assert", console.log(new Error(n2).stack), new o(n2);
}
function c(t2, n2, r2, a2) {
  let o2, e2 = (r2[0] - t2[0]) / n2[0], s2 = (a2[0] - t2[0]) / n2[0];
  e2 > s2 && (o2 = e2, e2 = s2, s2 = o2);
  let c2 = (r2[1] - t2[1]) / n2[1], u2 = (a2[1] - t2[1]) / n2[1];
  if (c2 > u2 && (o2 = c2, c2 = u2, u2 = o2), e2 > u2 || c2 > s2)
    return false;
  c2 > e2 && (e2 = c2), u2 < s2 && (s2 = u2);
  let i = (r2[2] - t2[2]) / n2[2], f = (a2[2] - t2[2]) / n2[2];
  return i > f && (o2 = i, i = f, f = o2), !(e2 > f || i > s2) && (f < s2 && (s2 = f), !(s2 < 0));
}
export { b, c, e, j, v };
