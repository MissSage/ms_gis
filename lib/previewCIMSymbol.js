import { gX as e, o$ as t, p6 as G, fK as u$1, p4 as h$1 } from "./index.js";
import { i as ie, b as oe } from "./cimAnalyzer.js";
import { CIMSymbolRasterizer as z, GeometryStyle as M } from "./CIMSymbolRasterizer.js";
import "vue";
import "./fontUtils.js";
import "./BidiEngine.js";
import "./alignmentUtils.js";
import "./definitions.js";
import "./number.js";
import "./Rect.js";
import "./callExpressionWithFeature.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./Rasterizer.js";
import "./_commonjsHelpers.js";
import "./imageutils2.js";
import "./rasterizingUtils.js";
const h = new z(null, true), m = e(t.size), c = e(t.maxSize), u = e(t.lineWidth), f = 1;
function y(e2) {
  const t2 = e2 == null ? void 0 : e2.size;
  if (typeof t2 == "number")
    return { width: t2, height: t2 };
  return { width: t2 != null && typeof t2 == "object" && "width" in t2 ? t2.width : null, height: t2 != null && typeof t2 == "object" && "height" in t2 ? t2.height : null };
}
async function d(e2, n = {}) {
  var _a;
  const { node: s, opacity: d2, symbolConfig: p } = n, g = typeof p == "object" && "isSquareFill" in p && p.isSquareFill, w = n.cimOptions || n, b = w.geometryType || G((_a = e2 == null ? void 0 : e2.data) == null ? void 0 : _a.symbol), M$1 = y(n), { feature: j, fieldMap: v } = w;
  if (M$1.width == null || M$1.height == null) {
    const t2 = await ie.resolveSymbolOverrides(e2.data, j, null, v, b);
    if (!t2)
      return null;
    (e2 = e2.clone()).data = { type: "CIMSymbolReference", symbol: t2 }, e2.data.primitiveOverrides = null;
    const n2 = [];
    oe.fetchResources(t2, h.resourceManager, n2), n2.length > 0 && await Promise.all(n2);
    const { width: o, height: r } = oe.getEnvelope(t2, null, h.resourceManager);
    M$1.width = b === "esriGeometryPolygon" ? m : b === "esriGeometryPolyline" ? u : o != null && isFinite(o) ? Math.min(o, c) : m, M$1.height = b === "esriGeometryPolygon" ? m : r != null && isFinite(r) ? Math.max(Math.min(r, c), f) : m;
  }
  const S = await h.rasterizeCIMSymbolAsync(e2, j, M$1, g || b !== "esriGeometryPolygon" ? M.Preview : M.Legend, v, b);
  if (!S)
    return null;
  const { width: C, height: I } = S, P = document.createElement("canvas");
  P.width = C, P.height = I;
  P.getContext("2d").putImageData(S, 0, 0);
  const x = u$1(M$1.width), z2 = u$1(M$1.height), F = new Image(x, z2);
  F.src = P.toDataURL(), d2 != null && (F.style.opacity = `${d2}`);
  let G$1 = F;
  if (n.effectView != null) {
    const e3 = { shape: { type: "image", x: 0, y: 0, width: x, height: z2, src: F.src }, fill: null, stroke: null, offset: [0, 0] };
    G$1 = h$1([[e3]], [x, z2], { effectView: n.effectView });
  }
  return s && G$1 && s.appendChild(G$1), G$1;
}
export { d as previewCIMSymbol };
