var F=Object.defineProperty,J=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var b=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&b(e,r,t[r]);if(w)for(var r of w(t))A.call(t,r)&&b(e,r,t[r]);return e},d=(e,t)=>J(e,B(t));import{i as D}from"./multiOriginJSONSupportUtils.38b69b9c.js";import{jY as I,jZ as G,j_ as T,j$ as N,k0 as V,k1 as Y,k2 as Z,k3 as _,jv as k,k4 as q,k5 as C,k6 as E,eD as H,k7 as L}from"./vendor.faf54504.js";function y(e){return v[M(e)]||W}function M(e){return e instanceof Blob?e.type:Q(e.url)}function Q(e){const t=I(e);return h[t]||P}const v={},P="text/plain",W=v[P],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in h)v[h[e]]=e;function ce(e){var r;const t=(r=e==null?void 0:e.origins)!=null?r:[void 0];return(s,n)=>{const i=X(e,s,n);for(const a of t){const o=G(s,a,n);for(const c in i)o[c]=i[c]}}}function X(e,t,r){var s;if((e==null?void 0:e.type)==="resource")return ee(e,t,r);switch((s=e==null?void 0:e.type)!=null?s:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:i}=L;return{read:n,write:i}}}}function ee(e,t,r){const s=q(t,r);return{type:String,read:(n,i,a)=>{const o=T(n,i,a);return s.type===String?o:typeof s.type=="function"?new s.type({url:o}):void 0},write:{writer(n,i,a,o){if(!o||!o.resources)return typeof n=="string"?void(i[a]=N(n,o)):void(i[a]=n.write({},o));const c=ne(n),p=N(c,d(g({},o),{verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),V.NO),l=s.type!==String&&(!D(this)||o&&o.origin&&this.originIdOf(r)>Y(o.origin)),u={object:this,propertyName:r,value:n,targetUrl:p,dest:i,targetPropertyName:a,context:o,params:e};o&&o.portalItem&&p&&!Z(p)?l?te(u):re(u):o&&o.portalItem&&(p==null||_(p)!=null||k(p)||l)?O(u):i[a]=p}}}}function O(e){var j,x,U;const{targetUrl:t,params:r,value:s,context:n,dest:i,targetPropertyName:a}=e;if(!n.portalItem)return;const o=C(t),c=(j=o==null?void 0:o.filename)!=null?j:E(),p=(x=r==null?void 0:r.prefix)!=null?x:o==null?void 0:o.prefix,l=R(s,t,n),u=H(p,c),m=`${u}.${y(l)}`,f=n.portalItem.resourceFromPath(m);k(t)&&n.resources&&n.resources.pendingOperations.push(oe(t).then(z=>{f.path=`${u}.${y(z)}`,i[a]=f.itemRelativeUrl}).catch(()=>{}));const $=(U=r==null?void 0:r.compress)!=null?U:!1;n.resources&&S(d(g({},e),{resource:f,content:l,compress:$,updates:n.resources.toAdd})),i[a]=f.itemRelativeUrl}function te(e){var m;const{context:t,targetUrl:r,params:s,value:n,dest:i,targetPropertyName:a}=e;if(!t.portalItem)return;const o=t.portalItem.resourceFromPath(r),c=R(n,r,t),p=y(c),l=I(o.path),u=(m=s==null?void 0:s.compress)!=null?m:!1;p===l?(t.resources&&S(d(g({},e),{resource:o,content:c,compress:u,updates:t.resources.toUpdate})),i[a]=r):O(e)}function re({context:e,targetUrl:t,dest:r,targetPropertyName:s}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[s]=t)}function S({object:e,propertyName:t,updates:r,resource:s,content:n,compress:i}){r.push({resource:s,content:n,compress:i,finish:a=>{se(e,t,a)}})}function R(e,t,r){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}async function oe(e){const t=(await import("./vendor.faf54504.js").then(function(s){return s.s8})).default,{data:r}=await t(e,{responseType:"blob"});return r}function ne(e){return e==null?null:typeof e=="string"?e:e.url}function se(e,t,r){typeof e[t]=="string"?e[t]=r.url:e[t].url=r.url}export{ce as g};
