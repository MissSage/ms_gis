import { N as e, O as y, P as n$1 } from "./index.js";
import { e as e$1, j } from "./automaticLengthMeasurementUtils.js";
let r = class extends e$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic", this.distance = j;
  }
};
e([y()], r.prototype, "type", void 0), e([y()], r.prototype, "distance", void 0), r = e([n$1("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")], r);
let p = class extends e$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic-z", this.distance = j;
  }
};
e([y()], p.prototype, "type", void 0), e([y()], p.prototype, "distance", void 0), p = e([n$1("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")], p);
let a = class extends e$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic-xy", this.distance = j;
  }
};
e([y()], a.prototype, "type", void 0), e([y()], a.prototype, "distance", void 0), a = e([n$1("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")], a);
let n = class extends e$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex", this.distance = j, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
e([y()], n.prototype, "type", void 0), e([y()], n.prototype, "distance", void 0), e([y()], n.prototype, "elevation", void 0), e([y()], n.prototype, "area", void 0), e([y()], n.prototype, "totalLength", void 0), n = e([n$1("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")], n);
let l = class extends e$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex-z", this.distance = j, this.elevation = null;
  }
};
e([y()], l.prototype, "type", void 0), e([y()], l.prototype, "distance", void 0), e([y()], l.prototype, "elevation", void 0), l = e([n$1("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")], l);
let c = class extends e$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex-xy", this.distance = j, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
e([y()], c.prototype, "type", void 0), e([y()], c.prototype, "distance", void 0), e([y()], c.prototype, "elevation", void 0), e([y()], c.prototype, "area", void 0), e([y()], c.prototype, "totalLength", void 0), c = e([n$1("esri.views.interactive.tooltip.TranslateVertexXYTooltipInfo")], c);
export { a, c, l, n, p, r };
