import { b as E, S } from "./Utils2.js";
import { f } from "./MaterialKey.js";
const s = { marker: E.MARKER, fill: E.FILL, line: E.LINE, text: E.TEXT };
class l {
  constructor(e, l2, n, r) {
    const c = { minScale: l2 == null ? void 0 : l2.minScale, maxScale: l2 == null ? void 0 : l2.maxScale }, m = i(c);
    this.layers = e, this.data = l2, this.hash = this._createHash() + m, this.rendererKey = n;
    const o = { isOutline: false, placement: null, symbologyType: S.DEFAULT, vvFlags: n };
    for (const t of e) {
      const e2 = s[t.type];
      o.isOutline = t.type === "line" && t.isOutline, t.materialKey = f(e2, o), t.maxVVSize = r, t.scaleInfo = c, t.templateHash += m;
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let e = "";
    for (const t of this.layers)
      e += t.templateHash;
    return e;
  }
}
function i(e) {
  return e.minScale || e.maxScale ? e.minScale + "-" + e.maxScale : "";
}
export { l };
