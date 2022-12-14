import{S as T,ex as f,dd as K,a3 as n,eJ as F,eK as R,eL as U,eM as D,$ as M,eN as _,eO as q,eP as z,W as $}from"./vendor.faf54504.js";import{i as m}from"./originUtils.2d0aad75.js";import{r as C}from"./fetchService.28a62161.js";import{o as w}from"./jsonContext.8b3f36b0.js";import{i as v,a as Y,c as g,f as d}from"./portalItemUtils.ae315894.js";import"./multiOriginJSONSupportUtils.38b69b9c.js";const B=T.getLogger("esri.layers.FeatureLayer"),y="Feature Service";function c(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function O(a,e){if(e.type!==y)throw new n("feature-layer:portal-item-wrong-type",c(a,`should have portal item of type "${y}"`))}async function J(a){if(await a.load(),F(a))throw new n("feature-layer:save",c(a,"using an in-memory source cannot be saved to a portal item"))}function G(a,e){var r;let t=((r=a.messages)!=null?r:[]).filter(({type:s})=>s==="error").map(({name:s,message:o,details:l})=>new n(s,o,l));if((e==null?void 0:e.ignoreUnsupported)&&(t=t.filter(({name:s})=>s!=="layer:unsupported"&&s!=="symbol:unsupported"&&s!=="symbol-layer:unsupported"&&s!=="property:unsupported"&&s!=="url:unsupported")),t.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function b(a,e,t){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const r=a.write({},e);return G(e,t),r}function N(a){const{layer:e,layerJSON:t}=a;return e.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function h(a){v(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}function W(a){const e=a.portalItem;if(!e)throw B.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",c(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));O(a,e)}async function x(a,e){var t;return/\/\d+\/?$/.test((t=a.url)!=null?t:"")?N(e[0]):Z(a,e)}async function Z(a,e){const{layer:{url:t,customParameters:r,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await k(o,{url:t!=null?t:"",customParameters:r,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)P(l.layer,l.layerJSON,o);return o}async function k(a,e,t){var r,s;a||(a={}),(r=a).layers||(r.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await C(o,{customParameters:l,apiKey:i}),S=A(a.layers,u.layers,t),I=A(a.tables,u.tables,t);a.layers=S.itemResources,a.tables=I.itemResources;const E=[...S.added,...I.added],L=p?[...p.layers,...p.tables]:[];return await H(a,E,o,L),a}function A(a,e,t){const r=R(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!r.removed.some(l=>l.id===o.id));const s=r.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!t.includes(o))}}async function H(a,e,t,r){const s=e.map(({id:o})=>new U({url:t,layerId:o,sourceJSON:r.find(({id:l})=>l===o)}));await D(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||M(u)||P(o,{id:l,popupInfo:u.toJSON()},a)})}function P(a,e,t){a.isTable?j(t.tables,e):j(t.layers,e)}function j(a,e){if(!a)return;const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function Q(a){const{portalItem:e}=a;return _(a)&&!a.dynamicDataSource&&!!(e==null?void 0:e.loaded)&&e.type===y}async function V(a){if(!(a==null?void 0:a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(r=>r.load()));for(const r of a)if(!Q(r))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${c(r,"does not conform")}`,{layer:r});const e=a.map(r=>r.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function X(a,e){var o,l;var t,r;let s=q.from(e);return s.id&&(s=s.clone(),s.id=null),(o=(t=s).type)!=null||(t.type=y),(l=(r=s).portal)!=null||(r.portal=K.getDefault()),O(a,s),s}async function aa(a,e){const{url:t,layerId:r,title:s,fullExtent:o,isTable:l}=a,i=z(t),u=$(i)&&i.serverType==="FeatureServer";e.url=u?t:`${t}/${r}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await Y(o)),g(e,d.METADATA),g(e,d.MULTI_LAYER),v(e,d.SINGLE_LAYER),l&&v(e,d.TABLE),h(e)}async function ea(a,e,t){var s;const r=a.portal;await(r==null?void 0:r._signIn()),await((s=r==null?void 0:r.user)==null?void 0:s.addItem({item:a,data:e,folder:t==null?void 0:t.folder}))}const da=f(ta);async function ta(a,e){await J(a),W(a);const t=a.portalItem,r=w(t),s=await b(a,r,e),o=await x(t,[{layer:a,layerJSON:s}]);return h(t),await t.update({data:o}),m(r),t}const ca=f(async(a,e)=>{await V(a);const t=a[0].portalItem,r=w(t),s=await Promise.all(a.map(l=>b(l,r,e))),o=await x(t,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return h(t),await t.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),m(r),t.clone()}),ya=f(ra);async function ra(a,e,t){await J(a);const r=X(a,e),s=w(r),o=N({layer:a,layerJSON:await b(a,s,t)});return await aa(a,r),await ea(r,o,t),a.portalItem=r,m(s),r}export{da as save,ca as saveAll,ya as saveAs};
