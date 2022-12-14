import { it as u, dU as i, aG as s, Z as m, a as r, $ as e, a0 as y, a1 as n$1 } from "./index.js";
let n = 0, l = class extends u(i(s(m))) {
  constructor(e2) {
    super(e2), this.id = `${Date.now().toString(16)}-analysis-${n++}`, this.title = null;
  }
  get parent() {
    return this._get("parent");
  }
  set parent(e2) {
    const t = this.parent;
    if (r(t))
      switch (t.type) {
        case "line-of-sight":
        case "dimension":
          t.releaseAnalysis(this);
          break;
        case "2d":
        case "3d":
          t.analyses.includes(this) && t.analyses.remove(this);
      }
    this._set("parent", e2);
  }
  get isEditable() {
    return this.requiredPropertiesForEditing.every(r);
  }
};
e([y({ type: String, constructOnly: true, clonable: false })], l.prototype, "id", void 0), e([y({ type: String })], l.prototype, "title", void 0), e([y({ constructOnly: true })], l.prototype, "type", void 0), e([y({ clonable: false, value: null })], l.prototype, "parent", null), e([y({ readOnly: true })], l.prototype, "isEditable", null), e([y({ readOnly: true })], l.prototype, "requiredPropertiesForEditing", void 0), l = e([n$1("esri.analysis.Analysis")], l);
const c = l;
export { c };
