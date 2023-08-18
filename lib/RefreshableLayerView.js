import { N as e, O as y, P as n, bn as a, gp as j, ea as s } from "./index.js";
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
