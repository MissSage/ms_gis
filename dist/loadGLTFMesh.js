import { U, a as r, k as e, b3 as o, dJ as r$2, b0 as l, gC as r$3, ab as r$4, fk as g$1, kV as d, t as t$3 } from "./index.js";
import { e as e$1 } from "./mat3f64.js";
import { m as m$1, c, p, g } from "./meshFeatureSet.js";
import { T, i, c as c$1, x, u, L, O, E } from "./BufferView.js";
import { t, r as r$5, o as o$2, b as t$1, f as f$1, e as e$3, n as n$3 } from "./vec33.js";
import { a as n, m, r as r$1, o as o$1, b as r$6, h as f, t as t$2, c as n$1, j as d$1, d as o$3, e as e$2, k as n$2, i as i$1, f as f$2, g as o$4, l as o$5 } from "./DefaultMaterial_COLOR_GAMMA.js";
import { _ } from "./georeference.js";
import { E as E$1, D } from "./enums.js";
import "vue";
import "./imageUtils.js";
import "./earcut.js";
import "./deduplicate.js";
import "./mat4f64.js";
import "./types.js";
import "./Version.js";
import "./quat.js";
import "./quatf64.js";
async function W(e2, t2, r$12) {
  const o2 = new n(X(r$12)), s = (await m(o2, t2, r$12, true)).model, i2 = s.lods.shift(), a = new Map(), c2 = new Map();
  s.textures.forEach((e3, t3) => a.set(t3, te(e3))), s.materials.forEach((e3, t3) => c2.set(t3, re(e3, a)));
  const u2 = ee(i2);
  for (const n2 of u2.parts)
    oe(u2, n2, c2);
  const { position: l2, normal: f2, tangent: m$12, color: p$1, texCoord0: d2 } = u2.vertexAttributes, x2 = { position: l2.typedBuffer, normal: r(f2) ? f2.typedBuffer : null, tangent: r(m$12) ? m$12.typedBuffer : null, uv: r(d2) ? d2.typedBuffer : null, color: r(p$1) ? p$1.typedBuffer : null }, T2 = _(x2, e2, r$12);
  return { transform: T2.transform, components: u2.components, spatialReference: e2.spatialReference, vertexAttributes: new p({ position: T2.vertexAttributes.position, normal: T2.vertexAttributes.normal, tangent: T2.vertexAttributes.tangent, color: x2.color, uv: x2.uv }) };
}
function X(e2) {
  const r$12 = e2 == null ? void 0 : e2.resolveFile;
  return r$12 ? { busy: false, request: async (e3, o2, s) => {
    const i2 = r$12(e3), a = o2 === "image" ? "image" : o2 === "binary" ? "array-buffer" : "json";
    return (await U(i2, { responseType: a, signal: r(s) ? s.signal : null })).data;
  } } : null;
}
function Y(e2, t2) {
  if (t$3(e2))
    return "-";
  const o2 = e2.typedBuffer;
  return `${r$2(t2, o2.buffer, () => t2.size)}/${o2.byteOffset}/${o2.byteLength}`;
}
function Z(e2) {
  return r(e2) ? e2.toString() : "-";
}
function ee(e2) {
  let t2 = 0;
  const has = { color: false, tangent: false, normal: false, texCoord0: false }, o2 = new Map(), n2 = new Map(), s = [];
  for (const i2 of e2.parts) {
    const { attributes: { position: e3, normal: a, color: c2, tangent: u2, texCoord0: l2 } } = i2, f2 = `
      ${Y(e3, o2)}/
      ${Y(a, o2)}/
      ${Y(c2, o2)}/
      ${Y(u2, o2)}/
      ${Y(l2, o2)}/
      ${Z(i2.transform)}
    `;
    let m2 = false;
    const p2 = r$2(n2, f2, () => (m2 = true, { start: t2, length: e3.count }));
    m2 && (t2 += e3.count), a && (has.normal = true), c2 && (has.color = true), u2 && (has.tangent = true), l2 && (has.texCoord0 = true), s.push({ gltf: i2, writeVertices: m2, region: p2 });
  }
  return { vertexAttributes: { position: r$1(T, t2), normal: has.normal ? r$1(i, t2) : null, tangent: has.tangent ? r$1(c$1, t2) : null, color: has.color ? r$1(x, t2) : null, texCoord0: has.texCoord0 ? r$1(u, t2) : null }, parts: s, components: [] };
}
function te(e2) {
  return new m$1({ data: e2.data, wrap: ae(e2.parameters.wrap) });
}
function re(t2, r2) {
  const o$12 = new l(le(t2.color, t2.opacity)), n2 = t2.emissiveFactor ? new l(fe(t2.emissiveFactor)) : null;
  return new c({ color: o$12, colorTexture: e(o(t2.textureColor, (e2) => r2.get(e2))), normalTexture: e(o(t2.textureNormal, (e2) => r2.get(e2))), emissiveColor: n2, emissiveTexture: e(o(t2.textureEmissive, (e2) => r2.get(e2))), occlusionTexture: e(o(t2.textureOcclusion, (e2) => r2.get(e2))), alphaMode: ie(t2.alphaMode), alphaCutoff: t2.alphaCutoff, doubleSided: t2.doubleSided, metallic: t2.metallicFactor, roughness: t2.roughnessFactor, metallicRoughnessTexture: e(o(t2.textureMetallicRoughness, (e2) => r2.get(e2))), colorTextureTransform: t2.colorTextureTransform, normalTextureTransform: t2.normalTextureTransform, occlusionTextureTransform: t2.occlusionTextureTransform, emissiveTextureTransform: t2.emissiveTextureTransform, metallicRoughnessTextureTransform: t2.metallicRoughnessTextureTransform });
}
function oe(e2, t2, r2) {
  t2.writeVertices && ne(e2, t2);
  const o2 = t2.gltf, n2 = se(o2.indices || o2.attributes.position.count, o2.primitiveType), s = t2.region.start;
  if (s)
    for (let i2 = 0; i2 < n2.length; i2++)
      n2[i2] += s;
  e2.components.push(new g({ faces: n2, material: r2.get(o2.material), trustSourceNormals: true }));
}
function ne(e2, t$32) {
  const { position: r$12, normal: s, tangent: i$12, color: a, texCoord0: l2 } = e2.vertexAttributes, f$22 = t$32.region.start, { attributes: m2, transform: p2 } = t$32.gltf, d$2 = m2.position.count;
  if (t(r$12.slice(f$22, d$2), m2.position, p2), r(m2.normal) && r(s)) {
    const e3 = g$1(e$1(), p2), t2 = s.slice(f$22, d$2);
    r$5(t2, m2.normal, e3), d(e3) && o$2(t2, t2);
  } else
    r(s) && t$1(s, 0, 0, 1, { dstIndex: f$22, count: d$2 });
  if (r(m2.tangent) && r(i$12)) {
    const e3 = g$1(e$1(), p2), t2 = i$12.slice(f$22, d$2);
    r$6(t2, m2.tangent, e3), d(e3) && f(t2, t2);
  } else
    r(i$12) && t$2(i$12, 0, 0, 1, 1, { dstIndex: f$22, count: d$2 });
  if (r(m2.texCoord0) && r(l2) ? n$1(l2.slice(f$22, d$2), m2.texCoord0) : r(l2) && d$1(l2, 0, 0, { dstIndex: f$22, count: d$2 }), r(m2.color) && r(a)) {
    const e3 = m2.color, t2 = a.slice(f$22, d$2);
    if (e3.elementCount === 4)
      e3 instanceof c$1 ? o$3(t2, e3, 255) : e3 instanceof x ? e$2(t2, e3) : e3 instanceof L && n$2(t2, e3, 8);
    else {
      t$2(t2, 255, 255, 255, 255);
      const r2 = O.fromTypedArray(t2.typedBuffer, t2.typedBufferStride);
      e3 instanceof i ? f$1(r2, e3, 255) : e3 instanceof O ? e$3(r2, e3) : e3 instanceof E && n$3(r2, e3, 8);
    }
  } else
    r(a) && t$2(a.slice(f$22, d$2), 255, 255, 255, 255);
}
function se(e2, t2) {
  switch (t2) {
    case E$1.TRIANGLES:
      return o$4(e2, o$5);
    case E$1.TRIANGLE_STRIP:
      return f$2(e2);
    case E$1.TRIANGLE_FAN:
      return i$1(e2);
  }
}
function ie(e2) {
  switch (e2) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function ae(e2) {
  return { horizontal: ce(e2.s), vertical: ce(e2.t) };
}
function ce(e2) {
  switch (e2) {
    case D.CLAMP_TO_EDGE:
      return "clamp";
    case D.MIRRORED_REPEAT:
      return "mirror";
    case D.REPEAT:
      return "repeat";
  }
}
function ue(e2) {
  return e2 ** (1 / o$1) * 255;
}
function le(e2, t2) {
  return r$3(ue(e2[0]), ue(e2[1]), ue(e2[2]), t2);
}
function fe(e2) {
  return r$4(ue(e2[0]), ue(e2[1]), ue(e2[2]));
}
export { W as loadGLTFMesh };
