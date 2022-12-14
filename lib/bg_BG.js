import { n as n$1, o as o$1 } from "./_commonjsHelpers.js";
function r(e, t) {
  for (var r2 = 0; r2 < t.length; r2++) {
    const o2 = t[r2];
    if (typeof o2 != "string" && !Array.isArray(o2)) {
      for (const t2 in o2)
        if (t2 !== "default" && !(t2 in e)) {
          const r3 = Object.getOwnPropertyDescriptor(o2, t2);
          r3 && Object.defineProperty(e, t2, r3.get ? r3 : { enumerable: true, get: () => o2[t2] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var o, n, s, f, i = { exports: {} };
o = i, n = i.exports, s = function(e, t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.default = { _percentPrefix: null, _percentSuffix: "%", "Zoom Out": "\u041E\u0442\u0434\u0430\u043B\u0435\u0447\u0430\u0432\u0430\u043D\u0435", "From %1 to %2": "\u041E\u0442 %1 \u0434\u043E %2", "From %1": "\u041E\u0442 %1", "To %1": "\u0414\u043E %1" };
}, (f = s(n$1, n)) !== void 0 && (o.exports = f);
const p = r({ __proto__: null, default: o$1(i.exports) }, [i.exports]);
export { p as b };
