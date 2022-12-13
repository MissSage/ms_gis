import { fY as ie, ez as te, fZ as ae, f_ as fe, f$ as Ie, bA as I, t } from "./index.js";
class l {
  constructor() {
    this.code = null, this.description = null;
  }
}
class u {
  constructor(e) {
    this.error = new l(), this.globalId = null, this.objectId = null, this.success = false, this.uniqueId = null, this.error.description = e;
  }
}
function a(e) {
  return new u(e);
}
class c {
  constructor(e) {
    this.globalId = null, this.success = true, this.objectId = this.uniqueId = e;
  }
}
function f(e) {
  return new c(e);
}
const d = new Set();
function m(e, t2, r, s = false, o) {
  var _a;
  d.clear();
  for (const l2 in r) {
    const u2 = e.get(l2);
    if (!u2)
      continue;
    const c2 = r[l2], f2 = p(u2, c2);
    if (f2 !== c2 && o && o.push({ name: "invalid-value-type", message: "attribute value was converted to match the field type", details: { field: u2, originalValue: c2, sanitizedValue: f2 } }), d.add(u2.name), u2 && (s || u2.editable)) {
      const e2 = fe(u2, f2);
      if (e2)
        return a(Ie(e2, u2, f2));
      t2[u2.name] = f2;
    }
  }
  for (const n of (_a = e == null ? void 0 : e.requiredFields) != null ? _a : [])
    if (!d.has(n.name))
      return a(`missing required field "${n.name}"`);
  return null;
}
function p(e, t2) {
  let n = t2;
  return typeof t2 == "string" && ie(e) ? n = parseFloat(t2) : t2 != null && te(e) && typeof t2 != "string" && (n = String(t2)), ae(n);
}
let h;
function g(n, i) {
  if (!n || !I(i))
    return n;
  if ("rings" in n || "paths" in n) {
    if (t(h))
      throw new TypeError("geometry engine not loaded");
    return h.simplify(i, n);
  }
  return n;
}
async function y() {
  return t(h) && (h = await import("./geometryEngineJSON2.js")), h;
}
async function w(e, n) {
  !I(e) || n !== "esriGeometryPolygon" && n !== "esriGeometryPolyline" || await y();
}
export { a, f, g, m, w };
