import { bL as b, bM as p, he as p$1, bO as j, hf as Ot, bJ as c, b1 as f, g as s, a as r, bN as j$1, bP as c$1, bQ as d$1, hg as c$3, hh as p$2, hi as a$1, bK as w } from "./index.js";
import { c as c$2, a } from "./devEnvironmentUtils.js";
import "vue";
function h(t, e, r2, n) {
  return t.name ? t.styleName && t.styleName === "Esri2DPointSymbolsStyle" ? U(t, e, n) : c(t, e, n).then((o) => d(f(o), t.name, e, r2, n)) : Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference"));
}
function d(l, f2, g, h2, d2) {
  var _a, _b, _c;
  const U2 = l.data, N = g && r(g.portal) ? g.portal : j$1.getDefault(), w2 = { portal: N, url: j(l.baseUrl), origin: "portal-item" }, S = U2.items.find((t) => t.name === f2);
  if (!S) {
    const t = `The symbol name '${f2}' could not be found`;
    return Promise.reject(new s("symbolstyleutils:symbol-name-not-found", t, { symbolName: f2 }));
  }
  let D = c$1(d$1(S, h2), w2), O = (_b = (_a = S.thumbnail) == null ? void 0 : _a.href) != null ? _b : null;
  const P = S.thumbnail && S.thumbnail.imageData;
  c$2() && (D = (_c = a(D)) != null ? _c : "", O = a(O));
  const E = { portal: N, url: j(Ot(D)), origin: "portal-item" };
  return b(D, d2).then((e) => {
    const r2 = h2 === "cimRef" ? p(e.data) : e.data, o = p$1(r2, E);
    if (o && c$3(o)) {
      if (O) {
        const t = c$1(O, w2);
        o.thumbnail = new p$2({ url: t });
      } else
        P && (o.thumbnail = new p$2({ url: `data:image/png;base64,${P}` }));
      l.styleUrl ? o.styleOrigin = new a$1({ portal: g.portal, styleUrl: l.styleUrl, name: f2 }) : l.styleName && (o.styleOrigin = new a$1({ portal: g.portal, styleName: l.styleName, name: f2 }));
    }
    return o;
  });
}
function U(t, e, r$1) {
  const o = w.replace(/\{SymbolName\}/gi, t.name), l = r(e.portal) ? e.portal : j$1.getDefault();
  return b(o, r$1).then((t2) => {
    const e2 = p(t2.data);
    return p$1(e2, { portal: l, url: j(Ot(o)), origin: "portal-item" });
  });
}
export { d as fetchSymbolFromStyle, h as resolveWebStyleSymbol };
