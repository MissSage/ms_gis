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
import { $ as e$1, a0 as y, a1 as n$1, co as l$5, ck as s$1, dW as r, dT as o, aX as y$1, b0 as l$6, gp as T, gq as p$5, gr as a$7 } from "./index.js";
var s;
let i$2 = s = class extends l$5 {
  constructor() {
    super(...arguments), this.field = null, this.minValue = 0, this.maxValue = 255;
  }
  clone() {
    return new s({ field: this.field, minValue: this.minValue, maxValue: this.maxValue });
  }
};
e$1([y({ type: String, json: { write: true } })], i$2.prototype, "field", void 0), e$1([y({ type: Number, nonNullable: true, json: { write: true } })], i$2.prototype, "minValue", void 0), e$1([y({ type: Number, nonNullable: true, json: { write: true } })], i$2.prototype, "maxValue", void 0), i$2 = s = e$1([n$1("esri.renderers.support.pointCloud.ColorModulation")], i$2);
const p$4 = i$2;
const p$3 = new s$1({ pointCloudFixedSizeAlgorithm: "fixed-size", pointCloudSplatAlgorithm: "splat" });
let i$1 = class extends l$5 {
};
e$1([y({ type: p$3.apiValues, readOnly: true, nonNullable: true, json: { type: p$3.jsonValues, read: false, write: p$3.write } })], i$1.prototype, "type", void 0), i$1 = e$1([n$1("esri.renderers.support.pointCloud.PointSizeAlgorithm")], i$1);
const a$6 = i$1;
var i;
let p$2 = i = class extends a$6 {
  constructor() {
    super(...arguments), this.type = "fixed-size", this.size = 0, this.useRealWorldSymbolSizes = null;
  }
  clone() {
    return new i({ size: this.size, useRealWorldSymbolSizes: this.useRealWorldSymbolSizes });
  }
};
e$1([r({ pointCloudFixedSizeAlgorithm: "fixed-size" })], p$2.prototype, "type", void 0), e$1([y({ type: Number, nonNullable: true, json: { write: true } })], p$2.prototype, "size", void 0), e$1([y({ type: Boolean, json: { write: true } })], p$2.prototype, "useRealWorldSymbolSizes", void 0), p$2 = i = e$1([n$1("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], p$2);
const l$4 = p$2;
var p$1;
let c$3 = p$1 = class extends a$6 {
  constructor() {
    super(...arguments), this.type = "splat", this.scaleFactor = 1;
  }
  clone() {
    return new p$1({ scaleFactor: this.scaleFactor });
  }
};
e$1([r({ pointCloudSplatAlgorithm: "splat" })], c$3.prototype, "type", void 0), e$1([y({ type: Number, value: 1, nonNullable: true, json: { write: true } })], c$3.prototype, "scaleFactor", void 0), c$3 = p$1 = e$1([n$1("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")], c$3);
const a$5 = c$3;
const e = { key: "type", base: a$6, typeMap: { "fixed-size": l$4, splat: a$5 } };
const u$1 = o()({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks", pointCloudRGBRenderer: "point-cloud-rgb", pointCloudStretchRenderer: "point-cloud-stretch", pointCloudUniqueValueRenderer: "point-cloud-unique-value" });
let c$2 = class extends l$5 {
  constructor(o2) {
    super(o2), this.type = void 0, this.pointSizeAlgorithm = null, this.colorModulation = null, this.pointsPerInch = 10;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  cloneProperties() {
    return { pointSizeAlgorithm: y$1(this.pointSizeAlgorithm), colorModulation: y$1(this.colorModulation), pointsPerInch: y$1(this.pointsPerInch) };
  }
};
e$1([y({ type: u$1.apiValues, readOnly: true, nonNullable: true, json: { type: u$1.jsonValues, read: false, write: u$1.write } })], c$2.prototype, "type", void 0), e$1([y({ types: e, json: { write: true } })], c$2.prototype, "pointSizeAlgorithm", void 0), e$1([y({ type: p$4, json: { write: true } })], c$2.prototype, "colorModulation", void 0), e$1([y({ json: { write: true }, nonNullable: true, type: Number })], c$2.prototype, "pointsPerInch", void 0), c$2 = e$1([n$1("esri.renderers.PointCloudRenderer")], c$2), function(o2) {
  o2.fieldTransformTypeKebabDict = new s$1({ none: "none", lowFourBit: "low-four-bit", highFourBit: "high-four-bit", absoluteValue: "absolute-value", moduloTen: "modulo-ten" });
}(c$2 || (c$2 = {}));
const a$4 = c$2;
var a$3;
let p = a$3 = class extends l$5 {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.minValue = 0, this.maxValue = 0, this.color = null;
  }
  clone() {
    return new a$3({ description: this.description, label: this.label, minValue: this.minValue, maxValue: this.maxValue, color: y$1(this.color) });
  }
};
e$1([y({ type: String, json: { write: true } })], p.prototype, "description", void 0), e$1([y({ type: String, json: { write: true } })], p.prototype, "label", void 0), e$1([y({ type: Number, json: { read: { source: "classMinValue" }, write: { target: "classMinValue" } } })], p.prototype, "minValue", void 0), e$1([y({ type: Number, json: { read: { source: "classMaxValue" }, write: { target: "classMaxValue" } } })], p.prototype, "maxValue", void 0), e$1([y({ type: l$6, json: { type: [T], write: true } })], p.prototype, "color", void 0), p = a$3 = e$1([n$1("esri.renderers.support.pointCloud.ColorClassBreakInfo")], p);
const c$1 = p;
var l$3;
let a$2 = l$3 = class extends a$4 {
  constructor(e2) {
    super(e2), this.type = "point-cloud-class-breaks", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.colorClassBreakInfos = null;
  }
  clone() {
    return new l$3(__spreadProps(__spreadValues({}, this.cloneProperties()), { field: this.field, fieldTransformType: this.fieldTransformType, colorClassBreakInfos: y$1(this.colorClassBreakInfos), legendOptions: y$1(this.legendOptions) }));
  }
};
e$1([r({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks" })], a$2.prototype, "type", void 0), e$1([y({ json: { write: true }, type: String })], a$2.prototype, "field", void 0), e$1([y({ type: p$5, json: { write: true } })], a$2.prototype, "legendOptions", void 0), e$1([y({ type: a$4.fieldTransformTypeKebabDict.apiValues, json: { type: a$4.fieldTransformTypeKebabDict.jsonValues, read: a$4.fieldTransformTypeKebabDict.read, write: a$4.fieldTransformTypeKebabDict.write } })], a$2.prototype, "fieldTransformType", void 0), e$1([y({ type: [c$1], json: { write: true } })], a$2.prototype, "colorClassBreakInfos", void 0), a$2 = l$3 = e$1([n$1("esri.renderers.PointCloudClassBreaksRenderer")], a$2);
const d$1 = a$2;
var l$2;
let d = l$2 = class extends a$4 {
  constructor(e2) {
    super(e2), this.type = "point-cloud-stretch", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.stops = null;
  }
  clone() {
    return new l$2(__spreadProps(__spreadValues({}, this.cloneProperties()), { field: y$1(this.field), fieldTransformType: y$1(this.fieldTransformType), stops: y$1(this.stops), legendOptions: y$1(this.legendOptions) }));
  }
};
e$1([r({ pointCloudStretchRenderer: "point-cloud-stretch" })], d.prototype, "type", void 0), e$1([y({ json: { write: true }, type: String })], d.prototype, "field", void 0), e$1([y({ type: p$5, json: { write: true } })], d.prototype, "legendOptions", void 0), e$1([y({ type: a$4.fieldTransformTypeKebabDict.apiValues, json: { type: a$4.fieldTransformTypeKebabDict.jsonValues, read: a$4.fieldTransformTypeKebabDict.read, write: a$4.fieldTransformTypeKebabDict.write } })], d.prototype, "fieldTransformType", void 0), e$1([y({ type: [a$7], json: { write: true } })], d.prototype, "stops", void 0), d = l$2 = e$1([n$1("esri.renderers.PointCloudStretchRenderer")], d);
const a$1 = d;
var l$1;
let c = l$1 = class extends l$5 {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.values = null, this.color = null;
  }
  clone() {
    return new l$1({ description: this.description, label: this.label, values: y$1(this.values), color: y$1(this.color) });
  }
};
e$1([y({ type: String, json: { write: true } })], c.prototype, "description", void 0), e$1([y({ type: String, json: { write: true } })], c.prototype, "label", void 0), e$1([y({ type: [String], json: { write: true } })], c.prototype, "values", void 0), e$1([y({ type: l$6, json: { type: [T], write: true } })], c.prototype, "color", void 0), c = l$1 = e$1([n$1("esri.renderers.support.pointCloud.ColorUniqueValueInfo")], c);
const n = c;
var l;
let u = l = class extends a$4 {
  constructor(e2) {
    super(e2), this.type = "point-cloud-unique-value", this.field = null, this.fieldTransformType = null, this.colorUniqueValueInfos = null, this.legendOptions = null;
  }
  clone() {
    return new l(__spreadProps(__spreadValues({}, this.cloneProperties()), { field: y$1(this.field), fieldTransformType: y$1(this.fieldTransformType), colorUniqueValueInfos: y$1(this.colorUniqueValueInfos), legendOptions: y$1(this.legendOptions) }));
  }
};
e$1([r({ pointCloudUniqueValueRenderer: "point-cloud-unique-value" })], u.prototype, "type", void 0), e$1([y({ json: { write: true }, type: String })], u.prototype, "field", void 0), e$1([y({ type: a$4.fieldTransformTypeKebabDict.apiValues, json: { type: a$4.fieldTransformTypeKebabDict.jsonValues, read: a$4.fieldTransformTypeKebabDict.read, write: a$4.fieldTransformTypeKebabDict.write } })], u.prototype, "fieldTransformType", void 0), e$1([y({ type: [n], json: { write: true } })], u.prototype, "colorUniqueValueInfos", void 0), e$1([y({ type: p$5, json: { write: true } })], u.prototype, "legendOptions", void 0), u = l = e$1([n$1("esri.renderers.PointCloudUniqueValueRenderer")], u);
const a = u;
export { a, a$1 as b, a$4 as c, d$1 as d };
