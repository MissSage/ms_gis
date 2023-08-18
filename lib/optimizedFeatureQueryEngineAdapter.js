import { gm as s, a2 as t, gl as t$1 } from "./index.js";
import { e } from "./centroid.js";
const i = { getObjectId: (t2) => t2.objectId, getAttributes: (t2) => t2.attributes, getAttribute: (t2, e2) => t2.attributes[e2], cloneWithGeometry: (t2, e2) => new s(e2, t2.attributes, null, t2.objectId), getGeometry: (t2) => t2.geometry, getCentroid: (r, i2) => (t(r.centroid) && (r.centroid = e(new t$1(), r.geometry, i2.hasZ, i2.hasM)), r.centroid) };
export { i };
