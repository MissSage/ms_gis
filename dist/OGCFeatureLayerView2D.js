import { $ as e, a0 as y, a1 as n } from "./index.js";
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
const o = (o2) => {
  let t2 = class extends o2 {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((e2) => e2.name);
    }
  };
  return e([y()], t2.prototype, "layer", void 0), e([y({ readOnly: true })], t2.prototype, "availableFields", null), t2 = e([n("esri.views.layers.OGCFeatureLayerView")], t2), t2;
};
let t = class extends o(B) {
  supportsSpatialReference(r) {
    return this.layer.serviceSupportsSpatialReference(r);
  }
};
t = e([n("esri.views.2d.layers.OGCFeatureLayerView2D")], t);
const a = t;
export { a as default };
