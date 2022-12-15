var K=Object.defineProperty;var w=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var x=(t,e,s)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,T=(t,e)=>{for(var s in e||(e={}))U.call(e,s)&&x(t,s,e[s]);if(w)for(var s of w(e))$.call(e,s)&&x(t,s,e[s]);return t};import{a9 as D,aD as A,aF as L,dg as P,nJ as k,a8 as _,bo as O,bN as M,U as v,O as j,bJ as B,$ as z}from"./vendor.ad8aa1ba.js";import{n as G}from"./cimAnalyzer.209d4429.js";import{p as V}from"./visualVariablesUtils.8e59fa54.js";import{S as J}from"./Utils.4c2feac4.js";import{x as N,l as C,b as W,E as H,t as Z}from"./Matcher.d6847bda.js";import{p as q}from"./BaseProcessor.11ca2dbc.js";import"./fontUtils.c3d9f30f.js";import"./BidiEngine.d8bba3fc.js";import"./alignmentUtils.6849a0a8.js";import"./definitions.d3c1cadf.js";import"./number.30628ef2.js";import"./Rect.95b0fd2e.js";import"./callExpressionWithFeature.ebb41fc5.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.cc457c75.js";import"./visualVariablesUtils.551507c0.js";import"./enums.2d9e6f64.js";import"./Texture.22d23c43.js";import"./VertexElementDescriptor.1fdca6da.js";import"./tileUtils.eab69325.js";import"./TileClipper.51ce0e42.js";import"./Geometry.d049a63c.js";import"./GeometryUtils.51c4032a.js";import"./MaterialKey.6f6162d1.js";import"./earcut.afc1d357.js";import"./ExpandedCIM.a759c9e9.js";class Q{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){}async fetchResource(e,s){const r=this._resourceMap,i=r.get(e);if(i)return i;let a=this._inFlightResourceMap.get(e);if(a)return a;try{a=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},T({},s)),this._inFlightResourceMap.set(e,a),a.then(o=>(this._inFlightResourceMap.delete(e),r.set(e,o),o))}catch(o){return D(o)?null:{width:0,height:0}}return a}getResource(e){var s;return(s=this._resourceMap.get(e))!=null?s:null}}function R(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}function F(t){const e=t.message,s={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const r in e.data){const i=e.data[r];if(s.message.data[r]=null,j(i)){const a=i.stride,o=i.indices.slice(0),l=i.vertices.slice(0),c=i.records.slice(0),h={stride:a,indices:o,vertices:l,records:c,metrics:M(i.metrics,d=>d.slice(0))};s.transferList.push(o,l,c),s.message.data[r]=h}}return s}let I=class extends q{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new Q(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){const s=e.schema.processors[0];if(s.type!=="symbol")return;const r=P(this._schema,s);(k(r,"mesh")||k(r,"target"))&&(t.mesh=!0,t.why.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,s,r){return _(r),this._onTileData(t,e,s,r)}onTileClear(t){const e={clear:!0};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}onTileError(t,e,s){const r=s.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(s=>{for(const r of s)r.message.tileKey===e.id&&this._updateTileMesh("append",e,F(r),[],!1,!1,null)})}_addBufferData(t,e){this._bufferData.has(t)||this._bufferData.set(t,[]),this._bufferData.get(t).push(F(e))}_createFactory(t){const{geometryType:e,objectIdField:s,fields:r}=this.service,i=(h,d)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",h,d),a={geometryType:e,fields:r,spatialReference:O.fromJSON(this.spatialReference)},o=new N(i,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:c}=t.mesh;return this._store=o,this._matchers.feature=C(l,o,a,this._resourceManagerProxy),this._matchers.aggregate=M(c,h=>C(h,o,a,this._resourceManagerProxy)),new W(e,s,o)}async _onTileData(t,e,s,r){_(r);const{type:i,addOrUpdate:a,remove:o,clear:l,end:c}=e,h=!!this._schema.mesh.sortKey;if(!a){const f={type:i,addOrUpdate:null,remove:o,clear:l,end:c,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:f},r)}const d=this._processFeatures(t,a,s,r,e.status.version);try{const f=await d;if(v(f)){const n={type:i,addOrUpdate:null,remove:o,clear:l,end:c,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:n},r)}const m=[];for(const n of f){let u=!1;const g=n.message.bufferIds,p=t.key.id,b=n.message.tileKey;if(p!==b&&j(g)){if(!this.tileStore.get(b)){this._addBufferData(p,n),m.push(n);continue}let y=this._bufferIds.get(b);y||(y=new Set,this._bufferIds.set(b,y));const E=Array.from(g);for(const S of E){if(y.has(S)){u=!0;break}y.add(S)}}u||(this._addBufferData(p,n),m.push(n))}await Promise.all(m.map(n=>{const u=t.key.id===n.message.tileKey,g=u?e.remove:[],p=u&&e.end;return this._updateTileMesh(i,t,n,g,p,e.clear,r.signal)}))}catch(f){this._handleError(t,f,r)}}async _updateTileMesh(t,e,s,r,i,a,o){const l=t,c=s.message.tileKey,h=!!this._schema.mesh.sortKey;c!==e.key.id&&(i=!1);const d=M(s,u=>u.message),f=M(s,u=>u.transferList)||[],m={type:l,addOrUpdate:d,remove:r,clear:a,end:i,sort:h},n={transferList:z(f)||[],signal:o};return _(n),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:m},n)}async _processFeatures(t,e,s,r,i){if(v(e)||!e.hasFeatures)return null;const a={transform:t.transform,hasZ:!1,hasM:!1},o=this._factory,l={viewingMode:"",scale:t.scale},c=await this._matchers.feature,h=await this._matchers.aggregate;_(r);const d=this._getLabelInfos(t,e);return await o.analyze(e.getCursor(),this._resourceManagerProxy,c,h,a,l),_(r),this._writeFeatureSet(t,e,a,d,o,s,i)}_writeFeatureSet(t,e,s,r,i,a,o){const l=e.getSize(),c=this._schema.mesh.matcher.symbologyType,h=new H(t.key.id,{features:l,records:l,metrics:0},c,a,c!==J.HEATMAP,o),d={viewingMode:"",scale:t.scale},f=e.getCursor();for(;f.next();)try{const n=f.getDisplayId(),u=j(r)?r.get(n):null;i.writeCursor(h,f,s,d,t.level,u,this._resourceManagerProxy)}catch{}const m=t.tileInfoView.tileInfo.isWrappable;return h.serialize(m)}_handleError(t,e,s){if(!D(e)){const r={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(v(e))return null;if(e.type==="subtype"){const r={type:"subtype",classes:{}};let i=!1;for(const a in e.classes){const o=e.classes[a].filter(l=>R(l,t.scale));i=i||!!o.length,r.classes[a]=o}return i?r:null}const s=e.classes.filter(r=>R(r,t.scale));return s.length?{type:"simple",classes:s}:null}_getLabels(t,e){var s;if(e.type==="subtype"){const r=this.service.subtypeField,i=B(r,"Expected to find subtype Field"),a=t.readAttribute(i);return a==null?[]:(s=e.classes[a])!=null?s:[]}return e.classes}_getLabelInfos(t,e){const s=this._getLabelingSchemaForScale(t);if(v(s))return null;const r=new Map,i=e.getCursor();for(;i.next();){const a=i.getDisplayId(),o=[],l=V(a),c=l&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",h=this._getLabels(i,s);for(const d of h){if(d.target!==c)continue;const f=i.getStorage(),m=l&&c==="feature"?f.getComputedStringAtIndex(i.readAttribute("referenceId"),d.fieldIndex):f.getComputedStringAtIndex(a,d.fieldIndex);if(!m)continue;const n=G(m.toString()),u=n[0],g=n[1];this._store.getMosaicItem(d.symbol,Z(u)).then(p=>{o[d.index]={glyphs:p.glyphMosaicItems,rtl:g,index:d.index}})}r.set(a,o)}return r}};I=A([L("esri.views.2d.layers.features.processors.SymbolProcessor")],I);const we=I;export{we as default};
