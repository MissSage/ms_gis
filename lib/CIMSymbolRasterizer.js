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
import { aX as f, eC as f$1, f6 as u, oA as p, fo as U, aU as l$1 } from "./index.js";
import { l as m$1, s, G, q as ie, b as oe, O, W, T, u as c$1, k as t, v as r, m as me } from "./cimAnalyzer.js";
import { o, c } from "./Rasterizer.js";
import "vue";
import "./BidiEngine.js";
import "./alignmentUtils.js";
import "./definitions.js";
import "./number.js";
import "./Rect.js";
import "./callExpressionWithFeature.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./_commonjsHelpers.js";
import "./imageutils2.js";
import "./rasterizingUtils.js";
function l(e, t2, o2, r2) {
  if (e)
    if (e.type !== "CIMTextSymbol") {
      if (o2 && e.effects)
        for (const o3 of e.effects)
          y(o3, t2);
      if (e.symbolLayers)
        for (const o3 of e.symbolLayers)
          switch (o3.type) {
            case "CIMPictureMarker":
            case "CIMVectorMarker":
              m(o3, t2, r2);
              break;
            case "CIMPictureStroke":
            case "CIMSolidStroke":
              !(r2 == null ? void 0 : r2.preserveOutlineWidth) && o3.width && (o3.width *= t2);
              break;
            case "CIMPictureFill":
              o3.height && (o3.height *= t2), o3.offsetX && (o3.offsetX *= t2), o3.offsetY && (o3.offsetY *= t2);
              break;
            case "CIMHatchFill":
              l(o3.lineSymbol, t2, true, __spreadProps(__spreadValues({}, r2), { preserveOutlineWidth: false })), o3.offsetX && (o3.offsetX *= t2), o3.offsetY && (o3.offsetY *= t2), o3.separation && (o3.separation *= t2);
          }
    } else
      e.height != null && (e.height *= t2);
}
function m(e, t2, o2) {
  if (e && (e.markerPlacement && M$1(e.markerPlacement, t2), e.offsetX && (e.offsetX *= t2), e.offsetY && (e.offsetY *= t2), e.anchorPoint && e.anchorPointUnits === "Absolute" && (e.anchorPoint = { x: e.anchorPoint.x * t2, y: e.anchorPoint.y * t2 }), e.size = e.size != null ? e.size * t2 : 0, e.type === "CIMVectorMarker" && e.markerGraphics))
    for (const r2 of e.markerGraphics)
      e.scaleSymbolsProportionally || l(r2.symbol, t2, true, o2);
}
function M$1(e, t2) {
  switch (m$1(e) && e.offset && (e.offset *= t2), e.type) {
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAlongLineSameSize":
      if (e.customEndingOffset && (e.customEndingOffset *= t2), e.offsetAlongLine && (e.offsetAlongLine *= t2), e.placementTemplate && e.placementTemplate.length) {
        const o2 = e.placementTemplate.map((e2) => e2 * t2);
        e.placementTemplate = o2;
      }
      break;
    case "CIMMarkerPlacementAlongLineVariableSize":
      if (e.maxRandomOffset && (e.maxRandomOffset *= t2), e.placementTemplate && e.placementTemplate.length) {
        const o2 = e.placementTemplate.map((e2) => e2 * t2);
        e.placementTemplate = o2;
      }
      break;
    case "CIMMarkerPlacementOnLine":
      e.startPointOffset && (e.startPointOffset *= t2);
      break;
    case "CIMMarkerPlacementAtExtremities":
      e.offsetAlongLine && (e.offsetAlongLine *= t2);
      break;
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementOnVertices":
      break;
    case "CIMMarkerPlacementAtRatioPositions":
      e.beginPosition && (e.beginPosition *= t2), e.endPosition && (e.endPosition *= t2);
      break;
    case "CIMMarkerPlacementPolygonCenter":
      e.offsetX && (e.offsetX *= t2), e.offsetY && (e.offsetY *= t2);
      break;
    case "CIMMarkerPlacementInsidePolygon":
      e.offsetX && (e.offsetX *= t2), e.offsetY && (e.offsetY *= t2), e.stepX && (e.stepX *= t2), e.stepY && (e.stepY *= t2);
  }
}
function y(e, t2) {
  switch (e.type) {
    case "CIMGeometricEffectArrow":
    case "CIMGeometricEffectDonut":
      e.width && (e.width *= t2);
      break;
    case "CIMGeometricEffectBuffer":
      e.size && (e.size *= t2);
      break;
    case "CIMGeometricEffectCut":
      e.beginCut && (e.beginCut *= t2), e.endCut && (e.endCut *= t2), e.middleCut && (e.middleCut *= t2);
      break;
    case "CIMGeometricEffectDashes":
      if (e.customEndingOffset && (e.customEndingOffset *= t2), e.offsetAlongLine && (e.offsetAlongLine *= t2), e.dashTemplate && e.dashTemplate.length) {
        const o2 = e.dashTemplate.map((e2) => e2 * t2);
        e.dashTemplate = o2;
      }
      break;
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectJog":
    case "CIMGeometricEffectRadial":
      e.length && (e.length *= t2);
      break;
    case "CIMGeometricEffectMove":
      e.offsetX && (e.offsetX *= t2), e.offsetY && (e.offsetY *= t2);
      break;
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      e.offset && (e.offset *= t2);
      break;
    case "CIMGeometricEffectRegularPolygon":
      e.radius && (e.radius *= t2);
      break;
    case "CIMGeometricEffectTaperedPolygon":
      e.fromWidth && (e.fromWidth *= t2), e.length && (e.length *= t2), e.toWidth && (e.toWidth *= t2);
      break;
    case "CIMGeometricEffectWave":
      e.amplitude && (e.amplitude *= t2), e.period && (e.period *= t2);
  }
}
var M;
!function(e) {
  e.Legend = "legend", e.Preview = "preview";
}(M || (M = {}));
const _ = (e) => e && e.scaleFactor ? e.scaleFactor : 1, v = 96 / 72;
class z {
  constructor(e, t2) {
    this._spatialReference = e, this._avoidSDF = t2, this._resourceCache = new Map(), this._imageDataCanvas = null, this._pictureMarkerCache = new Map(), this._textRasterizer = new s(), this._cimResourceManager = new o(), this._rasterizer = new c(this._cimResourceManager);
  }
  get resourceManager() {
    return this._cimResourceManager;
  }
  async rasterizeCIMSymbolAsync(e, t2, a, i, r2, s2, o2, n) {
    if (!e)
      return null;
    const { data: g } = e;
    if (!g || g.type !== "CIMSymbolReference" || !g.symbol)
      return null;
    const { symbol: u2 } = g;
    s2 || (s2 = G(u2));
    const d = await ie.resolveSymbolOverrides(g, t2, this._spatialReference, r2, s2, o2, n);
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const p2 = this._imageDataCanvas, y2 = this._cimResourceManager, w = [];
    oe.fetchResources(d, y2, w), w.length > 0 && await Promise.all(w);
    const { width: C, height: M2 } = a, _2 = I(s2, C, M2, i), z2 = oe.getEnvelope(d, _2, y2);
    if (!z2)
      return null;
    const x2 = (window.devicePixelRatio || 1) * v;
    let R = 1, b = 0, P = 0;
    switch (u2.type) {
      case "CIMPointSymbol":
      case "CIMTextSymbol":
        {
          let e2 = 1;
          z2.width > C && (e2 = C / z2.width);
          let t3 = 1;
          z2.height > M2 && (t3 = M2 / z2.height), i === "preview" && (z2.width < C && (e2 = C / z2.width), z2.height < M2 && (t3 = M2 / z2.height)), R = Math.min(e2, t3), b = z2.x + z2.width / 2, P = z2.y + z2.height / 2;
        }
        break;
      case "CIMLineSymbol":
        {
          let e2 = 1;
          z2.height > M2 && (e2 = M2 / z2.height), R = e2, P = z2.y + z2.height / 2;
          const t3 = z2.x * R + C / 2, a2 = (z2.x + z2.width) * R + C / 2;
          if (t3 < 0) {
            const { paths: e3 } = _2;
            e3[0][0][0] -= t3;
          }
          if (a2 > C) {
            const { paths: e3 } = _2;
            e3[0][2][0] -= a2 - C;
          }
        }
        break;
      case "CIMPolygonSymbol": {
        b = z2.x + z2.width / 2, P = z2.y + z2.height / 2;
        const e2 = z2.x * R + C / 2, t3 = (z2.x + z2.width) * R + C / 2, a2 = z2.y * R + M2 / 2, i2 = (z2.y + z2.height) * R + M2 / 2, { rings: r3 } = _2;
        e2 < 0 && (r3[0][0][0] -= e2, r3[0][3][0] -= e2, r3[0][4][0] -= e2), a2 < 0 && (r3[0][0][1] += a2, r3[0][1][1] += a2, r3[0][4][1] += a2), t3 > C && (r3[0][1][0] -= t3 - C, r3[0][2][0] -= t3 - C), i2 > M2 && (r3[0][2][1] += i2 - M2, r3[0][3][1] += i2 - M2);
      }
    }
    p2.width = C * x2, p2.height = M2 * x2;
    const D = 1;
    p2.width += 2 * D, p2.height += 2 * D;
    const S = p2.getContext("2d"), k = O.createIdentity();
    k.translate(-b, -P), k.scale(R * x2, -R * x2), k.translate(C * x2 / 2 + D, M2 * x2 / 2 + D), S.clearRect(0, 0, p2.width, p2.height);
    return new W(S, y2, k, true).drawSymbol(d, _2), S.getImageData(0, 0, p2.width, p2.height);
  }
  async analyzeCIMSymbol(e, t2, a, r2, o2) {
    const n = [], c2 = t2 ? { geometryType: r2, spatialReference: this._spatialReference, fields: t2 } : null;
    let h;
    await T(e.data, c2, this._cimResourceManager, n, this._avoidSDF), f(o2);
    for (const i of n)
      i.cim.type !== "CIMPictureMarker" && i.cim.type !== "CIMPictureFill" && i.cim.type !== "CIMPictureStroke" || (h || (h = []), h.push(this._fetchPictureMarkerResource(i, o2))), a && i.type === "text" && typeof i.text == "string" && i.text.includes("[") && (i.text = c$1(a, i.text, i.cim.textCase));
    return h && await Promise.all(h), n;
  }
  rasterizeCIMSymbol3D(e, t$1, a, i, r2, s2) {
    const o2 = [];
    for (const n of e) {
      i && typeof i.scaleFactor == "function" && (i.scaleFactor = i.scaleFactor(t$1, r2, s2));
      const e2 = this._getRasterizedResource(n, t$1, a, i, r2, s2);
      if (!e2)
        continue;
      let c2 = 0, h = e2.anchorX || 0, l2 = e2.anchorY || 0, m2 = false, g = 0, u2 = 0;
      if (a === "esriGeometryPoint") {
        const e3 = _(i);
        if (g = t(n.offsetX, t$1, r2, s2) * e3 || 0, u2 = t(n.offsetY, t$1, r2, s2) * e3 || 0, n.type === "marker")
          c2 = t(n.rotation, t$1, r2, s2) || 0, m2 = !!n.rotateClockwise && n.rotateClockwise;
        else if (n.type === "text") {
          if (c2 = t(n.angle, t$1, r2, s2) || 0, n.horizontalAlignment !== void 0)
            switch (n.horizontalAlignment) {
              case "left":
                h = -0.5;
                break;
              case "right":
                h = 0.5;
                break;
              default:
                h = 0;
            }
          if (n.verticalAlignment !== void 0)
            switch (n.verticalAlignment) {
              case "top":
                l2 = 0.5;
                break;
              case "bottom":
                l2 = -0.5;
                break;
              case "baseline":
                l2 = -0.25;
                break;
              default:
                l2 = 0;
            }
        }
      }
      e2 != null && o2.push({ angle: c2, rotateClockWise: m2, anchorX: h, anchorY: l2, offsetX: g, offsetY: u2, rasterizedResource: e2 });
    }
    return this.getSymbolImage(o2);
  }
  getSymbolImage(e) {
    const t2 = document.createElement("canvas"), i = f$1(t2.getContext("2d"));
    let s2 = 0, o2 = 0, n = 0, c2 = 0;
    const h = [];
    for (let a = 0; a < e.length; a++) {
      const t3 = e[a], l3 = t3.rasterizedResource;
      if (!l3)
        continue;
      const m3 = l3.size, g2 = t3.offsetX, u$1 = t3.offsetY, f2 = t3.anchorX, d = t3.anchorY, p2 = t3.rotateClockWise || false;
      let y2 = t3.angle, w = u(g2) - m3[0] * (0.5 + f2), C = u(u$1) - m3[1] * (0.5 + d), M2 = w + m3[0], _2 = C + m3[1];
      if (y2) {
        p2 && (y2 = -y2);
        const e2 = Math.sin(y2 * Math.PI / 180), t4 = Math.cos(y2 * Math.PI / 180), a2 = w * t4 - C * e2, i2 = w * e2 + C * t4, r2 = w * t4 - _2 * e2, s3 = w * e2 + _2 * t4, o3 = M2 * t4 - _2 * e2, n2 = M2 * e2 + _2 * t4, c3 = M2 * t4 - C * e2, h2 = M2 * e2 + C * t4;
        w = Math.min(a2, r2, o3, c3), C = Math.min(i2, s3, n2, h2), M2 = Math.max(a2, r2, o3, c3), _2 = Math.max(i2, s3, n2, h2);
      }
      s2 = w < s2 ? w : s2, o2 = C < o2 ? C : o2, n = M2 > n ? M2 : n, c2 = _2 > c2 ? _2 : c2;
      const v2 = i.createImageData(l3.size[0], l3.size[1]);
      v2.data.set(new Uint8ClampedArray(l3.image.buffer));
      const z2 = { offsetX: g2, offsetY: u$1, rotateClockwise: p2, angle: y2, rasterizedImage: v2, anchorX: f2, anchorY: d };
      h.push(z2);
    }
    t2.width = n - s2, t2.height = c2 - o2;
    const l2 = -s2, m2 = c2;
    for (let a = 0; a < h.length; a++) {
      const e2 = h[a], t3 = this._imageDataToCanvas(e2.rasterizedImage), s3 = e2.rasterizedImage.width, o3 = e2.rasterizedImage.height, n2 = l2 - s3 * (0.5 + e2.anchorX), c3 = m2 - o3 * (0.5 - e2.anchorY);
      if (e2.angle) {
        const a2 = (360 - e2.angle) * Math.PI / 180;
        i.save(), i.translate(u(e2.offsetX), -u(e2.offsetY)), i.translate(l2, m2), i.rotate(a2), i.translate(-l2, -m2), i.drawImage(t3, n2, c3), i.restore();
      } else
        i.drawImage(t3, n2 + u(e2.offsetX), c3 - u(e2.offsetY));
    }
    const g = new p({ x: l2 / t2.width - 0.5, y: m2 / t2.height - 0.5 });
    return { imageData: t2.width !== 0 && t2.height !== 0 ? i.getImageData(0, 0, t2.width, t2.height) : i.createImageData(1, 1), anchorPosition: g };
  }
  async _fetchPictureMarkerResource(e, a) {
    const i = e.materialHash;
    if (!this._pictureMarkerCache.get(i)) {
      const r2 = (await U(e.cim.url, { responseType: "image", signal: a && a.signal })).data;
      this._pictureMarkerCache.set(i, r2);
    }
  }
  _imageDataToCanvas(e) {
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const t2 = this._imageDataCanvas, i = f$1(t2.getContext("2d"));
    return t2.width = e.width, t2.height = e.height, i.putImageData(e, 0, 0), t2;
  }
  _imageTo32Array(t2, i, r2, s2) {
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const o2 = this._imageDataCanvas, n = f$1(o2.getContext("2d"));
    if (o2.width = i, o2.height = r2, n.drawImage(t2, 0, 0, i, r2), s2) {
      n.save();
      const a = new l$1(s2);
      n.fillStyle = a.toHex(), n.globalCompositeOperation = "multiply", n.fillRect(0, 0, i, r2), n.globalCompositeOperation = "destination-atop", n.drawImage(t2, 0, 0, i, r2), n.restore();
    }
    return new Uint32Array(n.getImageData(0, 0, i, r2).data.buffer);
  }
  _getRasterizedResource(e, t$1, i, r2, s2, o2) {
    let n, c2, h;
    const l2 = null, m$12 = null;
    if (e.type === "text")
      return this._rasterizeTextResource(e, t$1, r2, s2, o2);
    ({ analyzedCIM: n, hash: c2 } = x(e, t$1, s2, o2));
    const g = _(r2);
    if (e.cim.type === "CIMPictureMarker") {
      const i2 = t(e.size, t$1, s2, o2) * g, { image: r3, width: n2, height: c3 } = f$1(this._getPictureResource(e, i2, t(e.color, t$1, s2, o2)));
      return h = { image: r3, size: [n2, c3], sdf: false, simplePattern: false, anchorX: e.anchorPoint ? e.anchorPoint.x : 0, anchorY: e.anchorPoint ? e.anchorPoint.y : 0 }, h;
    }
    m(n, g, { preserveOutlineWidth: false });
    const u2 = n;
    c2 += i, r2 && (c2 += JSON.stringify(r2));
    const f2 = this._resourceCache;
    return f2.has(c2) ? f2.get(c2) : (h = this._rasterizer.rasterizeJSONResource({ cim: u2, type: e.type, url: e.url, mosaicHash: c2, size: l2, path: m$12 }, window.devicePixelRatio || 1, this._avoidSDF), f2.set(c2, h), h);
  }
  _rasterizeTextResource(e, t$1, a, i, r$1) {
    const s2 = _(a), o2 = t(e.text, t$1, i, r$1);
    if (!o2 || o2.length === 0)
      return null;
    const n = t(e.fontName, t$1, i, r$1), c2 = t(e.style, t$1, i, r$1), h = t(e.weight, t$1, i, r$1), l2 = t(e.decoration, t$1, i, r$1), m2 = t(e.size, t$1, i, r$1) * s2, g = t(e.horizontalAlignment, t$1, i, r$1), u2 = t(e.verticalAlignment, t$1, i, r$1), f2 = r(t(e.color, t$1, i, r$1)), d = r(t(e.outlineColor, t$1, i, r$1)), w = { color: f2, size: m2, horizontalAlignment: g, verticalAlignment: u2, font: { family: n, style: c2, weight: h, decoration: l2 }, halo: { size: t(e.outlineSize, t$1, i, r$1) || 0, color: d, style: c2 }, pixelRatio: 1, premultiplyColors: !this._avoidSDF };
    return this._textRasterizer.rasterizeText(o2, w);
  }
  _getPictureResource(e, t2, a) {
    const i = this._pictureMarkerCache.get(e.materialHash);
    if (!i)
      return null;
    const s2 = i.height / i.width, o2 = t2 ? s2 > 1 ? u(t2) : u(t2) / s2 : i.width, n = t2 ? s2 > 1 ? u(t2) * s2 : u(t2) : i.height;
    return { image: this._imageTo32Array(i, o2, n, a), width: o2, height: n };
  }
}
function I(e, t2, a, i) {
  const r2 = 1, s2 = -t2 / 2 + r2, o2 = t2 / 2 - r2, n = a / 2 - r2, c2 = -a / 2 + r2;
  switch (e) {
    case "esriGeometryPoint":
      return { x: 0, y: 0 };
    case "esriGeometryPolyline":
      return { paths: [[[s2, 0], [0, 0], [o2, 0]]] };
    default:
      return i === "legend" ? { rings: [[[s2, n], [o2, 0], [o2, c2], [s2, c2], [s2, n]]] } : { rings: [[[s2, n], [o2, n], [o2, c2], [s2, c2], [s2, n]]] };
  }
}
function x(e, t2, a, i) {
  let r2, s2;
  if (typeof e.materialHash == "function") {
    r2 = (0, e.materialHash)(t2, a, i), s2 = me(e.cim, e.materialOverrides);
  } else
    r2 = e.materialHash, s2 = e.cim;
  return { analyzedCIM: s2, hash: r2 };
}
export { z as CIMSymbolRasterizer, M as GeometryStyle };
