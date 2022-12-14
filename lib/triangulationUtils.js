import { x } from "./earcut.js";
import { R as h } from "./index.js";
import { n } from "./deduplicate.js";
function o(t) {
  const o2 = l(t.rings, t.hasZ, c.CCW_IS_HOLE), s2 = new Array();
  let i2 = 0, h2 = 0;
  for (const e of o2.polygons) {
    const t2 = e.count, r2 = e.index, l2 = new Float64Array(o2.position.buffer, 3 * r2 * o2.position.BYTES_PER_ELEMENT, 3 * t2), c2 = e.holeIndices.map((n2) => n2 - r2), f2 = new Uint32Array(x(l2, c2, 3));
    s2.push({ position: l2, faces: f2 }), i2 += l2.length, h2 += f2.length;
  }
  const f = r(s2, i2, h2), a = n(f.position.buffer, 6, { originalIndices: f.faces });
  return f.position = new Float64Array(a.buffer), f.faces = a.indices, f;
}
function r(n2, t, e) {
  if (n2.length === 1)
    return n2[0];
  const o2 = new Float64Array(t), r2 = new Uint32Array(e);
  let l2 = 0, s2 = 0, i2 = 0;
  for (const c2 of n2) {
    for (let n3 = 0; n3 < c2.position.length; n3++)
      o2[l2++] = c2.position[n3];
    for (let n3 = 0; n3 < c2.faces.length; n3++)
      r2[s2++] = c2.faces[n3] + i2;
    i2 = l2 / 3;
  }
  return { position: o2, faces: r2 };
}
function l(n2, t, e) {
  const o2 = n2.length, r2 = new Array(o2), l2 = new Array(o2), h2 = new Array(o2);
  let f = 0, a = 0, g = 0, u = 0;
  for (let s2 = 0; s2 < o2; ++s2)
    u += n2[s2].length;
  const p = new Float64Array(3 * u);
  let y = 0;
  for (let d = o2 - 1; d >= 0; d--) {
    const u2 = n2[d], w = e === c.CCW_IS_HOLE && i(u2);
    if (w && o2 !== 1)
      r2[f++] = u2;
    else {
      let n3 = u2.length;
      for (let t2 = 0; t2 < f; ++t2)
        n3 += r2[t2].length;
      const e2 = { index: y, pathLengths: new Array(f + 1), count: n3, holeIndices: new Array(f) };
      e2.pathLengths[0] = u2.length, u2.length > 0 && (h2[g++] = { index: y, count: u2.length }), y = w ? s(u2, u2.length - 1, -1, p, y, u2.length, t) : s(u2, 0, 1, p, y, u2.length, t);
      for (let o3 = 0; o3 < f; ++o3) {
        const n4 = r2[o3];
        e2.holeIndices[o3] = y, e2.pathLengths[o3 + 1] = n4.length, n4.length > 0 && (h2[g++] = { index: y, count: n4.length }), y = s(n4, 0, 1, p, y, n4.length, t);
      }
      f = 0, e2.count > 0 && (l2[a++] = e2);
    }
  }
  for (let i2 = 0; i2 < f; ++i2) {
    const n3 = r2[i2];
    n3.length > 0 && (h2[g++] = { index: y, count: n3.length }), y = s(n3, 0, 1, p, y, n3.length, t);
  }
  return l2.length = a, h2.length = g, { position: p, polygons: l2, outlines: h2 };
}
function s(n2, t, e, o2, r2, l2, s2) {
  r2 *= 3;
  for (let i2 = 0; i2 < l2; ++i2) {
    const l3 = n2[t];
    o2[r2++] = l3[0], o2[r2++] = l3[1], o2[r2++] = s2 ? l3[2] : 0, t += e;
  }
  return r2 / 3;
}
function i(n2) {
  return !h(n2, false, false);
}
var c;
!function(n2) {
  n2[n2.NONE = 0] = "NONE", n2[n2.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
}(c || (c = {}));
export { c, l, o };
