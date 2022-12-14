import { s } from "./index.js";
const e$1 = s.getLogger("esri.views.3d.support.buffer.math");
function t$1(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$1.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u = f2[1], d = f2[2], s2 = f2[4], c = f2[5], i = f2[6], a = f2[8], p = f2[9], y = f2[10], B = f2[12], m = f2[13], l = f2[14], S = t2.typedBuffer, h = t2.typedBufferStride, b = r2.typedBuffer, M = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * h, r3 = e2 * M, f3 = b[r3], o3 = b[r3 + 1], v = b[r3 + 2];
    S[t3] = n2 * f3 + s2 * o3 + a * v + B, S[t3 + 1] = u * f3 + c * o3 + p * v + m, S[t3 + 2] = d * f3 + i * o3 + y * v + l;
  }
}
function r(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$1.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u = f2[1], d = f2[2], s2 = f2[3], c = f2[4], i = f2[5], a = f2[6], p = f2[7], y = f2[8], B = t2.typedBuffer, m = t2.typedBufferStride, l = r2.typedBuffer, S = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * m, r3 = e2 * S, f3 = l[r3], o3 = l[r3 + 1], h = l[r3 + 2];
    B[t3] = n2 * f3 + s2 * o3 + a * h, B[t3 + 1] = u * f3 + c * o3 + p * h, B[t3 + 2] = d * f3 + i * o3 + y * h;
  }
}
function f(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u = t2.typedBuffer, d = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d;
    o2[e3] = r2 * u[t3], o2[e3 + 1] = r2 * u[t3 + 1], o2[e3 + 2] = r2 * u[t3 + 2];
  }
}
function o(e2, t2) {
  const r2 = Math.min(e2.count, t2.count), f2 = e2.typedBuffer, o2 = e2.typedBufferStride, n2 = t2.typedBuffer, u = t2.typedBufferStride;
  for (let d = 0; d < r2; d++) {
    const e3 = d * o2, t3 = d * u, r3 = n2[t3], s2 = n2[t3 + 1], c = n2[t3 + 2], i = r3 * r3 + s2 * s2 + c * c;
    if (i > 0) {
      const t4 = 1 / Math.sqrt(i);
      f2[e3] = t4 * r3, f2[e3 + 1] = t4 * s2, f2[e3 + 2] = t4 * c;
    }
  }
}
function n(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u = t2.typedBuffer, d = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d;
    o2[e3] = u[t3] >> r2, o2[e3 + 1] = u[t3 + 1] >> r2, o2[e3 + 2] = u[t3 + 2] >> r2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, transformMat4: t$1, transformMat3: r, scale: f, normalize: o, shiftRight: n }, Symbol.toStringTag, { value: "Module" }));
function e(e2, t2, f2) {
  const d = e2.typedBuffer, n2 = e2.typedBufferStride, o2 = t2.typedBuffer, r2 = t2.typedBufferStride, c = f2 ? f2.count : t2.count;
  let u = (f2 && f2.dstIndex ? f2.dstIndex : 0) * n2, l = (f2 && f2.srcIndex ? f2.srcIndex : 0) * r2;
  for (let s2 = 0; s2 < c; ++s2)
    d[u] = o2[l], d[u + 1] = o2[l + 1], d[u + 2] = o2[l + 2], u += n2, l += r2;
}
function t(e2, t2, f2, d, n2) {
  var _a, _b;
  const o2 = e2.typedBuffer, r2 = e2.typedBufferStride, c = (_a = n2 == null ? void 0 : n2.count) != null ? _a : e2.count;
  let u = ((_b = n2 == null ? void 0 : n2.dstIndex) != null ? _b : 0) * r2;
  for (let l = 0; l < c; ++l)
    o2[u] = t2, o2[u + 1] = f2, o2[u + 2] = d, u += r2;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e, fill: t }, Symbol.toStringTag, { value: "Module" }));
export { e$1 as a, t as b, e, f, n, o, r, t$1 as t };
