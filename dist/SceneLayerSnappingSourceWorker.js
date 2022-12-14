import { b2 as e, eP as l$1, a as r, a5 as g$1, f0 as u, gt as p$1, eU as r$1, gu as A$1, ab as r$2, E as n, gv as q$1, e$ as x$1, $ as e$1, a1 as n$1, l as f, t as t$1, b4 as i$1, fe as t$2 } from "./index.js";
import { c, v as v$2, b, j as j$2 } from "./Util2.js";
import { s as s$1, d, _, p, T as T$1, k as k$1, V as V$1, R as R$1, N as N$1 } from "./sphere.js";
import { q as q$2 } from "./QueryEngineResult.js";
import "./plane.js";
import { m } from "./edgeProcessing.js";
import "vue";
import "./mat3f64.js";
import "./mat4f64.js";
import "./quatf64.js";
import "./quantizationUtils.js";
import "./WhereClause.js";
import "./utils3.js";
import "./generateRendererUtils.js";
import "./projectionSupport.js";
import "./json.js";
import "./utils4.js";
import "./deduplicate.js";
import "./InterleavedLayout.js";
import "./BufferView.js";
import "./types.js";
import "./VertexAttribute.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
function s(r2) {
  return r2 ? { ray: d(r2.ray), c0: r2.c0, c1: r2.c1 } : { ray: d(), c0: 0, c1: Number.MAX_VALUE };
}
new s$1(() => s());
function i(T2, _2) {
  for (let O2 = 0; O2 < v$1.NUM; O2++) {
    const R2 = T2[O2];
    if (R2[0] * _2[0] + R2[1] * _2[1] + R2[2] * _2[2] + R2[3] >= _2[3])
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
new s$1(s);
class g {
  constructor(e2, t2) {
    this._objectToBoundingSphere = e2, this._maximumObjectsPerNode = 10, this._maximumDepth = 20, this._degenerateObjects = new Set(), this._root = new O(), this._objectCount = 0, t2 && (t2.maximumObjectsPerNode !== void 0 && (this._maximumObjectsPerNode = t2.maximumObjectsPerNode), t2.maximumDepth !== void 0 && (this._maximumDepth = t2.maximumDepth));
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
  add(e2, t2 = e2.length) {
    this._objectCount += t2, this._grow(e2, t2);
    const n2 = O.acquire();
    for (let o = 0; o < t2; o++) {
      const t3 = e2[o];
      this._isDegenerate(t3) ? this._degenerateObjects.add(t3) : (n2.init(this._root), this._add(t3, n2));
    }
    O.release(n2);
  }
  remove(t2, n2 = null) {
    this._objectCount -= t2.length;
    const o = O.acquire();
    for (const r$12 of t2) {
      const t3 = r(n2) ? n2 : _(this._objectToBoundingSphere(r$12), C$1);
      z(t3[3]) ? (o.init(this._root), this._remove(r$12, t3, o)) : this._degenerateObjects.delete(r$12);
    }
    O.release(o), this._shrink();
  }
  update(e2, t2) {
    if (!z(t2[3]) && this._isDegenerate(e2))
      return;
    const n2 = R(e2);
    this.remove(n2, t2), this.add(n2);
  }
  forEachAlongRay(e2, t2, n2) {
    const o = p(e2, t2);
    this._forEachNode(this._root, (e3) => {
      if (!this._intersectsNode(o, e3))
        return false;
      const t3 = e3.node;
      return t3.terminals.forAll((e4) => {
        this._intersectsObject(o, e4) && n2(e4);
      }), t3.residents !== null && t3.residents.forAll((e4) => {
        this._intersectsObject(o, e4) && n2(e4);
      }), true;
    });
  }
  forEachAlongRayWithVerticalOffset(e2, t2, n2, o) {
    const r2 = p(e2, t2);
    this._forEachNode(this._root, (e3) => {
      if (!this._intersectsNodeWithOffset(r2, e3, o))
        return false;
      const t3 = e3.node;
      return t3.terminals.forAll((e4) => {
        this._intersectsObjectWithOffset(r2, e4, o) && n2(e4);
      }), t3.residents !== null && t3.residents.forAll((e4) => {
        this._intersectsObjectWithOffset(r2, e4, o) && n2(e4);
      }), true;
    });
  }
  forEach(e2) {
    this._forEachNode(this._root, (t2) => {
      const n2 = t2.node;
      return n2.terminals.forAll(e2), n2.residents !== null && n2.residents.forAll(e2), true;
    }), this._degenerateObjects.forEach(e2);
  }
  forEachDegenerateObject(e2) {
    this._degenerateObjects.forEach(e2);
  }
  findClosest(e2, t2, n2, s2 = () => true, i$12 = 1 / 0) {
    let h2 = 1 / 0, a2 = 1 / 0, d2 = null;
    const c2 = E$1(e2, t2), u$1 = (o) => {
      if (--i$12, !s2(o))
        return;
      const r2 = this._objectToBoundingSphere(o);
      if (!i(n2, r2))
        return;
      const c3 = M(e2, t2, k$1(r2)), u2 = c3 - r2[3], f2 = c3 + r2[3];
      u2 < h2 && (h2 = u2, a2 = f2, d2 = o);
    };
    return this._forEachNodeDepthOrdered(this._root, (s3) => {
      if (i$12 <= 0 || !i(n2, s3.bounds))
        return false;
      g$1(F, c2, s3.halfSize), u(F, F, s3.bounds);
      if (M(e2, t2, F) > a2)
        return false;
      const h3 = s3.node;
      return h3.terminals.forAll((e3) => u$1(e3)), h3.residents !== null && h3.residents.forAll((e3) => u$1(e3)), true;
    }, e2, t2), d2;
  }
  forEachInDepthRange(e2, t2, n2, s2, i$12, h2, a2) {
    let d2 = -1 / 0, c2 = 1 / 0;
    const u$1 = { setRange: (e3) => {
      n2 === g.DepthOrder.FRONT_TO_BACK ? (d2 = Math.max(d2, e3.near), c2 = Math.min(c2, e3.far)) : (d2 = Math.max(d2, -e3.far), c2 = Math.min(c2, -e3.near));
    } };
    u$1.setRange(s2);
    const f2 = M(t2, n2, e2), m2 = E$1(t2, n2), p2 = E$1(t2, -n2), b2 = (e3) => {
      if (!a2(e3))
        return;
      const o = this._objectToBoundingSphere(e3), r2 = k$1(o), s3 = M(t2, n2, r2) - f2, m3 = s3 - o[3], p3 = s3 + o[3];
      m3 > c2 || p3 < d2 || !i(h2, o) || i$12(e3, u$1);
    };
    this._forEachNodeDepthOrdered(this._root, (e3) => {
      if (!i(h2, e3.bounds))
        return false;
      g$1(F, m2, e3.halfSize), u(F, F, e3.bounds);
      if (M(t2, n2, F) - f2 > c2)
        return false;
      g$1(F, p2, e3.halfSize), u(F, F, e3.bounds);
      if (M(t2, n2, F) - f2 < d2)
        return false;
      const s3 = e3.node;
      return s3.terminals.forAll((e4) => b2(e4)), s3.residents !== null && s3.residents.forAll((e4) => b2(e4)), true;
    }, t2, n2);
  }
  forEachNode(e2) {
    this._forEachNode(this._root, (t2) => e2(t2.node, t2.bounds, t2.halfSize));
  }
  forEachNeighbor(e2, t2) {
    const n2 = T$1(t2), o = k$1(t2), r2 = (t3) => {
      const r3 = this._objectToBoundingSphere(t3), i3 = T$1(r3), h3 = n2 + i3;
      return !(p$1(k$1(r3), o) - h3 * h3 <= 0) || e2(t3);
    };
    let i2 = true;
    const h2 = (e3) => {
      i2 && (i2 = r2(e3));
    };
    this._forEachNode(this._root, (e3) => {
      const t3 = T$1(e3.bounds), r3 = n2 + t3;
      if (p$1(k$1(e3.bounds), o) - r3 * r3 > 0)
        return false;
      const a2 = e3.node;
      return a2.terminals.forAll(h2), i2 && a2.residents !== null && a2.residents.forAll(h2), i2;
    }), i2 && this.forEachDegenerateObject(h2);
  }
  _intersectsNode(e2, t2) {
    return x(t2.bounds, 2 * -t2.halfSize, k), x(t2.bounds, 2 * t2.halfSize, q), c(e2.origin, e2.direction, k, q);
  }
  _intersectsNodeWithOffset(e2, t2, n2) {
    return x(t2.bounds, 2 * -t2.halfSize, k), x(t2.bounds, 2 * t2.halfSize, q), n2.applyToMinMax(k, q), c(e2.origin, e2.direction, k, q);
  }
  _intersectsObject(e2, t2) {
    const n2 = this._objectToBoundingSphere(t2);
    return !(n2[3] > 0) || V$1(n2, e2);
  }
  _intersectsObjectWithOffset(e2, t2, n2) {
    const o = this._objectToBoundingSphere(t2);
    return !(o[3] > 0) || V$1(n2.applyToBoundingSphere(o), e2);
  }
  _forEachNode(e2, t2) {
    let n2 = O.acquire().init(e2);
    const o = [n2];
    for (; o.length !== 0; ) {
      if (n2 = o.pop(), t2(n2) && !n2.isLeaf())
        for (let e3 = 0; e3 < n2.node.children.length; e3++) {
          n2.node.children[e3] && o.push(O.acquire().init(n2).advance(e3));
        }
      O.release(n2);
    }
  }
  _forEachNodeDepthOrdered(e2, t2, n2, o = g.DepthOrder.FRONT_TO_BACK) {
    let r2 = O.acquire().init(e2);
    const s2 = [r2];
    for (T(n2, o, V); s2.length !== 0; ) {
      if (r2 = s2.pop(), t2(r2) && !r2.isLeaf())
        for (let e3 = 7; e3 >= 0; --e3) {
          const t3 = V[e3];
          r2.node.children[t3] && s2.push(O.acquire().init(r2).advance(t3));
        }
      O.release(r2);
    }
  }
  _remove(e2, t2, n2) {
    w.clear();
    const o = n2.advanceTo(t2, (e3, t3) => {
      w.push(e3.node), w.push(t3);
    }) ? n2.node.terminals : n2.node.residents;
    if (o.removeUnordered(e2), o.length === 0)
      for (let r2 = w.length - 2; r2 >= 0; r2 -= 2) {
        const e3 = w.data[r2], t3 = w.data[r2 + 1];
        if (!this._purge(e3, t3))
          break;
      }
  }
  _nodeIsEmpty(e2) {
    if (e2.terminals.length !== 0)
      return false;
    if (e2.residents !== null)
      return e2.residents.length === 0;
    for (let t2 = 0; t2 < e2.children.length; t2++)
      if (e2.children[t2])
        return false;
    return true;
  }
  _purge(e2, t2) {
    return t2 >= 0 && (e2.children[t2] = null), !!this._nodeIsEmpty(e2) && (e2.residents === null && (e2.residents = new l$1({ shrink: true })), true);
  }
  _add(e2, t2) {
    t2.advanceTo(this._objectToBoundingSphere(e2)) ? t2.node.terminals.push(e2) : (t2.node.residents.push(e2), t2.node.residents.length > this._maximumObjectsPerNode && t2.depth < this._maximumDepth && this._split(t2));
  }
  _split(e2) {
    const t2 = e2.node.residents;
    e2.node.residents = null;
    for (let n2 = 0; n2 < t2.length; n2++) {
      const o = O.acquire().init(e2);
      this._add(t2.getItemAt(n2), o), O.release(o);
    }
  }
  _grow(e2, t2) {
    if (t2 !== 0 && (N(e2, t2, (e3) => this._objectToBoundingSphere(e3), I), z(I[3]) && !this._fitsInsideTree(I)))
      if (this._nodeIsEmpty(this._root.node))
        _(I, this._root.bounds), this._root.halfSize = 1.25 * I[3];
      else {
        const e3 = this._rootBoundsForRootAsSubNode(I);
        this._placingRootViolatesMaxDepth(e3) ? this._rebuildTree(I, e3) : this._growRootAsSubNode(e3), O.release(e3);
      }
  }
  _rebuildTree(e2, t2) {
    r$1(P, t2.bounds), P[3] = t2.halfSize, N([e2, P], 2, (e3) => e3, L);
    const n2 = O.acquire().init(this._root);
    this._root.initFrom(null, L, 1.25 * L[3]), this._forEachNode(n2, (e3) => (this.add(e3.node.terminals.data, e3.node.terminals.length), e3.node.residents !== null && this.add(e3.node.residents.data, e3.node.residents.length), true)), O.release(n2);
  }
  _placingRootViolatesMaxDepth(e2) {
    const t2 = Math.log(e2.halfSize / this._root.halfSize) * Math.LOG2E;
    let n2 = 0;
    return this._forEachNode(this._root, (e3) => (n2 = Math.max(n2, e3.depth), n2 + t2 <= this._maximumDepth)), n2 + t2 > this._maximumDepth;
  }
  _rootBoundsForRootAsSubNode(e2) {
    const t2 = e2[3], n2 = e2;
    let o = -1 / 0;
    const r2 = this._root.bounds, s2 = this._root.halfSize;
    for (let i2 = 0; i2 < 3; i2++) {
      const e3 = r2[i2] - s2 - (n2[i2] - t2), h2 = n2[i2] + t2 - (r2[i2] + s2), a2 = Math.max(0, Math.ceil(e3 / (2 * s2))), d2 = Math.max(0, Math.ceil(h2 / (2 * s2))) + 1, l2 = 2 ** Math.ceil(Math.log(a2 + d2) * Math.LOG2E);
      o = Math.max(o, l2), K[i2].min = a2, K[i2].max = d2;
    }
    for (let i2 = 0; i2 < 3; i2++) {
      let e3 = K[i2].min, t3 = K[i2].max;
      const n3 = (o - (e3 + t3)) / 2;
      e3 += Math.ceil(n3), t3 += Math.floor(n3);
      const h2 = r2[i2] - s2 - e3 * s2 * 2;
      y$1[i2] = h2 + (t3 + e3) * s2;
    }
    return y$1[3] = o * s2 * v, O.acquire().initFrom(null, y$1, o * s2, 0);
  }
  _growRootAsSubNode(e2) {
    const t2 = this._root.node;
    r$1(I, this._root.bounds), I[3] = this._root.halfSize, this._root.init(e2), e2.advanceTo(I, null, true), e2.node.children = t2.children, e2.node.residents = t2.residents, e2.node.terminals = t2.terminals;
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
    const t2 = this._root.node.children;
    let n2 = 0, o = 0;
    for (; o < t2.length && e2 == null; )
      n2 = o++, e2 = t2[n2];
    for (; o < t2.length; )
      if (t2[o++])
        return -1;
    return n2;
  }
  _isDegenerate(e2) {
    return !z(this._objectToBoundingSphere(e2)[3]);
  }
  _fitsInsideTree(e2) {
    const t2 = this._root.bounds, n2 = this._root.halfSize;
    return e2[3] <= n2 && e2[0] >= t2[0] - n2 && e2[0] <= t2[0] + n2 && e2[1] >= t2[1] - n2 && e2[1] <= t2[1] + n2 && e2[2] >= t2[2] - n2 && e2[2] <= t2[2] + n2;
  }
}
class O {
  constructor() {
    this.bounds = R$1(), this.halfSize = 0, this.initFrom(null, null, 0, 0);
  }
  init(e2) {
    return this.initFrom(e2.node, e2.bounds, e2.halfSize, e2.depth);
  }
  initFrom(t2, n2, o, r$12 = this.depth) {
    return this.node = r(t2) ? t2 : O.createEmptyNode(), r(n2) && _(n2, this.bounds), this.halfSize = o, this.depth = r$12, this;
  }
  advance(e2) {
    let t2 = this.node.children[e2];
    t2 || (t2 = O.createEmptyNode(), this.node.children[e2] = t2), this.node = t2, this.halfSize /= 2, this.depth++;
    const n2 = A[e2];
    return this.bounds[0] += n2[0] * this.halfSize, this.bounds[1] += n2[1] * this.halfSize, this.bounds[2] += n2[2] * this.halfSize, this.bounds[3] = this.halfSize * v, this;
  }
  advanceTo(e2, t2, n2 = false) {
    for (; ; ) {
      if (this.isTerminalFor(e2))
        return t2 && t2(this, -1), true;
      if (this.isLeaf()) {
        if (!n2)
          return t2 && t2(this, -1), false;
        this.node.residents = null;
      }
      const o = this._childIndex(e2);
      t2 && t2(this, o), this.advance(o);
    }
  }
  isLeaf() {
    return this.node.residents != null;
  }
  isTerminalFor(e2) {
    return e2[3] > this.halfSize / 2;
  }
  _childIndex(e2) {
    const t2 = this.bounds;
    return (t2[0] < e2[0] ? 1 : 0) + (t2[1] < e2[1] ? 2 : 0) + (t2[2] < e2[2] ? 4 : 0);
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
function j$1(e2, t2) {
  e2[0] = Math.min(e2[0], t2[0] - t2[3]), e2[1] = Math.min(e2[1], t2[1] - t2[3]), e2[2] = Math.min(e2[2], t2[2] - t2[3]);
}
function S(e2, t2) {
  e2[0] = Math.max(e2[0], t2[0] + t2[3]), e2[1] = Math.max(e2[1], t2[1] + t2[3]), e2[2] = Math.max(e2[2], t2[2] + t2[3]);
}
function x(e2, t2, n2) {
  n2[0] = e2[0] + t2, n2[1] = e2[1] + t2, n2[2] = e2[2] + t2;
}
function N(e2, t2, n2, o) {
  if (t2 === 1) {
    const t3 = n2(e2[0]);
    _(t3, o);
  } else {
    k[0] = 1 / 0, k[1] = 1 / 0, k[2] = 1 / 0, q[0] = -1 / 0, q[1] = -1 / 0, q[2] = -1 / 0;
    for (let o2 = 0; o2 < t2; o2++) {
      const t3 = n2(e2[o2]);
      z(t3[3]) && (j$1(k, t3), S(q, t3));
    }
    A$1(o, k, q, 0.5), o[3] = Math.max(q[0] - k[0], q[1] - k[1], q[2] - k[2]) / 2;
  }
}
function T(e2, t2, n2) {
  if (!W.length)
    for (let o = 0; o < 8; ++o)
      W.push({ index: 0, distance: 0 });
  for (let o = 0; o < 8; ++o) {
    const n3 = A[o];
    W.data[o].index = o, W.data[o].distance = M(e2, t2, n3);
  }
  W.sort((e3, t3) => e3.distance - t3.distance);
  for (let o = 0; o < 8; ++o)
    n2[o] = W.data[o].index;
}
function E$1(e2, t2) {
  let n2, o = 1 / 0;
  for (let r2 = 0; r2 < 8; ++r2) {
    const s2 = M(e2, t2, D[r2]);
    s2 < o && (o = s2, n2 = D[r2]);
  }
  return n2;
}
function M(e2, t2, n2) {
  return t2 * (e2[0] * n2[0] + e2[1] * n2[1] + e2[2] * n2[2]);
}
function z(e2) {
  return !isNaN(e2) && e2 !== -1 / 0 && e2 !== 1 / 0 && e2 > 0;
}
O._pool = new e(O), function(e2) {
  var t2;
  (t2 = e2.DepthOrder || (e2.DepthOrder = {}))[t2.FRONT_TO_BACK = 1] = "FRONT_TO_BACK", t2[t2.BACK_TO_FRONT = -1] = "BACK_TO_FRONT";
}(g || (g = {}));
const A = [r$2(-1, -1, -1), r$2(1, -1, -1), r$2(-1, 1, -1), r$2(1, 1, -1), r$2(-1, -1, 1), r$2(1, -1, 1), r$2(-1, 1, 1), r$2(1, 1, 1)], D = [r$2(-1, -1, -1), r$2(-1, -1, 1), r$2(-1, 1, -1), r$2(-1, 1, 1), r$2(1, -1, -1), r$2(1, -1, 1), r$2(1, 1, -1), r$2(1, 1, 1)], v = Math.sqrt(3), B = [null];
function R(e2) {
  return B[0] = e2, B;
}
const y$1 = R$1(), F = n(), k = n(), q = n(), w = new l$1(), C$1 = R$1(), I = R$1(), P = R$1(), L = R$1(), K = [{ min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }], W = new l$1(), V = [0, 0, 0, 0, 0, 0, 0, 0], G = g;
const t = 1e3;
function a(t2, a2, e2) {
  const i2 = R$1(), m2 = k$1(i2);
  return q$1(m2, m2, t2, 0.5), q$1(m2, m2, a2, 0.5), i2[3] = x$1(m2, t2), u(m2, m2, e2), i2;
}
let j = class {
  constructor() {
    this._idToComponent = new Map(), this._components = new G((e2) => e2.bounds), this._edges = new G((e2) => e2.bounds), this._tmpLineSegment = v$2(), this._tmpP1 = n(), this._tmpP2 = n(), this._tmpP3 = n(), this.remoteClient = null;
  }
  async fetchCandidates(e2, t$12) {
    await Promise.resolve(), f(t$12), await this._ensureEdgeLocations(e2, t$12);
    const s2 = [];
    return this._edges.forEachNeighbor((t$13) => (this._addCandidates(e2, t$13, s2), s2.length < t), e2.bounds), { result: { candidates: s2 } };
  }
  async _ensureEdgeLocations(e2, o) {
    const n2 = [];
    if (this._components.forEachNeighbor((e3) => {
      if (t$1(e3.info)) {
        const { id: t2, uid: s2 } = e3;
        n2.push({ id: t2, uid: s2 });
      }
      return true;
    }, e2.bounds), !n2.length)
      return;
    const i2 = { components: n2 }, r2 = await this.remoteClient.invoke("fetchAllEdgeLocations", i2, i$1(o, {}));
    for (const t2 of r2.components)
      this._setFetchEdgeLocations(t2);
  }
  async add(e2) {
    const t2 = new E(e2.id, e2.bounds);
    return this._idToComponent.set(t2.id, t2), this._components.add([t2]), { result: {} };
  }
  async remove(e2) {
    const t2 = this._idToComponent.get(e2.id);
    if (t2) {
      const e3 = [];
      this._edges.forEachNeighbor((s2) => (s2.component === t2 && e3.push(s2), true), t2.bounds), this._edges.remove(e3), this._components.remove([t2]), this._idToComponent.delete(t2.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e2) {
    const s2 = this._idToComponent.get(e2.id);
    if (t$1(s2) || e2.uid !== s2.uid)
      return;
    const o = m.createView(e2.locations), n$12 = new Array(o.count), i2 = n(), r2 = n();
    for (let t2 = 0; t2 < o.count; t2++) {
      o.position0.getVec(t2, i2), o.position1.getVec(t2, r2);
      const d2 = a(i2, r2, e2.origin), c3 = new C(s2, t2, d2);
      n$12[t2] = c3;
    }
    this._edges.add(n$12);
    const { objectIds: c2, origin: a$1 } = e2;
    s2.info = { locations: o, objectIds: c2, origin: a$1 };
  }
  _addCandidates(e2, t2, s2) {
    const { locations: o, origin: n2, objectIds: r2 } = t2.component.info, d2 = o.position0.getVec(t2.index, this._tmpP1), c2 = o.position1.getVec(t2.index, this._tmpP2);
    u(d2, d2, n2), u(c2, c2, n2);
    const a2 = r2[o.componentIndex.get(t2.index)];
    this._addEdgeCandidate(e2, a2, d2, c2, s2), this._addVertexCandidate(e2, a2, d2, s2), this._addVertexCandidate(e2, a2, c2, s2);
  }
  _addEdgeCandidate(e2, t2, s2, o, n2) {
    if (!(e2.types & q$2.EDGE))
      return;
    const i2 = k$1(e2.bounds), d2 = b(s2, o, this._tmpLineSegment), a2 = j$2(d2, i2, this._tmpP3);
    if (!N$1(e2.bounds, a2))
      return null;
    n2.push({ type: "edge", objectId: t2, target: t$2(a2), distance: x$1(i2, a2), start: t$2(s2), end: t$2(o) });
  }
  _addVertexCandidate(e2, t2, s2, o) {
    if (!(e2.types & q$2.VERTEX))
      return;
    const n2 = k$1(e2.bounds);
    if (!N$1(e2.bounds, s2))
      return null;
    o.push({ type: "vertex", objectId: t2, target: t$2(s2), distance: x$1(n2, s2) });
  }
};
j = e$1([n$1("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], j);
const y = j;
class E {
  constructor(e2, t2) {
    this.id = e2, this.bounds = t2, this.info = null, this.uid = ++E.uid;
  }
}
E.uid = 0;
class C {
  constructor(e2, t2, s2) {
    this.component = e2, this.index = t2, this.bounds = s2;
  }
}
export { y as default };
