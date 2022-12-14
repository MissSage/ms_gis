var M=Object.defineProperty;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,S=(e,t)=>{for(var s in t||(t={}))C.call(t,s)&&m(e,s,t[s]);if(g)for(var s of g(t))I.call(t,s)&&m(e,s,t[s]);return e};import{ac as K,pX as N,ed as P,fV as w,hX as y,ag as k,jS as x,A as p,eg as d,qB as R,hA as b,aq as r,ar as i,qC as T,lz as c,as as E,pv as A,pD as z,pw as J,ne as q,nf as U,ng as V,l8 as W,mY as B,bb as L,eB as D,bc as H,ly as X,ni as G}from"./vendor.f59460b9.js";import{j as Y,S as O,g as _,d as $}from"./kmlUtils.c2c7dd6a.js";var u;let o=u=class extends K.EventedMixin(N(P)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([w(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),w(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),k(()=>this.sublayers,(t,s)=>{if(s)for(const l of s)l.layer=l.parent=null;if(t)for(const l of t)l.parent=this,l.layer=this.layer},y)])}initialize(){x(()=>this.networkLink).then(()=>x(()=>this.visible===!0)).then(()=>this.load())}load(e){var l,n;if(!this.networkLink||this.networkLink.viewFormat)return;const t=p(e)?e.signal:null,s=this._fetchService((n=(l=this._get("networkLink"))==null?void 0:l.href)!=null?n:"",t).then(h=>{var f;const F=Y(h.sublayers);this.fullExtent=d.fromJSON(F),this.sourceJSON=h;const v=R(b.ofType(u),O(u,h));this.sublayers?this.sublayers.addMany(v):this.sublayers=v,(f=this.layer)==null||f.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return _(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(s=>$(s.data))}};r([i()],o.prototype,"description",void 0),r([i()],o.prototype,"id",void 0),r([i({readOnly:!0,value:null})],o.prototype,"networkLink",void 0),r([i({json:{write:{allowNull:!0}}})],o.prototype,"parent",void 0),r([i({type:b.ofType(u),json:{write:{allowNull:!0}}})],o.prototype,"sublayers",void 0),r([i({value:null,json:{read:{source:"name",reader:e=>T(e)}}})],o.prototype,"title",void 0),r([i({value:!0})],o.prototype,"visible",null),r([c("visible",["visibility"])],o.prototype,"readVisible",null),r([i()],o.prototype,"sourceJSON",void 0),r([i({value:null})],o.prototype,"layer",null),r([i({type:d})],o.prototype,"fullExtent",void 0),o=u=r([E("esri.layers.support.KMLSublayer")],o);const j=o,Q=["kml","xml"];let a=class extends A(z(J(q(U(V(W)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new B({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=L.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([k(()=>this.sublayers,(e,t)=>{t&&t.forEach(s=>{s.parent=null,s.layer=null}),e&&e.forEach(s=>{s.parent=this,s.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?S({url:e},t):e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return O(j,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],l=e.toArray();for(;l.length;){const n=l[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&l.push(...n.sublayers.toArray())),l.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?D(this.url,Q)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=l=>{l.visible&&(t.push(l),l.sublayers&&l.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=p(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(H).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>{var l;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:_((l=this.url)!=null?l:"",this.outSpatialReference,this.refreshInterval,e)}),s=$(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;p(this.extent)&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const l of s.sublayers.items)t(l),l.visible&&l.fullExtent&&(p(e)?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};r([i({readOnly:!0})],a.prototype,"allSublayers",void 0),r([i({type:L})],a.prototype,"outSpatialReference",void 0),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),r([i({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),r([i({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),r([i({type:["KML"]})],a.prototype,"operationalLayerType",void 0),r([i({})],a.prototype,"resourceInfo",void 0),r([i({type:b.ofType(j),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),r([c(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),r([c("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),r([X("sublayers")],a.prototype,"writeSublayers",null),r([i({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),r([i({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),r([i(G)],a.prototype,"url",void 0),r([i({readOnly:!0})],a.prototype,"visibleSublayers",null),r([i({type:d})],a.prototype,"extent",void 0),r([i()],a.prototype,"fullExtent",null),a=r([E("esri.layers.KMLLayer")],a);const se=a;export{se as default};
