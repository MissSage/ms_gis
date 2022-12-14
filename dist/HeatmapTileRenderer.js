import { i1 as l, $ as e, a1 as n, a$ as u } from "./index.js";
import { n as n$1 } from "./BitmapTileContainer.js";
import { o as o$1 } from "./BaseTileRenderer.js";
import "vue";
import "./Bitmap.js";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./TileContainer.js";
import "./WGLContainer.js";
import "./pixelUtils.js";
import "./VertexArrayObject.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
class i {
  constructor() {
    this.gradient = null, this.height = 512, this.width = 512;
  }
  render(i2) {
    l(i2, 512, this.intensities, this.gradient, this.minDensity, this.maxDensity);
  }
}
let o = class extends o$1 {
  constructor(e2) {
    super(e2), this._intensityInfo = { minDensity: 0, maxDensity: 0 }, this.type = "heatmap", this.featuresView = { attributeView: { initialize: () => {
    }, requestUpdate: () => {
    } }, requestRender: () => {
    } }, this._container = new n$1(e2.tileInfoView);
  }
  createTile(e2) {
    const t = this._container.createTile(e2);
    return this.tileInfoView.getTileCoords(t.bitmap, e2), t.bitmap.resolution = this.tileInfoView.getTileResolution(e2), t;
  }
  onConfigUpdate() {
    const e2 = this.layer.renderer;
    if (e2.type === "heatmap") {
      const { minDensity: t, maxDensity: r, colorStops: s } = e2;
      this._intensityInfo.minDensity = t, this._intensityInfo.maxDensity = r, this._gradient = u(s), this.tiles.forEach((e3) => {
        const i2 = e3.bitmap.source;
        i2 && (i2.minDensity = t, i2.maxDensity = r, i2.gradient = this._gradient, e3.bitmap.invalidateTexture());
      });
    }
  }
  hitTest() {
    return Promise.resolve([]);
  }
  install(e2) {
    e2.addChild(this._container);
  }
  uninstall(e2) {
    this._container.removeAllChildren(), e2.removeChild(this._container);
  }
  disposeTile(e2) {
    this._container.removeChild(e2), e2.destroy();
  }
  supportsRenderer(e2) {
    return e2 && e2.type === "heatmap";
  }
  onTileData(e2) {
    const t = this.tiles.get(e2.tileKey);
    if (!t)
      return;
    const i$1 = e2.intensityInfo, { minDensity: r, maxDensity: s } = this._intensityInfo, o2 = t.bitmap.source || new i();
    o2.intensities = i$1 && i$1.matrix || null, o2.minDensity = r, o2.maxDensity = s, o2.gradient = this._gradient, t.bitmap.source = o2, this._container.addChild(t), this._container.requestRender(), this.requestUpdate();
  }
  onTileError(e2) {
    console.error(e2);
  }
  lockGPUUploads() {
  }
  unlockGPUUploads() {
  }
  fetchResource(e2, t) {
    return console.error(e2), Promise.reject();
  }
};
o = e([n("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")], o);
const a = o;
export { a as default };
