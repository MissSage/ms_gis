var q=Object.defineProperty;var T=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var x=(t,e,r)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,I=(t,e)=>{for(var r in e||(e={}))K.call(e,r)&&x(t,r,e[r]);if(T)for(var r of T(e))U.call(e,r)&&x(t,r,e[r]);return t};import{op as M,aq as a,ar as n,as as E,lR as W,lQ as Q,eD as D,l5 as H,pv as V,pw as Y,ne as Z,nf as X,ng as ee,l8 as te,bb as S,hA as v,es as re,bt as J,kU as $,A as c,ld as L,mV as O,qE as R,eg as oe,m1 as j,em as ae,E as f,J as ie,el as le,n7 as ne,pK as _,lz as b,ly as se,eY as ye,qF as P,fq as pe,fk as ue,mC as de,mD as me,ez as ce}from"./vendor.f59460b9.js";import{n as fe}from"./objectIdUtils.83ac3f67.js";function w(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!G(e))}function G({layerDefinition:t,featureSet:e}){var o;const r=(o=t.geometryType)!=null?o:e.geometryType;return C.find(i=>{var s,y,p;return r===i.geometryTypeJSON&&((p=(y=(s=t.drawingInfo)==null?void 0:s.renderer)==null?void 0:y.symbol)==null?void 0:p.type)===i.identifyingSymbol.type})}function F(){return new oe({xmin:-180,ymin:-90,xmax:180,ymax:90})}const B=new M({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ge=new M({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let d=class extends ye{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?f(e)?O(F(),t).geometry:j(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=$();return this.graphics.forEach(o=>{const i=c(o.geometry)?O(o.geometry,t).geometry:null;c(i)&&L(e,i.type==="point"?i:i.extent,e)}),R(e,P)?null:e}get sublayers(){return this.graphics}};a([n({readOnly:!0})],d.prototype,"fullExtent",null),a([n({readOnly:!0})],d.prototype,"fullBounds",null),a([n({readOnly:!0})],d.prototype,"sublayers",null),a([n()],d.prototype,"layer",void 0),a([n()],d.prototype,"layerId",void 0),a([n({readOnly:!0})],d.prototype,"visibilityMode",void 0),d=a([E("esri.layers.MapNotesLayer.MapNotesSublayer")],d);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new W().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new Q().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new D().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new D().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new H().toJSON()}];let l=class extends V(Y(Z(X(ee(te))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new v(C.map(e=>new d({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!w(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!w(e))return null;const o=e.layers.map(i=>{const s=new re;return s.read(i,r),s});return new v({items:o})}readLegacyfeatureCollectionJSON(t,e){return w(e)?J(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=$();return c(this.sublayers)?this.sublayers.forEach(({fullBounds:o})=>c(o)?L(e,o,e):e,e):((r=this.featureCollectionJSON)==null?void 0:r.layers.some(o=>o.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach(o=>{const i=O(o.layerDefinition.extent,t).geometry;c(i)&&L(e,i,e)}),R(e,P)?O(F(),t).geometry:j(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?S.fromJSON(e.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(t,e,r){var s;if(w(e))return null;const o=[];let i=e.layers.reduce((y,p)=>{var u;return Math.max(y,(u=p.layerDefinition.id)!=null?u:-1)},-1)+1;for(const y of e.layers){const{layerDefinition:p,featureSet:u}=y,g=(s=p.id)!=null?s:i++,m=G(y);if(c(m)){const h=new d({id:m.id,title:p.name,layerId:g,layer:this,graphics:u.features.map(({geometry:N,symbol:k,attributes:z,popupInfo:A})=>ae.fromJSON({attributes:z,geometry:N,symbol:k,popupTemplate:A}))});o.push(h)}}return new v(o)}writeSublayers(t,e,r,o){var g;const{minScale:i,maxScale:s}=this;if(f(t))return;const y=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((g=o==null?void 0:o.messages)==null?void 0:g.push(new ie("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const m of t)for(const h of m.graphics)if(c(h.geometry)){u=h.geometry.spatialReference.toJSON();break e}for(const m of C){const h=t.find(N=>m.id===N.id);this._writeMapNoteSublayer(p,h,m,i,s,u,o)}le("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=J(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(f(this.sublayers))return;let t=null;const e=[];for(const o of this.sublayers)for(const i of o.graphics)if(c(i.geometry)){const s=i.geometry;t?pe(s.spatialReference,t)||(ue(s.spatialReference,t)||de()||await me(),i.geometry=ce(s,t)):t=s.spatialReference,e.push(i)}const r=await ne(e.map(o=>o.geometry));e.forEach((o,i)=>o.geometry=r[i])}_findSublayer(t){var e,r;return f(this.sublayers)?null:(r=(e=this.sublayers)==null?void 0:e.find(o=>o.id===t))!=null?r:null}_writeMapNoteSublayer(t,e,r,o,i,s,y){const p=[];if(!f(e)){for(const u of e.graphics)this._writeMapNote(p,u,r.geometryType,y);this._normalizeObjectIds(p,B),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:J(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[B.toJSON(),ge.toJSON()],spatialReference:s},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var u,g;if(f(e))return;const{geometry:i,symbol:s,popupTemplate:y}=e;if(f(i))return;if(i.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new _("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(f(s))return void((g=o==null?void 0:o.messages)==null?void 0:g.push(new _("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:I({},e.attributes),geometry:i.toJSON(),symbol:s.toJSON()};c(y)&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let o=fe(r,t)+1;const i=new Set;for(const s of t){s.attributes||(s.attributes={});const{attributes:y}=s;(y[r]==null||i.has(y[r]))&&(y[r]=o++),i.add(y[r])}}};a([n({readOnly:!0})],l.prototype,"capabilities",void 0),a([b(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),a([n({readOnly:!0})],l.prototype,"featureCollections",void 0),a([b(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),a([n({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),a([b(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),a([n({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),a([n({readOnly:!0})],l.prototype,"fullExtent",null),a([n({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),a([n({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),a([b(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),a([n({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),a([b(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),a([n({readOnly:!0})],l.prototype,"multipointLayer",null),a([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),a([n({readOnly:!0})],l.prototype,"pointLayer",null),a([n({readOnly:!0})],l.prototype,"polygonLayer",null),a([n({readOnly:!0})],l.prototype,"polylineLayer",null),a([n({type:S})],l.prototype,"spatialReference",void 0),a([b(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),a([n({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),a([b("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),a([se("web-map","sublayers")],l.prototype,"writeSublayers",null),a([n({readOnly:!0})],l.prototype,"textLayer",null),a([n()],l.prototype,"title",void 0),a([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=a([E("esri.layers.MapNotesLayer")],l);const Oe=l;export{Oe as default};
