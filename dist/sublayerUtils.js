import { t as t$1, dL as r } from "./index.js";
function n(r2, e, n2) {
  const i2 = e.flatten(({ sublayers: r3 }) => r3).length;
  if (i2 !== r2.length)
    return true;
  return !!r2.some((r3) => r3.originIdOf("minScale") > n2 || r3.originIdOf("maxScale") > n2 || r3.originIdOf("renderer") > n2 || r3.originIdOf("labelingInfo") > n2 || r3.originIdOf("opacity") > n2 || r3.originIdOf("labelsVisible") > n2 || r3.originIdOf("source") > n2) || !o(r2, e);
}
function i(n2, i2, t2) {
  return !!n2.some((n3) => {
    const i3 = n3.source;
    return !(!i3 || i3.type === "map-layer" && i3.mapLayerId === n3.id && (t$1(i3.gdbVersion) || i3.gdbVersion === t2)) || n3.originIdOf("renderer") > r.SERVICE || n3.originIdOf("labelingInfo") > r.SERVICE || n3.originIdOf("opacity") > r.SERVICE || n3.originIdOf("labelsVisible") > r.SERVICE;
  }) || !o(n2, i2);
}
function o(e, n2) {
  if (!e || !e.length || t$1(n2))
    return true;
  const i2 = n2.slice().reverse().flatten(({ sublayers: r2 }) => r2 && r2.toArray().reverse()).map((r2) => r2.id).toArray();
  if (e.length > i2.length)
    return false;
  let o2 = 0;
  const t2 = i2.length;
  for (const { id: r2 } of e) {
    for (; o2 < t2 && i2[o2] !== r2; )
      o2++;
    if (o2 >= t2)
      return false;
  }
  return true;
}
function t(r2) {
  return !!r2 && r2.some((r3) => r3.minScale != null || r3.layerDefinition && r3.layerDefinition.minScale != null);
}
export { i, n, t };
