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
import { $ as e, a0 as y$4, dV as j, a1 as n$4, co as l$4, dI as y$5, iF as m$3, iH as S, dW as r, cD as o, dD as r$1, t as t$1, s as s$1, g as s$2, dH as i$3, U as U$2, jF as Ct, hz as t$2, dr as f$2, a as r$3, ck as s$3, a7 as w, cC as g, cp as m$4, cr as w$1, cE as x, aK as k$1, k as e$1, dF as v$1, dU as i$4, dA as i$5, c0 as v$2, dC as v$3, cx as j$1, i2 as n$7, i3 as t$3, h2 as c$8, h3 as v$4, h4 as O$2, Y as a$5, e0 as b$1, cA as a$6, hU as o$1, cq as u$6, ei as c$9, y as s$5, jb as S$2, bO as j$2, d$ as x$1, bN as j$3, jG as l$5, m as j$4, jH as o$2, d4 as k$2, fo as E, bz as _n, de as rn } from "./index.js";
import { i as i$7 } from "./originUtils.js";
import { f as f$5 } from "./portalItemUtils.js";
import { y as y$6, N, U as U$1, r as r$2, A, R as R$1, c as a$3, n as n$5, w as w$2, S as S$1, d as D$1, s as s$4, e as f$3, i as i$6, j as a$4, k as n$6, b, h, O as O$1, g as g$1, f as f$4, D as D$2, a as h$1, t as t$4, l as l$6 } from "./Stop.js";
import "vue";
import "./multiOriginJSONSupportUtils.js";
let p$6 = class extends l$4 {
  constructor(o2) {
    super(o2), this.break = new y$5({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.first = new y$5({ color: [0, 255, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.unlocated = new y$5({ color: [255, 0, 0], size: 12, outline: { color: [255, 255, 255], width: 3 } }), this.last = new y$5({ color: [255, 0, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.middle = new y$5({ color: [51, 51, 51], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.waypoint = new y$5({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } });
  }
};
e([y$4({ types: j })], p$6.prototype, "break", void 0), e([y$4({ types: j })], p$6.prototype, "first", void 0), e([y$4({ types: j })], p$6.prototype, "unlocated", void 0), e([y$4({ types: j })], p$6.prototype, "last", void 0), e([y$4({ types: j })], p$6.prototype, "middle", void 0), e([y$4({ types: j })], p$6.prototype, "waypoint", void 0), p$6 = e([n$4("esri.layers.support.RouteStopSymbols")], p$6);
const l$3 = p$6;
let n$3 = class extends l$4 {
  constructor(o2) {
    super(o2), this.directionLines = new m$3({ color: [0, 122, 194], width: 6 }), this.directionPoints = new y$5({ color: [255, 255, 255], size: 6, outline: { color: [0, 122, 194], width: 2 } }), this.pointBarriers = new y$5({ style: "x", size: 10, outline: { color: [255, 0, 0], width: 3 } }), this.polygonBarriers = new S({ color: [255, 170, 0, 0.6], outline: { width: 7.5, color: [255, 0, 0, 0.6] } }), this.polylineBarriers = new m$3({ width: 7.5, color: [255, 85, 0, 0.7] }), this.routeInfo = new m$3({ width: 8, color: [20, 89, 127] }), this.stops = new l$3();
  }
};
e([y$4({ types: j })], n$3.prototype, "directionLines", void 0), e([y$4({ types: j })], n$3.prototype, "directionPoints", void 0), e([y$4({ types: j })], n$3.prototype, "pointBarriers", void 0), e([y$4({ types: j })], n$3.prototype, "polygonBarriers", void 0), e([y$4({ types: j })], n$3.prototype, "polylineBarriers", void 0), e([y$4({ types: j })], n$3.prototype, "routeInfo", void 0), e([y$4({ type: l$3 })], n$3.prototype, "stops", void 0), n$3 = e([n$4("esri.layers.support.RouteSymbols")], n$3);
const y$3 = n$3;
let n$2 = class extends l$4 {
  constructor(t2) {
    super(t2), this.dataType = null, this.name = null, this.parameterNames = null, this.restrictionUsageParameterName = null, this.timeNeutralAttributeName = null, this.trafficSupport = null, this.units = null, this.usageType = null;
  }
};
e([y$4({ type: String })], n$2.prototype, "dataType", void 0), e([r(y$6, { ignoreUnknown: false })], n$2.prototype, "name", void 0), e([y$4({ type: [String] })], n$2.prototype, "parameterNames", void 0), e([y$4({ type: String })], n$2.prototype, "restrictionUsageParameterName", void 0), e([r(N, { ignoreUnknown: false })], n$2.prototype, "timeNeutralAttributeName", void 0), e([y$4({ type: String })], n$2.prototype, "trafficSupport", void 0), e([y$4({ type: String })], n$2.prototype, "units", void 0), e([r(U$1)], n$2.prototype, "usageType", void 0), n$2 = e([n$4("esri.rest.support.NetworkAttribute")], n$2);
const u$5 = n$2;
let p$5 = class extends l$4 {
  constructor(t2) {
    super(t2), this.buildTime = null, this.name = null, this.networkAttributes = null, this.networkSources = null, this.state = null;
  }
};
e([y$4({ type: Number })], p$5.prototype, "buildTime", void 0), e([y$4({ type: String })], p$5.prototype, "name", void 0), e([y$4({ type: [u$5] })], p$5.prototype, "networkAttributes", void 0), e([y$4()], p$5.prototype, "networkSources", void 0), e([y$4({ type: String })], p$5.prototype, "state", void 0), p$5 = e([n$4("esri.rest.support.NetworkDataset")], p$5);
const i$2 = p$5;
let d$1 = class extends l$4 {
  constructor(t2) {
    super(t2), this.accumulateAttributeNames = null, this.currentVersion = null, this.defaultTravelMode = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsSupportedLanguages = null, this.directionsTimeAttribute = null, this.hasZ = null, this.impedance = null, this.networkDataset = null, this.supportedTravelModes = null;
  }
  readAccumulateAttributes(t2) {
    return t$1(t2) ? null : t2.map((t3) => y$6.fromJSON(t3));
  }
  writeAccumulateAttributes(t2, e2, o2) {
    !t$1(t2) && t2.length && (e2[o2] = t2.map((t3) => y$6.toJSON(t3)));
  }
};
e([y$4()], d$1.prototype, "accumulateAttributeNames", void 0), e([o("accumulateAttributeNames")], d$1.prototype, "readAccumulateAttributes", null), e([r$1("accumulateAttributeNames")], d$1.prototype, "writeAccumulateAttributes", null), e([y$4()], d$1.prototype, "currentVersion", void 0), e([y$4()], d$1.prototype, "defaultTravelMode", void 0), e([y$4()], d$1.prototype, "directionsLanguage", void 0), e([r(r$2)], d$1.prototype, "directionsLengthUnits", void 0), e([y$4()], d$1.prototype, "directionsSupportedLanguages", void 0), e([r(N, { ignoreUnknown: false })], d$1.prototype, "directionsTimeAttribute", void 0), e([y$4()], d$1.prototype, "hasZ", void 0), e([r(y$6, { ignoreUnknown: false })], d$1.prototype, "impedance", void 0), e([y$4({ type: i$2 })], d$1.prototype, "networkDataset", void 0), e([y$4({ type: [A] })], d$1.prototype, "supportedTravelModes", void 0), d$1 = e([n$4("esri.rest.support.NetworkServiceDescription")], d$1);
const y$2 = d$1;
const d = s$1.getLogger("esri.rest.networkService");
function u$4(e2, r2, t2, o2) {
  o2[t2] = [r2.length, r2.length + e2.length], e2.forEach((e3) => {
    r2.push(e3.geometry);
  });
}
function f$1(e2, r2) {
  for (let t2 = 0; t2 < r2.length; t2++) {
    const o2 = e2[r2[t2]];
    if (o2 && o2.length)
      for (const e3 of o2)
        e3.z = void 0;
  }
  d.warnOnce("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
}
function c$7(e2, r2) {
  for (let t2 = 0; t2 < r2.length; t2++) {
    const s2 = e2[r2[t2]];
    if (s2 && s2.length) {
      for (const e3 of s2)
        if (r$3(e3) && e3.hasZ)
          return true;
    }
  }
  return false;
}
async function p$4(t2, o2, s2) {
  if (!t2)
    throw new s$2("network-service:missing-url", "Url to Network service is missing");
  const a2 = i$3({ f: "json", token: o2 }, s2), { data: l2 } = await U$2(t2, a2);
  l2.supportedTravelModes || (l2.supportedTravelModes = []);
  for (let e2 = 0; e2 < l2.supportedTravelModes.length; e2++)
    l2.supportedTravelModes[e2].id || (l2.supportedTravelModes[e2].id = l2.supportedTravelModes[e2].itemId);
  const d2 = l2.currentVersion >= 10.4 ? m$2(t2, o2, s2) : v(t2, s2), { defaultTravelMode: u2, supportedTravelModes: f2 } = await d2;
  return l2.defaultTravelMode = u2, l2.supportedTravelModes = f2, y$2.fromJSON(l2);
}
async function v(r2, t2) {
  var _a, _b, _c;
  const o2 = i$3({ f: "json" }, t2), { data: i2 } = await U$2(r2.replace(/\/rest\/.*$/i, "/info"), o2);
  if (!i2 || !i2.owningSystemUrl)
    return { supportedTravelModes: [], defaultTravelMode: null };
  const { owningSystemUrl: d2 } = i2, u2 = Ct(d2) + "/sharing/rest/portals/self", { data: f2 } = await U$2(u2, o2), c2 = t$2("helperServices.routingUtilities.url", f2);
  if (!c2)
    return { supportedTravelModes: [], defaultTravelMode: null };
  const p2 = f$2(d2), v2 = /\/solve$/i.test(p2.path) ? "Route" : /\/solveclosestfacility$/i.test(p2.path) ? "ClosestFacility" : "ServiceAreas", m2 = i$3({ f: "json", serviceName: v2 }, t2), T = Ct(c2) + "/GetTravelModes/execute", M = await U$2(T, m2), h2 = [];
  let g2 = null;
  if ((_b = (_a = M == null ? void 0 : M.data) == null ? void 0 : _a.results) == null ? void 0 : _b.length) {
    const e2 = M.data.results;
    for (const r3 of e2)
      if (r3.paramName === "supportedTravelModes") {
        if ((_c = r3.value) == null ? void 0 : _c.features) {
          for (const { attributes: e3 } of r3.value.features)
            if (e3) {
              const r4 = JSON.parse(e3.TravelMode);
              h2.push(r4);
            }
        }
      } else
        r3.paramName === "defaultTravelMode" && (g2 = r3.value);
  }
  return { supportedTravelModes: h2, defaultTravelMode: g2 };
}
async function m$2(t2, o2, s2) {
  try {
    const r2 = i$3({ f: "json", token: o2 }, s2), l2 = Ct(t2) + "/retrieveTravelModes", { data: { supportedTravelModes: i2, defaultTravelMode: d2 } } = await U$2(l2, r2);
    return { supportedTravelModes: i2, defaultTravelMode: d2 };
  } catch (l2) {
    throw new s$2("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: l2 });
  }
}
const p$3 = new s$3({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
let i$1 = class extends l$4 {
  constructor(e2) {
    super(e2), this.description = null, this.type = null;
  }
};
e([y$4({ type: String, json: { write: true } })], i$1.prototype, "description", void 0), e([y$4({ type: String, json: { read: p$3.read, write: p$3.write } })], i$1.prototype, "type", void 0), i$1 = e([n$4("esri.rest.support.GPMessage")], i$1);
const a$2 = i$1;
const p$2 = new s$3({ 0: "informative", 1: "process-definition", 2: "process-start", 3: "process-stop", 50: "warning", 100: "error", 101: "empty", 200: "abort" });
let c$6 = class extends a$2 {
  constructor(r2) {
    super(r2), this.type = null;
  }
};
e([y$4({ type: String, json: { read: p$2.read, write: p$2.write } })], c$6.prototype, "type", void 0), c$6 = e([n$4("esri.rest.support.NAMessage")], c$6);
const a$1 = c$6;
let c$5 = class extends l$4 {
  constructor(r2) {
    super(r2);
  }
};
e([y$4({ json: { read: { source: "string" } } })], c$5.prototype, "text", void 0), e([r(R$1, { name: "stringType" })], c$5.prototype, "type", void 0), c$5 = e([n$4("esri.rest.support.DirectionsString")], c$5);
const i = c$5;
let a = class extends l$4 {
  constructor(r2) {
    super(r2), this.arriveTime = null, this.arriveTimeOffset = null, this.geometry = null, this.strings = null;
  }
  readArriveTimeOffset(r2, e2) {
    return a$3(e2.ETA, e2.arriveTimeUTC);
  }
  readGeometry(r2, e2) {
    return w.fromJSON(e2.point);
  }
};
e([y$4({ type: Date, json: { read: { source: "arriveTimeUTC" } } })], a.prototype, "arriveTime", void 0), e([y$4()], a.prototype, "arriveTimeOffset", void 0), e([o("arriveTimeOffset", ["arriveTimeUTC", "ETA"])], a.prototype, "readArriveTimeOffset", null), e([y$4({ type: w })], a.prototype, "geometry", void 0), e([o("geometry", ["point"])], a.prototype, "readGeometry", null), e([y$4({ type: [i] })], a.prototype, "strings", void 0), a = e([n$4("esri.rest.support.DirectionsEvent")], a);
const c$4 = a;
function m$1(r2) {
  if (t$1(r2) || r2 === "")
    return null;
  let e2 = 0, t2 = 0, o2 = 0, p2 = 0;
  const n2 = [];
  let c2, i2, a2, m2, u2, l2, f2, y2, d2 = 0, h2 = 0, j2 = 0;
  if (u2 = r2.match(/((\+|\-)[^\+\-\|]+|\|)/g), u2 || (u2 = []), parseInt(u2[d2], 32) === 0) {
    d2 = 2;
    const r3 = parseInt(u2[d2], 32);
    d2++, l2 = parseInt(u2[d2], 32), d2++, 1 & r3 && (h2 = u2.indexOf("|") + 1, f2 = parseInt(u2[h2], 32), h2++), 2 & r3 && (j2 = u2.indexOf("|", h2) + 1, y2 = parseInt(u2[j2], 32), j2++);
  } else
    l2 = parseInt(u2[d2], 32), d2++;
  for (; d2 < u2.length && u2[d2] !== "|"; ) {
    c2 = parseInt(u2[d2], 32) + e2, d2++, e2 = c2, i2 = parseInt(u2[d2], 32) + t2, d2++, t2 = i2;
    const r3 = [c2 / l2, i2 / l2];
    h2 && (m2 = parseInt(u2[h2], 32) + o2, h2++, o2 = m2, r3.push(m2 / f2)), j2 && (a2 = parseInt(u2[j2], 32) + p2, j2++, p2 = a2, r3.push(a2 / y2)), n2.push(r3);
  }
  return { paths: [n2], hasZ: h2 > 0, hasM: j2 > 0 };
}
let u$3 = class extends g {
  constructor(r2) {
    super(r2), this.events = null, this.strings = null;
  }
  readGeometry(r2, e2) {
    const s2 = m$1(e2.compressedGeometry);
    return r$3(s2) ? m$4.fromJSON(s2) : null;
  }
};
e([y$4({ type: [c$4] })], u$3.prototype, "events", void 0), e([o("geometry", ["compressedGeometry"])], u$3.prototype, "readGeometry", null), e([y$4({ type: [i] })], u$3.prototype, "strings", void 0), u$3 = e([n$4("esri.rest.support.DirectionsFeature")], u$3);
const l$2 = u$3;
function u$2(e2, t2) {
  if (e2.length === 0)
    return new m$4({ spatialReference: t2 });
  const r2 = [];
  for (const p2 of e2)
    for (const e3 of p2.paths)
      r2.push(...e3);
  const o2 = [];
  r2.forEach((e3, t3) => {
    t3 !== 0 && e3[0] === r2[t3 - 1][0] && e3[1] === r2[t3 - 1][1] || o2.push(e3);
  });
  const { hasM: s2, hasZ: a2 } = e2[0];
  return new m$4({ hasM: s2, hasZ: a2, paths: [o2], spatialReference: t2 });
}
let c$3 = class extends x {
  constructor(e2) {
    super(e2), this.extent = null, this.features = null, this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(e2, r2) {
    var _a;
    if (!e2)
      return [];
    const o2 = (_a = r2.summary.envelope.spatialReference) != null ? _a : r2.spatialReference, s2 = o2 && k$1.fromJSON(o2);
    return e2.map((e3) => {
      const r3 = l$2.fromJSON(e3);
      if (r$3(r3.geometry) && (r3.geometry.spatialReference = s2), r$3(r3.events))
        for (const o3 of r3.events)
          r$3(o3.geometry) && (o3.geometry.spatialReference = s2);
      return r3;
    });
  }
  get mergedGeometry() {
    if (!this.features)
      return null;
    return u$2(this.features.map(({ geometry: e2 }) => e$1(e2)), this.extent.spatialReference);
  }
  get strings() {
    return this.features.map(({ strings: e2 }) => e2).flat().filter(r$3);
  }
};
e([y$4({ type: w$1, json: { read: { source: "summary.envelope" } } })], c$3.prototype, "extent", void 0), e([y$4()], c$3.prototype, "features", void 0), e([o("features")], c$3.prototype, "readFeatures", null), e([y$4()], c$3.prototype, "geometryType", void 0), e([y$4({ readOnly: true })], c$3.prototype, "mergedGeometry", null), e([y$4()], c$3.prototype, "routeId", void 0), e([y$4()], c$3.prototype, "routeName", void 0), e([y$4({ value: null, readOnly: true })], c$3.prototype, "strings", null), e([y$4({ json: { read: { source: "summary.totalDriveTime" } } })], c$3.prototype, "totalDriveTime", void 0), e([y$4({ json: { read: { source: "summary.totalLength" } } })], c$3.prototype, "totalLength", void 0), e([y$4({ json: { read: { source: "summary.totalTime" } } })], c$3.prototype, "totalTime", void 0), c$3 = e([n$4("esri.rest.support.DirectionsFeatureSet")], c$3);
const f = c$3;
let n$1 = class extends l$4 {
  constructor(t2) {
    super(t2), this.directionLines = null, this.directionPoints = null, this.directions = null, this.route = null, this.routeName = null, this.stops = null, this.traversedEdges = null, this.traversedJunctions = null, this.traversedTurns = null;
  }
};
e([y$4({ type: x, json: { write: true } })], n$1.prototype, "directionLines", void 0), e([y$4({ type: x, json: { write: true } })], n$1.prototype, "directionPoints", void 0), e([y$4({ type: f, json: { write: true } })], n$1.prototype, "directions", void 0), e([y$4({ type: g, json: { write: true } })], n$1.prototype, "route", void 0), e([y$4({ type: String, json: { write: true } })], n$1.prototype, "routeName", void 0), e([y$4({ type: [g], json: { write: true } })], n$1.prototype, "stops", void 0), e([y$4({ type: x, json: { write: true } })], n$1.prototype, "traversedEdges", void 0), e([y$4({ type: x, json: { write: true } })], n$1.prototype, "traversedJunctions", void 0), e([y$4({ type: x, json: { write: true } })], n$1.prototype, "traversedTurns", void 0), n$1 = e([n$4("esri.rest.support.RouteResult")], n$1);
const u$1 = n$1;
function u(r2) {
  return r2 && x.fromJSON(r2).features.map((r3) => r3);
}
let n = class extends l$4 {
  constructor(r2) {
    super(r2), this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(r2, o2) {
    return u(o2.barriers);
  }
  readPolylineBarriers(r2) {
    return u(r2);
  }
  readPolygonBarriers(r2) {
    return u(r2);
  }
};
e([y$4({ type: [a$1] })], n.prototype, "messages", void 0), e([y$4({ type: [g] })], n.prototype, "pointBarriers", void 0), e([o("pointBarriers", ["barriers"])], n.prototype, "readPointBarriers", null), e([y$4({ type: [g] })], n.prototype, "polylineBarriers", void 0), e([o("polylineBarriers")], n.prototype, "readPolylineBarriers", null), e([y$4({ type: [g] })], n.prototype, "polygonBarriers", void 0), e([o("polygonBarriers")], n.prototype, "readPolygonBarriers", null), e([y$4({ type: [u$1] })], n.prototype, "routeResults", void 0), n = e([n$4("esri.rest.support.RouteSolveResult")], n);
const y$1 = n;
function l$1(e2) {
  return e2 instanceof x;
}
async function m(r2, t2, p2) {
  const c2 = [], m2 = [], d2 = {}, g2 = {}, h2 = f$2(r2), { path: R2 } = h2;
  l$1(t2.stops) && u$4(t2.stops.features, m2, "stops.features", d2), l$1(t2.pointBarriers) && u$4(t2.pointBarriers.features, m2, "pointBarriers.features", d2), l$1(t2.polylineBarriers) && u$4(t2.polylineBarriers.features, m2, "polylineBarriers.features", d2), l$1(t2.polygonBarriers) && u$4(t2.polygonBarriers.features, m2, "polygonBarriers.features", d2);
  const v2 = await v$1(m2);
  for (const e2 in d2) {
    const r3 = d2[e2];
    c2.push(e2), g2[e2] = v2.slice(r3[0], r3[1]);
  }
  if (c$7(g2, c2)) {
    let e2 = null;
    try {
      e2 = await p$4(R2, t2.apiKey, p2);
    } catch {
    }
    e2 && !e2.hasZ && f$1(g2, c2);
  }
  for (const e2 in g2)
    g2[e2].forEach((r3, s2) => {
      t2.get(e2)[s2].geometry = r3;
    });
  const B = __spreadProps(__spreadValues({}, p2), { query: __spreadProps(__spreadValues(__spreadValues({}, h2.query), n$5(t2)), { f: "json" }) }), E2 = R2.endsWith("/solve") ? R2 : `${R2}/solve`, { data: T } = await U$2(E2, B);
  return y(T);
}
function y(e2) {
  var _a;
  const { barriers: s2, directionLines: o2, directionPoints: a2, directions: i2, messages: n2, polygonBarriers: u2, polylineBarriers: f2, routes: p2, stops: l2, traversedEdges: m2, traversedJunctions: y2, traversedTurns: d2 } = e2, g2 = (e3) => {
    const r2 = R2.find((r3) => r3.routeName === e3);
    if (r$3(r2))
      return r2;
    const s3 = { routeId: R2.length + 1, routeName: e3 };
    return R2.push(s3), s3;
  }, h2 = (e3) => {
    const r2 = R2.find((r3) => r3.routeId === e3);
    if (r$3(r2))
      return r2;
    const s3 = { routeId: e3, routeName: null };
    return R2.push(s3), s3;
  }, R2 = [];
  p2 == null ? void 0 : p2.features.forEach((e3, r2) => {
    e3.geometry.spatialReference = p2.spatialReference;
    const t2 = e3.attributes.Name, s3 = r2 + 1;
    R2.push({ routeId: s3, routeName: t2, route: e3 });
  }), i2 == null ? void 0 : i2.forEach((e3) => {
    const { routeName: r2 } = e3;
    g2(r2).directions = e3;
  });
  const v2 = ((_a = l2 == null ? void 0 : l2.features.every((e3) => t$1(e3.attributes.RouteName))) != null ? _a : false) && R2.length > 0 ? R2[0].routeName : null;
  return l2 == null ? void 0 : l2.features.forEach((e3) => {
    var _a2, _b;
    var r2;
    e3.geometry && ((_a2 = (r2 = e3.geometry).spatialReference) != null ? _a2 : r2.spatialReference = l2.spatialReference);
    const t2 = v2 != null ? v2 : e3.attributes.RouteName, s3 = g2(t2);
    (_b = s3.stops) != null ? _b : s3.stops = [], s3.stops.push(e3);
  }), o2 == null ? void 0 : o2.features.forEach((e3) => {
    var _a2;
    const r2 = e3.attributes.RouteID, t2 = h2(r2), { geometryType: s3, spatialReference: a3 } = o2;
    (_a2 = t2.directionLines) != null ? _a2 : t2.directionLines = { features: [], geometryType: s3, spatialReference: a3 }, t2.directionLines.features.push(e3);
  }), a2 == null ? void 0 : a2.features.forEach((e3) => {
    var _a2;
    const r2 = e3.attributes.RouteID, t2 = h2(r2), { geometryType: s3, spatialReference: o3 } = a2;
    (_a2 = t2.directionPoints) != null ? _a2 : t2.directionPoints = { features: [], geometryType: s3, spatialReference: o3 }, t2.directionPoints.features.push(e3);
  }), m2 == null ? void 0 : m2.features.forEach((e3) => {
    var _a2;
    const r2 = e3.attributes.RouteID, t2 = h2(r2), { geometryType: s3, spatialReference: o3 } = m2;
    (_a2 = t2.traversedEdges) != null ? _a2 : t2.traversedEdges = { features: [], geometryType: s3, spatialReference: o3 }, t2.traversedEdges.features.push(e3);
  }), y2 == null ? void 0 : y2.features.forEach((e3) => {
    var _a2;
    const r2 = e3.attributes.RouteID, t2 = h2(r2), { geometryType: s3, spatialReference: o3 } = y2;
    (_a2 = t2.traversedJunctions) != null ? _a2 : t2.traversedJunctions = { features: [], geometryType: s3, spatialReference: o3 }, t2.traversedJunctions.features.push(e3);
  }), d2 == null ? void 0 : d2.features.forEach((e3) => {
    var _a2;
    const r2 = e3.attributes.RouteID, t2 = h2(r2);
    (_a2 = t2.traversedTurns) != null ? _a2 : t2.traversedTurns = { features: [] }, t2.traversedTurns.features.push(e3);
  }), y$1.fromJSON({ routeResults: R2, barriers: s2, polygonBarriers: u2, polylineBarriers: f2, messages: n2 });
}
const t = { type: String, json: { read: { source: "token" }, write: { target: "token" } } };
let l = class extends i$4(l$4) {
  constructor(o2) {
    super(o2), this.doNotLocateOnRestrictedElements = null, this.geometry = null, this.geometryType = null, this.name = null, this.spatialRelationship = null, this.type = "layer", this.where = null;
  }
};
e([y$4({ type: Boolean, json: { write: true } })], l.prototype, "doNotLocateOnRestrictedElements", void 0), e([y$4({ types: i$5, json: { read: v$2, write: true } })], l.prototype, "geometry", void 0), e([r(w$2)], l.prototype, "geometryType", void 0), e([y$4({ type: String, json: { name: "layerName", write: true } })], l.prototype, "name", void 0), e([r(S$1, { name: "spatialRel" })], l.prototype, "spatialRelationship", void 0), e([y$4({ type: String, json: { write: true } })], l.prototype, "type", void 0), e([y$4({ type: String, json: { write: true } })], l.prototype, "where", void 0), l = e([n$4("esri.rest.support.DataLayer")], l);
const c$2 = l;
var s;
let c$1 = s = class extends x {
  constructor(e2) {
    super(e2), this.doNotLocateOnRestrictedElements = null;
  }
  clone() {
    return new s(__spreadValues({ doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements }, this.cloneProperties()));
  }
};
e([y$4({ type: Boolean, json: { write: true } })], c$1.prototype, "doNotLocateOnRestrictedElements", void 0), c$1 = s = e([n$4("esri.rest.support.NetworkFeatureSet")], c$1);
const p$1 = c$1;
let p = class extends i$4(l$4) {
  constructor(o2) {
    super(o2), this.doNotLocateOnRestrictedElements = null, this.url = null;
  }
};
e([y$4({ type: Boolean, json: { write: true } })], p.prototype, "doNotLocateOnRestrictedElements", void 0), e([y$4({ type: String, json: { write: true } })], p.prototype, "url", void 0), p = e([n$4("esri.rest.support.NetworkUrl")], p);
const c = p;
var O;
function U(t2) {
  return t2 && "type" in t2;
}
function J(t2) {
  return t2 && "features" in t2 && "doNotLocateOnRestrictedElements" in t2;
}
function L(t2) {
  return t2 && "url" in t2;
}
function R(t2) {
  return t2 && "features" in t2;
}
function C(t2) {
  return U(t2) ? c$2.fromJSON(t2) : L(t2) ? c.fromJSON(t2) : J(t2) ? p$1.fromJSON(t2) : R(t2) ? x.fromJSON(t2) : null;
}
function D(t2, e2, o2) {
  r$3(t2) && (e2[o2] = j$1.isCollection(t2) ? { features: t2.toArray().map((t3) => t3.toJSON()) } : t2.toJSON());
}
let k = O = class extends i$4(l$4) {
  constructor(t2) {
    super(t2), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = false, this.returnDirections = false, this.returnPolygonBarriers = false, this.returnPolylineBarriers = false, this.returnRoutes = true, this.returnStops = false, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = true, this.startTime = null, this.startTimeIsUTC = true, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(t2) {
    return v$3(O, t2);
  }
  readAccumulateAttributes(t2) {
    return t$1(t2) ? null : t2.map((t3) => y$6.fromJSON(t3));
  }
  writeAccumulateAttributes(t2, e2, r2) {
    !t$1(t2) && t2.length && (e2[r2] = t2.map((t3) => y$6.toJSON(t3)));
  }
  writePointBarriers(t2, e2, r2) {
    D(t2, e2, r2);
  }
  writePolygonBarrier(t2, e2, r2) {
    D(t2, e2, r2);
  }
  writePolylineBarrier(t2, e2, r2) {
    D(t2, e2, r2);
  }
  readRestrictionAttributes(t2) {
    return t$1(t2) ? null : t2.map((t3) => D$1.fromJSON(t3));
  }
  writeRestrictionAttributes(t2, e2, r2) {
    !t$1(t2) && t2.length && (e2[r2] = t2.map((t3) => D$1.toJSON(t3)));
  }
  readStartTime(t2, e2) {
    const { startTime: r2 } = e2;
    return t$1(r2) ? null : r2 === "now" ? "now" : new Date(r2);
  }
  writeStartTime(t2, e2) {
    t$1(t2) || (e2.startTime = t2 === "now" ? "now" : t2.getTime());
  }
  readStops(t2, e2) {
    return C(e2.stops);
  }
  writeStops(t2, e2, r2) {
    D(t2, e2, r2);
  }
};
e([y$4({ type: [String], json: { name: "accumulateAttributeNames", write: true } })], k.prototype, "accumulateAttributes", void 0), e([o("accumulateAttributes")], k.prototype, "readAccumulateAttributes", null), e([r$1("accumulateAttributes")], k.prototype, "writeAccumulateAttributes", null), e([y$4(t)], k.prototype, "apiKey", void 0), e([y$4({ json: { write: true } })], k.prototype, "attributeParameterValues", void 0), e([y$4({ type: String, json: { write: true } })], k.prototype, "directionsLanguage", void 0), e([r(r$2)], k.prototype, "directionsLengthUnits", void 0), e([r(s$4)], k.prototype, "directionsOutputType", void 0), e([r(f$3)], k.prototype, "directionsStyleName", void 0), e([r(N, { name: "directionsTimeAttributeName", ignoreUnknown: false })], k.prototype, "directionsTimeAttribute", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "findBestSequence", void 0), e([y$4({ type: Number, json: { write: true } })], k.prototype, "geometryPrecision", void 0), e([y$4({ type: Number, json: { write: true } })], k.prototype, "geometryPrecisionM", void 0), e([y$4({ type: Number, json: { write: true } })], k.prototype, "geometryPrecisionZ", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "ignoreInvalidLocations", void 0), e([r(y$6, { name: "impedanceAttributeName", ignoreUnknown: false })], k.prototype, "impedanceAttribute", void 0), e([y$4({ type: Number, json: { write: true } })], k.prototype, "outputGeometryPrecision", void 0), e([r(i$6)], k.prototype, "outputGeometryPrecisionUnits", void 0), e([r(a$4)], k.prototype, "outputLines", void 0), e([y$4({ type: k$1, json: { name: "outSR", write: true } })], k.prototype, "outSpatialReference", void 0), e([y$4({ json: { write: true } })], k.prototype, "overrides", void 0), e([y$4({ json: { name: "barriers", write: true } })], k.prototype, "pointBarriers", void 0), e([r$1("pointBarriers")], k.prototype, "writePointBarriers", null), e([y$4({ json: { write: true } })], k.prototype, "polygonBarriers", void 0), e([r$1("polygonBarriers")], k.prototype, "writePolygonBarrier", null), e([y$4({ json: { write: true } })], k.prototype, "polylineBarriers", void 0), e([r$1("polylineBarriers")], k.prototype, "writePolylineBarrier", null), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "preserveFirstStop", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "preserveLastStop", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "preserveObjectID", void 0), e([y$4({ type: [String], json: { name: "restrictionAttributeNames", write: true } })], k.prototype, "restrictionAttributes", void 0), e([o("restrictionAttributes")], k.prototype, "readRestrictionAttributes", null), e([r$1("restrictionAttributes")], k.prototype, "writeRestrictionAttributes", null), e([r(n$6)], k.prototype, "restrictUTurns", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnBarriers", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnDirections", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnPolygonBarriers", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnPolylineBarriers", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnRoutes", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnStops", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnTraversedEdges", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnTraversedJunctions", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnTraversedTurns", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "returnZ", void 0), e([y$4({ type: Date, json: { type: Number, write: true } })], k.prototype, "startTime", void 0), e([o("startTime")], k.prototype, "readStartTime", null), e([r$1("startTime")], k.prototype, "writeStartTime", null), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "startTimeIsUTC", void 0), e([y$4({ json: { write: true } })], k.prototype, "stops", void 0), e([o("stops")], k.prototype, "readStops", null), e([r$1("stops")], k.prototype, "writeStops", null), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "timeWindowsAreUTC", void 0), e([y$4({ type: A, json: { write: true } })], k.prototype, "travelMode", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "useHierarchy", void 0), e([y$4({ type: Boolean, json: { write: true } })], k.prototype, "useTimeWindows", void 0), k = O = e([n$4("esri.rest.support.RouteParameters")], k);
const I = k;
function X(e2) {
  return e2.length ? e2 : null;
}
function ee(e2) {
  const { defaultTravelMode: t2, supportedTravelModes: r2 } = e2;
  return r2 == null ? void 0 : r2.find(({ id: e3 }) => e3 === t2);
}
function te(e2) {
  switch (e2) {
    case "esriGeometryPoint":
      return { type: "esriSMS", style: "esriSMSCircle", size: 12, color: [0, 0, 0, 0], outline: te("esriGeometryPolyline") };
    case "esriGeometryPolyline":
      return { type: "esriSLS", style: "esriSLSSolid", width: 1, color: [0, 0, 0, 0] };
    case "esriGeometryPolygon":
      return { type: "esriSFS", style: "esriSFSNull", outline: te("esriGeometryPolyline") };
  }
}
function re(e2) {
  return "layers" in e2;
}
function oe(e2) {
  return e2.declaredClass === "esri.rest.support.FeatureSet";
}
function ie(e2) {
  return e2.declaredClass === "esri.rest.support.NetworkFeatureSet";
}
function se(e2, t2, r2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t, _u, _v;
  const o2 = (_a = t2.networkDataset) == null ? void 0 : _a.networkAttributes, i2 = (_b = o2 == null ? void 0 : o2.filter((e3) => e3.usageType === "cost")) != null ? _b : [], s2 = ee(t2), a2 = (_c = r2.travelMode) != null ? _c : s2;
  if (t$1(a2))
    return void we.warn("route-layer:missing-travel-mode", "The routing service must have a default travel mode or one must be specified in the route parameter.");
  const { timeAttributeName: l2, distanceAttributeName: c2 } = a2, y2 = i2.find((e3) => e3.name === l2), f2 = i2.find((e3) => e3.name === c2), d2 = (_f = (_e = (_d = e$1(r2.travelMode)) == null ? void 0 : _d.impedanceAttributeName) != null ? _e : e$1(r2.impedanceAttribute)) != null ? _f : t2.impedance, h2 = t$4.fromJSON(y2 == null ? void 0 : y2.units), w2 = r$2.fromJSON(f2 == null ? void 0 : f2.units);
  if (!h2 || !w2)
    throw new s$2("routelayer:unknown-impedance-units", "the units of either the distance or time impedance are unknown");
  const S2 = (_g = r2.directionsLanguage) != null ? _g : t2.directionsLanguage, g2 = (_i = (_h = e$1(r2.accumulateAttributes)) != null ? _h : t2.accumulateAttributeNames) != null ? _i : [], b2 = new Set(i2.filter(({ name: e3 }) => e3 === l2 || e3 === c2 || e3 === d2 || e3 != null && g2.includes(e3)).map(({ name: e3 }) => e3)), v2 = (e3) => {
    for (const t3 in e3)
      b2.has(t3) || delete e3[t3];
  };
  for (const n2 of e2.pointBarriers)
    r$3(n2.costs) && (n2.addedCost = (_j = n2.costs[d2]) != null ? _j : 0, v2(n2.costs));
  for (const n2 of e2.polygonBarriers)
    r$3(n2.costs) && (n2.scaleFactor = (_k = n2.costs[d2]) != null ? _k : 1, v2(n2.costs));
  for (const n2 of e2.polylineBarriers)
    r$3(n2.costs) && (n2.scaleFactor = (_l = n2.costs[d2]) != null ? _l : 1, v2(n2.costs));
  const { routeInfo: B } = e2, { findBestSequence: P, preserveFirstStop: j2, preserveLastStop: I2, startTimeIsUTC: N2, timeWindowsAreUTC: _ } = r2;
  B.analysisSettings = new l$6({ accumulateAttributes: g2, directionsLanguage: S2, findBestSequence: P, preserveFirstStop: j2, preserveLastStop: I2, startTimeIsUTC: N2, timeWindowsAreUTC: _, travelMode: a2 }), B.totalDuration = ae((_m = B.totalCosts[l2]) != null ? _m : 0, h2), B.totalDistance = le((_n2 = B.totalCosts[c2]) != null ? _n2 : 0, w2), B.totalLateDuration = ae((_o = B.totalViolations[l2]) != null ? _o : 0, h2), B.totalWaitDuration = ae((_p = B.totalWait[l2]) != null ? _p : 0, h2), r$3(B.totalCosts) && v2(B.totalCosts), r$3(B.totalViolations) && v2(B.totalViolations), r$3(B.totalWait) && v2(B.totalWait);
  for (const n2 of e2.stops)
    r$3(n2.serviceCosts) && (n2.serviceDuration = ae((_q = n2.serviceCosts[l2]) != null ? _q : 0, h2), n2.serviceDistance = le((_r = n2.serviceCosts[c2]) != null ? _r : 0, w2), v2(n2.serviceCosts)), r$3(n2.cumulativeCosts) && (n2.cumulativeDuration = ae((_s = n2.cumulativeCosts[l2]) != null ? _s : 0, h2), n2.cumulativeDistance = le((_t = n2.cumulativeCosts[c2]) != null ? _t : 0, w2), v2(n2.cumulativeCosts)), r$3(n2.violations) && (n2.lateDuration = ae((_u = n2.violations[l2]) != null ? _u : 0, h2), v2(n2.violations)), r$3(n2.wait) && (n2.waitDuration = ae((_v = n2.wait[l2]) != null ? _v : 0, h2), v2(n2.wait));
}
async function ne(e2) {
  const t2 = k$1.WGS84;
  return await _n(e2.spatialReference, t2), rn(e2, t2);
}
function ae(e2, t2) {
  switch (t2) {
    case "seconds":
      return e2 / 60;
    case "hours":
      return 60 * e2;
    case "days":
      return 60 * e2 * 24;
    default:
      return e2;
  }
}
function le(e2, t2) {
  return t2 === "decimal-degrees" || t2 === "points" || t2 === "unknown" ? e2 : E(e2, t2, "meters");
}
function pe(e2) {
  const { attributes: t2, geometry: r2, popupTemplate: o2, symbol: i2 } = e2.toGraphic().toJSON();
  return { attributes: t2, geometry: r2, popupInfo: o2, symbol: i2 };
}
const ue = j$1.ofType(b), me = j$1.ofType(h), ce = j$1.ofType(O$1), ye = j$1.ofType(g$1), fe = j$1.ofType(f$4), de = j$1.ofType(D$2), he = "esri.layers.RouteLayer", we = s$1.getLogger(he);
let Se = class extends n$7(t$3(c$8(v$4(O$2(a$5(b$1)))))) {
  constructor(e2) {
    super(e2), this._cachedServiceDescription = null, this._featureCollection = null, this._type = "Feature Collection", this.defaultSymbols = new y$3(), this.directionLines = null, this.directionPoints = null, this.featureCollectionType = "route", this.legendEnabled = false, this.maxScale = 0, this.minScale = 0, this.pointBarriers = new ce(), this.polygonBarriers = new ye(), this.polylineBarriers = new fe(), this.routeInfo = null, this.spatialReference = k$1.WGS84, this.stops = new de(), this.type = "route";
    const t2 = () => {
      this._setStopSymbol(this.stops);
    };
    this.addHandles(a$6(() => this.stops, "change", t2, { sync: true, onListenerAdd: t2 }));
  }
  writeFeatureCollectionWebmap(e2, t2, r2, o2) {
    const i2 = [this._writePolygonBarriers(), this._writePolylineBarriers(), this._writePointBarriers(), this._writeRouteInfo(), this._writeDirectionLines(), this._writeDirectionPoints(), this._writeStops()].filter((e3) => !!e3), s2 = i2.map((e3, t3) => t3), n2 = o2.origin === "web-map" ? "featureCollection.layers" : "layers";
    o$1(n2, i2, t2), t2.opacity = this.opacity, t2.visibility = this.visible, t2.visibleLayers = s2;
  }
  readDirectionLines(e2, t2) {
    return this._getNetworkFeatures(t2, "DirectionLines", (e3) => b.fromGraphic(e3));
  }
  readDirectionPoints(e2, t2) {
    return this._getNetworkFeatures(t2, "DirectionPoints", (e3) => h.fromGraphic(e3));
  }
  get fullExtent() {
    var _a;
    const e2 = new w$1({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: k$1.WGS84 });
    if (r$3(this.routeInfo) && r$3(this.routeInfo.geometry))
      return (_a = this.routeInfo.geometry.extent) != null ? _a : e2;
    if (t$1(this.stops))
      return e2;
    const t2 = this.stops.filter((e3) => r$3(e3.geometry));
    if (t2.length < 2)
      return e2;
    const { spatialReference: r2 } = t2.getItemAt(0).geometry;
    if (t$1(r2))
      return e2;
    const o2 = t2.toArray().map((e3) => {
      const t3 = e3.geometry;
      return [t3.x, t3.y];
    });
    return new u$6({ points: o2, spatialReference: r2 }).extent;
  }
  readMaxScale(e2, t2) {
    var _a, _b;
    return (_b = (_a = (re(t2) ? t2.layers : t2.featureCollection.layers).find((e3) => r$3(e3.layerDefinition.maxScale))) == null ? void 0 : _a.layerDefinition.maxScale) != null ? _b : 0;
  }
  readMinScale(e2, t2) {
    var _a, _b;
    return (_b = (_a = (re(t2) ? t2.layers : t2.featureCollection.layers).find((e3) => r$3(e3.layerDefinition.minScale))) == null ? void 0 : _a.layerDefinition.minScale) != null ? _b : 0;
  }
  readPointBarriers(e2, t2) {
    return this._getNetworkFeatures(t2, "Barriers", (e3) => O$1.fromGraphic(e3));
  }
  readPolygonBarriers(e2, t2) {
    return this._getNetworkFeatures(t2, "PolygonBarriers", (e3) => g$1.fromGraphic(e3));
  }
  readPolylineBarriers(e2, t2) {
    return this._getNetworkFeatures(t2, "PolylineBarriers", (e3) => f$4.fromGraphic(e3));
  }
  readRouteInfo(e2, t2) {
    const r2 = this._getNetworkFeatures(t2, "RouteInfo", (e3) => h$1.fromGraphic(e3));
    return r2.length > 0 ? r2.getItemAt(0) : null;
  }
  readSpatialReference(e2, t2) {
    var _a, _b, _c, _d, _e;
    const r2 = re(t2) ? t2.layers : t2.featureCollection.layers;
    if (!r2.length)
      return k$1.WGS84;
    const { layerDefinition: o2, featureSet: i2 } = r2[0], s2 = i2.features[0], n2 = (_e = (_d = (_c = (_b = (_a = e$1(s2 == null ? void 0 : s2.geometry)) == null ? void 0 : _a.spatialReference) != null ? _b : i2.spatialReference) != null ? _c : o2.spatialReference) != null ? _d : o2.extent.spatialReference) != null ? _e : c$9;
    return k$1.fromJSON(n2);
  }
  readStops(e2, t2) {
    return this._getNetworkFeatures(t2, "Stops", (e3) => D$2.fromGraphic(e3), (e3) => this._setStopSymbol(e3));
  }
  get title() {
    return r$3(this.routeInfo) && r$3(this.routeInfo.name) ? this.routeInfo.name : "Route";
  }
  set title(e2) {
    this._overrideIfSome("title", e2);
  }
  get url() {
    return s$5.routeServiceUrl;
  }
  set url(e2) {
    e2 != null ? this._set("url", S$2(e2, we)) : this._set("url", s$5.routeServiceUrl);
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e2)), Promise.resolve(this);
  }
  removeAll() {
    this.removeResult(), this.pointBarriers.removeAll(), this.polygonBarriers.removeAll(), this.polylineBarriers.removeAll(), this.stops.removeAll();
  }
  removeResult() {
    r$3(this.directionLines) && (this.directionLines.removeAll(), this._set("directionLines", null)), r$3(this.directionPoints) && (this.directionPoints.removeAll(), this._set("directionPoints", null)), r$3(this.routeInfo) && this._set("routeInfo", null);
  }
  async save() {
    await this.load();
    const { fullExtent: e2, portalItem: t2 } = this;
    if (!t2)
      throw new s$2("routelayer:portal-item-not-set", "save() requires to the layer to have a portal item");
    if (!t2.id)
      throw new s$2("routelayer:portal-item-not-saved", "Please use saveAs() first to save the routelayer");
    if (t2.type !== "Feature Collection")
      throw new s$2("routelayer:portal-item-wrong-type", 'Portal item needs to have type "Feature Collection"');
    if (t$1(this.routeInfo))
      throw new s$2("routelayer:route-unsolved", "save() requires a solved route");
    const { portal: r2 } = t2;
    await r2._signIn(), r2.user || await t2.reload();
    const { itemUrl: o2, itemControl: i2 } = t2;
    if (i2 !== "admin" && i2 !== "update")
      throw new s$2("routelayer:insufficient-permissions", "To save this layer, you need to be the owner or an administrator of your organization");
    const s2 = { messages: [], origin: "portal-item", portal: r2, url: o2 && j$2(o2), writtenProperties: [] }, a2 = this.write(null, s2);
    return t2.extent = await ne(e2), t2.title = this.title, await t2.update({ data: a2 }), t2;
  }
  async saveAs(e2, t2 = {}) {
    var _a, _b, _c;
    if (await this.load(), t$1(this.routeInfo))
      throw new s$2("routelayer:route-unsolved", "saveAs() requires a solved route");
    const r2 = x$1.from(e2).clone();
    (_a = r2.extent) != null ? _a : r2.extent = await ne(this.fullExtent), r2.id = null, (_b = r2.portal) != null ? _b : r2.portal = j$3.getDefault(), (_c = r2.title) != null ? _c : r2.title = this.title, r2.type = "Feature Collection", r2.typeKeywords = ["Data", "Feature Collection", f$5.MULTI_LAYER, "Route Layer"];
    const { portal: o2 } = r2, i2 = { messages: [], origin: "portal-item", portal: o2, url: null, writtenProperties: [] };
    await o2._signIn();
    const s2 = t2 == null ? void 0 : t2.folder, a2 = this.write(null, i2);
    return await o2.user.addItem({ item: r2, folder: s2, data: a2 }), this.portalItem = r2, i$7(i2), i2.portalItem = r2, r2;
  }
  async solve(e2, t2) {
    var _a, _b, _c, _d, _e;
    const r2 = (_a = e2 == null ? void 0 : e2.stops) != null ? _a : this.stops, o2 = (_b = e2 == null ? void 0 : e2.pointBarriers) != null ? _b : X(this.pointBarriers), i2 = (_c = e2 == null ? void 0 : e2.polylineBarriers) != null ? _c : X(this.polylineBarriers), a2 = (_d = e2 == null ? void 0 : e2.polygonBarriers) != null ? _d : X(this.polygonBarriers);
    if (t$1(r2))
      throw new s$2("routelayer:undefined-stops", "the route layer must have stops defined in the route parameters.");
    if ((oe(r2) || ie(r2)) && r2.features.length < 2 || j$1.isCollection(r2) && r2.length < 2)
      throw new s$2("routelayer:insufficent-stops", "the route layer must have two or more stops to solve a route.");
    if (j$1.isCollection(r2))
      for (const s2 of r2)
        s2.routeName = null;
    const l2 = e2 == null ? void 0 : e2.apiKey, m$12 = this.url, y2 = await this._getServiceDescription(m$12, l2, t2), f2 = ee(y2), h2 = (_e = e2 == null ? void 0 : e2.travelMode) != null ? _e : f2, w2 = l$5(e2 == null ? void 0 : e2.accumulateAttributes, []);
    r$3(h2) && (w2.push(h2.distanceAttributeName), h2.timeAttributeName && w2.push(h2.timeAttributeName));
    const S2 = { startTime: new Date() }, g2 = { accumulateAttributes: w2, directionsOutputType: "featuresets", ignoreInvalidLocations: true, pointBarriers: o2, polylineBarriers: i2, polygonBarriers: a2, preserveFirstStop: true, preserveLastStop: true, returnBarriers: !!o2, returnDirections: true, returnPolygonBarriers: !!a2, returnPolylineBarriers: !!i2, returnRoutes: true, returnStops: true, stops: r2 }, b2 = e2 ? I.from(e2) : new I();
    for (const s2 in S2)
      b2[s2] == null && (b2[s2] = S2[s2]);
    let v2;
    b2.set(g2);
    try {
      v2 = await m(m$12, b2, t2);
    } catch (P) {
      throw j$4(P) ? P : new s$2("routelayer:failed-route-request", "the routing request failed", { error: P });
    }
    const B = this._toRouteLayerSolution(v2);
    return this._isOverridden("title") || (this.title = l$5(B.routeInfo.name, "Route")), se(B, y2, b2), B;
  }
  update(e2) {
    const { stops: t2, directionLines: r2, directionPoints: o2, pointBarriers: i2, polylineBarriers: s2, polygonBarriers: n2, routeInfo: a2 } = e2;
    this.set({ stops: t2, pointBarriers: i2, polylineBarriers: s2, polygonBarriers: n2 }), this._set("directionLines", r2), this._set("directionPoints", o2), this._set("routeInfo", a2), r$3(a2.geometry) && (this.spatialReference = a2.geometry.spatialReference);
  }
  _getNetworkFeatures(e2, t2, n2, a2) {
    var _a, _b, _c;
    const l2 = (re(e2) ? e2.layers : e2.featureCollection.layers).find((e3) => e3.layerDefinition.name === t2);
    if (t$1(l2))
      return new j$1();
    const { layerDefinition: m2, popupInfo: c2, featureSet: y2 } = l2, f2 = m2.drawingInfo.renderer, { features: d2 } = y2, h2 = (_c = (_b = (_a = y2.spatialReference) != null ? _a : m2.spatialReference) != null ? _b : m2.extent.spatialReference) != null ? _c : c$9, w2 = f2 && o$2(f2), S2 = k$1.fromJSON(h2), g$12 = d2.map((e3) => {
      var _a2, _b2, _c2;
      const i2 = g.fromJSON(e3);
      r$3(i2.geometry) && r$3(e3.geometry) && t$1(e3.geometry.spatialReference) && (i2.geometry.spatialReference = S2);
      const s2 = n2(i2);
      return (_b2 = s2.symbol) != null ? _b2 : s2.symbol = (_a2 = w2 == null ? void 0 : w2.getSymbol(i2)) != null ? _a2 : this._getNetworkSymbol(t2), (_c2 = s2.popupTemplate) != null ? _c2 : s2.popupTemplate = c2 && k$2.fromJSON(c2), s2;
    });
    return a2 && g$12.some((e3) => !e3.symbol) && a2(g$12), new j$1(g$12);
  }
  _getNetworkSymbol(e2) {
    switch (e2) {
      case "Barriers":
        return this.defaultSymbols.pointBarriers;
      case "DirectionPoints":
        return this.defaultSymbols.directionPoints;
      case "DirectionLines":
        return this.defaultSymbols.directionLines;
      case "PolylineBarriers":
        return this.defaultSymbols.polylineBarriers;
      case "PolygonBarriers":
        return this.defaultSymbols.polygonBarriers;
      case "RouteInfo":
        return this.defaultSymbols.routeInfo;
      case "Stops":
        return null;
    }
  }
  async _getServiceDescription(e2, t2, r2) {
    if (r$3(this._cachedServiceDescription) && this._cachedServiceDescription.url === e2)
      return this._cachedServiceDescription.serviceDescription;
    const o2 = await p$4(e2, t2, r2);
    return this._cachedServiceDescription = { serviceDescription: o2, url: e2 }, o2;
  }
  _setStopSymbol(e2) {
    if (!e2 || e2.length === 0)
      return;
    if (t$1(this.defaultSymbols.stops))
      return;
    if (e2.every((e3) => r$3(e3.symbol)))
      return;
    const { first: t2, last: r2, middle: o2, unlocated: i2, waypoint: s2, break: n2 } = this.defaultSymbols.stops;
    if (t$1(this.routeInfo) || e2.length === 1)
      return void e2.forEach((i3, s3) => {
        switch (s3) {
          case 0:
            i3.symbol = t2;
            break;
          case e2.length - 1:
            i3.symbol = r2;
            break;
          default:
            i3.symbol = o2;
        }
      });
    const a2 = e2.map((e3) => e3.sequence).filter((e3) => r$3(e3)), l2 = Math.min(...a2), m2 = Math.max(...a2);
    for (const p2 of e2)
      p2.sequence !== l2 ? p2.sequence !== m2 ? p2.status === "ok" || p2.status === "not-located-on-closest" ? p2.locationType !== "waypoint" ? p2.locationType !== "break" ? p2.symbol = o2 : p2.symbol = n2 : p2.symbol = s2 : p2.symbol = i2 : p2.symbol = r2 : p2.symbol = t2;
  }
  _toRouteLayerSolution(e2) {
    var _a, _b, _c, _d, _e;
    const t2 = e2.routeResults[0].stops.map((e3) => D$2.fromJSON(e3.toJSON()));
    this._setStopSymbol(t2);
    const r2 = new de(t2), o2 = new ye((_a = e2.polygonBarriers) == null ? void 0 : _a.map((e3) => {
      const t3 = g$1.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.polygonBarriers, t3;
    })), i2 = new fe((_b = e2.polylineBarriers) == null ? void 0 : _b.map((e3) => {
      const t3 = f$4.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.polylineBarriers, t3;
    })), s2 = new ce((_c = e2.pointBarriers) == null ? void 0 : _c.map((e3) => {
      const t3 = O$1.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.pointBarriers, t3;
    })), n2 = h$1.fromJSON(e2.routeResults[0].route.toJSON());
    n2.symbol = this.defaultSymbols.routeInfo;
    const a2 = new me((_d = e2.routeResults[0].directionPoints) == null ? void 0 : _d.features.map((e3) => {
      const t3 = h.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.directionPoints, t3;
    }));
    return { directionLines: new ue((_e = e2.routeResults[0].directionLines) == null ? void 0 : _e.features.map((e3) => {
      const t3 = b.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.directionLines, t3;
    })), directionPoints: a2, pointBarriers: s2, polygonBarriers: o2, polylineBarriers: i2, routeInfo: n2, stops: r2 };
  }
  _writeDirectionLines() {
    return this._writeNetworkFeatures(this.directionLines, this.defaultSymbols.directionLines, "esriGeometryPolyline", b.fields, b.popupInfo, "DirectionLines", "Direction Lines");
  }
  _writeDirectionPoints() {
    return this._writeNetworkFeatures(this.directionPoints, this.defaultSymbols.directionPoints, "esriGeometryPoint", h.fields, h.popupInfo, "DirectionPoints", "Direction Points");
  }
  _writeNetworkFeatures(e2, t2, r2, o2, i2, s2, n2) {
    if (t$1(e2) || !e2.length)
      return null;
    const a2 = this.spatialReference.toJSON(), { fullExtent: l2, maxScale: m2, minScale: c2 } = this;
    return { featureSet: { features: e2.toArray().map((e3) => pe(e3)), geometryType: r2, spatialReference: a2 }, layerDefinition: { capabilities: "Query,Update,Editing", drawingInfo: { renderer: { type: "simple", symbol: r$3(t2) ? t2.toJSON() : te(r2) } }, extent: l2.toJSON(), fields: o2, geometryType: r2, hasM: false, hasZ: false, maxScale: m2, minScale: c2, name: s2, objectIdField: "ObjectID", spatialReference: a2, title: n2, type: "Feature Layer", typeIdField: "" }, popupInfo: i2 };
  }
  _writePointBarriers() {
    return this._writeNetworkFeatures(this.pointBarriers, this.defaultSymbols.pointBarriers, "esriGeometryPoint", O$1.fields, O$1.popupInfo, "Barriers", "Point Barriers");
  }
  _writePolygonBarriers() {
    return this._writeNetworkFeatures(this.polygonBarriers, this.defaultSymbols.polygonBarriers, "esriGeometryPolygon", g$1.fields, g$1.popupInfo, "PolygonBarriers", "Polygon Barriers");
  }
  _writePolylineBarriers() {
    return this._writeNetworkFeatures(this.polylineBarriers, this.defaultSymbols.polylineBarriers, "esriGeometryPolyline", f$4.fields, f$4.popupInfo, "PolylineBarriers", "Line Barriers");
  }
  _writeRouteInfo() {
    return this._writeNetworkFeatures(r$3(this.routeInfo) ? new j$1([this.routeInfo]) : null, this.defaultSymbols.routeInfo, "esriGeometryPolyline", h$1.fields, h$1.popupInfo, "RouteInfo", "Route Details");
  }
  _writeStops() {
    const e2 = this._writeNetworkFeatures(this.stops, null, "esriGeometryPoint", D$2.fields, D$2.popupInfo, "Stops", "Stops");
    if (t$1(e2))
      return null;
    const { stops: t2 } = this.defaultSymbols, r2 = r$3(t2) && r$3(t2.first) && t2.first.toJSON(), o2 = r$3(t2) && r$3(t2.middle) && t2.middle.toJSON(), i2 = r$3(t2) && r$3(t2.last) && t2.last.toJSON();
    return e2.layerDefinition.drawingInfo.renderer = { type: "uniqueValue", field1: "Sequence", defaultSymbol: o2, uniqueValueInfos: [{ value: "1", symbol: r2, label: "First Stop" }, { value: `${this.stops.length}`, symbol: i2, label: "Last Stop" }] }, e2;
  }
};
e([y$4({ readOnly: true, json: { read: false, origins: { "portal-item": { write: { allowNull: true, ignoreOrigin: true } }, "web-map": { write: { overridePolicy() {
  return { allowNull: true, ignoreOrigin: this.portalItem == null };
} } } } } })], Se.prototype, "_featureCollection", void 0), e([r$1(["web-map", "portal-item"], "_featureCollection")], Se.prototype, "writeFeatureCollectionWebmap", null), e([y$4({ readOnly: true, json: { read: false, origins: { "web-map": { write: { target: "type", overridePolicy() {
  return { ignoreOrigin: this.portalItem != null };
} } } } } })], Se.prototype, "_type", void 0), e([y$4({ nonNullable: true, type: y$3 })], Se.prototype, "defaultSymbols", void 0), e([y$4({ readOnly: true })], Se.prototype, "directionLines", void 0), e([o(["web-map", "portal-item"], "directionLines", ["layers", "featureCollection.layers"])], Se.prototype, "readDirectionLines", null), e([y$4({ readOnly: true })], Se.prototype, "directionPoints", void 0), e([o(["web-map", "portal-item"], "directionPoints", ["layers", "featureCollection.layers"])], Se.prototype, "readDirectionPoints", null), e([y$4({ readOnly: true, json: { read: false, origins: { "web-map": { write: { ignoreOrigin: true } } } } })], Se.prototype, "featureCollectionType", void 0), e([y$4({ readOnly: true })], Se.prototype, "fullExtent", null), e([y$4({ json: { origins: { "web-map": { name: "featureCollection.showLegend" } }, write: true } })], Se.prototype, "legendEnabled", void 0), e([y$4({ type: ["show", "hide"] })], Se.prototype, "listMode", void 0), e([y$4({ type: Number, nonNullable: true, json: { write: false } })], Se.prototype, "maxScale", void 0), e([o(["web-map", "portal-item"], "maxScale", ["layers", "featureCollection.layers"])], Se.prototype, "readMaxScale", null), e([y$4({ type: Number, nonNullable: true, json: { write: false } })], Se.prototype, "minScale", void 0), e([o(["web-map", "portal-item"], "minScale", ["layers", "featureCollection.layers"])], Se.prototype, "readMinScale", null), e([y$4({ type: ["ArcGISFeatureLayer"], value: "ArcGISFeatureLayer" })], Se.prototype, "operationalLayerType", void 0), e([y$4({ nonNullable: true, type: j$1.ofType(O$1) })], Se.prototype, "pointBarriers", void 0), e([o(["web-map", "portal-item"], "pointBarriers", ["layers", "featureCollection.layers"])], Se.prototype, "readPointBarriers", null), e([y$4({ nonNullable: true, type: j$1.ofType(g$1) })], Se.prototype, "polygonBarriers", void 0), e([o(["web-map", "portal-item"], "polygonBarriers", ["layers", "featureCollection.layers"])], Se.prototype, "readPolygonBarriers", null), e([y$4({ nonNullable: true, type: j$1.ofType(f$4) })], Se.prototype, "polylineBarriers", void 0), e([o(["web-map", "portal-item"], "polylineBarriers", ["layers", "featureCollection.layers"])], Se.prototype, "readPolylineBarriers", null), e([y$4({ readOnly: true })], Se.prototype, "routeInfo", void 0), e([o(["web-map", "portal-item"], "routeInfo", ["layers", "featureCollection.layers"])], Se.prototype, "readRouteInfo", null), e([y$4({ type: k$1 })], Se.prototype, "spatialReference", void 0), e([o(["web-map", "portal-item"], "spatialReference", ["layers", "featureCollection.layers"])], Se.prototype, "readSpatialReference", null), e([y$4({ nonNullable: true, type: j$1.ofType(D$2) })], Se.prototype, "stops", void 0), e([o(["web-map", "portal-item"], "stops", ["layers", "featureCollection.layers"])], Se.prototype, "readStops", null), e([y$4()], Se.prototype, "title", null), e([y$4({ readOnly: true, json: { read: false } })], Se.prototype, "type", void 0), e([y$4()], Se.prototype, "url", null), Se = e([n$4(he)], Se);
const ge = Se;
export { ge as default };
