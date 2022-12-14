import{A as h,em as u,hA as y,ag as p,ah as n,fV as j,E as w,aq as b,as as _}from"./vendor.f59460b9.js";import{i as V}from"./utils.2943fe63.js";import{r as v}from"./GroupContainer.89cbcc8f.js";import{y as C}from"./LayerView2D.4cbf4b16.js";import{i as d}from"./GraphicContainer.5a3358d3.js";import{o as m}from"./BaseGraphicContainer.c8b13bec.js";import{u as U}from"./LayerView.62cad0ec.js";import"./Utils.d99d4263.js";import"./number.30628ef2.js";import"./enums.2d9e6f64.js";import"./Texture.68429d95.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.a0e626ef.js";import"./alignmentUtils.6849a0a8.js";import"./definitions.d3c1cadf.js";import"./WGLContainer.36a5457c.js";import"./pixelUtils.2345058e.js";import"./VertexArrayObject.aedfa412.js";import"./vec4f32.f3b49d2e.js";import"./ProgramTemplate.58a17754.js";import"./StyleDefinition.32daf7f5.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./cimAnalyzer.c46e6e24.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./callExpressionWithFeature.837acd5e.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.48a1a1fe.js";import"./normalizeUtilsSync.b6097452.js";import"./FeatureContainer.b77d10e5.js";import"./TileContainer.2ecf5cfc.js";import"./visualVariablesUtils.5c61b68c.js";import"./visualVariablesUtils.ba4abc49.js";import"./Matcher.edc1d648.js";import"./tileUtils.387e3a42.js";import"./TileClipper.9925b336.js";import"./Geometry.d049a63c.js";import"./ExpandedCIM.8408bb4d.js";import"./devEnvironmentUtils.d8d0484c.js";import"./schemaUtils.fd351f45.js";import"./createSymbolSchema.649358ad.js";import"./util.9cd692f9.js";import"./ComputedAttributeStorage.f4c73f1f.js";import"./centroid.b73c73db.js";import"./vec3f32.1121a836.js";const g="sublayers",c="layerView",G=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends C(U){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new v}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),e=>e.hitTest(i).filter(t=>!!t.popupTemplate)).flat()}*graphicsViews(){h(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():h(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,e){return Array.from(this.graphicsViews(),t=>{const r=t.hitTest(i);if(h(this._graphicsViewsFeatureCollectionMap)){const a=this._graphicsViewsFeatureCollectionMap.get(t);for(const s of r)!s.popupTemplate&&a.popupTemplate&&(s.popupTemplate=a.popupTemplate),s.sourceLayer=s.layer=this.layer}return r}).flat().map(t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:i}))}highlight(i){let e;return typeof i=="number"?e=[i]:i instanceof u?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(t=>t&&t.uid):y.isCollection(i)&&(e=i.map(t=>t&&t.uid).toArray()),e=e.filter(t=>t!=null),e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):G}update(i){for(const e of this.graphicsViews())e.processUpdate(i)}attach(){const i=this.view,e=()=>this.requestUpdate(),t=this.layer.featureCollections;if(h(t)&&t.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of t){const a=new d(this.view.featuresTilingScheme),s=new m({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:e,container:a});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([p(()=>r.visible,o=>s.container.visible=o,n),p(()=>s.updating,()=>this.notifyChange("updating"),n)],c)}this._updateHighlight()}else h(this.layer.sublayers)&&this.handles.add(j(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),g)}detach(){this._destroyGraphicsViews(),this.handles.remove(g)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(c);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),w(this.layer.sublayers))return;const i=[],e=this.view,t=()=>this.requestUpdate();for(const r of this.layer.sublayers){const a=new V,s=new d(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const o=new m({view:e,graphics:r.graphics,requestUpdateCallback:t,container:s});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),p(()=>r.visible,f=>o.container.visible=f,n),p(()=>o.updating,()=>this.notifyChange("updating"),n)],c),a.addChild(o.container),this.container.addChild(a),i.push(o)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;t===0?this._highlightIds.delete(e):this._highlightIds.set(e,t)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const e of this.graphicsViews())e.setHighlight(i)}};l=b([_("esri.views.2d.layers.MapNotesLayerView2D")],l);const bi=l;export{bi as default};
