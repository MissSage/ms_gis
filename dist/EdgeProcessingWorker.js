var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { y, u as u$1, i, c as c$1, l as l$1, p as p$1, o as o$1, m, T, h, a, b, d as d$1, A, O as O$1, x, g as g$1, w, E, L, B, F as F$1, I, U, j, V, M, S, k, q, v, z as z$1, C, D, G, H as H$1 } from "./BufferView.js";
import { A as A$1, f as f$1, u as u$2, h as h$1, a as a$1, m as m$1 } from "./edgeProcessing.js";
import "./index.js";
import "vue";
import "./deduplicate.js";
import "./InterleavedLayout.js";
import "./types.js";
import "./VertexAttribute.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
function z(e, t) {
  return t.push(e.buffer), { buffer: e.buffer, layout: F(e.layout) };
}
function F(e) {
  const t = new Array();
  return e.fields.forEach((e2, r) => {
    const o2 = __spreadProps(__spreadValues({}, e2), { constructor: J(e2.constructor) });
    t.push([r, o2]);
  }), { stride: e.stride, fields: t, fieldNames: e.fieldNames };
}
const H = [y, u$1, i, c$1, l$1, p$1, o$1, m, T, h, a, b, d$1, A, O$1, x, g$1, w, E, L, B, F$1, I, U, j, V, M, S, k, q, v, z$1, C, D, G, H$1];
function J(e) {
  return `${e.ElementType}_${e.ElementCount}`;
}
const O = new Map();
H.forEach((e) => O.set(J(e), e));
class o {
  async extract(e) {
    const t = c(e), n = f$1(t), r = [t.data.buffer];
    return { result: l(n, r), transferList: r };
  }
  async extractComponentsEdgeLocations(t) {
    const s = c(t), i2 = u$2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = h$1(i2, p, g), o2 = [];
    return { result: z(a2.regular.instancesData, o2), transferList: o2 };
  }
  async extractEdgeLocations(t) {
    const s = c(t), i2 = u$2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = h$1(i2, f, g), o2 = [];
    return { result: z(a2.regular.instancesData, o2), transferList: o2 };
  }
}
function c(e) {
  return { data: A$1.createView(e.dataBuffer), indices: e.indicesType === "Uint32Array" ? new Uint32Array(e.indices) : e.indicesType === "Uint16Array" ? new Uint16Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function l(t, n) {
  n.push(t.regular.lodInfo.lengths.buffer), n.push(t.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: z(t.regular.instancesData, n), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: z(t.silhouette.instancesData, n), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
class u {
  allocate(e) {
    return a$1.createBuffer(e);
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
    return m$1.createBuffer(e);
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
