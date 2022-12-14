import { pO as u$1, pP as l$1, bj as l$2, N as e, O as y, oO as T, kL as o, gX as e$1, P as n, I as w, dL as s, dN as s$1, dO as a$1, k as j$1, mU as t$1, ad as l$3, ai as w$1, a2 as t$2, C as r$1, mu as n$1, A as e$2, pQ as on, fO as w$2, mf as c$2, mh as O, m as b, ia as r$2 } from "./index.js";
import { c as c$1 } from "./Analysis.js";
import "vue";
let c = class extends u$1(l$1) {
  constructor(e2) {
    super(e2), this.type = "simple", this.color = new l$2("black"), this.lineSize = 2, this.fontSize = 10, this.textColor = new l$2("black"), this.textBackgroundColor = new l$2([255, 255, 255, 0.6]);
  }
};
e([y({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], c.prototype, "type", void 0), e([y({ type: l$2, nonNullable: true, json: { type: [T], write: { isRequired: true } } })], c.prototype, "color", void 0), e([y({ type: Number, cast: o, nonNullable: true, range: { min: e$1(1) }, json: { write: { isRequired: true } } })], c.prototype, "lineSize", void 0), e([y({ type: Number, cast: o, nonNullable: true, json: { write: { isRequired: true } } })], c.prototype, "fontSize", void 0), e([y({ type: l$2, nonNullable: true, json: { type: [T], write: { isRequired: true } } })], c.prototype, "textColor", void 0), e([y({ type: l$2, nonNullable: true, json: { type: [T], write: { isRequired: true } } })], c.prototype, "textBackgroundColor", void 0), c = e([n("esri.analysis.DimensionSimpleStyle")], c);
const a = c;
var t;
!function(t2) {
  t2.Horizontal = "horizontal", t2.Vertical = "vertical", t2.Direct = "direct";
}(t || (t = {}));
const r = [t.Horizontal, t.Vertical, t.Direct];
let l = class extends u$1(l$1) {
  constructor(o2) {
    super(o2), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = t.Direct, this.offset = 0, this.orientation = 0;
  }
};
e([y({ type: ["length"], json: { write: { isRequired: true } } })], l.prototype, "type", void 0), e([y({ type: w, json: { write: true } })], l.prototype, "startPoint", void 0), e([y({ type: w, json: { write: true } })], l.prototype, "endPoint", void 0), e([y({ type: r, nonNullable: true, json: { write: { isRequired: true } } })], l.prototype, "measureType", void 0), e([y({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], l.prototype, "offset", void 0), e([y({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o2) => s$1.normalize(a$1(o2), 0, true))], l.prototype, "orientation", void 0), l = e([n("esri.analysis.LengthDimension")], l);
const u = l;
const h$1 = j$1.ofType(u);
let g = class extends c$1 {
  constructor(e2) {
    super(e2), this.type = "dimension", this.style = new a(), this.extent = null;
  }
  initialize() {
    this.addHandles(l$3(() => this._computeExtent(), (e2) => {
      (t$2(e2) || t$2(e2.pending)) && this._set("extent", r$1(e2) ? e2.extent : null);
    }, w$1));
  }
  get dimensions() {
    return this._get("dimensions") || new h$1();
  }
  set dimensions(e2) {
    this._set("dimensions", n$1(e2, this.dimensions, h$1));
  }
  get spatialReference() {
    for (const e2 of this.dimensions) {
      if (r$1(e2.startPoint))
        return e2.startPoint.spatialReference;
      if (r$1(e2.endPoint))
        return e2.endPoint.spatialReference;
    }
    return null;
  }
  get requiredPropertiesForEditing() {
    return this.dimensions.reduce((e2, t2) => (e2.push(t2.startPoint, t2.endPoint), e2), []);
  }
  async waitComputeExtent() {
    const e2 = this._computeExtent();
    return r$1(e2) ? e$2(e2.pending) : null;
  }
  _computeExtent() {
    const e2 = this.spatialReference;
    if (t$2(e2))
      return { pending: null, extent: null };
    const t2 = [];
    for (const s2 of this.dimensions)
      r$1(s2.startPoint) && t2.push(s2.startPoint), r$1(s2.endPoint) && t2.push(s2.endPoint);
    const n2 = on(t2, e2);
    if (r$1(n2.pending))
      return { pending: n2.pending, extent: null };
    let o2 = null;
    return r$1(n2.geometries) && (o2 = n2.geometries.reduce((e3, t3) => t$2(e3) ? r$1(t3) ? w$2.fromPoint(t3) : null : r$1(t3) ? e3.union(w$2.fromPoint(t3)) : e3, null)), { pending: null, extent: o2 };
  }
  clear() {
    this.dimensions.removeAll();
  }
};
e([y({ type: ["dimension"] })], g.prototype, "type", void 0), e([y({ cast: t$1, type: h$1, nonNullable: true })], g.prototype, "dimensions", null), e([y({ readOnly: true })], g.prototype, "spatialReference", null), e([y({ types: { key: "type", base: null, typeMap: { simple: a } }, nonNullable: true })], g.prototype, "style", void 0), e([y({ value: null, readOnly: true })], g.prototype, "extent", void 0), e([y({ readOnly: true })], g.prototype, "requiredPropertiesForEditing", null), g = e([n("esri.analysis.DimensionAnalysis")], g);
const j = g;
let h = class extends c$2(O(b)) {
  constructor(e2) {
    if (super(e2), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new j(), this.opacity = 1, e2) {
      const { source: s2, style: r2 } = e2;
      s2 && r2 && (s2.style = r2);
    }
  }
  initialize() {
    this.addHandles([l$3(() => this.source, (e2, s2) => {
      r$1(s2) && s2.parent === this && (s2.parent = null), r$1(e2) && (e2.parent = this);
    }, w$1)]);
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return e$2(this.source.spatialReference);
  }
  get style() {
    return this.source.style;
  }
  set style(e2) {
    this.source.style = e2;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e2) {
    this.source === e2 && (this.source = new j());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e2) {
    this.source = e2;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e2) {
    this.source.dimensions = e2;
  }
  writeDimensions(e2, s2, r2, t2) {
    s2.dimensions = e2.filter(({ startPoint: e3, endPoint: s3 }) => r$1(e3) && r$1(s3)).map((e3) => e3.toJSON(t2)).toJSON();
  }
};
e([y({ json: { read: false }, readOnly: true })], h.prototype, "type", void 0), e([y({ type: ["ArcGISDimensionLayer"] })], h.prototype, "operationalLayerType", void 0), e([y({ nonNullable: true })], h.prototype, "source", void 0), e([y({ readOnly: true })], h.prototype, "spatialReference", null), e([y({ types: { key: "type", base: null, typeMap: { simple: a } }, json: { write: { ignoreOrigin: true } } })], h.prototype, "style", null), e([y({ readOnly: true })], h.prototype, "fullExtent", null), e([y({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], h.prototype, "opacity", void 0), e([y({ type: ["show", "hide"] })], h.prototype, "listMode", void 0), e([y({ type: j$1.ofType(u), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], h.prototype, "dimensions", null), e([r$2("web-scene", "dimensions")], h.prototype, "writeDimensions", null), h = e([n("esri.layers.DimensionLayer")], h);
const f = h;
export { f as default };
