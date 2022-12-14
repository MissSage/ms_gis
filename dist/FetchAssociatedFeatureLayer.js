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
import { gC as r, fe as t$1, ap as u, cs as E$1, U, ip as u$1, iq as f, t as t$3, a as r$2, du as s, aL as w, hY as Ze, d$ as x, bN as j } from "./index.js";
import "./mat3f64.js";
import "./mat4f64.js";
import "./quat.js";
import { r as r$1, e, I } from "./I3SBinaryReader.js";
import "./quatf64.js";
import "./symbolColorUtils.js";
import { t as t$2 } from "./vec3f32.js";
import "./plane.js";
const t = { analytics: { supportsCacheHint: false }, attachment: { supportsContentType: false, supportsExifInfo: false, supportsKeywords: false, supportsName: false, supportsSize: false, supportsCacheHint: false, supportsResize: false }, data: { isVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: false }, editing: { supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsGeometryUpdate: false, supportsGlobalId: false, supportsReturnServiceEditsInSourceSpatialReference: false, supportsRollbackOnFailure: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false, supportsUpdateWithoutM: false, supportsUploadWithItemId: false }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: false, supportsDelete: false, supportsEditing: false, supportsChangeTracking: false, supportsQuery: false, supportsQueryAnalytics: false, supportsQueryAttachments: false, supportsQueryTopFeatures: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: false, supportsExceedsLimitStatistics: false }, queryRelated: { supportsCount: false, supportsOrderBy: false, supportsPagination: false, supportsCacheHint: false }, queryTopFeatures: { supportsCacheHint: false }, query: { maxRecordCount: 0, maxRecordCountFactor: 0, standardMaxRecordCount: 0, supportsCacheHint: false, supportsCentroid: false, supportsCompactGeometry: false, supportsDefaultSpatialReference: false, supportsFullTextSearch: false, supportsDisjointSpatialRelationship: false, supportsDistance: false, supportsDistinct: false, supportsExtent: false, supportsFormatPBF: false, supportsGeometryProperties: false, supportsHavingClause: false, supportsHistoricMoment: false, supportsMaxRecordCountFactor: false, supportsOrderBy: false, supportsPagination: false, supportsPercentileStatistics: false, supportsQuantization: false, supportsQuantizationEditMode: false, supportsQueryByOthers: false, supportsQueryGeometry: false, supportsResultType: false, supportsSqlExpression: false, supportsStandardizedQueriesOnly: false, supportsTopFeaturesQuery: false, supportsSpatialAggregationStatistics: false, supportedSpatialAggregationStatistics: { envelope: false, centroid: false, convexHull: false }, supportsStatistics: false, tileMaxRecordCount: 0 } };
var A;
!function(A2) {
  A2[A2.INVISIBLE = 0] = "INVISIBLE", A2[A2.TRANSPARENT = 1] = "TRANSPARENT", A2[A2.OPAQUE = 2] = "OPAQUE";
}(A || (A = {}));
function m(e2) {
  return __spreadProps(__spreadValues(__spreadValues({}, g), e2), { type: "solid" });
}
const g = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: A.OPAQUE, hasSlicePlane: false };
({ color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: A.OPAQUE, hasSlicePlane: false });
function E(t2 = [0, 0, 0], e2 = [-1, -1, -1], a = [0, 0, 0, 1]) {
  return { center: t$1(t2), halfSize: t$2(e2), quaternion: r$1(a) };
}
(() => {
  const t2 = new Int8Array(162);
  let e2 = 0;
  const a = (a2) => {
    for (let n = 0; n < a2.length; n++)
      t2[e2 + n] = a2[n];
    e2 += 6;
  };
  return a([6, 2, 3, 1, 5, 4]), a([0, 2, 3, 1, 5, 4]), a([0, 2, 3, 7, 5, 4]), a([0, 1, 3, 2, 6, 4]), a([0, 1, 3, 2, 0, 0]), a([0, 1, 5, 7, 3, 2]), a([0, 1, 3, 7, 6, 4]), a([0, 1, 3, 7, 6, 2]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 4, 6, 2]), a([0, 1, 5, 4, 0, 0]), a([0, 1, 3, 7, 5, 4]), a([0, 2, 6, 4, 0, 0]), a([0, 0, 0, 0, 0, 0]), a([1, 3, 7, 5, 0, 0]), a([2, 3, 7, 6, 4, 0]), a([2, 3, 7, 6, 0, 0]), a([2, 3, 1, 5, 7, 6]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 7, 6, 4]), a([0, 1, 3, 7, 6, 4]), a([4, 5, 7, 6, 2, 0]), a([4, 5, 7, 6, 0, 0]), a([4, 5, 1, 3, 7, 6]), a([0, 2, 3, 7, 5, 4]), a([6, 2, 3, 7, 5, 4]), a([6, 2, 3, 1, 5, 4]), t2;
})();
u();
var ce;
function ye(t2, r2, n, o, a) {
  const s2 = [];
  for (const e2 of r2)
    if (e2 && a.includes(e2.name)) {
      const r3 = `${t2}/nodes/${n}/attributes/${e2.key}/0`;
      s2.push({ url: r3, storageInfo: e2 });
    }
  return E$1(s2.map((t3) => U(t3.url, { responseType: "array-buffer" }).then((e2) => I(t3.storageInfo, e2.data)))).then((e2) => {
    const t3 = [];
    for (const r3 of o) {
      const n2 = {};
      for (let t4 = 0; t4 < e2.length; t4++)
        e2[t4].value != null && (n2[s2[t4].storageInfo.name] = be(e2[t4].value, r3));
      t3.push(n2);
    }
    return t3;
  });
}
!function(e2) {
  e2[e2.OUTSIDE = 0] = "OUTSIDE", e2[e2.INTERSECTS_CENTER_OUTSIDE = 1] = "INTERSECTS_CENTER_OUTSIDE", e2[e2.INTERSECTS_CENTER_INSIDE = 2] = "INTERSECTS_CENTER_INSIDE", e2[e2.INSIDE = 3] = "INSIDE";
}(ce || (ce = {}));
const Se = -32768, ge = -(2 ** 31);
function be(e2, t2) {
  if (!e2)
    return null;
  const r2 = e2[t2];
  if (u$1(e2))
    return r2 === Se ? null : r2;
  if (f(e2))
    return r2 === ge ? null : r2;
  return r2 != r2 ? null : r2;
}
m({ color: [0, 0, 0, 0], opacity: 0 });
e();
u();
u();
E();
({ data: new Array(72), size: 3 });
class l {
  constructor(t2, r2, e2, a) {
    var _a;
    this._parsedUrl = t2, this._portalItem = r2, this._apiKey = e2, this.signal = a, this._rootDocument = null;
    const i = (_a = this._parsedUrl) == null ? void 0 : _a.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);
    i && (this._urlParts = { root: i[1], layerId: parseInt(i[2], 10) });
  }
  async fetch() {
    var _a;
    if (!this._urlParts)
      return null;
    const t2 = (_a = this._portalItem) != null ? _a : await this._portalItemFromServiceItemId();
    if (t$3(t2))
      return this._loadFromUrl();
    const r2 = await this._findAndLoadRelatedPortalItem(t2);
    return t$3(r2) ? null : this._loadFeatureLayerFromPortalItem(r2);
  }
  async fetchPortalItem() {
    var _a;
    if (!this._urlParts)
      return null;
    const t2 = (_a = this._portalItem) != null ? _a : await this._portalItemFromServiceItemId();
    return t$3(t2) ? null : this._findAndLoadRelatedPortalItem(t2);
  }
  async _fetchRootDocument() {
    if (r$2(this._rootDocument))
      return this._rootDocument;
    if (t$3(this._urlParts))
      return this._rootDocument = {}, {};
    const t2 = { query: { f: "json", token: this._apiKey }, responseType: "json", signal: this.signal }, i = `${this._urlParts.root}/SceneServer`;
    try {
      const e2 = await U(i, t2);
      this._rootDocument = e2.data;
    } catch {
      this._rootDocument = {};
    }
    return this._rootDocument;
  }
  async _fetchServiceOwningPortalUrl() {
    var _a, _b;
    const e2 = (_a = this._parsedUrl) == null ? void 0 : _a.path, a = e2 ? (_b = s) == null ? void 0 : _b.findServerInfo(e2) : null;
    if (a == null ? void 0 : a.owningSystemUrl)
      return a.owningSystemUrl;
    const s$1 = e2 ? e2.replace(/(.*\/rest)\/.*/i, "$1") + "/info" : null;
    try {
      const t2 = (await U(s$1, { query: { f: "json" }, responseType: "json", signal: this.signal })).data.owningSystemUrl;
      if (t2)
        return t2;
    } catch (n) {
      w(n);
    }
    return null;
  }
  async _findAndLoadRelatedPortalItem(t2) {
    try {
      return (await t2.fetchRelatedItems({ relationshipType: "Service2Service", direction: "reverse" }, { signal: this.signal })).find((t3) => t3.type === "Feature Service") || null;
    } catch (r2) {
      return w(r2), null;
    }
  }
  async _loadFeatureLayerFromPortalItem(t2) {
    var _a;
    await t2.load({ signal: this.signal });
    const r2 = await this._findMatchingAssociatedSublayerUrl((_a = t2.url) != null ? _a : "");
    return new Ze({ url: r2, portalItem: t2 }).load({ signal: this.signal });
  }
  async _loadFromUrl() {
    var _a;
    const t2 = await this._findMatchingAssociatedSublayerUrl(`${(_a = this._urlParts) == null ? void 0 : _a.root}/FeatureServer`);
    return new Ze({ url: t2 }).load({ signal: this.signal });
  }
  async _findMatchingAssociatedSublayerUrl(t2) {
    var _a;
    const e2 = t2.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i, "$1"), a = { query: { f: "json" }, responseType: "json", authMode: "no-prompt", signal: this.signal }, i = (_a = this._urlParts) == null ? void 0 : _a.layerId, s2 = this._fetchRootDocument(), n = U(e2, a), [o, l2] = await Promise.all([n, s2]), c = l2 && l2.layers, u2 = o.data && o.data.layers;
    if (!Array.isArray(u2))
      throw new Error("expected layers array");
    if (Array.isArray(c))
      for (let r2 = 0; r2 < Math.min(c.length, u2.length); r2++) {
        if (c[r2].id === i)
          return `${e2}/${u2[r2].id}`;
      }
    else if (i != null && i < u2.length)
      return `${e2}/${u2[i].id}`;
    throw new Error("could not find matching associated sublayer");
  }
  async _portalItemFromServiceItemId() {
    const t2 = (await this._fetchRootDocument()).serviceItemId;
    if (!t2)
      return null;
    const r2 = new x({ id: t2, apiKey: this._apiKey }), e2 = await this._fetchServiceOwningPortalUrl();
    r$2(e2) && (r2.portal = new j({ url: e2 }));
    try {
      return r2.load({ signal: this.signal });
    } catch (s2) {
      return w(s2), null;
    }
  }
}
export { l, t, ye as y };
