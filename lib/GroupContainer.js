var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { o } from "./WGLContainer.js";
import { L } from "./enums.js";
class r extends o {
  constructor() {
    super(...arguments), this.requiresDedicatedFBO = false;
  }
  dispose() {
  }
  doRender(e) {
    const r2 = this.createRenderParams(e), { context: s, painter: o2, profiler: n } = r2;
    this._prevFBO = s.getBoundFramebufferObject(), n.recordContainerStart(this.name);
    const i = this._getFbo(r2), a = o2.getRenderTarget();
    s.bindFramebuffer(i), o2.setRenderTarget(i), s.setDepthWriteEnabled(true), s.setColorMask(true, true, true, true), s.setClearColor(0, 0, 0, 0), s.setClearDepth(1), s.clear(s.gl.COLOR_BUFFER_BIT | s.gl.DEPTH_BUFFER_BIT), s.setDepthWriteEnabled(false);
    for (const t of this.children)
      t.beforeRender(e);
    for (const t of this.children)
      t.processRender(r2);
    for (const t of this.children)
      t.afterRender(e);
    o2.setRenderTarget(a), o2.releaseFbo(i), s.bindFramebuffer(this._prevFBO), o2.beforeRenderLayer(r2, this._clippingInfos ? 255 : 0, this.computedOpacity), s.setStencilTestEnabled(false), s.setStencilWriteMask(0), o2.blitTexture(s, i.colorTexture, L.NEAREST), o2.compositeLayer(r2, this.computedOpacity), n.recordContainerEnd();
  }
  createRenderParams(e) {
    return __spreadProps(__spreadValues({}, super.createRenderParams(e)), { blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: 1 });
  }
  _getFbo(e) {
    const { context: t, painter: r2 } = e, { width: s, height: o2 } = t.getViewport();
    return r2.acquireFbo(s, o2);
  }
}
export { r };
