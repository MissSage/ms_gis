var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { g2 as y, gG as o, U as U$1, gH as n$1, g as s$1, gI as ht, gJ as z$1, gK as mt, aK as k$1, t as t$1, cr as w, bB as E$1, ei as c, bz as _n, de as rn, cs as E$2, gL as i, a as r } from "./index.js";
import { s as s$2 } from "./geojson.js";
import { n as n$2, o as o$1 } from "./xmlUtils.js";
function e(e2) {
  var _a;
  return (_a = t(e2)) != null ? _a : n(e2);
}
function n(e2) {
  const n2 = new Date(e2).getTime();
  return Number.isNaN(n2) ? null : n2;
}
function t(e2) {
  var _a, _b, _c, _d;
  const n2 = s.exec(e2);
  if (!(n2 == null ? void 0 : n2.groups))
    return null;
  const t2 = n2.groups, u = +t2.year, o2 = +t2.month - 1, r2 = +t2.day, f = +((_a = t2.hours) != null ? _a : "0"), i2 = +((_b = t2.minutes) != null ? _b : "0"), d = +((_c = t2.seconds) != null ? _c : "0");
  if (f > 23)
    return null;
  if (i2 > 59)
    return null;
  if (d > 59)
    return null;
  const l = (_d = t2.ms) != null ? _d : "0", c2 = l ? +l.padEnd(3, "0").substring(0, 3) : 0;
  let a;
  if (t2.isUTC)
    a = Date.UTC(u, o2, r2, f, i2, d, c2);
  else if (t2.offsetSign) {
    const e3 = +t2.offsetHours, n3 = +t2.offsetMinutes;
    a = 6e4 * (t2.offsetSign === "+" ? -1 : 1) * (60 * e3 + n3) + Date.UTC(u, o2, r2, f, i2, d, c2);
  } else
    a = new Date(u, o2, r2, f, i2, d, c2).getTime();
  return Number.isNaN(a) ? null : a;
}
const s = /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;
const S = "xlink:href", x = "2.0.0", C = "__esri_wfs_id__", E = "wfs-layer:getWFSLayerTypeInfo-error", N = "wfs-layer:empty-service", P = "wfs-layer:feature-type-not-found", R = "wfs-layer:geojson-not-supported", j = "wfs-layer:kvp-encoding-not-supported", A = "wfs-layer:malformed-json", G = "wfs-layer:unknown-geometry-type", k = "wfs-layer:unknown-field-type", v = "wfs-layer:unsupported-spatial-reference", U = "wfs-layer:unsupported-wfs-version";
async function D(t2, r2) {
  const n2 = I((await U$1(t2, { responseType: "text", query: __spreadValues({ SERVICE: "WFS", REQUEST: "GetCapabilities", VERSION: x }, r2 == null ? void 0 : r2.customParameters), signal: r2 == null ? void 0 : r2.signal })).data);
  return $(t2, n2), n2;
}
function I(e2) {
  const t2 = te(e2);
  ne(t2), ae(t2);
  const n2 = t2.firstElementChild, a = n$1(M(n2));
  return { operations: L(n2), get featureTypes() {
    return Array.from(a());
  }, readFeatureTypes: a };
}
const O = new Set(["json", "application/json", "geojson", "application/json; subtype=geojson"]);
function L(e2) {
  let r2 = false;
  const n2 = { GetCapabilities: { url: "" }, DescribeFeatureType: { url: "" }, GetFeature: { url: "", outputFormat: null, supportsPagination: false } };
  if (o$1(e2, { OperationsMetadata: { Operation: (e3) => {
    switch (e3.getAttribute("name")) {
      case "GetCapabilities":
        return { DCP: { HTTP: { Get: (e4) => {
          n2.GetCapabilities.url = e4.getAttribute(S);
        } } } };
      case "DescribeFeatureType":
        return { DCP: { HTTP: { Get: (e4) => {
          n2.DescribeFeatureType.url = e4.getAttribute(S);
        } } } };
      case "GetFeature":
        return { DCP: { HTTP: { Get: (e4) => {
          n2.GetFeature.url = e4.getAttribute(S);
        } } }, Parameter: (e4) => {
          if (e4.getAttribute("name") === "outputFormat")
            return { AllowedValues: { Value: (e5) => {
              const t2 = e5.textContent;
              t2 && O.has(t2.toLowerCase()) && (n2.GetFeature.outputFormat = t2);
            } } };
        } };
    }
  }, Constraint: (e3) => {
    switch (e3.getAttribute("name")) {
      case "KVPEncoding":
        return { DefaultValue: (e4) => {
          r2 = e4.textContent.toLowerCase() === "true";
        } };
      case "ImplementsResultPaging":
        return { DefaultValue: (e4) => {
          n2.GetFeature.supportsPagination = e4.textContent.toLowerCase() === "true";
        } };
    }
  } } }), !r2)
    throw new s$1(j, "WFS service doesn't support key/value pair (KVP) encoding");
  if (t$1(n2.GetFeature.outputFormat))
    throw new s$1(R, "WFS service doesn't support GeoJSON output format");
  return n2;
}
function $(e2, t2) {
  ht(e2) && (z$1(e2, t2.operations.DescribeFeatureType.url, true) && (t2.operations.DescribeFeatureType.url = mt(t2.operations.DescribeFeatureType.url)), z$1(e2, t2.operations.GetFeature.url, true) && (t2.operations.GetFeature.url = mt(t2.operations.GetFeature.url)));
}
function M(e2) {
  return n$2(e2, { FeatureTypeList: { FeatureType: (e3) => {
    const t2 = { typeName: "undefined:undefined", name: "", title: "", description: "", extent: null, namespacePrefix: "", namespaceUri: "", supportedSpatialReferences: [] }, r2 = new Set([4326]), n2 = (e4) => {
      var _a, _b, _c, _d;
      const t3 = parseInt((_d = (_c = (_b = (_a = e4.textContent) == null ? void 0 : _a.match(/(?<wkid>\d+$)/i)) == null ? void 0 : _b.groups) == null ? void 0 : _c.wkid) != null ? _d : "", 10);
      Number.isNaN(t3) || r2.add(t3);
    };
    return o$1(e3, { Name: (e4) => {
      const { name: r3, prefix: n3 } = re(e4.textContent);
      t2.typeName = `${n3}:${r3}`, t2.name = r3, t2.namespacePrefix = n3, t2.namespaceUri = e4.lookupNamespaceURI(n3);
    }, Abstract: (e4) => {
      t2.description = e4.textContent;
    }, Title: (e4) => {
      t2.title = e4.textContent;
    }, WGS84BoundingBox: (e4) => {
      t2.extent = V(e4);
    }, DefaultSRS: n2, DefaultCRS: n2, OtherSRS: n2, OtherCRS: n2 }), t2.title || (t2.title = t2.name), t2.supportedSpatialReferences.push(...r2), t2;
  } } });
}
function V(e2) {
  let t2, r2, n2, a;
  for (const o2 of e2.children)
    switch (o2.localName) {
      case "LowerCorner":
        [t2, r2] = o2.textContent.split(" ").map((e3) => Number.parseFloat(e3));
        break;
      case "UpperCorner":
        [n2, a] = o2.textContent.split(" ").map((e3) => Number.parseFloat(e3));
    }
  return { xmin: t2, ymin: r2, xmax: n2, ymax: a, spatialReference: c };
}
function W(e2, t2, r2) {
  return o(e2, (e3) => r2 ? e3.name === t2 && e3.namespaceUri === r2 : e3.typeName === t2 || e3.name === t2);
}
async function X(e2, t2, r2, n2 = {}) {
  var _a;
  const { featureType: a, extent: o2 } = await Y(e2, t2, r2, n2), { fields: s2, geometryType: i2, swapXY: p, objectIdField: u, geometryField: c2 } = await q(e2, a.typeName, n2);
  return { url: e2.operations.GetCapabilities.url, name: a.name, namespaceUri: a.namespaceUri, fields: s2, geometryField: c2, geometryType: i2, objectIdField: u, spatialReference: (_a = n2.spatialReference) != null ? _a : k$1.WGS84, extent: o2, swapXY: p, wfsCapabilities: e2, customParameters: n2.customParameters };
}
async function Y(e2, r2, n2, o2 = {}) {
  const { spatialReference: s2 = k$1.WGS84 } = o2, i2 = e2.readFeatureTypes(), p = r2 ? W(i2, r2, n2) : i2.next().value;
  if (t$1(p))
    throw r2 ? new s$1(P, `The type '${r2}' could not be found in the service`) : new s$1(N, "The service is empty");
  let u = new w(__spreadProps(__spreadValues({}, p.extent), { spatialReference: s2 }));
  if (!E$1(s2, c))
    try {
      await _n(c, s2, void 0, o2), u = rn(u, c);
    } catch {
      throw new s$1(v, "Projection not supported");
    }
  return { extent: u, spatialReference: s2, featureType: p };
}
async function q(e2, r2, n2 = {}) {
  var _a, _b, _c, _d, _e;
  const [o2, i2] = await E$2([J(e2.operations.DescribeFeatureType.url, r2, n2), _(e2, r2, n2)]);
  if (o2.error || i2.error)
    throw new s$1(E, `An error occurred while getting info about the feature type '${r2}'`, { error: o2.error || i2.error });
  const { fields: p, errors: u } = (_a = o2.value) != null ? _a : {}, c2 = ((_b = o2.value) == null ? void 0 : _b.geometryType) || ((_c = i2.value) == null ? void 0 : _c.geometryType), l = (_e = (_d = i2.value) == null ? void 0 : _d.swapXY) != null ? _e : false;
  if (t$1(c2))
    throw new s$1(G, `The geometry type could not be determined for type '${r2}`, { typeName: r2, geometryType: c2, fields: p, errors: u });
  return __spreadProps(__spreadValues({}, z(p != null ? p : [])), { geometryType: c2, swapXY: l });
}
function z(e2) {
  var _a;
  const t2 = e2.find((e3) => e3.type === "geometry");
  let r2 = e2.find((e3) => e3.type === "oid");
  return e2 = e2.filter((e3) => e3.type !== "geometry"), r2 || (r2 = new y({ name: C, type: "oid", alias: C }), e2.unshift(r2)), { geometryField: (_a = t2 == null ? void 0 : t2.name) != null ? _a : null, objectIdField: r2.name, fields: e2 };
}
async function _(t2, r2, n2 = {}) {
  var _a;
  let a, o2 = false;
  const [s2, i$1] = await Promise.all([K(t2.operations.GetFeature.url, r2, t2.operations.GetFeature.outputFormat, __spreadProps(__spreadValues({}, n2), { count: 1 })), U$1(t2.operations.GetFeature.url, { responseType: "text", query: Z(r2, void 0, __spreadProps(__spreadValues({}, n2), { count: 1 })), signal: n2 == null ? void 0 : n2.signal })]), p = s2.type === "FeatureCollection" && ((_a = s2.features[0]) == null ? void 0 : _a.geometry);
  if (p) {
    let e2;
    switch (a = i.fromJSON(s$2(p.type)), p.type) {
      case "Point":
        e2 = p.coordinates;
        break;
      case "LineString":
      case "MultiPoint":
        e2 = p.coordinates[0];
        break;
      case "MultiLineString":
      case "Polygon":
        e2 = p.coordinates[0][0];
        break;
      case "MultiPolygon":
        e2 = p.coordinates[0][0][0];
    }
    const t3 = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i$1.data);
    if (t3) {
      const r3 = e2[0].toFixed(3), n3 = e2[1].toFixed(3), a2 = parseFloat(t3[1]).toFixed(3);
      r3 === parseFloat(t3[2]).toFixed(3) && n3 === a2 && (o2 = true);
    }
  }
  return { geometryType: a, swapXY: o2 };
}
async function J(t2, r2, n2) {
  return Q(r2, (await U$1(t2, { responseType: "text", query: __spreadValues({ SERVICE: "WFS", REQUEST: "DescribeFeatureType", VERSION: x, TYPENAME: r2 }, n2 == null ? void 0 : n2.customParameters), signal: n2 == null ? void 0 : n2.signal })).data);
}
function Q(e2, r$1) {
  const { name: a } = re(e2), s2 = te(r$1);
  ae(s2);
  const i2 = o(n$2(s2.firstElementChild, { element: (e3) => ({ name: e3.getAttribute("name"), typeName: re(e3.getAttribute("type")).name }) }), ({ name: e3 }) => e3 === a);
  if (r(i2)) {
    const e3 = o(n$2(s2.firstElementChild, { complexType: (e4) => e4 }), (e4) => e4.getAttribute("name") === i2.typeName);
    if (r(e3))
      return B(e3);
  }
  throw new s$1(P, `Type '${e2}' not found in document`, { document: new XMLSerializer().serializeToString(s2) });
}
const H = new Set(["objectid", "fid"]);
function B(e2) {
  const r2 = [], n2 = [];
  let a;
  const o2 = n$2(e2, { complexContent: { extension: { sequence: { element: (e3) => e3 } } } });
  for (const s2 of o2) {
    const o3 = s2.getAttribute("name");
    if (!o3)
      continue;
    let i2, p;
    if (s2.hasAttribute("type") ? i2 = re(s2.getAttribute("type")).name : o$1(s2, { simpleType: { restriction: (e3) => (i2 = re(e3.getAttribute("base")).name, { maxLength: (e4) => {
      p = +e4.getAttribute("value");
    } }) } }), !i2)
      continue;
    const u = s2.getAttribute("nillable") === "true";
    let c2 = false;
    switch (i2.toLowerCase()) {
      case "integer":
      case "nonpositiveinteger":
      case "negativeinteger":
      case "long":
      case "int":
      case "short":
      case "byte":
      case "nonnegativeinteger":
      case "unsignedlong":
      case "unsignedint":
      case "unsignedshort":
      case "unsignedbyte":
      case "positiveinteger":
        n2.push(new y({ name: o3, alias: o3, type: "integer", nullable: u }));
        break;
      case "float":
      case "double":
      case "decimal":
        n2.push(new y({ name: o3, alias: o3, type: "double", nullable: u }));
        break;
      case "boolean":
      case "string":
      case "gyearmonth":
      case "gyear":
      case "gmonthday":
      case "gday":
      case "gmonth":
      case "anyuri":
      case "qname":
      case "notation":
      case "normalizedstring":
      case "token":
      case "language":
      case "idrefs":
      case "entities":
      case "nmtoken":
      case "nmtokens":
      case "name":
      case "ncname":
      case "id":
      case "idref":
      case "entity":
      case "duration":
      case "time":
        n2.push(new y({ name: o3, alias: o3, type: "string", nullable: u, length: p != null ? p : 255 }));
        break;
      case "datetime":
      case "date":
        n2.push(new y({ name: o3, alias: o3, type: "date", nullable: u, length: p != null ? p : 36 }));
        break;
      case "pointpropertytype":
        a = "point", c2 = true;
        break;
      case "multipointpropertytype":
        a = "multipoint", c2 = true;
        break;
      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        a = "polyline", c2 = true;
        break;
      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        a = "polygon", c2 = true;
        break;
      case "geometrypropertytype":
      case "multigeometrypropertytype":
        c2 = true, r2.push(new s$1(G, `geometry type '${i2}' is not supported`, { type: new XMLSerializer().serializeToString(e2) }));
        break;
      default:
        r2.push(new s$1(k, `Unknown field type '${i2}'`, { type: new XMLSerializer().serializeToString(e2) }));
    }
    c2 && n2.push(new y({ name: o3, alias: o3, type: "geometry", nullable: u }));
  }
  for (const t2 of n2)
    if (t2.type === "integer" && !t2.nullable && H.has(t2.name.toLowerCase())) {
      t2.type = "oid";
      break;
    }
  return { geometryType: a, fields: n2, errors: r2 };
}
async function K(r2, n2, a, o2) {
  var _a;
  let { data: s2 } = await U$1(r2, { responseType: "text", query: Z(n2, a, o2), signal: o2 == null ? void 0 : o2.signal });
  s2 = s2.replace(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
  try {
    if ((_a = o2 == null ? void 0 : o2.dateFields) == null ? void 0 : _a.length) {
      const e$1 = new Set(o2.dateFields);
      return JSON.parse(s2, (t2, r3) => e$1.has(t2) ? e(r3) : r3);
    }
    return JSON.parse(s2);
  } catch (i2) {
    throw new s$1(A, "Error while parsing the\xA0response", { response: s2, error: i2 });
  }
}
function Z(e2, t2, r2) {
  return __spreadValues({ SERVICE: "WFS", REQUEST: "GetFeature", VERSION: x, TYPENAMES: e2, OUTPUTFORMAT: t2, SRSNAME: "EPSG:4326", STARTINDEX: r2 == null ? void 0 : r2.startIndex, COUNT: r2 == null ? void 0 : r2.count }, r2 == null ? void 0 : r2.customParameters);
}
function te(e2) {
  return new DOMParser().parseFromString(e2.trim(), "text/xml");
}
function re(e2) {
  const [t2, r2] = e2.split(":");
  return { prefix: r2 ? t2 : "", name: r2 != null ? r2 : t2 };
}
function ne(e2) {
  var _a;
  const r2 = (_a = e2.firstElementChild) == null ? void 0 : _a.getAttribute("version");
  if (r2 && r2 !== x)
    throw new s$1(U, `Unsupported WFS version ${r2}. Supported version: ${x}`);
}
function ae(e2) {
  let r2 = "", n2 = "";
  if (o$1(e2.firstElementChild, { Exception: (e3) => (r2 = e3.getAttribute("exceptionCode"), { ExceptionText: (e4) => {
    n2 = e4.textContent;
  } }) }), r2)
    throw new s$1(`wfs-layer:${r2}`, n2);
}
export { C, D, K, W, X, z };
