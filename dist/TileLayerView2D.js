var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { $ as e, a0 as y, a1 as n, g as s, cs as E, a as r, ct as h, cu as y$2, cv as r$1, R as l, bB as E$1, m as j, bE as e$1, s as s$2 } from "./index.js";
import { t, o, n as n$1 } from "./imageUtils3.js";
import { y as y$1, u } from "./LayerView.js";
import { i as i$1 } from "./RefreshableLayerView.js";
import { s as s$1, a } from "./drapedUtils.js";
import "vue";
import "./BitmapTileContainer.js";
import "./Bitmap.js";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./TileContainer.js";
import "./WGLContainer.js";
import "./pixelUtils.js";
import "./VertexArrayObject.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
const i = (i2) => {
  let c = class extends i2 {
    async fetchPopupFeatures(e2, s$22) {
      const { layer: a2 } = this;
      if (!e2)
        throw new s("tilelayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: a2 });
      if (a2.type !== "tile")
        throw new s("tilelayerview:fetchPopupFeatures", "Layer type should be 'tile'", { type: a2.type });
      const i3 = this.get("view.scale"), c2 = a2.allSublayers.toArray().filter((e3) => {
        const r2 = e3.minScale === 0 || i3 <= e3.minScale, t2 = e3.maxScale === 0 || i3 >= e3.maxScale;
        return e3.popupTemplate && e3.popupEnabled && e3.visible && r2 && t2;
      });
      return E(c2.map(async (r$12) => {
        const o2 = r$12.createQuery(), a3 = r(s$22) ? s$22.event : null, i4 = s$1({ renderer: r$12.renderer, event: a3 });
        o2.geometry = this.createFetchPopupFeaturesQueryGeometry(e2, i4), o2.outFields = await r$12.popupTemplate.getRequiredFields();
        return (await r$12.queryFeatures(o2)).features;
      })).then((e3) => [].concat(...e3.map((e4) => e4.value).filter(Boolean)));
    }
  };
  return e([y()], c.prototype, "layer", void 0), c = e([n("esri.layers.mixins.TileLayerView")], c), c;
};
const _ = [0, 0];
let I = class extends i(i$1(t(y$1(u)))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== false;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    const e2 = "tileServers" in this.layer ? this.layer.tileServers : null;
    this._tileInfoView = new h(this.layer.tileInfo, this.layer.fullExtent), this._fetchQueue = new y$2({ tileInfoView: this._tileInfoView, concurrency: e2 && 10 * e2.length || 10, process: (e3, t2) => this.fetchTile(e3, t2) }), this._tileStrategy = new r$1({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.requestUpdate(), this.handles.add(l(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    var _a;
    return E$1((_a = this.layer.tileInfo) == null ? void 0 : _a.spatialReference, e2);
  }
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return a(e2, t2, this.view);
  }
  async doRefresh() {
    !this.attached || this.updateRequested || this.suspended || (this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e2) => this._enqueueTileFetch(e2)));
  }
  isUpdating() {
    var _a, _b;
    return (_b = (_a = this._fetchQueue) == null ? void 0 : _a.updating) != null ? _b : false;
  }
  acquireTile(e2) {
    const t2 = this._bitmapView.createTile(e2), i2 = t2.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(_, t2.key), i2.resolution = this._tileInfoView.getTileResolution(t2.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t2), this._bitmapView.addChild(t2), this.requestUpdate(), t2;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e2, t2 = {}) {
    const s2 = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r2, resamplingLevel: a2 = 0 } = t2;
    if (!s2)
      try {
        return await this._fetchImage(e2, r2);
      } catch (h2) {
        if (!j(h2) && !this.resampling)
          return o(this._tileInfoView.tileInfo.size);
        if (a2 < 3) {
          const i2 = this._tileInfoView.getTileParentId(e2.id);
          if (i2) {
            const s3 = new e$1(i2), r3 = await this.fetchTile(s3, __spreadProps(__spreadValues({}, t2), { resamplingLevel: a2 + 1 }));
            return n$1(this._tileInfoView, r3, s3, e2);
          }
        }
        throw h2;
      }
    const l2 = new e$1(0, 0, 0, 0);
    let o$1;
    try {
      if (await s2.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l2, { signal: r2 }), l2.level !== e2.level && !this.resampling)
        return o(this._tileInfoView.tileInfo.size);
      o$1 = await this._fetchImage(l2, r2);
    } catch (h2) {
      if (j(h2))
        throw h2;
      o$1 = await this._fetchImage(e2, r2);
    }
    return this.resampling ? n$1(this._tileInfoView, o$1, l2, e2) : o$1;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t2 = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t2, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s2) {
        j(s2) || s$2.getLogger(this.declaredClass).error(s2);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t2) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t2 });
  }
};
e([y()], I.prototype, "_fetchQueue", void 0), e([y()], I.prototype, "resampling", null), I = e([n("esri.views.2d.layers.TileLayerView2D")], I);
const V = I;
export { V as default };
