import { ap as u, t, ao as R, bs as k, bt as r, aP as s, aQ as l, aN as u$1, at as y$1, aM as f$1, aF as c, bu as s$1, bv as m, bw as i } from "./index.js";
function a(t2) {
  return f(t2, true);
}
function p(t2) {
  return f(t2, false);
}
function f(i$1, n) {
  if (t(i$1))
    return null;
  const a2 = i$1.spatialReference, p2 = R(a2), f2 = "toJSON" in i$1 ? i$1.toJSON() : i$1;
  if (!p2)
    return f2;
  const I2 = k(a2) ? 102100 : 4326, g2 = r[I2].maxX, v2 = r[I2].minX;
  if (s(f2))
    return y(f2, g2, v2);
  if (l(f2))
    return f2.points = f2.points.map((t2) => y(t2, g2, v2)), f2;
  if (u$1(f2))
    return d(f2, p2);
  if (y$1(f2) || f$1(f2)) {
    const t2 = c(S, f2), i$12 = { xmin: t2[0], ymin: t2[1], xmax: t2[2], ymax: t2[3] }, e = i(i$12.xmin, v2) * (2 * g2), h = e === 0 ? f2 : s$1(f2, e);
    return i$12.xmin += e, i$12.xmax += e, i$12.xmax > g2 ? P(h, g2, n) : i$12.xmin < v2 ? P(h, v2, n) : h;
  }
  return f2;
}
function d(t2, i2) {
  if (!i2)
    return t2;
  const s2 = I(t2, i2).map((t3) => t3.extent);
  return s2.length < 2 ? s2[0] || t2 : s2.length > 2 ? (t2.xmin = i2.valid[0], t2.xmax = i2.valid[1], t2) : { rings: s2.map((t3) => [[t3.xmin, t3.ymin], [t3.xmin, t3.ymax], [t3.xmax, t3.ymax], [t3.xmax, t3.ymin], [t3.xmin, t3.ymin]]) };
}
function y(t2, i$1, s2) {
  if (Array.isArray(t2)) {
    const n = t2[0];
    if (n > i$1) {
      const s3 = i(n, i$1);
      t2[0] = n + s3 * (-2 * i$1);
    } else if (n < s2) {
      const i$12 = i(n, s2);
      t2[0] = n + i$12 * (-2 * s2);
    }
  } else {
    const n = t2.x;
    if (n > i$1) {
      const s3 = i(n, i$1);
      t2.x += s3 * (-2 * i$1);
    } else if (n < s2) {
      const i$12 = i(n, s2);
      t2.x += i$12 * (-2 * s2);
    }
  }
  return t2;
}
function I(t2, i2) {
  const s2 = [], { ymin: n, ymax: e, xmin: h, xmax: o } = t2, r2 = t2.xmax - t2.xmin, [u2, m2] = i2.valid, { x, frameId: _ } = g(t2.xmin, i2), { x: l2, frameId: c2 } = g(t2.xmax, i2), a2 = x === l2 && r2 > 0;
  if (r2 > 2 * m2) {
    const t3 = { xmin: h < o ? x : l2, ymin: n, xmax: m2, ymax: e }, i3 = { xmin: u2, ymin: n, xmax: h < o ? l2 : x, ymax: e }, r3 = { xmin: 0, ymin: n, xmax: m2, ymax: e }, a3 = { xmin: u2, ymin: n, xmax: 0, ymax: e }, p2 = [], f2 = [];
    v(t3, r3) && p2.push(_), v(t3, a3) && f2.push(_), v(i3, r3) && p2.push(c2), v(i3, a3) && f2.push(c2);
    for (let s3 = _ + 1; s3 < c2; s3++)
      p2.push(s3), f2.push(s3);
    s2.push(new C(t3, [_]), new C(i3, [c2]), new C(r3, p2), new C(a3, f2));
  } else
    x > l2 || a2 ? s2.push(new C({ xmin: x, ymin: n, xmax: m2, ymax: e }, [_]), new C({ xmin: u2, ymin: n, xmax: l2, ymax: e }, [c2])) : s2.push(new C({ xmin: x, ymin: n, xmax: l2, ymax: e }, [_]));
  return s2;
}
function g(t2, i2) {
  const [s2, n] = i2.valid, e = 2 * n;
  let h, o = 0;
  return t2 > n ? (h = Math.ceil(Math.abs(t2 - n) / e), t2 -= h * e, o = h) : t2 < s2 && (h = Math.ceil(Math.abs(t2 - s2) / e), t2 += h * e, o = -h), { x: t2, frameId: o };
}
function v(t2, i2) {
  const { xmin: s2, ymin: n, xmax: e, ymax: h } = i2;
  return O(t2, s2, n) && O(t2, s2, h) && O(t2, e, h) && O(t2, e, n);
}
function O(t2, i2, s2) {
  return i2 >= t2.xmin && i2 <= t2.xmax && s2 >= t2.ymin && s2 <= t2.ymax;
}
function P(t2, i2, s2 = true) {
  const e = !f$1(t2);
  if (e && m(t2), s2) {
    return new T().cut(t2, i2);
  }
  const h = e ? t2.rings : t2.paths, o = e ? 4 : 2, r2 = h.length, m$1 = -2 * i2;
  for (let n = 0; n < r2; n++) {
    const t3 = h[n];
    if (t3 && t3.length >= o) {
      const i3 = [];
      for (const s3 of t3)
        i3.push([s3[0] + m$1, s3[1]]);
      h.push(i3);
    }
  }
  return e ? t2.rings = h : t2.paths = h, t2;
}
class C {
  constructor(t2, i2) {
    this.extent = t2, this.frameIds = i2;
  }
}
const S = u();
class T {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(t2, i2) {
    let s2;
    if (this._xCut = i2, t2.rings)
      this._closed = true, s2 = t2.rings, this._minPts = 4;
    else {
      if (!t2.paths)
        return null;
      this._closed = false, s2 = t2.paths, this._minPts = 2;
    }
    for (const e of s2) {
      if (!e || e.length < this._minPts)
        continue;
      let t3 = true;
      for (const i3 of e)
        t3 ? (this.moveTo(i3), t3 = false) : this.lineTo(i3);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), s2 = [];
    for (const e of this._linesIn)
      e && e.length >= this._minPts && s2.push(e);
    const n = -2 * this._xCut;
    for (const e of this._linesOut)
      if (e && e.length >= this._minPts) {
        for (const t3 of e)
          t3[0] += n;
        s2.push(e);
      }
    return this._closed ? t2.rings = s2 : t2.paths = s2, t2;
  }
  moveTo(t2) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(t2[0]), this._moveTo(t2[0], t2[1], this._prevSide), this._prevPt = t2, this._firstPt = t2;
  }
  lineTo(t2) {
    const i2 = this._side(t2[0]);
    if (i2 * this._prevSide == -1) {
      const s2 = this._intersect(this._prevPt, t2);
      this._lineTo(this._xCut, s2, 0), this._prevSide = 0, this._lineTo(t2[0], t2[1], i2);
    } else
      this._lineTo(t2[0], t2[1], i2);
    this._prevSide = i2, this._prevPt = t2;
  }
  close() {
    const t2 = this._firstPt, i2 = this._prevPt;
    t2[0] === i2[0] && t2[1] === i2[1] || this.lineTo(t2), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(t2, i2, s2) {
    this._closed ? (this._lineIn.push([s2 <= 0 ? t2 : this._xCut, i2]), this._lineOut.push([s2 >= 0 ? t2 : this._xCut, i2])) : (s2 <= 0 && this._lineIn.push([t2, i2]), s2 >= 0 && this._lineOut.push([t2, i2]));
  }
  _lineTo(t2, i2, s2) {
    this._closed ? (this._addPolyVertex(this._lineIn, s2 <= 0 ? t2 : this._xCut, i2), this._addPolyVertex(this._lineOut, s2 >= 0 ? t2 : this._xCut, i2)) : s2 < 0 ? (this._prevSide === 0 && this._pushLineOut(), this._lineIn.push([t2, i2])) : s2 > 0 ? (this._prevSide === 0 && this._pushLineIn(), this._lineOut.push([t2, i2])) : this._prevSide < 0 ? (this._lineIn.push([t2, i2]), this._lineOut.push([t2, i2])) : this._prevSide > 0 && (this._lineOut.push([t2, i2]), this._lineIn.push([t2, i2]));
  }
  _addPolyVertex(t2, i2, s2) {
    const n = t2.length;
    n > 1 && t2[n - 1][0] === i2 && t2[n - 2][0] === i2 ? t2[n - 1][1] = s2 : t2.push([i2, s2]);
  }
  _checkClosingPt(t2) {
    const i2 = t2.length;
    i2 > 3 && t2[0][0] === this._xCut && t2[i2 - 2][0] === this._xCut && t2[1][0] === this._xCut && (t2[0][1] = t2[i2 - 2][1], t2.pop());
  }
  _side(t2) {
    return t2 < this._xCut ? -1 : t2 > this._xCut ? 1 : 0;
  }
  _intersect(t2, i2) {
    const s2 = (this._xCut - t2[0]) / (i2[0] - t2[0]);
    return t2[1] + s2 * (i2[1] - t2[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
}
export { a, p };
