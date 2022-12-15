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
import { pg as n, ph as N, pi as s, c7 as l, C as r$2, pj as e } from "./index.js";
import { o } from "./VertexSnappingCandidate.js";
class r$1 extends n {
  constructor(n2) {
    super(__spreadProps(__spreadValues({}, n2), { constraint: new N(n2.coordinateHelper, n2.edgeStart, n2.edgeEnd, n2.getGroundElevation) }));
  }
  get hints() {
    return [new s(l.REFERENCE, this.constraint.start, this.constraint.end, this.elevationInfo, this.domain)];
  }
}
function r(e$1, r2, a2, d) {
  switch (e$1.type) {
    case "edge":
      return e$1.draped ? new r$1({ coordinateHelper: r2, edgeStart: r2.pointToVector(e$1.start), edgeEnd: r2.pointToVector(e$1.end), targetPoint: r2.pointToVector(e$1.target), objectId: e$1.objectId, getGroundElevation: d, elevationInfo: a2 }) : new e({ coordinateHelper: r2, edgeStart: r2.pointToVector(e$1.start), edgeEnd: r2.pointToVector(e$1.end), targetPoint: r2.pointToVector(e$1.target), objectId: e$1.objectId, elevationInfo: a2 });
    case "vertex":
      return new o({ coordinateHelper: r2, targetPoint: r2.pointToVector(e$1.target), objectId: e$1.objectId, elevationInfo: a2 });
  }
}
function a(t) {
  return r$2(t) && t.type === "3d" ? (e2, o2, n2) => t.elevationProvider.getElevation(e2, o2, n2, t.spatialReference, "ground") : () => null;
}
export { a, r };
