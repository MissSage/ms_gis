import { n as n$1, m } from "./WGLContainer.js";
import { n as n$2, s as s$4 } from "./programUtils.js";
import { ab as r$4, r as r$5, s as s$3, t as t$4, b3 as o$4, a as r$6, b4 as i$1, n as n$5, b5 as U$1 } from "./index.js";
import { n as n$3, E as E$4, a as a$1 } from "./Texture.js";
import { R as R$1, T as T$2, N, S, I as I$1, O, t as t$1, Y, V, M, D, P, G, L, F as F$1, C, E as E$3, U, _ as _$3, A as A$2, X, n as n$4, W as W$1, r as r$7, f as f$1 } from "./enums.js";
import { t as t$3, W, s as s$2, M as M$1 } from "./OrderIndependentTransparency.js";
import { x as x$2, E as E$2, a, i } from "./VertexArrayObject.js";
import { r as r$3 } from "./floatRGBA.js";
import { t as t$2 } from "./VertexElementDescriptor.js";
const e$3 = (r2) => {
  let t2 = "";
  t2 += r2[0].toUpperCase();
  for (let e2 = 1; e2 < r2.length; e2++) {
    const s2 = r2[e2];
    s2 === s2.toUpperCase() ? (t2 += "_", t2 += s2) : t2 += s2.toUpperCase();
  }
  return t2;
}, s$1 = (r2) => {
  const s2 = {};
  for (const t2 in r2) {
    s2[e$3(t2)] = r2[t2];
  }
  return n$2(s2);
}, o$3 = (t2, e2, o2, n2) => {
  const a2 = t2 + t2.substring(t2.lastIndexOf("/")), p = e2 + e2.substring(e2.lastIndexOf("/")), f2 = s$1(n2);
  return { attributes: o2, shaders: { vertexShader: f2 + n$1(`${a2}.vert`), fragmentShader: f2 + n$1(`${p}.frag`) } };
};
class t {
  constructor(e2, t2, E2, T2, r2, _2, i2, u, s2) {
    this.createQuery = e2, this.deleteQuery = t2, this.resultAvailable = E2, this.getResult = T2, this.disjoint = r2, this.beginTimeElapsed = _2, this.endTimeElapsed = i2, this.createTimestamp = u, this.timestampBits = s2;
  }
}
let E$1 = false;
function T$1(T2, r2) {
  if (r2.disjointTimerQuery)
    return null;
  let _2 = T2.getExtension("EXT_disjoint_timer_query_webgl2");
  return _2 && n$3(T2) ? new t(() => T2.createQuery(), (e2) => {
    T2.deleteQuery(e2), E$1 = false;
  }, (e2) => T2.getQueryParameter(e2, T2.QUERY_RESULT_AVAILABLE), (e2) => T2.getQueryParameter(e2, T2.QUERY_RESULT), () => T2.getParameter(_2.GPU_DISJOINT_EXT), (e2) => {
    E$1 || (E$1 = true, T2.beginQuery(_2.TIME_ELAPSED_EXT, e2));
  }, () => {
    T2.endQuery(_2.TIME_ELAPSED_EXT), E$1 = false;
  }, (e2) => _2.queryCounterEXT(e2, _2.TIMESTAMP_EXT), () => T2.getQuery(_2.TIMESTAMP_EXT, _2.QUERY_COUNTER_BITS_EXT)) : (_2 = T2.getExtension("EXT_disjoint_timer_query"), _2 ? new t(() => _2.createQueryEXT(), (e2) => {
    _2.deleteQueryEXT(e2), E$1 = false;
  }, (e2) => _2.getQueryObjectEXT(e2, _2.QUERY_RESULT_AVAILABLE_EXT), (e2) => _2.getQueryObjectEXT(e2, _2.QUERY_RESULT_EXT), () => T2.getParameter(_2.GPU_DISJOINT_EXT), (e2) => {
    E$1 || (E$1 = true, _2.beginQueryEXT(_2.TIME_ELAPSED_EXT, e2));
  }, () => {
    _2.endQueryEXT(_2.TIME_ELAPSED_EXT), E$1 = false;
  }, (e2) => _2.queryCounterEXT(e2, _2.TIMESTAMP_EXT), () => _2.getQueryEXT(_2.TIMESTAMP_EXT, _2.QUERY_COUNTER_BITS_EXT)) : null);
}
class h {
  constructor() {
    this.blend = false, this.blendColor = { r: 0, g: 0, b: 0, a: 0 }, this.blendFunction = { srcRGB: R$1.ONE, dstRGB: R$1.ZERO, srcAlpha: R$1.ONE, dstAlpha: R$1.ZERO }, this.blendEquation = { mode: T$2.ADD, modeAlpha: T$2.ADD }, this.colorMask = { r: true, g: true, b: true, a: true }, this.faceCulling = false, this.cullFace = N.BACK, this.frontFace = S.CCW, this.scissorTest = false, this.scissorRect = { x: 0, y: 0, width: 0, height: 0 }, this.depthTest = false, this.depthFunction = I$1.LESS, this.clearDepth = 1, this.depthWrite = true, this.depthRange = { zNear: 0, zFar: 1 }, this.viewport = null, this.stencilTest = false, this.polygonOffsetFill = false, this.polygonOffset = [0, 0], this.stencilFunction = { face: N.FRONT_AND_BACK, func: I$1.ALWAYS, ref: 0, mask: 1 }, this.clearStencil = 0, this.stencilWriteMask = 1, this.stencilOperation = { face: N.FRONT_AND_BACK, fail: O.KEEP, zFail: O.KEEP, zPass: O.KEEP }, this.clearColor = { r: 0, g: 0, b: 0, a: 0 }, this.program = null, this.vertexBuffer = null, this.indexBuffer = null, this.uniformBuffer = null, this.pixelPackBuffer = null, this.pixelUnpackBuffer = null, this.copyReadBuffer = null, this.copyWriteBuffer = null, this.uniformBufferBindingPoints = new Array(), this.readFramebuffer = null, this.drawFramebuffer = null, this.renderbuffer = null, this.activeTexture = 0, this.textureUnitMap = new Array(), this.vertexArrayObject = null;
  }
}
class o$2 {
  constructor(o2) {
    this._allocations = new Map(), o2 ? Error.stackTraceLimit = 1 / 0 : (this.add = () => {
    }, this.remove = () => {
    });
  }
  add(o2) {
    this._allocations.set(o2, new Error().stack);
  }
  remove(o2) {
    this._allocations.delete(o2);
  }
  print() {
    if (this._allocations.size > 0) {
      console.log(`${this._allocations.size} live object allocations:`);
      const o2 = new Map();
      this._allocations.forEach((s2) => {
        var _a;
        o2.set(s2, ((_a = o2.get(s2)) != null ? _a : 0) + 1);
      }), o2.forEach((o3, s2) => {
        const t2 = s2.split("\n");
        t2.shift(), t2.shift(), console.log(`${o3}: ${t2.shift()}`), t2.forEach((o4) => console.log("   ", o4));
      });
    }
  }
}
const e$2 = { RECORD_ALLOCATIONS: false };
class s {
  constructor() {
    for (this._current = new Array(), this._max = new Array(), this._allocations = new o$2(e$2.RECORD_ALLOCATIONS); this._current.length < t$1.COUNT; )
      this._current.push(0), this._max.push(0);
  }
  resetMax() {
    for (this._max.length = 0; this._max.length < this._current.length; )
      this._max.push(0);
  }
  increment(t2, r2) {
    const e2 = ++this._current[t2];
    this._max[t2] = Math.max(e2, this._max[t2]), this._allocations.add(r2);
  }
  decrement(t2, r2) {
    --this._current[t2], this._allocations.remove(r2);
  }
  get max() {
    return this._max;
  }
  get current() {
    return this._current;
  }
  get total() {
    return this.current.reduce((t2, r2) => t2 + r2, 0);
  }
  printResourceCount() {
    if (this.total > 0) {
      console.log("Live objects:");
      for (let t2 = 0; t2 < t$1.COUNT; ++t2) {
        const e2 = this._current[t2];
        e2 > 0 && console.log(`${t$1[t2]}: ${e2}`);
      }
    }
    this._allocations.print();
  }
}
function d(t2, d2) {
  t2.resetState();
  const B = new x$2(t2, { colorTarget: Y.TEXTURE, depthStencilTarget: V.NONE }, { target: M.TEXTURE_2D, wrapMode: D.CLAMP_TO_EDGE, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, width: 1, height: 1 }), E2 = E$2.createVertex(t2, F$1.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), g = new a(t2, new Map([["position", 0]]), { geometry: [new t$2("position", 2, C.UNSIGNED_SHORT, 0, 4)] }, { geometry: E2 }), T2 = r$4(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6), b = r$4(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9), F2 = _$2(t2, T2, b, d2);
  t2.bindFramebuffer(B), t2.setViewport(0, 0, 1, 1), t2.bindVAO(g), t2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4);
  const U2 = new Uint8Array(4);
  B.readPixels(0, 0, 1, 1, P.RGBA, G.UNSIGNED_BYTE, U2), F2.dispose(), g.dispose(false), E2.dispose(), B.dispose();
  const w2 = (T2[2] - b[2]) / 25, O2 = r$3(U2);
  return Math.abs(w2 - O2);
}
function _$2(n2, e2, o2, r2) {
  const i2 = `

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${r2 ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
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
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `, a2 = "\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ", c = n2.programCache.acquire(i2, a2, new Map([["position", 0]])), s2 = new Float32Array(6);
  t$3(e2, s2, 3);
  const l2 = new Float32Array(6);
  return t$3(o2, l2, 3), n2.useProgram(c), c.setUniform3f("u_highA", s2[0], s2[2], s2[4]), c.setUniform3f("u_lowA", s2[1], s2[3], s2[5]), c.setUniform3f("u_highB", l2[0], l2[2], l2[4]), c.setUniform3f("u_lowB", l2[1], l2[3], l2[5]), c;
}
var T, _$1, F, x$1 = { exports: {} };
function A$1(T2) {
  var _a, _b, _c, _d, _e;
  if (!T2.gl)
    return false;
  if (T2.type === r$5.WEBGL1)
    return !(!((_a = T2.capabilities.textureFloat) == null ? void 0 : _a.textureFloat) || !((_b = T2.capabilities.colorBufferFloat) == null ? void 0 : _b.textureFloat));
  if (!(((_c = T2.capabilities.textureFloat) == null ? void 0 : _c.textureFloat) && ((_d = T2.capabilities.colorBufferFloat) == null ? void 0 : _d.textureFloat) && ((_e = T2.capabilities.colorBufferFloat) == null ? void 0 : _e.floatBlend)))
    return false;
  const _2 = new x$2(T2, { colorTarget: Y.TEXTURE, depthStencilTarget: V.NONE }, { target: M.TEXTURE_2D, wrapMode: D.CLAMP_TO_EDGE, pixelFormat: P.RGBA, dataType: G.FLOAT, internalFormat: U.RGBA32F, samplingMode: L.NEAREST, width: 1, height: 1 }), F2 = E$2.createVertex(T2, F$1.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), A2 = new a(T2, new Map([["a_pos", 0]]), { geometry: [new t$2("a_pos", 2, C.UNSIGNED_SHORT, 0, 4)] }, { geometry: F2 }), R2 = "\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ", v2 = "\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ", S2 = T2.programCache.acquire(R2, v2, new Map([["a_pos", 0]]));
  T2.useProgram(S2);
  const h2 = T2.getBoundFramebufferObject(), { x: P$1, y: L$1, width: B, height: C$1 } = T2.getViewport();
  T2.bindFramebuffer(_2), T2.setViewport(0, 0, 1, 1), T2.bindVAO(A2), T2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4);
  const w2 = W({ blending: s$2 });
  T2.setPipelineState(w2), T2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4), x$1.exports.init(T2);
  const O2 = T2.gl.getError();
  return T2.setViewport(P$1, L$1, B, C$1), T2.bindFramebuffer(h2), S2.dispose(), A2.dispose(false), F2.dispose(), _2.dispose(), O2 !== 1282 || (console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."), false);
}
T = x$1, _$1 = function() {
  var e2 = function(e3) {
    window.console && window.console.log && window.console.log(e3);
  }, t2 = function(t3) {
    window.console && window.console.error ? window.console.error(t3) : e2(t3);
  }, r2 = { enable: { 1: { 0: true } }, disable: { 1: { 0: true } }, getParameter: { 1: { 0: true } }, drawArrays: { 3: { 0: true } }, drawElements: { 4: { 0: true, 2: true } }, createShader: { 1: { 0: true } }, getShaderParameter: { 2: { 1: true } }, getProgramParameter: { 2: { 1: true } }, getShaderPrecisionFormat: { 2: { 0: true, 1: true } }, getVertexAttrib: { 2: { 1: true } }, vertexAttribPointer: { 6: { 2: true } }, bindTexture: { 2: { 0: true } }, activeTexture: { 1: { 0: true } }, getTexParameter: { 2: { 0: true, 1: true } }, texParameterf: { 3: { 0: true, 1: true } }, texParameteri: { 3: { 0: true, 1: true, 2: true } }, texImage2D: { 9: { 0: true, 2: true, 6: true, 7: true }, 6: { 0: true, 2: true, 3: true, 4: true } }, texSubImage2D: { 9: { 0: true, 6: true, 7: true }, 7: { 0: true, 4: true, 5: true } }, copyTexImage2D: { 8: { 0: true, 2: true } }, copyTexSubImage2D: { 8: { 0: true } }, generateMipmap: { 1: { 0: true } }, compressedTexImage2D: { 7: { 0: true, 2: true } }, compressedTexSubImage2D: { 8: { 0: true, 6: true } }, bindBuffer: { 2: { 0: true } }, bufferData: { 3: { 0: true, 2: true } }, bufferSubData: { 3: { 0: true } }, getBufferParameter: { 2: { 0: true, 1: true } }, pixelStorei: { 2: { 0: true, 1: true } }, readPixels: { 7: { 4: true, 5: true } }, bindRenderbuffer: { 2: { 0: true } }, bindFramebuffer: { 2: { 0: true } }, checkFramebufferStatus: { 1: { 0: true } }, framebufferRenderbuffer: { 4: { 0: true, 1: true, 2: true } }, framebufferTexture2D: { 5: { 0: true, 1: true, 2: true } }, getFramebufferAttachmentParameter: { 3: { 0: true, 1: true, 2: true } }, getRenderbufferParameter: { 2: { 0: true, 1: true } }, renderbufferStorage: { 4: { 0: true, 1: true } }, clear: { 1: { 0: { enumBitwiseOr: ["COLOR_BUFFER_BIT", "DEPTH_BUFFER_BIT", "STENCIL_BUFFER_BIT"] } } }, depthFunc: { 1: { 0: true } }, blendFunc: { 2: { 0: true, 1: true } }, blendFuncSeparate: { 4: { 0: true, 1: true, 2: true, 3: true } }, blendEquation: { 1: { 0: true } }, blendEquationSeparate: { 2: { 0: true, 1: true } }, stencilFunc: { 3: { 0: true } }, stencilFuncSeparate: { 4: { 0: true, 1: true } }, stencilMaskSeparate: { 2: { 0: true } }, stencilOp: { 3: { 0: true, 1: true, 2: true } }, stencilOpSeparate: { 4: { 0: true, 1: true, 2: true, 3: true } }, cullFace: { 1: { 0: true } }, frontFace: { 1: { 0: true } }, drawArraysInstancedANGLE: { 4: { 0: true } }, drawElementsInstancedANGLE: { 5: { 0: true, 2: true } }, blendEquationEXT: { 1: { 0: true } } }, n2 = null, o2 = null;
  function a2(e3) {
    if (n2 == null)
      for (var t3 in n2 = {}, o2 = {}, e3)
        typeof e3[t3] == "number" && (n2[e3[t3]] = t3, o2[t3] = e3[t3]);
  }
  function i2() {
    if (n2 == null)
      throw "WebGLDebugUtils.init(ctx) not called";
  }
  function f2(e3) {
    return i2(), n2[e3] !== void 0;
  }
  function u(e3) {
    i2();
    var t3 = n2[e3];
    return t3 !== void 0 ? "gl." + t3 : "/*UNKNOWN WebGL ENUM*/ 0x" + e3.toString(16);
  }
  function l2(e3, t3, n3, a3) {
    var i3;
    if ((i3 = r2[e3]) !== void 0 && (i3 = i3[t3]) !== void 0 && i3[n3]) {
      if (typeof i3[n3] == "object" && i3[n3].enumBitwiseOr !== void 0) {
        for (var f3 = i3[n3].enumBitwiseOr, l3 = 0, c2 = [], s3 = 0; s3 < f3.length; ++s3) {
          var d3 = o2[f3[s3]];
          (a3 & d3) != 0 && (l3 |= d3, c2.push(u(d3)));
        }
        return l3 === a3 ? c2.join(" | ") : u(a3);
      }
      return u(a3);
    }
    return a3 === null ? "null" : a3 === void 0 ? "undefined" : a3.toString();
  }
  function c(e3, t3) {
    for (var r3 = "", n3 = t3.length, o3 = 0; o3 < n3; ++o3)
      r3 += (o3 == 0 ? "" : ", ") + l2(e3, n3, o3, t3[o3]);
    return r3;
  }
  function s2(e3, t3, r3) {
    e3.__defineGetter__(r3, function() {
      return t3[r3];
    }), e3.__defineSetter__(r3, function(e4) {
      t3[r3] = e4;
    });
  }
  function d2(e3, r3, n3, o3) {
    o3 = o3 || e3, a2(e3), r3 = r3 || function(e4, r4, n4) {
      for (var o4 = "", a3 = n4.length, i4 = 0; i4 < a3; ++i4)
        o4 += (i4 == 0 ? "" : ", ") + l2(r4, a3, i4, n4[i4]);
      t2("WebGL error " + u(e4) + " in " + r4 + "(" + o4 + ")");
    };
    var i3 = {};
    function f3(e4, t3) {
      return function() {
        n3 && n3(t3, arguments);
        var a3 = e4[t3].apply(e4, arguments), f4 = o3.getError();
        return f4 != 0 && (i3[f4] = true, r3(f4, t3, arguments)), a3;
      };
    }
    var c2 = {};
    for (var g2 in e3)
      if (typeof e3[g2] == "function")
        if (g2 != "getExtension")
          c2[g2] = f3(e3, g2);
        else {
          var b2 = f3(e3, g2);
          c2[g2] = function() {
            return d2(b2.apply(e3, arguments), r3, n3, o3);
          };
        }
      else
        s2(c2, e3, g2);
    return c2.getError = function() {
      for (var t3 in i3)
        if (i3.hasOwnProperty(t3) && i3[t3])
          return i3[t3] = false, t3;
      return e3.NO_ERROR;
    }, c2;
  }
  function g(e3) {
    var t3 = e3.getParameter(e3.MAX_VERTEX_ATTRIBS), r3 = e3.createBuffer();
    e3.bindBuffer(e3.ARRAY_BUFFER, r3);
    for (var n3 = 0; n3 < t3; ++n3)
      e3.disableVertexAttribArray(n3), e3.vertexAttribPointer(n3, 4, e3.FLOAT, false, 0, 0), e3.vertexAttrib1f(n3, 0);
    e3.deleteBuffer(r3);
    var o3 = e3.getParameter(e3.MAX_TEXTURE_IMAGE_UNITS);
    for (n3 = 0; n3 < o3; ++n3)
      e3.activeTexture(e3.TEXTURE0 + n3), e3.bindTexture(e3.TEXTURE_CUBE_MAP, null), e3.bindTexture(e3.TEXTURE_2D, null);
    for (e3.activeTexture(e3.TEXTURE0), e3.useProgram(null), e3.bindBuffer(e3.ARRAY_BUFFER, null), e3.bindBuffer(e3.ELEMENT_ARRAY_BUFFER, null), e3.bindFramebuffer(e3.FRAMEBUFFER, null), e3.bindRenderbuffer(e3.RENDERBUFFER, null), e3.disable(e3.BLEND), e3.disable(e3.CULL_FACE), e3.disable(e3.DEPTH_TEST), e3.disable(e3.DITHER), e3.disable(e3.SCISSOR_TEST), e3.blendColor(0, 0, 0, 0), e3.blendEquation(e3.FUNC_ADD), e3.blendFunc(e3.ONE, e3.ZERO), e3.clearColor(0, 0, 0, 0), e3.clearDepth(1), e3.clearStencil(-1), e3.colorMask(true, true, true, true), e3.cullFace(e3.BACK), e3.depthFunc(e3.LESS), e3.depthMask(true), e3.depthRange(0, 1), e3.frontFace(e3.CCW), e3.hint(e3.GENERATE_MIPMAP_HINT, e3.DONT_CARE), e3.lineWidth(1), e3.pixelStorei(e3.PACK_ALIGNMENT, 4), e3.pixelStorei(e3.UNPACK_ALIGNMENT, 4), e3.pixelStorei(e3.UNPACK_FLIP_Y_WEBGL, false), e3.pixelStorei(e3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), e3.UNPACK_COLORSPACE_CONVERSION_WEBGL && e3.pixelStorei(e3.UNPACK_COLORSPACE_CONVERSION_WEBGL, e3.BROWSER_DEFAULT_WEBGL), e3.polygonOffset(0, 0), e3.sampleCoverage(1, false), e3.scissor(0, 0, e3.canvas.width, e3.canvas.height), e3.stencilFunc(e3.ALWAYS, 0, 4294967295), e3.stencilMask(4294967295), e3.stencilOp(e3.KEEP, e3.KEEP, e3.KEEP), e3.viewport(0, 0, e3.canvas.width, e3.canvas.height), e3.clear(e3.COLOR_BUFFER_BIT | e3.DEPTH_BUFFER_BIT | e3.STENCIL_BUFFER_BIT); e3.getError(); )
      ;
  }
  function b(e3) {
    var t3, r3, n3 = [], o3 = [], a3 = {}, i3 = 1, f3 = false, u2 = [], l3 = 0, c2 = 0, d3 = false, b2 = 0, E2 = {};
    function p(e4) {
      return typeof e4 == "function" ? e4 : function(t4) {
        e4.handleEvent(t4);
      };
    }
    e3.getContext = (r3 = e3.getContext, function() {
      var n4 = r3.apply(e3, arguments);
      if (n4 instanceof WebGLRenderingContext) {
        if (n4 != t3) {
          if (t3)
            throw "got different context";
          a3 = S2(t3 = n4);
        }
        return a3;
      }
      return n4;
    });
    var m2 = function(e4) {
      n3.push(p(e4));
    }, T2 = function(e4) {
      o3.push(p(e4));
    };
    function _2(e4) {
      var t4 = e4.addEventListener;
      e4.addEventListener = function(r4, n4, o4) {
        switch (r4) {
          case "webglcontextlost":
            m2(n4);
            break;
          case "webglcontextrestored":
            T2(n4);
            break;
          default:
            t4.apply(e4, arguments);
        }
      };
    }
    function F2() {
      for (var e4 = Object.keys(E2), t4 = 0; t4 < e4.length; ++t4)
        delete E2[e4];
    }
    function x2() {
      ++c2, f3 || l3 == c2 && e3.loseContext();
    }
    function A2(e4, t4) {
      var r4 = e4[t4];
      return function() {
        if (x2(), !f3)
          return r4.apply(e4, arguments);
      };
    }
    function R2() {
      for (var e4 = 0; e4 < u2.length; ++e4) {
        var r4 = u2[e4];
        r4 instanceof WebGLBuffer ? t3.deleteBuffer(r4) : r4 instanceof WebGLFramebuffer ? t3.deleteFramebuffer(r4) : r4 instanceof WebGLProgram ? t3.deleteProgram(r4) : r4 instanceof WebGLRenderbuffer ? t3.deleteRenderbuffer(r4) : r4 instanceof WebGLShader ? t3.deleteShader(r4) : r4 instanceof WebGLTexture && t3.deleteTexture(r4);
      }
    }
    function v2(e4) {
      return { statusMessage: e4, preventDefault: function() {
        d3 = true;
      } };
    }
    return _2(e3), e3.loseContext = function() {
      if (!f3) {
        for (f3 = true, l3 = 0, ++i3; t3.getError(); )
          ;
        F2(), E2[t3.CONTEXT_LOST_WEBGL] = true;
        var r4 = v2("context lost"), o4 = n3.slice();
        setTimeout(function() {
          for (var t4 = 0; t4 < o4.length; ++t4)
            o4[t4](r4);
          b2 >= 0 && setTimeout(function() {
            e3.restoreContext();
          }, b2);
        }, 0);
      }
    }, e3.restoreContext = function() {
      f3 && o3.length && setTimeout(function() {
        if (!d3)
          throw "can not restore. webglcontestlost listener did not call event.preventDefault";
        R2(), g(t3), f3 = false, c2 = 0, d3 = false;
        for (var e4 = o3.slice(), r4 = v2("context restored"), n4 = 0; n4 < e4.length; ++n4)
          e4[n4](r4);
      }, 0);
    }, e3.loseContextInNCalls = function(e4) {
      if (f3)
        throw "You can not ask a lost contet to be lost";
      l3 = c2 + e4;
    }, e3.getNumCalls = function() {
      return c2;
    }, e3.setRestoreTimeout = function(e4) {
      b2 = e4;
    }, e3;
    function S2(e4) {
      for (var r4 in e4)
        typeof e4[r4] == "function" ? a3[r4] = A2(e4, r4) : s2(a3, e4, r4);
      a3.getError = function() {
        if (x2(), !f3)
          for (; e5 = t3.getError(); )
            E2[e5] = true;
        for (var e5 in E2)
          if (E2[e5])
            return delete E2[e5], e5;
        return a3.NO_ERROR;
      };
      for (var n4 = ["createBuffer", "createFramebuffer", "createProgram", "createRenderbuffer", "createShader", "createTexture"], o4 = 0; o4 < n4.length; ++o4) {
        var l4 = n4[o4];
        a3[l4] = function(t4) {
          return function() {
            if (x2(), f3)
              return null;
            var r5 = t4.apply(e4, arguments);
            return r5.__webglDebugContextLostId__ = i3, u2.push(r5), r5;
          };
        }(e4[l4]);
      }
      var c3 = ["getActiveAttrib", "getActiveUniform", "getBufferParameter", "getContextAttributes", "getAttachedShaders", "getFramebufferAttachmentParameter", "getParameter", "getProgramParameter", "getProgramInfoLog", "getRenderbufferParameter", "getShaderParameter", "getShaderInfoLog", "getShaderSource", "getTexParameter", "getUniform", "getUniformLocation", "getVertexAttrib"];
      for (o4 = 0; o4 < c3.length; ++o4)
        l4 = c3[o4], a3[l4] = function(t4) {
          return function() {
            return x2(), f3 ? null : t4.apply(e4, arguments);
          };
        }(a3[l4]);
      var d4 = ["isBuffer", "isEnabled", "isFramebuffer", "isProgram", "isRenderbuffer", "isShader", "isTexture"];
      for (o4 = 0; o4 < d4.length; ++o4)
        l4 = d4[o4], a3[l4] = function(t4) {
          return function() {
            return x2(), !f3 && t4.apply(e4, arguments);
          };
        }(a3[l4]);
      return a3.checkFramebufferStatus = function(t4) {
        return function() {
          return x2(), f3 ? a3.FRAMEBUFFER_UNSUPPORTED : t4.apply(e4, arguments);
        };
      }(a3.checkFramebufferStatus), a3.getAttribLocation = function(t4) {
        return function() {
          return x2(), f3 ? -1 : t4.apply(e4, arguments);
        };
      }(a3.getAttribLocation), a3.getVertexAttribOffset = function(t4) {
        return function() {
          return x2(), f3 ? 0 : t4.apply(e4, arguments);
        };
      }(a3.getVertexAttribOffset), a3.isContextLost = function() {
        return f3;
      }, a3;
    }
  }
  return { init: a2, mightBeEnum: f2, glEnumToString: u, glFunctionArgToString: l2, glFunctionArgsToString: c, makeDebugContext: d2, makeLostContextSimulatingCanvas: b, resetToInitialState: g };
}, (F = _$1()) !== void 0 && (T.exports = F);
function w(w2) {
  const h2 = new x$2(w2, { colorTarget: Y.TEXTURE, depthStencilTarget: V.NONE }, { target: M.TEXTURE_2D, wrapMode: D.CLAMP_TO_EDGE, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, width: 1, height: 1 }), _2 = "\nprecision highp float;\nattribute vec2 a_pos;\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n", T2 = "\nprecision highp float;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n", b = new Uint8Array(4), v2 = E$2.createVertex(w2, F$1.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), E2 = new a(w2, new Map([["a_position", 0]]), { geometry: [new t$2("a_position", 2, C.SHORT, 0, 4)] }, { geometry: v2 }), A2 = w2.programCache.acquire(_2, T2, new Map([["a_pos", 0]]));
  w2.useProgram(A2);
  const x2 = new E$4(w2, { target: M.TEXTURE_2D, wrapMode: D.CLAMP_TO_EDGE, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, width: 1, height: 1 }, new Uint8Array([2, 255, 0, 0]));
  A2.setUniform1i("u_texture", 0), w2.bindTexture(x2, 0);
  const y2 = w2.getBoundFramebufferObject();
  w2.bindFramebuffer(h2), w2.useProgram(A2);
  const { x: R2, y: j, width: D$1, height: N2 } = w2.getViewport();
  w2.setViewport(0, 0, 1, 1), w2.bindVAO(E2), w2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4), w2.setViewport(R2, j, D$1, N2), h2.readPixels(0, 0, 1, 1, P.RGBA, G.UNSIGNED_BYTE, b), A2.dispose(), E2.dispose(false), v2.dispose(), h2.dispose();
  const B = b[0] !== 255 || b[1] !== 255 || b[2] !== 255 || b[3] !== 255;
  return B && s$3.getLogger("esri.views.webgl.testSamplerPrecision").warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${b[0]}.${b[1]}.${b[2]}.${b[3]}]`), w2.bindFramebuffer(y2), B;
}
async function f(f2) {
  const w2 = new Image();
  if (w2.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A", w2.width = 5, w2.height = 5, await w2.decode(), !f2.gl)
    return true;
  const _2 = new x$2(f2, { colorTarget: Y.TEXTURE, depthStencilTarget: V.NONE }, { target: M.TEXTURE_2D, wrapMode: D.CLAMP_TO_EDGE, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, width: 1, height: 1 }), E2 = E$2.createVertex(f2, F$1.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), h2 = new a(f2, new Map([["a_pos", 0]]), m, { geometry: E2 }), v2 = "\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ", T2 = "\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ", x2 = f2.programCache.acquire(v2, T2, new Map([["a_pos", 0]]));
  f2.useProgram(x2);
  const A2 = new E$4(f2, { dataType: G.UNSIGNED_BYTE, pixelFormat: P.RGBA, preMultiplyAlpha: false, wrapMode: D.CLAMP_TO_EDGE, samplingMode: L.LINEAR }, w2);
  f2.bindTexture(A2, 0), x2.setUniform1i("u_texture", 0);
  const b = f2.getBoundFramebufferObject(), { x: y2, y: B, width: C2, height: F2 } = f2.getViewport();
  f2.bindFramebuffer(_2), f2.setViewport(0, 0, 1, 1), f2.setClearColor(0, 0, 0, 0), f2.setBlendingEnabled(false), f2.clearSafe(_$3.COLOR_BUFFER_BIT), f2.bindVAO(h2), f2.drawArrays(E$3.TRIANGLE_STRIP, 0, 4);
  const R2 = new Uint8Array(4);
  return _2.readPixels(0, 0, 1, 1, P.RGBA, G.UNSIGNED_BYTE, R2), x2.dispose(), h2.dispose(false), E2.dispose(), _2.dispose(), A2.dispose(), f2.setViewport(y2, B, C2, F2), f2.bindFramebuffer(b), w2.src = "", R2[0] === 255;
}
class o$1 {
  constructor(e2) {
    this.context = e2, this._floatBufferBlendWorking = A$1(e2), f(e2).then((e3) => this._svgAlwaysPremultipliesAlpha = !e3);
  }
  get floatBufferBlendWorking() {
    if (t$4(this._floatBufferBlendWorking))
      throw new Error("floatBufferBlendWorking test not yet available");
    return this._floatBufferBlendWorking;
  }
  get svgAlwaysPremultipliesAlpha() {
    if (t$4(this._svgAlwaysPremultipliesAlpha))
      throw new Error("svgAlwaysPremultipliesAlpha test not yet available");
    return this._svgAlwaysPremultipliesAlpha;
  }
  get doublePrecisionRequiresObfuscation() {
    if (t$4(this._doublePrecisionRequiresObfuscation)) {
      const e2 = d(this.context, false), i2 = d(this.context, true);
      this._doublePrecisionRequiresObfuscation = e2 !== 0 && (i2 === 0 || e2 / i2 > 5);
    }
    return this._doublePrecisionRequiresObfuscation;
  }
  get ignoresSamplerPrecision() {
    return t$4(this._ignoresSamplerPrecision) && (this._ignoresSamplerPrecision = w(this.context)), this._ignoresSamplerPrecision;
  }
}
function A(A2, _2) {
  if (_2.disjointTimerQuery)
    return null;
  if (n$3(A2))
    return { drawBuffers: A2.drawBuffers.bind(A2), MAX_DRAW_BUFFERS: A2.MAX_DRAW_BUFFERS, MAX_COLOR_ATTACHMENTS: A2.MAX_COLOR_ATTACHMENTS };
  if (_2.drawBuffers)
    return null;
  const e2 = A2.getExtension("WEBGL_draw_buffers");
  return e2 ? { drawBuffers: e2.drawBuffersWEBGL.bind(e2), MAX_DRAW_BUFFERS: e2.MAX_DRAW_BUFFERS_WEBGL, MAX_COLOR_ATTACHMENTS: e2.MAX_COLOR_ATTACHMENTS_WEBGL } : null;
}
function r$2(r2) {
  if (n$3(r2))
    return r2;
  const t2 = r2.getExtension("ANGLE_instanced_arrays");
  return t2 ? { drawArraysInstanced: t2.drawArraysInstancedANGLE.bind(t2), drawElementsInstanced: t2.drawElementsInstancedANGLE.bind(t2), vertexAttribDivisor: t2.vertexAttribDivisorANGLE.bind(t2) } : null;
}
function _(t2, _2) {
  if (_2.compressedTextureETC)
    return null;
  const e2 = t2.getExtension("WEBGL_compressed_texture_etc");
  return e2 ? { COMPRESSED_R11_EAC: e2.COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC: e2.COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC: e2.COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC: e2.COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2: e2.COMPRESSED_RGB8_ETC2, COMPRESSED_SRGB8_ETC2: e2.COMPRESSED_SRGB8_ETC2, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: e2.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: e2.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGBA8_ETC2_EAC: e2.COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: e2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC } : null;
}
function e$1(t2, _2) {
  if (_2.compressedTextureS3TC)
    return null;
  const e2 = t2.getExtension("WEBGL_compressed_texture_s3tc");
  return e2 ? { COMPRESSED_RGB_S3TC_DXT1: e2.COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1: e2.COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3: e2.COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5: e2.COMPRESSED_RGBA_S3TC_DXT5_EXT } : null;
}
function E(_2, e2) {
  if (n$3(_2))
    return { MIN: _2.MIN, MAX: _2.MAX };
  if (e2.blendMinMax)
    return null;
  {
    const t2 = _2.getExtension("EXT_blend_minmax");
    return t2 ? { MIN: t2.MIN_EXT, MAX: t2.MAX_EXT } : null;
  }
}
function n(t2, _2) {
  if (_2.textureFilterAnisotropic)
    return null;
  const e2 = t2.getExtension("EXT_texture_filter_anisotropic") || t2.getExtension("MOZ_EXT_texture_filter_anisotropic") || t2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  return e2 ? { MAX_TEXTURE_MAX_ANISOTROPY: e2.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY: e2.TEXTURE_MAX_ANISOTROPY_EXT } : null;
}
function R(_2, e2) {
  if (n$3(_2))
    return { textureFloat: true, textureFloatLinear: !e2.textureFloatLinear && !!_2.getExtension("OES_texture_float_linear"), textureHalfFloat: true, textureHalfFloatLinear: true, HALF_FLOAT: _2.HALF_FLOAT, R16F: _2.R16F, RG16F: _2.RG16F, RGBA16F: _2.RGBA16F, R32F: _2.R32F, RG32F: _2.RG32F, RGBA32F: _2.RGBA32F, R11F_G11F_B10F: _2.R11F_G11F_B10F, RGB16F: _2.RGB16F };
  if (_2 instanceof WebGLRenderingContext) {
    const t2 = !e2.textureHalfFloat && _2.getExtension("OES_texture_half_float");
    return { textureFloat: !e2.textureFloat && !!_2.getExtension("OES_texture_float"), textureFloatLinear: !e2.textureFloatLinear && !!_2.getExtension("OES_texture_float_linear"), textureHalfFloat: !!t2, textureHalfFloatLinear: !e2.textureHalfFloatLinear && !!_2.getExtension("OES_texture_half_float_linear"), HALF_FLOAT: t2 ? t2.HALF_FLOAT_OES : void 0 };
  }
  return null;
}
function r$1(_2, e2) {
  if (n$3(_2)) {
    const t2 = !e2.colorBufferHalfFloat && _2.getExtension("EXT_color_buffer_half_float") || !e2.colorBufferFloat && _2.getExtension("EXT_color_buffer_float"), E2 = !e2.colorBufferFloat && _2.getExtension("EXT_color_buffer_float"), n2 = !e2.floatBlend && !e2.colorBufferFloat && _2.getExtension("EXT_float_blend");
    return t2 || E2 || n2 ? { textureFloat: !!E2, textureHalfFloat: !!t2, floatBlend: !!n2, R16F: _2.R16F, RG16F: _2.RG16F, RGBA16F: _2.RGBA16F, R32F: _2.R32F, RG32F: _2.RG32F, RGBA32F: _2.RGBA32F, R11F_G11F_B10F: _2.R11F_G11F_B10F, RGB16F: _2.RGB16F } : null;
  }
  if (_2 instanceof WebGLRenderingContext) {
    const t2 = !e2.colorBufferHalfFloat && _2.getExtension("EXT_color_buffer_half_float"), E2 = !e2.colorBufferFloat && _2.getExtension("WEBGL_color_buffer_float"), n2 = !e2.floatBlend && !e2.colorBufferFloat && _2.getExtension("EXT_float_blend");
    return t2 || E2 || n2 ? { textureFloat: !!E2, textureHalfFloat: !!t2, floatBlend: !!n2, RGBA16F: t2 ? t2.RGBA16F_EXT : void 0, RGB16F: t2 ? t2.RGB16F_EXT : void 0, RGBA32F: E2 ? E2.RGBA32F_EXT : void 0 } : null;
  }
  return null;
}
function o(_2, e2, E2, n2, R2) {
  if (n2 && n$3(_2))
    return true;
  if (e2[E2])
    return false;
  for (const t2 of R2)
    if (_2.getExtension(t2))
      return true;
  return false;
}
function l(_2, e2) {
  if (!n$3(_2))
    return null;
  if (e2.textureNorm16)
    return null;
  const E2 = _2.getExtension("EXT_texture_norm16");
  return E2 ? { R16: E2.R16_EXT, RG16: E2.RG16_EXT, RGB16: E2.RGB16_EXT, RGBA16: E2.RGBA16_EXT, R16_SNORM: E2.R16_SNORM_EXT, RG16_SNORM: E2.RG16_SNORM_EXT, RGB16_SNORM: E2.RGB16_SNORM_EXT, RGBA16_SNORM: E2.RGBA16_SNORM_EXT } : null;
}
function e(e2, t2) {
  const n2 = t2.loseContext && e2.getExtension("WEBGL_lose_context");
  return n2 ? { loseRenderingContext: () => n2.loseContext() } : null;
}
function r(r2, t2) {
  if (n$3(r2))
    return { createVertexArray: r2.createVertexArray.bind(r2), deleteVertexArray: r2.deleteVertexArray.bind(r2), bindVertexArray: r2.bindVertexArray.bind(r2) };
  if (t2.vao)
    return null;
  const n2 = r2.getExtension("OES_vertex_array_object") || r2.getExtension("MOZ_OES_vertex_array_object") || r2.getExtension("WEBKIT_OES_vertex_array_object");
  return n2 ? { createVertexArray: n2.createVertexArrayOES.bind(n2), deleteVertexArray: n2.deleteVertexArrayOES.bind(n2), bindVertexArray: n2.bindVertexArrayOES.bind(n2) } : null;
}
class x {
  constructor(t2, e2) {
    this._gl = t2, this._instancing = null, this._vertexArrayObject = null, this._compressedTextureETC = null, this._compressedTextureS3TC = null, this._textureFilterAnisotropic = null, this._textureFloat = null, this._colorBufferFloat = null, this._minMaxBlending = null, this._loseContext = null, this._drawBuffers = null, this._textureNorm16 = null, this._depthTexture = null, this._standardDerivatives = null, this._shaderTextureLOD = null, this._fragDepth = null, this._textureFloatLinear = null, this._disabledExtensions = e2.disabledExtensions || {}, this._debugWebGLExtensions = e2.debugWebGLExtensions || {};
  }
  get drawBuffers() {
    return this._drawBuffers || (this._drawBuffers = A(this._gl, this._disabledExtensions)), this._drawBuffers;
  }
  get instancing() {
    return this._instancing || (this._instancing = r$2(this._gl)), this._instancing;
  }
  get vao() {
    return this._vertexArrayObject || (this._vertexArrayObject = r(this._gl, this._disabledExtensions)), this._vertexArrayObject;
  }
  get compressedTextureETC() {
    return this._compressedTextureETC || (this._compressedTextureETC = _(this._gl, this._disabledExtensions)), this._compressedTextureETC;
  }
  get compressedTextureS3TC() {
    return this._compressedTextureS3TC || (this._compressedTextureS3TC = e$1(this._gl, this._disabledExtensions)), this._compressedTextureS3TC;
  }
  get textureFilterAnisotropic() {
    return this._textureFilterAnisotropic || (this._textureFilterAnisotropic = n(this._gl, this._disabledExtensions)), this._textureFilterAnisotropic;
  }
  get disjointTimerQuery() {
    return this._disjointTimerQuery || (this._disjointTimerQuery = T$1(this._gl, this._disabledExtensions)), this._disjointTimerQuery;
  }
  get textureFloat() {
    return this._textureFloat || (this._textureFloat = R(this._gl, this._disabledExtensions)), this._textureFloat;
  }
  get colorBufferFloat() {
    return this._colorBufferFloat || (this._colorBufferFloat = r$1(this._gl, this._disabledExtensions)), this._colorBufferFloat;
  }
  get blendMinMax() {
    return this._minMaxBlending || (this._minMaxBlending = E(this._gl, this._disabledExtensions)), this._minMaxBlending;
  }
  get depthTexture() {
    return this._depthTexture === null && (this._depthTexture = o(this._gl, this._disabledExtensions, "depthTexture", true, ["WEBGL_depth_texture", "MOZ_WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture"])), this._depthTexture;
  }
  get standardDerivatives() {
    return this._standardDerivatives === null && (this._standardDerivatives = o(this._gl, this._disabledExtensions, "standardDerivatives", true, ["OES_standard_derivatives"])), this._standardDerivatives;
  }
  get shaderTextureLOD() {
    return this._shaderTextureLOD === null && (this._shaderTextureLOD = o(this._gl, this._disabledExtensions, "shaderTextureLOD", true, ["EXT_shader_texture_lod"])), this._shaderTextureLOD;
  }
  get fragDepth() {
    return this._fragDepth === null && (this._fragDepth = o(this._gl, this._disabledExtensions, "fragDepth", true, ["EXT_frag_depth"])), this._fragDepth;
  }
  get loseContext() {
    return this._loseContext || (this._loseContext = e(this._gl, this._debugWebGLExtensions)), this._loseContext;
  }
  get textureNorm16() {
    return this._textureNorm16 || (this._textureNorm16 = l(this._gl, this._disabledExtensions)), this._textureNorm16;
  }
  get textureFloatLinear() {
    return this._textureFloatLinear === null && (this._textureFloatLinear = o(this._gl, this._disabledExtensions, "textureFloatLinear", false, ["OES_texture_float_linear"])), this._textureFloatLinear;
  }
  enable(t2) {
    return this[t2];
  }
}
class y {
  constructor(t2, e2) {
    this.gl = t2, this.instanceCounter = new s(), this.programCache = new s$4(this), this._state = new h(), this._numOfDrawCalls = 0, this._numOfTriangles = 0, this.type = n$3(t2) ? r$5.WEBGL2 : r$5.WEBGL1, this._loadExtensions(), this.configure(e2);
  }
  configure(t2) {
    this._capabilities = new x(this.gl, t2), this._parameters = this._loadParameters(t2);
    const e2 = this.gl.getParameter(this.gl.VIEWPORT);
    this._state = new h(), this._state.viewport = { x: e2[0], y: e2[1], width: e2[2], height: e2[3] }, this._stateTracker = new M$1({ setBlending: (t3) => {
      if (t3) {
        this.setBlendingEnabled(true), this.setBlendEquationSeparate(t3.opRgb, t3.opAlpha), this.setBlendFunctionSeparate(t3.srcRgb, t3.dstRgb, t3.srcAlpha, t3.dstAlpha);
        const e3 = t3.color;
        this.setBlendColor(e3.r, e3.g, e3.b, e3.a);
      } else
        this.setBlendingEnabled(false);
    }, setCulling: (t3) => {
      t3 ? (this.setFaceCullingEnabled(true), this.setCullFace(t3.face), this.setFrontFace(t3.mode)) : this.setFaceCullingEnabled(false);
    }, setPolygonOffset: (t3) => {
      t3 ? (this.setPolygonOffsetFillEnabled(true), this.setPolygonOffset(t3.factor, t3.units)) : this.setPolygonOffsetFillEnabled(false);
    }, setDepthTest: (t3) => {
      t3 ? (this.setDepthTestEnabled(true), this.setDepthFunction(t3.func)) : this.setDepthTestEnabled(false);
    }, setStencilTest: (t3) => {
      if (t3) {
        this.setStencilTestEnabled(true);
        const e3 = t3.function;
        this.setStencilFunction(e3.func, e3.ref, e3.mask);
        const s2 = t3.operation;
        this.setStencilOp(s2.fail, s2.zFail, s2.zPass);
      } else
        this.setStencilTestEnabled(false);
    }, setDepthWrite: (t3) => {
      t3 ? (this.setDepthWriteEnabled(true), this.setDepthRange(t3.zNear, t3.zFar)) : this.setDepthWriteEnabled(false);
    }, setColorWrite: (t3) => {
      t3 ? this.setColorMask(t3.r, t3.g, t3.b, t3.a) : this.setColorMask(false, false, false, false);
    }, setStencilWrite: (t3) => {
      t3 ? this.setStencilWriteMask(t3.mask) : this.setStencilWriteMask(0);
    } }), this.enforceState(), this._driverTest = new o$1(this);
  }
  get driverTest() {
    return this._driverTest;
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    return this._parameters;
  }
  dispose() {
    this.programCache.dispose(), this.bindVAO(null), this.unbindBuffer(A$2.ARRAY_BUFFER), this.unbindBuffer(A$2.ELEMENT_ARRAY_BUFFER), n$3(this.gl) && (this.unbindBuffer(A$2.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(A$2.PIXEL_PACK_BUFFER), this.unbindBuffer(A$2.PIXEL_UNPACK_BUFFER), this.unbindBuffer(A$2.COPY_READ_BUFFER), this.unbindBuffer(A$2.COPY_WRITE_BUFFER)), this._state.textureUnitMap.length = 0, a$1() && this.instanceCounter.printResourceCount();
  }
  setPipelineState(t2) {
    this._stateTracker.setPipeline(t2);
  }
  setBlendingEnabled(t2) {
    this._state.blend !== t2 && (t2 === true ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._state.blend = t2, this._stateTracker.invalidateBlending());
  }
  externalProgramUpdate() {
    var _a;
    (_a = this._state.program) == null ? void 0 : _a.stop(), this._state.program = null;
  }
  externalTextureUnitUpdate(t2, e2) {
    for (let s2 = 0; s2 < t2.length; ++s2)
      this._state.textureUnitMap[t2[s2]] = null;
    e2 >= 0 && (this._state.activeTexture = e2);
  }
  externalVertexArrayObjectUpdate() {
    const t2 = this.capabilities.vao;
    t2 && (t2.bindVertexArray(null), this._state.vertexArrayObject = null), this._state.vertexBuffer = null, this._state.indexBuffer = null;
  }
  externalVertexBufferUpdate() {
    this._state.vertexBuffer = null;
  }
  externalIndexBufferUpdate() {
    this._state.indexBuffer = null;
  }
  setBlendColor(t2, e2, s2, i2) {
    t2 === this._state.blendColor.r && e2 === this._state.blendColor.g && s2 === this._state.blendColor.b && i2 === this._state.blendColor.a || (this.gl.blendColor(t2, e2, s2, i2), this._state.blendColor.r = t2, this._state.blendColor.g = e2, this._state.blendColor.b = s2, this._state.blendColor.a = i2, this._stateTracker.invalidateBlending());
  }
  setBlendFunction(t2, e2) {
    t2 === this._state.blendFunction.srcRGB && e2 === this._state.blendFunction.dstRGB || (this.gl.blendFunc(t2, e2), this._state.blendFunction.srcRGB = t2, this._state.blendFunction.srcAlpha = t2, this._state.blendFunction.dstRGB = e2, this._state.blendFunction.dstAlpha = e2, this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(t2, e2, s2, i2) {
    this._state.blendFunction.srcRGB === t2 && this._state.blendFunction.srcAlpha === s2 && this._state.blendFunction.dstRGB === e2 && this._state.blendFunction.dstAlpha === i2 || (this.gl.blendFuncSeparate(t2, e2, s2, i2), this._state.blendFunction.srcRGB = t2, this._state.blendFunction.srcAlpha = s2, this._state.blendFunction.dstRGB = e2, this._state.blendFunction.dstAlpha = i2, this._stateTracker.invalidateBlending());
  }
  setBlendEquation(t2) {
    this._state.blendEquation.mode !== t2 && (this.gl.blendEquation(t2), this._state.blendEquation.mode = t2, this._state.blendEquation.modeAlpha = t2, this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(t2, e2) {
    this._state.blendEquation.mode === t2 && this._state.blendEquation.modeAlpha === e2 || (this.gl.blendEquationSeparate(t2, e2), this._state.blendEquation.mode = t2, this._state.blendEquation.modeAlpha = e2, this._stateTracker.invalidateBlending());
  }
  setColorMask(t2, e2, s2, i2) {
    this._state.colorMask.r === t2 && this._state.colorMask.g === e2 && this._state.colorMask.b === s2 && this._state.colorMask.a === i2 || (this.gl.colorMask(t2, e2, s2, i2), this._state.colorMask.r = t2, this._state.colorMask.g = e2, this._state.colorMask.b = s2, this._state.colorMask.a = i2, this._stateTracker.invalidateColorWrite());
  }
  setClearColor(t2, e2, s2, i2) {
    this._state.clearColor.r === t2 && this._state.clearColor.g === e2 && this._state.clearColor.b === s2 && this._state.clearColor.a === i2 || (this.gl.clearColor(t2, e2, s2, i2), this._state.clearColor.r = t2, this._state.clearColor.g = e2, this._state.clearColor.b = s2, this._state.clearColor.a = i2);
  }
  setFaceCullingEnabled(t2) {
    this._state.faceCulling !== t2 && (t2 === true ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._state.faceCulling = t2, this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(t2) {
    this._state.polygonOffsetFill !== t2 && (t2 === true ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._state.polygonOffsetFill = t2, this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(t2, e2) {
    this._state.polygonOffset[0] === t2 && this._state.polygonOffset[1] === e2 || (this._state.polygonOffset[0] = t2, this._state.polygonOffset[1] = e2, this.gl.polygonOffset(t2, e2), this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(t2) {
    this._state.cullFace !== t2 && (this.gl.cullFace(t2), this._state.cullFace = t2, this._stateTracker.invalidateCulling());
  }
  setFrontFace(t2) {
    this._state.frontFace !== t2 && (this.gl.frontFace(t2), this._state.frontFace = t2, this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(t2) {
    this._state.scissorTest !== t2 && (t2 === true ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._state.scissorTest = t2);
  }
  setScissorRect(t2, e2, s2, i2) {
    this._state.scissorRect.x === t2 && this._state.scissorRect.y === e2 && this._state.scissorRect.width === s2 && this._state.scissorRect.height === i2 || (this.gl.scissor(t2, e2, s2, i2), this._state.scissorRect.x = t2, this._state.scissorRect.y = e2, this._state.scissorRect.width = s2, this._state.scissorRect.height = i2);
  }
  setDepthTestEnabled(t2) {
    this._state.depthTest !== t2 && (t2 === true ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._state.depthTest = t2, this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(t2) {
    this._state.clearDepth !== t2 && (this.gl.clearDepth(t2), this._state.clearDepth = t2);
  }
  setDepthFunction(t2) {
    this._state.depthFunction !== t2 && (this.gl.depthFunc(t2), this._state.depthFunction = t2, this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(t2) {
    this._state.depthWrite !== t2 && (this.gl.depthMask(t2), this._state.depthWrite = t2, this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(t2, e2) {
    this._state.depthRange.zNear === t2 && this._state.depthRange.zFar === e2 || (this.gl.depthRange(t2, e2), this._state.depthRange.zNear = t2, this._state.depthRange.zFar = e2, this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(t2) {
    this._state.stencilTest !== t2 && (t2 === true ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._state.stencilTest = t2, this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(t2) {
    t2 !== this._state.clearStencil && (this.gl.clearStencil(t2), this._state.clearStencil = t2);
  }
  setStencilFunction(t2, e2, s2) {
    this._state.stencilFunction.func === t2 && this._state.stencilFunction.ref === e2 && this._state.stencilFunction.mask === s2 || (this.gl.stencilFunc(t2, e2, s2), this._state.stencilFunction.face = N.FRONT_AND_BACK, this._state.stencilFunction.func = t2, this._state.stencilFunction.ref = e2, this._state.stencilFunction.mask = s2, this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(t2, e2, s2, i2) {
    this._state.stencilFunction.face === t2 && this._state.stencilFunction.func === e2 && this._state.stencilFunction.ref === s2 && this._state.stencilFunction.mask === i2 || (this.gl.stencilFuncSeparate(t2, e2, s2, i2), this._state.stencilFunction.face = t2, this._state.stencilFunction.func = e2, this._state.stencilFunction.ref = s2, this._state.stencilFunction.mask = i2, this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(t2) {
    this._state.stencilWriteMask !== t2 && (this.gl.stencilMask(t2), this._state.stencilWriteMask = t2, this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(t2, e2, s2) {
    this._state.stencilOperation.face === N.FRONT_AND_BACK && this._state.stencilOperation.fail === t2 && this._state.stencilOperation.zFail === e2 && this._state.stencilOperation.zPass === s2 || (this.gl.stencilOp(t2, e2, s2), this._state.stencilOperation.face = N.FRONT_AND_BACK, this._state.stencilOperation.fail = t2, this._state.stencilOperation.zFail = e2, this._state.stencilOperation.zPass = s2, this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(t2, e2, s2, i2) {
    this._state.stencilOperation.face === t2 && this._state.stencilOperation.fail === e2 && this._state.stencilOperation.zFail === s2 && this._state.stencilOperation.zPass === i2 || (this.gl.stencilOpSeparate(t2, e2, s2, i2), this._state.stencilOperation.face = t2, this._state.stencilOperation.fail = e2, this._state.stencilOperation.zFail = s2, this._state.stencilOperation.zPass = i2, this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(t2, e2 = false) {
    const s2 = this._state.activeTexture;
    return t2 >= 0 && (e2 || t2 !== this._state.activeTexture) && (this.gl.activeTexture(X + t2), this._state.activeTexture = t2), s2;
  }
  clear(t2) {
    t2 && this.gl.clear(t2);
  }
  clearSafe(t2, e2 = 255) {
    t2 && (t2 & _$3.COLOR_BUFFER_BIT && this.setColorMask(true, true, true, true), t2 & _$3.DEPTH_BUFFER_BIT && this.setDepthWriteEnabled(true), t2 & _$3.STENCIL_BUFFER_BIT && this.setStencilWriteMask(e2), this.gl.clear(t2));
  }
  drawArrays(t2, e2, s2) {
    if (a$1() && (this._numOfDrawCalls++, this._numOfTriangles += v(t2, s2)), this.gl.drawArrays(t2, e2, s2), a$1()) {
      const t3 = i(this);
      t3 && console.error("drawArrays:", t3);
    }
  }
  drawElements(e2, s2, i$12, a2) {
    var _a;
    if (a$1() && (this._numOfDrawCalls++, this._numOfTriangles += v(e2, s2)), this.gl.drawElements(e2, s2, i$12, a2), a$1()) {
      const r2 = i(this);
      if (r2) {
        const n2 = this.getBoundVAO(), l2 = n2 == null ? void 0 : n2.indexBuffer, h2 = n2 == null ? void 0 : n2.vertexBuffers, f2 = { indexBuffer: l2, vertexBuffers: h2 }, o2 = { mode: e2, count: s2, type: i$12, offset: a2 }, _2 = (_a = o$4(l2, (t2) => t2.size)) != null ? _a : 0, u = a2 + s2, c = _2 < u ? `. Buffer is too small. Attempted to draw index ${u} of ${_2}` : "";
        console.error(`drawElements: ${r2}${c}`, { args: o2, vao: f2 });
      }
    }
  }
  logInfo() {
    a$1() && console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`);
  }
  resetInfo() {
    a$1() && (this._numOfDrawCalls = 0, this._numOfTriangles = 0);
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(t2, e2, s2, i2) {
    s2 = Math.max(Math.round(s2), 1), i2 = Math.max(Math.round(i2), 1);
    const a2 = this._state.viewport;
    a2.x === t2 && a2.y === e2 && a2.width === s2 && a2.height === i2 || (a2.x = t2, a2.y = e2, a2.width = s2, a2.height = i2, this.gl.viewport(t2, e2, s2, i2));
  }
  getViewport() {
    const t2 = this._state.viewport;
    return { x: t2.x, y: t2.y, width: t2.width, height: t2.height };
  }
  useProgram(t2) {
    var _a, _b;
    this._state.program !== t2 && ((_a = this._state.program) == null ? void 0 : _a.stop(), this._state.program = t2, this.gl.useProgram((_b = t2 == null ? void 0 : t2.glName) != null ? _b : null));
  }
  bindTexture(t2, i2, a2 = false) {
    (i2 >= this.parameters.maxTextureImageUnits || i2 < 0) && console.error("Input texture unit is out of range of available units!");
    const r2 = this._state.textureUnitMap[i2];
    return t$4(t2) || t2.glName == null ? (r$6(r2) && (this.setActiveTexture(i2, a2), this.gl.bindTexture(r2.descriptor.target, null)), this._state.textureUnitMap[i2] = null, r2) : a2 || r2 !== t2 ? (this.setActiveTexture(i2, a2), this.gl.bindTexture(t2.descriptor.target, t2.glName), t2.applyChanges(), this._state.textureUnitMap[i2] = t2, r2) : (t2.isDirty && (this.setActiveTexture(i2, a2), t2.applyChanges()), r2);
  }
  unbindTexture(t2) {
    if (!t$4(t2))
      for (let e2 = 0; e2 < this.parameters.maxTextureImageUnits; e2++)
        this._state.textureUnitMap[e2] === t2 && (this.bindTexture(null, e2), this._state.textureUnitMap[e2] = null);
  }
  bindFramebuffer(t2, s2 = false) {
    if (s2 || this._state.readFramebuffer !== t2 || this._state.drawFramebuffer !== t2) {
      if (t$4(t2))
        return this.gl.bindFramebuffer(n$4.FRAMEBUFFER, null), this._state.readFramebuffer = null, void (this._state.drawFramebuffer = null);
      t2.initializeAndBind(n$4.FRAMEBUFFER), this._state.readFramebuffer = t2, this._state.drawFramebuffer = t2;
    }
  }
  bindFramebufferSeparate(t2, s2, a2 = false) {
    const r2 = s2 === n$4.READ_FRAMEBUFFER, n2 = r2 ? this._state.readFramebuffer : this._state.drawFramebuffer;
    (a2 || n2 !== t2) && (t$4(t2) ? this.gl.bindFramebuffer(s2, null) : t2.initializeAndBind(s2), r2 ? this._state.readFramebuffer = i$1(t2, null) : this._state.drawFramebuffer = i$1(t2, null));
  }
  blitFramebuffer(t2, e2, s2 = 0, i2 = 0, a2 = t2.width, r2 = t2.height, n2 = 0, l2 = 0, h2 = e2.width, f2 = e2.height, o2 = _$3.COLOR_BUFFER_BIT, _2 = L.NEAREST) {
    this.bindFramebufferSeparate(t2, n$4.READ_FRAMEBUFFER), this.bindFramebufferSeparate(e2, n$4.DRAW_FRAMEBUFFER);
    this.gl.blitFramebuffer(s2, i2, a2, r2, n2, l2, h2, f2, o2, _2);
  }
  bindBuffer(t2, e2) {
    if (t2)
      switch (e2 != null ? e2 : e2 = t2.bufferType, e2) {
        case A$2.ARRAY_BUFFER:
          this._state.vertexBuffer = I(this.gl, t2, e2, this._state.vertexBuffer);
          break;
        case A$2.ELEMENT_ARRAY_BUFFER:
          this._state.indexBuffer = I(this.gl, t2, e2, this._state.indexBuffer);
          break;
        case A$2.UNIFORM_BUFFER:
          this._state.uniformBuffer = I(this.gl, t2, e2, this._state.uniformBuffer);
          break;
        case A$2.PIXEL_PACK_BUFFER:
          this._state.pixelPackBuffer = I(this.gl, t2, e2, this._state.pixelPackBuffer);
          break;
        case A$2.PIXEL_UNPACK_BUFFER:
          this._state.pixelUnpackBuffer = I(this.gl, t2, e2, this._state.pixelUnpackBuffer);
          break;
        case A$2.COPY_READ_BUFFER:
          this._state.copyReadBuffer = I(this.gl, t2, e2, this._state.copyReadBuffer);
          break;
        case A$2.COPY_WRITE_BUFFER:
          this._state.copyWriteBuffer = I(this.gl, t2, e2, this._state.copyWriteBuffer);
      }
  }
  bindRenderbuffer(t2) {
    const e2 = this.gl;
    t2 || (e2.bindRenderbuffer(e2.RENDERBUFFER, null), this._state.renderbuffer = null), this._state.renderbuffer !== t2 && (e2.bindRenderbuffer(e2.RENDERBUFFER, t2.glName), this._state.renderbuffer = t2);
  }
  _getBufferBinding(t2, s2) {
    if (s2 >= this.parameters.maxUniformBufferBindings || s2 < 0)
      return console.error("Uniform buffer binding point is out of range!"), null;
    const i2 = this._state.uniformBufferBindingPoints;
    let a2 = i2[s2];
    return t$4(a2) && (a2 = { buffer: null, offset: 0, size: 0 }, i2[s2] = a2), a2;
  }
  bindBufferBase(t2, s2, i2) {
    const a2 = this._getBufferBinding(t2, s2);
    if (t$4(a2))
      return;
    if (a2.buffer === i2 && a2.offset === 0 && a2.size === 0)
      return;
    this.gl.bindBufferBase(t2, s2, i2 ? i2.glName : null), a2.buffer = i2, a2.offset = 0, a2.size = 0;
  }
  bindBufferRange(t2, s2, i2, a2, r2) {
    const n2 = this._getBufferBinding(t2, s2);
    if (t$4(n2))
      return;
    if (n2.buffer === i2 && n2.offset === a2 && n2.size === r2)
      return;
    if (a2 % this._parameters.uniformBufferOffsetAlignment != 0)
      return void console.error("Uniform buffer binding offset is not a multiple of the context offset alignment");
    this.gl.bindBufferRange(t2, s2, i2.glName, a2, r2), n2.buffer = i2, n2.offset = a2, n2.size = r2;
  }
  bindUBO(t2, s2, i2, a2) {
    t$4(s2) ? this.bindBufferBase(A$2.UNIFORM_BUFFER, t2, null) : (a$1() && (a2 != null ? a2 : s2.byteLength) > this._parameters.maxUniformBlockSize && console.error("Attempting to bind more data than the maximum uniform block size"), s2.initialize(), i2 !== void 0 && a2 !== void 0 ? this.bindBufferRange(A$2.UNIFORM_BUFFER, t2, s2.buffer, i2, a2) : this.bindBufferBase(A$2.UNIFORM_BUFFER, t2, s2.buffer));
  }
  unbindUBO(t2) {
    for (let e2 = 0, i2 = this._state.uniformBufferBindingPoints.length; e2 < i2; e2++) {
      const i3 = this._state.uniformBufferBindingPoints[e2];
      r$6(i3) && i3.buffer === t2.buffer && this.bindBufferBase(A$2.UNIFORM_BUFFER, e2, null);
    }
  }
  unbindBuffer(t2) {
    switch (t2) {
      case A$2.ARRAY_BUFFER:
        this._state.vertexBuffer = I(this.gl, null, t2, this._state.vertexBuffer);
        break;
      case A$2.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = I(this.gl, null, t2, this._state.indexBuffer);
        break;
      case A$2.UNIFORM_BUFFER:
        this._state.uniformBuffer = I(this.gl, null, t2, this._state.uniformBuffer);
        break;
      case A$2.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = I(this.gl, null, t2, this._state.pixelPackBuffer);
        break;
      case A$2.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = I(this.gl, null, t2, this._state.pixelUnpackBuffer);
        break;
      case A$2.COPY_READ_BUFFER:
        this._state.copyReadBuffer = I(this.gl, null, t2, this._state.copyReadBuffer);
        break;
      case A$2.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = I(this.gl, null, t2, this._state.copyWriteBuffer);
    }
  }
  bindVAO(t2 = null) {
    t$4(t2) ? this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null) : this._state.vertexArrayObject !== t2 && (t2.bind(), this._state.vertexArrayObject = t2);
  }
  async clientWaitAsync(t2 = n$5(10)) {
    const e2 = this.gl, s2 = e2.fenceSync(W$1.SYNC_GPU_COMMANDS_COMPLETE, 0);
    if (!s2)
      throw new Error("Client wait failed, could not create sync object");
    let i2;
    this.instanceCounter.increment(t$1.Sync, s2), e2.flush();
    do {
      await U$1(t2), i2 = e2.clientWaitSync(s2, 0, 0);
    } while (i2 === r$7.TIMEOUT_EXPIRED);
    if (this.instanceCounter.decrement(t$1.Sync, s2), e2.deleteSync(s2), i2 === r$7.WAIT_FAILED)
      throw new Error("Client wait failed");
  }
  getBoundFramebufferObject(t2 = n$4.FRAMEBUFFER) {
    return t2 === n$4.READ_FRAMEBUFFER ? this._state.readFramebuffer : this._state.drawFramebuffer;
  }
  getBoundVAO() {
    return this._state.vertexArrayObject;
  }
  resetState() {
    this.useProgram(null), this.bindVAO(null), this.bindFramebuffer(null, true), this.unbindBuffer(A$2.ARRAY_BUFFER), this.unbindBuffer(A$2.ELEMENT_ARRAY_BUFFER), n$3(this.gl) && (this.unbindBuffer(A$2.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(A$2.PIXEL_PACK_BUFFER), this.unbindBuffer(A$2.PIXEL_UNPACK_BUFFER), this.unbindBuffer(A$2.COPY_READ_BUFFER), this.unbindBuffer(A$2.COPY_WRITE_BUFFER));
    for (let t2 = 0; t2 < this.parameters.maxTextureImageUnits; ++t2)
      this.bindTexture(null, t2);
    this.setBlendingEnabled(false), this.setBlendFunction(R$1.ONE, R$1.ZERO), this.setBlendEquation(T$2.ADD), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(false), this.setCullFace(N.BACK), this.setFrontFace(S.CCW), this.setPolygonOffsetFillEnabled(false), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(false), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(false), this.setDepthFunction(I$1.LESS), this.setDepthRange(0, 1), this.setStencilTestEnabled(false), this.setStencilFunction(I$1.ALWAYS, 0, 0), this.setStencilOp(O.KEEP, O.KEEP, O.KEEP), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(true, true, true, true), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(true), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    var _a, _b, _c, _d, _e, _f;
    const t2 = this.gl, e2 = this.capabilities.vao;
    e2 && e2.bindVertexArray(null);
    for (let s2 = 0; s2 < this.parameters.maxVertexAttributes; s2++)
      t2.disableVertexAttribArray(s2);
    if (this._state.vertexBuffer ? t2.bindBuffer(this._state.vertexBuffer.bufferType, this._state.vertexBuffer.glName) : t2.bindBuffer(A$2.ARRAY_BUFFER, null), this._state.indexBuffer ? t2.bindBuffer(this._state.indexBuffer.bufferType, this._state.indexBuffer.glName) : t2.bindBuffer(A$2.ELEMENT_ARRAY_BUFFER, null), n$3(t2)) {
      this._state.uniformBuffer ? t2.bindBuffer(this._state.uniformBuffer.bufferType, this._state.uniformBuffer.glName) : t2.bindBuffer(A$2.UNIFORM_BUFFER, null);
      for (let e3 = 0; e3 < this._parameters.maxUniformBufferBindings; e3++) {
        const i3 = this._state.uniformBufferBindingPoints[e3];
        if (r$6(i3)) {
          const { buffer: s2, offset: a2, size: r2 } = i3;
          s2 !== null ? a2 === 0 && r2 === 0 ? t2.bindBufferBase(A$2.UNIFORM_BUFFER, e3, s2.glName) : t2.bindBufferRange(A$2.UNIFORM_BUFFER, e3, s2.glName, a2, r2) : t2.bindBufferBase(A$2.UNIFORM_BUFFER, e3, null);
        }
      }
      this._state.pixelPackBuffer ? t2.bindBuffer(this._state.pixelPackBuffer.bufferType, this._state.pixelPackBuffer.glName) : t2.bindBuffer(A$2.PIXEL_PACK_BUFFER, null), this._state.pixelUnpackBuffer ? t2.bindBuffer(this._state.pixelUnpackBuffer.bufferType, this._state.pixelUnpackBuffer.glName) : t2.bindBuffer(A$2.PIXEL_UNPACK_BUFFER, null), this._state.copyReadBuffer ? t2.bindBuffer(this._state.copyReadBuffer.bufferType, this._state.copyReadBuffer.glName) : t2.bindBuffer(A$2.COPY_READ_BUFFER, null), this._state.copyWriteBuffer ? t2.bindBuffer(this._state.copyWriteBuffer.bufferType, this._state.copyWriteBuffer.glName) : t2.bindBuffer(A$2.COPY_WRITE_BUFFER, null), t2.bindFramebuffer(n$4.READ_FRAMEBUFFER, null), t2.readBuffer(t2.BACK), this._state.readFramebuffer && (t2.bindFramebuffer(n$4.READ_FRAMEBUFFER, this._state.readFramebuffer.glName), t2.readBuffer(f$1.COLOR_ATTACHMENT0)), t2.bindFramebuffer(n$4.DRAW_FRAMEBUFFER, (_b = (_a = this._state.drawFramebuffer) == null ? void 0 : _a.glName) != null ? _b : null);
    } else
      this._state.readFramebuffer = this._state.drawFramebuffer, t2.bindFramebuffer(n$4.FRAMEBUFFER, (_d = (_c = this._state.drawFramebuffer) == null ? void 0 : _c.glName) != null ? _d : null);
    if (e2 && this._state.vertexArrayObject) {
      const t3 = this._state.vertexArrayObject;
      this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null), this.bindVAO(t3);
    }
    t2.useProgram((_f = (_e = this._state.program) == null ? void 0 : _e.glName) != null ? _f : null), t2.blendColor(this._state.blendColor.r, this._state.blendColor.g, this._state.blendColor.b, this._state.blendColor.a), t2.bindRenderbuffer(t2.RENDERBUFFER, this._state.renderbuffer ? this._state.renderbuffer.glName : null), this._state.blend === true ? t2.enable(this.gl.BLEND) : t2.disable(this.gl.BLEND), t2.blendEquationSeparate(this._state.blendEquation.mode, this._state.blendEquation.modeAlpha), t2.blendFuncSeparate(this._state.blendFunction.srcRGB, this._state.blendFunction.dstRGB, this._state.blendFunction.srcAlpha, this._state.blendFunction.dstAlpha), t2.clearColor(this._state.clearColor.r, this._state.clearColor.g, this._state.clearColor.b, this._state.clearColor.a), t2.clearDepth(this._state.clearDepth), t2.clearStencil(this._state.clearStencil), t2.colorMask(this._state.colorMask.r, this._state.colorMask.g, this._state.colorMask.b, this._state.colorMask.a), t2.cullFace(this._state.cullFace), t2.depthFunc(this._state.depthFunction), t2.depthRange(this._state.depthRange.zNear, this._state.depthRange.zFar), this._state.depthTest === true ? t2.enable(t2.DEPTH_TEST) : t2.disable(t2.DEPTH_TEST), t2.depthMask(this._state.depthWrite), t2.frontFace(this._state.frontFace), t2.lineWidth(1), this._state.faceCulling === true ? t2.enable(t2.CULL_FACE) : t2.disable(t2.CULL_FACE), t2.polygonOffset(this._state.polygonOffset[0], this._state.polygonOffset[1]), this._state.polygonOffsetFill === true ? t2.enable(t2.POLYGON_OFFSET_FILL) : t2.disable(t2.POLYGON_OFFSET_FILL), t2.scissor(this._state.scissorRect.x, this._state.scissorRect.y, this._state.scissorRect.width, this._state.scissorRect.height), this._state.scissorTest === true ? t2.enable(t2.SCISSOR_TEST) : t2.disable(t2.SCISSOR_TEST), t2.stencilFunc(this._state.stencilFunction.func, this._state.stencilFunction.ref, this._state.stencilFunction.mask), t2.stencilOpSeparate(this._state.stencilOperation.face, this._state.stencilOperation.fail, this._state.stencilOperation.zFail, this._state.stencilOperation.zPass), this._state.stencilTest === true ? t2.enable(t2.STENCIL_TEST) : t2.disable(t2.STENCIL_TEST), t2.stencilMask(this._state.stencilWriteMask);
    for (let a2 = 0; a2 < this.parameters.maxTextureImageUnits; a2++) {
      t2.activeTexture(X + a2), t2.bindTexture(M.TEXTURE_2D, null), t2.bindTexture(M.TEXTURE_CUBE_MAP, null), n$3(t2) && (t2.bindTexture(M.TEXTURE_3D, null), t2.bindTexture(M.TEXTURE_2D_ARRAY, null));
      const e3 = this._state.textureUnitMap[a2];
      r$6(e3) && t2.bindTexture(e3.descriptor.target, e3.glName);
    }
    t2.activeTexture(X + this._state.activeTexture);
    const i2 = this._state.viewport;
    t2.viewport(i2.x, i2.y, i2.width, i2.height), this.resetInfo();
  }
  _loadExtensions() {
    this.type === r$5.WEBGL1 && this.gl.getExtension("OES_element_index_uint"), this.gl.getExtension("KHR_parallel_shader_compile");
  }
  _loadParameters(t2) {
    var _a;
    const e2 = this.capabilities.textureFilterAnisotropic, s2 = (_a = t2.maxAnisotropy) != null ? _a : 1 / 0, i2 = n$3(this.gl), a2 = this.gl, r2 = { versionString: this.gl.getParameter(this.gl.VERSION), maxVertexTextureImageUnits: this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS), maxVertexAttributes: this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS), maxMaxAnisotropy: e2 ? Math.min(this.gl.getParameter(e2.MAX_TEXTURE_MAX_ANISOTROPY), s2) : 1, maxTextureImageUnits: this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS), maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), maxUniformBufferBindings: i2 ? a2.getParameter(a2.MAX_UNIFORM_BUFFER_BINDINGS) : 0, maxVertexUniformBlocks: i2 ? a2.getParameter(a2.MAX_VERTEX_UNIFORM_BLOCKS) : 0, maxFragmentUniformBlocks: i2 ? a2.getParameter(a2.MAX_FRAGMENT_UNIFORM_BLOCKS) : 0, maxUniformBlockSize: i2 ? a2.getParameter(a2.MAX_UNIFORM_BLOCK_SIZE) : 0, uniformBufferOffsetAlignment: i2 ? a2.getParameter(a2.UNIFORM_BUFFER_OFFSET_ALIGNMENT) : 1, maxArrayTextureLayers: i2 ? a2.getParameter(a2.MAX_ARRAY_TEXTURE_LAYERS) : 1, maxSamples: i2 ? a2.getParameter(a2.MAX_SAMPLES) : 1 };
    return E$4.TEXTURE_UNIT_FOR_UPDATES = r2.maxTextureImageUnits - 1, r2;
  }
}
function I(t2, e2, s2, i2) {
  return e2 ? i2 !== e2 && t2.bindBuffer(s2, e2.glName) : t2.bindBuffer(s2, null), e2;
}
function v(t2, e2) {
  switch (t2) {
    case E$3.POINTS:
      return 2 * e2;
    case E$3.TRIANGLES:
      return e2 / 3;
    case E$3.TRIANGLE_STRIP:
    case E$3.TRIANGLE_FAN:
      return e2 - 2;
    default:
      return 0;
  }
}
export { T$1 as T, o$3 as o, y };
