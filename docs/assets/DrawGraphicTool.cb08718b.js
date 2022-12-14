var fe=Object.defineProperty,me=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var Y=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))xe.call(t,r)&&Y(e,r,t[r]);if(X)for(var r of X(t))_e.call(t,r)&&Y(e,r,t[r]);return e},F=(e,t)=>me(e,we(t));import{eJ as q,eK as Oe,eL as ee,eM as te,eN as Te,A as h,eI as Me,ay as $e,eO as be,bt as Ve,eP as Ge,aR as ze,eQ as d,eR as Ie,a3 as ie,E as v,eS as Se,dv as Re,eT as Pe,eU as Ue,aq as o,ar as a,as as P,an as Ce,ac as Le,eV as Ae,eW as oe,eX as re,eY as De,ag as ae,eH as A,em as Ee,dI as ke,eZ as ne,M as je,bD as Ze,bE as _,e_ as He,e$ as Ne,f0 as le}from"./vendor.f59460b9.js";import{e as D,j as $,U as E,a as se,m as qe,b as B,c as Be}from"./automaticLengthMeasurementUtils.c907ca4a.js";import{i as pe}from"./automaticAreaMeasurementUtils.9bd29027.js";function V(e,t){const r=new $e({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(r.z=e[2]),r}function Je(e,t){return new Me({points:e,spatialReference:t})}function ce(e,t,r){const l=new be({paths:e,spatialReference:t});return r&&ee(l),l}function U(e,t,r,l=!0){const p=Ve(e);p.forEach(n=>{const c=n[0],u=n[n.length-1];Ge(c,u)&&n.length!==1||n.push(n[0])});let i=new ze({rings:p,spatialReference:t});return i.rings.forEach(n=>{Oe(n,!1,!1)||n.reverse()}),r&&ee(i),l&&i.isSelfIntersecting&&te(t)&&(i=Te(i)),i}function he(e,t,r){const l=t.mapToLocalMultiple(e),p=[],i={x:l[0].x,y:l[0].y},n={x:l[1].x,y:l[1].y},c=Math.round(n.x-i.x),u=Math.round(n.y-i.y),y=Math.max(Math.abs(c),Math.abs(u));if(r){const g={x:i.x+y,y:i.y+y},m={x:i.x-y,y:i.y-y};p.push(d(g.x,m.y),d(m.x,m.y),d(m.x,g.y),d(g.x,g.y))}else{const g={x:c>0?i.x+y:i.x-y,y:u>0?i.y+y:i.y-y};p.push(d(i.x,i.y),d(g.x,i.y),d(g.x,g.y),d(i.x,g.y))}return ue(U([q(p.map(g=>t.localToMap(g)))],t.spatialReference,t.doUnnormalization,!0),p,t)}function Ke(e,t,r){let l=t.mapToLocalMultiple(e);if(l.length===1){const c=48,u=l[0];l=[d(u.x-c,u.y+c),d(u.x+c,u.y-c),d(u.x+c,u.y-c),d(u.x-c,u.y+c)]}const p=[],i={x:l[0].x,y:l[0].y},n={x:l[1].x,y:l[1].y};if(r){const c=Math.round(n.x-i.x),u=Math.round(n.y-i.y);p.push(d(i.x-c,i.y-u),d(n.x,i.y-u),d(n.x,n.y),d(i.x-c,n.y))}else p.push(d(i.x,i.y),d(n.x,i.y),d(n.x,n.y),d(i.x,n.y));return ue(U([q(p.map(c=>t.localToMap(c)))],t.spatialReference,t.doUnnormalization,!0),p,t)}function ue(e,t,r){const l=H(t[3],t[2],r),p=H(t[1],t[2],r),i=H(t[0],t[1],r),n=H(t[0],t[3],r);return{geometry:e,midpoints:h(l)&&h(p)&&h(i)&&h(n)?{top:l,right:p,bottom:i,left:n}:null}}function H(e,t,r){C[0]=e.x,C[1]=e.y,C[2]=0,L[0]=t.x,L[1]=t.y,L[2]=0,Ie(C,C,L,.5),N.x=C[0],N.y=L[1],N.z=L[2];const l=r.localToMap(N);return h(l)?V(l,r.spatialReference):null}const N=d(0,0,0),C=ie(),L=ie();function de(e,t,r,l){const p=t.mapToLocalMultiple(e);let i=null,n=null;if(r)i=p[0],n=p[1];else{const f=p[0],w=p[1],S=Math.round(w.x-f.x),R=Math.round(w.y-f.y),x=Math.max(Math.abs(S),Math.abs(R));i=d(S>0?f.x+x/2:f.x-x/2,R>0?f.y+x/2:f.y-x/2),n=d(Math.abs(S)>Math.abs(R)?i.x-x/2:i.x,Math.abs(S)>Math.abs(R)?i.y:i.y-x/2)}const c=t.localToMap(i),u=t.localToMap(n);if(v(c)||v(u))return null;t.doUnnormalization&&Se([[c,u]],t.spatialReference);const y=V(c,t.spatialReference),g=V(u,t.spatialReference),m=Re(t.spatialReference);let T=0;if(te(t.spatialReference))T=m*Pe(y,g,null);else{const f=i.x-n.x,w=i.y-n.y;T=m*Math.sqrt(f*f+w*w)*(l||1)}const j=new Ue({center:y,radius:T,radiusUnit:"meters",spatialReference:t.spatialReference});return{geometry:U(j.rings,j.spatialReference,!1),center:y,edge:g}}function Qe(e,t,r){const l=t.mapToLocalMultiple(e),p=l[0],i=l[1],n=Math.round(i.x-p.x),c=Math.round(i.y-p.y),u=d(r?p.x:p.x+n/2,r?p.y:p.y+c/2),y=r?n:n/2,g=r?c:c/2,m=60,T=[],j=2*Math.PI/m;function f(M){const ge=Math.cos(M),ve=Math.sin(M);return d(y*ge+u.x,g*ve+u.y)}for(let M=0;M<m;M++)T.push(f(M*j));T.push(T[0]);const{spatialReference:w,doUnnormalization:S}=t,R=U([q(T.map(M=>t.localToMap(M)))],w,S,!1),x=t.localToMap(f(Math.PI/2)),K=t.localToMap(f(0)),Q=t.localToMap(f(-Math.PI/2)),W=t.localToMap(f(Math.PI));return{geometry:R,midpoints:h(x)&&h(K)&&h(Q)&&h(W)?{top:V(x,w),right:V(K,w),bottom:V(Q,w),left:V(W,w)}:null}}let k=class extends D{constructor(e){super(e),this.type="draw-point"}};o([a()],k.prototype,"type",void 0),o([a()],k.prototype,"elevation",void 0),k=o([P("esri.views.interactive.tooltip.DrawPointTooltipInfo")],k);let G=class extends D{constructor(e){super(e),this.type="draw-polyline"}};o([a()],G.prototype,"type",void 0),o([a()],G.prototype,"elevation",void 0),o([a()],G.prototype,"totalLength",void 0),o([a()],G.prototype,"viewType",void 0),G=o([P("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],G);let z=class extends D{constructor(e){super(e),this.type="draw-polygon"}};o([a()],z.prototype,"type",void 0),o([a()],z.prototype,"elevation",void 0),o([a()],z.prototype,"area",void 0),o([a()],z.prototype,"viewType",void 0),z=o([P("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],z);let I=class extends D{constructor(e){super(e),this.type="draw-rectangle",this.xSize=$,this.ySize=$,this.area=E}};o([a()],I.prototype,"type",void 0),o([a()],I.prototype,"xSize",void 0),o([a()],I.prototype,"ySize",void 0),o([a()],I.prototype,"area",void 0),I=o([P("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],I);let b=class extends D{constructor(e){super(e),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=E}};o([a()],b.prototype,"type",void 0),o([a()],b.prototype,"radius",void 0),o([a()],b.prototype,"xSize",void 0),o([a()],b.prototype,"ySize",void 0),o([a()],b.prototype,"area",void 0),b=o([P("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],b);let s=class extends Ce(Le.EventedMixin(Ae)){constructor(e){super(e),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.labelOptions=new oe,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.tooltip=null,this.tooltipOptions=new re}initialize(){this.internalGraphicsLayer=new De({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation(),this.handles.add([this.drawOperation.on("vertex-add",e=>this.onVertexAdd(e)),this.drawOperation.on("vertex-remove",e=>this.onVertexRemove(e)),this.drawOperation.on("vertex-update",e=>this.onVertexUpdate(e)),this.drawOperation.on("cursor-update",e=>this.onCursorUpdate(e)),this.drawOperation.on("complete",e=>this.onComplete(e)),ae(()=>this.tooltipOptions.enabled,e=>{this.tooltip=e?new Be({view:this.view,info:this._tooltipInfo}):A(this.tooltip)},le),ae(()=>this._tooltipInfo,e=>{h(this.tooltip)&&(this.tooltip.info=e)},le)]),this.finishToolCreation()}destroy(){this.drawOperation=A(this.drawOperation),this.tooltip=A(this.tooltip),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=A(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){return se(this.defaultZ,"meters")}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),h(this._graphic)&&(this._graphic.symbol=e)}get updating(){var e,t;return(t=(e=this.drawOperation)==null?void 0:e.updating)!=null?t:!1}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_createGraphic(e){this._graphic=new Ee(F(Z({},this.graphicProperties),{geometry:e,symbol:this.graphicSymbol})),this.internalGraphicsLayer.add(this._graphic),this.handles.add(this.initializeGraphic(this._graphic)),this.notifyChange("graphic"),this.handles.add(ke(()=>{h(this._graphic)&&(this.internalGraphicsLayer.remove(this._graphic),this._graphic=A(this._graphic))}),J)}_destroyAllVisualisations(){this.handles.remove(O.outline),this.handles.remove(O.regularVertices),this.handles.remove(O.activeVertex),this.handles.remove(J)}_getCreateOperationGeometry(e={operationComplete:!1}){if(this.drawOperation==null||this.drawOperation.numVertices===0)return null;const t=this.drawOperation.stagedVertex,r=this.drawOperation.committedVertices,l=r.slice();h(t)&&l.push(this.drawOperation.coordinateHelper.pointToArray(t));const p=h(t)?this.drawOperation.coordinateHelper.pointToArray(t):r.splice(-1)[0],i={regularVertices:null,activeVertex:null,full:null,outline:null,circle:null,rectangle:null},n=l.length,c=this.view.spatialReference,u=this.view.type==="3d"&&this.view.viewingMode==="global";switch(this.geometryType){case"point":i.regularVertices=r,i.activeVertex=p,i.full=this.drawOperation.coordinateHelper.arrayToPoint(l[0]);break;case"multipoint":i.regularVertices=r,i.activeVertex=p,n>0&&(i.full=Je(l,c));break;case"polyline":i.regularVertices=r,i.activeVertex=p,n>0&&(i.full=ce([l],c,u));break;case"polygon":i.regularVertices=r,i.activeVertex=p,n>0&&(i.full=U([l],c,u,!0));break;case"circle":if(n>0){const y=ne(this.view,l[0]);if(n===1&&e.operationComplete){const g=l[0],m=y.makeMapPoint(g[0]+ye*this.view.resolution,g[1]);i.circle=de([g,m],y,!0),i.full=h(i.circle)?i.circle.geometry:null}else n===2&&(this.forceUniformSize?(i.circle=de(l,y,this.centered),i.full=h(i.circle)?i.circle.geometry:null):(i.rectangle=Qe(l,y,this.centered),i.full=i.rectangle.geometry))}break;case"rectangle":if(n>0){const y=ne(this.view,l[0]);if(n===1&&e.operationComplete){const g=l[0],m=y.makeMapPoint(g[0]+ye*this.view.resolution,g[1]);i.rectangle=he([g,m],y,!0),i.full=i.rectangle.geometry}else n===2&&(i.rectangle=this.forceUniformSize?he(l,y,this.centered):Ke(l,y,this.centered),i.full=i.rectangle.geometry)}break;default:return null}switch(this.geometryType){case"point":case"multipoint":break;case"polyline":case"polygon":n>1&&(i.outline=ce([l],c,u));break;case"circle":case"rectangle":h(i.full)&&i.full.type==="polygon"&&(i.outline=U(i.full.rings,c,u))}return i}initializeGraphic(e){return null}onComplete(e){this._updateGraphic();let t=null;if(this.drawOperation.isCompleted){const r=this._getCreateOperationGeometry({operationComplete:!0});h(r)&&(v(this._graphic)?this._createGraphic(r.full):this._graphic.geometry=r.full,t=je(this._graphic).clone())}this._createOperationGeometry=null,this.emit("complete",Z({graphic:t},e))}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(e){this._updateGraphic(),this.emit("vertex-add",e)}onVertexRemove(e){this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry();this._createOperationGeometry=e,v(e)?this._destroyAllVisualisations():(h(e.outline)?this.handles.add(this.onOutlineChanged(e.outline),O.outline):this.handles.remove(O.outline),h(e.regularVertices)?this.handles.add(this.onRegularVerticesChanged(e.regularVertices),O.regularVertices):this.handles.remove(O.regularVertices),h(e.activeVertex)?this.handles.add(this.onActiveVertexChanged(e.activeVertex),O.activeVertex):this.handles.remove(O.activeVertex),h(e.full)?v(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full:this.handles.remove(J))}get _tooltipInfo(){const{drawOperation:e}=this;if(!e)return null;switch(this.geometryType){case"point":return this._drawPointTooltipInfo;case"polyline":return this._drawPolylineTooltipInfo;case"polygon":return this._drawPolygonTooltipInfo;case"rectangle":return this._drawRectangleTooltipInfo;case"circle":return this._drawCircleTooltipInfo;default:return null}}get _drawPointTooltipInfo(){const e=Ze(this.graphic,t=>t.geometry);return v(e)||e.type!=="point"||this.view.type==="2d"&&this.defaultZ===0?null:new k({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail})}get _drawPolylineTooltipInfo(){const e=this._createOperationGeometry,t=h(e)?e.full:null;if(v(t)||t.type!=="polyline")return null;const r=qe(t,this._elevationMode);return new G({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,totalLength:_(r,$),viewType:this.view.type})}get _drawPolygonTooltipInfo(){const e=this._createOperationGeometry,t=h(e)?e.full:null;if(v(t)||t.type!=="polygon")return null;const r=pe(t,this._elevationMode);return new z({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,area:_(r,E),viewType:this.view.type})}get _drawRectangleTooltipInfo(){return v(this.drawOperation)?null:new I({tooltipOptions:this.tooltipOptions,xSize:_(this._xSize,$),ySize:_(this._ySize,$),area:_(this._fullGeometryArea,E)})}get _drawCircleTooltipInfo(){if(v(this.drawOperation))return null;const e=this.forceUniformSize;return new b({tooltipOptions:this.tooltipOptions,radius:e?_(this._circleRadius,$):null,xSize:e?null:_(this._xSize,$),ySize:e?null:_(this._ySize,$),area:_(this._fullGeometryArea,E)})}get _circleRadius(){const e=this._createOperationGeometry;return h(e)&&h(e.circle)&&h(e.circle.center)&&h(e.circle.edge)?B(e.circle.center,e.circle.edge,this._elevationMode):null}get _xSize(){const e=this._createOperationGeometry;if(v(e)||v(e.rectangle))return null;const{midpoints:t}=e.rectangle;return h(t)?B(t.left,t.right,this._elevationMode):null}get _ySize(){const e=this._createOperationGeometry;if(v(e)||v(e.rectangle))return null;const{midpoints:t}=e.rectangle;return h(t)?B(t.top,t.bottom,this._elevationMode):null}get _fullGeometryArea(){const e=this._createOperationGeometry,t=h(e)?e.full:null;return v(t)||t.type!=="polygon"?null:pe(t,this._elevationMode)}get _elevationTooltipDetail(){return Z({mode:this.drawOperation.elevationInfo.mode},this._vertexTooltipElevation)}get _vertexTooltipElevation(){var n;const{tooltipOptions:e,view:t,drawOperation:r}=this;if(v(r))return this._defaultElevation;const l=(n=r.stagedVertex)!=null?n:r.lastVertex;if(v(l)||t.type==="2d")return this._defaultElevation;const p={mode:e.elevation.mode,offset:0},i=He(t,l,r.elevationInfo,p)*Ne(l.spatialReference);return se(i,"meters")}get _elevationMode(){return this.drawOperation.isDraped?"on-the-ground":"absolute-height"}};o([a()],s.prototype,"_createOperationGeometry",void 0),o([a()],s.prototype,"_defaultElevation",null),o([a({value:!0})],s.prototype,"centered",null),o([a({nonNullable:!0})],s.prototype,"defaultZ",void 0),o([a()],s.prototype,"drawOperation",void 0),o([a({value:!0})],s.prototype,"enabled",null),o([a({value:!0})],s.prototype,"forceUniformSize",null),o([a({constructOnly:!0})],s.prototype,"geometryType",void 0),o([a()],s.prototype,"graphic",null),o([a({constructOnly:!0})],s.prototype,"graphicProperties",void 0),o([a()],s.prototype,"graphicSymbol",null),o([a({constructOnly:!0})],s.prototype,"hasZ",void 0),o([a({constructOnly:!0,type:oe})],s.prototype,"labelOptions",void 0),o([a({constructOnly:!0})],s.prototype,"mode",void 0),o([a()],s.prototype,"snappingManager",void 0),o([a()],s.prototype,"snapToScene",void 0),o([a()],s.prototype,"tooltip",void 0),o([a({constructOnly:!0,type:re})],s.prototype,"tooltipOptions",void 0),o([a({readOnly:!0})],s.prototype,"type",void 0),o([a({readOnly:!0})],s.prototype,"updating",null),o([a({constructOnly:!0,nonNullable:!0})],s.prototype,"view",void 0),o([a()],s.prototype,"_tooltipInfo",null),o([a()],s.prototype,"_drawPointTooltipInfo",null),o([a()],s.prototype,"_drawPolylineTooltipInfo",null),o([a()],s.prototype,"_drawPolygonTooltipInfo",null),o([a()],s.prototype,"_drawRectangleTooltipInfo",null),o([a()],s.prototype,"_drawCircleTooltipInfo",null),o([a()],s.prototype,"_circleRadius",null),o([a()],s.prototype,"_xSize",null),o([a()],s.prototype,"_ySize",null),o([a()],s.prototype,"_fullGeometryArea",null),o([a()],s.prototype,"_elevationTooltipDetail",null),o([a()],s.prototype,"_vertexTooltipElevation",null),o([a()],s.prototype,"_elevationMode",null),s=o([P("esri.views.draw.DrawGraphicTool")],s);const J="create-operation-graphic",O={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"};function et(e){switch(e){case"point":case"polyline":case"polygon":case"multipoint":return e;case"circle":case"rectangle":return"segment";default:return null}}const ye=48;export{s as Z,et as q};
