import { a2 as t$1, pO as u$2, dJ as i, al as m$1, dK as y, N as e, O as y$1, I as w, ci as x$1, P as n$1, pP as l$1, k as j$1, mU as t$2, ad as l$2, ai as w$1, C as r$1, mu as n$2, af as o, A as e$1, hd as u$3, nd as un, g_ as c$1, qB as m$2, bq as i$1, mf as c$2, mh as O$1, m as b$1 } from "./index.js";
import { c } from "./Analysis.js";
import { g as g$1 } from "./persistable.js";
import "vue";
import "./multiOriginJSONSupportUtils.js";
function t(e2, t2) {
  return l(e2) === l(t2);
}
function l(t2) {
  if (t$1(t2))
    return null;
  const l2 = t2.layer != null ? t2.layer.id : "";
  let r2 = null;
  return r2 = t2.objectId != null ? t2.objectId : t2.layer != null && "objectIdField" in t2.layer && t2.layer.objectIdField != null && t2.attributes != null ? t2.attributes[t2.layer.objectIdField] : t2.uid, r2 == null ? null : `o-${l2}-${r2}`;
}
const r = { json: { write: { writer: n, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: u$1 } } } };
function n(t2, l2) {
  var _a;
  t$1(t2) || ((_a = t2.layer) == null ? void 0 : _a.objectIdField) == null || t2.attributes == null || (l2.feature = { layerId: t2.layer.id, objectId: t2.attributes[t2.layer.objectIdField] });
}
function u$1(e2) {
  if (e2.layerId != null && e2.objectId != null)
    return { uid: null, layer: { id: e2.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e2.objectId } };
}
let f$2 = class extends u$2(i(m$1)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return y(this.position, o2.position) && y(this.elevationInfo, o2.elevationInfo) && t(this.feature, o2.feature);
  }
};
e([y$1({ type: w }), g$1()], f$2.prototype, "position", void 0), e([y$1({ type: x$1 }), g$1()], f$2.prototype, "elevationInfo", void 0), e([y$1(r)], f$2.prototype, "feature", void 0), f$2 = e([n$1("esri.analysis.LineOfSightAnalysisObserver")], f$2);
const u = f$2;
let m = class extends u$2(l$1) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return y(this.position, o2.position) && y(this.elevationInfo, o2.elevationInfo) && t(this.feature, o2.feature);
  }
};
e([y$1({ type: w }), g$1()], m.prototype, "position", void 0), e([y$1({ type: x$1 }), g$1()], m.prototype, "elevationInfo", void 0), e([y$1(r)], m.prototype, "feature", void 0), m = e([n$1("esri.analysis.LineOfSightAnalysisTarget")], m);
const f$1 = m;
const b = j$1.ofType(f$1);
let x = class extends c {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(l$2(() => this._computeExtent(), (t2) => {
      (t$1(t2) || t$1(t2.pending)) && this._set("extent", r$1(t2) ? t2.extent : null);
    }, w$1));
  }
  get targets() {
    return this._get("targets") || new b();
  }
  set targets(t2) {
    this._set("targets", n$2(t2, this.targets, b));
  }
  get spatialReference() {
    return r$1(this.observer) && r$1(this.observer.position) ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [o(this.observer, (t2) => t2.position)];
  }
  async waitComputeExtent() {
    const t2 = this._computeExtent();
    return r$1(t2) ? e$1(t2.pending) : null;
  }
  _computeExtent() {
    const t2 = this.spatialReference;
    if (t$1(this.observer) || t$1(this.observer.position) || t$1(t2))
      return null;
    const e2 = (t3) => i$1(t3.position, t3.elevationInfo) === "absolute-height", r2 = this.observer.position, o2 = u$3(r2.x, r2.y, r2.z, r2.x, r2.y, r2.z);
    for (const i2 of this.targets)
      if (r$1(i2.position)) {
        const e3 = un(i2.position, t2);
        if (r$1(e3.pending))
          return { pending: e3.pending, extent: null };
        if (r$1(e3.geometry)) {
          const { x: t3, y: r3, z: s2 } = e3.geometry;
          c$1(o2, [t3, r3, s2]);
        }
      }
    const s = m$2(o2, t2);
    return e2(this.observer) && this.targets.every(e2) || (s.zmin = null, s.zmax = null), { pending: null, extent: s };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
e([y$1({ type: ["line-of-sight"] })], x.prototype, "type", void 0), e([y$1({ type: u, json: { read: true, write: true } })], x.prototype, "observer", void 0), e([y$1({ cast: t$2, type: b, nonNullable: true, json: { read: true, write: true } })], x.prototype, "targets", null), e([y$1({ value: null, readOnly: true })], x.prototype, "extent", void 0), e([y$1({ readOnly: true })], x.prototype, "spatialReference", null), e([y$1({ readOnly: true })], x.prototype, "requiredPropertiesForEditing", null), x = e([n$1("esri.analysis.LineOfSightAnalysis")], x);
const O = x;
const f = j$1.ofType(f$1);
let g = class extends c$2(O$1(b$1)) {
  constructor(e2) {
    super(e2), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new O(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l$2(() => this.analysis, (e2, t2) => {
      r$1(t2) && t2.parent === this && (t2.parent = null), r$1(e2) && (e2.parent = this);
    }, w$1));
  }
  async load() {
    return r$1(this.analysis) && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return o(this.analysis, (e2) => e2.observer);
  }
  set observer(e2) {
    o(this.analysis, (t2) => t2.observer = e2);
  }
  get targets() {
    return r$1(this.analysis) ? this.analysis.targets : new j$1();
  }
  set targets(e2) {
    var _a;
    n$2(e2, (_a = this.analysis) == null ? void 0 : _a.targets);
  }
  get fullExtent() {
    return r$1(this.analysis) ? this.analysis.extent : null;
  }
  get spatialReference() {
    return r$1(this.analysis) ? e$1(this.analysis.spatialReference) : null;
  }
  releaseAnalysis(e2) {
    this.analysis === e2 && (this.analysis = new O());
  }
};
e([y$1({ json: { read: false }, readOnly: true })], g.prototype, "type", void 0), e([y$1({ type: ["LineOfSightLayer"] })], g.prototype, "operationalLayerType", void 0), e([y$1({ type: u, json: { read: true, write: { ignoreOrigin: true } } })], g.prototype, "observer", null), e([y$1({ type: f, json: { read: true, write: { ignoreOrigin: true } } })], g.prototype, "targets", null), e([y$1({ nonNullable: true, json: { read: false, write: false } })], g.prototype, "analysis", void 0), e([y$1({ readOnly: true })], g.prototype, "fullExtent", null), e([y$1({ readOnly: true })], g.prototype, "spatialReference", null), e([y$1({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], g.prototype, "opacity", void 0), e([y$1({ type: ["show", "hide"] })], g.prototype, "listMode", void 0), g = e([n$1("esri.layers.LineOfSightLayer")], g);
const j = g;
export { j as default };
