import { o, c as n } from "./WGLContainer.js";
import { I } from "./Utils2.js";
class a extends o {
  constructor() {
    super(...arguments), this._hasCrossfade = false;
  }
  get requiresDedicatedFBO() {
    return this._hasCrossfade;
  }
  beforeRender(e) {
    super.beforeRender(e), this._manageFade();
  }
  prepareRenderPasses(r) {
    const a2 = r.registerRenderPass({ name: "bitmap", brushes: [n.bitmap], target: () => this.children, drawPhase: I.MAP });
    return [...super.prepareRenderPasses(r), a2];
  }
  _manageFade() {
    this.children.reduce((e, s) => e + (s.inFadeTransition ? 1 : 0), 0) >= 2 ? (this.children.forEach((e) => e.blendFunction = "additive"), this._hasCrossfade = true) : (this.children.forEach((e) => e.blendFunction = "standard"), this._hasCrossfade = false);
  }
}
export { a };
