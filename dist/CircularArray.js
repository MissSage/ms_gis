import { a as r } from "./index.js";
class s {
  constructor(t) {
    this.size = 0, this._start = 0, this.maxSize = t, this._buffer = new Array(t);
  }
  get entries() {
    return this._buffer;
  }
  enqueue(t) {
    if (this.size === this.maxSize) {
      const s2 = this._buffer[this._start];
      return this._buffer[this._start] = t, this._start = (this._start + 1) % this.maxSize, s2;
    }
    return this._buffer[(this._start + this.size++) % this.maxSize] = t, null;
  }
  dequeue() {
    if (this.size === 0)
      return null;
    const t = this._buffer[this._start];
    return this._buffer[this._start] = null, this.size--, this._start = (this._start + 1) % this.maxSize, t;
  }
  peek() {
    return this.size === 0 ? null : this._buffer[this._start];
  }
  find(s2) {
    if (this.size === 0)
      return null;
    for (const e of this._buffer)
      if (r(e) && s2(e))
        return e;
    return null;
  }
  clear(s2) {
    let e = this.dequeue();
    for (; r(e); )
      s2 && s2(e), e = this.dequeue();
  }
}
export { s };
