import { $ as e, a0 as y, a1 as n, hY as Ze, g as s } from "./index.js";
import "vue";
let i = class extends Ze {
  constructor(e2) {
    super(e2), this.geometryType = "point", this.type = "oriented-imagery", this.operationalLayerType = "OrientedImageryLayer";
  }
  _verifySource() {
    if (super._verifySource(), this.geometryType !== "point")
      throw new s("feature-layer:invalid-geometry-type", "OrientedImageryLayer only supports point geometry type");
  }
};
e([y()], i.prototype, "cameraProperties", void 0), e([y()], i.prototype, "coverage", void 0), e([y()], i.prototype, "coveragePercent", void 0), e([y()], i.prototype, "defaultSearchLocation", void 0), e([y()], i.prototype, "depthImage", void 0), e([y()], i.prototype, "digitalElevationModel", void 0), e([y()], i.prototype, "geometryType", void 0), e([y()], i.prototype, "imageProperties", void 0), e([y()], i.prototype, "maximumDistance", void 0), e([y({ json: { read: false }, value: "oriented-imagery", readOnly: true })], i.prototype, "type", void 0), e([y({ type: ["OrientedImageryLayer"] })], i.prototype, "operationalLayerType", void 0), i = e([n("esri.layers.OrientedImageryLayer")], i);
const a = i;
export { a as default };
