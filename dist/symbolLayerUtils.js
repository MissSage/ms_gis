import { ey as e, hF as F, g as s, U, a as r, hG as t, b1 as f$1, dw as a$1, hH as c } from "./index.js";
import "vue";
let a = m();
function m() {
  return new e(50);
}
function y() {
  a = m();
}
function f(e2, o) {
  if (e2.type === "icon")
    return p(e2, o);
  if (e2.type === "object")
    return d(e2, o);
  throw new s("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
}
async function l(e2, o) {
  if (e2.type === "icon")
    return h(e2, o);
  if (e2.type === "object")
    return w(e2, o);
  throw new s("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
}
async function p(e2, o) {
  var _a, _b;
  if ((_a = e2.resource) == null ? void 0 : _a.href)
    return b(e2.resource.href).then((e3) => [e3.width, e3.height]);
  if ((_b = e2.resource) == null ? void 0 : _b.primitive)
    return r(o) ? [o, o] : [256, 256];
  throw new s("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
}
function h(e2, r2) {
  return p(e2, r2).then((r3) => {
    if (e2.size == null)
      return r3;
    const o = r3[0] / r3[1];
    return o > 1 ? [e2.size, e2.size / o] : [e2.size * o, e2.size];
  });
}
function b(r2) {
  return U(r2, { responseType: "image" }).then((e2) => e2.data);
}
function d(e2, r2) {
  return j(e2, r2).then((e3) => F(e3));
}
async function w(e2, r2) {
  const o = await d(e2, r2);
  return t(o, e2);
}
async function j(e2, o) {
  var _a;
  if (!e2.isPrimitive) {
    const r2 = f$1((_a = e2.resource) == null ? void 0 : _a.href), o2 = a.get(r2);
    if (o2 !== void 0)
      return o2;
    const t2 = await import("./objectResourceUtils.js").then(function(n) {
      return n.o;
    }), i2 = await t2.fetch(r2, { disableTextures: true });
    return a.put(r2, i2.referenceBoundingBox), i2.referenceBoundingBox;
  }
  let i = null;
  if (e2.resource && e2.resource.primitive && (i = a$1(c(e2.resource.primitive)), r(o)))
    for (let r2 = 0; r2 < i.length; r2++)
      i[r2] *= o;
  return i ? Promise.resolve(i) : Promise.reject(new s("symbol:invalid-resource", "The symbol does not have a valid resource"));
}
export { y as clearBoundingBoxCache, p as computeIconLayerResourceSize, f as computeLayerResourceSize, l as computeLayerSize, d as computeObjectLayerResourceSize };
