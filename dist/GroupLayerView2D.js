import { $ as e, a0 as y, d7 as t, a1 as n$1, cx as j, R as l, d8 as U, cy as n$2, t as t$1 } from "./index.js";
import { r } from "./GroupContainer.js";
import { u, y as y$1 } from "./LayerView.js";
import "vue";
import "./WGLContainer.js";
import "./enums.js";
import "./pixelUtils.js";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./VertexArrayObject.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
let p = class extends u {
  constructor(i2) {
    super(i2), this.type = "group", this.layerViews = new j();
  }
  _allLayerViewVisibility(i2) {
    this.layerViews.forEach((e2) => {
      e2.visible = i2;
    });
  }
  initialize() {
    this.handles.add([this.layerViews.on("change", (i2) => this._layerViewsChangeHandler(i2)), l(() => this.layer.visibilityMode, () => this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null)), U), l(() => this.visible, (i2) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i2), () => {
      });
    }, U)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  set layerViews(i2) {
    this._set("layerViews", n$2(i2, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0 ? 1 : this.layerViews.reduce((i2, e2) => i2 + e2.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.layerViews.some((i2) => i2.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i2) => i2._isOverridden("visible"));
  }
  _findLayerViewForLayer(i2) {
    return i2 && this.layerViews.find((e2) => e2.layer === i2);
  }
  _firstVisibleOnLayerOrder() {
    const i2 = this.layer.layers.find((i3) => {
      var _a;
      return (_a = this._findLayerViewForLayer(i3)) == null ? void 0 : _a.visible;
    });
    return i2 && this._findLayerViewForLayer(i2);
  }
  _applyExclusiveVisibility(i2) {
    t$1(i2) && (i2 = this._firstVisibleOnLayerOrder(), t$1(i2) && this.layerViews.length > 0 && (i2 = this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))), this.layerViews.forEach((e2) => {
      e2.visible = e2 === i2;
    });
  }
  _layerViewsChangeHandler(i2) {
    this.handles.remove("grouplayerview:visible"), this.handles.add(this.layerViews.map((i3) => l(() => i3.visible, (e3) => this._applyVisibility(() => {
      e3 !== this.visible && (i3.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e3 ? i3 : null)), U)).toArray(), "grouplayerview:visible");
    const e2 = i2.added[i2.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility((e2 == null ? void 0 : e2.visible) ? e2 : null));
  }
  _applyVisibility(i2, e2) {
    var _a, _b;
    this._hasLayerViewVisibleOverrides() && (((_a = this.layer) == null ? void 0 : _a.visibilityMode) === "inherited" ? i2() : ((_b = this.layer) == null ? void 0 : _b.visibilityMode) === "exclusive" && e2());
  }
};
e([y({ cast: t })], p.prototype, "layerViews", null), e([y({ readOnly: true })], p.prototype, "updatingProgress", null), e([y()], p.prototype, "view", void 0), p = e([n$1("esri.views.layers.GroupLayerView")], p);
const n = p;
let a = class extends y$1(n) {
  constructor() {
    super(...arguments), this.container = new r();
  }
  attach() {
    this._updateStageChildren(), this.handles.add(this.layerViews.on("after-changes", () => this._updateStageChildren()), "grouplayerview2d");
  }
  detach() {
    this.handles.remove("grouplayerview2d"), this.container.removeAllChildren();
  }
  update(e2) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r2) => this.container.addChildAt(e2.container, r2));
  }
};
a = e([n$1("esri.views.2d.layers.GroupLayerView2D")], a);
const i = a;
export { i as default };
