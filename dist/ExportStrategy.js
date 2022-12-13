import { ap as u, bE as e, $ as e$1, a0 as y$1, a1 as n$1, Z as m, cY as x$1, l as f, ao as R, aL as w$1, cs as E, d2 as f$1, d3 as j, ct as h } from "./index.js";
import { R as R$1 } from "./Bitmap.js";
const t = Math.PI / 180;
function n(n2) {
  return n2 * t;
}
function o(t2, o2) {
  const a2 = n(o2.rotation), r = Math.abs(Math.cos(a2)), s = Math.abs(Math.sin(a2)), [u2, c] = o2.size;
  return t2[0] = Math.round(c * s + u2 * r), t2[1] = Math.round(c * r + u2 * s), t2;
}
function a(t2, n2, o2, a2) {
  const [r, s] = n2, [u2, c] = a2, h2 = 0.5 * o2;
  return t2[0] = r - h2 * u2, t2[1] = s - h2 * c, t2[2] = r + h2 * u2, t2[3] = s + h2 * c, t2;
}
const y = u(), x = [0, 0], S = new e(0, 0, 0, 0), _ = { container: null, fetchSource: null, requestUpdate: null, imageMaxWidth: 2048, imageMaxHeight: 2048, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false };
let w = class extends m {
  constructor(t2) {
    super(t2), this._imagePromise = null, this.bitmaps = [], this.hidpi = _.hidpi, this.imageMaxWidth = _.imageMaxWidth, this.imageMaxHeight = _.imageMaxHeight, this.imageRotationSupported = _.imageRotationSupported, this.imageNormalizationSupported = _.imageNormalizationSupported, this.update = x$1(async (t3, e2) => {
      if (f(e2), !t3.stationary || this.destroyed)
        return;
      const i = t3.state, s = R(i.spatialReference), a2 = this.hidpi ? t3.pixelRatio : 1, n2 = this.imageNormalizationSupported && i.worldScreenWidth && i.worldScreenWidth < i.size[0];
      n2 ? (x[0] = i.worldScreenWidth, x[1] = i.size[1]) : this.imageRotationSupported ? (x[0] = i.size[0], x[1] = i.size[1]) : o(x, i);
      const p = Math.floor(x[0] * a2) > this.imageMaxWidth || Math.floor(x[1] * a2) > this.imageMaxHeight, m2 = s && (i.extent.xmin < s.valid[0] || i.extent.xmax > s.valid[1]), h2 = !this.imageNormalizationSupported && m2, c = !p && !h2, u2 = this.imageRotationSupported ? i.rotation : 0, g = this.container.children.slice();
      if (c) {
        const t4 = n2 ? i.paddedViewState.center : i.center;
        this._imagePromise && console.error("Image promise was not defined!"), this._imagePromise = this._singleExport(i, x, t4, i.resolution, u2, a2, e2);
      } else {
        let t4 = Math.min(this.imageMaxWidth, this.imageMaxHeight);
        h2 && (t4 = Math.min(i.worldScreenWidth, t4)), this._imagePromise = this._tiledExport(i, t4, a2, e2);
      }
      try {
        const t4 = await this._imagePromise;
        f(e2);
        const i2 = [];
        if (this._imagePromise = null, this.destroyed)
          return;
        this.bitmaps = t4 != null ? t4 : [];
        for (const e3 of g)
          t4.includes(e3) || i2.push(e3.fadeOut().then(() => {
            e3.remove(), e3.destroy();
          }));
        for (const e3 of t4)
          i2.push(e3.fadeIn());
        await Promise.all(i2);
      } catch (f2) {
        this._imagePromise = null, w$1(f2);
      }
    }, 5e3), this.updateExports = x$1(async (t3) => {
      const e2 = [];
      for (const i of this.container.children) {
        if (!i.visible || !i.stage)
          return;
        e2.push(t3(i).then(() => {
          i.invalidateTexture(), i.requestRender();
        }));
      }
      this._imagePromise = E(e2).then(() => this._imagePromise = null), await this._imagePromise;
    });
  }
  destroy() {
    this.bitmaps.forEach((t2) => t2.destroy()), this.bitmaps = [];
  }
  get updating() {
    return !this.destroyed && this._imagePromise !== null;
  }
  async _export(t2, e2, i, r, s, a2) {
    const n2 = await this.fetchSource(t2, Math.floor(e2 * s), Math.floor(i * s), { rotation: r, pixelRatio: s, signal: a2 });
    f(a2);
    const p = new R$1(null, { immutable: true, requestRenderOnSourceChangedEnabled: true });
    return p.x = t2.xmin, p.y = t2.ymax, p.resolution = t2.width / e2, p.rotation = r, p.pixelRatio = s, p.opacity = 0, this.container.addChild(p), await p.setSourceAsync(n2, a2), f(a2), p;
  }
  async _singleExport(t2, e2, i, o2, r, s, a$1) {
    a(y, i, o2, e2);
    const n2 = f$1(y, t2.spatialReference);
    return [await this._export(n2, e2[0], e2[1], r, s, a$1)];
  }
  _tiledExport(t2, e2, i, o2) {
    const r = j.create({ size: e2, spatialReference: t2.spatialReference, scales: [t2.scale] }), s = new h(r), a2 = s.getTileCoverage(t2);
    if (!a2)
      return null;
    const n2 = [];
    return a2.forEach((r2, a3, p, l) => {
      S.set(r2, a3, p, 0), s.getTileBounds(y, S);
      const h2 = f$1(y, t2.spatialReference);
      n2.push(this._export(h2, e2, e2, 0, i, o2).then((t3) => (l !== 0 && (S.set(r2, a3, p, l), s.getTileBounds(y, S), t3.x = y[0], t3.y = y[3]), t3)));
    }), Promise.all(n2);
  }
};
e$1([y$1()], w.prototype, "_imagePromise", void 0), e$1([y$1()], w.prototype, "bitmaps", void 0), e$1([y$1()], w.prototype, "container", void 0), e$1([y$1()], w.prototype, "fetchSource", void 0), e$1([y$1()], w.prototype, "hidpi", void 0), e$1([y$1()], w.prototype, "imageMaxWidth", void 0), e$1([y$1()], w.prototype, "imageMaxHeight", void 0), e$1([y$1()], w.prototype, "imageRotationSupported", void 0), e$1([y$1()], w.prototype, "imageNormalizationSupported", void 0), e$1([y$1()], w.prototype, "requestUpdate", void 0), e$1([y$1()], w.prototype, "updating", null), w = e$1([n$1("esri.views.2d.layers.support.ExportStrategy")], w);
const v = w;
export { v };
