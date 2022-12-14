var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
import { de as rn, a7 as w, U, da as i, cx as j$1, R as l, cr as w$1, a as r, t, dd as tn, aK as k$1, dp as a$1, dq as L$1, dr as f$1, ds as I, $ as e, a0 as y$2, a1 as n$1 } from "./index.js";
import { b as b$1, g, d } from "./kmlUtils.js";
import { S, T, R } from "./Bitmap.js";
import { a } from "./BitmapContainer.js";
import { y as y$1, u } from "./LayerView.js";
import { i as i$1 } from "./GraphicContainer.js";
import { o as oe } from "./BaseGraphicContainer.js";
import { C as C$1, $ } from "./rasterProjectionHelper.js";
import { a as n, e as c } from "./WGLContainer.js";
import { y, o } from "./RenderingContext.js";
import { P, G, D, L, Y, V, f } from "./enums.js";
import { x } from "./VertexArrayObject.js";
import { E } from "./Texture.js";
import "vue";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./normalizeUtilsSync.js";
import "./projectionSupport.js";
import "./json.js";
import "./FeatureContainer.js";
import "./TileContainer.js";
import "./visualVariablesUtils.js";
import "./visualVariablesUtils2.js";
import "./Matcher.js";
import "./tileUtils.js";
import "./TileClipper.js";
import "./Geometry.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./devEnvironmentUtils.js";
import "./schemaUtils.js";
import "./createSymbolSchema.js";
import "./util.js";
import "./ComputedAttributeStorage.js";
import "./centroid.js";
import "./vec3f32.js";
import "./pixelUtils.js";
import "./ProgramTemplate.js";
import "./StyleDefinition.js";
import "./config.js";
import "./programUtils.js";
import "./OrderIndependentTransparency.js";
class b {
  constructor(t2) {
    if (t2)
      this._ownsRctx = false, this._rctx = t2;
    else {
      if (b._instance)
        return b._instanceRefCount++, b._instance;
      b._instanceRefCount = 1, b._instance = this, this._ownsRctx = true;
      const t3 = document.createElement("canvas").getContext("webgl");
      t3.getExtension("OES_texture_float"), this._rctx = new y(t3, {});
    }
    const e2 = { applyProjection: true, bilinear: false, bicubic: false }, r2 = o("raster/reproject", "raster/reproject", new Map([["a_position", 0]]), e2);
    this._program = this._rctx.programCache.acquire(r2.shaders.vertexShader, r2.shaders.fragmentShader, r2.attributes), this._rctx.useProgram(this._program), this._program.setUniform1f("u_opacity", 1), this._program.setUniform1i("u_image", 0), this._program.setUniform1i("u_flipY", 0), this._program.setUniform1i("u_transformGrid", 1), this._quad = new n(this._rctx, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  reprojectTexture(t2, s, n2 = false) {
    const o2 = rn(t2.extent, s), m = new w({ x: (t2.extent.xmax - t2.extent.xmin) / t2.texture.descriptor.width, y: (t2.extent.ymax - t2.extent.ymin) / t2.texture.descriptor.height, spatialReference: t2.extent.spatialReference }), { x: l2, y: b2 } = C$1(m, s, t2.extent);
    let D$1 = (l2 + b2) / 2;
    const T2 = Math.round((o2.xmax - o2.xmin) / D$1), j2 = Math.round((o2.ymax - o2.ymin) / D$1);
    D$1 = (o2.width / T2 + o2.height / j2) / 2;
    const E$1 = new w({ x: D$1, y: D$1, spatialReference: o2.spatialReference }), R2 = $({ projectedExtent: o2, srcBufferExtent: t2.extent, pixelSize: E$1, hasWrapAround: true, spacing: [16, 16] }), C2 = c(this._rctx, R2), y2 = new E(this._rctx, { width: T2, height: j2, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, wrapMode: D.CLAMP_TO_EDGE, samplingMode: L.LINEAR, hasMipmap: false }), M = new x(this._rctx, { colorTarget: Y.TEXTURE, depthStencilTarget: V.NONE, width: T2, height: j2 }, y2);
    if (this._rctx.bindFramebuffer(M), this._rctx.setViewport(0, 0, T2, j2), this._rctx.useProgram(this._program), this._rctx.bindTexture(t2.texture, 0), this._rctx.bindTexture(C2, 1), this._quad.bind(), this._program.setUniform2f("u_srcImageSize", t2.texture.descriptor.width, t2.texture.descriptor.height), this._program.setUniform2fv("u_transformSpacing", R2.spacing), this._program.setUniform2fv("u_transformGridSize", R2.size), this._program.setUniform2f("u_targetImageSize", T2, j2), this._quad.draw(), this._quad.unbind(), this._rctx.useProgram(null), this._rctx.bindFramebuffer(null), C2.dispose(), n2) {
      const t3 = new ImageData(M.descriptor.width, M.descriptor.height);
      return M.readPixels(0, 0, M.descriptor.width, M.descriptor.height, P.RGBA, G.UNSIGNED_BYTE, t3.data), M.detachColorTexture(f.COLOR_ATTACHMENT0), M.dispose(), { texture: y2, extent: o2, imageData: t3 };
    }
    return M.detachColorTexture(f.COLOR_ATTACHMENT0), M.dispose(), { texture: y2, extent: o2 };
  }
  reprojectBitmapData(t2, e2) {
    const r2 = S(t2.bitmapData) ? T(t2.bitmapData) : t2.bitmapData, i2 = new E(this._rctx, { width: t2.bitmapData.width, height: t2.bitmapData.height, pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, wrapMode: D.CLAMP_TO_EDGE, samplingMode: L.LINEAR, hasMipmap: false }, r2), a2 = this.reprojectTexture({ texture: i2, extent: t2.extent }, e2, true);
    a2.texture.dispose();
    const o2 = document.createElement("canvas");
    o2.width = a2.imageData.width, o2.height = a2.imageData.height;
    return o2.getContext("2d").putImageData(a2.imageData, 0, 0), { bitmapData: o2, extent: a2.extent };
  }
  async loadAndReprojectBitmapData(e2, r2, i2) {
    const a2 = (await U(e2, { responseType: "image" })).data, s = document.createElement("canvas");
    s.width = a2.width, s.height = a2.height;
    const n2 = s.getContext("2d");
    n2.drawImage(a2, 0, 0);
    const o2 = n2.getImageData(0, 0, s.width, s.height);
    if (r2.spatialReference.equals(i2))
      return { bitmapData: o2, extent: r2 };
    const m = this.reprojectBitmapData({ bitmapData: o2, extent: r2 }, i2);
    return { bitmapData: m.bitmapData, extent: m.extent };
  }
  destroy() {
    this._ownsRctx ? (b._instanceRefCount--, b._instanceRefCount === 0 && (this._quad.dispose(), this._program.dispose(), this._rctx.dispose(), b._instance = null)) : (this._quad.dispose(), this._program.dispose());
  }
}
b._instanceRefCount = 0;
class C {
  constructor() {
    this.allSublayers = new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }
}
let j = class extends y$1(u) {
  constructor() {
    super(...arguments), this._bitmapIndex = new Map(), this._mapImageContainer = new a(), this._kmlVisualData = new C(), this.allVisiblePoints = new i(), this.allVisiblePolylines = new i(), this.allVisiblePolygons = new i(), this.allVisibleMapImages = new j$1();
  }
  async hitTest(e2, i2) {
    var _a, _b, _c;
    const t2 = this.layer;
    return [(_a = this._pointsView) == null ? void 0 : _a.hitTest(e2), (_b = this._polylinesView) == null ? void 0 : _b.hitTest(e2), (_c = this._polygonsView) == null ? void 0 : _c.hitTest(e2)].flat().filter(Boolean).map((i3) => (i3.layer = t2, i3.sourceLayer = t2, { type: "graphic", graphic: i3, layer: t2, mapPoint: e2 }));
  }
  update(e2) {
    this._polygonsView && this._polygonsView.processUpdate(e2), this._polylinesView && this._polylinesView.processUpdate(e2), this._pointsView && this._pointsView.processUpdate(e2);
  }
  attach() {
    this._fetchController = new AbortController(), this.container.addChild(this._mapImageContainer), this._polygonsView = new oe({ view: this.view, graphics: this.allVisiblePolygons, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.container.addChild(this._polygonsView.container), this._polylinesView = new oe({ view: this.view, graphics: this.allVisiblePolylines, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.container.addChild(this._polylinesView.container), this._pointsView = new oe({ view: this.view, graphics: this.allVisiblePoints, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.container.addChild(this._pointsView.container), this.handles.add([this.allVisibleMapImages.on("change", (e2) => {
      e2.added.forEach((e3) => this._addMapImage(e3)), e2.removed.forEach((e3) => this._removeMapImage(e3));
    }), l(() => this.layer.visibleSublayers, (e2) => {
      for (const [i2, t2] of this._kmlVisualData.allSublayers)
        t2.visibility = 0;
      for (const i2 of e2) {
        const e3 = this._kmlVisualData.allSublayers.get(i2.id);
        e3 && (e3.visibility = 1);
      }
      this._refreshCollections();
    })]), this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)), this._imageReprojector = new b();
  }
  detach() {
    this._fetchController.abort(), this._fetchController = null, this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView && (this._polygonsView.destroy(), this._polygonsView = null), this._polylinesView && (this._polylinesView.destroy(), this._polylinesView = null), this._pointsView && (this._pointsView.destroy(), this._pointsView = null), this._imageReprojector && (this._imageReprojector.destroy(), this._imageReprojector = null);
  }
  moveStart() {
  }
  viewChange() {
    this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
  }
  _addMapImage(e2) {
    (this.view.spatialReference.isWGS84 || this.view.spatialReference.isWebMercator) && this._imageReprojector.loadAndReprojectBitmapData(e2.href, w$1.fromJSON(e2.extent), this.view.spatialReference).then((i2) => {
      const t2 = new R(i2.bitmapData, { immutable: false, requestRenderOnSourceChangedEnabled: true });
      t2.x = i2.extent.xmin, t2.y = i2.extent.ymax, t2.resolution = i2.extent.width / i2.bitmapData.width, t2.rotation = e2.rotation, this._mapImageContainer.addChild(t2), this._bitmapIndex.set(e2, t2);
    });
  }
  async _getViewDependentUrl(e2, t$1) {
    const { viewFormat: o2, viewBoundScale: n2, httpQuery: h } = e2;
    if (r(o2)) {
      if (t(t$1))
        throw new Error("Loading this network link requires a view state.");
      let y2;
      if (await tn(), r(n2) && n2 !== 1) {
        const e3 = new w$1(t$1.extent);
        e3.expand(n2), y2 = e3;
      } else
        y2 = t$1.extent;
      y2 = rn(y2, k$1.WGS84);
      const g2 = rn(y2, k$1.WebMercator), w2 = y2.xmin, _ = y2.xmax, b2 = y2.ymin, V2 = y2.ymax, f2 = t$1.size[0] * t$1.pixelRatio, v = t$1.size[1] * t$1.pixelRatio, S2 = Math.max(g2.width, g2.height), I$1 = { "[bboxWest]": w2.toString(), "[bboxEast]": _.toString(), "[bboxSouth]": b2.toString(), "[bboxNorth]": V2.toString(), "[lookatLon]": y2.center.x.toString(), "[lookatLat]": y2.center.y.toString(), "[lookatRange]": S2.toString(), "[lookatTilt]": "0", "[lookatHeading]": t$1.rotation.toString(), "[lookatTerrainLon]": y2.center.x.toString(), "[lookatTerrainLat]": y2.center.y.toString(), "[lookatTerrainAlt]": "0", "[cameraLon]": y2.center.x.toString(), "[cameraLat]": y2.center.y.toString(), "[cameraAlt]": S2.toString(), "[horizFov]": "60", "[vertFov]": "60", "[horizPixels]": f2.toString(), "[vertPixels]": v.toString(), "[terrainEnabled]": "0", "[clientVersion]": a$1, "[kmlVersion]": "2.2", "[clientName]": "ArcGIS API for JavaScript", "[language]": "en-US" }, x2 = (e3) => {
        for (const i2 in e3)
          for (const t2 in I$1)
            e3[i2] = e3[i2].replace(t2, I$1[t2]);
      }, C2 = L$1(o2);
      x2(C2);
      let j2 = {};
      r(h) && (j2 = L$1(h), x2(j2));
      const k2 = f$1(e2.href);
      k2.query = __spreadValues(__spreadValues(__spreadValues({}, k2.query), C2), j2);
      return `${k2.path}?${I(C2)}`;
    }
    return e2.href;
  }
  async _fetchService(e2) {
    const i2 = new C();
    await this._loadVisualData(this.layer.url, i2, e2), this._kmlVisualData = i2, this._refreshCollections();
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2));
  }
  _isSublayerVisible(e2) {
    const i2 = this._kmlVisualData.allSublayers.get(e2);
    return !!i2.visibility && (i2.parentFolderId === -1 || this._isSublayerVisible(i2.parentFolderId));
  }
  _loadVisualData(e2, i2, t2) {
    return this._fetchParsedKML(e2, t2).then(async (e3) => {
      for (const s of e3.sublayers) {
        i2.allSublayers.set(s.id, s);
        const e4 = s.points ? await b$1(s.points) : [], a2 = s.polylines ? await b$1(s.polylines) : [], o2 = s.polygons ? await b$1(s.polygons) : [], l2 = s.mapImages || [];
        if (i2.allPoints.push(...e4.map((e5) => ({ item: e5, sublayerId: s.id }))), i2.allPolylines.push(...a2.map((e5) => ({ item: e5, sublayerId: s.id }))), i2.allPolygons.push(...o2.map((e5) => ({ item: e5, sublayerId: s.id }))), i2.allMapImages.push(...l2.map((e5) => ({ item: e5, sublayerId: s.id }))), s.networkLink) {
          const e5 = await this._getViewDependentUrl(s.networkLink, this.view.state);
          await this._loadVisualData(e5, i2, t2);
        }
      }
    });
  }
  _fetchParsedKML(e2, i2) {
    return g(e2, this.layer.spatialReference, this.layer.refreshInterval, i2).then((e3) => d(e3.data));
  }
  _removeMapImage(e2) {
    const i2 = this._bitmapIndex.get(e2);
    i2 && (this._mapImageContainer.removeChild(i2), this._bitmapIndex.delete(e2));
  }
};
e([y$2()], j.prototype, "_pointsView", void 0), e([y$2()], j.prototype, "_polylinesView", void 0), e([y$2()], j.prototype, "_polygonsView", void 0), e([y$2()], j.prototype, "updating", void 0), j = e([n$1("esri.views.2d.layers.KMLLayerView2D")], j);
const k = j;
export { k as default };
