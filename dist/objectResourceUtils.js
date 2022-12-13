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
import { a as a$n } from "./devEnvironmentUtils.js";
import { t as t$d, a as r$6, kA as c$e, kB as i$i, kC as t$e, F as e$j, aV as i$j, eP as l$a, E as n$a, ab as r$7, fe as t$f, gu as A$5, gt as p$5, g4 as e$l, eZ as e$m, a4 as s$b, eW as _$6, G as o$n, f0 as u$c, a5 as g$8, s as s$c, g as s$d, z as r$8, ca as f$b, af as n$c, gC as r$9, cj as a$e, b1 as f$c, j as c$f, N as n$d, jj as V$4, cl as X$1, gn as o$o, kD as e$n, l as f$d, kE as c$h, v as v$8, w as a$g, f2 as i$k, g3 as n$f, ep as h$9, h5 as w$5, hC as C$3, kg as h$a, dw as a$h, V as a$i, kF as d$d, kG as q$1, e_ as z$1, f as c$i, go as E$8, kH as G$4, h as has, e as a$j, k as e$r, kI as f$e, kJ as c$k, f6 as O$5, kK as e$s, $ as e$t, f1 as r$d, gB as n$i, e$ as x$8, r as r$e, kL as l$b, eU as r$f, eV as P$4, dP as S$7, jq as c$m, kM as e$v, e8 as b$7, U as U$3, aL as w$6, ki as e$w, kN as A$7, gk as q$2, fk as g$9, f5 as h$c, kh as i$n } from "./index.js";
import { e as e$p } from "./mat3f64.js";
import { e as e$q, o as o$q } from "./mat4f64.js";
import { c as c$j, x as x$7, u as u$f, i as i$l, L as L$4, O as O$6, E as E$9 } from "./BufferView.js";
import { t as t$j, r as r$i, f as f$f, e as e$y } from "./vec33.js";
import { u as u$d, n as n$b, m as m$8, a as n$k, o as o$s, r as r$h, b as r$j, c as n$l, d as o$t, e as e$x, t as t$k, i as i$m, f as f$g, g as o$u } from "./DefaultMaterial_COLOR_GAMMA.js";
import { r as r$g } from "./Version.js";
import { t as t$h } from "./requestImageUtils.js";
import { a as a$d, c as c$g, O as O$3, b as t$i, o as o$p, r as r$b, C as C$4, W as W$1, _ as _$8, d as o$r, n as n$j, e as e$u, f as c$l, A as A$6, h as h$b, l as l$c, g as a$l, i as a$m, S as S$6 } from "./OrderIndependentTransparency.js";
import { e as e$k, v as v$7 } from "./Util2.js";
import { s as s$a, R as R$2 } from "./sphere.js";
import { O as O$2 } from "./VertexAttribute.js";
import { u as u$e, P as P$3, L as L$3, C as C$2, F as F$1, D as D$2, M as M$3, G as G$3, Y as Y$1, V as V$5, E as E$7, I as I$5, O as O$4 } from "./enums.js";
import { E as E$5, n as n$e, a as a$k } from "./Texture.js";
import { _ as _$7, a as a$f, E as E$6, x as x$6, n as n$g } from "./VertexArrayObject.js";
import { t as t$g } from "./VertexElementDescriptor.js";
import { T as T$5 } from "./InterleavedLayout.js";
import { r as r$a, n as n$h } from "./vec3f32.js";
import { S as S$5 } from "./quat.js";
import { e as e$o } from "./quatf64.js";
import { r as r$c } from "./symbolColorUtils.js";
function c$d(c2) {
  if (t$d(c2))
    return null;
  const m2 = r$6(c2.offset) ? c2.offset : c$e, e2 = r$6(c2.rotation) ? c2.rotation : 0, i2 = r$6(c2.scale) ? c2.scale : i$i, h2 = t$e(1, 0, 0, 0, 1, 0, m2[0], m2[1], 1), u2 = t$e(Math.cos(e2), -Math.sin(e2), 0, Math.sin(e2), Math.cos(e2), 0, 0, 0, 1), p2 = t$e(i2[0], 0, 0, 0, i2[1], 0, 0, 0, 1), j2 = e$j();
  return i$j(j2, u2, p2), i$j(j2, h2, j2), j2;
}
class s$9 {
  constructor(s2, t2, e2, h2, i2) {
    this.name = s2, this.stageResources = t2, this.lodThreshold = e2, this.pivotOffset = h2, this.numberOfVertices = i2;
  }
}
class a$c {
  constructor(i2, s2, a2, c2) {
    this.primitiveIndices = i2, this._numIndexPerPrimitive = s2, this.indices = a2, this.position = c2, this.center = n$a(), this._children = void 0, e$k(i2.length >= 1), e$k(a2.length % this._numIndexPerPrimitive == 0), e$k(a2.length >= i2.length * this._numIndexPerPrimitive), e$k(c2.size === 3 || c2.size === 4);
    const { data: o2, size: d2 } = c2, l2 = i2.length;
    let M2 = d2 * a2[this._numIndexPerPrimitive * i2[0]];
    b$6.clear(), b$6.push(M2), this.bbMin = r$7(o2[M2], o2[M2 + 1], o2[M2 + 2]), this.bbMax = t$f(this.bbMin);
    for (let t2 = 0; t2 < l2; ++t2) {
      const s3 = this._numIndexPerPrimitive * i2[t2];
      for (let i3 = 0; i3 < this._numIndexPerPrimitive; ++i3) {
        M2 = d2 * a2[s3 + i3], b$6.push(M2);
        let t3 = o2[M2];
        this.bbMin[0] = Math.min(t3, this.bbMin[0]), this.bbMax[0] = Math.max(t3, this.bbMax[0]), t3 = o2[M2 + 1], this.bbMin[1] = Math.min(t3, this.bbMin[1]), this.bbMax[1] = Math.max(t3, this.bbMax[1]), t3 = o2[M2 + 2], this.bbMin[2] = Math.min(t3, this.bbMin[2]), this.bbMax[2] = Math.max(t3, this.bbMax[2]);
      }
    }
    A$5(this.center, this.bbMin, this.bbMax, 0.5), this.radius = 0.5 * Math.max(Math.max(this.bbMax[0] - this.bbMin[0], this.bbMax[1] - this.bbMin[1]), this.bbMax[2] - this.bbMin[2]);
    let m2 = this.radius * this.radius;
    for (let t2 = 0; t2 < b$6.length; ++t2) {
      M2 = b$6.getItemAt(t2);
      const i3 = o2[M2] - this.center[0], s3 = o2[M2 + 1] - this.center[1], e2 = o2[M2 + 2] - this.center[2], n2 = i3 * i3 + s3 * s3 + e2 * e2;
      if (n2 <= m2)
        continue;
      const r2 = Math.sqrt(n2), h2 = 0.5 * (r2 - this.radius);
      this.radius = this.radius + h2, m2 = this.radius * this.radius;
      const a3 = h2 / r2;
      this.center[0] += i3 * a3, this.center[1] += s3 * a3, this.center[2] += e2 * a3;
    }
    b$6.clear();
  }
  getCenter() {
    return this.center;
  }
  getBSRadius() {
    return this.radius;
  }
  getBBMin() {
    return this.bbMin;
  }
  getBBMax() {
    return this.bbMax;
  }
  getChildren() {
    if (this._children)
      return this._children;
    if (p$5(this.bbMin, this.bbMax) > 1) {
      const i2 = A$5(n$a(), this.bbMin, this.bbMax, 0.5), s2 = this.primitiveIndices.length, n2 = new Uint8Array(s2), r2 = new Array(8);
      for (let t2 = 0; t2 < 8; ++t2)
        r2[t2] = 0;
      const { data: h2, size: b2 } = this.position;
      for (let t2 = 0; t2 < s2; ++t2) {
        let s3 = 0;
        const e2 = this._numIndexPerPrimitive * this.primitiveIndices[t2];
        let a2 = b2 * this.indices[e2], c3 = h2[a2], o3 = h2[a2 + 1], d2 = h2[a2 + 2];
        for (let i3 = 1; i3 < this._numIndexPerPrimitive; ++i3) {
          a2 = b2 * this.indices[e2 + i3];
          const t3 = h2[a2], s4 = h2[a2 + 1], n3 = h2[a2 + 2];
          t3 < c3 && (c3 = t3), s4 < o3 && (o3 = s4), n3 < d2 && (d2 = n3);
        }
        c3 < i2[0] && (s3 |= 1), o3 < i2[1] && (s3 |= 2), d2 < i2[2] && (s3 |= 4), n2[t2] = s3, ++r2[s3];
      }
      let c2 = 0;
      for (let t2 = 0; t2 < 8; ++t2)
        r2[t2] > 0 && ++c2;
      if (c2 < 2)
        return;
      const o2 = new Array(8);
      for (let t2 = 0; t2 < 8; ++t2)
        o2[t2] = r2[t2] > 0 ? new Uint32Array(r2[t2]) : void 0;
      for (let t2 = 0; t2 < 8; ++t2)
        r2[t2] = 0;
      for (let t2 = 0; t2 < s2; ++t2) {
        const i3 = n2[t2];
        o2[i3][r2[i3]++] = this.primitiveIndices[t2];
      }
      this._children = new Array(8);
      for (let t2 = 0; t2 < 8; ++t2)
        o2[t2] !== void 0 && (this._children[t2] = new a$c(o2[t2], this._numIndexPerPrimitive, this.indices, this.position));
    }
    return this._children;
  }
  static prune() {
    b$6.prune();
  }
}
const b$6 = new l$a({ deallocator: null });
class r$5 {
  constructor() {
    this.id = e$l();
  }
  unload() {
  }
}
var e$i;
!function(e2) {
  e2[e2.Layer = 0] = "Layer", e2[e2.Object = 1] = "Object", e2[e2.Geometry = 2] = "Geometry", e2[e2.Material = 3] = "Material", e2[e2.Texture = 4] = "Texture", e2[e2.COUNT = 5] = "COUNT";
}(e$i || (e$i = {}));
function j$3(t2) {
  return t2 ? { p0: t$f(t2.p0), p1: t$f(t2.p1), p2: t$f(t2.p2) } : { p0: n$a(), p1: n$a(), p2: n$a() };
}
function w$4(t2, n2, o2) {
  return e$m(O$1, n2, t2), e$m(V$3, o2, t2), s$b(_$6(O$1, O$1, V$3)) / 2;
}
new s$a(v$7);
new s$a(() => j$3());
const O$1 = n$a(), V$3 = n$a();
function c$c(o2, r2, c2) {
  if (!o2 || !r2)
    return false;
  const { size: a2, data: f2 } = o2;
  o$n(c2, 0, 0, 0), o$n(g$7, 0, 0, 0);
  let m2 = 0, h2 = 0;
  for (let p2 = 0; p2 < r2.length - 2; p2 += 3) {
    const o3 = r2[p2 + 0] * a2, j2 = r2[p2 + 1] * a2, d2 = r2[p2 + 2] * a2;
    o$n(i$h, f2[o3 + 0], f2[o3 + 1], f2[o3 + 2]), o$n(u$b, f2[j2 + 0], f2[j2 + 1], f2[j2 + 2]), o$n(l$9, f2[d2 + 0], f2[d2 + 1], f2[d2 + 2]);
    const z2 = w$4(i$h, u$b, l$9);
    z2 ? (u$c(i$h, i$h, u$b), u$c(i$h, i$h, l$9), g$8(i$h, i$h, 1 / 3 * z2), u$c(c2, c2, i$h), m2 += z2) : (u$c(g$7, g$7, i$h), u$c(g$7, g$7, u$b), u$c(g$7, g$7, l$9), h2 += 3);
  }
  return (h2 !== 0 || m2 !== 0) && (m2 !== 0 ? (g$8(c2, c2, 1 / m2), true) : h2 !== 0 && (g$8(c2, g$7, 1 / h2), true));
}
function a$b(n2, o2, r2) {
  if (!n2 || !o2)
    return false;
  const { size: s2, data: c2 } = n2;
  o$n(r2, 0, 0, 0);
  let a2 = -1, f2 = 0;
  for (let t2 = 0; t2 < o2.length; t2++) {
    const n3 = o2[t2] * s2;
    a2 !== n3 && (r2[0] += c2[n3 + 0], r2[1] += c2[n3 + 1], r2[2] += c2[n3 + 2], f2++), a2 = n3;
  }
  return f2 > 1 && g$8(r2, r2, 1 / f2), f2 > 0;
}
const i$h = n$a(), u$b = n$a(), l$9 = n$a(), g$7 = n$a();
class d$c extends r$5 {
  constructor(t2, i2 = [], n2 = a$d.Triangle, r2 = null, o2 = -1) {
    super(), this._primitiveType = n2, this.objectAndLayerIdColor = r2, this.edgeIndicesLength = o2, this.type = e$i.Geometry, this._vertexAttributes = new Map(), this._indices = new Map(), this._boundingInfo = null;
    for (const [e2, s2] of t2)
      s2 && this._vertexAttributes.set(e2, __spreadValues({}, s2));
    if (i2 == null || i2.length === 0) {
      const t3 = l$8(this._vertexAttributes), e2 = u$d(t3);
      this.edgeIndicesLength = this.edgeIndicesLength < 0 ? t3 : this.edgeIndicesLength;
      for (const i3 of this._vertexAttributes.keys())
        this._indices.set(i3, e2);
    } else
      for (const [e2, s2] of i2)
        s2 && (this._indices.set(e2, n$b(s2)), e2 === O$2.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._indices.get(e2).length : this.edgeIndicesLength));
  }
  cloneShallow() {
    const t2 = new d$c([], void 0, this._primitiveType, this.objectAndLayerIdColor, void 0), { _vertexAttributes: e2, _indices: i2 } = t2;
    return this._vertexAttributes.forEach((t3, i3) => e2.set(i3, t3)), this._indices.forEach((t3, e3) => i2.set(e3, t3)), t2.screenToWorldRatio = this.screenToWorldRatio, t2._boundingInfo = this._boundingInfo, t2;
  }
  get vertexAttributes() {
    return this._vertexAttributes;
  }
  getMutableAttribute(t2) {
    const e2 = this._vertexAttributes.get(t2);
    return e2 && !e2.exclusive && (e2.data = Array.from(e2.data), e2.exclusive = true), e2;
  }
  get indices() {
    return this._indices;
  }
  get indexCount() {
    const t2 = this._indices.values().next().value;
    return t2 ? t2.length : 0;
  }
  get primitiveType() {
    return this._primitiveType;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return t$d(this._boundingInfo) && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(t2) {
    return this.primitiveType === a$d.Triangle ? this._computeAttachmentOriginTriangles(t2) : this._computeAttachmentOriginPoints(t2);
  }
  _computeAttachmentOriginTriangles(t2) {
    const e2 = this.indices.get(O$2.POSITION), i2 = this.vertexAttributes.get(O$2.POSITION);
    return c$c(i2, e2, t2);
  }
  _computeAttachmentOriginPoints(t2) {
    const e2 = this.indices.get(O$2.POSITION), i2 = this.vertexAttributes.get(O$2.POSITION);
    return a$b(i2, e2, t2);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const t2 = this.indices.get(O$2.POSITION);
    if (!t2 || t2.length === 0)
      return null;
    const n2 = this.primitiveType === a$d.Triangle ? 3 : 1;
    e$k(t2.length % n2 == 0, "Indexing error: " + t2.length + " not divisible by " + n2);
    const s2 = u$d(t2.length / n2), r2 = this.vertexAttributes.get(O$2.POSITION);
    return r2 ? new a$c(s2, n2, t2, r2) : null;
  }
}
function l$8(t2) {
  const e2 = t2.values().next().value;
  return e2 == null ? 0 : e2.data.length / e2.size;
}
class t$c {
}
function n$9(t2, ...n2) {
  let o2 = "";
  for (let r2 = 0; r2 < n2.length; r2++)
    o2 += t2[r2] + n2[r2];
  return o2 += t2[t2.length - 1], o2;
}
!function(t2) {
  function n2(t3) {
    return Math.round(t3).toString();
  }
  function o2(t3) {
    return t3.toPrecision(8);
  }
  t2.int = n2, t2.float = o2;
}(n$9 || (n$9 = {}));
function o$m(o2, t2 = true) {
  o2.attributes.add(O$2.POSITION, "vec2"), t2 && o2.varyings.add("uv", "vec2"), o2.vertex.code.add(n$9`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t2 ? n$9`uv = position * 0.5 + vec2(0.5);` : ""}
    }
  `);
}
var a$a;
!function(a2) {
  a2[a2.Pass = 0] = "Pass", a2[a2.Draw = 1] = "Draw";
}(a$a || (a$a = {}));
class i$g {
  constructor(i2, s2, t2, a2, n2 = null) {
    this.name = i2, this.type = s2, this.arraySize = n2, this.bind = { [a$a.Pass]: null, [a$a.Draw]: null }, r$6(t2) && r$6(a2) && (this.bind[t2] = a2);
  }
  equals(e2) {
    return this.type === e2.type && this.name === e2.name && this.arraySize === e2.arraySize;
  }
}
class e$h extends i$g {
  constructor(r2, e2) {
    super(r2, "vec4", a$a.Pass, (s2, o2, t2) => s2.setUniform4fv(r2, e2(o2, t2)));
  }
}
const s$8 = s$c.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
class i$f {
  constructor() {
    this._includedModules = new Map();
  }
  include(e2, r2) {
    if (this._includedModules.has(e2)) {
      const t2 = this._includedModules.get(e2);
      if (t2 !== r2) {
        s$8.error("Trying to include shader module multiple times with different sets of options.");
        const r3 = new Set();
        for (const n2 of Object.keys(t2))
          t2[n2] !== e2[n2] && r3.add(n2);
        for (const n2 of Object.keys(e2))
          t2[n2] !== e2[n2] && r3.add(n2);
        r3.forEach((r4) => console.error(`  ${r4}: current ${t2[r4]} new ${e2[r4]}`));
      }
    } else
      this._includedModules.set(e2, r2), e2(this.builder, r2);
  }
}
class o$l extends i$f {
  constructor() {
    super(...arguments), this.vertex = new u$a(), this.fragment = new u$a(), this.attributes = new m$7(), this.varyings = new h$8(), this.extensions = new d$b(), this.constants = new l$7();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e2) {
    const r2 = this.extensions.generateSource(e2), t2 = this.attributes.generateSource(e2), n2 = this.varyings.generateSource(), s2 = e2 === "vertex" ? this.vertex : this.fragment, i2 = s2.uniforms.generateSource(), o2 = s2.code.generateSource(), a2 = e2 === "vertex" ? f$a : _$5, c2 = this.constants.generateSource().concat(s2.constants.generateSource());
    return `
${r2.join("\n")}

${a2}

${c2.join("\n")}

${i2.join("\n")}

${t2.join("\n")}

${n2.join("\n")}

${o2.join("\n")}`;
  }
  generateBind(e2, r2) {
    const n2 = new Map();
    this.vertex.uniforms.entries.forEach((r3) => {
      const s3 = r3.bind[e2];
      r$6(s3) && n2.set(r3.name, s3);
    }), this.fragment.uniforms.entries.forEach((r3) => {
      const s3 = r3.bind[e2];
      r$6(s3) && n2.set(r3.name, s3);
    });
    const s2 = Array.from(n2.values()), i2 = s2.length;
    return (e3, t2, n3) => {
      for (let o2 = 0; o2 < i2; ++o2)
        s2[o2](r2, e3, t2, n3);
    };
  }
}
class a$9 {
  constructor() {
    this._entries = new Map();
  }
  add(e2) {
    if (!Array.isArray(e2))
      return this._add(e2);
    for (const r2 of e2)
      this._add(r2);
  }
  get(e2) {
    return this._entries.get(e2);
  }
  _add(r2) {
    if (t$d(r2))
      s$8.error(`Trying to add null Uniform from ${new Error().stack}.`);
    else {
      if (this._entries.has(r2.name) && !this._entries.get(r2.name).equals(r2))
        throw new s$d(`Duplicate uniform name ${r2.name} for different uniform type`);
      this._entries.set(r2.name, r2);
    }
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e2) => r$6(e2.arraySize) ? `uniform ${e2.type} ${e2.name}[${e2.arraySize}];` : `uniform ${e2.type} ${e2.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}
class c$b {
  constructor() {
    this._entries = new Array();
  }
  add(e2) {
    this._entries.push(e2);
  }
  generateSource() {
    return this._entries;
  }
}
class u$a extends i$f {
  constructor() {
    super(...arguments), this.uniforms = new a$9(), this.code = new c$b(), this.constants = new l$7();
  }
  get builder() {
    return this;
  }
}
class m$7 {
  constructor() {
    this._entries = new Array();
  }
  add(e2, r2) {
    this._entries.push([e2, r2]);
  }
  generateSource(e2) {
    return e2 === "fragment" ? [] : this._entries.map((e3) => `attribute ${e3[1]} ${e3[0]};`);
  }
}
class h$8 {
  constructor() {
    this._entries = new Array();
  }
  add(e2, r2) {
    this._entries.push([e2, r2]);
  }
  generateSource() {
    return this._entries.map((e2) => `varying ${e2[1]} ${e2[0]};`);
  }
}
class d$b {
  constructor() {
    this._entries = new Set();
  }
  add(e2) {
    this._entries.add(e2);
  }
  generateSource(e2) {
    const r2 = e2 === "vertex" ? d$b.ALLOWLIST_VERTEX : d$b.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e3) => r2.includes(e3)).map((e3) => `#extension ${e3} : enable`);
  }
}
d$b.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], d$b.ALLOWLIST_VERTEX = [];
class l$7 {
  constructor() {
    this._entries = new Set();
  }
  add(e2, r2, t2) {
    let n2 = "ERROR_CONSTRUCTOR_STRING";
    switch (r2) {
      case "float":
        n2 = l$7._numberToFloatStr(t2);
        break;
      case "int":
        n2 = l$7._numberToIntStr(t2);
        break;
      case "bool":
        n2 = t2.toString();
        break;
      case "vec2":
        n2 = `vec2(${l$7._numberToFloatStr(t2[0])},                            ${l$7._numberToFloatStr(t2[1])})`;
        break;
      case "vec3":
        n2 = `vec3(${l$7._numberToFloatStr(t2[0])},                            ${l$7._numberToFloatStr(t2[1])},                            ${l$7._numberToFloatStr(t2[2])})`;
        break;
      case "vec4":
        n2 = `vec4(${l$7._numberToFloatStr(t2[0])},                            ${l$7._numberToFloatStr(t2[1])},                            ${l$7._numberToFloatStr(t2[2])},                            ${l$7._numberToFloatStr(t2[3])})`;
        break;
      case "ivec2":
        n2 = `ivec2(${l$7._numberToIntStr(t2[0])},                             ${l$7._numberToIntStr(t2[1])})`;
        break;
      case "ivec3":
        n2 = `ivec3(${l$7._numberToIntStr(t2[0])},                             ${l$7._numberToIntStr(t2[1])},                             ${l$7._numberToIntStr(t2[2])})`;
        break;
      case "ivec4":
        n2 = `ivec4(${l$7._numberToIntStr(t2[0])},                             ${l$7._numberToIntStr(t2[1])},                             ${l$7._numberToIntStr(t2[2])},                             ${l$7._numberToIntStr(t2[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n2 = `${r2}(${Array.prototype.map.call(t2, (e3) => l$7._numberToFloatStr(e3)).join(", ")})`;
    }
    return this._entries.add(`const ${r2} ${e2} = ${n2};`), this;
  }
  static _numberToIntStr(e2) {
    return e2.toFixed(0);
  }
  static _numberToFloatStr(e2) {
    return Number.isInteger(e2) ? e2.toFixed(1) : e2.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
}
const _$5 = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif", f$a = "precision highp float;\nprecision highp sampler2D;";
const t$b = "Size", n$8 = "InvSize";
function r$4(r2, i2, o2 = false, u2 = 0) {
  if (r2.hasWebGL2Context) {
    const t2 = n$9`vec2(textureSize(${i2}, ${n$9.int(u2)}))`;
    return o2 ? "(1.0 / " + t2 + ")" : t2;
  }
  return o2 ? i2 + n$8 : i2 + t$b;
}
function i$e(t2, r2, i2, o2 = null, u2 = 0) {
  if (t2.hasWebGL2Context)
    return n$9`texelFetch(${r2}, ivec2(${i2}), ${n$9.int(u2)})`;
  let $ = n$9`texture2D(${r2}, ${i2} * `;
  return $ += o2 ? n$9`(${o2}))` : n$9`${r2 + n$8})`, $;
}
class e$g extends i$g {
  constructor(r2, e2) {
    super(r2, "vec2", a$a.Pass, (s2, o2, t2) => s2.setUniform2fv(r2, e2(o2, t2)));
  }
}
var e$f;
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Size = 1] = "Size", e2[e2.InvSize = 2] = "InvSize";
}(e$f || (e$f = {}));
class f$9 extends i$g {
  constructor(r2, s2) {
    super(r2, "sampler2D", a$a.Pass, (e2, o2, t2) => e2.bindTexture(r2, s2(o2, t2)));
  }
}
function u$9(o2, c2, p2 = e$f.None) {
  const u2 = [new f$9(o2, c2)];
  if (p2 & e$f.Size) {
    const i2 = o2 + t$b;
    u2.push(new e$g(i2, (o3, t2) => {
      const i3 = c2(o3, t2);
      return r$6(i3) ? r$8(a$8, i3.descriptor.width, i3.descriptor.height) : f$b;
    }));
  }
  if (p2 & e$f.InvSize) {
    const t2 = o2 + n$8;
    u2.push(new e$g(t2, (o3, t3) => {
      const i2 = c2(o3, t3);
      return r$6(i2) ? r$8(a$8, 1 / i2.descriptor.width, 1 / i2.descriptor.height) : f$b;
    }));
  }
  return u2;
}
const a$8 = n$c();
class i$d extends t$c {
  constructor() {
    super(...arguments), this.color = r$9(1, 1, 1, 1);
  }
}
function l$6() {
  const e2 = new o$l();
  return e2.include(o$m), e2.fragment.uniforms.add([new f$9("tex", (e3) => e3.texture), new e$h("uColor", (e3) => e3.color)]), e2.fragment.code.add(n$9`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`), e2;
}
Object.freeze(Object.defineProperty({ __proto__: null, TextureOnlyPassParameters: i$d, build: l$6 }, Symbol.toStringTag, { value: "Module" }));
function s$7() {
  if (t$d(i$c)) {
    const t2 = (t3) => a$e(`esri/libs/basisu/${t3}`);
    i$c = import("./basis_transcoder.js").then((e2) => e2.b).then(({ default: e2 }) => e2({ locateFile: t2 }).then((e3) => (e3.initializeBasis(), delete e3.then, e3)));
  }
  return i$c;
}
let i$c;
var _$4;
!function(_2) {
  _2[_2.ETC1_RGB = 0] = "ETC1_RGB", _2[_2.ETC2_RGBA = 1] = "ETC2_RGBA", _2[_2.BC1_RGB = 2] = "BC1_RGB", _2[_2.BC3_RGBA = 3] = "BC3_RGBA", _2[_2.BC4_R = 4] = "BC4_R", _2[_2.BC5_RG = 5] = "BC5_RG", _2[_2.BC7_M6_RGB = 6] = "BC7_M6_RGB", _2[_2.BC7_M5_RGBA = 7] = "BC7_M5_RGBA", _2[_2.PVRTC1_4_RGB = 8] = "PVRTC1_4_RGB", _2[_2.PVRTC1_4_RGBA = 9] = "PVRTC1_4_RGBA", _2[_2.ASTC_4x4_RGBA = 10] = "ASTC_4x4_RGBA", _2[_2.ATC_RGB = 11] = "ATC_RGB", _2[_2.ATC_RGBA = 12] = "ATC_RGBA", _2[_2.FXT1_RGB = 17] = "FXT1_RGB", _2[_2.PVRTC2_4_RGB = 18] = "PVRTC2_4_RGB", _2[_2.PVRTC2_4_RGBA = 19] = "PVRTC2_4_RGBA", _2[_2.ETC2_EAC_R11 = 20] = "ETC2_EAC_R11", _2[_2.ETC2_EAC_RG11 = 21] = "ETC2_EAC_RG11", _2[_2.RGBA32 = 13] = "RGBA32", _2[_2.RGB565 = 14] = "RGB565", _2[_2.BGR565 = 15] = "BGR565", _2[_2.RGBA4444 = 16] = "RGBA4444";
}(_$4 || (_$4 = {}));
let g$6 = null, l$5 = null;
async function c$a() {
  return t$d(l$5) && (l$5 = s$7(), g$6 = await l$5), l$5;
}
function u$8(t2, n2) {
  if (t$d(g$6))
    return t2.byteLength;
  const r2 = new g$6.BasisFile(new Uint8Array(t2)), s2 = T$4(r2) ? E$4(r2.getNumLevels(0), r2.getHasAlpha(), r2.getImageWidth(0, 0), r2.getImageHeight(0, 0), n2) : 0;
  return r2.close(), r2.delete(), s2;
}
function m$6(t2, n2) {
  if (t$d(g$6))
    return t2.byteLength;
  const r2 = new g$6.KTX2File(new Uint8Array(t2)), s2 = _$3(r2) ? E$4(r2.getLevels(), r2.getHasAlpha(), r2.getWidth(), r2.getHeight(), n2) : 0;
  return r2.close(), r2.delete(), s2;
}
function E$4(e2, t2, n2, s2, i2) {
  const a2 = _$7(t2 ? u$e.COMPRESSED_RGBA8_ETC2_EAC : u$e.COMPRESSED_RGB8_ETC2), g2 = i2 && e2 > 1 ? (4 ** e2 - 1) / (3 * 4 ** (e2 - 1)) : 1;
  return Math.ceil(n2 * s2 * a2 * g2);
}
function T$4(e2) {
  return e2.getNumImages() >= 1 && !e2.isUASTC();
}
function _$3(e2) {
  return e2.getFaces() >= 1 && e2.isETC1S();
}
async function h$7(t2, n2, r2) {
  t$d(g$6) && (g$6 = await c$a());
  const s2 = new g$6.BasisFile(new Uint8Array(r2));
  if (!T$4(s2))
    return null;
  s2.startTranscoding();
  const i2 = p$4(t2, n2, s2.getNumLevels(0), s2.getHasAlpha(), s2.getImageWidth(0, 0), s2.getImageHeight(0, 0), (e2, t3) => s2.getImageTranscodedSizeInBytes(0, e2, t3), (e2, t3, n3) => s2.transcodeImage(n3, 0, e2, t3, 0, 0));
  return s2.close(), s2.delete(), i2;
}
async function A$4(t2, n2, r2) {
  t$d(g$6) && (g$6 = await c$a());
  const s2 = new g$6.KTX2File(new Uint8Array(r2));
  if (!_$3(s2))
    return null;
  s2.startTranscoding();
  const i2 = p$4(t2, n2, s2.getLevels(), s2.getHasAlpha(), s2.getWidth(), s2.getHeight(), (e2, t3) => s2.getImageTranscodedSizeInBytes(e2, 0, 0, t3), (e2, t3, n3) => s2.transcodeImage(n3, e2, 0, 0, t3, 0, -1, -1));
  return s2.close(), s2.delete(), i2;
}
function p$4(e2, t2, o2, g2, l2, c2, u2, m2) {
  const { compressedTextureETC: E2, compressedTextureS3TC: T2 } = e2.capabilities, [_2, h2] = E2 ? g2 ? [_$4.ETC2_RGBA, u$e.COMPRESSED_RGBA8_ETC2_EAC] : [_$4.ETC1_RGB, u$e.COMPRESSED_RGB8_ETC2] : T2 ? g2 ? [_$4.BC3_RGBA, u$e.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [_$4.BC1_RGB, u$e.COMPRESSED_RGB_S3TC_DXT1_EXT] : [_$4.RGBA32, P$3.RGBA], A2 = t2.hasMipmap ? o2 : Math.min(1, o2), p2 = [];
  for (let n2 = 0; n2 < A2; n2++)
    p2.push(new Uint8Array(u2(n2, _2))), m2(n2, _2, p2[n2]);
  const C2 = p2.length > 1, d2 = C2 ? L$3.LINEAR_MIPMAP_LINEAR : L$3.LINEAR, R2 = __spreadProps(__spreadValues({}, t2), { samplingMode: d2, hasMipmap: C2, internalFormat: h2, width: l2, height: c2 });
  return new E$5(e2, R2, { type: "compressed", levels: p2 });
}
const i$b = s$c.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"), s$6 = 542327876, l$4 = 131072, m$5 = 4;
function u$7(e2) {
  return e2.charCodeAt(0) + (e2.charCodeAt(1) << 8) + (e2.charCodeAt(2) << 16) + (e2.charCodeAt(3) << 24);
}
function c$9(e2) {
  return String.fromCharCode(255 & e2, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255);
}
const h$6 = u$7("DXT1"), p$3 = u$7("DXT3"), d$a = u$7("DXT5"), g$5 = 31, f$8 = 0, C$1 = 1, w$3 = 2, D$1 = 3, _$2 = 4, T$3 = 7, A$3 = 20, E$3 = 21;
function S$4(e2, r2, n2) {
  var _a;
  const { textureData: i2, internalFormat: s2, width: l2, height: m2 } = f$c(M$2(n2, (_a = r2.hasMipmap) != null ? _a : false));
  return r2.samplingMode = i2.levels.length > 1 ? L$3.LINEAR_MIPMAP_LINEAR : L$3.LINEAR, r2.hasMipmap = i2.levels.length > 1, r2.internalFormat = s2, r2.width = l2, r2.height = m2, new E$5(e2, r2, i2);
}
function M$2(e2, t2) {
  const o2 = new Int32Array(e2, 0, g$5);
  if (o2[f$8] !== s$6)
    return i$b.error("Invalid magic number in DDS header"), null;
  if (!(o2[A$3] & m$5))
    return i$b.error("Unsupported format, must contain a FourCC code"), null;
  const a2 = o2[E$3];
  let u2, S2;
  switch (a2) {
    case h$6:
      u2 = 8, S2 = u$e.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case p$3:
      u2 = 16, S2 = u$e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case d$a:
      u2 = 16, S2 = u$e.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return i$b.error("Unsupported FourCC code:", c$9(a2)), null;
  }
  let M2 = 1, R2 = o2[_$2], b2 = o2[D$1];
  (3 & R2) == 0 && (3 & b2) == 0 || (i$b.warn("Rounding up compressed texture size to nearest multiple of 4."), R2 = R2 + 3 & -4, b2 = b2 + 3 & -4);
  const x2 = R2, X2 = b2;
  let I2, j2;
  o2[w$3] & l$4 && t2 !== false && (M2 = Math.max(1, o2[T$3])), M2 === 1 || c$f(R2) && c$f(b2) || (i$b.warn("Ignoring mipmaps of non power of two sized compressed texture."), M2 = 1);
  let v2 = o2[C$1] + 4;
  const F2 = [];
  for (let r2 = 0; r2 < M2; ++r2)
    j2 = (R2 + 3 >> 2) * (b2 + 3 >> 2) * u2, I2 = new Uint8Array(e2, v2, j2), F2.push(I2), v2 += j2, R2 = Math.max(1, R2 >> 1), b2 = Math.max(1, b2 >> 1);
  return { textureData: { type: "compressed", levels: F2 }, internalFormat: S2, width: x2, height: X2 };
}
const E$2 = new Map([[O$2.POSITION, 0], [O$2.NORMAL, 1], [O$2.UV0, 2], [O$2.COLOR, 3], [O$2.SIZE, 4], [O$2.TANGENT, 4], [O$2.AUXPOS1, 5], [O$2.SYMBOLCOLOR, 5], [O$2.AUXPOS2, 6], [O$2.FEATUREATTRIBUTE, 6], [O$2.INSTANCEFEATUREATTRIBUTE, 6], [O$2.INSTANCECOLOR, 7], [O$2.OBJECTANDLAYERIDCOLOR, 7], [O$2.OBJECTANDLAYERIDCOLOR_INSTANCED, 7], [O$2.MODEL, 8], [O$2.MODELNORMAL, 12], [O$2.MODELORIGINHI, 11], [O$2.MODELORIGINLO, 15]]);
[new t$g(O$2.POSITION, 3, C$2.FLOAT, 0, 12)];
[new t$g(O$2.POSITION, 3, C$2.FLOAT, 0, 20), new t$g(O$2.UV0, 2, C$2.FLOAT, 12, 20)];
[new t$g(O$2.POSITION, 3, C$2.FLOAT, 0, 32), new t$g(O$2.NORMAL, 3, C$2.FLOAT, 12, 32), new t$g(O$2.UV0, 2, C$2.FLOAT, 24, 32)];
[new t$g(O$2.POSITION, 3, C$2.FLOAT, 0, 16), new t$g(O$2.COLOR, 4, C$2.UNSIGNED_BYTE, 12, 16)];
const t$a = [new t$g(O$2.POSITION, 2, C$2.FLOAT, 0, 8)], A$2 = [new t$g(O$2.POSITION, 2, C$2.FLOAT, 0, 16), new t$g(O$2.UV0, 2, C$2.FLOAT, 8, 16)];
class r$3 extends a$f {
}
function u$6(i2, m2 = t$a, l2 = E$2, T2 = -1, f2 = 1) {
  let u2 = null;
  if (m2 === A$2)
    u2 = new Float32Array([T2, T2, 0, 0, f2, T2, 1, 0, T2, f2, 0, 1, f2, f2, 1, 1]);
  else
    u2 = new Float32Array([T2, T2, f2, T2, T2, f2, f2, f2]);
  return new r$3(i2, l2, { geometry: m2 }, { geometry: E$6.createVertex(i2, F$1.STATIC_DRAW, u2) });
}
class L$2 extends r$5 {
  constructor(t2, e2) {
    super(), this._data = t2, this.type = e$i.Texture, this._glTexture = null, this._powerOfTwoStretchInfo = null, this._loadingPromise = null, this._loadingController = null, this.events = new n$d(), this._passParameters = new i$d(), this.params = e2 || {}, this.params.mipmap = this.params.mipmap !== false, this.params.noUnpackFlip = this.params.noUnpackFlip || false, this.params.preMultiplyAlpha = this.params.preMultiplyAlpha || false, this.params.wrap = this.params.wrap || { s: D$2.REPEAT, t: D$2.REPEAT }, this.params.powerOfTwoResizeMode = this.params.powerOfTwoResizeMode || c$g.STRETCH, this.estimatedTexMemRequired = L$2._estimateTexMemRequired(this._data, this.params), this._startPreload();
  }
  _startPreload() {
    const t2 = this._data;
    t$d(t2) || (t2 instanceof HTMLVideoElement ? this._startPreloadVideoElement(t2) : t2 instanceof HTMLImageElement && this._startPreloadImageElement(t2));
  }
  _startPreloadVideoElement(t2) {
    if (!(V$4(t2.src) || t2.preload === "auto" && t2.crossOrigin)) {
      t2.preload = "auto", t2.crossOrigin = "anonymous";
      const e2 = !t2.paused;
      if (t2.src = t2.src, e2 && t2.autoplay) {
        const e3 = () => {
          t2.removeEventListener("canplay", e3), t2.play();
        };
        t2.addEventListener("canplay", e3);
      }
    }
  }
  _startPreloadImageElement(t2) {
    X$1(t2.src) || V$4(t2.src) || t2.crossOrigin || (t2.crossOrigin = "anonymous", t2.src = t2.src);
  }
  static _getDataDimensions(t2) {
    return t2 instanceof HTMLVideoElement ? { width: t2.videoWidth, height: t2.videoHeight } : t2;
  }
  static _estimateTexMemRequired(t2, e2) {
    if (t$d(t2))
      return 0;
    if (o$o(t2) || e$n(t2))
      return e2.encoding === L$2.KTX2_ENCODING ? m$6(t2, e2.mipmap) : e2.encoding === L$2.BASIS_ENCODING ? u$8(t2, e2.mipmap) : t2.byteLength;
    const { width: r2, height: i2 } = t2 instanceof Image || t2 instanceof ImageData || t2 instanceof HTMLCanvasElement || t2 instanceof HTMLVideoElement ? L$2._getDataDimensions(t2) : e2;
    return (e2.mipmap ? 4 / 3 : 1) * r2 * i2 * (e2.components || 4) || 0;
  }
  dispose() {
    this._data = void 0;
  }
  get width() {
    return this.params.width;
  }
  get height() {
    return this.params.height;
  }
  _createDescriptor(t2) {
    var _a;
    return { target: M$3.TEXTURE_2D, pixelFormat: P$3.RGBA, dataType: G$3.UNSIGNED_BYTE, wrapMode: this.params.wrap, flipped: !this.params.noUnpackFlip, samplingMode: this.params.mipmap ? L$3.LINEAR_MIPMAP_LINEAR : L$3.LINEAR, hasMipmap: this.params.mipmap, preMultiplyAlpha: this.params.preMultiplyAlpha, maxAnisotropy: (_a = this.params.maxAnisotropy) != null ? _a : this.params.mipmap ? t2.parameters.maxMaxAnisotropy : 1 };
  }
  get glTexture() {
    return this._glTexture;
  }
  load(t2, e2) {
    if (r$6(this._glTexture))
      return this._glTexture;
    if (r$6(this._loadingPromise))
      return this._loadingPromise;
    const r2 = this._data;
    return t$d(r2) ? (this._glTexture = new E$5(t2, this._createDescriptor(t2), null), this._glTexture) : typeof r2 == "string" ? this._loadFromURL(t2, e2, r2) : r2 instanceof Image ? this._loadFromImageElement(t2, e2, r2) : r2 instanceof HTMLVideoElement ? this._loadFromVideoElement(t2, e2, r2) : r2 instanceof ImageData || r2 instanceof HTMLCanvasElement ? this._loadFromImage(t2, r2, e2) : (o$o(r2) || e$n(r2)) && this.params.encoding === L$2.DDS_ENCODING ? (this._data = void 0, this._loadFromDDSData(t2, r2)) : (o$o(r2) || e$n(r2)) && this.params.encoding === L$2.KTX2_ENCODING ? (this._data = void 0, this._loadFromKTX2(t2, r2)) : (o$o(r2) || e$n(r2)) && this.params.encoding === L$2.BASIS_ENCODING ? (this._data = void 0, this._loadFromBasis(t2, r2)) : e$n(r2) ? this._loadFromPixelData(t2, r2) : o$o(r2) ? this._loadFromPixelData(t2, new Uint8Array(r2)) : null;
  }
  get requiresFrameUpdates() {
    return this._data instanceof HTMLVideoElement;
  }
  frameUpdate(t2, e2, r2) {
    if (!(this._data instanceof HTMLVideoElement) || t$d(this._glTexture))
      return r2;
    if (this._data.readyState < G$2.HAVE_CURRENT_DATA || r2 === this._data.currentTime)
      return r2;
    if (r$6(this._powerOfTwoStretchInfo)) {
      const { framebuffer: r3, vao: i2, sourceTexture: s2 } = this._powerOfTwoStretchInfo;
      s2.setData(this._data), this._drawStretchedTexture(t2, e2, r3, i2, s2, this._glTexture);
    } else {
      const { videoWidth: t3, videoHeight: e3 } = this._data, { width: r3, height: i2 } = this._glTexture.descriptor;
      t3 !== r3 || e3 !== i2 ? this._glTexture.updateData(0, 0, 0, Math.min(t3, r3), Math.min(e3, i2), this._data) : this._glTexture.setData(this._data);
    }
    return this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this.params.updateCallback && this.params.updateCallback(), this._data.currentTime;
  }
  _loadFromDDSData(t2, e2) {
    return this._glTexture = S$4(t2, this._createDescriptor(t2), e2), this._glTexture;
  }
  _loadFromKTX2(t2, e2) {
    return this._loadAsync(() => A$4(t2, this._createDescriptor(t2), e2).then((t3) => (this._glTexture = t3, t3)));
  }
  _loadFromBasis(t2, e2) {
    return this._loadAsync(() => h$7(t2, this._createDescriptor(t2), e2).then((t3) => (this._glTexture = t3, t3)));
  }
  _loadFromPixelData(t2, e2) {
    e$k(this.params.width > 0 && this.params.height > 0);
    const r2 = this._createDescriptor(t2);
    return r2.pixelFormat = this.params.components === 1 ? P$3.LUMINANCE : this.params.components === 3 ? P$3.RGB : P$3.RGBA, r2.width = this.params.width, r2.height = this.params.height, this._glTexture = new E$5(t2, r2, e2), this._glTexture;
  }
  _loadFromURL(t2, e2, r2) {
    return this._loadAsync(async (i2) => {
      const s2 = await t$h(r2, { signal: i2 });
      return f$d(i2), this._loadFromImage(t2, s2, e2);
    });
  }
  _loadFromImageElement(t2, e2, r2) {
    return r2.complete ? this._loadFromImage(t2, r2, e2) : this._loadAsync(async (i2) => {
      const s2 = await c$h(r2, r2.src, false, i2);
      return f$d(i2), this._loadFromImage(t2, s2, e2);
    });
  }
  _loadFromVideoElement(t2, e2, r2) {
    return r2.readyState >= G$2.HAVE_CURRENT_DATA ? this._loadFromImage(t2, r2, e2) : this._loadFromVideoElementAsync(t2, e2, r2);
  }
  _loadFromVideoElementAsync(t2, r2, i2) {
    return this._loadAsync((s2) => new Promise((a2, o2) => {
      const m2 = () => {
        i2.removeEventListener("loadeddata", p2), i2.removeEventListener("error", d2), h$9(_2);
      }, p2 = () => {
        i2.readyState >= G$2.HAVE_CURRENT_DATA && (m2(), a2(this._loadFromImage(t2, i2, r2)));
      }, d2 = (t3) => {
        m2(), o2(t3 || new s$d("Failed to load video"));
      };
      i2.addEventListener("loadeddata", p2), i2.addEventListener("error", d2);
      const _2 = v$8(s2, () => d2(a$g()));
    }));
  }
  _loadFromImage(t2, e2, r2) {
    const s2 = L$2._getDataDimensions(e2);
    this.params.width = s2.width, this.params.height = s2.height;
    const a2 = this._createDescriptor(t2);
    return a2.pixelFormat = this.params.components === 3 ? P$3.RGB : P$3.RGBA, !this._requiresPowerOfTwo(t2, a2) || c$f(s2.width) && c$f(s2.height) ? (a2.width = s2.width, a2.height = s2.height, this._glTexture = new E$5(t2, a2, e2), this._glTexture) : (this._glTexture = this._makePowerOfTwoTexture(t2, e2, s2, a2, r2), this._glTexture);
  }
  _loadAsync(t2) {
    const e2 = new AbortController();
    this._loadingController = e2;
    const r2 = t2(e2.signal);
    this._loadingPromise = r2;
    const i2 = () => {
      this._loadingController === e2 && (this._loadingController = null), this._loadingPromise === r2 && (this._loadingPromise = null);
    };
    return r2.then(i2, i2), r2;
  }
  _requiresPowerOfTwo(t2, e2) {
    const r2 = D$2.CLAMP_TO_EDGE, i2 = typeof e2.wrapMode == "number" ? e2.wrapMode === r2 : e2.wrapMode.s === r2 && e2.wrapMode.t === r2;
    return !n$e(t2.gl) && (e2.hasMipmap || !i2);
  }
  _makePowerOfTwoTexture(e2, r2, i2, a2, o2) {
    const { width: n2, height: m2 } = i2, h2 = i$k(n2), l2 = i$k(m2);
    let p2;
    switch (a2.width = h2, a2.height = l2, this.params.powerOfTwoResizeMode) {
      case c$g.PAD:
        a2.textureCoordinateScaleFactor = [n2 / h2, m2 / l2], p2 = new E$5(e2, a2), p2.updateData(0, 0, 0, n2, m2, r2);
        break;
      case c$g.STRETCH:
      case null:
      case void 0:
        p2 = this._stretchToPowerOfTwo(e2, r2, a2, o2());
        break;
      default:
        n$f(this.params.powerOfTwoResizeMode);
    }
    return a2.hasMipmap && p2.generateMipmap(), p2;
  }
  _stretchToPowerOfTwo(t2, e2, r2, i2) {
    const s2 = new E$5(t2, r2), a2 = new x$6(t2, { colorTarget: Y$1.TEXTURE, depthStencilTarget: V$5.NONE }, s2), o2 = new E$5(t2, { target: M$3.TEXTURE_2D, pixelFormat: r2.pixelFormat, dataType: G$3.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L$3.LINEAR, flipped: !!r2.flipped, maxAnisotropy: 8, preMultiplyAlpha: r2.preMultiplyAlpha }, e2), n2 = u$6(t2), m2 = t2.getBoundFramebufferObject();
    return this._drawStretchedTexture(t2, i2, a2, n2, o2, s2), this.requiresFrameUpdates ? this._powerOfTwoStretchInfo = { vao: n2, sourceTexture: o2, framebuffer: a2 } : (n2.dispose(true), o2.dispose(), a2.detachColorTexture(), a2.dispose()), t2.bindFramebuffer(m2), s2;
  }
  _drawStretchedTexture(t2, e2, r2, i2, s2, a2) {
    this._passParameters.texture = s2, t2.bindFramebuffer(r2);
    const o2 = t2.getViewport();
    t2.setViewport(0, 0, a2.descriptor.width, a2.descriptor.height), t2.bindTechnique(e2, this._passParameters, null), t2.bindVAO(i2), t2.drawArrays(E$7.TRIANGLE_STRIP, 0, n$g(i2, "geometry")), t2.bindFramebuffer(null), t2.setViewport(o2.x, o2.y, o2.width, o2.height), this._passParameters.texture = null;
  }
  unload() {
    if (r$6(this._powerOfTwoStretchInfo)) {
      const { framebuffer: t2, vao: e2, sourceTexture: r2 } = this._powerOfTwoStretchInfo;
      e2.dispose(true), r2.dispose(), t2.dispose(), this._glTexture = null, this._powerOfTwoStretchInfo = null;
    }
    if (r$6(this._glTexture) && (this._glTexture.dispose(), this._glTexture = null), r$6(this._loadingController)) {
      const t2 = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, t2.abort();
    }
    this.events.emit("unloaded");
  }
}
var G$2;
L$2.DDS_ENCODING = "image/vnd-ms.dds", L$2.KTX2_ENCODING = "image/ktx2", L$2.BASIS_ENCODING = "image/x.basis", function(t2) {
  t2[t2.HAVE_NOTHING = 0] = "HAVE_NOTHING", t2[t2.HAVE_METADATA = 1] = "HAVE_METADATA", t2[t2.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", t2[t2.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", t2[t2.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
}(G$2 || (G$2 = {}));
var h$5;
!function(h2) {
  h2[h2.Color = 0] = "Color", h2[h2.Depth = 1] = "Depth", h2[h2.Normal = 2] = "Normal", h2[h2.Shadow = 3] = "Shadow", h2[h2.ShadowHighlight = 4] = "ShadowHighlight", h2[h2.ShadowExludeHighlight = 5] = "ShadowExludeHighlight", h2[h2.Highlight = 6] = "Highlight", h2[h2.Alpha = 7] = "Alpha", h2[h2.ObjectAndLayerIdColor = 8] = "ObjectAndLayerIdColor", h2[h2.COUNT = 9] = "COUNT";
}(h$5 || (h$5 = {}));
function o$k(o2) {
  const f2 = n$9`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;
  o2.vertex.code.add(f2);
}
function o$j(o2, d2) {
  d2.normalType === i$a.Attribute && (o2.attributes.add(O$2.NORMAL, "vec3"), o2.vertex.code.add(n$9`vec3 normalModel() {
return normal;
}`)), d2.normalType === i$a.CompressedAttribute && (o2.include(o$k), o2.attributes.add(O$2.NORMALCOMPRESSED, "vec2"), o2.vertex.code.add(n$9`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)), d2.normalType === i$a.ScreenDerivative && (o2.extensions.add("GL_OES_standard_derivatives"), o2.fragment.code.add(n$9`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));
}
var i$a;
!function(e2) {
  e2[e2.Attribute = 0] = "Attribute", e2[e2.CompressedAttribute = 1] = "CompressedAttribute", e2[e2.Ground = 2] = "Ground", e2[e2.ScreenDerivative = 3] = "ScreenDerivative", e2[e2.COUNT = 4] = "COUNT";
}(i$a || (i$a = {}));
function e$e(e2, o2) {
  const n2 = e2.fragment;
  switch (n2.code.add(n$9`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), o2.doubleSidedMode) {
    case i$9.None:
      n2.code.add(n$9`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case i$9.View:
      n2.code.add(n$9`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case i$9.WindingOrder:
      n2.code.add(n$9`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      n$f(o2.doubleSidedMode);
    case i$9.COUNT:
  }
}
var i$9;
!function(a2) {
  a2[a2.None = 0] = "None", a2[a2.View = 1] = "View", a2[a2.WindingOrder = 2] = "WindingOrder", a2[a2.COUNT = 3] = "COUNT";
}(i$9 || (i$9 = {}));
var d$9;
function o$i(o2, v2) {
  switch (v2.textureCoordinateType) {
    case d$9.Default:
      return o2.attributes.add(O$2.UV0, "vec2"), o2.varyings.add("vuv0", "vec2"), void o2.vertex.code.add(n$9`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);
    case d$9.Compressed:
      return o2.attributes.add(O$2.UV0, "vec2"), o2.varyings.add("vuv0", "vec2"), void o2.vertex.code.add(n$9`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);
    case d$9.Atlas:
      return o2.attributes.add(O$2.UV0, "vec2"), o2.varyings.add("vuv0", "vec2"), o2.attributes.add(O$2.UVREGION, "vec4"), o2.varyings.add("vuvRegion", "vec4"), void o2.vertex.code.add(n$9`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      n$f(v2.textureCoordinateType);
    case d$9.None:
      return void o2.vertex.code.add(n$9`void forwardTextureCoordinates() {}`);
    case d$9.COUNT:
      return;
  }
}
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Default = 1] = "Default", e2[e2.Atlas = 2] = "Atlas", e2[e2.Compressed = 3] = "Compressed", e2[e2.COUNT = 4] = "COUNT";
}(d$9 || (d$9 = {}));
function t$9(t2) {
  t2.extensions.add("GL_EXT_shader_texture_lod"), t2.extensions.add("GL_OES_standard_derivatives"), t2.fragment.code.add(n$9`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);
}
function a$7(a2, s2) {
  switch (a2.include(o$i, s2), a2.fragment.code.add(n$9`
  struct TextureLookupParameter {
    vec2 uv;
    ${s2.supportsTextureAtlas ? "vec2 size;" : ""}
  } vtc;
  `), s2.textureCoordinateType) {
    case d$9.Default:
    case d$9.Compressed:
      return void a2.fragment.code.add(n$9`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);
    case d$9.Atlas:
      return a2.include(t$9), void a2.fragment.code.add(n$9`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);
    default:
      n$f(s2.textureCoordinateType);
    case d$9.None:
    case d$9.COUNT:
      return;
  }
}
class o$h extends i$g {
  constructor(r2, o2) {
    super(r2, "vec3", a$a.Draw, (e2, s2, t2, i2) => e2.setUniform3fv(r2, o2(s2, t2, i2)));
  }
}
class e$d extends i$g {
  constructor(r2, e2) {
    super(r2, "vec3", a$a.Pass, (s2, o2, t2) => s2.setUniform3fv(r2, e2(o2, t2)));
  }
}
class o$g extends i$g {
  constructor(r2, o2) {
    super(r2, "vec2", a$a.Draw, (e2, s2, t2, i2) => e2.setUniform2fv(r2, o2(s2, t2, i2)));
  }
}
class f$7 extends i$g {
  constructor(r2, e2) {
    super(r2, "sampler2D", a$a.Draw, (o2, s2, t2) => o2.bindTexture(r2, e2(s2, t2)));
  }
}
function u$5(s2, c2, p2 = e$f.None) {
  const u2 = [new f$7(s2, c2)];
  if (p2 & e$f.Size) {
    const i2 = s2 + t$b;
    u2.push(new o$g(i2, (s3, t2) => {
      const i3 = c2(s3, t2);
      return r$6(i3) ? r$8(a$6, i3.descriptor.width, i3.descriptor.height) : f$b;
    }));
  }
  if (p2 & e$f.InvSize) {
    const t2 = s2 + n$8;
    u2.push(new o$g(t2, (s3, t3) => {
      const i2 = c2(s3, t3);
      return r$6(i2) ? r$8(a$6, 1 / i2.descriptor.width, 1 / i2.descriptor.height) : f$b;
    }));
  }
  return u2;
}
const a$6 = n$c();
class t$8 {
  constructor(e2) {
    this._material = e2.material, this._techniqueRepository = e2.techniqueRep, this._output = e2.output;
  }
  dispose() {
    this._techniqueRepository.release(this._technique);
  }
  get technique() {
    return this._technique;
  }
  get _stippleTextureRepository() {
    return this._techniqueRepository.constructionContext.stippleTextureRepository;
  }
  ensureTechnique(e2, t2, i2 = this._output) {
    return this._technique = this._techniqueRepository.releaseAndAcquire(e2, this._material.getConfiguration(i2, t2), this._technique), this._technique;
  }
  ensureResources(t2) {
    return O$3.LOADED;
  }
}
class h$4 extends t$8 {
  constructor(t2) {
    super(t2), this._numLoading = 0, this._disposed = false, this._textureRepository = t2.textureRep, this._textureId = t2.textureId, this._acquire(t2.textureId, (t3) => this._texture = t3), this._acquire(t2.normalTextureId, (t3) => this._textureNormal = t3), this._acquire(t2.emissiveTextureId, (t3) => this._textureEmissive = t3), this._acquire(t2.occlusionTextureId, (t3) => this._textureOcclusion = t3), this._acquire(t2.metallicRoughnessTextureId, (t3) => this._textureMetallicRoughness = t3);
  }
  dispose() {
    this._texture = w$5(this._texture), this._textureNormal = w$5(this._textureNormal), this._textureEmissive = w$5(this._textureEmissive), this._textureOcclusion = w$5(this._textureOcclusion), this._textureMetallicRoughness = w$5(this._textureMetallicRoughness), this._disposed = true;
  }
  ensureResources(t2) {
    return this._numLoading === 0 ? O$3.LOADED : O$3.LOADING;
  }
  get textureBindParameters() {
    return new o$f(r$6(this._texture) ? this._texture.glTexture : null, r$6(this._textureNormal) ? this._textureNormal.glTexture : null, r$6(this._textureEmissive) ? this._textureEmissive.glTexture : null, r$6(this._textureOcclusion) ? this._textureOcclusion.glTexture : null, r$6(this._textureMetallicRoughness) ? this._textureMetallicRoughness.glTexture : null);
  }
  updateTexture(e2) {
    (t$d(this._texture) || e2 !== this._texture.id) && (this._texture = w$5(this._texture), this._textureId = e2, this._acquire(this._textureId, (t2) => this._texture = t2));
  }
  _acquire(e2, r2) {
    if (t$d(e2))
      return void r2(null);
    const u2 = this._textureRepository.acquire(e2);
    if (C$3(u2))
      return ++this._numLoading, void u2.then((e3) => {
        if (this._disposed)
          return w$5(e3), void r2(null);
        r2(e3);
      }).finally(() => --this._numLoading);
    r2(u2);
  }
}
class o$f extends t$c {
  constructor(t2 = null, e2 = null, s2 = null, i2 = null, r2 = null) {
    super(), this.texture = t2, this.textureNormal = e2, this.textureEmissive = s2, this.textureOcclusion = i2, this.textureMetallicRoughness = r2;
  }
}
r$a(0, 0.6, 0.2);
var d$8;
!function(e2) {
  e2[e2.Disabled = 0] = "Disabled", e2[e2.Normal = 1] = "Normal", e2[e2.Schematic = 2] = "Schematic", e2[e2.Water = 3] = "Water", e2[e2.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", e2[e2.COUNT = 5] = "COUNT";
}(d$8 || (d$8 = {}));
function x$5(e2, l2) {
  const m2 = e2.fragment, p2 = l2.hasMetallicRoughnessTexture || l2.hasEmissionTexture || l2.hasOcclusionTexture;
  if (l2.pbrMode === d$8.Normal && p2 && e2.include(a$7, l2), l2.pbrMode !== d$8.Schematic)
    if (l2.pbrMode !== d$8.Disabled) {
      if (l2.pbrMode === d$8.Normal) {
        m2.code.add(n$9`vec3 mrr;
vec3 emission;
float occlusion;`);
        const e3 = l2.supportsTextureAtlas ? l2.hasWebGL2Context ? e$f.None : e$f.Size : e$f.None, s2 = l2.pbrTextureBindType;
        l2.hasMetallicRoughnessTexture && (m2.uniforms.add(s2 === a$a.Pass ? u$9("texMetallicRoughness", (e4) => e4.textureMetallicRoughness, e3) : u$5("texMetallicRoughness", (e4) => e4.textureMetallicRoughness, e3)), m2.code.add(n$9`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)), l2.hasEmissionTexture && (m2.uniforms.add(s2 === a$a.Pass ? u$9("texEmission", (e4) => e4.textureEmissive, e3) : u$5("texEmission", (e4) => e4.textureEmissive, e3)), m2.code.add(n$9`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)), l2.hasOcclusionTexture ? (m2.uniforms.add(s2 === a$a.Pass ? u$9("texOcclusion", (e4) => e4.textureOcclusion, e3) : u$5("texOcclusion", (e4) => e4.textureOcclusion, e3)), m2.code.add(n$9`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)) : m2.code.add(n$9`float getBakedOcclusion() { return 1.0; }`), m2.uniforms.add(s2 === a$a.Pass ? [new e$d("emissionFactor", (e4) => e4.emissiveFactor), new e$d("mrrFactors", (e4) => e4.mrrFactors)] : [new o$h("emissionFactor", (e4) => e4.emissiveFactor), new o$h("mrrFactors", (e4) => e4.mrrFactors)]), m2.code.add(n$9`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${p2 ? n$9`vtc.uv = vuv0;` : ""}
      ${l2.hasMetallicRoughnessTextureTransform ? n$9`vtc.uv = metallicRoughnessUV;` : ""}
      ${l2.hasMetallicRoughnessTexture ? l2.supportsTextureAtlas ? n$9`
                vtc.size = ${r$4(l2, "texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);` : n$9`applyMetallnessAndRoughness(vtc);` : ""}
      ${l2.hasEmissiveTextureTransform ? n$9`vtc.uv = emissiveUV;` : ""}
      ${l2.hasEmissionTexture ? l2.supportsTextureAtlas ? n$9`
                vtc.size = ${r$4(l2, "texEmission")};
                applyEmission(vtc);` : n$9`applyEmission(vtc);` : ""}
      ${l2.hasOcclusionTextureTransform ? n$9`vtc.uv = occlusionUV;` : ""}
      ${l2.hasOcclusionTexture ? l2.supportsTextureAtlas ? n$9`
                vtc.size = ${r$4(l2, "texOcclusion")};
                applyOcclusion(vtc);` : n$9`applyOcclusion(vtc);` : ""}
    }
  `);
      }
    } else
      m2.code.add(n$9`float getBakedOcclusion() { return 1.0; }`);
  else
    m2.code.add(n$9`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
}
function l$3(e2) {
  return Math.abs(e2 * e2 * e2);
}
function s$5(e2, t2, a2) {
  const i2 = a2.parameters, r2 = a2.paddingPixelsOverride;
  return x$4.scale = Math.min(i2.divisor / (t2 - i2.offset), 1), x$4.factor = l$3(e2), x$4.minPixelSize = i2.minPixelSize, x$4.paddingPixels = r2, x$4;
}
function c$8(e2, t2) {
  return e2 === 0 ? t2.minPixelSize : t2.minPixelSize * (1 + 2 * t2.paddingPixels / e2);
}
function o$e(t2, a2) {
  return Math.max(h$a(t2 * a2.scale, t2, a2.factor), c$8(t2, a2));
}
function m$4(e2, t2, a2, i2) {
  return o$e(e2, s$5(t2, a2, i2));
}
const x$4 = { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 };
function u$4(t2) {
  return !!r$6(t2) && !t2.visible;
}
const g$4 = a$h();
function x$3(t2, n2, e2, o2, i2, r2, s2) {
  if (!u$4(n2))
    if (t2.boundingInfo) {
      e$k(t2.primitiveType === a$d.Triangle);
      const n3 = e2.tolerance;
      M$1(t2.boundingInfo, o2, i2, n3, r2, s2);
    } else {
      const n3 = t2.indices.get(O$2.POSITION), e3 = t2.vertexAttributes.get(O$2.POSITION);
      v$6(o2, i2, 0, n3.length / 3, n3, e3, void 0, r2, s2);
    }
}
const b$5 = n$a();
function M$1(t2, n2, i2, r2, s2, c2) {
  if (t$d(t2))
    return;
  const f2 = N$1(n2, i2, b$5);
  if (d$d(g$4, t2.getBBMin()), q$1(g$4, t2.getBBMax()), r$6(s2) && s2.applyToAabb(g$4), O(g$4, n2, f2, r2)) {
    const { primitiveIndices: e2, indices: o2, position: f3 } = t2, a2 = e2 ? e2.length : o2.length / 3;
    if (a2 > W) {
      const e3 = t2.getChildren();
      if (e3 !== void 0) {
        for (let t3 = 0; t3 < 8; ++t3)
          e3[t3] !== void 0 && M$1(e3[t3], n2, i2, r2, s2, c2);
        return;
      }
    }
    v$6(n2, i2, 0, a2, o2, f3, e2, s2, c2);
  }
}
const y$2 = n$a();
function v$6(t2, n2, e2, i2, r2, s2, c2, f2, a2) {
  if (c2)
    return I$4(t2, n2, e2, i2, r2, s2, c2, f2, a2);
  const l2 = s2.data, u2 = s2.stride || s2.size, m2 = t2[0], p2 = t2[1], h2 = t2[2], d2 = n2[0] - m2, g2 = n2[1] - p2, x2 = n2[2] - h2;
  for (let b2 = e2, M2 = 3 * e2; b2 < i2; ++b2) {
    let t3 = u2 * r2[M2++], n3 = l2[t3++], e3 = l2[t3++], i3 = l2[t3];
    t3 = u2 * r2[M2++];
    let s3 = l2[t3++], c3 = l2[t3++], v2 = l2[t3];
    t3 = u2 * r2[M2++];
    let I2 = l2[t3++], T2 = l2[t3++], j2 = l2[t3];
    r$6(f2) && ([n3, e3, i3] = f2.applyToVertex(n3, e3, i3, b2), [s3, c3, v2] = f2.applyToVertex(s3, c3, v2, b2), [I2, T2, j2] = f2.applyToVertex(I2, T2, j2, b2));
    const N2 = s3 - n3, O2 = c3 - e3, V2 = v2 - i3, L2 = I2 - n3, S2 = T2 - e3, B2 = j2 - i3, E2 = g2 * B2 - S2 * x2, P2 = x2 * L2 - B2 * d2, U2 = d2 * S2 - L2 * g2, W2 = N2 * E2 + O2 * P2 + V2 * U2;
    if (Math.abs(W2) <= Number.EPSILON)
      continue;
    const z2 = m2 - n3, k2 = p2 - e3, R2 = h2 - i3, C2 = z2 * E2 + k2 * P2 + R2 * U2;
    if (W2 > 0) {
      if (C2 < 0 || C2 > W2)
        continue;
    } else if (C2 > 0 || C2 < W2)
      continue;
    const H2 = k2 * V2 - O2 * R2, X2 = R2 * N2 - V2 * z2, Y2 = z2 * O2 - N2 * k2, Z2 = d2 * H2 + g2 * X2 + x2 * Y2;
    if (W2 > 0) {
      if (Z2 < 0 || C2 + Z2 > W2)
        continue;
    } else if (Z2 > 0 || C2 + Z2 < W2)
      continue;
    const _2 = (L2 * H2 + S2 * X2 + B2 * Y2) / W2;
    if (_2 >= 0) {
      a2(_2, A$1(N2, O2, V2, L2, S2, B2, y$2), b2, false);
    }
  }
}
function I$4(t2, n2, e2, i2, r2, s2, c2, f2, a2) {
  const l2 = s2.data, u2 = s2.stride || s2.size, m2 = t2[0], p2 = t2[1], h2 = t2[2], d2 = n2[0] - m2, g2 = n2[1] - p2, x2 = n2[2] - h2;
  for (let b2 = e2; b2 < i2; ++b2) {
    const t3 = c2[b2];
    let n3 = 3 * t3, e3 = u2 * r2[n3++], i3 = l2[e3++], s3 = l2[e3++], M2 = l2[e3];
    e3 = u2 * r2[n3++];
    let v2 = l2[e3++], I2 = l2[e3++], T2 = l2[e3];
    e3 = u2 * r2[n3];
    let j2 = l2[e3++], N2 = l2[e3++], O2 = l2[e3];
    r$6(f2) && ([i3, s3, M2] = f2.applyToVertex(i3, s3, M2, b2), [v2, I2, T2] = f2.applyToVertex(v2, I2, T2, b2), [j2, N2, O2] = f2.applyToVertex(j2, N2, O2, b2));
    const V2 = v2 - i3, L2 = I2 - s3, S2 = T2 - M2, B2 = j2 - i3, E2 = N2 - s3, P2 = O2 - M2, U2 = g2 * P2 - E2 * x2, W2 = x2 * B2 - P2 * d2, z2 = d2 * E2 - B2 * g2, k2 = V2 * U2 + L2 * W2 + S2 * z2;
    if (Math.abs(k2) <= Number.EPSILON)
      continue;
    const R2 = m2 - i3, C2 = p2 - s3, H2 = h2 - M2, X2 = R2 * U2 + C2 * W2 + H2 * z2;
    if (k2 > 0) {
      if (X2 < 0 || X2 > k2)
        continue;
    } else if (X2 > 0 || X2 < k2)
      continue;
    const Y2 = C2 * S2 - L2 * H2, Z2 = H2 * V2 - S2 * R2, _2 = R2 * L2 - V2 * C2, q2 = d2 * Y2 + g2 * Z2 + x2 * _2;
    if (k2 > 0) {
      if (q2 < 0 || X2 + q2 > k2)
        continue;
    } else if (q2 > 0 || X2 + q2 < k2)
      continue;
    const w2 = (B2 * Y2 + E2 * Z2 + P2 * _2) / k2;
    if (w2 >= 0) {
      a2(w2, A$1(V2, L2, S2, B2, E2, P2, y$2), t3, false);
    }
  }
}
const T$2 = n$a(), j$2 = n$a();
function A$1(t2, n2, e2, o2, c2, f2, a2) {
  return o$n(T$2, t2, n2, e2), o$n(j$2, o2, c2, f2), _$6(a2, T$2, j$2), z$1(a2, a2), a2;
}
function N$1(t2, n2, e2) {
  return o$n(e2, 1 / (n2[0] - t2[0]), 1 / (n2[1] - t2[1]), 1 / (n2[2] - t2[2]));
}
function O(t2, n2, e2, o2) {
  return V$2(t2, n2, e2, o2, 1 / 0);
}
function V$2(t2, n2, e2, o2, i2) {
  const r2 = (t2[0] - o2 - n2[0]) * e2[0], s2 = (t2[3] + o2 - n2[0]) * e2[0];
  let c2 = Math.min(r2, s2), f2 = Math.max(r2, s2);
  const a2 = (t2[1] - o2 - n2[1]) * e2[1], l2 = (t2[4] + o2 - n2[1]) * e2[1];
  if (f2 = Math.min(f2, Math.max(a2, l2)), f2 < 0)
    return false;
  if (c2 = Math.max(c2, Math.min(a2, l2)), c2 > f2)
    return false;
  const u2 = (t2[2] - o2 - n2[2]) * e2[2], m2 = (t2[5] + o2 - n2[2]) * e2[2];
  return f2 = Math.min(f2, Math.max(u2, m2)), !(f2 < 0) && (c2 = Math.max(c2, Math.min(u2, m2)), !(c2 > f2) && c2 < i2);
}
function L$1(t2, e2, i2, r2, s2) {
  let c2 = (i2.screenLength || 0) * t2.pixelRatio;
  r$6(s2) && (c2 = m$4(c2, r2, e2, s2));
  const f2 = c2 * Math.tan(0.5 * t2.fovY) / (0.5 * t2.fullHeight);
  return a$i(f2 * e2, i2.minWorldLength || 0, i2.maxWorldLength != null ? i2.maxWorldLength : 1 / 0);
}
function S$3(t2, n2) {
  const e2 = n2 ? S$3(n2) : {};
  for (const o2 in t2) {
    let n3 = t2[o2];
    n3 && n3.forEach && (n3 = P$2(n3)), n3 == null && o2 in e2 || (e2[o2] = n3);
  }
  return e2;
}
function B$3(n2, e2) {
  let o2 = false;
  for (const i2 in e2) {
    const r2 = e2[i2];
    r2 !== void 0 && (Array.isArray(r2) ? n2[i2] === null ? (n2[i2] = r2.slice(), o2 = true) : c$i(n2[i2], r2) && (o2 = true) : n2[i2] !== r2 && (o2 = true, n2[i2] = r2));
  }
  return o2;
}
function P$2(t2) {
  const n2 = [];
  return t2.forEach((t3) => n2.push(t3)), n2;
}
const U$2 = { multiply: 1, ignore: 2, replace: 3, tint: 4 }, W = 1e3;
class d$7 extends r$5 {
  constructor(e2, r2) {
    super(), this.type = e$i.Material, this.supportsEdges = false, this._visible = true, this._renderPriority = 0, this._insertOrder = 0, this._vertexAttributeLocations = E$2, this._parameters = S$3(e2, r2), this.validateParameters(this._parameters);
  }
  dispose() {
  }
  get parameters() {
    return this._parameters;
  }
  update(e2) {
    return false;
  }
  setParameters(e2, r2 = true) {
    B$3(this._parameters, e2) && (this.validateParameters(this._parameters), r2 && this.parametersChanged());
  }
  validateParameters(e2) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this.parametersChanged());
  }
  shouldRender(e2) {
    return this.isVisible() && this.isVisibleForOutput(e2.output) && (this.renderOccluded & e2.renderOccludedMask) != 0;
  }
  isVisibleForOutput(e2) {
    return true;
  }
  get renderOccluded() {
    return this.parameters.renderOccluded;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(e2) {
    e2 !== this._renderPriority && (this._renderPriority = e2, this.parametersChanged());
  }
  get insertOrder() {
    return this._insertOrder;
  }
  set insertOrder(e2) {
    e2 !== this._insertOrder && (this._insertOrder = e2, this.parametersChanged());
  }
  get vertexAttributeLocations() {
    return this._vertexAttributeLocations;
  }
  isVisible() {
    return this._visible;
  }
  parametersChanged() {
    r$6(this.repository) && this.repository.materialChanged(this);
  }
}
var o$d;
!function(e2) {
  e2[e2.Occlude = 1] = "Occlude", e2[e2.Transparent = 2] = "Transparent", e2[e2.OccludeAndTransparent = 4] = "OccludeAndTransparent", e2[e2.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", e2[e2.Opaque = 16] = "Opaque";
}(o$d || (o$d = {}));
var E$1;
!function(E2) {
  E2[E2.INTEGRATED_MESH = 0] = "INTEGRATED_MESH", E2[E2.OPAQUE_TERRAIN = 1] = "OPAQUE_TERRAIN", E2[E2.OPAQUE_MATERIAL = 2] = "OPAQUE_MATERIAL", E2[E2.TRANSPARENT_MATERIAL = 3] = "TRANSPARENT_MATERIAL", E2[E2.TRANSPARENT_TERRAIN = 4] = "TRANSPARENT_TERRAIN", E2[E2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL = 5] = "TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL", E2[E2.OCCLUDED_TERRAIN = 6] = "OCCLUDED_TERRAIN", E2[E2.OCCLUDER_MATERIAL = 7] = "OCCLUDER_MATERIAL", E2[E2.TRANSPARENT_OCCLUDER_MATERIAL = 8] = "TRANSPARENT_OCCLUDER_MATERIAL", E2[E2.OCCLUSION_PIXELS = 9] = "OCCLUSION_PIXELS", E2[E2.POSTPROCESSING_ENVIRONMENT_OPAQUE = 10] = "POSTPROCESSING_ENVIRONMENT_OPAQUE", E2[E2.POSTPROCESSING_ENVIRONMENT_TRANSPARENT = 11] = "POSTPROCESSING_ENVIRONMENT_TRANSPARENT", E2[E2.LASERLINES = 12] = "LASERLINES", E2[E2.LASERLINES_CONTRAST_CONTROL = 13] = "LASERLINES_CONTRAST_CONTROL", E2[E2.HUD_MATERIAL = 14] = "HUD_MATERIAL", E2[E2.LABEL_MATERIAL = 15] = "LABEL_MATERIAL", E2[E2.LINE_CALLOUTS = 16] = "LINE_CALLOUTS", E2[E2.LINE_CALLOUTS_HUD_DEPTH = 17] = "LINE_CALLOUTS_HUD_DEPTH", E2[E2.DRAPED_MATERIAL = 18] = "DRAPED_MATERIAL", E2[E2.DRAPED_WATER = 19] = "DRAPED_WATER", E2[E2.VOXEL = 20] = "VOXEL", E2[E2.MAX_SLOTS = 21] = "MAX_SLOTS";
}(E$1 || (E$1 = {}));
class g$3 {
  constructor(t2 = 0) {
    this.componentLocalOriginLength = 0, this._tmpVertex = n$a(), this._mbs = R$2(), this._obb = { center: n$a(), halfSize: n$h(), quaternion: null }, this._totalOffset = 0, this._offset = 0, this._resetOffset(t2);
  }
  _resetOffset(t2) {
    this._offset = t2, this._totalOffset = t2;
  }
  set offset(t2) {
    this._resetOffset(t2);
  }
  get offset() {
    return this._offset;
  }
  set componentOffset(t2) {
    this._totalOffset = this._offset + t2;
  }
  set localOrigin(t2) {
    this.componentLocalOriginLength = Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
  }
  applyToVertex(t2, s2, e2) {
    const i2 = t2, r2 = s2, a2 = e2 + this.componentLocalOriginLength, o2 = this._totalOffset / Math.sqrt(i2 * i2 + r2 * r2 + a2 * a2);
    return this._tmpVertex[0] = t2 + i2 * o2, this._tmpVertex[1] = s2 + r2 * o2, this._tmpVertex[2] = e2 + a2 * o2, this._tmpVertex;
  }
  applyToAabb(t2) {
    const s2 = t2[0], e2 = t2[1], i2 = t2[2] + this.componentLocalOriginLength, r2 = t2[3], a2 = t2[4], o2 = t2[5] + this.componentLocalOriginLength, h2 = s2 * r2 < 0 ? 0 : Math.min(Math.abs(s2), Math.abs(r2)), n2 = e2 * a2 < 0 ? 0 : Math.min(Math.abs(e2), Math.abs(a2)), f2 = i2 * o2 < 0 ? 0 : Math.min(Math.abs(i2), Math.abs(o2)), l2 = Math.sqrt(h2 * h2 + n2 * n2 + f2 * f2);
    if (l2 < this._totalOffset)
      return t2[0] -= s2 < 0 ? this._totalOffset : 0, t2[1] -= e2 < 0 ? this._totalOffset : 0, t2[2] -= i2 < 0 ? this._totalOffset : 0, t2[3] += r2 > 0 ? this._totalOffset : 0, t2[4] += a2 > 0 ? this._totalOffset : 0, t2[5] += o2 > 0 ? this._totalOffset : 0, t2;
    const m2 = Math.max(Math.abs(s2), Math.abs(r2)), _2 = Math.max(Math.abs(e2), Math.abs(a2)), b2 = Math.max(Math.abs(i2), Math.abs(o2)), c2 = Math.sqrt(m2 * m2 + _2 * _2 + b2 * b2), p2 = this._totalOffset / c2, u2 = this._totalOffset / l2;
    return t2[0] += s2 * (s2 > 0 ? p2 : u2), t2[1] += e2 * (e2 > 0 ? p2 : u2), t2[2] += i2 * (i2 > 0 ? p2 : u2), t2[3] += r2 * (r2 < 0 ? p2 : u2), t2[4] += a2 * (a2 < 0 ? p2 : u2), t2[5] += o2 * (o2 < 0 ? p2 : u2), t2;
  }
  applyToMbs(t2) {
    const s2 = Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]), e2 = this._totalOffset / s2;
    return this._mbs[0] = t2[0] + t2[0] * e2, this._mbs[1] = t2[1] + t2[1] * e2, this._mbs[2] = t2[2] + t2[2] * e2, this._mbs[3] = t2[3] + t2[3] * this._totalOffset / s2, this._mbs;
  }
  applyToObb(t2) {
    const s2 = t2.center, e2 = this._totalOffset / Math.sqrt(s2[0] * s2[0] + s2[1] * s2[1] + s2[2] * s2[2]);
    this._obb.center[0] = s2[0] + s2[0] * e2, this._obb.center[1] = s2[1] + s2[1] * e2, this._obb.center[2] = s2[2] + s2[2] * e2, E$8(this._obb.halfSize, t2.halfSize, t2.quaternion), u$c(this._obb.halfSize, this._obb.halfSize, t2.center);
    const i2 = this._totalOffset / Math.sqrt(this._obb.halfSize[0] * this._obb.halfSize[0] + this._obb.halfSize[1] * this._obb.halfSize[1] + this._obb.halfSize[2] * this._obb.halfSize[2]);
    return this._obb.halfSize[0] += this._obb.halfSize[0] * i2, this._obb.halfSize[1] += this._obb.halfSize[1] * i2, this._obb.halfSize[2] += this._obb.halfSize[2] * i2, e$m(this._obb.halfSize, this._obb.halfSize, t2.center), S$5(I$3, t2.quaternion), E$8(this._obb.halfSize, this._obb.halfSize, I$3), this._obb.halfSize[0] *= this._obb.halfSize[0] < 0 ? -1 : 1, this._obb.halfSize[1] *= this._obb.halfSize[1] < 0 ? -1 : 1, this._obb.halfSize[2] *= this._obb.halfSize[2] < 0 ? -1 : 1, this._obb.quaternion = t2.quaternion, this._obb;
  }
}
class x$2 {
  constructor(t2 = 0) {
    this.offset = t2, this.sphere = R$2(), this.tmpVertex = n$a();
  }
  applyToVertex(t2, s2, e2) {
    const i2 = this.objectTransform.transform;
    let r2 = i2[0] * t2 + i2[4] * s2 + i2[8] * e2 + i2[12], a2 = i2[1] * t2 + i2[5] * s2 + i2[9] * e2 + i2[13], o2 = i2[2] * t2 + i2[6] * s2 + i2[10] * e2 + i2[14];
    const h2 = this.offset / Math.sqrt(r2 * r2 + a2 * a2 + o2 * o2);
    r2 += r2 * h2, a2 += a2 * h2, o2 += o2 * h2;
    const n2 = this.objectTransform.inverse;
    return this.tmpVertex[0] = n2[0] * r2 + n2[4] * a2 + n2[8] * o2 + n2[12], this.tmpVertex[1] = n2[1] * r2 + n2[5] * a2 + n2[9] * o2 + n2[13], this.tmpVertex[2] = n2[2] * r2 + n2[6] * a2 + n2[10] * o2 + n2[14], this.tmpVertex;
  }
  applyToMinMax(t2, s2) {
    const e2 = this.offset / Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
    t2[0] += t2[0] * e2, t2[1] += t2[1] * e2, t2[2] += t2[2] * e2;
    const i2 = this.offset / Math.sqrt(s2[0] * s2[0] + s2[1] * s2[1] + s2[2] * s2[2]);
    s2[0] += s2[0] * i2, s2[1] += s2[1] * i2, s2[2] += s2[2] * i2;
  }
  applyToAabb(t2) {
    const s2 = this.offset / Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
    t2[0] += t2[0] * s2, t2[1] += t2[1] * s2, t2[2] += t2[2] * s2;
    const e2 = this.offset / Math.sqrt(t2[3] * t2[3] + t2[4] * t2[4] + t2[5] * t2[5]);
    return t2[3] += t2[3] * e2, t2[4] += t2[4] * e2, t2[5] += t2[5] * e2, t2;
  }
  applyToBoundingSphere(t2) {
    const s2 = Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]), e2 = this.offset / s2;
    return this.sphere[0] = t2[0] + t2[0] * e2, this.sphere[1] = t2[1] + t2[1] * e2, this.sphere[2] = t2[2] + t2[2] * e2, this.sphere[3] = t2[3] + t2[3] * this.offset / s2, this.sphere;
  }
}
const S$2 = new x$2();
function y$1(s2) {
  return r$6(s2) ? (S$2.offset = s2, S$2) : null;
}
new g$3();
const I$3 = e$o();
function c$7(e2, t2, f2, o2) {
  const r2 = f2.typedBuffer, n2 = f2.typedBufferStride, s2 = e2.length;
  o2 *= n2;
  for (let i2 = 0; i2 < s2; ++i2) {
    const f3 = 2 * e2[i2];
    r2[o2] = t2[f3], r2[o2 + 1] = t2[f3 + 1], o2 += n2;
  }
}
function d$6(e2, t2, f2, o2, r2) {
  const n2 = f2.typedBuffer, s2 = f2.typedBufferStride, i2 = e2.length;
  if (o2 *= s2, r2 == null || r2 === 1)
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 3 * e2[l2];
      n2[o2] = t2[f3], n2[o2 + 1] = t2[f3 + 1], n2[o2 + 2] = t2[f3 + 2], o2 += s2;
    }
  else
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 3 * e2[l2];
      for (let e3 = 0; e3 < r2; ++e3)
        n2[o2] = t2[f3], n2[o2 + 1] = t2[f3 + 1], n2[o2 + 2] = t2[f3 + 2], o2 += s2;
    }
}
function u$3(e2, t2, f2, o2, r2 = 1) {
  const n2 = f2.typedBuffer, s2 = f2.typedBufferStride, i2 = e2.length;
  if (o2 *= s2, r2 === 1)
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 4 * e2[l2];
      n2[o2] = t2[f3], n2[o2 + 1] = t2[f3 + 1], n2[o2 + 2] = t2[f3 + 2], n2[o2 + 3] = t2[f3 + 3], o2 += s2;
    }
  else
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 4 * e2[l2];
      for (let e3 = 0; e3 < r2; ++e3)
        n2[o2] = t2[f3], n2[o2 + 1] = t2[f3 + 1], n2[o2 + 2] = t2[f3 + 2], n2[o2 + 3] = t2[f3 + 3], o2 += s2;
    }
}
function y(e2, t2, f2, o2, r2, n2 = 1) {
  if (!f2)
    return void d$6(e2, t2, o2, r2, n2);
  const s2 = o2.typedBuffer, i2 = o2.typedBufferStride, l2 = e2.length, c2 = f2[0], u2 = f2[1], a2 = f2[2], p2 = f2[4], y2 = f2[5], B2 = f2[6], g2 = f2[8], h2 = f2[9], b2 = f2[10], m2 = f2[12], O2 = f2[13], z2 = f2[14];
  r2 *= i2;
  let A2 = 0, L2 = 0, j2 = 0;
  const I2 = S$1(f2) ? (e3) => {
    A2 = t2[e3] + m2, L2 = t2[e3 + 1] + O2, j2 = t2[e3 + 2] + z2;
  } : (e3) => {
    const f3 = t2[e3], o3 = t2[e3 + 1], r3 = t2[e3 + 2];
    A2 = c2 * f3 + p2 * o3 + g2 * r3 + m2, L2 = u2 * f3 + y2 * o3 + h2 * r3 + O2, j2 = a2 * f3 + B2 * o3 + b2 * r3 + z2;
  };
  if (n2 === 1)
    for (let d2 = 0; d2 < l2; ++d2)
      I2(3 * e2[d2]), s2[r2] = A2, s2[r2 + 1] = L2, s2[r2 + 2] = j2, r2 += i2;
  else
    for (let d2 = 0; d2 < l2; ++d2) {
      I2(3 * e2[d2]);
      for (let e3 = 0; e3 < n2; ++e3)
        s2[r2] = A2, s2[r2 + 1] = L2, s2[r2 + 2] = j2, r2 += i2;
    }
}
function B$2(e2, f2, o2, r2, n2, s2 = 1) {
  if (!o2)
    return void d$6(e2, f2, r2, n2, s2);
  const i2 = o2, l2 = r2.typedBuffer, c2 = r2.typedBufferStride, u2 = e2.length, a2 = i2[0], p2 = i2[1], y2 = i2[2], B2 = i2[4], g2 = i2[5], h2 = i2[6], b2 = i2[8], m2 = i2[9], O2 = i2[10], z2 = !G$4(i2), A2 = 1e-6, L2 = 1 - A2;
  n2 *= c2;
  let j2 = 0, I2 = 0, k2 = 0;
  const C2 = S$1(i2) ? (e3) => {
    j2 = f2[e3], I2 = f2[e3 + 1], k2 = f2[e3 + 2];
  } : (e3) => {
    const t2 = f2[e3], o3 = f2[e3 + 1], r3 = f2[e3 + 2];
    j2 = a2 * t2 + B2 * o3 + b2 * r3, I2 = p2 * t2 + g2 * o3 + m2 * r3, k2 = y2 * t2 + h2 * o3 + O2 * r3;
  };
  if (s2 === 1)
    if (z2)
      for (let t2 = 0; t2 < u2; ++t2) {
        C2(3 * e2[t2]);
        const f3 = j2 * j2 + I2 * I2 + k2 * k2;
        if (f3 < L2 && f3 > A2) {
          const e3 = 1 / Math.sqrt(f3);
          l2[n2] = j2 * e3, l2[n2 + 1] = I2 * e3, l2[n2 + 2] = k2 * e3;
        } else
          l2[n2] = j2, l2[n2 + 1] = I2, l2[n2 + 2] = k2;
        n2 += c2;
      }
    else
      for (let t2 = 0; t2 < u2; ++t2)
        C2(3 * e2[t2]), l2[n2] = j2, l2[n2 + 1] = I2, l2[n2 + 2] = k2, n2 += c2;
  else
    for (let t2 = 0; t2 < u2; ++t2) {
      if (C2(3 * e2[t2]), z2) {
        const e3 = j2 * j2 + I2 * I2 + k2 * k2;
        if (e3 < L2 && e3 > A2) {
          const t3 = 1 / Math.sqrt(e3);
          j2 *= t3, I2 *= t3, k2 *= t3;
        }
      }
      for (let e3 = 0; e3 < s2; ++e3)
        l2[n2] = j2, l2[n2 + 1] = I2, l2[n2 + 2] = k2, n2 += c2;
    }
}
function g$2(e2, f2, o2, r2, n2, s2 = 1) {
  if (!o2)
    return void u$3(e2, f2, r2, n2, s2);
  const i2 = o2, l2 = r2.typedBuffer, c2 = r2.typedBufferStride, d2 = e2.length, a2 = i2[0], p2 = i2[1], y2 = i2[2], B2 = i2[4], g2 = i2[5], h2 = i2[6], b2 = i2[8], m2 = i2[9], S2 = i2[10], O2 = !G$4(i2), z2 = 1e-6, A2 = 1 - z2;
  if (n2 *= c2, s2 === 1)
    for (let t2 = 0; t2 < d2; ++t2) {
      const o3 = 4 * e2[t2], r3 = f2[o3], s3 = f2[o3 + 1], i3 = f2[o3 + 2], d3 = f2[o3 + 3];
      let u2 = a2 * r3 + B2 * s3 + b2 * i3, L2 = p2 * r3 + g2 * s3 + m2 * i3, j2 = y2 * r3 + h2 * s3 + S2 * i3;
      if (O2) {
        const e3 = u2 * u2 + L2 * L2 + j2 * j2;
        if (e3 < A2 && e3 > z2) {
          const t3 = 1 / Math.sqrt(e3);
          u2 *= t3, L2 *= t3, j2 *= t3;
        }
      }
      l2[n2] = u2, l2[n2 + 1] = L2, l2[n2 + 2] = j2, l2[n2 + 3] = d3, n2 += c2;
    }
  else
    for (let t2 = 0; t2 < d2; ++t2) {
      const o3 = 4 * e2[t2], r3 = f2[o3], i3 = f2[o3 + 1], d3 = f2[o3 + 2], u2 = f2[o3 + 3];
      let L2 = a2 * r3 + B2 * i3 + b2 * d3, j2 = p2 * r3 + g2 * i3 + m2 * d3, I2 = y2 * r3 + h2 * i3 + S2 * d3;
      if (O2) {
        const e3 = L2 * L2 + j2 * j2 + I2 * I2;
        if (e3 < A2 && e3 > z2) {
          const t3 = 1 / Math.sqrt(e3);
          L2 *= t3, j2 *= t3, I2 *= t3;
        }
      }
      for (let e3 = 0; e3 < s2; ++e3)
        l2[n2] = L2, l2[n2 + 1] = j2, l2[n2 + 2] = I2, l2[n2 + 3] = u2, n2 += c2;
    }
}
function h$3(e2, t2, f2, o2, r2, n2 = 1) {
  const s2 = o2.typedBuffer, i2 = o2.typedBufferStride, l2 = e2.length;
  if (r2 *= i2, f2 !== t2.length || f2 !== 4)
    if (n2 !== 1)
      if (f2 !== 4)
        for (let c2 = 0; c2 < l2; ++c2) {
          const f3 = 3 * e2[c2];
          for (let e3 = 0; e3 < n2; ++e3)
            s2[r2] = t2[f3], s2[r2 + 1] = t2[f3 + 1], s2[r2 + 2] = t2[f3 + 2], s2[r2 + 3] = 255, r2 += i2;
        }
      else
        for (let c2 = 0; c2 < l2; ++c2) {
          const f3 = 4 * e2[c2];
          for (let e3 = 0; e3 < n2; ++e3)
            s2[r2] = t2[f3], s2[r2 + 1] = t2[f3 + 1], s2[r2 + 2] = t2[f3 + 2], s2[r2 + 3] = t2[f3 + 3], r2 += i2;
        }
    else {
      if (f2 === 4) {
        for (let f3 = 0; f3 < l2; ++f3) {
          const o3 = 4 * e2[f3];
          s2[r2] = t2[o3], s2[r2 + 1] = t2[o3 + 1], s2[r2 + 2] = t2[o3 + 2], s2[r2 + 3] = t2[o3 + 3], r2 += i2;
        }
        return;
      }
      for (let f3 = 0; f3 < l2; ++f3) {
        const o3 = 3 * e2[f3];
        s2[r2] = t2[o3], s2[r2 + 1] = t2[o3 + 1], s2[r2 + 2] = t2[o3 + 2], s2[r2 + 3] = 255, r2 += i2;
      }
    }
  else {
    s2[r2] = t2[0], s2[r2 + 1] = t2[1], s2[r2 + 2] = t2[2], s2[r2 + 3] = t2[3];
    const e3 = new Uint32Array(o2.typedBuffer.buffer, o2.start), f3 = i2 / 4, c2 = e3[r2 /= 4];
    r2 += f3;
    const d2 = l2 * n2;
    for (let t3 = 1; t3 < d2; ++t3)
      e3[r2] = c2, r2 += f3;
  }
}
function b$4(e2, t2, f2, o2, r2 = 1) {
  const n2 = t2.typedBuffer, s2 = t2.typedBufferStride;
  if (o2 *= s2, r2 === 1)
    for (let i2 = 0; i2 < f2; ++i2)
      n2[o2] = e2[0], n2[o2 + 1] = e2[1], n2[o2 + 2] = e2[2], n2[o2 + 3] = e2[3], o2 += s2;
  else
    for (let i2 = 0; i2 < f2; ++i2)
      for (let t3 = 0; t3 < r2; ++t3)
        n2[o2] = e2[0], n2[o2 + 1] = e2[1], n2[o2 + 2] = e2[2], n2[o2 + 3] = e2[3], o2 += s2;
}
function m$3(t2, l2, d2, u2, a2, p2) {
  for (const m2 of l2.fieldNames) {
    const l3 = t2.vertexAttributes.get(m2), S2 = t2.indices.get(m2);
    if (l3 && S2)
      switch (m2) {
        case O$2.POSITION: {
          e$k(l3.size === 3);
          const e2 = a2.getField(m2, i$l);
          e2 && y(S2, l3.data, d2, e2, p2);
          break;
        }
        case O$2.NORMAL: {
          e$k(l3.size === 3);
          const e2 = a2.getField(m2, i$l);
          e2 && B$2(S2, l3.data, u2, e2, p2);
          break;
        }
        case O$2.UV0: {
          e$k(l3.size === 2);
          const e2 = a2.getField(m2, u$f);
          e2 && c$7(S2, l3.data, e2, p2);
          break;
        }
        case O$2.COLOR: {
          e$k(l3.size === 3 || l3.size === 4);
          const e2 = a2.getField(m2, x$7);
          e2 && h$3(S2, l3.data, l3.size, e2, p2);
          break;
        }
        case O$2.SYMBOLCOLOR: {
          e$k(l3.size === 3 || l3.size === 4);
          const e2 = a2.getField(m2, x$7);
          e2 && h$3(S2, l3.data, l3.size, e2, p2);
          break;
        }
        case O$2.TANGENT: {
          e$k(l3.size === 4);
          const e2 = a2.getField(m2, c$j);
          e2 && g$2(S2, l3.data, u2, e2, p2);
          break;
        }
      }
    else if (m2 === O$2.OBJECTANDLAYERIDCOLOR && r$6(t2.objectAndLayerIdColor) && t2.objectAndLayerIdColor.length === 4) {
      const e2 = t2.indices.get(O$2.POSITION);
      if (e2) {
        const f2 = e2.length, r2 = a2.getField(m2, x$7);
        b$4(t2.objectAndLayerIdColor, r2, f2, p2);
      }
    }
  }
}
function S$1(e2) {
  return e2[0] === 1 && e2[1] === 0 && e2[2] === 0 && e2[4] === 0 && e2[5] === 1 && e2[6] === 0 && e2[8] === 0 && e2[9] === 0 && e2[10] === 1;
}
function o$c(o2) {
  o2.attributes.add(O$2.POSITION, "vec3"), o2.vertex.code.add(n$9`vec3 positionModel() { return position; }`);
}
function c$6({ code: c2 }, i2) {
  i2.doublePrecisionRequiresObfuscation ? c2.add(n$9`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`) : c2.add(n$9`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);
}
function i$8(e2) {
  return !!has("force-double-precision-obfuscation") || e2.driverTest.doublePrecisionRequiresObfuscation;
}
class o$b extends i$g {
  constructor(r2, o2) {
    super(r2, "mat3", a$a.Draw, (e2, s2, t2) => e2.setUniformMatrix3fv(r2, o2(s2, t2)));
  }
}
class e$c extends i$g {
  constructor(r2, e2) {
    super(r2, "mat3", a$a.Pass, (s2, o2, t2) => s2.setUniformMatrix3fv(r2, e2(o2, t2)));
  }
}
class e$b extends i$g {
  constructor(r2, e2) {
    super(r2, "mat4", a$a.Pass, (s2, o2, t2) => s2.setUniformMatrix4fv(r2, e2(o2, t2)));
  }
}
function F(r2, o2) {
  r2.include(o$c);
  const e2 = r2.vertex;
  e2.include(c$6, o2), r2.varyings.add("vPositionWorldCameraRelative", "vec3"), r2.varyings.add("vPosition_view", "vec3"), e2.uniforms.add([new e$d("transformWorldFromViewTH", (r3) => r3.transformWorldFromViewTH), new e$d("transformWorldFromViewTL", (r3) => r3.transformWorldFromViewTL), new e$c("transformViewFromCameraRelativeRS", (r3) => r3.transformViewFromCameraRelativeRS), new e$b("transformProjFromView", (r3) => r3.transformProjFromView), new o$b("transformWorldFromModelRS", (r3) => r3.transformWorldFromModelRS), new o$h("transformWorldFromModelTH", (r3) => r3.transformWorldFromModelTH), new o$h("transformWorldFromModelTL", (r3) => r3.transformWorldFromModelTL)]), e2.code.add(n$9`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`), e2.code.add(n$9`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o2.spherical ? n$9`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)` : n$9`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `), r2.fragment.uniforms.add(new e$d("transformWorldFromViewTL", (r3) => r3.transformWorldFromViewTL)), e2.code.add(n$9`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`), r2.fragment.code.add(n$9`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
}
class c$5 extends t$c {
  constructor() {
    super(...arguments), this.transformWorldFromViewTH = n$a(), this.transformWorldFromViewTL = n$a(), this.transformViewFromCameraRelativeRS = e$p(), this.transformProjFromView = e$q();
  }
}
function n$7(r2, o2) {
  o2.normalType === i$a.Attribute || o2.normalType === i$a.CompressedAttribute ? (r2.include(o$j, o2), r2.varyings.add("vNormalWorld", "vec3"), r2.varyings.add("vNormalView", "vec3"), r2.vertex.uniforms.add([new o$b("transformNormalGlobalFromModel", (r3) => r3.transformNormalGlobalFromModel), new e$c("transformNormalViewFromGlobal", (r3) => r3.transformNormalViewFromGlobal)]), r2.vertex.code.add(n$9`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)) : o2.normalType === i$a.Ground ? (r2.include(F, o2), r2.varyings.add("vNormalWorld", "vec3"), r2.vertex.code.add(n$9`
    void forwardNormal() {
      vNormalWorld = ${o2.spherical ? n$9`normalize(vPositionWorldCameraRelative);` : n$9`vec3(0.0, 0.0, 1.0);`}
    }
    `)) : r2.vertex.code.add(n$9`void forwardNormal() {}`);
}
class f$6 extends c$5 {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = e$p();
  }
}
const o$a = 0.1, t$7 = 1e-3;
class t$6 {
  constructor(t2, o2) {
    this._module = t2, this._loadModule = o2;
  }
  get() {
    return this._module;
  }
  async reload() {
    return this._module = await this._loadModule(), this._module;
  }
}
class e$a {
  constructor(i2, t2, e2) {
    this.release = e2, this.initializeConfiguration(i2, t2), this._configuration = t2.snapshot(), this._program = this.initializeProgram(i2), this._pipeline = this.initializePipeline(i2.rctx.capabilities);
  }
  destroy() {
    this._program = a$j(this._program), this._pipeline = this._configuration = null;
  }
  reload(t2) {
    a$j(this._program), this._program = this.initializeProgram(t2), this._pipeline = this.initializePipeline(t2.rctx.capabilities);
  }
  get program() {
    return this._program;
  }
  get compiled() {
    return this.program.isCompiled;
  }
  get key() {
    return this._configuration.key;
  }
  get configuration() {
    return this._configuration;
  }
  bindPipelineState(i2, t2 = null, e2) {
    i2.setPipelineState(this.getPipelineState(t2, e2));
  }
  ensureAttributeLocations(i2) {
    this.program.assertCompatibleVertexAttributeLocations(i2);
  }
  get primitiveType() {
    return E$7.TRIANGLES;
  }
  getPipelineState(i2, t2) {
    return this._pipeline;
  }
  initializeConfiguration(i2, t2) {
  }
}
class o$9 {
  constructor(t2, e2, o2) {
    this._context = t2, this._locations = o2, this._textures = new Map(), this._freeTextureUnits = new l$a({ deallocator: null }), this._glProgram = t2.programCache.acquire(e2.generate("vertex"), e2.generate("fragment"), o2), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bindPass = e2.generateBind(a$a.Pass, this), this.bindDraw = e2.generateBind(a$a.Draw, this), this._fragmentUniforms = a$k() ? e2.fragmentUniforms : null;
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get isCompiled() {
    return this._glProgram.isCompiled;
  }
  setUniform1b(t2, e2) {
    this._glProgram.setUniform1i(t2, e2 ? 1 : 0);
  }
  setUniform1i(t2, e2) {
    this._glProgram.setUniform1i(t2, e2);
  }
  setUniform1f(t2, e2) {
    this._glProgram.setUniform1f(t2, e2);
  }
  setUniform2fv(t2, e2) {
    this._glProgram.setUniform2fv(t2, e2);
  }
  setUniform3fv(t2, e2) {
    this._glProgram.setUniform3fv(t2, e2);
  }
  setUniform4fv(t2, e2) {
    this._glProgram.setUniform4fv(t2, e2);
  }
  setUniformMatrix3fv(t2, e2) {
    this._glProgram.setUniformMatrix3fv(t2, e2);
  }
  setUniformMatrix4fv(t2, e2) {
    this._glProgram.setUniformMatrix4fv(t2, e2);
  }
  setUniform1fv(t2, e2) {
    this._glProgram.setUniform1fv(t2, e2);
  }
  setUniform1iv(t2, e2) {
    this._glProgram.setUniform1iv(t2, e2);
  }
  setUniform2iv(t2, e2) {
    this._glProgram.setUniform3iv(t2, e2);
  }
  setUniform3iv(t2, e2) {
    this._glProgram.setUniform3iv(t2, e2);
  }
  setUniform4iv(t2, e2) {
    this._glProgram.setUniform4iv(t2, e2);
  }
  assertCompatibleVertexAttributeLocations(t2) {
    t2.locations !== this._locations && console.error("VertexAttributeLocations are incompatible");
  }
  stop() {
    this._textures.clear(), this._freeTextureUnits.clear();
  }
  bindTexture(e2, r2) {
    if (t$d(r2) || r2.glName == null) {
      const t2 = this._textures.get(e2);
      return t2 && (this._context.bindTexture(null, t2.unit), this._freeTextureUnit(t2), this._textures.delete(e2)), null;
    }
    let i2 = this._textures.get(e2);
    return i2 == null ? (i2 = this._allocTextureUnit(r2), this._textures.set(e2, i2)) : i2.texture = r2, this._context.useProgram(this), this.setUniform1i(e2, i2.unit), this._context.bindTexture(r2, i2.unit), i2.unit;
  }
  rebindTextures() {
    this._context.useProgram(this), this._textures.forEach((t2, e2) => {
      this._context.bindTexture(t2.texture, t2.unit), this.setUniform1i(e2, t2.unit);
    }), r$6(this._fragmentUniforms) && this._fragmentUniforms.forEach((t2) => {
      t2.type !== "sampler2D" && t2.type !== "samplerCube" || this._textures.has(t2.name) || console.error(`Texture sampler ${t2.name} has no bound texture`);
    });
  }
  _allocTextureUnit(t2) {
    return { texture: t2, unit: this._freeTextureUnits.length === 0 ? this._textures.size : this._freeTextureUnits.pop() };
  }
  _freeTextureUnit(t2) {
    this._freeTextureUnits.push(t2.unit);
  }
}
({ func: I$5.LESS });
({ func: I$5.ALWAYS });
const e$9 = { mask: 255 }, f$5 = { function: { func: I$5.ALWAYS, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.ZERO } }, o$8 = { function: { func: I$5.ALWAYS, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.REPLACE } };
({ function: { func: I$5.EQUAL, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.KEEP } });
({ function: { func: I$5.NOTEQUAL, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.KEEP } });
function t$5(e2) {
  e2.varyings.add("linearDepth", "float");
}
function i$7(e2) {
  e2.vertex.uniforms.add(new e$g("nearFar", (e3, r2) => r2.camera.nearFar));
}
function n$6(e2) {
  e2.vertex.code.add(n$9`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);
}
function d$5(a2, d2) {
  const { vertex: s2 } = a2;
  switch (d2.output) {
    case h$5.Color:
      if (d2.receiveShadows)
        return t$5(a2), void s2.code.add(n$9`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);
      break;
    case h$5.Depth:
    case h$5.Shadow:
    case h$5.ShadowHighlight:
    case h$5.ShadowExludeHighlight:
      return a2.include(F, d2), t$5(a2), i$7(a2), n$6(a2), void s2.code.add(n$9`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);
  }
  s2.code.add(n$9`void forwardLinearDepth() {}`);
}
function e$8(e2) {
  e2.vertex.code.add(n$9`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}
function u$2(s2, i2) {
  H$1(s2, i2, [new o$h("slicePlaneOrigin", (e2, s3) => b$3(i2, e2, s3)), new o$h("slicePlaneBasis1", (s3, a2) => {
    var _a;
    return B$1(i2, s3, a2, (_a = e$r(a2.slicePlane)) == null ? void 0 : _a.basis1);
  }), new o$h("slicePlaneBasis2", (s3, a2) => {
    var _a;
    return B$1(i2, s3, a2, (_a = e$r(a2.slicePlane)) == null ? void 0 : _a.basis2);
  })]);
}
function H$1(e2, s2, i2) {
  if (!s2.hasSlicePlane) {
    const i3 = n$9`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;
    return s2.hasSliceInVertexProgram && e2.vertex.code.add(i3), void e2.fragment.code.add(i3);
  }
  e2.extensions.add("GL_OES_standard_derivatives"), s2.hasSliceInVertexProgram && e2.vertex.uniforms.add(i2), e2.fragment.uniforms.add(i2);
  const a2 = n$9`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`, o2 = n$9`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`, c2 = s2.hasSliceHighlight ? n$9`
        ${o2}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      ` : n$9`#define highlightSlice(_color_, _pos_) (_color_)`;
  s2.hasSliceInVertexProgram && e2.vertex.code.add(a2), e2.fragment.code.add(a2), e2.fragment.code.add(c2);
}
function g$1(e2, s2, i2) {
  return e2.instancedDoublePrecision ? o$n(S, i2.camera.viewInverseTransposeMatrix[3], i2.camera.viewInverseTransposeMatrix[7], i2.camera.viewInverseTransposeMatrix[11]) : s2.slicePlaneLocalOrigin;
}
function I$2(e2, s2) {
  return r$6(e2) ? e$m(L, s2.origin, e2) : s2.origin;
}
function v$5(e2, s2, o2) {
  return e2.hasSliceTranslatedView ? r$6(s2) ? c$k(T$1, o2.camera.viewMatrix, s2) : o2.camera.viewMatrix : null;
}
function b$3(e2, a2, o2) {
  if (t$d(o2.slicePlane))
    return f$e;
  const r2 = g$1(e2, a2, o2), l2 = I$2(r2, o2.slicePlane), t2 = v$5(e2, r2, o2);
  return r$6(t2) ? O$5(L, l2, t2) : l2;
}
function B$1(e2, a2, o2, t2) {
  if (t$d(t2) || t$d(o2.slicePlane))
    return f$e;
  const f2 = g$1(e2, a2, o2), d2 = I$2(f2, o2.slicePlane), _2 = v$5(e2, f2, o2);
  return r$6(_2) ? (u$c(G$1, t2, d2), O$5(L, d2, _2), O$5(G$1, G$1, _2), e$m(G$1, G$1, L)) : t2;
}
const S = n$a(), L = n$a(), G$1 = n$a(), T$1 = e$q();
function r$2(r2, t2) {
  if (n$6(r2), t2.hasModelTransformation)
    return r2.vertex.code.add(n$9`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`), void r2.vertex.code.add(n$9`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);
  r2.vertex.code.add(n$9`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`), r2.vertex.code.add(n$9`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
}
class o$7 extends i$g {
  constructor(r2, o2) {
    super(r2, "mat4", a$a.Draw, (e2, s2, t2) => e2.setUniformMatrix4fv(r2, o2(s2, t2)));
  }
}
function c$4(r2, e2) {
  e2.instancedDoublePrecision ? r2.constants.add("cameraPosition", "vec3", f$e) : r2.uniforms.add(new o$h("cameraPosition", (r3, e3) => o$n(w$2, e3.camera.viewInverseTransposeMatrix[3] - r3.origin[0], e3.camera.viewInverseTransposeMatrix[7] - r3.origin[1], e3.camera.viewInverseTransposeMatrix[11] - r3.origin[2])));
}
function v$4(e2, i2) {
  if (!i2.instancedDoublePrecision)
    return void e2.uniforms.add([new e$b("proj", (r2, e3) => e3.camera.projectionMatrix), new o$7("view", (e3, a2) => c$k(f$4, a2.camera.viewMatrix, e3.origin)), new o$h("localOrigin", (r2) => r2.origin)]);
  const o2 = (r2) => o$n(w$2, r2.camera.viewInverseTransposeMatrix[3], r2.camera.viewInverseTransposeMatrix[7], r2.camera.viewInverseTransposeMatrix[11]);
  e2.uniforms.add([new e$b("proj", (r2, e3) => e3.camera.projectionMatrix), new e$b("view", (e3, a2) => c$k(f$4, a2.camera.viewMatrix, o2(a2))), new e$d("localOrigin", (r2, e3) => o2(e3))]);
}
const f$4 = e$s(), w$2 = n$a();
function d$4(r2) {
  r2.uniforms.add(new e$b("viewNormal", (r3, e2) => e2.camera.viewInverseTransposeMatrix));
}
class t$4 {
  constructor() {
    this._key = "", this._keyDirty = false, this._parameterBits = this._parameterBits ? this._parameterBits.map(() => 0) : [], this._parameterNames || (this._parameterNames = []);
  }
  get key() {
    return this._keyDirty && (this._keyDirty = false, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
  }
  snapshot() {
    const t2 = this._parameterNames, e2 = { key: this.key };
    for (const r2 of t2)
      e2[r2] = this[r2];
    return e2;
  }
}
function e$7(t2 = {}) {
  return (e2, r2) => {
    var _a, _b;
    if (e2._parameterNames = (_a = e2._parameterNames) != null ? _a : [], e2._parameterNames.push(r2), t2.constValue != null)
      Object.defineProperty(e2, r2, { get: () => t2.constValue });
    else {
      const s2 = e2._parameterNames.length - 1, a2 = t2.count || 2, i2 = Math.ceil(Math.log2(a2)), o2 = (_b = e2._parameterBits) != null ? _b : [0];
      let h2 = 0;
      for (; o2[h2] + i2 > 16; )
        h2++, h2 >= o2.length && o2.push(0);
      e2._parameterBits = o2;
      const n2 = o2[h2], m2 = (1 << i2) - 1 << n2;
      o2[h2] += i2, Object.defineProperty(e2, r2, { get() {
        return this[s2];
      }, set(t3) {
        if (this[s2] !== t3 && (this[s2] = t3, this._keyDirty = true, this._parameterBits[h2] = this._parameterBits[h2] & ~m2 | +t3 << n2 & m2, typeof t3 != "number" && typeof t3 != "boolean"))
          throw "Configuration value for " + r2 + " must be boolean or number, got " + typeof t3;
      } });
    }
  };
}
class v$3 extends t$4 {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = false;
  }
}
function p$2(e2, i2) {
  i2.instanced && i2.instancedDoublePrecision && (e2.attributes.add(O$2.MODELORIGINHI, "vec3"), e2.attributes.add(O$2.MODELORIGINLO, "vec3"), e2.attributes.add(O$2.MODEL, "mat3"), e2.attributes.add(O$2.MODELNORMAL, "mat3"));
  const c2 = e2.vertex;
  i2.instancedDoublePrecision && (c2.include(c$6, i2), c2.uniforms.add(new o$h("viewOriginHi", (e3, i3) => o$p(o$n(b$2, i3.camera.viewInverseTransposeMatrix[3], i3.camera.viewInverseTransposeMatrix[7], i3.camera.viewInverseTransposeMatrix[11]), b$2))), c2.uniforms.add(new o$h("viewOriginLo", (e3, i3) => r$b(o$n(b$2, i3.camera.viewInverseTransposeMatrix[3], i3.camera.viewInverseTransposeMatrix[7], i3.camera.viewInverseTransposeMatrix[11]), b$2)))), c2.code.add(n$9`
    vec3 calculateVPos() {
      ${i2.instancedDoublePrecision ? "return model * localPosition().xyz;" : "return localPosition().xyz;"}
    }
    `), c2.code.add(n$9`
    vec3 subtractOrigin(vec3 _pos) {
      ${i2.instancedDoublePrecision ? n$9`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), c2.code.add(n$9`
    vec3 dpNormal(vec4 _normal) {
      ${i2.instancedDoublePrecision ? "return normalize(modelNormal * _normal.xyz);" : "return normalize(_normal.xyz);"}
    }
    `), i2.output === h$5.Normal && (d$4(c2), c2.code.add(n$9`
    vec3 dpNormalView(vec4 _normal) {
      ${i2.instancedDoublePrecision ? "return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);" : "return normalize((viewNormal * _normal).xyz);"}
    }
    `)), i2.hasVertexTangents && c2.code.add(n$9`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i2.instancedDoublePrecision ? "return vec4(modelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}

    }
    `);
}
e$t([e$7()], v$3.prototype, "instancedDoublePrecision", void 0);
const b$2 = n$a();
function e$6(e2) {
  e2.vertex.code.add(n$9`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n$9.int(r$c.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n$9.int(r$c.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n$9.int(r$c.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n$9.int(r$c.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}
class e$5 extends i$g {
  constructor(r2, e2) {
    super(r2, "int", a$a.Pass, (s2, o2, i2) => s2.setUniform1i(r2, e2(o2, i2)));
  }
}
function i$6(i2, t2) {
  t2.hasSymbolColors ? (i2.include(e$6), i2.attributes.add(O$2.SYMBOLCOLOR, "vec4"), i2.varyings.add("colorMixMode", "mediump float"), i2.vertex.code.add(n$9`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)) : (i2.fragment.uniforms.add(new e$5("colorMixMode", (o2) => U$2[o2.colorMixMode])), i2.vertex.code.add(n$9`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));
}
function e$4(e2, d2) {
  d2.hasVertexColors ? (e2.attributes.add(O$2.COLOR, "vec4"), e2.varyings.add("vColor", "vec4"), e2.vertex.code.add(n$9`void forwardVertexColor() { vColor = color; }`), e2.vertex.code.add(n$9`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : e2.vertex.code.add(n$9`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}
function c$3(e2) {
  e2.vertex.code.add(n$9`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`), e2.vertex.code.add(n$9`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), e2.vertex.code.add(n$9`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`), e2.vertex.code.add(n$9`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`), e2.vertex.code.add(n$9`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), e2.vertex.code.add(n$9`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`), e2.vertex.code.add(n$9`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function i$5(e2) {
  e2.uniforms.add(new e$h("screenSizePerspectiveAlignment", (e3) => o$6(e3.screenSizePerspectiveAlignment || e3.screenSizePerspective)));
}
function o$6(a2) {
  return r$d(n$5, a2.parameters.divisor, a2.parameters.offset, a2.parameters.minPixelSize, a2.paddingPixelsOverride);
}
const n$5 = n$i();
function a$5(e2, r2) {
  const c2 = e2.vertex;
  r2.hasVerticalOffset ? (f$3(c2), r2.hasScreenSizePerspective && (e2.include(c$3), i$5(c2), c$4(e2.vertex, r2)), c2.code.add(n$9`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r2.spherical ? n$9`vec3 worldNormal = normalize(worldPos + localOrigin);` : n$9`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r2.hasScreenSizePerspective ? n$9`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : n$9`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)) : c2.code.add(n$9`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
const i$4 = n$i();
function f$3(r2) {
  r2.uniforms.add(new e$h("verticalOffset", (r3, t2) => {
    const { minWorldLength: l2, maxWorldLength: o2, screenLength: c2 } = r3.verticalOffset, s2 = Math.tan(0.5 * t2.camera.fovY) / (0.5 * t2.camera.fullViewport[3]), a2 = t2.camera.pixelRatio || 1;
    return r$d(i$4, c2 * a2, s2, l2, o2);
  }));
}
function d$3(d2, t2) {
  const a2 = t2.output === h$5.ObjectAndLayerIdColor, n2 = t2.objectAndLayerIdColorInstanced;
  a2 && (d2.varyings.add("objectAndLayerIdColorVarying", "vec4"), n2 ? d2.attributes.add(O$2.OBJECTANDLAYERIDCOLOR_INSTANCED, "vec4") : d2.attributes.add(O$2.OBJECTANDLAYERIDCOLOR, "vec4")), d2.vertex.code.add(n$9`
     void forwardObjectAndLayerIdColor() {
      ${a2 ? n2 ? n$9`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;` : n$9`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;` : n$9``} }`), d2.fragment.code.add(n$9`
      void outputObjectAndLayerIdColor() {
        ${a2 ? n$9`gl_FragColor = objectAndLayerIdColorVarying;` : n$9``} }`);
}
function a$4(a2) {
  a2.code.add(n$9`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);
}
function o$5(o2, l2) {
  switch (o2.fragment.include(a$4), l2.output) {
    case h$5.Shadow:
    case h$5.ShadowHighlight:
    case h$5.ShadowExludeHighlight:
      o2.extensions.add("GL_OES_standard_derivatives"), o2.fragment.code.add(n$9`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);
      break;
    case h$5.Depth:
      o2.fragment.code.add(n$9`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);
  }
}
const g = r$9(1, 1, 0, 1), i$3 = r$9(1, 0, 1, 1);
function a$3(e2, a2) {
  e2.fragment.uniforms.add(u$9("depthTex", (e3, o2) => o2.highlightDepthTexture, a2.hasWebGL2Context ? e$f.None : e$f.InvSize)), e2.fragment.constants.add("occludedHighlightFlag", "vec4", g).add("unoccludedHighlightFlag", "vec4", i$3), e2.fragment.code.add(n$9`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${i$e(a2, "depthTex", "fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `);
}
class e$3 extends i$g {
  constructor(r2, e2, o2) {
    super(r2, "vec4", a$a.Pass, (s2, o3, t2) => s2.setUniform4fv(r2, e2(o3, t2)), o2);
  }
}
class o$4 extends i$g {
  constructor(r2, o2, e2) {
    super(r2, "float", a$a.Pass, (s2, e3, t2) => s2.setUniform1fv(r2, o2(e3, t2)), e2);
  }
}
const o$3 = 8;
function s$4(s2, n2) {
  n2.hasVvInstancing && (n2.vvSize || n2.vvColor) && s2.attributes.add(O$2.INSTANCEFEATUREATTRIBUTE, "vec4");
  const l2 = s2.vertex;
  n2.vvSize ? (l2.uniforms.add(new e$d("vvSizeMinSize", (e2) => e2.vvSizeMinSize)), l2.uniforms.add(new e$d("vvSizeMaxSize", (e2) => e2.vvSizeMaxSize)), l2.uniforms.add(new e$d("vvSizeOffset", (e2) => e2.vvSizeOffset)), l2.uniforms.add(new e$d("vvSizeFactor", (e2) => e2.vvSizeFactor)), l2.uniforms.add(new e$c("vvSymbolRotationMatrix", (e2) => e2.vvSymbolRotationMatrix)), l2.uniforms.add(new e$d("vvSymbolAnchor", (e2) => e2.vvSymbolAnchor)), l2.code.add(n$9`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`), l2.code.add(n$9`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n2.hasVvInstancing ? n$9`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : l2.code.add(n$9`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), n2.vvColor ? (l2.constants.add("vvColorNumber", "int", o$3), n2.hasVvInstancing && l2.uniforms.add([new o$4("vvColorValues", (e2) => e2.vvColorValues, o$3), new e$3("vvColorColors", (e2) => e2.vvColorColors, o$3)]), l2.code.add(n$9`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${n2.hasVvInstancing ? n$9`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }` : ""}
    `)) : l2.code.add(n$9`vec4 vvColor() { return vec4(1.0); }`);
}
function d$2(d2) {
  d2.fragment.code.add(n$9`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n$9.float(t$7)}) { discard; } }
  `);
}
class o$2 extends i$g {
  constructor(r2, o2) {
    super(r2, "float", a$a.Pass, (s2, e2, t2) => s2.setUniform1f(r2, o2(e2, t2)));
  }
}
function s$3(a2, e2) {
  l$2(a2, e2, new o$2("textureAlphaCutoff", (a3) => a3.textureAlphaCutoff));
}
function l$2(e2, r2, s2) {
  const t2 = e2.fragment;
  switch (r2.alphaDiscardMode !== C$4.Mask && r2.alphaDiscardMode !== C$4.MaskBlend || t2.uniforms.add(s2), r2.alphaDiscardMode) {
    case C$4.Blend:
      return e2.include(d$2);
    case C$4.Opaque:
      t2.code.add(n$9`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
      break;
    case C$4.Mask:
      t2.code.add(n$9`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);
      break;
    case C$4.MaskBlend:
      e2.fragment.code.add(n$9`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);
  }
}
function b$1(b2, O2) {
  const { vertex: w2, fragment: C2 } = b2, T2 = O2.hasModelTransformation;
  T2 && w2.uniforms.add(new e$b("model", (e2) => r$6(e2.modelTransformation) ? e2.modelTransformation : o$q));
  const V2 = O2.hasColorTexture && O2.alphaDiscardMode !== C$4.Opaque;
  switch (O2.output) {
    case h$5.Depth:
    case h$5.Shadow:
    case h$5.ShadowHighlight:
    case h$5.ShadowExludeHighlight:
    case h$5.ObjectAndLayerIdColor:
      v$4(w2, O2), b2.include(r$2, O2), b2.include(o$i, O2), b2.include(s$4, O2), b2.include(o$5, O2), b2.include(u$2, O2), b2.include(d$3, O2), i$7(b2), b2.varyings.add("depth", "float"), V2 && C2.uniforms.add(new f$9("tex", (o2) => o2.texture)), w2.code.add(n$9`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${T2 ? "model," : ""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `), b2.include(s$3, O2), C2.code.add(n$9`
          void main(void) {
            discardBySlice(vpos);
            ${V2 ? n$9`
                    vec4 texColor = texture2D(tex, ${O2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            ${O2.output === h$5.ObjectAndLayerIdColor ? n$9`outputObjectAndLayerIdColor();` : n$9`outputDepth(depth);`}
          }
        `);
      break;
    case h$5.Normal:
      v$4(w2, O2), b2.include(r$2, O2), b2.include(o$j, O2), b2.include(n$7, O2), b2.include(o$i, O2), b2.include(s$4, O2), V2 && C2.uniforms.add(new f$9("tex", (o2) => o2.texture)), b2.varyings.add("vPositionView", "vec3"), w2.code.add(n$9`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${O2.normalType === i$a.Attribute ? n$9`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : ""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T2 ? "model," : ""} vpos);
            forwardTextureCoordinates();
          }
        `), b2.include(u$2, O2), b2.include(s$3, O2), C2.code.add(n$9`
          void main() {
            discardBySlice(vpos);
            ${V2 ? n$9`
                    vec4 texColor = texture2D(tex, ${O2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}

            ${O2.normalType === i$a.ScreenDerivative ? n$9`
                vec3 normal = screenDerivativeNormal(vPositionView);` : n$9`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);
      break;
    case h$5.Highlight:
      v$4(w2, O2), b2.include(r$2, O2), b2.include(o$i, O2), b2.include(s$4, O2), V2 && C2.uniforms.add(new f$9("tex", (o2) => o2.texture)), w2.code.add(n$9`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T2 ? "model," : ""} vpos);
            forwardTextureCoordinates();
          }
        `), b2.include(u$2, O2), b2.include(s$3, O2), b2.include(a$3, O2), C2.code.add(n$9`
          void main() {
            discardBySlice(vpos);
            ${V2 ? n$9`
                    vec4 texColor = texture2D(tex, ${O2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            outputHighlight();
          }
        `);
  }
}
function c$2(c2, u2) {
  const l2 = c2.fragment;
  if (u2.hasVertexTangents ? (c2.attributes.add(O$2.TANGENT, "vec4"), c2.varyings.add("vTangent", "vec4"), u2.doubleSidedMode === i$9.WindingOrder ? l2.code.add(n$9`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : l2.code.add(n$9`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : (c2.extensions.add("GL_OES_standard_derivatives"), l2.code.add(n$9`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)), u2.textureCoordinateType !== d$9.None) {
    c2.include(a$7, u2);
    const e2 = u2.supportsTextureAtlas ? u2.hasWebGL2Context ? e$f.None : e$f.Size : e$f.None;
    l2.uniforms.add(u2.pbrTextureBindType === a$a.Pass ? u$9("normalTexture", (e3) => e3.textureNormal, e2) : u$5("normalTexture", (e3) => e3.textureNormal, e2)), l2.code.add(n$9`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${u2.supportsTextureAtlas ? n$9`vtc.size = ${r$4(u2, "normalTexture")};` : ""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `);
  }
}
function a$2(a2) {
  a2.include(a$4), a2.code.add(n$9`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);
}
const f$2 = 4;
function c$1() {
  const c2 = new o$l(), u2 = c2.fragment;
  c2.include(o$m);
  const m2 = (f$2 + 1) / 2, p2 = 1 / (2 * m2 * m2);
  return u2.include(a$2), u2.uniforms.add([new f$9("depthMap", (e2) => e2.depthTexture), new f$7("tex", (e2) => e2.colorTexture), new o$g("blurSize", (e2) => e2.blurSize), new o$2("projScale", (r2, o2) => {
    const t2 = x$8(o2.camera.eye, o2.camera.center);
    return t2 > 5e4 ? Math.max(0, r2.projScale - (t2 - 5e4)) : r2.projScale;
  }), new e$g("nearFar", (e2, r2) => r2.camera.nearFar)]), u2.code.add(n$9`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${n$9.float(p2)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `), u2.code.add(n$9`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${n$9.int(f$2)}; r <= ${n$9.int(f$2)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `), c2;
}
const u$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: c$1 }, Symbol.toStringTag, { value: "Module" }));
class l$1 extends e$a {
  initializeProgram(r2) {
    return new o$9(r2.rctx, l$1.shader.get().build(), E$2);
  }
  initializePipeline() {
    return W$1({ colorWrite: _$8 });
  }
}
l$1.shader = new t$6(u$1, () => import("./SSAOBlur.glsl.js"));
function n$4(r2) {
  r2.fragment.uniforms.add(new e$h("projInfo", (r3, o2) => f$1(o2))), r2.fragment.uniforms.add(new e$g("zScale", (r3, o2) => i$2(o2))), r2.fragment.code.add(n$9`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function f$1(r2) {
  const o2 = r2.camera.projectionMatrix;
  return o2[11] === 0 ? r$d(m$2, 2 / (r2.camera.fullWidth * o2[0]), 2 / (r2.camera.fullHeight * o2[5]), (1 + o2[12]) / o2[0], (1 + o2[13]) / o2[5]) : r$d(m$2, -2 / (r2.camera.fullWidth * o2[0]), -2 / (r2.camera.fullHeight * o2[5]), (1 - o2[8]) / o2[0], (1 - o2[9]) / o2[5]);
}
const m$2 = n$i();
function i$2(o2) {
  return o2.camera.projectionMatrix[11] === 0 ? r$8(d$1, 0, 1) : r$8(d$1, 1, 0);
}
const d$1 = n$c();
const m$1 = 16, p$1 = 0.5;
function d() {
  const o2 = new o$l(), d2 = o2.fragment;
  return o2.include(o$m), d2.include(a$2), o2.include(n$4), d2.uniforms.add(new o$2("radius", (e2, r2) => v$2(r2))), d2.code.add(n$9`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`), d2.code.add(n$9`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`), d2.uniforms.add([new e$g("nearFar", (e2, r2) => r2.camera.nearFar), new f$9("normalMap", (e2) => e2.normalTexture), new f$9("depthMap", (e2) => e2.depthTexture), new e$g("zScale", (e2, r2) => i$2(r2)), new o$2("projScale", (e2) => e2.projScale), new f$9("rnm", (e2) => e2.noiseTexture), new e$g("rnmScale", (o3, t2) => r$8(h$2, t2.camera.fullWidth / e$r(o3.noiseTexture).descriptor.width, t2.camera.fullHeight / e$r(o3.noiseTexture).descriptor.height)), new o$2("intensity", (e2, r2) => 4 * p$1 / v$2(r2) ** 6), new e$g("screenSize", (e2, o3) => r$8(h$2, o3.camera.fullWidth, o3.camera.fullHeight))]), d2.code.add(n$9`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${n$9.int(m$1)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${n$9.int(m$1)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `), o2;
}
function v$2(e2) {
  return Math.max(10, 20 * e2.camera.computeRenderPixelSizeAtDist(Math.abs(4 * e2.camera.relativeElevation)));
}
const h$2 = n$c(), x$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: d }, Symbol.toStringTag, { value: "Module" }));
class l extends e$a {
  initializeProgram(e2) {
    return new o$9(e2.rctx, l.shader.get().build(), E$2);
  }
  initializePipeline() {
    return W$1({ colorWrite: _$8 });
  }
}
l.shader = new t$6(x$1, () => import("./SSAO.glsl.js"));
const w$1 = 2;
function n$3(n2, a2) {
  const i2 = n2.fragment;
  a2.receiveAmbientOcclusion ? (i2.uniforms.add(u$9("ssaoTex", (e2, r2) => r2.ssaoHelper.colorTexture, a2.hasWebGL2Context ? e$f.None : e$f.InvSize)), i2.constants.add("blurSizePixelsInverse", "float", 1 / w$1), i2.code.add(n$9`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${r$4(a2, "ssaoTex", true)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)) : i2.code.add(n$9`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);
}
function m(n2, g2) {
  const m2 = n2.fragment, o2 = g2.lightingSphericalHarmonicsOrder !== void 0 ? g2.lightingSphericalHarmonicsOrder : 2;
  o2 === 0 ? (m2.uniforms.add(new e$d("lightingAmbientSH0", (n3, t2) => o$n(a$1, t2.lighting.sh.r[0], t2.lighting.sh.g[0], t2.lighting.sh.b[0]))), m2.code.add(n$9`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : o2 === 1 ? (m2.uniforms.add([new e$h("lightingAmbientSH_R", (i2, n3) => r$d(r$1, n3.lighting.sh.r[0], n3.lighting.sh.r[1], n3.lighting.sh.r[2], n3.lighting.sh.r[3])), new e$h("lightingAmbientSH_G", (i2, n3) => r$d(r$1, n3.lighting.sh.g[0], n3.lighting.sh.g[1], n3.lighting.sh.g[2], n3.lighting.sh.g[3])), new e$h("lightingAmbientSH_B", (i2, n3) => r$d(r$1, n3.lighting.sh.b[0], n3.lighting.sh.b[1], n3.lighting.sh.b[2], n3.lighting.sh.b[3]))]), m2.code.add(n$9`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)) : o2 === 2 && (m2.uniforms.add([new e$d("lightingAmbientSH0", (n3, t2) => o$n(a$1, t2.lighting.sh.r[0], t2.lighting.sh.g[0], t2.lighting.sh.b[0])), new e$h("lightingAmbientSH_R1", (i2, n3) => r$d(r$1, n3.lighting.sh.r[1], n3.lighting.sh.r[2], n3.lighting.sh.r[3], n3.lighting.sh.r[4])), new e$h("lightingAmbientSH_G1", (i2, n3) => r$d(r$1, n3.lighting.sh.g[1], n3.lighting.sh.g[2], n3.lighting.sh.g[3], n3.lighting.sh.g[4])), new e$h("lightingAmbientSH_B1", (i2, n3) => r$d(r$1, n3.lighting.sh.b[1], n3.lighting.sh.b[2], n3.lighting.sh.b[3], n3.lighting.sh.b[4])), new e$h("lightingAmbientSH_R2", (i2, n3) => r$d(r$1, n3.lighting.sh.r[5], n3.lighting.sh.r[6], n3.lighting.sh.r[7], n3.lighting.sh.r[8])), new e$h("lightingAmbientSH_G2", (i2, n3) => r$d(r$1, n3.lighting.sh.g[5], n3.lighting.sh.g[6], n3.lighting.sh.g[7], n3.lighting.sh.g[8])), new e$h("lightingAmbientSH_B2", (i2, n3) => r$d(r$1, n3.lighting.sh.b[5], n3.lighting.sh.b[6], n3.lighting.sh.b[7], n3.lighting.sh.b[8]))]), m2.code.add(n$9`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`), g2.pbrMode !== d$8.Normal && g2.pbrMode !== d$8.Schematic || m2.code.add(n$9`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
const a$1 = n$a(), r$1 = n$i();
function o$1(n2) {
  n2.uniforms.add(new e$d("mainLightDirection", (i2, n3) => n3.lighting.mainLight.direction));
}
function a(n2) {
  n2.uniforms.add(new e$d("mainLightIntensity", (i2, n3) => n3.lighting.mainLight.intensity));
}
function e$2(i2, t2) {
  t2.useLegacyTerrainShading ? i2.uniforms.add(new o$2("lightingFixedFactor", (i3, n2) => n2.lighting.noonFactor * (1 - n2.lighting.globalFactor))) : i2.constants.add("lightingFixedFactor", "float", 0);
}
function r(i2, n2) {
  const r2 = i2.fragment;
  o$1(r2), a(r2), e$2(r2, n2), r2.code.add(n$9`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);
}
function t$3(t2) {
  const a2 = t2.fragment.code;
  a2.add(n$9`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`), a2.add(n$9`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`), a2.add(n$9`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);
}
function t$2(t2) {
  t2.vertex.code.add(n$9`const float PI = 3.141592653589793;`), t2.fragment.code.add(n$9`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
}
function n$2(n2, r2) {
  const l2 = n2.fragment.code;
  n2.include(t$2), r2.pbrMode === d$8.Water || r2.pbrMode === d$8.WaterOnIntegratedMesh ? (l2.add(n$9`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${r2.useCustomDTRExponentForWater ? "2.2" : "2.0"};
    `), l2.add(n$9`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`), l2.add(n$9`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`), l2.add(n$9`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`), l2.add(n$9`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)) : r2.pbrMode !== d$8.Normal && r2.pbrMode !== d$8.Schematic || (n2.include(t$3), l2.add(n$9`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`), l2.add(n$9`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`), l2.add(n$9`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`), l2.add(n$9`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`), l2.add(n$9`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`), l2.add(n$9`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));
}
class s$2 extends i$g {
  constructor(o2, s2) {
    super(o2, "bool", a$a.Pass, (r2, e2, t2) => r2.setUniform1b(o2, s2(e2, t2)));
  }
}
const _$1 = 0.4;
function h$1(i2) {
  i2.constants.add("ambientBoostFactor", "float", _$1);
}
function u(i2) {
  i2.uniforms.add(new o$2("lightingGlobalFactor", (i3, n2) => n2.lighting.globalFactor));
}
function p(g2, p2) {
  const v2 = g2.fragment;
  switch (g2.include(n$3, p2), p2.pbrMode !== d$8.Disabled && g2.include(n$2, p2), g2.include(m, p2), g2.include(t$2), v2.code.add(n$9`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p2.pbrMode === d$8.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), h$1(v2), u(v2), o$1(v2), v2.code.add(n$9`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p2.spherical ? n$9`normalize(vPosWorld)` : n$9`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), a(v2), v2.code.add(n$9`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`), p2.pbrMode) {
    case d$8.Disabled:
    case d$8.WaterOnIntegratedMesh:
    case d$8.Water:
      g2.include(r, p2), v2.code.add(n$9`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);
      break;
    case d$8.Normal:
    case d$8.Schematic:
      v2.code.add(n$9`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), v2.code.add(n$9`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), p2.useFillLights ? v2.uniforms.add(new s$2("hasFillLights", (i2, n2) => n2.enableFillLights)) : v2.constants.add("hasFillLights", "bool", false), v2.code.add(n$9`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), v2.uniforms.add([new o$2("lightingSpecularStrength", (i2, n2) => n2.lighting.mainLight.specularStrength), new o$2("lightingEnvironmentStrength", (i2, n2) => n2.lighting.mainLight.environmentStrength)]), v2.code.add(n$9`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), v2.code.add(n$9`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p2.pbrMode === d$8.Schematic ? n$9`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));` : n$9`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);
      break;
    default:
      n$f(p2.pbrMode);
    case d$8.COUNT:
  }
}
function n$1(n2, o2) {
  o2.hasMultipassTerrain && (n2.fragment.include(a$2), n2.fragment.uniforms.add(new f$9("terrainDepthTexture", (e2, r2) => r2.multipassTerrain.linearDepthTexture)), n2.fragment.uniforms.add(new e$g("nearFar", (e2, r2) => r2.camera.nearFar)), n2.fragment.uniforms.add(new e$g("inverseViewport", (e2, r2) => r2.inverseViewport)), n2.fragment.code.add(n$9`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o2.cullAboveGround ? ">" : "<="} terrainDepth){
        discard;
      }
    }
  `));
}
class o extends i$g {
  constructor(r2, o2, s2) {
    super(r2, "mat4", a$a.Draw, (e2, s3, t2) => e2.setUniformMatrix4fv(r2, o2(s3, t2)), s2);
  }
}
class e$1 extends i$g {
  constructor(r2, e2, o2) {
    super(r2, "mat4", a$a.Pass, (s2, o3, t2) => s2.setUniformMatrix4fv(r2, e2(o3, t2)), o2);
  }
}
function h(e2, a2) {
  a2.receiveShadows && (e2.fragment.uniforms.add(new e$1("shadowMapMatrix", (e3, a3) => a3.shadowMap.getShadowMapMatrices(e3.origin), 4)), f(e2, a2));
}
function v$1(e2, a2) {
  a2.receiveShadows && (e2.fragment.uniforms.add(new o("shadowMapMatrix", (e3, a3) => a3.shadowMap.getShadowMapMatrices(e3.origin), 4)), f(e2, a2));
}
function f(e2, i2) {
  const d2 = e2.fragment;
  d2.include(a$4), d2.uniforms.add([...u$9("shadowMapTex", (e3, a2) => a2.shadowMap.depthTexture, i2.hasWebGL2Context ? e$f.None : e$f.Size), new e$5("numCascades", (e3, a2) => a2.shadowMap.numCascades), new e$h("cascadeDistances", (e3, a2) => a2.shadowMap.cascadeDistances)]), d2.code.add(n$9`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${r$4(i2, "shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `);
}
function s$1(s2) {
  s2.vertex.uniforms.add(new e$c("colorTextureTransformMatrix", (o2) => r$6(o2.colorTextureTransformMatrix) ? o2.colorTextureTransformMatrix : e$j())), s2.varyings.add("colorUV", "vec2"), s2.vertex.code.add(n$9`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function i$1(s2) {
  s2.vertex.uniforms.add(new e$c("normalTextureTransformMatrix", (o2) => r$6(o2.normalTextureTransformMatrix) ? o2.normalTextureTransformMatrix : e$j())), s2.varyings.add("normalUV", "vec2"), s2.vertex.code.add(n$9`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function t$1(s2) {
  s2.vertex.uniforms.add(new e$c("emissiveTextureTransformMatrix", (o2) => r$6(o2.emissiveTextureTransformMatrix) ? o2.emissiveTextureTransformMatrix : e$j())), s2.varyings.add("emissiveUV", "vec2"), s2.vertex.code.add(n$9`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function n(s2) {
  s2.vertex.uniforms.add(new e$c("occlusionTextureTransformMatrix", (o2) => r$6(o2.occlusionTextureTransformMatrix) ? o2.occlusionTextureTransformMatrix : e$j())), s2.varyings.add("occlusionUV", "vec2"), s2.vertex.code.add(n$9`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function x(s2) {
  s2.vertex.uniforms.add(new e$c("metallicRoughnessTextureTransformMatrix", (o2) => r$6(o2.metallicRoughnessTextureTransformMatrix) ? o2.metallicRoughnessTextureTransformMatrix : e$j())), s2.varyings.add("metallicRoughnessUV", "vec2"), s2.vertex.code.add(n$9`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function e(e2) {
  e2.code.add(n$9`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);
}
function i(i2) {
  i2.include(e), i2.code.add(n$9`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n$9.int(r$c.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n$9.int(r$c.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$9.int(r$c.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n$9.int(r$c.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$9.int(r$c.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}
function Q(Q2) {
  const X2 = new o$l(), { vertex: Y2, fragment: Z2, varyings: ee2 } = X2;
  return v$4(Y2, Q2), X2.include(o$c), ee2.add("vpos", "vec3"), X2.include(s$4, Q2), X2.include(p$2, Q2), X2.include(a$5, Q2), Q2.hasColorTextureTransform && X2.include(s$1), Q2.output !== h$5.Color && Q2.output !== h$5.Alpha || (Q2.hasNormalTextureTransform && X2.include(i$1), Q2.hasEmissionTextureTransform && X2.include(t$1), Q2.hasOcclusionTextureTransform && X2.include(n), Q2.hasMetallicRoughnessTextureTransform && X2.include(x), c$4(Y2, Q2), X2.include(o$j, Q2), X2.include(r$2, Q2), Q2.normalType === i$a.Attribute && Q2.offsetBackfaces && X2.include(e$8), X2.include(c$2, Q2), X2.include(n$7, Q2), Q2.instancedColor && X2.attributes.add(O$2.INSTANCECOLOR, "vec4"), ee2.add("localvpos", "vec3"), X2.include(o$i, Q2), X2.include(d$5, Q2), X2.include(i$6, Q2), X2.include(e$4, Q2), Y2.uniforms.add(new e$h("externalColor", (e2) => e2.externalColor)), ee2.add("vcolorExt", "vec4"), Q2.hasMultipassTerrain && ee2.add("depth", "float"), Q2.hasModelTransformation && Y2.uniforms.add(new e$b("model", (o2) => r$6(o2.modelTransformation) ? o2.modelTransformation : o$q)), Y2.code.add(n$9`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${Q2.instancedColor ? "vcolorExt *= instanceColor;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n$9.float(t$7)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${Q2.normalType === i$a.Attribute ? n$9`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${Q2.hasVertexTangents ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, ${Q2.hasModelTransformation ? "model," : ""} vpos);
          ${Q2.normalType === i$a.Attribute && Q2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
        }

        ${Q2.hasMultipassTerrain ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${Q2.hasColorTextureTransform ? n$9`forwardColorUV();` : ""}
        ${Q2.hasNormalTextureTransform ? n$9`forwardNormalUV();` : ""}
        ${Q2.hasEmissionTextureTransform ? n$9`forwardEmissiveUV();` : ""}
        ${Q2.hasOcclusionTextureTransform ? n$9`forwardOcclusionUV();` : ""}
        ${Q2.hasMetallicRoughnessTextureTransform ? n$9`forwardMetallicRoughnessUV();` : ""}
      }
    `)), Q2.output === h$5.Alpha && (X2.include(u$2, Q2), X2.include(s$3, Q2), X2.include(n$1, Q2), Z2.uniforms.add([new o$2("opacity", (e2) => e2.opacity), new o$2("layerOpacity", (e2) => e2.layerOpacity)]), Q2.hasColorTexture && Z2.uniforms.add(new f$9("tex", (e2) => e2.texture)), Z2.include(i), Z2.code.add(n$9`
      void main() {
        discardBySlice(vpos);
        ${Q2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${Q2.hasColorTexture ? n$9`
                vec4 texColor = texture2D(tex, ${Q2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                ${Q2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$9`vec4 texColor = vec4(1.0);`}
        ${Q2.hasVertexColors ? n$9`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$9`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)), Q2.output === h$5.Color && (X2.include(u$2, Q2), X2.include(p, Q2), X2.include(n$3, Q2), X2.include(s$3, Q2), X2.include(Q2.instancedDoublePrecision ? h : v$1, Q2), X2.include(n$1, Q2), c$4(Z2, Q2), Z2.uniforms.add([Y2.uniforms.get("localOrigin"), new e$d("ambient", (e2) => e2.ambient), new e$d("diffuse", (e2) => e2.diffuse), new o$2("opacity", (e2) => e2.opacity), new o$2("layerOpacity", (e2) => e2.layerOpacity)]), Q2.hasColorTexture && Z2.uniforms.add(new f$9("tex", (e2) => e2.texture)), X2.include(x$5, Q2), X2.include(n$2, Q2), Z2.include(i), X2.include(e$e, Q2), h$1(Z2), u(Z2), a(Z2), Z2.code.add(n$9`
      void main() {
        discardBySlice(vpos);
        ${Q2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${Q2.hasColorTexture ? n$9`
                vec4 texColor = texture2D(tex, ${Q2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                ${Q2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$9`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${Q2.normalType === i$a.ScreenDerivative ? n$9`
                vec3 normal = screenDerivativeNormal(localvpos);` : n$9`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${Q2.pbrMode === d$8.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${Q2.receiveShadows ? "readShadowMap(vpos, linearDepth)" : Q2.spherical ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${Q2.hasVertexColors ? n$9`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$9`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Q2.hasNormalTexture ? n$9`
                mat3 tangentSpace = ${Q2.hasVertexTangents ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);` : n$9`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${Q2.spherical ? n$9`normalize(posWorld);` : n$9`vec3(0.0, 0.0, 1.0);`}

        ${Q2.snowCover ? n$9`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);` : ""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${Q2.pbrMode === d$8.Normal || Q2.pbrMode === d$8.Schematic ? n$9`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Q2.snowCover ? n$9`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n$9`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Q2.transparencyPassType === o$r.Color ? n$9`gl_FragColor = premultiplyAlpha(gl_FragColor);` : ""}
      }
    `)), X2.include(b$1, Q2), X2;
}
const X = Object.freeze(Object.defineProperty({ __proto__: null, build: Q }, Symbol.toStringTag, { value: "Module" }));
class k$2 extends f$6 {
  constructor() {
    super(...arguments), this.isSchematic = false, this.usePBR = false, this.mrrFactors = r$7(0, 1, 0.5), this.hasVertexColors = false, this.hasSymbolColors = false, this.doubleSided = false, this.doubleSidedType = "normal", this.cullFace = n$j.Back, this.emissiveFactor = r$7(0, 0, 0), this.instancedDoublePrecision = false, this.normals = "default", this.receiveSSAO = true, this.receiveShadows = true, this.castShadows = true, this.shadowMappingEnabled = false, this.ambient = r$7(0.2, 0.2, 0.2), this.diffuse = r$7(0.8, 0.8, 0.8), this.externalColor = r$9(1, 1, 1, 1), this.colorMixMode = "multiply", this.opacity = 1, this.layerOpacity = 1, this.origin = n$a(), this.hasSlicePlane = false, this.hasSliceHighlight = true, this.offsetTransparentBackfaces = false, this.vvSizeEnabled = false, this.vvSizeMinSize = [1, 1, 1], this.vvSizeMaxSize = [100, 100, 100], this.vvSizeOffset = [0, 0, 0], this.vvSizeFactor = [1, 1, 1], this.vvSizeValue = [1, 1, 1], this.vvColorEnabled = false, this.vvColorValues = [0, 0, 0, 0, 0, 0, 0, 0], this.vvColorColors = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], this.vvSymbolAnchor = [0, 0, 0], this.vvSymbolRotationMatrix = e$p(), this.vvOpacityEnabled = false, this.vvOpacityValues = [], this.vvOpacityOpacities = [], this.transparent = false, this.writeDepth = true, this.customDepthTest = e$u.Less, this.textureAlphaMode = C$4.Blend, this.textureAlphaCutoff = o$a, this.textureAlphaPremultiplied = false, this.hasOccludees = false, this.renderOccluded = o$d.Occlude;
  }
}
class _ extends e$a {
  initializeConfiguration(e2, t2) {
    t2.hasWebGL2Context = e2.rctx.type === r$e.WEBGL2, t2.spherical = e2.viewingMode === l$b.Global, t2.doublePrecisionRequiresObfuscation = i$8(e2.rctx), t2.textureCoordinateType = t2.hasColorTexture || t2.hasMetallicRoughnessTexture || t2.hasEmissionTexture || t2.hasOcclusionTexture || t2.hasNormalTexture ? d$9.Default : d$9.None, t2.objectAndLayerIdColorInstanced = t2.instanced;
  }
  initializeProgram(e2) {
    return this._initializeProgram(e2, _.shader);
  }
  _initializeProgram(e2, t2) {
    return new o$9(e2.rctx, t2.get().build(this.configuration), E$2);
  }
  _convertDepthTestFunction(e2) {
    return e2 === e$u.Lequal ? I$5.LEQUAL : I$5.LESS;
  }
  _makePipeline(e2, t2) {
    const i2 = this.configuration, s2 = e2 === o$r.NONE, r2 = e2 === o$r.FrontFace;
    return W$1({ blending: i2.output !== h$5.Color && i2.output !== h$5.Alpha || !i2.transparent ? null : s2 ? c$l : A$6(e2), culling: V$1(i2) && h$b(i2.cullFace), depthTest: { func: l$c(e2, this._convertDepthTestFunction(i2.customDepthTest)) }, depthWrite: s2 || r2 ? i2.writeDepth && a$l : null, colorWrite: _$8, stencilWrite: i2.hasOccludees ? e$9 : null, stencilTest: i2.hasOccludees ? t2 ? o$8 : f$5 : null, polygonOffset: s2 || r2 ? null : a$m(i2.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._makePipeline(this.configuration.transparencyPassType, true), this._makePipeline(this.configuration.transparencyPassType, false);
  }
  getPipelineState(e2, t2) {
    return t2 ? this._occludeePipelineState : super.getPipelineState(e2, t2);
  }
}
function V$1(e2) {
  return e2.cullFace !== n$j.None || !e2.hasSlicePlane && (!e2.transparent && !e2.doubleSidedMode);
}
_.shader = new t$6(X, () => import("./DefaultMaterial.glsl.js"));
class s extends t$4 {
  constructor() {
    super(...arguments), this.hasWebGL2Context = false;
  }
}
e$t([e$7({ constValue: true })], s.prototype, "hasSliceHighlight", void 0), e$t([e$7({ constValue: false })], s.prototype, "hasSliceInVertexProgram", void 0), e$t([e$7({ constValue: false })], s.prototype, "instancedDoublePrecision", void 0), e$t([e$7({ constValue: false })], s.prototype, "useLegacyTerrainShading", void 0), e$t([e$7({ constValue: false })], s.prototype, "hasModelTransformation", void 0), e$t([e$7({ constValue: a$a.Pass })], s.prototype, "pbrTextureBindType", void 0), e$t([e$7()], s.prototype, "hasWebGL2Context", void 0);
class c extends s {
  constructor() {
    super(...arguments), this.output = h$5.Color, this.alphaDiscardMode = C$4.Opaque, this.doubleSidedMode = i$9.None, this.pbrMode = d$8.Disabled, this.cullFace = n$j.None, this.transparencyPassType = o$r.NONE, this.normalType = i$a.Attribute, this.textureCoordinateType = d$9.None, this.customDepthTest = e$u.Less, this.spherical = false, this.hasVertexColors = false, this.hasSymbolColors = false, this.hasVerticalOffset = false, this.hasSlicePlane = false, this.hasSliceHighlight = true, this.hasColorTexture = false, this.hasMetallicRoughnessTexture = false, this.hasEmissionTexture = false, this.hasOcclusionTexture = false, this.hasNormalTexture = false, this.hasScreenSizePerspective = false, this.hasVertexTangents = false, this.hasOccludees = false, this.hasMultipassTerrain = false, this.hasModelTransformation = false, this.offsetBackfaces = false, this.vvSize = false, this.vvColor = false, this.receiveShadows = false, this.receiveAmbientOcclusion = false, this.textureAlphaPremultiplied = false, this.instanced = false, this.instancedColor = false, this.objectAndLayerIdColorInstanced = false, this.instancedDoublePrecision = false, this.doublePrecisionRequiresObfuscation = false, this.writeDepth = true, this.transparent = false, this.enableOffset = true, this.cullAboveGround = false, this.snowCover = false, this.hasColorTextureTransform = false, this.hasEmissionTextureTransform = false, this.hasNormalTextureTransform = false, this.hasOcclusionTextureTransform = false, this.hasMetallicRoughnessTextureTransform = false;
  }
}
e$t([e$7({ count: h$5.COUNT })], c.prototype, "output", void 0), e$t([e$7({ count: C$4.COUNT })], c.prototype, "alphaDiscardMode", void 0), e$t([e$7({ count: i$9.COUNT })], c.prototype, "doubleSidedMode", void 0), e$t([e$7({ count: d$8.COUNT })], c.prototype, "pbrMode", void 0), e$t([e$7({ count: n$j.COUNT })], c.prototype, "cullFace", void 0), e$t([e$7({ count: o$r.COUNT })], c.prototype, "transparencyPassType", void 0), e$t([e$7({ count: i$a.COUNT })], c.prototype, "normalType", void 0), e$t([e$7({ count: d$9.COUNT })], c.prototype, "textureCoordinateType", void 0), e$t([e$7({ count: e$u.COUNT })], c.prototype, "customDepthTest", void 0), e$t([e$7()], c.prototype, "spherical", void 0), e$t([e$7()], c.prototype, "hasVertexColors", void 0), e$t([e$7()], c.prototype, "hasSymbolColors", void 0), e$t([e$7()], c.prototype, "hasVerticalOffset", void 0), e$t([e$7()], c.prototype, "hasSlicePlane", void 0), e$t([e$7()], c.prototype, "hasSliceHighlight", void 0), e$t([e$7()], c.prototype, "hasColorTexture", void 0), e$t([e$7()], c.prototype, "hasMetallicRoughnessTexture", void 0), e$t([e$7()], c.prototype, "hasEmissionTexture", void 0), e$t([e$7()], c.prototype, "hasOcclusionTexture", void 0), e$t([e$7()], c.prototype, "hasNormalTexture", void 0), e$t([e$7()], c.prototype, "hasScreenSizePerspective", void 0), e$t([e$7()], c.prototype, "hasVertexTangents", void 0), e$t([e$7()], c.prototype, "hasOccludees", void 0), e$t([e$7()], c.prototype, "hasMultipassTerrain", void 0), e$t([e$7()], c.prototype, "hasModelTransformation", void 0), e$t([e$7()], c.prototype, "offsetBackfaces", void 0), e$t([e$7()], c.prototype, "vvSize", void 0), e$t([e$7()], c.prototype, "vvColor", void 0), e$t([e$7()], c.prototype, "receiveShadows", void 0), e$t([e$7()], c.prototype, "receiveAmbientOcclusion", void 0), e$t([e$7()], c.prototype, "textureAlphaPremultiplied", void 0), e$t([e$7()], c.prototype, "instanced", void 0), e$t([e$7()], c.prototype, "instancedColor", void 0), e$t([e$7()], c.prototype, "objectAndLayerIdColorInstanced", void 0), e$t([e$7()], c.prototype, "instancedDoublePrecision", void 0), e$t([e$7()], c.prototype, "doublePrecisionRequiresObfuscation", void 0), e$t([e$7()], c.prototype, "writeDepth", void 0), e$t([e$7()], c.prototype, "transparent", void 0), e$t([e$7()], c.prototype, "enableOffset", void 0), e$t([e$7()], c.prototype, "cullAboveGround", void 0), e$t([e$7()], c.prototype, "snowCover", void 0), e$t([e$7()], c.prototype, "hasColorTextureTransform", void 0), e$t([e$7()], c.prototype, "hasEmissionTextureTransform", void 0), e$t([e$7()], c.prototype, "hasNormalTextureTransform", void 0), e$t([e$7()], c.prototype, "hasOcclusionTextureTransform", void 0), e$t([e$7()], c.prototype, "hasMetallicRoughnessTextureTransform", void 0), e$t([e$7({ constValue: true })], c.prototype, "hasVvInstancing", void 0), e$t([e$7({ constValue: false })], c.prototype, "useCustomDTRExponentForWater", void 0), e$t([e$7({ constValue: false })], c.prototype, "supportsTextureAtlas", void 0), e$t([e$7({ constValue: true })], c.prototype, "useFillLights", void 0);
function I$1(I2) {
  const R2 = new o$l(), { vertex: z2, fragment: k2, varyings: G2 } = R2;
  return v$4(z2, I2), R2.include(o$c), G2.add("vpos", "vec3"), R2.include(s$4, I2), R2.include(p$2, I2), R2.include(a$5, I2), I2.output !== h$5.Color && I2.output !== h$5.Alpha || (c$4(R2.vertex, I2), R2.include(o$j, I2), R2.include(r$2, I2), I2.offsetBackfaces && R2.include(e$8), I2.instancedColor && R2.attributes.add(O$2.INSTANCECOLOR, "vec4"), G2.add("vNormalWorld", "vec3"), G2.add("localvpos", "vec3"), I2.hasMultipassTerrain && G2.add("depth", "float"), R2.include(o$i, I2), R2.include(d$5, I2), R2.include(i$6, I2), R2.include(e$4, I2), z2.uniforms.add(new e$h("externalColor", (e2) => e2.externalColor)), G2.add("vcolorExt", "vec4"), z2.code.add(n$9`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I2.instancedColor ? "vcolorExt *= instanceColor;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n$9.float(t$7)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
          }
          ${I2.hasMultipassTerrain ? n$9`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), I2.output === h$5.Alpha && (R2.include(u$2, I2), R2.include(s$3, I2), R2.include(n$1, I2), k2.uniforms.add([new o$2("opacity", (e2) => e2.opacity), new o$2("layerOpacity", (e2) => e2.layerOpacity)]), I2.hasColorTexture && k2.uniforms.add(new f$9("tex", (e2) => e2.texture)), k2.include(i), k2.code.add(n$9`
      void main() {
        discardBySlice(vpos);
        ${I2.hasMultipassTerrain ? n$9`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${I2.hasColorTexture ? n$9`
                vec4 texColor = texture2D(tex, ${I2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                ${I2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$9`vec4 texColor = vec4(1.0);`}
        ${I2.hasVertexColors ? n$9`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$9`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)), I2.output === h$5.Color && (R2.include(u$2, I2), R2.include(p, I2), R2.include(n$3, I2), R2.include(s$3, I2), R2.include(I2.instancedDoublePrecision ? h : v$1, I2), R2.include(n$1, I2), c$4(R2.fragment, I2), o$1(k2), h$1(k2), u(k2), k2.uniforms.add([z2.uniforms.get("localOrigin"), z2.uniforms.get("view"), new e$d("ambient", (e2) => e2.ambient), new e$d("diffuse", (e2) => e2.diffuse), new o$2("opacity", (e2) => e2.opacity), new o$2("layerOpacity", (e2) => e2.layerOpacity)]), I2.hasColorTexture && k2.uniforms.add(new f$9("tex", (e2) => e2.texture)), R2.include(x$5, I2), R2.include(n$2, I2), k2.include(i), R2.extensions.add("GL_OES_standard_derivatives"), a(k2), k2.code.add(n$9`
      void main() {
        discardBySlice(vpos);
        ${I2.hasMultipassTerrain ? n$9`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${I2.hasColorTexture ? n$9`
                vec4 texColor = texture2D(tex, ${I2.hasColorTextureTransform ? n$9`colorUV` : n$9`vuv0`});
                ${I2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$9`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I2.pbrMode === d$8.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I2.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : I2.spherical ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I2.hasVertexColors ? n$9`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$9`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I2.snowCover ? n$9`albedo = mix(albedo, vec3(1), 0.9);` : n$9``}
        ${n$9`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I2.pbrMode === d$8.Normal || I2.pbrMode === d$8.Schematic ? I2.spherical ? n$9`vec3 normalGround = normalize(vpos + localOrigin);` : n$9`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : n$9``}
        ${I2.pbrMode === d$8.Normal || I2.pbrMode === d$8.Schematic ? n$9`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I2.snowCover ? n$9`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n$9`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I2.transparencyPassType === o$r.Color ? n$9`gl_FragColor = premultiplyAlpha(gl_FragColor);` : n$9``}
      }
    `)), R2.include(b$1, I2), R2;
}
const R$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: I$1 }, Symbol.toStringTag, { value: "Module" }));
class t extends _ {
  initializeConfiguration(i2, a2) {
    super.initializeConfiguration(i2, a2), a2.hasMetallicRoughnessTexture = false, a2.hasEmissionTexture = false, a2.hasOcclusionTexture = false, a2.hasNormalTexture = false, a2.hasModelTransformation = false, a2.normalType = i$a.Attribute, a2.doubleSidedMode = i$9.WindingOrder, a2.hasVertexTangents = false;
  }
  initializeProgram(e2) {
    return this._initializeProgram(e2, t.shader);
  }
}
t.shader = new t$6(R$1, () => import("./RealisticTree.glsl.js"));
class C extends d$7 {
  constructor(e2) {
    super(e2, P$1), this.supportsEdges = true, this._configuration = new c(), this._vertexBufferLayout = j$1(this.parameters), this._instanceBufferLayout = e2.instanced ? B(this.parameters) : null;
  }
  isVisibleForOutput(e2) {
    return e2 !== h$5.Shadow && e2 !== h$5.ShadowExludeHighlight && e2 !== h$5.ShadowHighlight || this.parameters.castShadows;
  }
  isVisible() {
    const t2 = this.parameters;
    if (!super.isVisible() || t2.layerOpacity === 0)
      return false;
    const { instanced: r2, hasVertexColors: a2, hasSymbolColors: s2, vvColorEnabled: i2 } = t2, o2 = r$6(r2) && r2.includes("color"), n2 = t2.colorMixMode === "replace", h2 = t2.opacity > 0, c2 = t2.externalColor && t2.externalColor[3] > 0;
    return a2 && (o2 || i2 || s2) ? !!n2 || h2 : a2 ? n2 ? c2 : h2 : o2 || i2 || s2 ? !!n2 || h2 : n2 ? c2 : h2;
  }
  getConfiguration(t2, r2) {
    return this._configuration.output = t2, this._configuration.hasNormalTexture = !!this.parameters.normalTextureId, this._configuration.hasColorTexture = !!this.parameters.textureId, this._configuration.hasVertexTangents = this.parameters.hasVertexTangents, this._configuration.instanced = !!this.parameters.instanced, this._configuration.instancedDoublePrecision = this.parameters.instancedDoublePrecision, this._configuration.vvSize = this.parameters.vvSizeEnabled, this._configuration.hasVerticalOffset = r$6(this.parameters.verticalOffset), this._configuration.hasScreenSizePerspective = r$6(this.parameters.screenSizePerspective), this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasSliceHighlight = this.parameters.hasSliceHighlight, this._configuration.alphaDiscardMode = this.parameters.textureAlphaMode, this._configuration.normalType = this.parameters.normals === "screenDerivative" ? i$a.ScreenDerivative : i$a.Attribute, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, r$6(this.parameters.customDepthTest) && (this._configuration.customDepthTest = this.parameters.customDepthTest), this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.cullFace = this.parameters.hasSlicePlane ? n$j.None : this.parameters.cullFace, this._configuration.hasMultipassTerrain = r2.multipassTerrain.enabled, this._configuration.cullAboveGround = r2.multipassTerrain.cullAboveGround, this._configuration.hasModelTransformation = r$6(this.parameters.modelTransformation), t2 !== h$5.Color && t2 !== h$5.Alpha || (this._configuration.hasVertexColors = this.parameters.hasVertexColors, this._configuration.hasSymbolColors = this.parameters.hasSymbolColors, this.parameters.treeRendering ? this._configuration.doubleSidedMode = i$9.WindingOrder : this._configuration.doubleSidedMode = this.parameters.doubleSided && this.parameters.doubleSidedType === "normal" ? i$9.View : this.parameters.doubleSided && this.parameters.doubleSidedType === "winding-order" ? i$9.WindingOrder : i$9.None, this._configuration.instancedColor = r$6(this.parameters.instanced) && this.parameters.instanced.includes("color"), this._configuration.receiveShadows = this.parameters.receiveShadows && this.parameters.shadowMappingEnabled, this._configuration.receiveAmbientOcclusion = !!r2.ssaoHelper.ready && this.parameters.receiveSSAO, this._configuration.vvColor = this.parameters.vvColorEnabled, this._configuration.textureAlphaPremultiplied = !!this.parameters.textureAlphaPremultiplied, this._configuration.pbrMode = this.parameters.usePBR ? this.parameters.isSchematic ? d$8.Schematic : d$8.Normal : d$8.Disabled, this._configuration.hasMetallicRoughnessTexture = !!this.parameters.metallicRoughnessTextureId, this._configuration.hasEmissionTexture = !!this.parameters.emissiveTextureId, this._configuration.hasOcclusionTexture = !!this.parameters.occlusionTextureId, this._configuration.offsetBackfaces = !(!this.parameters.transparent || !this.parameters.offsetTransparentBackfaces), this._configuration.transparencyPassType = r2.transparencyPassType, this._configuration.enableOffset = r2.camera.relativeElevation < S$6, this._configuration.snowCover = this.hasSnowCover(r2), this._configuration.hasColorTextureTransform = !!this.parameters.colorTextureTransformMatrix, this._configuration.hasNormalTextureTransform = !!this.parameters.normalTextureTransformMatrix, this._configuration.hasEmissionTextureTransform = !!this.parameters.emissiveTextureTransformMatrix, this._configuration.hasOcclusionTextureTransform = !!this.parameters.occlusionTextureTransformMatrix, this._configuration.hasMetallicRoughnessTextureTransform = !!this.parameters.metallicRoughnessTextureTransformMatrix), this._configuration;
  }
  hasSnowCover(t2) {
    return r$6(t2.weather) && t2.weatherVisible && t2.weather.type === "snowy" && t2.weather.snowCover === "enabled";
  }
  intersect(c2, u2, m2, p2, d2, f2, g2) {
    if (r$6(this.parameters.verticalOffset)) {
      const e2 = p2.camera;
      o$n(k$1, m2[12], m2[13], m2[14]);
      let c3 = null;
      switch (p2.viewingMode) {
        case l$b.Global:
          c3 = z$1(U$1, k$1);
          break;
        case l$b.Local:
          c3 = r$f(U$1, G);
      }
      let u3 = 0;
      const g3 = e$m(q, k$1, e2.eye), T2 = s$b(g3), _2 = g$8(g3, g3, 1 / T2);
      let b2 = null;
      this.parameters.screenSizePerspective && (b2 = P$4(c3, _2)), u3 += L$1(e2, T2, this.parameters.verticalOffset, b2, this.parameters.screenSizePerspective), g$8(c3, c3, u3), S$7(z, c3, p2.transform.inverseRotation), d2 = e$m(V, d2, z), f2 = e$m(H, f2, z);
    }
    x$3(c2, u2, p2, d2, f2, y$1(p2.verticalOffset), g2);
  }
  requiresSlot(e2, t2) {
    if (t2 === h$5.Color || t2 === h$5.Alpha || t2 === h$5.Depth || t2 === h$5.Normal || t2 === h$5.Shadow || t2 === h$5.ShadowHighlight || t2 === h$5.ShadowExludeHighlight || t2 === h$5.Highlight || t2 === h$5.ObjectAndLayerIdColor) {
      return e2 === (this.parameters.transparent ? this.parameters.writeDepth ? E$1.TRANSPARENT_MATERIAL : E$1.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : E$1.OPAQUE_MATERIAL) || e2 === E$1.DRAPED_MATERIAL || t2 === h$5.ObjectAndLayerIdColor;
    }
    return false;
  }
  createGLMaterial(e2) {
    return new R(e2);
  }
  createBufferWriter() {
    return new N(this._vertexBufferLayout, this._instanceBufferLayout);
  }
}
class R extends h$4 {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, e2), e2.material.parameters));
  }
  _updateParameters(e2) {
    const r2 = this._material.parameters;
    this.updateTexture(r2.textureId);
    const a2 = e2.camera.viewInverseTransposeMatrix;
    return o$n(r2.origin, a2[3], a2[7], a2[11]), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(r2.treeRendering ? t : _, e2);
  }
  _updateShadowState(e2) {
    e2.shadowMap.enabled !== this._material.parameters.shadowMappingEnabled && this._material.setParameters({ shadowMappingEnabled: e2.shadowMap.enabled });
  }
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e2.hasOccludees });
  }
  beginSlot(e2) {
    return this._output !== h$5.Color && this._output !== h$5.Alpha || (this._updateShadowState(e2), this._updateOccludeeState(e2)), this._updateParameters(e2);
  }
}
class D extends k$2 {
  constructor() {
    super(...arguments), this.initTextureTransparent = false, this.treeRendering = false, this.hasVertexTangents = false;
  }
}
const P$1 = new D();
class N {
  constructor(e2, t2) {
    this.vertexBufferLayout = e2, this.instanceBufferLayout = t2;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return e2.indices.get(O$2.POSITION).length;
  }
  write(e2, t2, r2, a2, s2) {
    m$3(r2, this.vertexBufferLayout, e2, t2, a2, s2);
  }
}
function j$1(e2) {
  const t2 = e2.textureId || e2.normalTextureId || e2.metallicRoughnessTextureId || e2.emissiveTextureId || e2.occlusionTextureId, r2 = T$5().vec3f(O$2.POSITION).vec3f(O$2.NORMAL);
  return e2.hasVertexTangents && r2.vec4f(O$2.TANGENT), t2 && r2.vec2f(O$2.UV0), e2.hasVertexColors && r2.vec4u8(O$2.COLOR), e2.hasSymbolColors && r2.vec4u8(O$2.SYMBOLCOLOR), has("enable-feature:objectAndLayerId-rendering") && r2.vec4u8(O$2.OBJECTANDLAYERIDCOLOR), r2;
}
function B(t2) {
  let r2 = T$5();
  return r2 = t2.instancedDoublePrecision ? r2.vec3f(O$2.MODELORIGINHI).vec3f(O$2.MODELORIGINLO).mat3f(O$2.MODEL).mat3f(O$2.MODELNORMAL) : r2.mat4f(O$2.MODEL).mat4f(O$2.MODELNORMAL), r$6(t2.instanced) && t2.instanced.includes("color") && (r2 = r2.vec4f(O$2.INSTANCECOLOR)), r$6(t2.instanced) && t2.instanced.includes("featureAttribute") && (r2 = r2.vec4f(O$2.INSTANCEFEATUREATTRIBUTE)), r$6(t2.instanced) && t2.instanced.includes("objectAndLayerIdColor") && (r2 = r2.vec4u8(O$2.OBJECTANDLAYERIDCOLOR_INSTANCED)), r2;
}
const V = n$a(), H = n$a(), G = r$7(0, 0, 1), U$1 = n$a(), z = n$a(), k$1 = n$a(), q = n$a();
const w = s$c.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
async function b(e2, t2) {
  const n2 = await v(e2, t2), s2 = await E(n2.textureDefinitions, t2);
  let a2 = 0;
  for (const r2 in s2)
    if (s2.hasOwnProperty(r2)) {
      const e3 = s2[r2];
      a2 += (e3 == null ? void 0 : e3.image) ? e3.image.width * e3.image.height * 4 : 0;
    }
  return { resource: n2, textures: s2, size: a2 + e$v(n2) };
}
async function v(r2, n2) {
  const s2 = r$6(n2) && n2.streamDataRequester;
  if (s2)
    return j(r2, s2, n2);
  const u2 = await b$7(U$3(r2, e$r(n2)));
  if (u2.ok === true)
    return u2.value.data;
  w$6(u2.error), A(u2.error);
}
async function j(e2, r2, n2) {
  const s2 = await b$7(r2.request(e2, "json", n2));
  if (s2.ok === true)
    return s2.value;
  w$6(s2.error), A(s2.error.details.url);
}
function A(e2) {
  throw new s$d("", `Request for object resource failed: ${e2}`);
}
function M(e2) {
  const t2 = e2.params, r2 = t2.topology;
  let n2 = true;
  switch (t2.vertexAttributes || (w.warn("Geometry must specify vertex attributes"), n2 = false), t2.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const e3 = t2.faces;
      if (e3) {
        if (t2.vertexAttributes)
          for (const r3 in t2.vertexAttributes) {
            const t3 = e3[r3];
            t3 && t3.values ? (t3.valueType != null && t3.valueType !== "UInt32" && (w.warn(`Unsupported indexed geometry indices type '${t3.valueType}', only UInt32 is currently supported`), n2 = false), t3.valuesPerElement != null && t3.valuesPerElement !== 1 && (w.warn(`Unsupported indexed geometry values per element '${t3.valuesPerElement}', only 1 is currently supported`), n2 = false)) : (w.warn(`Indexed geometry does not specify face indices for '${r3}' attribute`), n2 = false);
          }
      } else
        w.warn("Indexed geometries must specify faces"), n2 = false;
      break;
    }
    default:
      w.warn(`Unsupported topology '${r2}'`), n2 = false;
  }
  e2.params.material || (w.warn("Geometry requires material"), n2 = false);
  const s2 = e2.params.vertexAttributes;
  for (const a2 in s2) {
    s2[a2].values || (w.warn("Geometries with externally defined attributes are not yet supported"), n2 = false);
  }
  return n2;
}
function P(e2, t2) {
  const r2 = [], n2 = [], s2 = [], o2 = [], i2 = e2.resource, c2 = r$g.parse(i2.version || "1.0", "wosr");
  k.validate(c2);
  const m2 = i2.model.name, p2 = i2.model.geometries, d2 = i2.materialDefinitions, h2 = e2.textures;
  let w2 = 0;
  const b2 = new Map();
  for (let u2 = 0; u2 < p2.length; u2++) {
    const e3 = p2[u2];
    if (!M(e3))
      continue;
    const i3 = T(e3), c3 = e3.params.vertexAttributes, m3 = [];
    for (const t3 in c3) {
      const e4 = c3[t3], r3 = e4.values;
      m3.push([t3, { data: r3, size: e4.valuesPerElement, exclusive: true }]);
    }
    const v2 = [];
    if (e3.params.topology !== "PerAttributeArray") {
      const t3 = e3.params.faces;
      for (const e4 in t3)
        v2.push([e4, t3[e4].values]);
    }
    const j2 = h2 && h2[i3.texture];
    if (j2 && !b2.has(i3.texture)) {
      const { image: e4, params: t3 } = j2, r3 = new L$2(e4, t3);
      o2.push(r3), b2.set(i3.texture, r3);
    }
    const A2 = b2.get(i3.texture), P2 = A2 ? A2.id : void 0;
    let U2 = s2[i3.material] ? s2[i3.material][i3.texture] : null;
    if (!U2) {
      const e4 = d2[i3.material.substring(i3.material.lastIndexOf("/") + 1)].params;
      e4.transparency === 1 && (e4.transparency = 0);
      const r3 = j2 && j2.alphaChannelUsage, n3 = e4.transparency > 0 || r3 === "transparency" || r3 === "maskAndTransparency", o3 = j2 ? I(j2.alphaChannelUsage) : void 0, u3 = { ambient: e$w(e4.diffuse), diffuse: e$w(e4.diffuse), opacity: 1 - (e4.transparency || 0), transparent: n3, textureAlphaMode: o3, textureAlphaCutoff: 0.33, textureId: P2, initTextureTransparent: true, doubleSided: true, cullFace: n$j.None, colorMixMode: e4.externalColorMixMode || "tint", textureAlphaPremultiplied: !!j2 && !!j2.params.preMultiplyAlpha };
      r$6(t2) && t2.materialParamsMixin && Object.assign(u3, t2.materialParamsMixin), U2 = new C(u3), s2[i3.material] || (s2[i3.material] = {}), s2[i3.material][i3.texture] = U2;
    }
    n2.push(U2);
    const E2 = new d$c(m3, v2);
    w2 += v2.position ? v2.position.length : 0, r2.push(E2);
  }
  return { engineResources: [{ name: m2, stageResources: { textures: o2, materials: n2, geometries: r2 }, pivotOffset: i2.model.pivotOffset, numberOfVertices: w2, lodThreshold: null }], referenceBoundingBox: U(r2) };
}
function U(e2) {
  const t2 = A$7();
  return e2.forEach((e3) => {
    const r2 = e3.boundingInfo;
    r$6(r2) && (c$m(t2, r2.getBBMin()), c$m(t2, r2.getBBMax()));
  }), t2;
}
async function E(e2, t2) {
  const r2 = [];
  for (const o2 in e2) {
    const n3 = e2[o2], s3 = n3.images[0].data;
    if (!s3) {
      w.warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const i2 = n3.encoding + ";base64," + s3, u2 = "/textureDefinitions/" + o2, l2 = n3.channels === "rgba" ? n3.alphaChannelUsage || "transparency" : "none", c2 = { noUnpackFlip: true, wrap: { s: D$2.REPEAT, t: D$2.REPEAT }, preMultiplyAlpha: I(l2) !== C$4.Opaque }, m2 = r$6(t2) && t2.disableTextures ? Promise.resolve(null) : t$h(i2, t2);
    r2.push(m2.then((e3) => ({ refId: u2, image: e3, params: c2, alphaChannelUsage: l2 })));
  }
  const n2 = await Promise.all(r2), s2 = {};
  for (const a2 of n2)
    s2[a2.refId] = a2;
  return s2;
}
function I(e2) {
  switch (e2) {
    case "mask":
      return C$4.Mask;
    case "maskAndTransparency":
      return C$4.MaskBlend;
    case "none":
      return C$4.Opaque;
    default:
      return C$4.Blend;
  }
}
function T(e2) {
  const t2 = e2.params;
  return { id: 1, material: t2.material, texture: t2.texture, region: t2.texture };
}
const k = new r$g(1, 2, "wosr");
async function Y(s2, o2) {
  const i2 = Z(a$n(s2));
  if (i2.fileType === "wosr") {
    const e2 = await (o2.cache ? o2.cache.loadWOSR(i2.url, o2) : b(i2.url, o2)), { engineResources: t2, referenceBoundingBox: r2 } = P(e2, o2);
    return { lods: t2, referenceBoundingBox: r2, isEsriSymbolResource: false, isWosr: true };
  }
  const n2 = await (o2.cache ? o2.cache.loadGLTF(i2.url, o2, o2.usePBR) : m$8(new n$k(o2.streamDataRequester), i2.url, o2, o2.usePBR)), a2 = q$2(n2.model.meta, "ESRI_proxyEllipsoid"), u2 = n2.meta.isEsriSymbolResource && r$6(a2) && n2.meta.uri.includes("/RealisticTrees/");
  u2 && !n2.customMeta.esriTreeRendering && (n2.customMeta.esriTreeRendering = true, ie(n2, a2));
  const l2 = n2.meta.isEsriSymbolResource ? { usePBR: o2.usePBR, isSchematic: false, treeRendering: u2, mrrFactors: [0, 1, 0.2] } : { usePBR: o2.usePBR, isSchematic: false, treeRendering: false, mrrFactors: [0, 1, 0.5] }, c2 = __spreadProps(__spreadValues({}, o2.materialParamsMixin), { treeRendering: u2 }), { engineResources: m2, referenceBoundingBox: f2 } = ee(n2, l2, c2, o2.skipHighLods && i2.specifiedLodIndex == null ? { skipHighLods: true } : { skipHighLods: false, singleLodIndex: i2.specifiedLodIndex });
  return { lods: m2, referenceBoundingBox: f2, isEsriSymbolResource: n2.meta.isEsriSymbolResource, isWosr: false };
}
function Z(e2) {
  const t2 = e2.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  if (t2)
    return { fileType: "gltf", url: t2[1], specifiedLodIndex: t2[4] != null ? Number(t2[4]) : null };
  return e2.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: e2, specifiedLodIndex: null } : { fileType: "unknown", url: e2, specifiedLodIndex: null };
}
function ee(e2, t2, o2, i2) {
  const n2 = e2.model, a2 = new Array(), u2 = new Map(), l2 = new Map(), c2 = n2.lods.length, m2 = A$7();
  return n2.lods.forEach((e3, f2) => {
    const d2 = i2.skipHighLods === true && (c2 > 1 && f2 === 0 || c2 > 3 && f2 === 1) || i2.skipHighLods === false && i2.singleLodIndex != null && f2 !== i2.singleLodIndex;
    if (d2 && f2 !== 0)
      return;
    const p2 = new Array();
    let g2 = 0;
    if (e3.parts.forEach((e4) => {
      const { geometry: t3, vertexCount: s2 } = te(e4);
      p2.push(t3), g2 += s2;
      const o3 = t3.boundingInfo;
      r$6(o3) && f2 === 0 && (c$m(m2, o3.getBBMin()), c$m(m2, o3.getBBMax()));
    }), d2)
      return;
    const h2 = new s$9(e3.name, { textures: new Array(), materials: new Array(), geometries: p2 }, e3.lodThreshold, [0, 0, 0], g2);
    a2.push(h2), e3.parts.forEach((e4) => {
      const i3 = e4.material + (e4.attributes.normal ? "_normal" : "") + (e4.attributes.color ? "_color" : "") + (e4.attributes.texCoord0 ? "_texCoord0" : "") + (e4.attributes.tangent ? "_tangent" : ""), a3 = n2.materials.get(e4.material), c3 = r$6(e4.attributes.texCoord0), m3 = r$6(e4.attributes.normal);
      if (t$d(a3))
        return;
      const f3 = se(a3.alphaMode);
      if (!u2.has(i3)) {
        if (c3) {
          const e5 = (e6, t3 = false) => {
            if (r$6(e6) && !l2.has(e6)) {
              const s3 = n2.textures.get(e6);
              r$6(s3) && l2.set(e6, new L$2(s3.data, t3 ? __spreadProps(__spreadValues({}, s3.parameters), { preMultiplyAlpha: t3 }) : s3.parameters));
            }
          };
          e5(a3.textureColor, f3 !== C$4.Opaque), e5(a3.textureNormal), e5(a3.textureOcclusion), e5(a3.textureEmissive), e5(a3.textureMetallicRoughness);
        }
        const s2 = a3.color[0] ** (1 / o$s), d3 = a3.color[1] ** (1 / o$s), p3 = a3.color[2] ** (1 / o$s), g3 = a3.emissiveFactor[0] ** (1 / o$s), x2 = a3.emissiveFactor[1] ** (1 / o$s), h3 = a3.emissiveFactor[2] ** (1 / o$s), b2 = r$6(a3.textureColor) && c3 ? l2.get(a3.textureColor) : null;
        u2.set(i3, new C(__spreadValues(__spreadProps(__spreadValues({}, t2), { transparent: f3 === C$4.Blend, customDepthTest: e$u.Lequal, textureAlphaMode: f3, textureAlphaCutoff: a3.alphaCutoff, diffuse: [s2, d3, p3], ambient: [s2, d3, p3], opacity: a3.opacity, doubleSided: a3.doubleSided, doubleSidedType: "winding-order", cullFace: a3.doubleSided ? n$j.None : n$j.Back, hasVertexColors: !!e4.attributes.color, hasVertexTangents: !!e4.attributes.tangent, normals: m3 ? "default" : "screenDerivative", castShadows: true, receiveSSAO: true, textureId: r$6(b2) ? b2.id : void 0, colorMixMode: a3.colorMixMode, normalTextureId: r$6(a3.textureNormal) && c3 ? l2.get(a3.textureNormal).id : void 0, textureAlphaPremultiplied: r$6(b2) && !!b2.params.preMultiplyAlpha, occlusionTextureId: r$6(a3.textureOcclusion) && c3 ? l2.get(a3.textureOcclusion).id : void 0, emissiveTextureId: r$6(a3.textureEmissive) && c3 ? l2.get(a3.textureEmissive).id : void 0, metallicRoughnessTextureId: r$6(a3.textureMetallicRoughness) && c3 ? l2.get(a3.textureMetallicRoughness).id : void 0, emissiveFactor: [g3, x2, h3], mrrFactors: [a3.metallicFactor, a3.roughnessFactor, t2.mrrFactors[2]], isSchematic: false, colorTextureTransformMatrix: c$d(a3.colorTextureTransform), normalTextureTransformMatrix: c$d(a3.normalTextureTransform), occlusionTextureTransformMatrix: c$d(a3.occlusionTextureTransform), emissiveTextureTransformMatrix: c$d(a3.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: c$d(a3.metallicRoughnessTextureTransform) }), o2)));
      }
      if (h2.stageResources.materials.push(u2.get(i3)), c3) {
        const e5 = (e6) => {
          r$6(e6) && h2.stageResources.textures.push(l2.get(e6));
        };
        e5(a3.textureColor), e5(a3.textureNormal), e5(a3.textureOcclusion), e5(a3.textureEmissive), e5(a3.textureMetallicRoughness);
      }
    });
  }), { engineResources: a2, referenceBoundingBox: m2 };
}
function te(e2) {
  const t2 = oe(e2.indices || e2.attributes.position.count, e2.primitiveType), s2 = e2.attributes.position.count, i2 = r$h(i$l, s2);
  t$j(i2, e2.attributes.position, e2.transform);
  const n2 = [[O$2.POSITION, { data: i2.typedBuffer, size: i2.elementCount, exclusive: true }]], a2 = [[O$2.POSITION, t2]];
  if (r$6(e2.attributes.normal)) {
    const r2 = r$h(i$l, s2);
    g$9(re, e2.transform), r$i(r2, e2.attributes.normal, re), n2.push([O$2.NORMAL, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O$2.NORMAL, t2]);
  }
  if (r$6(e2.attributes.tangent)) {
    const r2 = r$h(c$j, s2);
    g$9(re, e2.transform), r$j(r2, e2.attributes.tangent, re), n2.push([O$2.TANGENT, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O$2.TANGENT, t2]);
  }
  if (r$6(e2.attributes.texCoord0)) {
    const r2 = r$h(u$f, s2);
    n$l(r2, e2.attributes.texCoord0), n2.push([O$2.UV0, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O$2.UV0, t2]);
  }
  if (r$6(e2.attributes.color)) {
    const r2 = r$h(x$7, s2);
    if (e2.attributes.color.elementCount === 4)
      e2.attributes.color instanceof c$j ? o$t(r2, e2.attributes.color, 255) : e2.attributes.color instanceof x$7 ? e$x(r2, e2.attributes.color) : e2.attributes.color instanceof L$4 && o$t(r2, e2.attributes.color, 1 / 256);
    else {
      t$k(r2, 255, 255, 255, 255);
      const t3 = new O$6(r2.buffer, 0, 4);
      e2.attributes.color instanceof i$l ? f$f(t3, e2.attributes.color, 255) : e2.attributes.color instanceof O$6 ? e$y(t3, e2.attributes.color) : e2.attributes.color instanceof E$9 && f$f(t3, e2.attributes.color, 1 / 256);
    }
    n2.push([O$2.COLOR, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O$2.COLOR, t2]);
  }
  return { geometry: new d$c(n2, a2), vertexCount: s2 };
}
const re = e$p();
function se(e2) {
  switch (e2) {
    case "BLEND":
      return C$4.Blend;
    case "MASK":
      return C$4.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return C$4.Opaque;
  }
}
function oe(e2, t2) {
  switch (t2) {
    case E$7.TRIANGLES:
      return o$u(e2);
    case E$7.TRIANGLE_STRIP:
      return f$g(e2);
    case E$7.TRIANGLE_FAN:
      return i$m(e2);
  }
}
function ie(e2, t2) {
  for (let r2 = 0; r2 < e2.model.lods.length; ++r2) {
    const o2 = e2.model.lods[r2];
    for (const i2 of o2.parts) {
      const o3 = i2.attributes.normal;
      if (t$d(o3))
        return;
      const g2 = i2.attributes.position, x2 = g2.count, b2 = n$a(), T2 = n$a(), v2 = n$a(), M2 = r$h(x$7, x2), y2 = r$h(i$l, x2), j2 = h$c(e$q(), i2.transform);
      for (let s2 = 0; s2 < x2; s2++) {
        g2.getVec(s2, T2), o3.getVec(s2, b2), O$5(T2, T2, i2.transform), e$m(v2, T2, t2.center), i$n(v2, v2, t2.radius);
        const n2 = v2[2], a2 = s$b(v2), p2 = Math.min(0.45 + 0.55 * a2 * a2, 1);
        i$n(v2, v2, t2.radius), j2 !== null && O$5(v2, v2, j2), z$1(v2, v2), r2 + 1 !== e2.model.lods.length && e2.model.lods.length > 1 && A$5(v2, v2, b2, n2 > -1 ? 0.2 : Math.min(-4 * n2 - 3.8, 1)), y2.setVec(s2, v2), M2.set(s2, 0, 255 * p2), M2.set(s2, 1, 255 * p2), M2.set(s2, 2, 255 * p2), M2.set(s2, 3, 255);
      }
      i2.attributes.normal = y2, i2.attributes.color = M2;
    }
  }
}
var objectResourceUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  fetch: Y,
  gltfToEngineResources: ee,
  parseUrl: Z
});
export { I$1 as I, Q, c$1 as c, d, objectResourceUtils as o };
