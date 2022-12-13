import { ck as s } from "./index.js";
const o = new s({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function e(t) {
  return o.toJSON(t);
}
function r(t) {
  const { bandCount: o2, attributeTable: e2, colormap: n, pixelType: r2 } = t.rasterInfo;
  return o2 === 1 && (e2 != null || n != null || r2 === "u8" || r2 === "s8");
}
export { e, r };
