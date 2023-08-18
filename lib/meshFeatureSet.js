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
import { ea as s, C as r, cW as gn, a1 as n, lm as y$4, I as w$4, m0 as _, m1 as Ot, io as L, h2 as p$4, bm as f$4, a2 as t, s as s$1, be as u$2, ep as Zn, aH as O$2, cA as a$1, cB as S$1, bA as e, cN as e$1, bE as z$1, aS as o, b9 as e$2, b$ as f$5, d7 as g$5, bD as O$4, bc as g$6, a7 as a$3, ly as m$4, hQ as m$5, m2 as p$6, ad as l$3, fO as w$5, Z as v$4, N as e$3, O as y$5, P as n$1, bJ as r$2, ll as x$5, J as g$7 } from "./index.js";
import { a as a$2, v as v$3, g as g$4, x as x$4, k as k$4 } from "./axisAngleDegrees.js";
import { p as p$5, g as g$3 } from "./MeshComponent.js";
import { r as r$1, b as b$2, x as x$3, _ as _$1, L as L$2 } from "./georeference.js";
import { o as o$1 } from "./triangulationUtils.js";
import { M as M$2, j, k as k$3, O as O$3, h as h$2, L as L$1 } from "./projection.js";
import "vue";
import "./imageUtils.js";
import "./BufferView.js";
import "./vec33.js";
import "./earcut.js";
import "./deduplicate.js";
const a = s.getLogger("esri.geometry.support.meshUtils.centerAt");
function c$2(e2, r$22, i) {
  var _a;
  if (!e2.vertexAttributes || !e2.vertexAttributes.position)
    return;
  const n2 = (_a = i == null ? void 0 : i.origin) != null ? _a : e2.origin;
  if (r(e2.transform))
    (i == null ? void 0 : i.geographic) != null && i.geographic !== e2.transform.geographic && a.warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e2.transform.geographic}) is not supported`), f$3(e2.transform, r$22, n2);
  else {
    r$1(e2.spatialReference, i) ? p$3(e2, r$22, n2) : g$2(e2, r$22, n2);
  }
}
function f$3(e2, t2, r2) {
  const i = t2.x - r2.x, o2 = t2.y - r2.y, n2 = t2.hasZ && r2.hasZ ? t2.z - r2.z : 0, s2 = e2.origin;
  e2.origin = [s2[0] + i, s2[1] + o2, s2[2] + n2];
}
function p$3(e2, t2, r2) {
  const i = b$2(e2.vertexAttributes, r2, { geographic: true }), { position: o2, normal: a2, tangent: c2 } = x$3(i, t2, { geographic: true });
  e2.vertexAttributes.position = o2, e2.vertexAttributes.normal = a2, e2.vertexAttributes.tangent = c2, e2.vertexAttributesChanged();
}
function g$2(e2, t2, r2) {
  const o2 = h$1, n2 = l$2;
  if (gn(t2, n2, e2.spatialReference)) {
    if (!gn(r2, o2, e2.spatialReference)) {
      const t3 = e2.origin;
      o2[0] = t3.x, o2[1] = t3.y, o2[2] = t3.z, a.error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${e2.spatialReference.wkid}).`);
    }
    m$3(e2.vertexAttributes.position, n2, o2), e2.vertexAttributesChanged();
  } else
    a.error(`Failed to project centerAt location (wkid:${t2.spatialReference.wkid}) to mesh spatial reference (wkid:${e2.spatialReference.wkid})`);
}
function m$3(e2, t2, r2) {
  if (e2)
    for (let i = 0; i < e2.length; i += 3)
      for (let o2 = 0; o2 < 3; o2++)
        e2[i + o2] += t2[o2] - r2[o2];
}
const l$2 = n(), h$1 = n();
async function u$1(e2, s2, o2) {
  const { loadGLTFMesh: n2 } = await y$4(import("./loadGLTFMesh.js"), o2), a2 = await m$2(s2, o2), i = n2(new w$4({ x: 0, y: 0, z: 0, spatialReference: e2.spatialReference }), a2.url, { resolveFile: f$2(a2), useTransform: true, signal: r(o2) ? o2.signal : null });
  i.then(() => a2.dispose(), () => a2.dispose());
  const { vertexAttributes: l2, components: u2 } = await i;
  e2.vertexAttributes = l2, e2.components = u2;
}
function f$2(e2) {
  const t2 = Ot(e2.url);
  return (s2) => {
    var _a;
    const r2 = _(s2, t2, t2), o2 = r2 ? r2.replace(/^ *\.\//, "") : null;
    return (_a = o2 ? e2.files.get(o2) : null) != null ? _a : s2;
  };
}
async function m$2(e2, t2) {
  return e2 instanceof Blob ? y$3.fromBlob(e2) : typeof e2 == "string" ? new y$3(e2) : Array.isArray(e2) ? p$2(e2, t2) : w$3(e2, t2);
}
async function p$2(t$1, r2) {
  const i = new Map();
  let l2 = null;
  const c2 = await L(t$1.map(async (e2) => ({ name: e2.name, source: await m$2(e2 instanceof Blob ? e2 : e2.source, r2) }))), u2 = [];
  for (const e2 of c2)
    e2 && (p$4(r2) ? e2.source.dispose() : u2.push(e2));
  f$4(r2);
  for (const { name: e2, source: o2 } of u2)
    (t(l2) || /\.(gltf|glb)/i.test(e2)) && (l2 = o2.url), i.set(e2, o2.url), o2.files && o2.files.forEach((e3, t2) => i.set(t2, e3));
  if (t(l2))
    throw new s$1("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new y$3(l2, () => u2.forEach(({ source: e2 }) => e2.dispose()), i);
}
async function w$3(e2, t2) {
  const { default: s2 } = await y$4(import("./index.js").then(function(n2) {
    return n2.sk;
  }), t2), o2 = typeof e2.multipart[0] == "string" ? await Promise.all(e2.multipart.map(async (e3) => (await s2(e3, { responseType: "array-buffer" })).data)) : e2.multipart;
  return y$3.fromBlob(new Blob(o2));
}
class y$3 {
  constructor(e2, t2 = () => {
  }, s2 = new Map()) {
    this.url = e2, this.dispose = t2, this.files = s2;
  }
  static fromBlob(e2) {
    const t2 = URL.createObjectURL(e2);
    return new y$3(t2, () => URL.revokeObjectURL(t2));
  }
}
function x$2(e2, o2, i) {
  if (e2.vertexAttributes && e2.vertexAttributes.position)
    if (r(e2.transform))
      (i == null ? void 0 : i.geographic) != null && i.geographic !== e2.transform.geographic && s.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e2.transform.geographic}) is not supported`), A$2(e2.transform, o2);
    else {
      r$1(e2.spatialReference, i) ? v$2(e2, o2) : b$1(e2, o2);
    }
}
function A$2(t2, r2) {
  const e2 = t2.origin;
  t2.origin = u$2(n(), e2, r2);
}
function v$2(t2, o2) {
  const i = t2.spatialReference, n2 = t2.vertexAttributes.position, a2 = t2.vertexAttributes.normal, c2 = t2.vertexAttributes.tangent, x2 = new Float64Array(n2.length), A2 = r(a2) ? new Float32Array(a2.length) : null, v2 = r(c2) ? new Float32Array(c2.length) : null, b2 = t2.extent.center, F2 = d$2;
  Zn(i, [b2.x, b2.y, b2.z], k$2, O$2(i)), a$1(w$2, k$2), S$1(F2, o2, w$2), M$2(n2, i, x2), r(a2) && r(A2) && j(a2, n2, x2, i, A2), r(c2) && r(v2) && k$3(c2, n2, x2, i, v2), y$2(x2, F2), O$3(x2, n2, i), r(a2) && r(A2) && h$2(A2, n2, x2, i, a2), r(c2) && r(v2) && L$1(v2, n2, x2, i, c2), t2.vertexAttributesChanged();
}
function b$1(t2, r2) {
  y$2(t2.vertexAttributes.position, r2), t2.vertexAttributesChanged();
}
function y$2(t2, r2) {
  if (t2)
    for (let e2 = 0; e2 < t2.length; e2 += 3)
      for (let o2 = 0; o2 < 3; o2++)
        t2[e2 + o2] += r2[o2];
}
const d$2 = n(), k$2 = e(), w$2 = e$1();
function c$1() {
  const { faceDescriptions: t2, faceVertexOffsets: e2, uvScales: n2 } = d$1, r2 = 4 * t2.length, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i = new Uint32Array(2 * t2.length * 3);
  let c2 = 0, l2 = 0, f2 = 0, u2 = 0;
  for (let h2 = 0; h2 < t2.length; h2++) {
    const r3 = t2[h2], p2 = c2 / 3;
    for (const t3 of e2)
      i[u2++] = p2 + t3;
    const m2 = r3.corners;
    for (let t3 = 0; t3 < 4; t3++) {
      const e3 = m2[t3];
      let i2 = 0;
      a2[f2++] = 0.25 * n2[t3][0] + r3.uvOrigin[0], a2[f2++] = r3.uvOrigin[1] - 0.25 * n2[t3][1];
      for (let t4 = 0; t4 < 3; t4++)
        r3.axis[t4] !== 0 ? (o2[c2++] = 0.5 * r3.axis[t4], s2[l2++] = r3.axis[t4]) : (o2[c2++] = 0.5 * e3[i2++], s2[l2++] = 0);
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i };
}
function l$1(e2, n2) {
  const r$12 = e2.components[0], o2 = r$12.faces, a2 = M$1[n2], i = 6 * a2, c2 = new Array(6), l2 = new Array(o2.length - 6);
  let f2 = 0, u2 = 0;
  for (let t2 = 0; t2 < o2.length; t2++)
    t2 >= i && t2 < i + 6 ? c2[f2++] = o2[t2] : l2[u2++] = o2[t2];
  if (r(e2.vertexAttributes.uv)) {
    const t2 = new Float32Array(e2.vertexAttributes.uv), n3 = 4 * a2 * 2, r2 = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let e3 = 0; e3 < r2.length; e3++)
      t2[n3 + e3] = r2[e3];
    e2.vertexAttributes.uv = t2;
  }
  return e2.components = [new g$3({ faces: c2, material: r$12.material }), new g$3({ faces: l2 })], e2;
}
function f$1(t2 = 0) {
  const e2 = Math.round(8 * 2 ** t2), n2 = 2 * e2, r2 = (e2 - 1) * (n2 + 1) + 2 * n2, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i = new Uint32Array(3 * ((e2 - 1) * n2 * 2));
  let c2 = 0, l2 = 0, f2 = 0, u2 = 0;
  for (let h2 = 0; h2 <= e2; h2++) {
    const t3 = h2 / e2 * Math.PI + 0.5 * Math.PI, r3 = Math.cos(t3), p2 = Math.sin(t3);
    F[2] = p2;
    const m2 = h2 === 0 || h2 === e2, w2 = m2 ? n2 - 1 : n2;
    for (let v2 = 0; v2 <= w2; v2++) {
      const t4 = v2 / w2 * 2 * Math.PI;
      F[0] = -Math.sin(t4) * r3, F[1] = Math.cos(t4) * r3;
      for (let e3 = 0; e3 < 3; e3++)
        o2[c2] = 0.5 * F[e3], s2[c2] = F[e3], ++c2;
      a2[l2++] = (v2 + (m2 ? 0.5 : 0)) / n2, a2[l2++] = h2 / e2, h2 !== 0 && v2 !== n2 && (h2 !== e2 && (i[f2++] = u2, i[f2++] = u2 + 1, i[f2++] = u2 - n2), h2 !== 1 && (i[f2++] = u2, i[f2++] = u2 - n2, i[f2++] = u2 - n2 - 1)), u2++;
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i };
}
function u(t2 = 0) {
  const e2 = 5, n2 = Math.round(16 * 2 ** t2), r2 = (e2 - 1) * (n2 + 1) + 2 * n2, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i = new Uint32Array(3 * (4 * n2));
  let c2 = 0, l2 = 0, f2 = 0, u2 = 0, h2 = 0;
  for (let p2 = 0; p2 <= e2; p2++) {
    const t3 = p2 === 0 || p2 === e2, r3 = p2 <= 1 || p2 >= e2 - 1, m2 = p2 === 2 || p2 === 4, w2 = t3 ? n2 - 1 : n2;
    for (let v2 = 0; v2 <= w2; v2++) {
      const g2 = v2 / w2 * 2 * Math.PI, A2 = t3 ? 0 : 0.5;
      F[0] = A2 * Math.sin(g2), F[1] = A2 * -Math.cos(g2), F[2] = p2 <= 2 ? 0.5 : -0.5;
      for (let t4 = 0; t4 < 3; t4++)
        o2[c2++] = F[t4], s2[l2++] = r3 ? t4 === 2 ? p2 <= 1 ? 1 : -1 : 0 : t4 === 2 ? 0 : F[t4] / A2;
      a2[f2++] = (v2 + (t3 ? 0.5 : 0)) / n2, a2[f2++] = p2 <= 1 ? 1 * p2 / 3 : p2 <= 3 ? 1 * (p2 - 2) / 3 + 1 / 3 : 1 * (p2 - 4) / 3 + 2 / 3, m2 || p2 === 0 || v2 === n2 || (p2 !== e2 && (i[u2++] = h2, i[u2++] = h2 + 1, i[u2++] = h2 - n2), p2 !== 1 && (i[u2++] = h2, i[u2++] = h2 - n2, i[u2++] = h2 - n2 - 1)), h2++;
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i };
}
function h(t2, e2) {
  const n2 = typeof e2 == "number" ? e2 : e2 != null ? e2.width : 1, r2 = typeof e2 == "number" ? e2 : e2 != null ? e2.height : 1;
  switch (t2) {
    case "up":
    case "down":
      return { width: n2, depth: r2 };
    case "north":
    case "south":
      return { width: n2, height: r2 };
    case "east":
    case "west":
      return { depth: n2, height: r2 };
  }
}
function p$1(t2) {
  const e2 = g$1.facingAxisOrderSwap[t2], n2 = g$1.position, r2 = g$1.normal, o2 = new Float64Array(n2.length), s2 = new Float32Array(r2.length);
  let a2 = 0;
  for (let i = 0; i < 4; i++) {
    const t3 = a2;
    for (let i2 = 0; i2 < 3; i2++) {
      const c2 = e2[i2], l2 = Math.abs(c2) - 1, f2 = c2 >= 0 ? 1 : -1;
      o2[a2] = n2[t3 + l2] * f2, s2[a2] = r2[t3 + l2] * f2, a2++;
    }
  }
  return { position: o2, normal: s2, uv: new Float32Array(g$1.uv), faces: new Uint32Array(g$1.faces), isPlane: true };
}
const m$1 = 1, w$1 = 2, v$1 = 3, g$1 = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [v$1, m$1, w$1], west: [-v$1, -m$1, w$1], north: [-m$1, v$1, w$1], south: [m$1, -v$1, w$1], up: [m$1, w$1, v$1], down: [m$1, -w$1, -v$1] } };
function A$1(t2, e2, n2) {
  t2.isPlane || y$1(t2), x$1(t2, n2 == null ? void 0 : n2.size);
  const { vertexAttributes: r2, transform: o2 } = _$1(t2, e2, n2);
  return { vertexAttributes: new p$5(__spreadProps(__spreadValues({}, r2), { uv: t2.uv })), transform: o2, components: [new g$3({ faces: t2.faces, material: n2 && n2.material || null })], spatialReference: e2.spatialReference };
}
function y$1(t2) {
  for (let e2 = 0; e2 < t2.position.length; e2 += 3)
    t2.position[e2 + 2] += 0.5;
}
function x$1(t2, e2) {
  if (e2 == null)
    return;
  const o2 = typeof e2 == "number" ? [e2, e2, e2] : [e2.width != null ? e2.width : 1, e2.depth != null ? e2.depth : 1, e2.height != null ? e2.height : 1];
  O$1[0] = o2[0], O$1[4] = o2[1], O$1[8] = o2[2];
  for (let r2 = 0; r2 < t2.position.length; r2 += 3) {
    for (let e3 = 0; e3 < 3; e3++)
      F[e3] = t2.position[r2 + e3];
    S$1(F, F, O$1);
    for (let e3 = 0; e3 < 3; e3++)
      t2.position[r2 + e3] = F[e3];
  }
  if (o2[0] !== o2[1] || o2[1] !== o2[2]) {
    O$1[0] = 1 / o2[0], O$1[4] = 1 / o2[1], O$1[8] = 1 / o2[2];
    for (let e3 = 0; e3 < t2.normal.length; e3 += 3) {
      for (let n2 = 0; n2 < 3; n2++)
        F[n2] = t2.normal[e3 + n2];
      S$1(F, F, O$1), z$1(F, F);
      for (let n2 = 0; n2 < 3; n2++)
        t2.normal[e3 + n2] = F[n2];
    }
  }
}
const d$1 = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, M$1 = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, F = n(), O$1 = e$1();
const $ = s.getLogger("esri.geometry.support.meshUtils.rotate");
function z(t2, r$22, o2) {
  var _a, _b;
  if (!t2.vertexAttributes || !t2.vertexAttributes.position || r$22[3] === 0)
    return;
  const i = t2.spatialReference;
  if (r(t2.transform)) {
    (o2 == null ? void 0 : o2.geographic) != null && o2.geographic !== t2.transform.geographic && $.warn(`Specifying the 'geographic' parameter (${o2.geographic}) different from the Mesh transform setting (${t2.transform.geographic}) is not supported`);
    const e2 = (_a = o2 == null ? void 0 : o2.origin) != null ? _a : t2.transform.getOriginPoint(i);
    C(t2.transform, r$22, e2);
  } else {
    const e2 = (_b = o2 == null ? void 0 : o2.origin) != null ? _b : t2.origin;
    r$1(t2.spatialReference, o2) ? I$1(t2, r$22, e2) : U(t2, r$22, e2);
  }
}
function C(t2, e2, r2) {
  const o$12 = o(E$1, r2.x, r2.y, r2.z), i = e$2(E$1, o$12, t2.origin);
  t2.applyLocalInverse(i, M), t2.rotation = v$3(t2.rotation, e2, a$2()), t2.applyLocalInverse(i, i), e$2(i, i, M), t2.translation = u$2(n(), t2.translation, i);
}
function I$1(t2, r$12, i) {
  const n2 = t2.spatialReference, s2 = O$2(n2), a2 = Z$1;
  gn(i, a2, s2) || gn(t2.origin, a2, s2);
  const c2 = t2.vertexAttributes.position, f2 = t2.vertexAttributes.normal, m2 = t2.vertexAttributes.tangent, g2 = new Float64Array(c2.length), l2 = r(f2) ? new Float32Array(f2.length) : null, v2 = r(m2) ? new Float32Array(m2.length) : null;
  Zn(s2, a2, P, s2), a$1(S, P);
  const x2 = O;
  S$1(g$4(O), g$4(r$12), S), x2[3] = r$12[3], M$2(c2, n2, g2), r(f2) && r(l2) && j(f2, c2, g2, n2, l2), r(m2) && r(v2) && k$3(m2, c2, g2, n2, v2), D$2(g2, x2, 3, a2), O$3(g2, c2, n2), r(f2) && r(l2) && (D$2(l2, x2, 3), h$2(l2, c2, g2, n2, f2)), r(m2) && r(v2) && (D$2(v2, x2, 4), L$1(v2, c2, g2, n2, m2)), t2.vertexAttributesChanged();
}
function U(t2, e2, r2) {
  const o2 = Z$1;
  if (!gn(r2, o2, t2.spatialReference)) {
    const e3 = t2.origin;
    o2[0] = e3.x, o2[1] = e3.y, o2[2] = e3.z, $.error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${t2.spatialReference.wkid}).`);
  }
  D$2(t2.vertexAttributes.position, e2, 3, o2), D$2(t2.vertexAttributes.normal, e2, 3), D$2(t2.vertexAttributes.tangent, e2, 4), t2.vertexAttributesChanged();
}
function D$2(t$1, e2, o2, i = f$5) {
  if (!t(t$1)) {
    g$5(P, x$4(e2), g$4(e2));
    for (let e3 = 0; e3 < t$1.length; e3 += o2) {
      for (let r2 = 0; r2 < 3; r2++)
        E$1[r2] = t$1[e3 + r2] - i[r2];
      O$4(E$1, E$1, P);
      for (let r2 = 0; r2 < 3; r2++)
        t$1[e3 + r2] = E$1[r2] + i[r2];
    }
  }
}
const E$1 = n(), M = n(), O = a$2(), P = e(), S = e$1(), Z$1 = n();
const v = s.getLogger("esri.geometry.support.meshUtils.scale");
function d(e2, r$22, o2) {
  var _a;
  if (!e2.vertexAttributes || !e2.vertexAttributes.position)
    return;
  const i = e2.spatialReference;
  if (r(e2.transform)) {
    (o2 == null ? void 0 : o2.geographic) != null && o2.geographic !== e2.transform.geographic && v.warn(`Specifying the 'geographic' parameter (${o2.geographic}) different from the Mesh transform setting (${e2.transform.geographic}) is not supported`);
    const t2 = (_a = o2 == null ? void 0 : o2.origin) != null ? _a : e2.transform.getOriginPoint(i);
    x(e2.transform, r$22, t2);
  } else {
    const t2 = r$1(e2.spatialReference, o2), i2 = o2 && o2.origin || e2.origin;
    t2 ? A(e2, r$22, i2) : b(e2, r$22, i2);
  }
}
function x(e2, t2, a2) {
  const c2 = o(w, a2.x, a2.y, a2.z), p2 = e$2(w, c2, e2.origin);
  e2.applyLocalInverse(p2, k$1);
  const f2 = g$6(n(), e2.scale, t2);
  e2.scale = f2, e2.applyLocalInverse(p2, p2), e$2(p2, p2, k$1), e2.translation = u$2(n(), e2.translation, p2);
}
function A(e2, r$12, o2) {
  const i = e2.spatialReference, n2 = O$2(i), s2 = R;
  gn(o2, s2, n2) || gn(e2.origin, s2, n2);
  const a2 = e2.vertexAttributes.position, f2 = e2.vertexAttributes.normal, v2 = e2.vertexAttributes.tangent, d2 = new Float64Array(a2.length), x2 = r(f2) ? new Float32Array(f2.length) : null, A2 = r(v2) ? new Float32Array(v2.length) : null;
  M$2(a2, i, d2), r(f2) && r(x2) && j(f2, a2, d2, i, x2), r(v2) && r(A2) && k$3(v2, a2, d2, i, A2), y(d2, r$12, s2), O$3(d2, a2, i), r(f2) && r(x2) && h$2(x2, a2, d2, i, f2), r(v2) && r(A2) && L$1(A2, a2, d2, i, v2), e2.vertexAttributesChanged();
}
function b(e2, t2, r2) {
  const o2 = R;
  if (!gn(r2, o2, e2.spatialReference)) {
    const t3 = e2.origin;
    o2[0] = t3.x, o2[1] = t3.y, o2[2] = t3.z, v.error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${e2.spatialReference.wkid}).`);
  }
  y(e2.vertexAttributes.position, t2, o2), e2.vertexAttributesChanged();
}
function y(e2, t2, r2 = f$5) {
  if (e2)
    for (let o2 = 0; o2 < e2.length; o2 += 3) {
      for (let t3 = 0; t3 < 3; t3++)
        w[t3] = e2[o2 + t3] - r2[t3];
      g$6(w, w, t2);
      for (let t3 = 0; t3 < 3; t3++)
        e2[o2 + t3] = w[t3] + r2[t3];
    }
}
const w = n(), k$1 = n(), R = n();
var G;
const I = "esri.geometry.Mesh";
let B = G = class extends a$3(m$4.LoadableMixin(m$5(p$6))) {
  constructor(e2) {
    super(e2), this.components = null, this.transform = null, this.external = null, this.hasZ = true, this.hasM = false, this.vertexAttributes = new p$5(), this.type = "mesh";
  }
  initialize() {
    (t(this.external) || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.handles.add(l$3(() => {
        var _a;
        return { vertexAttributes: this.vertexAttributes, components: (_a = this.components) == null ? void 0 : _a.map((e2) => e2.clone()) };
      }, () => this._set("external", null), { once: true, sync: true }));
    });
  }
  get hasExtent() {
    return !this.loaded && r(this.external) && r(this.external.extent) || this.loaded && this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0);
  }
  get _boundingInfo() {
    const e2 = this.vertexAttributes.position, t2 = this.spatialReference;
    if (e2.length === 0 || this.components && this.components.length === 0)
      return { extent: new w$5({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t2 }), center: new w$4({ x: 0, y: 0, z: 0, spatialReference: t2 }) };
    const r$12 = r(this.transform) ? this.transform.project(e2, t2) : e2;
    let o2 = 1 / 0, n2 = 1 / 0, s2 = 1 / 0, a2 = -1 / 0, l2 = -1 / 0, c2 = -1 / 0, p2 = 0, m2 = 0, h2 = 0;
    const f2 = r$12.length, d2 = 1 / (f2 / 3);
    let x2 = 0;
    for (; x2 < f2; ) {
      const e3 = r$12[x2++], t3 = r$12[x2++], i = r$12[x2++];
      o2 = Math.min(o2, e3), n2 = Math.min(n2, t3), s2 = Math.min(s2, i), a2 = Math.max(a2, e3), l2 = Math.max(l2, t3), c2 = Math.max(c2, i), p2 += d2 * e3, m2 += d2 * t3, h2 += d2 * i;
    }
    return { extent: new w$5({ xmin: o2, ymin: n2, zmin: s2, xmax: a2, ymax: l2, zmax: c2, spatialReference: t2 }), center: new w$4({ x: p2, y: m2, z: h2, spatialReference: t2 }) };
  }
  get anchor() {
    if (r(this.transform))
      return this.transform.getOriginPoint(this.spatialReference);
    const e2 = this._boundingInfo;
    return new w$4({ x: e2.center.x, y: e2.center.y, z: e2.extent.zmin, spatialReference: this.spatialReference });
  }
  get origin() {
    return r(this.transform) ? this.transform.getOriginPoint(this.spatialReference) : this._boundingInfo.center;
  }
  get extent() {
    return !this.loaded && r(this.external) && r(this.external.extent) ? this.external.extent.clone() : this._boundingInfo.extent;
  }
  addComponent(e2) {
    this.loaded ? (this.components || (this.components = []), this.components.push(g$3.from(e2)), this.notifyChange("components")) : s.getLogger(this.declaredClass).error("addComponent()", "Mesh must be loaded before applying operations");
  }
  removeComponent(e2) {
    if (this.loaded) {
      if (this.components) {
        const t2 = this.components.indexOf(e2);
        if (t2 !== -1)
          return this.components.splice(t2, 1), void this.notifyChange("components");
      }
      s.getLogger(this.declaredClass).error("removeComponent()", "Provided component is not part of the list of components");
    } else
      s.getLogger(this.declaredClass).error("removeComponent()", "Mesh must be loaded before applying operations");
  }
  rotate(e2, t2, r2, o2) {
    return k$4(k.x, e2, D$1), k$4(k.y, t2, W), k$4(k.z, r2, Z), v$3(D$1, W, D$1), v$3(D$1, Z, D$1), z(this, D$1, o2), this;
  }
  offset(e2, t2, r2, o2) {
    return this.loaded ? (H[0] = e2, H[1] = t2, H[2] = r2, x$2(this, H, o2), this) : (s.getLogger(this.declaredClass).error("offset()", "Mesh must be loaded before applying operations"), this);
  }
  scale(e2, t2) {
    return this.loaded ? (d(this, e2, t2), this) : (s.getLogger(this.declaredClass).error("scale()", "Mesh must be loaded before applying operations"), this);
  }
  centerAt(e2, t2) {
    return this.loaded ? (c$2(this, e2, t2), this) : (s.getLogger(this.declaredClass).error("centerAt()", "Mesh must be loaded before applying operations"), this);
  }
  load(e2) {
    return r(this.external) && this.addResolvingPromise(u$1(this, this.external.source, e2)), Promise.resolve(this);
  }
  updateExternalSource(e2) {
    this._set("external", e2);
  }
  clone() {
    let e2 = null;
    if (this.components) {
      const t3 = new Map(), r2 = new Map();
      e2 = this.components.map((e3) => e3.cloneWithDeduplication(t3, r2));
    }
    const t2 = { components: e2, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes.clone(), transform: r(this.transform) ? this.transform.clone() : null, external: r(this.external) ? { source: this.external.source, extent: r(this.external.extent) ? this.external.extent.clone() : null } : null };
    return new G(t2);
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e2) {
    const t2 = import("./gltfexport.js"), r2 = this.load(), o2 = await Promise.all([t2, r2]), { toBinaryGLTF: n2 } = o2[0];
    return n2(this, e2);
  }
  static createBox(e2, t2) {
    if (!(e2 instanceof w$4))
      return s.getLogger(I).error(".createBox()", "expected location to be a Point instance"), null;
    const r2 = new G(A$1(c$1(), e2, t2));
    return t2 && t2.imageFace && t2.imageFace !== "all" ? l$1(r2, t2.imageFace) : r2;
  }
  static createSphere(e2, t2) {
    return e2 instanceof w$4 ? new G(A$1(f$1(t2 && t2.densificationFactor || 0), e2, t2)) : (s.getLogger(I).error(".createSphere()", "expected location to be a Point instance"), null);
  }
  static createCylinder(e2, t2) {
    return e2 instanceof w$4 ? new G(A$1(u(t2 && t2.densificationFactor || 0), e2, t2)) : (s.getLogger(I).error(".createCylinder()", "expected location to be a Point instance"), null);
  }
  static createPlane(e2, t2) {
    var _a;
    if (!(e2 instanceof w$4))
      return s.getLogger(I).error(".createPlane()", "expected location to be a Point instance"), null;
    const r2 = (_a = t2 == null ? void 0 : t2.facing) != null ? _a : "up", o2 = h(r2, t2 == null ? void 0 : t2.size);
    return new G(A$1(p$1(r2), e2, __spreadProps(__spreadValues({}, t2), { size: o2 })));
  }
  static createFromPolygon(e2, t2) {
    var _a;
    if (!(e2 instanceof v$4))
      return s.getLogger(I).error(".createFromPolygon()", "expected polygon to be a Polygon instance"), null;
    const r2 = o$1(e2);
    return new G({ vertexAttributes: new p$5({ position: r2.position }), components: [new g$3({ faces: r2.faces, shading: "flat", material: (_a = t2 == null ? void 0 : t2.material) != null ? _a : null })], spatialReference: e2.spatialReference });
  }
  static async createFromGLTF(e2, r2, o2) {
    if (!(e2 instanceof w$4))
      throw s.getLogger(I).error(".createfromGLTF()", "expected location to be a Point instance"), new s$1("invalid-input", "Expected location to be a Point instance");
    const { loadGLTFMesh: s$2 } = await y$4(import("./loadGLTFMesh.js"), o2);
    return new G(await s$2(e2, r2, o2));
  }
  static createWithExternalSource(e2, t2, r2) {
    var _a, _b, _c, _d;
    const o2 = (_a = r2 == null ? void 0 : r2.extent) != null ? _a : null, n2 = (_c = (_b = r2 == null ? void 0 : r2.transform) == null ? void 0 : _b.clone()) != null ? _c : new L$2();
    n2.origin = [e2.x, e2.y, (_d = e2.z) != null ? _d : 0];
    const s2 = e2.spatialReference;
    return new G({ external: { source: t2, extent: o2 }, transform: n2, spatialReference: s2 });
  }
  static createIncomplete(e2, r2) {
    var _a, _b, _c;
    const o2 = (_b = (_a = r2 == null ? void 0 : r2.transform) == null ? void 0 : _a.clone()) != null ? _b : new L$2();
    o2.origin = [e2.x, e2.y, (_c = e2.z) != null ? _c : 0];
    const n2 = e2.spatialReference, s2 = new G({ transform: o2, spatialReference: n2 });
    return s2.addResolvingPromise(Promise.reject(new s$1("mesh-incomplete", "Mesh resources are not complete"))), s2;
  }
};
e$3([y$5({ type: [g$3], json: { write: true } })], B.prototype, "components", void 0), e$3([y$5({ type: L$2, json: { write: true } })], B.prototype, "transform", void 0), e$3([y$5({ constructOnly: true })], B.prototype, "external", void 0), e$3([y$5({ readOnly: true })], B.prototype, "hasExtent", null), e$3([y$5({ readOnly: true })], B.prototype, "_boundingInfo", null), e$3([y$5({ readOnly: true })], B.prototype, "anchor", null), e$3([y$5({ readOnly: true })], B.prototype, "origin", null), e$3([y$5({ readOnly: true, json: { read: false } })], B.prototype, "extent", null), e$3([y$5({ readOnly: true, json: { read: false, write: true, default: true } })], B.prototype, "hasZ", void 0), e$3([y$5({ readOnly: true, json: { read: false, write: true, default: false } })], B.prototype, "hasM", void 0), e$3([y$5({ type: p$5, nonNullable: true, json: { write: true } })], B.prototype, "vertexAttributes", void 0), B = G = e$3([n$1(I)], B);
const k = { x: r$2(1, 0, 0), y: r$2(0, 1, 0), z: r$2(0, 0, 1) }, D$1 = a$2(), W = a$2(), Z = a$2(), H = n(), N = B;
function l(o2, s2, n2) {
  const a2 = n2.features;
  n2.features = [], delete n2.geometryType;
  const i = x$5.fromJSON(n2);
  if (i.geometryType = "mesh", !n2.assetMaps)
    return i;
  const l2 = E(s2, n2.assetMaps), m2 = i.spatialReference, p2 = n2.globalIdFieldName, g2 = t(o2.outFields) || !o2.outFields.length ? () => ({}) : c(o2.outFields.includes("*") ? null : new Set(o2.outFields));
  for (const e2 of a2) {
    const o3 = f(e2, p2, m2, s2, l2);
    r(o3) && i.features.push(new g$7({ geometry: o3, attributes: g2(e2) }));
  }
  return i;
}
function c(t2) {
  return ({ attributes: e2 }) => {
    if (!e2)
      return {};
    if (!t2)
      return e2;
    for (const r2 in e2)
      t2.has(r2) || delete e2[r2];
    return e2;
  };
}
function f(t2, e2, r2, n2, a2) {
  const i = t2.attributes[e2], u2 = a2.get(i);
  if (u2 == null || u2.status === g.FAILED || u2.url == null)
    return null;
  const l2 = m(t2, r2, n2), c2 = w$5.fromJSON(t2.geometry);
  c2.spatialReference = r2;
  const f2 = p(t2.attributes, n2, u2.geographic);
  return u2.status === g.PENDING ? N.createIncomplete(l2, { extent: c2, transform: f2 }) : N.createWithExternalSource(l2, [{ name: u2.name, source: u2.url }], { extent: c2, transform: f2 });
}
function m({ attributes: t2 }, e2, { transformFieldRoles: r2 }) {
  return new w$4({ x: t2[r2.originX], y: t2[r2.originY], z: t2[r2.originZ], spatialReference: e2 });
}
function p(t2, { transformFieldRoles: e2 }, r2) {
  return new L$2({ translation: [t2[e2.translationX], t2[e2.translationY], t2[e2.translationZ]], rotation: k$4([t2[e2.rotationX], t2[e2.rotationY], t2[e2.rotationZ]], t2[e2.rotationDeg]), scale: [t2[e2.scaleX], t2[e2.scaleY], t2[e2.scaleZ]], geographic: r2 });
}
var g;
function E(t2, e2) {
  const r2 = new Map();
  for (const o2 of e2) {
    const t3 = o2.parentGlobalId;
    if (t3 == null)
      continue;
    const e3 = o2.assetName, s2 = o2.assetURL, n2 = o2.conversionStatus;
    let a2 = r2.get(t3);
    if (a2 != null)
      throw new Error("multiple asset parts not expected.");
    switch (a2 = { name: e3, status: g.FAILED, url: s2, geographic: D(o2.flags).projectVertices }, r2.set(t3, a2), n2) {
      case "COMPLETED":
      case "SUBMITTED":
        a2.status = g.COMPLETED;
        break;
      case "INPROGRESS":
        a2.status = g.PENDING;
        break;
      default:
        a2.status = g.FAILED;
    }
  }
  return r2;
}
function D(t2) {
  return { projectVertices: t2.includes("PROJECT_VERTICES") };
}
!function(t2) {
  t2[t2.FAILED = 0] = "FAILED", t2[t2.PENDING = 1] = "PENDING", t2[t2.COMPLETED = 2] = "COMPLETED";
}(g || (g = {}));
export { l as meshFeatureSetFromJSON };
