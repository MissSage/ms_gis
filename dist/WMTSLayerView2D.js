var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ct as h, cu as y$2, cv as r, R as l, bE as e, m as j, bB as E, s, $ as e$1, a0 as y$3, a1 as n$1 } from "./index.js";
import { t, n } from "./imageUtils3.js";
import { y as y$1, u } from "./LayerView.js";
import { i } from "./RefreshableLayerView.js";
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
const y = [102113, 102100, 3857, 3785, 900913], _ = [0, 0];
let w = class extends i(t(y$1(u))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this._tileRequests = new Map(), this.layer = null;
  }
  get tileMatrixSet() {
    const e2 = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e2 ? (e2.id !== this.layer.activeLayer.tileMatrixSetId && (this.layer.activeLayer.tileMatrixSetId = e2.id), e2) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    if (!this.tileMatrixSet)
      return;
    const { tileInfo: e2 } = this.tileMatrixSet;
    this._tileInfoView = new h(e2), this._fetchQueue = new y$2({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t2) => this.fetchTile(e3, t2) }), this._tileStrategy = new r({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.handles.add(l(() => {
      var _a, _b;
      return [(_b = (_a = this.layer) == null ? void 0 : _a.activeLayer) == null ? void 0 : _b.styleId, this.tileMatrixSet];
    }, () => this._refresh()), this.declaredClass), super.attach();
  }
  detach() {
    var _a, _b;
    super.detach(), this.handles.remove(this.declaredClass), (_a = this._tileStrategy) == null ? void 0 : _a.destroy(), (_b = this._fetchQueue) == null ? void 0 : _b.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  acquireTile(e2) {
    const t2 = this._bitmapView.createTile(e2), i2 = t2.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(_, t2.key), i2.resolution = this._tileInfoView.getTileResolution(t2.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t2), this._bitmapView.addChild(t2), this.requestUpdate(), t2;
  }
  async doRefresh() {
    !this.attached || this.updateRequested || this.suspended || this._refresh();
  }
  isUpdating() {
    var _a, _b;
    return (_b = (_a = this._fetchQueue) == null ? void 0 : _a.updating) != null ? _b : false;
  }
  async fetchTile(e$12, t2 = {}) {
    const s2 = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r2, resamplingLevel: a = 0 } = t2;
    if (!s2)
      return this._fetchImage(e$12, r2);
    const l2 = new e(0, 0, 0, 0);
    let o;
    try {
      await s2.fetchAvailabilityUpsample(e$12.level, e$12.row, e$12.col, l2, { signal: r2 }), o = await this._fetchImage(l2, r2);
    } catch (h2) {
      if (j(h2))
        throw h2;
      if (a < 3) {
        const i2 = this._tileInfoView.getTileParentId(e$12.id);
        if (i2) {
          const s3 = new e(i2), r3 = await this.fetchTile(s3, __spreadProps(__spreadValues({}, t2), { resamplingLevel: a + 1 }));
          return n(this._tileInfoView, r3, s3, e$12);
        }
      }
      throw h2;
    }
    return n(this._tileInfoView, o, l2, e$12);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? this.tileMatrixSet !== null : e2;
  }
  supportsSpatialReference(e2) {
    return this.layer.activeLayer.tileMatrixSets.some((t2) => E(t2.tileInfo.spatialReference, e2));
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t2 = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t2, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s$1) {
        j(s$1) || s.getLogger(this.declaredClass).error(s$1);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t2) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t2 });
  }
  _refresh() {
    this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e2) => {
      if (!e2.bitmap.source)
        return;
      const t2 = { id: e2.key.id, fulfilled: false, promise: this._fetchQueue.push(e2.key).then((t3) => {
        e2.bitmap.source = t3;
      }).catch((t3) => {
        j(t3) || (e2.bitmap.source = null);
      }).finally(() => {
        e2.requestRender(), t2.fulfilled = true;
      }) };
      this._tileRequests.set(e2, t2);
    });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    const t2 = this.view.spatialReference;
    if (!e2.tileMatrixSets)
      return null;
    let i2 = e2.tileMatrixSets.find((e3) => E(e3.tileInfo.spatialReference, t2));
    return !i2 && t2.isWebMercator && (i2 = e2.tileMatrixSets.find((e3) => y.includes(e3.tileInfo.spatialReference.wkid))), i2;
  }
};
e$1([y$3()], w.prototype, "_fetchQueue", void 0), e$1([y$3({ readOnly: true })], w.prototype, "tileMatrixSet", null), w = e$1([n$1("esri.views.2d.layers.WMTSLayerView2D")], w);
const g = w;
export { g as default };
