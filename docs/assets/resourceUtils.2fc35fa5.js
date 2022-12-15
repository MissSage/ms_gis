import{ex as n,kF as l,Y as d,O as m,U as v,jS as R,a1 as b}from"./vendor.1bde3be2.js";async function x(e,t={},r){await e.load(r);const a=n(e.itemUrl,"resources"),{start:o=1,num:c=10,sortOrder:i="asc",sortField:u="created"}=t,p={query:{start:o,num:c,sortOrder:i,sortField:u,token:e.apiKey},signal:l(r,"signal")},s=await e.portal._request(a,p);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:w,size:g,resource:y})=>({created:new Date(w),size:g,resource:e.resourceFromPath(y)}))}}async function F(e,t,r,a){if(!e.hasPath())throw new d(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(a);const c=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[i,u]=h(e.path),p=await P(r),s=new FormData;return i&&i!=="."&&s.append("resourcesPrefix",i),m(a)&&a.compress&&s.append("compress","true"),s.append("fileName",u),s.append("file",p,u),s.append("f","json"),m(a)&&a.access&&s.append("access",a.access),await o.portal._request(c,{method:"post",body:s,signal:l(a,"signal")}),e}async function O(e,t,r){if(!t.hasPath())throw new d("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=n(e.userItemUrl,"removeResources");await e.portal._request(a,{method:"post",query:{resource:t.path},signal:l(r,"signal")}),t.portalItem=null}async function S(e,t){await e.load(t);const r=n(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:l(t,"signal")})}function h(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function f(e){const[t,r]=I(e),[a,o]=h(t);return[a,o,r]}function I(e){const t=R(e);return v(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function P(e){return e instanceof Blob?e:(await b(e.url,{responseType:"blob"})).data}function U(e,t){if(!e.hasPath())return null;const[r,,a]=f(e.path);return e.portalItem.resourceFromPath(n(r,t+a))}function T(e,t){if(!e.hasPath())return null;const[r,,a]=f(e.path);return e.portalItem.resourceFromPath(n(r,t+a))}export{F as addOrUpdateResource,P as contentToBlob,x as fetchResources,U as getSiblingOfSameType,T as getSiblingOfSameTypeI,S as removeAllResources,O as removeResource,f as splitPrefixFileNameAndExtension};
