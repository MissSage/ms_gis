var __defProp = Object.defineProperty;
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
import { g as s$1, am as j$1, m as j$2, s as s$2, bO as j$3, U, eg as M, bB as E, bs as k$1, bx as y$1, bD as ln, aK as k$2, eh as s$3, aA as t$2, ei as c$1, ej as Ut, c9 as r$1 } from "./index.js";
import { t as t$1 } from "./json.js";
import { u as u$1 } from "./FeatureStore.js";
import { f as f$1 } from "./projectionSupport.js";
import { Y } from "./QueryEngine.js";
import { a as a$1 } from "./number.js";
import { i as i$1, o as o$1 } from "./clientSideDefaults.js";
import "vue";
import "./PooledRBush.js";
import "./centroid.js";
import "./QueryEngineResult.js";
import "./quantizationUtils.js";
import "./WhereClause.js";
import "./utils3.js";
import "./generateRendererUtils.js";
import "./utils4.js";
import "./QueryEngineCapabilities.js";
import "./timeSupport.js";
const t = /^\s*"([\S\s]*)"\s*$/, n = /""/g, i = "\n", r = [",", " ", ";", "|", "	"];
function* l(e, t2, n2) {
  let i2 = 0;
  for (; i2 <= e.length; ) {
    const r2 = e.indexOf(t2, i2), l2 = e.substring(i2, r2 > -1 ? r2 : void 0);
    i2 += l2.length + t2.length, n2 && !l2.trim() || (yield l2);
  }
}
function o(e) {
  const t2 = e.includes("\r\n") ? "\r\n" : i;
  return l(e, t2, true);
}
function u(e, t2) {
  return l(e, t2, false);
}
function s(e, t2, n2) {
  var _a;
  e = e.trim(), t2 = t2 == null ? void 0 : t2.trim();
  const i2 = [], l2 = Array.from(new Set([n2 == null ? void 0 : n2.delimiter, ...r])).filter((e2) => e2 != null);
  for (const r2 of l2) {
    const n3 = f(e, r2).length, l3 = (_a = f(t2, r2).length) != null ? _a : n3;
    n3 > 1 && i2.push({ weight: Math.min(n3, l3), delimiter: r2 });
  }
  const o2 = i2.sort(({ weight: e2 }, { weight: t3 }) => t3 - e2).map(({ delimiter: e2 }) => e2);
  for (const r2 of o2) {
    const t3 = g(a(e, r2).names, n2 == null ? void 0 : n2.longitudeField, n2 == null ? void 0 : n2.latitudeField);
    if (t3.longitudeFieldName && t3.latitudeFieldName)
      return { delimiter: r2, locationInfo: t3 };
  }
  return { delimiter: o2[0], locationInfo: null };
}
function* c(e, r2, l2, s2 = () => Object.create(null)) {
  const c2 = o(e);
  c2.next();
  let a2 = "", f2 = "", g2 = 0, m2 = s2(), p2 = 0;
  e:
    for (const o2 of c2) {
      const e2 = u(o2, l2);
      for (const i2 of e2)
        if (a2 += f2 + i2, f2 = "", g2 += d(i2), g2 % 2 == 0) {
          if (g2 > 0) {
            const e3 = t.exec(a2);
            if (!e3) {
              m2 = s2(), p2 = 0, a2 = "", g2 = 0;
              continue e;
            }
            m2[r2[p2]] = e3[1].replace(n, '"'), p2++;
          } else
            m2[r2[p2]] = a2, p2++;
          a2 = "", g2 = 0;
        } else
          f2 = l2;
      g2 === 0 ? (yield m2, m2 = s2(), p2 = 0) : f2 = i;
    }
}
function a(e, t2) {
  const n2 = f(e, t2).filter((e2) => e2 != null), i2 = n2.map((e2) => $(e2));
  for (let r2 = i2.length - 1; r2 >= 0; r2--)
    i2[r2] || (i2.splice(r2, 1), n2.splice(r2, 1));
  return { names: i2, aliases: n2 };
}
function f(e, i2) {
  if (!(e == null ? void 0 : e.length))
    return [];
  const r2 = [];
  let l2 = "", o2 = "", s2 = 0;
  const c2 = u(e, i2);
  for (const u2 of c2)
    if (l2 += o2 + u2, o2 = "", s2 += d(u2), s2 % 2 == 0) {
      if (s2 > 0) {
        const e2 = t.exec(l2);
        e2 && r2.push(e2[1].replace(n, '"'));
      } else
        r2.push(l2);
      l2 = "", s2 = 0;
    } else
      o2 = i2;
  return r2;
}
function d(e) {
  let t2 = 0, n2 = 0;
  for (n2 = e.indexOf('"', n2); n2 >= 0; )
    t2++, n2 = e.indexOf('"', n2 + 1);
  return t2;
}
function g(e, t2, n2) {
  var _a, _b;
  t2 = (_a = $(t2)) == null ? void 0 : _a.toLowerCase(), n2 = (_b = $(n2)) == null ? void 0 : _b.toLowerCase();
  const i2 = e.map((e2) => e2.toLowerCase()), r2 = t2 ? e[i2.indexOf(t2)] : null, l2 = n2 ? e[i2.indexOf(n2)] : null;
  return { longitudeFieldName: r2 || e[i2.indexOf(F.find((e2) => i2.includes(e2)))], latitudeFieldName: l2 || e[i2.indexOf(y.find((e2) => i2.includes(e2)))] };
}
function m(e, t2, n2, i2, r2) {
  const l2 = [], o2 = c(e, n2, t2), u2 = [];
  for (const s2 of o2) {
    if (u2.length === 10)
      break;
    u2.push(s2);
  }
  for (let s2 = 0; s2 < n2.length; s2++) {
    const e2 = n2[s2], t3 = i2[s2];
    if (e2 === r2.longitudeFieldName || e2 === r2.latitudeFieldName)
      l2.push({ name: e2, type: "esriFieldTypeDouble", alias: t3 });
    else {
      let n3, i3;
      switch (p(u2.map((t4) => t4[e2]))) {
        case "integer":
          n3 = "esriFieldTypeInteger";
          break;
        case "double":
          n3 = "esriFieldTypeDouble";
          break;
        case "date":
          n3 = "esriFieldTypeDate", i3 = 36;
          break;
        default:
          n3 = "esriFieldTypeString", i3 = 255;
      }
      l2.push({ name: e2, type: n3, alias: t3, length: i3 });
    }
  }
  return l2;
}
function p(e) {
  if (!e.length)
    return "string";
  const t2 = /[^+-.,0-9]/;
  return e.map((e2) => {
    let n2 = false;
    if (e2 !== "") {
      if (t2.test(e2))
        n2 = true;
      else {
        let t3 = h(e2);
        if (!isNaN(t3))
          return /[.,]/.test(e2) || !Number.isInteger(t3) || t3 > 214783647 || t3 < -214783648 ? "double" : "integer";
        if (e2.includes("E")) {
          if (t3 = Number(e2), !isNaN(t3))
            return "double";
          if (e2.includes(",")) {
            if (e2 = e2.replace(",", "."), t3 = Number(e2), !isNaN(t3))
              return "double";
            n2 = true;
          } else
            n2 = true;
        } else
          n2 = true;
      }
      if (n2) {
        if (!/^[-]?\d*[.,]?\d*$/.test(e2)) {
          return b(new Date(e2), e2) ? "date" : "string";
        }
        return "string";
      }
      return "string";
    }
  }).reduce((e2, t3) => e2 === void 0 ? t3 : t3 === void 0 ? e2 : e2 === t3 ? t3 : e2 === "string" || t3 === "string" ? "string" : e2 === "double" || t3 === "double" ? "double" : void 0);
}
function b(e, t2) {
  if (!e || Object.prototype.toString.call(e) !== "[object Date]" || isNaN(e.getTime()))
    return false;
  let n2 = true;
  if (!x && /\d+\W*$/.test(t2)) {
    const e2 = t2.match(/[a-zA-Z]{2,}/);
    if (e2) {
      let t3 = false, i2 = 0;
      for (; !t3 && i2 <= e2.length; )
        t3 = !N.test(e2[i2]), i2++;
      n2 = !t3;
    }
  }
  return n2;
}
const h = function() {
  const t2 = a$1(), n2 = new RegExp("^" + t2.regexp + "$"), i2 = new RegExp("[" + t2.group + "\\s\\xa0]", "g"), r2 = t2.factor;
  return (e) => {
    const l2 = n2.exec(e);
    if (t2.factor = r2, !l2)
      return NaN;
    let o2 = l2[1];
    if (!l2[1]) {
      if (!l2[2])
        return NaN;
      o2 = l2[2], t2.factor *= -1;
    }
    return o2 = o2.replace(i2, "").replace(t2.decimal, "."), +o2 * t2.factor;
  };
}(), N = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i, x = Number.isNaN(new Date("technology 10").getTime()), y = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point_y"], F = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point_x"], w = /^([0-9])/, _ = /[^A-Za-z0-9_\u0080-\uffff]/g, O$1 = /_{2,}/g, j = /^_/, T = /_$/;
function $(e) {
  return e ? e.trim().replace(_, "_").replace(O$1, "_").replace(j, "").replace(T, "").replace(w, "F$1") : null;
}
const C = o$1("esriGeometryPoint"), v = ["csv"], O = [0, 0];
class D {
  constructor(e, t2) {
    this.x = e, this.y = t2;
  }
}
class k {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e) => {
      const t2 = await this._fetch(e);
      return this._createFeatures(t2);
    };
  }
  destroy() {
    var _a;
    (_a = this._queryEngine) == null ? void 0 : _a.destroy(), this._queryEngine = null;
  }
  async load(e, t2 = {}) {
    var _a;
    this._loadOptions = e;
    const [i2] = await Promise.all([this._fetch(t2.signal), this._checkProjection((_a = e == null ? void 0 : e.parsingOptions) == null ? void 0 : _a.spatialReference)]), n2 = P(i2, e);
    this._locationInfo = n2.locationInfo, this._delimiter = n2.delimiter, this._queryEngine = this._createQueryEngine(n2);
    const r2 = await this._createFeatures(i2);
    if (this._queryEngine.featureStore.addMany(r2), n2.layerDefinition.extent = this._queryEngine.fullExtent, n2.layerDefinition.timeInfo) {
      const { start: e2, end: t3 } = this._queryEngine.timeExtent;
      n2.layerDefinition.timeInfo.timeExtent = [e2, t3];
    }
    return n2;
  }
  async applyEdits() {
    throw new s$1("csv-layer:editing-not-supported", "applyEdits() is not supported on CSVLayer");
  }
  async queryFeatures(e = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t2.signal);
  }
  async queryFeatureCount(e = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t2.signal);
  }
  async queryObjectIds(e = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t2.signal);
  }
  async queryExtent(e = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t2.signal);
  }
  async querySnapping(e, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e, t2.signal);
  }
  async refresh(e) {
    var _a;
    return this._loadOptions.customParameters = e, (_a = this._snapshotTask) == null ? void 0 : _a.abort(), this._snapshotTask = j$1(this._snapshotFeatures), this._snapshotTask.promise.then((e2) => {
      this._queryEngine.featureStore.clear(), e2 && this._queryEngine.featureStore.addMany(e2);
    }, (e2) => {
      this._queryEngine.featureStore.clear(), j$2(e2) || s$2.getLogger("esri.layers.CSVLayer").error(new s$1("csv-layer:refresh", "An error occurred during refresh", { error: e2 }));
    }), await this._waitSnapshotComplete(), { extent: this._queryEngine.fullExtent, timeExtent: this._queryEngine.timeExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(t2) {
    const { url: n2, customParameters: r2 } = this._loadOptions;
    if (!n2)
      throw new s$1("csv-layer:invalid-source", "url not defined");
    const o2 = j$3(n2);
    return (await U(o2.path, { query: __spreadValues(__spreadValues({}, o2.query), r2), responseType: "text", signal: t2 })).data;
  }
  _createQueryEngine(e) {
    const { objectIdField: t2, fields: i2, extent: n2, timeInfo: r2 } = e.layerDefinition, s2 = new u$1({ geometryType: "esriGeometryPoint", hasM: false, hasZ: false });
    return new Y({ fields: i2, geometryType: "esriGeometryPoint", hasM: false, hasZ: false, timeInfo: r2, objectIdField: t2, spatialReference: n2.spatialReference || { wkid: 4326 }, cacheSpatialQueries: true, featureStore: s2 });
  }
  async _createFeatures(e) {
    const { latitudeFieldName: t2, longitudeFieldName: i2 } = this._locationInfo, { objectIdField: n2, fieldsIndex: r2, spatialReference: s2 } = this._queryEngine;
    let o2 = [];
    const u2 = [], y2 = r2.fields.filter((e2) => e2.name !== n2).map((e2) => e2.name);
    let h$1 = 0;
    const g2 = {};
    for (const a2 of r2.fields)
      if (a2.type !== "esriFieldTypeOID" && a2.type !== "esriFieldTypeGlobalID") {
        const e2 = M(a2);
        e2 !== void 0 && (g2[a2.name] = e2);
      }
    const w2 = c(e, y2, this._delimiter, i$1(g2, n2));
    for (const a2 of w2) {
      const e2 = this._parseCoordinateValue(a2[t2]), s3 = this._parseCoordinateValue(a2[i2]);
      if (s3 != null && e2 != null && !isNaN(e2) && !isNaN(s3)) {
        a2[t2] = e2, a2[i2] = s3;
        for (const e3 in a2)
          if (e3 !== t2 && e3 !== i2) {
            if (r2.isDateField(e3)) {
              const t3 = new Date(a2[e3]);
              a2[e3] = b(t3, a2[e3]) ? t3.getTime() : null;
            } else if (r2.isNumericField(e3)) {
              const t3 = h(a2[e3]);
              isNaN(t3) ? a2[e3] = null : a2[e3] = t3;
            }
          }
        a2[n2] = h$1, h$1++, o2.push(new D(s3, e2)), u2.push(a2);
      }
    }
    if (!E({ wkid: 4326 }, s2))
      if (k$1(s2))
        for (const a2 of o2)
          [a2.x, a2.y] = y$1(a2.x, a2.y, O);
      else
        o2 = ln(t$1, o2, k$2.WGS84, s2, null, null);
    const E$1 = [];
    for (let a2 = 0; a2 < o2.length; a2++) {
      const { x: e2, y: t3 } = o2[a2], i3 = u2[a2];
      i3[n2] = a2 + 1, E$1.push(new s$3(new t$2([], [e2, t3]), i3, null, i3[n2]));
    }
    return E$1;
  }
  _parseCoordinateValue(e) {
    if (e == null || e === "")
      return null;
    let t2 = h(e);
    return (isNaN(t2) || Math.abs(t2) > 181) && (t2 = parseFloat(e)), t2;
  }
  async _checkProjection(e) {
    try {
      await f$1(c$1, e);
    } catch {
      throw new s$1("csv-layer:projection-not-supported", "Projection not supported");
    }
  }
}
function P(e, t2) {
  var _a, _b, _c;
  const n2 = t2.parsingOptions || {}, r2 = { delimiter: n2.delimiter, layerDefinition: null, locationInfo: { latitudeFieldName: n2.latitudeField, longitudeFieldName: n2.longitudeField } }, s$22 = r2.layerDefinition = { name: Ut(t2.url, v) || "csv", drawingInfo: C, geometryType: "esriGeometryPoint", objectIdField: null, fields: [], timeInfo: n2.timeInfo, extent: { xmin: Number.POSITIVE_INFINITY, ymin: Number.POSITIVE_INFINITY, xmax: Number.NEGATIVE_INFINITY, ymax: Number.NEGATIVE_INFINITY, spatialReference: n2.spatialReference || { wkid: 102100 } } }, a$12 = o(e), l2 = (_a = a$12.next().value) == null ? void 0 : _a.trim(), c2 = (_b = a$12.next().value) == null ? void 0 : _b.trim();
  if (!l2)
    throw new s$1("csv-layer:empty-csv", "CSV is empty", { csv: e });
  const { delimiter: m$1, locationInfo: u2 } = s(l2, c2, n2);
  if (!m$1)
    throw new s$1("csv-layer:invalid-delimiter", "Unable to detect the delimiter from CSV", { firstLine: l2, secondLine: c2, parsingOptions: n2 });
  if (!u2)
    throw new s$1("csv-layer:location-fields-not-found", "Unable to identify latitude and longitude fields from the CSV file", { firstLine: l2, secondLine: c2, parsingOptions: n2 });
  r2.locationInfo = u2, r2.delimiter = m$1;
  const { names: d2, aliases: p2 } = a(l2, m$1), f2 = m(e, r2.delimiter, d2, p2, r2.locationInfo);
  if ((_c = n2.fields) == null ? void 0 : _c.length) {
    const e2 = new r$1(n2.fields);
    for (const t3 of f2) {
      const i2 = e2.get(t3.name);
      i2 && Object.assign(t3, i2);
    }
  }
  if (!f2.some((e2) => e2.type === "esriFieldTypeOID" && (s$22.objectIdField = e2.name, true))) {
    const e2 = { name: "__OBJECTID", alias: "__OBJECTID", type: "esriFieldTypeOID", editable: false, nullable: false };
    s$22.objectIdField = e2.name, f2.unshift(e2);
  }
  s$22.fields = f2;
  const y2 = new r$1(s$22.fields);
  if (r2.locationInfo && (r2.locationInfo.latitudeFieldName = y2.get(r2.locationInfo.latitudeFieldName).name, r2.locationInfo.longitudeFieldName = y2.get(r2.locationInfo.longitudeFieldName).name), s$22.timeInfo) {
    const e2 = s$22.timeInfo;
    if (e2.startTimeField) {
      const t3 = y2.get(e2.startTimeField);
      t3 ? (e2.startTimeField = t3.name, t3.type = "esriFieldTypeDate") : e2.startTimeField = null;
    }
    if (e2.endTimeField) {
      const t3 = y2.get(e2.endTimeField);
      t3 ? (e2.endTimeField = t3.name, t3.type = "esriFieldTypeDate") : e2.endTimeField = null;
    }
    if (e2.trackIdField) {
      const t3 = y2.get(e2.trackIdField);
      e2.trackIdField = t3 ? t3.name : null;
    }
    e2.startTimeField || e2.endTimeField || (s$22.timeInfo = null);
  }
  return r2;
}
export { k as default };
