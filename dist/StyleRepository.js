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
import { a as a$3, f as f$2, l as l$4 } from "./StyleDefinition.js";
import { T as T$4 } from "./enums3.js";
import { t as t$5, b0 as l$3, dZ as e$1 } from "./index.js";
import { C as C$1 } from "./enums.js";
import { t as t$4 } from "./VertexElementDescriptor.js";
import { v as v$1, p, z as z$1 } from "./colorUtils.js";
import { b as b$1 } from "./GeometryUtils.js";
import { s } from "./Geometry.js";
import { a3 as X$1 } from "./enums2.js";
class t$3 {
  constructor(t2) {
    this._array = [], t2 <= 0 && console.error("strideInBytes must be positive!"), this._stride = t2;
  }
  get array() {
    return this._array;
  }
  get index() {
    return 4 * this._array.length / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(t2, r2) {
    return 65535 & t2 | r2 << 16;
  }
  static i8888to32(t2, r2, e2, s2) {
    return 255 & t2 | (255 & r2) << 8 | (255 & e2) << 16 | s2 << 24;
  }
  static i8816to32(t2, r2, e2) {
    return 255 & t2 | (255 & r2) << 8 | e2 << 16;
  }
}
var N$1, R$1;
!function(N2) {
  N2[N2.R8_SIGNED = 0] = "R8_SIGNED", N2[N2.R8_UNSIGNED = 1] = "R8_UNSIGNED", N2[N2.R16_SIGNED = 2] = "R16_SIGNED", N2[N2.R16_UNSIGNED = 3] = "R16_UNSIGNED", N2[N2.R8G8_SIGNED = 4] = "R8G8_SIGNED", N2[N2.R8G8_UNSIGNED = 5] = "R8G8_UNSIGNED", N2[N2.R16G16_SIGNED = 6] = "R16G16_SIGNED", N2[N2.R16G16_UNSIGNED = 7] = "R16G16_UNSIGNED", N2[N2.R8G8B8A8_SIGNED = 8] = "R8G8B8A8_SIGNED", N2[N2.R8G8B8A8_UNSIGNED = 9] = "R8G8B8A8_UNSIGNED", N2[N2.R8G8B8A8_COLOR = 10] = "R8G8B8A8_COLOR", N2[N2.R16G16B16A16_DASHARRAY = 11] = "R16G16B16A16_DASHARRAY", N2[N2.R16G16B16A16_PATTERN = 12] = "R16G16B16A16_PATTERN";
}(N$1 || (N$1 = {})), function(N2) {
  N2[N2.UNIFORM = 0] = "UNIFORM", N2[N2.DATA_DRIVEN = 1] = "DATA_DRIVEN", N2[N2.INTERPOLATED_DATA_DRIVEN = 2] = "INTERPOLATED_DATA_DRIVEN", N2[N2.UNUSED = 3] = "UNUSED";
}(R$1 || (R$1 = {}));
class i$3 {
  constructor(t2) {
    this._locations = new Map(), this._key = t2;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layoutInfo || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return this._locations.size === 0 && this._buildAttributesInfo(), this._locations;
  }
  getLayoutInfo() {
    return this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildAttributesInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader;
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t2, e2, n2, o2, s2) {
    const r2 = this.getUniforms();
    for (const i2 of r2) {
      const { name: r3, type: a2, getValue: c2 } = i2, u2 = c2(n2, e2, o2, s2);
      if (u2 !== null)
        switch (a2) {
          case "float":
            t2.setUniform1f(r3, u2);
            break;
          case "vec2":
            t2.setUniform2fv(r3, u2);
            break;
          case "vec4":
            t2.setUniform4fv(r3, u2);
        }
    }
  }
  encodeAttributes(t2, e2, o2, s2) {
    var _a;
    const r2 = this.attributesInfo(), i2 = this.getEncodingInfos(), a2 = [];
    let c2 = 0, u2 = 0;
    for (const f2 of Object.keys(i2)) {
      const _2 = i2[f2], { type: h2, precisionFactor: d2, isLayout: l2 } = r2[f2], y2 = l2 ? o2.getLayoutProperty(f2) : o2.getPaintProperty(f2), m2 = (_a = y2.interpolator) == null ? void 0 : _a.getInterpolationRange(e2);
      let I2 = 0;
      for (const o3 of _2) {
        const { offset: r3, bufferElementsToAdd: i3 } = o3;
        if (i3 > 0) {
          for (let t3 = 0; t3 < i3; t3++)
            a2.push(0);
          c2 += u2, u2 = o3.bufferElementsToAdd;
        }
        const f3 = s2 != null ? s2 : y2.getValue(m2 ? m2[I2] : e2, t2);
        switch (h2) {
          case N$1.R8_SIGNED:
          case N$1.R8_UNSIGNED:
            a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3);
            break;
          case N$1.R16_SIGNED:
          case N$1.R16_UNSIGNED:
            a2[c2] |= this._encodeShort(f3 * (d2 || 1), 8 * r3);
            break;
          case N$1.R8G8_SIGNED:
          case N$1.R8G8_UNSIGNED:
            a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3), a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3 + 8);
            break;
          case N$1.R16G16_SIGNED:
          case N$1.R16G16_UNSIGNED:
            a2[c2] |= this._encodeShort(f3 * (d2 || 1), 8 * r3), a2[c2] |= this._encodeShort(f3 * (d2 || 1), 8 * r3 + 16);
            break;
          case N$1.R8G8B8A8_SIGNED:
          case N$1.R8G8B8A8_UNSIGNED:
            a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3), a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3 + 8), a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3 + 16), a2[c2] |= this._encodeByte(f3 * (d2 || 1), 8 * r3 + 24);
            break;
          case N$1.R8G8B8A8_COLOR:
            a2[c2] = this._encodeColor(f3);
            break;
          case N$1.R16G16B16A16_DASHARRAY:
          case N$1.R16G16B16A16_PATTERN:
            this._encodePattern(c2, a2, f3);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        I2++;
      }
    }
    return a2;
  }
  getAtributeState(t2) {
    let e2 = 0;
    const n2 = 3 + 2 * t2;
    return e2 |= this._bit(n2), e2 |= this._bit(n2 + 1) << 1, e2;
  }
  _buildAttributesInfo() {
    const t2 = [], e2 = {}, n2 = {};
    let r2 = -1;
    const a2 = this.attributesInfo(), c2 = this.attributes();
    let u2 = -1;
    for (const s2 of c2) {
      u2++;
      const c3 = this.getAtributeState(u2);
      if (c3 === R$1.UNIFORM || c3 === R$1.UNUSED)
        continue;
      const f3 = a2[s2], _3 = [];
      e2[s2] = _3;
      const h3 = f3.type;
      for (let e3 = 0; e3 < c3; e3++) {
        const { dataType: e4, bytesPerElement: o2, count: s3, normalized: a3 } = i$3._encodingInfo[h3], c4 = o2 * s3, u3 = `${e4}-${a3 === true}`;
        let f4 = n2[u3], d2 = 0;
        if (!f4 || f4.count + s3 > 4)
          r2++, f4 = { dataIndex: r2, count: 0, offset: 0 }, s3 !== 4 && (n2[u3] = f4), t2.push({ location: -1, name: "a_data_" + r2, count: s3, type: e4, normalized: a3 }), d2 = Math.ceil(Math.max(c4 / 4, 1));
        else {
          const e5 = t2[f4.dataIndex];
          e5.count += s3;
          d2 = Math.ceil(Math.max(e5.count * o2 / 4, 1)) - Math.ceil(Math.max(f4.offset / 4, 1));
        }
        _3.push({ dataIndex: f4.dataIndex, offset: f4.offset, bufferElementsToAdd: d2 }), f4.offset += c4, f4.count += s3;
      }
    }
    for (const o2 of t2)
      switch (o2.type) {
        case C$1.BYTE:
        case C$1.UNSIGNED_BYTE:
          o2.count = 4;
          break;
        case C$1.SHORT:
        case C$1.UNSIGNED_SHORT:
          o2.count += o2.count % 2;
      }
    this._buildVertexBufferLayout(t2);
    let f2 = 0;
    const _2 = this._layoutInfo.geometry;
    for (const o2 of _2)
      this._locations.set(o2.name, f2++);
    const h2 = this._layoutInfo.opacity;
    if (h2)
      for (const o2 of h2)
        this._locations.set(o2.name, f2++);
    this._buildShaderInfo(t2, e2), this._propertyEncodingInfo = e2;
  }
  _buildVertexBufferLayout(t2) {
    const e2 = {}, n2 = this.geometryInfo();
    let o2 = n2[0].stride;
    if (t2.length === 0)
      e2.geometry = n2;
    else {
      const s2 = [];
      let i2 = o2;
      for (const e3 of t2)
        o2 += a$2(e3.type) * e3.count;
      for (const t3 of n2)
        s2.push(new t$4(t3.name, t3.count, t3.type, t3.offset, o2, t3.normalized));
      for (const e3 of t2)
        s2.push(new t$4(e3.name, e3.count, e3.type, i2, o2, e3.normalized)), i2 += a$2(e3.type) * e3.count;
      e2.geometry = s2;
    }
    this.opacityInfo() && (e2.opacity = this.opacityInfo()), this._layoutInfo = e2, this._stride = o2;
  }
  _buildShaderInfo(e2, s2) {
    let r2 = "\n", a2 = "\n";
    const u2 = [];
    for (const t2 of e2)
      r2 += `attribute ${this._getType(t2.count)} ${t2.name};
`;
    const f2 = this.attributes(), _2 = this.attributesInfo();
    let h2 = -1;
    for (const d2 of f2) {
      h2++;
      const { name: e3, type: f3, precisionFactor: l2, isLayout: y2 } = _2[d2], m2 = l2 && l2 !== 1 ? " * " + 1 / l2 : "", { bytesPerElement: I2, count: E2 } = i$3._encodingInfo[f3], p2 = (t2) => `a_data_${t2.dataIndex}${c$3(E2, t2.offset, I2)}`;
      switch (this.getAtributeState(h2)) {
        case R$1.UNIFORM:
          {
            const o2 = this._getType(E2), s3 = `u_${e3}`;
            u2.push({ name: s3, type: o2, getValue: (e4, o3, s4, r3) => {
              const i2 = y2 ? e4.getLayoutValue(d2, o3) : e4.getPaintValue(d2, o3);
              if (f3 === N$1.R16G16B16A16_DASHARRAY) {
                const n2 = e4.getDashKey(i2, e4.getLayoutValue("line-cap", o3)), s5 = r3.getMosaicItemPosition(n2, false);
                if (t$5(s5))
                  return null;
                const { tl: a3, br: c2 } = s5;
                return [a3[0], c2[1], c2[0], a3[1]];
              }
              if (f3 === N$1.R16G16B16A16_PATTERN) {
                const e5 = r3.getMosaicItemPosition(i2, !d2.includes("line-"));
                if (t$5(e5))
                  return null;
                const { tl: n2, br: o4 } = e5;
                return [n2[0], o4[1], o4[0], n2[1]];
              }
              if (f3 === N$1.R8G8B8A8_COLOR) {
                const t2 = i2[3];
                return [t2 * i2[0], t2 * i2[1], t2 * i2[2], t2];
              }
              return i2;
            } }), r2 += `uniform ${o2} ${s3};
`, a2 += `${o2} ${e3} = ${s3};
`;
          }
          break;
        case R$1.DATA_DRIVEN:
          {
            const t2 = p2(s2[d2][0]);
            a2 += `${this._getType(E2)} ${e3} = ${t2}${m2};
`;
          }
          break;
        case R$1.INTERPOLATED_DATA_DRIVEN: {
          const t2 = `u_t_${e3}`;
          u2.push({ name: t2, type: "float", getValue: (t3, e4, n3, o3) => (y2 ? t3.getLayoutProperty(d2) : t3.getPaintProperty(d2)).interpolator.interpolationUniformValue(n3, e4) }), r2 += `uniform float ${t2};
`;
          const n2 = p2(s2[d2][0]), o2 = p2(s2[d2][1]);
          a2 += `${this._getType(E2)} ${e3} = mix(${n2}${m2}, ${o2}${m2}, ${t2});
`;
        }
      }
    }
    this._shaderHeader = r2, this._shaderMain = a2, this._uniforms = u2;
  }
  _bit(t2) {
    return (this._key & 1 << t2) >> t2;
  }
  _getType(t2) {
    switch (t2) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(t2) {
    const n2 = 255 * t2[3];
    return t$3.i8888to32(t2[0] * n2, t2[1] * n2, t2[2] * n2, n2);
  }
  _encodePattern(t2, e2, n2) {
    if (!n2 || !n2.rect)
      return;
    const o2 = 2, s2 = n2.rect, r2 = n2.width, i2 = n2.height;
    e2[t2] = this._encodeShort(s2.x + o2, 0), e2[t2] |= this._encodeShort(s2.y + o2 + i2, 16), e2[t2 + 1] = this._encodeShort(s2.x + o2 + r2, 0), e2[t2 + 1] |= this._encodeShort(s2.y + o2, 16);
  }
  _encodeByte(t2, e2) {
    return (255 & t2) << e2;
  }
  _encodeShort(t2, e2) {
    return (65535 & t2) << e2;
  }
}
i$3._encodingInfo = { [N$1.R8_SIGNED]: { dataType: C$1.BYTE, bytesPerElement: 1, count: 1, normalized: false }, [N$1.R8_UNSIGNED]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 1, normalized: false }, [N$1.R16_SIGNED]: { dataType: C$1.SHORT, bytesPerElement: 2, count: 1, normalized: false }, [N$1.R16_UNSIGNED]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 1, normalized: false }, [N$1.R8G8_SIGNED]: { dataType: C$1.BYTE, bytesPerElement: 1, count: 2, normalized: false }, [N$1.R8G8_UNSIGNED]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 2, normalized: false }, [N$1.R16G16_SIGNED]: { dataType: C$1.SHORT, bytesPerElement: 2, count: 2, normalized: false }, [N$1.R16G16_UNSIGNED]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 2, normalized: false }, [N$1.R8G8B8A8_SIGNED]: { dataType: C$1.BYTE, bytesPerElement: 1, count: 4, normalized: false }, [N$1.R8G8B8A8_UNSIGNED]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: false }, [N$1.R8G8B8A8_COLOR]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: true }, [N$1.R16G16B16A16_DASHARRAY]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false }, [N$1.R16G16B16A16_PATTERN]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false } };
const a$2 = (t2) => {
  switch (t2) {
    case C$1.FLOAT:
    case C$1.INT:
    case C$1.UNSIGNED_INT:
      return 4;
    case C$1.SHORT:
    case C$1.UNSIGNED_SHORT:
      return 2;
    case C$1.BYTE:
    case C$1.UNSIGNED_BYTE:
      return 1;
  }
}, c$3 = (t2, e2, n2) => {
  const o2 = e2 / n2;
  if (t2 === 1)
    switch (o2) {
      case 0:
        return ".x";
      case 1:
        return ".y";
      case 2:
        return ".z";
      case 3:
        return ".w";
    }
  else if (t2 === 2)
    switch (o2) {
      case 0:
        return ".xy";
      case 1:
        return ".yz";
      case 2:
        return ".zw";
    }
  else if (t2 === 3)
    switch (o2) {
      case 0:
        return ".xyz";
      case 1:
        return ".yzw";
    }
  return "";
};
class T$3 extends i$3 {
  constructor(r2) {
    super(r2);
  }
  geometryInfo() {
    return T$3.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return T$3.ATTRIBUTES;
  }
  attributesInfo() {
    return T$3.ATTRIBUTES_INFO;
  }
}
T$3.ATTRIBUTES = [], T$3.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.BYTE, 0, 2)], T$3.ATTRIBUTES_INFO = {};
class t$2 extends i$3 {
  constructor(r2) {
    super(r2);
  }
  geometryInfo() {
    return t$2.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return t$2.ATTRIBUTES;
  }
  attributesInfo() {
    return t$2.ATTRIBUTES_INFO;
  }
}
t$2.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"], t$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 4)], t$2.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: N$1.R8_UNSIGNED }, "circle-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "circle-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "circle-stroke-width": { name: "stroke_width", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "circle-stroke-color": { name: "stroke_color", type: N$1.R8G8B8A8_COLOR }, "circle-stroke-opacity": { name: "stroke_opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "circle-blur": { name: "blur", type: N$1.R8_UNSIGNED, precisionFactor: 32 } };
class l$2 extends i$3 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return l$2.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return l$2.ATTRIBUTES;
  }
  attributesInfo() {
    return l$2.ATTRIBUTES_INFO;
  }
}
l$2.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"], l$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 4)], l$2.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "fill-pattern": { name: "tlbr", type: N$1.R16G16B16A16_PATTERN, isOptional: true } };
class T$2 extends i$3 {
  constructor(o2, t2) {
    super(o2), this._usefillColor = t2;
  }
  geometryInfo() {
    return T$2.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this._usefillColor ? T$2.ATTRIBUTES_FILL : T$2.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this._usefillColor ? T$2.ATTRIBUTES_INFO_FILL : T$2.ATTRIBUTES_INFO_OUTLINE;
  }
}
T$2.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"], T$2.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"], T$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 8), new t$4("a_offset", 2, C$1.BYTE, 4, 8), new t$4("a_xnormal", 2, C$1.BYTE, 6, 8)], T$2.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 } }, T$2.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 } };
class i$2 extends i$3 {
  constructor(e2) {
    super(e2);
  }
  geometryInfo() {
    return i$2.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return i$2.ATTRIBUTES;
  }
  attributesInfo() {
    return i$2.ATTRIBUTES_INFO;
  }
}
i$2.ATTRIBUTES = ["line-blur", "line-color", "line-gap-width", "line-offset", "line-opacity", "line-width", "line-pattern", "line-dasharray"], i$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 16), new t$4("a_extrude_offset", 4, C$1.BYTE, 4, 16), new t$4("a_dir_normal", 4, C$1.BYTE, 8, 16), new t$4("a_accumulatedDistance", 2, C$1.UNSIGNED_SHORT, 12, 16)], i$2.ATTRIBUTES_INFO = { "line-width": { name: "width", type: N$1.R8_UNSIGNED, precisionFactor: 2 }, "line-gap-width": { name: "gap_width", type: N$1.R8_UNSIGNED, precisionFactor: 2 }, "line-offset": { name: "offset", type: N$1.R8_SIGNED, precisionFactor: 2 }, "line-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "line-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "line-blur": { name: "blur", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "line-pattern": { name: "tlbr", type: N$1.R16G16B16A16_PATTERN, isOptional: true }, "line-dasharray": { name: "tlbr", type: N$1.R16G16B16A16_DASHARRAY, isOptional: true } };
const a$1 = [new t$4("a_pos", 2, C$1.SHORT, 0, 16), new t$4("a_vertexOffset", 2, C$1.SHORT, 4, 16), new t$4("a_texAngleRange", 4, C$1.UNSIGNED_BYTE, 8, 16), new t$4("a_levelInfo", 4, C$1.UNSIGNED_BYTE, 12, 16)], n = [new t$4("a_opacityInfo", 1, C$1.UNSIGNED_BYTE, 0, 1)];
class i$1 extends i$3 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return a$1;
  }
  opacityInfo() {
    return n;
  }
  attributes() {
    return i$1.ATTRIBUTES;
  }
  attributesInfo() {
    return i$1.ATTRIBUTES_INFO;
  }
}
i$1.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"], i$1.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "icon-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "icon-halo-color": { name: "halo_color", type: N$1.R8G8B8A8_COLOR }, "icon-halo-width": { name: "halo_width", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "icon-halo-blur": { name: "halo_blur", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "icon-size": { name: "size", type: N$1.R8_UNSIGNED, precisionFactor: 32, isLayout: true } };
class c$2 extends i$3 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return a$1;
  }
  opacityInfo() {
    return n;
  }
  attributes() {
    return c$2.ATTRIBUTES;
  }
  attributesInfo() {
    return c$2.ATTRIBUTES_INFO;
  }
}
c$2.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"], c$2.ATTRIBUTES_INFO = { "text-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "text-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "text-halo-color": { name: "halo_color", type: N$1.R8G8B8A8_COLOR }, "text-halo-width": { name: "halo_width", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "text-halo-blur": { name: "halo_blur", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "text-size": { name: "size", type: N$1.R8_UNSIGNED, isLayout: true } };
const r = { kind: "null" }, e = { kind: "number" }, t$1 = { kind: "string" }, i = { kind: "boolean" }, o = { kind: "color" }, f$1 = { kind: "object" }, u = { kind: "value" };
function a(n2, r2) {
  return { kind: "array", itemType: n2, n: r2 };
}
const y = [r, e, t$1, i, o, f$1, a(u)];
function k$1(n2) {
  if (n2.kind === "array") {
    const r2 = k$1(n2.itemType);
    return typeof n2.n == "number" ? `array<${r2}, ${n2.n}>` : n2.itemType.kind === "value" ? "array" : `array<${r2}>`;
  }
  return n2.kind;
}
function l$1(y2) {
  if (y2 === null)
    return r;
  if (typeof y2 == "string")
    return t$1;
  if (typeof y2 == "boolean")
    return i;
  if (typeof y2 == "number")
    return e;
  if (y2 instanceof l$3)
    return o;
  if (Array.isArray(y2)) {
    let n2;
    for (const r2 of y2) {
      const e2 = l$1(r2);
      if (n2) {
        if (n2 !== e2) {
          n2 = u;
          break;
        }
      } else
        n2 = e2;
    }
    return a(n2 || u, y2.length);
  }
  return typeof y2 == "object" ? f$1 : u;
}
function c$1(n2, r2) {
  if (r2.kind === "array")
    return n2.kind === "array" && (n2.n === 0 && n2.itemType.kind === "value" || c$1(n2.itemType, r2.itemType)) && (typeof r2.n != "number" || r2.n === n2.n);
  if (r2.kind === "value") {
    for (const e2 of y)
      if (c$1(n2, e2))
        return true;
  }
  return r2.kind === n2.kind;
}
function d$2(r2) {
  if (r2 === null)
    return "";
  const e2 = typeof r2;
  return e2 === "string" ? r2 : e2 === "number" || e2 === "boolean" ? String(r2) : r2 instanceof l$3 ? r2.toString() : JSON.stringify(r2);
}
class _$1 {
  constructor(t2) {
    this._parent = t2, this._vars = {};
  }
  add(t2, e2) {
    this._vars[t2] = e2;
  }
  get(t2) {
    return this._vars[t2] ? this._vars[t2] : this._parent ? this._parent.get(t2) : null;
  }
}
class v {
  constructor() {
    this.type = u;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"id" does not expect arguments');
    return new v();
  }
  evaluate(t2, e2) {
    return t2 == null ? void 0 : t2.id;
  }
}
class b {
  constructor() {
    this.type = t$1;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"geometry-type" does not expect arguments');
    return new b();
  }
  evaluate(t2, e2) {
    if (!t2)
      return null;
    switch (t2.type) {
      case s.Point:
        return "Point";
      case s.LineString:
        return "LineString";
      case s.Polygon:
        return "Polygon";
      default:
        return null;
    }
  }
}
class d$1 {
  constructor() {
    this.type = f$1;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"properties" does not expect arguments');
    return new d$1();
  }
  evaluate(t2, e2) {
    return t2 == null ? void 0 : t2.values;
  }
}
class x {
  constructor() {
    this.type = e;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"zoom" does not expect arguments');
    return new x();
  }
  evaluate(t2, e2) {
    return e2;
  }
}
class E {
  constructor(t2, e2, r2) {
    this._lhs = t2, this._rhs = e2, this._compare = r2, this.type = i;
  }
  static parse(t2, e2, r2) {
    if (t2.length !== 3 && t2.length !== 4)
      throw new Error(`"${t2[0]}" expects 2 or 3 arguments`);
    if (t2.length === 4)
      throw new Error(`"${t2[0]}" collator not supported`);
    return new E(pt(t2[1], e2), pt(t2[2], e2), r2);
  }
  evaluate(t2, e2) {
    return this._compare(this._lhs.evaluate(t2, e2), this._rhs.evaluate(t2, e2));
  }
}
class $ extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 === e3);
  }
}
class M extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 !== e3);
  }
}
class k extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 < e3);
  }
}
class A extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 <= e3);
  }
}
class j extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 > e3);
  }
}
class q extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 >= e3);
  }
}
class N {
  constructor(t2) {
    this._arg = t2, this.type = i;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"!" expects 1 argument');
    return new N(pt(t2[1], e2));
  }
  evaluate(t2, e2) {
    return !this._arg.evaluate(t2, e2);
  }
}
class R {
  constructor(t2) {
    this._args = t2, this.type = i;
  }
  static parse(t2, e2) {
    const r2 = [];
    for (let s2 = 1; s2 < t2.length; s2++)
      r2.push(pt(t2[s2], e2));
    return new R(r2);
  }
  evaluate(t2, e2) {
    for (const r2 of this._args)
      if (!r2.evaluate(t2, e2))
        return false;
    return true;
  }
}
class C {
  constructor(t2) {
    this._args = t2, this.type = i;
  }
  static parse(t2, e2) {
    const r2 = [];
    for (let s2 = 1; s2 < t2.length; s2++)
      r2.push(pt(t2[s2], e2));
    return new C(r2);
  }
  evaluate(t2, e2) {
    for (const r2 of this._args)
      if (r2.evaluate(t2, e2))
        return true;
    return false;
  }
}
class z {
  constructor(t2) {
    this._args = t2, this.type = i;
  }
  static parse(t2, e2) {
    const r2 = [];
    for (let s2 = 1; s2 < t2.length; s2++)
      r2.push(pt(t2[s2], e2));
    return new z(r2);
  }
  evaluate(t2, e2) {
    for (const r2 of this._args)
      if (r2.evaluate(t2, e2))
        return false;
    return true;
  }
}
class I {
  constructor(t2, e2, r2) {
    this.type = t2, this._args = e2, this._fallback = r2;
  }
  static parse(t2, e2, r2) {
    if (t2.length < 4)
      throw new Error('"case" expects at least 3 arguments');
    if (t2.length % 2 == 1)
      throw new Error('"case" expects an odd number of arguments');
    let s2;
    const n2 = [];
    for (let o2 = 1; o2 < t2.length - 1; o2 += 2) {
      const a3 = pt(t2[o2], e2), i2 = pt(t2[o2 + 1], e2, r2);
      s2 || (s2 = i2.type), n2.push({ condition: a3, output: i2 });
    }
    const a2 = pt(t2[t2.length - 1], e2, r2);
    return s2 || (s2 = a2.type), new I(s2, n2, a2);
  }
  evaluate(t2, e2) {
    for (const r2 of this._args)
      if (r2.condition.evaluate(t2, e2))
        return r2.output.evaluate(t2, e2);
    return this._fallback.evaluate(t2, e2);
  }
}
class L$1 {
  constructor(t2, e2) {
    this.type = t2, this._args = e2;
  }
  static parse(t2, e2) {
    if (t2.length < 2)
      throw new Error('"coalesce" expects at least 1 argument');
    let r2;
    const s2 = [];
    for (let n2 = 1; n2 < t2.length; n2++) {
      const a2 = pt(t2[n2], e2);
      r2 || (r2 = a2.type), s2.push(a2);
    }
    return new L$1(r2, s2);
  }
  evaluate(t2, e2) {
    for (const r2 of this._args) {
      const s2 = r2.evaluate(t2, e2);
      if (s2 !== null)
        return s2;
    }
    return null;
  }
}
class U {
  constructor(t2, e2, r2, s2, n2) {
    this.type = t2, this._input = e2, this._labels = r2, this._outputs = s2, this._fallback = n2;
  }
  static parse(t2, e2) {
    if (t2.length < 3)
      throw new Error('"match" expects at least 3 arguments');
    if (t2.length % 2 == 0)
      throw new Error('"case" expects an even number of arguments');
    let r2;
    const s2 = pt(t2[1], e2), n2 = [], a2 = {};
    let o2;
    for (let i2 = 2; i2 < t2.length - 1; i2 += 2) {
      let s3 = t2[i2];
      Array.isArray(s3) || (s3 = [s3]);
      for (const t3 of s3) {
        const e3 = typeof t3;
        if (e3 !== "string" && e3 !== "number")
          throw new Error('"match" requires string or number literal as labels');
        if (o2) {
          if (e3 !== o2)
            throw new Error('"match" requires labels to have the same type');
        } else
          o2 = e3;
        a2[t3] = n2.length;
      }
      const l2 = pt(t2[i2 + 1], e2);
      r2 || (r2 = l2.type), n2.push(l2);
    }
    return new U(r2, s2, a2, n2, pt(t2[t2.length - 1], e2));
  }
  evaluate(t2, e2) {
    const r2 = this._input.evaluate(t2, e2);
    return (this._outputs[this._labels[r2]] || this._fallback).evaluate(t2, e2);
  }
}
class P$1 {
  constructor(t2, e2, r2, s2, n2) {
    this._operator = t2, this.type = e2, this.interpolation = r2, this.input = s2, this._stops = n2;
  }
  static parse(t2, e$12, r2) {
    const s2 = t2[0];
    if (t2.length < 5)
      throw new Error(`"${s2}" expects at least 4 arguments`);
    const n2 = t2[1];
    if (!Array.isArray(n2) || n2.length === 0)
      throw new Error(`"${n2}" is not a valid interpolation`);
    switch (n2[0]) {
      case "linear":
        if (n2.length !== 1)
          throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (n2.length !== 2 || typeof n2[1] != "number")
          throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (n2.length !== 5)
          throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let t3 = 1; t3 < 5; t3++) {
          const e2 = n2[t3];
          if (typeof e2 != "number" || e2 < 0 || e2 > 1)
            throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t2[0]}" unknown interpolation type "${n2[0]}"`);
    }
    if (t2.length % 2 != 1)
      throw new Error(`"${s2}" expects an even number of arguments`);
    const a2 = pt(t2[2], e$12, e);
    let o$1;
    s2 === "interpolate-hcl" || s2 === "interpolate-lab" ? o$1 = o : r2 && r2.kind !== "value" && (o$1 = r2);
    const i2 = [];
    for (let l2 = 3; l2 < t2.length; l2 += 2) {
      const r3 = t2[l2];
      if (typeof r3 != "number")
        throw new Error(`"${s2}" requires stop inputs as literal numbers`);
      if (i2.length && i2[i2.length - 1][0] >= r3)
        throw new Error(`"${s2}" requires strictly ascending stop inputs`);
      const n3 = pt(t2[l2 + 1], e$12, o$1);
      o$1 || (o$1 = n3.type), i2.push([r3, n3]);
    }
    if (o$1 && o$1 !== o && o$1 !== e && (o$1.kind !== "array" || o$1.itemType !== e))
      throw new Error(`"${s2}" cannot interpolate type ${k$1(o$1)}`);
    return new P$1(s2, o$1, n2, a2, i2);
  }
  evaluate(n2, o2) {
    const i2 = this._stops;
    if (i2.length === 1)
      return i2[0][1].evaluate(n2, o2);
    const l2 = this.input.evaluate(n2, o2);
    if (l2 <= i2[0][0])
      return i2[0][1].evaluate(n2, o2);
    if (l2 >= i2[i2.length - 1][0])
      return i2[i2.length - 1][1].evaluate(n2, o2);
    let u2 = 0;
    for (; ++u2 < i2.length && !(l2 < i2[u2][0]); )
      ;
    const c2 = i2[u2 - 1][0], h2 = i2[u2][0], g = P$1.interpolationRatio(this.interpolation, l2, c2, h2), f2 = i2[u2 - 1][1].evaluate(n2, o2), w = i2[u2][1].evaluate(n2, o2);
    if (this._operator === "interpolate") {
      if (this.type.kind === "array" && Array.isArray(f2) && Array.isArray(w))
        return f2.map((t2, e2) => b$1(t2, w[e2], g));
      if (this.type.kind === "color" && f2 instanceof l$3 && w instanceof l$3) {
        const e2 = new l$3(f2), r2 = new l$3(w);
        return new l$3([b$1(e2.r, r2.r, g), b$1(e2.g, r2.g, g), b$1(e2.b, r2.b, g), b$1(e2.a, r2.a, g)]);
      }
      if (this.type.kind === "number" && typeof f2 == "number" && typeof w == "number")
        return b$1(f2, w, g);
      throw new Error(`"${this._operator}" cannot interpolate type ${k$1(this.type)}`);
    }
    if (this._operator === "interpolate-hcl") {
      const s2 = v$1(f2), n3 = v$1(w), o3 = n3.h - s2.h, i3 = p({ h: s2.h + g * (o3 > 180 || o3 < -180 ? o3 - 360 * Math.round(o3 / 360) : o3), c: b$1(s2.c, n3.c, g), l: b$1(s2.l, n3.l, g) });
      return new l$3(__spreadValues({ a: b$1(f2.a, w.a, g) }, i3));
    }
    if (this._operator === "interpolate-lab") {
      const e2 = z$1(f2), n3 = z$1(w), o3 = p({ l: b$1(e2.l, n3.l, g), a: b$1(e2.a, n3.a, g), b: b$1(e2.b, n3.b, g) });
      return new l$3(__spreadValues({ a: b$1(f2.a, w.a, g) }, o3));
    }
    throw new Error(`Unexpected operator "${this._operator}"`);
  }
  interpolationUniformValue(t2, e2) {
    const r2 = this._stops;
    if (r2.length === 1)
      return 0;
    if (t2 >= r2[r2.length - 1][0])
      return 0;
    let s2 = 0;
    for (; ++s2 < r2.length && !(t2 < r2[s2][0]); )
      ;
    const n2 = r2[s2 - 1][0], a2 = r2[s2][0];
    return P$1.interpolationRatio(this.interpolation, e2, n2, a2);
  }
  getInterpolationRange(t2) {
    const e2 = this._stops;
    if (e2.length === 1) {
      const t3 = e2[0][0];
      return [t3, t3];
    }
    const r2 = e2[e2.length - 1][0];
    if (t2 >= r2)
      return [r2, r2];
    let s2 = 0;
    for (; ++s2 < e2.length && !(t2 < e2[s2][0]); )
      ;
    return [e2[s2 - 1][0], e2[s2][0]];
  }
  static interpolationRatio(t2, e2, r2, s2) {
    let a2 = 0;
    if (t2[0] === "linear")
      a2 = P$1._exponentialInterpolationRatio(e2, 1, r2, s2);
    else if (t2[0] === "exponential")
      a2 = P$1._exponentialInterpolationRatio(e2, t2[1], r2, s2);
    else if (t2[0] === "cubic-bezier") {
      a2 = e$1(t2[1], t2[2], t2[3], t2[4])(P$1._exponentialInterpolationRatio(e2, 1, r2, s2), 1e-5);
    }
    return a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1), a2;
  }
  static _exponentialInterpolationRatio(t2, e2, r2, s2) {
    const n2 = s2 - r2;
    if (n2 === 0)
      return 0;
    const a2 = t2 - r2;
    return e2 === 1 ? a2 / n2 : (e2 ** a2 - 1) / (e2 ** n2 - 1);
  }
}
class S {
  constructor(t2, e2, r2) {
    this.type = t2, this._input = e2, this._stops = r2;
  }
  static parse(t2, e$12) {
    if (t2.length < 5)
      throw new Error('"step" expects at least 4 arguments');
    if (t2.length % 2 != 1)
      throw new Error('"step" expects an even number of arguments');
    const r2 = pt(t2[1], e$12, e);
    let s2;
    const n2 = [];
    n2.push([-1 / 0, pt(t2[2], e$12)]);
    for (let a2 = 3; a2 < t2.length; a2 += 2) {
      const r3 = t2[a2];
      if (typeof r3 != "number")
        throw new Error('"step" requires stop inputs as literal numbers');
      if (n2.length && n2[n2.length - 1][0] >= r3)
        throw new Error('"step" requires strictly ascending stop inputs');
      const o2 = pt(t2[a2 + 1], e$12);
      s2 || (s2 = o2.type), n2.push([r3, o2]);
    }
    return new S(s2, r2, n2);
  }
  evaluate(t2, e2) {
    const r2 = this._stops;
    if (r2.length === 1)
      return r2[0][1].evaluate(t2, e2);
    const s2 = this._input.evaluate(t2, e2);
    let n2 = 0;
    for (; ++n2 < r2.length && !(s2 < r2[n2][0]); )
      ;
    return this._stops[n2 - 1][1].evaluate(t2, e2);
  }
}
class B {
  constructor(t2, e2) {
    this.type = t2, this._output = e2;
  }
  static parse(t2, e2, r2) {
    if (t2.length < 4)
      throw new Error('"let" expects at least 3 arguments');
    if (t2.length % 2 == 1)
      throw new Error('"let" expects an odd number of arguments');
    const s2 = new _$1(e2);
    for (let a2 = 1; a2 < t2.length - 1; a2 += 2) {
      const r3 = t2[a2];
      if (typeof r3 != "string")
        throw new Error(`"let" requires a string to define variable names - found ${r3}`);
      s2.add(r3, pt(t2[a2 + 1], e2));
    }
    const n2 = pt(t2[t2.length - 1], s2, r2);
    return new B(n2.type, n2);
  }
  evaluate(t2, e2) {
    return this._output.evaluate(t2, e2);
  }
}
class G {
  constructor(t2, e2) {
    this.type = t2, this.output = e2;
  }
  static parse(t2, e2, r2) {
    if (t2.length !== 2 || typeof t2[1] != "string")
      throw new Error('"var" requires just one literal string argument');
    const s2 = e2.get(t2[1]);
    if (!s2)
      throw new Error(`${t2[1]} must be defined before being used in a "var" expression`);
    return new G(r2 || u, s2);
  }
  evaluate(t2, e2) {
    return this.output.evaluate(t2, e2);
  }
}
class O {
  constructor(t2, e2, r2) {
    this.type = t2, this._index = e2, this._array = r2;
  }
  static parse(t2, e$12) {
    if (t2.length !== 3)
      throw new Error('"at" expects 2 arguments');
    const r2 = pt(t2[1], e$12, e), s2 = pt(t2[2], e$12);
    return new O(s2.type.itemType, r2, s2);
  }
  evaluate(t2, e2) {
    const r2 = this._index.evaluate(t2, e2), s2 = this._array.evaluate(t2, e2);
    if (r2 < 0 || r2 >= s2.length)
      throw new Error('"at" index out of bounds');
    if (r2 !== Math.floor(r2))
      throw new Error('"at" index must be an integer');
    return s2[r2];
  }
}
class T$1 {
  constructor(t2, e2) {
    this._key = t2, this._obj = e2, this.type = u;
  }
  static parse(t2, e2) {
    let r2, s2;
    switch (t2.length) {
      case 2:
        return r2 = pt(t2[1], e2), new T$1(r2);
      case 3:
        return r2 = pt(t2[1], e2), s2 = pt(t2[2], e2), new T$1(r2, s2);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t2, e2) {
    const r2 = this._key.evaluate(t2, e2);
    if (this._obj) {
      return this._obj.evaluate(t2, e2)[r2];
    }
    return t2 == null ? void 0 : t2.values[r2];
  }
}
class F {
  constructor(t2, e2) {
    this._key = t2, this._obj = e2, this.type = i;
  }
  static parse(t2, e2) {
    let r2, s2;
    switch (t2.length) {
      case 2:
        return r2 = pt(t2[1], e2), new F(r2);
      case 3:
        return r2 = pt(t2[1], e2), s2 = pt(t2[2], e2), new F(r2, s2);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t2, e2) {
    const r2 = this._key.evaluate(t2, e2);
    if (this._obj) {
      return r2 in this._obj.evaluate(t2, e2);
    }
    return !!(t2 == null ? void 0 : t2.values[r2]);
  }
}
class V {
  constructor(t2, e2) {
    this._key = t2, this._vals = e2, this.type = i;
  }
  static parse(t2, e2) {
    if (t2.length !== 3)
      throw new Error('"in" expects 2 arguments');
    return new V(pt(t2[1], e2), pt(t2[2], e2));
  }
  evaluate(t2, e2) {
    const r2 = this._key.evaluate(t2, e2);
    return this._vals.evaluate(t2, e2).includes(r2);
  }
}
class D$1 {
  constructor(t2, e$12, r2) {
    this._item = t2, this._array = e$12, this._from = r2, this.type = e;
  }
  static parse(t2, e$12) {
    if (t2.length < 3 || t2.length > 4)
      throw new Error('"index-of" expects 3 or 4 arguments');
    const r2 = pt(t2[1], e$12), s2 = pt(t2[2], e$12);
    if (t2.length === 4) {
      const n2 = pt(t2[3], e$12, e);
      return new D$1(r2, s2, n2);
    }
    return new D$1(r2, s2);
  }
  evaluate(t2, e2) {
    const r2 = this._item.evaluate(t2, e2), s2 = this._array.evaluate(t2, e2);
    if (this._from) {
      const n2 = this._from.evaluate(t2, e2);
      if (n2 !== Math.floor(n2))
        throw new Error('"index-of" index must be an integer');
      return s2.indexOf(r2, n2);
    }
    return s2.indexOf(r2);
  }
}
class H {
  constructor(t2) {
    this._arg = t2, this.type = e;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"length" expects 2 arguments');
    const r2 = pt(t2[1], e2);
    return new H(r2);
  }
  evaluate(t2, e2) {
    const r2 = this._arg.evaluate(t2, e2);
    if (typeof r2 == "string")
      return r2.length;
    if (Array.isArray(r2))
      return r2.length;
    throw new Error('"length" expects string or array');
  }
}
class J {
  constructor(t2, e2, r2, s2) {
    this.type = t2, this._array = e2, this._from = r2, this._to = s2;
  }
  static parse(t2, e$12) {
    if (t2.length < 3 || t2.length > 4)
      throw new Error('"slice" expects 2 or 3 arguments');
    const r2 = pt(t2[1], e$12), s2 = pt(t2[2], e$12, e);
    if (s2.type !== e)
      throw new Error('"slice" index must return a number');
    if (t2.length === 4) {
      const n2 = pt(t2[3], e$12, e);
      if (n2.type !== e)
        throw new Error('"slice" index must return a number');
      return new J(r2.type, r2, s2, n2);
    }
    return new J(r2.type, r2, s2);
  }
  evaluate(t2, e2) {
    const r2 = this._array.evaluate(t2, e2);
    if (!Array.isArray(r2) && typeof r2 != "string")
      throw new Error('"slice" input must be an array or a string');
    const s2 = this._from.evaluate(t2, e2);
    if (s2 < 0 || s2 >= r2.length)
      throw new Error('"slice" index out of bounds');
    if (s2 !== Math.floor(s2))
      throw new Error('"slice" index must be an integer');
    if (this._to) {
      const n2 = this._to.evaluate(t2, e2);
      if (n2 < 0 || n2 >= r2.length)
        throw new Error('"slice" index out of bounds');
      if (n2 !== Math.floor(n2))
        throw new Error('"slice" index must be an integer');
      return r2.slice(s2, n2);
    }
    return r2.slice(s2);
  }
}
class K {
  constructor() {
    this.type = i;
  }
  static parse(t2) {
    if (t2.length !== 1)
      throw new Error('"has-id" expects no arguments');
    return new K();
  }
  evaluate(t2, e2) {
    return t2 && t2.id !== void 0;
  }
}
class Q {
  constructor(t2, e$12) {
    this._args = t2, this._calculate = e$12, this.type = e;
  }
  static parse(t2, e2, r2) {
    const s2 = t2.slice(1).map((t3) => pt(t3, e2));
    return new Q(s2, r2);
  }
  evaluate(t2, e2) {
    let r2;
    return this._args && (r2 = this._args.map((r3) => r3.evaluate(t2, e2))), this._calculate(r2);
  }
}
class W extends Q {
  static parse(t2, e2) {
    switch (t2.length) {
      case 2:
        return Q.parse(t2, e2, (t3) => -t3[0]);
      case 3:
        return Q.parse(t2, e2, (t3) => t3[0] - t3[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
}
class X extends Q {
  static parse(t2, e2) {
    return Q.parse(t2, e2, (t3) => {
      let e3 = 1;
      for (const r2 of t3)
        e3 *= r2;
      return e3;
    });
  }
}
class Y extends Q {
  static parse(t2, e2) {
    if (t2.length === 3)
      return Q.parse(t2, e2, (t3) => t3[0] / t3[1]);
    throw new Error('"/" expects 2 arguments');
  }
}
class Z extends Q {
  static parse(t2, e2) {
    if (t2.length === 3)
      return Q.parse(t2, e2, (t3) => t3[0] % t3[1]);
    throw new Error('"%" expects 2 arguments');
  }
}
class tt extends Q {
  static parse(t2, e2) {
    if (t2.length === 3)
      return Q.parse(t2, e2, (t3) => t3[0] ** t3[1]);
    throw new Error('"^" expects 1 or 2 arguments');
  }
}
class et extends Q {
  static parse(t2, e2) {
    return Q.parse(t2, e2, (t3) => {
      let e3 = 0;
      for (const r2 of t3)
        e3 += r2;
      return e3;
    });
  }
}
class rt {
  constructor(t2, e$12) {
    this._args = t2, this._calculate = e$12, this.type = e;
  }
  static parse(t2, e2) {
    const r2 = t2.slice(1).map((t3) => pt(t3, e2));
    return new rt(r2, rt.ops[t2[0]]);
  }
  evaluate(t2, e2) {
    let r2;
    return this._args && (r2 = this._args.map((r3) => r3.evaluate(t2, e2))), this._calculate(r2);
  }
}
rt.ops = { abs: (t2) => Math.abs(t2[0]), acos: (t2) => Math.acos(t2[0]), asin: (t2) => Math.asin(t2[0]), atan: (t2) => Math.atan(t2[0]), ceil: (t2) => Math.ceil(t2[0]), cos: (t2) => Math.cos(t2[0]), e: () => Math.E, floor: (t2) => Math.floor(t2[0]), ln: (t2) => Math.log(t2[0]), ln2: () => Math.LN2, log10: (t2) => Math.log(t2[0]) / Math.LN10, log2: (t2) => Math.log(t2[0]) / Math.LN2, max: (t2) => Math.max(...t2), min: (t2) => Math.min(...t2), pi: () => Math.PI, round: (t2) => Math.round(t2[0]), sin: (t2) => Math.sin(t2[0]), sqrt: (t2) => Math.sqrt(t2[0]), tan: (t2) => Math.tan(t2[0]) };
class st {
  constructor(t2) {
    this._args = t2, this.type = t$1;
  }
  static parse(t2, e2) {
    return new st(t2.slice(1).map((t3) => pt(t3, e2)));
  }
  evaluate(t2, e2) {
    return this._args.map((r2) => r2.evaluate(t2, e2)).join("");
  }
}
class nt {
  constructor(t2, e2) {
    this._arg = t2, this._calculate = e2, this.type = t$1;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error(`${t2[0]} expects 1 argument`);
    const r2 = pt(t2[1], e2);
    return new nt(r2, nt.ops[t2[0]]);
  }
  evaluate(t2, e2) {
    return this._calculate(this._arg.evaluate(t2, e2));
  }
}
nt.ops = { downcase: (t2) => t2.toLowerCase(), upcase: (t2) => t2.toUpperCase() };
class at {
  constructor(t2) {
    this._args = t2, this.type = o;
  }
  static parse(t2, e2) {
    if (t2.length !== 4)
      throw new Error('"rgb" expects 3 arguments');
    const r2 = t2.slice(1).map((t3) => pt(t3, e2));
    return new at(r2);
  }
  evaluate(e2, r2) {
    const s2 = this._validate(this._args[0].evaluate(e2, r2)), n2 = this._validate(this._args[1].evaluate(e2, r2)), a2 = this._validate(this._args[2].evaluate(e2, r2));
    return new l$3({ r: s2, g: n2, b: a2 });
  }
  _validate(t2) {
    if (typeof t2 != "number" || t2 < 0 || t2 > 255)
      throw new Error(`${t2}: invalid color component`);
    return Math.round(t2);
  }
}
class ot {
  constructor(t2) {
    this._args = t2, this.type = o;
  }
  static parse(t2, e2) {
    if (t2.length !== 5)
      throw new Error('"rgba" expects 4 arguments');
    const r2 = t2.slice(1).map((t3) => pt(t3, e2));
    return new ot(r2);
  }
  evaluate(e2, r2) {
    const s2 = this._validate(this._args[0].evaluate(e2, r2)), n2 = this._validate(this._args[1].evaluate(e2, r2)), a2 = this._validate(this._args[2].evaluate(e2, r2)), o2 = this._validateAlpha(this._args[3].evaluate(e2, r2));
    return new l$3({ r: s2, g: n2, b: a2, a: o2 });
  }
  _validate(t2) {
    if (typeof t2 != "number" || t2 < 0 || t2 > 255)
      throw new Error(`${t2}: invalid color component`);
    return Math.round(t2);
  }
  _validateAlpha(t2) {
    if (typeof t2 != "number" || t2 < 0 || t2 > 1)
      throw new Error(`${t2}: invalid alpha color component`);
    return t2;
  }
}
class it {
  constructor(t2) {
    this._color = t2, this.type = a(e, 4);
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"to-rgba" expects 1 argument');
    const r2 = pt(t2[1], e2);
    return new it(r2);
  }
  evaluate(e2, r2) {
    return new l$3(this._color.evaluate(e2, r2)).toRgba();
  }
}
class lt {
  constructor(t2, e2) {
    this.type = t2, this._args = e2;
  }
  static parse(t2, e$12) {
    const r2 = t2[0];
    if (t2.length < 2)
      throw new Error(`${r2} expects at least one argument`);
    let s2, n2 = 1;
    if (r2 === "array") {
      if (t2.length > 2) {
        switch (t2[1]) {
          case "string":
            s2 = t$1;
            break;
          case "number":
            s2 = e;
            break;
          case "boolean":
            s2 = i;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        n2++;
      } else
        s2 = u;
      let e$13;
      if (t2.length > 3) {
        if (e$13 = t2[2], e$13 !== null && (typeof e$13 != "number" || e$13 < 0 || e$13 !== Math.floor(e$13)))
          throw new Error('"array" length argument must be a positive integer literal');
        n2++;
      }
      s2 = a(s2, e$13);
    } else
      switch (r2) {
        case "string":
          s2 = t$1;
          break;
        case "number":
          s2 = e;
          break;
        case "boolean":
          s2 = i;
          break;
        case "object":
          s2 = f$1;
      }
    const a$12 = [];
    for (; n2 < t2.length; n2++) {
      const r3 = pt(t2[n2], e$12);
      a$12.push(r3);
    }
    return new lt(s2, a$12);
  }
  evaluate(t2, e2) {
    let r2;
    for (const s2 of this._args) {
      const n2 = s2.evaluate(t2, e2);
      if (r2 = l$1(n2), c$1(r2, this.type))
        return n2;
    }
    throw new Error(`Expected ${k$1(this.type)} but got ${k$1(r2)}`);
  }
}
class ut {
  constructor(t2, e2) {
    this.type = t2, this._args = e2;
  }
  static parse(t2, e2) {
    const r2 = t2[0], s2 = ut.types[r2];
    if (s2 === i || s2 === t$1) {
      if (t2.length !== 2)
        throw new Error(`${r2} expects one argument`);
    } else if (t2.length < 2)
      throw new Error(`${r2} expects at least one argument`);
    const n2 = [];
    for (let a2 = 1; a2 < t2.length; a2++) {
      const r3 = pt(t2[a2], e2);
      n2.push(r3);
    }
    return new ut(s2, n2);
  }
  evaluate(e$12, r2) {
    if (this.type === i)
      return Boolean(this._args[0].evaluate(e$12, r2));
    if (this.type === t$1)
      return d$2(this._args[0].evaluate(e$12, r2));
    if (this.type === e) {
      for (const t2 of this._args) {
        const s2 = Number(t2.evaluate(e$12, r2));
        if (!isNaN(s2))
          return s2;
      }
      return null;
    }
    if (this.type === o) {
      for (const s2 of this._args)
        try {
          const n2 = ut.toColor(s2.evaluate(e$12, r2));
          if (n2 instanceof l$3)
            return n2;
        } catch {
        }
      return null;
    }
  }
  static toBoolean(t2) {
    return Boolean(t2);
  }
  static toString(t2) {
    return d$2(t2);
  }
  static toNumber(t2) {
    const e2 = Number(t2);
    if (isNaN(e2))
      throw new Error(`"${t2}" is not a number`);
    return e2;
  }
  static toColor(e2) {
    if (e2 instanceof l$3)
      return e2;
    if (typeof e2 == "string") {
      const r2 = l$3.fromString(e2);
      if (r2)
        return r2;
      throw new Error(`"${e2}" is not a color`);
    }
    if (Array.isArray(e2))
      return l$3.fromArray(e2);
    throw new Error(`"${e2}" is not a color`);
  }
}
ut.types = { "to-boolean": i, "to-color": o, "to-number": e, "to-string": t$1 };
class ct {
  constructor(t2) {
    this._val = t2, this.type = l$1(t2);
  }
  static parse(t2) {
    if (t2.length !== 2)
      throw new Error('"literal" expects 1 argument');
    return new ct(t2[1]);
  }
  evaluate(t2, e2) {
    return this._val;
  }
}
class ht {
  constructor(t2) {
    this._arg = t2, this.type = t$1;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"typeof" expects 1 argument');
    return new ht(pt(t2[1], e2));
  }
  evaluate(t2, e2) {
    return k$1(l$1(this._arg.evaluate(t2, e2)));
  }
}
function pt(t2, e2, r2) {
  const s2 = typeof t2;
  if (s2 === "string" || s2 === "boolean" || s2 === "number" || t2 === null) {
    if (r2)
      switch (r2.kind) {
        case "string":
          s2 !== "string" && (t2 = ut.toString(t2));
          break;
        case "number":
          s2 !== "number" && (t2 = ut.toNumber(t2));
          break;
        case "color":
          t2 = ut.toColor(t2);
      }
    t2 = ["literal", t2];
  }
  if (!Array.isArray(t2) || t2.length === 0)
    throw new Error("Expression must be a non empty array");
  const n2 = t2[0];
  if (typeof n2 != "string")
    throw new Error("First element of expression must be a string");
  const a2 = gt[n2];
  if (a2 === void 0)
    throw new Error(`Invalid expression operator "${n2}"`);
  if (!a2)
    throw new Error(`Unimplemented expression operator "${n2}"`);
  return a2.parse(t2, e2, r2);
}
const gt = { array: lt, boolean: lt, collator: null, format: null, image: null, literal: ct, number: lt, "number-format": null, object: lt, string: lt, "to-boolean": ut, "to-color": ut, "to-number": ut, "to-string": ut, typeof: ht, accumulated: null, "feature-state": null, "geometry-type": b, id: v, "line-progress": null, properties: d$1, at: O, get: T$1, has: F, in: V, "index-of": D$1, length: H, slice: J, "!": N, "!=": M, "<": k, "<=": A, "==": $, ">": j, ">=": q, all: R, any: C, case: I, coalesce: L$1, match: U, within: null, interpolate: P$1, "interpolate-hcl": P$1, "interpolate-lab": P$1, step: S, let: B, var: G, concat: st, downcase: nt, "is-supported-script": null, "resolved-locale": null, upcase: nt, rgb: at, rgba: ot, "to-rgba": it, "-": W, "*": X, "/": Y, "%": Z, "^": tt, "+": et, abs: rt, acos: rt, asin: rt, atan: rt, ceil: rt, cos: rt, e: rt, floor: rt, ln: rt, ln2: rt, log10: rt, log2: rt, max: rt, min: rt, pi: rt, round: rt, sin: rt, sqrt: rt, tan: rt, zoom: x, "heatmap-density": null, "has-id": K, none: z };
class t {
  constructor(e2) {
    this._expression = e2;
  }
  filter(e2, r2) {
    if (!this._expression)
      return true;
    try {
      return this._expression.evaluate(e2, r2);
    } catch (t2) {
      return console.log(t2.message), true;
    }
  }
  static createFilter(n2) {
    if (!n2)
      return null;
    this.isLegacyFilter(n2) && (n2 = this.convertLegacyFilter(n2));
    try {
      const s2 = pt(n2, null, i);
      return new t(s2);
    } catch (s2) {
      return console.log(s2.message), null;
    }
  }
  static isLegacyFilter(e2) {
    if (!Array.isArray(e2))
      return true;
    if (e2.length === 0)
      return true;
    switch (e2[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return e2.length === 3 && typeof e2[1] == "string" && !Array.isArray(e2[2]);
      case "in":
        return e2.length >= 3 && typeof e2[1] == "string" && !Array.isArray(e2[2]);
      case "!in":
      case "none":
      case "!has":
        return true;
      case "any":
      case "all":
        for (let r2 = 1; r2 < e2.length; r2++)
          if (this.isLegacyFilter(e2[r2]))
            return true;
        return false;
      case "has":
        return e2.length === 2 && (e2[1] === "$id" || e2[1] === "$type");
      default:
        return false;
    }
  }
  static convertLegacyFilter(e2) {
    if (!Array.isArray(e2) || e2.length === 0)
      return true;
    const r2 = e2[0];
    if (e2.length === 1)
      return r2 !== "any";
    switch (r2) {
      case "==":
        return t.convertComparison("==", e2[1], e2[2]);
      case "!=":
        return t.negate(t.convertComparison("==", e2[1], e2[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return t.convertComparison(r2, e2[1], e2[2]);
      case "in":
        return t.convertIn(e2[1], e2.slice(2));
      case "!in":
        return t.negate(t.convertIn(e2[1], e2.slice(2)));
      case "any":
      case "all":
      case "none":
        return t.convertCombining(r2, e2.slice(1));
      case "has":
        return t.convertHas(e2[1]);
      case "!has":
        return t.negate(t.convertHas(e2[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(e2, r2, t2) {
    switch (r2) {
      case "$type":
        return [e2, ["geometry-type"], t2];
      case "$id":
        return [e2, ["id"], t2];
      default:
        return [e2, ["get", r2], t2];
    }
  }
  static convertIn(e2, r2) {
    switch (e2) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", r2]];
      case "$id":
        return ["in", ["id"], ["literal", r2]];
      default:
        return ["in", ["get", e2], ["literal", r2]];
    }
  }
  static convertHas(e2) {
    switch (e2) {
      case "$type":
        return true;
      case "$id":
        return ["has-id"];
      default:
        return ["has", e2];
    }
  }
  static convertCombining(e2, r2) {
    return [e2].concat(r2.map(this.convertLegacyFilter));
  }
  static negate(e2) {
    return ["!", e2];
  }
}
class h {
  constructor(t2, e$12) {
    let n2;
    switch (this.isDataDriven = false, this.interpolator = null, t2.type) {
      case "number":
      case "color":
        n2 = true;
        break;
      case "array":
        n2 = t2.value === "number";
        break;
      default:
        n2 = false;
    }
    if (e$12 == null && (e$12 = t2.default), Array.isArray(e$12) && e$12.length > 0 && gt[e$12[0]]) {
      const r2 = { number: e, color: o, string: t$1, boolean: i, enum: t$1 };
      try {
        const n3 = t2.type === "array" ? a(r2[t2.value] || u, t2.length) : r2[t2.type], u$1 = pt(e$12, null, n3);
        this.getValue = this._buildExpression(u$1, t2), this.isDataDriven = true, u$1 instanceof P$1 && u$1.input instanceof x && (this.interpolator = u$1);
      } catch (c2) {
        console.log(c2.message), this.getValue = this._buildSimple(t2.default);
      }
      return;
    }
    n2 && e$12.type === "interval" && (n2 = false);
    const h2 = e$12 && e$12.stops && e$12.stops.length > 0;
    if (h2)
      for (const r2 of e$12.stops)
        r2[1] = this._validate(r2[1], t2);
    if (this.isDataDriven = !!e$12 && !!e$12.property, this.isDataDriven)
      if (e$12.default !== void 0 && (e$12.default = this._validate(e$12.default, t2)), h2)
        switch (e$12.type) {
          case "identity":
            this.getValue = this._buildIdentity(e$12, t2);
            break;
          case "categorical":
            this.getValue = this._buildCategorical(e$12, t2);
            break;
          default:
            this.getValue = n2 ? this._buildInterpolate(e$12, t2) : this._buildInterval(e$12, t2);
        }
      else
        this.getValue = this._buildIdentity(e$12, t2);
    else
      h2 ? this.getValue = n2 ? this._buildZoomInterpolate(e$12) : this._buildZoomInterval(e$12) : (e$12 = this._validate(e$12, t2), this.getValue = this._buildSimple(e$12));
  }
  _validate(t2, e2) {
    if (e2.type === "number") {
      if (t2 < e2.minimum)
        return e2.minimum;
      if (t2 > e2.maximum)
        return e2.maximum;
    } else
      e2.type === "color" ? t2 = h._parseColor(t2) : e2.type === "enum" ? typeof t2 == "string" && (t2 = e2.values.indexOf(t2)) : e2.type === "array" && e2.value === "enum" ? t2 = t2.map((t3) => typeof t3 == "string" ? e2.values.indexOf(t3) : t3) : e2.type === "string" && (t2 = d$2(t2));
    return t2;
  }
  _buildSimple(t2) {
    return () => t2;
  }
  _buildExpression(t2, e2) {
    return (r2, i2) => {
      try {
        const l2 = t2.evaluate(i2, r2);
        return l2 === void 0 ? e2.default : this._validate(l2, e2);
      } catch (l2) {
        return console.log(l2.message), e2.default;
      }
    };
  }
  _buildIdentity(t2, e2) {
    return (r2, i2) => {
      let l2;
      return i2 && (l2 = i2.values[t2.property]), l2 !== void 0 && (l2 = this._validate(l2, e2)), l2 != null ? l2 : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildCategorical(t2, e2) {
    return (r2, i2) => {
      let l2;
      return i2 && (l2 = i2.values[t2.property]), l2 = this._categorical(l2, t2.stops), l2 !== void 0 ? l2 : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildInterval(t2, e2) {
    return (r2, i2) => {
      let l2;
      return i2 && (l2 = i2.values[t2.property]), typeof l2 == "number" ? this._interval(l2, t2.stops) : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildInterpolate(t2, e2) {
    return (r2, i2) => {
      let l2;
      return i2 && (l2 = i2.values[t2.property]), typeof l2 == "number" ? this._interpolate(l2, t2.stops, t2.base || 1) : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildZoomInterpolate(t2) {
    return (e2) => this._interpolate(e2, t2.stops, t2.base || 1);
  }
  _buildZoomInterval(t2) {
    return (e2) => this._interval(e2, t2.stops);
  }
  _categorical(t2, e2) {
    const r2 = e2.length;
    for (let i2 = 0; i2 < r2; i2++)
      if (e2[i2][0] === t2)
        return e2[i2][1];
  }
  _interval(t2, e2) {
    const r2 = e2.length;
    let i2 = 0;
    for (let l2 = 0; l2 < r2 && e2[l2][0] <= t2; l2++)
      i2 = l2;
    return e2[i2][1];
  }
  _interpolate(t2, r2, i2) {
    let l2, a2;
    const s2 = r2.length;
    for (let e2 = 0; e2 < s2; e2++) {
      const i3 = r2[e2];
      if (!(i3[0] <= t2)) {
        a2 = i3;
        break;
      }
      l2 = i3;
    }
    if (l2 && a2) {
      const r3 = a2[0] - l2[0], s3 = t2 - l2[0], o2 = i2 === 1 ? s3 / r3 : (i2 ** s3 - 1) / (i2 ** r3 - 1);
      if (Array.isArray(l2[1])) {
        const t3 = l2[1], r4 = a2[1], i3 = [];
        for (let l3 = 0; l3 < t3.length; l3++)
          i3.push(b$1(t3[l3], r4[l3], o2));
        return i3;
      }
      return b$1(l2[1], a2[1], o2);
    }
    return l2 ? l2[1] : a2 ? a2[1] : void 0;
  }
  static _isEmpty(t2) {
    for (const e2 in t2)
      if (t2.hasOwnProperty(e2))
        return false;
    return true;
  }
  static _parseColor(e2) {
    return Array.isArray(e2) ? e2 : (typeof e2 == "string" && (e2 = new l$3(e2)), e2 instanceof l$3 && !this._isEmpty(e2) ? l$3.toUnitRGBA(e2) : void 0);
  }
}
var D;
!function(t2) {
  t2[t2.BUTT = 0] = "BUTT", t2[t2.ROUND = 1] = "ROUND", t2[t2.SQUARE = 2] = "SQUARE", t2[t2.UNKNOWN = 4] = "UNKNOWN";
}(D || (D = {}));
class P {
  constructor(t2, i2, e2, a2) {
    switch (this.type = t2, this.typeName = i2.type, this.id = i2.id, this.source = i2.source, this.sourceLayer = i2["source-layer"], this.minzoom = i2.minzoom, this.maxzoom = i2.maxzoom, this.filter = i2.filter, this.layout = i2.layout, this.paint = i2.paint, this.z = e2, this.uid = a2, t2) {
      case a$3.BACKGROUND:
        this._layoutDefinition = f$2.backgroundLayoutDefinition, this._paintDefinition = f$2.backgroundPaintDefinition;
        break;
      case a$3.FILL:
        this._layoutDefinition = f$2.fillLayoutDefinition, this._paintDefinition = f$2.fillPaintDefinition;
        break;
      case a$3.LINE:
        this._layoutDefinition = f$2.lineLayoutDefinition, this._paintDefinition = f$2.linePaintDefinition;
        break;
      case a$3.SYMBOL:
        this._layoutDefinition = f$2.symbolLayoutDefinition, this._paintDefinition = f$2.symbolPaintDefinition;
        break;
      case a$3.CIRCLE:
        this._layoutDefinition = f$2.circleLayoutDefinition, this._paintDefinition = f$2.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return this._featureFilter !== void 0 ? this._featureFilter : this._featureFilter = t.createFilter(this.filter);
  }
  getLayoutProperty(t2) {
    return this._layoutProperties[t2];
  }
  getPaintProperty(t2) {
    return this._paintProperties[t2];
  }
  getLayoutValue(t2, i2, e2) {
    let a2;
    const o2 = this._layoutProperties[t2];
    return o2 && (a2 = o2.getValue(i2, e2)), a2 === void 0 && (a2 = this._layoutDefinition[t2].default), a2;
  }
  getPaintValue(t2, i2, e2) {
    let a2;
    const o2 = this._paintProperties[t2];
    return o2 && (a2 = o2.getValue(i2, e2)), a2 === void 0 && (a2 = this._paintDefinition[t2].default), a2;
  }
  isPainterDataDriven() {
    const t2 = this._paintProperties;
    if (t2) {
      for (const i2 in t2)
        if (t2[i2].isDataDriven)
          return true;
    }
    return false;
  }
  _parseLayout(t2) {
    const i2 = {};
    for (const e2 in t2) {
      const a2 = this._layoutDefinition[e2];
      a2 && (i2[e2] = new h(a2, t2[e2]));
    }
    return i2;
  }
  _parsePaint(t2) {
    const i2 = {};
    for (const e2 in t2) {
      const a2 = this._paintDefinition[e2];
      a2 && (i2[e2] = new h(a2, t2[e2]));
    }
    return i2;
  }
  computeAttributesKey(t2, i2, e2, a2) {
    let o2 = 0, r2 = 0;
    for (const s2 of i2) {
      let t3 = 3;
      if (!s2 || s2 !== a2) {
        const i3 = e2[s2], { isLayout: a3, isOptional: o3 } = i3, r3 = a3 ? this.getLayoutProperty(s2) : this.getPaintProperty(s2);
        t3 = (r3 == null ? void 0 : r3.interpolator) ? 2 : (r3 == null ? void 0 : r3.isDataDriven) ? 1 : o3 && !r3 ? 3 : 0;
      }
      r2 |= t3 << o2, o2 += 2;
    }
    return r2 << 3 | t2;
  }
}
class c extends P {
  constructor(e2, a2, o2, r2) {
    super(e2, a2, o2, r2), this.backgroundMaterial = new T$3(this.computeAttributesKey(T$4.BACKGROUND, T$3.ATTRIBUTES, T$3.ATTRIBUTES_INFO));
  }
}
class f extends P {
  constructor(i2, e2, r2, s2) {
    super(i2, e2, r2, s2);
    const n2 = this.getPaintProperty("fill-color"), h2 = this.getPaintProperty("fill-opacity"), l2 = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = n2 == null ? void 0 : n2.isDataDriven, this.hasDataDrivenOpacity = h2 == null ? void 0 : h2.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || (l2 == null ? void 0 : l2.isDataDriven);
    const p2 = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !p2, this.hasDataDrivenOutlineColor = p2 == null ? void 0 : p2.isDataDriven, this.hasDataDrivenOutline = p2 ? p2.isDataDriven : !!n2 && n2.isDataDriven, this.hasDataDrivenOutline = (p2 ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new l$2(this.computeAttributesKey(T$4.FILL, l$2.ATTRIBUTES, l$2.ATTRIBUTES_INFO)), this.outlineMaterial = new T$2(this.computeAttributesKey(T$4.OUTLINE, this.outlineUsesFillColor ? T$2.ATTRIBUTES_FILL : T$2.ATTRIBUTES_OUTLINE, this.outlineUsesFillColor ? T$2.ATTRIBUTES_INFO_FILL : T$2.ATTRIBUTES_INFO_OUTLINE), this.outlineUsesFillColor);
  }
}
class _ extends P {
  constructor(i2, e2, a2, o2) {
    super(i2, e2, a2, o2);
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const s2 = this.getPaintProperty("line-pattern");
    if (this.lineMaterial = new i$2(this.computeAttributesKey(T$4.LINE, i$2.ATTRIBUTES, i$2.ATTRIBUTES_INFO, s2 ? "line-dasharray" : "")), this.hasDataDrivenLine = ((_a = this.getPaintProperty("line-blur")) == null ? void 0 : _a.isDataDriven) || ((_b = this.getPaintProperty("line-color")) == null ? void 0 : _b.isDataDriven) || ((_c = this.getPaintProperty("line-gap-width")) == null ? void 0 : _c.isDataDriven) || ((_d = this.getPaintProperty("line-offset")) == null ? void 0 : _d.isDataDriven) || ((_e = this.getPaintProperty("line-opacity")) == null ? void 0 : _e.isDataDriven) || ((_f = this.getPaintProperty("line-pattern")) == null ? void 0 : _f.isDataDriven) || ((_g = this.getPaintProperty("line-dasharray")) == null ? void 0 : _g.isDataDriven) || ((_h = this.getLayoutProperty("line-cap")) == null ? void 0 : _h.isDataDriven) || ((_i = this.getPaintProperty("line-width")) == null ? void 0 : _i.isDataDriven), this.canUseThinTessellation = false, !this.hasDataDrivenLine) {
      const t2 = this.getPaintProperty("line-width");
      if (!t2 || typeof t2 == "number" && 0.5 * t2 < X$1) {
        const t3 = this.getPaintProperty("line-offset");
        (!t3 || typeof t3 == "number" && t3 === 0) && (this.canUseThinTessellation = true);
      }
    }
  }
  getDashKey(t2, i2) {
    let e2;
    switch (i2) {
      case D.BUTT:
        e2 = "Butt";
        break;
      case D.ROUND:
        e2 = "Round";
        break;
      case D.SQUARE:
        e2 = "Square";
        break;
      default:
        e2 = "Butt";
    }
    return `dasharray-[${t2.toString()}]-${e2}`;
  }
}
class L extends P {
  constructor(i2, e2, a2, o2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    super(i2, e2, a2, o2), this.iconMaterial = new i$1(this.computeAttributesKey(T$4.ICON, i$1.ATTRIBUTES, i$1.ATTRIBUTES_INFO)), this.textMaterial = new c$2(this.computeAttributesKey(T$4.TEXT, c$2.ATTRIBUTES, c$2.ATTRIBUTES_INFO)), this.hasDataDrivenIcon = ((_a = this.getPaintProperty("icon-color")) == null ? void 0 : _a.isDataDriven) || ((_b = this.getPaintProperty("icon-halo-blur")) == null ? void 0 : _b.isDataDriven) || ((_c = this.getPaintProperty("icon-halo-color")) == null ? void 0 : _c.isDataDriven) || ((_d = this.getPaintProperty("icon-halo-width")) == null ? void 0 : _d.isDataDriven) || ((_e = this.getPaintProperty("icon-opacity")) == null ? void 0 : _e.isDataDriven) || ((_f = this.getLayoutProperty("icon-size")) == null ? void 0 : _f.isDataDriven), this.hasDataDrivenText = ((_g = this.getPaintProperty("text-color")) == null ? void 0 : _g.isDataDriven) || ((_h = this.getPaintProperty("text-halo-blur")) == null ? void 0 : _h.isDataDriven) || ((_i = this.getPaintProperty("text-halo-color")) == null ? void 0 : _i.isDataDriven) || ((_j = this.getPaintProperty("text-halo-width")) == null ? void 0 : _j.isDataDriven) || ((_k = this.getPaintProperty("text-opacity")) == null ? void 0 : _k.isDataDriven) || ((_l = this.getLayoutProperty("text-size")) == null ? void 0 : _l.isDataDriven);
  }
}
class d extends P {
  constructor(i2, a2, o2, r2) {
    super(i2, a2, o2, r2), this.circleMaterial = new t$2(this.computeAttributesKey(T$4.CIRCLE, t$2.ATTRIBUTES, t$2.ATTRIBUTES_INFO));
  }
}
class T {
  constructor(t2, i2, e2) {
    let a2;
    this.allowOverlap = t2.getLayoutValue("icon-allow-overlap", i2), this.ignorePlacement = t2.getLayoutValue("icon-ignore-placement", i2), this.keepUpright = t2.getLayoutValue("icon-keep-upright", i2), this.optional = t2.getLayoutValue("icon-optional", i2), this.rotationAlignment = t2.getLayoutValue("icon-rotation-alignment", i2), this.rotationAlignment === l$4.AUTO && (this.rotationAlignment = e2 ? l$4.MAP : l$4.VIEWPORT), a2 = t2.getLayoutProperty("icon-anchor"), (a2 == null ? void 0 : a2.isDataDriven) ? this._anchorProp = a2 : this.anchor = t2.getLayoutValue("icon-anchor", i2), a2 = t2.getLayoutProperty("icon-offset"), (a2 == null ? void 0 : a2.isDataDriven) ? this._offsetProp = a2 : this.offset = t2.getLayoutValue("icon-offset", i2), a2 = t2.getLayoutProperty("icon-padding"), (a2 == null ? void 0 : a2.isDataDriven) ? this._paddingProp = a2 : this.padding = t2.getLayoutValue("icon-padding", i2), a2 = t2.getLayoutProperty("icon-rotate"), (a2 == null ? void 0 : a2.isDataDriven) ? this._rotateProp = a2 : this.rotate = t2.getLayoutValue("icon-rotate", i2), a2 = t2.getLayoutProperty("icon-size"), (a2 == null ? void 0 : a2.isDataDriven) ? this._sizeProp = a2 : this.size = t2.getLayoutValue("icon-size", i2);
  }
  update(t2, i2) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t2, i2)), this._offsetProp && (this.offset = this._offsetProp.getValue(t2, i2)), this._paddingProp && (this.padding = this._paddingProp.getValue(t2, i2)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t2, i2)), this._sizeProp && (this.size = this._sizeProp.getValue(t2, i2));
  }
}
class m {
  constructor(t2, i2, e2) {
    let a2;
    this.allowOverlap = t2.getLayoutValue("text-allow-overlap", i2), this.ignorePlacement = t2.getLayoutValue("text-ignore-placement", i2), this.keepUpright = t2.getLayoutValue("text-keep-upright", i2), this.optional = t2.getLayoutValue("text-optional", i2), this.rotationAlignment = t2.getLayoutValue("text-rotation-alignment", i2), this.rotationAlignment === l$4.AUTO && (this.rotationAlignment = e2 ? l$4.MAP : l$4.VIEWPORT), a2 = t2.getLayoutProperty("text-anchor"), (a2 == null ? void 0 : a2.isDataDriven) ? this._anchorProp = a2 : this.anchor = t2.getLayoutValue("text-anchor", i2), a2 = t2.getLayoutProperty("text-justify"), (a2 == null ? void 0 : a2.isDataDriven) ? this._justifyProp = a2 : this.justify = t2.getLayoutValue("text-justify", i2), a2 = t2.getLayoutProperty("text-letter-spacing"), (a2 == null ? void 0 : a2.isDataDriven) ? this._letterSpacingProp = a2 : this.letterSpacing = t2.getLayoutValue("text-letter-spacing", i2), a2 = t2.getLayoutProperty("text-line-height"), (a2 == null ? void 0 : a2.isDataDriven) ? this._lineHeightProp = a2 : this.lineHeight = t2.getLayoutValue("text-line-height", i2), a2 = t2.getLayoutProperty("text-max-angle"), (a2 == null ? void 0 : a2.isDataDriven) ? this._maxAngleProp = a2 : this.maxAngle = t2.getLayoutValue("text-max-angle", i2), a2 = t2.getLayoutProperty("text-max-width"), (a2 == null ? void 0 : a2.isDataDriven) ? this._maxWidthProp = a2 : this.maxWidth = t2.getLayoutValue("text-max-width", i2), a2 = t2.getLayoutProperty("text-offset"), (a2 == null ? void 0 : a2.isDataDriven) ? this._offsetProp = a2 : this.offset = t2.getLayoutValue("text-offset", i2), a2 = t2.getLayoutProperty("text-padding"), (a2 == null ? void 0 : a2.isDataDriven) ? this._paddingProp = a2 : this.padding = t2.getLayoutValue("text-padding", i2), a2 = t2.getLayoutProperty("text-rotate"), (a2 == null ? void 0 : a2.isDataDriven) ? this._rotateProp = a2 : this.rotate = t2.getLayoutValue("text-rotate", i2), a2 = t2.getLayoutProperty("text-size"), (a2 == null ? void 0 : a2.isDataDriven) ? this._sizeProp = a2 : this.size = t2.getLayoutValue("text-size", i2), a2 = t2.getLayoutProperty("text-writing-mode"), (a2 == null ? void 0 : a2.isDataDriven) ? this._writingModeProp = a2 : this.writingMode = t2.getLayoutValue("text-writing-mode", i2);
  }
  update(t2, i2) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t2, i2)), this._justifyProp && (this.justify = this._justifyProp.getValue(t2, i2)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t2, i2)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t2, i2)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t2, i2)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t2, i2)), this._offsetProp && (this.offset = this._offsetProp.getValue(t2, i2)), this._paddingProp && (this.padding = this._paddingProp.getValue(t2, i2)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t2, i2)), this._sizeProp && (this.size = this._sizeProp.getValue(t2, i2)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t2, i2));
  }
}
class l {
  constructor(t2) {
    if (this._style = t2, this.backgroundBucketIds = [], this._uidToLayer = new Map(), this._layerByName = {}, this._runningId = 0, t2.layers || (t2.layers = []), this.version = parseFloat(t2.version), this.layers = t2.layers.map((e2, t3, r2) => this._create(e2, t3, r2)).filter((e2) => !!e2), this.layers) {
      let t3;
      for (let r2 = 0; r2 < this.layers.length; r2++)
        t3 = this.layers[r2], this._layerByName[t3.id] = t3, this._uidToLayer.set(t3.uid, t3), t3.type === a$3.BACKGROUND && this.backgroundBucketIds.push(t3.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(e2) {
    const t2 = this._layerByName[e2];
    return !!t2 && t2.isPainterDataDriven();
  }
  getStyleLayerId(e2) {
    return e2 >= this.layers.length ? null : this.layers[e2].id;
  }
  getStyleLayerByUID(e2) {
    var _a;
    return (_a = this._uidToLayer.get(e2)) != null ? _a : null;
  }
  getStyleLayerIndex(e2) {
    const t2 = this._layerByName[e2];
    return t2 ? this.layers.indexOf(t2) : -1;
  }
  setStyleLayer(e2, t2) {
    if (!e2 || !e2.id)
      return;
    const r2 = this._style;
    t2 != null && t2 >= this.layers.length && (t2 = this.layers.length - 1);
    let i2, s2 = true;
    const a2 = this._layerByName[e2.id];
    if (a2) {
      const y2 = this.layers.indexOf(a2);
      t2 || (t2 = y2), t2 === y2 ? (s2 = false, i2 = l._recreateLayer(e2, a2), this.layers[t2] = i2, r2.layers[t2] = e2) : (this.layers.splice(y2, 1), r2.layers.splice(y2, 1), i2 = this._create(e2, t2, this.layers), this.layers.splice(t2, 0, i2), r2.layers.splice(t2, 0, e2));
    } else
      i2 = this._create(e2, t2, this.layers), !t2 || t2 >= this.layers.length ? (this.layers.push(i2), r2.layers.push(e2)) : (this.layers.splice(t2, 0, i2), r2.layers.splice(t2, 0, e2));
    this._layerByName[e2.id] = i2, this._uidToLayer.set(i2.uid, i2), s2 && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(e2) {
    const t2 = this._layerByName[e2];
    return t2 ? { type: t2.typeName, id: t2.id, source: t2.source, "source-layer": t2.sourceLayer, minzoom: t2.minzoom, maxzoom: t2.maxzoom, filter: t2.filter, layout: t2.layout, paint: t2.paint } : null;
  }
  deleteStyleLayer(e2) {
    const t2 = this._layerByName[e2];
    if (t2) {
      delete this._layerByName[e2], this._uidToLayer.delete(t2.uid);
      const r2 = this.layers.indexOf(t2);
      this.layers.splice(r2, 1), this._style.layers.splice(r2, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(e2) {
    return this._layerByName[e2];
  }
  getLayoutProperties(e2) {
    const t2 = this._layerByName[e2];
    return t2 ? t2.layout : null;
  }
  getPaintProperties(e2) {
    const t2 = this._layerByName[e2];
    return t2 ? t2.paint : null;
  }
  setPaintProperties(e2, t2) {
    const r2 = this._layerByName[e2];
    if (!r2)
      return;
    const i2 = { type: r2.typeName, id: r2.id, source: r2.source, "source-layer": r2.sourceLayer, minzoom: r2.minzoom, maxzoom: r2.maxzoom, filter: r2.filter, layout: r2.layout, paint: t2 }, s2 = l._recreateLayer(i2, r2), a2 = this.layers.indexOf(r2);
    this.layers[a2] = s2, this._style.layers[a2].paint = t2, this._layerByName[r2.id] = s2, this._uidToLayer.set(r2.uid, s2);
  }
  setLayoutProperties(e2, t2) {
    const r2 = this._layerByName[e2];
    if (!r2)
      return;
    const i2 = { type: r2.typeName, id: r2.id, source: r2.source, "source-layer": r2.sourceLayer, minzoom: r2.minzoom, maxzoom: r2.maxzoom, filter: r2.filter, layout: t2, paint: r2.paint }, s2 = l._recreateLayer(i2, r2), a2 = this.layers.indexOf(r2);
    this.layers[a2] = s2, this._style.layers[a2].layout = t2, this._layerByName[r2.id] = s2, this._uidToLayer.set(r2.uid, s2);
  }
  setStyleLayerVisibility(e2, t2) {
    const r2 = this._layerByName[e2];
    if (!r2)
      return;
    const i2 = r2.layout || {};
    i2.visibility = t2;
    const s2 = { type: r2.typeName, id: r2.id, source: r2.source, "source-layer": r2.sourceLayer, minzoom: r2.minzoom, maxzoom: r2.maxzoom, filter: r2.filter, layout: i2, paint: r2.paint }, a2 = l._recreateLayer(s2, r2), y2 = this.layers.indexOf(r2);
    this.layers[y2] = a2, this._style.layers[y2].layout = i2, this._layerByName[r2.id] = a2, this._uidToLayer.set(r2.uid, a2);
  }
  getStyleLayerVisibility(e2) {
    var _a, _b;
    const t2 = this._layerByName[e2];
    if (!t2)
      return "none";
    return (_b = (_a = t2.layout) == null ? void 0 : _a.visibility) != null ? _b : "visible";
  }
  _recomputeZValues() {
    const e2 = this.layers, t2 = 1 / (e2.length + 1);
    for (let r2 = 0; r2 < e2.length; r2++)
      e2[r2].z = 1 - (1 + r2) * t2;
  }
  _identifyRefLayers() {
    var _a, _b;
    const t2 = [], r2 = [];
    let i2 = 0;
    for (const s2 of this.layers) {
      const a2 = s2.layout;
      if (s2.type === a$3.FILL) {
        const e2 = s2;
        let r3 = s2.source + "|" + s2.sourceLayer;
        r3 += "|" + ((_a = a2 == null ? void 0 : a2.visibility) != null ? _a : ""), r3 += "|" + s2.minzoom, r3 += "|" + s2.maxzoom, r3 += "|" + JSON.stringify(s2.filter), (e2.hasDataDrivenFill || e2.hasDataDrivenOutline) && (r3 += "|" + i2), t2.push({ key: r3, layer: s2 });
      } else if (s2.type === a$3.LINE) {
        const e2 = s2, t3 = s2.paint, l2 = t3 != null && (t3["line-pattern"] != null || t3["line-dasharray"] != null);
        let y2 = s2.source + "|" + s2.sourceLayer;
        y2 += "|" + ((_b = a2 == null ? void 0 : a2.visibility) != null ? _b : ""), y2 += "|" + s2.minzoom, y2 += "|" + s2.maxzoom, y2 += "|" + JSON.stringify(s2.filter), y2 += "|" + (a2 !== void 0 ? a2["line-cap"] : ""), y2 += "|" + (a2 !== void 0 ? a2["line-join"] : ""), (e2.hasDataDrivenLine || l2) && (y2 += "|" + i2), r2.push({ key: y2, layer: s2 });
      }
      ++i2;
    }
    this._assignRefLayers(t2), this._assignRefLayers(r2);
  }
  _assignRefLayers(t2) {
    let r2, i2;
    t2.sort((e2, t3) => e2.key < t3.key ? -1 : e2.key > t3.key ? 1 : 0);
    const s2 = t2.length;
    for (let a2 = 0; a2 < s2; a2++) {
      const l2 = t2[a2];
      if (l2.key === r2)
        l2.layer.refLayerId = i2;
      else if (r2 = l2.key, i2 = l2.layer.id, l2.layer.type === a$3.FILL) {
        if (!l2.layer.getPaintProperty("fill-outline-color"))
          for (let e2 = a2 + 1; e2 < s2; e2++) {
            const s3 = t2[e2];
            if (s3.key !== r2)
              break;
            if (s3.layer.getPaintProperty("fill-outline-color")) {
              t2[a2] = s3, t2[e2] = l2, i2 = s3.layer.id;
              break;
            }
          }
      } else if (l2.layer.type === a$3.LINE) {
        let e2 = l2.layer;
        for (let y2 = a2 + 1; y2 < s2; y2++) {
          const s3 = t2[y2];
          if (s3.key !== r2)
            break;
          const n2 = s3.layer;
          (e2.canUseThinTessellation && !n2.canUseThinTessellation || !e2.canUseThinTessellation && (n2.getPaintProperty("line-pattern") || n2.getPaintProperty("line-dasharray"))) && (e2 = n2, t2[a2] = s3, t2[y2] = l2, i2 = s3.layer.id);
        }
      }
    }
  }
  _create(l2, y2, n2) {
    const o2 = 1 - (1 + y2) * (1 / (n2.length + 1)), u2 = this._runningId++;
    switch (l2.type) {
      case "background":
        return new c(a$3.BACKGROUND, l2, o2, u2);
      case "fill":
        return new f(a$3.FILL, l2, o2, u2);
      case "line":
        return new _(a$3.LINE, l2, o2, u2);
      case "symbol":
        return new L(a$3.SYMBOL, l2, o2, u2);
      case "raster":
        console.warn(`Unsupported vector tile raster layer ${l2.id}`);
      case "circle":
        return new d(a$3.CIRCLE, l2, o2, u2);
    }
  }
  static _recreateLayer(l2, y2) {
    switch (l2.type) {
      case "background":
        return new c(a$3.BACKGROUND, l2, y2.z, y2.uid);
      case "fill":
        return new f(a$3.FILL, l2, y2.z, y2.uid);
      case "line":
        return new _(a$3.LINE, l2, y2.z, y2.uid);
      case "symbol":
        return new L(a$3.SYMBOL, l2, y2.z, y2.uid);
      case "raster":
        console.warn(`Unsupported vector tile raster layer ${l2.id}`);
      case "circle":
        return new d(a$3.CIRCLE, l2, y2.z, y2.uid);
    }
  }
}
export { T, l, m, t$3 as t };
