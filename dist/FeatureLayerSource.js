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
import { g1 as o$1, t, e5 as c$3, c6 as pt, b$ as rt, b1 as f$1, dr as f$2, cO as x, fI as f$3, hI as S$1, hJ as o$2, hK as a$4, U, hL as t$1, hM as c$4, fG as x$1, cr as w, hN as d$2, cE as x$2, a as r$1, dF as v, ha as G, ar as c$5, hO as r$2, bO as j$1, hP as v$1, $ as e, a0 as y$1, a1 as n$5, Z as m$3, hQ as K, h as has, hR as a$5, e6 as y$2, g as s$5, ck as s$6, hS as m$4, cY as x$3, hT as i$1, k as e$1, dB as T$1, fF as g$1, hU as o$4, aK as k, cC as g$2, c0 as v$2, cm as nt } from "./index.js";
import { o as o$3 } from "./clientSideDefaults.js";
import { n as n$6, s as s$4 } from "./executeForIds.js";
import "vue";
import "./QueryEngineCapabilities.js";
var E$1;
!function(E2) {
  E2[E2.PROJECT_VERTICES = 1] = "PROJECT_VERTICES";
}(E$1 || (E$1 = {}));
function n$4(e2, t2) {
  return t2;
}
function a$3(e2, t2, r2, s2) {
  switch (r2) {
    case 0:
      return c$2(e2, t2 + s2, 0);
    case 1:
      return e2.originPosition === "lowerLeft" ? c$2(e2, t2 + s2, 1) : l$1(e2, t2 + s2, 1);
  }
}
function h(e2, t2, r2, s2) {
  return r2 === 2 ? c$2(e2, t2, 2) : a$3(e2, t2, r2, s2);
}
function u$1(e2, t2, r2, s2) {
  return r2 === 2 ? c$2(e2, t2, 3) : a$3(e2, t2, r2, s2);
}
function d$1(e2, t2, r2, s2) {
  return r2 === 3 ? c$2(e2, t2, 3) : h(e2, t2, r2, s2);
}
function c$2({ translate: e2, scale: t2 }, r2, s2) {
  return e2[s2] + r2 * t2[s2];
}
function l$1({ translate: e2, scale: t2 }, r2, s2) {
  return e2[s2] - r2 * t2[s2];
}
class f {
  constructor(e2) {
    this._options = e2, this.geometryTypes = ["esriGeometryPoint", "esriGeometryMultipoint", "esriGeometryPolyline", "esriGeometryPolygon"], this._previousCoordinate = [0, 0], this._transform = null, this._applyTransform = n$4, this._lengths = [], this._currentLengthIndex = 0, this._toAddInCurrentPath = 0, this._vertexDimension = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, this._attributesConstructor = class {
    };
  }
  createFeatureResult() {
    return { fields: [], features: [] };
  }
  finishFeatureResult(t$12) {
    if (this._options.applyTransform && (t$12.transform = null), this._attributesConstructor = class {
    }, this._coordinateBuffer = null, this._lengths.length = 0, !t$12.hasZ)
      return;
    const r2 = o$1(t$12.geometryType, this._options.sourceSpatialReference, t$12.spatialReference);
    if (!t(r2))
      for (const e2 of t$12.features)
        r2(e2.geometry);
  }
  createSpatialReference() {
    return {};
  }
  addField(e2, r2) {
    const s2 = e2.fields;
    c$3(s2), s2.push(r2);
    const o2 = s2.map((e3) => e3.name);
    this._attributesConstructor = function() {
      for (const e3 of o2)
        this[e3] = null;
    };
  }
  addFeature(e2, t2) {
    e2.features.push(t2);
  }
  prepareFeatures(e2) {
    switch (this._transform = e2.transform, this._options.applyTransform && e2.transform && (this._applyTransform = this._deriveApplyTransform(e2)), this._vertexDimension = 2, e2.hasZ && this._vertexDimension++, e2.hasM && this._vertexDimension++, e2.geometryType) {
      case "esriGeometryPoint":
        this.addCoordinate = (e3, t2, r2) => this.addCoordinatePoint(e3, t2, r2), this.createGeometry = (e3) => this.createPointGeometry(e3);
        break;
      case "esriGeometryPolygon":
        this.addCoordinate = (e3, t2, r2) => this._addCoordinatePolygon(e3, t2, r2), this.createGeometry = (e3) => this._createPolygonGeometry(e3);
        break;
      case "esriGeometryPolyline":
        this.addCoordinate = (e3, t2, r2) => this._addCoordinatePolyline(e3, t2, r2), this.createGeometry = (e3) => this._createPolylineGeometry(e3);
        break;
      case "esriGeometryMultipoint":
        this.addCoordinate = (e3, t2, r2) => this._addCoordinateMultipoint(e3, t2, r2), this.createGeometry = (e3) => this._createMultipointGeometry(e3);
    }
  }
  createFeature() {
    return this._lengths.length = 0, this._currentLengthIndex = 0, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, { attributes: new this._attributesConstructor() };
  }
  allocateCoordinates() {
  }
  addLength(e2, t2, r2) {
    this._lengths.length === 0 && (this._toAddInCurrentPath = t2), this._lengths.push(t2);
  }
  addQueryGeometry(e2, t2) {
    const { queryGeometry: r2, queryGeometryType: s2 } = t2, n2 = pt(r2.clone(), r2, false, false, this._transform), a2 = rt(n2, s2, false, false);
    e2.queryGeometryType = s2, e2.queryGeometry = __spreadValues({}, a2);
  }
  createPointGeometry(e2) {
    const t2 = { x: 0, y: 0, spatialReference: e2.spatialReference };
    return e2.hasZ && (t2.z = 0), e2.hasM && (t2.m = 0), t2;
  }
  addCoordinatePoint(e2, t2, s2) {
    const o2 = f$1(this._transform, "transform");
    switch (t2 = this._applyTransform(o2, t2, s2, 0), s2) {
      case 0:
        e2.x = t2;
        break;
      case 1:
        e2.y = t2;
        break;
      case 2:
        "z" in e2 ? e2.z = t2 : e2.m = t2;
        break;
      case 3:
        e2.m = t2;
    }
  }
  _transformPathLikeValue(e2, t2) {
    let s2 = 0;
    t2 <= 1 && (s2 = this._previousCoordinate[t2], this._previousCoordinate[t2] += e2);
    const o2 = f$1(this._transform, "transform");
    return this._applyTransform(o2, e2, t2, s2);
  }
  _addCoordinatePolyline(e2, t2, r2) {
    this._dehydratedAddPointsCoordinate(e2.paths, t2, r2);
  }
  _addCoordinatePolygon(e2, t2, r2) {
    this._dehydratedAddPointsCoordinate(e2.rings, t2, r2);
  }
  _addCoordinateMultipoint(e2, t2, r2) {
    r2 === 0 && e2.points.push([]);
    const s2 = this._transformPathLikeValue(t2, r2);
    e2.points[e2.points.length - 1].push(s2);
  }
  _createPolygonGeometry(e2) {
    return { rings: [[]], spatialReference: e2.spatialReference, hasZ: !!e2.hasZ, hasM: !!e2.hasM };
  }
  _createPolylineGeometry(e2) {
    return { paths: [[]], spatialReference: e2.spatialReference, hasZ: !!e2.hasZ, hasM: !!e2.hasM };
  }
  _createMultipointGeometry(e2) {
    return { points: [], spatialReference: e2.spatialReference, hasZ: !!e2.hasZ, hasM: !!e2.hasM };
  }
  _dehydratedAddPointsCoordinate(e2, t2, r2) {
    r2 === 0 && this._toAddInCurrentPath-- == 0 && (e2.push([]), this._toAddInCurrentPath = this._lengths[++this._currentLengthIndex] - 1, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0);
    const s2 = this._transformPathLikeValue(t2, r2), o2 = e2[e2.length - 1];
    r2 === 0 && (this._coordinateBufferPtr = 0, this._coordinateBuffer = new Array(this._vertexDimension), o2.push(this._coordinateBuffer)), this._coordinateBuffer[this._coordinateBufferPtr++] = s2;
  }
  _deriveApplyTransform(e2) {
    const { hasZ: t2, hasM: r2 } = e2;
    return t2 && r2 ? d$1 : t2 ? h : r2 ? u$1 : a$3;
  }
}
async function n$3(o2, s2, n2) {
  const p2 = f$2(o2), i2 = __spreadValues({}, n2), u2 = x.from(s2), m2 = !u2.quantizationParameters, { data: f$12 } = await f$3(p2, u2, new f({ sourceSpatialReference: u2.sourceSpatialReference, applyTransform: m2 }), i2);
  return f$12;
}
function n$2(t2) {
  const o2 = t2.toJSON();
  return o2.attachmentTypes && (o2.attachmentTypes = o2.attachmentTypes.join(",")), o2.keywords && (o2.keywords = o2.keywords.join(",")), o2.globalIds && (o2.globalIds = o2.globalIds.join(",")), o2.objectIds && (o2.objectIds = o2.objectIds.join(",")), o2.size && (o2.size = o2.size.join(",")), o2;
}
function a$2(o2, r2) {
  const n2 = {};
  for (const a2 of o2) {
    const { parentObjectId: o3, parentGlobalId: c2, attachmentInfos: i2 } = a2;
    for (const a3 of i2) {
      const { id: i3 } = a3, m2 = S$1(o$2(`${r2}/${o3}/attachments/${i3}`)), p2 = a$4.fromJSON(a3);
      p2.set({ url: m2, parentObjectId: o3, parentGlobalId: c2 }), n2[o3] ? n2[o3].push(p2) : n2[o3] = [p2];
    }
  }
  return n2;
}
function c$1(t2, e2, s2) {
  let a2 = { query: t$1(__spreadValues(__spreadProps(__spreadValues({}, t2.query), { f: "json" }), n$2(e2))) };
  return s2 && (a2 = __spreadProps(__spreadValues(__spreadValues({}, s2), a2), { query: __spreadValues(__spreadValues({}, s2.query), a2.query) })), U(t2.path + "/queryAttachments", a2);
}
async function a$1(a2, m2, n2) {
  const s2 = f$2(a2);
  return c$1(s2, c$4.from(m2), __spreadValues({}, n2)).then((t2) => a$2(t2.data.attachmentGroups, s2.path));
}
async function m$2(m2, n2, s2) {
  const p2 = f$2(m2);
  return x$1(p2, x.from(n2), __spreadValues({}, s2)).then((t2) => ({ count: t2.data.count, extent: w.fromJSON(t2.data.extent) }));
}
function o(e2, t2) {
  const o2 = e2.toJSON();
  return o2.objectIds && (o2.objectIds = o2.objectIds.join(",")), o2.orderByFields && (o2.orderByFields = o2.orderByFields.join(",")), o2.outFields && !(t2 == null ? void 0 : t2.returnCountOnly) ? o2.outFields.includes("*") ? o2.outFields = "*" : o2.outFields = o2.outFields.join(",") : delete o2.outFields, o2.outSpatialReference && (o2.outSR = o2.outSR.wkid || JSON.stringify(o2.outSR.toJSON()), delete o2.outSpatialReference), o2.dynamicDataSource && (o2.layer = JSON.stringify({ source: o2.dynamicDataSource }), delete o2.dynamicDataSource), o2;
}
async function r(e2, t2, o2) {
  const r2 = await s$3(e2, t2, o2), n2 = r2.data, a2 = n2.geometryType, d2 = n2.spatialReference, c2 = {};
  for (const s2 of n2.relatedRecordGroups) {
    const e3 = { fields: void 0, objectIdFieldName: void 0, geometryType: a2, spatialReference: d2, hasZ: !!n2.hasZ, hasM: !!n2.hasM, features: s2.relatedRecords };
    if (s2.objectId != null)
      c2[s2.objectId] = e3;
    else
      for (const t3 in s2)
        s2.hasOwnProperty(t3) && t3 !== "relatedRecords" && (c2[s2[t3]] = e3);
  }
  return __spreadProps(__spreadValues({}, r2), { data: c2 });
}
async function n$1(e2, t2, o2) {
  const r2 = await s$3(e2, t2, o2, { returnCountOnly: true }), n2 = r2.data, a2 = {};
  for (const s2 of n2.relatedRecordGroups)
    s2.objectId != null && (a2[s2.objectId] = s2.count);
  return __spreadProps(__spreadValues({}, r2), { data: a2 });
}
async function s$3(r2, n2, s2 = {}, a2) {
  const d2 = t$1(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, r2.query), { f: "json" }), a2), o(n2, a2)));
  return U(r2.path + "/queryRelatedRecords", __spreadProps(__spreadValues({}, s2), { query: __spreadValues(__spreadValues({}, s2.query), d2) }));
}
async function n(e2, n2, u2) {
  n2 = d$2.from(n2);
  const a2 = f$2(e2);
  return r(a2, n2, u2).then((t2) => {
    const r2 = t2.data, e3 = {};
    return Object.keys(r2).forEach((t3) => e3[t3] = x$2.fromJSON(r2[t3])), e3;
  });
}
async function u(r2, o2, n2) {
  o2 = d$2.from(o2);
  const u2 = f$2(r2);
  return n$1(u2, o2, __spreadValues({}, n2)).then((t2) => t2.data);
}
const l = "Layer does not support extent calculation.";
function y(t2, r2) {
  var _a, _b;
  const o2 = t2.geometry, i2 = t2.toJSON(), s2 = i2;
  if (r$1(o2) && (s2.geometry = JSON.stringify(o2), s2.geometryType = c$5(o2), s2.inSR = o2.spatialReference.wkid || JSON.stringify(o2.spatialReference)), ((_a = i2.topFilter) == null ? void 0 : _a.groupByFields) && (s2.topFilter.groupByFields = i2.topFilter.groupByFields.join(",")), ((_b = i2.topFilter) == null ? void 0 : _b.orderByFields) && (s2.topFilter.orderByFields = i2.topFilter.orderByFields.join(",")), i2.topFilter && (s2.topFilter = JSON.stringify(s2.topFilter)), i2.objectIds && (s2.objectIds = i2.objectIds.join(",")), i2.orderByFields && (s2.orderByFields = i2.orderByFields.join(",")), i2.outFields && !((r2 == null ? void 0 : r2.returnCountOnly) || (r2 == null ? void 0 : r2.returnExtentOnly) || (r2 == null ? void 0 : r2.returnIdsOnly)) ? i2.outFields.includes("*") ? s2.outFields = "*" : s2.outFields = i2.outFields.join(",") : delete s2.outFields, i2.outSR ? s2.outSR = i2.outSR.wkid || JSON.stringify(i2.outSR) : o2 && i2.returnGeometry && (s2.outSR = s2.inSR), i2.returnGeometry && delete i2.returnGeometry, i2.timeExtent) {
    const t3 = i2.timeExtent, { start: e2, end: r3 } = t3;
    e2 == null && r3 == null || (s2.time = e2 === r3 ? e2 : `${e2 != null ? e2 : "null"},${r3 != null ? r3 : "null"}`), delete i2.timeExtent;
  }
  return s2;
}
async function d(t2, e2, r2, o2) {
  const n2 = await c(t2, e2, "json", o2);
  return r$2(e2, r2, n2.data), n2;
}
async function m$1(t2, r2, o2) {
  return r$1(r2.timeExtent) && r2.timeExtent.isEmpty ? { data: { objectIds: [] } } : c(t2, r2, "json", o2, { returnIdsOnly: true });
}
async function p$1(t2, r2, o2) {
  return r$1(r2.timeExtent) && r2.timeExtent.isEmpty ? { data: { count: 0, extent: null } } : c(t2, r2, "json", o2, { returnExtentOnly: true, returnCountOnly: true }).then((t3) => {
    const e2 = t3.data;
    if (e2.hasOwnProperty("extent"))
      return t3;
    if (e2.features)
      throw new Error(l);
    if (e2.hasOwnProperty("count"))
      throw new Error(l);
    return t3;
  });
}
function a(t2, r2, o2) {
  return r$1(r2.timeExtent) && r2.timeExtent.isEmpty ? Promise.resolve({ data: { count: 0 } }) : c(t2, r2, "json", o2, { returnIdsOnly: true, returnCountOnly: true });
}
function c(n2, u2, l2, d2 = {}, m2 = {}) {
  const p2 = typeof n2 == "string" ? j$1(n2) : n2, a2 = u2.geometry ? [u2.geometry] : [];
  return d2.responseType = l2 === "pbf" ? "array-buffer" : "json", v(a2, null, d2).then((r2) => {
    const n3 = r2 && r2[0];
    r$1(n3) && ((u2 = u2.clone()).geometry = n3);
    const i2 = t$1(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, p2.query), { f: l2 }), m2), y(u2, m2)));
    return U(G(p2.path, "queryTopFeatures"), __spreadProps(__spreadValues({}, d2), { query: __spreadValues(__spreadValues({}, i2), d2.query) }));
  });
}
async function s$2(s2, p2, u2, a2) {
  const m2 = f$2(s2), i2 = __spreadValues({}, a2), { data: f2 } = await d(m2, v$1.from(p2), u2, i2);
  return x$2.fromJSON(f2);
}
async function s$1(s2, e2, p2) {
  const a2 = f$2(s2);
  return (await m$1(a2, v$1.from(e2), __spreadValues({}, p2))).data.objectIds;
}
async function m(m2, s2, n2) {
  const p2 = f$2(m2), a2 = await p$1(p2, v$1.from(s2), __spreadValues({}, n2));
  return { count: a2.data.count, extent: w.fromJSON(a2.data.extent) };
}
async function s(s2, e2, p2) {
  const u2 = f$2(s2);
  return (await a(u2, v$1.from(e2), __spreadValues({}, p2))).data.count;
}
let i = class extends m$3 {
  constructor(...r2) {
    super(...r2), this.requestOptions = null, this.url = null;
  }
  normalizeCtorArgs(r2, s2) {
    return typeof r2 != "string" ? r2 : __spreadValues({ url: r2 }, s2);
  }
  get parsedUrl() {
    return this._parseUrl(this.url);
  }
  _parseUrl(r2) {
    return j$1(r2);
  }
  _encode(r2, s2, t2) {
    const e2 = {};
    for (const o2 in r2) {
      if (o2 === "declaredClass")
        continue;
      const i2 = r2[o2];
      if (i2 != null && typeof i2 != "function")
        if (Array.isArray(i2)) {
          e2[o2] = [];
          for (let r3 = 0; r3 < i2.length; r3++)
            e2[o2][r3] = this._encode(i2[r3]);
        } else if (typeof i2 == "object")
          if (i2.toJSON) {
            const r3 = i2.toJSON(t2 && t2[o2]);
            e2[o2] = s2 ? r3 : JSON.stringify(r3);
          } else
            e2[o2] = s2 ? i2 : JSON.stringify(i2);
        else
          e2[o2] = i2;
    }
    return e2;
  }
};
e([y$1({ readOnly: true })], i.prototype, "parsedUrl", null), e([y$1()], i.prototype, "requestOptions", void 0), e([y$1({ type: String })], i.prototype, "url", void 0), i = e([n$5("esri.tasks.Task")], i);
const p = i;
let q = class extends p {
  constructor(t2) {
    super(t2), this.dynamicDataSource = null, this.fieldsIndex = null, this.format = "json", this.gdbVersion = null, this.infoFor3D = null, this.sourceSpatialReference = null;
  }
  async execute(t2, e2) {
    const r2 = await this.executeJSON(t2, e2);
    return this.featureSetFromJSON(t2, r2, e2);
  }
  async executeJSON(t2, e2) {
    var _a;
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2), s2 = ((_a = t2.outStatistics) == null ? void 0 : _a[0]) != null, i2 = has("featurelayer-pbf-statistics"), u2 = !s2 || i2;
    let n2;
    if (this.format === "pbf" && u2)
      try {
        n2 = await n$3(this.url, o2, r2);
      } catch (p2) {
        if (p2.name !== "query:parsing-pbf")
          throw p2;
        this.format = "json";
      }
    return this.format !== "json" && u2 || (n2 = await a$5(this.url, o2, r2)), this._normalizeFields(n2.fields), n2;
  }
  async featureSetFromJSON(t$12, e2, o2) {
    if (!this._queryIs3DObjectFormat(t$12) || t(this.infoFor3D) || !e2.assetMaps || !e2.features || !e2.features.length)
      return x$2.fromJSON(e2);
    const { meshFeatureSetFromJSON: i2 } = await y$2(import("./meshFeatureSet.js").then(function(n2) {
      return n2.a;
    }), o2);
    return i2(t$12, this.infoFor3D, e2);
  }
  executeForCount(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2);
    return n$6(this.url, o2, r2);
  }
  executeForExtent(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2);
    return m$2(this.url, o2, r2);
  }
  executeForIds(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2), o2 = this._normalizeQuery(t2);
    return s$4(this.url, o2, r2);
  }
  executeRelationshipQuery(t2, e2) {
    t2 = d$2.from(t2);
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return (this.gdbVersion || this.dynamicDataSource) && ((t2 = t2.clone()).gdbVersion = t2.gdbVersion || this.gdbVersion, t2.dynamicDataSource = t2.dynamicDataSource || this.dynamicDataSource), n(this.url, t2, r2);
  }
  executeRelationshipQueryForCount(t2, e2) {
    t2 = d$2.from(t2);
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return (this.gdbVersion || this.dynamicDataSource) && ((t2 = t2.clone()).gdbVersion = t2.gdbVersion || this.gdbVersion, t2.dynamicDataSource = t2.dynamicDataSource || this.dynamicDataSource), u(this.url, t2, r2);
  }
  executeAttachmentQuery(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return a$1(this.url, t2, r2);
  }
  executeTopFeaturesQuery(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return s$2(this.parsedUrl, t2, this.sourceSpatialReference, r2);
  }
  executeForTopIds(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return s$1(this.parsedUrl, t2, r2);
  }
  executeForTopExtents(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return m(this.parsedUrl, t2, r2);
  }
  executeForTopCount(t2, e2) {
    const r2 = __spreadValues(__spreadValues({}, this.requestOptions), e2);
    return s(this.parsedUrl, t2, r2);
  }
  _normalizeQuery(t$12) {
    let s2 = x.from(t$12);
    if (s2.sourceSpatialReference = s2.sourceSpatialReference || this.sourceSpatialReference, (this.gdbVersion || this.dynamicDataSource) && (s2 = s2 === t$12 ? s2.clone() : s2, s2.gdbVersion = t$12.gdbVersion || this.gdbVersion, s2.dynamicDataSource = t$12.dynamicDataSource ? K.from(t$12.dynamicDataSource) : this.dynamicDataSource), r$1(this.infoFor3D) && this._queryIs3DObjectFormat(t$12)) {
      s2 = s2 === t$12 ? s2.clone() : s2, s2.formatOf3DObjects = null;
      for (const t2 of this.infoFor3D.queryFormats) {
        if (t2 === "3D_glb") {
          s2.formatOf3DObjects = t2;
          break;
        }
        t2 !== "3D_gltf" || s2.formatOf3DObjects || (s2.formatOf3DObjects = t2);
      }
      if (!s2.formatOf3DObjects)
        throw new s$5("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
      if (t(s2.outFields) || !s2.outFields.includes("*")) {
        s2 = s2 === t$12 ? s2.clone() : s2, t(s2.outFields) && (s2.outFields = []);
        const { originX: e2, originY: o2, originZ: i2, translationX: u2, translationY: n2, translationZ: a2, scaleX: c2, scaleY: p2, scaleZ: m2, rotationX: f2, rotationY: l2, rotationZ: h2, rotationDeg: d2 } = this.infoFor3D.transformFieldRoles;
        s2.outFields.push(e2, o2, i2, u2, n2, a2, c2, p2, m2, f2, l2, h2, d2);
      }
    }
    return s2;
  }
  _normalizeFields(t2) {
    if (r$1(this.fieldsIndex) && r$1(t2))
      for (const e2 of t2) {
        const t3 = this.fieldsIndex.get(e2.name);
        t3 && Object.assign(e2, t3.toJSON());
      }
  }
  _queryIs3DObjectFormat(t2) {
    return r$1(this.infoFor3D) && t2.returnGeometry && t2.multipatchOption !== "xyFootprint" && !t2.outStatistics;
  }
};
e([y$1({ type: K })], q.prototype, "dynamicDataSource", void 0), e([y$1()], q.prototype, "fieldsIndex", void 0), e([y$1()], q.prototype, "format", void 0), e([y$1()], q.prototype, "gdbVersion", void 0), e([y$1()], q.prototype, "infoFor3D", void 0), e([y$1()], q.prototype, "sourceSpatialReference", void 0), q = e([n$5("esri.tasks.QueryTask")], q);
const g = q;
const O = new s$6({ originalAndCurrentFeatures: "original-and-current-features", none: "none" });
async function E(e2) {
  if (typeof e2 == "string") {
    const t2 = nt(e2);
    return t2 || { data: e2 };
  }
  return new Promise((t2, s2) => {
    const a2 = new FileReader();
    a2.readAsDataURL(e2), a2.onload = () => t2(nt(a2.result)), a2.onerror = (e3) => s2(e3);
  });
}
const S = new Set(["Feature Layer", "Table"]), j = new s$6({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
let T = class extends m$4 {
  constructor() {
    super(...arguments), this.type = "feature-layer", this.refresh = x$3(async () => {
      var _a, _b;
      await this.load();
      const e2 = (_a = this.sourceJSON.editingInfo) == null ? void 0 : _a.lastEditDate;
      if (e2 == null)
        return { dataChanged: true, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: true, updates: {} };
      }
      const t2 = e2 !== ((_b = this.sourceJSON.editingInfo) == null ? void 0 : _b.lastEditDate);
      return { dataChanged: t2, updates: t2 ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    });
  }
  load(e2) {
    const t2 = r$1(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON, t2)), Promise.resolve(this);
  }
  get queryTask() {
    const { capabilities: { query: { supportsFormatPBF: e2 } }, parsedUrl: t$12, dynamicDataSource: s2, infoFor3D: a2, gdbVersion: r2, spatialReference: o2, fieldsIndex: i2 } = this.layer, n2 = has("featurelayer-pbf") && e2 && t(a2) ? "pbf" : "json";
    return new g({ url: t$12.path, format: n2, fieldsIndex: i2, infoFor3D: a2, dynamicDataSource: s2, gdbVersion: r2, sourceSpatialReference: o2 });
  }
  async addAttachment(e2, t2) {
    await this.load();
    const a2 = e2.attributes[this.layer.objectIdField], r2 = this.layer.parsedUrl.path + "/" + a2 + "/addAttachment", o2 = this._getLayerRequestOptions(), i2 = this._getFormDataForAttachment(t2, o2.query);
    try {
      const e3 = await U(r2, { body: i2 });
      return this._createFeatureEditResult(e3.data.addAttachmentResult);
    } catch (n2) {
      throw this._createAttachmentErrorResult(a2, n2);
    }
  }
  async updateAttachment(e2, t2, a2) {
    await this.load();
    const r2 = e2.attributes[this.layer.objectIdField], o2 = this.layer.parsedUrl.path + "/" + r2 + "/updateAttachment", i2 = this._getLayerRequestOptions({ query: { attachmentId: t2 } }), n2 = this._getFormDataForAttachment(a2, i2.query);
    try {
      const e3 = await U(o2, { body: n2 });
      return this._createFeatureEditResult(e3.data.updateAttachmentResult);
    } catch (u2) {
      throw this._createAttachmentErrorResult(r2, u2);
    }
  }
  async applyEdits(e2, t2) {
    await this.load();
    const a2 = this.layer.infoFor3D, r2 = r$1(a2), o2 = r2 || (t2 == null ? void 0 : t2.globalIdUsed), i2 = e2.addFeatures.map((e3) => this._serializeFeature(e3, a2)), u2 = e2.updateFeatures.map((e3) => this._serializeFeature(e3, a2)), d2 = this._getFeatureIds(e2.deleteFeatures, o2);
    i$1(i2, u2, this.layer.spatialReference);
    const c2 = [], p2 = [], h2 = [...e2.deleteAttachments];
    for (const s2 of e2.addAttachments)
      c2.push(await this._serializeAttachment(s2));
    for (const s2 of e2.updateAttachments)
      p2.push(await this._serializeAttachment(s2));
    const y2 = c2.length || p2.length || h2.length ? { adds: c2, updates: p2, deletes: h2 } : null;
    let m2, f2 = null;
    if (r2) {
      f2 = new Map();
      const t3 = [];
      for (const a3 of e2.addAssets)
        t3.push(this._serializeAssetMapEditAndUploadAssets(a3, f2));
      const s2 = await Promise.all(t3);
      m2 = s2.length ? { adds: s2, updates: [], deletes: [] } : void 0;
    }
    const g2 = { gdbVersion: (t2 == null ? void 0 : t2.gdbVersion) || this.layer.gdbVersion, rollbackOnFailure: t2 == null ? void 0 : t2.rollbackOnFailureEnabled, useGlobalIds: o2, returnEditMoment: t2 == null ? void 0 : t2.returnEditMoment, usePreviousEditMoment: t2 == null ? void 0 : t2.usePreviousEditMoment, sessionId: t2 == null ? void 0 : t2.sessionId };
    (t2 == null ? void 0 : t2.returnServiceEditsOption) ? (g2.edits = JSON.stringify([{ id: this.layer.layerId, adds: i2, updates: u2, deletes: d2, attachments: y2, assetMaps: e$1(m2) }]), g2.returnServiceEditsOption = O.toJSON(t2 == null ? void 0 : t2.returnServiceEditsOption), g2.returnServiceEditsInSourceSR = t2 == null ? void 0 : t2.returnServiceEditsInSourceSR) : (g2.adds = i2.length ? JSON.stringify(i2) : null, g2.updates = u2.length ? JSON.stringify(u2) : null, g2.deletes = d2.length ? o2 ? JSON.stringify(d2) : d2.join(",") : null, g2.attachments = y2 && JSON.stringify(y2), g2.assetMaps = r$1(m2) ? JSON.stringify(m2) : void 0);
    const R = this._getLayerRequestOptions({ method: "post", query: g2 }), F = (t2 == null ? void 0 : t2.returnServiceEditsOption) ? this.layer.url : this.layer.parsedUrl.path, b = await U(F + "/applyEdits", R);
    if (r2 && b.data != null && b.data.assetMaps != null) {
      const e3 = b.data, t3 = this.layer.objectIdField, a3 = [];
      for (const s2 of e3.addResults)
        s2.success && a3.push(s2.objectId);
      for (const s2 of e3.updateResults)
        s2.success && a3.push(s2.objectId);
      const r3 = this._createRequestQueryOptions(), o3 = await U(F + "/query", __spreadProps(__spreadValues({}, r3), { query: { f: "json", formatOf3DObjects: "3D_glb", where: `OBJECTID IN (${a3.join(",")})`, outFields: `${t3}` } }));
      if (o3 && o3.data && o3.data.assetMaps && r$1(f2)) {
        const e4 = o3.data.assetMaps;
        for (const t4 of e4) {
          const e5 = f2.get(t4.parentGlobalId).geometry;
          r$1(e5) && e5.type === "mesh" && e5.updateExternalSource({ source: [{ name: t4.assetName, source: t4.assetName }], extent: e5.extent });
        }
      }
    }
    return this._createEditsResult(b);
  }
  async deleteAttachments(e2, t2) {
    await this.load();
    const a2 = e2.attributes[this.layer.objectIdField], r2 = this.layer.parsedUrl.path + "/" + a2 + "/deleteAttachments";
    try {
      return (await U(r2, this._getLayerRequestOptions({ query: { attachmentIds: t2.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(this._createFeatureEditResult);
    } catch (o2) {
      throw this._createAttachmentErrorResult(a2, o2);
    }
  }
  fetchRecomputedExtents(e2 = {}) {
    const t2 = e2.signal;
    return this.load({ signal: t2 }).then(async () => {
      const t3 = this._getLayerRequestOptions(__spreadProps(__spreadValues({}, e2), { query: { returnUpdates: true } })), { layerId: r2, url: o2 } = this.layer, { data: i2 } = await U(`${o2}/${r2}`, t3), { id: n2, extent: u2, fullExtent: l2, timeExtent: d2 } = i2, c2 = u2 || l2;
      return { id: n2, fullExtent: c2 && w.fromJSON(c2), timeExtent: d2 && T$1.fromJSON({ start: d2[0], end: d2[1] }) };
    });
  }
  async queryAttachments(e2, t2 = {}) {
    const { parsedUrl: a2 } = this.layer, r2 = a2.path;
    await this.load();
    const o2 = this._getLayerRequestOptions(t2);
    if (!this.layer.get("capabilities.operations.supportsQueryAttachments")) {
      const { objectIds: t3 } = e2, a3 = [];
      for (const e3 of t3) {
        const t4 = r2 + "/" + e3 + "/attachments";
        a3.push(U(t4, o2));
      }
      return Promise.all(a3).then((e3) => t3.map((t4, s2) => ({ parentObjectId: t4, attachmentInfos: e3[s2].data.attachmentInfos }))).then((e3) => a$2(e3, r2));
    }
    return this.queryTask.executeAttachmentQuery(e2, o2);
  }
  async queryFeatures(e2, t2) {
    return await this.load(), this.queryTask.execute(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryFeaturesJSON(e2, t2) {
    return await this.load(), this.queryTask.executeJSON(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryObjectIds(e2, t2) {
    return await this.load(), this.queryTask.executeForIds(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryFeatureCount(e2, t2) {
    return await this.load(), this.queryTask.executeForCount(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryExtent(e2, t2) {
    return await this.load(), this.queryTask.executeForExtent(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryRelatedFeatures(e2, t2) {
    return await this.load(), this.queryTask.executeRelationshipQuery(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryRelatedFeaturesCount(e2, t2) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopFeatures(e2, t2) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopObjectIds(e2, t2) {
    return await this.load(), this.queryTask.executeForTopIds(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopExtents(e2, t2) {
    return await this.load(), this.queryTask.executeForTopExtents(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async queryTopCount(e2, t2) {
    return await this.load(), this.queryTask.executeForTopCount(e2, __spreadProps(__spreadValues({}, t2), { query: this._createRequestQueryOptions(t2) }));
  }
  async fetchPublishingStatus() {
    if (!g$1(this.layer.url))
      return "unavailable";
    const e2 = G(this.layer.url, "status"), t2 = await U(e2, { query: { f: "json" } });
    return j.fromJSON(t2.data.status);
  }
  _createRequestQueryOptions(e2) {
    const t2 = __spreadValues(__spreadProps(__spreadValues({}, this.layer.customParameters), { token: this.layer.apiKey }), e2 == null ? void 0 : e2.query);
    return this.layer.datesInUnknownTimezone && (t2.timeReferenceUnknownClient = true), t2;
  }
  async _fetchService(e2, t2) {
    if (!e2) {
      const { data: a3 } = await U(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: has("featurelayer-advanced-symbols") ? { returnAdvancedSymbols: true } : {}, signal: t2 }));
      e2 = a3;
    }
    this.sourceJSON = this._patchServiceJSON(e2);
    const a2 = e2.type;
    if (!S.has(a2))
      throw new s$5("feature-layer-source:unsupported-type", `Source type "${a2}" is not supported`);
  }
  _patchServiceJSON(e2) {
    var _a;
    if (e2.type !== "Table" && e2.geometryType && !((_a = e2 == null ? void 0 : e2.drawingInfo) == null ? void 0 : _a.renderer) && !e2.defaultSymbol) {
      const t2 = o$3(e2.geometryType).renderer;
      o$4("drawingInfo.renderer", t2, e2);
    }
    return e2.geometryType === "esriGeometryMultiPatch" && e2.infoFor3D && (e2.geometryType = "mesh"), e2;
  }
  _serializeFeature(e2, t$12) {
    const { geometry: s2, attributes: a2 } = e2;
    if (r$1(t$12) && r$1(e2.geometry) && e2.geometry.type === "mesh") {
      const s3 = __spreadValues({}, a2), r2 = e2.geometry, o2 = r2.origin, i2 = r2.transform;
      if (s3[t$12.transformFieldRoles.originX] = o2.x, s3[t$12.transformFieldRoles.originY] = o2.y, s3[t$12.transformFieldRoles.originZ] = o2.z, r$1(i2)) {
        const e3 = i2.translation, a3 = i2.scale, r3 = i2.rotation;
        s3[t$12.transformFieldRoles.translationX] = e3[0], s3[t$12.transformFieldRoles.translationY] = e3[1], s3[t$12.transformFieldRoles.translationZ] = e3[2], s3[t$12.transformFieldRoles.scaleX] = a3[0], s3[t$12.transformFieldRoles.scaleY] = a3[1], s3[t$12.transformFieldRoles.scaleZ] = a3[2], s3[t$12.transformFieldRoles.rotationX] = r3[0], s3[t$12.transformFieldRoles.rotationY] = r3[1], s3[t$12.transformFieldRoles.rotationZ] = r3[2], s3[t$12.transformFieldRoles.rotationDeg] = r3[3];
      }
      return { geometry: null, attributes: s3 };
    }
    return t(s2) ? { attributes: a2 } : s2.type === "mesh" || s2.type === "extent" ? null : { geometry: s2.toJSON(), attributes: a2 };
  }
  async _serializeAttachment(e2) {
    const { feature: t2, attachment: s2 } = e2, { globalId: a2, name: r2, contentType: o2, data: i2, uploadId: n2 } = s2, u2 = { globalId: a2, parentGlobalId: null, contentType: null, name: null, uploadId: null, data: null };
    if (t2 && (u2.parentGlobalId = "attributes" in t2 ? t2.attributes && t2.attributes[this.layer.globalIdField] : t2.globalId), n2)
      u2.uploadId = n2;
    else if (i2) {
      const e3 = await E(i2);
      u2.contentType = e3.mediaType, u2.data = e3.data, i2 instanceof File && (u2.name = i2.name);
    }
    return r2 && (u2.name = r2), o2 && (u2.contentType = o2), u2;
  }
  async _serializeAssetMapEditAndUploadAssets(e2, t$12) {
    const a2 = this.layer.url;
    let o2 = null;
    try {
      const t2 = new Blob([e2.data], { type: e2.mimeType }), i3 = new FormData();
      i3.append("f", "json"), i3.append("file", t2, `${e2.assetName}`);
      const n3 = { body: i3, method: "post", responseType: "json" }, { data: u2 } = await U(`${a2}/uploads/upload`, n3);
      if (!u2.success)
        throw new s$5("feature-layer-source:upload-failure", "Expected upload to be successfull.");
      o2 = { assetType: e2.assetType, assetUploadId: u2.item.itemID };
    } catch (h2) {
      o2 = null;
    }
    if (t(o2)) {
      const t2 = await E(new Blob([e2.data]));
      if (!t2.isBase64)
        throw new s$5("feature-layer-source:uploadAssets-failure", "Expected gltf data in base64 format after conversion.");
      o2 = { assetType: e2.assetType, assetData: t2.data };
    }
    if (t(o2))
      throw new s$5("feature-layer-source:uploadAssets-failure", "Unable to prepare uploadAsset request options.");
    const i2 = { method: "post", query: { f: "json", assets: JSON.stringify([o2]) }, responseType: "json" }, n2 = await U(G(this.layer.parsedUrl.path, "uploadAssets"), i2);
    if (n2.data.uploadResults.length !== 1 || !n2.data.uploadResults[0].success)
      throw new s$5("feature-layer-source:uploadAssets-failure", "Bad response.");
    const l2 = n2.data.uploadResults[0].assetHash, d2 = [];
    e2.flags & E$1.PROJECT_VERTICES && d2.push("PROJECT_VERTICES");
    const c2 = { globalId: e2.assetMapGlobalId, parentGlobalId: e2.featureGlobalId, assetName: e2.assetName, assetHash: l2, flags: d2 };
    return t$12.set(e2.featureGlobalId, e2.feature), c2;
  }
  _getFeatureIds(e2, t2) {
    const s2 = e2[0];
    return s2 ? this._canUseGlobalIds(t2, e2) ? this._getGlobalIdsFromFeatureIdentifier(e2) : "objectId" in s2 ? this._getObjectIdsFromFeatureIdentifier(e2) : this._getIdsFromFeatures(e2) : [];
  }
  _getIdsFromFeatures(e2) {
    const t2 = this.layer.objectIdField;
    return e2.map((e3) => e3.attributes && e3.attributes[t2]);
  }
  _canUseGlobalIds(e2, t2) {
    return e2 && "globalId" in t2[0];
  }
  _getObjectIdsFromFeatureIdentifier(e2) {
    return e2.map((e3) => e3.objectId);
  }
  _getGlobalIdsFromFeatureIdentifier(e2) {
    return e2.map((e3) => e3.globalId);
  }
  _createEditsResult(e2) {
    const t2 = e2.data, { layerId: s2 } = this.layer, a2 = [];
    let r2 = null;
    if (Array.isArray(t2))
      for (const n2 of t2)
        a2.push({ id: n2.id, editedFeatures: n2.editedFeatures }), n2.id === s2 && (r2 = { addResults: n2.addResults, updateResults: n2.updateResults, deleteResults: n2.deleteResults, attachments: n2.attachments, editMoment: n2.editMoment });
    else
      r2 = t2;
    const o2 = r2 == null ? void 0 : r2.attachments, i2 = { addFeatureResults: r2.addResults ? r2.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: r2.updateResults ? r2.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: r2.deleteResults ? r2.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: o2 && o2.addResults ? o2.addResults.map(this._createFeatureEditResult, this) : [], updateAttachmentResults: o2 && o2.updateResults ? o2.updateResults.map(this._createFeatureEditResult, this) : [], deleteAttachmentResults: o2 && o2.deleteResults ? o2.deleteResults.map(this._createFeatureEditResult, this) : [] };
    if (r2.editMoment && (i2.editMoment = r2.editMoment), a2.length > 0) {
      i2.editedFeatureResults = [];
      for (const e3 of a2) {
        const { adds: t3, updates: s3, deletes: a3, spatialReference: r3 } = e3.editedFeatures, o3 = r3 ? new k(r3) : null;
        i2.editedFeatureResults.push({ layerId: e3.id, editedFeatures: { adds: (t3 == null ? void 0 : t3.map((e4) => this._createEditedFeature(e4, o3))) || [], updates: (s3 == null ? void 0 : s3.map((e4) => ({ original: this._createEditedFeature(e4[0], o3), current: this._createEditedFeature(e4[1], o3) }))) || [], deletes: (a3 == null ? void 0 : a3.map((e4) => this._createEditedFeature(e4, o3))) || [], spatialReference: o3 } });
      }
    }
    return i2;
  }
  _createEditedFeature(e2, s2) {
    return new g$2({ attributes: e2.attributes, geometry: v$2(__spreadProps(__spreadValues({}, e2.geometry), { spatialReference: s2 })) });
  }
  _createFeatureEditResult(e2) {
    const t2 = e2.success === true ? null : e2.error || { code: void 0, description: void 0 };
    return { objectId: e2.objectId, globalId: e2.globalId, error: t2 ? new s$5("feature-layer-source:edit-failure", t2.description, { code: t2.code }) : null };
  }
  _createAttachmentErrorResult(e2, t2) {
    const s2 = t2.details.messages && t2.details.messages[0] || t2.message, a2 = t2.details.httpStatus || t2.details.messageCode;
    return { objectId: e2, globalId: null, error: new s$5("feature-layer-source:attachment-failure", s2, { code: a2 }) };
  }
  _getFormDataForAttachment(e2, t2) {
    const s2 = e2 instanceof FormData ? e2 : e2 && e2.elements ? new FormData(e2) : null;
    if (s2)
      for (const a2 in t2) {
        const e3 = t2[a2];
        e3 != null && (s2.set ? s2.set(a2, e3) : s2.append(a2, e3));
      }
    return s2;
  }
  _getLayerRequestOptions(e2 = {}) {
    const { parsedUrl: t2, gdbVersion: s2, dynamicDataSource: a2 } = this.layer;
    return __spreadProps(__spreadValues({}, e2), { query: __spreadValues(__spreadProps(__spreadValues({ gdbVersion: s2, layer: a2 ? JSON.stringify({ source: a2 }) : void 0 }, t2.query), { f: "json" }), this._createRequestQueryOptions(e2)), responseType: "json" });
  }
};
e([y$1()], T.prototype, "type", void 0), e([y$1({ constructOnly: true })], T.prototype, "layer", void 0), e([y$1({ readOnly: true })], T.prototype, "queryTask", null), T = e([n$5("esri.layers.graphics.sources.FeatureLayerSource")], T);
const A = T;
export { A as default };
