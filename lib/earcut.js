var e, n, t, r = { exports: {} };
e = r, n = function() {
  function e2(e3, t3, x3) {
    x3 = x3 || 2;
    var i2, u2, v2, o2, y2, p2, a2, l2 = t3 && t3.length, h2 = l2 ? t3[0] * x3 : e3.length, s2 = n2(e3, 0, h2, x3, true), c2 = [];
    if (!s2 || s2.next === s2.prev)
      return c2;
    if (l2 && (s2 = f(e3, t3, s2, x3)), e3.length > 80 * x3) {
      i2 = v2 = e3[0], u2 = o2 = e3[1];
      for (var Z2 = x3; Z2 < h2; Z2 += x3)
        (y2 = e3[Z2]) < i2 && (i2 = y2), (p2 = e3[Z2 + 1]) < u2 && (u2 = p2), y2 > v2 && (v2 = y2), p2 > o2 && (o2 = p2);
      a2 = (a2 = Math.max(v2 - i2, o2 - u2)) !== 0 ? 1 / a2 : 0;
    }
    return r2(s2, c2, x3, i2, u2, a2), c2;
  }
  function n2(e3, n3, t3, r3, x3) {
    var i2, u2;
    if (x3 === E(e3, n3, t3, r3) > 0)
      for (i2 = n3; i2 < t3; i2 += r3)
        u2 = B(i2, e3[i2], e3[i2 + 1], u2);
    else
      for (i2 = t3 - r3; i2 >= n3; i2 -= r3)
        u2 = B(i2, e3[i2], e3[i2 + 1], u2);
    if (u2 && M(u2, u2.next)) {
      var v2 = u2.next;
      C(u2), u2 = v2;
    }
    return u2;
  }
  function t2(e3, n3) {
    if (!e3)
      return e3;
    n3 || (n3 = e3);
    var t3, r3 = e3;
    do {
      if (t3 = false, r3.steiner || !M(r3, r3.next) && w(r3.prev, r3, r3.next) !== 0)
        r3 = r3.next;
      else {
        var x3 = r3.prev;
        if (C(r3), (r3 = n3 = x3) === r3.next)
          break;
        t3 = true;
      }
    } while (t3 || r3 !== n3);
    return n3;
  }
  function r2(e3, n3, f2, o2, y2, p2, a2) {
    if (e3) {
      !a2 && p2 && h(e3, o2, y2, p2);
      for (var l2, s2, c2 = e3; e3.prev !== e3.next; )
        if (l2 = e3.prev, s2 = e3.next, p2 ? i(e3, o2, y2, p2) : x2(e3))
          n3.push(l2.i / f2), n3.push(e3.i / f2), n3.push(s2.i / f2), C(e3), e3 = s2.next, c2 = s2.next;
        else if ((e3 = s2) === c2) {
          a2 ? a2 === 1 ? r2(e3 = u(t2(e3), n3, f2), n3, f2, o2, y2, p2, 2) : a2 === 2 && v(e3, n3, f2, o2, y2, p2) : r2(t2(e3), n3, f2, o2, y2, p2, 1);
          break;
        }
    }
  }
  function x2(e3) {
    var n3 = e3.prev, t3 = e3, r3 = e3.next;
    if (w(n3, t3, r3) >= 0)
      return false;
    for (var x3 = e3.next.next; x3 !== e3.prev; ) {
      if (g(n3.x, n3.y, t3.x, t3.y, r3.x, r3.y, x3.x, x3.y) && w(x3.prev, x3, x3.next) >= 0)
        return false;
      x3 = x3.next;
    }
    return true;
  }
  function i(e3, n3, t3, r3) {
    var x3 = e3.prev, i2 = e3, u2 = e3.next;
    if (w(x3, i2, u2) >= 0)
      return false;
    for (var v2 = x3.x < i2.x ? x3.x < u2.x ? x3.x : u2.x : i2.x < u2.x ? i2.x : u2.x, f2 = x3.y < i2.y ? x3.y < u2.y ? x3.y : u2.y : i2.y < u2.y ? i2.y : u2.y, o2 = x3.x > i2.x ? x3.x > u2.x ? x3.x : u2.x : i2.x > u2.x ? i2.x : u2.x, y2 = x3.y > i2.y ? x3.y > u2.y ? x3.y : u2.y : i2.y > u2.y ? i2.y : u2.y, p2 = c(v2, f2, n3, t3, r3), a2 = c(o2, y2, n3, t3, r3), l2 = e3.prevZ, h2 = e3.nextZ; l2 && l2.z >= p2 && h2 && h2.z <= a2; ) {
      if (l2 !== e3.prev && l2 !== e3.next && g(x3.x, x3.y, i2.x, i2.y, u2.x, u2.y, l2.x, l2.y) && w(l2.prev, l2, l2.next) >= 0)
        return false;
      if (l2 = l2.prevZ, h2 !== e3.prev && h2 !== e3.next && g(x3.x, x3.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && w(h2.prev, h2, h2.next) >= 0)
        return false;
      h2 = h2.nextZ;
    }
    for (; l2 && l2.z >= p2; ) {
      if (l2 !== e3.prev && l2 !== e3.next && g(x3.x, x3.y, i2.x, i2.y, u2.x, u2.y, l2.x, l2.y) && w(l2.prev, l2, l2.next) >= 0)
        return false;
      l2 = l2.prevZ;
    }
    for (; h2 && h2.z <= a2; ) {
      if (h2 !== e3.prev && h2 !== e3.next && g(x3.x, x3.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && w(h2.prev, h2, h2.next) >= 0)
        return false;
      h2 = h2.nextZ;
    }
    return true;
  }
  function u(e3, n3, r3) {
    var x3 = e3;
    do {
      var i2 = x3.prev, u2 = x3.next.next;
      !M(i2, u2) && z(i2, x3, x3.next, u2) && j(i2, u2) && j(u2, i2) && (n3.push(i2.i / r3), n3.push(x3.i / r3), n3.push(u2.i / r3), C(x3), C(x3.next), x3 = e3 = u2), x3 = x3.next;
    } while (x3 !== e3);
    return t2(x3);
  }
  function v(e3, n3, x3, i2, u2, v2) {
    var f2 = e3;
    do {
      for (var o2 = f2.next.next; o2 !== f2.prev; ) {
        if (f2.i !== o2.i && d(f2, o2)) {
          var y2 = A(f2, o2);
          return f2 = t2(f2, f2.next), y2 = t2(y2, y2.next), r2(f2, n3, x3, i2, u2, v2), void r2(y2, n3, x3, i2, u2, v2);
        }
        o2 = o2.next;
      }
      f2 = f2.next;
    } while (f2 !== e3);
  }
  function f(e3, r3, x3, i2) {
    var u2, v2, f2, y2 = [];
    for (u2 = 0, v2 = r3.length; u2 < v2; u2++)
      (f2 = n2(e3, r3[u2] * i2, u2 < v2 - 1 ? r3[u2 + 1] * i2 : e3.length, i2, false)) === f2.next && (f2.steiner = true), y2.push(Z(f2));
    for (y2.sort(o), u2 = 0; u2 < y2.length; u2++)
      x3 = t2(x3 = p(y2[u2], x3), x3.next);
    return x3;
  }
  function o(e3, n3) {
    return e3.x - n3.x;
  }
  function y(e3) {
    if (e3.next.prev === e3)
      return e3;
    let n3 = e3;
    for (; ; ) {
      const t3 = n3.next;
      if (t3.prev === n3 || t3 === n3 || t3 === e3)
        break;
      n3 = t3;
    }
    return n3;
  }
  function p(e3, n3) {
    var r3 = a(e3, n3);
    if (!r3)
      return n3;
    var x3 = A(r3, e3), i2 = t2(r3, r3.next);
    let u2 = y(x3);
    return t2(u2, u2.next), i2 = y(i2), y(n3 === r3 ? i2 : n3);
  }
  function a(e3, n3) {
    var t3, r3 = n3, x3 = e3.x, i2 = e3.y, u2 = -1 / 0;
    do {
      if (i2 <= r3.y && i2 >= r3.next.y && r3.next.y !== r3.y) {
        var v2 = r3.x + (i2 - r3.y) * (r3.next.x - r3.x) / (r3.next.y - r3.y);
        if (v2 <= x3 && v2 > u2) {
          if (u2 = v2, v2 === x3) {
            if (i2 === r3.y)
              return r3;
            if (i2 === r3.next.y)
              return r3.next;
          }
          t3 = r3.x < r3.next.x ? r3 : r3.next;
        }
      }
      r3 = r3.next;
    } while (r3 !== n3);
    if (!t3)
      return null;
    if (x3 === u2)
      return t3;
    var f2, o2 = t3, y2 = t3.x, p2 = t3.y, a2 = 1 / 0;
    r3 = t3;
    do {
      x3 >= r3.x && r3.x >= y2 && x3 !== r3.x && g(i2 < p2 ? x3 : u2, i2, y2, p2, i2 < p2 ? u2 : x3, i2, r3.x, r3.y) && (f2 = Math.abs(i2 - r3.y) / (x3 - r3.x), j(r3, e3) && (f2 < a2 || f2 === a2 && (r3.x > t3.x || r3.x === t3.x && l(t3, r3))) && (t3 = r3, a2 = f2)), r3 = r3.next;
    } while (r3 !== o2);
    return t3;
  }
  function l(e3, n3) {
    return w(e3.prev, e3, n3.prev) < 0 && w(n3.next, e3, e3.next) < 0;
  }
  function h(e3, n3, t3, r3) {
    var x3 = e3;
    do {
      x3.z === null && (x3.z = c(x3.x, x3.y, n3, t3, r3)), x3.prevZ = x3.prev, x3.nextZ = x3.next, x3 = x3.next;
    } while (x3 !== e3);
    x3.prevZ.nextZ = null, x3.prevZ = null, s(x3);
  }
  function s(e3) {
    var n3, t3, r3, x3, i2, u2, v2, f2, o2 = 1;
    do {
      for (t3 = e3, e3 = null, i2 = null, u2 = 0; t3; ) {
        for (u2++, r3 = t3, v2 = 0, n3 = 0; n3 < o2 && (v2++, r3 = r3.nextZ); n3++)
          ;
        for (f2 = o2; v2 > 0 || f2 > 0 && r3; )
          v2 !== 0 && (f2 === 0 || !r3 || t3.z <= r3.z) ? (x3 = t3, t3 = t3.nextZ, v2--) : (x3 = r3, r3 = r3.nextZ, f2--), i2 ? i2.nextZ = x3 : e3 = x3, x3.prevZ = i2, i2 = x3;
        t3 = r3;
      }
      i2.nextZ = null, o2 *= 2;
    } while (u2 > 1);
    return e3;
  }
  function c(e3, n3, t3, r3, x3) {
    return (e3 = 1431655765 & ((e3 = 858993459 & ((e3 = 252645135 & ((e3 = 16711935 & ((e3 = 32767 * (e3 - t3) * x3) | e3 << 8)) | e3 << 4)) | e3 << 2)) | e3 << 1)) | (n3 = 1431655765 & ((n3 = 858993459 & ((n3 = 252645135 & ((n3 = 16711935 & ((n3 = 32767 * (n3 - r3) * x3) | n3 << 8)) | n3 << 4)) | n3 << 2)) | n3 << 1)) << 1;
  }
  function Z(e3) {
    var n3 = e3, t3 = e3;
    do {
      (n3.x < t3.x || n3.x === t3.x && n3.y < t3.y) && (t3 = n3), n3 = n3.next;
    } while (n3 !== e3);
    return t3;
  }
  function g(e3, n3, t3, r3, x3, i2, u2, v2) {
    return (x3 - u2) * (n3 - v2) - (e3 - u2) * (i2 - v2) >= 0 && (e3 - u2) * (r3 - v2) - (t3 - u2) * (n3 - v2) >= 0 && (t3 - u2) * (i2 - v2) - (x3 - u2) * (r3 - v2) >= 0;
  }
  function d(e3, n3) {
    return e3.next.i !== n3.i && e3.prev.i !== n3.i && !k(e3, n3) && (j(e3, n3) && j(n3, e3) && q(e3, n3) && (w(e3.prev, e3, n3.prev) || w(e3, n3.prev, n3)) || M(e3, n3) && w(e3.prev, e3, e3.next) > 0 && w(n3.prev, n3, n3.next) > 0);
  }
  function w(e3, n3, t3) {
    return (n3.y - e3.y) * (t3.x - n3.x) - (n3.x - e3.x) * (t3.y - n3.y);
  }
  function M(e3, n3) {
    return e3.x === n3.x && e3.y === n3.y;
  }
  function z(e3, n3, t3, r3) {
    var x3 = m(w(e3, n3, t3)), i2 = m(w(e3, n3, r3)), u2 = m(w(t3, r3, e3)), v2 = m(w(t3, r3, n3));
    return x3 !== i2 && u2 !== v2 || !(x3 !== 0 || !b(e3, t3, n3)) || !(i2 !== 0 || !b(e3, r3, n3)) || !(u2 !== 0 || !b(t3, e3, r3)) || !(v2 !== 0 || !b(t3, n3, r3));
  }
  function b(e3, n3, t3) {
    return n3.x <= Math.max(e3.x, t3.x) && n3.x >= Math.min(e3.x, t3.x) && n3.y <= Math.max(e3.y, t3.y) && n3.y >= Math.min(e3.y, t3.y);
  }
  function m(e3) {
    return e3 > 0 ? 1 : e3 < 0 ? -1 : 0;
  }
  function k(e3, n3) {
    var t3 = e3;
    do {
      if (t3.i !== e3.i && t3.next.i !== e3.i && t3.i !== n3.i && t3.next.i !== n3.i && z(t3, t3.next, e3, n3))
        return true;
      t3 = t3.next;
    } while (t3 !== e3);
    return false;
  }
  function j(e3, n3) {
    return w(e3.prev, e3, e3.next) < 0 ? w(e3, n3, e3.next) >= 0 && w(e3, e3.prev, n3) >= 0 : w(e3, n3, e3.prev) < 0 || w(e3, e3.next, n3) < 0;
  }
  function q(e3, n3) {
    var t3 = e3, r3 = false, x3 = (e3.x + n3.x) / 2, i2 = (e3.y + n3.y) / 2;
    do {
      t3.y > i2 != t3.next.y > i2 && t3.next.y !== t3.y && x3 < (t3.next.x - t3.x) * (i2 - t3.y) / (t3.next.y - t3.y) + t3.x && (r3 = !r3), t3 = t3.next;
    } while (t3 !== e3);
    return r3;
  }
  function A(e3, n3) {
    var t3 = new D(e3.i, e3.x, e3.y), r3 = new D(n3.i, n3.x, n3.y), x3 = e3.next, i2 = n3.prev;
    return e3.next = n3, n3.prev = e3, t3.next = x3, x3.prev = t3, r3.next = t3, t3.prev = r3, i2.next = r3, r3.prev = i2, r3;
  }
  function B(e3, n3, t3, r3) {
    var x3 = new D(e3, n3, t3);
    return r3 ? (x3.next = r3.next, x3.prev = r3, r3.next.prev = x3, r3.next = x3) : (x3.prev = x3, x3.next = x3), x3;
  }
  function C(e3) {
    e3.next.prev = e3.prev, e3.prev.next = e3.next, e3.prevZ && (e3.prevZ.nextZ = e3.nextZ), e3.nextZ && (e3.nextZ.prevZ = e3.prevZ);
  }
  function D(e3, n3, t3) {
    this.i = e3, this.x = n3, this.y = t3, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  function E(e3, n3, t3, r3) {
    for (var x3 = 0, i2 = n3, u2 = t3 - r3; i2 < t3; i2 += r3)
      x3 += (e3[u2] - e3[i2]) * (e3[i2 + 1] + e3[u2 + 1]), u2 = i2;
    return x3;
  }
  return e2.deviation = function(e3, n3, t3, r3) {
    var x3 = n3 && n3.length, i2 = x3 ? n3[0] * t3 : e3.length, u2 = Math.abs(E(e3, 0, i2, t3));
    if (x3)
      for (var v2 = 0, f2 = n3.length; v2 < f2; v2++) {
        var o2 = n3[v2] * t3, y2 = v2 < f2 - 1 ? n3[v2 + 1] * t3 : e3.length;
        u2 -= Math.abs(E(e3, o2, y2, t3));
      }
    var p2 = 0;
    for (v2 = 0; v2 < r3.length; v2 += 3) {
      var a2 = r3[v2] * t3, l2 = r3[v2 + 1] * t3, h2 = r3[v2 + 2] * t3;
      p2 += Math.abs((e3[a2] - e3[h2]) * (e3[l2 + 1] - e3[a2 + 1]) - (e3[a2] - e3[l2]) * (e3[h2 + 1] - e3[a2 + 1]));
    }
    return u2 === 0 && p2 === 0 ? 0 : Math.abs((p2 - u2) / u2);
  }, e2.flatten = function(e3) {
    for (var n3 = e3[0][0].length, t3 = { vertices: [], holes: [], dimensions: n3 }, r3 = 0, x3 = 0; x3 < e3.length; x3++) {
      for (var i2 = 0; i2 < e3[x3].length; i2++)
        for (var u2 = 0; u2 < n3; u2++)
          t3.vertices.push(e3[x3][i2][u2]);
      x3 > 0 && (r3 += e3[x3 - 1].length, t3.holes.push(r3));
    }
    return t3;
  }, e2;
}, (t = n()) !== void 0 && (e.exports = t);
const x = r.exports;
export { x };
