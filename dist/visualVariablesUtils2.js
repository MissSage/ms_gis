import { s, g as s$1 } from "./index.js";
import { Q, l as A } from "./Utils2.js";
function l(l2) {
  return Q(l2.minDataValue) && Q(l2.maxDataValue) && l2.minSize != null && l2.maxSize != null ? A.SIZE_MINMAX_VALUE : (l2.expression && l2.expression === "view.scale" || l2.valueExpression && l2.valueExpression === "$view.scale") && Array.isArray(l2.stops) ? A.SIZE_SCALE_STOPS : (l2.field != null || l2.expression && l2.expression !== "view.scale" || l2.valueExpression && l2.valueExpression !== "$view.scale") && (Array.isArray(l2.stops) || "levels" in l2 && l2.levels) ? A.SIZE_FIELD_STOPS : (l2.field != null || l2.expression && l2.expression !== "view.scale" || l2.valueExpression && l2.valueExpression !== "$view.scale") && l2.valueUnit != null ? A.SIZE_UNIT_VALUE : (s.getLogger("esri.views.2d.engine.webgl").error(new s$1("mapview-bad-type", "Found invalid size VisualVariable", l2)), A.NONE);
}
export { l };
