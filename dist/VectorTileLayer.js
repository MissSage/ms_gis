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
import { s as s$1, g as s$2, gn as o$2, ka as a, bO as j, ds as I, U as U$1, l as f, bE as e$1, m as j$1, aX as y$1, jh as K, ha as G, dv as Bt, cr as w$1, y as s$3, jF as Ct, kb as H, jC as ft, hx as F, hf as Ot, kc as C, d3 as j$2, i2 as n$4, i3 as t, h1 as p, h2 as c, h3 as v$1, iJ as o$3, ie as i, h4 as O, e0 as b, aL as w$2, k as e$3, kd as a$1, ke as y$2, aH as l$1, am as j$3, $ as e$4, a0 as y$3, aK as k, dD as r$2, cD as o$4, a1 as n$5 } from "./index.js";
import { s as s$4 } from "./ArcGISCachedService.js";
import { n as n$3, z } from "./TilemapCache.js";
import { e as e$2 } from "./jsonContext.js";
import { l as l$2 } from "./StyleRepository.js";
import "vue";
import "./StyleDefinition.js";
import "./enums2.js";
import "./enums3.js";
import "./enums.js";
import "./VertexElementDescriptor.js";
import "./colorUtils.js";
import "./GeometryUtils.js";
import "./Geometry.js";
let A = null;
function o$1(o2) {
  if (A)
    return A;
  const l2 = { lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==", animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" };
  return A = new Promise((A2) => {
    const n2 = new Image();
    n2.onload = () => {
      n2.onload = n2.onerror = null, A2(n2.width > 0 && n2.height > 0);
    }, n2.onerror = () => {
      n2.onload = n2.onerror = null, A2(false);
    }, n2.src = "data:image/webp;base64," + l2[o2];
  }), A;
}
const h$2 = 1.15;
class n$2 {
  constructor(t2, e2) {
    this._spriteSource = t2, this._maxTextureSize = e2, this.devicePixelRatio = 1, this._spriteImageFormat = "png", this._isRetina = false, this._spritesData = {}, this.image = null, this.width = null, this.height = null, this.loadStatus = "not-loaded", t2.type === "url" && t2.spriteFormat && (this._spriteImageFormat = t2.spriteFormat), t2.pixelRatio && (this.devicePixelRatio = t2.pixelRatio), this.baseURL = t2.spriteUrl;
  }
  get spriteNames() {
    const t2 = [];
    for (const e2 in this._spritesData)
      t2.push(e2);
    return t2.sort(), t2;
  }
  getSpriteInfo(t2) {
    return this._spritesData ? this._spritesData[t2] : null;
  }
  async load(t2) {
    if (this.baseURL) {
      this.loadStatus = "loading";
      try {
        await this._loadSprites(t2), this.loadStatus = "loaded";
      } catch {
        this.loadStatus = "failed";
      }
    } else
      this.loadStatus = "failed";
  }
  async _loadSprites(t2) {
    this._isRetina = this.devicePixelRatio > h$2;
    const { width: s2, height: r2, data: a2, json: o2 } = await this._getSpriteData(this._spriteSource, t2), n2 = Object.keys(o2);
    if (!n2 || n2.length === 0 || !a2)
      return this._spritesData = this.image = null, void (this.width = this.height = 0);
    this._spritesData = o2, this.width = s2, this.height = r2;
    const d2 = Math.max(this._maxTextureSize, 4096);
    if (s2 > d2 || r2 > d2) {
      const t3 = `Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${d2} pixels}`;
      throw s$1.getLogger("esri.layers.support.SpriteSource").error(t3), new s$2("SpriteSource", t3);
    }
    let p2;
    for (let e2 = 0; e2 < a2.length; e2 += 4)
      p2 = a2[e2 + 3] / 255, a2[e2] = a2[e2] * p2, a2[e2 + 1] = a2[e2 + 1] * p2, a2[e2 + 2] = a2[e2 + 2] * p2;
    this.image = a2;
  }
  async _getSpriteData(i2, n2) {
    if (i2.type === "image") {
      let t2, a$12;
      if (this.devicePixelRatio < h$2) {
        if (!i2.spriteSource1x)
          throw new s$2("SpriteSource", "no image data provided for low resolution sprites!");
        t2 = i2.spriteSource1x.image, a$12 = i2.spriteSource1x.json;
      } else {
        if (!i2.spriteSource2x)
          throw new s$2("SpriteSource", "no image data provided for high resolution sprites!");
        t2 = i2.spriteSource2x.image, a$12 = i2.spriteSource2x.json;
      }
      return "width" in t2 && "height" in t2 && "data" in t2 && (o$2(t2.data) || a(t2.data)) ? { width: t2.width, height: t2.height, data: new Uint8Array(t2.data), json: a$12 } : __spreadProps(__spreadValues({}, d$1(t2)), { json: a$12 });
    }
    const p2 = j(this.baseURL), l2 = p2.query ? "?" + I(p2.query) : "", g2 = this._isRetina ? "@2x" : "", u = `${p2.path}${g2}.${this._spriteImageFormat}${l2}`, c2 = `${p2.path}${g2}.json${l2}`, [m2, S2] = await Promise.all([U$1(c2, n2), U$1(u, __spreadValues({ responseType: "image" }, n2))]);
    return __spreadProps(__spreadValues({}, d$1(S2.data)), { json: m2.data });
  }
}
function d$1(t2) {
  const e2 = document.createElement("canvas"), i2 = e2.getContext("2d");
  e2.width = t2.width, e2.height = t2.height, i2.drawImage(t2, 0, 0, t2.width, t2.height);
  const s2 = i2.getImageData(0, 0, t2.width, t2.height);
  return { width: t2.width, height: t2.height, data: new Uint8Array(s2.data) };
}
class l {
  constructor(e2) {
    this.url = e2;
  }
  async fetchTileIndex() {
    return this._tileIndexPromise || (this._tileIndexPromise = U$1(this.url).then((e2) => e2.data.index)), this._tileIndexPromise;
  }
  async dataKey(e2, r2) {
    const l2 = await this.fetchTileIndex();
    return f(r2), this._getIndexedDataKey(l2, e2);
  }
  _getIndexedDataKey(e2, t2) {
    const l2 = [t2];
    if (t2.level < 0 || t2.row < 0 || t2.col < 0 || t2.row >> t2.level > 0 || t2.col >> t2.level > 0)
      return null;
    let i2 = t2;
    for (; i2.level !== 0; )
      i2 = new e$1(i2.level - 1, i2.row >> 1, i2.col >> 1, i2.world), l2.push(i2);
    let o2, s2, n2 = e2, a2 = l2.pop();
    if (n2 === 1)
      return a2;
    for (; l2.length; )
      if (o2 = l2.pop(), s2 = (1 & o2.col) + ((1 & o2.row) << 1), n2) {
        if (n2[s2] === 0) {
          a2 = null;
          break;
        }
        if (n2[s2] === 1) {
          a2 = o2;
          break;
        }
        a2 = o2, n2 = n2[s2];
      }
    return a2;
  }
}
class r$1 {
  constructor(e2, t2) {
    this._tilemap = e2, this._tileIndexUrl = t2;
  }
  async fetchTileIndex(t2) {
    return this._tileIndexPromise || (this._tileIndexPromise = U$1(this._tileIndexUrl, { query: __spreadValues({}, t2 == null ? void 0 : t2.query) }).then((e2) => e2.data.index)), this._tileIndexPromise;
  }
  dataKey(e2, r2) {
    const { level: l2, row: s2, col: o2 } = e2, n2 = new e$1(e2);
    return this._tilemap.fetchAvailabilityUpsample(l2, s2, o2, n2, r2).then(() => (n2.world = e2.world, n2)).catch((e3) => {
      if (j$1(e3))
        throw e3;
      return null;
    });
  }
}
const r = new Map();
function n$1(e2, t2, r2, n2, c2) {
  return o(e2.replace(/\{z\}/gi, t2.toString()).replace(/\{y\}/gi, r2.toString()).replace(/\{x\}/gi, n2.toString()), c2);
}
function o(n2, o2) {
  const c2 = r.get(n2);
  if (c2)
    return c2.then((e2) => y$1(e2));
  const i2 = U$1(n2, __spreadValues({ responseType: "array-buffer" }, o2)).then(({ data: e2 }) => (r.delete(n2), e2)).catch((e2) => {
    throw r.delete(n2), e2;
  });
  return r.set(n2, i2), i2;
}
class h$1 {
  constructor(u, h2, m2) {
    this.tilemap = null, this.tileInfo = null, this.capabilities = null, this.fullExtent = null, this.name = u, this.sourceUrl = h2;
    const f2 = j(this.sourceUrl), c2 = y$1(m2), x2 = c2.tiles;
    if (f2)
      for (let t2 = 0; t2 < x2.length; t2++) {
        const s2 = j(x2[t2]);
        s2 && (K(s2.path) || (s2.path = G(f2.path, s2.path)), x2[t2] = Bt(s2.path, __spreadValues(__spreadValues({}, f2.query), s2.query)));
      }
    this.tileServers = x2;
    const d2 = m2.capabilities && m2.capabilities.split(",").map((t2) => t2.toLowerCase().trim()), y2 = (m2 == null ? void 0 : m2.exportTilesAllowed) === true, T = (d2 == null ? void 0 : d2.includes("tilemap")) === true, g2 = y2 && m2.hasOwnProperty("maxExportTilesCount") ? m2.maxExportTilesCount : 0;
    this.capabilities = { operations: { supportsExportTiles: y2, supportsTileMap: T }, exportTiles: y2 ? { maxExportTilesCount: +g2 } : null }, this.tileInfo = n$3(c2.tileInfo, c2, null, { ignoreMinMaxLOD: true });
    const M = m2.tileMap ? Bt(G(f2.path, m2.tileMap), f2.query) : null;
    T ? (this.type = "vector-tile", this.tilemap = new r$1(new z({ layer: { parsedUrl: f2, tileInfo: this.tileInfo, type: "vector-tile", tileServers: this.tileServers } }), M)) : M && (this.tilemap = new l(M)), this.fullExtent = w$1.fromJSON(m2.fullExtent);
  }
  destroy() {
  }
  async getRefKey(t2, e2) {
    var _a, _b;
    return (_b = (_a = this.tilemap) == null ? void 0 : _a.dataKey(t2, e2)) != null ? _b : t2;
  }
  requestTile(t2, e2, i2, r2) {
    const l2 = this.tileServers[e2 % this.tileServers.length];
    return n$1(l2, t2, e2, i2, r2);
  }
  isCompatibleWith(t2) {
    const e2 = this.tileInfo, i2 = t2.tileInfo;
    if (!e2.spatialReference.equals(i2.spatialReference))
      return false;
    if (!e2.origin.equals(i2.origin))
      return false;
    if (Math.round(e2.dpi) !== Math.round(i2.dpi))
      return false;
    const r2 = e2.lods, l2 = i2.lods, s2 = Math.min(r2.length, l2.length);
    for (let o2 = 0; o2 < s2; o2++) {
      const t3 = r2[o2], e3 = l2[o2];
      if (t3.level !== e3.level || Math.round(t3.scale) !== Math.round(e3.scale))
        return false;
    }
    return true;
  }
}
const y = s$3.defaults && s$3.defaults.io.corsEnabledServers;
async function m(e2, r2) {
  const t2 = { source: null, sourceBase: null, sourceUrl: null, validatedSource: null, style: null, styleBase: null, styleUrl: null, sourceNameToSource: {}, primarySourceName: "", spriteFormat: "png" }, [s2, o2] = typeof e2 == "string" ? [e2, null] : [null, e2.jsonUrl];
  await S(t2, "esri", e2, o2, r2);
  const l2 = { layerDefinition: t2.validatedSource, url: s2, serviceUrl: t2.sourceUrl, style: t2.style, styleUrl: t2.styleUrl, spriteUrl: t2.style.sprite && h(t2.styleBase, t2.style.sprite), spriteFormat: t2.spriteFormat, glyphsUrl: t2.style.glyphs && h(t2.styleBase, t2.style.glyphs), sourceNameToSource: t2.sourceNameToSource, primarySourceName: t2.primarySourceName };
  return d(l2.spriteUrl), d(l2.glyphsUrl), l2;
}
function d(e2) {
  if (!e2)
    return;
  const r2 = H(e2);
  y && !y.includes(r2) && y.push(r2);
}
function h(...e2) {
  let r2;
  for (let t2 = 0; t2 < e2.length; ++t2)
    if (ft(e2[t2])) {
      if (r2) {
        const s2 = r2.split("://")[0];
        r2 = s2 + ":" + e2[t2].trim();
      }
    } else
      r2 = K(e2[t2]) ? e2[t2] : G(r2, e2[t2]);
  return Ct(r2);
}
async function S(e2, s2, o2, l2, n2) {
  let i2, c2, a2;
  if (f(n2), typeof o2 == "string") {
    const e3 = F(o2);
    d(e3), a2 = await U$1(e3, __spreadProps(__spreadValues({}, n2), { responseType: "json", query: __spreadValues({ f: "json" }, n2 == null ? void 0 : n2.query) })), a2.ssl && (i2 && (i2 = i2.replace(/^http:/i, "https:")), c2 && (c2 = c2.replace(/^http:/i, "https:"))), i2 = e3, c2 = e3;
  } else
    a2 = { data: o2 }, i2 = o2.jsonUrl || null, c2 = l2;
  const f$1 = a2.data;
  if (U(f$1))
    return e2.styleUrl = i2 || null, x(e2, f$1, c2, n2);
  if (w(f$1))
    return e2.sourceUrl ? g(e2, f$1, c2, false, s2, n2) : (e2.sourceUrl = i2 || null, g(e2, f$1, c2, true, s2, n2));
  throw new Error("You must specify the URL or the JSON for a service or for a style.");
}
function U(e2) {
  return !!e2.sources;
}
function w(e2) {
  return !U(e2);
}
async function x(e2, r2, t2, s2) {
  const o2 = t2 ? Ot(t2) : C();
  e2.styleBase = o2, e2.style = r2, e2.styleUrl && d(e2.styleUrl), r2["sprite-format"] && r2["sprite-format"].toLowerCase() === "webp" && (e2.spriteFormat = "webp");
  const l2 = [];
  if (r2.sources && r2.sources.esri) {
    const t3 = r2.sources.esri;
    t3.url ? await S(e2, "esri", h(o2, t3.url), void 0, s2) : l2.push(S(e2, "esri", t3, o2, s2));
  }
  for (const n2 of Object.keys(r2.sources))
    n2 !== "esri" && r2.sources[n2].type === "vector" && (r2.sources[n2].url ? l2.push(S(e2, n2, h(o2, r2.sources[n2].url), void 0, s2)) : r2.sources[n2].tiles && l2.push(S(e2, n2, r2.sources[n2], o2, s2)));
  await Promise.all(l2);
}
async function g(e2, r2, t2, s2, o2, l2) {
  const n2 = t2 ? Ct(t2) + "/" : C(), u = v(r2, n2), c2 = new h$1(o2, Bt(n2, l2 == null ? void 0 : l2.query), u);
  if (!s2 && e2.primarySourceName in e2.sourceNameToSource) {
    const r3 = e2.sourceNameToSource[e2.primarySourceName];
    if (!r3.isCompatibleWith(c2))
      return;
    c2.fullExtent != null && (r3.fullExtent != null ? r3.fullExtent.union(c2.fullExtent) : r3.fullExtent = c2.fullExtent.clone()), r3.tileInfo.lods.length < c2.tileInfo.lods.length && (r3.tileInfo = c2.tileInfo);
  }
  if (s2 ? (e2.sourceBase = n2, e2.source = r2, e2.validatedSource = u, e2.primarySourceName = o2, e2.sourceUrl && d(e2.sourceUrl)) : d(n2), e2.sourceNameToSource[o2] = c2, !e2.style) {
    if (r2.defaultStyles == null)
      throw new Error();
    return typeof r2.defaultStyles == "string" ? S(e2, "", h(n2, r2.defaultStyles, "root.json"), void 0, l2) : S(e2, "", r2.defaultStyles, h(n2, "root.json"), l2);
  }
}
function v(e2, r2) {
  if (e2.hasOwnProperty("tileInfo"))
    return e2;
  const t2 = { xmin: -20037507067161843e-9, ymin: -20037507067161843e-9, xmax: 20037507067161843e-9, ymax: 20037507067161843e-9, spatialReference: { wkid: 102100 } }, s2 = 512;
  let o2 = 78271.51696400007, l2 = 2958287637957775e-7;
  const n2 = [], i2 = e2.hasOwnProperty("minzoom") ? +e2.minzoom : 0, u = e2.hasOwnProperty("maxzoom") ? +e2.maxzoom : 22;
  for (let c2 = 0; c2 <= u; c2++)
    c2 >= i2 && n2.push({ level: c2, scale: l2, resolution: o2 }), o2 /= 2, l2 /= 2;
  for (const c2 of e2.tiles)
    d(h(r2, c2));
  return { capabilities: "TilesOnly", initialExtent: t2, fullExtent: t2, minScale: 0, maxScale: 0, tiles: e2.tiles, tileInfo: { rows: s2, cols: s2, dpi: 96, format: "pbf", origin: { x: -20037508342787e-6, y: 20037508342787e-6 }, lods: n2, spatialReference: { wkid: 102100 } } };
}
const e = 1e-6;
function n(l2, n2) {
  if (l2 === n2)
    return true;
  if (l2 == null && n2 != null)
    return false;
  if (l2 != null && n2 == null)
    return false;
  if (l2 == null || n2 == null)
    return false;
  if (!l2.spatialReference.equals(n2.spatialReference) || l2.dpi !== n2.dpi)
    return false;
  const s2 = l2.origin, r2 = n2.origin;
  if (Math.abs(s2.x - r2.x) >= e || Math.abs(s2.y - r2.y) >= e)
    return false;
  let o2, t2;
  l2.lods[0].scale > n2.lods[0].scale ? (o2 = l2, t2 = n2) : (t2 = l2, o2 = n2);
  for (let i2 = o2.lods[0].scale; i2 >= t2.lods[t2.lods.length - 1].scale - e; i2 /= 2)
    if (Math.abs(i2 - t2.lods[0].scale) < e)
      return true;
  return false;
}
function s(e2, n2) {
  if (e2 === n2)
    return e2;
  if (e2 == null && n2 != null)
    return n2;
  if (e2 != null && n2 == null)
    return e2;
  if (e2 == null || n2 == null)
    return null;
  const s2 = e2.size[0], r2 = e2.format, o2 = e2.dpi, t2 = { x: e2.origin.x, y: e2.origin.y }, i2 = e2.spatialReference.toJSON(), u = e2.lods[0].scale > n2.lods[0].scale ? e2.lods[0] : n2.lods[0], a2 = e2.lods[e2.lods.length - 1].scale <= n2.lods[n2.lods.length - 1].scale ? e2.lods[e2.lods.length - 1] : n2.lods[n2.lods.length - 1], f2 = u.scale, d2 = u.resolution, c2 = a2.scale, p2 = [];
  let g2 = f2, h2 = d2, x2 = 0;
  for (; g2 > c2; )
    p2.push({ level: x2, resolution: h2, scale: g2 }), x2++, g2 /= 2, h2 /= 2;
  return new j$2({ size: [s2, s2], dpi: o2, format: r2 || "pbf", origin: t2, lods: p2, spatialReference: i2 });
}
let B = class extends n$4(t(s$4(p(c(v$1(o$3(i(O(b))))))))) {
  constructor(...e2) {
    super(...e2), this._spriteSourceMap = new Map(), this.currentStyleInfo = null, this.style = null, this.isReference = null, this.operationalLayerType = "VectorTileLayer", this.type = "vector-tile", this.url = null, this.showCollisionBoxes = "none", this.path = null;
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  destroy() {
    if (this.sourceNameToSource)
      for (const e2 of Object.values(this.sourceNameToSource))
        e2 == null ? void 0 : e2.destroy();
    this._spriteSourceMap.clear();
  }
  async prefetchResources(e2) {
    await this.loadSpriteSource(globalThis.devicePixelRatio || 1, e2);
  }
  load(e2) {
    const r2 = this.loadFromPortal({ supportedTypes: ["Vector Tile Service"], supportsData: false }, e2).catch(w$2).then(async () => {
      if (!this.portalItem || !this.portalItem.id)
        return;
      const r3 = `${this.portalItem.itemUrl}/resources/styles/root.json`;
      (await U$1(r3, __spreadProps(__spreadValues({}, e2), { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }) }))).data && this.read({ url: r3 }, e$2(this.portalItem));
    }).catch(w$2).then(() => this._loadStyle(e2));
    return this.addResolvingPromise(r2), Promise.resolve(this);
  }
  get attributionDataUrl() {
    const e2 = this.currentStyleInfo, t2 = e2 && e2.serviceUrl && j(e2.serviceUrl);
    if (!t2)
      return null;
    const r2 = this._getDefaultAttribution(t2.path);
    return r2 ? Bt(r2, __spreadProps(__spreadValues({}, this.customParameters), { token: this.apiKey })) : null;
  }
  get capabilities() {
    const e2 = this.primarySource;
    return e2 ? e2.capabilities : { operations: { supportsExportTiles: false, supportsTileMap: false }, exportTiles: null };
  }
  get fullExtent() {
    var _a;
    return ((_a = this.primarySource) == null ? void 0 : _a.fullExtent) || null;
  }
  get parsedUrl() {
    return this.serviceUrl ? j(this.serviceUrl) : null;
  }
  get serviceUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.serviceUrl || null;
  }
  get spatialReference() {
    return this.tileInfo && this.tileInfo.spatialReference || null;
  }
  get styleUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.styleUrl || null;
  }
  writeStyleUrl(e2, t2) {
    e2 && ft(e2) && (e2 = `https:${e2}`);
    const r2 = e$3(a$1(e2));
    t2.styleUrl = y$2(e2, r2);
  }
  get tileInfo() {
    var _a;
    const e2 = [];
    for (const r2 in this.sourceNameToSource)
      e2.push(this.sourceNameToSource[r2]);
    let t2 = ((_a = this.primarySource) == null ? void 0 : _a.tileInfo) || new j$2();
    if (e2.length > 1)
      for (let r2 = 0; r2 < e2.length; r2++)
        n(t2, e2[r2].tileInfo) && (t2 = s(t2, e2[r2].tileInfo));
    return t2;
  }
  readVersion(e2, t2) {
    return t2.version ? parseFloat(t2.version) : parseFloat(t2.currentVersion);
  }
  async loadSpriteSource(e2 = 1, t2) {
    var _a, _b;
    if (!this._spriteSourceMap.has(e2)) {
      const r2 = l$1("2d").maxTextureSize, o2 = ((_a = this.currentStyleInfo) == null ? void 0 : _a.spriteUrl) ? Bt(this.currentStyleInfo.spriteUrl, __spreadProps(__spreadValues({}, this.customParameters), { token: this.apiKey })) : null, s2 = new n$2({ type: "url", spriteUrl: o2, pixelRatio: e2, spriteFormat: (_b = this.currentStyleInfo) == null ? void 0 : _b.spriteFormat }, r2);
      await s2.load(t2), this._spriteSourceMap.set(e2, s2);
    }
    return this._spriteSourceMap.get(e2);
  }
  async setSpriteSource(e2, t2) {
    if (!e2)
      return null;
    const r2 = l$1("2d").maxTextureSize, o2 = e2.spriteUrl, s2 = o2 ? Bt(o2, __spreadProps(__spreadValues({}, this.customParameters), { token: this.apiKey })) : null;
    if (!s2 && e2.type === "url")
      return null;
    const i2 = new n$2(e2, r2);
    try {
      await i2.load(t2);
      const r3 = e2.pixelRatio || 1;
      return this._spriteSourceMap.clear(), this._spriteSourceMap.set(r3, i2), s2 && this.currentStyleInfo && (this.currentStyleInfo.spriteUrl = s2), this.emit("spriteSource-change", { spriteSource: i2 }), i2;
    } catch (l2) {
      w$2(l2);
    }
    return null;
  }
  async loadStyle(e2, t2) {
    var _a;
    const o2 = e2 || this.style || this.url;
    return this._loadingTask && typeof o2 == "string" && this.url === o2 || ((_a = this._loadingTask) == null ? void 0 : _a.abort(), this._loadingTask = j$3((e3) => (this._spriteSourceMap.clear(), this._getSourceAndStyle(o2, { signal: e3 })), t2)), this._loadingTask.promise;
  }
  getStyleLayerId(e2) {
    return this.styleRepository.getStyleLayerId(e2);
  }
  getStyleLayerIndex(e2) {
    return this.styleRepository.getStyleLayerIndex(e2);
  }
  getPaintProperties(e2) {
    return y$1(this.styleRepository.getPaintProperties(e2));
  }
  setPaintProperties(e2, t2) {
    const r2 = this.styleRepository.isPainterDataDriven(e2);
    this.styleRepository.setPaintProperties(e2, t2);
    const o2 = this.styleRepository.isPainterDataDriven(e2);
    this.emit("paint-change", { layer: e2, paint: t2, isDataDriven: r2 || o2 });
  }
  getStyleLayer(e2) {
    return y$1(this.styleRepository.getStyleLayer(e2));
  }
  setStyleLayer(e2, t2) {
    this.styleRepository.setStyleLayer(e2, t2), this.emit("style-layer-change", { layer: e2, index: t2 });
  }
  deleteStyleLayer(e2) {
    this.styleRepository.deleteStyleLayer(e2), this.emit("delete-style-layer", { layer: e2 });
  }
  getLayoutProperties(e2) {
    return y$1(this.styleRepository.getLayoutProperties(e2));
  }
  setLayoutProperties(e2, t2) {
    this.styleRepository.setLayoutProperties(e2, t2), this.emit("layout-change", { layer: e2, layout: t2 });
  }
  setStyleLayerVisibility(e2, t2) {
    this.styleRepository.setStyleLayerVisibility(e2, t2), this.emit("style-layer-visibility-change", { layer: e2, visibility: t2 });
  }
  getStyleLayerVisibility(e2) {
    return this.styleRepository.getStyleLayerVisibility(e2);
  }
  write(e2, t2) {
    return (t2 == null ? void 0 : t2.origin) && !this.styleUrl ? (t2.messages && t2.messages.push(new s$2("vectortilelayer:unsupported", `VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`, { layer: this })), null) : super.write(e2, t2);
  }
  getTileUrl(e2, t2, r2) {
    return null;
  }
  async _getSourceAndStyle(e2, t2) {
    if (!e2)
      throw new Error("invalid style!");
    const r2 = await m(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadProps(__spreadValues({}, this.customParameters), { token: this.apiKey }) }));
    if (r2.spriteFormat === "webp") {
      await o$1("lossy") || (r2.spriteFormat = "png");
    }
    this._set("currentStyleInfo", __spreadValues({}, r2)), typeof e2 == "string" ? (this.url = e2, this.style = null) : (this.url = null, this.style = e2), this._set("sourceNameToSource", r2.sourceNameToSource), this._set("primarySource", r2.sourceNameToSource[r2.primarySourceName]), this._set("styleRepository", new l$2(r2.style)), this.read(r2.layerDefinition, { origin: "service" }), this.emit("load-style");
  }
  _getDefaultAttribution(e2) {
    const t2 = e2.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i), r2 = ["OpenStreetMap_v2", "OpenStreetMap_Daylight_v2", "OpenStreetMap_Export_v2", "OpenStreetMap_FTS_v2", "OpenStreetMap_GCS_v2", "World_Basemap", "World_Basemap_v2", "World_Basemap_Export_v2", "World_Basemap_GCS_v2", "World_Basemap_WGS84", "World_Contours_v2"];
    if (!t2)
      return;
    const o2 = t2[2] && t2[2].toLowerCase();
    if (!o2)
      return;
    const s2 = t2[1] || "";
    for (const i2 of r2)
      if (i2.toLowerCase().includes(o2))
        return F(`//static.arcgis.com/attribution/Vector${s2}/${i2}`);
  }
  async _loadStyle(e2) {
    var _a, _b;
    return (_b = (_a = this._loadingTask) == null ? void 0 : _a.promise) != null ? _b : this.loadStyle(null, e2);
  }
};
e$4([y$3({ readOnly: true })], B.prototype, "attributionDataUrl", null), e$4([y$3({ type: ["show", "hide"] })], B.prototype, "listMode", void 0), e$4([y$3({ json: { read: true, write: true } })], B.prototype, "blendMode", void 0), e$4([y$3({ readOnly: true, json: { read: false } })], B.prototype, "capabilities", null), e$4([y$3({ readOnly: true })], B.prototype, "currentStyleInfo", void 0), e$4([y$3({ json: { read: false }, readOnly: true, type: w$1 })], B.prototype, "fullExtent", null), e$4([y$3()], B.prototype, "style", void 0), e$4([y$3({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], B.prototype, "isReference", void 0), e$4([y$3({ type: ["VectorTileLayer"] })], B.prototype, "operationalLayerType", void 0), e$4([y$3({ readOnly: true })], B.prototype, "parsedUrl", null), e$4([y$3({ readOnly: true })], B.prototype, "serviceUrl", null), e$4([y$3({ type: k, readOnly: true })], B.prototype, "spatialReference", null), e$4([y$3({ readOnly: true })], B.prototype, "styleRepository", void 0), e$4([y$3({ readOnly: true })], B.prototype, "sourceNameToSource", void 0), e$4([y$3({ readOnly: true })], B.prototype, "primarySource", void 0), e$4([y$3({ type: String, readOnly: true, json: { write: { ignoreOrigin: true }, origins: { "web-document": { write: { ignoreOrigin: true, isRequired: true } } } } })], B.prototype, "styleUrl", null), e$4([r$2(["portal-item", "web-document"], "styleUrl")], B.prototype, "writeStyleUrl", null), e$4([y$3({ json: { read: false, origins: { service: { read: false } } }, readOnly: true, type: j$2 })], B.prototype, "tileInfo", null), e$4([y$3({ json: { read: false }, readOnly: true, value: "vector-tile" })], B.prototype, "type", void 0), e$4([y$3({ json: { origins: { "web-document": { read: { source: "styleUrl" } }, "portal-item": { read: { source: "url" } } }, write: false, read: false } })], B.prototype, "url", void 0), e$4([y$3({ readOnly: true })], B.prototype, "version", void 0), e$4([o$4("version", ["version", "currentVersion"])], B.prototype, "readVersion", null), e$4([y$3({ type: String })], B.prototype, "showCollisionBoxes", void 0), e$4([y$3({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], B.prototype, "path", void 0), B = e$4([n$5("esri.layers.VectorTileLayer")], B);
const E = B;
export { E as default };
