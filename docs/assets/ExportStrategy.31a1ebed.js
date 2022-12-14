import{aQ as b,cN as z,aq as d,ar as m,as as W,ao as E,ee as R,W as S,aP as N,bc as $,et as H,m1 as P,mw as q,m5 as T}from"./vendor.f59460b9.js";import{R as j}from"./Bitmap.3cb1ae16.js";const B=Math.PI/180;function C(e){return e*B}function I(e,i){const s=C(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[o,h]=i.size;return e[0]=Math.round(h*r+o*t),e[1]=Math.round(h*t+o*r),e}function O(e,i,s,t){const[r,o]=i,[h,a]=t,l=.5*s;return e[0]=r-l*h,e[1]=o-l*a,e[2]=r+l*h,e[3]=o+l*a,e}const u=b(),c=[0,0],w=new z(0,0,0,0),f={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let p=class extends E{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=f.hidpi,this.imageMaxWidth=f.imageMaxWidth,this.imageMaxHeight=f.imageMaxHeight,this.imageRotationSupported=f.imageRotationSupported,this.imageNormalizationSupported=f.imageNormalizationSupported,this.update=R(async(i,s)=>{if(S(s),!i.stationary||this.destroyed)return;const t=i.state,r=N(t.spatialReference),o=this.hidpi?i.pixelRatio:1,h=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0];h?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):I(c,t);const a=Math.floor(c[0]*o)>this.imageMaxWidth||Math.floor(c[1]*o)>this.imageMaxHeight,l=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),x=!this.imageNormalizationSupported&&l,y=!a&&!x,M=this.imageRotationSupported?t.rotation:0,_=this.container.children.slice();if(y){const n=h?t.paddedViewState.center:t.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(t,c,n,t.resolution,M,o,s)}else{let n=Math.min(this.imageMaxWidth,this.imageMaxHeight);x&&(n=Math.min(t.worldScreenWidth,n)),this._imagePromise=this._tiledExport(t,n,o,s)}try{const n=await this._imagePromise;S(s);const v=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=n!=null?n:[];for(const g of _)n.includes(g)||v.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of n)v.push(g.fadeIn());await Promise.all(v)}catch(n){this._imagePromise=null,$(n)}},5e3),this.updateExports=R(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=H(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,o){const h=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:o});S(o);const a=new j(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=r,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(h,o),S(o),a}async _singleExport(e,i,s,t,r,o,h){O(u,s,t,i);const a=P(u,e.spatialReference);return[await this._export(a,i[0],i[1],r,o,h)]}_tiledExport(e,i,s,t){const r=q.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new T(r),h=o.getTileCoverage(e);if(!h)return null;const a=[];return h.forEach((l,x,y,M)=>{w.set(l,x,y,0),o.getTileBounds(u,w);const _=P(u,e.spatialReference);a.push(this._export(_,i,i,0,s,t).then(n=>(M!==0&&(w.set(l,x,y,M),o.getTileBounds(u,w),n.x=u[0],n.y=u[3]),n)))}),Promise.all(a)}};d([m()],p.prototype,"_imagePromise",void 0),d([m()],p.prototype,"bitmaps",void 0),d([m()],p.prototype,"container",void 0),d([m()],p.prototype,"fetchSource",void 0),d([m()],p.prototype,"hidpi",void 0),d([m()],p.prototype,"imageMaxWidth",void 0),d([m()],p.prototype,"imageMaxHeight",void 0),d([m()],p.prototype,"imageRotationSupported",void 0),d([m()],p.prototype,"imageNormalizationSupported",void 0),d([m()],p.prototype,"requestUpdate",void 0),d([m()],p.prototype,"updating",null),p=d([W("esri.views.2d.layers.support.ExportStrategy")],p);const Q=p;export{Q as v};
