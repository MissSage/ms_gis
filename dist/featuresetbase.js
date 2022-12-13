import { V as V$1, y as v, K as K$1, ai as t, J as J$1, P, t as t$1, e, L as le, Y as Y$1, b as J$2, w, E, aj as t$2, F, r as re, h as g, ak as xe, al as R, a1 as n, am as l } from "./arcadeUtils.js";
import { D, q as q$1, e as e$1, v as v$1, G, d, c, a as e$2, b as a, f as a$1, F as F$1, k, N, C as C$1, x, E as E$1, W, A, g as F$2 } from "./featureSetUtils.js";
import { u, w as w$1 } from "./SpatialFilter.js";
import { hC as C, hY as Ze, g2 as y } from "./index.js";
import { WhereClause as f } from "./WhereClause.js";
import "./number.js";
import "./executeForIds.js";
import "./geometryEngineAsync.js";
import "vue";
function J(e2, t2, n2, i) {
  if (i.length === 1) {
    if (Y$1(i[0]))
      return l(e2, i[0], -1);
    if (E(i[0]))
      return l(e2, i[0].toArray(), -1);
  }
  return l(e2, i, -1);
}
async function V(e2, t2, n2) {
  const i = e2.getVariables();
  if (i.length > 0) {
    const a2 = [];
    for (let e3 = 0; e3 < i.length; e3++) {
      const r2 = { name: i[e3] };
      a2.push(await t2.evaluateIdentifier(n2, r2));
    }
    const r = {};
    for (let e3 = 0; e3 < i.length; e3++)
      r[i[e3]] = a2[e3];
    return e2.parameters = r, e2;
  }
  return e2;
}
function q(e2, t2, n2 = null) {
  for (const i in e2)
    if (i.toLowerCase() === t2.toLowerCase())
      return e2[i];
  return n2;
}
function K(e2) {
  if (e2 === null)
    return null;
  const t2 = { type: q(e2, "type", ""), name: q(e2, "name", "") };
  if (t2.type === "range")
    t2.range = q(e2, "range", []);
  else {
    t2.codedValues = [];
    for (const n2 of q(e2, "codedValues", []))
      t2.codedValues.push({ name: q(n2, "name", ""), code: q(n2, "code", null) });
  }
  return t2;
}
function X(e2) {
  if (e2 === null)
    return null;
  const t2 = {}, n2 = q(e2, "wkt", null);
  n2 !== null && (t2.wkt = n2);
  const i = q(e2, "wkid", null);
  return i !== null && (t2.wkid = i), t2;
}
function Y(e2) {
  if (e2 === null)
    return null;
  const t2 = { hasZ: q(e2, "hasz", false), hasM: q(e2, "hasm", false) }, n2 = q(e2, "spatialreference", null);
  n2 && (t2.spatialReference = X(n2));
  const i = q(e2, "x", null);
  if (i !== null)
    return t2.x = i, t2.y = q(e2, "y", null), t2;
  const a2 = q(e2, "rings", null);
  if (a2 !== null)
    return t2.rings = a2, t2;
  const r = q(e2, "paths", null);
  if (r !== null)
    return t2.paths = r, t2;
  const s = q(e2, "points", null);
  if (s !== null)
    return t2.points = s, t2;
  for (const o of ["xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"]) {
    const n3 = q(e2, o, null);
    n3 !== null && (t2[o] = n3);
  }
  return t2;
}
function Z(e2, t2) {
  for (const n2 of t2)
    if (n2 === e2)
      return true;
  return false;
}
function Q(e2) {
  return !!e2.layerDefinition && (!!e2.featureSet && (Z(e2.layerDefinition.geometryType, ["", "esriGeometryPoint", "esriGeometryPolyline", "esriGeometryPolygon", "esriGeometryMultipoint", "esriGeometryEnvelope"]) !== false && (e2.layerDefinition.objectIdField !== null && e2.layerDefinition.objectIdField !== "" && (Y$1(e2.layerDefinition.fields) !== false && Y$1(e2.featureSet.features) !== false))));
}
function ee(G$1) {
  G$1.mode === "async" && (G$1.functions.getuser = function(a2, r) {
    return G$1.standardFunctionAsync(a2, r, async (l2, f2, c2) => {
      V$1(c2, 0, 2, a2, r);
      let u2 = v(c2[1], ""), d2 = u2 === true;
      if (u2 = u2 === true || u2 === false ? "" : K$1(u2), c2.length === 0 || c2[0] instanceof t) {
        let e2 = null;
        a2.services && a2.services.portal && (e2 = a2.services.portal), c2.length > 0 && (e2 = D(c2[0], e2));
        const n2 = await q$1(e2, u2, d2);
        if (n2) {
          const e3 = JSON.parse(JSON.stringify(n2));
          for (const t2 of ["lastLogin", "created", "modified"])
            e3[t2] !== void 0 && e3[t2] !== null && (e3[t2] = new Date(e3[t2]));
          return J$1.convertObjectToArcadeDictionary(e3);
        }
        return null;
      }
      let m = null;
      if (P(c2[0]) && (m = c2[0]), m) {
        if (d2 = false, u2)
          return null;
        await m.load();
        const n2 = await m.getOwningSystemUrl();
        if (!n2) {
          if (!u2) {
            const e2 = await m.getIdentityUser();
            return e2 ? J$1.convertObjectToArcadeDictionary({ username: e2 }) : null;
          }
          return null;
        }
        let i = null;
        a2.services && a2.services.portal && (i = a2.services.portal), i = D(new t(n2), i);
        const r2 = await q$1(i, u2, d2);
        if (r2) {
          const e2 = JSON.parse(JSON.stringify(r2));
          for (const t2 of ["lastLogin", "created", "modified"])
            e2[t2] !== void 0 && e2[t2] !== null && (e2[t2] = new Date(e2[t2]));
          return J$1.convertObjectToArcadeDictionary(e2);
        }
        return null;
      }
      throw new t$1(a2, e.InvalidParameter, r);
    });
  }, G$1.signatures.push({ name: "getuser", min: 1, max: 2 }), G$1.functions.featuresetbyid = function(e$22, t2) {
    return G$1.standardFunctionAsync(e$22, t2, (a2, s, o) => {
      if (V$1(o, 2, 4, e$22, t2), o[0] instanceof e$1) {
        const a3 = K$1(o[1]);
        let r = v(o[2], null);
        const s2 = le(v(o[3], true));
        if (r === null && (r = ["*"]), Y$1(r) === false)
          throw new t$1(e$22, e.InvalidParameter, t2);
        return o[0].featureSetById(a3, s2, r);
      }
      throw new t$1(e$22, e.InvalidParameter, t2);
    });
  }, G$1.signatures.push({ name: "featuresetbyid", min: 2, max: 4 }), G$1.functions.getfeatureset = function(e$12, t2) {
    return G$1.standardFunctionAsync(e$12, t2, (a2, r, s) => {
      if (V$1(s, 1, 2, e$12, t2), J$2(s[0])) {
        let t3 = v(s[1], "datasource");
        return t3 === null && (t3 = "datasource"), t3 = K$1(t3).toLowerCase(), v$1(s[0].fullSchema(), t3, e$12.lrucache, e$12.interceptor, e$12.spatialReference);
      }
      throw new t$1(e$12, e.InvalidParameter, t2);
    });
  }, G$1.signatures.push({ name: "getfeatureset", min: 1, max: 2 }), G$1.functions.featuresetbyportalitem = function(t$22, a2) {
    return G$1.standardFunctionAsync(t$22, a2, (r, o, l2) => {
      if (V$1(l2, 2, 5, t$22, a2), l2[0] === null)
        throw new t$1(t$22, e.PortalRequired, a2);
      if (l2[0] instanceof t) {
        const e$12 = K$1(l2[1]), r2 = K$1(l2[2]);
        let o2 = v(l2[3], null);
        const c3 = le(v(l2[4], true));
        if (o2 === null && (o2 = ["*"]), Y$1(o2) === false)
          throw new t$1(t$22, e.InvalidParameter, a2);
        let u3 = null;
        return t$22.services && t$22.services.portal && (u3 = t$22.services.portal), u3 = D(l2[0], u3), G(e$12, r2, t$22.spatialReference, o2, c3, u3, t$22.lrucache, t$22.interceptor);
      }
      if (w(l2[0]) === false)
        throw new t$1(t$22, e.PortalRequired, a2);
      const c2 = K$1(l2[0]), u2 = K$1(l2[1]);
      let d2 = v(l2[2], null);
      const m = le(v(l2[3], true));
      if (d2 === null && (d2 = ["*"]), Y$1(d2) === false)
        throw new t$1(t$22, e.InvalidParameter, a2);
      if (t$22.services && t$22.services.portal)
        return G(c2, u2, t$22.spatialReference, d2, m, t$22.services.portal, t$22.lrucache, t$22.interceptor);
      throw new t$1(t$22, e.PortalRequired, a2);
    });
  }, G$1.signatures.push({ name: "featuresetbyportalitem", min: 2, max: 5 }), G$1.functions.featuresetbyname = function(e$22, t2) {
    return G$1.standardFunctionAsync(e$22, t2, (a2, s, o) => {
      if (V$1(o, 2, 4, e$22, t2), o[0] instanceof e$1) {
        const a3 = K$1(o[1]);
        let r = v(o[2], null);
        const s2 = le(v(o[3], true));
        if (r === null && (r = ["*"]), Y$1(r) === false)
          throw new t$1(e$22, e.InvalidParameter, t2);
        return o[0].featureSetByName(a3, s2, r);
      }
      throw new t$1(e$22, e.InvalidParameter, t2);
    });
  }, G$1.signatures.push({ name: "featuresetbyname", min: 2, max: 4 }), G$1.functions.featureset = function(e$12, a2) {
    return G$1.standardFunction(e$12, a2, (r, s, o) => {
      V$1(o, 1, 1, e$12, a2);
      let l2 = o[0];
      const f2 = { layerDefinition: { geometryType: "", objectIdField: "", globalIdField: "", typeIdField: "", fields: [] }, featureSet: { geometryType: "", features: [] } };
      if (w(l2))
        l2 = JSON.parse(l2), l2.layerDefinition !== void 0 ? (f2.layerDefinition = l2.layerDefinition, f2.featureSet = l2.featureSet, l2.layerDefinition.spatialReference && (f2.layerDefinition.spatialReference = l2.layerDefinition.spatialReference)) : (f2.featureSet.features = l2.features, f2.featureSet.geometryType = l2.geometryType, f2.layerDefinition.geometryType = f2.featureSet.geometryType, f2.layerDefinition.objectIdField = l2.objectIdFieldName, f2.layerDefinition.typeIdField = l2.typeIdFieldName, f2.layerDefinition.globalIdField = l2.globalIdFieldName, f2.layerDefinition.fields = l2.fields, l2.spatialReference && (f2.layerDefinition.spatialReference = l2.spatialReference));
      else {
        if (!(o[0] instanceof J$1))
          throw new t$1(e$12, e.InvalidParameter, a2);
        {
          l2 = JSON.parse(o[0].castToText(true));
          const e2 = q(l2, "layerdefinition");
          if (e2 !== null) {
            f2.layerDefinition.geometryType = q(e2, "geometrytype", ""), f2.featureSet.geometryType = f2.layerDefinition.geometryType, f2.layerDefinition.globalIdField = q(e2, "globalidfield", ""), f2.layerDefinition.objectIdField = q(e2, "objectidfield", ""), f2.layerDefinition.typeIdField = q(e2, "typeidfield", "");
            const t2 = q(e2, "spatialreference", null);
            t2 && (f2.layerDefinition.spatialReference = X(t2));
            for (const i of q(e2, "fields", [])) {
              const e3 = { name: q(i, "name", ""), alias: q(i, "alias", ""), type: q(i, "type", ""), nullable: q(i, "nullable", true), editable: q(i, "editable", true), length: q(i, "length", null), domain: K(q(i, "domain")) };
              f2.layerDefinition.fields.push(e3);
            }
            const n2 = q(l2, "featureset", null);
            if (n2) {
              const e3 = {};
              for (const t3 of f2.layerDefinition.fields)
                e3[t3.name.toLowerCase()] = t3.name;
              for (const t3 of q(n2, "features", [])) {
                const n3 = {}, i = q(t3, "attributes", {});
                for (const t4 in i)
                  n3[e3[t4.toLowerCase()]] = i[t4];
                f2.featureSet.features.push({ attributes: n3, geometry: Y(q(t3, "geometry", null)) });
              }
            }
          } else {
            f2.layerDefinition.geometryType = q(l2, "geometrytype", ""), f2.featureSet.geometryType = f2.layerDefinition.geometryType, f2.layerDefinition.objectIdField = q(l2, "objectidfieldname", ""), f2.layerDefinition.typeIdField = q(l2, "typeidfieldname", "");
            const e3 = q(l2, "spatialreference", null);
            e3 && (f2.layerDefinition.spatialReference = X(e3));
            for (const n2 of q(l2, "fields", [])) {
              const e4 = { name: q(n2, "name", ""), alias: q(n2, "alias", ""), type: q(n2, "type", ""), nullable: q(n2, "nullable", true), editable: q(n2, "editable", true), length: q(n2, "length", null), domain: K(q(n2, "domain")) };
              f2.layerDefinition.fields.push(e4);
            }
            const t2 = {};
            for (const n2 of f2.layerDefinition.fields)
              t2[n2.name.toLowerCase()] = n2.name;
            for (const n2 of q(l2, "features", [])) {
              const e4 = {}, i = q(n2, "attributes", {});
              for (const n3 in i)
                e4[t2[n3.toLowerCase()]] = i[n3];
              f2.featureSet.features.push({ attributes: e4, geometry: Y(q(n2, "geometry", null)) });
            }
          }
        }
      }
      if (Q(f2) === false)
        throw new t$1(e$12, e.InvalidParameter, a2);
      return d.create(f2, e$12.spatialReference);
    });
  }, G$1.signatures.push({ name: "featureset", min: 1, max: 1 }), G$1.functions.filter = function(e$12, t2) {
    return G$1.standardFunctionAsync(e$12, t2, async (a2, r, s) => {
      if (V$1(s, 2, 2, e$12, t2), Y$1(s[0]) || E(s[0])) {
        const a3 = [];
        let r2 = s[0];
        r2 instanceof t$2 && (r2 = r2.toArray());
        let o = null;
        if (!F(s[1]))
          throw new t$1(e$12, e.InvalidParameter, t2);
        o = s[1].createFunction(e$12);
        for (const e2 of r2) {
          const t3 = o(e2);
          C(t3) ? await t3 === true && a3.push(e2) : t3 === true && a3.push(e2);
        }
        return a3;
      }
      if (P(s[0])) {
        const t3 = await s[0].load(), n2 = f.create(s[1], t3.getFieldsIndex()), i = n2.getVariables();
        if (i.length > 0) {
          const t4 = [];
          for (let n3 = 0; n3 < i.length; n3++) {
            const a4 = { name: i[n3] };
            t4.push(await G$1.evaluateIdentifier(e$12, a4));
          }
          const a3 = {};
          for (let e2 = 0; e2 < i.length; e2++)
            a3[i[e2]] = t4[e2];
          return n2.parameters = a3, new c({ parentfeatureset: s[0], whereclause: n2 });
        }
        return new c({ parentfeatureset: s[0], whereclause: n2 });
      }
      throw new t$1(e$12, e.InvalidParameter, t2);
    });
  }, G$1.signatures.push({ name: "filter", min: 2, max: 2 }), G$1.functions.orderby = function(e$12, t2) {
    return G$1.standardFunctionAsync(e$12, t2, async (a$12, r, s) => {
      if (V$1(s, 2, 2, e$12, t2), P(s[0])) {
        const e2 = new e$2(s[1]);
        return new a({ parentfeatureset: s[0], orderbyclause: e2 });
      }
      throw new t$1(e$12, e.InvalidParameter, t2);
    });
  }, G$1.signatures.push({ name: "orderby", min: 2, max: 2 }), G$1.functions.top = function(e$12, t2) {
    return G$1.standardFunctionAsync(e$12, t2, async (a2, r, s) => {
      if (V$1(s, 2, 2, e$12, t2), P(s[0]))
        return new a$1({ parentfeatureset: s[0], topnum: s[1] });
      if (Y$1(s[0]))
        return re(s[1]) >= s[0].length ? s[0].slice(0) : s[0].slice(0, re(s[1]));
      if (E(s[0]))
        return re(s[1]) >= s[0].length() ? s[0].slice(0) : s[0].slice(0, re(s[1]));
      throw new t$1(e$12, e.InvalidParameter, t2);
    });
  }, G$1.signatures.push({ name: "top", min: 2, max: 2 }), G$1.functions.first = function(e2, t2) {
    return G$1.standardFunctionAsync(e2, t2, async (n2, i, r) => {
      if (V$1(r, 1, 1, e2, t2), P(r[0])) {
        const e3 = await r[0].first(n2.abortSignal);
        if (e3 !== null) {
          const t3 = g.createFromGraphicLikeObject(e3.geometry, e3.attributes, r[0]);
          return t3._underlyingGraphic = e3, t3;
        }
        return e3;
      }
      return Y$1(r[0]) ? r[0].length === 0 ? null : r[0][0] : E(r[0]) ? r[0].length() === 0 ? null : r[0].get(0) : null;
    });
  }, G$1.signatures.push({ name: "first", min: 1, max: 1 }), G$1.functions.attachments = function(e$12, a2) {
    return G$1.standardFunctionAsync(e$12, a2, async (r, s, o) => {
      V$1(o, 1, 2, e$12, a2);
      const l2 = { minsize: -1, maxsize: -1, types: null, returnMetadata: false };
      if (o.length > 1) {
        if (o[1] instanceof J$1) {
          if (o[1].hasField("minsize") && (l2.minsize = re(o[1].field("minsize"))), o[1].hasField("metadata") && (l2.returnMetadata = le(o[1].field("metadata"))), o[1].hasField("maxsize") && (l2.maxsize = re(o[1].field("maxsize"))), o[1].hasField("types")) {
            const e2 = xe(o[1].field("types"), false);
            e2.length > 0 && (l2.types = e2);
          }
        } else if (o[1] !== null)
          throw new t$1(e$12, e.InvalidParameter, a2);
      }
      if (J$2(o[0])) {
        let t2 = o[0]._layer;
        return t2 instanceof Ze && (t2 = F$1(t2, e$12.spatialReference, ["*"], true, e$12.lrucache, e$12.interceptor)), t2 === null ? [] : P(t2) === false ? [] : (await t2.load(), t2.queryAttachments(o[0].field(t2.objectIdField), l2.minsize, l2.maxsize, l2.types, l2.returnMetadata));
      }
      if (o[0] === null)
        return [];
      throw new t$1(e$12, e.InvalidParameter, a2);
    });
  }, G$1.signatures.push({ name: "attachments", min: 1, max: 2 }), G$1.functions.featuresetbyrelationshipname = function(e$12, t2) {
    return G$1.standardFunctionAsync(e$12, t2, async (a2, r, s) => {
      V$1(s, 2, 4, e$12, t2);
      const o = s[0], l2 = K$1(s[1]);
      let f$1 = v(s[2], null);
      const m = le(v(s[3], true));
      if (f$1 === null && (f$1 = ["*"]), Y$1(f$1) === false)
        throw new t$1(e$12, e.InvalidParameter, t2);
      if (s[0] === null)
        return null;
      if (!J$2(s[0]))
        throw new t$1(e$12, e.InvalidParameter, t2);
      let p = o._layer;
      if (p instanceof Ze && (p = F$1(p, e$12.spatialReference, ["*"], true, e$12.lrucache, e$12.interceptor)), p === null)
        return null;
      if (P(p) === false)
        return null;
      p = await p.load();
      const D2 = p.relationshipMetaData().filter((e2) => e2.name === l2);
      if (D2.length === 0)
        return null;
      if (D2[0].relationshipTableId !== void 0 && D2[0].relationshipTableId !== null && D2[0].relationshipTableId > -1)
        return k(p, D2[0], o.field(p.objectIdField), p.spatialReference, f$1, m, e$12.lrucache, e$12.interceptor);
      let b = p.serviceUrl();
      if (!b)
        return null;
      b = b.charAt(b.length - 1) === "/" ? b + D2[0].relatedTableId.toString() : b + "/" + D2[0].relatedTableId.toString();
      const A2 = await N(b, p.spatialReference, f$1, m, e$12.lrucache, e$12.interceptor);
      await A2.load();
      let N$1 = A2.relationshipMetaData();
      if (N$1 = N$1.filter((e2) => e2.id === D2[0].id), o.hasField(D2[0].keyField) === false || o.field(D2[0].keyField) === null) {
        const e2 = await p.getFeatureByObjectId(o.field(p.objectIdField), [D2[0].keyField]);
        if (e2) {
          const t3 = f.create(N$1[0].keyField + "= @id", A2.getFieldsIndex());
          return t3.parameters = { id: e2.attributes[D2[0].keyField] }, A2.filter(t3);
        }
        return new u({ parentfeatureset: A2 });
      }
      const x2 = f.create(N$1[0].keyField + "= @id", A2.getFieldsIndex());
      return x2.parameters = { id: o.field(D2[0].keyField) }, A2.filter(x2);
    });
  }, G$1.signatures.push({ name: "featuresetbyrelationshipname", min: 2, max: 4 }), G$1.functions.featuresetbyassociation = function(e$12, t2) {
    return G$1.standardFunctionAsync(e$12, t2, async (a2, r, s) => {
      V$1(s, 2, 3, e$12, t2);
      const o = s[0], l2 = K$1(v(s[1], "")).toLowerCase(), f$1 = w(s[2]) ? K$1(s[2]) : null;
      if (s[0] === null)
        return null;
      if (!J$2(s[0]))
        throw new t$1(e$12, e.InvalidParameter, t2);
      let u2 = o._layer;
      if (u2 instanceof Ze && (u2 = F$1(u2, e$12.spatialReference, ["*"], true, e$12.lrucache, e$12.interceptor)), u2 === null)
        return null;
      if (P(u2) === false)
        return null;
      await u2.load();
      const d2 = u2.serviceUrl(), p = await C$1(d2, e$12.spatialReference);
      let I = null, F2 = null, b = false;
      if (f$1 !== null && f$1 !== "" && f$1 !== void 0) {
        for (const e2 of p.terminals)
          e2.terminalName === f$1 && (F2 = e2.terminalId);
        F2 === null && (b = true);
      }
      const A$1 = p.associations.getFieldsIndex(), N2 = A$1.get("TOGLOBALID").name, x$1 = A$1.get("FROMGLOBALID").name, P$1 = A$1.get("TOTERMINALID").name, R$1 = A$1.get("FROMTERMINALID").name, O = A$1.get("FROMNETWORKSOURCEID").name, C2 = A$1.get("TONETWORKSOURCEID").name, M = A$1.get("ASSOCIATIONTYPE").name, k2 = A$1.get("ISCONTENTVISIBLE").name, z = A$1.get("OBJECTID").name;
      for (const e2 of u2.fields)
        if (e2.type === "global-id") {
          I = o.field(e2.name);
          break;
        }
      let G2 = null, U = new x(new y({ name: "percentalong", alias: "percentalong", type: "double" }), f.create("0", p.associations.getFieldsIndex())), J2 = new x(new y({ name: "side", alias: "side", type: "string" }), f.create("''", p.associations.getFieldsIndex()));
      const V2 = "globalid", q2 = "globalId", K2 = {};
      for (const e2 in p.lkp)
        K2[e2] = p.lkp[e2].sourceId;
      const X2 = new E$1(new y({ name: "classname", alias: "classname", type: "string" }), null, K2);
      let Y2 = "";
      switch (l2) {
        case "midspan": {
          Y2 = `((${N2}='${I}') OR ( ${x$1}='${I}')) AND (${M} IN (5))`, X2.codefield = f.create(`CASE WHEN (${N2}='${I}') THEN ${O} ELSE ${C2} END`, p.associations.getFieldsIndex());
          const e2 = n(A.findField(p.associations.fields, x$1));
          e2.name = V2, e2.alias = V2, G2 = new x(e2, f.create(`CASE WHEN (${x$1}='${I}') THEN ${N2} ELSE ${x$1} END`, p.associations.getFieldsIndex())), U = p.unVersion >= 4 ? new F$2(A.findField(p.associations.fields, A$1.get("PERCENTALONG").name)) : new x(new y({ name: "percentalong", alias: "percentalong", type: "double" }), f.create("0", p.associations.getFieldsIndex()));
          break;
        }
        case "junctionedge": {
          Y2 = `((${N2}='${I}') OR ( ${x$1}='${I}')) AND (${M} IN (4,6))`, X2.codefield = f.create(`CASE WHEN (${N2}='${I}') THEN ${O} ELSE ${C2} END`, p.associations.getFieldsIndex());
          const e2 = n(A.findField(p.associations.fields, x$1));
          e2.name = V2, e2.alias = V2, G2 = new x(e2, f.create(`CASE WHEN (${x$1}='${I}') THEN ${N2} ELSE ${x$1} END`, p.associations.getFieldsIndex())), J2 = new x(new y({ name: "side", alias: "side", type: "string" }), f.create(`CASE WHEN (${M}=4) THEN 'from' ELSE 'to' END`, p.associations.getFieldsIndex()));
          break;
        }
        case "connected": {
          let e2 = `${N2}='@T'`, t3 = `${x$1}='@T'`;
          F2 !== null && (e2 += ` AND ${P$1}=@A`, t3 += ` AND ${R$1}=@A`), Y2 = "((" + e2 + ") OR (" + t3 + "))", Y2 = R(Y2, "@T", I != null ? I : ""), e2 = R(e2, "@T", I != null ? I : ""), F2 !== null && (e2 = R(e2, "@A", F2.toString()), Y2 = R(Y2, "@A", F2.toString())), X2.codefield = f.create("CASE WHEN " + e2 + ` THEN ${O} ELSE ${C2} END`, p.associations.getFieldsIndex());
          const n$1 = n(A.findField(p.associations.fields, x$1));
          n$1.name = V2, n$1.alias = V2, G2 = new x(n$1, f.create("CASE WHEN " + e2 + ` THEN ${x$1} ELSE ${N2} END`, p.associations.getFieldsIndex()));
          break;
        }
        case "container":
          Y2 = `${N2}='${I}' AND ${M} = 2`, F2 !== null && (Y2 += ` AND ${P$1} = ` + F2.toString()), X2.codefield = O, Y2 = "( " + Y2 + " )", G2 = new W(A.findField(p.associations.fields, x$1), V2, V2);
        case "content":
          Y2 = `(${x$1}='${I}' AND ${M} = 2)`, F2 !== null && (Y2 += ` AND ${R$1} = ` + F2.toString()), X2.codefield = C2, Y2 = "( " + Y2 + " )", G2 = new W(A.findField(p.associations.fields, N2), V2, V2);
          break;
        case "structure":
          Y2 = `(${N2}='${I}' AND ${M} = 3)`, F2 !== null && (Y2 += ` AND ${P$1} = ` + F2.toString()), X2.codefield = O, Y2 = "( " + Y2 + " )", G2 = new W(A.findField(p.associations.fields, x$1), V2, q2);
          break;
        case "attached":
          Y2 = `(${x$1}='${I}' AND ${M} = 3)`, F2 !== null && (Y2 += ` AND ${R$1} = ` + F2.toString()), X2.codefield = C2, Y2 = "( " + Y2 + " )", G2 = new W(A.findField(p.associations.fields, N2), V2, q2);
          break;
        default:
          throw new t$1(e$12, e.InvalidParameter, t2);
      }
      b && (Y2 = "1 <> 1");
      return new A({ parentfeatureset: p.associations, adaptedFields: [new F$2(A.findField(p.associations.fields, z)), new F$2(A.findField(p.associations.fields, k2)), G2, J2, X2, U], extraFilter: Y2 ? f.create(Y2, p.associations.getFieldsIndex()) : null });
    });
  }, G$1.signatures.push({ name: "featuresetbyassociation", min: 2, max: 6 }), G$1.functions.groupby = function(e$12, a2) {
    return G$1.standardFunctionAsync(e$12, a2, async (r, s, o) => {
      if (V$1(o, 3, 3, e$12, a2), !P(o[0]))
        throw new t$1(e$12, e.InvalidParameter, a2);
      const l2 = await o[0].load(), f$1 = [], c2 = [];
      let u2 = false, d2 = [];
      if (w(o[1]))
        d2.push(o[1]);
      else if (o[1] instanceof J$1)
        d2.push(o[1]);
      else if (Y$1(o[1]))
        d2 = o[1];
      else {
        if (!E(o[1]))
          throw new t$1(e$12, e.InvalidParameter, a2);
        d2 = o[1].toArray();
      }
      for (const m of d2)
        if (w(m)) {
          const e2 = f.create(K$1(m), l2.getFieldsIndex()), t2 = w$1(e2) === true ? K$1(m) : "%%%%FIELDNAME";
          f$1.push({ name: t2, expression: e2 }), t2 === "%%%%FIELDNAME" && (u2 = true);
        } else {
          if (!(m instanceof J$1))
            throw new t$1(e$12, e.InvalidParameter, a2);
          {
            const t2 = m.hasField("name") ? m.field("name") : "%%%%FIELDNAME", r2 = m.hasField("expression") ? m.field("expression") : "";
            if (t2 === "%%%%FIELDNAME" && (u2 = true), !t2)
              throw new t$1(e$12, e.InvalidParameter, a2);
            f$1.push({ name: t2, expression: f.create(r2 || t2, l2.getFieldsIndex()) });
          }
        }
      if (d2 = [], w(o[2]))
        d2.push(o[2]);
      else if (Y$1(o[2]))
        d2 = o[2];
      else if (E(o[2]))
        d2 = o[2].toArray();
      else {
        if (!(o[2] instanceof J$1))
          throw new t$1(e$12, e.InvalidParameter, a2);
        d2.push(o[2]);
      }
      for (const m of d2) {
        if (!(m instanceof J$1))
          throw new t$1(e$12, e.InvalidParameter, a2);
        {
          const t2 = m.hasField("name") ? m.field("name") : "", r2 = m.hasField("statistic") ? m.field("statistic") : "", s2 = m.hasField("expression") ? m.field("expression") : "";
          if (!t2 || !r2 || !s2)
            throw new t$1(e$12, e.InvalidParameter, a2);
          c2.push({ name: t2, statistic: r2.toLowerCase(), expression: f.create(s2, l2.getFieldsIndex()) });
        }
      }
      if (u2) {
        const e2 = {};
        for (const n2 of l2.fields)
          e2[n2.name.toLowerCase()] = 1;
        for (const n2 of f$1)
          n2.name !== "%%%%FIELDNAME" && (e2[n2.name.toLowerCase()] = 1);
        for (const n2 of c2)
          n2.name !== "%%%%FIELDNAME" && (e2[n2.name.toLowerCase()] = 1);
        let t2 = 0;
        for (const n2 of f$1)
          if (n2.name === "%%%%FIELDNAME") {
            for (; e2["field_" + t2.toString()] === 1; )
              t2++;
            e2["field_" + t2.toString()] = 1, n2.name = "FIELD_" + t2.toString();
          }
      }
      for (const t2 of f$1)
        await V(t2.expression, G$1, e$12);
      for (const t2 of c2)
        await V(t2.expression, G$1, e$12);
      return o[0].groupby(f$1, c2);
    });
  }, G$1.signatures.push({ name: "groupby", min: 3, max: 3 }), G$1.functions.distinct = function(e$12, a2) {
    return G$1.standardFunctionAsync(e$12, a2, async (r, s, o) => {
      if (P(o[0])) {
        V$1(o, 2, 2, e$12, a2);
        const r2 = await o[0].load(), s2 = [];
        let l2 = [];
        if (w(o[1]))
          l2.push(o[1]);
        else if (o[1] instanceof J$1)
          l2.push(o[1]);
        else if (Y$1(o[1]))
          l2 = o[1];
        else {
          if (!E(o[1]))
            throw new t$1(e$12, e.InvalidParameter, a2);
          l2 = o[1].toArray();
        }
        let f$1 = false;
        for (const o2 of l2)
          if (w(o2)) {
            const e2 = f.create(K$1(o2), r2.getFieldsIndex()), t2 = w$1(e2) === true ? K$1(o2) : "%%%%FIELDNAME";
            s2.push({ name: t2, expression: e2 }), t2 === "%%%%FIELDNAME" && (f$1 = true);
          } else {
            if (!(o2 instanceof J$1))
              throw new t$1(e$12, e.InvalidParameter, a2);
            {
              const t2 = o2.hasField("name") ? o2.field("name") : "%%%%FIELDNAME", l3 = o2.hasField("expression") ? o2.field("expression") : "";
              if (t2 === "%%%%FIELDNAME" && (f$1 = true), !t2)
                throw new t$1(e$12, e.InvalidParameter, a2);
              s2.push({ name: t2, expression: f.create(l3 || t2, r2.getFieldsIndex()) });
            }
          }
        if (f$1) {
          const e2 = {};
          for (const n2 of r2.fields)
            e2[n2.name.toLowerCase()] = 1;
          for (const n2 of s2)
            n2.name !== "%%%%FIELDNAME" && (e2[n2.name.toLowerCase()] = 1);
          let t2 = 0;
          for (const n2 of s2)
            if (n2.name === "%%%%FIELDNAME") {
              for (; e2["field_" + t2.toString()] === 1; )
                t2++;
              e2["field_" + t2.toString()] = 1, n2.name = "FIELD_" + t2.toString();
            }
        }
        for (const t2 of s2)
          await V(t2.expression, G$1, e$12);
        return o[0].groupby(s2, []);
      }
      return J("distinct", r, s, o);
    });
  });
}
export { ee as registerFunctions };
