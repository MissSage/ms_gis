var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { dA as e$9, dB as e$a, r as r$d, bc as O$7, b9 as e$c, dC as r$f, bn as n$9, ce as u$8, A as A$7, dD as l$8, x as t$c, ap as x$6, aJ as t$d, aR as r$g, bi as r$h, bh as R$7, aq as o$b, dE as C$2, d1 as o$c, t as n$a, F as n$b, dF as l$9, bp as t$e, s as s$i, aK as e$e, aM as _$4, bd as z$5, ba as p$a, aP as u$a, aQ as P$5, aN as g$4, bf as _$5, c8 as q$2, bm as p$b, c as e$f, bk as a$9, dG as l$a, bP as r$j, bg as n$e, i as i$g, aO as a$c, dH as s$l, b_ as a$d, az as j$7, dI as R$8, aC as Y$2, aL as s$m, cJ as has, dJ as _$8, c0 as x$7, ca as pn, dK as l$d, bN as v$a, dL as u$e, dM as c$f, dN as o$n, c2 as k$4, dO as u$f, dP as t$m, dQ as e$q, dz as m$b, cI as b$5, dR as l$e, dS as l$f, $ as $$5, dT as I$8, dU as y$4, dV as N$2, c5 as n$h, bQ as xn, dW as Zn, cn as p$c, dX as i$i, aX as f$f, dY as r$l, dZ as n$i, b0 as r$m, ck as i$l, b5 as n$j, d_ as r$n, bj as l$g, c6 as a$g, cm as h$9, c7 as S$6, cj as e$r, bx as r$o, d$ as r$p, e0 as t$o, cf as u$h, e1 as ee$3, e2 as H$5, e3 as z$6, e4 as a$j, e5 as n$l, bo as d$d, bt as a$k, e6 as A$9, e7 as o$r, br as F$3, bs as D$4, e8 as E$c, e9 as J$4, ea as Z$5, eb as X$4, ec as b$7, ed as f$j, b6 as i$n, be as w$2, ee as h$e, cX as H$7, ef as Q$6, b8 as c$h, bu as j$8, eg as F$4, eh as l$j, b4 as s$q, b2 as l$k, b3 as A$a, a_ as b$8, bv as o$t, dv as j$9, ei as g$6, b1 as v$b, bq as h$f, ej as k$6, ek as b$9, el as n$m, em as s$t, en as u$m, eo as i$q, ep as s$u, eq as n$o, f as y$7, h as n$p, U as m$f, e as e$t, L as l$n, P as w$3, aY as a$n, er as I$a, bl as w$4, es as n$q, et as F$6, eu as t$r, bB as x$b } from "./index.js";
import { r as r$i, n as n$c, t as t$f } from "./vec3f32.js";
import { u as u$7, i as i$f, f as a$8, o as o$d, W as W$2, c as c$e, A as A$8, l as l$b, a as a$b, E as E$8, _ as _$6, b as _$7, s as s$o, h as h$c, d as a$i, n as n$k, S as S$7, g as l$h, O as O$9, e as l$m } from "./OrderIndependentTransparency.js";
import { X as r$e, v as e$b, Y as c$c, Z as f$c, w as d$8, j as e$g, z as h$8, J as s$j, o as o$e, e as e$h, c as n$d, _ as o$f, $ as o$g, a0 as e$i, p as t$g, a1 as a$a, y as c$d, a2 as e$j, a3 as u$b, a4 as r$k, m as e$k, L as L$3, d as o$i, a5 as t$h, a6 as o$j, a7 as d$9, F as v$7, g as e$l, b as e$m, a8 as t$i, a9 as n$f, H as n$g, C as u$c, D as e$n, I as t$j, h as e$o, i as o$k, T as e$p, U as o$l, V as f$d, aa as s$k, ab as m$a, ac as l$c, ad as P$7, ae as i$h, q as E$a, t as t$k, K as d$a, s as o$m, af as u$d, x as f$e, N as t$l, ag as v$9, ah as c$g, f as f$g, ai as f$h, G as d$b, aj as i$j, a as a$e, ak as i$k, al as s$n, am as t$n, R as o$o, an as a$f, E as E$b, ao as o$p, ap as f$i, aq as a$h, ar as d$c, as as L$4, W as h$a, at as o$q, Q as y$5, au as B$4, av as h$b, aw as u$g, ax as b$6, P as m$c, A as r$q, ay as e$s, az as i$m, M as x$9, O as h$d, k as t$p, aA as L$6, aB as o$s, aC as u$l, aD as y$6, aE as c$i, aF as i$o, aG as a$l, aH as s$s, aI as o$u, aJ as a$m, aK as n$n, aL as d$e, aM as r$r, aN as m$e, aO as d$f, aP as v$c, aQ as i$p, r as r$s, aR as l$l, aS as d$g, aT as i$r, aU as P$8, aV as s$v, aW as i$s, u as u$n, aX as c$k, aY as E$e } from "./SSAOHelper.js";
import { u as u$9 } from "./Indices.js";
import { e as e$d, M as M$4, g as g$5, l as l$i, k as k$5, m as m$d, f as f$k, s as s$r, u as u$k, h as h$g } from "./Util.js";
import { O as O$8 } from "./VertexAttribute.js";
import { x as x$8, i as i$t, u as u$o } from "./BufferView.js";
import { T as T$9 } from "./InterleavedLayout.js";
import { P as P$6, G as G$4, D as D$3, E as E$9, R as R$9, I as I$9, Y as Y$3, V as V$3, M as M$6, L as L$5, _ as _$9, F as F$5 } from "./enums.js";
import { c as c$j, l as l$o } from "./triangulationUtils.js";
import { x as x$a, u as u$j, E as E$d, n as n$r } from "./VertexArrayObject.js";
import { t as t$q } from "./NestedMap.js";
import { G as G$3, U as U$4, H as H$6, u as u$i, b as s$p } from "./Octree.js";
import { v as v$8, M as M$5, b as b$4, k as k$3 } from "./lineSegment.js";
import { o as o$h } from "./floatRGBA.js";
import { E as E$7 } from "./Texture.js";
import "./boundedPlane.js";
import { o as o$v } from "./glUtil.js";
class o$a {
  constructor() {
    this._disposed = false;
  }
  get disposed() {
    return this._disposed;
  }
  get shaderTransformation() {
    return this._shaderTransformation;
  }
  acquire(t2, r2, i2, o2, e2, a2) {
    this.id = e$a(), this.geometry = t2, this.material = r2, this.transformation = i2, this.instanceParameters = o2, this.origin = e2, this._shaderTransformation = a2, this._disposed = false;
  }
  release() {
    this._disposed = false;
  }
  dispose() {
    this._disposed = true;
  }
  getStaticTransformation() {
    return this.transformation;
  }
  getShaderTransformation() {
    return r$d(this._shaderTransformation) ? this._shaderTransformation(this.transformation) : this.transformation;
  }
  computeAttachmentOrigin(t2) {
    return !!(this.material.computeAttachmentOrigin ? this.material.computeAttachmentOrigin(this.geometry, t2) : this.geometry.computeAttachmentOrigin(t2)) && (O$7(t2, t2, this.getStaticTransformation()), true);
  }
}
o$a.pool = new e$9(o$a);
class r$c {
  constructor(r2) {
    this.channel = r2, this.id = e$a();
  }
}
class x$5 extends r$e {
  constructor(t2 = {}) {
    super(), this.type = e$b.Object, this._geometryRecords = new Array(), this._geometries = new Array(), this._objectTransformation = e$c(), this._bvObjectSpace = new L$2(), this._bvWorldSpace = new L$2(), this._bvDirty = true, this._hasVolatileTransformation = false, this._visible = true, this.castShadow = t2.castShadow == null || t2.castShadow, this.metadata = t2.metadata, this.metadata && this.metadata.isElevationSource && (this.metadata.lastValidElevationBB = new O$6());
    const { geometries: e2, materials: s2, transformations: i2, origins: a2 } = t2;
    if (Array.isArray(e2)) {
      e$d(s2.length === e2.length, "Object3D: materials don't match geometries"), e$d(i2.length === e2.length, "Object3D: transformations don't match geometries"), this._geometryRecords.length = e2.length, this._geometries.length = e2.length;
      for (let t3 = 0; t3 < e2.length; t3++)
        this._geometries[t3] = e2[t3], this._geometryRecords[t3] = o$a.pool.acquire(e2[t3], s2[t3], r$f(i2[t3]), { highlights: null, occludees: null, visible: this._visible }, a2 && a2[t3]);
    }
  }
  get geometryRecords() {
    return this._geometryRecords;
  }
  get geometries() {
    return this._geometries;
  }
  get transformation() {
    return this._objectTransformation;
  }
  set transformation(t2) {
    n$9(this._objectTransformation, t2), this._invalidateBoundingVolume(), this._emit("objectTransformation", this);
  }
  dispose() {
    this._geometryRecords.length = 0, this._geometries.length = 0;
  }
  get parentLayer() {
    return this._parentLayer;
  }
  set parentLayer(t2) {
    e$d(this._parentLayer == null || t2 == null, "Object3D can only be added to a single Layer"), this._parentLayer = t2;
  }
  addGeometry(e2, s2, i2, r2, o2) {
    i2 = i2 || o$c, this._geometries.push(e2);
    const n2 = o$a.pool.acquire(e2, s2, i2, { highlights: null, occludees: null, visible: this._visible }, r2, o2);
    return this._geometryRecords.push(n2), this._hasVolatileTransformation = this._hasVolatileTransformation || r$d(n2.shaderTransformation), this._emit("objectGeometryAdded", { object: this, record: n2 }), this._invalidateBoundingVolume(), n2;
  }
  removeGeometry(e2) {
    const s2 = this._geometryRecords.splice(e2, 1)[0];
    return this._hasVolatileTransformation = r$d(s2.shaderTransformation) ? this._geometryRecords.some((e3) => r$d(e3.shaderTransformation)) : this._hasVolatileTransformation, s2.dispose(), this._geometries.splice(e2, 1), this._emit("objectGeometryRemoved", { object: this, record: s2 }), this._invalidateBoundingVolume(), s2;
  }
  removeAllGeometries() {
    for (; this.geometryRecords.length > 0; )
      this.removeGeometry(0);
  }
  geometryVertexAttrsUpdated(t2) {
    this._emit("vertexAttrsUpdated", { object: this, record: t2 }), this._invalidateBoundingVolume();
  }
  get isVisible() {
    return this._visible;
  }
  setVisible(t2) {
    if (this._visible !== t2) {
      this._visible = t2;
      for (const t3 of this._geometryRecords)
        t3.instanceParameters.visible = this._visible;
      this._emit("visibilityChanged", this);
    }
  }
  maskOccludee() {
    const t2 = new r$c(u$7.MaskOccludee);
    for (const e2 of this._geometryRecords)
      e2.instanceParameters.occludees = c$c(e2.instanceParameters.occludees, t2);
    return this._emit("occlusionChanged", this), t2;
  }
  removeOcclude(t2) {
    for (const e2 of this._geometryRecords)
      e2.instanceParameters.occludees = f$c(e2.instanceParameters.occludees, t2);
    this._emit("occlusionChanged", this);
  }
  highlight() {
    const t2 = new r$c(u$7.Highlight);
    for (const e2 of this._geometryRecords)
      e2.instanceParameters.highlights = c$c(e2.instanceParameters.highlights, t2);
    return this._emit("highlightChanged", this), t2;
  }
  removeHighlight(t2) {
    for (const e2 of this._geometryRecords)
      e2.instanceParameters.highlights = f$c(e2.instanceParameters.highlights, t2);
    this._emit("highlightChanged", this);
  }
  getCombinedStaticTransformation(t2, e2) {
    return u$8(e2, this.transformation, t2.getStaticTransformation());
  }
  _getCombinedShaderTransformation(t2) {
    return u$8(e$c(), this.transformation, t2.getShaderTransformation());
  }
  hasVolativeTransformation() {
    return this._hasVolatileTransformation;
  }
  get boundingVolumeWorldSpace() {
    return this._validateBoundingVolume(), this._bvWorldSpace;
  }
  get boundingVolumeObjectSpace() {
    return this._validateBoundingVolume(), this._bvObjectSpace;
  }
  _validateBoundingVolume() {
    if (!this._bvDirty && !this._hasVolatileTransformation)
      return;
    this._bvObjectSpace.init(), this._bvWorldSpace.init();
    for (let e2 = 0; e2 < this._geometryRecords.length; ++e2) {
      const s3 = this._geometries[e2], i3 = this._geometryRecords[e2], r3 = s3.boundingInfo;
      r$d(r3) && (this._calculateTransformedBoundingVolume(r3, this._bvObjectSpace, i3.getShaderTransformation()), this._calculateTransformedBoundingVolume(r3, this._bvWorldSpace, this._getCombinedShaderTransformation(i3)));
    }
    A$7(this._bvObjectSpace.bounds, this._bvObjectSpace.min, this._bvObjectSpace.max, 0.5), A$7(this._bvWorldSpace.bounds, this._bvWorldSpace.min, this._bvWorldSpace.max, 0.5);
    const s2 = n$a(), i2 = n$a(), r2 = l$8(this.transformation);
    for (let t2 = 0; t2 < this._geometryRecords.length; ++t2) {
      const o2 = this._geometries[t2].boundingInfo;
      if (t$c(o2))
        continue;
      const a2 = this._geometryRecords[t2].getShaderTransformation(), n2 = l$8(a2);
      O$7(s2, o2.getCenter(), a2);
      const c2 = x$6(s2, this._bvObjectSpace.bounds), l2 = o2.getBSRadius() * n2;
      this._bvObjectSpace.bounds[3] = Math.max(this._bvObjectSpace.bounds[3], c2 + l2), O$7(i2, s2, this.transformation);
      const d2 = x$6(i2, this._bvWorldSpace.bounds), g2 = l2 * r2;
      this._bvWorldSpace.bounds[3] = Math.max(this._bvWorldSpace.bounds[3], d2 + g2);
    }
    this._bvDirty = false;
  }
  _calculateTransformedBoundingVolume(t2, e2, s2) {
    const i2 = t2.getBBMin(), r2 = t2.getBBMax(), o2 = t$d(i2), a2 = t$d(r2);
    O$7(o2, o2, s2), O$7(a2, a2, s2);
    for (let n2 = 0; n2 < 3; ++n2)
      e2.min[n2] = Math.min(e2.min[n2], o2[n2], a2[n2]), e2.max[n2] = Math.max(e2.max[n2], o2[n2], a2[n2]);
    for (let n2 = 0; n2 < 3; ++n2) {
      r$g(o2, i2), r$g(a2, r2), o2[n2] = r2[n2], a2[n2] = i2[n2], O$7(o2, o2, s2), O$7(a2, a2, s2);
      for (let t3 = 0; t3 < 3; ++t3)
        e2.min[t3] = Math.min(e2.min[t3], o2[t3], a2[t3]), e2.max[t3] = Math.max(e2.max[t3], o2[t3], a2[t3]);
    }
  }
  _invalidateBoundingVolume() {
    this._bvDirty = true, r$d(this._parentLayer) && this._parentLayer.notifyObjectBBChanged(this, this._bvWorldSpace.bounds);
  }
  _emit(e2, s2) {
    r$d(this._parentLayer) && this._parentLayer.events.emit(e2, s2);
  }
  get test() {
    const t2 = this;
    return { hasGeometry: (e2) => t2._geometries.includes(e2), getGeometryIndex: (e2) => t2._geometries.indexOf(e2) };
  }
}
class O$6 {
  constructor() {
    this.min = r$h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this.max = r$h(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
  }
  isEmpty() {
    return this.max[0] < this.min[0] && this.max[1] < this.min[1] && this.max[2] < this.min[2];
  }
}
class L$2 extends O$6 {
  constructor() {
    super(...arguments), this.bounds = R$7();
  }
  init() {
    o$b(this.min, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), o$b(this.max, -Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), C$2(this.bounds);
  }
}
const e$8 = ["layerObjectAdded", "layerObjectRemoved", "layerObjectsAdded", "layerObjectsRemoved", "shaderTransformationChanged", "objectTransformation", "visibilityChanged", "occlusionChanged", "highlightChanged", "objectGeometryAdded", "objectGeometryRemoved", "vertexAttrsUpdated"];
class l$7 extends r$e {
  constructor(s2, r2 = "") {
    var _a, _b, _c;
    super(), this.apiLayerUid = r2, this.type = e$b.Layer, this.events = new n$b(), this.isSliceable = false, this._objects = new l$9(), this._stageHandles = new t$e(), this.apiLayerUid = r2, this.isVisible = (_a = s2 == null ? void 0 : s2.isVisible) != null ? _a : true, this.isPickable = (_b = s2 == null ? void 0 : s2.isPickable) != null ? _b : true, this.updatePolicy = (_c = s2 == null ? void 0 : s2.updatePolicy) != null ? _c : i$f.ASYNC;
  }
  get objects() {
    return this._objects;
  }
  destroy() {
    this.detachStage(), this._stage = null;
  }
  attachStage(e2) {
    this.detachStage(), this._stage = e2;
    for (const t2 of e$8)
      this._stageHandles.add(this.events.on(t2, (s2) => e2.handleEvent(t2, s2)));
  }
  detachStage() {
    this._stageHandles.removeAll(), this.invalidateSpatialQueryAccelerator();
  }
  add(e2) {
    this._objects.push(e2), e2.parentLayer = this, this.events.emit("layerObjectAdded", { layer: this, object: e2 }), r$d(this._octree) && this._octree.add([e2]);
  }
  remove(e2) {
    this._objects.removeUnordered(e2) && (e2.parentLayer = null, this.events.emit("layerObjectRemoved", { layer: this, object: e2 }), r$d(this._octree) && this._octree.remove([e2]));
  }
  addMany(e2) {
    this._objects.pushArray(e2);
    for (const t2 of e2)
      t2.parentLayer = this;
    this.events.emit("layerObjectsAdded", { layer: this, objects: e2 }), r$d(this._octree) && this._octree.add(e2);
  }
  removeMany(e2) {
    const t2 = new Array();
    if (this._objects.removeUnorderedMany(e2, e2.length, t2), t2.length !== 0) {
      for (const e3 of t2)
        e3.parentLayer = null;
      this.events.emit("layerObjectsRemoved", { layer: this, objects: t2 }), r$d(this._octree) && this._octree.remove(t2);
    }
  }
  sync() {
    r$d(this._stage) && this.updatePolicy !== i$f.SYNC && this._stage.syncLayer(this.id);
  }
  notifyObjectBBChanged(e2, t2) {
    r$d(this._octree) && this._octree.update(e2, t2);
  }
  getSpatialQueryAccelerator() {
    return t$c(this._octree) && this._objects.length > 50 && this._createOctree(), this._octree;
  }
  shaderTransformationChanged() {
    this.invalidateSpatialQueryAccelerator(), this.events.emit("shaderTransformationChanged", this);
  }
  invalidateSpatialQueryAccelerator() {
    this._octree = s$i(this._octree);
  }
  _createOctree() {
    this._octree = new G$3((e2) => e2.boundingVolumeWorldSpace.bounds), this._octree.add(this._objects.data, this._objects.length);
  }
}
var n$8;
!function(n2) {
  function t2(n3, t3) {
    const c3 = n3[t3], o3 = n3[t3 + 1], r3 = n3[t3 + 2];
    return Math.sqrt(c3 * c3 + o3 * o3 + r3 * r3);
  }
  function c2(n3, t3) {
    const c3 = n3[t3], o3 = n3[t3 + 1], r3 = n3[t3 + 2], u3 = 1 / Math.sqrt(c3 * c3 + o3 * o3 + r3 * r3);
    n3[t3] *= u3, n3[t3 + 1] *= u3, n3[t3 + 2] *= u3;
  }
  function o2(n3, t3, c3) {
    n3[t3] *= c3, n3[t3 + 1] *= c3, n3[t3 + 2] *= c3;
  }
  function r2(n3, t3, c3, o3, r3, u3 = t3) {
    (r3 = r3 || n3)[u3] = n3[t3] + c3[o3], r3[u3 + 1] = n3[t3 + 1] + c3[o3 + 1], r3[u3 + 2] = n3[t3 + 2] + c3[o3 + 2];
  }
  function u2(n3, t3, c3, o3, r3, u3 = t3) {
    (r3 = r3 || n3)[u3] = n3[t3] - c3[o3], r3[u3 + 1] = n3[t3 + 1] - c3[o3 + 1], r3[u3 + 2] = n3[t3 + 2] - c3[o3 + 2];
  }
  n2.length = t2, n2.normalize = c2, n2.scale = o2, n2.add = r2, n2.subtract = u2;
}(n$8 || (n$8 = {}));
const P$4 = n$8;
var m$9, S$5, z$4;
!function(t2) {
  const e2 = 0.5, n2 = [[-e2, -e2, e2], [e2, -e2, e2], [e2, e2, e2], [-e2, e2, e2], [-e2, -e2, -e2], [e2, -e2, -e2], [e2, e2, -e2], [-e2, e2, -e2]], s2 = [0, 0, 1, -1, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, -1], a2 = [0, 0, 1, 0, 1, 1, 0, 1], r2 = [0, 1, 2, 2, 3, 0, 4, 0, 3, 3, 7, 4, 1, 5, 6, 6, 2, 1, 1, 0, 4, 4, 5, 1, 3, 2, 6, 6, 7, 3, 5, 4, 7, 7, 6, 5], o2 = new Array(36);
  for (let c2 = 0; c2 < 6; c2++)
    for (let t3 = 0; t3 < 6; t3++)
      o2[6 * c2 + t3] = c2;
  const l2 = new Array(36);
  for (let c2 = 0; c2 < 6; c2++)
    l2[6 * c2 + 0] = 0, l2[6 * c2 + 1] = 1, l2[6 * c2 + 2] = 2, l2[6 * c2 + 3] = 2, l2[6 * c2 + 4] = 3, l2[6 * c2 + 5] = 0;
  function u2(t3) {
    Array.isArray(t3) || (t3 = [t3, t3, t3]);
    const e3 = new Array(24);
    for (let s3 = 0; s3 < 8; s3++)
      e3[3 * s3] = n2[s3][0] * t3[0], e3[3 * s3 + 1] = n2[s3][1] * t3[1], e3[3 * s3 + 2] = n2[s3][2] * t3[2];
    return new d$8([[O$8.POSITION, { size: 3, data: e3, exclusive: true }], [O$8.NORMAL, { size: 3, data: s2 }], [O$8.UV0, { size: 2, data: a2 }]], [[O$8.POSITION, r2], [O$8.NORMAL, o2], [O$8.UV0, l2]]);
  }
  t2.createGeometry = u2;
}(m$9 || (m$9 = {})), function(t2) {
  const e2 = 0.5, n2 = [[-e2, 0, -e2], [e2, 0, -e2], [e2, 0, e2], [-e2, 0, e2], [0, -e2, 0], [0, e2, 0]], s2 = [0, 1, -1, 1, 1, 0, 0, 1, 1, -1, 1, 0, 0, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, 0], a2 = [5, 1, 0, 5, 2, 1, 5, 3, 2, 5, 0, 3, 4, 0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0], r2 = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];
  function o2(t3) {
    Array.isArray(t3) || (t3 = [t3, t3, t3]);
    const e3 = new Array(18);
    for (let s3 = 0; s3 < 6; s3++)
      e3[3 * s3] = n2[s3][0] * t3[0], e3[3 * s3 + 1] = n2[s3][1] * t3[1], e3[3 * s3 + 2] = n2[s3][2] * t3[2];
    return new d$8([[O$8.POSITION, { size: 3, data: e3, exclusive: true }], [O$8.NORMAL, { size: 3, data: s2 }]], [[O$8.POSITION, a2], [O$8.NORMAL, r2]]);
  }
  t2.createGeometry = o2;
}(S$5 || (S$5 = {})), function(s2) {
  const a2 = 0.5, r2 = 0, o2 = r$i(-a2, r2, -a2), l2 = r$i(a2, r2, -a2), u2 = r$i(0, r2, a2), h2 = r$i(0, r2 + a2, 0), f2 = n$c(), O2 = n$c(), p2 = n$c(), A2 = n$c(), I2 = n$c();
  e$e(f2, o2, h2), e$e(O2, o2, l2), _$4(p2, f2, O2), z$5(p2, p2), e$e(f2, l2, h2), e$e(O2, l2, u2), _$4(A2, f2, O2), z$5(A2, A2), e$e(f2, u2, h2), e$e(O2, u2, o2), _$4(I2, f2, O2), z$5(I2, I2);
  const M2 = [o2, l2, u2, h2], g2 = [0, -1, 0, p2[0], p2[1], p2[2], A2[0], A2[1], A2[2], I2[0], I2[1], I2[2]], d2 = [0, 1, 2, 3, 1, 0, 3, 2, 1, 3, 0, 2], N2 = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
  function P2(t2) {
    Array.isArray(t2) || (t2 = [t2, t2, t2]);
    const e2 = new Array(12);
    for (let n2 = 0; n2 < 4; n2++)
      e2[3 * n2] = M2[n2][0] * t2[0], e2[3 * n2 + 1] = M2[n2][1] * t2[1], e2[3 * n2 + 2] = M2[n2][2] * t2[2];
    return new d$8([[O$8.POSITION, { size: 3, data: e2, exclusive: true }], [O$8.NORMAL, { size: 3, data: g2 }]], [[O$8.POSITION, d2], [O$8.NORMAL, N2]]);
  }
  s2.createGeometry = P2;
}(z$4 || (z$4 = {}));
const v$6 = m$9.createGeometry, x$4 = S$5.createGeometry, L$1 = z$4.createGeometry;
function T$8(t2, e2, n2, s2 = { uv: true }) {
  const a2 = -Math.PI, r2 = 2 * Math.PI, o2 = -Math.PI / 2, l2 = Math.PI, u2 = Math.max(3, Math.floor(e2)), c2 = Math.max(2, Math.floor(n2)), i2 = (u2 + 1) * (c2 + 1), h2 = new Float32Array(3 * i2), f2 = new Float32Array(3 * i2), O2 = new Float32Array(2 * i2), p2 = [];
  let A2 = 0;
  for (let y2 = 0; y2 <= c2; y2++) {
    const e3 = [], n3 = y2 / c2, s3 = o2 + n3 * l2, i3 = Math.cos(s3);
    for (let o3 = 0; o3 <= u2; o3++) {
      const l3 = o3 / u2, c3 = a2 + l3 * r2, p3 = Math.cos(c3) * i3, I3 = Math.sin(s3), M3 = -Math.sin(c3) * i3;
      h2[3 * A2] = p3 * t2, h2[3 * A2 + 1] = I3 * t2, h2[3 * A2 + 2] = M3 * t2, f2[3 * A2] = p3, f2[3 * A2 + 1] = I3, f2[3 * A2 + 2] = M3, O2[2 * A2] = l3, O2[2 * A2 + 1] = n3, e3.push(A2), ++A2;
    }
    p2.push(e3);
  }
  const I2 = new Array();
  for (let y2 = 0; y2 < c2; y2++)
    for (let t3 = 0; t3 < u2; t3++) {
      const e3 = p2[y2][t3], n3 = p2[y2][t3 + 1], s3 = p2[y2 + 1][t3 + 1], a3 = p2[y2 + 1][t3];
      y2 === 0 ? (I2.push(e3), I2.push(s3), I2.push(a3)) : y2 === c2 - 1 ? (I2.push(e3), I2.push(n3), I2.push(s3)) : (I2.push(e3), I2.push(n3), I2.push(s3), I2.push(s3), I2.push(a3), I2.push(e3));
    }
  const M2 = [[O$8.POSITION, I2], [O$8.NORMAL, I2]], g2 = [[O$8.POSITION, { size: 3, data: h2, exclusive: true }], [O$8.NORMAL, { size: 3, data: f2, exclusive: true }]];
  return s2.uv && (g2.push([O$8.UV0, { size: 2, data: O2, exclusive: true }]), M2.push([O$8.UV0, I2])), s2.offset && (M2[0][0] = O$8.OFFSET, g2[0][0] = O$8.OFFSET, M2.push([O$8.POSITION, new Array(I2.length).fill(0)]), g2.push([O$8.POSITION, { size: 3, data: Float64Array.from(s2.offset), exclusive: true }])), new d$8(g2, M2);
}
function R$6(t2, e2, n2) {
  const s2 = t2;
  let a2, r2;
  if (n2)
    a2 = [0, -1, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, -1, 0, 1, 0], r2 = [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 1, 5, 2, 2, 5, 3, 3, 5, 4, 4, 5, 1];
  else {
    const t3 = s2 * (1 + Math.sqrt(5)) / 2;
    a2 = [-s2, t3, 0, s2, t3, 0, -s2, -t3, 0, s2, -t3, 0, 0, -s2, t3, 0, s2, t3, 0, -s2, -t3, 0, s2, -t3, t3, 0, -s2, t3, 0, s2, -t3, 0, -s2, -t3, 0, s2], r2 = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
  }
  for (let h2 = 0; h2 < a2.length; h2 += 3)
    P$4.scale(a2, h2, t2 / P$4.length(a2, h2));
  let o2 = {};
  function l2(e3, n3) {
    e3 > n3 && ([e3, n3] = [n3, e3]);
    const s3 = e3.toString() + "." + n3.toString();
    if (o2[s3])
      return o2[s3];
    let r3 = a2.length;
    return a2.length += 3, P$4.add(a2, 3 * e3, a2, 3 * n3, a2, r3), P$4.scale(a2, r3, t2 / P$4.length(a2, r3)), r3 /= 3, o2[s3] = r3, r3;
  }
  for (let h2 = 0; h2 < e2; h2++) {
    const t3 = r2.length, e3 = new Array(4 * t3);
    for (let n3 = 0; n3 < t3; n3 += 3) {
      const t4 = r2[n3], s3 = r2[n3 + 1], a3 = r2[n3 + 2], o3 = l2(t4, s3), u3 = l2(s3, a3), c3 = l2(a3, t4), i3 = 4 * n3;
      e3[i3] = t4, e3[i3 + 1] = o3, e3[i3 + 2] = c3, e3[i3 + 3] = s3, e3[i3 + 4] = u3, e3[i3 + 5] = o3, e3[i3 + 6] = a3, e3[i3 + 7] = c3, e3[i3 + 8] = u3, e3[i3 + 9] = o3, e3[i3 + 10] = u3, e3[i3 + 11] = c3;
    }
    r2 = e3, o2 = {};
  }
  const u2 = new Float32Array(a2);
  for (let h2 = 0; h2 < u2.length; h2 += 3)
    P$4.normalize(u2, h2);
  const c2 = [[O$8.POSITION, r2], [O$8.NORMAL, r2]], i2 = [[O$8.POSITION, { size: 3, data: new Float32Array(a2), exclusive: true }], [O$8.NORMAL, { size: 3, data: u2, exclusive: true }]];
  return new d$8(i2, c2);
}
function b$3(t2, e2, n2, s2, a2, r2, o2, l2) {
  const u2 = e2 ? [e2[0], e2[1], e2[2]] : [0, 0, 0], c2 = t2 ? [t2[0], t2[1], t2[2]] : [0, 0, 1];
  r2 = r2 || [0, 0];
  const i2 = n2 ? [255 * n2[0], 255 * n2[1], 255 * n2[2], n2.length > 3 ? 255 * n2[3] : 255] : [255, 255, 255, 255], h2 = s2 != null && s2.length === 2 ? s2 : [1, 1], f2 = [[O$8.POSITION, { size: 3, data: u2, exclusive: true }], [O$8.NORMAL, { size: 3, data: c2, exclusive: true }], [O$8.UV0, { size: r2.length, data: r2 }], [O$8.COLOR, { size: 4, data: i2, exclusive: true }], [O$8.SIZE, { size: 2, data: h2 }]];
  if (a2 != null) {
    const t3 = new Float32Array([a2[0], a2[1], a2[2], a2[3]]);
    f2.push([O$8.AUXPOS1, { size: 4, data: t3 }]);
  }
  if (o2 != null) {
    const t3 = new Float32Array([o2[0], o2[1], o2[2], o2[3]]);
    f2.push([O$8.AUXPOS2, { size: 4, data: t3 }]);
  }
  return new d$8(f2, null, a$8.Point, l2);
}
function C$1(t2, e2, n2, s2, a2 = true, r2 = true) {
  let o2 = 0;
  const l2 = e2, u2 = t2;
  let i2 = r$i(0, o2, 0), h2 = r$i(0, o2 + u2, 0), f2 = r$i(0, -1, 0), O2 = r$i(0, 1, 0);
  s2 && (o2 = u2, h2 = r$i(0, 0, 0), i2 = r$i(0, o2, 0), f2 = r$i(0, 1, 0), O2 = r$i(0, -1, 0));
  const p2 = [h2, i2], A2 = [f2, O2], I2 = n2 + 2, M2 = Math.sqrt(u2 * u2 + l2 * l2);
  if (s2)
    for (let y2 = n2 - 1; y2 >= 0; y2--) {
      const t3 = y2 * (2 * Math.PI / n2), e3 = r$i(Math.cos(t3) * l2, o2, Math.sin(t3) * l2);
      p2.push(e3);
      const s3 = r$i(u2 * Math.cos(t3) / M2, -l2 / M2, u2 * Math.sin(t3) / M2);
      A2.push(s3);
    }
  else
    for (let y2 = 0; y2 < n2; y2++) {
      const t3 = y2 * (2 * Math.PI / n2), e3 = r$i(Math.cos(t3) * l2, o2, Math.sin(t3) * l2);
      p2.push(e3);
      const s3 = r$i(u2 * Math.cos(t3) / M2, l2 / M2, u2 * Math.sin(t3) / M2);
      A2.push(s3);
    }
  const g2 = new Array(), d2 = new Array();
  if (a2) {
    for (let t3 = 3; t3 < p2.length; t3++)
      g2.push(1), g2.push(t3 - 1), g2.push(t3), d2.push(0), d2.push(0), d2.push(0);
    g2.push(p2.length - 1), g2.push(2), g2.push(1), d2.push(0), d2.push(0), d2.push(0);
  }
  if (r2) {
    for (let t3 = 3; t3 < p2.length; t3++)
      g2.push(t3), g2.push(t3 - 1), g2.push(0), d2.push(t3), d2.push(t3 - 1), d2.push(1);
    g2.push(0), g2.push(2), g2.push(p2.length - 1), d2.push(1), d2.push(2), d2.push(A2.length - 1);
  }
  const N2 = new Float32Array(3 * I2);
  for (let c2 = 0; c2 < I2; c2++)
    N2[3 * c2] = p2[c2][0], N2[3 * c2 + 1] = p2[c2][1], N2[3 * c2 + 2] = p2[c2][2];
  const P2 = new Float32Array(3 * I2);
  for (let c2 = 0; c2 < I2; c2++)
    P2[3 * c2] = A2[c2][0], P2[3 * c2 + 1] = A2[c2][1], P2[3 * c2 + 2] = A2[c2][2];
  const m2 = [[O$8.POSITION, g2], [O$8.NORMAL, d2]], S2 = [[O$8.POSITION, { size: 3, data: N2, exclusive: true }], [O$8.NORMAL, { size: 3, data: P2, exclusive: true }]];
  return new d$8(S2, m2);
}
function E$6(t2, l2, u2, f2, O2, p2) {
  const A2 = f2 ? t$f(f2) : r$i(1, 0, 0), I2 = O2 ? t$f(O2) : r$i(0, 0, 0);
  p2 = p2 != null ? p2 : true;
  const M2 = n$c();
  z$5(M2, A2);
  const g2 = n$c();
  g$4(g2, M2, Math.abs(t2));
  const d2 = n$c();
  g$4(d2, g2, -0.5), u$a(d2, d2, I2);
  const N2 = r$i(0, 1, 0);
  Math.abs(1 - P$5(M2, N2)) < 0.2 && o$b(N2, 0, 0, 1);
  const P2 = n$c();
  _$4(P2, M2, N2), z$5(P2, P2), _$4(N2, P2, M2);
  const m2 = 2 * u2 + (p2 ? 2 : 0), S2 = u2 + (p2 ? 2 : 0), z2 = new Float32Array(3 * m2), v2 = new Float32Array(3 * S2), x2 = new Float32Array(2 * m2), L2 = new Array(3 * u2 * (p2 ? 4 : 2)), T2 = new Array(3 * u2 * (p2 ? 4 : 2));
  p2 && (z2[3 * (m2 - 2) + 0] = d2[0], z2[3 * (m2 - 2) + 1] = d2[1], z2[3 * (m2 - 2) + 2] = d2[2], x2[2 * (m2 - 2)] = 0, x2[2 * (m2 - 2) + 1] = 0, z2[3 * (m2 - 1) + 0] = z2[3 * (m2 - 2) + 0] + g2[0], z2[3 * (m2 - 1) + 1] = z2[3 * (m2 - 2) + 1] + g2[1], z2[3 * (m2 - 1) + 2] = z2[3 * (m2 - 2) + 2] + g2[2], x2[2 * (m2 - 1)] = 1, x2[2 * (m2 - 1) + 1] = 1, v2[3 * (S2 - 2) + 0] = -M2[0], v2[3 * (S2 - 2) + 1] = -M2[1], v2[3 * (S2 - 2) + 2] = -M2[2], v2[3 * (S2 - 1) + 0] = M2[0], v2[3 * (S2 - 1) + 1] = M2[1], v2[3 * (S2 - 1) + 2] = M2[2]);
  const R2 = (t3, e2, n2) => {
    L2[t3] = e2, T2[t3] = n2;
  };
  let b2 = 0;
  const F2 = n$c(), U2 = n$c();
  for (let e2 = 0; e2 < u2; e2++) {
    const t3 = e2 * (2 * Math.PI / u2);
    g$4(F2, N2, Math.sin(t3)), g$4(U2, P2, Math.cos(t3)), u$a(F2, F2, U2), v2[3 * e2 + 0] = F2[0], v2[3 * e2 + 1] = F2[1], v2[3 * e2 + 2] = F2[2], g$4(F2, F2, l2), u$a(F2, F2, d2), z2[3 * e2 + 0] = F2[0], z2[3 * e2 + 1] = F2[1], z2[3 * e2 + 2] = F2[2], x2[2 * e2 + 0] = e2 / u2, x2[2 * e2 + 1] = 0, z2[3 * (e2 + u2) + 0] = z2[3 * e2 + 0] + g2[0], z2[3 * (e2 + u2) + 1] = z2[3 * e2 + 1] + g2[1], z2[3 * (e2 + u2) + 2] = z2[3 * e2 + 2] + g2[2], x2[2 * (e2 + u2) + 0] = e2 / u2, x2[2 * e2 + 1] = 1;
    const n2 = (e2 + 1) % u2;
    R2(b2++, e2, e2), R2(b2++, e2 + u2, e2), R2(b2++, n2, n2), R2(b2++, n2, n2), R2(b2++, e2 + u2, e2), R2(b2++, n2 + u2, n2);
  }
  if (p2) {
    for (let t3 = 0; t3 < u2; t3++) {
      const e2 = (t3 + 1) % u2;
      R2(b2++, m2 - 2, S2 - 2), R2(b2++, t3, S2 - 2), R2(b2++, e2, S2 - 2);
    }
    for (let t3 = 0; t3 < u2; t3++) {
      const e2 = (t3 + 1) % u2;
      R2(b2++, t3 + u2, S2 - 1), R2(b2++, m2 - 1, S2 - 1), R2(b2++, e2 + u2, S2 - 1);
    }
  }
  const V2 = [[O$8.POSITION, L2], [O$8.NORMAL, T2], [O$8.UV0, L2]], j2 = [[O$8.POSITION, { size: 3, data: z2, exclusive: true }], [O$8.NORMAL, { size: 3, data: v2, exclusive: true }], [O$8.UV0, { size: 2, data: x2, exclusive: true }]];
  return new d$8(j2, V2);
}
function X$3(t2, e2, n2, s2, a2) {
  n2 = n2 || 10, s2 = s2 == null || s2, e$d(t2.length > 1);
  const r2 = [[0, 0, 0]], o2 = [], l2 = [];
  for (let u2 = 0; u2 < n2; u2++) {
    o2.push([0, -u2 - 1, -(u2 + 1) % n2 - 1]);
    const t3 = u2 / n2 * 2 * Math.PI;
    l2.push([Math.cos(t3) * e2, Math.sin(t3) * e2]);
  }
  return k$2(l2, t2, r2, o2, s2, a2);
}
function k$2(r2, u2, h2, M2, g2, d2 = r$i(0, 0, 0)) {
  const N2 = r2.length, P2 = new Float32Array(u2.length * N2 * 3 + (6 * h2.length || 0)), m2 = new Float32Array(u2.length * N2 * 3 + (h2 ? 6 : 0)), S2 = new Array(), z2 = new Array();
  let v2 = 0, x2 = 0;
  const L2 = n$c(), T2 = n$c(), R2 = n$c(), b2 = n$c(), F2 = n$c(), U2 = n$c(), V2 = n$c(), j2 = n$a(), G2 = n$c(), C2 = n$c(), E2 = n$c(), X2 = n$c(), k2 = n$c(), q2 = p$a();
  o$b(G2, 0, 1, 0), e$e(T2, u2[1], u2[0]), z$5(T2, T2), g2 ? (u$a(j2, u2[0], d2), z$5(R2, j2)) : o$b(R2, 0, 0, 1), J$3(T2, R2, G2, G2, F2, R2, K$4), r$g(b2, R2), r$g(X2, F2);
  for (let t2 = 0; t2 < h2.length; t2++)
    g$4(U2, F2, h2[t2][0]), g$4(j2, R2, h2[t2][2]), u$a(U2, U2, j2), u$a(U2, U2, u2[0]), P2[v2++] = U2[0], P2[v2++] = U2[1], P2[v2++] = U2[2];
  m2[x2++] = -T2[0], m2[x2++] = -T2[1], m2[x2++] = -T2[2];
  for (let t2 = 0; t2 < M2.length; t2++)
    S2.push(M2[t2][0] > 0 ? M2[t2][0] : -M2[t2][0] - 1 + h2.length), S2.push(M2[t2][1] > 0 ? M2[t2][1] : -M2[t2][1] - 1 + h2.length), S2.push(M2[t2][2] > 0 ? M2[t2][2] : -M2[t2][2] - 1 + h2.length), z2.push(0), z2.push(0), z2.push(0);
  let Z2 = h2.length;
  const B2 = h2.length - 1;
  for (let o2 = 0; o2 < u2.length; o2++) {
    let c2 = false;
    if (o2 > 0) {
      r$g(L2, T2), o2 < u2.length - 1 ? (e$e(T2, u2[o2 + 1], u2[o2]), z$5(T2, T2)) : c2 = true, u$a(C2, L2, T2), z$5(C2, C2), u$a(E2, u2[o2 - 1], b2), _$5(u2[o2], C2, q2);
      q$2(q2, p$b(E2, L2), j2) ? (e$e(j2, j2, u2[o2]), z$5(R2, j2), _$4(F2, C2, R2), z$5(F2, F2)) : J$3(C2, b2, X2, G2, F2, R2, K$4), r$g(b2, R2), r$g(X2, F2);
    }
    g2 && (u$a(j2, u2[o2], d2), z$5(k2, j2));
    for (let t2 = 0; t2 < N2; t2++)
      if (g$4(U2, F2, r2[t2][0]), g$4(j2, R2, r2[t2][1]), u$a(U2, U2, j2), z$5(V2, U2), m2[x2++] = V2[0], m2[x2++] = V2[1], m2[x2++] = V2[2], u$a(U2, U2, u2[o2]), P2[v2++] = U2[0], P2[v2++] = U2[1], P2[v2++] = U2[2], !c2) {
        const e2 = (t2 + 1) % N2;
        S2.push(Z2 + t2), S2.push(Z2 + N2 + t2), S2.push(Z2 + e2), S2.push(Z2 + e2), S2.push(Z2 + N2 + t2), S2.push(Z2 + N2 + e2);
        for (let t3 = 0; t3 < 6; t3++) {
          const e3 = S2.length - 6;
          z2.push(S2[e3 + t3] - B2);
        }
      }
    Z2 += N2;
  }
  const D2 = u2[u2.length - 1];
  for (let t2 = 0; t2 < h2.length; t2++)
    g$4(U2, F2, h2[t2][0]), g$4(j2, R2, h2[t2][1]), u$a(U2, U2, j2), u$a(U2, U2, D2), P2[v2++] = U2[0], P2[v2++] = U2[1], P2[v2++] = U2[2];
  const H2 = x2 / 3;
  m2[x2++] = T2[0], m2[x2++] = T2[1], m2[x2++] = T2[2];
  const Q2 = Z2 - N2;
  for (let t2 = 0; t2 < M2.length; t2++)
    S2.push(M2[t2][0] >= 0 ? Z2 + M2[t2][0] : -M2[t2][0] - 1 + Q2), S2.push(M2[t2][2] >= 0 ? Z2 + M2[t2][2] : -M2[t2][2] - 1 + Q2), S2.push(M2[t2][1] >= 0 ? Z2 + M2[t2][1] : -M2[t2][1] - 1 + Q2), z2.push(H2), z2.push(H2), z2.push(H2);
  const W2 = [[O$8.POSITION, S2], [O$8.NORMAL, z2]], Y2 = [[O$8.POSITION, { size: 3, data: P2, exclusive: true }], [O$8.NORMAL, { size: 3, data: m2, exclusive: true }]];
  return new d$8(Y2, W2);
}
function q$1(t2, e2, n2) {
  e$d(t2.length > 1, "createPolylineGeometry(): polyline needs at least 2 points"), e$d(t2[0].length === 3, "createPolylineGeometry(): malformed vertex"), e$d(e2 == null || e2.length === t2.length, "createPolylineGeometry: need same number of points and normals"), e$d(e2 == null || e2[0].length === 3, "createPolylineGeometry(): malformed normal");
  const s2 = new Float64Array(3 * t2.length), a2 = new Array(2 * (t2.length - 1));
  let r2 = 0, o2 = 0;
  for (let c2 = 0; c2 < t2.length; c2++) {
    for (let e3 = 0; e3 < 3; e3++)
      s2[r2++] = t2[c2][e3];
    c2 > 0 && (a2[o2++] = c2 - 1, a2[o2++] = c2);
  }
  const l2 = [], u2 = [];
  if (l2.push([O$8.POSITION, a2]), u2.push([O$8.POSITION, { size: 3, data: s2, exclusive: true }]), e2) {
    const n3 = new Float32Array(3 * e2.length);
    let s3 = 0;
    for (let a3 = 0; a3 < t2.length; a3++)
      for (let t3 = 0; t3 < 3; t3++)
        n3[s3++] = e2[a3][t3];
    l2.push([O$8.NORMAL, a2]), u2.push([O$8.NORMAL, { size: 3, data: n3, exclusive: true }]);
  }
  return n2 && (u2.push([O$8.COLOR, { size: 4, data: n2 }]), l2.push([O$8.COLOR, u$9(n2.length / 4)])), new d$8(u2, l2, a$8.Line);
}
function Z$4(t2, e2, n2, s2, a2 = 0) {
  const r2 = new Array(18), o2 = [[-e2, a2, s2 / 2], [n2, a2, s2 / 2], [0, t2 + a2, s2 / 2], [-e2, a2, -s2 / 2], [n2, a2, -s2 / 2], [0, t2 + a2, -s2 / 2]], l2 = [0, 1, 2, 3, 0, 2, 2, 5, 3, 1, 4, 5, 5, 2, 1, 1, 0, 3, 3, 4, 1, 4, 3, 5];
  for (let u2 = 0; u2 < 6; u2++)
    r2[3 * u2] = o2[u2][0], r2[3 * u2 + 1] = o2[u2][1], r2[3 * u2 + 2] = o2[u2][2];
  return new d$8([[O$8.POSITION, { size: 3, data: r2, exclusive: true }]], [[O$8.POSITION, l2]]);
}
function B$3(t2, e2) {
  const n2 = t2.getMutableAttribute(O$8.POSITION).data;
  for (let s2 = 0; s2 < n2.length; s2 += 3) {
    const t3 = n2[s2], a2 = n2[s2 + 1], r2 = n2[s2 + 2];
    o$b(Q$5, t3, a2, r2), O$7(Q$5, Q$5, e2), n2[s2] = Q$5[0], n2[s2 + 1] = Q$5[1], n2[s2 + 2] = Q$5[2];
  }
}
function D$2(t2, e2 = t2) {
  const n2 = t2.vertexAttributes, s2 = n2.get(O$8.POSITION).data, a2 = n2.get(O$8.NORMAL).data;
  if (a2) {
    const t3 = e2.getMutableAttribute(O$8.NORMAL).data;
    for (let e3 = 0; e3 < a2.length; e3 += 3) {
      const n3 = a2[e3 + 1];
      t3[e3 + 1] = -a2[e3 + 2], t3[e3 + 2] = n3;
    }
  }
  if (s2) {
    const t3 = e2.getMutableAttribute(O$8.POSITION).data;
    for (let e3 = 0; e3 < s2.length; e3 += 3) {
      const n3 = s2[e3 + 1];
      t3[e3 + 1] = -s2[e3 + 2], t3[e3 + 2] = n3;
    }
  }
  return e2;
}
function H$4(t2, s2, a2, o2, l2) {
  return !(Math.abs(P$5(s2, t2)) > l2) && (_$4(a2, t2, s2), z$5(a2, a2), _$4(o2, a2, t2), z$5(o2, o2), true);
}
function J$3(t2, e2, n2, s2, a2, r2, o2) {
  return H$4(t2, e2, a2, r2, o2) || H$4(t2, n2, a2, r2, o2) || H$4(t2, s2, a2, r2, o2);
}
const K$4 = 0.99619469809, Q$5 = n$c();
var p$9, s$h;
!function(o2) {
  o2[o2.Draped = 0] = "Draped", o2[o2.Screen = 1] = "Screen", o2[o2.World = 2] = "World", o2[o2.COUNT = 3] = "COUNT";
}(p$9 || (p$9 = {})), function(o2) {
  o2[o2.Center = 0] = "Center", o2[o2.Tip = 1] = "Tip", o2[o2.COUNT = 2] = "COUNT";
}(s$h || (s$h = {}));
class a$7 extends s$j {
  constructor() {
    super(...arguments), this.output = h$8.Color, this.transparencyPassType = o$d.NONE, this.occluder = false, this.hasSlicePlane = false, this.writeDepth = false, this.space = p$9.Screen, this.hideOnShortSegments = false, this.hasCap = false, this.anchor = s$h.Center, this.hasTip = false, this.vvSize = false, this.vvColor = false, this.vvOpacity = false, this.hasOccludees = false, this.hasMultipassTerrain = false, this.cullAboveGround = false;
  }
}
e$f([e$g({ count: h$8.COUNT })], a$7.prototype, "output", void 0), e$f([e$g({ count: o$d.COUNT })], a$7.prototype, "transparencyPassType", void 0), e$f([e$g()], a$7.prototype, "occluder", void 0), e$f([e$g()], a$7.prototype, "hasSlicePlane", void 0), e$f([e$g()], a$7.prototype, "writeDepth", void 0), e$f([e$g({ count: p$9.COUNT })], a$7.prototype, "space", void 0), e$f([e$g()], a$7.prototype, "hideOnShortSegments", void 0), e$f([e$g()], a$7.prototype, "hasCap", void 0), e$f([e$g({ count: s$h.COUNT })], a$7.prototype, "anchor", void 0), e$f([e$g()], a$7.prototype, "hasTip", void 0), e$f([e$g()], a$7.prototype, "vvSize", void 0), e$f([e$g()], a$7.prototype, "vvColor", void 0), e$f([e$g()], a$7.prototype, "vvOpacity", void 0), e$f([e$g()], a$7.prototype, "hasOccludees", void 0), e$f([e$g()], a$7.prototype, "hasMultipassTerrain", void 0), e$f([e$g()], a$7.prototype, "cullAboveGround", void 0), e$f([e$g({ constValue: true })], a$7.prototype, "hasVvInstancing", void 0), e$f([e$g({ constValue: true })], a$7.prototype, "hasSliceTranslatedView", void 0);
const l$6 = 8;
function s$g(s2, u2) {
  const c2 = s2.vertex;
  c2.uniforms.add(new o$e("intrinsicWidth", (e2) => e2.width)), u2.vvSize ? (s2.attributes.add(O$8.SIZEFEATUREATTRIBUTE, "float"), c2.uniforms.add(new e$h("vvSizeMinSize", (e2) => e2.vvSizeMinSize)), c2.uniforms.add(new e$h("vvSizeMaxSize", (e2) => e2.vvSizeMaxSize)), c2.uniforms.add(new e$h("vvSizeOffset", (e2) => e2.vvSizeOffset)), c2.uniforms.add(new e$h("vvSizeFactor", (e2) => e2.vvSizeFactor)), c2.code.add(n$d`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)) : (s2.attributes.add(O$8.SIZE, "float"), c2.code.add(n$d`float getSize(){
return intrinsicWidth * size;
}`)), u2.vvOpacity ? (s2.attributes.add(O$8.OPACITYFEATUREATTRIBUTE, "float"), c2.constants.add("vvOpacityNumber", "int", 8), c2.uniforms.add([new o$f("vvOpacityValues", (e2) => e2.vvOpacityValues, l$6), new o$f("vvOpacityOpacities", (e2) => e2.vvOpacityOpacities, l$6)]), c2.code.add(n$d`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)) : c2.code.add(n$d`vec4 applyOpacity( vec4 color ){
return color;
}`), u2.vvColor ? (s2.attributes.add(O$8.COLORFEATUREATTRIBUTE, "float"), c2.constants.add("vvColorNumber", "int", o$g), c2.uniforms.add(new o$f("vvColorValues", (e2) => e2.vvColorValues, o$g)), c2.uniforms.add(new e$i("vvColorColors", (e2) => e2.vvColorColors, o$g)), c2.code.add(n$d`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)) : (s2.attributes.add(O$8.COLOR, "vec4"), c2.code.add(n$d`vec4 getColor(){
return applyOpacity(color);
}`));
}
class u$6 {
  constructor(t2) {
    this._rctx = t2, this._cache = new Map();
  }
  dispose() {
    this._cache.forEach((t2) => a$9(t2.stippleTexture)), this._cache.clear();
  }
  _acquire(t2) {
    if (t$c(t2))
      return null;
    const e2 = this._patternId(t2), o2 = this._cache.get(e2);
    if (o2)
      return o2.refCount++, o2;
    const { encodedData: n2, paddedPixels: u2 } = p$8(t2), l2 = new h$7(new E$7(this._rctx, { width: u2, height: 1, internalFormat: P$6.RGBA, pixelFormat: P$6.RGBA, dataType: G$4.UNSIGNED_BYTE, wrapMode: D$3.CLAMP_TO_EDGE }, n2));
    return this._cache.set(e2, l2), l2;
  }
  release(t2) {
    if (t$c(t2))
      return;
    const e2 = this._patternId(t2), n2 = this._cache.get(e2);
    n2 && (n2.refCount--, n2.refCount === 0 && (r$d(n2.stippleTexture) && n2.stippleTexture.dispose(), this._cache.delete(e2)));
  }
  swap(t2, e2) {
    const r2 = this._acquire(e2);
    return this.release(t2), r2;
  }
  _patternId(t2) {
    return `${t2.pattern.join(",")}-r${t2.pixelRatio}`;
  }
}
class h$7 extends t$g {
  constructor(t2) {
    super(), this.stippleTexture = t2, this.refCount = 1;
  }
}
function p$8(e2) {
  const r2 = l$5(e2), o2 = 1 / e2.pixelRatio, n2 = f$b(e2), s2 = d$7(e2), i2 = (Math.floor(0.5 * (s2 - 1)) + 0.5) * o2, c2 = [];
  let a2 = 1;
  for (const t2 of r2) {
    for (let e3 = 0; e3 < t2; e3++) {
      const r3 = a2 * (Math.min(e3, t2 - 1 - e3) + 0.5) * o2 / i2 * 0.5 + 0.5;
      c2.push(r3);
    }
    a2 = -a2;
  }
  const u2 = Math.round(r2[0] / 2), h2 = [...c2.slice(u2), ...c2.slice(0, u2)], p2 = n2 + m$8, _2 = new Uint8Array(4 * p2);
  let x2 = 4;
  for (const l2 of h2)
    o$h(l2, _2, x2), x2 += 4;
  return _2.copyWithin(0, x2 - 4, x2), _2.copyWithin(x2, 4, 8), { encodedData: _2, paddedPixels: p2 };
}
function l$5(t2) {
  return t2.pattern.map((e2) => Math.round(e2 * t2.pixelRatio));
}
function f$b(t2) {
  if (t$c(t2))
    return 1;
  const e2 = l$5(t2);
  return Math.floor(e2.reduce((t3, e3) => t3 + e3));
}
function d$7(t2) {
  return l$5(t2).reduce((t3, e2) => Math.max(t3, e2));
}
const m$8 = 2;
function t$b(c2) {
  return t$c(c2) ? l$a : c2.length === 4 ? c2 : r$j(e$7, c2[0], c2[1], c2[2], 1);
}
const e$7 = n$e();
function u$5(e2, t2) {
  e2.constants.add("stippleAlphaColorDiscard", "float", 1e-3), e2.constants.add("stippleAlphaHighlightDiscard", "float", 0.5), t2.stippleEnabled ? m$7(e2, t2) : S$4(e2);
}
function m$7(e2, d2) {
  const c2 = !(d2.draped && d2.stipplePreferContinuous), { vertex: u2, fragment: m2 } = e2;
  m2.include(a$a), d2.draped || (c$d(u2, d2), u2.uniforms.add(new o$e("worldToScreenPerDistanceRatio", (e3, t2) => 1 / t2.camera.perScreenPixelRatio)), u2.code.add(n$d`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)), e2.varyings.add("vStippleDistance", "float"), d2.stippleRequiresClamp && e2.varyings.add("vStippleDistanceLimits", "vec2"), d2.stippleRequiresStretchMeasure && e2.varyings.add("vStipplePatternStretch", "float"), u2.code.add(n$d`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${x$3};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `), u2.code.add(n$d`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`), u2.code.add(n$d`
    if (segmentLengthPseudoScreen >= ${c2 ? "patternLength" : "1e4"}) {
  `), u2.uniforms.add(new o$e("pixelRatio", (e3, t2) => t2.camera.pixelRatio)), u2.code.add(n$d`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${d2.stippleRequiresStretchMeasure ? n$d`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);` : ""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `), m2.constants.add("stippleTexturePadding", "float", m$8);
  const S2 = d2.hasWebGL2Context ? e$j.None : e$j.Size;
  m2.uniforms.add(u$b("stipplePatternTexture", (e3) => e3.stippleTexture, S2)), m2.uniforms.add([new o$e("stipplePatternSDFNormalizer", (e3) => h$6(e3.stipplePattern)), new o$e("stipplePatternPixelSizeInv", (e3) => 1 / g$3(e3))]), m2.code.add(n$d`
    float padStippleTexture(float u) {
      float paddedTextureSize = ${r$k(d2, "stipplePatternTexture")}.x;
      float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;

      return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
    }
  `), m2.code.add(n$d`
    float getStippleSDF(out bool isClamped) {
      ${d2.stippleRequiresClamp ? n$d`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;` : n$d`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${d2.stippleScaleWithLineWidth ? n$d`u *= vLineSizeInv;` : ""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${d2.stippleRequiresStretchMeasure ? n$d`return (sdf - 0.5) * vStipplePatternStretch + 0.5;` : n$d`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${d2.stippleScaleWithLineWidth ? n$d`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);` : n$d`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `), d2.stippleOffColorEnabled ? (m2.uniforms.add(new e$k("stippleOffColor", (e3) => t$b(e3.stippleOffColor))), m2.code.add(n$d`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)) : m2.code.add(n$d`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`);
}
function S$4(e2) {
  e2.fragment.code.add(n$d`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`);
}
function h$6(t2) {
  return r$d(t2) ? (Math.floor(0.5 * (d$7(t2) - 1)) + 0.5) / t2.pixelRatio : 1;
}
function g$3(t2) {
  const i2 = t2.stipplePattern;
  return r$d(i2) ? f$b(t2.stipplePattern) / i2.pixelRatio : 1;
}
const x$3 = n$d.float(0.4);
const e$6 = 128, a$6 = 0.5;
function o$9(t2, o2 = e$6, c2 = o2 * a$6, s2 = 0) {
  const i2 = u$4(t2, o2, c2, s2);
  return new L$3(i2, { mipmap: false, wrap: { s: D$3.CLAMP_TO_EDGE, t: D$3.CLAMP_TO_EDGE }, width: o2, height: o2, components: 4, noUnpackFlip: true });
}
function u$4(t2, n2 = e$6, r2 = n2 * a$6, o2 = 0) {
  switch (t2) {
    case "circle":
    default:
      return c$b(n2, r2);
    case "square":
      return s$f(n2, r2);
    case "cross":
      return h$5(n2, r2, o2);
    case "x":
      return f$a(n2, r2, o2);
    case "kite":
      return i$e(n2, r2);
    case "triangle":
      return M$3(n2, r2);
    case "arrow":
      return m$6(n2, r2);
  }
}
function c$b(t2, n2) {
  const r2 = t2 / 2 - 0.5;
  return w$1(t2, T$7(r2, r2, n2 / 2));
}
function s$f(t2, n2) {
  return l$4(t2, n2, false);
}
function i$e(t2, n2) {
  return l$4(t2, n2, true);
}
function h$5(t2, n2, r2 = 0) {
  return p$7(t2, n2, false, r2);
}
function f$a(t2, n2, r2 = 0) {
  return p$7(t2, n2, true, r2);
}
function M$3(t2, n2) {
  return w$1(t2, b$2(t2 / 2, n2, n2 / 2));
}
function m$6(t2, n2) {
  const r2 = n2, e2 = n2 / 2, a2 = t2 / 2, o2 = 0.8 * r2, u2 = T$7(a2, (t2 - n2) / 2 - o2, Math.sqrt(o2 * o2 + e2 * e2)), c2 = b$2(a2, r2, e2);
  return w$1(t2, (t3, n3) => Math.max(c2(t3, n3), -u2(t3, n3)));
}
function l$4(t2, n2, r2) {
  return r2 && (n2 /= Math.SQRT2), w$1(t2, (e2, a2) => {
    let o2 = e2 - 0.5 * t2 + 0.25, u2 = 0.5 * t2 - a2 - 0.75;
    if (r2) {
      const t3 = (o2 + u2) / Math.SQRT2;
      u2 = (u2 - o2) / Math.SQRT2, o2 = t3;
    }
    return Math.max(Math.abs(o2), Math.abs(u2)) - 0.5 * n2;
  });
}
function p$7(t2, n2, r2, e2 = 0) {
  n2 -= e2, r2 && (n2 *= Math.SQRT2);
  const a2 = 0.5 * n2;
  return w$1(t2, (n3, o2) => {
    let u2, c2 = n3 - 0.5 * t2, s2 = 0.5 * t2 - o2 - 1;
    if (r2) {
      const t3 = (c2 + s2) / Math.SQRT2;
      s2 = (s2 - c2) / Math.SQRT2, c2 = t3;
    }
    return c2 = Math.abs(c2), s2 = Math.abs(s2), u2 = c2 > s2 ? c2 > a2 ? Math.sqrt((c2 - a2) * (c2 - a2) + s2 * s2) : s2 : s2 > a2 ? Math.sqrt(c2 * c2 + (s2 - a2) * (s2 - a2)) : c2, u2 -= e2 / 2, u2;
  });
}
function T$7(t2, n2, r2) {
  return (e2, a2) => {
    const o2 = e2 - t2, u2 = a2 - n2;
    return Math.sqrt(o2 * o2 + u2 * u2) - r2;
  };
}
function b$2(t2, n2, r2) {
  const e2 = Math.sqrt(n2 * n2 + r2 * r2);
  return (a2, o2) => {
    const u2 = Math.abs(a2 - t2) - r2, c2 = o2 - t2 + n2 / 2 + 0.75, s2 = (n2 * u2 + r2 * c2) / e2, i2 = -c2;
    return Math.max(s2, i2);
  };
}
function w$1(n2, r2) {
  const e2 = new Uint8Array(4 * n2 * n2);
  for (let a2 = 0; a2 < n2; a2++)
    for (let o2 = 0; o2 < n2; o2++) {
      const u2 = o2 + n2 * a2;
      let c2 = r2(o2, a2);
      c2 = c2 / n2 + 0.5, o$h(c2, e2, 4 * u2);
    }
  return e2;
}
const t$a = 64, o$8 = t$a / 2, i$d = o$8 / 5, m$5 = t$a / i$d, e$5 = 0.25;
function f$9(m2, e2) {
  return m2.fromData(`${e2}-marker`, () => o$9(e2, t$a, o$8, i$d));
}
function i$c(i2, n2) {
  const d2 = i2.vertex;
  i2.constants.add("markerSizePerLineWidth", "float", m$5), d2.uniforms.add(new o$e("pixelRatio", (e2, r2) => r2.camera.pixelRatio)), t$c(d2.uniforms.get("markerScale")) && d2.constants.add("markerScale", "float", 1), d2.code.add(n$d`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`), n2.space === p$9.World && (d2.constants.add("maxSegmentLengthFraction", "float", 0.45), d2.uniforms.add(new o$e("perRenderPixelRatio", (e2, r2) => r2.camera.perRenderPixelRatio)), d2.code.add(n$d`float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}
bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}`));
}
var r$b;
!function(o2) {
  o2[o2.BUTT = 0] = "BUTT", o2[o2.SQUARE = 1] = "SQUARE", o2[o2.ROUND = 2] = "ROUND", o2[o2.COUNT = 3] = "COUNT";
}(r$b || (r$b = {}));
class s$e extends s$j {
  constructor() {
    super(...arguments), this.output = h$8.Color, this.capType = r$b.BUTT, this.transparencyPassType = o$d.NONE, this.occluder = false, this.hasSlicePlane = false, this.hasPolygonOffset = false, this.writeDepth = false, this.draped = false, this.stippleEnabled = false, this.stippleOffColorEnabled = false, this.stippleScaleWithLineWidth = false, this.stipplePreferContinuous = true, this.roundJoins = false, this.applyMarkerOffset = false, this.vvSize = false, this.vvColor = false, this.vvOpacity = false, this.falloffEnabled = false, this.innerColorEnabled = false, this.hasOccludees = false, this.hasMultipassTerrain = false, this.cullAboveGround = false, this.wireframe = false, this.objectAndLayerIdColorInstanced = false;
  }
}
e$f([e$g({ count: h$8.COUNT })], s$e.prototype, "output", void 0), e$f([e$g({ count: r$b.COUNT })], s$e.prototype, "capType", void 0), e$f([e$g({ count: o$d.COUNT })], s$e.prototype, "transparencyPassType", void 0), e$f([e$g()], s$e.prototype, "occluder", void 0), e$f([e$g()], s$e.prototype, "hasSlicePlane", void 0), e$f([e$g()], s$e.prototype, "hasPolygonOffset", void 0), e$f([e$g()], s$e.prototype, "writeDepth", void 0), e$f([e$g()], s$e.prototype, "draped", void 0), e$f([e$g()], s$e.prototype, "stippleEnabled", void 0), e$f([e$g()], s$e.prototype, "stippleOffColorEnabled", void 0), e$f([e$g()], s$e.prototype, "stippleScaleWithLineWidth", void 0), e$f([e$g()], s$e.prototype, "stipplePreferContinuous", void 0), e$f([e$g()], s$e.prototype, "roundJoins", void 0), e$f([e$g()], s$e.prototype, "applyMarkerOffset", void 0), e$f([e$g()], s$e.prototype, "vvSize", void 0), e$f([e$g()], s$e.prototype, "vvColor", void 0), e$f([e$g()], s$e.prototype, "vvOpacity", void 0), e$f([e$g()], s$e.prototype, "falloffEnabled", void 0), e$f([e$g()], s$e.prototype, "innerColorEnabled", void 0), e$f([e$g()], s$e.prototype, "hasOccludees", void 0), e$f([e$g()], s$e.prototype, "hasMultipassTerrain", void 0), e$f([e$g()], s$e.prototype, "cullAboveGround", void 0), e$f([e$g()], s$e.prototype, "wireframe", void 0), e$f([e$g({ constValue: true })], s$e.prototype, "stippleRequiresClamp", void 0), e$f([e$g({ constValue: true })], s$e.prototype, "stippleRequiresStretchMeasure", void 0), e$f([e$g({ constValue: true })], s$e.prototype, "hasVvInstancing", void 0), e$f([e$g({ constValue: true })], s$e.prototype, "hasSliceTranslatedView", void 0), e$f([e$g()], s$e.prototype, "objectAndLayerIdColorInstanced", void 0);
const j$6 = 1;
function R$5(R2) {
  const A2 = new o$i(), { vertex: P2, fragment: F2 } = A2, z2 = R2.hasMultipassTerrain && (R2.output === h$8.Color || R2.output === h$8.Alpha);
  A2.include(t$h), A2.include(s$g, R2), A2.include(u$5, R2);
  const E2 = R2.applyMarkerOffset && !R2.draped;
  E2 && (P2.uniforms.add(new o$e("markerScale", (e2) => e2.markerScale)), A2.include(i$c, { space: p$9.World })), R2.output === h$8.Depth && A2.include(o$j, R2), A2.include(d$9, R2), v$7(P2, R2), P2.uniforms.add([new e$l("inverseProjectionMatrix", (e2, i2) => i2.camera.inverseProjectionMatrix), new e$m("nearFar", (e2, i2) => i2.camera.nearFar), new o$e("miterLimit", (e2) => e2.join !== "miter" ? 0 : e2.miterLimit), new e$k("viewport", (e2, i2) => i2.camera.fullViewport)]), P2.constants.add("LARGE_HALF_FLOAT", "float", 65500), A2.attributes.add(O$8.POSITION, "vec3"), A2.attributes.add(O$8.SUBDIVISIONFACTOR, "float"), A2.attributes.add(O$8.UV0, "vec2"), A2.attributes.add(O$8.AUXPOS1, "vec3"), A2.attributes.add(O$8.AUXPOS2, "vec3"), A2.varyings.add("vColor", "vec4"), A2.varyings.add("vpos", "vec3"), t$i(A2), z2 && A2.varyings.add("depth", "float");
  const T2 = R2.capType === r$b.ROUND, W2 = R2.stippleEnabled && R2.stippleScaleWithLineWidth || T2;
  W2 && A2.varyings.add("vLineWidth", "float");
  const V2 = R2.stippleEnabled && R2.stippleScaleWithLineWidth;
  V2 && A2.varyings.add("vLineSizeInv", "float");
  const O2 = R2.innerColorEnabled || T2;
  O2 && A2.varyings.add("vLineDistance", "float");
  const N2 = R2.stippleEnabled && T2, _2 = R2.falloffEnabled || N2;
  _2 && A2.varyings.add("vLineDistanceNorm", "float"), T2 && (A2.varyings.add("vSegmentSDF", "float"), A2.varyings.add("vReverseSegmentSDF", "float")), P2.code.add(n$d`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`), P2.code.add(n$d`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`), n$f(A2), P2.code.add(n$d`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${z2 ? "depth = pos.z;" : ""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `), P2.uniforms.add(new o$e("pixelRatio", (e2, i2) => i2.camera.pixelRatio)), P2.code.add(n$d`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${W2 ? n$d`vLineWidth = lineWidth;` : ""}
      ${V2 ? n$d`vLineSizeInv = 1.0 / lineSize;` : ""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `), E2 && P2.code.add(n$d`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`), P2.code.add(n$d`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);
  (R2.stippleEnabled || T2) && P2.code.add(n$d`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${T2 ? n$d`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);` : ""}
    `), P2.code.add(n$d`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`), R2.roundJoins ? P2.code.add(n$d`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${R2.stippleEnabled ? n$d`min(1.0, subdivisionFactor * ${n$d.float((j$6 + 2) / (j$6 + 1))})` : n$d`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `) : P2.code.add(n$d`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);
  const I2 = R2.capType !== r$b.BUTT;
  return P2.code.add(n$d`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${I2 ? n$d`capDisplacementDir = isStartVertex ? -right : left;` : ""}
    }
  `), P2.code.add(n$d`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${_2 || O2 ? n$d`float lineDistNorm = sign(uv0.y) * pos.w;` : ""}

    ${O2 ? n$d`vLineDistance = lineWidth * lineDistNorm;` : ""}
    ${_2 ? n$d`vLineDistanceNorm = lineDistNorm;` : ""}

    pos.xy += dpos;
  `), T2 && P2.code.add(n$d`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`), R2.stippleEnabled && (R2.draped ? P2.uniforms.add(new o$e("worldToScreenRatio", (e2, i2) => 1 / i2.screenToPCSRatio)) : P2.code.add(n$d`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`), P2.code.add(n$d`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`), R2.draped ? P2.code.add(n$d`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`) : P2.code.add(n$d`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`), P2.uniforms.add(new o$e("stipplePatternPixelSize", (e2) => g$3(e2))), P2.code.add(n$d`
      float patternLength = ${R2.stippleScaleWithLineWidth ? "lineSize * " : ""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)), P2.code.add(n$d`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${R2.wireframe && !R2.draped ? "pos.z -= 0.001 * pos.w;" : ""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `), z2 && A2.include(n$g, R2), A2.include(u$c, R2), F2.include(e$n), F2.code.add(n$d`
  void main() {
    discardBySlice(vpos);
    ${z2 ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
  `), R2.wireframe ? F2.code.add(n$d`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`) : (T2 && F2.code.add(n$d`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${n$d.float(t$j)}) {
        discard;
      }
    `), N2 ? F2.code.add(n$d`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${n$d.float(t$j)}, stippleCoverage);
      `) : F2.code.add(n$d`float stippleAlpha = getStippleAlpha();`), F2.uniforms.add(new e$k("intrinsicColor", (e2) => e2.color)), F2.code.add(n$d`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`), R2.innerColorEnabled && (F2.uniforms.add(new e$k("innerColor", (i2) => i$g(i2.innerColor, i2.color))), F2.uniforms.add(new o$e("innerWidth", (e2, i2) => e2.innerWidth * i2.camera.pixelRatio)), F2.code.add(n$d`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)), F2.code.add(n$d`vec4 finalColor = blendStipple(color, stippleAlpha);`), R2.falloffEnabled && (F2.uniforms.add(new o$e("falloff", (e2) => e2.falloff)), F2.code.add(n$d`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))), F2.code.add(n$d`
    if (finalColor.a < ${n$d.float(t$j)}) {
      discard;
    }

    ${R2.output === h$8.Alpha ? n$d`gl_FragColor = vec4(finalColor.a);` : ""}
    ${R2.output === h$8.Color ? n$d`gl_FragColor = highlightSlice(finalColor, vpos);` : ""}
    ${R2.output === h$8.Color && R2.transparencyPassType === o$d.Color ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
    ${R2.output === h$8.Highlight ? n$d`gl_FragColor = vec4(1.0);` : ""}
    ${R2.output === h$8.Depth ? n$d`outputDepth(linearDepth);` : ""}
    ${R2.output === h$8.ObjectAndLayerIdColor ? n$d`outputObjectAndLayerIdColor();` : ""}
  }
  `), A2;
}
const A$6 = Object.freeze(Object.defineProperty({ __proto__: null, NUM_ROUND_JOIN_SUBDIVISIONS: j$6, build: R$5 }, Symbol.toStringTag, { value: "Module" }));
const I$7 = new Map([[O$8.POSITION, 0], [O$8.SUBDIVISIONFACTOR, 1], [O$8.UV0, 2], [O$8.AUXPOS1, 3], [O$8.AUXPOS2, 4], [O$8.COLOR, 5], [O$8.COLORFEATUREATTRIBUTE, 5], [O$8.SIZE, 6], [O$8.SIZEFEATUREATTRIBUTE, 6], [O$8.OPACITYFEATUREATTRIBUTE, 7], [O$8.OBJECTANDLAYERIDCOLOR, 8]]);
class y$3 extends e$o {
  initializeProgram(e2) {
    return new o$k(e2.rctx, y$3.shader.get().build(this.configuration), I$7);
  }
  _makePipelineState(t2, i2) {
    const c2 = this.configuration, a2 = t2 === o$d.NONE, d2 = t2 === o$d.FrontFace;
    return W$2({ blending: c2.output === h$8.Color || c2.output === h$8.Alpha ? a2 ? c$e : A$8(t2) : null, depthTest: { func: l$b(t2) }, depthWrite: a2 ? c2.writeDepth && a$b : E$8(t2), colorWrite: _$6, stencilWrite: c2.hasOccludees ? e$p : null, stencilTest: c2.hasOccludees ? i2 ? o$l : f$d : null, polygonOffset: a2 || d2 ? c2.hasPolygonOffset && _$3 : _$7 });
  }
  initializePipeline() {
    const e2 = this.configuration;
    if (e2.occluder) {
      const t2 = e2.hasPolygonOffset && _$3;
      this._occluderPipelineTransparent = W$2({ blending: c$e, polygonOffset: t2, depthTest: s$k, depthWrite: null, colorWrite: _$6, stencilWrite: null, stencilTest: m$a }), this._occluderPipelineOpaque = W$2({ blending: c$e, polygonOffset: t2, depthTest: s$k, depthWrite: null, colorWrite: _$6, stencilWrite: l$c, stencilTest: P$7 }), this._occluderPipelineMaskWrite = W$2({ blending: null, polygonOffset: t2, depthTest: i$h, depthWrite: null, colorWrite: null, stencilWrite: e$p, stencilTest: o$l });
    }
    return this._occludeePipelineState = this._makePipelineState(this.configuration.transparencyPassType, true), this._makePipelineState(this.configuration.transparencyPassType, false);
  }
  get primitiveType() {
    return this.configuration.wireframe ? E$9.LINES : E$9.TRIANGLE_STRIP;
  }
  getPipelineState(e2, t2) {
    return t2 ? this._occludeePipelineState : this.configuration.occluder ? e2 === E$a.TRANSPARENT_OCCLUDER_MATERIAL ? this._occluderPipelineTransparent : e2 === E$a.OCCLUDER_MATERIAL ? this._occluderPipelineOpaque : this._occluderPipelineMaskWrite : super.getPipelineState(e2, t2);
  }
}
y$3.shader = new t$k(A$6, () => import("./RibbonLine.glsl.js"));
const _$3 = { factor: 0, units: -4 };
var z$3;
!function(e2) {
  e2[e2.LEFT_JOIN_START = -2] = "LEFT_JOIN_START", e2[e2.LEFT_JOIN_END = -1] = "LEFT_JOIN_END", e2[e2.LEFT_CAP_START = -4] = "LEFT_CAP_START", e2[e2.LEFT_CAP_END = -5] = "LEFT_CAP_END", e2[e2.RIGHT_JOIN_START = 2] = "RIGHT_JOIN_START", e2[e2.RIGHT_JOIN_END = 1] = "RIGHT_JOIN_END", e2[e2.RIGHT_CAP_START = 4] = "RIGHT_CAP_START", e2[e2.RIGHT_CAP_END = 5] = "RIGHT_CAP_END";
}(z$3 || (z$3 = {}));
class H$3 extends d$a {
  constructor(e2) {
    super(e2, new W$1()), this._configuration = new s$e(), this._vertexAttributeLocations = I$7, this._layout = this.createLayout();
  }
  isClosed(e2, t2) {
    return X$2(this.parameters, e2, t2);
  }
  getConfiguration(e2, t2) {
    this._configuration.output = e2, this._configuration.draped = t2.slot === E$a.DRAPED_MATERIAL;
    const i2 = r$d(this.parameters.stipplePattern) && e2 !== h$8.Highlight;
    return this._configuration.stippleEnabled = i2, this._configuration.stippleOffColorEnabled = i2 && r$d(this.parameters.stippleOffColor), this._configuration.stippleScaleWithLineWidth = i2 && this.parameters.stippleScaleWithLineWidth, this._configuration.stipplePreferContinuous = i2 && this.parameters.stipplePreferContinuous, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.roundJoins = this.parameters.join === "round", this._configuration.capType = this.parameters.cap, this._configuration.applyMarkerOffset = !!r$d(this.parameters.markerParameters) && Y$1(this.parameters.markerParameters), this._configuration.hasPolygonOffset = this.parameters.hasPolygonOffset, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.vvColor = this.parameters.vvColorEnabled, this._configuration.vvOpacity = this.parameters.vvOpacityEnabled, this._configuration.vvSize = this.parameters.vvSizeEnabled, this._configuration.innerColorEnabled = this.parameters.innerWidth > 0 && r$d(this.parameters.innerColor), this._configuration.falloffEnabled = this.parameters.falloff > 0, this._configuration.occluder = this.parameters.renderOccluded === o$m.OccludeAndTransparentStencil, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.hasMultipassTerrain = t2.multipassTerrain.enabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration.wireframe = this.parameters.wireframe, this._configuration;
  }
  intersect(e2, t2, i2, s2, a2, n2, o2, l2, c2) {
    r$d(c2) ? this._intersectDrapedLineGeometry(e2, s2, c2, n2, o2) : this._intersectLineGeometry(e2, t2, i2, s2, o2);
  }
  _intersectDrapedLineGeometry(e2, r2, i2, s2, a2) {
    if (!r2.options.selectionMode)
      return;
    const n2 = e2.vertexAttributes.get(O$8.POSITION).data, o2 = e2.vertexAttributes.get(O$8.SIZE);
    let l2 = this.parameters.width;
    if (this.parameters.vvSizeEnabled) {
      const r3 = e2.vertexAttributes.get(O$8.SIZEFEATUREATTRIBUTE).data[0];
      l2 *= a$c(this.parameters.vvSizeOffset[0] + r3 * this.parameters.vvSizeFactor[0], this.parameters.vvSizeMinSize[0], this.parameters.vvSizeMaxSize[0]);
    } else
      o2 && (l2 *= o2.data[0]);
    const c2 = s2[0], h2 = s2[1], u2 = (l2 / 2 + 4) * e2.screenToWorldRatio;
    let p2 = Number.MAX_VALUE, m2 = 0;
    for (let f2 = 0; f2 < n2.length - 5; f2 += 3) {
      const e3 = n2[f2], r3 = n2[f2 + 1], i3 = c2 - e3, s3 = h2 - r3, a3 = n2[f2 + 3] - e3, o3 = n2[f2 + 4] - r3, l3 = a$c((a3 * i3 + o3 * s3) / (a3 * a3 + o3 * o3), 0, 1), u3 = a3 * l3 - i3, T2 = o3 * l3 - s3, d2 = u3 * u3 + T2 * T2;
      d2 < p2 && (p2 = d2, m2 = f2 / 3);
    }
    p2 < u2 * u2 && a2(i2.dist, i2.normal, m2, false);
  }
  _intersectLineGeometry(r2, i2, m2, f2, T2) {
    if (!f2.options.selectionMode || u$d(i2))
      return;
    if (!M$4(m2))
      return void s$l.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");
    const _2 = r2.vertexAttributes, S2 = _2.get(O$8.POSITION).data;
    let O2 = this.parameters.width;
    if (this.parameters.vvSizeEnabled) {
      const e2 = _2.get(O$8.SIZEFEATUREATTRIBUTE).data[0];
      O2 *= a$c(this.parameters.vvSizeOffset[0] + e2 * this.parameters.vvSizeFactor[0], this.parameters.vvSizeMinSize[0], this.parameters.vvSizeMaxSize[0]);
    } else
      _2.has(O$8.SIZE) && (O2 *= _2.get(O$8.SIZE).data[0]);
    const b2 = f2.camera, L2 = te$2;
    a$d(L2, f2.point);
    const P2 = O2 * b2.pixelRatio / 2 + 4 * b2.pixelRatio;
    o$b(ue$3[0], L2[0] - P2, L2[1] + P2, 0), o$b(ue$3[1], L2[0] + P2, L2[1] + P2, 0), o$b(ue$3[2], L2[0] + P2, L2[1] - P2, 0), o$b(ue$3[3], L2[0] - P2, L2[1] - P2, 0);
    for (let e2 = 0; e2 < 4; e2++)
      if (!b2.unprojectFromRenderScreen(ue$3[e2], pe$2[e2]))
        return;
    j$7(b2.eye, pe$2[0], pe$2[1], me$1), j$7(b2.eye, pe$2[1], pe$2[2], fe$1), j$7(b2.eye, pe$2[2], pe$2[3], Te), j$7(b2.eye, pe$2[3], pe$2[0], de$2);
    let N2 = Number.MAX_VALUE, C2 = 0;
    const y2 = q(this.parameters, _2, r2.indices) ? S2.length - 2 : S2.length - 5;
    for (let e2 = 0; e2 < y2; e2 += 3) {
      Q$4[0] = S2[e2] + m2[12], Q$4[1] = S2[e2 + 1] + m2[13], Q$4[2] = S2[e2 + 2] + m2[14];
      const t2 = (e2 + 3) % S2.length;
      if (K$3[0] = S2[t2] + m2[12], K$3[1] = S2[t2 + 1] + m2[13], K$3[2] = S2[t2 + 2] + m2[14], R$8(me$1, Q$4) < 0 && R$8(me$1, K$3) < 0 || R$8(fe$1, Q$4) < 0 && R$8(fe$1, K$3) < 0 || R$8(Te, Q$4) < 0 && R$8(Te, K$3) < 0 || R$8(de$2, Q$4) < 0 && R$8(de$2, K$3) < 0)
        continue;
      if (b2.projectToRenderScreen(Q$4, re$2), b2.projectToRenderScreen(K$3, ie$2), re$2[2] < 0 && ie$2[2] > 0) {
        e$e($$4, Q$4, K$3);
        const e3 = b2.frustum, t3 = -R$8(e3[U$4.NEAR], Q$4) / P$5($$4, Y$2(e3[U$4.NEAR]));
        g$4($$4, $$4, t3), u$a(Q$4, Q$4, $$4), b2.projectToRenderScreen(Q$4, re$2);
      } else if (re$2[2] > 0 && ie$2[2] < 0) {
        e$e($$4, K$3, Q$4);
        const e3 = b2.frustum, t3 = -R$8(e3[U$4.NEAR], K$3) / P$5($$4, Y$2(e3[U$4.NEAR]));
        g$4($$4, $$4, t3), u$a(K$3, K$3, $$4), b2.projectToRenderScreen(K$3, ie$2);
      } else if (re$2[2] < 0 && ie$2[2] < 0)
        continue;
      re$2[2] = 0, ie$2[2] = 0;
      const r3 = M$5(b$4(re$2, ie$2, ne$2), L2);
      r3 < N2 && (N2 = r3, r$g(se$2, Q$4), r$g(ae$2, K$3), C2 = e2 / 3);
    }
    const U2 = f2.rayBegin, F2 = f2.rayEnd;
    if (N2 < P2 * P2) {
      let e2 = Number.MAX_VALUE;
      if (k$3(b$4(se$2, ae$2, ne$2), b$4(U2, F2, oe$2), ee$2)) {
        e$e(ee$2, ee$2, U2);
        const t2 = s$m(ee$2);
        g$4(ee$2, ee$2, 1 / t2), e2 = t2 / x$6(U2, F2);
      }
      T2(e2, ee$2, C2, false);
    }
  }
  computeAttachmentOrigin(e2, t2) {
    const r2 = e2.vertexAttributes;
    if (!r2)
      return false;
    const i2 = e2.indices, s2 = r2.get(O$8.POSITION);
    return f$e(s2, i2 ? i2.get(O$8.POSITION) : null, i2 && q(this.parameters, r2, i2), t2);
  }
  createLayout() {
    const e2 = T$9().vec3f(O$8.POSITION).f32(O$8.SUBDIVISIONFACTOR).vec2f(O$8.UV0).vec3f(O$8.AUXPOS1).vec3f(O$8.AUXPOS2);
    return this.parameters.vvSizeEnabled ? e2.f32(O$8.SIZEFEATUREATTRIBUTE) : e2.f32(O$8.SIZE), this.parameters.vvColorEnabled ? e2.f32(O$8.COLORFEATUREATTRIBUTE) : e2.vec4f(O$8.COLOR), this.parameters.vvOpacityEnabled && e2.f32(O$8.OPACITYFEATUREATTRIBUTE), has("enable-feature:objectAndLayerId-rendering") && e2.vec4u8(O$8.OBJECTANDLAYERIDCOLOR), e2;
  }
  createBufferWriter() {
    return new V$2(this._layout, this.parameters);
  }
  requiresSlot(e2, t2) {
    if (t2 === h$8.Color || t2 === h$8.Alpha || t2 === h$8.Highlight || t2 === h$8.Depth || t2 === h$8.ObjectAndLayerIdColor) {
      if (e2 === E$a.DRAPED_MATERIAL)
        return true;
      if (this.parameters.renderOccluded === o$m.OccludeAndTransparentStencil)
        return e2 === E$a.OPAQUE_MATERIAL || e2 === E$a.OCCLUDER_MATERIAL || e2 === E$a.TRANSPARENT_OCCLUDER_MATERIAL;
      if (t2 === h$8.Color || t2 === h$8.Alpha) {
        return e2 === (this.parameters.writeDepth ? E$a.TRANSPARENT_MATERIAL : E$a.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL);
      }
      return e2 === E$a.OPAQUE_MATERIAL;
    }
    return false;
  }
  createGLMaterial(e2) {
    return new k$1(e2);
  }
  validateParameters(e2) {
    e2.join !== "miter" && (e2.miterLimit = 0), r$d(e2.markerParameters) && (e2.markerScale = e2.markerParameters.width / e2.width);
  }
}
class k$1 extends t$l {
  constructor() {
    super(...arguments), this._stipplePattern = null;
  }
  dispose() {
    super.dispose(), this._stippleTextureRepository.release(this._stipplePattern), this._stipplePattern = null;
  }
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e2.hasOccludees });
  }
  beginSlot(e2) {
    this._output !== h$8.Color && this._output !== h$8.Alpha || this._updateOccludeeState(e2);
    const t2 = this._material.parameters.stipplePattern;
    return this._stipplePattern !== t2 && (this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern, t2)), this._stipplePattern = t2), this.ensureTechnique(y$3, e2);
  }
}
class W$1 extends v$9 {
  constructor() {
    super(...arguments), this.width = 0, this.color = _$8, this.join = "miter", this.cap = r$b.BUTT, this.miterLimit = 5, this.writeDepth = true, this.hasPolygonOffset = false, this.stippleTexture = null, this.stippleScaleWithLineWidth = false, this.stipplePreferContinuous = true, this.markerParameters = null, this.markerScale = 1, this.hasSlicePlane = false, this.vvFastUpdate = false, this.isClosed = false, this.falloff = 0, this.innerWidth = 0, this.hasOccludees = false, this.wireframe = false;
  }
}
class V$2 {
  constructor(e2, t2) {
    this._parameters = t2, this.numJoinSubdivisions = 0, this.vertexBufferLayout = e2;
    const r2 = t2.stipplePattern ? 1 : 0;
    switch (this._parameters.join) {
      case "miter":
      case "bevel":
        this.numJoinSubdivisions = r2;
        break;
      case "round":
        this.numJoinSubdivisions = j$6 + r2;
    }
  }
  _isClosed(e2) {
    return q(this._parameters, e2.vertexAttributes, e2.indices);
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    const t2 = 2, r2 = e2.indices.get(O$8.POSITION).length / 2 + 1, i2 = this._isClosed(e2);
    let s2 = i2 ? 2 : 2 * t2;
    return s2 += ((i2 ? r2 : r2 - 1) - (i2 ? 0 : 1)) * (2 * this.numJoinSubdivisions + 4), s2 += 2, this._parameters.wireframe && (s2 = 2 + 4 * (s2 - 2)), s2;
  }
  write(e2, t2, i2, s2, n2) {
    var _a;
    const o2 = le$3, l2 = ce$3, c2 = he$2, u2 = i2.vertexAttributes.get(O$8.POSITION).data, f2 = i2.indices && i2.indices.get(O$8.POSITION), T2 = (_a = i2.vertexAttributes.get(O$8.DISTANCETOSTART)) == null ? void 0 : _a.data;
    f2 && f2.length !== 2 * (u2.length / 3 - 1) && console.warn("RibbonLineMaterial does not support indices");
    let d2 = 1, _2 = 0;
    this._parameters.vvSizeEnabled ? _2 = i2.vertexAttributes.get(O$8.SIZEFEATUREATTRIBUTE).data[0] : i2.vertexAttributes.has(O$8.SIZE) && (d2 = i2.vertexAttributes.get(O$8.SIZE).data[0]);
    let A2 = [1, 1, 1, 1], E2 = 0;
    this._parameters.vvColorEnabled ? E2 = i2.vertexAttributes.get(O$8.COLORFEATUREATTRIBUTE).data[0] : i2.vertexAttributes.has(O$8.COLOR) && (A2 = i2.vertexAttributes.get(O$8.COLOR).data);
    let v2 = null;
    has("enable-feature:objectAndLayerId-rendering") && (v2 = i2.objectAndLayerIdColor);
    let S2 = 0;
    this._parameters.vvOpacityEnabled && (S2 = i2.vertexAttributes.get(O$8.OPACITYFEATUREATTRIBUTE).data[0]);
    const I2 = u2.length / 3, R2 = new Float32Array(s2.buffer), g2 = has("enable-feature:objectAndLayerId-rendering") ? new Uint8Array(s2.buffer) : null, O2 = this.vertexBufferLayout.stride / 4;
    let b2 = n2 * O2;
    const L2 = b2;
    let P2 = 0;
    const N2 = T2 ? (e3, t3, r2) => P2 = T2[r2] : (e3, t3, r2) => P2 += x$6(e3, t3), C2 = (e3, t3, i3, s3, a2, n3, o3) => {
      if (R2[b2++] = t3[0], R2[b2++] = t3[1], R2[b2++] = t3[2], R2[b2++] = s3, R2[b2++] = o3, R2[b2++] = a2, R2[b2++] = e3[0], R2[b2++] = e3[1], R2[b2++] = e3[2], R2[b2++] = i3[0], R2[b2++] = i3[1], R2[b2++] = i3[2], this._parameters.vvSizeEnabled ? R2[b2++] = _2 : R2[b2++] = d2, this._parameters.vvColorEnabled)
        R2[b2++] = E2;
      else {
        const e4 = Math.min(4 * n3, A2.length - 4);
        R2[b2++] = A2[e4 + 0], R2[b2++] = A2[e4 + 1], R2[b2++] = A2[e4 + 2], R2[b2++] = A2[e4 + 3];
      }
      this._parameters.vvOpacityEnabled && (R2[b2++] = S2), has("enable-feature:objectAndLayerId-rendering") && (r$d(v2) && (g2[4 * b2 + 0] = v2[0], g2[4 * b2 + 1] = v2[1], g2[4 * b2 + 2] = v2[2], g2[4 * b2 + 3] = v2[3]), b2++);
    };
    b2 += O2, o$b(l2, u2[0], u2[1], u2[2]), e2 && O$7(l2, l2, e2);
    const y2 = this._isClosed(i2);
    if (y2) {
      const t3 = u2.length - 3;
      o$b(o2, u2[t3], u2[t3 + 1], u2[t3 + 2]), e2 && O$7(o2, o2, e2);
    } else
      o$b(c2, u2[3], u2[4], u2[5]), e2 && O$7(c2, c2, e2), C2(l2, l2, c2, 1, z$3.LEFT_CAP_START, 0, 0), C2(l2, l2, c2, 1, z$3.RIGHT_CAP_START, 0, 0), r$g(o2, l2), r$g(l2, c2);
    const j2 = y2 ? 0 : 1, U2 = y2 ? I2 : I2 - 1;
    for (let r2 = j2; r2 < U2; r2++) {
      const t3 = (r2 + 1) % I2 * 3;
      o$b(c2, u2[t3 + 0], u2[t3 + 1], u2[t3 + 2]), e2 && O$7(c2, c2, e2), N2(o2, l2, r2), C2(o2, l2, c2, 0, z$3.LEFT_JOIN_END, r2, P2), C2(o2, l2, c2, 0, z$3.RIGHT_JOIN_END, r2, P2);
      const i3 = this.numJoinSubdivisions;
      for (let e3 = 0; e3 < i3; ++e3) {
        const t4 = (e3 + 1) / (i3 + 1);
        C2(o2, l2, c2, t4, z$3.LEFT_JOIN_END, r2, P2), C2(o2, l2, c2, t4, z$3.RIGHT_JOIN_END, r2, P2);
      }
      C2(o2, l2, c2, 1, z$3.LEFT_JOIN_START, r2, P2), C2(o2, l2, c2, 1, z$3.RIGHT_JOIN_START, r2, P2), r$g(o2, l2), r$g(l2, c2);
    }
    y2 ? (o$b(c2, u2[3], u2[4], u2[5]), e2 && O$7(c2, c2, e2), P2 = N2(o2, l2, U2), C2(o2, l2, c2, 0, z$3.LEFT_JOIN_END, j2, P2), C2(o2, l2, c2, 0, z$3.RIGHT_JOIN_END, j2, P2)) : (P2 = N2(o2, l2, U2), C2(o2, l2, l2, 0, z$3.LEFT_CAP_END, U2, P2), C2(o2, l2, l2, 0, z$3.RIGHT_CAP_END, U2, P2)), Z$3(R2, L2 + O2, R2, L2, O2);
    b2 = Z$3(R2, b2 - O2, R2, b2, O2), this._parameters.wireframe && this._addWireframeVertices(s2, L2, b2, O2);
  }
  _addWireframeVertices(e2, t2, r2, i2) {
    const s2 = new Float32Array(e2.buffer, r2 * Float32Array.BYTES_PER_ELEMENT), a2 = new Float32Array(e2.buffer, t2 * Float32Array.BYTES_PER_ELEMENT, r2 - t2);
    let n2 = 0;
    const o2 = (e3) => n2 = Z$3(a2, e3, s2, n2, i2);
    for (let l2 = 0; l2 < a2.length - 1; l2 += 2 * i2)
      o2(l2), o2(l2 + 2 * i2), o2(l2 + 1 * i2), o2(l2 + 2 * i2), o2(l2 + 1 * i2), o2(l2 + 3 * i2);
  }
}
function Z$3(e2, t2, r2, i2, s2) {
  for (let a2 = 0; a2 < s2; a2++)
    r2[i2++] = e2[t2++];
  return i2;
}
function q(e2, t2, r2) {
  return X$2(e2, t2.get(O$8.POSITION).data, r2 ? r2.get(O$8.POSITION) : null);
}
function X$2(e2, t2, r2) {
  return !!e2.isClosed && (r2 ? r2.length > 2 : t2.length > 6);
}
function Y$1(e2) {
  return e2.anchor === s$h.Tip && e2.hideOnShortSegments && e2.placement === "begin-end" && e2.worldSpace;
}
const Q$4 = n$a(), K$3 = n$a(), $$4 = n$a(), ee$2 = n$a(), te$2 = n$a(), re$2 = x$7(), ie$2 = x$7(), se$2 = n$a(), ae$2 = n$a(), ne$2 = v$8(), oe$2 = v$8(), le$3 = n$a(), ce$3 = n$a(), he$2 = n$a(), ue$3 = [x$7(), x$7(), x$7(), x$7()], pe$2 = [n$a(), n$a(), n$a(), n$a()], me$1 = p$a(), fe$1 = p$a(), Te = p$a(), de$2 = p$a();
function t$9(t2) {
  return t2.type === "point";
}
function A$5(t2, e2) {
  if (t2.type === "point")
    return F$2(t2, e2, false);
  if (l$d(t2))
    switch (t2.type) {
      case "extent":
        return F$2(t2.center, e2, false);
      case "polygon":
        return F$2(t2.centroid, e2, false);
      case "polyline":
        return F$2(M$2(t2), e2, true);
      case "mesh":
        return F$2(t2.origin, e2, false);
    }
  else
    switch (t2.type) {
      case "extent":
        return F$2(P$3(t2), e2, true);
      case "polygon":
        return F$2(k(t2), e2, true);
      case "polyline":
        return F$2(M$2(t2), e2, true);
    }
}
function M$2(t2) {
  const e2 = t2.paths[0];
  if (!e2 || e2.length === 0)
    return null;
  const r2 = u$e(e2, c$f(e2) / 2);
  return v$a(r2[0], r2[1], r2[2], t2.spatialReference);
}
function P$3(t2) {
  const e2 = isFinite(t2.zmin);
  return v$a(0.5 * (t2.xmax + t2.xmin), 0.5 * (t2.ymax + t2.ymin), e2 ? 0.5 * (t2.zmax + t2.zmin) : void 0, t2.spatialReference);
}
function k(t2) {
  const e2 = t2.rings[0];
  if (!e2 || e2.length === 0)
    return null;
  const r2 = o$n(t2.rings, t2.hasZ);
  return v$a(r2[0], r2[1], r2[2], t2.spatialReference);
}
function F$2(t2, e2, r2) {
  const n2 = r2 ? t2 : k$4(t2);
  return e2 && t2 ? pn(t2, n2, e2) ? n2 : null : n2;
}
function z$2(t2, e2, r2, n2 = 0) {
  if (t2) {
    e2 || (e2 = u$f());
    const o2 = t2;
    let i2 = 0.5 * o2.width * (r2 - 1), s2 = 0.5 * o2.height * (r2 - 1);
    return o2.width < 1e-7 * o2.height ? i2 += s2 / 20 : o2.height < 1e-7 * o2.width && (s2 += i2 / 20), r$j(e2, o2.xmin - i2 - n2, o2.ymin - s2 - n2, o2.xmax + i2 + n2, o2.ymax + s2 + n2), e2;
  }
  return null;
}
function U$3(t2, e2) {
  for (let r2 = 0; r2 < t2.geometries.length; ++r2) {
    const n2 = t2.geometries[r2].getMutableAttribute(O$8.AUXPOS1);
    n2 && n2.data[3] !== e2 && (n2.data[3] = e2, t2.geometryVertexAttrsUpdated(t2.geometryRecords[r2]));
  }
}
function B$2(e2, r2) {
  const n2 = t$m(_$8);
  return r$d(e2) && (n2[0] = e2[0], n2[1] = e2[1], n2[2] = e2[2]), r$d(r2) ? n2[3] = r2 : r$d(e2) && e2.length > 3 && (n2[3] = e2[3]), n2;
}
function I$6(t2 = l$f, r2, n2, o2 = 1) {
  const i2 = new Array(3);
  if (t$c(r2) || t$c(n2))
    i2[0] = 1, i2[1] = 1, i2[2] = 1;
  else {
    let e2, o3 = 0;
    for (let s2 = 2; s2 >= 0; s2--) {
      const u2 = t2[s2];
      let a2;
      const m2 = u2 != null, l2 = s2 === 0 && !e2 && !m2, c2 = n2[s2];
      u2 === "symbol-value" || l2 ? a2 = c2 !== 0 ? r2[s2] / c2 : 1 : m2 && u2 !== "proportional" && isFinite(u2) && (a2 = c2 !== 0 ? u2 / c2 : 1), a2 != null && (i2[s2] = a2, e2 = a2, o3 = Math.max(o3, Math.abs(a2)));
    }
    for (let t3 = 2; t3 >= 0; t3--)
      i2[t3] == null ? i2[t3] = e2 : i2[t3] === 0 && (i2[t3] = 1e-3 * o3);
  }
  for (let e2 = 2; e2 >= 0; e2--)
    i2[e2] /= o2;
  return e$q(i2);
}
function O$5(t2) {
  return t2.isPrimitive != null;
}
function S$3(t2) {
  return O$5(t2) && (t2 = [t2.width, t2.depth, t2.height]), V$1(t2) ? null : "Symbol sizes may not be negative values";
}
function V$1(t2) {
  if (Array.isArray(t2)) {
    for (const e2 of t2)
      if (!V$1(e2))
        return false;
    return true;
  }
  return t2 == null || t2 >= 0;
}
function G$2(t2, e2, r2, u2 = e$c()) {
  const a2 = t2 || 0, m2 = e2 || 0, l2 = r2 || 0;
  return a2 !== 0 && m$b(u2, u2, -a2 / 180 * Math.PI), m2 !== 0 && b$5(u2, u2, m2 / 180 * Math.PI), l2 !== 0 && l$e(u2, u2, l2 / 180 * Math.PI), u2;
}
function X$1(t2, e2, n2) {
  if (n2.minDemResolution != null)
    return n2.minDemResolution;
  const o2 = $$5(e2), i2 = I$8(t2) * o2, s2 = y$4(t2) * o2, u2 = N$2(t2) * (e2.isGeographic ? 1 : o2);
  return i2 === 0 && s2 === 0 && u2 === 0 ? n2.minDemResolutionForPoints : 0.01 * Math.max(i2, s2, u2);
}
class t$8 {
  constructor(e2, r2 = null, t2 = 0) {
    this.array = e2, this.spatialReference = r2, this.offset = t2;
  }
}
function a$5(e2) {
  return "array" in e2;
}
function i$b(t2, i2, n2 = "ground") {
  if (t$9(i2))
    return t2.getElevation(i2.x, i2.y, i2.z || 0, i2.spatialReference, n2);
  if (a$5(i2)) {
    let r2 = i2.offset;
    return t2.getElevation(i2.array[r2++], i2.array[r2++], i2.array[r2] || 0, i$g(i2.spatialReference, t2.spatialReference), n2);
  }
  return t2.getElevation(i2[0], i2[1], i2[2] || 0, t2.spatialReference, n2);
}
function f$8(e2, t2, n2, o2, r2, s2, a2, l2, c2, u2, f2) {
  const d2 = O$4[f2.mode];
  let m2, p2, g2 = 0;
  if (xn(e2, t2, n2, o2, c2.spatialReference, r2, l2))
    return d2.requiresAlignment(f2) ? (g2 = d2.applyElevationAlignmentBuffer(o2, r2, s2, a2, l2, c2, u2, f2), m2 = s2, p2 = a2) : (m2 = o2, p2 = r2), xn(m2, c2.spatialReference, p2, s2, u2.spatialReference, a2, l2) ? g2 : void 0;
}
function d$6(n2, o2, r2, i2, s2) {
  const l2 = (t$9(n2) ? n2.z : a$5(n2) ? n2.array[n2.offset + 2] : n2[2]) || 0;
  switch (r2.mode) {
    case "on-the-ground": {
      const e2 = i$g(i$b(o2, n2, "ground"), 0);
      return s2.verticalDistanceToGround = 0, s2.sampledElevation = e2, void (s2.z = e2);
    }
    case "relative-to-ground": {
      const e2 = i$g(i$b(o2, n2, "ground"), 0), a2 = r2.geometryZWithOffset(l2, i2);
      return s2.verticalDistanceToGround = a2, s2.sampledElevation = e2, void (s2.z = a2 + e2);
    }
    case "relative-to-scene": {
      const e2 = i$g(i$b(o2, n2, "scene"), 0), a2 = r2.geometryZWithOffset(l2, i2);
      return s2.verticalDistanceToGround = a2, s2.sampledElevation = e2, void (s2.z = a2 + e2);
    }
    case "absolute-height": {
      const e2 = r2.geometryZWithOffset(l2, i2), a2 = i$g(i$b(o2, n2, "ground"), 0);
      return s2.verticalDistanceToGround = e2 - a2, s2.sampledElevation = a2, void (s2.z = e2);
    }
    default:
      return n$h(r2.mode), void (s2.z = 0);
  }
}
function m$4(e2, t2, n2, o2) {
  return d$6(e2, t2, n2, o2, z$1), z$1.z;
}
function p$6(e2, t2, n2) {
  return t2 == null || n2 == null ? e2.definedChanged : t2 === "on-the-ground" && n2 === "on-the-ground" ? e2.staysOnTheGround : t2 === n2 || t2 !== "on-the-ground" && n2 !== "on-the-ground" ? x$2.UPDATE : e2.onTheGroundChanged;
}
function g$2(e2) {
  return e2 === "relative-to-ground" || e2 === "relative-to-scene";
}
function v$5(e2) {
  return e2 !== "absolute-height";
}
function h$4(e2, t2, o2, r2, i2) {
  d$6(t2, o2, i2, r2, z$1), U$3(e2, z$1.verticalDistanceToGround);
  const a2 = z$1.sampledElevation, c2 = n$9(U$2, e2.transformation);
  C[0] = t2.x, C[1] = t2.y, C[2] = z$1.z;
  return Zn(t2.spatialReference, C, c2, r2.spatialReference) ? e2.transformation = c2 : console.warn("Could not locate symbol object properly, it might be misplaced"), a2;
}
function E$5(e2, n2, o2, r2, i2, s2) {
  let a2 = 0;
  const l2 = s2.spatialReference;
  n2 *= 3, r2 *= 3;
  for (let c2 = 0; c2 < i2; ++c2) {
    const i3 = e2[n2 + 0], c3 = e2[n2 + 1], u2 = e2[n2 + 2], f2 = i$g(s2.getElevation(i3, c3, u2, l2, "ground"), 0);
    a2 += f2, o2[r2 + 0] = i3, o2[r2 + 1] = c3, o2[r2 + 2] = f2, n2 += 3, r2 += 3;
  }
  return a2 / i2;
}
function y$2(e2, n2, o2, r2, i2, s2, a2, l2) {
  let c2 = 0;
  const u2 = l2.calculateOffsetRenderUnits(a2), f2 = l2.featureExpressionInfoContext, d2 = s2.spatialReference;
  n2 *= 3, r2 *= 3;
  for (let m2 = 0; m2 < i2; ++m2) {
    const i3 = e2[n2 + 0], a3 = e2[n2 + 1], l3 = e2[n2 + 2], m3 = i$g(s2.getElevation(i3, a3, l3, d2, "ground"), 0);
    c2 += m3, o2[r2 + 0] = i3, o2[r2 + 1] = a3, o2[r2 + 2] = f2 == null ? l3 + m3 + u2 : m3 + u2, n2 += 3, r2 += 3;
  }
  return c2 / i2;
}
function A$4(e2, n2, o2, r2, i2, s2, a2, l2) {
  let c2 = 0;
  const u2 = l2.calculateOffsetRenderUnits(a2), f2 = l2.featureExpressionInfoContext, d2 = s2.spatialReference;
  n2 *= 3, r2 *= 3;
  for (let m2 = 0; m2 < i2; ++m2) {
    const i3 = e2[n2 + 0], a3 = e2[n2 + 1], l3 = e2[n2 + 2], m3 = i$g(s2.getElevation(i3, a3, l3, d2, "scene"), 0);
    c2 += m3, o2[r2 + 0] = i3, o2[r2 + 1] = a3, o2[r2 + 2] = f2 == null ? l3 + m3 + u2 : m3 + u2, n2 += 3, r2 += 3;
  }
  return c2 / i2;
}
function R$4(e2) {
  const t2 = e2.meterUnitOffset, n2 = e2.featureExpressionInfoContext;
  return t2 !== 0 || n2 != null;
}
function T$6(e2, t2, n2, o2, r2, i2, s2, a2) {
  const l2 = a2.calculateOffsetRenderUnits(s2), c2 = a2.featureExpressionInfoContext;
  t2 *= 3, o2 *= 3;
  for (let u2 = 0; u2 < r2; ++u2) {
    const r3 = e2[t2 + 0], i3 = e2[t2 + 1], s3 = e2[t2 + 2];
    n2[o2 + 0] = r3, n2[o2 + 1] = i3, n2[o2 + 2] = c2 == null ? s3 + l2 : l2, t2 += 3, o2 += 3;
  }
  return 0;
}
class j$5 {
  constructor() {
    this.verticalDistanceToGround = 0, this.sampledElevation = 0, this.z = 0;
  }
}
var x$2;
!function(e2) {
  e2[e2.NONE = 0] = "NONE", e2[e2.UPDATE = 1] = "UPDATE", e2[e2.RECREATE = 2] = "RECREATE";
}(x$2 || (x$2 = {}));
const O$4 = { "absolute-height": { applyElevationAlignmentBuffer: T$6, requiresAlignment: R$4 }, "on-the-ground": { applyElevationAlignmentBuffer: E$5, requiresAlignment: () => true }, "relative-to-ground": { applyElevationAlignmentBuffer: y$2, requiresAlignment: () => true }, "relative-to-scene": { applyElevationAlignmentBuffer: A$4, requiresAlignment: () => true } }, U$2 = e$c(), z$1 = new j$5(), C = n$a();
const c$a = s$l.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");
function o$7(e2) {
  return { cachedResult: e2.cachedResult, arcade: e2.arcade ? { func: e2.arcade.func, context: e2.arcade.modules.arcadeUtils.createExecContext(null, { sr: e2.arcade.context.spatialReference }), modules: e2.arcade.modules } : null };
}
async function u$3(e2, r2, c2, o2) {
  const a2 = e2 && e2.expression;
  if (typeof a2 != "string")
    return null;
  const u2 = m$3(a2);
  if (u2 != null)
    return { cachedResult: u2 };
  const s2 = await i$i();
  f$f(c2);
  const i2 = s2.arcadeUtils, l2 = i2.createSyntaxTree(a2);
  return i2.dependsOnView(l2) ? (o2 != null && o2.error("Expressions containing '$view' are not supported on ElevationInfo"), { cachedResult: 0 }) : { arcade: { func: i2.createFunction(l2), context: i2.createExecContext(null, { sr: r2 }), modules: s2 } };
}
function s$d(e2, t2, r2) {
  return e2.arcadeUtils.createFeature(t2.attributes, t2.geometry, r2);
}
function i$a(e2, t2) {
  if (e2 != null && !p$5(e2)) {
    if (!t2 || !e2.arcade)
      return void c$a.errorOncePerTick("Arcade support required but not provided");
    const n2 = t2;
    n2._geometry && (n2._geometry = p$c(n2._geometry)), e2.arcade.modules.arcadeUtils.updateExecContext(e2.arcade.context, t2);
  }
}
function l$3(e2) {
  if (e2 != null) {
    if (p$5(e2))
      return e2.cachedResult;
    const t2 = e2.arcade;
    let r2 = e2.arcade.modules.arcadeUtils.executeFunction(t2.func, t2.context);
    return typeof r2 != "number" && (e2.cachedResult = 0, r2 = 0), r2;
  }
  return 0;
}
function d$5(e2, t2 = false) {
  let r2 = e2 && e2.featureExpressionInfo;
  const n2 = r2 && r2.expression;
  return t2 || n2 === "0" || (r2 = null), r2;
}
const f$7 = { cachedResult: 0 };
function p$5(e2) {
  return e2.cachedResult != null;
}
function m$3(e2) {
  return e2 === "0" ? 0 : null;
}
class h$3 {
  constructor() {
    this._meterUnitOffset = 0, this._renderUnitOffset = 0, this._unit = "meters", this._metersPerElevationInfoUnit = 1, this._featureExpressionInfoContext = null, this.centerPointInElevationSR = null, this.mode = null;
  }
  get featureExpressionInfoContext() {
    return this._featureExpressionInfoContext;
  }
  get meterUnitOffset() {
    return this._meterUnitOffset;
  }
  get unit() {
    return this._unit;
  }
  set unit(t2) {
    this._unit = t2, this._metersPerElevationInfoUnit = r$l(t2);
  }
  get requiresSampledElevationInfo() {
    return this.mode !== "absolute-height";
  }
  reset() {
    this.mode = null, this._meterUnitOffset = 0, this._renderUnitOffset = 0, this._featureExpressionInfoContext = null, this.unit = "meters";
  }
  set offsetMeters(t2) {
    this._meterUnitOffset = t2, this._renderUnitOffset = 0;
  }
  set offsetElevationInfoUnits(t2) {
    this._meterUnitOffset = t2 * this._metersPerElevationInfoUnit, this._renderUnitOffset = 0;
  }
  addOffsetRenderUnits(t2) {
    this._renderUnitOffset += t2;
  }
  geometryZWithOffset(t2, e2) {
    const n2 = this.calculateOffsetRenderUnits(e2);
    return this.featureExpressionInfoContext != null ? n2 : t2 + n2;
  }
  calculateOffsetRenderUnits(t2) {
    let e2 = this._meterUnitOffset;
    const n2 = this.featureExpressionInfoContext;
    return n2 != null && (e2 += l$3(n2) * this._metersPerElevationInfoUnit), e2 / t2.unitInMeters + this._renderUnitOffset;
  }
  setFromElevationInfo(e2) {
    this.mode = e2.mode, this.unit = n$i(e2.unit) ? e2.unit : "meters", this.offsetElevationInfoUnits = i$g(e2.offset, 0);
  }
  updateFeatureExpressionInfoContext(t2, s2, i2) {
    if (t$c(t2))
      return void (this._featureExpressionInfoContext = null);
    const r2 = t2 && t2.arcade;
    r2 && r$d(s2) && r$d(i2) ? (this._featureExpressionInfoContext = o$7(t2), i$a(this._featureExpressionInfoContext, s$d(r2.modules, s2, i2))) : this._featureExpressionInfoContext = t2;
  }
  static fromElevationInfo(t2) {
    const e2 = new h$3();
    return r$d(t2) && e2.setFromElevationInfo(t2), e2;
  }
}
function n$7(n2) {
  return n2 instanceof Float32Array && n2.length >= 16;
}
function r$a(n2) {
  return Array.isArray(n2) && n2.length >= 16;
}
function t$7(t2) {
  return n$7(t2) || r$a(t2);
}
var c$9;
!function(c2) {
  c2[c2.Occluded = 0] = "Occluded", c2[c2.NotOccluded = 1] = "NotOccluded", c2[c2.Both = 2] = "Both", c2[c2.COUNT = 3] = "COUNT";
}(c$9 || (c$9 = {}));
var p$4;
function u$2(u2, v2) {
  u2.include(c$g), u2.attributes.add(O$8.POSITION, "vec3"), u2.attributes.add(O$8.NORMAL, "vec3"), u2.attributes.add(O$8.AUXPOS1, "vec4");
  const m2 = u2.vertex;
  v$7(m2, v2), c$d(m2, v2), m2.uniforms.add([new e$k("viewport", (e2, t2) => t2.camera.fullViewport), new o$e("polygonOffset", (e2) => e2.shaderPolygonOffset), new o$e("cameraGroundRelative", (e2, t2) => t2.camera.aboveGround ? 1 : -1), new o$e("renderTransparentlyOccludedHUD", (e2, o2) => o2.renderTransparentlyOccludedHUD === c$9.Occluded ? 1 : o2.renderTransparentlyOccludedHUD === c$9.NotOccluded ? 0 : 0.75), new f$g("hudVisibilityTexture", (e2, t2) => t2.hudVisibilityTexture)]), v2.hasVerticalOffset && f$h(m2), m2.constants.add("smallOffsetAngle", "float", 0.984807753012208), m2.code.add(n$d`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`), m2.code.add(n$d`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`), v2.isDraped && !v2.hasVerticalOffset || d$b(m2), v2.isDraped || (m2.uniforms.add(new o$e("perDistancePixelRatio", (e2, t2) => Math.tan(t2.camera.fovY / 2) / (t2.camera.fullViewport[2] / 2))), m2.code.add(n$d`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)), v2.screenCenterOffsetUnitsEnabled === p$4.Screen && m2.uniforms.add(new o$e("pixelRatio", (e2, t2) => t2.camera.pixelRatio)), v2.hasScreenSizePerspective && i$j(m2), m2.code.add(n$d`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${v2.isDraped ? "" : "applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${v2.hasScreenSizePerspective && (v2.hasVerticalOffset || v2.screenCenterOffsetUnitsEnabled === p$4.Screen) ? "vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);" : ""}

      ${v2.hasVerticalOffset ? v2.hasScreenSizePerspective ? "float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);" : "float verticalOffsetScreenHeight = verticalOffset.x;" : ""}

      ${v2.hasVerticalOffset ? n$d`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;` : ""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${v2.screenCenterOffsetUnitsEnabled !== p$4.Screen ? n$d`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          ` : ""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${v2.screenCenterOffsetUnitsEnabled === p$4.Screen ? v2.hasScreenSizePerspective ? "float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);" : "float centerOffsetY = centerOffset.y;" : ""}

      ${v2.screenCenterOffsetUnitsEnabled === p$4.Screen ? "posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;" : ""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `), m2.code.add(n$d`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`);
}
!function(e2) {
  e2[e2.World = 0] = "World", e2[e2.Screen = 1] = "Screen", e2[e2.COUNT = 2] = "COUNT";
}(p$4 || (p$4 = {}));
function c$8(c2) {
  const i2 = n$d`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`, o2 = n$d`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;
  c2.vertex.code.add(i2), c2.vertex.code.add(o2), c2.fragment.code.add(i2), c2.fragment.code.add(o2);
}
function a$4(a2) {
  a2.include(a$e), a2.uniforms.add([new f$g("geometryDepthTexture", (e2, r2) => r2.multipassGeometry.linearDepthTexture), new e$m("nearFar", (e2, r2) => r2.camera.nearFar)]), a2.code.add(n$d`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`);
}
class s$c {
  constructor() {
    this.enabled = false;
  }
}
function p$3(p2, l2) {
  const { vertex: d2, fragment: c2 } = p2;
  l2.hasMultipassGeometry && d2.include(a$4), l2.hasMultipassTerrain && p2.varyings.add("depth", "float"), d2.code.add(n$d`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${l2.hasMultipassGeometry ? n$d`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }` : ""}

      ${l2.hasMultipassTerrain ? "depth = projectAux.posView.z;" : ""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `), l2.hasMultipassTerrain && c2.include(a$e), l2.hasMultipassTerrain && c2.uniforms.add([...u$b("terrainDepthTexture", (e2, r2) => r2.multipassTerrain.linearDepthTexture, l2.hasWebGL2Context ? e$j.None : e$j.InvSize), new e$m("nearFar", (e2, r2) => r2.camera.nearFar)]), c2.include(a$a), c2.code.add(n$d`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${l2.hasMultipassTerrain ? n$d`
          vec2 uv = gl_FragCoord.xy;

          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = ${i$k(l2, "terrainDepthTexture", "uv")};

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }` : ""}
  }
  `);
}
function B$1(r2) {
  const l2 = new o$i(), B2 = r2.signedDistanceFieldEnabled;
  if (l2.include(c$8), l2.include(u$2, r2), l2.include(u$c, r2), r2.occlusionPass)
    return l2.include(p$3, r2), l2;
  const { vertex: T2, fragment: V2 } = l2;
  l2.include(c$g), V2.include(a$a), V2.include(e$n), l2.include(s$n, r2), l2.include(d$9, r2), l2.varyings.add("vcolor", "vec4"), l2.varyings.add("vtc", "vec2"), l2.varyings.add("vsize", "vec2"), r2.binaryHighlightOcclusionEnabled && l2.varyings.add("voccluded", "float"), T2.uniforms.add([new e$k("viewport", (e2, o2) => o2.camera.fullViewport), new e$m("screenOffset", (e2, r3) => r$m(U$1, 2 * e2.screenOffset[0] * r3.camera.pixelRatio, 2 * e2.screenOffset[1] * r3.camera.pixelRatio)), new e$m("anchorPosition", (e2) => H$2(e2)), new e$k("materialColor", (e2) => e2.color), new o$e("pixelRatio", (e2, o2) => o2.camera.pixelRatio)]), B2 && (T2.uniforms.add(new e$k("outlineColor", (e2) => e2.outlineColor)), V2.uniforms.add([new e$k("outlineColor", (e2) => _$2(e2) ? e2.outlineColor : l$a), new o$e("outlineSize", (e2) => _$2(e2) ? e2.outlineSize : 0)])), r2.hasScreenSizePerspective && (t$n(T2), i$j(T2)), (r2.debugDrawLabelBorder || r2.binaryHighlightOcclusionEnabled) && l2.varyings.add("debugBorderCoords", "vec4"), l2.attributes.add(O$8.UV0, "vec2"), l2.attributes.add(O$8.COLOR, "vec4"), l2.attributes.add(O$8.SIZE, "vec2"), l2.attributes.add(O$8.AUXPOS2, "vec4"), T2.code.add(n$d`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${r2.hasScreenSizePerspective ? n$d`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         ` : n$d`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${r2.vvSize ? "inputSize *= vvScale(auxpos2).xx;" : ""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${r2.occlusionTestEnabled || r2.binaryHighlightOcclusionEnabled ? "bool visible = testVisibilityHUD(posProj);" : ""}

      ${r2.binaryHighlightOcclusionEnabled ? "voccluded = visible ? 0.0 : 1.0;" : ""}
    `);
  const E2 = n$d`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`, M2 = r2.pixelSnappingEnabled ? B2 ? n$d`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;` : n$d`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}` : n$d`posProj += quadOffset;`;
  r2.vvColor && T2.uniforms.add([new e$i("vvColorColors", (e2) => e2.vvColorColors, o$g), new o$f("vvColorValues", (e2) => e2.vvColorValues, o$g)]), T2.uniforms.add(new e$m("textureCoordinateScaleFactor", (o2) => r$d(o2.texture) && r$d(o2.texture.descriptor.textureCoordinateScaleFactor) ? o2.texture.descriptor.textureCoordinateScaleFactor : i$l)), T2.code.add(n$d`
    ${r2.occlusionTestEnabled ? "if (visible) {" : ""}
    ${E2}
    ${r2.vvColor ? "vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;" : "vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${n$d.float(t$j)};
    ${B2 ? `alphaDiscard = alphaDiscard && outlineColor.a < ${n$d.float(t$j)};` : ""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${M2}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${r2.debugDrawLabelBorder ? "debugBorderCoords = vec4(uv01, 1.5 / combinedSize);" : ""}
    vsize = inputSize;
    ${r2.occlusionTestEnabled ? n$d`} else { vtc = vec2(0.0);
      ${r2.debugDrawLabelBorder ? "debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}" : "}"}` : ""}
  }
  `), V2.uniforms.add(new f$g("tex", (e2) => e2.texture));
  const R2 = r2.debugDrawLabelBorder ? n$d`(isBorder > 0.0 ? 0.0 : ${n$d.float(o$o)})` : n$d.float(o$o), I2 = n$d`
    ${r2.debugDrawLabelBorder ? n$d`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));` : ""}

    ${B2 ? n$d`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${n$d.float(e$6)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${R2} ||
          fillPixelColor.a + outlinePixelColor.a < ${n$d.float(t$j)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${R2}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      ` : n$d`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${R2}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${r2.debugDrawLabelBorder ? n$d`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);` : ""}
  `;
  return r2.output === h$8.Alpha && V2.code.add(n$d`
      void main() {
        ${I2}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `), r2.output === h$8.ObjectAndLayerIdColor && V2.code.add(n$d`
      void main() {
        ${I2}
        outputObjectAndLayerIdColor();
      }
      `), r2.output === h$8.Color && V2.code.add(n$d`
    void main() {
      ${I2}
      ${r2.transparencyPassType === o$d.FrontFace ? "gl_FragColor.rgb /= gl_FragColor.a;" : ""}
    }
    `), r2.output === h$8.Highlight && (l2.include(a$f, r2), V2.code.add(n$d`
    void main() {
      ${I2}
      ${r2.binaryHighlightOcclusionEnabled ? n$d`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }` : "outputHighlight();"}
    }
    `)), l2;
}
function _$2(e2) {
  return e2.outlineColor[3] > 0 && e2.outlineSize > 0;
}
function H$2(e2, o2 = U$1) {
  return e2.textureIsSignedDistanceField ? T$5(e2.anchorPosition, e2.distanceFieldBoundingBox, o2) : a$d(o2, e2.anchorPosition), o2;
}
function T$5(r2, i2, l2) {
  r$d(i2) ? r$m(l2, r2[0] * (i2[2] - i2[0]) + i2[0], r2[1] * (i2[3] - i2[1]) + i2[1]) : r$m(l2, 0, 0);
}
const U$1 = n$j(), V = Object.freeze(Object.defineProperty({ __proto__: null, build: B$1, calculateAnchorPosForRendering: H$2 }, Symbol.toStringTag, { value: "Module" }));
class b$1 extends e$o {
  initializeConfiguration(t2, i2) {
    i2.hasWebGL2Context = t2.rctx.type === r$n.WEBGL2, i2.spherical = t2.viewingMode === l$g.Global;
  }
  initializeProgram(e2) {
    return new o$k(e2.rctx, b$1.shader.get().build(this.configuration), E$b);
  }
  _setPipelineState(e2) {
    const i2 = this.configuration, r2 = e2 === o$d.NONE, o2 = e2 === o$d.FrontFace, s2 = this.configuration.hasPolygonOffset && j$4, l2 = (r2 || o2) && i2.output !== h$8.Highlight ? (i2.depthEnabled || i2.occlusionPass) && a$b : null;
    return W$2({ blending: i2.output === h$8.Color || i2.output === h$8.Alpha || i2.output === h$8.Highlight ? r2 ? P$2 : A$8(e2) : null, depthTest: { func: I$9.LEQUAL }, depthWrite: l2, colorWrite: _$6, polygonOffset: s2 });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
  get primitiveType() {
    return this.configuration.occlusionPass ? E$9.POINTS : E$9.TRIANGLES;
  }
}
b$1.shader = new t$k(V, () => import("./HUDMaterial.glsl.js"));
const j$4 = { factor: 0, units: -4 }, P$2 = s$o(R$9.ONE, R$9.ONE_MINUS_SRC_ALPHA);
class a$3 extends s$j {
  constructor() {
    super(...arguments), this.output = h$8.Color, this.screenCenterOffsetUnitsEnabled = p$4.World, this.transparencyPassType = o$d.NONE, this.spherical = false, this.occlusionTestEnabled = true, this.signedDistanceFieldEnabled = false, this.vvSize = false, this.vvColor = false, this.hasVerticalOffset = false, this.hasScreenSizePerspective = false, this.debugDrawLabelBorder = false, this.binaryHighlightOcclusionEnabled = true, this.hasSlicePlane = false, this.hasPolygonOffset = false, this.depthEnabled = true, this.pixelSnappingEnabled = true, this.isDraped = false, this.hasMultipassGeometry = false, this.hasMultipassTerrain = false, this.cullAboveGround = false, this.occlusionPass = false, this.objectAndLayerIdColorInstanced = false;
  }
}
e$f([e$g({ count: h$8.COUNT })], a$3.prototype, "output", void 0), e$f([e$g({ count: p$4.COUNT })], a$3.prototype, "screenCenterOffsetUnitsEnabled", void 0), e$f([e$g({ count: o$d.COUNT })], a$3.prototype, "transparencyPassType", void 0), e$f([e$g()], a$3.prototype, "spherical", void 0), e$f([e$g()], a$3.prototype, "occlusionTestEnabled", void 0), e$f([e$g()], a$3.prototype, "signedDistanceFieldEnabled", void 0), e$f([e$g()], a$3.prototype, "vvSize", void 0), e$f([e$g()], a$3.prototype, "vvColor", void 0), e$f([e$g()], a$3.prototype, "hasVerticalOffset", void 0), e$f([e$g()], a$3.prototype, "hasScreenSizePerspective", void 0), e$f([e$g()], a$3.prototype, "debugDrawLabelBorder", void 0), e$f([e$g()], a$3.prototype, "binaryHighlightOcclusionEnabled", void 0), e$f([e$g()], a$3.prototype, "hasSlicePlane", void 0), e$f([e$g()], a$3.prototype, "hasPolygonOffset", void 0), e$f([e$g()], a$3.prototype, "depthEnabled", void 0), e$f([e$g()], a$3.prototype, "pixelSnappingEnabled", void 0), e$f([e$g()], a$3.prototype, "isDraped", void 0), e$f([e$g()], a$3.prototype, "hasMultipassGeometry", void 0), e$f([e$g()], a$3.prototype, "hasMultipassTerrain", void 0), e$f([e$g()], a$3.prototype, "cullAboveGround", void 0), e$f([e$g()], a$3.prototype, "occlusionPass", void 0), e$f([e$g()], a$3.prototype, "objectAndLayerIdColorInstanced", void 0), e$f([e$g({ constValue: true })], a$3.prototype, "hasSliceInVertexProgram", void 0), e$f([e$g({ constValue: false })], a$3.prototype, "hasVvInstancing", void 0);
class Q$3 extends d$a {
  constructor(e2) {
    super(e2, new Ae()), this._configuration = new a$3();
  }
  getConfiguration(e2, t2) {
    return this._configuration.output = e2, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasVerticalOffset = !!this.parameters.verticalOffset, this._configuration.hasScreenSizePerspective = !!this.parameters.screenSizePerspective, this._configuration.screenCenterOffsetUnitsEnabled = this.parameters.centerOffsetUnits === "screen" ? p$4.Screen : p$4.World, this._configuration.hasPolygonOffset = this.parameters.polygonOffset, this._configuration.isDraped = this.parameters.isDraped, this._configuration.occlusionTestEnabled = this.parameters.occlusionTest, this._configuration.pixelSnappingEnabled = this.parameters.pixelSnappingEnabled, this._configuration.signedDistanceFieldEnabled = this.parameters.textureIsSignedDistanceField, this._configuration.vvSize = !!this.parameters.vvSizeEnabled, this._configuration.vvColor = !!this.parameters.vvColorEnabled, this._configuration.occlusionPass = t2.slot === E$a.OCCLUSION_PIXELS && this.parameters.occlusionTest && (e2 === h$8.Color || e2 === h$8.Alpha), e2 === h$8.Color && (this._configuration.debugDrawLabelBorder = !!this.parameters.debugDrawLabelBorder), e2 === h$8.Highlight && (this._configuration.binaryHighlightOcclusionEnabled = this.parameters.binaryHighlightOcclusion), this._configuration.depthEnabled = this.parameters.depthEnabled, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.hasMultipassGeometry = t2.multipassGeometry.enabled, this._configuration.hasMultipassTerrain = t2.multipassTerrain.enabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e2, r2, s2, i2, a2, n2, o2, c2, l2) {
    r$d(l2) ? this._intersectDrapedHudGeometry(e2, n2, o2, c2, l2) : this._intersectHudGeometry(e2, r2, s2, i2, o2, c2);
  }
  _intersectDrapedHudGeometry(e2, r2, s2, i2, a2) {
    const n2 = e2.vertexAttributes.get(O$8.POSITION), o2 = e2.vertexAttributes.get(O$8.SIZE), c2 = this.parameters, l2 = H$2(c2);
    let f2 = 1, u2 = 1;
    if (r$d(i2)) {
      const e3 = i2(me);
      f2 = e3[0], u2 = e3[5];
    }
    f2 *= e2.screenToWorldRatio, u2 *= e2.screenToWorldRatio;
    const h2 = Oe * e2.screenToWorldRatio;
    for (let t2 = 0; t2 < n2.data.length / n2.size; t2++) {
      const i3 = t2 * n2.size, p2 = n2.data[i3], d2 = n2.data[i3 + 1], m2 = t2 * o2.size;
      let g2;
      Se[0] = o2.data[m2] * f2, Se[1] = o2.data[m2 + 1] * u2, c2.textureIsSignedDistanceField && (g2 = c2.outlineSize * e2.screenToWorldRatio / 2), re$1(r2, p2, d2, Se, h2, g2, c2, l2) && s2(a2.dist, a2.normal, -1, false);
    }
  }
  _intersectHudGeometry(e2, r2, i2, n2, o2, c2) {
    if (!n2.options.selectionMode || !n2.options.hud || u$d(r2))
      return;
    const l2 = this.parameters;
    let S2 = 1, v2 = 1;
    if (a$g(fe, i2), r$d(c2)) {
      const e3 = c2(me);
      S2 = e3[0], v2 = e3[5], te$1(fe);
    }
    const A2 = e2.vertexAttributes.get(O$8.POSITION), P2 = e2.vertexAttributes.get(O$8.SIZE), x2 = e2.vertexAttributes.get(O$8.NORMAL), y2 = e2.vertexAttributes.get(O$8.AUXPOS1);
    e$d(A2.size >= 3);
    const I2 = n2.point, _2 = n2.camera, C2 = H$2(l2);
    S2 *= _2.pixelRatio, v2 *= _2.pixelRatio;
    const j2 = this.parameters.centerOffsetUnits === "screen";
    for (let t2 = 0; t2 < A2.data.length / A2.size; t2++) {
      const e3 = t2 * A2.size;
      o$b(ae$1, A2.data[e3], A2.data[e3 + 1], A2.data[e3 + 2]), O$7(ae$1, ae$1, i2);
      const r3 = t2 * P2.size;
      Se[0] = P2.data[r3] * S2, Se[1] = P2.data[r3 + 1] * v2, O$7(ae$1, ae$1, _2.viewMatrix);
      const s2 = t2 * y2.size;
      if (o$b(pe$1, y2.data[s2 + 0], y2.data[s2 + 1], y2.data[s2 + 2]), !j2 && (ae$1[0] += pe$1[0], ae$1[1] += pe$1[1], pe$1[2] !== 0)) {
        const e4 = pe$1[2];
        z$5(pe$1, ae$1), e$e(ae$1, ae$1, g$4(pe$1, pe$1, e4));
      }
      const c3 = t2 * x2.size;
      if (o$b(ne$1, x2.data[c3], x2.data[c3 + 1], x2.data[c3 + 2]), this._normalAndViewAngle(ne$1, fe, _2, de$1), this._applyVerticalOffsetTransformationView(ae$1, de$1, _2, se$1), _2.applyProjection(ae$1, oe$1), oe$1[0] > -1) {
        oe$1[0] = Math.floor(oe$1[0]), oe$1[1] = Math.floor(oe$1[1]), j2 && (pe$1[0] || pe$1[1]) && (oe$1[0] += pe$1[0], pe$1[1] !== 0 && (oe$1[1] += o$p(pe$1[1], se$1.factorAlignment)), _2.unapplyProjection(oe$1, ae$1)), oe$1[0] += this.parameters.screenOffset[0], oe$1[1] += this.parameters.screenOffset[1], f$i(Se, se$1.factor, Se);
        const e4 = ge * _2.pixelRatio;
        let t3;
        if (l2.textureIsSignedDistanceField && (t3 = l2.outlineSize * _2.pixelRatio / 2), re$1(I2, oe$1[0], oe$1[1], Se, e4, t3, l2, C2)) {
          const e5 = n2.ray;
          if (O$7(le$2, ae$1, h$9(he$1, _2.viewMatrix)), oe$1[0] = I2[0], oe$1[1] = I2[1], _2.unprojectFromRenderScreen(oe$1, ae$1)) {
            const t4 = n$a();
            r$g(t4, e5.direction);
            const r4 = 1 / s$m(t4);
            g$4(t4, t4, r4);
            o2(x$6(e5.origin, ae$1) * r4, t4, -1, true, 1, le$2);
          }
        }
      }
    }
  }
  computeAttachmentOrigin(e2, t2) {
    const r2 = e2.vertexAttributes;
    if (!r2)
      return false;
    const s2 = r2.get(O$8.POSITION), i2 = e2.indices.get(O$8.POSITION);
    return a$h(s2, i2, t2);
  }
  createBufferWriter() {
    return new xe(this);
  }
  _normalAndViewAngle(e2, t2, r2, i2) {
    return t$7(t2) && (t2 = a$g(ue$2, t2)), S$6(i2.normal, e2, t2), O$7(i2.normal, i2.normal, r2.viewInverseTransposeMatrix), i2.cosAngle = P$5(ce$2, ve), i2;
  }
  _updateScaleInfo(e2, r2, s2) {
    const i2 = this.parameters;
    r$d(i2.screenSizePerspective) ? d$c(s2, r2, i2.screenSizePerspective, e2.factor) : (e2.factor.scale = 1, e2.factor.factor = 0, e2.factor.minPixelSize = 0, e2.factor.paddingPixels = 0), r$d(i2.screenSizePerspectiveAlignment) ? d$c(s2, r2, i2.screenSizePerspectiveAlignment, e2.factorAlignment) : (e2.factorAlignment.factor = e2.factor.factor, e2.factorAlignment.scale = e2.factor.scale, e2.factorAlignment.minPixelSize = e2.factor.minPixelSize, e2.factorAlignment.paddingPixels = e2.factor.paddingPixels);
  }
  applyShaderOffsetsView(e2, t2, r2, s2, i2, a2, n2) {
    const o2 = this._normalAndViewAngle(t2, r2, i2, de$1);
    return this._applyVerticalGroundOffsetView(e2, o2, i2, n2), this._applyVerticalOffsetTransformationView(n2, o2, i2, a2), this._applyPolygonOffsetView(n2, o2, s2[3], i2, n2), this._applyCenterOffsetView(n2, s2, n2), n2;
  }
  applyShaderOffsetsNDC(e2, r2, s2, i2, a2) {
    return this._applyCenterOffsetNDC(e2, r2, s2, i2), r$d(a2) && r$g(a2, i2), this._applyPolygonOffsetNDC(i2, r2, s2, i2), i2;
  }
  _applyPolygonOffsetView(t2, r2, s2, i2, a2) {
    const n2 = i2.aboveGround ? 1 : -1;
    let o2 = Math.sign(s2);
    o2 === 0 && (o2 = n2);
    const c2 = n2 * o2;
    if (this.parameters.shaderPolygonOffset <= 0)
      return r$g(a2, t2);
    const l2 = a$c(Math.abs(r2.cosAngle), 0.01, 1), f2 = 1 - Math.sqrt(1 - l2 * l2) / l2 / i2.viewport[2];
    return g$4(a2, t2, c2 > 0 ? f2 : 1 / f2), a2;
  }
  _applyVerticalGroundOffsetView(e2, t2, r2, s2) {
    const i2 = s$m(e2), a2 = r2.aboveGround ? 1 : -1, n2 = 0.5 * r2.computeRenderPixelSizeAtDist(i2), o2 = g$4(ae$1, t2.normal, a2 * n2);
    return u$a(s2, e2, o2), s2;
  }
  _applyVerticalOffsetTransformationView(e2, t2, s2, i2) {
    const a2 = this.parameters;
    if (!a2.verticalOffset || !a2.verticalOffset.screenLength) {
      if (a2.screenSizePerspective || a2.screenSizePerspectiveAlignment) {
        const r2 = s$m(e2);
        this._updateScaleInfo(i2, r2, t2.cosAngle);
      } else
        i2.factor.scale = 1, i2.factorAlignment.scale = 1;
      return e2;
    }
    const n2 = s$m(e2), o2 = i$g(a2.screenSizePerspectiveAlignment, a2.screenSizePerspective), c2 = L$4(s2, n2, a2.verticalOffset, t2.cosAngle, o2);
    return this._updateScaleInfo(i2, n2, t2.cosAngle), g$4(t2.normal, t2.normal, c2), u$a(e2, e2, t2.normal);
  }
  _applyCenterOffsetView(e2, t2, r2) {
    const s2 = this.parameters.centerOffsetUnits !== "screen";
    return r2 !== e2 && r$g(r2, e2), s2 && (r2[0] += t2[0], r2[1] += t2[1], t2[2] && (z$5(ne$1, r2), u$a(r2, r2, g$4(ne$1, ne$1, t2[2])))), r2;
  }
  _applyCenterOffsetNDC(e2, t2, r2, s2) {
    const i2 = this.parameters.centerOffsetUnits !== "screen";
    return s2 !== e2 && r$g(s2, e2), i2 || (s2[0] += t2[0] / r2.fullWidth * 2, s2[1] += t2[1] / r2.fullHeight * 2), s2;
  }
  _applyPolygonOffsetNDC(e2, t2, r2, s2) {
    const i2 = this.parameters.shaderPolygonOffset;
    if (e2 !== s2 && r$g(s2, e2), i2) {
      const e3 = r2.aboveGround ? 1 : -1, a2 = e3 * Math.sign(t2[3]);
      s2[2] -= (a2 || e3) * i2;
    }
    return s2;
  }
  requiresSlot(e2, t2) {
    if (t2 === h$8.Color || t2 === h$8.Alpha || t2 === h$8.Highlight || t2 === h$8.ObjectAndLayerIdColor) {
      if (e2 === E$a.DRAPED_MATERIAL)
        return true;
      const { drawInSecondSlot: t3, occlusionTest: r2 } = this.parameters;
      return e2 === (t3 ? E$a.LABEL_MATERIAL : E$a.HUD_MATERIAL) || r2 && e2 === E$a.OCCLUSION_PIXELS;
    }
    return false;
  }
  createGLMaterial(e2) {
    return new $$3(e2);
  }
  calculateRelativeScreenBounds(e2, t2, r2 = u$f()) {
    return ee$1(this.parameters, e2, t2, r2), r2[2] = r2[0] + e2[0], r2[3] = r2[1] + e2[1], r2;
  }
}
class $$3 extends h$a {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, e2), e2.material.parameters));
  }
  selectProgram(e2) {
    return this.ensureTechnique(b$1, e2);
  }
  beginSlot(e2) {
    return this.updateTexture(this._material.parameters.textureId), this._material.setParameters(this.textureBindParameters), this.selectProgram(e2);
  }
}
function ee$1(e2, t2, r2, s2 = ie$1) {
  return a$d(s2, e2.anchorPosition), s2[0] *= -t2[0], s2[1] *= -t2[1], s2[0] += e2.screenOffset[0] * r2, s2[1] += e2.screenOffset[1] * r2, s2;
}
function te$1(e2) {
  const t2 = e2[0], r2 = e2[1], s2 = e2[2], i2 = e2[3], a2 = e2[4], n2 = e2[5], o2 = e2[6], c2 = e2[7], l2 = e2[8], f2 = 1 / Math.sqrt(t2 * t2 + r2 * r2 + s2 * s2), u2 = 1 / Math.sqrt(i2 * i2 + a2 * a2 + n2 * n2), h2 = 1 / Math.sqrt(o2 * o2 + c2 * c2 + l2 * l2);
  return e2[0] = t2 * f2, e2[1] = r2 * f2, e2[2] = s2 * f2, e2[3] = i2 * u2, e2[4] = a2 * u2, e2[5] = n2 * u2, e2[6] = o2 * h2, e2[7] = c2 * h2, e2[8] = l2 * h2, e2;
}
function re$1(e2, r2, s2, i2, a2, n2, o2, c2) {
  let l2 = r2 - a2 - (c2[0] > 0 ? i2[0] * c2[0] : 0), f2 = l2 + i2[0] + 2 * a2, u2 = s2 - a2 - (c2[1] > 0 ? i2[1] * c2[1] : 0), h2 = u2 + i2[1] + 2 * a2;
  const p2 = o2.distanceFieldBoundingBox;
  return o2.textureIsSignedDistanceField && r$d(p2) && (l2 += i2[0] * p2[0], u2 += i2[1] * p2[1], f2 -= i2[0] * (1 - p2[2]), h2 -= i2[1] * (1 - p2[3]), l2 -= n2, f2 += n2, u2 -= n2, h2 += n2), e2[0] > l2 && e2[0] < f2 && e2[1] > u2 && e2[1] < h2;
}
const se$1 = { factor: { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 }, factorAlignment: { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 } }, ie$1 = n$j(), ae$1 = n$a(), ne$1 = n$a(), oe$1 = n$e(), ce$2 = n$a(), le$2 = n$a(), fe = e$r(), ue$2 = e$r(), he$1 = e$c(), pe$1 = n$a(), de$1 = { normal: ce$2, cosAngle: 0 }, me = e$c(), ge = 1, Oe = 2, Se = [0, 0], ve = r$h(0, 0, 1);
class Ae extends o$q {
  constructor() {
    super(...arguments), this.renderOccluded = o$m.Occlude, this.color = r$o(1, 1, 1, 1), this.texCoordScale = [1, 1], this.polygonOffset = false, this.anchorPosition = r$p(0.5, 0.5), this.screenOffset = [0, 0], this.shaderPolygonOffset = 1e-5, this.textureIsSignedDistanceField = false, this.outlineColor = r$o(1, 1, 1, 1), this.outlineSize = 0, this.vvSizeEnabled = false, this.vvSizeMinSize = [1, 1, 1], this.vvSizeMaxSize = [100, 100, 100], this.vvSizeOffset = [0, 0, 0], this.vvSizeFactor = [1, 1, 1], this.vvColorEnabled = false, this.vvColorValues = [0, 0, 0, 0, 0, 0, 0, 0], this.vvColorColors = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], this.hasSlicePlane = false, this.pixelSnappingEnabled = true, this.occlusionTest = true, this.binaryHighlightOcclusion = true, this.debugDrawLabelBorder = false, this.centerOffsetUnits = "world", this.drawInSecondSlot = false, this.depthEnabled = true, this.isDraped = false;
  }
}
const be = T$9().vec3f(O$8.POSITION).vec3f(O$8.NORMAL).vec2f(O$8.UV0).vec4u8(O$8.COLOR).vec2f(O$8.SIZE).vec4f(O$8.AUXPOS1).vec4f(O$8.AUXPOS2), Pe = be.clone().vec4u8(O$8.OBJECTANDLAYERIDCOLOR);
class xe {
  constructor(e2) {
    this._material = e2, this.vertexBufferLayout = has("enable-feature:objectAndLayerId-rendering") ? Pe : be;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return 6 * e2.indices.get(O$8.POSITION).length;
  }
  write(e2, r2, s2, i2, a2) {
    y$5(s2.indices.get(O$8.POSITION), s2.vertexAttributes.get(O$8.POSITION).data, e2, i2.position, a2, 6), B$4(s2.indices.get(O$8.NORMAL), s2.vertexAttributes.get(O$8.NORMAL).data, r2, i2.normal, a2, 6);
    {
      const e3 = s2.vertexAttributes.get(O$8.UV0).data;
      let t2, r3, n2, o2;
      if (e3 == null || e3.length < 4) {
        const e4 = this._material.parameters;
        t2 = 0, r3 = 0, n2 = e4.texCoordScale[0], o2 = e4.texCoordScale[1];
      } else
        t2 = e3[0], r3 = e3[1], n2 = e3[2], o2 = e3[3];
      n2 = Math.min(1.99999, n2 + 1), o2 = Math.min(1.99999, o2 + 1);
      const c2 = s2.indices.get(O$8.POSITION).length, l2 = i2.uv0;
      let f2 = a2;
      for (let s3 = 0; s3 < c2; ++s3)
        l2.set(f2, 0, t2), l2.set(f2, 1, r3), f2 += 1, l2.set(f2, 0, n2), l2.set(f2, 1, r3), f2 += 1, l2.set(f2, 0, n2), l2.set(f2, 1, o2), f2 += 1, l2.set(f2, 0, n2), l2.set(f2, 1, o2), f2 += 1, l2.set(f2, 0, t2), l2.set(f2, 1, o2), f2 += 1, l2.set(f2, 0, t2), l2.set(f2, 1, r3), f2 += 1;
    }
    h$b(s2.indices.get(O$8.COLOR), s2.vertexAttributes.get(O$8.COLOR).data, 4, i2.color, a2, 6);
    {
      const e3 = s2.indices.get(O$8.SIZE), t2 = s2.vertexAttributes.get(O$8.SIZE).data, r3 = e3.length, n2 = i2.size;
      let o2 = a2;
      for (let s3 = 0; s3 < r3; ++s3) {
        const r4 = t2[2 * e3[s3]], i3 = t2[2 * e3[s3] + 1];
        for (let e4 = 0; e4 < 6; ++e4)
          n2.set(o2, 0, r4), n2.set(o2, 1, i3), o2 += 1;
      }
    }
    if (s2.indices.get(O$8.AUXPOS1) && s2.vertexAttributes.get(O$8.AUXPOS1) && u$g(s2.indices.get(O$8.AUXPOS1), s2.vertexAttributes.get(O$8.AUXPOS1).data, i2.auxpos1, a2, 6), s2.indices.get(O$8.AUXPOS2) && s2.vertexAttributes.get(O$8.AUXPOS2) && u$g(s2.indices.get(O$8.AUXPOS2), s2.vertexAttributes.get(O$8.AUXPOS2).data, i2.auxpos2, a2, 6), r$d(s2.objectAndLayerIdColor) && s2.objectAndLayerIdColor.length === 4) {
      if (s2.indices.get(O$8.POSITION)) {
        const e3 = s2.indices.get(O$8.POSITION).length, t2 = i2.getField(O$8.OBJECTANDLAYERIDCOLOR, x$8);
        b$6(s2.objectAndLayerIdColor, t2, e3, a2, 6);
      }
    }
  }
}
const O$3 = T$9().vec3f(O$8.POSITION), f$6 = T$9().vec3f(O$8.POSITION).vec2f(O$8.UV0), u$1 = T$9().vec3f(O$8.POSITION).vec4u8(O$8.COLOR);
T$9().vec3f(O$8.POSITION).vec4u8(O$8.OBJECTANDLAYERIDCOLOR);
T$9().vec3f(O$8.POSITION).vec2f(O$8.UV0).vec4u8(O$8.OBJECTANDLAYERIDCOLOR);
const o$6 = T$9().vec3f(O$8.POSITION).vec4u8(O$8.COLOR).vec4u8(O$8.OBJECTANDLAYERIDCOLOR);
class v$4 {
  constructor(e2) {
    this.vertexBufferLayout = e2;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return e2.indices.get(O$8.POSITION).length;
  }
  write(e2, t2, O2, f2, u2) {
    m$c(O2, this.vertexBufferLayout, e2, t2, f2, u2);
  }
}
function v$3(v2) {
  const f2 = new o$i(), { vertex: C2, fragment: y2 } = f2, j2 = v2.output === h$8.Depth, L2 = v2.hasMultipassTerrain && (v2.output === h$8.Color || v2.output === h$8.Alpha);
  return v$7(C2, v2), f2.include(r$q, v2), f2.include(e$s, v2), f2.include(d$9, v2), f2.attributes.add(O$8.POSITION, "vec3"), f2.varyings.add("vpos", "vec3"), L2 && f2.varyings.add("depth", "float"), j2 && (f2.include(o$j, v2), i$m(f2), t$i(f2)), C2.code.add(n$d`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${L2 ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
      gl_Position = ${j2 ? n$d`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);` : n$d`transformPosition(proj, view, vpos);`}
    }
  `), f2.include(u$c, v2), L2 && f2.include(n$g, v2), y2.include(e$n), y2.uniforms.add(new e$k("eColor", (e2) => e2.color)), v2.output === h$8.Highlight && f2.include(a$f, v2), y2.code.add(n$d`
  void main() {
    discardBySlice(vpos);
    ${L2 ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
    vec4 fColor = ${v2.hasVertexColors ? "vColor * eColor;" : "eColor;"}

    if (fColor.a < ${n$d.float(t$j)}) {
      discard;
    }

    ${v2.output === h$8.Alpha ? n$d`gl_FragColor = vec4(fColor.a);` : ""}

    ${v2.output === h$8.Color ? n$d`gl_FragColor = highlightSlice(fColor, vpos); ${v2.transparencyPassType === o$d.Color ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}` : ""}
    ${v2.output === h$8.Highlight ? n$d`outputHighlight();` : ""};
    ${v2.output === h$8.Depth ? n$d`outputDepth(linearDepth);` : ""};
    ${v2.output === h$8.ObjectAndLayerIdColor ? n$d`outputObjectAndLayerIdColor();` : ""}
  }
  `), f2;
}
const f$5 = Object.freeze(Object.defineProperty({ __proto__: null, build: v$3 }, Symbol.toStringTag, { value: "Module" }));
class j$3 extends e$o {
  initializeConfiguration(e2, t2) {
    t2.hasWebGL2Context = e2.rctx.type === r$n.WEBGL2;
  }
  initializeProgram(e2) {
    return new o$k(e2.rctx, j$3.shader.get().build(this.configuration), E$b);
  }
  _createPipeline(t2, r2) {
    const i2 = this.configuration, a2 = t2 === o$d.NONE, f2 = t2 === o$d.FrontFace;
    return W$2({ blending: i2.output !== h$8.Color && i2.output !== h$8.Alpha || !i2.transparent ? null : a2 ? c$e : A$8(t2), culling: h$c(i2.cullFace), depthTest: { func: l$b(t2) }, depthWrite: a2 || f2 ? i2.writeDepth && a$b : null, colorWrite: _$6, stencilWrite: i2.hasOccludees ? e$p : null, stencilTest: i2.hasOccludees ? r2 ? o$l : f$d : null, polygonOffset: a2 || f2 ? i2.polygonOffset && y$1 : a$i(i2.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._createPipeline(this.configuration.transparencyPassType, true), this._createPipeline(this.configuration.transparencyPassType, false);
  }
  getPipelineState(e2, t2) {
    return t2 ? this._occludeePipelineState : super.getPipelineState(e2, t2);
  }
}
j$3.shader = new t$k(f$5, () => import("./ColorMaterial.glsl.js"));
const y$1 = { factor: 1, units: 1 };
class p$2 extends s$j {
  constructor() {
    super(...arguments), this.output = h$8.Color, this.cullFace = n$k.None, this.hasSlicePlane = false, this.hasVertexColors = false, this.transparent = false, this.polygonOffset = false, this.enableOffset = true, this.writeDepth = true, this.hasOccludees = false, this.transparencyPassType = o$d.NONE, this.hasMultipassTerrain = false, this.cullAboveGround = false, this.objectAndLayerIdColorInstanced = false;
  }
}
e$f([e$g({ count: h$8.COUNT })], p$2.prototype, "output", void 0), e$f([e$g({ count: n$k.COUNT })], p$2.prototype, "cullFace", void 0), e$f([e$g()], p$2.prototype, "hasSlicePlane", void 0), e$f([e$g()], p$2.prototype, "hasVertexColors", void 0), e$f([e$g()], p$2.prototype, "transparent", void 0), e$f([e$g()], p$2.prototype, "polygonOffset", void 0), e$f([e$g()], p$2.prototype, "enableOffset", void 0), e$f([e$g()], p$2.prototype, "writeDepth", void 0), e$f([e$g()], p$2.prototype, "hasOccludees", void 0), e$f([e$g({ count: o$d.COUNT })], p$2.prototype, "transparencyPassType", void 0), e$f([e$g()], p$2.prototype, "hasMultipassTerrain", void 0), e$f([e$g()], p$2.prototype, "cullAboveGround", void 0), e$f([e$g()], p$2.prototype, "objectAndLayerIdColorInstanced", void 0);
class m$2 extends d$a {
  constructor(e2) {
    super(e2, new _$1()), this.supportsEdges = true, this._configuration = new p$2();
  }
  getConfiguration(e2, t2) {
    return this._configuration.output = e2, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasVertexColors = this.parameters.hasVertexColors, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this.parameters.transparent, this._configuration.polygonOffset = this.parameters.polygonOffset, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.enableOffset = t2.camera.relativeElevation < S$7, this._configuration.hasMultipassTerrain = t2.multipassTerrain.enabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e2, t2, r2, s2, i2, a2, o2) {
    x$9(e2, t2, s2, i2, a2, void 0, o2);
  }
  requiresSlot(e2, r2) {
    if (r2 === h$8.Color || r2 === h$8.Alpha || r2 === h$8.Highlight || r2 === h$8.Depth && this.parameters.writeLinearDepth || r2 === h$8.ObjectAndLayerIdColor) {
      if (e2 === E$a.DRAPED_MATERIAL)
        return true;
      if (r2 === h$8.Highlight)
        return e2 === E$a.OPAQUE_MATERIAL;
      return e2 === (this.parameters.transparent ? this.parameters.writeDepth ? E$a.TRANSPARENT_MATERIAL : E$a.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : E$a.OPAQUE_MATERIAL);
    }
    return false;
  }
  createGLMaterial(e2) {
    return new d$4(e2);
  }
  createBufferWriter() {
    return new v$4(has("enable-feature:objectAndLayerId-rendering") ? o$6 : u$1);
  }
}
class d$4 extends t$l {
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e2.hasOccludees });
  }
  beginSlot(e2) {
    return this._output !== h$8.Color && this._output !== h$8.Alpha || this._updateOccludeeState(e2), this.ensureTechnique(j$3, e2);
  }
}
class _$1 extends h$d {
  constructor() {
    super(...arguments), this.color = l$a, this.transparent = false, this.writeDepth = true, this.writeLinearDepth = false, this.hasVertexColors = false, this.polygonOffset = false, this.hasSlicePlane = false, this.cullFace = n$k.None, this.hasOccludees = false;
  }
}
const d$3 = { dash: [4, 3], dot: [1, 3], "long-dash": [8, 3], "short-dash": [4, 1], "short-dot": [1, 1] }, s$b = { dash: d$3.dash, "dash-dot": [...d$3.dash, ...d$3.dot], dot: d$3.dot, "long-dash": d$3["long-dash"], "long-dash-dot": [...d$3["long-dash"], ...d$3.dot], "long-dash-dot-dot": [...d$3["long-dash"], ...d$3.dot, ...d$3.dot], none: null, "short-dash": d$3["short-dash"], "short-dash-dot": [...d$3["short-dash"], ...d$3["short-dot"]], "short-dash-dot-dot": [...d$3["short-dash"], ...d$3["short-dot"], ...d$3["short-dot"]], "short-dot": d$3["short-dot"], solid: null }, h$2 = 8;
function n$6(t2, d2 = 2) {
  return t$c(t2) ? t2 : { pattern: t2.slice(), pixelRatio: d2 };
}
function r$9(o2, t2 = 2) {
  return { pattern: [o2, o2], pixelRatio: t2 };
}
function a$2(o2) {
  return r$d(o2) && o2.type === "style" ? l$2(o2.style) : null;
}
function l$2(o2) {
  return r$d(o2) ? n$6(s$b[o2], h$2) : null;
}
var e$4, t$6;
!function(e2) {
  e2[e2.RasterImage = 0] = "RasterImage", e2[e2.Features = 1] = "Features";
}(e$4 || (e$4 = {})), function(e2) {
  e2[e2.WithRasterImage = 0] = "WithRasterImage", e2[e2.WithoutRasterImage = 1] = "WithoutRasterImage";
}(t$6 || (t$6 = {}));
var E$4, I$5;
!function(E2) {
  E2[E2.ADD = 0] = "ADD", E2[E2.UPDATE = 1] = "UPDATE", E2[E2.REMOVE = 2] = "REMOVE";
}(E$4 || (E$4 = {})), function(E2) {
  E2[E2.NONE = 0] = "NONE", E2[E2.VISIBILITIES = 1] = "VISIBILITIES", E2[E2.VERTEXATTRS = 2] = "VERTEXATTRS", E2[E2.TRANSFORMATION = 4] = "TRANSFORMATION", E2[E2.HIGHLIGHTS = 8] = "HIGHLIGHTS", E2[E2.OCCLUDEES = 16] = "OCCLUDEES";
}(I$5 || (I$5 = {}));
function m$1(t2, e2 = null) {
  const r2 = [], o2 = [];
  E$3(t2, o2, r2);
  const a2 = o2[0][1].data, n2 = r2[0][1].length, i2 = new Array(n2).fill(0);
  return T$4(t2, o2, r2), A$3(t2, o2, r2, i2), I$4(t2, o2, r2, i2), O$2(t2, o2, r2, i2), b(t2, o2, r2, i2), R$3(t2, o2, r2, i2), g$1(t2, o2, r2, i2), y(t2, o2, r2, a2), new d$8(o2, r2, a$8.Line, e2);
}
function E$3(t2, e2, r2) {
  const { attributeData: { position: a2 }, removeDuplicateStartEnd: n2 } = t2, i2 = d$2(a2) && n2, s2 = a2.length / 3 - (i2 ? 1 : 0), u2 = new Array(2 * (s2 - 1)), c2 = i2 ? t$o(a2, 0, a2.length - 3) : a2;
  let l2 = 0;
  for (let o2 = 0; o2 < s2 - 1; o2++)
    u2[l2++] = o2, u2[l2++] = o2 + 1;
  e2.push([O$8.POSITION, { size: 3, data: c2, exclusive: i2 }]), r2.push([O$8.POSITION, u2]);
}
function T$4(e2, r2, o2) {
  const a2 = e2.attributeData.mapPosition;
  t$c(a2) || (o2.push([O$8.MAPPOS, o2[0][1]]), r2.push([O$8.MAPPOS, { size: 3, data: a2 }]));
}
function A$3(t2, o2, a2, n2) {
  if (r$d(t2.attributeData.colorFeature))
    return;
  const i2 = t2.attributeData.color;
  o2.push([O$8.COLOR, { size: 4, data: i$g(i2, _$8) }]), a2.push([O$8.COLOR, n2]);
}
function O$2(t2, r2, o2, a2) {
  if (!r$d(t2.attributeData.normal))
    return;
  const n2 = t2.attributeData.normal;
  r2.push([O$8.NORMAL, { size: 3, data: n2 }]), o2.push([O$8.NORMAL, a2]);
}
function b(e2, r2, o2, a2) {
  const n2 = e2.attributeData.colorFeature;
  t$c(n2) || (r2.push([O$8.COLORFEATUREATTRIBUTE, { size: 1, data: new Float32Array([n2]) }]), o2.push([O$8.COLOR, a2]));
}
function I$4(t2, o2, a2, n2) {
  if (r$d(t2.attributeData.sizeFeature))
    return;
  const i2 = t2.attributeData.size;
  o2.push([O$8.SIZE, { size: 1, data: [i$g(i2, 1)] }]), a2.push([O$8.SIZE, n2]);
}
function R$3(e2, r2, o2, a2) {
  const n2 = e2.attributeData.sizeFeature;
  t$c(n2) || (r2.push([O$8.SIZEFEATUREATTRIBUTE, { size: 1, data: new Float32Array([n2]) }]), o2.push([O$8.SIZEFEATUREATTRIBUTE, a2]));
}
function g$1(e2, r2, o2, a2) {
  const n2 = e2.attributeData.opacityFeature;
  t$c(n2) || (r2.push([O$8.OPACITYFEATUREATTRIBUTE, { size: 1, data: new Float32Array([n2]) }]), o2.push([O$8.OPACITYFEATUREATTRIBUTE, a2]));
}
function y(e2, r2, o2, i2) {
  if (t$c(e2.overlayInfo) || e2.overlayInfo.renderCoordsHelper.viewingMode !== l$g.Global || !e2.overlayInfo.spatialReference.isGeographic)
    return;
  const s2 = new Float64Array(i2.length), p2 = u$h(e2.overlayInfo.spatialReference);
  for (let t2 = 0; t2 < s2.length; t2 += 3)
    ee$3(i2, t2, s2, t2, p2);
  const f2 = i2.length / 3, m2 = new Float32Array(f2 + 1);
  let E2 = F$1, T2 = j$2, A2 = 0, O2 = 0;
  o$b(E2, s2[O2++], s2[O2++], s2[O2++]), m2[0] = 0;
  for (let t2 = 1; t2 < f2 + 1; ++t2)
    t2 === f2 && (O2 = 0), o$b(T2, s2[O2++], s2[O2++], s2[O2++]), A2 += H$5(E2, T2), m2[t2] = A2, [E2, T2] = [T2, E2];
  r2.push([O$8.DISTANCETOSTART, { size: 1, data: m2 }]), o2.push([O$8.DISTANCETOSTART, o2[0][1]]);
}
function d$2(t2) {
  const e2 = t2.length;
  return t2[0] === t2[e2 - 3] && t2[1] === t2[e2 - 2] && t2[2] === t2[e2 - 1];
}
var D$1;
!function(t2) {
  t2[t2.KEEP = 0] = "KEEP", t2[t2.REMOVE = 1] = "REMOVE";
}(D$1 || (D$1 = {}));
const F$1 = n$a(), j$2 = n$a();
var T$3, E$2, O$1, S$2, H$1, N$1, o$5;
!function(T2) {
  T2[T2.INNER = 0] = "INNER", T2[T2.OUTER = 1] = "OUTER";
}(T$3 || (T$3 = {})), function(T2) {
  T2[T2.REGULAR = 0] = "REGULAR", T2[T2.HAS_NORTH_POLE = 1] = "HAS_NORTH_POLE", T2[T2.HAS_SOUTH_POLE = 2] = "HAS_SOUTH_POLE", T2[T2.HAS_BOTH_POLES = 3] = "HAS_BOTH_POLES";
}(E$2 || (E$2 = {})), function(T2) {
  T2[T2.NORTH = 0] = "NORTH", T2[T2.NORTH_EAST = 1] = "NORTH_EAST", T2[T2.EAST = 2] = "EAST", T2[T2.SOUTH_EAST = 3] = "SOUTH_EAST", T2[T2.SOUTH = 4] = "SOUTH", T2[T2.SOUTH_WEST = 5] = "SOUTH_WEST", T2[T2.WEST = 6] = "WEST", T2[T2.NORTH_WEST = 7] = "NORTH_WEST";
}(O$1 || (O$1 = {})), function(T2) {
  T2[T2.OFF = 0] = "OFF", T2[T2.ON = 1] = "ON";
}(S$2 || (S$2 = {})), function(T2) {
  T2[T2.Color = 0] = "Color", T2[T2.ColorNoRasterImage = 1] = "ColorNoRasterImage", T2[T2.Highlight = 2] = "Highlight", T2[T2.Water = 3] = "Water", T2[T2.Occluded = 4] = "Occluded", T2[T2.ObjectAndLayerIdColor = 5] = "ObjectAndLayerIdColor";
}(H$1 || (H$1 = {})), function(T2) {
  T2[T2.FADING = 0] = "FADING", T2[T2.IMMEDIATE = 1] = "IMMEDIATE", T2[T2.UNFADED = 2] = "UNFADED";
}(N$1 || (N$1 = {})), function(T2) {
  T2[T2.INSIDE = 0] = "INSIDE", T2[T2.INTERSECTS = 1] = "INTERSECTS", T2[T2.OUTSIDE = 2] = "OUTSIDE";
}(o$5 || (o$5 = {}));
class t$5 {
  constructor(s2, t2) {
    this.vec3 = s2, this.id = t2;
  }
}
function c$7(c2, r2, n2, o2) {
  return new t$5(r$h(c2, r2, n2), o2);
}
var h$1;
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.ColorAndWater = 1] = "ColorAndWater", e2[e2.Highlight = 2] = "Highlight", e2[e2.Occluded = 3] = "Occluded", e2[e2.ObjectAndLayerIdColor = 4] = "ObjectAndLayerIdColor";
}(h$1 || (h$1 = {}));
class l$1 {
  constructor(e2, r2) {
    this.index = e2, this.renderTargets = r2, this._extent = u$f(), this.resolution = 0, this.renderLocalOrigin = c$7(0, 0, 0, "O"), this.pixelRatio = 1, this.mapUnitsPerPixel = 1, this.canvasGeometries = new d$1(), this.validTargets = null, this.hasDrapedFeatureSource = false, this.hasDrapedRasterSource = false, this.hasTargetWithoutRasterImage = false, this.index = e2, this.validTargets = new Array(r2.renderTargets.length).fill(false);
  }
  get extent() {
    return this._extent;
  }
  getValidTexture(e2) {
    return this.validTargets[e2] ? this.renderTargets.getTarget(e2).getTexture() : null;
  }
  get _needsColorWithoutRasterImage() {
    return this.hasDrapedRasterSource && this.hasDrapedFeatureSource && this.hasTargetWithoutRasterImage;
  }
  getColorTexture(e2) {
    const t2 = e2 === h$1.ColorAndWater ? this.renderTargets.getTarget(H$1.Color) : e2 === h$1.Highlight ? this.renderTargets.getTarget(H$1.Highlight) : e2 === h$1.ObjectAndLayerIdColor ? this.renderTargets.getTarget(H$1.ObjectAndLayerIdColor) : this.renderTargets.getTarget(H$1.Occluded);
    return t2 ? t2.getTexture() : null;
  }
  getColorTextureNoRasterImage() {
    return this._needsColorWithoutRasterImage ? this.getValidTexture(H$1.ColorNoRasterImage) : this.hasDrapedFeatureSource ? this.getValidTexture(H$1.Color) : null;
  }
  getNormalTexture(e2) {
    const t2 = e2 === h$1.ColorAndWater ? this.renderTargets.getTarget(H$1.Water) : null;
    return t2 ? t2.getTexture() : null;
  }
  draw(e2, t2) {
    const r2 = this.computeRenderTargetValidityBitfield();
    for (const s2 of this.renderTargets.renderTargets)
      s2.type !== H$1.ColorNoRasterImage || this._needsColorWithoutRasterImage ? this.validTargets[s2.type] = e2.drawTarget(this, s2, t2) : this.validTargets[s2.type] = false;
    return r2 ^ this.computeRenderTargetValidityBitfield() ? l$h.CHANGED : l$h.UNCHANGED;
  }
  computeRenderTargetValidityBitfield() {
    const e2 = this.validTargets;
    return +e2[H$1.Color] | +e2[H$1.ColorNoRasterImage] << 1 | +e2[H$1.Highlight] << 2 | +e2[H$1.Water] << 3 | +e2[H$1.Occluded] << 4;
  }
  setupGeometryViewsCyclical(e2) {
    this.setupGeometryViewsDirect();
    const t2 = 1e-3 * e2.range;
    if (this._extent[0] - t2 <= e2.min) {
      const t3 = this.canvasGeometries.extents[this.canvasGeometries.numViews++];
      z$6(this._extent, e2.range, 0, t3);
    }
    if (this._extent[2] + t2 >= e2.max) {
      const t3 = this.canvasGeometries.extents[this.canvasGeometries.numViews++];
      z$6(this._extent, -e2.range, 0, t3);
    }
  }
  setupGeometryViewsDirect() {
    this.canvasGeometries.numViews = 1, a$j(this.canvasGeometries.extents[0], this._extent);
  }
  hasSomeSizedView() {
    for (let e2 = 0; e2 < this.canvasGeometries.numViews; e2++) {
      const t2 = this.canvasGeometries.extents[e2];
      if (t2[0] !== t2[2] && t2[1] !== t2[3])
        return true;
    }
    return false;
  }
  applyViewport(e2) {
    e2.setViewport(this.index === T$3.INNER ? 0 : this.resolution, 0, this.resolution, this.resolution);
  }
}
class d$1 {
  constructor() {
    this.extents = [u$f(), u$f(), u$f()], this.numViews = 0;
  }
}
class f$4 {
  constructor(e2, f2) {
    this._size = n$l(), this._fbo = null, this._fbo = new x$a(e2, { colorTarget: Y$3.TEXTURE, depthStencilTarget: V$3.NONE }, { target: M$6.TEXTURE_2D, pixelFormat: P$6.RGBA, dataType: G$4.UNSIGNED_BYTE, wrapMode: D$3.CLAMP_TO_EDGE, samplingMode: L$5.LINEAR_MIPMAP_LINEAR, hasMipmap: f2, maxAnisotropy: 8, width: 0, height: 0 });
  }
  dispose() {
    this._fbo = a$9(this._fbo);
  }
  getTexture() {
    return this._fbo ? this._fbo.colorTexture : null;
  }
  isValid() {
    return this._fbo !== null;
  }
  resize(e2, t2) {
    this._size[0] = e2, this._size[1] = t2, this._fbo.resize(this._size[0], this._size[1]);
  }
  bind(e2) {
    e2.bindFramebuffer(this._fbo);
  }
  generateMipMap() {
    const e2 = this._fbo.colorTexture;
    e2.descriptor.hasMipmap && e2.generateMipmap();
  }
  disposeRenderTargetMemory() {
    var _a;
    (_a = this._fbo) == null ? void 0 : _a.resize(0, 0);
  }
  get gpuMemoryUsage() {
    var _a, _b;
    return (_b = (_a = this._fbo) == null ? void 0 : _a.gpuMemoryUsage) != null ? _b : 0;
  }
}
class s$a {
  constructor(e2, t2, s2, o2 = true) {
    this.output = t2, this.type = s2, this.valid = false, this.lastUsed = 1 / 0, this.fbo = new f$4(e2, o2);
  }
}
class o$4 {
  constructor(r2) {
    this.renderTargets = [new s$a(r2, h$8.Color, H$1.Color), new s$a(r2, h$8.Color, H$1.ColorNoRasterImage), new s$a(r2, h$8.Highlight, H$1.Highlight, false), new s$a(r2, h$8.Normal, H$1.Water), new s$a(r2, h$8.Color, H$1.Occluded)], has("enable-feature:objectAndLayerId-rendering") && this.renderTargets.push(new s$a(r2, h$8.ObjectAndLayerIdColor, H$1.ObjectAndLayerIdColor));
  }
  getTarget(e2) {
    return this.renderTargets[e2].fbo;
  }
  dispose() {
    for (const e2 of this.renderTargets)
      e2.fbo.dispose();
  }
  disposeRenderTargetMemory() {
    for (const e2 of this.renderTargets)
      e2.fbo.disposeRenderTargetMemory();
  }
  validateUsageForTarget(e2, r2, t2) {
    if (e2)
      r2.lastUsed = t2;
    else if (t2 - r2.lastUsed > a$1)
      r2.fbo.disposeRenderTargetMemory(), r2.lastUsed = 1 / 0;
    else if (r2.lastUsed < 1 / 0)
      return true;
    return false;
  }
  get gpuMemoryUsage() {
    return this.renderTargets.reduce((e2, r2) => e2 + r2.fbo.gpuMemoryUsage, 0);
  }
}
const a$1 = 1e3;
class n$5 {
  constructor(e2) {
    this._context = e2, this._perConstructorInstances = new t$q(), this._frameCounter = 0, this._keepAliveFrameCount = c$6;
  }
  get viewingMode() {
    return this._context.viewingMode;
  }
  get constructionContext() {
    return this._context;
  }
  dispose() {
    this._perConstructorInstances.forEach((e2) => e2.forEach((e3) => e3.technique.destroy())), this._perConstructorInstances.clear();
  }
  acquire(t2, r2 = i$9) {
    const s2 = r2.key;
    let n2 = this._perConstructorInstances.get(t2, s2);
    if (t$c(n2)) {
      const e2 = new t2(this._context, r2, () => this.release(e2));
      n2 = new o$3(e2), this._perConstructorInstances.set(t2, s2, n2);
    }
    return ++n2.refCount, n2.technique;
  }
  releaseAndAcquire(e2, r2, s2) {
    if (r$d(s2)) {
      if (r2.key === s2.key)
        return s2;
      this.release(s2);
    }
    return this.acquire(e2, r2);
  }
  release(t2) {
    if (t$c(t2) || this._perConstructorInstances.empty)
      return;
    const r2 = this._perConstructorInstances.get(t2.constructor, t2.key);
    t$c(r2) || (--r2.refCount, r2.refCount === 0 && (r2.refZeroFrame = this._frameCounter));
  }
  frameUpdate() {
    this._frameCounter++, this._keepAliveFrameCount !== c$6 && this._perConstructorInstances.forEach((e2, t2) => {
      e2.forEach((e3, r2) => {
        e3.refCount === 0 && e3.refZeroFrame + this._keepAliveFrameCount < this._frameCounter && (e3.technique.destroy(), this._perConstructorInstances.delete(t2, r2));
      });
    });
  }
  async reloadAll() {
    const e2 = new Array();
    this._perConstructorInstances.forEach((t2, r2) => {
      const s2 = async (e3, t3) => {
        const r3 = t3.shader;
        r3 && (await r3.reload(), e3.forEach((e4) => e4.technique.reload(this._context)));
      };
      e2.push(s2(t2, r2));
    }), await Promise.all(e2);
  }
}
class o$3 {
  constructor(e2) {
    this.technique = e2, this.refCount = 0, this.refZeroFrame = 0;
  }
}
const c$6 = -1, i$9 = new t$p();
const s$9 = (s2) => {
  class e2 extends s2 {
    constructor() {
      super(...arguments), this._isDisposed = false;
    }
    dispose() {
      var _a;
      for (const s3 of (_a = this._managedDisposables) != null ? _a : []) {
        const e3 = this[s3];
        this[s3] = null, e3 && typeof e3.dispose == "function" && e3.dispose();
      }
      this._isDisposed = true;
    }
    get isDisposed() {
      return this._isDisposed;
    }
  }
  return e2;
};
function i$8() {
  return (s2, e2) => {
    var _a, _b, _c;
    s2.hasOwnProperty("_managedDisposables") || (s2._managedDisposables = (_b = (_a = s2._managedDisposables) == null ? void 0 : _a.slice()) != null ? _b : []), (_c = s2._managedDisposables) == null ? void 0 : _c.unshift(e2);
  };
}
class J$2 {
  constructor(t2 = null, i2 = null, r2 = null) {
    this._viewUp = n$a(), this._viewForward = n$a(), this._viewRight = n$a(), this._ray = d$d(), this._viewport = r$o(0, 0, 1, 1), this._padding = r$o(0, 0, 0, 0), this._fov = 55 / 180 * Math.PI, this._nearFar = r$p(1, 1e3), this._viewDirty = true, this._viewMatrix = e$c(), this._projectionDirty = true, this._projectionMatrix = e$c(), this._viewProjectionDirty = true, this._viewProjectionMatrix = e$c(), this._viewInverseTransposeMatrixDirty = true, this._viewInverseTransposeMatrix = e$c(), this._inverseProjectionDirty = true, this._inverseProjectionMatrix = null, this._frustumDirty = true, this._frustum = H$6(), this._fullViewport = n$e(), this._pixelRatio = 1, this.relativeElevation = 0, r$d(t2) && r$g(this._ray.origin, t2), this._center = r$d(i2) ? t$d(i2) : n$a(), this._up = r$d(r2) ? t$d(r2) : r$h(0, 0, 1);
  }
  get pixelRatio() {
    return this._pixelRatio;
  }
  set pixelRatio(t2) {
    this._pixelRatio = t2 > 0 ? t2 : 1;
  }
  get eye() {
    return this._ray.origin;
  }
  set eye(t2) {
    this._compareAndSetView(t2, this._ray.origin);
  }
  get center() {
    return this._center;
  }
  set center(t2) {
    this._compareAndSetView(t2, this._center);
  }
  get ray() {
    return e$e(this._ray.direction, this.center, this.eye), this._ray;
  }
  get up() {
    return this._up;
  }
  set up(t2) {
    this._compareAndSetView(t2, this._up);
  }
  get viewMatrix() {
    return this._ensureViewClean(), this._viewMatrix;
  }
  set viewMatrix(t2) {
    n$9(this._viewMatrix, t2), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get viewForward() {
    return this._ensureViewClean(), this._viewForward;
  }
  get viewUp() {
    return this._ensureViewClean(), this._viewUp;
  }
  get viewRight() {
    return this._ensureViewClean(), this._viewRight;
  }
  get nearFar() {
    return this._nearFar;
  }
  get near() {
    return this._nearFar[0];
  }
  set near(t2) {
    this._nearFar[0] !== t2 && (this._nearFar[0] = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get far() {
    return this._nearFar[1];
  }
  set far(t2) {
    this._nearFar[1] !== t2 && (this._nearFar[1] = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get viewport() {
    return this._viewport;
  }
  set viewport(t2) {
    this.x = t2[0], this.y = t2[1], this.width = t2[2], this.height = t2[3];
  }
  get x() {
    return this._viewport[0];
  }
  set x(t2) {
    t2 += this._padding[it$1.LEFT], this._viewport[0] !== t2 && (this._viewport[0] = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get y() {
    return this._viewport[1];
  }
  set y(t2) {
    t2 += this._padding[it$1.BOTTOM], this._viewport[1] !== t2 && (this._viewport[1] = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get width() {
    return this._viewport[2];
  }
  set width(t2) {
    this._viewport[2] !== t2 && (this._viewport[2] = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get height() {
    return this._viewport[3];
  }
  set height(t2) {
    this._viewport[3] !== t2 && (this._viewport[3] = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get fullWidth() {
    return this._viewport[2] + this._padding[it$1.RIGHT] + this._padding[it$1.LEFT];
  }
  set fullWidth(t2) {
    this.width = t2 - (this._padding[it$1.RIGHT] + this._padding[it$1.LEFT]);
  }
  get fullHeight() {
    return this._viewport[3] + this._padding[it$1.TOP] + this._padding[it$1.BOTTOM];
  }
  set fullHeight(t2) {
    this.height = t2 - (this._padding[it$1.TOP] + this._padding[it$1.BOTTOM]);
  }
  get fullViewport() {
    return this._fullViewport[0] = this._viewport[0] - this._padding[it$1.LEFT], this._fullViewport[1] = this._viewport[1] - this._padding[it$1.BOTTOM], this._fullViewport[2] = this.fullWidth, this._fullViewport[3] = this.fullHeight, this._fullViewport;
  }
  get aspect() {
    return this.width / this.height;
  }
  get padding() {
    return this._padding;
  }
  set padding(t2) {
    this._padding[it$1.TOP] === t2[it$1.TOP] && this._padding[it$1.RIGHT] === t2[it$1.RIGHT] && this._padding[it$1.BOTTOM] === t2[it$1.BOTTOM] && this._padding[it$1.LEFT] === t2[it$1.LEFT] || (this._viewport[0] += t2[it$1.LEFT] - this._padding[it$1.LEFT], this._viewport[1] += t2[it$1.BOTTOM] - this._padding[it$1.BOTTOM], this._viewport[2] -= t2[it$1.RIGHT] + t2[it$1.LEFT] - (this._padding[it$1.RIGHT] + this._padding[it$1.LEFT]), this._viewport[3] -= t2[it$1.TOP] + t2[it$1.BOTTOM] - (this._padding[it$1.TOP] + this._padding[it$1.BOTTOM]), a$k(this._padding, t2), this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true);
  }
  get viewProjectionMatrix() {
    return this._viewProjectionDirty && (u$8(this._viewProjectionMatrix, this.projectionMatrix, this.viewMatrix), this._viewProjectionDirty = false), this._viewProjectionMatrix;
  }
  get projectionMatrix() {
    if (this._projectionDirty) {
      const t2 = this.width, i2 = this.height, e2 = this.near * Math.tan(this.fovY / 2), r2 = e2 * this.aspect;
      A$9(this._projectionMatrix, -r2 * (1 + 2 * this._padding[it$1.LEFT] / t2), r2 * (1 + 2 * this._padding[it$1.RIGHT] / t2), -e2 * (1 + 2 * this._padding[it$1.BOTTOM] / i2), e2 * (1 + 2 * this._padding[it$1.TOP] / i2), this.near, this.far), this._projectionDirty = false;
    }
    return this._projectionMatrix;
  }
  get inverseProjectionMatrix() {
    return t$c(this._inverseProjectionMatrix) && (this._inverseProjectionMatrix = e$c()), this._inverseProjectionDirty && h$9(this._inverseProjectionMatrix, this.projectionMatrix), this._inverseProjectionMatrix;
  }
  set projectionMatrix(t2) {
    n$9(this._projectionMatrix, t2), this._projectionDirty = false, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fov() {
    return this._fov;
  }
  set fov(t2) {
    this._fov = t2, this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovX() {
    return g$5(this._fov, this.width, this.height);
  }
  set fovX(t2) {
    this._fov = l$i(t2, this.width, this.height), this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovY() {
    return k$5(this._fov, this.width, this.height);
  }
  set fovY(t2) {
    this._fov = m$d(t2, this.width, this.height), this._projectionDirty = true, this._inverseProjectionDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get distance() {
    return x$6(this._center, this.eye);
  }
  get frustum() {
    return this._recomputeFrustum(), this._frustum;
  }
  get viewInverseTransposeMatrix() {
    return (this._viewInverseTransposeMatrixDirty || this._viewDirty) && (h$9(this._viewInverseTransposeMatrix, this.viewMatrix), o$r(this._viewInverseTransposeMatrix, this._viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), this._viewInverseTransposeMatrix;
  }
  depthNDCToWorld(t2) {
    const i2 = 2 * t2 - 1;
    return 2 * this.near * this.far / (this.far + this.near - i2 * (this.far - this.near));
  }
  get perRenderPixelRatio() {
    return Math.tan(this.fovX / 2) / (this.width / 2);
  }
  get perScreenPixelRatio() {
    return this.perRenderPixelRatio * this._pixelRatio;
  }
  get aboveGround() {
    return this.relativeElevation != null && this.relativeElevation >= 0;
  }
  copyFrom(t2) {
    r$g(this._ray.origin, t2.eye), r$g(this._center, t2.center), r$g(this._up, t2.up), a$k(this._viewport, t2.viewport), a$k(this._padding, t2.padding), a$d(this._nearFar, t2.nearFar), this._fov = t2.fov, this.relativeElevation = t2.relativeElevation;
    const i2 = t2;
    return this._viewDirty = i2._viewDirty, this._viewDirty || (n$9(this._viewMatrix, t2.viewMatrix), r$g(this._viewRight, t2.viewRight), r$g(this._viewUp, t2.viewUp), r$g(this._viewForward, t2.viewForward)), i2._projectionDirty ? this._projectionDirty = true : (n$9(this._projectionMatrix, t2.projectionMatrix), this._projectionDirty = false), this._viewProjectionDirty = true, this._inverseProjectionDirty = true, this._frustumDirty = i2._frustumDirty, this._frustumDirty || (u$i(this._frustum, t2.frustum), this._frustumDirty = false), i2._viewInverseTransposeMatrixDirty ? this._viewInverseTransposeMatrixDirty = true : (n$9(this._viewInverseTransposeMatrix, t2.viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), a$k(this._fullViewport, t2.fullViewport), this._pixelRatio = t2.pixelRatio, this;
  }
  copyViewFrom(t2) {
    this.eye = t2.eye, this.center = t2.center, this.up = t2.up;
  }
  clone() {
    return new J$2().copyFrom(this);
  }
  equals(t2) {
    return F$3(this.eye, t2.eye) && F$3(this._center, t2.center) && F$3(this._up, t2.up) && D$4(this._viewport, t2.viewport) && D$4(this._padding, t2.padding) && E$c(this._nearFar, t2.nearFar) && this._fov === t2.fov && this._pixelRatio === t2.pixelRatio && this.relativeElevation === t2.relativeElevation;
  }
  almostEquals(t2) {
    if (this._pixelRatio !== t2.pixelRatio || Math.abs(t2.fov - this._fov) >= 1e-3)
      return false;
    const i2 = 5e-4, e2 = 1 - 1e-10;
    J$4(Z$2, t2.eye, t2.center), J$4($$2, this.eye, this._center);
    const r2 = P$5(Z$2, $$2), s2 = Z$5(Z$2), h2 = Z$5($$2);
    return r2 * r2 >= e2 * s2 * h2 && X$4(t2.eye, this.eye) < Math.max(s2, h2) * i2 * i2 && b$7(t2.padding, this._padding) < 0.5 && b$7(t2.viewport, this._viewport) < 0.5;
  }
  computeRenderPixelSizeAt(t2) {
    return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t2));
  }
  computeRenderPixelSizeAtDist(t2) {
    return t2 * this.perRenderPixelRatio;
  }
  computeScreenPixelSizeAt(t2) {
    return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t2));
  }
  _viewDirectionDistance(t2) {
    return Math.abs(f$j(this.viewForward, e$e(Z$2, t2, this.eye)));
  }
  computeScreenPixelSizeAtDist(t2) {
    return t2 * this.perScreenPixelRatio;
  }
  computeDistanceFromRadius(t2, i2) {
    return t2 / Math.tan(Math.min(this.fovX, this.fovY) / (2 * (i2 || 1)));
  }
  getScreenCenter(t2 = i$n()) {
    return t2[0] = (this.padding[it$1.LEFT] + this.width / 2) / this._pixelRatio, t2[1] = (this.padding[it$1.TOP] + this.height / 2) / this._pixelRatio, t2;
  }
  getRenderCenter(t2, i2 = 0.5, e2 = 0.5) {
    return t2[0] = this.padding[it$1.LEFT] + this.width * i2, t2[1] = this.padding[it$1.BOTTOM] + this.height * e2, t2[2] = 0.5, t2;
  }
  setGLViewport(t2) {
    const i2 = this.viewport, e2 = this.padding;
    t2.setViewport(i2[0] - e2[3], i2[1] - e2[2], i2[2] + e2[1] + e2[3], i2[3] + e2[0] + e2[2]);
  }
  applyProjection(t2, e2) {
    t2 !== K$2 && r$g(K$2, t2), K$2[3] = 1, w$2(K$2, K$2, this.projectionMatrix);
    const r2 = Math.abs(K$2[3]);
    g$4(K$2, K$2, 1 / r2);
    const s2 = this.fullViewport;
    e2[0] = h$e(0, s2[0] + s2[2], 0.5 + 0.5 * K$2[0]), e2[1] = h$e(0, s2[1] + s2[3], 0.5 + 0.5 * K$2[1]), e2[2] = 0.5 * (K$2[2] + 1), e2[3] = r2;
  }
  unapplyProjection(t2, i2) {
    const e2 = this.fullViewport;
    K$2[0] = (t2[0] / (e2[0] + e2[2]) * 2 - 1) * t2[3], K$2[1] = (t2[1] / (e2[1] + e2[3]) * 2 - 1) * t2[3], K$2[2] = (2 * t2[2] - 1) * t2[3], K$2[3] = t2[3], w$2(K$2, K$2, this.inverseProjectionMatrix), i2[0] = K$2[0], i2[1] = K$2[1], i2[2] = K$2[2];
  }
  projectToScreen(t2, i2) {
    return this.projectToRenderScreen(t2, tt$1), this.renderToScreen(tt$1, i2), i2;
  }
  projectToRenderScreen(t2, e2) {
    if (K$2[0] = t2[0], K$2[1] = t2[1], K$2[2] = t2[2], K$2[3] = 1, w$2(K$2, K$2, this.viewProjectionMatrix), K$2[3] === 0)
      return null;
    g$4(K$2, K$2, 1 / Math.abs(K$2[3]));
    const r2 = this.fullViewport;
    return "x" in e2 ? (e2.x = h$e(0, r2[0] + r2[2], 0.5 + 0.5 * K$2[0]), e2.y = h$e(0, r2[1] + r2[3], 0.5 + 0.5 * K$2[1])) : (e2[0] = h$e(0, r2[0] + r2[2], 0.5 + 0.5 * K$2[0]), e2[1] = h$e(0, r2[1] + r2[3], 0.5 + 0.5 * K$2[1]), e2.length > 2 && (e2[2] = 0.5 * (K$2[2] + 1))), e2;
  }
  unprojectFromScreen(t2, i2) {
    return this.unprojectFromRenderScreen(this.screenToRender(t2, tt$1), i2);
  }
  unprojectFromRenderScreen(t2, i2) {
    if (u$8(Q$2, this.projectionMatrix, this.viewMatrix), !h$9(Q$2, Q$2))
      return null;
    const e2 = this.fullViewport;
    return K$2[0] = 2 * (t2[0] - e2[0]) / e2[2] - 1, K$2[1] = 2 * (t2[1] - e2[1]) / e2[3] - 1, K$2[2] = 2 * t2[2] - 1, K$2[3] = 1, w$2(K$2, K$2, Q$2), K$2[3] === 0 ? null : (i2[0] = K$2[0] / K$2[3], i2[1] = K$2[1] / K$2[3], i2[2] = K$2[2] / K$2[3], i2);
  }
  constrainWindowSize(t2, i2, e2, r2 = e2) {
    const s2 = t2 * this._pixelRatio, h2 = i2 * this._pixelRatio, o2 = Math.max(s2 - e2 / 2, 0), n2 = Math.max(this.fullHeight - h2 - r2 / 2, 0), a2 = -Math.min(s2 - e2 / 2, 0), _2 = -Math.min(this.fullHeight - h2 - r2 / 2, 0);
    return [o2, n2, e2 - a2 - -Math.min(this.fullWidth - s2 - e2 / 2, 0), r2 - _2 - -Math.min(h2 - r2 / 2, 0)];
  }
  computeUp(t2) {
    t2 === l$g.Global ? this._computeUpGlobal() : this._computeUpLocal();
  }
  screenToRender(t2, i2) {
    const e2 = t2[0] * this._pixelRatio, r2 = this.fullHeight - t2[1] * this._pixelRatio;
    return i2[0] = e2, i2[1] = r2, i2;
  }
  renderToScreen(t2, i2) {
    const e2 = t2[0] / this._pixelRatio, r2 = (this.fullHeight - t2[1]) / this._pixelRatio;
    i2[0] = e2, i2[1] = r2;
  }
  _computeUpGlobal() {
    e$e(Z$2, this.center, this.eye);
    const t2 = s$m(this.center);
    t2 < 1 ? (o$b(this._up, 0, 0, 1), this._markViewDirty()) : Math.abs(P$5(Z$2, this.center)) > 0.9999 * s$m(Z$2) * t2 || (_$4(this._up, Z$2, this.center), _$4(this._up, this._up, Z$2), z$5(this._up, this._up), this._markViewDirty());
  }
  _computeUpLocal() {
    H$7(Z$2, this.eye, this.center), Math.abs(Z$2[2]) <= 0.9999 && (g$4(Z$2, Z$2, Z$2[2]), o$b(this._up, -Z$2[0], -Z$2[1], 1 - Z$2[2]), z$5(this._up, this._up), this._markViewDirty());
  }
  _compareAndSetView(i2, e2) {
    typeof i2[0] == "number" && isFinite(i2[0]) && typeof i2[1] == "number" && isFinite(i2[1]) && typeof i2[2] == "number" && isFinite(i2[2]) ? F$3(i2, e2) || (r$g(e2, i2), this._markViewDirty()) : s$l.getLogger("esri.views.3d.webgl-engine.lib.Camera").warn("Camera vector contains invalid number, ignoring value");
  }
  _markViewDirty() {
    this._viewDirty = true, this._frustumDirty = true, this._viewProjectionDirty = true;
  }
  _recomputeFrustum() {
    this._frustumDirty && (s$p(this.viewMatrix, this.projectionMatrix, this._frustum), this._frustumDirty = false);
  }
  _ensureViewClean() {
    this._viewDirty && (Q$6(this._viewMatrix, this.eye, this._center, this._up), o$b(this._viewForward, -this._viewMatrix[2], -this._viewMatrix[6], -this._viewMatrix[10]), o$b(this._viewUp, this._viewMatrix[1], this._viewMatrix[5], this._viewMatrix[9]), o$b(this._viewRight, this._viewMatrix[0], this._viewMatrix[4], this._viewMatrix[8]), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true);
  }
}
const K$2 = n$e(), Q$2 = e$c(), Z$2 = n$a(), $$2 = n$a(), tt$1 = x$7();
var it$1;
!function(t2) {
  t2[t2.TOP = 0] = "TOP", t2[t2.RIGHT = 1] = "RIGHT", t2[t2.BOTTOM = 2] = "BOTTOM", t2[t2.LEFT = 3] = "LEFT";
}(it$1 || (it$1 = {}));
class a {
  constructor(e2, t2, r2, i2) {
    this._textureRepository = e2, this._techniqueRepository = t2, this.materialChanged = r2, this.requestRender = i2, this._id2glMaterialRef = new t$q();
  }
  dispose() {
    this._textureRepository.dispose();
  }
  acquire(e2, r2, i2) {
    if (this._ownMaterial(e2), !e2.requiresSlot(r2, i2))
      return null;
    let s2 = this._id2glMaterialRef.get(i2, e2.id);
    if (t$c(s2)) {
      const t2 = e2.createGLMaterial({ material: e2, techniqueRep: this._techniqueRepository, textureRep: this._textureRepository, output: i2 });
      s2 = new l(t2), this._id2glMaterialRef.set(i2, e2.id, s2);
    }
    return s2.ref(), s2.glMaterial;
  }
  release(e2, t2) {
    const s2 = this._id2glMaterialRef.get(t2, e2.id);
    r$d(s2) && (s2.unref(), s2.referenced || (a$9(s2.glMaterial), this._id2glMaterialRef.delete(t2, e2.id)));
  }
  _ownMaterial(t2) {
    r$d(t2.repository) && t2.repository !== this && s$l.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"), t2.repository = this;
  }
}
class l {
  constructor(e2) {
    this.glMaterial = e2, this._refCnt = 0;
  }
  ref() {
    ++this._refCnt;
  }
  unref() {
    --this._refCnt, e$d(this._refCnt >= 0);
  }
  get referenced() {
    return this._refCnt > 0;
  }
}
const n$4 = { rootOrigin: null };
class j$1 {
  constructor(t2) {
    this._originSR = t2, this._origins = new Map(), this._objects = new Map(), this._gridSize = 5e5, this._rootOriginId = "root/" + e$a();
  }
  getOrigin(i2) {
    const r2 = this._origins.get(this._rootOriginId);
    if (r2 == null) {
      const r3 = n$4.rootOrigin;
      if (r$d(r3))
        return this._origins.set(this._rootOriginId, c$7(r3[0], r3[1], r3[2], this._rootOriginId)), this.getOrigin(i2);
      const s2 = c$7(i2[0] + Math.random() - 0.5, i2[1] + Math.random() - 0.5, i2[2] + Math.random() - 0.5, this._rootOriginId);
      return this._origins.set(this._rootOriginId, s2), s2;
    }
    const o2 = this._gridSize, e2 = Math.round(i2[0] / o2), a2 = Math.round(i2[1] / o2), n2 = Math.round(i2[2] / o2), h2 = `${e2}/${a2}/${n2}`;
    let c2 = this._origins.get(h2);
    const g2 = 0.5 * o2;
    if (e$e(p$1, i2, r2.vec3), p$1[0] = Math.abs(p$1[0]), p$1[1] = Math.abs(p$1[1]), p$1[2] = Math.abs(p$1[2]), p$1[0] < g2 && p$1[1] < g2 && p$1[2] < g2) {
      if (c2) {
        const t2 = Math.max(...p$1);
        e$e(p$1, i2, c2.vec3), p$1[0] = Math.abs(p$1[0]), p$1[1] = Math.abs(p$1[1]), p$1[2] = Math.abs(p$1[2]);
        if (Math.max(...p$1) < t2)
          return c2;
      }
      return r2;
    }
    return c2 || (c2 = c$7(e2 * o2, a2 * o2, n2 * o2, h2), this._origins.set(h2, c2)), c2;
  }
  _drawOriginBox(t2, i2 = r$o(1, 1, 0, 1)) {
    const s2 = window.view, o2 = s2._stage, m2 = i2.toString();
    if (!this._objects.has(m2)) {
      this._material = new H$3({ width: 2, color: i2 }), o2.add(this._material);
      const t3 = new l$7({ isPickable: false }), r2 = new x$5({ castShadow: false });
      o2.add(r2), t3.add(r2), o2.add(t3), this._objects.set(m2, r2);
    }
    const d2 = this._objects.get(m2), j2 = [0, 1, 5, 4, 0, 2, 1, 7, 6, 2, 0, 1, 3, 7, 5, 4, 6, 2, 0], p2 = j2.length, b2 = new Array(3 * p2), u2 = new Array(), l2 = 0.5 * this._gridSize;
    for (let r2 = 0; r2 < p2; r2++)
      b2[3 * r2 + 0] = t2[0] + (1 & j2[r2] ? l2 : -l2), b2[3 * r2 + 1] = t2[1] + (2 & j2[r2] ? l2 : -l2), b2[3 * r2 + 2] = t2[2] + (4 & j2[r2] ? l2 : -l2), r2 > 0 && u2.push(r2 - 1, r2);
    xn(b2, this._originSR, 0, b2, s2.renderSpatialReference, 0, p2);
    const M2 = new d$8([[O$8.POSITION, { size: 3, data: b2, exclusive: true }]], [[O$8.POSITION, u2]], a$8.Line);
    o2.add(M2), d2.addGeometry(M2, this._material, o$c);
  }
  get test() {
    const t2 = this;
    return { set gridSize(i2) {
      t2._gridSize = i2;
    } };
  }
}
const p$1 = n$a();
var E$1, I$3;
!function(N2) {
  N2[N2.RENDERING = 0] = "RENDERING", N2[N2.FINISHED_RENDERING = 1] = "FINISHED_RENDERING", N2[N2.FADING_TEXTURE_CHANNELS = 2] = "FADING_TEXTURE_CHANNELS", N2[N2.SWITCH_CHANNELS = 3] = "SWITCH_CHANNELS", N2[N2.FINISHED = 4] = "FINISHED";
}(E$1 || (E$1 = {})), function(N2) {
  N2[N2.RG = 0] = "RG", N2[N2.BA = 1] = "BA";
}(I$3 || (I$3 = {}));
class i$7 {
  constructor() {
    this.readChannels = I$3.RG, this.renderingStage = E$1.FINISHED, this.startTime = 0, this.startTimeHeightFade = 0, this.cameraPositionLastFrame = n$a(), this.isCameraPositionFinal = true, this.parallax = new o$2(), this.parallaxNew = new o$2(), this.crossFade = { enabled: false, factor: 1, distanceThresholdFactor: 0.3 }, this.fadeInOut = { stage: I$2.FINISHED, factor: 1, distanceThresholdFactor: 0.6 }, this.fadeIn = { stage: r$8.FINISHED, factor: 1, distanceThresholdFactor: 2 }, this.fadeInOutHeight = { stage: n$3.FINISHED, factor: -1 };
  }
  get isFading() {
    return this.fadeInOut.stage === I$2.FADE_OUT || this.fadeInOut.stage === I$2.FADE_IN || this.fadeIn.stage === r$8.FADE_IN || this.fadeInOutHeight.stage !== n$3.FINISHED || this.renderingStage === E$1.FADING_TEXTURE_CHANNELS;
  }
}
var r$8, I$2, n$3;
!function(t2) {
  t2[t2.FINISHED = 0] = "FINISHED", t2[t2.CHANGE_ANCHOR = 1] = "CHANGE_ANCHOR", t2[t2.FADE_IN = 2] = "FADE_IN";
}(r$8 || (r$8 = {})), function(t2) {
  t2[t2.FINISHED = 0] = "FINISHED", t2[t2.FADE_OUT = 1] = "FADE_OUT", t2[t2.SWITCH = 2] = "SWITCH", t2[t2.FADE_IN = 3] = "FADE_IN";
}(I$2 || (I$2 = {})), function(t2) {
  t2[t2.FINISHED = 0] = "FINISHED", t2[t2.HEIGHT_FADE = 1] = "HEIGHT_FADE";
}(n$3 || (n$3 = {}));
class o$2 {
  constructor() {
    this.anchorPointClouds = n$a(), this.cloudsHeight = 1e5, this.radiusCurvatureCorrectionFactor = 0, this.transform = e$c();
  }
}
function n$2(e2, n2) {
  const c2 = e2.fragment;
  c2.include(a$e), c2.uniforms.add(new e$m("nearFar", (e3, o2) => o2.camera.nearFar)), c2.uniforms.add(new f$g("depthMap", (e3, o2) => o2.linearDepthTexture)), c2.uniforms.add(new e$l("proj", (e3, o2) => o2.ssr.camera.projectionMatrix)), c2.uniforms.add(new o$e("invResolutionHeight", (e3, o2) => 1 / o2.ssr.camera.height)), c2.uniforms.add(new e$l("reprojectionMatrix", (e3, o2) => o2.ssr.reprojectionMatrix)), c2.code.add(n$d`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${n2.highStepCount ? "150" : "75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `);
}
class c$5 {
  constructor() {
    this.reprojectionMatrix = e$c();
  }
}
class g {
  constructor(g2, a2, o2) {
    this.shadowMap = g2, this.ssaoHelper = a2, this.slicePlane = o2, this.slot = E$a.OPAQUE_MATERIAL, this.hasOccludees = false, this.enableFillLights = true, this._inverseViewport = n$j(), this.oldLighting = new L$6(), this.newLighting = new L$6(), this._fadedLighting = new L$6(), this._lighting = this.newLighting, this.ssr = new c$5(), this.multipassTerrain = new o$s(), this.multipassGeometry = new s$c(), this.overlays = [], this.cloudsFade = new i$7();
  }
  get camera() {
    return this._camera;
  }
  set camera(i2) {
    this._camera = this.ssr.camera = i2, this._inverseViewport[0] = 1 / i2.fullViewport[2], this._inverseViewport[1] = 1 / i2.fullViewport[3];
  }
  get inverseViewport() {
    return this._inverseViewport;
  }
  get lighting() {
    return this._lighting;
  }
  get weatherFading() {
    return this._lighting === this._fadedLighting;
  }
  fadeLighting(i2) {
    const { oldLighting: t2, newLighting: e2 } = this;
    i2 >= 1 ? this._lighting = e2 : (this._fadedLighting.lerpLighting(t2, e2, i2), this._lighting = this._fadedLighting);
  }
}
class c$4 {
  constructor(a2, c2, n2, l2 = null) {
    this.rctx = a2, this.sliceHelper = l2, this.lastFrameCamera = new J$2(), this.output = h$8.Color, this.renderOccludedMask = i$6, this.bindParameters = new g(c2, n2, r$d(l2) ? l2.plane : null);
  }
  resetRenderOccludedMask() {
    this.renderOccludedMask = i$6;
  }
}
const i$6 = o$m.Occlude | o$m.OccludeAndTransparent | o$m.OccludeAndTransparentStencil;
var J$1;
!function(t2) {
  t2[t2.Highlight = 0] = "Highlight", t2[t2.Default = 1] = "Default";
}(J$1 || (J$1 = {}));
class K$1 {
  constructor() {
    this.camera = new J$2(), this.lightMat = e$c();
  }
}
class Q$1 {
  constructor(t2, e2) {
    this._rctx = t2, this._viewingMode = e2, this._enabled = false, this._snapshots = new Array(), this._textureSize = 0, this._numCascades = 1, this._maxNumCascades = 4, this._splitSchemeLambda = 0, this._warp = true, this._cascadeDistances = [0, 0, 0, 0, 0], this._usedCascadeDistances = n$e(), this._cascades = [new K$1(), new K$1(), new K$1(), new K$1()], this._maxTextureSize = Math.min(has("esri-mobile") ? 2048 : 8192, this._rctx.parameters.maxTextureSize);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  get textureSize() {
    return this._textureSize;
  }
  get numCascades() {
    return this._numCascades;
  }
  get cascadeDistances() {
    return r$j(this._usedCascadeDistances, this._cascadeDistances[0], this._numCascades > 1 ? this._cascadeDistances[1] : 1 / 0, this._numCascades > 2 ? this._cascadeDistances[2] : 1 / 0, this._numCascades > 3 ? this._cascadeDistances[3] : 1 / 0);
  }
  dispose() {
    this._discardDepthTexture(), this._discardAllSnapshots();
  }
  set maxCascades(e2) {
    this._maxNumCascades = a$c(Math.floor(e2), 1, 4);
  }
  get maxCascades() {
    return this._maxNumCascades;
  }
  set enabled(t2) {
    this._enabled = t2, t2 || (this._discardDepthTexture(), this._discardAllSnapshots());
  }
  get enabled() {
    return this._enabled;
  }
  get ready() {
    return this._enabled && r$d(this._depthTexture);
  }
  getSnapshot(t2) {
    return this.enabled ? this._snapshots[t2] : null;
  }
  getCascades() {
    for (let t2 = 0; t2 < this._numCascades; ++t2)
      ut[t2] = this._cascades[t2];
    return ut.length = this._numCascades, ut;
  }
  start(t2, e2, s2) {
    e$d(this.enabled), this._textureSize = this._computeTextureSize(t2.fullWidth, t2.fullHeight), this._ensureDepthTexture();
    const { near: a2, far: r2 } = this._clampNearFar(s2);
    this._computeCascadeDistances(r2, a2), this._setupMatrices(t2, e2);
    const i2 = t2.viewMatrix, c2 = t2.projectionMatrix;
    for (let h2 = 0; h2 < this._numCascades; ++h2)
      this._constructCascade(h2, c2, i2, e2);
    this._lastOrigin = null, this.clear();
  }
  finish(t2) {
    e$d(this.enabled), this._rctx.bindFramebuffer(t2);
  }
  getShadowMapMatrices(t2) {
    if (!this._lastOrigin || !F$3(t2, this._lastOrigin)) {
      this._lastOrigin = this._lastOrigin || n$a(), r$g(this._lastOrigin, t2);
      for (let e2 = 0; e2 < this._numCascades; ++e2) {
        c$h(dt, this._cascades[e2].lightMat, t2);
        for (let t3 = 0; t3 < 16; ++t3)
          pt[16 * e2 + t3] = dt[t3];
      }
    }
    return pt;
  }
  takeCascadeSnapshotTo(t2, e2) {
    e$d(this.enabled);
    const s2 = this._ensureSnapshot(e2);
    this._bindFbo();
    const a2 = this._rctx, r2 = a2.bindTexture(s2, E$7.TEXTURE_UNIT_FOR_UPDATES);
    a2.gl.copyTexSubImage2D(M$6.TEXTURE_2D, 0, t2.camera.viewport[0], t2.camera.viewport[1], t2.camera.viewport[0], t2.camera.viewport[1], t2.camera.viewport[2], t2.camera.viewport[3]), a2.bindTexture(r2, E$7.TEXTURE_UNIT_FOR_UPDATES);
  }
  clear() {
    const t2 = this._rctx;
    this._bindFbo(), t2.setClearColor(1, 1, 1, 1), t2.clearSafe(_$9.COLOR_BUFFER_BIT | _$9.DEPTH_BUFFER_BIT);
  }
  _computeTextureSize(t2, e2) {
    const s2 = 0.5 * Math.log(t2 * t2 + e2 * e2) * Math.LOG2E, a2 = 0.35, r2 = 2 ** Math.round(s2 + a2);
    return Math.min(this._maxTextureSize, 2 * r2);
  }
  _ensureDepthTexture() {
    if (r$d(this._depthTexture) && this._depthTexture.descriptor.width === this._textureSize)
      return;
    this._discardDepthTexture();
    const t2 = { target: M$6.TEXTURE_2D, pixelFormat: P$6.RGBA, dataType: G$4.UNSIGNED_BYTE, wrapMode: D$3.CLAMP_TO_EDGE, samplingMode: L$5.NEAREST, flipped: true, width: this._textureSize, height: this._textureSize };
    this._depthTexture = new E$7(this._rctx, t2), this._fbo = new x$a(this._rctx, { colorTarget: Y$3.TEXTURE, depthStencilTarget: V$3.DEPTH_RENDER_BUFFER, width: this._textureSize, height: this._textureSize }, this._depthTexture);
  }
  _ensureSnapshot(t2) {
    let e2 = this._snapshots[t2];
    if (r$d(e2) && e2.descriptor.width === this._textureSize)
      return e2;
    this._discardSnapshot(t2);
    const s2 = { target: M$6.TEXTURE_2D, pixelFormat: P$6.RGBA, dataType: G$4.UNSIGNED_BYTE, wrapMode: D$3.CLAMP_TO_EDGE, samplingMode: L$5.NEAREST, flipped: true, width: this._textureSize, height: this._textureSize };
    return e2 = new E$7(this._rctx, s2), this._snapshots[t2] = e2, e2;
  }
  _discardDepthTexture() {
    this._fbo = a$9(this._fbo), this._depthTexture = a$9(this._depthTexture);
  }
  _discardSnapshot(t2) {
    this._snapshots[t2] = a$9(this._snapshots[t2]);
  }
  _discardAllSnapshots() {
    for (let t2 = 0; t2 < this._snapshots.length; ++t2)
      this._discardSnapshot(t2);
    this._snapshots.length = 0;
  }
  _bindFbo() {
    const t2 = this._rctx;
    t2.unbindTexture(this._depthTexture), t2.bindFramebuffer(this._fbo);
  }
  _constructCascade(t2, e2, s2, a2) {
    const r2 = this._cascades[t2], i2 = -this._cascadeDistances[t2], o2 = -this._cascadeDistances[t2 + 1], n2 = (e2[10] * i2 + e2[14]) / Math.abs(e2[11] * i2 + e2[15]), _2 = (e2[10] * o2 + e2[14]) / Math.abs(e2[11] * o2 + e2[15]);
    e$d(n2 < _2);
    for (let c2 = 0; c2 < 8; ++c2) {
      r$j(et, c2 % 4 == 0 || c2 % 4 == 3 ? -1 : 1, c2 % 4 == 0 || c2 % 4 == 1 ? -1 : 1, c2 < 4 ? n2 : _2, 1), w$2(st[c2], et, tt);
      for (let t3 = 0; t3 < 3; ++t3)
        st[c2][t3] /= st[c2][3];
    }
    j$8(mt, st[0]), c$h(Z$1, _t, mt), r2.camera.viewMatrix = Z$1;
    for (let c2 = 0; c2 < 8; ++c2)
      O$7(st[c2], st[c2], r2.camera.viewMatrix);
    r$g(at, st[0]), r$g(rt, st[0]);
    for (let c2 = 1; c2 < 8; ++c2)
      for (let t3 = 0; t3 < 3; ++t3)
        at[t3] = Math.min(at[t3], st[c2][t3]), rt[t3] = Math.max(rt[t3], st[c2][t3]);
    at[2] -= 200, rt[2] += 200, r2.camera.near = -rt[2], r2.camera.far = -at[2], this._warp ? this._constructTrapezoidalProjection(s2, a2, r2) : this._constructOrthogonalProjection(r2), u$8(r2.lightMat, r2.camera.projectionMatrix, r2.camera.viewMatrix);
    const m2 = this._textureSize / 2;
    r2.camera.viewport[0] = t2 % 2 == 0 ? 0 : m2, r2.camera.viewport[1] = Math.floor(t2 / 2) === 0 ? 0 : m2, r2.camera.viewport[2] = m2, r2.camera.viewport[3] = m2;
  }
  _constructOrthogonalProjection(t2) {
    F$4(t2.camera.projectionMatrix, at[0], rt[0], at[1], rt[1], t2.camera.near, t2.camera.far);
  }
  _constructTrapezoidalProjection(t2, s2, a2) {
    const r2 = 1 / st[0][3], i2 = 1 / st[4][3];
    e$d(r2 < i2);
    let c2 = r2 + Math.sqrt(r2 * i2);
    const h2 = Math.sin(l$j(t2[2] * s2[0] + t2[6] * s2[1] + t2[10] * s2[2]));
    c2 /= h2, Dt(st, c2, h2, it, ct, ht, ot, nt), Ut(it, ct, ot, nt, a2.camera.projectionMatrix), a2.camera.projectionMatrix[10] = 2 / (at[2] - rt[2]), a2.camera.projectionMatrix[14] = -(at[2] + rt[2]) / (at[2] - rt[2]);
  }
  _setupMatrices(t2, e2) {
    u$8($$1, t2.projectionMatrix, t2.viewMatrix), h$9(tt, $$1);
    const s2 = this._viewingMode === l$g.Global ? t2.eye : o$b(mt, 0, 0, 1);
    Q$6(_t, [0, 0, 0], [-e2[0], -e2[1], -e2[2]], s2);
  }
  _clampNearFar(t2) {
    let { near: e2, far: s2 } = t2;
    return e2 < 2 && (e2 = 2), s2 < 2 && (s2 = 2), e2 >= s2 && (e2 = 2, s2 = 4), { near: e2, far: s2 };
  }
  _computeCascadeDistances(t2, e2) {
    this._numCascades = Math.min(1 + Math.floor(f$k(t2 / e2, 4)), this._maxNumCascades);
    const a2 = (t2 - e2) / this._numCascades, r2 = (t2 / e2) ** (1 / this._numCascades);
    let i2 = e2, c2 = e2;
    for (let h2 = 0; h2 < this._numCascades + 1; ++h2)
      this._cascadeDistances[h2] = h$e(i2, c2, this._splitSchemeLambda), i2 *= r2, c2 += a2;
  }
  get gpuMemoryUsage() {
    var _a, _b;
    return this._snapshots.reduce((t2, e2) => t2 + u$j(e2), (_b = (_a = this._fbo) == null ? void 0 : _a.gpuMemoryUsage) != null ? _b : 0);
  }
  get test() {
    const t2 = this;
    return { maxNumCascades: this._maxNumCascades, cascades: this._cascades, textureSize: this._textureSize, set splitSchemeLambda(e2) {
      t2._splitSchemeLambda = e2;
    }, get splitSchemeLambda() {
      return t2._splitSchemeLambda;
    }, set warp(e2) {
      t2._warp = e2;
    }, get warp() {
      return t2._warp;
    } };
  }
}
const Z$1 = e$c(), $$1 = e$c(), tt = e$c(), et = n$e(), st = [];
for (let Ft = 0; Ft < 8; ++Ft)
  st.push(n$e());
const at = n$a(), rt = n$a(), it = n$j(), ct = n$j(), ht = n$j(), ot = n$j(), nt = n$j(), _t = e$c(), mt = n$a(), ut = [], dt = e$c(), pt = new Float32Array(64), lt = n$j(), ft = n$j(), xt = [n$j(), n$j(), n$j(), n$j()], Tt = n$j(), gt = n$j(), bt = n$j(), wt = n$j(), St = n$j(), Mt = n$j(), Ct = n$j();
function Dt(t2, e2, s2, a2, r2, i2, c2, h2) {
  r$m(lt, 0, 0);
  for (let u2 = 0; u2 < 4; ++u2)
    s$q(lt, lt, t2[u2]);
  l$k(lt, lt, 0.25), r$m(ft, 0, 0);
  for (let u2 = 4; u2 < 8; ++u2)
    s$q(ft, ft, t2[u2]);
  l$k(ft, ft, 0.25), A$a(xt[0], t2[4], t2[5], 0.5), A$a(xt[1], t2[5], t2[6], 0.5), A$a(xt[2], t2[6], t2[7], 0.5), A$a(xt[3], t2[7], t2[4], 0.5);
  let o2 = 0, n2 = b$8(xt[0], lt);
  for (let u2 = 1; u2 < 4; ++u2) {
    const t3 = b$8(xt[u2], lt);
    t3 < n2 && (n2 = t3, o2 = u2);
  }
  o$t(Tt, xt[o2], t2[o2 + 4]);
  const _2 = Tt[0];
  let m2, S2;
  Tt[0] = -Tt[1], Tt[1] = _2, o$t(gt, ft, lt), j$9(gt, Tt) < 0 && g$6(Tt, Tt), A$a(Tt, Tt, gt, s2), v$b(Tt, Tt), m2 = S2 = j$9(o$t(bt, t2[0], lt), Tt);
  for (let u2 = 1; u2 < 8; ++u2) {
    const e3 = j$9(o$t(bt, t2[u2], lt), Tt);
    e3 < m2 ? m2 = e3 : e3 > S2 && (S2 = e3);
  }
  a$d(a2, lt), l$k(bt, Tt, m2 - e2), s$q(a2, a2, bt);
  let M2 = -1, C2 = 1, D2 = 0, E2 = 0;
  for (let u2 = 0; u2 < 8; ++u2) {
    o$t(wt, t2[u2], a2), v$b(wt, wt);
    const e3 = Tt[0] * wt[1] - Tt[1] * wt[0];
    e3 > 0 ? e3 > M2 && (M2 = e3, D2 = u2) : e3 < C2 && (C2 = e3, E2 = u2);
  }
  s$r(M2 > 0, "leftArea"), s$r(C2 < 0, "rightArea"), l$k(St, Tt, m2), s$q(St, St, lt), l$k(Mt, Tt, S2), s$q(Mt, Mt, lt), Ct[0] = -Tt[1], Ct[1] = Tt[0];
  const j2 = u$k(a2, t2[E2], Mt, s$q(bt, Mt, Ct), 1, r2), v2 = u$k(a2, t2[D2], Mt, bt, 1, i2), z2 = u$k(a2, t2[D2], St, s$q(bt, St, Ct), 1, c2), R2 = u$k(a2, t2[E2], St, bt, 1, h2);
  s$r(j2, "rayRay"), s$r(v2, "rayRay"), s$r(z2, "rayRay"), s$r(R2, "rayRay");
}
function Et(t2, e2) {
  return 3 * e2 + t2;
}
const jt = n$j();
function vt(t2, e2) {
  return r$m(jt, t2[e2], t2[e2 + 3]), jt;
}
const zt = n$j(), Rt = e$r();
function Ut(t2, e2, s2, a2, r2) {
  o$t(zt, s2, a2), l$k(zt, zt, 0.5), Rt[0] = zt[0], Rt[1] = zt[1], Rt[2] = 0, Rt[3] = zt[1], Rt[4] = -zt[0], Rt[5] = 0, Rt[6] = zt[0] * zt[0] + zt[1] * zt[1], Rt[7] = zt[0] * zt[1] - zt[1] * zt[0], Rt[8] = 1, Rt[Et(0, 2)] = -j$9(vt(Rt, 0), t2), Rt[Et(1, 2)] = -j$9(vt(Rt, 1), t2);
  let i2 = j$9(vt(Rt, 0), s2) + Rt[Et(0, 2)], c2 = j$9(vt(Rt, 1), s2) + Rt[Et(1, 2)], h2 = j$9(vt(Rt, 0), a2) + Rt[Et(0, 2)], o2 = j$9(vt(Rt, 1), a2) + Rt[Et(1, 2)];
  i2 = -(i2 + h2) / (c2 + o2), Rt[Et(0, 0)] += Rt[Et(1, 0)] * i2, Rt[Et(0, 1)] += Rt[Et(1, 1)] * i2, Rt[Et(0, 2)] += Rt[Et(1, 2)] * i2, i2 = 1 / (j$9(vt(Rt, 0), s2) + Rt[Et(0, 2)]), c2 = 1 / (j$9(vt(Rt, 1), s2) + Rt[Et(1, 2)]), Rt[Et(0, 0)] *= i2, Rt[Et(0, 1)] *= i2, Rt[Et(0, 2)] *= i2, Rt[Et(1, 0)] *= c2, Rt[Et(1, 1)] *= c2, Rt[Et(1, 2)] *= c2, Rt[Et(2, 0)] = Rt[Et(1, 0)], Rt[Et(2, 1)] = Rt[Et(1, 1)], Rt[Et(2, 2)] = Rt[Et(1, 2)], Rt[Et(1, 2)] += 1, i2 = j$9(vt(Rt, 1), e2) + Rt[Et(1, 2)], c2 = j$9(vt(Rt, 2), e2) + Rt[Et(2, 2)], h2 = j$9(vt(Rt, 1), s2) + Rt[Et(1, 2)], o2 = j$9(vt(Rt, 2), s2) + Rt[Et(2, 2)], i2 = -0.5 * (i2 / c2 + h2 / o2), Rt[Et(1, 0)] += Rt[Et(2, 0)] * i2, Rt[Et(1, 1)] += Rt[Et(2, 1)] * i2, Rt[Et(1, 2)] += Rt[Et(2, 2)] * i2, i2 = j$9(vt(Rt, 1), e2) + Rt[Et(1, 2)], c2 = j$9(vt(Rt, 2), e2) + Rt[Et(2, 2)], h2 = -c2 / i2, Rt[Et(1, 0)] *= h2, Rt[Et(1, 1)] *= h2, Rt[Et(1, 2)] *= h2, r2[0] = Rt[0], r2[1] = Rt[1], r2[2] = 0, r2[3] = Rt[2], r2[4] = Rt[3], r2[5] = Rt[4], r2[6] = 0, r2[7] = Rt[5], r2[8] = 0, r2[9] = 0, r2[10] = 1, r2[11] = 0, r2[12] = Rt[6], r2[13] = Rt[7], r2[14] = 0, r2[15] = Rt[8];
}
class r$7 {
  constructor() {
    this.adds = new l$9(), this.removes = new l$9(), this.updates = new l$9({ allocator: (e2) => e2 || new s$8(), deallocator: (e2) => (e2.renderGeometry = null, e2) });
  }
  clear() {
    this.adds.clear(), this.removes.clear(), this.updates.clear();
  }
  prune() {
    this.adds.prune(), this.removes.prune(), this.updates.prune();
  }
}
class s$8 {
}
class t$4 {
  constructor() {
    this.adds = new Array(), this.removes = new Array(), this.updates = new Array();
  }
}
var i$5, t$3;
!function(i2) {
  i2[i2.OBJECT = 0] = "OBJECT", i2[i2.HUD = 1] = "HUD", i2[i2.TERRAIN = 2] = "TERRAIN", i2[i2.OVERLAY = 3] = "OVERLAY", i2[i2.I3S = 4] = "I3S", i2[i2.PCL = 5] = "PCL", i2[i2.LOD = 6] = "LOD", i2[i2.VOXEL = 7] = "VOXEL";
}(i$5 || (i$5 = {}));
class s$7 {
  constructor() {
    this.verticalOffset = 0, this.selectionMode = false, this.hud = true, this.selectOpaqueTerrainOnly = true, this.invisibleTerrain = false, this.backfacesTerrain = true, this.isFiltered = false, this.store = t$3.ALL;
  }
}
!function(i2) {
  i2[i2.MIN = 0] = "MIN", i2[i2.MINMAX = 1] = "MINMAX", i2[i2.ALL = 2] = "ALL";
}(t$3 || (t$3 = {}));
function c$3(t2) {
  return r$d(t2) && r$d(t2.dist);
}
const A$2 = 1e-5;
class T$2 {
  constructor(t2) {
    this.options = new s$7(), this._results = new I$1(), this.transform = new u$l(), this.tolerance = A$2, this.verticalOffset = null, this._ray = d$d(), this._rayEnd = n$a(), this._rayBeginTransformed = n$a(), this._rayEndTransformed = n$a(), this.viewingMode = t2 != null ? t2 : l$g.Global;
  }
  get results() {
    return this._results;
  }
  get ray() {
    return this._ray;
  }
  get rayBegin() {
    return this._ray.origin;
  }
  get rayEnd() {
    return this._rayEnd;
  }
  reset(t2, r2, s2) {
    this.resetWithRay(h$f(t2, r2, this._ray), s2);
  }
  resetWithRay(t2, r2) {
    this.camera = r2, t2 !== this._ray && k$6(t2, this._ray), this.options.verticalOffset !== 0 ? this.viewingMode === l$g.Local ? this._ray.origin[2] -= this.options.verticalOffset : this.verticalOffset = this.options.verticalOffset : this.verticalOffset = null, u$a(this._rayEnd, this._ray.origin, this._ray.direction), this._results.init(this._ray);
  }
  intersect(r2 = null, s2, i2, e2, a2) {
    this.point = s2, this.filterPredicate = e2, this.tolerance = i2 != null ? i2 : A$2;
    const n2 = y$6(this.verticalOffset);
    if (r$d(r2) && r2.length > 0) {
      const s3 = a2 ? (t2) => {
        a2(t2) && this.intersectObject(t2);
      } : (t2) => {
        this.intersectObject(t2);
      };
      for (const i3 of r2) {
        const r3 = i3.getSpatialQueryAccelerator && i3.getSpatialQueryAccelerator();
        r$d(r3) ? (r$d(n2) ? r3.forEachAlongRayWithVerticalOffset(this._ray.origin, this._ray.direction, s3, n2) : r3.forEachAlongRay(this._ray.origin, this._ray.direction, s3), this.options.selectionMode && this.options.hud && r3.forEachDegenerateObject(s3)) : i3.objects.forAll((t2) => s3(t2));
      }
    }
    this.sortResults();
  }
  intersectObject(r2) {
    const s2 = r2.geometryRecords;
    if (!s2)
      return;
    const i2 = r2.transformation, a2 = y$6(this.verticalOffset);
    for (const o2 of s2) {
      const { geometry: s3, material: h2, instanceParameters: d2 } = o2;
      if (u$d(d2))
        continue;
      const c2 = s3.id;
      this.transform.setAndInvalidateLazyTransforms(i2, o2.getShaderTransformation()), O$7(this._rayBeginTransformed, this.rayBegin, this.transform.inverse), O$7(this._rayEndTransformed, this.rayEnd, this.transform.inverse);
      const l2 = this.transform.transform;
      r$d(a2) && (a2.objectTransform = this.transform), h2.intersect(s3, d2, this.transform.transform, this, this._rayBeginTransformed, this._rayEndTransformed, (s4, i3, a3, n2, o3, h3) => {
        if (s4 >= 0) {
          if (r$d(this.filterPredicate) && !this.filterPredicate(this._ray.origin, this._rayEnd, s4))
            return;
          const d3 = n2 ? this._results.hud : this._results, m2 = n2 ? (n3) => {
            const d4 = { object: r2, geometryId: c2, triangleNr: a3, center: r$d(h3) ? [h3[0], h3[1], h3[2]] : null };
            n3.set(i$5.HUD, d4, s4, i3, o$c, o3);
          } : (t2) => t2.set(i$5.OBJECT, { object: r2, geometryId: c2, triangleNr: a3 }, s4, i3, l2, o3);
          if ((d3.min.drapedLayerOrder == null || o3 >= d3.min.drapedLayerOrder) && (d3.min.dist == null || s4 < d3.min.dist) && m2(d3.min), this.options.store !== t$3.MIN && (d3.max.drapedLayerOrder == null || o3 < d3.max.drapedLayerOrder) && (d3.max.dist == null || s4 > d3.max.dist) && m2(d3.max), this.options.store === t$3.ALL)
            if (n2) {
              const t2 = new M$1(this._ray);
              m2(t2), this._results.hud.all.push(t2);
            } else {
              const t2 = new N(this._ray);
              m2(t2), this._results.all.push(t2);
            }
        }
      }, o2.shaderTransformation);
    }
  }
  sortResults(t2 = this._results.all) {
    t2.sort((t3, s2) => t3.dist !== s2.dist ? i$g(t3.dist, 0) - i$g(s2.dist, 0) : t3.drapedLayerOrder !== s2.drapedLayerOrder ? i$g(t3.drapedLayerOrder, Number.MAX_VALUE) - i$g(s2.drapedLayerOrder, Number.MAX_VALUE) : i$g(s2.drapedLayerGraphicOrder, Number.MIN_VALUE) - i$g(t3.drapedLayerGraphicOrder, Number.MIN_VALUE));
  }
}
function x$1(t2) {
  return new T$2(t2);
}
class I$1 {
  constructor() {
    this.min = new N(d$d()), this.max = new N(d$d()), this.hud = { min: new M$1(d$d()), max: new M$1(d$d()), all: new Array() }, this.ground = new N(d$d()), this.all = [];
  }
  init(t2) {
    this.min.init(t2), this.max.init(t2), this.ground.init(t2), this.all.length = 0, this.hud.min.init(t2), this.hud.max.init(t2), this.hud.all.length = 0;
  }
}
class N {
  constructor(t2) {
    this.intersector = i$5.OBJECT, this.normal = n$a(), this.transformation = e$c(), this._ray = d$d(), this.init(t2);
  }
  get ray() {
    return this._ray;
  }
  get distanceInRenderSpace() {
    return r$d(this.dist) ? (g$4(B, this.ray.direction, this.dist), s$m(B)) : null;
  }
  getIntersectionPoint(t2) {
    return !!c$3(this) && (g$4(B, this.ray.direction, this.dist), u$a(t2, this.ray.origin, B), true);
  }
  getTransformedNormal(t2) {
    return r$g(R$2, this.normal), R$2[3] = 0, w$2(R$2, R$2, this.transformation), r$g(t2, R$2), z$5(t2, t2);
  }
  init(t2) {
    this.dist = null, this.target = null, this.drapedLayerOrder = null, this.drapedLayerGraphicOrder = null, this.intersector = i$5.OBJECT, k$6(t2, this._ray);
  }
  set(t2, i2, a2, n2, o2, h2, c2) {
    this.intersector = t2, this.dist = a2, r$g(this.normal, i$g(n2, b$9)), n$9(this.transformation, i$g(o2, o$c)), this.target = i2, this.drapedLayerOrder = h2, this.drapedLayerGraphicOrder = c2;
  }
  copy(t2) {
    k$6(t2.ray, this._ray), this.intersector = t2.intersector, this.dist = t2.dist, this.target = t2.target, this.drapedLayerOrder = t2.drapedLayerOrder, this.drapedLayerGraphicOrder = t2.drapedLayerGraphicOrder, r$g(this.normal, t2.normal), n$9(this.transformation, t2.transformation);
  }
}
class M$1 extends N {
  constructor() {
    super(...arguments), this.intersector = i$5.HUD;
  }
}
function U(t2) {
  return new N(t2);
}
const B = n$a(), R$2 = n$e();
function r$6(r2) {
  const n2 = new Map(), a2 = (r3) => {
    let t2 = n2.get(r3);
    return t2 || (t2 = new t$4(), n2.set(r3, t2)), t2;
  };
  return r2.removes.forAll((e2) => {
    t$2(e2) && a2(e2.material).removes.push(e2);
  }), r2.adds.forAll((e2) => {
    t$2(e2) && a2(e2.material).adds.push(e2);
  }), r2.updates.forAll((e2) => {
    t$2(e2.renderGeometry) && a2(e2.renderGeometry.material).updates.push(e2);
  }), n2;
}
function t$2(e2) {
  return e2.data.indexCount >= 1;
}
class e$3 {
  constructor(r2, t2) {
    this._material = r2, this._repository = t2, this._map = new Map();
  }
  destroy() {
    this._map.forEach((t2, e2) => {
      r$d(t2) && this._repository.release(this._material, e2);
    });
  }
  load(e2, s2, i2) {
    if (!this._material.requiresSlot(s2, i2))
      return null;
    this._map.has(i2) || this._map.set(i2, this._repository.acquire(this._material, s2, i2));
    const a2 = this._map.get(i2);
    if (r$d(a2)) {
      if (a2.ensureResources(e2) === O$9.LOADED)
        return a2;
      this._repository.requestRender();
    }
    return null;
  }
}
class i$4 extends c$i {
  constructor(s2 = n$a()) {
    super(), this.origin = s2, this.slicePlaneLocalOrigin = this.origin;
  }
}
class e$2 {
  constructor() {
    this.enabled = true, this._time = n$m(0);
  }
  get time() {
    return this._time;
  }
  advance(t2) {
    return this._time !== t2.time && (this._time = t2.time, true);
  }
}
function o$1(o2) {
  o2.fragment.code.add(n$d`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`);
}
function n$1(o2) {
  o2.fragment.code.add(n$d`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`);
}
function i$3(t2) {
  t2.fragment.uniforms.add(new f$g("texWaveNormal", (e2) => e2.waveNormal)), t2.fragment.uniforms.add(new f$g("texWavePerturbation", (e2) => e2.wavePertubation)), t2.fragment.uniforms.add([new e$k("waveParams", (e2) => r$j(f$3, e2.waveStrength, e2.waveTextureRepeat, e2.flowStrength, e2.flowOffset)), new e$m("waveDirection", (t3) => r$m(c$2, t3.waveDirection[0] * t3.waveVelocity, t3.waveDirection[1] * t3.waveVelocity))]), t2.include(o$1), t2.fragment.code.add(n$d`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`);
}
const f$3 = n$e(), c$2 = n$j();
function r$5(r2, c2) {
  c2.spherical ? r2.vertex.code.add(n$d`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`) : r2.vertex.code.add(n$d`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`), c2.spherical ? r2.vertex.code.add(n$d`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`) : r2.vertex.code.add(n$d`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`);
}
function e$1(e2) {
  e2.fragment.code.add(n$d`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`);
}
class s$6 extends i$o {
  constructor(e2, s2) {
    super(e2, "samplerCube", a$l.Pass, (r2, o2, t2) => r2.bindTexture(e2, s2(o2, t2)));
  }
}
function v$2(v2) {
  const R2 = v2.fragment;
  R2.uniforms.add([new e$l("rotationMatrixClouds", (o2, a2) => a2.cloudsFade.parallax.transform), new e$l("rotationMatrixCloudsCrossFade", (o2, a2) => a2.cloudsFade.parallaxNew.transform), new e$h("anchorPosition", (o2, a2) => a2.cloudsFade.parallax.anchorPointClouds), new e$h("anchorPositionCrossFade", (o2, a2) => a2.cloudsFade.parallaxNew.anchorPointClouds), new o$e("cloudsHeight", (o2, a2) => a2.cloudsFade.parallax.cloudsHeight), new o$e("radiusCurvatureCorrectionFactor", (o2, a2) => a2.cloudsFade.parallax.radiusCurvatureCorrectionFactor), new o$e("totalFadeInOut", (o2, a2) => a2.cloudsFade.fadeInOut.stage === I$2.FINISHED ? a2.cloudsFade.fadeInOutHeight.factor + 1 - a2.cloudsFade.fadeIn.factor : a2.cloudsFade.fadeInOutHeight.factor + 1 - a2.cloudsFade.fadeInOut.factor), new o$e("crossFadeAnchorFactor", (a2, t2) => a$c(t2.cloudsFade.crossFade.factor, 0, 1)), new s$6("cubeMap", (o2, t2) => r$d(t2.cloudsFade.data) && r$d(t2.cloudsFade.data.cubeMap) ? t2.cloudsFade.data.cubeMap.colorTexture : null), new s$s("crossFade", (o2, a2) => a2.cloudsFade.crossFade.enabled), new s$s("readChannelsRG", (o2, a2) => a2.cloudsFade.readChannels === I$3.RG), new s$s("fadeTextureChannels", (o2, a2) => a2.cloudsFade.renderingStage === E$1.FADING_TEXTURE_CHANNELS)]), R2.constants.add("planetRadius", "float", s$t.radius), R2.code.add(n$d`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`), R2.code.add(n$d`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`), R2.code.add(n$d`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`), o$u(R2), a$m(R2), R2.code.add(n$d`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`), R2.code.add(n$d`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`), R2.code.add(n$d`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`), R2.code.add(n$d`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`), R2.code.add(n$d`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`);
}
function c$1(c2, s2) {
  c2.include(n$n, s2), c2.include(e$1), c2.include(n$1), s2.hasCloudsReflections && c2.include(v$2, s2), s2.hasScreenSpaceReflections && c2.include(n$2, s2);
  const f2 = c2.fragment;
  f2.constants.add("fresnelSky", "vec3", [0.02, 1, 15]).add("fresnelMaterial", "vec2", [0.02, 0.1]).add("roughness", "float", 0.015).add("foamIntensityExternal", "float", 1.7).add("ssrIntensity", "float", 0.65).add("ssrHeightFadeStart", "float", 3e5).add("ssrHeightFadeEnd", "float", 5e5).add("waterDiffusion", "float", 0.92).add("waterSeaColorMod", "float", 0.8).add("correctionViewingPowerFactor", "float", 0.4).add("skyZenitColor", "vec3", [0.52, 0.68, 0.9]).add("skyColor", "vec3", [0.67, 0.79, 0.9]).add("cloudFresnelModifier", "vec2", [1.2, 0.01]), f2.code.add(n$d`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`), f2.uniforms.add([new o$e("lightingSpecularStrength", (e2, o2) => o2.lighting.mainLight.specularStrength), new o$e("lightingEnvironmentStrength", (e2, o2) => o2.lighting.mainLight.environmentStrength)]), f2.code.add(n$d`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`), s2.hasCloudsReflections && f2.code.add(n$d`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`), s2.hasScreenSpaceReflections ? (f2.uniforms.add(new e$l("view", (e2, o2) => o2.ssr.camera.viewMatrix)), f2.uniforms.add(new f$g("lastFrameColorMap", (e2, o2) => o2.ssr.lastFrameColorTexture)), f2.code.add(n$d`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`)) : f2.code.add(n$d`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`), s2.hasCloudsReflections ? s2.hasScreenSpaceReflections ? f2.code.add(n$d`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`) : f2.code.add(n$d`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`) : f2.code.add(n$d`return waterRenderedColor;
}`);
}
function P$1(P2) {
  const _2 = new o$i(), { vertex: M2, fragment: S2 } = _2;
  v$7(M2, P2), _2.include(r$q, P2), _2.attributes.add(O$8.POSITION, "vec3"), _2.attributes.add(O$8.UV0, "vec2");
  const x2 = new e$k("waterColor", (e2) => e2.color);
  if (P2.output === h$8.Color && P2.isDraped)
    return _2.varyings.add("vpos", "vec3"), M2.uniforms.add(x2), M2.code.add(n$d`
        void main(void) {
          if (waterColor.a < ${n$d.float(t$j)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `), S2.uniforms.add(x2), S2.code.add(n$d`void main() {
gl_FragColor = waterColor;
}`), _2;
  switch (P2.output !== h$8.Color && P2.output !== h$8.Alpha || (_2.include(r$5, P2), _2.include(d$e, P2), _2.varyings.add("vuv", "vec2"), _2.varyings.add("vpos", "vec3"), _2.varyings.add("vnormal", "vec3"), _2.varyings.add("vtbnMatrix", "mat3"), P2.hasMultipassTerrain && _2.varyings.add("depth", "float"), M2.uniforms.add(x2), M2.code.add(n$d`
      void main(void) {
        if (waterColor.a < ${n$d.float(t$j)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${P2.hasMultipassTerrain ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}

        gl_Position = transformPosition(proj, view, vpos);
        ${P2.output === h$8.Color ? "forwardLinearDepth();" : ""}
      }
    `)), _2.include(n$g, P2), P2.output) {
    case h$8.Alpha:
      _2.include(u$c, P2), S2.uniforms.add(x2), S2.code.add(n$d`
        void main() {
          discardBySlice(vpos);
          ${P2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}

          gl_FragColor = vec4(waterColor.a);
        }
      `);
      break;
    case h$8.Color:
      _2.include(r$r, P2), _2.include(m$e, { pbrMode: d$f.Disabled, lightingSphericalHarmonicsOrder: 2 }), _2.include(i$3), _2.include(u$c, P2), _2.include(v$c, P2), _2.include(c$1, P2), S2.uniforms.add([x2, new o$e("timeElapsed", (e2) => e2.timeElapsed), M2.uniforms.get("view"), M2.uniforms.get("localOrigin")]), c$d(S2, P2), S2.include(e$n), o$u(S2), a$m(S2), S2.code.add(n$d`
      void main() {
        discardBySlice(vpos);
        ${P2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${P2.receiveShadows ? n$d`1.0 - readShadowMap(vpos, linearDepth)` : "1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${P2.transparencyPassType === o$d.Color ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
      }
    `);
      break;
    case h$8.Normal:
      _2.include(r$5, P2), _2.include(i$3, P2), _2.include(u$c, P2), _2.varyings.add("vpos", "vec3"), _2.varyings.add("vuv", "vec2"), M2.uniforms.add(x2), M2.code.add(n$d`
        void main(void) {
          if (waterColor.a < ${n$d.float(t$j)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `), S2.uniforms.add(new o$e("timeElapsed", (e2) => e2.timeElapsed)), S2.code.add(n$d`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);
      break;
    case h$8.Highlight:
      _2.include(a$f, P2), _2.varyings.add("vpos", "vec3"), M2.uniforms.add(x2), M2.code.add(n$d`
      void main(void) {
        if (waterColor.a < ${n$d.float(t$j)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `), _2.include(u$c, P2), S2.code.add(n$d`void main() {
discardBySlice(vpos);
outputHighlight();
}`);
  }
  return _2;
}
const _ = Object.freeze(Object.defineProperty({ __proto__: null, build: P$1 }, Symbol.toStringTag, { value: "Module" }));
class O extends e$o {
  initializeConfiguration(e2, o2) {
    o2.hasWebGL2Context = e2.rctx.type === r$n.WEBGL2, o2.spherical = e2.viewingMode === l$g.Global, o2.doublePrecisionRequiresObfuscation = i$p(e2.rctx);
  }
  initializeProgram(e2) {
    return new o$k(e2.rctx, O.shader.get().build(this.configuration), E$b);
  }
  _setPipelineState(e2) {
    const t2 = this.configuration, r2 = e2 === o$d.NONE, i2 = e2 === o$d.FrontFace;
    return W$2({ blending: t2.output !== h$8.Normal && t2.output !== h$8.Highlight && t2.transparent ? r2 ? c$e : A$8(e2) : null, depthTest: { func: l$b(e2) }, depthWrite: r2 ? t2.writeDepth && a$b : E$8(e2), colorWrite: _$6, polygonOffset: r2 || i2 ? null : a$i(t2.enableOffset) });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
}
O.shader = new t$k(_, () => import("./WaterSurface.glsl.js"));
class w extends s$j {
  constructor() {
    super(...arguments), this.output = h$8.Color, this.transparencyPassType = o$d.NONE, this.spherical = false, this.receiveShadows = false, this.hasSlicePlane = false, this.transparent = false, this.enableOffset = true, this.writeDepth = false, this.hasScreenSpaceReflections = false, this.doublePrecisionRequiresObfuscation = false, this.hasCloudsReflections = false, this.isDraped = false, this.hasMultipassTerrain = false, this.cullAboveGround = false;
  }
}
e$f([e$g({ count: h$8.COUNT })], w.prototype, "output", void 0), e$f([e$g({ count: o$d.COUNT })], w.prototype, "transparencyPassType", void 0), e$f([e$g()], w.prototype, "spherical", void 0), e$f([e$g()], w.prototype, "receiveShadows", void 0), e$f([e$g()], w.prototype, "hasSlicePlane", void 0), e$f([e$g()], w.prototype, "transparent", void 0), e$f([e$g()], w.prototype, "enableOffset", void 0), e$f([e$g()], w.prototype, "writeDepth", void 0), e$f([e$g()], w.prototype, "hasScreenSpaceReflections", void 0), e$f([e$g()], w.prototype, "doublePrecisionRequiresObfuscation", void 0), e$f([e$g()], w.prototype, "hasCloudsReflections", void 0), e$f([e$g()], w.prototype, "isDraped", void 0), e$f([e$g()], w.prototype, "hasMultipassTerrain", void 0), e$f([e$g()], w.prototype, "cullAboveGround", void 0), e$f([e$g({ constValue: d$f.Water })], w.prototype, "pbrMode", void 0), e$f([e$g({ constValue: true })], w.prototype, "useCustomDTRExponentForWater", void 0), e$f([e$g({ constValue: true })], w.prototype, "highStepCount", void 0), e$f([e$g({ constValue: false })], w.prototype, "useFillLights", void 0);
class r$4 extends t$l {
  _updateShadowState(e2) {
    e2.shadowMap.enabled !== this._material.parameters.receiveShadows && this._material.setParameters({ receiveShadows: e2.shadowMap.enabled });
  }
  _updateSSRState(e2) {
    e2.ssr.enabled !== this._material.parameters.hasScreenSpaceReflections && this._material.setParameters({ hasScreenSpaceReflections: e2.ssr.enabled });
  }
  _updateCloudsReflectionState(t2) {
    const a2 = r$d(t2.cloudsFade.data);
    a2 !== this._material.parameters.hasCloudsReflections && this._material.setParameters({ hasCloudsReflections: a2 });
  }
  ensureResources(e2) {
    return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(e2);
  }
  beginSlot(e2) {
    return this._output === h$8.Color && (this._updateShadowState(e2), this._updateSSRState(e2), this._updateCloudsReflectionState(e2)), this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters), this.ensureTechnique(O, e2);
  }
}
class f$2 extends d$a {
  constructor(e2) {
    super(e2, new d()), this._configuration = new w(), this.animation = new e$2();
  }
  getConfiguration(e2, t2) {
    return this._configuration.output = e2, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.receiveShadows = this.parameters.receiveShadows, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this.parameters.transparent, this._configuration.hasScreenSpaceReflections = this.parameters.hasScreenSpaceReflections, this._configuration.hasCloudsReflections = this.parameters.hasCloudsReflections, this._configuration.isDraped = this.parameters.isDraped, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.enableOffset = t2.camera.relativeElevation < S$7, this._configuration.hasMultipassTerrain = t2.multipassTerrain.enabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  update(t2) {
    const r2 = Math.min(t2.camera.relativeElevation, t2.camera.distance);
    this.animation.enabled = Math.sqrt(this.parameters.waveTextureRepeat / this.parameters.waveStrength) * r2 < A$1;
    const i2 = this.animation.advance(t2);
    return this.setParameters({ timeElapsed: u$m(this.animation.time) * this.parameters.animationSpeed }, false), this.animation.enabled && i2;
  }
  intersect(e2, t2, r2, i2, a2, s2, n2) {
    x$9(e2, t2, i2, a2, s2, void 0, n2);
  }
  requiresSlot(e2, t2) {
    switch (t2) {
      case h$8.Normal:
        return e2 === E$a.DRAPED_WATER;
      case h$8.Color:
        if (this.parameters.isDraped)
          return e2 === E$a.DRAPED_MATERIAL;
        break;
      case h$8.Alpha:
        break;
      case h$8.Highlight:
        return e2 === E$a.OPAQUE_MATERIAL || e2 === E$a.DRAPED_MATERIAL;
      default:
        return false;
    }
    let r2 = E$a.OPAQUE_MATERIAL;
    return this.parameters.transparent && (r2 = this.parameters.writeDepth ? E$a.TRANSPARENT_MATERIAL : E$a.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL), e2 === r2;
  }
  createGLMaterial(e2) {
    return new r$4(e2);
  }
  createBufferWriter() {
    return new v$4(f$6);
  }
}
class d extends h$d {
  constructor() {
    super(...arguments), this.waveStrength = 0.06, this.waveTextureRepeat = 32, this.waveDirection = r$p(1, 0), this.waveVelocity = 0.05, this.flowStrength = 0.015, this.flowOffset = -0.5, this.animationSpeed = 0.35, this.timeElapsed = 0, this.color = r$o(0, 0, 0, 0), this.transparent = true, this.writeDepth = true, this.hasSlicePlane = false, this.isDraped = false, this.receiveShadows = true, this.hasScreenSpaceReflections = false, this.hasCloudsReflections = false;
  }
}
const A$1 = 35e3;
class t$1 {
  constructor() {
    this.first = 0, this.count = 0;
  }
}
class o {
  constructor(t2 = 0, o2 = 0) {
    this.from = t2, this.to = o2;
  }
}
class s$5 extends o {
  constructor(t2, o2, s2, r2, i2, n2) {
    super(o2, s2), this.id = t2, this.isVisible = r2, this.hasHighlights = i2, this.hasOccludees = n2;
  }
}
function r$3(t2) {
  return Array.from(t2.values()).sort(i$2);
}
function i$2(t2, o2) {
  return t2.from === o2.from ? t2.to - o2.to : t2.from - o2.from;
}
function n(t2, o2) {
  const s2 = t2.back();
  if (s2 == null) {
    const s3 = t2.pushNew();
    return s3.first = o2.from, void (s3.count = o2.to - o2.from);
  }
  if (c(s2, o2)) {
    const t3 = o2.from - s2.first + o2.to - o2.from;
    s2.count = t3;
  } else {
    const s3 = t2.pushNew();
    s3.first = o2.from, s3.count = o2.to - o2.from;
  }
}
function c(t2, o2) {
  return t2.first + t2.count >= o2.from;
}
class e {
  constructor(e2, s2) {
    this._pool = e2, this._size = 0, this._buffer = e2.newBuffer(r$2(s2));
  }
  dispose() {
    this._buffer = this._pool.deleteBuffer(this._buffer), this._size = 0;
  }
  release() {
    this.erase(0, this._size), this.dispose();
  }
  get buffer() {
    return this._buffer;
  }
  get size() {
    return this._size;
  }
  grow(e2) {
    this._resize(this._size + e2, true).dispose();
  }
  allocate(e2) {
    return this._resize(e2, false);
  }
  _resize(e2, s2) {
    let r2;
    const i2 = t(this._buffer.length, this._size, e2);
    if (this._buffer.length !== i2) {
      const e3 = this._pool.newBuffer(i2);
      s2 && (e3.array.set(this._buffer.array.subarray(0, Math.min(this._size, i2))), e3.vao.vertexBuffers.geometry.setSubData(e3.array, 0, 0, e3.array.length)), r2 = this._buffer, this._buffer = e3;
    }
    const f2 = this._size;
    return this._size = e2, r2 ? { dispose: () => {
      r2.array.fill(0, 0, f2), this._pool.deleteBuffer(r2);
    }, copy: (e3, s3, t2) => this._buffer.array.set(r2.array.subarray(s3, t2), e3), hasNewBuffer: true } : { dispose: () => {
    }, copy: (e3, s3, r3) => {
      e3 !== s3 && this._buffer.array.copyWithin(e3, s3, r3);
    }, hasNewBuffer: false };
  }
  erase(e2, s2) {
    this._buffer.array.fill(0, e2, s2);
  }
}
const s$4 = 65536;
function r$2(e2) {
  return Math.ceil(e2 / s$4) * s$4;
}
function t(e2, s2, t2) {
  return s2 <= t2 ? e2 >= t2 ? e2 : r$2(Math.max(2 * e2, t2)) : e2 <= 2 * t2 ? e2 : r$2(t2);
}
class s$3 {
  constructor(s2, o2, a2, i2) {
    this.vao = new r$s(s2, o2, { geometry: a2 }, { geometry: E$d.createVertex(s2, F$5.STATIC_DRAW) }), this.array = new Float32Array(i2), this.vao.vertexBuffers.geometry.setSize(this.array.byteLength);
  }
  dispose() {
    this.vao.dispose(true);
  }
  get length() {
    return this.array.length;
  }
}
const s$2 = s$u + 1;
class h {
  constructor(t2, e2, r2) {
    this._rctx = t2, this._locations = e2, this._layout = r2, this._cache = t2.newCache(`MergedRenderer pool ${e$a()}`, i$1);
  }
  dispose() {
    this._cache.destroy();
  }
  newBuffer(e2) {
    const r2 = e2.toString(), o2 = this._cache.pop(r2);
    if (r$d(o2)) {
      const t2 = o2.pop();
      return o2.length > 0 && this._cache.put(r2, o2, t2.array.byteLength * o2.length, s$2), t2;
    }
    return new s$3(this._rctx, this._locations, this._layout, e2);
  }
  deleteBuffer(e2) {
    const r2 = e2.array.byteLength, o2 = e2.array.length.toString(), c2 = this._cache.pop(o2);
    return r$d(c2) ? (c2.push(e2), this._cache.put(o2, c2, r2 * c2.length, -1)) : this._cache.put(o2, [e2], r2, -1), null;
  }
}
function i$1(t2, r2) {
  if (r2 === i$q.ALL)
    return void t2.forEach((t3) => t3.dispose());
  const o2 = t2.pop(), c2 = t2.length * o2.array.byteLength;
  return o2.dispose(), c2;
}
class S$1 {
  constructor(e2, t2, r2) {
    this._rctx = e2, this._materialRepository = t2, this._material = r2, this.type = "MergedRenderer", this._dataByOrigin = new Map(), this._renderCommandData = new l$9(), this._hasHighlights = false, this._hasOccludees = false, this._glMaterials = new e$3(this._material, this._materialRepository), this._bufferWriter = r2.createBufferWriter(), this._bufferPool = new h(e2, r2.vertexAttributeLocations, o$v(this._bufferWriter.vertexBufferLayout));
  }
  dispose() {
    this._glMaterials.destroy(), this._dataByOrigin.forEach((e2) => e2.geometry.dispose()), this._dataByOrigin.clear(), this._bufferPool.dispose();
  }
  get isEmpty() {
    return this._dataByOrigin.size === 0;
  }
  get hasHighlights() {
    return this._hasHighlights;
  }
  get hasOccludees() {
    return this._hasOccludees;
  }
  get hasWater() {
    return !this.isEmpty && this._material instanceof f$2;
  }
  get rendersOccluded() {
    return !this.isEmpty && this._material.renderOccluded !== o$m.Occlude;
  }
  modify(e2) {
    this._updateGeometries(e2.updates), this._addAndRemoveGeometries(e2.adds, e2.removes), this._updateDrawCommands();
  }
  _addAndRemoveGeometries(e$12, t2) {
    const r2 = this._bufferWriter, s2 = r2.vertexBufferLayout.stride / 4, a2 = this._dataByOrigin, i2 = D(e$12, t2);
    i2.forEach((e$13, t3) => {
      i2.delete(t3);
      const o2 = e$13.add.reduce((e2, t4) => e2 + r2.elementCount(t4.data), 0);
      let n2 = a2.get(t3);
      if (n2 == null)
        e$d(e$13.remove.length === 0), n2 = new R$1(e$13.origin, new e(this._bufferPool, o2 * s2)), a2.set(t3, n2);
      else if (e$13.add.length === 0 && n2.instances.size === e$13.remove.length)
        return n2.geometry.dispose(), void a2.delete(t3);
      let h2 = 0;
      n2.instances.forEach((e2) => h2 += e2.to - e2.from);
      const d2 = e$13.remove.reduce((e2, t4) => e2 + r2.elementCount(t4.data), 0), l2 = n2.geometry.size, m2 = (h2 + o2 - d2) * s2, c2 = P;
      if (m2 > s$4 && (m2 < l2 / 2 || l2 - m2 > 1048576) ? this._removeAndRebuild(n2, e$13.remove, s2, m2, c2) : e$13.remove.length > 0 && this._remove(n2, e$13.remove, s2, c2), e$13.add.length > 0) {
        const t4 = L;
        h$g(t4, -e$13.origin[0], -e$13.origin[1], -e$13.origin[2]), this._add(n2, e$13.add, s2, t4, c2);
      }
      const g2 = n2.geometry.buffer.vao.vertexBuffers.geometry;
      j(c2), c2.forAll(({ from: e2, to: t4 }) => {
        if (e2 < t4) {
          const r3 = n2.geometry.buffer.array;
          g2.setSubData(r3, e2, e2, t4);
        }
      }), c2.clear(), n2.drawCommandsDirty = true;
    });
  }
  _updateGeometries(e2) {
    const t2 = this._bufferWriter, r2 = t2.vertexBufferLayout.stride / 4;
    for (const s2 of e2) {
      const e3 = s2.renderGeometry, a2 = this._dataByOrigin.get(e3.origin.id), i2 = a2 && a2.instances.get(e3.id);
      if (!i2)
        return;
      const o2 = s2.updateType;
      if (o2 & I$5.VISIBILITIES && (i2.isVisible = e3.instanceParameters.visible), o2 & (I$5.HIGHLIGHTS | I$5.VISIBILITIES)) {
        const t3 = e3.instanceParameters.visible;
        i2.hasHighlights = !!e3.instanceParameters.highlights && t3;
      }
      if (o2 & I$5.OCCLUDEES && (i2.hasOccludees = !!e3.instanceParameters.occludees), o2 & (I$5.VERTEXATTRS | I$5.TRANSFORMATION)) {
        const { array: s3, vao: o3 } = a2.geometry.buffer;
        l$l(e3, T$1, G$1), t2.write(T$1, G$1, e3.data, t2.vertexBufferLayout.createView(s3.buffer), i2.from), e$d(i2.from + t2.elementCount(e3.data) === i2.to, "material VBO layout has changed"), o3.vertexBuffers.geometry.setSubData(s3, i2.from * r2, i2.from * r2, i2.to * r2);
      }
      a2.drawCommandsDirty = true;
    }
  }
  _updateDrawCommands() {
    this._hasHighlights = false, this._hasOccludees = false, this._dataByOrigin.forEach((t3) => {
      t3.hasHiddenInstances = false, t3.hasHighlights = false, t3.hasOccludees = false, n$o(t3.instances, (e2) => (e2.isVisible ? (e2.hasHighlights && (this._hasHighlights = true, t3.hasHighlights = true), e2.hasOccludees && (this._hasOccludees = true, t3.hasOccludees = true)) : t3.hasHiddenInstances = true, t3.hasHiddenInstances && t3.hasHighlights && t3.hasOccludees));
    });
    const t2 = (e2) => {
      if (e2.drawCommandsDefault.clear(), e2.drawCommandsHighlight.clear(), e2.drawCommandsOccludees.clear(), e2.drawCommandsShadowHighlightRest.clear(), e2.instances.size === 0)
        return;
      if (!M(e2)) {
        const t4 = e2.drawCommandsDefault.pushNew();
        return t4.first = 1 / 0, t4.count = 0, e2.instances.forEach((e3) => {
          t4.first = Math.min(t4.first, e3.from), t4.count = Math.max(t4.count, e3.to);
        }), void (t4.count -= t4.first);
      }
      const t3 = r$3(e2.instances);
      for (const r2 of t3)
        r2.isVisible && (r2.hasOccludees ? n(e2.drawCommandsOccludees, r2) : n(e2.drawCommandsDefault, r2), r2.hasHighlights ? n(e2.drawCommandsHighlight, r2) : n(e2.drawCommandsShadowHighlightRest, r2));
    };
    this._dataByOrigin.forEach((e2) => {
      e2.drawCommandsDirty && (t2(e2), e2.drawCommandsDirty = false);
    });
  }
  updateAnimation(e2) {
    return this._material.update(e2);
  }
  requiresSlot(e2, t2) {
    return this._material.requiresSlot(e2, t2);
  }
  render(e2, s2) {
    if (!this.requiresSlot(s2.slot, e2))
      return false;
    const a2 = e2 === h$8.Highlight || e2 === h$8.ShadowHighlight;
    if (a2 && !this._hasHighlights)
      return false;
    const i2 = e2 === h$8.ShadowExludeHighlight, o2 = !(a2 || i2);
    if (this._dataByOrigin.forEach((e3) => {
      if (a2 && !e3.hasHighlights)
        return;
      const t2 = (a2 ? e3.drawCommandsHighlight : i2 && M(e3) ? e3.drawCommandsShadowHighlightRest : e3.drawCommandsDefault) || null, r2 = o2 && e3.drawCommandsOccludees || null;
      ((t2 == null ? void 0 : t2.length) || (r2 == null ? void 0 : r2.length)) && this._renderCommandData.push(new x(e3.origin, e3.geometry, t2, r2));
    }), this._renderCommandData.length === 0)
      return false;
    const n2 = this._rctx, h2 = this._glMaterials.load(n2, s2.slot, e2);
    if (t$c(h2))
      return this._renderCommandData.clear(), false;
    const l2 = h2.beginSlot(s2), m2 = n2.bindTechnique(l2, this._material.parameters, s2);
    return this._renderCommandData.forAll((e3) => {
      m2.bindDraw(e3, s2, this._material.parameters);
      const { geometry: t2, renderCommands: a3, occludeeCommands: i3 } = e3;
      l2.ensureAttributeLocations(t2.buffer.vao), n2.bindVAO(t2.buffer.vao);
      const o3 = l2.primitiveType;
      r$d(a3) && a3.length > 0 && (l2.bindPipelineState(n2, s2.slot, false), a3.forAll((e4) => n2.drawArrays(o3, e4.first, e4.count))), r$d(i3) && i3.length > 0 && (l2.bindPipelineState(n2, s2.slot, true), i3.forAll((e4) => n2.drawArrays(o3, e4.first, e4.count)));
    }), this._renderCommandData.clear(), true;
  }
  _removeAndRebuild(e2, t2, r2, s2, a2) {
    for (const d2 of t2)
      e2.instances.delete(d2.id);
    const i2 = r$3(e2.instances);
    e2.instances.clear();
    const o$12 = e2.geometry.size, n2 = e2.geometry.allocate(s2);
    let h2 = 0;
    for (const d2 of i2) {
      const t3 = d2.from * r2, s3 = d2.to * r2;
      n2.copy(h2, t3, s3), d2.from = h2 / r2, h2 += s3 - t3, d2.to = h2 / r2, e2.instances.set(d2.id, d2);
    }
    a2.push(new o(0, n2.hasNewBuffer ? e2.geometry.buffer.array.length : o$12)), n2.dispose(), e2.geometry.erase(h2, a2.back().to), e2.holes.clear();
  }
  _remove(e2, t2, r2, s2) {
    for (const a2 of t2) {
      const t3 = a2.id, i2 = e2.instances.get(t3), o$12 = i2.from * r2, n2 = i2.to * r2;
      e2.geometry.erase(o$12, n2), e2.holes.push(new o(i2.from, i2.to)), e2.instances.delete(t3), s2.push(new o(o$12, n2));
    }
    j(e2.holes);
  }
  _add(e2, s2, n2, h2, d2) {
    if (s2.length === 0)
      return;
    const l2 = this._bufferWriter;
    let m2 = l2.vertexBufferLayout.createView(e2.geometry.buffer.array.buffer);
    const c2 = e2.holes.length > 0;
    let u2 = Number.MAX_SAFE_INTEGER, g2 = Number.MIN_SAFE_INTEGER;
    for (const y2 of s2) {
      const s3 = r$d(y2.transformation) ? u$8(T$1, h2, y2.transformation) : h2;
      h$9(G$1, s3);
      const w2 = o$r(G$1, G$1), b2 = l2.elementCount(y2.data), C2 = b2 * n2;
      let v2 = I(e2.holes, b2);
      t$c(v2) && (v2 = e2.geometry.size / n2, e2.geometry.grow(C2), m2 = l2.vertexBufferLayout.createView(e2.geometry.buffer.array.buffer)), l2.write(s3, w2, y2.data, m2, v2);
      const O2 = y2.instanceParameters.visible, H2 = !!y2.instanceParameters.highlights && O2, B2 = !!y2.instanceParameters.occludees, S2 = new s$5(y2.id, v2, v2 + b2, O2, H2, B2);
      e$d(e2.instances.get(y2.id) == null), e2.instances.set(y2.id, S2), c2 ? d2.push(new o(S2.from * n2, S2.to * n2)) : (u2 = Math.min(S2.from, u2), g2 = Math.max(S2.to, g2));
    }
    c2 || d2.push(new o(u2 * n2, g2 * n2));
  }
  get test() {
    return { material: this._material, glMaterials: this._glMaterials, dataByOrigin: this._dataByOrigin };
  }
}
class A {
  constructor(e2) {
    this.origin = e2, this.add = new Array(), this.remove = new Array();
  }
}
function D(e2, t2) {
  const r2 = new Map();
  for (const s2 of e2)
    E(r2, s2, true);
  for (const s2 of t2)
    E(r2, s2, false);
  return r2;
}
function E(e2, r2, s2) {
  const a2 = r2.origin;
  if (t$c(a2))
    return;
  let i2 = e2.get(a2.id);
  i2 == null && (i2 = new A(a2.vec3), e2.set(a2.id, i2)), s2 ? i2.add.push(r2) : i2.remove.push(r2);
}
function M(e2) {
  return e2.hasOccludees || e2.hasHighlights || e2.hasHiddenInstances;
}
function I(e2, t2) {
  let r2;
  if (!e2.some((e3) => !(e3.to - e3.from < t2) && (r2 = e3, true)))
    return null;
  const s2 = r2.from;
  return r2.from += t2, r2.from >= r2.to && e2.removeUnordered(r2), s2;
}
function j(e2) {
  const t2 = new Map();
  e2.forAll((e3) => t2.set(e3.from, e3));
  let r2 = true;
  for (; r2; )
    r2 = false, e2.forEach((s2) => {
      const a2 = t2.get(s2.to);
      a2 && (s2.to = a2.to, t2.delete(a2.from), e2.removeUnordered(a2), r2 = true);
    });
}
class R$1 {
  constructor(e2, t2) {
    this.origin = e2, this.geometry = t2, this.instances = new Map(), this.holes = new l$9({ deallocator: null }), this.hasHiddenInstances = false, this.hasHighlights = false, this.hasOccludees = false, this.drawCommandsDirty = false, this.drawCommandsDefault = new l$9({ allocator: (e3) => e3 || new t$1(), deallocator: (e3) => e3 }), this.drawCommandsHighlight = new l$9({ allocator: (e3) => e3 || new t$1(), deallocator: (e3) => e3 }), this.drawCommandsOccludees = new l$9({ allocator: (e3) => e3 || new t$1(), deallocator: (e3) => e3 }), this.drawCommandsShadowHighlightRest = new l$9({ allocator: (e3) => e3 || new t$1(), deallocator: (e3) => e3 });
  }
}
class x extends i$4 {
  constructor(e2, t2, r2, s2) {
    super(e2), this.geometry = t2, this.renderCommands = r2, this.occludeeCommands = s2;
  }
}
const P = new l$9({ deallocator: null }), L = e$c(), T$1 = e$c(), G$1 = e$c();
let f$1 = class extends m$f {
  constructor(e2) {
    super(e2), this._pending = new R(), this._changes = new r$7(), this._materialRenderers = new Map(), this._sortedMaterialRenderers = new l$9(), this._geometries = new Map(), this._hasHighlights = false, this._hasWater = false;
  }
  destroy() {
    this._changes.prune(), this._materialRenderers.forEach((e2) => e2.dispose()), this._materialRenderers.clear(), this._sortedMaterialRenderers.clear(), this._geometries.clear();
  }
  get updating() {
    return !this._pending.empty || this._changes.updates.length > 0;
  }
  get rctx() {
    return this.rendererContext.rctx;
  }
  get _materialRepository() {
    return this.rendererContext.materialRepository;
  }
  get _localOriginFactory() {
    return this.rendererContext.localOriginFactory;
  }
  get hasHighlights() {
    return this._hasHighlights;
  }
  get hasWater() {
    return this._hasWater;
  }
  get rendersOccluded() {
    return n$o(this._materialRenderers, (e2) => e2.rendersOccluded);
  }
  get isEmpty() {
    return !this.updating && this._materialRenderers.size === 0 && this._geometries.size === 0;
  }
  commitChanges() {
    if (!this.updating)
      return false;
    this._processAddsRemoves();
    const e2 = r$6(this._changes);
    let r2 = false, s2 = false, i2 = false;
    return e2.forEach((e3, t2) => {
      let a2 = this._materialRenderers.get(t2);
      if (!a2 && e3.adds.length > 0 && (a2 = new S$1(this.rctx, this._materialRepository, t2), this._materialRenderers.set(t2, a2), r2 = true, s2 = true, i2 = true), !a2)
        return;
      const n2 = s2 || a2.hasHighlights, o2 = i2 || a2.hasWater;
      a2.modify(e3), s2 = s2 || n2 !== a2.hasHighlights, i2 = i2 || o2 !== a2.hasWater, a2.isEmpty && (this._materialRenderers.delete(t2), a2.dispose(), r2 = true);
    }), this._changes.clear(), r2 && this._updateSortedMaterialRenderers(), s2 && (this._hasHighlights = n$o(this._materialRenderers, (e3) => e3.hasHighlights)), i2 && (this._hasWater = n$o(this._materialRenderers, (e3) => e3.hasWater)), this.notifyChange("updating"), true;
  }
  addGeometries(e2, r2) {
    if (e2.length === 0)
      return;
    const t2 = this._validateRenderGeometries(e2);
    for (const i2 of t2)
      this._geometries.set(i2.id, i2);
    const s2 = this._pending.empty;
    for (const i2 of t2)
      this._pending.adds.add(i2);
    s2 && this.notifyChange("updating"), r2 === E$4.UPDATE && this._notifyGraphicGeometryChanged(e2);
  }
  removeGeometries(e2, r2) {
    const t2 = this._pending.empty, i2 = this._pending.adds;
    for (const a2 of e2)
      i2.has(a2) ? (this._pending.removed.add(a2), i2.delete(a2)) : this._pending.removed.has(a2) || this._pending.removes.add(a2), this._geometries.delete(e$t(a2.id));
    t2 && !this._pending.empty && this.notifyChange("updating"), r2 === E$4.UPDATE && this._notifyGraphicGeometryChanged(e2);
  }
  modifyGeometries(e2, r2) {
    const t2 = this._changes.updates.length === 0;
    for (const s2 of e2) {
      const e3 = this._changes.updates.pushNew();
      e3.renderGeometry = this._validateRenderGeometry(s2), e3.updateType = r2;
    }
    switch (t2 && this._changes.updates.length > 0 && this.notifyChange("updating"), r2) {
      case I$5.TRANSFORMATION:
      case I$5.VERTEXATTRS:
        return this._notifyGraphicGeometryChanged(e2);
      case I$5.VISIBILITIES:
        return this._notifyGraphicVisibilityChanged(e2);
    }
  }
  updateAnimation(e2) {
    let r2 = false;
    return this._sortedMaterialRenderers.forAll(({ materialRenderer: t2 }) => r2 = t2.updateAnimation(e2) || r2), r2;
  }
  render(e2, r2) {
    for (let t2 = 0; t2 < this._sortedMaterialRenderers.length; t2++) {
      const s2 = this._sortedMaterialRenderers.data[t2];
      s2.material.shouldRender(e2) && s2.materialRenderer.render(e2.output, r2);
    }
  }
  intersect(e2, r2, t2, s2, i2) {
    return this._geometries.forEach((a2) => {
      if (s2 && !s2(a2))
        return;
      this._intersectRenderGeometry(a2, t2, r2, 0, e2, i2);
      const n2 = this.rendererContext.longitudeCyclical;
      n2 && (a2.boundingSphere[0] - a2.boundingSphere[3] < n2.min && this._intersectRenderGeometry(a2, t2, r2, n2.range, e2, i2), a2.boundingSphere[0] + a2.boundingSphere[3] > n2.max && this._intersectRenderGeometry(a2, t2, r2, -n2.range, e2, i2)), i2++;
    }), i2;
  }
  _updateSortedMaterialRenderers() {
    this._sortedMaterialRenderers.clear();
    let e2 = 0;
    this._materialRenderers.forEach((r2, t2) => {
      t2.insertOrder = e2++, this._sortedMaterialRenderers.push({ material: t2, materialRenderer: r2 });
    }), this._sortedMaterialRenderers.sort((e3, r2) => {
      const t2 = r2.material.renderPriority - e3.material.renderPriority;
      return t2 !== 0 ? t2 : e3.material.insertOrder - r2.material.insertOrder;
    });
  }
  _processAddsRemoves() {
    this._changes.adds.clear(), this._changes.removes.clear(), this._changes.adds.pushArray(Array.from(this._pending.adds)), this._changes.removes.pushArray(Array.from(this._pending.removes));
    for (let e2 = 0; e2 < this._changes.updates.length; ) {
      const r2 = this._changes.updates.data[e2];
      this._pending.has(r2.renderGeometry) ? this._changes.updates.removeUnorderedIndex(e2) : e2++;
    }
    this._pending.clear();
  }
  _intersectRenderGeometry(e2, r2, t2, s2, a2, n2) {
    if (!e2.instanceParameters.visible)
      return;
    let o2 = 0;
    r$d(e2.transformation) && (s2 += e2.transformation[12], o2 = e2.transformation[13]), v$1[0] = t2[0] - s2, v$1[1] = t2[1] - o2, v$1[2] = 1, S[0] = t2[0] - s2, S[1] = t2[1] - o2, S[2] = 0, e2.screenToWorldRatio = this.rendererContext.screenToWorldRatio, e2.material.intersect(e2, null, e2.getShaderTransformation(), a2, v$1, S, (t3, s3, i2) => {
      G(r2, i2, e2.material.renderPriority, n2, a2, e2.layerUid, e2.graphicUid);
    }, e2.calculateShaderTransformation, r2);
  }
  _notifyGraphicGeometryChanged(e2) {
    if (t$c(this.drapeSource.notifyGraphicGeometryChanged))
      return;
    let r2;
    for (const t2 of e2) {
      const e3 = t2.graphicUid;
      r$d(e3) && e3 !== r2 && (this.drapeSource.notifyGraphicGeometryChanged(e3), r2 = e3);
    }
  }
  _notifyGraphicVisibilityChanged(e2) {
    if (t$c(this.drapeSource.notifyGraphicVisibilityChanged))
      return;
    let r2;
    for (const t2 of e2) {
      const e3 = t2.graphicUid;
      r$d(e3) && e3 !== r2 && (this.drapeSource.notifyGraphicVisibilityChanged(e3), r2 = e3);
    }
  }
  _validateRenderGeometries(e2) {
    for (const r2 of e2)
      this._validateRenderGeometry(r2);
    return e2;
  }
  _validateRenderGeometry(e2) {
    return t$c(e2.origin) && (e2.origin = this._localOriginFactory.getOrigin(e2.boundingSphere)), e2;
  }
  get test() {
    return { sortedMaterialRenderers: this._sortedMaterialRenderers };
  }
};
e$f([y$7()], f$1.prototype, "drapeSource", void 0), e$f([y$7()], f$1.prototype, "updating", null), e$f([y$7()], f$1.prototype, "rctx", null), e$f([y$7()], f$1.prototype, "rendererContext", void 0), e$f([y$7()], f$1.prototype, "_materialRepository", null), e$f([y$7()], f$1.prototype, "_localOriginFactory", null), f$1 = e$f([n$p("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")], f$1);
class R {
  constructor() {
    this.adds = new Set(), this.removes = new Set(), this.removed = new Set();
  }
  get empty() {
    return this.adds.size === 0 && this.removes.size === 0 && this.removed.size === 0;
  }
  has(e2) {
    return this.adds.has(e2) || this.removes.has(e2) || this.removed.has(e2);
  }
  clear() {
    this.adds.clear(), this.removes.clear(), this.removed.clear();
  }
}
function G(e2, r2, t2, s2, i2, a2, n2) {
  const o2 = { layerUid: a2, graphicUid: n2, triangleNr: r2 }, d2 = (r3) => {
    r3.set(i$5.OVERLAY, o2, e2.dist, e2.normal, e2.transformation, t2, s2);
  };
  if ((i2.results.min.drapedLayerOrder == null || t2 >= i2.results.min.drapedLayerOrder) && (i2.results.min.dist == null || i2.results.ground.dist <= i2.results.min.dist) && d2(i2.results.min), i2.options.store !== t$3.MIN && (i2.results.max.drapedLayerOrder == null || t2 < i2.results.max.drapedLayerOrder) && (i2.results.max.dist == null || i2.results.ground.dist > i2.results.max.dist) && d2(i2.results.max), i2.options.store === t$3.ALL) {
    const e3 = U(i2.ray);
    d2(e3), i2.results.all.push(e3);
  }
}
const v$1 = n$a(), S = n$a();
class m extends e$o {
  initializeProgram(e2) {
    return new o$k(e2.rctx, m.shader.get().build(), E$b);
  }
  initializePipeline() {
    return this.configuration.hasAlpha ? W$2({ blending: l$m(R$9.SRC_ALPHA, R$9.ONE, R$9.ONE_MINUS_SRC_ALPHA, R$9.ONE_MINUS_SRC_ALPHA), colorWrite: _$6 }) : W$2({ colorWrite: _$6 });
  }
}
m.shader = new t$k(d$g, () => import("./TextureOnly.glsl.js"));
class r$1 extends t$p {
  constructor() {
    super(...arguments), this.hasAlpha = false;
  }
}
e$f([e$g()], r$1.prototype, "hasAlpha", void 0);
let he = class extends s$9(m$f) {
  constructor(e2) {
    super(e2), this._overlays = null, this._overlayRenderTarget = null, this._hasHighlights = false, this._rendersOccluded = false, this._hasWater = false, this._handles = new t$e(), this._renderers = new Map(), this._sortedDrapeSourceRenderersDirty = false, this._sortedRenderers = new l$9(), this._passParameters = new i$r(), this._rctx = null, this._materialRepository = null, this._screenToWorldRatio = 1, this._localOriginFactory = null, this.worldToPCSRatio = 1, this.events = new n$b(), this.longitudeCyclical = null;
  }
  get _bindParameters() {
    return this._renderContext.bindParameters;
  }
  get rctx() {
    return this._rctx;
  }
  get materialRepository() {
    return this._materialRepository;
  }
  get screenToWorldRatio() {
    return this._screenToWorldRatio;
  }
  get localOriginFactory() {
    return this._localOriginFactory;
  }
  initialize() {
    const e2 = this.view._stage.renderView;
    this._rctx = e2.renderingContext;
    const r2 = e2.waterTextureRepository;
    this._stippleTextureRepository = new u$6(e2.renderingContext), this._shaderTechniqueRepository = new n$5({ rctx: this._rctx, viewingMode: l$g.Local, stippleTextureRepository: this._stippleTextureRepository, waterTextureRepository: r2 }), this._renderContext = new c$4(this._rctx, new Q$1(this._rctx, this.view.state.viewingMode), new P$8(this._shaderTechniqueRepository, this._rctx, () => {
    })), this._handles.add([l$n(() => r2.updating, () => this.events.emit("content-changed"), w$3), l$n(() => this.spatialReference, (e3) => this._localOriginFactory = new j$1(e3), w$3), a$n(() => this.view.allLayerViews, "after-changes", () => this._sortedDrapeSourceRenderersDirty = true)]), this._materialRepository = new a(e2.textureRepository, this._shaderTechniqueRepository, (e3) => {
      (e3.renderOccluded & _e) > 0 !== this._rendersOccluded && this._updateRendersOccluded(), this.events.emit("content-changed"), this.notifyChange("updating");
    }, () => this.events.emit("content-changed")), this._bindParameters.slot = E$a.DRAPED_MATERIAL, this._bindParameters.highlightDepthTexture = s$v(this._rctx), this._bindParameters.camera = pe, this._bindParameters.transparencyPassType = o$d.NONE, this._bindParameters.newLighting.noonFactor = 0, this._bindParameters.newLighting.globalFactor = 0, this._bindParameters.newLighting.set([new i$s(r$h(1, 1, 1))]), this._handles.add(this.view.resourceController.scheduler.registerTask(I$a.STAGE, this));
  }
  dispose() {
    this._handles.destroy(), this._renderers.forEach((e2) => e2.destroy()), this._renderers.clear(), this._debugTextureTechnique = w$4(this._debugTextureTechnique), this._passParameters.texture = a$9(this._passParameters.texture), this._bindParameters.highlightDepthTexture = a$9(this._bindParameters.highlightDepthTexture), this._shaderTechniqueRepository = a$9(this._shaderTechniqueRepository), this._temporaryFBO = a$9(this._temporaryFBO), this._quadVAO = a$9(this._quadVAO), this.disposeOverlays();
  }
  get updating() {
    return this._sortedDrapeSourceRenderersDirty || n$o(this._renderers, (e2) => e2.updating);
  }
  get hasOverlays() {
    return r$d(this._overlays) && r$d(this._overlayRenderTarget);
  }
  get gpuMemoryUsage() {
    return r$d(this._overlayRenderTarget) ? this._overlayRenderTarget.gpuMemoryUsage : 0;
  }
  createGeometryDrapeSourceRenderer(e2) {
    return this.createDrapeSourceRenderer(e2, f$1);
  }
  createDrapeSourceRenderer(e2, r2, t2) {
    const s2 = this._renderers.get(e2);
    r$d(s2) && s2.destroy();
    const i2 = new r2(__spreadProps(__spreadValues({}, t2), { rendererContext: this, drapeSource: e2 }));
    return this._renderers.set(e2, i2), this._sortedDrapeSourceRenderersDirty = true, "fullOpacity" in e2 && this._handles.add(l$n(() => e2.fullOpacity, () => this.events.emit("content-changed")), e2), i2;
  }
  removeDrapeSourceRenderer(e2) {
    if (t$c(e2))
      return;
    const r2 = this._renderers.get(e2);
    t$c(r2) || (this._sortedDrapeSourceRenderersDirty = true, this._renderers.delete(e2), this._handles.remove(e2), r2.destroy());
  }
  collectUnusedRenderTargetMemory(e2) {
    let r2 = false;
    if (r$d(this._overlayRenderTarget))
      for (const t2 of this._overlayRenderTarget.renderTargets) {
        const s2 = this.overlays[0].validTargets[t2.type] || !this.overlays[1].validTargets[t2.type];
        r2 = this._overlayRenderTarget.validateUsageForTarget(s2, t2, e2) || r2;
      }
    return r2;
  }
  get overlays() {
    return i$g(this._overlays, []);
  }
  ensureDrapeTargets(e2) {
    r$d(this._overlays) && this._overlays.forEach((r2) => r2.hasTargetWithoutRasterImage = n$q(e2, (e3) => e3.drapeTargetType === t$6.WithoutRasterImage));
  }
  ensureDrapeSources(e2) {
    r$d(this._overlays) && this._overlays.forEach((r2) => {
      r2.hasDrapedFeatureSource = n$q(e2, (e3) => e3.drapeSourceType === e$4.Features), r2.hasDrapedRasterSource = n$q(e2, (e3) => e3.drapeSourceType === e$4.RasterImage);
    });
  }
  ensureOverlays(e2, r2) {
    t$c(this._overlays) && (this._overlayRenderTarget = new o$4(this._rctx), this._overlays = [new l$1(T$3.INNER, this._overlayRenderTarget), new l$1(T$3.OUTER, this._overlayRenderTarget)]), this.ensureDrapeTargets(e2), this.ensureDrapeSources(r2);
  }
  disposeOverlays() {
    this._overlays = null, this._overlayRenderTarget = a$9(this._overlayRenderTarget), this.events.emit("textures-disposed");
  }
  get running() {
    return this.updating;
  }
  runTask(e2) {
    this._processDrapeSources(e2, () => true);
  }
  _processDrapeSources(e2, r2) {
    let t2 = false;
    for (const [s2, i2] of this._renderers) {
      if (e2.done)
        break;
      (s2.destroyed || r2(s2)) && (i2.commitChanges() && (t2 = true, e2.madeProgress()));
    }
    this._sortedDrapeSourceRenderersDirty && (this._sortedDrapeSourceRenderersDirty = false, t2 = true, this._updateSortedDrapeSourceRenderers()), t2 && (r$d(this._overlays) && this._renderers.size === 0 && this.disposeOverlays(), this.notifyChange("updating"), this.events.emit("content-changed"), this._updateHasHighlights(), this._updateRendersOccluded(), this._updateHasWater());
  }
  processSyncDrapeSources() {
    this._processDrapeSources(F$6, (e2) => e2.updatePolicy === i$f.SYNC);
  }
  isEmpty() {
    if (t$r.OVERLAY_DRAW_DEBUG_TEXTURE)
      return false;
    for (const e2 of this._renderers.values())
      if (!e2.isEmpty)
        return false;
    return true;
  }
  get hasHighlights() {
    return this._hasHighlights;
  }
  get hasWater() {
    return this._hasWater;
  }
  get rendersOccluded() {
    return this._rendersOccluded;
  }
  updateAnimation(e2) {
    let r2 = false;
    return this._renderers.forEach((t2) => r2 = t2.updateAnimation(e2) || r2), r2;
  }
  updateDrapeSourceOrder() {
    this._sortedDrapeSourceRenderersDirty = true;
  }
  drawTarget(e2, r2, t2) {
    const s2 = e2.canvasGeometries;
    if (s2.numViews === 0)
      return false;
    this._screenToWorldRatio = t2 * e2.mapUnitsPerPixel;
    const i2 = r2.output;
    if (this.isEmpty() || i2 === h$8.Highlight && !this.hasHighlights || i2 === h$8.Normal && !this.hasWater || !e2.hasSomeSizedView())
      return false;
    const o2 = r2.fbo;
    if (!o2.isValid())
      return false;
    const a2 = 2 * e2.resolution, h2 = e2.resolution;
    o2.resize(a2, h2);
    const d2 = this._rctx;
    pe.pixelRatio = e2.pixelRatio * t2, this._renderContext.output = i2, this._bindParameters.screenToWorldRatio = this._screenToWorldRatio, this._bindParameters.screenToPCSRatio = this._screenToWorldRatio * this.worldToPCSRatio, this._bindParameters.slot = i2 === h$8.Normal ? E$a.DRAPED_WATER : E$a.DRAPED_MATERIAL, e2.applyViewport(this._rctx), o2.bind(d2), e2.index === T$3.INNER && (d2.setClearColor(0, 0, 0, 0), d2.clearSafe(_$9.COLOR_BUFFER_BIT));
    const l2 = r2.type === H$1.ColorNoRasterImage ? de.ExcludeRasterImage : r2.type === H$1.Occluded ? de.OccludedOnly : de.Normal;
    if (l2 === de.OccludedOnly && (this._renderContext.renderOccludedMask = _e), t$r.OVERLAY_DRAW_DEBUG_TEXTURE && l2 !== de.OccludedOnly)
      for (let n2 = 0; n2 < s2.numViews; n2++)
        this._setViewParameters(s2.extents[n2], e2, pe), this._drawDebugTexture(e2.resolution, ce$1[e2.index]);
    return this._renderers.size > 0 && this._sortedRenderers.forAll(({ drapeSource: r3, renderer: t3 }) => {
      if (l2 === de.ExcludeRasterImage && r3.drapeSourceType === e$4.RasterImage)
        return;
      const { fullOpacity: c2 } = r3, p2 = r$d(c2) && c2 < 1 && i2 === h$8.Color;
      p2 && (this.bindTemporaryFramebuffer(this._rctx, a2, h2), d2.clearSafe(_$9.COLOR_BUFFER_BIT));
      for (let i3 = 0; i3 < s2.numViews; i3++)
        this._setViewParameters(s2.extents[i3], e2, pe), t3.render(this._renderContext, this._bindParameters);
      p2 && r$d(this._temporaryFBO) && (o2.bind(d2), this.view._stage.renderView.compositingHelper.compositeOverlay(this._renderContext.bindParameters, this._temporaryFBO.getTexture(), c2, e2.index));
    }), d2.bindFramebuffer(null), o2.generateMipMap(), this._renderContext.resetRenderOccludedMask(), true;
  }
  bindTemporaryFramebuffer(e2, r2, t2) {
    t$c(this._temporaryFBO) && (this._temporaryFBO = new f$4(e2, false)), this._temporaryFBO.resize(r2, t2), this._temporaryFBO.bind(e2);
  }
  async reloadShaders() {
    await this._shaderTechniqueRepository.reloadAll();
  }
  notifyContentChanged() {
    this.events.emit("content-changed");
  }
  intersect(e2, r2, t2, s2) {
    var _a, _b;
    let i2 = 0;
    for (const o2 of this._renderers.values())
      i2 = (_b = (_a = o2.intersect) == null ? void 0 : _a.call(o2, e2, r2, t2, s2, i2)) != null ? _b : i2;
  }
  _updateSortedDrapeSourceRenderers() {
    if (this._sortedRenderers.clear(), this._renderers.size === 0)
      return;
    const e2 = this.view.map.allLayers;
    this._renderers.forEach((r2, t2) => {
      const s2 = e2.indexOf(t2.layer);
      this._sortedRenderers.push(new le$1(t2, r2, s2 < 0 ? 1 / 0 : s2));
    }), this._sortedRenderers.sort((e3, r2) => e3.index - r2.index);
  }
  _setViewParameters(e2, r2, t2) {
    t2.viewport[0] = t2.viewport[1] = 0, t2.viewport[2] = t2.viewport[3] = r2.resolution, F$4(t2.projectionMatrix, 0, e2[2] - e2[0], 0, e2[3] - e2[1], t2.near, t2.far), x$b(t2.viewMatrix, [-e2[0], -e2[1], 0]), this._bindParameters.camera = t2;
  }
  _updateHasWater() {
    const e2 = n$o(this._renderers, (e3) => e3.hasWater);
    e2 !== this._hasWater && (this._hasWater = e2, this.events.emit("has-water", e2));
  }
  _updateHasHighlights() {
    const e2 = n$o(this._renderers, (e3) => e3.hasHighlights);
    e2 !== this._hasHighlights && (this._hasHighlights = e2, this.events.emit("has-highlights", e2));
  }
  _updateRendersOccluded() {
    const e2 = n$o(this._renderers, (e3) => e3.rendersOccluded);
    e2 !== this._rendersOccluded && (this._rendersOccluded = e2, this.events.emit("renders-occluded", e2));
  }
  _drawDebugTexture(e2, r2) {
    this._ensureDebugPatternResources(e2, e2, r2);
    const t2 = this._rctx;
    t2.bindTechnique(this._debugTextureTechnique, this._passParameters, null), t2.bindVAO(this._quadVAO), t2.drawArrays(E$9.TRIANGLE_STRIP, 0, n$r(this._quadVAO, "geometry"));
  }
  _ensureDebugPatternResources(e2, r2, t2) {
    if (o$b(this._passParameters.color, t2[0], t2[1], t2[2]), this._passParameters.texture)
      return;
    const s2 = new Uint8Array(e2 * r2 * 4);
    let i2 = 0;
    for (let a2 = 0; a2 < r2; a2++)
      for (let t3 = 0; t3 < e2; t3++) {
        const o3 = Math.floor(t3 / 10), n2 = Math.floor(a2 / 10);
        o3 < 2 || n2 < 2 || 10 * o3 > e2 - 20 || 10 * n2 > r2 - 20 ? (s2[i2++] = 255, s2[i2++] = 255, s2[i2++] = 255, s2[i2++] = 255) : (s2[i2++] = 255, s2[i2++] = 255, s2[i2++] = 255, s2[i2++] = 1 & o3 && 1 & n2 ? 1 & t3 ^ 1 & a2 ? 0 : 255 : 1 & o3 ^ 1 & n2 ? 0 : 128);
      }
    this._passParameters.texture = new E$7(this._rctx, { target: M$6.TEXTURE_2D, pixelFormat: P$6.RGBA, dataType: G$4.UNSIGNED_BYTE, samplingMode: L$5.NEAREST, width: e2, height: r2 }, s2);
    const o2 = new r$1();
    o2.hasAlpha = true, this._debugTextureTechnique = this._shaderTechniqueRepository.acquire(m, o2), this._quadVAO = u$n(this._rctx);
  }
  get test() {
    return { drapeSourceRenderers: this._renderers, getDrapeSourceRenderer: (e2) => this._renderers.get(e2) };
  }
};
var de;
e$f([y$7()], he.prototype, "_sortedDrapeSourceRenderersDirty", void 0), e$f([i$8()], he.prototype, "_shaderTechniqueRepository", void 0), e$f([i$8()], he.prototype, "_stippleTextureRepository", void 0), e$f([y$7({ constructOnly: true })], he.prototype, "view", void 0), e$f([y$7()], he.prototype, "worldToPCSRatio", void 0), e$f([y$7()], he.prototype, "spatialReference", void 0), e$f([y$7({ type: Boolean, readOnly: true })], he.prototype, "updating", null), he = e$f([n$p("esri.views.3d.terrain.OverlayRenderer")], he), function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.OccludedOnly = 1] = "OccludedOnly", e2[e2.ExcludeRasterImage = 2] = "ExcludeRasterImage";
}(de || (de = {}));
class le$1 {
  constructor(e2, r2, t2) {
    this.drapeSource = e2, this.renderer = r2, this.index = t2;
  }
}
const ce$1 = [[1, 0.5, 0.5], [0.5, 0.5, 1]], pe = new J$2();
pe.near = 1, pe.far = 1e4, pe.relativeElevation = null;
const ue$1 = -2, _e = o$m.OccludeAndTransparent;
function i(o2, r2, i2, s2) {
  const l2 = o2.type === "polygon" ? c$j.CCW_IS_HOLE : c$j.NONE, a2 = o2.type === "polygon" ? o2.rings : o2.paths, { position: c2, outlines: u2 } = l$o(a2, o2.hasZ, l2), y2 = new Float64Array(c2.length), g2 = f$8(c2, o2.spatialReference, 0, y2, 0, c2, 0, c2.length / 3, r2, i2, s2), f2 = g2 != null;
  return { lines: f2 ? p(u2, c2, y2) : [], projectionSuccess: f2, sampledElevation: g2 };
}
function s$1(e2, i2) {
  const s2 = e2.type === "polygon" ? c$j.CCW_IS_HOLE : c$j.NONE, l2 = e2.type === "polygon" ? e2.rings : e2.paths, { position: a2, outlines: c2 } = l$o(l2, false, s2), u2 = xn(a2, e2.spatialReference, 0, a2, i2, 0, a2.length / 3);
  for (let o2 = 2; o2 < a2.length; o2 += 3)
    a2[o2] = ue$1;
  return { lines: u2 ? p(c2, a2) : [], projectionSuccess: u2 };
}
function p(o2, n2, t2) {
  const e2 = new Array();
  for (const { index: r2, count: i2 } of o2) {
    if (i2 <= 1)
      continue;
    const o3 = 3 * r2, s2 = o3 + 3 * i2;
    e2.push({ position: n2.subarray(o3, s2), mapPosition: t2 ? t2.subarray(o3, s2) : void 0 });
  }
  return e2;
}
class s {
  constructor() {
    this.visible = true;
  }
}
class T {
  constructor(r2, i2, a2 = {}) {
    this.data = r2, this.material = i2, this.boundingSphere = n$e(), this.instanceParameters = new s(), this._transformation = e$c(), this._shaderTransformationDirty = true, this.layerUid = i$g(a2.layerUid, null), this.graphicUid = i$g(a2.graphicUid, null), this.id = a2.id ? a2.id : e$a(), this.boundingInfo = i$g(a2.boundingInfo, null), this.calculateShaderTransformation = i$g(a2.calculateShaderTransformation, null), this.castShadow = !!a2.castShadow && a2.castShadow;
  }
  get transformation() {
    return this._transformation;
  }
  updateTransformation(t2) {
    t2(this._transformation), this._shaderTransformationDirty = true, this.computeBoundingSphere(this._transformation, this.boundingSphere);
  }
  shaderTransformationChanged() {
    this._shaderTransformationDirty = true;
  }
  computeBoundingSphere(t2, i2, s2 = l$8(t2)) {
    t$c(this.boundingInfo) || (O$7(i2, this.boundingInfo.getCenter(), t2), i2[3] = this.boundingInfo.getBSRadius() * s2);
  }
  get hasShaderTransformation() {
    return r$d(this.calculateShaderTransformation);
  }
  get primitiveType() {
    return this.data.primitiveType;
  }
  getShaderTransformation() {
    return t$c(this.calculateShaderTransformation) ? i$g(this.transformation, o$c) : (this._shaderTransformationDirty && (this._shaderTransformation || (this._shaderTransformation = e$c()), n$9(this._shaderTransformation, this.calculateShaderTransformation(i$g(this.transformation, o$c))), this._shaderTransformationDirty = false), this._shaderTransformation);
  }
  computeAttachmentOrigin(t2) {
    if (this.material.computeAttachmentOrigin)
      return !!this.material.computeAttachmentOrigin(this, t2) && (r$d(this._transformation) && O$7(t2, t2, this._transformation), true);
    const r2 = this.indices.get(O$8.POSITION), s2 = this.vertexAttributes.get(O$8.POSITION);
    return !!c$k(s2, r2, t2) && (r$d(this._transformation) && O$7(t2, t2, this._transformation), true);
  }
  get indices() {
    return this.data.indices;
  }
  get vertexAttributes() {
    return this.data.vertexAttributes;
  }
  addHighlight() {
    const t2 = new r$c(u$7.Highlight), r2 = this.instanceParameters;
    return r2.highlights = c$c(r2.highlights, t2), t2;
  }
  removeHighlight(t2) {
    const r2 = this.instanceParameters;
    r2.highlights = f$c(r2.highlights, t2);
  }
}
function u(u2) {
  const v2 = new o$i(), { vertex: h2, fragment: w2 } = v2;
  return v2.include(r$q, u2), v2.include(e$s, u2), v2.include(u$5, u2), v$7(h2, u2), u2.stippleEnabled && (v2.attributes.add(O$8.UV0, "vec2"), v2.attributes.add(O$8.AUXPOS1, "vec3"), h2.uniforms.add(new e$k("viewport", (e2, o2) => o2.camera.fullViewport))), v2.attributes.add(O$8.POSITION, "vec3"), v2.varyings.add("vpos", "vec3"), h2.code.add(n$d`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`), u2.stippleEnabled && (h2.code.add(n$d`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`), u2.draped ? h2.uniforms.add(new o$e("worldToScreenRatio", (e2, o2) => 1 / o2.screenToPCSRatio)) : h2.code.add(n$d`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`), h2.code.add(n$d`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`), u2.draped ? h2.code.add(n$d`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`) : h2.code.add(n$d`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`), h2.uniforms.add(new o$e("stipplePatternPixelSize", (e2) => g$3(e2))), h2.code.add(n$d`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)), h2.code.add(n$d`}`), u2.output === h$8.Highlight && v2.include(a$f, u2), v2.include(u$c, u2), w2.uniforms.add(new o$e("alphaCoverage", (e2, o2) => Math.min(1, e2.width * o2.camera.pixelRatio))), u2.hasVertexColors || w2.uniforms.add(new e$k("constantColor", (e2) => e2.color)), w2.code.add(n$d`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${u2.hasVertexColors ? "vColor" : "constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${n$d.float(t$j)}) {
      discard;
    }

    ${u2.output === h$8.Color ? n$d`gl_FragColor = highlightSlice(finalColor, vpos);` : ""}
    ${u2.output === h$8.Highlight ? n$d`outputHighlight();` : ""}
  }
  `), v2;
}
const v = Object.freeze(Object.defineProperty({ __proto__: null, build: u }, Symbol.toStringTag, { value: "Module" }));
class f extends e$o {
  get _stippleEnabled() {
    return this.configuration.stippleEnabled && this.configuration.output !== h$8.Highlight;
  }
  initializeConfiguration(e2, t2) {
    t2.hasWebGL2Context = e2.rctx.type === r$n.WEBGL2;
  }
  initializeProgram(e2) {
    return new o$k(e2.rctx, f.shader.get().build(this.configuration), E$b);
  }
  initializePipeline() {
    const t2 = this.configuration, i2 = l$m(R$9.SRC_ALPHA, R$9.ONE, R$9.ONE_MINUS_SRC_ALPHA, R$9.ONE_MINUS_SRC_ALPHA), r2 = (e2, i3 = null, r3 = null) => W$2({ blending: i3, depthTest: i$h, depthWrite: r3, colorWrite: _$6, stencilWrite: t2.hasOccludees ? e$p : null, stencilTest: t2.hasOccludees ? e2 ? o$l : f$d : null });
    return t2.output === h$8.Color ? (this._occludeePipelineState = r2(true, t2.transparent || this._stippleEnabled ? i2 : null, a$b), r2(false, t2.transparent || this._stippleEnabled ? i2 : null, a$b)) : r2(false);
  }
  get primitiveType() {
    return E$9.LINES;
  }
  getPipelineState(e2, t2) {
    return t2 ? this._occludeePipelineState : super.getPipelineState(e2, t2);
  }
}
f.shader = new t$k(v, () => import("./NativeLine.glsl.js"));
class r extends s$j {
  constructor() {
    super(...arguments), this.output = h$8.Color, this.hasSlicePlane = false, this.hasVertexColors = false, this.transparent = false, this.draped = false, this.stippleEnabled = false, this.stippleOffColorEnabled = false, this.stipplePreferContinuous = true, this.hasOccludees = false;
  }
}
e$f([e$g({ count: h$8.COUNT })], r.prototype, "output", void 0), e$f([e$g()], r.prototype, "hasSlicePlane", void 0), e$f([e$g()], r.prototype, "hasVertexColors", void 0), e$f([e$g()], r.prototype, "transparent", void 0), e$f([e$g()], r.prototype, "draped", void 0), e$f([e$g()], r.prototype, "stippleEnabled", void 0), e$f([e$g()], r.prototype, "stippleOffColorEnabled", void 0), e$f([e$g()], r.prototype, "stipplePreferContinuous", void 0), e$f([e$g()], r.prototype, "hasOccludees", void 0), e$f([e$g({ constValue: false })], r.prototype, "stippleRequiresClamp", void 0), e$f([e$g({ constValue: false })], r.prototype, "stippleScaleWithLineWidth", void 0), e$f([e$g({ constValue: false })], r.prototype, "stippleRequiresStretchMeasure", void 0);
var X;
!function(e2) {
  e2[e2.START = 0] = "START", e2[e2.END = 1] = "END";
}(X || (X = {}));
class F extends d$a {
  constructor(e2) {
    super(e2, new Q()), this._configuration = new r();
  }
  getConfiguration(e2, r2) {
    this._configuration.output = e2, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasVertexColors = this.parameters.hasVertexColors, this._configuration.transparent = this.parameters.color[3] < 1 || this.parameters.width < 1, this._configuration.draped = r2.slot === E$a.DRAPED_MATERIAL;
    const s2 = r$d(this.parameters.stipplePattern);
    return this._configuration.stippleEnabled = s2, this._configuration.stippleOffColorEnabled = s2 && r$d(this.parameters.stippleOffColor), this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.stipplePreferContinuous = this.parameters.stipplePreferContinuous, this._configuration;
  }
  intersect(e2, r2, s2, i2, o2, n2, a2, c2, l2) {
    r$d(l2) ? E$e(e2, i2, l2, n2, 1, a2) : this._intersectLineGeometry(e2, r2, s2, i2, a2);
  }
  _intersectLineGeometry(t2, r2, s2, m2, h2) {
    if (!m2.options.selectionMode || u$d(r2))
      return;
    if (!M$4(s2))
      return void s$l.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial").error("intersection assumes a translation-only matrix");
    const d2 = t2.vertexAttributes.get(O$8.POSITION).data, _2 = m2.camera, j2 = ie;
    a$d(j2, m2.point);
    const b2 = 2;
    o$b(oe[0], j2[0] - b2, j2[1] + b2, 0), o$b(oe[1], j2[0] + b2, j2[1] + b2, 0), o$b(oe[2], j2[0] + b2, j2[1] - b2, 0), o$b(oe[3], j2[0] - b2, j2[1] - b2, 0);
    for (let e2 = 0; e2 < 4; e2++)
      if (!_2.unprojectFromRenderScreen(oe[e2], ne[e2]))
        return;
    j$7(_2.eye, ne[0], ne[1], ae), j$7(_2.eye, ne[1], ne[2], ce), j$7(_2.eye, ne[2], ne[3], le), j$7(_2.eye, ne[3], ne[0], ue);
    let x2 = Number.MAX_VALUE, R2 = 0;
    for (let e2 = 0; e2 < d2.length - 5; e2 += 3) {
      if (z[0] = d2[e2] + s2[12], z[1] = d2[e2 + 1] + s2[13], z[2] = d2[e2 + 2] + s2[14], J[0] = d2[e2 + 3] + s2[12], J[1] = d2[e2 + 4] + s2[13], J[2] = d2[e2 + 5] + s2[14], R$8(ae, z) < 0 && R$8(ae, J) < 0 || R$8(ce, z) < 0 && R$8(ce, J) < 0 || R$8(le, z) < 0 && R$8(le, J) < 0 || R$8(ue, z) < 0 && R$8(ue, J) < 0)
        continue;
      if (_2.projectToRenderScreen(z, Z), _2.projectToRenderScreen(J, $), Z[2] < 0 && $[2] > 0) {
        e$e(K, z, J);
        const e3 = _2.frustum, t4 = -R$8(e3[U$4.NEAR], z) / P$5(K, Y$2(e3[U$4.NEAR]));
        g$4(K, K, t4), u$a(z, z, K), _2.projectToRenderScreen(z, Z);
      } else if (Z[2] > 0 && $[2] < 0) {
        e$e(K, J, z);
        const e3 = _2.frustum, t4 = -R$8(e3[U$4.NEAR], J) / P$5(K, Y$2(e3[U$4.NEAR]));
        g$4(K, K, t4), u$a(J, J, K), _2.projectToRenderScreen(J, $);
      } else if (Z[2] < 0 && $[2] < 0)
        continue;
      Z[2] = 0, $[2] = 0;
      const t3 = M$5(b$4(Z, $, re), j2);
      t3 < x2 && (x2 = t3, r$g(ee, z), r$g(te, J), R2 = e2 / 3);
    }
    const v2 = m2.rayBegin, N2 = m2.rayEnd;
    if (x2 < b2 * b2) {
      let e2 = Number.MAX_VALUE;
      if (k$3(b$4(ee, te, re), b$4(v2, N2, se), Y)) {
        e$e(Y, Y, v2);
        const t3 = s$m(Y);
        g$4(Y, Y, 1 / t3), e2 = t3 / x$6(v2, N2);
      }
      h2(e2, Y, R2, false);
    }
  }
  computeAttachmentOrigin(e2, t2) {
    const r2 = e2.vertexAttributes;
    if (!r2)
      return false;
    const s2 = r2.get(O$8.POSITION);
    return f$e(s2, null, false, t2);
  }
  requiresSlot(e2, t2) {
    return !(t2 !== h$8.Color && t2 !== h$8.Highlight && t2 !== h$8.ObjectAndLayerIdColor || e2 !== E$a.OPAQUE_MATERIAL && e2 !== E$a.DRAPED_MATERIAL);
  }
  createGLMaterial(e2) {
    return new W(e2);
  }
  createBufferWriter() {
    const e2 = this.parameters.hasVertexColors ? u$1 : O$3;
    return t$c(this.parameters.stipplePattern) ? new v$4(e2) : new H(e2.clone().vec3f(O$8.AUXPOS1).vec2f(O$8.UV0));
  }
}
class W extends t$l {
  constructor() {
    super(...arguments), this._stipplePattern = null;
  }
  dispose() {
    super.dispose(), this._stippleTextureRepository.release(this._stipplePattern), this._stipplePattern = null;
  }
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e2.hasOccludees });
  }
  beginSlot(e2) {
    this._output === h$8.Color && this._updateOccludeeState(e2);
    const t2 = this._material.parameters.stipplePattern;
    return this._stipplePattern !== t2 && (this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern, t2)), this._stipplePattern = t2), this.ensureTechnique(f, e2);
  }
}
class H {
  constructor(e2) {
    this.vertexBufferLayout = e2;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return e2.indices.get(O$8.POSITION).length;
  }
  write(e2, t2, r2, s2, i2) {
    m$c(r2, this.vertexBufferLayout, e2, t2, s2, i2), this._writeAuxpos1(e2, r2, s2, i2), this._writeUV0(e2, r2, s2, i2);
  }
  _writeAuxpos1(e2, t2, r2, s2) {
    const i2 = r2.getField(O$8.AUXPOS1, i$t), o2 = t2.indices.get(O$8.POSITION), n2 = t2.vertexAttributes.get(O$8.POSITION).data, a2 = e2, c2 = i2.typedBufferStride, l2 = i2.typedBuffer;
    s2 *= c2;
    for (let u2 = 0; u2 < o2.length - 1; u2 += 2)
      for (const e3 of [1, 0]) {
        const t3 = 3 * o2[u2 + e3], r3 = n2[t3], i3 = n2[t3 + 1], p2 = n2[t3 + 2], f2 = a2[0] * r3 + a2[4] * i3 + a2[8] * p2 + a2[12], m2 = a2[1] * r3 + a2[5] * i3 + a2[9] * p2 + a2[13], h2 = a2[2] * r3 + a2[6] * i3 + a2[10] * p2 + a2[14];
        l2[s2] = f2, l2[s2 + 1] = m2, l2[s2 + 2] = h2, s2 += c2;
      }
  }
  _writeUV0(e2, t2, r2, s2) {
    var _a;
    const i2 = r2.getField(O$8.UV0, u$o), n2 = t2.indices.get(O$8.POSITION), a2 = t2.vertexAttributes.get(O$8.POSITION).data, c2 = (_a = t2.vertexAttributes.get(O$8.DISTANCETOSTART)) == null ? void 0 : _a.data, l2 = i2.typedBufferStride, p2 = i2.typedBuffer;
    let h2 = 0;
    p2[s2 *= l2] = X.START, p2[s2 + 1] = h2, s2 += l2;
    const d2 = 3 * n2[0], g2 = o$b(z, a2[d2], a2[d2 + 1], a2[d2 + 2]);
    e2 && O$7(g2, g2, e2);
    const _2 = J, A2 = n2.length - 1;
    let O2 = 1;
    const S2 = c2 ? (e3, t3, r3) => h2 = c2[r3] : (e3, t3, r3) => h2 += x$6(e3, t3);
    for (let f2 = 1; f2 < A2; f2 += 2) {
      const t3 = 3 * n2[f2];
      o$b(_2, a2[t3], a2[t3 + 1], a2[t3 + 2]), e2 && O$7(_2, _2, e2), S2(g2, _2, O2++);
      for (let e3 = 0; e3 < 2; ++e3)
        p2[s2] = 1 - e3, p2[s2 + 1] = h2, s2 += l2;
      r$g(g2, _2);
    }
    const j2 = 3 * n2[A2];
    o$b(_2, a2[j2], a2[j2 + 1], a2[j2 + 2]), e2 && O$7(_2, _2, e2), S2(g2, _2, O2), p2[s2] = X.END, p2[s2 + 1] = h2;
  }
}
class Q extends h$d {
  constructor() {
    super(...arguments), this.color = _$8, this.hasVertexColors = false, this.hasSlicePlane = false, this.width = 1, this.stipplePreferContinuous = true, this.hasOccludees = false, this.stippleTexture = null;
  }
}
const z = n$a(), J = n$a(), K = n$a(), Y = n$a(), Z = x$7(), $ = x$7(), ee = n$a(), te = n$a(), re = v$8(), se = v$8(), ie = n$a(), oe = [x$7(), x$7(), x$7(), x$7()], ne = [n$a(), n$a(), n$a(), n$a()], ae = p$a(), ce = p$a(), le = p$a(), ue = p$a();
export { p$6 as $, A$5 as A, B$3 as B, C$1 as C, i$a as D, E$4 as E, F, X$1 as G, H$3 as H, D$2 as I, J$2 as J, v$6 as K, L$1 as L, x$4 as M, f$7 as N, B$2 as O, x$2 as P, Q$3 as Q, R$6 as R, h$4 as S, T, U$3 as U, c$8 as V, u$2 as W, X$3 as X, a$4 as Y, Z$4 as Z, p$4 as _, a$6 as a, g$2 as a0, s$d as a1, ue$1 as a2, S$3 as a3, v$5 as a4, I$5 as a5, e$6 as a6, r$b as a7, p$9 as a8, s$g as a9, u as aA, B$1 as aB, H$2 as aC, P$1 as aD, i$c as aa, s$h as ab, t$a as ac, o$8 as ad, e$5 as ae, a$7 as af, f$9 as ag, a$2 as ah, r$c as ai, e$3 as aj, i$5 as ak, t$3 as al, U as am, I$6 as an, G$2 as ao, J$3 as ap, r$5 as aq, V$1 as ar, d as as, f$2 as at, x$1 as au, j$1 as av, z$2 as aw, j$6 as ax, R$5 as ay, v$3 as az, b$3 as b, m$2 as c, m$1 as d, e$4 as e, f$8 as f, T$8 as g, h$3 as h, i, i$b as j, f$6 as k, l$7 as l, m$4 as m, E$6 as n, o$9 as o, k$2 as p, q$1 as q, r$9 as r, s$1 as s, d$5 as t, u$3 as u, v$4 as v, d$6 as w, x$5 as x, j$5 as y, t$8 as z };
