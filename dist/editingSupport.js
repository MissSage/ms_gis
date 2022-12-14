var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
import { aX as y$1, h_ as o, h$ as d, g as s, a as r, cx as j, cm as nt, dF as v$1, cC as g$1, t, i0 as n } from "./index.js";
import "vue";
var _;
!function(_2) {
  _2.GLTF_BINARY = "3D_glb", _2.GLTF_JSON = "3D_gltf";
}(_ || (_ = {}));
function c(e) {
  return e && e.applyEdits != null;
}
async function h(e, t2, a, s2 = {}) {
  var _a;
  let i, o$1;
  const d$1 = { edits: a, result: new Promise((e2, t3) => {
    i = e2, o$1 = t3;
  }) };
  e.emit("apply-edits", d$1);
  try {
    const { results: o$12, edits: d$12 } = await m(e, t2, a, s2), n2 = (e2) => e2.filter((e3) => !e3.error).map(y$1), p = { edits: d$12, addedFeatures: n2(o$12.addFeatureResults), updatedFeatures: n2(o$12.updateFeatureResults), deletedFeatures: n2(o$12.deleteFeatureResults), addedAttachments: n2(o$12.addAttachmentResults), updatedAttachments: n2(o$12.updateAttachmentResults), deletedAttachments: n2(o$12.deleteAttachmentResults) };
    return ((_a = o$12.editedFeatureResults) == null ? void 0 : _a.length) && (p.editedFeatures = o$12.editedFeatureResults), (p.addedFeatures.length || p.updatedFeatures.length || p.deletedFeatures.length || p.addedAttachments.length || p.updatedAttachments.length || p.deletedAttachments.length) && (e.emit("edits", p), o(e) && d.emit("edits", { layer: e, event: p })), i(p), o$12;
  } catch (n2) {
    throw o$1(n2), n2;
  }
}
async function m(e, t2, r2, s$1) {
  if (await e.load(), !c(t2))
    throw new s(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!e.editingEnabled)
    throw new s(`${e.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e });
  const { edits: i, options: o2 } = await y(e, r2, s$1);
  return i.addFeatures.length || i.updateFeatures.length || i.deleteFeatures.length || i.addAttachments.length || i.updateAttachments.length || i.deleteAttachments.length ? { edits: i, results: await t2.applyEdits(i, o2) } : { edits: i, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
}
async function y(e, r$1, i) {
  const o2 = r$1 && (r$1.addFeatures || r$1.updateFeatures || r$1.deleteFeatures), d2 = r$1 && (r$1.addAttachments || r$1.updateAttachments || r$1.deleteAttachments), n2 = r(e.infoFor3D);
  if (!r$1 || !o2 && !d2)
    throw new s(`${e.type}-layer:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  if (!e.capabilities.data.isVersioned && i && i.gdbVersion)
    throw new s(`${e.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!e.capabilities.editing.supportsRollbackOnFailure && i && i.rollbackOnFailureEnabled)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  if (!e.capabilities.editing.supportsGlobalId && i && i.globalIdUsed)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!e.capabilities.editing.supportsGlobalId && d2)
    throw new s(`${e.type}-layer:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if ((!i || !i.globalIdUsed) && d2)
    throw new s(`${e.type}-layer:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
  const l = __spreadValues({}, i);
  if (l.rollbackOnFailureEnabled != null || e.capabilities.editing.supportsRollbackOnFailure || (l.rollbackOnFailureEnabled = true), l.rollbackOnFailureEnabled === false && l.returnServiceEditsOption === "original-and-current-features")
    throw new s(`${e.type}-layer:invalid-parameter`, "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");
  if (!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference && l.returnServiceEditsInSourceSR)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
  if (l.returnServiceEditsInSourceSR && l.returnServiceEditsOption !== "original-and-current-features")
    throw new s(`${e.type}-layer:invalid-parameter`, "'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");
  const u = __spreadValues({}, r$1);
  if (u.addFeatures = r$1 && j.isCollection(r$1.addFeatures) ? r$1.addFeatures.toArray() : u.addFeatures || [], u.updateFeatures = r$1 && j.isCollection(r$1.updateFeatures) ? r$1.updateFeatures.toArray() : u.updateFeatures || [], u.deleteFeatures = r$1 && j.isCollection(r$1.deleteFeatures) ? r$1.deleteFeatures.toArray() : u.deleteFeatures || [], u.addFeatures.length && !e.capabilities.operations.supportsAdd)
    throw new s(`${e.type}-layer:unsupported-operation`, "Layer does not support adding features.");
  if (u.updateFeatures.length && !e.capabilities.operations.supportsUpdate)
    throw new s(`${e.type}-layer:unsupported-operation`, "Layer does not support updating features.");
  if (u.deleteFeatures.length && !e.capabilities.operations.supportsDelete)
    throw new s(`${e.type}-layer:unsupported-operation`, "Layer does not support deleting features.");
  u.addAttachments = u.addAttachments || [], u.updateAttachments = u.updateAttachments || [], u.deleteAttachments = u.deleteAttachments || [], u.addFeatures = u.addFeatures.map(v), u.updateFeatures = u.updateFeatures.map(v), u.addAssets = [];
  const p = i && i.globalIdUsed || n2;
  u.addFeatures.forEach((t2) => g(t2, e, p)), u.updateFeatures.forEach((t2) => F(t2, e, p)), u.deleteFeatures.forEach((t2) => b(t2, e, p)), u.addAttachments.forEach((t2) => w(t2, e)), u.updateAttachments.forEach((t2) => w(t2, e)), n2 && await I(u, e);
  return { edits: await A(u), options: l };
}
function f(e, t2, r$1) {
  if (r$1) {
    if ("attributes" in e && !e.attributes[t2.globalIdField])
      throw new s(`${t2.type}-layer:invalid-parameter`, "Feature should have 'globalId' when 'globalIdUsed' is true");
    if (!("attributes" in e) && !e.globalId)
      throw new s(`${t2.type}-layer:invalid-parameter`, "'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if ("geometry" in e && r(e.geometry)) {
    if (e.geometry.hasZ && t2.capabilities.data.supportsZ === false)
      throw new s(`${t2.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e.geometry.hasM && t2.capabilities.data.supportsM === false)
      throw new s(`${t2.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function g(e, t2, a) {
  f(e, t2, a);
}
function b(e, t2, a) {
  f(e, t2, a);
}
function F(e, t2, r$1) {
  if (f(e, t2, r$1), "geometry" in e && r(e.geometry) && !t2.capabilities.editing.supportsGeometryUpdate)
    throw new s(`${t2.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function w(e, t2) {
  const { feature: r2, attachment: s$1 } = e;
  if (!r2 || "attributes" in r2 && !r2.attributes[t2.globalIdField])
    throw new s(`${t2.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in r2) && !r2.globalId)
    throw new s(`${t2.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!s$1.globalId)
    throw new s(`${t2.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!s$1.data && !s$1.uploadId)
    throw new s(`${t2.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(s$1.data instanceof File && !!s$1.data.name) && !s$1.name)
    throw new s(`${t2.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!t2.capabilities.editing.supportsUploadWithItemId && s$1.uploadId)
    throw new s(`${t2.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if (typeof s$1.data == "string") {
    const e2 = nt(s$1.data);
    if (e2 && !e2.isBase64)
      throw new s(`${t2.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
async function A(e) {
  const t2 = e.addFeatures, a = e.updateFeatures, r2 = t2.concat(a).map((e2) => e2.geometry), s2 = await v$1(r2), i = t2.length, o2 = a.length;
  return s2.slice(0, i).forEach((t3, a2) => e.addFeatures[a2].geometry = t3), s2.slice(i, i + o2).forEach((t3, a2) => e.updateFeatures[a2].geometry = t3), e;
}
function v(t2) {
  const a = new g$1();
  return t2.attributes || (t2.attributes = {}), a.geometry = t2.geometry, a.attributes = t2.attributes, a;
}
async function I(e, t$1) {
  if (t(t$1.infoFor3D))
    return;
  const { infoFor3D: a } = t$1;
  let r2 = false;
  for (const i of a.editFormats)
    if (i === _.GLTF_BINARY) {
      r2 = true;
      break;
    }
  const s2 = [];
  for (const i of e.addFeatures)
    s2.push(E(i, e, t$1, r2));
  for (const i of e.updateFeatures)
    s2.push(E(i, e, t$1, r2));
  const o2 = await Promise.allSettled(s2);
  for (const i of o2)
    if (i.status === "rejected")
      throw i.reason;
}
async function E(e, t$1, r$1, o2) {
  if (t(e.geometry) || e.geometry.type !== "mesh")
    return;
  const n$1 = e.geometry, l = r$1.globalIdField;
  if (r(r$1.parsedUrl) && r(n$1.external) && Array.isArray(n$1.external.source) && n$1.external.source.length === 1 && "source" in n$1.external.source[0] && typeof n$1.external.source[0].source == "string" && n$1.external.source[0].source.startsWith(r$1.parsedUrl.path))
    return;
  if (!o2)
    throw new s(`${r$1.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
  const u = await n$1.toBinaryGLTF(), c2 = await u.buffer(), h2 = `{${n()}}`, m2 = `${h2}.glb`;
  t$1.addAssets.push({ featureGlobalId: e.getAttribute(l), assetMapGlobalId: h2, assetName: m2, flags: 0, data: c2.data, mimeType: c2.type, assetType: _.GLTF_BINARY, feature: e });
}
export { h as applyEdits };
