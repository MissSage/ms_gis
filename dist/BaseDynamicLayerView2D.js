import { m as j, s, $ as e, a0 as y$1, a1 as n } from "./index.js";
import { a } from "./BitmapContainer.js";
import { y, u } from "./LayerView.js";
import { v } from "./ExportStrategy.js";
import { i } from "./RefreshableLayerView.js";
import "vue";
import "./WGLContainer.js";
import "./enums.js";
import "./pixelUtils.js";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./VertexArrayObject.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./Bitmap.js";
let m = class extends i(y(u)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      j(t2) || s.getLogger(this.declaredClass).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new a(), this.container.addChild(this._bitmapContainer), this._strategy = new v({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e2, r) {
    return this.layer.fetchImage(t, e2, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
e([y$1()], m.prototype, "_strategy", void 0), e([y$1()], m.prototype, "updating", void 0), m = e([n("esri.views.2d.layers.BaseDynamicLayerView2D")], m);
const c = m;
export { c as default };
