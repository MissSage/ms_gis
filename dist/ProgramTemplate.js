import { a as r$1, r as r$2, t as t$2, f as c$3 } from "./index.js";
import { c as c$2 } from "./Texture.js";
import { H as H$1, t as t$1 } from "./enums.js";
const e$3 = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];
var e$2, r = { exports: {} };
(e$2 = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]) !== void 0 && (r.exports = e$2);
const t = r.exports;
var o, l$2 = { exports: {} };
o = l$2, function(e2) {
  var r2 = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"];
  r2 !== void 0 && (o.exports = r2);
}();
const a$1 = l$2.exports;
var g$2 = { exports: {} };
!function(e2) {
  !function(r2) {
    var t2 = function() {
      return ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT", "textureSize", "texelFetch"];
    }();
    t2 !== void 0 && (e2.exports = t2);
  }();
}(g$2);
const i = g$2.exports;
var s = 999, c$1 = 9999, p = 0, u = 1, d = 2, f$1 = 3, l$1 = 4, h$1 = 5, y = 6, w = 7, g$1 = 8, m = 9, b = 10, k = 11, E = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function _$1() {
  var t$12, e2, a2, r2 = 0, _2 = 0, v2 = s, j2 = [], x2 = [], D2 = 1, R2 = 0, T2 = 0, A2 = false, G2 = false, S2 = "";
  return function(t2) {
    return x2 = [], t2 !== null ? F2(t2.replace ? t2.replace(/\r\n/g, "\n") : t2) : L2();
  };
  function X2(t2) {
    t2.length && x2.push({ type: E[v2], data: t2, position: T2, line: D2, column: R2 });
  }
  function F2(e3) {
    var n;
    for (r2 = 0, a2 = (S2 += e3).length; t$12 = S2[r2], r2 < a2; ) {
      switch (n = r2, v2) {
        case p:
          r2 = V();
          break;
        case u:
          r2 = P();
          break;
        case d:
          r2 = M2();
          break;
        case f$1:
          r2 = O();
          break;
        case l$1:
          r2 = z();
          break;
        case k:
          r2 = $();
          break;
        case h$1:
          r2 = I();
          break;
        case c$1:
          r2 = U();
          break;
        case m:
          r2 = H2();
          break;
        case s:
          r2 = C();
      }
      if (n !== r2)
        if (S2[n] === "\n")
          R2 = 0, ++D2;
        else
          ++R2;
    }
    return _2 += r2, S2 = S2.slice(r2), x2;
  }
  function L2(t2) {
    return j2.length && X2(j2.join("")), v2 = b, X2("(eof)"), x2;
  }
  function C() {
    return j2 = j2.length ? [] : j2, e2 === "/" && t$12 === "*" ? (T2 = _2 + r2 - 1, v2 = p, e2 = t$12, r2 + 1) : e2 === "/" && t$12 === "/" ? (T2 = _2 + r2 - 1, v2 = u, e2 = t$12, r2 + 1) : t$12 === "#" ? (v2 = d, T2 = _2 + r2, r2) : /\s/.test(t$12) ? (v2 = m, T2 = _2 + r2, r2) : (A2 = /\d/.test(t$12), G2 = /[^\w_]/.test(t$12), T2 = _2 + r2, v2 = A2 ? l$1 : G2 ? f$1 : c$1, r2);
  }
  function H2() {
    return /[^\s]/g.test(t$12) ? (X2(j2.join("")), v2 = s, r2) : (j2.push(t$12), e2 = t$12, r2 + 1);
  }
  function M2() {
    return t$12 !== "\r" && t$12 !== "\n" || e2 === "\\" ? (j2.push(t$12), e2 = t$12, r2 + 1) : (X2(j2.join("")), v2 = s, r2);
  }
  function P() {
    return M2();
  }
  function V() {
    return t$12 === "/" && e2 === "*" ? (j2.push(t$12), X2(j2.join("")), v2 = s, r2 + 1) : (j2.push(t$12), e2 = t$12, r2 + 1);
  }
  function O() {
    if (e2 === "." && /\d/.test(t$12))
      return v2 = h$1, r2;
    if (e2 === "/" && t$12 === "*")
      return v2 = p, r2;
    if (e2 === "/" && t$12 === "/")
      return v2 = u, r2;
    if (t$12 === "." && j2.length) {
      for (; N(j2); )
        ;
      return v2 = h$1, r2;
    }
    if (t$12 === ";" || t$12 === ")" || t$12 === "(") {
      if (j2.length)
        for (; N(j2); )
          ;
      return X2(t$12), v2 = s, r2 + 1;
    }
    var a3 = j2.length === 2 && t$12 !== "=";
    if (/[\w_\d\s]/.test(t$12) || a3) {
      for (; N(j2); )
        ;
      return v2 = s, r2;
    }
    return j2.push(t$12), e2 = t$12, r2 + 1;
  }
  function N(t2) {
    for (var e3, a3, r3 = 0; ; ) {
      if (e3 = a$1.indexOf(t2.slice(0, t2.length + r3).join("")), a3 = a$1[e3], e3 === -1) {
        if (r3-- + t2.length > 0)
          continue;
        a3 = t2.slice(0, 1).join("");
      }
      return X2(a3), T2 += a3.length, (j2 = j2.slice(a3.length)).length;
    }
  }
  function $() {
    return /[^a-fA-F0-9]/.test(t$12) ? (X2(j2.join("")), v2 = s, r2) : (j2.push(t$12), e2 = t$12, r2 + 1);
  }
  function z() {
    return t$12 === "." || /[eE]/.test(t$12) ? (j2.push(t$12), v2 = h$1, e2 = t$12, r2 + 1) : t$12 === "x" && j2.length === 1 && j2[0] === "0" ? (v2 = k, j2.push(t$12), e2 = t$12, r2 + 1) : /[^\d]/.test(t$12) ? (X2(j2.join("")), v2 = s, r2) : (j2.push(t$12), e2 = t$12, r2 + 1);
  }
  function I() {
    return t$12 === "f" && (j2.push(t$12), e2 = t$12, r2 += 1), /[eE]/.test(t$12) || t$12 === "-" && /[eE]/.test(e2) ? (j2.push(t$12), e2 = t$12, r2 + 1) : /[^\d]/.test(t$12) ? (X2(j2.join("")), v2 = s, r2) : (j2.push(t$12), e2 = t$12, r2 + 1);
  }
  function U() {
    if (/[^\d\w_]/.test(t$12)) {
      var a3 = j2.join("");
      return v2 = t.indexOf(a3) > -1 ? g$1 : i.indexOf(a3) > -1 ? w : y, X2(j2.join("")), v2 = s, r2;
    }
    return j2.push(t$12), e2 = t$12, r2 + 1;
  }
}
function v(t2) {
  var e2 = _$1(), a2 = [];
  return a2 = (a2 = a2.concat(e2(t2))).concat(e2(null));
}
function j(t2) {
  return v(t2);
}
function x(t2) {
  return t2.map((t3) => t3.type !== "eof" ? t3.data : "").join("");
}
const D = ["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"];
function R(t2, e2 = "100", a2 = "300 es") {
  const r2 = /^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const n of t2)
    if (n.type === "preprocessor") {
      const t3 = r2.exec(n.data);
      if (t3) {
        const r3 = t3[1].replace(/\s\s+/g, " ");
        if (r3 === a2)
          return r3;
        if (r3 === e2)
          return n.data = "#version " + a2, e2;
        throw new Error("unknown glsl version: " + r3);
      }
    }
  return t2.splice(0, 0, { type: "preprocessor", data: "#version " + a2 }, { type: "whitespace", data: "\n" }), null;
}
function T(t2, e2) {
  for (let a2 = e2 - 1; a2 >= 0; a2--) {
    const e3 = t2[a2];
    if (e3.type !== "whitespace" && e3.type !== "block-comment") {
      if (e3.type !== "keyword")
        break;
      if (e3.data === "attribute" || e3.data === "in")
        return true;
    }
  }
  return false;
}
function A(t2, e2, a2, r2) {
  r2 = r2 || a2;
  for (const n of t2)
    if (n.type === "ident" && n.data === a2) {
      r2 in e2 ? e2[r2]++ : e2[r2] = 0;
      return A(t2, e2, r2 + "_" + e2[r2], r2);
    }
  return a2;
}
function G(t2, e2, a2 = "afterVersion") {
  function r2(t3, e3) {
    for (let a3 = e3; a3 < t3.length; a3++) {
      const e4 = t3[a3];
      if (e4.type === "operator" && e4.data === ";")
        return a3;
    }
    return null;
  }
  function n(t3) {
    let e3 = -1, n2 = 0, o3 = -1;
    for (let i3 = 0; i3 < t3.length; i3++) {
      const s3 = t3[i3];
      if (s3.type === "preprocessor" && (s3.data.match(/\#(if|ifdef|ifndef)\s+.+/) ? ++n2 : s3.data.match(/\#endif\s*.*/) && --n2), a2 !== "afterVersion" && a2 !== "afterPrecision" || s3.type === "preprocessor" && /^#version/.test(s3.data) && (o3 = Math.max(o3, i3)), a2 === "afterPrecision" && s3.type === "keyword" && s3.data === "precision") {
        const e4 = r2(t3, i3);
        if (e4 === null)
          throw new Error("precision statement not followed by any semicolons!");
        o3 = Math.max(o3, e4);
      }
      e3 < o3 && n2 === 0 && (e3 = i3);
    }
    return e3 + 1;
  }
  const o2 = { data: "\n", type: "whitespace" }, i2 = (e3) => e3 < t2.length && /[^\r\n]$/.test(t2[e3].data);
  let s2 = n(t2);
  i2(s2 - 1) && t2.splice(s2++, 0, o2);
  for (const c2 of e2)
    t2.splice(s2++, 0, c2);
  i2(s2 - 1) && i2(s2) && t2.splice(s2, 0, o2);
}
function S(t2, e2, a2, r2 = "lowp") {
  G(t2, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: r2 }, { type: "whitespace", data: " " }, { type: "keyword", data: a2 }, { type: "whitespace", data: " " }, { type: "ident", data: e2 }, { type: "operator", data: ";" }], "afterPrecision");
}
function X(t2, e2, a2, r2, n = "lowp") {
  G(t2, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: r2.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: n }, { type: "whitespace", data: " " }, { type: "keyword", data: a2 }, { type: "whitespace", data: " " }, { type: "ident", data: e2 }, { type: "operator", data: ";" }], "afterPrecision");
}
function F(t2, e2) {
  let a2, r2, n = -1;
  for (let o2 = e2; o2 < t2.length; o2++) {
    const e3 = t2[o2];
    if (e3.type === "operator" && (e3.data === "[" && (a2 = o2), e3.data === "]")) {
      r2 = o2;
      break;
    }
    e3.type === "integer" && (n = parseInt(e3.data, 10));
  }
  return a2 && r2 && t2.splice(a2, r2 - a2 + 1), n;
}
function L(r2, n) {
  const o2 = H();
  if (r$1(o2))
    return o2;
  const i2 = j(r2);
  if (R(i2, "100", "300 es") === "300 es")
    return r2;
  let s2 = null, c2 = null;
  const p2 = {}, u2 = {};
  for (let t2 = 0; t2 < i2.length; ++t2) {
    const r3 = i2[t2];
    switch (r3.type) {
      case "keyword":
        n === H$1.VERTEX_SHADER && r3.data === "attribute" ? r3.data = "in" : r3.data === "varying" && (r3.data = n === H$1.VERTEX_SHADER ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(r3.data.trim()) && (r3.data = r3.data.replace(/(2D|Cube|EXT)/g, "")), n === H$1.FRAGMENT_SHADER && r3.data === "gl_FragColor" && (s2 || (s2 = A(i2, p2, "fragColor"), S(i2, s2, "vec4")), r3.data = s2), n === H$1.FRAGMENT_SHADER && r3.data === "gl_FragData") {
          const e2 = F(i2, t2 + 1), a2 = A(i2, p2, "fragData");
          X(i2, a2, "vec4", e2, "mediump"), r3.data = a2;
        } else
          n === H$1.FRAGMENT_SHADER && r3.data === "gl_FragDepthEXT" && (c2 || (c2 = A(i2, p2, "gl_FragDepth")), r3.data = c2);
        break;
      case "ident":
        if (e$3.includes(r3.data)) {
          if (n === H$1.VERTEX_SHADER && T(i2, t2))
            throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          r3.data in u2 || (u2[r3.data] = A(i2, p2, r3.data)), r3.data = u2[r3.data];
        }
    }
  }
  for (let t2 = i2.length - 1; t2 >= 0; --t2) {
    const e2 = i2[t2];
    if (e2.type === "preprocessor") {
      const a2 = e2.data.match(/\#extension\s+(.*)\:/);
      if (a2 && a2[1] && D.includes(a2[1].trim())) {
        const e3 = i2[t2 + 1];
        i2.splice(t2, e3 && e3.type === "whitespace" ? 2 : 1);
      }
      const r3 = e2.data.match(/\#ifdef\s+(.*)/);
      r3 && r3[1] && D.includes(r3[1].trim()) && (e2.data = "#if 1");
      const n2 = e2.data.match(/\#ifndef\s+(.*)/);
      n2 && n2[1] && D.includes(n2[1].trim()) && (e2.data = "#if 0");
    }
  }
  return M(r2, x(i2));
}
function H(t2) {
  return null;
}
function M(t2, e2) {
  return e2;
}
const a = 4294967295;
class h {
  constructor(t2, o2, i2, a2, h2 = new Map()) {
    this._context = t2, this._locations = a2, this._uniformBlockBindings = h2, this._refCount = 1, this._compiled = false, this._nameToUniformLocation = {}, this._nameToUniform1 = {}, this._nameToUniform1v = new Map(), this._nameToUniform2 = new Map(), this._nameToUniform3 = new Map(), this._nameToUniform4 = new Map(), this._nameToUniformMatrix3 = new Map(), this._nameToUniformMatrix4 = new Map(), t2 || console.error("RenderingContext isn't initialized!"), o2.length === 0 && console.error("Shaders source should not be empty!"), this._context.type === r$2.WEBGL2 && (o2 = L(o2, H$1.VERTEX_SHADER), i2 = L(i2, H$1.FRAGMENT_SHADER)), this._vShader = f(this._context, H$1.VERTEX_SHADER, o2), this._fShader = f(this._context, H$1.FRAGMENT_SHADER, i2), this._vShader && this._fShader || console.error("Error loading shaders!"), this._context.instanceCounter.increment(t$1.Shader, this), c$2() && (this.vertexShader = o2, this.fragmentShader = i2);
  }
  get glName() {
    if (r$1(this._glName))
      return this._glName;
    if (t$2(this._vShader))
      return null;
    const t2 = this._context.gl, r2 = t2.createProgram();
    if (t2.attachShader(r2, this._vShader), t2.attachShader(r2, this._fShader), this._locations.forEach((o2, i2) => t2.bindAttribLocation(r2, o2, i2)), t2.linkProgram(r2), c$2() && !t2.getProgramParameter(r2, t2.LINK_STATUS) && console.error(`Could not link shader
validated: ${t2.getProgramParameter(r2, t2.VALIDATE_STATUS)}, gl error ${t2.getError()}, vertex: ${t2.getShaderParameter(this._vShader, t2.COMPILE_STATUS)}, fragment: ${t2.getShaderParameter(this._fShader, t2.COMPILE_STATUS)}, info log: ${t2.getProgramInfoLog(r2)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`), this._context.type === r$2.WEBGL2) {
      const o2 = t2;
      for (const [t3, i2] of this._uniformBlockBindings) {
        const e2 = o2.getUniformBlockIndex(r2, t3);
        e2 < a && o2.uniformBlockBinding(r2, e2, i2);
      }
    }
    return this._glName = r2, this._context.instanceCounter.increment(t$1.Program, this), r2;
  }
  get hasGLName() {
    return r$1(this._glName);
  }
  get isCompiled() {
    if (this._compiled)
      return true;
    const t2 = this._context.gl.getExtension("KHR_parallel_shader_compile");
    return t2 == null ? (this._compiled = true, true) : (this._compiled = !!this._context.gl.getProgramParameter(this.glName, t2.COMPLETION_STATUS_KHR), this._compiled);
  }
  dispose() {
    if (--this._refCount > 0)
      return;
    const t2 = this._context.gl;
    this._vShader && (t2.deleteShader(this._vShader), this._vShader = null, this._context.instanceCounter.decrement(t$1.Shader, this)), this._fShader && (t2.deleteShader(this._fShader), this._fShader = null), this._glName && (t2.deleteProgram(this._glName), this._glName = null, this._context.instanceCounter.decrement(t$1.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(t2) {
    return this._nameToUniformLocation[t2] === void 0 && (++l.numUniforms, this._nameToUniformLocation[t2] = this._context.gl.getUniformLocation(this.glName, t2)), this._nameToUniformLocation[t2];
  }
  hasUniform(t2) {
    return this._getUniformLocation(t2) !== null;
  }
  setUniform1i(t2, o2) {
    const i2 = this._nameToUniform1[t2];
    i2 !== void 0 && o2 === i2 || (this._context.gl.uniform1i(this._getUniformLocation(t2), o2), this._nameToUniform1[t2] = o2);
  }
  setUniform1iv(t2, o2) {
    g(this._nameToUniform1v, t2, o2) && this._context.gl.uniform1iv(this._getUniformLocation(t2), o2);
  }
  setUniform2iv(t2, o2) {
    g(this._nameToUniform2, t2, o2) && this._context.gl.uniform2iv(this._getUniformLocation(t2), o2);
  }
  setUniform3iv(t2, o2) {
    g(this._nameToUniform3, t2, o2) && this._context.gl.uniform3iv(this._getUniformLocation(t2), o2);
  }
  setUniform4iv(t2, o2) {
    g(this._nameToUniform4, t2, o2) && this._context.gl.uniform4iv(this._getUniformLocation(t2), o2);
  }
  setUniform1f(t2, o2) {
    const i2 = this._nameToUniform1[t2];
    i2 !== void 0 && o2 === i2 || (this._context.gl.uniform1f(this._getUniformLocation(t2), o2), this._nameToUniform1[t2] = o2);
  }
  setUniform1fv(t2, o2) {
    g(this._nameToUniform1v, t2, o2) && this._context.gl.uniform1fv(this._getUniformLocation(t2), o2);
  }
  setUniform2f(t2, o2, i2) {
    const e2 = this._nameToUniform2.get(t2);
    e2 === void 0 ? (this._context.gl.uniform2f(this._getUniformLocation(t2), o2, i2), this._nameToUniform2.set(t2, [o2, i2])) : o2 === e2[0] && i2 === e2[1] || (this._context.gl.uniform2f(this._getUniformLocation(t2), o2, i2), e2[0] = o2, e2[1] = i2);
  }
  setUniform2fv(t2, o2) {
    g(this._nameToUniform2, t2, o2) && this._context.gl.uniform2fv(this._getUniformLocation(t2), o2);
  }
  setUniform3f(t2, o2, i2, e2) {
    const n = this._nameToUniform3.get(t2);
    n === void 0 ? (this._context.gl.uniform3f(this._getUniformLocation(t2), o2, i2, e2), this._nameToUniform3[t2] = [o2, i2, e2]) : o2 === n[0] && i2 === n[1] && e2 === n[2] || (this._context.gl.uniform3f(this._getUniformLocation(t2), o2, i2, e2), n[0] = o2, n[1] = i2, n[2] = e2);
  }
  setUniform3fv(t2, o2) {
    g(this._nameToUniform3, t2, o2) && this._context.gl.uniform3fv(this._getUniformLocation(t2), o2);
  }
  setUniform4f(t2, o2, i2, e2, n) {
    const r2 = this._nameToUniform4.get(t2);
    r2 === void 0 ? (this._context.gl.uniform4f(this._getUniformLocation(t2), o2, i2, e2, n), this._nameToUniform4.set(t2, [o2, i2, e2, n])) : r2 !== void 0 && o2 === r2[0] && i2 === r2[1] && e2 === r2[2] && n === r2[3] || (this._context.gl.uniform4f(this._getUniformLocation(t2), o2, i2, e2, n), r2[0] = o2, r2[1] = i2, r2[2] = e2, r2[3] = n);
  }
  setUniform4fv(t2, o2) {
    g(this._nameToUniform4, t2, o2) && this._context.gl.uniform4fv(this._getUniformLocation(t2), o2);
  }
  setUniformMatrix3fv(t2, o2, i2 = false) {
    g(this._nameToUniformMatrix3, t2, o2) && this._context.gl.uniformMatrix3fv(this._getUniformLocation(t2), i2, o2);
  }
  setUniformMatrix4fv(t2, o2, i2 = false) {
    g(this._nameToUniformMatrix4, t2, o2) && this._context.gl.uniformMatrix4fv(this._getUniformLocation(t2), i2, o2);
  }
  stop() {
  }
}
function f(t2, o2, i2) {
  const n = t2.gl, s2 = n.createShader(o2);
  return n.shaderSource(s2, i2), n.compileShader(s2), c$2() && !n.getShaderParameter(s2, n.COMPILE_STATUS) && (console.error("Compile error in ".concat(o2 === H$1.VERTEX_SHADER ? "vertex" : "fragment", " shader")), console.error(n.getShaderInfoLog(s2)), console.error(_(i2))), l.enabled && (l.compiledLOC += i2.match(/\n/g).length + 1), s2;
}
function _(t2) {
  let o2 = 2;
  return t2.replace(/\n/g, () => "\n" + c(o2++) + ":");
}
function c(t2) {
  return t2 >= 1e3 ? t2.toString() : ("  " + t2).slice(-3);
}
function g(o2, i2, e2) {
  const n = o2.get(i2);
  return n ? c$3(n, e2) : (o2.set(i2, Array.from(e2)), true);
}
const l = { compiledLOC: 0, numUniforms: 0, enabled: false };
class e$1 {
  constructor(e2) {
    this._readFile = e2;
  }
  resolveIncludes(e2) {
    return this._resolve(e2);
  }
  _resolve(e2, t2 = new Map()) {
    if (t2.has(e2))
      return t2.get(e2);
    const r2 = this._read(e2);
    if (!r2)
      throw new Error(`cannot find shader file ${e2}`);
    const s2 = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let n = s2.exec(r2);
    const l2 = [];
    for (; n != null; )
      l2.push({ path: n[1], start: n.index, length: n[0].length }), n = s2.exec(r2);
    let a2 = 0, h2 = "";
    return l2.forEach((e3) => {
      h2 += r2.slice(a2, e3.start), h2 += t2.has(e3.path) ? "" : this._resolve(e3.path, t2), a2 = e3.start + e3.length;
    }), h2 += r2.slice(a2), t2.set(e2, h2), h2;
  }
  _read(e2) {
    return this._readFile(e2);
  }
}
function e(e2, t2, a2 = "") {
  return new h(e2, a2 + t2.shaders.vertexShader, a2 + t2.shaders.fragmentShader, t2.attributes);
}
export { e as a, e$1 as e, h };
