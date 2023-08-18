import { U, fK as u, o$ as t } from "./index.js";
import "vue";
function n(e, i, n2) {
  const o = e.thumbnail && e.thumbnail.url;
  return o ? U(o, { responseType: "image" }).then((t2) => {
    const e2 = h(t2.data, n2);
    return n2 && n2.node ? (n2.node.appendChild(e2), n2.node) : e2;
  }) : e.fetchSymbol().then((t2) => t2 ? i(t2, n2) : null);
}
function h(t$1, n2) {
  const h2 = !/\\.svg$/i.test(t$1.src) && n2 && n2.disableUpsampling, o = Math.max(t$1.width, t$1.height);
  let r = n2 && n2.maxSize != null ? u(n2.maxSize) : t.maxSize;
  h2 && (r = Math.min(o, r));
  const s = typeof (n2 == null ? void 0 : n2.size) == "number" ? n2 == null ? void 0 : n2.size : null, l = Math.min(r, s != null ? u(s) : o);
  if (l !== o) {
    const e = t$1.width !== 0 && t$1.height !== 0 ? t$1.width / t$1.height : 1;
    e >= 1 ? (t$1.width = l, t$1.height = l / e) : (t$1.width = l * e, t$1.height = l);
  }
  return t$1;
}
export { n as previewWebStyleSymbol };
