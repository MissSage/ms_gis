import { M, B, N, C, f, V as V$1, _ as _$1, t, e, a as e$1, o, s, j, A, F, m, k as k$1, u, w, J as J$1, D, Y as Y$1, E, b as J$2, P, Z as Z$1, r as re$1, c as N$1, W as W$1, K, Q as Q$1, X as X$1, d as Ne$1, g as se$1, h as g, i as r, l as s$1, n, p as s$2 } from "./arcadeUtils.js";
import { registerFunctions as dn } from "./geomasync.js";
import { aK as k, cw as p } from "./index.js";
import "./number.js";
import "./geometryEngineAsync.js";
import "vue";
function q(e2) {
  return e2 && typeof e2.then == "function";
}
const W = 100;
async function V(e2, t2) {
  const n2 = [];
  for (let r2 = 0; r2 < t2.arguments.length; r2++)
    n2.push(await J(e2, t2.arguments[r2]));
  return n2;
}
async function _(e2, t2, n2) {
  if (t2.preparsed === true)
    return n2(e2, null, t2.arguments);
  return n2(e2, t2, await V(e2, t2));
}
class Y extends r {
  constructor(e2, t2) {
    super(), this.definition = null, this.context = null, this.definition = e2, this.context = t2;
  }
  createFunction(e$12) {
    return (...t$1) => {
      const n2 = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e$12.depthCounter + 1 }, globalScope: this.context.globalScope };
      if (n2.depthCounter.depth > 64)
        throw new t(e$12, e.MaximumCallDepth, null);
      return Pe(this.definition, n2, t$1, null);
    };
  }
  call(e$12, t$1) {
    return H(e$12, t$1, (n2, a, i) => {
      const l = { spatialReference: e$12.spatialReference, services: e$12.services, console: e$12.console, libraryResolver: e$12.libraryResolver, exports: e$12.exports, lrucache: e$12.lrucache, interceptor: e$12.interceptor, localScope: {}, abortSignal: e$12.abortSignal, globalScope: e$12.globalScope, depthCounter: { depth: e$12.depthCounter.depth + 1 } };
      if (l.depthCounter.depth > 64)
        throw new t(e$12, e.MaximumCallDepth, t$1);
      return Pe(this.definition, l, i, t$1);
    });
  }
  marshalledCall(e2, t2, n$1, r2) {
    return r2(e2, t2, async (o2, a, i) => {
      const l = { spatialReference: e2.spatialReference, globalScope: n$1.globalScope, depthCounter: { depth: e2.depthCounter.depth + 1 }, libraryResolver: e2.libraryResolver, exports: e2.exports, console: e2.console, abortSignal: e2.abortSignal, lrucache: e2.lrucache, interceptor: e2.interceptor, localScope: {} };
      return i = i.map((t3) => !F(t3) || t3 instanceof s$1 ? t3 : n(t3, e2, r2)), n(await Pe(this.definition, l, i, t2), n$1, r2);
    });
  }
}
class z extends s$2 {
  constructor(e2) {
    super(e2);
  }
  async global(e2) {
    const t2 = this.executingContext.globalScope[e2.toLowerCase()];
    if (t2.valueset || (t2.value = await J(this.executingContext, t2.node), t2.valueset = true), F(t2.value) && !(t2.value instanceof s$1)) {
      const e3 = new s$1();
      e3.fn = t2.value, e3.parameterEvaluator = H, e3.context = this.executingContext, t2.value = e3;
    }
    return t2.value;
  }
  setGlobal(e$12, t$1) {
    if (F(t$1))
      throw new t(null, e.AssignModuleFunction, null);
    this.executingContext.globalScope[e$12.toLowerCase()] = { value: t$1, valueset: true, node: null };
  }
  hasGlobal(e2) {
    return this.executingContext.exports[e2] === void 0 && (e2 = e2.toLowerCase()), this.executingContext.exports[e2] !== void 0;
  }
  async loadModule(e2) {
    let n2 = e2.spatialReference;
    n2 == null && (n2 = new k({ wkid: 102100 })), this.moduleScope = Ge({}, e2.customfunctions), this.executingContext = { spatialReference: n2, services: e2.services, libraryResolver: new s(e2.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, abortSignal: e2.abortSignal === void 0 || e2.abortSignal === null ? { aborted: false } : e2.abortSignal, globalScope: this.moduleScope, console: e2.console ? e2.console : Te, lrucache: e2.lrucache, interceptor: e2.interceptor, localScope: null, depthCounter: { depth: 1 } }, await J(this.executingContext, this.source.syntax);
  }
}
async function H(e2, t2, n2) {
  if (t2.preparsed === true) {
    const r3 = n2(e2, null, t2.arguments);
    return q(r3), r3;
  }
  const r2 = n2(e2, t2, await V(e2, t2));
  return q(r2), r2;
}
async function J(e$12, t$1, n2) {
  if (t$1.breakpoint && n2 !== true) {
    const n3 = t$1.breakpoint();
    return await n3, J(e$12, t$1, true);
  }
  try {
    switch (t$1 == null ? void 0 : t$1.type) {
      case "VariableDeclarator":
        return await xe(e$12, t$1);
      case "ImportDeclaration":
        return await ve(e$12, t$1);
      case "ExportNamedDeclaration":
        return await be(e$12, t$1);
      case "VariableDeclaration":
        return await Se(e$12, t$1, 0);
      case "BlockStatement":
      case "Program":
        return await he(e$12, t$1);
      case "FunctionDeclaration":
        return await ye(e$12, t$1);
      case "ReturnStatement":
        return await ge(e$12, t$1);
      case "IfStatement":
        return await de(e$12, t$1);
      case "ExpressionStatement":
        return await we(e$12, t$1);
      case "UpdateExpression":
        return await ue(e$12, t$1);
      case "AssignmentExpression":
        return await pe(e$12, t$1);
      case "ForStatement":
        return await ne(e$12, t$1);
      case "WhileStatement":
        return await Z(e$12, t$1);
      case "ForInStatement":
        return await ce(e$12, t$1);
      case "BreakStatement":
        return j;
      case "EmptyStatement":
        return k$1;
      case "ContinueStatement":
        return A;
      case "TemplateElement":
        return await Le(e$12, t$1);
      case "TemplateLiteral":
        return await Ne(e$12, t$1);
      case "Identifier":
        return await Me(e$12, t$1);
      case "MemberExpression":
        return await Ie(e$12, t$1);
      case "Literal":
        return t$1.value;
      case "CallExpression":
        return await je(e$12, t$1);
      case "UnaryExpression":
        return await Fe(e$12, t$1);
      case "BinaryExpression":
        return await Re(e$12, t$1);
      case "LogicalExpression":
        return await Ae(e$12, t$1);
      case "ArrayExpression":
        return await Ce(e$12, t$1);
      case "ObjectExpression":
        return await Q(e$12, t$1);
      case "Property":
        return await X(e$12, t$1);
      default:
        throw new t(e$12, e.Unrecognised, t$1);
    }
  } catch (i) {
    throw u(e$12, t$1, i);
  }
}
async function Q(e$12, t$1) {
  const a = [];
  for (let n2 = 0; n2 < t$1.properties.length; n2++)
    a[n2] = await J(e$12, t$1.properties[n2]);
  const i = {}, l = new Map();
  for (let n2 = 0; n2 < a.length; n2++) {
    const s3 = a[n2];
    if (F(s3.value))
      throw new t(e$12, e.NoFunctionInDictionary, t$1);
    if (w(s3.key) === false)
      throw new t(e$12, e.KeyMustBeString, t$1);
    let c = s3.key.toString();
    const u2 = c.toLowerCase();
    l.has(u2) ? c = l.get(u2) : l.set(u2, c), s3.value === k$1 ? i[c] = null : i[c] = s3.value;
  }
  const s2 = new J$1(i);
  return s2.immutable = false, s2;
}
async function X(e2, t2) {
  const n2 = await J(e2, t2.value);
  if (t2.key.type === "Identifier")
    return { key: t2.key.name, value: n2 };
  return { key: await J(e2, t2.key), value: n2 };
}
async function Z(e$12, t$1) {
  const n2 = { testResult: true, lastAction: k$1 };
  if (n2.testResult = await J(e$12, t$1.test), n2.testResult === false)
    return k$1;
  if (n2.testResult !== true)
    throw new t(e$12, e.BooleanConditionRequired, t$1);
  for (; n2.testResult === true && (n2.lastAction = await J(e$12, t$1.body), n2.lastAction !== j) && !(n2.lastAction instanceof D); )
    if (n2.testResult = await J(e$12, t$1.test), n2.testResult !== true && n2.testResult !== false)
      throw new t(e$12, e.BooleanConditionRequired, t$1);
  return n2.lastAction instanceof D ? n2.lastAction : k$1;
}
async function $(e2, t2, n2) {
  const r2 = await J(e2, t2.body);
  return n2.lastAction = r2, n2.lastAction === j || n2.lastAction instanceof D ? (n2.testResult = false, n2) : t2.update !== null ? (await J(e2, t2.update), n2) : n2;
}
async function ee(e$12, t$1, n2) {
  var _a;
  if (t$1.test !== null) {
    const a = await J(e$12, t$1.test);
    if (((_a = e$12.abortSignal) == null ? void 0 : _a.aborted) === true)
      throw new t(e$12, e.Cancelled, t$1);
    if (n2.testResult = a, n2.testResult === false)
      return n2;
    if (n2.testResult !== true)
      throw new t(e$12, e.BooleanConditionRequired, t$1);
    return $(e$12, t$1, n2);
  }
  return $(e$12, t$1, n2);
}
function te(e2, t2, n2, r2, o2, a) {
  try {
    ee(e2, t2, n2).then(() => {
      try {
        n2.testResult === true ? ++a > W ? (a = 0, setTimeout(() => {
          te(e2, t2, n2, r2, o2, a);
        }, 0)) : te(e2, t2, n2, r2, o2, a) : n2.lastAction instanceof D ? r2(n2.lastAction) : r2(k$1);
      } catch (i) {
        o2(i);
      }
    }, (e3) => {
      o2(e3);
    });
  } catch (i) {
    o2(i);
  }
}
function ne(e2, t2) {
  try {
    return t2.init !== null ? J(e2, t2.init).then(() => new Promise((n2, r2) => {
      te(e2, t2, { testResult: true, lastAction: k$1 }, (e3) => {
        n2(e3);
      }, (e3) => {
        r2(e3);
      }, 0);
    })) : new Promise((n2, r2) => {
      te(e2, t2, { testResult: true, lastAction: k$1 }, (e3) => {
        n2(e3);
      }, (e3) => {
        r2(e3);
      }, 0);
    });
  } catch (n2) {
    return Promise.reject(n2);
  }
}
function re(e2, t2, n2, r2, o2, a, i, l, s2, c) {
  try {
    if (r2 <= a)
      return void l(k$1);
    o2.value = i === "k" ? n2[a] : a, J(e2, t2.body).then((u2) => {
      try {
        u2 instanceof D ? l(u2) : u2 === j ? l(k$1) : ++c > W ? (c = 0, setTimeout(() => {
          re(e2, t2, n2, r2, o2, a + 1, i, l, s2, c);
        }, 0)) : re(e2, t2, n2, r2, o2, a + 1, i, l, s2, c);
      } catch (f2) {
        s2(f2);
      }
    }, (e3) => {
      s2(e3);
    });
  } catch (u2) {
    s2(u2);
  }
}
function oe(e2, t2, n2, r2, o2, a, i, l, s2) {
  try {
    if (n2.length() <= o2)
      return void i(k$1);
    r2.value = a === "k" ? n2.get(o2) : o2, J(e2, t2.body).then((c) => {
      c instanceof D ? i(c) : c === j ? i(k$1) : ++s2 > W ? (s2 = 0, setTimeout(() => {
        oe(e2, t2, n2, r2, o2 + 1, a, i, l, s2);
      }, 0)) : oe(e2, t2, n2, r2, o2 + 1, a, i, l, s2);
    }, (e3) => {
      l(e3);
    });
  } catch (c) {
    l(c);
  }
}
function ae(e2, t2, n2, r2, o2, a) {
  try {
    if (a === void 0 && (a = "i"), n2.length === 0)
      return void r2.resolve(k$1);
    re(e2, t2, n2, n2.length, o2, 0, a, (e3) => {
      r2.resolve(e3);
    }, (e3) => {
      r2.reject(e3);
    }, 0);
  } catch (i) {
    r2.reject(i);
  }
}
function ie(e2, t2, n2, r2, o2, a) {
  try {
    if (a === void 0 && (a = "i"), n2.length === 0)
      return void r2.resolve(k$1);
    oe(e2, t2, n2, o2, 0, a, (e3) => {
      r2.resolve(e3);
    }, (e3) => {
      r2.reject(e3);
    }, 0);
  } catch (i) {
    r2.reject(i);
  }
}
function le(e2, t2, n2, r2, o2) {
  try {
    ae(e2, t2, n2.keys(), r2, o2, "k");
  } catch (a) {
    r2.reject(a);
  }
}
function se(e2, t2, n2, r2, o2, a, l, s2) {
  try {
    e2.next().then((c) => {
      try {
        if (c === null)
          a(k$1);
        else {
          const u2 = g.createFromGraphicLikeObject(c.geometry, c.attributes, r2);
          u2._underlyingGraphic = c, o2.value = u2;
          J(t2, n2.body).then((i) => {
            try {
              i === j ? a(k$1) : i instanceof D ? a(i) : ++s2 > W ? (s2 = 0, setTimeout(() => {
                se(e2, t2, n2, r2, o2, a, l, s2);
              }, 0)) : se(e2, t2, n2, r2, o2, a, l, s2);
            } catch (c2) {
              l(c2);
            }
          }, (e3) => {
            l(e3);
          });
        }
      } catch (u2) {
        l(u2);
      }
    }, (e3) => {
      l(e3);
    });
  } catch (c) {
    l(c);
  }
}
async function ce(e$12, t$1) {
  return new Promise((a, i) => {
    J(e$12, t$1.right).then((l) => {
      try {
        let s2 = null;
        s2 = t$1.left.type === "VariableDeclaration" ? J(e$12, t$1.left) : Promise.resolve(), s2.then(() => {
          try {
            let s3 = "";
            if (t$1.left.type === "VariableDeclaration") {
              const e2 = t$1.left.declarations[0].id;
              e2.type === "Identifier" && (s3 = e2.name);
            } else
              t$1.left.type === "Identifier" && (s3 = t$1.left.name);
            if (!s3)
              throw new t(e$12, e.InvalidIdentifier, t$1);
            s3 = s3.toLowerCase();
            let c = null;
            if (e$12.localScope != null && e$12.localScope[s3] !== void 0 && (c = e$12.localScope[s3]), c === null && e$12.globalScope[s3] !== void 0 && (c = e$12.globalScope[s3]), c === null)
              return void i(new t(e$12, e.InvalidIdentifier, t$1));
            Y$1(l) || w(l) ? ae(e$12, t$1, l, { reject: i, resolve: a }, c) : E(l) ? ie(e$12, t$1, l, { reject: i, resolve: a }, c) : l instanceof J$1 || J$2(l) ? le(e$12, t$1, l, { reject: i, resolve: a }, c) : P(l) ? se(l.iterator(e$12.abortSignal), e$12, t$1, l, c, (e2) => {
              a(e2);
            }, (e2) => {
              i(e2);
            }, 0) : ae(e$12, t$1, [], { reject: i, resolve: a }, c);
          } catch (s3) {
            i(s3);
          }
        }, i);
      } catch (s2) {
        i(s2);
      }
    }, i);
  });
}
async function ue(e$12, t$1) {
  const a = t$1.argument;
  if (a.type === "MemberExpression") {
    const i2 = { t: null }, l2 = await J(e$12, a.object);
    let s2 = null;
    i2.t = l2, a.computed === true ? s2 = await J(e$12, a.property) : a.property.type === "Identifier" && (s2 = a.property.name);
    const c = i2.t;
    let u2;
    if (Y$1(c)) {
      if (!Z$1(s2))
        throw new t(e$12, e.ArrayAccessorMustBeNumber, t$1);
      if (s2 < 0 && (s2 = c.length + s2), s2 < 0 || s2 >= c.length)
        throw new t(e$12, e.OutOfBounds, t$1);
      u2 = re$1(c[s2]), c[s2] = t$1.operator === "++" ? u2 + 1 : u2 - 1;
    } else if (c instanceof J$1) {
      if (w(s2) === false)
        throw new t(e$12, e.KeyAccessorMustBeString, t$1);
      if (c.hasField(s2) !== true)
        throw new t(e$12, e.FieldNotFound, t$1, { key: s2 });
      u2 = re$1(c.field(s2)), c.setField(s2, t$1.operator === "++" ? u2 + 1 : u2 - 1);
    } else if (c instanceof z) {
      if (w(s2) === false)
        throw new t(e$12, e.ModuleAccessorMustBeString, t$1);
      if (c.hasGlobal(s2) !== true)
        throw new t(e$12, e.ModuleExportNotFound, t$1);
      u2 = re$1(await c.global(s2)), c.setGlobal(s2, t$1.operator === "++" ? u2 + 1 : u2 - 1);
    } else {
      if (!J$2(c))
        throw E(c) ? new t(e$12, e.Immutable, t$1) : new t(e$12, e.InvalidParameter, t$1);
      if (w(s2) === false)
        throw new t(e$12, e.KeyAccessorMustBeString, t$1);
      if (c.hasField(s2) !== true)
        throw new t(e$12, e.FieldNotFound, t$1, { key: s2 });
      u2 = re$1(c.field(s2)), c.setField(s2, t$1.operator === "++" ? u2 + 1 : u2 - 1);
    }
    return t$1.prefix === false ? u2 : t$1.operator === "++" ? u2 + 1 : u2 - 1;
  }
  const i = t$1.argument.type === "Identifier" ? t$1.argument.name.toLowerCase() : "";
  if (!i)
    throw new t(e$12, e.InvalidIdentifier, t$1);
  let l;
  if (e$12.localScope != null && e$12.localScope[i] !== void 0)
    return l = re$1(e$12.localScope[i].value), e$12.localScope[i] = { value: t$1.operator === "++" ? l + 1 : l - 1, valueset: true, node: t$1 }, t$1.prefix === false ? l : t$1.operator === "++" ? l + 1 : l - 1;
  if (e$12.globalScope[i] !== void 0)
    return l = re$1(e$12.globalScope[i].value), e$12.globalScope[i] = { value: t$1.operator === "++" ? l + 1 : l - 1, valueset: true, node: t$1 }, t$1.prefix === false ? l : t$1.operator === "++" ? l + 1 : l - 1;
  throw new t(e$12, e.InvalidIdentifier, t$1);
}
function fe(e$12, t$1, n2, a, i) {
  switch (t$1) {
    case "=":
      return e$12 === k$1 ? null : e$12;
    case "/=":
      return re$1(n2) / re$1(e$12);
    case "*=":
      return re$1(n2) * re$1(e$12);
    case "-=":
      return re$1(n2) - re$1(e$12);
    case "+=":
      return w(n2) || w(e$12) ? K(n2) + K(e$12) : re$1(n2) + re$1(e$12);
    case "%=":
      return re$1(n2) % re$1(e$12);
    default:
      throw new t(i, e.UnsupportedOperator, a);
  }
}
async function pe(e$12, t$1) {
  const a = t$1.left;
  if (a.type === "MemberExpression") {
    const i2 = await J(e$12, t$1.right), l = await J(e$12, a.object);
    let s2 = null;
    if (a.computed === true)
      s2 = await J(e$12, a.property);
    else {
      if (a.property.type !== "Identifier")
        throw new t(e$12, e.InvalidIdentifier, t$1);
      s2 = a.property.name;
    }
    if (Y$1(l)) {
      if (!Z$1(s2))
        throw new t(e$12, e.ArrayAccessorMustBeNumber, t$1);
      if (s2 < 0 && (s2 = l.length + s2), s2 < 0 || s2 > l.length)
        throw new t(e$12, e.OutOfBounds, t$1);
      if (s2 === l.length) {
        if (t$1.operator !== "=")
          throw new t(e$12, e.OutOfBounds, t$1);
        l[s2] = fe(i2, t$1.operator, l[s2], t$1, e$12);
      } else
        l[s2] = fe(i2, t$1.operator, l[s2], t$1, e$12);
    } else if (l instanceof J$1) {
      if (w(s2) === false)
        throw new t(e$12, e.KeyAccessorMustBeString, t$1);
      if (l.hasField(s2) === true)
        l.setField(s2, fe(i2, t$1.operator, l.field(s2), t$1, e$12));
      else {
        if (t$1.operator !== "=")
          throw new t(e$12, e.FieldNotFound, t$1, { key: s2 });
        l.setField(s2, fe(i2, t$1.operator, null, t$1, e$12));
      }
    } else if (l instanceof z) {
      if (w(s2) === false)
        throw new t(e$12, e.KeyAccessorMustBeString, t$1);
      if (l.hasGlobal(s2) !== true)
        throw new t(e$12, e.ModuleExportNotFound, t$1);
      l.setGlobal(s2, fe(i2, t$1.operator, await l.global(s2), t$1, e$12));
    } else {
      if (!J$2(l))
        throw E(l) ? new t(e$12, e.Immutable, t$1) : new t(e$12, e.InvalidParameter, t$1);
      if (w(s2) === false)
        throw new t(e$12, e.KeyAccessorMustBeString, t$1);
      if (l.hasField(s2) === true)
        l.setField(s2, fe(i2, t$1.operator, l.field(s2), t$1, e$12));
      else {
        if (t$1.operator !== "=")
          throw new t(e$12, e.FieldNotFound, t$1, { key: s2 });
        l.setField(s2, fe(i2, t$1.operator, null, t$1, e$12));
      }
    }
    return k$1;
  }
  const i = a.name.toLowerCase();
  if (e$12.localScope != null && e$12.localScope[i] !== void 0) {
    const n2 = await J(e$12, t$1.right);
    return e$12.localScope[i] = { value: fe(n2, t$1.operator, e$12.localScope[i].value, t$1, e$12), valueset: true, node: t$1.right }, k$1;
  }
  if (e$12.globalScope[i] !== void 0) {
    const n2 = await J(e$12, t$1.right);
    return e$12.globalScope[i] = { value: fe(n2, t$1.operator, e$12.globalScope[i].value, t$1, e$12), valueset: true, node: t$1.right }, k$1;
  }
  throw new t(e$12, e.InvalidIdentifier, t$1);
}
async function we(e2, t2) {
  if (t2.expression.type === "AssignmentExpression")
    return J(e2, t2.expression);
  if (t2.expression.type === "CallExpression") {
    const n3 = await J(e2, t2.expression);
    return n3 === k$1 ? k$1 : new N$1(n3);
  }
  const n2 = await J(e2, t2.expression);
  return n2 === k$1 ? k$1 : new N$1(n2);
}
async function de(e$12, t$1) {
  const n2 = await J(e$12, t$1.test);
  if (n2 === true)
    return J(e$12, t$1.consequent);
  if (n2 === false)
    return t$1.alternate !== null ? J(e$12, t$1.alternate) : k$1;
  throw new t(e$12, e.BooleanConditionRequired, t$1);
}
async function he(e2, t2) {
  return me(e2, t2, 0);
}
async function me(e2, t2, n2) {
  if (n2 >= t2.body.length)
    return k$1;
  const r2 = await J(e2, t2.body[n2]);
  return r2 instanceof D || r2 === j || r2 === A || n2 === t2.body.length - 1 ? r2 : me(e2, t2, n2 + 1);
}
async function ge(e2, t2) {
  if (t2.argument === null)
    return new D(k$1);
  const n2 = await J(e2, t2.argument);
  return new D(n2);
}
async function ye(e2, t2) {
  const n2 = t2.id.name.toLowerCase();
  return e2.globalScope[n2] = { valueset: true, node: null, value: new Y(t2, e2) }, k$1;
}
async function ve(e2, t2) {
  var _a, _b;
  const n2 = t2.specifiers[0].local.name.toLowerCase(), r2 = e2.libraryResolver.loadLibrary(n2);
  let o2 = null;
  return ((_a = e2.libraryResolver._moduleSingletons) == null ? void 0 : _a.has(r2.uri)) ? o2 = e2.libraryResolver._moduleSingletons.get(r2.uri) : (o2 = new z(r2), await o2.loadModule(e2), (_b = e2.libraryResolver._moduleSingletons) == null ? void 0 : _b.set(r2.uri, o2)), e2.globalScope[n2] = { value: o2, valueset: true, node: t2 }, k$1;
}
async function be(e2, t2) {
  if (await J(e2, t2.declaration), t2.declaration.type === "FunctionDeclaration")
    e2.exports[t2.declaration.id.name.toLowerCase()] = "function";
  else if (t2.declaration.type === "VariableDeclaration")
    for (const n2 of t2.declaration.declarations)
      e2.exports[n2.id.name.toLowerCase()] = "variable";
  return k$1;
}
async function Se(e2, t2, n2) {
  return n2 >= t2.declarations.length ? k$1 : (await J(e2, t2.declarations[n2]), n2 === t2.declarations.length - 1 || await Se(e2, t2, n2 + 1), k$1);
}
async function xe(e$12, t$1) {
  let n2 = null;
  if (n2 = t$1.init === null ? null : await J(e$12, t$1.init), e$12.localScope !== null) {
    if (n2 === k$1 && (n2 = null), t$1.id.type !== "Identifier")
      throw new t(e$12, e.InvalidIdentifier, t$1);
    const a2 = t$1.id.name.toLowerCase();
    return e$12.localScope != null && (e$12.localScope[a2] = { value: n2, valueset: true, node: t$1.init }), k$1;
  }
  if (t$1.id.type !== "Identifier")
    throw new t(e$12, e.InvalidIdentifier, t$1);
  const a = t$1.id.name.toLowerCase();
  return n2 === k$1 && (n2 = null), e$12.globalScope[a] = { value: n2, valueset: true, node: t$1.init }, k$1;
}
async function Ie(e$12, t$1) {
  const a = await J(e$12, t$1.object);
  if (a === null)
    throw new t(e$12, e.MemberOfNull, t$1);
  if (t$1.computed === false) {
    if (t$1.property.type === "Identifier") {
      if (a instanceof J$1 || J$2(a))
        return a.field(t$1.property.name);
      if (a instanceof p)
        return W$1(a, t$1.property.name, e$12, t$1);
      if (a instanceof z) {
        if (!a.hasGlobal(t$1.property.name))
          throw new t(e$12, e.InvalidIdentifier, t$1);
        return a.global(t$1.property.name);
      }
      throw new t(e$12, e.InvalidMemberAccessKey, t$1);
    }
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  let i = await J(e$12, t$1.property);
  if (a instanceof J$1 || J$2(a)) {
    if (w(i))
      return a.field(i);
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  if (a instanceof z) {
    if (w(i))
      return a.global(i);
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  if (a instanceof p) {
    if (w(i))
      return W$1(a, i, e$12, t$1);
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  if (Y$1(a)) {
    if (Z$1(i) && isFinite(i) && Math.floor(i) === i) {
      if (i < 0 && (i = a.length + i), i >= a.length || i < 0)
        throw new t(e$12, e.OutOfBounds, t$1);
      return a[i];
    }
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  if (E(a)) {
    if (Z$1(i) && isFinite(i) && Math.floor(i) === i) {
      if (i < 0 && (i = a.length() + i), i >= a.length() || i < 0)
        throw new t(e$12, e.OutOfBounds, t$1);
      return a.get(i);
    }
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  if (w(a)) {
    if (Z$1(i) && isFinite(i) && Math.floor(i) === i) {
      if (i < 0 && (i = a.length + i), i >= a.length || i < 0)
        throw new t(e$12, e.OutOfBounds, t$1);
      return a[i];
    }
    throw new t(e$12, e.InvalidMemberAccessKey, t$1);
  }
  throw new t(e$12, e.InvalidMemberAccessKey, t$1);
}
async function Fe(e$12, t$1) {
  const n2 = await J(e$12, t$1.argument);
  if (_$1(n2)) {
    if (t$1.operator === "!")
      return !n2;
    if (t$1.operator === "-")
      return -1 * re$1(n2);
    if (t$1.operator === "+")
      return 1 * re$1(n2);
    if (t$1.operator === "~")
      return ~re$1(n2);
    throw new t(e$12, e.UnsupportedUnaryOperator, t$1);
  }
  if (t$1.operator === "-")
    return -1 * re$1(n2);
  if (t$1.operator === "+")
    return 1 * re$1(n2);
  if (t$1.operator === "~")
    return ~re$1(n2);
  throw new t(e$12, e.UnsupportedUnaryOperator, t$1);
}
async function Ce(e$12, t$1) {
  const n2 = [];
  for (let r2 = 0; r2 < t$1.elements.length; r2++)
    n2.push(await J(e$12, t$1.elements[r2]));
  for (let a = 0; a < n2.length; a++) {
    if (F(n2[a]))
      throw new t(e$12, e.NoFunctionInArray, t$1);
    n2[a] === k$1 && (n2[a] = null);
  }
  return n2;
}
async function Re(e$12, t$1) {
  const n2 = [];
  n2[0] = await J(e$12, t$1.left), n2[1] = await J(e$12, t$1.right);
  const a = n2[0], i = n2[1];
  switch (t$1.operator) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Ne$1(re$1(a), re$1(i), t$1.operator);
    case "==":
      return X$1(a, i);
    case "!=":
      return !X$1(a, i);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return Q$1(a, i, t$1.operator);
    case "+":
      return w(a) || w(i) ? K(a) + K(i) : re$1(a) + re$1(i);
    case "-":
      return re$1(a) - re$1(i);
    case "*":
      return re$1(a) * re$1(i);
    case "/":
      return re$1(a) / re$1(i);
    case "%":
      return re$1(a) % re$1(i);
    default:
      throw new t(e$12, e.UnsupportedOperator, t$1);
  }
}
async function Ae(e$12, t$1) {
  const n2 = await J(e$12, t$1.left);
  let a = null;
  if (!_$1(n2))
    throw new t(e$12, e.LogicalExpressionOnlyBoolean, t$1);
  switch (t$1.operator) {
    case "||":
      if (n2 === true)
        return n2;
      if (a = await J(e$12, t$1.right), _$1(a))
        return a;
      throw new t(e$12, e.LogicExpressionOrAnd, t$1);
    case "&&":
      if (n2 === false)
        return n2;
      if (a = await J(e$12, t$1.right), _$1(a))
        return a;
      throw new t(e$12, e.LogicExpressionOrAnd, t$1);
    default:
      throw new t(e$12, e.LogicExpressionOrAnd, t$1);
  }
}
async function Me(e$12, t$1) {
  const n2 = t$1.name.toLowerCase();
  if (e$12.localScope != null && e$12.localScope[n2] !== void 0) {
    const t2 = e$12.localScope[n2];
    if (t2.valueset === true)
      return t2.value;
    if (t2.d !== null)
      return t2.d;
    t2.d = J(e$12, t2.node);
    const r2 = await t2.d;
    return t2.value = r2, t2.valueset = true, r2;
  }
  if (e$12.globalScope[n2] !== void 0) {
    const t2 = e$12.globalScope[n2];
    if (t2.valueset === true)
      return t2.value;
    if (t2.d !== null)
      return t2.d;
    t2.d = J(e$12, t2.node);
    const r2 = await t2.d;
    return t2.value = r2, t2.valueset = true, r2;
  }
  throw new t(e$12, e.InvalidIdentifier, t$1);
}
async function je(e$12, t$1) {
  if (t$1.callee.type === "MemberExpression") {
    const n2 = await J(e$12, t$1.callee.object);
    if (!(n2 instanceof z))
      throw new t(e$12, e.FuncionNotFound, t$1);
    const a = t$1.callee.computed === false ? t$1.callee.property.name : await J(e$12, t$1.callee.property);
    if (!n2.hasGlobal(a))
      throw new t(e$12, e.FuncionNotFound, t$1);
    const i = await n2.global(a);
    if (!F(i))
      throw new t(e$12, e.CallNonFunction, t$1);
    return i.call(e$12, t$1);
  }
  if (t$1.callee.type !== "Identifier")
    throw new t(e$12, e.FuncionNotFound, t$1);
  if (e$12.localScope != null && e$12.localScope[t$1.callee.name.toLowerCase()] !== void 0) {
    const n2 = e$12.localScope[t$1.callee.name.toLowerCase()];
    if (F(n2.value))
      return n2.value.call(e$12, t$1);
    throw new t(e$12, e.CallNonFunction, t$1);
  }
  if (e$12.globalScope[t$1.callee.name.toLowerCase()] !== void 0) {
    const n2 = e$12.globalScope[t$1.callee.name.toLowerCase()];
    if (F(n2.value))
      return n2.value.call(e$12, t$1);
    throw new t(e$12, e.CallNonFunction, t$1);
  }
  throw new t(e$12, e.FuncionNotFound, t$1);
}
async function Le(e2, t2) {
  return t2.value ? t2.value.cooked : "";
}
function ke(e$12, t$1, n2) {
  if (F(e$12))
    throw new t(t$1, e.NoFunctionInTemplateLiteral, n2);
  return e$12;
}
async function Ne(e2, t2) {
  const n2 = [];
  for (let a = 0; a < t2.expressions.length; a++) {
    const r3 = await J(e2, t2.expressions[a]);
    n2[a] = K(r3);
  }
  let r2 = "", o2 = 0;
  for (const a of t2.quasis)
    if (r2 += a.value ? a.value.cooked : "", a.tail === false) {
      r2 += n2[o2] ? ke(n2[o2], e2, t2) : "", o2++;
    }
  return r2;
}
const Oe = {};
async function Ee(e2, t2, n2, r2) {
  const o2 = await J(e2, t2.arguments[n2]);
  if (X$1(o2, r2))
    return J(e2, t2.arguments[n2 + 1]);
  const a = t2.arguments.length - n2;
  return a === 1 ? J(e2, t2.arguments[n2]) : a === 2 ? null : a === 3 ? J(e2, t2.arguments[n2 + 2]) : Ee(e2, t2, n2 + 2, r2);
}
async function Be(e$12, t$1, n2, a) {
  if (a === true)
    return J(e$12, t$1.arguments[n2 + 1]);
  if (t$1.arguments.length - n2 === 3)
    return J(e$12, t$1.arguments[n2 + 2]);
  const i = await J(e$12, t$1.arguments[n2 + 2]);
  if (_$1(i) === false)
    throw new t(e$12, e.ModuleExportNotFound, t$1.arguments[n2 + 2]);
  return Be(e$12, t$1, n2 + 2, i);
}
async function Pe(e$12, t$1, n2, a) {
  const i = e$12.body;
  if (n2.length !== e$12.params.length)
    throw new t(t$1, e.WrongNumberOfParameters, null);
  for (let r2 = 0; r2 < n2.length; r2++) {
    const o2 = e$12.params[r2];
    o2.type === "Identifier" && t$1.localScope != null && (t$1.localScope[o2.name.toLowerCase()] = { d: null, value: n2[r2], valueset: true, node: null });
  }
  const l = await J(t$1, i);
  if (l instanceof D)
    return l.value;
  if (l === j)
    throw new t(t$1, e.UnexpectedToken, a);
  if (l === A)
    throw new t(t$1, e.UnexpectedToken, a);
  return l instanceof N$1 ? l.value : l;
}
M(Oe, _), B(Oe, _), N(Oe, _), C(Oe, _), f(Oe, _), dn({ functions: Oe, compiled: false, signatures: null, evaluateIdentifier: null, mode: "async", standardFunction: _, standardFunctionAsync: H }), Oe.iif = async function(e$12, t$1) {
  V$1(t$1.arguments === null ? [] : t$1.arguments, 3, 3, e$12, t$1);
  const n2 = await J(e$12, t$1.arguments[0]);
  if (_$1(n2) === false)
    throw new t(e$12, e.BooleanConditionRequired, t$1);
  return J(e$12, n2 ? t$1.arguments[1] : t$1.arguments[2]);
}, Oe.decode = async function(e$12, t$1) {
  if (t$1.arguments.length < 2)
    throw new t(e$12, e.WrongNumberOfParameters, t$1);
  if (t$1.arguments.length === 2)
    return J(e$12, t$1.arguments[1]);
  if ((t$1.arguments.length - 1) % 2 == 0)
    throw new t(e$12, e.WrongNumberOfParameters, t$1);
  return Ee(e$12, t$1, 1, await J(e$12, t$1.arguments[0]));
}, Oe.when = async function(e$12, t$1) {
  if (t$1.arguments.length < 3)
    throw new t(e$12, e.WrongNumberOfParameters, t$1);
  if (t$1.arguments.length % 2 == 0)
    throw new t(e$12, e.WrongNumberOfParameters, t$1);
  const n2 = await J(e$12, t$1.arguments[0]);
  if (_$1(n2) === false)
    throw new t(e$12, e.BooleanConditionRequired, t$1.arguments[0]);
  return Be(e$12, t$1, 0, n2);
};
const Ke = { fixSpatialReference: se$1, parseArguments: V, standardFunction: _, standardFunctionAsync: H, evaluateIdentifier: Me };
for (const Ve in Oe)
  Oe[Ve] = { value: new e$1(Oe[Ve]), valueset: true, node: null };
const De = function() {
};
function Ge(e2, t2) {
  const r2 = new De();
  e2 == null && (e2 = {}), t2 == null && (t2 = {});
  const o2 = new J$1({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o2.immutable = false, r2.textformatting = { value: o2, valueset: true, node: null };
  for (const n2 in t2)
    r2[n2] = { value: new e$1(t2[n2]), native: true, valueset: true, node: null };
  for (const n2 in e2)
    e2[n2] && e2[n2].declaredClass === "esri.Graphic" ? r2[n2] = { value: g.createFromGraphic(e2[n2]), valueset: true, node: null } : r2[n2] = { value: e2[n2], valueset: true, node: null };
  return r2;
}
function Te(e2) {
  console.log(e2);
}
De.prototype = Oe, De.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: true, node: null }, De.prototype.pi = { value: Math.PI, valueset: true, node: null };
const Ue = Ke;
function qe(e2) {
  const t2 = { mode: "async", compiled: false, functions: {}, signatures: [], standardFunction: _, standardFunctionAsync: H, evaluateIdentifier: Me };
  for (let n2 = 0; n2 < e2.length; n2++)
    e2[n2].registerFunctions(t2);
  for (const n2 in t2.functions)
    Oe[n2] = { value: new e$1(t2.functions[n2]), valueset: true, node: null }, De.prototype[n2] = Oe[n2];
  for (let n2 = 0; n2 < t2.signatures.length; n2++)
    o(t2.signatures[n2], "async");
}
async function We(e$12, n2) {
  let a = n2.spatialReference;
  a == null && (a = new k({ wkid: 102100 }));
  let i = null;
  e$12.usesModules && (i = new s(new Map(), e$12.loadedModules));
  const l = Ge(n2.vars, n2.customfunctions), s$12 = { spatialReference: a, services: n2.services, exports: {}, libraryResolver: i, abortSignal: n2.abortSignal === void 0 || n2.abortSignal === null ? { aborted: false } : n2.abortSignal, globalScope: l, console: n2.console ? n2.console : Te, lrucache: n2.lrucache, interceptor: n2.interceptor, localScope: null, depthCounter: { depth: 1 } };
  let c = await J(s$12, e$12);
  if (c instanceof D && (c = c.value), c instanceof N$1 && (c = c.value), c === k$1 && (c = null), c === j)
    throw new t(s$12, e.IllegalResult, null);
  if (c === A)
    throw new t(s$12, e.IllegalResult, null);
  if (F(c))
    throw new t(s$12, e.IllegalResult, null);
  return c;
}
qe([m]);
export { We as executeScript, qe as extend, Ue as functionHelper };
