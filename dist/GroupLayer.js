import { i2 as n, i3 as t, h2 as c, h3 as v, iy as l, iz as d, h4 as O, dS as l$1, iA as t$1, R as l$2, iB as y, a as r, ig as n$1, iC as e, $ as e$1, a0 as y$1, dD as r$1, a1 as n$2, e0 as b, d8 as U } from "./index.js";
import { a } from "./lazyLayerLoader.js";
import "vue";
let _ = class extends n(t(c(v(l(d(O(b))))))) {
  constructor(i) {
    super(i), this._visibilityHandles = {}, this.allLayers = new l$1({ getCollections: () => [this.layers], getChildrenFunction: (i2) => "layers" in i2 ? i2.layers : null }), this.allTables = t$1(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group";
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles(l$2(() => this.visible, this._onVisibilityChange.bind(this), U));
  }
  _writeLayers(i, e2, t2, r$12) {
    const o = [];
    if (!i)
      return o;
    i.forEach((i2) => {
      const e3 = y(i2, r$12.webmap ? r$12.webmap.getLayerJSONFromResourceInfo(i2) : null, r$12);
      r(e3) && e3.layerType && o.push(e3);
    }), e2.layers = o;
  }
  set portalItem(i) {
    this._set("portalItem", i);
  }
  set visibilityMode(i) {
    const e2 = this._get("visibilityMode") !== i;
    this._set("visibilityMode", i), e2 && this._enforceVisibility(i, this.visible);
  }
  load(i) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Scene Service"], layerModuleTypeMap: a }, i)), Promise.resolve(this);
  }
  loadAll() {
    return n$1(this, (i) => {
      i(this.layers, this.tables);
    });
  }
  layerAdded(i) {
    i.visible && this.visibilityMode === "exclusive" ? this._turnOffOtherLayers(i) : this.visibilityMode === "inherited" && (i.visible = this.visible), this._visibilityHandles[i.uid] = l$2(() => i.visible, (e2) => this._onChildVisibilityChange(i, e2), U);
  }
  layerRemoved(i) {
    const e2 = this._visibilityHandles[i.uid];
    e2 && (e2.remove(), delete this._visibilityHandles[i.uid]), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(i) {
    this.layers.forEach((e2) => {
      e2 !== i && (e2.visible = false);
    });
  }
  _enforceVisibility(i, e$12) {
    if (!e(this).initialized)
      return;
    const t2 = this.layers;
    let s = t2.find((i2) => i2.visible);
    switch (i) {
      case "exclusive":
        t2.length && !s && (s = t2.getItemAt(0), s.visible = true), this._turnOffOtherLayers(s);
        break;
      case "inherited":
        t2.forEach((i2) => {
          i2.visible = e$12;
        });
    }
  }
  _onVisibilityChange(i) {
    this.visibilityMode === "inherited" && this.layers.forEach((e2) => {
      e2.visible = i;
    });
  }
  _onChildVisibilityChange(i, e2) {
    switch (this.visibilityMode) {
      case "exclusive":
        e2 ? this._turnOffOtherLayers(i) : this._isAnyLayerVisible() || (i.visible = true);
        break;
      case "inherited":
        i.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((i) => i.visible);
  }
};
e$1([y$1({ readOnly: true, dependsOn: [] })], _.prototype, "allLayers", void 0), e$1([y$1({ readOnly: true })], _.prototype, "allTables", void 0), e$1([y$1()], _.prototype, "fullExtent", void 0), e$1([y$1({ json: { read: true, write: true } })], _.prototype, "blendMode", void 0), e$1([y$1({ json: { read: false, write: { ignoreOrigin: true } } })], _.prototype, "layers", void 0), e$1([r$1("layers")], _.prototype, "_writeLayers", null), e$1([y$1({ type: ["GroupLayer"] })], _.prototype, "operationalLayerType", void 0), e$1([y$1({ json: { origins: { "web-document": { read: false, write: false } } } })], _.prototype, "portalItem", null), e$1([y$1()], _.prototype, "spatialReference", void 0), e$1([y$1({ json: { read: false }, readOnly: true, value: "group" })], _.prototype, "type", void 0), e$1([y$1({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { read: false, write: false } } } })], _.prototype, "visibilityMode", null), _ = e$1([n$2("esri.layers.GroupLayer")], _);
const g = _;
export { g as default };
