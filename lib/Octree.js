import { b7 as s$2, bP as d, eX as k$1, be as u$1, bc as g$2, bB as p$1, ft as A$2, cI as u$2, cP as f, cQ as h$1, bF as w$1, fB as r, aS as o, a$ as j$1, fC as G$1, bY as r$1, a1 as n, e2 as e, e7 as l$1, C as r$2, fD as _, bN as p$2, fE as T$1, bi as p$3, fF as k$2, fG as c, fH as V$1, bg as r$3, bI as R$1, a0 as A$3, bJ as r$4 } from "./index.js";
function s$1(r2) {
  return r2 ? { ray: d(r2.ray), c0: r2.c0, c1: r2.c1 } : { ray: d(), c0: 0, c1: Number.MAX_VALUE };
}
function p(r2, c2 = s$1()) {
  return k$1(r2, c2.ray), c2.c0 = 0, c2.c1 = Number.MAX_VALUE, c2;
}
function v$2(r2, c2) {
  return b(r2, r2.c0, c2);
}
function A$1(r2, c2) {
  return b(r2, r2.c1, c2);
}
function b(r2, c2, n2) {
  return u$1(n2, r2.ray.origin, g$2(n2, r2.ray.direction, c2));
}
new s$2(() => s$1());
function H(T2) {
  return T2 ? [p$1(T2[0]), p$1(T2[1]), p$1(T2[2]), p$1(T2[3]), p$1(T2[4]), p$1(T2[5])] : [p$1(), p$1(), p$1(), p$1(), p$1(), p$1()];
}
function I$1() {
  return [n(), n(), n(), n(), n(), n(), n(), n()];
}
function u(T2, _2) {
  for (let O2 = 0; O2 < v$1.NUM; O2++)
    A$2(T2[O2], _2[O2]);
}
function s(T2, t, E2, F2 = y$1) {
  const r$12 = u$2(f.get(), t, T2);
  h$1(r$12, r$12);
  for (let _2 = 0; _2 < h.NUM; ++_2) {
    const T3 = w$1(r.get(), g$1[_2], r$12);
    o(F2[_2], T3[0] / T3[3], T3[1] / T3[3], T3[2] / T3[3]);
  }
  L$1(E2, F2);
}
function L$1(T2, _2) {
  j$1(_2[l.FAR_BOTTOM_LEFT], _2[l.NEAR_BOTTOM_LEFT], _2[l.NEAR_TOP_LEFT], T2[U.LEFT]), j$1(_2[l.NEAR_BOTTOM_RIGHT], _2[l.FAR_BOTTOM_RIGHT], _2[l.FAR_TOP_RIGHT], T2[U.RIGHT]), j$1(_2[l.FAR_BOTTOM_LEFT], _2[l.FAR_BOTTOM_RIGHT], _2[l.NEAR_BOTTOM_RIGHT], T2[U.BOTTOM]), j$1(_2[l.NEAR_TOP_LEFT], _2[l.NEAR_TOP_RIGHT], _2[l.FAR_TOP_RIGHT], T2[U.TOP]), j$1(_2[l.NEAR_BOTTOM_LEFT], _2[l.NEAR_BOTTOM_RIGHT], _2[l.NEAR_TOP_RIGHT], T2[U.NEAR]), j$1(_2[l.FAR_BOTTOM_RIGHT], _2[l.FAR_BOTTOM_LEFT], _2[l.FAR_TOP_LEFT], T2[U.FAR]);
}
function i(T2, _2) {
  for (let O2 = 0; O2 < v$1.NUM; O2++) {
    const R2 = T2[O2];
    if (R2[0] * _2[0] + R2[1] * _2[1] + R2[2] * _2[2] + R2[3] >= _2[3])
      return false;
  }
  return true;
}
function a(T2, _2) {
  for (let O2 = 0; O2 < v$1.NUM; O2++) {
    const R2 = T2[O2];
    if (!G$1(R2, _2))
      return false;
  }
  return true;
}
var U, l;
!function(T2) {
  T2[T2.LEFT = 0] = "LEFT", T2[T2.RIGHT = 1] = "RIGHT", T2[T2.BOTTOM = 2] = "BOTTOM", T2[T2.TOP = 3] = "TOP", T2[T2.NEAR = 4] = "NEAR", T2[T2.FAR = 5] = "FAR";
}(U || (U = {})), function(T2) {
  T2[T2.NEAR_BOTTOM_LEFT = 0] = "NEAR_BOTTOM_LEFT", T2[T2.NEAR_BOTTOM_RIGHT = 1] = "NEAR_BOTTOM_RIGHT", T2[T2.NEAR_TOP_RIGHT = 2] = "NEAR_TOP_RIGHT", T2[T2.NEAR_TOP_LEFT = 3] = "NEAR_TOP_LEFT", T2[T2.FAR_BOTTOM_LEFT = 4] = "FAR_BOTTOM_LEFT", T2[T2.FAR_BOTTOM_RIGHT = 5] = "FAR_BOTTOM_RIGHT", T2[T2.FAR_TOP_RIGHT = 6] = "FAR_TOP_RIGHT", T2[T2.FAR_TOP_LEFT = 7] = "FAR_TOP_LEFT";
}(l || (l = {}));
({ bottom: [l.FAR_BOTTOM_RIGHT, l.NEAR_BOTTOM_RIGHT, l.NEAR_BOTTOM_LEFT, l.FAR_BOTTOM_LEFT], near: [l.NEAR_BOTTOM_LEFT, l.NEAR_BOTTOM_RIGHT, l.NEAR_TOP_RIGHT, l.NEAR_TOP_LEFT], far: [l.FAR_BOTTOM_RIGHT, l.FAR_BOTTOM_LEFT, l.FAR_TOP_LEFT, l.FAR_TOP_RIGHT], right: [l.NEAR_BOTTOM_RIGHT, l.FAR_BOTTOM_RIGHT, l.FAR_TOP_RIGHT, l.NEAR_TOP_RIGHT], left: [l.FAR_BOTTOM_LEFT, l.NEAR_BOTTOM_LEFT, l.NEAR_TOP_LEFT, l.FAR_TOP_LEFT], top: [l.FAR_TOP_LEFT, l.NEAR_TOP_LEFT, l.NEAR_TOP_RIGHT, l.FAR_TOP_RIGHT] });
var v$1, h;
!function(T2) {
  T2[T2.NUM = 6] = "NUM";
}(v$1 || (v$1 = {})), function(T2) {
  T2[T2.NUM = 8] = "NUM";
}(h || (h = {}));
const g$1 = [r$1(-1, -1, -1, 1), r$1(1, -1, -1, 1), r$1(1, 1, -1, 1), r$1(-1, 1, -1, 1), r$1(-1, -1, 1, 1), r$1(1, -1, 1, 1), r$1(1, 1, 1, 1), r$1(-1, 1, 1, 1)];
new s$2(s$1);
const y$1 = I$1();
class g {
  constructor(e2, t) {
    this._objectToBoundingSphere = e2, this._maximumObjectsPerNode = 10, this._maximumDepth = 20, this._degenerateObjects = new Set(), this._root = new O(), this._objectCount = 0, t && (t.maximumObjectsPerNode !== void 0 && (this._maximumObjectsPerNode = t.maximumObjectsPerNode), t.maximumDepth !== void 0 && (this._maximumDepth = t.maximumDepth));
  }
  get bounds() {
    return this._root.bounds;
  }
  get halfSize() {
    return this._root.halfSize;
  }
  get root() {
    return this._root.node;
  }
  get maximumObjectsPerNode() {
    return this._maximumObjectsPerNode;
  }
  get maximumDepth() {
    return this._maximumDepth;
  }
  get objectCount() {
    return this._objectCount;
  }
  destroy() {
    this._degenerateObjects.clear(), O.clearPool(), B[0] = null, w.prune(), W.prune();
  }
  add(e2, t = e2.length) {
    this._objectCount += t, this._grow(e2, t);
    const n2 = O.acquire();
    for (let o2 = 0; o2 < t; o2++) {
      const t2 = e2[o2];
      this._isDegenerate(t2) ? this._degenerateObjects.add(t2) : (n2.init(this._root), this._add(t2, n2));
    }
    O.release(n2);
  }
  remove(t, n2 = null) {
    this._objectCount -= t.length;
    const o2 = O.acquire();
    for (const r2 of t) {
      const t2 = r$2(n2) ? n2 : _(this._objectToBoundingSphere(r2), C);
      z(t2[3]) ? (o2.init(this._root), this._remove(r2, t2, o2)) : this._degenerateObjects.delete(r2);
    }
    O.release(o2), this._shrink();
  }
  update(e2, t) {
    if (!z(t[3]) && this._isDegenerate(e2))
      return;
    const n2 = R(e2);
    this.remove(n2, t), this.add(n2);
  }
  forEachAlongRay(e2, t, n2) {
    const o2 = p$2(e2, t);
    this._forEachNode(this._root, (e3) => {
      if (!this._intersectsNode(o2, e3))
        return false;
      const t2 = e3.node;
      return t2.terminals.forAll((e4) => {
        this._intersectsObject(o2, e4) && n2(e4);
      }), t2.residents !== null && t2.residents.forAll((e4) => {
        this._intersectsObject(o2, e4) && n2(e4);
      }), true;
    });
  }
  forEachAlongRayWithVerticalOffset(e2, t, n2, o2) {
    const r2 = p$2(e2, t);
    this._forEachNode(this._root, (e3) => {
      if (!this._intersectsNodeWithOffset(r2, e3, o2))
        return false;
      const t2 = e3.node;
      return t2.terminals.forAll((e4) => {
        this._intersectsObjectWithOffset(r2, e4, o2) && n2(e4);
      }), t2.residents !== null && t2.residents.forAll((e4) => {
        this._intersectsObjectWithOffset(r2, e4, o2) && n2(e4);
      }), true;
    });
  }
  forEach(e2) {
    this._forEachNode(this._root, (t) => {
      const n2 = t.node;
      return n2.terminals.forAll(e2), n2.residents !== null && n2.residents.forAll(e2), true;
    }), this._degenerateObjects.forEach(e2);
  }
  forEachDegenerateObject(e2) {
    this._degenerateObjects.forEach(e2);
  }
  findClosest(e2, t, n2, s2 = () => true, i$1 = 1 / 0) {
    let h2 = 1 / 0, a2 = 1 / 0, d2 = null;
    const c2 = E(e2, t), u2 = (o2) => {
      if (--i$1, !s2(o2))
        return;
      const r2 = this._objectToBoundingSphere(o2);
      if (!i(n2, r2))
        return;
      const c3 = M(e2, t, k$2(r2)), u3 = c3 - r2[3], f2 = c3 + r2[3];
      u3 < h2 && (h2 = u3, a2 = f2, d2 = o2);
    };
    return this._forEachNodeDepthOrdered(this._root, (s3) => {
      if (i$1 <= 0 || !i(n2, s3.bounds))
        return false;
      g$2(F, c2, s3.halfSize), u$1(F, F, s3.bounds);
      if (M(e2, t, F) > a2)
        return false;
      const h3 = s3.node;
      return h3.terminals.forAll((e3) => u2(e3)), h3.residents !== null && h3.residents.forAll((e3) => u2(e3)), true;
    }, e2, t), d2;
  }
  forEachInDepthRange(e2, t, n2, s2, i$1, h2, a2) {
    let d2 = -1 / 0, c2 = 1 / 0;
    const u2 = { setRange: (e3) => {
      n2 === g.DepthOrder.FRONT_TO_BACK ? (d2 = Math.max(d2, e3.near), c2 = Math.min(c2, e3.far)) : (d2 = Math.max(d2, -e3.far), c2 = Math.min(c2, -e3.near));
    } };
    u2.setRange(s2);
    const f2 = M(t, n2, e2), m = E(t, n2), p2 = E(t, -n2), b2 = (e3) => {
      if (!a2(e3))
        return;
      const o2 = this._objectToBoundingSphere(e3), r2 = k$2(o2), s3 = M(t, n2, r2) - f2, m2 = s3 - o2[3], p3 = s3 + o2[3];
      m2 > c2 || p3 < d2 || !i(h2, o2) || i$1(e3, u2);
    };
    this._forEachNodeDepthOrdered(this._root, (e3) => {
      if (!i(h2, e3.bounds))
        return false;
      g$2(F, m, e3.halfSize), u$1(F, F, e3.bounds);
      if (M(t, n2, F) - f2 > c2)
        return false;
      g$2(F, p2, e3.halfSize), u$1(F, F, e3.bounds);
      if (M(t, n2, F) - f2 < d2)
        return false;
      const s3 = e3.node;
      return s3.terminals.forAll((e4) => b2(e4)), s3.residents !== null && s3.residents.forAll((e4) => b2(e4)), true;
    }, t, n2);
  }
  forEachNode(e2) {
    this._forEachNode(this._root, (t) => e2(t.node, t.bounds, t.halfSize));
  }
  forEachNeighbor(e2, t) {
    const n2 = T$1(t), o2 = k$2(t), r2 = (t2) => {
      const r3 = this._objectToBoundingSphere(t2), i3 = T$1(r3), h3 = n2 + i3;
      return !(p$3(k$2(r3), o2) - h3 * h3 <= 0) || e2(t2);
    };
    let i2 = true;
    const h2 = (e3) => {
      i2 && (i2 = r2(e3));
    };
    this._forEachNode(this._root, (e3) => {
      const t2 = T$1(e3.bounds), r3 = n2 + t2;
      if (p$3(k$2(e3.bounds), o2) - r3 * r3 > 0)
        return false;
      const a2 = e3.node;
      return a2.terminals.forAll(h2), i2 && a2.residents !== null && a2.residents.forAll(h2), i2;
    }), i2 && this.forEachDegenerateObject(h2);
  }
  _intersectsNode(e2, t) {
    return x(t.bounds, 2 * -t.halfSize, k), x(t.bounds, 2 * t.halfSize, q), c(e2.origin, e2.direction, k, q);
  }
  _intersectsNodeWithOffset(e2, t, n2) {
    return x(t.bounds, 2 * -t.halfSize, k), x(t.bounds, 2 * t.halfSize, q), n2.applyToMinMax(k, q), c(e2.origin, e2.direction, k, q);
  }
  _intersectsObject(e2, t) {
    const n2 = this._objectToBoundingSphere(t);
    return !(n2[3] > 0) || V$1(n2, e2);
  }
  _intersectsObjectWithOffset(e2, t, n2) {
    const o2 = this._objectToBoundingSphere(t);
    return !(o2[3] > 0) || V$1(n2.applyToBoundingSphere(o2), e2);
  }
  _forEachNode(e2, t) {
    let n2 = O.acquire().init(e2);
    const o2 = [n2];
    for (; o2.length !== 0; ) {
      if (n2 = o2.pop(), t(n2) && !n2.isLeaf())
        for (let e3 = 0; e3 < n2.node.children.length; e3++) {
          n2.node.children[e3] && o2.push(O.acquire().init(n2).advance(e3));
        }
      O.release(n2);
    }
  }
  _forEachNodeDepthOrdered(e2, t, n2, o2 = g.DepthOrder.FRONT_TO_BACK) {
    let r2 = O.acquire().init(e2);
    const s2 = [r2];
    for (T(n2, o2, V); s2.length !== 0; ) {
      if (r2 = s2.pop(), t(r2) && !r2.isLeaf())
        for (let e3 = 7; e3 >= 0; --e3) {
          const t2 = V[e3];
          r2.node.children[t2] && s2.push(O.acquire().init(r2).advance(t2));
        }
      O.release(r2);
    }
  }
  _remove(e2, t, n2) {
    w.clear();
    const o2 = n2.advanceTo(t, (e3, t2) => {
      w.push(e3.node), w.push(t2);
    }) ? n2.node.terminals : n2.node.residents;
    if (o2.removeUnordered(e2), o2.length === 0)
      for (let r2 = w.length - 2; r2 >= 0; r2 -= 2) {
        const e3 = w.data[r2], t2 = w.data[r2 + 1];
        if (!this._purge(e3, t2))
          break;
      }
  }
  _nodeIsEmpty(e2) {
    if (e2.terminals.length !== 0)
      return false;
    if (e2.residents !== null)
      return e2.residents.length === 0;
    for (let t = 0; t < e2.children.length; t++)
      if (e2.children[t])
        return false;
    return true;
  }
  _purge(e2, t) {
    return t >= 0 && (e2.children[t] = null), !!this._nodeIsEmpty(e2) && (e2.residents === null && (e2.residents = new l$1({ shrink: true })), true);
  }
  _add(e2, t) {
    t.advanceTo(this._objectToBoundingSphere(e2)) ? t.node.terminals.push(e2) : (t.node.residents.push(e2), t.node.residents.length > this._maximumObjectsPerNode && t.depth < this._maximumDepth && this._split(t));
  }
  _split(e2) {
    const t = e2.node.residents;
    e2.node.residents = null;
    for (let n2 = 0; n2 < t.length; n2++) {
      const o2 = O.acquire().init(e2);
      this._add(t.getItemAt(n2), o2), O.release(o2);
    }
  }
  _grow(e2, t) {
    if (t !== 0 && (N(e2, t, (e3) => this._objectToBoundingSphere(e3), I), z(I[3]) && !this._fitsInsideTree(I)))
      if (this._nodeIsEmpty(this._root.node))
        _(I, this._root.bounds), this._root.halfSize = 1.25 * I[3];
      else {
        const e3 = this._rootBoundsForRootAsSubNode(I);
        this._placingRootViolatesMaxDepth(e3) ? this._rebuildTree(I, e3) : this._growRootAsSubNode(e3), O.release(e3);
      }
  }
  _rebuildTree(e2, t) {
    r$3(P, t.bounds), P[3] = t.halfSize, N([e2, P], 2, (e3) => e3, L);
    const n2 = O.acquire().init(this._root);
    this._root.initFrom(null, L, 1.25 * L[3]), this._forEachNode(n2, (e3) => (this.add(e3.node.terminals.data, e3.node.terminals.length), e3.node.residents !== null && this.add(e3.node.residents.data, e3.node.residents.length), true)), O.release(n2);
  }
  _placingRootViolatesMaxDepth(e2) {
    const t = Math.log(e2.halfSize / this._root.halfSize) * Math.LOG2E;
    let n2 = 0;
    return this._forEachNode(this._root, (e3) => (n2 = Math.max(n2, e3.depth), n2 + t <= this._maximumDepth)), n2 + t > this._maximumDepth;
  }
  _rootBoundsForRootAsSubNode(e2) {
    const t = e2[3], n2 = e2;
    let o2 = -1 / 0;
    const r2 = this._root.bounds, s2 = this._root.halfSize;
    for (let i2 = 0; i2 < 3; i2++) {
      const e3 = r2[i2] - s2 - (n2[i2] - t), h2 = n2[i2] + t - (r2[i2] + s2), a2 = Math.max(0, Math.ceil(e3 / (2 * s2))), d2 = Math.max(0, Math.ceil(h2 / (2 * s2))) + 1, l2 = 2 ** Math.ceil(Math.log(a2 + d2) * Math.LOG2E);
      o2 = Math.max(o2, l2), K[i2].min = a2, K[i2].max = d2;
    }
    for (let i2 = 0; i2 < 3; i2++) {
      let e3 = K[i2].min, t2 = K[i2].max;
      const n3 = (o2 - (e3 + t2)) / 2;
      e3 += Math.ceil(n3), t2 += Math.floor(n3);
      const h2 = r2[i2] - s2 - e3 * s2 * 2;
      y[i2] = h2 + (t2 + e3) * s2;
    }
    return y[3] = o2 * s2 * v, O.acquire().initFrom(null, y, o2 * s2, 0);
  }
  _growRootAsSubNode(e2) {
    const t = this._root.node;
    r$3(I, this._root.bounds), I[3] = this._root.halfSize, this._root.init(e2), e2.advanceTo(I, null, true), e2.node.children = t.children, e2.node.residents = t.residents, e2.node.terminals = t.terminals;
  }
  _shrink() {
    for (; ; ) {
      const e2 = this._findShrinkIndex();
      if (e2 === -1)
        break;
      this._root.advance(e2), this._root.depth = 0;
    }
  }
  _findShrinkIndex() {
    if (this._root.node.terminals.length !== 0 || this._root.isLeaf())
      return -1;
    let e2 = null;
    const t = this._root.node.children;
    let n2 = 0, o2 = 0;
    for (; o2 < t.length && e2 == null; )
      n2 = o2++, e2 = t[n2];
    for (; o2 < t.length; )
      if (t[o2++])
        return -1;
    return n2;
  }
  _isDegenerate(e2) {
    return !z(this._objectToBoundingSphere(e2)[3]);
  }
  _fitsInsideTree(e2) {
    const t = this._root.bounds, n2 = this._root.halfSize;
    return e2[3] <= n2 && e2[0] >= t[0] - n2 && e2[0] <= t[0] + n2 && e2[1] >= t[1] - n2 && e2[1] <= t[1] + n2 && e2[2] >= t[2] - n2 && e2[2] <= t[2] + n2;
  }
}
class O {
  constructor() {
    this.bounds = R$1(), this.halfSize = 0, this.initFrom(null, null, 0, 0);
  }
  init(e2) {
    return this.initFrom(e2.node, e2.bounds, e2.halfSize, e2.depth);
  }
  initFrom(t, n2, o2, r2 = this.depth) {
    return this.node = r$2(t) ? t : O.createEmptyNode(), r$2(n2) && _(n2, this.bounds), this.halfSize = o2, this.depth = r2, this;
  }
  advance(e2) {
    let t = this.node.children[e2];
    t || (t = O.createEmptyNode(), this.node.children[e2] = t), this.node = t, this.halfSize /= 2, this.depth++;
    const n2 = A[e2];
    return this.bounds[0] += n2[0] * this.halfSize, this.bounds[1] += n2[1] * this.halfSize, this.bounds[2] += n2[2] * this.halfSize, this.bounds[3] = this.halfSize * v, this;
  }
  advanceTo(e2, t, n2 = false) {
    for (; ; ) {
      if (this.isTerminalFor(e2))
        return t && t(this, -1), true;
      if (this.isLeaf()) {
        if (!n2)
          return t && t(this, -1), false;
        this.node.residents = null;
      }
      const o2 = this._childIndex(e2);
      t && t(this, o2), this.advance(o2);
    }
  }
  isLeaf() {
    return this.node.residents != null;
  }
  isTerminalFor(e2) {
    return e2[3] > this.halfSize / 2;
  }
  _childIndex(e2) {
    const t = this.bounds;
    return (t[0] < e2[0] ? 1 : 0) + (t[1] < e2[1] ? 2 : 0) + (t[2] < e2[2] ? 4 : 0);
  }
  static createEmptyNode() {
    return { children: [null, null, null, null, null, null, null, null], terminals: new l$1({ shrink: true }), residents: new l$1({ shrink: true }) };
  }
  static acquire() {
    return O._pool.acquire();
  }
  static release(e2) {
    O._pool.release(e2);
  }
  static clearPool() {
    O._pool.prune();
  }
}
function j(e2, t) {
  e2[0] = Math.min(e2[0], t[0] - t[3]), e2[1] = Math.min(e2[1], t[1] - t[3]), e2[2] = Math.min(e2[2], t[2] - t[3]);
}
function S(e2, t) {
  e2[0] = Math.max(e2[0], t[0] + t[3]), e2[1] = Math.max(e2[1], t[1] + t[3]), e2[2] = Math.max(e2[2], t[2] + t[3]);
}
function x(e2, t, n2) {
  n2[0] = e2[0] + t, n2[1] = e2[1] + t, n2[2] = e2[2] + t;
}
function N(e2, t, n2, o2) {
  if (t === 1) {
    const t2 = n2(e2[0]);
    _(t2, o2);
  } else {
    k[0] = 1 / 0, k[1] = 1 / 0, k[2] = 1 / 0, q[0] = -1 / 0, q[1] = -1 / 0, q[2] = -1 / 0;
    for (let o3 = 0; o3 < t; o3++) {
      const t2 = n2(e2[o3]);
      z(t2[3]) && (j(k, t2), S(q, t2));
    }
    A$3(o2, k, q, 0.5), o2[3] = Math.max(q[0] - k[0], q[1] - k[1], q[2] - k[2]) / 2;
  }
}
function T(e2, t, n2) {
  if (!W.length)
    for (let o2 = 0; o2 < 8; ++o2)
      W.push({ index: 0, distance: 0 });
  for (let o2 = 0; o2 < 8; ++o2) {
    const n3 = A[o2];
    W.data[o2].index = o2, W.data[o2].distance = M(e2, t, n3);
  }
  W.sort((e3, t2) => e3.distance - t2.distance);
  for (let o2 = 0; o2 < 8; ++o2)
    n2[o2] = W.data[o2].index;
}
function E(e2, t) {
  let n2, o2 = 1 / 0;
  for (let r2 = 0; r2 < 8; ++r2) {
    const s2 = M(e2, t, D[r2]);
    s2 < o2 && (o2 = s2, n2 = D[r2]);
  }
  return n2;
}
function M(e2, t, n2) {
  return t * (e2[0] * n2[0] + e2[1] * n2[1] + e2[2] * n2[2]);
}
function z(e2) {
  return !isNaN(e2) && e2 !== -1 / 0 && e2 !== 1 / 0 && e2 > 0;
}
O._pool = new e(O), function(e2) {
  var t;
  (t = e2.DepthOrder || (e2.DepthOrder = {}))[t.FRONT_TO_BACK = 1] = "FRONT_TO_BACK", t[t.BACK_TO_FRONT = -1] = "BACK_TO_FRONT";
}(g || (g = {}));
const A = [r$4(-1, -1, -1), r$4(1, -1, -1), r$4(-1, 1, -1), r$4(1, 1, -1), r$4(-1, -1, 1), r$4(1, -1, 1), r$4(-1, 1, 1), r$4(1, 1, 1)], D = [r$4(-1, -1, -1), r$4(-1, -1, 1), r$4(-1, 1, -1), r$4(-1, 1, 1), r$4(1, -1, -1), r$4(1, -1, 1), r$4(1, 1, -1), r$4(1, 1, 1)], v = Math.sqrt(3), B = [null];
function R(e2) {
  return B[0] = e2, B;
}
const y = R$1(), F = n(), k = n(), q = n(), w = new l$1(), C = R$1(), I = R$1(), P = R$1(), L = R$1(), K = [{ min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }], W = new l$1(), V = [0, 0, 0, 0, 0, 0, 0, 0], G = g;
export { A$1 as A, G, H, U, a, s as b, p, s$1 as s, u, v$2 as v };
