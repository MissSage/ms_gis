var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { dc as en, dd as tn, cr as w$1, de as rn, t, a as r, ch as $$1, aq as v$1, a7 as w$2, df as An, g as s, dg as E$1, dh as s$1, di as P$1, dj as a, dk as O$1, aK as k$1, dl as sn } from "./index.js";
var d;
function M(e, t2, n) {
  return !An(e, t2, n);
}
function w(t2, n, o) {
  const i = M(t2, n, o);
  if (i && !en())
    throw new s("rasterprojectionhelper-project", "projection engine is not loaded");
  return i;
}
!function(e) {
  e[e.None = 0] = "None", e[e.North = 1] = "North", e[e.South = 2] = "South", e[e.Both = 3] = "Both";
}(d || (d = {}));
const R = (e, t2, n, o = 0) => {
  if (n[0] === 1)
    return [0, 0];
  let i = 1, r2 = -1, s2 = 1, a2 = -1;
  for (let g = 0; g < e.length; g += 2)
    isNaN(e[g]) || (i = i > e[g] ? e[g] : i, r2 = r2 > e[g] ? r2 : e[g], s2 = s2 > e[g + 1] ? e[g + 1] : s2, a2 = a2 > e[g + 1] ? a2 : e[g + 1]);
  const { cols: l, rows: c } = t2, f = (r2 - i) / l / n[0], u = (a2 - s2) / c / n[1], m = 2 * o;
  let h = 0, x = false, p = [0, 0];
  for (let g = 0; g < l - 3; g++) {
    for (let t3 = 0; t3 < c - 3; t3++) {
      const n2 = g * c * 2 + 2 * t3, o2 = (e[n2] + e[n2 + 4] + e[n2 + 4 * c] + e[n2 + 4 * c + 4]) / 4, i2 = (e[n2 + 1] + e[n2 + 5] + e[n2 + 4 * c + 1] + e[n2 + 4 * c + 5]) / 4, r3 = Math.abs((o2 - e[n2 + 2 * c + 2]) / f), s3 = Math.abs((i2 - e[n2 + 2 * c + 3]) / u);
      if (r3 + s3 > h && (h = r3 + s3, p = [r3, s3]), m && h > m) {
        x = true;
        break;
      }
    }
    if (x)
      break;
  }
  return p;
}, P = { 3395: 20037508342789244e-9, 3410: 17334193943686873e-9, 3857: 20037508342788905e-9, 3975: 17367530445161372e-9, 4087: 20037508342789244e-9, 4088: 20015108787169147e-9, 6933: 17367530445161372e-9, 32662: 20037508342789244e-9, 53001: 2001508679602057e-8, 53002: 1000754339801029e-8, 53003: 2001508679602057e-8, 53004: 2001508679602057e-8, 53016: 14152803599503474e-9, 53017: 17333573624304302e-9, 53034: 2001508679602057e-8, 53079: 20015114352186374e-9, 53080: 20015114352186374e-9, 54001: 20037508342789244e-9, 54002: 10018754171394624e-9, 54003: 20037508342789244e-9, 54004: 20037508342789244e-9, 54016: 14168658027268292e-9, 54017: 1736753044516137e-8, 54034: 20037508342789244e-9, 54079: 20037508342789244e-9, 54080: 20037508342789244e-9, 54100: 20037508342789244e-9, 54101: 20037508342789244e-9 }, S = 32, b = 4, G = b, N = new Map(), E = new Map(), k = 500;
async function T() {
  en() || await tn();
}
function v(e, t2, n) {
  if (!w(e.spatialReference, t2))
    return null;
  return n ? sn(t2, e.spatialReference, e) : sn(e.spatialReference, t2, e);
}
function C(e, i, r$1, s2 = null) {
  const a2 = e.spatialReference;
  if (a2.equals(i))
    return e;
  w(a2, i, s2);
  const l = r$1.center, c = new w$1({ xmin: l.x - e.x / 2, xmax: l.x + e.x / 2, ymin: l.y - e.y / 2, ymax: l.y + e.y / 2, spatialReference: a2 }), f = rn(c, i, s2), u = U(i);
  let m;
  if (t(f) || r(u) && f.width >= u) {
    const t2 = $$1(a2) / $$1(i);
    m = { x: e.x * t2, y: e.y * t2 };
  } else
    m = { x: f.width, y: f.height };
  return m;
}
function _(e, t2 = 0.01) {
  return $$1(e) ? t2 / $$1(e) : 0;
}
function j(e, t2, n = null, o = true) {
  const i = e.spatialReference;
  if (i.equals(t2))
    return e;
  w(i, t2, n);
  const r2 = rn(e, t2, n);
  return o && r2 ? (z([e], [r2], i, t2), r2) : r2;
}
function z(e, t2, o, i) {
  const r$1 = D(o, true), s2 = D(i, true), a2 = _(o, k), l = _(i, k);
  if (a2 && r(r$1) && r(s2))
    for (let n = 0; n < e.length; n++) {
      const o2 = t2[n];
      if (!o2)
        continue;
      const { x: i2 } = e[n], { x: c } = o2;
      c >= s2[1] - l && Math.abs(i2 - r$1[0]) < a2 ? o2.x -= s2[1] - s2[0] : c <= s2[0] + l && Math.abs(i2 - r$1[1]) < a2 && (o2.x += s2[1] - s2[0]);
    }
}
function W(e) {
  const { inSR: t2, outSR: o, datumTransformation: i, preferPE: r$1 } = e;
  if (t2.equals(o)) {
    const { points: t3 } = Y(e, null);
    return t3;
  }
  if (t2.isWebMercator && o.isWGS84 || t2.isWGS84 && o.isWebMercator)
    return A(e);
  if (w(t2, o, i) && r$1) {
    if (t2.isGeographic)
      return O(e);
    const o2 = B(t2);
    if (r(o2))
      return O(e);
  }
  return L(e);
}
function L(e) {
  const { points: t2 } = Y(e, null), { inSR: n, outSR: o, datumTransformation: i } = e, r2 = t2.map((e2) => new w$2(e2[0], e2[1], n)), s2 = rn(r2, o, i);
  return i && z(r2, s2, n, o), s2.map((e2) => e2 ? [e2.x, e2.y] : [NaN, NaN]);
}
function O(e) {
  const { inSR: t2, outSR: o, datumTransformation: l } = e, c = B(t2), { points: f, mask: u } = Y(e, c);
  if (!t2.isGeographic) {
    const e2 = t2.wkid ? E$1.coordsys(t2.wkid) : E$1.fromString(t2.isGeographic ? s$1.PE_TYPE_GEOGCS : s$1.PE_TYPE_PROJCS, t2.wkt);
    P$1.projToGeog(e2, f.length, f);
  }
  if (r(l) && l.steps.length) {
    let e2;
    const t3 = 179.9955;
    if (o.isGeographic && (e2 = f.map(([e3]) => e3 > t3 ? 1 : e3 < -t3 ? -1 : 0)), l.steps.forEach((e3) => {
      const t4 = e3.wkid ? E$1.geogtran(e3.wkid) : E$1.fromString(s$1.PE_TYPE_GEOGTRAN, e3.wkt);
      a.geogToGeog(t4, f.length, f, null, e3.isInverse ? s$1.PE_TRANSFORM_2_TO_1 : s$1.PE_TRANSFORM_1_TO_2);
    }), e2)
      for (let n = 0; n < f.length; n++) {
        const o2 = e2[n], i = f[n][0], r2 = i > t3 ? 1 : i < -t3 ? -1 : 0;
        o2 && r2 && o2 !== r2 && (f[n][0] = o2 > 0 ? i + 360 : i - 360);
      }
  }
  if (!o.isGeographic) {
    const e2 = B(o, true), t3 = r(e2) && e2.isEnvelope ? [e2.bbox[1], e2.bbox[3]] : [-90, 90];
    F(f, t3);
    const a2 = o.wkid ? E$1.coordsys(o.wkid) : E$1.fromString(o.isGeographic ? s$1.PE_TYPE_GEOGCS : s$1.PE_TYPE_PROJCS, o.wkt);
    P$1.geogToProj(a2, f.length, f);
  }
  let m = f;
  if (u && f.length !== u.length) {
    m = [];
    for (let e2 = 0, t3 = 0; e2 < u.length; e2++)
      u[e2] ? m.push(f[t3++]) : m.push([NaN, NaN]);
  }
  return m;
}
function A(e) {
  const { cols: t2, rows: n, xres: o, yres: i, usePixelCenter: r2, inSR: s2, outSR: a2 } = e;
  let { xmin: l, ymax: c } = e;
  r2 && (l += o / 2, c -= i / 2);
  const f = [], u = [], m = Math.max(t2, n);
  for (let g = 0; g < m; g++) {
    const e2 = l + o * Math.min(t2, g), r3 = c - i * Math.min(n, g), m2 = rn(new w$2({ x: e2, y: r3, spatialReference: s2 }), a2);
    g <= t2 && f.push(m2.x), g <= n && u.push(m2.y);
  }
  const x = [];
  for (let h = 0; h < t2; h++)
    for (let e2 = 0; e2 < n; e2++)
      x.push([f[h], u[e2]]);
  return x;
}
function B(e, t2 = false) {
  let n = e.wkid || e.wkt;
  if (!n || e.isGeographic)
    return null;
  if (n = String(n), N.has(n)) {
    const e2 = N.get(n);
    return t2 ? e2 == null ? void 0 : e2.gcs : e2 == null ? void 0 : e2.pcs;
  }
  const o = e.wkid ? E$1.coordsys(e.wkid) : E$1.fromString(e.isGeographic ? s$1.PE_TYPE_GEOGCS : s$1.PE_TYPE_PROJCS, e.wkt), s2 = I(o, _(e, 1e-4)), a2 = I(o, 0, true);
  return N.set(n, { pcs: s2, gcs: a2 }), t2 ? a2 : s2;
}
function I(e, t2 = 0, n = false) {
  const o = O$1.generate(e), i = n ? e.horizonGcsGenerate() : e.horizonPcsGenerate();
  if (!o || !(i == null ? void 0 : i.length))
    return null;
  let r2 = false, s2 = i.find((e2) => e2.getInclusive() === 1 && e2.getKind() === 1);
  if (!s2) {
    if (s2 = i.find((e2) => e2.getInclusive() === 1 && e2.getKind() === 0), !s2)
      return null;
    r2 = true;
  }
  const a2 = n ? 0 : (o.getNorthPoleLocation() === 2 ? 1 : 0) | (o.getSouthPoleLocation() === 2 ? 2 : 0), c = o.isPannableRectangle(), f = s2.getCoord();
  if (r2)
    return { isEnvelope: r2, isPannable: c, vertices: f, coef: null, bbox: [f[0][0] - t2, f[0][1] - t2, f[1][0] + t2, f[1][1] + t2], poleLocation: a2 };
  let u = 0;
  const m = [];
  let [h, x] = f[0], [p, g] = f[0];
  for (let l = 0, y = f.length; l < y; l++) {
    u++, u === y && (u = 0);
    const [e2, t3] = f[l], [n2, o2] = f[u];
    if (o2 === t3)
      m.push([e2, n2, t3, o2, 2]);
    else {
      const i2 = (n2 - e2) / (o2 - t3 || 1e-4), r3 = e2 - i2 * t3;
      t3 < o2 ? m.push([i2, r3, t3, o2, 0]) : m.push([i2, r3, o2, t3, 1]);
    }
    h = h < e2 ? h : e2, x = x < t3 ? x : t3, p = p > e2 ? p : e2, g = g > t3 ? g : t3;
  }
  return { isEnvelope: false, isPannable: c, vertices: f, coef: m, bbox: [h, x, p, g], poleLocation: a2 };
}
function Y(e, n) {
  const o = [], { cols: i, rows: r2, xres: s2, yres: a2, usePixelCenter: l } = e;
  let { xmin: c, ymax: f } = e;
  if (l && (c += s2 / 2, f -= a2 / 2), t(n)) {
    for (let e2 = 0; e2 < i; e2++)
      for (let t2 = 0; t2 < r2; t2++)
        o.push([c + s2 * e2, f - a2 * t2]);
    return { points: o };
  }
  const u = new Uint8Array(i * r2);
  if (n.isEnvelope) {
    const { bbox: [e2, t2, l2, m2] } = n;
    for (let h2 = 0, x = 0; h2 < i; h2++) {
      const i2 = c + s2 * h2, p = n.isPannable || i2 >= e2 && i2 <= l2;
      for (let e3 = 0; e3 < r2; e3++, x++) {
        const n2 = f - a2 * e3;
        p && n2 >= t2 && n2 <= m2 && (o.push([i2, n2]), u[x] = 1);
      }
    }
    return { points: o, mask: u };
  }
  const m = n.coef, h = [];
  for (let t2 = 0; t2 < r2; t2++) {
    const e2 = f - a2 * t2, n2 = [], o2 = [];
    for (let t3 = 0; t3 < m.length; t3++) {
      const [i3, r3, s3, a3, l2] = m[t3];
      if (e2 === s3 && s3 === a3)
        n2.push(i3), n2.push(r3), o2.push(2), o2.push(2);
      else if (e2 >= s3 && e2 <= a3) {
        const t4 = i3 * e2 + r3;
        n2.push(t4), o2.push(l2);
      }
    }
    let i2 = n2;
    if (n2.length > 2) {
      let e3 = o2[0] === 2 ? 0 : o2[0], t3 = n2[0];
      i2 = [];
      for (let r3 = 1; r3 < o2.length; r3++)
        o2[r3] === 2 && r3 !== o2.length - 1 || (o2[r3] !== e3 && (i2.push(e3 === 0 ? Math.min(t3, n2[r3 - 1]) : Math.max(t3, n2[r3 - 1])), e3 = o2[r3], t3 = n2[r3]), r3 === o2.length - 1 && i2.push(o2[r3] === 0 ? Math.min(t3, n2[r3]) : Math.max(t3, n2[r3])));
      i2.sort((e4, t4) => e4 - t4);
    } else
      n2[0] > n2[1] && (i2 = [n2[1], n2[0]]);
    h.push(i2);
  }
  for (let t2 = 0, x = 0; t2 < i; t2++) {
    const e2 = c + s2 * t2;
    for (let t3 = 0; t3 < r2; t3++, x++) {
      const n2 = f - a2 * t3, i2 = h[t3];
      if (i2.length === 2)
        e2 >= i2[0] && e2 <= i2[1] && (o.push([e2, n2]), u[x] = 1);
      else if (i2.length > 2) {
        let t4 = false;
        for (let n3 = 0; n3 < i2.length; n3 += 2)
          if (e2 >= i2[n3] && e2 <= i2[n3 + 1]) {
            t4 = true;
            break;
          }
        t4 && (o.push([e2, n2]), u[x] = 1);
      }
    }
  }
  return { points: o, mask: u };
}
function F(e, t2) {
  const [n, o] = t2;
  for (let i = 0; i < e.length; i++) {
    const t3 = e[i][1];
    (t3 < n || t3 > o) && (e[i] = [NaN, NaN]);
  }
}
function q(e) {
  const n = U(e[0].spatialReference);
  if (e.length < 2 || t(n))
    return e[0];
  let { xmin: o, xmax: i, ymin: r2, ymax: s2 } = e[0];
  for (let t2 = 1; t2 < e.length; t2++) {
    const o2 = e[t2];
    i = o2.xmax + n * t2, r2 = Math.min(r2, o2.ymin), s2 = Math.max(s2, o2.ymax);
  }
  return new w$1({ xmin: o, xmax: i, ymin: r2, ymax: s2, spatialReference: e[0].spatialReference });
}
function J(e, o, i = null, r$1 = true) {
  const s2 = e.spatialReference;
  if (s2.equals(o))
    return e;
  const a2 = Q(e), l = U(s2, true), c = U(o);
  if (a2 === 0 || t(l) || t(c)) {
    const a3 = K(e, o, i, r$1);
    if (t(l) && r(c) && Math.abs(a3.width - c) < _(o) && en()) {
      const t2 = B(s2);
      if (r(t2) && t2.poleLocation === d.None && e.width < (t2.bbox[2] - t2.bbox[0]) / 2)
        return X(e, o) || a3;
    }
    return a3;
  }
  const u = e.clone().normalize();
  if (u.length === 1 && e.xmax < l && e.xmax - l / 2 > _(s2)) {
    const { xmin: t2, xmax: n } = e;
    for (let o2 = 0; o2 <= a2; o2++) {
      const i2 = o2 === 0 ? t2 : -l / 2, r2 = o2 === a2 ? n - l * o2 : l / 2;
      u[o2] = new w$1({ xmin: i2, xmax: r2, ymin: e.ymin, ymax: e.ymax, spatialReference: s2 });
    }
  }
  return q(u.map((e2) => K(e2, o, i, r$1)).filter(r));
}
function X(e, n) {
  const o = U(n);
  if (t(o))
    return null;
  let { xmin: i, ymin: r2, xmax: s2, ymax: a2 } = e;
  const l = e.spatialReference, c = new v$1({ spatialReference: l, rings: [[[i, r2], [s2, r2], [s2, a2], [i, a2], [i, r2]]] }), f = rn(c, n);
  if (f.rings.length !== 2 || !f.rings[0].length || !f.rings[1].length)
    return null;
  const { rings: u } = f, m = _(l), p = new w$1({ spatialReference: n });
  for (let t2 = 0; t2 < 2; t2++) {
    i = s2 = u[t2][0][0], r2 = a2 = u[t2][0][1];
    for (let e2 = 0; e2 < u[t2].length; e2++)
      i = i > u[t2][e2][0] ? u[t2][e2][0] : i, s2 = s2 < u[t2][e2][0] ? u[t2][e2][0] : s2, r2 = r2 > u[t2][e2][1] ? u[t2][e2][1] : r2, a2 = a2 < u[t2][e2][1] ? u[t2][e2][1] : a2;
    if (t2 === 0)
      p.ymin = r2, p.ymax = a2, p.xmin = i, p.xmax = s2;
    else if (p.ymin = Math.min(p.ymin, r2), p.ymax = Math.max(p.ymax, a2), Math.abs(s2 - o / 2) < m)
      p.xmin = i, p.xmax = p.xmax + o;
    else {
      if (!(Math.abs(i + o / 2) < m))
        return null;
      p.xmax = s2 + o;
    }
  }
  return p;
}
function K(e, n, o = null, i = true, r2 = true) {
  const s2 = e.spatialReference;
  if (s2.equals(n) || !n)
    return e;
  w(s2, n, o);
  const a2 = rn(e, n, o);
  if (r2 && n.isWebMercator && a2 && (a2.ymax = Math.min(20037508342787e-6, a2.ymax), a2.ymin = Math.max(-20037508342787e-6, a2.ymin), a2.ymin >= a2.ymax))
    return null;
  if (!i || !a2)
    return a2;
  const l = D(s2, true), c = D(n, true);
  if (t(l) || t(c))
    return a2;
  const f = _(s2, 1e-3), u = _(s2, k), m = _(n, 1e-3);
  if (Math.abs(a2.xmin - c[0]) < m && Math.abs(a2.xmax - c[1]) < m) {
    const t2 = Math.abs(e.xmin - l[0]), i2 = Math.abs(l[1] - e.xmax);
    if (t2 < f && i2 > u) {
      a2.xmin = c[0];
      const t3 = [];
      t3.push(new w$2(e.xmax, e.ymin, s2)), t3.push(new w$2(e.xmax, (e.ymin + e.ymax) / 2, s2)), t3.push(new w$2(e.xmax, e.ymax, s2));
      const i3 = t3.map((e2) => j(e2, n, o)).filter((e2) => !isNaN(e2 == null ? void 0 : e2.x)).map((e2) => e2.x);
      a2.xmax = Math.max.apply(null, i3);
    }
    if (i2 < f && t2 > u) {
      a2.xmax = c[1];
      const t3 = [];
      t3.push(new w$2(e.xmin, e.ymin, s2)), t3.push(new w$2(e.xmin, (e.ymin + e.ymax) / 2, s2)), t3.push(new w$2(e.xmin, e.ymax, s2));
      const i3 = t3.map((e2) => j(e2, n, o)).filter((e2) => !isNaN(e2 == null ? void 0 : e2.x)).map((e2) => e2.x);
      a2.xmin = Math.min.apply(null, i3);
    }
  } else {
    const e2 = _(n, 1e-3);
    Math.abs(a2.xmin - c[0]) < e2 && (a2.xmin = c[0]), Math.abs(a2.xmax - c[1]) < e2 && (a2.xmax = c[1]);
  }
  return a2;
}
function U(e, t2 = false) {
  if (!e)
    return null;
  const n = t2 ? 20037508342787e-6 : 20037508342788905e-9;
  return e.isWebMercator ? 2 * n : e.wkid && e.isGeographic ? 360 : 2 * P[e.wkid] || null;
}
function D(e, t2 = false) {
  if (e.isGeographic)
    return [-180, 180];
  const o = U(e, t2);
  return r(o) ? [-o / 2, o / 2] : null;
}
function H(e, t2, n, o) {
  let i = (e - t2) / n;
  return i - Math.floor(i) != 0 ? i = Math.floor(i) : o && (i -= 1), i;
}
function Q(e, n = false) {
  const o = U(e.spatialReference);
  if (t(o))
    return 0;
  const i = n ? 0 : -(o / 2), r2 = _(e.spatialReference), s2 = !n && Math.abs(e.xmax - o / 2) < r2 ? o / 2 : e.xmax, a2 = !n && Math.abs(e.xmin + o / 2) < r2 ? -o / 2 : e.xmin;
  return H(s2, i, o, true) - H(a2, i, o, false);
}
function V(e) {
  const o = e.storageInfo.origin.x, i = U(e.spatialReference, true);
  if (t(i))
    return { originX: o, halfWorldWidth: null, pyramidsInfo: null };
  const r$1 = i / 2, { nativePixelSize: s2, storageInfo: a2, extent: l } = e, { maximumPyramidLevel: c, blockWidth: f, pyramidScalingFactor: u } = a2;
  let m = s2.x;
  const h = [], x = r(e.transform) && e.transform.type === "gcs-shift", p = o + (x ? 0 : r$1), g = x ? i - o : r$1 - o;
  for (let t2 = 0; t2 <= c; t2++) {
    const e2 = (l.xmax - o) / m / f, t3 = e2 - Math.floor(e2) == 0 ? e2 : Math.ceil(e2), n = g / m / f, i2 = n - Math.floor(n) == 0 ? n : Math.ceil(n), r2 = Math.floor(p / m / f), s3 = Math.round(p / m) % f, a3 = (f - Math.round(g / m) % f) % f;
    h.push({ resolutionX: m, blockWidth: f, datsetColumnCount: t3, worldColumnCountFromOrigin: i2, leftMargin: s3, rightPadding: a3, originColumnOffset: r2 }), m *= u;
  }
  return { originX: o, halfWorldWidth: r$1, pyramidsInfo: h, hasGCSSShiftTransform: x };
}
function Z(e) {
  if (!e || e.isGeographic)
    return e;
  const t2 = String(e.wkid || e.wkt);
  let n;
  if (E.has(t2))
    n = E.get(t2);
  else {
    n = (e.wkid ? E$1.coordsys(e.wkid) : E$1.fromString(s$1.PE_TYPE_PROJCS, e.wkt)).getGeogcs().getCode(), E.set(t2, n);
  }
  return new k$1({ wkid: n });
}
function $(e) {
  const t2 = e.isAdaptive && e.spacing == null;
  let o = e.spacing || [S, S], i = ee(e), r$1 = { cols: i.size[0] + 1, rows: i.size[1] + 1 };
  const s2 = i.outofBoundPointCount > 0 && i.outofBoundPointCount < i.offsets.length / 2;
  let a2 = i.outofBoundPointCount === i.offsets.length / 2 || t2 && s2 ? [0, 0] : R(i.offsets, r$1, o, G);
  const l = (a2[0] + a2[1]) / 2, c = e.projectedExtent.spatialReference, f = e.srcBufferExtent.spatialReference;
  if (t2 && (s2 || l > G)) {
    M(c, f, e.datumTransformation) && (c.isGeographic || r(B(c))), o = [b, b], i = ee(__spreadProps(__spreadValues({}, e), { spacing: o })), r$1 = { cols: i.size[0] + 1, rows: i.size[1] + 1 }, a2 = R(i.offsets, r$1, o, G);
  }
  if (i.error = a2, o[0] > 1 && (i.coefficients = te(i.offsets, r$1, s2)), e.includeGCSGrid && !c.isGeographic && !c.isWebMercator)
    if (f.isGeographic)
      i.gcsGrid = { offsets: i.offsets, coefficients: i.coefficients, spacing: o };
    else {
      const t3 = B(c);
      if (r(t3) && !t3.isEnvelope) {
        const t4 = Z(c), n = J(e.projectedExtent, t4), { offsets: a3 } = ee(__spreadProps(__spreadValues({}, e), { srcBufferExtent: n, spacing: o })), l2 = te(a3, r$1, s2);
        i.gcsGrid = { offsets: a3, coefficients: l2, spacing: o };
      }
    }
  return i;
}
function ee(e) {
  const { projectedExtent: t2, srcBufferExtent: o, pixelSize: i, datumTransformation: r$1, rasterTransform: s2 } = e, a2 = t2.spatialReference, l = o.spatialReference, c = w(a2, l), { xmin: f, ymin: u, xmax: m, ymax: h } = t2, x = U(l), g = r(x) && (e.hasWrapAround || (s2 == null ? void 0 : s2.type) === "gcs-shift"), y = e.spacing || [S, S], d2 = y[0] * i.x, M2 = y[1] * i.y, R2 = y[0] === 1, P2 = Math.ceil((m - f) / d2 - 0.1 / y[0]) + (R2 ? 0 : 1), G2 = Math.ceil((h - u) / M2 - 0.1 / y[1]) + (R2 ? 0 : 1), N2 = W({ cols: P2, rows: G2, xmin: f, ymax: h, xres: d2, yres: M2, inSR: a2, outSR: l, datumTransformation: r$1, preferPE: y[0] <= b, usePixelCenter: R2 }), E2 = [];
  let T2, v2 = 0;
  const C2 = R2 ? -1 : NaN, { xmin: j2, xmax: z2, ymax: L2, width: O2, height: A2 } = o, I2 = _(l, k), Y2 = r(x) && j2 > 0 && z2 > x / 2;
  let F2 = false;
  if (c) {
    const e2 = B(a2);
    F2 = r(e2) && e2.poleLocation > 0;
  }
  for (let n = 0; n < P2; n++) {
    const e2 = [];
    for (let t3 = 0; t3 < G2; t3++) {
      let o2 = N2[n * G2 + t3];
      if (g && o2[0] > z2 && o2[0] > x / 2 - I2 ? o2[0] -= x : g && n === 0 && o2[0] < 0 && Y2 && !s2 && (o2[0] += x), !o2 || isNaN(o2[0]) || isNaN(o2[1]))
        E2.push(C2), E2.push(C2), e2.push(null), v2++;
      else {
        if (s2) {
          const e3 = s2.inverseTransform(new w$2({ x: o2[0], y: o2[1], spatialReference: l }));
          o2 = [e3.x, e3.y];
        }
        e2.push(o2), n > 0 && g && T2[t3] && o2[0] < T2[t3][0] && (o2[0] += x, F2 && o2[0] > z2 && o2[0] > x && (o2[0] -= x)), E2.push((o2[0] - j2) / O2), E2.push((L2 - o2[1]) / A2);
      }
    }
    T2 = e2;
  }
  return { offsets: E2, error: null, coefficients: null, outofBoundPointCount: v2, spacing: y, size: R2 ? [P2, G2] : [P2 - 1, G2 - 1] };
}
function te(e, t2, n) {
  const { cols: o, rows: i } = t2, r2 = new Float32Array((o - 1) * (i - 1) * 2 * 6), s2 = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), a2 = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let l = 0; l < o - 1; l++) {
    for (let t3 = 0; t3 < i - 1; t3++) {
      let n2 = l * i * 2 + 2 * t3;
      const c = e[n2], f = e[n2 + 1], u = e[n2 + 2], m = e[n2 + 3];
      n2 += 2 * i;
      const h = e[n2], x = e[n2 + 1], p = e[n2 + 2], g = e[n2 + 3];
      let y = 0, d2 = 12 * (t3 * (o - 1) + l);
      for (let e2 = 0; e2 < 3; e2++)
        r2[d2++] = s2[y++] * c + s2[y++] * u + s2[y++] * p;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++)
        r2[d2++] = s2[y++] * f + s2[y++] * m + s2[y++] * g;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++)
        r2[d2++] = a2[y++] * c + a2[y++] * h + a2[y++] * p;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++)
        r2[d2++] = a2[y++] * f + a2[y++] * x + a2[y++] * g;
    }
    if (n)
      for (let e2 = 0; e2 < r2.length; e2++)
        isNaN(r2[e2]) && (r2[e2] = -1);
  }
  return r2;
}
function ne(e) {
  const t2 = e.clone().normalize();
  return t2.length === 1 ? t2[0] : q(t2);
}
function oe(e, t2, i) {
  const { storageInfo: r$1, pixelSize: s2 } = t2;
  let a2 = 0, l = false;
  const { pyramidResolutions: c } = r$1;
  if (r(c) && c.length) {
    const n = (e.x + e.y) / 2, r2 = c[c.length - 1], f2 = (r2.x + r2.y) / 2, u2 = (s2.x + s2.y) / 2;
    if (n <= u2)
      a2 = 0;
    else if (n >= f2)
      a2 = c.length, l = n / f2 > 8;
    else {
      let e2, t3 = u2;
      for (let o = 1; o <= c.length; o++) {
        if (e2 = (c[o - 1].x + c[o - 1].y) / 2, n <= e2) {
          n === e2 ? a2 = o : i === "down" ? (a2 = o - 1, l = n / t3 > 8) : a2 = i === "up" || n - t3 > e2 - n || n / t3 > 2 ? o : o - 1;
          break;
        }
        t3 = e2;
      }
    }
    const m2 = a2 === 0 ? s2 : c[a2 - 1];
    if (l) {
      Math.min(m2.x, m2.y) * $$1(t2.spatialReference) > 19567 && (l = false);
    }
    return { pyramidLevel: a2, pyramidResolution: new w$2({ x: m2.x, y: m2.y, spatialReference: t2.spatialReference }), excessiveReading: l };
  }
  const f = Math.log(e.x / s2.x) / Math.LN2, u = Math.log(e.y / s2.y) / Math.LN2, m = t2.storageInfo.maximumPyramidLevel || 0;
  a2 = i === "down" ? Math.floor(Math.min(f, u)) : i === "up" ? Math.ceil(Math.max(f, u)) : Math.round((f + u) / 2), a2 < 0 ? a2 = 0 : a2 > m && (l = a2 > m + 3, a2 = m);
  const h = 2 ** a2;
  return { pyramidLevel: a2, pyramidResolution: new w$2({ x: h * t2.nativePixelSize.x, y: h * t2.nativePixelSize.y, spatialReference: t2.spatialReference }), excessiveReading: l };
}
function ie(e, t2, i = 512, r$1 = true) {
  const { extent: s2, spatialReference: a2, pixelSize: l } = e, c = C(new w$2({ x: l.x, y: l.y, spatialReference: a2 }), t2, s2);
  if (c == null)
    return { projectedPixelSize: null, scales: null, srcResolutions: null, isCustomTilingScheme: false };
  const f = (c.x + c.y) / 2, u = $$1(t2), m = f * u * 96 * 39.37, h = t2.isGeographic ? 256 / i * 2958287637958547e-7 : 256 / i * 591657527591555e-6;
  let x = e.dataType === "vector-magdir" || e.dataType === "vector-uv";
  const g = J(s2, t2), y = Math.min(Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2), Math.ceil(Math.log(h / 2 / m) / Math.LN2));
  if (!x && r$1 && (t2.isGeographic || t2.isWebMercator) && (x = g.xmin * g.xmax < 0, !x && y < 3)) {
    const e2 = U(t2);
    if (r(e2)) {
      const t3 = 2 ** y * f * i, n = Math.ceil(e2 / t3);
      x = n === 1 || n === 2 && e2 / 2 - g.xmax < t3;
    }
  }
  let d2, M2 = m;
  const w2 = 1.001;
  if (x) {
    M2 = h;
    const e2 = t2.isGeographic ? 1341104507446289e-21 : 0.29858214164761665, n = e2 * (96 * u * 39.37), o = t2.isGeographic ? 4326 : 3857;
    d2 = C(new w$2({ x: e2, y: e2, spatialReference: { wkid: o } }), a2, g), d2.x *= M2 / n, d2.y *= M2 / n;
  } else {
    d2 = { x: l.x, y: l.y };
    let e2 = 0;
    for (; M2 < h * (w2 / 2) && e2 < y; )
      e2++, M2 *= 2, d2.x *= 2, d2.y *= 2;
    Math.max(M2, h) / Math.min(M2, h) <= w2 && (M2 = h);
  }
  const R2 = [M2], P2 = [{ x: d2.x, y: d2.y }], S2 = 70.5310735, b2 = Math.min(S2, m) / w2;
  for (; M2 >= b2; )
    M2 /= 2, d2.x /= 2, d2.y /= 2, R2.push(M2), P2.push({ x: d2.x, y: d2.y });
  return { projectedPixelSize: c, scales: R2, srcResolutions: P2, isCustomTilingScheme: !x };
}
export { $, C, J, M, Q, T, U, V, ie as i, j, ne as n, oe as o, v };
