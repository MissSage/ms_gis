import { R as l, S as h, cE as x, cx as j, d4 as k, d5 as t, d6 as p, $ as e, a1 as n } from "./index.js";
import { y as y$1, u } from "./LayerView.js";
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
let y = class extends y$1(u) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = new Map(), this.graphicsViews = [];
  }
  async hitTest(e2, r) {
    if (!this.graphicsViews.length)
      return null;
    const s = this.layer;
    return this.graphicsViews.reverse().map((r2) => {
      const i2 = this._popupTemplates.get(r2), o = r2.hitTest(e2);
      for (const e3 of o)
        e3.layer = s, e3.sourceLayer = s, e3.popupTemplate = i2;
      return o;
    }).flat().map((r2) => ({ type: "graphic", graphic: r2, layer: s, mapPoint: e2 }));
  }
  update(e2) {
    if (this.graphicsViews)
      for (const r of this.graphicsViews)
        r.processUpdate(e2);
  }
  attach() {
    this.handles.add([l(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.featureCollections;
    }, (e2) => {
      this._clear();
      for (const { popupInfo: i$1, featureSet: o, layerDefinition: t$1 } of e2) {
        const e3 = x.fromJSON(o), p2 = new j(e3.features), h2 = t$1.drawingInfo, m = i$1 ? k.fromJSON(i$1) : null, y2 = t(h2.renderer), g2 = new oe({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: p2, renderer: y2, container: new i(this.view.featuresTilingScheme) });
        this._graphicsViewMap[e3.geometryType] = g2, this._popupTemplates.set(g2, m), e3.geometryType !== "polygon" || this.layer.polygonSymbol ? e3.geometryType !== "polyline" || this.layer.lineSymbol ? e3.geometryType !== "point" || this.layer.pointSymbol || (this.layer.pointSymbol = y2.symbol) : this.layer.lineSymbol = y2.symbol : this.layer.polygonSymbol = y2.symbol, this.graphicsViews.push(g2), this.container.addChild(g2.container);
      }
    }, h), l(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.polygonSymbol;
    }, (e2) => {
      this._graphicsViewMap.polygon.renderer = new p({ symbol: e2 });
    }, h), l(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.lineSymbol;
    }, (e2) => {
      this._graphicsViewMap.polyline.renderer = new p({ symbol: e2 });
    }, h), l(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.pointSymbol;
    }, (e2) => {
      this._graphicsViewMap.point.renderer = new p({ symbol: e2 });
    }, h)], "georsslayerview");
  }
  detach() {
    this.handles.remove("georsslayerview"), this._clear();
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e2 of this.graphicsViews)
      e2.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const e2 of this.graphicsViews)
      e2.destroy();
    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }
};
y = e([n("esri.views.2d.layers.GeoRSSLayerView2D")], y);
const g = y;
export { g as default };
