import { aI as s, aJ as t, t as n, aK as e, aL as s$1, aM as _ } from "./index.js";
import { v } from "./lineSegment.js";
function j(t$1) {
  return t$1 ? { p0: t(t$1.p0), p1: t(t$1.p1), p2: t(t$1.p2) } : { p0: n(), p1: n(), p2: n() };
}
function S(t2, n2, e2) {
  const r = n2[0] - t2[0], o = n2[1] - t2[1], p = e2[0] - t2[0], c = e2[1] - t2[1];
  return 0.5 * Math.abs(r * c - o * p);
}
function w(t2, n2, o) {
  return e(O, n2, t2), e(V, o, t2), s$1(_(O, O, V)) / 2;
}
new s(v);
new s(() => j());
const O = n(), V = n();
export { S, w };
