import { n as n$3 } from "./deduplicate.js";
import { T } from "./InterleavedLayout.js";
import { O } from "./VertexAttribute.js";
import { C } from "./enums.js";
import { t as t$1 } from "./VertexElementDescriptor.js";
import { db as m$2, eS as p$3, eT as n$1, G as o$1, eU as r$2, eV as P, eW as _$1, eX as l$1, eY as H, eZ as e$1, e_ as z, E as n$2, e$ as x, b6 as t$2, f0 as u$3 } from "./index.js";
function o(t2, o2 = 0) {
  const n2 = t2.stride;
  return t2.fieldNames.filter((e2) => {
    const o3 = t2.fields.get(e2).optional;
    return !(o3 && o3.glPadding);
  }).map((i) => {
    const s = t2.fields.get(i), l2 = s.constructor.ElementCount, u2 = r$1(s.constructor.ElementType), f2 = s.offset, c2 = !(!s.optional || !s.optional.glNormalized);
    return new t$1(i, l2, u2, f2, n2, c2, o2);
  });
}
function r$1(t2) {
  const e2 = n[t2];
  if (e2)
    return e2;
  throw new Error("BufferType not supported in WebGL");
}
const n = { u8: C.UNSIGNED_BYTE, u16: C.UNSIGNED_SHORT, u32: C.UNSIGNED_INT, i8: C.BYTE, i16: C.SHORT, i32: C.INT, f32: C.FLOAT };
const A$1 = T().vec3f(O.POSITION).u16(O.COMPONENTINDEX).u16(O.U16PADDING), e = T().vec2u8(O.SIDENESS);
o(e);
const E = T().vec3f(O.POSITION0).vec3f(O.POSITION1).u16(O.COMPONENTINDEX).u8(O.VARIANTOFFSET, { glNormalized: true }).u8(O.VARIANTSTROKE).u8(O.VARIANTEXTENSION, { glNormalized: true }).u8(O.U8PADDING, { glPadding: true }).u16(O.U16PADDING, { glPadding: true }), S = E.clone().vec3f(O.NORMAL), r = E.clone().vec3f(O.NORMALA).vec3f(O.NORMALB);
new Map([[O.POSITION0, 0], [O.POSITION1, 1], [O.COMPONENTINDEX, 2], [O.VARIANTOFFSET, 3], [O.VARIANTSTROKE, 4], [O.VARIANTEXTENSION, 5], [O.NORMAL, 6], [O.NORMALA, 6], [O.NORMALB, 7], [O.SIDENESS, 8]]);
const p$2 = -1;
var u$2;
function h$1(n2, i, l2, f2 = N) {
  const g2 = n2.vertices.position, m2 = n2.vertices.componentIndex, u2 = m$2(f2.anglePlanar), h2 = m$2(f2.angleSignificantEdge), V2 = Math.cos(h2), S2 = Math.cos(u2), j = I.edge, x$1 = j.position0, E2 = j.position1, D = j.faceNormal0, F = j.faceNormal1, L = y$1(n2), U = w$1(n2), b = U.length / 4, k = i.allocate(b);
  let C2 = 0;
  const H2 = b, K = l2.allocate(H2);
  let M = 0, O2 = 0, P$1 = 0;
  const T2 = p$3(0, b), q = new Float32Array(b);
  n$1(q, (e2, t2, n3) => {
    g2.getVec(U[4 * t2 + 0], x$1), g2.getVec(U[4 * t2 + 1], E2), n3[t2] = x(x$1, E2);
  }), T2.sort((e2, t2) => q[t2] - q[e2]);
  const z2 = new Array(), B = new Array();
  for (let e2 = 0; e2 < b; e2++) {
    const t2 = T2[e2], n3 = q[t2], o2 = U[4 * t2 + 0], r2 = U[4 * t2 + 1], f3 = U[4 * t2 + 2], h3 = U[4 * t2 + 3], w2 = h3 === p$2;
    if (g2.getVec(o2, x$1), g2.getVec(r2, E2), w2)
      o$1(D, L[3 * f3 + 0], L[3 * f3 + 1], L[3 * f3 + 2]), r$2(F, D), j.componentIndex = m2.get(o2), j.cosAngle = P(D, F);
    else {
      if (o$1(D, L[3 * f3 + 0], L[3 * f3 + 1], L[3 * f3 + 2]), o$1(F, L[3 * h3 + 0], L[3 * h3 + 1], L[3 * h3 + 2]), j.componentIndex = m2.get(o2), j.cosAngle = P(D, F), A(j, S2))
        continue;
      j.cosAngle < -0.9999 && r$2(F, D);
    }
    O2 += n3, P$1++, w2 || v(j, V2) ? (i.write(k, C2++, j), z2.push(n3)) : d$2(j, u2) && (l2.write(K, M++, j), B.push(n3));
  }
  const G = new Float32Array(z2.reverse()), J = new Float32Array(B.reverse());
  return { regular: { instancesData: i.trim(k, C2), lodInfo: { lengths: G } }, silhouette: { instancesData: l2.trim(K, M), lodInfo: { lengths: J } }, averageEdgeLength: O2 / P$1 };
}
function v(e2, t2) {
  return e2.cosAngle < t2;
}
function A(e2, t2) {
  return e2.cosAngle > t2;
}
function d$2(e2, t2) {
  const o2 = l$1(e2.cosAngle), r2 = I.fwd, s = I.ortho;
  H(r2, e2.position1, e2.position0);
  return o2 * (P(_$1(s, e2.faceNormal0, e2.faceNormal1), r2) > 0 ? -1 : 1) > t2;
}
function w$1(e2) {
  const t2 = e2.faces.length / 3, n2 = e2.faces, o2 = e2.neighbors;
  let r2 = 0;
  for (let a2 = 0; a2 < t2; a2++) {
    const e3 = o2[3 * a2 + 0], t3 = o2[3 * a2 + 1], s2 = o2[3 * a2 + 2], c3 = n2[3 * a2 + 0], i = n2[3 * a2 + 1], l2 = n2[3 * a2 + 2];
    r2 += e3 === p$2 || c3 < i ? 1 : 0, r2 += t3 === p$2 || i < l2 ? 1 : 0, r2 += s2 === p$2 || l2 < c3 ? 1 : 0;
  }
  const s = new Int32Array(4 * r2);
  let c2 = 0;
  for (let a2 = 0; a2 < t2; a2++) {
    const e3 = o2[3 * a2 + 0], t3 = o2[3 * a2 + 1], r3 = o2[3 * a2 + 2], i = n2[3 * a2 + 0], l2 = n2[3 * a2 + 1], f2 = n2[3 * a2 + 2];
    (e3 === p$2 || i < l2) && (s[c2++] = i, s[c2++] = l2, s[c2++] = a2, s[c2++] = e3), (t3 === p$2 || l2 < f2) && (s[c2++] = l2, s[c2++] = f2, s[c2++] = a2, s[c2++] = t3), (r3 === p$2 || f2 < i) && (s[c2++] = f2, s[c2++] = i, s[c2++] = a2, s[c2++] = r3);
  }
  return s;
}
function y$1(e2) {
  const t2 = e2.faces.length / 3, n2 = e2.vertices.position, o2 = e2.faces, r2 = V.v0, s = V.v1, c2 = V.v2, a2 = new Float32Array(3 * t2);
  for (let i = 0; i < t2; i++) {
    const e3 = o2[3 * i + 0], t3 = o2[3 * i + 1], m2 = o2[3 * i + 2];
    n2.getVec(e3, r2), n2.getVec(t3, s), n2.getVec(m2, c2), e$1(s, s, r2), e$1(c2, c2, r2), _$1(r2, s, c2), z(r2, r2), a2[3 * i + 0] = r2[0], a2[3 * i + 1] = r2[1], a2[3 * i + 2] = r2[2];
  }
  return a2;
}
!function(e2) {
  e2[e2.SOLID = 0] = "SOLID", e2[e2.SKETCH = 1] = "SKETCH";
}(u$2 || (u$2 = {}));
const I = { edge: { position0: n$2(), position1: n$2(), faceNormal0: n$2(), faceNormal1: n$2(), componentIndex: 0, cosAngle: 0 }, ortho: n$2(), fwd: n$2() }, V = { v0: n$2(), v1: n$2(), v2: n$2() }, N = { anglePlanar: 4, angleSignificantEdge: 35 };
function t(t2, o2, n2) {
  const r2 = o2 / 3, c2 = new Uint32Array(n2 + 1), e2 = new Uint32Array(n2 + 1), s = (t3, o3) => {
    t3 < o3 ? c2[t3 + 1]++ : e2[o3 + 1]++;
  };
  for (let x2 = 0; x2 < r2; x2++) {
    const o3 = t2[3 * x2], n3 = t2[3 * x2 + 1], r3 = t2[3 * x2 + 2];
    s(o3, n3), s(n3, r3), s(r3, o3);
  }
  let f2 = 0, l2 = 0;
  for (let x2 = 0; x2 < n2; x2++) {
    const t3 = c2[x2 + 1], o3 = e2[x2 + 1];
    c2[x2 + 1] = f2, e2[x2 + 1] = l2, f2 += t3, l2 += o3;
  }
  const i = new Uint32Array(6 * r2), a2 = c2[n2], w2 = (t3, o3, n3) => {
    if (t3 < o3) {
      const r3 = c2[t3 + 1]++;
      i[2 * r3] = o3, i[2 * r3 + 1] = n3;
    } else {
      const r3 = e2[o3 + 1]++;
      i[2 * a2 + 2 * r3] = t3, i[2 * a2 + 2 * r3 + 1] = n3;
    }
  };
  for (let x2 = 0; x2 < r2; x2++) {
    const o3 = t2[3 * x2], n3 = t2[3 * x2 + 1], r3 = t2[3 * x2 + 2];
    w2(o3, n3, x2), w2(n3, r3, x2), w2(r3, o3, x2);
  }
  const y2 = (t3, o3) => {
    const n3 = 2 * t3, r3 = o3 - t3;
    for (let c3 = 1; c3 < r3; c3++) {
      const t4 = i[n3 + 2 * c3], o4 = i[n3 + 2 * c3 + 1];
      let r4 = c3 - 1;
      for (; r4 >= 0 && i[n3 + 2 * r4] > t4; r4--)
        i[n3 + 2 * r4 + 2] = i[n3 + 2 * r4], i[n3 + 2 * r4 + 3] = i[n3 + 2 * r4 + 1];
      i[n3 + 2 * r4 + 2] = t4, i[n3 + 2 * r4 + 3] = o4;
    }
  };
  for (let x2 = 0; x2 < n2; x2++)
    y2(c2[x2], c2[x2 + 1]), y2(a2 + e2[x2], a2 + e2[x2 + 1]);
  const A2 = new Int32Array(3 * r2), U = (o3, n3) => o3 === t2[3 * n3] ? 0 : o3 === t2[3 * n3 + 1] ? 1 : o3 === t2[3 * n3 + 2] ? 2 : -1, u2 = (t3, o3) => {
    const n3 = U(t3, o3);
    A2[3 * o3 + n3] = -1;
  }, p2 = (t3, o3, n3, r3) => {
    const c3 = U(t3, o3);
    A2[3 * o3 + c3] = r3;
    const e3 = U(n3, r3);
    A2[3 * r3 + e3] = o3;
  };
  for (let x2 = 0; x2 < n2; x2++) {
    let t3 = c2[x2];
    const o3 = c2[x2 + 1];
    let n3 = e2[x2];
    const r3 = e2[x2 + 1];
    for (; t3 < o3 && n3 < r3; ) {
      const o4 = i[2 * t3], r4 = i[2 * a2 + 2 * n3];
      o4 === r4 ? (p2(x2, i[2 * t3 + 1], r4, i[2 * a2 + 2 * n3 + 1]), t3++, n3++) : o4 < r4 ? (u2(x2, i[2 * t3 + 1]), t3++) : (u2(r4, i[2 * a2 + 2 * n3 + 1]), n3++);
    }
    for (; t3 < o3; )
      u2(x2, i[2 * t3 + 1]), t3++;
    for (; n3 < r3; ) {
      u2(i[2 * a2 + 2 * n3], i[2 * a2 + 2 * n3 + 1]), n3++;
    }
  }
  return A2;
}
class a$1 {
  updateSettings(t2) {
    this.settings = t2, this._edgeHashFunction = t2.reducedPrecision ? f$1 : p$1;
  }
  write(t2, o2, e2) {
    const n2 = this._edgeHashFunction(e2);
    y.seed = n2;
    const i = y.getIntRange(0, 255), r2 = y.getIntRange(0, this.settings.variants - 1), s = 0.7, a2 = y.getFloat(), c2 = 255 * (0.5 * g$1(-(1 - Math.min(a2 / s, 1)) + Math.max(0, a2 - s) / (1 - s), 1.2) + 0.5);
    t2.position0.setVec(o2, e2.position0), t2.position1.setVec(o2, e2.position1), t2.componentIndex.set(o2, e2.componentIndex), t2.variantOffset.set(o2, i), t2.variantStroke.set(o2, r2), t2.variantExtension.set(o2, c2);
  }
  trim(t2, o2) {
    return t2.slice(0, o2);
  }
}
const c = new Float32Array(6), m$1 = new Uint32Array(c.buffer), u$1 = new Uint32Array(1);
function p$1(t2) {
  const o2 = c;
  o2[0] = t2.position0[0], o2[1] = t2.position0[1], o2[2] = t2.position0[2], o2[3] = t2.position1[0], o2[4] = t2.position1[1], o2[5] = t2.position1[2], u$1[0] = 5381;
  for (let e2 = 0; e2 < m$1.length; e2++)
    u$1[0] = 31 * u$1[0] + m$1[e2];
  return u$1[0];
}
function f$1(t2) {
  const o2 = c;
  o2[0] = h(t2.position0[0]), o2[1] = h(t2.position0[1]), o2[2] = h(t2.position0[2]), o2[3] = h(t2.position1[0]), o2[4] = h(t2.position1[1]), o2[5] = h(t2.position1[2]), u$1[0] = 5381;
  for (let e2 = 0; e2 < m$1.length; e2++)
    u$1[0] = 31 * u$1[0] + m$1[e2];
  return u$1[0];
}
const l = 1e4;
function h(t2) {
  return Math.round(t2 * l) / l;
}
function g$1(t2, o2) {
  const e2 = t2 < 0 ? -1 : 1;
  return Math.abs(t2) ** o2 * e2;
}
class d$1 {
  constructor() {
    this._commonWriter = new a$1();
  }
  updateSettings(t2) {
    this._commonWriter.updateSettings(t2);
  }
  allocate(t2) {
    return S.createBuffer(t2);
  }
  write(t2, n2, i) {
    this._commonWriter.write(t2, n2, i), u$3(_, i.faceNormal0, i.faceNormal1), z(_, _), t2.normal.setVec(n2, _);
  }
  trim(t2, o2) {
    return this._commonWriter.trim(t2, o2);
  }
}
d$1.Layout = S, d$1.glLayout = o(S, 1);
class w {
  constructor() {
    this._commonWriter = new a$1();
  }
  updateSettings(t2) {
    this._commonWriter.updateSettings(t2);
  }
  allocate(t2) {
    return r.createBuffer(t2);
  }
  write(t2, o2, e2) {
    this._commonWriter.write(t2, o2, e2), t2.normalA.setVec(o2, e2.faceNormal0), t2.normalB.setVec(o2, e2.faceNormal1);
  }
  trim(t2, o2) {
    return this._commonWriter.trim(t2, o2);
  }
}
w.Layout = r, w.glLayout = o(r, 1);
const _ = n$2(), y = new t$2();
function f(e2) {
  const t2 = u(e2.data, e2.skipDeduplicate, e2.indices, e2.indicesLength);
  return p.updateSettings(e2.writerSettings), d.updateSettings(e2.writerSettings), h$1(t2, p, d);
}
function u(i, r2, n2, o2) {
  if (r2) {
    const e2 = t(n2, o2, i.count);
    return new g(n2, o2, e2, i);
  }
  const c2 = n$3(i.buffer, i.stride / 4, { originalIndices: n2, originalIndicesLength: o2 }), f2 = t(c2.indices, o2, c2.uniqueCount);
  return { faces: c2.indices, facesLength: c2.indices.length, neighbors: f2, vertices: A$1.createView(c2.buffer) };
}
class g {
  constructor(e2, t2, i, r2) {
    this.faces = e2, this.facesLength = t2, this.neighbors = i, this.vertices = r2;
  }
}
const p = new d$1(), d = new w(), a = T().vec3f(O.POSITION0).vec3f(O.POSITION1), m = T().vec3f(O.POSITION0).vec3f(O.POSITION1).u16(O.COMPONENTINDEX).u16(O.U16PADDING, { glPadding: true });
export { A$1 as A, a, f, h$1 as h, m, u };
