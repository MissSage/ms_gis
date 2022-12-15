import { fO as w, C as r$1, a4 as $, a2 as t$1 } from "./index.js";
function t(t2, e2) {
  return e2 ? "xoffset" in e2 && e2.xoffset ? Math.max(t2, Math.abs(e2.xoffset)) : "yoffset" in e2 && e2.yoffset ? Math.max(t2, Math.abs(e2.yoffset || 0)) : t2 : t2;
}
function e(t2) {
  let e2 = 0, n2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++) {
    const s2 = t2[r2].size;
    typeof s2 == "number" && (e2 += s2, n2++);
  }
  return e2 / n2;
}
function n(t2, n2) {
  return typeof t2 == "number" ? t2 : t2 && t2.stops && t2.stops.length ? e(t2.stops) : n2;
}
function r(t2, e2) {
  if (!e2)
    return t2;
  const r2 = e2.filter((t3) => t3.type === "size").map((e3) => {
    const { maxSize: r3, minSize: s3 } = e3;
    return (n(r3, t2) + n(s3, t2)) / 2;
  });
  let s2 = 0;
  const o2 = r2.length;
  if (o2 === 0)
    return t2;
  for (let n2 = 0; n2 < o2; n2++)
    s2 += r2[n2];
  const f = Math.floor(s2 / o2);
  return Math.max(f, t2);
}
function s$1(e2) {
  var _a;
  const n2 = e2 && e2.renderer, s2 = (e2 && e2.event && e2.event.pointerType) === "touch" ? 9 : 6;
  if (!n2)
    return s2;
  const o2 = "visualVariables" in n2 ? r(s2, n2.visualVariables) : s2;
  if (n2.type === "simple")
    return t(o2, n2.symbol);
  if (n2.type === "unique-value") {
    let e3 = o2;
    return (_a = n2.uniqueValueInfos) == null ? void 0 : _a.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  if (n2.type === "class-breaks") {
    let e3 = o2;
    return n2.classBreakInfos.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  return n2.type === "dot-density" || n2.type, o2;
}
function a(t2, n2, a2, o2 = new w()) {
  let s2;
  if (a2.type === "2d")
    s2 = n2 * a2.resolution;
  else if (a2.type === "3d") {
    const i = a2.overlayPixelSizeInMapUnits(t2), o3 = a2.basemapSpatialReference;
    s2 = r$1(o3) && !o3.equals(a2.spatialReference) ? $(o3) / $(a2.spatialReference) : n2 * i;
  }
  const m = t2.x - s2, p = t2.y - s2, c = t2.x + s2, l = t2.y + s2, { spatialReference: f } = a2;
  return o2.xmin = Math.min(m, c), o2.ymin = Math.min(p, l), o2.xmax = Math.max(m, c), o2.ymax = Math.max(p, l), o2.spatialReference = f, o2;
}
function o(e2, r2, i) {
  const o2 = i.toMap(e2);
  if (t$1(o2))
    return false;
  return a(o2, s$1(), i, s).intersects(r2);
}
const s = new w();
export { a, o, s$1 as s };
