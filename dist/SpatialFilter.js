import { a8 as i$2, a2 as t$2, a9 as DateTime, aa as y$2, ab as l$2, ac as c$1, $ as S, a0 as i$3, ad as m$2, ae as d$2, af as o$3, ag as v$1, ah as f$5 } from "./arcadeUtils.js";
import { b1 as f$3, aK as k$1, c9 as r$1, hC as C$2 } from "./index.js";
import { WhereClause as f$4 } from "./WhereClause.js";
import { b, K, W, M as M$1, F, R, m as m$3, S as S$1, x as x$1, O, p as p$2, h as h$2 } from "./geometryEngineAsync.js";
var t$1;
!function(e2) {
  e2.InvalidFunctionParameters = "InvalidFunctionParameters", e2.UnsupportedSqlFunction = "UnsupportedSqlFunction", e2.UnsupportedOperator = "UnsupportedOperator", e2.UnsupportedSyntax = "UnsupportedSyntax", e2.UnsupportedIsRhs = "UnsupportedIsRhs", e2.UnsupportedIsLhs = "UnsupportedIsLhs", e2.MissingStatisticParameters = "MissingStatisticParameters";
}(t$1 || (t$1 = {}));
const r = { [t$1.MissingStatisticParameters]: "Statistic does not have 1 or 0 Parameters", [t$1.InvalidFunctionParameters]: "Invalid parameters for call to {function}", [t$1.UnsupportedIsLhs]: "Unsupported left hand expression in is statement", [t$1.UnsupportedIsRhs]: "Unsupported right hand expression in is statement", [t$1.UnsupportedOperator]: "Unsupported operator - {operator}", [t$1.UnsupportedSyntax]: "Unsupported syntax - {node}", [t$1.UnsupportedSqlFunction]: "Sql function not found = {function}" };
class s$2 extends Error {
  constructor(t2, n2) {
    super(i$2(r[t2], n2)), this.declaredRootClass = "esri.arcade.featureset.support.sqlerror", Error.captureStackTrace && Error.captureStackTrace(this, s$2);
  }
}
var n;
!function(e2) {
  e2.NeverReach = "NeverReach", e2.NotImplemented = "NotImplemented", e2.Cancelled = "Cancelled", e2.InvalidStatResponse = "InvalidStatResponse", e2.InvalidRequest = "InvalidRequest", e2.RequestFailed = "RequestFailed", e2.MissingFeatures = "MissingFeatures", e2.AggregationFieldNotFound = "AggregationFieldNotFound", e2.DataElementsNotFound = "DataElementsNotFound";
}(n || (n = {}));
const a$1 = { [n.Cancelled]: "Cancelled", [n.InvalidStatResponse]: "Invalid statistics response from service", [n.InvalidRequest]: "Invalid request", [n.RequestFailed]: "Request failed - {reason}", [n.MissingFeatures]: "Missing features", [n.AggregationFieldNotFound]: "Aggregation field not found", [n.DataElementsNotFound]: "Data elements not found on service", [n.NeverReach]: "Encountered unreachable logic", [n.NotImplemented]: "Not implemented" };
class o$2 extends Error {
  constructor(t2, r2) {
    super(i$2(a$1[t2], r2)), this.declaredRootClass = "esri.arcade.featureset.support.featureseterror", Error.captureStackTrace && Error.captureStackTrace(this, o$2);
  }
}
class a {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(a2) {
    this._databaseTypeMetaData[a2] === void 0 && delete this._databaseTypeMetaData[a2];
  }
  getDatabaseType(a2) {
    return a2 === "MUSTBESET" || this._databaseTypeMetaData[a2] === void 0 ? null : this._databaseTypeMetaData[a2];
  }
  setDatabaseType(a2, e2) {
    this._databaseTypeMetaData[a2] = e2;
  }
  getLayerInfo(a2) {
    return this._layerInfo[a2] === void 0 ? null : this._layerInfo[a2];
  }
  setLayerInfo(a2, e2) {
    this._layerInfo[a2] = e2;
  }
  clearLayerInfo(a2) {
    this._layerInfo[a2] !== void 0 && delete this._layerInfo[a2];
  }
}
a.applicationCache = null;
class e {
  constructor(t2, e2) {
    this._lastId = -1, this._progress = e2, this._parent = t2;
  }
  reset() {
    this._lastId = -1;
  }
  nextBatch(e2) {
    if (this._parent._mainSetInUse !== null)
      return this._parent._mainSetInUse.then((t2) => this.nextBatch(e2), (t2) => this.nextBatch(e2));
    const n2 = { returnpromise: null, hasset: false }, s2 = [];
    return n2.returnpromise = new Promise((a2, i2) => {
      this._parent._getSet(this._progress).then((r2) => {
        const h2 = f$3(r2._known, "known");
        let _ = h2.length - 1;
        if (h2[h2.length - 1] === "GETPAGES" && (_ -= 1), this._lastId + e2 > _ && h2.length > 0 && h2[h2.length - 1] === "GETPAGES")
          return void this._parent._expandPagedSet(r2, this._parent._maxQueryRate(), 0, 0, this._progress).then((t2) => {
            n2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(e2).then(a2, i2);
          }, (t2) => {
            n2.hasset = true, this._parent._mainSetInUse = null, i2(t2);
          });
        const l2 = f$3(r2._candidates, "candidates");
        if (_ >= this._lastId + e2 || l2.length === 0) {
          for (let t2 = 0; t2 < e2; t2++) {
            const e3 = t2 + this._lastId + 1;
            if (e3 >= h2.length)
              break;
            s2[t2] = h2[e3];
          }
          return this._lastId += s2.length, s2.length === 0 && (n2.hasset = true, this._parent._mainSetInUse = null, a2([])), void this._parent._getFeatureBatch(s2, this._progress).then((t2) => {
            n2.hasset = true, this._parent._mainSetInUse = null, a2(t2);
          }, (t2) => {
            n2.hasset = true, this._parent._mainSetInUse = null, i2(t2);
          });
        }
        this._parent._refineSetBlock(r2, this._parent._maxProcessingRate(), this._progress).then(() => {
          n2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(e2).then(a2, i2);
        }, (t2) => {
          n2.hasset = true, this._parent._mainSetInUse = null, i2(t2);
        });
      }, (t2) => {
        n2.hasset = true, this._parent._mainSetInUse = null, i2(t2);
      });
    }), n2.hasset === false && (this._parent._mainSetInUse = n2.returnpromise, n2.hasset = true), n2.returnpromise;
  }
  next() {
    if (this._parent._mainSetInUse !== null)
      return this._parent._mainSetInUse.then((t2) => this.next(), (t2) => this.next());
    const e2 = { returnpromise: null, hasset: false };
    return e2.returnpromise = new Promise((n2, s2) => {
      this._parent._getSet(this._progress).then((a2) => {
        const i2 = f$3(a2._known, "known");
        if (this._lastId < i2.length - 1)
          i2[this._lastId + 1] === "GETPAGES" ? this._parent._expandPagedSet(a2, this._parent._maxQueryRate(), 0, 0, this._progress).then((t2) => (e2.hasset = true, this._parent._mainSetInUse = null, this.next())).then(n2, s2) : (this._lastId += 1, this._parent._getFeature(a2, i2[this._lastId], this._progress).then((t2) => {
            e2.hasset = true, this._parent._mainSetInUse = null, n2(t2);
          }, (t2) => {
            e2.hasset = true, this._parent._mainSetInUse = null, s2(t2);
          }));
        else {
          f$3(a2._candidates, "candidates").length > 0 ? this._parent._refineSetBlock(a2, this._parent._maxProcessingRate(), this._progress).then(() => {
            e2.hasset = true, this._parent._mainSetInUse = null, this.next().then(n2, s2);
          }, (t2) => {
            e2.hasset = true, this._parent._mainSetInUse = null, s2(t2);
          }) : (e2.hasset = true, this._parent._mainSetInUse = null, n2(null));
        }
      }, (t2) => {
        e2.hasset = true, this._parent._mainSetInUse = null, s2(t2);
      });
    }), e2.hasset === false && (this._parent._mainSetInUse = e2.returnpromise, e2.hasset = true), e2.returnpromise;
  }
  async count() {
    if (this._parent._totalCount !== -1)
      return this._parent._totalCount;
    const t2 = await this._parent._getSet(this._progress), e2 = await this._refineAllSets(t2);
    return this._parent._totalCount = e2._known.length, this._parent._totalCount;
  }
  async _refineAllSets(t2) {
    if (t2._known.length > 0 && t2._known[t2._known.length - 1] === "GETPAGES")
      return await this._parent._expandPagedSet(t2, this._parent._maxQueryRate(), 0, 1, this._progress), this._refineAllSets(t2);
    if (t2._candidates.length > 0) {
      if (t2._known[t2._candidates.length - 1] === "GETPAGES")
        return await this._parent._expandPagedSet(t2, this._parent._maxQueryRate(), 0, 2, this._progress), this._refineAllSets(t2);
      const e2 = await this._parent._refineSetBlock(t2, this._parent._maxProcessingRate(), this._progress);
      return e2._candidates.length > 0 ? this._refineAllSets(e2) : e2;
    }
    return t2;
  }
}
class t {
  constructor(t2, s2, e2, i2) {
    this._lastFetchedIndex = 0, this._ordered = false, this.pagesDefinition = null, this._candidates = t2, this._known = s2, this._ordered = e2, this.pagesDefinition = i2;
  }
}
function s$1(e2, r2) {
  return u$1(e2 == null ? void 0 : e2.parseTree, r2, e2 == null ? void 0 : e2.parameters);
}
function o$1(e2, r2, t2) {
  return u$1(e2, r2, t2);
}
function c(t2, n2, a2, s2) {
  return f$4.create(u$1(t2.parseTree, t$2.Standardised, t2.parameters, n2, a2), s2);
}
function i$1(t2, n2, a2 = "AND") {
  return f$4.create("((" + s$1(t2, t$2.Standardised) + ")" + a2 + "(" + s$1(n2, t$2.Standardised) + "))", t2.fieldsIndex);
}
function u$1(e2, r2, a2, s2 = null, o2 = null) {
  let c2, i2, p2, g2;
  switch (e2.type) {
    case "interval":
      return N(u$1(e2.value, r2, a2, s2, o2), e2.qualifier, e2.op);
    case "case-expression": {
      let t2 = " CASE ";
      e2.format === "simple" && (t2 += u$1(e2.operand, r2, a2, s2, o2));
      for (let n2 = 0; n2 < e2.clauses.length; n2++)
        t2 += " WHEN " + u$1(e2.clauses[n2].operand, r2, a2, s2, o2) + " THEN " + u$1(e2.clauses[n2].value, r2, a2, s2, o2);
      return e2.else !== null && (t2 += " ELSE " + u$1(e2.else, r2, a2, s2, o2)), t2 += " END ", t2;
    }
    case "parameter": {
      const t2 = a2[e2.value.toLowerCase()];
      if (typeof t2 == "string") {
        return "'" + a2[e2.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
      }
      if (t2 instanceof Date)
        return f$2(t2, r2);
      if (t2 instanceof Array) {
        const e3 = [];
        for (let n2 = 0; n2 < t2.length; n2++)
          typeof t2[n2] == "string" ? e3.push("'" + t2[n2].toString().replace(/'/g, "''") + "'") : t2[n2] instanceof Date ? e3.push(f$2(t2[n2], r2)) : e3.push(t2[n2].toString());
        return e3;
      }
      return t2.toString();
    }
    case "expression-list":
      i2 = [];
      for (const t2 of e2.value)
        i2.push(u$1(t2, r2, a2, s2, o2));
      return i2;
    case "unary-expression":
      return " ( NOT " + u$1(e2.expr, r2, a2, s2, o2) + " ) ";
    case "binary-expression":
      switch (e2.operator) {
        case "AND":
          return " (" + u$1(e2.left, r2, a2, s2, o2) + " AND " + u$1(e2.right, r2, a2, s2, o2) + ") ";
        case "OR":
          return " (" + u$1(e2.left, r2, a2, s2, o2) + " OR " + u$1(e2.right, r2, a2, s2, o2) + ") ";
        case "IS":
          if (e2.right.type !== "null")
            throw new s$2(t$1.UnsupportedIsRhs);
          return " (" + u$1(e2.left, r2, a2, s2, o2) + " IS NULL )";
        case "ISNOT":
          if (e2.right.type !== "null")
            throw new s$2(t$1.UnsupportedIsRhs);
          return " (" + u$1(e2.left, r2, a2, s2, o2) + " IS NOT NULL )";
        case "IN":
          return c2 = [], e2.right.type === "expression-list" ? (c2 = u$1(e2.right, r2, a2, s2, o2), " (" + u$1(e2.left, r2, a2, s2, o2) + " IN (" + c2.join(",") + ")) ") : (g2 = u$1(e2.right, r2, a2, s2, o2), g2 instanceof Array ? " (" + u$1(e2.left, r2, a2, s2, o2) + " IN (" + g2.join(",") + ")) " : " (" + u$1(e2.left, r2, a2, s2, o2) + " IN (" + g2 + ")) ");
        case "NOT IN":
          return c2 = [], e2.right.type === "expression-list" ? (c2 = u$1(e2.right, r2, a2, s2, o2), " (" + u$1(e2.left, r2, a2, s2, o2) + " NOT IN (" + c2.join(",") + ")) ") : (g2 = u$1(e2.right, r2, a2, s2, o2), g2 instanceof Array ? " (" + u$1(e2.left, r2, a2, s2, o2) + " NOT IN (" + g2.join(",") + ")) " : " (" + u$1(e2.left, r2, a2, s2, o2) + " NOT IN (" + g2 + ")) ");
        case "BETWEEN":
          return p2 = u$1(e2.right, r2, a2, s2, o2), " (" + u$1(e2.left, r2, a2, s2, o2) + " BETWEEN " + p2[0] + " AND " + p2[1] + " ) ";
        case "NOTBETWEEN":
          return p2 = u$1(e2.right, r2, a2, s2, o2), " (" + u$1(e2.left, r2, a2, s2, o2) + " NOT BETWEEN " + p2[0] + " AND " + p2[1] + " ) ";
        case "LIKE":
          return e2.escape !== "" ? " (" + u$1(e2.left, r2, a2, s2, o2) + " LIKE " + u$1(e2.right, r2, a2, s2, o2) + " ESCAPE '" + e2.escape + "') " : " (" + u$1(e2.left, r2, a2, s2, o2) + " LIKE " + u$1(e2.right, r2, a2, s2, o2) + ") ";
        case "NOT LIKE":
          return e2.escape !== "" ? " (" + u$1(e2.left, r2, a2, s2, o2) + " NOT LIKE " + u$1(e2.right, r2, a2, s2, o2) + " ESCAPE '" + e2.escape + "') " : " (" + u$1(e2.left, r2, a2, s2, o2) + " NOT LIKE " + u$1(e2.right, r2, a2, s2, o2) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + u$1(e2.left, r2, a2, s2, o2) + " " + e2.operator + " " + u$1(e2.right, r2, a2, s2, o2) + ") ";
      }
      throw new s$2(t$1.UnsupportedOperator, { operator: e2.operator });
    case "null":
      return "null";
    case "boolean":
      return e2.value === true ? "1" : "0";
    case "string":
      return "'" + e2.value.toString().replace(/'/g, "''") + "'";
    case "timestamp":
    case "date":
      return f$2(e2.value, r2);
    case "number":
      return e2.value.toString();
    case "current-time":
      return d$1(e2.mode === "date", r2);
    case "column-reference":
      return s2 && s2.toLowerCase() === e2.column.toLowerCase() ? "(" + o2 + ")" : e2.column;
    case "function": {
      const t2 = u$1(e2.args, r2, a2, s2, o2);
      return l$1(e2.name, t2, r2);
    }
  }
  throw new s$2(t$1.UnsupportedSyntax, { node: e2.type });
}
function l$1(r2, a2, s2) {
  switch (r2.toLowerCase().trim()) {
    case "abs":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "abs" });
      return "abs(" + a2[0] + ")";
    case "ceiling":
    case "ceil":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "ceiling" });
      switch (s2) {
        case t$2.Standardised:
        case t$2.StandardisedNoInterval:
      }
      return "CEILING(" + a2[0] + ")";
    case "floor":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "floor" });
      return "FLOOR(" + a2[0] + ")";
    case "log":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "log" });
      return "LOG(" + a2[0] + ")";
    case "log10":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "log10" });
      return "LOG10(" + a2[0] + ")";
    case "power":
      if (a2.length !== 2)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "power" });
      return "POWER(" + a2[0] + "," + a2[1] + ")";
    case "round":
      if (a2.length === 2)
        return "ROUND(" + a2[0] + "," + a2[1] + ")";
      if (a2.length === 1)
        return "ROUND(" + a2[0] + ")";
      throw new s$2(t$1.InvalidFunctionParameters, { function: "round" });
    case "truncate":
      if (a2.length < 1 || a2.length > 2)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "truncate" });
      return s2 === t$2.SqlServer ? "ROUND(" + a2[0] + (a2.length === 1 ? "0" : "," + a2[1]) + ",1)" : "TRUNCATE(" + a2[0] + (a2.length === 1 ? ")" : "," + a2[1] + ")");
    case "char_length":
    case "len":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "char_length" });
      switch (s2) {
        case t$2.SqlServer:
          return "LEN(" + a2[0] + ")";
        case t$2.Oracle:
          return "LENGTH(" + a2[0] + ")";
        default:
          return "CHAR_LENGTH(" + a2[0] + ")";
      }
    case "concat":
      if (a2.length < 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "concat" });
      {
        let e2 = "CONCAT(";
        for (let r3 = 0; r3 < a2.length; r3++)
          r3 !== 0 && (e2 += ","), e2 += a2[r3];
        return e2 += ")", e2;
      }
    case "lower":
    case "lcase":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "lower" });
      return "LOWER(" + a2[0] + ")";
    case "upper":
    case "ucase":
      if (a2.length !== 1)
        throw new s$2(t$1.InvalidFunctionParameters, { function: "upper" });
      return "UPPER(" + a2[0] + ")";
    case "substring": {
      let r3 = "";
      switch (s2) {
        case t$2.Oracle:
          return r3 = "SUBSTR(" + a2[0] + "," + a2[1], a2.length === 3 && (r3 += "," + a2[2]), r3 += ")", r3;
        case t$2.SqlServer:
          return r3 = a2.length === 3 ? "SUBSTRING(" + a2[0] + "," + a2[1] + "," + a2[2] + ")" : "SUBSTRING(" + a2[0] + ",  " + a2[1] + ", LEN(" + a2[0] + ") - " + a2[1] + ")", r3;
        default:
          return r3 = "SUBSTRING(" + a2[0] + " FROM " + a2[1], a2.length === 3 && (r3 += " FOR " + a2[2]), r3 += ")", r3;
      }
    }
    case "extract":
      return "EXTRACT(" + a2[0].replace(/\'/g, "") + " FROM " + a2[1] + ")";
  }
  throw new s$2(t$1.InvalidFunctionParameters, { function: r2 });
}
function f$2(r2, t2) {
  const n2 = r2 instanceof Date ? DateTime.fromJSDate(r2) : DateTime.fromSQL(r2), s2 = n2.hour === 0 && n2.minute === 0 && n2.second === 0 && n2.millisecond === 0;
  switch (t2) {
    case t$2.FILEGDB:
    case t$2.Standardised:
    case t$2.StandardisedNoInterval:
      return s2 ? `date '${n2.toFormat("yyyy-LL-dd")}'` : `date '${n2.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
    case t$2.Oracle:
      return s2 ? `TO_DATE('${n2.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')` : `TO_DATE('${n2.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;
    case t$2.SqlServer:
      return `'${n2.toFormat(s2 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    case t$2.PGDB:
      return `#${n2.toFormat(s2 ? "LL-dd-yyyy" : "LL-dd-yyyy HH:mm:ss")}#`;
    case t$2.Postgres:
      return `TIMESTAMP '${n2.toFormat(s2 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    default:
      return `date '${n2.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
  }
}
function d$1(r2, t2) {
  switch (t2) {
    case t$2.FILEGDB:
    case t$2.Standardised:
    case t$2.StandardisedNoInterval:
    case t$2.Oracle:
      return r2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
    case t$2.SqlServer:
      return r2 ? "CAST(GETDATE() AS DATE)" : "GETDATE()";
    case t$2.PGDB:
    case t$2.Postgres:
    default:
      return r2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
  }
}
function p$1(e2, r2, t2 = {}) {
  const n2 = {}, a2 = {}, s2 = { esriFieldTypeSmallInteger: "integer", esriFieldTypeInteger: "integer", esriFieldTypeSingle: "double", esriFieldTypeDouble: "double", esriFieldTypeString: "string", esriFieldTypeDate: "date", esriFieldTypeOID: "integer", oid: "integer", long: "integer", "small-integer": "integer", integer: "integer", single: "double", double: "double", date: "date", string: "string" };
  for (const o2 of r2) {
    const e3 = o2.type ? s2[o2.type] : void 0;
    n2[o2.name.toLowerCase()] = e3 === void 0 ? "" : e3;
  }
  for (const o2 in t2) {
    const e3 = s2[t2[o2]];
    a2[o2.toLowerCase()] = e3 === void 0 ? "" : e3;
  }
  switch (g$1(n2, e2.parseTree, e2.parameters, a2)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "date":
      return "date";
    case "string":
      return "string";
  }
  return "";
}
function g$1(e2, r2, a2, s2) {
  let o2;
  switch (r2.type) {
    case "interval":
      return "integer";
    case "case-expression": {
      const t2 = [];
      if (r2.format === "simple") {
        for (let n2 = 0; n2 < r2.clauses.length; n2++)
          t2.push(g$1(e2, r2.clauses[n2].value, a2, s2));
        r2.else !== null && t2.push(g$1(e2, r2.else, a2, s2));
      } else {
        for (let n2 = 0; n2 < r2.clauses.length; n2++)
          t2.push(g$1(e2, r2.else, a2, s2));
        r2.else !== null && t2.push(g$1(e2, r2.else, a2, s2));
      }
      return m$1(t2);
    }
    case "parameter": {
      const e3 = s2[r2.value.toLowerCase()];
      if (e3 === void 0 && a2) {
        const e4 = a2[r2.value.toLowerCase()];
        if (e4 === void 0)
          return "";
        if (e4 === null)
          return "";
        if (typeof e4 == "string" || e4 instanceof String)
          return "string";
        if (typeof e4 == "boolean")
          return "boolean";
        if (e4 instanceof Date)
          return "date";
        if (typeof e4 == "number")
          return e4 % 1 == 0 ? "integer" : "double";
      }
      return e3 === void 0 ? "" : e3;
    }
    case "expression-list": {
      const t2 = [];
      for (const n2 of r2.value)
        t2.push(g$1(e2, n2, a2, s2));
      return t2;
    }
    case "unary-expression":
      return "boolean";
    case "binary-expression":
      switch (r2.operator) {
        case "AND":
        case "OR":
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "IS":
        case "ISNOT":
          if (r2.right.type !== "null")
            throw new s$2(t$1.UnsupportedIsRhs);
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return m$1([g$1(e2, r2.left, a2, s2), g$1(e2, r2.right, a2, s2)]);
        default:
          throw new s$2(t$1.UnsupportedOperator, { operator: r2.operator });
      }
    case "null":
      return "";
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return r2.value === null ? "" : r2.value % 1 == 0 ? "integer" : "double";
    case "date":
    case "timestamp":
    case "current-time":
      return "date";
    case "column-reference": {
      const t2 = e2[r2.column.toLowerCase()];
      return t2 === void 0 ? "" : t2;
    }
    case "function":
      switch (r2.name.toLowerCase()) {
        case "position":
        case "extract":
        case "char_length":
          return "integer";
        case "round":
          return o2 = g$1(e2, r2.args, a2, s2), o2 instanceof Array ? o2.length > 0 ? o2[0] : "" : o2;
        case "sign":
          return o2 = g$1(e2, r2.args, a2, s2), o2 instanceof Array && (o2 = m$1(o2)), o2 === "integer" || o2 === "double" ? o2 : "double";
        case "ceiling":
        case "floor":
        case "abs": {
          const t2 = g$1(e2, r2.args, a2, s2);
          return t2 instanceof Array ? m$1(t2) : t2;
        }
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "power":
        case "truncate":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
      }
      return "";
  }
  throw new s$2(t$1.UnsupportedSyntax, { node: r2.type });
}
const h$1 = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
function m$1(e2) {
  if (e2) {
    let r2 = "";
    for (const t2 of e2)
      t2 !== "" && (r2 = r2 === "" || h$1[r2] < h$1[t2] ? t2 : r2);
    return r2;
  }
  return "";
}
function y$1(e2, r2) {
  return T(e2.parseTree, r2);
}
function w$1(e2) {
  return (e2 == null ? void 0 : e2.parseTree.type) === "column-reference";
}
function T(e2, r2) {
  if (e2 == null)
    return false;
  switch (e2.type) {
    case "when-clause":
      return T(e2.operand, r2) || T(e2.value, r2);
    case "case-expression":
      for (const t2 of e2.clauses)
        if (T(t2, r2))
          return true;
      return !(e2.format !== "simple" || !T(e2.operand, r2)) || !(e2.else === null || !T(e2.else, r2));
    case "parameter":
    case "null":
    case "boolean":
    case "date":
    case "timestamp":
    case "string":
    case "number":
      return false;
    case "expression-list":
      for (const t2 of e2.value)
        if (T(t2, r2))
          return true;
      return false;
    case "unary-expression":
      return T(e2.expr, r2);
    case "binary-expression":
      return T(e2.left, r2) || T(e2.right, r2);
    case "column-reference":
      return r2.toLowerCase() === e2.column.toLowerCase();
    case "function":
      return T(e2.args, r2);
  }
  return false;
}
function E(e2) {
  let r2 = "";
  return r2 += e2.period.toUpperCase(), r2;
}
function N(e2, r2, t2) {
  let n2 = "";
  return n2 = r2.type === "interval-period" ? E(r2) : E(r2.start) + " TO " + E(r2.end), "INTERVAL " + t2 + " " + e2 + " " + n2;
}
function s(t2) {
  return t2 = +t2, isFinite(t2) ? t2 - t2 % 1 || (t2 < 0 ? -0 : t2 === 0 ? t2 : 0) : t2;
}
function i(t2) {
  let n2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2[e2];
  return n2 / t2.length;
}
function l(t2) {
  const n2 = i(t2);
  let e2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++)
    e2 += (n2 - t2[r2]) ** 2;
  return e2 / t2.length;
}
function o(t2) {
  const n2 = i(t2);
  let e2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++)
    e2 += (n2 - t2[r2]) ** 2;
  return e2 / (t2.length - 1);
}
function h(t2) {
  let n2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2[e2];
  return n2;
}
function f$1(t2, n2) {
  const c2 = [], u2 = {}, s2 = [];
  for (let i2 = 0; i2 < t2.length; i2++) {
    if (t2[i2] !== void 0 && t2[i2] !== null) {
      const n3 = t2[i2];
      if (y$2(n3) || l$2(n3))
        u2[n3] === void 0 && (c2.push(n3), u2[n3] = 1);
      else {
        let t3 = false;
        for (let e2 = 0; e2 < s2.length; e2++)
          c$1(s2[e2], n3) === true && (t3 = true);
        t3 === false && (s2.push(n3), c2.push(n3));
      }
    }
    if (c2.length >= n2 && n2 !== -1)
      return c2;
  }
  return c2;
}
function m(t2) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
function g(t2, n2, e2 = 1e3) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return f$1(n2, e2);
    case "avg":
    case "mean":
      return i(n2);
    case "min":
      return Math.min.apply(Math, n2);
    case "sum":
      return h(n2);
    case "max":
      return Math.max.apply(Math, n2);
    case "stdev":
    case "stddev":
      return Math.sqrt(l(n2));
    case "var":
    case "variance":
      return l(n2);
    case "count":
      return n2.length;
  }
  return 0;
}
async function w(t2, n2, e2) {
  const r2 = await k(t2, n2, e2, true);
  return r2.length === 0 ? null : Math.min.apply(Math, r2);
}
async function d(t2, n2, e2) {
  const r2 = await k(t2, n2, e2, true);
  return r2.length === 0 ? null : Math.max.apply(Math, r2);
}
async function p(t2, n2, e2) {
  let r2 = "";
  n2 && !w$1(n2) && (r2 = p$1(n2, t2.fields));
  const a2 = await k(t2, n2, e2, true);
  if (a2.length === 0)
    return null;
  const l2 = i(a2);
  return l2 === null ? l2 : r2 === "integer" ? s(l2) : l2;
}
async function v(t2, n2, e2) {
  const r2 = await k(t2, n2, e2, true);
  return r2.length === 0 ? null : o(r2);
}
async function y(t2, n2, e2) {
  const r2 = await k(t2, n2, e2, true);
  return r2.length === 0 ? null : Math.sqrt(o(r2));
}
async function x(t2, n2, e2) {
  const r2 = await k(t2, n2, e2, true);
  return r2.length === 0 ? null : h(r2);
}
async function M(t2, n2) {
  return t2.iterator(n2).count();
}
async function k(e2, r2, a2, c2 = false) {
  const u2 = e2.iterator(a2), s2 = [], i2 = { ticker: 0 };
  let l2 = await u2.next();
  for (; l2 !== null; ) {
    if (i2.ticker++, a2.aborted)
      throw new o$2(n.Cancelled);
    i2.ticker % 100 == 0 && (i2.ticker = 0, await new Promise((t2) => {
      setTimeout(t2, 0);
    }));
    const e3 = r2 == null ? void 0 : r2.calculateValue(l2);
    e3 === null ? c2 === false && (s2[s2.length] = e3) : s2[s2.length] = e3, l2 = await u2.next();
  }
  return s2;
}
async function C$1(e2, r2, a2 = 1e3, c2 = null) {
  const u2 = e2.iterator(c2), s2 = [], i2 = {}, l2 = { ticker: 0 };
  let o2 = await u2.next();
  for (; o2 !== null; ) {
    if (l2.ticker++, c2 && c2.aborted)
      throw new o$2(n.Cancelled);
    l2.ticker % 100 == 0 && (l2.ticker = 0, await new Promise((t2) => {
      setTimeout(t2, 0);
    }));
    const e3 = r2 == null ? void 0 : r2.calculateValue(o2);
    if (e3 != null && i2[e3] === void 0 && (s2.push(e3), i2[e3] = 1), s2.length >= a2 && a2 !== -1)
      return s2;
    o2 = await u2.next();
  }
  return s2;
}
class C {
  constructor(e2) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = t$2.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = [], this.typeIdField = null, this.types = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = false, this.hasZ = false, this._transparent = false, this.loaded = false, this._loadPromise = null, this._fieldsIndex = null, e2 && e2.lrucache && (this.recentlyUsedQueries = e2.lrucache), e2 && e2.interceptor && (this.featureSetQueryInterceptor = e2.interceptor);
  }
  optimisePagingFeatureQueries(e2) {
    this._parent && this._parent.optimisePagingFeatureQueries(e2);
  }
  _hasMemorySource() {
    return true;
  }
  prop(e2, t2) {
    return t2 === void 0 ? this[e2] : (this[e2] !== void 0 && (this[e2] = t2), this);
  }
  end() {
    return this._parent !== null && this._parent._transparent === true ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = this.loadImpl()), this._loadPromise;
  }
  async loadImpl() {
    var _a, _b;
    return ((_a = this._parent) == null ? void 0 : _a.loaded) === true ? (this._initialiseFeatureSet(), this) : (await ((_b = this._parent) == null ? void 0 : _b.load()), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new k$1({ wkid: 4326 }), this.geometryType = S.point);
  }
  getField(e2, t2) {
    let s2;
    return (t2 = t2 || this.fields) && (e2 = e2.toLowerCase(), t2.some((t3) => (t3 && t3.name.toLowerCase() === e2 && (s2 = t3), !!s2))), s2;
  }
  getFieldsIndex() {
    return this._fieldsIndex === null && (this._fieldsIndex = new r$1(this.fields)), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return this._parent !== null ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return this._parent !== null ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e2) {
    if (e2 != null && e2.aborted)
      throw new o$2(n.Cancelled);
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  async _canDoAggregates(e2, t2, s2, a2, r2) {
    return this._parent !== null && this._parent._canDoAggregates(e2, t2, s2, a2, r2);
  }
  async _getAggregatePagesDataSourceDefinition(e2, a2, r2, n$1, i2, l2, u2) {
    if (this._parent === null)
      throw new o$2(n.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e2, a2, r2, n$1, i2, l2, u2);
  }
  async _getAgregagtePhysicalPage(e2, a2, r2) {
    if (this._parent === null)
      throw new o$2(n.NeverReach);
    return this._parent._getAgregagtePhysicalPage(e2, a2, r2);
  }
  async databaseType() {
    if (this._databaseType === t$2.NotEvaluated) {
      if (a.applicationCache !== null) {
        const t2 = a.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
        if (t2 !== null)
          return t2;
      }
      if (this._databaseTypeProbed !== null)
        return this._databaseTypeProbed;
      try {
        this._databaseTypeProbed = this._getDatabaseTypeImpl(), a.applicationCache !== null && a.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), this._databaseTypeProbed);
      } catch (t2) {
        throw a.applicationCache !== null && a.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), t2;
      }
      return this._databaseTypeProbed;
    }
    return this._databaseType;
  }
  async _getDatabaseTypeImpl() {
    const e2 = [{ thetype: t$2.SqlServer, testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0" }, { thetype: t$2.Oracle, testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0" }, { thetype: t$2.StandardisedNoInterval, testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0" }];
    for (const t2 of e2) {
      if (await this._runDatabaseProbe(t2.testwhere) === true)
        return t2.thetype;
    }
    return t$2.StandardisedNoInterval;
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  async _runDatabaseProbe(e2) {
    if (this._parent !== null)
      return this._parent._runDatabaseProbe(e2);
    throw new o$2(n.NotImplemented);
  }
  isTable() {
    var _a, _b;
    return (_b = (_a = this._parent) == null ? void 0 : _a.isTable()) != null ? _b : false;
  }
  _featureFromCache(e2) {
    if (this._featureCache[e2] !== void 0)
      return this._featureCache[e2];
  }
  _isInFeatureSet(e2) {
    return i$3.Unknown;
  }
  _getSet(e2) {
    throw new o$2(n.NotImplemented);
  }
  async _getFeature(e2, a2, r2) {
    if (this._checkCancelled(r2), this._featureFromCache(a2) !== void 0)
      return this._featureFromCache(a2);
    if (await this._getFeatures(e2, a2, this._maxProcessingRate(), r2), this._checkCancelled(r2), this._featureFromCache(a2) !== void 0)
      return this._featureFromCache(a2);
    throw new o$2(n.MissingFeatures);
  }
  async _getFeatureBatch(e2, t$12) {
    this._checkCancelled(t$12);
    const s2 = new t([], e2, false, null), a2 = [];
    await this._getFeatures(s2, -1, e2.length, t$12), this._checkCancelled(t$12);
    for (const r2 of e2)
      this._featureFromCache(r2) !== void 0 && a2.push(this._featureFromCache(r2));
    return a2;
  }
  async _getFeatures(e2, t2, s2, a2) {
    return "success";
  }
  _getFilteredSet(e2, a2, r2, n$1, i2) {
    throw new o$2(n.NotImplemented);
  }
  async _refineSetBlock(e2, t2, s2) {
    if (this._checkIfNeedToExpandCandidatePage(e2, this._maxQueryRate()) === true)
      return await this._expandPagedSet(e2, this._maxQueryRate(), 0, 0, s2), this._refineSetBlock(e2, t2, s2);
    this._checkCancelled(s2);
    const a2 = e2._candidates.length;
    this._refineKnowns(e2, t2);
    let r2 = a2 - e2._candidates.length;
    if (e2._candidates.length === 0)
      return e2;
    if (r2 >= t2)
      return e2;
    if (await this._refineIfParentKnown(e2, t2 - r2, s2), this._checkCancelled(s2), this._refineKnowns(e2, t2 - r2), r2 = a2 - e2._candidates.length, r2 < t2 && e2._candidates.length > 0) {
      const a3 = t2 - r2, n2 = this._prepareFetchAndRefineSet(e2._candidates);
      return await this._fetchAndRefineFeatures(n2, n2.length > a3 ? a3 : e2._candidates.length, s2), this._checkCancelled(s2), this._refineKnowns(e2, t2 - r2), e2;
    }
    return e2;
  }
  _fetchAndRefineFeatures(e2, t2, s2) {
    return null;
  }
  _prepareFetchAndRefineSet(e2) {
    const t2 = [];
    for (let s2 = 0; s2 < e2.length; s2++)
      this._isPhysicalFeature(e2[s2]) && t2.push(e2[s2]);
    return t2;
  }
  _isPhysicalFeature(e2) {
    return this._parent === null || this._parent._isPhysicalFeature(e2);
  }
  _refineKnowns(e2, t2) {
    let s2 = 0, a2 = null;
    const r2 = [];
    t2 = this._maxQueryRate();
    for (let n2 = 0; n2 < e2._candidates.length && e2._candidates[n2] !== "GETPAGES"; n2++) {
      let i2 = false;
      const u2 = this._candidateIdTransform(e2._candidates[n2]);
      u2 !== e2._candidates[n2] && (i2 = true);
      const h2 = this._isInFeatureSet(u2);
      if (h2 === i$3.InFeatureSet)
        i2 === true ? e2._known.includes(u2) || (e2._known.push(u2), s2 += 1) : (e2._known.push(e2._candidates[n2]), s2 += 1), a2 === null ? a2 = { start: n2, end: n2 } : a2.end === n2 - 1 ? a2.end = n2 : (r2.push(a2), a2 = { start: n2, end: n2 });
      else if (h2 === i$3.NotInFeatureSet)
        a2 === null ? a2 = { start: n2, end: n2 } : a2.end === n2 - 1 ? a2.end = n2 : (r2.push(a2), a2 = { start: n2, end: n2 }), s2 += 1;
      else if (h2 === i$3.Unknown && (s2 += 1, e2._ordered === true))
        break;
      if (s2 >= t2)
        break;
    }
    a2 !== null && r2.push(a2);
    for (let n2 = r2.length - 1; n2 >= 0; n2--)
      e2._candidates.splice(r2[n2].start, r2[n2].end - r2[n2].start + 1);
  }
  _refineIfParentKnown(e2, t$12, s2) {
    const a2 = new t([], [], e2._ordered, null);
    return a2._candidates = e2._candidates.slice(0), this._parent._refineSetBlock(a2, t$12, s2);
  }
  _candidateIdTransform(e2) {
    return this._parent._candidateIdTransform(e2);
  }
  _checkIfNeedToExpandKnownPage(e2, t2) {
    if (e2.pagesDefinition === null)
      return false;
    let s2 = 0;
    for (let a2 = e2._lastFetchedIndex; a2 < e2._known.length; a2++) {
      if (e2._known[a2] === "GETPAGES")
        return true;
      if (this._featureCache[e2._known[a2]] === void 0 && (s2 += 1, s2 >= t2))
        break;
    }
    return false;
  }
  _checkIfNeedToExpandCandidatePage(e2, t2) {
    if (e2.pagesDefinition === null)
      return false;
    let s2 = 0;
    for (let a2 = 0; a2 < e2._candidates.length; a2++) {
      if (e2._candidates[a2] === "GETPAGES")
        return true;
      if (s2 += 1, s2 >= t2)
        break;
    }
    return false;
  }
  async _expandPagedSet(e2, a2, r2, n$1, i2) {
    if (this._parent === null)
      throw new o$2(n.NotImplemented);
    return this._parent._expandPagedSet(e2, a2, r2, n$1, i2);
  }
  async _expandPagedSetFeatureSet(e2, t2, s2, a2, r2) {
    if (e2._known.length > 0 && e2._known[e2._known.length - 1] === "GETPAGES" && (a2 = 1), a2 === 0 && e2._candidates.length > 0 && e2._candidates[e2._candidates.length - 1] === "GETPAGES" && (a2 = 2), a2 === 0)
      return "finished";
    const n2 = await this._getPage(e2, a2, r2);
    return s2 + n2 < t2 ? this._expandPagedSet(e2, t2, s2 + n2, 0, r2) : "success";
  }
  async _getPage(e2, t2, s2) {
    const a2 = t2 === 1 ? e2._known : e2._candidates;
    if (e2.pagesDefinition.internal.set.length > e2.pagesDefinition.resultOffset || e2.pagesDefinition.internal.fullyResolved === true) {
      a2.length = a2.length - 1;
      let t3 = 0;
      for (let r2 = 0; r2 < e2.pagesDefinition.resultRecordCount && !(e2.pagesDefinition.resultOffset + r2 >= e2.pagesDefinition.internal.set.length); r2++)
        a2[a2.length] = e2.pagesDefinition.internal.set[e2.pagesDefinition.resultOffset + r2], t3++;
      e2.pagesDefinition.resultOffset += t3;
      let s3 = false;
      return e2.pagesDefinition.internal.fullyResolved === true && e2.pagesDefinition.internal.set.length <= e2.pagesDefinition.resultOffset && (s3 = true), s3 === false && a2.push("GETPAGES"), t3;
    }
    return await this._getPhysicalPage(e2, t2, s2), this._getPage(e2, t2, s2);
  }
  _getPhysicalPage(e2, t2, s2) {
    return null;
  }
  _clonePageDefinition(e2) {
    return this._parent === null ? null : this._parent._clonePageDefinition(e2);
  }
  _first(e2) {
    return this.iterator(e2).next();
  }
  first(e2) {
    return this._first(e2);
  }
  async calculateStatistic(e2, t2, s2, a2) {
    await this._ensureLoaded();
    let r2 = await this._stat(e2, t2, "", null, null, s2, a2);
    return r2.calculated === false && (r2 = await this._manualStat(e2, t2, s2, a2)), r2.result;
  }
  async _manualStat(e2, t2, s2, a2) {
    let r2 = null;
    switch (e2.toLowerCase()) {
      case "count":
        return r2 = await M(this, a2), { calculated: true, result: r2 };
      case "distinct":
        return r2 = await C$1(this, t2, s2, a2), { calculated: true, result: r2 };
      case "avg":
      case "mean":
        return r2 = await p(this, t2, a2), { calculated: true, result: r2 };
      case "stdev":
        return r2 = await y(this, t2, a2), { calculated: true, result: r2 };
      case "variance":
        return r2 = await v(this, t2, a2), { calculated: true, result: r2 };
      case "sum":
        return r2 = await x(this, t2, a2), { calculated: true, result: r2 };
      case "min":
        return r2 = await w(this, t2, a2), { calculated: true, result: r2 };
      case "max":
        return r2 = await d(this, t2, a2), { calculated: true, result: r2 };
      default:
        return { calculated: true, result: 0 };
    }
  }
  async _stat(e2, t2, s2, a2, r2, n2, i2) {
    const l2 = await this._parent._stat(e2, t2, s2, a2, r2, n2, i2);
    return l2.calculated === false ? r2 === null && s2 === "" && a2 === null ? this._manualStat(e2, t2, n2, i2) : { calculated: false } : l2;
  }
  _unionAllGeomSelf(e2) {
    const t2 = this.iterator(this._defaultTracker(e2)), s2 = [];
    return new Promise((e3, a2) => {
      this._unionShapeInBatches(s2, t2, e3, a2);
    });
  }
  _unionAllGeom(e2) {
    return new Promise((t2, s2) => {
      const a2 = this.iterator(this._defaultTracker(e2)), r2 = [];
      this._unionShapeInBatches(r2, a2, t2, s2);
    });
  }
  _unionShapeInBatches(e2, t2, s2, a2) {
    t2.next().then((r2) => {
      try {
        r2 !== null && r2.geometry !== null && e2.push(r2.geometry), e2.length > 30 || r2 === null && e2.length > 1 ? b(e2).then((n2) => {
          try {
            r2 === null ? s2(n2) : (e2 = [n2], this._unionShapeInBatches(e2, t2, s2, a2));
          } catch (i2) {
            a2(i2);
          }
        }, a2) : r2 === null ? e2.length === 1 ? s2(e2[0]) : s2(null) : this._unionShapeInBatches(e2, t2, s2, a2);
      } catch (n2) {
        a2(n2);
      }
    }, a2);
  }
  iterator(e$1) {
    return new e(this, e$1);
  }
  intersection(e2, t2 = false) {
    return C._featuresetFunctions.intersection.bind(this)(e2, t2);
  }
  difference(e2, t2 = false, s2 = true) {
    return C._featuresetFunctions.difference.bind(this)(e2, t2, s2);
  }
  symmetricDifference(e2, t2 = false, s2 = true) {
    return C._featuresetFunctions.symmetricDifference.bind(this)(e2, t2, s2);
  }
  morphShape(e2, t2, s2 = "unknown", a2 = null) {
    return C._featuresetFunctions.morphShape.bind(this)(e2, t2, s2, a2);
  }
  morphShapeAndAttributes(e2, t2, s2 = "unknown") {
    return C._featuresetFunctions.morphShapeAndAttributes.bind(this)(e2, t2, s2);
  }
  union(e2, t2 = false) {
    return C._featuresetFunctions.union.bind(this)(e2, t2);
  }
  intersects(e2) {
    return C._featuresetFunctions.intersects.bind(this)(e2);
  }
  envelopeIntersects(e2) {
    return C._featuresetFunctions.envelopeIntersects.bind(this)(e2);
  }
  contains(e2) {
    return C._featuresetFunctions.contains.bind(this)(e2);
  }
  overlaps(e2) {
    return C._featuresetFunctions.overlaps.bind(this)(e2);
  }
  relate(e2, t2) {
    return C._featuresetFunctions.relate.bind(this)(e2, t2);
  }
  within(e2) {
    return C._featuresetFunctions.within.bind(this)(e2);
  }
  touches(e2) {
    return C._featuresetFunctions.touches.bind(this)(e2);
  }
  top(e2) {
    return C._featuresetFunctions.top.bind(this)(e2);
  }
  crosses(e2) {
    return C._featuresetFunctions.crosses.bind(this)(e2);
  }
  buffer(e2, t2, s2, a2 = true) {
    return C._featuresetFunctions.buffer.bind(this)(e2, t2, s2, a2);
  }
  filter(e2, t2 = null) {
    return C._featuresetFunctions.filter.bind(this)(e2, t2);
  }
  orderBy(e2) {
    return C._featuresetFunctions.orderBy.bind(this)(e2);
  }
  dissolve(e2, t2) {
    return C._featuresetFunctions.dissolve.bind(this)(e2, t2);
  }
  groupby(e2, t2) {
    return C._featuresetFunctions.groupby.bind(this)(e2, t2);
  }
  reduce(e2, t2 = null, s2) {
    return new Promise((a2, r2) => {
      this._reduceImpl(this.iterator(this._defaultTracker(s2)), e2, t2, 0, a2, r2, 0);
    });
  }
  _reduceImpl(e2, t2, s2, a2, r2, n2, i2) {
    try {
      if (++i2 > 1e3)
        return void setTimeout(() => {
          i2 = 0, this._reduceImpl(e2, t2, s2, a2, r2, n2, i2);
        });
      e2.next().then((l2) => {
        try {
          if (l2 === null)
            r2(s2);
          else {
            const u2 = t2(s2, l2, a2, this);
            C$2(u2) ? u2.then((s3) => {
              this._reduceImpl(e2, t2, s3, a2 + 1, r2, n2, i2);
            }, n2) : this._reduceImpl(e2, t2, u2, a2 + 1, r2, n2, i2);
          }
        } catch (u2) {
          n2(u2);
        }
      }, n2);
    } catch (l2) {
      n2(l2);
    }
  }
  removeField(e2) {
    return C._featuresetFunctions.removeField.bind(this)(e2);
  }
  addField(e2, t2, s2 = null) {
    return C._featuresetFunctions.addField.bind(this)(e2, t2, s2);
  }
  sumArea(e2, t2 = false, s2) {
    const a2 = m$2(e2);
    return this.reduce((e3, s3) => s3.geometry === null ? 0 : t2 ? K(s3.geometry, a2).then((t3) => e3 + t3) : W(s3.geometry, a2).then((t3) => e3 + t3), 0, s2);
  }
  sumLength(e2, t2 = false, s2) {
    const a2 = d$2(e2);
    return this.reduce((e3, s3) => s3.geometry === null ? 0 : t2 ? M$1(s3.geometry, a2).then((t3) => e3 + t3) : F(s3.geometry, a2).then((t3) => e3 + t3), 0, s2);
  }
  _substituteVars(e2, t2) {
    if (t2 !== null) {
      const s2 = {};
      for (const e3 in t2)
        s2[e3.toLowerCase()] = t2[e3];
      e2.parameters = s2;
    }
  }
  async distinct(e2, t2 = 1e3, s2 = null, a2) {
    await this.load();
    const r2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(r2, s2), this.calculateStatistic("distinct", r2, t2, this._defaultTracker(a2));
  }
  async min(e2, t2 = null, s2) {
    await this.load();
    const a2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(a2, t2), this.calculateStatistic("min", a2, -1, this._defaultTracker(s2));
  }
  async max(e2, t2 = null, s2) {
    await this.load();
    const a2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(a2, t2), this.calculateStatistic("max", a2, -1, this._defaultTracker(s2));
  }
  async avg(e2, t2 = null, s2) {
    await this.load();
    const a2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(a2, t2), this.calculateStatistic("avg", a2, -1, this._defaultTracker(s2));
  }
  async sum(e2, t2 = null, s2) {
    await this.load();
    const a2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(a2, t2), this.calculateStatistic("sum", a2, -1, this._defaultTracker(s2));
  }
  async stdev(e2, t2 = null, s2) {
    await this.load();
    const a2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(a2, t2), this.calculateStatistic("stdev", a2, -1, this._defaultTracker(s2));
  }
  async variance(e2, t2 = null, s2) {
    await this.load();
    const a2 = f$4.create(e2, this.getFieldsIndex());
    return this._substituteVars(a2, t2), this.calculateStatistic("variance", a2, -1, this._defaultTracker(s2));
  }
  async count(e2) {
    return await this.load(), this.calculateStatistic("count", f$4.create("1", this.getFieldsIndex()), -1, this._defaultTracker(e2));
  }
  _defaultTracker(e2) {
    return e2 || { aborted: false };
  }
  forEach(e2, t2) {
    return new Promise((s2, a2) => {
      this._forEachImpl(this.iterator(this._defaultTracker(t2)), e2, this, s2, a2, 0);
    });
  }
  _forEachImpl(e2, t2, s2, a2, r2, n2) {
    try {
      if (++n2 > 1e3)
        return void setTimeout(() => {
          n2 = 0, this._forEachImpl(e2, t2, s2, a2, r2, n2);
        }, 0);
      e2.next().then((i2) => {
        try {
          if (i2 === null)
            a2(s2);
          else {
            const l2 = t2(i2);
            l2 == null ? this._forEachImpl(e2, t2, s2, a2, r2, n2) : C$2(l2) ? l2.then(() => {
              try {
                this._forEachImpl(e2, t2, s2, a2, r2, n2);
              } catch (i3) {
                r2(i3);
              }
            }, r2) : this._forEachImpl(e2, t2, s2, a2, r2, n2);
          }
        } catch (l2) {
          r2(l2);
        }
      }, r2);
    } catch (i2) {
      r2(i2);
    }
  }
  convertToJSON(e2) {
    const t2 = { layerDefinition: { geometryType: this.geometryType, fields: [] }, featureSet: { features: [], geometryType: this.geometryType } };
    for (let s2 = 0; s2 < this.fields.length; s2++)
      t2.layerDefinition.fields.push(o$3(this.fields[s2]));
    return this.reduce((e3, s2) => {
      const a2 = { geometry: s2.geometry && s2.geometry.toJSON(), attributes: {} };
      for (const t3 in s2.attributes)
        a2.attributes[t3] = s2.attributes[t3];
      return t2.featureSet.features.push(a2), 1;
    }, 0, e2).then(() => t2);
  }
  castToText(e2 = false) {
    return "object, FeatureSet";
  }
  queryAttachments(e2, t2, s2, a2, r2) {
    return this._parent.queryAttachments(e2, t2, s2, a2, r2);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypes() {
    return this.typeIdField ? { subtypeField: this.typeIdField, subtypes: this.types ? this.types.map((e2) => ({ name: e2.name, code: e2.id })) : [] } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e2 = [];
    for (const t2 of this.fields)
      e2.push(o$3(t2));
    return { objectIdField: this.objectIdField, globalIdField: this.globalIdField, geometryType: v$1[this.geometryType] === void 0 ? "" : v$1[this.geometryType], fields: e2 };
  }
  async convertToText(e2, t2) {
    if (e2 === "schema")
      return await this._ensureLoaded(), JSON.stringify(this.schema());
    if (e2 === "featureset") {
      await this._ensureLoaded();
      const e3 = [];
      await this.reduce((t3, s3) => {
        const a2 = { geometry: s3.geometry ? s3.geometry.toJSON() : null, attributes: s3.attributes };
        return a2.geometry !== null && a2.geometry.spatialReference && delete a2.geometry.spatialReference, e3.push(a2), 1;
      }, 0, t2);
      const s2 = this.schema();
      return s2.features = e3, s2.spatialReference = this.spatialReference.toJSON(), JSON.stringify(s2);
    }
    return this.castToText();
  }
  getFeatureByObjectId(e2, t2) {
    return this._parent.getFeatureByObjectId(e2, t2);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
  getRootFeatureSet() {
    return this._parent !== null ? this._parent.getRootFeatureSet() : this;
  }
  getDataSourceFeatureSet() {
    return this._parent !== null ? this._parent.getDataSourceFeatureSet() : this;
  }
  castAsJson(e2 = null) {
    return (e2 == null ? void 0 : e2.featureset) === "keeptype" ? this : (e2 == null ? void 0 : e2.featureset) === "none" ? null : { type: "FeatureSet" };
  }
  async castAsJsonAsync(e2 = null, t2 = null) {
    var _a;
    if ((t2 == null ? void 0 : t2.featureset) === "keeptype")
      return this;
    if ((t2 == null ? void 0 : t2.featureset) === "schema")
      return await this._ensureLoaded(), JSON.parse(JSON.stringify(this.schema()));
    if ((t2 == null ? void 0 : t2.featureset) === "none")
      return null;
    await this._ensureLoaded();
    const s2 = [];
    await this.reduce((e3, a3) => {
      const r2 = { geometry: a3.geometry ? (t2 == null ? void 0 : t2.keepGeometryType) === true ? a3.geometry : a3.geometry.toJSON() : null, attributes: a3.attributes };
      return r2.geometry !== null && r2.geometry.spatialReference && (t2 == null ? void 0 : t2.keepGeometryType) !== true && delete r2.geometry.spatialReference, s2.push(r2), 1;
    }, 0, e2);
    const a2 = this.schema();
    return a2.features = s2, a2.spatialReference = (t2 == null ? void 0 : t2.keepGeometryType) === true ? this.spatialReference : (_a = this.spatialReference) == null ? void 0 : _a.toJSON(), a2;
  }
}
C._featuresetFunctions = {};
class u extends C {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new t([], [], false, null), this._parent = e2.parentfeatureset, this._databaseType = t$2.Standardised;
  }
  async _getSet() {
    return this._wset;
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return i$3.NotInFeatureSet;
  }
  async _getFeature() {
    throw new o$2(n.NeverReach);
  }
  async queryAttachments() {
    return [];
  }
  async _getFeatures() {
    return "success";
  }
  _featureFromCache() {
    return null;
  }
  async _fetchAndRefineFeatures() {
    throw new o$2(n.NeverReach);
  }
  async _getFilteredSet() {
    return new t([], [], false, null);
  }
  _stat(e2, t2, r2, s2, a2, n2, u2) {
    return this._manualStat(e2, t2, n2, u2);
  }
  async _canDoAggregates() {
    return false;
  }
}
class f extends C {
  constructor(e2) {
    super(e2), this._relation = "", this._relationGeom = null, this._relationString = "", this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._relationString = e2.relationString, this._parent = e2.parentfeatureset, this._maxProcessing = 40, this._relation = e2.relation, this._relationGeom = e2.relationGeom;
  }
  async _getSet(e2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t$12 = await this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, e2);
      return this._checkCancelled(e2), this._wset = new t(t$12._candidates.slice(0), t$12._known.slice(0), t$12._ordered, this._clonePageDefinition(t$12.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e2) {
    let t2 = this._parent._isInFeatureSet(e2);
    return t2 === i$3.NotInFeatureSet ? t2 : (t2 = this._idstates[e2], t2 === void 0 ? i$3.Unknown : t2);
  }
  _getFeature(e2, t2, i2) {
    return this._parent._getFeature(e2, t2, i2);
  }
  _getFeatures(e2, t2, i2, r2) {
    return this._parent._getFeatures(e2, t2, i2, r2);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  async executeSpatialRelationTest(e2) {
    var _a;
    if (e2.geometry === null)
      return false;
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects": {
        const t2 = f$5(this._relationGeom), i2 = f$5(e2.geometry);
        return h$2(t2, i2);
      }
      case "esriSpatialRelIntersects":
        return h$2(this._relationGeom, e2.geometry);
      case "esriSpatialRelContains":
        return p$2(this._relationGeom, e2.geometry);
      case "esriSpatialRelOverlaps":
        return O(this._relationGeom, e2.geometry);
      case "esriSpatialRelWithin":
        return x$1(this._relationGeom, e2.geometry);
      case "esriSpatialRelTouches":
        return S$1(this._relationGeom, e2.geometry);
      case "esriSpatialRelCrosses":
        return m$3(this._relationGeom, e2.geometry);
      case "esriSpatialRelRelation":
        return R(this._relationGeom, e2.geometry, (_a = this._relationString) != null ? _a : "");
    }
  }
  async _fetchAndRefineFeatures(e2, t$12, i2) {
    var _a;
    const r2 = new t([], e2, false, null), s2 = Math.min(t$12, e2.length);
    await ((_a = this._parent) == null ? void 0 : _a._getFeatures(r2, -1, s2, i2)), this._checkCancelled(i2);
    const o2 = [];
    for (let n2 = 0; n2 < s2; n2++) {
      const t2 = this._parent._featureFromCache(e2[n2]);
      o2.push(await this.executeSpatialRelationTest(t2));
    }
    for (let n2 = 0; n2 < t$12; n2++)
      o2[n2] === true ? this._idstates[e2[n2]] = i$3.InFeatureSet : this._idstates[e2[n2]] = i$3.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e2, t$12, i2, r2, a2) {
    await this._ensureLoaded();
    const s2 = await this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, i2, r2, a2);
    let o2;
    return this._checkCancelled(a2), o2 = t$12 !== null ? new t(s2._candidates.slice(0).concat(s2._known.slice(0)), [], s2._ordered, this._clonePageDefinition(s2.pagesDefinition)) : new t(s2._candidates.slice(0), s2._known.slice(0), s2._ordered, this._clonePageDefinition(s2.pagesDefinition)), o2;
  }
  async _stat(e2, t2, i2, r2, n2, a2, s2) {
    if (i2 !== "")
      return { calculated: false };
    const o2 = await this._parent._stat(e2, t2, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n2, a2, s2);
    return o2.calculated === false ? n2 === null && i2 === "" && r2 === null ? this._manualStat(e2, t2, a2, s2) : { calculated: false } : o2;
  }
  async _canDoAggregates(e2, t2, i2, r2, n2) {
    return i2 === "" && r2 === null && (this._parent !== null && this._parent._canDoAggregates(e2, t2, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n2));
  }
  async _getAggregatePagesDataSourceDefinition(e2, r2, n$1, a2, s2, o2, l2) {
    if (this._parent === null)
      throw new o$2(n.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e2, r2, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s2, o2, l2);
  }
  static registerAction() {
    C._featuresetFunctions.intersects = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelIntersects", relationGeom: t2 });
    }, C._featuresetFunctions.envelopeIntersects = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelEnvelopeIntersects", relationGeom: t2 });
    }, C._featuresetFunctions.contains = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelContains", relationGeom: t2 });
    }, C._featuresetFunctions.overlaps = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelOverlaps", relationGeom: t2 });
    }, C._featuresetFunctions.within = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelWithin", relationGeom: t2 });
    }, C._featuresetFunctions.touches = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelTouches", relationGeom: t2 });
    }, C._featuresetFunctions.crosses = function(t2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelCrosses", relationGeom: t2 });
    }, C._featuresetFunctions.relate = function(t2, i2) {
      return t2 == null ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelRelation", relationGeom: t2, relationString: i2 });
    };
  }
}
export { C, N, s$2 as a, t$1 as b, c, d$1 as d, o$1 as e, f$2 as f, g, f as h, i$1 as i, a as j, l$1 as l, m, n, o$2 as o, p$1 as p, s$1 as s, t, u, w$1 as w, y$1 as y };
