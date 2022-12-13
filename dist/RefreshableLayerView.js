import { $ as e, a0 as y, a1 as n, cA as a, m as j, s } from "./index.js";
const i = (i2) => {
  let c = class extends i2 {
    initialize() {
      this.handles.add(a(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((r2) => {
          j(r2) || s.getLogger(this.declaredClass).error(r2);
        });
      }), "RefreshableLayerView");
    }
  };
  return e([y()], c.prototype, "layer", void 0), c = e([n("esri.layers.mixins.RefreshableLayerView")], c), c;
};
export { i };
