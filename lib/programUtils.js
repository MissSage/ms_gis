import { r } from "./index.js";
import { t } from "./NestedMap.js";
import { h } from "./ProgramTemplate.js";
class s {
  constructor(r2) {
    this._rctx = r2, this._store = new t();
  }
  dispose() {
    this._store.forEach((r2) => r2.forEach((r3) => r3.dispose())), this._store.clear();
  }
  acquire(t2, s2, o, c) {
    const i = this._store.get(t2, s2);
    if (r(i))
      return i.ref(), i;
    const h$1 = new h(this._rctx, t2, s2, o, c);
    return h$1.ref(), this._store.set(t2, s2, h$1), h$1;
  }
  get test() {
    let r2 = 0;
    return this._store.forEach((t2) => t2.forEach((t3) => r2 += t3.hasGLName ? 2 : 1)), { cachedWebGLObjects: r2 };
  }
}
function e(e2) {
  const { options: n2, value: o } = e2;
  return typeof n2[o] == "number";
}
function n(n2) {
  let o = "";
  for (const t2 in n2) {
    const i = n2[t2];
    if (typeof i == "boolean")
      i && (o += `#define ${t2}
`);
    else if (typeof i == "number")
      o += `#define ${t2} ${i.toFixed()}
`;
    else if (typeof i == "object")
      if (e(i)) {
        const { value: e2, options: n3, namespace: f } = i, s2 = f ? `${f}_` : "";
        for (const t3 in n3)
          o += `#define ${s2}${t3} ${n3[t3].toFixed()}
`;
        o += `#define ${t2} ${s2}${e2}
`;
      } else {
        const e2 = i.options;
        let n3 = 0;
        for (const t3 in e2)
          o += `#define ${e2[t3]} ${(n3++).toFixed()}
`;
        o += `#define ${t2} ${e2[i.value]}
`;
      }
  }
  return o;
}
export { n, s };
