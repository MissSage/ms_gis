import { h3 as v, h4 as O, e0 as b, k9 as v$1, g as s, $ as e, a0 as y, a1 as n } from "./index.js";
import "vue";
let a = class extends v(O(b)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, e2) => {
      v$1(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s$1 = "Unknown layer type";
        r2 && (s$1 += " " + r2), e2(new s("layer:unknown-layer-type", s$1, { layerType: r2 }));
      });
    }));
  }
  read(r, o) {
    super.read({ resourceInfo: r }, o);
  }
  write() {
    return null;
  }
};
e([y({ readOnly: true })], a.prototype, "resourceInfo", void 0), e([y({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), e([y({ json: { read: false }, readOnly: true, value: "unknown" })], a.prototype, "type", void 0), a = e([n("esri.layers.UnknownLayer")], a);
const c = a;
export { c as default };
