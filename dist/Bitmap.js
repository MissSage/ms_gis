import { a as r, t, D, C as d, aU as r$2, M, aW as t$1, J as h, cb as b, aV as i$1, b3 as o, q as b$1, F as e, r as r$3 } from "./index.js";
import { r as r$1 } from "./utils.js";
import { M as M$1, P, U, G, D as D$1 } from "./enums.js";
import { E } from "./Texture.js";
class i {
  constructor(e2, t2, i2) {
    this.pixelBlock = e2, this.extent = t2, this.originalPixelBlock = i2;
  }
  get width() {
    return r(this.pixelBlock) ? this.pixelBlock.width : 0;
  }
  get height() {
    return r(this.pixelBlock) ? this.pixelBlock.height : 0;
  }
  render(e2) {
    const i2 = this.pixelBlock;
    if (t(i2))
      return;
    const l = this.filter({ pixelBlock: i2 });
    if (t(l.pixelBlock))
      return;
    const r2 = l.pixelBlock.getAsRGBA(), o2 = e2.createImageData(l.pixelBlock.width, l.pixelBlock.height);
    o2.data.set(r2), e2.putImageData(o2, 0, 0);
  }
  getRenderedRasterPixels() {
    const e2 = this.filter({ pixelBlock: this.pixelBlock });
    return t(e2.pixelBlock) ? null : { width: e2.pixelBlock.width, height: e2.pixelBlock.height, renderedRasterPixels: new Uint8Array(e2.pixelBlock.getAsRGBA().buffer) };
  }
}
function S(t2) {
  return t2 && "render" in t2;
}
function T(t2) {
  const e2 = document.createElement("canvas");
  return e2.width = t2.width, e2.height = t2.height, t2.render(e2.getContext("2d")), e2;
}
function v(t2) {
  return S(t2) ? t2 instanceof i ? o(t2.getRenderedRasterPixels(), (t3) => t3.renderedRasterPixels) : T(t2) : t2;
}
class R extends r$1 {
  constructor(t2 = null, e2) {
    var _a, _b;
    super(), this.blendFunction = "standard", this._sourceWidth = 0, this._sourceHeight = 0, this._textureInvalidated = false, this.stencilRef = 0, this.coordScale = [1, 1], this._height = void 0, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this._width = void 0, this.x = 0, this.y = 0, this.immutable = (_a = e2.immutable) != null ? _a : false, this.requestRenderOnSourceChangedEnabled = (_b = e2.requestRenderOnSourceChangedEnabled) != null ? _b : true, this.source = t2, this.requestRender = this.requestRender.bind(this);
  }
  destroy() {
    this._texture && (this._texture.dispose(), this._texture = null), r(this._uploadStatus) && (this._uploadStatus.controller.abort(), this._uploadStatus = null);
  }
  get isSourceScaled() {
    return this.width !== this._sourceWidth || this.height !== this._sourceHeight;
  }
  get height() {
    return this._height !== void 0 ? this._height : this._sourceHeight;
  }
  set height(t2) {
    this._height = t2;
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    t2 == null && this._source == null || (this._source = t2, this._source instanceof HTMLImageElement ? (this._sourceHeight = this._source.naturalHeight, this._sourceWidth = this._source.naturalWidth) : (this._sourceHeight = this._source.height, this._sourceWidth = this._source.width), this.invalidateTexture());
  }
  get width() {
    return this._width !== void 0 ? this._width : this._sourceWidth;
  }
  set width(t2) {
    this._width = t2;
  }
  beforeRender(t2) {
    super.beforeRender(t2), this.updateTexture(t2);
  }
  async setSourceAsync(e2, r$12) {
    r(this._uploadStatus) && this._uploadStatus.controller.abort();
    const h2 = new AbortController(), o2 = D();
    return d(r$12, () => h2.abort()), d(h2, (t2) => o2.reject(t2)), this._uploadStatus = { controller: h2, resolver: o2 }, this.source = e2, o2.promise;
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this.requestRenderOnSourceChangedEnabled && this.requestRender());
  }
  updateTransitionProperties(t2, e2) {
    t2 >= 64 && (this.fadeTransitionEnabled = false, this.inFadeTransition = false), super.updateTransitionProperties(t2, e2);
  }
  setTransform(t2) {
    const e2 = r$2(this.transforms.dvs), [s, i2] = t2.toScreenNoRotation([0, 0], [this.x, this.y]), r2 = this.resolution / this.pixelRatio / t2.resolution, d2 = r2 * this.width, c = r2 * this.height, _ = Math.PI * this.rotation / 180;
    M(e2, e2, t$1(s, i2)), M(e2, e2, t$1(d2 / 2, c / 2)), h(e2, e2, -_), M(e2, e2, t$1(-d2 / 2, -c / 2)), b(e2, e2, t$1(d2, c)), i$1(this.transforms.dvs, t2.displayViewMat3, e2);
  }
  setSamplingProfile(t2) {
    this._texture && (t2.mips && !this._texture.descriptor.hasMipmap && this._texture.generateMipmap(), this._texture.setSamplingMode(t2.samplingMode));
  }
  bind(t2, e2) {
    this._texture && t2.bindTexture(this._texture, e2);
  }
  async updateTexture({ context: e2, painter: s }) {
    if (!this._textureInvalidated)
      return;
    if (this._textureInvalidated = false, this._texture || (this._texture = this._createTexture(e2)), !this.source)
      return void this._texture.setData(null);
    this._texture.resize(this._sourceWidth, this._sourceHeight);
    const i2 = v(this.source);
    try {
      if (r(this._uploadStatus)) {
        const { controller: t2, resolver: e3 } = this._uploadStatus, r2 = { signal: t2.signal }, { width: h2, height: o2 } = this, u = this._texture, a = s.textureUploadManager;
        await a.enqueueTextureUpdate({ data: i2, texture: u, width: h2, height: o2 }, r2), e3.resolve(), this._uploadStatus = null;
      } else
        this._texture.setData(i2);
      this.ready();
    } catch (h2) {
      b$1(h2);
    }
  }
  onDetach() {
    this.destroy();
  }
  _createTransforms() {
    return { dvs: e() };
  }
  _createTexture(t2) {
    const e2 = this.immutable && t2.type === r$3.WEBGL2;
    return new E(t2, { target: M$1.TEXTURE_2D, pixelFormat: P.RGBA, internalFormat: e2 ? U.RGBA8 : P.RGBA, dataType: G.UNSIGNED_BYTE, wrapMode: D$1.CLAMP_TO_EDGE, isImmutable: e2, width: this._sourceWidth, height: this._sourceHeight });
  }
}
export { R, S, T, i };
