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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { hC as C$5, a7 as w$7, g2 as y$7, cr as w$8, cw as p$6, aq as v$4, cp as m$7, cq as u$7, eN as l$b, t as t$8, hD as h$5, a as r$8, k as e$9, c0 as v$5, b$ as rt, bb as G$4, dp as a$7, ch as $$4, e5 as c$7, aK as k$4, bN as j$3, U as U$4, h as has, aX as y$8, hE as e$a } from "./index.js";
import { s as s$d, p as p$7 } from "./number.js";
var e$8;
!function(e2) {
  e2.AsyncNotEnabled = "AsyncNotEnabled", e2.ModulesNotSupported = "ModulesNotSupported", e2.CircularModules = "CircularModules", e2.NeverReach = "NeverReach", e2.UnsupportedHashType = "UnsupportedHashType", e2.InvalidParameter = "InvalidParameter", e2.UnexpectedToken = "UnexpectedToken", e2.Unrecognised = "Unrecognised", e2.UnrecognisedType = "UnrecognisedType", e2.MaximumCallDepth = "MaximumCallDepth", e2.BooleanConditionRequired = "BooleanConditionRequired", e2.TypeNotAllowedInFeature = "TypeNotAllowedInFeature", e2.KeyMustBeString = "KeyMustBeString", e2.WrongNumberOfParameters = "WrongNumberOfParameters", e2.CallNonFunction = "CallNonFunction", e2.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral", e2.NoFunctionInDictionary = "NoFunctionInDictionary", e2.NoFunctionInArray = "NoFunctionInArray", e2.AssignModuleFunction = "AssignModuleFunction", e2.LogicExpressionOrAnd = "LogicExpressionOrAnd", e2.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean", e2.FuncionNotFound = "FunctionNotFound", e2.InvalidMemberAccessKey = "InvalidMemberAccessKey", e2.UnsupportedUnaryOperator = "UnsupportUnaryOperator", e2.InvalidIdentifier = "InvalidIdentifier", e2.MemberOfNull = "MemberOfNull", e2.UnsupportedOperator = "UnsupportedOperator", e2.Cancelled = "Cancelled", e2.ModuleAccessorMustBeString = "ModuleAccessorMustBeString", e2.ModuleExportNotFound = "ModuleExportNotFound", e2.Immutable = "Immutable", e2.OutOfBounds = "OutOfBounds", e2.IllegalResult = "IllegalResult", e2.FieldNotFound = "FieldNotFound", e2.PortalRequired = "PortalRequired", e2.LogicError = "LogicError", e2.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber", e2.KeyAccessorMustBeString = "KeyAccessorMustBeString", e2.WrongSpatialReference = "WrongSpatialReference";
}(e$8 || (e$8 = {}));
const r$7 = { [e$8.TypeNotAllowedInFeature]: "Feature attributes only support dates, numbers, strings, guids.", [e$8.LogicError]: "Logic error - {reason}", [e$8.NeverReach]: "Encountered unreachable logic", [e$8.AsyncNotEnabled]: "Async Arcade must be enabled for this script", [e$8.ModuleAccessorMustBeString]: "Module accessor must be a string", [e$8.ModuleExportNotFound]: "Module has no export with provided identifier", [e$8.ModulesNotSupported]: "Current profile does not support modules", [e$8.ArrayAccessorMustBeNumber]: "Array accessor must be a number", [e$8.FuncionNotFound]: "Function not found", [e$8.FieldNotFound]: "Key not found - {key}", [e$8.CircularModules]: "Circular module dependencies are not allowed", [e$8.Cancelled]: "Execution cancelled", [e$8.UnsupportedHashType]: "Type not supported in hash function", [e$8.IllegalResult]: "Value is not a supported return type", [e$8.PortalRequired]: "Portal is required", [e$8.InvalidParameter]: "Invalid parameter", [e$8.WrongNumberOfParameters]: "Call with wrong number of parameters", [e$8.Unrecognised]: "Unrecognised code structure", [e$8.UnrecognisedType]: "Unrecognised type", [e$8.WrongSpatialReference]: "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference", [e$8.BooleanConditionRequired]: "Conditions must use booleans", [e$8.NoFunctionInDictionary]: "Dictionaries cannot contain functions.", [e$8.NoFunctionInArray]: "Arrays cannot contain functions.", [e$8.NoFunctionInTemplateLiteral]: "Template Literals do not expect functions by value.", [e$8.KeyAccessorMustBeString]: "Accessor must be a string", [e$8.KeyMustBeString]: "Object keys must be a string", [e$8.Immutable]: "Object is immutable", [e$8.InvalidParameter]: "Invalid parameter", [e$8.UnexpectedToken]: "Unexpected token", [e$8.MemberOfNull]: "Cannot access property of null object", [e$8.MaximumCallDepth]: "Exceeded maximum function depth", [e$8.OutOfBounds]: "Out of bounds", [e$8.InvalidIdentifier]: "Identifier not recognised", [e$8.FuncionNotFound]: "Function not found", [e$8.CallNonFunction]: "Expression is not a function", [e$8.InvalidMemberAccessKey]: "Cannot access value using a key of this type", [e$8.AssignModuleFunction]: "Cannot assign function to module variable", [e$8.UnsupportedUnaryOperator]: "Unsupported unary operator", [e$8.UnsupportedOperator]: "Unsupported operator", [e$8.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean", [e$8.LogicExpressionOrAnd]: "Logical expression can only be combined with || or &&" };
class o$6 extends Error {
  constructor(...e2) {
    super(...e2);
  }
}
class n$6 extends o$6 {
  constructor(e2, r2) {
    super(a$6(r2) + e2.message, { cause: e2 }), this.loc = null, Error.captureStackTrace && Error.captureStackTrace(this, n$6), r2 && r2.loc && (this.loc = r2.loc);
  }
}
class t$7 extends Error {
  constructor(e2, o2, n2, s2) {
    super("Execution error - " + a$6(n2) + i$8(r$7[o2], s2)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadeexecutionerror", Error.captureStackTrace && Error.captureStackTrace(this, t$7), n2 && n2.loc && (this.loc = n2.loc);
  }
}
function a$6(e2) {
  var _a, _b;
  return e2 && e2.loc ? `Line : ${(_a = e2.loc.start) == null ? void 0 : _a.line}, ${(_b = e2.loc.start) == null ? void 0 : _b.column}: ` : "";
}
class s$c extends Error {
  constructor(e2, o2, n2, t2) {
    super("Compilation error - " + a$6(n2) + i$8(r$7[o2], t2)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadecompilationerror", Error.captureStackTrace && Error.captureStackTrace(this, s$c), n2 && n2.loc && (this.loc = n2.loc);
  }
}
class c$6 extends Error {
  constructor() {
    super("Uncompilable code structures"), this.declaredRootClass = "esri.arcade.arcadeuncompilableerror", Error.captureStackTrace && Error.captureStackTrace(this, c$6);
  }
}
function i$8(e2, r2) {
  try {
    if (!r2)
      return e2;
    for (const o2 in r2) {
      let n2 = r2[o2];
      n2 || (n2 = ""), e2 = e2.replace("{" + o2 + "}", r2[o2]);
    }
  } catch (o2) {
  }
  return e2;
}
function u$6(e2, r2, o2) {
  return o2.declaredRootClass === "esri.arcade.arcadeexecutionerror" || o2.declaredRootClass === "esri.arcade.arcadecompilationerror" ? o2.loc === null && r2 && r2.loc ? new n$6(o2, { cause: o2 }) : o2 : (o2.declaredRootClass === "esri.arcade.featureset.support.featureseterror" || o2.declaredRootClass, r2 && r2.loc ? new n$6(o2, { cause: o2 }) : o2);
}
var l$a;
!function(e2) {
  e2.UnrecognisedUri = "UnrecognisedUri", e2.UnsupportedUriProtocol = "UnsupportedUriProtocol";
}(l$a || (l$a = {}));
const d$8 = { [l$a.UnrecognisedUri]: "Unrecognised uri - {uri}", [l$a.UnsupportedUriProtocol]: "Unrecognised uri protocol" };
class p$5 extends Error {
  constructor(e2, r2) {
    super(i$8(d$8[e2], r2)), this.declaredRootClass = "esri.arcade.arcademoduleerror", Error.captureStackTrace && Error.captureStackTrace(this, p$5);
  }
}
class t$6 {
  constructor(t2 = []) {
    this._elements = t2;
  }
  length() {
    return this._elements.length;
  }
  get(t2) {
    return this._elements[t2];
  }
  toArray() {
    const t2 = [];
    for (let e2 = 0; e2 < this.length(); e2++)
      t2.push(this.get(e2));
    return t2;
  }
}
class r$6 {
  constructor() {
  }
}
function n$5(t2, n2, e2) {
  if (t2 instanceof r$6 && !(t2 instanceof s$b)) {
    const r2 = new s$b();
    return r2.fn = t2, r2.parameterEvaluator = e2, r2.context = n2, r2;
  }
  return t2;
}
class e$7 extends r$6 {
  constructor(t2) {
    super(), this.fn = t2;
  }
  createFunction(t2) {
    return (...r2) => this.fn(t2, { preparsed: true, arguments: r2 });
  }
  call(t2, r2) {
    return this.fn(t2, r2);
  }
  marshalledCall(e2, a2, l2, c2) {
    return c2(e2, a2, (a3, o2, i2) => {
      i2 = i2.map((t2) => t2 instanceof r$6 && !(t2 instanceof s$b) ? n$5(t2, e2, c2) : t2);
      const u2 = this.call(l2, { args: i2 });
      return C$5(u2) ? u2.then((t2) => n$5(t2, l2, c2)) : u2;
    });
  }
}
class s$b extends r$6 {
  constructor() {
    super(...arguments), this.fn = null, this.context = null;
  }
  createFunction(t2) {
    return this.fn.createFunction(this.context);
  }
  call(t2, r2) {
    return this.fn.marshalledCall(t2, r2, this.context, this.parameterEvaluator);
  }
  marshalledCall(t2, r2, n2) {
    return this.fn.marshalledCall(t2, r2, this.context, this.parameterEvaluator);
  }
}
class i$7 extends t$6 {
  constructor(t2, s2, i2, e2, h2, a2) {
    super(t2), this._lazyPt = [], this._hasZ = false, this._hasM = false, this._spRef = s2, this._hasZ = i2, this._hasM = e2, this._cacheId = h2, this._partId = a2;
  }
  get(t2) {
    if (this._lazyPt[t2] === void 0) {
      const i2 = this._elements[t2];
      if (i2 === void 0)
        return;
      const e2 = this._hasZ, h2 = this._hasM;
      let a2 = null;
      a2 = e2 && !h2 ? new w$7(i2[0], i2[1], i2[2], void 0, this._spRef) : h2 && !e2 ? new w$7(i2[0], i2[1], void 0, i2[2], this._spRef) : e2 && h2 ? new w$7(i2[0], i2[1], i2[2], i2[3], this._spRef) : new w$7(i2[0], i2[1], this._spRef), a2.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + t2.toString(), this._lazyPt[t2] = a2;
    }
    return this._lazyPt[t2];
  }
  equalityTest(t2) {
    return t2 === this || t2 !== null && (t2 instanceof i$7 != false && t2.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
}
class h$4 extends t$6 {
  constructor(t2, s2, h2, i2, e2) {
    super(t2), this._lazyPath = [], this._hasZ = false, this._hasM = false, this._hasZ = h2, this._hasM = i2, this._spRef = s2, this._cacheId = e2;
  }
  get(t2) {
    if (this._lazyPath[t2] === void 0) {
      const h2 = this._elements[t2];
      if (h2 === void 0)
        return;
      this._lazyPath[t2] = new i$7(h2, this._spRef, this._hasZ, this._hasM, this._cacheId, t2);
    }
    return this._lazyPath[t2];
  }
  equalityTest(t2) {
    return t2 === this || t2 !== null && (t2 instanceof h$4 != false && t2.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
}
class LuxonError extends Error {
}
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}
class ConflictingSpecificationError extends LuxonError {
}
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}
class InvalidArgumentError extends LuxonError {
}
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}
const n$4 = "numeric", s$a = "short", l$9 = "long";
const DATE_SHORT = {
  year: n$4,
  month: n$4,
  day: n$4
};
const DATE_MED = {
  year: n$4,
  month: s$a,
  day: n$4
};
const DATE_MED_WITH_WEEKDAY = {
  year: n$4,
  month: s$a,
  day: n$4,
  weekday: s$a
};
const DATE_FULL = {
  year: n$4,
  month: l$9,
  day: n$4
};
const DATE_HUGE = {
  year: n$4,
  month: l$9,
  day: n$4,
  weekday: l$9
};
const TIME_SIMPLE = {
  hour: n$4,
  minute: n$4
};
const TIME_WITH_SECONDS = {
  hour: n$4,
  minute: n$4,
  second: n$4
};
const TIME_WITH_SHORT_OFFSET = {
  hour: n$4,
  minute: n$4,
  second: n$4,
  timeZoneName: s$a
};
const TIME_WITH_LONG_OFFSET = {
  hour: n$4,
  minute: n$4,
  second: n$4,
  timeZoneName: l$9
};
const TIME_24_SIMPLE = {
  hour: n$4,
  minute: n$4,
  hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
  hour: n$4,
  minute: n$4,
  second: n$4,
  hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
  hour: n$4,
  minute: n$4,
  second: n$4,
  hourCycle: "h23",
  timeZoneName: s$a
};
const TIME_24_WITH_LONG_OFFSET = {
  hour: n$4,
  minute: n$4,
  second: n$4,
  hourCycle: "h23",
  timeZoneName: l$9
};
const DATETIME_SHORT = {
  year: n$4,
  month: n$4,
  day: n$4,
  hour: n$4,
  minute: n$4
};
const DATETIME_SHORT_WITH_SECONDS = {
  year: n$4,
  month: n$4,
  day: n$4,
  hour: n$4,
  minute: n$4,
  second: n$4
};
const DATETIME_MED = {
  year: n$4,
  month: s$a,
  day: n$4,
  hour: n$4,
  minute: n$4
};
const DATETIME_MED_WITH_SECONDS = {
  year: n$4,
  month: s$a,
  day: n$4,
  hour: n$4,
  minute: n$4,
  second: n$4
};
const DATETIME_MED_WITH_WEEKDAY = {
  year: n$4,
  month: s$a,
  day: n$4,
  weekday: s$a,
  hour: n$4,
  minute: n$4
};
const DATETIME_FULL = {
  year: n$4,
  month: l$9,
  day: n$4,
  hour: n$4,
  minute: n$4,
  timeZoneName: s$a
};
const DATETIME_FULL_WITH_SECONDS = {
  year: n$4,
  month: l$9,
  day: n$4,
  hour: n$4,
  minute: n$4,
  second: n$4,
  timeZoneName: s$a
};
const DATETIME_HUGE = {
  year: n$4,
  month: l$9,
  day: n$4,
  weekday: l$9,
  hour: n$4,
  minute: n$4,
  timeZoneName: l$9
};
const DATETIME_HUGE_WITH_SECONDS = {
  year: n$4,
  month: l$9,
  day: n$4,
  weekday: l$9,
  hour: n$4,
  minute: n$4,
  second: n$4,
  timeZoneName: l$9
};
function isUndefined(o2) {
  return typeof o2 === "undefined";
}
function isNumber(o2) {
  return typeof o2 === "number";
}
function isInteger(o2) {
  return typeof o2 === "number" && o2 % 1 === 0;
}
function isString(o2) {
  return typeof o2 === "string";
}
function isDate(o2) {
  return Object.prototype.toString.call(o2) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e2) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a2, k2) => {
    a2[k2] = obj[k2];
    return a2;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x2, n2) {
  return x2 - n2 * Math.floor(x2 / n2);
}
function padStart(input, n2 = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n2, "0");
  } else {
    padded = ("" + input).padStart(n2, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f2 = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f2);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d2 = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
  if (obj.year < 100 && obj.year >= 0) {
    d2 = new Date(d2);
    d2.setUTCFullYear(d2.getUTCFullYear() - 1900);
  }
  return +d2;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else
    return year > 60 ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = __spreadValues({ timeZoneName: offsetFormat }, intlOpts);
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m2) => m2.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u2 in obj) {
    if (hasOwnProperty(obj, u2)) {
      const v2 = obj[u2];
      if (v2 === void 0 || v2 === null)
        continue;
      normalized[normalizer(u2)] = asNumber(v2);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const meridiems = ["AM", "PM"];
const erasLong = ["Before Christ", "Anno Domini"];
const erasShort = ["BC", "AD"];
const erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i2 = 0; i2 < fmt.length; i2++) {
      const c2 = fmt.charAt(i2);
      if (c2 === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c2;
      } else if (c2 === current) {
        currentFull += c2;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c2;
        current = c2;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.formatToParts();
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.resolvedOptions();
  }
  num(n2, p2 = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p2);
    }
    const opts = __spreadValues({}, this.opts);
    if (p2 > 0) {
      opts.padTo = p2;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" }, "weekday"), maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        case "S":
          return this.num(dt.millisecond);
        case "u":
        case "SSS":
          return this.num(dt.millisecond, 3);
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return dt.zoneName;
        case "a":
          return meridiem();
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      } else {
        return token;
      }
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t2) => t2));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}
class Zone {
  get type() {
    throw new ZoneIsAbstractError();
  }
  get name() {
    throw new ZoneIsAbstractError();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}
let singleton$1 = null;
class SystemZone extends Zone {
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  equals(otherZone) {
    return otherZone.type === "system";
  }
  get isValid() {
    return true;
  }
}
let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
  }
  return dtfCache[zone];
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i2 = 0; i2 < formatted.length; i2++) {
    const { type, value } = formatted[i2];
    const pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
let ianaZoneCache = {};
class IANAZone extends Zone {
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  static isValidSpecifier(s2) {
    return this.isValidZone(s2);
  }
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e2) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = IANAZone.isValidZone(name);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date))
      return NaN;
    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let singleton = null;
class FixedOffsetZone extends Zone {
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }
  static instance(offset2) {
    return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
  }
  static parseSpecifier(s2) {
    if (s2) {
      const r2 = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r2) {
        return new FixedOffsetZone(signedOffset(r2[1], r2[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
    }
  }
  offsetName() {
    return this.name;
  }
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  get isUniversal() {
    return true;
  }
  offset() {
    return this.fixed;
  }
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  get isValid() {
    return true;
  }
}
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
}
function normalizeZone(input, defaultZone2) {
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default")
      return defaultZone2;
    else if (lowered === "local" || lowered === "system")
      return SystemZone.instance;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else
      return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}
let now = () => Date.now(), defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
class Settings {
  static get now() {
    return now;
  }
  static set now(n2) {
    now = n2;
  }
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  static get defaultLocale() {
    return defaultLocale;
  }
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  static set throwOnInvalid(t2) {
    throwOnInvalid = t2;
  }
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}
let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const _a = opts, { base } = _a, cacheKeyOpts = __objRest(_a, ["base"]);
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e2) {
      options = getCachedDTF(smaller).resolvedOptions();
    }
    const { numberingSystem, calendar } = options;
    return [smaller, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f2) {
  const ms = [];
  for (let i2 = 1; i2 <= 12; i2++) {
    const dt = DateTime.utc(2016, i2, 1);
    ms.push(f2(dt));
  }
  return ms;
}
function mapWeekdays(f2) {
  const ms = [];
  for (let i2 = 1; i2 <= 7; i2++) {
    const dt = DateTime.utc(2016, 11, 13 + i2);
    ms.push(f2(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    const _a = opts, { padTo, floor } = _a, otherOpts = __objRest(_a, ["padTo", "floor"]);
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = __spreadValues({ useGrouping: false }, opts);
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i2) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i2) : i2;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i2) : roundTo(i2, 3);
      return padStart(fixed, this.padTo);
    }
  }
}
class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z2;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z2 = offsetZ;
        this.dt = dt;
      } else {
        z2 = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z2 = dt.zone.name;
    }
    const intlOpts = __spreadValues({}, this.opts);
    if (z2) {
      intlOpts.timeZone = z2;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = __spreadValues({ style: "long" }, opts);
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}
class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }
  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: true }));
  }
  redefaultToSystem(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: false }));
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, "weekday"));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(this, void 0, defaultOK, () => meridiems, () => {
      if (!this.meridiemCache) {
        const intl = { hour: "numeric", hourCycle: "h12" };
        this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m2) => m2.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
}
function combineRegexes(...regexes) {
  const full = regexes.reduce((f2, r2) => f2 + r2.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m2) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
    const [val, zone, next] = ex(m2, cursor);
    return [__spreadValues(__spreadValues({}, mergedVals), val), zone || mergedZone, next];
  }, [{}, null, 1]).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m2 = regex.exec(s2);
    if (m2) {
      return extractor(m2);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i2;
    for (i2 = 0; i2 < keys.length; i2++) {
      ret[keys[i2]] = parseInteger(match2[cursor + i2]);
    }
    return [ret, null, cursor + i2];
  };
}
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
const sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m2 = match2[pos];
  return isUndefined(m2) ? fallback : parseInteger(m2);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
const isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr)
    result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseISODate(s2) {
  return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s2) {
  return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}
const INVALID$2 = "Invalid Duration";
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, casualMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix), daysInYearAccurate = 146097 / 400, daysInMonthAccurate = 146097 / 4800, accurateMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix);
const orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
const reverseUnits = orderedUnits$1.slice(0).reverse();
function clone$1(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : __spreadValues(__spreadValues({}, dur.values), alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
class Duration {
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;
    if (config.matrix) {
      matrix = config.matrix;
    }
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = matrix;
    this.isLuxonDuration = true;
  }
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix
    });
  }
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
    }
  }
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  static isDuration(o2) {
    return o2 && o2.isLuxonDuration || false;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(fmt, opts = {}) {
    const fmtOpts = __spreadProps(__spreadValues({}, opts), {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  toHuman(opts = {}) {
    const l2 = orderedUnits$1.map((unit) => {
      const val = this.values[unit];
      if (isUndefined(val)) {
        return null;
      }
      return this.loc.numberFormatter(__spreadProps(__spreadValues({ style: "unit", unitDisplay: "long" }, opts), { unit: unit.slice(0, -1) })).format(val);
    }).filter((n2) => n2);
    return this.loc.listFormatter(__spreadValues({ type: "conjunction", style: opts.listStyle || "narrow" }, opts)).format(l2);
  }
  toObject() {
    if (!this.isValid)
      return {};
    return __spreadValues({}, this.values);
  }
  toISO() {
    if (!this.isValid)
      return null;
    let s2 = "P";
    if (this.years !== 0)
      s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0)
      s2 += this.weeks + "W";
    if (this.days !== 0)
      s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0)
      s2 += this.hours + "H";
    if (this.minutes !== 0)
      s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P")
      s2 += "T0S";
    return s2;
  }
  toISOTime(opts = {}) {
    if (!this.isValid)
      return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5)
      return null;
    opts = __spreadValues({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration), result = {};
    for (const k2 of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k2) || hasOwnProperty(this.values, k2)) {
        result[k2] = dur.get(k2) + this.get(k2);
      }
    }
    return clone$1(this, { values: result }, true);
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  mapUnits(fn) {
    if (!this.isValid)
      return this;
    const result = {};
    for (const k2 of Object.keys(this.values)) {
      result[k2] = asNumber(fn(this.values[k2], k2));
    }
    return clone$1(this, { values: result }, true);
  }
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  set(values) {
    if (!this.isValid)
      return this;
    const mixed = __spreadValues(__spreadValues({}, this.values), normalizeObject(values, Duration.normalizeUnit));
    return clone$1(this, { values: mixed });
  }
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone$1(this, opts);
  }
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }
  shiftTo(...units) {
    if (!this.isValid)
      return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u2) => Duration.normalizeUnit(u2));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k2 of orderedUnits$1) {
      if (units.indexOf(k2) >= 0) {
        lastUnit = k2;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k2] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k2])) {
          own += vals[k2];
        }
        const i2 = Math.trunc(own);
        built[k2] = i2;
        accumulated[k2] = (own * 1e3 - i2 * 1e3) / 1e3;
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k2)) {
            convert(this.matrix, vals, down, built, k2);
          }
        }
      } else if (isNumber(vals[k2])) {
        accumulated[k2] = vals[k2];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone$1(this, { values: built }, true).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const negated = {};
    for (const k2 of Object.keys(this.values)) {
      negated[k2] = this.values[k2] === 0 ? 0 : -this.values[k2];
    }
    return clone$1(this, { values: negated }, true);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0)
        return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u2 of orderedUnits$1) {
      if (!eq(this.values[u2], other.values[u2])) {
        return false;
      }
    }
    return true;
  }
}
const INVALID$1 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
  } else {
    return null;
  }
}
class Interval {
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  static fromISO(text, opts) {
    const [s2, e2] = (text || "").split("/", 2);
    if (s2 && e2) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e3) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e2, opts);
        endIsValid = end.isValid;
      } catch (e3) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e2, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  static isInterval(o2) {
    return o2 && o2.isLuxonInterval || false;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  count(unit = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const start = this.start.startOf(unit), end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(dateTime) {
    if (!this.isValid)
      return false;
    return this.s > dateTime;
  }
  isBefore(dateTime) {
    if (!this.isValid)
      return false;
    return this.e <= dateTime;
  }
  contains(dateTime) {
    if (!this.isValid)
      return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  set({ start, end } = {}) {
    if (!this.isValid)
      return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  splitAt(...dateTimes) {
    if (!this.isValid)
      return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d2) => this.contains(d2)).sort(), results = [];
    let { s: s2 } = this, i2 = 0;
    while (s2 < this.e) {
      const added = sorted[i2] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i2 += 1;
    }
    return results;
  }
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x2) => x2 * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  divideEqually(numberOfParts) {
    if (!this.isValid)
      return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  abutsStart(other) {
    if (!this.isValid)
      return false;
    return +this.e === +other.s;
  }
  abutsEnd(other) {
    if (!this.isValid)
      return false;
    return +other.e === +this.s;
  }
  engulfs(other) {
    if (!this.isValid)
      return false;
    return this.s <= other.s && this.e >= other.e;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  intersection(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s > other.s ? this.s : other.s, e2 = this.e < other.e ? this.e : other.e;
    if (s2 >= e2) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e2);
    }
  }
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e2 = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e2);
  }
  static merge(intervals) {
    const [found, final] = intervals.sort((a2, b2) => a2.s - b2.s).reduce(([sofar, current], item) => {
      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]);
    if (final) {
      found.push(final);
    }
    return found;
  }
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i2) => [
      { time: i2.s, type: "s" },
      { time: i2.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a2, b2) => a2.time - b2.time);
    for (const i2 of arr) {
      currentCount += i2.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i2.time;
      } else {
        if (start && +start !== +i2.time) {
          results.push(Interval.fromDateTimes(start, i2.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i2) => this.intersection(i2)).filter((i2) => i2 && !i2.isEmpty());
  }
  toString() {
    if (!this.isValid)
      return INVALID$1;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  toISO(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  toISODate() {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  toISOTime(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}
class Info {
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  static features() {
    return { relative: hasRelative() };
  }
}
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a2, b2) => b2.year - a2.year],
    ["quarters", (a2, b2) => b2.quarter - a2.quarter + (b2.year - a2.year) * 4],
    ["months", (a2, b2) => b2.month - a2.month + (b2.year - a2.year) * 12],
    [
      "weeks",
      (a2, b2) => {
        const days = dayDiff(a2, b2);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });
      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }
      results[unit] = delta;
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter((u2) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u2) >= 0);
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i2 = 0; i2 < str.length; i2++) {
      const code = str.charCodeAt(i2);
      if (str[i2].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i2]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i2) => i2) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i2) => stripInsensitivities(s2) === stripInsensitivities(i2)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h2, m2]) => signedOffset(h2, m2), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t2) => ({ regex: RegExp(escapeToken(t2.val)), deser: ([s2]) => s2, literal: true }), unitate = (t2) => {
    if (token.literal) {
      return literal(t2);
    }
    switch (t2.val) {
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      case "a":
        return oneOf(loc.meridiems(), 0);
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t2);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re2 = units.map((u2) => u2.regex).reduce((f2, r2) => `${f2}(${r2.source})`, "");
  return [`^${re2}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i2 in handlers) {
      if (hasOwnProperty(handlers, i2)) {
        const h2 = handlers[i2], groups = h2.groups ? h2.groups + 1 : 1;
        if (!h2.literal && h2.token) {
          all[h2.token.val[0]] = h2.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r2, k2) => {
    const f2 = toField(k2);
    if (f2) {
      r2[f2] = matches[k2];
    }
    return r2;
  }, {});
  return [vals, zone, specificOffset];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);
  if (tokens == null || tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t2) => maybeExpandMacroToken(t2, locale)));
}
function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t2) => unitForToken(t2, locale)), disqualifyingUnit = units.find((t2) => t2.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}
function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}
function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p2) => tokenForPart(p2, locale, formatOpts));
}
const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
  const d2 = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d2.setUTCFullYear(d2.getUTCFullYear() - 1900);
  }
  const js = d2.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i2) => i2 < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return __spreadValues({ weekYear, weekNumber, weekday }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return __spreadValues({ year, ordinal }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else
    return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else
    return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else
    return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else
    return false;
}
const INVALID = "Invalid DateTime";
const MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(__spreadProps(__spreadValues(__spreadValues({}, current), alts), { old: current }));
}
function fixOffset(localTS, o2, tz) {
  let utcGuess = localTS - o2 * 60 * 1e3;
  const o22 = tz.offset(utcGuess);
  if (o2 === o22) {
    return [utcGuess, o2];
  }
  utcGuess -= (o22 - o2) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o22 === o3) {
    return [utcGuess, o22];
  }
  return [localTS - Math.min(o22, o3) * 60 * 1e3, Math.max(o22, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d2 = new Date(ts);
  return {
    year: d2.getUTCFullYear(),
    month: d2.getUTCMonth() + 1,
    day: d2.getUTCDate(),
    hour: d2.getUTCHours(),
    minute: d2.getUTCMinutes(),
    second: d2.getUTCSeconds(),
    millisecond: d2.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c2 = __spreadProps(__spreadValues({}, inst.c), {
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }), millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c2);
  let [ts, o2] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o2 = inst.zone.offset(ts);
  }
  return { ts, o: o2 };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, __spreadProps(__spreadValues({}, opts), {
      zone: interpretationZone,
      specificOffset
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o2, extended) {
  const longFormat = o2.c.year > 9999 || o2.c.year < 0;
  let c2 = "";
  if (longFormat && o2.c.year >= 0)
    c2 += "+";
  c2 += padStart(o2.c.year, longFormat ? 6 : 4);
  if (extended) {
    c2 += "-";
    c2 += padStart(o2.c.month);
    c2 += "-";
    c2 += padStart(o2.c.day);
  } else {
    c2 += padStart(o2.c.month);
    c2 += padStart(o2.c.day);
  }
  return c2;
}
function toISOTime(o2, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
  let c2 = padStart(o2.c.hour);
  if (extended) {
    c2 += ":";
    c2 += padStart(o2.c.minute);
    if (o2.c.second !== 0 || !suppressSeconds) {
      c2 += ":";
    }
  } else {
    c2 += padStart(o2.c.minute);
  }
  if (o2.c.second !== 0 || !suppressSeconds) {
    c2 += padStart(o2.c.second);
    if (o2.c.millisecond !== 0 || !suppressMilliseconds) {
      c2 += ".";
      c2 += padStart(o2.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o2.isOffsetFixed && o2.offset === 0 && !extendedZone) {
      c2 += "Z";
    } else if (o2.o < 0) {
      c2 += "-";
      c2 += padStart(Math.trunc(-o2.o / 60));
      c2 += ":";
      c2 += padStart(Math.trunc(-o2.o % 60));
    } else {
      c2 += "+";
      c2 += padStart(Math.trunc(o2.o / 60));
      c2 += ":";
      c2 += padStart(Math.trunc(o2.o % 60));
    }
  }
  if (extendedZone) {
    c2 += "[" + o2.zone.ianaName + "]";
  }
  return c2;
}
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"], orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized)
    throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o2;
  if (!isUndefined(obj.year)) {
    for (const u2 of orderedUnits) {
      if (isUndefined(obj[u2])) {
        obj[u2] = defaultUnitValues[u2];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o2] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o: o2 });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, format = (c2, unit) => {
    c2 = roundTo(c2, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c2, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else
        return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
class DateTime {
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c2 = null, o2 = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c2, o2] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c2 = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c2.year) ? new Invalid("invalid input") : null;
        c2 = invalid ? null : c2;
        o2 = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c2;
    this.o = o2;
    this.isLuxonDateTime = true;
  }
  static now() {
    return new DateTime({});
  }
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u2 of units) {
      const v2 = normalized[u2];
      if (!isUndefined(v2)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u2] = defaultValues[u2];
      } else {
        normalized[u2] = objNow[u2];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
    }
    return inst;
  }
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }
  static isDateTime(o2) {
    return o2 && o2.isLuxonDateTime || false;
  }
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t2) => t2 ? t2.val : null).join("");
  }
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
    return expanded.map((t2) => t2.val).join("");
  }
  get(unit) {
    return this[unit];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  set(values) {
    if (!this.isValid)
      return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian(__spreadValues(__spreadValues({}, gregorianToWeek(this.c)), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(__spreadValues(__spreadValues({}, gregorianToOrdinal(this.c)), normalized));
    } else {
      mixed = __spreadValues(__spreadValues({}, this.toObject()), normalized);
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o2] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o: o2 });
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  startOf(unit) {
    if (!this.isValid)
      return this;
    const o2 = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o2.month = 1;
      case "quarters":
      case "months":
        o2.day = 1;
      case "weeks":
      case "days":
        o2.hour = 0;
      case "hours":
        o2.minute = 0;
      case "minutes":
        o2.second = 0;
      case "seconds":
        o2.millisecond = 0;
        break;
    }
    if (normalizedUnit === "weeks") {
      o2.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q2 = Math.ceil(this.month / 3);
      o2.month = (q2 - 1) * 3 + 1;
    }
    return this.set(o2);
  }
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    const ext = format === "extended";
    let c2 = toISODate(this, ext);
    c2 += "T";
    c2 += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c2;
  }
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, format === "extended");
  }
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    let c2 = includePrefix ? "T" : "";
    return c2 + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
  }
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(opts = {}) {
    if (!this.isValid)
      return {};
    const base = __spreadValues({}, this.c);
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = __spreadValues({ locale: this.locale, numberingSystem: this.numberingSystem }, opts);
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  hasSame(otherDateTime, unit) {
    if (!this.isValid)
      return false;
    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  toRelative(options = {}) {
    if (!this.isValid)
      return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), __spreadProps(__spreadValues({}, options), {
      numeric: "always",
      units,
      unit
    }));
  }
  toRelativeCalendar(options = {}) {
    if (!this.isValid)
      return null;
    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, __spreadProps(__spreadValues({}, options), {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.min);
  }
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.max);
  }
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  static get DATE_MED() {
    return DATE_MED;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  static get DATE_FULL() {
    return DATE_FULL;
  }
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
  }
}
var t$5, i$6;
function n$3(e2) {
  return y$7.fromJSON(e2.toJSON());
}
function o$5(e2) {
  return e2.toJSON ? e2.toJSON() : e2;
}
function l$8(e2) {
  return typeof e2 == "string" || e2 instanceof String;
}
function y$6(e2) {
  return typeof e2 == "number";
}
function p$4(e2) {
  return e2 instanceof Date;
}
function c$5(e2, r2) {
  return e2 === r2 || !(!p$4(e2) || !p$4(r2)) && e2.getTime() === r2.getTime();
}
function m$6(e2) {
  if (e2 == null)
    return null;
  if (typeof e2 == "number")
    return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
      return 109404;
    case "miles":
    case "mile":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "km":
      return 109414;
  }
  return null;
}
function f$2(r2) {
  if (r2 == null)
    return null;
  switch (r2.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return r2.extent;
    case "point":
      return new w$8({ xmin: r2.x, ymin: r2.y, xmax: r2.x, ymax: r2.y, spatialReference: r2.spatialReference });
    case "extent":
      return r2;
  }
  return null;
}
function d$7(e2) {
  if (e2 == null)
    return null;
  if (typeof e2 == "number")
    return e2;
  if (typeof e2 == "number")
    return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
      return 9001;
    case "miles":
    case "mile":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "km":
      return 9036;
  }
  return null;
}
!function(e2) {
  e2[e2.Standardised = 0] = "Standardised", e2[e2.StandardisedNoInterval = 1] = "StandardisedNoInterval", e2[e2.SqlServer = 2] = "SqlServer", e2[e2.Oracle = 3] = "Oracle", e2[e2.Postgres = 4] = "Postgres", e2[e2.PGDB = 5] = "PGDB", e2[e2.FILEGDB = 6] = "FILEGDB", e2[e2.NotEvaluated = 7] = "NotEvaluated";
}(t$5 || (t$5 = {})), function(e2) {
  e2[e2.InFeatureSet = 0] = "InFeatureSet", e2[e2.NotInFeatureSet = 1] = "NotInFeatureSet", e2[e2.Unknown = 2] = "Unknown";
}(i$6 || (i$6 = {}));
const F$4 = 1e3;
const S$1 = { point: "point", polygon: "polygon", polyline: "polyline", multipoint: "multipoint", extent: "extent", esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint", esriGeometryEnvelope: "extent", envelope: "extent" }, v$3 = { point: "esriGeometryPoint", polygon: "esriGeometryPolygon", polyline: "esriGeometryPolyline", multipoint: "esriGeometryMultipoint", extent: "esriGeometryEnvelope", esriGeometryPoint: "esriGeometryPoint", esriGeometryPolygon: "esriGeometryPolygon", esriGeometryPolyline: "esriGeometryPolyline", esriGeometryMultipoint: "esriGeometryMultipoint", esriGeometryEnvelope: "esriGeometryEnvelope", envelope: "esriGeometryEnvelope" }, P$6 = { "small-integer": "esriFieldTypeSmallInteger", integer: "esriFieldTypeInteger", long: "esriFieldTypeLong", single: "esriFieldTypeSingle", double: "esriFieldTypeDouble", string: "esriFieldTypeString", date: "esriFieldTypeDate", oid: "esriFieldTypeOID", geometry: "esriFieldTypeGeometry", blob: "esriFieldTypeBlob", raster: "esriFieldTypeRaster", guid: "esriFieldTypeGUID", "global-id": "esriFieldTypeGlobalID", xml: "eesriFieldTypeXML", esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger", esriFieldTypeInteger: "esriFieldTypeInteger", esriFieldTypeLong: "esriFieldTypeLong", esriFieldTypeSingle: "esriFieldTypeSingle", esriFieldTypeDouble: "esriFieldTypeDouble", esriFieldTypeString: "esriFieldTypeString", esriFieldTypeDate: "esriFieldTypeDate", esriFieldTypeOID: "esriFieldTypeOID", esriFieldTypeGeometry: "esriFieldTypeGeometry", esriFieldTypeBlob: "esriFieldTypeBlob", esriFieldTypeRaster: "esriFieldTypeRaster", esriFieldTypeGUID: "esriFieldTypeGUID", esriFieldTypeGlobalID: "esriFieldTypeGlobalID", esriFieldTypeXML: "eesriFieldTypeXML" };
function b$2(e2) {
  return e2 === void 0 ? "" : e2 = (e2 = (e2 = e2.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
}
function D$7(e2, r2) {
  r2 || (r2 = {}), typeof r2 == "function" && (r2 = { cmp: r2 });
  const t2 = typeof r2.cycles == "boolean" && r2.cycles, i2 = r2.cmp && (n2 = r2.cmp, function(e3) {
    return function(r3, t3) {
      const i3 = { key: r3, value: e3[r3] }, o3 = { key: t3, value: e3[t3] };
      return n2(i3, o3);
    };
  });
  var n2;
  const o2 = [];
  return function e3(r3) {
    if (r3 && r3.toJSON && typeof r3.toJSON == "function" && (r3 = r3.toJSON()), r3 === void 0)
      return;
    if (typeof r3 == "number")
      return isFinite(r3) ? "" + r3 : "null";
    if (typeof r3 != "object")
      return JSON.stringify(r3);
    let n3, l2;
    if (Array.isArray(r3)) {
      for (l2 = "[", n3 = 0; n3 < r3.length; n3++)
        n3 && (l2 += ","), l2 += e3(r3[n3]) || "null";
      return l2 + "]";
    }
    if (r3 === null)
      return "null";
    if (o2.includes(r3)) {
      if (t2)
        return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const s2 = o2.push(r3) - 1, y2 = Object.keys(r3).sort(i2 && i2(r3));
    for (l2 = "", n3 = 0; n3 < y2.length; n3++) {
      const t3 = y2[n3], i3 = e3(r3[t3]);
      i3 && (l2 && (l2 += ","), l2 += JSON.stringify(t3) + ":" + i3);
    }
    return o2.splice(s2, 1), "{" + l2 + "}";
  }(e2);
}
class s$9 {
  constructor(s2) {
    this.source = s2;
  }
}
class T$7 {
  constructor(e2) {
    this.value = e2;
  }
}
class M$6 {
  constructor(e2) {
    this.value = e2;
  }
}
const N$5 = M$6, D$6 = T$7, k$3 = { type: "VOID" }, j$2 = { type: "BREAK" }, A$4 = { type: "CONTINUE" };
function R$2(e2, t2, n2) {
  return t2 === "" || t2 == null || t2 === n2 || t2 === n2 ? e2 : e2 = e2.split(t2).join(n2);
}
function F$3(t2) {
  return t2 instanceof r$6;
}
function C$4(e2) {
  return e2 instanceof s$9;
}
function I$5(e2) {
  return !!w$6(e2) || (!!Z$7(e2) || (!!z$6(e2) || (!!_$4(e2) || (e2 === null || (e2 === k$3 || typeof e2 == "number")))));
}
function v$2(e2, t2) {
  return e2 === void 0 ? t2 : e2;
}
function O$4(e2) {
  return e2 == null ? "" : Y$5(e2) || E$3(e2) ? "Array" : z$6(e2) ? "Date" : w$6(e2) ? "String" : _$4(e2) ? "Boolean" : Z$7(e2) ? "Number" : (e2 == null ? void 0 : e2.declaredClass) === "esri.arcade.Attachment" ? "Attachment" : (e2 == null ? void 0 : e2.declaredClass) === "esri.arcade.Portal" ? "Portal" : (e2 == null ? void 0 : e2.declaredClass) === "esri.arcade.Dictionary" ? "Dictionary" : e2 instanceof s$9 ? "Module" : J$6(e2) ? "Feature" : e2 instanceof w$7 ? "Point" : e2 instanceof v$4 ? "Polygon" : e2 instanceof m$7 ? "Polyline" : e2 instanceof u$7 ? "Multipoint" : e2 instanceof w$8 ? "Extent" : F$3(e2) ? "Function" : P$5(e2) ? "FeatureSet" : G$3(e2) ? "FeatureSetCollection" : e2 === k$3 ? "" : typeof e2 == "number" && isNaN(e2) ? "Number" : "Unrecognised Type";
}
function w$6(e2) {
  return typeof e2 == "string" || e2 instanceof String;
}
function _$4(e2) {
  return typeof e2 == "boolean";
}
function Z$7(e2) {
  return typeof e2 == "number";
}
function L$3(e2) {
  return typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2;
}
function Y$5(e2) {
  return e2 instanceof Array;
}
function J$6(e2) {
  return (e2 == null ? void 0 : e2.arcadeDeclaredClass) === "esri.arcade.Feature";
}
function P$5(e2) {
  return (e2 && e2.declaredRootClass && e2.declaredRootClass === "esri.arcade.featureset.support.FeatureSet") === true;
}
function G$3(e2) {
  return (e2 && e2.declaredRootClass && e2.declaredRootClass === "esri.arcade.featureSetCollection") === true;
}
function E$3(e2) {
  return e2 instanceof t$6;
}
function z$6(e2) {
  return e2 instanceof Date;
}
function V$5(e2, t2, n2, r2, a2) {
  if (e2.length < t2 || e2.length > n2)
    throw new t$7(r2, e$8.WrongNumberOfParameters, a2);
}
function H$5(e2) {
  return e2 < 0 ? -Math.round(-e2) : Math.round(e2);
}
function U$3() {
  let e2 = Date.now();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t2) => {
    const n2 = (e2 + 16 * Math.random()) % 16 | 0;
    return e2 = Math.floor(e2 / 16), (t2 === "x" ? n2 : 3 & n2 | 8).toString(16);
  });
}
function q$4(e2, t2) {
  return isNaN(e2) || t2 == null || t2 === "" ? e2.toString() : (t2 = R$2(t2, "\u2030", ""), t2 = R$2(t2, "\xA4", ""), s$d(e2, { pattern: t2 }));
}
function B$4(e2, t2) {
  const n2 = DateTime.fromJSDate(e2);
  return t2 == null || t2 === "" ? n2.toISO({ suppressMilliseconds: true }) : n2.toFormat(W$7(t2), { locale: l$b(), numberingSystem: "latn" });
}
function W$7(e2) {
  e2 = e2.replace(/LTS|LT|LL?L?L?|l{1,4}/g, "[$&]");
  let t2 = "";
  const n2 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  for (const r2 of e2.match(n2))
    switch (r2) {
      case "D":
        t2 += "d";
        break;
      case "DD":
        t2 += "dd";
        break;
      case "DDD":
        t2 += "o";
        break;
      case "d":
        t2 += "c";
        break;
      case "ddd":
        t2 += "ccc";
        break;
      case "dddd":
        t2 += "cccc";
        break;
      case "M":
        t2 += "L";
        break;
      case "MM":
        t2 += "LL";
        break;
      case "MMM":
        t2 += "LLL";
        break;
      case "MMMM":
        t2 += "LLLL";
        break;
      case "YY":
        t2 += "yy";
        break;
      case "Y":
      case "YYYY":
        t2 += "yyyy";
        break;
      case "Q":
        t2 += "q";
        break;
      case "Z":
        t2 += "ZZ";
        break;
      case "ZZ":
        t2 += "ZZZ";
        break;
      case "S":
        t2 += "'S'";
        break;
      case "SS":
        t2 += "'SS'";
        break;
      case "SSS":
        t2 += "u";
        break;
      case "A":
      case "a":
        t2 += "a";
        break;
      case "m":
      case "mm":
      case "h":
      case "hh":
      case "H":
      case "HH":
      case "s":
      case "ss":
      case "X":
      case "x":
        t2 += r2;
        break;
      default:
        r2.length >= 2 && r2.slice(0, 1) === "[" && r2.slice(-1) === "]" ? t2 += `'${r2.slice(1, -1)}'` : t2 += `'${r2}'`;
    }
  return t2;
}
function $$3(e2, t2, n2) {
  switch (n2) {
    case ">":
      return e2 > t2;
    case "<":
      return e2 < t2;
    case ">=":
      return e2 >= t2;
    case "<=":
      return e2 <= t2;
  }
  return false;
}
function Q$5(e2, t2, n2) {
  if (e2 === null) {
    if (t2 === null || t2 === k$3)
      return $$3(null, null, n2);
    if (Z$7(t2))
      return $$3(0, t2, n2);
    if (w$6(t2))
      return $$3(0, re$5(t2), n2);
    if (_$4(t2))
      return $$3(0, re$5(t2), n2);
    if (z$6(t2))
      return $$3(0, t2.getTime(), n2);
  }
  if (e2 === k$3) {
    if (t2 === null || t2 === k$3)
      return $$3(null, null, n2);
    if (Z$7(t2))
      return $$3(0, t2, n2);
    if (w$6(t2))
      return $$3(0, re$5(t2), n2);
    if (_$4(t2))
      return $$3(0, re$5(t2), n2);
    if (z$6(t2))
      return $$3(0, t2.getTime(), n2);
  } else if (Z$7(e2)) {
    if (Z$7(t2))
      return $$3(e2, t2, n2);
    if (_$4(t2))
      return $$3(e2, re$5(t2), n2);
    if (t2 === null || t2 === k$3)
      return $$3(e2, 0, n2);
    if (w$6(t2))
      return $$3(e2, re$5(t2), n2);
    if (z$6(t2))
      return $$3(e2, t2.getTime(), n2);
  } else if (w$6(e2)) {
    if (w$6(t2))
      return $$3(K$3(e2), K$3(t2), n2);
    if (z$6(t2))
      return $$3(re$5(e2), t2.getTime(), n2);
    if (Z$7(t2))
      return $$3(re$5(e2), t2, n2);
    if (t2 === null || t2 === k$3)
      return $$3(re$5(e2), 0, n2);
    if (_$4(t2))
      return $$3(re$5(e2), re$5(t2), n2);
  } else if (z$6(e2)) {
    if (z$6(t2))
      return $$3(e2, t2, n2);
    if (t2 === null || t2 === k$3)
      return $$3(e2.getTime(), 0, n2);
    if (Z$7(t2))
      return $$3(e2.getTime(), t2, n2);
    if (_$4(t2))
      return $$3(e2.getTime(), re$5(t2), n2);
    if (w$6(t2))
      return $$3(e2.getTime(), re$5(t2), n2);
  } else if (_$4(e2)) {
    if (_$4(t2))
      return $$3(e2, t2, n2);
    if (Z$7(t2))
      return $$3(re$5(e2), re$5(t2), n2);
    if (z$6(t2))
      return $$3(re$5(e2), t2.getTime(), n2);
    if (t2 === null || t2 === k$3)
      return $$3(re$5(e2), 0, n2);
    if (w$6(t2))
      return $$3(re$5(e2), re$5(t2), n2);
  }
  return !!X$5(e2, t2) && (n2 === "<=" || n2 === ">=");
}
function X$5(e2, t2) {
  if (e2 === t2)
    return true;
  if (e2 === null && t2 === k$3 || t2 === null && e2 === k$3)
    return true;
  if (z$6(e2) && z$6(t2))
    return e2.getTime() === t2.getTime();
  if (e2 instanceof h$4)
    return e2.equalityTest(t2);
  if (e2 instanceof i$7)
    return e2.equalityTest(t2);
  if (e2 instanceof w$7 && t2 instanceof w$7) {
    const n2 = e2.cache._arcadeCacheId, r2 = t2.cache._arcadeCacheId;
    if (n2 != null)
      return n2 === r2;
  }
  if (e2 !== void 0 && t2 !== void 0 && e2 !== null && t2 !== null && typeof e2 == "object" && typeof t2 == "object") {
    if (e2._arcadeCacheId === t2._arcadeCacheId && e2._arcadeCacheId !== void 0 && e2._arcadeCacheId !== null)
      return true;
    if (e2._underlyingGraphic === t2._underlyingGraphic && e2._underlyingGraphic !== void 0 && e2._underlyingGraphic !== null)
      return true;
  }
  return false;
}
function K$3(e2, n2) {
  if (w$6(e2))
    return e2;
  if (e2 === null)
    return "";
  if (Z$7(e2))
    return q$4(e2, n2);
  if (_$4(e2))
    return e2.toString();
  if (z$6(e2))
    return B$4(e2, n2);
  if (e2 instanceof p$6)
    return JSON.stringify(e2.toJSON());
  if (Y$5(e2)) {
    const t2 = [];
    for (let n3 = 0; n3 < e2.length; n3++)
      t2[n3] = ne$5(e2[n3]);
    return "[" + t2.join(",") + "]";
  }
  if (e2 instanceof t$6) {
    const t2 = [];
    for (let n3 = 0; n3 < e2.length(); n3++)
      t2[n3] = ne$5(e2.get(n3));
    return "[" + t2.join(",") + "]";
  }
  return e2 !== null && typeof e2 == "object" && e2.castToText !== void 0 ? e2.castToText() : F$3(e2) ? "object, Function" : e2 === k$3 ? "" : C$4(e2) ? "object, Module" : "";
}
function ee$5(e2) {
  const n2 = [];
  if (!Y$5(e2))
    return null;
  if (e2 instanceof t$6) {
    for (let t2 = 0; t2 < e2.length(); t2++)
      n2[t2] = re$5(e2.get(t2));
    return n2;
  }
  for (let t2 = 0; t2 < e2.length; t2++)
    n2[t2] = re$5(e2[t2]);
  return n2;
}
function te$5(e2, n2, r2 = false) {
  if (w$6(e2))
    return e2;
  if (e2 === null)
    return "";
  if (Z$7(e2))
    return q$4(e2, n2);
  if (_$4(e2))
    return e2.toString();
  if (z$6(e2))
    return B$4(e2, n2);
  if (e2 instanceof p$6)
    return e2 instanceof w$8 ? '{"xmin":' + e2.xmin.toString() + ',"ymin":' + e2.ymin.toString() + "," + (e2.hasZ ? '"zmin":' + e2.zmin.toString() + "," : "") + (e2.hasM ? '"mmin":' + e2.mmin.toString() + "," : "") + '"xmax":' + e2.xmax.toString() + ',"ymax":' + e2.ymax.toString() + "," + (e2.hasZ ? '"zmax":' + e2.zmax.toString() + "," : "") + (e2.hasM ? '"mmax":' + e2.mmax.toString() + "," : "") + '"spatialReference":' + ye$2(e2.spatialReference) + "}" : ye$2(e2.toJSON(), (e3, t2) => e3.key === t2.key ? 0 : e3.key === "spatialReference" ? 1 : t2.key === "spatialReference" || e3.key < t2.key ? -1 : e3.key > t2.key ? 1 : 0);
  if (Y$5(e2)) {
    const t2 = [];
    for (let n3 = 0; n3 < e2.length; n3++)
      t2[n3] = ne$5(e2[n3], r2);
    return "[" + t2.join(",") + "]";
  }
  if (e2 instanceof t$6) {
    const t2 = [];
    for (let n3 = 0; n3 < e2.length(); n3++)
      t2[n3] = ne$5(e2.get(n3), r2);
    return "[" + t2.join(",") + "]";
  }
  return e2 !== null && typeof e2 == "object" && e2.castToText !== void 0 ? e2.castToText(r2) : F$3(e2) ? "object, Function" : e2 === k$3 ? "" : C$4(e2) ? "object, Module" : "";
}
function ne$5(e2, n2 = false) {
  if (e2 === null)
    return "null";
  if (_$4(e2) || Z$7(e2) || w$6(e2))
    return JSON.stringify(e2);
  if (e2 instanceof p$6)
    return te$5(e2, null, n2);
  if (e2 instanceof t$6)
    return te$5(e2, null, n2);
  if (e2 instanceof Array)
    return te$5(e2, null, n2);
  if (e2 instanceof Date)
    return n2 ? JSON.stringify(e2.getTime()) : JSON.stringify(B$4(e2, ""));
  if (e2 !== null && typeof e2 == "object") {
    if (e2.castToText !== void 0)
      return e2.castToText(n2);
  } else if (e2 === k$3)
    return "null";
  return "null";
}
function re$5(e2, t2) {
  return Z$7(e2) ? e2 : e2 === null || e2 === "" ? 0 : z$6(e2) ? NaN : _$4(e2) ? e2 ? 1 : 0 : Y$5(e2) || e2 === "" || e2 === void 0 ? NaN : t2 !== void 0 && w$6(e2) ? (t2 = R$2(t2, "\u2030", ""), t2 = R$2(t2, "\xA4", ""), p$7(e2, { pattern: t2 })) : e2 === k$3 ? 0 : Number(e2);
}
function ae$3(e2) {
  if (z$6(e2))
    return e2;
  if (w$6(e2)) {
    const t2 = oe$4(e2);
    if (t2)
      return t2.toJSDate();
  }
  return null;
}
function ie$4(e2) {
  return z$6(e2) ? DateTime.fromJSDate(e2) : w$6(e2) ? oe$4(e2) : null;
}
function oe$4(e2) {
  const t2 = / (\d\d)/;
  let n2 = DateTime.fromISO(e2);
  return n2.isValid || t2.test(e2) && (e2 = e2.replace(t2, "T$1"), n2 = DateTime.fromISO(e2), n2.isValid) ? n2 : null;
}
function le$3(e2) {
  return _$4(e2) ? e2 : w$6(e2) ? (e2 = e2.toLowerCase()) === "true" : !!Z$7(e2) && (e2 !== 0 && !isNaN(e2));
}
function se$4(e2, t2) {
  return t$8(e2) ? null : (e2.spatialReference !== null && e2.spatialReference !== void 0 || (e2.spatialReference = t2), e2);
}
function ue$3(e2) {
  if (e2 === null)
    return null;
  if (e2 instanceof w$7)
    return e2.x === "NaN" || e2.x === null || isNaN(e2.x) ? null : e2;
  if (e2 instanceof v$4) {
    if (e2.rings.length === 0)
      return null;
    for (const t2 of e2.rings)
      if (t2.length > 0)
        return e2;
    return null;
  }
  if (e2 instanceof m$7) {
    if (e2.paths.length === 0)
      return null;
    for (const t2 of e2.paths)
      if (t2.length > 0)
        return e2;
    return null;
  }
  return e2 instanceof u$7 ? e2.points.length === 0 ? null : e2 : e2 instanceof w$8 ? e2.xmin === "NaN" || e2.xmin === null || isNaN(e2.xmin) ? null : e2 : null;
}
function fe$2(e2, t2) {
  if (!e2)
    return t2;
  if (!e2.domain)
    return t2;
  let n2 = null;
  if (e2.field.type === "string" || e2.field.type === "esriFieldTypeString")
    t2 = K$3(t2);
  else {
    if (t2 == null)
      return null;
    if (t2 === "")
      return t2;
    t2 = re$5(t2);
  }
  for (let r2 = 0; r2 < e2.domain.codedValues.length; r2++) {
    const a2 = e2.domain.codedValues[r2];
    a2.code === t2 && (n2 = a2);
  }
  return n2 === null ? t2 : n2.name;
}
function ce$3(e2, t2) {
  if (!e2)
    return t2;
  if (!e2.domain)
    return t2;
  let n2 = null;
  t2 = K$3(t2);
  for (let r2 = 0; r2 < e2.domain.codedValues.length; r2++) {
    const a2 = e2.domain.codedValues[r2];
    a2.name === t2 && (n2 = a2);
  }
  return n2 === null ? t2 : n2.code;
}
function me$3(e2, t2, n2 = null, r2 = null) {
  if (!t2)
    return null;
  if (!t2.fields)
    return null;
  let a2, i2, o2 = null;
  for (let l2 = 0; l2 < t2.fields.length; l2++) {
    const n3 = t2.fields[l2];
    n3.name.toLowerCase() === e2.toString().toLowerCase() && (o2 = n3);
  }
  if (o2 === null)
    throw new t$7(null, e$8.FieldNotFound, null, { key: e2 });
  return r2 === null && n2 && t2.typeIdField && (r2 = n2.hasField(t2.typeIdField) ? n2.field(t2.typeIdField) : null), r2 != null && t2.types.some((e3) => e3.id === r2 && (a2 = e3.domains && e3.domains[o2.name], a2 && a2.type === "inherited" && (a2 = de$3(o2.name, t2), i2 = true), true)), i2 || a2 || (a2 = de$3(e2, t2)), { field: o2, domain: a2 };
}
function de$3(e2, t2) {
  let n2;
  return t2.fields.some((t3) => (t3.name.toLowerCase() === e2.toLowerCase() && (n2 = t3.domain), !!n2)), n2;
}
function ye$2(e2, t2) {
  t2 || (t2 = {}), typeof t2 == "function" && (t2 = { cmp: t2 });
  const n2 = typeof t2.cycles == "boolean" && t2.cycles, r2 = t2.cmp && (a2 = t2.cmp, function(e3) {
    return function(t3, n3) {
      const r3 = { key: t3, value: e3[t3] }, i3 = { key: n3, value: e3[n3] };
      return a2(r3, i3);
    };
  });
  var a2;
  const i2 = [];
  return function e3(t3) {
    if (t3 && t3.toJSON && typeof t3.toJSON == "function" && (t3 = t3.toJSON()), t3 === void 0)
      return;
    if (typeof t3 == "number")
      return isFinite(t3) ? "" + t3 : "null";
    if (typeof t3 != "object")
      return JSON.stringify(t3);
    let a3, o2;
    if (Array.isArray(t3)) {
      for (o2 = "[", a3 = 0; a3 < t3.length; a3++)
        a3 && (o2 += ","), o2 += e3(t3[a3]) || "null";
      return o2 + "]";
    }
    if (t3 === null)
      return "null";
    if (i2.includes(t3)) {
      if (n2)
        return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const l2 = i2.push(t3) - 1, s2 = Object.keys(t3).sort(r2 && r2(t3));
    for (o2 = "", a3 = 0; a3 < s2.length; a3++) {
      const n3 = s2[a3], r3 = e3(t3[n3]);
      r3 && (o2 && (o2 += ","), o2 += JSON.stringify(n3) + ":" + r3);
    }
    return i2.splice(l2, 1), "{" + o2 + "}";
  }(e2);
}
function pe$2(e2) {
  if (e2 === null)
    return null;
  const t2 = [];
  for (const n2 of e2)
    n2 && n2.arcadeDeclaredClass && n2.arcadeDeclaredClass === "esri.arcade.Feature" ? t2.push(n2.geometry()) : t2.push(n2);
  return t2;
}
function ge$3(e2, t2) {
  if (!(t2 instanceof w$7))
    throw new t$7(null, e$8.InvalidParameter, null);
  e2.push(t2.hasZ ? t2.hasM ? [t2.x, t2.y, t2.z, t2.m] : [t2.x, t2.y, t2.z] : [t2.x, t2.y]);
}
function he$3(e2, t2) {
  if (Y$5(e2) || E$3(e2)) {
    let n2 = false, a2 = false, i2 = [], o2 = t2;
    if (Y$5(e2)) {
      for (const t3 of e2)
        ge$3(i2, t3);
      i2.length > 0 && (o2 = e2[0].spatialReference, n2 = e2[0].hasZ, a2 = e2[0].hasM);
    } else if (e2 instanceof i$7)
      i2 = e2._elements, i2.length > 0 && (n2 = e2._hasZ, a2 = e2._hasM, o2 = e2.get(0).spatialReference);
    else {
      if (!E$3(e2))
        throw new t$7(null, e$8.InvalidParameter, null);
      for (const t3 of e2.toArray())
        ge$3(i2, t3);
      i2.length > 0 && (o2 = e2.get(0).spatialReference, n2 = e2.get(0).hasZ === true, a2 = e2.get(0).hasM === true);
    }
    if (i2.length === 0)
      return null;
    return h$5(i2, a2, n2) || (i2 = i2.slice(0).reverse()), new v$4({ rings: [i2], spatialReference: o2, hasZ: n2, hasM: a2 });
  }
  return e2;
}
function Se$2(e2, t2) {
  if (Y$5(e2) || E$3(e2)) {
    let n2 = false, a2 = false, i2 = [], o2 = t2;
    if (Y$5(e2)) {
      for (const t3 of e2)
        ge$3(i2, t3);
      i2.length > 0 && (o2 = e2[0].spatialReference, n2 = e2[0].hasZ === true, a2 = e2[0].hasM === true);
    } else if (e2 instanceof i$7)
      i2 = e2._elements, i2.length > 0 && (n2 = e2._hasZ, a2 = e2._hasM, o2 = e2.get(0).spatialReference);
    else if (E$3(e2)) {
      for (const t3 of e2.toArray())
        ge$3(i2, t3);
      i2.length > 0 && (o2 = e2.get(0).spatialReference, n2 = e2.get(0).hasZ === true, a2 = e2.get(0).hasM === true);
    }
    return i2.length === 0 ? null : new m$7({ paths: [i2], spatialReference: o2, hasZ: n2, hasM: a2 });
  }
  return e2;
}
function be$2(e2, t2) {
  if (Y$5(e2) || E$3(e2)) {
    let n2 = false, a2 = false, i2 = [], l2 = t2;
    if (Y$5(e2)) {
      for (const t3 of e2)
        ge$3(i2, t3);
      i2.length > 0 && (l2 = e2[0].spatialReference, n2 = e2[0].hasZ === true, a2 = e2[0].hasM === true);
    } else if (e2 instanceof i$7)
      i2 = e2._elements, i2.length > 0 && (n2 = e2._hasZ, a2 = e2._hasM, l2 = e2.get(0).spatialReference);
    else if (E$3(e2)) {
      for (const t3 of e2.toArray())
        ge$3(i2, t3);
      i2.length > 0 && (l2 = e2.get(0).spatialReference, n2 = e2.get(0).hasZ === true, a2 = e2.get(0).hasM === true);
    }
    return i2.length === 0 ? null : new u$7({ points: i2, spatialReference: l2, hasZ: n2, hasM: a2 });
  }
  return e2;
}
function xe$2(e2, n2 = false) {
  const r2 = [];
  if (e2 === null)
    return r2;
  if (Y$5(e2) === true) {
    for (let t2 = 0; t2 < e2.length; t2++) {
      const a2 = K$3(e2[t2]);
      a2 === "" && n2 !== true || r2.push(a2);
    }
    return r2;
  }
  if (e2 instanceof t$6) {
    for (let t2 = 0; t2 < e2.length(); t2++) {
      const a2 = K$3(e2.get(t2));
      a2 === "" && n2 !== true || r2.push(a2);
    }
    return r2;
  }
  if (I$5(e2)) {
    const t2 = K$3(e2);
    return t2 === "" && n2 !== true || r2.push(t2), r2;
  }
  return [];
}
let Te = 0;
function Me$2(e2) {
  return Te++, Te % 100 == 0 ? (Te = 0, new Promise((t2) => {
    setTimeout(() => {
      t2(e2);
    }, 0);
  })) : e2;
}
function Ne$1(e2, t2, n2) {
  switch (n2) {
    case "&":
      return e2 & t2;
    case "|":
      return e2 | t2;
    case "^":
      return e2 ^ t2;
    case "<<":
      return e2 << t2;
    case ">>":
      return e2 >> t2;
    case ">>>":
      return e2 >>> t2;
  }
}
function De$1(e2, n2 = null) {
  return e2 == null ? null : _$4(e2) || Z$7(e2) || w$6(e2) ? e2 : e2 instanceof p$6 ? (n2 == null ? void 0 : n2.keepGeometryType) === true ? e2 : e2.toJSON() : e2 instanceof t$6 ? e2.toArray().map((e3) => De$1(e3, n2)) : e2 instanceof Array ? e2.map((e3) => De$1(e3, n2)) : e2 instanceof Date ? e2 : e2 !== null && typeof e2 == "object" && e2.castAsJson !== void 0 ? e2.castAsJson(n2) : null;
}
async function ke(e2, t2, n2, r2, a2) {
  const i2 = await je$1(e2, t2, n2);
  a2[r2] = i2;
}
async function je$1(e2, n2 = null, r2 = null) {
  if (e2 instanceof t$6 && (e2 = e2.toArray()), e2 == null)
    return null;
  if (I$5(e2) || e2 instanceof p$6 || e2 instanceof Date)
    return De$1(e2, r2);
  if (e2 instanceof Array) {
    const t2 = [], a2 = [];
    for (const o2 of e2)
      o2 === null || I$5(o2) || o2 instanceof p$6 || o2 instanceof Date ? a2.push(De$1(o2, r2)) : (a2.push(null), t2.push(ke(o2, n2, r2, a2.length - 1, a2)));
    return t2.length > 0 && await Promise.all(t2), a2;
  }
  return e2 !== null && typeof e2 == "object" && e2.castAsJsonAsync !== void 0 ? e2.castAsJsonAsync(n2, r2) : null;
}
function Ae$2(e2, t2, n2) {
  const r2 = e2.fullSchema();
  if (r2 === null)
    return null;
  if (!r2.fields)
    return null;
  return me$3(t2, r2, e2, n2);
}
function Re$1(e2) {
  const t2 = e2.fullSchema();
  return t2 === null ? null : t2.fields && t2.typeIdField ? { subtypeField: t2.typeIdField, subtypes: t2.types ? t2.types.map((e3) => ({ name: e3.name, code: e3.id })) : [] } : null;
}
function Fe$2(e2, t2, n2, r2) {
  const a2 = e2.fullSchema();
  if (a2 === null)
    return null;
  if (!a2.fields)
    return null;
  const i2 = me$3(t2, a2, e2, r2);
  if (n2 === void 0)
    try {
      n2 = e2.field(t2);
    } catch (o2) {
      return null;
    }
  return fe$2(i2, n2);
}
function Ce$2(e2, t2, n2, r2) {
  const a2 = e2.fullSchema();
  if (a2 === null)
    return null;
  if (!a2.fields)
    return null;
  if (n2 === void 0) {
    try {
      n2 = e2.field(t2);
    } catch (i2) {
      return null;
    }
    return n2;
  }
  return ce$3(me$3(t2, a2, e2, r2), n2);
}
function Ie$2(e2) {
  const t2 = e2.fullSchema();
  if (t2 === null)
    return null;
  if (!t2.fields)
    return null;
  const n2 = [];
  for (const r2 of t2.fields)
    n2.push(o$5(r2));
  return { objectIdField: t2.objectIdField, globalIdField: t2.globalIdField, geometryType: v$3[t2.geometryType] === void 0 ? "" : v$3[t2.geometryType], fields: n2 };
}
const ve$2 = Object.freeze(Object.defineProperty({ __proto__: null, ReturnResultE: T$7, ImplicitResultE: M$6, ImplicitResult: N$5, ReturnResult: D$6, voidOperation: k$3, breakResult: j$2, continueResult: A$4, multiReplace: R$2, isFunctionParameter: F$3, isModule: C$4, isSimpleType: I$5, defaultUndefined: v$2, getType: O$4, isString: w$6, isBoolean: _$4, isNumber: Z$7, isInteger: L$3, isArray: Y$5, isFeature: J$6, isFeatureSet: P$5, isFeatureSetCollection: G$3, isImmutableArray: E$3, isDate: z$6, pcCheck: V$5, absRound: H$5, generateUUID: U$3, formatNumber: q$4, formatDate: B$4, standardiseDateFormat: W$7, greaterThanLessThan: Q$5, equalityTest: X$5, toString: K$3, toNumberArray: ee$5, toStringExplicit: te$5, toNumber: re$5, toDate: ae$3, toDateTime: ie$4, toBoolean: le$3, fixSpatialReference: se$4, fixNullGeometry: ue$3, getDomainValue: fe$2, getDomainCode: ce$3, getDomain: me$3, stableStringify: ye$2, autoCastFeatureToGeometry: pe$2, autoCastArrayOfPointsToPolygon: he$3, autoCastArrayOfPointsToPolyline: Se$2, autoCastArrayOfPointsToMultiPoint: be$2, toStringArray: xe$2, tick: Me$2, binaryOperator: Ne$1, castAsJson: De$1, castAsJsonAsync: je$1, featureFullDomain: Ae$2, featureSubtypes: Re$1, featureDomainValueLookup: Fe$2, featureDomainCodeLookup: Ce$2, featureSchema: Ie$2 }, Symbol.toStringTag, { value: "Module" }));
function w$5(t2, s2 = false) {
  if (t2 == null)
    return null;
  if (Z$7(t2))
    return re$5(t2);
  if (_$4(t2))
    return le$3(t2);
  if (w$6(t2))
    return K$3(t2);
  if (z$6(t2))
    return ae$3(t2);
  if (Y$5(t2)) {
    const i3 = [];
    for (const e2 of t2)
      i3.push(w$5(e2, s2));
    return i3;
  }
  const i2 = new J$5();
  i2.immutable = false;
  for (const e2 of Object.keys(t2)) {
    const n2 = t2[e2];
    n2 !== void 0 && i2.setField(e2, w$5(n2, s2));
  }
  return i2.immutable = s2, i2;
}
class J$5 {
  constructor(t2) {
    this.declaredClass = "esri.arcade.Dictionary", this.attributes = null, this.plain = false, this.immutable = true, this.attributes = t2 instanceof J$5 ? t2.attributes : t2 != null ? t2 : {};
  }
  field(i2) {
    const e2 = i2.toLowerCase(), n2 = this.attributes[i2];
    if (n2 !== void 0)
      return n2;
    for (const t2 in this.attributes)
      if (t2.toLowerCase() === e2)
        return this.attributes[t2];
    throw new t$7(null, e$8.FieldNotFound, null, { key: i2 });
  }
  setField(i2, n2) {
    if (this.immutable)
      throw new t$7(null, e$8.Immutable, null);
    if (F$3(n2))
      throw new t$7(null, e$8.NoFunctionInDictionary, null);
    const r2 = i2.toLowerCase();
    if (this.attributes[i2] === void 0) {
      for (const t2 in this.attributes)
        if (t2.toLowerCase() === r2)
          return void (this.attributes[t2] = n2);
      this.attributes[i2] = n2;
    } else
      this.attributes[i2] = n2;
  }
  hasField(t2) {
    const s2 = t2.toLowerCase();
    if (this.attributes[t2] !== void 0)
      return true;
    for (const i2 in this.attributes)
      if (i2.toLowerCase() === s2)
        return true;
    return false;
  }
  keys() {
    let t2 = [];
    for (const s2 in this.attributes)
      t2.push(s2);
    return t2 = t2.sort(), t2;
  }
  castToText(t2 = false) {
    let s2 = "";
    for (const e2 in this.attributes) {
      s2 !== "" && (s2 += ",");
      const u2 = this.attributes[e2];
      u2 == null ? s2 += JSON.stringify(e2) + ":null" : _$4(u2) || Z$7(u2) || w$6(u2) ? s2 += JSON.stringify(e2) + ":" + JSON.stringify(u2) : u2 instanceof p$6 ? s2 += JSON.stringify(e2) + ":" + te$5(u2) : u2 instanceof t$6 || u2 instanceof Array ? s2 += JSON.stringify(e2) + ":" + te$5(u2, null, t2) : u2 instanceof Date ? s2 += t2 ? JSON.stringify(e2) + ":" + JSON.stringify(u2.getTime()) : JSON.stringify(e2) + ":" + JSON.stringify(u2) : u2 !== null && typeof u2 == "object" && u2.castToText !== void 0 && (s2 += JSON.stringify(e2) + ":" + u2.castToText(t2));
    }
    return "{" + s2 + "}";
  }
  static convertObjectToArcadeDictionary(t2, s2 = true) {
    const i2 = new J$5();
    i2.immutable = false;
    for (const e2 in t2) {
      const s3 = t2[e2];
      s3 !== void 0 && i2.setField(e2.toString(), w$5(s3));
    }
    return i2.immutable = s2, i2;
  }
  static convertJsonToArcade(t2, s2 = false) {
    return w$5(t2, s2);
  }
  castAsJson(t2 = null) {
    const s2 = {};
    for (let i2 in this.attributes) {
      const e2 = this.attributes[i2];
      e2 !== void 0 && ((t2 == null ? void 0 : t2.keyTranslate) && (i2 = t2.keyTranslate(i2)), s2[i2] = De$1(e2, t2));
    }
    return s2;
  }
  async castDictionaryValueAsJsonAsync(t2, s2, i2, e2 = null, n2) {
    const r2 = await je$1(i2, e2, n2);
    return t2[s2] = r2, r2;
  }
  async castAsJsonAsync(t2 = null, s2 = null) {
    const i2 = {}, e2 = [];
    for (let n2 in this.attributes) {
      const r2 = this.attributes[n2];
      (s2 == null ? void 0 : s2.keyTranslate) && (n2 = s2.keyTranslate(n2)), r2 !== void 0 && (I$5(r2) || r2 instanceof p$6 || r2 instanceof Date ? i2[n2] = De$1(r2, s2) : e2.push(this.castDictionaryValueAsJsonAsync(i2, n2, r2, t2, s2)));
    }
    return e2.length > 0 && await Promise.all(e2), i2;
  }
}
class g$4 {
  constructor() {
    this.arcadeDeclaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._datesfixed = true, this.immutable = true, this._datefields = null, this.immutable = true;
  }
  static createFromGraphic(t2) {
    const e2 = new g$4();
    return e2._geometry = r$8(t2.geometry) ? t2.geometry : null, t2.attributes === void 0 || t2.attributes === null ? e2.attributes = {} : e2.attributes = t2.attributes, t2._sourceLayer ? (e2._layer = t2._sourceLayer, e2._datesfixed = false) : t2._layer ? (e2._layer = t2._layer, e2._datesfixed = false) : t2.layer && "fields" in t2.layer ? (e2._layer = t2.layer, e2._datesfixed = false) : t2.sourceLayer && "fields" in t2.sourceLayer && (e2._layer = t2.sourceLayer, e2._datesfixed = false), e2;
  }
  static createFromArcadeFeature(t2) {
    const e2 = new g$4();
    return e2._datesfixed = t2._datesfixed, e2.attributes = t2.attributes, e2._geometry = t2._geometry, e2._optimizedGeomDefinition = t2._optimizedGeomDefinition, t2._layer && (e2._layer = t2._layer), e2;
  }
  static createFromOptimisedFeature(t2, e2, i2) {
    const s2 = new g$4();
    return s2._geometry = t2.geometry ? { geometry: t2.geometry } : null, s2._optimizedGeomDefinition = i2, s2.attributes = t2.attributes || {}, s2._layer = e2, s2._datesfixed = false, s2;
  }
  static createFromArcadeDictionary(e2) {
    const i2 = new g$4();
    return i2.attributes = e2.field("attributes"), i2.attributes !== null && i2.attributes instanceof J$5 ? (i2.attributes = i2.attributes.attributes, i2.attributes === null && (i2.attributes = {})) : i2.attributes = {}, i2._geometry = e2.field("geometry"), i2._geometry !== null && (i2._geometry instanceof J$5 ? i2._geometry = g$4.parseGeometryFromDictionary(i2._geometry) : i2._geometry instanceof p$6 || (i2._geometry = null)), i2;
  }
  static createFromGraphicLikeObject(t2, e2, i2 = null) {
    const s2 = new g$4();
    return e2 === null && (e2 = {}), s2.attributes = e2, s2._geometry = r$8(t2) ? t2 : null, s2._layer = i2, s2._layer && (s2._datesfixed = false), s2;
  }
  repurposeFromGraphicLikeObject(t2, e2, i2 = null) {
    e2 === null && (e2 = {}), this.attributes = e2, this._geometry = t2 || null, this._layer = i2, this._layer ? this._datesfixed = false : this._datesfixed = true;
  }
  castToText(t2 = false) {
    let o2 = "";
    this._datesfixed === false && this._fixDates();
    for (const n2 in this.attributes) {
      o2 !== "" && (o2 += ",");
      const l2 = this.attributes[n2];
      l2 == null ? o2 += JSON.stringify(n2) + ":null" : _$4(l2) || Z$7(l2) || w$6(l2) ? o2 += JSON.stringify(n2) + ":" + JSON.stringify(l2) : l2 instanceof p$6 ? o2 += JSON.stringify(n2) + ":" + te$5(l2) : l2 instanceof t$6 || l2 instanceof Array ? o2 += JSON.stringify(n2) + ":" + te$5(l2, null, t2) : l2 instanceof Date ? o2 += t2 ? JSON.stringify(n2) + ":" + JSON.stringify(l2.getTime()) : JSON.stringify(n2) + ":" + JSON.stringify(l2) : l2 !== null && typeof l2 == "object" && l2.castToText !== void 0 && (o2 += JSON.stringify(n2) + ":" + l2.castToText(t2));
    }
    return '{"geometry":' + (this.geometry() === null ? "null" : te$5(this.geometry())) + ',"attributes":{' + o2 + "}}";
  }
  _fixDates() {
    if (this._datefields !== null)
      return this._datefields.length > 0 && this._fixDateFields(this._datefields), void (this._datesfixed = true);
    const t2 = [], e2 = this._layer.fields;
    for (let i2 = 0; i2 < e2.length; i2++) {
      const s2 = e2[i2], r2 = s2.type;
      r2 !== "date" && r2 !== "esriFieldTypeDate" || t2.push(s2.name);
    }
    this._datefields = t2, t2.length > 0 && this._fixDateFields(t2), this._datesfixed = true;
  }
  _fixDateFields(t2) {
    this.attributes = __spreadValues({}, this.attributes);
    for (let e2 = 0; e2 < t2.length; e2++) {
      let i2 = this.attributes[t2[e2]];
      if (i2 === null)
        ;
      else if (i2 === void 0) {
        for (const s2 in this.attributes)
          if (s2.toLowerCase() === t2[e2].toLowerCase()) {
            i2 = this.attributes[s2], i2 !== null && (i2 instanceof Date || (this.attributes[s2] = new Date(i2)));
            break;
          }
      } else
        i2 instanceof Date || (this.attributes[t2[e2]] = new Date(i2));
    }
  }
  geometry() {
    return this._geometry === null || this._geometry instanceof p$6 || (this._optimizedGeomDefinition ? (this._geometry = e$9(v$5(rt(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM))), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = e$9(v$5(this._geometry))), this._geometry;
  }
  field(t2) {
    this._datesfixed === false && this._fixDates();
    const e2 = this.attributes[t2];
    if (e2 !== void 0)
      return e2;
    const i2 = t2.toLowerCase();
    for (const s2 in this.attributes)
      if (s2.toLowerCase() === i2)
        return this.attributes[s2];
    if (this._hasFieldDefinition(i2))
      return null;
    throw new t$7(null, e$8.FieldNotFound, null, { key: t2 });
  }
  _hasFieldDefinition(t2) {
    if (this._layer === null)
      return false;
    for (let e2 = 0; e2 < this._layer.fields.length; e2++) {
      if (this._layer.fields[e2].name.toLowerCase() === t2)
        return true;
    }
    return false;
  }
  setField(t2, e2) {
    if (this.immutable)
      throw new t$7(null, e$8.Immutable, null);
    if (I$5(e2) === false)
      throw new t$7(null, e$8.TypeNotAllowedInFeature, null);
    const i2 = t2.toLowerCase();
    if (this.attributes[t2] === void 0) {
      for (const t3 in this.attributes)
        if (t3.toLowerCase() === i2)
          return void (this.attributes[t3] = e2);
      this.attributes[t2] = e2;
    } else
      this.attributes[t2] = e2;
  }
  hasField(t2) {
    const e2 = t2.toLowerCase();
    if (this.attributes[t2] !== void 0)
      return true;
    for (const i2 in this.attributes)
      if (i2.toLowerCase() === e2)
        return true;
    return !!this._hasFieldDefinition(e2);
  }
  keys() {
    let t2 = [];
    const e2 = {};
    for (const i2 in this.attributes)
      t2.push(i2), e2[i2.toLowerCase()] = 1;
    if (this._layer !== null)
      for (let i2 = 0; i2 < this._layer.fields.length; i2++) {
        const s2 = this._layer.fields[i2];
        e2[s2.name.toLowerCase()] !== 1 && t2.push(s2.name);
      }
    return t2 = t2.sort(), t2;
  }
  static parseGeometryFromDictionary(t2) {
    const e2 = g$4._convertDictionaryToJson(t2, true);
    return e2.hasm !== void 0 && (e2.hasM = e2.hasm, delete e2.hasm), e2.hasz !== void 0 && (e2.hasZ = e2.hasz, delete e2.hasz), e2.spatialreference !== void 0 && (e2.spatialReference = e2.spatialreference, delete e2.spatialreference), e2.rings !== void 0 && (e2.rings = this._fixPathArrays(e2.rings, e2.hasZ === true, e2.hasZ === true)), e2.paths !== void 0 && (e2.paths = this._fixPathArrays(e2.paths, e2.hasZ === true, e2.hasM === true)), e2.points !== void 0 && (e2.points = this._fixPointArrays(e2.points, e2.hasZ === true, e2.hasM === true)), v$5(e2);
  }
  static _fixPathArrays(t2, i2, s2) {
    const r2 = [];
    if (t2 instanceof Array)
      for (let e2 = 0; e2 < t2.length; e2++)
        r2.push(this._fixPointArrays(t2[e2], i2, s2));
    else if (t2 instanceof t$6)
      for (let e2 = 0; e2 < t2.length(); e2++)
        r2.push(this._fixPointArrays(t2.get(e2), i2, s2));
    return r2;
  }
  static _fixPointArrays(t2, i2, s2) {
    const r2 = [];
    if (t2 instanceof Array)
      for (let a2 = 0; a2 < t2.length; a2++) {
        const o2 = t2[a2];
        o2 instanceof w$7 ? i2 && s2 ? r2.push([o2.x, o2.y, o2.z, o2.m]) : i2 ? r2.push([o2.x, o2.y, o2.z]) : s2 ? r2.push([o2.x, o2.y, o2.m]) : r2.push([o2.x, o2.y]) : o2 instanceof t$6 ? r2.push(o2.toArray()) : r2.push(o2);
      }
    else if (t2 instanceof t$6)
      for (let a2 = 0; a2 < t2.length(); a2++) {
        const o2 = t2.get(a2);
        o2 instanceof w$7 ? i2 && s2 ? r2.push([o2.x, o2.y, o2.z, o2.m]) : i2 ? r2.push([o2.x, o2.y, o2.z]) : s2 ? r2.push([o2.x, o2.y, o2.m]) : r2.push([o2.x, o2.y]) : o2 instanceof t$6 ? r2.push(o2.toArray()) : r2.push(o2);
      }
    return r2;
  }
  static _convertDictionaryToJson(e2, i2 = false) {
    const s2 = {};
    for (const r2 in e2.attributes) {
      let a2 = e2.attributes[r2];
      a2 instanceof J$5 && (a2 = g$4._convertDictionaryToJson(a2)), i2 ? s2[r2.toLowerCase()] = a2 : s2[r2] = a2;
    }
    return s2;
  }
  static parseAttributesFromDictionary(t2) {
    const e2 = {};
    for (const i2 in t2.attributes) {
      const s2 = t2.attributes[i2];
      if (!I$5(s2))
        throw new t$7(null, e$8.InvalidParameter, null);
      e2[i2] = s2;
    }
    return e2;
  }
  static fromJson(t2) {
    let e2 = null;
    t2.geometry !== null && t2.geometry !== void 0 && (e2 = v$5(t2.geometry));
    const a2 = {};
    if (t2.attributes !== null && t2.attributes !== void 0)
      for (const o2 in t2.attributes) {
        const e3 = t2.attributes[o2];
        if (e3 === null)
          a2[o2] = e3;
        else {
          if (!(w$6(e3) || Z$7(e3) || _$4(e3) || z$6(e3)))
            throw new t$7(null, e$8.InvalidParameter, null);
          a2[o2] = e3;
        }
      }
    return g$4.createFromGraphicLikeObject(e2, a2, null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    if (this._layer === null)
      return "";
    const t2 = this._layer.gdbVersion;
    return t2 === void 0 ? "" : t2 === "" && this._layer.capabilities && this._layer.capabilities.isVersioned ? "SDE.DEFAULT" : t2;
  }
  castAsJson(t2) {
    const e2 = { attributes: {}, geometry: (t2 == null ? void 0 : t2.keepGeometryType) === true ? this.geometry() : this.geometry().toJSON() };
    for (const i2 in this.attributes) {
      const s2 = this.attributes[i2];
      s2 !== void 0 && (e2.attributes[i2] = De$1(s2, t2));
    }
    return e2;
  }
  async castAsJsonAsync(t2 = null, e2) {
    return this.castAsJson(e2);
  }
}
const e$6 = { all: { min: 2, max: 2 }, none: { min: 2, max: 2 }, any: { min: 2, max: 2 }, reduce: { min: 2, max: 3 }, map: { min: 2, max: 2 }, filter: { min: 2, max: 2 }, fromcodepoint: { min: 1, max: -1 }, fromcharcode: { min: 1, max: -1 }, tocodepoint: { min: 1, max: 2 }, tocharcode: { min: 1, max: 2 }, concatenate: { min: 0, max: -1 }, expects: { min: 1, max: -1 }, getfeatureset: { min: 1, max: 2 }, week: { min: 1, max: 2 }, fromjson: { min: 1, max: 1 }, length3d: { min: 1, max: 2 }, tohex: { min: 1, max: 1 }, hash: { min: 1, max: 1 }, isoweek: { min: 1, max: 1 }, isoweekday: { min: 1, max: 1 }, hasvalue: { min: 2, max: 2 }, isomonth: { min: 1, max: 1 }, isoyear: { min: 1, max: 1 }, resize: { min: 2, max: 3 }, slice: { min: 0, max: -1 }, splice: { min: 0, max: -1 }, push: { min: 2, max: 2 }, pop: { min: 1, max: 1 }, includes: { min: 2, max: 2 }, array: { min: 1, max: 2 }, front: { min: 1, max: 1 }, back: { min: 1, max: 1 }, insert: { min: 3, max: 3 }, erase: { min: 2, max: 2 }, split: { min: 2, max: 4 }, guid: { min: 0, max: 1 }, standardizeguid: { min: 2, max: 2 }, today: { min: 0, max: 0 }, angle: { min: 2, max: 3 }, bearing: { min: 2, max: 3 }, urlencode: { min: 1, max: 1 }, now: { min: 0, max: 0 }, timestamp: { min: 0, max: 0 }, day: { min: 1, max: 1 }, month: { min: 1, max: 1 }, year: { min: 1, max: 1 }, hour: { min: 1, max: 1 }, second: { min: 1, max: 1 }, millisecond: { min: 1, max: 1 }, minute: { min: 1, max: 1 }, weekday: { min: 1, max: 1 }, toutc: { min: 1, max: 1 }, tolocal: { min: 1, max: 1 }, date: { min: 0, max: 7 }, datediff: { min: 2, max: 3 }, dateadd: { min: 2, max: 3 }, trim: { min: 1, max: 1 }, text: { min: 1, max: 2 }, left: { min: 2, max: 2 }, right: { min: 2, max: 2 }, mid: { min: 2, max: 3 }, upper: { min: 1, max: 1 }, proper: { min: 1, max: 2 }, lower: { min: 1, max: 1 }, find: { min: 2, max: 3 }, iif: { min: 3, max: 3 }, decode: { min: 2, max: -1 }, when: { min: 2, max: -1 }, defaultvalue: { min: 2, max: 2 }, isempty: { min: 1, max: 1 }, domaincode: { min: 2, max: 4 }, domainname: { min: 2, max: 4 }, polygon: { min: 1, max: 1 }, point: { min: 1, max: 1 }, polyline: { min: 1, max: 1 }, extent: { min: 1, max: 1 }, multipoint: { min: 1, max: 1 }, ringisclockwise: { min: 1, max: 1 }, geometry: { min: 1, max: 1 }, count: { min: 0, max: -1 }, number: { min: 1, max: 2 }, acos: { min: 1, max: 1 }, asin: { min: 1, max: 1 }, atan: { min: 1, max: 1 }, atan2: { min: 2, max: 2 }, ceil: { min: 1, max: 2 }, floor: { min: 1, max: 2 }, round: { min: 1, max: 2 }, cos: { min: 1, max: 1 }, exp: { min: 1, max: 1 }, log: { min: 1, max: 1 }, min: { min: 0, max: -1 }, constrain: { min: 3, max: 3 }, console: { min: 0, max: -1 }, max: { min: 0, max: -1 }, pow: { min: 2, max: 2 }, random: { min: 0, max: 0 }, sqrt: { min: 1, max: 1 }, sin: { min: 1, max: 1 }, tan: { min: 1, max: 1 }, abs: { min: 1, max: 1 }, isnan: { min: 1, max: 1 }, stdev: { min: 0, max: -1 }, average: { min: 0, max: -1 }, mean: { min: 0, max: -1 }, sum: { min: 0, max: -1 }, variance: { min: 0, max: -1 }, distinct: { min: 0, max: -1 }, first: { min: 1, max: 1 }, top: { min: 2, max: 2 }, boolean: { min: 1, max: 1 }, dictionary: { min: 0, max: -1 }, typeof: { min: 1, max: 1 }, reverse: { min: 1, max: 1 }, replace: { min: 3, max: 4 }, sort: { min: 1, max: 2 }, feature: { min: 1, max: -1 }, haskey: { min: 2, max: 2 }, indexof: { min: 2, max: 2 }, disjoint: { min: 2, max: 2 }, intersects: { min: 2, max: 2 }, touches: { min: 2, max: 2 }, crosses: { min: 2, max: 2 }, within: { min: 2, max: 2 }, contains: { min: 2, max: 2 }, overlaps: { min: 2, max: 2 }, equals: { min: 2, max: 2 }, relate: { min: 3, max: 3 }, intersection: { min: 2, max: 2 }, union: { min: 1, max: 2 }, difference: { min: 2, max: 2 }, symmetricdifference: { min: 2, max: 2 }, clip: { min: 2, max: 2 }, cut: { min: 2, max: 2 }, area: { min: 1, max: 2 }, areageodetic: { min: 1, max: 2 }, length: { min: 1, max: 2 }, lengthgeodetic: { min: 1, max: 2 }, distancegeodetic: { min: 2, max: 3 }, distance: { min: 2, max: 3 }, densify: { min: 2, max: 3 }, densifygeodetic: { min: 2, max: 3 }, generalize: { min: 2, max: 4 }, buffer: { min: 2, max: 3 }, buffergeodetic: { min: 2, max: 3 }, offset: { min: 2, max: 6 }, rotate: { min: 2, max: 3 }, issimple: { min: 1, max: 1 }, simplify: { min: 1, max: 1 }, convexhull: { min: 1, max: 1 }, centroid: { min: 1, max: 1 }, isselfintersecting: { min: 1, max: 1 }, multiparttosinglepart: { min: 1, max: 1 }, setgeometry: { min: 2, max: 2 }, portal: { min: 1, max: 1 }, getuser: { min: 0, max: 2 }, subtypes: { min: 1, max: 1 }, subtypecode: { min: 1, max: 1 }, subtypename: { min: 1, max: 1 }, domain: { min: 2, max: 3 }, convertdirection: { min: 3, max: 3 }, schema: { min: 1, max: 1 } }, n$2 = { functionDefinitions: new Map(), constantDefinitions: new Map() }, a$5 = { functionDefinitions: new Map(), constantDefinitions: new Map() };
for (const b2 of ["pi", "infinity"])
  a$5.constantDefinitions.set(b2, { type: "constant" }), n$2.constantDefinitions.set(b2, { type: "constant" });
a$5.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "newline", type: "constant" }] }), n$2.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "newline", type: "constant" }] });
for (const b2 in e$6) {
  const t2 = e$6[b2];
  a$5.functionDefinitions.set(b2, { overloads: [{ type: "function", parametersInfo: { min: t2.min, max: t2.max } }] }), n$2.functionDefinitions.set(b2, { overloads: [{ type: "function", parametersInfo: { min: t2.min, max: t2.max } }] });
}
const t$4 = ["featureset", "getuser", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "getfeatureset", "attachments", "featuresetbyportalitem"], i$5 = ["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "length3d", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "convexhull", "simplify", "multiparttosinglepart"];
function m$5(e2) {
  return typeof e2 == "string" || e2 instanceof String;
}
function o$4(e2, t2) {
  var _a;
  const i2 = t2 === "sync" ? n$2 : a$5;
  i2.functionDefinitions.has(e2.name.toLowerCase()) ? (_a = i2.functionDefinitions.get(e2.name.toLowerCase())) == null ? void 0 : _a.overloads.push({ type: "function", parametersInfo: { min: e2.min, max: e2.max } }) : i2.functionDefinitions.set(e2.name.toLowerCase(), { overloads: [{ type: "function", parametersInfo: { min: e2.min, max: e2.max } }] });
}
function s$8(e2, n2) {
  if (e2)
    for (const a2 of e2)
      r$5(a2, n2);
}
function r$5(e2, n2) {
  if (e2 && n2(e2) !== false)
    switch (e2.type) {
      case "ImportDeclaration":
        s$8(e2.specifiers, n2), r$5(e2.source, n2);
        break;
      case "ExportNamedDeclaration":
        r$5(e2.declaration, n2);
        break;
      case "ArrayExpression":
        s$8(e2.elements, n2);
        break;
      case "AssignmentExpression":
      case "BinaryExpression":
      case "LogicalExpression":
        r$5(e2.left, n2), r$5(e2.right, n2);
        break;
      case "BlockStatement":
      case "Program":
        s$8(e2.body, n2);
        break;
      case "BreakStatement":
      case "ContinueStatement":
      case "EmptyStatement":
      case "Identifier":
      case "Literal":
        break;
      case "CallExpression":
        r$5(e2.callee, n2), s$8(e2.arguments, n2);
        break;
      case "ExpressionStatement":
        r$5(e2.expression, n2);
        break;
      case "ForInStatement":
        r$5(e2.left, n2), r$5(e2.right, n2), r$5(e2.body, n2);
        break;
      case "ForStatement":
        r$5(e2.init, n2), r$5(e2.test, n2), r$5(e2.update, n2), r$5(e2.body, n2);
        break;
      case "WhileStatement":
        r$5(e2.test, n2), r$5(e2.body, n2);
        break;
      case "FunctionDeclaration":
        r$5(e2.id, n2), s$8(e2.params, n2), r$5(e2.body, n2);
        break;
      case "IfStatement":
        r$5(e2.test, n2), r$5(e2.consequent, n2), r$5(e2.alternate, n2);
        break;
      case "MemberExpression":
        r$5(e2.object, n2), r$5(e2.property, n2);
        break;
      case "ObjectExpression":
        s$8(e2.properties, n2);
        break;
      case "Property":
        r$5(e2.key, n2), r$5(e2.value, n2);
        break;
      case "ReturnStatement":
      case "UnaryExpression":
      case "UpdateExpression":
        r$5(e2.argument, n2);
        break;
      case "VariableDeclaration":
        s$8(e2.declarations, n2);
        break;
      case "VariableDeclarator":
        r$5(e2.id, n2), r$5(e2.init, n2);
        break;
      case "TemplateLiteral":
        s$8(e2.expressions, n2), s$8(e2.quasis, n2);
    }
}
function c$4(e2, n2) {
  let a2 = false;
  const t2 = n2.toLowerCase();
  return r$5(e2, (e3) => !a2 && (e3.type === "Identifier" && e3.name && e3.name.toLowerCase() === t2 && (a2 = true), true)), a2;
}
function x$5(e2) {
  const n2 = [];
  return r$5(e2, (e3) => (e3.type === "ImportDeclaration" && e3.source && e3.source.value && n2.push({ libname: e3.specifiers[0].local.name.toLowerCase(), source: e3.source.value }), true)), n2;
}
function p$3(e2, n2) {
  let a2 = false;
  const t2 = n2.toLowerCase();
  return r$5(e2, (e3) => !a2 && (e3.type !== "CallExpression" || e3.callee.type !== "Identifier" || !e3.callee.name || e3.callee.name.toLowerCase() !== t2 || (a2 = true, false))), a2;
}
function l$7(e2) {
  const n2 = [];
  return r$5(e2, (e3) => {
    var _a;
    return e3.type !== "MemberExpression" || e3.object.type !== "Identifier" || (e3.computed === false && e3.object && e3.object.name && e3.property && e3.property.type === "Identifier" && e3.property.name ? n2.push(e3.object.name.toLowerCase() + "." + e3.property.name.toLowerCase()) : e3.object && e3.object.name && e3.property && e3.property.type === "Literal" && typeof e3.property.value == "string" && n2.push(e3.object.name.toLowerCase() + "." + ((_a = e3.property.value) == null ? void 0 : _a.toString().toLowerCase())), false);
  }), n2;
}
function u$5(e2) {
  const n2 = [];
  return r$5(e2, (e3) => {
    var _a;
    if (e3.type === "CallExpression") {
      if (e3.callee.type === "Identifier" && e3.callee.name.toLowerCase() === "expects") {
        let a2 = "";
        for (let t2 = 0; t2 < (e3.arguments || []).length; t2++)
          t2 === 0 ? e3.arguments[t2].type === "Identifier" && (a2 = e3.arguments[t2].name.toLowerCase()) : a2 && e3.arguments[t2].type === "Literal" && m$5(e3.arguments[t2].value) && n2.push(a2 + "." + e3.arguments[t2].value.toLowerCase());
        return false;
      }
      if (e3.callee.type === "Identifier" && ["domainname", "domaincode", "domain", "haskey"].includes(e3.callee.name.toLowerCase()) && e3.arguments.length >= 2) {
        let a2 = "";
        return e3.arguments[0].type === "Identifier" && (a2 = e3.arguments[0].name.toLowerCase()), a2 && e3.arguments[1].type === "Literal" && m$5(e3.arguments[1].value) && n2.push(a2 + "." + e3.arguments[1].value.toLowerCase()), false;
      }
    }
    return e3.type !== "MemberExpression" || e3.object.type !== "Identifier" || (e3.computed === false && e3.object && e3.object.name && e3.property && e3.property.type === "Identifier" && e3.property.name ? n2.push(e3.object.name.toLowerCase() + "." + e3.property.name.toLowerCase()) : e3.object && e3.object.name && e3.property && e3.property.type === "Literal" && typeof e3.property.value == "string" && n2.push(e3.object.name.toLowerCase() + "." + ((_a = e3.property.value) == null ? void 0 : _a.toString().toLowerCase())), false);
  }), n2;
}
function y$5(e2) {
  const n2 = [];
  return r$5(e2, (e3) => (e3.type === "CallExpression" && e3.callee.type === "Identifier" && n2.push(e3.callee.name.toLowerCase()), true)), n2;
}
function d$6(e2, n2 = []) {
  let a2 = null;
  if (e2.usesFeatureSet === void 0) {
    a2 === null && (a2 = y$5(e2)), e2.usesFeatureSet = false;
    for (let n3 = 0; n3 < a2.length; n3++)
      t$4.includes(a2[n3]) && (e2.usesFeatureSet = true, e2.isAsync = true);
    if (e2.usesFeatureSet === false && n2 && n2.length > 0) {
      for (const a3 of n2)
        if (c$4(e2, a3)) {
          e2.usesFeatureSet = true, e2.isAsync = true;
          break;
        }
    }
  }
  if (e2.usesModules === void 0) {
    e2.usesModules = false;
    x$5(e2).length > 0 && (e2.usesModules = true);
  }
  if (e2.usesGeometry === void 0) {
    e2.usesGeometry = false, a2 === null && (a2 = y$5(e2));
    for (let n3 = 0; n3 < a2.length; n3++)
      i$5.includes(a2[n3]) && (e2.usesGeometry = true);
  }
}
function F$2(F2) {
  function m2(e2, o2, i2) {
    if (e2 instanceof t$6)
      return e2.toArray();
    if (Y$5(e2))
      return e2;
    throw new t$7(o2, e$8.InvalidParameter, i2);
  }
  function p2(n2, t2) {
    const r2 = n2.length, e2 = Math.floor(r2 / 2);
    return r2 === 0 ? [] : r2 === 1 ? [n2[0]] : y2(p2(n2.slice(0, e2), t2), p2(n2.slice(e2, r2), t2), t2);
  }
  function y2(n2, t2, r2) {
    const e2 = [];
    for (; n2.length > 0 || t2.length > 0; )
      if (n2.length > 0 && t2.length > 0) {
        let o2 = r2(n2[0], t2[0]);
        isNaN(o2) && (o2 = 0), o2 <= 0 ? (e2.push(n2[0]), n2 = n2.slice(1)) : (e2.push(t2[0]), t2 = t2.slice(1));
      } else
        n2.length > 0 ? (e2.push(n2[0]), n2 = n2.slice(1)) : t2.length > 0 && (e2.push(t2[0]), t2 = t2.slice(1));
    return e2;
  }
  async function v2(n2, t2) {
    const r2 = n2.length, e2 = Math.floor(r2 / 2);
    if (r2 === 0)
      return [];
    if (r2 === 1)
      return [n2[0]];
    const o2 = [await v2(n2.slice(0, e2), t2), await v2(n2.slice(e2, r2), t2)];
    return P2(o2[0], o2[1], t2, []);
  }
  async function P2(n2, t2, r2, e2) {
    const o2 = e2;
    if (!(n2.length > 0 || t2.length > 0))
      return e2;
    if (n2.length > 0 && t2.length > 0) {
      let i2 = await r2(n2[0], t2[0]);
      return isNaN(i2) && (i2 = 1), i2 <= 0 ? (o2.push(n2[0]), n2 = n2.slice(1)) : (o2.push(t2[0]), t2 = t2.slice(1)), P2(n2, t2, r2, e2);
    }
    return n2.length > 0 ? (o2.push(n2[0]), P2(n2 = n2.slice(1), t2, r2, e2)) : t2.length > 0 ? (o2.push(t2[0]), P2(n2, t2 = t2.slice(1), r2, e2)) : void 0;
  }
  function I2(r2, o2, i2, u2) {
    V$5(i2, 1, 2, r2, o2);
    let l2 = i2[0];
    if (E$3(l2) && (l2 = l2.toArray()), Y$5(l2) === false)
      throw new t$7(r2, e$8.InvalidParameter, o2);
    if (i2.length > 1) {
      if (F$3(i2[1]) === false)
        throw new t$7(r2, e$8.InvalidParameter, o2);
      let e2 = l2;
      const a2 = i2[1].createFunction(r2);
      return u2 ? v2(e2, a2) : (e2 = p2(e2, (n2, t2) => a2(n2, t2)), e2);
    }
    let f2 = l2;
    if (f2.length === 0)
      return [];
    const g2 = {};
    for (let n2 = 0; n2 < f2.length; n2++) {
      const t2 = O$4(f2[n2]);
      t2 !== "" && (g2[t2] = true);
    }
    if (g2.Array === true || g2.Dictionary === true || g2.Feature === true || g2.Point === true || g2.Polygon === true || g2.Polyline === true || g2.Multipoint === true || g2.Extent === true || g2.Function === true)
      return f2.slice(0);
    let F3 = 0, m3 = "";
    for (const n2 in g2)
      F3++, m3 = n2;
    return f2 = F3 > 1 || m3 === "String" ? p2(f2, (n2, t2) => {
      if (n2 == null || n2 === k$3)
        return t2 == null || t2 === k$3 ? 0 : 1;
      if (t2 == null || t2 === k$3)
        return -1;
      const r3 = K$3(n2), e2 = K$3(t2);
      return r3 < e2 ? -1 : r3 === e2 ? 0 : 1;
    }) : m3 === "Number" ? p2(f2, (n2, t2) => n2 - t2) : m3 === "Boolean" ? p2(f2, (n2, t2) => n2 === t2 ? 0 : t2 ? -1 : 1) : m3 === "Date" ? p2(f2, (n2, t2) => t2 - n2) : f2.slice(0), f2;
  }
  F2.functions.array = function(r2, a2) {
    return F2.standardFunction(r2, a2, (c2, s2, l2) => {
      V$5(l2, 1, 2, r2, a2);
      const f2 = re$5(l2[0]);
      if (isNaN(f2) || L$3(f2) === false)
        throw new t$7(r2, e$8.InvalidParameter, a2);
      const d2 = v$2(l2[1], null), h2 = new Array(f2);
      return h2.fill(d2), h2;
    });
  }, F2.functions.front = function(r2, o2) {
    return F2.standardFunction(r2, o2, (i2, u2, s2) => {
      if (V$5(s2, 1, 1, r2, o2), E$3(s2[0])) {
        if (s2[0].length() <= 0)
          throw new t$7(r2, e$8.OutOfBounds, o2);
        return s2[0].get(0);
      }
      if (Y$5(s2[0])) {
        if (s2[0].length <= 0)
          throw new t$7(r2, e$8.OutOfBounds, o2);
        return s2[0][0];
      }
      throw new t$7(r2, e$8.InvalidParameter, o2);
    });
  }, F2.functions.back = function(r2, o2) {
    return F2.standardFunction(r2, o2, (i2, u2, s2) => {
      if (V$5(s2, 1, 1, r2, o2), E$3(s2[0])) {
        if (s2[0].length() <= 0)
          throw new t$7(r2, e$8.OutOfBounds, o2);
        return s2[0].get(s2[0].length() - 1);
      }
      if (Y$5(s2[0])) {
        if (s2[0].length <= 0)
          throw new t$7(r2, e$8.OutOfBounds, o2);
        return s2[0][s2[0].length - 1];
      }
      throw new t$7(r2, e$8.InvalidParameter, o2);
    });
  }, F2.functions.push = function(r2, o2) {
    return F2.standardFunction(r2, o2, (i2, u2, a2) => {
      if (V$5(a2, 1, 2, r2, o2), Y$5(a2[0]))
        return a2[0][a2[0].length] = a2[1], a2[0].length;
      throw new t$7(r2, e$8.InvalidParameter, o2);
    });
  }, F2.functions.pop = function(r2, o2) {
    return F2.standardFunction(r2, o2, (i2, u2, a2) => {
      if (V$5(a2, 1, 1, r2, o2), Y$5(a2[0])) {
        if (a2[0].length <= 0)
          throw new t$7(r2, e$8.OutOfBounds, o2);
        const e2 = a2[0][a2[0].length - 1];
        return a2[0].length = a2[0].length - 1, e2;
      }
      throw new t$7(r2, e$8.InvalidParameter, o2);
    });
  }, F2.functions.erase = function(r2, u2) {
    return F2.standardFunction(r2, u2, (a2, l2, f2) => {
      if (V$5(f2, 2, 2, r2, u2), Y$5(f2[0])) {
        let e2 = re$5(f2[1]);
        if (isNaN(e2) || L$3(e2) === false)
          throw new t$7(r2, e$8.InvalidParameter, u2);
        const a3 = f2[0];
        if (a3.length <= 0)
          throw new t$7(r2, e$8.OutOfBounds, u2);
        if (e2 < 0 && (e2 = a3.length + e2), e2 < 0)
          throw new t$7(r2, e$8.OutOfBounds, u2);
        if (e2 >= a3.length)
          throw new t$7(r2, e$8.OutOfBounds, u2);
        return a3.splice(e2, 1), k$3;
      }
      throw new t$7(r2, e$8.InvalidParameter, u2);
    });
  }, F2.functions.insert = function(r2, u2) {
    return F2.standardFunction(r2, u2, (a2, l2, f2) => {
      if (V$5(f2, 3, 3, r2, u2), Y$5(f2[0])) {
        const e2 = re$5(f2[1]);
        if (isNaN(e2) || L$3(e2) === false)
          throw new t$7(r2, e$8.InvalidParameter, u2);
        const a3 = f2[2], c2 = f2[0];
        if (e2 > c2.length)
          throw new t$7(r2, e$8.OutOfBounds, u2);
        if (e2 < 0 && e2 < -1 * c2.length)
          throw new t$7(r2, e$8.OutOfBounds, u2);
        return e2 === c2.length ? (c2[e2] = a3, k$3) : (c2.splice(e2, 0, a3), k$3);
      }
      throw new t$7(r2, e$8.InvalidParameter, u2);
    });
  }, F2.functions.resize = function(r2, a2) {
    return F2.standardFunction(r2, a2, (l2, f2, d2) => {
      if (V$5(d2, 2, 3, r2, a2), Y$5(d2[0])) {
        const e2 = re$5(d2[1]);
        if (isNaN(e2) || L$3(e2) === false)
          throw new t$7(r2, e$8.InvalidParameter, a2);
        if (e2 < 0)
          throw new t$7(r2, e$8.InvalidParameter, a2);
        const c2 = v$2(d2[2], null), l3 = d2[0];
        if (l3.length >= e2)
          return l3.length = e2, k$3;
        const f3 = l3.length;
        l3.length = e2;
        for (let n2 = f3; n2 < l3.length; n2++)
          l3[n2] = c2;
        return k$3;
      }
      throw new t$7(r2, e$8.InvalidParameter, a2);
    });
  }, F2.functions.includes = function(r2, o2) {
    return F2.standardFunction(r2, o2, (i2, u2, s2) => {
      if (V$5(s2, 2, 2, r2, o2), Y$5(s2[0])) {
        const n2 = s2[1];
        return s2[0].findIndex((t2) => X$5(t2, n2)) > -1;
      }
      if (E$3(s2[0])) {
        const n2 = s2[1];
        return s2[0].toArray().findIndex((t2) => X$5(t2, n2)) > -1;
      }
      throw new t$7(r2, e$8.InvalidParameter, o2);
    });
  }, F2.functions.slice = function(r2, s2) {
    return F2.standardFunction(r2, s2, (l2, f2, d2) => {
      if (V$5(d2, 1, 3, r2, s2), Y$5(d2[0])) {
        const e2 = re$5(v$2(d2[1], 0)), a2 = re$5(v$2(d2[2], d2[0].length));
        if (isNaN(e2) || L$3(e2) === false)
          throw new t$7(r2, e$8.InvalidParameter, s2);
        if (isNaN(a2) || L$3(a2) === false)
          throw new t$7(r2, e$8.InvalidParameter, s2);
        return d2[0].slice(e2, a2);
      }
      if (E$3(d2[0])) {
        const e2 = d2[0], a2 = re$5(v$2(d2[1], 0)), c2 = re$5(v$2(d2[2], e2.length()));
        if (isNaN(a2) || L$3(a2) === false)
          throw new t$7(r2, e$8.InvalidParameter, s2);
        if (isNaN(c2) || L$3(c2) === false)
          throw new t$7(r2, e$8.InvalidParameter, s2);
        return e2.toArray().slice(a2, c2);
      }
      throw new t$7(r2, e$8.InvalidParameter, s2);
    });
  }, F2.functions.splice = function(n2, t2) {
    return F2.standardFunction(n2, t2, (n3, t3, r2) => {
      const e2 = [];
      for (let o2 = 0; o2 < r2.length; o2++)
        Y$5(r2[o2]) ? e2.push(...r2[o2]) : E$3(r2[o2]) ? e2.push(...r2[o2].toArray()) : e2.push(r2[o2]);
      return e2;
    });
  }, F2.functions.top = function(r2, i2) {
    return F2.standardFunction(r2, i2, (u2, s2, l2) => {
      if (V$5(l2, 2, 2, r2, i2), Y$5(l2[0]))
        return re$5(l2[1]) >= l2[0].length ? l2[0].slice(0) : l2[0].slice(0, re$5(l2[1]));
      if (E$3(l2[0]))
        return re$5(l2[1]) >= l2[0].length() ? l2[0].slice(0) : l2[0].slice(0, re$5(l2[1]));
      throw new t$7(r2, e$8.InvalidParameter, i2);
    });
  }, F2.functions.first = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => (V$5(i2, 1, 1, n2, t2), Y$5(i2[0]) ? i2[0].length === 0 ? null : i2[0][0] : E$3(i2[0]) ? i2[0].length() === 0 ? null : i2[0].get(0) : null));
  }, F2.mode === "sync" && (F2.functions.sort = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, e2, o2) => I2(n2, t2, o2, false));
  }, F2.functions.any = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      for (const n3 of a2) {
        const t3 = u2(n3);
        if (_$4(t3) && t3 === true)
          return true;
      }
      return false;
    });
  }, F2.functions.all = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      for (const n3 of a2) {
        if (u2(n3) !== true)
          return false;
      }
      return true;
    });
  }, F2.functions.none = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      for (const n3 of a2) {
        if (u2(n3) === true)
          return false;
      }
      return true;
    });
  }, F2.functions.reduce = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 3, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      return i2.length === 2 ? a2.length === 0 ? null : a2.reduce((n3, t3) => {
        const r3 = u2(n3, t3);
        return n3 = r3 !== void 0 && r3 !== k$3 ? r3 : null;
      }) : a2.reduce((n3, t3) => {
        const r3 = u2(n3, t3);
        return n3 = r3 !== void 0 && r3 !== k$3 ? r3 : null;
      }, i2[2]);
    });
  }, F2.functions.map = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2), c2 = [];
      for (const n3 of a2) {
        const t3 = u2(n3);
        t3 !== void 0 && t3 !== k$3 ? c2.push(t3) : c2.push(null);
      }
      return c2;
    });
  }, F2.functions.filter = function(n2, t2) {
    return F2.standardFunction(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2), c2 = [];
      for (const n3 of a2) {
        u2(n3) === true && c2.push(n3);
      }
      return c2;
    });
  }), F2.mode === "async" && (F2.functions.sort = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, (r2, e2, o2) => I2(n2, t2, o2, true));
  }, F2.functions.any = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, async (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      for (const n3 of a2) {
        const t3 = await u2(n3);
        let r3 = null;
        if (r3 = C$5(r3) ? await t3 : t3, _$4(r3) && r3 === true)
          return true;
      }
      return false;
    });
  }, F2.functions.all = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, async (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      for (const n3 of a2) {
        const t3 = await u2(n3);
        let r3 = null;
        if (r3 = C$5(r3) ? await t3 : t3, r3 !== true)
          return false;
      }
      return true;
    });
  }, F2.functions.none = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, async (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2);
      for (const n3 of a2) {
        const t3 = await u2(n3);
        let r3 = null;
        if (r3 = C$5(r3) ? await t3 : t3, r3 === true)
          return false;
      }
      return true;
    });
  }, F2.functions.filter = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, async (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2), c2 = [];
      for (const n3 of a2) {
        const t3 = await u2(n3);
        let r3 = null;
        r3 = C$5(r3) ? await t3 : t3, r3 === true && c2.push(n3);
      }
      return c2;
    });
  }, F2.functions.reduce = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, (r2, o2, i2) => {
      V$5(i2, 2, 3, n2, t2);
      const a2 = i2[1].createFunction(n2), c2 = m2(i2[0], n2, t2);
      let l2 = null;
      if (i2.length > 2) {
        const n3 = v$2(i2[2], null);
        l2 = c2.reduce(async (n4, t3) => {
          let r3 = await n4;
          return r3 !== void 0 && r3 !== k$3 || (r3 = null), a2(r3, t3);
        }, Promise.resolve(n3));
      } else {
        if (c2.length === 0)
          return null;
        l2 = c2.reduce(async (n3, t3, r3) => {
          if (r3 <= 1)
            return a2(n3, t3);
          let e2 = await n3;
          return e2 !== void 0 && e2 !== k$3 || (e2 = null), a2(e2, t3);
        });
      }
      return l2.then((n3) => n3 !== void 0 && n3 !== k$3 ? n3 : null);
    });
  }, F2.functions.map = function(n2, t2) {
    return F2.standardFunctionAsync(n2, t2, async (r2, o2, i2) => {
      V$5(i2, 2, 2, n2, t2);
      const u2 = i2[1].createFunction(n2), a2 = m2(i2[0], n2, t2), c2 = [];
      for (const n3 of a2) {
        const t3 = await u2(n3);
        let r3 = null;
        r3 = C$5(r3) ? await t3 : t3, r3 !== void 0 && r3 !== k$3 ? c2.push(r3) : c2.push(null);
      }
      return c2;
    });
  });
}
const m$4 = Object.freeze(Object.defineProperty({ __proto__: null, registerFunctions: F$2 }, Symbol.toStringTag, { value: "Module" }));
function m$3(e2) {
  const t2 = new Date(e2.getTime()), n2 = t2.getFullYear(), r2 = new Date(0);
  r2.setFullYear(n2 + 1, 0, 4), r2.setHours(0, 0, 0, 0);
  const s2 = d$5(r2), u2 = new Date(0);
  u2.setFullYear(n2, 0, 4), u2.setHours(0, 0, 0, 0);
  const o2 = d$5(u2);
  return t2.getTime() >= s2.getTime() ? n2 + 1 : t2.getTime() >= o2.getTime() ? n2 : n2 - 1;
}
function d$5(e2) {
  const t2 = 1, n2 = new Date(e2.getTime()), r2 = n2.getDay(), s2 = (r2 < t2 ? 7 : 0) + r2 - t2;
  return n2.setDate(n2.getDate() - s2), n2.setHours(0, 0, 0, 0), n2;
}
function h$3(e2) {
  const t2 = m$3(e2), n2 = new Date(0);
  n2.setFullYear(t2, 0, 4), n2.setHours(0, 0, 0, 0);
  return d$5(n2);
}
function N$4(e2, t2, n2) {
  return e2 + (D$5(n2) ? y$4 : w$4)[t2];
}
function D$5(e2) {
  return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
}
const w$4 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], y$4 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function T$6(e2) {
  return e2 === null ? e2 : isNaN(e2.getTime()) ? null : e2;
}
function M$5(D2, w2) {
  D2.today = function(t2, n2) {
    return w2(t2, n2, (r2, s2, u2) => {
      V$5(u2, 0, 0, t2, n2);
      const o2 = new Date();
      return o2.setHours(0, 0, 0, 0), o2;
    });
  }, D2.now = function(t2, n2) {
    return w2(t2, n2, (r2, s2, u2) => {
      V$5(u2, 0, 0, t2, n2);
      return new Date();
    });
  }, D2.timestamp = function(t2, n2) {
    return w2(t2, n2, (r2, s2, u2) => {
      V$5(u2, 0, 0, t2, n2);
      let o2 = new Date();
      return o2 = new Date(o2.getUTCFullYear(), o2.getUTCMonth(), o2.getUTCDate(), o2.getUTCHours(), o2.getUTCMinutes(), o2.getUTCSeconds(), o2.getUTCMilliseconds()), o2;
    });
  }, D2.toutc = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? null : new Date(a2.getUTCFullYear(), a2.getUTCMonth(), a2.getUTCDate(), a2.getUTCHours(), a2.getUTCMinutes(), a2.getUTCSeconds(), a2.getUTCMilliseconds());
    });
  }, D2.tolocal = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? null : DateTime.utc(a2.getFullYear(), a2.getMonth() + 1, a2.getDate(), a2.getHours(), a2.getMinutes(), a2.getSeconds(), a2.getMilliseconds()).toJSDate();
    });
  }, D2.day = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getDate();
    });
  }, D2.month = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getMonth();
    });
  }, D2.year = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getFullYear();
    });
  }, D2.hour = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getHours();
    });
  }, D2.second = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getSeconds();
    });
  }, D2.millisecond = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getMilliseconds();
    });
  }, D2.minute = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getMinutes();
    });
  }, D2.week = function(s2, u2) {
    return w2(s2, u2, (o2, a2, c2) => {
      V$5(c2, 1, 2, s2, u2);
      const f2 = ae$3(c2[0]);
      if (f2 === null)
        return NaN;
      const g2 = re$5(v$2(c2[1], 0));
      if (g2 < 0 || g2 > 6)
        throw new t$7(s2, e$8.InvalidParameter, u2);
      const m2 = f2.getDate(), d2 = f2.getMonth(), h2 = f2.getFullYear(), D3 = f2.getDay(), w3 = N$4(m2, d2, h2) - 1, y2 = Math.floor(w3 / 7);
      return D3 - g2 + (D3 - g2 < 0 ? 7 : 0) < w3 - 7 * y2 ? y2 + 1 : y2;
    });
  }, D2.weekday = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getDay();
    });
  }, D2.isoweekday = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      if (a2 === null)
        return NaN;
      let c2 = a2.getDay();
      return c2 === 0 && (c2 = 7), c2;
    });
  }, D2.isomonth = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : a2.getMonth() + 1;
    });
  }, D2.isoweek = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      if (a2 === null)
        return NaN;
      const c2 = d$5(a2).getTime() - h$3(a2).getTime();
      return Math.round(c2 / 6048e5) + 1;
    });
  }, D2.isoyear = function(n2, r2) {
    return w2(n2, r2, (s2, u2, o2) => {
      V$5(o2, 1, 1, n2, r2);
      const a2 = ae$3(o2[0]);
      return a2 === null ? NaN : m$3(a2);
    });
  }, D2.date = function(r2, a2) {
    return w2(r2, a2, (c2, l2, i2) => {
      if (V$5(i2, 0, 7, r2, a2), i2.length === 3)
        return T$6(new Date(re$5(i2[0]), re$5(i2[1]), re$5(i2[2]), 0, 0, 0, 0));
      if (i2.length === 4)
        return T$6(new Date(re$5(i2[0]), re$5(i2[1]), re$5(i2[2]), re$5(i2[3]), 0, 0, 0));
      if (i2.length === 5)
        return T$6(new Date(re$5(i2[0]), re$5(i2[1]), re$5(i2[2]), re$5(i2[3]), re$5(i2[4]), 0, 0));
      if (i2.length === 6)
        return T$6(new Date(re$5(i2[0]), re$5(i2[1]), re$5(i2[2]), re$5(i2[3]), re$5(i2[4]), re$5(i2[5]), 0));
      if (i2.length === 7)
        return T$6(new Date(re$5(i2[0]), re$5(i2[1]), re$5(i2[2]), re$5(i2[3]), re$5(i2[4]), re$5(i2[5]), re$5(i2[6])));
      if (i2.length === 2) {
        let e2, t2 = K$3(i2[1]);
        return t2 === "" ? null : (t2 = W$7(t2), e2 = t2 === "X" ? DateTime.fromSeconds(re$5(i2[0])) : t2 === "x" ? DateTime.fromMillis(re$5(i2[0])) : DateTime.fromFormat(K$3(i2[0]), t2, { locale: l$b(), numberingSystem: "latn" }), e2.isValid ? e2.toJSDate() : null);
      }
      if (i2.length === 1) {
        if (w$6(i2[0])) {
          if (i2[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "")
            return null;
          if (/^[0-9][0-9][0-9][0-9]$/.test(i2[0]) === true)
            return ae$3(i2[0] + "-01-01");
        }
        const e2 = re$5(i2[0]);
        if (isNaN(e2) === false)
          return T$6(new Date(e2));
        return ae$3(i2[0]);
      }
      return i2.length === 0 ? new Date() : void 0;
    });
  }, D2.datediff = function(t2, n2) {
    return w2(t2, n2, (r2, u2, o2) => {
      V$5(o2, 2, 3, t2, n2);
      const c2 = ie$4(o2[0]), l2 = ie$4(o2[1]);
      if (c2 === null || l2 === null)
        return NaN;
      switch (K$3(o2[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return c2.diff(l2, "days").days;
        case "months":
        case "month":
          return c2.diff(l2, "months").months;
        case "minutes":
        case "minute":
        case "m":
          return o2[2] === "M" ? c2.diff(l2, "months").months : c2.diff(l2, "minutes").minutes;
        case "seconds":
        case "second":
        case "s":
          return c2.diff(l2, "seconds").seconds;
        case "milliseconds":
        case "millisecond":
        case "ms":
        default:
          return c2.diff(l2).milliseconds;
        case "hours":
        case "hour":
        case "h":
          return c2.diff(l2, "hours").hours;
        case "years":
        case "year":
        case "y":
          return c2.diff(l2, "years").years;
      }
    });
  }, D2.dateadd = function(t2, r2) {
    return w2(t2, r2, (u2, o2, l2) => {
      V$5(l2, 2, 3, t2, r2);
      const i2 = ie$4(l2[0]);
      if (i2 === null)
        return null;
      let f2 = re$5(l2[1]);
      if (isNaN(f2))
        return i2.toJSDate();
      let g2 = "milliseconds";
      switch (K$3(l2[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          g2 = "days", f2 = H$5(f2);
          break;
        case "months":
        case "month":
          g2 = "months", f2 = H$5(f2);
          break;
        case "minutes":
        case "minute":
        case "m":
          g2 = l2[2] === "M" ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          g2 = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          g2 = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          g2 = "hours";
          break;
        case "years":
        case "year":
        case "y":
          g2 = "years";
      }
      return i2.plus({ [g2]: f2 }).toJSDate();
    });
  };
}
function e$5(t2, n2, e2) {
  return Math.sqrt((t2[0] - n2[0]) ** 2 + (t2[1] - n2[1]) ** 2 + (t2[2] !== void 0 && n2[2] !== void 0 ? (t2[2] * e2 - n2[2] * e2) ** 2 : 0));
}
const r$4 = [];
for (const v2 of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const t2 = v2[0];
  for (let n2 = 1; n2 < v2.length; n2++)
    r$4[v2[n2]] = t2;
}
const o$3 = [];
function s$7(t2) {
  return t2.vcsWkid && r$4[t2.vcsWkid] !== void 0 ? o$3[r$4[t2.vcsWkid]] : t2.latestVcsWkid && r$4[t2.latestVcsWkid] !== void 0 ? o$3[r$4[t2.latestVcsWkid]] : 1;
}
function c$3(t2, n2, e2) {
  const r2 = { x: 0, y: 0 };
  n2 && (r2.z = 0), e2 && (r2.m = 0);
  let o2 = 0, s2 = t2[0];
  for (let c2 = 0; c2 < t2.length; c2++) {
    const a2 = t2[c2];
    if (f$1(a2, s2) === false) {
      const t3 = h$2(s2, a2, n2), c3 = i$4(s2, a2, n2, e2);
      c3.x *= t3, c3.y *= t3, r2.x += c3.x, r2.y += c3.y, n2 && (c3.z *= t3, r2.z += c3.z), e2 && (c3.m *= t3, r2.m += c3.m), o2 += t3, s2 = a2;
    }
  }
  return o2 > 0 ? (r2.x /= o2, r2.y /= o2, n2 && (r2.z /= o2), e2 && (r2.m /= o2)) : (r2.x = t2[0][0], r2.y = t2[0][1], n2 && (r2.z = t2[0][2]), e2 && n2 ? r2.m = t2[0][3] : e2 && (r2.m = t2[0][2])), r2;
}
function i$4(t2, n2, e2, r2) {
  const o2 = { x: (t2[0] + n2[0]) / 2, y: (t2[1] + n2[1]) / 2 };
  return e2 && (o2.z = (t2[2] + n2[2]) / 2), e2 && r2 ? o2.m = (t2[3] + n2[3]) / 2 : r2 && (o2.m = (t2[2] + n2[2]) / 2), o2;
}
function a$4(t2, n2) {
  if (t2.length <= 1)
    return 0;
  let e2 = 0;
  for (let r2 = 1; r2 < t2.length; r2++)
    e2 += h$2(t2[r2 - 1], t2[r2], n2);
  return e2;
}
function h$2(t2, n2, e2) {
  const r2 = n2[0] - t2[0], o2 = n2[1] - t2[1];
  if (e2) {
    const t3 = n2[2] - n2[2];
    return Math.sqrt(r2 * r2 + o2 * o2 + t3 * t3);
  }
  return Math.sqrt(r2 * r2 + o2 * o2);
}
function f$1(t2, n2) {
  if (t2.length !== n2.length)
    return false;
  for (let e2 = 0; e2 < t2.length; e2++)
    if (t2[e2] !== n2[e2])
      return false;
  return true;
}
function l$6(n2) {
  const e2 = { x: 0, y: 0, spatialReference: n2.spatialReference.toJSON() }, r2 = { x: 0, y: 0, spatialReference: n2.spatialReference.toJSON() };
  let o2 = 0, s2 = 0;
  for (let t2 = 0; t2 < n2.paths.length; t2++) {
    if (n2.paths[t2].length === 0)
      continue;
    const i2 = a$4(n2.paths[t2], n2.hasZ === true);
    if (i2 === 0) {
      const r3 = c$3(n2.paths[t2], n2.hasZ === true, n2.hasM === true);
      e2.x += r3.x, e2.y += r3.y, n2.hasZ === true && (e2.z += r3.z), n2.hasM === true && (e2.m += r3.m), ++o2;
    } else {
      const e3 = c$3(n2.paths[t2], n2.hasZ === true, n2.hasM === true);
      r2.x += e3.x * i2, r2.y += e3.y * i2, n2.hasZ === true && (r2.z += e3.z * i2), n2.hasM === true && (r2.m += e3.m * i2), s2 += i2;
    }
  }
  return s2 > 0 ? (r2.x /= s2, r2.y /= s2, n2.hasZ === true && (r2.z /= s2), n2.hasM === true && (r2.m /= s2), new w$7(r2)) : o2 > 0 ? (e2.x /= o2, e2.y /= o2, n2.hasZ === true && (r2.z /= o2), n2.hasM === true && (e2.m /= o2), new w$7(e2)) : null;
}
function u$4(n2) {
  if (n2.points.length === 0)
    return null;
  let e2 = 0, r2 = 0, o2 = 0, s2 = 0;
  for (let t2 = 0; t2 < n2.points.length; t2++) {
    const c3 = n2.getPoint(t2);
    c3.hasZ === true && (o2 += c3.z), c3.hasM === true && (s2 += c3.m), e2 += c3.x, r2 += c3.y, s2 += c3.m;
  }
  const c2 = { x: e2 / n2.points.length, y: r2 / n2.points.length, spatialReference: null };
  return c2.spatialReference = n2.spatialReference.toJSON(), n2.hasZ === true && (c2.z = o2 / n2.points.length), n2.hasM === true && (c2.m = s2 / n2.points.length), new w$7(c2);
}
function y$3(t2, n2) {
  return t2.x * n2.x + t2.y * n2.y;
}
function x$4(t2, n2) {
  return t2.x * n2.y - n2.x * t2.y;
}
function m$2(t2, n2, e2 = 0) {
  for (; t2 < e2; )
    t2 += n2;
  const r2 = e2 + n2;
  for (; t2 >= r2; )
    t2 -= n2;
  return t2;
}
function g$3(t2, n2) {
  return Math.atan2(n2.y - t2.y, n2.x - t2.x);
}
function p$2(t2, n2) {
  return m$2(g$3(t2, n2), 2 * Math.PI) * (180 / Math.PI);
}
function M$4(t2, n2) {
  return m$2(Math.PI / 2 - g$3(t2, n2), 2 * Math.PI) * (180 / Math.PI);
}
function z$5(t2, n2, e2) {
  const r2 = { x: t2.x - n2.x, y: t2.y - n2.y }, o2 = { x: e2.x - n2.x, y: e2.y - n2.y };
  return Math.atan2(x$4(r2, o2), y$3(r2, o2));
}
function P$4(t2, n2, e2) {
  return m$2(z$5(t2, n2, e2), 2 * Math.PI) * (180 / Math.PI);
}
function d$4(t2, n2, e2) {
  return m$2(-1 * z$5(t2, n2, e2), 2 * Math.PI) * (180 / Math.PI);
}
o$3[9002] = 0.3048, o$3[9003] = 0.3048006096012192, o$3[9095] = 0.3048007491;
const I$4 = [0, 0];
function Z$6(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) {
    const r2 = t2[e2];
    for (let s2 = 0; s2 < r2.length - 1; s2++) {
      const o3 = r2[s2], c2 = r2[s2 + 1];
      for (let r3 = e2 + 1; r3 < t2.length; r3++)
        for (let e3 = 0; e3 < t2[r3].length - 1; e3++) {
          const s3 = t2[r3][e3], i2 = t2[r3][e3 + 1];
          if (G$4(o3, c2, s3, i2, I$4) && !(I$4[0] === o3[0] && I$4[1] === o3[1] || I$4[0] === s3[0] && I$4[1] === s3[1] || I$4[0] === c2[0] && I$4[1] === c2[1] || I$4[0] === i2[0] && I$4[1] === i2[1]))
            return true;
        }
    }
    const o2 = r2.length;
    if (!(o2 < 3))
      for (let t3 = 0; t3 <= o2 - 2; t3++) {
        const e3 = r2[t3], s2 = r2[t3 + 1];
        for (let c2 = t3 + 2; c2 <= o2 - 2; c2++) {
          const t4 = r2[c2], o3 = r2[c2 + 1];
          if (G$4(e3, s2, t4, o3, I$4) && !(I$4[0] === e3[0] && I$4[1] === e3[1] || I$4[0] === t4[0] && I$4[1] === t4[1] || I$4[0] === s2[0] && I$4[1] === s2[1] || I$4[0] === o3[0] && I$4[1] === o3[1]))
            return true;
        }
      }
  }
  return false;
}
function M$3(e2) {
  return e2 && e2.arcadeDeclaredClass === "esri.arcade.Feature";
}
function C$3(D2, C2) {
  D2.ringisclockwise = function(e2, n2) {
    return C2(e2, n2, (o2, s2, l2) => {
      V$5(l2, 1, 1, e2, n2);
      let c2 = [], f2 = false, u2 = false;
      if (l2[0] === null)
        return false;
      if (Y$5(l2[0])) {
        for (const t2 of l2[0]) {
          if (!(t2 instanceof w$7))
            throw new t$7(e2, e$8.InvalidParameter, n2);
          c2.push(t2.hasZ ? t2.hasM ? [t2.x, t2.y, t2.z, t2.m] : [t2.x, t2.y, t2.z] : [t2.x, t2.y]);
        }
        c2.length > 0 && (f2 = l2[0][0].hasZ, u2 = l2[0][0].hasM);
      } else if (l2[0] instanceof i$7)
        c2 = l2[0]._elements, c2.length > 0 && (f2 = l2[0]._hasZ, u2 = l2[0]._hasM);
      else {
        if (!E$3(l2[0]))
          throw new t$7(e2, e$8.InvalidParameter, n2);
        for (const t2 of l2[0].toArray()) {
          if (!(t2 instanceof w$7))
            throw new t$7(e2, e$8.InvalidParameter, n2);
          c2.push(t2.hasZ ? t2.hasM ? [t2.x, t2.y, t2.z, t2.m] : [t2.x, t2.y, t2.z] : [t2.x, t2.y]);
        }
        c2.length > 0 && (f2 = l2[0].get(0).hasZ, u2 = l2[0].get(0).hasM);
      }
      return !(c2.length < 3) && h$5(c2, u2, f2);
    });
  }, D2.polygon = function(t2, a2) {
    return C2(t2, a2, (i2, l2, c2) => {
      V$5(c2, 1, 1, t2, a2);
      let f2 = null;
      if (c2[0] instanceof J$5) {
        if (f2 = se$4(g$4.parseGeometryFromDictionary(c2[0]), t2.spatialReference), f2 instanceof v$4 == false)
          throw new t$7(t2, e$8.InvalidParameter, a2);
      } else
        f2 = c2[0] instanceof v$4 ? v$5(c2[0].toJSON()) : se$4(new v$4(JSON.parse(c2[0])), t2.spatialReference);
      if (f2 !== null && f2.spatialReference.equals(t2.spatialReference) === false)
        throw new t$7(t2, e$8.WrongSpatialReference, a2);
      return ue$3(f2);
    });
  }, D2.polyline = function(t2, a2) {
    return C2(t2, a2, (i2, l2, c2) => {
      V$5(c2, 1, 1, t2, a2);
      let f2 = null;
      if (c2[0] instanceof J$5) {
        if (f2 = se$4(g$4.parseGeometryFromDictionary(c2[0]), t2.spatialReference), f2 instanceof m$7 == false)
          throw new t$7(t2, e$8.InvalidParameter, a2);
      } else
        f2 = c2[0] instanceof m$7 ? v$5(c2[0].toJSON()) : se$4(new m$7(JSON.parse(c2[0])), t2.spatialReference);
      if (f2 !== null && f2.spatialReference.equals(t2.spatialReference) === false)
        throw new t$7(t2, e$8.WrongSpatialReference, a2);
      return ue$3(f2);
    });
  }, D2.point = function(t2, a2) {
    return C2(t2, a2, (i2, l2, c2) => {
      V$5(c2, 1, 1, t2, a2);
      let f2 = null;
      if (c2[0] instanceof J$5) {
        if (f2 = se$4(g$4.parseGeometryFromDictionary(c2[0]), t2.spatialReference), f2 instanceof w$7 == false)
          throw new t$7(t2, e$8.InvalidParameter, a2);
      } else
        f2 = c2[0] instanceof w$7 ? v$5(c2[0].toJSON()) : se$4(new w$7(JSON.parse(c2[0])), t2.spatialReference);
      if (f2 !== null && f2.spatialReference.equals(t2.spatialReference) === false)
        throw new t$7(t2, e$8.WrongSpatialReference, a2);
      return ue$3(f2);
    });
  }, D2.multipoint = function(t2, a2) {
    return C2(t2, a2, (i2, l2, c2) => {
      V$5(c2, 1, 1, t2, a2);
      let f2 = null;
      if (c2[0] instanceof J$5) {
        if (f2 = se$4(g$4.parseGeometryFromDictionary(c2[0]), t2.spatialReference), f2 instanceof u$7 == false)
          throw new t$7(t2, e$8.InvalidParameter, a2);
      } else
        f2 = c2[0] instanceof u$7 ? v$5(c2[0].toJSON()) : se$4(new u$7(JSON.parse(c2[0])), t2.spatialReference);
      if (f2 !== null && f2.spatialReference.equals(t2.spatialReference) === false)
        throw new t$7(t2, e$8.WrongSpatialReference, a2);
      return ue$3(f2);
    });
  }, D2.extent = function(t2, a2) {
    return C2(t2, a2, (i2, c2, f2) => {
      var _a;
      f2 = pe$2(f2), V$5(f2, 1, 1, t2, a2);
      let u2 = null;
      if (f2[0] instanceof J$5)
        u2 = se$4(g$4.parseGeometryFromDictionary(f2[0]), t2.spatialReference);
      else if (f2[0] instanceof w$7) {
        const e2 = { xmin: f2[0].x, ymin: f2[0].y, xmax: f2[0].x, ymax: f2[0].y, spatialReference: f2[0].spatialReference.toJSON() }, n2 = f2[0];
        n2.hasZ ? (e2.zmin = n2.z, e2.zmax = n2.z) : n2.hasM && (e2.mmin = n2.m, e2.mmax = n2.m), u2 = v$5(e2);
      } else
        u2 = f2[0] instanceof v$4 || f2[0] instanceof m$7 || f2[0] instanceof u$7 ? v$5((_a = f2[0].extent) == null ? void 0 : _a.toJSON()) : f2[0] instanceof w$8 ? v$5(f2[0].toJSON()) : se$4(new w$8(JSON.parse(f2[0])), t2.spatialReference);
      if (u2 !== null && u2.spatialReference.equals(t2.spatialReference) === false)
        throw new t$7(t2, e$8.WrongSpatialReference, a2);
      return ue$3(u2);
    });
  }, D2.geometry = function(t2, a2) {
    return C2(t2, a2, (i2, l2, c2) => {
      V$5(c2, 1, 1, t2, a2);
      let f2 = null;
      if (c2[0] === null)
        return null;
      if (f2 = M$3(c2[0]) ? se$4(c2[0].geometry(), t2.spatialReference) : c2[0] instanceof J$5 ? se$4(g$4.parseGeometryFromDictionary(c2[0]), t2.spatialReference) : se$4(v$5(JSON.parse(c2[0])), t2.spatialReference), f2 !== null && f2.spatialReference.equals(t2.spatialReference) === false)
        throw new t$7(t2, e$8.WrongSpatialReference, a2);
      return ue$3(f2);
    });
  }, D2.setgeometry = function(e2, n2) {
    return C2(e2, n2, (t2, a2, i2) => {
      if (V$5(i2, 2, 2, e2, n2), !M$3(i2[0]))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      if (i2[0].immutable === true)
        throw new t$7(e2, e$8.Immutable, n2);
      if (!(i2[1] instanceof p$6 || i2[1] === null))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      return i2[0]._geometry = i2[1], k$3;
    });
  }, D2.feature = function(t2, r2) {
    return C2(t2, r2, (a2, i2, s2) => {
      if (s2.length === 0)
        throw new t$7(t2, e$8.WrongNumberOfParameters, r2);
      let l2 = null;
      if (s2.length === 1)
        if (w$6(s2[0]))
          l2 = g$4.fromJson(JSON.parse(s2[0]));
        else if (M$3(s2[0]))
          l2 = g$4.createFromArcadeFeature(s2[0]);
        else if (s2[0] instanceof p$6)
          l2 = g$4.createFromGraphicLikeObject(s2[0], null, null);
        else {
          if (!(s2[0] instanceof J$5))
            throw new t$7(t2, e$8.InvalidParameter, r2);
          {
            let t3 = s2[0].hasField("geometry") ? s2[0].field("geometry") : null, r3 = s2[0].hasField("attributes") ? s2[0].field("attributes") : null;
            t3 !== null && t3 instanceof J$5 && (t3 = g$4.parseGeometryFromDictionary(t3)), r3 !== null && (r3 = g$4.parseAttributesFromDictionary(r3)), l2 = g$4.createFromGraphicLikeObject(t3, r3, null);
          }
        }
      else if (s2.length === 2) {
        let a3 = null, i3 = null;
        if (s2[0] !== null)
          if (s2[0] instanceof p$6)
            a3 = s2[0];
          else {
            if (!(a3 instanceof J$5))
              throw new t$7(t2, e$8.InvalidParameter, r2);
            a3 = g$4.parseGeometryFromDictionary(s2[0]);
          }
        if (s2[1] !== null) {
          if (!(s2[1] instanceof J$5))
            throw new t$7(t2, e$8.InvalidParameter, r2);
          i3 = g$4.parseAttributesFromDictionary(s2[1]);
        }
        l2 = g$4.createFromGraphicLikeObject(a3, i3, null);
      } else {
        let a3 = null;
        const i3 = {};
        if (s2[0] !== null)
          if (s2[0] instanceof p$6)
            a3 = s2[0];
          else {
            if (!(a3 instanceof J$5))
              throw new t$7(t2, e$8.InvalidParameter, r2);
            a3 = g$4.parseGeometryFromDictionary(s2[0]);
          }
        for (let e2 = 1; e2 < s2.length; e2 += 2) {
          const n2 = K$3(s2[e2]), a4 = s2[e2 + 1];
          if (!(a4 == null || w$6(a4) || isNaN(a4) || z$6(a4) || Z$7(a4) || _$4(a4)))
            throw new t$7(t2, e$8.InvalidParameter, r2);
          if (F$3(a4) || I$5(a4) === false)
            throw new t$7(t2, e$8.InvalidParameter, r2);
          i3[n2] = a4 === k$3 ? null : a4;
        }
        l2 = g$4.createFromGraphicLikeObject(a3, i3, null);
      }
      return l2._geometry = se$4(l2.geometry(), t2.spatialReference), l2.immutable = false, l2;
    });
  }, D2.dictionary = function(n2, t2) {
    return C2(n2, t2, (r2, o2, s2) => {
      if (s2.length === 0) {
        const n3 = new J$5();
        return n3.immutable = false, n3;
      }
      if (s2.length === 1 && w$6(s2[0]))
        try {
          const n3 = JSON.parse(s2[0]), t3 = J$5.convertObjectToArcadeDictionary(n3, false);
          return t3.immutable = false, t3;
        } catch (y2) {
          throw new t$7(n2, e$8.InvalidParameter, t2);
        }
      if (s2.length % 2 != 0)
        throw new t$7(n2, e$8.WrongNumberOfParameters, t2);
      const l2 = {};
      for (let e2 = 0; e2 < s2.length; e2 += 2) {
        const r3 = K$3(s2[e2]), o3 = s2[e2 + 1];
        if (!(o3 == null || w$6(o3) || isNaN(o3) || z$6(o3) || Z$7(o3) || _$4(o3) || Y$5(o3) || E$3(o3)))
          throw new t$7(n2, e$8.InvalidParameter, t2);
        if (F$3(o3))
          throw new t$7(n2, e$8.InvalidParameter, t2);
        l2[r3] = o3 === k$3 ? null : o3;
      }
      const d2 = new J$5(l2);
      return d2.immutable = false, d2;
    });
  }, D2.haskey = function(n2, t2) {
    return C2(n2, t2, (a2, i2, o2) => {
      V$5(o2, 2, 2, n2, t2);
      const s2 = K$3(o2[1]);
      if (M$3(o2[0]))
        return o2[0].hasField(s2);
      if (o2[0] instanceof J$5)
        return o2[0].hasField(s2);
      if (o2[0] instanceof p$6) {
        const e2 = W$6(o2[0], s2, null, null, 2);
        return !e2 || e2.keystate !== "notfound";
      }
      throw new t$7(n2, e$8.InvalidParameter, t2);
    });
  }, D2.hasvalue = function(n2, t2) {
    return C2(n2, t2, (a2, i2, o2) => {
      if (V$5(o2, 2, 2, n2, t2), o2[0] === null || o2[1] === null)
        return false;
      const s2 = K$3(o2[1]);
      if (J$6(o2[0]))
        return !!o2[0].hasField(s2) && o2[0].field(s2) !== null;
      if (o2[0] instanceof J$5)
        return !!o2[0].hasField(s2) && o2[0].field(s2) !== null;
      if (o2[0] instanceof p$6) {
        return W$6(o2[0], s2, null, null, 0) !== null;
      }
      return false;
    });
  }, D2.indexof = function(e2, n2) {
    return C2(e2, n2, (t2, o2, s2) => {
      V$5(s2, 2, 2, e2, n2);
      const l2 = s2[1];
      if (Y$5(s2[0])) {
        for (let e3 = 0; e3 < s2[0].length; e3++)
          if (X$5(l2, s2[0][e3]))
            return e3;
        return -1;
      }
      if (E$3(s2[0])) {
        const e3 = s2[0].length();
        for (let n3 = 0; n3 < e3; n3++)
          if (X$5(l2, s2[0].get(n3)))
            return n3;
        return -1;
      }
      throw new t$7(e2, e$8.InvalidParameter, n2);
    });
  }, D2.angle = function(e2, n2) {
    return C2(e2, n2, (t2, a2, i2) => {
      if (i2 = pe$2(i2), V$5(i2, 2, 3, e2, n2), !(i2[0] instanceof w$7))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      if (!(i2[1] instanceof w$7))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      if (i2.length > 2 && !(i2[2] instanceof w$7))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      return i2.length === 2 ? p$2(i2[0], i2[1]) : P$4(i2[0], i2[1], i2[2]);
    });
  }, D2.bearing = function(e2, n2) {
    return C2(e2, n2, (t2, a2, i2) => {
      if (i2 = pe$2(i2), V$5(i2, 2, 3, e2, n2), !(i2[0] instanceof w$7))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      if (!(i2[1] instanceof w$7))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      if (i2.length > 2 && !(i2[2] instanceof w$7))
        throw new t$7(e2, e$8.InvalidParameter, n2);
      return i2.length === 2 ? M$4(i2[0], i2[1]) : d$4(i2[0], i2[1], i2[2]);
    });
  }, D2.isselfintersecting = function(e2, n2) {
    return C2(e2, n2, (t2, o2, s2) => {
      s2 = pe$2(s2), V$5(s2, 1, 1, e2, n2);
      let c2 = s2[0];
      if (c2 instanceof v$4)
        return c2.isSelfIntersecting;
      if (c2 instanceof m$7)
        return c2 = c2.paths, Z$6(c2);
      if (c2 instanceof u$7) {
        const e3 = c2.points;
        for (let n3 = 0; n3 < e3.length; n3++)
          for (let t3 = 0; t3 < e3.length; t3++)
            if (t3 !== n3) {
              let r2 = true;
              for (let a2 = 0; a2 < e3[n3].length; a2++)
                if (e3[n3][a2] !== e3[t3][a2]) {
                  r2 = false;
                  break;
                }
              if (r2 === true)
                return true;
            }
      }
      return !(!Y$5(c2) && !E$3(c2)) && (c2 = Se$2(c2, e2.spatialReference), c2 !== null && (c2 = c2.paths), Z$6(c2));
    });
  };
}
let Z$5 = 0;
function W$6(n2, r2, a2, i2, o2 = 1) {
  let s2;
  switch (r2 = r2.toLowerCase()) {
    case "hasz": {
      const e2 = n2.hasZ;
      return e2 !== void 0 && e2;
    }
    case "hasm": {
      const e2 = n2.hasM;
      return e2 !== void 0 && e2;
    }
    case "spatialreference": {
      let t2 = n2.spatialReference._arcadeCacheId;
      if (t2 === void 0) {
        let e2 = true;
        Object.freeze && Object.isFrozen(n2.spatialReference) && (e2 = false), e2 && (Z$5++, n2.spatialReference._arcadeCacheId = Z$5, t2 = Z$5);
      }
      const r3 = new J$5({ wkt: n2.spatialReference.wkt, wkid: n2.spatialReference.wkid });
      return t2 !== void 0 && (r3._arcadeCacheId = "SPREF" + t2.toString()), r3;
    }
  }
  switch (n2.type) {
    case "extent":
      switch (r2) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const e2 = n2[r2];
          return e2 !== void 0 ? e2 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (r2) {
        case "rings":
          s2 = n2.cache._arcadeCacheId, s2 === void 0 && (Z$5++, s2 = Z$5, n2.cache._arcadeCacheId = s2);
          return new h$4(n2.rings, n2.spatialReference, n2.hasZ === true, n2.hasM === true, s2);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (r2) {
        case "x":
        case "y":
        case "z":
        case "m":
          return n2[r2] !== void 0 ? n2[r2] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (r2) {
        case "paths":
          s2 = n2.cache._arcadeCacheId, s2 === void 0 && (Z$5++, s2 = Z$5, n2.cache._arcadeCacheId = s2);
          return new h$4(n2.paths, n2.spatialReference, n2.hasZ === true, n2.hasM === true, s2);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (r2) {
        case "points":
          s2 = n2.cache._arcadeCacheId, s2 === void 0 && (Z$5++, s2 = Z$5, n2.cache._arcadeCacheId = s2);
          return new i$7(n2.points, n2.spatialReference, n2.hasZ === true, n2.hasM === true, s2, 1);
        case "type":
          return "Multipoint";
      }
  }
  if (o2 === 1)
    throw new t$7(a2, e$8.InvalidIdentifier, i2);
  return o2 === 2 ? { keystate: "notfound" } : null;
}
function r$3(e2) {
  if (e2 == null)
    return null;
  if (typeof e2 == "number")
    return e2;
  let r2 = e2.toLowerCase();
  switch (r2 = r2.replace(/\s/g, ""), r2 = r2.replace(/-/g, ""), r2) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 109404;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 109414;
    case "acres":
    case "acre":
    case "ac":
      return 109402;
    case "hectares":
    case "hectare":
    case "ha":
      return 109401;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 109442;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 109405;
    case "nm":
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 109409;
  }
  return null;
}
function s$6(r2) {
  if (r2 == null)
    return null;
  switch (r2.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return r2.extent;
    case "point":
      return new w$8({ xmin: r2.x, ymin: r2.y, xmax: r2.x, ymax: r2.y, spatialReference: r2.spatialReference });
    case "extent":
      return r2;
  }
  return null;
}
function a$3(e2) {
  if (e2 == null)
    return null;
  if (typeof e2 == "number")
    return e2;
  let r2 = e2.toLowerCase();
  switch (r2 = r2.replace(/\s/g, ""), r2 = r2.replace(/-/g, ""), r2) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 9001;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 9036;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 9096;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 9002;
    case "nm":
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 9030;
  }
  return null;
}
function c$2(e2) {
  if (e2 == null)
    return null;
  const r2 = e2.clone();
  return e2.cache._geVersion !== void 0 && (r2.cache._geVersion = e2.cache._geVersion), r2;
}
let A$3 = null;
function z$4(e2) {
  return a$7.indexOf("4.") === 0 ? v$4.fromExtent(e2) : new v$4({ spatialReference: e2.spatialReference, rings: [[[e2.xmin, e2.ymin], [e2.xmin, e2.ymax], [e2.xmax, e2.ymax], [e2.xmax, e2.ymin], [e2.xmin, e2.ymin]]] });
}
function E$2(n2) {
  A$3 = n2;
}
function O$3(n2, e2) {
  if (n2.type !== "polygon" && n2.type !== "polyline" && n2.type !== "extent")
    return 0;
  let t2 = 1;
  if (n2.spatialReference.vcsWkid || n2.spatialReference.latestVcsWkid) {
    t2 = s$7(n2.spatialReference) / $$4(n2.spatialReference);
  }
  let r2 = 0;
  if (n2.type === "polyline")
    for (const a2 of n2.paths)
      for (let n3 = 1; n3 < a2.length; n3++)
        r2 += e$5(a2[n3], a2[n3 - 1], t2);
  else if (n2.type === "polygon")
    for (const a2 of n2.rings) {
      for (let n3 = 1; n3 < a2.length; n3++)
        r2 += e$5(a2[n3], a2[n3 - 1], t2);
      (a2[0][0] !== a2[a2.length - 1][0] || a2[0][1] !== a2[a2.length - 1][1] || a2[0][2] !== void 0 && a2[0][2] !== a2[a2.length - 1][2]) && (r2 += e$5(a2[0], a2[a2.length - 1], t2));
    }
  else
    n2.type === "extent" && (r2 += 2 * e$5([n2.xmin, n2.ymin, 0], [n2.xmax, n2.ymin, 0], t2), r2 += 2 * e$5([n2.xmin, n2.ymin, 0], [n2.xmin, n2.ymax, 0], t2), r2 *= 2, r2 += 4 * Math.abs(v$2(n2.zmax, 0) * t2 - v$2(n2.zmin, 0) * t2));
  const i2 = new m$7({ hasZ: false, hasM: false, spatialReference: n2.spatialReference, paths: [[0, 0], [0, r2]] });
  return A$3.planarLength(i2, e2);
}
function q$3(n2, v2) {
  function I2(n3, e2, t2) {
    if (V$5(t2, 2, 2, n3, e2), t2[0] instanceof p$6 && t2[1] instanceof p$6)
      ;
    else if (t2[0] instanceof p$6 && t2[1] === null)
      ;
    else if (t2[1] instanceof p$6 && t2[0] === null)
      ;
    else if (t2[0] !== null || t2[1] !== null)
      throw new t$7(n3, e$8.InvalidParameter, e2);
  }
  n2.disjoint = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] === null || a2[1] === null || A$3.disjoint(a2[0], a2[1])));
  }, n2.intersects = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] !== null && a2[1] !== null && A$3.intersects(a2[0], a2[1])));
  }, n2.touches = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] !== null && a2[1] !== null && A$3.touches(a2[0], a2[1])));
  }, n2.crosses = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] !== null && a2[1] !== null && A$3.crosses(a2[0], a2[1])));
  }, n2.within = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] !== null && a2[1] !== null && A$3.within(a2[0], a2[1])));
  }, n2.contains = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] !== null && a2[1] !== null && A$3.contains(a2[0], a2[1])));
  }, n2.overlaps = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] !== null && a2[1] !== null && A$3.overlaps(a2[0], a2[1])));
  }, n2.equals = function(n3, e2) {
    return v2(n3, e2, (t2, r2, i2) => (V$5(i2, 2, 2, n3, e2), i2[0] === i2[1] || (i2[0] instanceof p$6 && i2[1] instanceof p$6 ? A$3.equals(i2[0], i2[1]) : !(!z$6(i2[0]) || !z$6(i2[1])) && i2[0].getTime() === i2[1].getTime())));
  }, n2.relate = function(n3, e2) {
    return v2(n3, e2, (t2, r2, l2) => {
      if (l2 = pe$2(l2), V$5(l2, 3, 3, n3, e2), l2[0] instanceof p$6 && l2[1] instanceof p$6)
        return A$3.relate(l2[0], l2[1], K$3(l2[2]));
      if (l2[0] instanceof p$6 && l2[1] === null)
        return false;
      if (l2[1] instanceof p$6 && l2[0] === null)
        return false;
      if (l2[0] === null && l2[1] === null)
        return false;
      throw new t$7(n3, e$8.InvalidParameter, e2);
    });
  }, n2.intersection = function(n3, e2) {
    return v2(n3, e2, (t2, r2, a2) => (a2 = pe$2(a2), I2(n3, e2, a2), a2[0] === null || a2[1] === null ? null : A$3.intersect(a2[0], a2[1])));
  }, n2.union = function(n3, t2) {
    return v2(n3, t2, (r2, a2, l2) => {
      const o2 = [];
      if ((l2 = pe$2(l2)).length === 0)
        throw new t$7(n3, e$8.WrongNumberOfParameters, t2);
      if (l2.length === 1)
        if (Y$5(l2[0])) {
          const e2 = pe$2(l2[0]);
          for (let r3 = 0; r3 < e2.length; r3++)
            if (e2[r3] !== null) {
              if (!(e2[r3] instanceof p$6))
                throw new t$7(n3, e$8.InvalidParameter, t2);
              o2.push(e2[r3]);
            }
        } else {
          if (!E$3(l2[0])) {
            if (l2[0] instanceof p$6)
              return se$4(c$2(l2[0]), n3.spatialReference);
            if (l2[0] === null)
              return null;
            throw new t$7(n3, e$8.InvalidParameter, t2);
          }
          {
            const e2 = pe$2(l2[0].toArray());
            for (let r3 = 0; r3 < e2.length; r3++)
              if (e2[r3] !== null) {
                if (!(e2[r3] instanceof p$6))
                  throw new t$7(n3, e$8.InvalidParameter, t2);
                o2.push(e2[r3]);
              }
          }
        }
      else
        for (let e2 = 0; e2 < l2.length; e2++)
          if (l2[e2] !== null) {
            if (!(l2[e2] instanceof p$6))
              throw new t$7(n3, e$8.InvalidParameter, t2);
            o2.push(l2[e2]);
          }
      return o2.length === 0 ? null : A$3.union(o2);
    });
  }, n2.difference = function(n3, t2) {
    return v2(n3, t2, (r2, a2, l2) => (l2 = pe$2(l2), I2(n3, t2, l2), l2[0] !== null && l2[1] === null ? c$2(l2[0]) : l2[0] === null ? null : A$3.difference(l2[0], l2[1])));
  }, n2.symmetricdifference = function(n3, t2) {
    return v2(n3, t2, (r2, a2, l2) => (l2 = pe$2(l2), I2(n3, t2, l2), l2[0] === null && l2[1] === null ? null : l2[0] === null ? c$2(l2[1]) : l2[1] === null ? c$2(l2[0]) : A$3.symmetricDifference(l2[0], l2[1])));
  }, n2.clip = function(n3, e2) {
    return v2(n3, e2, (t2, r2, l2) => {
      if (l2 = pe$2(l2), V$5(l2, 2, 2, n3, e2), !(l2[1] instanceof w$8) && l2[1] !== null)
        throw new t$7(n3, e$8.InvalidParameter, e2);
      if (l2[0] === null)
        return null;
      if (!(l2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return l2[1] === null ? null : A$3.clip(l2[0], l2[1]);
    });
  }, n2.cut = function(n3, t2) {
    return v2(n3, t2, (r2, l2, o2) => {
      if (o2 = pe$2(o2), V$5(o2, 2, 2, n3, t2), !(o2[1] instanceof m$7) && o2[1] !== null)
        throw new t$7(n3, e$8.InvalidParameter, t2);
      if (o2[0] === null)
        return [];
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      return o2[1] === null ? [c$2(o2[0])] : A$3.cut(o2[0], o2[1]);
    });
  }, n2.area = function(n3, e2) {
    return v2(n3, e2, (r2, l2, o2) => {
      if (V$5(o2, 1, 2, n3, e2), (o2 = pe$2(o2))[0] === null)
        return 0;
      if (Y$5(o2[0]) || E$3(o2[0])) {
        const e3 = he$3(o2[0], n3.spatialReference);
        return e3 === null ? 0 : A$3.planarArea(e3, r$3(v$2(o2[1], -1)));
      }
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.planarArea(o2[0], r$3(v$2(o2[1], -1)));
    });
  }, n2.areageodetic = function(n3, e2) {
    return v2(n3, e2, (r2, l2, o2) => {
      if (V$5(o2, 1, 2, n3, e2), (o2 = pe$2(o2))[0] === null)
        return 0;
      if (Y$5(o2[0]) || E$3(o2[0])) {
        const e3 = he$3(o2[0], n3.spatialReference);
        return e3 === null ? 0 : A$3.geodesicArea(e3, r$3(v$2(o2[1], -1)));
      }
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.geodesicArea(o2[0], r$3(v$2(o2[1], -1)));
    });
  }, n2.length = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      if (V$5(o2, 1, 2, n3, e2), (o2 = pe$2(o2))[0] === null)
        return 0;
      if (Y$5(o2[0]) || E$3(o2[0])) {
        const e3 = Se$2(o2[0], n3.spatialReference);
        return e3 === null ? 0 : A$3.planarLength(e3, a$3(v$2(o2[1], -1)));
      }
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.planarLength(o2[0], a$3(v$2(o2[1], -1)));
    });
  }, n2.length3d = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      if (V$5(o2, 1, 2, n3, e2), (o2 = pe$2(o2))[0] === null)
        return 0;
      if (Y$5(o2[0]) || E$3(o2[0])) {
        const e3 = Se$2(o2[0], n3.spatialReference);
        return e3 === null ? 0 : e3.hasZ === true ? O$3(e3, a$3(v$2(o2[1], -1))) : A$3.planarLength(e3, a$3(v$2(o2[1], -1)));
      }
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return o2[0].hasZ === true ? O$3(o2[0], a$3(v$2(o2[1], -1))) : A$3.planarLength(o2[0], a$3(v$2(o2[1], -1)));
    });
  }, n2.lengthgeodetic = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      if (V$5(o2, 1, 2, n3, e2), (o2 = pe$2(o2))[0] === null)
        return 0;
      if (Y$5(o2[0]) || E$3(o2[0])) {
        const e3 = Se$2(o2[0], n3.spatialReference);
        return e3 === null ? 0 : A$3.geodesicLength(e3, a$3(v$2(o2[1], -1)));
      }
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.geodesicLength(o2[0], a$3(v$2(o2[1], -1)));
    });
  }, n2.distance = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      o2 = pe$2(o2), V$5(o2, 2, 3, n3, e2);
      let u2 = o2[0];
      (Y$5(o2[0]) || E$3(o2[0])) && (u2 = be$2(o2[0], n3.spatialReference));
      let c2 = o2[1];
      if ((Y$5(o2[1]) || E$3(o2[1])) && (c2 = be$2(o2[1], n3.spatialReference)), !(u2 instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      if (!(c2 instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.distance(u2, c2, a$3(v$2(o2[2], -1)));
    });
  }, n2.distancegeodetic = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      o2 = pe$2(o2), V$5(o2, 2, 3, n3, e2);
      const f2 = o2[0], s2 = o2[1];
      if (!(f2 instanceof w$7))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      if (!(s2 instanceof w$7))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const u2 = new m$7({ paths: [], spatialReference: f2.spatialReference });
      return u2.addPath([f2, s2]), A$3.geodesicLength(u2, a$3(v$2(o2[2], -1)));
    });
  }, n2.densify = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      if (o2 = pe$2(o2), V$5(o2, 2, 3, n3, e2), o2[0] === null)
        return null;
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const f2 = re$5(o2[1]);
      if (isNaN(f2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      if (f2 <= 0)
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return o2[0] instanceof v$4 || o2[0] instanceof m$7 ? A$3.densify(o2[0], f2, a$3(v$2(o2[2], -1))) : o2[0] instanceof w$8 ? A$3.densify(z$4(o2[0]), f2, a$3(v$2(o2[2], -1))) : o2[0];
    });
  }, n2.densifygeodetic = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      if (o2 = pe$2(o2), V$5(o2, 2, 3, n3, e2), o2[0] === null)
        return null;
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const f2 = re$5(o2[1]);
      if (isNaN(f2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      if (f2 <= 0)
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return o2[0] instanceof v$4 || o2[0] instanceof m$7 ? A$3.geodesicDensify(o2[0], f2, a$3(v$2(o2[2], -1))) : o2[0] instanceof w$8 ? A$3.geodesicDensify(z$4(o2[0]), f2, a$3(v$2(o2[2], -1))) : o2[0];
    });
  }, n2.generalize = function(n3, e2) {
    return v2(n3, e2, (t2, l2, o2) => {
      if (o2 = pe$2(o2), V$5(o2, 2, 4, n3, e2), o2[0] === null)
        return null;
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const f2 = re$5(o2[1]);
      if (isNaN(f2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.generalize(o2[0], f2, le$3(v$2(o2[2], true)), a$3(v$2(o2[3], -1)));
    });
  }, n2.buffer = function(n3, t2) {
    return v2(n3, t2, (l2, o2, f2) => {
      if (f2 = pe$2(f2), V$5(f2, 2, 3, n3, t2), f2[0] === null)
        return null;
      if (!(f2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      const s2 = re$5(f2[1]);
      if (isNaN(s2))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      return s2 === 0 ? c$2(f2[0]) : A$3.buffer(f2[0], s2, a$3(v$2(f2[2], -1)));
    });
  }, n2.buffergeodetic = function(n3, t2) {
    return v2(n3, t2, (l2, o2, f2) => {
      if (f2 = pe$2(f2), V$5(f2, 2, 3, n3, t2), f2[0] === null)
        return null;
      if (!(f2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      const s2 = re$5(f2[1]);
      if (isNaN(s2))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      return s2 === 0 ? c$2(f2[0]) : A$3.geodesicBuffer(f2[0], s2, a$3(v$2(f2[2], -1)));
    });
  }, n2.offset = function(n3, e2) {
    return v2(n3, e2, (t2, l2, f2) => {
      if (f2 = pe$2(f2), V$5(f2, 2, 6, n3, e2), f2[0] === null)
        return null;
      if (!(f2[0] instanceof v$4 || f2[0] instanceof m$7))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const s2 = re$5(f2[1]);
      if (isNaN(s2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const u2 = re$5(v$2(f2[4], 10));
      if (isNaN(u2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const c2 = re$5(v$2(f2[5], 0));
      if (isNaN(c2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.offset(f2[0], s2, a$3(v$2(f2[2], -1)), K$3(v$2(f2[3], "round")).toLowerCase(), u2, c2);
    });
  }, n2.rotate = function(n3, e2) {
    return v2(n3, e2, (t2, r2, l2) => {
      l2 = pe$2(l2), V$5(l2, 2, 3, n3, e2);
      let o2 = l2[0];
      if (o2 === null)
        return null;
      if (!(o2 instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      o2 instanceof w$8 && (o2 = v$4.fromExtent(o2));
      const f2 = re$5(l2[1]);
      if (isNaN(f2))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      const s2 = v$2(l2[2], null);
      if (s2 === null)
        return A$3.rotate(o2, f2);
      if (s2 instanceof w$7)
        return A$3.rotate(o2, f2, s2);
      throw new t$7(n3, e$8.InvalidParameter, e2);
    });
  }, n2.centroid = function(n3, t2) {
    return v2(n3, t2, (r2, l2, o2) => {
      if (o2 = pe$2(o2), V$5(o2, 1, 1, n3, t2), o2[0] === null)
        return null;
      let c2 = o2[0];
      if ((Y$5(o2[0]) || E$3(o2[0])) && (c2 = be$2(o2[0], n3.spatialReference)), c2 === null)
        return null;
      if (!(c2 instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      return c2 instanceof w$7 ? se$4(c$2(o2[0]), n3.spatialReference) : c2 instanceof v$4 ? c2.centroid : c2 instanceof m$7 ? l$6(c2) : c2 instanceof u$7 ? u$4(c2) : c2 instanceof w$8 ? c2.center : null;
    });
  }, n2.multiparttosinglepart = function(n3, t2) {
    return v2(n3, t2, (r2, l2, o2) => {
      o2 = pe$2(o2), V$5(o2, 1, 1, n3, t2);
      const f2 = [];
      if (o2[0] === null)
        return null;
      if (!(o2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, t2);
      if (o2[0] instanceof w$7)
        return [se$4(c$2(o2[0]), n3.spatialReference)];
      if (o2[0] instanceof w$8)
        return [se$4(c$2(o2[0]), n3.spatialReference)];
      const s2 = A$3.simplify(o2[0]);
      if (s2 instanceof v$4) {
        const n4 = [], e2 = [];
        for (let t3 = 0; t3 < s2.rings.length; t3++)
          if (s2.isClockwise(s2.rings[t3])) {
            const e3 = v$5({ rings: [s2.rings[t3]], hasZ: s2.hasZ === true, hasM: s2.hasM === true, spatialReference: s2.spatialReference.toJSON() });
            n4.push(e3);
          } else
            e2.push({ ring: s2.rings[t3], pt: s2.getPoint(t3, 0) });
        for (let t3 = 0; t3 < e2.length; t3++)
          for (let r3 = 0; r3 < n4.length; r3++)
            if (n4[r3].contains(e2[t3].pt)) {
              n4[r3].addRing(e2[t3].ring);
              break;
            }
        return n4;
      }
      if (s2 instanceof m$7) {
        const n4 = [];
        for (let e2 = 0; e2 < s2.paths.length; e2++) {
          const t3 = v$5({ paths: [s2.paths[e2]], hasZ: s2.hasZ === true, hasM: s2.hasM === true, spatialReference: s2.spatialReference.toJSON() });
          n4.push(t3);
        }
        return n4;
      }
      if (o2[0] instanceof u$7) {
        const t3 = se$4(c$2(o2[0]), n3.spatialReference);
        for (let n4 = 0; n4 < t3.points.length; n4++)
          f2.push(t3.getPoint(n4));
        return f2;
      }
      return null;
    });
  }, n2.issimple = function(n3, e2) {
    return v2(n3, e2, (t2, r2, l2) => {
      if (l2 = pe$2(l2), V$5(l2, 1, 1, n3, e2), l2[0] === null)
        return true;
      if (!(l2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.isSimple(l2[0]);
    });
  }, n2.simplify = function(n3, e2) {
    return v2(n3, e2, (t2, r2, l2) => {
      if (l2 = pe$2(l2), V$5(l2, 1, 1, n3, e2), l2[0] === null)
        return null;
      if (!(l2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.simplify(l2[0]);
    });
  }, n2.convexhull = function(n3, e2) {
    return v2(n3, e2, (t2, r2, l2) => {
      if (l2 = pe$2(l2), V$5(l2, 1, 1, n3, e2), l2[0] === null)
        return null;
      if (!(l2[0] instanceof p$6))
        throw new t$7(n3, e$8.InvalidParameter, e2);
      return A$3.convexHull(l2[0]);
    });
  };
}
var geomsync = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  registerFunctions: q$3,
  setGeometryEngine: E$2
});
function l$5(n2, t2, r2) {
  return r2 === void 0 || +r2 == 0 ? Math[n2](t2) : (t2 = +t2, r2 = +r2, isNaN(t2) || typeof r2 != "number" || r2 % 1 != 0 ? NaN : (t2 = t2.toString().split("e"), +((t2 = (t2 = Math[n2](+(t2[0] + "e" + (t2[1] ? +t2[1] - r2 : -r2)))).toString().split("e"))[0] + "e" + (t2[1] ? +t2[1] + r2 : r2))));
}
function N$3(N2, h2) {
  function m2(n2, t2, r2) {
    const u2 = re$5(n2);
    return isNaN(u2) ? u2 : isNaN(t2) || isNaN(r2) || t2 > r2 ? NaN : u2 < t2 ? t2 : u2 > r2 ? r2 : u2;
  }
  N2.number = function(a2, f2) {
    return h2(a2, f2, (s2, l2, N3) => {
      V$5(N3, 1, 2, a2, f2);
      const h3 = N3[0];
      if (Z$7(h3))
        return h3;
      if (h3 === null)
        return 0;
      if (z$6(h3))
        return Number(h3);
      if (_$4(h3))
        return Number(h3);
      if (Y$5(h3))
        return NaN;
      if (h3 === "")
        return Number(h3);
      if (h3 === void 0)
        return Number(h3);
      if (w$6(h3)) {
        if (N3[1] !== void 0) {
          let n2 = R$2(N3[1], "\u2030", "");
          return n2 = R$2(n2, "\xA4", ""), p$7(h3, { pattern: n2 });
        }
        return Number(h3.trim());
      }
      return Number(h3);
    });
  }, N2.abs = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.abs(re$5(o2[0]))));
  }, N2.acos = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.acos(re$5(o2[0]))));
  }, N2.asin = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.asin(re$5(o2[0]))));
  }, N2.atan = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.atan(re$5(o2[0]))));
  }, N2.atan2 = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 2, 2, t2, r2), Math.atan2(re$5(o2[0]), re$5(o2[1]))));
  }, N2.ceil = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => {
      if (V$5(o2, 1, 2, t2, r2), o2.length === 2) {
        let n2 = re$5(o2[1]);
        return isNaN(n2) && (n2 = 0), l$5("ceil", re$5(o2[0]), -1 * n2);
      }
      return Math.ceil(re$5(o2[0]));
    });
  }, N2.round = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => {
      if (V$5(o2, 1, 2, t2, r2), o2.length === 2) {
        let n2 = re$5(o2[1]);
        return isNaN(n2) && (n2 = 0), l$5("round", re$5(o2[0]), -1 * n2);
      }
      return Math.round(re$5(o2[0]));
    });
  }, N2.floor = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => {
      if (V$5(o2, 1, 2, t2, r2), o2.length === 2) {
        let n2 = re$5(o2[1]);
        return isNaN(n2) && (n2 = 0), l$5("floor", re$5(o2[0]), -1 * n2);
      }
      return Math.floor(re$5(o2[0]));
    });
  }, N2.cos = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.cos(re$5(o2[0]))));
  }, N2.isnan = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), typeof o2[0] == "number" && isNaN(o2[0])));
  }, N2.exp = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.exp(re$5(o2[0]))));
  }, N2.log = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.log(re$5(o2[0]))));
  }, N2.pow = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 2, 2, t2, r2), re$5(o2[0]) ** re$5(o2[1])));
  }, N2.random = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 0, 0, t2, r2), Math.random()));
  }, N2.sin = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.sin(re$5(o2[0]))));
  }, N2.sqrt = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.sqrt(re$5(o2[0]))));
  }, N2.tan = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), Math.tan(re$5(o2[0]))));
  }, N2.defaultvalue = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 2, 2, t2, r2), o2[0] === null || o2[0] === "" || o2[0] === void 0 ? o2[1] : o2[0]));
  }, N2.isempty = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => (V$5(o2, 1, 1, t2, r2), o2[0] === null || (o2[0] === "" || o2[0] === void 0)));
  }, N2.boolean = function(t2, r2) {
    return h2(t2, r2, (u2, e2, o2) => {
      V$5(o2, 1, 1, t2, r2);
      const i2 = o2[0];
      return le$3(i2);
    });
  }, N2.constrain = function(t2, r2) {
    return h2(t2, r2, (u2, o2, i2) => {
      V$5(i2, 3, 3, t2, r2);
      const f2 = re$5(i2[1]), c2 = re$5(i2[2]);
      if (Y$5(i2[0])) {
        const n2 = [];
        for (const t3 of i2[0])
          n2.push(m2(t3, f2, c2));
        return n2;
      }
      if (E$3(i2[0])) {
        const n2 = [];
        for (let t3 = 0; t3 < i2[0].length(); t3++)
          n2.push(m2(i2[0].get(t3), f2, c2));
        return n2;
      }
      return m2(i2[0], f2, c2);
    });
  };
}
function s$5(e2) {
  let t2 = 0;
  for (let n2 = 0; n2 < e2.length; n2++)
    t2 += e2[n2];
  return t2 / e2.length;
}
function c$1(e2) {
  const t2 = s$5(e2);
  let n2 = 0;
  for (let r2 = 0; r2 < e2.length; r2++)
    n2 += (t2 - e2[r2]) ** 2;
  return n2 / e2.length;
}
function u$3(e2) {
  let t2 = 0;
  for (let n2 = 0; n2 < e2.length; n2++)
    t2 += e2[n2];
  return t2;
}
function i$3(e2, s2) {
  const c2 = [], u2 = {}, i2 = [];
  for (let o2 = 0; o2 < e2.length; o2++) {
    if (e2[o2] !== void 0 && e2[o2] !== null && e2[o2] !== k$3) {
      const t2 = e2[o2];
      if (Z$7(t2) || w$6(t2))
        u2[t2] === void 0 && (c2.push(t2), u2[t2] = 1);
      else {
        let e3 = false;
        for (let n2 = 0; n2 < i2.length; n2++)
          X$5(i2[n2], t2) === true && (e3 = true);
        e3 === false && (i2.push(t2), c2.push(t2));
      }
    }
    if (c2.length >= s2 && s2 !== -1)
      return c2;
  }
  return c2;
}
function l$4(t2, n2, r2 = 1e3) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return i$3(n2, r2);
    case "avg":
    case "mean":
      return s$5(ee$5(n2));
    case "min":
      return Math.min.apply(Math, ee$5(n2));
    case "sum":
      return u$3(ee$5(n2));
    case "max":
      return Math.max.apply(Math, ee$5(n2));
    case "stdev":
    case "stddev":
      return Math.sqrt(c$1(ee$5(n2)));
    case "var":
    case "variance":
      return c$1(ee$5(n2));
    case "count":
      return n2.length;
  }
  return 0;
}
function a$2(n2, r2, t2, i2) {
  if (i2.length === 1) {
    if (Y$5(i2[0]))
      return l$4(n2, i2[0], -1);
    if (E$3(i2[0]))
      return l$4(n2, i2[0].toArray(), -1);
  }
  return l$4(n2, i2, -1);
}
function f(o2, f2) {
  o2.stdev = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("stdev", n3, r3, t2));
  }, o2.variance = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("variance", n3, r3, t2));
  }, o2.average = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("mean", n3, r3, t2));
  }, o2.mean = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("mean", n3, r3, t2));
  }, o2.sum = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("sum", n3, r3, t2));
  }, o2.min = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("min", n3, r3, t2));
  }, o2.max = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("max", n3, r3, t2));
  }, o2.distinct = function(n2, r2) {
    return f2(n2, r2, (n3, r3, t2) => a$2("distinct", n3, r3, t2));
  }, o2.count = function(o3, a2) {
    return f2(o3, a2, (f3, c2, m2) => {
      if (V$5(m2, 1, 1, o3, a2), Y$5(m2[0]) || w$6(m2[0]))
        return m2[0].length;
      if (E$3(m2[0]))
        return m2[0].length();
      throw new t$7(o3, e$8.InvalidParameter, a2);
    });
  };
}
class t$3 extends J$5 {
  constructor(s2) {
    super(), this.declaredClass = "esri.arcade.Portal", this.immutable = false, this.setField("url", s2), this.immutable = true;
  }
}
class e$4 extends J$5 {
  constructor(t2, e2, s2, i2, a2, l2) {
    super(), this.attachmentUrl = a2, this.declaredClass = "esri.arcade.Attachment", this.immutable = false, this.setField("id", t2), this.setField("name", e2), this.setField("contenttype", s2), this.setField("size", i2), this.setField("exifinfo", l2), this.immutable = true;
  }
}
const l$3 = (e2) => (n2, t2, r2) => (r2 = r2 || 14, +e2(n2, t2).toFixed(r2)), d$3 = (e2, n2) => e2 + n2, m$1 = (e2, n2) => e2 * n2, g$2 = (e2, n2) => e2 / n2, _$3 = (e2, n2, t2) => l$3(d$3)(e2, n2, t2), w$3 = (e2, n2, t2) => l$3(m$1)(e2, n2, t2), A$2 = (e2, n2, t2) => l$3(g$2)(e2, n2, t2), D$4 = 360, p$1 = 400, E$1 = 2 * Math.PI, T$5 = 3600, S = 3240, R$1 = 60, M$2 = 60, F$1 = 180 * T$5 / Math.PI, v$1 = D$4 * R$1 * M$2, L$2 = 90 * T$5, U$2 = 180 * T$5, N$2 = 270 * T$5, x$3 = String.fromCharCode(7501), z$3 = "\xB0";
function O$2(e2) {
  if (w$6(e2) === false)
    throw new t$7(null, e$8.InvalidParameter, null);
  return e2;
}
function G$2(e2, n2) {
  const t2 = 10 ** n2;
  return Math.round(e2 * t2) / t2;
}
function I$3(e2, n2) {
  return e2 % n2;
}
function b$1(e2) {
  const n2 = parseFloat(e2.toString().replace(Math.trunc(e2).toString(), "0")) * Math.sign(e2);
  if (e2 < 0) {
    return { fraction: n2, integer: Math.ceil(e2) };
  }
  return { fraction: n2, integer: Math.floor(e2) };
}
var H$4, y$2, q$2, k$2;
function C$2(e2, n2) {
  switch (e2) {
    case H$4.north:
      return n2 === "SHORT" ? "N" : "North";
    case H$4.east:
      return n2 === "SHORT" ? "E" : "East";
    case H$4.south:
      return n2 === "SHORT" ? "S" : "South";
    case H$4.west:
      return n2 === "SHORT" ? "W" : "West";
  }
}
function P$3(e2, n2, t2) {
  for (; e2.length < t2; )
    e2 = n2 + e2;
  return e2;
}
function Q$4(e2, n2) {
  return e2 - Math.floor(e2 / n2) * n2;
}
function j$1(e2) {
  switch (e2) {
    case y$2.truncated_degrees:
    case y$2.decimal_degrees:
      return D$4;
    case y$2.radians:
      return E$1;
    case y$2.gradians:
      return p$1;
    case y$2.seconds:
      return v$1;
    case y$2.fractional_degree_minutes:
      return R$1;
    case y$2.fractional_minute_seconds:
      return M$2;
    default:
      throw new t$7(null, e$8.LogicError, null, { reason: "unsupported evaluations" });
  }
}
function W$5(e2) {
  switch (e2.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return q$2.north_azimuth;
    case "POLAR":
      return q$2.polar;
    case "QUADRANT":
      return q$2.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return q$2.south_azimuth;
  }
  throw new t$7(null, e$8.LogicError, null, { reason: "unsupported directionType" });
}
function Z$4(e2) {
  switch (e2.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return y$2.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return y$2.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return y$2.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return y$2.gradians;
  }
  throw new t$7(null, e$8.LogicError, null, { reason: "unsupported units" });
}
!function(e2) {
  e2[e2.north = 0] = "north", e2[e2.east = 1] = "east", e2[e2.south = 2] = "south", e2[e2.west = 3] = "west";
}(H$4 || (H$4 = {})), function(e2) {
  e2[e2.decimal_degrees = 1] = "decimal_degrees", e2[e2.seconds = 2] = "seconds", e2[e2.degrees_minutes_seconds = 3] = "degrees_minutes_seconds", e2[e2.radians = 4] = "radians", e2[e2.gradians = 5] = "gradians", e2[e2.truncated_degrees = 6] = "truncated_degrees", e2[e2.fractional_degree_minutes = 7] = "fractional_degree_minutes", e2[e2.fractional_minute_seconds = 8] = "fractional_minute_seconds";
}(y$2 || (y$2 = {})), function(e2) {
  e2[e2.north_azimuth = 1] = "north_azimuth", e2[e2.polar = 2] = "polar", e2[e2.quadrant = 3] = "quadrant", e2[e2.south_azimuth = 4] = "south_azimuth";
}(q$2 || (q$2 = {})), function(e2) {
  e2[e2.meridian = 0] = "meridian", e2[e2.direction = 1] = "direction";
}(k$2 || (k$2 = {}));
class B$3 {
  constructor(e2, n2, t2) {
    this.m_degrees = e2, this.m_minutes = n2, this.m_seconds = t2;
  }
  getField(e2) {
    switch (e2) {
      case y$2.decimal_degrees:
      case y$2.truncated_degrees:
        return this.m_degrees;
      case y$2.fractional_degree_minutes:
        return this.m_minutes;
      case y$2.seconds:
      case y$2.fractional_minute_seconds:
        return this.m_seconds;
      default:
        throw new t$7(null, e$8.LogicError, null, { reason: "unexpected evaluation" });
    }
  }
  static secondsToDMS(e2) {
    const n2 = b$1(e2).fraction;
    let t2 = b$1(e2).integer;
    const r2 = Math.floor(t2 / T$5);
    t2 -= r2 * T$5;
    const s2 = Math.floor(t2 / M$2);
    return t2 -= s2 * M$2, new B$3(r2, s2, t2 + n2);
  }
  static numberToDms(e2) {
    const n2 = b$1(e2).fraction, t2 = b$1(e2).integer, r2 = w$3(b$1(100 * n2).fraction, 100), s2 = b$1(100 * n2).integer;
    return new B$3(t2, s2, r2);
  }
  format(e2, n2) {
    let t2 = G$2(this.m_seconds, n2), r2 = this.m_minutes, s2 = this.m_degrees;
    if (e2 === y$2.seconds || e2 === y$2.fractional_minute_seconds)
      M$2 <= t2 && (t2 -= M$2, ++r2), R$1 <= r2 && (r2 = 0, ++s2), D$4 <= s2 && (s2 = 0);
    else if (e2 === y$2.fractional_degree_minutes)
      t2 = 0, r2 = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, s2 = this.m_degrees, R$1 <= r2 && (r2 = 0, ++s2), D$4 <= s2 && (s2 = 0);
    else if (e2 === y$2.decimal_degrees || e2 === y$2.truncated_degrees) {
      const e3 = A$2(this.m_seconds, T$5), n3 = A$2(this.m_minutes, R$1);
      s2 = Math.round(this.m_degrees + n3 + e3), r2 = 0, t2 = 0;
    }
    return new B$3(s2, r2, t2);
  }
  static dmsToSeconds(e2, n2, t2) {
    return e2 * T$5 + n2 * M$2 + t2;
  }
}
class V$4 {
  constructor(e2, n2, t2) {
    this.meridian = e2, this.angle = n2, this.direction = t2;
  }
  fetchAzimuth(e2) {
    return e2 === k$2.meridian ? this.meridian : this.direction;
  }
}
class X$4 {
  constructor(e2) {
    this._angle = e2;
  }
  static createFromAngleAndDirection(e2, n2) {
    return new X$4(new K$2(X$4._convertDirectionFormat(e2.extractAngularUnits(y$2.seconds), n2, q$2.north_azimuth)));
  }
  getAngle(e2) {
    const n2 = this._angle.extractAngularUnits(y$2.seconds);
    switch (e2) {
      case q$2.north_azimuth:
      case q$2.south_azimuth:
      case q$2.polar:
        return new K$2(X$4._convertDirectionFormat(n2, q$2.north_azimuth, e2));
      case q$2.quadrant: {
        const e3 = X$4.secondsNorthAzimuthToQuadrant(n2);
        return new K$2(e3.angle);
      }
    }
  }
  getMeridian(e2) {
    const n2 = this._angle.extractAngularUnits(y$2.seconds);
    switch (e2) {
      case q$2.north_azimuth:
        return H$4.north;
      case q$2.south_azimuth:
        return H$4.south;
      case q$2.polar:
        return H$4.east;
      case q$2.quadrant:
        return X$4.secondsNorthAzimuthToQuadrant(n2).meridian;
    }
  }
  getDirection(e2) {
    const n2 = this._angle.extractAngularUnits(y$2.seconds);
    switch (e2) {
      case q$2.north_azimuth:
        return H$4.east;
      case q$2.south_azimuth:
        return H$4.west;
      case q$2.polar:
        return H$4.north;
      case q$2.quadrant:
        return X$4.secondsNorthAzimuthToQuadrant(n2).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(e2) {
    const n2 = e2 <= L$2 || e2 >= N$2 ? H$4.north : H$4.south, t2 = n2 === H$4.north ? Math.min(v$1 - e2, e2) : Math.abs(e2 - U$2), r2 = e2 > U$2 ? H$4.west : H$4.east;
    return new V$4(n2, t2, r2);
  }
  static createFromAngleMeridianAndDirection(e2, n2, t2) {
    return new X$4(new K$2(X$4.secondsQuadrantToNorthAzimuth(e2.extractAngularUnits(y$2.seconds), n2, t2)));
  }
  static secondsQuadrantToNorthAzimuth(e2, n2, t2) {
    return n2 === H$4.north ? t2 === H$4.east ? e2 : v$1 - e2 : t2 === H$4.east ? U$2 - e2 : U$2 + e2;
  }
  static _convertDirectionFormat(e2, r2, s2) {
    let a2 = 0;
    switch (r2) {
      case q$2.north_azimuth:
        a2 = e2;
        break;
      case q$2.polar:
        a2 = L$2 - e2;
        break;
      case q$2.quadrant:
        throw new t$7(null, e$8.LogicError, null, { reason: "unexpected evaluation" });
      case q$2.south_azimuth:
        a2 = e2 + U$2;
    }
    let i2 = 0;
    switch (s2) {
      case q$2.north_azimuth:
        i2 = a2;
        break;
      case q$2.polar:
        i2 = L$2 - a2;
        break;
      case q$2.quadrant:
        throw new t$7(null, e$8.LogicError, null, { reason: "unexpected evaluation" });
      case q$2.south_azimuth:
        i2 = a2 - U$2;
    }
    return i2 = I$3(i2, v$1), i2 < 0 ? v$1 + i2 : i2;
  }
}
function J$4(e2, r2, s2) {
  let a2 = null;
  switch (r2) {
    case y$2.decimal_degrees:
      a2 = w$3(e2, T$5);
      break;
    case y$2.seconds:
      a2 = e2;
      break;
    case y$2.gradians:
      a2 = w$3(e2, S);
      break;
    case y$2.radians:
      a2 = w$3(e2, F$1);
      break;
    default:
      throw new t$7(null, e$8.LogicError, null, { reason: "unexpected evaluation" });
  }
  switch (s2) {
    case y$2.decimal_degrees:
      return A$2(a2, T$5);
    case y$2.seconds:
      return a2;
    case y$2.gradians:
      return A$2(a2, S);
    case y$2.radians:
      return a2 / F$1;
    default:
      throw new t$7(null, e$8.LogicError, null, { reason: "unexpected evaluation" });
  }
}
class K$2 {
  constructor(e2) {
    this._seconds = e2;
  }
  static createFromAngleAndUnits(e2, n2) {
    return new K$2(J$4(e2, n2, y$2.seconds));
  }
  extractAngularUnits(e2) {
    return J$4(this._seconds, y$2.seconds, Y$4(e2));
  }
  static createFromDegreesMinutesSeconds(e2, n2, t2) {
    return new K$2(_$3(_$3(w$3(e2, T$5), w$3(n2, M$2)), t2));
  }
}
function Y$4(e2) {
  switch (c$7(e2), e2) {
    case y$2.decimal_degrees:
    case y$2.truncated_degrees:
    case y$2.degrees_minutes_seconds:
      return y$2.decimal_degrees;
    case y$2.gradians:
      return y$2.gradians;
    case y$2.fractional_degree_minutes:
      return y$2.fractional_degree_minutes;
    case y$2.radians:
      return y$2.radians;
    case y$2.seconds:
    case y$2.fractional_minute_seconds:
      return y$2.seconds;
  }
}
class $$2 {
  constructor(e2, n2, t2, r2) {
    this.view = e2, this.angle = n2, this.merdian = t2, this.direction = r2, this._dms = null, this._formattedDms = null;
  }
  static createFromStringAndBearing(e2, n2, t2) {
    return new $$2(e2, n2.getAngle(t2), n2.getMeridian(t2), n2.getDirection(t2));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return this._dms === null && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return this._formattedDms === null && this._calculateDms(), this._formattedDms;
  }
  _calculateDms() {
    let e2 = null, n2 = y$2.truncated_degrees, t2 = 0;
    for (let r2 = 0; r2 < this.view.length; r2++) {
      const s2 = this.view[r2];
      switch (s2) {
        case "m":
          e2 = de$2(this.view, r2, s2), n2 = n2 === y$2.truncated_degrees ? y$2.fractional_degree_minutes : n2, r2 = e2.newpos;
          continue;
        case "s":
          e2 = de$2(this.view, r2, s2), n2 = y$2.fractional_minute_seconds, t2 = t2 < e2.rounding ? e2.rounding : t2, r2 = e2.newpos;
          continue;
        default:
          continue;
      }
    }
    this._dms = B$3.secondsToDMS(this.angle.extractAngularUnits(y$2.seconds)), this._formattedDms = B$3.secondsToDMS(this.angle.extractAngularUnits(y$2.seconds)).format(n2, t2);
  }
}
function ee$4(e2, r2, s2, a2, i2) {
  let o2 = null;
  switch (r2) {
    case y$2.decimal_degrees:
    case y$2.radians:
    case y$2.gradians:
      return o2 = Q$4(G$2(e2.extractAngularUnits(r2), a2), j$1(r2)), P$3(o2.toFixed(a2), "0", s2 + a2 + (a2 > 0 ? 1 : 0));
    case y$2.truncated_degrees:
    case y$2.fractional_degree_minutes:
      return o2 = Q$4(i2.fetchFormattedDms().getField(r2), j$1(r2)), P$3(o2.toFixed(a2), "0", s2 + a2 + (a2 > 0 ? 1 : 0));
    case y$2.fractional_minute_seconds:
      return o2 = Q$4(G$2(i2.fetchDms().getField(r2), a2), j$1(r2)), P$3(o2.toFixed(a2), "0", s2 + a2 + (a2 > 0 ? 1 : 0));
    default:
      throw new t$7(null, e$8.LogicError, null, { reason: "unexpected evaluation" });
  }
}
function ne$4(e2, r2, s2) {
  if (s2 === q$2.quadrant)
    throw new t$7(null, e$8.LogicError, null, { reason: "conversion error" });
  if (r2 === y$2.degrees_minutes_seconds) {
    const n2 = B$3.numberToDms(e2);
    return X$4.createFromAngleAndDirection(K$2.createFromDegreesMinutesSeconds(n2.m_degrees, n2.m_minutes, n2.m_seconds), s2);
  }
  return X$4.createFromAngleAndDirection(K$2.createFromAngleAndUnits(e2, Y$4(r2)), s2);
}
function te$4(e2) {
  switch (re$5(e2)) {
    case 1:
      return { first: H$4.north, second: H$4.east };
    case 2:
      return { first: H$4.south, second: H$4.east };
    case 3:
      return { first: H$4.south, second: H$4.west };
    case 4:
      return { first: H$4.north, second: H$4.west };
  }
  return null;
}
function re$4(e2) {
  switch (e2.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return H$4.north;
    case "E":
    case "EAST":
      return H$4.east;
    case "S":
    case "SOUTH":
      return H$4.south;
    case "W":
    case "WEST":
      return H$4.west;
  }
  return null;
}
function se$3(e2) {
  const r2 = parseFloat(e2);
  if (Z$7(r2)) {
    if (isNaN(r2))
      throw new t$7(null, e$8.LogicError, null, { reason: "invalid conversion" });
    return r2;
  }
  throw new t$7(null, e$8.LogicError, null, { reason: "invalid conversion" });
}
function ae$2(e2, s2, a2) {
  const i2 = a2 === q$2.quadrant;
  let o2 = null, c2 = null, u2 = 0, l2 = 0, d2 = 0;
  if (i2) {
    if (e2.length < 2)
      throw new t$7(null, e$8.LogicError, null, { reason: "conversion error" });
    d2 = 1;
    const s3 = te$4(K$3(e2[e2.length - 1]));
    if (s3 ? (o2 = s3.first, c2 = s3.second) : (u2 = 1, o2 = re$4(K$3(e2[0])), c2 = re$4(K$3(e2[e2.length - 1]))), o2 === null || c2 === null)
      throw new t$7(null, e$8.LogicError, null, { reason: "invalid conversion" });
  }
  switch (s2) {
    case y$2.decimal_degrees:
    case y$2.radians:
    case y$2.gradians:
      if (e2.length === 0)
        throw new t$7(null, e$8.LogicError, null, { reason: "invalid conversion" });
      return i2 ? X$4.createFromAngleMeridianAndDirection(K$2.createFromAngleAndUnits(se$3(e2[u2]), Y$4(s2)), o2, c2) : X$4.createFromAngleAndDirection(K$2.createFromAngleAndUnits(se$3(e2[u2]), Y$4(s2)), a2);
    case y$2.degrees_minutes_seconds:
      if (l2 = e2.length - d2 - u2, l2 === 3) {
        const n2 = K$2.createFromDegreesMinutesSeconds(se$3(e2[u2]), se$3(e2[u2 + 1]), se$3(e2[u2 + 2]));
        return i2 ? X$4.createFromAngleMeridianAndDirection(n2, o2, c2) : X$4.createFromAngleAndDirection(n2, a2);
      }
      if (l2 === 1) {
        const n2 = se$3(e2[u2]), t2 = B$3.numberToDms(n2), r2 = K$2.createFromDegreesMinutesSeconds(t2.m_degrees, t2.m_minutes, t2.m_seconds);
        return i2 ? X$4.createFromAngleMeridianAndDirection(r2, o2, c2) : X$4.createFromAngleAndDirection(r2, a2);
      }
  }
  throw new t$7(null, e$8.LogicError, null, { reason: "invalid conversion" });
}
function ie$3(e2) {
  const n2 = [" ", "-", "/", "'", '"', "\\", "^", z$3, x$3, "	", "\r", "\n", "*"];
  let t2 = "";
  for (let r2 = 0; r2 < e2.length; r2++) {
    const s2 = e2.charAt(r2);
    n2.includes(s2) ? t2 += "RRSPLITRRSPLITRR" : t2 += s2;
  }
  return t2.split("RRSPLITRRSPLITRR").filter((e3) => e3 !== "");
}
function oe$3(e2, r2, u2) {
  if (Z$7(e2))
    return ne$4(re$5(e2), r2, u2);
  if (w$6(e2))
    return ae$2(ie$3(e2), r2, u2);
  if (Y$5(e2))
    return ae$2(e2, r2, u2);
  if (E$3(e2))
    return ae$2(e2.toArray(), r2, u2);
  throw new t$7(null, e$8.LogicError, null, { reason: "conversion error" });
}
function ce$2(e2, r2, s2) {
  const a2 = Y$4(s2);
  if (a2 && s2 !== y$2.degrees_minutes_seconds) {
    return e2.getAngle(r2).extractAngularUnits(a2);
  }
  throw new t$7(null, e$8.LogicError, null, { reason: "conversion error" });
}
function ue$2(e2, n2, t2) {
  const r2 = e2.getAngle(n2);
  if (n2 === q$2.quadrant && t2 === y$2.degrees_minutes_seconds) {
    const t3 = B$3.secondsToDMS(r2.extractAngularUnits(y$2.seconds));
    return [C$2(e2.getMeridian(n2), "SHORT"), t3.m_degrees, t3.m_minutes, t3.m_seconds, C$2(e2.getDirection(n2), "SHORT")];
  }
  if (t2 === y$2.degrees_minutes_seconds) {
    const e3 = B$3.secondsToDMS(r2.extractAngularUnits(y$2.seconds));
    return [e3.m_degrees, e3.m_minutes, e3.m_seconds];
  }
  return n2 === q$2.quadrant ? [C$2(e2.getMeridian(n2), "SHORT"), r2.extractAngularUnits(t2), C$2(e2.getDirection(n2), "SHORT")] : [r2.extractAngularUnits(t2)];
}
function le$2(e2, r2) {
  let s2 = "";
  switch (e2) {
    case y$2.decimal_degrees:
      s2 = r2 === q$2.quadrant ? "DD.DD" + z$3 : "DDD.DD" + z$3;
      break;
    case y$2.degrees_minutes_seconds:
      s2 = r2 === q$2.quadrant ? "dd" + z$3 + ` mm' ss"` : "ddd" + z$3 + ` mm' ss.ss"`;
      break;
    case y$2.radians:
      s2 = "R.RR";
      break;
    case y$2.gradians:
      s2 = "GGG.GG" + x$3;
      break;
    default:
      throw new t$7(null, e$8.LogicError, null, { reason: "conversion error" });
  }
  return r2 === q$2.quadrant && (s2 = "p " + s2 + " b"), s2;
}
function de$2(e2, n2, t2) {
  const r2 = { padding: 0, rounding: 0, newpos: n2 };
  let s2 = false;
  for (; n2 < e2.length; ) {
    const a2 = e2[n2];
    if (a2 === t2)
      s2 ? r2.rounding++ : r2.padding++, n2++;
    else {
      if (a2 !== ".")
        break;
      s2 = true, n2++;
    }
  }
  return r2.newpos = n2 - 1, r2;
}
function he$2(e2, n2, t2) {
  const r2 = { escaped: "", newpos: n2 };
  for (n2++; n2 < e2.length; ) {
    const t3 = e2[n2];
    if (n2++, t3 === "]")
      break;
    r2.escaped += t3;
  }
  return r2.newpos = n2 - 1, r2;
}
function me$2(e2, n2, t2) {
  let r2 = "", s2 = null, a2 = null;
  const i2 = $$2.createFromStringAndBearing(n2, e2, t2), o2 = { D: y$2.decimal_degrees, d: y$2.truncated_degrees, m: y$2.fractional_degree_minutes, s: y$2.fractional_minute_seconds, R: y$2.radians, G: y$2.gradians };
  for (let c2 = 0; c2 < n2.length; c2++) {
    const u2 = n2[c2];
    switch (u2) {
      case "[":
        s2 = he$2(n2, c2), r2 += s2.escaped, c2 = s2.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        s2 = de$2(n2, c2, u2), a2 = e2.getAngle(t2), r2 += ee$4(a2, o2[u2], s2.padding, s2.rounding, i2), c2 = s2.newpos;
        continue;
      case "P":
      case "p":
        r2 += C$2(i2.fetchMeridian(), u2 === "p" ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r2 += C$2(i2.fetchDirection(), u2 === "b" ? "SHORT" : "LONG");
        continue;
      default:
        r2 += u2;
    }
  }
  return r2;
}
function ge$2(s2, a2, i2) {
  if (!(a2 instanceof J$5))
    throw new t$7(null, e$8.InvalidParameter, null);
  if (a2.hasField("directionType") === false)
    throw new t$7(null, e$8.LogicError, null, { reason: "missing directionType" });
  if (a2.hasField("angleType") === false)
    throw new t$7(null, e$8.LogicError, null, { reason: "missing angleType" });
  const o2 = W$5(O$2(a2.field("directiontype"))), c2 = oe$3(s2, Z$4(O$2(a2.field("angletype"))), o2);
  if (!(i2 instanceof J$5))
    throw new t$7(null, e$8.InvalidParameter, null);
  if (i2.hasField("directionType") === false)
    throw new t$7(null, e$8.LogicError, null, { reason: "missing directionType" });
  if (i2.hasField("outputType") === false)
    throw new t$7(null, e$8.LogicError, null, { reason: "missing angleType" });
  const u2 = W$5(O$2(i2.field("directiontype"))), l2 = i2.hasField("angleType") ? Z$4(O$2(i2.field("angletype"))) : null, d2 = O$2(i2.field("outputType")).toUpperCase().trim();
  if (!u2 || !d2)
    throw new t$7(null, e$8.LogicError, null, { reason: "conversion error" });
  if (!(l2 || d2 === "TEXT" && i2.hasField("format")))
    throw new t$7(null, e$8.LogicError, null, { reason: "invalid unit" });
  switch (d2) {
    case "VALUE":
      return u2 === q$2.quadrant || l2 === y$2.degrees_minutes_seconds ? ue$2(c2, u2, l2) : ce$2(c2, u2, l2);
    case "TEXT": {
      let e2 = "";
      return i2.hasField("format") && (e2 = K$3(i2.field("format"))), e2 !== null && e2 !== "" || (e2 = le$2(l2, u2)), me$2(c2, e2, u2);
    }
    default:
      throw new t$7(null, e$8.InvalidParameter, null);
  }
}
const t$2 = 2654435761, s$4 = 2246822519, n$1 = 3266489917, e$3 = 668265263, r$2 = 374761393;
function h$1(t2) {
  const s2 = [];
  for (let n2 = 0, e2 = t2.length; n2 < e2; n2++) {
    let e3 = t2.charCodeAt(n2);
    e3 < 128 ? s2.push(e3) : e3 < 2048 ? s2.push(192 | e3 >> 6, 128 | 63 & e3) : e3 < 55296 || e3 >= 57344 ? s2.push(224 | e3 >> 12, 128 | e3 >> 6 & 63, 128 | 63 & e3) : (n2++, e3 = 65536 + ((1023 & e3) << 10 | 1023 & t2.charCodeAt(n2)), s2.push(240 | e3 >> 18, 128 | e3 >> 12 & 63, 128 | e3 >> 6 & 63, 128 | 63 & e3));
  }
  return new Uint8Array(s2);
}
class i$2 {
  constructor(t2) {
    this._seed = t2, this._totallen = 0, this._bufs = [], this.init();
  }
  init() {
    return this._bufs = [], this._totallen = 0, this;
  }
  updateFloatArray(t2) {
    const s2 = [];
    for (const n2 of t2)
      isNaN(n2) ? s2.push("NaN") : n2 === 1 / 0 ? s2.push("Infinity") : n2 === -1 / 0 ? s2.push("-Infinity") : n2 === 0 ? s2.push("0") : s2.push(n2.toString(16));
    this.update(h$1(s2.join("")));
  }
  updateIntArray(t2) {
    const s2 = Int32Array.from(t2);
    this.update(new Uint8Array(s2.buffer));
  }
  updateUint8Array(t2) {
    this.update(Uint8Array.from(t2));
  }
  updateWithString(t2) {
    return this.update(h$1(t2));
  }
  update(t2) {
    return this._bufs.push(t2), this._totallen += t2.length, this;
  }
  digest() {
    const t2 = new Uint8Array(this._totallen);
    let s2 = 0;
    for (const n2 of this._bufs)
      t2.set(n2, s2), s2 += n2.length;
    return this.init(), this._xxHash32(t2, this._seed);
  }
  _xxHash32(h2, i2 = 0) {
    const o2 = h2;
    let u2 = i2 + r$2 & 4294967295, a2 = 0;
    if (o2.length >= 16) {
      const n2 = [i2 + t$2 + s$4 & 4294967295, i2 + s$4 & 4294967295, i2 + 0 & 4294967295, i2 - t$2 & 4294967295], e2 = h2, r2 = e2.length - 16;
      let o3 = 0;
      for (a2 = 0; (4294967280 & a2) <= r2; a2 += 4) {
        const r3 = a2, h3 = e2[r3 + 0] + (e2[r3 + 1] << 8), i3 = e2[r3 + 2] + (e2[r3 + 3] << 8), u3 = h3 * s$4 + (i3 * s$4 << 16);
        let l3 = n2[o3] + u3 & 4294967295;
        l3 = l3 << 13 | l3 >>> 19;
        const f2 = 65535 & l3, p2 = l3 >>> 16;
        n2[o3] = f2 * t$2 + (p2 * t$2 << 16) & 4294967295, o3 = o3 + 1 & 3;
      }
      u2 = (n2[0] << 1 | n2[0] >>> 31) + (n2[1] << 7 | n2[1] >>> 25) + (n2[2] << 12 | n2[2] >>> 20) + (n2[3] << 18 | n2[3] >>> 14) & 4294967295;
    }
    u2 = u2 + h2.length & 4294967295;
    const l2 = h2.length - 4;
    for (; a2 <= l2; a2 += 4) {
      const t2 = a2, s2 = o2[t2 + 0] + (o2[t2 + 1] << 8), r2 = o2[t2 + 2] + (o2[t2 + 3] << 8);
      u2 = u2 + (s2 * n$1 + (r2 * n$1 << 16)) & 4294967295, u2 = u2 << 17 | u2 >>> 15, u2 = (65535 & u2) * e$3 + ((u2 >>> 16) * e$3 << 16) & 4294967295;
    }
    for (; a2 < o2.length; ++a2) {
      u2 += o2[a2] * r$2, u2 = u2 << 11 | u2 >>> 21, u2 = (65535 & u2) * t$2 + ((u2 >>> 16) * t$2 << 16) & 4294967295;
    }
    return u2 ^= u2 >>> 15, u2 = ((65535 & u2) * s$4 & 4294967295) + ((u2 >>> 16) * s$4 << 16), u2 ^= u2 >>> 13, u2 = ((65535 & u2) * n$1 & 4294967295) + ((u2 >>> 16) * n$1 << 16), u2 ^= u2 >>> 16, u2 < 0 ? u2 + 4294967296 : u2;
  }
}
function D$3(t2, e2) {
  if (!t2 || !e2)
    return t2 === e2;
  if (t2.x === e2.x && t2.y === e2.y) {
    if (t2.hasZ) {
      if (t2.z !== e2.z)
        return false;
    } else if (e2.hasZ)
      return false;
    if (t2.hasM) {
      if (t2.m !== e2.m)
        return false;
    } else if (e2.hasM)
      return false;
    return true;
  }
  return false;
}
function W$4(o2, i2, u2) {
  if (o2 !== null)
    if (Y$5(o2)) {
      if (i2.updateUint8Array([61]), u2.map.has(o2)) {
        const t2 = u2.map.get(o2);
        i2.updateIntArray([61237541 ^ t2]);
      } else {
        u2.map.set(o2, u2.currentLength++);
        for (const t2 of o2)
          W$4(t2, i2, u2);
        u2.map.delete(o2), u2.currentLength--;
      }
      i2.updateUint8Array([199]);
    } else if (E$3(o2)) {
      if (i2.updateUint8Array([61]), u2.map.has(o2)) {
        const t2 = u2.map.get(o2);
        i2.updateIntArray([61237541 ^ t2]);
      } else {
        u2.map.set(o2, u2.currentLength++);
        for (const t2 of o2.toArray())
          W$4(t2, i2, u2);
        u2.map.delete(o2), u2.currentLength--;
      }
      i2.updateUint8Array([199]);
    } else {
      if (z$6(o2))
        return i2.updateIntArray([o2.getTime()]), void i2.updateUint8Array([241]);
      if (w$6(o2))
        return i2.updateIntArray([o2.length]), i2.updateWithString(o2), void i2.updateUint8Array([41]);
      if (_$4(o2))
        i2.updateUint8Array([o2 === true ? 1 : 0, 113]);
      else {
        if (Z$7(o2))
          return i2.updateFloatArray([o2]), void i2.updateUint8Array([173]);
        if (o2 instanceof e$4)
          throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
        if (o2 instanceof t$3)
          throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
        if (!(o2 instanceof J$5)) {
          if (J$6(o2))
            throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
          if (o2 instanceof w$7)
            return i2.updateIntArray([3833836621]), i2.updateIntArray([0]), i2.updateFloatArray([o2.x]), i2.updateIntArray([1]), i2.updateFloatArray([o2.y]), o2.hasZ && (i2.updateIntArray([2]), i2.updateFloatArray([o2.z])), o2.hasM && (i2.updateIntArray([3]), i2.updateFloatArray([o2.m])), i2.updateIntArray([3765347959]), void W$4(o2.spatialReference.wkid, i2, u2);
          if (o2 instanceof v$4) {
            i2.updateIntArray([1266616829]);
            for (let t2 = 0; t2 < o2.rings.length; t2++) {
              const e2 = o2.rings[t2], r2 = [];
              let n2 = null, a2 = null;
              for (let i3 = 0; i3 < e2.length; i3++) {
                const u3 = o2.getPoint(t2, i3);
                if (i3 === 0)
                  n2 = u3;
                else if (D$3(a2, u3))
                  continue;
                a2 = u3, i3 === e2.length - 1 && D$3(n2, u3) || r2.push(u3);
              }
              i2.updateIntArray([1397116793, r2.length]);
              for (let t3 = 0; t3 < r2.length; t3++) {
                const e3 = r2[t3];
                i2.updateIntArray([3962308117, t3]), W$4(e3, i2, u2), i2.updateIntArray([2716288009]);
              }
              i2.updateIntArray([2278822459]);
            }
            return i2.updateIntArray([3878477243]), void W$4(o2.spatialReference.wkid, i2, u2);
          }
          if (o2 instanceof m$7) {
            i2.updateIntArray([4106883559]);
            for (let t2 = 0; t2 < o2.paths.length; t2++) {
              const e2 = o2.paths[t2];
              i2.updateIntArray([1397116793, e2.length]);
              for (let r2 = 0; r2 < e2.length; r2++)
                i2.updateIntArray([3962308117, r2]), W$4(o2.getPoint(t2, r2), i2, u2), i2.updateIntArray([2716288009]);
              i2.updateIntArray([2278822459]);
            }
            return i2.updateIntArray([2568784753]), void W$4(o2.spatialReference.wkid, i2, u2);
          }
          if (o2 instanceof u$7) {
            i2.updateIntArray([588535921, o2.points.length]);
            for (let t2 = 0; t2 < o2.points.length; t2++) {
              const e2 = o2.getPoint(t2);
              i2.updateIntArray([t2]), W$4(e2, i2, u2);
            }
            return i2.updateIntArray([1700171621]), void W$4(o2.spatialReference.wkid, i2, u2);
          }
          if (o2 instanceof w$8)
            return i2.updateIntArray([3483648373]), i2.updateIntArray([0]), i2.updateFloatArray([o2.xmax]), i2.updateIntArray([1]), i2.updateFloatArray([o2.xmin]), i2.updateIntArray([2]), i2.updateFloatArray([o2.ymax]), i2.updateIntArray([3]), i2.updateFloatArray([o2.ymin]), o2.hasZ && (i2.updateIntArray([4]), i2.updateFloatArray([o2.zmax]), i2.updateIntArray([5]), i2.updateFloatArray([o2.zmin])), o2.hasM && (i2.updateIntArray([6]), i2.updateFloatArray([o2.mmax]), i2.updateIntArray([7]), i2.updateFloatArray([o2.mmin])), i2.updateIntArray([3622027469]), void W$4(o2.spatialReference.wkid, i2, u2);
          if (o2 instanceof k$4)
            return i2.updateIntArray([14]), o2.wkid !== void 0 && o2.wkid !== null && i2.updateIntArray([o2.wkid]), void (o2.wkt && i2.updateWithString(o2.wkt));
          if (F$3(o2))
            throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
          if (P$5(o2))
            throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
          if (G$3(o2))
            throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
          if (o2 === k$3)
            throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
          throw new t$7(u2.context, e$8.UnsupportedHashType, u2.node);
        }
        if (i2.updateUint8Array([223]), u2.map.has(o2)) {
          const t2 = u2.map.get(o2);
          i2.updateIntArray([61237541 ^ t2]);
        } else {
          u2.map.set(o2, u2.currentLength++);
          for (const t2 of o2.keys()) {
            i2.updateIntArray([t2.length]), i2.updateWithString(t2), i2.updateUint8Array([251]);
            W$4(o2.field(t2), i2, u2), i2.updateUint8Array([239]);
          }
          u2.map.delete(o2), u2.currentLength--;
        }
        i2.updateUint8Array([73]);
      }
    }
  else
    i2.updateUint8Array([0, 139]);
}
function B$2(e2, b2) {
  e2.portal = function(e3, r2) {
    return b2(e3, r2, (n2, a2, u2) => (V$5(u2, 1, 1, e3, r2), new t$3(K$3(u2[0]))));
  }, e2.typeof = function(t2, e3) {
    return b2(t2, e3, (r2, i2, s2) => {
      V$5(s2, 1, 1, t2, e3);
      const p2 = O$4(s2[0]);
      if (p2 === "Unrecognised Type")
        throw new t$7(t2, e$8.UnrecognisedType, e3);
      return p2;
    });
  }, e2.trim = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => (V$5(a2, 1, 1, t2, e3), K$3(a2[0]).trim()));
  }, e2.tohex = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 1, 1, t2, e3);
      const i2 = re$5(a2[0]);
      return isNaN(i2) ? i2 : i2.toString(16);
    });
  }, e2.upper = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => (V$5(a2, 1, 1, t2, e3), K$3(a2[0]).toUpperCase()));
  }, e2.proper = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 1, 2, t2, e3);
      let u2 = 1;
      a2.length === 2 && K$3(a2[1]).toLowerCase() === "firstword" && (u2 = 2);
      const s2 = /\s/, p2 = K$3(a2[0]);
      let d2 = "", c2 = true;
      for (let t3 = 0; t3 < p2.length; t3++) {
        let e4 = p2[t3];
        if (s2.test(e4))
          u2 === 1 && (c2 = true);
        else {
          e4.toUpperCase() !== e4.toLowerCase() && (c2 ? (e4 = e4.toUpperCase(), c2 = false) : e4 = e4.toLowerCase());
        }
        d2 += e4;
      }
      return d2;
    });
  }, e2.lower = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => (V$5(a2, 1, 1, t2, e3), K$3(a2[0]).toLowerCase()));
  }, e2.guid = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      if (V$5(a2, 0, 1, t2, e3), a2.length > 0)
        switch (K$3(a2[0]).toLowerCase()) {
          case "digits":
            return U$3().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
          case "digits-hyphen":
            return U$3();
          case "digits-hyphen-braces":
            return "{" + U$3() + "}";
          case "digits-hyphen-parentheses":
            return "(" + U$3() + ")";
        }
      return "{" + U$3() + "}";
    });
  }, e2.standardizeguid = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 2, 2, t2, e3);
      let u2 = K$3(a2[0]);
      if (u2 === "" || u2 === null)
        return "";
      const s2 = /^(\{|\()?(?<partA>[0-9a-z]{8})(\-?)(?<partB>[0-9a-z]{4})(\-?)(?<partC>[0-9a-z]{4})(\-?)(?<partD>[0-9a-z]{4})(\-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(u2);
      if (!s2)
        return "";
      const p2 = s2.groups;
      switch (u2 = p2.partA + "-" + p2.partB + "-" + p2.partC + "-" + p2.partD + "-" + p2.partE, K$3(a2[1]).toLowerCase()) {
        case "digits":
          return u2.replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return u2;
        case "digits-hyphen-braces":
          return "{" + u2 + "}";
        case "digits-hyphen-parentheses":
          return "(" + u2 + ")";
      }
      return "{" + u2 + "}";
    });
  }, e2.console = function(t2, e3) {
    return b2(t2, e3, (e4, r2, n2) => (n2.length === 0 || (n2.length === 1 ? t2.console(K$3(n2[0])) : t2.console(K$3(n2))), k$3));
  }, e2.mid = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 2, 3, t2, e3);
      let u2 = re$5(a2[1]);
      if (isNaN(u2))
        return "";
      if (u2 < 0 && (u2 = 0), a2.length === 2)
        return K$3(a2[0]).substr(u2);
      let p2 = re$5(a2[2]);
      return isNaN(p2) ? "" : (p2 < 0 && (p2 = 0), K$3(a2[0]).substr(u2, p2));
    });
  }, e2.find = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 2, 3, t2, e3);
      let u2 = 0;
      if (a2.length > 2) {
        if (u2 = re$5(v$2(a2[2], 0)), isNaN(u2))
          return -1;
        u2 < 0 && (u2 = 0);
      }
      return K$3(a2[1]).indexOf(K$3(a2[0]), u2);
    });
  }, e2.left = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 2, 2, t2, e3);
      let u2 = re$5(a2[1]);
      return isNaN(u2) ? "" : (u2 < 0 && (u2 = 0), K$3(a2[0]).substr(0, u2));
    });
  }, e2.right = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 2, 2, t2, e3);
      let u2 = re$5(a2[1]);
      return isNaN(u2) ? "" : (u2 < 0 && (u2 = 0), K$3(a2[0]).substr(-1 * u2, u2));
    });
  }, e2.split = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      let u2;
      V$5(a2, 2, 4, t2, e3);
      let p2 = re$5(v$2(a2[2], -1));
      const d2 = le$3(v$2(a2[3], false));
      if (p2 === -1 || p2 === null || d2 === true ? u2 = K$3(a2[0]).split(K$3(a2[1])) : (isNaN(p2) && (p2 = -1), p2 < -1 && (p2 = -1), u2 = K$3(a2[0]).split(K$3(a2[1]), p2)), d2 === false)
        return u2;
      const f2 = [];
      for (let t3 = 0; t3 < u2.length && !(p2 !== -1 && f2.length >= p2); t3++)
        u2[t3] !== "" && u2[t3] !== void 0 && f2.push(u2[t3]);
      return f2;
    });
  }, e2.text = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => (V$5(a2, 1, 2, t2, e3), te$5(a2[0], a2[1])));
  }, e2.concatenate = function(t2, e3) {
    return b2(t2, e3, (t3, e4, r2) => {
      const n2 = [];
      if (r2.length < 1)
        return "";
      if (Y$5(r2[0])) {
        const t4 = v$2(r2[2], "");
        for (let e5 = 0; e5 < r2[0].length; e5++)
          n2[e5] = te$5(r2[0][e5], t4);
        return r2.length > 1 ? n2.join(r2[1]) : n2.join("");
      }
      if (E$3(r2[0])) {
        const t4 = v$2(r2[2], "");
        for (let e5 = 0; e5 < r2[0].length(); e5++)
          n2[e5] = te$5(r2[0].get(e5), t4);
        return r2.length > 1 ? n2.join(r2[1]) : n2.join("");
      }
      for (let a2 = 0; a2 < r2.length; a2++)
        n2[a2] = te$5(r2[a2]);
      return n2.join("");
    });
  }, e2.reverse = function(t2, e3) {
    return b2(t2, e3, (r2, i2, u2) => {
      if (V$5(u2, 1, 1, t2, e3), Y$5(u2[0])) {
        const t3 = u2[0].slice(0);
        return t3.reverse(), t3;
      }
      if (E$3(u2[0])) {
        const t3 = u2[0].toArray().slice(0);
        return t3.reverse(), t3;
      }
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.replace = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 3, 4, t2, e3);
      const u2 = K$3(a2[0]), s2 = K$3(a2[1]), p2 = K$3(a2[2]);
      return a2.length !== 4 || le$3(a2[3]) ? R$2(u2, s2, p2) : u2.replace(s2, p2);
    });
  }, e2.schema = function(t2, e3) {
    return b2(t2, e3, (o2, i2, u2) => {
      if (J$6(u2[0])) {
        const t3 = Ie$2(u2[0]);
        return t3 ? J$5.convertObjectToArcadeDictionary(t3) : null;
      }
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.subtypes = function(t2, e3) {
    return b2(t2, e3, (i2, u2, s2) => {
      if (V$5(s2, 1, 1, t2, e3), J$6(s2[0])) {
        const t3 = Re$1(s2[0]);
        return t3 ? J$5.convertObjectToArcadeDictionary(t3) : null;
      }
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.subtypecode = function(t2, e3) {
    return b2(t2, e3, (r2, i2, u2) => {
      if (V$5(u2, 1, 1, t2, e3), J$6(u2[0])) {
        const t3 = Re$1(u2[0]);
        if (!t3)
          return null;
        if (t3.subtypeField && u2[0].hasField(t3.subtypeField)) {
          const e4 = u2[0].field(t3.subtypeField);
          for (const r3 of t3.subtypes)
            if (r3.code === e4)
              return r3.code;
          return null;
        }
        return null;
      }
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.subtypename = function(t2, e3) {
    return b2(t2, e3, (r2, i2, u2) => {
      if (V$5(u2, 1, 1, t2, e3), J$6(u2[0])) {
        const t3 = Re$1(u2[0]);
        if (!t3)
          return "";
        if (t3.subtypeField && u2[0].hasField(t3.subtypeField)) {
          const e4 = u2[0].field(t3.subtypeField);
          for (const r3 of t3.subtypes)
            if (r3.code === e4)
              return r3.name;
          return "";
        }
        return "";
      }
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.gdbversion = function(t2, e3) {
    return b2(t2, e3, (r2, i2, u2) => {
      if (V$5(u2, 1, 1, t2, e3), J$6(u2[0]))
        return u2[0].gdbVersion();
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.domain = function(t2, e3) {
    return b2(t2, e3, (u2, p2, d2) => {
      if (V$5(d2, 2, 3, t2, e3), J$6(d2[0])) {
        const t3 = Ae$2(d2[0], K$3(d2[1]), d2[2] === void 0 ? void 0 : re$5(d2[2]));
        return t3 && t3.domain ? t3.domain.type === "coded-value" || t3.domain.type === "codedValue" ? J$5.convertObjectToArcadeDictionary({ type: "codedValue", name: t3.domain.name, dataType: P$6[t3.field.type], codedValues: t3.domain.codedValues.map((t4) => ({ name: t4.name, code: t4.code })) }) : J$5.convertObjectToArcadeDictionary({ type: "range", name: t3.domain.name, dataType: P$6[t3.field.type], min: t3.domain.min, max: t3.domain.max }) : null;
      }
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.domainname = function(t2, e3) {
    return b2(t2, e3, (r2, u2, p2) => {
      if (V$5(p2, 2, 4, t2, e3), J$6(p2[0]))
        return Fe$2(p2[0], K$3(p2[1]), p2[2], p2[3] === void 0 ? void 0 : re$5(p2[3]));
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.domaincode = function(t2, e3) {
    return b2(t2, e3, (r2, u2, p2) => {
      if (V$5(p2, 2, 4, t2, e3), J$6(p2[0]))
        return Ce$2(p2[0], K$3(p2[1]), p2[2], p2[3] === void 0 ? void 0 : re$5(p2[3]));
      throw new t$7(t2, e$8.InvalidParameter, e3);
    });
  }, e2.urlencode = function(t2, e3) {
    return b2(t2, e3, (n2, a2, u2) => {
      if (V$5(u2, 1, 1, t2, e3), u2[0] === null)
        return "";
      if (u2[0] instanceof J$5) {
        let t3 = "";
        for (const e4 of u2[0].keys()) {
          const r2 = u2[0].field(e4);
          t3 !== "" && (t3 += "&"), t3 += r2 === null ? encodeURIComponent(e4) + "=" : encodeURIComponent(e4) + "=" + encodeURIComponent(r2);
        }
        return t3;
      }
      return encodeURIComponent(K$3(u2[0]));
    });
  }, e2.hash = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => {
      V$5(a2, 1, 1, t2, e3);
      const i2 = new i$2(0);
      return W$4(a2[0], i2, { context: t2, node: e3, map: new Map(), currentLength: 0 }), i2.digest();
    });
  }, e2.convertdirection = function(t2, e3) {
    return b2(t2, e3, (r2, n2, a2) => (V$5(a2, 3, 3, t2, e3), ge$2(a2[0], a2[1], a2[2])));
  }, e2.fromjson = function(t2, e3) {
    return b2(t2, e3, (u2, s2, p2) => {
      if (V$5(p2, 1, 1, t2, e3), w$6(p2[0]) === false)
        throw new t$7(t2, e$8.InvalidParameter, e3);
      return J$5.convertJsonToArcade(JSON.parse(K$3(p2[0])));
    });
  }, e2.expects = function(t2, e3) {
    return b2(t2, e3, (r2, o2, i2) => {
      if (i2.length < 1)
        throw new t$7(t2, e$8.WrongNumberOfParameters, e3);
      return k$3;
    });
  }, e2.tocharcode = function(t2, e3) {
    return b2(t2, e3, (r2, u2, p2) => {
      V$5(p2, 1, 2, t2, e3);
      const d2 = re$5(v$2(p2[1], 0)), l2 = K$3(p2[0]);
      if (l2.length === 0 && p2.length === 1)
        return null;
      if (l2.length <= d2 || d2 < 0)
        throw new t$7(t2, e$8.OutOfBounds, e3);
      return l2.charCodeAt(d2);
    });
  }, e2.tocodepoint = function(t2, e3) {
    return b2(t2, e3, (r2, u2, p2) => {
      V$5(p2, 1, 2, t2, e3);
      const d2 = re$5(v$2(p2[1], 0)), l2 = K$3(p2[0]);
      if (l2.length === 0 && p2.length === 1)
        return null;
      if (l2.length <= d2 || d2 < 0)
        throw new t$7(t2, e$8.OutOfBounds, e3);
      return l2.codePointAt(d2);
    });
  }, e2.fromcharcode = function(t2, e3) {
    return b2(t2, e3, (r2, o2, i2) => {
      if (i2.length < 1)
        throw new t$7(t2, e$8.WrongNumberOfParameters, e3);
      const u2 = i2.map((t3) => Math.trunc(re$5(t3))).filter((t3) => t3 >= 0 && t3 <= 65535);
      return u2.length === 0 ? null : String.fromCharCode.apply(null, u2);
    });
  }, e2.fromcodepoint = function(t2, e3) {
    return b2(t2, e3, (r2, o2, i2) => {
      if (i2.length < 1)
        throw new t$7(t2, e$8.WrongNumberOfParameters, e3);
      let u2;
      try {
        u2 = i2.map((t3) => Math.trunc(re$5(t3))).filter((t3) => t3 <= 1114111 && t3 >>> 0 === t3);
      } catch (p2) {
        return null;
      }
      return u2.length === 0 ? null : String.fromCodePoint.apply(null, u2);
    });
  };
}
class s$3 {
  constructor(s2, t2) {
    this._moduleSingletons = s2, this._syntaxModules = t2;
  }
  loadLibrary(s2) {
    if (this._syntaxModules == null)
      return null;
    const t2 = this._syntaxModules[s2.toLowerCase()];
    return t2 ? { syntax: t2.script, uri: t2.uri } : null;
  }
}
class T$4 extends r$6 {
  constructor(e2, n2) {
    super(), this.paramCount = n2, this.fn = e2;
  }
  createFunction(e2) {
    return (...n2) => {
      if (n2.length !== this.paramCount)
        throw new t$7(e2, e$8.WrongNumberOfParameters, null);
      return this.fn(...n2);
    };
  }
  call(e2, n2) {
    return this.fn(...n2.arguments);
  }
  marshalledCall(e2, n2, o2, l2) {
    return l2(e2, n2, (n3, r2, a2) => {
      a2 = a2.map((n4) => !F$3(n4) || n4 instanceof s$b ? n4 : n$5(n4, e2, l2));
      const s2 = this.call(o2, { arguments: a2 });
      return C$5(s2) ? s2.then((e3) => n$5(e3, o2, l2)) : s2;
    });
  }
}
function W$3(e2, n2, t2) {
  try {
    return t2(e2, null, n2.arguments);
  } catch (o2) {
    throw o2;
  }
}
function V$3(e2, n2) {
  try {
    switch (n2.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return ue$1(e2, n2);
      case "VariableDeclaration":
        return ce$1(e2, n2);
      case "BlockStatement":
      case "Program":
        return oe$2(e2, n2);
      case "FunctionDeclaration":
        return ie$2(e2, n2);
      case "ImportDeclaration":
        return re$3(e2, n2);
      case "ExportNamedDeclaration":
        return ae$1(e2, n2);
      case "ReturnStatement":
        return le$1(e2, n2);
      case "IfStatement":
        return te$3(e2, n2);
      case "ExpressionStatement":
        return ee$3(e2, n2);
      case "AssignmentExpression":
        return Z$3(e2, n2);
      case "UpdateExpression":
        return Q$3(e2, n2);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return de$1(e2, n2);
      case "TemplateElement":
        return JSON.stringify(n2.value ? n2.value.cooked : "");
      case "ForStatement":
        return H$3(e2, n2);
      case "ForInStatement":
        return Y$3(e2, n2);
      case "WhileStatement":
        return X$3(e2, n2);
      case "Identifier":
        return ye$1(e2, n2);
      case "MemberExpression":
        return pe$1(e2, n2);
      case "Literal":
        return n2.value === null || n2.value === void 0 ? "null" : JSON.stringify(n2.value);
      case "CallExpression":
        return be$1(e2, n2);
      case "UnaryExpression":
        return me$1(e2, n2);
      case "BinaryExpression":
        return fe$1(e2, n2);
      case "LogicalExpression":
        return he$1(e2, n2);
      case "ArrayExpression":
        return ge$1(e2, n2);
      case "ObjectExpression":
        return J$3(e2, n2);
      case "Property":
        return z$2(e2, n2);
      case "Array":
        throw new s$c(e2, e$8.NeverReach, n2);
      default:
        throw new s$c(e2, e$8.Unrecognised, n2);
    }
  } catch (t2) {
    throw t2;
  }
}
function J$3(e2, n2) {
  let t2 = "lang.dictionary([";
  for (let o2 = 0; o2 < n2.properties.length; o2++) {
    const l2 = n2.properties[o2];
    se$2(l2.key.name);
    o2 > 0 && (t2 += ","), t2 += "lang.strCheck(" + (l2.key.type === "Identifier" ? "'" + l2.key.name + "'" : V$3(e2, l2.key)) + ",'ObjectExpression'),lang.aCheck(" + V$3(e2, l2.value) + ", 'ObjectExpression')";
  }
  return t2 += "])", t2;
}
function z$2(e2, n2) {
  throw new s$c(e2, e$8.NeverReach, n2);
}
function Y$3(e2, n2) {
  const t2 = Fe$1(e2), o2 = Fe$1(e2), l2 = Fe$1(e2);
  let r2 = "var " + t2 + " = " + V$3(e2, n2.right) + ";\n";
  n2.left.type === "VariableDeclaration" && (r2 += V$3(e2, n2.left));
  let a2 = n2.left.type === "VariableDeclaration" ? n2.left.declarations[0].id.name : n2.left.name;
  a2 = a2.toLowerCase(), se$2(a2);
  let s2 = "";
  e2.localScope !== null && (e2.localScope[a2] !== void 0 ? s2 = "lscope['" + a2 + "']" : e2.localScope._SymbolsMap[a2] !== void 0 && (s2 = "lscope['" + e2.localScope._SymbolsMap[a2] + "']"));
  let i2 = "";
  if (s2 === "") {
    if (e2.globalScope[a2] !== void 0)
      s2 = "gscope['" + a2 + "']";
    else if (e2.globalScope._SymbolsMap[a2] !== void 0)
      s2 = "gscope['" + e2.globalScope._SymbolsMap[a2] + "']";
    else if (e2.localScope !== null)
      if (e2.undeclaredGlobalsInFunctions.has(a2))
        s2 = "gscope['" + e2.undeclaredGlobalsInFunctions.get(a2).manglename + "']", i2 = e2.undeclaredGlobalsInFunctions.get(a2).manglename;
      else {
        const t3 = { manglename: Me$1(e2), node: n2.left };
        e2.undeclaredGlobalsInFunctions.set(a2, t3), s2 = "gscope['" + t3.manglename + "']", i2 = t3.manglename;
      }
  }
  return i2 && (r2 += "lang.chkAssig('" + i2 + "',runtimeCtx); \n"), r2 += "if (" + t2 + "===null) {  lastStatement = lc.voidOperation; }\n ", r2 += "else if (lc.isArray(" + t2 + ") || lc.isString(" + t2 + ")) {", r2 += "var " + o2 + "=" + t2 + ".length; \n", r2 += "for(var " + l2 + "=0; " + l2 + "<" + o2 + "; " + l2 + "++) {\n", r2 += s2 + "=" + l2 + ";\n", r2 += V$3(e2, n2.body), r2 += "\n}\n", r2 += " lastStatement = lc.voidOperation; \n", r2 += " \n}\n", r2 += "else if (lc.isImmutableArray(" + t2 + ")) {", r2 += "var " + o2 + "=" + t2 + ".length(); \n", r2 += "for(var " + l2 + "=0; " + l2 + "<" + o2 + "; " + l2 + "++) {\n", r2 += s2 + "=" + l2 + ";\n", r2 += V$3(e2, n2.body), r2 += "\n}\n", r2 += " lastStatement = lc.voidOperation; \n", r2 += " \n}\n", r2 += "else if (( " + t2 + " instanceof lang.Dictionary) || ( " + t2 + " instanceof lang.Feature)) {", r2 += "var " + o2 + "=" + t2 + ".keys(); \n", r2 += "for(var " + l2 + "=0; " + l2 + "<" + o2 + ".length; " + l2 + "++) {\n", r2 += s2 + "=" + o2 + "[" + l2 + "];\n", r2 += V$3(e2, n2.body), r2 += "\n}\n", r2 += " lastStatement = lc.voidOperation; \n", r2 += " \n}\n", e2.isAsync && (r2 += "else if (lc.isFeatureSet(" + t2 + ")) {", r2 += "var " + o2 + "=" + t2 + ".iterator(runtimeCtx.abortSignal); \n", r2 += "for(var " + l2 + "=lang. graphicToFeature( yield " + o2 + ".next()," + t2 + "); " + l2 + "!=null; " + l2 + "=lang. graphicToFeature( yield " + o2 + ".next()," + t2 + ")) {\n", r2 += s2 + "=" + l2 + ";\n", r2 += V$3(e2, n2.body), r2 += "\n}\n", r2 += " lastStatement = lc.voidOperation; \n", r2 += " \n}\n"), r2 += "else { lastStatement = lc.voidOperation; } \n", r2;
}
function H$3(e2, n2) {
  let t2 = "lastStatement = lc.voidOperation; \n";
  n2.init !== null && (t2 += V$3(e2, n2.init) + "; ");
  const o2 = Fe$1(e2), l2 = Fe$1(e2);
  return t2 += "var " + o2 + " = true; ", t2 += "\n do { ", n2.update !== null && (t2 += " if (" + o2 + "===false) {\n " + V$3(e2, n2.update) + "  \n}\n " + o2 + "=false; \n"), n2.test !== null && (t2 += "var " + l2 + " = " + V$3(e2, n2.test) + "; ", t2 += "if (" + l2 + "===false) { break; } else if (" + l2 + "!==true) { lang.error('" + e$8.BooleanConditionRequired + "');   }\n"), t2 += V$3(e2, n2.body), n2.update !== null && (t2 += "\n " + V$3(e2, n2.update)), t2 += "\n" + o2 + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", t2;
}
function Q$3(e2, n2) {
  let t2 = null, o2 = "";
  if (n2.argument.type === "MemberExpression")
    return t2 = V$3(e2, n2.argument.object), n2.argument.computed === true ? o2 = V$3(e2, n2.argument.property) : (o2 = "'" + n2.argument.property.name + "'", se$2(n2.argument.property.name)), "lang.memberupdate(" + t2 + "," + o2 + ",'" + n2.operator + "'," + n2.prefix + ")";
  if (t2 = n2.argument.name.toLowerCase(), se$2(t2), e2.localScope !== null) {
    if (e2.localScope[t2] !== void 0)
      return "lang.update(lscope, '" + t2 + "','" + n2.operator + "'," + n2.prefix + ")";
    if (e2.localScope._SymbolsMap[t2] !== void 0)
      return "lang.update(lscope, '" + e2.localScope._SymbolsMap[t2] + "','" + n2.operator + "'," + n2.prefix + ")";
  }
  if (e2.globalScope[t2] !== void 0)
    return "lang.update(gscope, '" + t2 + "','" + n2.operator + "'," + n2.prefix + ")";
  if (e2.globalScope._SymbolsMap[t2] !== void 0)
    return "lang.update(gscope, '" + e2.globalScope._SymbolsMap[t2] + "','" + n2.operator + "'," + n2.prefix + ")";
  if (e2.localScope !== null) {
    if (e2.undeclaredGlobalsInFunctions.has(t2))
      return "lang.update(gscope,lang.chkAssig( '" + e2.undeclaredGlobalsInFunctions.get(t2).manglename + "',runtimeCtx),'" + n2.operator + "'," + n2.prefix + ")";
    const o3 = { manglename: Me$1(e2), node: n2.argument };
    return e2.undeclaredGlobalsInFunctions.set(t2, o3), "lang.update(gscope, lang.chkAssig('" + o3.manglename + "',runtimeCtx),'" + n2.operator + "'," + n2.prefix + ")";
  }
  throw new t$7(e2, e$8.InvalidIdentifier, n2);
}
function X$3(e2, n2) {
  let t2 = "lastStatement = lc.voidOperation; \n";
  const o2 = Fe$1(e2);
  return t2 += `
  var ${o2} = true;
    do {
      ${o2} = ${V$3(e2, n2.test)};
      if (${o2}==false) {
        break;
      }
      if (${o2}!==true) {
        lang.error('${e$8.BooleanConditionRequired}');
      }
      ${V$3(e2, n2.body)}
    }
    while (${o2} !== false);
    lastStatement = lc.voidOperation;
  `, t2;
}
function Z$3(e2, n2) {
  const t2 = V$3(e2, n2.right);
  let o2 = null, l2 = "";
  if (n2.left.type === "MemberExpression")
    return o2 = V$3(e2, n2.left.object), n2.left.computed === true ? l2 = V$3(e2, n2.left.property) : (l2 = "'" + n2.left.property.name + "'", se$2(n2.left.property.name)), "lang.assignmember(" + o2 + "," + l2 + ",'" + n2.operator + "'," + t2 + ")";
  if (o2 = n2.left.name.toLowerCase(), se$2(o2), e2.localScope !== null) {
    if (e2.localScope[o2] !== void 0)
      return "lscope['" + o2 + "']=lang.assign(" + t2 + ",'" + n2.operator + "', lscope['" + o2 + "'])";
    if (e2.localScope._SymbolsMap[o2] !== void 0)
      return "lscope['" + e2.localScope._SymbolsMap[o2] + "']=lang.assign(" + t2 + ",'" + n2.operator + "', lscope['" + e2.localScope._SymbolsMap[o2] + "'])";
  }
  if (e2.globalScope[o2] !== void 0)
    return "gscope['" + o2 + "']=lang.assign(" + t2 + ",'" + n2.operator + "', gscope['" + o2 + "'])";
  if (e2.globalScope._SymbolsMap[o2] !== void 0)
    return "gscope['" + e2.globalScope._SymbolsMap[o2] + "']=lang.assign(" + t2 + ",'" + n2.operator + "', gscope['" + e2.globalScope._SymbolsMap[o2] + "'])";
  if (e2.localScope !== null) {
    if (e2.undeclaredGlobalsInFunctions.has(o2))
      return "gscope[lang.chkAssig('" + e2.undeclaredGlobalsInFunctions.get(o2).manglename + "',runtimeCtx)]=lang.assign(" + t2 + ",'" + n2.operator + "', gscope['" + e2.undeclaredGlobalsInFunctions.get(o2).manglename + "'])";
    const l3 = { manglename: Me$1(e2), node: n2.argument };
    return e2.undeclaredGlobalsInFunctions.set(o2, l3), "gscope[lang.chkAssig('" + l3.manglename + "',runtimeCtx)]=lang.assign(" + t2 + ",'" + n2.operator + "', gscope['" + l3.manglename + "'])";
  }
  throw new t$7(e2, e$8.InvalidIdentifier, n2);
}
function ee$3(e2, n2) {
  return n2.expression.type === "AssignmentExpression" ? "lastStatement = lc.voidOperation; " + V$3(e2, n2.expression) + "; \n " : (n2.expression.type, "lastStatement = " + V$3(e2, n2.expression) + "; ");
}
function ne$3(e2, n2) {
  return n2.type === "BlockStatement" ? V$3(e2, n2) : n2.type === "ReturnStatement" || n2.type === "BreakStatement" || n2.type === "ContinueStatement" ? V$3(e2, n2) + "; " : n2.type === "UpdateExpression" ? "lastStatement = " + V$3(e2, n2) + "; " : n2.type === "ExpressionStatement" ? V$3(e2, n2) : n2.type === "ObjectExpression" ? "lastStatement = " + V$3(e2, n2) + "; " : V$3(e2, n2) + "; ";
}
function te$3(e2, n2) {
  if (n2.test.type === "AssignmentExpression" || n2.test.type === "UpdateExpression")
    throw new s$c(e2, e$8.BooleanConditionRequired, n2);
  return `if (lang.mustBoolean(${V$3(e2, n2.test)}, runtimeCtx) === true) {
    ${ne$3(e2, n2.consequent)}
  } ` + (n2.alternate !== null ? n2.alternate.type === "IfStatement" ? " else " + te$3(e2, n2.alternate) : ` else {
      ${ne$3(e2, n2.alternate)}
    }
` : " else {\n      lastStatement = lc.voidOperation;\n    }\n");
}
function oe$2(e2, n2) {
  let t2 = "";
  for (let o2 = 0; o2 < n2.body.length; o2++)
    n2.body[o2].type !== "EmptyStatement" && (n2.body[o2].type === "ReturnStatement" || n2.body[o2].type === "BreakStatement" || n2.body[o2].type === "ContinueStatement" ? t2 += V$3(e2, n2.body[o2]) + "; \n" : n2.body[o2].type === "UpdateExpression" || n2.body[o2].type === "ObjectExpression" ? t2 += "lastStatement = " + V$3(e2, n2.body[o2]) + "; \n" : t2 += V$3(e2, n2.body[o2]) + " \n");
  return t2;
}
function le$1(e2, n2) {
  if (n2.argument === null)
    return "return lc.voidOperation";
  return "return " + V$3(e2, n2.argument);
}
function re$3(e2, n2) {
  var _a;
  const t2 = n2.specifiers[0].local.name.toLowerCase();
  se$2(t2);
  const o2 = (_a = e2.libraryResolver) == null ? void 0 : _a.loadLibrary(t2), l2 = Me$1(e2);
  e2.moduleFactory[o2.uri] === void 0 && (e2.moduleFactory[o2.uri] = De(o2.syntax, { interceptor: e2.interceptor, services: e2.services, moduleFactory: e2.moduleFactory, lrucache: e2.lrucache, libraryResolver: e2.libraryResolver, customfunctions: e2.customfunctions, vars: {} }, e2.isAsync)), e2.moduleFactoryMap[l2] = o2.uri;
  let r2 = "";
  if (r2 = e2.isAsync ? "(yield lang.loadModule('" + l2 + "', runtimeCtx) ); " : "lang.loadModule('" + l2 + "', runtimeCtx); ", e2.globalScope[t2] !== void 0)
    return "gscope['" + t2 + "']=" + r2;
  if (e2.globalScope._SymbolsMap[t2] !== void 0)
    return "gscope['" + e2.globalScope._SymbolsMap[t2] + "']=" + r2;
  let a2 = "";
  return e2.undeclaredGlobalsInFunctions.has(t2) ? (a2 = e2.undeclaredGlobalsInFunctions.get(t2).manglename, e2.undeclaredGlobalsInFunctions.delete(t2)) : a2 = Me$1(e2), e2.globalScope._SymbolsMap[t2] = a2, e2.mangleMap[t2] = a2, "gscope[lang.setAssig('" + a2 + "', runtimeCtx)]=" + r2;
}
function ae$1(e2, n2) {
  const t2 = V$3(e2, n2.declaration);
  if (n2.declaration.type === "FunctionDeclaration")
    e2.exports[n2.declaration.id.name.toLowerCase()] = "function";
  else if (n2.declaration.type === "VariableDeclaration")
    for (const o2 of n2.declaration.declarations)
      e2.exports[o2.id.name.toLowerCase()] = "variable";
  return t2;
}
function se$2(e2) {
  if (e2 === "iif")
    throw new c$6();
  if (e2 === "decode")
    throw new c$6();
  if (e2 === "when")
    throw new c$6();
}
function ie$2(e2, n2) {
  const t2 = n2.id.name.toLowerCase();
  se$2(t2);
  let o2 = "", l2 = false;
  e2.globalScope[t2] !== void 0 ? o2 = t2 : e2.globalScope._SymbolsMap[t2] !== void 0 ? o2 = e2.globalScope._SymbolsMap[t2] : e2.undeclaredGlobalsInFunctions.has(t2) ? (o2 = e2.undeclaredGlobalsInFunctions.get(t2).manglename, e2.globalScope._SymbolsMap[t2] = o2, e2.mangleMap[t2] = o2, e2.undeclaredGlobalsInFunctions.delete(t2), l2 = true) : (o2 = Me$1(e2), e2.globalScope._SymbolsMap[t2] = o2, e2.mangleMap[t2] = o2);
  const r2 = { isAsync: e2.isAsync, console: e2.console, exports: e2.exports, undeclaredGlobalsInFunctions: e2.undeclaredGlobalsInFunctions, customfunctions: e2.customfunctions, moduleFactory: e2.moduleFactory, moduleFactoryMap: e2.moduleFactoryMap, libraryResolver: e2.libraryResolver, lrucache: e2.lrucache, interceptor: e2.interceptor, services: e2.services, symbols: e2.symbols, mangleMap: e2.mangleMap, localScope: { _SymbolsMap: {} }, depthCounter: e2.depthCounter, globalScope: e2.globalScope };
  let a2 = "new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
  for (let s2 = 0; s2 < n2.params.length; s2++) {
    const t3 = n2.params[s2].name.toLowerCase();
    se$2(t3);
    const o3 = Me$1(e2);
    r2.localScope._SymbolsMap[t3] = o3, r2.mangleMap[t3] = o3, a2 += "lscope['" + o3 + "']=arguments[" + s2.toString() + "];\n";
  }
  return e2.isAsync === true ? (a2 += "return lang.__awaiter(this, void 0, void 0, function* () {\n", a2 += oe$2(r2, n2.body) + "\n return lastStatement; ", a2 += "});  }", a2 += ", runtimeCtx)," + n2.params.length + ")", a2 += "\n lastStatement = lc.voidOperation; \n") : (a2 += oe$2(r2, n2.body) + "\n return lastStatement; }, runtimeCtx)," + n2.params.length + ")", a2 += "\n lastStatement = lc.voidOperation; \n"), l2 ? "gscope[lang.setAssig('" + o2 + "', runtimeCtx)]=" + a2 : "gscope['" + o2 + "']=" + a2;
}
function ce$1(e2, n2) {
  const t2 = [];
  for (let o2 = 0; o2 < n2.declarations.length; o2++)
    t2.push(V$3(e2, n2.declarations[o2]));
  return t2.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
}
function ue$1(e2, n2) {
  let t2 = n2.init === null ? null : V$3(e2, n2.init);
  t2 === k$3 && (t2 = null);
  const o2 = n2.id.name.toLowerCase();
  if (se$2(o2), e2.localScope !== null) {
    if (e2.localScope[o2] !== void 0)
      return "lscope['" + o2 + "']=" + t2 + "; ";
    if (e2.localScope._SymbolsMap[o2] !== void 0)
      return "lscope['" + e2.localScope._SymbolsMap[o2] + "']=" + t2 + "; ";
    {
      const n3 = Me$1(e2);
      return e2.localScope._SymbolsMap[o2] = n3, e2.mangleMap[o2] = n3, "lscope['" + n3 + "']=" + t2 + "; ";
    }
  }
  if (e2.globalScope[o2] !== void 0)
    return "gscope['" + o2 + "']=" + t2 + "; ";
  if (e2.globalScope._SymbolsMap[o2] !== void 0)
    return "gscope['" + e2.globalScope._SymbolsMap[o2] + "']=" + t2 + "; ";
  if (e2.undeclaredGlobalsInFunctions.has(o2)) {
    const n3 = e2.undeclaredGlobalsInFunctions.get(o2).manglename;
    return e2.globalScope._SymbolsMap[o2] = n3, e2.mangleMap[o2] = n3, e2.undeclaredGlobalsInFunctions.delete(o2), "gscope[lang.setAssig('" + n3 + "', runtimeCtx)]=" + t2 + "; ";
  }
  const l2 = Me$1(e2);
  return e2.globalScope._SymbolsMap[o2] = l2, e2.mangleMap[o2] = l2, "gscope['" + l2 + "']=" + t2 + "; ";
}
function pe$1(e2, n2) {
  try {
    let t2;
    return n2.computed === true ? t2 = V$3(e2, n2.property) : (t2 = "'" + n2.property.name + "'", se$2(n2.property.name)), "lang.member(" + V$3(e2, n2.object) + "," + t2 + ")";
  } catch (t2) {
    throw t2;
  }
}
function me$1(e2, n2) {
  try {
    return "lang.unary(" + V$3(e2, n2.argument) + ",'" + n2.operator + "')";
  } catch (t2) {
    throw t2;
  }
}
function ge$1(e2, n2) {
  try {
    const t2 = [];
    for (let o2 = 0; o2 < n2.elements.length; o2++)
      n2.elements[o2].type === "Literal" ? t2.push(V$3(e2, n2.elements[o2])) : t2.push("lang.aCheck(" + V$3(e2, n2.elements[o2]) + ",'ArrayExpression')");
    return "[" + t2.join(",") + "]";
  } catch (t2) {
    throw t2;
  }
}
function de$1(e2, n2) {
  try {
    const t2 = [];
    let o2 = 0;
    for (const l2 of n2.quasis)
      t2.push(l2.value ? JSON.stringify(l2.value.cooked) : JSON.stringify("")), l2.tail === false && (t2.push(n2.expressions[o2] ? "lang.castString(lang.aCheck(" + V$3(e2, n2.expressions[o2]) + ", 'TemplateLiteral'))" : ""), o2++);
    return "([" + t2.join(",") + "]).join('')";
  } catch (t2) {
    throw t2;
  }
}
function fe$1(e2, n2) {
  try {
    return "lang.binary(" + V$3(e2, n2.left) + "," + V$3(e2, n2.right) + ",'" + n2.operator + "')";
  } catch (t2) {
    throw t2;
  }
}
function he$1(e2, n2) {
  try {
    if (n2.left.type === "AssignmentExpression" || n2.left.type === "UpdateExpression")
      throw new s$c(e2, e$8.LogicalExpressionOnlyBoolean, n2);
    if (n2.right.type === "AssignmentExpression" || n2.right.type === "UpdateExpression")
      throw new s$c(e2, e$8.LogicalExpressionOnlyBoolean, n2);
    if (n2.operator === "&&" || n2.operator === "||")
      return "(lang.logicalCheck(" + V$3(e2, n2.left) + ") " + n2.operator + " lang.logicalCheck(" + V$3(e2, n2.right) + "))";
    throw new s$c(null, e$8.LogicExpressionOrAnd, null);
  } catch (t2) {
    throw t2;
  }
}
function ye$1(e2, n2) {
  try {
    const t2 = n2.name.toLowerCase();
    if (se$2(t2), e2.localScope !== null) {
      if (e2.localScope[t2] !== void 0)
        return "lscope['" + t2 + "']";
      if (e2.localScope._SymbolsMap[t2] !== void 0)
        return "lscope['" + e2.localScope._SymbolsMap[t2] + "']";
    }
    if (e2.globalScope[t2] !== void 0)
      return "gscope['" + t2 + "']";
    if (e2.globalScope._SymbolsMap[t2] !== void 0)
      return "gscope['" + e2.globalScope._SymbolsMap[t2] + "']";
    if (e2.localScope !== null) {
      if (e2.undeclaredGlobalsInFunctions.has(t2))
        return "gscope[lang.chkAssig('" + e2.undeclaredGlobalsInFunctions.get(t2).manglename + "',runtimeCtx)]";
      const o2 = { manglename: Me$1(e2), node: n2.argument };
      return e2.undeclaredGlobalsInFunctions.set(t2, o2), "gscope[lang.chkAssig('" + o2.manglename + "',runtimeCtx)]";
    }
    throw new s$c(e2, e$8.InvalidIdentifier, n2);
  } catch (t2) {
    throw t2;
  }
}
function be$1(e2, n2) {
  try {
    if (n2.callee.type === "MemberExpression") {
      let t3;
      n2.callee.computed === true ? t3 = V$3(e2, n2.callee.property) : (t3 = "'" + n2.callee.property.name + "'", se$2(n2.callee.property.name));
      let o3 = "[";
      for (let l2 = 0; l2 < n2.arguments.length; l2++)
        l2 > 0 && (o3 += ", "), o3 += V$3(e2, n2.arguments[l2]);
      return o3 += "]", e2.isAsync ? "(yield lang.callModuleFunction(" + V$3(e2, n2.callee.object) + "," + o3 + "," + t3 + ",runtimeCtx))" : "lang.callModuleFunction(" + V$3(e2, n2.callee.object) + "," + o3 + "," + t3 + ",runtimeCtx)";
    }
    if (n2.callee.type !== "Identifier")
      throw new s$c(e2, e$8.FuncionNotFound, n2);
    const t2 = n2.callee.name.toLowerCase();
    if (t2 === "iif")
      return we$1(e2, n2);
    if (t2 === "when")
      return Se$1(e2, n2);
    if (t2 === "decode")
      return ve$1(e2, n2);
    let o2 = "";
    if (e2.localScope !== null && (e2.localScope[t2] !== void 0 ? o2 = "lscope['" + t2 + "']" : e2.localScope._SymbolsMap[t2] !== void 0 && (o2 = "lscope['" + e2.localScope._SymbolsMap[t2] + "']")), o2 === "") {
      if (e2.globalScope[t2] !== void 0)
        o2 = "gscope['" + t2 + "']";
      else if (e2.globalScope._SymbolsMap[t2] !== void 0)
        o2 = "gscope['" + e2.globalScope._SymbolsMap[t2] + "']";
      else if (e2.localScope !== null)
        if (e2.undeclaredGlobalsInFunctions.has(t2))
          o2 = "gscope[lang.chkAssig('" + e2.undeclaredGlobalsInFunctions.get(t2).manglename + "',runtimeCtx)]";
        else {
          const l2 = { manglename: Me$1(e2), node: n2.argument };
          e2.undeclaredGlobalsInFunctions.set(t2, l2), o2 = "gscope[lang.chkAssig('" + l2.manglename + "',runtimeCtx)]";
        }
    }
    if (o2 !== "") {
      let t3 = "[";
      for (let o3 = 0; o3 < n2.arguments.length; o3++)
        o3 > 0 && (t3 += ", "), t3 += V$3(e2, n2.arguments[o3]);
      return t3 += "]", e2.isAsync ? "(yield lang.callfunc(" + o2 + "," + t3 + ",runtimeCtx) )" : "lang.callfunc(" + o2 + "," + t3 + ",runtimeCtx)";
    }
    throw new s$c(e2, e$8.FuncionNotFound, n2);
  } catch (t2) {
    throw t2;
  }
}
function we$1(e2, n2) {
  try {
    if (n2.arguments.length !== 3)
      throw new s$c(e2, e$8.WrongNumberOfParameters, n2);
    const t2 = Fe$1(e2);
    return `${e2.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t2} = ${V$3(e2, n2.arguments[0])};
       
        if (${t2} === true) {
          return  ${V$3(e2, n2.arguments[1])};
        }
        else if (${t2} === false) {
          return ${V$3(e2, n2.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${e2.isAsync ? "})}()))" : "}()"}`;
  } catch (t2) {
    throw t2;
  }
}
function Se$1(e2, n2) {
  try {
    if (n2.arguments.length < 3)
      throw new s$c(e2, e$8.WrongNumberOfParameters, n2);
    if (n2.arguments.length % 2 == 0)
      throw new s$c(e2, e$8.WrongNumberOfParameters, n2);
    const t2 = Fe$1(e2);
    let o2 = "var ";
    for (let l2 = 0; l2 < n2.arguments.length - 1; l2 += 2)
      o2 += `${t2} = lang.mustBoolean(${V$3(e2, n2.arguments[l2])}, runtimeCtx);
      if (${t2} === true ) {
        return ${V$3(e2, n2.arguments[l2 + 1])} 
      }
`;
    return `${e2.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        ${o2}
        return ${V$3(e2, n2.arguments[n2.arguments.length - 1])}
        ${e2.isAsync ? "})}()))" : "}()"}`;
  } catch (t2) {
    throw t2;
  }
}
function ve$1(e2, n2) {
  try {
    if (n2.arguments.length < 2)
      throw new s$c(e2, e$8.WrongNumberOfParameters, n2);
    if (n2.arguments.length === 2)
      return `(${V$3(e2, n2.arguments[1])})`;
    if ((n2.arguments.length - 1) % 2 == 0)
      throw new s$c(e2, e$8.WrongNumberOfParameters, n2);
    const t2 = Fe$1(e2), o2 = Fe$1(e2);
    let l2 = "var ";
    for (let r2 = 1; r2 < n2.arguments.length - 1; r2 += 2)
      l2 += `${o2} = ${V$3(e2, n2.arguments[r2])};
      if (lang.binary(${o2}, ${t2}, "==") === true ) {
        return ${V$3(e2, n2.arguments[r2 + 1])} 
      }
`;
    return `${e2.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t2} = ${V$3(e2, n2.arguments[0])};
        ${l2}
        return ${V$3(e2, n2.arguments[n2.arguments.length - 1])}
        ${e2.isAsync ? "})}()))" : "}()"}`;
  } catch (t2) {
    throw t2;
  }
}
const xe$1 = {};
function Me$1(e2) {
  return e2.symbols.symbolCounter++, "_T" + e2.symbols.symbolCounter.toString();
}
function Fe$1(e2) {
  return e2.symbols.symbolCounter++, "_Tvar" + e2.symbols.symbolCounter.toString();
}
M$5(xe$1, W$3), B$2(xe$1, W$3), N$3(xe$1, W$3), C$3(xe$1, W$3), f(xe$1, W$3), xe$1.iif = function(e2, n2) {
  try {
    return W$3(e2, n2, (t2, o2, l2) => {
      throw new t$7(e2, e$8.Unrecognised, n2);
    });
  } catch (t2) {
    throw t2;
  }
}, xe$1.decode = function(e2, n2) {
  try {
    return W$3(e2, n2, (t2, o2, l2) => {
      throw new t$7(e2, e$8.Unrecognised, n2);
    });
  } catch (t2) {
    throw t2;
  }
}, xe$1.when = function(e2, n2) {
  try {
    return W$3(e2, n2, (t2, o2, l2) => {
      throw new t$7(e2, e$8.Unrecognised, n2);
    });
  } catch (t2) {
    throw t2;
  }
};
const Ce$1 = {};
for (const Pe in xe$1)
  Ce$1[Pe] = new e$7(xe$1[Pe]);
q$3(xe$1, W$3);
for (const Pe in xe$1)
  xe$1[Pe] = new e$7(xe$1[Pe]);
const Ie$1 = function() {
};
Ie$1.prototype = xe$1;
const Ae$1 = function() {
};
function _e(e2, n2, t2) {
  const o2 = {};
  e2 || (e2 = {}), t2 || (t2 = {}), o2._SymbolsMap = {}, o2.textformatting = 1, o2.infinity = 1, o2.pi = 1;
  for (const l2 in n2)
    o2[l2] = 1;
  for (const l2 in t2)
    o2[l2] = 1;
  for (const l2 in e2)
    o2[l2] = 1;
  return o2;
}
function Oe(t2, o2, l2) {
  const r2 = l2 ? new Ae$1() : new Ie$1();
  t2 || (t2 = {}), o2 || (o2 = {});
  const a2 = new J$5({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  a2.immutable = false, r2._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }, r2.textformatting = a2, r2.infinity = Number.POSITIVE_INFINITY, r2.pi = Math.PI;
  for (const e2 in o2)
    r2[e2] = o2[e2], r2._SymbolsMap[e2] = 1;
  for (const e2 in t2)
    r2._SymbolsMap[e2] = 1, t2[e2] && t2[e2].declaredClass === "esri.Graphic" ? r2[e2] = g$4.createFromGraphic(t2[e2]) : r2[e2] = t2[e2];
  return r2;
}
Ae$1.prototype = Ce$1;
function Ee$1(e2, n2) {
  const t2 = { mode: n2, compiled: true, functions: {}, signatures: [], standardFunction: W$3, standardFunctionAsync: W$3, evaluateIdentifier: Be };
  for (let o2 = 0; o2 < e2.length; o2++)
    e2[o2].registerFunctions(t2);
  if (n2 === "sync") {
    for (const e3 in t2.functions)
      xe$1[e3] = new e$7(t2.functions[e3]), Ie$1.prototype[e3] = xe$1[e3];
    for (let e3 = 0; e3 < t2.signatures.length; e3++)
      o$4(t2.signatures[e3], "sync");
  } else {
    for (const e3 in t2.functions)
      Ce$1[e3] = new e$7(t2.functions[e3]), Ae$1.prototype[e3] = Ce$1[e3];
    for (let e3 = 0; e3 < t2.signatures.length; e3++)
      o$4(t2.signatures[e3], "async");
  }
}
function Be(e2, n2) {
  const t2 = n2.name;
  if (t2 === "_SymbolsMap")
    throw new t$7(e2, e$8.InvalidIdentifier, null);
  if (e2.localStack.length > 0) {
    if (t2.substr(0, 2).toLowerCase() !== "_t" && e2.localStack[e2.localStack.length - 1][t2] !== void 0)
      return e2.localStack[e2.localStack.length - 1][t2];
    const n3 = e2.mangleMap[t2];
    if (n3 !== void 0 && e2.localStack[e2.localStack.length - 1][n3] !== void 0)
      return e2.localStack[e2.localStack.length - 1][n3];
  }
  if (t2.substr(0, 2).toLowerCase() !== "_t" && e2.globalScope[t2] !== void 0)
    return e2.globalScope[t2];
  if (e2.globalScope._SymbolsMap[t2] === 1)
    return e2.globalScope[t2];
  const o2 = e2.mangleMap[t2];
  return o2 !== void 0 ? e2.globalScope[o2] : void 0;
}
Ee$1([m$4], "sync"), Ee$1([m$4], "async");
let $e = 0;
const je = { error(e2) {
  throw new t$7(null, e2, null);
}, __awaiter: (e2, n2, t2, o2) => new Promise((t3, l2) => {
  function r2(e3) {
    try {
      s2(o2.next(e3));
    } catch (n3) {
      l2(n3);
    }
  }
  function a2(e3) {
    try {
      s2(o2.throw(e3));
    } catch (n3) {
      l2(n3);
    }
  }
  function s2(e3) {
    e3.done ? t3(e3.value) : e3.value && e3.value.then ? e3.value.then(r2, a2) : ($e++, $e % 100 == 0 ? setTimeout(() => {
      $e = 0, r2(e3.value);
    }, 0) : r2(e3.value));
  }
  s2((o2 = o2.apply(e2, n2 || [])).next());
}), functionDepthchecker: (e2, n2) => function() {
  if (n2.depthCounter.depth++, n2.localStack.push([]), n2.depthCounter.depth > 64)
    throw new t$7(null, e$8.MaximumCallDepth, null);
  const t2 = e2.apply(this, arguments);
  return C$5(t2) ? t2.then((e3) => (n2.depthCounter.depth--, n2.localStack.length = n2.localStack.length - 1, e3)) : (n2.depthCounter.depth--, n2.localStack.length = n2.localStack.length - 1, t2);
}, chkAssig(e2, n2) {
  if (n2.gdefs[e2] === void 0)
    throw new t$7(n2, e$8.InvalidIdentifier, null);
  return e2;
}, mustBoolean(e2, n2) {
  if (e2 === true || e2 === false)
    return e2;
  throw new t$7(n2, e$8.BooleanConditionRequired, null);
}, setAssig: (e2, n2) => (n2.gdefs[e2] = 1, e2), castString: (e2) => K$3(e2), aCheck(e2, n2) {
  if (F$3(e2)) {
    if (n2 === "ArrayExpression")
      throw new t$7(null, e$8.NoFunctionInArray, null);
    if (n2 === "ObjectExpression")
      throw new t$7(null, e$8.NoFunctionInDictionary, null);
    throw new t$7(null, e$8.NoFunctionInTemplateLiteral, null);
  }
  return e2 === k$3 ? null : e2;
}, Dictionary: J$5, Feature: g$4, UserDefinedCompiledFunction: T$4, dictionary(n2) {
  const o2 = {}, l2 = new Map();
  for (let e2 = 0; e2 < n2.length; e2 += 2) {
    if (F$3(n2[e2 + 1]))
      throw new t$7(null, e$8.NoFunctionInDictionary, null);
    if (w$6(n2[e2]) === false)
      throw new t$7(null, e$8.KeyMustBeString, null);
    let r3 = n2[e2].toString();
    const s2 = r3.toLowerCase();
    l2.has(s2) ? r3 = l2.get(s2) : l2.set(s2, r3), n2[e2 + 1] === k$3 ? o2[r3] = null : o2[r3] = n2[e2 + 1];
  }
  const r2 = new J$5(o2);
  return r2.immutable = false, r2;
}, strCheck(e2) {
  if (w$6(e2) === false)
    throw new t$7(null, e$8.KeyMustBeString, null);
  return e2;
}, unary(e2, n2) {
  if (_$4(e2)) {
    if (n2 === "!")
      return !e2;
    if (n2 === "-")
      return -1 * re$5(e2);
    if (n2 === "+")
      return 1 * re$5(e2);
    if (n2 === "~")
      return ~re$5(e2);
    throw new t$7(null, e$8.UnsupportedUnaryOperator, null);
  }
  if (n2 === "-")
    return -1 * re$5(e2);
  if (n2 === "+")
    return 1 * re$5(e2);
  if (n2 === "~")
    return ~re$5(e2);
  throw new t$7(null, e$8.UnsupportedUnaryOperator, null);
}, logicalCheck(e2) {
  if (_$4(e2) === false)
    throw new t$7(null, e$8.LogicExpressionOrAnd, null);
  return e2;
}, logical(e2, n2, t2) {
  if (_$4(e2) && _$4(n2))
    switch (t2) {
      case "||":
        return e2 || n2;
      case "&&":
        return e2 && n2;
      default:
        throw new t$7(null, e$8.LogicExpressionOrAnd, null);
    }
  throw new t$7(null, e$8.LogicExpressionOrAnd, null);
}, binary(e2, n2, t2) {
  switch (t2) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Ne$1(re$5(e2), re$5(n2), t2);
    case "==":
    case "=":
      return X$5(e2, n2);
    case "!=":
      return !X$5(e2, n2);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return Q$5(e2, n2, t2);
    case "+":
      return w$6(e2) || w$6(n2) ? K$3(e2) + K$3(n2) : re$5(e2) + re$5(n2);
    case "-":
      return re$5(e2) - re$5(n2);
    case "*":
      return re$5(e2) * re$5(n2);
    case "/":
      return re$5(e2) / re$5(n2);
    case "%":
      return re$5(e2) % re$5(n2);
    default:
      throw new t$7(null, e$8.UnsupportedOperator, null);
  }
}, assign(e2, n2, t2) {
  switch (n2) {
    case "=":
      return e2 === k$3 ? null : e2;
    case "/=":
      return re$5(t2) / re$5(e2);
    case "*=":
      return re$5(t2) * re$5(e2);
    case "-=":
      return re$5(t2) - re$5(e2);
    case "+=":
      return w$6(t2) || w$6(e2) ? K$3(t2) + K$3(e2) : re$5(t2) + re$5(e2);
    case "%=":
      return re$5(t2) % re$5(e2);
    default:
      throw new t$7(null, e$8.UnsupportedOperator, null);
  }
}, update(e2, n2, t2, o2) {
  const l2 = re$5(e2[n2]);
  return e2[n2] = t2 === "++" ? l2 + 1 : l2 - 1, o2 === false ? l2 : t2 === "++" ? l2 + 1 : l2 - 1;
}, graphicToFeature: (e2, t2) => e2 === null ? null : g$4.createFromGraphicLikeObject(e2.geometry, e2.attributes, t2), memberupdate(n2, t2, o2, l2) {
  let r2;
  if (Y$5(n2)) {
    if (!Z$7(t2))
      throw new t$7(null, e$8.ArrayAccessorMustBeNumber, null);
    if (t2 < 0 && (t2 = n2.length + t2), t2 < 0 || t2 >= n2.length)
      throw new t$7(null, e$8.OutOfBounds, null);
    r2 = re$5(n2[t2]), n2[t2] = o2 === "++" ? r2 + 1 : r2 - 1;
  } else if (n2 instanceof J$5) {
    if (w$6(t2) === false)
      throw new t$7(null, e$8.KeyAccessorMustBeString, null);
    if (n2.hasField(t2) !== true)
      throw new t$7(null, e$8.FieldNotFound, null, { key: t2 });
    r2 = re$5(n2.field(t2)), n2.setField(t2, o2 === "++" ? r2 + 1 : r2 - 1);
  } else if (J$6(n2)) {
    if (w$6(t2) === false)
      throw new t$7(null, e$8.KeyAccessorMustBeString, null);
    if (n2.hasField(t2) !== true)
      throw new t$7(null, e$8.FieldNotFound, null);
    r2 = re$5(n2.field(t2)), n2.setField(t2, o2 === "++" ? r2 + 1 : r2 - 1);
  } else {
    if (E$3(n2))
      throw new t$7(null, e$8.Immutable, null);
    if (!(n2 instanceof Ue))
      throw new t$7(null, e$8.InvalidIdentifier, null);
    if (w$6(t2) === false)
      throw new t$7(null, e$8.ModuleAccessorMustBeString, null);
    if (n2.hasGlobal(t2) !== true)
      throw new t$7(null, e$8.ModuleExportNotFound, null);
    r2 = re$5(n2.global(t2)), n2.setGlobal(t2, o2 === "++" ? r2 + 1 : r2 - 1);
  }
  return l2 === false ? r2 : o2 === "++" ? r2 + 1 : r2 - 1;
}, assignmember(n2, t2, o2, l2) {
  if (Y$5(n2)) {
    if (!Z$7(t2))
      throw new t$7(null, e$8.ArrayAccessorMustBeNumber, null);
    if (t2 < 0 && (t2 = n2.length + t2), t2 < 0 || t2 > n2.length)
      throw new t$7(null, e$8.OutOfBounds, null);
    if (t2 === n2.length) {
      if (o2 !== "=")
        throw new t$7(null, e$8.OutOfBounds, null);
      n2[t2] = this.assign(l2, o2, n2[t2]);
    } else
      n2[t2] = this.assign(l2, o2, n2[t2]);
  } else if (n2 instanceof J$5) {
    if (w$6(t2) === false)
      throw new t$7(null, e$8.KeyAccessorMustBeString, null);
    if (n2.hasField(t2) === true)
      n2.setField(t2, this.assign(l2, o2, n2.field(t2)));
    else {
      if (o2 !== "=")
        throw new t$7(null, e$8.FieldNotFound, null);
      n2.setField(t2, this.assign(l2, o2, null));
    }
  } else if (J$6(n2)) {
    if (w$6(t2) === false)
      throw new t$7(null, e$8.KeyAccessorMustBeString, null);
    if (n2.hasField(t2) === true)
      n2.setField(t2, this.assign(l2, o2, n2.field(t2)));
    else {
      if (o2 !== "=")
        throw new t$7(null, e$8.FieldNotFound, null);
      n2.setField(t2, this.assign(l2, o2, null));
    }
  } else {
    if (E$3(n2))
      throw new t$7(null, e$8.Immutable, null);
    if (!(n2 instanceof Ue))
      throw new t$7(null, e$8.InvalidIdentifier, null);
    if (w$6(t2) === false)
      throw new t$7(null, e$8.ModuleAccessorMustBeString, null);
    if (!n2.hasGlobal(t2))
      throw new t$7(null, e$8.ModuleExportNotFound, null);
    n2.setGlobal(t2, this.assign(l2, o2, n2.global(t2)));
  }
}, member(n2, t2) {
  if (n2 === null)
    throw new t$7(null, e$8.MemberOfNull, null);
  if (n2 instanceof J$5 || J$6(n2)) {
    if (w$6(t2))
      return n2.field(t2);
    throw new t$7(null, e$8.InvalidMemberAccessKey, null);
  }
  if (n2 instanceof p$6) {
    if (w$6(t2))
      return W$6(n2, t2, null, null);
    throw new t$7(null, e$8.InvalidMemberAccessKey, null);
  }
  if (Y$5(n2)) {
    if (Z$7(t2) && isFinite(t2) && Math.floor(t2) === t2) {
      if (t2 < 0 && (t2 = n2.length + t2), t2 >= n2.length || t2 < 0)
        throw new t$7(null, e$8.OutOfBounds, null);
      return n2[t2];
    }
    throw new t$7(null, e$8.InvalidMemberAccessKey, null);
  }
  if (w$6(n2)) {
    if (Z$7(t2) && isFinite(t2) && Math.floor(t2) === t2) {
      if (t2 < 0 && (t2 = n2.length + t2), t2 >= n2.length || t2 < 0)
        throw new t$7(null, e$8.OutOfBounds, null);
      return n2[t2];
    }
    throw new t$7(null, e$8.InvalidMemberAccessKey, null);
  }
  if (E$3(n2)) {
    if (Z$7(t2) && isFinite(t2) && Math.floor(t2) === t2) {
      if (t2 < 0 && (t2 = n2.length() + t2), t2 >= n2.length() || t2 < 0)
        throw new t$7(null, e$8.OutOfBounds, null);
      return n2.get(t2);
    }
    throw new t$7(null, e$8.InvalidMemberAccessKey, null);
  }
  if (n2 instanceof Ue) {
    if (w$6(t2))
      return n2.global(t2);
    throw new t$7(null, e$8.InvalidMemberAccessKey, null);
  }
  throw new t$7(null, e$8.InvalidMemberAccessKey, null);
}, callfunc: (e2, n2, t2) => e2.call(t2, { arguments: n2, preparsed: true }), loadModule(e2, n2) {
  const t2 = n2.moduleFactoryMap[e2];
  if (n2.moduleSingletons[t2])
    return n2.moduleSingletons[t2];
  const o2 = n2.moduleFactory[t2]({ vars: {}, moduleSingletons: n2.moduleSingletons, depthCounter: n2.depthCounter, console: n2.console, abortSignal: n2.abortSignal, isAsync: n2.isAsync, services: n2.services, lrucache: n2.lrucache, interceptor: n2.interceptor }, n2.spatialReference);
  return n2.moduleSingletons[t2] = o2, o2;
}, callModuleFunction(e2, n2, o2, l2) {
  if (!(e2 instanceof Ue))
    throw new t$7(null, e$8.FuncionNotFound, null);
  const r2 = e2.global(o2);
  if (F$3(r2) === false)
    throw new t$7(null, e$8.CallNonFunction, null);
  return r2.call(l2, { preparsed: true, arguments: n2 });
} };
function Ne(e2) {
  console.log(e2);
}
function Le(e2, n2, c2 = false) {
  n2 === null && (n2 = { vars: {}, customfunctions: {} });
  let u2 = null;
  e2.usesModules && (u2 = new s$3(null, e2.loadedModules));
  const p2 = { isAsync: c2, globalScope: _e(n2.vars, c2 ? Ce$1 : xe$1, n2.customfunctions), moduleFactory: {}, moduleFactoryMap: {}, undeclaredGlobalsInFunctions: new Map(), customfunctions: n2.customfunctions, libraryResolver: u2, localScope: null, mangleMap: {}, depthCounter: { depth: 1 }, exports: {}, console: Ne, lrucache: n2.lrucache, interceptor: n2.interceptor, services: n2.services, symbols: { symbolCounter: 0 } };
  let m2 = V$3(p2, e2);
  m2 === "" && (m2 = "lc.voidOperation; "), p2.undeclaredGlobalsInFunctions.size > 0 && p2.undeclaredGlobalsInFunctions.forEach((e3) => {
    throw new s$c(n2, e$8.InvalidIdentifier, e3.node);
  });
  let g2 = "";
  g2 = c2 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + m2 + "\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + m2 + "\n return lastStatement; } \n return this.postProcess(mainBody()); ";
  const d2 = p2.moduleFactory, f2 = p2.moduleFactoryMap, h2 = p2.exports, y2 = {};
  for (const t2 in h2)
    y2[t2] = p2.mangleMap[t2] !== void 0 ? p2.mangleMap[t2] : t2;
  const b2 = { lc: ve$2, lang: je, mangles: p2.mangleMap, postProcess(e3) {
    if (e3 instanceof D$6 && (e3 = e3.value), e3 instanceof N$5 && (e3 = e3.value), e3 === k$3 && (e3 = null), e3 === j$2)
      throw new t$7(null, e$8.IllegalResult, null);
    if (e3 === A$4)
      throw new t$7(null, e$8.IllegalResult, null);
    if (F$3(e3))
      throw new t$7(null, e$8.IllegalResult, null);
    return e3;
  }, prepare(e3, n3) {
    let t2 = e3.spatialReference;
    t2 == null && (t2 = k$4.WebMercator);
    const o2 = Oe(e3.vars, e3.customfunctions, n3);
    return { localStack: [], isAsync: n3, moduleFactory: d2, moduleFactoryMap: f2, mangleMap: this.mangles, moduleSingletons: {}, exports: h2, gdefs: {}, exportmangle: y2, spatialReference: t2, globalScope: o2, abortSignal: e3.abortSignal === void 0 || e3.abortSignal === null ? { aborted: false } : e3.abortSignal, localScope: null, services: e3.services, console: e3.console ? e3.console : Ne, lrucache: e3.lrucache, interceptor: e3.interceptor, symbols: { symbolCounter: 0 }, depthCounter: { depth: 1 } };
  } };
  return new Function("context", "spatialReference", g2).bind(b2);
}
async function Re() {
  return Ee$1([await import("./geomasync.js")], "async"), true;
}
class Ue extends s$9 {
  constructor(e2) {
    super(null), this.moduleContext = e2;
  }
  hasGlobal(e2) {
    return this.moduleContext.exports[e2] === void 0 && (e2 = e2.toLowerCase()), this.moduleContext.exports[e2] !== void 0;
  }
  setGlobal(e2, n2) {
    const o2 = this.moduleContext.globalScope, l2 = e2.toLowerCase();
    if (F$3(n2))
      throw new t$7(null, e$8.AssignModuleFunction, null);
    o2[this.moduleContext.exportmangle[l2]] = n2;
  }
  global(e2) {
    const n2 = this.moduleContext.globalScope;
    e2 = e2.toLowerCase();
    const o2 = n2[this.moduleContext.exportmangle[e2]];
    if (o2 === void 0)
      throw new t$7(null, e$8.InvalidIdentifier, null);
    if (F$3(o2) && !(o2 instanceof s$b)) {
      const t2 = new s$b();
      return t2.fn = o2, t2.parameterEvaluator = W$3, t2.context = this.moduleContext, n2[this.moduleContext.exportmangle[e2]] = t2, t2;
    }
    return o2;
  }
}
function De(e2, n2, t2 = false) {
  const l2 = { isAsync: t2, moduleFactory: n2.moduleFactory, moduleFactoryMap: {}, libraryResolver: new s$3(null, e2.loadedModules), globalScope: _e(n2.vars, t2 ? Ce$1 : xe$1, n2.customfunctions), customfunctions: n2.customfunctions, localScope: null, mangleMap: {}, undeclaredGlobalsInFunctions: new Map(), depthCounter: { depth: 1 }, exports: {}, console: Ne, lrucache: n2.lrucache, interceptor: n2.interceptor, services: n2.services, symbols: { symbolCounter: 0 } };
  let r2 = V$3(l2, e2);
  r2 === "" && (r2 = "lc.voidOperation; ");
  let a2 = "";
  a2 = t2 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + r2 + "\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + r2 + "\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ";
  const s2 = l2.moduleFactory, i2 = l2.moduleFactoryMap, c2 = l2.exports, u2 = {};
  for (const o2 in c2)
    u2[o2] = l2.mangleMap[o2] !== void 0 ? l2.mangleMap[o2] : o2;
  const p2 = { lc: ve$2, lang: je, mangles: l2.mangleMap, prepareModule: (e3) => new Ue(e3), prepare(e3, n3) {
    let t3 = e3.spatialReference;
    t3 == null && (t3 = new k$4({ wkid: 102100 }));
    const o2 = Oe(e3.vars, e3.customfunctions, n3);
    return { localStack: [], isAsync: n3, exports: c2, exportmangle: u2, gdefs: {}, moduleFactory: s2, moduleFactoryMap: i2, moduleSingletons: e3.moduleSingletons, mangleMap: this.mangles, spatialReference: t3, globalScope: o2, abortSignal: e3.abortSignal === void 0 || e3.abortSignal === null ? { aborted: false } : e3.abortSignal, localScope: null, services: e3.services, console: e3.console ? e3.console : Ne, lrucache: e3.lrucache, interceptor: e3.interceptor, symbols: { symbolCounter: 0 }, depthCounter: e3.depthCounter };
  } };
  return new Function("context", "spatialReference", a2).bind(p2);
}
var e$2;
!function(e2) {
  e2.AssignmentExpression = "AssignmentExpression", e2.ArrayExpression = "ArrayExpression", e2.BlockComment = "BlockComment", e2.BlockStatement = "BlockStatement", e2.BinaryExpression = "BinaryExpression", e2.BreakStatement = "BreakStatement", e2.CallExpression = "CallExpression", e2.ContinueStatement = "ContinueStatement", e2.EmptyStatement = "EmptyStatement", e2.ExpressionStatement = "ExpressionStatement", e2.ExportNamedDeclaration = "ExportNamedDeclaration", e2.ExportSpecifier = "ExportSpecifier", e2.ForStatement = "ForStatement", e2.ForInStatement = "ForInStatement", e2.FunctionDeclaration = "FunctionDeclaration", e2.Identifier = "Identifier", e2.IfStatement = "IfStatement", e2.ImportDeclaration = "ImportDeclaration", e2.ImportDefaultSpecifier = "ImportDefaultSpecifier", e2.LineComment = "LineComment", e2.Literal = "Literal", e2.LogicalExpression = "LogicalExpression", e2.MemberExpression = "MemberExpression", e2.ObjectExpression = "ObjectExpression", e2.Program = "Program", e2.Property = "Property", e2.ReturnStatement = "ReturnStatement", e2.TemplateElement = "TemplateElement", e2.TemplateLiteral = "TemplateLiteral", e2.UnaryExpression = "UnaryExpression", e2.UpdateExpression = "UpdateExpression", e2.VariableDeclaration = "VariableDeclaration", e2.VariableDeclarator = "VariableDeclarator", e2.WhileStatement = "WhileStatement";
}(e$2 || (e$2 = {}));
const t$1 = ["++", "--"], n = ["-", "+", "!", "~"], i$1 = ["=", "/=", "*=", "%=", "+=", "-="], r$1 = ["||", "&&"], a$1 = ["|", "&", ">>", "<<", ">>>", "^", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "%"], o$2 = { "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 10, "/": 10, "%": 10 };
var c;
!function(e2) {
  e2[e2.Unknown = 0] = "Unknown", e2[e2.BooleanLiteral = 1] = "BooleanLiteral", e2[e2.EOF = 2] = "EOF", e2[e2.Identifier = 3] = "Identifier", e2[e2.Keyword = 4] = "Keyword", e2[e2.NullLiteral = 5] = "NullLiteral", e2[e2.NumericLiteral = 6] = "NumericLiteral", e2[e2.Punctuator = 7] = "Punctuator", e2[e2.StringLiteral = 8] = "StringLiteral", e2[e2.Template = 10] = "Template";
}(c || (c = {}));
const s$2 = ["Unknown", "Boolean", "<end>", "Identifier", "Keyword", "Null", "Numeric", "Punctuator", "String", "RegularExpression", "Template"];
var l$2;
!function(e2) {
  e2.InvalidModuleUri = "InvalidModuleUri", e2.ForInOfLoopInitializer = "ForInOfLoopInitializer", e2.IdentiferExpected = "IdentiferExpected", e2.InvalidEscapedReservedWord = "InvalidEscapedReservedWord", e2.InvalidExpression = "InvalidExpression", e2.InvalidFunctionIdentifier = "InvalidFunctionIdentifier", e2.InvalidHexEscapeSequence = "InvalidHexEscapeSequence", e2.InvalidLeftHandSideInAssignment = "InvalidLeftHandSideInAssignment", e2.InvalidLeftHandSideInForIn = "InvalidLeftHandSideInForIn", e2.InvalidTemplateHead = "InvalidTemplateHead", e2.InvalidVariableAssignment = "InvalidVariableAssignment", e2.KeyMustBeString = "KeyMustBeString", e2.NoFunctionInsideBlock = "NoFunctionInsideBlock", e2.NoFunctionInsideFunction = "NoFunctionInsideFunction", e2.ModuleExportRootOnly = "ModuleExportRootOnly", e2.ModuleImportRootOnly = "ModuleImportRootOnly", e2.PunctuatorExpected = "PunctuatorExpected", e2.TemplateOctalLiteral = "TemplateOctalLiteral", e2.UnexpectedEndOfScript = "UnexpectedEndOfScript", e2.UnexpectedIdentifier = "UnexpectedIdentifier", e2.UnexpectedNumber = "UnexpectedNumber", e2.UnexpectedString = "UnexpectedString", e2.UnexpectedTemplate = "UnexpectedTemplate", e2.UnexpectedToken = "UnexpectedToken";
}(l$2 || (l$2 = {}));
const p = { [l$2.InvalidModuleUri]: "Module uri must be a string literal", [l$2.ForInOfLoopInitializer]: "for-in loop variable declaration may not have an initializer", [l$2.IdentiferExpected]: "Identifier expected", [l$2.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters", [l$2.InvalidExpression]: "Invalid expression", [l$2.InvalidFunctionIdentifier]: "Invalid function identifier", [l$2.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence", [l$2.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment", [l$2.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in", [l$2.InvalidTemplateHead]: "Invalid template structure", [l$2.InvalidVariableAssignment]: "Invalid variable assignment", [l$2.KeyMustBeString]: "Object keys must be a string", [l$2.NoFunctionInsideBlock]: "Functions cannot be declared inside of code blocks", [l$2.NoFunctionInsideFunction]: "Functions cannot be declared inside another function", [l$2.ModuleExportRootOnly]: "Module exports cannot be declared inside of code blocks", [l$2.ModuleImportRootOnly]: "Module import cannot be declared inside of code blocks", [l$2.PunctuatorExpected]: "'${value}' expected", [l$2.TemplateOctalLiteral]: "Octal literals are not allowed in template strings.", [l$2.UnexpectedEndOfScript]: "Unexpected end of script", [l$2.UnexpectedIdentifier]: "Unexpected identifier", [l$2.UnexpectedNumber]: "Unexpected number", [l$2.UnexpectedString]: "Unexpected string", [l$2.UnexpectedTemplate]: "Unexpected quasi '${value}'", [l$2.UnexpectedToken]: "Unexpected token" };
class d$2 extends Error {
  constructor({ code: e2, index: t2, line: n2, column: i2, len: r2 = 0, description: a2, data: o2 }) {
    var _a;
    super(`${a2 != null ? a2 : e2}`), this.declaredRootClass = "esri.arcade.lib.parsingerror", this.name = "ParsingError", this.code = e2, this.index = t2, this.line = n2, this.column = i2, this.len = r2, this.data = o2, this.description = a2, this.range = { start: { line: n2, column: i2 - 1 }, end: { line: n2, column: i2 + r2 } }, (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, this, d$2);
  }
}
function u$2(t2) {
  return (t2 == null ? void 0 : t2.type) === e$2.Program;
}
function x$2(t2) {
  return (t2 == null ? void 0 : t2.type) === e$2.BlockStatement;
}
function I$2(t2) {
  return (t2 == null ? void 0 : t2.type) === e$2.BlockComment;
}
function y$1(t2) {
  return (t2 == null ? void 0 : t2.type) === e$2.EmptyStatement;
}
function w$2(t2) {
  return (t2 == null ? void 0 : t2.type) === e$2.VariableDeclarator;
}
function i(t2, n2) {
  return !!n2 && (n2.loc.end.line === t2.loc.start.line && n2.loc.end.column <= t2.loc.start.column);
}
function m(t2, n2) {
  return t2.range[0] >= n2.range[0] && t2.range[1] <= n2.range[1];
}
class o$1 {
  constructor() {
    this.comments = [], this._nodeStack = [], this._newComments = [];
  }
  insertInnerComments(n2) {
    if (!x$2(n2) || n2.body.length !== 0)
      return;
    const e2 = [];
    for (let t2 = this._newComments.length - 1; t2 >= 0; --t2) {
      const s2 = this._newComments[t2];
      n2.range[1] >= s2.range[0] && (e2.unshift(s2), this._newComments.splice(t2, 1));
    }
    e2.length && (n2.innerComments = e2);
  }
  attachTrailingComments(n2) {
    var _a, _b;
    if (!n2)
      return;
    const e2 = this._nodeStack[this._nodeStack.length - 1];
    if (x$2(n2) && m(e2, n2))
      for (let t2 = this._newComments.length - 1; t2 >= 0; --t2) {
        const s3 = this._newComments[t2];
        m(s3, n2) && (e2.trailingComments = [...(_a = e2.trailingComments) != null ? _a : [], s3], this._newComments.splice(t2, 1));
      }
    let s2 = [];
    if (this._newComments.length > 0)
      for (let t2 = this._newComments.length - 1; t2 >= 0; --t2) {
        const m2 = this._newComments[t2];
        i(m2, e2) ? (e2.trailingComments = [...(_b = e2.trailingComments) != null ? _b : [], m2], this._newComments.splice(t2, 1)) : i(m2, n2) && (s2.unshift(m2), this._newComments.splice(t2, 1));
      }
    if (e2 == null ? void 0 : e2.trailingComments) {
      i(e2.trailingComments[0], n2) && (s2 = [...s2, ...e2.trailingComments], delete e2.trailingComments);
    }
    s2.length > 0 && (n2.trailingComments = s2);
  }
  attachLeadingComments(t2) {
    var _a, _b, _c, _d;
    if (!t2)
      return;
    let s2;
    for (; this._nodeStack.length > 0; ) {
      const n2 = this._nodeStack[this._nodeStack.length - 1];
      if (!(t2.range[0] <= n2.range[0]))
        break;
      s2 = n2, this._nodeStack.pop();
    }
    const i2 = [], m2 = [];
    if (s2) {
      for (let o2 = ((_b = (_a = s2.leadingComments) == null ? void 0 : _a.length) != null ? _b : 0) - 1; o2 >= 0; --o2) {
        const l2 = s2.leadingComments[o2];
        t2.range[0] >= l2.range[1] ? (i2.unshift(l2), s2.leadingComments.splice(o2, 1)) : w$2(t2) && !I$2(l2) && (m2.unshift(l2), s2.leadingComments.splice(o2, 1));
      }
      return ((_c = s2.leadingComments) == null ? void 0 : _c.length) === 0 && delete s2.leadingComments, i2.length && (t2.leadingComments = i2), void (m2.length && (t2.trailingComments = [...m2, ...(_d = t2.trailingComments) != null ? _d : []]));
    }
    for (let n2 = this._newComments.length - 1; n2 >= 0; --n2) {
      const e2 = this._newComments[n2];
      t2.range[0] >= e2.range[0] && (i2.unshift(e2), this._newComments.splice(n2, 1));
    }
    i2.length && (t2.leadingComments = i2);
  }
  attachComments(t2) {
    var _a;
    if (u$2(t2) && t2.body.length > 0) {
      const n2 = this._nodeStack[this._nodeStack.length - 1];
      return n2 ? (n2.trailingComments = [...(_a = n2.trailingComments) != null ? _a : [], ...this._newComments], this._newComments.length = 0, void this._nodeStack.pop()) : (t2.trailingComments = [...this._newComments], void (this._newComments.length = 0));
    }
    this.attachTrailingComments(t2), this.attachLeadingComments(t2), this.insertInnerComments(t2), this._nodeStack.push(t2);
  }
  collectComment(t2) {
    this.comments.push(t2), this._newComments.push(t2);
  }
}
function o(t2, o2) {
  const e2 = p[t2];
  return o2 ? e2.replace(/\${(.*?)}/g, (r2, t3) => {
    var _a, _b;
    return (_b = (_a = o2[t3]) == null ? void 0 : _a.toString()) != null ? _b : "";
  }) : e2;
}
class e$1 {
  constructor(r2 = false) {
    this.tolerant = r2, this.errors = [];
  }
  recordError(r2) {
    this.errors.push(r2);
  }
  tolerate(r2) {
    if (!this.tolerant)
      throw r2;
    this.recordError(r2);
  }
  throwError(r2) {
    var _a;
    throw r2.description = (_a = r2.description) != null ? _a : o(r2.code, r2.data), new d$2(r2);
  }
  tolerateError(r2) {
    var _a;
    r2.description = (_a = r2.description) != null ? _a : o(r2.code, r2.data);
    const e2 = new d$2(r2);
    if (!this.tolerant)
      throw e2;
    this.recordError(e2);
  }
}
function r(r2, o2) {
  if (!r2)
    throw new Error("ASSERT: " + o2);
}
const u$1 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, D$2 = { fromCodePoint: (u2) => u2 < 65536 ? String.fromCharCode(u2) : String.fromCharCode(55296 + (u2 - 65536 >> 10)) + String.fromCharCode(56320 + (u2 - 65536 & 1023)), isWhiteSpace: (u2) => u2 === 32 || u2 === 9 || u2 === 11 || u2 === 12 || u2 === 160 || u2 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(u2), isLineTerminator: (u2) => u2 === 10 || u2 === 13 || u2 === 8232 || u2 === 8233, isIdentifierStart: (F2) => F2 === 36 || F2 === 95 || F2 >= 65 && F2 <= 90 || F2 >= 97 && F2 <= 122 || F2 === 92 || F2 >= 128 && u$1.NonAsciiIdentifierStart.test(D$2.fromCodePoint(F2)), isIdentifierPart: (F2) => F2 === 36 || F2 === 95 || F2 >= 65 && F2 <= 90 || F2 >= 97 && F2 <= 122 || F2 >= 48 && F2 <= 57 || F2 === 92 || F2 >= 128 && u$1.NonAsciiIdentifierPart.test(D$2.fromCodePoint(F2)), isDecimalDigit: (u2) => u2 >= 48 && u2 <= 57, isHexDigit: (u2) => u2 >= 48 && u2 <= 57 || u2 >= 65 && u2 <= 70 || u2 >= 97 && u2 <= 102, isOctalDigit: (u2) => u2 >= 48 && u2 <= 55 };
function a(e2) {
  return "0123456789abcdef".indexOf(e2.toLowerCase());
}
function d$1(e2) {
  return "01234567".indexOf(e2);
}
const l$1 = [[], [], []];
t$1.forEach((e2) => l$1[e2.length - 1].push(e2)), n.forEach((e2) => l$1[e2.length - 1].push(e2)), r$1.forEach((e2) => l$1[e2.length - 1].push(e2)), i$1.forEach((e2) => l$1[e2.length - 1].push(e2)), a$1.forEach((e2) => l$1[e2.length - 1].push(e2));
class u {
  constructor(e2, t2) {
    this.source = e2, this.errorHandler = t2, this._length = e2.length, this.index = 0, this.lineNumber = 1, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(e2) {
    this.index = e2.index, this.lineNumber = e2.lineNumber, this.lineStart = e2.lineStart, this.curlyStack = e2.curlyStack;
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(e2 = l$2.UnexpectedToken) {
    this.errorHandler.throwError({ code: e2, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  tolerateUnexpectedToken(e2 = l$2.UnexpectedToken) {
    this.errorHandler.tolerateError({ code: e2, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  skipSingleLineComment(e2) {
    const i2 = [], s2 = this.index - e2, n2 = { start: { line: this.lineNumber, column: this.index - this.lineStart - e2 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      const r2 = this.source.charCodeAt(this.index);
      if (++this.index, D$2.isLineTerminator(r2)) {
        if (n2) {
          n2.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
          const t2 = { multiLine: false, start: s2 + e2, end: this.index - 1, range: [s2, this.index - 1], loc: n2 };
          i2.push(t2);
        }
        return r2 === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index, ++this.lineNumber, this.lineStart = this.index, i2;
      }
    }
    if (n2) {
      n2.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const t2 = { multiLine: false, start: s2 + e2, end: this.index, range: [s2, this.index], loc: n2 };
      i2.push(t2);
    }
    return i2;
  }
  skipMultiLineComment() {
    const e2 = [], i2 = this.index - 2, s2 = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      const n2 = this.source.charCodeAt(this.index);
      if (D$2.isLineTerminator(n2))
        n2 === 13 && this.source.charCodeAt(this.index + 1) === 10 && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
      else if (n2 === 42) {
        if (this.source.charCodeAt(this.index + 1) === 47) {
          if (this.index += 2, s2) {
            s2.end = { line: this.lineNumber, column: this.index - this.lineStart };
            const t2 = { multiLine: true, start: i2 + 2, end: this.index - 2, range: [i2, this.index], loc: s2 };
            e2.push(t2);
          }
          return e2;
        }
        ++this.index;
      } else
        ++this.index;
    }
    if (s2) {
      s2.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const t2 = { multiLine: true, start: i2 + 2, end: this.index, range: [i2, this.index], loc: s2 };
      e2.push(t2);
    }
    return this.tolerateUnexpectedToken(), e2;
  }
  scanComments() {
    let e2 = [];
    for (; !this.eof(); ) {
      let i2 = this.source.charCodeAt(this.index);
      if (D$2.isWhiteSpace(i2))
        ++this.index;
      else if (D$2.isLineTerminator(i2))
        ++this.index, i2 === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index, ++this.lineNumber, this.lineStart = this.index;
      else {
        if (i2 !== 47)
          break;
        if (i2 = this.source.charCodeAt(this.index + 1), i2 === 47) {
          this.index += 2;
          const t2 = this.skipSingleLineComment(2);
          e2 = [...e2, ...t2];
        } else {
          if (i2 !== 42)
            break;
          {
            this.index += 2;
            const t2 = this.skipMultiLineComment();
            e2 = [...e2, ...t2];
          }
        }
      }
    }
    return e2;
  }
  isKeyword(e2) {
    switch ((e2 = e2.toLowerCase()).length) {
      case 2:
        return e2 === "if" || e2 === "in";
      case 3:
        return e2 === "var" || e2 === "for";
      case 4:
        return e2 === "else";
      case 5:
        return e2 === "break" || e2 === "while";
      case 6:
        return e2 === "return" || e2 === "import" || e2 === "export";
      case 8:
        return e2 === "function" || e2 === "continue";
      default:
        return false;
    }
  }
  codePointAt(e2) {
    let t2 = this.source.charCodeAt(e2);
    if (t2 >= 55296 && t2 <= 56319) {
      const i2 = this.source.charCodeAt(e2 + 1);
      if (i2 >= 56320 && i2 <= 57343) {
        t2 = 1024 * (t2 - 55296) + i2 - 56320 + 65536;
      }
    }
    return t2;
  }
  scanHexEscape(e2) {
    const i2 = e2 === "u" ? 4 : 2;
    let s2 = 0;
    for (let n2 = 0; n2 < i2; ++n2) {
      if (this.eof() || !D$2.isHexDigit(this.source.charCodeAt(this.index)))
        return null;
      s2 = 16 * s2 + a(this.source[this.index++]);
    }
    return String.fromCharCode(s2);
  }
  scanUnicodeCodePointEscape() {
    let e2 = this.source[this.index], i2 = 0;
    for (e2 === "}" && this.throwUnexpectedToken(); !this.eof() && (e2 = this.source[this.index++], D$2.isHexDigit(e2.charCodeAt(0))); )
      i2 = 16 * i2 + a(e2);
    return (i2 > 1114111 || e2 !== "}") && this.throwUnexpectedToken(), D$2.fromCodePoint(i2);
  }
  getIdentifier() {
    const e2 = this.index++;
    for (; !this.eof(); ) {
      const i2 = this.source.charCodeAt(this.index);
      if (i2 === 92)
        return this.index = e2, this.getComplexIdentifier();
      if (i2 >= 55296 && i2 < 57343)
        return this.index = e2, this.getComplexIdentifier();
      if (!D$2.isIdentifierPart(i2))
        break;
      ++this.index;
    }
    return this.source.slice(e2, this.index);
  }
  getComplexIdentifier() {
    let e2, i2 = this.codePointAt(this.index), s2 = D$2.fromCodePoint(i2);
    for (this.index += s2.length, i2 === 92 && (this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), ++this.index, this.source[this.index] === "{" ? (++this.index, e2 = this.scanUnicodeCodePointEscape()) : (e2 = this.scanHexEscape("u"), e2 !== null && e2 !== "\\" && D$2.isIdentifierStart(e2.charCodeAt(0)) || this.throwUnexpectedToken()), s2 = e2); !this.eof() && (i2 = this.codePointAt(this.index), D$2.isIdentifierPart(i2)); )
      e2 = D$2.fromCodePoint(i2), s2 += e2, this.index += e2.length, i2 === 92 && (s2 = s2.substring(0, s2.length - 1), this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), ++this.index, this.source[this.index] === "{" ? (++this.index, e2 = this.scanUnicodeCodePointEscape()) : (e2 = this.scanHexEscape("u"), e2 !== null && e2 !== "\\" && D$2.isIdentifierPart(e2.charCodeAt(0)) || this.throwUnexpectedToken()), s2 += e2);
    return s2;
  }
  octalToDecimal(e2) {
    let i2 = e2 !== "0", s2 = d$1(e2);
    return !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)) && (i2 = true, s2 = 8 * s2 + d$1(this.source[this.index++]), "0123".includes(e2) && !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)) && (s2 = 8 * s2 + d$1(this.source[this.index++]))), { code: s2, octal: i2 };
  }
  scanIdentifier() {
    let e2;
    const t2 = this.index, i2 = this.source.charCodeAt(t2) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
    if (e2 = i2.length === 1 ? c.Identifier : this.isKeyword(i2) ? c.Keyword : i2.toLowerCase() === "null" ? c.NullLiteral : i2.toLowerCase() === "true" || i2.toLowerCase() === "false" ? c.BooleanLiteral : c.Identifier, e2 !== c.Identifier && t2 + i2.length !== this.index) {
      const e3 = this.index;
      this.index = t2, this.tolerateUnexpectedToken(l$2.InvalidEscapedReservedWord), this.index = e3;
    }
    return { type: e2, value: i2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t2, end: this.index };
  }
  scanPunctuator() {
    const e2 = this.index;
    let t2 = this.source[this.index];
    switch (t2) {
      case "(":
      case "{":
        t2 === "{" && this.curlyStack.push("{"), ++this.index;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        ++this.index;
        break;
      case "}":
        ++this.index, this.curlyStack.pop();
        break;
      default:
        for (let e3 = l$1.length; e3 > 0; e3--)
          if (t2 = this.source.substring(this.index, this.index + e3), l$1[e3 - 1].includes(t2)) {
            this.index += e3;
            break;
          }
    }
    return this.index === e2 && this.throwUnexpectedToken(), { type: c.Punctuator, value: t2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  scanHexLiteral(e2) {
    let i2 = "";
    for (; !this.eof() && D$2.isHexDigit(this.source.charCodeAt(this.index)); )
      i2 += this.source[this.index++];
    return i2.length === 0 && this.throwUnexpectedToken(), D$2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: c.NumericLiteral, value: parseInt("0x" + i2, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  scanBinaryLiteral(e2) {
    let i2 = "";
    for (; !this.eof(); ) {
      const e3 = this.source[this.index];
      if (e3 !== "0" && e3 !== "1")
        break;
      i2 += this.source[this.index++];
    }
    if (i2.length === 0 && this.throwUnexpectedToken(), !this.eof()) {
      const e3 = this.source.charCodeAt(this.index);
      (D$2.isIdentifierStart(e3) || D$2.isDecimalDigit(e3)) && this.throwUnexpectedToken();
    }
    return { type: c.NumericLiteral, value: parseInt(i2, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  scanOctalLiteral(e2, i2) {
    let s2 = "", n2 = false;
    for (D$2.isOctalDigit(e2.charCodeAt(0)) ? (n2 = true, s2 = "0" + this.source[this.index++]) : ++this.index; !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)); )
      s2 += this.source[this.index++];
    return n2 || s2.length !== 0 || this.throwUnexpectedToken(), (D$2.isIdentifierStart(this.source.charCodeAt(this.index)) || D$2.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: c.NumericLiteral, value: parseInt(s2, 8), lineNumber: this.lineNumber, lineStart: this.lineStart, start: i2, end: this.index };
  }
  scanNumericLiteral() {
    const i2 = this.index;
    let s2 = this.source[i2];
    r(D$2.isDecimalDigit(s2.charCodeAt(0)) || s2 === ".", "Numeric literal must start with a decimal digit or a decimal point");
    let n2 = "";
    if (s2 !== ".") {
      if (n2 = this.source[this.index++], s2 = this.source[this.index], n2 === "0") {
        if (s2 === "x" || s2 === "X")
          return ++this.index, this.scanHexLiteral(i2);
        if (s2 === "b" || s2 === "B")
          return ++this.index, this.scanBinaryLiteral(i2);
        if (s2 === "o" || s2 === "O")
          return this.scanOctalLiteral(s2, i2);
      }
      for (; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
        n2 += this.source[this.index++];
      s2 = this.source[this.index];
    }
    if (s2 === ".") {
      for (n2 += this.source[this.index++]; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
        n2 += this.source[this.index++];
      s2 = this.source[this.index];
    }
    if (s2 === "e" || s2 === "E")
      if (n2 += this.source[this.index++], s2 = this.source[this.index], s2 !== "+" && s2 !== "-" || (n2 += this.source[this.index++]), D$2.isDecimalDigit(this.source.charCodeAt(this.index)))
        for (; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
          n2 += this.source[this.index++];
      else
        this.throwUnexpectedToken();
    return D$2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: c.NumericLiteral, value: parseFloat(n2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: i2, end: this.index };
  }
  scanStringLiteral() {
    const i2 = this.index;
    let s2 = this.source[i2];
    r(s2 === "'" || s2 === '"', "String literal must starts with a quote"), ++this.index;
    let n2 = false, r$12 = "";
    for (; !this.eof(); ) {
      let e2 = this.source[this.index++];
      if (e2 === s2) {
        s2 = "";
        break;
      }
      if (e2 === "\\")
        if (e2 = this.source[this.index++], e2 && D$2.isLineTerminator(e2.charCodeAt(0)))
          ++this.lineNumber, e2 === "\r" && this.source[this.index] === "\n" && ++this.index, this.lineStart = this.index;
        else
          switch (e2) {
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, r$12 += this.scanUnicodeCodePointEscape();
              else {
                const t2 = this.scanHexEscape(e2);
                t2 === null && this.throwUnexpectedToken(), r$12 += t2;
              }
              break;
            case "x": {
              const t2 = this.scanHexEscape(e2);
              t2 === null && this.throwUnexpectedToken(l$2.InvalidHexEscapeSequence), r$12 += t2;
              break;
            }
            case "n":
              r$12 += "\n";
              break;
            case "r":
              r$12 += "\r";
              break;
            case "t":
              r$12 += "	";
              break;
            case "b":
              r$12 += "\b";
              break;
            case "f":
              r$12 += "\f";
              break;
            case "v":
              r$12 += "\v";
              break;
            case "8":
            case "9":
              r$12 += e2, this.tolerateUnexpectedToken();
              break;
            default:
              if (e2 && D$2.isOctalDigit(e2.charCodeAt(0))) {
                const t2 = this.octalToDecimal(e2);
                n2 = t2.octal || n2, r$12 += String.fromCharCode(t2.code);
              } else
                r$12 += e2;
          }
      else {
        if (D$2.isLineTerminator(e2.charCodeAt(0)))
          break;
        r$12 += e2;
      }
    }
    return s2 !== "" && (this.index = i2, this.throwUnexpectedToken()), { type: c.StringLiteral, value: r$12, lineNumber: this.lineNumber, lineStart: this.lineStart, start: i2, end: this.index };
  }
  scanTemplate() {
    let e2 = "", i2 = false;
    const s2 = this.index, n2 = this.source[s2] === "`";
    let r2 = false, h2 = 2;
    for (++this.index; !this.eof(); ) {
      let s3 = this.source[this.index++];
      if (s3 === "`") {
        h2 = 1, r2 = true, i2 = true;
        break;
      }
      if (s3 !== "$")
        if (s3 !== "\\")
          D$2.isLineTerminator(s3.charCodeAt(0)) ? (++this.lineNumber, s3 === "\r" && this.source[this.index] === "\n" && ++this.index, this.lineStart = this.index, e2 += "\n") : e2 += s3;
        else if (s3 = this.source[this.index++], D$2.isLineTerminator(s3.charCodeAt(0)))
          ++this.lineNumber, s3 === "\r" && this.source[this.index] === "\n" && ++this.index, this.lineStart = this.index;
        else
          switch (s3) {
            case "n":
              e2 += "\n";
              break;
            case "r":
              e2 += "\r";
              break;
            case "t":
              e2 += "	";
              break;
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, e2 += this.scanUnicodeCodePointEscape();
              else {
                const t2 = this.index, i3 = this.scanHexEscape(s3);
                i3 !== null ? e2 += i3 : (this.index = t2, e2 += s3);
              }
              break;
            case "x": {
              const t2 = this.scanHexEscape(s3);
              t2 === null && this.throwUnexpectedToken(l$2.InvalidHexEscapeSequence), e2 += t2;
              break;
            }
            case "b":
              e2 += "\b";
              break;
            case "f":
              e2 += "\f";
              break;
            case "v":
              e2 += "\v";
              break;
            default:
              s3 === "0" ? (D$2.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(l$2.TemplateOctalLiteral), e2 += "\0") : D$2.isOctalDigit(s3.charCodeAt(0)) ? this.throwUnexpectedToken(l$2.TemplateOctalLiteral) : e2 += s3;
          }
      else {
        if (this.source[this.index] === "{") {
          this.curlyStack.push("${"), ++this.index, i2 = true;
          break;
        }
        e2 += s3;
      }
    }
    return i2 || this.throwUnexpectedToken(), n2 || this.curlyStack.pop(), { type: c.Template, value: this.source.slice(s2 + 1, this.index - h2), cooked: e2, head: n2, tail: r2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: s2, end: this.index };
  }
  lex() {
    if (this.eof())
      return { type: c.EOF, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    const e2 = this.source.charCodeAt(this.index);
    return D$2.isIdentifierStart(e2) ? this.scanIdentifier() : e2 === 40 || e2 === 41 || e2 === 59 ? this.scanPunctuator() : e2 === 39 || e2 === 34 ? this.scanStringLiteral() : e2 === 46 ? D$2.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : D$2.isDecimalDigit(e2) ? this.scanNumericLiteral() : e2 === 96 || e2 === 125 && this.curlyStack[this.curlyStack.length - 1] === "${" ? this.scanTemplate() : e2 >= 55296 && e2 < 57343 && D$2.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
}
var x$1, k$1;
function w$1(t2, e2 = 0) {
  let r2 = t2.start - t2.lineStart, i2 = t2.lineNumber;
  return r2 < 0 && (r2 += e2, i2--), { index: t2.start, line: i2, column: r2 };
}
function g$1(t2) {
  return [__spreadValues({ index: t2.range[0] }, t2.loc.start), __spreadValues({ index: t2.range[1] }, t2.loc.end)];
}
function y(t2) {
  var _a;
  return (_a = o$2[t2]) != null ? _a : 0;
}
!function(t2) {
  t2[t2.None = 0] = "None", t2[t2.Function = 1] = "Function", t2[t2.IfClause = 2] = "IfClause", t2[t2.ForLoop = 4] = "ForLoop", t2[t2.WhileLoop = 8] = "WhileLoop";
}(x$1 || (x$1 = {})), function(t2) {
  t2[t2.AsObject = 0] = "AsObject", t2[t2.Automatic = 1] = "Automatic";
}(k$1 || (k$1 = {}));
class T$3 {
  constructor(r2, n2 = {}, a2) {
    this.delegate = a2, this.hasLineTerminator = false, this.options = { tokens: typeof n2.tokens == "boolean" && n2.tokens, comments: typeof n2.comments == "boolean" && n2.comments, tolerant: typeof n2.tolerant == "boolean" && n2.tolerant }, this.options.comments && (this.commentHandler = new o$1()), this.errorHandler = new e$1(this.options.tolerant), this.scanner = new u(r2, this.errorHandler), this.context = { isAssignmentTarget: false, blockContext: x$1.None, curlyParsingType: k$1.AsObject }, this.rawToken = { type: c.EOF, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.endMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.readNextRawToken(), this.endMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  throwIfInvalidType(t2, e2, { validTypes: r2, invalidTypes: i2 }) {
    (r2 == null ? void 0 : r2.some((e3) => t2.type === e3)) || (i2 == null ? void 0 : i2.some((e3) => t2.type === e3)) && this.throwError(l$2.InvalidExpression, e2);
  }
  throwError(t2, e2, r2 = this.endMarker) {
    const { index: i2, line: n2, column: s2 } = e2, a2 = r2.index - i2 - 1;
    this.errorHandler.throwError({ code: t2, index: i2, line: n2, column: s2 + 1, len: a2 });
  }
  tolerateError(t2, e2) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(t2 = {}) {
    const { rawToken: e2 } = t2;
    let i2, { code: n2, data: h2 } = t2;
    if (e2) {
      if (!n2)
        switch (e2.type) {
          case c.EOF:
            n2 = l$2.UnexpectedEndOfScript;
            break;
          case c.Identifier:
            n2 = l$2.UnexpectedIdentifier;
            break;
          case c.NumericLiteral:
            n2 = l$2.UnexpectedNumber;
            break;
          case c.StringLiteral:
            n2 = l$2.UnexpectedString;
            break;
          case c.Template:
            n2 = l$2.UnexpectedTemplate;
        }
      i2 = e2.value.toString();
    } else
      i2 = "ILLEGAL";
    n2 = n2 != null ? n2 : l$2.UnexpectedToken, h2 || (h2 = { value: i2 });
    const c$12 = o(n2, h2);
    if (e2) {
      const t3 = e2.start, r2 = e2.lineNumber, i3 = e2.start - e2.lineStart + 1;
      return new d$2({ code: n2, index: t3, line: r2, column: i3, len: e2.end - e2.start - 1, data: h2, description: c$12 });
    }
    const { index: p2, line: l2 } = this.endMarker;
    return new d$2({ code: n2, index: p2, line: l2, column: this.endMarker.column + 1, data: h2, description: c$12 });
  }
  throwUnexpectedToken(t2 = {}) {
    var _a;
    throw t2.rawToken = (_a = t2.rawToken) != null ? _a : this.rawToken, this.unexpectedTokenError(t2);
  }
  collectComments(t2) {
    const { commentHandler: e2 } = this;
    e2 && (t2 == null ? void 0 : t2.length) && t2.forEach((t3) => {
      const r2 = { type: t3.multiLine ? e$2.BlockComment : e$2.LineComment, value: this.getSourceValue(t3), range: t3.range, loc: t3.loc };
      e2.collectComment(r2);
    });
  }
  peekAhead(t2) {
    const e2 = () => (this.scanner.scanComments(), this.scanner.lex()), r2 = this.scanner.saveState(), i2 = t2.call(this, e2);
    return this.scanner.restoreState(r2), i2;
  }
  getSourceValue(t2) {
    return this.scanner.source.slice(t2.start, t2.end);
  }
  convertToToken(t2) {
    return { type: s$2[t2.type], value: this.getSourceValue(t2), range: [t2.start, t2.end], loc: { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } } };
  }
  readNextRawToken() {
    this.endMarker.index = this.scanner.index, this.endMarker.line = this.scanner.lineNumber, this.endMarker.column = this.scanner.index - this.scanner.lineStart;
    const t2 = this.rawToken;
    this.collectComments(this.scanner.scanComments()), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart), this.rawToken = this.scanner.lex(), this.hasLineTerminator = t2.lineNumber !== this.rawToken.lineNumber, this.options.tokens && this.rawToken.type !== c.EOF && this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  getItemLocation(t2) {
    return { range: [t2.index, this.endMarker.index], loc: { start: { line: t2.line, column: t2.column }, end: { line: this.endMarker.line, column: this.endMarker.column } } };
  }
  finalize(t2) {
    var _a, _b;
    return (this.delegate || this.commentHandler) && ((_a = this.commentHandler) == null ? void 0 : _a.attachComments(t2), (_b = this.delegate) == null ? void 0 : _b.call(this, t2)), t2;
  }
  expectPunctuator(t2) {
    const e2 = this.rawToken;
    this.matchPunctuator(t2) ? this.readNextRawToken() : this.throwUnexpectedToken({ rawToken: e2, code: l$2.PunctuatorExpected, data: { value: t2 } });
  }
  expectKeyword(t2) {
    this.rawToken.type !== c.Keyword || this.rawToken.value.toLowerCase() !== t2 ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  expectContextualKeyword(t2) {
    this.rawToken.type !== c.Identifier || this.rawToken.value.toLowerCase() !== t2 ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  matchKeyword(t2) {
    return this.rawToken.type === c.Keyword && this.rawToken.value.toLowerCase() === t2;
  }
  matchContextualKeyword(t2) {
    return this.rawToken.type === c.Identifier && this.rawToken.value === t2;
  }
  matchPunctuator(t2) {
    return this.rawToken.type === c.Punctuator && this.rawToken.value === t2;
  }
  getMatchingPunctuator(t2) {
    if (typeof t2 == "string" && (t2 = t2.split("")), this.rawToken.type === c.Punctuator && (t2 == null ? void 0 : t2.length))
      return t2.find(this.matchPunctuator, this);
  }
  isolateCoverGrammar(t2) {
    const e2 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    const r2 = t2.call(this);
    return this.context.isAssignmentTarget = e2, r2;
  }
  inheritCoverGrammar(t2) {
    const e2 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    const r2 = t2.call(this);
    return this.context.isAssignmentTarget = this.context.isAssignmentTarget && e2, r2;
  }
  withBlockContext(t2, e2) {
    const r2 = this.context.blockContext;
    this.context.blockContext = this.context.blockContext | t2;
    const i2 = this.context.curlyParsingType;
    this.context.curlyParsingType = k$1.Automatic;
    const n2 = e2.call(this);
    return this.context.blockContext = r2, this.context.curlyParsingType = i2, n2;
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";"))
      this.readNextRawToken();
    else if (!this.hasLineTerminator)
      return this.rawToken.type === c.EOF || this.matchPunctuator("}") ? (this.endMarker.index = this.startMarker.index, this.endMarker.line = this.startMarker.line, void (this.endMarker.column = this.startMarker.column)) : void this.throwUnexpectedToken({ rawToken: this.rawToken });
  }
  parsePrimaryExpression() {
    const t2 = this.captureStartMarker(), e2 = this.rawToken;
    switch (e2.type) {
      case c.Identifier:
        return this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Identifier, name: e2.value }, this.getItemLocation(t2)));
      case c.NumericLiteral:
      case c.StringLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Literal, value: e2.value, raw: this.getSourceValue(e2), isString: typeof e2.value == "string" }, this.getItemLocation(t2)));
      case c.BooleanLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Literal, value: e2.value.toLowerCase() === "true", raw: this.getSourceValue(e2), isString: false }, this.getItemLocation(t2)));
      case c.NullLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Literal, value: null, raw: this.getSourceValue(e2), isString: false }, this.getItemLocation(t2)));
      case c.Template:
        return this.parseTemplateLiteral();
      case c.Punctuator:
        switch (e2.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression);
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer);
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression);
          default:
            return this.throwUnexpectedToken({ rawToken: this.rawToken });
        }
      case c.Keyword:
        return this.context.isAssignmentTarget = false, this.throwUnexpectedToken({ rawToken: this.rawToken });
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseArrayInitializer() {
    const t2 = this.captureStartMarker();
    this.expectPunctuator("[");
    const e2 = [];
    for (; !this.matchPunctuator("]"); )
      this.matchPunctuator(",") ? (this.readNextRawToken(), e2.push(null)) : (e2.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.matchPunctuator("]") || this.expectPunctuator(","));
    return this.expectPunctuator("]"), this.finalize(__spreadValues({ type: e$2.ArrayExpression, elements: e2 }, this.getItemLocation(t2)));
  }
  parseObjectPropertyKey() {
    const t2 = this.captureStartMarker(), e2 = this.rawToken;
    switch (e2.type) {
      case c.StringLiteral:
        return this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Literal, value: e2.value, raw: this.getSourceValue(e2), isString: true }, this.getItemLocation(t2)));
      case c.Identifier:
      case c.BooleanLiteral:
      case c.NullLiteral:
      case c.Keyword:
        return this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Identifier, name: e2.value }, this.getItemLocation(t2)));
      default:
        this.throwError(l$2.KeyMustBeString, t2);
    }
  }
  parseObjectProperty() {
    const t2 = this.rawToken, e2 = this.captureStartMarker(), r2 = this.parseObjectPropertyKey();
    let i2 = false, n2 = null;
    return this.matchPunctuator(":") ? (this.readNextRawToken(), n2 = this.inheritCoverGrammar(this.parseAssignmentExpression)) : t2.type === c.Identifier ? (i2 = true, n2 = this.finalize(__spreadValues({ type: e$2.Identifier, name: t2.value }, this.getItemLocation(e2)))) : this.throwUnexpectedToken({ rawToken: this.rawToken }), this.finalize(__spreadValues({ type: e$2.Property, kind: "init", key: r2, value: n2, shorthand: i2 }, this.getItemLocation(e2)));
  }
  parseObjectExpression() {
    const t2 = this.captureStartMarker();
    this.expectPunctuator("{");
    const e2 = [];
    for (; !this.matchPunctuator("}"); )
      e2.push(this.parseObjectProperty()), this.matchPunctuator("}") || this.expectPunctuator(",");
    return this.expectPunctuator("}"), this.finalize(__spreadValues({ type: e$2.ObjectExpression, properties: e2 }, this.getItemLocation(t2)));
  }
  parseTemplateElement(t2 = false) {
    const e2 = this.rawToken;
    e2.type !== c.Template && this.throwUnexpectedToken({ rawToken: e2 }), t2 && !e2.head && this.throwUnexpectedToken({ code: l$2.InvalidTemplateHead, rawToken: e2 });
    const r2 = this.captureStartMarker();
    this.readNextRawToken();
    const { value: i2, cooked: n2, tail: o2 } = e2, c$12 = this.finalize(__spreadValues({ type: e$2.TemplateElement, value: { raw: i2, cooked: n2 }, tail: o2 }, this.getItemLocation(r2)));
    return c$12.loc.start.column++, c$12.loc.end.column = c$12.loc.end.column - (o2 ? 1 : 2), c$12;
  }
  parseTemplateLiteral() {
    const t2 = this.captureStartMarker(), e2 = [], r2 = [];
    let i2 = this.parseTemplateElement(true);
    for (r2.push(i2); !i2.tail; )
      e2.push(this.parseExpression()), i2 = this.parseTemplateElement(), r2.push(i2);
    return this.finalize(__spreadValues({ type: e$2.TemplateLiteral, quasis: r2, expressions: e2 }, this.getItemLocation(t2)));
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    const t2 = this.inheritCoverGrammar(this.parseAssignmentExpression);
    return this.expectPunctuator(")"), t2;
  }
  parseArguments() {
    this.expectPunctuator("(");
    const t2 = [];
    if (!this.matchPunctuator(")"))
      for (; ; ) {
        const e2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
        if (t2.push(e2), this.matchPunctuator(")"))
          break;
        if (this.expectPunctuator(","), this.matchPunctuator(")"))
          break;
      }
    return this.expectPunctuator(")"), t2;
  }
  parseMemberName() {
    const t2 = this.rawToken, e2 = this.captureStartMarker();
    return this.readNextRawToken(), t2.type !== c.NullLiteral && t2.type !== c.Identifier && t2.type !== c.Keyword && t2.type !== c.BooleanLiteral && this.throwUnexpectedToken({ rawToken: t2 }), this.finalize(__spreadValues({ type: e$2.Identifier, name: t2.value }, this.getItemLocation(e2)));
  }
  parseLeftHandSideExpression() {
    const t2 = this.captureStartMarker();
    let e2 = this.inheritCoverGrammar(this.parsePrimaryExpression);
    const r2 = this.captureStartMarker();
    let i2;
    for (; i2 = this.getMatchingPunctuator("([."); )
      switch (i2) {
        case "(": {
          this.context.isAssignmentTarget = false, e2.type !== e$2.Identifier && e2.type !== e$2.MemberExpression && this.throwError(l$2.IdentiferExpected, t2, r2);
          const i3 = this.parseArguments();
          e2 = this.finalize(__spreadValues({ type: e$2.CallExpression, callee: e2, arguments: i3 }, this.getItemLocation(t2)));
          continue;
        }
        case "[": {
          this.context.isAssignmentTarget = true, this.expectPunctuator("[");
          const r3 = this.isolateCoverGrammar(this.parseExpression);
          this.expectPunctuator("]"), e2 = this.finalize(__spreadValues({ type: e$2.MemberExpression, computed: true, object: e2, property: r3 }, this.getItemLocation(t2)));
          continue;
        }
        case ".": {
          this.context.isAssignmentTarget = true, this.expectPunctuator(".");
          const r3 = this.parseMemberName();
          e2 = this.finalize(__spreadValues({ type: e$2.MemberExpression, computed: false, object: e2, property: r3 }, this.getItemLocation(t2)));
          continue;
        }
      }
    return e2;
  }
  parseUpdateExpression() {
    const t2 = this.captureStartMarker();
    let e2 = this.getMatchingPunctuator(t$1);
    if (e2) {
      this.readNextRawToken();
      const r3 = this.captureStartMarker(), i3 = this.inheritCoverGrammar(this.parseUnaryExpression);
      return i3.type !== e$2.Identifier && i3.type !== e$2.MemberExpression && i3.type !== e$2.CallExpression && this.throwError(l$2.InvalidExpression, r3), this.context.isAssignmentTarget || this.tolerateError(l$2.InvalidLeftHandSideInAssignment, t2), this.context.isAssignmentTarget = false, this.finalize(__spreadValues({ type: e$2.UpdateExpression, operator: e2, argument: i3, prefix: true }, this.getItemLocation(t2)));
    }
    const r2 = this.captureStartMarker(), i2 = this.inheritCoverGrammar(this.parseLeftHandSideExpression), n2 = this.captureStartMarker();
    return this.hasLineTerminator ? i2 : (e2 = this.getMatchingPunctuator(t$1), e2 ? (i2.type !== e$2.Identifier && i2.type !== e$2.MemberExpression && this.throwError(l$2.InvalidExpression, r2, n2), this.context.isAssignmentTarget || this.tolerateError(l$2.InvalidLeftHandSideInAssignment, t2), this.readNextRawToken(), this.context.isAssignmentTarget = false, this.finalize(__spreadValues({ type: e$2.UpdateExpression, operator: e2, argument: i2, prefix: false }, this.getItemLocation(t2)))) : i2);
  }
  parseUnaryExpression() {
    const t2 = this.getMatchingPunctuator(n);
    if (t2) {
      const e2 = this.captureStartMarker();
      this.readNextRawToken();
      const r2 = this.inheritCoverGrammar(this.parseUnaryExpression);
      return this.context.isAssignmentTarget = false, this.finalize(__spreadValues({ type: e$2.UnaryExpression, operator: t2, argument: r2, prefix: true }, this.getItemLocation(e2)));
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    const t2 = this.rawToken;
    let e2 = this.inheritCoverGrammar(this.parseUnaryExpression);
    if (this.rawToken.type !== c.Punctuator)
      return e2;
    const r2 = this.rawToken.value;
    let i2 = y(r2);
    if (i2 === 0)
      return e2;
    this.readNextRawToken(), this.context.isAssignmentTarget = false;
    const n2 = [t2, this.rawToken];
    let a2 = e2, o2 = this.inheritCoverGrammar(this.parseUnaryExpression);
    const h2 = [a2, r2, o2], c$12 = [i2];
    for (; this.rawToken.type === c.Punctuator && (i2 = y(this.rawToken.value)) > 0; ) {
      for (; h2.length > 2 && i2 <= c$12[c$12.length - 1]; ) {
        o2 = h2.pop();
        const t3 = h2.pop();
        c$12.pop(), a2 = h2.pop(), n2.pop();
        const e3 = n2[n2.length - 1], r3 = w$1(e3, e3.lineStart);
        h2.push(this.finalize(this.createBinaryOrLogicalExpression(r3, t3, a2, o2)));
      }
      h2.push(this.rawToken.value), c$12.push(i2), n2.push(this.rawToken), this.readNextRawToken(), h2.push(this.inheritCoverGrammar(this.parseUnaryExpression));
    }
    let p2 = h2.length - 1;
    e2 = h2[p2];
    let l2 = n2.pop();
    for (; p2 > 1; ) {
      const t3 = n2.pop();
      if (!t3)
        break;
      const r3 = l2 == null ? void 0 : l2.lineStart, i3 = w$1(t3, r3), s2 = h2[p2 - 1];
      e2 = this.finalize(this.createBinaryOrLogicalExpression(i3, s2, h2[p2 - 2], e2)), p2 -= 2, l2 = t3;
    }
    return e2;
  }
  createBinaryOrLogicalExpression(t2, e2, r2, i2) {
    const n2 = r$1.includes(e2) ? e$2.LogicalExpression : e$2.BinaryExpression;
    return n2 === e$2.BinaryExpression || (r2.type !== e$2.AssignmentExpression && r2.type !== e$2.UpdateExpression || this.throwError(l$2.InvalidExpression, ...g$1(r2)), i2.type !== e$2.AssignmentExpression && i2.type !== e$2.UpdateExpression || this.throwError(l$2.InvalidExpression, ...g$1(r2))), __spreadValues({ type: n2, operator: e2, left: r2, right: i2 }, this.getItemLocation(t2));
  }
  parseAssignmentExpression() {
    const t2 = this.captureStartMarker(), e2 = this.inheritCoverGrammar(this.parseBinaryExpression), r2 = this.captureStartMarker(), i2 = this.getMatchingPunctuator(i$1);
    if (!i2)
      return e2;
    e2.type !== e$2.Identifier && e2.type !== e$2.MemberExpression && this.throwError(l$2.InvalidExpression, t2, r2), this.context.isAssignmentTarget || this.tolerateError(l$2.InvalidLeftHandSideInAssignment, t2), this.matchPunctuator("=") || (this.context.isAssignmentTarget = false), this.readNextRawToken();
    const n2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
    return this.finalize(__spreadValues({ type: e$2.AssignmentExpression, left: e2, operator: i2, right: n2 }, this.getItemLocation(t2)));
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression);
  }
  parseStatements(t2 = null) {
    const e2 = [];
    for (; this.rawToken.type !== c.EOF && !this.matchPunctuator(t2); ) {
      const t3 = this.parseStatementListItem();
      y$1(t3) || e2.push(t3);
    }
    return e2;
  }
  parseStatementListItem() {
    return this.context.isAssignmentTarget = true, this.matchKeyword("function") ? this.parseFunctionDeclaration() : this.matchKeyword("export") ? this.parseExportDeclaration() : this.matchKeyword("import") ? this.parseImportDeclaration() : this.parseStatement();
  }
  parseBlock() {
    const t2 = this.captureStartMarker();
    this.expectPunctuator("{");
    const e2 = this.parseStatements("}");
    return this.expectPunctuator("}"), this.finalize(__spreadValues({ type: e$2.BlockStatement, body: e2 }, this.getItemLocation(t2)));
  }
  parseObjectStatement() {
    const t2 = this.captureStartMarker(), e2 = this.parseObjectExpression();
    return this.finalize(__spreadValues({ type: e$2.ExpressionStatement, expression: e2 }, this.getItemLocation(t2)));
  }
  parseBlockOrObjectStatement() {
    if (this.context.curlyParsingType === k$1.AsObject)
      return this.parseObjectStatement();
    return this.peekAhead((t2) => {
      let e2 = t2();
      return (e2.type === c.Identifier || e2.type === c.StringLiteral) && (e2 = t2(), e2.type === c.Punctuator && e2.value === ":");
    }) ? this.parseObjectStatement() : this.parseBlock();
  }
  parseIdentifier() {
    const t2 = this.rawToken;
    if (t2.type !== c.Identifier)
      return null;
    const e2 = this.captureStartMarker();
    return this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Identifier, name: t2.value }, this.getItemLocation(e2)));
  }
  parseVariableDeclarator() {
    const t2 = this.captureStartMarker(), e2 = this.parseIdentifier();
    e2 || this.throwUnexpectedToken({ code: l$2.IdentiferExpected });
    let r2 = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      const t3 = this.rawToken;
      try {
        r2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
      } catch (i2) {
        this.throwUnexpectedToken({ rawToken: t3, code: l$2.InvalidVariableAssignment });
      }
    }
    return this.finalize(__spreadValues({ type: e$2.VariableDeclarator, id: e2, init: r2 }, this.getItemLocation(t2)));
  }
  parseVariableDeclarationList() {
    const t2 = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); )
      this.readNextRawToken(), t2.push(this.parseVariableDeclarator());
    return t2;
  }
  parseVariableDeclaration() {
    const t2 = this.captureStartMarker();
    this.expectKeyword("var");
    const e2 = this.parseVariableDeclarationList();
    return this.consumeSemicolon(), this.finalize(__spreadValues({ type: e$2.VariableDeclaration, declarations: e2, kind: "var" }, this.getItemLocation(t2)));
  }
  parseEmptyStatement() {
    const t2 = this.captureStartMarker();
    return this.expectPunctuator(";"), this.finalize(__spreadValues({ type: e$2.EmptyStatement }, this.getItemLocation(t2)));
  }
  parseExpressionStatement() {
    const t2 = this.captureStartMarker(), e2 = this.parseExpression();
    return this.consumeSemicolon(), this.finalize(__spreadValues({ type: e$2.ExpressionStatement, expression: e2 }, this.getItemLocation(t2)));
  }
  parseIfClause() {
    return this.withBlockContext(x$1.IfClause, this.parseStatement);
  }
  parseIfStatement() {
    const t2 = this.captureStartMarker();
    this.expectKeyword("if"), this.expectPunctuator("(");
    const e2 = this.captureStartMarker(), r2 = this.parseExpression(), i2 = this.captureStartMarker();
    this.expectPunctuator(")"), r2.type !== e$2.AssignmentExpression && r2.type !== e$2.UpdateExpression || this.throwError(l$2.InvalidExpression, e2, i2);
    const n2 = this.parseIfClause();
    let s2 = null;
    return this.matchKeyword("else") && (this.readNextRawToken(), s2 = this.parseIfClause()), this.finalize(__spreadValues({ type: e$2.IfStatement, test: r2, consequent: n2, alternate: s2 }, this.getItemLocation(t2)));
  }
  parseWhileStatement() {
    const t2 = this.captureStartMarker();
    this.expectKeyword("while"), this.expectPunctuator("(");
    const e2 = this.captureStartMarker(), r2 = this.parseExpression(), i2 = this.captureStartMarker();
    this.expectPunctuator(")"), r2.type !== e$2.AssignmentExpression && r2.type !== e$2.UpdateExpression || this.throwError(l$2.InvalidExpression, e2, i2);
    const n2 = this.withBlockContext(x$1.WhileLoop, this.parseStatement);
    return this.finalize(__spreadValues({ type: e$2.WhileStatement, test: r2, body: n2 }, this.getItemLocation(t2)));
  }
  parseForStatement() {
    let t2 = null, e2 = null, r2 = null, i2 = null, n2 = null;
    const s2 = this.captureStartMarker();
    if (this.expectKeyword("for"), this.expectPunctuator("("), this.matchPunctuator(";"))
      this.readNextRawToken();
    else if (this.matchKeyword("var")) {
      const e3 = this.captureStartMarker();
      this.readNextRawToken();
      const r3 = this.parseVariableDeclarationList();
      if (r3.length === 1 && this.matchKeyword("in")) {
        r3[0].init && this.throwError(l$2.ForInOfLoopInitializer, e3), i2 = this.finalize(__spreadValues({ type: e$2.VariableDeclaration, declarations: r3, kind: "var" }, this.getItemLocation(e3))), this.readNextRawToken(), n2 = this.parseExpression();
      } else
        this.matchKeyword("in") && this.throwError(l$2.InvalidLeftHandSideInForIn, e3), t2 = this.finalize(__spreadValues({ type: e$2.VariableDeclaration, declarations: r3, kind: "var" }, this.getItemLocation(e3))), this.expectPunctuator(";");
    } else {
      const e3 = this.context.isAssignmentTarget, r3 = this.captureStartMarker();
      t2 = this.inheritCoverGrammar(this.parseAssignmentExpression), this.matchKeyword("in") ? (this.context.isAssignmentTarget || this.tolerateError(l$2.InvalidLeftHandSideInForIn, r3), t2.type !== e$2.Identifier && this.throwError(l$2.InvalidLeftHandSideInForIn, r3), this.readNextRawToken(), i2 = t2, n2 = this.parseExpression(), t2 = null) : (this.context.isAssignmentTarget = e3, this.expectPunctuator(";"));
    }
    i2 || (this.matchPunctuator(";") || (e2 = this.isolateCoverGrammar(this.parseExpression)), this.expectPunctuator(";"), this.matchPunctuator(")") || (r2 = this.isolateCoverGrammar(this.parseExpression))), this.expectPunctuator(")");
    const o2 = this.withBlockContext(x$1.ForLoop, () => this.isolateCoverGrammar(this.parseStatement));
    return i2 && n2 ? this.finalize(__spreadValues({ type: e$2.ForInStatement, left: i2, right: n2, body: o2 }, this.getItemLocation(s2))) : this.finalize(__spreadValues({ type: e$2.ForStatement, init: t2, test: e2, update: r2, body: o2 }, this.getItemLocation(s2)));
  }
  parseContinueStatement() {
    const t2 = this.captureStartMarker();
    return this.expectKeyword("continue"), this.consumeSemicolon(), this.finalize(__spreadValues({ type: e$2.ContinueStatement }, this.getItemLocation(t2)));
  }
  parseBreakStatement() {
    const t2 = this.captureStartMarker();
    return this.expectKeyword("break"), this.consumeSemicolon(), this.finalize(__spreadValues({ type: e$2.BreakStatement }, this.getItemLocation(t2)));
  }
  parseReturnStatement() {
    const t2 = this.captureStartMarker();
    this.expectKeyword("return");
    const e2 = !this.matchPunctuator(";") && !this.matchPunctuator("}") && !this.hasLineTerminator && this.rawToken.type !== c.EOF || this.rawToken.type === c.StringLiteral || this.rawToken.type === c.Template ? this.parseExpression() : null;
    return this.consumeSemicolon(), this.finalize(__spreadValues({ type: e$2.ReturnStatement, argument: e2 }, this.getItemLocation(t2)));
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case c.BooleanLiteral:
      case c.NullLiteral:
      case c.NumericLiteral:
      case c.StringLiteral:
      case c.Template:
      case c.Identifier:
        return this.parseExpressionStatement();
      case c.Punctuator:
        return this.rawToken.value === "{" ? this.parseBlockOrObjectStatement() : this.rawToken.value === "(" ? this.parseExpressionStatement() : this.rawToken.value === ";" ? this.parseEmptyStatement() : this.parseExpressionStatement();
      case c.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case "break":
            return this.parseBreakStatement();
          case "continue":
            return this.parseContinueStatement();
          case "for":
            return this.parseForStatement();
          case "function":
            return this.parseFunctionDeclaration();
          case "if":
            return this.parseIfStatement();
          case "return":
            return this.parseReturnStatement();
          case "var":
            return this.parseVariableDeclaration();
          case "while":
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseFormalParameters() {
    const t2 = [];
    if (this.expectPunctuator("("), !this.matchPunctuator(")"))
      for (; this.rawToken.type !== c.EOF; ) {
        const e2 = this.parseIdentifier();
        if (e2 || this.throwUnexpectedToken({ rawToken: this.rawToken, code: l$2.IdentiferExpected }), t2.push(e2), this.matchPunctuator(")"))
          break;
        if (this.expectPunctuator(","), this.matchPunctuator(")"))
          break;
      }
    return this.expectPunctuator(")"), t2;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & x$1.Function) === x$1.Function && this.throwUnexpectedToken({ code: l$2.NoFunctionInsideFunction }), (this.context.blockContext & x$1.WhileLoop) !== x$1.WhileLoop && (this.context.blockContext & x$1.IfClause) !== x$1.IfClause || this.throwUnexpectedToken({ code: l$2.NoFunctionInsideBlock });
    const t2 = this.captureStartMarker();
    this.expectKeyword("function");
    const e2 = this.parseIdentifier();
    e2 || this.throwUnexpectedToken({ code: l$2.InvalidFunctionIdentifier });
    const r2 = this.parseFormalParameters(), i2 = this.context.blockContext;
    this.context.blockContext = this.context.blockContext | x$1.Function;
    const n2 = this.parseBlock();
    return this.context.blockContext = i2, this.finalize(__spreadValues({ type: e$2.FunctionDeclaration, id: e2, params: r2, body: n2 }, this.getItemLocation(t2)));
  }
  parseScript() {
    const t2 = this.captureStartMarker(), e2 = this.parseStatements(), r2 = this.finalize(__spreadValues({ type: e$2.Program, body: e2 }, this.getItemLocation(t2)));
    return this.options.tokens && (r2.tokens = this.tokens), this.options.tolerant && (r2.errors = this.errorHandler.errors), r2;
  }
  parseExportDeclaration() {
    this.context.blockContext !== x$1.None && this.throwUnexpectedToken({ code: l$2.ModuleExportRootOnly });
    let t2 = null;
    const e2 = this.captureStartMarker();
    return this.expectKeyword("export"), this.matchKeyword("var") ? t2 = this.parseVariableDeclaration() : this.matchKeyword("function") ? t2 = this.parseFunctionDeclaration() : this.throwUnexpectedToken({ code: l$2.InvalidExpression }), this.finalize(__spreadValues({ type: e$2.ExportNamedDeclaration, declaration: t2, specifiers: [], source: null }, this.getItemLocation(e2)));
  }
  parseModuleSpecifier() {
    const t2 = this.captureStartMarker(), e2 = this.rawToken;
    if (e2.type === c.StringLiteral)
      return this.readNextRawToken(), this.finalize(__spreadValues({ type: e$2.Literal, value: e2.value, raw: this.getSourceValue(e2), isString: true }, this.getItemLocation(t2)));
    this.throwError(l$2.InvalidModuleUri, t2);
  }
  parseDefaultSpecifier() {
    const t2 = this.captureStartMarker(), e2 = this.parseIdentifier();
    return e2 || this.throwUnexpectedToken({ code: l$2.InvalidFunctionIdentifier }), this.finalize(__spreadValues({ type: e$2.ImportDefaultSpecifier, local: e2 }, this.getItemLocation(t2)));
  }
  parseImportDeclaration() {
    this.context.blockContext !== x$1.None && this.throwUnexpectedToken({ code: l$2.ModuleImportRootOnly });
    const t2 = this.captureStartMarker();
    this.expectKeyword("import");
    const e2 = this.parseDefaultSpecifier();
    this.expectContextualKeyword("from");
    const r2 = this.parseModuleSpecifier();
    return this.finalize(__spreadValues({ type: e$2.ImportDeclaration, specifiers: [e2], source: r2 }, this.getItemLocation(t2)));
  }
}
function s$1(r2, s2, t2) {
  return new T$3(r2, s2, t2).parseScript();
}
function d(d2, l2 = []) {
  const r2 = s$1(d2);
  if (r2.body === null || r2.body === void 0)
    throw new d$2({ index: 0, line: 0, column: 0, data: null, description: "", code: l$2.InvalidExpression });
  if (r2.body.length === 0)
    throw new d$2({ index: 0, line: 0, column: 0, data: null, description: "", code: l$2.InvalidExpression });
  if (r2.body.length === 0)
    throw new d$2({ index: 0, line: 0, column: 0, data: null, description: "", code: l$2.InvalidExpression });
  return r2.loadedModules = {}, d$6(r2, l2), r2;
}
class e {
  constructor(e2) {
    const s2 = this;
    s2._keys = [], s2._values = [], s2.length = 0, e2 && e2.forEach((e3) => {
      s2.set(e3[0], e3[1]);
    });
  }
  entries() {
    return [].slice.call(this.keys().map((e2, s2) => [e2, this._values[s2]]));
  }
  keys() {
    return [].slice.call(this._keys);
  }
  values() {
    return [].slice.call(this._values);
  }
  has(e2) {
    return this._keys.includes(e2);
  }
  get(e2) {
    const s2 = this._keys.indexOf(e2);
    return s2 > -1 ? this._values[s2] : null;
  }
  deepGet(s2) {
    if (!s2 || !s2.length)
      return null;
    const t2 = (s3, i2) => s3 == null ? null : i2.length ? t2(s3 instanceof e ? s3.get(i2[0]) : s3[i2[0]], i2.slice(1)) : s3;
    return t2(this.get(s2[0]), s2.slice(1));
  }
  set(e2, s2) {
    const t2 = this, i2 = this._keys.indexOf(e2);
    return i2 > -1 ? t2._values[i2] = s2 : (t2._keys.push(e2), t2._values.push(s2), t2.length = t2._values.length), this;
  }
  sortedSet(e2, s2, t2, i2) {
    const h2 = this, l2 = this._keys.length, r2 = t2 || 0, n2 = i2 !== void 0 ? i2 : l2 - 1;
    if (l2 === 0)
      return h2._keys.push(e2), h2._values.push(s2), h2;
    if (e2 === this._keys[r2])
      return this._values.splice(r2, 0, s2), this;
    if (e2 === this._keys[n2])
      return this._values.splice(n2, 0, s2), this;
    if (e2 > this._keys[n2])
      return this._keys.splice(n2 + 1, 0, e2), this._values.splice(n2 + 1, 0, s2), this;
    if (e2 < this._keys[r2])
      return this._values.splice(r2, 0, s2), this._keys.splice(r2, 0, e2), this;
    if (r2 >= n2)
      return this;
    const u2 = r2 + Math.floor((n2 - r2) / 2);
    return e2 < this._keys[u2] ? this.sortedSet(e2, s2, r2, u2 - 1) : e2 > this._keys[u2] ? this.sortedSet(e2, s2, u2 + 1, n2) : this;
  }
  size() {
    return this.length;
  }
  clear() {
    const e2 = this;
    return e2._keys.length = e2.length = e2._values.length = 0, this;
  }
  delete(e2) {
    const s2 = this, t2 = s2._keys.indexOf(e2);
    return t2 > -1 && (s2._keys.splice(t2, 1), s2._values.splice(t2, 1), s2.length = s2._keys.length, true);
  }
  forEach(e2) {
    this._keys.forEach((s2, t2) => {
      e2(this._values[t2], s2, t2);
    });
  }
  map(e2) {
    return this.keys().map((s2, t2) => e2(this._values[t2], s2, t2));
  }
  filter(e2) {
    const s2 = this;
    return s2._keys.forEach((t2, i2) => {
      e2(s2._values[i2], t2, i2) === false && s2.delete(t2);
    }), this;
  }
  clone() {
    return new e(this.entries());
  }
}
class s {
  constructor(s2 = 20) {
    this._maxEntries = s2, this._values = new e();
  }
  delete(e2) {
    this._values.has(e2) && this._values.delete(e2);
  }
  get(e2) {
    let s2 = null;
    return this._values.has(e2) && (s2 = this._values.get(e2), this._values.delete(e2), this._values.set(e2, s2)), s2;
  }
  put(e2, s2) {
    if (this._values.size() >= this._maxEntries) {
      const e3 = this._values.keys()[0];
      this._values.delete(e3);
    }
    this._values.set(e2, s2);
  }
}
class t {
  constructor(e2 = 20) {
    this._maxEntries = e2, this._cache = new s(this._maxEntries);
  }
  clear() {
    this._cache = new s(this._maxEntries);
  }
  addToCache(e2, s2) {
    this._cache.put(e2, s2);
  }
  removeFromCache(e2) {
    this._cache.delete(e2);
  }
  getFromCache(e2) {
    return this._cache.get(e2);
  }
}
class l {
  constructor(e2) {
    this.portalUri = e2;
  }
  normalizeModuleUri(e2) {
    const r2 = /^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([\?|\/].*)?$/gi, o2 = /(?<portalurl>.+)\/home\/item\.html\?id\=(?<itemid>.+)$/gi, c2 = /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi, u2 = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi, n2 = /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([\?|\/].*)?$/gi;
    if (e2.startsWith("portal+")) {
      let l2 = e2.substring(7), a2 = "", m2 = l2, d2 = false;
      for (const e3 of [o2, u2, c2]) {
        const t2 = e3.exec(l2);
        if (t2 !== null) {
          const e4 = t2.groups;
          m2 = e4.itemid, a2 = e4.portalurl, d2 = true;
          break;
        }
      }
      if (d2 === false) {
        if (!r2.test(l2))
          throw new p$5(l$a.UnsupportedUriProtocol, { uri: e2 });
        m2 = l2, a2 = this.portalUri;
      }
      m2.includes("/") && (m2 = m2.split("/")[0]), m2.includes("?") && (m2 = m2.split("?")[0]);
      let h2 = "current";
      const p2 = n2.exec(m2);
      if (p2 !== null) {
        const e3 = p2.groups;
        m2 = e3.itemid, h2 = e3.versionstring;
      }
      return l2 = new j$3({ url: a2 }).restUrl + "/content/items/" + m2 + "/resources/" + h2 + ".arc", { url: l2, scheme: "portal", uri: "PO:" + l2 };
    }
    if (e2.startsWith("mock")) {
      if (e2 === "mock") {
        return { url: "", scheme: "mock", data: '\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ', uri: "mock" };
      }
      const t2 = e2.replace("mock:", "");
      if (l.mocks[t2] !== void 0)
        return { url: "", scheme: "mock", data: l.mocks[t2], uri: e2 };
    }
    throw new p$5(l$a.UnrecognisedUri, { uri: e2 });
  }
  async fetchModule(e2) {
    const t2 = l.cachedModules.getFromCache(e2.uri);
    if (t2)
      return t2;
    const r2 = this.fetchSource(e2);
    l.cachedModules.addToCache(e2.uri, r2);
    let o2 = null;
    try {
      o2 = await r2;
    } catch (s2) {
      throw l.cachedModules.removeFromCache(e2.uri), s2;
    }
    return o2;
  }
  async fetchSource(t2) {
    var _a;
    if (t2.scheme === "portal") {
      const o2 = await U$4(t2.url, { responseType: "text", query: {} });
      if (o2.data)
        return d(o2.data, []);
    }
    if (t2.scheme === "mock")
      return d((_a = t2.data) != null ? _a : "", []);
    throw new p$5(l$a.UnsupportedUriProtocol);
  }
  static create(e2) {
    return new l(e2);
  }
  static getDefault() {
    var _a;
    return (_a = this._default) != null ? _a : l._default = l._moduleResolverFactory();
  }
  static set moduleResolverClass(e2) {
    this._moduleResolverFactory = e2, this._default = null;
  }
}
l.mocks = {}, l.cachedModules = new t(30), l._default = null, l._moduleResolverFactory = () => {
  const e2 = j$3.getDefault();
  return new l(e2.url);
};
class P$2 extends r$6 {
  constructor(e2, t2) {
    super(), this.definition = null, this.context = null, this.definition = e2, this.context = t2;
  }
  createFunction(e2) {
    return (...t2) => {
      const n2 = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e2.depthCounter.depth + 1 }, globalScope: this.context.globalScope };
      if (n2.depthCounter.depth > 64)
        throw new t$7(e2, e$8.MaximumCallDepth, null);
      return Ie(this.definition, n2, t2, null);
    };
  }
  call(e2, t2) {
    return V$2(e2, t2, (n2, l2, a2) => {
      const i2 = { spatialReference: e2.spatialReference, globalScope: e2.globalScope, depthCounter: { depth: e2.depthCounter.depth + 1 }, libraryResolver: e2.libraryResolver, exports: e2.exports, console: e2.console, lrucache: e2.lrucache, interceptor: e2.interceptor, localScope: {} };
      if (i2.depthCounter.depth > 64)
        throw new t$7(e2, e$8.MaximumCallDepth, t2);
      return Ie(this.definition, i2, a2, t2);
    });
  }
  marshalledCall(e2, t2, n2, r2) {
    return r2(e2, t2, (o2, l2, a2) => {
      const i2 = { spatialReference: e2.spatialReference, globalScope: n2.globalScope, depthCounter: { depth: e2.depthCounter.depth + 1 }, libraryResolver: e2.libraryResolver, exports: e2.exports, console: e2.console, lrucache: e2.lrucache, interceptor: e2.interceptor, localScope: {} };
      return a2 = a2.map((t3) => !F$3(t3) || t3 instanceof s$b ? t3 : n$5(t3, e2, r2)), n$5(Ie(this.definition, i2, a2, t2), n2, r2);
    });
  }
}
class T$2 extends s$9 {
  constructor(e2) {
    super(e2);
  }
  global(e2) {
    const t2 = this.executingContext.globalScope[e2.toLowerCase()];
    if (t2.valueset || (t2.value = _$2(this.executingContext, t2.node), t2.valueset = true), F$3(t2.value) && !(t2.value instanceof s$b)) {
      const e3 = new s$b();
      e3.fn = t2.value, e3.parameterEvaluator = V$2, e3.context = this.executingContext, t2.value = e3;
    }
    return t2.value;
  }
  setGlobal(e2, t2) {
    if (F$3(t2))
      throw new t$7(null, e$8.AssignModuleFunction, null);
    this.executingContext.globalScope[e2.toLowerCase()] = { value: t2, valueset: true, node: null };
  }
  hasGlobal(e2) {
    return this.executingContext.exports[e2] === void 0 && (e2 = e2.toLowerCase()), this.executingContext.exports[e2] !== void 0;
  }
  loadModule(e2) {
    let n2 = e2.spatialReference;
    n2 == null && (n2 = new k$4({ wkid: 102100 })), this.moduleScope = Ce({}, e2.customfunctions), this.executingContext = { spatialReference: n2, globalScope: this.moduleScope, localScope: null, libraryResolver: new s$3(e2.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, console: e2.console ? e2.console : Ae, lrucache: e2.lrucache, interceptor: e2.interceptor, depthCounter: { depth: 1 } }, _$2(this.executingContext, this.source.syntax);
  }
}
function W$2(e2, t2) {
  const n2 = [];
  for (let r2 = 0; r2 < t2.arguments.length; r2++)
    n2.push(_$2(e2, t2.arguments[r2]));
  return n2;
}
function V$2(e2, t2, n2) {
  try {
    return t2.preparsed === true ? n2(e2, null, t2.arguments) : n2(e2, t2, W$2(e2, t2));
  } catch (r2) {
    throw r2;
  }
}
function _$2(e2, t2) {
  try {
    switch (t2 == null ? void 0 : t2.type) {
      case "EmptyStatement":
        return k$3;
      case "VariableDeclarator":
        return ue(e2, t2);
      case "VariableDeclaration":
        return se$1(e2, t2);
      case "ImportDeclaration":
        return ae(e2, t2);
      case "ExportNamedDeclaration":
        return ie$1(e2, t2);
      case "BlockStatement":
      case "Program":
        return re$2(e2, t2);
      case "FunctionDeclaration":
        return le(e2, t2);
      case "ReturnStatement":
        return oe$1(e2, t2);
      case "IfStatement":
        return ne$2(e2, t2);
      case "ExpressionStatement":
        return te$2(e2, t2);
      case "AssignmentExpression":
        return ee$2(e2, t2);
      case "UpdateExpression":
        return Z$2(e2, t2);
      case "BreakStatement":
        return j$2;
      case "ContinueStatement":
        return A$4;
      case "TemplateElement":
        return we(e2, t2);
      case "TemplateLiteral":
        return ge(e2, t2);
      case "ForStatement":
        return J$2(e2, t2);
      case "ForInStatement":
        return H$2(e2, t2);
      case "WhileStatement":
        return Q$2(e2, t2);
      case "Identifier":
        return ve(e2, t2);
      case "MemberExpression":
        return ce(e2, t2);
      case "Literal":
        return t2.value;
      case "CallExpression":
        return ye(e2, t2);
      case "UnaryExpression":
        return fe(e2, t2);
      case "BinaryExpression":
        return de(e2, t2);
      case "LogicalExpression":
        return he(e2, t2);
      case "ArrayExpression":
        return pe(e2, t2);
      case "ObjectExpression":
        return Y$2(e2, t2);
      case "Property":
        return z$1(e2, t2);
      default:
        throw new t$7(e2, e$8.Unrecognised, t2);
    }
  } catch (n2) {
    throw u$6(e2, t2, n2);
  }
}
function Y$2(e2, t2) {
  const l2 = {}, a2 = new Map();
  for (let n2 = 0; n2 < t2.properties.length; n2++) {
    const i3 = _$2(e2, t2.properties[n2]);
    if (F$3(i3.value))
      throw new t$7(e2, e$8.NoFunctionInDictionary, t2);
    if (w$6(i3.key) === false)
      throw new t$7(e2, e$8.KeyMustBeString, t2);
    let s2 = i3.key.toString();
    const u2 = s2.toLowerCase();
    a2.has(u2) ? s2 = a2.get(u2) : a2.set(u2, s2), i3.value === k$3 ? l2[s2] = null : l2[s2] = i3.value;
  }
  const i2 = new J$5(l2);
  return i2.immutable = false, i2;
}
function z$1(e2, t2) {
  return { key: t2.key.type === "Identifier" ? t2.key.name : _$2(e2, t2.key), value: _$2(e2, t2.value) };
}
function H$2(e2, t2) {
  const l2 = _$2(e2, t2.right);
  t2.left.type === "VariableDeclaration" && _$2(e2, t2.left);
  let a2 = null, i2 = "";
  if (t2.left.type === "VariableDeclaration") {
    const e3 = t2.left.declarations[0].id;
    e3.type === "Identifier" && (i2 = e3.name);
  } else
    t2.left.type === "Identifier" && (i2 = t2.left.name);
  if (!i2)
    throw new t$7(e2, e$8.InvalidIdentifier, t2);
  if (i2 = i2.toLowerCase(), e2.localScope != null && e2.localScope[i2] !== void 0 && (a2 = e2.localScope[i2]), a2 === null && e2.globalScope[i2] !== void 0 && (a2 = e2.globalScope[i2]), a2 === null)
    throw new t$7(e2, e$8.InvalidIdentifier, t2);
  if (Y$5(l2) || w$6(l2)) {
    const n2 = l2.length;
    for (let r2 = 0; r2 < n2; r2++) {
      a2.value = r2;
      const n3 = _$2(e2, t2.body);
      if (n3 === j$2)
        break;
      if (n3 instanceof D$6)
        return n3;
    }
    return k$3;
  }
  if (E$3(l2)) {
    for (let n2 = 0; n2 < l2.length(); n2++) {
      a2.value = n2;
      const r2 = _$2(e2, t2.body);
      if (r2 === j$2)
        break;
      if (r2 instanceof D$6)
        return r2;
    }
    return k$3;
  }
  if (!(l2 instanceof J$5 || J$6(l2)))
    return k$3;
  {
    const n2 = l2.keys();
    for (let r2 = 0; r2 < n2.length; r2++) {
      a2.value = n2[r2];
      const o2 = _$2(e2, t2.body);
      if (o2 === j$2)
        break;
      if (o2 instanceof D$6)
        return o2;
    }
  }
}
function J$2(e2, t2) {
  t2.init !== null && _$2(e2, t2.init);
  const n2 = { testResult: true, lastAction: k$3 };
  do {
    X$2(e2, t2, n2);
  } while (n2.testResult === true);
  return n2.lastAction instanceof D$6 ? n2.lastAction : k$3;
}
function Q$2(e2, t2) {
  const n2 = { testResult: true, lastAction: k$3 };
  if (n2.testResult = _$2(e2, t2.test), n2.testResult === false)
    return k$3;
  if (n2.testResult !== true)
    throw new t$7(e2, e$8.BooleanConditionRequired, t2);
  for (; n2.testResult === true && (n2.lastAction = _$2(e2, t2.body), n2.lastAction !== j$2) && !(n2.lastAction instanceof D$6); )
    if (n2.testResult = _$2(e2, t2.test), n2.testResult !== true && n2.testResult !== false)
      throw new t$7(e2, e$8.BooleanConditionRequired, t2);
  return n2.lastAction instanceof D$6 ? n2.lastAction : k$3;
}
function X$2(e2, t2, n2) {
  if (t2.test !== null) {
    if (n2.testResult = _$2(e2, t2.test), n2.testResult === false)
      return;
    if (n2.testResult !== true)
      throw new t$7(e2, e$8.BooleanConditionRequired, t2);
  }
  n2.lastAction = _$2(e2, t2.body), n2.lastAction !== j$2 ? n2.lastAction instanceof D$6 ? n2.testResult = false : t2.update !== null && _$2(e2, t2.update) : n2.testResult = false;
}
function Z$2(e2, t2) {
  let l2, a2 = null, i2 = "";
  if (t2.argument.type === "MemberExpression") {
    if (a2 = _$2(e2, t2.argument.object), t2.argument.computed === true ? i2 = _$2(e2, t2.argument.property) : t2.argument.property.type === "Identifier" && (i2 = t2.argument.property.name), Y$5(a2)) {
      if (!Z$7(i2))
        throw new t$7(e2, e$8.ArrayAccessorMustBeNumber, t2);
      if (i2 < 0 && (i2 = a2.length + i2), i2 < 0 || i2 >= a2.length)
        throw new t$7(e2, e$8.OutOfBounds, t2);
      l2 = re$5(a2[i2]), a2[i2] = t2.operator === "++" ? l2 + 1 : l2 - 1;
    } else if (a2 instanceof J$5) {
      if (w$6(i2) === false)
        throw new t$7(e2, e$8.KeyAccessorMustBeString, t2);
      if (a2.hasField(i2) !== true)
        throw new t$7(e2, e$8.FieldNotFound, t2);
      l2 = re$5(a2.field(i2)), a2.setField(i2, t2.operator === "++" ? l2 + 1 : l2 - 1);
    } else if (J$6(a2)) {
      if (w$6(i2) === false)
        throw new t$7(e2, e$8.KeyAccessorMustBeString, t2);
      if (a2.hasField(i2) !== true)
        throw new t$7(e2, e$8.FieldNotFound, t2);
      l2 = re$5(a2.field(i2)), a2.setField(i2, t2.operator === "++" ? l2 + 1 : l2 - 1);
    } else {
      if (E$3(a2))
        throw new t$7(e2, e$8.Immutable, t2);
      if (!(a2 instanceof T$2))
        throw new t$7(e2, e$8.InvalidParameter, t2);
      if (w$6(i2) === false)
        throw new t$7(e2, e$8.ModuleAccessorMustBeString, t2);
      if (a2.hasGlobal(i2) !== true)
        throw new t$7(e2, e$8.ModuleExportNotFound, t2);
      l2 = re$5(a2.global(i2)), a2.setGlobal(i2, t2.operator === "++" ? l2 + 1 : l2 - 1);
    }
    return t2.prefix === false ? l2 : t2.operator === "++" ? l2 + 1 : l2 - 1;
  }
  if (a2 = t2.argument.type === "Identifier" ? t2.argument.name.toLowerCase() : "", !a2)
    throw new t$7(e2, e$8.InvalidIdentifier, t2);
  if (e2.localScope != null && e2.localScope[a2] !== void 0)
    return l2 = re$5(e2.localScope[a2].value), e2.localScope[a2] = { value: t2.operator === "++" ? l2 + 1 : l2 - 1, valueset: true, node: t2 }, t2.prefix === false ? l2 : t2.operator === "++" ? l2 + 1 : l2 - 1;
  if (e2.globalScope[a2] !== void 0)
    return l2 = re$5(e2.globalScope[a2].value), e2.globalScope[a2] = { value: t2.operator === "++" ? l2 + 1 : l2 - 1, valueset: true, node: t2 }, t2.prefix === false ? l2 : t2.operator === "++" ? l2 + 1 : l2 - 1;
  throw new t$7(e2, e$8.InvalidIdentifier, t2);
}
function $$1(e2, t2, n2, l2, a2) {
  switch (t2) {
    case "=":
      return e2 === k$3 ? null : e2;
    case "/=":
      return re$5(n2) / re$5(e2);
    case "*=":
      return re$5(n2) * re$5(e2);
    case "-=":
      return re$5(n2) - re$5(e2);
    case "+=":
      return w$6(n2) || w$6(e2) ? K$3(n2) + K$3(e2) : re$5(n2) + re$5(e2);
    case "%=":
      return re$5(n2) % re$5(e2);
    default:
      throw new t$7(a2, e$8.UnsupportedOperator, l2);
  }
}
function ee$2(e2, t2) {
  const l2 = _$2(e2, t2.right);
  let a2 = null, i2 = "";
  if (t2.left.type === "MemberExpression") {
    if (a2 = _$2(e2, t2.left.object), t2.left.computed === true)
      i2 = _$2(e2, t2.left.property);
    else {
      if (t2.left.property.type !== "Identifier")
        throw new t$7(e2, e$8.InvalidIdentifier, t2);
      i2 = t2.left.property.name;
    }
    if (Y$5(a2)) {
      if (!Z$7(i2))
        throw new t$7(e2, e$8.ArrayAccessorMustBeNumber, t2);
      if (i2 < 0 && (i2 = a2.length + i2), i2 < 0 || i2 > a2.length)
        throw new t$7(e2, e$8.OutOfBounds, t2);
      if (i2 === a2.length) {
        if (t2.operator !== "=")
          throw new t$7(e2, e$8.OutOfBounds, t2);
        a2[i2] = $$1(l2, t2.operator, a2[i2], t2, e2);
      } else
        a2[i2] = $$1(l2, t2.operator, a2[i2], t2, e2);
    } else if (a2 instanceof J$5) {
      if (w$6(i2) === false)
        throw new t$7(e2, e$8.KeyAccessorMustBeString, t2);
      if (a2.hasField(i2) === true)
        a2.setField(i2, $$1(l2, t2.operator, a2.field(i2), t2, e2));
      else {
        if (t2.operator !== "=")
          throw new t$7(e2, e$8.FieldNotFound, t2, { key: i2 });
        a2.setField(i2, $$1(l2, t2.operator, null, t2, e2));
      }
    } else if (J$6(a2)) {
      if (w$6(i2) === false)
        throw new t$7(e2, e$8.KeyAccessorMustBeString, t2);
      if (a2.hasField(i2) === true)
        a2.setField(i2, $$1(l2, t2.operator, a2.field(i2), t2, e2));
      else {
        if (t2.operator !== "=")
          throw new t$7(e2, e$8.FieldNotFound, t2, { key: i2 });
        a2.setField(i2, $$1(l2, t2.operator, null, t2, e2));
      }
    } else {
      if (E$3(a2))
        throw new t$7(e2, e$8.Immutable, t2);
      if (!(a2 instanceof T$2))
        throw new t$7(e2, e$8.InvalidIdentifier, t2);
      if (w$6(i2) === false)
        throw new t$7(e2, e$8.ModuleAccessorMustBeString, t2);
      if (a2.hasGlobal(i2) !== true)
        throw new t$7(e2, e$8.ModuleExportNotFound, t2);
      a2.setGlobal(i2, $$1(l2, t2.operator, a2.global(i2), t2, e2));
    }
    return k$3;
  }
  if (a2 = t2.left.name.toLowerCase(), e2.localScope != null && e2.localScope[a2] !== void 0)
    return e2.localScope[a2] = { value: $$1(l2, t2.operator, e2.localScope[a2].value, t2, e2), valueset: true, node: t2.right }, k$3;
  if (e2.globalScope[a2] !== void 0)
    return e2.globalScope[a2] = { value: $$1(l2, t2.operator, e2.globalScope[a2].value, t2, e2), valueset: true, node: t2.right }, k$3;
  throw new t$7(e2, e$8.InvalidIdentifier, t2);
}
function te$2(e2, t2) {
  if (t2.expression.type === "AssignmentExpression" || t2.expression.type === "UpdateExpression")
    return _$2(e2, t2.expression);
  if (t2.expression.type === "CallExpression") {
    const n2 = _$2(e2, t2.expression);
    return n2 === k$3 ? k$3 : new N$5(n2);
  }
  {
    const n2 = _$2(e2, t2.expression);
    return n2 === k$3 ? k$3 : new N$5(n2);
  }
}
function ne$2(e2, t2) {
  const n2 = _$2(e2, t2.test);
  if (n2 === true)
    return _$2(e2, t2.consequent);
  if (n2 === false)
    return t2.alternate !== null ? _$2(e2, t2.alternate) : k$3;
  throw new t$7(e2, e$8.BooleanConditionRequired, t2);
}
function re$2(e2, t2) {
  let n2 = k$3;
  for (let r2 = 0; r2 < t2.body.length; r2++)
    if (n2 = _$2(e2, t2.body[r2]), n2 instanceof D$6 || n2 === j$2 || n2 === A$4)
      return n2;
  return n2;
}
function oe$1(e2, t2) {
  if (t2.argument === null)
    return new D$6(k$3);
  const n2 = _$2(e2, t2.argument);
  return new D$6(n2);
}
function le(e2, t2) {
  const n2 = t2.id.name.toLowerCase();
  return e2.globalScope[n2] = { valueset: true, node: null, value: new P$2(t2, e2) }, k$3;
}
function ae(e2, t2) {
  var _a, _b;
  const n2 = t2.specifiers[0].local.name.toLowerCase(), r2 = e2.libraryResolver.loadLibrary(n2);
  let o2 = null;
  return ((_a = e2.libraryResolver._moduleSingletons) == null ? void 0 : _a.has(r2.uri)) ? o2 = e2.libraryResolver._moduleSingletons.get(r2.uri) : (o2 = new T$2(r2), o2.loadModule(e2), (_b = e2.libraryResolver._moduleSingletons) == null ? void 0 : _b.set(r2.uri, o2)), e2.globalScope[n2] = { value: o2, valueset: true, node: t2 }, k$3;
}
function ie$1(e2, t2) {
  if (_$2(e2, t2.declaration), t2.declaration.type === "FunctionDeclaration")
    e2.exports[t2.declaration.id.name.toLowerCase()] = "function";
  else if (t2.declaration.type === "VariableDeclaration")
    for (const n2 of t2.declaration.declarations)
      e2.exports[n2.id.name.toLowerCase()] = "variable";
  return k$3;
}
function se$1(e2, t2) {
  for (let n2 = 0; n2 < t2.declarations.length; n2++)
    _$2(e2, t2.declarations[n2]);
  return k$3;
}
function ue(e2, t2) {
  let n2 = t2.init === null ? null : _$2(e2, t2.init);
  if (n2 === k$3 && (n2 = null), t2.id.type !== "Identifier")
    throw new t$7(e2, e$8.InvalidIdentifier, t2);
  const l2 = t2.id.name.toLowerCase();
  return e2.localScope != null ? e2.localScope[l2] = { value: n2, valueset: true, node: t2.init } : e2.globalScope[l2] = { value: n2, valueset: true, node: t2.init }, k$3;
}
function ce(e2, t2) {
  try {
    const l2 = _$2(e2, t2.object);
    if (l2 === null)
      throw new t$7(e2, e$8.MemberOfNull, t2);
    if (t2.computed === false) {
      if (t2.property.type === "Identifier") {
        if (l2 instanceof J$5 || J$6(l2))
          return l2.field(t2.property.name);
        if (l2 instanceof p$6)
          return W$6(l2, t2.property.name, t2, e2);
        if (l2 instanceof T$2) {
          if (!l2.hasGlobal(t2.property.name))
            throw new t$7(e2, e$8.InvalidIdentifier, t2);
          return l2.global(t2.property.name);
        }
      }
      throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
    }
    {
      let a2 = _$2(e2, t2.property);
      if (l2 instanceof J$5 || J$6(l2)) {
        if (w$6(a2))
          return l2.field(a2);
        throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
      }
      if (l2 instanceof T$2) {
        if (w$6(a2))
          return l2.global(a2);
        throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
      }
      if (l2 instanceof p$6) {
        if (w$6(a2))
          return W$6(l2, a2, t2, e2);
        throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
      }
      if (Y$5(l2)) {
        if (Z$7(a2) && isFinite(a2) && Math.floor(a2) === a2) {
          if (a2 < 0 && (a2 = l2.length + a2), a2 >= l2.length || a2 < 0)
            throw new t$7(e2, e$8.OutOfBounds, t2);
          return l2[a2];
        }
        throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
      }
      if (w$6(l2)) {
        if (Z$7(a2) && isFinite(a2) && Math.floor(a2) === a2) {
          if (a2 < 0 && (a2 = l2.length + a2), a2 >= l2.length || a2 < 0)
            throw new t$7(e2, e$8.OutOfBounds, t2);
          return l2[a2];
        }
        throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
      }
      if (E$3(l2)) {
        if (Z$7(a2) && isFinite(a2) && Math.floor(a2) === a2) {
          if (a2 < 0 && (a2 = l2.length() + a2), a2 >= l2.length() || a2 < 0)
            throw new t$7(e2, e$8.OutOfBounds, t2);
          return l2.get(a2);
        }
        throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
      }
      throw new t$7(e2, e$8.InvalidMemberAccessKey, t2);
    }
  } catch (l2) {
    throw l2;
  }
}
function fe(e2, t2) {
  try {
    const n2 = _$2(e2, t2.argument);
    if (_$4(n2)) {
      if (t2.operator === "!")
        return !n2;
      if (t2.operator === "-")
        return -1 * re$5(n2);
      if (t2.operator === "+")
        return 1 * re$5(n2);
      if (t2.operator === "~")
        return ~re$5(n2);
      throw new t$7(e2, e$8.UnsupportedUnaryOperator, t2);
    }
    if (t2.operator === "~")
      return ~re$5(n2);
    if (t2.operator === "-")
      return -1 * re$5(n2);
    if (t2.operator === "+")
      return 1 * re$5(n2);
    throw new t$7(e2, e$8.UnsupportedUnaryOperator, t2);
  } catch (n2) {
    throw n2;
  }
}
function pe(e2, t2) {
  try {
    const n2 = [];
    for (let l2 = 0; l2 < t2.elements.length; l2++) {
      const a2 = _$2(e2, t2.elements[l2]);
      if (F$3(a2))
        throw new t$7(e2, e$8.NoFunctionInArray, t2);
      a2 === k$3 ? n2.push(null) : n2.push(a2);
    }
    return n2;
  } catch (n2) {
    throw n2;
  }
}
function de(e2, t2) {
  try {
    const n2 = [_$2(e2, t2.left), _$2(e2, t2.right)], l2 = n2[0], a2 = n2[1];
    switch (t2.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Ne$1(re$5(l2), re$5(a2), t2.operator);
      case "==":
        return X$5(l2, a2);
      case "!=":
        return !X$5(l2, a2);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return Q$5(l2, a2, t2.operator);
      case "+":
        return w$6(l2) || w$6(a2) ? K$3(l2) + K$3(a2) : re$5(l2) + re$5(a2);
      case "-":
        return re$5(l2) - re$5(a2);
      case "*":
        return re$5(l2) * re$5(a2);
      case "/":
        return re$5(l2) / re$5(a2);
      case "%":
        return re$5(l2) % re$5(a2);
      default:
        throw new t$7(e2, e$8.UnsupportedOperator, t2);
    }
  } catch (n2) {
    throw n2;
  }
}
function he(e2, t2) {
  try {
    const n2 = _$2(e2, t2.left);
    if (_$4(n2))
      switch (t2.operator) {
        case "||":
          if (n2 === true)
            return n2;
          {
            const n3 = _$2(e2, t2.right);
            if (_$4(n3))
              return n3;
            throw new t$7(e2, e$8.LogicExpressionOrAnd, t2);
          }
        case "&&":
          if (n2 === false)
            return n2;
          {
            const n3 = _$2(e2, t2.right);
            if (_$4(n3))
              return n3;
            throw new t$7(e2, e$8.LogicExpressionOrAnd, t2);
          }
        default:
          throw new t$7(e2, e$8.LogicExpressionOrAnd, t2);
      }
    throw new t$7(e2, e$8.LogicalExpressionOnlyBoolean, t2);
  } catch (n2) {
    throw n2;
  }
}
function we(e2, t2) {
  return t2.value ? t2.value.cooked : "";
}
function me(e2, t2, n2) {
  if (F$3(e2))
    throw new t$7(t2, e$8.NoFunctionInTemplateLiteral, n2);
  return e2;
}
function ge(e2, t2) {
  let n2 = "", r2 = 0;
  for (const o2 of t2.quasis)
    if (n2 += o2.value ? o2.value.cooked : "", o2.tail === false) {
      n2 += t2.expressions[r2] ? K$3(me(_$2(e2, t2.expressions[r2]), e2, t2)) : "", r2++;
    }
  return n2;
}
function ve(e2, t2) {
  let n2;
  try {
    const l2 = t2.name.toLowerCase();
    if (e2.localScope != null && e2.localScope[l2] !== void 0)
      return n2 = e2.localScope[l2], n2.valueset === true || (n2.value = _$2(e2, n2.node), n2.valueset = true), n2.value;
    if (e2.globalScope[l2] !== void 0)
      return n2 = e2.globalScope[l2], n2.valueset === true || (n2.value = _$2(e2, n2.node), n2.valueset = true), n2.value;
    throw new t$7(e2, e$8.InvalidIdentifier, t2);
  } catch (l2) {
    throw l2;
  }
}
function ye(e2, t2) {
  try {
    if (t2.callee.type === "MemberExpression") {
      const n2 = _$2(e2, t2.callee.object);
      if (!(n2 instanceof T$2))
        throw new t$7(e2, e$8.FuncionNotFound, t2);
      const l2 = t2.callee.computed === false ? t2.callee.property.name : _$2(e2, t2.callee.property);
      if (!n2.hasGlobal(l2))
        throw new t$7(e2, e$8.FuncionNotFound, t2);
      const a2 = n2.global(l2);
      if (!F$3(a2))
        throw new t$7(e2, e$8.CallNonFunction, t2);
      return a2.call(e2, t2);
    }
    if (t2.callee.type !== "Identifier")
      throw new t$7(e2, e$8.FuncionNotFound, t2);
    if (e2.localScope != null && e2.localScope[t2.callee.name.toLowerCase()] !== void 0) {
      const n2 = e2.localScope[t2.callee.name.toLowerCase()];
      if (F$3(n2.value))
        return n2.value.call(e2, t2);
      throw new t$7(e2, e$8.CallNonFunction, t2);
    }
    if (e2.globalScope[t2.callee.name.toLowerCase()] !== void 0) {
      const n2 = e2.globalScope[t2.callee.name.toLowerCase()];
      if (F$3(n2.value))
        return n2.value.call(e2, t2);
      throw new t$7(e2, e$8.CallNonFunction, t2);
    }
    throw new t$7(e2, e$8.FuncionNotFound, t2);
  } catch (n2) {
    throw n2;
  }
}
const be = {};
function xe(e2, t2, n2, r2) {
  try {
    const o2 = _$2(e2, t2.arguments[n2]);
    if (X$5(o2, r2))
      return _$2(e2, t2.arguments[n2 + 1]);
    {
      const o3 = t2.arguments.length - n2;
      return o3 === 1 ? _$2(e2, t2.arguments[n2]) : o3 === 2 ? null : o3 === 3 ? _$2(e2, t2.arguments[n2 + 2]) : xe(e2, t2, n2 + 2, r2);
    }
  } catch (o2) {
    throw o2;
  }
}
function Se(e2, t2, n2, l2) {
  try {
    if (l2 === true)
      return _$2(e2, t2.arguments[n2 + 1]);
    if (t2.arguments.length - n2 === 3)
      return _$2(e2, t2.arguments[n2 + 2]);
    {
      const l3 = _$2(e2, t2.arguments[n2 + 2]);
      if (_$4(l3) === false)
        throw new t$7(e2, e$8.BooleanConditionRequired, t2.arguments[n2 + 2]);
      return Se(e2, t2, n2 + 2, l3);
    }
  } catch (a2) {
    throw a2;
  }
}
function Ie(e2, t2, n2, l2) {
  try {
    const a2 = e2.body;
    if (n2.length !== e2.params.length)
      throw new t$7(t2, e$8.WrongNumberOfParameters, l2);
    if (t2.localScope != null)
      for (let r2 = 0; r2 < n2.length; r2++)
        t2.localScope[e2.params[r2].name.toLowerCase()] = { value: n2[r2], valueset: true, node: null };
    const i2 = _$2(t2, a2);
    if (i2 instanceof D$6)
      return i2.value;
    if (i2 === j$2)
      throw new t$7(t2, e$8.UnexpectedToken, l2);
    if (i2 === A$4)
      throw new t$7(t2, e$8.UnexpectedToken, l2);
    return i2 instanceof N$5 ? i2.value : i2;
  } catch (a2) {
    throw a2;
  }
}
M$5(be, V$2), B$2(be, V$2), N$3(be, V$2), C$3(be, V$2), f(be, V$2), q$3(be, V$2), be.iif = function(e2, t2) {
  try {
    V$5(t2.arguments === null ? [] : t2.arguments, 3, 3, e2, t2);
    const n2 = _$2(e2, t2.arguments[0]);
    if (_$4(n2) === false)
      throw new t$7(e2, e$8.BooleanConditionRequired, t2);
    return _$2(e2, n2 === true ? t2.arguments[1] : t2.arguments[2]);
  } catch (n2) {
    throw n2;
  }
}, be.decode = function(e2, t2) {
  try {
    if (t2.arguments.length < 2)
      throw new t$7(e2, e$8.WrongNumberOfParameters, t2);
    if (t2.arguments.length === 2)
      return _$2(e2, t2.arguments[1]);
    {
      if ((t2.arguments.length - 1) % 2 == 0)
        throw new t$7(e2, e$8.WrongNumberOfParameters, t2);
      const n2 = _$2(e2, t2.arguments[0]);
      return xe(e2, t2, 1, n2);
    }
  } catch (n2) {
    throw n2;
  }
}, be.when = function(e2, t2) {
  try {
    if (t2.arguments.length < 3)
      throw new t$7(e2, e$8.WrongNumberOfParameters, t2);
    if (t2.arguments.length % 2 == 0)
      throw new t$7(e2, e$8.WrongNumberOfParameters, t2);
    const n2 = _$2(e2, t2.arguments[0]);
    if (_$4(n2) === false)
      throw new t$7(e2, e$8.BooleanConditionRequired, t2.arguments[0]);
    return Se(e2, t2, 0, n2);
  } catch (n2) {
    throw n2;
  }
};
for (const Le2 in be)
  be[Le2] = { value: new e$7(be[Le2]), valueset: true, node: null };
const Fe = function() {
};
function Ce(e2, t2) {
  const r2 = new Fe();
  e2 || (e2 = {}), t2 || (t2 = {});
  const o2 = new J$5({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o2.immutable = false, r2.textformatting = { value: o2, valueset: true, node: null };
  for (const n2 in t2)
    r2[n2] = { value: new e$7(t2[n2]), native: true, valueset: true, node: null };
  for (const n2 in e2)
    e2[n2] && e2[n2].declaredClass === "esri.Graphic" ? r2[n2] = { value: g$4.createFromGraphic(e2[n2]), valueset: true, node: null } : r2[n2] = { value: e2[n2], valueset: true, node: null };
  return r2;
}
Fe.prototype = be, Fe.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: true, node: null }, Fe.prototype.pi = { value: Math.PI, valueset: true, node: null };
function Ae(e2) {
  console.log(e2);
}
function Me(e2) {
  const t2 = { mode: "sync", compiled: false, functions: {}, signatures: [], standardFunction: V$2, evaluateIdentifier: ve };
  for (let n2 = 0; n2 < e2.length; n2++)
    e2[n2].registerFunctions(t2);
  for (const n2 in t2.functions)
    be[n2] = { value: new e$7(t2.functions[n2]), valueset: true, node: null }, Fe.prototype[n2] = be[n2];
  for (let n2 = 0; n2 < t2.signatures.length; n2++)
    o$4(t2.signatures[n2], "sync");
}
function Ee(e2, n2) {
  let l2 = n2.spatialReference;
  l2 == null && (l2 = new k$4({ wkid: 102100 }));
  let a2 = null;
  e2.usesModules && (a2 = new s$3(new Map(), e2.loadedModules));
  const i2 = { spatialReference: l2, globalScope: Ce(n2.vars, n2.customfunctions), localScope: null, exports: {}, libraryResolver: a2, console: n2.console ? n2.console : Ae, lrucache: n2.lrucache, interceptor: n2.interceptor, depthCounter: { depth: 1 } };
  let s2 = _$2(i2, e2);
  if (s2 instanceof D$6 && (s2 = s2.value), s2 instanceof N$5 && (s2 = s2.value), s2 === k$3 && (s2 = null), s2 === j$2)
    throw new t$7(i2, e$8.IllegalResult, null);
  if (s2 === A$4)
    throw new t$7(i2, e$8.IllegalResult, null);
  if (F$3(s2))
    throw new t$7(i2, e$8.IllegalResult, null);
  return s2;
}
Me([m$4]);
const b = ["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "isselfintersecting", "ringisclockwise"];
function g() {
  return true;
}
const A$1 = g();
let w = false, h = false, j = null, x = [];
function M$1(t2, r2) {
  if (r2.useAsync === true || t2.isAsync === true)
    return F(t2, r2);
  if (has("esri-csp-restrictions")) {
    return function(e2) {
      return Ee(t2, e2);
    };
  }
  try {
    return Le(t2, r2);
  } catch (n2) {
    if (n2.declaredRootClass === "esri.arcade.arcadeuncompilableerror")
      return function(e2) {
        return Ee(t2, e2);
      };
    throw n2;
  }
}
function F(t2, r2) {
  if (j === null)
    throw new t$7(null, e$8.AsyncNotEnabled, null);
  if (has("esri-csp-restrictions") || A$1 === false) {
    return function(e2) {
      return j.executeScript(t2, e2);
    };
  }
  try {
    return Le(t2, r2, true);
  } catch (n2) {
    if (n2.declaredRootClass === "esri.arcade.arcadeuncompilableerror")
      return function(e2) {
        return j.executeScript(t2, e2);
      };
    throw n2;
  }
}
function E(e2) {
  Me(e2), Ee$1(e2, "sync"), j === null ? x.push(e2) : (Ee$1(e2, "async"), j.extend(e2));
}
function G$1(e2, t2 = []) {
  return d(e2, t2);
}
function v(e2, t2, r2 = []) {
  return U$1(d(e2, r2), t2);
}
function U$1(e2, t2) {
  if (t2.useAsync === true || e2.isAsync === true) {
    if (j === null)
      throw new t$7(null, e$8.AsyncNotEnabled, null);
    return j.executeScript(e2, t2);
  }
  return Ee(e2, t2);
}
function _$1(e2, t2) {
  return c$4(e2, t2);
}
function I$1(e2, t2) {
  return p$3(e2, t2);
}
function R(e2, t2 = false) {
  return t2 === void 0 && (t2 = false), l$7(e2);
}
function C$1(e2) {
  return u$5(e2);
}
function D$1(e2, t2 = []) {
  return e2.usesGeometry === void 0 && d$6(e2, t2), e2.usesGeometry === true;
}
let P$1 = null;
function k() {
  return P$1 || (P$1 = z(), P$1);
}
async function z() {
  const [e2, t2] = await Promise.all([import("./geometryEngine.js"), Promise.resolve().then(function() {
    return geomsync;
  })]);
  return h = true, t2.setGeometryEngine(e2), true;
}
let L$1 = null;
function N$1() {
  return L$1 !== null || (L$1 = O$1()), L$1;
}
async function O$1() {
  await Re(), j = await import("./arcadeAsyncRuntime.js");
  for (const e2 of x)
    j.extend(e2), Ee$1(e2, "async");
  return x = null, true;
}
function T$1() {
  return w;
}
function q$1() {
  return !!j;
}
function B$1() {
  return h;
}
let H$1 = null;
function J$1() {
  return H$1 || (H$1 = K$1(), H$1);
}
async function K$1() {
  await N$1();
  const [e2, r2, n2, s2, u2] = await Promise.all([import("./featureSetUtils.js").then(function(n3) {
    return n3.h;
  }), import("./featuresetbase.js"), import("./featuresetgeom.js"), import("./featuresetstats.js"), import("./featuresetstring.js")]);
  return te$1 = e2, j.extend([r2, n2, s2, u2]), Ee$1([r2, n2, s2, u2], "async"), w = true, true;
}
function Q$1(e2, t2 = []) {
  return e2.usesFeatureSet === void 0 && d$6(e2, t2), e2.usesFeatureSet === true;
}
function V$1(e2, t2 = []) {
  return e2.isAsync === void 0 && d$6(e2, t2), e2.isAsync === true;
}
function W$1(e2, t2) {
  if (t2) {
    for (const r2 of t2)
      if (_$1(e2, r2))
        return true;
    return false;
  }
  return false;
}
async function X$1(e2, t2, r2 = [], n2 = false, s2 = null) {
  return Y$1(new Set(), e2, t2, r2, n2, s2);
}
async function Y$1(e2, t2, r2, n2 = [], s2 = false, u2 = null) {
  const a2 = typeof t2 == "string" ? G$1(t2) : t2, o2 = [];
  return a2 && (B$1() === false && (D$1(a2) || s2) && o2.push(k()), q$1() === false && (a2.isAsync === true || r2) && o2.push(N$1()), T$1() === false && (Q$1(a2) || W$1(a2, n2)) && o2.push(J$1())), o2.length && await Promise.all(o2), await $(e2, a2, u2, r2, s2), true;
}
function Z$1(e2, t2 = []) {
  return e2.usesModules === void 0 && d$6(e2, t2), e2.usesModules === true;
}
async function $(e2, t2, r2 = null, s2 = false, u2 = false) {
  const i2 = x$5(t2);
  r2 === null && i2.length > 0 && (r2 = l.getDefault()), t2.loadedModules = {};
  for (const n2 of i2) {
    c$7(r2);
    const i3 = r2.normalizeModuleUri(n2.source);
    if (e2.has(i3.uri))
      throw new t$7(null, e$8.CircularModules, null);
    e2.add(i3.uri);
    const c2 = await r2.fetchModule(i3);
    await Y$1(e2, c2, s2, [], u2, r2), e2.delete(i3.uri), c2.isAsync && (t2.isAsync = true), c2.usesFeatureSet && (t2.usesFeatureSet = true), c2.usesGeometry && (t2.usesGeometry = true), t2.loadedModules[n2.libname] = { uri: i3.uri, script: c2 };
  }
}
function ee$1(e2) {
  if (D$1(e2))
    return true;
  const t2 = y$5(e2);
  let r2 = false;
  for (let n2 = 0; n2 < t2.length; n2++)
    if (b.includes(t2[n2])) {
      r2 = true;
      break;
    }
  return r2;
}
let te$1 = null;
function re$1() {
  return te$1;
}
const ne$1 = Object.freeze(Object.defineProperty({ __proto__: null, compileScript: M$1, extend: E, parseScript: G$1, parseAndExecuteScript: v, executeScript: U$1, referencesMember: _$1, referencesFunction: I$1, extractFieldLiterals: R, extractExpectedFieldLiterals: C$1, scriptUsesGeometryEngine: D$1, enableGeometrySupport: k, enableGeometrySupportImpl: z, enableAsyncSupport: N$1, enableAsyncSupportImpl: O$1, isFeatureSetSupportEnabled: T$1, isAsyncEnabled: q$1, isGeometryEnabled: B$1, enableFeatureSetSupport: J$1, enableFeatureSetSupportImpl: K$1, scriptUsesFeatureSet: Q$1, scriptIsAsync: V$1, loadScriptDependencies: X$1, _loadScriptDependenciesImpl: Y$1, scriptUsesModules: Z$1, loadDependentModules: $, scriptTouchesGeometry: ee$1, featureSetUtils: re$1 }, Symbol.toStringTag, { value: "Module" }));
const C = /^\$(feature|aggregatedFeatures)\./i, M = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function P(e2) {
  return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function I(e2) {
  return e2 == null ? null : Y$5(e2) || E$3(e2) ? "array" : z$6(e2) ? "date" : w$6(e2) ? "text" : _$4(e2) ? "boolean" : Z$7(e2) ? "number" : e2 instanceof J$5 ? "dictionary" : J$6(e2) ? "feature" : e2 instanceof w$7 ? "point" : e2 instanceof v$4 ? "polygon" : e2 instanceof m$7 ? "polyline" : e2 instanceof u$7 ? "multipoint" : e2 instanceof w$8 ? "extent" : P$5(e2) ? "featureSet" : G$3(e2) ? "featureSetCollection" : null;
}
function A(r2) {
  if (!r2)
    return null;
  try {
    return G$1(r2);
  } catch (n2) {
  }
  return null;
}
function D(e2, n2) {
  const t2 = typeof e2 == "string" ? A(e2) : e2;
  if (!t2)
    return null;
  try {
    return n2 = n2 || y$8(M), M$1(t2, n2);
  } catch (o2) {
  }
  return null;
}
function G(e2, r2) {
  return { vars: { $feature: e2 == null ? new g$4() : g$4.createFromGraphic(e2), $view: r2 && r2.view }, spatialReference: r2 && r2.sr };
}
function T(e2, r2, n2) {
  return g$4.createFromGraphicLikeObject(r2, e2, n2);
}
function U(e2, r2) {
  e2.vars != null && (e2.vars.$feature = r2);
}
function V(e2, r2) {
  let t2;
  try {
    t2 = U$1(e2, r2);
  } catch (o2) {
    t2 = null;
  }
  return t2;
}
function L(e2, r2) {
  let n2;
  try {
    n2 = e2 ? e2(r2) : null;
  } catch (t2) {
    n2 = null;
  }
  return n2;
}
function q(e2, r2) {
  try {
    return e2 ? e2(r2) : Promise.resolve(null);
  } catch (n2) {
    return Promise.resolve(null);
  }
}
function J(e2, r2) {
  if (!e2)
    return [];
  const n2 = typeof e2 == "string" ? A(e2) : e2;
  if (!n2)
    return [];
  const o2 = C$1(n2);
  let s2 = new Array();
  o2.forEach((e3) => {
    C.test(e3) && (e3 = e3.replace(C, ""), s2.push(e3));
  });
  const i2 = s2.filter((e3) => e3.includes("*"));
  return s2 = s2.filter((e3) => !i2.includes(e3)), r2 && i2.forEach((e3) => {
    const n3 = new RegExp(`^${e3.split(/\*+/).map(P).join(".*")}$`, "i");
    r2.forEach((e4) => n3.test(e4) ? s2.push(e4) : null);
  }), [...new Set(s2.sort())];
}
function O(e2) {
  return _$1(e2, "$view");
}
function B(e2, r2) {
  return !!e2 && _$1(e2, r2);
}
function H(e2) {
  if (!e2 || e2.spatialReference == null && (e2.scale == null || e2.viewingMode == null))
    return;
  return { view: e2.viewingMode && e2.scale != null ? new J$5({ viewingMode: e2.viewingMode, scale: e2.scale }) : null, sr: e2.spatialReference };
}
function K({ url: e2, spatialReference: r2, lrucache: n2, interceptor: t2 }) {
  const o2 = re$1();
  return o2 ? o2.createFeatureSetCollectionFromService(e2, r2, n2, t2) : null;
}
function N({ layer: e2, spatialReference: r2, outFields: n2, returnGeometry: t2, lrucache: o2, interceptor: s2 }) {
  if (e2 === null)
    return null;
  const i2 = re$1();
  return i2 ? i2.constructFeatureSet(e2, r2, n2, t2 != null ? t2 : true, o2, s2) : null;
}
function Q(e2) {
  if ((e2 == null ? void 0 : e2.map) === null)
    return null;
  const r2 = re$1();
  return r2 ? r2.createFeatureSetCollectionFromMap(e2.map, e2.spatialReference, e2.lrucache, e2.interceptor) : null;
}
function W(e2) {
  return J$5.convertJsonToArcade(e2);
}
function X(e2, r2, n2 = []) {
  return X$1(e2, r2, n2);
}
function Y() {
  return k();
}
function Z() {
  return J$1();
}
function _(e2) {
  return e2.type === "simple" || e2.type === "class-breaks" || e2.type === "unique-value" || e2.type === "dot-density" || e2.type === "dictionary" || e2.type === "pie-chart";
}
function ee(e2) {
  return e2.declaredClass === "esri.layers.support.LabelClass";
}
function re(e2) {
  return e2.declaredClass === "esri.PopupTemplate";
}
function ne(e2, r2) {
  var _a;
  if (!e2)
    return false;
  if (typeof e2 == "string")
    return r2(e2);
  const n2 = e2;
  if (_(n2)) {
    if (n2.type === "dot-density") {
      const e4 = (_a = n2.attributes) == null ? void 0 : _a.some((e5) => r2(e5.valueExpression));
      if (e4)
        return e4;
    }
    const e3 = n2.visualVariables, t2 = !!e3 && e3.some((e4) => {
      let n3 = r2(e4.valueExpression);
      return e4.type === "size" && (e$a(e4.minSize) && (n3 = n3 || r2(e4.minSize.valueExpression)), e$a(e4.maxSize) && (n3 = n3 || r2(e4.maxSize.valueExpression))), n3;
    });
    return !(!("valueExpression" in n2) || !r2(n2.valueExpression)) || t2;
  }
  if (ee(n2)) {
    const e3 = n2.labelExpressionInfo && n2.labelExpressionInfo.expression;
    return !(!e3 || !r2(e3)) || false;
  }
  return !!re(n2) && (!!n2.expressionInfos && n2.expressionInfos.some((e3) => r2(e3.expression)) || Array.isArray(n2.content) && n2.content.some((e3) => {
    var _a2;
    return e3.type === "expression" && r2((_a2 = e3.expressionInfo) == null ? void 0 : _a2.expression);
  }));
}
function te(e2) {
  const r2 = A(e2);
  return !!r2 && ee$1(r2);
}
function oe(e2) {
  return ne(e2, te);
}
function se(e2) {
  const r2 = A(e2);
  return !!r2 && D$1(r2);
}
function ie(e2) {
  return ne(e2, se);
}
var arcadeUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  convertFeatureLayerToFeatureSet: N,
  convertJsonToArcade: W,
  convertMapToFeatureSetCollection: Q,
  convertServiceUrlToWorkspace: K,
  createExecContext: G,
  createFeature: T,
  createFunction: D,
  createSyntaxTree: A,
  dependsOnView: O,
  enableFeatureSetOperations: Z,
  enableGeometryOperations: Y,
  evalSyntaxTree: V,
  executeAsyncFunction: q,
  executeFunction: L,
  extractFieldNames: J,
  getArcadeType: I,
  getViewInfo: H,
  hasGeometryFunctions: oe,
  hasGeometryOperations: ie,
  hasVariable: B,
  loadScriptDependencies: X,
  updateExecContext: U,
  arcade: ne$1,
  Dictionary: J$5,
  arcadeFeature: g$4
});
export { S$1 as $, A$4 as A, B$2 as B, C$3 as C, D$6 as D, E$3 as E, F$3 as F, he$3 as G, a$3 as H, be$2 as I, J$5 as J, K$3 as K, le$3 as L, M$5 as M, N$3 as N, l$6 as O, P$5 as P, Q$5 as Q, u$4 as R, Se$2 as S, s$7 as T, e$5 as U, V$5 as V, W$6 as W, X$5 as X, Y$5 as Y, Z$7 as Z, _$4 as _, e$7 as a, i$6 as a0, n$3 as a1, t$5 as a2, Me$2 as a3, F$4 as a4, D$7 as a5, b$2 as a6, e$4 as a7, i$8 as a8, DateTime as a9, y$6 as aa, l$8 as ab, c$5 as ac, m$6 as ad, d$7 as ae, o$5 as af, v$3 as ag, f$2 as ah, t$3 as ai, t$6 as aj, xe$2 as ak, R$2 as al, l$4 as am, s$6 as an, Ae$2 as ao, P$6 as ap, me$3 as aq, Re$1 as ar, Fe$2 as as, fe$2 as at, Ce$2 as au, ce$3 as av, te$5 as aw, Ie$2 as ax, arcadeUtils as ay, J$6 as b, N$5 as c, Ne$1 as d, e$8 as e, f, se$4 as g, g$4 as h, r$6 as i, j$2 as j, k$3 as k, s$b as l, m$4 as m, n$5 as n, o$4 as o, s$9 as p, pe$2 as q, re$5 as r, s$3 as s, t$7 as t, u$6 as u, c$2 as v, w$6 as w, r$3 as x, v$2 as y, z$6 as z };
