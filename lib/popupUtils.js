import { C as r, a2 as t, mP as C, mB as T } from "./index.js";
async function d(l, d2 = l.popupTemplate) {
  if (t(d2))
    return [];
  const s2 = await d2.getRequiredFields(l.fieldsIndex), { lastEditInfoEnabled: i } = d2, { objectIdField: n, typeIdField: u, globalIdField: a, relationships: o } = l;
  if (s2.includes("*"))
    return ["*"];
  const r2 = i ? await C(l) : [], f = T(l.fieldsIndex, [...s2, ...r2]);
  return u && f.push(u), f && n && l.fieldsIndex.has(n) && !f.includes(n) && f.push(n), f && a && l.fieldsIndex.has(a) && !f.includes(a) && f.push(a), o && o.forEach((e) => {
    const { keyField: p } = e;
    f && p && l.fieldsIndex.has(p) && !f.includes(p) && f.push(p);
  }), f;
}
function s(e, p) {
  return e.popupTemplate ? e.popupTemplate : r(p) && p.defaultPopupTemplateEnabled && r(e.defaultPopupTemplate) ? e.defaultPopupTemplate : null;
}
export { d, s };
