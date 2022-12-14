import { s, cY as x$1, bN as j$1, g as s$1, hW as l, hX as s$2, hY as Ze, cs as E$1, t, hZ as o$1, d$ as x$2, hc as m, a as r$1 } from "./index.js";
import { i } from "./originUtils.js";
import { r } from "./fetchService.js";
import { o } from "./jsonContext.js";
import { i as i$1, a, c, f } from "./portalItemUtils.js";
import "vue";
import "./multiOriginJSONSupportUtils.js";
const I = s.getLogger("esri.layers.FeatureLayer"), S = "Feature Service";
function g(e, t2) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t2}`;
}
function j(e, r2) {
  if (r2.type !== S)
    throw new s$1("feature-layer:portal-item-wrong-type", g(e, `should have portal item of type "${S}"`));
}
async function L(e) {
  if (await e.load(), l(e))
    throw new s$1("feature-layer:save", g(e, "using an in-memory source cannot be saved to a portal item"));
}
function P(e, r2) {
  var _a;
  let a2 = ((_a = e.messages) != null ? _a : []).filter(({ type: e2 }) => e2 === "error").map(({ name: e2, message: r3, details: a3 }) => new s$1(e2, r3, a3));
  if ((r2 == null ? void 0 : r2.ignoreUnsupported) && (a2 = a2.filter(({ name: e2 }) => e2 !== "layer:unsupported" && e2 !== "symbol:unsupported" && e2 !== "symbol-layer:unsupported" && e2 !== "property:unsupported" && e2 !== "url:unsupported")), a2.length > 0)
    throw new s$1("feature-layer:save", "Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: a2 });
}
async function J(e, t2, r2) {
  "beforeSave" in e && typeof e.beforeSave == "function" && await e.beforeSave();
  const a2 = e.write({}, t2);
  return P(t2, r2), a2;
}
function N(e) {
  const { layer: t2, layerJSON: r2 } = e;
  return t2.isTable ? { layers: [], tables: [r2] } : { layers: [r2], tables: [] };
}
function O(e) {
  i$1(e, f.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e2, t2, r2) => r2.indexOf(e2) === t2));
}
function E(e) {
  const r2 = e.portalItem;
  if (!r2)
    throw I.error("save: requires the portalItem property to be set"), new s$1("feature-layer:portal-item-not-set", g(e, "requires the portalItem property to be set"));
  if (!r2.loaded)
    throw new s$1("feature-layer:portal-item-not-loaded", g(e, "cannot be saved to a portal item that does not exist or is inaccessible"));
  j(e, r2);
}
async function T(e, t2) {
  var _a;
  return /\/\d+\/?$/.test((_a = e.url) != null ? _a : "") ? N(t2[0]) : $(e, t2);
}
async function $(e, t2) {
  const { layer: { url: r2, customParameters: a2, apiKey: o2 } } = t2[0];
  let s2 = await e.fetchData("json");
  s2 && s2.layers != null && s2.tables != null || (s2 = await x(s2, { url: r2 != null ? r2 : "", customParameters: a2, apiKey: o2 }, t2.map((e2) => e2.layer.layerId)));
  for (const l2 of t2)
    K(l2.layer, l2.layerJSON, s2);
  return s2;
}
async function x(e, t2, r$12) {
  var a2, o2;
  e || (e = {}), (a2 = e).layers || (a2.layers = []), (o2 = e).tables || (o2.tables = []);
  const { url: s2, customParameters: l2, apiKey: i2 } = t2, { serviceJSON: n, layersJSON: u } = await r(s2, { customParameters: l2, apiKey: i2 }), c2 = A(e.layers, n.layers, r$12), y = A(e.tables, n.tables, r$12);
  e.layers = c2.itemResources, e.tables = y.itemResources;
  const d = [...c2.added, ...y.added], m2 = u ? [...u.layers, ...u.tables] : [];
  return await U(e, d, s2, m2), e;
}
function A(t2, r2, a2) {
  const o2 = s$2(t2, r2, (e, t3) => e.id === t3.id);
  t2 = t2.filter((e) => !o2.removed.some((t3) => t3.id === e.id));
  const s2 = o2.added.map(({ id: e }) => ({ id: e }));
  return s2.forEach(({ id: e }) => {
    t2.push({ id: e });
  }), { itemResources: t2, added: s2.filter(({ id: e }) => !a2.includes(e)) };
}
async function U(e, t$1, r2, o2) {
  const s2 = t$1.map(({ id: e2 }) => new Ze({ url: r2, layerId: e2, sourceJSON: o2.find(({ id: t2 }) => t2 === e2) }));
  await E$1(s2.map((e2) => e2.load())), s2.forEach((t$12) => {
    const { layerId: r3, loaded: o3, defaultPopupTemplate: s3 } = t$12;
    if (!o3 || t(s3))
      return;
    K(t$12, { id: r3, popupInfo: s3.toJSON() }, e);
  });
}
function K(e, t2, r2) {
  e.isTable ? F(r2.tables, t2) : F(r2.layers, t2);
}
function F(e, t2) {
  if (!e)
    return;
  const r2 = e.findIndex(({ id: e2 }) => e2 === t2.id);
  r2 === -1 ? e.push(t2) : e[r2] = t2;
}
function R(e) {
  const { portalItem: t2 } = e;
  return o$1(e) && !e.dynamicDataSource && !!(t2 == null ? void 0 : t2.loaded) && t2.type === S;
}
async function D(e) {
  if (!(e == null ? void 0 : e.length))
    throw new s$1("feature-layer-utils-saveall:missing-parameters", "'layers' array should contain at least one feature layer");
  await Promise.all(e.map((e2) => e2.load()));
  for (const o2 of e)
    if (!R(o2))
      throw new s$1("feature-layer-utils-saveall:invalid-parameters", `'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${g(o2, "does not conform")}`, { layer: o2 });
  const r2 = e.map((e2) => e2.portalItem.id);
  if (new Set(r2).size > 1)
    throw new s$1("feature-layer-utils-saveall:invalid-parameters", "All layers in the 'layers' array should be loaded from the same portal item");
  const a2 = e.map((e2) => e2.layerId);
  if (new Set(a2).size !== a2.length)
    throw new s$1("feature-layer-utils-saveall:invalid-parameters", "'layers' array should contain only one instance each of layer or table in a feature service");
}
function _(e, t2) {
  var _a, _b;
  var r2, a2;
  let o2 = x$2.from(t2);
  return o2.id && (o2 = o2.clone(), o2.id = null), (_a = (r2 = o2).type) != null ? _a : r2.type = S, (_b = (a2 = o2).portal) != null ? _b : a2.portal = j$1.getDefault(), j(e, o2), o2;
}
async function q(e, t2) {
  const { url: r2, layerId: a$1, title: s2, fullExtent: l2, isTable: i2 } = e, n = m(r2), p = r$1(n) && n.serverType === "FeatureServer";
  t2.url = p ? r2 : `${r2}/${a$1}`, t2.title || (t2.title = s2), t2.extent = null, !i2 && r$1(l2) && (t2.extent = await a(l2)), c(t2, f.METADATA), c(t2, f.MULTI_LAYER), i$1(t2, f.SINGLE_LAYER), i2 && i$1(t2, f.TABLE), O(t2);
}
async function z(e, t2, r2) {
  var _a;
  const a2 = e.portal;
  await (a2 == null ? void 0 : a2._signIn()), await ((_a = a2 == null ? void 0 : a2.user) == null ? void 0 : _a.addItem({ item: e, data: t2, folder: r2 == null ? void 0 : r2.folder }));
}
const C = x$1(M);
async function M(e, t2) {
  await L(e), E(e);
  const r2 = e.portalItem, a2 = o(r2), o$12 = await J(e, a2, t2), s2 = await T(r2, [{ layer: e, layerJSON: o$12 }]);
  return O(r2), await r2.update({ data: s2 }), i(a2), r2;
}
const Y = x$1(async (e, t2) => {
  await D(e);
  const r2 = e[0].portalItem, a2 = o(r2), o$12 = await Promise.all(e.map((e2) => J(e2, a2, t2))), s2 = await T(r2, e.map((e2, t3) => ({ layer: e2, layerJSON: o$12[t3] })));
  return O(r2), await r2.update({ data: s2 }), await Promise.all(e.slice(1).map((e2) => e2.portalItem.reload())), i(a2), r2.clone();
}), B = x$1(G);
async function G(e, t2, r2) {
  await L(e);
  const a2 = _(e, t2), o$12 = o(a2), s2 = N({ layer: e, layerJSON: await J(e, o$12, r2) });
  return await q(e, a2), await z(a2, s2, r2), e.portalItem = a2, i(o$12), a2;
}
export { C as save, Y as saveAll, B as saveAs };
