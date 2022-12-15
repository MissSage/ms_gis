import{o6 as N,o7 as E,b6 as R,dA as I,b5 as b,br as f,o8 as T,o1 as m,o9 as w,Y as d,eZ as G,b3 as $,bs as q}from"./vendor.1bde3be2.js";function C(e){return e==="mesh"?N:E(e)}function v(e,t){return e?t?4:3:t?3:2}function M(e,t,i,r){return P(e,t,i,r.coords[0],r.coords[1])}function j(e,t,i,r,s,n){const l=v(s,n),{coords:a,lengths:u}=r;if(!u)return!1;for(let o=0,c=0;o<u.length;o++,c+=l)if(!P(e,t,i,a[c],a[c+1]))return!1;return!0}function P(e,t,i,r,s){if(!e)return!1;const n=v(t,i),{coords:l,lengths:a}=e;let u=!1,o=0;for(const c of a)u=F(u,l,n,o,c,r,s),o+=c*n;return u}function F(e,t,i,r,s,n,l){let a=e,u=r;for(let o=r,c=r+s*i;o<c;o+=i){u=o+i,u===c&&(u=r);const h=t[o],p=t[o+1],A=t[u],y=t[u+1];(p<l&&y>=l||y<l&&p>=l)&&h+(l-p)/(y-p)*(A-h)<n&&(a=!a)}return a}const S="feature-store:unsupported-query",x={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function O(e){return e!=null&&g.spatialRelationship[e]===!0}function U(e){return e!=null&&g.queryGeometry[$(e)]===!0}function Y(e){return e!=null&&g.layerGeometry[e]===!0}function D(){return import("./geometryEngineJSON.d6a1f595.js")}function _(e,t,i,r,s){if(R(t)&&i==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const n=I(new b,t,!1,!1);return Promise.resolve(l=>M(n,!1,!1,l))}if(R(t)&&i==="esriGeometryMultipoint"){const n=I(new b,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>j(n,!1,!1,l,r,s))}if(f(t)&&i==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(n=>T(t,m(i,r,s,n)));if(f(t)&&i==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(n=>w(t,m(i,r,s,n)));if(f(t)&&e==="esriSpatialRelIntersects"){const n=C(i);return Promise.resolve(l=>n(t,m(i,r,s,l)))}return D().then(n=>{const l=n[x[e]].bind(null,t.spatialReference,t);return a=>l(m(i,r,s,a))})}async function k(e,t,i){const{spatialRel:r,geometry:s}=e;if(s){if(!O(r))throw new d(S,"Unsupported query spatial relationship",{query:e});if(G(s.spatialReference)&&G(i)){if(!U(s))throw new d(S,"Unsupported query geometry type",{query:e});if(!Y(t))throw new d(S,"Unsupported layer geometry type",{query:e});if(e.outSR)return q(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function z(e){if(f(e))return!0;if(R(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}function B(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:r,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&s)t.forEach(a=>{const u=i.getAttribute(a,r),o=i.getAttribute(a,s);u==null||isNaN(u)||(n=Math.min(n,u)),o==null||isNaN(o)||(l=Math.max(l,o))});else{const a=r||s;t.forEach(u=>{const o=i.getAttribute(u,a);o==null||isNaN(o)||(n=Math.min(n,o),l=Math.max(l,o))})}return{start:n,end:l}}function H(e,t,i){if(!t||!e)return null;const{startTimeField:r,endTimeField:s}=e;if(!r&&!s)return null;const{start:n,end:l}=t;return n===null&&l===null?null:n===void 0&&l===void 0?W():r&&s?J(i,r,s,n,l):V(i,r||s,n,l)}function J(e,t,i,r,s){return r!=null&&s!=null?n=>{const l=e.getAttribute(n,t),a=e.getAttribute(n,i);return(l==null||l<=s)&&(a==null||a>=r)}:r!=null?n=>{const l=e.getAttribute(n,i);return l==null||l>=r}:s!=null?n=>{const l=e.getAttribute(n,t);return l==null||l<=s}:void 0}function V(e,t,i,r){return i!=null&&r!=null&&i===r?s=>e.getAttribute(s,t)===i:i!=null&&r!=null?s=>{const n=e.getAttribute(s,t);return n>=i&&n<=r}:i!=null?s=>e.getAttribute(s,t)>=i:r!=null?s=>e.getAttribute(s,t)<=r:void 0}function W(){return()=>!1}export{z as I,k as P,H as n,B as t,_ as v};
