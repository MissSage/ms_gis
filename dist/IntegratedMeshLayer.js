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
import { $ as e, a0 as y$1, aq as v, dD as r, a1 as n$1, co as l$1, df as An, ib as t, jc as mn, aX as y$2, it as u, cx as j, bO as j$1, U, gk as q, h1 as p, h2 as c, h3 as v$1, i3 as t$1, h4 as O, ie as i, e0 as b$1, al as t$2, cA as a$1, d8 as U$1, bP as c$1, aL as w, a as r$1, t as t$3, g as s, cD as o, ii as d } from "./index.js";
import { g } from "./persistable.js";
import { N, L } from "./SceneService.js";
import { s as s$1, l as l$2, u as u$1, m as m$1 } from "./I3SLayerDefinitions.js";
import "vue";
import "./multiOriginJSONSupportUtils.js";
import "./originUtils.js";
import "./resourceUtils.js";
var m;
let y = m = class extends l$1 {
  constructor(e2) {
    super(e2), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e2, r2, o2, s2) {
    if (s2.layer && s2.layer.spatialReference && !s2.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!An(e2.spatialReference, s2.layer.spatialReference))
        return void (s2 && s2.messages && s2.messages.push(new t("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s2.layer.spatialReference, context: s2 })));
      const p2 = new v();
      mn(e2, p2, s2.layer.spatialReference), r2[o2] = p2.toJSON(s2);
    } else
      r2[o2] = e2.toJSON(s2);
    delete r2[o2].spatialReference;
  }
  clone() {
    return new m({ geometry: y$2(this.geometry), type: this.type });
  }
};
e([y$1({ type: v }), g()], y.prototype, "geometry", void 0), e([r(["web-scene", "portal-item"], "geometry")], y.prototype, "writeGeometry", null), e([y$1({ type: ["clip", "mask", "replace"], nonNullable: true }), g()], y.prototype, "type", void 0), y = m = e([n$1("esri.layers.support.SceneModification")], y);
const f = y;
var a;
let n = a = class extends u(j.ofType(f)) {
  constructor(r2) {
    super(r2), this.url = null;
  }
  clone() {
    return new a({ url: this.url, items: this.items.map((r2) => r2.clone()) });
  }
  toJSON(r2) {
    return this.toArray().map((o2) => o2.toJSON(r2)).filter((r3) => !!r3.geometry);
  }
  static fromJSON(r2, o2) {
    const t2 = new a();
    for (const e2 of r2)
      t2.add(f.fromJSON(e2, o2));
    return t2;
  }
  static async fromUrl(r2, t2, e2) {
    const c2 = { url: j$1(r2), origin: "service" }, p2 = await U(r2, { responseType: "json", signal: q(e2, "signal") }), n2 = t2.toJSON(), l2 = [];
    for (const o2 of p2.data)
      l2.push(f.fromJSON(__spreadProps(__spreadValues({}, o2), { geometry: __spreadProps(__spreadValues({}, o2.geometry), { spatialReference: n2 }) }), c2));
    return new a({ url: r2, items: l2 });
  }
};
e([y$1({ type: String })], n.prototype, "url", void 0), n = a = e([n$1("esri.layers.support.SceneModifications")], n);
const l = n;
let b = class extends N(p(c(v$1(t$1(O(i(b$1))))))) {
  constructor(...e2) {
    super(...e2), this._handles = new t$2(), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.elevationInfo = null, this.path = null;
  }
  destroy() {
    this._handles.destroy();
  }
  initialize() {
    this._handles.add(a$1(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U$1));
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  readModifications(e2, t2, r2) {
    this._modificationsSource = { url: c$1(e2, r2), context: r2 };
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  async _doLoad(e2) {
    const t2 = q(e2, "signal");
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2);
    } catch (r2) {
      w(r2);
    }
    if (await this._fetchService(t2), r$1(this._modificationsSource)) {
      const t3 = await l.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
      this.setAtOrigin("modifications", t3, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t2);
  }
  beforeSave() {
    if (!t$3(this._modificationsSource))
      return this.load().then(() => {
      }, () => {
      });
  }
  async saveAs(e2, t2) {
    return this._debouncedSaveOperations(L.SAVE_AS, __spreadProps(__spreadValues({}, t2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }), e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(L.SAVE, e2);
  }
  validateLayer(e2) {
    if (e2.layerType && e2.layerType !== "IntegratedMesh")
      throw new s("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
};
e([y$1({ type: String, readOnly: true })], b.prototype, "geometryType", void 0), e([y$1({ type: ["show", "hide"] })], b.prototype, "listMode", void 0), e([y$1({ type: ["IntegratedMeshLayer"] })], b.prototype, "operationalLayerType", void 0), e([y$1({ json: { read: false }, readOnly: true })], b.prototype, "type", void 0), e([y$1({ type: s$1, readOnly: true })], b.prototype, "nodePages", void 0), e([y$1({ type: [l$2], readOnly: true })], b.prototype, "materialDefinitions", void 0), e([y$1({ type: [u$1], readOnly: true })], b.prototype, "textureSetDefinitions", void 0), e([y$1({ type: [m$1], readOnly: true })], b.prototype, "geometryDefinitions", void 0), e([y$1({ readOnly: true })], b.prototype, "serviceUpdateTimeStamp", void 0), e([y$1({ type: l }), g({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], b.prototype, "modifications", void 0), e([o(["web-scene", "portal-item"], "modifications")], b.prototype, "readModifications", null), e([y$1(d)], b.prototype, "elevationInfo", void 0), e([y$1({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], b.prototype, "path", void 0), b = e([n$1("esri.layers.IntegratedMeshLayer")], b);
const A = b;
export { A as default };
