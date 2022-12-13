import { a as r$1, cC as g, cx as j, R as l, S as h, cA as a, t, $ as e, a1 as n } from "./index.js";
import { i as i$1 } from "./utils.js";
import { r } from "./GroupContainer.js";
import { y as y$1, u } from "./LayerView.js";
import { i } from "./GraphicContainer.js";
import { o as oe } from "./BaseGraphicContainer.js";
import "vue";
import "./Utils2.js";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./WGLContainer.js";
import "./pixelUtils.js";
import "./VertexArrayObject.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./normalizeUtilsSync.js";
import "./projectionSupport.js";
import "./json.js";
import "./FeatureContainer.js";
import "./TileContainer.js";
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
const f = "sublayers", m = "layerView", w = Object.freeze({ remove() {
}, pause() {
}, resume() {
} });
let y = class extends y$1(u) {
  constructor() {
    super(...arguments), this._highlightIds = new Map(), this.container = new r();
  }
  async fetchPopupFeatures(e2) {
    return Array.from(this.graphicsViews(), (i2) => i2.hitTest(e2).filter((e3) => !!e3.popupTemplate)).flat();
  }
  *graphicsViews() {
    r$1(this._graphicsViewsFeatureCollectionMap) ? yield* this._graphicsViewsFeatureCollectionMap.keys() : r$1(this._graphicsViews) ? yield* this._graphicsViews : yield* [];
  }
  async hitTest(e2, i2) {
    return Array.from(this.graphicsViews(), (i3) => {
      const s = i3.hitTest(e2);
      if (r$1(this._graphicsViewsFeatureCollectionMap)) {
        const e3 = this._graphicsViewsFeatureCollectionMap.get(i3);
        for (const i4 of s)
          !i4.popupTemplate && e3.popupTemplate && (i4.popupTemplate = e3.popupTemplate), i4.sourceLayer = i4.layer = this.layer;
      }
      return s;
    }).flat().map((i3) => ({ type: "graphic", graphic: i3, layer: this.layer, mapPoint: e2 }));
  }
  highlight(e2) {
    let t2;
    return typeof e2 == "number" ? t2 = [e2] : e2 instanceof g ? t2 = [e2.uid] : Array.isArray(e2) && e2.length > 0 ? t2 = typeof e2[0] == "number" ? e2 : e2.map((e3) => e3 && e3.uid) : j.isCollection(e2) && (t2 = e2.map((e3) => e3 && e3.uid).toArray()), t2 = t2.filter((e3) => e3 != null), t2.length ? (this._addHighlight(t2), { remove: () => {
      this._removeHighlight(t2);
    } }) : w;
  }
  update(e2) {
    for (const i2 of this.graphicsViews())
      i2.processUpdate(e2);
  }
  attach() {
    const e2 = this.view, i$12 = () => this.requestUpdate(), s = this.layer.featureCollections;
    if (r$1(s) && s.length) {
      this._graphicsViewsFeatureCollectionMap = new Map();
      for (const t2 of s) {
        const s2 = new i(this.view.featuresTilingScheme), r2 = new oe({ view: e2, graphics: t2.source, renderer: t2.renderer, requestUpdateCallback: i$12, container: s2 });
        this._graphicsViewsFeatureCollectionMap.set(r2, t2), this.container.addChild(r2.container), this.handles.add([l(() => t2.visible, (e3) => r2.container.visible = e3, h), l(() => r2.updating, () => this.notifyChange("updating"), h)], m);
      }
      this._updateHighlight();
    } else
      r$1(this.layer.sublayers) && this.handles.add(a(() => this.layer.sublayers, "change", () => this._createGraphicsViews(), { onListenerAdd: () => this._createGraphicsViews(), onListenerRemove: () => this._destroyGraphicsViews() }), f);
  }
  detach() {
    this._destroyGraphicsViews(), this.handles.remove(f);
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e2 of this.graphicsViews())
      e2.viewChange();
  }
  isUpdating() {
    for (const e2 of this.graphicsViews())
      if (e2.updating)
        return true;
    return false;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.handles.remove(m);
    for (const e2 of this.graphicsViews())
      e2.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), t(this.layer.sublayers))
      return;
    const e2 = [], i$2 = this.view, s = () => this.requestUpdate();
    for (const t2 of this.layer.sublayers) {
      const r2 = new i$1(), a2 = new i(this.view.featuresTilingScheme);
      a2.fadeTransitionEnabled = true;
      const n2 = new oe({ view: i$2, graphics: t2.graphics, requestUpdateCallback: s, container: a2 });
      this.handles.add([t2.on("graphic-update", n2.graphicUpdateHandler), l(() => t2.visible, (e3) => n2.container.visible = e3, h), l(() => n2.updating, () => this.notifyChange("updating"), h)], m), r2.addChild(n2.container), this.container.addChild(r2), e2.push(n2);
    }
    this._graphicsViews = e2, this._updateHighlight();
  }
  _addHighlight(e2) {
    for (const i2 of e2)
      if (this._highlightIds.has(i2)) {
        const e3 = this._highlightIds.get(i2);
        this._highlightIds.set(i2, e3 + 1);
      } else
        this._highlightIds.set(i2, 1);
    this._updateHighlight();
  }
  _removeHighlight(e2) {
    for (const i2 of e2)
      if (this._highlightIds.has(i2)) {
        const e3 = this._highlightIds.get(i2) - 1;
        e3 === 0 ? this._highlightIds.delete(i2) : this._highlightIds.set(i2, e3);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const e2 = Array.from(this._highlightIds.keys());
    for (const i2 of this.graphicsViews())
      i2.setHighlight(e2);
  }
};
y = e([n("esri.views.2d.layers.MapNotesLayerView2D")], y);
const _ = y;
export { _ as default };
