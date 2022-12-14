import { ax as se, x as t, t as n, aq as o, ao as jn, ay as q, az as j$1, aA as E, aB as v$1, aC as Y, aD as J, aE as w, aF as k$1, aG as Wn, aH as k$2, r as r$1 } from "./index.js";
import { i as i$2, o as o$1, r } from "./automaticLengthMeasurementUtils.js";
import { x } from "./earcut.js";
import { S } from "./triangle.js";
function h(t2, o2 = U()) {
  return y(t2, o2);
}
function j(t2, o2 = U()) {
  return y(t2, o2, false);
}
function y(n$1, h2, j2 = n$1.hasZ) {
  const y2 = i$2(n$1.spatialReference), U2 = se(y2);
  if (t(U2))
    return null;
  const C2 = (t2, o$12) => !(o$12.length < 2) && (o(t2, o$12[0], o$12[1], j2 && o$12[2] || 0), true);
  let R = 0;
  for (const t2 of n$1.rings) {
    const o$12 = t2.length;
    if (o$12 < 3)
      continue;
    const { positionsWorldCoords: r2 } = h2;
    for (; r2.length < o$12; )
      r2.push(n());
    const g = d, j3 = o(k, 0, 0, 0), U3 = 1 / o$12;
    for (let e = 0; e < o$12; e++) {
      if (!C2(g, t2[e]))
        return null;
      if (!jn(g, n$1.spatialReference, r2[e], y2))
        return null;
      q(j3, j3, r2[e], U3);
    }
    const W = j$1(r2[0], r2[1], j3, E());
    if (v$1(Y(W)) === 0)
      continue;
    for (let t3 = 0; t3 < o$12; t3++)
      J(W, j3, r2[t3], r2[t3]);
    const b = v(r2);
    for (let t3 = 0; t3 < b.length; t3 += 3)
      R += S(r2[b[t3]], r2[b[t3 + 1]], r2[b[t3 + 2]]);
  }
  return o$1(R, U2);
}
const d = n(), k = n();
function U() {
  return { positionsWorldCoords: [] };
}
function v(t2) {
  return x(C(t2), [], 2);
}
function C(t2) {
  const o2 = new Float64Array(2 * t2.length);
  for (let r2 = 0; r2 < t2.length; ++r2) {
    const n2 = t2[r2], e = 2 * r2;
    o2[e + 0] = n2[0], o2[e + 1] = n2[1];
  }
  return o2;
}
function m(e) {
  const { spatialReference: r$12 } = e;
  return r(r$12, i$1, a, u$1, e);
}
function i$1(r2) {
  return o$1(Math.abs(w([r2], "square-meters")[0]), "square-meters");
}
function a(t2) {
  try {
    return o$1(Math.abs(k$1(t2, "square-meters")), "square-meters");
  } catch (s) {
    return null;
  }
}
function u$1(r2) {
  const o2 = [];
  return Wn(r2, o2) ? o$1(Math.abs(w([{ type: "polygon", rings: o2, spatialReference: k$2.WGS84 }], "square-meters")[0]), "square-meters") : null;
}
function i(i2, u2, m$1 = U()) {
  if (u2 === "on-the-ground") {
    const o2 = m(i2);
    return r$1(o2) ? o2 : j(i2, m$1);
  }
  return h(i2, m$1);
}
function u(e, r2 = U()) {
  return i(e, "on-the-ground", r2);
}
export { i, u };
