import { $ as e$1, a1 as n$1 } from "./index.js";
import { n as n$2 } from "./BitmapTileContainer.js";
const t$1 = (t2) => {
  let s = class extends t2 {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new n$2(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      var _a;
      this.container.removeChild(this._bitmapView), (_a = this._bitmapView) == null ? void 0 : _a.removeAllChildren();
    }
  };
  return s = e$1([n$1("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
};
function e(e2) {
  return e2 instanceof HTMLImageElement ? e2.naturalWidth : e2.width;
}
function t(e2) {
  return e2 instanceof HTMLImageElement ? e2.naturalHeight : e2.height;
}
function n(n2, l, r, u) {
  if (r.level === u.level)
    return l;
  const i = n2.tileInfo.size, a = n2.getTileResolution(r.level), c = n2.getTileResolution(u.level);
  let g = n2.getLODInfoAt(u.level);
  const h = g.getXForColumn(u.col), d = g.getYForRow(u.row);
  g = n2.getLODInfoAt(r.level);
  const f = g.getXForColumn(r.col), s = g.getYForRow(r.row), m = e(l) / i[0], v = t(l) / i[1], w = Math.round(m * ((h - f) / a)), I = Math.round(v * (-(d - s) / a)), M = Math.round(m * i[0] * (c / a)), F = Math.round(v * i[1] * (c / a)), L = o(i);
  return L.getContext("2d").drawImage(l, w, I, M, F, 0, 0, i[0], i[1]), L;
}
function o(e2) {
  const t2 = document.createElement("canvas");
  return [t2.width, t2.height] = e2, t2;
}
export { n, o, t$1 as t };
