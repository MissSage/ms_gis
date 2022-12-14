import { bO as j, bN as j$1 } from "./index.js";
function e(e2) {
  return { origin: "portal-item", url: j(e2.itemUrl), portal: e2.portal || j$1.getDefault(), portalItem: e2, readResourcePaths: [] };
}
function o(e2) {
  return { origin: "portal-item", messages: [], writtenProperties: [], url: e2.itemUrl ? j(e2.itemUrl) : null, portal: e2.portal || j$1.getDefault(), portalItem: e2 };
}
export { e, o };
