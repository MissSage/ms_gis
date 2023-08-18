class t {
  constructor() {
    this._outer = new Map();
  }
  clear() {
    this._outer.clear();
  }
  get empty() {
    return this._outer.size === 0;
  }
  get(t2, e) {
    var _a;
    return (_a = this._outer.get(t2)) == null ? void 0 : _a.get(e);
  }
  set(t2, e, r) {
    const s = this._outer.get(t2);
    s ? s.set(e, r) : this._outer.set(t2, new Map([[e, r]]));
  }
  delete(t2, e) {
    const r = this._outer.get(t2);
    r && (r.delete(e), r.size === 0 && this._outer.delete(t2));
  }
  forEach(t2) {
    this._outer.forEach((e, r) => t2(e, r));
  }
}
export { t };
