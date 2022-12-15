var J=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var k=(o,t,e)=>t in o?J(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,U=(o,t)=>{for(var e in t||(t={}))Z.call(t,e)&&k(o,e,t[e]);if(N)for(var e of N(t))X.call(t,e)&&k(o,e,t[e]);return o};import{X as _,O as c,b5 as v,dl as j,dm as q,U as l,bM as V,bR as K,dn as W,dp as tt,dq as et,dr as g,ds as st,dt as rt,K as it,dg as nt,ae as at,a9 as G,Y as D,du as ot,dv as ht,dw as ut,bQ as dt,$ as f,ax as ct}from"./vendor.1bde3be2.js";import{e as lt}from"./centroid.27e27241.js";import{S as _t,T as ft,P as gt,D as B,N as pt,O as mt}from"./definitions.d3c1cadf.js";import{c as yt,u as bt,f as m,e as xt,i as It,n as St,l as At,r as Tt,s as O,a as u}from"./visualVariablesUtils.50808850.js";import{m as zt}from"./Utils.7c0d2871.js";import{G as p}from"./enums.2d9e6f64.js";class y{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(t,e){return new y(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new y(s,e)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let i=s/32;i!==r/32;i++)if(this._buf[i])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let i=s/32;i!==r/32;i++)this._buf[i]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new y(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet(e=>{t++}),t}}let S=0;var L;const z=(L=_("featurelayer-simplify-thresholds"))!=null?L:[.5,.5,.5,.5],Ct=z[0],Ft=z[1],wt=z[2],Dt=z[3];var H;const E=(H=_("featurelayer-simplify-payload-size-factors"))!=null?H:[1,2,4],Et=E[0],Mt=E[1],Nt=E[2];var P;const kt=(P=_("featurelayer-simplify-mobile-factor"))!=null?P:2,Ut=_("esri-mobile");class R{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=t,this._layerSchema=e}static createInstance(){return S++,S=S>65535?0:S,S}get isEmpty(){return c(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const r=Ut?kt:1;e>4e6?s=Nt*r:e>1e6?s=Mt*r:e>5e5?s=Et*r:e>1e5&&(s=r);let i=0;t>4e3?i=Dt*s:t>2e3?i=wt*s:t>100?i=Ft:t>15&&(i=Ct);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}createQuantizedExtrudedQuad(t,e){return new v([5],[t-1,e,1,-1,1,1,-1,1,-1,-1])}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(s!==void 0)return s;for(const r of this._joined){r.setIndex(this.getIndex());const i=r._readAttribute(t,e);if(i!==void 0)return i}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const r of Object.keys(s))t[r]=s[r]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=j(t,this.geometryType,this.hasZ,this.hasM),s=q(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}field(t){if(this.hasField(t))return this.readAttribute(t,!0);for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t))return e._readAttribute(t,!0);throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(t=!1){if(!t)return JSON.stringify(this.readLegacyFeature());const e=this.readLegacyFeature();if(!e)return JSON.stringify(null);const s={geometry:e.geometry,attributes:U({},e.attributes?e.attributes:{})};for(const r in s.attributes){const i=s.attributes[r];i instanceof Date&&(s.attributes[r]=i.getTime())}return JSON.stringify(s)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){return{attributes:this._readAttributes(),geometry:(t==null?void 0:t.keepGeometryType)===!0?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(t=null,e=null){return Promise.resolve(this.castAsJson(e))}removeIds(t){if(l(this._objectIdToIndex)){const s=new Map,r=this.getCursor();for(;r.next();){const i=V(r.getObjectId());s.set(i,r.getIndex())}this._objectIdToIndex=s}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){l(this._deleted)&&(this._deleted=y.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return l(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if(this.geometryType!=="esriGeometryPolygon")return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=K(this.getQuantizationTransform(),null);return lt(new v,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}function vt({coords:o,lengths:t}){let e=0;for(const s of t){for(let r=1;r<s;r++)o[2*(e+r)]+=o[2*(e+r)-2],o[2*(e+r)+1]+=o[2*(e+r)-1];e+=s}}class b extends R{constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s==null?void 0:s.geometryType,this._features=e}static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,i=W([],t,r,!1,!1,s);for(let n=0;n<i.length;n++)i[n].displayId=t[n].displayId;return b.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=tt(t,e.objectIdField);return b.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=b.fromOptimizedFeatures(s,e);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)i.type==="esriFieldTypeDate"&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=R.createInstance(),i=new b(r,t,e);return i._transform=s,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!(s.objectId&&e.has(s.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new b(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return et(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return j(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return l(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return g(this._current)?st(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return vt(e),e}readHydratedGeometry(){const t=this._current.geometry;if(l(t))return null;const e=t.clone();return c(this._transform)&&rt(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!g(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return l(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!g(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return l(e)?t:e.translate[1]-t*e.scale[1]}getX(){return g(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return g(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!g(this._current)){if(c(this._current.centroid)){const[s,r]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(s,r)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return g(this._current)?this._computeCentroid():this._current.centroid}hasField(t){return t in this._current.attributes?!0:this.getFieldNames().map(e=>e.toLowerCase()).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(s!==void 0)return s!=null&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const a=this._current.attributes[n];return a!=null&&e&&this._dateFields.has(n)?new Date(a):a}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const x=it.getLogger("esri.views.layers.2d.features.support.AttributeStore"),C=St(At,x),A={sharedArrayBuffer:_("esri-shared-array-buffer"),atomics:_("esri-atomics")};function $(o,t){return e=>t(o(e))}class jt{constructor(t,e,s,r){this.size=0,this.texelSize=4;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return dt(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=f(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=f(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=f(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){f(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){f(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=m(t);return f(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=m(t),i=1<<e;(this.layout&i)!=0?(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):x.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===p.UNSIGNED_BYTE&&this._shared&&A.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===p.UNSIGNED_BYTE&&this._shared&&A.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=f(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||this._ctype==="local"),i=this.pixelType,n=this.layout,a=f(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&r!=="local"?SharedArrayBuffer:ArrayBuffer,n=zt(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let h=0;h<a.length;h+=4)a[h+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class Yt{constructor(t,e,s=()=>{}){this._client=t,this.config=e,this._notifyChange=s,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(_t),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const r=e.supportsTextureFloat?p.FLOAT:p.UNSIGNED_BYTE;C(`Creating AttributeStore ${A.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:p.UNSIGNED_BYTE,layout:1},{pixelType:p.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:p.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=nt(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(_("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!l(s))){switch(s.target){case"feature":this._targetType=bt;break;case"aggregate":this._targetType=yt}if(s.type==="subtype")for(const i in s.mapping){const n=s.mapping[i];if(c(n)&&c(n.vvMapping))for(const a of n.vvMapping)this._bindAttribute(a)}else{if(c(s.vvMapping))for(const i of s.vvMapping)this._bindAttribute(i);if(c(s.attributeMapping))for(const i of s.attributeMapping)this._bindAttribute(i)}}}onTileData(t,e){if(l(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const r=s.getDisplayId();this.setAttributeData(r,s)}}async setHighlight(t,e){const s=1,r=this._getBlock(0),i=e.map(n=>m(n));r.lock(),r.unsetComponentAllTexels(0,s),r.setComponent(0,s,i),r.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e,s){const{service:r,spatialReference:i}=s,{filters:n}=e,a=n.map((h,d)=>this._updateFilter(h,d,r,i));(await Promise.all(a)).some(h=>h)&&(t.storage.filters=!0,_("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=m(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?ft:0}unsetAttributeData(t){const e=m(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=m(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==xt(t))return;const r=this._attributeComputeMap,i=this.config.supportsTextureFloat?1:2,n=4;r.size&&r.forEach((a,h)=>{const d=h*i%n,T=Math.floor(h*i/n),I=this._getBlock(T+gt),w=a(e);if(this.config.supportsTextureFloat)I.setData(s,d,w);else if(w===B)I.setData(s,d,255),I.setData(s,d+1,255);else{const M=ct(Math.round(w),-32767,32766)+32768,Y=255&M,Q=(65280&M)>>8;I.setData(s,d,Y),I.setData(s,d+1,Q)}})}sendUpdates(){if(_("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=at(),this._nextUpdate.promise;const t={blocks:this._blocks.map(e=>c(e)?e.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}else _("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange()};_("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s}).catch(e=>{if(G(e))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),x.error(new D("mapview-attribute-store","Encountered an error during client update",e))}),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){function e(){return t.normalizationField?n=>{const a=n.readAttribute(t.normalizationField);return a?n.readAttribute(t.field)/a:null}:n=>n.readAttribute(t.field)}function s(){return t.normalizationField&&x.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),n=>n.getComputedNumericAtIndex(t.fieldIndex)}let r;if(t.fieldIndex!=null)r=s();else{if(!t.field)return;r=e()}t.valueRepresentation&&(r=$(r,n=>Tt(n,t.valueRepresentation)));const i=n=>n===null||isNaN(n)||n===1/0||n===-1/0?B:n;this._attributeComputeMap.set(t.binding,$(r,i))}_createResources(){if(c(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(pt),this._getBlock(mt),C("Initializing AttributeStore");const t={shared:A.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:ot(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{G(s)?this._createResourcesPromise=null:x.error(new D("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>l(this._createResourcesPromise)?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(c(e))return e;C(`Initializing AttributeBlock at index ${t}`);const s=A.sharedArrayBuffer,r=this._client.type,i=new jt(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return C("Expanding block size to",t,this._blocks),ht(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return x.error(new D("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=c(i)&&i.hash;if(!i&&!t||n===JSON.stringify(t))return!1;if(l(t)){if(!i)return!1;const h=1<<e+1,d=this._getBlock(0);return this._filters[e]=null,d.setComponentAllTexels(0,h),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(c(s))return s;const{default:r}=await import("./FeatureFilter.b985c1ea.js"),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new ut(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=It(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const n=!!(s&1<<i),a=this._filters[i];e|=(!n||l(a)||a.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const i=t.getObjectId();r=this.getHighlightFlag(i)}return e<<1|r}}class Gt{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return O(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function F(o,t,e){if(!(o.length>t))for(;o.length<=t;)o.push(e)}class Qt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new Gt,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(y.create(this._allocatedSize,u)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),F(this._numerics[t],e,0)}_ensureInstanceId(t){F(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),F(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),O(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&u)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&u,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&u,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&u,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&u,0,s)}getComputedNumericAtIndex(t,e){const s=t&u;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&u;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&u;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&u;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&u;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&u;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&u)]}getYMin(t){return this._bounds[4*(t&u)+1]}getXMax(t){return this._bounds[4*(t&u)+2]}getYMax(t){return this._bounds[4*(t&u)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex((d,T)=>{r=Math.min(r,d),i=Math.min(i,T),n=Math.max(n,d),a=Math.max(a,T)});const h=t&u;return F(this._bounds,4*h+4,0),this._bounds[4*h]=r,this._bounds[4*h+1]=i,this._bounds[4*h+2]=n,this._bounds[4*h+3]=a,!0}}export{R as b,b as c,Qt as r,y as t,Yt as v};
