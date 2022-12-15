var V=Object.defineProperty,Y=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var P=(n,e,t)=>e in n?V(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,f=(n,e)=>{for(var t in e||(e={}))X.call(e,t)&&P(n,t,e[t]);if(D)for(var t of D(e))ee.call(e,t)&&P(n,t,e[t]);return n},y=(n,e)=>Y(n,H(e));import{K as te,U as w,Y as b,a1 as k,or as ne,dw as ie,bo as x,oR as ae,bR as se,O as S,dl as re,d0 as oe,lw as K,nS as le,oS as ce}from"./vendor.1bde3be2.js";import{T as de,L as ue,I as fe}from"./geojson.fd5f76e5.js";import{o as me}from"./clientSideDefaults.25c96b4a.js";const q=te.getLogger("esri.layers.graphics.sources.ogcfeature"),Z="http://www.opengis.net/def/crs/",ke=`${Z}OGC/1.3/CRS84`;async function xe(n,e,t={},i=5){const{links:r}=n,l=m(r,"items","application/geo+json")||m(r,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(w(l))throw new b("ogc-feature-layer:missing-items-page","Missing items url");const{data:c}=await k(l.href,{signal:t.signal,query:y(f({limit:i},t.customParameters),{token:t.apiKey}),headers:{accept:"application/geo+json"}});await de(c);const s=ue(c,{geometryType:e.geometryType}),u=e.fields||s.fields||[],v=e.hasZ!=null?e.hasZ:s.hasZ,j=s.geometryType,p=e.objectIdField||s.objectIdFieldName||"OBJECTID";let o=e.timeInfo;const h=u.find(({name:a})=>a===p);if(h)h.editable=!1,h.nullable=!1;else{if(!s.objectIdFieldType)throw new b("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:p,alias:p,type:s.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(p!==s.objectIdFieldName){const a=u.find(({name:d})=>d===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}u===s.fields&&s.unknownFields.length>0&&q.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of u){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new b("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!ne.jsonValues.includes(a.type))throw new b("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(o){const a=new ie(u);if(o.startTimeField){const d=a.get(o.startTimeField);d?(o.startTimeField=d.name,d.type="esriFieldTypeDate"):o.startTimeField=null}if(o.endTimeField){const d=a.get(o.endTimeField);d?(o.endTimeField=d.name,d.type="esriFieldTypeDate"):o.endTimeField=null}if(o.trackIdField){const d=a.get(o.trackIdField);d?o.trackIdField=d.name:(o.trackIdField=null,q.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:o}}))}o.startTimeField||o.endTimeField||(q.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:o}}),o=null)}return{drawingInfo:j?me(j):null,extent:he(n),geometryType:j,fields:u,hasZ:!!v,objectIdField:p,timeInfo:o}}async function Se(n,e={}){const{links:t}=n,i=m(t,"data","application/json")||m(t,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(w(i))throw new b("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:r,customParameters:l,signal:c}=e,{data:s}=await k(i.href,{signal:c,headers:{accept:"application/json"},query:y(f({},l),{token:r})});return s}async function ve(n,e={}){const{links:t}=n,i=m(t,"conformance","application/json")||m(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(w(i))throw new b("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:r,customParameters:l,signal:c}=e,{data:s}=await k(i.href,{signal:c,headers:{accept:"application/json"},query:y(f({},l),{token:r})});return s}async function $e(n,e={}){const{apiKey:t,customParameters:i,signal:r}=e,{data:l}=await k(n,{signal:r,headers:{accept:"application/json"},query:y(f({},i),{token:t})});return l}async function Ne(n,e={}){const t="application/vnd.oai.openapi+json;version=3.0",i=m(n.links,"service-desc",t);if(w(i))return q.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:l,signal:c}=e,{data:s}=await k(i.href,{signal:c,headers:{accept:t},query:y(f({},l),{token:r})});return s}function Oe(n){var r;const e=(r=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(n))==null?void 0:r.groups;if(!e)return null;const{authority:t,code:i}=e;switch(t.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return x.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return x.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(i,10);return Number.isNaN(l)?null:l}default:return null}}async function qe(n,e,t){const i=await pe(n,e,t);return ae(i)}async function pe(n,e,t){const{collection:i,layerDefinition:r,maxRecordCount:l,queryParameters:{apiKey:c,customParameters:s},spatialReference:u,supportedCrs:v}=n,{links:j}=i,p=m(j,"items","application/geo+json")||m(j,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(w(p))throw new b("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:o,num:h,start:a,timeExtent:d,where:J}=e;if(e.objectIds)throw new b("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const A=x.fromJSON(u),T=se(e.outSpatialReference,A),$=T.isWGS84?null:L(T,v),z=be(o,v),E=ye(d),U=we(J),_=h!=null?h:a!=null&&a!==void 0?10:l,{data:F}=await k(p.href,y(f({},t),{query:y(f(f({},s),z),{crs:$,datetime:E,query:U,limit:_,startindex:a,token:c}),headers:{accept:"application/geo+json"}}));let N=!1;F.links&&(N=!!F.links.find(O=>O.rel==="next")),!N&&Number.isInteger(F.numberMatched)&&Number.isInteger(F.numberReturned)&&(N=F.numberReturned<F.numberMatched);const{fields:B,geometryType:R,hasZ:C,objectIdField:M}=r,W=fe(F,{geometryType:R,hasZ:C,objectIdField:M});if(!$&&T.isWebMercator){for(const I of W)if(S(I.geometry)){const O=re(I.geometry,R,C,!1);O.spatialReference=x.WGS84,I.geometry=oe(K(O,T))}}for(const I of W)I.objectId=I.attributes[M];const Q=$||!$&&T.isWebMercator?T.toJSON():le,g=new ce;return g.exceededTransferLimit=N,g.features=W,g.fields=B,g.geometryType=R,g.hasZ=C,g.objectIdFieldName=M,g.spatialReference=Q,g}function ge(n){return S(n)&&n.type==="extent"}function L(n,e){var l,c,s;const{isWebMercator:t,wkid:i}=n;if(!i)return null;const r=t?(s=(c=(l=e[3857])!=null?l:e[102100])!=null?c:e[102113])!=null?s:e[900913]:e[n.wkid];return r?`${Z}${r}`:null}function G(n){if(w(n))return"";const{xmin:e,ymin:t,xmax:i,ymax:r}=n;return`${e},${t},${i},${r}`}function ye(n){if(w(n))return null;const{start:e,end:t}=n;return`${S(e)?e.toISOString():".."}/${S(t)?t.toISOString():".."}`}function we(n){return w(n)||!n||n==="1=1"?null:n}function be(n,e){if(!ge(n))return null;const{spatialReference:t}=n;if(!t||t.isWGS84)return{bbox:G(n)};const i=L(t,e);return S(i)?{bbox:G(n),"bbox-crs":i}:t.isWebMercator?{bbox:G(K(n,x.WGS84))}:null}function he(n){var s;const e=(s=n.extent)==null?void 0:s.spatial;if(!e)return null;const t=e.bbox[0],i=t.length===4,r=t[0],l=t[1],c=i?void 0:t[2];return{xmin:r,ymin:l,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:c,zmax:i?void 0:t[5],spatialReference:x.WGS84.toJSON()}}function m(n,e,t){return n.find(i=>i.rel===e&&i.type===t)||n.find(i=>i.rel===e&&!i.type)}export{ke as F,xe as I,qe as N,Ne as S,Se as T,Z as j,ve as k,pe as q,Oe as v,$e as x};
