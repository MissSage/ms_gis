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
import { aK as k$1, hC as C$3, b1 as f$1, e5 as c$2, cC as g$1, c9 as r, g2 as y$1, kx as x$1, ky as n$2, cO as x$2, fI as f$3, fJ as a$3, cE as x$3, gl as ut, kz as m, hY as Ze, U, c0 as v$2, iY as s$3, du as s$4, iW as n$4, cw as p$1, hN as d$3, bN as j$2, d$ as x$4 } from "./index.js";
import { C as C$2, t as t$1, i as i$1, o, n, c as c$1, s as s$1, l, d as d$2, f as f$2, a as s$2, b as t$3, N as N$1, y, e as o$1, w, p, g as g$2, m as m$1, h as f$4, j as a$4 } from "./SpatialFilter.js";
import { $ as S$1, a0 as i, a1 as n$1, a2 as t$2, v as c$3, a3 as Me, a4 as F$2, a5 as D$1, a6 as b$1, J, a7 as e$2 } from "./arcadeUtils.js";
import { WhereClause as f } from "./WhereClause.js";
import { n as n$3, s as s$5 } from "./executeForIds.js";
class e$1 {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e2, t2, a2) {
    this._layerById[t2] = a2, this._layerByName[e2] = a2;
  }
  async featureSetByName(e2, t2 = true, a2 = ["*"]) {
    return this._layerByName[e2] === void 0 ? null : this._layerByName[e2];
  }
  async featureSetById(e2, t2 = true, a2 = ["*"]) {
    return this._layerById[e2] === void 0 ? null : this._layerById[e2];
  }
  castToText(e2 = false) {
    return "object, FeatureSetCollection";
  }
}
class c extends C$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e2.parentfeatureset, e2.whereclause instanceof f ? (this._whereclause = e2.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e2.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new k$1({ wkid: 4326 }), this.geometryType = S$1.point);
  }
  async _getSet(e2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t2 = await this._parent._getFilteredSet("", null, this._whereclause, null, e2);
      return this._checkCancelled(e2), this._whereClauseFunction !== null ? this._wset = new t$1(t2._candidates.slice(0).concat(t2._known.slice(0)), [], t2._ordered, this._clonePageDefinition(t2.pagesDefinition)) : this._wset = new t$1(t2._candidates.slice(0), t2._known.slice(0), t2._ordered, this._clonePageDefinition(t2.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e2) {
    var _a;
    let t2 = (_a = this._parent) == null ? void 0 : _a._isInFeatureSet(e2);
    return t2 === i.NotInFeatureSet ? t2 : (t2 = this._idstates[e2], t2 === void 0 ? i.Unknown : t2);
  }
  _getFeature(e2, t2, s2) {
    return this._parent._getFeature(e2, t2, s2);
  }
  _getFeatures(e2, t2, s2, i2) {
    return this._parent._getFeatures(e2, t2, s2, i2);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  executeWhereClause(e2) {
    var _a, _b;
    return (_b = (_a = this._whereclause) == null ? void 0 : _a.testFeature(e2)) != null ? _b : false;
  }
  async executeWhereClauseDeferred(e2) {
    if (this._whereClauseFunction !== null) {
      const t2 = this._whereClauseFunction(e2);
      return C$3(t2), t2;
    }
    return this.executeWhereClause(e2);
  }
  async _fetchAndRefineFeatures(e2, t2, s2) {
    var _a, _b, _c;
    const r2 = new t$1([], e2, false, null), a2 = Math.min(t2, e2.length);
    if (await ((_a = this._parent) == null ? void 0 : _a._getFeatures(r2, -1, a2, s2)), this._checkCancelled(s2), this._whereClauseFunction == null) {
      for (let t3 = 0; t3 < a2; t3++) {
        const s3 = (_b = this._parent) == null ? void 0 : _b._featureFromCache(e2[t3]);
        this.executeWhereClause(s3) === true ? this._idstates[e2[t3]] = i.InFeatureSet : this._idstates[e2[t3]] = i.NotInFeatureSet;
      }
      return "success";
    }
    const l2 = [];
    for (let i2 = 0; i2 < a2; i2++) {
      const t3 = (_c = this._parent) == null ? void 0 : _c._featureFromCache(e2[i2]);
      l2.push(await this.executeWhereClauseDeferred(t3));
    }
    for (let i$12 = 0; i$12 < t2; i$12++)
      l2[i$12] === true ? this._idstates[e2[i$12]] = i.InFeatureSet : this._idstates[e2[i$12]] = i.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e2, t2, s2, r2, n2) {
    this._whereClauseFunction !== null || (s2 !== null ? this._whereclause !== null && (s2 = i$1(this._whereclause, s2)) : s2 = this._whereclause), await this._ensureLoaded();
    const l2 = await this._parent._getFilteredSet(e2, t2, s2, r2, n2);
    let h;
    return this._checkCancelled(n2), h = this._whereClauseFunction !== null ? new t$1(l2._candidates.slice(0).concat(l2._known.slice(0)), [], l2._ordered, this._clonePageDefinition(l2.pagesDefinition)) : new t$1(l2._candidates.slice(0), l2._known.slice(0), l2._ordered, this._clonePageDefinition(l2.pagesDefinition)), h;
  }
  async _stat(e2, t2, s2, i2, r2, n2, l2) {
    if (this._whereClauseFunction !== null)
      return r2 === null && s2 === "" && i2 === null ? this._manualStat(e2, t2, n2, l2) : { calculated: false };
    let h = this._whereclause;
    r2 !== null && this._whereclause !== null && (h = i$1(this._whereclause, r2));
    const u = await this._parent._stat(e2, t2, s2, i2, h, n2, l2);
    return u.calculated === false ? r2 === null && s2 === "" && i2 === null ? this._manualStat(e2, t2, n2, l2) : { calculated: false } : u;
  }
  async _canDoAggregates(e2, t2, s2, i2, r2) {
    return this._whereClauseFunction === null && (r2 !== null ? this._whereclause !== null && (r2 = i$1(this._whereclause, r2)) : r2 = this._whereclause, this._parent !== null && this._parent._canDoAggregates(e2, t2, s2, i2, r2));
  }
  async _getAggregatePagesDataSourceDefinition(s2, i2, r2, n$12, l2, h, u) {
    if (this._parent === null)
      throw new o(n.NeverReach);
    return l2 !== null ? this._whereclause !== null && (l2 = i$1(this._whereclause, l2)) : l2 = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(s2, i2, r2, n$12, l2, h, u);
  }
  static registerAction() {
    C$2._featuresetFunctions.filter = function(e2) {
      if (typeof e2 == "function")
        return new c({ parentfeatureset: this, whereclause: e2 });
      let t2 = null;
      return e2 instanceof f && (t2 = e2), new c({ parentfeatureset: this, whereclause: t2 });
    };
  }
}
class T$1 {
  constructor(e2) {
    this.field = e2, this.sqlRewritable = false;
  }
  postInitialization(e2, t2) {
  }
}
class F$1 extends T$1 {
  constructor(e2) {
    super(e2), this.sqlRewritable = true;
  }
  extractValue(e2) {
    return e2.attributes[this.field.name];
  }
  rewriteSql(e2) {
    return { rewritten: this.sqlRewritable, where: e2 };
  }
}
class W extends T$1 {
  constructor(e2, t2, r2) {
    super(n$1(e2)), this.originalField = e2, this.sqlRewritable = true, this.field.name = t2, this.field.alias = r2;
  }
  rewriteSql(e2, t2) {
    return { rewritten: this.sqlRewritable, where: c$1(e2, this.field.name, this.originalField.name, t2.getFieldsIndex()) };
  }
  extractValue(e2) {
    return e2.attributes[this.originalField.name];
  }
}
class E$1 extends T$1 {
  constructor(e2, t2, r2) {
    super(e2), this.codefield = t2, this.lkp = r2, this.reverseLkp = {};
    for (const s2 in r2)
      this.reverseLkp[r2[s2]] = s2;
    this.sqlRewritable = true;
  }
  rewriteSql(e2, t2) {
    const r2 = this.evaluateNodeToWhereClause(e2.parseTree, t$2.Standardised, this.field.name, this.codefield instanceof f ? s$1(this.codefield, t$2.Standardised) : this.codefield, e2.parameters);
    return r2.includes(E$1.BADNESS) ? { rewritten: false, where: e2 } : { rewritten: this.sqlRewritable, where: f.create(r2, f$1(t2._parent).getFieldsIndex()) };
  }
  evaluateNodeToWhereClause(e2, t2, a2 = null, i2 = null, l$1) {
    let n2, o2, h, u;
    switch (e2.type) {
      case "interval":
        return N$1(this.evaluateNodeToWhereClause(e2.value, t2, a2, i2, l$1), e2.qualifier, e2.op);
      case "case-expression": {
        let r2 = " CASE ";
        e2.format === "simple" && (r2 += this.evaluateNodeToWhereClause(e2.operand, t2, a2, E$1.BADNESS, l$1));
        for (let s2 = 0; s2 < e2.clauses.length; s2++)
          r2 += " WHEN " + this.evaluateNodeToWhereClause(e2.clauses[s2].operand, t2, a2, E$1.BADNESS, l$1) + " THEN " + this.evaluateNodeToWhereClause(e2.clauses[s2].value, t2, a2, E$1.BADNESS, l$1);
        return e2.else !== null && (r2 += " ELSE " + this.evaluateNodeToWhereClause(e2.else, t2, a2, E$1.BADNESS, l$1)), r2 += " END ", r2;
      }
      case "parameter": {
        const r2 = l$1[e2.value.toLowerCase()];
        if (typeof r2 == "string") {
          return "'" + l$1[e2.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
        }
        if (r2 instanceof Date)
          return f$2(r2, t2);
        if (r2 instanceof Array) {
          const e3 = [];
          for (let s2 = 0; s2 < r2.length; s2++)
            typeof r2[s2] == "string" ? e3.push("'" + r2[s2].toString().replace(/'/g, "''") + "'") : r2[s2] instanceof Date ? e3.push(f$2(r2[s2], t2)) : e3.push(r2[s2].toString());
          return e3;
        }
        return r2.toString();
      }
      case "expression-list":
        o2 = [];
        for (const r2 of e2.value)
          o2.push(this.evaluateNodeToWhereClause(r2, t2, a2, i2, l$1));
        return o2;
      case "unary-expression":
        return " ( NOT " + this.evaluateNodeToWhereClause(e2.expr, t2, a2, E$1.BADNESS, l$1) + " ) ";
      case "binary-expression":
        switch (e2.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " AND " + this.evaluateNodeToWhereClause(e2.right, t2, a2, i2, l$1) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " OR " + this.evaluateNodeToWhereClause(e2.right, t2, a2, i2, l$1) + ") ";
          case "IS":
            if (e2.right.type !== "null")
              throw new s$2(t$3.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " IS NULL )";
          case "ISNOT":
            if (e2.right.type !== "null")
              throw new s$2(t$3.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " IS NOT NULL )";
          case "IN":
            if (n2 = [], e2.right.type === "expression-list") {
              if (e2.left.type === "column-reference" && e2.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const r2 = [];
                let s2 = true;
                for (const t3 of e2.right.value) {
                  if (t3.type !== "string") {
                    s2 = false;
                    break;
                  }
                  if (this.lkp[t3.value] === void 0) {
                    s2 = false;
                    break;
                  }
                  r2.push(this.lkp[t3.value].toString());
                }
                if (s2)
                  return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " IN (" + r2.join(",") + ")) ";
              }
              return n2 = this.evaluateNodeToWhereClause(e2.right, t2, a2, i2, l$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " IN (" + n2.join(",") + ")) ";
            }
            return u = this.evaluateNodeToWhereClause(e2.right, t2, a2, i2, l$1), u instanceof Array ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " IN (" + u.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " IN (" + u + ")) ";
          case "NOT IN":
            if (n2 = [], e2.right.type === "expression-list") {
              if (e2.left.type === "column-reference" && e2.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const r2 = [];
                let s2 = true;
                for (const t3 of e2.right.value) {
                  if (t3.type !== "string") {
                    s2 = false;
                    break;
                  }
                  if (this.lkp[t3.value] === void 0) {
                    s2 = false;
                    break;
                  }
                  r2.push(this.lkp[t3.value].toString());
                }
                if (s2)
                  return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " NOT IN (" + r2.join(",") + ")) ";
              }
              return n2 = this.evaluateNodeToWhereClause(e2.right, t2, a2, i2, l$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " NOT IN (" + n2.join(",") + ")) ";
            }
            return u = this.evaluateNodeToWhereClause(e2.right, t2, a2, i2, l$1), u instanceof Array ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " NOT IN (" + u.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, i2, l$1) + " NOT IN (" + u + ")) ";
          case "BETWEEN":
            return h = this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " BETWEEN " + h[0] + " AND " + h[1] + " ) ";
          case "NOTBETWEEN":
            return h = this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " NOT BETWEEN " + h[0] + " AND " + h[1] + " ) ";
          case "LIKE":
            return e2.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1) + " ESCAPE '" + e2.escape + "') " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1) + ") ";
          case "NOT LIKE":
            return e2.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " NOT LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1) + " ESCAPE '" + e2.escape + "') " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " NOT LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1) + ") ";
          case "<>":
          case "=":
            if (e2.left.type === "column-reference" && e2.right.type === "string") {
              if (e2.left.column.toUpperCase() === this.field.name.toUpperCase() && this.lkp[e2.right.value.toString()] !== void 0)
                return " (" + i2 + " " + e2.operator + " " + this.lkp[e2.right.value.toString()].toString() + ") ";
            } else if (e2.right.type === "column-reference" && e2.left.type === "string" && e2.right.column.toUpperCase() === this.field.name.toUpperCase())
              return " (" + this.lkp[e2.right.value.toString()].toString() + " " + e2.operator + " " + i2 + ") ";
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " " + e2.operator + " " + this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, a2, E$1.BADNESS, l$1) + " " + e2.operator + " " + this.evaluateNodeToWhereClause(e2.right, t2, a2, E$1.BADNESS, l$1) + ") ";
        }
      case "null":
        return "null";
      case "boolean":
        return e2.value === true ? "1" : "0";
      case "string":
        return "'" + e2.value.toString().replace(/'/g, "''") + "'";
      case "timestamp":
      case "date":
        return f$2(e2.value, t2);
      case "number":
        return e2.value.toString();
      case "current-time":
        return d$2(e2.mode === "date", t2);
      case "column-reference":
        return a2 && a2.toLowerCase() === e2.column.toLowerCase() ? "(" + i2 + ")" : e2.column;
      case "function": {
        const r2 = this.evaluateNodeToWhereClause(e2.args, t2, a2, E$1.BADNESS, l$1);
        return l(e2.name, r2, t2);
      }
    }
    throw new s$2(t$3.UnsupportedSyntax, { node: e2.type });
  }
  extractValue(e2) {
    return this.codefield instanceof f ? this.reverseLkp[this.codefield.calculateValueCompiled(e2)] : this.reverseLkp[e2.attributes[this.codefield]];
  }
}
E$1.BADNESS = "_!!!_BAD_LKP_!!!!";
class x extends T$1 {
  constructor(e2, t2) {
    super(e2), this._sql = t2;
  }
  rewriteSql(e2, t2) {
    return { rewritten: true, where: c$1(e2, this.field.name, s$1(this._sql, t$2.Standardised), t2.getFieldsIndex()) };
  }
  extractValue(e2) {
    return this._sql.calculateValueCompiled(e2);
  }
}
class A$1 extends C$2 {
  constructor(e2) {
    super(e2), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = [], this._extraFilter = null, this._extraFilter = e2.extraFilter, this._parent = e2.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e2.adaptedFields;
  }
  static findField(e2, t2) {
    for (const r2 of e2)
      if (r2.name.toLowerCase() === t2.toString().toLowerCase())
        return r2;
    return null;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new k$1({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = S$1.point, this.typeIdField = "", this.types = null), this.fields = [];
    for (const e2 of this.adaptedFields)
      e2.postInitialization(this, this._parent), this.fields.push(e2.field);
  }
  async _getSet(e2) {
    var _a;
    if (this._wset === null) {
      await this._ensureLoaded();
      let t2 = null;
      return t2 = this._extraFilter ? await this._getFilteredSet("", null, null, null, e2) : await ((_a = this._parent) == null ? void 0 : _a._getSet(e2)), this._checkCancelled(e2), c$2(t2), this._wset = new t$1(t2._candidates.slice(0), t2._known.slice(0), t2._ordered, this._clonePageDefinition(t2.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e2) {
    return f$1(this._parent)._isInFeatureSet(e2);
  }
  async _getFeatures(r2, s2, a2, i2) {
    var _a, _b;
    const l2 = [];
    s2 !== -1 && this._featureCache[s2] === void 0 && l2.push(s2);
    const o2 = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(r2, o2) === true)
      return await this._expandPagedSet(r2, o2, 0, 0, i2), this._getFeatures(r2, s2, a2, i2);
    let h = 0;
    for (let e2 = r2._lastFetchedIndex; e2 < r2._known.length && (h++, h <= a2 && (r2._lastFetchedIndex += 1), !(this._featureCache[r2._known[e2]] === void 0 && (r2._known[e2] !== s2 && l2.push(r2._known[e2]), l2.length >= o2))); e2++)
      ;
    if (l2.length === 0)
      return "success";
    r2 = new t$1([], l2, r2._ordered, null);
    const u = Math.min(l2.length, a2);
    await ((_a = this._parent) == null ? void 0 : _a._getFeatures(r2, -1, u, i2)), this._checkCancelled(i2);
    const c2 = [];
    for (let e2 = 0; e2 < u; e2++) {
      const t2 = (_b = this._parent) == null ? void 0 : _b._featureFromCache(l2[e2]);
      t2 !== void 0 && c2.push({ geometry: t2.geometry, attributes: t2.attributes, id: l2[e2] });
    }
    for (const n2 of c2) {
      const r3 = [];
      for (const e2 of this.adaptedFields)
        r3[e2.field.name] = e2.extractValue(n2);
      this._featureCache[n2.id] = new g$1({ attributes: r3, geometry: c$3(n2.geometry) });
    }
    return "success";
  }
  async _fetchAndRefineFeatures() {
    throw new o(n.NeverReach);
  }
  async _getFilteredSet(e2, t2, r2, s2, a2) {
    let i2 = false;
    const l2 = this._reformulateWithoutAdaptions(r2);
    i2 = l2.cannot, r2 = l2.where;
    let o2 = false;
    if (s2 !== null) {
      o2 = true;
      const e3 = [];
      for (const t3 of this.adaptedFields)
        if (!(t3 instanceof F$1) && s2.scanForField(t3.field.name) === true) {
          if (!(t3 instanceof W)) {
            s2 = null, o2 = false;
            break;
          }
          e3.push({ field: t3.field.name, newfield: t3.originalField.name });
        }
      s2 && e3.length > 0 && (s2 = s2.replaceFields(e3));
    }
    r2 !== null ? this._extraFilter !== null && (r2 = i$1(this._extraFilter, r2)) : r2 = this._extraFilter, await this._ensureLoaded();
    const h = await f$1(this._parent)._getFilteredSet(e2, t2, r2, s2, a2);
    let u;
    return this._checkCancelled(a2), u = i2 === true ? new t$1(h._candidates.slice(0).concat(h._known.slice(0)), [], o2 === true && h._ordered, this._clonePageDefinition(h.pagesDefinition)) : new t$1(h._candidates.slice(0), h._known.slice(0), o2 === true && h._ordered, this._clonePageDefinition(h.pagesDefinition)), u;
  }
  _reformulateWithoutAdaptions(e2) {
    const t2 = { cannot: false, where: e2 };
    if (e2 !== null) {
      for (const r2 of this.adaptedFields)
        if (y(e2, r2.field.name) === true) {
          const s2 = r2.rewriteSql(e2, this);
          if (s2.rewritten !== true) {
            t2.cannot = true, t2.where = null;
            break;
          }
          t2.where = s2.where;
        }
    }
    return t2;
  }
  async _stat(e2, t2, r2, s2, a2, i2, l2) {
    let n2 = false, o2 = this._reformulateWithoutAdaptions(t2);
    if (n2 = o2.cannot, t2 = o2.where, o2 = this._reformulateWithoutAdaptions(a2), n2 = n2 || o2.cannot, (a2 = o2.where) !== null ? this._extraFilter !== null && (a2 = i$1(this._extraFilter, a2)) : a2 = this._extraFilter, n2 === true)
      return a2 === null && r2 === "" && s2 === null ? this._manualStat(e2, t2, i2, l2) : { calculated: false };
    const h = await f$1(this._parent)._stat(e2, t2, r2, s2, a2, i2, l2);
    return h.calculated === false ? a2 === null && r2 === "" && s2 === null ? this._manualStat(e2, t2, i2, l2) : { calculated: false } : h;
  }
  async _canDoAggregates(e2, t2, r2, s2, a2) {
    if (this._parent === null)
      return false;
    for (let n2 = 0; n2 < e2.length; n2++)
      for (const t3 of this.adaptedFields)
        if (e2[n2].toLowerCase() === t3.field.name.toLowerCase() && !(t3 instanceof F$1))
          return false;
    const i2 = [];
    for (let n2 = 0; n2 < t2.length; n2++) {
      const e3 = t2[n2];
      if (e3.workingexpr !== null) {
        const t3 = this._reformulateWithoutAdaptions(e3.workingexpr);
        if (t3.cannot)
          return false;
        const r3 = e3.clone();
        r3.workingexpr = t3.where, i2.push(r3);
      } else
        i2.push(e3);
    }
    const l2 = this._reformulateWithoutAdaptions(a2);
    return !l2.cannot && ((a2 = l2.where) !== null ? this._extraFilter !== null && (a2 = i$1(this._extraFilter, a2)) : a2 = this._extraFilter, this._parent._canDoAggregates(e2, i2, r2, s2, a2));
  }
  async _getAggregatePagesDataSourceDefinition(e2, t2, r2, s2, l2, n$12, o$12) {
    if (this._parent === null)
      throw new o(n.NeverReach);
    const h = [];
    for (let c2 = 0; c2 < t2.length; c2++) {
      const e3 = t2[c2];
      if (e3.workingexpr !== null) {
        const t3 = this._reformulateWithoutAdaptions(e3.workingexpr);
        if (t3.cannot)
          throw new o(n.NeverReach);
        const r3 = e3.clone();
        r3.workingexpr = t3.where, h.push(r3);
      } else
        h.push(e3);
    }
    const u = this._reformulateWithoutAdaptions(l2);
    if (u.cannot)
      throw new o(n.NeverReach);
    return (l2 = u.where) !== null ? this._extraFilter !== null && (l2 = i$1(this._extraFilter, l2)) : l2 = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e2, h, r2, s2, l2, n$12, o$12);
  }
}
function t(t2, e2) {
  return t2 === e2 ? 0 : t2 === null ? -1 : e2 === null ? 1 : t2 < e2 ? -1 : 1;
}
class e {
  constructor(t2) {
    const e2 = t2.split(",");
    this._fields = [], this._directions = [];
    for (let s2 = 0; s2 < e2.length; s2++) {
      const t3 = e2[s2].match(/\S+/g);
      this._fields.push(t3[0]), t3.length === 2 ? t3[1].toLowerCase() === "asc" ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let t2 = "";
    for (let e2 = 0; e2 < this._fields.length; e2++)
      e2 !== 0 && (t2 += ","), t2 += this._fields[e2], this._directions[e2] === 1 ? t2 += " ASC" : t2 += " DESC";
    return t2;
  }
  order(e2) {
    e2.sort((e3, s2) => {
      for (let i2 = 0; i2 < this._fields.length; i2++) {
        const r2 = this.featureValue(e3.feature, this._fields[i2], i2), l2 = this.featureValue(s2.feature, this._fields[i2], i2);
        let o2 = 0;
        if (o2 = this._directions[i2] === 1 ? t(r2, l2) : -1 * t(r2, l2), o2 !== 0)
          return o2;
      }
      return 0;
    });
  }
  scanForField(t2) {
    for (let e2 = 0; e2 < this._fields.length; e2++)
      if (this._fields[e2].toLowerCase().trim() === t2.toLowerCase().trim())
        return true;
    return false;
  }
  replaceFields(t2) {
    let s2 = "";
    for (let e2 = 0; e2 < this._fields.length; e2++) {
      e2 !== 0 && (s2 += ",");
      let i2 = this._fields[e2];
      for (const e3 of t2)
        if (i2.toLowerCase() === e3.field.toLowerCase()) {
          i2 = e3.newfield;
          break;
        }
      s2 += i2, this._directions[e2] === 1 ? s2 += " ASC" : s2 += " DESC";
    }
    return new e(s2);
  }
  featureValue(t2, e2, s2) {
    const i2 = t2.attributes[e2];
    if (i2 !== void 0)
      return i2;
    for (const r2 in t2.attributes)
      if (e2.toLowerCase() === r2.toLowerCase())
        return this._fields[s2] = r2, t2.attributes[r2];
    return null;
  }
}
class a$2 extends C$2 {
  constructor(e2) {
    super(e2), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e2.orderbyclause, this._parent = e2.parentfeatureset;
  }
  async _getSet(e2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, this._orderbyclause, e2);
      return this._checkCancelled(e2), this._wset = t2, this._wset;
    }
    return this._wset;
  }
  async manualOrderSet(e2, t2) {
    var _a;
    const r2 = await this.getIdColumnDictionary(e2, [], -1, t2);
    (_a = this._orderbyclause) == null ? void 0 : _a.order(r2);
    const n2 = new t$1([], [], true, null);
    for (let s2 = 0; s2 < r2.length; s2++)
      n2._known.push(r2[s2].id);
    return n2;
  }
  async getIdColumnDictionary(t2, r2, n2, s2) {
    if (n2 < t2._known.length - 1) {
      const i2 = this._maxQueryRate();
      if (t2._known[n2 + 1] === "GETPAGES")
        return await Me(this._parent._expandPagedSet(t2, i2, 0, 0, s2)), this.getIdColumnDictionary(t2, r2, n2, s2);
      let a2 = n2 + 1;
      const o2 = [];
      for (; a2 < t2._known.length && t2._known[a2] !== "GETPAGES"; )
        o2.push(t2._known[a2]), a2++;
      n2 += o2.length;
      const u = await Me(this._parent._getFeatureBatch(o2, s2));
      this._checkCancelled(s2);
      for (const e2 of u)
        r2.push({ id: e2.attributes[this.objectIdField], feature: e2 });
      return this.getIdColumnDictionary(t2, r2, n2, s2);
    }
    return t2._candidates.length > 0 ? (await Me(this._refineSetBlock(t2, this._maxProcessingRate(), s2)), this._checkCancelled(s2), this.getIdColumnDictionary(t2, r2, n2, s2)) : r2;
  }
  _isInFeatureSet(e2) {
    return this._parent._isInFeatureSet(e2);
  }
  _getFeatures(e2, t2, r2, n2) {
    return this._parent._getFeatures(e2, t2, r2, n2);
  }
  _featureFromCache(e2) {
    if (this._featureCache[e2] === void 0) {
      const t2 = this._parent._featureFromCache(e2);
      if (t2 === void 0)
        return;
      return t2 === null ? null : (this._featureCache[e2] = t2, t2);
    }
    return this._featureCache[e2];
  }
  async _fetchAndRefineFeatures() {
    throw new o(n.NeverReach);
  }
  async _getFilteredSet(e2, t2, r2, n2, i2) {
    await this._ensureLoaded();
    const a2 = await this._parent._getFilteredSet(e2, t2, r2, n2 === null ? this._orderbyclause : n2, i2);
    this._checkCancelled(i2);
    const o2 = new t$1(a2._candidates.slice(0), a2._known.slice(0), a2._ordered, this._clonePageDefinition(a2.pagesDefinition));
    let u = true;
    if (a2._candidates.length > 0 && (u = false), o2._ordered === false) {
      let e3 = await this.manualOrderSet(o2, i2);
      return u === false && (t2 === null && r2 === null || (e3 = new t$1(e3._candidates.slice(0).concat(e3._known.slice(0)), [], e3._ordered, this._clonePageDefinition(e3.pagesDefinition)))), e3;
    }
    return o2;
  }
  static registerAction() {
    C$2._featuresetFunctions.orderBy = function(e$12) {
      return e$12 === "" ? this : new a$2({ parentfeatureset: this, orderbyclause: new e(e$12) });
    };
  }
}
function s(s2) {
  if (s2.parseTree.type === "function") {
    if (s2.parseTree.args.value.length === 0)
      return { name: s2.parseTree.name, expr: null };
    if (s2.parseTree.args.value.length > 1)
      throw new s$2(t$3.MissingStatisticParameters);
    const a2 = f.create(o$1(s2.parseTree.args.value[0], t$2.Standardised, s2.parameters), s2.fieldsIndex);
    return { name: s2.parseTree.name, expr: a2 };
  }
  return null;
}
class a$1 {
  constructor() {
    this.field = "", this.tofieldname = "", this.typeofstat = "MIN", this.workingexpr = null;
  }
  clone() {
    const e2 = new a$1();
    return e2.field = this.field, e2.tofieldname = this.tofieldname, e2.typeofstat = this.typeofstat, e2.workingexpr = this.workingexpr, e2;
  }
  static parseStatField(r2, n2, o2) {
    const l2 = new a$1();
    l2.field = r2;
    const p2 = f.create(n2, o2), f$12 = s(p2);
    if (f$12 === null)
      throw new s$2(t$3.UnsupportedSqlFunction, { function: "" });
    const u = f$12.name.toUpperCase().trim();
    if (u === "MIN") {
      if (l2.typeofstat = "MIN", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: "min" });
    } else if (u === "MAX") {
      if (l2.typeofstat = "MAX", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: "max" });
    } else if (u === "COUNT")
      l2.typeofstat = "COUNT", l2.workingexpr = f$12.expr;
    else if (u === "STDEV") {
      if (l2.typeofstat = "STDDEV", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: "stdev" });
    } else if (u === "SUM") {
      if (l2.typeofstat = "SUM", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: "sum" });
    } else if (u === "MEAN") {
      if (l2.typeofstat = "AVG", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: u });
    } else if (u === "AVG") {
      if (l2.typeofstat = "AVG", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: "avg" });
    } else {
      if (u !== "VAR")
        throw new s$2(t$3.UnsupportedSqlFunction, { function: u });
      if (l2.typeofstat = "VAR", l2.workingexpr = f$12.expr, p2 === null)
        throw new s$2(t$3.InvalidFunctionParameters, { function: "var" });
    }
    return l2;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
}
function j$1(e2) {
  if (!e2)
    return "COUNT";
  switch (e2.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
class C$1 extends C$2 {
  constructor(e2) {
    super(e2), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = true, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e2.parentfeatureset, this._config = e2;
  }
  isTable() {
    return true;
  }
  async _getSet(e2) {
    if (this._wset === null) {
      const t2 = await this._getFilteredSet("", null, null, null, e2);
      return this._wset = t2, this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet() {
    return i.InFeatureSet;
  }
  _nextUniqueName(e2) {
    for (; e2["T" + this._uniqueIds.toString()] === 1; )
      this._uniqueIds++;
    const t2 = "T" + this._uniqueIds.toString();
    return e2[t2] = 1, t2;
  }
  _convertToEsriFieldType(e2) {
    return e2;
  }
  _initialiseFeatureSet() {
    const e2 = {};
    let t2 = false, n$12 = 1;
    const r$1 = this._parent ? this._parent.getFieldsIndex() : new r([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; t2 === false; ) {
      let e3 = false;
      for (let t3 = 0; t3 < this._config.groupbyfields.length; t3++)
        if (this._config.groupbyfields[t3].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          e3 = true;
          break;
        }
      if (e3 === false) {
        for (let t3 = 0; t3 < this._config.statsfields.length; t3++)
          if (this._config.statsfields[t3].name.toLowerCase() === this.objectIdField.toLowerCase()) {
            e3 = true;
            break;
          }
      }
      e3 === false ? t2 = true : (this.objectIdField = "ROW__ID" + n$12.toString(), n$12++);
    }
    for (const i2 of this._config.statsfields) {
      const e3 = new a$1();
      e3.field = i2.name, e3.tofieldname = i2.name, e3.workingexpr = i2.expression instanceof f ? i2.expression : f.create(i2.expression, r$1), e3.typeofstat = j$1(i2.statistic), this._decodedStatsfield.push(e3);
    }
    this._decodedGroupbyfield = [];
    for (const i2 of this._config.groupbyfields) {
      const e3 = { name: i2.name, singlefield: null, tofieldname: i2.name, expression: i2.expression instanceof f ? i2.expression : f.create(i2.expression, r$1) };
      this._decodedGroupbyfield.push(e3);
    }
    if (this._parent !== null) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const t3 of this._parent.fields)
        e2[t3.name.toUpperCase()] = 1;
      this.types = null;
    } else
      this.geometryType = S$1.point, this.typeIdField = "", this.types = null, this.spatialReference = new k$1({ wkid: 4326 });
    this.fields = [];
    const a2 = new a$1();
    a2.field = this._nextUniqueName(e2), a2.tofieldname = this.objectIdField, a2.workingexpr = f.create(this._parent.objectIdField, this._parent.getFieldsIndex()), a2.typeofstat = "MIN", this._decodedStatsfield.push(a2);
    for (const s2 of this._decodedGroupbyfield) {
      const t3 = new y$1();
      if (s2.name = this._nextUniqueName(e2), t3.name = s2.tofieldname, t3.alias = t3.name, w(s2.expression)) {
        const e3 = this._parent.getField(s$1(s2.expression, t$2.Standardised));
        if (!e3)
          throw new o(n.AggregationFieldNotFound);
        s2.name = e3.name, s2.singlefield = e3.name, this.phsyicalgroupbyfields.push(e3.name), t3.type = e3.type;
      } else {
        t3.type = this._convertToEsriFieldType(p(s2.expression, this._parent.fields));
        const e3 = new y$1();
        e3.name = s2.name, e3.alias = e3.name, this.phsyicalgroupbyfields.push(s2.name), this._adaptedFields.push(new x(e3, s2.expression)), this._candosimplegroupby = false;
      }
      this.fields.push(t3);
    }
    if (this._adaptedFields.length > 0)
      for (const i2 of this._parent.fields)
        this._adaptedFields.push(new F$1(i2));
    for (let i2 = 0; i2 < this._decodedStatsfield.length; i2++) {
      const t3 = new y$1();
      let s2 = null;
      const n$13 = this._decodedStatsfield[i2];
      n$13.field = this._nextUniqueName(e2), n$13.tofieldname === this.objectIdField && (this._internalObjectIdField = n$13.field), t3.name = n$13.tofieldname, t3.alias = t3.name;
      const r2 = n$13.workingexpr !== null && w(n$13.workingexpr) ? s$1(n$13.workingexpr, t$2.Standardised) : "";
      switch (this._decodedStatsfield[i2].typeofstat) {
        case "SUM":
          if (r2 !== "") {
            if (s2 = this._parent.getField(r2), !s2)
              throw new o(n.AggregationFieldNotFound);
            t3.type = s2.type;
          } else
            t3.type = "double";
          break;
        case "MIN":
        case "MAX":
          if (r2 !== "") {
            if (s2 = this._parent.getField(r2), !s2)
              throw new o(n.AggregationFieldNotFound);
            t3.type = s2.type;
          } else
            t3.type = "double";
          break;
        case "COUNT":
          t3.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if (r2 !== "" && (s2 = this._parent.getField(r2), !s2))
            throw new o(n.AggregationFieldNotFound);
          t3.type = "double";
      }
      this.fields.push(t3);
    }
  }
  async _canDoAggregates() {
    return false;
  }
  async _getFeatures(e2, t2, i2, s2) {
    t2 !== -1 && this._featureCache[t2];
    const n2 = this._maxQuery;
    return this._checkIfNeedToExpandKnownPage(e2, n2) === true ? (await this._expandPagedSet(e2, n2, 0, 0, s2), this._getFeatures(e2, t2, i2, s2)) : "success";
  }
  async _getFilteredSet(e$12, t2, i2, s2, l2) {
    if (e$12 !== "")
      return new t$1([], [], true, null);
    let u = null;
    const f2 = { ordered: false, nowhereclause: false };
    if (await this._ensureLoaded(), i2 !== null) {
      for (let n2 = 0; n2 < this._decodedStatsfield.length; n2++)
        if (y(i2, this._decodedStatsfield[n2].tofieldname) === true) {
          f2.nowhereclause = true, i2 = null;
          break;
        }
    }
    if (s2 !== null) {
      f2.ordered = true;
      for (let e2 = 0; e2 < this._decodedStatsfield.length; e2++)
        if (s2.scanForField(this._decodedStatsfield[e2].tofieldname) === true) {
          s2 = null, f2.ordered = false;
          break;
        }
      if (s2 !== null) {
        for (const e2 of this._decodedGroupbyfield)
          if (e2.singlefield === null && s2.scanForField(e2.tofieldname) === true) {
            s2 = null, f2.ordered = false;
            break;
          }
      }
    }
    if (this._candosimplegroupby !== false && await this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null)) {
      let e2 = null;
      i2 && (e2 = this._reformulateWhereClauseWithoutGroupByFields(i2));
      let t3 = null;
      s2 && (t3 = this._reformulateOrderClauseWithoutGroupByFields(s2));
      const n2 = await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, e2, t3, this._internalObjectIdField);
      return this._checkCancelled(l2), u = f2.nowhereclause === true ? new t$1(n2._candidates.slice(0).concat(n2._known.slice(0)), [], f2.ordered === true && n2._ordered, this._clonePageDefinition(n2.pagesDefinition)) : new t$1(n2._candidates.slice(0), n2._known.slice(0), f2.ordered === true && n2._ordered, this._clonePageDefinition(n2.pagesDefinition)), u;
    }
    let c$12 = this._parent;
    if (this._adaptedFields.length > 0 && (c$12 = new A$1({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), f2.nowhereclause === true)
      u = new t$1(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a$2({ parentfeatureset: c$12, orderbyclause: new e(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    else {
      let e$13 = c$12;
      if (i2 !== null) {
        let t3 = null;
        i2 && (t3 = this._reformulateWhereClauseWithoutGroupByFields(i2)), e$13 = new c({ parentfeatureset: e$13, whereclause: t3 });
      }
      u = new t$1(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a$2({ parentfeatureset: e$13, orderbyclause: new e(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    }
    return u;
  }
  _reformulateWhereClauseWithoutStatsFields(e2) {
    for (const t2 of this._decodedStatsfield)
      e2 = c$1(e2, t2.tofieldname, s$1(t2.workingexpr, t$2.Standardised), this._parent.getFieldsIndex());
    return e2;
  }
  _reformulateWhereClauseWithoutGroupByFields(e2) {
    for (const t2 of this._decodedGroupbyfield)
      t2.tofieldname !== t2.name && (e2 = c$1(e2, t2.tofieldname, s$1(t2.expression, t$2.Standardised), this._parent.getFieldsIndex()));
    return e2;
  }
  _reformulateOrderClauseWithoutGroupByFields(e2) {
    const t2 = [];
    for (const i2 of this._decodedGroupbyfield)
      i2.tofieldname !== i2.name && t2.push({ field: i2.tofieldname, newfield: i2.name });
    return t2.length > 0 ? e2.replaceFields(t2) : e2;
  }
  _clonePageDefinition(e2) {
    return e2 === null ? null : e2.aggregatefeaturesetpagedefinition === true ? { aggregatefeaturesetpagedefinition: true, resultRecordCount: e2.resultRecordCount, resultOffset: e2.resultOffset, internal: e2.internal } : this._parent._clonePageDefinition(e2);
  }
  async _refineSetBlock(e2, t2, i2) {
    if (this._checkIfNeedToExpandCandidatePage(e2, this._maxQuery) === true)
      return await this._expandPagedSet(e2, this._maxQuery, 0, 0, i2), this._refineSetBlock(e2, t2, i2);
    this._checkCancelled(i2);
    e2._candidates.length;
    this._refineKnowns(e2, t2);
    e2._candidates.length;
    return e2._candidates.length, e2;
  }
  _expandPagedSet(e2, t2, i2, s2, n2) {
    return this._expandPagedSetFeatureSet(e2, t2, i2, s2, n2);
  }
  async _getPhysicalPage(t2, i2, s2) {
    if (t2.pagesDefinition.aggregatefeaturesetpagedefinition === true)
      return this._sequentialGetPhysicalItem(t2, t2.pagesDefinition.resultRecordCount, s2, []);
    const n2 = await this._getAgregagtePhysicalPage(t2, i2, s2);
    for (const r2 of n2) {
      const t3 = { geometry: r2.geometry, attributes: {} };
      for (const e2 of this._decodedGroupbyfield)
        t3.attributes[e2.tofieldname] = r2.attributes[e2.name];
      for (const e2 of this._decodedStatsfield)
        t3.attributes[e2.tofieldname] = r2.attributes[e2.field];
      this._featureCache[t3.attributes[this.objectIdField]] = new g$1(t3);
    }
    return n2.length;
  }
  _sequentialGetPhysicalItem(e2, t2, i2, s2) {
    return new Promise((n2, r2) => {
      e2.pagesDefinition.internal.iterator === null && (e2.pagesDefinition.internal.iterator = e2.pagesDefinition.internal.subfeatureset.iterator(i2)), e2.pagesDefinition.internal.fullyResolved === true || t2 === 0 ? n2(s2.length) : this._nextAggregateItem(e2, t2, i2, s2, (r3) => {
        r3 === null ? n2(s2.length) : (t2 -= 1, n2(this._sequentialGetPhysicalItem(e2, t2, i2, s2)));
      }, r2);
    });
  }
  _nextAggregateItem(e2, i2, s2, n2, r2, a2) {
    try {
      Me(e2.pagesDefinition.internal.iterator.next()).then((t2) => {
        if (t2 === null)
          if (e2.pagesDefinition.internal.workingItem !== null) {
            const t3 = this._calculateAndAppendAggregateItem(e2.pagesDefinition.internal.workingItem);
            n2.push(t3), e2.pagesDefinition.internal.workingItem = null, e2.pagesDefinition.internal.set.push(t3.attributes[this.objectIdField]), e2.pagesDefinition.internal.fullyResolved = true, r2(null);
          } else
            e2.pagesDefinition.internal.fullyResolved = true, r2(null);
        else {
          const l2 = this._generateAggregateHash(t2);
          if (e2.pagesDefinition.internal.workingItem === null)
            e2.pagesDefinition.internal.workingItem = { features: [t2], id: l2 };
          else {
            if (l2 !== e2.pagesDefinition.internal.workingItem.id) {
              const s3 = this._calculateAndAppendAggregateItem(e2.pagesDefinition.internal.workingItem);
              return n2.push(s3), e2.pagesDefinition.internal.workingItem = null, e2.pagesDefinition.internal.set.push(s3.attributes[this.objectIdField]), i2 -= 1, e2.pagesDefinition.internal.workingItem = { features: [t2], id: l2 }, void r2(s3);
            }
            e2.pagesDefinition.internal.workingItem.features.push(t2);
          }
          this._nextAggregateItem(e2, i2, s2, n2, r2, a2);
        }
      }, a2);
    } catch (l2) {
      a2(l2);
    }
  }
  _calculateFieldStat(e2, t2, i2) {
    const s2 = [];
    for (let n2 = 0; n2 < e2.features.length; n2++)
      if (t2.workingexpr !== null) {
        const i3 = t2.workingexpr.calculateValue(e2.features[n2]);
        i3 !== null && s2.push(i3);
      } else
        s2.push(null);
    switch (t2.typeofstat) {
      case "MIN":
        i2.attributes[t2.tofieldname] = g$2("min", s2, -1);
        break;
      case "MAX":
        i2.attributes[t2.tofieldname] = g$2("max", s2, -1);
        break;
      case "SUM":
        i2.attributes[t2.tofieldname] = g$2("sum", s2, -1);
        break;
      case "COUNT":
        i2.attributes[t2.tofieldname] = s2.length;
        break;
      case "VAR":
        i2.attributes[t2.tofieldname] = g$2("var", s2, -1);
        break;
      case "STDDEV":
        i2.attributes[t2.tofieldname] = g$2("stddev", s2, -1);
        break;
      case "AVG":
        i2.attributes[t2.tofieldname] = g$2("avg", s2, -1);
    }
    return true;
  }
  _calculateAndAppendAggregateItem(t2) {
    const i2 = { attributes: {}, geometry: null };
    for (const e2 of this._decodedGroupbyfield) {
      const s3 = e2.singlefield ? t2.features[0].attributes[e2.singlefield] : e2.expression.calculateValue(t2.features[0]);
      i2.attributes[e2.tofieldname] = s3;
    }
    for (const e2 of this._decodedStatsfield)
      this._calculateFieldStat(t2, e2, i2);
    const s2 = [];
    for (let e2 = 0; e2 < this._decodedStatsfield.length; e2++)
      s2.push(this._calculateFieldStat(t2, this._decodedStatsfield[e2], i2));
    return this._featureCache[i2.attributes[this.objectIdField]] = new g$1({ attributes: i2.attributes, geometry: i2.geometry }), i2;
  }
  _generateAggregateHash(e2) {
    let t2 = "";
    for (const i2 of this._decodedGroupbyfield) {
      const s2 = i2.singlefield ? e2.attributes[i2.singlefield] : i2.expression.calculateValue(e2);
      t2 += s2 == null ? ":" : ":" + s2.toString();
    }
    return x$1(t2, n$2.String);
  }
  async _stat() {
    return { calculated: false };
  }
  async getFeatureByObjectId() {
    return null;
  }
  static registerAction() {
    C$2._featuresetFunctions.groupby = function(e2, t2) {
      return new C$1({ parentfeatureset: this, groupbyfields: e2, statsfields: t2 });
    };
  }
}
class a extends C$2 {
  constructor(t2) {
    super(t2), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = t2.topnum, this._parent = t2.parentfeatureset;
  }
  async _getSet(t2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const e2 = await this._parent._getSet(t2);
      return this._wset = new t$1(e2._candidates.slice(0), e2._known.slice(0), false, this._clonePageDefinition(e2.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset;
    }
    return this._wset;
  }
  _setKnownLength(t2) {
    return t2._known.length > 0 && t2._known[t2._known.length - 1] === "GETPAGES" ? t2._known.length - 1 : t2._known.length;
  }
  _isInFeatureSet(t2) {
    const e2 = this._parent._isInFeatureSet(t2);
    if (e2 === i.NotInFeatureSet)
      return e2;
    const n2 = this._idstates[t2];
    return n2 === i.InFeatureSet || n2 === i.NotInFeatureSet ? n2 : e2 === i.InFeatureSet && n2 === void 0 ? this._countedin < this._topnum ? (this._idstates[t2] = i.InFeatureSet, this._countedin++, i.InFeatureSet) : (this._idstates[t2] = i.NotInFeatureSet, i.NotInFeatureSet) : i.Unknown;
  }
  async _expandPagedSet(n$12, s2, i2, a2, o$12) {
    if (this._parent === null)
      throw new o(n.NotImplemented);
    if (s2 > this._topnum && (s2 = this._topnum), this._countedin >= this._topnum && n$12.pagesDefinition.internal.set.length <= n$12.pagesDefinition.resultOffset) {
      let t2 = n$12._known.length;
      return t2 > 0 && n$12._known[t2 - 1] === "GETPAGES" && (n$12._known.length = t2 - 1), t2 = n$12._candidates.length, t2 > 0 && n$12._candidates[t2 - 1] === "GETPAGES" && (n$12._candidates.length = t2 - 1), "success";
    }
    const r2 = await this._parent._expandPagedSet(n$12, s2, i2, a2, o$12);
    return this._setKnownLength(n$12) > this._topnum && (n$12._known.length = this._topnum), this._setKnownLength(n$12) >= this._topnum && (n$12._candidates.length = 0), r2;
  }
  async _getFeatures(t2, e2, n2, i2) {
    const a2 = [], o2 = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(t2, o2) === true)
      return await this._expandPagedSet(t2, o2, 0, 0, i2), this._getFeatures(t2, e2, n2, i2);
    e2 !== -1 && this._featureCache[e2] === void 0 && a2.push(e2);
    let r2 = 0;
    for (let s2 = t2._lastFetchedIndex; s2 < t2._known.length && (r2++, r2 <= n2 && (t2._lastFetchedIndex += 1), !(this._featureCache[t2._known[s2]] === void 0 && (t2._known[s2] !== e2 && a2.push(t2._known[s2]), a2.length > o2))); s2++)
      ;
    if (a2.length === 0)
      return "success";
    const _ = new t$1([], a2, false, null), h = Math.min(a2.length, n2);
    await this._parent._getFeatures(_, -1, h, i2);
    for (let s2 = 0; s2 < h; s2++) {
      const t3 = this._parent._featureFromCache(a2[s2]);
      t3 !== void 0 && (this._featureCache[a2[s2]] = t3);
    }
    return "success";
  }
  async _getFilteredSet(t2, e2, n2, i2, a2) {
    await this._ensureLoaded();
    const o2 = await this._getSet(a2);
    return new t$1(o2._candidates.slice(0).concat(o2._known.slice(0)), [], false, this._clonePageDefinition(o2.pagesDefinition));
  }
  _refineKnowns(t2, e2) {
    let n2 = 0, s2 = null;
    const a2 = [];
    for (let o2 = 0; o2 < t2._candidates.length; o2++) {
      const r2 = this._isInFeatureSet(t2._candidates[o2]);
      if (r2 === i.InFeatureSet) {
        if (t2._known.push(t2._candidates[o2]), n2 += 1, s2 === null ? s2 = { start: o2, end: o2 } : s2.end === o2 - 1 ? s2.end = o2 : (a2.push(s2), s2 = { start: o2, end: o2 }), t2._known.length >= this._topnum)
          break;
      } else if (r2 === i.NotInFeatureSet)
        s2 === null ? s2 = { start: o2, end: o2 } : s2.end === o2 - 1 ? s2.end = o2 : (a2.push(s2), s2 = { start: o2, end: o2 }), n2 += 1;
      else if (r2 === i.Unknown)
        break;
      if (n2 >= e2)
        break;
    }
    s2 !== null && a2.push(s2);
    for (let i2 = a2.length - 1; i2 >= 0; i2--)
      t2._candidates.splice(a2[i2].start, a2[i2].end - a2[i2].start + 1);
    this._setKnownLength(t2) > this._topnum && (t2._known = t2._known.slice(0, this._topnum)), this._setKnownLength(t2) >= this._topnum && (t2._candidates = []);
  }
  async _stat() {
    return { calculated: false };
  }
  async _canDoAggregates() {
    return false;
  }
  static registerAction() {
    C$2._featuresetFunctions.top = function(t2) {
      return new a({ parentfeatureset: this, topnum: t2 });
    };
  }
}
class v$1 extends C$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = false, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = false, this._requestStandardised = false, this._useDefinitionExpression = true, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e2.layer, this._wset = null, e2.outFields !== void 0 && (this._overrideFields = e2.outFields), e2.includeGeometry !== void 0 && (this._removeGeometry = e2.includeGeometry === false);
  }
  _maxQueryRate() {
    return F$2;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e2) {
    this._pageJustIds = e2;
  }
  convertQueryToLruCacheKey(e2) {
    const t2 = D$1(e2.toJSON());
    return x$1(t2, n$2.String);
  }
  async loadImpl() {
    return this._layer.loaded === true ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    var _a;
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields)
      if (this._layer.outFields.length === 1 && this._layer.outFields[0] === "*")
        ;
      else {
        const e2 = [];
        for (const t2 of this.fields)
          if (t2.type === "oid")
            e2.push(t2);
          else
            for (const i2 of this._layer.outFields)
              if (i2.toLowerCase() === t2.name.toLowerCase()) {
                e2.push(t2);
                break;
              }
        this.fields = e2;
      }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e2 = [], t2 = [];
        for (const i2 of this.fields)
          if (i2.type === "oid")
            e2.push(i2), t2.push(i2.name);
          else
            for (const r2 of this._overrideFields)
              if (r2.toLowerCase() === i2.name.toLowerCase()) {
                e2.push(i2), t2.push(i2.name);
                break;
              }
        this.fields = e2, this._overrideFields = t2;
      }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e2 = this._layer.source.sourceJSON.currentVersion;
      this._layer.source.sourceJSON.useStandardizedQueries === true ? (this._databaseType = t$2.StandardisedNoInterval, e2 != null && e2 >= 10.61 && (this._databaseType = t$2.Standardised)) : e2 != null && (e2 >= 10.5 && (this._databaseType = t$2.StandardisedNoInterval, this._requestStandardised = true), e2 >= 10.61 && (this._databaseType = t$2.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e2 of this.fields)
      e2.type === "global-id" && (this.globalIdField = e2.name);
    this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this.typeIdField = (_a = this._layer.typeIdField) != null ? _a : "", this.types = this._layer.types;
  }
  _isInFeatureSet() {
    return i.InFeatureSet;
  }
  async _refineSetBlock(e2) {
    return e2;
  }
  _candidateIdTransform(e2) {
    return e2;
  }
  async _getSet(e2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, null, e2);
      return this._wset = t2, t2;
    }
    return this._wset;
  }
  async _runDatabaseProbe(e2) {
    await this._ensureLoaded();
    const t2 = new x$2();
    t2.where = e2.replace("OBJECTID", this._layer.objectIdField);
    try {
      return await this._layer.queryObjectIds(t2), true;
    } catch (i2) {
      return false;
    }
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || this._layer.capabilities.query.supportsPagination !== true);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e2) {
    var _a, _b;
    const t2 = (_b = (_a = this._layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.query;
    return !e2.outStatistics && (t2 == null ? void 0 : t2.supportsFormatPBF) === true && (t2 == null ? void 0 : t2.supportsQuantizationEditMode) === true;
  }
  async queryPBF(e2) {
    e2.quantizationParameters = { mode: "edit" };
    const t2 = await f$3(this._layer.parsedUrl, e2, new a$3({}));
    return x$3.fromJSON(ut(t2.data)).unquantize();
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion ? this._layer.gdbVersion : "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    var _a;
    return { title: (_a = this._layer.title) != null ? _a : "", source: this, canQueryRelated: true, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  executeQuery(e2, t2) {
    const i2 = t2 === "execute" ? s$3 : t2 === "executeForCount" ? n$3 : s$5, r2 = t2 === "execute" && this.pbfSupportedForQuery(e2);
    let s2 = null;
    if (this.recentlyUsedQueries) {
      const t3 = this.convertQueryToLruCacheKey(e2);
      s2 = this.recentlyUsedQueries.getFromCache(t3), s2 === null && (s2 = r2 !== true ? i2(this._layer.parsedUrl.path, e2) : this.queryPBF(e2), this.recentlyUsedQueries.addToCache(t3, s2), s2 = s2.catch((e3) => {
        var _a;
        throw (_a = this.recentlyUsedQueries) == null ? void 0 : _a.removeFromCache(t3), e3;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e2, method: t2 }), s2 === null && (s2 = r2 !== true ? i2(this._layer.parsedUrl.path, e2) : this.queryPBF(e2)), s2;
  }
  async _getFilteredSet(e2, t2, i2, r2, a2) {
    const n2 = await this.databaseType();
    if (this.isTable() && t2 && e2 !== null && e2 !== "") {
      return new t$1([], [], true, null);
    }
    if (this._canUsePagination())
      return this._getFilteredSetUsingPaging(e2, t2, i2, r2, a2);
    let l2 = "", o2 = false;
    r2 !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === true && (l2 = r2.constructClause(), o2 = true);
    const u = new x$2();
    u.where = i2 === null ? t2 === null ? "1=1" : "" : s$1(i2, n2), this._requestStandardised && (u.sqlFormat = "standard"), u.spatialRelationship = this._makeRelationshipEnum(e2), u.outSpatialReference = this.spatialReference, u.orderByFields = l2 !== "" ? l2.split(",") : null, u.geometry = t2 === null ? null : t2, u.relationParameter = this._makeRelationshipParam(e2);
    let c2 = await this.executeQuery(u, "executeForIds");
    c2 === null && (c2 = []), this._checkCancelled(a2);
    return new t$1([], c2, o2, null);
  }
  _expandPagedSet(e2, t2, i2, r2, s2) {
    return this._expandPagedSetFeatureSet(e2, t2, i2, r2, s2);
  }
  async _getFilteredSetUsingPaging(e2, t2, i2, r2, a2) {
    var _a;
    let n2 = "", l2 = false;
    r2 !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === true && (n2 = r2.constructClause(), l2 = true);
    const o2 = await this.databaseType();
    let u = i2 === null ? t2 === null ? "1=1" : "" : s$1(i2, o2);
    this._layer.definitionExpression && this._useDefinitionExpression && (u = u !== "" ? "((" + this._layer.definitionExpression + ") AND (" + u + "))" : this._layer.definitionExpression);
    let c2 = this._maxQueryRate();
    const p2 = (_a = this._layer.capabilities) == null ? void 0 : _a.query.maxRecordCount;
    p2 !== void 0 && p2 < c2 && (c2 = p2);
    let h = null;
    if (this._pageJustIds === true)
      h = new t$1([], ["GETPAGES"], l2, { spatialRel: this._makeRelationshipEnum(e2), relationParam: this._makeRelationshipParam(e2), outFields: this._layer.objectIdField, resultRecordCount: c2, resultOffset: 0, geometry: t2 === null ? null : t2, where: u, orderByFields: n2, returnGeometry: false, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    else {
      let i3 = true;
      this._removeGeometry === true && (i3 = false);
      const r3 = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]);
      h = new t$1([], ["GETPAGES"], l2, { spatialRel: this._makeRelationshipEnum(e2), relationParam: this._makeRelationshipParam(e2), outFields: r3.join(","), resultRecordCount: c2, resultOffset: 0, geometry: t2 === null ? null : t2, where: u, orderByFields: n2, returnGeometry: i3, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    }
    return await this._expandPagedSet(h, c2, 0, 1, a2), h;
  }
  _clonePageDefinition(e2) {
    return e2 === null ? null : e2.groupbypage !== true ? { groupbypage: false, spatialRel: e2.spatialRel, relationParam: e2.relationParam, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, resultOffset: e2.resultOffset, geometry: e2.geometry, where: e2.where, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal } : { groupbypage: true, spatialRel: e2.spatialRel, relationParam: e2.relationParam, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, useOIDpagination: e2.useOIDpagination, generatedOid: e2.generatedOid, groupByFieldsForStatistics: e2.groupByFieldsForStatistics, resultOffset: e2.resultOffset, outStatistics: e2.outStatistics, geometry: e2.geometry, where: e2.where, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal };
  }
  async _getPhysicalPage(e2, t2, i2) {
    const r2 = e2.pagesDefinition.internal.lastRetrieved, s2 = r2, a2 = e2.pagesDefinition.internal.lastPage, n2 = new x$2();
    this._requestStandardised && (n2.sqlFormat = "standard"), n2.spatialRelationship = e2.pagesDefinition.spatialRel, n2.relationParameter = e2.pagesDefinition.relationParam, n2.outFields = e2.pagesDefinition.outFields.split(","), n2.num = e2.pagesDefinition.resultRecordCount, n2.start = e2.pagesDefinition.internal.lastPage, n2.geometry = e2.pagesDefinition.geometry, n2.where = e2.pagesDefinition.where, n2.orderByFields = e2.pagesDefinition.orderByFields !== "" ? e2.pagesDefinition.orderByFields.split(",") : null, n2.returnGeometry = e2.pagesDefinition.returnGeometry, n2.outSpatialReference = this.spatialReference;
    const l2 = await this.executeQuery(n2, "execute");
    if (this._checkCancelled(i2), e2.pagesDefinition.internal.lastPage !== a2)
      return "done";
    const o2 = this._layer.objectIdField;
    for (let u = 0; u < l2.features.length; u++)
      e2.pagesDefinition.internal.set[s2 + u] = l2.features[u].attributes[o2];
    if (this._pageJustIds === false)
      for (let u = 0; u < l2.features.length; u++)
        this._featureCache[l2.features[u].attributes[o2]] = l2.features[u];
    return (l2.exceededTransferLimit === void 0 && l2.features.length !== e2.pagesDefinition.resultRecordCount || l2.exceededTransferLimit === false) && (e2.pagesDefinition.internal.fullyResolved = true), e2.pagesDefinition.internal.lastRetrieved = r2 + l2.features.length, e2.pagesDefinition.internal.lastPage += e2.pagesDefinition.resultRecordCount, "done";
  }
  _fieldsIncludingObjectId(e2) {
    if (e2 === null)
      return [this.objectIdField];
    const t2 = e2.slice(0);
    if (t2.includes("*"))
      return t2;
    let i2 = false;
    for (const r2 of t2)
      if (r2.toUpperCase() === this.objectIdField.toUpperCase()) {
        i2 = true;
        break;
      }
    return i2 === false && t2.push(this.objectIdField), t2;
  }
  async _getFeatures(e2, t2, i2, r2) {
    const s2 = [];
    if (t2 !== -1 && this._featureCache[t2] === void 0 && s2.push(t2), this._checkIfNeedToExpandKnownPage(e2, this._maxProcessingRate()) === true)
      return await this._expandPagedSet(e2, this._maxProcessingRate(), 0, 0, r2), this._getFeatures(e2, t2, i2, r2);
    let a2 = 0;
    for (let u = e2._lastFetchedIndex; u < e2._known.length; u++) {
      if (e2._lastFetchedIndex += 1, a2++, this._featureCache[e2._known[u]] === void 0) {
        let i3 = false;
        if (this._layer._mode !== null && this._layer._mode !== void 0) {
          const t3 = this._layer._mode;
          if (t3._featureMap[e2._known[u]] !== void 0) {
            const r3 = t3._featureMap[e2._known[u]];
            r3 !== null && (i3 = true, this._featureCache[e2._known[u]] = r3);
          }
        }
        if (i3 === false && (e2._known[u] !== t2 && s2.push(e2._known[u]), s2.length >= this._maxProcessingRate() - 1))
          break;
      }
      if (a2 >= i2 && s2.length === 0)
        break;
    }
    if (s2.length === 0)
      return "success";
    const n$12 = new x$2();
    this._requestStandardised && (n$12.sqlFormat = "standard"), n$12.objectIds = s2, n$12.outFields = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]), n$12.returnGeometry = true, this._removeGeometry === true && (n$12.returnGeometry = false), n$12.outSpatialReference = this.spatialReference;
    const l2 = await this.executeQuery(n$12, "execute");
    if (this._checkCancelled(r2), l2.error !== void 0)
      throw new o(n.RequestFailed, { reason: l2.error });
    const o$12 = this._layer.objectIdField;
    for (let u = 0; u < l2.features.length; u++)
      this._featureCache[l2.features[u].attributes[o$12]] = l2.features[u];
    return "success";
  }
  async _getDistinctPages(e2, t2, i2, r2, s2, a2, n$12, l2, o$12) {
    var _a, _b;
    await this._ensureLoaded();
    const u = await this.databaseType();
    let c2 = i2.parseTree.column;
    const p2 = (_a = this._layer.fields) != null ? _a : [];
    for (let d2 = 0; d2 < p2.length; d2++)
      if (p2[d2].name.toLowerCase() === c2.toLowerCase()) {
        c2 = p2[d2].name;
        break;
      }
    const h = new x$2();
    this._requestStandardised && (h.sqlFormat = "standard");
    let y2 = a2 === null ? s2 === null ? "1=1" : "" : s$1(a2, u);
    this._layer.definitionExpression && this._useDefinitionExpression && (y2 = y2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + y2 + "))" : this._layer.definitionExpression), h.where = y2, h.spatialRelationship = this._makeRelationshipEnum(r2), h.relationParameter = this._makeRelationshipParam(r2), h.geometry = s2 === null ? null : s2, h.returnDistinctValues = true, h.returnGeometry = false, h.outFields = [c2];
    const f2 = await this.executeQuery(h, "execute");
    if (this._checkCancelled(o$12), !f2.hasOwnProperty("features"))
      throw new o(n.InvalidStatResponse);
    let _ = false;
    for (let d2 = 0; d2 < p2.length; d2++)
      if (p2[d2].name === c2) {
        p2[d2].type === "date" && (_ = true);
        break;
      }
    for (let d2 = 0; d2 < f2.features.length; d2++) {
      if (_) {
        const e3 = f2.features[d2].attributes[c2];
        e3 !== null ? l2.push(new Date(e3)) : l2.push(e3);
      } else
        l2.push(f2.features[d2].attributes[c2]);
      if (l2.length >= n$12)
        break;
    }
    if (f2.features.length === 0)
      return l2;
    if (f2.features.length === ((_b = this._layer.capabilities) == null ? void 0 : _b.query.maxRecordCount) && l2.length < n$12) {
      return { calculated: true, result: await this._getDistinctPages(e2 + f2.features.length, t2, i2, r2, s2, a2, n$12, l2, o$12) };
    }
    return l2;
  }
  async _distinctStat(e2, t2, i2, r2, s2, a2, n2) {
    return { calculated: true, result: await this._getDistinctPages(0, e2, t2, i2, r2, s2, a2, [], n2) };
  }
  isTable() {
    return this._layer.isTable || this._layer.geometryType === null || this._layer.type === "table" || this._layer.geometryType === "";
  }
  async _countstat(e2, t2, i2, r2) {
    const s2 = await this.databaseType(), a2 = new x$2();
    if (this._requestStandardised && (a2.sqlFormat = "standard"), this.isTable() && i2 && t2 !== null && t2 !== "")
      return { calculated: true, result: 0 };
    let n2 = r2 === null ? i2 === null ? "1=1" : "" : s$1(r2, s2);
    this._layer.definitionExpression && this._useDefinitionExpression && (n2 = n2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + n2 + "))" : this._layer.definitionExpression), a2.where = n2, a2.where = n2, a2.spatialRelationship = this._makeRelationshipEnum(t2), a2.relationParameter = this._makeRelationshipParam(t2), a2.geometry = i2 === null ? null : i2, a2.returnGeometry = false;
    return { calculated: true, result: await this.executeQuery(a2, "executeForCount") };
  }
  async _stats(e2, t2, i2, r2, s2, a2, n$12) {
    var _a;
    await this._ensureLoaded();
    const l2 = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === true, o$12 = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsStatistics === true, u = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsDistinct === true;
    if (e2 === "count")
      return u ? this._countstat(e2, i2, r2, s2) : { calculated: false };
    if (o$12 === false || w(t2) === false && l2 === false || t2.isStandardized === false)
      return i2 !== "" || s2 !== null ? { calculated: false } : this._manualStat(e2, t2, a2, n$12);
    if (e2 === "distinct")
      return u === false ? i2 !== "" || s2 !== null ? { calculated: false } : this._manualStat(e2, t2, a2, n$12) : this._distinctStat(e2, t2, i2, r2, s2, a2, n$12);
    const h = await this.databaseType();
    if (this.isTable() && r2 && i2 !== null && i2 !== "")
      return { calculated: true, result: null };
    const y2 = new x$2();
    this._requestStandardised && (y2.sqlFormat = "standard");
    let f2 = s2 === null ? r2 === null ? "1=1" : "" : s$1(s2, h);
    this._layer.definitionExpression && this._useDefinitionExpression && (f2 = f2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + f2 + "))" : this._layer.definitionExpression), y2.where = f2, y2.spatialRelationship = this._makeRelationshipEnum(i2), y2.relationParameter = this._makeRelationshipParam(i2), y2.geometry = r2 === null ? null : r2;
    const _ = new m();
    _.statisticType = m$1(e2), _.onStatisticField = s$1(t2, h), _.outStatisticFieldName = "ARCADE_STAT_RESULT", y2.returnGeometry = false;
    let m$2 = "ARCADE_STAT_RESULT";
    y2.outStatistics = [_];
    const g2 = await this.executeQuery(y2, "execute");
    if (!g2.hasOwnProperty("features") || g2.features.length === 0)
      throw new o(n.InvalidStatResponse);
    let S2 = false;
    const F2 = (_a = g2.fields) != null ? _a : [];
    for (let d2 = 0; d2 < F2.length; d2++)
      if (F2[d2].name.toUpperCase() === "ARCADE_STAT_RESULT") {
        m$2 = F2[d2].name, F2[d2].type === "date" && (S2 = true);
        break;
      }
    if (S2) {
      let e3 = g2.features[0].attributes[m$2];
      return e3 !== null && (e3 = new Date(g2.features[0].attributes[m$2])), { calculated: true, result: e3 };
    }
    return { calculated: true, result: g2.features[0].attributes[m$2] };
  }
  _stat(e2, t2, i2, r2, s2, a2, n2) {
    return this._stats(e2, t2, i2, r2, s2, a2, n2);
  }
  async _canDoAggregates(e2, t2) {
    var _a, _b;
    await this._ensureLoaded();
    let i2 = false;
    const r2 = (_a = this._layer.capabilities) == null ? void 0 : _a.query, s2 = (r2 == null ? void 0 : r2.supportsSqlExpression) === true;
    if (r2 != null && r2.supportsStatistics === true && r2.supportsOrderBy === true && (i2 = true), i2)
      for (let a2 = 0; a2 < t2.length - 1; a2++)
        (((_b = t2[a2].workingexpr) == null ? void 0 : _b.isStandardized) === false || w(t2[a2].workingexpr) === false && s2 === false) && (i2 = false);
    return i2 !== false;
  }
  _makeRelationshipEnum(e2) {
    if (e2.includes("esriSpatialRelRelation"))
      return "relation";
    switch (e2) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e2;
  }
  _makeRelationshipParam(e2) {
    return e2.includes("esriSpatialRelRelation") ? e2.split(":")[1] : "";
  }
  async _getAggregatePagesDataSourceDefinition(e2, t2, i2, r2, a2, n2, l2) {
    var _a;
    await this._ensureLoaded();
    const o2 = await this.databaseType();
    let u = "", c2 = false, p2 = false;
    n2 !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === true && (u = n2.constructClause(), p2 = true), this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsPagination === false && (p2 = false, c2 = true, u = this._layer.objectIdField);
    const h = [];
    for (let s2 = 0; s2 < t2.length; s2++) {
      const e3 = new m();
      e3.onStatisticField = t2[s2].workingexpr !== null ? s$1(t2[s2].workingexpr, o2) : "", e3.outStatisticFieldName = t2[s2].field, e3.statisticType = t2[s2].toStatisticsName(), h.push(e3);
    }
    u === "" && (u = e2.join(","));
    let y2 = this._maxQueryRate();
    const f2 = (_a = this._layer.capabilities) == null ? void 0 : _a.query.maxRecordCount;
    f2 !== void 0 && f2 < y2 && (y2 = f2);
    let _ = a2 === null ? r2 === null ? "1=1" : "" : s$1(a2, o2);
    this._layer.definitionExpression && this._useDefinitionExpression && (_ = _ !== "" ? "((" + this._layer.definitionExpression + ") AND (" + _ + "))" : this._layer.definitionExpression);
    return new t$1([], ["GETPAGES"], p2, { groupbypage: true, spatialRel: this._makeRelationshipEnum(i2), relationParam: this._makeRelationshipParam(i2), outFields: ["*"], useOIDpagination: c2, generatedOid: l2, resultRecordCount: y2, resultOffset: 0, groupByFieldsForStatistics: e2, outStatistics: h, geometry: r2 === null ? null : r2, where: _, orderByFields: u, returnGeometry: false, returnIdsOnly: false, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
  }
  async _getAgregagtePhysicalPage(t2, i2, r2) {
    let s2 = t2.pagesDefinition.where;
    t2.pagesDefinition.useOIDpagination === true && (s2 = s2 !== "" ? "(" + s2 + ") AND (" + t2.pagesDefinition.generatedOid + ">" + t2.pagesDefinition.internal.lastMaxId.toString() + ")" : t2.pagesDefinition.generatedOid + ">" + t2.pagesDefinition.internal.lastMaxId.toString());
    const a2 = t2.pagesDefinition.internal.lastRetrieved, n$12 = a2, l2 = t2.pagesDefinition.internal.lastPage, o$12 = new x$2();
    if (this._requestStandardised && (o$12.sqlFormat = "standard"), o$12.where = s2, o$12.spatialRelationship = t2.pagesDefinition.spatialRel, o$12.relationParameter = t2.pagesDefinition.relationParam, o$12.outFields = t2.pagesDefinition.outFields, o$12.outStatistics = t2.pagesDefinition.outStatistics, o$12.geometry = t2.pagesDefinition.geometry, o$12.groupByFieldsForStatistics = t2.pagesDefinition.groupByFieldsForStatistics, o$12.num = t2.pagesDefinition.resultRecordCount, o$12.start = t2.pagesDefinition.internal.lastPage, o$12.returnGeometry = t2.pagesDefinition.returnGeometry, o$12.orderByFields = t2.pagesDefinition.orderByFields !== "" ? t2.pagesDefinition.orderByFields.split(",") : null, this.isTable() && o$12.geometry && o$12.spatialRelationship)
      return [];
    const u = await this.executeQuery(o$12, "execute");
    if (this._checkCancelled(r2), !u.hasOwnProperty("features"))
      throw new o(n.InvalidStatResponse);
    const d2 = [];
    if (t2.pagesDefinition.internal.lastPage !== l2)
      return [];
    for (let e2 = 0; e2 < u.features.length; e2++)
      t2.pagesDefinition.internal.set[n$12 + e2] = u.features[e2].attributes[t2.pagesDefinition.generatedOid];
    for (let c2 = 0; c2 < u.features.length; c2++)
      d2.push(new g$1({ attributes: u.features[c2].attributes, geometry: null }));
    return t2.pagesDefinition.useOIDpagination === true ? u.features.length === 0 ? t2.pagesDefinition.internal.fullyResolved = true : t2.pagesDefinition.internal.lastMaxId = u.features[u.features.length - 1].attributes[t2.pagesDefinition.generatedOid] : (u.exceededTransferLimit === void 0 && u.features.length !== t2.pagesDefinition.resultRecordCount || u.exceededTransferLimit === false) && (t2.pagesDefinition.internal.fullyResolved = true), t2.pagesDefinition.internal.lastRetrieved = a2 + u.features.length, t2.pagesDefinition.internal.lastPage += t2.pagesDefinition.resultRecordCount, d2;
  }
  static create(e2, t2, i2, r2, s2) {
    const a2 = new Ze({ url: e2, outFields: t2 === null ? ["*"] : t2 });
    return new v$1({ layer: a2, spatialReference: i2, lrucache: r2, interceptor: s2 });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON && this._layer.source.sourceJSON.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return b$1(this._layer.parsedUrl.path);
  }
  async queryAttachments(e2, t2, r2, s2, a2) {
    const n2 = this._layer.capabilities;
    if ((n2 == null ? void 0 : n2.data.supportsAttachment) && (n2 == null ? void 0 : n2.operations.supportsQueryAttachments)) {
      const n3 = { objectIds: [e2], returnMetadata: a2 };
      (t2 && t2 > 0 || r2 && r2 > 0) && (n3.size = [t2 && t2 > 0 ? t2 : 0, r2 && r2 > 0 ? r2 : t2 + 1]), s2 && s2.length > 0 && (n3.attachmentTypes = s2), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: n3, method: "attachments" });
      const l2 = await this._layer.queryAttachments(n3), o2 = [];
      return l2 && l2[e2] && l2[e2].forEach((t3) => {
        const r3 = this._layer.parsedUrl.path + "/" + e2.toString() + "/attachments/" + t3.id.toString();
        let s3 = null;
        a2 && t3.exifInfo && (s3 = J.convertJsonToArcade(t3.exifInfo, true)), o2.push(new e$2(t3.id, t3.name, t3.contentType, t3.size, r3, s3));
      }), o2;
    }
    return [];
  }
  async queryRelatedFeatures(i2) {
    var _a;
    const r2 = { f: "json", relationshipId: i2.relationshipId.toString(), definitionExpression: i2.where, outFields: (_a = i2.outFields) == null ? void 0 : _a.join(","), returnGeometry: i2.returnGeometry.toString() };
    i2.resultOffset !== void 0 && i2.resultOffset !== null && (r2.resultOffset = i2.resultOffset.toString()), i2.resultRecordCount !== void 0 && i2.resultRecordCount !== null && (r2.resultRecordCount = i2.resultRecordCount.toString()), i2.orderByFields && (r2.orderByFields = i2.orderByFields.join(",")), i2.objectIds && i2.objectIds.length > 0 && (r2.objectIds = i2.objectIds.join(",")), i2.outSpatialReference && (r2.outSR = JSON.stringify(i2.outSpatialReference.toJSON())), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: r2, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" });
    const s2 = await U(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: r2 });
    if (s2.data) {
      const t2 = {}, i3 = s2.data;
      if (i3 && i3.relatedRecordGroups) {
        const r3 = i3.spatialReference;
        for (const s3 of i3.relatedRecordGroups) {
          const a2 = s3.objectId, n2 = [];
          for (const t3 of s3.relatedRecords) {
            t3.geometry && (t3.geometry.spatialReference = r3);
            const i4 = new g$1({ geometry: t3.geometry ? v$2(t3.geometry) : null, attributes: t3.attributes });
            n2.push(i4);
          }
          t2[a2] = { features: n2, exceededTransferLimit: i3.exceededTransferLimit === true };
        }
      }
      return t2;
    }
    throw new o(n.InvalidRequest);
  }
  async getFeatureByObjectId(e2, t2) {
    const i2 = new x$2();
    i2.outFields = t2, i2.returnGeometry = false, i2.outSpatialReference = this.spatialReference, i2.where = this.objectIdField + "=" + e2.toString(), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: i2, method: "execute" });
    const r2 = await s$3(this._layer.parsedUrl.path, i2);
    return r2.features.length === 1 ? r2.features[0] : null;
  }
  async getIdentityUser() {
    var _a;
    await this.load();
    const e2 = (_a = s$4) == null ? void 0 : _a.findCredential(this._layer.url);
    return e2 ? e2.userId : null;
  }
  async getOwningSystemUrl() {
    var _a;
    await this.load();
    const e2 = (_a = s$4) == null ? void 0 : _a.findServerInfo(this._layer.url);
    if (e2)
      return e2.owningSystemUrl;
    let i2 = this._layer.url;
    const r2 = i2.toLowerCase().indexOf("/rest/services");
    if (i2 = r2 > -1 ? i2.substring(0, r2) : i2, i2) {
      i2 += "/rest/info";
      try {
        const e3 = await U(i2, { query: { f: "json" } });
        let r3 = "";
        return e3.data && e3.data.owningSystemUrl && (r3 = e3.data.owningSystemUrl), r3;
      } catch (s2) {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    var _a, _b, _c, _d;
    const e2 = new v$1({ layer: this._layer, spatialReference: (_a = this.spatialReference) != null ? _a : void 0, outFields: (_b = this._overrideFields) != null ? _b : void 0, includeGeometry: !this._removeGeometry, lrucache: (_c = this.recentlyUsedQueries) != null ? _c : void 0, interceptor: (_d = this.featureSetQueryInterceptor) != null ? _d : void 0 });
    return e2._useDefinitionExpression = false, e2;
  }
}
class d$1 extends C$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = false, this._overrideFields = null, this._forceIsTable = false, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e2.layer, this._wset = null, e2.isTable === true && (this._forceIsTable = true), e2.outFields !== void 0 && (this._overrideFields = e2.outFields), e2.includeGeometry !== void 0 && (this._removeGeometry = e2.includeGeometry === false);
  }
  _maxQueryRate() {
    return F$2;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return this._layer.loaded === true ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields)
      if (this._layer.outFields.length === 1 && this._layer.outFields[0] === "*")
        ;
      else {
        const e2 = [];
        for (const t2 of this.fields)
          if (t2.type === "oid")
            e2.push(t2);
          else
            for (const s2 of this._layer.outFields)
              if (s2.toLowerCase() === t2.name.toLowerCase()) {
                e2.push(t2);
                break;
              }
        this.fields = e2;
      }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e2 = [], t2 = [];
        for (const s2 of this.fields)
          if (s2.type === "oid")
            e2.push(s2), t2.push(s2.name);
          else
            for (const r2 of this._overrideFields)
              if (r2.toLowerCase() === s2.name.toLowerCase()) {
                e2.push(s2), t2.push(s2.name);
                break;
              }
        this.fields = e2, this._overrideFields = t2;
      }
    this.objectIdField = this._layer.objectIdField;
    for (const e2 of this.fields)
      e2.type === "global-id" && (this.globalIdField = e2.name);
    this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this._databaseType = t$2.Standardised, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || this._layer.type === "table" || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return i.InFeatureSet;
  }
  _candidateIdTransform(e2) {
    return e2;
  }
  async _getSet(e2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, null, e2);
      return this._wset = t2, t2;
    }
    return this._wset;
  }
  _changeFeature(t2) {
    const s2 = {};
    for (const e2 of this.fields)
      s2[e2.name] = t2.attributes[e2.name];
    return new g$1({ geometry: this._removeGeometry === true ? null : t2.geometry, attributes: s2 });
  }
  async _getFilteredSet(e2, t2, s2, r2, a2) {
    let n2 = "", u = false;
    if (r2 !== null && (n2 = r2.constructClause(), u = true), this.isTable() && t2 && e2 !== null && e2 !== "") {
      return new t$1([], [], true, null);
    }
    const h = new x$2();
    h.where = s2 === null ? t2 === null ? "1=1" : "" : s$1(s2, t$2.Standardised), h.spatialRelationship = this._makeRelationshipEnum(e2), h.outSpatialReference = this.spatialReference, h.orderByFields = n2 !== "" ? n2.split(",") : null, h.geometry = t2 === null ? null : t2, h.returnGeometry = true, h.relationParameter = this._makeRelationshipParam(e2);
    const c2 = await this._layer.queryFeatures(h);
    if (c2 === null)
      return new t$1([], [], u, null);
    this._checkCancelled(a2);
    const y2 = [];
    c2.features.forEach((e3) => {
      const t3 = e3.attributes[this._layer.objectIdField];
      y2.push(t3), this._featureCache[t3] = this._changeFeature(e3);
    });
    return new t$1([], y2, u, null);
  }
  _makeRelationshipEnum(e2) {
    if (e2.includes("esriSpatialRelRelation"))
      return "relation";
    switch (e2) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e2;
  }
  _makeRelationshipParam(e2) {
    return e2.includes("esriSpatialRelRelation") ? e2.split(":")[1] : "";
  }
  async _queryAllFeatures() {
    if (this._wset)
      return this._wset;
    const e2 = new x$2();
    if (e2.where = "1=1", await this._ensureLoaded(), this._layer.source && this._layer.source.items) {
      const e3 = [];
      return this._layer.source.items.forEach((t3) => {
        const s3 = t3.attributes[this._layer.objectIdField];
        e3.push(s3), this._featureCache[s3] = this._changeFeature(t3);
      }), this._wset = new t$1([], e3, false, null), this._wset;
    }
    const t2 = await this._layer.queryFeatures(e2), s2 = [];
    return t2.features.forEach((e3) => {
      const t3 = e3.attributes[this._layer.objectIdField];
      s2.push(t3), this._featureCache[t3] = this._changeFeature(e3);
    }), this._wset = new t$1([], s2, false, null), this._wset;
  }
  async _getFeatures(e2, r2, i2) {
    const a2 = [];
    r2 !== -1 && this._featureCache[r2] === void 0 && a2.push(r2);
    for (let t2 = e2._lastFetchedIndex; t2 < e2._known.length && (e2._lastFetchedIndex += 1, !(this._featureCache[e2._known[t2]] === void 0 && (e2._known[t2] !== r2 && a2.push(e2._known[t2]), a2.length > i2))); t2++)
      ;
    if (a2.length === 0)
      return "success";
    throw new o(n.MissingFeatures);
  }
  async _refineSetBlock(e2) {
    return e2;
  }
  async _stat() {
    return { calculated: false };
  }
  async _canDoAggregates() {
    return false;
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e2) {
    const t2 = {};
    for (const s2 in e2)
      t2[s2] = e2[s2];
    return t2;
  }
  nativeCapabilities() {
    var _a;
    return { title: (_a = this._layer.title) != null ? _a : "", canQueryRelated: false, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: true };
  }
  static create(e2, t2) {
    let s2 = e2.layerDefinition.objectIdField;
    const r2 = e2.layerDefinition.typeIdField ? e2.layerDefinition.typeIdField : "", i2 = [];
    if (e2.layerDefinition.types)
      for (const u of e2.layerDefinition.types)
        i2.push(n$4.fromJSON(u));
    let a2 = e2.layerDefinition.geometryType;
    a2 === void 0 && (a2 = e2.featureSet.geometryType || "");
    let l2 = e2.featureSet.features;
    const n2 = t2.toJSON();
    if (s2 === "" || s2 === void 0) {
      let t3 = false;
      for (const r3 of e2.layerDefinition.fields)
        if (r3.type === "oid" || r3.type === "esriFieldTypeOID") {
          s2 = r3.name, t3 = true;
          break;
        }
      if (t3 === false) {
        let t4 = "FID", r3 = true, i3 = 0;
        for (; r3; ) {
          let s3 = true;
          for (const r4 of e2.layerDefinition.fields)
            if (r4.name === t4) {
              s3 = false;
              break;
            }
          s3 === true ? r3 = false : (i3++, t4 = "FID" + i3.toString());
        }
        e2.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: t4, alias: t4 });
        const a3 = [];
        for (let s3 = 0; s3 < l2.length; s3++)
          a3.push({ geometry: e2.featureSet.features[s3].geometry, attributes: e2.featureSet.features[s3].attributes ? this._cloneAttr(e2.featureSet.features[s3].attributes) : {} }), a3[s3].attributes[t4] = s3;
        l2 = a3, s2 = t4;
      }
    }
    const o2 = [];
    for (const u of e2.layerDefinition.fields)
      u instanceof y$1 ? o2.push(u) : o2.push(y$1.fromJSON(u));
    let p2 = a2;
    switch (p2) {
      case "esriGeometryPoint":
        p2 = "point";
        break;
      case "esriGeometryPolyline":
        p2 = "polyline";
        break;
      case "esriGeometryPolygon":
        p2 = "polygon";
        break;
      case "esriGeometryExtent":
        p2 = "extent";
        break;
      case "esriGeometryMultipoint":
        p2 = "multipoint";
    }
    for (const h of l2)
      h.geometry && h.geometry instanceof p$1 == false && (h.geometry.type = p2, h.geometry.spatialReference === void 0 && (h.geometry.spatialReference = n2));
    const f2 = { outFields: ["*"], source: l2, fields: o2, types: i2, typeIdField: r2, objectIdField: s2, spatialReference: t2 };
    f2.geometryType = p2 || "point";
    const _ = new Ze(f2);
    return new d$1({ layer: _, spatialReference: t2, isTable: p2 === null || p2 === "" });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e2) {
    const t2 = new x$2();
    t2.where = this.objectIdField + "=" + e2.toString();
    const s2 = await this._layer.queryFeatures(t2);
    return s2.features.length === 1 ? s2.features[0] : null;
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
}
class d extends C$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = false, this._removeGeometry = false, this._overrideFields = null, this.featureObjectId = null, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e2.layer, this._wset = null, this._findObjectId = e2.objectId, this.featureObjectId = e2.objectId, this.relationship = e2.relationship, this._relatedLayer = e2.relatedLayer, e2.outFields !== void 0 && (this._overrideFields = e2.outFields), e2.includeGeometry !== void 0 && (this._removeGeometry = e2.includeGeometry === false);
  }
  _maxQueryRate() {
    return F$2;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    var _a;
    return await Promise.all([this._layer.load(), (_a = this._relatedLayer) == null ? void 0 : _a.load()]), this._initialiseFeatureSet(), this;
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(0), this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e3 = [], t2 = [];
        for (const i2 of this.fields)
          if (i2.type === "oid")
            e3.push(i2), t2.push(i2.name);
          else
            for (const r2 of this._overrideFields)
              if (r2.toLowerCase() === i2.name.toLowerCase()) {
                e3.push(i2), t2.push(i2.name);
                break;
              }
        this.fields = e3, this._overrideFields = t2;
      }
    const e2 = this._layer.nativeCapabilities();
    e2 && (this._databaseType = e2.databaseType, this._requestStandardised = e2.requestStandardised), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types;
  }
  async databaseType() {
    return await this._relatedLayer.databaseType(), this._databaseType = this._relatedLayer._databaseType, this._databaseType;
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return i.InFeatureSet;
  }
  _candidateIdTransform(e2) {
    return e2;
  }
  async _getSet(e2) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, null, e2);
      return this._wset = t2, t2;
    }
    return this._wset;
  }
  _changeFeature(t2) {
    const i2 = {};
    for (const e2 of this.fields)
      i2[e2.name] = t2.attributes[e2.name];
    return new g$1({ geometry: this._removeGeometry === true ? null : t2.geometry, attributes: i2 });
  }
  async _getFilteredSet(e2, t2, i2, r2, a2) {
    var _a;
    if (await this.databaseType(), this.isTable() && t2 && e2 !== null && e2 !== "") {
      return new t$1([], [], true, null);
    }
    const n2 = this._layer.nativeCapabilities();
    if (n2.canQueryRelated === false) {
      return new t$1([], [], true, null);
    }
    if (((_a = n2.capabilities) == null ? void 0 : _a.queryRelated) && n2.capabilities.queryRelated.supportsPagination)
      return this._getFilteredSetUsingPaging(e2, t2, i2, r2, a2);
    let d2 = "", o2 = false;
    r2 !== null && n2.capabilities && n2.capabilities.queryRelated && n2.capabilities.queryRelated.supportsOrderBy === true && (d2 = r2.constructClause(), o2 = true);
    const u = new d$3();
    u.objectIds = [this._findObjectId];
    const h = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e3) => e3.name) : ["*"]);
    u.outFields = h, u.relationshipId = this.relationship.id, u.where = "1=1";
    let c2 = true;
    this._removeGeometry === true && (c2 = false), u.returnGeometry = c2, this._requestStandardised && (u.sqlFormat = "standard"), u.outSpatialReference = this.spatialReference, u.orderByFields = d2 !== "" ? d2.split(",") : null;
    const y2 = await n2.source.queryRelatedFeatures(u);
    this._checkCancelled(a2);
    const p2 = y2[this._findObjectId] ? y2[this._findObjectId].features : [], _ = [];
    for (let s2 = 0; s2 < p2.length; s2++)
      this._featureCache[p2[s2].attributes[this._relatedLayer.objectIdField]] = p2[s2], _.push(p2[s2].attributes[this._relatedLayer.objectIdField]);
    const f2 = t2 && e2 !== null && e2 !== "", g2 = i2 != null;
    return new t$1(f2 || g2 ? _ : [], f2 || g2 ? [] : _, o2, null);
  }
  _fieldsIncludingObjectId(e2) {
    if (e2 === null)
      return [this.objectIdField];
    const t2 = e2.slice(0);
    if (t2.includes("*"))
      return t2;
    let i2 = false;
    for (const r2 of t2)
      if (r2.toUpperCase() === this.objectIdField.toUpperCase()) {
        i2 = true;
        break;
      }
    return i2 === false && t2.push(this.objectIdField), t2;
  }
  async _getFilteredSetUsingPaging(e2, t2, i2, r2, a2) {
    var _a, _b;
    let n2 = "", l2 = false;
    const d2 = this._layer.nativeCapabilities();
    r2 !== null && d2 && ((_a = d2.capabilities) == null ? void 0 : _a.queryRelated) && d2.capabilities.queryRelated.supportsOrderBy === true && (n2 = r2.constructClause(), l2 = true), await this.databaseType();
    const o2 = "1=1";
    let u = this._maxQueryRate();
    const h = (_b = d2.capabilities) == null ? void 0 : _b.query.maxRecordCount;
    h !== void 0 && h < u && (u = h);
    const c2 = t2 && e2 !== null && e2 !== "", y2 = i2 != null;
    let p2 = null, _ = true;
    this._removeGeometry === true && (_ = false);
    const f2 = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e3) => e3.name) : ["*"]);
    return p2 = new t$1(c2 || y2 ? ["GETPAGES"] : [], c2 || y2 ? [] : ["GETPAGES"], l2, { outFields: f2.join(","), resultRecordCount: u, resultOffset: 0, objectIds: [this._findObjectId], where: o2, orderByFields: n2, returnGeometry: _, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } }), await this._expandPagedSet(p2, u, 0, 0, a2), p2;
  }
  _expandPagedSet(e2, t2, i2, r2, s2) {
    return this._expandPagedSetFeatureSet(e2, t2, i2, r2, s2);
  }
  _clonePageDefinition(e2) {
    return e2 === null ? null : e2.groupbypage !== true ? { groupbypage: false, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, resultOffset: e2.resultOffset, where: e2.where, objectIds: e2.objectIds, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal } : { groupbypage: true, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, useOIDpagination: e2.useOIDpagination, generatedOid: e2.generatedOid, groupByFieldsForStatistics: e2.groupByFieldsForStatistics, resultOffset: e2.resultOffset, outStatistics: e2.outStatistics, geometry: e2.geometry, where: e2.where, objectIds: e2.objectIds, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal };
  }
  async _getPhysicalPage(e2, t2, i2) {
    const r2 = e2.pagesDefinition.internal.lastRetrieved, s2 = r2, a2 = e2.pagesDefinition.internal.lastPage, n2 = this._layer.nativeCapabilities(), d2 = new d$3();
    this._requestStandardised === true && (d2.sqlFormat = "standard"), d2.relationshipId = this.relationship.id, d2.objectIds = e2.pagesDefinition.objectIds, d2.resultOffset = e2.pagesDefinition.internal.lastPage, d2.resultRecordCount = e2.pagesDefinition.resultRecordCount, d2.outFields = e2.pagesDefinition.outFields.split(","), d2.where = e2.pagesDefinition.where, d2.orderByFields = e2.pagesDefinition.orderByFields !== "" ? e2.pagesDefinition.orderByFields.split(",") : null, d2.returnGeometry = e2.pagesDefinition.returnGeometry, d2.outSpatialReference = this.spatialReference;
    const o2 = await n2.source.queryRelatedFeatures(d2);
    if (this._checkCancelled(i2), e2.pagesDefinition.internal.lastPage !== a2)
      return 0;
    const u = o2[this._findObjectId] ? o2[this._findObjectId].features : [];
    for (let l2 = 0; l2 < u.length; l2++)
      e2.pagesDefinition.internal.set[s2 + l2] = u[l2].attributes[this._relatedLayer.objectIdField];
    for (let l2 = 0; l2 < u.length; l2++)
      this._featureCache[u[l2].attributes[this._relatedLayer.objectIdField]] = u[l2];
    const h = !o2[this._findObjectId] || o2[this._findObjectId].exceededTransferLimit === false;
    return u.length !== e2.pagesDefinition.resultRecordCount && h && (e2.pagesDefinition.internal.fullyResolved = true), e2.pagesDefinition.internal.lastRetrieved = r2 + u.length, e2.pagesDefinition.internal.lastPage += e2.pagesDefinition.resultRecordCount, u.length;
  }
  async _getFeatures(e2, r2, s2, a2) {
    const n$12 = [];
    r2 !== -1 && this._featureCache[r2] === void 0 && n$12.push(r2);
    const l2 = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e2, l2) === true)
      return await this._expandPagedSet(e2, l2, 0, 0, a2), this._getFeatures(e2, r2, s2, a2);
    let d2 = 0;
    for (let t2 = e2._lastFetchedIndex; t2 < e2._known.length && (d2++, d2 <= s2 && (e2._lastFetchedIndex += 1), !(e2._known[t2] !== "GETPAGES" && this._featureCache[e2._known[t2]] === void 0 && (e2._known[t2] !== r2 && n$12.push(e2._known[t2]), n$12.length > s2))) && !(d2 >= s2 && n$12.length === 0); t2++)
      ;
    if (n$12.length === 0)
      return "success";
    throw new o(n.MissingFeatures);
  }
  async _refineSetBlock(e2, t2, i2) {
    return e2;
  }
  async _stat(e2, t2, i2, r2, s2, a2, n2) {
    return { calculated: false };
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  async _canDoAggregates(e2, t2, i2, r2, s2) {
    return false;
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e2, t2, i2, r2, s2) {
    return this._relatedLayer.queryAttachments(e2, t2, i2, r2, s2);
  }
  getFeatureByObjectId(e2, t2) {
    return this._relatedLayer.getFeatureByObjectId(e2, t2);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
}
function I() {
  a$4.applicationCache === null && (a$4.applicationCache = new a$4());
}
async function S(e2, t2) {
  if (a$4.applicationCache) {
    const r2 = a$4.applicationCache.getLayerInfo(e2);
    if (r2) {
      const a2 = await r2;
      return new Ze({ url: e2, outFields: t2, sourceJSON: a2 });
    }
    const n2 = new Ze({ url: e2, outFields: t2 }), s2 = (async () => (await n2.load(), n2.sourceJSON))();
    if (a$4.applicationCache) {
      a$4.applicationCache.setLayerInfo(e2, s2);
      try {
        return await s2, n2;
      } catch (a2) {
        throw a$4.applicationCache.clearLayerInfo(e2), a2;
      }
    }
    return await s2, n2;
  }
  return new Ze({ url: e2, outFields: t2 });
}
async function N(e2, t2, a2, r2, n2, s2 = null) {
  return F(await S(e2, ["*"]), t2, a2, r2, n2, s2);
}
function F(e2, t2 = null, a2 = null, r2 = true, n2 = null, s2 = null) {
  const i2 = { layer: e2, spatialReference: t2, outFields: a2, includeGeometry: r2, lrucache: n2, interceptor: s2 };
  return e2._hasMemorySource() === true ? new d$1(i2) : new v$1(i2);
}
async function T(e2) {
  if (a$4.applicationCache !== null) {
    const t2 = a$4.applicationCache.getLayerInfo(e2);
    if (t2 !== null)
      return t2;
  }
  const a2 = (async () => {
    const a3 = await U(e2, { responseType: "json", query: { f: "json" } });
    return a3.data ? a3.data : null;
  })();
  if (a$4.applicationCache !== null) {
    a$4.applicationCache.setLayerInfo(e2, a2);
    try {
      return await a2;
    } catch (r2) {
      throw a$4.applicationCache.clearLayerInfo(e2), r2;
    }
  }
  return a2;
}
async function g(e2, a2) {
  const r2 = "QUERYDATAELEMTS:" + a2.toString() + ":" + e2;
  if (a$4.applicationCache !== null) {
    const e3 = a$4.applicationCache.getLayerInfo(r2);
    if (e3 !== null)
      return e3;
  }
  const n$12 = (async () => {
    const r3 = await U(e2 + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([a2.toString()]), f: "json" } });
    if (r3.data) {
      const e3 = r3.data;
      if (e3.layerDataElements && e3.layerDataElements[0])
        return e3.layerDataElements[0];
    }
    throw new o(n.DataElementsNotFound);
  })();
  if (a$4.applicationCache !== null) {
    a$4.applicationCache.setLayerInfo(r2, n$12);
    try {
      return await n$12;
    } catch (s2) {
      throw a$4.applicationCache.clearLayerInfo(r2), s2;
    }
  }
  return n$12;
}
async function A(e2) {
  if (a$4.applicationCache !== null) {
    const t2 = a$4.applicationCache.getLayerInfo(e2);
    if (t2 !== null)
      return t2;
  }
  const a2 = (async () => {
    const a3 = await U(e2, { responseType: "json", query: { f: "json" } });
    if (a3.data) {
      const e3 = a3.data;
      return e3.layers || (e3.layers = []), e3.tables || (e3.tables = []), e3;
    }
    return { layers: [], tables: [] };
  })();
  if (a$4.applicationCache !== null) {
    a$4.applicationCache.setLayerInfo(e2, a2);
    try {
      return await a2;
    } catch (r2) {
      throw a$4.applicationCache.clearLayerInfo(e2), r2;
    }
  }
  return a2;
}
async function C(e2, t2) {
  const a2 = { metadata: null, networkId: -1, unVersion: 3, terminals: [], queryelem: null, layerNameLkp: {}, lkp: null }, r2 = await A(e2);
  if (a2.metadata = r2, r2.controllerDatasetLayers && r2.controllerDatasetLayers.utilityNetworkLayerId !== void 0 && r2.controllerDatasetLayers.utilityNetworkLayerId !== null) {
    if (r2.layers)
      for (const e3 of r2.layers)
        a2.layerNameLkp[e3.id] = e3.name;
    if (r2.tables)
      for (const e3 of r2.tables)
        a2.layerNameLkp[e3.id] = e3.name;
    const n2 = r2.controllerDatasetLayers.utilityNetworkLayerId;
    a2.networkId = n2;
    const s2 = await g(e2, n2);
    if (s2) {
      a2.queryelem = s2, a2.queryelem && a2.queryelem.dataElement && a2.queryelem.dataElement.schemaGeneration !== void 0 && (a2.unVersion = a2.queryelem.dataElement.schemaGeneration), a2.lkp = {}, a2.queryelem.dataElement.domainNetworks || (a2.queryelem.dataElement.domainNetworks = []);
      for (const e3 of a2.queryelem.dataElement.domainNetworks) {
        for (const t3 of e3.edgeSources ? e3.edgeSources : []) {
          const e4 = { layerId: t3.layerId, sourceId: t3.sourceId, className: a2.layerNameLkp[t3.layerId] ? a2.layerNameLkp[t3.layerId] : null };
          e4.className && (a2.lkp[e4.className] = e4);
        }
        for (const t3 of e3.junctionSources ? e3.junctionSources : []) {
          const e4 = { layerId: t3.layerId, sourceId: t3.sourceId, className: a2.layerNameLkp[t3.layerId] ? a2.layerNameLkp[t3.layerId] : null };
          e4.className && (a2.lkp[e4.className] = e4);
        }
      }
      if (a2.queryelem.dataElement.terminalConfigurations)
        for (const e3 of a2.queryelem.dataElement.terminalConfigurations)
          for (const t3 of e3.terminals)
            a2.terminals.push({ terminalId: t3.terminalId, terminalName: t3.terminalName });
      const r3 = await T(e2 + "/" + n2);
      if (r3.systemLayers && r3.systemLayers.associationsTableId !== void 0 && r3.systemLayers.associationsTableId !== null) {
        const n3 = [];
        a2.unVersion >= 4 && (n3.push("STATUS"), n3.push("PERCENTALONG"));
        let s3 = await N(e2 + "/" + r3.systemLayers.associationsTableId.toString(), t2, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...n3], false, null, null);
        return await s3.load(), a2.unVersion >= 4 && (s3 = s3.filter(f.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)", s3.getFieldsIndex())), await s3.load()), { lkp: a2.lkp, associations: s3, unVersion: a2.unVersion, terminals: a2.terminals };
      }
      return { associations: null, unVersion: a2.unVersion, lkp: null, terminals: [] };
    }
    return { associations: null, unVersion: a2.unVersion, lkp: null, terminals: [] };
  }
  return { associations: null, unVersion: a2.unVersion, lkp: null, terminals: [] };
}
async function k(e2, t2, a2, r2 = null, n2 = null, s2 = true, i2 = null, l2 = null) {
  let o2 = e2.serviceUrl();
  if (!o2)
    return null;
  o2 = o2.charAt(o2.length - 1) === "/" ? o2 + t2.relatedTableId.toString() : o2 + "/" + t2.relatedTableId.toString();
  const u = await N(o2, r2, n2, s2, i2, l2);
  return new d({ layer: e2, relatedLayer: u, relationship: t2, objectId: a2, spatialReference: r2, outFields: n2, includeGeometry: s2, lrucache: i2, interceptor: l2 });
}
c.registerAction(), C$1.registerAction(), a$2.registerAction(), f$4.registerAction(), a.registerAction();
class j extends e$1 {
  constructor(e2, t2 = null, a2 = null, r2 = null) {
    super(), this._map = e2, this._overridespref = t2, this._lrucache = a2, this._interceptor = r2, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e2, t2 = true, a2 = null) {
    const r2 = F(e2, this._overridespref, a2 === null ? ["*"] : a2, t2, this._lrucache, this._interceptor);
    return this._instantLayers.push({ featureset: r2, opitem: e2, includeGeometry: t2, outFields: JSON.stringify(a2) }), r2;
  }
  async featureSetByName(e2, t2 = true, a2 = null) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === false)
      return await this._map.load(), this.featureSetByName(e2, t2, a2);
    a2 === null && (a2 = ["*"]), a2 = (a2 = a2.slice(0)).sort();
    const r2 = JSON.stringify(a2);
    for (let s2 = 0; s2 < this._instantLayers.length; s2++) {
      const a3 = this._instantLayers[s2];
      if (a3.opitem.title === e2 && a3.includeGeometry === t2 && a3.outFields === r2)
        return this._instantLayers[s2].featureset;
    }
    const n2 = this._map.allLayers.find((t3) => t3 instanceof Ze && t3.title === e2);
    if (n2)
      return this._makeAndAddFeatureSet(n2, t2, a2);
    if (this._map.tables) {
      const r3 = this._map.tables.find((t3) => !!(t3.title && t3.title === e2 || t3.title && t3.title === e2));
      if (r3) {
        if (r3 instanceof Ze)
          return this._makeAndAddFeatureSet(r3, t2, a2);
        if (r3._materializedTable)
          ;
        else {
          const e3 = r3.outFields ? r3 : __spreadProps(__spreadValues({}, r3), { outFields: ["*"] });
          r3._materializedTable = new Ze(e3);
        }
        return await r3._materializedTable.load(), this._makeAndAddFeatureSet(r3._materializedTable, t2, a2);
      }
    }
    return null;
  }
  async featureSetById(e2, t2 = true, a2 = ["*"]) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === false)
      return await this._map.load(), this.featureSetById(e2, t2, a2);
    a2 === null && (a2 = ["*"]), a2 = (a2 = a2.slice(0)).sort();
    const r2 = JSON.stringify(a2);
    for (let s2 = 0; s2 < this._instantLayers.length; s2++) {
      const a3 = this._instantLayers[s2];
      if (a3.opitem.id === e2 && a3.includeGeometry === t2 && a3.outFields === r2)
        return this._instantLayers[s2].featureset;
    }
    const n2 = this._map.allLayers.find((t3) => t3 instanceof Ze && t3.id === e2);
    if (n2)
      return this._makeAndAddFeatureSet(n2, t2, a2);
    if (this._map.tables) {
      const r3 = this._map.tables.find((t3) => t3.id === e2);
      if (r3) {
        if (r3 instanceof Ze)
          return this._makeAndAddFeatureSet(r3, t2, a2);
        if (r3._materializedTable)
          ;
        else {
          const e3 = __spreadProps(__spreadValues({}, r3), { outFields: ["*"] });
          r3._materializedTable = new Ze(e3);
        }
        return await r3._materializedTable.load(), this._makeAndAddFeatureSet(r3._materializedTable, t2, a2);
      }
    }
    return null;
  }
}
class O extends e$1 {
  constructor(e2, t2 = null, a2 = null, r2 = null) {
    super(), this._url = e2, this._overridespref = t2, this._lrucache = a2, this._interceptor = r2, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e2, t2 = true, a2 = null) {
    const r2 = F(e2, this._overridespref, a2 === null ? ["*"] : a2, t2, this._lrucache);
    return this._instantLayers.push({ featureset: r2, opitem: e2, includeGeometry: t2, outFields: JSON.stringify(a2) }), r2;
  }
  async _loadMetaData() {
    const e2 = await A(this._url);
    return this.metadata = e2, e2;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new O(this._url, this._overridespref, this._lrucache, this._interceptor);
  }
  async featureSetByName(e2, t2 = true, a2 = null) {
    a2 === null && (a2 = ["*"]), a2 = (a2 = a2.slice(0)).sort();
    const r2 = JSON.stringify(a2);
    for (let i2 = 0; i2 < this._instantLayers.length; i2++) {
      const a3 = this._instantLayers[i2];
      if (a3.opitem.title === e2 && a3.includeGeometry === t2 && a3.outFields === r2)
        return this._instantLayers[i2].featureset;
    }
    const n2 = await this._loadMetaData();
    let s2 = null;
    for (const i2 of n2.layers ? n2.layers : [])
      i2.name === e2 && (s2 = i2);
    if (!s2)
      for (const i2 of n2.tables ? n2.tables : [])
        i2.name === e2 && (s2 = i2);
    if (s2) {
      const e3 = await S(this._url + "/" + s2.id, ["*"]);
      return this._makeAndAddFeatureSet(e3, t2, a2);
    }
    return null;
  }
  async featureSetById(e2, t2 = true, a2 = ["*"]) {
    a2 === null && (a2 = ["*"]), a2 = (a2 = a2.slice(0)).sort();
    const r2 = JSON.stringify(a2);
    e2 = e2 != null ? e2.toString() : "";
    for (let i2 = 0; i2 < this._instantLayers.length; i2++) {
      const a3 = this._instantLayers[i2];
      if (a3.opitem.id === e2 && a3.includeGeometry === t2 && a3.outFields === r2)
        return this._instantLayers[i2].featureset;
    }
    const n2 = await this._loadMetaData();
    let s2 = null;
    for (const i2 of n2.layers ? n2.layers : [])
      i2.id !== null && i2.id !== void 0 && i2.id.toString() === e2 && (s2 = i2);
    if (!s2)
      for (const i2 of n2.tables ? n2.tables : [])
        i2.id !== null && i2.id !== void 0 && i2.id.toString() === e2 && (s2 = i2);
    if (s2) {
      const e3 = await S(this._url + "/" + s2.id, ["*"]);
      return this._makeAndAddFeatureSet(e3, t2, a2);
    }
    return null;
  }
}
function E(e2, t2, a2 = null, r2 = null) {
  return new j(e2, t2, a2, r2);
}
function b(e2, t2, a2 = null, r2 = null) {
  return new O(e2, t2, a2, r2);
}
function D(e2, t2) {
  if (e2 === null)
    return t2;
  return new j$2({ url: e2.field("url") });
}
async function q(a2, r2, n2) {
  if (!s$4.findCredential(a2.restUrl))
    return null;
  if (a2.loadStatus === "loaded" && r2 === "" && a2.user && a2.user.sourceJSON && n2 === false)
    return a2.user.sourceJSON;
  if (r2 === "") {
    const e2 = await U(a2.restUrl + "/community/self", { responseType: "json", query: __spreadValues({ f: "json" }, n2 === false ? {} : { returnUserLicenseTypeExtensions: true }) });
    if (e2.data) {
      const t2 = e2.data;
      if (t2 && t2.username)
        return t2;
    }
    return null;
  }
  const s2 = await U(a2.restUrl + "/community/users/" + r2, { responseType: "json", query: { f: "json" } });
  if (s2.data) {
    const e2 = s2.data;
    return e2.error ? null : e2;
  }
  return null;
}
function v(e2, t2, a2, r2, n2) {
  if (e2 === null)
    return null;
  if (e2 instanceof Ze) {
    switch (t2) {
      case "datasource":
        return F(e2, n2, e2.outFields, true, a2, r2).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return F(e2, n2, e2.outFields, true, a2, r2);
    }
    return null;
  }
  if (e2 instanceof C$2)
    switch (t2) {
      case "datasource":
        return e2.getDataSourceFeatureSet();
      case "parent":
        return e2;
      case "root":
        return e2.getRootFeatureSet();
    }
  return null;
}
async function G(e2, t2, a2, r2, n2, s2, i2, l2 = null) {
  var _a;
  if (a$4.applicationCache) {
    const o3 = a$4.applicationCache.getLayerInfo(e2 + ":" + s2.url);
    if (o3) {
      const e3 = await o3;
      return F(new Ze({ url: b$1(e3.url) + "/" + t2, outFields: ["*"] }), a2, r2, n2, i2, l2);
    }
  }
  const o2 = new x$4({ id: e2, portal: s2 }).load();
  a$4.applicationCache && a$4.applicationCache.setLayerInfo(e2 + ":" + s2.url, o2);
  try {
    const e3 = await o2;
    return F(new Ze({ url: b$1((_a = e3.url) != null ? _a : "") + "/" + t2, outFields: ["*"] }), a2, r2, n2, i2, l2);
  } catch (u) {
    throw a$4.applicationCache && a$4.applicationCache.clearLayerInfo(e2 + ":" + s2.url), u;
  }
}
var featureSetUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  constructAssociationMetaDataFeatureSetFromUrl: C,
  constructFeatureSet: F,
  constructFeatureSetFromPortalItem: G,
  constructFeatureSetFromRelationship: k,
  constructFeatureSetFromUrl: N,
  convertToFeatureSet: v,
  createFeatureSetCollectionFromMap: E,
  createFeatureSetCollectionFromService: b,
  getPortal: D,
  initialiseMetaDataCache: I,
  lookupUser: q
});
export { A$1 as A, C, D, E$1 as E, F, G, N, W, e as a, a$2 as b, c, d$1 as d, e$1 as e, a as f, F$1 as g, featureSetUtils as h, k, q, v, x };
