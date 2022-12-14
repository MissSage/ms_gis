var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { Y as a, Z as m$1, bX as t, a as r, $ as e, a0 as y, cL as g, a1 as n$1 } from "./index.js";
import { n } from "./floorFilterUtils.js";
import { i } from "./sublayerUtils.js";
const m = { visible: "visibleSublayers", definitionExpression: "layerDefs", labelingInfo: "hasDynamicLayers", labelsVisible: "hasDynamicLayers", opacity: "hasDynamicLayers", minScale: "visibleSublayers", maxScale: "visibleSublayers", renderer: "hasDynamicLayers", source: "hasDynamicLayers" };
let c = class extends a(m$1) {
  constructor(e2) {
    super(e2), this.floors = null, this.scale = 0;
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers)
      return null;
    const e2 = this.visibleSublayers.map((e3) => {
      const r2 = n(this.floors, e3);
      return e3.toExportImageJSON(r2);
    });
    return e2.length ? JSON.stringify(e2) : null;
  }
  get hasDynamicLayers() {
    return this.layer && i(this.visibleSublayers, this.layer.serviceSublayers, this.layer.gdbVersion);
  }
  set layer(e2) {
    this._get("layer") !== e2 && (this._set("layer", e2), this.handles.remove("layer"), e2 && this.handles.add([e2.allSublayers.on("change", () => this.notifyChange("visibleSublayers")), e2.on("sublayer-update", (e3) => this.notifyChange(m[e3.propertyName]))], "layer"));
  }
  get layers() {
    const e2 = this.visibleSublayers;
    return e2 ? e2.length ? "show:" + e2.map((e3) => e3.id).join(",") : "show:-1" : null;
  }
  get layerDefs() {
    var _a;
    const e2 = !!((_a = this.floors) == null ? void 0 : _a.length), r$1 = this.visibleSublayers.filter((r2) => r2.definitionExpression != null || e2 && r2.floorInfo != null);
    return r$1.length ? JSON.stringify(r$1.reduce((e3, r$12) => {
      const s = n(this.floors, r$12), o = t(s, r$12.definitionExpression);
      return r(o) && (e3[r$12.id] = o), e3;
    }, {})) : null;
  }
  get version() {
    this.commitProperty("layers"), this.commitProperty("layerDefs"), this.commitProperty("dynamicLayers"), this.commitProperty("timeExtent");
    const e2 = this.layer;
    return e2 && (e2.commitProperty("dpi"), e2.commitProperty("imageFormat"), e2.commitProperty("imageTransparency"), e2.commitProperty("gdbVersion")), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const e2 = [];
    if (!this.layer)
      return e2;
    const r2 = this.layer.sublayers, s = (r3) => {
      const t3 = this.scale, i2 = t3 === 0, o = r3.minScale === 0 || t3 <= r3.minScale, a2 = r3.maxScale === 0 || t3 >= r3.maxScale;
      r3.visible && (i2 || o && a2) && (r3.sublayers ? r3.sublayers.forEach(s) : e2.unshift(r3));
    };
    r2 && r2.forEach(s);
    const t2 = this._get("visibleSublayers");
    return !t2 || t2.length !== e2.length || t2.some((r3, s2) => e2[s2] !== r3) ? e2 : t2;
  }
  toJSON() {
    const e2 = this.layer;
    let r2 = { dpi: e2.dpi, format: e2.imageFormat, transparent: e2.imageTransparency, gdbVersion: e2.gdbVersion || null };
    return this.hasDynamicLayers && this.dynamicLayers ? r2.dynamicLayers = this.dynamicLayers : r2 = __spreadProps(__spreadValues({}, r2), { layers: this.layers, layerDefs: this.layerDefs }), r2;
  }
};
e([y({ readOnly: true })], c.prototype, "dynamicLayers", null), e([y()], c.prototype, "floors", void 0), e([y({ readOnly: true })], c.prototype, "hasDynamicLayers", null), e([y()], c.prototype, "layer", null), e([y({ readOnly: true })], c.prototype, "layers", null), e([y({ readOnly: true })], c.prototype, "layerDefs", null), e([y({ type: Number })], c.prototype, "scale", void 0), e([y(g)], c.prototype, "timeExtent", void 0), e([y({ readOnly: true })], c.prototype, "version", null), e([y({ readOnly: true })], c.prototype, "visibleSublayers", null), c = e([n$1("esri.layers.mixins.ExportImageParameters")], c);
export { c };
