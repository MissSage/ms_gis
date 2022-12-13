import { a as r, t, gn as o, aK as k, fa as xn, go as E } from "./index.js";
import { S } from "./quat.js";
import { I, g, f as f$1, c as c$2, e } from "./I3SBinaryReader.js";
import { r as r$1, n } from "./vec3f32.js";
import { a as a$1, b as a$2, d as d$1 } from "./PointCloudUniqueValueRenderer.js";
import "vue";
import "./mat3f64.js";
import "./quatf64.js";
import "./VertexAttribute.js";
function f(e2, o2, n2, s) {
  const { rendererJSON: i, isRGBRenderer: u } = e2;
  let f2 = null, c2 = null;
  if (o2 && u)
    f2 = o2;
  else if (o2 && i.type === "pointCloudUniqueValueRenderer") {
    c2 = a$1.fromJSON(i);
    const e3 = c2.colorUniqueValueInfos;
    f2 = new Uint8Array(3 * s);
    const r2 = p$1(c2.fieldTransformType);
    for (let t2 = 0; t2 < s; t2++) {
      const l = (r2 ? r2(o2[t2]) : o2[t2]) + "";
      for (let o3 = 0; o3 < e3.length; o3++)
        if (e3[o3].values.includes(l)) {
          f2[3 * t2] = e3[o3].color.r, f2[3 * t2 + 1] = e3[o3].color.g, f2[3 * t2 + 2] = e3[o3].color.b;
          break;
        }
    }
  } else if (o2 && i.type === "pointCloudStretchRenderer") {
    c2 = a$2.fromJSON(i);
    const e3 = c2.stops;
    f2 = new Uint8Array(3 * s);
    const r2 = p$1(c2.fieldTransformType);
    for (let t2 = 0; t2 < s; t2++) {
      const l = r2 ? r2(o2[t2]) : o2[t2], n3 = e3.length - 1;
      if (l < e3[0].value)
        f2[3 * t2] = e3[0].color.r, f2[3 * t2 + 1] = e3[0].color.g, f2[3 * t2 + 2] = e3[0].color.b;
      else if (l >= e3[n3].value)
        f2[3 * t2] = e3[n3].color.r, f2[3 * t2 + 1] = e3[n3].color.g, f2[3 * t2 + 2] = e3[n3].color.b;
      else
        for (let o3 = 1; o3 < e3.length; o3++)
          if (l < e3[o3].value) {
            const r3 = (l - e3[o3 - 1].value) / (e3[o3].value - e3[o3 - 1].value);
            f2[3 * t2] = e3[o3].color.r * r3 + e3[o3 - 1].color.r * (1 - r3), f2[3 * t2 + 1] = e3[o3].color.g * r3 + e3[o3 - 1].color.g * (1 - r3), f2[3 * t2 + 2] = e3[o3].color.b * r3 + e3[o3 - 1].color.b * (1 - r3);
            break;
          }
    }
  } else if (o2 && i.type === "pointCloudClassBreaksRenderer") {
    c2 = d$1.fromJSON(i);
    const e3 = c2.colorClassBreakInfos;
    f2 = new Uint8Array(3 * s);
    const t2 = p$1(c2.fieldTransformType);
    for (let r2 = 0; r2 < s; r2++) {
      const l = t2 ? t2(o2[r2]) : o2[r2];
      for (let o3 = 0; o3 < e3.length; o3++)
        if (l >= e3[o3].minValue && l <= e3[o3].maxValue) {
          f2[3 * r2] = e3[o3].color.r, f2[3 * r2 + 1] = e3[o3].color.g, f2[3 * r2 + 2] = e3[o3].color.b;
          break;
        }
    }
  } else {
    f2 = new Uint8Array(3 * s);
    for (let e3 = 0; e3 < f2.length; e3++)
      f2[e3] = 255;
  }
  if (n2 && c2 && c2.colorModulation) {
    const e3 = c2.colorModulation.minValue, o3 = c2.colorModulation.maxValue, r2 = 0.3;
    for (let t2 = 0; t2 < s; t2++) {
      const l = n2[t2], s2 = l >= o3 ? 1 : l <= e3 ? r2 : r2 + (1 - r2) * (l - e3) / (o3 - e3);
      f2[3 * t2] = s2 * f2[3 * t2], f2[3 * t2 + 1] = s2 * f2[3 * t2 + 1], f2[3 * t2 + 2] = s2 * f2[3 * t2 + 2];
    }
  }
  return f2;
}
function c$1(o2, r2) {
  if (o2.encoding == null || o2.encoding === "") {
    const t$1 = g(r2, o2);
    if (t(t$1.vertexAttributes.position))
      return;
    const l = f$1(r2, t$1.vertexAttributes.position), i = t$1.header.fields, u = [i.offsetX, i.offsetY, i.offsetZ], f2 = [i.scaleX, i.scaleY, i.scaleZ], c2 = l.length / 3, a2 = new Float64Array(3 * c2);
    for (let e2 = 0; e2 < c2; e2++)
      a2[3 * e2] = l[3 * e2] * f2[0] + u[0], a2[3 * e2 + 1] = l[3 * e2 + 1] * f2[1] + u[1], a2[3 * e2 + 2] = l[3 * e2 + 2] * f2[2] + u[2];
    return a2;
  }
  if (o2.encoding === "lepcc-xyz")
    return c$2(r2).result;
}
function a(e2, r$12, t2) {
  return r(e2) && e2.attributeInfo.useElevation ? d(r$12, t2) : r(e2) ? I(e2.attributeInfo.storageInfo, e2.buffer, t2) : null;
}
function d(e2, o2) {
  const r2 = new Float64Array(o2);
  for (let t2 = 0; t2 < o2; t2++)
    r2[t2] = e2[3 * t2 + 2];
  return r2;
}
function m(e2, o2, r2, t2, l) {
  const n2 = e2.length / 3;
  let s = 0;
  for (let i = 0; i < n2; i++) {
    let n3 = true;
    for (let e3 = 0; e3 < t2.length && n3; e3++) {
      const { filterJSON: o3 } = t2[e3], r3 = l[e3].values[i];
      switch (o3.type) {
        case "pointCloudValueFilter": {
          const e4 = o3.mode === "exclude";
          o3.values.includes(r3) === e4 && (n3 = false);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const e4 = b(o3.requiredSetBits), t3 = b(o3.requiredClearBits);
          (r3 & e4) === e4 && (r3 & t3) == 0 || (n3 = false);
          break;
        }
        case "pointCloudReturnFilter": {
          const e4 = 15 & r3, t3 = r3 >>> 4 & 15, l2 = t3 > 1, s2 = e4 === 1, i2 = e4 === t3;
          let u = false;
          for (const r4 of o3.includedReturns)
            if (r4 === "last" && i2 || r4 === "firstOfMany" && s2 && l2 || r4 === "lastOfMany" && i2 && l2 || r4 === "single" && !l2) {
              u = true;
              break;
            }
          u || (n3 = false);
          break;
        }
      }
    }
    n3 && (r2[s] = i, e2[3 * s] = e2[3 * i], e2[3 * s + 1] = e2[3 * i + 1], e2[3 * s + 2] = e2[3 * i + 2], o2[3 * s] = o2[3 * i], o2[3 * s + 1] = o2[3 * i + 1], o2[3 * s + 2] = o2[3 * i + 2], s++);
  }
  return s;
}
function p$1(e2) {
  return e2 == null || e2 === "none" ? null : e2 === "low-four-bit" ? (e3) => 15 & e3 : e2 === "high-four-bit" ? (e3) => (240 & e3) >> 4 : e2 === "absolute-value" ? (e3) => Math.abs(e3) : e2 === "modulo-ten" ? (e3) => e3 % 10 : null;
}
function b(e2) {
  let o2 = 0;
  for (const r2 of e2 || [])
    o2 |= 1 << r2;
  return o2;
}
class c {
  transform(e2) {
    const a2 = this._transform(e2), o$1 = [a2.points.buffer, a2.rgb.buffer];
    r(a2.pointIdFilterMap) && o$1.push(a2.pointIdFilterMap.buffer);
    for (const t2 of a2.attributes)
      "buffer" in t2.values && o(t2.values.buffer) && t2.values.buffer !== a2.rgb.buffer && o$1.push(t2.values.buffer);
    return Promise.resolve({ result: a2, transferList: o$1 });
  }
  _transform(r$12) {
    const e2 = c$1(r$12.schema, r$12.geometryBuffer);
    let a$12 = e2.length / 3, o2 = null;
    const f$12 = [], n2 = a(r$12.primaryAttributeData, e2, a$12);
    r(r$12.primaryAttributeData) && n2 && f$12.push({ attributeInfo: r$12.primaryAttributeData.attributeInfo, values: n2 });
    const s = a(r$12.modulationAttributeData, e2, a$12);
    r(r$12.modulationAttributeData) && s && f$12.push({ attributeInfo: r$12.modulationAttributeData.attributeInfo, values: s });
    let c2 = f(r$12.rendererInfo, n2, s, a$12);
    if (r$12.filterInfo && r$12.filterInfo.length > 0 && r(r$12.filterAttributesData)) {
      const t2 = r$12.filterAttributesData.map((t3) => {
        const r2 = a(t3, e2, a$12), o3 = { attributeInfo: t3.attributeInfo, values: r2 };
        return f$12.push(o3), o3;
      });
      o2 = new Uint32Array(a$12), a$12 = m(e2, c2, o2, r$12.filterInfo, t2);
    }
    for (const t2 of r$12.userAttributesData) {
      const r2 = a(t2, e2, a$12);
      f$12.push({ attributeInfo: t2.attributeInfo, values: r2 });
    }
    3 * a$12 < c2.length && (c2 = new Uint8Array(c2.buffer.slice(0, 3 * a$12))), this._applyElevationOffsetInPlace(e2, a$12, r$12.elevationOffset);
    const p2 = this._transformCoordinates(e2, a$12, r$12.obb, k.fromJSON(r$12.inSR), k.fromJSON(r$12.outSR));
    return { obb: r$12.obb, points: p2, rgb: c2, attributes: f$12, pointIdFilterMap: o2 };
  }
  _transformCoordinates(t2, r2, a2, i, u) {
    if (!xn(t2, i, 0, t2, u, 0, r2))
      throw new Error("Can't reproject");
    const l = r$1(a2.center[0], a2.center[1], a2.center[2]), b2 = n(), m2 = n();
    S(p, a2.quaternion);
    const c2 = new Float32Array(3 * r2);
    for (let e2 = 0; e2 < r2; e2++)
      b2[0] = t2[3 * e2] - l[0], b2[1] = t2[3 * e2 + 1] - l[1], b2[2] = t2[3 * e2 + 2] - l[2], E(m2, b2, p), a2.halfSize[0] = Math.max(a2.halfSize[0], Math.abs(m2[0])), a2.halfSize[1] = Math.max(a2.halfSize[1], Math.abs(m2[1])), a2.halfSize[2] = Math.max(a2.halfSize[2], Math.abs(m2[2])), c2[3 * e2] = b2[0], c2[3 * e2 + 1] = b2[1], c2[3 * e2 + 2] = b2[2];
    return c2;
  }
  _applyElevationOffsetInPlace(t2, r2, e2) {
    if (e2 !== 0)
      for (let a2 = 0; a2 < r2; a2++)
        t2[3 * a2 + 2] += e2;
  }
}
const p = e();
function h() {
  return new c();
}
export { h as default };
