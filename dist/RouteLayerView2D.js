import { cx as j$1, dS as l, a as r, S as h, t, R as l$1, $ as e, a0 as y$1, a1 as n } from "./index.js";
import { b, h as h$1, O, g, f, a as h$2, D } from "./Stop.js";
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
const k = Object.freeze({ remove() {
}, pause() {
}, resume() {
} }), v = ["route-info", "direction-line", "direction-point", "polygon-barrier", "polyline-barrier", "point-barrier", "stop"], M = { graphic: null, property: null, oldValue: null, newValue: null };
function V(e2) {
  return e2 instanceof b || e2 instanceof h$1 || e2 instanceof O || e2 instanceof g || e2 instanceof f || e2 instanceof h$2 || e2 instanceof D;
}
function j(e2) {
  return j$1.isCollection(e2) && e2.length && V(e2.getItemAt(0));
}
function G(e2) {
  return Array.isArray(e2) && e2.length && V(e2[0]);
}
let I = class extends y(u) {
  constructor() {
    super(...arguments), this._graphics = new j$1(), this._highlightIds = new Map(), this._networkFeatureMap = new Map(), this._networkGraphicMap = new Map();
  }
  get _routeItems() {
    return new l({ getCollections: () => r(this.layer) && !this.destroyed ? [r(this.layer.routeInfo) ? new j$1([this.layer.routeInfo]) : null, this.layer.directionLines, this.layer.directionPoints, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.pointBarriers, this.layer.stops] : [] });
  }
  initialize() {
    this.updatingHandles.addOnCollectionChange(() => this._routeItems, (e2) => this._routeItemsChanged(e2), h);
  }
  destroy() {
    var _a;
    this.handles.removeAll(), this.updatingHandles.removeAll(), this._networkFeatureMap.clear(), this._networkGraphicMap.clear(), this._graphics.removeAll(), (_a = this._get("_routeItems")) == null ? void 0 : _a.destroy();
  }
  attach() {
    this._createGraphicsView();
  }
  detach() {
    this._destroyGraphicsView();
  }
  async fetchPopupFeatures(e2) {
    return this._graphicsView.hitTest(e2).filter((e3) => !!e3.popupTemplate);
  }
  highlight(e2) {
    let t2;
    t2 = V(e2) ? [this._getNetworkFeatureUid(e2)] : G(e2) ? e2.map((e3) => this._getNetworkFeatureUid(e3)) : j(e2) ? e2.map((e3) => this._getNetworkFeatureUid(e3)).toArray() : [e2.uid];
    const r$1 = t2.filter(r);
    return r$1.length ? (this._addHighlight(r$1), { remove: () => this._removeHighlight(r$1) }) : k;
  }
  async hitTest(e2, t2) {
    if (this.suspended)
      return null;
    const r$1 = this._graphicsView.hitTest(e2).filter(r).map((e3) => this._networkGraphicMap.get(e3));
    if (!r$1.length)
      return null;
    const { layer: s } = this;
    return r$1.reverse().map((t3) => ({ type: "route", layer: s, mapPoint: e2, networkFeature: t3 }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveStart() {
  }
  moveEnd() {
  }
  update(e2) {
    this._graphicsView.processUpdate(e2);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2);
        this._highlightIds.set(t2, e3 + 1);
      } else
        this._highlightIds.set(t2, 1);
    this._updateHighlight();
  }
  _createGraphic(e2) {
    const t2 = e2.toGraphic();
    return t2.layer = this.layer, t2.sourceLayer = this.layer, t2;
  }
  _createGraphicsView() {
    const e2 = this.view, t2 = () => this.requestUpdate(), r2 = new i(e2.featuresTilingScheme);
    this._graphicsView = new oe({ container: r2, graphics: this._graphics, requestUpdateCallback: t2, view: e2 }), this.container.addChild(r2), this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container), this._graphicsView.destroy();
  }
  _getDrawOrder(e2) {
    const t2 = this._networkGraphicMap.get(e2);
    return v.indexOf(t2.type);
  }
  _getNetworkFeatureUid(e2) {
    return this._networkFeatureMap.has(e2) ? this._networkFeatureMap.get(e2).uid : null;
  }
  _removeHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2) - 1;
        e3 === 0 ? this._highlightIds.delete(t2) : this._highlightIds.set(t2, e3);
      }
    this._updateHighlight();
  }
  _routeItemsChanged(e2) {
    if (e2.removed.length) {
      this._graphics.removeMany(e2.removed.map((e3) => {
        const t2 = this._networkFeatureMap.get(e3);
        return this._networkFeatureMap.delete(e3), this._networkGraphicMap.delete(t2), t2;
      }));
      for (const t2 of e2.removed)
        this.handles.remove(t2);
    }
    if (e2.added.length) {
      this._graphics.addMany(e2.added.map((e3) => {
        const t$1 = this._createGraphic(e3);
        return t(t$1.symbol) ? null : (this._networkFeatureMap.set(e3, t$1), this._networkGraphicMap.set(t$1, e3), t$1);
      }).filter(r));
      for (const t2 of e2.added)
        this.handles.add([l$1(() => t2.geometry, (e3, r2) => {
          this._updateGraphic(t2, "geometry", e3, r2);
        }), l$1(() => t2.symbol, (e3, r2) => {
          this._updateGraphic(t2, "symbol", e3, r2);
        })], t2);
      this._graphics.sort((e3, t2) => this._getDrawOrder(e3) - this._getDrawOrder(t2));
    }
  }
  _updateGraphic(e2, t2, r2, i2) {
    if (!this._networkFeatureMap.has(e2)) {
      const t3 = this._createGraphic(e2);
      return this._networkFeatureMap.set(e2, t3), this._networkGraphicMap.set(t3, e2), void this._graphics.add(t3);
    }
    const s = this._networkFeatureMap.get(e2);
    s[t2] = r2, M.graphic = s, M.property = t2, M.oldValue = i2, M.newValue = r2, this._graphicsView.graphicUpdateHandler(M);
  }
  _updateHighlight() {
    const e2 = Array.from(this._highlightIds.keys());
    this._graphicsView.setHighlight(e2);
  }
};
e([y$1()], I.prototype, "_graphics", void 0), e([y$1()], I.prototype, "_routeItems", null), I = e([n("esri.views.2d.layers.RouteLayerView2D")], I);
const F = I;
export { F as default };
