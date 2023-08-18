import { a7 as a, cc as s, hQ as m, a8 as n, al as m$1, ea as s$1, z as i, N as e, O as y, P as n$1 } from "./index.js";
let d = class extends a(s(m(n.EventedMixin(m$1)))) {
  constructor(e2) {
    super(e2), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((e2) => {
      if (e2.name !== "layerview:create-error") {
        const t = this.layer && this.layer.id || "no id", r = this.layer && this.layer.title || "no title";
        s$1.getLogger(this.declaredClass).error("#resolve()", `Failed to resolve layer view (layer title: '${r}', id: '${t}')`, e2);
      }
    });
  }
  get fullOpacity() {
    return i(this.get("layer.opacity"), 1) * i(this.get("parent.fullOpacity"), 1);
  }
  get suspended() {
    return !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    var _a;
    return !this.suspended && ((_a = this.layer) == null ? void 0 : _a.legendEnabled) === true;
  }
  get updating() {
    var _a;
    return !(!((_a = this.updatingHandles) == null ? void 0 : _a.updating) && !this.isUpdating());
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get visible() {
    var _a;
    return ((_a = this.layer) == null ? void 0 : _a.visible) === true;
  }
  set visible(e2) {
    this._overrideIfSome("visible", e2);
  }
  canResume() {
    var _a, _b, _c;
    return this.visible && ((_a = this.layer) == null ? void 0 : _a.loaded) && !((_b = this.parent) == null ? void 0 : _b.suspended) && ((_c = this.view) == null ? void 0 : _c.ready) || false;
  }
  getSuspendInfo() {
    const e2 = this.parent && this.parent.suspended ? this.parent.suspendInfo : {}, t = this;
    return t.view && t.view.ready || (e2.viewNotReady = true), this.layer && this.layer.loaded || (e2.layerNotLoaded = true), this.visible || (e2.layerInvisible = true), e2;
  }
  isUpdating() {
    return false;
  }
};
e([y()], d.prototype, "fullOpacity", null), e([y()], d.prototype, "layer", void 0), e([y()], d.prototype, "parent", void 0), e([y({ readOnly: true })], d.prototype, "suspended", null), e([y({ readOnly: true })], d.prototype, "suspendInfo", null), e([y({ readOnly: true })], d.prototype, "legendEnabled", null), e([y({ type: Boolean, readOnly: true })], d.prototype, "updating", null), e([y({ readOnly: true })], d.prototype, "updatingProgress", null), e([y()], d.prototype, "visible", null), e([y()], d.prototype, "view", void 0), d = e([n$1("esri.views.layers.LayerView")], d);
const u = d;
export { u };
