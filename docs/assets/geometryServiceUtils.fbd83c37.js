import{aa as s,Y as l,d7 as c,ly as g,lz as u}from"./vendor.1bde3be2.js";async function y(e=null,o){var a,r;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||c.getDefault():e,await t.load({signal:o});const n=(r=(a=t.helperServices)==null?void 0:a.geometry)==null?void 0:r.url;if(!n)throw new l("internal:geometry-service-url-not-configured");return n}async function m(e,o,t=null,n){const a=await y(t,n),r=new g;r.geometries=[e],r.outSpatialReference=o;const i=await u(a,r,{signal:n});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new l("internal:geometry-service-projection-failed")}export{y as getGeometryServiceURL,m as projectGeometry};
