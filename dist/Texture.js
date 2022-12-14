var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { s, h as has, g as s$1, r, a as r$1, j as c$2, k as e } from "./index.js";
import { M as M$1, L, D, t as t$1, u as u$2, G, P, U } from "./enums.js";
const o = s.getLogger("esri.views.webgl.checkWebGLError");
function t(e2, r2) {
  switch (r2) {
    case e2.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case e2.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case e2.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case e2.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case e2.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case e2.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
const n$1 = !!has("enable-feature:webgl-debug");
function a() {
  return n$1;
}
function c$1() {
  return n$1;
}
function u$1(r2) {
  if (a()) {
    const n2 = r2.getError();
    if (n2) {
      const a2 = t(r2, n2), c2 = new Error().stack;
      o.error(new s$1("webgl-error", "WebGL error occured", { message: a2, stack: c2 }));
    }
  }
}
function n(n2) {
  return window.WebGL2RenderingContext && n2 instanceof window.WebGL2RenderingContext;
}
const u = { target: M$1.TEXTURE_2D, samplingMode: L.LINEAR, wrapMode: D.REPEAT, flipped: false, hasMipmap: false, isOpaque: false, unpackAlignment: 4, preMultiplyAlpha: false, isImmutable: false }, c = 4;
class E {
  constructor(t2, e2, i = null) {
    this._context = t2, this.type = "texture", this._glName = null, this._samplingModeDirty = false, this._wrapModeDirty = false, this._wasImmutablyAllocated = false, t2.instanceCounter.increment(t$1.Texture, this), this._descriptor = __spreadValues(__spreadValues({}, u), e2);
    for (const r2 in u) {
      this._descriptor[r2] === void 0 && (this._descriptor[r2] = u[r2]);
    }
    if (t2.type !== r.WEBGL2 && (this._descriptor.isImmutable && (this._descriptor.isImmutable = false), A(this._descriptor.target)))
      throw new Error("3D and array textures are not supported in WebGL1");
    this._descriptor.target === M$1.TEXTURE_CUBE_MAP ? this._setDataCubeMap(i) : this.setData(i);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  dispose() {
    this._context.gl && this._glName && (this._context.unbindTexture(this), this._context.gl.deleteTexture(this._glName), this._glName = null, this._context.instanceCounter.decrement(t$1.Texture, this));
  }
  release() {
    this.dispose();
  }
  resize(t2, e2) {
    const i = this._descriptor;
    if (i.width !== t2 || i.height !== e2) {
      if (this._wasImmutablyAllocated)
        throw new Error("Immutable textures can't be resized!");
      i.width = t2, i.height = e2, this._descriptor.target === M$1.TEXTURE_CUBE_MAP ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  _setDataCubeMap(t2 = null) {
    for (let e2 = M$1.TEXTURE_CUBE_MAP_POSITIVE_X; e2 <= M$1.TEXTURE_CUBE_MAP_NEGATIVE_Z; e2++)
      this._setData(t2, e2);
  }
  setData(t2) {
    this._setData(t2);
  }
  _setData(t2, i) {
    var _a, _b;
    if (!this._context || !this._context.gl)
      return;
    const o2 = this._context.gl;
    this._glName || (this._glName = o2.createTexture()), t2 === void 0 && (t2 = null);
    const s2 = this._descriptor, a2 = i != null ? i : s2.target, n$12 = A(a2);
    t2 === null && (s2.width = s2.width || c, s2.height = s2.height || c, n$12 && (s2.depth = (_a = s2.depth) != null ? _a : 1));
    const l = this._context.bindTexture(this, E.TEXTURE_UNIT_FOR_UPDATES);
    this._context.setActiveTexture(E.TEXTURE_UNIT_FOR_UPDATES), E._validateTexture(this._context, s2), this._configurePixelStorage(), u$1(o2);
    const h = s2.pixelFormat;
    let p = (_b = s2.internalFormat) != null ? _b : this._deriveInternalFormat(h, s2.dataType);
    if (f(t2)) {
      let e2 = t2.width, i2 = t2.height;
      const l2 = 1;
      t2 instanceof HTMLVideoElement && (e2 = t2.videoWidth, i2 = t2.videoHeight), s2.width && s2.height, n$12 && s2.depth, s2.isImmutable && !this._wasImmutablyAllocated && this._texStorage(a2, p, s2.hasMipmap, e2, i2, l2), this._texImage(a2, 0, p, e2, i2, l2, t2), u$1(o2), s2.hasMipmap && this.generateMipmap(), s2.width === void 0 && (s2.width = e2), s2.height === void 0 && (s2.height = i2), n$12 && s2.depth === void 0 && (s2.depth = l2);
    } else {
      const { width: i2, height: l2, depth: h2 } = s2;
      if (i2 == null || l2 == null)
        throw new Error("Width and height must be specified!");
      if (n$12 && h2 == null)
        throw new Error("Depth must be specified!");
      if (s2.isImmutable && !this._wasImmutablyAllocated && this._texStorage(a2, p, s2.hasMipmap, i2, l2, h2), o2.DEPTH24_STENCIL8 && p === o2.DEPTH_STENCIL && (p = o2.DEPTH24_STENCIL8), x(t2)) {
        const e2 = t2.levels, r2 = w(a2, i2, l2, h2), n$13 = Math.min(r2 - 1, e2.length - 1);
        n(o2) ? o2.texParameteri(s2.target, o2.TEXTURE_MAX_LEVEL, n$13) : s2.hasMipmap = s2.hasMipmap && r2 === e2.length;
        const _ = p;
        if (!g(_))
          throw new Error("Attempting to use compressed data with an umcompressed format!");
        this._forEachMipmapLevel((t3, i3, r3, o3) => {
          const s3 = e2[Math.min(t3, e2.length - 1)];
          this._compressedTexImage(a2, t3, _, i3, r3, o3, s3);
        }, n$13);
      } else
        r$1(t2) ? (this._texImage(a2, 0, p, i2, l2, h2, t2), u$1(o2), s2.hasMipmap && this.generateMipmap()) : this._forEachMipmapLevel((t3, e2, i3, s3) => {
          this._texImage(a2, t3, p, e2, i3, s3, null), u$1(o2);
        });
    }
    E._applySamplingMode(o2, this._descriptor), E._applyWrapMode(o2, this._descriptor), E._applyAnisotropicFilteringParameters(this._context, this._descriptor), u$1(o2), this._context.bindTexture(l, E.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData(t2, e2, i, r2, o2, s2, a2 = 0) {
    var _a;
    s2 || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const n$12 = this._context.gl, l = this._descriptor, { pixelFormat: h, dataType: p, target: _, isImmutable: m } = l, u2 = (_a = l.internalFormat) != null ? _a : this._deriveInternalFormat(h, p);
    if (m && !this._wasImmutablyAllocated)
      throw new Error("Cannot update immutable texture before allocation!");
    const c2 = this._context.bindTexture(this, E.TEXTURE_UNIT_FOR_UPDATES, true);
    if ((e2 < 0 || i < 0 || r2 > l.width || o2 > l.height || e2 + r2 > l.width || i + o2 > l.height) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage(), a2) {
      if (!n(n$12))
        return void console.error("Webgl2 must be enabled to use dataRowOffset!");
      n$12.pixelStorei(n$12.UNPACK_SKIP_ROWS, a2);
    }
    if (f(s2) ? n(n$12) ? n$12.texSubImage2D(_, t2, e2, i, r2, o2, h, p, s2) : n$12.texSubImage2D(_, t2, e2, i, h, p, s2) : x(s2) ? n$12.compressedTexSubImage2D(_, t2, e2, i, r2, o2, u2, s2.levels[t2]) : n$12.texSubImage2D(_, t2, e2, i, r2, o2, h, p, s2), a2) {
      if (!n(n$12))
        return void console.error("Webgl2 must be enabled to use dataRowOffset!");
      n$12.pixelStorei(n$12.UNPACK_SKIP_ROWS, 0);
    }
    this._context.bindTexture(c2, E.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(t2, e2, i, r2, o2, s2, a2, n$12) {
    var _a;
    n$12 || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const l = this._context.gl;
    if (!n(l))
      throw new Error("3D textures are not supported in WebGL1");
    const h = this._descriptor, { pixelFormat: p, dataType: _, isImmutable: m, target: u2 } = h, c2 = (_a = h.internalFormat) != null ? _a : this._deriveInternalFormat(p, _);
    if (m && !this._wasImmutablyAllocated)
      throw new Error("Cannot update immutable texture before allocation!");
    A(u2) || console.warn("Attempting to set 3D texture data on a non-3D texture");
    const T2 = this._context.bindTexture(this, E.TEXTURE_UNIT_FOR_UPDATES);
    if (this._context.setActiveTexture(E.TEXTURE_UNIT_FOR_UPDATES), (e2 < 0 || i < 0 || r2 < 0 || o2 > h.width || s2 > h.height || a2 > h.depth || e2 + o2 > h.width || i + s2 > h.height || r2 + a2 > h.depth) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage(), x(n$12))
      n$12 = n$12.levels[t2], l.compressedTexSubImage3D(u2, t2, e2, i, r2, o2, s2, a2, c2, n$12);
    else {
      const h2 = n$12;
      l.texSubImage3D(u2, t2, e2, i, r2, o2, s2, a2, p, _, h2);
    }
    this._context.bindTexture(T2, E.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const t2 = this._descriptor;
    if (!t2.hasMipmap) {
      if (this._wasImmutablyAllocated)
        throw new Error("Cannot add mipmaps to immutable texture after allocation");
      t2.hasMipmap = true, this._samplingModeDirty = true, E._validateTexture(this._context, t2);
    }
    t2.samplingMode === L.LINEAR ? (this._samplingModeDirty = true, t2.samplingMode = L.LINEAR_MIPMAP_NEAREST) : t2.samplingMode === L.NEAREST && (this._samplingModeDirty = true, t2.samplingMode = L.NEAREST_MIPMAP_NEAREST);
    const e2 = this._context.bindTexture(this, E.TEXTURE_UNIT_FOR_UPDATES);
    this._context.setActiveTexture(E.TEXTURE_UNIT_FOR_UPDATES);
    this._context.gl.generateMipmap(t2.target), this._context.bindTexture(e2, E.TEXTURE_UNIT_FOR_UPDATES);
  }
  setSamplingMode(t2) {
    t2 !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t2, this._samplingModeDirty = true);
  }
  setWrapMode(t2) {
    t2 !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t2, E._validateTexture(this._context, this._descriptor), this._wrapModeDirty = true);
  }
  applyChanges() {
    const t2 = this._context.gl, e2 = this._descriptor;
    this._samplingModeDirty && (E._applySamplingMode(t2, e2), this._samplingModeDirty = false), this._wrapModeDirty && (E._applyWrapMode(t2, e2), this._wrapModeDirty = false);
  }
  _deriveInternalFormat(t2, e2) {
    if (this._context.type === r.WEBGL1)
      return t2;
    switch (e2) {
      case G.FLOAT:
        switch (t2) {
          case P.RGBA:
            return U.RGBA32F;
          case P.RGB:
            return U.RGB32F;
          default:
            throw new Error("Unable to derive format");
        }
      case G.UNSIGNED_BYTE:
        switch (t2) {
          case P.RGBA:
            return U.RGBA8;
          case P.RGB:
            return U.RGB8;
        }
      default:
        return t2;
    }
  }
  _configurePixelStorage() {
    const t2 = this._context.gl, { unpackAlignment: e2, flipped: i, preMultiplyAlpha: r2 } = this._descriptor;
    t2.pixelStorei(t2.UNPACK_ALIGNMENT, e2), t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, i ? 1 : 0), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r2 ? 1 : 0);
  }
  _texStorage(t2, e2, i, r2, o2, s2) {
    const a2 = this._context.gl;
    if (!n(a2))
      throw new Error("Immutable textures are not supported in WebGL1");
    if (!T(e2))
      throw new Error("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable)
      return;
    const n$12 = i ? w(t2, r2, o2, s2) : 1;
    if (A(t2)) {
      if (s2 == null)
        throw new Error("Missing depth dimension for 3D texture upload");
      a2.texStorage3D(t2, n$12, e2, r2, o2, s2);
    } else
      a2.texStorage2D(t2, n$12, e2, r2, o2);
    this._wasImmutablyAllocated = true;
  }
  _texImage(t2, r$2, s2, a2, n2, l, h) {
    const p = this._context.gl;
    let _ = null;
    const m = this._context.type === r.WEBGL2, d = A(t2), { isImmutable: u2, pixelFormat: c2, dataType: E2 } = this._descriptor;
    if (m && (_ = p), m || !f(h))
      if (u2) {
        if (r$1(h)) {
          const e2 = h;
          if (d) {
            if (l == null)
              throw new Error("Missing depth dimension for 3D texture upload");
            _.texSubImage3D(t2, r$2, 0, 0, 0, a2, n2, l, c2, E2, e2);
          } else
            p.texSubImage2D(t2, r$2, 0, 0, a2, n2, c2, E2, e2);
        }
      } else {
        const e$1 = e(h);
        if (d) {
          if (l == null)
            throw new Error("Missing depth dimension for 3D texture upload");
          _.texImage3D(t2, r$2, s2, a2, n2, l, 0, c2, E2, e$1);
        } else
          p.texImage2D(t2, r$2, s2, a2, n2, 0, c2, E2, e$1);
      }
    else
      p.texImage2D(t2, 0, s2, c2, E2, h);
  }
  _compressedTexImage(t2, i, r$2, s2, a2, n2, l) {
    const h = this._context.gl;
    let p = null;
    const _ = A(t2), m = this._descriptor.isImmutable;
    if (_) {
      if (this._context.type !== r.WEBGL2)
        throw new Error("3D textures are not supported in WebGL1");
      p = h;
    }
    if (m) {
      if (r$1(l))
        if (_) {
          if (n2 == null)
            throw new Error("Missing depth dimension for 3D texture upload");
          p.compressedTexSubImage3D(t2, i, 0, 0, 0, s2, a2, n2, r$2, l);
        } else
          h.compressedTexSubImage2D(t2, i, 0, 0, s2, a2, r$2, l);
    } else if (_) {
      if (n2 == null)
        throw new Error("Missing depth dimension for 3D texture upload");
      p.compressedTexImage3D(t2, i, r$2, s2, a2, n2, 0, l);
    } else
      h.compressedTexImage2D(t2, i, r$2, s2, a2, 0, l);
  }
  _forEachMipmapLevel(t2, e2 = 1 / 0) {
    let { width: i, height: r2, depth: o2, hasMipmap: a2, target: n2 } = this._descriptor;
    const l = n2 === M$1.TEXTURE_3D;
    if (i == null || r2 == null || l && o2 == null)
      throw new Error("Missing texture dimensions for mipmap calculation");
    for (let s2 = 0; t2(s2, i, r2, o2), a2 && (i !== 1 || r2 !== 1 || l && o2 !== 1) && !(s2 >= e2); ++s2)
      i = Math.max(1, i >> 1), r2 = Math.max(1, r2 >> 1), l && (o2 = Math.max(1, o2 >> 1));
  }
  static _validateTexture(e2, i) {
    (i.width != null && i.width < 0 || i.height != null && i.height < 0 || i.depth != null && i.depth < 0) && console.error("Negative dimension parameters are not allowed!");
    const r2 = n(e2.gl), o2 = i.width != null && c$2(i.width) && i.height != null && c$2(i.height);
    r2 || !i.isImmutable && !A(i.target) || console.error("Immutable and 3D-like textures are not supported in WebGL1!"), r2 || o2 || (typeof i.wrapMode == "number" ? i.wrapMode !== D.CLAMP_TO_EDGE && console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!") : i.wrapMode.s === D.CLAMP_TO_EDGE && i.wrapMode.t === D.CLAMP_TO_EDGE || console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"), i.hasMipmap && console.error("Mipmapping requires power-of-two textures!"));
  }
  static _applySamplingMode(t2, e2) {
    let i = e2.samplingMode, r2 = e2.samplingMode;
    i === L.LINEAR_MIPMAP_NEAREST || i === L.LINEAR_MIPMAP_LINEAR ? (i = L.LINEAR, e2.hasMipmap || (r2 = L.LINEAR)) : i !== L.NEAREST_MIPMAP_NEAREST && i !== L.NEAREST_MIPMAP_LINEAR || (i = L.NEAREST, e2.hasMipmap || (r2 = L.NEAREST)), t2.texParameteri(e2.target, t2.TEXTURE_MAG_FILTER, i), t2.texParameteri(e2.target, t2.TEXTURE_MIN_FILTER, r2);
  }
  static _applyWrapMode(t2, e2) {
    typeof e2.wrapMode == "number" ? (t2.texParameteri(e2.target, t2.TEXTURE_WRAP_S, e2.wrapMode), t2.texParameteri(e2.target, t2.TEXTURE_WRAP_T, e2.wrapMode)) : (t2.texParameteri(e2.target, t2.TEXTURE_WRAP_S, e2.wrapMode.s), t2.texParameteri(e2.target, t2.TEXTURE_WRAP_T, e2.wrapMode.t));
  }
  static _applyAnisotropicFilteringParameters(t2, e2) {
    var _a;
    const i = t2.capabilities.textureFilterAnisotropic;
    if (!i)
      return;
    t2.gl.texParameterf(e2.target, i.TEXTURE_MAX_ANISOTROPY, (_a = e2.maxAnisotropy) != null ? _a : 1);
  }
}
function T(t2) {
  return t2 in U;
}
function g(t2) {
  return t2 in u$2;
}
function x(t2) {
  return r$1(t2) && "type" in t2 && t2.type === "compressed";
}
function M(t2) {
  return r$1(t2) && "byteLength" in t2;
}
function f(t2) {
  return r$1(t2) && !x(t2) && !M(t2);
}
function A(t2) {
  return t2 === M$1.TEXTURE_3D || t2 === M$1.TEXTURE_2D_ARRAY;
}
function w(t2, e2, i, r2 = 1) {
  let o2 = Math.max(e2, i);
  return t2 === M$1.TEXTURE_3D && (o2 = Math.max(o2, r2)), Math.round(Math.log(o2) / Math.LN2) + 1;
}
E.TEXTURE_UNIT_FOR_UPDATES = 0;
export { E, a, c$1 as c, n, u$1 as u };
