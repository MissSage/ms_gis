import { U, dt as S$1, aK as k, aX as y, du as s, dv as Bt, y as s$1, cE as x, d5 as t, d4 as k$1, dw as a, dx as C, dy as f, dz as f$1 } from "./index.js";
const c = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function d(e) {
  const o = e.folders || [], t2 = o.slice(), r = new Map(), n = new Map(), i = new Map(), f2 = new Map(), a2 = new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i, esriGeometryPolygon: f2 };
  (e.featureCollection && e.featureCollection.layers || []).forEach((e2) => {
    const o2 = y(e2);
    o2.featureSet.features = [];
    const t3 = e2.featureSet.geometryType;
    r.set(t3, o2);
    const a3 = e2.layerDefinition.objectIdField;
    t3 === "esriGeometryPoint" ? G(n, a3, e2.featureSet.features) : t3 === "esriGeometryPolyline" ? G(i, a3, e2.featureSet.features) : t3 === "esriGeometryPolygon" && G(f2, a3, e2.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach((e2) => {
    a2.set(e2.id, e2);
  }), o.forEach((o2) => {
    o2.networkLinkIds.forEach((r2) => {
      const s2 = P(r2, o2.id, e.networkLinks);
      s2 && t2.push(s2);
    });
  }), t2.forEach((e2) => {
    if (e2.featureInfos) {
      e2.points = y(r.get("esriGeometryPoint")), e2.polylines = y(r.get("esriGeometryPolyline")), e2.polygons = y(r.get("esriGeometryPolygon")), e2.mapImages = [];
      for (const o2 of e2.featureInfos)
        switch (o2.type) {
          case "esriGeometryPoint":
          case "esriGeometryPolyline":
          case "esriGeometryPolygon": {
            const t3 = l[o2.type].get(o2.id);
            t3 && e2[c[o2.type]].featureSet.features.push(t3);
            break;
          }
          case "GroundOverlay": {
            const t3 = a2.get(o2.id);
            t3 && e2.mapImages.push(t3);
            break;
          }
        }
      e2.fullExtent = j([e2]);
    }
  });
  const u = j(t2);
  return { folders: o, sublayers: t2, extent: u };
}
function g(t2, s$2, i, f2) {
  const a2 = s && s.findCredential(t2);
  t2 = Bt(t2, { token: a2 && a2.token });
  const l = s$1.kmlServiceUrl;
  return U(l, { query: { url: t2, model: "simple", folders: "", refresh: i !== 0 || void 0, outSR: JSON.stringify(s$2) }, responseType: "json", signal: f2 });
}
function S(e, o, t2 = null, r = []) {
  const s2 = [], n = {}, i = o.sublayers, f2 = o.folders.map((e2) => e2.id);
  return i.forEach((o2) => {
    const i2 = new e();
    if (t2 ? i2.read(o2, t2) : i2.read(o2), r.length && f2.includes(i2.id) && (i2.visible = r.includes(i2.id)), n[o2.id] = i2, o2.parentFolderId != null && o2.parentFolderId !== -1) {
      const e2 = n[o2.parentFolderId];
      e2.sublayers || (e2.sublayers = []), e2.sublayers.unshift(i2);
    } else
      s2.unshift(i2);
  }), s2;
}
function G(e, o, t2) {
  t2.forEach((t3) => {
    e.set(t3.attributes[o], t3);
  });
}
function h(e, o) {
  let t2;
  return o.some((o2) => o2.id === e && (t2 = o2, true)), t2;
}
function P(e, o, t2) {
  const r = h(e, t2);
  return r && (r.parentFolderId = o, r.networkLink = r), r;
}
async function b(e) {
  const o = x.fromJSON(e.featureSet).features, r = e.layerDefinition, s2 = t(r.drawingInfo.renderer), n = k$1.fromJSON(e.popupInfo), i = [];
  for (const t2 of o) {
    const e2 = await s2.getSymbolAsync(t2);
    t2.symbol = e2, t2.popupTemplate = n, t2.visible = true, i.push(t2);
  }
  return i;
}
function j(e) {
  const o = a(C), t2 = a(C);
  for (const r of e) {
    if (r.polygons && r.polygons.featureSet && r.polygons.featureSet.features)
      for (const e2 of r.polygons.featureSet.features)
        f(o, e2.geometry), f$1(t2, o);
    if (r.polylines && r.polylines.featureSet && r.polylines.featureSet.features)
      for (const e2 of r.polylines.featureSet.features)
        f(o, e2.geometry), f$1(t2, o);
    if (r.points && r.points.featureSet && r.points.featureSet.features)
      for (const e2 of r.points.featureSet.features)
        f(o, e2.geometry), f$1(t2, o);
    if (r.mapImages)
      for (const e2 of r.mapImages)
        f(o, e2.extent), f$1(t2, o);
  }
  return S$1(t2, C) ? null : { xmin: t2[0], ymin: t2[1], zmin: t2[2], xmax: t2[3], ymax: t2[4], zmax: t2[5], spatialReference: k.WGS84 };
}
export { S, b, d, g, j };
