import { e2 as j, aK as k, bz as _n, de as rn } from "./index.js";
async function n(n2) {
  const i2 = n2.spatialReference;
  if (i2.isWGS84)
    return n2.clone();
  if (i2.isWebMercator)
    return j(n2);
  const s2 = k.WGS84;
  return await _n(i2, s2), rn(n2, s2);
}
function i(e, t) {
  if (!s(e, t)) {
    const r = e.typeKeywords;
    r ? r.push(t) : e.typeKeywords = [t];
  }
}
function s(e, t) {
  var _a;
  return !!((_a = e.typeKeywords) == null ? void 0 : _a.includes(t));
}
function c(e, t) {
  const r = e.typeKeywords;
  if (r) {
    const e2 = r.indexOf(t);
    e2 > -1 && r.splice(e2, 1);
  }
}
async function a(e) {
  const t = e.clone().normalize();
  let r;
  if (t.length > 1)
    for (const o of t)
      r ? o.width > r.width && (r = o) : r = o;
  else
    r = t[0];
  return n(r);
}
const f = { DEVELOPER_BASEMAP: "DeveloperBasemap", JSAPI: "ArcGIS API for JavaScript", METADATA: "Metadata", MULTI_LAYER: "Multilayer", SINGLE_LAYER: "Singlelayer", TABLE: "Table" };
export { a, c, f, i, s };
