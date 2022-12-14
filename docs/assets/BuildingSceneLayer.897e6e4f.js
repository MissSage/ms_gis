var fe=Object.defineProperty,me=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var G=(e,r,i)=>r in e?fe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,H=(e,r)=>{for(var i in r||(r={}))be.call(r,i)&&G(e,i,r[i]);if(z)for(var i of z(r))Se.call(r,i)&&G(e,i,r[i]);return e},W=(e,r)=>me(e,ve(r));import{bq as we,pX as $e,aJ as t,aK as s,lS as w,oZ as je,pY as E,aL as p,S as $,ew as X,lD as Y,dC as Oe,W as d,eL as ee,pZ as xe,a7 as te,ev as Fe,mB as Ie,a3 as j,eF as Le,$ as Te,ez as Be,bu as re,g_ as qe,p_ as Ae,p$ as _e,mQ as Ee,ni as se,dR as Ne,q0 as Re,hT as v,q1 as Pe,q2 as Ue,dV as g,bM as c,q3 as ke,k6 as Me,nw as Ce,nx as De,ny as Qe,pP as Ke,nz as Ve,q4 as Je,lr as Ze,nf as ze,eD as Ge,bv as He,pU as We,q5 as Xe,q6 as Ye}from"./vendor.faf54504.js";import{t as et,y as tt,l as rt}from"./FetchAssociatedFeatureLayer.cab9296f.js";import{n as st,N as it,L as ie}from"./SceneService.bc11beb5.js";import{s as ot,l as at,u as nt,m as lt}from"./I3SLayerDefinitions.45a5667b.js";import{d as pt,s as yt}from"./popupUtils.6b4a036b.js";import"./I3SBinaryReader.04c64587.js";import"./VertexAttribute.42396f25.js";import"./edgeUtils.8faca5dd.js";import"./symbolColorUtils.cdb4ffa7.js";import"./vec3f32.1121a836.js";import"./originUtils.2d0aad75.js";import"./multiOriginJSONSupportUtils.38b69b9c.js";import"./resourceUtils.6f831094.js";let y=class extends we($e){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,r){return typeof r.alias=="string"?r.alias:typeof r.name=="string"?r.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([w("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:je,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([w("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(E(String))],y.prototype,"modelName",void 0),t([s(E(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const oe=y,ae="esri.layers.buildingSublayers.BuildingComponentSublayer",dt=$.getLogger(ae),ne=Re();let a=class extends X.LoadableMixin(Y(oe)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new Oe(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return d(i)&&typeof o=="number"?new ee({portalItem:i,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=d(e)?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=st(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,dt,r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return xe(this,e)}async _fetchService(e){const r=(await te(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,n,h,Z;const i=(n=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:n[e];return i&&i.type!=="inherited"?i:(Z=(h=this.getField(e))==null?void 0:h.domain)!=null?Z:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){var e;return d(this.associatedLayer)?(e=this.associatedLayer.types)!=null?e:[]:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:et,{query:r,data:{supportsZ:i,supportsM:o,isVersioned:n}}=e;return{query:r,data:{supportsZ:i,supportsM:o,isVersioned:n}}}createQuery(){const e=new Fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i==null?void 0:i.features)for(const o of i.features)o.layer=this.layer,o.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const i=Ie(this.fieldsIndex,await pt(this,yt(this)));return tt(this.parsedUrl.path,this.attributeStorageInfo,e,r,i)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new j("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new Le;return o.attributes=i[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),Te(this.associatedLayer))throw new j("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new j("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],a.prototype,"parsedUrl",null),t([s({type:ot,readOnly:!0})],a.prototype,"nodePages",void 0),t([s({type:[at],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([s({type:[nt],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([s({type:[lt],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],a.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([s(ne.fields)],a.prototype,"fields",void 0),t([s({readOnly:!0})],a.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:ee})],a.prototype,"associatedLayer",void 0),t([w("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([s(ne.outFields)],a.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([s({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([s({readOnly:!0,type:Be})],a.prototype,"fullExtent",null),t([s({readOnly:!0,type:re})],a.prototype,"spatialReference",null),t([s({readOnly:!0})],a.prototype,"version",null),t([s({readOnly:!0,type:qe})],a.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([s({types:Ae,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([s(_e)],a.prototype,"popupEnabled",void 0),t([s({type:Ee,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([s()],a.prototype,"types",null),t([s()],a.prototype,"typeIdField",null),t([s({json:{write:!1}}),se(new Ne({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([s()],a.prototype,"geometryType",null),t([s()],a.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(ae)],a);const N=a;var R;const le={type:v,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:pe}}},read:!1}};function pe(e,r,i){if(e&&Array.isArray(e))return new v(e.map(o=>{const n=ut(o);if(n){const h=new n;return h.read(o,i),h}return i&&i.messages&&o&&i.messages.push(new Pe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:i})),null}))}let f=R=class extends oe{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Ue(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function ut(e){return e.layerType==="group"?f:N}t([s({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([s(le)],f.prototype,"sublayers",void 0),f=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function r(i,o){i.forEach(n=>{o(n),n.type==="building-group"&&r(n.sublayers,o)})}e.sublayersProperty=le,e.readSublayers=pe,e.forEachSublayer=r}(f||(f={}));const b=f;let L=class extends g{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],L);const ye=L;var P;let O=P=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new P({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([s({type:String,json:{write:!0}})],O.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],O.prototype,"filterValues",void 0),O=P=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],O);const ct=O;var U;const ht=v.ofType(ct);let T=U=class extends g{clone(){return new U({filterTypes:c(this.filterTypes)})}};t([s({type:ht,json:{write:!0}})],T.prototype,"filterTypes",void 0),T=U=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],T);const gt=T;var k;const ft=v.ofType(gt);let x=k=class extends ye{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:c(this.filterBlocks)})}};t([s({type:["checkbox"]})],x.prototype,"type",void 0),t([s({type:ft,json:{write:!0}})],x.prototype,"filterBlocks",void 0),x=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],x);const de=x;let B=class extends g{};t([s({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),B=t([p("esri.layers.support.BuildingFilterMode")],B);const q=B;var M;let A=M=class extends q{constructor(){super(...arguments),this.type="solid"}clone(){return new M}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=M=t([p("esri.layers.support.BuildingFilterModeSolid")],A);const C=A;var D;let F=D=class extends q{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new D({edges:c(this.edges)})}};t([se({wireFrame:"wire-frame"})],F.prototype,"type",void 0),t([s(ke)],F.prototype,"edges",void 0),F=D=t([p("esri.layers.support.BuildingFilterModeWireFrame")],F);const ue=F;var Q;let _=Q=class extends q{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Q}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],_.prototype,"type",void 0),_=Q=t([p("esri.layers.support.BuildingFilterModeXRay")],_);const ce=_;var K;const mt={nonNullable:!0,types:{key:"type",base:q,typeMap:{solid:C,"wire-frame":ue,"x-ray":ce}},json:{read:e=>{switch(e&&e.type){case"solid":return C.fromJSON(e);case"wireFrame":return ue.fromJSON(e);case"x-ray":return ce.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let S=K=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new C,this.title=""}clone(){return new K({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"filterExpression",void 0),t([s(mt)],S.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"title",void 0),S=K=t([p("esri.layers.support.BuildingFilterBlock")],S);const vt=S;var V;const bt=v.ofType(vt);let m=V=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Me(),this.name=null}clone(){return new V({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],m.prototype,"description",void 0),t([s({type:bt,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:ye,typeMap:{checkbox:de}},json:{read:e=>(e&&e.type)==="checkbox"?de.fromJSON(e):null,write:!0}})],m.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=V=t([p("esri.layers.support.BuildingFilter")],m);const St=m;let u=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],u.prototype,"fieldName",void 0),t([s({type:String})],u.prototype,"modelName",void 0),t([s({type:String})],u.prototype,"label",void 0),t([s({type:Number})],u.prototype,"min",void 0),t([s({type:Number})],u.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let I=class extends X.LoadableMixin(Y(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):($.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const r=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await te(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],I.prototype,"url",void 0),t([s({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],I.prototype,"fields",null),I=t([p("esri.layers.support.BuildingSummaryStatistics")],I);const he=I,ge=v.ofType(St),J=c(b.sublayersProperty);J.json.origins["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},J.json.origins["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let l=class extends it(Ce(De(Qe(Ke(Ve(Je(Ze))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ze({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e!=null?e:{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const o=b.readSublayers(e,r,i);return b.forEachSublayer(o,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:i}){b.forEachSublayer(e,o=>o.read(r.get(o.id),i))}readSublayerOverrides(e,r){var o;const i=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?i.set(n.id,n):(o=r.messages)==null||o.push(new j("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const o=[];b.forEachSublayer(this.sublayers,n=>{const h=n.write({},i);Object.keys(h).length>1&&o.push(h)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(c(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const o=Ge((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new he({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=d(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(He).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return We(this,e=>{b.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(ie.SAVE_AS,W(H({},r),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(ie.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new j("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&$.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&$.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new rt(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(i){$.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",i)}}};t([s({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],l.prototype,"allSublayers",void 0),t([s(J)],l.prototype,"sublayers",void 0),t([w("service","sublayers")],l.prototype,"readSublayers",null),t([s({type:ge,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:he})],l.prototype,"summaryStatistics",void 0),t([w("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([s(Xe)],l.prototype,"fullExtent",void 0),t([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([s(E(re))],l.prototype,"spatialReference",void 0),t([s(Ye)],l.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([s()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Nt=l;export{Nt as default};
