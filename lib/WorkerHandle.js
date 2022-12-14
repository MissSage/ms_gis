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
import { lr as u, dH as s, n, gN as C, r, aX as f } from "./index.js";
class h {
  constructor(e, t, s$1, i, h2 = {}) {
    this._mainMethod = t, this._transferLists = s$1, this._listeners = [], this._promise = u(e, __spreadProps(__spreadValues({}, h2), { schedule: i })).then((e2) => {
      if (this._thread === void 0) {
        this._thread = e2, this._promise = null, h2.hasInitialize && this.broadcast({}, "initialize");
        for (const e3 of this._listeners)
          this._connectListener(e3);
      } else
        e2.close();
    }), this._promise.catch((t2) => s.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t2}`));
  }
  on(r$1, i) {
    const o = { removed: false, eventName: r$1, callback: i, threadHandle: null };
    return this._listeners.push(o), this._connectListener(o), n(() => {
      o.removed = true, C(this._listeners, o), this._thread && r(o.threadHandle) && o.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null;
  }
  invoke(e, t) {
    return this.invokeMethod(this._mainMethod, e, t);
  }
  invokeMethod(e, t, r2) {
    if (this._thread) {
      const s2 = this._transferLists[e], i = s2 ? s2(t) : [];
      return this._thread.invoke(e, t, { transferList: i, signal: r2 });
    }
    return this._promise ? this._promise.then(() => (f(r2), this.invokeMethod(e, t, r2))) : Promise.reject(null);
  }
  broadcast(e, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e)).then(() => {
    }) : this._promise ? this._promise.then(() => this.broadcast(e, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e) {
    this._thread && this._thread.on(e.eventName, e.callback).then((t) => {
      e.removed || (e.threadHandle = t);
    });
  }
}
export { h };
