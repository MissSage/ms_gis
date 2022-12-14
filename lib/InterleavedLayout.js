import { u, m, i, T as T$1, c, h, l, a, p, b, x, y, o, d, g, j, V, q, A, L, B } from "./BufferView.js";
import { e } from "./types.js";
class v {
  constructor(e2, t) {
    this.layout = e2, this.buffer = typeof t == "number" ? new ArrayBuffer(t * e2.stride) : t;
    for (const i2 of e2.fieldNames) {
      const t2 = e2.fields.get(i2);
      this[i2] = new t2.constructor(this.buffer, t2.offset, this.stride);
    }
  }
  get stride() {
    return this.layout.stride;
  }
  get count() {
    return this.buffer.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength;
  }
  getField(e2, t) {
    const i2 = this[e2];
    return i2 && i2.elementCount === t.ElementCount && i2.elementType === t.ElementType ? i2 : null;
  }
  slice(e2, t) {
    return new v(this.layout, this.buffer.slice(e2 * this.stride, t * this.stride));
  }
  copyFrom(e2, t, i2, s) {
    const r = this.stride;
    if (r % 4 == 0) {
      const n = new Uint32Array(e2.buffer, t * r, s * r / 4);
      new Uint32Array(this.buffer, i2 * r, s * r / 4).set(n);
    } else {
      const n = new Uint8Array(e2.buffer, t * r, s * r);
      new Uint8Array(this.buffer, i2 * r, s * r).set(n);
    }
  }
}
class N {
  constructor() {
    this.stride = 0, this.fields = new Map(), this.fieldNames = [];
  }
  vec2f(t, i2) {
    return this._appendField(t, u, i2), this;
  }
  vec2f64(e2, i2) {
    return this._appendField(e2, m, i2), this;
  }
  vec3f(e2, t) {
    return this._appendField(e2, i, t), this;
  }
  vec3f64(e2, t) {
    return this._appendField(e2, T$1, t), this;
  }
  vec4f(e2, t) {
    return this._appendField(e2, c, t), this;
  }
  vec4f64(e2, t) {
    return this._appendField(e2, h, t), this;
  }
  mat3f(e2, t) {
    return this._appendField(e2, l, t), this;
  }
  mat3f64(e2, t) {
    return this._appendField(e2, a, t), this;
  }
  mat4f(e2, t) {
    return this._appendField(e2, p, t), this;
  }
  mat4f64(e2, t) {
    return this._appendField(e2, b, t), this;
  }
  vec4u8(e2, t) {
    return this._appendField(e2, x, t), this;
  }
  f32(e2, t) {
    return this._appendField(e2, y, t), this;
  }
  f64(e2, t) {
    return this._appendField(e2, o, t), this;
  }
  u8(e2, t) {
    return this._appendField(e2, d, t), this;
  }
  u16(e2, t) {
    return this._appendField(e2, g, t), this;
  }
  i8(e2, t) {
    return this._appendField(e2, j, t), this;
  }
  vec2i8(e2, t) {
    return this._appendField(e2, V, t), this;
  }
  vec2i16(e2, t) {
    return this._appendField(e2, q, t), this;
  }
  vec2u8(e2, t) {
    return this._appendField(e2, A, t), this;
  }
  vec4u16(e2, t) {
    return this._appendField(e2, L, t), this;
  }
  u32(e2, t) {
    return this._appendField(e2, B, t), this;
  }
  _appendField(e$1, t, i2) {
    const s = t.ElementCount * e(t.ElementType), r = this.stride;
    this.fields.set(e$1, { size: s, constructor: t, offset: r, optional: i2 }), this.stride += s, this.fieldNames.push(e$1);
  }
  alignTo(e2) {
    return this.stride = Math.floor((this.stride + e2 - 1) / e2) * e2, this;
  }
  hasField(e2) {
    return this.fieldNames.includes(e2);
  }
  createBuffer(e2) {
    return new v(this, e2);
  }
  createView(e2) {
    return new v(this, e2);
  }
  clone() {
    const e2 = new N();
    return e2.stride = this.stride, e2.fields = new Map(), this.fields.forEach((t, i2) => e2.fields.set(i2, t)), e2.fieldNames = this.fieldNames.slice(), e2.BufferType = this.BufferType, e2;
  }
}
function T() {
  return new N();
}
export { T };
