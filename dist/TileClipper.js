import { h as has, cj as a$1 } from "./index.js";
import { a3 as X, a as e$2, n as n$3, Q as o$2 } from "./enums2.js";
import { t, s as s$2 } from "./Geometry.js";
import { g } from "./GeometryUtils2.js";
const s$1 = 128e3;
let n$2 = null, e$1 = null;
async function i() {
  return n$2 || (n$2 = o$1()), n$2;
}
async function o$1() {
  const s2 = has("esri-csp-restrictions") ? await import("./libtess-asm.js").then((t2) => t2.l) : await import("./libtess.js").then((t2) => t2.l);
  e$1 = await s2.load({ locateFile: (s3) => a$1(`esri/core/libs/libtess/${s3}`) });
}
function r$1(t2, n2) {
  const i2 = Math.max(t2.length, s$1);
  return e$1.triangulate(t2, n2, i2);
}
function x$1(t2, e2) {
  return t2.x === e2.x && t2.y === e2.y;
}
function r(t2) {
  if (!t2)
    return;
  const e2 = t2.length;
  if (e2 <= 1)
    return;
  let i2 = 0;
  for (let r2 = 1; r2 < e2; r2++)
    x$1(t2[r2], t2[i2]) || ++i2 === r2 || (t2[i2] = t2[r2]);
  t2.length = i2 + 1;
}
function n$1(t2, e2) {
  return t2.x = e2.y, t2.y = -e2.x, t2;
}
function s(t2, e2) {
  return t2.x = -e2.y, t2.y = e2.x, t2;
}
function y(t2, e2) {
  return t2.x = e2.x, t2.y = e2.y, t2;
}
function o(t2, e2) {
  return t2.x = -e2.x, t2.y = -e2.y, t2;
}
function h(t2) {
  return Math.sqrt(t2.x * t2.x + t2.y * t2.y);
}
function l$1(t2, e2) {
  return t2.x * e2.y - t2.y * e2.x;
}
function _$1(t2, e2) {
  return t2.x * e2.x + t2.y * e2.y;
}
function a(t2, e2, i2, x2) {
  return t2.x = e2.x * i2 + e2.y * x2, t2.y = e2.x * x2 - e2.y * i2, t2;
}
class c {
  constructor(t2, e2, i2) {
    this._writeVertex = t2, this._writeTriangle = e2, this._canUseThinTessellation = i2, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(t2, e2) {
    r(t2), this._canUseThinTessellation && e2.halfWidth < X && !e2.offset ? this._tessellateThin(t2, e2) : this._tessellate(t2, e2);
  }
  _tessellateThin(t2, e2) {
    if (t2.length < 2)
      return;
    const i2 = e2.wrapDistance || 65535;
    let x2 = e2.initialDistance || 0, r2 = false, n2 = t2[0].x, s2 = t2[0].y;
    const y2 = t2.length;
    for (let o2 = 1; o2 < y2; ++o2) {
      r2 && (r2 = false, x2 = 0);
      let e3 = t2[o2].x, y3 = t2[o2].y, h2 = e3 - n2, l2 = y3 - s2, _2 = Math.sqrt(h2 * h2 + l2 * l2);
      if (h2 /= _2, l2 /= _2, x2 + _2 > i2) {
        r2 = true;
        const t3 = (i2 - x2) / _2;
        _2 = i2 - x2, e3 = (1 - t3) * n2 + t3 * e3, y3 = (1 - t3) * s2 + t3 * y3, --o2;
      }
      const a2 = this._writeVertex(n2, s2, 0, 0, h2, l2, l2, -h2, 0, -1, x2), c2 = this._writeVertex(n2, s2, 0, 0, h2, l2, -l2, h2, 0, 1, x2);
      x2 += _2;
      const d = this._writeVertex(e3, y3, 0, 0, h2, l2, l2, -h2, 0, -1, x2), u = this._writeVertex(e3, y3, 0, 0, h2, l2, -l2, h2, 0, 1, x2);
      this._writeTriangle(a2, c2, d), this._writeTriangle(c2, d, u), n2 = e3, s2 = y3;
    }
  }
  _tessellate(i2, r2) {
    const c2 = i2[0], d = i2[i2.length - 1], u = x$1(c2, d), v = u ? 3 : 2;
    if (i2.length < v)
      return;
    const f = r2.pixelCoordRatio, w = r2.capType != null ? r2.capType : e$2.BUTT, T = r2.joinType != null ? r2.joinType : n$3.MITER, g2 = r2.miterLimit != null ? Math.min(r2.miterLimit, 4) : 2, m = r2.roundLimit != null ? Math.min(r2.roundLimit, 1.05) : 1.05, V = r2.halfWidth != null ? r2.halfWidth : 2, N = !!r2.textured;
    let E, b, R, U = null;
    const k = this._prevNormal, p = this._nextNormal;
    let M = -1, B = -1;
    const L = this._joinNormal;
    let D, S;
    const j = this._textureNormalLeft, A = this._textureNormalRight, O = this._textureNormal;
    let I = -1, P = -1;
    const W = r2.wrapDistance || 65535;
    let q = r2.initialDistance || 0;
    const Q = this._writeVertex, X2 = this._writeTriangle, C = (t2, e2, i3, x2, r3, n2) => {
      const s2 = Q(b, R, D, S, i3, x2, t2, e2, r3, n2, q);
      return I >= 0 && P >= 0 && s2 >= 0 && X2(I, P, s2), I = P, P = s2, s2;
    };
    u && (E = i2[i2.length - 2], p.x = d.x - E.x, p.y = d.y - E.y, B = h(p), p.x /= B, p.y /= B);
    let z = false;
    for (let x2 = 0; x2 < i2.length; ++x2) {
      if (z && (z = false, q = 0), E && (k.x = -p.x, k.y = -p.y, M = B, q + M > W && (z = true)), z) {
        const t2 = (W - q) / M;
        M = W - q, E = { x: (1 - t2) * E.x + t2 * i2[x2].x, y: (1 - t2) * E.y + t2 * i2[x2].y }, --x2;
      } else
        E = i2[x2];
      b = E.x, R = E.y;
      const r3 = x2 <= 0 && !z, c3 = x2 === i2.length - 1;
      if (r3 || (q += M), U = c3 ? u ? i2[1] : null : i2[x2 + 1], U ? (p.x = U.x - b, p.y = U.y - R, B = h(p), p.x /= B, p.y /= B) : (p.x = void 0, p.y = void 0), !u) {
        if (r3) {
          s(L, p), D = L.x, S = L.y, w === e$2.SQUARE && (C(-p.y - p.x, p.x - p.y, p.x, p.y, 0, -1), C(p.y - p.x, -p.x - p.y, p.x, p.y, 0, 1)), w === e$2.ROUND && (C(-p.y - p.x, p.x - p.y, p.x, p.y, -1, -1), C(p.y - p.x, -p.x - p.y, p.x, p.y, -1, 1)), w !== e$2.ROUND && w !== e$2.BUTT || (C(-p.y, p.x, p.x, p.y, 0, -1), C(p.y, -p.x, p.x, p.y, 0, 1));
          continue;
        }
        if (c3) {
          n$1(L, k), D = L.x, S = L.y, w !== e$2.ROUND && w !== e$2.BUTT || (C(k.y, -k.x, -k.x, -k.y, 0, -1), C(-k.y, k.x, -k.x, -k.y, 0, 1)), w === e$2.SQUARE && (C(k.y - k.x, -k.x - k.y, -k.x, -k.y, 0, -1), C(-k.y - k.x, k.x - k.y, -k.x, -k.y, 0, 1)), w === e$2.ROUND && (C(k.y - k.x, -k.x - k.y, -k.x, -k.y, 1, -1), C(-k.y - k.x, k.x - k.y, -k.x, -k.y, 1, 1));
          continue;
        }
      }
      let d2, v2, Q2 = -l$1(k, p);
      if (Math.abs(Q2) < 0.01)
        _$1(k, p) > 0 ? (L.x = k.x, L.y = k.y, Q2 = 1, d2 = Number.MAX_VALUE, v2 = true) : (s(L, p), Q2 = 1, d2 = 1, v2 = false);
      else {
        L.x = (k.x + p.x) / Q2, L.y = (k.y + p.y) / Q2, d2 = h(L);
        const t2 = (d2 - 1) * V * f;
        v2 = d2 > 4 || t2 > M && t2 > B;
      }
      D = L.x, S = L.y;
      let X3 = T;
      switch (T) {
        case n$3.BEVEL:
          d2 < 1.05 && (X3 = n$3.MITER);
          break;
        case n$3.ROUND:
          d2 < m && (X3 = n$3.MITER);
          break;
        case n$3.MITER:
          d2 > g2 && (X3 = n$3.BEVEL);
      }
      switch (X3) {
        case n$3.MITER:
          if (C(L.x, L.y, -k.x, -k.y, 0, -1), C(-L.x, -L.y, -k.x, -k.y, 0, 1), c3)
            break;
          if (N) {
            const t2 = z ? 0 : q;
            I = this._writeVertex(b, R, D, S, p.x, p.y, L.x, L.y, 0, -1, t2), P = this._writeVertex(b, R, D, S, p.x, p.y, -L.x, -L.y, 0, 1, t2);
          }
          break;
        case n$3.BEVEL: {
          const t2 = Q2 < 0;
          let e2, i3, x3, r4;
          if (t2) {
            const t3 = I;
            I = P, P = t3, e2 = j, i3 = A;
          } else
            e2 = A, i3 = j;
          if (v2)
            x3 = t2 ? s(this._innerPrev, k) : n$1(this._innerPrev, k), r4 = t2 ? n$1(this._innerNext, p) : s(this._innerNext, p);
          else {
            const e3 = t2 ? o(this._inner, L) : y(this._inner, L);
            x3 = e3, r4 = e3;
          }
          const h2 = t2 ? n$1(this._bevelStart, k) : s(this._bevelStart, k);
          C(x3.x, x3.y, -k.x, -k.y, e2.x, e2.y);
          const l2 = C(h2.x, h2.y, -k.x, -k.y, i3.x, i3.y);
          if (c3)
            break;
          const _2 = t2 ? s(this._bevelEnd, p) : n$1(this._bevelEnd, p);
          if (v2) {
            const t3 = this._writeVertex(b, R, D, S, -k.x, -k.y, 0, 0, 0, 0, q);
            I = this._writeVertex(b, R, D, S, p.x, p.y, r4.x, r4.y, e2.x, e2.y, q), P = this._writeVertex(b, R, D, S, p.x, p.y, _2.x, _2.y, i3.x, i3.y, q), this._writeTriangle(l2, t3, P);
          } else {
            if (N) {
              const t3 = this._bevelMiddle;
              t3.x = (h2.x + _2.x) / 2, t3.y = (h2.y + _2.y) / 2, a(O, t3, -k.x, -k.y), C(t3.x, t3.y, -k.x, -k.y, O.x, O.y), a(O, t3, p.x, p.y), I = this._writeVertex(b, R, D, S, p.x, p.y, t3.x, t3.y, O.x, O.y, q), P = this._writeVertex(b, R, D, S, p.x, p.y, r4.x, r4.y, e2.x, e2.y, q);
            } else {
              const t3 = I;
              I = P, P = t3;
            }
            C(_2.x, _2.y, p.x, p.y, i3.x, i3.y);
          }
          if (t2) {
            const t3 = I;
            I = P, P = t3;
          }
          break;
        }
        case n$3.ROUND: {
          const t2 = Q2 < 0;
          let e2, i3;
          if (t2) {
            const t3 = I;
            I = P, P = t3, e2 = j, i3 = A;
          } else
            e2 = A, i3 = j;
          const x3 = t2 ? o(this._inner, L) : y(this._inner, L);
          let r4, h2;
          v2 ? (r4 = t2 ? s(this._innerPrev, k) : n$1(this._innerPrev, k), h2 = t2 ? n$1(this._innerNext, p) : s(this._innerNext, p)) : (r4 = x3, h2 = x3);
          const l2 = t2 ? n$1(this._roundStart, k) : s(this._roundStart, k), u2 = t2 ? s(this._roundEnd, p) : n$1(this._roundEnd, p), f2 = C(r4.x, r4.y, -k.x, -k.y, e2.x, e2.y), w2 = C(l2.x, l2.y, -k.x, -k.y, i3.x, i3.y);
          if (c3)
            break;
          const T2 = this._writeVertex(b, R, D, S, -k.x, -k.y, 0, 0, 0, 0, q);
          v2 || this._writeTriangle(I, P, T2);
          const g3 = o(this._outer, x3), m2 = this._writeVertex(b, R, D, S, p.x, p.y, u2.x, u2.y, i3.x, i3.y, q);
          let V2, E2;
          const U2 = d2 > 2;
          if (U2) {
            let e3;
            d2 !== Number.MAX_VALUE ? (g3.x /= d2, g3.y /= d2, e3 = _$1(k, g3), e3 = (d2 * (e3 * e3 - 1) + 1) / e3) : e3 = -1, V2 = t2 ? n$1(this._startBreak, k) : s(this._startBreak, k), V2.x += k.x * e3, V2.y += k.y * e3, E2 = t2 ? s(this._endBreak, p) : n$1(this._endBreak, p), E2.x += p.x * e3, E2.y += p.y * e3;
          }
          a(O, g3, -k.x, -k.y);
          const M2 = this._writeVertex(b, R, D, S, -k.x, -k.y, g3.x, g3.y, O.x, O.y, q);
          a(O, g3, p.x, p.y);
          const B2 = N ? this._writeVertex(b, R, D, S, p.x, p.y, g3.x, g3.y, O.x, O.y, q) : M2, W2 = T2, X4 = N ? this._writeVertex(b, R, D, S, p.x, p.y, 0, 0, 0, 0, q) : T2;
          let z2 = -1, F = -1;
          if (U2 && (a(O, V2, -k.x, -k.y), z2 = this._writeVertex(b, R, D, S, -k.x, -k.y, V2.x, V2.y, O.x, O.y, q), a(O, E2, p.x, p.y), F = this._writeVertex(b, R, D, S, p.x, p.y, E2.x, E2.y, O.x, O.y, q)), N ? U2 ? (this._writeTriangle(W2, w2, z2), this._writeTriangle(W2, z2, M2), this._writeTriangle(X4, B2, F), this._writeTriangle(X4, F, m2)) : (this._writeTriangle(W2, w2, M2), this._writeTriangle(X4, B2, m2)) : U2 ? (this._writeTriangle(T2, w2, z2), this._writeTriangle(T2, z2, F), this._writeTriangle(T2, F, m2)) : (this._writeTriangle(T2, w2, M2), this._writeTriangle(T2, B2, m2)), v2 ? (I = this._writeVertex(b, R, D, S, p.x, p.y, h2.x, h2.y, e2.x, e2.y, q), P = m2) : (I = N ? this._writeVertex(b, R, D, S, p.x, p.y, h2.x, h2.y, e2.x, e2.y, q) : f2, this._writeTriangle(I, X4, m2), P = m2), t2) {
            const t3 = I;
            I = P, P = t3;
          }
          break;
        }
      }
    }
  }
}
class e {
  constructor(i2, t2, s2) {
    this.ratio = i2, this.x = t2, this.y = s2;
  }
}
class n {
  constructor(t2, s2, h2, e2 = 8, n2 = 8) {
    this._lines = [], this._starts = [], this.validateTessellation = true, this._pixelRatio = e2, this._pixelMargin = n2, this._tileSize = o$2 * e2, this._dz = t2, this._yPos = s2, this._xPos = h2;
  }
  setPixelMargin(i2) {
    i2 !== this._pixelMargin && (this._pixelMargin = i2, this.setExtent(this._extent));
  }
  setExtent(i2) {
    this._extent = i2, this._finalRatio = this._tileSize / i2 * (1 << this._dz);
    let t2 = this._pixelRatio * this._pixelMargin;
    t2 /= this._finalRatio;
    const s2 = i2 >> this._dz;
    t2 > s2 && (t2 = s2), this._margin = t2, this._xmin = s2 * this._xPos - t2, this._ymin = s2 * this._yPos - t2, this._xmax = this._xmin + s2 + 2 * t2, this._ymax = this._ymin + s2 + 2 * t2;
  }
  reset(i2) {
    this._type = i2, this._lines = [], this._starts = [], this._line = null, this._start = 0;
  }
  moveTo(i2, s2) {
    this._pushLine(), this._prevIsIn = this._isIn(i2, s2), this._moveTo(i2, s2, this._prevIsIn), this._prevPt = new t(i2, s2), this._firstPt = new t(i2, s2), this._dist = 0;
  }
  lineTo(i2, s2) {
    const h2 = this._isIn(i2, s2), n2 = new t(i2, s2), _2 = t.distance(this._prevPt, n2);
    let l2, x2, a2, y2, o2, r2, m, p;
    if (h2)
      this._prevIsIn ? this._lineTo(i2, s2, true) : (l2 = this._prevPt, x2 = n2, a2 = this._intersect(x2, l2), this._start = this._dist + _2 * (1 - this._r), this._lineTo(a2.x, a2.y, true), this._lineTo(x2.x, x2.y, true));
    else if (this._prevIsIn)
      x2 = this._prevPt, l2 = n2, a2 = this._intersect(x2, l2), this._lineTo(a2.x, a2.y, true), this._lineTo(l2.x, l2.y, false);
    else {
      const i3 = this._prevPt, t2 = n2;
      if (i3.x <= this._xmin && t2.x <= this._xmin || i3.x >= this._xmax && t2.x >= this._xmax || i3.y <= this._ymin && t2.y <= this._ymin || i3.y >= this._ymax && t2.y >= this._ymax)
        this._lineTo(t2.x, t2.y, false);
      else {
        const s3 = [];
        if ((i3.x < this._xmin && t2.x > this._xmin || i3.x > this._xmin && t2.x < this._xmin) && (y2 = (this._xmin - i3.x) / (t2.x - i3.x), p = i3.y + y2 * (t2.y - i3.y), p <= this._ymin ? r2 = false : p >= this._ymax ? r2 = true : s3.push(new e(y2, this._xmin, p))), (i3.x < this._xmax && t2.x > this._xmax || i3.x > this._xmax && t2.x < this._xmax) && (y2 = (this._xmax - i3.x) / (t2.x - i3.x), p = i3.y + y2 * (t2.y - i3.y), p <= this._ymin ? r2 = false : p >= this._ymax ? r2 = true : s3.push(new e(y2, this._xmax, p))), (i3.y < this._ymin && t2.y > this._ymin || i3.y > this._ymin && t2.y < this._ymin) && (y2 = (this._ymin - i3.y) / (t2.y - i3.y), m = i3.x + y2 * (t2.x - i3.x), m <= this._xmin ? o2 = false : m >= this._xmax ? o2 = true : s3.push(new e(y2, m, this._ymin))), (i3.y < this._ymax && t2.y > this._ymax || i3.y > this._ymax && t2.y < this._ymax) && (y2 = (this._ymax - i3.y) / (t2.y - i3.y), m = i3.x + y2 * (t2.x - i3.x), m <= this._xmin ? o2 = false : m >= this._xmax ? o2 = true : s3.push(new e(y2, m, this._ymax))), s3.length === 0)
          o2 ? r2 ? this._lineTo(this._xmax, this._ymax, true) : this._lineTo(this._xmax, this._ymin, true) : r2 ? this._lineTo(this._xmin, this._ymax, true) : this._lineTo(this._xmin, this._ymin, true);
        else if (s3.length > 1 && s3[0].ratio > s3[1].ratio)
          this._start = this._dist + _2 * s3[1].ratio, this._lineTo(s3[1].x, s3[1].y, true), this._lineTo(s3[0].x, s3[0].y, true);
        else {
          this._start = this._dist + _2 * s3[0].ratio;
          for (let i4 = 0; i4 < s3.length; i4++)
            this._lineTo(s3[i4].x, s3[i4].y, true);
        }
        this._lineTo(t2.x, t2.y, false);
      }
    }
    this._dist += _2, this._prevIsIn = h2, this._prevPt = n2;
  }
  close() {
    if (this._line.length > 2) {
      const i2 = this._firstPt, t2 = this._prevPt;
      i2.x === t2.x && i2.y === t2.y || this.lineTo(i2.x, i2.y);
      const s2 = this._line;
      let h2 = s2.length;
      for (; h2 >= 4 && (s2[0].x === s2[1].x && s2[0].x === s2[h2 - 2].x || s2[0].y === s2[1].y && s2[0].y === s2[h2 - 2].y); )
        s2.pop(), s2[0].x = s2[h2 - 2].x, s2[0].y = s2[h2 - 2].y, --h2;
    }
  }
  result(i2 = true) {
    return this._pushLine(), this._lines.length === 0 ? null : (this._type === s$2.Polygon && i2 && x.simplify(this._tileSize, this._margin * this._finalRatio, this._lines), this._lines);
  }
  resultWithStarts() {
    if (this._type !== s$2.LineString)
      throw new Error("Only valid for lines");
    this._pushLine();
    const i2 = this._lines, t2 = i2.length;
    if (t2 === 0)
      return null;
    const h2 = [];
    for (let s2 = 0; s2 < t2; s2++)
      h2.push({ line: i2[s2], start: this._starts[s2] || 0 });
    return h2;
  }
  _isIn(i2, t2) {
    return i2 >= this._xmin && i2 <= this._xmax && t2 >= this._ymin && t2 <= this._ymax;
  }
  _intersect(i2, s2) {
    let h2, e2, n2;
    if (s2.x >= this._xmin && s2.x <= this._xmax)
      e2 = s2.y <= this._ymin ? this._ymin : this._ymax, n2 = (e2 - i2.y) / (s2.y - i2.y), h2 = i2.x + n2 * (s2.x - i2.x);
    else if (s2.y >= this._ymin && s2.y <= this._ymax)
      h2 = s2.x <= this._xmin ? this._xmin : this._xmax, n2 = (h2 - i2.x) / (s2.x - i2.x), e2 = i2.y + n2 * (s2.y - i2.y);
    else {
      e2 = s2.y <= this._ymin ? this._ymin : this._ymax, h2 = s2.x <= this._xmin ? this._xmin : this._xmax;
      const t2 = (h2 - i2.x) / (s2.x - i2.x), _2 = (e2 - i2.y) / (s2.y - i2.y);
      t2 < _2 ? (n2 = t2, e2 = i2.y + t2 * (s2.y - i2.y)) : (n2 = _2, h2 = i2.x + _2 * (s2.x - i2.x));
    }
    return this._r = n2, new t(h2, e2);
  }
  _pushLine() {
    this._line && (this._type === s$2.Point ? this._line.length > 0 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === s$2.LineString ? this._line.length > 1 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === s$2.Polygon && this._line.length > 3 && (this._lines.push(this._line), this._starts.push(this._start))), this._line = [], this._start = 0;
  }
  _moveTo(i2, h2, e2) {
    this._type !== s$2.Polygon ? e2 && (i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), h2 = Math.round((h2 - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new t(i2, h2))) : (e2 || (i2 < this._xmin && (i2 = this._xmin), i2 > this._xmax && (i2 = this._xmax), h2 < this._ymin && (h2 = this._ymin), h2 > this._ymax && (h2 = this._ymax)), i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), h2 = Math.round((h2 - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new t(i2, h2)), this._isH = false, this._isV = false);
  }
  _lineTo(i2, h2, e2) {
    let n2, _2;
    if (this._type !== s$2.Polygon)
      if (e2) {
        if (i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), h2 = Math.round((h2 - (this._ymin + this._margin)) * this._finalRatio), this._line.length > 0 && (n2 = this._line[this._line.length - 1], n2.equals(i2, h2)))
          return;
        this._line.push(new t(i2, h2));
      } else
        this._line && this._line.length > 0 && this._pushLine();
    else if (e2 || (i2 < this._xmin && (i2 = this._xmin), i2 > this._xmax && (i2 = this._xmax), h2 < this._ymin && (h2 = this._ymin), h2 > this._ymax && (h2 = this._ymax)), i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), h2 = Math.round((h2 - (this._ymin + this._margin)) * this._finalRatio), this._line && this._line.length > 0) {
      n2 = this._line[this._line.length - 1];
      const s2 = n2.x === i2, e3 = n2.y === h2;
      if (s2 && e3)
        return;
      this._isH && s2 || this._isV && e3 ? (n2.x = i2, n2.y = h2, _2 = this._line[this._line.length - 2], _2.x === i2 && _2.y === h2 ? (this._line.pop(), this._line.length <= 1 ? (this._isH = false, this._isV = false) : (_2 = this._line[this._line.length - 2], this._isH = _2.x === i2, this._isV = _2.y === h2)) : (this._isH = _2.x === i2, this._isV = _2.y === h2)) : (this._line.push(new t(i2, h2)), this._isH = s2, this._isV = e3);
    } else
      this._line.push(new t(i2, h2));
  }
}
class _ {
  setExtent(i2) {
    this._ratio = i2 === 4096 ? 1 : 4096 / i2;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(i2) {
    this._lines = [], this._line = null;
  }
  moveTo(i2, s2) {
    this._line && this._lines.push(this._line), this._line = [];
    const h2 = this._ratio;
    this._line.push(new t(i2 * h2, s2 * h2));
  }
  lineTo(i2, s2) {
    const h2 = this._ratio;
    this._line.push(new t(i2 * h2, s2 * h2));
  }
  close() {
    const i2 = this._line;
    i2 && !i2[0].isEqual(i2[i2.length - 1]) && i2.push(i2[0]);
  }
  result() {
    return this._line && this._lines.push(this._line), this._lines.length === 0 ? null : this._lines;
  }
}
var l;
!function(i2) {
  i2[i2.sideLeft = 0] = "sideLeft", i2[i2.sideRight = 1] = "sideRight", i2[i2.sideTop = 2] = "sideTop", i2[i2.sideBottom = 3] = "sideBottom";
}(l || (l = {}));
class x {
  static simplify(i2, t2, s2) {
    if (!s2)
      return;
    const h2 = -t2, e2 = i2 + t2, n2 = -t2, _2 = i2 + t2, a2 = [], y2 = [], o2 = s2.length;
    for (let x2 = 0; x2 < o2; ++x2) {
      const i3 = s2[x2];
      if (!i3 || i3.length < 2)
        continue;
      let t3, o3 = i3[0];
      const r3 = i3.length;
      for (let s3 = 1; s3 < r3; ++s3)
        t3 = i3[s3], o3.x === t3.x && (o3.x <= h2 && (o3.y > t3.y ? (a2.push(x2), a2.push(s3), a2.push(l.sideLeft), a2.push(-1)) : (y2.push(x2), y2.push(s3), y2.push(l.sideLeft), y2.push(-1))), o3.x >= e2 && (o3.y < t3.y ? (a2.push(x2), a2.push(s3), a2.push(l.sideRight), a2.push(-1)) : (y2.push(x2), y2.push(s3), y2.push(l.sideRight), y2.push(-1)))), o3.y === t3.y && (o3.y <= n2 && (o3.x < t3.x ? (a2.push(x2), a2.push(s3), a2.push(l.sideTop), a2.push(-1)) : (y2.push(x2), y2.push(s3), y2.push(l.sideTop), y2.push(-1))), o3.y >= _2 && (o3.x > t3.x ? (a2.push(x2), a2.push(s3), a2.push(l.sideBottom), a2.push(-1)) : (y2.push(x2), y2.push(s3), y2.push(l.sideBottom), y2.push(-1)))), o3 = t3;
    }
    if (a2.length === 0 || y2.length === 0)
      return;
    x.fillParent(s2, y2, a2), x.fillParent(s2, a2, y2);
    const r2 = [];
    x.calcDeltas(r2, y2, a2), x.calcDeltas(r2, a2, y2), x.addDeltas(r2, s2);
  }
  static fillParent(i2, t2, s2) {
    const e2 = s2.length, n2 = t2.length;
    for (let _2 = 0; _2 < n2; _2 += 4) {
      const n3 = t2[_2], x2 = t2[_2 + 1], a2 = t2[_2 + 2], y2 = i2[n3][x2 - 1], o2 = i2[n3][x2];
      let r2 = 8092, m = -1;
      for (let t3 = 0; t3 < e2; t3 += 4) {
        if (s2[t3 + 2] !== a2)
          continue;
        const e3 = s2[t3], n4 = s2[t3 + 1], _3 = i2[e3][n4 - 1], x3 = i2[e3][n4];
        switch (a2) {
          case l.sideLeft:
          case l.sideRight:
            if (g(y2.y, _3.y, x3.y) && g(o2.y, _3.y, x3.y)) {
              const i3 = Math.abs(x3.y - _3.y);
              i3 < r2 && (r2 = i3, m = t3);
            }
            break;
          case l.sideTop:
          case l.sideBottom:
            if (g(y2.x, _3.x, x3.x) && g(o2.x, _3.x, x3.x)) {
              const i3 = Math.abs(x3.x - _3.x);
              i3 < r2 && (r2 = i3, m = t3);
            }
        }
      }
      t2[_2 + 3] = m;
    }
  }
  static calcDeltas(i2, t2, s2) {
    const h2 = t2.length;
    for (let e2 = 0; e2 < h2; e2 += 4) {
      const h3 = [], n2 = x.calcDelta(e2, t2, s2, h3);
      i2.push(t2[e2]), i2.push(t2[e2 + 1]), i2.push(t2[e2 + 2]), i2.push(n2);
    }
  }
  static calcDelta(i2, t2, s2, h2) {
    const e2 = t2[i2 + 3];
    if (e2 === -1)
      return 0;
    const n2 = h2.length;
    return n2 > 1 && h2[n2 - 2] === e2 ? 0 : (h2.push(e2), x.calcDelta(e2, s2, t2, h2) + 1);
  }
  static addDeltas(i2, t2) {
    const s2 = i2.length;
    let h2 = 0;
    for (let e2 = 0; e2 < s2; e2 += 4) {
      const t3 = i2[e2 + 3];
      t3 > h2 && (h2 = t3);
    }
    for (let e2 = 0; e2 < s2; e2 += 4) {
      const s3 = t2[i2[e2]], n2 = i2[e2 + 1], _2 = h2 - i2[e2 + 3];
      switch (i2[e2 + 2]) {
        case l.sideLeft:
          s3[n2 - 1].x -= _2, s3[n2].x -= _2, n2 === 1 && (s3[s3.length - 1].x -= _2), n2 === s3.length - 1 && (s3[0].x -= _2);
          break;
        case l.sideRight:
          s3[n2 - 1].x += _2, s3[n2].x += _2, n2 === 1 && (s3[s3.length - 1].x += _2), n2 === s3.length - 1 && (s3[0].x += _2);
          break;
        case l.sideTop:
          s3[n2 - 1].y -= _2, s3[n2].y -= _2, n2 === 1 && (s3[s3.length - 1].y -= _2), n2 === s3.length - 1 && (s3[0].y -= _2);
          break;
        case l.sideBottom:
          s3[n2 - 1].y += _2, s3[n2].y += _2, n2 === 1 && (s3[s3.length - 1].y += _2), n2 === s3.length - 1 && (s3[0].y += _2);
      }
    }
  }
}
export { _, c, i, n, r$1 as r };
