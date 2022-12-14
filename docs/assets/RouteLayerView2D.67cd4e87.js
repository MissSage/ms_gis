import{hA as p,mY as g,A as a,ah as u,E as f,ag as d,aq as l,ar as m,as as _}from"./vendor.f59460b9.js";import{b as y,h as w,O as j,g as b,f as v,a as G,D as M}from"./Stop.f2ac53c6.js";import{y as V}from"./LayerView2D.4cbf4b16.js";import{i as k}from"./GraphicContainer.5a3358d3.js";import{o as I}from"./BaseGraphicContainer.c8b13bec.js";import{u as U}from"./LayerView.62cad0ec.js";import"./utils.2943fe63.js";import"./Utils.d99d4263.js";import"./number.30628ef2.js";import"./enums.2d9e6f64.js";import"./Texture.68429d95.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.a0e626ef.js";import"./alignmentUtils.6849a0a8.js";import"./definitions.d3c1cadf.js";import"./cimAnalyzer.c46e6e24.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./callExpressionWithFeature.837acd5e.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.48a1a1fe.js";import"./normalizeUtilsSync.b6097452.js";import"./VertexArrayObject.aedfa412.js";import"./FeatureContainer.b77d10e5.js";import"./TileContainer.2ecf5cfc.js";import"./WGLContainer.36a5457c.js";import"./pixelUtils.2345058e.js";import"./vec4f32.f3b49d2e.js";import"./ProgramTemplate.58a17754.js";import"./StyleDefinition.32daf7f5.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./visualVariablesUtils.5c61b68c.js";import"./visualVariablesUtils.ba4abc49.js";import"./Matcher.edc1d648.js";import"./tileUtils.387e3a42.js";import"./TileClipper.9925b336.js";import"./Geometry.d049a63c.js";import"./ExpandedCIM.8408bb4d.js";import"./devEnvironmentUtils.d8d0484c.js";import"./schemaUtils.fd351f45.js";import"./createSymbolSchema.649358ad.js";import"./util.9cd692f9.js";import"./ComputedAttributeStorage.f4c73f1f.js";import"./centroid.b73c73db.js";import"./vec3f32.1121a836.js";const C=Object.freeze({remove(){},pause(){},resume(){}}),F=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],o={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof y||t instanceof w||t instanceof j||t instanceof b||t instanceof v||t instanceof G||t instanceof M}function A(t){return p.isCollection(t)&&t.length&&c(t.getItemAt(0))}function H(t){return Array.isArray(t)&&t.length&&c(t[0])}let h=class extends V(U){constructor(){super(...arguments),this._graphics=new p,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new g({getCollections:()=>a(this.layer)&&!this.destroyed?[a(this.layer.routeInfo)?new p([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){var t;this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:H(t)?t.map(r=>this._getNetworkFeatureUid(r)):A(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(a);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):C}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(a).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new k(t.featuresTilingScheme);this._graphicsView=new I({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return F.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.handles.remove(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return f(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(a));for(const e of t.added)this.handles.add([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const n=this._createGraphic(t);return this._networkFeatureMap.set(t,n),this._networkGraphicMap.set(n,t),void this._graphics.add(n)}const s=this._networkFeatureMap.get(t);s[e]=i,o.graphic=s,o.property=e,o.oldValue=r,o.newValue=i,this._graphicsView.graphicUpdateHandler(o)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};l([m()],h.prototype,"_graphics",void 0),l([m()],h.prototype,"_routeItems",null),h=l([_("esri.views.2d.layers.RouteLayerView2D")],h);const kt=h;export{kt as default};
