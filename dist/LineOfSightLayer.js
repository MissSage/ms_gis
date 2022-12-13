import { t as t$1, it as u$3, dU as i$1, Z as m$1, jo as y, $ as e, a0 as y$1, a7 as w, fU as x$1, a1 as n$1, iu as l$1, a as r$2, cx as j$1, d7 as t$2, R as l$2, cz as w$1, cy as n$2, b3 as o, k as e$1, jp as u$4, dN as un, jq as c$1, jr as m$2, h2 as c$2, h4 as O$1, e0 as b$1 } from "./index.js";
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
const r$1 = { json: { write: { writer: n, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: u$2 } } } };
function n(t2, l2) {
  var _a;
  t$1(t2) || ((_a = t2.layer) == null ? void 0 : _a.objectIdField) == null || t2.attributes == null || (l2.feature = { layerId: t2.layer.id, objectId: t2.attributes[t2.layer.objectIdField] });
}
function u$2(e2) {
  if (e2.layerId != null && e2.objectId != null)
    return { uid: null, layer: { id: e2.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e2.objectId } };
}
let f$2 = class extends u$3(i$1(m$1)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return y(this.position, o2.position) && y(this.elevationInfo, o2.elevationInfo) && t(this.feature, o2.feature);
  }
};
e([y$1({ type: w }), g$1()], f$2.prototype, "position", void 0), e([y$1({ type: x$1 }), g$1()], f$2.prototype, "elevationInfo", void 0), e([y$1(r$1)], f$2.prototype, "feature", void 0), f$2 = e([n$1("esri.analysis.LineOfSightAnalysisObserver")], f$2);
const u$1 = f$2;
let m = class extends u$3(l$1) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return y(this.position, o2.position) && y(this.elevationInfo, o2.elevationInfo) && t(this.feature, o2.feature);
  }
};
e([y$1({ type: w }), g$1()], m.prototype, "position", void 0), e([y$1({ type: x$1 }), g$1()], m.prototype, "elevationInfo", void 0), e([y$1(r$1)], m.prototype, "feature", void 0), m = e([n$1("esri.analysis.LineOfSightAnalysisTarget")], m);
const f$1 = m;
function r(e2) {
  return e2 ? E : Z;
}
function u(t2, n2) {
  return t$1(n2) || !n2.mode ? r(t2).mode : n2.mode;
}
function i(e2, n2) {
  return u(!!r$2(e2) && e2.hasZ, n2);
}
const E = { mode: "absolute-height", offset: 0 }, Z = { mode: "on-the-ground", offset: null };
const b = j$1.ofType(f$1);
let x = class extends c {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(l$2(() => this._computeExtent(), (t2) => {
      (t$1(t2) || t$1(t2.pending)) && this._set("extent", r$2(t2) ? t2.extent : null);
    }, w$1));
  }
  get targets() {
    return this._get("targets") || new b();
  }
  set targets(t2) {
    this._set("targets", n$2(t2, this.targets, b));
  }
  get spatialReference() {
    return r$2(this.observer) && r$2(this.observer.position) ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [o(this.observer, (t2) => t2.position)];
  }
  async waitComputeExtent() {
    const t2 = this._computeExtent();
    return r$2(t2) ? e$1(t2.pending) : null;
  }
  _computeExtent() {
    const t2 = this.spatialReference;
    if (t$1(this.observer) || t$1(this.observer.position) || t$1(t2))
      return null;
    const e2 = (t3) => i(t3.position, t3.elevationInfo) === "absolute-height", r2 = this.observer.position, o2 = u$4(r2.x, r2.y, r2.z, r2.x, r2.y, r2.z);
    for (const i2 of this.targets)
      if (r$2(i2.position)) {
        const e3 = un(i2.position, t2);
        if (r$2(e3.pending))
          return { pending: e3.pending, extent: null };
        if (r$2(e3.geometry)) {
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
e([y$1({ type: ["line-of-sight"] })], x.prototype, "type", void 0), e([y$1({ type: u$1, json: { read: true, write: true } })], x.prototype, "observer", void 0), e([y$1({ cast: t$2, type: b, nonNullable: true, json: { read: true, write: true } })], x.prototype, "targets", null), e([y$1({ value: null, readOnly: true })], x.prototype, "extent", void 0), e([y$1({ readOnly: true })], x.prototype, "spatialReference", null), e([y$1({ readOnly: true })], x.prototype, "requiredPropertiesForEditing", null), x = e([n$1("esri.analysis.LineOfSightAnalysis")], x);
const O = x;
const f = j$1.ofType(f$1);
let g = class extends c$2(O$1(b$1)) {
  constructor(e2) {
    super(e2), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new O(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l$2(() => this.analysis, (e2, t2) => {
      r$2(t2) && t2.parent === this && (t2.parent = null), r$2(e2) && (e2.parent = this);
    }, w$1));
  }
  async load() {
    return r$2(this.analysis) && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return o(this.analysis, (e2) => e2.observer);
  }
  set observer(e2) {
    o(this.analysis, (t2) => t2.observer = e2);
  }
  get targets() {
    return r$2(this.analysis) ? this.analysis.targets : new j$1();
  }
  set targets(e2) {
    var _a;
    n$2(e2, (_a = this.analysis) == null ? void 0 : _a.targets);
  }
  get fullExtent() {
    return r$2(this.analysis) ? this.analysis.extent : null;
  }
  get spatialReference() {
    return r$2(this.analysis) ? e$1(this.analysis.spatialReference) : null;
  }
  releaseAnalysis(e2) {
    this.analysis === e2 && (this.analysis = new O());
  }
};
e([y$1({ json: { read: false }, readOnly: true })], g.prototype, "type", void 0), e([y$1({ type: ["LineOfSightLayer"] })], g.prototype, "operationalLayerType", void 0), e([y$1({ type: u$1, json: { read: true, write: { ignoreOrigin: true } } })], g.prototype, "observer", null), e([y$1({ type: f, json: { read: true, write: { ignoreOrigin: true } } })], g.prototype, "targets", null), e([y$1({ nonNullable: true, json: { read: false, write: false } })], g.prototype, "analysis", void 0), e([y$1({ readOnly: true })], g.prototype, "fullExtent", null), e([y$1({ readOnly: true })], g.prototype, "spatialReference", null), e([y$1({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], g.prototype, "opacity", void 0), e([y$1({ type: ["show", "hide"] })], g.prototype, "listMode", void 0), g = e([n$1("esri.layers.LineOfSightLayer")], g);
const j = g;
export { j as default };
