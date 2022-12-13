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
import { i2 as n, i3 as t, e0 as b, da as i, $ as e, a0 as y, fU as x, jw as a, a1 as n$1, g2 as y$1, iH as S, iF as m, dI as y$2, jx as m$1, h2 as c$1, h3 as v, h4 as O, aK as k, cx as j, hY as Ze, aX as y$3, ek as D, a as r, jy as h$1, dN as un, jz as I, cr as w, d2 as f, cC as g, t as t$1, g as s, hU as o, dF as v$1, ib as t$2, cD as o$1, dD as r$1, jA as K$1, bB as E, df as An, dc as en, dd as tn, de as rn } from "./index.js";
import { n as n$2 } from "./objectIdUtils.js";
import "vue";
let c = class extends n(t(b)) {
  constructor(r2) {
    super(r2), this.elevationInfo = null, this.graphics = new i(), this.screenSizePerspectiveEnabled = true, this.type = "graphics", this.internal = false;
  }
  destroy() {
    this.removeAll(), this.graphics.destroy();
  }
  add(r2) {
    return this.graphics.add(r2), this;
  }
  addMany(r2) {
    return this.graphics.addMany(r2), this;
  }
  removeAll() {
    return this.graphics.removeAll(), this;
  }
  remove(r2) {
    this.graphics.remove(r2);
  }
  removeMany(r2) {
    this.graphics.removeMany(r2);
  }
  on(r2, e2) {
    return super.on(r2, e2);
  }
  graphicChanged(r2) {
    this.emit("graphic-update", r2);
  }
};
e([y({ type: x })], c.prototype, "elevationInfo", void 0), e([y(a(i, "graphics"))], c.prototype, "graphics", void 0), e([y({ type: ["show", "hide"] })], c.prototype, "listMode", void 0), e([y()], c.prototype, "screenSizePerspectiveEnabled", void 0), e([y({ readOnly: true })], c.prototype, "type", void 0), e([y({ constructOnly: true })], c.prototype, "internal", void 0), c = e([n$1("esri.layers.GraphicsLayer")], c);
const h = c;
function z(e2) {
  return e2.featureCollectionType === "markup" || e2.layers.some((e3) => e3.layerDefinition.visibilityField != null || !U(e3));
}
function U({ layerDefinition: e2, featureSet: t2 }) {
  var _a;
  const r2 = (_a = e2.geometryType) != null ? _a : t2.geometryType;
  return H.find((t3) => {
    var _a2, _b, _c;
    return r2 === t3.geometryTypeJSON && ((_c = (_b = (_a2 = e2.drawingInfo) == null ? void 0 : _a2.renderer) == null ? void 0 : _b.symbol) == null ? void 0 : _c.type) === t3.identifyingSymbol.type;
  });
}
function W() {
  return new w({ xmin: -180, ymin: -90, xmax: 180, ymax: 90 });
}
const A = new y$1({ name: "OBJECTID", alias: "OBJECTID", type: "oid", nullable: false, editable: false }), $ = new y$1({ name: "title", alias: "Title", type: "string", nullable: true, editable: true });
let q = class extends h {
  constructor(e2) {
    super(e2), this.visibilityMode = "inherited";
  }
  initialize() {
    for (const e2 of this.graphics)
      e2.sourceLayer = this.layer;
    this.graphics.on("after-add", (e2) => {
      e2.item.sourceLayer = this.layer;
    }), this.graphics.on("after-remove", (e2) => {
      e2.item.sourceLayer = null;
    });
  }
  get fullExtent() {
    var _a;
    const e2 = (_a = this.layer) == null ? void 0 : _a.spatialReference, t2 = this.fullBounds;
    return e2 ? t$1(t2) ? un(W(), e2).geometry : f(t2, e2) : null;
  }
  get fullBounds() {
    var _a;
    const e2 = (_a = this.layer) == null ? void 0 : _a.spatialReference;
    if (!e2)
      return null;
    const t2 = D();
    return this.graphics.forEach((r$12) => {
      const o2 = r(r$12.geometry) ? un(r$12.geometry, e2).geometry : null;
      r(o2) && h$1(t2, o2.type === "point" ? o2 : o2.extent, t2);
    }), I(t2, K$1) ? null : t2;
  }
  get sublayers() {
    return this.graphics;
  }
};
e([y({ readOnly: true })], q.prototype, "fullExtent", null), e([y({ readOnly: true })], q.prototype, "fullBounds", null), e([y({ readOnly: true })], q.prototype, "sublayers", null), e([y()], q.prototype, "layer", void 0), e([y()], q.prototype, "layerId", void 0), e([y({ readOnly: true })], q.prototype, "visibilityMode", void 0), q = e([n$1("esri.layers.MapNotesLayer.MapNotesSublayer")], q);
const H = [{ geometryType: "polygon", geometryTypeJSON: "esriGeometryPolygon", id: "polygonLayer", layerId: 0, title: "Polygons", identifyingSymbol: new S().toJSON() }, { geometryType: "polyline", geometryTypeJSON: "esriGeometryPolyline", id: "polylineLayer", layerId: 1, title: "Polylines", identifyingSymbol: new m().toJSON() }, { geometryType: "multipoint", geometryTypeJSON: "esriGeometryMultipoint", id: "multipointLayer", layerId: 2, title: "Multipoints", identifyingSymbol: new y$2().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", id: "pointLayer", layerId: 3, title: "Points", identifyingSymbol: new y$2().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", id: "textLayer", layerId: 4, title: "Text", identifyingSymbol: new m$1().toJSON() }];
let K = class extends n(t(c$1(v(O(b))))) {
  constructor(e2) {
    super(e2), this.capabilities = { operations: { supportsMapNotesEditing: true } }, this.featureCollections = null, this.featureCollectionJSON = null, this.featureCollectionType = "notes", this.legendEnabled = false, this.listMode = "hide-children", this.minScale = 0, this.maxScale = 0, this.spatialReference = k.WGS84, this.sublayers = new j(H.map((e3) => new q({ id: e3.id, layerId: e3.layerId, title: e3.title, layer: this }))), this.title = "Map Notes", this.type = "map-notes", this.visibilityMode = "inherited";
  }
  readCapabilities(e2, t2, r2) {
    return { operations: { supportsMapNotesEditing: !z(t2) && (r2 == null ? void 0 : r2.origin) !== "portal-item" } };
  }
  readFeatureCollections(e2, t2, o2) {
    if (!z(t2))
      return null;
    const i2 = t2.layers.map((e3) => {
      const t3 = new Ze();
      return t3.read(e3, o2), t3;
    });
    return new j({ items: i2 });
  }
  readLegacyfeatureCollectionJSON(e2, t2) {
    return z(t2) ? y$3(t2.featureCollection) : null;
  }
  get fullExtent() {
    var _a;
    const e2 = this.spatialReference, t2 = D();
    if (r(this.sublayers))
      this.sublayers.forEach(({ fullBounds: e3 }) => r(e3) ? h$1(t2, e3, t2) : t2, t2);
    else if ((_a = this.featureCollectionJSON) == null ? void 0 : _a.layers.some((e3) => e3.layerDefinition.extent)) {
      this.featureCollectionJSON.layers.forEach((r$12) => {
        const o2 = un(r$12.layerDefinition.extent, e2).geometry;
        r(o2) && h$1(t2, o2, t2);
      });
    }
    return I(t2, K$1) ? un(W(), e2).geometry : f(t2, e2);
  }
  readMinScale(e2, t2) {
    for (const r2 of t2.layers)
      if (r2.layerDefinition.minScale != null)
        return r2.layerDefinition.minScale;
    return 0;
  }
  readMaxScale(e2, t2) {
    for (const r2 of t2.layers)
      if (r2.layerDefinition.maxScale != null)
        return r2.layerDefinition.maxScale;
    return 0;
  }
  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }
  get pointLayer() {
    return this._findSublayer("pointLayer");
  }
  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }
  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }
  readSpatialReference(e2, t2) {
    return t2.layers.length ? k.fromJSON(t2.layers[0].layerDefinition.spatialReference) : k.WGS84;
  }
  readSublayers(e2, o2, i2) {
    var _a;
    if (z(o2))
      return null;
    const a2 = [];
    let n2 = o2.layers.reduce((e3, t2) => {
      var _a2;
      return Math.max(e3, (_a2 = t2.layerDefinition.id) != null ? _a2 : -1);
    }, -1) + 1;
    for (const r$12 of o2.layers) {
      const { layerDefinition: e3, featureSet: o3 } = r$12, i3 = (_a = e3.id) != null ? _a : n2++, s2 = U(r$12);
      if (r(s2)) {
        const r2 = new q({ id: s2.id, title: e3.name, layerId: i3, layer: this, graphics: o3.features.map(({ geometry: e4, symbol: r3, attributes: o4, popupInfo: i4 }) => g.fromJSON({ attributes: o4, geometry: e4, symbol: r3, popupTemplate: i4 })) });
        a2.push(r2);
      }
    }
    return new j(a2);
  }
  writeSublayers(e2, t2, r$12, i2) {
    var _a;
    const { minScale: n2, maxScale: p } = this;
    if (t$1(e2))
      return;
    const y2 = e2.some((e3) => e3.graphics.length > 0);
    if (!this.capabilities.operations.supportsMapNotesEditing)
      return void (y2 && ((_a = i2 == null ? void 0 : i2.messages) == null ? void 0 : _a.push(new s("map-notes-layer:editing-not-supported", "New map notes cannot be added to this layer"))));
    const m2 = [];
    let u = this.spatialReference.toJSON();
    e:
      for (const o2 of e2)
        for (const e3 of o2.graphics)
          if (r(e3.geometry)) {
            u = e3.geometry.spatialReference.toJSON();
            break e;
          }
    for (const o2 of H) {
      const t3 = e2.find((e3) => o2.id === e3.id);
      this._writeMapNoteSublayer(m2, t3, o2, n2, p, u, i2);
    }
    o("featureCollection.layers", m2, t2);
  }
  get textLayer() {
    return this._findSublayer("textLayer");
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e2)), Promise.resolve(this);
  }
  read(e2, t2) {
    "featureCollection" in e2 && (e2 = y$3(e2), Object.assign(e2, e2.featureCollection)), super.read(e2, t2);
  }
  async beforeSave() {
    if (t$1(this.sublayers))
      return;
    let e2 = null;
    const t2 = [];
    for (const o2 of this.sublayers)
      for (const r$13 of o2.graphics)
        if (r(r$13.geometry)) {
          const o3 = r$13.geometry;
          e2 ? E(o3.spatialReference, e2) || (An(o3.spatialReference, e2) || en() || await tn(), r$13.geometry = rn(o3, e2)) : e2 = o3.spatialReference, t2.push(r$13);
        }
    const r$12 = await v$1(t2.map((e3) => e3.geometry));
    t2.forEach((e3, t3) => e3.geometry = r$12[t3]);
  }
  _findSublayer(e2) {
    var _a, _b;
    return t$1(this.sublayers) ? null : (_b = (_a = this.sublayers) == null ? void 0 : _a.find((t2) => t2.id === e2)) != null ? _b : null;
  }
  _writeMapNoteSublayer(e2, t2, r2, o2, l, n2, s2) {
    const p = [];
    if (!t$1(t2)) {
      for (const e3 of t2.graphics)
        this._writeMapNote(p, e3, r2.geometryType, s2);
      this._normalizeObjectIds(p, A), e2.push({ layerDefinition: { name: t2.title, drawingInfo: { renderer: { type: "simple", symbol: y$3(r2.identifyingSymbol) } }, id: t2.layerId, geometryType: r2.geometryTypeJSON, minScale: o2, maxScale: l, objectIdField: "OBJECTID", fields: [A.toJSON(), $.toJSON()], spatialReference: n2 }, featureSet: { features: p, geometryType: r2.geometryTypeJSON } });
    }
  }
  _writeMapNote(e2, t2, r$12, o2) {
    var _a, _b;
    if (t$1(t2))
      return;
    const { geometry: i2, symbol: n2, popupTemplate: s2 } = t2;
    if (t$1(i2))
      return;
    if (i2.type !== r$12)
      return void ((_a = o2 == null ? void 0 : o2.messages) == null ? void 0 : _a.push(new t$2("map-notes-layer:invalid-geometry-type", `Geometry "${i2.type}" cannot be saved in "${r$12}" layer`, { graphic: t2 })));
    if (t$1(n2))
      return void ((_b = o2 == null ? void 0 : o2.messages) == null ? void 0 : _b.push(new t$2("map-notes-layer:no-symbol", "Skipping map notes with no symbol", { graphic: t2 })));
    const y2 = { attributes: __spreadValues({}, t2.attributes), geometry: i2.toJSON(), symbol: n2.toJSON() };
    r(s2) && (y2.popupInfo = s2.toJSON()), e2.push(y2);
  }
  _normalizeObjectIds(e2, t2) {
    const r2 = t2.name;
    let o2 = n$2(r2, e2) + 1;
    const i2 = new Set();
    for (const l of e2) {
      l.attributes || (l.attributes = {});
      const { attributes: e3 } = l;
      (e3[r2] == null || i2.has(e3[r2])) && (e3[r2] = o2++), i2.add(e3[r2]);
    }
  }
};
e([y({ readOnly: true })], K.prototype, "capabilities", void 0), e([o$1(["portal-item", "web-map"], "capabilities", ["layers"])], K.prototype, "readCapabilities", null), e([y({ readOnly: true })], K.prototype, "featureCollections", void 0), e([o$1(["web-map", "portal-item"], "featureCollections", ["layers"])], K.prototype, "readFeatureCollections", null), e([y({ readOnly: true, json: { origins: { "web-map": { write: { enabled: true, target: "featureCollection" } } } } })], K.prototype, "featureCollectionJSON", void 0), e([o$1(["web-map", "portal-item"], "featureCollectionJSON", ["featureCollection"])], K.prototype, "readLegacyfeatureCollectionJSON", null), e([y({ readOnly: true, json: { read: true, write: { enabled: true, ignoreOrigin: true } } })], K.prototype, "featureCollectionType", void 0), e([y({ readOnly: true })], K.prototype, "fullExtent", null), e([y({ readOnly: true, json: { origins: { "web-map": { write: { target: "featureCollection.showLegend", overridePolicy() {
  return { enabled: this.featureCollectionJSON != null };
} } } } } })], K.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide", "hide-children"] })], K.prototype, "listMode", void 0), e([y({ type: Number, nonNullable: true, json: { write: false } })], K.prototype, "minScale", void 0), e([o$1(["web-map", "portal-item"], "minScale", ["layers"])], K.prototype, "readMinScale", null), e([y({ type: Number, nonNullable: true, json: { write: false } })], K.prototype, "maxScale", void 0), e([o$1(["web-map", "portal-item"], "maxScale", ["layers"])], K.prototype, "readMaxScale", null), e([y({ readOnly: true })], K.prototype, "multipointLayer", null), e([y({ value: "ArcGISFeatureLayer", type: ["ArcGISFeatureLayer"] })], K.prototype, "operationalLayerType", void 0), e([y({ readOnly: true })], K.prototype, "pointLayer", null), e([y({ readOnly: true })], K.prototype, "polygonLayer", null), e([y({ readOnly: true })], K.prototype, "polylineLayer", null), e([y({ type: k })], K.prototype, "spatialReference", void 0), e([o$1(["web-map", "portal-item"], "spatialReference", ["layers"])], K.prototype, "readSpatialReference", null), e([y({ readOnly: true, json: { origins: { "web-map": { write: { ignoreOrigin: true } } } } })], K.prototype, "sublayers", void 0), e([o$1("web-map", "sublayers", ["layers"])], K.prototype, "readSublayers", null), e([r$1("web-map", "sublayers")], K.prototype, "writeSublayers", null), e([y({ readOnly: true })], K.prototype, "textLayer", null), e([y()], K.prototype, "title", void 0), e([y({ readOnly: true, json: { read: false } })], K.prototype, "type", void 0), K = e([n$1("esri.layers.MapNotesLayer")], K);
const Q = K;
export { Q as default };
