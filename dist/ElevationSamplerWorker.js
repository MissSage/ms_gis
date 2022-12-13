import { a as r, h as has } from "./index.js";
import { h } from "./PooledRBush.js";
import { k } from "./georeference.js";
import "vue";
import "./mat3f64.js";
import "./mat4f64.js";
import "./quat.js";
import "./quatf64.js";
import "./BufferView.js";
import "./vec33.js";
class n {
  async createIndex(r$1, n2) {
    const o2 = new Array();
    if (!r$1.vertexAttributes || !r$1.vertexAttributes.position)
      return new h();
    const s = this._createMeshData(r$1), a = r(n2) ? await n2.invoke("createIndexThread", s, { transferList: o2 }) : this.createIndexThread(s).result;
    return this._createPooledRBush().fromJSON(a);
  }
  createIndexThread(e) {
    const t = new Float64Array(e.position), r2 = this._createPooledRBush();
    return e.components ? this._createIndexComponentsThread(r2, t, e.components.map((e2) => new Uint32Array(e2))) : this._createIndexAllThread(r2, t);
  }
  _createIndexAllThread(e, t) {
    const r2 = new Array(t.length / 9);
    let n2 = 0;
    for (let s = 0; s < t.length; s += 9)
      r2[n2++] = o(t, s + 0, s + 3, s + 6);
    return e.load(r2), { result: e.toJSON() };
  }
  _createIndexComponentsThread(e, t, r2) {
    let n2 = 0;
    for (const o2 of r2)
      n2 += o2.length / 3;
    const s = new Array(n2);
    let a = 0;
    for (const i of r2)
      for (let e2 = 0; e2 < i.length; e2 += 3)
        s[a++] = o(t, 3 * i[e2 + 0], 3 * i[e2 + 1], 3 * i[e2 + 2]);
    return e.load(s), { result: e.toJSON() };
  }
  _createMeshData(e) {
    const t = (e.transform ? k({ position: e.vertexAttributes.position, normal: null, tangent: null }, e.transform, e.spatialReference).position : e.vertexAttributes.position).buffer;
    return !e.components || e.components.some((e2) => !e2.faces) ? { position: t } : { position: t, components: e.components.map((e2) => e2.faces) };
  }
  _createPooledRBush() {
    return new h(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
  }
}
function o(e, t, r2, n2) {
  return { minX: Math.min(e[t + 0], e[r2 + 0], e[n2 + 0]), maxX: Math.max(e[t + 0], e[r2 + 0], e[n2 + 0]), minY: Math.min(e[t + 1], e[r2 + 1], e[n2 + 1]), maxY: Math.max(e[t + 1], e[r2 + 1], e[n2 + 1]), p0: [e[t + 0], e[t + 1], e[t + 2]], p1: [e[r2 + 0], e[r2 + 1], e[r2 + 2]], p2: [e[n2 + 0], e[n2 + 1], e[n2 + 2]] };
}
export { n as default };
