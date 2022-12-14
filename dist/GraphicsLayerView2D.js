import { cC as g$1, cx as j, $ as e, a0 as y$1, a1 as n } from "./index.js";
import { y, u } from "./LayerView.js";
import { i } from "./GraphicContainer.js";
import { o as oe } from "./BaseGraphicContainer.js";
import "vue";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./normalizeUtilsSync.js";
import "./projectionSupport.js";
import "./json.js";
import "./VertexArrayObject.js";
import "./FeatureContainer.js";
import "./TileContainer.js";
import "./WGLContainer.js";
import "./pixelUtils.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./visualVariablesUtils.js";
import "./visualVariablesUtils2.js";
import "./Matcher.js";
import "./tileUtils.js";
import "./TileClipper.js";
import "./Geometry.js";
import "./devEnvironmentUtils.js";
import "./schemaUtils.js";
import "./createSymbolSchema.js";
import "./util.js";
import "./ComputedAttributeStorage.js";
import "./centroid.js";
import "./vec3f32.js";
const g = { remove() {
}, pause() {
}, resume() {
} };
let c = class extends y(u) {
  constructor() {
    super(...arguments), this._highlightIds = new Map();
  }
  attach() {
    this.graphicsView = new oe({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new i(this.view.featuresTilingScheme) }), this._updateHighlight(), this.container.addChild(this.graphicsView.container), this.handles.add(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler), "graphicslayerview2d");
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView.destroy(), this.graphicsView = null, this.handles.remove("graphicslayerview2d");
  }
  async hitTest(i2) {
    return this.graphicsView ? this.graphicsView.hitTest(i2).map((e2) => ({ type: "graphic", graphic: e2, mapPoint: i2, layer: this.layer })) : null;
  }
  async fetchPopupFeatures(i2) {
    if (this.graphicsView)
      return this.graphicsView.hitTest(i2).filter((i3) => !!i3.popupTemplate);
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i2) {
    this.graphicsView.processUpdate(i2);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i2) {
    let s;
    return typeof i2 == "number" ? s = [i2] : i2 instanceof g$1 ? s = [i2.uid] : Array.isArray(i2) && i2.length > 0 ? s = typeof i2[0] == "number" ? i2 : i2.map((i3) => i3 && i3.uid) : j.isCollection(i2) && i2.length > 0 && (s = i2.map((i3) => i3 && i3.uid).toArray()), s = s == null ? void 0 : s.filter((i3) => i3 != null), s.length ? (this._addHighlight(s), { remove: () => this._removeHighlight(s) }) : g;
  }
  _addHighlight(i2) {
    for (const e2 of i2)
      if (this._highlightIds.has(e2)) {
        const i3 = this._highlightIds.get(e2);
        this._highlightIds.set(e2, i3 + 1);
      } else
        this._highlightIds.set(e2, 1);
    this._updateHighlight();
  }
  _removeHighlight(i2) {
    for (const e2 of i2)
      if (this._highlightIds.has(e2)) {
        const i3 = this._highlightIds.get(e2) - 1;
        i3 === 0 ? this._highlightIds.delete(e2) : this._highlightIds.set(e2, i3);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    var _a;
    (_a = this.graphicsView) == null ? void 0 : _a.setHighlight(Array.from(this._highlightIds.keys()));
  }
};
e([y$1()], c.prototype, "graphicsView", void 0), c = e([n("esri.views.2d.layers.GraphicsLayerView2D")], c);
const l = c;
export { l as default };
