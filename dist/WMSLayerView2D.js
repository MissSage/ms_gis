var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { $ as e, a0 as y, cL as g, a1 as n, g as s, m as j, s as s$1, R as l$2, cr as w } from "./index.js";
import { a as a$1 } from "./BitmapContainer.js";
import { y as y$1, u as u$1 } from "./LayerView.js";
import { v } from "./ExportStrategy.js";
import { i } from "./RefreshableLayerView.js";
import { l as l$1 } from "./ExportWMSImageParameters.js";
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
const a = (a2) => {
  let i2 = class extends a2 {
    initialize() {
      this.exportImageParameters = new l$1({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get exportImageVersion() {
      var _a;
      return (_a = this.exportImageParameters) == null ? void 0 : _a.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    fetchPopupFeatures(e2) {
      const { layer: t } = this;
      if (!e2)
        return Promise.reject(new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: t }));
      const { popupEnabled: o } = t;
      if (!o)
        return Promise.reject(new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: o }));
      const s$12 = this.createFetchPopupFeaturesQuery(e2);
      if (!s$12)
        return Promise.resolve([]);
      const { extent: p, width: a3, height: i3, x: m, y: n2 } = s$12;
      if (!(p && a3 && i3))
        throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: p, width: a3, height: i3 });
      return t.fetchFeatureInfo(p, a3, i3, m, n2);
    }
  };
  return e([y()], i2.prototype, "exportImageParameters", void 0), e([y({ readOnly: true })], i2.prototype, "exportImageVersion", null), e([y()], i2.prototype, "layer", void 0), e([y(g)], i2.prototype, "timeExtent", void 0), i2 = e([n("esri.layers.mixins.WMSLayerView")], i2), i2;
};
let u = class extends a(i(y$1(u$1))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new a$1();
  }
  supportsSpatialReference(e2) {
    return this.layer.serviceSupportsSpatialReference(e2);
  }
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      j(e3) || s$1.getLogger(this.declaredClass).error(e3);
    });
  }
  attach() {
    const { layer: e2 } = this, { imageMaxHeight: t, imageMaxWidth: r } = e2;
    this.bitmapContainer = new a$1(), this.container.addChild(this.bitmapContainer), this.strategy = new v({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.handles.add(l$2(() => this.exportImageVersion, () => this.requestUpdate()), "exportImageVersion");
  }
  detach() {
    this.handles.remove("exportImageVersion"), this.strategy.destroy(), this.strategy = null, this.container.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e2) {
    const { view: t, bitmapContainer: r } = this, { x: i2, y: s2 } = e2, { spatialReference: a2 } = t;
    let n2 = null, p = 0, m = 0;
    if (r.children.some((e3) => {
      const { width: t2, height: r2, resolution: h2, x: c2, y: d2 } = e3, u2 = c2 + h2 * t2, l2 = d2 - h2 * r2;
      return i2 >= c2 && i2 <= u2 && s2 <= d2 && s2 >= l2 && (n2 = new w({ xmin: c2, ymin: l2, xmax: u2, ymax: d2, spatialReference: a2 }), p = t2, m = r2, true);
    }), !n2)
      return null;
    const h = n2.width / p, c = Math.round((i2 - n2.xmin) / h), d = Math.round((n2.ymax - s2) / h);
    return { extent: n2, width: p, height: m, x: c, y: d };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e2, t, r, i2) {
    return this.layer.fetchImageBitmap(e2, t, r, __spreadValues({ timeExtent: this.timeExtent }, i2));
  }
};
e([y()], u.prototype, "strategy", void 0), e([y()], u.prototype, "updating", void 0), u = e([n("esri.views.2d.layers.WMSLayerView2D")], u);
const l = u;
export { l as default };
