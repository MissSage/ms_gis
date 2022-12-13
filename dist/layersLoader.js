import { U, g as s, d_ as t, bN as j, e0 as b$1, d$ as x, e1 as d$1 } from "./index.js";
import { e } from "./jsonContext.js";
import { s as s$1 } from "./portalItemUtils.js";
async function n(n2) {
  const { data: o } = await U(n2, { responseType: "json", query: { f: "json" } });
  return o;
}
async function p(e2, t2) {
  const r = e2.instance.portalItem;
  if (r && r.id)
    return await r.load(t2), u(e2), y(e2, t2);
}
function u(t2) {
  const r = t2.instance.portalItem;
  if (!t2.supportedTypes.includes(r.type))
    throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r.type, expectedType: t2.supportedTypes.join(", ") });
}
async function y(e$1, t$1) {
  const r = e$1.instance, a = r.portalItem, { url: n2, title: l } = a, i = e(a);
  if (r.type === "group")
    return r.read({ title: l }, i), c(r, e$1);
  n2 && r.read({ url: n2 }, i);
  const p2 = await h(e$1, t$1);
  return p2 && r.read(p2, i), r.resourceReferences = { portalItem: a, paths: i.readResourcePaths }, r.type !== "subtype-group" && r.read({ title: l }, i), t(r, i);
}
function c(t2, r) {
  var _a;
  let a;
  const n2 = t2.portalItem.type, o = r.layerModuleTypeMap, s$2 = (_a = s$1(t2.portalItem, "Oriented Imagery Layer")) != null ? _a : false;
  switch (n2) {
    case "Feature Service":
      a = s$2 ? o.OrientedImageryLayer : o.FeatureLayer;
      break;
    case "Stream Service":
      a = o.StreamLayer;
      break;
    case "Scene Service":
      a = o.SceneLayer;
      break;
    case "Feature Collection":
      a = o.FeatureLayer;
      break;
    default:
      throw new s("portal:unsupported-item-type-as-group", `The item type '${n2}' is not supported as a 'IGroupLayer'`);
  }
  let i;
  return a().then((e2) => (i = e2, h(r))).then(async (e2) => {
    let r2 = () => i;
    if (n2 === "Feature Service") {
      if (T(e2 = await b(e2, t2.portalItem.url)).length) {
        const e3 = o.SubtypeGroupLayer, t3 = await e3();
        r2 = (e4) => e4.layerType === "SubtypeGroupLayer" ? t3 : i;
      }
      return m(t2, r2, e2);
    }
    return w(e2) > 0 ? m(t2, r2, e2) : d(t2, r2);
  });
}
function d(e2, t2) {
  return e2.portalItem.url ? n(e2.portalItem.url).then((r) => {
    var _a, _b;
    function a(e3) {
      return { id: e3.id, name: e3.name };
    }
    r && m(e2, t2, { layers: (_a = r.layers) == null ? void 0 : _a.map(a), tables: (_b = r.tables) == null ? void 0 : _b.map(a) });
  }) : Promise.resolve();
}
function m(e2, t2, r) {
  let a = r.layers || [];
  const n2 = r.tables || [];
  if (e2.portalItem.type === "Feature Collection" && (a.forEach((e3) => {
    var _a;
    ((_a = e3 == null ? void 0 : e3.layerDefinition) == null ? void 0 : _a.type) === "Table" && n2.push(e3);
  }), a = a.filter((e3) => {
    var _a;
    return ((_a = e3 == null ? void 0 : e3.layerDefinition) == null ? void 0 : _a.type) !== "Table";
  })), "coverage" in r) {
    const t3 = L(r);
    e2.add(t3);
  }
  a.reverse().forEach((a2) => {
    const n3 = f(e2, t2(a2), r, a2);
    e2.add(n3);
  }), n2.reverse().forEach((a2) => {
    const n3 = f(e2, t2(a2), r, a2);
    e2.tables.add(n3);
  });
}
function f(e2, t2, r, n2) {
  const o = new t2({ portalItem: e2.portalItem.clone(), layerId: n2.id });
  if (o.type !== "subtype-group" && (o.sublayerTitleMode = "service-name"), e2.portalItem.type === "Feature Collection") {
    const t3 = { origin: "portal-item", portal: e2.portalItem.portal || j.getDefault() };
    o.read(n2, t3);
    const l = r.showLegend;
    l != null && o.read({ showLegend: l }, t3);
  }
  return o;
}
function h(e2, t2) {
  if (e2.supportsData === false)
    return Promise.resolve(void 0);
  const r = e2.instance;
  return r.portalItem.fetchData("json", t2).catch(() => null).then((e3) => {
    if (v(r)) {
      let t3, a = true;
      if (e3 && w(e3) > 0) {
        if (r.layerId == null) {
          const t4 = T(e3);
          r.layerId = r.type === "subtype-group" ? t4 == null ? void 0 : t4[0] : g(e3);
        }
        t3 = I(e3, r), t3 && (w(e3) === 1 && (a = false), e3.showLegend != null && (t3.showLegend = e3.showLegend));
      }
      return a && r.sublayerTitleMode !== "service-name" && (r.sublayerTitleMode = "item-title-and-service-name"), t3;
    }
    return e3;
  });
}
async function b(e2, t2) {
  if ((e2 == null ? void 0 : e2.layers) == null || (e2 == null ? void 0 : e2.tables) == null) {
    const r = await n(t2);
    (e2 = e2 || {}).layers = e2.layers || (r == null ? void 0 : r.layers), e2.tables = e2.tables || (r == null ? void 0 : r.tables);
  }
  return e2;
}
function g(e2) {
  const t2 = e2.layers;
  if (t2 && t2.length)
    return t2[0].id;
  const r = e2.tables;
  return r && r.length ? r[0].id : null;
}
function I(e2, t2) {
  var _a, _b;
  const { layerId: r } = t2, a = ((_a = e2.layers) == null ? void 0 : _a.find((e3) => e3.id === r)) || ((_b = e2.tables) == null ? void 0 : _b.find((e3) => e3.id === r));
  return a && S(a, t2) ? a : null;
}
function w(e2) {
  var _a, _b, _c, _d;
  return ((_b = (_a = e2 == null ? void 0 : e2.layers) == null ? void 0 : _a.length) != null ? _b : 0) + ((_d = (_c = e2 == null ? void 0 : e2.tables) == null ? void 0 : _c.length) != null ? _d : 0);
}
function v(e2) {
  return e2.type !== "stream" && e2.type !== "oriented-imagery" && "layerId" in e2;
}
function L(a) {
  const { coverage: o } = a;
  if (!o)
    return null;
  const l = new URL(o);
  if (o.toLowerCase().includes("item.html")) {
    const e2 = l.searchParams.get("id"), r = l.origin;
    return b$1.fromPortalItem({ portalItem: new x({ id: e2, url: r }) });
  }
  if (d$1(o))
    return b$1.fromArcGISServerUrl({ url: o });
  throw new s("portal:oriented-imagery-layer-coverage", "the provided coverage url couldn't be loaded as a layer");
}
function T(e2) {
  var _a;
  const t2 = [];
  return (_a = e2 == null ? void 0 : e2.layers) == null ? void 0 : _a.forEach((e3) => {
    e3.layerType === "SubtypeGroupLayer" && t2.push(e3.id);
  }), t2;
}
function S(e2, t2) {
  return !(t2.type === "feature" && "layerType" in e2 && e2.layerType === "SubtypeGroupLayer" || t2.type === "subtype-group" && !("layerType" in e2));
}
var layersLoader = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getFirstLayerOrTableId: g,
  getNumLayersAndTables: w,
  getSubtypeGroupLayerIds: T,
  load: p,
  preprocessFSItemData: b
});
export { T, b, g, layersLoader as l, n, w };
