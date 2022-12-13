import { ck as s$2, t, k as e, a as r$1, s as s$3, h as has, l as f$2, b6 as t$1, ao as R, cr as w$2, db as m$2 } from "./index.js";
import { r, g as g$2 } from "./pixelUtils.js";
const s$1 = new Map();
s$1.set("meter-per-second", 1), s$1.set("kilometer-per-hour", 0.277778), s$1.set("knots", 0.514444), s$1.set("feet-per-second", 0.3048), s$1.set("mile-per-hour", 0.44704);
const a = 180 / Math.PI, h$1 = 5, c$1 = new s$2({ esriMetersPerSecond: "meter-per-second", esriKilometersPerHour: "kilometer-per-hour", esriKnots: "knots", esriFeetPerSecond: "feet-per-second", esriMilesPerHour: "mile-per-hour" });
function l(t2, e2) {
  return s$1.get(t2) / s$1.get(e2) || 1;
}
function u$1(t2) {
  return (450 - t2) % 360;
}
function f$1(t2, e2 = "geographic") {
  const [n, r2] = t2, o = Math.sqrt(n * n + r2 * r2);
  let i = Math.atan2(r2, n) * a;
  return i = (360 + i) % 360, e2 === "geographic" && (i = u$1(i)), [o, i];
}
function p$1(t2, e2 = "geographic") {
  let n = t2[1];
  e2 === "geographic" && (n = u$1(n)), n %= 360;
  const r2 = t2[0];
  return [r2 * Math.cos(n / a), r2 * Math.sin(n / a)];
}
function m$1(t$12, r$12, o, s2 = "geographic") {
  if (!r(t$12) || t(o))
    return t$12;
  const a2 = r$12 === "vector-magdir" ? t$12.clone() : e(d$1(t$12, r$12)), h2 = a2.pixels[1];
  for (let e2 = 0; e2 < h2.length; e2++)
    h2[e2] = s2 === "geographic" ? (h2[e2] + o[e2] + 270) % 360 : (h2[e2] + 360 - o[e2]) % 360;
  return r$12 === "vector-magdir" ? a2 : d$1(a2, "vector-magdir");
}
function d$1(t2, e2, n = "geographic", r$12 = 1) {
  if (!r(t2))
    return t2;
  const { pixels: s2, width: a2, height: h2 } = t2, c2 = a2 * h2, l2 = s2[0], u2 = s2[1], m2 = t2.pixelType.startsWith("f") ? t2.pixelType : "f32", d2 = g$2.createEmptyBand(m2, c2), g2 = g$2.createEmptyBand(m2, c2);
  let x2 = 0;
  for (let o = 0; o < h2; o++)
    for (let t3 = 0; t3 < a2; t3++)
      e2 === "vector-uv" ? ([d2[x2], g2[x2]] = f$1([l2[x2], u2[x2]], n), d2[x2] *= r$12) : ([d2[x2], g2[x2]] = p$1([l2[x2], u2[x2]], n), d2[x2] *= r$12, g2[x2] *= r$12), x2++;
  const M2 = new g$2({ pixelType: m2, width: t2.width, height: t2.height, mask: t2.mask, validPixelCount: t2.validPixelCount, maskIsAlpha: t2.maskIsAlpha, pixels: [d2, g2] });
  return M2.updateStatistics(), M2;
}
function g$1(t2, e2, n = 1) {
  if (n === 1 || !r(t2))
    return t2;
  const r$12 = t2.clone(), { pixels: o, width: s2, height: a2 } = r$12, h2 = o[0], c2 = o[1];
  let l2 = 0;
  for (let i = 0; i < a2; i++)
    for (let t3 = 0; t3 < s2; t3++)
      e2 === "vector-uv" ? (h2[l2] *= n, c2[l2] *= n) : h2[l2] *= n, l2++;
  return r$12.updateStatistics(), r$12;
}
function x$1(t$12, n, r2, o, i) {
  if (t(i) || !i.spatialReference.equals(t$12.spatialReference))
    return { extent: t$12, width: Math.round(n / o), height: Math.round(r2 / o), resolution: t$12.width / n };
  const s2 = i.xmin, a2 = i.ymax, h2 = (t$12.xmax - t$12.xmin) / n * o, c2 = (t$12.ymax - t$12.ymin) / r2 * o, l2 = (h2 + c2) / 2;
  return t$12.xmin = s2 + Math.floor((t$12.xmin - s2) / h2) * h2, t$12.xmax = s2 + Math.ceil((t$12.xmax - s2) / h2) * h2, t$12.ymin = a2 + Math.floor((t$12.ymin - a2) / c2) * c2, t$12.ymax = a2 + Math.ceil((t$12.ymax - a2) / c2) * c2, { extent: t$12, width: Math.round(t$12.width / h2), height: Math.round(t$12.height / c2), resolution: l2 };
}
const M$1 = k(0, 0, 0);
function k(t2 = 0, e2 = 0, n = Math.PI, r2 = true) {
  r2 && (n = (2 * Math.PI - n) % (2 * Math.PI));
  const o = r2 ? -1 : 1, i = 13 * o, s2 = -7 * o, a2 = -2 * o, h2 = -16 * o, c2 = 21.75, [l2, u2] = y$1(0, e2 + i, n, c2), [f2, p2] = y$1(t2 - 5.5, e2 + s2, n, c2), [m2, d2] = y$1(t2 + 5.5, e2 + s2, n, c2), [g2, x2] = y$1(t2 - 1.5, e2 + a2, n, c2), [M2, k2] = y$1(t2 + 1.5, e2 + a2, n, c2), [w2, P2] = y$1(t2 - 1.5, e2 + h2, n, c2), [b2, v2] = y$1(t2 + 1.5, e2 + h2, n, c2);
  return [l2, u2, f2, p2, g2, x2, M2, k2, m2, d2, w2, P2, b2, v2];
}
function w$1(t2 = 0, e2 = Math.PI, n = true) {
  n && (e2 = (2 * Math.PI - e2) % (2 * Math.PI));
  const r2 = 10, o = n ? -1 : 1, i = 5 * o, s2 = 20 * o, a2 = 25 * o, c2 = 45, l2 = 0, u2 = 0, f2 = 2, p2 = 0, m2 = f2 * o, d2 = n ? 1 : -1, g2 = r2 / 2 * d2;
  let [x2, M2] = [l2 + g2, u2 - s2], [k2, w2] = [x2 + f2 * d2, M2], [P2, b2] = [k2 - p2 * d2, w2 + m2], [v2, I2] = [l2 - g2, u2 - a2], [A2, _2] = [v2 + p2 * d2, I2 - m2], U2 = Math.ceil(t2 / h$1), S2 = Math.floor(U2 / 10);
  U2 -= 8 * S2;
  const D2 = [], F2 = [];
  for (let h2 = 0; h2 < U2 / 2; h2++, S2--) {
    S2 <= 0 && U2 % 2 == 1 && h2 === (U2 - 1) / 2 && (v2 = l2, A2 = v2 + p2 * d2, I2 = (I2 + M2) / 2, _2 = I2 - m2);
    const [t3, n2] = y$1(v2, I2, e2, c2);
    if (S2 > 0) {
      const [r3, o2] = y$1(k2, I2, e2, c2), [i2, s3] = y$1(x2, M2, e2, c2);
      D2.push(r3), D2.push(o2), D2.push(t3), D2.push(n2), D2.push(i2), D2.push(s3);
    } else {
      const [r3, o2] = y$1(k2, w2, e2, c2), [i2, s3] = y$1(P2, b2, e2, c2), [a3, h3] = y$1(A2, _2, e2, c2);
      F2.push(t3), F2.push(n2), F2.push(a3), F2.push(h3), F2.push(i2), F2.push(s3), F2.push(r3), F2.push(o2);
    }
    I2 += i, M2 += i, w2 += i, b2 += i, _2 += i;
  }
  const [j2, N] = y$1(l2 + g2, u2 + s2, e2, c2), J = (r2 / 2 + f2) * d2, [O, q] = y$1(l2 + J, u2 + s2, e2, c2), [B, E] = y$1(l2 + g2, u2 - a2, e2, c2), [T, C] = y$1(l2 + J, u2 - a2, e2, c2);
  return { pennants: D2, barbs: F2, shaft: [j2, N, O, q, B, E, T, C] };
}
function y$1(t2, e2, n, r2 = 1) {
  const o = Math.sqrt(t2 * t2 + e2 * e2) / r2, i = (2 * Math.PI + Math.atan2(e2, t2)) % (2 * Math.PI);
  return [o, (2 * Math.PI + i - n) % (2 * Math.PI)];
}
const P = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], b = [0, 0.5, 1, 1.5, 2], v = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function I(t2, e2, n, r2) {
  const o = l(r2 || "knots", n);
  let i;
  for (i = 1; i < e2.length; i++)
    if (i === e2.length - 1) {
      if (t2 < e2[i] * o)
        break;
    } else if (t2 <= e2[i] * o)
      break;
  return Math.min(i - 1, e2.length - 2);
}
function A(t2, e2, n, r2, o) {
  let i = 0;
  switch (e2) {
    case "beaufort_kn":
      i = I(t2, P, "knots", n);
      break;
    case "beaufort_km":
      i = I(t2, P, "kilometer-per-hour", n);
      break;
    case "beaufort_ft":
      i = I(t2, P, "feet-per-second", n);
      break;
    case "beaufort_m":
      i = I(t2, P, "meter-per-second", n);
      break;
    case "classified_arrow":
      i = I(t2, o != null ? o : [], r2, n);
      break;
    case "ocean_current_m":
      i = I(t2, b, "meter-per-second", n);
      break;
    case "ocean_current_kn":
      i = I(t2, v, "knots", n);
  }
  return i;
}
function _(t2, e2) {
  const { style: n, inputUnit: o, outputUnit: i, breakValues: s2 } = e2, a2 = c$1.fromJSON(o), h2 = c$1.fromJSON(i), l2 = 7 * 6, u2 = 15;
  let f2 = 0, p2 = 0;
  const { width: m2, height: d2, mask: g2 } = t2, x2 = t2.pixels[0], w2 = t2.pixels[1], y2 = r$1(g2) ? g2.filter((t3) => t3 > 0).length : m2 * d2, P2 = new Float32Array(y2 * l2), b2 = new Uint32Array(u2 * y2), v2 = e2.invertDirection ? k(0, 0, 0, false) : M$1;
  for (let r2 = 0; r2 < d2; r2++)
    for (let t3 = 0; t3 < m2; t3++) {
      const e3 = r2 * m2 + t3;
      if (!g2 || g2[r2 * m2 + t3]) {
        const o2 = (w2[e3] + 360) % 360 / 180 * Math.PI, i2 = A(x2[e3], n, a2, h2, s2);
        for (let n2 = 0; n2 < v2.length; n2 += 2)
          P2[f2++] = (t3 + 0.5) / m2, P2[f2++] = (r2 + 0.5) / d2, P2[f2++] = v2[n2], P2[f2++] = v2[n2 + 1] + o2, P2[f2++] = i2, P2[f2++] = x2[e3];
        const c2 = 7 * (f2 / l2 - 1);
        b2[p2++] = c2, b2[p2++] = c2 + 1, b2[p2++] = c2 + 2, b2[p2++] = c2 + 0, b2[p2++] = c2 + 4, b2[p2++] = c2 + 3, b2[p2++] = c2 + 0, b2[p2++] = c2 + 2, b2[p2++] = c2 + 3, b2[p2++] = c2 + 2, b2[p2++] = c2 + 5, b2[p2++] = c2 + 3, b2[p2++] = c2 + 5, b2[p2++] = c2 + 6, b2[p2++] = c2 + 3;
      }
    }
  return { vertexData: P2, indexData: b2 };
}
const U = [];
function S(t2, e2) {
  if (U.length === 0)
    for (let h2 = 0; h2 < 30; h2++)
      U.push(w$1(5 * h2, 0, !e2.invertDirection));
  const n = l(c$1.fromJSON(e2.inputUnit), "knots"), { width: r2, height: o, mask: i } = t2, s2 = t2.pixels[0], a2 = t2.pixels[1], u2 = 6, f2 = [], p2 = [];
  let m2 = 0, d2 = 0;
  for (let c2 = 0; c2 < o; c2++)
    for (let t3 = 0; t3 < r2; t3++) {
      const e3 = c2 * r2 + t3, l2 = s2[e3] * n;
      if ((!i || i[c2 * r2 + t3]) && l2 >= h$1) {
        const n2 = (a2[e3] + 360) % 360 / 180 * Math.PI, { pennants: i2, barbs: s3, shaft: h2 } = U[Math.min(Math.floor(l2 / 5), 29)];
        if (i2.length + s3.length === 0)
          continue;
        let g2 = f2.length / u2;
        const x2 = (t3 + 0.5) / r2, M2 = (c2 + 0.5) / o;
        for (let t4 = 0; t4 < i2.length; t4 += 2)
          f2[m2++] = x2, f2[m2++] = M2, f2[m2++] = i2[t4], f2[m2++] = i2[t4 + 1] + n2, f2[m2++] = 0, f2[m2++] = l2;
        for (let t4 = 0; t4 < s3.length; t4 += 2)
          f2[m2++] = x2, f2[m2++] = M2, f2[m2++] = s3[t4], f2[m2++] = s3[t4 + 1] + n2, f2[m2++] = 0, f2[m2++] = l2;
        for (let t4 = 0; t4 < h2.length; t4 += 2)
          f2[m2++] = x2, f2[m2++] = M2, f2[m2++] = h2[t4], f2[m2++] = h2[t4 + 1] + n2, f2[m2++] = 0, f2[m2++] = l2;
        for (let t4 = 0; t4 < i2.length / 6; t4++)
          p2[d2++] = g2, p2[d2++] = g2 + 1, p2[d2++] = g2 + 2, g2 += 3;
        for (let t4 = 0; t4 < s3.length / 8; t4++)
          p2[d2++] = g2, p2[d2++] = g2 + 1, p2[d2++] = g2 + 2, p2[d2++] = g2 + 1, p2[d2++] = g2 + 2, p2[d2++] = g2 + 3, g2 += 4;
        p2[d2++] = g2 + 0, p2[d2++] = g2 + 1, p2[d2++] = g2 + 2, p2[d2++] = g2 + 1, p2[d2++] = g2 + 3, p2[d2++] = g2 + 2, g2 += 4;
      }
    }
  return { vertexData: new Float32Array(f2), indexData: new Uint32Array(p2) };
}
function D(t2, e2) {
  const n = 4 * 6;
  let r2 = 0, o = 0;
  const { width: i, height: s2, mask: a2 } = t2, u2 = t2.pixels[0], f2 = [], p2 = [], m2 = l(c$1.fromJSON(e2.inputUnit), "knots"), d2 = e2.style === "wind_speed" ? h$1 : Number.MAX_VALUE;
  for (let h2 = 0; h2 < s2; h2++)
    for (let t3 = 0; t3 < i; t3++) {
      const e3 = u2[h2 * i + t3] * m2;
      if ((!a2 || a2[h2 * i + t3]) && e3 < d2) {
        for (let n2 = 0; n2 < 4; n2++)
          f2[r2++] = (t3 + 0.5) / i, f2[r2++] = (h2 + 0.5) / s2, f2[r2++] = n2 < 2 ? -0.5 : 0.5, f2[r2++] = n2 % 2 == 0 ? -0.5 : 0.5, f2[r2++] = 0, f2[r2++] = e3;
        const a3 = 4 * (r2 / n - 1);
        p2[o++] = a3, p2[o++] = a3 + 1, p2[o++] = a3 + 2, p2[o++] = a3 + 1, p2[o++] = a3 + 2, p2[o++] = a3 + 3;
      }
    }
  return { vertexData: new Float32Array(f2), indexData: new Uint32Array(p2) };
}
function F(t2, e2) {
  return e2.style === "simple_scalar" ? D(t2, e2) : e2.style === "wind_speed" ? S(t2, e2) : _(t2, e2);
}
function j(t2, e2, n, r2 = [0, 0], i = 0.5) {
  const { width: s2, height: a2, mask: h2 } = t2, [c2, l2] = t2.pixels, [u2, m2] = r2, d2 = Math.round((s2 - u2) / n), g2 = Math.round((a2 - m2) / n), x2 = d2 * g2, M2 = new Float32Array(x2), k2 = new Float32Array(x2), w2 = new Uint8Array(x2), y2 = e2 === "vector-uv";
  for (let o = 0; o < g2; o++)
    for (let t3 = 0; t3 < d2; t3++) {
      let e3 = 0;
      const r3 = o * d2 + t3, g3 = Math.max(0, o * n + m2), x3 = Math.max(0, t3 * n + u2), P3 = Math.min(a2, g3 + n), b2 = Math.min(s2, x3 + n);
      for (let t4 = g3; t4 < P3; t4++)
        for (let n2 = x3; n2 < b2; n2++) {
          const o2 = t4 * s2 + n2;
          if (!h2 || h2[o2]) {
            e3++;
            const t5 = y2 ? [c2[o2], l2[o2]] : [c2[o2], (360 + l2[o2]) % 360], [n3, i2] = y2 ? t5 : p$1(t5);
            M2[r3] += n3, k2[r3] += i2;
          }
        }
      if (e3 >= (P3 - g3) * (b2 - x3) * (1 - i)) {
        w2[r3] = 1;
        const [t4, n2] = f$1([M2[r3] / e3, k2[r3] / e3]);
        M2[r3] = t4, k2[r3] = n2;
      } else
        w2[r3] = 0, M2[r3] = 0, k2[r3] = 0;
    }
  const P2 = new g$2({ width: d2, height: g2, pixels: [M2, k2], mask: w2 });
  return P2.updateStatistics(), P2;
}
const s = s$3.getLogger("esri.views.2d.engine.flow.dataUtils"), c = 10;
async function f(t2, e2, n, r2) {
  const i = performance.now(), l2 = u(e2, n), a2 = performance.now(), f2 = m(e2, l2, n.width, n.height), h2 = performance.now(), d2 = w(f2, true), y2 = performance.now(), x2 = t2 === "Streamlines" ? p(d2, c) : g(d2), M2 = performance.now();
  return has("esri-2d-profiler") && (s.info("I.1", "_createFlowFieldFromData (ms)", Math.round(a2 - i)), s.info("I.2", "_getStreamlines (ms)", Math.round(h2 - a2)), s.info("I.3", "createAnimatedLinesData (ms)", Math.round(y2 - h2)), s.info("I.4", "create{Streamlines|Particles}Mesh (ms)", Math.round(M2 - y2)), s.info("I.5", "createFlowMesh (ms)", Math.round(M2 - i)), s.info("I.6", "Mesh size (bytes)", x2.vertexData.buffer.byteLength + x2.indexData.buffer.byteLength)), await Promise.resolve(), f$2(r2), x2;
}
function u(t2, e2) {
  const n = d(e2.data, e2.width, e2.height, t2.smoothing);
  if (t2.interpolate) {
    return (t3, r2) => {
      const o = Math.floor(t3), i = Math.floor(r2);
      if (o < 0 || o >= e2.width)
        return [0, 0];
      if (i < 0 || i >= e2.height)
        return [0, 0];
      const l2 = t3 - o, a2 = r2 - i, s2 = o, c2 = i, f2 = o < e2.width - 1 ? o + 1 : o, u2 = i < e2.height - 1 ? i + 1 : i, h2 = n[2 * (c2 * e2.width + s2)], m2 = n[2 * (c2 * e2.width + f2)], d2 = n[2 * (u2 * e2.width + s2)], w2 = n[2 * (u2 * e2.width + f2)], p2 = n[2 * (c2 * e2.width + s2) + 1], g2 = n[2 * (c2 * e2.width + f2) + 1];
      return [(h2 * (1 - a2) + d2 * a2) * (1 - l2) + (m2 * (1 - a2) + w2 * a2) * l2, (p2 * (1 - a2) + n[2 * (u2 * e2.width + s2) + 1] * a2) * (1 - l2) + (g2 * (1 - a2) + n[2 * (u2 * e2.width + f2) + 1] * a2) * l2];
    };
  }
  return (t3, r2) => {
    const o = Math.round(t3), i = Math.round(r2);
    return o < 0 || o >= e2.width || i < 0 || i >= e2.height ? [0, 0] : [n[2 * (i * e2.width + o) + 0], n[2 * (i * e2.width + o) + 1]];
  };
}
function h(t2, e2, n, r2, o, i, l2, a2, s2) {
  const c2 = [];
  let f2 = n, u2 = r2, h2 = 0, [m2, d2] = e2(f2, u2);
  m2 *= t2.velocityScale, d2 *= t2.velocityScale;
  const w2 = Math.sqrt(m2 * m2 + d2 * d2);
  let p2, g2;
  c2.push({ x: f2, y: u2, t: h2, speed: w2 });
  for (let y2 = 0; y2 < t2.verticesPerLine; y2++) {
    let [n2, r3] = e2(f2, u2);
    n2 *= t2.velocityScale, r3 *= t2.velocityScale;
    const m3 = Math.sqrt(n2 * n2 + r3 * r3);
    if (m3 < t2.minSpeedThreshold)
      return c2;
    const d3 = n2 / m3, w3 = r3 / m3;
    f2 += d3 * t2.segmentLength, u2 += w3 * t2.segmentLength;
    if (h2 += t2.segmentLength / m3, Math.acos(d3 * p2 + w3 * g2) > t2.maxTurnAngle)
      return c2;
    if (t2.collisions) {
      const t3 = Math.round(f2 * s2), e3 = Math.round(u2 * s2);
      if (t3 < 0 || t3 > l2 - 1 || e3 < 0 || e3 > a2 - 1)
        return c2;
      const n3 = i[e3 * l2 + t3];
      if (n3 !== -1 && n3 !== o)
        return c2;
      i[e3 * l2 + t3] = o;
    }
    c2.push({ x: f2, y: u2, t: h2, speed: m3 }), p2 = d3, g2 = w3;
  }
  return c2;
}
function m(t2, e2, n, r2) {
  const o = [], l2 = new t$1(), a2 = 1 / Math.max(t2.lineCollisionWidth, 1), s2 = Math.round(n * a2), c2 = Math.round(r2 * a2), f2 = new Int32Array(s2 * c2);
  for (let i = 0; i < f2.length; i++)
    f2[i] = -1;
  const u2 = [];
  for (let i = 0; i < r2; i += t2.lineSpacing)
    for (let e3 = 0; e3 < n; e3 += t2.lineSpacing)
      u2.push({ x: e3, y: i, sort: l2.getFloat() });
  u2.sort((t3, e3) => t3.sort - e3.sort);
  for (const { x: i, y: m2 } of u2)
    if (l2.getFloat() < t2.density) {
      const n2 = h(t2, e2, i, m2, o.length, f2, s2, c2, a2);
      if (n2.length < 2)
        continue;
      o.push(n2);
    }
  return o;
}
function d(t2, e2, n, r2) {
  if (r2 === 0)
    return t2;
  const o = Math.round(3 * r2), i = new Array(2 * o + 1);
  let l2 = 0;
  for (let c2 = -o; c2 <= o; c2++) {
    const t3 = Math.exp(-c2 * c2 / (r2 * r2));
    i[c2 + o] = t3, l2 += t3;
  }
  for (let c2 = -o; c2 <= o; c2++)
    i[c2 + o] /= l2;
  const a2 = new Float32Array(t2.length);
  for (let c2 = 0; c2 < n; c2++)
    for (let n2 = 0; n2 < e2; n2++) {
      let r3 = 0, l3 = 0;
      for (let a3 = -o; a3 <= o; a3++) {
        if (n2 + a3 < 0 || n2 + a3 >= e2)
          continue;
        const s3 = i[a3 + o];
        r3 += s3 * t2[2 * (c2 * e2 + (n2 + a3)) + 0], l3 += s3 * t2[2 * (c2 * e2 + (n2 + a3)) + 1];
      }
      a2[2 * (c2 * e2 + n2) + 0] = r3, a2[2 * (c2 * e2 + n2) + 1] = l3;
    }
  const s2 = new Float32Array(t2.length);
  for (let c2 = 0; c2 < e2; c2++)
    for (let t3 = 0; t3 < n; t3++) {
      let r3 = 0, l3 = 0;
      for (let s3 = -o; s3 <= o; s3++) {
        if (t3 + s3 < 0 || t3 + s3 >= n)
          continue;
        const f2 = i[s3 + o];
        r3 += f2 * a2[2 * ((t3 + s3) * e2 + c2) + 0], l3 += f2 * a2[2 * ((t3 + s3) * e2 + c2) + 1];
      }
      s2[2 * (t3 * e2 + c2) + 0] = r3, s2[2 * (t3 * e2 + c2) + 1] = l3;
    }
  return s2;
}
function w(t2, e2) {
  const n = new t$1(), r2 = t2.reduce((t3, e3) => t3 + e3.length, 0), o = new Float32Array(4 * r2), l2 = new Array(t2.length);
  let a2 = 0, s2 = 0;
  for (const i of t2) {
    const t3 = a2;
    for (const e3 of i)
      o[4 * a2 + 0] = e3.x, o[4 * a2 + 1] = e3.y, o[4 * a2 + 2] = e3.t, o[4 * a2 + 3] = e3.speed, a2++;
    l2[s2++] = { startVertex: t3, numberOfVertices: i.length, totalTime: i[i.length - 1].t, timeSeed: e2 ? n.getFloat() : 0 };
  }
  return { lineVertices: o, lineDescriptors: l2 };
}
function p(t2, e2) {
  const n = 9, { lineVertices: r2, lineDescriptors: o } = t2;
  let i = 0, l2 = 0;
  for (const m2 of o) {
    i += 2 * m2.numberOfVertices;
    l2 += 6 * (m2.numberOfVertices - 1);
  }
  const a2 = new Float32Array(i * n), s2 = new Uint32Array(l2);
  let c2 = 0, f2 = 0;
  function u2() {
    s2[f2++] = c2 - 2, s2[f2++] = c2, s2[f2++] = c2 - 1, s2[f2++] = c2, s2[f2++] = c2 + 1, s2[f2++] = c2 - 1;
  }
  function h2(t3, e3, r3, o2, i2, l3, s3, f3) {
    const u3 = c2 * n;
    let h3 = 0;
    a2[u3 + h3++] = t3, a2[u3 + h3++] = e3, a2[u3 + h3++] = 1, a2[u3 + h3++] = r3, a2[u3 + h3++] = l3, a2[u3 + h3++] = s3, a2[u3 + h3++] = o2 / 2, a2[u3 + h3++] = i2 / 2, a2[u3 + h3++] = f3, c2++, a2[u3 + h3++] = t3, a2[u3 + h3++] = e3, a2[u3 + h3++] = -1, a2[u3 + h3++] = r3, a2[u3 + h3++] = l3, a2[u3 + h3++] = s3, a2[u3 + h3++] = -o2 / 2, a2[u3 + h3++] = -i2 / 2, a2[u3 + h3++] = f3, c2++;
  }
  for (const m2 of o) {
    const { totalTime: t3, timeSeed: n2 } = m2;
    let o2 = null, i2 = null, l3 = null, a3 = null, s3 = null, c3 = null;
    for (let f3 = 0; f3 < m2.numberOfVertices; f3++) {
      const d2 = r2[4 * (m2.startVertex + f3) + 0], w2 = r2[4 * (m2.startVertex + f3) + 1], p2 = r2[4 * (m2.startVertex + f3) + 2], g2 = r2[4 * (m2.startVertex + f3) + 3];
      let y2 = null, x2 = null, M2 = null, A2 = null;
      if (f3 > 0) {
        y2 = d2 - o2, x2 = w2 - i2;
        const r3 = Math.sqrt(y2 * y2 + x2 * x2);
        if (y2 /= r3, x2 /= r3, f3 > 1) {
          let t4 = y2 + s3, n3 = x2 + c3;
          const r4 = Math.sqrt(t4 * t4 + n3 * n3);
          t4 /= r4, n3 /= r4;
          const o3 = Math.min(1 / (t4 * y2 + n3 * x2), e2);
          t4 *= o3, n3 *= o3, M2 = -n3, A2 = t4;
        } else
          M2 = -x2, A2 = y2;
        M2 !== null && A2 !== null && (h2(o2, i2, l3, M2, A2, t3, n2, g2), u2());
      }
      o2 = d2, i2 = w2, l3 = p2, s3 = y2, c3 = x2, a3 = g2;
    }
    h2(o2, i2, l3, -c3, s3, t3, n2, a3);
  }
  return { vertexData: a2, indexData: s2 };
}
function g(t2) {
  const e2 = 16, n = 1, r2 = 2, { lineVertices: o, lineDescriptors: i } = t2;
  let l2 = 0, a2 = 0;
  for (const j2 of i) {
    const t3 = j2.numberOfVertices - 1;
    l2 += 4 * t3 * 2, a2 += 6 * t3 * 2;
  }
  const s2 = new Float32Array(l2 * e2), c2 = new Uint32Array(a2);
  let f2, u2, h2, m2, d2, w2, p2, g2, y2, x2, M2, A2, I2, V, F2 = 0, D2 = 0;
  function b2() {
    c2[D2++] = F2 - 8, c2[D2++] = F2 - 7, c2[D2++] = F2 - 6, c2[D2++] = F2 - 7, c2[D2++] = F2 - 5, c2[D2++] = F2 - 6, c2[D2++] = F2 - 4, c2[D2++] = F2 - 3, c2[D2++] = F2 - 2, c2[D2++] = F2 - 3, c2[D2++] = F2 - 1, c2[D2++] = F2 - 2;
  }
  function v2(t3, o2, i2, l3, a3, c3, f3, u3, h3, m3, d3, w3, p3, g3) {
    const y3 = F2 * e2;
    let x3 = 0;
    for (const e3 of [n, r2])
      for (const n2 of [1, 2, 3, 4])
        s2[y3 + x3++] = t3, s2[y3 + x3++] = o2, s2[y3 + x3++] = i2, s2[y3 + x3++] = l3, s2[y3 + x3++] = f3, s2[y3 + x3++] = u3, s2[y3 + x3++] = h3, s2[y3 + x3++] = m3, s2[y3 + x3++] = e3, s2[y3 + x3++] = n2, s2[y3 + x3++] = p3, s2[y3 + x3++] = g3, s2[y3 + x3++] = a3 / 2, s2[y3 + x3++] = c3 / 2, s2[y3 + x3++] = d3 / 2, s2[y3 + x3++] = w3 / 2, F2++;
  }
  function S2(t3, e3) {
    let n2 = y2 + M2, r3 = x2 + A2;
    const o2 = Math.sqrt(n2 * n2 + r3 * r3);
    n2 /= o2, r3 /= o2;
    const i2 = y2 * n2 + x2 * r3;
    n2 /= i2, r3 /= i2;
    let l3 = M2 + I2, a3 = A2 + V;
    const s3 = Math.sqrt(l3 * l3 + a3 * a3);
    l3 /= s3, a3 /= s3;
    const c3 = M2 * l3 + A2 * a3;
    l3 /= c3, a3 /= c3, v2(f2, u2, h2, m2, -r3, n2, d2, w2, p2, g2, -a3, l3, t3, e3), b2();
  }
  function k2(t3, e3, n2, r3, o2, i2) {
    if (y2 = M2, x2 = A2, M2 = I2, A2 = V, y2 == null && x2 == null && (y2 = M2, x2 = A2), d2 != null && w2 != null) {
      I2 = t3 - d2, V = e3 - w2;
      const n3 = Math.sqrt(I2 * I2 + V * V);
      I2 /= n3, V /= n3;
    }
    y2 != null && x2 != null && S2(o2, i2), f2 = d2, u2 = w2, h2 = p2, m2 = g2, d2 = t3, w2 = e3, p2 = n2, g2 = r3;
  }
  function L(t3, e3) {
    y2 = M2, x2 = A2, M2 = I2, A2 = V, y2 == null && x2 == null && (y2 = M2, x2 = A2), y2 != null && x2 != null && S2(t3, e3);
  }
  for (const j2 of i) {
    f2 = null, u2 = null, h2 = null, m2 = null, d2 = null, w2 = null, p2 = null, g2 = null, y2 = null, x2 = null, M2 = null, A2 = null, I2 = null, V = null;
    const { totalTime: t3, timeSeed: e3 } = j2;
    for (let n2 = 0; n2 < j2.numberOfVertices; n2++) {
      k2(o[4 * (j2.startVertex + n2) + 0], o[4 * (j2.startVertex + n2) + 1], o[4 * (j2.startVertex + n2) + 2], o[4 * (j2.startVertex + n2) + 3], t3, e3);
    }
    L(t3, e3);
  }
  return { vertexData: s2, indexData: c2 };
}
function y(t2, n) {
  const r2 = n.pixels, { width: o, height: i } = n, l2 = new Float32Array(o * i * 2), a2 = n.mask || new Uint8Array(o * i * 2);
  if (n.mask || a2.fill(255), t2 === "vector-uv")
    for (let e2 = 0; e2 < o * i; e2++)
      l2[2 * e2 + 0] = r2[0][e2], l2[2 * e2 + 1] = -r2[1][e2];
  else if (t2 === "vector-magdir")
    for (let s2 = 0; s2 < o * i; s2++) {
      const t3 = r2[0][s2], n2 = m$2(r2[1][s2]), o2 = Math.cos(n2 - Math.PI / 2), i2 = Math.sin(n2 - Math.PI / 2);
      l2[2 * s2 + 0] = o2 * t3, l2[2 * s2 + 1] = i2 * t3;
    }
  return { data: l2, mask: a2, width: o, height: i };
}
async function x(t2, e2, n, r2, o, i) {
  const c2 = performance.now(), f2 = R(e2.spatialReference);
  if (!f2) {
    const l2 = await M(t2, e2, n, r2, o, i);
    return has("esri-2d-profiler") && s.info("I.7", "loadImagery, early exit (ms)", Math.round(performance.now() - c2)), has("esri-2d-profiler") && s.info("I.9", "Number of parts", 1), l2;
  }
  const [u2, h2] = f2.valid, m2 = h2 - u2, d2 = Math.ceil(e2.width / m2), w2 = e2.width / d2, p2 = Math.round(n / d2);
  let g2 = e2.xmin;
  const y2 = [], x2 = performance.now();
  for (let l2 = 0; l2 < d2; l2++) {
    const n2 = new w$2({ xmin: g2, xmax: g2 + w2, ymin: e2.ymin, ymax: e2.ymax, spatialReference: e2.spatialReference });
    y2.push(M(t2, n2, p2, r2, o, i)), g2 += w2;
  }
  const A2 = await Promise.all(y2);
  has("esri-2d-profiler") && s.info("I.8", "All calls to _fetchPart (ms)", Math.round(performance.now() - x2)), has("esri-2d-profiler") && s.info("I.9", "Number of parts", A2.length);
  const I2 = { data: new Float32Array(n * r2 * 2), mask: new Uint8Array(n * r2), width: n, height: r2 };
  let V = 0;
  for (const l2 of A2) {
    for (let t3 = 0; t3 < l2.height; t3++)
      for (let e3 = 0; e3 < l2.width; e3++)
        V + e3 >= n || (I2.data[2 * (t3 * n + V + e3) + 0] = l2.data[2 * (t3 * l2.width + e3) + 0], I2.data[2 * (t3 * n + V + e3) + 1] = l2.data[2 * (t3 * l2.width + e3) + 1], I2.mask[t3 * n + V + e3] = l2.mask[t3 * l2.width + e3]);
    V += l2.width;
  }
  return has("esri-2d-profiler") && s.info("I.10", "loadImagery, general exit (ms)", Math.round(performance.now() - c2)), I2;
}
async function M(t$12, e2, o, i, l2, a2) {
  const s2 = { requestProjectedLocalDirections: true, signal: a2 };
  if (r$1(l2) && (s2.timeExtent = l2), t$12.type === "imagery") {
    await t$12.load({ signal: a2 });
    const r2 = t$12.rasterInfo.dataType, l3 = await t$12.fetchImage(e2, o, i, s2);
    return !l3 || t(l3.pixelData) || t(l3.pixelData.pixelBlock) ? { data: new Float32Array(o * i * 2), mask: new Uint8Array(o * i), width: o, height: i } : y(r2, l3.pixelData.pixelBlock);
  }
  await t$12.load({ signal: a2 });
  const c2 = t$12.rasterInfo.dataType, f2 = await t$12.fetchPixels(e2, o, i, s2);
  return !f2 || t(f2.pixelBlock) ? { data: new Float32Array(o * i * 2), mask: new Uint8Array(o * i), width: o, height: i } : y(c2, f2.pixelBlock);
}
export { D, F, x as a, f$1 as b, c$1 as c, d$1 as d, f, g$1 as g, j, l, m$1 as m, x$1 as x };
