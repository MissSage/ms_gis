import { c as e, f as y, h as n } from "./index.js";
import { e as e$1, j } from "./automaticLengthMeasurementUtils.js";
let i = class extends e$1 {
  constructor(t) {
    super(t), this.type = "extent-rotate", this.angle = 0;
  }
};
e([y()], i.prototype, "type", void 0), e([y()], i.prototype, "angle", void 0), i = e([n("esri.views.interactive.tooltip.ExtentRotateTooltipInfo")], i);
let p = class extends e$1 {
  constructor(t) {
    super(t), this.type = "extent-scale", this.xScale = 0, this.yScale = 0, this.xSize = j, this.ySize = j;
  }
};
e([y()], p.prototype, "type", void 0), e([y()], p.prototype, "xScale", void 0), e([y()], p.prototype, "yScale", void 0), e([y()], p.prototype, "xSize", void 0), e([y()], p.prototype, "ySize", void 0), p = e([n("esri.views.interactive.tooltip.ExtentScaleTooltipInfo")], p);
export { i, p };
