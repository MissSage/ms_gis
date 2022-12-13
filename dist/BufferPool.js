import { t, h as has, a as r, b1 as f } from "./index.js";
class a$1 {
  constructor(t2) {
    if (this.next = null, !Array.isArray(t2))
      return void (this.data = t2);
    this.data = t2[0];
    let e2 = this;
    for (let n2 = 1; n2 < t2.length; n2++)
      e2.next = new a$1([t2[n2]]), e2 = e2.next;
  }
  *values() {
    let t2 = this;
    for (; t2; )
      yield t2.data, t2 = t2.next;
  }
  forEach(t2) {
    let a2 = this;
    for (; a2; )
      t2(a2.data), a2 = a2.next;
  }
  find(t2) {
    var _a;
    return t2(this.data) ? this : (_a = this.next) == null ? void 0 : _a.find(t2);
  }
  max(t2, a2 = this) {
    const e2 = t2(this.data) > t2(a2.data) ? this : a2;
    return this.next ? this.next.max(t2, e2) : e2;
  }
  remove(t2, a2 = null) {
    var _a, _b;
    return this === t2 ? a2 ? (a2.next = this.next, a2) : this.next : (_b = (_a = this.next) == null ? void 0 : _a.remove(t2, this)) != null ? _b : null;
  }
  get last() {
    return this.next ? this.next.last : this;
  }
}
class e {
  constructor(e2) {
    this._head = null, t(e2) || (this._head = new a$1(e2));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (t(this._head))
      return 0;
    const a2 = this._head.max((t2) => t2.end - t2.start);
    return a2.data.end - a2.data.start;
  }
  firstFit(a2) {
    if (t(this._head))
      return null;
    let e2 = null, n2 = this._head;
    for (; n2; ) {
      const t2 = n2.data.end - n2.data.start;
      if (t2 === a2)
        return e2 ? e2.next = n2.next : this._head = n2.next, n2.data.start;
      if (t2 > a2) {
        const t3 = n2.data.start;
        return n2.data.start += a2, t3;
      }
      e2 = n2, n2 = n2.next;
    }
    return null;
  }
  free(e2, n2) {
    const r2 = e2 + n2;
    if (t(this._head)) {
      const t2 = new a$1({ start: e2, end: r2 });
      return void (this._head = t2);
    }
    if (r2 <= this._head.data.start) {
      if (r2 === this._head.data.start)
        return void (this._head.data.start -= n2);
      const t2 = new a$1({ start: e2, end: r2 });
      return t2.next = this._head, void (this._head = t2);
    }
    let s = this._head, d = s.next;
    for (; d; ) {
      if (d.data.start >= r2) {
        if (s.data.end === e2) {
          if (s.data.end += n2, s.data.end === d.data.start) {
            const t3 = d.data.end - d.data.start;
            return s.data.end += t3, void (s.next = d.next);
          }
          return;
        }
        if (d.data.start === r2)
          return void (d.data.start -= n2);
        const t2 = new a$1({ start: e2, end: r2 });
        return t2.next = s.next, void (s.next = t2);
      }
      s = d, d = d.next;
    }
    if (e2 === s.data.end)
      return void (s.data.end += n2);
    const i2 = new a$1({ start: e2, end: r2 });
    s.next = i2;
  }
}
const a = has("esri-2d-log-allocations");
class i {
  constructor(t2, e2) {
    this._array = t2, this._pool = e2;
  }
  get array() {
    return this._array;
  }
  get length() {
    return this._array.length;
  }
  static create(t2, e2) {
    const s = e2.acquire(t2);
    return new i(s, e2);
  }
  expand(t2) {
    const e2 = this._pool.acquire(t2);
    e2.set(this._array), this._pool.release(this._array), this._array = e2;
  }
  destroy() {
    this._pool.release(this._array);
  }
  set(t2, e2) {
    this._array.set(t2._array, e2);
  }
  slice() {
    const t2 = this._pool.acquire(this._array.byteLength);
    return t2.set(this._array), new i(t2, this._pool);
  }
}
class o {
  constructor() {
    this._data = new ArrayBuffer(o.BYTE_LENGTH), this._freeList = new e({ start: 0, end: this._data.byteLength });
  }
  static get BYTE_LENGTH() {
    return 64e6;
  }
  get buffer() {
    return this._data;
  }
  allocate(t$1) {
    const e2 = this._freeList.firstFit(t$1);
    return t(e2) ? null : new Uint32Array(this._data, e2, t$1 / Uint32Array.BYTES_PER_ELEMENT);
  }
  free(t2) {
    this._freeList.free(t2.byteOffset, t2.byteLength);
  }
}
class n {
  constructor() {
    this._bytesAllocated = 0, this._pages = [], this._pagesByBuffer = new Map(), this._addPage();
  }
  destroy() {
    this._pages = [], this._pagesByBuffer = null;
  }
  get _bytesTotal() {
    return this._pages.length * o.BYTE_LENGTH;
  }
  acquire(s) {
    if (this._bytesAllocated += s, a && console.log(`Allocating ${s}, (${this._bytesAllocated} / ${this._bytesTotal})`), s > o.BYTE_LENGTH)
      return new Uint32Array(s / Uint32Array.BYTES_PER_ELEMENT);
    for (const e2 of this._pages) {
      const r$1 = e2.allocate(s);
      if (r(r$1))
        return r$1;
    }
    return f(this._addPage().allocate(s), "Expected to allocate page");
  }
  release(t2) {
    this._bytesAllocated -= t2.byteLength, a && console.log(`Freeing ${t2.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);
    const e2 = this._pagesByBuffer.get(t2.buffer);
    e2 && e2.free(t2);
  }
  _addPage() {
    const t2 = new o();
    return this._pages.push(t2), this._pagesByBuffer.set(t2.buffer, t2), t2;
  }
}
export { a$1 as a, e, i, n };
