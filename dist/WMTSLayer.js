var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { kn as O$1, $ as e, a0 as y$1, cr as w$1, d3 as j, a1 as n$1, co as l$2, cD as o$1, cx as j$1, ko as r, kp as s, g as s$1, a as r$1, a7 as w$2, i2 as n$2, i4 as p$4, i3 as t, h2 as c$1, h3 as v$1, h4 as O$2, e0 as b$1, R as l$3, d8 as U$1, cA as a, aL as w$3, hz as t$1, U as U$2, aX as y$2, bO as j$2, ds as I$1, dD as r$2 } from "./index.js";
import { p as p$5, x as x$1 } from "./WebTileLayer.js";
import { o as o$3 } from "./crsUtils.js";
import { o as o$2 } from "./xmlUtils.js";
import "vue";
class l$1 {
  constructor(i2, l2 = 0, a2 = i2.lods.length - 1) {
    this.tileInfo = i2, this.minLOD = l2, this.maxLOD = a2;
  }
  getAvailability(i2, l2, a2) {
    var _a;
    const t2 = (_a = this.tileInfo) == null ? void 0 : _a.lodAt(i2);
    return !t2 || i2 < this.minLOD || i2 > this.maxLOD ? "unavailable" : t2.cols && t2.rows ? a2 >= t2.cols[0] && a2 <= t2.cols[1] && l2 >= t2.rows[0] && l2 <= t2.rows[1] ? "available" : "unavailable" : "available";
  }
  async fetchAvailability(l2, a2, t2, e2) {
    return await O$1(e2), this.getAvailability(l2, a2, t2);
  }
  async fetchAvailabilityUpsample(l2, a2, t2, e2, s2) {
    await O$1(s2), e2.level = l2, e2.row = a2, e2.col = t2;
    const o2 = this.tileInfo;
    for (o2.updateTileInfo(e2); ; ) {
      const i2 = this.getAvailability(e2.level, e2.row, e2.col);
      if (i2 !== "unavailable")
        return i2;
      if (!o2.upsampleTile(e2))
        return "unavailable";
    }
  }
}
var l;
let n = l = class extends l$2 {
  constructor(t2) {
    super(t2), this.fullExtent = null, this.id = null, this.tileInfo = null;
  }
  clone() {
    const t2 = new l();
    return this.hasOwnProperty("fullExtent") && (t2.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (t2.id = this.id), this.hasOwnProperty("tileInfo") && (t2.tileInfo = this.tileInfo && this.tileInfo.clone()), t2;
  }
};
e([y$1({ type: w$1, json: { read: { source: "fullExtent" } } })], n.prototype, "fullExtent", void 0), e([y$1({ type: String, json: { read: { source: "id" } } })], n.prototype, "id", void 0), e([y$1({ type: j, json: { read: { source: "tileInfo" } } })], n.prototype, "tileInfo", void 0), n = l = e([n$1("esri.layer.support.TileMatrixSet")], n);
const p$3 = n;
var o;
let i = o = class extends l$2 {
  constructor(r2) {
    super(r2), this.id = null, this.title = null, this.description = null, this.legendUrl = null;
  }
  clone() {
    const r2 = new o();
    return this.hasOwnProperty("description") && (r2.description = this.description), this.hasOwnProperty("id") && (r2.id = this.id), this.hasOwnProperty("isDefault") && (r2.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (r2.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (r2.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (r2.title = this.title), r2;
  }
};
e([y$1({ json: { read: { source: "id" } } })], i.prototype, "id", void 0), e([y$1({ json: { read: { source: "title" } } })], i.prototype, "title", void 0), e([y$1({ json: { read: { source: "abstract" } } })], i.prototype, "description", void 0), e([y$1({ json: { read: { source: "legendUrl" } } })], i.prototype, "legendUrl", void 0), e([y$1({ json: { read: { source: "isDefault" } } })], i.prototype, "isDefault", void 0), e([y$1({ json: { read: { source: "keywords" } } })], i.prototype, "keywords", void 0), i = o = e([n$1("esri.layer.support.WMTSStyle")], i);
const p$2 = i;
var p$1;
let m$1 = p$1 = class extends l$2 {
  constructor(t2) {
    super(t2), this.fullExtent = null, this.fullExtents = null, this.imageFormats = null, this.id = null, this.layer = null, this.styles = null, this.tileMatrixSetId = null, this.tileMatrixSets = null;
  }
  get description() {
    return this._get("description");
  }
  set description(t2) {
    this._set("description", t2);
  }
  readFullExtent(t2, e2) {
    return (t2 = e2.fullExtent) ? w$1.fromJSON(t2) : null;
  }
  readFullExtents(t2, e2) {
    var _a, _b, _c;
    return ((_a = e2.fullExtents) == null ? void 0 : _a.length) ? e2.fullExtents.map((t3) => w$1.fromJSON(t3)) : (_c = (_b = e2.tileMatrixSets) == null ? void 0 : _b.map((t3) => w$1.fromJSON(t3.fullExtent)).filter((t3) => t3)) != null ? _c : [];
  }
  get imageFormat() {
    let t2 = this._get("imageFormat");
    return t2 || (t2 = this.imageFormats && this.imageFormats.length ? this.imageFormats[0] : ""), t2;
  }
  set imageFormat(t2) {
    const e2 = this.imageFormats;
    t2 && (t2.includes("image/") || e2 && !e2.includes(t2)) && (t2.includes("image/") || (t2 = "image/" + t2), e2 && !e2.includes(t2)) ? console.error("The layer doesn't support the format of " + t2) : this._set("imageFormat", t2);
  }
  get styleId() {
    var _a;
    let t2 = this._get("styleId");
    return t2 || (t2 = ((_a = this.styles) == null ? void 0 : _a.length) ? this.styles.getItemAt(0).id : ""), t2;
  }
  set styleId(t2) {
    this._set("styleId", t2);
  }
  get title() {
    return this._get("title");
  }
  set title(t2) {
    this._set("title", t2);
  }
  get tileMatrixSet() {
    return this.tileMatrixSets ? this.tileMatrixSets.find((t2) => t2.id === this.tileMatrixSetId) : null;
  }
  clone() {
    var _a;
    const t2 = new p$1();
    return this.hasOwnProperty("description") && (t2.description = this.description), this.hasOwnProperty("imageFormats") && (t2.imageFormats = this.imageFormats && this.imageFormats.slice()), this.hasOwnProperty("imageFormat") && (t2.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (t2.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (t2.id = this.id), this.hasOwnProperty("layer") && (t2.layer = this.layer), this.hasOwnProperty("styleId") && (t2.styleId = this.styleId), this.hasOwnProperty("styles") && (t2.styles = this.styles && this.styles.clone()), this.hasOwnProperty("tileMatrixSetId") && (t2.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (t2.tileMatrixSets = (_a = this.tileMatrixSets) == null ? void 0 : _a.clone()), this.hasOwnProperty("title") && (t2.title = this.title), t2;
  }
};
e([y$1()], m$1.prototype, "description", null), e([y$1()], m$1.prototype, "fullExtent", void 0), e([o$1("fullExtent", ["fullExtent"])], m$1.prototype, "readFullExtent", null), e([y$1({ readOnly: true })], m$1.prototype, "fullExtents", void 0), e([o$1("fullExtents", ["fullExtents", "tileMatrixSets"])], m$1.prototype, "readFullExtents", null), e([y$1()], m$1.prototype, "imageFormat", null), e([y$1({ json: { read: { source: "formats" } } })], m$1.prototype, "imageFormats", void 0), e([y$1()], m$1.prototype, "id", void 0), e([y$1()], m$1.prototype, "layer", void 0), e([y$1()], m$1.prototype, "styleId", null), e([y$1({ type: j$1.ofType(p$2), json: { read: { source: "styles" } } })], m$1.prototype, "styles", void 0), e([y$1({ value: null, json: { write: { ignoreOrigin: true } } })], m$1.prototype, "title", null), e([y$1()], m$1.prototype, "tileMatrixSetId", void 0), e([y$1({ readOnly: true })], m$1.prototype, "tileMatrixSet", null), e([y$1({ type: j$1.ofType(p$3), json: { read: { source: "tileMatrixSets" } } })], m$1.prototype, "tileMatrixSets", void 0), m$1 = p$1 = e([n$1("esri.layers.support.WMTSSublayer")], m$1);
const u$1 = m$1;
const c = 90.71428571428571;
function u(t2) {
  const n2 = t2.replace(/ows:/gi, "");
  if (!m("Contents", new DOMParser().parseFromString(n2, "text/xml").documentElement))
    throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid", "the wmts get capabilities response is not compliant", { text: t2 });
}
function p(t2, n2) {
  var _a, _b;
  t2 = t2.replace(/ows:/gi, "");
  const i2 = new DOMParser().parseFromString(t2, "text/xml").documentElement, r2 = new Map(), o2 = new Map(), l2 = m("Contents", i2);
  if (!l2)
    throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid");
  const s2 = (_a = m("OperationsMetadata", i2)) == null ? void 0 : _a.querySelector("[name='GetTile']"), a2 = s2 == null ? void 0 : s2.getElementsByTagName("Get"), c2 = a2 && Array.prototype.slice.call(a2), u2 = (_b = n2.url) == null ? void 0 : _b.indexOf("https"), p2 = u2 !== void 0 && u2 > -1;
  let f2, d2, x2 = n2.serviceMode, M2 = n2 == null ? void 0 : n2.url;
  if (c2 && c2.length && c2.some((e2) => {
    const t3 = m("Constraint", e2);
    return !t3 || w("AllowedValues", "Value", x2, t3) ? (M2 = e2.attributes[0].nodeValue, true) : (!t3 || w("AllowedValues", "Value", "RESTful", t3) || w("AllowedValues", "Value", "REST", t3) ? d2 = e2.attributes[0].nodeValue : t3 && !w("AllowedValues", "Value", "KVP", t3) || (f2 = e2.attributes[0].nodeValue), false);
  }), !M2)
    if (d2)
      M2 = d2, x2 = "RESTful";
    else if (f2)
      M2 = f2, x2 = "KVP";
    else {
      const e2 = m("ServiceMetadataURL", i2);
      M2 = e2 == null ? void 0 : e2.getAttribute("xlink:href");
    }
  const T2 = M2.indexOf("1.0.0/");
  T2 === -1 && x2 === "RESTful" ? M2 += "/" : T2 > -1 && (M2 = M2.substring(0, T2)), x2 === "KVP" && (M2 += T2 > -1 ? "" : "?"), p2 && (M2 = M2.replace(/^http:/i, "https:"));
  const y2 = h("ServiceIdentification>ServiceTypeVersion", i2), R2 = h("ServiceIdentification>AccessConstraints", i2), S2 = R2 && /^none$/i.test(R2) ? null : R2, V2 = g("Layer", l2), b2 = g("TileMatrixSet", l2), E2 = V2.map((e2) => {
    const t3 = h("Identifier", e2);
    return r2.set(t3, e2), C(t3, e2, b2, p2, y2);
  });
  return { copyright: S2, dimensionMap: o2, layerMap: r2, layers: E2, serviceMode: x2, tileUrl: M2 };
}
function f(e2) {
  return e2.layers.forEach((e3) => {
    var _a;
    (_a = e3.tileMatrixSets) == null ? void 0 : _a.forEach((e4) => {
      var _a2;
      const t2 = e4.tileInfo;
      t2 && t2.dpi !== 96 && ((_a2 = t2.lods) == null ? void 0 : _a2.forEach((n2) => {
        var _a3;
        n2.scale = 96 * n2.scale / t2.dpi, n2.resolution = U((_a3 = t2.spatialReference) == null ? void 0 : _a3.wkid, n2.scale * c / 96, e4.id);
      }), t2.dpi = 96);
    });
  }), e2;
}
function d(e2) {
  return e2.nodeType === Node.ELEMENT_NODE;
}
function m(e2, t2) {
  for (let n2 = 0; n2 < t2.childNodes.length; n2++) {
    const i2 = t2.childNodes[n2];
    if (d(i2) && i2.nodeName === e2)
      return i2;
  }
  return null;
}
function g(e2, t2) {
  const n2 = [];
  for (let i2 = 0; i2 < t2.childNodes.length; i2++) {
    const r2 = t2.childNodes[i2];
    d(r2) && r2.nodeName === e2 && n2.push(r2);
  }
  return n2;
}
function x(e2, n2) {
  const i2 = [];
  for (let t2 = 0; t2 < n2.childNodes.length; t2++) {
    const r2 = n2.childNodes[t2];
    d(r2) && r2.nodeName === e2 && i2.push(r2);
  }
  return i2.map((e3) => e3.textContent).filter(r$1);
}
function h(e2, t2) {
  return e2.split(">").forEach((e3) => {
    t2 && (t2 = m(e3, t2));
  }), t2 && t2.textContent;
}
function w(e2, t2, n2, i2) {
  let r2;
  return Array.prototype.slice.call(i2.childNodes).some((i3) => {
    if (i3.nodeName.includes(e2)) {
      const e3 = m(t2, i3), o2 = e3 && e3.textContent;
      if (o2 === n2 || n2.split(":") && n2.split(":")[1] === o2)
        return r2 = i3, true;
    }
    return false;
  }), r2;
}
function C(e2, t2, n2, i2, r2) {
  const o2 = h("Abstract", t2), l2 = x("Format", t2);
  return { id: e2, fullExtent: S(t2), fullExtents: V$1(t2), description: o2, formats: l2, styles: b(t2, i2), title: h("Title", t2), tileMatrixSets: E(r2, t2, n2) };
}
function M(e2, t2) {
  var _a;
  const n2 = [], i2 = (_a = e2.layerMap) == null ? void 0 : _a.get(t2);
  if (!i2)
    return null;
  const r2 = g("ResourceURL", i2), o2 = g("Dimension", i2);
  let l2, s2, a2, c2;
  return o2.length && (l2 = h("Identifier", o2[0]), s2 = x("Default", o2[0]) || x("Value", o2[0])), o2.length > 1 && (a2 = h("Identifier", o2[1]), c2 = x("Default", o2[1]) || x("Value", o2[1])), e2.dimensionMap.set(t2, { dimensions: s2, dimensions2: c2 }), r2.forEach((e3) => {
    let t3 = e3.getAttribute("template");
    if (e3.getAttribute("resourceType") === "tile") {
      if (l2 && s2.length)
        if (t3.includes("{" + l2 + "}"))
          t3 = t3.replace("{" + l2 + "}", "{dimensionValue}");
        else {
          const e4 = t3.toLowerCase().indexOf("{" + l2.toLowerCase() + "}");
          e4 > -1 && (t3 = t3.substring(0, e4) + "{dimensionValue}" + t3.substring(e4 + l2.length + 2));
        }
      if (a2 && c2.length)
        if (t3.includes("{" + a2 + "}"))
          t3 = t3.replace("{" + a2 + "}", "{dimensionValue2}");
        else {
          const e4 = t3.toLowerCase().indexOf("{" + a2.toLowerCase() + "}");
          e4 > -1 && (t3 = t3.substring(0, e4) + "{dimensionValue2}" + t3.substring(e4 + a2.length + 2));
        }
      n2.push({ template: t3, format: e3.getAttribute("format"), resourceType: "tile" });
    }
  }), n2;
}
function T(e2, t2, n2, i2, r2, o2, l2, s2) {
  var _a, _b;
  const a2 = y(e2, t2, i2);
  if (!((a2 == null ? void 0 : a2.length) > 0))
    return "";
  const { dimensionMap: c2 } = e2, u2 = (_a = c2.get(t2).dimensions) == null ? void 0 : _a[0], p2 = (_b = c2.get(t2).dimensions2) == null ? void 0 : _b[0];
  return a2[l2 % a2.length].template.replace(/\{Style\}/gi, r2 != null ? r2 : "").replace(/\{TileMatrixSet\}/gi, n2 != null ? n2 : "").replace(/\{TileMatrix\}/gi, o2).replace(/\{TileRow\}/gi, "" + l2).replace(/\{TileCol\}/gi, "" + s2).replace(/\{dimensionValue\}/gi, u2).replace(/\{dimensionValue2\}/gi, p2);
}
function y(e2, t2, n2) {
  var _a;
  const i2 = M(e2, t2), r2 = i2 == null ? void 0 : i2.filter((e3) => e3.format === n2);
  return (_a = (r2 == null ? void 0 : r2.length) ? r2 : i2) != null ? _a : [];
}
function R(e2, t2, n2, i2) {
  const { dimensionMap: r2 } = e2, o2 = M(e2, t2);
  let l2 = "";
  if (o2 && o2.length > 0) {
    const e3 = r2.get(t2).dimensions && r2.get(t2).dimensions[0], s2 = r2.get(t2).dimensions2 && r2.get(t2).dimensions2[0];
    l2 = o2[0].template, l2.indexOf(".xxx") === l2.length - 4 && (l2 = l2.slice(0, l2.length - 4)), l2 = l2.replace(/\{Style\}/gi, i2), l2 = l2.replace(/\{TileMatrixSet\}/gi, n2), l2 = l2.replace(/\{TileMatrix\}/gi, "{level}"), l2 = l2.replace(/\{TileRow\}/gi, "{row}"), l2 = l2.replace(/\{TileCol\}/gi, "{col}"), l2 = l2.replace(/\{dimensionValue\}/gi, e3), l2 = l2.replace(/\{dimensionValue2\}/gi, s2);
  }
  return l2;
}
function S(e2) {
  const t2 = m("WGS84BoundingBox", e2), n2 = t2 ? h("LowerCorner", t2).split(" ") : ["-180", "-90"], i2 = t2 ? h("UpperCorner", t2).split(" ") : ["180", "90"];
  return { xmin: parseFloat(n2[0]), ymin: parseFloat(n2[1]), xmax: parseFloat(i2[0]), ymax: parseFloat(i2[1]), spatialReference: { wkid: 4326 } };
}
function V$1(e2) {
  const t2 = [];
  return o$2(e2, { BoundingBox: (e3) => {
    if (!e3.getAttribute("crs"))
      return;
    const n2 = e3.getAttribute("crs").toLowerCase(), i2 = I(n2), r2 = n2.includes("epsg") && o$3(i2.wkid);
    let o2, a2, c2, u2;
    o$2(e3, { LowerCorner: (e4) => {
      [o2, a2] = e4.textContent.split(" ").map((e5) => Number.parseFloat(e5)), r2 && ([o2, a2] = [a2, o2]);
    }, UpperCorner: (e4) => {
      [c2, u2] = e4.textContent.split(" ").map((e5) => Number.parseFloat(e5)), r2 && ([c2, u2] = [u2, c2]);
    } }), t2.push({ xmin: o2, ymin: a2, xmax: c2, ymax: u2, spatialReference: i2 });
  } }), t2;
}
function b(e2, t2) {
  return g("Style", e2).map((e3) => {
    const n2 = m("LegendURL", e3), i2 = m("Keywords", e3), r2 = i2 ? x("Keyword", i2) : [];
    let o2 = n2 && n2.getAttribute("xlink:href");
    t2 && (o2 = o2 && o2.replace(/^http:/i, "https:"));
    return { abstract: h("Abstract", e3), id: h("Identifier", e3), isDefault: e3.getAttribute("isDefault") === "true", keywords: r2, legendUrl: o2, title: h("Title", e3) };
  });
}
function E(e2, t2, n2) {
  return g("TileMatrixSetLink", t2).map((t3) => L(e2, t3, n2));
}
function L(e2, t2, n2) {
  const i2 = m("TileMatrixSet", t2).textContent, r2 = x("TileMatrix", t2), o2 = n2.find((e3) => {
    const t3 = m("Identifier", e3), n3 = t3 && t3.textContent;
    return !!(n3 === i2 || i2.split(":") && i2.split(":")[1] === n3);
  }), l2 = m("TileMatrixSetLimits", t2), s2 = l2 && g("TileMatrixLimits", l2), c2 = new Map();
  if (s2 == null ? void 0 : s2.length)
    for (const a2 of s2) {
      const e3 = m("TileMatrix", a2).textContent, t3 = +m("MinTileRow", a2).textContent, n3 = +m("MaxTileRow", a2).textContent, i3 = +m("MinTileCol", a2).textContent, r3 = +m("MaxTileCol", a2).textContent;
      c2.set(e3, { minCol: i3, maxCol: r3, minRow: t3, maxRow: n3 });
    }
  const u2 = h("SupportedCRS", o2).toLowerCase(), p2 = N(o2, u2), f2 = p2.spatialReference, d2 = m("TileMatrix", o2), C2 = [parseInt(h("TileWidth", d2), 10), parseInt(h("TileHeight", d2), 10)], M2 = [];
  if (r2.length)
    r2.forEach((e3, t3) => {
      const n3 = w("TileMatrix", "Identifier", e3, o2);
      M2.push(D(n3, u2, t3, i2, c2));
    });
  else {
    g("TileMatrix", o2).forEach((e3, t3) => {
      M2.push(D(e3, u2, t3, i2, c2));
    });
  }
  const T2 = v(e2, o2, p2, C2, M2[0]).toJSON(), y2 = new j({ dpi: 96, spatialReference: f2, size: C2, origin: p2, lods: M2 }).toJSON();
  return { id: i2, fullExtent: T2, tileInfo: y2 };
}
function I(e2) {
  e2 = e2.toLowerCase();
  let n2 = parseInt(e2.split(":").pop(), 10);
  n2 !== 900913 && n2 !== 3857 || (n2 = 102100);
  const i2 = k(e2);
  return r$1(i2) && (n2 = i2), { wkid: n2 };
}
function N(e2, t2) {
  return A$1(m("TileMatrix", e2), t2);
}
function A$1(e2, t2) {
  const n2 = I(t2), [r2, o2] = h("TopLeftCorner", e2).split(" ").map((e3) => parseFloat(e3)), s2 = t2.includes("epsg") && o$3(n2.wkid);
  return new w$2(s2 ? { x: o2, y: r2, spatialReference: n2 } : { x: r2, y: o2, spatialReference: n2 });
}
function v(e2, t2, i2, r2, o2) {
  const l2 = m("BoundingBox", t2);
  let s2, a2, c2, u2, p2, f2;
  if (l2 && (s2 = h("LowerCorner", l2).split(" "), a2 = h("UpperCorner", l2).split(" ")), s2 && s2.length > 1 && a2 && a2.length > 1)
    c2 = parseFloat(s2[0]), p2 = parseFloat(s2[1]), u2 = parseFloat(a2[0]), f2 = parseFloat(a2[1]);
  else {
    const e3 = m("TileMatrix", t2), n2 = parseInt(h("MatrixWidth", e3), 10), l3 = parseInt(h("MatrixHeight", e3), 10);
    c2 = i2.x, f2 = i2.y, u2 = c2 + n2 * r2[0] * o2.resolution, p2 = f2 - l3 * r2[1] * o2.resolution;
  }
  return F$1(e2, i2.spatialReference, i2) ? new w$1(p2, c2, f2, u2, i2.spatialReference) : new w$1(c2, p2, u2, f2, i2.spatialReference);
}
function F$1(e2, t2, n2) {
  return e2 === "1.0.0" && o$3(t2.wkid) && !(n2.spatialReference.isGeographic && n2.x < -90 && n2.y >= -90);
}
var O;
function k(e2) {
  return e2.includes("crs84") || e2.includes("crs:84") ? O.CRS84 : e2.includes("crs83") || e2.includes("crs:83") ? O.CRS83 : e2.includes("crs27") || e2.includes("crs:27") ? O.CRS27 : null;
}
function D(e2, t2, n2, i2, r2) {
  var _a;
  const o2 = I(t2), l2 = h("Identifier", e2);
  let s2 = parseFloat(h("ScaleDenominator", e2));
  const a2 = U(o2.wkid, s2, i2);
  s2 *= 96 / c;
  const u2 = +h("MatrixWidth", e2), p2 = +h("MatrixHeight", e2), { maxCol: f2 = u2 - 1, maxRow: d2 = p2 - 1, minCol: m2 = 0, minRow: g2 = 0 } = (_a = r2.get(l2)) != null ? _a : {}, { x: x2, y: w2 } = A$1(e2, t2);
  return { cols: [m2, f2], level: n2, levelValue: l2, origin: [x2, w2], scale: s2, resolution: a2, rows: [g2, d2] };
}
function U(e2, t2, n2) {
  let i2;
  return i2 = r.hasOwnProperty("" + e2) ? r.values[r[e2]] : n2 === "default028mm" ? 6370997 * Math.PI / 180 : s(e2).metersPerDegree, 7 * t2 / 25e3 / i2;
}
!function(e2) {
  e2[e2.CRS84 = 4326] = "CRS84", e2[e2.CRS83 = 4269] = "CRS83", e2[e2.CRS27 = 4267] = "CRS27";
}(O || (O = {}));
const W = { "image/png": ".png", "image/png8": ".png", "image/png24": ".png", "image/png32": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "image/gif": ".gif", "image/bmp": ".bmp", "image/tiff": ".tif", "image/jpgpng": "", "image/jpegpng": "", "image/unknown": "" }, A = new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);
let F = class extends n$2(p$4(t(c$1(v$1(O$2(b$1)))))) {
  constructor(...e2) {
    super(...e2), this.copyright = "", this.customParameters = null, this.customLayerParameters = null, this.fullExtent = null, this.operationalLayerType = "WebTiledLayer", this.resourceInfo = null, this.serviceMode = "RESTful", this.sublayers = null, this.type = "wmts", this.version = "1.0.0", this.addHandles([l$3(() => this.activeLayer, (e3, t2) => {
      t2 && (t2.layer = null), e3 && (e3.layer = this);
    }, U$1), a(() => this.sublayers, "after-add", ({ item: e3 }) => {
      e3.layer = this;
    }, U$1), a(() => this.sublayers, "after-remove", ({ item: e3 }) => {
      e3.layer = null;
    }, U$1), l$3(() => this.sublayers, (e3, t2) => {
      if (t2)
        for (const r2 of t2)
          r2.layer = null;
      if (e3)
        for (const r2 of e3)
          r2.layer = this;
    }, U$1)]);
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  load(e2) {
    if (this.serviceMode === "KVP" || this.serviceMode === "RESTful")
      return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMTS"] }, e2).catch(w$3).then(() => this._fetchService(e2)).catch((e3) => {
        throw w$3(e3), new s$1("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", { error: e3 });
      })), Promise.resolve(this);
    console.error("WMTS mode could only be 'KVP' or 'RESTful'");
  }
  get activeLayer() {
    return this._get("activeLayer");
  }
  set activeLayer(e2) {
    this._set("activeLayer", e2);
  }
  readActiveLayerFromService(e2, t2, r2) {
    this.activeLayer || (this.activeLayer = new u$1());
    let i2 = t2.layers.find((e3) => e3.id === this.activeLayer.id);
    return i2 || (i2 = t2.layers[0]), this.activeLayer.read(i2, r2), this.activeLayer;
  }
  readActiveLayerFromItemOrWebDoc(e2, t2) {
    const { templateUrl: r2, wmtsInfo: i2 } = t2, s2 = r2 ? this._getLowerCasedUrlParams(r2) : null, a2 = i2 == null ? void 0 : i2.layerIdentifier;
    let o2 = null;
    const l2 = i2 == null ? void 0 : i2.tileMatrixSet;
    l2 && (Array.isArray(l2) ? l2.length && (o2 = l2[0]) : o2 = l2);
    const n2 = s2 == null ? void 0 : s2.format, m2 = s2 == null ? void 0 : s2.style;
    return new u$1({ id: a2, imageFormat: n2, styleId: m2, tileMatrixSetId: o2 });
  }
  writeActiveLayer(e2, t2, r2, i2) {
    const s2 = this.activeLayer;
    t2.templateUrl = this.getUrlTemplate(s2.id, s2.tileMatrixSetId, s2.imageFormat, s2.styleId);
    const a2 = t$1("tileMatrixSet.tileInfo", s2);
    t2.tileInfo = a2 ? a2.toJSON(i2) : null, t2.wmtsInfo = __spreadProps(__spreadValues({}, t2.wmtsInfo), { layerIdentifier: s2.id, tileMatrixSet: s2.tileMatrixSetId });
  }
  readCustomParameters(e2, t2) {
    const r2 = t2.wmtsInfo;
    return r2 ? this._mergeParams(r2.customParameters, r2.url) : null;
  }
  get fullExtents() {
    return this.activeLayer.fullExtents;
  }
  readServiceMode(e2, t2) {
    return t2.templateUrl.includes("?") ? "KVP" : "RESTful";
  }
  readSublayersFromService(e2, t2, r2) {
    return V(t2.layers, r2);
  }
  get supportedSpatialReferences() {
    var _a, _b;
    return (_b = (_a = this.activeLayer.tileMatrixSets) == null ? void 0 : _a.map((e2) => {
      var _a2;
      return (_a2 = e2.tileInfo) == null ? void 0 : _a2.spatialReference;
    }).toArray().filter(r$1)) != null ? _b : [];
  }
  get tilemapCache() {
    var _a, _b;
    const e2 = (_b = (_a = this.activeLayer) == null ? void 0 : _a.tileMatrixSet) == null ? void 0 : _b.tileInfo;
    return e2 ? new l$1(e2) : void 0;
  }
  get title() {
    var _a, _b;
    return (_b = (_a = this.activeLayer) == null ? void 0 : _a.title) != null ? _b : "Layer";
  }
  set title(e2) {
    this._overrideIfSome("title", e2);
  }
  get url() {
    return this._get("url");
  }
  set url(e2) {
    e2 && e2.substr(-1) === "/" ? this._set("url", e2.slice(0, -1)) : this._set("url", e2);
  }
  createWebTileLayer(e2) {
    var _a;
    const t2 = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId), r2 = (_a = this._getTileMatrixSetById(e2.tileMatrixSetId)) == null ? void 0 : _a.tileInfo, i2 = e2.fullExtent, s2 = new p$5({ layerIdentifier: e2.id, tileMatrixSet: e2.tileMatrixSetId, url: this.url });
    return this.customLayerParameters && (s2.customLayerParameters = this.customLayerParameters), this.customParameters && (s2.customParameters = this.customParameters), new x$1({ fullExtent: i2, urlTemplate: t2, tileInfo: r2, wmtsInfo: s2 });
  }
  fetchTile(e2, r2, i2) {
    const s2 = this.getTileUrl(e2, r2, i2);
    return U$2(s2, { responseType: "image" }).then((e3) => e3.data);
  }
  async fetchImageBitmapTile(e2, r2, i2) {
    const s2 = this.getTileUrl(e2, r2, i2), { data: a2 } = await U$2(s2, { responseType: "blob" });
    return createImageBitmap(a2);
  }
  findSublayerById(e2) {
    var _a;
    return (_a = this.sublayers) == null ? void 0 : _a.find((t2) => t2.id === e2);
  }
  getTileUrl(e2, t2, r2) {
    var _a, _b;
    const i2 = (_b = (_a = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)) == null ? void 0 : _a.tileInfo) == null ? void 0 : _b.lods[e2], s2 = i2 ? i2.levelValue ? i2.levelValue : `${i2.level}` : `${e2}`;
    let a2 = this.resourceInfo ? "" : T({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, s2, t2, r2);
    if (!a2) {
      a2 = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replace(/\{level\}/gi, s2).replace(/\{row\}/gi, `${t2}`).replace(/\{col\}/gi, `${r2}`);
    }
    return a2 = this._appendCustomLayerParameters(a2), a2;
  }
  getUrlTemplate(e2, t2, r2, i2) {
    if (!this.resourceInfo) {
      const r3 = R({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e2, t2, i2);
      if (r3)
        return r3;
    }
    if (this.serviceMode === "KVP")
      return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e2 + "&STYLE=" + i2 + "&FORMAT=" + r2 + "&TILEMATRIXSET=" + t2 + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";
    if (this.serviceMode === "RESTful") {
      let s2 = "";
      return W[r2.toLowerCase()] && (s2 = W[r2.toLowerCase()]), this.url + e2 + "/" + i2 + "/" + t2 + "/{level}/{row}/{col}" + s2;
    }
    return "";
  }
  async _fetchService(e2) {
    let t2;
    if (this.resourceInfo)
      this.resourceInfo.serviceMode === "KVP" && (this.url += this.url.includes("?") ? "" : "?"), t2 = { ssl: false, data: this.resourceInfo };
    else
      try {
        t2 = await this._getCapabilities(this.serviceMode, e2), u(t2.data);
      } catch {
        const s2 = this.serviceMode === "KVP" ? "RESTful" : "KVP";
        try {
          t2 = await this._getCapabilities(s2, e2), u(t2.data), this.serviceMode = s2;
        } catch (r2) {
          throw new s$1("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", { error: r2 });
        }
      }
    this.resourceInfo ? t2.data = f(t2.data) : t2.data = p(t2.data, { serviceMode: this.serviceMode, url: this.url }), t2.data && this.read(t2.data, { origin: "service" });
  }
  async _getCapabilities(e2, r2) {
    const i2 = this._getCapabilitiesUrl(e2);
    return await U$2(i2, __spreadProps(__spreadValues({}, r2), { responseType: "text" }));
  }
  _getTileMatrixSetById(e2) {
    var _a, _b;
    const t2 = (_b = (_a = this.findSublayerById(this.activeLayer.id)) == null ? void 0 : _a.tileMatrixSets) == null ? void 0 : _b.find((t3) => t3.id === e2);
    return t2;
  }
  _appendCustomParameters(e2) {
    return this._appendParameters(e2, this.customParameters);
  }
  _appendCustomLayerParameters(e2) {
    return this._appendParameters(e2, __spreadValues(__spreadValues({}, y$2(this.customParameters)), this.customLayerParameters));
  }
  _appendParameters(e2, t2) {
    const r2 = j$2(e2), i2 = __spreadValues(__spreadValues({}, r2.query), t2), s2 = I$1(i2);
    return s2 === "" ? r2.path : `${r2.path}?${s2}`;
  }
  _getCapabilitiesUrl(e2) {
    this.url = this.url.split("?")[0];
    const t2 = e2 === "KVP" ? `${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}` : `${this.url}/${this.version}/WMTSCapabilities.xml`;
    return this._appendCustomParameters(t2);
  }
  _getLowerCasedUrlParams(e2) {
    if (!e2)
      return null;
    const t2 = j$2(e2).query;
    if (!t2)
      return null;
    const r2 = {};
    return Object.keys(t2).forEach((e3) => {
      r2[e3.toLowerCase()] = t2[e3];
    }), r2;
  }
  _mergeParams(e2, t2) {
    const r2 = this._getLowerCasedUrlParams(t2);
    if (r2) {
      const t3 = Object.keys(r2);
      t3.length && (e2 = e2 ? y$2(e2) : {}, t3.forEach((t4) => {
        e2.hasOwnProperty(t4) || A.has(t4) || (e2[t4] = r2[t4]);
      }));
    }
    return e2;
  }
};
function V(e2, t2) {
  return e2.map((e3) => {
    const r2 = new u$1();
    return r2.read(e3, t2), r2;
  });
}
e([y$1()], F.prototype, "dimensionMap", void 0), e([y$1()], F.prototype, "layerMap", void 0), e([y$1({ type: u$1, json: { origins: { "web-document": { write: { ignoreOrigin: true } } } } })], F.prototype, "activeLayer", null), e([o$1("service", "activeLayer", ["layers"])], F.prototype, "readActiveLayerFromService", null), e([o$1(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], F.prototype, "readActiveLayerFromItemOrWebDoc", null), e([r$2(["web-document", "portal-item"], "activeLayer", { templateUrl: { type: String }, tileInfo: { type: j }, "wmtsInfo.layerIdentifier": { type: String }, "wmtsInfo.tileMatrixSet": { type: String } })], F.prototype, "writeActiveLayer", null), e([y$1({ type: String, value: "", json: { write: true } })], F.prototype, "copyright", void 0), e([y$1({ type: ["show", "hide"] })], F.prototype, "listMode", void 0), e([y$1({ json: { read: true, write: true } })], F.prototype, "blendMode", void 0), e([y$1({ json: { origins: { "web-document": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } }, "portal-item": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } } } } })], F.prototype, "customParameters", void 0), e([o$1(["portal-item", "web-document"], "customParameters")], F.prototype, "readCustomParameters", null), e([y$1({ json: { origins: { "web-document": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } }, "portal-item": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } } } } })], F.prototype, "customLayerParameters", void 0), e([y$1({ type: w$1, json: { write: { ignoreOrigin: true }, origins: { "web-document": { read: { source: "fullExtent" } }, "portal-item": { read: { source: "fullExtent" } } } } })], F.prototype, "fullExtent", void 0), e([y$1({ readOnly: true })], F.prototype, "fullExtents", null), e([y$1({ type: ["WebTiledLayer"] })], F.prototype, "operationalLayerType", void 0), e([y$1()], F.prototype, "resourceInfo", void 0), e([y$1()], F.prototype, "serviceMode", void 0), e([o$1(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], F.prototype, "readServiceMode", null), e([y$1({ type: j$1.ofType(u$1) })], F.prototype, "sublayers", void 0), e([o$1("service", "sublayers", ["layers"])], F.prototype, "readSublayersFromService", null), e([y$1({ readOnly: true })], F.prototype, "supportedSpatialReferences", null), e([y$1({ readOnly: true })], F.prototype, "tilemapCache", null), e([y$1({ json: { read: { source: "title" } } })], F.prototype, "title", null), e([y$1({ json: { read: false }, readOnly: true, value: "wmts" })], F.prototype, "type", void 0), e([y$1({ json: { origins: { service: { read: { source: "tileUrl" } }, "web-document": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } }, "portal-item": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } } } } })], F.prototype, "url", null), e([y$1()], F.prototype, "version", void 0), F = e([n$1("esri.layers.WMTSLayer")], F);
const $ = F;
export { $ as default };
