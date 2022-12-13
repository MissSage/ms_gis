import { z as r, G as o$1, f1 as r$1 } from "./index.js";
class t$2 {
  constructor(t2, e2, r2 = 0, f, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 9;
    const i2 = this.TypedArrayConstructor;
    f === void 0 && (f = 9 * i2.BYTES_PER_ELEMENT);
    const d2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, d2) : new i2(e2, d2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t2, e2, r2 = this.count - e2) {
    const f = this.typedBuffer.byteOffset + e2 * this.stride;
    return new t2(this.buffer, f, this.stride, f + r2 * this.stride);
  }
  getMat(t2, e2) {
    let r2 = t2 * this.typedBufferStride;
    for (let f = 0; f < 9; f++)
      e2[f] = this.typedBuffer[r2++];
    return e2;
  }
  setMat(t2, e2) {
    let r2 = t2 * this.typedBufferStride;
    for (let f = 0; f < 9; f++)
      this.typedBuffer[r2++] = e2[f];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  copyFrom(t2, e2, r2) {
    const f = this.typedBuffer, s = e2.typedBuffer;
    let i2 = t2 * this.typedBufferStride, d2 = r2 * e2.typedBufferStride;
    for (let u2 = 0; u2 < 9; ++u2)
      f[i2++] = s[d2++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
t$2.ElementCount = 9;
class t$1 {
  constructor(t2, e2, r2 = 0, f, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 16;
    const i2 = this.TypedArrayConstructor;
    f === void 0 && (f = 16 * i2.BYTES_PER_ELEMENT);
    const d2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, d2) : new i2(e2, d2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t2, e2, r2 = this.count - e2) {
    const f = this.typedBuffer.byteOffset + e2 * this.stride;
    return new t2(this.buffer, f, this.stride, f + r2 * this.stride);
  }
  getMat(t2, e2) {
    let r2 = t2 * this.typedBufferStride;
    for (let f = 0; f < 16; f++)
      e2[f] = this.typedBuffer[r2++];
    return e2;
  }
  setMat(t2, e2) {
    let r2 = t2 * this.typedBufferStride;
    for (let f = 0; f < 16; f++)
      this.typedBuffer[r2++] = e2[f];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  copyFrom(t2, e2, r2) {
    const f = this.typedBuffer, s = e2.typedBuffer;
    let i2 = t2 * this.typedBufferStride, d2 = r2 * e2.typedBufferStride;
    for (let u2 = 0; u2 < 16; ++u2)
      f[i2++] = s[d2++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
t$1.ElementCount = 16;
class t {
  constructor(t2, e2, r2 = 0, s, i2) {
    this.TypedArrayConstructor = t2, this.elementCount = 1;
    const f = this.TypedArrayConstructor;
    s === void 0 && (s = f.BYTES_PER_ELEMENT);
    const u2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = i2 == null ? new f(e2, u2) : new f(e2, u2, (i2 - r2) / f.BYTES_PER_ELEMENT), this.stride = s, this.typedBufferStride = s / f.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride);
  }
  sliceBuffer(t2, e2, r2 = this.count - e2) {
    const s = this.typedBuffer.byteOffset + e2 * this.stride;
    return new t2(this.buffer, s, this.stride, s + r2 * this.stride);
  }
  get(t2) {
    return this.typedBuffer[t2 * this.typedBufferStride];
  }
  set(t2, e2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2;
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
t.ElementCount = 1;
class e$2 {
  constructor(t2, e2, r2 = 0, f, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 2;
    const i2 = this.TypedArrayConstructor;
    f === void 0 && (f = 2 * i2.BYTES_PER_ELEMENT);
    const u2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, u2) : new i2(e2, u2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t2, e2, r2 = this.count - e2) {
    const f = this.typedBuffer.byteOffset + e2 * this.stride;
    return new t2(this.buffer, f, this.stride, f + r2 * this.stride);
  }
  getVec(e2, r$12) {
    return e2 *= this.typedBufferStride, r(r$12, this.typedBuffer[e2], this.typedBuffer[e2 + 1]);
  }
  setVec(t2, e2) {
    t2 *= this.typedBufferStride, this.typedBuffer[t2++] = e2[0], this.typedBuffer[t2] = e2[1];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  setValues(t2, e2, r2) {
    t2 *= this.typedBufferStride, this.typedBuffer[t2++] = e2, this.typedBuffer[t2] = r2;
  }
  copyFrom(t2, e2, r2) {
    const f = this.typedBuffer, s = e2.typedBuffer;
    let i2 = t2 * this.typedBufferStride, u2 = r2 * e2.typedBufferStride;
    f[i2++] = s[u2++], f[i2] = s[u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
e$2.ElementCount = 2;
class e$1 {
  constructor(t2, e2, r2 = 0, f, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 3;
    const i2 = this.TypedArrayConstructor;
    f === void 0 && (f = 3 * i2.BYTES_PER_ELEMENT);
    const u2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, u2) : new i2(e2, u2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t2, e2, r2 = this.count - e2) {
    const f = this.typedBuffer.byteOffset + e2 * this.stride;
    return new t2(this.buffer, f, this.stride, f + r2 * this.stride);
  }
  getVec(e2, r2) {
    return e2 *= this.typedBufferStride, o$1(r2, this.typedBuffer[e2], this.typedBuffer[e2 + 1], this.typedBuffer[e2 + 2]);
  }
  setVec(t2, e2) {
    t2 *= this.typedBufferStride, this.typedBuffer[t2++] = e2[0], this.typedBuffer[t2++] = e2[1], this.typedBuffer[t2] = e2[2];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  setValues(t2, e2, r2, f) {
    t2 *= this.typedBufferStride, this.typedBuffer[t2++] = e2, this.typedBuffer[t2++] = r2, this.typedBuffer[t2] = f;
  }
  copyFrom(t2, e2, r2) {
    const f = this.typedBuffer, s = e2.typedBuffer;
    let i2 = t2 * this.typedBufferStride, u2 = r2 * e2.typedBufferStride;
    f[i2++] = s[u2++], f[i2++] = s[u2++], f[i2] = s[u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
e$1.ElementCount = 3;
class e {
  constructor(t2, e2, r2 = 0, f, s) {
    this.TypedArrayConstructor = t2, this.start = r2, this.elementCount = 4;
    const i2 = this.TypedArrayConstructor;
    f === void 0 && (f = 4 * i2.BYTES_PER_ELEMENT);
    const u2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, u2) : new i2(e2, u2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t2, e2, r2 = this.count - e2) {
    const f = this.typedBuffer.byteOffset + e2 * this.stride;
    return new t2(this.buffer, f, this.stride, f + r2 * this.stride);
  }
  getVec(e2, r2) {
    return e2 *= this.typedBufferStride, r$1(r2, this.typedBuffer[e2++], this.typedBuffer[e2++], this.typedBuffer[e2++], this.typedBuffer[e2]);
  }
  setVec(t2, e2) {
    t2 *= this.typedBufferStride, this.typedBuffer[t2++] = e2[0], this.typedBuffer[t2++] = e2[1], this.typedBuffer[t2++] = e2[2], this.typedBuffer[t2] = e2[3];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  setValues(t2, e2, r2, f, s) {
    t2 *= this.typedBufferStride, this.typedBuffer[t2++] = e2, this.typedBuffer[t2++] = r2, this.typedBuffer[t2++] = f, this.typedBuffer[t2] = s;
  }
  copyFrom(t2, e2, r2) {
    const f = this.typedBuffer, s = e2.typedBuffer;
    let i2 = t2 * this.typedBufferStride, u2 = r2 * e2.typedBufferStride;
    f[i2++] = s[u2++], f[i2++] = s[u2++], f[i2++] = s[u2++], f[i2] = s[u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
e.ElementCount = 4;
class y extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new y(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
y.ElementType = "f32";
class u extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(u, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new u(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
u.ElementType = "f32";
class i extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(i, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new i(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
i.ElementType = "f32";
class c extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(c, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new c(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
c.ElementType = "f32";
class l extends t$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(l, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new l(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
l.ElementType = "f32";
class a extends t$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  slice(e2, t2) {
    return this.sliceBuffer(a, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new a(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
a.ElementType = "f64";
class p extends t$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(p, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new p(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
p.ElementType = "f32";
class b extends t$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  slice(e2, t2) {
    return this.sliceBuffer(b, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new b(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
b.ElementType = "f64";
class o extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  slice(e2, t2) {
    return this.sliceBuffer(o, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new o(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
o.ElementType = "f64";
class m extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  slice(e2, t2) {
    return this.sliceBuffer(m, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new m(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
m.ElementType = "f64";
class T extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  slice(e2, t2) {
    return this.sliceBuffer(T, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new T(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
T.ElementType = "f64";
class h extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  slice(e2, t2) {
    return this.sliceBuffer(h, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new h(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
h.ElementType = "f64";
class d extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(d, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new d(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
d.ElementType = "u8";
class A extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(A, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new A(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
A.ElementType = "u8";
class O extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(O, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new O(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
O.ElementType = "u8";
class x extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(x, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new x(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
x.ElementType = "u8";
class g extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(g, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new g(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
g.ElementType = "u16";
class w extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(w, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new w(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
w.ElementType = "u16";
class E extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(E, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new E(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
E.ElementType = "u16";
class L extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(L, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new L(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
L.ElementType = "u16";
class B extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(B, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new B(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
B.ElementType = "u32";
class F extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(F, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new F(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
F.ElementType = "u32";
class I extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(I, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new I(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
I.ElementType = "u32";
class U extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(U, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new U(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
U.ElementType = "u32";
class j extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(j, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new j(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
j.ElementType = "i8";
class V extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(V, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new V(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
V.ElementType = "i8";
class M extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(M, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new M(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
M.ElementType = "i8";
class S extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  slice(e2, t2) {
    return this.sliceBuffer(S, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new S(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
S.ElementType = "i8";
class k extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(k, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new k(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
k.ElementType = "i16";
class q extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(q, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new q(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
q.ElementType = "i16";
class v extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(v, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new v(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
v.ElementType = "i16";
class z extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  slice(e2, t2) {
    return this.sliceBuffer(z, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new z(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
z.ElementType = "i16";
class C extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(C, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new C(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
C.ElementType = "i32";
class D extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(D, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new D(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
D.ElementType = "i32";
class G extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(G, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new G(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
G.ElementType = "i32";
class H extends e {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  slice(e2, t2) {
    return this.sliceBuffer(H, e2, t2);
  }
  static fromTypedArray(e2, t2) {
    return new H(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
H.ElementType = "i32";
export { A, B, C, D, E, F, G, H, I, L, M, O, S, T, U, V, a, b, c, d, g, h, i, j, k, l, m, o, p, q, u, v, w, x, y, z };
