var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { i } from "./multiOriginJSONSupportUtils.js";
import { hb as kt, jd as d, ir as p$1, je as m, jf as R, jg as t$1, jh as K, ji as U$1, jj as V, jk as s, jl as d$1, i0 as n$1, ha as G, jm as x$1 } from "./index.js";
function t(i2) {
  return o[p(i2)] || e;
}
function p(i2) {
  return i2 instanceof Blob ? i2.type : n(i2.url);
}
function n(t2) {
  const p2 = kt(t2);
  return g$1[p2] || a;
}
const o = {}, a = "text/plain", e = o[a], g$1 = { png: "image/png", jpeg: "image/jpeg", jpg: "image/jpg", bmp: "image/bmp", gif: "image/gif", json: "application/json", txt: "text/plain", xml: "application/xml", svg: "image/svg+xml", zip: "application/zip", pbf: "application/vnd.mapbox-vector-tile", gz: "application/gzip", "bin.gz": "application/octet-stream" };
for (const c in g$1)
  o[g$1[c]] = c;
function g(t2) {
  var _a;
  const r = (_a = t2 == null ? void 0 : t2.origins) != null ? _a : [void 0];
  return (e2, o2) => {
    const s2 = h(t2, e2, o2);
    for (const t3 of r) {
      const r2 = d(e2, t3, o2);
      for (const t4 in s2)
        r2[t4] = s2[t4];
    }
  };
}
function h(t2, r, e2) {
  var _a;
  if ((t2 == null ? void 0 : t2.type) === "resource")
    return v(t2, r, e2);
  switch ((_a = t2 == null ? void 0 : t2.type) != null ? _a : "other") {
    case "other":
      return { read: true, write: true };
    case "url": {
      const { read: t3, write: r2 } = x$1;
      return { read: t3, write: r2 };
    }
  }
}
function v(o2, s$1, n2) {
  const p2 = s(s$1, n2);
  return { type: String, read: (t2, r, e2) => {
    const o3 = p$1(t2, r, e2);
    return p2.type === String ? o3 : typeof p2.type == "function" ? new p2.type({ url: o3 }) : void 0;
  }, write: { writer(s2, i$1, u, c) {
    if (!c || !c.resources)
      return typeof s2 == "string" ? void (i$1[u] = m(s2, c)) : void (i$1[u] = s2.write({}, c));
    const y = x(s2), d2 = m(y, __spreadProps(__spreadValues({}, c), { verifyItemRelativeUrls: c && c.verifyItemRelativeUrls ? { writtenUrls: c.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }), R.NO), g2 = p2.type !== String && (!i(this) || c && c.origin && this.originIdOf(n2) > t$1(c.origin)), h2 = { object: this, propertyName: n2, value: s2, targetUrl: d2, dest: i$1, targetPropertyName: u, context: c, params: o2 };
    c && c.portalItem && d2 && !K(d2) ? g2 ? w(h2) : j(h2) : c && c.portalItem && (d2 == null || U$1(d2) != null || V(d2) || g2) ? U(h2) : i$1[u] = d2;
  } } };
}
function U(t$12) {
  var _a, _b, _c;
  const { targetUrl: r, params: s2, value: i2, context: a2, dest: p2, targetPropertyName: c } = t$12;
  if (!a2.portalItem)
    return;
  const l = d$1(r), m2 = (_a = l == null ? void 0 : l.filename) != null ? _a : n$1(), f = (_b = s2 == null ? void 0 : s2.prefix) != null ? _b : l == null ? void 0 : l.prefix, d2 = N(i2, r, a2), g2 = G(f, m2), h2 = `${g2}.${t(d2)}`, v2 = a2.portalItem.resourceFromPath(h2);
  V(r) && a2.resources && a2.resources.pendingOperations.push(P(r).then((t$13) => {
    v2.path = `${g2}.${t(t$13)}`, p2[c] = v2.itemRelativeUrl;
  }).catch(() => {
  }));
  const U2 = (_c = s2 == null ? void 0 : s2.compress) != null ? _c : false;
  a2.resources && I(__spreadProps(__spreadValues({}, t$12), { resource: v2, content: d2, compress: U2, updates: a2.resources.toAdd })), p2[c] = v2.itemRelativeUrl;
}
function w(t$12) {
  var _a;
  const { context: r, targetUrl: e2, params: o2, value: n2, dest: i2, targetPropertyName: a2 } = t$12;
  if (!r.portalItem)
    return;
  const p2 = r.portalItem.resourceFromPath(e2), c = N(n2, e2, r), l = t(c), m2 = kt(p2.path), f = (_a = o2 == null ? void 0 : o2.compress) != null ? _a : false;
  l === m2 ? (r.resources && I(__spreadProps(__spreadValues({}, t$12), { resource: p2, content: c, compress: f, updates: r.resources.toUpdate })), i2[a2] = e2) : U(t$12);
}
function j({ context: t2, targetUrl: r, dest: e2, targetPropertyName: o2 }) {
  t2.portalItem && t2.resources && (t2.resources.toKeep.push({ resource: t2.portalItem.resourceFromPath(r), compress: false }), e2[o2] = r);
}
function I({ object: t2, propertyName: r, updates: e2, resource: o2, content: s2, compress: n2 }) {
  e2.push({ resource: o2, content: s2, compress: n2, finish: (e3) => {
    O(t2, r, e3);
  } });
}
function N(t2, r, e2) {
  return typeof t2 == "string" ? { url: r } : new Blob([JSON.stringify(t2.toJSON(e2))], { type: "application/json" });
}
async function P(t2) {
  const r = (await import("./index.js").then(function(n2) {
    return n2.k$;
  })).default, { data: e2 } = await r(t2, { responseType: "blob" });
  return e2;
}
function x(t2) {
  return t2 == null ? null : typeof t2 == "string" ? t2 : t2.url;
}
function O(t2, r, e2) {
  typeof t2[r] == "string" ? t2[r] = e2.url : t2[r].url = e2.url;
}
export { g };
