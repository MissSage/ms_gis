var __defProp = Object.defineProperty;
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
import { s as s$1, r, d, a as r$1, i as i$1, b as s$2, c as a$1, t as t$1, e as a$3 } from "./index.js";
import { u as u$1, E as E$2, a as a$2 } from "./Texture.js";
import { t, A, F, C as C$1, u as u$2, U as U$1, B, P as P$1, f as f$1, V, G, c as c$1, n as n$1, M, Y, L, D as D$1 } from "./enums.js";
const c = s$1.getLogger("esri.views.webgl.BufferObject");
function b$1(t2) {
  return a$1(t2);
}
class E$1 {
  constructor(e, t$12, r2, i2) {
    this._context = e, this.bufferType = t$12, this.usage = r2, this._glName = null, this._size = -1, this._indexType = void 0, e.instanceCounter.increment(t.BufferObject, this), this._glName = this._context.gl.createBuffer(), u$1(this._context.gl), i2 && this.setData(i2);
  }
  static createIndex(e, t2, r2) {
    return new E$1(e, A.ELEMENT_ARRAY_BUFFER, t2, r2);
  }
  static createVertex(e, t2, r2) {
    return new E$1(e, A.ARRAY_BUFFER, t2, r2);
  }
  static createUniform(e, t2, r$12) {
    if (e.type !== r.WEBGL2)
      throw new Error("Uniform buffers are supported in WebGL2 only!");
    return new E$1(e, A.UNIFORM_BUFFER, t2, r$12);
  }
  static createPixelPack(e, t2 = F.STREAM_READ, r$12) {
    if (e.type !== r.WEBGL2)
      throw new Error("Pixel pack buffers are supported in WebGL2 only!");
    const i2 = new E$1(e, A.PIXEL_PACK_BUFFER, t2);
    return r$12 && i2.setSize(r$12), i2;
  }
  static createPixelUnpack(e, t2 = F.STREAM_DRAW, r$12) {
    if (e.type !== r.WEBGL2)
      throw new Error("Pixel unpack buffers are supported in WebGL2 only!");
    return new E$1(e, A.PIXEL_UNPACK_BUFFER, t2, r$12);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get byteSize() {
    return this.bufferType === A.ELEMENT_ARRAY_BUFFER ? this._indexType === C$1.UNSIGNED_INT ? 4 * this._size : 2 * this._size : this._size;
  }
  get _isVAOAware() {
    return this.bufferType === A.ELEMENT_ARRAY_BUFFER || this.bufferType === A.ARRAY_BUFFER;
  }
  dispose() {
    var _a;
    if ((_a = this._context) == null ? void 0 : _a.gl) {
      if (this._glName) {
        this._context.gl.deleteBuffer(this._glName), this._glName = null;
      }
      this._context.instanceCounter.decrement(t.BufferObject, this), this._context = d(this._context);
    } else
      this._glName && c.warn("Leaked WebGL buffer object");
  }
  setSize(e, t2 = null) {
    if (e <= 0 && c.error("Buffer size needs to be positive!"), this.bufferType === A.ELEMENT_ARRAY_BUFFER && r$1(t2))
      switch (this._indexType = t2, t2) {
        case C$1.UNSIGNED_SHORT:
          e *= 2;
          break;
        case C$1.UNSIGNED_INT:
          e *= 4;
      }
    this._setBufferData(e);
  }
  setData(e) {
    if (!e)
      return;
    let t2 = e.byteLength;
    this.bufferType === A.ELEMENT_ARRAY_BUFFER && (i$1(e) && (t2 /= 2, this._indexType = C$1.UNSIGNED_SHORT), s$2(e) && (t2 /= 4, this._indexType = C$1.UNSIGNED_INT)), this._setBufferData(t2, e);
  }
  _setBufferData(e, t2 = null) {
    this._size = e;
    const r2 = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const s2 = this._context.gl;
    r$1(t2) ? s2.bufferData(this.bufferType, t2, this.usage) : s2.bufferData(this.bufferType, e, this.usage), u$1(s2), this._isVAOAware && this._context.bindVAO(r2);
  }
  setSubData(e, t2, r$12, i2) {
    if (!e)
      return;
    (t2 < 0 || t2 >= this._size) && c.error("offset is out of range!"), r$12 >= i2 && c.error("end must be bigger than start!"), t2 + (i2 - r$12) > this._size && c.error("An attempt to write beyond the end of the buffer!");
    const s2 = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const n2 = this._context.gl;
    if (this._context.type === r.WEBGL2)
      n2.bufferSubData(this.bufferType, t2 * e.BYTES_PER_ELEMENT, e, r$12, i2 - r$12);
    else {
      const s3 = r$12 === 0 && i2 === e.length ? e : e.subarray(r$12, i2);
      n2.bufferSubData(this.bufferType, t2 * e.BYTES_PER_ELEMENT, s3);
    }
    u$1(n2), this._isVAOAware && this._context.bindVAO(s2);
  }
  getSubData(e, t2 = 0, r$12, i2) {
    if (this._context.type !== r.WEBGL2)
      return void c.error("Get buffer subdata is supported in WebGL2 only!");
    if (r$12 < 0 || i2 < 0)
      return void c.error("Problem getting subdata: offset and length were less than zero!");
    const s2 = b$1(e) ? e.BYTES_PER_ELEMENT : 1;
    if (s2 * ((r$12 != null ? r$12 : 0) + (i2 != null ? i2 : 0)) > e.byteLength)
      return void c.error("Problem getting subdata: offset and length exceeded destination size!");
    t2 + s2 * (i2 != null ? i2 : 0) > this.byteSize && c.warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const n2 = this._context.gl;
    this._context.bindBuffer(this, A.COPY_READ_BUFFER), n2.getBufferSubData(A.COPY_READ_BUFFER, t2, e, r$12, i2), this._context.unbindBuffer(A.COPY_READ_BUFFER);
  }
  async getSubDataAsync(e, t2 = 0, r$12, i2) {
    this._context.type === r.WEBGL2 ? (await this._context.clientWaitAsync(), this.getSubData(e, t2, r$12, i2)) : c.error("Get buffer subdata is supported in WebGL2 only!");
  }
}
class s {
  constructor(e, s2) {
    this._context = e, this._desc = s2, this.type = "renderbuffer", this._context.instanceCounter.increment(t.Renderbuffer, this);
    const i2 = this._context.gl;
    this.glName = i2.createRenderbuffer(), this._context.bindRenderbuffer(this);
    const { width: n2, height: o2, internalFormat: h, multisampled: c2 } = s2;
    if (c2) {
      if (this._context.type !== r.WEBGL2)
        throw new Error("Multisampled renderbuffers are not supported in WebGL1!");
      i2.renderbufferStorageMultisample(i2.RENDERBUFFER, this.samples, h, n2, o2);
    } else
      i2.renderbufferStorage(i2.RENDERBUFFER, h, n2, o2);
  }
  get descriptor() {
    return this._desc;
  }
  get samples() {
    const e = this._desc.samples, t2 = this._context.parameters.maxSamples;
    return e ? Math.min(e, t2) : t2;
  }
  resize(e, t2) {
    const r2 = this._desc;
    if (r2.width === e && r2.height === t2)
      return;
    r2.width = e, r2.height = t2;
    const s2 = this._context.gl;
    if (this._context.bindRenderbuffer(this), r2.multisampled) {
      s2.renderbufferStorageMultisample(s2.RENDERBUFFER, this.samples, r2.internalFormat, r2.width, r2.height);
    } else
      s2.renderbufferStorage(s2.RENDERBUFFER, r2.internalFormat, r2.width, r2.height);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(t.Renderbuffer, this), this._context = d(this._context));
  }
}
function i(e) {
  const r2 = e.gl;
  switch (r2.getError()) {
    case r2.NO_ERROR:
      return null;
    case r2.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case r2.INVALID_VALUE:
      return "A numeric argument is out of range";
    case r2.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case r2.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case r2.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case r2.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function n(e, r2) {
  return e.vertexBuffers[r2].size / o(e.layout[r2]);
}
function o(e) {
  return e[0].stride;
}
function R(e, r2, t2, s2, a2 = 0) {
  const c2 = e.gl, i2 = e.capabilities.instancing;
  e.bindBuffer(t2);
  for (const n2 of s2) {
    const e2 = r2.get(n2.name);
    e2 === void 0 && console.error(`There is no location for vertex attribute '${n2.name}' defined.`);
    const t3 = a2 * n2.stride;
    if (n2.count <= 4)
      c2.vertexAttribPointer(e2, n2.count, n2.type, n2.normalized, n2.stride, n2.offset + t3), c2.enableVertexAttribArray(e2), n2.divisor > 0 && i2 && i2.vertexAttribDivisor(e2, n2.divisor);
    else if (n2.count === 9)
      for (let r3 = 0; r3 < 3; r3++)
        c2.vertexAttribPointer(e2 + r3, 3, n2.type, n2.normalized, n2.stride, n2.offset + 12 * r3 + t3), c2.enableVertexAttribArray(e2 + r3), n2.divisor > 0 && i2 && i2.vertexAttribDivisor(e2 + r3, n2.divisor);
    else if (n2.count === 16)
      for (let r3 = 0; r3 < 4; r3++)
        c2.vertexAttribPointer(e2 + r3, 4, n2.type, n2.normalized, n2.stride, n2.offset + 16 * r3 + t3), c2.enableVertexAttribArray(e2 + r3), n2.divisor > 0 && i2 && i2.vertexAttribDivisor(e2 + r3, n2.divisor);
    else
      console.error("Unsupported vertex attribute element count: " + n2.count);
  }
}
function E(e, t2, s2, a2) {
  const c2 = e.gl, i2 = e.capabilities.instancing;
  e.bindBuffer(s2);
  for (const r2 of a2) {
    const e2 = t2.get(r2.name);
    if (r2.count <= 4)
      c2.disableVertexAttribArray(e2), r2.divisor && r2.divisor > 0 && i2 && i2.vertexAttribDivisor(e2, 0);
    else if (r2.count === 9)
      for (let t3 = 0; t3 < 3; t3++)
        c2.disableVertexAttribArray(e2 + t3), r2.divisor && r2.divisor > 0 && i2 && i2.vertexAttribDivisor(e2 + t3, 0);
    else if (r2.count === 16)
      for (let t3 = 0; t3 < 4; t3++)
        c2.disableVertexAttribArray(e2 + t3), r2.divisor && r2.divisor > 0 && i2 && i2.vertexAttribDivisor(e2 + t3, 0);
    else
      console.error("Unsupported vertex attribute element count: " + r2.count);
  }
  e.unbindBuffer(A.ARRAY_BUFFER);
}
function _(e) {
  switch (e) {
    case P$1.ALPHA:
    case P$1.LUMINANCE:
    case P$1.RED:
    case P$1.RED_INTEGER:
    case U$1.R8:
    case U$1.R8I:
    case U$1.R8UI:
    case U$1.R8_SNORM:
    case B.STENCIL_INDEX8:
      return 1;
    case P$1.LUMINANCE_ALPHA:
    case P$1.RG:
    case P$1.RG_INTEGER:
    case U$1.RGBA4:
    case U$1.R16F:
    case U$1.R16I:
    case U$1.R16UI:
    case U$1.RG8:
    case U$1.RG8I:
    case U$1.RG8UI:
    case U$1.RG8_SNORM:
    case U$1.RGB565:
    case U$1.RGB5_A1:
    case B.DEPTH_COMPONENT16:
      return 2;
    case P$1.DEPTH_COMPONENT:
    case P$1.RGB:
    case P$1.RGB_INTEGER:
    case U$1.RGB8:
    case U$1.RGB8I:
    case U$1.RGB8UI:
    case U$1.RGB8_SNORM:
    case U$1.SRGB8:
    case B.DEPTH_COMPONENT24:
      return 3;
    case P$1.DEPTH_STENCIL:
    case P$1.RGBA:
    case P$1.RGBA_INTEGER:
    case U$1.RGBA8:
    case U$1.R32F:
    case U$1.R11F_G11F_B10F:
    case U$1.RG16F:
    case U$1.R32I:
    case U$1.R32UI:
    case U$1.RG16I:
    case U$1.RG16UI:
    case U$1.RGBA8I:
    case U$1.RGBA8UI:
    case U$1.RGBA8_SNORM:
    case U$1.SRGB8_ALPHA8:
    case U$1.RGB9_E5:
    case U$1.RGB10_A2UI:
    case U$1.RGB10_A2:
    case B.DEPTH_STENCIL:
    case B.DEPTH_COMPONENT32F:
    case B.DEPTH24_STENCIL8:
      return 4;
    case B.DEPTH32F_STENCIL8:
      return 5;
    case U$1.RGB16F:
    case U$1.RGB16I:
    case U$1.RGB16UI:
      return 6;
    case U$1.RG32F:
    case U$1.RG32I:
    case U$1.RG32UI:
    case U$1.RGBA16F:
    case U$1.RGBA16I:
    case U$1.RGBA16UI:
      return 8;
    case U$1.RGB32F:
    case U$1.RGB32I:
    case U$1.RGB32UI:
      return 12;
    case U$1.RGBA32F:
    case U$1.RGBA32I:
    case U$1.RGBA32UI:
      return 16;
    case u$2.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case u$2.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case u$2.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case u$2.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case u$2.COMPRESSED_R11_EAC:
    case u$2.COMPRESSED_SIGNED_R11_EAC:
    case u$2.COMPRESSED_RGB8_ETC2:
    case u$2.COMPRESSED_SRGB8_ETC2:
    case u$2.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case u$2.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case u$2.COMPRESSED_RG11_EAC:
    case u$2.COMPRESSED_SIGNED_RG11_EAC:
    case u$2.COMPRESSED_RGBA8_ETC2_EAC:
    case u$2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}
function u(r2) {
  if (t$1(r2))
    return 0;
  if ("descriptor" in r2)
    return r2.glName ? u(r2.descriptor) : 0;
  const t2 = r2.internalFormat || "pixelFormat" in r2 && r2.pixelFormat;
  if (!t2)
    return 0;
  const s2 = "hasMipmap" in r2 && r2.hasMipmap ? 1.3 : 1, a2 = r2.width * r2.height;
  return _(t2) * a2 * s2;
}
class x {
  constructor(t$12, i2, r2 = null, h = null) {
    var _a;
    if (this._context = t$12, this._glName = null, this._depthAttachment = null, this._stencilAttachment = null, this._colorAttachments = new Map(), this._depthStencilTexture = null, this._initialized = false, this._desc = __spreadValues({}, i2), t$12.instanceCounter.increment(t.FramebufferObject, this), r$1(r2)) {
      Array.isArray(r2) || (r2 = [r2]);
      for (let t2 = 0; t2 < r2.length; ++t2) {
        const e = r2[t2], i3 = f$1.COLOR_ATTACHMENT0 + t2;
        let h2;
        C(e) ? (b(e) ? (h2 = e.descriptor, this._colorAttachments.set(i3, e)) : (h2 = e, this._colorAttachments.set(i3, new E$2(this._context, h2))), U(h2, this._desc)) : (D(e) ? (h2 = e.descriptor, this._colorAttachments.set(i3, e)) : (h2 = e, this._colorAttachments.set(i3, new s(this._context, h2))), H(h2, this._desc)), this._validateColorAttachmentPoint(i3);
      }
    }
    if (r$1(h)) {
      let t2, e;
      if (C(h))
        this._context.capabilities.depthTexture || console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"), b(h) ? (e = h.descriptor, this._depthStencilTexture = h) : (e = h, this._depthStencilTexture = new E$2(this._context, e)), U(e, this._desc);
      else {
        D(h) ? (e = h.descriptor, t2 = h) : (e = h, t2 = new s(this._context, e));
        const i3 = (_a = this._desc.depthStencilTarget) != null ? _a : V.DEPTH_STENCIL_RENDER_BUFFER;
        i3 === V.STENCIL_RENDER_BUFFER ? this._stencilAttachment = t2 : i3 === V.DEPTH_RENDER_BUFFER || i3 === V.DEPTH_STENCIL_RENDER_BUFFER ? this._depthAttachment = t2 : console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'), this._desc.depthStencilTarget = i3, H(e, this._desc);
      }
    }
  }
  dispose() {
    if (!this._desc)
      return;
    const t$12 = this._context.getBoundFramebufferObject();
    if (this._disposeColorAttachments(), this._disposeDepthStencilAttachments(), this._glName) {
      this._context.gl.deleteFramebuffer(this._glName), this._glName = null;
    }
    this._context.bindFramebuffer(t$12), this._context.instanceCounter.decrement(t.FramebufferObject, this), this._desc = null;
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._desc;
  }
  get colorTexture() {
    const t2 = this._colorAttachments.get(f$1.COLOR_ATTACHMENT0);
    return t2 && b(t2) ? t2 : null;
  }
  get colorAttachment() {
    return this._colorAttachments.get(f$1.COLOR_ATTACHMENT0);
  }
  get depthStencilAttachment() {
    return this._depthStencilTexture || this._depthAttachment || this._stencilAttachment;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    var _a;
    return (_a = this._desc.width) != null ? _a : 0;
  }
  get height() {
    var _a;
    return (_a = this._desc.height) != null ? _a : 0;
  }
  get gpuMemoryUsage() {
    return [...this._colorAttachments].reduce((t2, [e, i2]) => t2 + u(i2), 0) + u(this.depthStencilAttachment);
  }
  getColorTexture(t2) {
    const e = this._colorAttachments.get(t2);
    return e && b(e) ? e : null;
  }
  attachColorTexture(t2, e = f$1.COLOR_ATTACHMENT0) {
    if (!t2)
      return;
    this._validateColorAttachmentPoint(e);
    U(t2.descriptor, this._desc), this._disposeColorAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(t2.glName, e)), this._colorAttachments.set(e, t2);
  }
  detachColorTexture(t2 = f$1.COLOR_ATTACHMENT0) {
    const e = this._colorAttachments.get(t2);
    if (b(e)) {
      const i2 = e;
      return this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t2)), this._colorAttachments.delete(t2), i2;
    }
  }
  setColorTextureTarget(t2, e = f$1.COLOR_ATTACHMENT0) {
    const i2 = this._colorAttachments.get(e);
    b(i2) && this._framebufferTexture2D(i2.glName, e, t2);
  }
  attachDepthStencilTexture(t2) {
    if (t$1(t2))
      return;
    const e = t2.descriptor;
    e.pixelFormat !== P$1.DEPTH_STENCIL && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), e.dataType !== G.UNSIGNED_INT_24_8 && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"), this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"), U(e, this._desc), this._desc.depthStencilTarget && this._desc.depthStencilTarget !== V.DEPTH_STENCIL_TEXTURE && (this._desc.depthStencilTarget = V.DEPTH_STENCIL_TEXTURE), this._disposeDepthStencilAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(t2.glName, c$1)), this._depthStencilTexture = t2;
  }
  detachDepthStencilTexture() {
    const t2 = this._depthStencilTexture;
    return t2 && this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, c$1)), this._depthStencilTexture = null, t2;
  }
  attachDepthStencilBuffer(t2) {
    if (t$1(t2))
      return;
    const e = t2.descriptor;
    if (e.internalFormat !== B.DEPTH_STENCIL && e.internalFormat !== B.DEPTH_COMPONENT16 && console.error("Depth/Stencil buffer must have correct internalFormat"), H(e, this._desc), this._disposeDepthStencilAttachments(), this._desc.depthStencilTarget = e.internalFormat === B.DEPTH_STENCIL ? V.DEPTH_STENCIL_RENDER_BUFFER : V.DEPTH_RENDER_BUFFER, this._initialized) {
      this._context.bindFramebuffer(this);
      const e2 = this._context.gl, i2 = this._desc.depthStencilTarget === V.DEPTH_RENDER_BUFFER ? e2.DEPTH_ATTACHMENT : e2.DEPTH_STENCIL_ATTACHMENT;
      e2.framebufferRenderbuffer(n$1.FRAMEBUFFER, i2, e2.RENDERBUFFER, t2.glName);
    }
    this._depthAttachment = t2;
  }
  detachDepthStencilBuffer() {
    const t2 = this._context.gl, e = this._depthAttachment;
    if (e && this._initialized) {
      this._context.bindFramebuffer(this);
      const e2 = this._desc.depthStencilTarget === V.DEPTH_RENDER_BUFFER ? t2.DEPTH_ATTACHMENT : t2.DEPTH_STENCIL_ATTACHMENT;
      t2.framebufferRenderbuffer(n$1.FRAMEBUFFER, e2, t2.RENDERBUFFER, null);
    }
    return this._depthAttachment = null, e;
  }
  detachAll() {
    this._colorAttachments.forEach((t2, e) => this._detachColorAttachment(e)), this.detachDepthStencilBuffer(), this.detachDepthStencilTexture();
  }
  copyToTexture(t2, e, i2, r2, h, s2, n2) {
    (t2 < 0 || e < 0 || h < 0 || s2 < 0) && console.error("Offsets cannot be negative!"), (i2 <= 0 || r2 <= 0) && console.error("Copy width and height must be greater than zero!");
    const c2 = this._desc, o2 = n2.descriptor;
    n2.descriptor.target !== M.TEXTURE_2D && console.error("Texture target must be TEXTURE_2D!"), ((c2 == null ? void 0 : c2.width) == null || (c2 == null ? void 0 : c2.height) == null || (o2 == null ? void 0 : o2.width) == null || (o2 == null ? void 0 : o2.height) == null || t2 + i2 > c2.width || e + r2 > c2.height || h + i2 > o2.width || s2 + r2 > o2.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const _2 = this._context, a2 = _2.bindTexture(n2, E$2.TEXTURE_UNIT_FOR_UPDATES);
    _2.setActiveTexture(E$2.TEXTURE_UNIT_FOR_UPDATES), _2.bindFramebuffer(this), _2.gl.copyTexSubImage2D(M.TEXTURE_2D, 0, h, s2, t2, e, i2, r2), _2.bindTexture(a2, E$2.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(t2, e, i2, r2, h, s2, n2) {
    (i2 <= 0 || r2 <= 0) && console.error("Copy width and height must be greater than zero!"), n2 || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this);
    this._context.gl.readPixels(t2, e, i2, r2, h, s2, n2);
  }
  async readPixelsAsync(t2, e, i2, n2, c2, o2, _2) {
    if (this._context.type !== r.WEBGL2)
      return a$2() && console.warn("Attempting to read pixels using pixel buffer object without WebGL2"), void this.readPixels(t2, e, i2, n2, c2, o2, _2);
    const a2 = this._context.gl, l = E$1.createPixelPack(this._context, F.STREAM_READ, _2.byteLength);
    this._context.bindBuffer(l), this._context.bindFramebuffer(this), a2.readPixels(t2, e, i2, n2, c2, o2, 0), this._context.unbindBuffer(A.PIXEL_PACK_BUFFER), await l.getSubDataAsync(_2), l.dispose();
  }
  resize(t2, e) {
    const i2 = this._desc;
    if (i2.width !== t2 || i2.height !== e) {
      if (!this._initialized)
        return i2.width = t2, i2.height = e, this._colorAttachments.forEach((i3) => {
          i3 && i3.resize(t2, e);
        }), void (this._depthStencilTexture && this._depthStencilTexture.resize(t2, e));
      i2.width = t2, i2.height = e, this._colorAttachments.forEach((i3) => {
        i3 && i3.resize(t2, e);
      }), this._depthStencilTexture != null ? this._depthStencilTexture.resize(t2, e) : (this._depthAttachment || this._stencilAttachment) && (this._depthAttachment && this._depthAttachment.resize(t2, e), this._stencilAttachment && this._stencilAttachment.resize(t2, e)), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = false;
    }
  }
  initializeAndBind(t2 = n$1.FRAMEBUFFER) {
    var _a, _b, _c, _d;
    const e = this._context.gl;
    if (this._initialized)
      return void e.bindFramebuffer(t2, this.glName);
    this._glName && e.deleteFramebuffer(this._glName);
    const i2 = this._context, r2 = e.createFramebuffer(), s$12 = this._desc, n2 = (_a = s$12.colorTarget) != null ? _a : Y.RENDER_BUFFER, l = (_b = s$12.width) != null ? _b : 1, u2 = (_c = s$12.height) != null ? _c : 1;
    if (e.bindFramebuffer(t2, r2), this._colorAttachments.size === 0)
      if (n2 === Y.TEXTURE || n2 === Y.CUBEMAP)
        this._colorAttachments.set(f$1.COLOR_ATTACHMENT0, S(i2, s$12, this.descriptor.colorTarget === Y.CUBEMAP ? M.TEXTURE_CUBE_MAP : M.TEXTURE_2D));
      else {
        const t3 = new s(i2, { internalFormat: U$1.RGBA4, width: l, height: u2 });
        this._colorAttachments.set(f$1.COLOR_ATTACHMENT0, t3);
      }
    this._colorAttachments.forEach((i3, r3) => {
      i3 && (b(i3) ? this._framebufferTexture2D(i3.glName, r3, P(i3), t2) : e.framebufferRenderbuffer(t2, r3, e.RENDERBUFFER, i3.glName));
    });
    const f2 = (_d = s$12.depthStencilTarget) != null ? _d : V.NONE;
    switch (f2) {
      case V.DEPTH_RENDER_BUFFER:
      case V.DEPTH_STENCIL_RENDER_BUFFER: {
        this._depthAttachment || (this._depthAttachment = new s(i2, { internalFormat: s$12.depthStencilTarget === V.DEPTH_RENDER_BUFFER ? B.DEPTH_COMPONENT16 : B.DEPTH_STENCIL, width: l, height: u2 }));
        const r3 = f2 === V.DEPTH_RENDER_BUFFER ? e.DEPTH_ATTACHMENT : e.DEPTH_STENCIL_ATTACHMENT;
        e.framebufferRenderbuffer(t2, r3, e.RENDERBUFFER, this._depthAttachment.glName);
        break;
      }
      case V.STENCIL_RENDER_BUFFER:
        this._stencilAttachment || (this._stencilAttachment = new s(i2, { internalFormat: B.STENCIL_INDEX8, width: l, height: u2 })), e.framebufferRenderbuffer(t2, e.STENCIL_ATTACHMENT, e.RENDERBUFFER, this._stencilAttachment.glName);
        break;
      case V.DEPTH_STENCIL_TEXTURE:
        if (!this._depthStencilTexture) {
          i2.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");
          const t3 = { target: M.TEXTURE_2D, pixelFormat: P$1.DEPTH_STENCIL, dataType: G.UNSIGNED_INT_24_8, samplingMode: L.NEAREST, wrapMode: D$1.CLAMP_TO_EDGE, width: l, height: u2 };
          this._depthStencilTexture = new E$2(i2, t3);
        }
        this._framebufferTexture2D(this._depthStencilTexture.glName, e.DEPTH_STENCIL_ATTACHMENT, P(this._depthStencilTexture), t2);
    }
    if (a$2()) {
      e.checkFramebufferStatus(t2) !== e.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!");
    }
    this._glName = r2, this._initialized = true;
  }
  _framebufferTexture2D(t2, e = f$1.COLOR_ATTACHMENT0, i2 = M.TEXTURE_2D, r2 = n$1.FRAMEBUFFER, h = 0) {
    this._context.gl.framebufferTexture2D(r2, e, i2, t2, h);
  }
  _detachColorAttachment(t2) {
    a$2() && console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");
    const e = this._context.gl, i2 = this._colorAttachments.get(t2);
    return b(i2) ? this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t2)) : this._initialized && (this._context.bindFramebuffer(this), e.framebufferRenderbuffer(n$1.FRAMEBUFFER, t2, e.RENDERBUFFER, null)), this._colorAttachments.delete(t2), i2;
  }
  _disposeColorAttachments() {
    this._colorAttachments.forEach((t2, e) => {
      this._detachColorAttachment(e), t2.dispose();
    }), this._colorAttachments.clear();
  }
  _disposeDepthStencilAttachments() {
    const t2 = this._context.gl;
    if (this._depthAttachment) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const e = this._desc.depthStencilTarget === V.DEPTH_RENDER_BUFFER ? t2.DEPTH_ATTACHMENT : t2.DEPTH_STENCIL_ATTACHMENT;
        t2.framebufferRenderbuffer(n$1.FRAMEBUFFER, e, t2.RENDERBUFFER, null);
      }
      this._depthAttachment.dispose(), this._depthAttachment = null;
    }
    this._stencilAttachment && (this._initialized && (this._context.bindFramebuffer(this), t2.framebufferRenderbuffer(n$1.FRAMEBUFFER, t2.STENCIL_ATTACHMENT, t2.RENDERBUFFER, null)), this._stencilAttachment.dispose(), this._stencilAttachment = null), this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t2.DEPTH_STENCIL_ATTACHMENT)), this._depthStencilTexture.dispose(), this._depthStencilTexture = null);
  }
  _validateColorAttachmentPoint(e) {
    if (x._MAX_COLOR_ATTACHMENTS === -1) {
      const t2 = this._context.capabilities.drawBuffers;
      if (t2) {
        const e2 = this._context.gl;
        x._MAX_COLOR_ATTACHMENTS = e2.getParameter(t2.MAX_COLOR_ATTACHMENTS);
      } else
        x._MAX_COLOR_ATTACHMENTS = 1;
    }
    const i2 = e - f$1.COLOR_ATTACHMENT0;
    i2 + 1 > x._MAX_COLOR_ATTACHMENTS && s$1.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject", `illegal attachment point for color attachment: ${i2 + 1}. Implementation supports up to ${x._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
}
function b(t2) {
  return t2 != null && "type" in t2 && t2.type === "texture";
}
function D(t2) {
  return t2 != null && "type" in t2 && t2.type === "renderbuffer";
}
function C(t2) {
  return b(t2) || t2 != null && "pixelFormat" in t2;
}
function S(t2, e, i2) {
  return new E$2(t2, { target: i2, pixelFormat: P$1.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.NEAREST, wrapMode: D$1.CLAMP_TO_EDGE, width: e.width, height: e.height });
}
function U(t2, e) {
  t2.target !== M.TEXTURE_2D && t2.target !== M.TEXTURE_CUBE_MAP && console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"), e.width !== void 0 && e.width >= 0 && e.height !== void 0 && e.height >= 0 ? e.width === t2.width && e.height === t2.height || console.error("Color attachment texture must match the framebuffer's!") : (e.width = t2.width, e.height = t2.height);
}
function H(t2, e) {
  e.width !== void 0 && e.width >= 0 && e.height !== void 0 && e.height >= 0 ? e.width === t2.width && e.height === t2.height || console.error("Renderbuffer dimensions must match the framebuffer's!") : (e.width = t2.width, e.height = t2.height);
}
function P(t2) {
  return t2.descriptor.target === M.TEXTURE_CUBE_MAP ? M.TEXTURE_CUBE_MAP_POSITIVE_X : M.TEXTURE_2D;
}
x._MAX_COLOR_ATTACHMENTS = -1;
const f = s$1.getLogger("esri.views.webgl.VertexArrayObject");
class a {
  constructor(t$12, e, i2, r2, n2 = null) {
    this._context = t$12, this._locations = e, this._layout = i2, this._buffers = r2, this._indexBuffer = n2, this._glName = null, this._initialized = false, t$12.instanceCounter.increment(t.VertexArrayObject, this);
  }
  get glName() {
    return this._glName;
  }
  get context() {
    return this._context;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get size() {
    return Object.keys(this._buffers).reduce((t2, e) => t2 + this._buffers[e].size, r$1(this._indexBuffer) ? this._indexBuffer.size : 0);
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  dispose(t$12 = true) {
    var _a2, _b, _c;
    if (!this._context)
      return void ((this._glName || t$12 && Object.getOwnPropertyNames(this._buffers).length > 0) && f.warn("Leaked WebGL VAO"));
    if (this._glName) {
      const t2 = (_b = (_a2 = this._context) == null ? void 0 : _a2.capabilities) == null ? void 0 : _b.vao;
      t2 ? (t2.deleteVertexArray(this._glName), this._glName = null) : f.warn("Leaked WebGL VAO");
    }
    if (this._context.getBoundVAO() === this && this._context.bindVAO(null), t$12) {
      for (const t2 in this._buffers)
        (_c = this._buffers[t2]) == null ? void 0 : _c.dispose(), delete this._buffers[t2];
      this._indexBuffer = a$3(this._indexBuffer);
    }
    this._context.instanceCounter.decrement(t.VertexArrayObject, this), this._context = d(this._context);
  }
  initialize() {
    if (this._initialized)
      return;
    const t2 = this._context.capabilities.vao;
    if (t2) {
      const e = t2.createVertexArray();
      t2.bindVertexArray(e), this._bindLayout(), t2.bindVertexArray(null), this._glName = e;
    }
    this._initialized = true;
  }
  bind() {
    this.initialize();
    const t2 = this._context.capabilities.vao;
    t2 ? t2.bindVertexArray(this.glName) : (this._context.bindVAO(null), this._bindLayout());
  }
  _bindLayout() {
    const { _buffers: t2, _layout: i2, _indexBuffer: r2 } = this;
    t2 || f.error("Vertex buffer dictionary is empty!");
    const s2 = this._context.gl;
    for (const e in t2) {
      const r3 = t2[e];
      r3 || f.error("Vertex buffer is uninitialized!");
      const s3 = i2[e];
      s3 || f.error("Vertex element descriptor is empty!"), R(this._context, this._locations, r3, s3);
    }
    if (r$1(r2)) {
      !!this._context.capabilities.vao ? s2.bindBuffer(s2.ELEMENT_ARRAY_BUFFER, r2.glName) : this._context.bindBuffer(r2);
    }
  }
  unbind() {
    this.initialize();
    const t2 = this._context.capabilities.vao;
    t2 ? t2.bindVertexArray(null) : this._unbindLayout();
  }
  _unbindLayout() {
    const { _buffers: t2, _layout: i2 } = this;
    t2 || f.error("Vertex buffer dictionary is empty!");
    for (const e in t2) {
      const r2 = t2[e];
      r2 || f.error("Vertex buffer is uninitialized!");
      const s2 = i2[e];
      E(this._context, this._locations, r2, s2);
    }
    r$1(this._indexBuffer) && this._context.unbindBuffer(this._indexBuffer.bufferType);
  }
}
export { E$1 as E, _, a, i, n, s, x };
