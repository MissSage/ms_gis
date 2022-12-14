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
import { a as r, U as U$1, g as s, i0 as n$2, cs as E$1, l as f, e8 as b, s as s$1, $ as e, a0 as y, ij as j, aK as k, cD as o, cr as w$1, h6 as v, h7 as f$1, dD as r$1, a1 as n$3, cY as x, ik as y$1, hc as m, il as h, im as L$1, io as b$1, bO as j$1, d$ as x$1, bN as j$2 } from "./index.js";
import { i } from "./originUtils.js";
import { getSiblingOfSameTypeI as w } from "./resourceUtils.js";
async function n$1(n2, t, s$12, a2, i2, d) {
  let l = null;
  if (r(s$12)) {
    const o2 = `${n2}/nodepages/`, t2 = o2 + Math.floor(s$12.rootIndex / s$12.nodesPerPage);
    try {
      return { type: "page", rootPage: (await U$1(t2, { query: { f: "json", token: a2 }, responseType: "json", signal: d })).data, rootIndex: s$12.rootIndex, pageSize: s$12.nodesPerPage, lodMetric: s$12.lodSelectionMetricType, urlPrefix: o2 };
    } catch (f2) {
      r(i2) && i2.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", t2, f2), l = f2;
    }
  }
  if (!t)
    return null;
  const p = `${n2}/nodes/`, c = p + (t && t.split("/").pop());
  try {
    return { type: "node", rootNode: (await U$1(c, { query: { f: "json", token: a2 }, responseType: "json", signal: d })).data, urlPrefix: p };
  } catch (f2) {
    throw new s("sceneservice:root-node-missing", "Root node missing.", { pageError: l, nodeError: f2, url: c });
  }
}
async function a(r2, o2, a2) {
  if (!o2 || !o2.resources)
    return;
  const h2 = o2.portalItem === r2.portalItem ? new Set(r2.paths) : new Set();
  r2.paths.length = 0, r2.portalItem = o2.portalItem;
  const i2 = new Set(o2.resources.toKeep.map((r3) => r3.resource.path)), m2 = new Set(), f$12 = [];
  i2.forEach((e2) => {
    h2.delete(e2), r2.paths.push(e2);
  });
  for (const e2 of o2.resources.toUpdate)
    if (h2.delete(e2.resource.path), i2.has(e2.resource.path) || m2.has(e2.resource.path)) {
      const { resource: o3, content: s2, finish: t, error: u2 } = e2, h3 = w(o3, n$2());
      r2.paths.push(h3.path), f$12.push(n({ resource: h3, content: s2, compress: e2.compress, finish: t, error: u2 }, a2));
    } else
      r2.paths.push(e2.resource.path), f$12.push(u(e2, a2)), m2.add(e2.resource.path);
  for (const e2 of o2.resources.toAdd)
    f$12.push(n(e2, a2)), r2.paths.push(e2.resource.path);
  if (h2.forEach((r3) => {
    const e2 = o2.portalItem.resourceFromPath(r3);
    f$12.push(e2.portalItem.removeResource(e2).catch(() => {
    }));
  }), f$12.length === 0)
    return;
  const l = await E$1(f$12);
  f(a2);
  const d = l.filter((r3) => "error" in r3).map((r3) => r3.error);
  if (d.length > 0)
    throw new s("save:resources", "Failed to save one or more resources", { errors: d });
}
async function n(e2, s2) {
  const t = __spreadProps(__spreadValues({}, r(s2) ? s2 : {}), { compress: e2.compress }), c = await b(e2.resource.portalItem.addResource(e2.resource, e2.content, t));
  if (c.ok !== true)
    throw e2.error && e2.error(c.error), c.error;
  e2.finish && e2.finish(e2.resource);
}
async function u(e2, o2) {
  const s2 = await b(e2.resource.update(e2.content, o2));
  if (s2.ok !== true)
    throw e2.error(s2.error), s2.error;
  e2.finish(e2.resource);
}
const R = "esri.layers.mixins.SceneService", A = s$1.getLogger(R), N = (o$1) => {
  let N2 = class extends o$1 {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = x(async (e2, t, r2) => {
        switch (e2) {
          case L.SAVE:
            return this._save(t);
          case L.SAVE_AS:
            return this._saveAs(r2, t);
        }
      });
    }
    readSpatialReference(e2, t) {
      return this._readSpatialReference(t);
    }
    _readSpatialReference(e2) {
      if (e2.spatialReference != null)
        return k.fromJSON(e2.spatialReference);
      {
        const t = e2.store, r2 = t.indexCRS || t.geographicCRS, o2 = r2 && parseInt(r2.substring(r2.lastIndexOf("/") + 1, r2.length), 10);
        return o2 != null ? new k(o2) : null;
      }
    }
    readFullExtent(e2, t, r2) {
      if (e2 != null && typeof e2 == "object") {
        const o3 = e2.spatialReference == null ? __spreadProps(__spreadValues({}, e2), { spatialReference: this._readSpatialReference(t) }) : e2;
        return w$1.fromJSON(o3, r2);
      }
      const o2 = t.store, i2 = this._readSpatialReference(t);
      return i2 == null || o2 == null || o2.extent == null || !Array.isArray(o2.extent) || o2.extent.some((e3) => e3 < U) ? null : new w$1({ xmin: o2.extent[0], ymin: o2.extent[1], xmax: o2.extent[2], ymax: o2.extent[3], spatialReference: i2 });
    }
    parseVersionString(e2) {
      const t = { major: Number.NaN, minor: Number.NaN, versionString: e2 }, r2 = e2.split(".");
      return r2.length >= 2 && (t.major = parseInt(r2[0], 10), t.minor = parseInt(r2[1], 10)), t;
    }
    readVersion(e2, t) {
      const r2 = t.store, o2 = r2.version != null ? r2.version.toString() : "";
      return this.parseVersionString(o2);
    }
    readTitlePortalItem(e2) {
      return this.sublayerTitleMode !== "item-title" ? void 0 : e2;
    }
    readTitleService(e2, t) {
      const r$12 = this.portalItem && this.portalItem.title;
      if (this.sublayerTitleMode === "item-title")
        return y$1(this.url, t.name);
      let o2 = t.name;
      if (!o2 && this.url) {
        const e3 = m(this.url);
        r(e3) && (o2 = e3.title);
      }
      return this.sublayerTitleMode === "item-title-and-service-name" && r$12 && (o2 = r$12 + " - " + o2), h(o2);
    }
    set url(e2) {
      const t = L$1({ layer: this, url: e2, nonStandardUrlAllowed: false, logger: A });
      this._set("url", t.url), t.layerId != null && this._set("layerId", t.layerId);
    }
    writeUrl(e2, t, r2, o2) {
      b$1(this, e2, "layers", t, o2);
    }
    get parsedUrl() {
      const e2 = this._get("url"), t = j$1(e2);
      return this.layerId != null && (t.path = `${t.path}/layers/${this.layerId}`), t;
    }
    async _fetchIndexAndUpdateExtent(e2, t) {
      this.indexInfo = n$1(this.parsedUrl.path, this.rootNode, e2, this.apiKey, A, t), this.fullExtent == null || this.fullExtent.hasZ || this._updateExtent(await this.indexInfo);
    }
    _updateExtent(e2) {
      var _a, _b, _c;
      if ((e2 == null ? void 0 : e2.type) === "page") {
        const t = e2.rootIndex % e2.pageSize, o2 = (_b = (_a = e2.rootPage) == null ? void 0 : _a.nodes) == null ? void 0 : _b[t];
        if (o2 == null || o2.obb == null || o2.obb.center == null || o2.obb.halfSize == null)
          throw new s("sceneservice:invalid-node-page", "Invalid node page.");
        if (o2.obb.center[0] < U || this.fullExtent == null || this.fullExtent.hasZ)
          return;
        const i2 = o2.obb.halfSize, s$12 = o2.obb.center[2], a2 = Math.sqrt(i2[0] * i2[0] + i2[1] * i2[1] + i2[2] * i2[2]);
        this.fullExtent.zmin = s$12 - a2, this.fullExtent.zmax = s$12 + a2;
      } else if ((e2 == null ? void 0 : e2.type) === "node") {
        const t = (_c = e2.rootNode) == null ? void 0 : _c.mbs;
        if (!Array.isArray(t) || t.length !== 4 || t[0] < U)
          return;
        const r2 = t[2], o2 = t[3], { fullExtent: i2 } = this;
        i2 && (i2.zmin = r2 - o2, i2.zmax = r2 + o2);
      }
    }
    async _fetchService(e2) {
      if (this.url == null)
        throw new s("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
      if (this.layerId == null && /SceneServer\/*$/i.test(this.url)) {
        const t = await this._fetchFirstLayerId(e2);
        t != null && (this.layerId = t);
      }
      return this._fetchServiceLayer(e2);
    }
    async _fetchFirstLayerId(e2) {
      const r2 = await U$1(this.url, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e2 });
      if (r2.data && Array.isArray(r2.data.layers) && r2.data.layers.length > 0)
        return r2.data.layers[0].id;
    }
    async _fetchServiceLayer(e2) {
      var _a, _b;
      const r2 = await U$1((_b = (_a = this.parsedUrl) == null ? void 0 : _a.path) != null ? _b : "", { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e2 });
      r2.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
      let o2 = false;
      if (r2.data.layerType && r2.data.layerType === "Voxel" && (o2 = true), o2)
        return this._fetchVoxelServiceLayer();
      const i2 = r2.data;
      this.read(i2, { origin: "service", url: this.parsedUrl }), this.validateLayer(i2);
    }
    async _fetchVoxelServiceLayer(e2) {
      var _a;
      const r2 = (await U$1(((_a = this.parsedUrl) == null ? void 0 : _a.path) + "/layer", { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e2 })).data;
      this.read(r2, { origin: "service", url: this.parsedUrl }), this.validateLayer(r2);
    }
    async _ensureLoadBeforeSave() {
      await this.load(), "beforeSave" in this && typeof this.beforeSave == "function" && await this.beforeSave();
    }
    validateLayer(e2) {
    }
    _updateTypeKeywords(e2, t, r2) {
      e2.typeKeywords || (e2.typeKeywords = []);
      const o2 = t.getTypeKeywords();
      for (const i2 of o2)
        e2.typeKeywords.push(i2);
      e2.typeKeywords && (e2.typeKeywords = e2.typeKeywords.filter((e3, t2, r3) => r3.indexOf(e3) === t2), r2 === T.newItem && (e2.typeKeywords = e2.typeKeywords.filter((e3) => e3 !== "Hosted Service")));
    }
    async _saveAs(e2, t) {
      var _a, _b, _c;
      const o2 = __spreadValues(__spreadValues({}, K), t);
      let i$1 = x$1.from(e2);
      i$1 || (A.error("_saveAs(): requires a portal item parameter"), await Promise.reject(new s("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to"))), i$1.id && (i$1 = i$1.clone(), i$1.id = null);
      const s$12 = i$1.portal || j$2.getDefault();
      await this._ensureLoadBeforeSave(), i$1.type = O, i$1.portal = s$12;
      const a$1 = { origin: "portal-item", url: null, messages: [], portal: s$12, portalItem: i$1, writtenProperties: [], blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } }, n2 = { layers: [this.write({}, a$1)] };
      return await Promise.all((_b = (_a = a$1.resources) == null ? void 0 : _a.pendingOperations) != null ? _b : []), await this._validateAgainstJSONSchema(n2, a$1, o2), i$1.url = this.url, i$1.title || (i$1.title = this.title), this._updateTypeKeywords(i$1, o2, T.newItem), await s$12._signIn(), await ((_c = s$12.user) == null ? void 0 : _c.addItem({ item: i$1, folder: o2 && o2.folder, data: n2 })), await a(this.resourceReferences, a$1, null), this.portalItem = i$1, i(a$1), a$1.portalItem = i$1, i$1;
    }
    async _save(e2) {
      var _a, _b;
      const t = __spreadValues(__spreadValues({}, K), e2);
      if (!this.portalItem)
        throw A.error("_save(): requires the .portalItem property to be set"), new s("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
      if (this.portalItem.type !== O)
        throw A.error("_save(): Non-matching portal item type. Got " + this.portalItem.type + ", expected " + O), new s("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${O}"`);
      await this._ensureLoadBeforeSave();
      const o2 = { origin: "portal-item", url: this.portalItem.itemUrl && j$1(this.portalItem.itemUrl), messages: [], portal: this.portalItem.portal || j$2.getDefault(), portalItem: this.portalItem, writtenProperties: [], blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } }, i$1 = { layers: [this.write({}, o2)] };
      return await Promise.all((_b = (_a = o2.resources) == null ? void 0 : _a.pendingOperations) != null ? _b : []), await this._validateAgainstJSONSchema(i$1, o2, t), this.portalItem.url = this.url, this.portalItem.title || (this.portalItem.title = this.title), this._updateTypeKeywords(this.portalItem, t, T.existingItem), await this.portalItem.update({ data: i$1 }), await a(this.resourceReferences, o2, null), i(o2), this.portalItem;
    }
    async _validateAgainstJSONSchema(e2, t, o2) {
      var _a, _b, _c, _d, _e;
      let i2 = (_b = (_a = t.messages) == null ? void 0 : _a.filter((e3) => e3.type === "error").map((e3) => new s(e3.name, e3.message, e3.details))) != null ? _b : [];
      if (o2 && ((_c = o2.validationOptions) == null ? void 0 : _c.ignoreUnsupported) && (i2 = i2.filter((e3) => e3.name !== "layer:unsupported" && e3.name !== "symbol:unsupported" && e3.name !== "symbol-layer:unsupported" && e3.name !== "property:unsupported" && e3.name !== "url:unsupported" && e3.name !== "scenemodification:unsupported")), ((_d = o2.validationOptions) == null ? void 0 : _d.enabled) || E) {
        const t2 = (await import("./schemaValidator.js")).validate(e2, o2.portalItemLayerType);
        if (t2.length > 0) {
          const e3 = `Layer item did not validate:
${t2.join("\n")}`;
          if (A.error(`_validateAgainstJSONSchema(): ${e3}`), ((_e = o2.validationOptions) == null ? void 0 : _e.failPolicy) === "throw") {
            const e4 = t2.map((e5) => new s("sceneservice:schema-validation", e5)).concat(i2);
            throw new s("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { combined: e4 });
          }
        }
      }
      if (i2.length > 0)
        throw new s("sceneservice:save", "Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: i2 });
    }
  };
  return e([y(j)], N2.prototype, "id", void 0), e([y({ type: k })], N2.prototype, "spatialReference", void 0), e([o("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], N2.prototype, "readSpatialReference", null), e([y({ type: w$1 })], N2.prototype, "fullExtent", void 0), e([o("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], N2.prototype, "readFullExtent", null), e([y({ readOnly: true, type: v })], N2.prototype, "heightModelInfo", void 0), e([y({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: { source: "minScale" }, write: false } } } })], N2.prototype, "minScale", void 0), e([y({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: { source: "maxScale" }, write: false } } } })], N2.prototype, "maxScale", void 0), e([y({ readOnly: true })], N2.prototype, "version", void 0), e([o("version", ["store.version"])], N2.prototype, "readVersion", null), e([y({ type: String, json: { read: { source: "copyrightText" } } })], N2.prototype, "copyright", void 0), e([y({ type: String, json: { read: false } })], N2.prototype, "sublayerTitleMode", void 0), e([y({ type: String })], N2.prototype, "title", void 0), e([o("portal-item", "title")], N2.prototype, "readTitlePortalItem", null), e([o("service", "title", ["name"])], N2.prototype, "readTitleService", null), e([y({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: true, ignoreOrigin: true }, read: false } } } })], N2.prototype, "layerId", void 0), e([y(f$1)], N2.prototype, "url", null), e([r$1("url")], N2.prototype, "writeUrl", null), e([y()], N2.prototype, "parsedUrl", null), e([y({ readOnly: true })], N2.prototype, "store", void 0), e([y({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], N2.prototype, "rootNode", void 0), N2 = e([n$3(R)], N2), N2;
}, U = -1e38, E = false;
var T;
!function(e2) {
  e2[e2.existingItem = 0] = "existingItem", e2[e2.newItem = 1] = "newItem";
}(T || (T = {}));
const O = "Scene Service", K = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: true, ignoreUnsupported: false, failPolicy: "throw" } };
var L;
!function(e2) {
  e2[e2.SAVE = 0] = "SAVE", e2[e2.SAVE_AS = 1] = "SAVE_AS";
}(L || (L = {}));
export { L, N, n$1 as n };
