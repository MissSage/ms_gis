import { h3 as v, h4 as O, e0 as b, k9 as v$1, g as s, $ as e, a0 as y, a1 as n } from "./index.js";
import "vue";
let u = class extends v(O(b)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, o) => {
      v$1(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s$1 = "Unsupported layer type";
        r2 && (s$1 += " " + r2), o(new s("layer:unsupported-layer-type", s$1, { layerType: r2 }));
      });
    }));
  }
  read(r, e2) {
    const o = { resourceInfo: r };
    r.id != null && (o.id = r.id), r.title != null && (o.title = r.title), super.read(o, e2);
  }
  write(r) {
    return Object.assign(r || {}, this.resourceInfo, { id: this.id });
  }
};
e([y({ readOnly: true })], u.prototype, "resourceInfo", void 0), e([y({ type: ["show", "hide"] })], u.prototype, "listMode", void 0), e([y({ json: { read: false }, readOnly: true, value: "unsupported" })], u.prototype, "type", void 0), u = e([n("esri.layers.UnsupportedLayer")], u);
const c = u;
export { c as default };
