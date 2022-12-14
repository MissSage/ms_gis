import { s, kr as x, ks as n, t, g as s$1, kt as L, ku as S, fY as ie, kv as m$1, kw as _ } from "./index.js";
import "vue";
const c = s.getLogger("esri.layers.support.labelFormatUtils"), f = { type: "simple", evaluate: () => null }, p = { getAttribute: (e, r) => e.field(r) };
async function m(r, a, n$1) {
  if (!r || !r.symbol)
    return f;
  const o = r.where, i = x(r), m2 = o ? await import("./WhereClause.js") : null;
  let g;
  if (i.type === "arcade") {
    const r2 = await n(i.expression, n$1, a);
    if (t(r2))
      return f;
    g = { type: "arcade", evaluate(t2) {
      try {
        const e = r2.evaluate({ $feature: "attributes" in t2 ? r2.repurposeFeature(t2) : t2 });
        if (e != null)
          return e.toString();
      } catch (a2) {
        c.error(new s$1("arcade-expression-error", "Encountered an error when evaluating label expression for feature", { feature: t2, expression: i }));
      }
      return null;
    }, needsHydrationToEvaluate: () => _(i.expression) == null };
  } else
    g = { type: "simple", evaluate: (e) => i.expression.replace(/{[^}]*}/g, (r2) => {
      const t2 = r2.slice(1, -1), n2 = a.get(t2);
      if (!n2)
        return r2;
      let o2 = null;
      if ("attributes" in e) {
        e && e.attributes && (o2 = e.attributes[n2.name]);
      } else
        o2 = e.field(n2.name);
      return o2 == null ? "" : d(o2, n2);
    }) };
  if (o) {
    let r2;
    try {
      r2 = m2.WhereClause.create(o, a);
    } catch (y) {
      return c.error(new s$1("bad-where-clause", "Encountered an error when evaluating where clause, ignoring", { where: o, error: y })), f;
    }
    const t2 = g.evaluate;
    g.evaluate = (a2) => {
      const n2 = "attributes" in a2 ? void 0 : p;
      try {
        if (r2.testFeature(a2, n2))
          return t2(a2);
      } catch (y) {
        c.error(new s$1("bad-where-clause", "Encountered an error when evaluating where clause for feature", { where: o, feature: a2, error: y }));
      }
      return null;
    };
  }
  return g;
}
function d(e, r) {
  if (e == null)
    return "";
  const t2 = r.domain;
  if (t2) {
    if (t2.type === "codedValue" || t2.type === "coded-value") {
      const r2 = e;
      for (const e2 of t2.codedValues)
        if (e2.code === r2)
          return e2.name;
    } else if (t2.type === "range") {
      const r2 = +e, a = "range" in t2 ? t2.range[0] : t2.minValue, n2 = "range" in t2 ? t2.range[1] : t2.maxValue;
      if (a <= r2 && r2 <= n2)
        return t2.name;
    }
  }
  let l = e;
  return r.type === "date" || r.type === "esriFieldTypeDate" ? l = L(l, S("short-date")) : ie(r) && (l = m$1(+l)), l || "";
}
export { m as createLabelFunction, d as formatField };
