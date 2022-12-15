import { hR as s, s as s$1, l as j, hS as a$1, hT as n$1 } from "./index.js";
import "vue";
async function n(o = null, i) {
  var _a, _b;
  if (s.geometryServiceUrl)
    return s.geometryServiceUrl;
  if (!o)
    throw new s$1("internal:geometry-service-url-not-configured");
  let n2;
  n2 = "portal" in o ? o.portal || j.getDefault() : o, await n2.load({ signal: i });
  const a2 = (_b = (_a = n2.helperServices) == null ? void 0 : _a.geometry) == null ? void 0 : _b.url;
  if (!a2)
    throw new s$1("internal:geometry-service-url-not-configured");
  return a2;
}
async function a(r, t, a2 = null, l) {
  const c = await n(a2, l), s2 = new a$1();
  s2.geometries = [r], s2.outSpatialReference = t;
  const m = await n$1(c, s2, { signal: l });
  if (m && Array.isArray(m) && m.length === 1)
    return m[0];
  throw new s$1("internal:geometry-service-projection-failed");
}
export { n as getGeometryServiceURL, a as projectGeometry };
