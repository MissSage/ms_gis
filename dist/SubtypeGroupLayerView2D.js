var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { $ as e, a1 as n$1, R as l$1, S as h, a as r, cK as y$1 } from "./index.js";
import B from "./FeatureLayerView2D.js";
import "vue";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./LayerView.js";
import "./schemaUtils.js";
import "./visualVariablesUtils2.js";
import "./createSymbolSchema.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./util.js";
import "./floorFilterUtils.js";
import "./popupUtils.js";
import "./RefreshableLayerView.js";
function l(e2, r2) {
  return !e2.visible || e2.minScale !== 0 && r2 > e2.minScale || e2.maxScale !== 0 && r2 < e2.maxScale;
}
let n = class extends B {
  initialize() {
    this.handles.add([l$1(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.viewpoint;
    }, () => this._update(), h)]);
  }
  _injectOverrides(e2) {
    let s = super._injectOverrides(e2);
    const t = this.view.scale, i = this.layer.sublayers.filter((e3) => l(e3, t)).map((e3) => e3.subtypeCode);
    if (!i.length)
      return s;
    s = r(s) ? s : new y$1().toJSON();
    const o = `NOT ${this.layer.subtypeField} IN (${i.join(",")})`;
    return s.where = s.where ? `(${s.where}) AND (${o})` : o, s;
  }
  _setLayersForFeature(e2) {
    const r2 = this.layer.fieldsIndex.get(this.layer.subtypeField), s = e2.attributes[r2.name], t = this.layer.sublayers.find((e3) => e3.subtypeCode === s);
    e2.layer = t, e2.sourceLayer = this.layer;
  }
  _createSchemaConfig() {
    const e2 = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers).map((e3) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: e3.labelingInfo, labelsVisible: e3.labelsVisible, renderer: e3.renderer, subtypeCode: e3.subtypeCode, orderBy: null })) }, r2 = this.layer.sublayers.map((e3) => e3.subtypeCode).join(","), s = this.layer.sublayers.length ? `${this.layer.subtypeField} IN (${r2})` : "1=2";
    let t = this.layer.definitionExpression ? this.layer.definitionExpression + " AND " : "";
    return t += s, __spreadProps(__spreadValues(__spreadValues({}, super._createSchemaConfig()), e2), { definitionExpression: t });
  }
};
n = e([n$1("esri.views.2d.layers.SubtypeGroupLayerView2D")], n);
const y = n;
export { y as default };
