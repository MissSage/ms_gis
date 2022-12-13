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
import { aG as s, i5 as S$1, cA as a$1, d8 as U$1, R as l$1, cr as w$1, hl as b$1, cx as j, $ as e, a0 as y$1, cD as o$1, cn as s$1, a1 as n, t, g as s$2, aK as k, bO as j$1, ck as s$3, i2 as n$1, iM as a$2, i4 as p$1, i3 as t$1, h2 as c$2, h3 as v$1, h4 as O$1, e0 as b$2, dS as l$2, a as r, aL as w$2, U as U$2, dv as Bt, kl as I$1, bB as E, hI as S$2, d4 as k$1, cC as g$2, hu as y$2, y as s$4, aX as y$3, dD as r$1, iE as c$3, gp as T$1, km as g$3, h7 as f$1 } from "./index.js";
import { i } from "./scaleUtils.js";
import { o as o$2 } from "./crsUtils.js";
import { l as l$3 } from "./ExportWMSImageParameters.js";
import "vue";
var c$1;
let h$1 = 0, g$1 = c$1 = class extends s(S$1) {
  constructor(e2) {
    super(e2), this.dimensions = null, this.fullExtents = null, this.legendUrl = null, this.legendEnabled = true, this.layer = null, this.maxScale = 0, this.minScale = 0, this.parent = null, this.popupEnabled = false, this.queryable = false, this.sublayers = null, this.spatialReferences = null, this.addHandles([a$1(() => this.sublayers, "after-add", ({ item: e3 }) => {
      e3.parent = this, e3.layer = this.layer;
    }, U$1), a$1(() => this.sublayers, "after-remove", ({ item: e3 }) => {
      e3.layer = e3.parent = null;
    }, U$1), l$1(() => this.sublayers, (e3, t2) => {
      if (t2)
        for (const r2 of t2)
          r2.layer = r2.parent = null;
      if (e3)
        for (const r2 of e3)
          r2.parent = this, r2.layer = this.layer;
    }, U$1)]);
  }
  get description() {
    return this._get("description");
  }
  set description(e2) {
    this._set("description", e2);
  }
  get fullExtent() {
    return this._get("fullExtent");
  }
  set fullExtent(e2) {
    this._set("fullExtent", e2);
  }
  readExtent(e2, t2) {
    return (e2 = t2.extent) ? w$1.fromJSON(e2) : null;
  }
  get id() {
    const e2 = this._get("id");
    return e2 != null ? e2 : h$1++;
  }
  set id(e2) {
    this._set("id", e2);
  }
  readLegendUrl(e2, t2) {
    var _a, _b;
    return (_b = (_a = t2 == null ? void 0 : t2.legendUrl) != null ? _a : t2 == null ? void 0 : t2.legendURL) != null ? _b : null;
  }
  get effectiveScaleRange() {
    const { minScale: e2, maxScale: t2 } = this;
    return { minScale: e2, maxScale: t2 };
  }
  get name() {
    return this._get("name");
  }
  set name(e2) {
    this._set("name", e2);
  }
  castSublayers(e2) {
    return b$1(j.ofType(c$1), e2);
  }
  get title() {
    return this._get("title");
  }
  set title(e2) {
    this._set("title", e2);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e2) {
    this._setAndNotifyLayer("visible", e2);
  }
  clone() {
    var _a, _b, _c;
    const e2 = new c$1();
    return this.hasOwnProperty("description") && (e2.description = this.description), this.hasOwnProperty("fullExtent") && (e2.fullExtent = this.fullExtent.clone()), this.hasOwnProperty("fullExtents") && (e2.fullExtents = (_b = (_a = this.fullExtents) == null ? void 0 : _a.map((e3) => e3.clone())) != null ? _b : null), this.hasOwnProperty("legendUrl") && (e2.legendUrl = this.legendUrl), this.hasOwnProperty("legendEnabled") && (e2.legendEnabled = this.legendEnabled), this.hasOwnProperty("layer") && (e2.layer = this.layer), this.hasOwnProperty("name") && (e2.name = this.name), this.hasOwnProperty("parent") && (e2.parent = this.parent), this.hasOwnProperty("queryable") && (e2.queryable = this.queryable), this.hasOwnProperty("sublayers") && (e2.sublayers = this.sublayers && this.sublayers.map((e3) => e3.clone())), this.hasOwnProperty("spatialReferences") && (e2.spatialReferences = (_c = this.spatialReferences) == null ? void 0 : _c.map((e3) => e3)), this.hasOwnProperty("visible") && (e2.visible = this.visible), this.hasOwnProperty("title") && (e2.title = this.title), e2;
  }
  _setAndNotifyLayer(e2, t2) {
    const r2 = this.layer;
    this._get(e2) !== t2 && (this._set(e2, t2), r2 && r2.emit("wms-sublayer-update", { propertyName: e2, id: this.id }));
  }
};
e([y$1()], g$1.prototype, "description", null), e([y$1({ readOnly: true })], g$1.prototype, "dimensions", void 0), e([y$1({ value: null })], g$1.prototype, "fullExtent", null), e([o$1("fullExtent", ["extent"])], g$1.prototype, "readExtent", null), e([y$1()], g$1.prototype, "fullExtents", void 0), e([y$1({ type: Number, json: { write: { enabled: false, overridePolicy: () => ({ ignoreOrigin: true, enabled: true }) } } })], g$1.prototype, "id", null), e([y$1({ type: String, json: { origins: { "web-document": { read: { source: ["legendUrl", "legendURL"] }, write: { target: "legendUrl", ignoreOrigin: true } } }, read: { source: "legendURL" }, write: { ignoreOrigin: true } } })], g$1.prototype, "legendUrl", void 0), e([o$1(["web-document"], "legendUrl")], g$1.prototype, "readLegendUrl", null), e([y$1({ value: true, type: Boolean, json: { read: { source: "showLegend" }, write: { target: "showLegend" }, origins: { "web-map": { read: false, write: false }, "web-scene": { read: false, write: false } } } })], g$1.prototype, "legendEnabled", void 0), e([y$1()], g$1.prototype, "layer", void 0), e([y$1()], g$1.prototype, "maxScale", void 0), e([y$1()], g$1.prototype, "minScale", void 0), e([y$1({ readOnly: true })], g$1.prototype, "effectiveScaleRange", null), e([y$1({ type: String, value: null, json: { read: { source: "name" }, write: { ignoreOrigin: true } } })], g$1.prototype, "name", null), e([y$1()], g$1.prototype, "parent", void 0), e([y$1({ type: Boolean, json: { read: { source: "showPopup" }, write: { ignoreOrigin: true, target: "showPopup" } } })], g$1.prototype, "popupEnabled", void 0), e([y$1({ type: Boolean, json: { write: { ignoreOrigin: true } } })], g$1.prototype, "queryable", void 0), e([y$1()], g$1.prototype, "sublayers", void 0), e([s$1("sublayers")], g$1.prototype, "castSublayers", null), e([y$1({ type: [Number], json: { read: { source: "spatialReferences" } } })], g$1.prototype, "spatialReferences", void 0), e([y$1({ type: String, value: null, json: { write: { ignoreOrigin: true } } })], g$1.prototype, "title", null), e([y$1({ type: Boolean, value: true, json: { read: { source: "defaultVisibility" } } })], g$1.prototype, "visible", null), g$1 = c$1 = e([n("esri.layers.support.WMSSublayer")], g$1);
const m$1 = g$1;
const o = { 84: 4326, 83: 4269, 27: 4267 };
function a(t2) {
  if (!t2)
    return null;
  const n2 = { idCounter: -1 };
  if (typeof t2 == "string") {
    t2 = new DOMParser().parseFromString(t2, "text/xml");
  }
  const i2 = t2.documentElement;
  if (i2.nodeName === "ServiceExceptionReport") {
    const t3 = Array.prototype.slice.call(i2.childNodes).map((e2) => e2.textContent).join("\r\n");
    throw new s$2("wmslayer:wms-capabilities-xml-is-not-valid", "The server returned errors when the WMS capabilities were requested.", t3);
  }
  const s2 = d("Capability", i2), o2 = d("Service", i2), a2 = d("Request", s2);
  if (!s2 || !o2 || !a2)
    return null;
  const l2 = d("Layer", s2);
  if (!l2)
    return null;
  const m2 = i2.nodeName === "WMS_Capabilities" || i2.nodeName === "WMT_MS_Capabilities" ? i2.getAttribute("version") : "1.3.0", f2 = h("Title", o2, "") || h("Name", o2, ""), p2 = h("AccessConstraints", o2, ""), x2 = /^none$/i.test(p2) ? "" : p2, y2 = h("Abstract", o2, ""), S2 = parseInt(h("MaxWidth", o2, "5000"), 10), E2 = parseInt(h("MaxHeight", o2, "5000"), 10), w2 = N(a2, "GetMap"), L = g(a2, "GetMap"), M2 = b(l2, m2, n2);
  let C2, R2 = 0;
  if (Array.prototype.slice.call(s2.childNodes).forEach((e2) => {
    e2.nodeName === "Layer" && (R2 === 0 ? C2 = e2 : R2 === 1 ? (M2.name && (M2.name = "", M2.sublayers.push(b(C2, m2, n2))), M2.sublayers.push(b(e2, m2, n2))) : M2.sublayers.push(b(e2, m2, n2)), R2++);
  }), !M2)
    return null;
  let I2, T2;
  const U2 = M2.fullExtents;
  if (I2 = M2.sublayers, I2 || (I2 = []), I2.length === 0 && I2.push(M2), T2 = M2.extent, !T2) {
    const e2 = new w$1(I2[0].extent);
    M2.extent = e2.toJSON(), T2 = M2.extent;
  }
  const V2 = M2.spatialReferences.length > 0 ? M2.spatialReferences : u(M2), v2 = g(a2, "GetFeatureInfo"), O2 = v2 ? N(a2, "GetFeatureInfo") : null, _2 = c(I2), B = M2.minScale || 0, D = M2.maxScale || 0, j2 = M2.dimensions, k2 = _2.reduce((e2, t3) => e2.concat(t3.dimensions), []), q = j2.concat(k2).filter(F);
  let X2 = null;
  if (q.length) {
    const e2 = q.map((e3) => {
      const { extent: t3 } = e3;
      return A(t3) ? t3.map((e4) => e4.getTime()) : t3.map((e4) => [e4.min.getTime(), e4.max.getTime()]);
    }).flat(2);
    X2 = { startTimeField: null, endTimeField: null, trackIdField: null, timeExtent: [Math.min(...e2), Math.max(...e2)] };
  }
  return { copyright: x2, description: y2, dimensions: j2, extent: T2, fullExtents: U2, featureInfoFormats: O2, featureInfoUrl: v2, mapUrl: L, maxWidth: S2, maxHeight: E2, maxScale: D, minScale: B, layers: _2, spatialReferences: V2, supportedImageFormatTypes: w2, timeInfo: X2, title: f2, version: m2 };
}
function l(e2) {
  const t2 = e2.filter((e3) => e3.popupEnabled && e3.name && e3.queryable);
  return t2.length ? t2.map(({ name: e3 }) => e3).join() : null;
}
function u(e2) {
  if (e2.spatialReferences.length > 0)
    return e2.spatialReferences;
  if (e2.sublayers)
    for (const t2 of e2.sublayers) {
      const e3 = u(t2);
      if (e3.length > 0)
        return e3;
    }
  return [];
}
function c(e2) {
  var _a;
  let t2 = [];
  for (const n2 of e2)
    t2.push(n2), ((_a = n2.sublayers) == null ? void 0 : _a.length) && (t2 = t2.concat(c(n2.sublayers)), delete n2.sublayers);
  return t2;
}
function m(e2, t2, n2) {
  var _a;
  return (_a = t2.getAttribute(e2)) != null ? _a : n2;
}
function f(e2, t2, n2, r2) {
  const i2 = d(e2, n2);
  return i2 ? m(t2, i2, r2) : r2;
}
function d(e2, t2) {
  for (let n2 = 0; n2 < t2.childNodes.length; n2++) {
    const r2 = t2.childNodes[n2];
    if (S(r2) && r2.nodeName === e2)
      return r2;
  }
  return null;
}
function p(e2, t2) {
  const n2 = [];
  for (let r2 = 0; r2 < t2.childNodes.length; r2++) {
    const i2 = t2.childNodes[r2];
    S(i2) && i2.nodeName === e2 && n2.push(i2);
  }
  return n2;
}
function h(e2, t2, n2) {
  const r2 = d(e2, t2);
  return r2 ? r2.textContent : n2;
}
function x(e2, t2, n2) {
  if (!e2)
    return null;
  const s2 = parseFloat(e2.getAttribute("minx")), o2 = parseFloat(e2.getAttribute("miny")), a2 = parseFloat(e2.getAttribute("maxx")), l2 = parseFloat(e2.getAttribute("maxy"));
  let u2, c2, m2, f2;
  n2 ? (u2 = isNaN(o2) ? -Number.MAX_VALUE : o2, c2 = isNaN(s2) ? -Number.MAX_VALUE : s2, m2 = isNaN(l2) ? Number.MAX_VALUE : l2, f2 = isNaN(a2) ? Number.MAX_VALUE : a2) : (u2 = isNaN(s2) ? -Number.MAX_VALUE : s2, c2 = isNaN(o2) ? -Number.MAX_VALUE : o2, m2 = isNaN(a2) ? Number.MAX_VALUE : a2, f2 = isNaN(l2) ? Number.MAX_VALUE : l2);
  const d2 = new k({ wkid: t2 });
  return new w$1({ xmin: u2, ymin: c2, xmax: m2, ymax: f2, spatialReference: d2 });
}
function g(e2, t2) {
  const n2 = d(t2, e2);
  if (n2) {
    const e3 = d("DCPType", n2);
    if (e3) {
      const t3 = d("HTTP", e3);
      if (t3) {
        const e4 = d("Get", t3);
        if (e4) {
          let t4 = f("OnlineResource", "xlink:href", e4, null);
          if (t4)
            return t4.indexOf("&") === t4.length - 1 && (t4 = t4.substring(0, t4.length - 1)), M(t4, ["service", "request"]);
        }
      }
    }
  }
  return null;
}
function N(e2, t2) {
  const n2 = p("Operation", e2);
  if (!n2.length) {
    return p("Format", d(t2, e2)).map(({ textContent: e3 }) => e3);
  }
  const r2 = [];
  for (const i2 of n2)
    if (i2.getAttribute("name") === t2) {
      const e3 = p("Format", i2);
      for (const { textContent: t3 } of e3)
        r2.push(t3);
    }
  return r2;
}
function y(e2, t2, n2) {
  const r2 = d(t2, e2);
  if (!r2)
    return n2;
  const { textContent: i2 } = r2;
  if (i2 == null || i2 === "")
    return n2;
  const s2 = Number(i2);
  return isNaN(s2) ? n2 : s2;
}
function b(e2, t2, n2) {
  if (!e2)
    return null;
  const a2 = { id: n2.idCounter++, fullExtents: [], parentLayerId: null, queryable: e2.getAttribute("queryable") === "1", spatialReferences: [], sublayers: null }, l2 = d("LatLonBoundingBox", e2), u2 = d("EX_GeographicBoundingBox", e2);
  let c2 = null;
  l2 && (c2 = x(l2, 4326)), u2 && (c2 = new w$1(0, 0, 0, 0, new k({ wkid: 4326 })), c2.xmin = parseFloat(h("westBoundLongitude", u2, "0")), c2.ymin = parseFloat(h("southBoundLatitude", u2, "0")), c2.xmax = parseFloat(h("eastBoundLongitude", u2, "0")), c2.ymax = parseFloat(h("northBoundLatitude", u2, "0"))), l2 || u2 || (c2 = new w$1(-180, -90, 180, 90, new k({ wkid: 4326 }))), a2.minScale = y(e2, "MaxScaleDenominator", 0), a2.maxScale = y(e2, "MinScaleDenominator", 0);
  const f2 = ["1.0.0", "1.1.0", "1.1.1"].includes(t2) ? "SRS" : "CRS";
  return Array.prototype.slice.call(e2.childNodes).forEach((e3) => {
    if (e3.nodeName === "Name")
      a2.name = e3.textContent || "";
    else if (e3.nodeName === "Title")
      a2.title = e3.textContent || "";
    else if (e3.nodeName === "Abstract")
      a2.description = e3.textContent || "";
    else if (e3.nodeName === "BoundingBox") {
      const n3 = e3.getAttribute(f2);
      if (n3 && n3.indexOf("EPSG:") === 0) {
        const r3 = parseInt(n3.substring(5), 10);
        r3 === 0 || isNaN(r3) || c2 || (c2 = t2 === "1.3.0" ? x(e3, r3, o$2(r3)) : x(e3, r3));
      }
      const r2 = n3 && n3.indexOf(":");
      if (r2 && r2 > -1) {
        let i2 = parseInt(n3.substring(r2 + 1, n3.length), 10);
        i2 === 0 || isNaN(i2) || (i2 = o[i2] ? o[i2] : i2);
        const l3 = t2 === "1.3.0" ? x(e3, i2, o$2(i2)) : x(e3, i2);
        a2.fullExtents.push(l3);
      }
    } else if (e3.nodeName === f2) {
      e3.textContent.split(" ").forEach((e4) => {
        const t3 = e4.includes(":") ? parseInt(e4.split(":")[1], 10) : parseInt(e4, 10);
        if (t3 !== 0 && !isNaN(t3)) {
          const e5 = o[t3] ? o[t3] : t3;
          a2.spatialReferences.includes(e5) || a2.spatialReferences.push(e5);
        }
      });
    } else if (e3.nodeName !== "Style" || a2.legendURL) {
      if (e3.nodeName === "Layer") {
        const r2 = b(e3, t2, n2);
        r2 && (r2.parentLayerId = a2.id, a2.sublayers || (a2.sublayers = []), a2.sublayers.push(r2));
      }
    } else {
      const t3 = d("LegendURL", e3);
      if (t3) {
        const e4 = d("OnlineResource", t3);
        e4 && (a2.legendURL = e4.getAttribute("xlink:href"));
      }
    }
  }), a2.extent = c2 == null ? void 0 : c2.toJSON(), a2.dimensions = p("Dimension", e2).filter((e3) => e3.getAttribute("name") && e3.getAttribute("units") && e3.textContent).map((e3) => {
    const t3 = e3.getAttribute("name"), n3 = e3.getAttribute("units"), r2 = e3.textContent, i2 = e3.getAttribute("unitSymbol"), s2 = e3.getAttribute("default"), o2 = m("default", e3, "0") !== "0", a3 = m("nearestValue", e3, "0") !== "0", l3 = m("current", e3, "0") !== "0";
    if (F({ name: t3, units: n3 })) {
      return { name: "time", units: "ISO8601", extent: I(r2), default: I(s2), multipleValues: o2, nearestValue: a3, current: l3 };
    }
    if (w({ name: t3, units: n3 })) {
      return { name: "elevation", units: n3, extent: C(r2), unitSymbol: i2, default: C(s2), multipleValues: o2, nearestValue: a3 };
    }
    return { name: t3, units: n3, extent: R(r2), unitSymbol: i2, default: R(s2), multipleValues: o2, nearestValue: a3 };
  }), a2;
}
function A(e2) {
  return Array.isArray(e2) && e2.length > 0 && e2[0] instanceof Date;
}
function S(e2) {
  return e2.nodeType === Node.ELEMENT_NODE;
}
function w(e2) {
  return /^elevation$/i.test(e2.name) && /^(epsg|crs):\d+$/i.test(e2.units);
}
function F(e2) {
  return /^time$/i.test(e2.name) && /^iso8601$/i.test(e2.units);
}
function M(e2, t2) {
  const r2 = [], i2 = j$1(e2);
  for (const n2 in i2.query)
    i2.query.hasOwnProperty(n2) && (t2.includes(n2.toLowerCase()) || r2.push(n2 + "=" + i2.query[n2]));
  return i2.path + (r2.length ? "?" + r2.join("&") : "");
}
function C(e2) {
  if (!e2)
    return null;
  const t2 = e2.includes("/"), n2 = e2.split(",");
  return t2 ? n2.map((e3) => {
    const t3 = e3.split("/");
    if (t3.length < 2)
      return null;
    return { min: parseFloat(t3[0]), max: parseFloat(t3[1]), resolution: t3.length >= 3 && t3[2] !== "0" ? parseFloat(t3[2]) : void 0 };
  }).filter((e3) => e3) : n2.map((e3) => parseFloat(e3));
}
function R(e2) {
  if (!e2)
    return null;
  const t2 = e2.includes("/"), n2 = e2.split(",");
  return t2 ? n2.map((e3) => {
    const t3 = e3.split("/");
    if (t3.length < 2)
      return null;
    return { min: t3[0], max: t3[1], resolution: t3.length >= 3 && t3[2] !== "0" ? t3[2] : void 0 };
  }).filter((e3) => e3) : n2;
}
function I(e2) {
  if (!e2)
    return null;
  const t2 = e2.includes("/"), n2 = e2.split(",");
  return t2 ? n2.map((e3) => {
    const t3 = e3.split("/");
    if (t3.length < 2)
      return null;
    return { min: new Date(t3[0]), max: new Date(t3[1]), resolution: t3.length >= 3 && t3[2] !== "0" ? T(t3[2]) : void 0 };
  }).filter((e3) => e3) : n2.map((e3) => new Date(e3));
}
function T(e2) {
  const t2 = /(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i, n2 = e2.match(t2);
  if (!n2)
    return null;
  return { years: U(n2[1]), months: U(n2[2]), days: U(n2[3]), hours: U(n2[4]), minutes: U(n2[5]), seconds: U(n2[6]) };
}
function U(e2) {
  if (!e2)
    return 0;
  const t2 = /(?:\d+(?:.|,)\d+|\d+)/, n2 = e2.match(t2);
  if (!n2)
    return 0;
  const r2 = n2[0].replace(",", ".");
  return Number(r2);
}
function V$1(e2) {
  return e2.toISOString().replace(/\.[0-9]{3}/, "");
}
const v = new Set([102100, 3857, 102113, 900913]), O = new Set([3395, 54004]);
function _(e2, n2) {
  let r2 = e2.wkid;
  return t(n2) ? r2 : (!n2.includes(r2) && e2.latestWkid && (r2 = e2.latestWkid), v.has(r2) ? n2.find((e3) => v.has(e3)) || n2.find((e3) => O.has(e3)) || 102100 : r2);
}
const J = new s$3({ bmp: "image/bmp", gif: "image/gif", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml" }, { ignoreUnknown: false });
function V(e2) {
  return e2 === "text/html";
}
function Q(e2) {
  return e2 === "text/plain";
}
let z = class extends n$1(a$2(p$1(t$1(c$2(v$1(O$1(b$2))))))) {
  constructor(...e2) {
    super(...e2), this.allSublayers = new l$2({ getCollections: () => [this.sublayers], getChildrenFunction: (e3) => e3.sublayers }), this.customParameters = null, this.customLayerParameters = null, this.copyright = null, this.description = null, this.dimensions = null, this.fullExtent = null, this.fullExtents = null, this.featureInfoFormats = null, this.featureInfoUrl = null, this.fetchFeatureInfoFunction = null, this.imageFormat = null, this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = true, this.legendEnabled = true, this.mapUrl = null, this.isReference = null, this.operationalLayerType = "WMS", this.spatialReference = null, this.spatialReferences = null, this.sublayers = null, this.type = "wms", this.url = null, this.version = null, this.addHandles([a$1(() => this.sublayers, "after-add", ({ item: e3 }) => {
      e3.parent = e3.layer = this;
    }, U$1), a$1(() => this.sublayers, "after-remove", ({ item: e3 }) => {
      e3.layer = e3.parent = null;
    }, U$1), l$1(() => this.sublayers, (e3, t2) => {
      if (t2)
        for (const r2 of t2)
          r2.layer = r2.parent = null;
      if (e3)
        for (const r2 of e3)
          r2.parent = r2.layer = this;
    }, U$1)]);
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMS"] }, e2).catch(w$2).then(() => this._fetchService(t2))), Promise.resolve(this);
  }
  readFullExtentFromItemOrMap(e2, t2) {
    const r2 = t2.extent;
    return r2 ? new w$1({ xmin: r2[0][0], ymin: r2[0][1], xmax: r2[1][0], ymax: r2[1][1] }) : null;
  }
  writeFullExtent(e2, t2) {
    t2.extent = [[e2.xmin, e2.ymin], [e2.xmax, e2.ymax]];
  }
  get featureInfoFormat() {
    var _a, _b;
    return t(this.featureInfoFormats) ? null : (_b = (_a = this.featureInfoFormats.find(V)) != null ? _a : this.featureInfoFormats.find(Q)) != null ? _b : null;
  }
  set featureInfoFormat(e2) {
    r(e2) ? (V(e2) || Q(e2)) && this._override("featureInfoFormat", e2) : (this.revert("featureInfoFormat", "service"), this._clearOverride("featureInfoFormat"));
  }
  readImageFormat(e2, t2) {
    const r2 = t2.supportedImageFormatTypes;
    return r2 && r2.includes("image/png") ? "image/png" : r2 && r2[0];
  }
  readSpatialReferenceFromItemOrDocument(e2, t2) {
    return new k(t2.spatialReferences[0]);
  }
  writeSpatialReferences(e2, t2) {
    var _a;
    const r2 = (_a = this.spatialReference) == null ? void 0 : _a.wkid;
    e2 && r2 ? (t2.spatialReferences = e2.filter((e3) => e3 !== r2), t2.spatialReferences.unshift(r2)) : t2.spatialReferences = e2;
  }
  readSublayersFromItemOrMap(e2, t2, r2) {
    return X(t2.layers, r2, t2.visibleLayers);
  }
  readSublayers(e2, t2, r2) {
    return X(t2.layers, r2);
  }
  writeSublayers(e2, t2, r2, o2) {
    var _a, _b;
    t2.layers = [];
    const s2 = new Map(), i2 = e2.flatten(({ sublayers: e3 }) => e3);
    for (const a2 of i2)
      if (typeof ((_a = a2.parent) == null ? void 0 : _a.id) == "number") {
        const e3 = s2.get(a2.parent.id);
        e3 != null ? e3.push(a2.id) : s2.set(a2.parent.id, [a2.id]);
      }
    for (const a2 of i2) {
      const e3 = __spreadValues({ sublayer: a2 }, o2), r3 = a2.write({ parentLayerId: typeof ((_b = a2.parent) == null ? void 0 : _b.id) == "number" ? a2.parent.id : -1 }, e3);
      if (s2.has(a2.id) && (r3.sublayerIds = s2.get(a2.id)), !a2.sublayers && a2.name) {
        const r4 = a2.write({}, e3);
        delete r4.id, t2.layers.push(r4);
      }
    }
    t2.visibleLayers = i2.filter(({ visible: e3, sublayers: t3 }) => e3 && !t3).map(({ name: e3 }) => e3).toArray();
  }
  createExportImageParameters(e2, t2, r2, o2) {
    var _a;
    const s2 = (_a = o2 == null ? void 0 : o2.pixelRatio) != null ? _a : 1, i$1 = i({ extent: e2, width: t2 }) * s2, a2 = new l$3({ layer: this, scale: i$1 }), { xmin: n2, ymin: l2, xmax: p2, ymax: m2, spatialReference: u2 } = e2, c2 = _(u2, this.spatialReferences), f2 = this.version === "1.3.0" && o$2(c2) ? `${l2},${n2},${m2},${p2}` : `${n2},${l2},${p2},${m2}`, y2 = a2.toJSON();
    return __spreadValues({ bbox: f2, [this.version === "1.3.0" ? "crs" : "srs"]: isNaN(c2) ? void 0 : "EPSG:" + c2 }, y2);
  }
  async fetchImage(e2, t2, r$12, o2) {
    var _a, _b;
    const i2 = this.mapUrl, a2 = this.createExportImageParameters(e2, t2, r$12, o2);
    if (!a2.layers) {
      const e3 = document.createElement("canvas");
      return e3.width = t2, e3.height = r$12, e3;
    }
    const n2 = (_a = o2 == null ? void 0 : o2.timeExtent) == null ? void 0 : _a.start, l2 = (_b = o2 == null ? void 0 : o2.timeExtent) == null ? void 0 : _b.end, m2 = r(n2) && r(l2) ? n2.getTime() === l2.getTime() ? V$1(n2) : `${V$1(n2)}/${V$1(l2)}` : void 0, u2 = { responseType: "image", query: this._mixCustomParameters(__spreadValues(__spreadProps(__spreadValues({ width: t2, height: r$12 }, a2), { time: m2 }), this.refreshParameters)), signal: o2 == null ? void 0 : o2.signal };
    return U$2(i2 != null ? i2 : "", u2).then((e3) => e3.data);
  }
  async fetchImageBitmap(e2, t2, r$12, o2) {
    var _a, _b;
    const i2 = this.mapUrl, a2 = this.createExportImageParameters(e2, t2, r$12, o2);
    if (!a2.layers) {
      const e3 = document.createElement("canvas");
      return e3.width = t2, e3.height = r$12, e3;
    }
    const n2 = (_a = o2 == null ? void 0 : o2.timeExtent) == null ? void 0 : _a.start, l2 = (_b = o2 == null ? void 0 : o2.timeExtent) == null ? void 0 : _b.end, m2 = r(n2) && r(l2) ? n2.getTime() === l2.getTime() ? V$1(n2) : `${V$1(n2)}/${V$1(l2)}` : void 0, u2 = { responseType: "blob", query: this._mixCustomParameters(__spreadValues(__spreadProps(__spreadValues({ width: t2, height: r$12 }, a2), { time: m2 }), this.refreshParameters)), signal: o2 == null ? void 0 : o2.signal }, c2 = await U$2(i2 != null ? i2 : "", u2).then((e3) => e3.data);
    return createImageBitmap(c2);
  }
  fetchFeatureInfo(e2, t$12, r$12, o2, s2) {
    const i$1 = i({ extent: e2, width: t$12 }), a2 = new l$3({ layer: this, scale: i$1 }), n2 = l(a2.visibleSublayers);
    if (t(this.featureInfoUrl) || t(n2))
      return Promise.resolve([]);
    if (t(this.fetchFeatureInfoFunction) && t(this.featureInfoFormat))
      return Promise.resolve([]);
    const l$12 = this.version === "1.3.0" ? { I: o2, J: s2 } : { x: o2, y: s2 }, u2 = __spreadValues({ query_layers: n2, request: "GetFeatureInfo", info_format: this.featureInfoFormat, feature_count: 25, width: t$12, height: r$12 }, l$12), c2 = __spreadValues(__spreadValues({}, this.createExportImageParameters(e2, t$12, r$12)), u2), f2 = this._mixCustomParameters(c2);
    return r(this.fetchFeatureInfoFunction) ? this.fetchFeatureInfoFunction(f2) : this._defaultFetchFeatureInfoFunction(Bt(this.featureInfoUrl, f2));
  }
  findSublayerById(e2) {
    return this.allSublayers.find((t2) => t2.id === e2);
  }
  findSublayerByName(e2) {
    return this.allSublayers.find((t2) => t2.name === e2);
  }
  serviceSupportsSpatialReference(e2) {
    return I$1(this.url) || this.spatialReferences != null && this.spatialReferences.some((t2) => {
      const r2 = t2 === 900913 ? k.WebMercator : new k({ wkid: t2 });
      return E(r2, e2);
    });
  }
  _defaultFetchFeatureInfoFunction(e2) {
    const t2 = document.createElement("iframe");
    t2.src = S$2(e2), t2.style.border = "none", t2.style.margin = "0", t2.style.width = "100%", t2.setAttribute("sandbox", "");
    const s2 = new k$1({ title: this.title, content: t2 }), i2 = new g$2({ sourceLayer: this, popupTemplate: s2 });
    return Promise.resolve([i2]);
  }
  async _fetchService(e2) {
    var _a;
    if (!this.resourceInfo) {
      const { path: t2, query: r2 } = (_a = this.parsedUrl) != null ? _a : {};
      (r2 == null ? void 0 : r2.service) && (r2.SERVICE = r2.service, delete r2.service), (r2 == null ? void 0 : r2.request) && (r2.REQUEST = r2.request, delete r2.request);
      const { data: o2 } = await U$2(t2 != null ? t2 : "", { query: __spreadValues(__spreadValues({ SERVICE: "WMS", REQUEST: "GetCapabilities" }, r2), this.customParameters), responseType: "xml", signal: e2 });
      this.resourceInfo = a(o2);
    }
    if (this.parsedUrl) {
      const e3 = new y$2(this.parsedUrl.path), { httpsDomains: r2 } = s$4.request;
      e3.scheme !== "https" || e3.port && e3.port !== "443" || !e3.host || r2.includes(e3.host) || r2.push(e3.host);
    }
    this.read(this.resourceInfo, { origin: "service" });
  }
  _mixCustomParameters(e2) {
    if (!this.customLayerParameters && !this.customParameters)
      return e2;
    const t2 = __spreadValues(__spreadValues({}, this.customParameters), this.customLayerParameters);
    for (const r2 in t2)
      e2[r2.toLowerCase()] = t2[r2];
    return e2;
  }
};
function K(e2, t2) {
  return e2.some((e3) => {
    for (const r2 in e3)
      if (g$3(e3, r2, null, t2))
        return true;
    return false;
  });
}
function X(e2, t2, r2) {
  e2 = e2 != null ? e2 : [];
  const o2 = new Map();
  e2.every((e3) => e3.id == null) && (e2 = y$3(e2)).forEach((e3, t3) => e3.id = t3);
  for (const i2 of e2) {
    const e3 = new m$1();
    e3.read(i2, t2), r2 && !r2.includes(e3.name) && (e3.visible = false), o2.set(e3.id, e3);
  }
  const s2 = [];
  for (const a2 of e2) {
    const e3 = a2.id != null ? o2.get(a2.id) : null;
    if (e3)
      if (a2.parentLayerId != null && a2.parentLayerId >= 0) {
        const t3 = o2.get(a2.parentLayerId);
        if (!t3)
          continue;
        t3.sublayers || (t3.sublayers = new j()), t3.sublayers.push(e3);
      } else
        s2.push(e3);
  }
  return s2;
}
e([y$1({ readOnly: true })], z.prototype, "allSublayers", void 0), e([y$1({ json: { type: Object, write: true } })], z.prototype, "customParameters", void 0), e([y$1({ json: { type: Object, write: true } })], z.prototype, "customLayerParameters", void 0), e([y$1({ type: String, json: { write: true } })], z.prototype, "copyright", void 0), e([y$1()], z.prototype, "description", void 0), e([y$1({ readOnly: true })], z.prototype, "dimensions", void 0), e([y$1({ json: { type: [[Number]], read: { source: "extent" }, write: { target: "extent" }, origins: { "web-document": { write: { ignoreOrigin: true } }, "portal-item": { write: { ignoreOrigin: true } } } } })], z.prototype, "fullExtent", void 0), e([o$1(["web-document", "portal-item"], "fullExtent", ["extent"])], z.prototype, "readFullExtentFromItemOrMap", null), e([r$1(["web-document", "portal-item"], "fullExtent", { extent: { type: [[Number]] } })], z.prototype, "writeFullExtent", null), e([y$1()], z.prototype, "fullExtents", void 0), e([y$1({ type: String, json: { write: { ignoreOrigin: true } } })], z.prototype, "featureInfoFormat", null), e([y$1({ type: [String], readOnly: true })], z.prototype, "featureInfoFormats", void 0), e([y$1({ type: String, json: { write: { ignoreOrigin: true } } })], z.prototype, "featureInfoUrl", void 0), e([y$1()], z.prototype, "fetchFeatureInfoFunction", void 0), e([y$1({ type: String, json: { origins: { "web-document": { default: "image/png", type: J.jsonValues, read: { reader: J.read, source: "format" }, write: { writer: J.write, target: "format" } } } } })], z.prototype, "imageFormat", void 0), e([o$1("imageFormat", ["supportedImageFormatTypes"])], z.prototype, "readImageFormat", null), e([y$1({ type: Number, json: { read: { source: "maxHeight" }, write: { target: "maxHeight" } } })], z.prototype, "imageMaxHeight", void 0), e([y$1({ type: Number, json: { read: { source: "maxWidth" }, write: { target: "maxWidth" } } })], z.prototype, "imageMaxWidth", void 0), e([y$1()], z.prototype, "imageTransparency", void 0), e([y$1(c$3)], z.prototype, "legendEnabled", void 0), e([y$1({ type: ["show", "hide", "hide-children"] })], z.prototype, "listMode", void 0), e([y$1({ type: String, json: { write: { ignoreOrigin: true } } })], z.prototype, "mapUrl", void 0), e([y$1({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], z.prototype, "isReference", void 0), e([y$1({ type: ["WMS"] })], z.prototype, "operationalLayerType", void 0), e([y$1()], z.prototype, "resourceInfo", void 0), e([y$1({ type: k, json: { origins: { service: { read: { source: "extent.spatialReference" } } }, write: false } })], z.prototype, "spatialReference", void 0), e([o$1(["web-document", "portal-item"], "spatialReference", ["spatialReferences"])], z.prototype, "readSpatialReferenceFromItemOrDocument", null), e([y$1({ type: [T$1], json: { read: false, origins: { service: { read: true }, "web-document": { read: false, write: { ignoreOrigin: true } }, "portal-item": { read: false, write: { ignoreOrigin: true } } } } })], z.prototype, "spatialReferences", void 0), e([r$1(["web-document", "portal-item"], "spatialReferences")], z.prototype, "writeSpatialReferences", null), e([y$1({ type: j.ofType(m$1), json: { write: { target: "layers", overridePolicy(e2, t2, r2) {
  if (K(this.allSublayers, r2))
    return { ignoreOrigin: true };
} } } })], z.prototype, "sublayers", void 0), e([o$1(["web-document", "portal-item"], "sublayers", ["layers", "visibleLayers"])], z.prototype, "readSublayersFromItemOrMap", null), e([o$1("service", "sublayers", ["layers"])], z.prototype, "readSublayers", null), e([r$1("sublayers", { layers: { type: [m$1] }, visibleLayers: { type: [String] } })], z.prototype, "writeSublayers", null), e([y$1({ json: { read: false }, readOnly: true, value: "wms" })], z.prototype, "type", void 0), e([y$1(f$1)], z.prototype, "url", void 0), e([y$1({ type: String, json: { write: { ignoreOrigin: true } } })], z.prototype, "version", void 0), z = e([n("esri.layers.WMSLayer")], z);
const Y = z;
export { Y as default };
