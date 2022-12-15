import{q8 as b,q9 as x,bL as y,aD as t,aE as n,oT as w,d1 as P,cm as E,aF as h,aL as j,dO as S,ih as L,ii as T,hN as $,mN as k,at as N,fd as R,U as f,O as s,mm as A,$ as O,qa as C,et as q,nr as _,nt as H,ll as F,lL as M}from"./vendor.1bde3be2.js";import{c as B}from"./Analysis.59990f70.js";let l=class extends b(x){constructor(e){super(e),this.type="simple",this.color=new y("black"),this.lineSize=2,this.fontSize=10,this.textColor=new y("black"),this.textBackgroundColor=new y([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"color",void 0),t([n({type:Number,cast:P,nonNullable:!0,range:{min:E(1)},json:{write:{isRequired:!0}}})],l.prototype,"lineSize",void 0),t([n({type:Number,cast:P,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"fontSize",void 0),t([n({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"textColor",void 0),t([n({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"textBackgroundColor",void 0),l=t([h("esri.analysis.DimensionSimpleStyle")],l);const g=l;var c;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(c||(c={}));const G=[c.Horizontal,c.Vertical,c.Direct];let a=class extends b(x){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=c.Direct,this.offset=0,this.orientation=0}};t([n({type:["length"],json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),t([n({type:j,json:{write:!0}})],a.prototype,"startPoint",void 0),t([n({type:j,json:{write:!0}})],a.prototype,"endPoint",void 0),t([n({type:G,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"measureType",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"offset",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>L.normalize(T(e),0,!0))],a.prototype,"orientation",void 0),a=t([h("esri.analysis.LengthDimension")],a);const D=a,v=$.ofType(D);let p=class extends B{constructor(e){super(e),this.type="dimension",this.style=new g,this.extent=null}initialize(){this.addHandles(N(()=>this._computeExtent(),e=>{(f(e)||f(e.pending))&&this._set("extent",s(e)?e.extent:null)},R))}get dimensions(){return this._get("dimensions")||new v}set dimensions(e){this._set("dimensions",A(e,this.dimensions,v))}get spatialReference(){for(const e of this.dimensions){if(s(e.startPoint))return e.startPoint.spatialReference;if(s(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return s(e)?O(e.pending):null}_computeExtent(){const e=this.spatialReference;if(f(e))return{pending:null,extent:null};const i=[];for(const r of this.dimensions)s(r.startPoint)&&i.push(r.startPoint),s(r.endPoint)&&i.push(r.endPoint);const u=C(i,e);if(s(u.pending))return{pending:u.pending,extent:null};let m=null;return s(u.geometries)&&(m=u.geometries.reduce((r,d)=>f(r)?s(d)?q.fromPoint(d):null:s(d)?r.union(q.fromPoint(d)):r,null)),{pending:null,extent:m}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],p.prototype,"type",void 0),t([n({cast:k,type:v,nonNullable:!0})],p.prototype,"dimensions",null),t([n({readOnly:!0})],p.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},nonNullable:!0})],p.prototype,"style",void 0),t([n({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([n({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([h("esri.analysis.DimensionAnalysis")],p);const z=p;let o=class extends _(H(F)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new z,this.opacity=1,e){const{source:i,style:u}=e;i&&u&&(i.style=u)}}initialize(){this.addHandles([N(()=>this.source,(e,i)=>{s(i)&&i.parent===this&&(i.parent=null),s(e)&&(e.parent=this)},R)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return O(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new z)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,u,m){i.dimensions=e.filter(({startPoint:r,endPoint:d})=>s(r)&&s(d)).map(r=>r.toJSON(m)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],o.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],o.prototype,"source",void 0),t([n({readOnly:!0})],o.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},json:{write:{ignoreOrigin:!0}}})],o.prototype,"style",null),t([n({readOnly:!0})],o.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([n({type:["show","hide"]})],o.prototype,"listMode",void 0),t([n({type:$.ofType(D),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"dimensions",null),t([M("web-scene","dimensions")],o.prototype,"writeDimensions",null),o=t([h("esri.layers.DimensionLayer")],o);const V=o;export{V as default};
