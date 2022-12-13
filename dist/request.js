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
import { k as e, g as s$1 } from "./index.js";
import "vue";
let r;
function s(s2, a) {
  let n = a.responseType;
  n ? n !== "array-buffer" && n !== "blob" && n !== "json" && n !== "native" && n !== "native-request-init" && n !== "text" && (n = "text") : n = "json", a.responseType = n;
  const o = e(a.signal);
  return delete a.signal, globalThis.invokeStaticMessage("request", { url: s2, options: a }, { signal: o }).then(async (t) => {
    let i, l, u, c, b;
    if (t.data)
      if (t.data instanceof ArrayBuffer) {
        if (!(n !== "json" && n !== "text" && n !== "blob" || (i = new Blob([t.data]), n !== "json" && n !== "text" || (r || (r = new FileReaderSync()), c = r.readAsText(i), n !== "json")))) {
          try {
            l = JSON.parse(c || null);
          } catch (f) {
            const t2 = __spreadProps(__spreadValues({}, f), { url: s2, requestOptions: a });
            throw new s$1("request:server", f.message, t2);
          }
          if (l.error) {
            const t2 = __spreadProps(__spreadValues({}, l.error), { url: s2, requestOptions: a });
            throw new s$1("request:server", l.error.message, t2);
          }
        }
      } else
        n === "native" && (t.data.signal = o, u = await fetch(t.data.url, t.data));
    switch (n) {
      case "blob":
        b = i;
        break;
      case "json":
        b = l;
        break;
      case "native":
        b = u;
        break;
      case "text":
        b = c;
        break;
      default:
        b = t.data;
    }
    return { data: b, requestOptions: a, ssl: t.ssl, url: s2 };
  });
}
export { s as execute };
