import { V, P, Y, w, E, t, e, am as l$1, y as v } from "./arcadeUtils.js";
import { WhereClause as f$1 } from "./WhereClause.js";
import "./index.js";
import "vue";
import "./number.js";
async function f(n, t2, r, i, f2, d2) {
  if (i.length === 1) {
    if (Y(i[0]))
      return l$1(n, i[0], v(i[1], -1));
    if (E(i[0]))
      return l$1(n, i[0].toArray(), v(i[1], -1));
  } else if (i.length === 2) {
    if (Y(i[0]))
      return l$1(n, i[0], v(i[1], -1));
    if (E(i[0]))
      return l$1(n, i[0].toArray(), v(i[1], -1));
    if (P(i[0])) {
      const r2 = await i[0].load(), e2 = await l(f$1.create(i[1], r2.getFieldsIndex()), d2, f2);
      return i[0].calculateStatistic(n, e2, v(i[2], 1e3), t2.abortSignal);
    }
  } else if (i.length === 3 && P(i[0])) {
    const r2 = await i[0].load(), e2 = await l(f$1.create(i[1], r2.getFieldsIndex()), d2, f2);
    return i[0].calculateStatistic(n, e2, v(i[2], 1e3), t2.abortSignal);
  }
  return l$1(n, i, -1);
}
async function l(n, t2, r) {
  const e2 = n.getVariables();
  if (e2.length > 0) {
    const a = [];
    for (let n2 = 0; n2 < e2.length; n2++) {
      const i2 = { name: e2[n2] };
      a.push(await t2.evaluateIdentifier(r, i2));
    }
    const i = {};
    for (let n2 = 0; n2 < e2.length; n2++)
      i[e2[n2]] = a[n2];
    return n.parameters = i, n;
  }
  return n;
}
function d(c) {
  c.mode === "async" && (c.functions.stdev = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("stdev", t3, r, e2, n, c));
  }, c.functions.variance = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("variance", t3, r, e2, n, c));
  }, c.functions.average = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("mean", t3, r, e2, n, c));
  }, c.functions.mean = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("mean", t3, r, e2, n, c));
  }, c.functions.sum = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("sum", t3, r, e2, n, c));
  }, c.functions.min = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("min", t3, r, e2, n, c));
  }, c.functions.max = function(n, t2) {
    return c.standardFunctionAsync(n, t2, (t3, r, e2) => f("max", t3, r, e2, n, c));
  }, c.functions.count = function(u, o) {
    return c.standardFunctionAsync(u, o, (c2, f2, l2) => {
      if (V(l2, 1, 1, u, o), P(l2[0]))
        return l2[0].count(c2.abortSignal);
      if (Y(l2[0]) || w(l2[0]))
        return l2[0].length;
      if (E(l2[0]))
        return l2[0].length();
      throw new t(u, e.InvalidParameter, o);
    });
  });
}
export { d as registerFunctions };
