var W=Object.defineProperty;var k=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var A=(t,e,i)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,b=(t,e)=>{for(var i in e||(e={}))H.call(e,i)&&A(t,i,e[i]);if(k)for(var i of k(e))Y.call(e,i)&&A(t,i,e[i]);return t};import{ez as C,ay as L,U as K,mB as S,hA as J,ag as Q,eg as G,A as I,E as X,mD as Z,bb as q,mM as ee,dO as B,mN as te,dQ as ie,aq as w,ar as x,as as ae}from"./vendor.f59460b9.js";import{b as D,g as se,d as re}from"./kmlUtils.c2c7dd6a.js";import{S as oe,T as ne,R as le}from"./Bitmap.3cb1ae16.js";import{a as pe}from"./BitmapContainer.8b19b6d1.js";import{y as he}from"./LayerView2D.4cbf4b16.js";import{i as M}from"./GraphicContainer.5a3358d3.js";import{o as T}from"./BaseGraphicContainer.c8b13bec.js";import{u as me}from"./LayerView.62cad0ec.js";import{C as ce,$ as de}from"./rasterProjectionHelper.ceea0a66.js";import{a as ge,e as ue}from"./WGLContainer.36a5457c.js";import{y as _e,o as fe}from"./RenderingContext.33d6d61e.js";import{P as R,G as E,D as N,L as O,Y as ye,V as we,f as z}from"./enums.2d9e6f64.js";import{x as be}from"./VertexArrayObject.aedfa412.js";import{E as F}from"./Texture.68429d95.js";import"./utils.2943fe63.js";import"./Utils.d99d4263.js";import"./number.30628ef2.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.a0e626ef.js";import"./alignmentUtils.6849a0a8.js";import"./definitions.d3c1cadf.js";import"./cimAnalyzer.c46e6e24.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./callExpressionWithFeature.837acd5e.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.48a1a1fe.js";import"./normalizeUtilsSync.b6097452.js";import"./FeatureContainer.b77d10e5.js";import"./TileContainer.2ecf5cfc.js";import"./visualVariablesUtils.5c61b68c.js";import"./visualVariablesUtils.ba4abc49.js";import"./Matcher.edc1d648.js";import"./tileUtils.387e3a42.js";import"./TileClipper.9925b336.js";import"./Geometry.d049a63c.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./ExpandedCIM.8408bb4d.js";import"./devEnvironmentUtils.d8d0484c.js";import"./schemaUtils.fd351f45.js";import"./createSymbolSchema.649358ad.js";import"./util.9cd692f9.js";import"./ComputedAttributeStorage.f4c73f1f.js";import"./centroid.b73c73db.js";import"./vec3f32.1121a836.js";import"./pixelUtils.2345058e.js";import"./vec4f32.f3b49d2e.js";import"./ProgramTemplate.58a17754.js";import"./StyleDefinition.32daf7f5.js";import"./config.82550349.js";import"./programUtils.0e1f8413.js";import"./NestedMap.6f8cbc5c.js";import"./OrderIndependentTransparency.9f3f7312.js";class h{constructor(e){if(e)this._ownsRctx=!1,this._rctx=e;else{if(h._instance)return h._instanceRefCount++,h._instance;h._instanceRefCount=1,h._instance=this,this._ownsRctx=!0;const a=document.createElement("canvas").getContext("webgl");a.getExtension("OES_texture_float"),this._rctx=new _e(a,{})}const i={applyProjection:!0,bilinear:!1,bicubic:!1},r=fe("raster/reproject","raster/reproject",new Map([["a_position",0]]),i);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ge(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(e,i,r=!1){const a=C(e.extent,i),s=new L({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),{x:o,y:m}=ce(s,i,e.extent);let p=(o+m)/2;const n=Math.round((a.xmax-a.xmin)/p),c=Math.round((a.ymax-a.ymin)/p);p=(a.width/n+a.height/c)/2;const V=new L({x:p,y:p,spatialReference:a.spatialReference}),f=de({projectedExtent:a,srcBufferExtent:e.extent,pixelSize:V,hasWrapAround:!0,spacing:[16,16]}),y=ue(this._rctx,f),g=new F(this._rctx,{width:n,height:c,pixelFormat:R.RGBA,dataType:E.UNSIGNED_BYTE,wrapMode:N.CLAMP_TO_EDGE,samplingMode:O.LINEAR,hasMipmap:!1}),l=new be(this._rctx,{colorTarget:ye.TEXTURE,depthStencilTarget:we.NONE,width:n,height:c},g);if(this._rctx.bindFramebuffer(l),this._rctx.setViewport(0,0,n,c),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(y,1),this._quad.bind(),this._program.setUniform2f("u_srcImageSize",e.texture.descriptor.width,e.texture.descriptor.height),this._program.setUniform2fv("u_transformSpacing",f.spacing),this._program.setUniform2fv("u_transformGridSize",f.size),this._program.setUniform2f("u_targetImageSize",n,c),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),y.dispose(),r){const u=new ImageData(l.descriptor.width,l.descriptor.height);return l.readPixels(0,0,l.descriptor.width,l.descriptor.height,R.RGBA,E.UNSIGNED_BYTE,u.data),l.detachColorTexture(z.COLOR_ATTACHMENT0),l.dispose(),{texture:g,extent:a,imageData:u}}return l.detachColorTexture(z.COLOR_ATTACHMENT0),l.dispose(),{texture:g,extent:a}}reprojectBitmapData(e,i){const r=oe(e.bitmapData)?ne(e.bitmapData):e.bitmapData,a=new F(this._rctx,{width:e.bitmapData.width,height:e.bitmapData.height,pixelFormat:R.RGBA,dataType:E.UNSIGNED_BYTE,wrapMode:N.CLAMP_TO_EDGE,samplingMode:O.LINEAR,hasMipmap:!1},r),s=this.reprojectTexture({texture:a,extent:e.extent},i,!0);s.texture.dispose();const o=document.createElement("canvas");return o.width=s.imageData.width,o.height=s.imageData.height,o.getContext("2d").putImageData(s.imageData,0,0),{bitmapData:o,extent:s.extent}}async loadAndReprojectBitmapData(e,i,r){const a=(await K(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const o=s.getContext("2d");o.drawImage(a,0,0);const m=o.getImageData(0,0,s.width,s.height);if(i.spatialReference.equals(r))return{bitmapData:m,extent:i};const p=this.reprojectBitmapData({bitmapData:m,extent:i},r);return{bitmapData:p.bitmapData,extent:p.extent}}destroy(){this._ownsRctx?(h._instanceRefCount--,h._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())}}h._instanceRefCount=0;class ${constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends he(me){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new pe,this._kmlVisualData=new $,this.allVisiblePoints=new S,this.allVisiblePolylines=new S,this.allVisiblePolygons=new S,this.allVisibleMapImages=new J}async hitTest(t,e){var r,a,s;const i=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(t),(a=this._polylinesView)==null?void 0:a.hitTest(t),(s=this._polygonsView)==null?void 0:s.hitTest(t)].flat().filter(Boolean).map(o=>(o.layer=i,o.sourceLayer=i,{type:"graphic",graphic:o,layer:i,mapPoint:t}))}update(t){this._polygonsView&&this._polygonsView.processUpdate(t),this._polylinesView&&this._polylinesView.processUpdate(t),this._pointsView&&this._pointsView.processUpdate(t)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new T({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new T({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new T({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",t=>{t.added.forEach(e=>this._addMapImage(e)),t.removed.forEach(e=>this._removeMapImage(e))}),Q(()=>this.layer.visibleSublayers,t=>{for(const[e,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const e of t){const i=this._kmlVisualData.allSublayers.get(e.id);i&&(i.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new h}detach(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null),this._imageReprojector&&(this._imageReprojector.destroy(),this._imageReprojector=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(t){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(t.href,G.fromJSON(t.extent),this.view.spatialReference).then(e=>{const i=new le(e.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});i.x=e.extent.xmin,i.y=e.extent.ymax,i.resolution=e.extent.width/e.bitmapData.width,i.rotation=t.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(t,i)})}async _getViewDependentUrl(t,e){const{viewFormat:i,viewBoundScale:r,httpQuery:a}=t;if(I(i)){if(X(e))throw new Error("Loading this network link requires a view state.");let s;if(await Z(),I(r)&&r!==1){const _=new G(e.extent);_.expand(r),s=_}else s=e.extent;s=C(s,q.WGS84);const o=C(s,q.WebMercator),m=s.xmin,p=s.xmax,n=s.ymin,c=s.ymax,V=e.size[0]*e.pixelRatio,f=e.size[1]*e.pixelRatio,y=Math.max(o.width,o.height),g={"[bboxWest]":m.toString(),"[bboxEast]":p.toString(),"[bboxSouth]":n.toString(),"[bboxNorth]":c.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":y.toString(),"[lookatTilt]":"0","[lookatHeading]":e.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":y.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":V.toString(),"[vertPixels]":f.toString(),"[terrainEnabled]":"0","[clientVersion]":ee,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},l=_=>{for(const U in _)for(const P in g)_[U]=_[U].replace(P,g[P])},u=B(i);l(u);let j={};I(a)&&(j=B(a),l(j));const v=te(t.href);return v.query=b(b(b({},v.query),u),j),`${v.path}?${ie(u)}`}return t.href}async _fetchService(t){const e=new $;await this._loadVisualData(this.layer.url,e,t),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(t=>this._isSublayerVisible(t.sublayerId)).map(({item:t})=>t)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(t=>this._isSublayerVisible(t.sublayerId)).map(({item:t})=>t)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(t=>this._isSublayerVisible(t.sublayerId)).map(({item:t})=>t)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(t=>this._isSublayerVisible(t.sublayerId)).map(({item:t})=>t))}_isSublayerVisible(t){const e=this._kmlVisualData.allSublayers.get(t);return!!e.visibility&&(e.parentFolderId===-1||this._isSublayerVisible(e.parentFolderId))}_loadVisualData(t,e,i){return this._fetchParsedKML(t,i).then(async r=>{for(const a of r.sublayers){e.allSublayers.set(a.id,a);const s=a.points?await D(a.points):[],o=a.polylines?await D(a.polylines):[],m=a.polygons?await D(a.polygons):[],p=a.mapImages||[];if(e.allPoints.push(...s.map(n=>({item:n,sublayerId:a.id}))),e.allPolylines.push(...o.map(n=>({item:n,sublayerId:a.id}))),e.allPolygons.push(...m.map(n=>({item:n,sublayerId:a.id}))),e.allMapImages.push(...p.map(n=>({item:n,sublayerId:a.id}))),a.networkLink){const n=await this._getViewDependentUrl(a.networkLink,this.view.state);await this._loadVisualData(n,e,i)}}})}_fetchParsedKML(t,e){return se(t,this.layer.spatialReference,this.layer.refreshInterval,e).then(i=>re(i.data))}_removeMapImage(t){const e=this._bitmapIndex.get(t);e&&(this._mapImageContainer.removeChild(e),this._bitmapIndex.delete(t))}};w([x()],d.prototype,"_pointsView",void 0),w([x()],d.prototype,"_polylinesView",void 0),w([x()],d.prototype,"_polygonsView",void 0),w([x()],d.prototype,"updating",void 0),d=w([ae("esri.views.2d.layers.KMLLayerView2D")],d);const Vt=d;export{Vt as default};
