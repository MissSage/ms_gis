import { N as e, O as y, P as n, dr as d } from "./index.js";
let i = class extends d {
  constructor(e2) {
    super(e2), this.tiles = new Map();
  }
  destroy() {
    this.tiles.clear(), this.layer = this.layerView = this.tileInfoView = this.tiles = null;
  }
  get updating() {
    return this.isUpdating();
  }
  acquireTile(e2) {
    const t = this.createTile(e2);
    return t.once("isReady", () => this.notifyChange("updating")), this.tiles.set(e2.id, t), t;
  }
  forceAttributeTextureUpload() {
  }
  forEachTile(e2) {
    this.tiles.forEach(e2);
  }
  releaseTile(e2) {
    this.tiles.delete(e2.key.id), this.disposeTile(e2);
  }
  isUpdating() {
    let e2 = true;
    return this.tiles.forEach((t) => {
      e2 = e2 && t.isReady;
    }), !e2;
  }
  setHighlight() {
  }
  invalidateLabels() {
  }
  requestUpdate() {
    this.layerView.requestUpdate();
  }
};
e([y()], i.prototype, "layer", void 0), e([y()], i.prototype, "layerView", void 0), e([y()], i.prototype, "tileInfoView", void 0), e([y()], i.prototype, "updating", null), i = e([n("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")], i);
const o = i;
export { o };
