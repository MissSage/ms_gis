import { F as e, ap as u } from "./index.js";
import { R } from "./Bitmap.js";
import { r as r$1, i } from "./TileContainer.js";
import { c as n$1 } from "./WGLContainer.js";
import { I } from "./Utils2.js";
class r extends r$1 {
  constructor(e2, s, r2, i2, a, n2, m = null) {
    super(e2, s, r2, i2, a, n2), this.bitmap = new R(m, { immutable: false, requestRenderOnSourceChangedEnabled: false }), this.bitmap.coordScale = [a, n2], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(e2) {
    super.beforeRender(e2), this.bitmap.beforeRender(e2);
  }
  afterRender(e2) {
    super.afterRender(e2), this.bitmap.afterRender(e2);
  }
  set stencilRef(e2) {
    this.bitmap.stencilRef = e2;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return { dvs: e(), tileMat3: e() };
  }
  setTransform(e2) {
    super.setTransform(e2), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
}
class n extends i {
  get requiresDedicatedFBO() {
    return this.children.some((e2) => e2.bitmap.blendFunction === "additive");
  }
  createTile(r$12) {
    const t = this._tileInfoView.getTileBounds(u(), r$12), s = this._tileInfoView.getTileResolution(r$12.level), [n2, o] = this._tileInfoView.tileInfo.size;
    return new r(r$12, s, t[0], t[3], n2, o);
  }
  prepareRenderPasses(e2) {
    const i2 = e2.registerRenderPass({ name: "bitmap (tile)", brushes: [n$1.bitmap], target: () => this.children.map((e3) => e3.bitmap), drawPhase: I.MAP });
    return [...super.prepareRenderPasses(e2), i2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === I.MAP && super.doRender(e2);
  }
}
export { n };
