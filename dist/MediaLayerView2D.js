import { $ as e$1, a0 as y, a1 as n, Z as m, t, dM as c, k as e$2, dN as un, aq as v, a as r, ce as s, aV as i$1, dO as c$1, G as o, dP as S, dQ as o$1, E as n$1, af as n$2, R as l, S as h, a8 as f$1, Q as r$2, s as s$1, g as s$2, j as c$2, z as r$3, a3 as c$3, F as e$4, aC as U, aU as r$4, M as M$1, aW as t$1, I as f$2, J as h$1, ao as R$1, dm as mt, cx as j$2, cA as a$3, cu as y$2, cv as r$6, dR as s$3, m as j$3, cr as w$1, dJ as r$7, ap as u$1 } from "./index.js";
import { a as a$1 } from "./normalizeUtilsSync.js";
import { e as e$3 } from "./mat3f64.js";
import { r as r$1 } from "./utils.js";
import { E as E$1, a as a$2 } from "./VertexArrayObject.js";
import { P, G, L, D, F } from "./enums.js";
import { n as n$3, E } from "./Texture.js";
import { r as r$5 } from "./vec3f32.js";
import { o as o$2, c as n$4 } from "./WGLContainer.js";
import { I } from "./Utils2.js";
import { y as y$1, u } from "./LayerView.js";
import "vue";
import "./MaterialKey.js";
import "./enums2.js";
import "./pixelUtils.js";
import "./VertexElementDescriptor.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./GeometryUtils2.js";
import "./earcut.js";
let a = class extends m {
  constructor(o2) {
    super(o2);
  }
  get bounds() {
    const o2 = this.coords;
    return t(o2) || t(o2.extent) ? null : c(o2.extent);
  }
  get coords() {
    var _a;
    const o2 = (_a = e$2(this.element.georeference)) == null ? void 0 : _a.coords;
    return un(o2, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return v.fromJSON(a$1(this.coords));
  }
  get normalizedBounds() {
    const o2 = r(this.normalizedCoords) ? this.normalizedCoords.extent : null;
    return r(o2) ? c(o2) : null;
  }
};
e$1([y()], a.prototype, "spatialReference", void 0), e$1([y()], a.prototype, "element", void 0), e$1([y()], a.prototype, "bounds", null), e$1([y()], a.prototype, "coords", null), e$1([y()], a.prototype, "normalizedCoords", null), e$1([y()], a.prototype, "normalizedBounds", null), a = e$1([n("esri.layers.support.media.MediaElementView")], a);
const f = n$1(), i = e$3(), e = e$3(), p = e$3();
function j$1(s2, n2, o2) {
  return k(e, n2[0], n2[1], n2[2], n2[3], n2[4], n2[5], n2[6], n2[7]), k(p, o2[0], o2[1], o2[2], o2[3], o2[4], o2[5], o2[6], o2[7]), i$1(s2, c$1(e, e), p);
}
function k(o$22, c2, u2, e2, p2, h2, j2, k2, v2) {
  s(o$22, c2, e2, h2, u2, p2, j2, 1, 1, 1), o(f, k2, v2, 1), c$1(i, o$22);
  const [x, b2, d] = S(f, f, o$1(i, i));
  return s(i, x, 0, 0, 0, b2, 0, 0, 0, d), i$1(o$22, i, o$22);
}
const b = e$3();
class V extends r$1 {
  constructor(s2) {
    super(), this.elementView = s2, this.isWrapAround = false, this.perspectiveTransform = n$2(), this._vertices = new Float32Array(20), this._handles = [], this._handles.push(l(() => this.elementView.element.opacity, (e2) => this.opacity = e2, h), l(() => [this.elementView.coords], () => {
      this.requestRender();
    }, h), f$1(() => this.elementView.element.loaded, () => {
      const e2 = this.elementView.element;
      this.ready(), e2.type === "video" && r(e2.content) && this._handles.push(r$2(e2.content, "play", () => this.requestRender()));
    }, h)), s2.element.load().catch((t2) => {
      s$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$2("element-load-error", "Element cannot be displayed", { element: s2, error: t2 }));
    });
  }
  destroy() {
    var _a;
    this._handles.forEach((e2) => e2.remove()), (_a = this.texture) == null ? void 0 : _a.dispose(), this.texture = null;
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e2) {
    const { context: t2 } = e2, r$12 = this.elementView.element.content;
    if (r(r$12)) {
      const e3 = r$12 instanceof HTMLImageElement, i2 = r$12 instanceof HTMLVideoElement, o2 = e3 ? r$12.naturalWidth : i2 ? r$12.videoWidth : r$12.width, n2 = e3 ? r$12.naturalHeight : i2 ? r$12.videoHeight : r$12.height;
      this._updatePerspectiveTransform(o2, n2), this.texture ? i2 && !r$12.paused && (this.texture.setData(r$12), this.requestRender(), (n$3(t2.gl) || c$2(o2) && c$2(n2)) && this.texture.generateMipmap()) : (this.texture = new E(t2, { pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, samplingMode: L.LINEAR, wrapMode: D.CLAMP_TO_EDGE, width: o2, height: n2, preMultiplyAlpha: true }, r$12), (n$3(t2.gl) || c$2(o2) && c$2(n2)) && this.texture.generateMipmap(), i2 && !r$12.paused && this.requestRender());
    }
    super.beforeRender(e2);
  }
  _createTransforms() {
    return null;
  }
  updateDrawCoords(e2, t$12) {
    const r2 = this.elementView.coords;
    if (t(r2))
      return;
    const [s2, i2, n2, a2] = r2.rings[0], m2 = this._vertices, { x: h2, y: c2 } = e2, l2 = t$12 !== 0;
    l2 ? m2.set([i2[0] - h2, i2[1] - c2, s2[0] - h2, s2[1] - c2, n2[0] - h2, n2[1] - c2, a2[0] - h2, a2[1] - c2, a2[0] - h2, a2[1] - c2, i2[0] + t$12 - h2, i2[1] - c2, i2[0] + t$12 - h2, i2[1] - c2, s2[0] + t$12 - h2, s2[1] - c2, n2[0] + t$12 - h2, n2[1] - c2, a2[0] + t$12 - h2, a2[1] - c2]) : m2.set([i2[0] - h2, i2[1] - c2, s2[0] - h2, s2[1] - c2, n2[0] - h2, n2[1] - c2, a2[0] - h2, a2[1] - c2]), this.isWrapAround = l2;
  }
  getVAO(e2, t$12, r2) {
    if (t(this.elementView.coords))
      return null;
    const s2 = this._vertices;
    if (this._vao)
      this._geometryVbo.setData(s2);
    else {
      this._geometryVbo = E$1.createVertex(e2, F.DYNAMIC_DRAW, s2);
      const i2 = E$1.createVertex(e2, F.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]));
      this._vao = new a$2(e2, r2, t$12, { geometry: this._geometryVbo, tex: i2 });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e2, t2) {
    const r2 = this._vertices;
    j$1(b, [0, 0, e2, 0, 0, t2, e2, t2], [r2[0], r2[1], r2[4], r2[5], r2[2], r2[3], r2[6], r2[7]]), r$3(this.perspectiveTransform, b[6] / b[8] * e2, b[7] / b[8] * t2);
  }
}
class M extends o$2 {
  constructor() {
    super(...arguments), this._localOrigin = c$3(0, 0), this._viewStateId = -1, this._dvsMat3 = e$4(), this.requiresDedicatedFBO = false;
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(t2) {
    this._updateMatrices(t2), this._updateOverlays(t2, this.children);
    for (const e2 of this.children)
      e2.beforeRender(t2);
  }
  prepareRenderPasses(t2) {
    const e2 = t2.registerRenderPass({ name: "overlay", brushes: [n$4.overlay], target: () => this.children, drawPhase: I.MAP });
    return [...super.prepareRenderPasses(t2), e2];
  }
  _updateMatrices(t2) {
    const { state: e2 } = t2, { id: n2, size: h2, pixelRatio: l2, resolution: m2, rotation: f2, viewpoint: u2, displayMat3: M2 } = e2;
    if (this._viewStateId === n2)
      return;
    const v2 = Math.PI / 180 * f2, _ = l2 * h2[0], w2 = l2 * h2[1], { x: y2, y: g } = u2.targetGeometry, j2 = U(y2, e2.spatialReference);
    this._localOrigin.x = j2, this._localOrigin.y = g;
    const b2 = m2 * _, R2 = m2 * w2, O = r$4(this._dvsMat3);
    i$1(O, O, M2), M$1(O, O, t$1(_ / 2, w2 / 2)), f$2(O, O, r$5(_ / b2, -w2 / R2, 1)), h$1(O, O, -v2), this._viewStateId = n2;
  }
  _updateOverlays(e2, s2) {
    const { state: r2 } = e2, { rotation: o2, spatialReference: a2, worldScreenWidth: i2, size: n2, viewpoint: c2 } = r2, p2 = this._localOrigin;
    let d = 0;
    if (a2.isWrappable) {
      const e3 = n2[0], m2 = n2[1], f2 = 180 / Math.PI * o2, u2 = Math.abs(Math.cos(f2)), M2 = Math.abs(Math.sin(f2)), v2 = Math.round(e3 * u2 + m2 * M2), [_, w2] = R$1(a2).valid, y2 = mt(a2), { x: g, y: j2 } = c2.targetGeometry, b2 = [g, j2], R2 = [0, 0];
      r2.toScreen(R2, b2);
      const O = [0, 0];
      let P2;
      P2 = v2 > i2 ? 0.5 * i2 : 0.5 * v2;
      const x = Math.floor((g + 0.5 * y2) / y2), C = _ + x * y2, D2 = w2 + x * y2, I2 = [R2[0] + P2, 0];
      r2.toMap(O, I2), O[0] > D2 && (d = y2), I2[0] = R2[0] - P2, r2.toMap(O, I2), O[0] < C && (d = -y2);
      for (const r3 of s2) {
        const e4 = r3.elementView.bounds;
        if (t(e4))
          continue;
        const [s3, , o3] = e4;
        s3 < _ && o3 > _ ? r3.updateDrawCoords(p2, y2) : o3 > w2 && s3 < w2 ? r3.updateDrawCoords(p2, -y2) : r3.updateDrawCoords(p2, d);
      }
    } else
      for (const t2 of s2)
        t2.updateDrawCoords(p2, d);
  }
}
let j = class extends y$1(u) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = new Map(), this.layer = null, this.elements = new j$2();
  }
  attach() {
    this.handles.add(a$3(() => this.layer.source, "refresh", () => {
      for (const e2 of this._tileStrategy.tiles)
        this._updateTile(e2);
      this.requestUpdate();
    })), this._overlayContainer = new M(), this.container.addChild(this._overlayContainer), this._fetchQueue = new y$2({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (e2, t2) => this._queryElements(e2, t2) }), this._tileStrategy = new r$6({ cachePolicy: "purge", resampling: true, acquireTile: (e2) => this._acquireTile(e2), releaseTile: (e2) => this._releaseTile(e2), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
  }
  detach() {
    this.handles.removeAll(), this.elements.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.destroy(), this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this._elementReferences.clear();
  }
  supportsSpatialReference(e2) {
    return true;
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
  update(e2) {
    this._tileStrategy.update(e2);
  }
  async hitTest(e2, t2) {
    const s2 = [], r$12 = e2.normalize(), o2 = [r$12.x, r$12.y];
    for (const { projectedElement: { normalizedCoords: l2, element: n2 } } of this._elementReferences.values())
      r(l2) && s$3(l2.rings, o2) && s2.push({ type: "media", element: n2, layer: this.layer, mapPoint: e2 });
    return s2.reverse();
  }
  canResume() {
    return this.layer.source != null && super.canResume();
  }
  async doRefresh() {
  }
  _acquireTile(e2) {
    const t2 = new T(e2.clone());
    return this._updateTile(t2), t2;
  }
  _updateTile(e2) {
    this.updatingHandles.addPromise(this._fetchQueue.push(e2.key).then((t2) => {
      const [s2, r2] = e2.setElements(t2);
      this._acquireElements(e2, s2), this._releaseElements(e2, r2), this.requestUpdate();
    }, (e3) => {
      j$3(e3) || s$1.getLogger(this.declaredClass).error(e3);
    }));
  }
  _releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), e2.elements && this._releaseElements(e2, e2.elements), this.requestUpdate();
  }
  async _queryElements(e2, t$12) {
    const s2 = this.layer.source;
    if (t(s2))
      return [];
    this.view.featuresTilingScheme.getTileBounds(w, e2, true);
    const r2 = new w$1({ xmin: w[0], ymin: w[1], xmax: w[2], ymax: w[3], spatialReference: this.view.spatialReference });
    return s2.queryElements(r2, t$12);
  }
  _acquireElements(e2, t$12) {
    const s2 = this.layer.source, i2 = this.view.spatialReference;
    if (!t(s2))
      for (const o2 of t$12) {
        r$7(this._elementReferences, o2.uid, () => {
          const e3 = new a({ element: o2, spatialReference: i2 }), t2 = new V(e3);
          return this._overlayContainer.addChild(t2), this.elements.add(o2), { tiles: new Set(), projectedElement: e3, overlay: t2 };
        }).tiles.add(e2);
      }
  }
  _releaseElements(e2, t2) {
    for (const s2 of t2) {
      const t3 = this._elementReferences.get(s2.uid);
      t3.tiles.delete(e2), t3.tiles.size || (this._overlayContainer.removeChild(t3.overlay), t3.overlay.destroy(), t3.projectedElement.destroy(), this._elementReferences.delete(s2.uid), this.elements.remove(s2));
    }
  }
};
e$1([y()], j.prototype, "_fetchQueue", void 0), e$1([y()], j.prototype, "layer", void 0), e$1([y({ readOnly: true })], j.prototype, "elements", void 0), j = e$1([n("esri.views.2d.layers.MediaLayerView2D")], j);
const w = u$1();
class T {
  constructor(e2) {
    this.key = e2, this.elements = null, this.isReady = false, this.visible = true;
  }
  setElements(e2) {
    const t2 = [], s2 = new Set(this.elements);
    this.elements = e2;
    for (const r2 of e2)
      s2.has(r2) ? s2.delete(r2) : t2.push(r2);
    return this.isReady = true, [t2, Array.from(s2)];
  }
}
const R = j;
export { R as default };
