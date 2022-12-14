var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var B=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&B(e,r,t[r]);if(E)for(var r of E(t))se.call(t,r)&&B(e,r,t[r]);return e},f=(e,t)=>ee(e,te(t));import{x as ie,J as b,jd as oe,rh as le,cX as U,dQ as ae,U as A,W as N,cN as k,X as ne,bt as I,jL as C,ek as j,dW as _,eg as q,Y as Q,qK as V,ri as ue,qH as F,dS as G,n9 as pe,rj as W,mw as P,pv as ce,pw as he,nd as ye,ne as de,nf as fe,q3 as me,pN as ge,ng as Se,l8 as Ae,bc as L,M as we,rk as xe,rl as ve,b8 as z,aN as _e,aq as c,ar as h,bb as Ue,ly as Ie,lz as be,as as Re}from"./vendor.f59460b9.js";import{s as Te}from"./ArcGISCachedService.eb67793e.js";import{n as $e,z as je}from"./TilemapCache.a9f843f9.js";import{e as Pe}from"./jsonContext.e69f70c3.js";import{l as Le}from"./StyleRepository.055ea8fc.js";import"./StyleDefinition.32daf7f5.js";import"./enums.54326430.js";import"./enums.2d9e6f64.js";import"./VertexElementDescriptor.1fdca6da.js";import"./GeometryUtils.4f19e772.js";import"./Geometry.d049a63c.js";import"./definitions.d3c1cadf.js";let R=null;function Oe(e){if(R)return R;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return R=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),R}const K=1.15;class J{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>K;const{width:r,height:s,data:i,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!i)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=s;const n=Math.max(this._maxTextureSize,4096);if(r>n||s>n){const a=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw ie.getLogger("esri.layers.support.SpriteSource").error(a),new b("SpriteSource",a)}let u;for(let a=0;a<i.length;a+=4)u=i[a+3]/255,i[a]=i[a]*u,i[a+1]=i[a+1]*u,i[a+2]=i[a+2]*u;this.image=i}async _getSpriteData(t,r){if(t.type==="image"){let d,m;if(this.devicePixelRatio<K){if(!t.spriteSource1x)throw new b("SpriteSource","no image data provided for low resolution sprites!");d=t.spriteSource1x.image,m=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new b("SpriteSource","no image data provided for high resolution sprites!");d=t.spriteSource2x.image,m=t.spriteSource2x.json}return"width"in d&&"height"in d&&"data"in d&&(oe(d.data)||le(d.data))?{width:d.width,height:d.height,data:new Uint8Array(d.data),json:m}:f(y({},X(d)),{json:m})}const s=U(this.baseURL),i=s.query?"?"+ae(s.query):"",o=this._isRetina?"@2x":"",l=`${s.path}${o}.${this._spriteImageFormat}${i}`,n=`${s.path}${o}.json${i}`,[u,a]=await Promise.all([A(n,r),A(l,y({responseType:"image"},r))]);return f(y({},X(a.data)),{json:u.data})}}function X(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(s.data)}}class De{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=A(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return N(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new k(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let o,l,n=t,u=s.pop();if(n===1)return u;for(;s.length;)if(o=s.pop(),l=(1&o.col)+((1&o.row)<<1),n){if(n[l]===0){u=null;break}if(n[l]===1){u=o;break}u=o,n=n[l]}return u}}class Me{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=A(this._tileIndexUrl,{query:y({},t==null?void 0:t.query)}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:o}=t,l=new k(t);return this._tilemap.fetchAvailabilityUpsample(s,i,o,l,r).then(()=>(l.world=t.world,l)).catch(n=>{if(ne(n))throw n;return null})}}const T=new Map;function Ee(e,t,r,s,i){return Be(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function Be(e,t){const r=T.get(e);if(r)return r.then(i=>I(i));const s=A(e,y({responseType:"array-buffer"},t)).then(({data:i})=>(T.delete(e),i)).catch(i=>{throw T.delete(e),i});return T.set(e,s),s}class Ne{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=U(this.sourceUrl),o=I(s),l=o.tiles;if(i)for(let S=0;S<l.length;S++){const g=U(l[S]);g&&(C(g.path)||(g.path=j(i.path,g.path)),l[S]=_(g.path,y(y({},i.query),g.query)))}this.tileServers=l;const n=s.capabilities&&s.capabilities.split(",").map(S=>S.toLowerCase().trim()),u=(s==null?void 0:s.exportTilesAllowed)===!0,a=(n==null?void 0:n.includes("tilemap"))===!0,d=u&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:u,supportsTileMap:a},exportTiles:u?{maxExportTilesCount:+d}:null},this.tileInfo=$e(o.tileInfo,o,null,{ignoreMinMaxLOD:!0});const m=s.tileMap?_(j(i.path,s.tileMap),i.query):null;a?(this.type="vector-tile",this.tilemap=new Me(new je({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),m)):m&&(this.tilemap=new De(m)),this.fullExtent=q.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){var s,i;return(i=(s=this.tilemap)==null?void 0:s.dataKey(t,r))!=null?i:t}requestTile(t,r,s,i){const o=this.tileServers[r%this.tileServers.length];return Ee(o,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let n=0;n<l;n++){const u=i[n],a=o[n];if(u.level!==a.level||Math.round(u.scale)!==Math.round(a.scale))return!1}return!0}}const O=Q.defaults&&Q.defaults.io.corsEnabledServers;async function ke(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await v(r,"esri",e,i,t);const o={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&x(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&x(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return w(o.spriteUrl),w(o.glyphsUrl),o}function w(e){if(!e)return;const t=ue(e);O&&!O.includes(t)&&O.push(t)}function x(...e){let t;for(let r=0;r<e.length;++r)F(e[r])?t&&(t=t.split("://")[0]+":"+e[r].trim()):t=C(e[r])?e[r]:j(t,e[r]);return V(t)}async function v(e,t,r,s,i){let o,l,n;if(N(i),typeof r=="string"){const a=G(r);w(a),n=await A(a,f(y({},i),{responseType:"json",query:y({f:"json"},i==null?void 0:i.query)})),n.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=a,l=a}else n={data:r},o=r.jsonUrl||null,l=s;const u=n.data;if(Y(u))return e.styleUrl=o||null,qe(e,u,l,i);if(Ce(u))return e.sourceUrl?H(e,u,l,!1,t,i):(e.sourceUrl=o||null,H(e,u,l,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function Y(e){return!!e.sources}function Ce(e){return!Y(e)}async function qe(e,t,r,s){const i=r?pe(r):W();e.styleBase=i,e.style=t,e.styleUrl&&w(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await v(e,"esri",x(i,l.url),void 0,s):o.push(v(e,"esri",l,i,s))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(v(e,l,x(i,t.sources[l].url),void 0,s)):t.sources[l].tiles&&o.push(v(e,l,t.sources[l],i,s)));await Promise.all(o)}async function H(e,t,r,s,i,o){const l=r?V(r)+"/":W(),n=Qe(t,l),u=new Ne(i,_(l,o==null?void 0:o.query),n);if(!s&&e.primarySourceName in e.sourceNameToSource){const a=e.sourceNameToSource[e.primarySourceName];if(!a.isCompatibleWith(u))return;u.fullExtent!=null&&(a.fullExtent!=null?a.fullExtent.union(u.fullExtent):a.fullExtent=u.fullExtent.clone()),a.tileInfo.lods.length<u.tileInfo.lods.length&&(a.tileInfo=u.tileInfo)}if(s?(e.sourceBase=l,e.source=t,e.validatedSource=n,e.primarySourceName=i,e.sourceUrl&&w(e.sourceUrl)):w(l),e.sourceNameToSource[i]=u,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?v(e,"",x(l,t.defaultStyles,"root.json"),void 0,o):v(e,"",t.defaultStyles,x(l,"root.json"),o)}}function Qe(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,o=2958287637957775e-7;const l=[],n=e.hasOwnProperty("minzoom")?+e.minzoom:0,u=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let a=0;a<=u;a++)a>=n&&l.push({level:a,scale:o,resolution:i}),i/=2,o/=2;for(const a of e.tiles)w(x(t,a));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}const $=1e-6;function Ve(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=$||Math.abs(r.y-s.y)>=$)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-$;l/=2)if(Math.abs(l-o.lods[0].scale)<$)return!0;return!1}function Fe(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],s=e.format,i=e.dpi,o={x:e.origin.x,y:e.origin.y},l=e.spatialReference.toJSON(),n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],u=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],a=n.scale,d=n.resolution,m=u.scale,S=[];let g=a,D=d,M=0;for(;g>m;)S.push({level:M,resolution:D,scale:g}),M++,g/=2,D/=2;return new P({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:S,spatialReference:l})}let p=class extends ce(he(Te(ye(de(fe(me(ge(Se(Ae))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?y({url:e},t):e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e==null||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(L).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await A(r,f(y({},e),{query:f(y({f:"json"},this.customParameters),{token:this.apiKey})}))).data&&this.read({url:r},Pe(this.portalItem))}).catch(L).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&U(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?_(r,f(y({},this.customParameters),{token:this.apiKey})):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?U(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&F(e)&&(e=`https:${e}`);const r=we(xe(e));t.styleUrl=ve(e,r)}get tileInfo(){var r;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new P;if(e.length>1)for(let s=0;s<e.length;s++)Ve(t,e[s].tileInfo)&&(t=Fe(t,e[s].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,s;if(!this._spriteSourceMap.has(e)){const i=z("2d").maxTextureSize,o=((r=this.currentStyleInfo)==null?void 0:r.spriteUrl)?_(this.currentStyleInfo.spriteUrl,f(y({},this.customParameters),{token:this.apiKey})):null,l=new J({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:(s=this.currentStyleInfo)==null?void 0:s.spriteFormat},i);await l.load(t),this._spriteSourceMap.set(e,l)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=z("2d").maxTextureSize,s=e.spriteUrl,i=s?_(s,f(y({},this.customParameters),{token:this.apiKey})):null;if(!i&&e.type==="url")return null;const o=new J(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){L(l)}return null}async loadStyle(e,t){var s;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((s=this._loadingTask)==null||s.abort(),this._loadingTask=_e(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return I(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return I(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return I(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return(t==null?void 0:t.origin)&&!this.styleUrl?(t.messages&&t.messages.push(new b("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await ke(e,f(y({},t),{query:f(y({},this.customParameters),{token:this.apiKey})}));r.spriteFormat==="webp"&&(await Oe("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",y({},r)),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Le(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return G(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(e){var t,r;return(r=(t=this._loadingTask)==null?void 0:t.promise)!=null?r:this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:q})],p.prototype,"fullExtent",null),c([h()],p.prototype,"style",void 0),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:Ue,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([Ie(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:P})],p.prototype,"tileInfo",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([be("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([h({type:String})],p.prototype,"showCollisionBoxes",void 0),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([Re("esri.layers.VectorTileLayer")],p);const it=p;export{it as default};
