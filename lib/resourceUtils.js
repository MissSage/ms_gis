import { f_ as G, gJ as q, s, C as r, a2 as t, fP as kt, U } from "./index.js";
import "vue";
async function c(e, t2 = {}, a) {
  await e.load(a);
  const o = G(e.itemUrl, "resources"), { start: n = 1, num: c2 = 10, sortOrder: u2 = "asc", sortField: i2 = "created" } = t2, l2 = { query: { start: n, num: c2, sortOrder: u2, sortField: i2, token: e.apiKey }, signal: q(a, "signal") }, p2 = await e.portal._request(o, l2);
  return { total: p2.total, nextStart: p2.nextStart, resources: p2.resources.map(({ created: t3, size: r2, resource: a2 }) => ({ created: new Date(t3), size: r2, resource: e.resourceFromPath(a2) })) };
}
async function u(e, o, n, c2) {
  if (!e.hasPath())
    throw new s(`portal-item-resource-${o}:invalid-path`, "Resource does not have a valid path");
  const u2 = e.portalItem;
  await u2.load(c2);
  const i2 = G(u2.userItemUrl, o === "add" ? "addResources" : "updateResources"), [l2, d2] = p(e.path), m2 = await h(n), f2 = new FormData();
  return l2 && l2 !== "." && f2.append("resourcesPrefix", l2), r(c2) && c2.compress && f2.append("compress", "true"), f2.append("fileName", d2), f2.append("file", m2, d2), f2.append("f", "json"), r(c2) && c2.access && f2.append("access", c2.access), await u2.portal._request(i2, { method: "post", body: f2, signal: q(c2, "signal") }), e;
}
async function i(e, a, o) {
  if (!a.hasPath())
    throw new s("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
  await e.load(o);
  const n = G(e.userItemUrl, "removeResources");
  await e.portal._request(n, { method: "post", query: { resource: a.path }, signal: q(o, "signal") }), a.portalItem = null;
}
async function l(e, t2) {
  await e.load(t2);
  const a = G(e.userItemUrl, "removeResources");
  return e.portal._request(a, { method: "post", query: { deleteAll: true }, signal: q(t2, "signal") });
}
function p(e) {
  const t2 = e.lastIndexOf("/");
  return t2 === -1 ? [".", e] : [e.slice(0, t2), e.slice(t2 + 1)];
}
function d(e) {
  const [t2, r2] = m(e), [a, o] = p(t2);
  return [a, o, r2];
}
function m(e) {
  const t$1 = kt(e);
  return t(t$1) ? [e, ""] : [e.slice(0, e.length - t$1.length - 1), `.${t$1}`];
}
async function h(t2) {
  if (t2 instanceof Blob)
    return t2;
  return (await U(t2.url, { responseType: "blob" })).data;
}
function f(e, t2) {
  if (!e.hasPath())
    return null;
  const [r2, , a] = d(e.path);
  return e.portalItem.resourceFromPath(G(r2, t2 + a));
}
function w(e, t2) {
  if (!e.hasPath())
    return null;
  const [r2, , a] = d(e.path);
  return e.portalItem.resourceFromPath(G(r2, t2 + a));
}
export { u as addOrUpdateResource, h as contentToBlob, c as fetchResources, f as getSiblingOfSameType, w as getSiblingOfSameTypeI, l as removeAllResources, i as removeResource, d as splitPrefixFileNameAndExtension };
