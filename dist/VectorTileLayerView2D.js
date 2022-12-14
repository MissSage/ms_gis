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
import { U, u as n$6, dv as Bt, cH as u$3, q as b$1, bE as e$2, m as j, cs as E$1, bV as e$3, cI as l$5, t as t$5, a as r$4, k as e$4, aU as r$6, M, J as h$2, I as f$1, F as e$6, dX as r$7, N as n$8, D as D$2, ap as u$4, ct as h$3, d3 as j$1, cC as g, R as l$8, S as h$4, bW as m$2, dY as a$6, bB as E$4, s as s$3, cu as y$1, aX as y$2, $ as e$7, a0 as y$3, a1 as n$9 } from "./index.js";
import { I, L as L$1 } from "./enums3.js";
import { t as t$4 } from "./Rect.js";
import { P, G, D as D$1, F, O, I as I$2, R, C, E as E$3 } from "./enums.js";
import { E } from "./Texture.js";
import { e as e$1 } from "./rasterizingUtils.js";
import { E as E$2, a as a$4 } from "./VertexArrayObject.js";
import { e as e$5, t as t$6, c as c$3 } from "./config.js";
import { r as r$5, i as i$5 } from "./TileContainer.js";
import { n as n$7, l as l$6, r as r$8, i as i$4, a as a$5 } from "./StyleDefinition.js";
import { I as I$1 } from "./Utils2.js";
import { l as l$7 } from "./StyleRepository.js";
import { y, u as u$5 } from "./LayerView.js";
import "./ProgramTemplate.js";
import { r as r$9 } from "./utils.js";
import { t as t$7 } from "./VertexElementDescriptor.js";
import "vue";
import "./floatRGBA.js";
import "./WGLContainer.js";
import "./pixelUtils.js";
import "./enums2.js";
import "./MaterialKey.js";
import "./GeometryUtils2.js";
import "./earcut.js";
import "./colorUtils.js";
import "./GeometryUtils.js";
import "./Geometry.js";
class e {
  constructor(e2, t2) {
    this._width = 0, this._height = 0, this._free = [], this._width = e2, this._height = t2, this._free.push(new t$4(0, 0, e2, t2));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e2, t2) {
    if (e2 > this._width || t2 > this._height)
      return new t$4();
    let i2 = null, s2 = -1;
    for (let h2 = 0; h2 < this._free.length; ++h2) {
      const w = this._free[h2];
      e2 <= w.width && t2 <= w.height && (i2 === null || w.y <= i2.y && w.x <= i2.x) && (i2 = w, s2 = h2);
    }
    return i2 === null ? new t$4() : (this._free.splice(s2, 1), i2.width < i2.height ? (i2.width > e2 && this._free.push(new t$4(i2.x + e2, i2.y, i2.width - e2, t2)), i2.height > t2 && this._free.push(new t$4(i2.x, i2.y + t2, i2.width, i2.height - t2))) : (i2.width > e2 && this._free.push(new t$4(i2.x + e2, i2.y, i2.width - e2, i2.height)), i2.height > t2 && this._free.push(new t$4(i2.x, i2.y + t2, e2, i2.height - t2))), new t$4(i2.x, i2.y, e2, t2));
  }
  release(h2) {
    for (let e2 = 0; e2 < this._free.length; ++e2) {
      const t2 = this._free[e2];
      if (t2.y === h2.y && t2.height === h2.height && t2.x + t2.width === h2.x)
        t2.width += h2.width;
      else if (t2.x === h2.x && t2.width === h2.width && t2.y + t2.height === h2.y)
        t2.height += h2.height;
      else if (h2.y === t2.y && h2.height === t2.height && h2.x + h2.width === t2.x)
        t2.x = h2.x, t2.width += h2.width;
      else {
        if (h2.x !== t2.x || h2.width !== t2.width || h2.y + h2.height !== t2.y)
          continue;
        t2.y = h2.y, t2.height += h2.height;
      }
      this._free.splice(e2, 1), this.release(h2);
    }
    this._free.push(h2);
  }
}
class r$3 {
  constructor(e$12, i2, s2) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = new Map(), this.width = e$12, this.height = i2, this._glyphSource = s2, this._binPack = new e(e$12 - 4, i2 - 4), this._glyphData.push(new Uint8Array(e$12 * i2)), this._dirties.push(true), this._textures.push(void 0);
  }
  getGlyphItems(i2, s2) {
    const h2 = [], r2 = this._glyphSource, n2 = new Set(), a2 = 1 / 256;
    for (const t2 of s2) {
      const e2 = Math.floor(t2 * a2);
      n2.add(e2);
    }
    const o2 = [];
    return n2.forEach((t2) => {
      if (t2 <= 256) {
        const e2 = i2 + t2;
        if (this._rangePromises.has(e2))
          o2.push(this._rangePromises.get(e2));
        else {
          const s3 = r2.getRange(i2, t2).then(() => {
            this._rangePromises.delete(e2);
          }, () => {
            this._rangePromises.delete(e2);
          });
          this._rangePromises.set(e2, s3), o2.push(s3);
        }
      }
    }), Promise.all(o2).then(() => {
      let n3 = this._glyphIndex[i2];
      n3 || (n3 = {}, this._glyphIndex[i2] = n3);
      for (const a3 of s2) {
        const s3 = n3[a3];
        if (s3) {
          h2[a3] = { sdf: true, rect: s3.rect, metrics: s3.metrics, page: s3.page, code: a3 };
          continue;
        }
        const o3 = r2.getGlyph(i2, a3);
        if (!o3 || !o3.metrics)
          continue;
        const l2 = o3.metrics;
        let c2;
        if (l2.width === 0)
          c2 = new t$4(0, 0, 0, 0);
        else {
          const e$12 = 3, i3 = l2.width + 2 * e$12, s4 = l2.height + 2 * e$12;
          let h3 = i3 % 4 ? 4 - i3 % 4 : 4, r3 = s4 % 4 ? 4 - s4 % 4 : 4;
          h3 === 1 && (h3 = 5), r3 === 1 && (r3 = 5), c2 = this._binPack.allocate(i3 + h3, s4 + r3), c2.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(void 0), this._binPack = new e(this.width - 4, this.height - 4), c2 = this._binPack.allocate(i3 + h3, s4 + r3));
          const n4 = this._glyphData[this._currentPage], a4 = o3.bitmap;
          let g2, _2;
          if (a4)
            for (let t2 = 0; t2 < s4; t2++) {
              g2 = i3 * t2, _2 = this.width * (c2.y + t2 + 1) + c2.x;
              for (let t3 = 0; t3 < i3; t3++)
                n4[_2 + t3 + 1] = a4[g2 + t3];
            }
        }
        n3[a3] = { rect: c2, metrics: l2, tileIDs: null, page: this._currentPage }, h2[a3] = { sdf: true, rect: c2, metrics: l2, page: this._currentPage, code: a3 }, this._dirties[this._currentPage] = true;
      }
      return h2;
    });
  }
  removeGlyphs(t2) {
    for (const e2 in this._glyphIndex) {
      const i2 = this._glyphIndex[e2];
      if (!i2)
        continue;
      let s2;
      for (const e3 in i2)
        if (s2 = i2[e3], s2.tileIDs.delete(t2), s2.tileIDs.size === 0) {
          const t3 = this._glyphData[s2.page], h2 = s2.rect;
          let r2, n2;
          for (let e4 = 0; e4 < h2.height; e4++)
            for (r2 = this.width * (h2.y + e4) + h2.x, n2 = 0; n2 < h2.width; n2++)
              t3[r2 + n2] = 0;
          delete i2[e3], this._dirties[s2.page] = true;
        }
    }
  }
  bind(t2, e2, r2, n2 = 0) {
    this._textures[r2] || (this._textures[r2] = new E(t2, { pixelFormat: P.ALPHA, dataType: G.UNSIGNED_BYTE, width: this.width, height: this.height }, new Uint8Array(this.width * this.height)));
    const a2 = this._textures[r2];
    a2.setSamplingMode(e2), this._dirties[r2] && a2.setData(this._glyphData[r2]), t2.bindTexture(a2, n2), this._dirties[r2] = false;
  }
  dispose() {
    this._binPack = null;
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0;
  }
}
class s$2 {
  constructor(e2) {
    if (this._metrics = [], this._bitmaps = [], e2)
      for (; e2.next(); )
        switch (e2.tag()) {
          case 1: {
            const t2 = e2.getMessage();
            for (; t2.next(); )
              switch (t2.tag()) {
                case 3: {
                  const e3 = t2.getMessage();
                  let s2, a2, r2, n2, i2, c2, g2;
                  for (; e3.next(); )
                    switch (e3.tag()) {
                      case 1:
                        s2 = e3.getUInt32();
                        break;
                      case 2:
                        a2 = e3.getBytes();
                        break;
                      case 3:
                        r2 = e3.getUInt32();
                        break;
                      case 4:
                        n2 = e3.getUInt32();
                        break;
                      case 5:
                        i2 = e3.getSInt32();
                        break;
                      case 6:
                        c2 = e3.getSInt32();
                        break;
                      case 7:
                        g2 = e3.getUInt32();
                        break;
                      default:
                        e3.skip();
                    }
                  e3.release(), s2 && (this._metrics[s2] = { width: r2, height: n2, left: i2, top: c2, advance: g2 }, this._bitmaps[s2] = a2);
                  break;
                }
                default:
                  t2.skip();
              }
            t2.release();
            break;
          }
          default:
            e2.skip();
        }
  }
  getMetrics(e2) {
    return this._metrics[e2];
  }
  getBitmap(e2) {
    return this._bitmaps[e2];
  }
}
class a$3 {
  constructor() {
    this._ranges = [];
  }
  getRange(e2) {
    return this._ranges[e2];
  }
  addRange(e2, t2) {
    this._ranges[e2] = t2;
  }
}
class r$2 {
  constructor(e2) {
    this._glyphInfo = {}, this._baseURL = e2;
  }
  getRange(a2, r2) {
    const n2 = this._getFontStack(a2);
    if (n2.getRange(r2))
      return Promise.resolve();
    const i2 = 256 * r2, c2 = i2 + 255;
    if (this._baseURL) {
      const g2 = this._baseURL.replace("{fontstack}", a2).replace("{range}", i2 + "-" + c2);
      return U(g2, { responseType: "array-buffer" }).then((e2) => {
        n2.addRange(r2, new s$2(new n$6(new Uint8Array(e2.data), new DataView(e2.data))));
      }).catch(() => {
        n2.addRange(r2, new s$2());
      });
    }
    return n2.addRange(r2, new s$2()), Promise.resolve();
  }
  getGlyph(e2, t2) {
    const s2 = this._getFontStack(e2);
    if (!s2)
      return;
    const a2 = Math.floor(t2 / 256);
    if (a2 > 256)
      return;
    const r2 = s2.getRange(a2);
    return r2 ? { metrics: r2.getMetrics(t2), bitmap: r2.getBitmap(t2) } : void 0;
  }
  _getFontStack(e2) {
    let t2 = this._glyphInfo[e2];
    return t2 || (t2 = this._glyphInfo[e2] = new a$3()), t2;
  }
}
const o$1 = "dasharray-";
class n$5 {
  constructor(t2, e$12, s2 = 0) {
    this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, (t2 <= 0 || e$12 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t2, this._pageHeight = e$12, s2 > 0 && (this._maxItemSize = s2), this._binPack = new e(t2 - 4, e$12 - 4);
  }
  dispose() {
    this._binPack = null, this._mosaicRects = {};
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0;
  }
  getWidth(t2) {
    return t2 >= this._size.length ? -1 : this._size[t2][0];
  }
  getHeight(t2) {
    return t2 >= this._size.length ? -1 : this._size[t2][1];
  }
  getPageSize(t2) {
    return t2 >= this._size.length ? null : this._size[t2];
  }
  setSpriteSource(t2) {
    if (this.dispose(), this.pixelRatio = t2.devicePixelRatio, this._mosaicsData.length === 0) {
      this._binPack = new e(this._pageWidth - 4, this._pageHeight - 4);
      const t3 = Math.floor(this._pageWidth), e$12 = Math.floor(this._pageHeight), s2 = new Uint32Array(t3 * e$12);
      this._mosaicsData[0] = s2, this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
    }
    this._sprites = t2;
  }
  getSpriteItem(t2, i2 = false) {
    let e2, s2, h2 = this._mosaicRects[t2];
    if (h2)
      return h2;
    if (!this._sprites || this._sprites.loadStatus !== "loaded")
      return null;
    if (t2 && t2.startsWith(o$1) ? ([e2, s2] = this._rasterizeDash(t2), i2 = true) : e2 = this._sprites.getSpriteInfo(t2), !e2 || !e2.width || !e2.height || e2.width < 0 || e2.height < 0)
      return null;
    const a2 = e2.width, r2 = e2.height, [n2, _2, g2] = this._allocateImage(a2, r2);
    return n2.width <= 0 ? null : (this._copy(n2, e2, _2, g2, i2, s2), h2 = { rect: n2, width: a2, height: r2, sdf: e2.sdf, simplePattern: false, pixelRatio: e2.pixelRatio, page: _2 }, this._mosaicRects[t2] = h2, h2);
  }
  getSpriteItems(t2) {
    const i2 = {};
    for (const e2 of t2)
      i2[e2.name] = this.getSpriteItem(e2.name, e2.repeat);
    return i2;
  }
  getMosaicItemPosition(t2, i2) {
    const e2 = this.getSpriteItem(t2, i2), s2 = e2 && e2.rect;
    if (!s2)
      return null;
    s2.width = e2.width, s2.height = e2.height;
    const h2 = e2.width, a2 = e2.height, r2 = 2;
    return { tl: [s2.x + r2, s2.y + r2], br: [s2.x + r2 + h2, s2.y + r2 + a2], page: e2.page };
  }
  bind(t2, i2, e2 = 0, o2 = 0) {
    if (e2 >= this._size.length || e2 >= this._mosaicsData.length)
      return;
    this._textures[e2] || (this._textures[e2] = new E(t2, { pixelFormat: P.RGBA, dataType: G.UNSIGNED_BYTE, wrapMode: D$1.CLAMP_TO_EDGE, width: this._size[e2][0], height: this._size[e2][1] }, new Uint8Array(this._mosaicsData[e2].buffer)));
    const n2 = this._textures[e2];
    n2.setSamplingMode(i2), this._dirties[e2] && n2.setData(new Uint8Array(this._mosaicsData[e2].buffer)), t2.bindTexture(n2, o2), this._dirties[e2] = false;
  }
  static _copyBits(t2, i2, e2, s2, h2, a2, r2, o2, n2, _2, g2) {
    let c2 = s2 * i2 + e2, l2 = o2 * a2 + r2;
    if (g2) {
      l2 -= a2;
      for (let r3 = -1; r3 <= _2; r3++, c2 = ((r3 + _2) % _2 + s2) * i2 + e2, l2 += a2)
        for (let i3 = -1; i3 <= n2; i3++)
          h2[l2 + i3] = t2[c2 + (i3 + n2) % n2];
    } else
      for (let p = 0; p < _2; p++) {
        for (let i3 = 0; i3 < n2; i3++)
          h2[l2 + i3] = t2[c2 + i3];
        c2 += i2, l2 += a2;
      }
  }
  _copy(t2, i2, e2, s2, h2, a2) {
    if (!this._sprites || this._sprites.loadStatus !== "loaded" || e2 >= this._mosaicsData.length)
      return;
    const r2 = new Uint32Array(a2 ? a2.buffer : this._sprites.image.buffer), o2 = this._mosaicsData[e2];
    o2 && r2 || console.error("Source or target images are uninitialized!");
    const _2 = 2, g2 = a2 ? i2.width : this._sprites.width;
    n$5._copyBits(r2, g2, i2.x, i2.y, o2, s2[0], t2.x + _2, t2.y + _2, i2.width, i2.height, h2), this._dirties[e2] = true;
  }
  _allocateImage(t2, s2) {
    t2 += 2, s2 += 2;
    const h2 = Math.max(t2, s2);
    if (this._maxItemSize && this._maxItemSize < h2) {
      const i2 = new t$4(0, 0, t2, s2);
      return this._mosaicsData.push(new Uint32Array(t2 * s2)), this._dirties.push(true), this._size.push([t2, s2]), this._textures.push(void 0), [i2, this._mosaicsData.length - 1, [t2, s2]];
    }
    let a2 = t2 % 4 ? 4 - t2 % 4 : 4, r2 = s2 % 4 ? 4 - s2 % 4 : 4;
    a2 === 1 && (a2 = 5), r2 === 1 && (r2 = 5);
    const o2 = this._binPack.allocate(t2 + a2, s2 + r2);
    return o2.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new e(this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(t2, s2)) : [o2, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _rasterizeDash(i2) {
    const e2 = /\[(.*?)\]/, s2 = i2.match(e2);
    if (!s2)
      return null;
    const h2 = s2[1].split(",").map(Number), a2 = i2.slice(i2.lastIndexOf("-") + 1), [r2, o2, n2] = e$1(h2, a2);
    return [{ x: 0, y: 0, width: o2, height: n2, sdf: true, pixelRatio: 1 }, new Uint8Array(r2.buffer)];
  }
}
class n$4 {
  constructor(e2, t2, s2) {
    this._layer = e2, this._styleRepository = t2, this.devicePixelRatio = s2, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null;
  }
  destroy() {
    this._connection && (this._connection.close(), this._connection = null), this._styleRepository = null, this._layer = null, this._spriteMosaic && (this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic = null);
  }
  get spriteMosaic() {
    return this._spriteSourcePromise.then(() => this._spriteMosaic);
  }
  get glyphMosaic() {
    return this._glyphMosaic;
  }
  async start(t2) {
    this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, t2), this._spriteSourcePromise.then((e2) => {
      this._spriteMosaic = new n$5(1024, 1024, 250), this._spriteMosaic.setSpriteSource(e2);
    });
    const s2 = new r$2(this._layer.currentStyleInfo.glyphsUrl ? Bt(this._layer.currentStyleInfo.glyphsUrl, __spreadProps(__spreadValues({}, this._layer.customParameters), { token: this._layer.apiKey })) : null);
    this._glyphMosaic = new r$3(1024, 1024, s2), this._broadcastPromise = u$3("WorkerTileHandler", { client: this, schedule: t2.schedule, signal: t2.signal }).then((s3) => {
      if (this._connection = s3, this._layer && !this._connection.closed) {
        const r2 = s3.broadcast("setStyle", this._layer.currentStyleInfo.style, t2);
        Promise.all(r2).catch((t3) => b$1(t3));
      }
    });
  }
  async updateStyle(e2) {
    return await this._broadcastPromise, this._broadcastPromise = Promise.all(this._connection.broadcast("updateStyle", e2)), this._broadcastPromise;
  }
  setSpriteSource(e2) {
    const t2 = new n$5(1024, 1024, 250);
    return t2.setSpriteSource(e2), this._spriteMosaic = t2, this._spriteSourcePromise = Promise.resolve(e2), t2;
  }
  async setStyle(e2, t2) {
    await this._broadcastPromise, this._styleRepository = e2, this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, null), this._spriteSourcePromise.then((e3) => {
      this._spriteMosaic = new n$5(1024, 1024, 250), this._spriteMosaic.setSpriteSource(e3);
    });
    const s2 = new r$2(this._layer.currentStyleInfo.glyphsUrl ? Bt(this._layer.currentStyleInfo.glyphsUrl, __spreadProps(__spreadValues({}, this._layer.customParameters), { token: this._layer.apiKey })) : null);
    return this._glyphMosaic = new r$3(1024, 1024, s2), this._broadcastPromise = Promise.all(this._connection.broadcast("setStyle", t2)), this._broadcastPromise;
  }
  fetchTileData(e2, t2) {
    return this._getRefKeys(e2, t2).then((e3) => {
      const s2 = this._layer.sourceNameToSource, r2 = [];
      for (const t3 in s2)
        r2.push(t3);
      return this._getSourcesData(r2, e3, t2);
    });
  }
  parseTileData(e2, t2) {
    const s2 = e2 && e2.data;
    if (!s2)
      return Promise.resolve(null);
    const { sourceName2DataAndRefKey: r2, transferList: i2 } = s2;
    return Object.keys(r2).length === 0 ? Promise.resolve(null) : this._broadcastPromise.then(() => this._connection.invoke("createTileAndParse", { key: e2.key.id, sourceName2DataAndRefKey: r2, styleLayerUIDs: e2.styleLayerUIDs }, __spreadProps(__spreadValues({}, t2), { transferList: i2 })));
  }
  async getSprites(e2) {
    return await this._spriteSourcePromise, this._spriteMosaic.getSpriteItems(e2);
  }
  getGlyphs(e2) {
    return this._glyphMosaic.getGlyphItems(e2.font, e2.codePoints);
  }
  async _getTilePayload(e2, s2, r2) {
    const i2 = e$2.pool.acquire(e2.id), o2 = this._layer.sourceNameToSource[s2], { level: a2, row: l2, col: n2 } = i2;
    e$2.pool.release(i2);
    try {
      return { protobuff: await o2.requestTile(a2, l2, n2, r2), sourceName: s2 };
    } catch (h2) {
      if (j(h2))
        throw h2;
      return { protobuff: null, sourceName: s2 };
    }
  }
  _getRefKeys(e2, t2) {
    const r2 = this._layer.sourceNameToSource, i2 = new Array();
    for (const s2 in r2) {
      const o2 = r2[s2].getRefKey(e2, t2);
      i2.push(o2);
    }
    return E$1(i2);
  }
  _getSourcesData(e2, t2, r2) {
    const i2 = [];
    for (let s2 = 0; s2 < t2.length; s2++)
      if (t2[s2].value == null || e2[s2] == null)
        i2.push(null);
      else {
        const o2 = this._getTilePayload(t2[s2].value, e2[s2], r2);
        i2.push(o2);
      }
    return E$1(i2).then((e3) => {
      const s2 = {}, r3 = [];
      for (let i3 = 0; i3 < e3.length; i3++)
        if (e3[i3].value && e3[i3].value && e3[i3].value.protobuff && e3[i3].value.protobuff.byteLength > 0) {
          const o2 = t2[i3].value.id;
          s2[e3[i3].value.sourceName] = { refKey: o2, protobuff: e3[i3].value.protobuff }, r3.push(e3[i3].value.protobuff);
        }
      return { sourceName2DataAndRefKey: s2, transferList: r3 };
    });
  }
}
const r$1 = 512, o = 1e-6, n$3 = (e2, i2) => e2 + 1 / (1 << 2 * i2);
class a$2 {
  constructor(i2, t2) {
    this._tiles = new Map(), this._tileCache = new e$3(40, (e2) => e2.dispose()), this._viewSize = [0, 0], this._visibleTiles = new Map(), this.acquireTile = i2.acquireTile, this.releaseTile = i2.releaseTile, this.tileInfoView = i2.tileInfoView, this._container = t2;
  }
  destroy() {
    for (const [e2, i2] of this._tiles)
      i2.dispose();
    this._tiles = null, this._tileCache.clear(), this._tileCache = null;
  }
  update(e2) {
    this._updateCacheSize(e2);
    const i2 = this.tileInfoView, t2 = i2.getTileCoverage(e2.state, 0, "smallest"), { spans: r2, lodInfo: o2 } = t2, { level: n2 } = o2, a2 = this._tiles, c2 = new Set(), h2 = new Set();
    for (const { row: s2, colFrom: _2, colTo: f2 } of r2)
      for (let e3 = _2; e3 <= f2; e3++) {
        const i3 = e$2.getId(n2, s2, o2.normalizeCol(e3), o2.getWorldForColumn(e3)), t3 = this._getOrAcquireTile(i3);
        c2.add(i3), t3.processed() ? this._addToContainer(t3) : h2.add(new e$2(i3));
      }
    for (const [s2, l2] of a2)
      l2.isCoverage = c2.has(s2);
    for (const s2 of h2)
      this._findPlaceholdersForMissingTiles(s2, c2);
    let d2 = false;
    for (const [s2, l2] of a2)
      l2.neededForCoverage = c2.has(s2), l2.neededForCoverage || l2.isHoldingForFade && i2.intersects(t2, l2.key) && c2.add(s2), l2.isFading && (d2 = true);
    for (const [s2, l2] of this._tiles)
      c2.has(s2) || this._releaseTile(s2);
    return l$5.pool.release(t2), !d2;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  _findPlaceholdersForMissingTiles(e2, i2) {
    const t2 = [];
    for (const [l2, r2] of this._tiles)
      this._addPlaceholderChild(t2, r2, e2, i2);
    const s2 = t2.reduce(n$3, 0);
    Math.abs(1 - s2) < o || this._addPlaceholderParent(e2.id, i2);
  }
  _addPlaceholderChild(e2, i2, t2, s2) {
    i2.key.level <= t2.level || !i2.hasData() || h$1(t2, i2.key) && (this._addToContainer(i2), s2.add(i2.id), e2.push(i2.key.level - t2.level));
  }
  _addPlaceholderParent(e2, i2) {
    const t2 = this._tiles;
    let s2 = e2;
    for (; ; ) {
      if (s2 = c$2(s2), !s2 || i2.has(s2))
        return;
      const e3 = t2.get(s2);
      if (e3 && e3.hasData())
        return this._addToContainer(e3), void i2.add(e3.id);
    }
  }
  _getOrAcquireTile(e2) {
    let i2 = this._tiles.get(e2);
    return i2 || (i2 = this._tileCache.pop(e2), i2 || (i2 = this.acquireTile(new e$2(e2))), this._tiles.set(e2, i2), i2);
  }
  _releaseTile(e2) {
    const i2 = this._tiles.get(e2);
    this.releaseTile(i2), this._removeFromContainer(i2), this._tiles.delete(e2), i2.hasData() ? this._tileCache.put(e2, i2, 1) : i2.dispose();
  }
  _addToContainer(e2) {
    let s2;
    const l2 = [], r2 = this._container;
    if (r2.contains(e2))
      return;
    const o2 = this._visibleTiles;
    for (const [t2, n2] of o2)
      this._canConnectDirectly(e2, n2) && l2.push(n2), t$5(s2) && this._canConnectDirectly(n2, e2) && (s2 = n2);
    if (r$4(s2)) {
      for (const i2 of l2)
        s2.childrenTiles.delete(i2), e2.childrenTiles.add(i2), i2.parentTile = e2;
      s2.childrenTiles.add(e2), e2.parentTile = s2;
    } else
      for (const i2 of l2)
        e2.childrenTiles.add(i2), i2.parentTile = e2;
    o2.set(e2.id, e2), r2.addChild(e2);
  }
  _removeFromContainer(e2) {
    if (this._visibleTiles.delete(e2.id), this._container.removeChild(e2), r$4(e2.parentTile)) {
      e2.parentTile.childrenTiles.delete(e2);
      for (const i2 of e2.childrenTiles)
        r$4(e2.parentTile) && e2.parentTile.childrenTiles.add(i2);
    }
    for (const i2 of e2.childrenTiles)
      i2.parentTile = e2.parentTile;
    e2.parentTile = null, e2.childrenTiles.clear();
  }
  _canConnectDirectly(e2, i2) {
    const t2 = e2.key;
    let { level: s2, row: l2, col: r2, world: o2 } = i2.key;
    const n2 = this._visibleTiles;
    for (; s2 > 0; ) {
      if (s2--, l2 >>= 1, r2 >>= 1, t2.level === s2 && t2.row === l2 && t2.col === r2 && t2.world === o2)
        return true;
      if (n2.has(`${s2}/${l2}/${r2}/${o2}`))
        return false;
    }
    return false;
  }
  _updateCacheSize(e2) {
    const i2 = e2.state.size;
    if (i2[0] === this._viewSize[0] && i2[1] === this._viewSize[1])
      return;
    const t2 = Math.ceil(i2[0] / r$1) + 1, s2 = Math.ceil(i2[1] / r$1) + 1;
    this._viewSize[0] = i2[0], this._viewSize[1] = i2[1], this._tileCache.maxSize = 5 * t2 * s2;
  }
}
function c$2(e2) {
  const [i2, t2, s2, l2] = e2.split("/"), r2 = parseInt(i2, 10);
  return r2 === 0 ? null : `${r2 - 1}/${parseInt(t2, 10) >> 1}/${parseInt(s2, 10) >> 1}/${parseInt(l2, 10)}`;
}
function h$1(e2, i2) {
  const t2 = i2.level - e2.level;
  return e2.row === i2.row >> t2 && e2.col === i2.col >> t2 && e2.world === i2.world;
}
class t$3 {
  constructor(t2) {
    this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = t2;
  }
}
class s$1 {
  constructor() {
    this.tileSymbols = [], this.parts = [{ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }, { startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }], this.show = false;
  }
}
function l$4(t2, e2, s2, o2, r2, l2) {
  const i2 = s2 - r2;
  if (i2 >= 0)
    return (e2 >> i2) + (o2 - (l2 << i2)) * (t2 >> i2);
  const n2 = -i2;
  return e2 - (l2 - (o2 << n2)) * (t2 >> n2) << n2;
}
class i$3 {
  constructor(t2, e2, s2) {
    this._rows = Math.ceil(e2 / s2), this._columns = Math.ceil(t2 / s2), this._cellSize = s2, this.cells = new Array(this._rows);
    for (let o2 = 0; o2 < this._rows; o2++) {
      this.cells[o2] = new Array(this._columns);
      for (let t3 = 0; t3 < this._columns; t3++)
        this.cells[o2][t3] = [];
    }
  }
  getCell(t2, e2) {
    const s2 = Math.min(Math.max(Math.floor(e2 / this._cellSize), 0), this._rows - 1), o2 = Math.min(Math.max(Math.floor(t2 / this._cellSize), 0), this._columns - 1);
    return this.cells[s2] && this.cells[s2][o2] || null;
  }
  getCellSpan(t2, e2, s2, o2) {
    return [Math.min(Math.max(Math.floor(t2 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(e2 / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(s2 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(o2 / this._cellSize), 0), this.rows - 1)];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
}
function n$2(t2, e2, o2, r2, l2, i2) {
  const n2 = e2[r2++];
  for (let c2 = 0; c2 < n2; c2++) {
    const n3 = new t$3(i2);
    n3.xTile = e2[r2++], n3.yTile = e2[r2++], n3.hash = e2[r2++], n3.priority = e2[r2++];
    const c3 = e2[r2++];
    for (let t3 = 0; t3 < c3; t3++) {
      const t4 = e2[r2++], s2 = e2[r2++], l3 = e2[r2++], i3 = e2[r2++], c4 = !!e2[r2++], a3 = e2[r2++], h3 = o2[r2++], d2 = o2[r2++], f2 = e2[r2++], u2 = e2[r2++];
      n3.colliders.push({ xTile: t4, yTile: s2, dxPixels: l3, dyPixels: i3, hard: c4, partIndex: a3, width: f2, height: u2, minLod: h3, maxLod: d2 });
    }
    const a2 = t2[r2++];
    for (let e3 = 0; e3 < a2; e3++)
      n3.textVertexRanges.push([t2[r2++], t2[r2++]]);
    const h2 = t2[r2++];
    for (let e3 = 0; e3 < h2; e3++)
      n3.iconVertexRanges.push([t2[r2++], t2[r2++]]);
    l2.push(n3);
  }
  return r2;
}
function c$1(t2, e2, s2) {
  for (const [o2, r2] of t2.symbols)
    a$1(t2, e2, s2, r2, o2);
}
function a$1(t2, s2, o2, r2, l2) {
  const i2 = t2.layerData.get(l2);
  if (i2.type === I.SYMBOL) {
    for (const e2 of r2) {
      const s3 = e2.unique;
      let r3;
      if (e2.selectedForRendering) {
        const e3 = s3.parts[0], l3 = e3.startOpacity, i3 = e3.targetOpacity;
        t2.allSymbolsFadingOut = t2.allSymbolsFadingOut && i3 === 0;
        const n2 = o2 ? Math.floor(127 * l3) | i3 << 7 : i3 ? 255 : 0;
        r3 = n2 << 24 | n2 << 16 | n2 << 8 | n2;
      } else
        r3 = 0;
      for (const [t3, o3] of e2.iconVertexRanges)
        for (let e3 = t3; e3 < t3 + o3; e3 += 4)
          i2.iconOpacity[e3 / 4] = r3;
      if (e2.selectedForRendering) {
        const e3 = s3.parts[1], l3 = e3.startOpacity, i3 = e3.targetOpacity;
        t2.allSymbolsFadingOut = t2.allSymbolsFadingOut && i3 === 0;
        const n2 = o2 ? Math.floor(127 * l3) | i3 << 7 : i3 ? 255 : 0;
        r3 = n2 << 24 | n2 << 16 | n2 << 8 | n2;
      } else
        r3 = 0;
      for (const [t3, o3] of e2.textVertexRanges)
        for (let e3 = t3; e3 < t3 + o3; e3 += 4)
          i2.textOpacity[e3 / 4] = r3;
    }
    i2.lastOpacityUpdate = s2, i2.opacityChanged = true;
  }
}
class a {
  constructor(e2, t2) {
    this.layerUIDs = [], this.isDestroyed = false, this._data = e2, this.memoryUsed = e2.byteLength;
    let r2 = 1;
    const i2 = new Uint32Array(e2);
    this.layerUIDs = [];
    const s2 = i2[r2++];
    for (let n2 = 0; n2 < s2; n2++)
      this.layerUIDs[n2] = i2[r2++];
    this.bufferDataOffset = r2, t2 && (this.layer = t2.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return t$5(this._data);
  }
  get offset() {
    return this.bufferDataOffset;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), this.isDestroyed = true);
  }
  prepareForRendering(t2) {
    t$5(this._data) || (this.doPrepareForRendering(t2, this._data, this.bufferDataOffset), this._data = null);
  }
}
class l$3 extends a {
  constructor(e2, t2) {
    super(e2, t2), this.type = I.LINE, this.lineIndexStart = 0, this.lineIndexCount = 0;
    const r2 = new Uint32Array(e2);
    let s2 = this.bufferDataOffset;
    this.lineIndexStart = r2[s2++], this.lineIndexCount = r2[s2++];
    const n2 = r2[s2++];
    if (n2 > 0) {
      const e3 = new Map();
      for (let t3 = 0; t3 < n2; t3++) {
        const t4 = r2[s2++], i2 = r2[s2++], n3 = r2[s2++];
        e3.set(t4, [i2, n3]);
      }
      this.patternMap = e3;
    }
    this.bufferDataOffset = s2;
  }
  hasData() {
    return this.lineIndexCount > 0;
  }
  triangleCount() {
    return this.lineIndexCount / 3;
  }
  doDestroy() {
    r$4(this.lineVertexArrayObject) && this.lineVertexArrayObject.dispose(), r$4(this.lineVertexBuffer) && this.lineVertexBuffer.dispose(), r$4(this.lineIndexBuffer) && this.lineIndexBuffer.dispose(), this.lineVertexArrayObject = null, this.lineVertexBuffer = null, this.lineIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e2, t2, r2) {
    const i2 = new Uint32Array(t2), s2 = new Int32Array(i2.buffer), a2 = i2[r2++];
    this.lineVertexBuffer = E$2.createVertex(e2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r2, a2)), r2 += a2;
    const l2 = i2[r2++];
    this.lineIndexBuffer = E$2.createIndex(e2, F.STATIC_DRAW, new Uint32Array(i2.buffer, 4 * r2, l2)), r2 += l2;
    const u2 = this.layer.lineMaterial;
    this.lineVertexArrayObject = new a$4(e2, u2.getAttributeLocations(), u2.getLayoutInfo(), { geometry: this.lineVertexBuffer }, this.lineIndexBuffer);
  }
}
class u$2 extends a {
  constructor(e2, t2) {
    super(e2, t2), this.type = I.FILL, this.fillIndexStart = 0, this.fillIndexCount = 0, this.outlineIndexStart = 0, this.outlineIndexCount = 0;
    const r2 = new Uint32Array(e2);
    let s2 = this.bufferDataOffset;
    this.fillIndexStart = r2[s2++], this.fillIndexCount = r2[s2++], this.outlineIndexStart = r2[s2++], this.outlineIndexCount = r2[s2++];
    const n2 = r2[s2++];
    if (n2 > 0) {
      const e3 = new Map();
      for (let t3 = 0; t3 < n2; t3++) {
        const t4 = r2[s2++], i2 = r2[s2++], n3 = r2[s2++];
        e3.set(t4, [i2, n3]);
      }
      this.patternMap = e3;
    }
    this.bufferDataOffset = s2;
  }
  hasData() {
    return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
  }
  triangleCount() {
    return (this.fillIndexCount + this.outlineIndexCount) / 3;
  }
  doDestroy() {
    r$4(this.fillVertexArrayObject) && this.fillVertexArrayObject.dispose(), r$4(this.fillVertexBuffer) && this.fillVertexBuffer.dispose(), r$4(this.fillIndexBuffer) && this.fillIndexBuffer.dispose(), this.fillVertexArrayObject = null, this.fillVertexBuffer = null, this.fillIndexBuffer = null, r$4(this.outlineVertexArrayObject) && this.outlineVertexArrayObject.dispose(), r$4(this.outlineVertexBuffer) && this.outlineVertexBuffer.dispose(), r$4(this.outlineIndexBuffer) && this.outlineIndexBuffer.dispose(), this.outlineVertexArrayObject = null, this.outlineVertexBuffer = null, this.outlineIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e2, t2, r2) {
    const i2 = new Uint32Array(t2), s2 = new Int32Array(i2.buffer), a2 = i2[r2++];
    this.fillVertexBuffer = E$2.createVertex(e2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r2, a2)), r2 += a2;
    const l2 = i2[r2++];
    this.fillIndexBuffer = E$2.createIndex(e2, F.STATIC_DRAW, new Uint32Array(i2.buffer, 4 * r2, l2)), r2 += l2;
    const u2 = i2[r2++];
    this.outlineVertexBuffer = E$2.createVertex(e2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r2, u2)), r2 += u2;
    const h2 = i2[r2++];
    this.outlineIndexBuffer = E$2.createIndex(e2, F.STATIC_DRAW, new Uint32Array(i2.buffer, 4 * r2, h2)), r2 += h2;
    const c2 = this.layer, x = c2.fillMaterial, y2 = c2.outlineMaterial;
    this.fillVertexArrayObject = new a$4(e2, x.getAttributeLocations(), x.getLayoutInfo(), { geometry: this.fillVertexBuffer }, this.fillIndexBuffer), this.outlineVertexArrayObject = new a$4(e2, y2.getAttributeLocations(), y2.getLayoutInfo(), { geometry: this.outlineVertexBuffer }, this.outlineIndexBuffer);
  }
}
class h extends a {
  constructor(e2, t2, r2) {
    super(e2, t2), this.type = I.SYMBOL, this.iconPerPageElementsMap = new Map(), this.glyphPerPageElementsMap = new Map(), this.symbolInstances = [], this.isIconSDF = false, this.opacityChanged = false, this.lastOpacityUpdate = 0, this.symbols = [];
    const n2 = new Uint32Array(e2), f2 = new Int32Array(e2), o2 = new Float32Array(e2);
    let a2 = this.bufferDataOffset;
    this.isIconSDF = !!n2[a2++];
    const l2 = n2[a2++];
    for (let i2 = 0; i2 < l2; i2++) {
      const e3 = n2[a2++], t3 = n2[a2++], r3 = n2[a2++];
      this.iconPerPageElementsMap.set(e3, [t3, r3]);
    }
    const u2 = n2[a2++];
    for (let i2 = 0; i2 < u2; i2++) {
      const e3 = n2[a2++], t3 = n2[a2++], r3 = n2[a2++];
      this.glyphPerPageElementsMap.set(e3, [t3, r3]);
    }
    const h2 = n2[a2++], c2 = n2[a2++];
    this.iconOpacity = new Int32Array(h2), this.textOpacity = new Int32Array(c2), a2 = n$2(n2, f2, o2, a2, this.symbols, r2), this.bufferDataOffset = a2;
  }
  hasData() {
    return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
  }
  triangleCount() {
    let e2 = 0;
    for (const [t2, r2] of this.iconPerPageElementsMap)
      e2 += r2[1];
    for (const [t2, r2] of this.glyphPerPageElementsMap)
      e2 += r2[1];
    return e2 / 3;
  }
  doDestroy() {
    r$4(this.iconVertexArrayObject) && this.iconVertexArrayObject.dispose(), r$4(this.iconVertexBuffer) && this.iconVertexBuffer.dispose(), r$4(this.iconOpacityBuffer) && this.iconOpacityBuffer.dispose(), r$4(this.iconIndexBuffer) && this.iconIndexBuffer.dispose(), this.iconVertexArrayObject = null, this.iconVertexBuffer = null, this.iconOpacityBuffer = null, this.iconIndexBuffer = null, r$4(this.textVertexArrayObject) && this.textVertexArrayObject.dispose(), r$4(this.textVertexBuffer) && this.textVertexBuffer.dispose(), r$4(this.textOpacityBuffer) && this.textOpacityBuffer.dispose(), r$4(this.textIndexBuffer) && this.textIndexBuffer.dispose(), this.textVertexArrayObject = null, this.textVertexBuffer = null, this.textOpacityBuffer = null, this.textIndexBuffer = null, this.memoryUsed = 0;
  }
  updateOpacityInfo() {
    if (!this.opacityChanged)
      return;
    this.opacityChanged = false;
    const e2 = e$4(this.iconOpacity), t2 = e$4(this.iconOpacityBuffer);
    e2.length > 0 && e2.byteLength === t2.size && t2.setSubData(e2, 0, 0, e2.length);
    const i2 = e$4(this.textOpacity), s2 = e$4(this.textOpacityBuffer);
    i2.length > 0 && i2.byteLength === s2.size && s2.setSubData(i2, 0, 0, i2.length);
  }
  doPrepareForRendering(e2, t2, i2) {
    const s2 = new Uint32Array(t2), a2 = new Int32Array(s2.buffer), l2 = s2[i2++];
    this.iconVertexBuffer = E$2.createVertex(e2, F.STATIC_DRAW, new Int32Array(a2.buffer, 4 * i2, l2)), i2 += l2;
    const u2 = s2[i2++];
    this.iconIndexBuffer = E$2.createIndex(e2, F.STATIC_DRAW, new Uint32Array(s2.buffer, 4 * i2, u2)), i2 += u2;
    const h2 = s2[i2++];
    this.textVertexBuffer = E$2.createVertex(e2, F.STATIC_DRAW, new Int32Array(a2.buffer, 4 * i2, h2)), i2 += h2;
    const c2 = s2[i2++];
    this.textIndexBuffer = E$2.createIndex(e2, F.STATIC_DRAW, new Uint32Array(s2.buffer, 4 * i2, c2)), i2 += c2, this.iconOpacityBuffer = E$2.createVertex(e2, F.STATIC_DRAW, e$4(this.iconOpacity).buffer), this.textOpacityBuffer = E$2.createVertex(e2, F.STATIC_DRAW, e$4(this.textOpacity).buffer);
    const x = this.layer, y2 = x.iconMaterial, d2 = x.textMaterial;
    this.iconVertexArrayObject = new a$4(e2, y2.getAttributeLocations(), y2.getLayoutInfo(), { geometry: this.iconVertexBuffer, opacity: this.iconOpacityBuffer }, this.iconIndexBuffer), this.textVertexArrayObject = new a$4(e2, d2.getAttributeLocations(), d2.getLayoutInfo(), { geometry: this.textVertexBuffer, opacity: this.textOpacityBuffer }, this.textIndexBuffer);
  }
}
class c extends a {
  constructor(e2, t2) {
    super(e2, t2), this.type = I.CIRCLE, this.circleIndexStart = 0, this.circleIndexCount = 0;
    const r2 = new Uint32Array(e2);
    let s2 = this.bufferDataOffset;
    this.circleIndexStart = r2[s2++], this.circleIndexCount = r2[s2++], this.bufferDataOffset = s2;
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
    r$4(this.circleVertexArrayObject) && this.circleVertexArrayObject.dispose(), r$4(this.circleVertexBuffer) && this.circleVertexBuffer.dispose(), r$4(this.circleIndexBuffer) && this.circleIndexBuffer.dispose(), this.circleVertexArrayObject = null, this.circleVertexBuffer = null, this.circleIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e2, t2, r2) {
    const i2 = new Uint32Array(t2), s2 = new Int32Array(i2.buffer), a2 = i2[r2++];
    this.circleVertexBuffer = E$2.createVertex(e2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r2, a2)), r2 += a2;
    const l2 = i2[r2++];
    this.circleIndexBuffer = E$2.createIndex(e2, F.STATIC_DRAW, new Uint32Array(i2.buffer, 4 * r2, l2)), r2 += l2;
    const u2 = this.layer.circleMaterial;
    this.circleVertexArrayObject = new a$4(e2, u2.getAttributeLocations(), u2.getLayoutInfo(), { geometry: this.circleVertexBuffer }, this.circleIndexBuffer);
  }
}
class m$1 extends r$5 {
  constructor(e2, t2, s2, a2, r2, i2, o2, h2 = null) {
    super(e2, t2, s2, a2, r2, i2, 4096, 4096), this._memCache = h2, this.type = "vector-tile", this._referenced = 0, this._hasSymbolBuckets = false, this._memoryUsedByLayerData = 0, this.layerData = new Map(), this.layerCount = 0, this.status = "loading", this.allSymbolsFadingOut = false, this.lastOpacityUpdate = 0, this.symbols = new Map(), this.isCoverage = false, this.neededForCoverage = false, this.decluttered = false, this.invalidating = false, this.parentTile = null, this.childrenTiles = new Set(), this._processed = false, this._referenced = 1, this.styleRepository = o2, this.id = e2.id;
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < e$5;
  }
  get isHoldingForFade() {
    return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < e$5);
  }
  get wasRequested() {
    return this.status === "errored" || this.status === "loaded" || this.status === "reloading";
  }
  setData(e2) {
    this.changeDataImpl(e2), this.requestRender(), this.ready(), this.invalidating = false, this._processed = true;
  }
  deleteLayerData(t2) {
    let s2 = false;
    for (const e2 of t2)
      if (this.layerData.has(e2)) {
        const t3 = this.layerData.get(e2);
        this._memoryUsedByLayerData -= t3.memoryUsed, t3.type === I.SYMBOL && this.symbols.has(e2) && (this.symbols.delete(e2), s2 = true), t3.destroy(), this.layerData.delete(e2), this.layerCount--;
      }
    r$4(this._memCache) && this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData), s2 && this.emit("symbols-changed"), this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerCount > 0;
  }
  dispose() {
    this.status !== "unloaded" && (u$1.delete(this), m$1._destroyRenderBuckets(this.layerData), this.layerData = null, this.layerCount = 0, this._memoryUsedByLayerData = 0, this.destroy(), this.status = "unloaded");
  }
  release() {
    return --this._referenced == 0 && (this.dispose(), this.stage = null, true);
  }
  retain() {
    ++this._referenced;
  }
  get referenced() {
    return this._referenced;
  }
  get memoryUsage() {
    return (this._memoryUsedByLayerData + 256) / (this._referenced || 1);
  }
  changeDataImpl(t2) {
    let s2 = false;
    if (t2) {
      const { bucketsWithData: a2, emptyBuckets: r2 } = t2, i2 = this._createRenderBuckets(a2);
      if (r2 && r2.byteLength > 0) {
        const e2 = new Uint32Array(r2);
        for (const t3 of e2)
          this._deleteLayerData(t3);
      }
      for (const [e2, t3] of i2)
        this._deleteLayerData(e2), t3.type === I.SYMBOL && (this.symbols.set(e2, t3.symbols), s2 = true), this._memoryUsedByLayerData += t3.memoryUsed, this.layerData.set(e2, t3), this.layerCount++;
      r$4(this._memCache) && this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData);
    }
    this._hasSymbolBuckets = false;
    for (const [e2, a2] of this.layerData)
      a2.type === I.SYMBOL && (this._hasSymbolBuckets = true);
    s2 && this.emit("symbols-changed");
  }
  attachWithContext(e2) {
    this.stage = { context: e2, trashDisplayObject(e3) {
      e3.processDetach();
    }, untrashDisplayObject: () => false };
  }
  setTransform(e2) {
    super.setTransform(e2);
    const i2 = this.resolution / (e2.resolution * e2.pixelRatio), o2 = this.width / this.rangeX * i2, h2 = this.height / this.rangeY * i2, n2 = [0, 0];
    e2.toScreen(n2, [this.x, this.y]);
    const l2 = this.transforms.tileUnitsToPixels;
    r$6(l2), M(l2, l2, n2), h$2(l2, l2, Math.PI * e2.rotation / 180), f$1(l2, l2, [o2, h2, 1]);
  }
  _createTransforms() {
    return { dvs: e$6(), tileMat3: e$6(), tileUnitsToPixels: e$6() };
  }
  static _destroyRenderBuckets(e2) {
    if (!e2)
      return;
    const t2 = new Set();
    e2.forEach((e3) => {
      t2.has(e3) || (e3.destroy(), t2.add(e3));
    }), e2.clear();
  }
  _createRenderBuckets(e2) {
    const t2 = new Map(), s2 = new Map();
    for (const a2 of e2) {
      const e3 = this._deserializeBucket(a2, s2);
      for (const s3 of e3.layerUIDs)
        t2.set(s3, e3);
    }
    return t2;
  }
  _deserializeBucket(e2, t2) {
    let s2 = t2.get(e2);
    if (s2)
      return s2;
    switch (new Uint32Array(e2)[0]) {
      case I.FILL:
        s2 = new u$2(e2, this.styleRepository);
        break;
      case I.LINE:
        s2 = new l$3(e2, this.styleRepository);
        break;
      case I.SYMBOL:
        s2 = new h(e2, this.styleRepository, this);
        break;
      case I.CIRCLE:
        s2 = new c(e2, this.styleRepository);
    }
    return t2.set(e2, s2), s2;
  }
  _deleteLayerData(e2) {
    if (!this.layerData.has(e2))
      return;
    const t2 = this.layerData.get(e2);
    this._memoryUsedByLayerData -= t2.memoryUsed, t2.destroy(), this.layerData.delete(e2), this.layerCount--;
  }
}
const u$1 = new Map();
function i$2(e2, t2, n2, o2, i2, l2) {
  const { iconRotationAlignment: a2, textRotationAlignment: c2, iconTranslate: h2, iconTranslateAnchor: u2, textTranslate: d2, textTranslateAnchor: y2 } = o2;
  let x = 0;
  for (const g2 of e2.colliders) {
    const [e3, o3] = g2.partIndex === 0 ? h2 : d2, m2 = g2.partIndex === 0 ? u2 : y2, f2 = g2.minLod <= l2 && l2 <= g2.maxLod;
    x += f2 ? 0 : 1, g2.enabled = f2, g2.xScreen = g2.xTile * i2[0] + g2.yTile * i2[3] + i2[6], g2.yScreen = g2.xTile * i2[1] + g2.yTile * i2[4] + i2[7], m2 === r$8.MAP ? (g2.xScreen += n2 * e3 - t2 * o3, g2.yScreen += t2 * e3 + n2 * o3) : (g2.xScreen += e3, g2.yScreen += o3), l$6.VIEWPORT === (g2.partIndex === 0 ? a2 : c2) ? (g2.dxScreen = g2.dxPixels, g2.dyScreen = g2.dyPixels) : (g2.dxScreen = n2 * (g2.dxPixels + g2.width / 2) - t2 * (g2.dyPixels + g2.height / 2) - g2.width / 2, g2.dyScreen = t2 * (g2.dxPixels + g2.width / 2) + n2 * (g2.dyPixels + g2.height / 2) - g2.height / 2);
  }
  e2.colliders.length > 0 && x === e2.colliders.length && (e2.unique.show = false);
}
class l$2 {
  constructor(o2, r2, s2, i2, l2, a2) {
    this._symbols = o2, this._styleRepository = i2, this._zoom = l2, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = new Map(), this._allNeededMatrices = new Map(), this._gridIndex = new i$3(r2, s2, t$6), this._si = Math.sin(Math.PI * a2 / 180), this._co = Math.cos(Math.PI * a2 / 180);
    for (const t2 of o2)
      for (const n2 of t2.symbols)
        this._allNeededMatrices.has(n2.tile) || this._allNeededMatrices.set(n2.tile, r$7(n2.tile.transforms.tileUnitsToPixels));
  }
  work(e2) {
    const t2 = this._gridIndex;
    function n2(e3) {
      const n3 = e3.xScreen + e3.dxScreen, o3 = e3.yScreen + e3.dyScreen, r2 = n3 + e3.width, s2 = o3 + e3.height, [i2, l2, a2, c2] = t2.getCellSpan(n3, o3, r2, s2);
      for (let h2 = l2; h2 <= c2; h2++)
        for (let e4 = i2; e4 <= a2; e4++) {
          const i3 = t2.cells[h2][e4];
          for (const e5 of i3) {
            const t3 = e5.xScreen + e5.dxScreen, i4 = e5.yScreen + e5.dyScreen, l3 = t3 + e5.width, a3 = i4 + e5.height;
            if (!(r2 < t3 || n3 > l3 || s2 < i4 || o3 > a3))
              return true;
          }
        }
      return false;
    }
    const o2 = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const t3 = this._symbols[this._currentLayerCursor], r2 = this._getProperties(t3.styleLayerUID);
      for (; this._currentSymbolCursor < t3.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - o2 > e2)
          return false;
        const s2 = t3.symbols[this._currentSymbolCursor];
        if (!s2.unique.show)
          continue;
        i$2(s2, this._si, this._co, r2, this._allNeededMatrices.get(s2.tile), this._zoom);
        const l2 = s2.unique;
        if (!l2.show)
          continue;
        const { iconAllowOverlap: a2, iconIgnorePlacement: c2, textAllowOverlap: h2, textIgnorePlacement: u2 } = r2;
        for (const e3 of s2.colliders) {
          if (!e3.enabled)
            continue;
          const t4 = l2.parts[e3.partIndex];
          if (!t4.show)
            continue;
          !(e3.partIndex ? h2 : a2) && n2(e3) && (e3.hard ? l2.show = false : t4.show = false);
        }
        if (l2.show)
          for (const e3 of s2.colliders) {
            if (!e3.enabled)
              continue;
            if (e3.partIndex ? u2 : c2)
              continue;
            if (!l2.parts[e3.partIndex].show)
              continue;
            const t4 = e3.xScreen + e3.dxScreen, n3 = e3.yScreen + e3.dyScreen, o3 = t4 + e3.width, r3 = n3 + e3.height, [s3, i2, a3, h3] = this._gridIndex.getCellSpan(t4, n3, o3, r3);
            for (let l3 = i2; l3 <= h3; l3++)
              for (let t5 = s3; t5 <= a3; t5++) {
                this._gridIndex.cells[l3][t5].push(e3);
              }
          }
      }
    }
    return true;
  }
  _getProperties(e2) {
    const t2 = this._styleProps.get(e2);
    if (t2)
      return t2;
    const n2 = this._zoom, s2 = this._styleRepository.getStyleLayerByUID(e2), i2 = s2.getLayoutValue("symbol-placement", n2) !== n$7.POINT;
    let l2 = s2.getLayoutValue("icon-rotation-alignment", n2);
    l2 === l$6.AUTO && (l2 = i2 ? l$6.MAP : l$6.VIEWPORT);
    let a2 = s2.getLayoutValue("text-rotation-alignment", n2);
    a2 === l$6.AUTO && (a2 = i2 ? l$6.MAP : l$6.VIEWPORT);
    const c2 = s2.getPaintValue("icon-translate", n2), h2 = s2.getPaintValue("icon-translate-anchor", n2), u2 = s2.getPaintValue("text-translate", n2), d2 = s2.getPaintValue("text-translate-anchor", n2), y2 = { iconAllowOverlap: s2.getLayoutValue("icon-allow-overlap", n2), iconIgnorePlacement: s2.getLayoutValue("icon-ignore-placement", n2), textAllowOverlap: s2.getLayoutValue("text-allow-overlap", n2), textIgnorePlacement: s2.getLayoutValue("text-ignore-placement", n2), iconRotationAlignment: l2, textRotationAlignment: a2, iconTranslateAnchor: h2, iconTranslate: c2, textTranslateAnchor: d2, textTranslate: u2 };
    return this._styleProps.set(e2, y2), y2;
  }
}
function t$2(o2, e2) {
  if (o2.priority - e2.priority)
    return o2.priority - e2.priority;
  const t2 = o2.tile.key, i2 = e2.tile.key;
  return t2.world - i2.world ? t2.world - i2.world : t2.level - i2.level ? t2.level - i2.level : t2.row - i2.row ? t2.row - i2.row : t2.col - i2.col ? t2.col - i2.col : o2.xTile - e2.xTile ? o2.xTile - e2.xTile : o2.yTile - e2.yTile;
}
class i$1 {
  constructor(o2, e2, t2, i2, s2, r2) {
    this._visibleTiles = o2, this._symbolRepository = e2, this._createCollisionJob = t2, this._assignTileSymbolsOpacity = i2, this._symbolLayerSorter = s2, this._isLayerVisible = r2, this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  get running() {
    return this._running;
  }
  setScreenSize(o2, e2) {
    this._screenWidth === o2 && this._screenHeight === e2 || this.restart(), this._screenWidth = o2, this._screenHeight = e2;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  continue(o2) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const e2 = performance.now();
      if (!this._selectionJob.work(o2))
        return false;
      if (this._selectionJobCompleted = true, (o2 = Math.max(0, o2 - (performance.now() - e2))) === 0)
        return false;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const e2 = performance.now();
      if (!this._collisionJob.work(o2))
        return false;
      if (this._collisionJobCompleted = true, (o2 = Math.max(0, o2 - (performance.now() - e2))) === 0)
        return false;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const e2 = performance.now();
      if (!this._opacityJob.work(o2))
        return false;
      if (this._opacityJobCompleted = true, (o2 = Math.max(0, o2 - (performance.now() - e2))) === 0)
        return false;
    }
    return this._running = false, true;
  }
  _createSelectionJob() {
    const o2 = this._symbolRepository.uniqueSymbols;
    for (let t2 = 0; t2 < o2.length; t2++) {
      const e3 = o2[t2];
      for (let o3 = 0; o3 < e3.uniqueSymbols.length; o3++) {
        const t3 = e3.uniqueSymbols[o3];
        for (const o4 of t3.tileSymbols)
          o4.selectedForRendering = false;
      }
    }
    const e2 = [];
    let i2 = 0, s2 = 0;
    const r2 = this._isLayerVisible;
    function n2(n3) {
      let l3;
      const c2 = performance.now();
      for (; s2 < o2.length; s2++, i2 = 0) {
        const t2 = o2[s2], h2 = t2.styleLayerUID;
        if (!r2(h2)) {
          e2[s2] || (e2[s2] = { styleLayerUID: h2, symbols: [] });
          continue;
        }
        e2[s2] = e2[s2] || { styleLayerUID: h2, symbols: [] };
        const a2 = e2[s2];
        for (; i2 < t2.uniqueSymbols.length; i2++) {
          if (l3 = t2.uniqueSymbols[i2], i2 % 100 == 99 && performance.now() - c2 > n3)
            return false;
          let o3 = null, e3 = false, s3 = false;
          for (const t3 of l3.tileSymbols)
            if (!s3 || !e3) {
              const i3 = t3.tile;
              (!o3 || i3.isCoverage || i3.neededForCoverage && !e3) && (o3 = t3, (i3.neededForCoverage || i3.isCoverage) && (s3 = true), i3.isCoverage && (e3 = true));
            }
          if (o3.selectedForRendering = true, s3) {
            a2.symbols.push(o3), l3.show = true;
            for (const o4 of l3.parts)
              o4.show = true;
          } else
            l3.show = false;
        }
      }
      for (const o3 of e2)
        o3.symbols.sort(t$2);
      return true;
    }
    const l2 = this._symbolLayerSorter;
    return { work: n2, get sortedSymbols() {
      return e2.sort(l2);
    } };
  }
  _createOpacityJob() {
    const e2 = this._assignTileSymbolsOpacity, t2 = this._visibleTiles;
    let i2 = 0;
    function r2(o2, t3) {
      const i3 = o2.symbols;
      for (const [e3, r3] of i3)
        s(r3, t3);
      e2(o2, t3);
      for (const e3 of o2.childrenTiles)
        r2(e3, t3);
    }
    return { work(e3) {
      const s2 = performance.now();
      for (; i2 < t2.length; i2++) {
        if (performance.now() - s2 > e3)
          return false;
        const n2 = t2[i2];
        if (r$4(n2.parentTile))
          continue;
        r2(n2, performance.now());
      }
      return true;
    } };
  }
}
function s(o2, t2) {
  for (const i2 of o2) {
    const o3 = i2.unique;
    for (const i3 of o3.parts) {
      const s2 = i3.targetOpacity > 0.5 ? 1 : -1;
      i3.startOpacity += s2 * ((t2 - i3.startTime) / e$5), i3.startOpacity = Math.min(Math.max(i3.startOpacity, 0), 1), i3.startTime = t2, i3.targetOpacity = o3.show && i3.show ? 1 : 0;
    }
  }
}
const l$1 = 32, i = 8, n$1 = 64;
class r {
  constructor(e2, s2, o2) {
    this.tileCoordRange = e2, this._visibleTiles = s2, this._createUnique = o2, this._tiles = new Map(), this._uniqueSymbolsReferences = new Map();
  }
  get uniqueSymbols() {
    return t$5(this._uniqueSymbolLayerArray) && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  add(e2, s2) {
    this._uniqueSymbolLayerArray = null;
    let t2 = this._tiles.get(e2.id);
    t2 || (t2 = { symbols: new Map() }, this._tiles.set(e2.id, t2));
    const r2 = new Map();
    if (s2)
      for (const o2 of s2)
        t2.symbols.has(o2) && (r2.set(o2, t2.symbols.get(o2)), t2.symbols.delete(o2));
    else
      for (const [o2, l2] of e2.layerData)
        t2.symbols.has(o2) && (r2.set(o2, t2.symbols.get(o2)), t2.symbols.delete(o2));
    this._removeSymbols(r2);
    const y2 = e2.symbols, a2 = new Map();
    for (const [f2, c2] of y2) {
      let e3 = c2.length;
      if (e3 >= l$1) {
        let s3 = this.tileCoordRange;
        do {
          s3 /= 2, e3 /= 4;
        } while (e3 > i && s3 > n$1);
        const l2 = new i$3(this.tileCoordRange, this.tileCoordRange, s3);
        a2.set(f2, { flat: c2, index: l2 }), t2.symbols.set(f2, { flat: c2, index: l2 });
        for (const e4 of c2)
          l2.getCell(e4.xTile, e4.yTile).push(e4);
      } else
        a2.set(f2, { flat: c2 }), t2.symbols.set(f2, { flat: c2 });
    }
    this._addSymbols(e2.key, y2);
  }
  deleteStyleLayers(e2) {
    this._uniqueSymbolLayerArray = null;
    for (const [s2, o2] of this._tiles) {
      const t2 = new Map();
      for (const s3 of e2)
        o2.symbols.has(s3) && (t2.set(s3, o2.symbols.get(s3)), o2.symbols.delete(s3));
      this._removeSymbols(t2), o2.symbols.size === 0 && this._tiles.delete(s2);
    }
  }
  removeTile(e2) {
    this._uniqueSymbolLayerArray = null;
    const s2 = this._tiles.get(e2.id);
    if (!s2)
      return;
    const o2 = new Map();
    for (const [t2, l2] of e2.symbols)
      s2.symbols.has(t2) && (o2.set(t2, s2.symbols.get(t2)), s2.symbols.delete(t2));
    this._removeSymbols(o2), s2.symbols.size === 0 && this._tiles.delete(e2.id);
  }
  _removeSymbols(e2) {
    for (const [s2, { flat: o2 }] of e2)
      for (const e3 of o2) {
        const o3 = e3.unique, t2 = o3.tileSymbols, l2 = t2.length - 1;
        for (let s3 = 0; s3 < l2; s3++)
          if (t2[s3] === e3) {
            t2[s3] = t2[l2];
            break;
          }
        if (t2.length = l2, l2 === 0) {
          const e4 = this._uniqueSymbolsReferences.get(s2);
          e4.delete(o3), e4.size === 0 && this._uniqueSymbolsReferences.delete(s2);
        }
        e3.unique = null;
      }
  }
  _addSymbols(s2, o2) {
    if (o2.size === 0)
      return;
    const t2 = this._visibleTiles;
    for (const e2 of t2)
      e2.parentTile || e2.key.world !== s2.world || e2.key.level === s2.level && !e2.key.equals(s2) || this._matchSymbols(e2, s2, o2);
    for (const [l2, i2] of o2)
      for (const s3 of i2)
        if (t$5(s3.unique)) {
          const e2 = this._createUnique();
          s3.unique = e2, e2.tileSymbols.push(s3);
          let o3 = this._uniqueSymbolsReferences.get(l2);
          o3 || (o3 = new Set(), this._uniqueSymbolsReferences.set(l2, o3)), o3.add(e2);
        }
  }
  _matchSymbols(e2, o2, l2) {
    if (e2.key.level > o2.level) {
      const s2 = e2.key.level - o2.level;
      if (e2.key.row >> s2 !== o2.row || e2.key.col >> s2 !== o2.col)
        return;
    }
    if (o2.level > e2.key.level) {
      const s2 = o2.level - e2.key.level;
      if (o2.row >> s2 !== e2.key.row || o2.col >> s2 !== e2.key.col)
        return;
    }
    if (o2.equals(e2.key)) {
      for (const s2 of e2.childrenTiles)
        this._matchSymbols(s2, o2, l2);
      return;
    }
    const i2 = new Map();
    for (const [n2, r2] of l2) {
      const l3 = [];
      for (const s2 of r2) {
        const i3 = l$4(this.tileCoordRange, s2.xTile, o2.level, o2.col, e2.key.level, e2.key.col), n3 = l$4(this.tileCoordRange, s2.yTile, o2.level, o2.row, e2.key.level, e2.key.row);
        i3 >= 0 && i3 < this.tileCoordRange && n3 >= 0 && n3 < this.tileCoordRange && l3.push({ symbol: s2, xTransformed: i3, yTransformed: n3 });
      }
      const y2 = [], a2 = e2.key.level < o2.level ? 1 : 1 << e2.key.level - o2.level, f2 = this._tiles.get(e2.id).symbols.get(n2);
      if (f2) {
        const e3 = f2.flat;
        for (const o3 of l3) {
          let t2, l4 = false;
          const i3 = o3.xTransformed, n3 = o3.yTransformed;
          t2 = r$4(f2.index) ? f2.index.getCell(i3, n3) : e3;
          const r3 = o3.symbol, c2 = r3.hash;
          for (const e4 of t2)
            if (c2 === e4.hash && Math.abs(i3 - e4.xTile) <= a2 && Math.abs(n3 - e4.yTile) <= a2) {
              const s2 = e4.unique;
              r3.unique = s2, s2.tileSymbols.push(r3), l4 = true;
              break;
            }
          l4 || y2.push(r3);
        }
      }
      y2.length > 0 && i2.set(n2, y2);
    }
    for (const s2 of e2.childrenTiles)
      this._matchSymbols(s2, o2, i2);
  }
  _createUniqueSymbolLayerArray() {
    const e2 = this._uniqueSymbolsReferences, s2 = new Array(e2.size);
    let o2, t2 = 0;
    for (const [l2, i2] of e2) {
      const e3 = new Array(i2.size);
      o2 = 0;
      for (const s3 of i2)
        e3[o2++] = s3;
      s2[t2] = { styleLayerUID: l2, uniqueSymbols: e3 }, t2++;
    }
    return s2;
  }
}
const n = 0.5, _$2 = 1e-6;
class m extends n$8 {
  constructor(t2, e2) {
    super(), this.styleRepository = t2, this._tileToHandle = new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._completed = false, this._symbolRepository = new r(4096, e2, () => new s$1()), this._symbolDeclutterer = new i$1(e2, this._symbolRepository, (t3, e3, i2) => new l$2(t3, e3, i2, this.styleRepository, this._zoom, this._viewState.rotation), (t3, e3) => {
      t3.allSymbolsFadingOut = true, t3.lastOpacityUpdate = e3, c$1(t3, e3, true), t3.decluttered = true, t3.requestRender();
    }, (t3, e3) => this.styleRepository.getStyleLayerByUID(t3.styleLayerUID).z - this.styleRepository.getStyleLayerByUID(e3.styleLayerUID).z, (t3) => {
      const e3 = this.styleRepository.getStyleLayerByUID(t3);
      if (this._zoom + _$2 < e3.minzoom || this._zoom - _$2 >= e3.maxzoom)
        return false;
      const i2 = e3.getLayoutProperty("visibility");
      return !i2 || i2.getValue() !== i$4.NONE;
    });
  }
  addTile(t2) {
    t2.decluttered = false, this._tileToHandle.set(t2, t2.on("symbols-changed", () => {
      this._symbolRepository.add(t2), this.restartDeclutter();
    })), this._symbolRepository.add(t2), this.restartDeclutter();
  }
  removeTile(t2) {
    const e2 = this._tileToHandle.get(t2);
    e2 && (this._symbolRepository.removeTile(t2), this.restartDeclutter(), e2.remove(), this._tileToHandle.delete(t2));
  }
  update(t2, e2) {
    return this._zoom = t2, this._viewState = { scale: e2.scale, rotation: e2.rotation, center: [e2.center[0], e2.center[1]], size: [e2.size[0], e2.size[1]] }, this._continueDeclutter(), this._completed;
  }
  restartDeclutter() {
    this._completed = false, this._symbolDeclutterer.restart(), this._notifyUnstable();
  }
  clear() {
    this._completed = false, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach((t2) => t2.remove()), this._tileToHandle.clear();
  }
  get stale() {
    return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
  }
  deleteStyleLayers(t2) {
    this._symbolRepository.deleteStyleLayers(t2);
  }
  _continueDeclutter() {
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(c$3), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    r$4(this._stableNotificationHandle) && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this.emit("fade-complete");
    }, (1 + n) * e$5);
  }
  _notifyUnstable() {
    r$4(this._stableNotificationHandle) && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this.emit("fade-start");
  }
}
class t$1 extends r$5 {
  _createTransforms() {
    return { dvs: e$6(), tileMat3: e$6() };
  }
}
const _$1 = 1e-6;
function f(e2, t2) {
  if (e2) {
    const s2 = e2.getLayoutProperty("visibility");
    if (!s2 || s2.getValue() !== i$4.NONE && (e2.minzoom === void 0 || e2.minzoom < t2 + _$1) && (e2.maxzoom === void 0 || e2.maxzoom >= t2 - _$1))
      return true;
  }
  return false;
}
class b extends i$5 {
  constructor(e2) {
    super(e2), this._backgroundTiles = [], this._pointToCallbacks = new Map();
  }
  destroy() {
    this.removeAllChildren(), this._spriteMosaic && (this._spriteMosaic.dispose(), this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic.dispose(), this._glyphMosaic = null), r$4(this._symbolFader) && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [], this._pointToCallbacks.clear();
  }
  setStyleResources(e2, r2, i2) {
    if (this._spriteMosaic = e2, this._glyphMosaic = r2, this._styleRepository = i2, t$5(this._symbolFader)) {
      const e3 = new m(this._styleRepository, this.children);
      e3.on("fade-start", () => {
        this.emit("fade-start"), this.requestRender();
      }), e3.on("fade-complete", () => {
        this.emit("fade-complete"), this.requestRender();
      }), this._symbolFader = e3;
    }
    e$4(this._symbolFader).styleRepository = i2;
  }
  setSpriteMosaic(e2) {
    this._spriteMosaic.dispose(), this._spriteMosaic = e2;
  }
  deleteStyleLayers(t2) {
    r$4(this._symbolFader) && this._symbolFader.deleteStyleLayers(t2);
  }
  async hitTest(e2) {
    const t2 = D$2();
    return this._pointToCallbacks.set(e2, t2), this.requestRender(), t2.promise;
  }
  enterTileInvalidation() {
    for (const e2 of this.children)
      e2.invalidating = true;
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, super.createRenderParams(e2)), { renderPass: null, styleLayer: null, styleLayerUID: -1, glyphMosaic: this._glyphMosaic, spriteMosaic: this._spriteMosaic, hasClipping: !!this._clippingInfos });
  }
  doRender(e2) {
    !this.visible || e2.drawPhase !== I$1.MAP && e2.drawPhase !== I$1.DEBUG || this._spriteMosaic === void 0 || super.doRender(e2);
  }
  addChild(t2) {
    return super.addChild(t2), r$4(this._symbolFader) ? this._symbolFader.addTile(t2) : t2.decluttered = true, this.requestRender(), t2;
  }
  removeChild(t2) {
    return r$4(this._symbolFader) && this._symbolFader.removeTile(t2), this.requestRender(), super.removeChild(t2);
  }
  renderChildren(e2) {
    const { drawPhase: t2 } = e2;
    if (t2 !== I$1.DEBUG) {
      if (this._doRender(e2), this._pointToCallbacks.size > 0) {
        e2.drawPhase = I$1.HITTEST;
        const s2 = e2.painter.effects.hittestVTL;
        s2.bind(e2), this._doRender(e2), s2.draw(e2, this._pointToCallbacks), s2.unbind(e2), e2.drawPhase = t2;
      }
    } else
      super.renderChildren(e2);
  }
  removeAllChildren() {
    for (let t2 = 0; t2 < this.children.length; t2++) {
      const s2 = this.children[t2];
      r$4(this._symbolFader) && this._symbolFader.removeTile(s2), s2.dispose();
    }
    super.removeAllChildren();
  }
  getStencilTarget() {
    return this.children.filter((e2) => e2.neededForCoverage && e2.hasData());
  }
  restartDeclutter() {
    r$4(this._symbolFader) && this._symbolFader.restartDeclutter();
  }
  _doRender(e2) {
    const { context: t2 } = e2, s2 = this._styleRepository;
    if (!s2)
      return;
    const r2 = s2.layers;
    let i2 = true;
    e2.drawPhase === I$1.HITTEST && (i2 = false), s2.backgroundBucketIds.length > 0 && (e2.renderPass = "background", this._renderBackgroundLayers(e2, s2.backgroundBucketIds)), super.renderChildren(e2), e2.drawPhase === I$1.MAP && this._fade(e2.displayLevel, e2.state);
    const o2 = this.children.filter((e3) => e3.visible && e3.hasData());
    if (!o2 || o2.length === 0)
      return t2.bindVAO(), t2.setStencilTestEnabled(true), void t2.setBlendingEnabled(true);
    for (const l2 of o2)
      l2.triangleCount = 0;
    t2.setStencilWriteMask(0), t2.setColorMask(true, true, true, true), t2.setStencilOp(O.KEEP, O.KEEP, O.REPLACE), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(false), t2.setDepthTestEnabled(true), t2.setDepthWriteEnabled(true), t2.setDepthFunction(I$2.LEQUAL), t2.setClearDepth(1), t2.clear(t2.gl.DEPTH_BUFFER_BIT), e2.renderPass = "opaque";
    for (let l2 = r2.length - 1; l2 >= 0; l2--)
      this._renderStyleLayer(r2[l2], e2, o2);
    t2.setDepthWriteEnabled(false), t2.setBlendingEnabled(i2), t2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.renderPass = "translucent";
    for (let l2 = 0; l2 < r2.length; l2++)
      this._renderStyleLayer(r2[l2], e2, o2);
    t2.bindVAO(), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(true);
  }
  _fade(t2, s2) {
    r$4(this._symbolFader) && (this._symbolFader.update(t2, s2) || this.requestRender());
  }
  _renderStyleLayer(e2, t2, s2) {
    const { painter: r2, renderPass: i2 } = t2;
    if (e2 === void 0)
      return;
    const o2 = e2.getLayoutProperty("visibility");
    if (o2 && o2.getValue() === i$4.NONE)
      return;
    let a2;
    switch (e2.type) {
      case a$5.BACKGROUND:
        return;
      case a$5.FILL:
        if (i2 !== "opaque" && t2.renderPass !== "translucent")
          return;
        a2 = "vtlFill";
        break;
      case a$5.LINE:
        if (i2 !== "translucent")
          return;
        a2 = "vtlLine";
        break;
      case a$5.CIRCLE:
        if (i2 !== "translucent")
          return;
        a2 = "vtlCircle";
        break;
      case a$5.SYMBOL:
        if (i2 !== "translucent")
          return;
        a2 = "vtlSymbol";
    }
    if (s2 = e2.type === a$5.SYMBOL ? s2.filter((e3) => e3.decluttered) : s2.filter((e3) => e3.neededForCoverage), a2 !== "vtlSymbol") {
      const r3 = t2.displayLevel;
      if (s2.length === 0 || e2.minzoom !== void 0 && e2.minzoom >= r3 + _$1 || e2.maxzoom !== void 0 && e2.maxzoom < r3 - _$1)
        return;
    }
    const d2 = e2.uid;
    t2.styleLayerUID = d2, t2.styleLayer = e2;
    for (const l2 of s2)
      if (l2.layerData.has(d2)) {
        r2.renderObjects(t2, s2, a2);
        break;
      }
  }
  _renderBackgroundLayers(t2, s2) {
    const { context: r2, displayLevel: o2, painter: l2, state: h2 } = t2, m2 = this._styleRepository;
    let _2 = false;
    for (const e2 of s2) {
      if (m2.getLayerById(e2).type === a$5.BACKGROUND && f(m2.getLayerById(e2), o2)) {
        _2 = true;
        break;
      }
    }
    if (!_2)
      return;
    const b2 = this._tileInfoView.getTileCoverage(t2.state, 0, "smallest"), { spans: g2, lodInfo: T } = b2, { level: E2 } = T, C2 = u$4(), L2 = [];
    if (this._renderPasses) {
      const s3 = this._renderPasses[0];
      r$4(this._clippingInfos) && (s3.brushes[0].prepareState(t2), s3.brushes[0].drawMany(t2, this._clippingInfos));
    }
    const v = this._backgroundTiles;
    let R2, S = 0;
    for (const { row: e2, colFrom: n2, colTo: a2 } of g2)
      for (let t3 = n2; t3 <= a2; t3++) {
        if (S < v.length)
          R2 = v[S], R2.key.set(E2, e2, T.normalizeCol(t3), T.getWorldForColumn(t3)), this._tileInfoView.getTileBounds(C2, R2.key, false), R2.x = C2[0], R2.y = C2[3], R2.resolution = this._tileInfoView.getTileResolution(E2);
        else {
          const s3 = new e$2(E2, e2, T.normalizeCol(t3), T.getWorldForColumn(t3)), r3 = this._tileInfoView.getTileBounds(u$4(), s3), o3 = this._tileInfoView.getTileResolution(E2);
          R2 = new t$1(s3, o3, r3[0], r3[3], 512, 512, 4096, 4096), v.push(R2);
        }
        R2.setTransform(h2), L2.push(R2), S++;
      }
    r2.setStencilWriteMask(0), r2.setColorMask(true, true, true, true), r2.setStencilOp(O.KEEP, O.KEEP, O.REPLACE), r2.setStencilFunction(I$2.EQUAL, 0, 255);
    let F2 = true;
    t2.drawPhase === I$1.HITTEST && (F2 = false), r2.setStencilTestEnabled(F2);
    for (const e2 of s2) {
      const s3 = m2.getLayerById(e2);
      s3.type === a$5.BACKGROUND && f(s3, o2) && (t2.styleLayerUID = s3.uid, t2.styleLayer = s3, l2.renderObjects(t2, L2, "vtlBackground"));
    }
    l$5.pool.release(b2);
  }
}
const _ = { geometry: [new t$7("a_PositionAndFlags", 3, C.SHORT, 0, 6)] }, u = new Map();
u.set("a_PositionAndFlags", 0);
const l = { vsPath: "debug/overlay", fsPath: "debug/overlay", attributes: u };
class d extends r$9 {
  constructor(e2) {
    super(), this._conf = e2;
  }
  static makeFlags(e2, t2) {
    return e2 | t2 << 2;
  }
  _createTransforms() {
    return { dvs: e$6() };
  }
  doRender(e2) {
    this._updateTransforms(e2), this._ensureResources(e2);
    const { context: t2 } = e2;
    t2.useProgram(this._program), this._program.setUniformMatrix3fv("u_dvsMat3", this.transforms.dvs), this._program.setUniform4fv("u_colors", this._conf.getColors(e2)), this._program.setUniform1fv("u_opacities", this._conf.getOpacities(e2));
    const { vertexData: s2, indexData: r2 } = this._conf.getMesh(e2);
    this._vertexBuffer.setData(s2), this._indexBuffer.setData(r2), t2.bindVAO(this._vertexArray), t2.setBlendingEnabled(true), t2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), t2.setDepthTestEnabled(false), t2.setStencilTestEnabled(false), t2.setColorMask(true, true, true, true), t2.drawElements(E$3.TRIANGLES, r2.length, C.UNSIGNED_INT, 0);
  }
  onDetach() {
    this._vertexArray && (this._vertexArray.dispose(), this._vertexArray = null);
  }
  _updateTransforms(r2) {
    r$6(this.transforms.dvs), M(this.transforms.dvs, this.transforms.dvs, [-1, 1]), f$1(this.transforms.dvs, this.transforms.dvs, [2 / r2.state.size[0], -2 / r2.state.size[1], 1]);
  }
  _ensureResources(e2) {
    const { context: t2 } = e2;
    this._program || (this._program = e2.painter.materialManager.getProgram(l)), this._vertexBuffer || (this._vertexBuffer = E$2.createVertex(t2, F.STREAM_DRAW)), this._indexBuffer || (this._indexBuffer = E$2.createIndex(t2, F.STREAM_DRAW)), this._vertexArray || (this._vertexArray = new a$4(t2, u, _, { geometry: this._vertexBuffer }, this._indexBuffer));
  }
}
class t extends h$3 {
  constructor() {
    super(...arguments), this._fullCacheLodInfos = null, this._levelByScale = {};
  }
  getTileParentId(e2) {
    const l2 = e$2.pool.acquire(e2), t2 = l2.level === 0 ? null : e$2.getId(l2.level - 1, l2.row >> 1, l2.col >> 1, l2.world);
    return e$2.pool.release(l2), t2;
  }
  getTileCoverage(e2, l2, s2) {
    const t2 = super.getTileCoverage(e2, l2, s2);
    if (!t2)
      return t2;
    const o2 = 1 << t2.lodInfo.level;
    return t2.spans = t2.spans.filter((e3) => e3.row >= 0 && e3.row < o2), t2;
  }
  scaleToLevel(e2) {
    if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e2])
      return this._levelByScale[e2];
    {
      const l2 = this._fullCacheLodInfos;
      if (e2 > l2[0].scale)
        return l2[0].level;
      let s2, t2;
      for (let o2 = 0; o2 < l2.length - 1; o2++)
        if (t2 = l2[o2 + 1], e2 > t2.scale)
          return s2 = l2[o2], s2.level + (s2.scale - e2) / (s2.scale - t2.scale);
      return l2[l2.length - 1].level;
    }
  }
  _initializeFullCacheLODs(l2) {
    let s2;
    if (l2[0].level === 0)
      s2 = l2.map((e2) => ({ level: e2.level, resolution: e2.resolution, scale: e2.scale }));
    else {
      const l3 = this.tileInfo.size[0], t2 = this.tileInfo.spatialReference;
      s2 = j$1.create({ size: l3, spatialReference: t2 }).lods.map((e2) => ({ level: e2.level, resolution: e2.resolution, scale: e2.scale }));
    }
    for (let e2 = 0; e2 < s2.length; e2++)
      this._levelByScale[s2[e2].scale] = s2[e2].level;
    this._fullCacheLodInfos = s2;
  }
}
let D = class extends y(u$5) {
  constructor() {
    super(...arguments), this._styleChanges = [], this._fetchQueue = null, this._parseQueue = null, this._isTileHandlerReady = false, this.fading = false, this._getCollidersMesh = (e2) => {
      const { pixelRatio: t2 } = e2.state;
      let i2 = 0;
      const s2 = [], r2 = [];
      for (const a2 of this._vectorTileContainer.children)
        if (a2.symbols)
          for (const [e3, l2] of a2.symbols)
            for (const a3 of l2)
              for (const e4 of a3.colliders) {
                const l3 = (e4.xScreen + e4.dxScreen) * t2, n2 = (e4.yScreen + e4.dyScreen) * t2, o2 = e4.width * t2, h2 = e4.height * t2, u2 = a3.unique.parts[e4.partIndex].targetOpacity > 0.5;
                if (!u2 && this.layer.showCollisionBoxes !== "all")
                  continue;
                const c2 = 2, y2 = 0, p = 3, d$1 = 0, _2 = 3, f2 = 1, g2 = 3, m2 = 0, C2 = u2 ? c2 : y2, T = u2 ? p : d$1, v = d.makeFlags(C2, T);
                s2.push(l3, n2, v, l3 + o2, n2, v, l3, n2 + h2, v, l3 + o2, n2 + h2, v), r2.push(i2 + 0, i2 + 1, i2 + 2, i2 + 1, i2 + 3, i2 + 2), i2 += 4;
                const H = u2 ? _2 : f2, w = u2 ? g2 : m2, S = d.makeFlags(H, w);
                s2.push(l3, n2, S, l3 + o2, n2, S, l3, n2 + 1, S, l3 + o2, n2 + 1, S), r2.push(i2 + 0, i2 + 1, i2 + 2, i2 + 1, i2 + 3, i2 + 2), i2 += 4, s2.push(l3, n2 + h2 - 1, S, l3 + o2, n2 + h2 - 1, S, l3, n2 + h2, S, l3 + o2, n2 + h2, S), r2.push(i2 + 0, i2 + 1, i2 + 2, i2 + 1, i2 + 3, i2 + 2), i2 += 4, s2.push(l3, n2, S, l3 + 1, n2, S, l3, n2 + h2, S, l3 + 1, n2 + h2, S), r2.push(i2 + 0, i2 + 1, i2 + 2, i2 + 1, i2 + 3, i2 + 2), i2 += 4, s2.push(l3 + o2 - 1, n2, S, l3 + o2, n2, S, l3 + o2 - 1, n2 + h2, S, l3 + o2, n2 + h2, S), r2.push(i2 + 0, i2 + 1, i2 + 2, i2 + 1, i2 + 3, i2 + 2), i2 += 4;
              }
      return { vertexData: new Int16Array(s2), indexData: new Uint32Array(r2) };
    }, this._getCollidersColors = () => [1, 0.5, 0, 1, 1, 0, 0, 1, 0, 1, 0.5, 1, 0, 0.5, 0, 1], this._getCollidersOpacities = () => [0.05, 0.01, 0.15, 0.2];
  }
  async hitTest(e2, i2) {
    if (!this._tileHandlerPromise)
      return null;
    await this._tileHandlerPromise;
    const s2 = await this._vectorTileContainer.hitTest(i2);
    if (!s2 || s2.length === 0)
      return null;
    const r2 = s2[0] - 1, a2 = this._styleRepository, l2 = a2.getStyleLayerByUID(r2);
    if (!l2)
      return null;
    const n2 = a2.getStyleLayerIndex(l2.id);
    return [{ type: "graphic", mapPoint: e2, layer: this.layer, graphic: new g({ attributes: { layerId: n2, layerName: l2.id, layerUID: r2 }, layer: this.layer, sourceLayer: this.layer }) }];
  }
  update(e2) {
    if (this._tileHandlerPromise && this._isTileHandlerReady)
      return e2.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = e2.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = e2.state, this._parseQueue.state = e2.state, this._tileManager.update(e2) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
  }
  attach() {
    const { style: e2 } = this.layer.currentStyleInfo;
    this._styleRepository = new l$7(e2), this._tileInfoView = new t(this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new b(this._tileInfoView), this._tileHandler = new n$4(this.layer, this._styleRepository, window.devicePixelRatio || 1), this.container.addChild(this._vectorTileContainer), this._start(), this.handles.add([this._vectorTileContainer.on("fade-start", () => {
      this.fading = true, this.notifyChange("updating"), this.requestUpdate();
    }), this._vectorTileContainer.on("fade-complete", () => {
      var _a;
      (_a = this._collisionOverlay) == null ? void 0 : _a.requestRender(), this.fading = false, this.notifyChange("updating"), this.requestUpdate();
    }), l$8(() => this.layer.showCollisionBoxes, (e3) => {
      e3 !== "none" ? this._collisionOverlay || (this._collisionOverlay = new d({ getMesh: this._getCollidersMesh, getColors: this._getCollidersColors, getOpacities: this._getCollidersOpacities }), this.container.addChild(this._collisionOverlay)) : (this.container.removeChild(this._collisionOverlay), this._collisionOverlay = null), this.container.requestRender();
    }, h$4), this.layer.on("paint-change", (e3) => {
      if (e3.isDataDriven)
        this._styleChanges.push({ type: L$1.PAINTER_CHANGED, data: e3 }), this.notifyChange("updating"), this.requestUpdate();
      else {
        const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
        if (!i2)
          return;
        const s2 = i2.type === a$5.SYMBOL;
        t2.setPaintProperties(e3.layer, e3.paint), s2 && this._vectorTileContainer.restartDeclutter(), this._vectorTileContainer.requestRender();
      }
    }), this.layer.on("layout-change", (e3) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
      if (!i2)
        return;
      const s2 = m$2(i2.layout, e3.layout);
      if (!t$5(s2)) {
        if (a$6(s2, "visibility") && Q(s2) === 1)
          return t2.setLayoutProperties(e3.layer, e3.layout), i2.type === a$5.SYMBOL && this._vectorTileContainer.restartDeclutter(), void this._vectorTileContainer.requestRender();
        this._styleChanges.push({ type: L$1.LAYOUT_CHANGED, data: e3 }), this.notifyChange("updating"), this.requestUpdate();
      }
    }), this.layer.on("style-layer-visibility-change", (e3) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
      i2 && (t2.setStyleLayerVisibility(e3.layer, e3.visibility), i2.type === a$5.SYMBOL && this._vectorTileContainer.restartDeclutter(), this._vectorTileContainer.requestRender());
    }), this.layer.on("style-layer-change", (e3) => {
      this._styleChanges.push({ type: L$1.LAYER_CHANGED, data: e3 }), this.notifyChange("updating"), this.requestUpdate();
    }), this.layer.on("delete-style-layer", (e3) => {
      this._styleChanges.push({ type: L$1.LAYER_REMOVED, data: e3 }), this.notifyChange("updating"), this.requestUpdate();
    }), this.layer.on("load-style", () => this._loadStyle()), this.layer.on("spriteSource-change", (e3) => {
      this._newSpriteSource = e3.spriteSource, this._styleChanges.push({ type: L$1.SPRITES_CHANGED, data: null });
      const t2 = this._styleRepository.layers;
      for (const i2 of t2)
        switch (i2.type) {
          case a$5.SYMBOL:
            i2.getLayoutProperty("icon-image") && this._styleChanges.push({ type: L$1.LAYOUT_CHANGED, data: { layer: i2.id, layout: i2.layout } });
            break;
          case a$5.LINE:
            i2.getPaintProperty("line-pattern") && this._styleChanges.push({ type: L$1.PAINTER_CHANGED, data: { layer: i2.id, paint: i2.paint, isDataDriven: i2.isPainterDataDriven() } });
            break;
          case a$5.FILL:
            i2.getLayoutProperty("fill-pattern") && this._styleChanges.push({ type: L$1.PAINTER_CHANGED, data: { layer: i2.id, paint: i2.paint, isDataDriven: i2.isPainterDataDriven() } });
        }
      this.notifyChange("updating"), this.requestUpdate();
    })], this.declaredClass);
  }
  detach() {
    var _a, _b;
    this._stop(), this.container.removeAllChildren(), (_a = this._vectorTileContainer) == null ? void 0 : _a.destroy(), this._vectorTileContainer = null, (_b = this._tileHandler) == null ? void 0 : _b.destroy(), this._tileHandler = null, this.handles.remove(this.declaredClass);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this._collisionOverlay && this._vectorTileContainer.restartDeclutter(), this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    var _a;
    return E$4((_a = this.layer.tileInfo) == null ? void 0 : _a.spatialReference, e2);
  }
  canResume() {
    let e2 = super.canResume();
    const { currentStyleInfo: t2 } = this.layer;
    if (e2 && (t2 == null ? void 0 : t2.layerDefinition)) {
      const i2 = this.view.scale, { minScale: s2, maxScale: r2 } = t2.layerDefinition;
      t2 && t2.layerDefinition && (s2 && s2 < i2 && (e2 = false), r2 && r2 > i2 && (e2 = false));
    }
    return e2;
  }
  isUpdating() {
    const e2 = this._vectorTileContainer.children;
    return !this._isTileHandlerReady || !this._fetchQueue || !this._parseQueue || this._fetchQueue.updating || this._parseQueue.updating || e2.length > 0 && e2.some((e3) => e3.invalidating) || this.fading;
  }
  acquireTile(e2) {
    const t2 = this._createVectorTile(e2);
    return this._tileHandlerPromise.then(() => {
      this._fetchQueue.push(t2.key).then((e3) => this._parseQueue.push({ key: t2.key, data: e3 })).then((e3) => {
        t2.once("attach", () => this.requestUpdate()), t2.setData(e3), this.requestUpdate(), this.notifyChange("updating");
      }).catch((e3) => {
        this.notifyChange("updating"), j(e3) || s$3.getLogger(this.declaredClass).error(e3);
      });
    }), t2;
  }
  releaseTile(e2) {
    const t2 = e2.key.id;
    this._fetchQueue.abort(t2), this._parseQueue.abort(t2), this.requestUpdate();
  }
  _start() {
    if (this._stop(), this._tileManager = new a$2({ acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }, this._vectorTileContainer), !this.layer.currentStyleInfo)
      return;
    const e2 = new AbortController(), t2 = this._tileHandler.start({ signal: e2.signal }).then(() => {
      this._fetchQueue = new y$1({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._getTileData(e3, t3), concurrency: 15 }), this._parseQueue = new y$1({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._parseTileData(e3, t3), concurrency: 8 }), this.requestUpdate(), this._isTileHandlerReady = true;
    });
    this._tileHandler.spriteMosaic.then((e3) => {
      this._vectorTileContainer.setStyleResources(e3, this._tileHandler.glyphMosaic, this._styleRepository), this.requestUpdate();
    }), this._tileHandlerAbortController = e2, this._tileHandlerPromise = t2;
  }
  _stop() {
    if (!this._tileHandlerAbortController || !this._vectorTileContainer)
      return;
    const e2 = this._tileHandlerAbortController;
    e2 && e2.abort(), this._tileHandlerPromise = null, this._isTileHandlerReady = false, this._fetchQueue && (this._fetchQueue.destroy(), this._fetchQueue = null), this._parseQueue && (this._parseQueue.destroy(), this._parseQueue = null), this._tileManager && (this._tileManager.destroy(), this._tileManager = null), this._vectorTileContainer.removeAllChildren();
  }
  async _getTileData(e2, t2) {
    const i2 = await this._tileHandler.fetchTileData(e2, t2);
    return this.notifyChange("updating"), i2;
  }
  async _parseTileData(e2, t2) {
    return this._tileHandler.parseTileData(e2, t2);
  }
  async _applyStyleChanges() {
    this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._tileManager.clearCache();
    const e2 = this._styleChanges;
    try {
      await this._tileHandler.updateStyle(e2);
    } catch (n2) {
      s$3.getLogger(this.declaredClass).error("error applying vector-tiles style update", n2.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true;
    }
    const t2 = this._styleRepository, i2 = [];
    e2.forEach((e3) => {
      if (e3.type !== L$1.LAYER_REMOVED)
        return;
      const s2 = e3.data, r3 = t2.getLayerById(s2.layer);
      r3 && i2.push(r3.uid);
    });
    const r2 = [];
    let a2;
    e2.forEach((e3) => {
      const i3 = e3.type, s2 = e3.data;
      switch (i3) {
        case L$1.PAINTER_CHANGED:
          t2.setPaintProperties(s2.layer, s2.paint), a2 = s2.layer;
          break;
        case L$1.LAYOUT_CHANGED:
          t2.setLayoutProperties(s2.layer, s2.layout), a2 = s2.layer;
          break;
        case L$1.LAYER_REMOVED:
          return void t2.deleteStyleLayer(s2.layer);
        case L$1.LAYER_CHANGED:
          t2.setStyleLayer(s2.layer, s2.index), a2 = s2.layer.id;
          break;
        case L$1.SPRITES_CHANGED:
          this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(this._newSpriteSource)), this._newSpriteSource = null, a2 = null;
      }
      const l3 = t2.getLayerById(a2);
      l3 && r2.push(l3.uid);
    });
    const l2 = this._vectorTileContainer.children;
    if (i2.length > 0) {
      this._vectorTileContainer.deleteStyleLayers(i2);
      for (const e3 of l2)
        e3.deleteLayerData(i2);
    }
    if (this._fetchQueue.resume(), this._parseQueue.resume(), r2.length > 0) {
      const e3 = [];
      for (const t3 of l2) {
        const i3 = this._fetchQueue.push(t3.key).then((e4) => this._parseQueue.push({ key: t3.key, data: e4, styleLayerUIDs: r2 })).then((e4) => t3.setData(e4));
        e3.push(i3);
      }
      await Promise.all(e3);
    }
    this._styleChanges = [], this._isTileHandlerReady = true, this.notifyChange("updating"), this.requestUpdate();
  }
  async _loadStyle() {
    const { style: e2 } = this.layer.currentStyleInfo, t2 = y$2(e2);
    this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this.notifyChange("updating"), this._styleRepository = new l$7(t2), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = new AbortController();
    const { signal: s2 } = this._tileHandlerAbortController;
    try {
      this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, t2), await this._tileHandlerPromise;
    } catch (l2) {
      if (!j(l2))
        throw l2;
    }
    if (s2.aborted)
      return this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, this.notifyChange("updating"), void this.requestUpdate();
    const r2 = await this._tileHandler.spriteMosaic;
    this._vectorTileContainer.setStyleResources(r2, this._tileHandler.glyphMosaic, this._styleRepository), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, this.notifyChange("updating"), this.requestUpdate();
  }
  _createVectorTile(e2) {
    const t2 = this._tileInfoView.getTileBounds(u$4(), e2), i2 = this._tileInfoView.getTileResolution(e2.level);
    return new m$1(e2, i2, t2[0], t2[3], 512, 512, this._styleRepository);
  }
};
function Q(e2) {
  if (t$5(e2))
    return 0;
  switch (e2.type) {
    case "partial":
      return Object.keys(e2.diff).length;
    case "complete":
      return Math.max(Object.keys(e2.oldValue).length, Object.keys(e2.newValue).length);
    case "collection":
      return Object.keys(e2.added).length + Object.keys(e2.changed).length + Object.keys(e2.removed).length;
  }
}
e$7([y$3()], D.prototype, "_fetchQueue", void 0), e$7([y$3()], D.prototype, "_parseQueue", void 0), e$7([y$3()], D.prototype, "_isTileHandlerReady", void 0), e$7([y$3()], D.prototype, "fading", void 0), D = e$7([n$9("esri.views.2d.layers.VectorTileLayerView2D")], D);
const L = D;
export { L as default };
