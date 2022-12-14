const t = 1;
function n(t2, n2) {
  var _a;
  let o = 0;
  for (const e of n2) {
    const n3 = (_a = e.attributes) == null ? void 0 : _a[t2];
    typeof n3 == "number" && isFinite(n3) && (o = Math.max(o, n3));
  }
  return o;
}
export { n, t };
