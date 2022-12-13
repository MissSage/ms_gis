import { V, b as J, ao as Ae, r as re, K, J as J$1, ap as P, P as P$1, aq as me, t, e, ar as Re, as as Fe, at as fe, au as Ce, av as ce, aw as te, y as v, ax as Ie } from "./arcadeUtils.js";
import "./index.js";
import "vue";
import "./number.js";
function h(e2) {
  return e2 && e2.domain ? e2.domain.type === "coded-value" || e2.domain.type === "codedValue" ? J$1.convertObjectToArcadeDictionary({ type: "codedValue", name: e2.domain.name, dataType: P[e2.field.type], codedValues: e2.domain.codedValues.map((n) => ({ name: n.name, code: n.code })) }) : J$1.convertObjectToArcadeDictionary({ type: "range", name: e2.domain.name, dataType: P[e2.field.type], min: e2.domain.min, max: e2.domain.max }) : null;
}
function A(T) {
  T.mode === "async" && (T.functions.domain = function(n, u) {
    return T.standardFunctionAsync(n, u, async (m, f, l) => {
      if (V(l, 2, 3, n, u), J(l[0])) {
        return h(Ae(l[0], K(l[1]), l[2] === void 0 ? void 0 : re(l[2])));
      }
      if (P$1(l[0])) {
        await l[0]._ensureLoaded();
        return h(me(K(l[1]), l[0], null, l[2] === void 0 ? void 0 : re(l[2])));
      }
      throw new t(n, e.InvalidParameter, u);
    });
  }, T.functions.subtypes = function(o, i) {
    return T.standardFunctionAsync(o, i, async (c, d, m) => {
      if (V(m, 1, 1, o, i), J(m[0])) {
        const e2 = Re(m[0]);
        return e2 ? J$1.convertObjectToArcadeDictionary(e2) : null;
      }
      if (P$1(m[0])) {
        await m[0]._ensureLoaded();
        const e2 = m[0].subtypes();
        return e2 ? J$1.convertObjectToArcadeDictionary(e2) : null;
      }
      throw new t(o, e.InvalidParameter, i);
    });
  }, T.functions.domainname = function(n, o) {
    return T.standardFunctionAsync(n, o, async (u, l, y) => {
      if (V(y, 2, 4, n, o), J(y[0]))
        return Fe(y[0], K(y[1]), y[2], y[3] === void 0 ? void 0 : re(y[3]));
      if (P$1(y[0])) {
        await y[0]._ensureLoaded();
        const n2 = me(K(y[1]), y[0], null, y[3] === void 0 ? void 0 : re(y[3]));
        return fe(n2, y[2]);
      }
      throw new t(n, e.InvalidParameter, o);
    });
  }, T.signatures.push({ name: "domainname", min: 2, max: 4 }), T.functions.domaincode = function(n, o) {
    return T.standardFunctionAsync(n, o, async (u, m, f) => {
      if (V(f, 2, 4, n, o), J(f[0]))
        return Ce(f[0], K(f[1]), f[2], f[3] === void 0 ? void 0 : re(f[3]));
      if (P$1(f[0])) {
        await f[0]._ensureLoaded();
        const n2 = me(K(f[1]), f[0], null, f[3] === void 0 ? void 0 : re(f[3]));
        return ce(n2, f[2]);
      }
      throw new t(n, e.InvalidParameter, o);
    });
  }, T.signatures.push({ name: "domaincode", min: 2, max: 4 })), T.functions.text = function(n, e2) {
    return T.standardFunctionAsync(n, e2, (a, r, o) => {
      if (V(o, 1, 2, n, e2), !P$1(o[0]))
        return te(o[0], o[1]);
      {
        const n2 = v(o[1], "");
        if (n2 === "")
          return o[0].castToText();
        if (n2.toLowerCase() === "schema")
          return o[0].convertToText("schema", a.abortSignal);
        if (n2.toLowerCase() === "featureset")
          return o[0].convertToText("featureset", a.abortSignal);
      }
    });
  }, T.functions.gdbversion = function(n, o) {
    return T.standardFunctionAsync(n, o, async (i, c, d) => {
      if (V(d, 1, 1, n, o), J(d[0]))
        return d[0].gdbVersion();
      if (P$1(d[0])) {
        return (await d[0].load()).gdbVersion;
      }
      throw new t(n, e.InvalidParameter, o);
    });
  }, T.functions.schema = function(o, i) {
    return T.standardFunctionAsync(o, i, async (c, d, u) => {
      if (V(u, 1, 1, o, i), P$1(u[0]))
        return await u[0].load(), J$1.convertObjectToArcadeDictionary(u[0].schema());
      if (J(u[0])) {
        const e2 = Ie(u[0]);
        return e2 ? J$1.convertObjectToArcadeDictionary(e2) : null;
      }
      throw new t(o, e.InvalidParameter, i);
    });
  };
}
export { A as registerFunctions };
