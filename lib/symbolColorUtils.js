import { x as t, aO as a$1 } from "./index.js";
var r;
function n(t2) {
  switch (t2) {
    case "multiply":
    default:
      return r.Multiply;
    case "ignore":
      return r.Ignore;
    case "replace":
      return r.Replace;
    case "tint":
      return r.Tint;
  }
}
function o(n2, o2, l) {
  if (t(n2) || o2 === r.Ignore)
    return l[0] = 255, l[1] = 255, l[2] = 255, void (l[3] = 255);
  const p = a$1(Math.round(n2[3] * a), 0, a), s = p === 0 || o2 === r.Tint ? 0 : o2 === r.Replace ? c : u;
  l[0] = a$1(Math.round(n2[0] * i), 0, i), l[1] = a$1(Math.round(n2[1] * i), 0, i), l[2] = a$1(Math.round(n2[2] * i), 0, i), l[3] = p + s;
}
!function(t2) {
  t2[t2.Multiply = 1] = "Multiply", t2[t2.Ignore = 2] = "Ignore", t2[t2.Replace = 3] = "Replace", t2[t2.Tint = 4] = "Tint";
}(r || (r = {}));
const i = 255, a = 85, c = a, u = 2 * a;
export { n, o, r };
