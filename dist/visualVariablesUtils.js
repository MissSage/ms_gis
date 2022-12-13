var __defProp = Object.defineProperty;
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
import { bH as o$1, t as t$1, A as u$2 } from "./index.js";
import { l as A, p as i$1 } from "./Utils2.js";
import { ac as c$2 } from "./enums2.js";
import { l as l$1 } from "./visualVariablesUtils2.js";
const n$1 = 8388607, t = 8388608, r$1 = 254, o = 255, u$1 = 0, c$1 = 1, e = (n2) => (n2 & t) >>> 23, f$1 = (t2) => t2 & n$1, i = (n2) => e(n2) === c$1 ? r$1 : o;
function p$1(n2) {
  return e(n2) === c$1;
}
function s(n2, r2) {
  return ((r2 ? t : 0) | n2) >>> 0;
}
const n = (n2, l2) => n2 && ((...n3) => l2.warn("DEBUG:", ...n3)) || (() => null), l = false;
function r(e2, t2) {
  if (!e2 || !t2)
    return e2;
  switch (t2) {
    case "radius":
    case "distance":
      return 2 * e2;
    case "diameter":
    case "width":
      return e2;
    case "area":
      return Math.sqrt(e2);
  }
  return e2;
}
function a(e2) {
  return { value: e2.value, size: o$1(e2.size) };
}
function u(e2) {
  return e2.map((e3) => a(e3));
}
function p(e2) {
  if (typeof e2 == "string" || typeof e2 == "number")
    return o$1(e2);
  const s2 = e2;
  return { type: "size", expression: s2.expression, stops: u(s2.stops) };
}
const c = (e2) => {
  const t2 = [], n2 = [], i2 = u(e2), l2 = i2.length;
  for (let r2 = 0; r2 < 6; r2++) {
    const e3 = i2[Math.min(r2, l2 - 1)];
    t2.push(e3.value), n2.push(e3.size == null ? c$2 : u$2(e3.size));
  }
  return { values: new Float32Array(t2), sizes: new Float32Array(n2) };
};
function f(e2) {
  const t2 = e2 && e2.length > 0 ? {} : null, s2 = t2 ? {} : null;
  if (!t2)
    return { vvFields: t2, vvRanges: s2 };
  for (const n2 of e2)
    if (n2.field && (t2[n2.type] = n2.field), n2.type === "size") {
      s2.size || (s2.size = {});
      const e3 = n2;
      switch (l$1(e3)) {
        case A.SIZE_MINMAX_VALUE:
          s2.size.minMaxValue = { minDataValue: e3.minDataValue, maxDataValue: e3.maxDataValue, minSize: p(e3.minSize), maxSize: p(e3.maxSize) };
          break;
        case A.SIZE_SCALE_STOPS:
          s2.size.scaleStops = { stops: u(e3.stops) };
          break;
        case A.SIZE_FIELD_STOPS:
          if (e3.levels) {
            const t3 = {};
            for (const s3 in e3.levels)
              t3[s3] = c(e3.levels[s3]);
            s2.size.fieldStops = { type: "level-dependent", levels: t3 };
          } else
            s2.size.fieldStops = __spreadValues({ type: "static" }, c(e3.stops));
          break;
        case A.SIZE_UNIT_VALUE:
          s2.size.unitValue = { unit: e3.valueUnit, valueRepresentation: e3.valueRepresentation };
      }
    } else if (n2.type === "color")
      s2.color = g(n2);
    else if (n2.type === "opacity")
      s2.opacity = m(n2);
    else if (n2.type === "rotation") {
      const e3 = n2;
      s2.rotation = { type: e3.rotationType };
    }
  return { vvFields: t2, vvRanges: s2 };
}
function m(e2) {
  const t2 = { values: [0, 0, 0, 0, 0, 0, 0, 0], opacities: [0, 0, 0, 0, 0, 0, 0, 0] };
  if (typeof e2.field == "string") {
    if (!e2.stops)
      return null;
    {
      if (e2.stops.length > 8)
        return null;
      const s2 = e2.stops;
      for (let e3 = 0; e3 < 8; ++e3) {
        const n2 = s2[Math.min(e3, s2.length - 1)];
        t2.values[e3] = n2.value, t2.opacities[e3] = n2.opacity;
      }
    }
  } else {
    if (!(e2.stops && e2.stops.length >= 0))
      return null;
    {
      const s2 = e2.stops && e2.stops.length >= 0 && e2.stops[0].opacity;
      for (let e3 = 0; e3 < 8; e3++)
        t2.values[e3] = 1 / 0, t2.opacities[e3] = s2;
    }
  }
  return t2;
}
function v(e2, t2, s2) {
  e2[4 * t2 + 0] = s2.r / 255, e2[4 * t2 + 1] = s2.g / 255, e2[4 * t2 + 2] = s2.b / 255, e2[4 * t2 + 3] = s2.a;
}
function g(t2) {
  if (t$1(t2))
    return null;
  if (t2.normalizationField)
    return null;
  const s2 = { field: null, values: [0, 0, 0, 0, 0, 0, 0, 0], colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  if (typeof t2.field == "string") {
    if (!t2.stops)
      return null;
    {
      if (t2.stops.length > 8)
        return null;
      s2.field = t2.field;
      const e2 = t2.stops;
      for (let t3 = 0; t3 < 8; ++t3) {
        const n2 = e2[Math.min(t3, e2.length - 1)];
        s2.values[t3] = n2.value, v(s2.colors, t3, n2.color);
      }
    }
  } else {
    if (!(t2.stops && t2.stops.length >= 0))
      return null;
    {
      const e2 = t2.stops && t2.stops.length >= 0 && t2.stops[0].color;
      for (let t3 = 0; t3 < 8; t3++)
        s2.values[t3] = 1 / 0, v(s2.colors, t3, e2);
    }
  }
  for (let e2 = 0; e2 < 32; e2 += 4)
    i$1(s2.colors, e2, true);
  return s2;
}
export { n$1 as a, f as b, c$1 as c, e, f$1 as f, i, l, n, p$1 as p, r, s, u$1 as u };
