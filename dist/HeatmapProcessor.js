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
import { $ as e, a1 as n, bW as m, a as r, b3 as o, kq as s } from "./index.js";
import { Q as o$1 } from "./enums2.js";
import { p as p$1 } from "./BaseProcessor.js";
import { l as l$1 } from "./tileUtils.js";
import "vue";
class p {
  constructor(e2, t) {
    this.offset = e2, this.extent = t;
  }
}
function c(e2) {
  const t = e2.key, s2 = new Map(), r2 = 256, i = o$1, o2 = e2.tileInfoView.tileInfo.isWrappable;
  return s2.set(l$1(t, -1, -1, o2).id, new p([-i, -i], [i - r2, i - r2, i, i])), s2.set(l$1(t, 0, -1, o2).id, new p([0, -i], [0, i - r2, i, i])), s2.set(l$1(t, 1, -1, o2).id, new p([i, -i], [0, i - r2, r2, i])), s2.set(l$1(t, -1, 0, o2).id, new p([-i, 0], [i - r2, 0, i, i])), s2.set(l$1(t, 1, 0, o2).id, new p([i, 0], [0, 0, r2, i])), s2.set(l$1(t, -1, 1, o2).id, new p([-i, i], [i - r2, 0, i, r2])), s2.set(l$1(t, 0, 1, o2).id, new p([0, i], [0, 0, i, r2])), s2.set(l$1(t, 1, 1, o2).id, new p([i, i], [0, 0, r2, r2])), s2;
}
let l = class extends p$1 {
  constructor() {
    super(...arguments), this.type = "heatmap", this._tileKeyToFeatureSets = new Map();
  }
  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]);
  }
  async update(e2, t) {
    const s2 = t.schema.processors[0];
    if (s2.type !== "heatmap")
      return;
    m(this._schema, s2) && (e2.mesh = true, this._schema = s2);
  }
  onTileUpdate(e2) {
    for (const t of e2.removed)
      this._tileKeyToFeatureSets.delete(t.key.id);
  }
  onTileClear(e2) {
    const t = { clear: true };
    return this._tileKeyToFeatureSets.delete(e2.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t });
  }
  async onTileMessage(e2, r$1, i) {
    this._tileKeyToFeatureSets.has(e2.key.id) || this._tileKeyToFeatureSets.set(e2.key.id, new Map());
    const a = this._tileKeyToFeatureSets.get(e2.key.id);
    if (r(r$1.addOrUpdate) && r$1.addOrUpdate.hasFeatures && a.set(r$1.addOrUpdate.instance, r$1), r$1.end) {
      const t = [], r2 = c(e2);
      this._tileKeyToFeatureSets.forEach((i2, o$12) => {
        if (o$12 === e2.key.id)
          i2.forEach((e3) => o(e3.addOrUpdate, (e4) => t.push(e4)));
        else if (r2.has(o$12)) {
          const e3 = r2.get(o$12), [a3, n3] = e3.offset;
          i2.forEach((e4) => o(e4.addOrUpdate, (e5) => {
            const s2 = e5.transform(a3, n3, 1, 1);
            t.push(s2);
          }));
        }
      });
      const a2 = s(t, this._schema.mesh, 512, 512), n2 = { tileKey: e2.key.id, intensityInfo: a2 }, d = [a2.matrix];
      return this.remoteClient.invoke("tileRenderer.onTileData", n2, __spreadProps(__spreadValues({}, i), { transferList: d }));
    }
  }
  onTileError(e2, t, s2) {
    return this.remoteClient.invoke("tileRenderer.onTileError", { tileKey: e2.id, error: t }, s2);
  }
};
l = e([n("esri.views.2d.layers.features.processors.HeatmapProcessor")], l);
const h = l;
export { h as default };
