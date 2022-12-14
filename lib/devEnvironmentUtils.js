function c(c2) {
  return c2 = c2 || globalThis.location.hostname, m.some((a2) => (c2 == null ? void 0 : c2.match(a2)) != null);
}
function a(c2, a2) {
  return c2 && (a2 = a2 || globalThis.location.hostname) ? a2.match(t) != null || a2.match(l) != null ? c2.replace("static.arcgis.com", "staticdev.arcgis.com") : a2.match(s) != null || a2.match(i) != null ? c2.replace("static.arcgis.com", "staticqa.arcgis.com") : c2 : c2;
}
const t = /^devext.arcgis.com$/, s = /^qaext.arcgis.com$/, l = /^[\w-]*\.mapsdevext.arcgis.com$/, i = /^[\w-]*\.mapsqa.arcgis.com$/, m = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/, t, s, /^jsapps.esri.com$/, l, i];
export { a, c };
