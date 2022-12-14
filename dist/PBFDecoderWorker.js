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
import { dw as a, ap as u$1, g1 as o, t as t$1, aK as k, g2 as y$1, c6 as pt, b$ as rt, g3 as n, g4 as e, g5 as t$2 } from "./index.js";
import "vue";
class j {
  constructor(e2, t2, s2) {
    this.uid = e2, this.geometry = t2, this.attributes = s2, this.visible = true, this.objectId = null, this.centroid = null;
  }
}
class N {
  constructor() {
    this.exceededTransferLimit = false, this.features = [], this.fields = [], this.hasM = false, this.hasZ = false, this.geometryType = null, this.objectIdFieldName = null, this.globalIdFieldName = null, this.geometryProperties = null, this.geohashFieldName = null, this.spatialReference = null, this.transform = null;
  }
}
a();
u$1();
function u(t2, e2) {
  return e2;
}
function p(t2, e2, r, s2) {
  switch (r) {
    case 0:
      return m(t2, e2 + s2, 0);
    case 1:
      return t2.originPosition === "lowerLeft" ? m(t2, e2 + s2, 1) : y(t2, e2 + s2, 1);
  }
}
function c(t2, e2, r, s2) {
  return r === 2 ? m(t2, e2, 2) : p(t2, e2, r, s2);
}
function d(t2, e2, r, s2) {
  return r === 2 ? m(t2, e2, 3) : p(t2, e2, r, s2);
}
function f(t2, e2, r, s2) {
  return r === 3 ? m(t2, e2, 3) : c(t2, e2, r, s2);
}
function m({ translate: t2, scale: e2 }, r, s2) {
  return t2[s2] + r * e2[s2];
}
function y({ translate: t2, scale: e2 }, r, s2) {
  return t2[s2] - r * e2[s2];
}
class _ {
  constructor(t2) {
    this._options = t2, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this._previousCoordinate = [0, 0], this._transform = null, this._applyTransform = u, this._lengths = [], this._currentLengthIndex = 0, this._toAddInCurrentPath = 0, this._vertexDimension = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, this._attributesConstructor = class {
    };
  }
  createFeatureResult() {
    return new N();
  }
  finishFeatureResult(t2) {
    if (this._options.applyTransform && (t2.transform = null), this._attributesConstructor = class {
    }, this._coordinateBuffer = null, this._lengths.length = 0, !t2.hasZ)
      return;
    const r = o(t2.geometryType, this._options.sourceSpatialReference, t2.spatialReference);
    if (!t$1(r))
      for (const e2 of t2.features)
        r(e2.geometry);
  }
  createSpatialReference() {
    return new k();
  }
  addField(t2, e2) {
    t2.fields.push(y$1.fromJSON(e2));
    const r = t2.fields.map((t3) => t3.name);
    this._attributesConstructor = function() {
      for (const t3 of r)
        this[t3] = null;
    };
  }
  addFeature(t2, e2) {
    const r = this._options.maxStringAttributeLength ? this._options.maxStringAttributeLength : 0;
    if (r > 0)
      for (const s2 in e2.attributes) {
        const t3 = e2.attributes[s2];
        typeof t3 == "string" && t3.length > r && (e2.attributes[s2] = "");
      }
    t2.features.push(e2);
  }
  addQueryGeometry(t2, e2) {
    const { queryGeometry: r, queryGeometryType: s2 } = e2, o2 = pt(r.clone(), r, false, false, this._transform), i = rt(o2, s2, false, false);
    let n2 = null;
    switch (s2) {
      case "esriGeometryPoint":
        n2 = "point";
        break;
      case "esriGeometryPolygon":
        n2 = "polygon";
        break;
      case "esriGeometryPolyline":
        n2 = "polyline";
        break;
      case "esriGeometryMultipoint":
        n2 = "multipoint";
    }
    i.type = n2, t2.queryGeometryType = s2, t2.queryGeometry = i;
  }
  prepareFeatures(e2) {
    switch (this._transform = e2.transform, this._options.applyTransform && e2.transform && (this._applyTransform = this._deriveApplyTransform(e2)), this._vertexDimension = 2, e2.hasZ && this._vertexDimension++, e2.hasM && this._vertexDimension++, e2.geometryType) {
      case "point":
        this.addCoordinate = (t2, e3, r) => this.addCoordinatePoint(t2, e3, r), this.createGeometry = (t2) => this.createPointGeometry(t2);
        break;
      case "polygon":
        this.addCoordinate = (t2, e3, r) => this._addCoordinatePolygon(t2, e3, r), this.createGeometry = (t2) => this._createPolygonGeometry(t2);
        break;
      case "polyline":
        this.addCoordinate = (t2, e3, r) => this._addCoordinatePolyline(t2, e3, r), this.createGeometry = (t2) => this._createPolylineGeometry(t2);
        break;
      case "multipoint":
        this.addCoordinate = (t2, e3, r) => this._addCoordinateMultipoint(t2, e3, r), this.createGeometry = (t2) => this._createMultipointGeometry(t2);
        break;
      case "mesh":
      case "extent":
        break;
      default:
        n(e2.geometryType);
    }
  }
  createFeature() {
    return this._lengths.length = 0, this._currentLengthIndex = 0, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0, new j(e(), null, new this._attributesConstructor());
  }
  allocateCoordinates() {
    const t2 = this._lengths.reduce((t3, e2) => t3 + e2, 0);
    this._coordinateBuffer = new Float64Array(t2 * this._vertexDimension), this._coordinateBufferPtr = 0;
  }
  addLength(t2, e2, r) {
    this._lengths.length === 0 && (this._toAddInCurrentPath = e2), this._lengths.push(e2);
  }
  createPointGeometry(t2) {
    const e2 = { type: "point", x: 0, y: 0, spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
    return e2.hasZ && (e2.z = 0), e2.hasM && (e2.m = 0), e2;
  }
  addCoordinatePoint(t2, e2, r) {
    switch (e2 = this._applyTransform(this._transform, e2, r, 0), r) {
      case 0:
        t2.x = e2;
        break;
      case 1:
        t2.y = e2;
        break;
      case 2:
        t2.hasZ ? t2.z = e2 : t2.m = e2;
        break;
      case 3:
        t2.m = e2;
    }
  }
  _transformPathLikeValue(t2, e2) {
    let r = 0;
    return e2 <= 1 && (r = this._previousCoordinate[e2], this._previousCoordinate[e2] += t2), this._applyTransform(this._transform, t2, e2, r);
  }
  _addCoordinatePolyline(t2, e2, r) {
    this._dehydratedAddPointsCoordinate(t2.paths, e2, r);
  }
  _addCoordinatePolygon(t2, e2, r) {
    this._dehydratedAddPointsCoordinate(t2.rings, e2, r);
  }
  _addCoordinateMultipoint(t2, e2, r) {
    r === 0 && t2.points.push([]);
    const s2 = this._transformPathLikeValue(e2, r);
    t2.points[t2.points.length - 1].push(s2);
  }
  _createPolygonGeometry(t2) {
    return { type: "polygon", rings: [[]], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  _createPolylineGeometry(t2) {
    return { type: "polyline", paths: [[]], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  _createMultipointGeometry(t2) {
    return { type: "multipoint", points: [], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  _dehydratedAddPointsCoordinate(t2, e2, r) {
    r === 0 && this._toAddInCurrentPath-- == 0 && (t2.push([]), this._toAddInCurrentPath = this._lengths[++this._currentLengthIndex] - 1, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0);
    const s2 = this._transformPathLikeValue(e2, r), o2 = t2[t2.length - 1];
    r === 0 && o2.push(new Float64Array(this._coordinateBuffer.buffer, this._coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT, this._vertexDimension)), this._coordinateBuffer[this._coordinateBufferPtr++] = s2;
  }
  _deriveApplyTransform(t2) {
    const { hasZ: e2, hasM: r } = t2;
    return e2 && r ? f : e2 ? c : r ? d : p;
  }
}
class t {
  _parseFeatureQuery(t2) {
    const s2 = t$2(t2.buffer, new _(t2.options)), o2 = __spreadProps(__spreadValues({}, s2), { spatialReference: s2.spatialReference.toJSON(), fields: s2.fields ? s2.fields.map((e2) => e2.toJSON()) : void 0 });
    return Promise.resolve(o2);
  }
}
function s() {
  return new t();
}
export { s as default };
