import { bE as e, ce as s, aV as i$1, h as has } from "./index.js";
import { r as r$1 } from "./utils.js";
import { I } from "./Utils2.js";
import { o, h, x } from "./WGLContainer.js";
class r extends r$1 {
  constructor(t, s2, i2, r2, h2, o2, n2 = h2, a = o2) {
    super(), this.triangleCountReportedInDebug = 0, this.triangleCount = 0, this.texture = null, this.key = new e(t), this.resolution = s2, this.x = i2, this.y = r2, this.width = h2, this.height = o2, this.rangeX = n2, this.rangeY = a;
  }
  destroy() {
    this.texture && (this.texture.dispose(), this.texture = null);
  }
  setTransform(i2) {
    const e2 = this.resolution / (i2.resolution * i2.pixelRatio), r2 = this.transforms.tileMat3, [h2, o2] = i2.toScreenNoRotation([0, 0], [this.x, this.y]), n2 = this.width / this.rangeX * e2, a = this.height / this.rangeY * e2;
    s(r2, n2, 0, 0, 0, a, 0, h2, o2, 1), i$1(this.transforms.dvs, i2.displayViewMat3, r2);
  }
}
const n = (e2, r2) => e2.key.level - r2.key.level != 0 ? e2.key.level - r2.key.level : e2.key.row - r2.key.row != 0 ? e2.key.row - r2.key.row : e2.key.col - r2.key.col;
class i extends o {
  constructor(e2) {
    super(), this._tileInfoView = e2;
  }
  get requiresDedicatedFBO() {
    return false;
  }
  renderChildren(e2) {
    this.sortChildren(n), this.setStencilReference(e2), super.renderChildren(e2);
  }
  createRenderParams(e2) {
    const { state: r2 } = e2, s2 = super.createRenderParams(e2);
    return s2.requiredLevel = this._tileInfoView.getClosestInfoForScale(r2.scale).level, s2.displayLevel = this._tileInfoView.tileInfo.scaleToZoom(r2.scale), s2;
  }
  prepareRenderPasses(r2) {
    const n2 = super.prepareRenderPasses(r2);
    return n2.push(r2.registerRenderPass({ name: "stencil", brushes: [h], drawPhase: I.DEBUG | I.MAP | I.HIGHLIGHT, target: () => this.getStencilTarget() })), has("esri-tiles-debug") && n2.push(r2.registerRenderPass({ name: "tileInfo", brushes: [x], drawPhase: I.DEBUG, target: () => this.children })), n2;
  }
  getStencilTarget() {
    return this.children;
  }
  setStencilReference(e2) {
    let r2 = 1;
    for (const s2 of this.children)
      s2.stencilRef = r2++;
  }
}
export { i, r };
