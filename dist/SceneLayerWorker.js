import { cj as a$2, gF as t, a as r } from "./index.js";
import "./sphere.js";
import "vue";
import "./mat3f64.js";
import "./mat4f64.js";
import "./quatf64.js";
var n$2, e$1;
!function(n2) {
  n2[n2.None = 0] = "None", n2[n2.Int16 = 1] = "Int16", n2[n2.Int32 = 2] = "Int32";
}(n$2 || (n$2 = {})), function(n2) {
  n2[n2.Replace = 0] = "Replace", n2[n2.Outside = 1] = "Outside", n2[n2.Inside = 2] = "Inside", n2[n2.Finished = 3] = "Finished";
}(e$1 || (e$1 = {}));
function e() {
  return n$1 || (n$1 = new Promise((t2) => import("./i3s.js").then((t3) => t3.i).then(({ default: e2 }) => {
    const n2 = e2({ locateFile: i$1, onRuntimeInitialized: () => t2(n2) });
    delete n2.then;
  })).catch((t2) => {
    throw t2;
  })), n$1;
}
function i$1(e2) {
  return a$2(`esri/libs/i3s/${e2}`);
}
let n$1;
var n, o, s$1, a$1, c$1;
!function(e2) {
  e2[e2.Unmodified = 0] = "Unmodified", e2[e2.Culled = 1] = "Culled", e2[e2.NotChecked = 2] = "NotChecked";
}(n || (n = {})), function(e2) {
  e2[e2.Unmodified = 0] = "Unmodified", e2[e2.PotentiallyModified = 1] = "PotentiallyModified", e2[e2.Culled = 2] = "Culled", e2[e2.Unknown = 3] = "Unknown", e2[e2.NotChecked = 4] = "NotChecked";
}(o || (o = {}));
!function(e2) {
  e2[e2.Unknown = 0] = "Unknown", e2[e2.Uncached = 1] = "Uncached", e2[e2.Cached = 2] = "Cached";
}(s$1 || (s$1 = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.MaxScreenThreshold = 1] = "MaxScreenThreshold", e2[e2.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e2[e2.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e2[e2.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(a$1 || (a$1 = {})), function(e2) {
  e2[e2.Hole = 0] = "Hole", e2[e2.Leaf = 1] = "Leaf";
}(c$1 || (c$1 = {}));
async function s(e2) {
  await g();
  const t2 = [e2.geometryBuffer];
  return { result: m(e2, t2), transferList: t2 };
}
async function f(e2) {
  var _a;
  await g();
  const r2 = [e2.geometryBuffer], { geometryBuffer: n2 } = e2, o2 = n2.byteLength, s2 = y._malloc(o2), f2 = new Uint8Array(y.HEAPU8.buffer, s2, o2);
  f2.set(new Uint8Array(n2));
  const i2 = y.dracoDecompressPointCloudData(s2, f2.byteLength);
  if (y._free(s2), i2.error.length > 0)
    throw `i3s.wasm: ${i2.error}`;
  const a2 = ((_a = i2.featureIds) == null ? void 0 : _a.length) > 0 ? t(i2.featureIds) : null, u2 = t(i2.positions);
  return a2 && r2.push(a2.buffer), r2.push(u2.buffer), { result: { positions: u2, featureIds: a2 }, transferList: r2 };
}
async function i(e2) {
  await g(), E(e2);
  const t2 = { buffer: e2.buffer };
  return { result: t2, transferList: [t2.buffer] };
}
async function a(e2) {
  await g(), b(e2);
}
async function u(e2) {
  await g(), y.setLegacySchema(e2.context, e2.jsonSchema);
}
function l(e2) {
  h(e2);
}
let c, y;
function b(e2) {
  const t2 = e2.modifications, r2 = y._malloc(8 * t2.length), n2 = new Float64Array(y.HEAPU8.buffer, r2, t2.length);
  for (let o2 = 0; o2 < t2.length; ++o2)
    n2[o2] = t2[o2];
  y.setModifications(e2.context, r2, t2.length, e2.isGeodetic), y._free(r2);
}
function m(n2, o2) {
  if (!y)
    return null;
  const { context: s2, localOrigin: f2, globalTrafo: i2, mbs: a2, obb: u2, elevationOffset: l2, geometryBuffer: c2, geometryDescriptor: b2, indexToVertexProjector: m2, vertexToRenderProjector: d2 } = n2, E2 = y._malloc(c2.byteLength), h2 = 33, g2 = y._malloc(h2 * Float64Array.BYTES_PER_ELEMENT), w2 = new Uint8Array(y.HEAPU8.buffer, E2, c2.byteLength);
  w2.set(new Uint8Array(c2));
  const A = new Float64Array(y.HEAPU8.buffer, g2, h2);
  p(A, f2);
  let _ = A.byteOffset + 3 * A.BYTES_PER_ELEMENT, L = new Float64Array(A.buffer, _);
  p(L, i2), _ += 16 * A.BYTES_PER_ELEMENT, L = new Float64Array(A.buffer, _), p(L, a2), _ += 4 * A.BYTES_PER_ELEMENT, r(u2) && (L = new Float64Array(A.buffer, _), p(L, u2.center), _ += 3 * A.BYTES_PER_ELEMENT, L = new Float64Array(A.buffer, _), p(L, u2.halfSize), _ += 3 * A.BYTES_PER_ELEMENT, L = new Float64Array(A.buffer, _), p(L, u2.quaternion));
  const I = b2, T = { isDraco: false, isLegacy: false, color: n2.layouts.some((e2) => e2.some((e3) => e3.name === "color")), normal: n2.needNormals && n2.layouts.some((e2) => e2.some((e3) => e3.name === "normalCompressed")), uv0: n2.layouts.some((e2) => e2.some((e3) => e3.name === "uv0")), uvRegion: n2.layouts.some((e2) => e2.some((e3) => e3.name === "uvRegion")), featureIndex: I.featureIndex }, P = y.process(s2, !!n2.obb, E2, w2.byteLength, I, T, g2, l2, m2, d2, n2.normalReferenceFrame);
  if (y._free(g2), y._free(E2), P.error.length > 0)
    throw `i3s.wasm: ${P.error}`;
  if (P.discarded)
    return null;
  const U = P.componentOffsets.length > 0 ? t(P.componentOffsets) : null, B = P.featureIds.length > 0 ? t(P.featureIds) : null, F = t(P.interleavedVertedData).buffer, M = P.indicesType === n$2.Int16 ? t(new Uint16Array(P.indices.buffer, P.indices.byteOffset, P.indices.byteLength / 2)) : t(new Uint32Array(P.indices.buffer, P.indices.byteOffset, P.indices.byteLength / 4)), S = t(P.positions), x = P.positionIndicesType === n$2.Int16 ? t(new Uint16Array(P.positionIndices.buffer, P.positionIndices.byteOffset, P.positionIndices.byteLength / 2)) : t(new Uint32Array(P.positionIndices.buffer, P.positionIndices.byteOffset, P.positionIndices.byteLength / 4)), O = { layout: n2.layouts[0], interleavedVertexData: F, indices: M, hasColors: P.hasColors, hasModifications: P.hasModifications, positionData: { data: S, indices: x } };
  return B && o2.push(B.buffer), U && o2.push(U.buffer), o2.push(F), o2.push(M.buffer), o2.push(S.buffer), o2.push(x.buffer), { componentOffsets: U, featureIds: B, transformedGeometry: O, obb: P.obb };
}
function d(e2) {
  return e2 === 0 ? o.Unmodified : e2 === 1 ? o.PotentiallyModified : e2 === 2 ? o.Culled : o.Unknown;
}
function E(e2) {
  const { context: t2, buffer: r2 } = e2, n2 = y._malloc(r2.byteLength), o2 = r2.byteLength / Float64Array.BYTES_PER_ELEMENT, s2 = new Float64Array(y.HEAPU8.buffer, n2, o2), f2 = new Float64Array(r2);
  s2.set(f2), y.filterOBBs(t2, n2, o2), f2.set(s2), y._free(n2);
}
function h(e2) {
  y && y.destroy(e2);
}
function p(e2, t2) {
  for (let r2 = 0; r2 < t2.length; ++r2)
    e2[r2] = t2[r2];
}
function g() {
  return y ? Promise.resolve() : (c || (c = e().then((e2) => {
    y = e2, c = null;
  })), c);
}
const w = { transform: m, destroy: h };
export { l as destroyContext, f as dracoDecompressPointCloudData, i as filterObbsForModifications, E as filterObbsForModificationsSync, g as initialize, d as interpretObbModificationResults, s as process, u as setLegacySchema, a as setModifications, b as setModificationsSync, w as test };
