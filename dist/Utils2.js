import { t, b2 as e, s as s$1, g as s$2 } from "./index.js";
import { a as e$1, n as n$1 } from "./enums2.js";
import { F as F$1, G as G$1, C as C$1 } from "./enums.js";
import "./Texture.js";
import { t as t$1 } from "./VertexElementDescriptor.js";
const n = new Float32Array(1);
new Uint32Array(n.buffer);
function M$1(n2) {
  return [255 & n2, (65280 & n2) >>> 8, (16711680 & n2) >>> 16, (4278190080 & n2) >>> 24];
}
function w(n2, r) {
  return 65535 & n2 | r << 16;
}
function x$1(n2, r, t2, u) {
  return 255 & n2 | (255 & r) << 8 | (255 & t2) << 16 | u << 24;
}
function i(r, n2 = 0, t2 = false) {
  const o = r[n2 + 3];
  return r[n2 + 0] *= o, r[n2 + 1] *= o, r[n2 + 2] *= o, t2 || (r[n2 + 3] *= 255), r;
}
function f(r) {
  if (!r)
    return 0;
  const { r: t2, g: o, b: u, a: i2 } = r;
  return x$1(t2 * i2, o * i2, u * i2, 255 * i2);
}
function s(r) {
  if (!r)
    return 0;
  const [t2, o, u, i2] = r;
  return x$1(t2 * (i2 / 255), o * (i2 / 255), u * (i2 / 255), i2);
}
function a(n2, t$12, o = 0) {
  if (t(t$12))
    return n2[o + 0] = 0, n2[o + 1] = 0, n2[o + 2] = 0, void (n2[o + 3] = 0);
  const { r: u, g: i2, b: c, a: e2 } = t$12;
  n2[o + 0] = u * e2 / 255, n2[o + 1] = i2 * e2 / 255, n2[o + 2] = c * e2 / 255, n2[o + 3] = e2;
}
var E$1, T, I, L, A$1, _$1, O$1, S$1;
!function(E2) {
  E2[E2.FILL = 0] = "FILL", E2[E2.LINE = 1] = "LINE", E2[E2.MARKER = 2] = "MARKER", E2[E2.TEXT = 3] = "TEXT", E2[E2.LABEL = 4] = "LABEL";
}(E$1 || (E$1 = {})), function(E2) {
  E2[E2.SUCCEEDED = 0] = "SUCCEEDED", E2[E2.FAILED_OUT_OF_MEMORY = 1] = "FAILED_OUT_OF_MEMORY";
}(T || (T = {})), function(E2) {
  E2[E2.NONE = 0] = "NONE", E2[E2.MAP = 1] = "MAP", E2[E2.LABEL = 2] = "LABEL", E2[E2.LABEL_ALPHA = 4] = "LABEL_ALPHA", E2[E2.HITTEST = 8] = "HITTEST", E2[E2.HIGHLIGHT = 16] = "HIGHLIGHT", E2[E2.CLIP = 32] = "CLIP", E2[E2.DEBUG = 64] = "DEBUG", E2[E2.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(I || (I = {})), function(E2) {
  E2[E2.SIZE = 0] = "SIZE", E2[E2.COLOR = 1] = "COLOR", E2[E2.OPACITY = 2] = "OPACITY", E2[E2.ROTATION = 3] = "ROTATION";
}(L || (L = {})), function(E2) {
  E2[E2.NONE = 0] = "NONE", E2[E2.OPACITY = 1] = "OPACITY", E2[E2.COLOR = 2] = "COLOR", E2[E2.ROTATION = 4] = "ROTATION", E2[E2.SIZE_MINMAX_VALUE = 8] = "SIZE_MINMAX_VALUE", E2[E2.SIZE_SCALE_STOPS = 16] = "SIZE_SCALE_STOPS", E2[E2.SIZE_FIELD_STOPS = 32] = "SIZE_FIELD_STOPS", E2[E2.SIZE_UNIT_VALUE = 64] = "SIZE_UNIT_VALUE";
}(A$1 || (A$1 = {})), function(E2) {
  E2[E2.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", E2[E2.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", E2[E2.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", E2[E2.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(_$1 || (_$1 = {})), function(E2) {
  E2[E2.SPRITE = 0] = "SPRITE", E2[E2.GLYPH = 1] = "GLYPH";
}(O$1 || (O$1 = {})), function(E2) {
  E2[E2.DEFAULT = 0] = "DEFAULT", E2[E2.SIMPLE = 1] = "SIMPLE", E2[E2.DOT_DENSITY = 2] = "DOT_DENSITY", E2[E2.OUTLINE_FILL = 3] = "OUTLINE_FILL", E2[E2.OUTLINE_FILL_SIMPLE = 4] = "OUTLINE_FILL_SIMPLE", E2[E2.HEATMAP = 5] = "HEATMAP", E2[E2.PIE_CHART = 6] = "PIE_CHART";
}(S$1 || (S$1 = {}));
class h {
  constructor() {
    this.color = [0, 0, 0, 0], this.haloColor = [0, 0, 0, 0], this.haloSize = 0, this.size = 12, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
  }
  acquire(o, h2, s2, t2, i2, l, r, e2, c) {
    this.color = o, this.haloColor = h2, this.haloSize = s2, this.size = t2, this.angle = i2, this.offsetX = l, this.offsetY = r, this.hAnchor = e2, this.vAnchor = c;
  }
  release() {
    this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0, this.haloColor[0] = this.haloColor[1] = this.haloColor[2] = this.haloColor[3] = 0, this.haloSize = 0, this.size = 0, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
  }
}
h.pool = new e(h);
const E = s$1.getLogger("esri.views.2d.engine.webgl.Utils"), S = "geometry", A = [{ name: S, strideInBytes: 36 }], N = [{ name: S, strideInBytes: 12 }], M = [{ name: S, strideInBytes: 36 }], D = [{ name: S, strideInBytes: 24 }], _ = [{ name: S, strideInBytes: 12 }], U = [{ name: S, strideInBytes: 40 }], v = [{ name: S, strideInBytes: 36 }], R = [{ name: S, strideInBytes: 36 }];
function B(e2) {
  const t2 = {};
  for (const r of e2)
    t2[r.name] = r.strideInBytes;
  return t2;
}
const C = B(A), b = B(N), O = B(M), F = B(D), x = B(_), z = B(U), P = B(v), j = B(R);
function G(e2, t2) {
  switch (e2) {
    case E$1.MARKER:
      return t2 === S$1.HEATMAP ? b : C;
    case E$1.FILL:
      switch (t2) {
        case S$1.DOT_DENSITY:
          return x;
        case S$1.SIMPLE:
        case S$1.OUTLINE_FILL_SIMPLE:
          return F;
        default:
          return O;
      }
    case E$1.LINE:
      return z;
    case E$1.TEXT:
      return P;
    case E$1.LABEL:
      return j;
  }
}
const $ = [S], k = [S], V = [S], Y = [S], H = [S];
function q(e2) {
  switch (e2) {
    case E$1.MARKER:
      return $;
    case E$1.FILL:
      return k;
    case E$1.LINE:
      return V;
    case E$1.TEXT:
      return Y;
    case E$1.LABEL:
      return H;
  }
}
function X(e2) {
  switch (e2 % 4) {
    case 0:
    case 2:
      return 4;
    case 1:
    case 3:
      return 1;
  }
}
function K(e2, t2) {
  switch (t2 % 4) {
    case 0:
    case 2:
      return new Uint32Array(Math.floor(e2 * t2 / 4));
    case 1:
    case 3:
      return new Uint8Array(e2 * t2);
  }
}
function W(e2, t2) {
  switch (t2 % 4) {
    case 0:
    case 2:
      return new Uint32Array(e2);
    case 1:
    case 3:
      return new Uint8Array(e2);
  }
}
function J(e2) {
  return e2 != null;
}
function Q(e2) {
  return typeof e2 == "number";
}
function ee(t2) {
  switch (t2) {
    case "butt":
      return e$1.BUTT;
    case "round":
      return e$1.ROUND;
    case "square":
      return e$1.SQUARE;
    default:
      return E.error(new s$2("mapview-invalid-type", `Cap type ${t2} is not a valid option. Defaulting to round`)), e$1.ROUND;
  }
}
function te(t2) {
  switch (t2) {
    case "miter":
      return n$1.MITER;
    case "bevel":
      return n$1.BEVEL;
    case "round":
      return n$1.ROUND;
    default:
      return E.error(new s$2("mapview-invalid-type", `Join type ${t2} is not a valid option. Defaulting to round`)), n$1.ROUND;
  }
}
function re(e2) {
  switch (e2) {
    case "opacity":
      return L.OPACITY;
    case "color":
      return L.COLOR;
    case "rotation":
      return L.ROTATION;
    case "size":
      return L.SIZE;
    default:
      return E.error(`Cannot interpret unknown vv: ${e2}`), null;
  }
}
function ae(e2, t2, r, n2, a2, s2, i2) {
  for (const c in s2) {
    const t3 = s2[c].stride, n3 = X(t3), i3 = s2[c].data, o2 = r[c].data, u = t3 * a2.vertexCount / n3, l = t3 * e2 / n3, m = t3 * a2.vertexFrom / n3;
    for (let e3 = 0; e3 < u; ++e3)
      o2[e3 + l] = i3[e3 + m];
  }
  const o = a2.indexCount;
  for (let c = 0; c < o; ++c)
    n2[c + t2] = i2[c + a2.indexFrom] - a2.vertexFrom + e2;
}
const se = { [S]: F$1.STATIC_DRAW };
function ie(e2, t2) {
  const r = [];
  for (let n2 = 0; n2 < 5; ++n2) {
    const a2 = q(n2), s2 = {};
    for (const e3 of a2)
      s2[e3] = { data: t2(n2, e3) };
    r.push({ data: e2(n2), buffers: s2 });
  }
  return r;
}
function ue(e2) {
  switch (e2) {
    case C$1.BYTE:
    case C$1.UNSIGNED_BYTE:
      return 1;
    case C$1.SHORT:
    case C$1.UNSIGNED_SHORT:
      return 2;
    case C$1.FLOAT:
    case C$1.INT:
    case C$1.UNSIGNED_INT:
      return 4;
  }
}
function le(t2) {
  switch (t2) {
    case G$1.UNSIGNED_BYTE:
      return 1;
    case G$1.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case G$1.FLOAT:
      return 4;
    default:
      return void E.error(new s$2("webgl-utils", `Unable to handle type ${t2}`));
  }
}
function me(t2) {
  switch (t2) {
    case G$1.UNSIGNED_BYTE:
      return Uint8Array;
    case G$1.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case G$1.FLOAT:
      return Float32Array;
    default:
      return void E.error(new s$2("webgl-utils", `Unable to handle type ${t2}`));
  }
}
function fe(e2) {
  const t2 = {};
  for (const r in e2) {
    const n2 = e2[r];
    let a2 = 0;
    t2[r] = n2.map((e3) => {
      const t3 = new t$1(e3.name, e3.count, e3.type, a2, 0, e3.normalized || false);
      return a2 += e3.count * ue(e3.type), t3;
    }), t2[r].forEach((e3) => e3.stride = a2);
  }
  return t2;
}
const pe = (e2) => {
  const t2 = new Map();
  for (const r in e2)
    for (const n2 of e2[r])
      t2.set(n2.name, n2.location);
  return t2;
}, de = (e2) => {
  const t2 = {};
  for (const r in e2) {
    const n2 = e2[r];
    t2[r] = n2.length ? n2[0].stride : 0;
  }
  return t2;
}, ye = new Map(), ge = (e2, t2) => {
  if (!ye.has(e2)) {
    const r = fe(t2), n2 = { strides: de(r), bufferLayouts: r, attributes: pe(t2) };
    ye.set(e2, n2);
  }
  return ye.get(e2);
};
function he(e2) {
  e2(E$1.FILL), e2(E$1.LINE), e2(E$1.MARKER), e2(E$1.TEXT), e2(E$1.LABEL);
}
const Ie = (e2) => "path" in e2 && Re(e2.path), Te = (e2) => "url" in e2 && e2.url || "imageData" in e2 && e2.imageData, Ee = (e2) => "imageData" in e2 && e2.imageData && "contentType" in e2 && e2.contentType ? `data:${e2.contentType};base64,${e2.imageData}` : "url" in e2 ? e2.url : null, Se = (e2) => e2.startsWith("data:image/gif"), we = (e2) => "url" in e2 && e2.url && (e2.url.includes(".gif") || Se(e2.url)) || "contentType" in e2 && e2.contentType === "image/gif" || "imageData" in e2 && Se(e2.imageData), Le = (e2) => e2.startsWith("data:image/png"), Ae = (e2) => "url" in e2 && e2.url && (e2.url.includes(".png") || Le(e2.url)) || "contentType" in e2 && e2.contentType === "image/png" || "imageData" in e2 && Le(e2.imageData), Ne = (e2) => e2.type && e2.type.toLowerCase().includes("3d");
function Me(e2) {
  switch (e2.type) {
    case "line": {
      const t2 = e2;
      return t2.cim.type === "CIMSolidStroke" && !t2.dashTemplate;
    }
    case "fill":
      return e2.cim.type === "CIMSolidFill";
    case "esriSFS":
      return e2.style === "esriSFSSolid" || e2.style === "esriSFSNull";
    case "esriSLS":
      return e2.style === "esriSLSSolid" || e2.style === "esriSLSNull";
    default:
      return false;
  }
}
const De = (e2) => e2.includes("data:image/svg+xml");
function _e(e2) {
  switch ("cim" in e2 ? e2.cim.type : e2.type) {
    case "esriSMS":
    case "esriPMS":
    case "CIMPointSymbol":
      return false;
    case "CIMVectorMarker":
    case "CIMCharacterMarker":
    case "CIMPictureMarker":
      return Be(e2);
    default:
      return true;
  }
}
function Ue(e2) {
  const t2 = "maxVVSize" in e2 && e2.maxVVSize, r = "width" in e2 && e2.width || "size" in e2 && e2.size || 0;
  return t2 || r;
}
function ve(e2) {
  const t2 = [];
  for (let r = 0; r < e2.length; r++)
    t2.push(e2.charCodeAt(r));
  return t2;
}
const Re = (e2) => !!e2 && (e2 = e2.trim(), !!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e2) && /[\dz]$/i.test(e2) && e2.length > 4)), Be = (e2) => {
  var _a, _b;
  return e2.type === "fill" && ((_b = (_a = e2 == null ? void 0 : e2.cim) == null ? void 0 : _a.markerPlacement) == null ? void 0 : _b.type) === "CIMMarkerPlacementInsidePolygon";
};
export { Ae as A, Be as B, De as D, Ee as E, G, I, J, K, Me as M, Ne as N, O$1 as O, Q, S$1 as S, Te as T, Ue as U, W, X, _e as _, Ie as a, E$1 as b, ae as c, a as d, w as e, s as f, ge as g, he as h, ie as i, f as j, ee as k, A$1 as l, me as m, M$1 as n, le as o, i as p, _$1 as q, re as r, se as s, te as t, ve as v, we as w, x$1 as x };
