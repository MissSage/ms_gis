import { bZ as i } from "./index.js";
function n(n2, f, i$1) {
  var _a;
  const u = n2.byteLength / (4 * f), c = new Uint32Array(n2, 0, u * f);
  let s = new Uint32Array(u);
  const a = (_a = i$1 == null ? void 0 : i$1.minReduction) != null ? _a : 0, h = (i$1 == null ? void 0 : i$1.originalIndices) || null, g = h ? h.length : 0, y = (i$1 == null ? void 0 : i$1.componentOffsets) || null;
  let U = 0;
  if (y)
    for (let t = 0; t < y.length - 1; t++) {
      const n3 = y[t + 1] - y[t];
      n3 > U && (U = n3);
    }
  else
    U = u;
  const w = Math.floor(1.1 * U) + 1;
  (o == null || o.length < 2 * w) && (o = new Uint32Array(i(2 * w)));
  for (let t = 0; t < 2 * w; t++)
    o[t] = 0;
  let A = 0;
  const m = !!y && !!h, b = m ? g : u, d = m ? new Uint32Array(g) : null, p = 1.96;
  let M = a !== 0 ? Math.ceil(4 * p * p / (a * a) * a * (1 - a)) : b, q = 1, j = y ? y[1] : b;
  for (let t = 0; t < b; t++) {
    if (t === M) {
      const n4 = 1 - A / t;
      if (n4 + p * Math.sqrt(n4 * (1 - n4) / t) < a)
        return null;
      M *= 2;
    }
    if (t === j) {
      for (let t2 = 0; t2 < 2 * w; t2++)
        o[t2] = 0;
      if (h)
        for (let t2 = y[q - 1]; t2 < y[q]; t2++)
          d[t2] = s[h[t2]];
      j = y[++q];
    }
    const n3 = m ? h[t] : t, r2 = n3 * f, i2 = l(c, r2, f);
    let u2 = i2 % w, g2 = A;
    for (; o[2 * u2 + 1] !== 0; ) {
      if (o[2 * u2] === i2) {
        const t2 = o[2 * u2 + 1] - 1;
        if (e(c, r2, t2 * f, f)) {
          g2 = s[t2];
          break;
        }
      }
      u2++, u2 >= w && (u2 -= w);
    }
    g2 === A && (o[2 * u2] = i2, o[2 * u2 + 1] = n3 + 1, A++), s[n3] = g2;
  }
  if (a !== 0 && 1 - A / u < a)
    return null;
  if (m) {
    for (let t = y[q - 1]; t < d.length; t++)
      d[t] = s[h[t]];
    s = d;
  }
  const k = new Uint32Array(f * A);
  A = 0;
  for (let t = 0; t < b; t++)
    if (s[t] === A) {
      r(c, (m ? h[t] : t) * f, k, A * f, f), A++;
    }
  if (h && !m) {
    const t = new Uint32Array(g);
    for (let n3 = 0; n3 < t.length; n3++)
      t[n3] = s[h[n3]];
    s = t;
  }
  return { buffer: k.buffer, indices: s, uniqueCount: A };
}
function e(t, n2, e2, r2) {
  for (let l2 = 0; l2 < r2; l2++)
    if (t[n2 + l2] !== t[e2 + l2])
      return false;
  return true;
}
function r(t, n2, e2, r2, l2) {
  for (let o2 = 0; o2 < l2; o2++)
    e2[r2 + o2] = t[n2 + o2];
}
function l(t, n2, e2) {
  let r2 = 0;
  for (let l2 = 0; l2 < e2; l2++)
    r2 = t[n2 + l2] + r2 | 0, r2 = r2 + (r2 << 11) + (r2 >>> 2) | 0;
  return r2 >>> 0;
}
let o = null;
export { n };
