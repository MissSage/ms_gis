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
import { g as s$2, s as s$3, aX as y } from "./index.js";
import { O as O$1 } from "./VertexAttribute.js";
function e() {
  const e2 = new Float32Array(4);
  return e2[3] = 1, e2;
}
function r$1(e2) {
  const r2 = new Float32Array(4);
  return r2[0] = e2[0], r2[1] = e2[1], r2[2] = e2[2], r2[3] = e2[3], r2;
}
function t$1(e2, r2, t2, n2) {
  const o2 = new Float32Array(4);
  return o2[0] = e2, o2[1] = r2, o2[2] = t2, o2[3] = n2, o2;
}
function n$1(e2, r2) {
  return new Float32Array(e2, r2, 4);
}
Object.freeze(Object.defineProperty({ __proto__: null, create: e, clone: r$1, fromValues: t$1, createView: n$1 }, Symbol.toStringTag, { value: "Module" }));
const t = true, o = { identifierOffset: 0, identifierLength: 10, versionOffset: 10, checksumOffset: 12, byteCount: 16 };
function r(e2, r2, n2) {
  return { identifier: String.fromCharCode.apply(null, new Uint8Array(e2, n2 + o.identifierOffset, o.identifierLength)), version: r2.getUint16(n2 + o.versionOffset, t), checksum: r2.getUint32(n2 + o.checksumOffset, t) };
}
const n = { sizeLo: 0, sizeHi: 4, minX: 8, minY: 16, minZ: 24, maxX: 32, maxY: 40, maxZ: 48, errorX: 56, errorY: 64, errorZ: 72, count: 80, reserved: 84, byteCount: 88 };
function i(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + n.sizeLo, t), sizeHi: e2.getUint32(o2 + n.sizeHi, t), minX: e2.getFloat64(o2 + n.minX, t), minY: e2.getFloat64(o2 + n.minY, t), minZ: e2.getFloat64(o2 + n.minZ, t), maxX: e2.getFloat64(o2 + n.maxX, t), maxY: e2.getFloat64(o2 + n.maxY, t), maxZ: e2.getFloat64(o2 + n.maxZ, t), errorX: e2.getFloat64(o2 + n.errorX, t), errorY: e2.getFloat64(o2 + n.errorY, t), errorZ: e2.getFloat64(o2 + n.errorZ, t), count: e2.getUint32(o2 + n.count, t), reserved: e2.getUint32(o2 + n.reserved, t) };
}
function c$1(t2) {
  const c2 = new DataView(t2, 0);
  let d2 = 0;
  const { identifier: l2, version: a2 } = r(t2, c2, d2);
  if (d2 += o.byteCount, l2 !== "LEPCC     ")
    throw new s$2("lepcc-decode-error", "Bad identifier");
  if (a2 > 1)
    throw new s$2("lepcc-decode-error", "Unknown version");
  const u2 = i(c2, d2);
  d2 += n.byteCount;
  if (u2.sizeHi * 2 ** 32 + u2.sizeLo !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad size");
  const f2 = new Float64Array(3 * u2.count), h2 = [], w2 = [], g2 = [], p = [];
  if (d2 = s$1(t2, d2, h2), d2 = s$1(t2, d2, w2), d2 = s$1(t2, d2, g2), d2 = s$1(t2, d2, p), d2 !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad length");
  let m2 = 0, U = 0;
  for (let e2 = 0; e2 < h2.length; e2++) {
    U += h2[e2];
    let t3 = 0;
    for (let o2 = 0; o2 < w2[e2]; o2++) {
      t3 += g2[m2];
      const e3 = p[m2];
      f2[3 * m2] = Math.min(u2.maxX, u2.minX + 2 * u2.errorX * t3), f2[3 * m2 + 1] = Math.min(u2.maxY, u2.minY + 2 * u2.errorY * U), f2[3 * m2 + 2] = Math.min(u2.maxZ, u2.minZ + 2 * u2.errorZ * e3), m2++;
    }
  }
  return { errorX: u2.errorX, errorY: u2.errorY, errorZ: u2.errorZ, result: f2 };
}
function s$1(e2, t2, o2) {
  const r2 = [];
  t2 = d$1(e2, t2, r2);
  const n2 = [];
  for (let i2 = 0; i2 < r2.length; i2++) {
    n2.length = 0, t2 = d$1(e2, t2, n2);
    for (let e3 = 0; e3 < n2.length; e3++)
      o2.push(n2[e3] + r2[i2]);
  }
  return t2;
}
function d$1(o2, r2, n2) {
  const i2 = new DataView(o2, r2), c2 = i2.getUint8(0), s2 = 31 & c2, d2 = !!(32 & c2), l2 = (192 & c2) >> 6;
  let a2 = 0;
  if (l2 === 0)
    a2 = i2.getUint32(1, t), r2 += 5;
  else if (l2 === 1)
    a2 = i2.getUint16(1, t), r2 += 3;
  else {
    if (l2 !== 2)
      throw new s$2("lepcc-decode-error", "Bad count type");
    a2 = i2.getUint8(1), r2 += 2;
  }
  if (d2)
    throw new s$2("lepcc-decode-error", "LUT not implemented");
  const u2 = Math.ceil(a2 * s2 / 8), f2 = new Uint8Array(o2, r2, u2);
  let h2 = 0, w2 = 0, g2 = 0;
  const p = -1 >>> 32 - s2;
  for (let e2 = 0; e2 < a2; e2++) {
    for (; w2 < s2; )
      h2 |= f2[g2] << w2, w2 += 8, g2 += 1;
    n2[e2] = h2 & p, h2 >>>= s2, w2 -= s2, w2 + s2 > 32 && (h2 |= f2[g2 - 1] >> 8 - w2);
  }
  return r2 + g2;
}
const l$1 = { sizeLo: 0, sizeHi: 4, count: 8, colorMapCount: 12, lookupMethod: 14, compressionMethod: 15, byteCount: 16 };
function a$1(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + l$1.sizeLo, t), sizeHi: e2.getUint32(o2 + l$1.sizeHi, t), count: e2.getUint32(o2 + l$1.count, t), colorMapCount: e2.getUint16(o2 + l$1.colorMapCount, t), lookupMethod: e2.getUint8(o2 + l$1.lookupMethod), compressionMethod: e2.getUint8(o2 + l$1.compressionMethod) };
}
function u$1(t2) {
  const n2 = new DataView(t2, 0);
  let i2 = 0;
  const { identifier: c2, version: s2 } = r(t2, n2, i2);
  if (i2 += o.byteCount, c2 !== "ClusterRGB")
    throw new s$2("lepcc-decode-error", "Bad identifier");
  if (s2 > 1)
    throw new s$2("lepcc-decode-error", "Unknown version");
  const d2 = a$1(n2, i2);
  i2 += l$1.byteCount;
  if (d2.sizeHi * 2 ** 32 + d2.sizeLo !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad size");
  if ((d2.lookupMethod === 2 || d2.lookupMethod === 1) && d2.compressionMethod === 0) {
    if (3 * d2.colorMapCount + d2.count + i2 !== t2.byteLength || d2.colorMapCount > 256)
      throw new s$2("lepcc-decode-error", "Bad count");
    const o2 = new Uint8Array(t2, i2, 3 * d2.colorMapCount), r2 = new Uint8Array(t2, i2 + 3 * d2.colorMapCount, d2.count), n3 = new Uint8Array(3 * d2.count);
    for (let e2 = 0; e2 < d2.count; e2++) {
      const t3 = r2[e2];
      n3[3 * e2] = o2[3 * t3], n3[3 * e2 + 1] = o2[3 * t3 + 1], n3[3 * e2 + 2] = o2[3 * t3 + 2];
    }
    return n3;
  }
  if (d2.lookupMethod === 0 && d2.compressionMethod === 0) {
    if (3 * d2.count + i2 !== t2.byteLength || d2.colorMapCount !== 0)
      throw new s$2("lepcc-decode-error", "Bad count");
    return new Uint8Array(t2, i2).slice();
  }
  if (d2.lookupMethod <= 2 && d2.compressionMethod === 1) {
    if (i2 + 3 !== t2.byteLength || d2.colorMapCount !== 1)
      throw new s$2("lepcc-decode-error", "Bad count");
    const o2 = n2.getUint8(i2), r2 = n2.getUint8(i2 + 1), c3 = n2.getUint8(i2 + 2), s3 = new Uint8Array(3 * d2.count);
    for (let e2 = 0; e2 < d2.count; e2++)
      s3[3 * e2] = o2, s3[3 * e2 + 1] = r2, s3[3 * e2 + 2] = c3;
    return s3;
  }
  throw new s$2("lepcc-decode-error", "Bad method " + d2.lookupMethod + "," + d2.compressionMethod);
}
const f$1 = { sizeLo: 0, sizeHi: 4, count: 8, scaleFactor: 12, bitsPerPoint: 14, reserved: 15, byteCount: 16 };
function h$1(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + f$1.sizeLo, t), sizeHi: e2.getUint32(o2 + f$1.sizeHi, t), count: e2.getUint32(o2 + f$1.count, t), scaleFactor: e2.getUint16(o2 + f$1.scaleFactor, t), bitsPerPoint: e2.getUint8(o2 + f$1.bitsPerPoint), reserved: e2.getUint8(o2 + f$1.reserved) };
}
function w(t2) {
  const n2 = new DataView(t2, 0);
  let i2 = 0;
  const { identifier: c2, version: s2 } = r(t2, n2, i2);
  if (i2 += o.byteCount, c2 !== "Intensity ")
    throw new s$2("lepcc-decode-error", "Bad identifier");
  if (s2 > 1)
    throw new s$2("lepcc-decode-error", "Unknown version");
  const l2 = h$1(n2, i2);
  i2 += f$1.byteCount;
  if (l2.sizeHi * 2 ** 32 + l2.sizeLo !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad size");
  const a2 = new Uint16Array(l2.count);
  if (l2.bitsPerPoint === 8) {
    if (l2.count + i2 !== t2.byteLength)
      throw new s$2("lepcc-decode-error", "Bad size");
    const o2 = new Uint8Array(t2, i2, l2.count);
    for (let e2 = 0; e2 < l2.count; e2++)
      a2[e2] = o2[e2] * l2.scaleFactor;
  } else if (l2.bitsPerPoint === 16) {
    if (2 * l2.count + i2 !== t2.byteLength)
      throw new s$2("lepcc-decode-error", "Bad size");
    const o2 = new Uint16Array(t2, i2, l2.count);
    for (let e2 = 0; e2 < l2.count; e2++)
      a2[e2] = o2[e2] * l2.scaleFactor;
  } else {
    const o2 = [];
    if (d$1(t2, i2, o2) !== t2.byteLength)
      throw new s$2("lepcc-decode-error", "Bad size");
    for (let e2 = 0; e2 < l2.count; e2++)
      a2[e2] = o2[e2] * l2.scaleFactor;
  }
  return a2;
}
const u = s$3.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
function a(t2, n2, r2) {
  let o2 = "", i2 = 0;
  for (; i2 < r2; ) {
    const u2 = t2[n2 + i2];
    if (u2 < 128)
      o2 += String.fromCharCode(u2), i2++;
    else if (u2 >= 192 && u2 < 224) {
      if (i2 + 1 >= r2)
        throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Two byte character was truncated.");
      const a2 = (31 & u2) << 6 | 63 & t2[n2 + i2 + 1];
      o2 += String.fromCharCode(a2), i2 += 2;
    } else if (u2 >= 224 && u2 < 240) {
      if (i2 + 2 >= r2)
        throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
      const a2 = (15 & u2) << 12 | (63 & t2[n2 + i2 + 1]) << 6 | 63 & t2[n2 + i2 + 2];
      o2 += String.fromCharCode(a2), i2 += 3;
    } else {
      if (!(u2 >= 240 && u2 < 248))
        throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Invalid multi byte sequence.");
      {
        if (i2 + 3 >= r2)
          throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
        const a2 = (7 & u2) << 18 | (63 & t2[n2 + i2 + 1]) << 12 | (63 & t2[n2 + i2 + 2]) << 6 | 63 & t2[n2 + i2 + 3];
        if (a2 >= 65536) {
          const e2 = 55296 + (a2 - 65536 >> 10), t3 = 56320 + (1023 & a2);
          o2 += String.fromCharCode(e2, t3);
        } else
          o2 += String.fromCharCode(a2);
        i2 += 4;
      }
    }
  }
  return o2;
}
function s(e2, t2) {
  const n2 = { byteOffset: 0, byteCount: 0, fields: Object.create(null) };
  let r2 = 0;
  for (let o2 = 0; o2 < t2.length; o2++) {
    const i2 = t2[o2], u2 = i2.valueType || i2.type, a2 = h[u2];
    n2.fields[i2.property] = a2(e2, r2), r2 += m[u2].BYTES_PER_ELEMENT;
  }
  return n2.byteCount = r2, n2;
}
function c(t2, n2, r2) {
  const o2 = [];
  let i2, u2, s2 = 0;
  for (u2 = 0; u2 < t2; u2 += 1) {
    if (i2 = n2[u2], i2 > 0) {
      if (o2.push(a(r2, s2, i2 - 1)), r2[s2 + i2 - 1] !== 0)
        throw new s$2("string-array-error", "Invalid string array: missing null termination.");
    } else
      o2.push(null);
    s2 += i2;
  }
  return o2;
}
function f(e2, t2) {
  return new m[t2.valueType](e2, t2.byteOffset, t2.count * t2.valuesPerElement);
}
function l(e2, t2) {
  return new Uint8Array(e2, t2.byteOffset, t2.byteCount);
}
function b(n2, r2, o2) {
  const i2 = r2.header != null ? s(n2, r2.header) : { byteOffset: 0, byteCount: 0, fields: { count: o2 } }, u2 = { header: i2, byteOffset: i2.byteCount, byteCount: 0, entries: Object.create(null) };
  let a2 = i2.byteCount;
  for (let s2 = 0; s2 < r2.ordering.length; s2++) {
    const n3 = r2.ordering[s2], o3 = y(r2[n3]);
    if (o3.count = i2.fields.count, o3.valueType === "String") {
      if (o3.byteOffset = a2, o3.byteCount = i2.fields[n3 + "ByteCount"], o3.encoding !== "UTF-8")
        throw new s$2("unsupported-encoding", "Unsupported String encoding.", { encoding: o3.encoding });
    } else {
      if (!A(o3.valueType))
        throw new s$2("unsupported-value-type", "Unsupported binary valueType", { valueType: o3.valueType });
      {
        const e2 = O(o3.valueType);
        a2 += a2 % e2 != 0 ? e2 - a2 % e2 : 0, o3.byteOffset = a2, o3.byteCount = e2 * o3.valuesPerElement * o3.count;
      }
    }
    a2 += o3.byteCount, u2.entries[n3] = o3;
  }
  return u2.byteCount = a2 - u2.byteOffset, u2;
}
function d(t2, n2, r2) {
  if (n2 !== t2 && u.error(`Invalid ${r2} buffer size
 expected: ${t2}, actual: ${n2})`), n2 < t2)
    throw new s$2("buffer-too-small", "Binary buffer is too small", { expectedSize: t2, actualSize: n2 });
}
function g(e2, t2) {
  const n2 = s(e2, t2 && t2.header);
  let r2 = n2.byteCount;
  const o2 = { isDraco: false, header: n2, byteOffset: n2.byteCount, byteCount: 0, vertexAttributes: {} }, i2 = n2.fields, u2 = i2.vertexCount != null ? i2.vertexCount : i2.count;
  for (const s2 of t2.ordering) {
    if (!t2.vertexAttributes[s2])
      continue;
    const e3 = __spreadProps(__spreadValues({}, t2.vertexAttributes[s2]), { byteOffset: r2, count: u2 }), n3 = C[s2] ? C[s2] : "_" + s2;
    o2.vertexAttributes[n3] = e3, r2 += O(e3.valueType) * e3.valuesPerElement * u2;
  }
  const a2 = i2.faceCount;
  if (t2.faces && a2) {
    o2.faces = {};
    for (const e3 of t2.ordering) {
      if (!t2.faces[e3])
        continue;
      const n3 = __spreadProps(__spreadValues({}, t2.faces[e3]), { byteOffset: r2, count: a2 });
      o2.faces[e3] = n3, r2 += O(n3.valueType) * n3.valuesPerElement * a2;
    }
  }
  const c2 = i2.featureCount;
  if (t2.featureAttributes && t2.featureAttributeOrder && c2) {
    o2.featureAttributes = {};
    for (const e3 of t2.featureAttributeOrder) {
      if (!t2.featureAttributes[e3])
        continue;
      const n3 = __spreadProps(__spreadValues({}, t2.featureAttributes[e3]), { byteOffset: r2, count: c2 });
      o2.featureAttributes[e3] = n3;
      r2 += (n3.valueType === "UInt64" ? 8 : O(n3.valueType)) * n3.valuesPerElement * c2;
    }
  }
  return d(r2, e2.byteLength, "geometry"), o2.byteCount = r2 - o2.byteOffset, o2;
}
const C = { position: O$1.POSITION, normal: O$1.NORMAL, color: O$1.COLOR, uv0: O$1.UV0, region: O$1.UVREGION };
function I(t2, n2, i2) {
  if (t2.encoding === "lepcc-rgb")
    return u$1(n2);
  if (t2.encoding === "lepcc-intensity")
    return w(n2);
  if (t2.encoding != null && t2.encoding !== "")
    throw new s$2("unknown-attribute-storage-info-encoding", "Unknown Attribute Storage Info Encoding");
  t2["attributeByteCounts "] && !t2.attributeByteCounts && (u.warn("Warning: Trailing space in 'attributeByteCounts '."), t2.attributeByteCounts = t2["attributeByteCounts "]), t2.ordering[0] === "ObjectIds" && t2.hasOwnProperty("objectIds") && (u.warn("Warning: Case error in objectIds"), t2.ordering[0] = "objectIds");
  const a2 = b(n2, t2, i2);
  d(a2.byteOffset + a2.byteCount, n2.byteLength, "attribute");
  const s2 = a2.entries.attributeValues || a2.entries.objectIds;
  if (s2) {
    if (s2.valueType === "String") {
      const e2 = a2.entries.attributeByteCounts, t3 = f(n2, e2), r2 = l(n2, s2);
      return c(e2.count, t3, r2);
    }
    return f(n2, s2);
  }
  throw new s$2("bad-attribute-storage-info", "Bad attributeStorageInfo specification.");
}
const m = { Float32: Float32Array, Float64: Float64Array, UInt8: Uint8Array, Int8: Int8Array, UInt16: Uint16Array, Int16: Int16Array, UInt32: Uint32Array, Int32: Int32Array }, h = { Float32: (e2, t2) => new DataView(e2, 0).getFloat32(t2, true), Float64: (e2, t2) => new DataView(e2, 0).getFloat64(t2, true), UInt8: (e2, t2) => new DataView(e2, 0).getUint8(t2), Int8: (e2, t2) => new DataView(e2, 0).getInt8(t2), UInt16: (e2, t2) => new DataView(e2, 0).getUint16(t2, true), Int16: (e2, t2) => new DataView(e2, 0).getInt16(t2, true), UInt32: (e2, t2) => new DataView(e2, 0).getUint32(t2, true), Int32: (e2, t2) => new DataView(e2, 0).getInt32(t2, true) };
function A(e2) {
  return m.hasOwnProperty(e2);
}
function O(e2) {
  return A(e2) ? m[e2].BYTES_PER_ELEMENT : 0;
}
export { I, c$1 as c, e, f, g, r$1 as r };
