import { $ as e, a0 as y$1, cn as s$1, a1 as n, co as l$1, g as s$2, a as r$1, t, aX as y$2, s as s$3, k as e$1 } from "./index.js";
class l {
  constructor(l2 = null, a2 = null, t2 = null) {
    this.minValue = l2, this.maxValue = a2, this.noDataValue = t2;
  }
}
var p$1;
let u$1 = p$1 = class extends l$1 {
  constructor(t2) {
    super(t2), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = false, this.statistics = null;
  }
  static createEmptyBand(t2, e2) {
    return new (p$1.getPixelArrayConstructor(t2))(e2);
  }
  static getPixelArrayConstructor(t2) {
    let e2;
    switch (t2) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e2 = Uint8Array;
        break;
      case "u16":
        e2 = Uint16Array;
        break;
      case "u32":
        e2 = Uint32Array;
        break;
      case "s8":
        e2 = Int8Array;
        break;
      case "s16":
        e2 = Int16Array;
        break;
      case "s32":
        e2 = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        e2 = Float32Array;
        break;
      case "f64":
        e2 = Float64Array;
    }
    return e2;
  }
  castPixelType(t2) {
    if (!t2)
      return "f32";
    let e2 = t2.toLowerCase();
    return ["u1", "u2", "u4"].includes(e2) ? e2 = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].includes(e2) || (e2 = "f32"), e2;
  }
  getPlaneCount() {
    var _a;
    return (_a = this.pixels) == null ? void 0 : _a.length;
  }
  addData(t2) {
    var _a;
    if (!t2.pixels || t2.pixels.length !== this.width * this.height)
      throw new s$2("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t2.pixels), this.statistics.push((_a = t2.statistics) != null ? _a : new l());
  }
  getAsRGBA() {
    const t2 = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t2);
        break;
      default:
        this._fillFrom8Bit(t2);
    }
    return new Uint8ClampedArray(t2);
  }
  getAsRGBAFloat() {
    const t2 = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t2), t2;
  }
  updateStatistics() {
    if (!this.pixels)
      return;
    this.statistics = this.pixels.map((t3) => this._calculateBandStatistics(t3, this.mask));
    const t2 = this.mask;
    let e2 = 0;
    if (r$1(t2))
      for (let s2 = 0; s2 < t2.length; s2++)
        t2[s2] && e2++;
    else
      e2 = this.width * this.height;
    this.validPixelCount = e2;
  }
  clamp(t2) {
    if (!t2 || t2 === "f64" || t2 === "f32" || !this.pixels)
      return;
    let e2;
    switch (t2) {
      case "u8":
        e2 = [0, 255];
        break;
      case "u16":
        e2 = [0, 65535];
        break;
      case "u32":
        e2 = [0, 4294967295];
        break;
      case "s8":
        e2 = [-128, 127];
        break;
      case "s16":
        e2 = [-32768, 32767];
        break;
      case "s32":
        e2 = [-2147483648, 2147483647];
        break;
      default:
        e2 = [-34e38, 34e38];
    }
    const [s2, i2] = e2, r2 = this.pixels, l2 = this.width * this.height, a2 = r2.length;
    let o2, h2, n2;
    const c2 = [];
    for (let u2 = 0; u2 < a2; u2++) {
      n2 = p$1.createEmptyBand(t2, l2), o2 = r2[u2];
      for (let t3 = 0; t3 < l2; t3++)
        h2 = o2[t3], n2[t3] = h2 > i2 ? i2 : h2 < s2 ? s2 : h2;
      c2.push(n2);
    }
    this.pixels = c2, this.pixelType = t2;
  }
  extractBands(t$1) {
    const { pixels: e2, statistics: s2 } = this;
    if (t(t$1) || t$1.length === 0 || !e2 || e2.length === 0)
      return this;
    const i2 = e2.length, r2 = t$1.some((t2) => t2 >= e2.length), l2 = i2 === t$1.length && !t$1.some((t2, e3) => t2 !== e3);
    return r2 || l2 ? this : new p$1({ pixelType: this.pixelType, width: this.width, height: this.height, mask: this.mask, validPixelCount: this.validPixelCount, maskIsAlpha: this.maskIsAlpha, pixels: t$1.map((t2) => e2[t2]), statistics: s2 && t$1.map((t2) => s2[t2]) });
  }
  clone() {
    const t2 = new p$1({ width: this.width, height: this.height, pixelType: this.pixelType, maskIsAlpha: this.maskIsAlpha, validPixelCount: this.validPixelCount });
    let e2;
    r$1(this.mask) && (this.mask instanceof Uint8Array ? t2.mask = new Uint8Array(this.mask) : t2.mask = this.mask.slice(0));
    const s2 = p$1.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t2.pixels = [];
      const i2 = !!this.pixels[0].slice;
      for (e2 = 0; e2 < this.pixels.length; e2++)
        t2.pixels[e2] = i2 ? this.pixels[e2].slice(0, this.pixels[e2].length) : new s2(this.pixels[e2]);
    }
    if (this.statistics)
      for (t2.statistics = [], e2 = 0; e2 < this.statistics.length; e2++)
        t2.statistics[e2] = y$2(this.statistics[e2]);
    return t2;
  }
  _fillFrom8Bit(t2) {
    const { mask: e2, maskIsAlpha: s2, pixels: i2 } = this;
    if (!t2 || !i2 || !i2.length)
      return void s$3.getLogger(this.declaredClass).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let a2, o2, h2, n2;
    a2 = o2 = h2 = i2[0], i2.length >= 3 ? (o2 = i2[1], h2 = i2[2]) : i2.length === 2 && (o2 = i2[1]);
    const c2 = new Uint32Array(t2), p2 = this.width * this.height;
    if (a2.length === p2)
      if (r$1(e2) && e2.length === p2)
        if (s2)
          for (n2 = 0; n2 < p2; n2++)
            e2[n2] && (c2[n2] = e2[n2] << 24 | h2[n2] << 16 | o2[n2] << 8 | a2[n2]);
        else
          for (n2 = 0; n2 < p2; n2++)
            e2[n2] && (c2[n2] = 255 << 24 | h2[n2] << 16 | o2[n2] << 8 | a2[n2]);
      else
        for (n2 = 0; n2 < p2; n2++)
          c2[n2] = 255 << 24 | h2[n2] << 16 | o2[n2] << 8 | a2[n2];
    else
      s$3.getLogger(this.declaredClass).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t2) {
    const { pixels: e2, mask: s2, statistics: i2 } = this;
    if (!t2 || !e2 || !e2.length)
      return void s$3.getLogger(this.declaredClass).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const a2 = this.pixelType;
    let o2 = 1, h2 = 0, n2 = 1;
    if (i2 && i2.length > 0) {
      for (const t3 of i2)
        if (t3.minValue != null && (h2 = Math.min(h2, t3.minValue)), t3.maxValue != null && t3.minValue != null) {
          const e3 = t3.maxValue - t3.minValue;
          n2 = Math.max(n2, e3);
        }
      o2 = 255 / n2;
    } else {
      let t3 = 255;
      a2 === "s8" ? (h2 = -128, t3 = 127) : a2 === "u16" ? t3 = 65535 : a2 === "s16" ? (h2 = -32768, t3 = 32767) : a2 === "u32" ? t3 = 4294967295 : a2 === "s32" ? (h2 = -2147483648, t3 = 2147483647) : a2 === "f32" ? (h2 = -34e38, t3 = 34e38) : a2 === "f64" && (h2 = -Number.MAX_VALUE, t3 = Number.MAX_VALUE), o2 = 255 / (t3 - h2);
    }
    const c2 = new Uint32Array(t2), p2 = this.width * this.height;
    let u2, g2, f2, m2, d2;
    if (u2 = g2 = f2 = e2[0], u2.length !== p2)
      return s$3.getLogger(this.declaredClass).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (e2.length >= 2)
      if (g2 = e2[1], e2.length >= 3 && (f2 = e2[2]), r$1(s2) && s2.length === p2)
        for (m2 = 0; m2 < p2; m2++)
          s2[m2] && (c2[m2] = 255 << 24 | (f2[m2] - h2) * o2 << 16 | (g2[m2] - h2) * o2 << 8 | (u2[m2] - h2) * o2);
      else
        for (m2 = 0; m2 < p2; m2++)
          c2[m2] = 255 << 24 | (f2[m2] - h2) * o2 << 16 | (g2[m2] - h2) * o2 << 8 | (u2[m2] - h2) * o2;
    else if (r$1(s2) && s2.length === p2)
      for (m2 = 0; m2 < p2; m2++)
        d2 = (u2[m2] - h2) * o2, s2[m2] && (c2[m2] = 255 << 24 | d2 << 16 | d2 << 8 | d2);
    else
      for (m2 = 0; m2 < p2; m2++)
        d2 = (u2[m2] - h2) * o2, c2[m2] = 255 << 24 | d2 << 16 | d2 << 8 | d2;
  }
  _fillFrom32Bit(t2) {
    const { pixels: e2, mask: s2 } = this;
    if (!t2 || !e2 || !e2.length)
      return s$3.getLogger(this.declaredClass).error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let i2, a2, o2, h2;
    i2 = a2 = o2 = e2[0], e2.length >= 3 ? (a2 = e2[1], o2 = e2[2]) : e2.length === 2 && (a2 = e2[1]);
    const n2 = this.width * this.height;
    if (i2.length !== n2)
      return s$3.getLogger(this.declaredClass).error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let c2 = 0;
    if (r$1(s2) && s2.length === n2)
      for (h2 = 0; h2 < n2; h2++)
        t2[c2++] = i2[h2], t2[c2++] = a2[h2], t2[c2++] = o2[h2], t2[c2++] = 1 & s2[h2];
    else
      for (h2 = 0; h2 < n2; h2++)
        t2[c2++] = i2[h2], t2[c2++] = a2[h2], t2[c2++] = o2[h2], t2[c2++] = 1;
  }
  _calculateBandStatistics(t2, e2) {
    let s2 = 1 / 0, i2 = -1 / 0;
    const r2 = t2.length;
    let a2, o2 = 0;
    if (r$1(e2))
      for (a2 = 0; a2 < r2; a2++)
        e2[a2] && (o2 = t2[a2], s2 = o2 < s2 ? o2 : s2, i2 = o2 > i2 ? o2 : i2);
    else
      for (a2 = 0; a2 < r2; a2++)
        o2 = t2[a2], s2 = o2 < s2 ? o2 : s2, i2 = o2 > i2 ? o2 : i2;
    return new l(s2, i2);
  }
};
e([y$1({ json: { write: true } })], u$1.prototype, "width", void 0), e([y$1({ json: { write: true } })], u$1.prototype, "height", void 0), e([y$1({ json: { write: true } })], u$1.prototype, "pixelType", void 0), e([s$1("pixelType")], u$1.prototype, "castPixelType", null), e([y$1({ json: { write: true } })], u$1.prototype, "validPixelCount", void 0), e([y$1({ json: { write: true } })], u$1.prototype, "mask", void 0), e([y$1({ json: { write: true } })], u$1.prototype, "maskIsAlpha", void 0), e([y$1({ json: { write: true } })], u$1.prototype, "pixels", void 0), e([y$1({ json: { write: true } })], u$1.prototype, "statistics", void 0), u$1 = p$1 = e([n("esri.layers.support.PixelBlock")], u$1);
const g$1 = u$1;
var i, o;
function r(e2) {
  return r$1(e2) && e2.declaredClass === "esri.layers.support.PixelBlock" && e2.pixels && e2.pixels.length > 0;
}
function s(t2, e2) {
  if (!(e2 == null ? void 0 : e2.length) || !r(t2))
    return t2;
  const n2 = t2.pixels.length;
  return e2 && e2.some((t3) => t3 >= n2) || n2 === 1 && e2.length === 1 && e2[0] === 0 ? t2 : n2 !== e2.length || e2.some((t3, e3) => t3 !== e3) ? new g$1({ pixelType: t2.pixelType, width: t2.width, height: t2.height, mask: t2.mask, validPixelCount: t2.validPixelCount, maskIsAlpha: t2.maskIsAlpha, pixels: e2.map((e3) => t2.pixels[e3]), statistics: t2.statistics && e2.map((e3) => t2.statistics[e3]) }) : t2;
}
function h(e2) {
  if (!(e2 == null ? void 0 : e2.length) || e2.some((t2) => !r(t2)))
    return null;
  if (e2.length === 1)
    return r$1(e2[0]) ? e2[0].clone() : null;
  const n2 = e2, { width: i2, height: o2, pixelType: s2 } = n2[0];
  if (n2.some((t2) => t2.width !== i2 || t2.height !== o2))
    return null;
  const h2 = n2.map(({ mask: t2 }) => t2).filter((t2) => t2 != null);
  let a2 = null;
  h2.length && (a2 = new Uint8Array(i2 * o2), a2.set(h2[0]), h2.length > 1 && g(h2.slice(1), a2));
  const f2 = [];
  n2.forEach(({ pixels: t2 }) => f2.push(...t2));
  const c2 = n2.map(({ statistics: t2 }) => t2).filter((t2) => t2 == null ? void 0 : t2.length), u2 = [];
  return c2.forEach((t2) => u2.push(...t2)), new g$1({ pixelType: s2, width: i2, height: o2, mask: a2, pixels: f2, statistics: u2.length ? u2 : null });
}
function a(t2) {
  if (!t2)
    return;
  const e2 = t2.colormap;
  if (!e2 || e2.length === 0)
    return;
  const n2 = e2.sort((t3, e3) => t3[0] - e3[0]);
  let l2 = 0;
  n2[0][0] < 0 && (l2 = n2[0][0]);
  const i2 = Math.max(256, n2[n2.length - 1][0] - l2 + 1), o2 = new Uint8Array(4 * i2), r2 = [];
  let s2, h2 = 0, a2 = 0;
  const f2 = n2[0].length === 5;
  if (i2 > 65536)
    return n2.forEach((t3) => {
      r2[t3[0] - l2] = f2 ? t3.slice(1) : t3.slice(1).concat([255]);
    }), { indexed2DColormap: r2, offset: l2, alphaSpecified: f2 };
  if (t2.fillUnspecified)
    for (s2 = n2[a2], h2 = s2[0] - l2; h2 < i2; h2++)
      o2[4 * h2] = s2[1], o2[4 * h2 + 1] = s2[2], o2[4 * h2 + 2] = s2[3], o2[4 * h2 + 3] = f2 ? s2[4] : 255, h2 === s2[0] - l2 && (s2 = a2 === n2.length - 1 ? s2 : n2[++a2]);
  else
    for (h2 = 0; h2 < n2.length; h2++)
      s2 = n2[h2], a2 = 4 * (s2[0] - l2), o2[a2] = s2[1], o2[a2 + 1] = s2[2], o2[a2 + 2] = s2[3], o2[a2 + 3] = f2 ? s2[4] : 255;
  return { indexedColormap: o2, offset: l2, alphaSpecified: f2 };
}
function f(e2, n2) {
  if (!r(e2))
    return e2;
  if (!n2 || !n2.indexedColormap && !n2.indexed2DColormap)
    return e2;
  const l2 = e2.clone(), i2 = l2.pixels;
  let o2 = l2.mask;
  const s2 = l2.width * l2.height;
  if (i2.length !== 1)
    return e2;
  const { indexedColormap: h2, indexed2DColormap: a2, offset: f2, alphaSpecified: c2 } = n2;
  let u2 = 0;
  const p2 = i2[0], x2 = new Uint8Array(p2.length), m2 = new Uint8Array(p2.length), d2 = new Uint8Array(p2.length);
  let g2, y2 = 0;
  if (h2) {
    const e3 = h2.length - 1;
    if (r$1(o2))
      for (u2 = 0; u2 < s2; u2++)
        o2[u2] && (y2 = 4 * (p2[u2] - f2), y2 < f2 || y2 > e3 ? o2[u2] = 0 : (x2[u2] = h2[y2], m2[u2] = h2[y2 + 1], d2[u2] = h2[y2 + 2], o2[u2] = h2[y2 + 3]));
    else {
      for (o2 = new Uint8Array(s2), u2 = 0; u2 < s2; u2++)
        y2 = 4 * (p2[u2] - f2), y2 < f2 || y2 > e3 ? o2[u2] = 0 : (x2[u2] = h2[y2], m2[u2] = h2[y2 + 1], d2[u2] = h2[y2 + 2], o2[u2] = h2[y2 + 3]);
      l2.mask = o2;
    }
  } else if (a2)
    if (r$1(o2))
      for (u2 = 0; u2 < s2; u2++)
        o2[u2] && (g2 = a2[p2[u2]], x2[u2] = g2[0], m2[u2] = g2[1], d2[u2] = g2[2], o2[u2] = g2[3]);
    else {
      for (o2 = new Uint8Array(s2), u2 = 0; u2 < s2; u2++)
        g2 = a2[p2[u2]], x2[u2] = g2[0], m2[u2] = g2[1], d2[u2] = g2[2], o2[u2] = g2[3];
      l2.mask = o2;
    }
  return l2.pixels = [x2, m2, d2], l2.statistics = null, l2.pixelType = "u8", l2.maskIsAlpha = c2, l2;
}
function c(t2, e2) {
  if (!r(t2))
    return null;
  const { pixels: n2, mask: i2 } = t2, o2 = n2.length;
  let s2 = e2.lut;
  const { offset: h2 } = e2;
  s2 && s2[0].length === 1 && (s2 = n2.map(() => s2));
  const a2 = [], f2 = e2.outputPixelType || "u8";
  for (let l2 = 0; l2 < o2; l2++) {
    const t3 = u(n2[l2], i2, s2[l2], h2 || 0, f2);
    a2.push(t3);
  }
  const c2 = new g$1({ width: t2.width, height: t2.height, pixels: a2, mask: i2, pixelType: f2 });
  return c2.updateStatistics(), c2;
}
function u(t2, e2, n2, i2, o2) {
  const r2 = t2.length, s2 = g$1.createEmptyBand(o2, r2);
  if (e2)
    for (let l2 = 0; l2 < r2; l2++)
      e2[l2] && (s2[l2] = n2[t2[l2] - i2]);
  else
    for (let l2 = 0; l2 < r2; l2++)
      s2[l2] = n2[t2[l2] - i2];
  return s2;
}
function p(t2, e2) {
  if (!r(t2))
    return null;
  const n2 = t2.clone(), { pixels: l2 } = n2, i2 = n2.width * n2.height, o2 = e2.length, s2 = Math.floor(o2 / 2), h2 = e2[Math.floor(s2)], a2 = l2[0];
  let f2, c2, u2, p2, x2, m2, d2 = false;
  const g2 = new Uint8Array(i2), y2 = new Uint8Array(i2), w2 = new Uint8Array(i2);
  let k2 = n2.mask;
  const M2 = e2[0].mappedColor.length === 4;
  for (k2 || (k2 = new Uint8Array(i2), k2.fill(M2 ? 255 : 1), n2.mask = k2), x2 = 0; x2 < i2; x2++)
    if (k2[x2]) {
      for (f2 = a2[x2], d2 = false, m2 = s2, c2 = h2, u2 = 0, p2 = o2 - 1; p2 - u2 > 1; ) {
        if (f2 === c2.value) {
          d2 = true;
          break;
        }
        f2 > c2.value ? u2 = m2 : p2 = m2, m2 = Math.floor((u2 + p2) / 2), c2 = e2[Math.floor(m2)];
      }
      d2 || (f2 === e2[u2].value ? (c2 = e2[u2], d2 = true) : f2 === e2[p2].value ? (c2 = e2[p2], d2 = true) : f2 < e2[u2].value ? (d2 = false, c2 = null) : f2 > e2[u2].value && (f2 < e2[p2].value ? (c2 = e2[u2], d2 = true) : p2 === o2 - 1 ? (d2 = false, c2 = null) : (c2 = e2[p2], d2 = true))), d2 ? (g2[x2] = c2.mappedColor[0], y2[x2] = c2.mappedColor[1], w2[x2] = c2.mappedColor[2], k2[x2] = c2.mappedColor[3]) : g2[x2] = y2[x2] = w2[x2] = k2[x2] = 0;
    }
  return n2.pixels = [g2, y2, w2], n2.mask = k2, n2.pixelType = "u8", n2.maskIsAlpha = M2, n2;
}
function x(t2, e2) {
  if (!r(t2))
    return null;
  const { width: n2, height: i2 } = t2, { inputRanges: o2, outputValues: s2, outputPixelType: h2, noDataRanges: a2, allowUnmatched: f2 } = e2, c2 = t2.pixels[0], u2 = g$1.createEmptyBand(h2, c2.length);
  f2 && u2.set(c2);
  const p2 = t2.mask, x2 = o2.length / 2;
  for (let l2 = 0; l2 < i2; l2++)
    for (let t3 = 0; t3 < n2; t3++) {
      const e3 = l2 * n2 + t3;
      if (!p2 || p2[e3]) {
        const t4 = c2[e3];
        for (let n3 = x2 - 1; n3 >= 0; n3--)
          if (t4 >= o2[2 * n3] && t4 <= o2[2 * n3 + 1]) {
            u2[e3] = s2[n3];
            break;
          }
      }
    }
  let m2 = p2;
  if (a2 == null ? void 0 : a2.length) {
    m2 = new Uint8Array(n2 * i2), p2 && m2.set(p2);
    for (let t3 = 0; t3 < i2; t3++)
      for (let e3 = 0; e3 < n2; e3++) {
        const l2 = t3 * n2 + e3;
        if (!p2 || p2[l2]) {
          const t4 = c2[l2];
          for (let e4 = 0; e4 < x2; e4 += 2)
            if (t4 >= a2[e4] && t4 <= a2[e4 + 1]) {
              u2[l2] = 0, m2[l2] = 0;
              break;
            }
        }
      }
  }
  return new g$1({ width: n2, height: i2, pixelType: h2, pixels: [u2], mask: m2 });
}
function m(t2, e2, n2, l2) {
  const i2 = n2 != null && n2.length >= 2 ? new Set(n2) : null, o2 = (n2 == null ? void 0 : n2.length) === 1 ? n2[0] : null, r2 = !!(e2 == null ? void 0 : e2.length);
  for (let s2 = 0; s2 < t2.length; s2++)
    if (l2[s2]) {
      const n3 = t2[s2];
      if (r2) {
        let t3 = false;
        for (let l3 = 0; l3 < e2.length; l3 += 2)
          if (n3 >= e2[l3] && n3 <= e2[l3 + 1]) {
            t3 = true;
            break;
          }
        t3 || (l2[s2] = 0);
      }
      l2[s2] && (n3 === o2 || (i2 == null ? void 0 : i2.has(n3))) && (l2[s2] = 0);
    }
}
function d(t2, e2) {
  const n2 = t2[0].length;
  for (let l2 = 0; l2 < n2; l2++)
    if (e2[l2]) {
      let n3 = false;
      for (let e3 = 0; e3 < t2.length; e3++)
        if (t2[e3][l2]) {
          n3 = true;
          break;
        }
      n3 || (e2[l2] = 0);
    }
}
function g(t2, e2) {
  const n2 = t2[0].length;
  for (let l2 = 0; l2 < n2; l2++)
    if (e2[l2]) {
      let n3 = false;
      for (let e3 = 0; e3 < t2.length; e3++)
        if (t2[e3][l2] === 0) {
          n3 = true;
          break;
        }
      n3 && (e2[l2] = 0);
    }
}
function y(t2, e2) {
  if (!r(t2))
    return null;
  const { width: n2, height: i2, pixels: o2 } = t2, s2 = n2 * i2, h2 = new Uint8Array(s2);
  t2.mask ? h2.set(t2.mask) : h2.fill(255);
  const a2 = o2.length, { includedRanges: f2, noDataValues: c2, outputPixelType: p2, matchAll: x2, lookup: y2 } = e2;
  if (y2) {
    const t3 = [];
    for (let e3 = 0; e3 < a2; e3++) {
      const n3 = u(o2[e3], h2, y2.lut, y2.offset || 0, "u8");
      t3.push(n3);
    }
    t3.length === 1 ? h2.set(t3[0]) : x2 ? d(t3, h2) : g(t3, h2);
  } else if (x2) {
    const t3 = [];
    for (let e3 = 0; e3 < a2; e3++) {
      const n3 = new Uint8Array(s2);
      n3.set(h2), m(o2[e3], f2, c2, n3), t3.push(n3);
    }
    t3.length === 1 ? h2.set(t3[0]) : d(t3, h2);
  } else
    for (let l2 = 0; l2 < a2; l2++)
      m(o2[l2], f2, c2, h2);
  return new g$1({ width: n2, height: i2, pixelType: p2, pixels: o2, mask: h2 });
}
function w(t2, e2, n2) {
  if (t2 !== "u8" && t2 !== "s8" && t2 !== "u16" && t2 !== "s16")
    return null;
  const i2 = t2.includes("16") ? 65536 : 256, o2 = t2.includes("s") ? -i2 / 2 : 0, r2 = g$1.createEmptyBand(t2, i2);
  for (let l2 = 0; l2 < e2.length; l2++) {
    const t3 = n2[l2], i3 = Math.ceil(e2[2 * l2] - o2), s2 = Math.floor(e2[2 * l2 + 1] - o2);
    for (let e3 = i3; e3 <= s2; e3++)
      r2[e3] = t3;
  }
  return { lut: r2, offset: o2 };
}
function k(t2, e2, n2) {
  if (t2 !== "u8" && t2 !== "s8" && t2 !== "u16" && t2 !== "s16")
    return null;
  const l2 = t2.includes("16") ? 65536 : 256, i2 = t2.includes("s") ? -l2 / 2 : 0, o2 = new Uint8Array(l2);
  if (e2)
    for (let r2 = 0; r2 < e2.length; r2++) {
      const t3 = Math.ceil(e2[2 * r2] - i2), n3 = Math.floor(e2[2 * r2 + 1] - i2);
      for (let e3 = t3; e3 <= n3; e3++)
        o2[e3] = 255;
    }
  if (n2)
    for (let r2 = 0; r2 < n2.length; r2++)
      o2[n2[r2] - i2] = 0;
  return { lut: o2, offset: i2 };
}
function M(t2, e2, n2, l2, i2, o2, r2, s2) {
  return { xmin: i2 <= n2 * t2 ? 0 : i2 < n2 * t2 + t2 ? i2 - n2 * t2 : t2, ymin: o2 <= l2 * e2 ? 0 : o2 < l2 * e2 + e2 ? o2 - l2 * e2 : e2, xmax: i2 + r2 <= n2 * t2 ? 0 : i2 + r2 < n2 * t2 + t2 ? i2 + r2 - n2 * t2 : t2, ymax: o2 + s2 <= l2 * e2 ? 0 : o2 + s2 < l2 * e2 + e2 ? o2 + s2 - l2 * e2 : e2 };
}
function A(t$1, n2) {
  if (!t$1 || t$1.length === 0)
    return null;
  const l2 = t$1.find((t2) => t2.pixelBlock);
  if (!l2 || t(l2.pixelBlock))
    return null;
  const i2 = (l2.extent.xmax - l2.extent.xmin) / l2.pixelBlock.width, o2 = (l2.extent.ymax - l2.extent.ymin) / l2.pixelBlock.height, r2 = 0.01 * Math.min(i2, o2), s2 = t$1.sort((t2, e2) => Math.abs(t2.extent.ymax - e2.extent.ymax) > r2 ? e2.extent.ymax - t2.extent.ymax : Math.abs(t2.extent.xmin - e2.extent.xmin) > r2 ? t2.extent.xmin - e2.extent.xmin : 0), h2 = Math.min.apply(null, s2.map((t2) => t2.extent.xmin)), a2 = Math.min.apply(null, s2.map((t2) => t2.extent.ymin)), f2 = Math.max.apply(null, s2.map((t2) => t2.extent.xmax)), c2 = Math.max.apply(null, s2.map((t2) => t2.extent.ymax)), u2 = { x: Math.round((n2.xmin - h2) / i2), y: Math.round((c2 - n2.ymax) / o2) }, p2 = { width: Math.round((f2 - h2) / i2), height: Math.round((c2 - a2) / o2) }, x2 = { width: Math.round((n2.xmax - n2.xmin) / i2), height: Math.round((n2.ymax - n2.ymin) / o2) };
  if (Math.round(p2.width / l2.pixelBlock.width) * Math.round(p2.height / l2.pixelBlock.height) !== s2.length || u2.x < 0 || u2.y < 0 || p2.width < x2.width || p2.height < x2.height)
    return null;
  return { extent: n2, pixelBlock: T(s2.map((t2) => t2.pixelBlock), p2, { clipOffset: u2, clipSize: x2 }) };
}
function U(t2, e2, n2, l2, i2, o2) {
  var _a;
  const { width: r2, height: s2 } = n2.block, { x: h2, y: a2 } = n2.offset, { width: f2, height: c2 } = n2.mosaic, u2 = M(r2, s2, l2, i2, h2, a2, f2, c2);
  let p2 = 0, x2 = 0;
  if (o2) {
    const t3 = o2.hasGCSSShiftTransform ? 360 : (_a = o2.halfWorldWidth) != null ? _a : 0, e3 = r2 * o2.resolutionX, n3 = o2.startX + l2 * e3, i3 = n3 + e3;
    n3 < t3 && i3 > t3 ? x2 = o2.rightPadding : n3 >= t3 && (p2 = o2.leftMargin - o2.rightPadding, x2 = 0);
  }
  if (u2.xmax -= x2, typeof e2 != "number")
    for (let m2 = u2.ymin; m2 < u2.ymax; m2++) {
      const n3 = (i2 * s2 + m2 - a2) * f2 + (l2 * r2 - h2) + p2, o3 = m2 * r2;
      for (let l3 = u2.xmin; l3 < u2.xmax; l3++)
        t2[n3 + l3] = e2[o3 + l3];
    }
  else
    for (let m2 = u2.ymin; m2 < u2.ymax; m2++) {
      const n3 = (i2 * s2 + m2 - a2) * f2 + (l2 * r2 - h2) + p2;
      for (let l3 = u2.xmin; l3 < u2.xmax; l3++)
        t2[n3 + l3] = e2;
    }
}
function T(n2, i2, o2 = {}) {
  const { clipOffset: s2, clipSize: h2, alignmentInfo: a2, blockWidths: f2 } = o2;
  if (f2)
    return C(n2, i2, { blockWidths: f2 });
  const c2 = n2.find((t2) => r(t2));
  if (t(c2))
    return null;
  const u2 = h2 ? h2.width : i2.width, p2 = h2 ? h2.height : i2.height, x2 = c2.width, m2 = c2.height, d2 = i2.width / x2, g2 = i2.height / m2, y2 = { offset: s2 || { x: 0, y: 0 }, mosaic: h2 || i2, block: { width: x2, height: m2 } }, w2 = c2.pixelType, k2 = g$1.getPixelArrayConstructor(w2), M2 = c2.pixels.length, A2 = [];
  let T2, b2;
  for (let t2 = 0; t2 < M2; t2++) {
    b2 = new k2(u2 * p2);
    for (let e2 = 0; e2 < g2; e2++)
      for (let l2 = 0; l2 < d2; l2++) {
        const i3 = n2[e2 * d2 + l2];
        r(i3) && (T2 = i3.pixels[t2], U(b2, T2, y2, l2, e2, a2));
      }
    A2.push(b2);
  }
  let S2;
  if (n2.some((n3) => t(n3) || r$1(n3.mask) && n3.mask.length > 0)) {
    S2 = new Uint8Array(u2 * p2);
    for (let e2 = 0; e2 < g2; e2++)
      for (let l2 = 0; l2 < d2; l2++) {
        const i3 = n2[e2 * d2 + l2], o3 = r$1(i3) ? i3.mask : null;
        r$1(o3) ? U(S2, o3, y2, l2, e2, a2) : U(S2, i3 ? 1 : 0, y2, l2, e2, a2);
      }
  }
  const B2 = new g$1({ width: u2, height: p2, pixels: A2, pixelType: w2, mask: S2 });
  return B2.updateStatistics(), B2;
}
function C(i2, o2, s2) {
  const h2 = i2.find((e2) => r$1(e2));
  if (t(h2))
    return null;
  const a2 = i2.some((e2) => !r$1(e2) || !!e2.mask), { width: f2, height: c2 } = o2, u2 = a2 ? new Uint8Array(f2 * c2) : null, { blockWidths: p2 } = s2, x2 = [], m2 = h2.getPlaneCount(), d2 = g$1.getPixelArrayConstructor(h2.pixelType);
  if (a2)
    for (let t2 = 0, e2 = 0; t2 < i2.length; e2 += p2[t2], t2++) {
      const l2 = i2[t2];
      if (!r(l2))
        continue;
      const o3 = e$1(l2.mask);
      for (let n2 = 0; n2 < c2; n2++)
        for (let i3 = 0; i3 < p2[t2]; i3++)
          u2[n2 * f2 + i3 + e2] = o3 == null ? 255 : o3[n2 * l2.width + i3];
    }
  for (let t2 = 0; t2 < m2; t2++) {
    const e2 = new d2(f2 * c2);
    for (let n2 = 0, l2 = 0; n2 < i2.length; l2 += p2[n2], n2++) {
      const o3 = i2[n2];
      if (!r(o3))
        continue;
      const s3 = o3.pixels[t2];
      if (s3 != null)
        for (let t3 = 0; t3 < c2; t3++)
          for (let i3 = 0; i3 < p2[n2]; i3++)
            e2[t3 * f2 + i3 + l2] = s3[t3 * o3.width + i3];
    }
    x2.push(e2);
  }
  const g2 = new g$1({ width: f2, height: c2, mask: u2, pixels: x2, pixelType: h2.pixelType });
  return g2.updateStatistics(), g2;
}
function b(t2, e2, n2) {
  if (!r(t2))
    return null;
  const { width: l2, height: i2 } = t2, o2 = e2.x, s2 = e2.y, h2 = n2.width + o2, a2 = n2.height + s2;
  if (o2 < 0 || s2 < 0 || h2 > l2 || a2 > i2)
    return t2;
  if (o2 === 0 && s2 === 0 && h2 === l2 && a2 === i2)
    return t2;
  t2.mask || (t2.mask = new Uint8Array(l2 * i2));
  const f2 = t2.mask;
  for (let r2 = 0; r2 < i2; r2++) {
    const t3 = r2 * l2;
    for (let e3 = 0; e3 < l2; e3++)
      f2[t3 + e3] = r2 < s2 || r2 >= a2 || e3 < o2 || e3 >= h2 ? 0 : 1;
  }
  return t2.updateStatistics(), t2;
}
function S(t2) {
  if (!r(t2))
    return null;
  const e2 = t2.clone(), { width: l2, height: i2, pixels: o2 } = t2, s2 = o2[0], h2 = e2.pixels[0], a2 = e$1(t2.mask);
  for (let n2 = 2; n2 < i2 - 1; n2++) {
    const t3 = new Map();
    for (let i3 = n2 - 2; i3 < n2 + 2; i3++)
      for (let e4 = 0; e4 < 4; e4++) {
        const n3 = i3 * l2 + e4;
        v(t3, s2[n3], a2 ? a2[n3] : 1);
      }
    h2[n2 * l2] = B(t3), h2[n2 * l2 + 1] = h2[n2 * l2 + 2] = h2[n2 * l2];
    let e3 = 3;
    for (; e3 < l2 - 1; e3++) {
      let i3 = (n2 - 2) * l2 + e3 + 1;
      v(t3, s2[i3], a2 ? a2[i3] : 1), i3 = (n2 - 1) * l2 + e3 + 1, v(t3, s2[i3], a2 ? a2[i3] : 1), i3 = n2 * l2 + e3 + 1, v(t3, s2[i3], a2 ? a2[i3] : 1), i3 = (n2 + 1) * l2 + e3 + 1, v(t3, s2[i3], a2 ? a2[i3] : 1), i3 = (n2 - 2) * l2 + e3 - 3, P(t3, s2[i3], a2 ? a2[i3] : 1), i3 = (n2 - 1) * l2 + e3 - 3, P(t3, s2[i3], a2 ? a2[i3] : 1), i3 = n2 * l2 + e3 - 3, P(t3, s2[i3], a2 ? a2[i3] : 1), i3 = (n2 + 1) * l2 + e3 - 3, P(t3, s2[i3], a2 ? a2[i3] : 1), h2[n2 * l2 + e3] = B(t3);
    }
    h2[n2 * l2 + e3 + 1] = h2[n2 * l2 + e3];
  }
  for (let n2 = 0; n2 < l2; n2++)
    h2[n2] = h2[l2 + n2] = h2[2 * l2 + n2], h2[(i2 - 1) * l2 + n2] = h2[(i2 - 2) * l2 + n2];
  return e2.updateStatistics(), e2;
}
function B(t2) {
  if (t2.size === 0)
    return 0;
  let e2 = 0, n2 = -1, l2 = 0;
  const i2 = t2.keys();
  let o2 = i2.next();
  for (; !o2.done; )
    l2 = t2.get(o2.value), l2 > e2 && (n2 = o2.value, e2 = l2), o2 = i2.next();
  return n2;
}
function P(t2, e2, n2) {
  if (n2 === 0)
    return;
  const l2 = t2.get(e2);
  l2 === 1 ? t2.delete(e2) : t2.set(e2, l2 - 1);
}
function v(t2, e2, n2) {
  n2 !== 0 && t2.set(e2, t2.has(e2) ? t2.get(e2) + 1 : 1);
}
function _(t2, e2, i2) {
  let { x: o2, y: s2 } = e2;
  const { width: h2, height: a2 } = i2;
  if (o2 === 0 && s2 === 0 && a2 === t2.height && h2 === t2.width)
    return t2;
  const { width: f2, height: c2 } = t2, u2 = Math.max(0, s2), p2 = Math.max(0, o2), x2 = Math.min(o2 + h2, f2), m2 = Math.min(s2 + a2, c2);
  if (x2 < 0 || m2 < 0 || !r(t2))
    return null;
  o2 = Math.max(0, -o2), s2 = Math.max(0, -s2);
  const { pixels: d2 } = t2, g2 = h2 * a2, y2 = d2.length, w2 = [];
  for (let n2 = 0; n2 < y2; n2++) {
    const e3 = d2[n2], i3 = g$1.createEmptyBand(t2.pixelType, g2);
    for (let t3 = u2; t3 < m2; t3++) {
      const n3 = t3 * f2;
      let l2 = (t3 + s2 - u2) * h2 + o2;
      for (let t4 = p2; t4 < x2; t4++)
        i3[l2++] = e3[n3 + t4];
    }
    w2.push(i3);
  }
  const k2 = new Uint8Array(g2), M2 = e$1(t2.mask);
  for (let n2 = u2; n2 < m2; n2++) {
    const t3 = n2 * f2;
    let e3 = (n2 + s2 - u2) * h2 + o2;
    for (let n3 = p2; n3 < x2; n3++)
      k2[e3++] = M2 ? M2[t3 + n3] : 1;
  }
  const A2 = new g$1({ width: i2.width, height: i2.height, pixelType: t2.pixelType, pixels: w2, mask: k2 });
  return A2.updateStatistics(), A2;
}
function E(e2, n2 = true) {
  if (!r(e2))
    return null;
  const { pixels: i2, width: o2, height: s2, mask: h2, pixelType: a2 } = e2, f2 = [], c2 = Math.round(o2 / 2), u2 = Math.round(s2 / 2), p2 = s2 - 1, x2 = o2 - 1;
  for (let t2 = 0; t2 < i2.length; t2++) {
    const e3 = i2[t2], r2 = g$1.createEmptyBand(a2, c2 * u2);
    let h3 = 0;
    for (let t3 = 0; t3 < s2; t3 += 2)
      for (let l2 = 0; l2 < o2; l2 += 2) {
        const i3 = e3[t3 * o2 + l2];
        if (n2) {
          const n3 = l2 === x2 ? i3 : e3[t3 * o2 + l2 + 1], s3 = t3 === p2 ? i3 : e3[t3 * o2 + l2 + o2], a3 = l2 === x2 ? s3 : t3 === p2 ? n3 : e3[t3 * o2 + l2 + o2 + 1];
          r2[h3++] = (i3 + n3 + s3 + a3) / 4;
        } else
          r2[h3++] = i3;
      }
    f2.push(r2);
  }
  let m2 = null;
  if (r$1(h2)) {
    m2 = new Uint8Array(c2 * u2);
    let t2 = 0;
    for (let e3 = 0; e3 < s2; e3 += 2)
      for (let l2 = 0; l2 < o2; l2 += 2) {
        const i3 = h2[e3 * o2 + l2];
        if (n2) {
          const n3 = l2 === x2 ? i3 : h2[e3 * o2 + l2 + 1], r2 = e3 === p2 ? i3 : h2[e3 * o2 + l2 + o2], s3 = l2 === x2 ? r2 : e3 === p2 ? n3 : h2[e3 * o2 + l2 + o2 + 1];
          m2[t2++] = i3 * n3 * r2 * s3 ? 1 : 0;
        } else
          m2[t2++] = i3;
      }
  }
  return new g$1({ width: c2, height: u2, pixelType: a2, pixels: f2, mask: m2 });
}
function W(t2, e2, n2) {
  if (!r(t2))
    return null;
  const { width: l2, height: i2 } = e2;
  let { width: o2, height: s2 } = t2;
  const h2 = new Map(), a2 = { x: 0, y: 0 }, f2 = n2 == null ? 1 : 1 + n2;
  let c2 = t2;
  for (let r2 = 0; r2 < f2; r2++) {
    const t3 = Math.ceil(o2 / l2), n3 = Math.ceil(s2 / i2);
    for (let o3 = 0; o3 < n3; o3++) {
      a2.y = o3 * i2;
      for (let n4 = 0; n4 < t3; n4++) {
        a2.x = n4 * l2;
        const t4 = _(c2, a2, e2);
        h2.set(`${r2}/${o3}/${n4}`, t4);
      }
    }
    r2 < f2 - 1 && (c2 = E(c2)), o2 = Math.round(o2 / 2), s2 = Math.round(s2 / 2);
  }
  return h2;
}
function I(t2, e2, n2, l2, i2 = 0.5) {
  const { width: o2, height: r2 } = t2, { width: s2, height: h2 } = e2, a2 = l2.cols, f2 = l2.rows, c2 = Math.ceil(s2 / a2 - 0.1 / a2), u2 = Math.ceil(h2 / f2 - 0.1 / f2);
  let p2, x2, m2, d2, g2, y2, w2;
  const k2 = c2 * a2, M2 = k2 * u2 * f2, A2 = new Float32Array(M2), U2 = new Float32Array(M2), T2 = new Uint32Array(M2), C2 = new Uint32Array(M2);
  let b2, S2, B2 = 0;
  for (let P2 = 0; P2 < u2; P2++)
    for (let t3 = 0; t3 < c2; t3++) {
      p2 = 12 * (P2 * c2 + t3), x2 = n2[p2], m2 = n2[p2 + 1], d2 = n2[p2 + 2], g2 = n2[p2 + 3], y2 = n2[p2 + 4], w2 = n2[p2 + 5];
      for (let e3 = 0; e3 < f2; e3++) {
        B2 = (P2 * f2 + e3) * k2 + t3 * a2, S2 = (e3 + 0.5) / f2;
        for (let t4 = 0; t4 < e3; t4++)
          b2 = (t4 + 0.5) / a2, A2[B2 + t4] = (x2 * b2 + m2 * S2 + d2) * o2 - i2, U2[B2 + t4] = (g2 * b2 + y2 * S2 + w2) * r2 - i2, T2[B2 + t4] = Math.round(A2[B2 + t4]), C2[B2 + t4] = Math.round(U2[B2 + t4]);
      }
      p2 += 6, x2 = n2[p2], m2 = n2[p2 + 1], d2 = n2[p2 + 2], g2 = n2[p2 + 3], y2 = n2[p2 + 4], w2 = n2[p2 + 5];
      for (let e3 = 0; e3 < f2; e3++) {
        B2 = (P2 * f2 + e3) * k2 + t3 * a2, S2 = (e3 + 0.5) / f2;
        for (let t4 = e3; t4 < a2; t4++)
          b2 = (t4 + 0.5) / a2, A2[B2 + t4] = (x2 * b2 + m2 * S2 + d2) * o2 - i2, U2[B2 + t4] = (g2 * b2 + y2 * S2 + w2) * r2 - i2, T2[B2 + t4] = Math.round(A2[B2 + t4]), C2[B2 + t4] = Math.round(U2[B2 + t4]);
      }
    }
  return { offsets_x: A2, offsets_y: U2, offsets_xi: T2, offsets_yi: C2, gridWidth: k2 };
}
function j(t2, e2) {
  const { coefficients: n2, spacing: l2 } = e2, { offsets_x: i2, offsets_y: o2, gridWidth: r2 } = I(t2, t2, n2, { rows: l2[0], cols: l2[1] }, 0.5), { width: s2, height: h2 } = t2, a2 = new Float32Array(s2 * h2), f2 = 180 / Math.PI;
  for (let c2 = 0; c2 < h2; c2++)
    for (let t3 = 0; t3 < s2; t3++) {
      const e3 = c2 * r2 + t3, n3 = c2 === 0 ? e3 : e3 - r2, l3 = c2 === h2 - 1 ? e3 : e3 + r2, u2 = i2[n3] - i2[l3], p2 = o2[l3] - o2[n3];
      if (isNaN(u2) || isNaN(p2))
        a2[c2 * s2 + t3] = 90;
      else {
        let e4 = Math.atan2(p2, u2) * f2;
        e4 = (360 + e4) % 360, a2[c2 * s2 + t3] = e4;
      }
    }
  return a2;
}
function D(e2, n2, i2, o2, s2 = "nearest") {
  if (!r(e2))
    return null;
  s2 === "majority" && (e2 = S(e2));
  const { pixels: h2, mask: a2, pixelType: f2 } = e2, c2 = e2.width, u2 = e2.height, p2 = g$1.getPixelArrayConstructor(f2), x2 = h2.length, { width: m2, height: d2 } = n2;
  let g2 = false;
  for (let t2 = 0; t2 < i2.length; t2 += 3)
    i2[t2] === -1 && i2[t2 + 1] === -1 && i2[t2 + 2] === -1 && (g2 = true);
  const { offsets_x: y2, offsets_y: w2, offsets_xi: k2, offsets_yi: M2, gridWidth: A2 } = I({ width: c2, height: u2 }, n2, i2, o2, s2 === "majority" ? 0 : 0.5);
  let U2;
  const T2 = (t2, e3, n3) => {
    const l2 = t2 instanceof Float32Array || t2 instanceof Float64Array ? 0 : 0.5;
    for (let i3 = 0; i3 < d2; i3++) {
      U2 = i3 * A2;
      for (let o3 = 0; o3 < m2; o3++) {
        if (y2[U2] < 0 || w2[U2] < 0)
          t2[i3 * m2 + o3] = 0;
        else if (n3)
          t2[i3 * m2 + o3] = e3[k2[U2] + M2[U2] * c2];
        else {
          const n4 = Math.floor(y2[U2]), r2 = Math.floor(w2[U2]), s3 = Math.ceil(y2[U2]), h3 = Math.ceil(w2[U2]), f3 = y2[U2] - n4, u3 = w2[U2] - r2;
          if (!a2 || a2[n4 + r2 * c2] && a2[n4 + r2 * c2] && a2[n4 + h3 * c2] && a2[s3 + h3 * c2]) {
            const a3 = (1 - f3) * e3[n4 + r2 * c2] + f3 * e3[s3 + r2 * c2], p3 = (1 - f3) * e3[n4 + h3 * c2] + f3 * e3[s3 + h3 * c2];
            t2[i3 * m2 + o3] = (1 - u3) * a3 + u3 * p3 + l2;
          } else
            t2[i3 * m2 + o3] = e3[k2[U2] + M2[U2] * c2];
        }
        U2++;
      }
    }
  }, C2 = [];
  let b2;
  for (let t2 = 0; t2 < x2; t2++)
    b2 = new p2(m2 * d2), T2(b2, h2[t2], s2 === "nearest" || s2 === "majority"), C2.push(b2);
  const B2 = new g$1({ width: m2, height: d2, pixelType: f2, pixels: C2 });
  if (r$1(a2))
    B2.mask = new Uint8Array(m2 * d2), T2(B2.mask, a2, true);
  else if (g2) {
    B2.mask = new Uint8Array(m2 * d2);
    for (let t2 = 0; t2 < m2 * d2; t2++)
      B2.mask[t2] = y2[t2] < 0 || w2[t2] < 0 ? 0 : 1;
  }
  return B2.updateStatistics(), B2;
}
!function(t2) {
  t2[t2.matchAny = 0] = "matchAny", t2[t2.matchAll = 1] = "matchAll";
}(i || (i = {})), function(t2) {
  t2[t2.bestMatch = 0] = "bestMatch", t2[t2.fail = 1] = "fail";
}(o || (o = {}));
export { A, D, T, W, a, b, c, f, g$1 as g, h, i, j, k, o, p, r, s, w, x, y };
