import { gM as t$6, bq as c$3, u as n$3, bU as p$2, a as r$6, m as j } from "./index.js";
import { I as I$3, L } from "./enums3.js";
import { f as f$1, t as t$4, n as n$1, a as a$4, r as r$4, h as h$2, P, b as b$2 } from "./GeometryUtils.js";
import { t as t$2 } from "./Rect.js";
import { o as o$2 } from "./config.js";
import { l as l$1, m, o as o$3, n as n$2, p as p$1, u as u$2, a as a$5 } from "./StyleDefinition.js";
import { t as t$3, s as s$4 } from "./Geometry.js";
import { r as r$5, c as c$2, n as n$4, _, i } from "./TileClipper.js";
import { t as t$5, T as T$2, m as m$1, l as l$2 } from "./StyleRepository.js";
import { x as x$1 } from "./earcut.js";
import { C } from "./BidiEngine.js";
import "vue";
import "./enums2.js";
import "./GeometryUtils2.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
import "./colorUtils.js";
function e$1(e2) {
  return e2 === 746 || e2 === 747 || !(e2 < 4352) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 && !(e2 >= 65097 && e2 <= 65103) || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 && !(e2 >= 12296 && e2 <= 12305 || e2 >= 12308 && e2 <= 12319 || e2 === 12336) || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 12592 && e2 <= 12687 || (e2 >= 43360 && e2 <= 43391 || (e2 >= 55216 && e2 <= 55295 || (e2 >= 4352 && e2 <= 4607 || (e2 >= 44032 && e2 <= 55215 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12688 && e2 <= 12703 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 && e2 !== 12540 || (e2 >= 65280 && e2 <= 65519 && !(e2 === 65288 || e2 === 65289 || e2 === 65293 || e2 >= 65306 && e2 <= 65310 || e2 === 65339 || e2 === 65341 || e2 === 65343 || e2 >= 65371 && e2 <= 65503 || e2 === 65507 || e2 >= 65512 && e2 <= 65519) || (e2 >= 65104 && e2 <= 65135 && !(e2 >= 65112 && e2 <= 65118 || e2 >= 65123 && e2 <= 65126) || (e2 >= 5120 && e2 <= 5759 || (e2 >= 6320 && e2 <= 6399 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 19904 && e2 <= 19967 || (e2 >= 40960 && e2 <= 42127 || e2 >= 42128 && e2 <= 42191)))))))))))))))))))))))))))));
}
function c$1(e2) {
  return !(e2 < 11904) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 65280 && e2 <= 65519 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 42128 && e2 <= 42191 || e2 >= 40960 && e2 <= 42127)))))))))))))))))));
}
function s$3(e2) {
  switch (e2) {
    case 10:
    case 32:
    case 38:
    case 40:
    case 41:
    case 43:
    case 45:
    case 47:
    case 173:
    case 183:
    case 8203:
    case 8208:
    case 8211:
    case 8231:
      return true;
  }
  return false;
}
function a$3(e2) {
  switch (e2) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
      return true;
  }
  return false;
}
const c = 24, h$1 = 17;
class a$2 {
  constructor(t2, e2, i2, s2, o2, c2, h2) {
    this._glyphItems = t2, this._maxWidth = e2, this._lineHeight = i2, this._letterSpacing = s2, this._hAnchor = o2, this._vAnchor = c2, this._justify = h2;
  }
  getShaping(o2, c2, h2) {
    const a2 = this._letterSpacing, l2 = this._lineHeight, r2 = this._justify, n2 = this._maxWidth, m2 = [];
    let f2 = 0, p2 = 0;
    const g2 = o2.length;
    for (let t2 = 0; t2 < g2; t2++) {
      const e2 = o2.charCodeAt(t2), i2 = h2 && e$1(e2);
      let c3;
      for (const t3 of this._glyphItems)
        if (c3 = t3[e2], c3)
          break;
      m2.push({ codePoint: e2, x: f2, y: p2, vertical: i2, glyphMosaicItem: c3 }), c3 && (f2 += c3.metrics.advance + a2);
    }
    let y2 = f2;
    if (n2 > 0) {
      y2 = f2 / Math.max(1, Math.ceil(f2 / n2));
    }
    const d = o2.includes("\u200B"), x2 = [];
    for (let e2 = 0; e2 < g2 - 1; e2++) {
      const s2 = m2[e2].codePoint, o3 = c$1(s2);
      if (s$3(s2) || o3) {
        let t2 = 0;
        if (s2 === 10)
          t2 -= 1e4;
        else if (o3 && d)
          t2 += 150;
        else {
          s2 !== 40 && s2 !== 65288 || (t2 += 50);
          const i2 = m2[e2 + 1].codePoint;
          i2 !== 41 && i2 !== 65289 || (t2 += 50);
        }
        x2.push(this._buildBreak(e2 + 1, m2[e2].x, y2, x2, t2, false));
      }
    }
    const M = this._optimalBreaks(this._buildBreak(g2, f2, y2, x2, 0, true));
    let u2 = 0;
    const _2 = c2 ? -l2 : l2;
    let I2 = 0;
    for (let t2 = 0; t2 < M.length; t2++) {
      const i2 = M[t2];
      let s2 = I2;
      for (; s2 < i2 && a$3(m2[s2].codePoint); )
        m2[s2].glyphMosaicItem = null, ++s2;
      let o3 = i2 - 1;
      for (; o3 > s2 && a$3(m2[o3].codePoint); )
        m2[o3].glyphMosaicItem = null, --o3;
      if (s2 <= o3) {
        const t3 = m2[s2].x;
        for (let i3 = s2; i3 <= o3; i3++)
          m2[i3].x -= t3, m2[i3].y = p2;
        let e2 = m2[o3].x;
        m2[o3].glyphMosaicItem && (e2 += m2[o3].glyphMosaicItem.metrics.advance), u2 = Math.max(e2, u2), r2 && this._applyJustification(m2, s2, o3);
      }
      I2 = i2, p2 += _2;
    }
    if (m2.length > 0) {
      const t2 = M.length - 1, e2 = (r2 - this._hAnchor) * u2;
      let i2 = (-this._vAnchor * (t2 + 1) + 0.5) * l2;
      c2 && t2 && (i2 += t2 * l2);
      for (const s2 of m2)
        s2.x += e2, s2.y += i2;
    }
    return m2.filter((t2) => t2.glyphMosaicItem);
  }
  static getTextBox(t2, e2) {
    if (!t2.length)
      return null;
    let i2 = 1 / 0, s2 = 1 / 0, o2 = 0, c2 = 0;
    for (const a2 of t2) {
      const t3 = a2.glyphMosaicItem.metrics.advance, l2 = a2.x, r2 = a2.y - h$1, n2 = l2 + t3, m2 = r2 + e2;
      i2 = Math.min(i2, l2), o2 = Math.max(o2, n2), s2 = Math.min(s2, r2), c2 = Math.max(c2, m2);
    }
    return { x: i2, y: s2, width: o2 - i2, height: c2 - s2 };
  }
  static getBox(t2) {
    if (!t2.length)
      return null;
    let e2 = 1 / 0, i2 = 1 / 0, s2 = 0, o2 = 0;
    for (const c2 of t2) {
      const { height: t3, left: h2, top: a2, width: l2 } = c2.glyphMosaicItem.metrics, r2 = c2.x, n2 = c2.y - (t3 - Math.abs(a2)), m2 = r2 + l2 + h2, f2 = n2 + t3;
      e2 = Math.min(e2, r2), s2 = Math.max(s2, m2), i2 = Math.min(i2, n2), o2 = Math.max(o2, f2);
    }
    return { x: e2, y: i2, width: s2 - e2, height: o2 - i2 };
  }
  static addDecoration(t2, e2) {
    const i2 = t2.length;
    if (i2 === 0)
      return;
    const s2 = 3;
    let c2 = t2[0].x + t2[0].glyphMosaicItem.metrics.left, h2 = t2[0].y;
    for (let l2 = 1; l2 < i2; l2++) {
      const i3 = t2[l2];
      if (i3.y !== h2) {
        const a3 = t2[l2 - 1].x + t2[l2 - 1].glyphMosaicItem.metrics.left + t2[l2 - 1].glyphMosaicItem.metrics.width;
        t2.push({ codePoint: 0, x: c2, y: h2 + e2 - s2, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$2(4, 0, 4, 8), metrics: { width: a3 - c2, height: 2 + 2 * s2, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } }), h2 = i3.y, c2 = i3.x + i3.glyphMosaicItem.metrics.left;
      }
    }
    const a2 = t2[i2 - 1].x + t2[i2 - 1].glyphMosaicItem.metrics.left + t2[i2 - 1].glyphMosaicItem.metrics.width;
    t2.push({ codePoint: 0, x: c2, y: h2 + e2 - s2, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$2(4, 0, 4, 8), metrics: { width: a2 - c2, height: 2 + 2 * s2, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } });
  }
  _breakScore(t2, e2, i2, s2) {
    const o2 = (t2 - e2) * (t2 - e2);
    return s2 ? t2 < e2 ? o2 / 2 : 2 * o2 : o2 + Math.abs(i2) * i2;
  }
  _buildBreak(t2, e2, i2, s2, o2, c2) {
    let h2 = null, a2 = this._breakScore(e2, i2, o2, c2);
    for (const l2 of s2) {
      const t3 = e2 - l2.x, s3 = this._breakScore(t3, i2, o2, c2) + l2.score;
      s3 <= a2 && (h2 = l2, a2 = s3);
    }
    return { index: t2, x: e2, score: a2, previousBreak: h2 };
  }
  _optimalBreaks(t2) {
    return t2 ? this._optimalBreaks(t2.previousBreak).concat(t2.index) : [];
  }
  _applyJustification(t2, e2, i2) {
    const s2 = t2[i2], o2 = s2.vertical ? c : s2.glyphMosaicItem ? s2.glyphMosaicItem.metrics.advance : 0, h2 = (s2.x + o2) * this._justify;
    for (let c2 = e2; c2 <= i2; c2++)
      t2[c2].x -= h2;
  }
}
const x = 4096, w$1 = 8, p = 0.5, y = 2;
class T$1 {
  constructor(e2, t2, i2 = 0, n2 = -1, s2 = p) {
    this.x = e2, this.y = t2, this.angle = i2, this.segment = n2, this.minzoom = s2;
  }
}
class f {
  constructor(e2, t2, n2, s2, o2, a2 = p, l2 = n$1) {
    this.anchor = e2, this.labelAngle = t2, this.glyphAngle = n2, this.page = s2, this.alternateVerticalGlyph = o2, this.minzoom = a2, this.maxzoom = l2;
  }
}
class I$2 {
  constructor(e2, t2, i2, n2, s2, o2, a2, l2, h2, r2, c2, g2) {
    this.tl = e2, this.tr = t2, this.bl = i2, this.br = n2, this.mosaicRect = s2, this.labelAngle = o2, this.minAngle = a2, this.maxAngle = l2, this.anchor = h2, this.minzoom = r2, this.maxzoom = c2, this.page = g2;
  }
}
class b$1 {
  constructor(e2) {
    this.shapes = e2;
  }
}
class u$1 {
  getIconPlacement(i2, n2, s2) {
    const o2 = new t$3(i2.x, i2.y), a2 = s2.rotationAlignment === l$1.MAP, l2 = s2.keepUpright;
    let h2 = s2.rotate * f$1;
    a2 && (h2 += i2.angle);
    const g2 = new b$1([]);
    return s2.allowOverlap && s2.ignorePlacement || !o$2 || (g2.iconColliders = []), this._addIconPlacement(g2, o2, n2, s2, h2), a2 && l2 && this._addIconPlacement(g2, o2, n2, s2, h2 + t$4), g2;
  }
  _addIconPlacement(e2, t2, n2, s2, o2) {
    const a2 = n2.pixelRatio, l2 = n2.width / a2, h2 = n2.height / a2, c2 = s2.offset;
    let x2 = c2[0], d = c2[1];
    switch (s2.anchor) {
      case m.CENTER:
        x2 -= l2 / 2, d -= h2 / 2;
        break;
      case m.LEFT:
        d -= h2 / 2;
        break;
      case m.RIGHT:
        x2 -= l2, d -= h2 / 2;
        break;
      case m.TOP:
        x2 -= l2 / 2;
        break;
      case m.BOTTOM:
        x2 -= l2 / 2, d -= h2;
        break;
      case m.TOP_LEFT:
        break;
      case m.BOTTOM_LEFT:
        d -= h2;
        break;
      case m.TOP_RIGHT:
        x2 -= l2;
        break;
      case m.BOTTOM_RIGHT:
        x2 -= l2, d -= h2;
    }
    const w2 = n2.rect, y2 = 2 / a2, T2 = x2 - y2, f2 = d - y2, b2 = T2 + w2.width / a2, u2 = f2 + w2.height / a2, P2 = new t$3(T2, f2), O = new t$3(b2, u2), _2 = new t$3(T2, u2), k = new t$3(b2, f2);
    if (o2 !== 0) {
      const e3 = Math.cos(o2), t3 = Math.sin(o2);
      P2.rotate(e3, t3), O.rotate(e3, t3), _2.rotate(e3, t3), k.rotate(e3, t3);
    }
    const M = new I$2(P2, k, _2, O, w2, o2, 0, 256, t2, p, n$1, 0);
    if (e2.shapes.push(M), (!s2.allowOverlap || !s2.ignorePlacement) && o$2) {
      const n3 = s2.size, a3 = s2.padding, r2 = { xTile: t2.x, yTile: t2.y, dxPixels: x2 * n3 - a3, dyPixels: d * n3 - a3, hard: !s2.optional, partIndex: 0, width: l2 * n3 + 2 * a3, height: h2 * n3 + 2 * a3, angle: o2, minLod: p, maxLod: n$1 };
      e2.iconColliders.push(r2);
    }
  }
  getTextPlacement(n2, s2, o2, r2) {
    const x2 = new t$3(n2.x, n2.y), d = r2.rotate * f$1, T2 = r2.rotationAlignment === l$1.MAP, u2 = r2.keepUpright, P2 = r2.padding;
    let O = p;
    const _2 = !T2 ? 0 : n2.angle, k = n2.segment >= 0 && T2, M = r2.allowOverlap && r2.ignorePlacement ? null : [], E = [], G = 4, N = !k;
    let A2 = Number.POSITIVE_INFINITY, L2 = Number.NEGATIVE_INFINITY, z = A2, F = L2;
    const v = (k || T2) && u2, R = r2.size / c;
    let B2 = false;
    for (const e2 of s2)
      if (e2.vertical) {
        B2 = true;
        break;
      }
    let H, V = 0, j2 = 0;
    if (!k && B2) {
      const e2 = a$2.getTextBox(s2, r2.lineHeight * c);
      switch (r2.anchor) {
        case m.LEFT:
          V = e2.height / 2, j2 = -e2.width / 2;
          break;
        case m.RIGHT:
          V = -e2.height / 2, j2 = e2.width / 2;
          break;
        case m.TOP:
          V = e2.height / 2, j2 = e2.width / 2;
          break;
        case m.BOTTOM:
          V = -e2.height / 2, j2 = -e2.width / 2;
          break;
        case m.TOP_LEFT:
          V = e2.height;
          break;
        case m.BOTTOM_LEFT:
          j2 = -e2.width;
          break;
        case m.TOP_RIGHT:
          j2 = e2.width;
          break;
        case m.BOTTOM_RIGHT:
          V = -e2.height;
      }
    }
    V += r2.offset[0] * c, j2 += r2.offset[1] * c;
    for (const e2 of s2) {
      const s3 = e2.glyphMosaicItem;
      if (!s3 || s3.rect.isEmpty)
        continue;
      const a2 = s3.rect, l2 = s3.metrics, c2 = s3.page;
      if (M && N) {
        if (H !== void 0 && H !== e2.y) {
          let e3, t2, s4, o3;
          B2 ? (e3 = -F + V, t2 = A2 + j2, s4 = F - z, o3 = L2 - A2) : (e3 = A2 + V, t2 = z + j2, s4 = L2 - A2, o3 = F - z);
          const a3 = { xTile: n2.x, yTile: n2.y, dxPixels: e3 * R - P2, dyPixels: t2 * R - P2, hard: !r2.optional, partIndex: 1, width: s4 * R + 2 * P2, height: o3 * R + 2 * P2, angle: d, minLod: p, maxLod: n$1 };
          M.push(a3), A2 = Number.POSITIVE_INFINITY, L2 = Number.NEGATIVE_INFINITY, z = A2, F = L2;
        }
        H = e2.y;
      }
      const g2 = [];
      if (k) {
        const t2 = 0.5 * s3.metrics.width, i2 = (e2.x + l2.left - G + t2) * R * w$1;
        if (O = this._placeGlyph(n2, O, i2, o2, n2.segment, 1, e2.vertical, c2, g2), u2 && (O = this._placeGlyph(n2, O, i2, o2, n2.segment, -1, e2.vertical, c2, g2)), O >= y)
          break;
      } else
        g2.push(new f(x2, _2, _2, c2, false)), T2 && u2 && g2.push(new f(x2, _2 + t$4, _2 + t$4, c2, false));
      const b2 = e2.x + l2.left, C3 = e2.y - h$1 - l2.top, S = b2 + l2.width, Y = C3 + l2.height;
      let q, U, D, J, K, Q, W, X;
      if (!k && B2)
        if (e2.vertical) {
          const e3 = (b2 + S) / 2 - l2.height / 2, t2 = (C3 + Y) / 2 + l2.width / 2;
          q = new t$3(-t2 - G + V, e3 - G + j2), U = new t$3(q.x + a2.width, q.y + a2.height), D = new t$3(q.x, U.y), J = new t$3(U.x, q.y);
        } else
          q = new t$3(-C3 + G + V, b2 - G + j2), U = new t$3(q.x - a2.height, q.y + a2.width), D = new t$3(U.x, q.y), J = new t$3(q.x, U.y);
      else
        q = new t$3(b2 - G + V, C3 - G + j2), U = new t$3(q.x + a2.width, q.y + a2.height), D = new t$3(q.x, U.y), J = new t$3(U.x, q.y);
      for (const t2 of g2) {
        let i2, s4, o3, h2;
        if (t2.alternateVerticalGlyph) {
          if (!K) {
            const e3 = (C3 + Y) / 2 + j2;
            K = new t$3((b2 + S) / 2 + V - l2.height / 2 - G, e3 + l2.width / 2 + G), Q = new t$3(K.x + a2.height, K.y - a2.width), W = new t$3(Q.x, K.y), X = new t$3(K.x, Q.y);
          }
          i2 = K, s4 = W, o3 = X, h2 = Q;
        } else
          i2 = q, s4 = D, o3 = J, h2 = U;
        const c3 = C3, g3 = Y, x3 = t2.glyphAngle + d;
        if (x3 !== 0) {
          const e3 = Math.cos(x3), t3 = Math.sin(x3);
          i2 = i2.clone(), s4 = s4.clone(), o3 = o3.clone(), h2 = h2.clone(), i2.rotate(e3, t3), h2.rotate(e3, t3), s4.rotate(e3, t3), o3.rotate(e3, t3);
        }
        let w2 = 0, p2 = 256;
        if (k && B2 ? e2.vertical ? t2.alternateVerticalGlyph ? (w2 = 32, p2 = 96) : (w2 = 224, p2 = 32) : (w2 = 224, p2 = 96) : (w2 = 192, p2 = 64), E.push(new I$2(i2, o3, s4, h2, a2, t2.labelAngle, w2, p2, t2.anchor, t2.minzoom, t2.maxzoom, t2.page)), M && (!v || this._legible(t2.labelAngle))) {
          if (N)
            b2 < A2 && (A2 = b2), c3 < z && (z = c3), S > L2 && (L2 = S), g3 > F && (F = g3);
          else if (t2.minzoom < y) {
            const e3 = { xTile: n2.x, yTile: n2.y, dxPixels: (b2 + V) * R - P2, dyPixels: (c3 + V) * R - P2, hard: !r2.optional, partIndex: 1, width: (S - b2) * R + 2 * P2, height: (g3 - c3) * R + 2 * P2, angle: x3, minLod: t2.minzoom, maxLod: t2.maxzoom };
            M.push(e3);
          }
        }
      }
    }
    if (O >= y)
      return null;
    if (M && N) {
      let e2, t2, s3, o3;
      B2 ? (e2 = -F + V, t2 = A2 + j2, s3 = F - z, o3 = L2 - A2) : (e2 = A2 + V, t2 = z + j2, s3 = L2 - A2, o3 = F - z);
      const a2 = { xTile: n2.x, yTile: n2.y, dxPixels: e2 * R - P2, dyPixels: t2 * R - P2, hard: !r2.optional, partIndex: 1, width: s3 * R + 2 * P2, height: o3 * R + 2 * P2, angle: d, minLod: p, maxLod: n$1 };
      M.push(a2);
    }
    const C2 = new b$1(E);
    return M && M.length > 0 && (C2.textColliders = M), C2;
  }
  _legible(e2) {
    const t2 = h$2(e2);
    return t2 < 65 || t2 >= 193;
  }
  _placeGlyph(e2, n2, a2, l2, h2, r2, c2, g2, x2) {
    let d = r2;
    const w2 = d < 0 ? a$4(e2.angle + t$4, r$4) : e2.angle;
    let p2 = 0;
    a2 < 0 && (d *= -1, a2 *= -1, p2 = t$4), d > 0 && ++h2;
    let y2 = new t$3(e2.x, e2.y), T2 = l2[h2], I2 = n$1;
    if (l2.length <= h2)
      return I2;
    for (; ; ) {
      const e3 = T2.x - y2.x, t2 = T2.y - y2.y, i2 = Math.sqrt(e3 * e3 + t2 * t2), r3 = Math.max(a2 / i2, n2), m2 = e3 / i2, b2 = t2 / i2, u2 = a$4(Math.atan2(b2, m2) + p2, r$4);
      if (x2.push(new f(y2, w2, u2, g2, false, r3, I2)), c2 && x2.push(new f(y2, w2, u2, g2, true, r3, I2)), r3 <= n2)
        return r3;
      y2 = T2.clone();
      do {
        if (h2 += d, l2.length <= h2 || h2 < 0)
          return r3;
        T2 = l2[h2];
      } while (y2.isEqual(T2));
      let P2 = T2.x - y2.x, O = T2.y - y2.y;
      const _2 = Math.sqrt(P2 * P2 + O * O);
      P2 *= i2 / _2, O *= i2 / _2, y2.x -= P2, y2.y -= O, I2 = r3;
    }
  }
}
var t$1;
!function(e2) {
  e2[e2.moveTo = 1] = "moveTo", e2[e2.lineTo = 2] = "lineTo", e2[e2.close = 7] = "close";
}(t$1 || (t$1 = {}));
class s$2 {
  constructor(e2, t2) {
    this.values = {}, this._geometry = void 0, this._pbfGeometry = null;
    const s2 = t2.keys, o2 = t2.values, r2 = e2.asUnsafe();
    for (; r2.next(); )
      switch (r2.tag()) {
        case 1:
          this.id = r2.getUInt64();
          break;
        case 2: {
          const e3 = r2.getMessage().asUnsafe(), t3 = this.values;
          for (; !e3.empty(); ) {
            const r3 = e3.getUInt32(), a2 = e3.getUInt32();
            t3[s2[r3]] = o2[a2];
          }
          e3.release();
          break;
        }
        case 3:
          this.type = r2.getUInt32();
          break;
        case 4:
          this._pbfGeometry = r2.getMessage();
          break;
        default:
          r2.skip();
      }
  }
  getGeometry(s2) {
    if (this._geometry !== void 0)
      return this._geometry;
    if (!this._pbfGeometry)
      return null;
    const o2 = this._pbfGeometry.asUnsafe();
    let r2, a2;
    this._pbfGeometry = null, s2 ? s2.reset(this.type) : r2 = [];
    let n2, i2 = t$1.moveTo, l2 = 0, c2 = 0, h2 = 0;
    for (; !o2.empty(); ) {
      if (l2 === 0) {
        const e2 = o2.getUInt32();
        i2 = 7 & e2, l2 = e2 >> 3;
      }
      switch (l2--, i2) {
        case t$1.moveTo:
          c2 += o2.getSInt32(), h2 += o2.getSInt32(), s2 ? s2.moveTo(c2, h2) : r2 && (a2 && r2.push(a2), a2 = [], a2.push(new t$3(c2, h2)));
          break;
        case t$1.lineTo:
          c2 += o2.getSInt32(), h2 += o2.getSInt32(), s2 ? s2.lineTo(c2, h2) : a2 && a2.push(new t$3(c2, h2));
          break;
        case t$1.close:
          s2 ? s2.close() : a2 && !a2[0].equals(c2, h2) && a2.push(a2[0].clone());
          break;
        default:
          throw o2.release(), new Error("Invalid path operation");
      }
    }
    return s2 ? n2 = s2.result() : r2 && (a2 && r2.push(a2), n2 = r2), o2.release(), this._geometry = n2, n2;
  }
}
class r$3 extends t$5 {
  constructor() {
    super(12);
  }
  add(s2, r2, t2) {
    const e2 = this.array;
    e2.push(s2), e2.push(r2), e2.push(t2);
  }
}
class e {
  constructor(t2) {
    this.extent = 4096, this.keys = [], this.values = [], this._pbfLayer = t2.clone();
    const s2 = t2.asUnsafe();
    for (; s2.next(); )
      switch (s2.tag()) {
        case 1:
          this.name = s2.getString();
          break;
        case 3:
          this.keys.push(s2.getString());
          break;
        case 4:
          this.values.push(s2.processMessage(e._parseValue));
          break;
        case 5:
          this.extent = s2.getUInt32();
          break;
        default:
          s2.skip();
      }
  }
  getData() {
    return this._pbfLayer;
  }
  static _parseValue(e2) {
    for (; e2.next(); )
      switch (e2.tag()) {
        case 1:
          return e2.getString();
        case 2:
          return e2.getFloat();
        case 3:
          return e2.getDouble();
        case 4:
          return e2.getInt64();
        case 5:
          return e2.getUInt64();
        case 6:
          return e2.getSInt64();
        case 7:
          return e2.getBool();
        default:
          e2.skip();
      }
    return null;
  }
}
class o$1 extends t$5 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o2, r2, u2, h2, a2, n2, d, e2, p2, i2, c2) {
    const M = this.array;
    let l2 = t$5.i1616to32(t2, o2);
    M.push(l2);
    const m2 = 31;
    l2 = t$5.i8888to32(Math.round(m2 * r2), Math.round(m2 * u2), Math.round(m2 * h2), Math.round(m2 * a2)), M.push(l2), l2 = t$5.i8888to32(Math.round(m2 * n2), Math.round(m2 * d), Math.round(m2 * e2), Math.round(m2 * p2)), M.push(l2), l2 = t$5.i1616to32(i2, 0), M.push(l2), c2 && M.push(...c2);
  }
}
class r$2 extends t$5 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o2, r2) {
    const u2 = this.array;
    u2.push(t$5.i1616to32(t2, o2)), r2 && u2.push(...r2);
  }
}
class u extends t$5 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o2, r2, u2, h2, a2, n2) {
    const d = this.array, e2 = this.index;
    let p2 = t$5.i1616to32(t2, o2);
    d.push(p2);
    const i2 = 15;
    return p2 = t$5.i8888to32(Math.round(i2 * r2), Math.round(i2 * u2), h2, a2), d.push(p2), n2 && d.push(...n2), e2;
  }
}
class h extends t$5 {
  constructor(t2) {
    super(t2);
  }
  add(o2, r2, u2, h2, a2, n2, d, e2, p2, i2, c2, M) {
    const l2 = this.array;
    let m2 = t$5.i1616to32(o2, r2);
    l2.push(m2), m2 = t$5.i1616to32(Math.round(8 * u2), Math.round(8 * h2)), l2.push(m2), m2 = t$5.i8888to32(a2 / 4, n2 / 4, e2, p2), l2.push(m2), m2 = t$5.i8888to32(0, h$2(d), 10 * i2, Math.min(10 * c2, 255)), l2.push(m2), M && l2.push(...M);
  }
}
class a$1 extends t$5 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o2, r2, u2, h2) {
    const a2 = this.array, n2 = t$5.i1616to32(2 * t2 + r2, 2 * o2 + u2);
    a2.push(n2), h2 && a2.push(...h2);
  }
}
class t {
  constructor(t2, e2, s2) {
    this.layerExtent = 4096, this._features = [], this.layer = t2, this.zoom = e2, this._spriteInfo = s2, this._filter = t2.getFeatureFilter();
  }
  pushFeature(t2) {
    this._filter && !this._filter.filter(t2, this.zoom) || this._features.push(t2);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
  getResources(t2, e2, s2) {
  }
}
class r$1 extends t {
  constructor(t2, r2, i2, c2, s2) {
    super(t2, r2, i2), this.type = I$3.CIRCLE, this._circleVertexBuffer = c2, this._circleIndexBuffer = s2;
  }
  get circleIndexStart() {
    return this._circleIndexStart;
  }
  get circleIndexCount() {
    return this._circleIndexCount;
  }
  processFeatures(e2) {
    const t2 = this._circleVertexBuffer, r2 = this._circleIndexBuffer;
    this._circleIndexStart = 3 * r2.index, this._circleIndexCount = 0;
    const i2 = this.layer, c2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    for (const s2 of this._features) {
      const n2 = s2.getGeometry(e2);
      if (!n2)
        continue;
      const l2 = i2.circleMaterial.encodeAttributes(s2, c2, i2);
      for (const e3 of n2)
        if (e3)
          for (const i3 of e3) {
            const e4 = t2.index;
            t2.add(i3.x, i3.y, 0, 0, l2), t2.add(i3.x, i3.y, 0, 1, l2), t2.add(i3.x, i3.y, 1, 0, l2), t2.add(i3.x, i3.y, 1, 1, l2), r2.add(e4 + 0, e4 + 1, e4 + 2), r2.add(e4 + 1, e4 + 2, e4 + 3), this._circleIndexCount += 6;
          }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this._circleVertexBuffer.array.length, e2 += this._circleIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), r2 = new Int32Array(t2.buffer);
    let i2 = 0;
    t2[i2++] = this.type, t2[i2++] = this.layerUIDs.length;
    for (let c2 = 0; c2 < this.layerUIDs.length; c2++)
      t2[i2++] = this.layerUIDs[c2];
    t2[i2++] = this._circleIndexStart, t2[i2++] = this._circleIndexCount, t2[i2++] = this._circleVertexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleVertexBuffer.array.length; c2++)
      r2[i2++] = this._circleVertexBuffer.array[c2];
    t2[i2++] = this._circleIndexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleIndexBuffer.array.length; c2++)
      t2[i2++] = this._circleIndexBuffer.array[c2];
    return t2.buffer;
  }
}
class s$1 extends t {
  constructor(t2, e2, i2, l2, n2, s2, o2) {
    super(t2, e2, i2), this.type = I$3.FILL, this._patternMap = new Map(), this._fillVertexBuffer = l2, this._fillIndexBuffer = n2, this._outlineVertexBuffer = s2, this._outlineIndexBuffer = o2;
  }
  get fillIndexStart() {
    return this._fillIndexStart;
  }
  get fillIndexCount() {
    return this._fillIndexCount;
  }
  get outlineIndexStart() {
    return this._outlineIndexStart;
  }
  get outlineIndexCount() {
    return this._outlineIndexCount;
  }
  getResources(t2, e2, i2) {
    const r2 = this.layer, l2 = this.zoom, n2 = r2.getPaintProperty("fill-pattern");
    if (n2)
      if (n2.isDataDriven)
        for (const s2 of this._features)
          e2(n2.getValue(l2, s2), true);
      else
        e2(n2.getValue(l2), true);
  }
  processFeatures(t2) {
    this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
    const e2 = this.layer, i2 = this.zoom, { fillMaterial: r2, outlineMaterial: l2, hasDataDrivenFill: n2, hasDataDrivenOutline: s2 } = e2;
    t2 && t2.setExtent(this.layerExtent);
    const o2 = e2.getPaintProperty("fill-pattern"), a2 = o2 == null ? void 0 : o2.isDataDriven;
    let f2 = !o2 && e2.getPaintValue("fill-antialias", i2);
    if (e2.outlineUsesFillColor) {
      if (f2 && !e2.hasDataDrivenOpacity) {
        const t3 = e2.getPaintValue("fill-opacity", i2), r3 = e2.getPaintValue("fill-opacity", i2 + 1);
        t3 < 1 && r3 < 1 && (f2 = false);
      }
      if (f2 && !e2.hasDataDrivenColor) {
        const t3 = e2.getPaintValue("fill-color", i2), r3 = e2.getPaintValue("fill-color", i2 + 1);
        t3[3] < 1 && r3[3] < 1 && (f2 = false);
      }
    }
    const u2 = this._features, d = t2 == null ? void 0 : t2.validateTessellation;
    if (a2) {
      const n3 = [];
      for (const a3 of u2) {
        const u3 = o2.getValue(i2, a3), h2 = this._spriteInfo[u3];
        if (!h2 || !h2.rect)
          continue;
        const x2 = r2.encodeAttributes(a3, i2, e2, h2), c2 = f2 && s2 ? l2.encodeAttributes(a3, i2, e2) : [], _2 = a3.getGeometry(t2);
        n3.push({ ddFillAttributes: x2, ddOutlineAttributes: c2, page: h2.page, geometry: _2 }), n3.sort((t3, e3) => t3.page - e3.page);
        for (const { ddFillAttributes: t3, ddOutlineAttributes: i3, page: r3, geometry: l3 } of n3)
          this._processFeature(l3, f2, e2.outlineUsesFillColor, t3, i3, d, r3);
      }
    } else
      for (const h2 of u2) {
        const o3 = n2 ? r2.encodeAttributes(h2, i2, e2) : null, a3 = f2 && s2 ? l2.encodeAttributes(h2, i2, e2) : null, u3 = h2.getGeometry(t2);
        this._processFeature(u3, f2, e2.outlineUsesFillColor, o3, a3, d);
      }
  }
  serialize() {
    let t2 = 10;
    t2 += this.layerUIDs.length, t2 += this._fillVertexBuffer.array.length, t2 += this._fillIndexBuffer.array.length, t2 += this._outlineVertexBuffer.array.length, t2 += this._outlineIndexBuffer.array.length, t2 += 3 * this._patternMap.size + 1;
    const e2 = new Uint32Array(t2), i2 = new Int32Array(e2.buffer);
    let r2 = 0;
    e2[r2++] = this.type, e2[r2++] = this.layerUIDs.length;
    for (let s2 = 0; s2 < this.layerUIDs.length; s2++)
      e2[r2++] = this.layerUIDs[s2];
    e2[r2++] = this._fillIndexStart, e2[r2++] = this._fillIndexCount, e2[r2++] = this._outlineIndexStart, e2[r2++] = this._outlineIndexCount;
    const l2 = this._patternMap, n2 = l2.size;
    if (e2[r2++] = n2, n2 > 0)
      for (const [s2, [o2, a2]] of l2)
        e2[r2++] = s2, e2[r2++] = o2, e2[r2++] = a2;
    e2[r2++] = this._fillVertexBuffer.array.length;
    for (let s2 = 0; s2 < this._fillVertexBuffer.array.length; s2++)
      i2[r2++] = this._fillVertexBuffer.array[s2];
    e2[r2++] = this._fillIndexBuffer.array.length;
    for (let s2 = 0; s2 < this._fillIndexBuffer.array.length; s2++)
      e2[r2++] = this._fillIndexBuffer.array[s2];
    e2[r2++] = this._outlineVertexBuffer.array.length;
    for (let s2 = 0; s2 < this._outlineVertexBuffer.array.length; s2++)
      i2[r2++] = this._outlineVertexBuffer.array[s2];
    e2[r2++] = this._outlineIndexBuffer.array.length;
    for (let s2 = 0; s2 < this._outlineIndexBuffer.array.length; s2++)
      e2[r2++] = this._outlineIndexBuffer.array[s2];
    return e2.buffer;
  }
  _processFeature(t2, e2, i2, r2, l2, n2, o2) {
    if (!t2)
      return;
    const a2 = t2.length, f2 = !l2 || l2.length === 0;
    if (e2 && (!i2 || f2))
      for (let s2 = 0; s2 < a2; s2++)
        this._processOutline(t2[s2], l2);
    const u2 = 32;
    let d;
    for (let h2 = 0; h2 < a2; h2++) {
      const e3 = s$1._area(t2[h2]);
      e3 > u2 ? (d !== void 0 && this._processFill(t2, d, r2, n2, o2), d = [h2]) : e3 < -u2 && d !== void 0 && d.push(h2);
    }
    d !== void 0 && this._processFill(t2, d, r2, n2, o2);
  }
  _processOutline(t2, e2) {
    const i2 = this._outlineVertexBuffer, r2 = this._outlineIndexBuffer, l2 = r2.index;
    let s2, o2, a2;
    const f2 = new t$3(0, 0), u2 = new t$3(0, 0), d = new t$3(0, 0);
    let h2 = -1, x2 = -1, c2 = -1, _2 = -1, y2 = -1, g2 = false;
    const p2 = 0;
    let I2 = t2.length;
    if (I2 < 2)
      return;
    const B2 = t2[p2];
    let m2 = t2[I2 - 1];
    for (; I2 && m2.isEqual(B2); )
      --I2, m2 = t2[I2 - 1];
    if (!(I2 - p2 < 2)) {
      for (let l3 = p2; l3 < I2; ++l3) {
        l3 === p2 ? (s2 = t2[I2 - 1], o2 = t2[p2], a2 = t2[p2 + 1], f2.assignSub(o2, s2), f2.normalize(), f2.rightPerpendicular()) : (s2 = o2, o2 = a2, a2 = l3 !== I2 - 1 ? t2[l3 + 1] : t2[p2], f2.assign(u2));
        const n2 = this._isClipEdge(s2, o2);
        _2 === -1 && (g2 = n2), u2.assignSub(a2, o2), u2.normalize(), u2.rightPerpendicular();
        const B3 = f2.x * u2.y - f2.y * u2.x;
        d.assignAdd(f2, u2), d.normalize();
        const m3 = -d.x * -f2.x + -d.y * -f2.y;
        let V = Math.abs(m3 !== 0 ? 1 / m3 : 1);
        V > 8 && (V = 8), B3 >= 0 ? (c2 = i2.add(o2.x, o2.y, f2.x, f2.y, 0, 1, e2), _2 === -1 && (_2 = c2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2), x2 = i2.add(o2.x, o2.y, V * -d.x, V * -d.y, 0, -1, e2), y2 === -1 && (y2 = x2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2), h2 = x2, x2 = c2, c2 = i2.add(o2.x, o2.y, d.x, d.y, 0, 1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2), x2 = i2.add(o2.x, o2.y, u2.x, u2.y, 0, 1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2)) : (c2 = i2.add(o2.x, o2.y, V * d.x, V * d.y, 0, 1, e2), _2 === -1 && (_2 = c2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2), x2 = i2.add(o2.x, o2.y, -f2.x, -f2.y, 0, -1, e2), y2 === -1 && (y2 = x2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2), h2 = x2, x2 = c2, c2 = i2.add(o2.x, o2.y, -d.x, -d.y, 0, -1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2), h2 = i2.add(o2.x, o2.y, -u2.x, -u2.y, 0, -1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n2 && r2.add(h2, x2, c2));
      }
      h2 >= 0 && x2 >= 0 && _2 >= 0 && !g2 && r2.add(h2, x2, _2), h2 >= 0 && _2 >= 0 && y2 >= 0 && !g2 && r2.add(h2, y2, _2), this._outlineIndexCount += 3 * (r2.index - l2);
    }
  }
  _processFill(r2, l2, n2, s2, o2) {
    s2 = true;
    let a2;
    l2.length > 1 && (a2 = []);
    let f2 = 0;
    for (const t2 of l2)
      f2 !== 0 && a2.push(f2), f2 += r2[t2].length;
    const u2 = 2 * f2, d = t$6.acquire();
    for (const t2 of l2) {
      const e2 = r2[t2], i2 = e2.length;
      for (let t3 = 0; t3 < i2; ++t3)
        d.push(e2[t3].x, e2[t3].y);
    }
    const h2 = x$1(d, a2, 2);
    if (s2 && x$1.deviation(d, a2, 2, h2) > 0) {
      const t2 = l2.map((t3) => r2[t3].length), { buffer: e2, vertexCount: s3 } = r$5(d, t2);
      if (s3 > 0) {
        const t3 = this._fillVertexBuffer.index;
        for (let i2 = 0; i2 < s3; i2++)
          this._fillVertexBuffer.add(e2[2 * i2], e2[2 * i2 + 1], n2);
        for (let e3 = 0; e3 < s3; e3 += 3) {
          const i2 = t3 + e3;
          this._fillIndexBuffer.add(i2, i2 + 1, i2 + 2);
        }
        if (o2 !== void 0) {
          const t4 = this._patternMap, e3 = t4.get(o2);
          e3 ? e3[1] += s3 : t4.set(o2, [this._fillIndexStart + this._fillIndexCount, s3]);
        }
        this._fillIndexCount += s3;
      }
    } else {
      const t2 = h2.length;
      if (t2 > 0) {
        const e2 = this._fillVertexBuffer.index;
        let i2 = 0;
        for (; i2 < u2; )
          this._fillVertexBuffer.add(d[i2++], d[i2++], n2);
        let r3 = 0;
        for (; r3 < t2; )
          this._fillIndexBuffer.add(e2 + h2[r3++], e2 + h2[r3++], e2 + h2[r3++]);
        if (o2 !== void 0) {
          const e3 = this._patternMap, i3 = e3.get(o2);
          i3 ? i3[1] += t2 : e3.set(o2, [this._fillIndexStart + this._fillIndexCount, t2]);
        }
        this._fillIndexCount += t2;
      }
    }
    t$6.release(d);
  }
  _isClipEdge(t2, e2) {
    return t2.x === e2.x ? t2.x <= -64 || t2.x >= 4160 : t2.y === e2.y && (t2.y <= -64 || t2.y >= 4160);
  }
  static _area(t2) {
    let e2 = 0;
    const i2 = t2.length - 1;
    for (let r2 = 0; r2 < i2; r2++)
      e2 += (t2[r2].x - t2[r2 + 1].x) * (t2[r2].y + t2[r2 + 1].y);
    return e2 += (t2[i2].x - t2[0].x) * (t2[i2].y + t2[0].y), 0.5 * e2;
  }
}
const s = 65535;
class n extends t {
  constructor(t2, s2, n2, a2, o2) {
    super(t2, s2, n2), this.type = I$3.LINE, this._tessellationOptions = { pixelCoordRatio: 8, halfWidth: 0, offset: 0 }, this._patternMap = new Map(), this.tessellationProperties = { _lineVertexBuffer: null, _lineIndexBuffer: null, _ddValues: null }, this.tessellationProperties._lineVertexBuffer = a2, this.tessellationProperties._lineIndexBuffer = o2, this._lineTessellator = new c$2(r(this.tessellationProperties), l(this.tessellationProperties), t2.canUseThinTessellation);
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  getResources(e2, t2, i2) {
    const s2 = this.layer, n2 = this.zoom, r2 = s2.getPaintProperty("line-pattern"), l2 = s2.getPaintProperty("line-dasharray"), a2 = s2.getLayoutProperty("line-cap");
    if (!r2 && !l2)
      return;
    const o2 = (a2 == null ? void 0 : a2.getValue(n2)) || 0, u2 = a2 == null ? void 0 : a2.isDataDriven, f2 = r2 == null ? void 0 : r2.isDataDriven, h2 = l2 == null ? void 0 : l2.isDataDriven;
    if (f2 || h2)
      for (const p2 of this._features)
        t2(f2 ? r2.getValue(n2, p2) : this._getDashArrayKey(p2, n2, s2, l2, u2, a2, o2));
    else if (r2)
      t2(r2.getValue(n2));
    else if (l2) {
      const e3 = l2.getValue(n2);
      t2(s2.getDashKey(e3, o2));
    }
  }
  processFeatures(e2) {
    this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
    const t2 = this.layer, i2 = this.zoom, s2 = this._features, n2 = this._tessellationOptions, { hasDataDrivenLine: r2, lineMaterial: l2 } = t2;
    e2 && e2.setExtent(this.layerExtent);
    const a2 = t2.getPaintProperty("line-pattern"), o2 = t2.getPaintProperty("line-dasharray"), u2 = a2 == null ? void 0 : a2.isDataDriven, f2 = o2 == null ? void 0 : o2.isDataDriven;
    let h2;
    h2 = t2.getLayoutProperty("line-cap");
    const p2 = (h2 == null ? void 0 : h2.isDataDriven) ? h2 : null, g2 = p2 ? null : t2.getLayoutValue("line-cap", i2), y2 = g2 || 0, d = !!p2;
    h2 = t2.getLayoutProperty("line-join");
    const c2 = (h2 == null ? void 0 : h2.isDataDriven) ? h2 : null, _2 = c2 ? null : t2.getLayoutValue("line-join", i2);
    h2 = t2.getLayoutProperty("line-miter-limit");
    const x2 = (h2 == null ? void 0 : h2.isDataDriven) ? h2 : null, V = x2 ? null : t2.getLayoutValue("line-miter-limit", i2);
    h2 = t2.getLayoutProperty("line-round-limit");
    const m2 = (h2 == null ? void 0 : h2.isDataDriven) ? h2 : null, D = m2 ? null : t2.getLayoutValue("line-round-limit", i2);
    h2 = t2.getPaintProperty("line-width");
    const P2 = (h2 == null ? void 0 : h2.isDataDriven) ? h2 : null, I2 = P2 ? null : t2.getPaintValue("line-width", i2);
    h2 = t2.getPaintProperty("line-offset");
    const L2 = (h2 == null ? void 0 : h2.isDataDriven) ? h2 : null, B2 = L2 ? null : t2.getPaintValue("line-offset", i2);
    if (u2 || f2) {
      const r3 = [];
      for (const n3 of s2) {
        const s3 = u2 ? a2.getValue(i2, n3) : this._getDashArrayKey(n3, i2, t2, o2, d, p2, y2), f3 = this._spriteInfo[s3];
        if (!f3 || !f3.rect)
          continue;
        const h3 = l2.encodeAttributes(n3, i2, t2, f3), v = n3.getGeometry(e2);
        r3.push({ ddAttributes: h3, page: f3.page, cap: p2 ? p2.getValue(i2, n3) : g2, join: c2 ? c2.getValue(i2, n3) : _2, miterLimit: x2 ? x2.getValue(i2, n3) : V, roundLimit: m2 ? m2.getValue(i2, n3) : D, halfWidth: 0.5 * (P2 ? P2.getValue(i2, n3) : I2), offset: L2 ? L2.getValue(i2, n3) : B2, geometry: v });
      }
      r3.sort((e3, t3) => e3.page - t3.page), n2.textured = true;
      for (const { ddAttributes: e3, page: t3, cap: i3, join: s3, miterLimit: l3, roundLimit: a3, halfWidth: o3, offset: u3, geometry: f3 } of r3)
        n2.capType = i3, n2.joinType = s3, n2.miterLimit = l3, n2.roundLimit = a3, n2.halfWidth = o3, n2.offset = u3, this._processFeature(f3, e3, t3);
    } else {
      if (a2) {
        const e3 = a2.getValue(i2), t3 = this._spriteInfo[e3];
        if (!t3 || !t3.rect)
          return;
      }
      n2.textured = !(!a2 && !o2), n2.capType = g2, n2.joinType = _2, n2.miterLimit = V, n2.roundLimit = D, n2.halfWidth = 0.5 * I2, n2.offset = B2;
      for (const a3 of s2) {
        const s3 = r2 ? l2.encodeAttributes(a3, i2, t2) : null;
        p2 && (n2.capType = p2.getValue(i2, a3)), c2 && (n2.joinType = c2.getValue(i2, a3)), x2 && (n2.miterLimit = x2.getValue(i2, a3)), m2 && (n2.roundLimit = m2.getValue(i2, a3)), P2 && (n2.halfWidth = 0.5 * P2.getValue(i2, a3)), L2 && (n2.offset = L2.getValue(i2, a3));
        const o3 = a3.getGeometry(e2);
        this._processFeature(o3, s3);
      }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this.tessellationProperties._lineVertexBuffer.array.length, e2 += this.tessellationProperties._lineIndexBuffer.array.length, e2 += 3 * this._patternMap.size + 1;
    const t2 = new Uint32Array(e2), i2 = new Int32Array(t2.buffer);
    let s2 = 0;
    t2[s2++] = this.type, t2[s2++] = this.layerUIDs.length;
    for (let l2 = 0; l2 < this.layerUIDs.length; l2++)
      t2[s2++] = this.layerUIDs[l2];
    t2[s2++] = this._lineIndexStart, t2[s2++] = this._lineIndexCount;
    const n2 = this._patternMap, r2 = n2.size;
    if (t2[s2++] = r2, r2 > 0)
      for (const [l2, [a2, o2]] of n2)
        t2[s2++] = l2, t2[s2++] = a2, t2[s2++] = o2;
    t2[s2++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (let l2 = 0; l2 < this.tessellationProperties._lineVertexBuffer.array.length; l2++)
      i2[s2++] = this.tessellationProperties._lineVertexBuffer.array[l2];
    t2[s2++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (let l2 = 0; l2 < this.tessellationProperties._lineIndexBuffer.array.length; l2++)
      t2[s2++] = this.tessellationProperties._lineIndexBuffer.array[l2];
    return t2.buffer;
  }
  _processFeature(e2, t2, i2) {
    if (!e2)
      return;
    const s2 = e2.length;
    for (let n2 = 0; n2 < s2; n2++)
      this._processGeometry(e2[n2], t2, i2);
  }
  _processGeometry(e2, t2, i2) {
    if (e2.length < 2)
      return;
    const n2 = 1e-3;
    let r2, l2, a2 = e2[0], o2 = 1;
    for (; o2 < e2.length; )
      r2 = e2[o2].x - a2.x, l2 = e2[o2].y - a2.y, r2 * r2 + l2 * l2 < n2 * n2 ? e2.splice(o2, 1) : (a2 = e2[o2], ++o2);
    if (e2.length < 2)
      return;
    const u2 = this.tessellationProperties._lineIndexBuffer, f2 = 3 * u2.index;
    this._tessellationOptions.initialDistance = 0, this._tessellationOptions.wrapDistance = s, this.tessellationProperties._ddValues = t2, this._lineTessellator.tessellate(e2, this._tessellationOptions);
    const h2 = 3 * u2.index - f2;
    if (i2 !== void 0) {
      const e3 = this._patternMap, t3 = e3.get(i2);
      t3 ? t3[1] += h2 : e3.set(i2, [f2 + this._lineIndexCount, h2]);
    }
    this._lineIndexCount += h2;
  }
  _getDashArrayKey(e2, t2, i2, s2, n2, r2, l2) {
    const a2 = n2 ? r2.getValue(t2, e2) : l2, o2 = s2.getValue(t2, e2);
    return i2.getDashKey(o2, a2);
  }
}
const r = (e2) => (t2, i2, s2, n2, r2, l2, a2, o2, u2, f2, h2) => (e2._lineVertexBuffer.add(t2, i2, a2, o2, s2, n2, r2, l2, u2, f2, h2, e2._ddValues), e2._lineVertexBuffer.index - 1), l = (e2) => (t2, i2, s2) => {
  e2._lineIndexBuffer.add(t2, i2, s2);
};
const I$1 = 10;
function b(e2, t2) {
  return e2.iconMosaicItem && t2.iconMosaicItem ? e2.iconMosaicItem.page === t2.iconMosaicItem.page ? 0 : e2.iconMosaicItem.page - t2.iconMosaicItem.page : e2.iconMosaicItem && !t2.iconMosaicItem ? 1 : !e2.iconMosaicItem && t2.iconMosaicItem ? -1 : 0;
}
class A extends t {
  constructor(e2, t2, i2, s2, a2, o2, r2, l2) {
    super(e2, t2, l2.getSpriteItems()), this.type = I$3.SYMBOL, this._markerMap = new Map(), this._glyphMap = new Map(), this._glyphBufferDataStorage = new Map(), this._isIconSDF = false, this._iconVertexBuffer = i2, this._iconIndexBuffer = s2, this._textVertexBuffer = a2, this._textIndexBuffer = o2, this._placementEngine = r2, this._workerTileHandler = l2;
  }
  get markerPageMap() {
    return this._markerMap;
  }
  get glyphsPageMap() {
    return this._glyphMap;
  }
  get symbolInstances() {
    return this._symbolInstances;
  }
  getResources(e2, n2, i2) {
    const s2 = this.layer, a2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    const o2 = s2.getLayoutProperty("icon-image"), r2 = s2.getLayoutProperty("text-field");
    let l2 = s2.getLayoutProperty("text-transform"), h2 = s2.getLayoutProperty("text-font");
    const x2 = [];
    let c2, g2, f2, y2;
    o2 && !o2.isDataDriven && (c2 = o2.getValue(a2)), r2 && !r2.isDataDriven && (g2 = r2.getValue(a2)), l2 && l2.isDataDriven || (f2 = s2.getLayoutValue("text-transform", a2), l2 = null), h2 && h2.isDataDriven || (y2 = s2.getLayoutValue("text-font", a2), h2 = null);
    for (const m2 of this._features) {
      const u2 = m2.getGeometry(e2);
      if (!u2 || u2.length === 0)
        continue;
      let p2, _2;
      o2 && (p2 = o2.isDataDriven ? o2.getValue(a2, m2) : this._replaceKeys(c2, m2.values), p2 && n2(p2));
      let M = false;
      if (r2 && (_2 = r2.isDataDriven ? r2.getValue(a2, m2) : this._replaceKeys(g2, m2.values), _2)) {
        switch (_2 = _2.replace(/\\n/g, "\n"), l2 && (f2 = l2.getValue(a2, m2)), f2) {
          case o$3.LOWERCASE:
            _2 = _2.toLowerCase();
            break;
          case o$3.UPPERCASE:
            _2 = _2.toUpperCase();
        }
        if (A._bidiEngine.hasBidiChar(_2)) {
          let e4;
          e4 = A._bidiEngine.checkContextual(_2) === "rtl" ? "IDNNN" : "ICNNN", _2 = A._bidiEngine.bidiTransform(_2, e4, "VLYSN"), M = true;
        }
        const e3 = _2.length;
        if (e3 > 0) {
          h2 && (y2 = h2.getValue(a2, m2));
          for (const t2 of y2) {
            let n3 = i2[t2];
            n3 || (n3 = i2[t2] = new Set());
            for (let t3 = 0; t3 < e3; t3++) {
              const e4 = _2.charCodeAt(t3);
              n3.add(e4);
            }
          }
        }
      }
      if (!p2 && !_2)
        continue;
      const P2 = s2.getLayoutValue("symbol-sort-key", a2, m2), I2 = { feature: m2, sprite: p2, label: _2, rtl: M, geometry: u2, hash: (_2 ? c$3(_2) : 0) ^ (p2 ? c$3(p2) : 0), priority: P2, textFont: y2 };
      x2.push(I2);
    }
    this._symbolFeatures = x2;
  }
  processFeatures(e2) {
    e2 && e2.setExtent(this.layerExtent);
    const t2 = this.layer, n2 = this.zoom, s2 = t2.getLayoutValue("symbol-placement", n2), a2 = s2 !== n$2.POINT, c$12 = t2.getLayoutValue("symbol-spacing", n2) * w$1, d = t2.getLayoutProperty("icon-image"), P2 = t2.getLayoutProperty("text-field"), I2 = d ? new T$2(t2, n2, a2) : null, L2 = P2 ? new m$1(t2, n2, a2) : null, V = this._workerTileHandler;
    let T2;
    d && (T2 = V.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
    const w2 = [];
    let B2 = 1;
    L2 && L2.size && (B2 = L2.size / c);
    const C2 = L2 ? L2.maxAngle * f$1 : 0, R = L2 ? L2.size * w$1 : 0;
    for (const i2 of this._symbolFeatures) {
      let e3;
      I2 && T2 && i2.sprite && (e3 = T2[i2.sprite], e3 && e3.sdf && (this._isIconSDF = true));
      let t3;
      !!e3 && I2.update(n2, i2.feature);
      let d2 = 0;
      const p2 = i2.label;
      if (p2) {
        L2.update(n2, i2.feature);
        const e4 = a2 && L2.rotationAlignment === l$1.MAP ? L2.keepUpright : L2.writingMode && L2.writingMode.includes(p$1.VERTICAL);
        let s3 = 0.5;
        switch (L2.anchor) {
          case m.TOP_LEFT:
          case m.LEFT:
          case m.BOTTOM_LEFT:
            s3 = 0;
            break;
          case m.TOP_RIGHT:
          case m.RIGHT:
          case m.BOTTOM_RIGHT:
            s3 = 1;
        }
        let r2 = 0.5;
        switch (L2.anchor) {
          case m.TOP_LEFT:
          case m.TOP:
          case m.TOP_RIGHT:
            r2 = 0;
            break;
          case m.BOTTOM_LEFT:
          case m.BOTTOM:
          case m.BOTTOM_RIGHT:
            r2 = 1;
        }
        let l2 = 0.5;
        switch (L2.justify) {
          case u$2.AUTO:
            l2 = s3;
            break;
          case u$2.LEFT:
            l2 = 0;
            break;
          case u$2.RIGHT:
            l2 = 1;
        }
        const c$13 = L2.letterSpacing * c, g2 = a2 ? 0 : L2.maxWidth * c, _2 = L2.lineHeight * c, M = i2.textFont.map((e5) => V.getGlyphItems(e5));
        if (t3 = new a$2(M, g2, _2, c$13, s3, r2, l2).getShaping(p2, i2.rtl, e4), t3 && t3.length > 0) {
          let e5 = 1e30, n3 = -1e30;
          for (const i3 of t3)
            e5 = Math.min(e5, i3.x), n3 = Math.max(n3, i3.x);
          d2 = (n3 - e5 + 2 * c) * B2 * w$1;
        }
      }
      for (let n3 of i2.geometry) {
        const h2 = [];
        if (s2 === n$2.LINE) {
          if (t3 && t3.length > 0 && L2 && L2.size) {
            const e4 = L2.size * w$1 * (2 + Math.min(2, 4 * Math.abs(L2.offset[1])));
            n3 = A._smoothVertices(n3, e4);
          }
          A._pushAnchors(h2, n3, c$12, d2);
        } else
          s2 === n$2.LINE_CENTER ? A._pushCenterAnchor(h2, n3) : i2.feature.type === s$4.Polygon ? A._pushCentroid(h2, n3) : h2.push(new T$1(n3[0].x, n3[0].y));
        for (const s3 of h2) {
          if (s3.x < 0 || s3.x > x || s3.y < 0 || s3.y > x)
            continue;
          if (a2 && d2 > 0 && L2.rotationAlignment === l$1.MAP && !A._honorsTextMaxAngle(n3, s3, d2, C2, R))
            continue;
          const o2 = { shaping: t3, line: n3, iconMosaicItem: e3, anchor: s3, symbolFeature: i2, textColliders: [], iconColliders: [], textVertexRanges: [], iconVertexRanges: [] };
          w2.push(o2), this._processFeature(o2, I2, L2);
        }
      }
    }
    w2.sort(b), this._addPlacedGlyphs(), this._symbolInstances = w2;
  }
  serialize() {
    let e2 = 11;
    e2 += this.layerUIDs.length, e2 += 3 * this.markerPageMap.size, e2 += 3 * this.glyphsPageMap.size, e2 += A._symbolsSerializationLength(this._symbolInstances), e2 += this._iconVertexBuffer.array.length, e2 += this._iconIndexBuffer.array.length, e2 += this._textVertexBuffer.array.length, e2 += this._textIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), n2 = new Int32Array(t2.buffer), i2 = new Float32Array(t2.buffer);
    let s2 = 0;
    t2[s2++] = this.type, t2[s2++] = this.layerUIDs.length;
    for (let a2 = 0; a2 < this.layerUIDs.length; a2++)
      t2[s2++] = this.layerUIDs[a2];
    t2[s2++] = this._isIconSDF ? 1 : 0, t2[s2++] = this.markerPageMap.size;
    for (const [a2, [o2, r2]] of this.markerPageMap)
      t2[s2++] = a2, t2[s2++] = o2, t2[s2++] = r2;
    t2[s2++] = this.glyphsPageMap.size;
    for (const [a2, [o2, r2]] of this.glyphsPageMap)
      t2[s2++] = a2, t2[s2++] = o2, t2[s2++] = r2;
    t2[s2++] = this._iconVertexBuffer.index / 4, t2[s2++] = this._textVertexBuffer.index / 4, s2 = A.serializeSymbols(t2, n2, i2, s2, this._symbolInstances), t2[s2++] = this._iconVertexBuffer.array.length;
    for (let a2 = 0; a2 < this._iconVertexBuffer.array.length; a2++)
      n2[s2++] = this._iconVertexBuffer.array[a2];
    t2[s2++] = this._iconIndexBuffer.array.length;
    for (let a2 = 0; a2 < this._iconIndexBuffer.array.length; a2++)
      t2[s2++] = this._iconIndexBuffer.array[a2];
    t2[s2++] = this._textVertexBuffer.array.length;
    for (let a2 = 0; a2 < this._textVertexBuffer.array.length; a2++)
      n2[s2++] = this._textVertexBuffer.array[a2];
    t2[s2++] = this._textIndexBuffer.array.length;
    for (let a2 = 0; a2 < this._textIndexBuffer.array.length; a2++)
      t2[s2++] = this._textIndexBuffer.array[a2];
    return t2.buffer;
  }
  static _symbolsSerializationLength(e2) {
    let t2 = 0;
    t2 += 1;
    for (const n2 of e2 || []) {
      t2 += 4, t2 += 1;
      for (const e3 of n2.textColliders)
        t2 += I$1;
      for (const e3 of n2.iconColliders)
        t2 += I$1;
      t2 += 1, t2 += 2 * n2.textVertexRanges.length, t2 += 1, t2 += 2 * n2.iconVertexRanges.length;
    }
    return t2;
  }
  static serializeSymbols(e2, t2, n2, i2, s2) {
    s2 = s2 || [], t2[i2++] = s2.length;
    for (const a2 of s2) {
      t2[i2++] = a2.anchor.x, t2[i2++] = a2.anchor.y, t2[i2++] = a2.symbolFeature.hash, t2[i2++] = a2.symbolFeature.priority, t2[i2++] = a2.textColliders.length + a2.iconColliders.length;
      for (const e3 of a2.textColliders)
        t2[i2++] = e3.xTile, t2[i2++] = e3.yTile, t2[i2++] = e3.dxPixels, t2[i2++] = e3.dyPixels, t2[i2++] = e3.hard ? 1 : 0, t2[i2++] = e3.partIndex, n2[i2++] = e3.minLod, n2[i2++] = e3.maxLod, t2[i2++] = e3.width, t2[i2++] = e3.height;
      for (const e3 of a2.iconColliders)
        t2[i2++] = e3.xTile, t2[i2++] = e3.yTile, t2[i2++] = e3.dxPixels, t2[i2++] = e3.dyPixels, t2[i2++] = e3.hard ? 1 : 0, t2[i2++] = e3.partIndex, n2[i2++] = e3.minLod, n2[i2++] = e3.maxLod, t2[i2++] = e3.width, t2[i2++] = e3.height;
      t2[i2++] = a2.textVertexRanges.length;
      for (const [e3, n3] of a2.textVertexRanges)
        t2[i2++] = e3, t2[i2++] = n3;
      t2[i2++] = a2.iconVertexRanges.length;
      for (const [e3, n3] of a2.iconVertexRanges)
        t2[i2++] = e3, t2[i2++] = n3;
    }
    return i2;
  }
  _replaceKeys(e2, t2) {
    return e2.replace(/{([^{}]+)}/g, (e3, n2) => n2 in t2 ? t2[n2] : "");
  }
  _processFeature(e2, t2, n2) {
    const { line: i2, iconMosaicItem: a2, shaping: o2, anchor: r2 } = e2, l2 = this.zoom, h2 = this.layer, x2 = !!a2;
    let c2 = true;
    x2 && (c2 = t2.optional || !a2);
    const d = o2 && o2.length > 0;
    let g2, y2, m2 = true;
    if (d && (m2 = n2.optional), x2 && (g2 = this._placementEngine.getIconPlacement(r2, a2, t2)), (g2 || c2) && (d && (y2 = this._placementEngine.getTextPlacement(r2, o2, i2, n2)), y2 || m2)) {
      if (g2 && y2 || (m2 || c2 ? m2 || y2 ? c2 || g2 || (y2 = null) : g2 = null : (g2 = null, y2 = null)), y2) {
        const t3 = h2.hasDataDrivenText ? h2.textMaterial.encodeAttributes(e2.symbolFeature.feature, l2, h2) : null;
        if (this._storePlacedGlyphs(e2, y2.shapes, l2, n2.rotationAlignment, t3), y2.textColliders) {
          e2.textColliders = y2.textColliders;
          for (const e3 of y2.textColliders) {
            e3.minLod = Math.max(l2 + P(e3.minLod), 0), e3.maxLod = Math.min(l2 + P(e3.maxLod), 25);
            const t4 = e3.angle;
            if (t4) {
              const n3 = Math.cos(t4), i3 = Math.sin(t4), s2 = e3.dxPixels * n3 - e3.dyPixels * i3, a3 = e3.dxPixels * i3 + e3.dyPixels * n3, o3 = (e3.dxPixels + e3.width) * n3 - e3.dyPixels * i3, r3 = (e3.dxPixels + e3.width) * i3 + e3.dyPixels * n3, l3 = e3.dxPixels * n3 - (e3.dyPixels + e3.height) * i3, h3 = e3.dxPixels * i3 + (e3.dyPixels + e3.height) * n3, x3 = (e3.dxPixels + e3.width) * n3 - (e3.dyPixels + e3.height) * i3, c3 = (e3.dxPixels + e3.width) * i3 + (e3.dyPixels + e3.height) * n3, d2 = Math.min(s2, o3, l3, x3), g3 = Math.max(s2, o3, l3, x3), f2 = Math.min(a3, r3, h3, c3), y3 = Math.max(a3, r3, h3, c3);
              e3.dxPixels = d2, e3.dyPixels = f2, e3.width = g3 - d2, e3.height = y3 - f2;
            }
          }
        }
      }
      if (g2) {
        const n3 = h2.hasDataDrivenIcon ? h2.iconMaterial.encodeAttributes(e2.symbolFeature.feature, l2, h2) : null;
        if (this._addPlacedIcons(e2, g2.shapes, l2, a2.page, t2.rotationAlignment === l$1.VIEWPORT, n3), g2.iconColliders) {
          e2.iconColliders = g2.iconColliders;
          for (const e3 of g2.iconColliders) {
            e3.minLod = Math.max(l2 + P(e3.minLod), 0), e3.maxLod = Math.min(l2 + P(e3.maxLod), 25);
            const t3 = e3.angle;
            if (t3) {
              const n4 = Math.cos(t3), i3 = Math.sin(t3), s2 = e3.dxPixels * n4 - e3.dyPixels * i3, a3 = e3.dxPixels * i3 + e3.dyPixels * n4, o3 = (e3.dxPixels + e3.width) * n4 - e3.dyPixels * i3, r3 = (e3.dxPixels + e3.width) * i3 + e3.dyPixels * n4, l3 = e3.dxPixels * n4 - (e3.dyPixels + e3.height) * i3, h3 = e3.dxPixels * i3 + (e3.dyPixels + e3.height) * n4, x3 = (e3.dxPixels + e3.width) * n4 - (e3.dyPixels + e3.height) * i3, c3 = (e3.dxPixels + e3.width) * i3 + (e3.dyPixels + e3.height) * n4, d2 = Math.min(s2, o3, l3, x3), g3 = Math.max(s2, o3, l3, x3), f2 = Math.min(a3, r3, h3, c3), y3 = Math.max(a3, r3, h3, c3);
              e3.dxPixels = d2, e3.dyPixels = f2, e3.width = g3 - d2, e3.height = y3 - f2;
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(e2, t2, n2, i2, a2, o2) {
    const r2 = Math.max(n2 - 1, 0), l2 = this._iconVertexBuffer, h2 = this._iconIndexBuffer, x2 = this._markerMap;
    for (const c2 of t2) {
      const t3 = a2 ? 0 : Math.max(n2 + P(c2.minzoom), r2), d = a2 ? 25 : Math.min(n2 + P(c2.maxzoom), 25);
      if (d <= t3)
        continue;
      const g2 = c2.tl, f2 = c2.tr, y2 = c2.bl, m2 = c2.br, u2 = c2.mosaicRect, p2 = c2.labelAngle, _2 = c2.minAngle, M = c2.maxAngle, P$1 = c2.anchor, I2 = l2.index, b2 = u2.x, A2 = u2.y, L2 = b2 + u2.width, V = A2 + u2.height, T2 = l2.index;
      l2.add(P$1.x, P$1.y, g2.x, g2.y, b2, A2, p2, _2, M, t3, d, o2), l2.add(P$1.x, P$1.y, f2.x, f2.y, L2, A2, p2, _2, M, t3, d, o2), l2.add(P$1.x, P$1.y, y2.x, y2.y, b2, V, p2, _2, M, t3, d, o2), l2.add(P$1.x, P$1.y, m2.x, m2.y, L2, V, p2, _2, M, t3, d, o2), e2.iconVertexRanges.length > 0 && e2.iconVertexRanges[0][0] + e2.iconVertexRanges[0][1] === T2 ? e2.iconVertexRanges[0][1] += 4 : e2.iconVertexRanges.push([T2, 4]), h2.add(I2 + 0, I2 + 1, I2 + 2), h2.add(I2 + 1, I2 + 2, I2 + 3), x2.has(i2) ? x2.get(i2)[1] += 6 : x2.set(i2, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
    }
  }
  _addPlacedGlyphs() {
    const e2 = this._textVertexBuffer, t2 = this._textIndexBuffer, n2 = this._glyphMap;
    for (const [i2, s2] of this._glyphBufferDataStorage)
      for (const a2 of s2) {
        const s3 = e2.index, o2 = a2.symbolInstance, r2 = a2.ddAttributes, l2 = e2.index;
        e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.tl[0], a2.tl[1], a2.xmin, a2.ymin, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.tr[0], a2.tr[1], a2.xmax, a2.ymin, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.bl[0], a2.bl[1], a2.xmin, a2.ymax, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.br[0], a2.br[1], a2.xmax, a2.ymax, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), o2.textVertexRanges.length > 0 && o2.textVertexRanges[0][0] + o2.textVertexRanges[0][1] === l2 ? o2.textVertexRanges[0][1] += 4 : o2.textVertexRanges.push([l2, 4]), t2.add(s3 + 0, s3 + 1, s3 + 2), t2.add(s3 + 1, s3 + 2, s3 + 3), n2.has(i2) ? n2.get(i2)[1] += 6 : n2.set(i2, [this._textIndexStart + this._textIndexCount, 6]), this._textIndexCount += 6;
      }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(e2, t2, n2, i2, a2) {
    const o2 = Math.max(n2 - 1, 0), r2 = i2 === l$1.VIEWPORT;
    let l2, h2, x2, c2, d, g2, y2, m2, u2, p2, _2;
    for (const f2 of t2) {
      if (l2 = r2 ? 0 : Math.max(n2 + P(f2.minzoom), o2), h2 = r2 ? 25 : Math.min(n2 + P(f2.maxzoom), 25), h2 <= l2)
        continue;
      x2 = f2.tl, c2 = f2.tr, d = f2.bl, g2 = f2.br, y2 = f2.labelAngle, m2 = f2.minAngle, u2 = f2.maxAngle, p2 = f2.anchor, _2 = f2.mosaicRect, this._glyphBufferDataStorage.has(f2.page) || this._glyphBufferDataStorage.set(f2.page, []);
      this._glyphBufferDataStorage.get(f2.page).push({ glyphAnchor: [p2.x, p2.y], tl: [x2.x, x2.y], tr: [c2.x, c2.y], bl: [d.x, d.y], br: [g2.x, g2.y], xmin: _2.x, ymin: _2.y, xmax: _2.x + _2.width, ymax: _2.y + _2.height, labelAngle: y2, minAngle: m2, maxAngle: u2, minLod: l2, maxLod: h2, placementLod: o2, symbolInstance: e2, ddAttributes: a2 });
    }
  }
  static _pushAnchors(e2, t2, n2, i2) {
    n2 += i2;
    let s2 = 0;
    const o2 = t2.length - 1;
    for (let a2 = 0; a2 < o2; a2++)
      s2 += t$3.distance(t2[a2], t2[a2 + 1]);
    let l2 = i2 || n2;
    if (l2 *= 0.5, s2 <= l2)
      return;
    const h2 = l2 / s2;
    let x2 = 0, c2 = -(n2 = s2 / Math.max(Math.round(s2 / n2), 1)) / 2;
    const d = t2.length - 1;
    for (let g2 = 0; g2 < d; g2++) {
      const i3 = t2[g2], s3 = t2[g2 + 1], o3 = s3.x - i3.x, l3 = s3.y - i3.y, d2 = Math.sqrt(o3 * o3 + l3 * l3);
      let f2;
      for (; c2 + n2 < x2 + d2; ) {
        c2 += n2;
        const t3 = (c2 - x2) / d2, y2 = b$2(i3.x, s3.x, t3), m2 = b$2(i3.y, s3.y, t3);
        f2 === void 0 && (f2 = Math.atan2(l3, o3)), e2.push(new T$1(y2, m2, f2, g2, h2));
      }
      x2 += d2;
    }
  }
  static _pushCenterAnchor(e2, t2) {
    let n2 = 0;
    const i2 = t2.length - 1;
    for (let a2 = 0; a2 < i2; a2++)
      n2 += t$3.distance(t2[a2], t2[a2 + 1]);
    const s2 = n2 / 2;
    let o2 = 0;
    const l2 = t2.length - 1;
    for (let h2 = 0; h2 < l2; h2++) {
      const n3 = t2[h2], i3 = t2[h2 + 1], l3 = i3.x - n3.x, x2 = i3.y - n3.y, c2 = Math.sqrt(l3 * l3 + x2 * x2);
      if (s2 < o2 + c2) {
        const t3 = (s2 - o2) / c2, d = b$2(n3.x, i3.x, t3), g2 = b$2(n3.y, i3.y, t3), f2 = Math.atan2(x2, l3);
        return void e2.push(new T$1(d, g2, f2, h2, 0));
      }
      o2 += c2;
    }
  }
  static _deviation(e2, t2, n2) {
    const i2 = (t2.x - e2.x) * (n2.x - t2.x) + (t2.y - e2.y) * (n2.y - t2.y), s2 = (t2.x - e2.x) * (n2.y - t2.y) - (t2.y - e2.y) * (n2.x - t2.x);
    return Math.atan2(s2, i2);
  }
  static _honorsTextMaxAngle(e2, t2, n2, i2, s2) {
    let a2 = 0;
    const o2 = n2 / 2;
    let r2 = new t$3(t2.x, t2.y), l2 = t2.segment + 1;
    for (; a2 > -o2; ) {
      if (--l2, l2 < 0)
        return false;
      a2 -= t$3.distance(e2[l2], r2), r2 = e2[l2];
    }
    a2 += t$3.distance(e2[l2], e2[l2 + 1]);
    const h2 = [];
    let x2 = 0;
    const c2 = e2.length;
    for (; a2 < o2; ) {
      const t3 = e2[l2];
      let n3, o3 = l2;
      do {
        if (++o3, o3 === c2)
          return false;
        n3 = e2[o3];
      } while (n3.isEqual(t3));
      let r3, d = o3;
      do {
        if (++d, d === c2)
          return false;
        r3 = e2[d];
      } while (r3.isEqual(n3));
      const g2 = this._deviation(t3, n3, r3);
      for (h2.push({ deviation: g2, distToAnchor: a2 }), x2 += g2; a2 - h2[0].distToAnchor > s2; )
        x2 -= h2.shift().deviation;
      if (Math.abs(x2) > i2)
        return false;
      a2 += t$3.distance(n3, r3), l2 = o3;
    }
    return true;
  }
  static _smoothVertices(e2, t2) {
    if (t2 <= 0)
      return e2;
    let n2 = e2.length;
    if (n2 < 3)
      return e2;
    const i2 = [];
    let s2 = 0, a2 = 0;
    i2.push(0);
    for (let f2 = 1; f2 < n2; f2++) {
      const t3 = t$3.distance(e2[f2], e2[f2 - 1]);
      t3 > 0 && (s2 += t3, i2.push(s2), a2++, a2 !== f2 && (e2[a2] = e2[f2]));
    }
    if (n2 = a2 + 1, n2 < 3)
      return e2;
    t2 = Math.min(t2, 0.2 * s2);
    const o2 = e2[0].x, r2 = e2[0].y, l2 = e2[n2 - 1].x, h2 = e2[n2 - 1].y, x2 = t$3.sub(e2[0], e2[1]);
    x2.normalize(), e2[0].x += t2 * x2.x, e2[0].y += t2 * x2.y, x2.assignSub(e2[n2 - 1], e2[n2 - 2]), x2.normalize(), e2[n2 - 1].x += t2 * x2.x, e2[n2 - 1].y += t2 * x2.y, i2[0] -= t2, i2[n2 - 1] += t2;
    const c2 = [];
    c2.push(new t$3(o2, r2));
    const d = 1e-6, g2 = 0.5 * t2;
    for (let f2 = 1; f2 < n2 - 1; f2++) {
      let s3 = 0, a3 = 0, o3 = 0;
      for (let n3 = f2 - 1; n3 >= 0; n3--) {
        const r3 = g2 + i2[n3 + 1] - i2[f2];
        if (r3 < 0)
          break;
        const l3 = i2[n3 + 1] - i2[n3], h3 = i2[f2] - i2[n3] < g2 ? 1 : r3 / l3;
        if (h3 < d)
          break;
        const x3 = h3 * h3, c3 = h3 * r3 - 0.5 * x3 * l3, y2 = h3 * l3 / t2, m2 = e2[n3 + 1], u2 = e2[n3].x - m2.x, p2 = e2[n3].y - m2.y;
        s3 += y2 / c3 * (m2.x * h3 * r3 + 0.5 * x3 * (r3 * u2 - l3 * m2.x) - x3 * h3 * l3 * u2 / 3), a3 += y2 / c3 * (m2.y * h3 * r3 + 0.5 * x3 * (r3 * p2 - l3 * m2.y) - x3 * h3 * l3 * p2 / 3), o3 += y2;
      }
      for (let r3 = f2 + 1; r3 < n2; r3++) {
        const n3 = g2 - i2[r3 - 1] + i2[f2];
        if (n3 < 0)
          break;
        const l3 = i2[r3] - i2[r3 - 1], h3 = i2[r3] - i2[f2] < g2 ? 1 : n3 / l3;
        if (h3 < d)
          break;
        const x3 = h3 * h3, c3 = h3 * n3 - 0.5 * x3 * l3, y2 = h3 * l3 / t2, m2 = e2[r3 - 1], u2 = e2[r3].x - m2.x, p2 = e2[r3].y - m2.y;
        s3 += y2 / c3 * (m2.x * h3 * n3 + 0.5 * x3 * (n3 * u2 - l3 * m2.x) - x3 * h3 * l3 * u2 / 3), a3 += y2 / c3 * (m2.y * h3 * n3 + 0.5 * x3 * (n3 * p2 - l3 * m2.y) - x3 * h3 * l3 * p2 / 3), o3 += y2;
      }
      c2.push(new t$3(s3 / o3, a3 / o3));
    }
    return c2.push(new t$3(l2, h2)), e2[0].x = o2, e2[0].y = r2, e2[n2 - 1].x = l2, e2[n2 - 1].y = h2, c2;
  }
  static _pushCentroid(e2, t2) {
    const n2 = 0, i2 = 0, s2 = 4096, a2 = 4096, o2 = t2.length - 1;
    let l2 = 0, h2 = 0, x2 = 0, c2 = t2[0].x, d = t2[0].y;
    c2 > s2 && (c2 = s2), c2 < n2 && (c2 = n2), d > a2 && (d = a2), d < i2 && (d = i2);
    for (let r2 = 1; r2 < o2; r2++) {
      let e3 = t2[r2].x, o3 = t2[r2].y, g2 = t2[r2 + 1].x, f2 = t2[r2 + 1].y;
      e3 > s2 && (e3 = s2), e3 < n2 && (e3 = n2), o3 > a2 && (o3 = a2), o3 < i2 && (o3 = i2), g2 > s2 && (g2 = s2), g2 < n2 && (g2 = n2), f2 > a2 && (f2 = a2), f2 < i2 && (f2 = i2);
      const y2 = (e3 - c2) * (f2 - d) - (g2 - c2) * (o3 - d);
      l2 += y2 * (c2 + e3 + g2), h2 += y2 * (d + o3 + f2), x2 += y2;
    }
    l2 /= 3 * x2, h2 /= 3 * x2, isNaN(l2) || isNaN(h2) || e2.push(new T$1(l2, h2));
  }
}
A._bidiEngine = new C();
var I;
!function(I2) {
  I2[I2.INITIALIZED = 0] = "INITIALIZED", I2[I2.NO_DATA = 1] = "NO_DATA", I2[I2.READY = 2] = "READY", I2[I2.MODIFIED = 3] = "MODIFIED", I2[I2.INVALID = 4] = "INVALID";
}(I || (I = {}));
const T = 8, g = 14, w = 5;
class B {
  constructor(t2, r2, s2, i2, o2) {
    if (this._pbfTiles = {}, this._tileClippers = {}, this._client = s2, this._tile = r2, o2) {
      this._styleLayerUIDs = new Set();
      for (const e2 of o2)
        this._styleLayerUIDs.add(e2);
    }
    this._styleRepository = i2, this._layers = this._styleRepository.layers;
    const [n2, c2, l2] = r2.tileKey.split("/").map(parseFloat);
    this._level = n2;
    const a2 = T + Math.max((this._level - g) * w, 0);
    for (const u2 of Object.keys(t2)) {
      const r3 = t2[u2];
      this._pbfTiles[u2] = new n$3(new Uint8Array(r3.protobuff), new DataView(r3.protobuff));
      if (r3.refKey) {
        const [e2] = r3.refKey.split("/").map(parseFloat), t3 = n2 - e2;
        if (t3 > 0) {
          const e3 = (1 << t3) - 1, r4 = c2 & e3, s3 = l2 & e3;
          this._tileClippers[u2] = new n$4(t3, r4, s3, 8, a2);
        }
      }
      this._tileClippers[u2] || (this._tileClippers[u2] = new _());
    }
  }
  _canParseStyleLayer(e2) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(e2);
  }
  async parse(e2) {
    const t2 = i(), s2 = this._initialize(e2), { returnedBuckets: i$1 } = s2;
    this._processLayers(s2), this._linkReferences(s2), this._filterFeatures(s2);
    const o2 = [], n2 = new Set(), c2 = (e3, t3) => {
      n2.has(e3) || (o2.push({ name: e3, repeat: t3 }), n2.add(e3));
    }, l2 = {};
    for (const r2 of i$1)
      r2.getResources(r2.tileClipper, c2, l2);
    if (this._tile.status === I.INVALID)
      return [];
    const a2 = this._fetchResources(o2, l2, e2);
    return Promise.all([...a2, t2]).then(() => this._processFeatures(s2.returnedBuckets));
  }
  _initialize(e2) {
    return { signal: e2 && e2.signal, sourceNameToTileData: this._parseTileData(this._pbfTiles), layers: this._layers, zoom: this._level, sourceNameToTileClipper: this._tileClippers, sourceNameToUniqueSourceLayerBuckets: {}, sourceNameToUniqueSourceLayers: {}, returnedBuckets: [], layerIdToBucket: {}, referencerUIDToReferencedId: new Map() };
  }
  _processLayers(e2) {
    const { sourceNameToTileData: t2, layers: r2, zoom: s2, sourceNameToTileClipper: i2, sourceNameToUniqueSourceLayerBuckets: o2, sourceNameToUniqueSourceLayers: n2, returnedBuckets: c2, layerIdToBucket: l2, referencerUIDToReferencedId: a2 } = e2;
    for (let u2 = r2.length - 1; u2 >= 0; u2--) {
      const e3 = r2[u2];
      if (!this._canParseStyleLayer(e3.uid) || e3.minzoom && s2 < Math.floor(e3.minzoom) || e3.maxzoom && s2 >= e3.maxzoom || e3.type === a$5.BACKGROUND)
        continue;
      if (!t2[e3.source] || !i2[e3.source])
        continue;
      const f2 = t2[e3.source], p2 = i2[e3.source], h2 = e3.sourceLayer, m2 = f2[h2];
      if (m2) {
        let t3 = n2[e3.source];
        if (t3 || (t3 = n2[e3.source] = new Set()), t3.add(e3.sourceLayer), e3.refLayerId)
          a2.set(e3.uid, e3.refLayerId);
        else {
          const t4 = this._createBucket(e3);
          if (t4) {
            t4.layerUIDs = [e3.uid], t4.layerExtent = m2.extent, t4.tileClipper = p2;
            let r3 = o2[e3.source];
            r3 || (r3 = o2[e3.source] = {});
            let s3 = r3[h2];
            s3 || (s3 = r3[h2] = []), s3.push(t4), c2.push(t4), l2[e3.id] = t4;
          }
        }
      }
    }
  }
  _linkReferences(e2) {
    const { layerIdToBucket: t2, referencerUIDToReferencedId: r2 } = e2;
    r2.forEach((e3, r3) => {
      t2[e3] && t2[e3].layerUIDs.push(r3);
    });
  }
  _filterFeatures(e2) {
    const { signal: r2, sourceNameToTileData: i2, sourceNameToUniqueSourceLayerBuckets: o2, sourceNameToUniqueSourceLayers: n2 } = e2, c2 = 10 * this._level, l2 = 10 * (this._level + 1), a2 = [], u2 = [];
    for (const t2 of Object.keys(n2)) {
      n2[t2].forEach((e3) => {
        a2.push(e3), u2.push(t2);
      });
    }
    for (let f2 = 0; f2 < a2.length; f2++) {
      const e3 = u2[f2], n3 = a2[f2];
      if (!i2[e3] || !o2[e3])
        continue;
      const p2 = i2[e3][n3], h2 = o2[e3][n3];
      if (!h2 || h2.length === 0)
        continue;
      if (p$2(r2))
        return;
      const m2 = p2.getData();
      for (; m2.nextTag(2); ) {
        const e4 = m2.getMessage(), t2 = new s$2(e4, p2);
        e4.release();
        const r3 = t2.values;
        if (r3) {
          const e5 = r3._minzoom;
          if (e5 && e5 >= l2)
            continue;
          const t3 = r3._maxzoom;
          if (t3 && t3 <= c2)
            continue;
        }
        for (const s2 of h2)
          s2.pushFeature(t2);
      }
    }
  }
  _fetchResources(e2, t2, r2) {
    const s2 = [], i2 = this._tile.getWorkerTileHandler();
    let o2, n2;
    e2.length > 0 && (o2 = i2.fetchSprites(e2, this._client, r2), s2.push(o2));
    for (const c2 in t2) {
      const e3 = t2[c2];
      e3.size > 0 && (n2 = i2.fetchGlyphs(this._tile.tileKey, c2, e3, this._client, r2), s2.push(n2));
    }
    return s2;
  }
  _processFeatures(e2) {
    const t2 = e2.filter((e3) => e3.hasFeatures() || this._canParseStyleLayer(e3.layer.uid));
    for (const r2 of t2)
      r2.processFeatures(r2.tileClipper);
    return t2;
  }
  _parseTileData(e$12) {
    const t2 = {};
    for (const r2 of Object.keys(e$12)) {
      const s2 = e$12[r2], i2 = {};
      for (; s2.next(); )
        switch (s2.tag()) {
          case 3: {
            const e$13 = s2.getMessage(), t3 = new e(e$13);
            e$13.release(), i2[t3.name] = t3;
            break;
          }
          default:
            s2.skip();
        }
      t2[r2] = i2;
    }
    return t2;
  }
  _createBucket(e2) {
    switch (e2.type) {
      case a$5.BACKGROUND:
        return null;
      case a$5.FILL:
        return this._createFillBucket(e2);
      case a$5.LINE:
        return this._createLineBucket(e2);
      case a$5.CIRCLE:
        return this._createCircleBucket(e2);
      case a$5.SYMBOL:
        return this._createSymbolBucket(e2);
    }
  }
  _createFillBucket(e2) {
    return new s$1(e2, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new r$2(e2.fillMaterial.getStride()), new r$3(), new u(e2.outlineMaterial.getStride()), new r$3());
  }
  _createLineBucket(e2) {
    return new n(e2, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new o$1(e2.lineMaterial.getStride()), new r$3());
  }
  _createCircleBucket(e2) {
    return new r$1(e2, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new a$1(e2.circleMaterial.getStride()), new r$3());
  }
  _createSymbolBucket(e2) {
    const t2 = this._tile;
    return new A(e2, this._level, new h(e2.iconMaterial.getStride()), new r$3(), new h(e2.textMaterial.getStride()), new r$3(), t2.placementEngine, t2.getWorkerTileHandler());
  }
}
class a {
  constructor(t2, e2, r2, a2) {
    this.status = I.INITIALIZED, this.placementEngine = new u$1(), this.tileKey = t2, this.refKeys = e2, this._workerTileHandler = r2, this._styleRepository = a2;
  }
  release() {
    this.tileKey = "", this.refKeys = null, this.status = I.INITIALIZED, this._workerTileHandler = null;
  }
  async parse(s2, r2) {
    const a2 = r2 && r2.signal;
    if (r$6(a2)) {
      const t2 = () => {
        a2.removeEventListener("abort", t2), this.status = I.INVALID;
      };
      a2.addEventListener("abort", t2);
    }
    let n2;
    const l2 = { bucketsWithData: [], emptyBuckets: null };
    try {
      n2 = await this._parse(s2, r2);
    } catch (y2) {
      if (j(y2))
        throw y2;
      return { result: l2, transferList: [] };
    }
    this.status = I.READY;
    const o2 = l2.bucketsWithData, u2 = [];
    for (const t2 of n2)
      if (t2.hasFeatures()) {
        const e2 = t2.serialize();
        o2.push(e2);
      } else
        u2.push(t2.layer.uid);
    const h2 = [...o2];
    let c2 = null;
    return u2.length > 0 && (c2 = Uint32Array.from(u2), h2.push(c2.buffer)), l2.emptyBuckets = c2, { result: l2, transferList: h2 };
  }
  setObsolete() {
    this.status = I.INVALID;
  }
  getLayers() {
    return this._workerTileHandler.getLayers();
  }
  getWorkerTileHandler() {
    return this._workerTileHandler;
  }
  async _parse(t2, e2) {
    const s2 = t2.sourceName2DataAndRefKey;
    if (Object.keys(s2).length === 0)
      return [];
    this.status = I.MODIFIED;
    return new B(s2, this, e2.client, this._styleRepository, t2.styleLayerUIDs).parse(e2);
  }
}
class o {
  constructor() {
    this._spriteInfo = {}, this._glyphInfo = {};
  }
  reset() {
    return this._spriteInfo = {}, this._glyphInfo = {}, Promise.resolve();
  }
  getLayers() {
    var _a;
    return (_a = this._styleRepository) == null ? void 0 : _a.layers;
  }
  async createTileAndParse(t2, r2) {
    const { key: o2 } = t2, i2 = {};
    for (const e2 of Object.keys(t2.sourceName2DataAndRefKey)) {
      const s2 = t2.sourceName2DataAndRefKey[e2];
      i2[e2] = s2.refKey;
    }
    const n2 = new a(o2, i2, this, this._styleRepository);
    try {
      return await n2.parse(t2, r2);
    } catch (l2) {
      if (n2.setObsolete(), n2.release(), !j(l2))
        throw l2;
      return null;
    }
  }
  updateStyle(e2) {
    if (!e2 || e2.length === 0 || !this._styleRepository)
      return;
    const s2 = this._styleRepository;
    for (const r2 of e2) {
      const e3 = r2.type, o2 = r2.data;
      switch (e3) {
        case L.PAINTER_CHANGED:
          s2.setPaintProperties(o2.layer, o2.paint);
          break;
        case L.LAYOUT_CHANGED:
          s2.setLayoutProperties(o2.layer, o2.layout);
          break;
        case L.LAYER_REMOVED:
          s2.deleteStyleLayer(o2.layer);
          break;
        case L.LAYER_CHANGED:
          s2.setStyleLayer(o2.layer, o2.index);
          break;
        case L.SPRITES_CHANGED:
          this._spriteInfo = {};
      }
    }
  }
  setStyle(e2) {
    this._styleRepository = new l$2(e2), this._spriteInfo = {}, this._glyphInfo = {};
  }
  fetchSprites(e2, t2, s2) {
    const r2 = [], o2 = this._spriteInfo;
    for (const i2 of e2) {
      o2[i2.name] === void 0 && r2.push(i2);
    }
    return r2.length === 0 ? Promise.resolve() : t2.invoke("getSprites", r2, { signal: s2 && s2.signal }).then((e3) => {
      for (const t3 in e3) {
        const s3 = e3[t3];
        o2[t3] = s3;
      }
    });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(e2, t2, s2, r2, o2) {
    const i2 = [];
    let n2 = this._glyphInfo[t2];
    return n2 ? s2.forEach((e3) => {
      n2[e3] || i2.push(e3);
    }) : (n2 = this._glyphInfo[t2] = [], s2.forEach((e3) => i2.push(e3))), i2.length === 0 ? Promise.resolve() : r2.invoke("getGlyphs", { tileID: e2, font: t2, codePoints: i2 }, o2).then((e3) => {
      for (let t3 = 0; t3 < e3.length; t3++)
        e3[t3] && (n2[t3] = e3[t3]);
    });
  }
  getGlyphItems(e2) {
    return this._glyphInfo[e2];
  }
}
export { o as default };
