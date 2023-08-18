import { N as e$1, O as y$2, l1 as v, P as n$1, m2 as p$1, fO as w, Z as v$1, ms as p$2, k as j, mt as p$3, mu as n$2, s, ad as l, ai as w$1, bn as a$1 } from "./index.js";
import { i } from "./utils.js";
var y$1;
const c = { base: p$1, key: "type", typeMap: { extent: w, polygon: v$1 } };
let n = y$1 = class extends p$2 {
  constructor(r) {
    super(r), this.type = "geometry", this.geometry = null;
  }
  clone() {
    var _a, _b;
    return new y$1({ geometry: (_b = (_a = this.geometry) == null ? void 0 : _a.clone()) != null ? _b : null });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
};
e$1([y$2({ types: c, json: { read: v, write: true } })], n.prototype, "geometry", void 0), n = y$1 = e$1([n$1("esri.views.layers.support.Geometry")], n);
const a = n;
let e = class extends p$2 {
  constructor(r) {
    super(r), this.type = "path", this.path = [];
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
e$1([y$2({ type: [[[Number]]], json: { write: true } })], e.prototype, "path", void 0), e = e$1([n$1("esri.views.layers.support.Path")], e);
const p = e;
const u = j.ofType({ key: "type", base: null, typeMap: { rect: p$3, path: p, geometry: a } }), y = (t) => {
  let h = class extends t {
    constructor() {
      super(...arguments), this.attached = false, this.clips = new u(), this.lastUpdateId = -1, this.moving = false, this.updateRequested = false, this.visibleAtCurrentScale = false;
    }
    initialize() {
      var _a, _b, _c, _d;
      const e2 = (_b = (_a = this.view) == null ? void 0 : _a.spatialReferenceLocked) != null ? _b : true, t2 = (_c = this.view) == null ? void 0 : _c.spatialReference;
      t2 && e2 && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new i()), this.container.fadeTransitionEnabled = true, this.container.visible = false, this.container.endTransitions(), this.handles.add([l(() => this.suspended, (e3) => {
        this.container && (this.container.visible = !e3), this.view && !e3 && this.updateRequested && this.view.requestUpdate();
      }, w$1), l(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = this.layer) == null ? void 0 : _a2.opacity) != null ? _b2 : 1;
      }, (e3) => {
        this.container && (this.container.opacity = e3);
      }, w$1), l(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (e3) => {
        this.container && (this.container.blendMode = e3);
      }, w$1), l(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (e3) => {
        this.container && (this.container.effect = e3);
      }, w$1), a$1(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      }, w$1), l(() => {
        var _a2;
        return { scale: (_a2 = this.view) == null ? void 0 : _a2.scale, scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null };
      }, ({ scale: e3 }) => {
        const t3 = e3 && this.isVisibleAtScale(e3);
        t3 !== this.visibleAtCurrentScale && this._set("visibleAtCurrentScale", t3);
      }, w$1)]), ((_d = this.view) == null ? void 0 : _d.whenLayerView) ? this.view.whenLayerView(this.layer).then((e3) => {
        e3 === this && this.processAttach();
      }, () => {
      }) : this.when().then(() => {
        this.processAttach();
      }, () => {
      }));
    }
    destroy() {
      this.processDetach(), this.updateRequested = false;
    }
    get spatialReferenceSupported() {
      var _a;
      const e2 = (_a = this.view) == null ? void 0 : _a.spatialReference;
      return e2 == null || this.supportsSpatialReference(e2);
    }
    get updating() {
      var _a;
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !!((_a = this.updatingHandles) == null ? void 0 : _a.updating));
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = true, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = false, this.detach(), this.updateRequested = false);
    }
    isVisibleAtScale(e2) {
      const t2 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      if (!t2)
        return true;
      const { minScale: s2, maxScale: i2 } = t2;
      return (s2 === 0 || e2 <= s2) && (i2 === 0 || e2 >= i2);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = true, this.suspended || this.view.requestUpdate());
    }
    processUpdate(e2) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", e2), this.updateRequested && !this.suspended && (this.updateRequested = false, this.update(e2))) : this.updateRequested = false;
    }
    hitTest(e2, t2) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(e2) {
      return true;
    }
    canResume() {
      return !!this.spatialReferenceSupported && (!!super.canResume() && this.visibleAtCurrentScale);
    }
    getSuspendInfo() {
      const e2 = super.getSuspendInfo(), t2 = !this.spatialReferenceSupported, s2 = this.visibleAtCurrentScale;
      return t2 && (e2.spatialReferenceNotSupported = t2), s2 && (e2.outsideScaleRange = s2), e2;
    }
  };
  return e$1([y$2()], h.prototype, "attached", void 0), e$1([y$2({ type: u, set(e2) {
    const t2 = n$2(e2, this._get("clips"), u);
    this._set("clips", t2);
  } })], h.prototype, "clips", void 0), e$1([y$2()], h.prototype, "container", void 0), e$1([y$2()], h.prototype, "moving", void 0), e$1([y$2({ readOnly: true })], h.prototype, "spatialReferenceSupported", null), e$1([y$2({ readOnly: true })], h.prototype, "updateParameters", void 0), e$1([y$2()], h.prototype, "updateRequested", void 0), e$1([y$2()], h.prototype, "updating", null), e$1([y$2()], h.prototype, "view", void 0), e$1([y$2({ readOnly: true })], h.prototype, "visibleAtCurrentScale", void 0), h = e$1([n$1("esri.views.2d.layers.LayerView2D")], h), h;
};
export { y };
