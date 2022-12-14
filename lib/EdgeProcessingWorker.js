import { z } from "./workerHelper.js";
import { A, f as f$1, u as u$1, h, a, m } from "./edgeProcessing.js";
import "./BufferView.js";
import "./index.js";
import "vue";
import "./InterleavedLayout.js";
import "./types.js";
import "./deduplicate.js";
import "./VertexAttribute.js";
import "./glUtil.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
class o {
  async extract(e) {
    const t = c(e), n = f$1(t), r = [t.data.buffer];
    return { result: l(n, r), transferList: r };
  }
  async extractComponentsEdgeLocations(t) {
    const s = c(t), i = u$1(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = h(i, p, g), o2 = [];
    return { result: z(a2.regular.instancesData, o2), transferList: o2 };
  }
  async extractEdgeLocations(t) {
    const s = c(t), i = u$1(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = h(i, f, g), o2 = [];
    return { result: z(a2.regular.instancesData, o2), transferList: o2 };
  }
}
function c(e) {
  return { data: A.createView(e.dataBuffer), indices: e.indicesType === "Uint32Array" ? new Uint32Array(e.indices) : e.indicesType === "Uint16Array" ? new Uint16Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function l(t, n) {
  n.push(t.regular.lodInfo.lengths.buffer), n.push(t.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: z(t.regular.instancesData, n), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: z(t.silhouette.instancesData, n), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
class u {
  allocate(e) {
    return a.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1);
  }
}
class d {
  allocate(e) {
    return m.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1), e.componentIndex.set(t, n.componentIndex);
  }
}
const f = new u(), p = new d(), g = { allocate: () => null, write: () => {
}, trim: () => null };
export { o as default };
