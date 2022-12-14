import { ay as q, ap as x, aP as u, bh as R, f1 as k, c as e, h as n, t as n$1, aX as f, x as t$1, i, n0 as q$1, nW as N, aJ as t$2 } from "./index.js";
import { v, b, j as j$1 } from "./lineSegment.js";
import { G } from "./Octree.js";
import { m } from "./edgeProcessing.js";
import "vue";
import "./Util.js";
import "./deduplicate.js";
import "./InterleavedLayout.js";
import "./BufferView.js";
import "./types.js";
import "./VertexAttribute.js";
import "./glUtil.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
const t = 1e3;
function a(t2, a2, e2) {
  const i2 = R(), m2 = k(i2);
  return q(m2, m2, t2, 0.5), q(m2, m2, a2, 0.5), i2[3] = x(m2, t2), u(m2, m2, e2), i2;
}
let j = class {
  constructor() {
    this._idToComponent = new Map(), this._components = new G((e2) => e2.bounds), this._edges = new G((e2) => e2.bounds), this._tmpLineSegment = v(), this._tmpP1 = n$1(), this._tmpP2 = n$1(), this._tmpP3 = n$1(), this.remoteClient = null;
  }
  async fetchCandidates(e2, t$12) {
    await Promise.resolve(), f(t$12), await this._ensureEdgeLocations(e2, t$12);
    const s = [];
    return this._edges.forEachNeighbor((t$13) => (this._addCandidates(e2, t$13, s), s.length < t), e2.bounds), { result: { candidates: s } };
  }
  async _ensureEdgeLocations(e2, o) {
    const n2 = [];
    if (this._components.forEachNeighbor((e3) => {
      if (t$1(e3.info)) {
        const { id: t2, uid: s } = e3;
        n2.push({ id: t2, uid: s });
      }
      return true;
    }, e2.bounds), !n2.length)
      return;
    const i$1 = { components: n2 }, r = await this.remoteClient.invoke("fetchAllEdgeLocations", i$1, i(o, {}));
    for (const t2 of r.components)
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
      this._edges.forEachNeighbor((s) => (s.component === t2 && e3.push(s), true), t2.bounds), this._edges.remove(e3), this._components.remove([t2]), this._idToComponent.delete(t2.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e2) {
    const s = this._idToComponent.get(e2.id);
    if (t$1(s) || e2.uid !== s.uid)
      return;
    const o = m.createView(e2.locations), n2 = new Array(o.count), i2 = n$1(), r = n$1();
    for (let t2 = 0; t2 < o.count; t2++) {
      o.position0.getVec(t2, i2), o.position1.getVec(t2, r);
      const d = a(i2, r, e2.origin), c2 = new C(s, t2, d);
      n2[t2] = c2;
    }
    this._edges.add(n2);
    const { objectIds: c, origin: a$1 } = e2;
    s.info = { locations: o, objectIds: c, origin: a$1 };
  }
  _addCandidates(e2, t2, s) {
    const { locations: o, origin: n2, objectIds: r } = t2.component.info, d = o.position0.getVec(t2.index, this._tmpP1), c = o.position1.getVec(t2.index, this._tmpP2);
    u(d, d, n2), u(c, c, n2);
    const a2 = r[o.componentIndex.get(t2.index)];
    this._addEdgeCandidate(e2, a2, d, c, s), this._addVertexCandidate(e2, a2, d, s), this._addVertexCandidate(e2, a2, c, s);
  }
  _addEdgeCandidate(e2, t2, s, o, n2) {
    if (!(e2.types & q$1.EDGE))
      return;
    const i2 = k(e2.bounds), d = b(s, o, this._tmpLineSegment), a2 = j$1(d, i2, this._tmpP3);
    if (!N(e2.bounds, a2))
      return null;
    n2.push({ type: "edge", objectId: t2, target: t$2(a2), distance: x(i2, a2), start: t$2(s), end: t$2(o) });
  }
  _addVertexCandidate(e2, t2, s, o) {
    if (!(e2.types & q$1.VERTEX))
      return;
    const n2 = k(e2.bounds);
    if (!N(e2.bounds, s))
      return null;
    o.push({ type: "vertex", objectId: t2, target: t$2(s), distance: x(n2, s) });
  }
};
j = e([n("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], j);
const y = j;
class E {
  constructor(e2, t2) {
    this.id = e2, this.bounds = t2, this.info = null, this.uid = ++E.uid;
  }
}
E.uid = 0;
class C {
  constructor(e2, t2, s) {
    this.component = e2, this.index = t2, this.bounds = s;
  }
}
export { y as default };
