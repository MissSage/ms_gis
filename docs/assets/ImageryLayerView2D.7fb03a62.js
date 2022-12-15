var I=Object.defineProperty,M=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var V=(e,t,i)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,S=(e,t)=>{for(var i in t||(t={}))G.call(t,i)&&V(e,i,t[i]);if(E)for(var i of E(t))L.call(t,i)&&V(e,i,t[i]);return e},$=(e,t)=>M(e,O(t));import{aD as a,aE as o,aF as w,aB as U,a9 as _,K as j,ee as v,O as b,e6 as N,e8 as C,U as P,hJ as J,$ as H,at as g,eV as R,a1 as W,mY as K,Y as D,e4 as Y,aL as B,nh as Q,hU as T,hx as q}from"./vendor.ad8aa1ba.js";import{y as X,d as Z}from"./RasterVFDisplayObject.68be9c11.js";import{y as ee}from"./LayerView2D.dfaa8db6.js";import{o as te}from"./BaseGraphicContainer.fc5d4975.js";import{n as ie}from"./HighlightGraphicContainer.ebacff1d.js";import{A as re}from"./pixelUtils.62190471.js";import{a as se}from"./BitmapContainer.b79f1977.js";import{i as ae}from"./utils.baffb554.js";import{i as oe}from"./Bitmap.11b33ab6.js";import{v as ne}from"./ExportStrategy.c01fbce9.js";import{J as le}from"./rasterProjectionHelper.177984dc.js";import{x as he,d as pe}from"./dataUtils.8f217612.js";import{o as ce,d as de}from"./WGLContainer.af3d731a.js";import{I as F}from"./Utils.4c2feac4.js";import{s as me}from"./popupUtils.43e550b9.js";import{u as ue}from"./LayerView.e359e190.js";import{i as ye}from"./RefreshableLayerView.a566bbdb.js";import"./VertexArrayObject.6d35aaee.js";import"./Texture.22d23c43.js";import"./enums.2d9e6f64.js";import"./VertexElementDescriptor.1fdca6da.js";import"./cimAnalyzer.209d4429.js";import"./fontUtils.c3d9f30f.js";import"./BidiEngine.d8bba3fc.js";import"./alignmentUtils.6849a0a8.js";import"./definitions.d3c1cadf.js";import"./number.30628ef2.js";import"./Rect.95b0fd2e.js";import"./callExpressionWithFeature.ebb41fc5.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.cc457c75.js";import"./normalizeUtilsSync.b16e64df.js";import"./FeatureContainer.f0f5888c.js";import"./TileContainer.9a7cb2ee.js";import"./visualVariablesUtils.8e59fa54.js";import"./visualVariablesUtils.551507c0.js";import"./MaterialKey.6f6162d1.js";import"./Matcher.d6847bda.js";import"./tileUtils.eab69325.js";import"./TileClipper.51ce0e42.js";import"./Geometry.d049a63c.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./ExpandedCIM.a759c9e9.js";import"./schemaUtils.9f875565.js";import"./createSymbolSchema.85d3f514.js";import"./util.69d9a6e8.js";import"./ComputedAttributeStorage.23683ac7.js";import"./centroid.7be204a9.js";import"./vec3f32.1121a836.js";import"./vec4f32.f3b49d2e.js";import"./ProgramTemplate.83597331.js";import"./StyleDefinition.02cc41be.js";import"./config.82550349.js";let h=class extends U{constructor(){super(...arguments),this.attached=!1,this.container=new ae,this.updateRequested=!1,this.type="imagery",this._bitmapView=new se}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{_(t)||j.getLogger(this.declaredClass).error(t)})}hitTest(e){return new v({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ne({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{var r;if(e.source instanceof HTMLImageElement)return;const t=await this.layer.applyRenderer({extent:e.source.extent,pixelBlock:(r=e.source.originalPixelBlock)!=null?r:e.source.pixelBlock}),i=e.source;i.filter=s=>this.layer.pixelFilter?this.layer.applyFilter(s):$(S({},t),{extent:i.extent})}).catch(e=>{_(e)||j.getLogger(this.declaredClass).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(t)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=re(i,t);return b(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(e,t,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then(s=>s.imageOrCanvasElement?s.imageOrCanvasElement:this.layer.applyRenderer(s.pixelData,{signal:r.signal}).then(n=>{const l=new oe(n.pixelBlock,n.extent.clone(),s.pixelData.pixelBlock);return l.filter=u=>this.layer.applyFilter(u),l}))}};a([o()],h.prototype,"attached",void 0),a([o()],h.prototype,"container",void 0),a([o()],h.prototype,"layer",void 0),a([o()],h.prototype,"strategy",void 0),a([o()],h.prototype,"timeExtent",void 0),a([o()],h.prototype,"view",void 0),a([o()],h.prototype,"updateRequested",void 0),a([o()],h.prototype,"updating",null),a([o()],h.prototype,"type",void 0),h=a([w("esri.views.2d.layers.imagery.ImageryView2D")],h);const ge=h;class xe extends ce{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[de],target:()=>this.children,drawPhase:F.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===F.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends U{constructor(e){super(e),this.update=N((t,i)=>this._update(t,i).catch(r=>{_(r)||j.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,n=new C({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,u]=e.state.size;this._loading=this.fetchPixels(n,l,u,i);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(P(e.pixelBlock))return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,n=new X(s);n.offset=[0,0],n.symbolizerParameters=t,n.rawPixelData=e,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=s.width*t.symbolTileSize,n.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};a([o()],y.prototype,"fetchPixels",void 0),a([o()],y.prototype,"container",void 0),a([o()],y.prototype,"_loading",void 0),a([o()],y.prototype,"updating",null),y=a([w("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const we=y;let p=class extends J{constructor(){super(...arguments),this.attached=!1,this.container=new xe,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:u,height:c}=he(e,t,i,n,s);if(b(s)&&!s.intersects(e))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const m=this.getPixelData();if(b(m)&&`${m.extent.xmin}, ${m.extent.ymin}, ${m.extent.xmax}, ${m.extent.ymax}`===d.bbox)return m}const{pixelData:x}=await this.layer.fetchImage(l,u,c,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});return this._dataParameters=d,P(x.pixelBlock)?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?H(pe(x.pixelBlock,"vector-uv")):x.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new we({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(g(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),R),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return{extent:e,pixelBlock:t}}hitTest(e){return new v({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return await le(this.layer.fullExtent,e)}catch{try{const i=(await W(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?C.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([o()],p.prototype,"attached",void 0),a([o()],p.prototype,"container",void 0),a([o()],p.prototype,"layer",void 0),a([o()],p.prototype,"timeExtent",void 0),a([o()],p.prototype,"type",void 0),a([o()],p.prototype,"view",void 0),a([o()],p.prototype,"updating",null),p=a([w("esri.views.2d.layers.imagery.VectorFieldView2D")],p);const fe=p,ve=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:s}=this;if(!i)throw new D("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:n}=s,l=me(s,r);if(!n||P(l))throw new D("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const u=await l.getRequiredFields(),c=new Y;c.timeExtent=this.timeExtent,c.geometry=i,c.outFields=u,c.outSpatialReference=i.spatialReference;const d=this.view.resolution,x=this.view.type==="2d"?new B(d,d,this.view.spatialReference):new B(.5*d,.5*d,this.view.spatialReference),{returnTopmostRaster:m,showNoDataRecords:k}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},A={returnDomainValues:!0,returnTopmostRaster:m,pixelSize:x,showNoDataRecords:k,signal:b(r)?r.signal:null};return s.queryVisibleRasters(c,A).then(z=>z)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)==null?void 0:i.isEmpty)}};return a([o()],t.prototype,"layer",void 0),a([o()],t.prototype,"suspended",void 0),a([o(K)],t.prototype,"timeExtent",void 0),a([o()],t.prototype,"view",void 0),t=a([w("esri.views.layers.ImageryLayerView")],t),t};let f=class extends ve(ye(ee(ue))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new Q,this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new te({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new ie(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([g(()=>{var e;return(e=this.layer.blendMode)!=null?e:"normal"},e=>this.subview.container.blendMode=e,R),g(()=>{var e;return(e=this.layer.effect)!=null?e:null},e=>this.subview.container.effect=e,R),g(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},T),g(()=>this.timeExtent,e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()},T),this.layer.on("redraw",()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()}),g(()=>this.layer.renderer,()=>this._setSubView())],"imagerylayerview-update")}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:q.isCollection(e)?e.getItemAt(0):e)instanceof v))return{remove:()=>{}};let i=[];return Array.isArray(e)||q.isCollection(e)?i=e.map(r=>r.clone()):e instanceof v&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:s}=this.subview;if(s===t)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new ge({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new fe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){(e==null?void 0:e.attached)&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};a([o()],f.prototype,"pixelData",null),a([o()],f.prototype,"subview",void 0),f=a([w("esri.views.2d.layers.ImageryLayerView2D")],f);const _t=f;export{_t as default};
