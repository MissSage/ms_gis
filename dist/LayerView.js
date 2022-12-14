import { $ as e$1, a0 as y$2, a1 as n$1, co as l, c0 as v, cw as p$3, cr as w, aq as v$1, cx as j, cy as n$2, g as s$1, R as l$1, cz as w$1, cA as a$1, Y as a$2, aG as s$2, cB as m, N as n$3, Z as m$1, s as s$3, b4 as i$2 } from "./index.js";
import { i as i$1 } from "./utils.js";
let t = class extends l {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
e$1([y$2({ readOnly: true })], t.prototype, "version", null), t = e$1([n$1("esri.views.layers.support.ClipArea")], t);
const p$2 = t;
var s;
let i = s = class extends p$2 {
  constructor(t2) {
    super(t2), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new s({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
e$1([y$2({ type: [Number, String], json: { write: true } })], i.prototype, "left", void 0), e$1([y$2({ type: [Number, String], json: { write: true } })], i.prototype, "right", void 0), e$1([y$2({ type: [Number, String], json: { write: true } })], i.prototype, "top", void 0), e$1([y$2({ type: [Number, String], json: { write: true } })], i.prototype, "bottom", void 0), i = s = e$1([n$1("esri.views.layers.support.ClipRect")], i);
const p$1 = i;
var y$1;
const c = { base: p$3, key: "type", typeMap: { extent: w, polygon: v$1 } };
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
const u$1 = j.ofType({ key: "type", base: null, typeMap: { rect: p$1, path: p, geometry: a } }), y = (t2) => {
  let h = class extends t2 {
    constructor() {
      super(...arguments), this.attached = false, this.clips = new u$1(), this.lastUpdateId = -1, this.moving = false, this.updateRequested = false, this.visibleAtCurrentScale = false;
    }
    initialize() {
      var _a, _b, _c, _d;
      const e2 = (_b = (_a = this.view) == null ? void 0 : _a.spatialReferenceLocked) != null ? _b : true, t3 = (_c = this.view) == null ? void 0 : _c.spatialReference;
      t3 && e2 && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new i$1()), this.container.fadeTransitionEnabled = true, this.container.visible = false, this.container.endTransitions(), this.handles.add([l$1(() => this.suspended, (e3) => {
        this.container && (this.container.visible = !e3), this.view && !e3 && this.updateRequested && this.view.requestUpdate();
      }, w$1), l$1(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = this.layer) == null ? void 0 : _a2.opacity) != null ? _b2 : 1;
      }, (e3) => {
        this.container && (this.container.opacity = e3);
      }, w$1), l$1(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (e3) => {
        this.container && (this.container.blendMode = e3);
      }, w$1), l$1(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (e3) => {
        this.container && (this.container.effect = e3);
      }, w$1), a$1(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      }, w$1), l$1(() => {
        var _a2;
        return { scale: (_a2 = this.view) == null ? void 0 : _a2.scale, scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null };
      }, ({ scale: e3 }) => {
        const t4 = e3 && this.isVisibleAtScale(e3);
        t4 !== this.visibleAtCurrentScale && this._set("visibleAtCurrentScale", t4);
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
      const t3 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      if (!t3)
        return true;
      const { minScale: s2, maxScale: i2 } = t3;
      return (s2 === 0 || e2 <= s2) && (i2 === 0 || e2 >= i2);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = true, this.suspended || this.view.requestUpdate());
    }
    processUpdate(e2) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", e2), this.updateRequested && !this.suspended && (this.updateRequested = false, this.update(e2))) : this.updateRequested = false;
    }
    hitTest(e2, t3) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(e2) {
      return true;
    }
    canResume() {
      return !!this.spatialReferenceSupported && (!!super.canResume() && this.visibleAtCurrentScale);
    }
    getSuspendInfo() {
      const e2 = super.getSuspendInfo(), t3 = !this.spatialReferenceSupported, s2 = this.visibleAtCurrentScale;
      return t3 && (e2.spatialReferenceNotSupported = t3), s2 && (e2.outsideScaleRange = s2), e2;
    }
  };
  return e$1([y$2()], h.prototype, "attached", void 0), e$1([y$2({ type: u$1, set(e2) {
    const t3 = n$2(e2, this._get("clips"), u$1);
    this._set("clips", t3);
  } })], h.prototype, "clips", void 0), e$1([y$2()], h.prototype, "container", void 0), e$1([y$2()], h.prototype, "moving", void 0), e$1([y$2({ readOnly: true })], h.prototype, "spatialReferenceSupported", null), e$1([y$2({ readOnly: true })], h.prototype, "updateParameters", void 0), e$1([y$2()], h.prototype, "updateRequested", void 0), e$1([y$2()], h.prototype, "updating", null), e$1([y$2()], h.prototype, "view", void 0), e$1([y$2({ readOnly: true })], h.prototype, "visibleAtCurrentScale", void 0), h = e$1([n$1("esri.views.2d.layers.LayerView2D")], h), h;
};
let d = class extends a$2(s$2(m(n$3.EventedMixin(m$1)))) {
  constructor(e2) {
    super(e2), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((e2) => {
      if (e2.name !== "layerview:create-error") {
        const t2 = this.layer && this.layer.id || "no id", r = this.layer && this.layer.title || "no title";
        s$3.getLogger(this.declaredClass).error("#resolve()", `Failed to resolve layer view (layer title: '${r}', id: '${t2}')`, e2);
      }
    });
  }
  get fullOpacity() {
    return i$2(this.get("layer.opacity"), 1) * i$2(this.get("parent.fullOpacity"), 1);
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
    const e2 = this.parent && this.parent.suspended ? this.parent.suspendInfo : {}, t2 = this;
    return t2.view && t2.view.ready || (e2.viewNotReady = true), this.layer && this.layer.loaded || (e2.layerNotLoaded = true), this.visible || (e2.layerInvisible = true), e2;
  }
  isUpdating() {
    return false;
  }
};
e$1([y$2()], d.prototype, "fullOpacity", null), e$1([y$2()], d.prototype, "layer", void 0), e$1([y$2()], d.prototype, "parent", void 0), e$1([y$2({ readOnly: true })], d.prototype, "suspended", null), e$1([y$2({ readOnly: true })], d.prototype, "suspendInfo", null), e$1([y$2({ readOnly: true })], d.prototype, "legendEnabled", null), e$1([y$2({ type: Boolean, readOnly: true })], d.prototype, "updating", null), e$1([y$2({ readOnly: true })], d.prototype, "updatingProgress", null), e$1([y$2()], d.prototype, "visible", null), e$1([y$2()], d.prototype, "view", void 0), d = e$1([n$1("esri.views.layers.LayerView")], d);
const u = d;
export { u, y };
