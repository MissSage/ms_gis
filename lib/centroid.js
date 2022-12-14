import { a2 as t } from "./index.js";
function n(t2, n2) {
  return t2 ? n2 ? 4 : 3 : n2 ? 3 : 2;
}
function e(e2, o2, u2, N2, l2) {
  if (t(o2) || !o2.lengths.length)
    return null;
  const s = (l2 == null ? void 0 : l2.originPosition) === "upperLeft" ? -1 : 1;
  e2.lengths.length && (e2.lengths.length = 0), e2.coords.length && (e2.coords.length = 0);
  const c = e2.coords, f = [], i = u2 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: T, coords: h } = o2, g = n(u2, N2);
  let E = 0;
  for (const t2 of T) {
    const n2 = r(i, h, E, t2, u2, N2, s);
    n2 && f.push(n2), E += t2 * g;
  }
  if (f.sort((t2, n2) => {
    let e3 = s * t2[2] - s * n2[2];
    return e3 === 0 && u2 && (e3 = t2[4] - n2[4]), e3;
  }), f.length) {
    let t2 = 6 * f[0][2];
    c[0] = f[0][0] / t2, c[1] = f[0][1] / t2, u2 && (t2 = 6 * f[0][4], c[2] = t2 !== 0 ? f[0][3] / t2 : 0), (c[0] < i[0] || c[0] > i[1] || c[1] < i[2] || c[1] > i[3] || u2 && (c[2] < i[4] || c[2] > i[5])) && (c.length = 0);
  }
  if (!c.length) {
    const t2 = o2.lengths[0] ? I(h, 0, T[0], u2, N2) : null;
    if (!t2)
      return null;
    c[0] = t2[0], c[1] = t2[1], u2 && t2.length > 2 && (c[2] = t2[2]);
  }
  return e2;
}
function r(t2, e2, r2, I2, o2, u2, N2 = 1) {
  const l2 = n(o2, u2);
  let s = r2, c = r2 + l2, f = 0, i = 0, T = 0, h = 0, g = 0;
  for (let n2 = 0, m = I2 - 1; n2 < m; n2++, s += l2, c += l2) {
    const n3 = e2[s], r3 = e2[s + 1], I3 = e2[s + 2], u3 = e2[c], N3 = e2[c + 1], l3 = e2[c + 2];
    let E2 = n3 * N3 - u3 * r3;
    h += E2, f += (n3 + u3) * E2, i += (r3 + N3) * E2, o2 && (E2 = n3 * l3 - u3 * I3, T += (I3 + l3) * E2, g += E2), n3 < t2[0] && (t2[0] = n3), n3 > t2[1] && (t2[1] = n3), r3 < t2[2] && (t2[2] = r3), r3 > t2[3] && (t2[3] = r3), o2 && (I3 < t2[4] && (t2[4] = I3), I3 > t2[5] && (t2[5] = I3));
  }
  if (h * N2 > 0 && (h *= -1), g * N2 > 0 && (g *= -1), !h)
    return null;
  const E = [f, i, 0.5 * h];
  return o2 && (E[3] = T, E[4] = 0.5 * g), E;
}
function I(t2, e2, r2, I2, s) {
  const c = n(I2, s);
  let f = e2, i = e2 + c, T = 0, h = 0, g = 0, E = 0;
  for (let n2 = 0, m = r2 - 1; n2 < m; n2++, f += c, i += c) {
    const n3 = t2[f], e3 = t2[f + 1], r3 = t2[f + 2], s2 = t2[i], c2 = t2[i + 1], m2 = t2[i + 2], b = I2 ? u(n3, e3, r3, s2, c2, m2) : o(n3, e3, s2, c2);
    if (b)
      if (T += b, I2) {
        const t3 = l(n3, e3, r3, s2, c2, m2);
        h += b * t3[0], g += b * t3[1], E += b * t3[2];
      } else {
        const t3 = N(n3, e3, s2, c2);
        h += b * t3[0], g += b * t3[1];
      }
  }
  return T > 0 ? I2 ? [h / T, g / T, E / T] : [h / T, g / T] : r2 > 0 ? I2 ? [t2[e2], t2[e2 + 1], t2[e2 + 2]] : [t2[e2], t2[e2 + 1]] : null;
}
function o(t2, n2, e2, r2) {
  const I2 = e2 - t2, o2 = r2 - n2;
  return Math.sqrt(I2 * I2 + o2 * o2);
}
function u(t2, n2, e2, r2, I2, o2) {
  const u2 = r2 - t2, N2 = I2 - n2, l2 = o2 - e2;
  return Math.sqrt(u2 * u2 + N2 * N2 + l2 * l2);
}
function N(t2, n2, e2, r2) {
  return [t2 + 0.5 * (e2 - t2), n2 + 0.5 * (r2 - n2)];
}
function l(t2, n2, e2, r2, I2, o2) {
  return [t2 + 0.5 * (r2 - t2), n2 + 0.5 * (I2 - n2), e2 + 0.5 * (o2 - e2)];
}
export { e };
