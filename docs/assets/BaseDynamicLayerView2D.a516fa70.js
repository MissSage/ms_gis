import{a9 as o,K as m,aD as a,aE as r,aF as p}from"./vendor.1bde3be2.js";import{a as n}from"./BitmapContainer.7555c21e.js";import{y as d}from"./LayerView2D.b171dcd0.js";import{v as h}from"./ExportStrategy.397ad86b.js";import{u as c}from"./LayerView.4356d8f0.js";import{i as j}from"./RefreshableLayerView.013b3b5b.js";import"./WGLContainer.8d2598e5.js";import"./enums.2d9e6f64.js";import"./pixelUtils.56448565.js";import"./utils.1743b4db.js";import"./Utils.7c0d2871.js";import"./number.30628ef2.js";import"./Texture.a39a8419.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.5374c489.js";import"./alignmentUtils.6849a0a8.js";import"./definitions.d3c1cadf.js";import"./VertexArrayObject.1a48ce00.js";import"./vec4f32.f3b49d2e.js";import"./ProgramTemplate.1787c8d6.js";import"./StyleDefinition.c6d6e64a.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./Bitmap.5488614e.js";let t=class extends j(d(c)){update(i){this._strategy.update(i).catch(e=>{o(e)||m.getLogger(this.declaredClass).error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new h({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([p("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const I=t;export{I as default};
