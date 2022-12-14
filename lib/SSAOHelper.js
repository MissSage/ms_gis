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
import { bk as a$e, dF as l$e, x as t$d, r as r$8, b0 as r$9, bP as r$a, bg as n$a, b5 as n$b, ev as f$e, dH as s$9, ew as s$a, ee as h$9, ce as u$e, bn as n$c, cm as h$b, e7 as o$p, b9 as e$h, bM as a$g, aq as o$q, ex as d$f, ey as q, aM as _$5, bd as z, t as n$d, ez as c$f, aO as a$i, dB as e$j, bi as r$b, aJ as t$g, A as A$4, aT as p$6, aP as u$f, aN as g$9, cH as U$1, cj as e$k, c as e$l, cJ as has, e as e$m, bA as f$f, aK as e$n, b8 as c$g, bc as O$3, eA as e$o, bx as r$c, eB as a$j, eC as f$g, eD as c$h, F as n$g, eE as V$1, eF as X, eG as o$r, eH as e$p, aX as f$h, eI as c$j, eJ as v$7, eK as a$k, c5 as n$i, by as i$g, c_ as h$c, bl as w$4, eL as C$2, eM as G$3, aR as r$d, bu as j$3, bh as R, eN as E$8, eO as S$6, eP as e$q, eQ as y$4, ap as x$7, M as o$s } from "./index.js";
import { t as t$f, f as a$h, O as O$2, j as c$i, k as t$i, W as W$2, _ as _$7 } from "./OrderIndependentTransparency.js";
import { h as h$a, e as e$i } from "./Util.js";
import { w as w$3 } from "./triangle.js";
import { u as u$g, n as n$e } from "./Indices.js";
import { O as O$1 } from "./VertexAttribute.js";
import { t as t$h } from "./requestImageUtils.js";
import { E as E$5, C as C$1, F as F$1, M as M$4, P as P$4, G as G$2, L as L$4, u as u$h, D as D$1, Y, V as V$2, I as I$4, O as O$4 } from "./enums.js";
import { a as a$f, E as E$7, n as n$h } from "./Texture.js";
import { a as a$d, E as E$6, _ as _$6, x as x$5, n as n$j } from "./VertexArrayObject.js";
import { c as c$k, x as x$6, u as u$i, i as i$h } from "./BufferView.js";
import { n as n$f, r as r$e } from "./vec3f32.js";
import { t as t$e } from "./VertexElementDescriptor.js";
class r$7 extends a$d {
}
class t$c {
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
class e$g {
  constructor(i2, t2, e2) {
    this.release = e2, this.initializeConfiguration(i2, t2), this._configuration = t2.snapshot(), this._program = this.initializeProgram(i2), this._pipeline = this.initializePipeline(i2.rctx.capabilities);
  }
  destroy() {
    this._program = a$e(this._program), this._pipeline = this._configuration = null;
  }
  reload(t2) {
    a$e(this._program), this._program = this.initializeProgram(t2), this._pipeline = this.initializePipeline(t2.rctx.capabilities);
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
    return E$5.TRIANGLES;
  }
  getPipelineState(i2, t2) {
    return this._pipeline;
  }
  initializeConfiguration(i2, t2) {
  }
}
var a$c;
!function(a2) {
  a2[a2.Pass = 0] = "Pass", a2[a2.Draw = 1] = "Draw";
}(a$c || (a$c = {}));
class o$o {
  constructor(t2, e2, o2) {
    this._context = t2, this._locations = o2, this._textures = new Map(), this._freeTextureUnits = new l$e({ deallocator: null }), this._glProgram = t2.programCache.acquire(e2.generate("vertex"), e2.generate("fragment"), o2), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bindPass = e2.generateBind(a$c.Pass, this), this.bindDraw = e2.generateBind(a$c.Draw, this), this._fragmentUniforms = a$f() ? e2.fragmentUniforms : null;
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
    }), r$8(this._fragmentUniforms) && this._fragmentUniforms.forEach((t2) => {
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
class t$b {
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
function a$b(a2) {
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
function a$a(a2) {
  a2.include(a$b), a2.code.add(n$9`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);
}
class i$f {
  constructor(i2, s2, t2, a2, n2 = null) {
    this.name = i2, this.type = s2, this.arraySize = n2, this.bind = { [a$c.Pass]: null, [a$c.Draw]: null }, r$8(t2) && r$8(a2) && (this.bind[t2] = a2);
  }
  equals(e2) {
    return this.type === e2.type && this.name === e2.name && this.arraySize === e2.arraySize;
  }
}
class e$f extends i$f {
  constructor(r2, e2) {
    super(r2, "vec2", a$c.Pass, (s2, o2, t2) => s2.setUniform2fv(r2, e2(o2, t2)));
  }
}
class e$e extends i$f {
  constructor(r2, e2) {
    super(r2, "vec4", a$c.Pass, (s2, o2, t2) => s2.setUniform4fv(r2, e2(o2, t2)));
  }
}
function n$8(r2) {
  r2.fragment.uniforms.add(new e$e("projInfo", (r3, o2) => f$d(o2))), r2.fragment.uniforms.add(new e$f("zScale", (r3, o2) => i$e(o2))), r2.fragment.code.add(n$9`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function f$d(r2) {
  const o2 = r2.camera.projectionMatrix;
  return o2[11] === 0 ? r$a(m$a, 2 / (r2.camera.fullWidth * o2[0]), 2 / (r2.camera.fullHeight * o2[5]), (1 + o2[12]) / o2[0], (1 + o2[13]) / o2[5]) : r$a(m$a, -2 / (r2.camera.fullWidth * o2[0]), -2 / (r2.camera.fullHeight * o2[5]), (1 - o2[8]) / o2[0], (1 - o2[9]) / o2[5]);
}
const m$a = n$a();
function i$e(o2) {
  return o2.camera.projectionMatrix[11] === 0 ? r$9(d$e, 0, 1) : r$9(d$e, 1, 0);
}
const d$e = n$b();
class e$d extends i$f {
  constructor(r2, e2) {
    super(r2, "vec3", a$c.Pass, (s2, o2, t2) => s2.setUniform3fv(r2, e2(o2, t2)));
  }
}
class o$n extends i$f {
  constructor(r2, o2) {
    super(r2, "float", a$c.Pass, (s2, e2, t2) => s2.setUniform1f(r2, o2(e2, t2)));
  }
}
const t$a = "Size", n$7 = "InvSize";
function r$6(r2, i2, o2 = false, u2 = 0) {
  if (r2.hasWebGL2Context) {
    const t2 = n$9`vec2(textureSize(${i2}, ${n$9.int(u2)}))`;
    return o2 ? "(1.0 / " + t2 + ")" : t2;
  }
  return o2 ? i2 + n$7 : i2 + t$a;
}
function i$d(t2, r2, i2, o2 = null, u2 = 0) {
  if (t2.hasWebGL2Context)
    return n$9`texelFetch(${r2}, ivec2(${i2}), ${n$9.int(u2)})`;
  let $ = n$9`texture2D(${r2}, ${i2} * `;
  return $ += o2 ? n$9`(${o2}))` : n$9`${r2 + n$7})`, $;
}
var e$c;
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Size = 1] = "Size", e2[e2.InvSize = 2] = "InvSize";
}(e$c || (e$c = {}));
class f$c extends i$f {
  constructor(r2, s2) {
    super(r2, "sampler2D", a$c.Pass, (e2, o2, t2) => e2.bindTexture(r2, s2(o2, t2)));
  }
}
function u$d(o2, c2, p2 = e$c.None) {
  const u2 = [new f$c(o2, c2)];
  if (p2 & e$c.Size) {
    const i2 = o2 + t$a;
    u2.push(new e$f(i2, (o3, t2) => {
      const i3 = c2(o3, t2);
      return r$8(i3) ? r$9(a$9, i3.descriptor.width, i3.descriptor.height) : f$e;
    }));
  }
  if (p2 & e$c.InvSize) {
    const t2 = o2 + n$7;
    u2.push(new e$f(t2, (o3, t3) => {
      const i2 = c2(o3, t3);
      return r$8(i2) ? r$9(a$9, 1 / i2.descriptor.width, 1 / i2.descriptor.height) : f$e;
    }));
  }
  return u2;
}
const a$9 = n$b();
class e$b extends i$f {
  constructor(r2, e2) {
    super(r2, "mat4", a$c.Pass, (s2, o2, t2) => s2.setUniformMatrix4fv(r2, e2(o2, t2)));
  }
}
const s$8 = s$9.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
class i$c {
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
class o$m extends i$c {
  constructor() {
    super(...arguments), this.vertex = new u$c(), this.fragment = new u$c(), this.attributes = new m$9(), this.varyings = new h$8(), this.extensions = new d$d(), this.constants = new l$d();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e2) {
    const r2 = this.extensions.generateSource(e2), t2 = this.attributes.generateSource(e2), n2 = this.varyings.generateSource(), s2 = e2 === "vertex" ? this.vertex : this.fragment, i2 = s2.uniforms.generateSource(), o2 = s2.code.generateSource(), a2 = e2 === "vertex" ? f$b : _$4, c2 = this.constants.generateSource().concat(s2.constants.generateSource());
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
      r$8(s3) && n2.set(r3.name, s3);
    }), this.fragment.uniforms.entries.forEach((r3) => {
      const s3 = r3.bind[e2];
      r$8(s3) && n2.set(r3.name, s3);
    });
    const s2 = Array.from(n2.values()), i2 = s2.length;
    return (e3, t2, n3) => {
      for (let o2 = 0; o2 < i2; ++o2)
        s2[o2](r2, e3, t2, n3);
    };
  }
}
class a$8 {
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
        throw new s$a(`Duplicate uniform name ${r2.name} for different uniform type`);
      this._entries.set(r2.name, r2);
    }
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e2) => r$8(e2.arraySize) ? `uniform ${e2.type} ${e2.name}[${e2.arraySize}];` : `uniform ${e2.type} ${e2.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}
class c$e {
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
class u$c extends i$c {
  constructor() {
    super(...arguments), this.uniforms = new a$8(), this.code = new c$e(), this.constants = new l$d();
  }
  get builder() {
    return this;
  }
}
class m$9 {
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
class d$d {
  constructor() {
    this._entries = new Set();
  }
  add(e2) {
    this._entries.add(e2);
  }
  generateSource(e2) {
    const r2 = e2 === "vertex" ? d$d.ALLOWLIST_VERTEX : d$d.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e3) => r2.includes(e3)).map((e3) => `#extension ${e3} : enable`);
  }
}
d$d.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], d$d.ALLOWLIST_VERTEX = [];
class l$d {
  constructor() {
    this._entries = new Set();
  }
  add(e2, r2, t2) {
    let n2 = "ERROR_CONSTRUCTOR_STRING";
    switch (r2) {
      case "float":
        n2 = l$d._numberToFloatStr(t2);
        break;
      case "int":
        n2 = l$d._numberToIntStr(t2);
        break;
      case "bool":
        n2 = t2.toString();
        break;
      case "vec2":
        n2 = `vec2(${l$d._numberToFloatStr(t2[0])},                            ${l$d._numberToFloatStr(t2[1])})`;
        break;
      case "vec3":
        n2 = `vec3(${l$d._numberToFloatStr(t2[0])},                            ${l$d._numberToFloatStr(t2[1])},                            ${l$d._numberToFloatStr(t2[2])})`;
        break;
      case "vec4":
        n2 = `vec4(${l$d._numberToFloatStr(t2[0])},                            ${l$d._numberToFloatStr(t2[1])},                            ${l$d._numberToFloatStr(t2[2])},                            ${l$d._numberToFloatStr(t2[3])})`;
        break;
      case "ivec2":
        n2 = `ivec2(${l$d._numberToIntStr(t2[0])},                             ${l$d._numberToIntStr(t2[1])})`;
        break;
      case "ivec3":
        n2 = `ivec3(${l$d._numberToIntStr(t2[0])},                             ${l$d._numberToIntStr(t2[1])},                             ${l$d._numberToIntStr(t2[2])})`;
        break;
      case "ivec4":
        n2 = `ivec4(${l$d._numberToIntStr(t2[0])},                             ${l$d._numberToIntStr(t2[1])},                             ${l$d._numberToIntStr(t2[2])},                             ${l$d._numberToIntStr(t2[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n2 = `${r2}(${Array.prototype.map.call(t2, (e3) => l$d._numberToFloatStr(e3)).join(", ")})`;
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
const _$4 = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif", f$b = "precision highp float;\nprecision highp sampler2D;";
const E$4 = new Map([[O$1.POSITION, 0], [O$1.NORMAL, 1], [O$1.UV0, 2], [O$1.COLOR, 3], [O$1.SIZE, 4], [O$1.TANGENT, 4], [O$1.AUXPOS1, 5], [O$1.SYMBOLCOLOR, 5], [O$1.AUXPOS2, 6], [O$1.FEATUREATTRIBUTE, 6], [O$1.INSTANCEFEATUREATTRIBUTE, 6], [O$1.INSTANCECOLOR, 7], [O$1.OBJECTANDLAYERIDCOLOR, 7], [O$1.OBJECTANDLAYERIDCOLOR_INSTANCED, 7], [O$1.MODEL, 8], [O$1.MODELNORMAL, 12], [O$1.MODELORIGINHI, 11], [O$1.MODELORIGINLO, 15]]);
[new t$e(O$1.POSITION, 3, C$1.FLOAT, 0, 12)];
[new t$e(O$1.POSITION, 3, C$1.FLOAT, 0, 20), new t$e(O$1.UV0, 2, C$1.FLOAT, 12, 20)];
[new t$e(O$1.POSITION, 3, C$1.FLOAT, 0, 32), new t$e(O$1.NORMAL, 3, C$1.FLOAT, 12, 32), new t$e(O$1.UV0, 2, C$1.FLOAT, 24, 32)];
[new t$e(O$1.POSITION, 3, C$1.FLOAT, 0, 16), new t$e(O$1.COLOR, 4, C$1.UNSIGNED_BYTE, 12, 16)];
const t$9 = [new t$e(O$1.POSITION, 2, C$1.FLOAT, 0, 8)], A$3 = [new t$e(O$1.POSITION, 2, C$1.FLOAT, 0, 16), new t$e(O$1.UV0, 2, C$1.FLOAT, 8, 16)];
function u$b(i2, m2 = t$9, l2 = E$4, T2 = -1, f2 = 1) {
  let u2 = null;
  if (m2 === A$3)
    u2 = new Float32Array([T2, T2, 0, 0, f2, T2, 1, 0, T2, f2, 0, 1, f2, f2, 1, 1]);
  else
    u2 = new Float32Array([T2, T2, f2, T2, T2, f2, f2, f2]);
  return new r$7(i2, l2, { geometry: m2 }, { geometry: E$6.createVertex(i2, F$1.STATIC_DRAW, u2) });
}
function s$7(e2) {
  return new E$7(e2, { target: M$4.TEXTURE_2D, pixelFormat: P$4.RGBA, dataType: G$2.UNSIGNED_BYTE, samplingMode: L$4.NEAREST, width: 1, height: 1 }, new Uint8Array([255, 255, 255, 255]));
}
var E$3;
!function(E2) {
  E2[E2.INTEGRATED_MESH = 0] = "INTEGRATED_MESH", E2[E2.OPAQUE_TERRAIN = 1] = "OPAQUE_TERRAIN", E2[E2.OPAQUE_MATERIAL = 2] = "OPAQUE_MATERIAL", E2[E2.TRANSPARENT_MATERIAL = 3] = "TRANSPARENT_MATERIAL", E2[E2.TRANSPARENT_TERRAIN = 4] = "TRANSPARENT_TERRAIN", E2[E2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL = 5] = "TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL", E2[E2.OCCLUDED_TERRAIN = 6] = "OCCLUDED_TERRAIN", E2[E2.OCCLUDER_MATERIAL = 7] = "OCCLUDER_MATERIAL", E2[E2.TRANSPARENT_OCCLUDER_MATERIAL = 8] = "TRANSPARENT_OCCLUDER_MATERIAL", E2[E2.OCCLUSION_PIXELS = 9] = "OCCLUSION_PIXELS", E2[E2.POSTPROCESSING_ENVIRONMENT_OPAQUE = 10] = "POSTPROCESSING_ENVIRONMENT_OPAQUE", E2[E2.POSTPROCESSING_ENVIRONMENT_TRANSPARENT = 11] = "POSTPROCESSING_ENVIRONMENT_TRANSPARENT", E2[E2.LASERLINES = 12] = "LASERLINES", E2[E2.LASERLINES_CONTRAST_CONTROL = 13] = "LASERLINES_CONTRAST_CONTROL", E2[E2.HUD_MATERIAL = 14] = "HUD_MATERIAL", E2[E2.LABEL_MATERIAL = 15] = "LABEL_MATERIAL", E2[E2.LINE_CALLOUTS = 16] = "LINE_CALLOUTS", E2[E2.LINE_CALLOUTS_HUD_DEPTH = 17] = "LINE_CALLOUTS_HUD_DEPTH", E2[E2.DRAPED_MATERIAL = 18] = "DRAPED_MATERIAL", E2[E2.DRAPED_WATER = 19] = "DRAPED_WATER", E2[E2.VOXEL = 20] = "VOXEL", E2[E2.MAX_SLOTS = 21] = "MAX_SLOTS";
}(E$3 || (E$3 = {}));
function l$c(e2) {
  return Math.abs(e2 * e2 * e2);
}
function s$6(e2, t2, a2) {
  const i2 = a2.parameters, r2 = a2.paddingPixelsOverride;
  return x$4.scale = Math.min(i2.divisor / (t2 - i2.offset), 1), x$4.factor = l$c(e2), x$4.minPixelSize = i2.minPixelSize, x$4.paddingPixels = r2, x$4;
}
function c$d(e2, t2) {
  return e2 === 0 ? t2.minPixelSize : t2.minPixelSize * (1 + 2 * t2.paddingPixels / e2);
}
function o$l(t2, a2) {
  return Math.max(h$9(t2 * a2.scale, t2, a2.factor), c$d(t2, a2));
}
function u$a(e2, t2, a2) {
  const i2 = s$6(e2, t2, a2);
  return i2.minPixelSize = 0, i2.paddingPixels = 0, o$l(1, i2);
}
function d$c(e2, t2, a2, i2) {
  i2.scale = u$a(e2, t2, a2), i2.factor = 0, i2.minPixelSize = a2.parameters.minPixelSize, i2.paddingPixels = a2.paddingPixelsOverride;
}
function f$a(e2, t2, a2 = [0, 0]) {
  const i2 = Math.min(Math.max(t2.scale, c$d(e2[1], t2) / Math.max(1e-5, e2[1])), 1);
  return a2[0] = e2[0] * i2, a2[1] = e2[1] * i2, a2;
}
function m$8(e2, t2, a2, i2) {
  return o$l(e2, s$6(t2, a2, i2));
}
const x$4 = { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 };
function c$c(r2, n2) {
  return t$d(r2) && (r2 = []), r2.push(n2), r2;
}
function f$9(r2, n2) {
  if (t$d(r2))
    return null;
  const o2 = r2.filter((t2) => t2 !== n2);
  return o2.length === 0 ? null : o2;
}
function u$9(t2) {
  return !!r$8(t2) && !t2.visible;
}
function l$b(t2, i2, m2) {
  const c2 = t2.origin.vec3;
  h$a(j$2, -c2[0], -c2[1], -c2[2]), r$8(t2.transformation) ? u$e(i2, j$2, t2.transformation) : n$c(i2, j$2), h$b(m2, i2), o$p(m2, m2);
}
function p$5(t2, r2, n2, o2, s2) {
  g$8[0] = t2.get(r2, 0), g$8[1] = t2.get(r2, 1), g$8[2] = t2.get(r2, 2), t$f(g$8, b$5, 3), n2.set(s2, 0, b$5[0]), o2.set(s2, 0, b$5[1]), n2.set(s2, 1, b$5[2]), o2.set(s2, 1, b$5[3]), n2.set(s2, 2, b$5[4]), o2.set(s2, 2, b$5[5]);
}
const g$8 = new Float64Array(3), b$5 = new Float32Array(6), j$2 = e$h();
const g$7 = a$g();
function x$3(t2, n2, e2, o2, i2, r2, s2) {
  if (!u$9(n2))
    if (t2.boundingInfo) {
      e$i(t2.primitiveType === a$h.Triangle);
      const n3 = e2.tolerance;
      M$3(t2.boundingInfo, o2, i2, n3, r2, s2);
    } else {
      const n3 = t2.indices.get(O$1.POSITION), e3 = t2.vertexAttributes.get(O$1.POSITION);
      v$6(o2, i2, 0, n3.length / 3, n3, e3, void 0, r2, s2);
    }
}
const b$4 = n$d();
function M$3(t2, n2, i2, r2, s2, c2) {
  if (t$d(t2))
    return;
  const f2 = N(n2, i2, b$4);
  if (d$f(g$7, t2.getBBMin()), q(g$7, t2.getBBMax()), r$8(s2) && s2.applyToAabb(g$7), O(g$7, n2, f2, r2)) {
    const { primitiveIndices: e2, indices: o2, position: f3 } = t2, a2 = e2 ? e2.length : o2.length / 3;
    if (a2 > W$1) {
      const e3 = t2.getChildren();
      if (e3 !== void 0) {
        for (let t3 = 0; t3 < 8; ++t3)
          e3[t3] !== void 0 && M$3(e3[t3], n2, i2, r2, s2, c2);
        return;
      }
    }
    v$6(n2, i2, 0, a2, o2, f3, e2, s2, c2);
  }
}
const y$3 = n$d();
function v$6(t2, n2, e2, i2, r2, s2, c2, f2, a2) {
  if (c2)
    return I$3(t2, n2, e2, i2, r2, s2, c2, f2, a2);
  const l2 = s2.data, u2 = s2.stride || s2.size, m2 = t2[0], p2 = t2[1], h2 = t2[2], d2 = n2[0] - m2, g2 = n2[1] - p2, x2 = n2[2] - h2;
  for (let b2 = e2, M2 = 3 * e2; b2 < i2; ++b2) {
    let t3 = u2 * r2[M2++], n3 = l2[t3++], e3 = l2[t3++], i3 = l2[t3];
    t3 = u2 * r2[M2++];
    let s3 = l2[t3++], c3 = l2[t3++], v2 = l2[t3];
    t3 = u2 * r2[M2++];
    let I2 = l2[t3++], T2 = l2[t3++], j2 = l2[t3];
    r$8(f2) && ([n3, e3, i3] = f2.applyToVertex(n3, e3, i3, b2), [s3, c3, v2] = f2.applyToVertex(s3, c3, v2, b2), [I2, T2, j2] = f2.applyToVertex(I2, T2, j2, b2));
    const N2 = s3 - n3, O2 = c3 - e3, V2 = v2 - i3, L2 = I2 - n3, S2 = T2 - e3, B2 = j2 - i3, E2 = g2 * B2 - S2 * x2, P2 = x2 * L2 - B2 * d2, U2 = d2 * S2 - L2 * g2, W2 = N2 * E2 + O2 * P2 + V2 * U2;
    if (Math.abs(W2) <= Number.EPSILON)
      continue;
    const z2 = m2 - n3, k2 = p2 - e3, R2 = h2 - i3, C2 = z2 * E2 + k2 * P2 + R2 * U2;
    if (W2 > 0) {
      if (C2 < 0 || C2 > W2)
        continue;
    } else if (C2 > 0 || C2 < W2)
      continue;
    const H2 = k2 * V2 - O2 * R2, X2 = R2 * N2 - V2 * z2, Y2 = z2 * O2 - N2 * k2, Z = d2 * H2 + g2 * X2 + x2 * Y2;
    if (W2 > 0) {
      if (Z < 0 || C2 + Z > W2)
        continue;
    } else if (Z > 0 || C2 + Z < W2)
      continue;
    const _2 = (L2 * H2 + S2 * X2 + B2 * Y2) / W2;
    if (_2 >= 0) {
      a2(_2, A$2(N2, O2, V2, L2, S2, B2, y$3), b2, false);
    }
  }
}
function I$3(t2, n2, e2, i2, r2, s2, c2, f2, a2) {
  const l2 = s2.data, u2 = s2.stride || s2.size, m2 = t2[0], p2 = t2[1], h2 = t2[2], d2 = n2[0] - m2, g2 = n2[1] - p2, x2 = n2[2] - h2;
  for (let b2 = e2; b2 < i2; ++b2) {
    const t3 = c2[b2];
    let n3 = 3 * t3, e3 = u2 * r2[n3++], i3 = l2[e3++], s3 = l2[e3++], M2 = l2[e3];
    e3 = u2 * r2[n3++];
    let v2 = l2[e3++], I2 = l2[e3++], T2 = l2[e3];
    e3 = u2 * r2[n3];
    let j2 = l2[e3++], N2 = l2[e3++], O2 = l2[e3];
    r$8(f2) && ([i3, s3, M2] = f2.applyToVertex(i3, s3, M2, b2), [v2, I2, T2] = f2.applyToVertex(v2, I2, T2, b2), [j2, N2, O2] = f2.applyToVertex(j2, N2, O2, b2));
    const V2 = v2 - i3, L2 = I2 - s3, S2 = T2 - M2, B2 = j2 - i3, E2 = N2 - s3, P2 = O2 - M2, U2 = g2 * P2 - E2 * x2, W2 = x2 * B2 - P2 * d2, z2 = d2 * E2 - B2 * g2, k2 = V2 * U2 + L2 * W2 + S2 * z2;
    if (Math.abs(k2) <= Number.EPSILON)
      continue;
    const R2 = m2 - i3, C2 = p2 - s3, H2 = h2 - M2, X2 = R2 * U2 + C2 * W2 + H2 * z2;
    if (k2 > 0) {
      if (X2 < 0 || X2 > k2)
        continue;
    } else if (X2 > 0 || X2 < k2)
      continue;
    const Y2 = C2 * S2 - L2 * H2, Z = H2 * V2 - S2 * R2, _2 = R2 * L2 - V2 * C2, q2 = d2 * Y2 + g2 * Z + x2 * _2;
    if (k2 > 0) {
      if (q2 < 0 || X2 + q2 > k2)
        continue;
    } else if (q2 > 0 || X2 + q2 < k2)
      continue;
    const w2 = (B2 * Y2 + E2 * Z + P2 * _2) / k2;
    if (w2 >= 0) {
      a2(w2, A$2(V2, L2, S2, B2, E2, P2, y$3), t3, false);
    }
  }
}
const T$3 = n$d(), j$1 = n$d();
function A$2(t2, n2, e2, o2, c2, f2, a2) {
  return o$q(T$3, t2, n2, e2), o$q(j$1, o2, c2, f2), _$5(a2, T$3, j$1), z(a2, a2), a2;
}
function N(t2, n2, e2) {
  return o$q(e2, 1 / (n2[0] - t2[0]), 1 / (n2[1] - t2[1]), 1 / (n2[2] - t2[2]));
}
function O(t2, n2, e2, o2) {
  return V(t2, n2, e2, o2, 1 / 0);
}
function V(t2, n2, e2, o2, i2) {
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
function L$3(t2, e2, i2, r2, s2) {
  let c2 = (i2.screenLength || 0) * t2.pixelRatio;
  r$8(s2) && (c2 = m$8(c2, r2, e2, s2));
  const f2 = c2 * Math.tan(0.5 * t2.fovY) / (0.5 * t2.fullHeight);
  return a$i(f2 * e2, i2.minWorldLength || 0, i2.maxWorldLength != null ? i2.maxWorldLength : 1 / 0);
}
function S$5(t2, n2) {
  const e2 = n2 ? S$5(n2) : {};
  for (const o2 in t2) {
    let n3 = t2[o2];
    n3 && n3.forEach && (n3 = P$3(n3)), n3 == null && o2 in e2 || (e2[o2] = n3);
  }
  return e2;
}
function B$2(n2, e2) {
  let o2 = false;
  for (const i2 in e2) {
    const r2 = e2[i2];
    r2 !== void 0 && (Array.isArray(r2) ? n2[i2] === null ? (n2[i2] = r2.slice(), o2 = true) : c$f(n2[i2], r2) && (o2 = true) : n2[i2] !== r2 && (o2 = true, n2[i2] = r2));
  }
  return o2;
}
function E$2(t2, e2, o2, i2, r2, s2) {
  if (!e2.options.selectionMode)
    return;
  const c2 = t2.vertexAttributes.get(O$1.POSITION).data, f2 = t2.vertexAttributes.get(O$1.SIZE), a2 = f2 && f2.data[0], l2 = i2[0], u2 = i2[1], m2 = ((a2 + r2) / 2 + 4) * t2.screenToWorldRatio;
  let p2 = Number.MAX_VALUE, d2 = 0;
  for (let h2 = 0; h2 < c2.length - 5; h2 += 3) {
    const t3 = c2[h2], e3 = c2[h2 + 1], o3 = l2 - t3, i3 = u2 - e3, r3 = c2[h2 + 3] - t3, s3 = c2[h2 + 4] - e3, f3 = a$i((r3 * o3 + s3 * i3) / (r3 * r3 + s3 * s3), 0, 1), a3 = r3 * f3 - o3, m3 = s3 * f3 - i3, g2 = a3 * a3 + m3 * m3;
    g2 < p2 && (p2 = g2, d2 = h2 / 3);
  }
  p2 < m2 * m2 && s2(o2.dist, o2.normal, d2, false);
}
function P$3(t2) {
  const n2 = [];
  return t2.forEach((t3) => n2.push(t3)), n2;
}
const U = { multiply: 1, ignore: 2, replace: 3, tint: 4 }, W$1 = 1e3;
class t$8 {
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
function e$a(t2 = {}) {
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
function o$k(o2, t2 = true) {
  o2.attributes.add(O$1.POSITION, "vec2"), t2 && o2.varyings.add("uv", "vec2"), o2.vertex.code.add(n$9`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t2 ? n$9`uv = position * 0.5 + vec2(0.5);` : ""}
    }
  `);
}
class r$5 {
  constructor() {
    this.id = e$j();
  }
  unload() {
  }
}
var e$9;
!function(e2) {
  e2[e2.Layer = 0] = "Layer", e2[e2.Object = 1] = "Object", e2[e2.Geometry = 2] = "Geometry", e2[e2.Material = 3] = "Material", e2[e2.Texture = 4] = "Texture", e2[e2.COUNT = 5] = "COUNT";
}(e$9 || (e$9 = {}));
class a$7 {
  constructor(i2, s2, a2, c2) {
    this.primitiveIndices = i2, this._numIndexPerPrimitive = s2, this.indices = a2, this.position = c2, this.center = n$d(), this._children = void 0, e$i(i2.length >= 1), e$i(a2.length % this._numIndexPerPrimitive == 0), e$i(a2.length >= i2.length * this._numIndexPerPrimitive), e$i(c2.size === 3 || c2.size === 4);
    const { data: o2, size: d2 } = c2, l2 = i2.length;
    let M2 = d2 * a2[this._numIndexPerPrimitive * i2[0]];
    b$3.clear(), b$3.push(M2), this.bbMin = r$b(o2[M2], o2[M2 + 1], o2[M2 + 2]), this.bbMax = t$g(this.bbMin);
    for (let t2 = 0; t2 < l2; ++t2) {
      const s3 = this._numIndexPerPrimitive * i2[t2];
      for (let i3 = 0; i3 < this._numIndexPerPrimitive; ++i3) {
        M2 = d2 * a2[s3 + i3], b$3.push(M2);
        let t3 = o2[M2];
        this.bbMin[0] = Math.min(t3, this.bbMin[0]), this.bbMax[0] = Math.max(t3, this.bbMax[0]), t3 = o2[M2 + 1], this.bbMin[1] = Math.min(t3, this.bbMin[1]), this.bbMax[1] = Math.max(t3, this.bbMax[1]), t3 = o2[M2 + 2], this.bbMin[2] = Math.min(t3, this.bbMin[2]), this.bbMax[2] = Math.max(t3, this.bbMax[2]);
      }
    }
    A$4(this.center, this.bbMin, this.bbMax, 0.5), this.radius = 0.5 * Math.max(Math.max(this.bbMax[0] - this.bbMin[0], this.bbMax[1] - this.bbMin[1]), this.bbMax[2] - this.bbMin[2]);
    let m2 = this.radius * this.radius;
    for (let t2 = 0; t2 < b$3.length; ++t2) {
      M2 = b$3.getItemAt(t2);
      const i3 = o2[M2] - this.center[0], s3 = o2[M2 + 1] - this.center[1], e2 = o2[M2 + 2] - this.center[2], n2 = i3 * i3 + s3 * s3 + e2 * e2;
      if (n2 <= m2)
        continue;
      const r2 = Math.sqrt(n2), h2 = 0.5 * (r2 - this.radius);
      this.radius = this.radius + h2, m2 = this.radius * this.radius;
      const a3 = h2 / r2;
      this.center[0] += i3 * a3, this.center[1] += s3 * a3, this.center[2] += e2 * a3;
    }
    b$3.clear();
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
    if (p$6(this.bbMin, this.bbMax) > 1) {
      const i2 = A$4(n$d(), this.bbMin, this.bbMax, 0.5), s2 = this.primitiveIndices.length, n2 = new Uint8Array(s2), r2 = new Array(8);
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
        o2[t2] !== void 0 && (this._children[t2] = new a$7(o2[t2], this._numIndexPerPrimitive, this.indices, this.position));
    }
    return this._children;
  }
  static prune() {
    b$3.prune();
  }
}
const b$3 = new l$e({ deallocator: null });
function c$b(o2, r2, c2) {
  if (!o2 || !r2)
    return false;
  const { size: a2, data: f2 } = o2;
  o$q(c2, 0, 0, 0), o$q(g$6, 0, 0, 0);
  let m2 = 0, h2 = 0;
  for (let p2 = 0; p2 < r2.length - 2; p2 += 3) {
    const o3 = r2[p2 + 0] * a2, j2 = r2[p2 + 1] * a2, d2 = r2[p2 + 2] * a2;
    o$q(i$b, f2[o3 + 0], f2[o3 + 1], f2[o3 + 2]), o$q(u$8, f2[j2 + 0], f2[j2 + 1], f2[j2 + 2]), o$q(l$a, f2[d2 + 0], f2[d2 + 1], f2[d2 + 2]);
    const z2 = w$3(i$b, u$8, l$a);
    z2 ? (u$f(i$b, i$b, u$8), u$f(i$b, i$b, l$a), g$9(i$b, i$b, 1 / 3 * z2), u$f(c2, c2, i$b), m2 += z2) : (u$f(g$6, g$6, i$b), u$f(g$6, g$6, u$8), u$f(g$6, g$6, l$a), h2 += 3);
  }
  return (h2 !== 0 || m2 !== 0) && (m2 !== 0 ? (g$9(c2, c2, 1 / m2), true) : h2 !== 0 && (g$9(c2, g$6, 1 / h2), true));
}
function a$6(n2, o2, r2) {
  if (!n2 || !o2)
    return false;
  const { size: s2, data: c2 } = n2;
  o$q(r2, 0, 0, 0);
  let a2 = -1, f2 = 0;
  for (let t2 = 0; t2 < o2.length; t2++) {
    const n3 = o2[t2] * s2;
    a2 !== n3 && (r2[0] += c2[n3 + 0], r2[1] += c2[n3 + 1], r2[2] += c2[n3 + 2], f2++), a2 = n3;
  }
  return f2 > 1 && g$9(r2, r2, 1 / f2), f2 > 0;
}
function f$8(r2, s2, c2, a2) {
  if (!r2)
    return false;
  const { size: f2, data: l2 } = r2;
  o$q(a2, 0, 0, 0), o$q(g$6, 0, 0, 0);
  let m2 = 0, h2 = 0;
  const p2 = s2 ? s2.length - 1 : l2.length / f2 - 1, j2 = p2 + (c2 ? 2 : 0);
  for (let t2 = 0; t2 < j2; t2 += 2) {
    const r3 = t2 < p2 ? t2 : p2, c3 = t2 < p2 ? t2 + 1 : 0, j3 = (s2 ? s2[r3] : r3) * f2, d2 = (s2 ? s2[c3] : c3) * f2;
    i$b[0] = l2[j3 + 0], i$b[1] = l2[j3 + 1], i$b[2] = l2[j3 + 2], u$8[0] = l2[d2 + 0], u$8[1] = l2[d2 + 1], u$8[2] = l2[d2 + 2], g$9(i$b, u$f(i$b, i$b, u$8), 0.5);
    const z2 = U$1(i$b, u$8);
    z2 > 0 ? (u$f(a2, a2, g$9(i$b, i$b, z2)), m2 += z2) : (u$f(g$6, g$6, i$b), h2++);
  }
  return m2 !== 0 ? (g$9(a2, a2, 1 / m2), true) : h2 !== 0 && (g$9(a2, g$6, 1 / h2), true);
}
const i$b = n$d(), u$8 = n$d(), l$a = n$d(), g$6 = n$d();
class d$b extends r$5 {
  constructor(t2, i2 = [], n2 = a$h.Triangle, r2 = null, o2 = -1) {
    super(), this._primitiveType = n2, this.objectAndLayerIdColor = r2, this.edgeIndicesLength = o2, this.type = e$9.Geometry, this._vertexAttributes = new Map(), this._indices = new Map(), this._boundingInfo = null;
    for (const [e2, s2] of t2)
      s2 && this._vertexAttributes.set(e2, __spreadValues({}, s2));
    if (i2 == null || i2.length === 0) {
      const t3 = l$9(this._vertexAttributes), e2 = u$g(t3);
      this.edgeIndicesLength = this.edgeIndicesLength < 0 ? t3 : this.edgeIndicesLength;
      for (const i3 of this._vertexAttributes.keys())
        this._indices.set(i3, e2);
    } else
      for (const [e2, s2] of i2)
        s2 && (this._indices.set(e2, n$e(s2)), e2 === O$1.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._indices.get(e2).length : this.edgeIndicesLength));
  }
  cloneShallow() {
    const t2 = new d$b([], void 0, this._primitiveType, this.objectAndLayerIdColor, void 0), { _vertexAttributes: e2, _indices: i2 } = t2;
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
    return this.primitiveType === a$h.Triangle ? this._computeAttachmentOriginTriangles(t2) : this._computeAttachmentOriginPoints(t2);
  }
  _computeAttachmentOriginTriangles(t2) {
    const e2 = this.indices.get(O$1.POSITION), i2 = this.vertexAttributes.get(O$1.POSITION);
    return c$b(i2, e2, t2);
  }
  _computeAttachmentOriginPoints(t2) {
    const e2 = this.indices.get(O$1.POSITION), i2 = this.vertexAttributes.get(O$1.POSITION);
    return a$6(i2, e2, t2);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const t2 = this.indices.get(O$1.POSITION);
    if (!t2 || t2.length === 0)
      return null;
    const n2 = this.primitiveType === a$h.Triangle ? 3 : 1;
    e$i(t2.length % n2 == 0, "Indexing error: " + t2.length + " not divisible by " + n2);
    const s2 = u$g(t2.length / n2), r2 = this.vertexAttributes.get(O$1.POSITION);
    return r2 ? new a$7(s2, n2, t2, r2) : null;
  }
}
function l$9(t2) {
  const e2 = t2.values().next().value;
  return e2 == null ? 0 : e2.data.length / e2.size;
}
class d$a extends r$5 {
  constructor(e2, r2) {
    super(), this.type = e$9.Material, this.supportsEdges = false, this._visible = true, this._renderPriority = 0, this._insertOrder = 0, this._vertexAttributeLocations = E$4, this._parameters = S$5(e2, r2), this.validateParameters(this._parameters);
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
    B$2(this._parameters, e2) && (this.validateParameters(this._parameters), r2 && this.parametersChanged());
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
    r$8(this.repository) && this.repository.materialChanged(this);
  }
}
var o$j;
!function(e2) {
  e2[e2.Occlude = 1] = "Occlude", e2[e2.Transparent = 2] = "Transparent", e2[e2.OccludeAndTransparent = 4] = "OccludeAndTransparent", e2[e2.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", e2[e2.Opaque = 16] = "Opaque";
}(o$j || (o$j = {}));
class h$7 extends t$b {
  constructor() {
    super(...arguments), this.renderOccluded = o$j.Occlude;
  }
}
var h$6;
!function(h2) {
  h2[h2.Color = 0] = "Color", h2[h2.Depth = 1] = "Depth", h2[h2.Normal = 2] = "Normal", h2[h2.Shadow = 3] = "Shadow", h2[h2.ShadowHighlight = 4] = "ShadowHighlight", h2[h2.ShadowExludeHighlight = 5] = "ShadowExludeHighlight", h2[h2.Highlight = 6] = "Highlight", h2[h2.Alpha = 7] = "Alpha", h2[h2.ObjectAndLayerIdColor = 8] = "ObjectAndLayerIdColor", h2[h2.COUNT = 9] = "COUNT";
}(h$6 || (h$6 = {}));
class t$7 {
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
    return O$2.LOADED;
  }
}
class v$5 extends h$7 {
  constructor() {
    super(...arguments), this.vvSizeEnabled = false, this.vvSizeMinSize = r$b(1, 1, 1), this.vvSizeMaxSize = r$b(100, 100, 100), this.vvSizeOffset = r$b(0, 0, 0), this.vvSizeFactor = r$b(1, 1, 1), this.vvSizeValue = r$b(1, 1, 1), this.vvColorEnabled = false, this.vvColorValues = [0, 0, 0, 0, 0, 0, 0, 0], this.vvColorColors = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], this.vvOpacityEnabled = false, this.vvOpacityValues = [0, 0, 0, 0, 0, 0, 0, 0], this.vvOpacityOpacities = [1, 1, 1, 1, 1, 1, 1, 1], this.vvSymbolAnchor = [0, 0, 0], this.vvSymbolRotationMatrix = e$k();
  }
}
const o$i = 8;
class s$5 extends t$8 {
  constructor() {
    super(...arguments), this.hasWebGL2Context = false;
  }
}
e$l([e$a({ constValue: true })], s$5.prototype, "hasSliceHighlight", void 0), e$l([e$a({ constValue: false })], s$5.prototype, "hasSliceInVertexProgram", void 0), e$l([e$a({ constValue: false })], s$5.prototype, "instancedDoublePrecision", void 0), e$l([e$a({ constValue: false })], s$5.prototype, "useLegacyTerrainShading", void 0), e$l([e$a({ constValue: false })], s$5.prototype, "hasModelTransformation", void 0), e$l([e$a({ constValue: a$c.Pass })], s$5.prototype, "pbrTextureBindType", void 0), e$l([e$a()], s$5.prototype, "hasWebGL2Context", void 0);
function o$h(o2) {
  o2.attributes.add(O$1.POSITION, "vec3"), o2.vertex.code.add(n$9`vec3 positionModel() { return position; }`);
}
function c$a({ code: c2 }, i2) {
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
function i$a(e2) {
  return !!has("force-double-precision-obfuscation") || e2.driverTest.doublePrecisionRequiresObfuscation;
}
class o$g extends i$f {
  constructor(r2, o2) {
    super(r2, "vec3", a$c.Draw, (e2, s2, t2, i2) => e2.setUniform3fv(r2, o2(s2, t2, i2)));
  }
}
class o$f extends i$f {
  constructor(r2, o2) {
    super(r2, "mat3", a$c.Draw, (e2, s2, t2) => e2.setUniformMatrix3fv(r2, o2(s2, t2)));
  }
}
class e$8 extends i$f {
  constructor(r2, e2) {
    super(r2, "mat3", a$c.Pass, (s2, o2, t2) => s2.setUniformMatrix3fv(r2, e2(o2, t2)));
  }
}
function F(r2, o2) {
  r2.include(o$h);
  const e2 = r2.vertex;
  e2.include(c$a, o2), r2.varyings.add("vPositionWorldCameraRelative", "vec3"), r2.varyings.add("vPosition_view", "vec3"), e2.uniforms.add([new e$d("transformWorldFromViewTH", (r3) => r3.transformWorldFromViewTH), new e$d("transformWorldFromViewTL", (r3) => r3.transformWorldFromViewTL), new e$8("transformViewFromCameraRelativeRS", (r3) => r3.transformViewFromCameraRelativeRS), new e$b("transformProjFromView", (r3) => r3.transformProjFromView), new o$f("transformWorldFromModelRS", (r3) => r3.transformWorldFromModelRS), new o$g("transformWorldFromModelTH", (r3) => r3.transformWorldFromModelTH), new o$g("transformWorldFromModelTL", (r3) => r3.transformWorldFromModelTL)]), e2.code.add(n$9`vec3 positionWorldCameraRelative() {
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
class c$9 extends t$b {
  constructor() {
    super(...arguments), this.transformWorldFromViewTH = n$d(), this.transformWorldFromViewTL = n$d(), this.transformViewFromCameraRelativeRS = e$k(), this.transformProjFromView = e$h();
  }
}
class W extends t$b {
  constructor() {
    super(...arguments), this.transformWorldFromModelRS = e$k(), this.transformWorldFromModelTH = n$f(), this.transformWorldFromModelTL = n$f();
  }
}
function t$6(e2) {
  e2.varyings.add("linearDepth", "float");
}
function i$9(e2) {
  e2.vertex.uniforms.add(new e$f("nearFar", (e3, r2) => r2.camera.nearFar));
}
function n$6(e2) {
  e2.vertex.code.add(n$9`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);
}
function d$9(a2, d2) {
  const { vertex: s2 } = a2;
  switch (d2.output) {
    case h$6.Color:
      if (d2.receiveShadows)
        return t$6(a2), void s2.code.add(n$9`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);
      break;
    case h$6.Depth:
    case h$6.Shadow:
    case h$6.ShadowHighlight:
    case h$6.ShadowExludeHighlight:
      return a2.include(F, d2), t$6(a2), i$9(a2), n$6(a2), void s2.code.add(n$9`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);
  }
  s2.code.add(n$9`void forwardLinearDepth() {}`);
}
function u$7(s2, i2) {
  H(s2, i2, [new o$g("slicePlaneOrigin", (e2, s3) => b$2(i2, e2, s3)), new o$g("slicePlaneBasis1", (s3, a2) => {
    var _a;
    return B$1(i2, s3, a2, (_a = e$m(a2.slicePlane)) == null ? void 0 : _a.basis1);
  }), new o$g("slicePlaneBasis2", (s3, a2) => {
    var _a;
    return B$1(i2, s3, a2, (_a = e$m(a2.slicePlane)) == null ? void 0 : _a.basis2);
  })]);
}
function H(e2, s2, i2) {
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
function g$5(e2, s2, i2) {
  return e2.instancedDoublePrecision ? o$q(S$4, i2.camera.viewInverseTransposeMatrix[3], i2.camera.viewInverseTransposeMatrix[7], i2.camera.viewInverseTransposeMatrix[11]) : s2.slicePlaneLocalOrigin;
}
function I$2(e2, s2) {
  return r$8(e2) ? e$n(L$2, s2.origin, e2) : s2.origin;
}
function v$4(e2, s2, o2) {
  return e2.hasSliceTranslatedView ? r$8(s2) ? c$g(T$2, o2.camera.viewMatrix, s2) : o2.camera.viewMatrix : null;
}
function b$2(e2, a2, o2) {
  if (t$d(o2.slicePlane))
    return f$f;
  const r2 = g$5(e2, a2, o2), l2 = I$2(r2, o2.slicePlane), t2 = v$4(e2, r2, o2);
  return r$8(t2) ? O$3(L$2, l2, t2) : l2;
}
function B$1(e2, a2, o2, t2) {
  if (t$d(t2) || t$d(o2.slicePlane))
    return f$f;
  const f2 = g$5(e2, a2, o2), d2 = I$2(f2, o2.slicePlane), _2 = v$4(e2, f2, o2);
  return r$8(_2) ? (u$f(G$1, t2, d2), O$3(L$2, d2, _2), O$3(G$1, G$1, _2), e$n(G$1, G$1, L$2)) : t2;
}
const S$4 = n$d(), L$2 = n$d(), G$1 = n$d(), T$2 = e$h();
function d$8(d2, t2) {
  const a2 = t2.output === h$6.ObjectAndLayerIdColor, n2 = t2.objectAndLayerIdColorInstanced;
  a2 && (d2.varyings.add("objectAndLayerIdColorVarying", "vec4"), n2 ? d2.attributes.add(O$1.OBJECTANDLAYERIDCOLOR_INSTANCED, "vec4") : d2.attributes.add(O$1.OBJECTANDLAYERIDCOLOR, "vec4")), d2.vertex.code.add(n$9`
     void forwardObjectAndLayerIdColor() {
      ${a2 ? n2 ? n$9`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;` : n$9`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;` : n$9``} }`), d2.fragment.code.add(n$9`
      void outputObjectAndLayerIdColor() {
        ${a2 ? n$9`gl_FragColor = objectAndLayerIdColorVarying;` : n$9``} }`);
}
class e$7 extends i$f {
  constructor(r2, e2, o2) {
    super(r2, "vec4", a$c.Pass, (s2, o3, t2) => s2.setUniform4fv(r2, e2(o3, t2)), o2);
  }
}
class o$e extends i$f {
  constructor(r2, o2, e2) {
    super(r2, "float", a$c.Pass, (s2, e3, t2) => s2.setUniform1fv(r2, o2(e3, t2)), e2);
  }
}
function o$d(o2, l2) {
  switch (o2.fragment.include(a$b), l2.output) {
    case h$6.Shadow:
    case h$6.ShadowHighlight:
    case h$6.ShadowExludeHighlight:
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
    case h$6.Depth:
      o2.fragment.code.add(n$9`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);
  }
}
class o$c extends i$f {
  constructor(r2, o2) {
    super(r2, "mat4", a$c.Draw, (e2, s2, t2) => e2.setUniformMatrix4fv(r2, o2(s2, t2)));
  }
}
function c$8(r2, e2) {
  e2.instancedDoublePrecision ? r2.constants.add("cameraPosition", "vec3", f$f) : r2.uniforms.add(new o$g("cameraPosition", (r3, e3) => o$q(w$2, e3.camera.viewInverseTransposeMatrix[3] - r3.origin[0], e3.camera.viewInverseTransposeMatrix[7] - r3.origin[1], e3.camera.viewInverseTransposeMatrix[11] - r3.origin[2])));
}
function v$3(e2, i2) {
  if (!i2.instancedDoublePrecision)
    return void e2.uniforms.add([new e$b("proj", (r2, e3) => e3.camera.projectionMatrix), new o$c("view", (e3, a2) => c$g(f$7, a2.camera.viewMatrix, e3.origin)), new o$g("localOrigin", (r2) => r2.origin)]);
  const o2 = (r2) => o$q(w$2, r2.camera.viewInverseTransposeMatrix[3], r2.camera.viewInverseTransposeMatrix[7], r2.camera.viewInverseTransposeMatrix[11]);
  e2.uniforms.add([new e$b("proj", (r2, e3) => e3.camera.projectionMatrix), new e$b("view", (e3, a2) => c$g(f$7, a2.camera.viewMatrix, o2(a2))), new e$d("localOrigin", (r2, e3) => o2(e3))]);
}
const f$7 = e$o(), w$2 = n$d();
function d$7(r2) {
  r2.uniforms.add(new e$b("viewNormal", (r3, e2) => e2.camera.viewInverseTransposeMatrix));
}
class i$8 extends t$b {
  constructor() {
    super(...arguments), this.color = r$c(1, 1, 1, 1);
  }
}
function l$8() {
  const e2 = new o$m();
  return e2.include(o$k), e2.fragment.uniforms.add([new f$c("tex", (e3) => e3.texture), new e$e("uColor", (e3) => e3.color)]), e2.fragment.code.add(n$9`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`), e2;
}
const d$6 = Object.freeze(Object.defineProperty({ __proto__: null, TextureOnlyPassParameters: i$8, build: l$8 }, Symbol.toStringTag, { value: "Module" }));
function s$4() {
  if (t$d(i$7)) {
    const t2 = (t3) => a$j(`esri/libs/basisu/${t3}`);
    i$7 = import("./basis_transcoder.js").then((e2) => e2.b).then(({ default: e2 }) => e2({ locateFile: t2 }).then((e3) => (e3.initializeBasis(), delete e3.then, e3)));
  }
  return i$7;
}
let i$7;
var _$3;
!function(_2) {
  _2[_2.ETC1_RGB = 0] = "ETC1_RGB", _2[_2.ETC2_RGBA = 1] = "ETC2_RGBA", _2[_2.BC1_RGB = 2] = "BC1_RGB", _2[_2.BC3_RGBA = 3] = "BC3_RGBA", _2[_2.BC4_R = 4] = "BC4_R", _2[_2.BC5_RG = 5] = "BC5_RG", _2[_2.BC7_M6_RGB = 6] = "BC7_M6_RGB", _2[_2.BC7_M5_RGBA = 7] = "BC7_M5_RGBA", _2[_2.PVRTC1_4_RGB = 8] = "PVRTC1_4_RGB", _2[_2.PVRTC1_4_RGBA = 9] = "PVRTC1_4_RGBA", _2[_2.ASTC_4x4_RGBA = 10] = "ASTC_4x4_RGBA", _2[_2.ATC_RGB = 11] = "ATC_RGB", _2[_2.ATC_RGBA = 12] = "ATC_RGBA", _2[_2.FXT1_RGB = 17] = "FXT1_RGB", _2[_2.PVRTC2_4_RGB = 18] = "PVRTC2_4_RGB", _2[_2.PVRTC2_4_RGBA = 19] = "PVRTC2_4_RGBA", _2[_2.ETC2_EAC_R11 = 20] = "ETC2_EAC_R11", _2[_2.ETC2_EAC_RG11 = 21] = "ETC2_EAC_RG11", _2[_2.RGBA32 = 13] = "RGBA32", _2[_2.RGB565 = 14] = "RGB565", _2[_2.BGR565 = 15] = "BGR565", _2[_2.RGBA4444 = 16] = "RGBA4444";
}(_$3 || (_$3 = {}));
let g$4 = null, l$7 = null;
async function c$7() {
  return t$d(l$7) && (l$7 = s$4(), g$4 = await l$7), l$7;
}
function u$6(t2, n2) {
  if (t$d(g$4))
    return t2.byteLength;
  const r2 = new g$4.BasisFile(new Uint8Array(t2)), s2 = T$1(r2) ? E$1(r2.getNumLevels(0), r2.getHasAlpha(), r2.getImageWidth(0, 0), r2.getImageHeight(0, 0), n2) : 0;
  return r2.close(), r2.delete(), s2;
}
function m$7(t2, n2) {
  if (t$d(g$4))
    return t2.byteLength;
  const r2 = new g$4.KTX2File(new Uint8Array(t2)), s2 = _$2(r2) ? E$1(r2.getLevels(), r2.getHasAlpha(), r2.getWidth(), r2.getHeight(), n2) : 0;
  return r2.close(), r2.delete(), s2;
}
function E$1(e2, t2, n2, s2, i2) {
  const a2 = _$6(t2 ? u$h.COMPRESSED_RGBA8_ETC2_EAC : u$h.COMPRESSED_RGB8_ETC2), g2 = i2 && e2 > 1 ? (4 ** e2 - 1) / (3 * 4 ** (e2 - 1)) : 1;
  return Math.ceil(n2 * s2 * a2 * g2);
}
function T$1(e2) {
  return e2.getNumImages() >= 1 && !e2.isUASTC();
}
function _$2(e2) {
  return e2.getFaces() >= 1 && e2.isETC1S();
}
async function h$5(t2, n2, r2) {
  t$d(g$4) && (g$4 = await c$7());
  const s2 = new g$4.BasisFile(new Uint8Array(r2));
  if (!T$1(s2))
    return null;
  s2.startTranscoding();
  const i2 = p$4(t2, n2, s2.getNumLevels(0), s2.getHasAlpha(), s2.getImageWidth(0, 0), s2.getImageHeight(0, 0), (e2, t3) => s2.getImageTranscodedSizeInBytes(0, e2, t3), (e2, t3, n3) => s2.transcodeImage(n3, 0, e2, t3, 0, 0));
  return s2.close(), s2.delete(), i2;
}
async function A$1(t2, n2, r2) {
  t$d(g$4) && (g$4 = await c$7());
  const s2 = new g$4.KTX2File(new Uint8Array(r2));
  if (!_$2(s2))
    return null;
  s2.startTranscoding();
  const i2 = p$4(t2, n2, s2.getLevels(), s2.getHasAlpha(), s2.getWidth(), s2.getHeight(), (e2, t3) => s2.getImageTranscodedSizeInBytes(e2, 0, 0, t3), (e2, t3, n3) => s2.transcodeImage(n3, e2, 0, 0, t3, 0, -1, -1));
  return s2.close(), s2.delete(), i2;
}
function p$4(e2, t2, o2, g2, l2, c2, u2, m2) {
  const { compressedTextureETC: E2, compressedTextureS3TC: T2 } = e2.capabilities, [_2, h2] = E2 ? g2 ? [_$3.ETC2_RGBA, u$h.COMPRESSED_RGBA8_ETC2_EAC] : [_$3.ETC1_RGB, u$h.COMPRESSED_RGB8_ETC2] : T2 ? g2 ? [_$3.BC3_RGBA, u$h.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [_$3.BC1_RGB, u$h.COMPRESSED_RGB_S3TC_DXT1_EXT] : [_$3.RGBA32, P$4.RGBA], A2 = t2.hasMipmap ? o2 : Math.min(1, o2), p2 = [];
  for (let n2 = 0; n2 < A2; n2++)
    p2.push(new Uint8Array(u2(n2, _2))), m2(n2, _2, p2[n2]);
  const C2 = p2.length > 1, d2 = C2 ? L$4.LINEAR_MIPMAP_LINEAR : L$4.LINEAR, R2 = __spreadProps(__spreadValues({}, t2), { samplingMode: d2, hasMipmap: C2, internalFormat: h2, width: l2, height: c2 });
  return new E$7(e2, R2, { type: "compressed", levels: p2 });
}
const i$6 = s$9.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"), s$3 = 542327876, l$6 = 131072, m$6 = 4;
function u$5(e2) {
  return e2.charCodeAt(0) + (e2.charCodeAt(1) << 8) + (e2.charCodeAt(2) << 16) + (e2.charCodeAt(3) << 24);
}
function c$6(e2) {
  return String.fromCharCode(255 & e2, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255);
}
const h$4 = u$5("DXT1"), p$3 = u$5("DXT3"), d$5 = u$5("DXT5"), g$3 = 31, f$6 = 0, C = 1, w$1 = 2, D = 3, _$1 = 4, T = 7, A = 20, E = 21;
function S$3(e2, r2, n2) {
  var _a;
  const { textureData: i2, internalFormat: s2, width: l2, height: m2 } = f$g(M$2(n2, (_a = r2.hasMipmap) != null ? _a : false));
  return r2.samplingMode = i2.levels.length > 1 ? L$4.LINEAR_MIPMAP_LINEAR : L$4.LINEAR, r2.hasMipmap = i2.levels.length > 1, r2.internalFormat = s2, r2.width = l2, r2.height = m2, new E$7(e2, r2, i2);
}
function M$2(e2, t2) {
  const o2 = new Int32Array(e2, 0, g$3);
  if (o2[f$6] !== s$3)
    return i$6.error("Invalid magic number in DDS header"), null;
  if (!(o2[A] & m$6))
    return i$6.error("Unsupported format, must contain a FourCC code"), null;
  const a2 = o2[E];
  let u2, S2;
  switch (a2) {
    case h$4:
      u2 = 8, S2 = u$h.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case p$3:
      u2 = 16, S2 = u$h.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case d$5:
      u2 = 16, S2 = u$h.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return i$6.error("Unsupported FourCC code:", c$6(a2)), null;
  }
  let M2 = 1, R2 = o2[_$1], b2 = o2[D];
  (3 & R2) == 0 && (3 & b2) == 0 || (i$6.warn("Rounding up compressed texture size to nearest multiple of 4."), R2 = R2 + 3 & -4, b2 = b2 + 3 & -4);
  const x2 = R2, X2 = b2;
  let I2, j2;
  o2[w$1] & l$6 && t2 !== false && (M2 = Math.max(1, o2[T])), M2 === 1 || c$h(R2) && c$h(b2) || (i$6.warn("Ignoring mipmaps of non power of two sized compressed texture."), M2 = 1);
  let v2 = o2[C] + 4;
  const F2 = [];
  for (let r2 = 0; r2 < M2; ++r2)
    j2 = (R2 + 3 >> 2) * (b2 + 3 >> 2) * u2, I2 = new Uint8Array(e2, v2, j2), F2.push(I2), v2 += j2, R2 = Math.max(1, R2 >> 1), b2 = Math.max(1, b2 >> 1);
  return { textureData: { type: "compressed", levels: F2 }, internalFormat: S2, width: x2, height: X2 };
}
class L$1 extends r$5 {
  constructor(t2, e2) {
    super(), this._data = t2, this.type = e$9.Texture, this._glTexture = null, this._powerOfTwoStretchInfo = null, this._loadingPromise = null, this._loadingController = null, this.events = new n$g(), this._passParameters = new i$8(), this.params = e2 || {}, this.params.mipmap = this.params.mipmap !== false, this.params.noUnpackFlip = this.params.noUnpackFlip || false, this.params.preMultiplyAlpha = this.params.preMultiplyAlpha || false, this.params.wrap = this.params.wrap || { s: D$1.REPEAT, t: D$1.REPEAT }, this.params.powerOfTwoResizeMode = this.params.powerOfTwoResizeMode || c$i.STRETCH, this.estimatedTexMemRequired = L$1._estimateTexMemRequired(this._data, this.params), this._startPreload();
  }
  _startPreload() {
    const t2 = this._data;
    t$d(t2) || (t2 instanceof HTMLVideoElement ? this._startPreloadVideoElement(t2) : t2 instanceof HTMLImageElement && this._startPreloadImageElement(t2));
  }
  _startPreloadVideoElement(t2) {
    if (!(V$1(t2.src) || t2.preload === "auto" && t2.crossOrigin)) {
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
    X(t2.src) || V$1(t2.src) || t2.crossOrigin || (t2.crossOrigin = "anonymous", t2.src = t2.src);
  }
  static _getDataDimensions(t2) {
    return t2 instanceof HTMLVideoElement ? { width: t2.videoWidth, height: t2.videoHeight } : t2;
  }
  static _estimateTexMemRequired(t2, e2) {
    if (t$d(t2))
      return 0;
    if (o$r(t2) || e$p(t2))
      return e2.encoding === L$1.KTX2_ENCODING ? m$7(t2, e2.mipmap) : e2.encoding === L$1.BASIS_ENCODING ? u$6(t2, e2.mipmap) : t2.byteLength;
    const { width: r2, height: i2 } = t2 instanceof Image || t2 instanceof ImageData || t2 instanceof HTMLCanvasElement || t2 instanceof HTMLVideoElement ? L$1._getDataDimensions(t2) : e2;
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
    return { target: M$4.TEXTURE_2D, pixelFormat: P$4.RGBA, dataType: G$2.UNSIGNED_BYTE, wrapMode: this.params.wrap, flipped: !this.params.noUnpackFlip, samplingMode: this.params.mipmap ? L$4.LINEAR_MIPMAP_LINEAR : L$4.LINEAR, hasMipmap: this.params.mipmap, preMultiplyAlpha: this.params.preMultiplyAlpha, maxAnisotropy: (_a = this.params.maxAnisotropy) != null ? _a : this.params.mipmap ? t2.parameters.maxMaxAnisotropy : 1 };
  }
  get glTexture() {
    return this._glTexture;
  }
  load(t2, e2) {
    if (r$8(this._glTexture))
      return this._glTexture;
    if (r$8(this._loadingPromise))
      return this._loadingPromise;
    const r2 = this._data;
    return t$d(r2) ? (this._glTexture = new E$7(t2, this._createDescriptor(t2), null), this._glTexture) : typeof r2 == "string" ? this._loadFromURL(t2, e2, r2) : r2 instanceof Image ? this._loadFromImageElement(t2, e2, r2) : r2 instanceof HTMLVideoElement ? this._loadFromVideoElement(t2, e2, r2) : r2 instanceof ImageData || r2 instanceof HTMLCanvasElement ? this._loadFromImage(t2, r2, e2) : (o$r(r2) || e$p(r2)) && this.params.encoding === L$1.DDS_ENCODING ? (this._data = void 0, this._loadFromDDSData(t2, r2)) : (o$r(r2) || e$p(r2)) && this.params.encoding === L$1.KTX2_ENCODING ? (this._data = void 0, this._loadFromKTX2(t2, r2)) : (o$r(r2) || e$p(r2)) && this.params.encoding === L$1.BASIS_ENCODING ? (this._data = void 0, this._loadFromBasis(t2, r2)) : e$p(r2) ? this._loadFromPixelData(t2, r2) : o$r(r2) ? this._loadFromPixelData(t2, new Uint8Array(r2)) : null;
  }
  get requiresFrameUpdates() {
    return this._data instanceof HTMLVideoElement;
  }
  frameUpdate(t2, e2, r2) {
    if (!(this._data instanceof HTMLVideoElement) || t$d(this._glTexture))
      return r2;
    if (this._data.readyState < G.HAVE_CURRENT_DATA || r2 === this._data.currentTime)
      return r2;
    if (r$8(this._powerOfTwoStretchInfo)) {
      const { framebuffer: r3, vao: i2, sourceTexture: s2 } = this._powerOfTwoStretchInfo;
      s2.setData(this._data), this._drawStretchedTexture(t2, e2, r3, i2, s2, this._glTexture);
    } else {
      const { videoWidth: t3, videoHeight: e3 } = this._data, { width: r3, height: i2 } = this._glTexture.descriptor;
      t3 !== r3 || e3 !== i2 ? this._glTexture.updateData(0, 0, 0, Math.min(t3, r3), Math.min(e3, i2), this._data) : this._glTexture.setData(this._data);
    }
    return this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this.params.updateCallback && this.params.updateCallback(), this._data.currentTime;
  }
  _loadFromDDSData(t2, e2) {
    return this._glTexture = S$3(t2, this._createDescriptor(t2), e2), this._glTexture;
  }
  _loadFromKTX2(t2, e2) {
    return this._loadAsync(() => A$1(t2, this._createDescriptor(t2), e2).then((t3) => (this._glTexture = t3, t3)));
  }
  _loadFromBasis(t2, e2) {
    return this._loadAsync(() => h$5(t2, this._createDescriptor(t2), e2).then((t3) => (this._glTexture = t3, t3)));
  }
  _loadFromPixelData(t2, e2) {
    e$i(this.params.width > 0 && this.params.height > 0);
    const r2 = this._createDescriptor(t2);
    return r2.pixelFormat = this.params.components === 1 ? P$4.LUMINANCE : this.params.components === 3 ? P$4.RGB : P$4.RGBA, r2.width = this.params.width, r2.height = this.params.height, this._glTexture = new E$7(t2, r2, e2), this._glTexture;
  }
  _loadFromURL(t2, e2, r2) {
    return this._loadAsync(async (i2) => {
      const s2 = await t$h(r2, { signal: i2 });
      return f$h(i2), this._loadFromImage(t2, s2, e2);
    });
  }
  _loadFromImageElement(t2, e2, r2) {
    return r2.complete ? this._loadFromImage(t2, r2, e2) : this._loadAsync(async (i2) => {
      const s2 = await c$j(r2, r2.src, false, i2);
      return f$h(i2), this._loadFromImage(t2, s2, e2);
    });
  }
  _loadFromVideoElement(t2, e2, r2) {
    return r2.readyState >= G.HAVE_CURRENT_DATA ? this._loadFromImage(t2, r2, e2) : this._loadFromVideoElementAsync(t2, e2, r2);
  }
  _loadFromVideoElementAsync(t2, r2, i2) {
    return this._loadAsync((s2) => new Promise((a2, o2) => {
      const m2 = () => {
        i2.removeEventListener("loadeddata", p2), i2.removeEventListener("error", d2), h$c(_2);
      }, p2 = () => {
        i2.readyState >= G.HAVE_CURRENT_DATA && (m2(), a2(this._loadFromImage(t2, i2, r2)));
      }, d2 = (t3) => {
        m2(), o2(t3 || new s$a("Failed to load video"));
      };
      i2.addEventListener("loadeddata", p2), i2.addEventListener("error", d2);
      const _2 = v$7(s2, () => d2(a$k()));
    }));
  }
  _loadFromImage(t2, e2, r2) {
    const s2 = L$1._getDataDimensions(e2);
    this.params.width = s2.width, this.params.height = s2.height;
    const a2 = this._createDescriptor(t2);
    return a2.pixelFormat = this.params.components === 3 ? P$4.RGB : P$4.RGBA, !this._requiresPowerOfTwo(t2, a2) || c$h(s2.width) && c$h(s2.height) ? (a2.width = s2.width, a2.height = s2.height, this._glTexture = new E$7(t2, a2, e2), this._glTexture) : (this._glTexture = this._makePowerOfTwoTexture(t2, e2, s2, a2, r2), this._glTexture);
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
    const r2 = D$1.CLAMP_TO_EDGE, i2 = typeof e2.wrapMode == "number" ? e2.wrapMode === r2 : e2.wrapMode.s === r2 && e2.wrapMode.t === r2;
    return !n$h(t2.gl) && (e2.hasMipmap || !i2);
  }
  _makePowerOfTwoTexture(e2, r2, i2, a2, o2) {
    const { width: n2, height: m2 } = i2, h2 = i$g(n2), l2 = i$g(m2);
    let p2;
    switch (a2.width = h2, a2.height = l2, this.params.powerOfTwoResizeMode) {
      case c$i.PAD:
        a2.textureCoordinateScaleFactor = [n2 / h2, m2 / l2], p2 = new E$7(e2, a2), p2.updateData(0, 0, 0, n2, m2, r2);
        break;
      case c$i.STRETCH:
      case null:
      case void 0:
        p2 = this._stretchToPowerOfTwo(e2, r2, a2, o2());
        break;
      default:
        n$i(this.params.powerOfTwoResizeMode);
    }
    return a2.hasMipmap && p2.generateMipmap(), p2;
  }
  _stretchToPowerOfTwo(t2, e2, r2, i2) {
    const s2 = new E$7(t2, r2), a2 = new x$5(t2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$2.NONE }, s2), o2 = new E$7(t2, { target: M$4.TEXTURE_2D, pixelFormat: r2.pixelFormat, dataType: G$2.UNSIGNED_BYTE, wrapMode: D$1.CLAMP_TO_EDGE, samplingMode: L$4.LINEAR, flipped: !!r2.flipped, maxAnisotropy: 8, preMultiplyAlpha: r2.preMultiplyAlpha }, e2), n2 = u$b(t2), m2 = t2.getBoundFramebufferObject();
    return this._drawStretchedTexture(t2, i2, a2, n2, o2, s2), this.requiresFrameUpdates ? this._powerOfTwoStretchInfo = { vao: n2, sourceTexture: o2, framebuffer: a2 } : (n2.dispose(true), o2.dispose(), a2.detachColorTexture(), a2.dispose()), t2.bindFramebuffer(m2), s2;
  }
  _drawStretchedTexture(t2, e2, r2, i2, s2, a2) {
    this._passParameters.texture = s2, t2.bindFramebuffer(r2);
    const o2 = t2.getViewport();
    t2.setViewport(0, 0, a2.descriptor.width, a2.descriptor.height), t2.bindTechnique(e2, this._passParameters, null), t2.bindVAO(i2), t2.drawArrays(E$5.TRIANGLE_STRIP, 0, n$j(i2, "geometry")), t2.bindFramebuffer(null), t2.setViewport(o2.x, o2.y, o2.width, o2.height), this._passParameters.texture = null;
  }
  unload() {
    if (r$8(this._powerOfTwoStretchInfo)) {
      const { framebuffer: t2, vao: e2, sourceTexture: r2 } = this._powerOfTwoStretchInfo;
      e2.dispose(true), r2.dispose(), t2.dispose(), this._glTexture = null, this._powerOfTwoStretchInfo = null;
    }
    if (r$8(this._glTexture) && (this._glTexture.dispose(), this._glTexture = null), r$8(this._loadingController)) {
      const t2 = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, t2.abort();
    }
    this.events.emit("unloaded");
  }
}
var G;
L$1.DDS_ENCODING = "image/vnd-ms.dds", L$1.KTX2_ENCODING = "image/ktx2", L$1.BASIS_ENCODING = "image/x.basis", function(t2) {
  t2[t2.HAVE_NOTHING = 0] = "HAVE_NOTHING", t2[t2.HAVE_METADATA = 1] = "HAVE_METADATA", t2[t2.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", t2[t2.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", t2[t2.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
}(G || (G = {}));
function n$5(n2, o2) {
  o2.hasMultipassTerrain && (n2.fragment.include(a$a), n2.fragment.uniforms.add(new f$c("terrainDepthTexture", (e2, r2) => r2.multipassTerrain.linearDepthTexture)), n2.fragment.uniforms.add(new e$f("nearFar", (e2, r2) => r2.camera.nearFar)), n2.fragment.uniforms.add(new e$f("inverseViewport", (e2, r2) => r2.inverseViewport)), n2.fragment.code.add(n$9`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o2.cullAboveGround ? ">" : "<="} terrainDepth){
        discard;
      }
    }
  `));
}
class o$b {
  constructor() {
    this.enabled = false, this.cullAboveGround = false;
  }
}
function t$5(t2) {
  t2.vertex.code.add(n$9`const float PI = 3.141592653589793;`), t2.fragment.code.add(n$9`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
}
const o$a = 0.1, t$4 = 1e-3;
function e$6(e2) {
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
const i$5 = { func: I$4.LESS }, s$2 = { func: I$4.ALWAYS }, e$5 = { mask: 255 }, l$5 = { mask: 0 }, f$5 = { function: { func: I$4.ALWAYS, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.ZERO } }, o$9 = { function: { func: I$4.ALWAYS, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.REPLACE } }, P$2 = { function: { func: I$4.EQUAL, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.KEEP } }, m$5 = { function: { func: I$4.NOTEQUAL, ref: t$i.OutlineVisualElementMask, mask: t$i.OutlineVisualElementMask }, operation: { fail: O$4.KEEP, zFail: O$4.KEEP, zPass: O$4.KEEP } };
function c$5(e2) {
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
function t$3(e2) {
  e2.uniforms.add(new e$e("screenSizePerspective", (e3) => o$8(e3.screenSizePerspective)));
}
function i$4(e2) {
  e2.uniforms.add(new e$e("screenSizePerspectiveAlignment", (e3) => o$8(e3.screenSizePerspectiveAlignment || e3.screenSizePerspective)));
}
function o$8(a2) {
  return r$a(n$4, a2.parameters.divisor, a2.parameters.offset, a2.parameters.minPixelSize, a2.paddingPixelsOverride);
}
const n$4 = n$a();
function a$5(e2, r2) {
  const c2 = e2.vertex;
  r2.hasVerticalOffset ? (f$4(c2), r2.hasScreenSizePerspective && (e2.include(c$5), i$4(c2), c$8(e2.vertex, r2)), c2.code.add(n$9`
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
const i$3 = n$a();
function f$4(r2) {
  r2.uniforms.add(new e$e("verticalOffset", (r3, t2) => {
    const { minWorldLength: l2, maxWorldLength: o2, screenLength: c2 } = r3.verticalOffset, s2 = Math.tan(0.5 * t2.camera.fovY) / (0.5 * t2.camera.fullViewport[3]), a2 = t2.camera.pixelRatio || 1;
    return r$a(i$3, c2 * a2, s2, l2, o2);
  }));
}
class h$3 extends t$7 {
  constructor(t2) {
    super(t2), this._numLoading = 0, this._disposed = false, this._textureRepository = t2.textureRep, this._textureId = t2.textureId, this._acquire(t2.textureId, (t3) => this._texture = t3), this._acquire(t2.normalTextureId, (t3) => this._textureNormal = t3), this._acquire(t2.emissiveTextureId, (t3) => this._textureEmissive = t3), this._acquire(t2.occlusionTextureId, (t3) => this._textureOcclusion = t3), this._acquire(t2.metallicRoughnessTextureId, (t3) => this._textureMetallicRoughness = t3);
  }
  dispose() {
    this._texture = w$4(this._texture), this._textureNormal = w$4(this._textureNormal), this._textureEmissive = w$4(this._textureEmissive), this._textureOcclusion = w$4(this._textureOcclusion), this._textureMetallicRoughness = w$4(this._textureMetallicRoughness), this._disposed = true;
  }
  ensureResources(t2) {
    return this._numLoading === 0 ? O$2.LOADED : O$2.LOADING;
  }
  get textureBindParameters() {
    return new o$7(r$8(this._texture) ? this._texture.glTexture : null, r$8(this._textureNormal) ? this._textureNormal.glTexture : null, r$8(this._textureEmissive) ? this._textureEmissive.glTexture : null, r$8(this._textureOcclusion) ? this._textureOcclusion.glTexture : null, r$8(this._textureMetallicRoughness) ? this._textureMetallicRoughness.glTexture : null);
  }
  updateTexture(e2) {
    (t$d(this._texture) || e2 !== this._texture.id) && (this._texture = w$4(this._texture), this._textureId = e2, this._acquire(this._textureId, (t2) => this._texture = t2));
  }
  _acquire(e2, r2) {
    if (t$d(e2))
      return void r2(null);
    const u2 = this._textureRepository.acquire(e2);
    if (C$2(u2))
      return ++this._numLoading, void u2.then((e3) => {
        if (this._disposed)
          return w$4(e3), void r2(null);
        r2(e3);
      }).finally(() => --this._numLoading);
    r2(u2);
  }
}
class o$7 extends t$b {
  constructor(t2 = null, e2 = null, s2 = null, i2 = null, r2 = null) {
    super(), this.texture = t2, this.textureNormal = e2, this.textureEmissive = s2, this.textureOcclusion = i2, this.textureMetallicRoughness = r2;
  }
}
function c$4(e2, t2, f2, o2) {
  const r2 = f2.typedBuffer, n2 = f2.typedBufferStride, s2 = e2.length;
  o2 *= n2;
  for (let i2 = 0; i2 < s2; ++i2) {
    const f3 = 2 * e2[i2];
    r2[o2] = t2[f3], r2[o2 + 1] = t2[f3 + 1], o2 += n2;
  }
}
function d$4(e2, t2, f2, o2, r2) {
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
function u$4(e2, t2, f2, o2, r2 = 1) {
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
function y$2(e2, t2, f2, o2, r2, n2 = 1) {
  if (!f2)
    return void d$4(e2, t2, o2, r2, n2);
  const s2 = o2.typedBuffer, i2 = o2.typedBufferStride, l2 = e2.length, c2 = f2[0], u2 = f2[1], a2 = f2[2], p2 = f2[4], y2 = f2[5], B2 = f2[6], g2 = f2[8], h2 = f2[9], b2 = f2[10], m2 = f2[12], O2 = f2[13], z2 = f2[14];
  r2 *= i2;
  let A2 = 0, L2 = 0, j2 = 0;
  const I2 = S$2(f2) ? (e3) => {
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
function B(e2, f2, o2, r2, n2, s2 = 1) {
  if (!o2)
    return void d$4(e2, f2, r2, n2, s2);
  const i2 = o2, l2 = r2.typedBuffer, c2 = r2.typedBufferStride, u2 = e2.length, a2 = i2[0], p2 = i2[1], y2 = i2[2], B2 = i2[4], g2 = i2[5], h2 = i2[6], b2 = i2[8], m2 = i2[9], O2 = i2[10], z2 = !G$3(i2), A2 = 1e-6, L2 = 1 - A2;
  n2 *= c2;
  let j2 = 0, I2 = 0, k2 = 0;
  const C2 = S$2(i2) ? (e3) => {
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
    return void u$4(e2, f2, r2, n2, s2);
  const i2 = o2, l2 = r2.typedBuffer, c2 = r2.typedBufferStride, d2 = e2.length, a2 = i2[0], p2 = i2[1], y2 = i2[2], B2 = i2[4], g2 = i2[5], h2 = i2[6], b2 = i2[8], m2 = i2[9], S2 = i2[10], O2 = !G$3(i2), z2 = 1e-6, A2 = 1 - z2;
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
function h$2(e2, t2, f2, o2, r2, n2 = 1) {
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
function b$1(e2, t2, f2, o2, r2 = 1) {
  const n2 = t2.typedBuffer, s2 = t2.typedBufferStride;
  if (o2 *= s2, r2 === 1)
    for (let i2 = 0; i2 < f2; ++i2)
      n2[o2] = e2[0], n2[o2 + 1] = e2[1], n2[o2 + 2] = e2[2], n2[o2 + 3] = e2[3], o2 += s2;
  else
    for (let i2 = 0; i2 < f2; ++i2)
      for (let t3 = 0; t3 < r2; ++t3)
        n2[o2] = e2[0], n2[o2 + 1] = e2[1], n2[o2 + 2] = e2[2], n2[o2 + 3] = e2[3], o2 += s2;
}
function m$4(t2, l2, d2, u2, a2, p2) {
  for (const m2 of l2.fieldNames) {
    const l3 = t2.vertexAttributes.get(m2), S2 = t2.indices.get(m2);
    if (l3 && S2)
      switch (m2) {
        case O$1.POSITION: {
          e$i(l3.size === 3);
          const e2 = a2.getField(m2, i$h);
          e2 && y$2(S2, l3.data, d2, e2, p2);
          break;
        }
        case O$1.NORMAL: {
          e$i(l3.size === 3);
          const e2 = a2.getField(m2, i$h);
          e2 && B(S2, l3.data, u2, e2, p2);
          break;
        }
        case O$1.UV0: {
          e$i(l3.size === 2);
          const e2 = a2.getField(m2, u$i);
          e2 && c$4(S2, l3.data, e2, p2);
          break;
        }
        case O$1.COLOR: {
          e$i(l3.size === 3 || l3.size === 4);
          const e2 = a2.getField(m2, x$6);
          e2 && h$2(S2, l3.data, l3.size, e2, p2);
          break;
        }
        case O$1.SYMBOLCOLOR: {
          e$i(l3.size === 3 || l3.size === 4);
          const e2 = a2.getField(m2, x$6);
          e2 && h$2(S2, l3.data, l3.size, e2, p2);
          break;
        }
        case O$1.TANGENT: {
          e$i(l3.size === 4);
          const e2 = a2.getField(m2, c$k);
          e2 && g$2(S2, l3.data, u2, e2, p2);
          break;
        }
      }
    else if (m2 === O$1.OBJECTANDLAYERIDCOLOR && r$8(t2.objectAndLayerIdColor) && t2.objectAndLayerIdColor.length === 4) {
      const e2 = t2.indices.get(O$1.POSITION);
      if (e2) {
        const f2 = e2.length, r2 = a2.getField(m2, x$6);
        b$1(t2.objectAndLayerIdColor, r2, f2, p2);
      }
    }
  }
}
function S$2(e2) {
  return e2[0] === 1 && e2[1] === 0 && e2[2] === 0 && e2[4] === 0 && e2[5] === 1 && e2[6] === 0 && e2[8] === 0 && e2[9] === 0 && e2[10] === 1;
}
const g$1 = r$c(1, 1, 0, 1), i$2 = r$c(1, 0, 1, 1);
function a$4(e2, a2) {
  e2.fragment.uniforms.add(u$d("depthTex", (e3, o2) => o2.highlightDepthTexture, a2.hasWebGL2Context ? e$c.None : e$c.InvSize)), e2.fragment.constants.add("occludedHighlightFlag", "vec4", g$1).add("unoccludedHighlightFlag", "vec4", i$2), e2.fragment.code.add(n$9`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${i$d(a2, "depthTex", "fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `);
}
function s$1(s2, n2) {
  n2.hasVvInstancing && (n2.vvSize || n2.vvColor) && s2.attributes.add(O$1.INSTANCEFEATUREATTRIBUTE, "vec4");
  const l2 = s2.vertex;
  n2.vvSize ? (l2.uniforms.add(new e$d("vvSizeMinSize", (e2) => e2.vvSizeMinSize)), l2.uniforms.add(new e$d("vvSizeMaxSize", (e2) => e2.vvSizeMaxSize)), l2.uniforms.add(new e$d("vvSizeOffset", (e2) => e2.vvSizeOffset)), l2.uniforms.add(new e$d("vvSizeFactor", (e2) => e2.vvSizeFactor)), l2.uniforms.add(new e$8("vvSymbolRotationMatrix", (e2) => e2.vvSymbolRotationMatrix)), l2.uniforms.add(new e$d("vvSymbolAnchor", (e2) => e2.vvSymbolAnchor)), l2.code.add(n$9`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), n2.vvColor ? (l2.constants.add("vvColorNumber", "int", o$i), n2.hasVvInstancing && l2.uniforms.add([new o$e("vvColorValues", (e2) => e2.vvColorValues, o$i), new e$7("vvColorColors", (e2) => e2.vvColorColors, o$i)]), l2.code.add(n$9`
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
function r$4(r2, t2) {
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
function e$4(e2, d2) {
  d2.hasVertexColors ? (e2.attributes.add(O$1.COLOR, "vec4"), e2.varyings.add("vColor", "vec4"), e2.vertex.code.add(n$9`void forwardVertexColor() { vColor = color; }`), e2.vertex.code.add(n$9`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : e2.vertex.code.add(n$9`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}
class i$1 {
  constructor(s2 = n$d()) {
    this.intensity = s2;
  }
}
class c$3 {
  constructor(i2 = n$d(), c2 = r$b(0.57735, 0.57735, 0.57735)) {
    this.intensity = i2, this.direction = c2;
  }
}
class n$3 {
  constructor(i2 = n$d(), c2 = r$b(0.57735, 0.57735, 0.57735), n2 = true, r2 = 1, h2 = 1) {
    this.intensity = i2, this.direction = c2, this.castShadows = n2, this.specularStrength = r2, this.environmentStrength = h2;
  }
}
class r$3 {
  constructor() {
    this.r = [0], this.g = [0], this.b = [0];
  }
}
function n$2(t2, n2, e2) {
  (e2 = e2 || t2).length = t2.length;
  for (let l2 = 0; l2 < t2.length; l2++)
    e2[l2] = t2[l2] * n2[l2];
  return e2;
}
function e$3(t2, n2, e2) {
  (e2 = e2 || t2).length = t2.length;
  for (let l2 = 0; l2 < t2.length; l2++)
    e2[l2] = t2[l2] * n2;
  return e2;
}
function l$4(t2, n2, e2) {
  (e2 = e2 || t2).length = t2.length;
  for (let l2 = 0; l2 < t2.length; l2++)
    e2[l2] = t2[l2] + n2[l2];
  return e2;
}
function u$3(t2) {
  return (t2 + 1) * (t2 + 1);
}
function l$3(n2) {
  return a$i(Math.floor(Math.sqrt(n2) - 1), 0, 2);
}
function m$3(t2, n2, o2) {
  const r2 = t2[0], e2 = t2[1], s2 = t2[2], i2 = o2 || [];
  return i2.length = u$3(n2), n2 >= 0 && (i2[0] = 0.28209479177), n2 >= 1 && (i2[1] = 0.4886025119 * r2, i2[2] = 0.4886025119 * s2, i2[3] = 0.4886025119 * e2), n2 >= 2 && (i2[4] = 1.09254843059 * r2 * e2, i2[5] = 1.09254843059 * e2 * s2, i2[6] = 0.31539156525 * (3 * s2 * s2 - 1), i2[7] = 1.09254843059 * r2 * s2, i2[8] = 0.54627421529 * (r2 * r2 - e2 * e2)), i2;
}
function p$2(t2, n2) {
  const o2 = u$3(t2), r2 = n2 || { r: [], g: [], b: [] };
  r2.r.length = r2.g.length = r2.b.length = o2;
  for (let e2 = 0; e2 < o2; e2++)
    r2.r[e2] = r2.g[e2] = r2.b[e2] = 0;
  return r2;
}
function y$1(t2, o2) {
  const r2 = l$3(o2.r.length);
  for (const e2 of t2)
    j$3(P$1, e2.direction), m$3(P$1, r2, v$2), n$2(v$2, k), e$3(v$2, e2.intensity[0], I$1), l$4(o2.r, I$1), e$3(v$2, e2.intensity[1], I$1), l$4(o2.g, I$1), e$3(v$2, e2.intensity[2], I$1), l$4(o2.b, I$1);
  return o2;
}
function b(t2, n2) {
  m$3(P$1, 0, v$2);
  for (const o2 of t2)
    n2.r[0] += v$2[0] * k[0] * o2.intensity[0] * 4 * Math.PI, n2.g[0] += v$2[0] * k[0] * o2.intensity[1] * 4 * Math.PI, n2.b[0] += v$2[0] * k[0] * o2.intensity[2] * 4 * Math.PI;
  return n2;
}
function M$1(t2, n2, e2, s2) {
  p$2(n2, s2), o$q(e2.intensity, 0, 0, 0);
  let i2 = false;
  const u2 = S$1, l2 = d$3, m2 = j;
  u2.length = 0, l2.length = 0, m2.length = 0;
  for (const o2 of t2)
    o2 instanceof n$3 && !i2 ? (r$d(e2.direction, o2.direction), r$d(e2.intensity, o2.intensity), e2.specularStrength = o2.specularStrength, e2.environmentStrength = o2.environmentStrength, e2.castShadows = o2.castShadows, i2 = true) : o2 instanceof n$3 || o2 instanceof c$3 ? u2.push(o2) : o2 instanceof i$1 ? l2.push(o2) : o2 instanceof r$3 && m2.push(o2);
  y$1(u2, s2), b(l2, s2);
  for (const o2 of m2)
    l$4(s2.r, o2.r), l$4(s2.g, o2.g), l$4(s2.b, o2.b);
}
const S$1 = [], d$3 = [], j = [], v$2 = [0], I$1 = [0], P$1 = n$d(), k = [3.141593, 2.094395, 2.094395, 2.094395, 0.785398, 0.785398, 0.785398, 0.785398, 0.785398];
class m$2 {
  constructor() {
    this.color = n$d(), this.intensity = 1;
  }
}
class l$2 {
  constructor() {
    this.direction = n$d(), this.ambient = new m$2(), this.diffuse = new m$2();
  }
}
const _ = 0.4;
class L {
  constructor() {
    this._shOrder = 2, this._legacy = new l$2(), this.globalFactor = 0.5, this.noonFactor = 0.5, this._sphericalHarmonics = new r$3(), this._mainLight = new n$3(n$d(), r$b(1, 0, 0), false);
  }
  get legacy() {
    return this._legacy;
  }
  get sh() {
    return this._sphericalHarmonics;
  }
  get mainLight() {
    return this._mainLight;
  }
  set(i2) {
    M$1(i2, this._shOrder, this._mainLight, this._sphericalHarmonics), r$d(this._legacy.direction, this._mainLight.direction);
    const r2 = 1 / Math.PI;
    this._legacy.ambient.color[0] = 0.282095 * this._sphericalHarmonics.r[0] * r2, this._legacy.ambient.color[1] = 0.282095 * this._sphericalHarmonics.g[0] * r2, this._legacy.ambient.color[2] = 0.282095 * this._sphericalHarmonics.b[0] * r2, g$9(this._legacy.diffuse.color, this._mainLight.intensity, r2), r$d(p$1, this._legacy.diffuse.color), g$9(p$1, p$1, _ * this.globalFactor), u$f(this._legacy.ambient.color, this._legacy.ambient.color, p$1);
  }
  copyFrom(i2) {
    this._sphericalHarmonics.r = Array.from(i2.sh.r), this._sphericalHarmonics.g = Array.from(i2.sh.g), this._sphericalHarmonics.b = Array.from(i2.sh.b), this._mainLight.direction = t$g(i2.mainLight.direction), this._mainLight.intensity = t$g(i2.mainLight.intensity), this._mainLight.castShadows = i2.mainLight.castShadows, this._mainLight.specularStrength = i2.mainLight.specularStrength, this._mainLight.environmentStrength = i2.mainLight.environmentStrength, this.globalFactor = i2.globalFactor, this.noonFactor = i2.noonFactor;
  }
  lerpLighting(s2, h2, n2) {
    if (A$4(this._mainLight.intensity, s2.mainLight.intensity, h2.mainLight.intensity, n2), this._mainLight.environmentStrength = h$9(s2.mainLight.environmentStrength, h2.mainLight.environmentStrength, n2), this._mainLight.specularStrength = h$9(s2.mainLight.specularStrength, h2.mainLight.specularStrength, n2), r$d(this._mainLight.direction, h2.mainLight.direction), this._mainLight.castShadows = h2.mainLight.castShadows, this.globalFactor = h$9(s2.globalFactor, h2.globalFactor, n2), this.noonFactor = h$9(s2.noonFactor, h2.noonFactor, n2), s2.sh.r.length === h2.sh.r.length)
      for (let t2 = 0; t2 < h2.sh.r.length; t2++)
        this._sphericalHarmonics.r[t2] = h$9(s2.sh.r[t2], h2.sh.r[t2], n2), this._sphericalHarmonics.g[t2] = h$9(s2.sh.g[t2], h2.sh.g[t2], n2), this._sphericalHarmonics.b[t2] = h$9(s2.sh.b[t2], h2.sh.b[t2], n2);
    else
      for (let i2 = 0; i2 < h2.sh.r.length; i2++)
        this._sphericalHarmonics.r[i2] = h2.sh.r[i2], this._sphericalHarmonics.g[i2] = h2.sh.g[i2], this._sphericalHarmonics.b[i2] = h2.sh.b[i2];
  }
}
const p$1 = n$d();
class u$2 {
  constructor() {
    this._transform = e$h(), this._transformInverse = new M({ value: this._transform }, h$b, e$h), this._transformInverseTranspose = new M(this._transformInverse, o$p, e$h), this._transformTranspose = new M({ value: this._transform }, o$p, e$h), this._transformInverseRotation = new M({ value: this._transform }, y$4, e$k);
  }
  _invalidateLazyTransforms() {
    this._transformInverse.invalidate(), this._transformInverseTranspose.invalidate(), this._transformTranspose.invalidate(), this._transformInverseRotation.invalidate();
  }
  get transform() {
    return this._transform;
  }
  get inverse() {
    return this._transformInverse.value;
  }
  get inverseTranspose() {
    return this._transformInverseTranspose.value;
  }
  get inverseRotation() {
    return this._transformInverseRotation.value;
  }
  get transpose() {
    return this._transformTranspose.value;
  }
  setTransformMatrix(t2) {
    n$c(this._transform, t2);
  }
  multiplyTransform(t2) {
    u$e(this._transform, this._transform, t2);
  }
  set(t2) {
    n$c(this._transform, t2), this._invalidateLazyTransforms();
  }
  setAndInvalidateLazyTransforms(t2, s2) {
    this.setTransformMatrix(t2), this.multiplyTransform(s2), this._invalidateLazyTransforms();
  }
}
class M {
  constructor(t2, s2, e2) {
    this._original = t2, this._update = s2, this._dirty = true, this._transform = e2();
  }
  invalidate() {
    this._dirty = true;
  }
  get value() {
    return this._dirty && (this._update(this._transform, this._original.value), this._dirty = false), this._transform;
  }
}
class g {
  constructor(t2 = 0) {
    this.componentLocalOriginLength = 0, this._tmpVertex = n$d(), this._mbs = R(), this._obb = { center: n$d(), halfSize: n$f(), quaternion: null }, this._totalOffset = 0, this._offset = 0, this._resetOffset(t2);
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
    this._obb.center[0] = s2[0] + s2[0] * e2, this._obb.center[1] = s2[1] + s2[1] * e2, this._obb.center[2] = s2[2] + s2[2] * e2, E$8(this._obb.halfSize, t2.halfSize, t2.quaternion), u$f(this._obb.halfSize, this._obb.halfSize, t2.center);
    const i2 = this._totalOffset / Math.sqrt(this._obb.halfSize[0] * this._obb.halfSize[0] + this._obb.halfSize[1] * this._obb.halfSize[1] + this._obb.halfSize[2] * this._obb.halfSize[2]);
    return this._obb.halfSize[0] += this._obb.halfSize[0] * i2, this._obb.halfSize[1] += this._obb.halfSize[1] * i2, this._obb.halfSize[2] += this._obb.halfSize[2] * i2, e$n(this._obb.halfSize, this._obb.halfSize, t2.center), S$6(I, t2.quaternion), E$8(this._obb.halfSize, this._obb.halfSize, I), this._obb.halfSize[0] *= this._obb.halfSize[0] < 0 ? -1 : 1, this._obb.halfSize[1] *= this._obb.halfSize[1] < 0 ? -1 : 1, this._obb.halfSize[2] *= this._obb.halfSize[2] < 0 ? -1 : 1, this._obb.quaternion = t2.quaternion, this._obb;
  }
}
class x$2 {
  constructor(t2 = 0) {
    this.offset = t2, this.sphere = R(), this.tmpVertex = n$d();
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
const S = new x$2();
function y(s2) {
  return r$8(s2) ? (S.offset = s2, S) : null;
}
new g();
const I = e$q();
function o$6(o2) {
  const f2 = n$9`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;
  o2.vertex.code.add(f2);
}
function o$5(o2, d2) {
  d2.normalType === i.Attribute && (o2.attributes.add(O$1.NORMAL, "vec3"), o2.vertex.code.add(n$9`vec3 normalModel() {
return normal;
}`)), d2.normalType === i.CompressedAttribute && (o2.include(o$6), o2.attributes.add(O$1.NORMALCOMPRESSED, "vec2"), o2.vertex.code.add(n$9`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)), d2.normalType === i.ScreenDerivative && (o2.extensions.add("GL_OES_standard_derivatives"), o2.fragment.code.add(n$9`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));
}
var i;
!function(e2) {
  e2[e2.Attribute = 0] = "Attribute", e2[e2.CompressedAttribute = 1] = "CompressedAttribute", e2[e2.Ground = 2] = "Ground", e2[e2.ScreenDerivative = 3] = "ScreenDerivative", e2[e2.COUNT = 4] = "COUNT";
}(i || (i = {}));
function n$1(r2, o2) {
  o2.normalType === i.Attribute || o2.normalType === i.CompressedAttribute ? (r2.include(o$5, o2), r2.varyings.add("vNormalWorld", "vec3"), r2.varyings.add("vNormalView", "vec3"), r2.vertex.uniforms.add([new o$f("transformNormalGlobalFromModel", (r3) => r3.transformNormalGlobalFromModel), new e$8("transformNormalViewFromGlobal", (r3) => r3.transformNormalViewFromGlobal)]), r2.vertex.code.add(n$9`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)) : o2.normalType === i.Ground ? (r2.include(F, o2), r2.varyings.add("vNormalWorld", "vec3"), r2.vertex.code.add(n$9`
    void forwardNormal() {
      vNormalWorld = ${o2.spherical ? n$9`normalize(vPositionWorldCameraRelative);` : n$9`vec3(0.0, 0.0, 1.0);`}
    }
    `)) : r2.vertex.code.add(n$9`void forwardNormal() {}`);
}
class f$3 extends c$9 {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = e$k();
  }
}
class c$2 extends W {
  constructor() {
    super(...arguments), this.transformNormalGlobalFromModel = e$k(), this.toMapSpace = n$a();
  }
}
var d$2;
function o$4(o2, v2) {
  switch (v2.textureCoordinateType) {
    case d$2.Default:
      return o2.attributes.add(O$1.UV0, "vec2"), o2.varyings.add("vuv0", "vec2"), void o2.vertex.code.add(n$9`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);
    case d$2.Compressed:
      return o2.attributes.add(O$1.UV0, "vec2"), o2.varyings.add("vuv0", "vec2"), void o2.vertex.code.add(n$9`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);
    case d$2.Atlas:
      return o2.attributes.add(O$1.UV0, "vec2"), o2.varyings.add("vuv0", "vec2"), o2.attributes.add(O$1.UVREGION, "vec4"), o2.varyings.add("vuvRegion", "vec4"), void o2.vertex.code.add(n$9`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      n$i(v2.textureCoordinateType);
    case d$2.None:
      return void o2.vertex.code.add(n$9`void forwardTextureCoordinates() {}`);
    case d$2.COUNT:
      return;
  }
}
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Default = 1] = "Default", e2[e2.Atlas = 2] = "Atlas", e2[e2.Compressed = 3] = "Compressed", e2[e2.COUNT = 4] = "COUNT";
}(d$2 || (d$2 = {}));
function t$2(t2) {
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
function a$3(a2, s2) {
  switch (a2.include(o$4, s2), a2.fragment.code.add(n$9`
  struct TextureLookupParameter {
    vec2 uv;
    ${s2.supportsTextureAtlas ? "vec2 size;" : ""}
  } vtc;
  `), s2.textureCoordinateType) {
    case d$2.Default:
    case d$2.Compressed:
      return void a2.fragment.code.add(n$9`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);
    case d$2.Atlas:
      return a2.include(t$2), void a2.fragment.code.add(n$9`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);
    default:
      n$i(s2.textureCoordinateType);
    case d$2.None:
    case d$2.COUNT:
      return;
  }
}
class o$3 extends i$f {
  constructor(r2, o2) {
    super(r2, "vec2", a$c.Draw, (e2, s2, t2, i2) => e2.setUniform2fv(r2, o2(s2, t2, i2)));
  }
}
class f$2 extends i$f {
  constructor(r2, e2) {
    super(r2, "sampler2D", a$c.Draw, (o2, s2, t2) => o2.bindTexture(r2, e2(s2, t2)));
  }
}
function u$1(s2, c2, p2 = e$c.None) {
  const u2 = [new f$2(s2, c2)];
  if (p2 & e$c.Size) {
    const i2 = s2 + t$a;
    u2.push(new o$3(i2, (s3, t2) => {
      const i3 = c2(s3, t2);
      return r$8(i3) ? r$9(a$2, i3.descriptor.width, i3.descriptor.height) : f$e;
    }));
  }
  if (p2 & e$c.InvSize) {
    const t2 = s2 + n$7;
    u2.push(new o$3(t2, (s3, t3) => {
      const i2 = c2(s3, t3);
      return r$8(i2) ? r$9(a$2, 1 / i2.descriptor.width, 1 / i2.descriptor.height) : f$e;
    }));
  }
  return u2;
}
const a$2 = n$b();
r$e(0, 0.6, 0.2);
var d$1;
!function(e2) {
  e2[e2.Disabled = 0] = "Disabled", e2[e2.Normal = 1] = "Normal", e2[e2.Schematic = 2] = "Schematic", e2[e2.Water = 3] = "Water", e2[e2.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", e2[e2.COUNT = 5] = "COUNT";
}(d$1 || (d$1 = {}));
function x$1(e2, l2) {
  const m2 = e2.fragment, p2 = l2.hasMetallicRoughnessTexture || l2.hasEmissionTexture || l2.hasOcclusionTexture;
  if (l2.pbrMode === d$1.Normal && p2 && e2.include(a$3, l2), l2.pbrMode !== d$1.Schematic)
    if (l2.pbrMode !== d$1.Disabled) {
      if (l2.pbrMode === d$1.Normal) {
        m2.code.add(n$9`vec3 mrr;
vec3 emission;
float occlusion;`);
        const e3 = l2.supportsTextureAtlas ? l2.hasWebGL2Context ? e$c.None : e$c.Size : e$c.None, s2 = l2.pbrTextureBindType;
        l2.hasMetallicRoughnessTexture && (m2.uniforms.add(s2 === a$c.Pass ? u$d("texMetallicRoughness", (e4) => e4.textureMetallicRoughness, e3) : u$1("texMetallicRoughness", (e4) => e4.textureMetallicRoughness, e3)), m2.code.add(n$9`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)), l2.hasEmissionTexture && (m2.uniforms.add(s2 === a$c.Pass ? u$d("texEmission", (e4) => e4.textureEmissive, e3) : u$1("texEmission", (e4) => e4.textureEmissive, e3)), m2.code.add(n$9`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)), l2.hasOcclusionTexture ? (m2.uniforms.add(s2 === a$c.Pass ? u$d("texOcclusion", (e4) => e4.textureOcclusion, e3) : u$1("texOcclusion", (e4) => e4.textureOcclusion, e3)), m2.code.add(n$9`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)) : m2.code.add(n$9`float getBakedOcclusion() { return 1.0; }`), m2.uniforms.add(s2 === a$c.Pass ? [new e$d("emissionFactor", (e4) => e4.emissiveFactor), new e$d("mrrFactors", (e4) => e4.mrrFactors)] : [new o$g("emissionFactor", (e4) => e4.emissiveFactor), new o$g("mrrFactors", (e4) => e4.mrrFactors)]), m2.code.add(n$9`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${p2 ? n$9`vtc.uv = vuv0;` : ""}
      ${l2.hasMetallicRoughnessTextureTransform ? n$9`vtc.uv = metallicRoughnessUV;` : ""}
      ${l2.hasMetallicRoughnessTexture ? l2.supportsTextureAtlas ? n$9`
                vtc.size = ${r$6(l2, "texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);` : n$9`applyMetallnessAndRoughness(vtc);` : ""}
      ${l2.hasEmissiveTextureTransform ? n$9`vtc.uv = emissiveUV;` : ""}
      ${l2.hasEmissionTexture ? l2.supportsTextureAtlas ? n$9`
                vtc.size = ${r$6(l2, "texEmission")};
                applyEmission(vtc);` : n$9`applyEmission(vtc);` : ""}
      ${l2.hasOcclusionTextureTransform ? n$9`vtc.uv = occlusionUV;` : ""}
      ${l2.hasOcclusionTexture ? l2.supportsTextureAtlas ? n$9`
                vtc.size = ${r$6(l2, "texOcclusion")};
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
function m$1(n2, g2) {
  const m2 = n2.fragment, o2 = g2.lightingSphericalHarmonicsOrder !== void 0 ? g2.lightingSphericalHarmonicsOrder : 2;
  o2 === 0 ? (m2.uniforms.add(new e$d("lightingAmbientSH0", (n3, t2) => o$q(a$1, t2.lighting.sh.r[0], t2.lighting.sh.g[0], t2.lighting.sh.b[0]))), m2.code.add(n$9`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : o2 === 1 ? (m2.uniforms.add([new e$e("lightingAmbientSH_R", (i2, n3) => r$a(r$2, n3.lighting.sh.r[0], n3.lighting.sh.r[1], n3.lighting.sh.r[2], n3.lighting.sh.r[3])), new e$e("lightingAmbientSH_G", (i2, n3) => r$a(r$2, n3.lighting.sh.g[0], n3.lighting.sh.g[1], n3.lighting.sh.g[2], n3.lighting.sh.g[3])), new e$e("lightingAmbientSH_B", (i2, n3) => r$a(r$2, n3.lighting.sh.b[0], n3.lighting.sh.b[1], n3.lighting.sh.b[2], n3.lighting.sh.b[3]))]), m2.code.add(n$9`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)) : o2 === 2 && (m2.uniforms.add([new e$d("lightingAmbientSH0", (n3, t2) => o$q(a$1, t2.lighting.sh.r[0], t2.lighting.sh.g[0], t2.lighting.sh.b[0])), new e$e("lightingAmbientSH_R1", (i2, n3) => r$a(r$2, n3.lighting.sh.r[1], n3.lighting.sh.r[2], n3.lighting.sh.r[3], n3.lighting.sh.r[4])), new e$e("lightingAmbientSH_G1", (i2, n3) => r$a(r$2, n3.lighting.sh.g[1], n3.lighting.sh.g[2], n3.lighting.sh.g[3], n3.lighting.sh.g[4])), new e$e("lightingAmbientSH_B1", (i2, n3) => r$a(r$2, n3.lighting.sh.b[1], n3.lighting.sh.b[2], n3.lighting.sh.b[3], n3.lighting.sh.b[4])), new e$e("lightingAmbientSH_R2", (i2, n3) => r$a(r$2, n3.lighting.sh.r[5], n3.lighting.sh.r[6], n3.lighting.sh.r[7], n3.lighting.sh.r[8])), new e$e("lightingAmbientSH_G2", (i2, n3) => r$a(r$2, n3.lighting.sh.g[5], n3.lighting.sh.g[6], n3.lighting.sh.g[7], n3.lighting.sh.g[8])), new e$e("lightingAmbientSH_B2", (i2, n3) => r$a(r$2, n3.lighting.sh.b[5], n3.lighting.sh.b[6], n3.lighting.sh.b[7], n3.lighting.sh.b[8]))]), m2.code.add(n$9`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`), g2.pbrMode !== d$1.Normal && g2.pbrMode !== d$1.Schematic || m2.code.add(n$9`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
const a$1 = n$d(), r$2 = n$a();
function o$2(n2) {
  n2.uniforms.add(new e$d("mainLightDirection", (i2, n3) => n3.lighting.mainLight.direction));
}
function a(n2) {
  n2.uniforms.add(new e$d("mainLightIntensity", (i2, n3) => n3.lighting.mainLight.intensity));
}
function e$2(i2, t2) {
  t2.useLegacyTerrainShading ? i2.uniforms.add(new o$n("lightingFixedFactor", (i3, n2) => n2.lighting.noonFactor * (1 - n2.lighting.globalFactor))) : i2.constants.add("lightingFixedFactor", "float", 0);
}
function r$1(i2, n2) {
  const r2 = i2.fragment;
  o$2(r2), a(r2), e$2(r2, n2), r2.code.add(n$9`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);
}
class e$1 extends i$f {
  constructor(r2, e2) {
    super(r2, "int", a$c.Pass, (s2, o2, i2) => s2.setUniform1i(r2, e2(o2, i2)));
  }
}
class o$1 extends i$f {
  constructor(r2, o2, s2) {
    super(r2, "mat4", a$c.Draw, (e2, s3, t2) => e2.setUniformMatrix4fv(r2, o2(s3, t2)), s2);
  }
}
class e extends i$f {
  constructor(r2, e2, o2) {
    super(r2, "mat4", a$c.Pass, (s2, o3, t2) => s2.setUniformMatrix4fv(r2, e2(o3, t2)), o2);
  }
}
function h$1(e$12, a2) {
  a2.receiveShadows && (e$12.fragment.uniforms.add(new e("shadowMapMatrix", (e2, a3) => a3.shadowMap.getShadowMapMatrices(e2.origin), 4)), f$1(e$12, a2));
}
function v$1(e2, a2) {
  a2.receiveShadows && (e2.fragment.uniforms.add(new o$1("shadowMapMatrix", (e3, a3) => a3.shadowMap.getShadowMapMatrices(e3.origin), 4)), f$1(e2, a2));
}
function f$1(e2, i2) {
  const d2 = e2.fragment;
  d2.include(a$b), d2.uniforms.add([...u$d("shadowMapTex", (e3, a2) => a2.shadowMap.depthTexture, i2.hasWebGL2Context ? e$c.None : e$c.Size), new e$1("numCascades", (e3, a2) => a2.shadowMap.numCascades), new e$e("cascadeDistances", (e3, a2) => a2.shadowMap.cascadeDistances)]), d2.code.add(n$9`
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

      vec2 textureSize = ${r$6(i2, "shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `);
}
function t$1(t2) {
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
function n(n2, r2) {
  const l2 = n2.fragment.code;
  n2.include(t$5), r2.pbrMode === d$1.Water || r2.pbrMode === d$1.WaterOnIntegratedMesh ? (l2.add(n$9`
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
}`)) : r2.pbrMode !== d$1.Normal && r2.pbrMode !== d$1.Schematic || (n2.include(t$1), l2.add(n$9`struct PBRShadingInfo
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
class s extends i$f {
  constructor(o2, s2) {
    super(o2, "bool", a$c.Pass, (r2, e2, t2) => r2.setUniform1b(o2, s2(e2, t2)));
  }
}
const f = 4;
function c$1() {
  const c2 = new o$m(), u2 = c2.fragment;
  c2.include(o$k);
  const m2 = (f + 1) / 2, p2 = 1 / (2 * m2 * m2);
  return u2.include(a$a), u2.uniforms.add([new f$c("depthMap", (e2) => e2.depthTexture), new f$2("tex", (e2) => e2.colorTexture), new o$3("blurSize", (e2) => e2.blurSize), new o$n("projScale", (r2, o2) => {
    const t2 = x$7(o2.camera.eye, o2.camera.center);
    return t2 > 5e4 ? Math.max(0, r2.projScale - (t2 - 5e4)) : r2.projScale;
  }), new e$f("nearFar", (e2, r2) => r2.camera.nearFar)]), u2.code.add(n$9`
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
      for (int r = -${n$9.int(f)}; r <= ${n$9.int(f)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `), c2;
}
const u = Object.freeze(Object.defineProperty({ __proto__: null, build: c$1 }, Symbol.toStringTag, { value: "Module" }));
class l$1 extends e$g {
  initializeProgram(r2) {
    return new o$o(r2.rctx, l$1.shader.get().build(), E$4);
  }
  initializePipeline() {
    return W$2({ colorWrite: _$7 });
  }
}
l$1.shader = new t$c(u, () => import("./SSAOBlur.glsl.js"));
const m = 16, p = 0.5;
function d() {
  const o2 = new o$m(), d2 = o2.fragment;
  return o2.include(o$k), d2.include(a$a), o2.include(n$8), d2.uniforms.add(new o$n("radius", (e2, r2) => v(r2))), d2.code.add(n$9`vec3 sphere[16];
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
}`), d2.uniforms.add([new e$f("nearFar", (e2, r2) => r2.camera.nearFar), new f$c("normalMap", (e2) => e2.normalTexture), new f$c("depthMap", (e2) => e2.depthTexture), new e$f("zScale", (e2, r2) => i$e(r2)), new o$n("projScale", (e2) => e2.projScale), new f$c("rnm", (e2) => e2.noiseTexture), new e$f("rnmScale", (o3, t2) => r$9(h, t2.camera.fullWidth / e$m(o3.noiseTexture).descriptor.width, t2.camera.fullHeight / e$m(o3.noiseTexture).descriptor.height)), new o$n("intensity", (e2, r2) => 4 * p / v(r2) ** 6), new e$f("screenSize", (e2, o3) => r$9(h, o3.camera.fullWidth, o3.camera.fullHeight))]), d2.code.add(n$9`
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

      for(int i = 0; i < ${n$9.int(m)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${n$9.int(m)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `), o2;
}
function v(e2) {
  return Math.max(10, 20 * e2.camera.computeRenderPixelSizeAtDist(Math.abs(4 * e2.camera.relativeElevation)));
}
const h = n$b(), x = Object.freeze(Object.defineProperty({ __proto__: null, build: d }, Symbol.toStringTag, { value: "Module" }));
class l extends e$g {
  initializeProgram(e2) {
    return new o$o(e2.rctx, l.shader.get().build(), E$4);
  }
  initializePipeline() {
    return W$2({ colorWrite: _$7 });
  }
}
l.shader = new t$c(x, () => import("./SSAO.glsl.js"));
class r extends t$b {
  constructor() {
    super(...arguments), this.projScale = 1;
  }
}
class t extends r {
}
class c extends t$b {
}
class o extends c {
  constructor() {
    super(...arguments), this.blurSize = n$b();
  }
}
const w = 2;
class P {
  constructor(e2, s2, t$12) {
    this._techniqueRepository = e2, this._rctx = s2, this._requestRender = t$12, this._enabled = false, this._quadVAO = null, this._passParameters = new t(), this._drawParameters = new o();
  }
  dispose() {
    this._quadVAO = a$e(this._quadVAO);
  }
  disposeOffscreenBuffers() {
    o$s(this._ssaoFBO, (e2) => e2.resize(0, 0)), o$s(this._blur0FBO, (e2) => e2.resize(0, 0)), o$s(this._blur1FBO, (e2) => e2.resize(0, 0));
  }
  set enabled(e2) {
    e2 ? this._enable() : this._disable();
  }
  get enabled() {
    return this._enabled;
  }
  get ready() {
    return this.enabled && r$8(this._passParameters.noiseTexture) && r$8(this._ssaoFBO) && r$8(this._blur0FBO) && r$8(this._blur1FBO);
  }
  get loading() {
    return this.enabled && !this.ready;
  }
  get colorTexture() {
    return r$8(this._blur1FBO) ? this._blur1FBO.colorTexture : null;
  }
  get width() {
    return r$8(this._ssaoFBO) ? this._ssaoFBO.width : -1;
  }
  get height() {
    return r$8(this._ssaoFBO) ? this._ssaoFBO.height : -1;
  }
  computeSSAO(e2, s2, t2) {
    if (!this.enabled || t$d(s2) || t$d(t2) || t$d(this._passParameters.noiseTexture) || t$d(this._ssaoFBO) || t$d(this._blur0FBO) || t$d(this._blur1FBO))
      return;
    const a2 = this._rctx, _2 = e2.camera;
    this._passParameters.normalTexture = t2, this._passParameters.depthTexture = s2, this._passParameters.projScale = 1 / _2.computeRenderPixelSizeAtDist(1);
    const o2 = _2.fullViewport, u2 = o2[2], l2 = o2[3], m2 = u2 / w, d2 = l2 / w;
    this._ssaoFBO.resize(u2, l2), this._blur0FBO.resize(m2, d2), this._blur1FBO.resize(m2, d2), t$d(this._quadVAO) && (this._quadVAO = u$b(this._rctx)), a2.bindFramebuffer(this._ssaoFBO), a2.setViewport(0, 0, u2, l2);
    a2.bindTechnique(this._ssaoTechnique, this._passParameters, e2).bindDraw(this._drawParameters, e2, this._passParameters), a2.bindVAO(this._quadVAO), a2.drawArrays(E$5.TRIANGLE_STRIP, 0, n$j(this._quadVAO, "geometry"));
    const b2 = a2.bindTechnique(this._blurTechnique, this._passParameters, e2);
    a2.setViewport(0, 0, m2, d2), a2.bindFramebuffer(this._blur0FBO), this._drawParameters.colorTexture = this._ssaoFBO.colorTexture, r$9(this._drawParameters.blurSize, 0, w / l2), b2.bindDraw(this._drawParameters, e2, this._passParameters), a2.setViewport(0, 0, m2, d2), a2.drawArrays(E$5.TRIANGLE_STRIP, 0, n$j(this._quadVAO, "geometry")), a2.bindFramebuffer(this._blur1FBO), this._drawParameters.colorTexture = this._blur0FBO.colorTexture, r$9(this._drawParameters.blurSize, w / u2, 0), b2.bindDraw(this._drawParameters, e2, this._passParameters), a2.drawArrays(E$5.TRIANGLE_STRIP, 0, n$j(this._quadVAO, "geometry")), a2.setViewport(o2[0], o2[1], o2[2], o2[3]);
  }
  _selectPrograms() {
    t$d(this._ssaoTechnique) && (this._ssaoTechnique = this._techniqueRepository.acquire(l)), t$d(this._blurTechnique) && (this._blurTechnique = this._techniqueRepository.acquire(l$1));
  }
  _enable() {
    this.enabled || (this._enabled = true, this._loadResources(() => {
      this._enabled && this._initialize();
    }));
  }
  _loadResources(e2) {
    this._data ? e2() : import("./SSAOHelperData.js").then((s2) => {
      this._data = s2, e2();
    });
  }
  _initialize() {
    const e2 = { target: M$4.TEXTURE_2D, pixelFormat: P$4.RGBA, dataType: G$2.UNSIGNED_BYTE, samplingMode: L$4.LINEAR, wrapMode: D$1.CLAMP_TO_EDGE, width: 0, height: 0 }, s2 = { colorTarget: Y.TEXTURE, depthStencilTarget: V$2.NONE };
    t$h(this._data.noiseTexture).then((t2) => {
      this._enabled && (this._ssaoFBO = new x$5(this._rctx, s2, e2), this._blur0FBO = new x$5(this._rctx, s2, e2), this._blur1FBO = new x$5(this._rctx, s2, e2), this._passParameters.noiseTexture = new E$7(this._rctx, { target: M$4.TEXTURE_2D, pixelFormat: P$4.RGBA, dataType: G$2.UNSIGNED_BYTE, hasMipmap: true, width: t2.width, height: t2.height }, t2), this._requestRender());
    }), this._selectPrograms();
  }
  _disable() {
    this._enabled = false, this._passParameters.noiseTexture = a$e(this._passParameters.noiseTexture), this._blur1FBO = a$e(this._blur1FBO), this._blur0FBO = a$e(this._blur0FBO), this._ssaoFBO = a$e(this._ssaoFBO);
  }
  get gpuMemoryUsage() {
    return (r$8(this._blur0FBO) ? this._blur0FBO.gpuMemoryUsage : 0) + (r$8(this._blur1FBO) ? this._blur1FBO.gpuMemoryUsage : 0) + (r$8(this._ssaoFBO) ? this._ssaoFBO.gpuMemoryUsage : 0);
  }
  get test() {
    return { ssao: this._ssaoFBO, blur: this._blur1FBO };
  }
}
export { o$i as $, r$4 as A, B$2 as B, u$7 as C, e$6 as D, E$4 as E, v$3 as F, d$7 as G, n$5 as H, t$4 as I, s$5 as J, d$a as K, L$1 as L, x$3 as M, t$7 as N, h$7 as O, m$4 as P, y$2 as Q, o$a as R, S$5 as S, e$5 as T, o$9 as U, f$5 as V, h$3 as W, r$5 as X, c$c as Y, f$9 as Z, o$e as _, a$a as a, v$6 as a$, e$7 as a0, a$b as a1, e$c as a2, u$d as a3, r$6 as a4, t$5 as a5, o$d as a6, d$8 as a7, t$6 as a8, n$6 as a9, L as aA, o$b as aB, u$2 as aC, y as aD, c$2 as aE, i$f as aF, a$c as aG, s as aH, o$2 as aI, a as aJ, n as aK, d$9 as aL, r$1 as aM, m$1 as aN, d$1 as aO, v$1 as aP, i$a as aQ, l$b as aR, d$6 as aS, i$8 as aT, P as aU, s$7 as aV, i$1 as aW, c$b as aX, E$2 as aY, U as aZ, p$5 as a_, s$2 as aa, m$5 as ab, l$5 as ac, P$2 as ad, i$5 as ae, u$9 as af, v$5 as ag, c$5 as ah, f$4 as ai, i$4 as aj, i$d as ak, s$1 as al, t$3 as am, a$4 as an, o$l as ao, f$a as ap, a$6 as aq, d$c as ar, L$3 as as, o$7 as at, B as au, h$2 as av, u$4 as aw, b$1 as ax, e$4 as ay, i$9 as az, e$f as b, o$h as b0, O as b1, c$a as b2, o$g as b3, e$1 as b4, o$4 as b5, o$5 as b6, n$1 as b7, i as b8, d$2 as b9, a$3 as ba, u$1 as bb, w as bc, _ as bd, e$8 as be, a$5 as bf, h$1 as bg, x$1 as bh, f$3 as bi, l$8 as bj, c$1 as bk, d as bl, n$9 as c, o$m as d, e$d as e, f$c as f, e$b as g, e$g as h, o$o as i, e$a as j, t$8 as k, o$k as l, e$e as m, n$8 as n, o$n as o, t$b as p, E$3 as q, r$7 as r, o$j as s, t$c as t, u$b as u, e$9 as v, d$b as w, f$8 as x, c$8 as y, h$6 as z };
