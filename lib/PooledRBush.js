import { e7 as l$1, hU as x$1, hV as b$1, hW as a$1, hX as x$2 } from "./index.js";
class h {
  constructor(t = 9, i) {
    this._compareMinX = l, this._compareMinY = c, this._toBBox = (t2) => t2, this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), i && (typeof i == "function" ? this._toBBox = i : this._initFormat(i)), this.clear();
  }
  destroy() {
    this.clear(), g.prune(), M.prune(), X.prune(), Y.prune();
  }
  all(t) {
    this._all(this._data, t);
  }
  search(t, i) {
    let n = this._data;
    const e = this._toBBox;
    if (f(t, n))
      for (g.clear(); n; ) {
        for (let s = 0, h2 = n.children.length; s < h2; s++) {
          const h3 = n.children[s], a2 = n.leaf ? e(h3) : h3;
          f(t, a2) && (n.leaf ? i(h3) : x(t, a2) ? this._all(h3, i) : g.push(h3));
        }
        n = g.pop();
      }
  }
  collides(t) {
    let i = this._data;
    const n = this._toBBox;
    if (!f(t, i))
      return false;
    for (g.clear(); i; ) {
      for (let e = 0, s = i.children.length; e < s; e++) {
        const s2 = i.children[e], h2 = i.leaf ? n(s2) : s2;
        if (f(t, h2)) {
          if (i.leaf || x(t, h2))
            return true;
          g.push(s2);
        }
      }
      i = g.pop();
    }
    return false;
  }
  load(t) {
    if (!t.length)
      return this;
    if (t.length < this._minEntries) {
      for (let i2 = 0, n = t.length; i2 < n; i2++)
        this.insert(t[i2]);
      return this;
    }
    let i = this._build(t.slice(0, t.length), 0, t.length - 1, 0);
    if (this._data.children.length)
      if (this._data.height === i.height)
        this._splitRoot(this._data, i);
      else {
        if (this._data.height < i.height) {
          const t2 = this._data;
          this._data = i, i = t2;
        }
        this._insert(i, this._data.height - i.height - 1, true);
      }
    else
      this._data = i;
    return this;
  }
  insert(t) {
    return t && this._insert(t, this._data.height - 1), this;
  }
  clear() {
    return this._data = new b([]), this;
  }
  remove(i) {
    var _a;
    if (!i)
      return this;
    let e, s = this._data, h2 = null, a2 = 0, r2 = false;
    const o2 = this._toBBox(i);
    for (X.clear(), Y.clear(); s || X.length > 0; ) {
      if (s || (s = x$1(X.pop()), h2 = X.data[X.length - 1], a2 = (_a = Y.pop()) != null ? _a : 0, r2 = true), s.leaf && (e = b$1(s.children, i, s.children.length, s.indexHint), e !== -1))
        return s.children.splice(e, 1), X.push(s), this._condense(X), this;
      r2 || s.leaf || !x(s, o2) ? h2 ? (a2++, s = h2.children[a2], r2 = false) : s = null : (X.push(s), Y.push(a2), a2 = 0, h2 = s, s = s.children[0]);
    }
    return this;
  }
  toJSON() {
    return this._data;
  }
  fromJSON(t) {
    return this._data = t, this;
  }
  _all(t, i) {
    var _a;
    let n = t;
    for (M.clear(); n; ) {
      if (n.leaf === true)
        for (const t2 of n.children)
          i(t2);
      else
        M.pushArray(n.children);
      n = (_a = M.pop()) != null ? _a : null;
    }
  }
  _build(t, i, n, e) {
    const s = n - i + 1;
    let h2 = this._maxEntries;
    if (s <= h2) {
      const e2 = new b(t.slice(i, n + 1));
      return a(e2, this._toBBox), e2;
    }
    e || (e = Math.ceil(Math.log(s) / Math.log(h2)), h2 = Math.ceil(s / h2 ** (e - 1)));
    const r2 = new j([]);
    r2.height = e;
    const o2 = Math.ceil(s / h2), l2 = o2 * Math.ceil(Math.sqrt(h2));
    p(t, i, n, l2, this._compareMinX);
    for (let a2 = i; a2 <= n; a2 += l2) {
      const i2 = Math.min(a2 + l2 - 1, n);
      p(t, a2, i2, o2, this._compareMinY);
      for (let n2 = a2; n2 <= i2; n2 += o2) {
        const s2 = Math.min(n2 + o2 - 1, i2);
        r2.children.push(this._build(t, n2, s2, e - 1));
      }
    }
    return a(r2, this._toBBox), r2;
  }
  _chooseSubtree(t, i, n, e) {
    for (; e.push(i), i.leaf !== true && e.length - 1 !== n; ) {
      let n2, e2 = 1 / 0, s = 1 / 0;
      for (let h2 = 0, a2 = i.children.length; h2 < a2; h2++) {
        const a3 = i.children[h2], r2 = m(a3), o2 = u(t, a3) - r2;
        o2 < s ? (s = o2, e2 = r2 < e2 ? r2 : e2, n2 = a3) : o2 === s && r2 < e2 && (e2 = r2, n2 = a3);
      }
      i = n2 || i.children[0];
    }
    return i;
  }
  _insert(t, i, n) {
    const e = this._toBBox, s = n ? t : e(t);
    X.clear();
    const h2 = this._chooseSubtree(s, this._data, i, X);
    for (h2.children.push(t), o(h2, s); i >= 0 && X.data[i].children.length > this._maxEntries; )
      this._split(X, i), i--;
    this._adjustParentBBoxes(s, X, i);
  }
  _split(t, i) {
    const n = t.data[i], e = n.children.length, s = this._minEntries;
    this._chooseSplitAxis(n, s, e);
    const h2 = this._chooseSplitIndex(n, s, e);
    if (!h2)
      return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");
    const r2 = n.children.splice(h2, n.children.length - h2), o2 = n.leaf ? new b(r2) : new j(r2);
    o2.height = n.height, a(n, this._toBBox), a(o2, this._toBBox), i ? t.data[i - 1].children.push(o2) : this._splitRoot(n, o2);
  }
  _splitRoot(t, i) {
    this._data = new j([t, i]), this._data.height = t.height + 1, a(this._data, this._toBBox);
  }
  _chooseSplitIndex(t, i, n) {
    let e, s, h2;
    e = s = 1 / 0;
    for (let a2 = i; a2 <= n - i; a2++) {
      const i2 = r(t, 0, a2, this._toBBox), o2 = r(t, a2, n, this._toBBox), l2 = _(i2, o2), c2 = m(i2) + m(o2);
      l2 < e ? (e = l2, h2 = a2, s = c2 < s ? c2 : s) : l2 === e && c2 < s && (s = c2, h2 = a2);
    }
    return h2;
  }
  _chooseSplitAxis(t, i, n) {
    const e = t.leaf ? this._compareMinX : l, s = t.leaf ? this._compareMinY : c;
    this._allDistMargin(t, i, n, e) < this._allDistMargin(t, i, n, s) && t.children.sort(e);
  }
  _allDistMargin(t, i, n, e) {
    t.children.sort(e);
    const s = this._toBBox, h2 = r(t, 0, i, s), a2 = r(t, n - i, n, s);
    let l2 = d(h2) + d(a2);
    for (let r2 = i; r2 < n - i; r2++) {
      const i2 = t.children[r2];
      o(h2, t.leaf ? s(i2) : i2), l2 += d(h2);
    }
    for (let r2 = n - i - 1; r2 >= i; r2--) {
      const i2 = t.children[r2];
      o(a2, t.leaf ? s(i2) : i2), l2 += d(a2);
    }
    return l2;
  }
  _adjustParentBBoxes(t, i, n) {
    for (let e = n; e >= 0; e--)
      o(i.data[e], t);
  }
  _condense(i) {
    for (let n = i.length - 1; n >= 0; n--) {
      const e = i.data[n];
      if (e.children.length === 0)
        if (n > 0) {
          const s = i.data[n - 1], h2 = s.children;
          h2.splice(b$1(h2, e, h2.length, s.indexHint), 1);
        } else
          this.clear();
      else
        a(e, this._toBBox);
    }
  }
  _initFormat(t) {
    const i = ["return a", " - b", ";"];
    this._compareMinX = new Function("a", "b", i.join(t[0])), this._compareMinY = new Function("a", "b", i.join(t[1])), this._toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
  }
}
function a(t, i) {
  r(t, 0, t.children.length, i, t);
}
function r(t, i, n, e, s) {
  s || (s = new b([])), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
  for (let h2, a2 = i; a2 < n; a2++)
    h2 = t.children[a2], o(s, t.leaf ? e(h2) : h2);
  return s;
}
function o(t, i) {
  t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY);
}
function l(t, i) {
  return t.minX - i.minX;
}
function c(t, i) {
  return t.minY - i.minY;
}
function m(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function d(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function u(t, i) {
  return (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) * (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY));
}
function _(t, i) {
  const n = Math.max(t.minX, i.minX), e = Math.max(t.minY, i.minY), s = Math.min(t.maxX, i.maxX), h2 = Math.min(t.maxY, i.maxY);
  return Math.max(0, s - n) * Math.max(0, h2 - e);
}
function x(t, i) {
  return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
}
function f(t, i) {
  return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
}
function p(t, i, e, h2, a2) {
  const r2 = [i, e];
  for (; r2.length; ) {
    const i2 = x$1(r2.pop()), e2 = x$1(r2.pop());
    if (i2 - e2 <= h2)
      continue;
    const o2 = e2 + Math.ceil((i2 - e2) / h2 / 2) * h2;
    a$1(t, o2, e2, i2, a2), r2.push(e2, o2, o2, i2);
  }
}
const g = new l$1(), M = new l$1(), X = new l$1(), Y = new l$1({ deallocator: void 0 });
class B {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
}
class w extends B {
  constructor() {
    super(...arguments), this.height = 1, this.indexHint = new x$2();
  }
}
class b extends w {
  constructor(t) {
    super(), this.children = t, this.leaf = true;
  }
}
class j extends w {
  constructor(t) {
    super(), this.children = t, this.leaf = false;
  }
}
export { h };
