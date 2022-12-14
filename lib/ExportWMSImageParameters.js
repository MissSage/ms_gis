import { a7 as a, al as m, N as e, O as y, P as n } from "./index.js";
const o = { visible: "visibleSublayers" };
let l = class extends a(m) {
  constructor(e2) {
    super(e2), this.scale = 0;
  }
  set layer(e2) {
    this._get("layer") !== e2 && (this._set("layer", e2), this.handles.remove("layer"), e2 && this.handles.add([e2.sublayers.on("change", () => this.notifyChange("visibleSublayers")), e2.on("wms-sublayer-update", (e3) => this.notifyChange(o[e3.propertyName]))], "layer"));
  }
  get layers() {
    return this.visibleSublayers.filter(({ name: e2 }) => e2).map(({ name: e2 }) => e2).join();
  }
  get version() {
    this.commitProperty("layers");
    const e2 = this.layer;
    return e2 && e2.commitProperty("imageTransparency"), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const { layer: e2, scale: r } = this, s = e2 == null ? void 0 : e2.sublayers, t = [], a2 = (e3) => {
      const { minScale: s2, maxScale: o2, sublayers: l2, visible: i } = e3;
      i && (r === 0 || (s2 === 0 || r <= s2) && (o2 === 0 || r >= o2)) && (l2 ? l2.forEach(a2) : t.push(e3));
    };
    return s == null ? void 0 : s.forEach(a2), t;
  }
  toJSON() {
    const { layer: e2, layers: r } = this, { imageFormat: s, imageTransparency: t, version: a2 } = e2;
    return { format: s, request: "GetMap", service: "WMS", styles: "", transparent: t ? "TRUE" : "FALSE", version: a2, layers: r };
  }
};
e([y()], l.prototype, "layer", null), e([y({ readOnly: true })], l.prototype, "layers", null), e([y({ type: Number })], l.prototype, "scale", void 0), e([y({ readOnly: true })], l.prototype, "version", null), e([y({ readOnly: true })], l.prototype, "visibleSublayers", null), l = e([n("esri.layers.support.ExportWMSImageParameters")], l);
export { l };
