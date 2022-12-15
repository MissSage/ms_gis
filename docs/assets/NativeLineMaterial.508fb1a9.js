var vn=Object.defineProperty,_n=Object.defineProperties;var yn=Object.getOwnPropertyDescriptors;var qs=Object.getOwnPropertySymbols;var Sn=Object.prototype.hasOwnProperty,xn=Object.prototype.propertyIsEnumerable;var Xs=(r,e,t)=>e in r?vn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,kr=(r,e)=>{for(var t in e||(e={}))Sn.call(e,t)&&Xs(r,t,e[t]);if(qs)for(var t of qs(e))xn.call(e,t)&&Xs(r,t,e[t]);return r},Zs=(r,e)=>_n(r,yn(e));import{bK as wn,ii as wr,O as C,g1 as q,f_ as X,gE as ce,ij as Tn,ga as Ge,h0 as Ot,eK as Js,ik as Vi,U as j,fq as nt,fI as qr,fN as z,aP as Ut,g6 as On,ai as U,il as Cn,hO as Vt,ag as I,ap as Qs,im as Re,aZ as Ys,eA as bn,fJ as te,fK as Be,g2 as se,f$ as Ye,fL as ee,fM as Ke,aJ as W,g4 as An,gW as Rn,g9 as Pn,aD as v,V as Le,io as Hi,gB as Tr,g5 as We,bO as k,ax as Ht,ip as Ks,K as Or,aX as Gt,fz as lt,iq as ae,fC as Xr,aI as et,X as ct,ir as Zr,gO as Pe,gY as Dn,is as En,gz as Gi,it as In,iu as $n,c5 as Mn,gQ as Ln,b1 as Bt,iv as Nn,iw as Fn,ih as zn,hu as jn,ix as Un,iy as Vn,dI as Hn,iz as Gn,iA as Bn,iB as Wn,gT as kn,gC as Jr,iC as qn,h9 as Xn,iD as Zn,a8 as Jn,iE as Qn,iF as Yn,ab as Ct,h6 as Kn,aT as Q,M as Qr,g7 as dt,gU as ea,h8 as Wt,gV as el,h5 as Bi,gi as kt,an as Wi,iG as tl,h1 as rl,iH as il,iI as sl,iJ as re,iK as ta,iL as al,iM as Yr,ad as ol,gb as ht,gf as Kr,iN as nl,iO as ll,iP as cl,iQ as dl,iR as hl,iS as ra,gd as Cr,ge as ia,iT as ul,iU as sa,iV as aa,iW as pl,iX as oa,iY as fl,aO as gl,g3 as qt,iZ as bt,hI as ml,i_ as na,fZ as la,gg as vl,i$ as ca,j0 as _l,j1 as yl,aR as At,fW as Xt,fX as br,fT as da,gh as Zt,ic as pe,j2 as Sl,fV as ha,j3 as Jt,j4 as ei,gc as xl,j5 as ki,j6 as wl,a6 as Tl,j7 as Ol,j8 as Cl,j9 as bl,ja as Al,jb as Rl,jc as ut,aE as ze,aF as ua,aB as pa,$ as Pl,at as qi,eV as fa,fR as Dl,jd as El,g8 as Il,je as Xi,jf as $l,jg as ga,gm as Ml}from"./vendor.ad8aa1ba.js";import{r as oe,n as Y,t as ma}from"./vec3f32.1121a836.js";import{u as Zi,i as Ji,g as ti,o as K,W as ke,c as Ar,A as ri,l as Qi,b as Qt,E as va,_ as tt,d as Ll,a as Nl,h as Fl,e as _a,n as Yi,S as ya,j as Sa,O as zl,f as xa}from"./OrderIndependentTransparency.9f3f7312.js";import{X as wa,v as Ta,Y as Ki,Z as es,w as De,j as S,z as w,J as Yt,o as H,e as Kt,c as m,_ as ii,$ as Rr,a0 as Oa,p as jl,a1 as ts,y as rs,a2 as si,a3 as Ca,a4 as Ul,m as Te,L as Vl,d as Pr,a5 as Hl,a6 as ba,a7 as is,F as Dr,g as er,b as pt,a8 as Aa,a9 as Gl,H as ss,C as ft,D as ai,I as Ne,h as tr,i as rr,T as oi,U as ni,V as as,aa as Ra,ab as Bl,ac as Wl,ad as kl,ae as Pa,q as V,t as ir,K as Er,s as gt,af as li,x as Da,N as ci,ag as ql,ah as Ea,f as Rt,ai as Xl,G as Zl,aj as Ia,a as os,ak as Jl,al as Ql,am as Yl,R as $a,an as di,E as Ir,ao as Kl,ap as ec,aq as tc,ar as Ma,as as rc,W as ic,at as sc,Q as ac,au as oc,av as nc,aw as La,ax as lc,P as Na,A as ns,ay as Fa,az as cc,M as za,O as ls,k as ja,aA as cs,aB as dc,aC as hc,aD as Ua,aE as uc,aF as pc,aG as fc,aH as ds,aI as Va,aJ as Ha,aK as gc,aL as mc,aM as vc,aN as _c,aO as Ga,aP as yc,aQ as Sc,r as xc,aR as wc,aS as Tc,aT as Oc,aU as Cc,aV as bc,aW as Ac,u as Rc,aX as Pc,aY as Dc}from"./SSAOHelper.cd612d32.js";import{u as Ec}from"./Indices.b7b3c3c0.js";import{O as u}from"./VertexAttribute.42396f25.js";import{x as Ic,i as $c,u as Mc}from"./BufferView.9753ca35.js";import{T as mt}from"./InterleavedLayout.b9319e73.js";import{P as sr,G as $r,D as ar,E as or,R as qe,I as Lc,Y as Ba,V as Wa,M as Mr,L as hi,_ as ui,F as Nc}from"./enums.2d9e6f64.js";import{c as pi,l as ka}from"./triangulationUtils.2a6db60e.js";import{x as qa,u as Fc,E as zc,n as jc}from"./VertexArrayObject.6d35aaee.js";import{t as Xa}from"./NestedMap.6f8cbc5c.js";import{G as Uc,U as vt,H as Vc,u as Hc,b as Gc}from"./Octree.1d4da908.js";import{v as fi,M as Za,b as nr,k as Ja}from"./lineSegment.bfe799ff.js";import{o as Qa}from"./floatRGBA.cc457c75.js";import{E as lr}from"./Texture.22d23c43.js";import"./boundedPlane.49c502fd.js";import{o as Bc}from"./glUtil.b02793dc.js";class gi{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,i,s,o,a){this.id=wr(),this.geometry=e,this.material=t,this.transformation=i,this.instanceParameters=s,this.origin=o,this._shaderTransformation=a,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return C(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(q(e,e,this.getStaticTransformation()),!0)}}gi.pool=new wn(gi);class hs{constructor(e){this.channel=e,this.id=wr()}}class Wc extends wa{constructor(e={}){super(),this.type=Ta.Object,this._geometryRecords=new Array,this._geometries=new Array,this._objectTransformation=X(),this._bvObjectSpace=new Ka,this._bvWorldSpace=new Ka,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.castShadow=e.castShadow==null||e.castShadow,this.metadata=e.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new Ya);const{geometries:t,materials:i,transformations:s,origins:o}=e;if(Array.isArray(t)){ce(i.length===t.length,"Object3D: materials don't match geometries"),ce(s.length===t.length,"Object3D: transformations don't match geometries"),this._geometryRecords.length=t.length,this._geometries.length=t.length;for(let a=0;a<t.length;a++)this._geometries[a]=t[a],this._geometryRecords[a]=gi.pool.acquire(t[a],i[a],Tn(s[a]),{highlights:null,occludees:null,visible:this._visible},o&&o[a])}}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get transformation(){return this._objectTransformation}set transformation(e){Ge(this._objectTransformation,e),this._invalidateBoundingVolume(),this._emit("objectTransformation",this)}dispose(){this._geometryRecords.length=0,this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){ce(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e,t,i,s,o){i=i||Vt,this._geometries.push(e);const a=gi.pool.acquire(e,t,i,{highlights:null,occludees:null,visible:this._visible},s,o);return this._geometryRecords.push(a),this._hasVolatileTransformation=this._hasVolatileTransformation||C(a.shaderTransformation),this._emit("objectGeometryAdded",{object:this,record:a}),this._invalidateBoundingVolume(),a}removeGeometry(e){const t=this._geometryRecords.splice(e,1)[0];return this._hasVolatileTransformation=C(t.shaderTransformation)?this._geometryRecords.some(i=>C(i.shaderTransformation)):this._hasVolatileTransformation,t.dispose(),this._geometries.splice(e,1),this._emit("objectGeometryRemoved",{object:this,record:t}),this._invalidateBoundingVolume(),t}removeAllGeometries(){for(;this.geometryRecords.length>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(e){this._emit("vertexAttrsUpdated",{object:this,record:e}),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometryRecords)t.instanceParameters.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new hs(Zi.MaskOccludee);for(const t of this._geometryRecords)t.instanceParameters.occludees=Ki(t.instanceParameters.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometryRecords)t.instanceParameters.occludees=es(t.instanceParameters.occludees,e);this._emit("occlusionChanged",this)}highlight(){const e=new hs(Zi.Highlight);for(const t of this._geometryRecords)t.instanceParameters.highlights=Ki(t.instanceParameters.highlights,e);return this._emit("highlightChanged",this),e}removeHighlight(e){for(const t of this._geometryRecords)t.instanceParameters.highlights=es(t.instanceParameters.highlights,e);this._emit("highlightChanged",this)}getCombinedStaticTransformation(e,t){return Ot(t,this.transformation,e.getStaticTransformation())}_getCombinedShaderTransformation(e){return Ot(X(),this.transformation,e.getShaderTransformation())}hasVolativeTransformation(){return this._hasVolatileTransformation}get boundingVolumeWorldSpace(){return this._validateBoundingVolume(),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._validateBoundingVolume(),this._bvObjectSpace}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let s=0;s<this._geometryRecords.length;++s){const o=this._geometries[s],a=this._geometryRecords[s],n=o.boundingInfo;C(n)&&(this._calculateTransformedBoundingVolume(n,this._bvObjectSpace,a.getShaderTransformation()),this._calculateTransformedBoundingVolume(n,this._bvWorldSpace,this._getCombinedShaderTransformation(a)))}Js(this._bvObjectSpace.bounds,this._bvObjectSpace.min,this._bvObjectSpace.max,.5),Js(this._bvWorldSpace.bounds,this._bvWorldSpace.min,this._bvWorldSpace.max,.5);const e=I(),t=I(),i=Vi(this.transformation);for(let s=0;s<this._geometryRecords.length;++s){const o=this._geometries[s].boundingInfo;if(j(o))continue;const a=this._geometryRecords[s].getShaderTransformation(),n=Vi(a);q(e,o.getCenter(),a);const l=nt(e,this._bvObjectSpace.bounds),c=o.getBSRadius()*n;this._bvObjectSpace.bounds[3]=Math.max(this._bvObjectSpace.bounds[3],l+c),q(t,e,this.transformation);const d=nt(t,this._bvWorldSpace.bounds),h=c*i;this._bvWorldSpace.bounds[3]=Math.max(this._bvWorldSpace.bounds[3],d+h)}this._bvDirty=!1}_calculateTransformedBoundingVolume(e,t,i){const s=e.getBBMin(),o=e.getBBMax(),a=qr(s),n=qr(o);q(a,a,i),q(n,n,i);for(let l=0;l<3;++l)t.min[l]=Math.min(t.min[l],a[l],n[l]),t.max[l]=Math.max(t.max[l],a[l],n[l]);for(let l=0;l<3;++l){z(a,s),z(n,o),a[l]=o[l],n[l]=s[l],q(a,a,i),q(n,n,i);for(let c=0;c<3;++c)t.min[c]=Math.min(t.min[c],a[c],n[c]),t.max[c]=Math.max(t.max[c],a[c],n[c])}}_invalidateBoundingVolume(){this._bvDirty=!0,C(this._parentLayer)&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace.bounds)}_emit(e,t){C(this._parentLayer)&&this._parentLayer.events.emit(e,t)}get test(){const e=this;return{hasGeometry:t=>e._geometries.includes(t),getGeometryIndex:t=>e._geometries.indexOf(t)}}}class Ya{constructor(){this.min=Ut(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Ut(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class Ka extends Ya{constructor(){super(...arguments),this.bounds=On()}init(){U(this.min,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),U(this.max,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),Cn(this.bounds)}}const kc=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","shaderTransformationChanged","objectTransformation","visibilityChanged","occlusionChanged","highlightChanged","objectGeometryAdded","objectGeometryRemoved","vertexAttrsUpdated"];class qc extends wa{constructor(e,t=""){var i,s,o;super(),this.apiLayerUid=t,this.type=Ta.Layer,this.events=new Qs,this.isSliceable=!1,this._objects=new Re,this._stageHandles=new Ys,this.apiLayerUid=t,this.isVisible=(i=e==null?void 0:e.isVisible)!=null?i:!0,this.isPickable=(s=e==null?void 0:e.isPickable)!=null?s:!0,this.updatePolicy=(o=e==null?void 0:e.updatePolicy)!=null?o:Ji.ASYNC}get objects(){return this._objects}destroy(){this.detachStage(),this._stage=null}attachStage(e){this.detachStage(),this._stage=e;for(const t of kc)this._stageHandles.add(this.events.on(t,i=>e.handleEvent(t,i)))}detachStage(){this._stageHandles.removeAll(),this.invalidateSpatialQueryAccelerator()}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),C(this._octree)&&this._octree.add([e])}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),C(this._octree)&&this._octree.remove([e]))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),C(this._octree)&&this._octree.add(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),t.length!==0){for(const i of t)i.parentLayer=null;this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),C(this._octree)&&this._octree.remove(t)}}sync(){C(this._stage)&&this.updatePolicy!==Ji.SYNC&&this._stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){C(this._octree)&&this._octree.update(e,t)}getSpatialQueryAccelerator(){return j(this._octree)&&this._objects.length>50&&this._createOctree(),this._octree}shaderTransformationChanged(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this)}invalidateSpatialQueryAccelerator(){this._octree=bn(this._octree)}_createOctree(){this._octree=new Uc(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)}}var us;(function(r){function e(a,n){const l=a[n],c=a[n+1],d=a[n+2];return Math.sqrt(l*l+c*c+d*d)}function t(a,n){const l=a[n],c=a[n+1],d=a[n+2],h=1/Math.sqrt(l*l+c*c+d*d);a[n]*=h,a[n+1]*=h,a[n+2]*=h}function i(a,n,l){a[n]*=l,a[n+1]*=l,a[n+2]*=l}function s(a,n,l,c,d,h=n){(d=d||a)[h]=a[n]+l[c],d[h+1]=a[n+1]+l[c+1],d[h+2]=a[n+2]+l[c+2]}function o(a,n,l,c,d,h=n){(d=d||a)[h]=a[n]-l[c],d[h+1]=a[n+1]-l[c+1],d[h+2]=a[n+2]-l[c+2]}r.length=e,r.normalize=t,r.scale=i,r.add=s,r.subtract=o})(us||(us={}));const cr=us;var ps,fs,gs;(function(r){const e=.5,t=[[-e,-e,e],[e,-e,e],[e,e,e],[-e,e,e],[-e,-e,-e],[e,-e,-e],[e,e,-e],[-e,e,-e]],i=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],s=[0,0,1,0,1,1,0,1],o=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],a=new Array(36);for(let c=0;c<6;c++)for(let d=0;d<6;d++)a[6*c+d]=c;const n=new Array(36);for(let c=0;c<6;c++)n[6*c+0]=0,n[6*c+1]=1,n[6*c+2]=2,n[6*c+3]=2,n[6*c+4]=3,n[6*c+5]=0;function l(c){Array.isArray(c)||(c=[c,c,c]);const d=new Array(24);for(let h=0;h<8;h++)d[3*h]=t[h][0]*c[0],d[3*h+1]=t[h][1]*c[1],d[3*h+2]=t[h][2]*c[2];return new De([[u.POSITION,{size:3,data:d,exclusive:!0}],[u.NORMAL,{size:3,data:i}],[u.UV0,{size:2,data:s}]],[[u.POSITION,o],[u.NORMAL,a],[u.UV0,n]])}r.createGeometry=l})(ps||(ps={})),function(r){const e=.5,t=[[-e,0,-e],[e,0,-e],[e,0,e],[-e,0,e],[0,-e,0],[0,e,0]],i=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],s=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],o=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function a(n){Array.isArray(n)||(n=[n,n,n]);const l=new Array(18);for(let c=0;c<6;c++)l[3*c]=t[c][0]*n[0],l[3*c+1]=t[c][1]*n[1],l[3*c+2]=t[c][2]*n[2];return new De([[u.POSITION,{size:3,data:l,exclusive:!0}],[u.NORMAL,{size:3,data:i}]],[[u.POSITION,s],[u.NORMAL,o]])}r.createGeometry=a}(fs||(fs={})),function(r){const e=.5,t=0,i=oe(-e,t,-e),s=oe(e,t,-e),o=oe(0,t,e),a=oe(0,t+e,0),n=Y(),l=Y(),c=Y(),d=Y(),h=Y();te(n,i,a),te(l,i,s),Be(c,n,l),se(c,c),te(n,s,a),te(l,s,o),Be(d,n,l),se(d,d),te(n,o,a),te(l,o,i),Be(h,n,l),se(h,h);const f=[i,s,o,a],p=[0,-1,0,c[0],c[1],c[2],d[0],d[1],d[2],h[0],h[1],h[2]],g=[0,1,2,3,1,0,3,2,1,3,0,2],_=[0,0,0,1,1,1,2,2,2,3,3,3];function T(y){Array.isArray(y)||(y=[y,y,y]);const x=new Array(12);for(let O=0;O<4;O++)x[3*O]=f[O][0]*y[0],x[3*O+1]=f[O][1]*y[1],x[3*O+2]=f[O][2]*y[2];return new De([[u.POSITION,{size:3,data:x,exclusive:!0}],[u.NORMAL,{size:3,data:p}]],[[u.POSITION,g],[u.NORMAL,_]])}r.createGeometry=T}(gs||(gs={}));const Dp=ps.createGeometry,Ep=fs.createGeometry,Ip=gs.createGeometry;function $p(r,e,t,i={uv:!0}){const s=-Math.PI,o=2*Math.PI,a=-Math.PI/2,n=Math.PI,l=Math.max(3,Math.floor(e)),c=Math.max(2,Math.floor(t)),d=(l+1)*(c+1),h=new Float32Array(3*d),f=new Float32Array(3*d),p=new Float32Array(2*d),g=[];let _=0;for(let O=0;O<=c;O++){const R=[],b=O/c,A=a+b*n,E=Math.cos(A);for(let L=0;L<=l;L++){const he=L/l,D=s+he*o,G=Math.cos(D)*E,ue=Math.sin(A),Ve=-Math.sin(D)*E;h[3*_]=G*r,h[3*_+1]=ue*r,h[3*_+2]=Ve*r,f[3*_]=G,f[3*_+1]=ue,f[3*_+2]=Ve,p[2*_]=he,p[2*_+1]=b,R.push(_),++_}g.push(R)}const T=new Array;for(let O=0;O<c;O++)for(let R=0;R<l;R++){const b=g[O][R],A=g[O][R+1],E=g[O+1][R+1],L=g[O+1][R];O===0?(T.push(b),T.push(E),T.push(L)):O===c-1?(T.push(b),T.push(A),T.push(E)):(T.push(b),T.push(A),T.push(E),T.push(E),T.push(L),T.push(b))}const y=[[u.POSITION,T],[u.NORMAL,T]],x=[[u.POSITION,{size:3,data:h,exclusive:!0}],[u.NORMAL,{size:3,data:f,exclusive:!0}]];return i.uv&&(x.push([u.UV0,{size:2,data:p,exclusive:!0}]),y.push([u.UV0,T])),i.offset&&(y[0][0]=u.OFFSET,x[0][0]=u.OFFSET,y.push([u.POSITION,new Array(T.length).fill(0)]),x.push([u.POSITION,{size:3,data:Float64Array.from(i.offset),exclusive:!0}])),new De(x,y)}function Mp(r,e,t){const i=r;let s,o;if(t)s=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],o=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const h=i*(1+Math.sqrt(5))/2;s=[-i,h,0,i,h,0,-i,-h,0,i,-h,0,0,-i,h,0,i,h,0,-i,-h,0,i,-h,h,0,-i,h,0,i,-h,0,-i,-h,0,i],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let h=0;h<s.length;h+=3)cr.scale(s,h,r/cr.length(s,h));let a={};function n(h,f){h>f&&([h,f]=[f,h]);const p=h.toString()+"."+f.toString();if(a[p])return a[p];let g=s.length;return s.length+=3,cr.add(s,3*h,s,3*f,s,g),cr.scale(s,g,r/cr.length(s,g)),g/=3,a[p]=g,g}for(let h=0;h<e;h++){const f=o.length,p=new Array(4*f);for(let g=0;g<f;g+=3){const _=o[g],T=o[g+1],y=o[g+2],x=n(_,T),O=n(T,y),R=n(y,_),b=4*g;p[b]=_,p[b+1]=x,p[b+2]=R,p[b+3]=T,p[b+4]=O,p[b+5]=x,p[b+6]=y,p[b+7]=R,p[b+8]=O,p[b+9]=x,p[b+10]=O,p[b+11]=R}o=p,a={}}const l=new Float32Array(s);for(let h=0;h<l.length;h+=3)cr.normalize(l,h);const c=[[u.POSITION,o],[u.NORMAL,o]],d=[[u.POSITION,{size:3,data:new Float32Array(s),exclusive:!0}],[u.NORMAL,{size:3,data:l,exclusive:!0}]];return new De(d,c)}function Lp(r,e,t,i,s,o,a,n){const l=e?[e[0],e[1],e[2]]:[0,0,0],c=r?[r[0],r[1],r[2]]:[0,0,1];o=o||[0,0];const d=t?[255*t[0],255*t[1],255*t[2],t.length>3?255*t[3]:255]:[255,255,255,255],h=i!=null&&i.length===2?i:[1,1],f=[[u.POSITION,{size:3,data:l,exclusive:!0}],[u.NORMAL,{size:3,data:c,exclusive:!0}],[u.UV0,{size:o.length,data:o}],[u.COLOR,{size:4,data:d,exclusive:!0}],[u.SIZE,{size:2,data:h}]];if(s!=null){const p=new Float32Array([s[0],s[1],s[2],s[3]]);f.push([u.AUXPOS1,{size:4,data:p}])}if(a!=null){const p=new Float32Array([a[0],a[1],a[2],a[3]]);f.push([u.AUXPOS2,{size:4,data:p}])}return new De(f,null,ti.Point,n)}function Np(r,e,t,i,s=!0,o=!0){let a=0;const n=e,l=r;let c=oe(0,a,0),d=oe(0,a+l,0),h=oe(0,-1,0),f=oe(0,1,0);i&&(a=l,d=oe(0,0,0),c=oe(0,a,0),h=oe(0,1,0),f=oe(0,-1,0));const p=[d,c],g=[h,f],_=t+2,T=Math.sqrt(l*l+n*n);if(i)for(let E=t-1;E>=0;E--){const L=E*(2*Math.PI/t),he=oe(Math.cos(L)*n,a,Math.sin(L)*n);p.push(he);const D=oe(l*Math.cos(L)/T,-n/T,l*Math.sin(L)/T);g.push(D)}else for(let E=0;E<t;E++){const L=E*(2*Math.PI/t),he=oe(Math.cos(L)*n,a,Math.sin(L)*n);p.push(he);const D=oe(l*Math.cos(L)/T,n/T,l*Math.sin(L)/T);g.push(D)}const y=new Array,x=new Array;if(s){for(let E=3;E<p.length;E++)y.push(1),y.push(E-1),y.push(E),x.push(0),x.push(0),x.push(0);y.push(p.length-1),y.push(2),y.push(1),x.push(0),x.push(0),x.push(0)}if(o){for(let E=3;E<p.length;E++)y.push(E),y.push(E-1),y.push(0),x.push(E),x.push(E-1),x.push(1);y.push(0),y.push(2),y.push(p.length-1),x.push(1),x.push(2),x.push(g.length-1)}const O=new Float32Array(3*_);for(let E=0;E<_;E++)O[3*E]=p[E][0],O[3*E+1]=p[E][1],O[3*E+2]=p[E][2];const R=new Float32Array(3*_);for(let E=0;E<_;E++)R[3*E]=g[E][0],R[3*E+1]=g[E][1],R[3*E+2]=g[E][2];const b=[[u.POSITION,y],[u.NORMAL,x]],A=[[u.POSITION,{size:3,data:O,exclusive:!0}],[u.NORMAL,{size:3,data:R,exclusive:!0}]];return new De(A,b)}function Fp(r,e,t,i,s,o){const a=i?ma(i):oe(1,0,0),n=s?ma(s):oe(0,0,0);o=o!=null?o:!0;const l=Y();se(l,a);const c=Y();W(c,l,Math.abs(r));const d=Y();W(d,c,-.5),ee(d,d,n);const h=oe(0,1,0);Math.abs(1-Ke(l,h))<.2&&U(h,0,0,1);const f=Y();Be(f,l,h),se(f,f),Be(h,f,l);const p=2*t+(o?2:0),g=t+(o?2:0),_=new Float32Array(3*p),T=new Float32Array(3*g),y=new Float32Array(2*p),x=new Array(3*t*(o?4:2)),O=new Array(3*t*(o?4:2));o&&(_[3*(p-2)+0]=d[0],_[3*(p-2)+1]=d[1],_[3*(p-2)+2]=d[2],y[2*(p-2)]=0,y[2*(p-2)+1]=0,_[3*(p-1)+0]=_[3*(p-2)+0]+c[0],_[3*(p-1)+1]=_[3*(p-2)+1]+c[1],_[3*(p-1)+2]=_[3*(p-2)+2]+c[2],y[2*(p-1)]=1,y[2*(p-1)+1]=1,T[3*(g-2)+0]=-l[0],T[3*(g-2)+1]=-l[1],T[3*(g-2)+2]=-l[2],T[3*(g-1)+0]=l[0],T[3*(g-1)+1]=l[1],T[3*(g-1)+2]=l[2]);const R=(D,G,ue)=>{x[D]=G,O[D]=ue};let b=0;const A=Y(),E=Y();for(let D=0;D<t;D++){const G=D*(2*Math.PI/t);W(A,h,Math.sin(G)),W(E,f,Math.cos(G)),ee(A,A,E),T[3*D+0]=A[0],T[3*D+1]=A[1],T[3*D+2]=A[2],W(A,A,e),ee(A,A,d),_[3*D+0]=A[0],_[3*D+1]=A[1],_[3*D+2]=A[2],y[2*D+0]=D/t,y[2*D+1]=0,_[3*(D+t)+0]=_[3*D+0]+c[0],_[3*(D+t)+1]=_[3*D+1]+c[1],_[3*(D+t)+2]=_[3*D+2]+c[2],y[2*(D+t)+0]=D/t,y[2*D+1]=1;const ue=(D+1)%t;R(b++,D,D),R(b++,D+t,D),R(b++,ue,ue),R(b++,ue,ue),R(b++,D+t,D),R(b++,ue+t,ue)}if(o){for(let D=0;D<t;D++){const G=(D+1)%t;R(b++,p-2,g-2),R(b++,D,g-2),R(b++,G,g-2)}for(let D=0;D<t;D++){const G=(D+1)%t;R(b++,D+t,g-1),R(b++,p-1,g-1),R(b++,G+t,g-1)}}const L=[[u.POSITION,x],[u.NORMAL,O],[u.UV0,x]],he=[[u.POSITION,{size:3,data:_,exclusive:!0}],[u.NORMAL,{size:3,data:T,exclusive:!0}],[u.UV0,{size:2,data:y,exclusive:!0}]];return new De(he,L)}function zp(r,e,t,i,s){t=t||10,i=i==null||i,ce(r.length>1);const o=[[0,0,0]],a=[],n=[];for(let l=0;l<t;l++){a.push([0,-l-1,-(l+1)%t-1]);const c=l/t*2*Math.PI;n.push([Math.cos(c)*e,Math.sin(c)*e])}return Xc(n,r,o,a,i,s)}function Xc(r,e,t,i,s,o=oe(0,0,0)){const a=r.length,n=new Float32Array(e.length*a*3+(6*t.length||0)),l=new Float32Array(e.length*a*3+(t?6:0)),c=new Array,d=new Array;let h=0,f=0;const p=Y(),g=Y(),_=Y(),T=Y(),y=Y(),x=Y(),O=Y(),R=I(),b=Y(),A=Y(),E=Y(),L=Y(),he=Y(),D=Ye();U(b,0,1,0),te(g,e[1],e[0]),se(g,g),s?(ee(R,e[0],o),se(_,R)):U(_,0,0,1),eo(g,_,b,b,y,_,to),z(T,_),z(L,y);for(let $=0;$<t.length;$++)W(x,y,t[$][0]),W(R,_,t[$][2]),ee(x,x,R),ee(x,x,e[0]),n[h++]=x[0],n[h++]=x[1],n[h++]=x[2];l[f++]=-g[0],l[f++]=-g[1],l[f++]=-g[2];for(let $=0;$<i.length;$++)c.push(i[$][0]>0?i[$][0]:-i[$][0]-1+t.length),c.push(i[$][1]>0?i[$][1]:-i[$][1]-1+t.length),c.push(i[$][2]>0?i[$][2]:-i[$][2]-1+t.length),d.push(0),d.push(0),d.push(0);let G=t.length;const ue=t.length-1;for(let $=0;$<e.length;$++){let Tt=!1;$>0&&(z(p,g),$<e.length-1?(te(g,e[$+1],e[$]),se(g,g)):Tt=!0,ee(A,p,g),se(A,A),ee(E,e[$-1],T),An(e[$],A,D),Rn(D,Pn(E,p),R)?(te(R,R,e[$]),se(_,R),Be(y,A,_),se(y,y)):eo(A,T,L,b,y,_,to),z(T,_),z(L,y)),s&&(ee(R,e[$],o),se(he,R));for(let He=0;He<a;He++)if(W(x,y,r[He][0]),W(R,_,r[He][1]),ee(x,x,R),se(O,x),l[f++]=O[0],l[f++]=O[1],l[f++]=O[2],ee(x,x,e[$]),n[h++]=x[0],n[h++]=x[1],n[h++]=x[2],!Tt){const xr=(He+1)%a;c.push(G+He),c.push(G+a+He),c.push(G+xr),c.push(G+xr),c.push(G+a+He),c.push(G+a+xr);for(let ot=0;ot<6;ot++){const mn=c.length-6;d.push(c[mn+ot]-ue)}}G+=a}const Ve=e[e.length-1];for(let $=0;$<t.length;$++)W(x,y,t[$][0]),W(R,_,t[$][1]),ee(x,x,R),ee(x,x,Ve),n[h++]=x[0],n[h++]=x[1],n[h++]=x[2];const jt=f/3;l[f++]=g[0],l[f++]=g[1],l[f++]=g[2];const Z=G-a;for(let $=0;$<i.length;$++)c.push(i[$][0]>=0?G+i[$][0]:-i[$][0]-1+Z),c.push(i[$][2]>=0?G+i[$][2]:-i[$][2]-1+Z),c.push(i[$][1]>=0?G+i[$][1]:-i[$][1]-1+Z),d.push(jt),d.push(jt),d.push(jt);const Me=[[u.POSITION,c],[u.NORMAL,d]],Fe=[[u.POSITION,{size:3,data:n,exclusive:!0}],[u.NORMAL,{size:3,data:l,exclusive:!0}]];return new De(Fe,Me)}function jp(r,e,t){ce(r.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),ce(r[0].length===3,"createPolylineGeometry(): malformed vertex"),ce(e==null||e.length===r.length,"createPolylineGeometry: need same number of points and normals"),ce(e==null||e[0].length===3,"createPolylineGeometry(): malformed normal");const i=new Float64Array(3*r.length),s=new Array(2*(r.length-1));let o=0,a=0;for(let c=0;c<r.length;c++){for(let d=0;d<3;d++)i[o++]=r[c][d];c>0&&(s[a++]=c-1,s[a++]=c)}const n=[],l=[];if(n.push([u.POSITION,s]),l.push([u.POSITION,{size:3,data:i,exclusive:!0}]),e){const c=new Float32Array(3*e.length);let d=0;for(let h=0;h<r.length;h++)for(let f=0;f<3;f++)c[d++]=e[h][f];n.push([u.NORMAL,s]),l.push([u.NORMAL,{size:3,data:c,exclusive:!0}])}return t&&(l.push([u.COLOR,{size:4,data:t}]),n.push([u.COLOR,Ec(t.length/4)])),new De(l,n,ti.Line)}function Up(r,e,t,i,s=0){const o=new Array(18),a=[[-e,s,i/2],[t,s,i/2],[0,r+s,i/2],[-e,s,-i/2],[t,s,-i/2],[0,r+s,-i/2]],n=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)o[3*l]=a[l][0],o[3*l+1]=a[l][1],o[3*l+2]=a[l][2];return new De([[u.POSITION,{size:3,data:o,exclusive:!0}]],[[u.POSITION,n]])}function Vp(r,e){const t=r.getMutableAttribute(u.POSITION).data;for(let i=0;i<t.length;i+=3){const s=t[i],o=t[i+1],a=t[i+2];U(dr,s,o,a),q(dr,dr,e),t[i]=dr[0],t[i+1]=dr[1],t[i+2]=dr[2]}}function Hp(r,e=r){const t=r.vertexAttributes,i=t.get(u.POSITION).data,s=t.get(u.NORMAL).data;if(s){const o=e.getMutableAttribute(u.NORMAL).data;for(let a=0;a<s.length;a+=3){const n=s[a+1];o[a+1]=-s[a+2],o[a+2]=n}}if(i){const o=e.getMutableAttribute(u.POSITION).data;for(let a=0;a<i.length;a+=3){const n=i[a+1];o[a+1]=-i[a+2],o[a+2]=n}}return e}function ms(r,e,t,i,s){return!(Math.abs(Ke(e,r))>s)&&(Be(t,r,e),se(t,t),Be(i,t,r),se(i,i),!0)}function eo(r,e,t,i,s,o,a){return ms(r,e,s,o,a)||ms(r,t,s,o,a)||ms(r,i,s,o,a)}const to=.99619469809,dr=Y();var hr,Lr;(function(r){r[r.Draped=0]="Draped",r[r.Screen=1]="Screen",r[r.World=2]="World",r[r.COUNT=3]="COUNT"})(hr||(hr={})),function(r){r[r.Center=0]="Center",r[r.Tip=1]="Tip",r[r.COUNT=2]="COUNT"}(Lr||(Lr={}));class de extends Yt{constructor(){super(...arguments),this.output=w.Color,this.transparencyPassType=K.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=hr.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=Lr.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}v([S({count:w.COUNT})],de.prototype,"output",void 0),v([S({count:K.COUNT})],de.prototype,"transparencyPassType",void 0),v([S()],de.prototype,"occluder",void 0),v([S()],de.prototype,"hasSlicePlane",void 0),v([S()],de.prototype,"writeDepth",void 0),v([S({count:hr.COUNT})],de.prototype,"space",void 0),v([S()],de.prototype,"hideOnShortSegments",void 0),v([S()],de.prototype,"hasCap",void 0),v([S({count:Lr.COUNT})],de.prototype,"anchor",void 0),v([S()],de.prototype,"hasTip",void 0),v([S()],de.prototype,"vvSize",void 0),v([S()],de.prototype,"vvColor",void 0),v([S()],de.prototype,"vvOpacity",void 0),v([S()],de.prototype,"hasOccludees",void 0),v([S()],de.prototype,"hasMultipassTerrain",void 0),v([S()],de.prototype,"cullAboveGround",void 0),v([S({constValue:!0})],de.prototype,"hasVvInstancing",void 0),v([S({constValue:!0})],de.prototype,"hasSliceTranslatedView",void 0);const ro=8;function Zc(r,e){const t=r.vertex;t.uniforms.add(new H("intrinsicWidth",i=>i.width)),e.vvSize?(r.attributes.add(u.SIZEFEATUREATTRIBUTE,"float"),t.uniforms.add(new Kt("vvSizeMinSize",i=>i.vvSizeMinSize)),t.uniforms.add(new Kt("vvSizeMaxSize",i=>i.vvSizeMaxSize)),t.uniforms.add(new Kt("vvSizeOffset",i=>i.vvSizeOffset)),t.uniforms.add(new Kt("vvSizeFactor",i=>i.vvSizeFactor)),t.code.add(m`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(r.attributes.add(u.SIZE,"float"),t.code.add(m`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(r.attributes.add(u.OPACITYFEATUREATTRIBUTE,"float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add([new ii("vvOpacityValues",i=>i.vvOpacityValues,ro),new ii("vvOpacityOpacities",i=>i.vvOpacityOpacities,ro)]),t.code.add(m`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.code.add(m`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(r.attributes.add(u.COLORFEATUREATTRIBUTE,"float"),t.constants.add("vvColorNumber","int",Rr),t.uniforms.add(new ii("vvColorValues",i=>i.vvColorValues,Rr)),t.uniforms.add(new Oa("vvColorColors",i=>i.vvColorColors,Rr)),t.code.add(m`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(r.attributes.add(u.COLOR,"vec4"),t.code.add(m`vec4 getColor(){
return applyOpacity(color);
}`))}class Jc{constructor(e){this._rctx=e,this._cache=new Map}dispose(){this._cache.forEach(e=>Le(e.stippleTexture)),this._cache.clear()}_acquire(e){if(j(e))return null;const t=this._patternId(e),i=this._cache.get(t);if(i)return i.refCount++,i;const{encodedData:s,paddedPixels:o}=Yc(e),a=new Qc(new lr(this._rctx,{width:o,height:1,internalFormat:sr.RGBA,pixelFormat:sr.RGBA,dataType:$r.UNSIGNED_BYTE,wrapMode:ar.CLAMP_TO_EDGE},s));return this._cache.set(t,a),a}release(e){if(j(e))return;const t=this._patternId(e),i=this._cache.get(t);i&&(i.refCount--,i.refCount===0&&(C(i.stippleTexture)&&i.stippleTexture.dispose(),this._cache.delete(t)))}swap(e,t){const i=this._acquire(t);return this.release(e),i}_patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}class Qc extends jl{constructor(e){super(),this.stippleTexture=e,this.refCount=1}}function Yc(r){const e=vs(r),t=1/r.pixelRatio,i=io(r),s=so(r),o=(Math.floor(.5*(s-1))+.5)*t,a=[];let n=1;for(const p of e){for(let g=0;g<p;g++){const _=n*(Math.min(g,p-1-g)+.5)*t/o*.5+.5;a.push(_)}n=-n}const l=Math.round(e[0]/2),c=[...a.slice(l),...a.slice(0,l)],d=i+ao,h=new Uint8Array(4*d);let f=4;for(const p of c)Qa(p,h,f),f+=4;return h.copyWithin(0,f-4,f),h.copyWithin(f,4,8),{encodedData:h,paddedPixels:d}}function vs(r){return r.pattern.map(e=>Math.round(e*r.pixelRatio))}function io(r){if(j(r))return 1;const e=vs(r);return Math.floor(e.reduce((t,i)=>t+i))}function so(r){return vs(r).reduce((e,t)=>Math.max(e,t))}const ao=2;function Kc(r){return j(r)?Hi:r.length===4?r:Tr(ed,r[0],r[1],r[2],1)}const ed=We();function oo(r,e){r.constants.add("stippleAlphaColorDiscard","float",.001),r.constants.add("stippleAlphaHighlightDiscard","float",.5),e.stippleEnabled?td(r,e):rd(r)}function td(r,e){const t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:s}=r;s.include(ts),e.draped||(rs(i,e),i.uniforms.add(new H("worldToScreenPerDistanceRatio",(a,n)=>1/n.camera.perScreenPixelRatio)),i.code.add(m`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),r.varyings.add("vStippleDistance","float"),e.stippleRequiresClamp&&r.varyings.add("vStippleDistanceLimits","vec2"),e.stippleRequiresStretchMeasure&&r.varyings.add("vStipplePatternStretch","float"),i.code.add(m`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${sd};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),i.code.add(m`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),i.code.add(m`
    if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
  `),i.uniforms.add(new H("pixelRatio",(a,n)=>n.camera.pixelRatio)),i.code.add(m`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${e.stippleRequiresStretchMeasure?m`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),s.constants.add("stippleTexturePadding","float",ao);const o=e.hasWebGL2Context?si.None:si.Size;s.uniforms.add(Ca("stipplePatternTexture",a=>a.stippleTexture,o)),s.uniforms.add([new H("stipplePatternSDFNormalizer",a=>id(a.stipplePattern)),new H("stipplePatternPixelSizeInv",a=>1/_s(a))]),s.code.add(m`
    float padStippleTexture(float u) {
      float paddedTextureSize = ${Ul(e,"stipplePatternTexture")}.x;
      float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;

      return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
    }
  `),s.code.add(m`
    float getStippleSDF(out bool isClamped) {
      ${e.stippleRequiresClamp?m`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:m`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${e.stippleScaleWithLineWidth?m`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${e.stippleRequiresStretchMeasure?m`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:m`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${e.stippleScaleWithLineWidth?m`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:m`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),e.stippleOffColorEnabled?(s.uniforms.add(new Te("stippleOffColor",a=>Kc(a.stippleOffColor))),s.code.add(m`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):s.code.add(m`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function rd(r){r.fragment.code.add(m`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function id(r){return C(r)?(Math.floor(.5*(so(r)-1))+.5)/r.pixelRatio:1}function _s(r){const e=r.stipplePattern;return C(e)?io(r.stipplePattern)/e.pixelRatio:1}const sd=m.float(.4),ys=128,no=.5;function ad(r,e=ys,t=e*no,i=0){const s=od(r,e,t,i);return new Vl(s,{mipmap:!1,wrap:{s:ar.CLAMP_TO_EDGE,t:ar.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0})}function od(r,e=ys,t=e*no,i=0){switch(r){case"circle":default:return nd(e,t);case"square":return ld(e,t);case"cross":return dd(e,t,i);case"x":return hd(e,t,i);case"kite":return cd(e,t);case"triangle":return ud(e,t);case"arrow":return pd(e,t)}}function nd(r,e){const t=r/2-.5;return Nr(r,ho(t,t,e/2))}function ld(r,e){return lo(r,e,!1)}function cd(r,e){return lo(r,e,!0)}function dd(r,e,t=0){return co(r,e,!1,t)}function hd(r,e,t=0){return co(r,e,!0,t)}function ud(r,e){return Nr(r,uo(r/2,e,e/2))}function pd(r,e){const t=e,i=e/2,s=r/2,o=.8*t,a=ho(s,(r-e)/2-o,Math.sqrt(o*o+i*i)),n=uo(s,t,i);return Nr(r,(l,c)=>Math.max(n(l,c),-a(l,c)))}function lo(r,e,t){return t&&(e/=Math.SQRT2),Nr(r,(i,s)=>{let o=i-.5*r+.25,a=.5*r-s-.75;if(t){const n=(o+a)/Math.SQRT2;a=(a-o)/Math.SQRT2,o=n}return Math.max(Math.abs(o),Math.abs(a))-.5*e})}function co(r,e,t,i=0){e-=i,t&&(e*=Math.SQRT2);const s=.5*e;return Nr(r,(o,a)=>{let n,l=o-.5*r,c=.5*r-a-1;if(t){const d=(l+c)/Math.SQRT2;c=(c-l)/Math.SQRT2,l=d}return l=Math.abs(l),c=Math.abs(c),n=l>c?l>s?Math.sqrt((l-s)*(l-s)+c*c):c:c>s?Math.sqrt(l*l+(c-s)*(c-s)):l,n-=i/2,n})}function ho(r,e,t){return(i,s)=>{const o=i-r,a=s-e;return Math.sqrt(o*o+a*a)-t}}function uo(r,e,t){const i=Math.sqrt(e*e+t*t);return(s,o)=>{const a=Math.abs(s-r)-t,n=o-r+e/2+.75,l=(e*a+t*n)/i,c=-n;return Math.max(l,c)}}function Nr(r,e){const t=new Uint8Array(4*r*r);for(let i=0;i<r;i++)for(let s=0;s<r;s++){const o=s+r*i;let a=e(s,i);a=a/r+.5,Qa(a,t,4*o)}return t}const Ss=64,po=Ss/2,fo=po/5,fd=Ss/fo,Gp=.25;function Bp(r,e){return r.fromData(`${e}-marker`,()=>ad(e,Ss,po,fo))}function gd(r,e){const t=r.vertex;r.constants.add("markerSizePerLineWidth","float",fd),t.uniforms.add(new H("pixelRatio",(i,s)=>s.camera.pixelRatio)),j(t.uniforms.get("markerScale"))&&t.constants.add("markerScale","float",1),t.code.add(m`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===hr.World&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new H("perRenderPixelRatio",(i,s)=>s.camera.perRenderPixelRatio)),t.code.add(m`float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}
bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}`))}var Pt;(function(r){r[r.BUTT=0]="BUTT",r[r.SQUARE=1]="SQUARE",r[r.ROUND=2]="ROUND",r[r.COUNT=3]="COUNT"})(Pt||(Pt={}));class B extends Yt{constructor(){super(...arguments),this.output=w.Color,this.capType=Pt.BUTT,this.transparencyPassType=K.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}}v([S({count:w.COUNT})],B.prototype,"output",void 0),v([S({count:Pt.COUNT})],B.prototype,"capType",void 0),v([S({count:K.COUNT})],B.prototype,"transparencyPassType",void 0),v([S()],B.prototype,"occluder",void 0),v([S()],B.prototype,"hasSlicePlane",void 0),v([S()],B.prototype,"hasPolygonOffset",void 0),v([S()],B.prototype,"writeDepth",void 0),v([S()],B.prototype,"draped",void 0),v([S()],B.prototype,"stippleEnabled",void 0),v([S()],B.prototype,"stippleOffColorEnabled",void 0),v([S()],B.prototype,"stippleScaleWithLineWidth",void 0),v([S()],B.prototype,"stipplePreferContinuous",void 0),v([S()],B.prototype,"roundJoins",void 0),v([S()],B.prototype,"applyMarkerOffset",void 0),v([S()],B.prototype,"vvSize",void 0),v([S()],B.prototype,"vvColor",void 0),v([S()],B.prototype,"vvOpacity",void 0),v([S()],B.prototype,"falloffEnabled",void 0),v([S()],B.prototype,"innerColorEnabled",void 0),v([S()],B.prototype,"hasOccludees",void 0),v([S()],B.prototype,"hasMultipassTerrain",void 0),v([S()],B.prototype,"cullAboveGround",void 0),v([S()],B.prototype,"wireframe",void 0),v([S({constValue:!0})],B.prototype,"stippleRequiresClamp",void 0),v([S({constValue:!0})],B.prototype,"stippleRequiresStretchMeasure",void 0),v([S({constValue:!0})],B.prototype,"hasVvInstancing",void 0),v([S({constValue:!0})],B.prototype,"hasSliceTranslatedView",void 0),v([S()],B.prototype,"objectAndLayerIdColorInstanced",void 0);const mi=1;function md(r){const e=new Pr,{vertex:t,fragment:i}=e,s=r.hasMultipassTerrain&&(r.output===w.Color||r.output===w.Alpha);e.include(Hl),e.include(Zc,r),e.include(oo,r);const o=r.applyMarkerOffset&&!r.draped;o&&(t.uniforms.add(new H("markerScale",p=>p.markerScale)),e.include(gd,{space:hr.World})),r.output===w.Depth&&e.include(ba,r),e.include(is,r),Dr(t,r),t.uniforms.add([new er("inverseProjectionMatrix",(p,g)=>g.camera.inverseProjectionMatrix),new pt("nearFar",(p,g)=>g.camera.nearFar),new H("miterLimit",p=>p.join!=="miter"?0:p.miterLimit),new Te("viewport",(p,g)=>g.camera.fullViewport)]),t.constants.add("LARGE_HALF_FLOAT","float",65500),e.attributes.add(u.POSITION,"vec3"),e.attributes.add(u.SUBDIVISIONFACTOR,"float"),e.attributes.add(u.UV0,"vec2"),e.attributes.add(u.AUXPOS1,"vec3"),e.attributes.add(u.AUXPOS2,"vec3"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),Aa(e),s&&e.varyings.add("depth","float");const a=r.capType===Pt.ROUND,n=r.stippleEnabled&&r.stippleScaleWithLineWidth||a;n&&e.varyings.add("vLineWidth","float");const l=r.stippleEnabled&&r.stippleScaleWithLineWidth;l&&e.varyings.add("vLineSizeInv","float");const c=r.innerColorEnabled||a;c&&e.varyings.add("vLineDistance","float");const d=r.stippleEnabled&&a,h=r.falloffEnabled||d;h&&e.varyings.add("vLineDistanceNorm","float"),a&&(e.varyings.add("vSegmentSDF","float"),e.varyings.add("vReverseSegmentSDF","float")),t.code.add(m`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),t.code.add(m`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),Gl(e),t.code.add(m`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${s?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),t.uniforms.add(new H("pixelRatio",(p,g)=>g.camera.pixelRatio)),t.code.add(m`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${n?m`vLineWidth = lineWidth;`:""}
      ${l?m`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),o&&t.code.add(m`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),t.code.add(m`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(r.stippleEnabled||a)&&t.code.add(m`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${a?m`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),t.code.add(m`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),r.roundJoins?t.code.add(m`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${r.stippleEnabled?m`min(1.0, subdivisionFactor * ${m.float((mi+2)/(mi+1))})`:m`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):t.code.add(m`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const f=r.capType!==Pt.BUTT;return t.code.add(m`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${f?m`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),t.code.add(m`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${h||c?m`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${c?m`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${h?m`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),a&&t.code.add(m`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),r.stippleEnabled&&(r.draped?t.uniforms.add(new H("worldToScreenRatio",(p,g)=>1/g.screenToPCSRatio)):t.code.add(m`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),t.code.add(m`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),r.draped?t.code.add(m`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):t.code.add(m`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),t.uniforms.add(new H("stipplePatternPixelSize",p=>_s(p))),t.code.add(m`
      float patternLength = ${r.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),t.code.add(m`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${r.wireframe&&!r.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),s&&e.include(ss,r),e.include(ft,r),i.include(ai),i.code.add(m`
  void main() {
    discardBySlice(vpos);
    ${s?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),r.wireframe?i.code.add(m`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(a&&i.code.add(m`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${m.float(Ne)}) {
        discard;
      }
    `),d?i.code.add(m`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${m.float(Ne)}, stippleCoverage);
      `):i.code.add(m`float stippleAlpha = getStippleAlpha();`),i.uniforms.add(new Te("intrinsicColor",p=>p.color)),i.code.add(m`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),r.innerColorEnabled&&(i.uniforms.add(new Te("innerColor",p=>k(p.innerColor,p.color))),i.uniforms.add(new H("innerWidth",(p,g)=>p.innerWidth*g.camera.pixelRatio)),i.code.add(m`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),i.code.add(m`vec4 finalColor = blendStipple(color, stippleAlpha);`),r.falloffEnabled&&(i.uniforms.add(new H("falloff",p=>p.falloff)),i.code.add(m`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),i.code.add(m`
    if (finalColor.a < ${m.float(Ne)}) {
      discard;
    }

    ${r.output===w.Alpha?m`gl_FragColor = vec4(finalColor.a);`:""}
    ${r.output===w.Color?m`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${r.output===w.Color&&r.transparencyPassType===K.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${r.output===w.Highlight?m`gl_FragColor = vec4(1.0);`:""}
    ${r.output===w.Depth?m`outputDepth(linearDepth);`:""}
    ${r.output===w.ObjectAndLayerIdColor?m`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const vd=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:mi,build:md},Symbol.toStringTag,{value:"Module"})),go=new Map([[u.POSITION,0],[u.SUBDIVISIONFACTOR,1],[u.UV0,2],[u.AUXPOS1,3],[u.AUXPOS2,4],[u.COLOR,5],[u.COLORFEATUREATTRIBUTE,5],[u.SIZE,6],[u.SIZEFEATUREATTRIBUTE,6],[u.OPACITYFEATUREATTRIBUTE,7],[u.OBJECTANDLAYERIDCOLOR,8]]);class vi extends tr{initializeProgram(e){return new rr(e.rctx,vi.shader.get().build(this.configuration),go)}_makePipelineState(e,t){const i=this.configuration,s=e===K.NONE,o=e===K.FrontFace;return ke({blending:i.output===w.Color||i.output===w.Alpha?s?Ar:ri(e):null,depthTest:{func:Qi(e)},depthWrite:s?i.writeDepth&&Qt:va(e),colorWrite:tt,stencilWrite:i.hasOccludees?oi:null,stencilTest:i.hasOccludees?t?ni:as:null,polygonOffset:s||o?i.hasPolygonOffset&&mo:Ll})}initializePipeline(){const e=this.configuration;if(e.occluder){const t=e.hasPolygonOffset&&mo;this._occluderPipelineTransparent=ke({blending:Ar,polygonOffset:t,depthTest:Ra,depthWrite:null,colorWrite:tt,stencilWrite:null,stencilTest:Bl}),this._occluderPipelineOpaque=ke({blending:Ar,polygonOffset:t,depthTest:Ra,depthWrite:null,colorWrite:tt,stencilWrite:Wl,stencilTest:kl}),this._occluderPipelineMaskWrite=ke({blending:null,polygonOffset:t,depthTest:Pa,depthWrite:null,colorWrite:null,stencilWrite:oi,stencilTest:ni})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?or.LINES:or.TRIANGLE_STRIP}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?e===V.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===V.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}vi.shader=new ir(vd,()=>import("./RibbonLine.glsl.f64c5778.js"));const mo={factor:0,units:-4};var Oe;(function(r){r[r.LEFT_JOIN_START=-2]="LEFT_JOIN_START",r[r.LEFT_JOIN_END=-1]="LEFT_JOIN_END",r[r.LEFT_CAP_START=-4]="LEFT_CAP_START",r[r.LEFT_CAP_END=-5]="LEFT_CAP_END",r[r.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",r[r.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",r[r.RIGHT_CAP_START=4]="RIGHT_CAP_START",r[r.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(Oe||(Oe={}));class _d extends Er{constructor(e){super(e,new Sd),this._configuration=new B,this._vertexAttributeLocations=go,this._layout=this.createLayout()}isClosed(e,t){return vo(this.parameters,e,t)}getConfiguration(e,t){this._configuration.output=e,this._configuration.draped=t.slot===V.DRAPED_MATERIAL;const i=C(this.parameters.stipplePattern)&&e!==w.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&C(this.parameters.stippleOffColor),this._configuration.stippleScaleWithLineWidth=i&&this.parameters.stippleScaleWithLineWidth,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=!!C(this.parameters.markerParameters)&&wd(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.vvOpacity=this.parameters.vvOpacityEnabled,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&C(this.parameters.innerColor),this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.occluder=this.parameters.renderOccluded===gt.OccludeAndTransparentStencil,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.wireframe=this.parameters.wireframe,this._configuration}intersect(e,t,i,s,o,a,n,l,c){C(c)?this._intersectDrapedLineGeometry(e,s,c,a,n):this._intersectLineGeometry(e,t,i,s,n)}_intersectDrapedLineGeometry(e,t,i,s,o){if(!t.options.selectionMode)return;const a=e.vertexAttributes.get(u.POSITION).data,n=e.vertexAttributes.get(u.SIZE);let l=this.parameters.width;if(this.parameters.vvSizeEnabled){const g=e.vertexAttributes.get(u.SIZEFEATUREATTRIBUTE).data[0];l*=Ht(this.parameters.vvSizeOffset[0]+g*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else n&&(l*=n.data[0]);const c=s[0],d=s[1],h=(l/2+4)*e.screenToWorldRatio;let f=Number.MAX_VALUE,p=0;for(let g=0;g<a.length-5;g+=3){const _=a[g],T=a[g+1],y=c-_,x=d-T,O=a[g+3]-_,R=a[g+4]-T,b=Ht((O*y+R*x)/(O*O+R*R),0,1),A=O*b-y,E=R*b-x,L=A*A+E*E;L<f&&(f=L,p=g/3)}f<h*h&&o(i.dist,i.normal,p,!1)}_intersectLineGeometry(e,t,i,s,o){if(!s.options.selectionMode||li(t))return;if(!Ks(i))return void Or.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const a=e.vertexAttributes,n=a.get(u.POSITION).data;let l=this.parameters.width;if(this.parameters.vvSizeEnabled){const y=a.get(u.SIZEFEATUREATTRIBUTE).data[0];l*=Ht(this.parameters.vvSizeOffset[0]+y*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else a.has(u.SIZE)&&(l*=a.get(u.SIZE).data[0]);const c=s.camera,d=Td;Gt(d,s.point);const h=l*c.pixelRatio/2+4*c.pixelRatio;U(Fr[0],d[0]-h,d[1]+h,0),U(Fr[1],d[0]+h,d[1]+h,0),U(Fr[2],d[0]+h,d[1]-h,0),U(Fr[3],d[0]-h,d[1]-h,0);for(let y=0;y<4;y++)if(!c.unprojectFromRenderScreen(Fr[y],rt[y]))return;lt(c.eye,rt[0],rt[1],Ts),lt(c.eye,rt[1],rt[2],Os),lt(c.eye,rt[2],rt[3],Cs),lt(c.eye,rt[3],rt[0],bs);let f=Number.MAX_VALUE,p=0;const g=ws(this.parameters,a,e.indices)?n.length-2:n.length-5;for(let y=0;y<g;y+=3){Se[0]=n[y]+i[12],Se[1]=n[y+1]+i[13],Se[2]=n[y+2]+i[14];const x=(y+3)%n.length;if(xe[0]=n[x]+i[12],xe[1]=n[x+1]+i[13],xe[2]=n[x+2]+i[14],ae(Ts,Se)<0&&ae(Ts,xe)<0||ae(Os,Se)<0&&ae(Os,xe)<0||ae(Cs,Se)<0&&ae(Cs,xe)<0||ae(bs,Se)<0&&ae(bs,xe)<0)continue;if(c.projectToRenderScreen(Se,Et),c.projectToRenderScreen(xe,It),Et[2]<0&&It[2]>0){te(Xe,Se,xe);const R=c.frustum,b=-ae(R[vt.NEAR],Se)/Ke(Xe,Xr(R[vt.NEAR]));W(Xe,Xe,b),ee(Se,Se,Xe),c.projectToRenderScreen(Se,Et)}else if(Et[2]>0&&It[2]<0){te(Xe,xe,Se);const R=c.frustum,b=-ae(R[vt.NEAR],xe)/Ke(Xe,Xr(R[vt.NEAR]));W(Xe,Xe,b),ee(xe,xe,Xe),c.projectToRenderScreen(xe,It)}else if(Et[2]<0&&It[2]<0)continue;Et[2]=0,It[2]=0;const O=Za(nr(Et,It,So),d);O<f&&(f=O,z(_o,Se),z(yo,xe),p=y/3)}const _=s.rayBegin,T=s.rayEnd;if(f<h*h){let y=Number.MAX_VALUE;if(Ja(nr(_o,yo,So),nr(_,T,Od),Dt)){te(Dt,Dt,_);const x=et(Dt);W(Dt,Dt,1/x),y=x/nt(_,T)}o(y,Dt,p,!1)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const s=e.indices,o=i.get(u.POSITION);return Da(o,s?s.get(u.POSITION):null,s&&ws(this.parameters,i,s),t)}createLayout(){const e=mt().vec3f(u.POSITION).f32(u.SUBDIVISIONFACTOR).vec2f(u.UV0).vec3f(u.AUXPOS1).vec3f(u.AUXPOS2);return this.parameters.vvSizeEnabled?e.f32(u.SIZEFEATUREATTRIBUTE):e.f32(u.SIZE),this.parameters.vvColorEnabled?e.f32(u.COLORFEATUREATTRIBUTE):e.vec4f(u.COLOR),this.parameters.vvOpacityEnabled&&e.f32(u.OPACITYFEATUREATTRIBUTE),ct("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(u.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new xd(this._layout,this.parameters)}requiresSlot(e,t){return t===w.Color||t===w.Alpha||t===w.Highlight||t===w.Depth||t===w.ObjectAndLayerIdColor?e===V.DRAPED_MATERIAL?!0:this.parameters.renderOccluded===gt.OccludeAndTransparentStencil?e===V.OPAQUE_MATERIAL||e===V.OCCLUDER_MATERIAL||e===V.TRANSPARENT_OCCLUDER_MATERIAL:t===w.Color||t===w.Alpha?e===(this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e===V.OPAQUE_MATERIAL:!1}createGLMaterial(e){return new yd(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),C(e.markerParameters)&&(e.markerScale=e.markerParameters.width/e.width)}}class yd extends ci{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==w.Color&&this._output!==w.Alpha||this._updateOccludeeState(e);const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern,t)),this._stipplePattern=t),this.ensureTechnique(vi,e)}}class Sd extends ql{constructor(){super(...arguments),this.width=0,this.color=Zr,this.join="miter",this.cap=Pt.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}}class xd{constructor(e,t){this._parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=mi+i}}_isClosed(e){return ws(this._parameters,e.vertexAttributes,e.indices)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2,i=e.indices.get(u.POSITION).length/2+1,s=this._isClosed(e);let o=s?2:2*t;return o+=((s?i:i-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),o+=2,this._parameters.wireframe&&(o=2+4*(o-2)),o}write(e,t,i,s,o){var jt;const a=Cd,n=bd,l=Ad,c=i.vertexAttributes.get(u.POSITION).data,d=i.indices&&i.indices.get(u.POSITION),h=(jt=i.vertexAttributes.get(u.DISTANCETOSTART))==null?void 0:jt.data;d&&d.length!==2*(c.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let f=1,p=0;this._parameters.vvSizeEnabled?p=i.vertexAttributes.get(u.SIZEFEATUREATTRIBUTE).data[0]:i.vertexAttributes.has(u.SIZE)&&(f=i.vertexAttributes.get(u.SIZE).data[0]);let g=[1,1,1,1],_=0;this._parameters.vvColorEnabled?_=i.vertexAttributes.get(u.COLORFEATUREATTRIBUTE).data[0]:i.vertexAttributes.has(u.COLOR)&&(g=i.vertexAttributes.get(u.COLOR).data);let T=null;ct("enable-feature:objectAndLayerId-rendering")&&(T=i.objectAndLayerIdColor);let y=0;this._parameters.vvOpacityEnabled&&(y=i.vertexAttributes.get(u.OPACITYFEATUREATTRIBUTE).data[0]);const x=c.length/3,O=new Float32Array(s.buffer),R=ct("enable-feature:objectAndLayerId-rendering")?new Uint8Array(s.buffer):null,b=this.vertexBufferLayout.stride/4;let A=o*b;const E=A;let L=0;const he=h?(Z,Me,Fe)=>L=h[Fe]:(Z,Me,Fe)=>L+=nt(Z,Me),D=(Z,Me,Fe,$,Tt,He,xr)=>{if(O[A++]=Me[0],O[A++]=Me[1],O[A++]=Me[2],O[A++]=$,O[A++]=xr,O[A++]=Tt,O[A++]=Z[0],O[A++]=Z[1],O[A++]=Z[2],O[A++]=Fe[0],O[A++]=Fe[1],O[A++]=Fe[2],this._parameters.vvSizeEnabled?O[A++]=p:O[A++]=f,this._parameters.vvColorEnabled)O[A++]=_;else{const ot=Math.min(4*He,g.length-4);O[A++]=g[ot+0],O[A++]=g[ot+1],O[A++]=g[ot+2],O[A++]=g[ot+3]}this._parameters.vvOpacityEnabled&&(O[A++]=y),ct("enable-feature:objectAndLayerId-rendering")&&(C(T)&&(R[4*A+0]=T[0],R[4*A+1]=T[1],R[4*A+2]=T[2],R[4*A+3]=T[3]),A++)};A+=b,U(n,c[0],c[1],c[2]),e&&q(n,n,e);const G=this._isClosed(i);if(G){const Z=c.length-3;U(a,c[Z],c[Z+1],c[Z+2]),e&&q(a,a,e)}else U(l,c[3],c[4],c[5]),e&&q(l,l,e),D(n,n,l,1,Oe.LEFT_CAP_START,0,0),D(n,n,l,1,Oe.RIGHT_CAP_START,0,0),z(a,n),z(n,l);const ue=G?0:1,Ve=G?x:x-1;for(let Z=ue;Z<Ve;Z++){const Me=(Z+1)%x*3;U(l,c[Me+0],c[Me+1],c[Me+2]),e&&q(l,l,e),he(a,n,Z),D(a,n,l,0,Oe.LEFT_JOIN_END,Z,L),D(a,n,l,0,Oe.RIGHT_JOIN_END,Z,L);const Fe=this.numJoinSubdivisions;for(let $=0;$<Fe;++$){const Tt=($+1)/(Fe+1);D(a,n,l,Tt,Oe.LEFT_JOIN_END,Z,L),D(a,n,l,Tt,Oe.RIGHT_JOIN_END,Z,L)}D(a,n,l,1,Oe.LEFT_JOIN_START,Z,L),D(a,n,l,1,Oe.RIGHT_JOIN_START,Z,L),z(a,n),z(n,l)}G?(U(l,c[3],c[4],c[5]),e&&q(l,l,e),L=he(a,n,Ve),D(a,n,l,0,Oe.LEFT_JOIN_END,ue,L),D(a,n,l,0,Oe.RIGHT_JOIN_END,ue,L)):(L=he(a,n,Ve),D(a,n,n,0,Oe.LEFT_CAP_END,Ve,L),D(a,n,n,0,Oe.RIGHT_CAP_END,Ve,L)),xs(O,E+b,O,E,b),A=xs(O,A-b,O,A,b),this._parameters.wireframe&&this._addWireframeVertices(s,E,A,b)}_addWireframeVertices(e,t,i,s){const o=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let n=0;const l=c=>n=xs(a,c,o,n,s);for(let c=0;c<a.length-1;c+=2*s)l(c),l(c+2*s),l(c+1*s),l(c+2*s),l(c+1*s),l(c+3*s)}}function xs(r,e,t,i,s){for(let o=0;o<s;o++)t[i++]=r[e++];return i}function ws(r,e,t){return vo(r,e.get(u.POSITION).data,t?t.get(u.POSITION):null)}function vo(r,e,t){return!!r.isClosed&&(t?t.length>2:e.length>6)}function wd(r){return r.anchor===Lr.Tip&&r.hideOnShortSegments&&r.placement==="begin-end"&&r.worldSpace}const Se=I(),xe=I(),Xe=I(),Dt=I(),Td=I(),Et=Pe(),It=Pe(),_o=I(),yo=I(),So=fi(),Od=fi(),Cd=I(),bd=I(),Ad=I(),Fr=[Pe(),Pe(),Pe(),Pe()],rt=[I(),I(),I(),I()],Ts=Ye(),Os=Ye(),Cs=Ye(),bs=Ye();function xo(r){return r.type==="point"}function Wp(r,e){if(r.type==="point")return _t(r,e,!1);if(En(r))switch(r.type){case"extent":return _t(r.center,e,!1);case"polygon":return _t(r.centroid,e,!1);case"polyline":return _t(wo(r),e,!0);case"mesh":return _t(r.origin,e,!1)}else switch(r.type){case"extent":return _t(Rd(r),e,!0);case"polygon":return _t(Pd(r),e,!0);case"polyline":return _t(wo(r),e,!0)}}function wo(r){const e=r.paths[0];if(!e||e.length===0)return null;const t=In(e,$n(e)/2);return Gi(t[0],t[1],t[2],r.spatialReference)}function Rd(r){const e=isFinite(r.zmin);return Gi(.5*(r.xmax+r.xmin),.5*(r.ymax+r.ymin),e?.5*(r.zmax+r.zmin):void 0,r.spatialReference)}function Pd(r){const e=r.rings[0];if(!e||e.length===0)return null;const t=Mn(r.rings,r.hasZ);return Gi(t[0],t[1],t[2],r.spatialReference)}function _t(r,e,t){const i=t?r:Ln(r);return e&&r?Dn(r,i,e)?i:null:i}function kp(r,e,t,i=0){if(r){e||(e=Bt());const s=r;let o=.5*s.width*(t-1),a=.5*s.height*(t-1);return s.width<1e-7*s.height?o+=a/20:s.height<1e-7*s.width&&(a+=o/20),Tr(e,s.xmin-o-i,s.ymin-a-i,s.xmax+o+i,s.ymax+a+i),e}return null}function Dd(r,e){for(let t=0;t<r.geometries.length;++t){const i=r.geometries[t].getMutableAttribute(u.AUXPOS1);i&&i.data[3]!==e&&(i.data[3]=e,r.geometryVertexAttrsUpdated(r.geometryRecords[t]))}}function qp(r,e){const t=Nn(Zr);return C(r)&&(t[0]=r[0],t[1]=r[1],t[2]=r[2]),C(e)?t[3]=e:C(r)&&r.length>3&&(t[3]=r[3]),t}function Xp(r=Vn,e,t,i=1){const s=new Array(3);if(j(e)||j(t))s[0]=1,s[1]=1,s[2]=1;else{let o,a=0;for(let n=2;n>=0;n--){const l=r[n];let c;const d=l!=null,h=n===0&&!o&&!d,f=t[n];l==="symbol-value"||h?c=f!==0?e[n]/f:1:d&&l!=="proportional"&&isFinite(l)&&(c=f!==0?l/f:1),c!=null&&(s[n]=c,o=c,a=Math.max(a,Math.abs(c)))}for(let n=2;n>=0;n--)s[n]==null?s[n]=o:s[n]===0&&(s[n]=.001*a)}for(let o=2;o>=0;o--)s[o]/=i;return Fn(s)}function Ed(r){return r.isPrimitive!=null}function Zp(r){return Ed(r)&&(r=[r.width,r.depth,r.height]),To(r)?null:"Symbol sizes may not be negative values"}function To(r){if(Array.isArray(r)){for(const e of r)if(!To(e))return!1;return!0}return r==null||r>=0}function Jp(r,e,t,i=X()){const s=r||0,o=e||0,a=t||0;return s!==0&&zn(i,i,-s/180*Math.PI),o!==0&&jn(i,i,o/180*Math.PI),a!==0&&Un(i,i,a/180*Math.PI),i}function Qp(r,e,t){if(t.minDemResolution!=null)return t.minDemResolution;const i=Hn(e),s=Gn(r)*i,o=Bn(r)*i,a=Wn(r)*(e.isGeographic?1:i);return s===0&&o===0&&a===0?t.minDemResolutionForPoints:.01*Math.max(s,o,a)}class Yp{constructor(e,t=null,i=0){this.array=e,this.spatialReference=t,this.offset=i}}function Oo(r){return"array"in r}function _i(r,e,t="ground"){if(xo(e))return r.getElevation(e.x,e.y,e.z||0,e.spatialReference,t);if(Oo(e)){let i=e.offset;return r.getElevation(e.array[i++],e.array[i++],e.array[i]||0,k(e.spatialReference,r.spatialReference),t)}return r.getElevation(e[0],e[1],e[2]||0,r.spatialReference,t)}function Id(r,e,t,i,s,o,a,n,l,c,d){const h=jd[d.mode];let f,p,g=0;if(Jr(r,e,t,i,l.spatialReference,s,n))return h.requiresAlignment(d)?(g=h.applyElevationAlignmentBuffer(i,s,o,a,n,l,c,d),f=o,p=a):(f=i,p=s),Jr(f,l.spatialReference,p,o,c.spatialReference,a,n)?g:void 0}function Co(r,e,t,i,s){const o=(xo(r)?r.z:Oo(r)?r.array[r.offset+2]:r[2])||0;switch(t.mode){case"on-the-ground":{const a=k(_i(e,r,"ground"),0);return s.verticalDistanceToGround=0,s.sampledElevation=a,void(s.z=a)}case"relative-to-ground":{const a=k(_i(e,r,"ground"),0),n=t.geometryZWithOffset(o,i);return s.verticalDistanceToGround=n,s.sampledElevation=a,void(s.z=n+a)}case"relative-to-scene":{const a=k(_i(e,r,"scene"),0),n=t.geometryZWithOffset(o,i);return s.verticalDistanceToGround=n,s.sampledElevation=a,void(s.z=n+a)}case"absolute-height":{const a=t.geometryZWithOffset(o,i),n=k(_i(e,r,"ground"),0);return s.verticalDistanceToGround=a-n,s.sampledElevation=n,void(s.z=a)}default:return kn(t.mode),void(s.z=0)}}function Kp(r,e,t,i){return Co(r,e,t,i,ur),ur.z}function ef(r,e,t){return e==null||t==null?r.definedChanged:e==="on-the-ground"&&t==="on-the-ground"?r.staysOnTheGround:e===t||e!=="on-the-ground"&&t!=="on-the-ground"?As.UPDATE:r.onTheGroundChanged}function tf(r){return r==="relative-to-ground"||r==="relative-to-scene"}function rf(r){return r!=="absolute-height"}function sf(r,e,t,i,s){Co(e,t,s,i,ur),Dd(r,ur.verticalDistanceToGround);const o=ur.sampledElevation,a=Ge(Ud,r.transformation);return yi[0]=e.x,yi[1]=e.y,yi[2]=ur.z,qn(e.spatialReference,yi,a,i.spatialReference)?r.transformation=a:console.warn("Could not locate symbol object properly, it might be misplaced"),o}function $d(r,e,t,i,s,o){let a=0;const n=o.spatialReference;e*=3,i*=3;for(let l=0;l<s;++l){const c=r[e+0],d=r[e+1],h=r[e+2],f=k(o.getElevation(c,d,h,n,"ground"),0);a+=f,t[i+0]=c,t[i+1]=d,t[i+2]=f,e+=3,i+=3}return a/s}function Md(r,e,t,i,s,o,a,n){let l=0;const c=n.calculateOffsetRenderUnits(a),d=n.featureExpressionInfoContext,h=o.spatialReference;e*=3,i*=3;for(let f=0;f<s;++f){const p=r[e+0],g=r[e+1],_=r[e+2],T=k(o.getElevation(p,g,_,h,"ground"),0);l+=T,t[i+0]=p,t[i+1]=g,t[i+2]=d==null?_+T+c:T+c,e+=3,i+=3}return l/s}function Ld(r,e,t,i,s,o,a,n){let l=0;const c=n.calculateOffsetRenderUnits(a),d=n.featureExpressionInfoContext,h=o.spatialReference;e*=3,i*=3;for(let f=0;f<s;++f){const p=r[e+0],g=r[e+1],_=r[e+2],T=k(o.getElevation(p,g,_,h,"scene"),0);l+=T,t[i+0]=p,t[i+1]=g,t[i+2]=d==null?_+T+c:T+c,e+=3,i+=3}return l/s}function Nd(r){const e=r.meterUnitOffset,t=r.featureExpressionInfoContext;return e!==0||t!=null}function Fd(r,e,t,i,s,o,a,n){const l=n.calculateOffsetRenderUnits(a),c=n.featureExpressionInfoContext;e*=3,i*=3;for(let d=0;d<s;++d){const h=r[e+0],f=r[e+1],p=r[e+2];t[i+0]=h,t[i+1]=f,t[i+2]=c==null?p+l:l,e+=3,i+=3}return 0}class zd{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var As;(function(r){r[r.NONE=0]="NONE",r[r.UPDATE=1]="UPDATE",r[r.RECREATE=2]="RECREATE"})(As||(As={}));const jd={"absolute-height":{applyElevationAlignmentBuffer:Fd,requiresAlignment:Nd},"on-the-ground":{applyElevationAlignmentBuffer:$d,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Md,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Ld,requiresAlignment:()=>!0}},Ud=X(),ur=new zd,yi=I(),Vd=Or.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Hd(r){return{cachedResult:r.cachedResult,arcade:r.arcade?{func:r.arcade.func,context:r.arcade.modules.arcadeUtils.createExecContext(null,{sr:r.arcade.context.spatialReference}),modules:r.arcade.modules}:null}}async function af(r,e,t,i){const s=r&&r.expression;if(typeof s!="string")return null;const o=kd(s);if(o!=null)return{cachedResult:o};const a=await Zn();Jn(t);const n=a.arcadeUtils,l=n.createSyntaxTree(s);return n.dependsOnView(l)?(i!=null&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:n.createFunction(l),context:n.createExecContext(null,{sr:e}),modules:a}}}function Gd(r,e,t){return r.arcadeUtils.createFeature(e.attributes,e.geometry,t)}function Bd(r,e){if(r!=null&&!bo(r)){if(!e||!r.arcade)return void Vd.errorOncePerTick("Arcade support required but not provided");const t=e;t._geometry&&(t._geometry=Xn(t._geometry)),r.arcade.modules.arcadeUtils.updateExecContext(r.arcade.context,e)}}function Wd(r){if(r!=null){if(bo(r))return r.cachedResult;const e=r.arcade;let t=r.arcade.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(r.cachedResult=0,t=0),t}return 0}function of(r,e=!1){let t=r&&r.featureExpressionInfo;const i=t&&t.expression;return e||i==="0"||(t=null),t}const nf={cachedResult:0};function bo(r){return r.cachedResult!=null}function kd(r){return r==="0"?0:null}class Ao{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Qn(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(t+=Wd(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Yn(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=k(e.offset,0)}updateFeatureExpressionInfoContext(e,t,i){if(j(e))return void(this._featureExpressionInfoContext=null);const s=e&&e.arcade;s&&C(t)&&C(i)?(this._featureExpressionInfoContext=Hd(e),Bd(this._featureExpressionInfoContext,Gd(s.modules,t,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new Ao;return C(e)&&t.setFromElevationInfo(e),t}}function qd(r){return r instanceof Float32Array&&r.length>=16}function Xd(r){return Array.isArray(r)&&r.length>=16}function Zd(r){return qd(r)||Xd(r)}var Si;(function(r){r[r.Occluded=0]="Occluded",r[r.NotOccluded=1]="NotOccluded",r[r.Both=2]="Both",r[r.COUNT=3]="COUNT"})(Si||(Si={}));var je;function Jd(r,e){r.include(Ea),r.attributes.add(u.POSITION,"vec3"),r.attributes.add(u.NORMAL,"vec3"),r.attributes.add(u.AUXPOS1,"vec4");const t=r.vertex;Dr(t,e),rs(t,e),t.uniforms.add([new Te("viewport",(i,s)=>s.camera.fullViewport),new H("polygonOffset",i=>i.shaderPolygonOffset),new H("cameraGroundRelative",(i,s)=>s.camera.aboveGround?1:-1),new H("renderTransparentlyOccludedHUD",(i,s)=>s.renderTransparentlyOccludedHUD===Si.Occluded?1:s.renderTransparentlyOccludedHUD===Si.NotOccluded?0:.75),new Rt("hudVisibilityTexture",(i,s)=>s.hudVisibilityTexture)]),e.hasVerticalOffset&&Xl(t),t.constants.add("smallOffsetAngle","float",.984807753012208),t.code.add(m`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(m`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.isDraped&&!e.hasVerticalOffset||Zl(t),e.isDraped||(t.uniforms.add(new H("perDistancePixelRatio",(i,s)=>Math.tan(s.camera.fovY/2)/(s.camera.fullViewport[2]/2))),t.code.add(m`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),e.screenCenterOffsetUnitsEnabled===je.Screen&&t.uniforms.add(new H("pixelRatio",(i,s)=>s.camera.pixelRatio)),e.hasScreenSizePerspective&&Ia(t),t.code.add(m`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled===je.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?m`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled!==je.Screen?m`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled===je.Screen?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled===je.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),t.code.add(m`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}(function(r){r[r.World=0]="World",r[r.Screen=1]="Screen",r[r.COUNT=2]="COUNT"})(je||(je={}));function Qd(r){const e=m`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,t=m`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;r.vertex.code.add(e),r.vertex.code.add(t),r.fragment.code.add(e),r.fragment.code.add(t)}function Yd(r){r.include(os),r.uniforms.add([new Rt("geometryDepthTexture",(e,t)=>t.multipassGeometry.linearDepthTexture),new pt("nearFar",(e,t)=>t.camera.nearFar)]),r.code.add(m`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}class Kd{constructor(){this.enabled=!1}}function eh(r,e){const{vertex:t,fragment:i}=r;e.hasMultipassGeometry&&t.include(Yd),e.hasMultipassTerrain&&r.varyings.add("depth","float"),t.code.add(m`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.hasMultipassGeometry?m`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.hasMultipassTerrain&&i.include(os),e.hasMultipassTerrain&&i.uniforms.add([...Ca("terrainDepthTexture",(s,o)=>o.multipassTerrain.linearDepthTexture,e.hasWebGL2Context?si.None:si.InvSize),new pt("nearFar",(s,o)=>o.camera.nearFar)]),i.include(ts),i.code.add(m`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${e.hasMultipassTerrain?m`
          vec2 uv = gl_FragCoord.xy;

          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = ${Jl(e,"terrainDepthTexture","uv")};

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}function th(r){const e=new Pr,t=r.signedDistanceFieldEnabled;if(e.include(Qd),e.include(Jd,r),e.include(ft,r),r.occlusionPass)return e.include(eh,r),e;const{vertex:i,fragment:s}=e;e.include(Ea),s.include(ts),s.include(ai),e.include(Ql,r),e.include(is,r),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),r.binaryHighlightOcclusionEnabled&&e.varyings.add("voccluded","float"),i.uniforms.add([new Te("viewport",(c,d)=>d.camera.fullViewport),new pt("screenOffset",(c,d)=>Ct(Po,2*c.screenOffset[0]*d.camera.pixelRatio,2*c.screenOffset[1]*d.camera.pixelRatio)),new pt("anchorPosition",c=>xi(c)),new Te("materialColor",c=>c.color),new H("pixelRatio",(c,d)=>d.camera.pixelRatio)]),t&&(i.uniforms.add(new Te("outlineColor",c=>c.outlineColor)),s.uniforms.add([new Te("outlineColor",c=>Ro(c)?c.outlineColor:Hi),new H("outlineSize",c=>Ro(c)?c.outlineSize:0)])),r.hasScreenSizePerspective&&(Yl(i),Ia(i)),(r.debugDrawLabelBorder||r.binaryHighlightOcclusionEnabled)&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(u.UV0,"vec2"),e.attributes.add(u.COLOR,"vec4"),e.attributes.add(u.SIZE,"vec2"),e.attributes.add(u.AUXPOS2,"vec4"),i.code.add(m`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${r.hasScreenSizePerspective?m`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:m`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${r.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${r.occlusionTestEnabled||r.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${r.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const o=m`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,a=r.pixelSnappingEnabled?t?m`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:m`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:m`posProj += quadOffset;`;r.vvColor&&i.uniforms.add([new Oa("vvColorColors",c=>c.vvColorColors,Rr),new ii("vvColorValues",c=>c.vvColorValues,Rr)]),i.uniforms.add(new pt("textureCoordinateScaleFactor",c=>C(c.texture)&&C(c.texture.descriptor.textureCoordinateScaleFactor)?c.texture.descriptor.textureCoordinateScaleFactor:Kn)),i.code.add(m`
    ${r.occlusionTestEnabled?"if (visible) {":""}
    ${o}
    ${r.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${m.float(Ne)};
    ${t?`alphaDiscard = alphaDiscard && outlineColor.a < ${m.float(Ne)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${a}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${r.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${r.occlusionTestEnabled?m`} else { vtc = vec2(0.0);
      ${r.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),s.uniforms.add(new Rt("tex",c=>c.texture));const n=r.debugDrawLabelBorder?m`(isBorder > 0.0 ? 0.0 : ${m.float($a)})`:m.float($a),l=m`
    ${r.debugDrawLabelBorder?m`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t?m`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${m.float(ys)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${m.float(Ne)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:m`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${r.debugDrawLabelBorder?m`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return r.output===w.Alpha&&s.code.add(m`
      void main() {
        ${l}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),r.output===w.ObjectAndLayerIdColor&&s.code.add(m`
      void main() {
        ${l}
        outputObjectAndLayerIdColor();
      }
      `),r.output===w.Color&&s.code.add(m`
    void main() {
      ${l}
      ${r.transparencyPassType===K.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),r.output===w.Highlight&&(e.include(di,r),s.code.add(m`
    void main() {
      ${l}
      ${r.binaryHighlightOcclusionEnabled?m`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),e}function Ro(r){return r.outlineColor[3]>0&&r.outlineSize>0}function xi(r,e=Po){return r.textureIsSignedDistanceField?rh(r.anchorPosition,r.distanceFieldBoundingBox,e):Gt(e,r.anchorPosition),e}function rh(r,e,t){C(e)?Ct(t,r[0]*(e[2]-e[0])+e[0],r[1]*(e[3]-e[1])+e[1]):Ct(t,0,0)}const Po=Q(),ih=Object.freeze(Object.defineProperty({__proto__:null,build:th,calculateAnchorPosForRendering:xi},Symbol.toStringTag,{value:"Module"}));class wi extends tr{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Qr.WEBGL2,t.spherical=e.viewingMode===dt.Global}initializeProgram(e){return new rr(e.rctx,wi.shader.get().build(this.configuration),Ir)}_setPipelineState(e){const t=this.configuration,i=e===K.NONE,s=e===K.FrontFace,o=this.configuration.hasPolygonOffset&&sh,a=(i||s)&&t.output!==w.Highlight?(t.depthEnabled||t.occlusionPass)&&Qt:null;return ke({blending:t.output===w.Color||t.output===w.Alpha||t.output===w.Highlight?i?ah:ri(e):null,depthTest:{func:Lc.LEQUAL},depthWrite:a,colorWrite:tt,polygonOffset:o})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.occlusionPass?or.POINTS:or.TRIANGLES}}wi.shader=new ir(ih,()=>import("./HUDMaterial.glsl.fdc8feeb.js"));const sh={factor:0,units:-4},ah=Nl(qe.ONE,qe.ONE_MINUS_SRC_ALPHA);class J extends Yt{constructor(){super(...arguments),this.output=w.Color,this.screenCenterOffsetUnitsEnabled=je.World,this.transparencyPassType=K.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}v([S({count:w.COUNT})],J.prototype,"output",void 0),v([S({count:je.COUNT})],J.prototype,"screenCenterOffsetUnitsEnabled",void 0),v([S({count:K.COUNT})],J.prototype,"transparencyPassType",void 0),v([S()],J.prototype,"spherical",void 0),v([S()],J.prototype,"occlusionTestEnabled",void 0),v([S()],J.prototype,"signedDistanceFieldEnabled",void 0),v([S()],J.prototype,"vvSize",void 0),v([S()],J.prototype,"vvColor",void 0),v([S()],J.prototype,"hasVerticalOffset",void 0),v([S()],J.prototype,"hasScreenSizePerspective",void 0),v([S()],J.prototype,"debugDrawLabelBorder",void 0),v([S()],J.prototype,"binaryHighlightOcclusionEnabled",void 0),v([S()],J.prototype,"hasSlicePlane",void 0),v([S()],J.prototype,"hasPolygonOffset",void 0),v([S()],J.prototype,"depthEnabled",void 0),v([S()],J.prototype,"pixelSnappingEnabled",void 0),v([S()],J.prototype,"isDraped",void 0),v([S()],J.prototype,"hasMultipassGeometry",void 0),v([S()],J.prototype,"hasMultipassTerrain",void 0),v([S()],J.prototype,"cullAboveGround",void 0),v([S()],J.prototype,"occlusionPass",void 0),v([S()],J.prototype,"objectAndLayerIdColorInstanced",void 0),v([S({constValue:!0})],J.prototype,"hasSliceInVertexProgram",void 0),v([S({constValue:!1})],J.prototype,"hasVvInstancing",void 0);class lf extends Er{constructor(e){super(e,new gh),this._configuration=new J}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen"?je.Screen:je.World,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.isDraped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.vvSize=!!this.parameters.vvSizeEnabled,this._configuration.vvColor=!!this.parameters.vvColorEnabled,this._configuration.occlusionPass=t.slot===V.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===w.Color||e===w.Alpha),e===w.Color&&(this._configuration.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder),e===w.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassGeometry=t.multipassGeometry.enabled,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,s,o,a,n,l,c){C(c)?this._intersectDrapedHudGeometry(e,a,n,l,c):this._intersectHudGeometry(e,t,i,s,n,l)}_intersectDrapedHudGeometry(e,t,i,s,o){const a=e.vertexAttributes.get(u.POSITION),n=e.vertexAttributes.get(u.SIZE),l=this.parameters,c=xi(l);let d=1,h=1;if(C(s)){const p=s($o);d=p[0],h=p[5]}d*=e.screenToWorldRatio,h*=e.screenToWorldRatio;const f=ph*e.screenToWorldRatio;for(let p=0;p<a.data.length/a.size;p++){const g=p*a.size,_=a.data[g],T=a.data[g+1],y=p*n.size;let x;yt[0]=n.data[y]*d,yt[1]=n.data[y+1]*h,l.textureIsSignedDistanceField&&(x=l.outlineSize*e.screenToWorldRatio/2),Do(t,_,T,yt,f,x,l,c)&&i(o.dist,o.normal,-1,!1)}}_intersectHudGeometry(e,t,i,s,o,a){if(!s.options.selectionMode||!s.options.hud||li(t))return;const n=this.parameters;let l=1,c=1;if(ea(Ps,i),C(a)){const x=a($o);l=x[0],c=x[5],lh(Ps)}const d=e.vertexAttributes.get(u.POSITION),h=e.vertexAttributes.get(u.SIZE),f=e.vertexAttributes.get(u.NORMAL),p=e.vertexAttributes.get(u.AUXPOS1);ce(d.size>=3);const g=s.point,_=s.camera,T=xi(n);l*=_.pixelRatio,c*=_.pixelRatio;const y=this.parameters.centerOffsetUnits==="screen";for(let x=0;x<d.data.length/d.size;x++){const O=x*d.size;U(fe,d.data[O],d.data[O+1],d.data[O+2]),q(fe,fe,i);const R=x*h.size;yt[0]=h.data[R]*l,yt[1]=h.data[R+1]*c,q(fe,fe,_.viewMatrix);const b=x*p.size;if(U(Ee,p.data[b+0],p.data[b+1],p.data[b+2]),!y&&(fe[0]+=Ee[0],fe[1]+=Ee[1],Ee[2]!==0)){const E=Ee[2];se(Ee,fe),te(fe,fe,W(Ee,Ee,E))}const A=x*f.size;if(U(zr,f.data[A],f.data[A+1],f.data[A+2]),this._normalAndViewAngle(zr,Ps,_,Ds),this._applyVerticalOffsetTransformationView(fe,Ds,_,Rs),_.applyProjection(fe,ve),ve[0]>-1){ve[0]=Math.floor(ve[0]),ve[1]=Math.floor(ve[1]),y&&(Ee[0]||Ee[1])&&(ve[0]+=Ee[0],Ee[1]!==0&&(ve[1]+=Kl(Ee[1],Rs.factorAlignment)),_.unapplyProjection(ve,fe)),ve[0]+=this.parameters.screenOffset[0],ve[1]+=this.parameters.screenOffset[1],ec(yt,Rs.factor,yt);const E=uh*_.pixelRatio;let L;if(n.textureIsSignedDistanceField&&(L=n.outlineSize*_.pixelRatio/2),Do(g,ve[0],ve[1],yt,E,L,n,T)){const he=s.ray;if(q(Io,fe,Wt(hh,_.viewMatrix)),ve[0]=g[0],ve[1]=g[1],_.unprojectFromRenderScreen(ve,fe)){const D=I();z(D,he.direction);const G=1/et(D);W(D,D,G),o(nt(he.origin,fe)*G,D,-1,!0,1,Io)}}}}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const s=i.get(u.POSITION),o=e.indices.get(u.POSITION);return tc(s,o,t)}createBufferWriter(){return new vh(this)}_normalAndViewAngle(e,t,i,s){return Zd(t)&&(t=ea(dh,t)),el(s.normal,e,t),q(s.normal,s.normal,i.viewInverseTransposeMatrix),s.cosAngle=Ke(Eo,fh),s}_updateScaleInfo(e,t,i){const s=this.parameters;C(s.screenSizePerspective)?Ma(i,t,s.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),C(s.screenSizePerspectiveAlignment)?Ma(i,t,s.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,i,s,o,a,n){const l=this._normalAndViewAngle(t,i,o,Ds);return this._applyVerticalGroundOffsetView(e,l,o,n),this._applyVerticalOffsetTransformationView(n,l,o,a),this._applyPolygonOffsetView(n,l,s[3],o,n),this._applyCenterOffsetView(n,s,n),n}applyShaderOffsetsNDC(e,t,i,s,o){return this._applyCenterOffsetNDC(e,t,i,s),C(o)&&z(o,s),this._applyPolygonOffsetNDC(s,t,i,s),s}_applyPolygonOffsetView(e,t,i,s,o){const a=s.aboveGround?1:-1;let n=Math.sign(i);n===0&&(n=a);const l=a*n;if(this.parameters.shaderPolygonOffset<=0)return z(o,e);const c=Ht(Math.abs(t.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/s.viewport[2];return W(o,e,l>0?d:1/d),o}_applyVerticalGroundOffsetView(e,t,i,s){const o=et(e),a=i.aboveGround?1:-1,n=.5*i.computeRenderPixelSizeAtDist(o),l=W(fe,t.normal,a*n);return ee(s,e,l),s}_applyVerticalOffsetTransformationView(e,t,i,s){const o=this.parameters;if(!o.verticalOffset||!o.verticalOffset.screenLength){if(o.screenSizePerspective||o.screenSizePerspectiveAlignment){const c=et(e);this._updateScaleInfo(s,c,t.cosAngle)}else s.factor.scale=1,s.factorAlignment.scale=1;return e}const a=et(e),n=k(o.screenSizePerspectiveAlignment,o.screenSizePerspective),l=rc(i,a,o.verticalOffset,t.cosAngle,n);return this._updateScaleInfo(s,a,t.cosAngle),W(t.normal,t.normal,l),ee(e,e,t.normal)}_applyCenterOffsetView(e,t,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&z(i,e),s&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(se(zr,i),ee(i,i,W(zr,zr,t[2])))),i}_applyCenterOffsetNDC(e,t,i,s){const o=this.parameters.centerOffsetUnits!=="screen";return s!==e&&z(s,e),o||(s[0]+=t[0]/i.fullWidth*2,s[1]+=t[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,t,i,s){const o=this.parameters.shaderPolygonOffset;if(e!==s&&z(s,e),o){const a=i.aboveGround?1:-1,n=a*Math.sign(t[3]);s[2]-=(n||a)*o}return s}requiresSlot(e,t){if(t===w.Color||t===w.Alpha||t===w.Highlight||t===w.ObjectAndLayerIdColor){if(e===V.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:i,occlusionTest:s}=this.parameters;return e===(i?V.LABEL_MATERIAL:V.HUD_MATERIAL)||s&&e===V.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new oh(e)}calculateRelativeScreenBounds(e,t,i=Bt()){return nh(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class oh extends ic{constructor(e){super(kr(kr({},e),e.material.parameters))}selectProgram(e){return this.ensureTechnique(wi,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function nh(r,e,t,i=ch){return Gt(i,r.anchorPosition),i[0]*=-e[0],i[1]*=-e[1],i[0]+=r.screenOffset[0]*t,i[1]+=r.screenOffset[1]*t,i}function lh(r){const e=r[0],t=r[1],i=r[2],s=r[3],o=r[4],a=r[5],n=r[6],l=r[7],c=r[8],d=1/Math.sqrt(e*e+t*t+i*i),h=1/Math.sqrt(s*s+o*o+a*a),f=1/Math.sqrt(n*n+l*l+c*c);return r[0]=e*d,r[1]=t*d,r[2]=i*d,r[3]=s*h,r[4]=o*h,r[5]=a*h,r[6]=n*f,r[7]=l*f,r[8]=c*f,r}function Do(r,e,t,i,s,o,a,n){let l=e-s-(n[0]>0?i[0]*n[0]:0),c=l+i[0]+2*s,d=t-s-(n[1]>0?i[1]*n[1]:0),h=d+i[1]+2*s;const f=a.distanceFieldBoundingBox;return a.textureIsSignedDistanceField&&C(f)&&(l+=i[0]*f[0],d+=i[1]*f[1],c-=i[0]*(1-f[2]),h-=i[1]*(1-f[3]),l-=o,c+=o,d-=o,h+=o),r[0]>l&&r[0]<c&&r[1]>d&&r[1]<h}const Rs={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},ch=Q(),fe=I(),zr=I(),ve=We(),Eo=I(),Io=I(),Ps=Bi(),dh=Bi(),hh=X(),Ee=I(),Ds={normal:Eo,cosAngle:0},$o=X(),uh=1,ph=2,yt=[0,0],fh=Ut(0,0,1);class gh extends sc{constructor(){super(...arguments),this.renderOccluded=gt.Occlude,this.color=kt(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=Wi(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=kt(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.debugDrawLabelBorder=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const Mo=mt().vec3f(u.POSITION).vec3f(u.NORMAL).vec2f(u.UV0).vec4u8(u.COLOR).vec2f(u.SIZE).vec4f(u.AUXPOS1).vec4f(u.AUXPOS2),mh=Mo.clone().vec4u8(u.OBJECTANDLAYERIDCOLOR);class vh{constructor(e){this._material=e,this.vertexBufferLayout=ct("enable-feature:objectAndLayerId-rendering")?mh:Mo}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get(u.POSITION).length}write(e,t,i,s,o){ac(i.indices.get(u.POSITION),i.vertexAttributes.get(u.POSITION).data,e,s.position,o,6),oc(i.indices.get(u.NORMAL),i.vertexAttributes.get(u.NORMAL).data,t,s.normal,o,6);{const a=i.vertexAttributes.get(u.UV0).data;let n,l,c,d;if(a==null||a.length<4){const g=this._material.parameters;n=0,l=0,c=g.texCoordScale[0],d=g.texCoordScale[1]}else n=a[0],l=a[1],c=a[2],d=a[3];c=Math.min(1.99999,c+1),d=Math.min(1.99999,d+1);const h=i.indices.get(u.POSITION).length,f=s.uv0;let p=o;for(let g=0;g<h;++g)f.set(p,0,n),f.set(p,1,l),p+=1,f.set(p,0,c),f.set(p,1,l),p+=1,f.set(p,0,c),f.set(p,1,d),p+=1,f.set(p,0,c),f.set(p,1,d),p+=1,f.set(p,0,n),f.set(p,1,d),p+=1,f.set(p,0,n),f.set(p,1,l),p+=1}nc(i.indices.get(u.COLOR),i.vertexAttributes.get(u.COLOR).data,4,s.color,o,6);{const a=i.indices.get(u.SIZE),n=i.vertexAttributes.get(u.SIZE).data,l=a.length,c=s.size;let d=o;for(let h=0;h<l;++h){const f=n[2*a[h]],p=n[2*a[h]+1];for(let g=0;g<6;++g)c.set(d,0,f),c.set(d,1,p),d+=1}}if(i.indices.get(u.AUXPOS1)&&i.vertexAttributes.get(u.AUXPOS1)&&La(i.indices.get(u.AUXPOS1),i.vertexAttributes.get(u.AUXPOS1).data,s.auxpos1,o,6),i.indices.get(u.AUXPOS2)&&i.vertexAttributes.get(u.AUXPOS2)&&La(i.indices.get(u.AUXPOS2),i.vertexAttributes.get(u.AUXPOS2).data,s.auxpos2,o,6),C(i.objectAndLayerIdColor)&&i.objectAndLayerIdColor.length===4&&i.indices.get(u.POSITION)){const a=i.indices.get(u.POSITION).length,n=s.getField(u.OBJECTANDLAYERIDCOLOR,Ic);lc(i.objectAndLayerIdColor,n,a,o,6)}}}const _h=mt().vec3f(u.POSITION),yh=mt().vec3f(u.POSITION).vec2f(u.UV0),Lo=mt().vec3f(u.POSITION).vec4u8(u.COLOR);mt().vec3f(u.POSITION).vec4u8(u.OBJECTANDLAYERIDCOLOR);mt().vec3f(u.POSITION).vec2f(u.UV0).vec4u8(u.OBJECTANDLAYERIDCOLOR);const Sh=mt().vec3f(u.POSITION).vec4u8(u.COLOR).vec4u8(u.OBJECTANDLAYERIDCOLOR);class Es{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(u.POSITION).length}write(e,t,i,s,o){Na(i,this.vertexBufferLayout,e,t,s,o)}}function xh(r){const e=new Pr,{vertex:t,fragment:i}=e,s=r.output===w.Depth,o=r.hasMultipassTerrain&&(r.output===w.Color||r.output===w.Alpha);return Dr(t,r),e.include(ns,r),e.include(Fa,r),e.include(is,r),e.attributes.add(u.POSITION,"vec3"),e.varyings.add("vpos","vec3"),o&&e.varyings.add("depth","float"),s&&(e.include(ba,r),cc(e),Aa(e)),t.code.add(m`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${o?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${s?m`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:m`transformPosition(proj, view, vpos);`}
    }
  `),e.include(ft,r),o&&e.include(ss,r),i.include(ai),i.uniforms.add(new Te("eColor",a=>a.color)),r.output===w.Highlight&&e.include(di,r),i.code.add(m`
  void main() {
    discardBySlice(vpos);
    ${o?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${r.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${m.float(Ne)}) {
      discard;
    }

    ${r.output===w.Alpha?m`gl_FragColor = vec4(fColor.a);`:""}

    ${r.output===w.Color?m`gl_FragColor = highlightSlice(fColor, vpos); ${r.transparencyPassType===K.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${r.output===w.Highlight?m`outputHighlight();`:""};
    ${r.output===w.Depth?m`outputDepth(linearDepth);`:""};
    ${r.output===w.ObjectAndLayerIdColor?m`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const wh=Object.freeze(Object.defineProperty({__proto__:null,build:xh},Symbol.toStringTag,{value:"Module"}));class Ti extends tr{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Qr.WEBGL2}initializeProgram(e){return new rr(e.rctx,Ti.shader.get().build(this.configuration),Ir)}_createPipeline(e,t){const i=this.configuration,s=e===K.NONE,o=e===K.FrontFace;return ke({blending:i.output!==w.Color&&i.output!==w.Alpha||!i.transparent?null:s?Ar:ri(e),culling:Fl(i.cullFace),depthTest:{func:Qi(e)},depthWrite:s||o?i.writeDepth&&Qt:null,colorWrite:tt,stencilWrite:i.hasOccludees?oi:null,stencilTest:i.hasOccludees?t?ni:as:null,polygonOffset:s||o?i.polygonOffset&&Th:_a(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}Ti.shader=new ir(wh,()=>import("./ColorMaterial.glsl.a024b012.js"));const Th={factor:1,units:1};class Ce extends Yt{constructor(){super(...arguments),this.output=w.Color,this.cullFace=Yi.None,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=K.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1}}v([S({count:w.COUNT})],Ce.prototype,"output",void 0),v([S({count:Yi.COUNT})],Ce.prototype,"cullFace",void 0),v([S()],Ce.prototype,"hasSlicePlane",void 0),v([S()],Ce.prototype,"hasVertexColors",void 0),v([S()],Ce.prototype,"transparent",void 0),v([S()],Ce.prototype,"polygonOffset",void 0),v([S()],Ce.prototype,"enableOffset",void 0),v([S()],Ce.prototype,"writeDepth",void 0),v([S()],Ce.prototype,"hasOccludees",void 0),v([S({count:K.COUNT})],Ce.prototype,"transparencyPassType",void 0),v([S()],Ce.prototype,"hasMultipassTerrain",void 0),v([S()],Ce.prototype,"cullAboveGround",void 0),v([S()],Ce.prototype,"objectAndLayerIdColorInstanced",void 0);class cf extends Er{constructor(e){super(e,new Ch),this.supportsEdges=!0,this._configuration=new Ce}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<ya,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,s,o,a,n){za(e,t,s,o,a,void 0,n)}requiresSlot(e,t){return t===w.Color||t===w.Alpha||t===w.Highlight||t===w.Depth&&this.parameters.writeLinearDepth||t===w.ObjectAndLayerIdColor?e===V.DRAPED_MATERIAL?!0:t===w.Highlight?e===V.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:V.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Oh(e)}createBufferWriter(){return new Es(ct("enable-feature:objectAndLayerId-rendering")?Sh:Lo)}}class Oh extends ci{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==w.Color&&this._output!==w.Alpha||this._updateOccludeeState(e),this.ensureTechnique(Ti,e)}}class Ch extends ls{constructor(){super(...arguments),this.color=Hi,this.transparent=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=Yi.None,this.hasOccludees=!1}}const ge={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},bh={dash:ge.dash,"dash-dot":[...ge.dash,...ge.dot],dot:ge.dot,"long-dash":ge["long-dash"],"long-dash-dot":[...ge["long-dash"],...ge.dot],"long-dash-dot-dot":[...ge["long-dash"],...ge.dot,...ge.dot],none:null,"short-dash":ge["short-dash"],"short-dash-dot":[...ge["short-dash"],...ge["short-dot"]],"short-dash-dot-dot":[...ge["short-dash"],...ge["short-dot"],...ge["short-dot"]],"short-dot":ge["short-dot"],solid:null},Ah=8;function Rh(r,e=2){return j(r)?r:{pattern:r.slice(),pixelRatio:e}}function df(r,e=2){return{pattern:[r,r],pixelRatio:e}}function hf(r){return C(r)&&r.type==="style"?Ph(r.style):null}function Ph(r){return C(r)?Rh(bh[r],Ah):null}var jr,Is;(function(r){r[r.RasterImage=0]="RasterImage",r[r.Features=1]="Features"})(jr||(jr={})),function(r){r[r.WithRasterImage=0]="WithRasterImage",r[r.WithoutRasterImage=1]="WithoutRasterImage"}(Is||(Is={}));var Oi,Ue;(function(r){r[r.ADD=0]="ADD",r[r.UPDATE=1]="UPDATE",r[r.REMOVE=2]="REMOVE"})(Oi||(Oi={})),function(r){r[r.NONE=0]="NONE",r[r.VISIBILITIES=1]="VISIBILITIES",r[r.VERTEXATTRS=2]="VERTEXATTRS",r[r.TRANSFORMATION=4]="TRANSFORMATION",r[r.HIGHLIGHTS=8]="HIGHLIGHTS",r[r.OCCLUDEES=16]="OCCLUDEES"}(Ue||(Ue={}));function uf(r,e=null){const t=[],i=[];Dh(r,i,t);const s=i[0][1].data,o=t[0][1].length,a=new Array(o).fill(0);return Eh(r,i,t),Ih(r,i,t,a),Lh(r,i,t,a),$h(r,i,t,a),Mh(r,i,t,a),Nh(r,i,t,a),Fh(r,i,t,a),zh(r,i,t,s),new De(i,t,ti.Line,e)}function Dh(r,e,t){const{attributeData:{position:i},removeDuplicateStartEnd:s}=r,o=jh(i)&&s,a=i.length/3-(o?1:0),n=new Array(2*(a-1)),l=o?tl(i,0,i.length-3):i;let c=0;for(let d=0;d<a-1;d++)n[c++]=d,n[c++]=d+1;e.push([u.POSITION,{size:3,data:l,exclusive:o}]),t.push([u.POSITION,n])}function Eh(r,e,t){const i=r.attributeData.mapPosition;j(i)||(t.push([u.MAPPOS,t[0][1]]),e.push([u.MAPPOS,{size:3,data:i}]))}function Ih(r,e,t,i){if(C(r.attributeData.colorFeature))return;const s=r.attributeData.color;e.push([u.COLOR,{size:4,data:k(s,Zr)}]),t.push([u.COLOR,i])}function $h(r,e,t,i){if(!C(r.attributeData.normal))return;const s=r.attributeData.normal;e.push([u.NORMAL,{size:3,data:s}]),t.push([u.NORMAL,i])}function Mh(r,e,t,i){const s=r.attributeData.colorFeature;j(s)||(e.push([u.COLORFEATUREATTRIBUTE,{size:1,data:new Float32Array([s])}]),t.push([u.COLOR,i]))}function Lh(r,e,t,i){if(C(r.attributeData.sizeFeature))return;const s=r.attributeData.size;e.push([u.SIZE,{size:1,data:[k(s,1)]}]),t.push([u.SIZE,i])}function Nh(r,e,t,i){const s=r.attributeData.sizeFeature;j(s)||(e.push([u.SIZEFEATUREATTRIBUTE,{size:1,data:new Float32Array([s])}]),t.push([u.SIZEFEATUREATTRIBUTE,i]))}function Fh(r,e,t,i){const s=r.attributeData.opacityFeature;j(s)||(e.push([u.OPACITYFEATUREATTRIBUTE,{size:1,data:new Float32Array([s])}]),t.push([u.OPACITYFEATUREATTRIBUTE,i]))}function zh(r,e,t,i){if(j(r.overlayInfo)||r.overlayInfo.renderCoordsHelper.viewingMode!==dt.Global||!r.overlayInfo.spatialReference.isGeographic)return;const s=new Float64Array(i.length),o=rl(r.overlayInfo.spatialReference);for(let f=0;f<s.length;f+=3)il(i,f,s,f,o);const a=i.length/3,n=new Float32Array(a+1);let l=Uh,c=Vh,d=0,h=0;U(l,s[h++],s[h++],s[h++]),n[0]=0;for(let f=1;f<a+1;++f)f===a&&(h=0),U(c,s[h++],s[h++],s[h++]),d+=sl(l,c),n[f]=d,[l,c]=[c,l];e.push([u.DISTANCETOSTART,{size:1,data:n}]),t.push([u.DISTANCETOSTART,t[0][1]])}function jh(r){const e=r.length;return r[0]===r[e-3]&&r[1]===r[e-2]&&r[2]===r[e-1]}var No;(function(r){r[r.KEEP=0]="KEEP",r[r.REMOVE=1]="REMOVE"})(No||(No={}));const Uh=I(),Vh=I();class Hh{constructor(e,t){this.vec3=e,this.id=t}}function Ci(r,e,t,i){return new Hh(Ut(r,e,t),i)}var pr;(function(r){r[r.None=0]="None",r[r.ColorAndWater=1]="ColorAndWater",r[r.Highlight=2]="Highlight",r[r.Occluded=3]="Occluded",r[r.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"})(pr||(pr={}));class Fo{constructor(e,t){this.index=e,this.renderTargets=t,this._extent=Bt(),this.resolution=0,this.renderLocalOrigin=Ci(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new Gh,this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(t.renderTargets.length).fill(!1)}get extent(){return this._extent}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===pr.ColorAndWater?this.renderTargets.getTarget(re.Color):e===pr.Highlight?this.renderTargets.getTarget(re.Highlight):e===pr.ObjectAndLayerIdColor?this.renderTargets.getTarget(re.ObjectAndLayerIdColor):this.renderTargets.getTarget(re.Occluded);return t?t.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(re.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(re.Color):null}getNormalTexture(e){const t=e===pr.ColorAndWater?this.renderTargets.getTarget(re.Water):null;return t?t.getTexture():null}draw(e,t){const i=this.computeRenderTargetValidityBitfield();for(const s of this.renderTargets.renderTargets)s.type!==re.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[s.type]=e.drawTarget(this,s,t):this.validTargets[s.type]=!1;return i^this.computeRenderTargetValidityBitfield()?Sa.CHANGED:Sa.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[re.Color]|+e[re.ColorNoRasterImage]<<1|+e[re.Highlight]<<2|+e[re.Water]<<3|+e[re.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this._extent[0]-t<=e.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];ta(this._extent,e.range,0,i)}if(this._extent[2]+t>=e.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];ta(this._extent,-e.range,0,i)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,al(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===Yr.INNER?0:this.resolution,0,this.resolution,this.resolution)}}class Gh{constructor(){this.extents=[Bt(),Bt(),Bt()],this.numViews=0}}class zo{constructor(e,t){this._size=ol(),this._fbo=null,this._fbo=new qa(e,{colorTarget:Ba.TEXTURE,depthStencilTarget:Wa.NONE},{target:Mr.TEXTURE_2D,pixelFormat:sr.RGBA,dataType:$r.UNSIGNED_BYTE,wrapMode:ar.CLAMP_TO_EDGE,samplingMode:hi.LINEAR_MIPMAP_LINEAR,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._fbo=Le(this._fbo)}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return this._fbo!==null}resize(e,t){this._size[0]=e,this._size[1]=t,this._fbo.resize(this._size[0],this._size[1])}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){const e=this._fbo.colorTexture;e.descriptor.hasMipmap&&e.generateMipmap()}disposeRenderTargetMemory(){var e;(e=this._fbo)==null||e.resize(0,0)}get gpuMemoryUsage(){var e,t;return(t=(e=this._fbo)==null?void 0:e.gpuMemoryUsage)!=null?t:0}}class fr{constructor(e,t,i,s=!0){this.output=t,this.type=i,this.valid=!1,this.lastUsed=1/0,this.fbo=new zo(e,s)}}class Bh{constructor(e){this.renderTargets=[new fr(e,w.Color,re.Color),new fr(e,w.Color,re.ColorNoRasterImage),new fr(e,w.Highlight,re.Highlight,!1),new fr(e,w.Normal,re.Water),new fr(e,w.Color,re.Occluded)],ct("enable-feature:objectAndLayerId-rendering")&&this.renderTargets.push(new fr(e,w.ObjectAndLayerIdColor,re.ObjectAndLayerIdColor))}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,t,i){if(e)t.lastUsed=i;else if(i-t.lastUsed>Wh)t.fbo.disposeRenderTargetMemory(),t.lastUsed=1/0;else if(t.lastUsed<1/0)return!0;return!1}get gpuMemoryUsage(){return this.renderTargets.reduce((e,t)=>e+t.fbo.gpuMemoryUsage,0)}}const Wh=1e3;class kh{constructor(e){this._context=e,this._perConstructorInstances=new Xa,this._frameCounter=0,this._keepAliveFrameCount=jo}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach(e=>e.forEach(t=>t.technique.destroy())),this._perConstructorInstances.clear()}acquire(e,t=Xh){const i=t.key;let s=this._perConstructorInstances.get(e,i);if(j(s)){const o=new e(this._context,t,()=>this.release(o));s=new qh(o),this._perConstructorInstances.set(e,i,s)}return++s.refCount,s.technique}releaseAndAcquire(e,t,i){if(C(i)){if(t.key===i.key)return i;this.release(i)}return this.acquire(e,t)}release(e){if(j(e)||this._perConstructorInstances.empty)return;const t=this._perConstructorInstances.get(e.constructor,e.key);j(t)||(--t.refCount,t.refCount===0&&(t.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==jo&&this._perConstructorInstances.forEach((e,t)=>{e.forEach((i,s)=>{i.refCount===0&&i.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(i.technique.destroy(),this._perConstructorInstances.delete(t,s))})})}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach((t,i)=>{const s=async(o,a)=>{const n=a.shader;n&&(await n.reload(),o.forEach(l=>l.technique.reload(this._context)))};e.push(s(t,i))}),await Promise.all(e)}}class qh{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}const jo=-1,Xh=new ja,Zh=r=>{class e extends r{constructor(){super(...arguments),this._isDisposed=!1}dispose(){var i;for(const s of(i=this._managedDisposables)!=null?i:[]){const o=this[s];this[s]=null,o&&typeof o.dispose=="function"&&o.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}}return e};function Uo(){return(r,e)=>{var t,i,s;r.hasOwnProperty("_managedDisposables")||(r._managedDisposables=(i=(t=r._managedDisposables)==null?void 0:t.slice())!=null?i:[]),(s=r._managedDisposables)==null||s.unshift(e)}}class Ur{constructor(e=null,t=null,i=null){this._viewUp=I(),this._viewForward=I(),this._viewRight=I(),this._ray=ht(),this._viewport=kt(0,0,1,1),this._padding=kt(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=Wi(1,1e3),this._viewDirty=!0,this._viewMatrix=X(),this._projectionDirty=!0,this._projectionMatrix=X(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=X(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=X(),this._inverseProjectionDirty=!0,this._inverseProjectionMatrix=null,this._frustumDirty=!0,this._frustum=Vc(),this._fullViewport=We(),this._pixelRatio=1,this.relativeElevation=0,C(e)&&z(this._ray.origin,e),this._center=C(t)?qr(t):I(),this._up=C(i)?qr(i):Ut(0,0,1)}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){this._pixelRatio=e>0?e:1}get eye(){return this._ray.origin}set eye(e){this._compareAndSetView(e,this._ray.origin)}get center(){return this._center}set center(e){this._compareAndSetView(e,this._center)}get ray(){return te(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(e){this._compareAndSetView(e,this._up)}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(e){Ge(this._viewMatrix,e),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),this._viewForward}get viewUp(){return this._ensureViewClean(),this._viewUp}get viewRight(){return this._ensureViewClean(),this._viewRight}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(e){this._nearFar[0]!==e&&(this._nearFar[0]=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get far(){return this._nearFar[1]}set far(e){this._nearFar[1]!==e&&(this._nearFar[1]=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get viewport(){return this._viewport}set viewport(e){this.x=e[0],this.y=e[1],this.width=e[2],this.height=e[3]}get x(){return this._viewport[0]}set x(e){e+=this._padding[N.LEFT],this._viewport[0]!==e&&(this._viewport[0]=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get y(){return this._viewport[1]}set y(e){e+=this._padding[N.BOTTOM],this._viewport[1]!==e&&(this._viewport[1]=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get width(){return this._viewport[2]}set width(e){this._viewport[2]!==e&&(this._viewport[2]=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get height(){return this._viewport[3]}set height(e){this._viewport[3]!==e&&(this._viewport[3]=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get fullWidth(){return this._viewport[2]+this._padding[N.RIGHT]+this._padding[N.LEFT]}set fullWidth(e){this.width=e-(this._padding[N.RIGHT]+this._padding[N.LEFT])}get fullHeight(){return this._viewport[3]+this._padding[N.TOP]+this._padding[N.BOTTOM]}set fullHeight(e){this.height=e-(this._padding[N.TOP]+this._padding[N.BOTTOM])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[N.LEFT],this._fullViewport[1]=this._viewport[1]-this._padding[N.BOTTOM],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get aspect(){return this.width/this.height}get padding(){return this._padding}set padding(e){this._padding[N.TOP]===e[N.TOP]&&this._padding[N.RIGHT]===e[N.RIGHT]&&this._padding[N.BOTTOM]===e[N.BOTTOM]&&this._padding[N.LEFT]===e[N.LEFT]||(this._viewport[0]+=e[N.LEFT]-this._padding[N.LEFT],this._viewport[1]+=e[N.BOTTOM]-this._padding[N.BOTTOM],this._viewport[2]-=e[N.RIGHT]+e[N.LEFT]-(this._padding[N.RIGHT]+this._padding[N.LEFT]),this._viewport[3]-=e[N.TOP]+e[N.BOTTOM]-(this._padding[N.TOP]+this._padding[N.BOTTOM]),Kr(this._padding,e),this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get viewProjectionMatrix(){return this._viewProjectionDirty&&(Ot(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){if(this._projectionDirty){const e=this.width,t=this.height,i=this.near*Math.tan(this.fovY/2),s=i*this.aspect;nl(this._projectionMatrix,-s*(1+2*this._padding[N.LEFT]/e),s*(1+2*this._padding[N.RIGHT]/e),-i*(1+2*this._padding[N.BOTTOM]/t),i*(1+2*this._padding[N.TOP]/t),this.near,this.far),this._projectionDirty=!1}return this._projectionMatrix}get inverseProjectionMatrix(){return j(this._inverseProjectionMatrix)&&(this._inverseProjectionMatrix=X()),this._inverseProjectionDirty&&Wt(this._inverseProjectionMatrix,this.projectionMatrix),this._inverseProjectionMatrix}set projectionMatrix(e){Ge(this._projectionMatrix,e),this._projectionDirty=!1,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fov(){return this._fov}set fov(e){this._fov=e,this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return ll(this._fov,this.width,this.height)}set fovX(e){this._fov=cl(e,this.width,this.height),this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return dl(this._fov,this.width,this.height)}set fovY(e){this._fov=hl(e,this.width,this.height),this._projectionDirty=!0,this._inverseProjectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return nt(this._center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(Wt(this._viewInverseTransposeMatrix,this.viewMatrix),ra(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(e){const t=2*e-1;return 2*this.near*this.far/(this.far+this.near-t*(this.far-this.near))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this._pixelRatio}get aboveGround(){return this.relativeElevation!=null&&this.relativeElevation>=0}copyFrom(e){z(this._ray.origin,e.eye),z(this._center,e.center),z(this._up,e.up),Kr(this._viewport,e.viewport),Kr(this._padding,e.padding),Gt(this._nearFar,e.nearFar),this._fov=e.fov,this.relativeElevation=e.relativeElevation;const t=e;return this._viewDirty=t._viewDirty,this._viewDirty||(Ge(this._viewMatrix,e.viewMatrix),z(this._viewRight,e.viewRight),z(this._viewUp,e.viewUp),z(this._viewForward,e.viewForward)),t._projectionDirty?this._projectionDirty=!0:(Ge(this._projectionMatrix,e.projectionMatrix),this._projectionDirty=!1),this._viewProjectionDirty=!0,this._inverseProjectionDirty=!0,this._frustumDirty=t._frustumDirty,this._frustumDirty||(Hc(this._frustum,e.frustum),this._frustumDirty=!1),t._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(Ge(this._viewInverseTransposeMatrix,e.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),Kr(this._fullViewport,e.fullViewport),this._pixelRatio=e.pixelRatio,this}copyViewFrom(e){this.eye=e.eye,this.center=e.center,this.up=e.up}clone(){return new Ur().copyFrom(this)}equals(e){return Cr(this.eye,e.eye)&&Cr(this._center,e.center)&&Cr(this._up,e.up)&&ia(this._viewport,e.viewport)&&ia(this._padding,e.padding)&&ul(this._nearFar,e.nearFar)&&this._fov===e.fov&&this._pixelRatio===e.pixelRatio&&this.relativeElevation===e.relativeElevation}almostEquals(e){if(this._pixelRatio!==e.pixelRatio||Math.abs(e.fov-this._fov)>=.001)return!1;const t=5e-4,i=1-1e-10;sa(me,e.eye,e.center),sa($s,this.eye,this._center);const s=Ke(me,$s),o=aa(me),a=aa($s);return s*s>=i*o*a&&pl(e.eye,this.eye)<Math.max(o,a)*t*t&&oa(e.padding,this._padding)<.5&&oa(e.viewport,this._viewport)<.5}computeRenderPixelSizeAt(e){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(e))}computeRenderPixelSizeAtDist(e){return e*this.perRenderPixelRatio}computeScreenPixelSizeAt(e){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(e))}_viewDirectionDistance(e){return Math.abs(fl(this.viewForward,te(me,e,this.eye)))}computeScreenPixelSizeAtDist(e){return e*this.perScreenPixelRatio}computeDistanceFromRadius(e,t){return e/Math.tan(Math.min(this.fovX,this.fovY)/(2*(t||1)))}getScreenCenter(e=gl()){return e[0]=(this.padding[N.LEFT]+this.width/2)/this._pixelRatio,e[1]=(this.padding[N.TOP]+this.height/2)/this._pixelRatio,e}getRenderCenter(e,t=.5,i=.5){return e[0]=this.padding[N.LEFT]+this.width*t,e[1]=this.padding[N.BOTTOM]+this.height*i,e[2]=.5,e}setGLViewport(e){const t=this.viewport,i=this.padding;e.setViewport(t[0]-i[3],t[1]-i[2],t[2]+i[1]+i[3],t[3]+i[0]+i[2])}applyProjection(e,t){e!==M&&z(M,e),M[3]=1,qt(M,M,this.projectionMatrix);const i=Math.abs(M[3]);W(M,M,1/i);const s=this.fullViewport;t[0]=bt(0,s[0]+s[2],.5+.5*M[0]),t[1]=bt(0,s[1]+s[3],.5+.5*M[1]),t[2]=.5*(M[2]+1),t[3]=i}unapplyProjection(e,t){const i=this.fullViewport;M[0]=(e[0]/(i[0]+i[2])*2-1)*e[3],M[1]=(e[1]/(i[1]+i[3])*2-1)*e[3],M[2]=(2*e[2]-1)*e[3],M[3]=e[3],qt(M,M,this.inverseProjectionMatrix),t[0]=M[0],t[1]=M[1],t[2]=M[2]}projectToScreen(e,t){return this.projectToRenderScreen(e,Ms),this.renderToScreen(Ms,t),t}projectToRenderScreen(e,t){if(M[0]=e[0],M[1]=e[1],M[2]=e[2],M[3]=1,qt(M,M,this.viewProjectionMatrix),M[3]===0)return null;W(M,M,1/Math.abs(M[3]));const i=this.fullViewport;return"x"in t?(t.x=bt(0,i[0]+i[2],.5+.5*M[0]),t.y=bt(0,i[1]+i[3],.5+.5*M[1])):(t[0]=bt(0,i[0]+i[2],.5+.5*M[0]),t[1]=bt(0,i[1]+i[3],.5+.5*M[1]),t.length>2&&(t[2]=.5*(M[2]+1))),t}unprojectFromScreen(e,t){return this.unprojectFromRenderScreen(this.screenToRender(e,Ms),t)}unprojectFromRenderScreen(e,t){if(Ot(bi,this.projectionMatrix,this.viewMatrix),!Wt(bi,bi))return null;const i=this.fullViewport;return M[0]=2*(e[0]-i[0])/i[2]-1,M[1]=2*(e[1]-i[1])/i[3]-1,M[2]=2*e[2]-1,M[3]=1,qt(M,M,bi),M[3]===0?null:(t[0]=M[0]/M[3],t[1]=M[1]/M[3],t[2]=M[2]/M[3],t)}constrainWindowSize(e,t,i,s=i){const o=e*this._pixelRatio,a=t*this._pixelRatio,n=Math.max(o-i/2,0),l=Math.max(this.fullHeight-a-s/2,0),c=-Math.min(o-i/2,0),d=-Math.min(this.fullHeight-a-s/2,0);return[n,l,i-c- -Math.min(this.fullWidth-o-i/2,0),s-d- -Math.min(a-s/2,0)]}computeUp(e){e===dt.Global?this._computeUpGlobal():this._computeUpLocal()}screenToRender(e,t){const i=e[0]*this._pixelRatio,s=this.fullHeight-e[1]*this._pixelRatio;return t[0]=i,t[1]=s,t}renderToScreen(e,t){const i=e[0]/this._pixelRatio,s=(this.fullHeight-e[1])/this._pixelRatio;t[0]=i,t[1]=s}_computeUpGlobal(){te(me,this.center,this.eye);const e=et(this.center);e<1?(U(this._up,0,0,1),this._markViewDirty()):Math.abs(Ke(me,this.center))>.9999*et(me)*e||(Be(this._up,me,this.center),Be(this._up,this._up,me),se(this._up,this._up),this._markViewDirty())}_computeUpLocal(){ml(me,this.eye,this.center),Math.abs(me[2])<=.9999&&(W(me,me,me[2]),U(this._up,-me[0],-me[1],1-me[2]),se(this._up,this._up),this._markViewDirty())}_compareAndSetView(e,t){typeof e[0]=="number"&&isFinite(e[0])&&typeof e[1]=="number"&&isFinite(e[1])&&typeof e[2]=="number"&&isFinite(e[2])?Cr(e,t)||(z(t,e),this._markViewDirty()):Or.getLogger("esri.views.3d.webgl-engine.lib.Camera").warn("Camera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&(Gc(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&(na(this._viewMatrix,this.eye,this._center,this._up),U(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),U(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),U(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}}const M=We(),bi=X(),me=I(),$s=I(),Ms=Pe();var N;(function(r){r[r.TOP=0]="TOP",r[r.RIGHT=1]="RIGHT",r[r.BOTTOM=2]="BOTTOM",r[r.LEFT=3]="LEFT"})(N||(N={}));class Jh{constructor(e,t,i,s){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=i,this.requestRender=s,this._id2glMaterialRef=new Xa}dispose(){this._textureRepository.dispose()}acquire(e,t,i){if(this._ownMaterial(e),!e.requiresSlot(t,i))return null;let s=this._id2glMaterialRef.get(i,e.id);if(j(s)){const o=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:i});s=new Qh(o),this._id2glMaterialRef.set(i,e.id,s)}return s.ref(),s.glMaterial}release(e,t){const i=this._id2glMaterialRef.get(t,e.id);C(i)&&(i.unref(),i.referenced||(Le(i.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){C(e.repository)&&e.repository!==this&&Or.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class Qh{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,ce(this._refCnt>=0)}get referenced(){return this._refCnt>0}}const Yh={rootOrigin:null};class Kh{constructor(e){this._originSR=e,this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._rootOriginId="root/"+wr()}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(t==null){const d=Yh.rootOrigin;if(C(d))return this._origins.set(this._rootOriginId,Ci(d[0],d[1],d[2],this._rootOriginId)),this.getOrigin(e);const h=Ci(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,h),h}const i=this._gridSize,s=Math.round(e[0]/i),o=Math.round(e[1]/i),a=Math.round(e[2]/i),n=`${s}/${o}/${a}`;let l=this._origins.get(n);const c=.5*i;if(te(ne,e,t.vec3),ne[0]=Math.abs(ne[0]),ne[1]=Math.abs(ne[1]),ne[2]=Math.abs(ne[2]),ne[0]<c&&ne[1]<c&&ne[2]<c){if(l){const d=Math.max(...ne);if(te(ne,e,l.vec3),ne[0]=Math.abs(ne[0]),ne[1]=Math.abs(ne[1]),ne[2]=Math.abs(ne[2]),Math.max(...ne)<d)return l}return t}return l||(l=Ci(s*i,o*i,a*i,n),this._origins.set(n,l)),l}_drawOriginBox(e,t=kt(1,1,0,1)){const i=window.view,s=i._stage,o=t.toString();if(!this._objects.has(o)){this._material=new _d({width:2,color:t}),s.add(this._material);const p=new qc({isPickable:!1}),g=new Wc({castShadow:!1});s.add(g),p.add(g),s.add(p),this._objects.set(o,g)}const a=this._objects.get(o),n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],l=n.length,c=new Array(3*l),d=new Array,h=.5*this._gridSize;for(let p=0;p<l;p++)c[3*p+0]=e[0]+(1&n[p]?h:-h),c[3*p+1]=e[1]+(2&n[p]?h:-h),c[3*p+2]=e[2]+(4&n[p]?h:-h),p>0&&d.push(p-1,p);Jr(c,this._originSR,0,c,i.renderSpatialReference,0,l);const f=new De([[u.POSITION,{size:3,data:c,exclusive:!0}]],[[u.POSITION,d]],ti.Line);s.add(f),a.addGeometry(f,this._material,Vt)}get test(){const e=this;return{set gridSize(t){e._gridSize=t}}}}const ne=I();var Vr,Ai;(function(r){r[r.RENDERING=0]="RENDERING",r[r.FINISHED_RENDERING=1]="FINISHED_RENDERING",r[r.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",r[r.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",r[r.FINISHED=4]="FINISHED"})(Vr||(Vr={})),function(r){r[r.RG=0]="RG",r[r.BA=1]="BA"}(Ai||(Ai={}));class eu{constructor(){this.readChannels=Ai.RG,this.renderingStage=Vr.FINISHED,this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=I(),this.isCameraPositionFinal=!0,this.parallax=new Vo,this.parallaxNew=new Vo,this.crossFade={enabled:!1,factor:1,distanceThresholdFactor:.3},this.fadeInOut={stage:gr.FINISHED,factor:1,distanceThresholdFactor:.6},this.fadeIn={stage:Ri.FINISHED,factor:1,distanceThresholdFactor:2},this.fadeInOutHeight={stage:Pi.FINISHED,factor:-1}}get isFading(){return this.fadeInOut.stage===gr.FADE_OUT||this.fadeInOut.stage===gr.FADE_IN||this.fadeIn.stage===Ri.FADE_IN||this.fadeInOutHeight.stage!==Pi.FINISHED||this.renderingStage===Vr.FADING_TEXTURE_CHANNELS}}var Ri,gr,Pi;(function(r){r[r.FINISHED=0]="FINISHED",r[r.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",r[r.FADE_IN=2]="FADE_IN"})(Ri||(Ri={})),function(r){r[r.FINISHED=0]="FINISHED",r[r.FADE_OUT=1]="FADE_OUT",r[r.SWITCH=2]="SWITCH",r[r.FADE_IN=3]="FADE_IN"}(gr||(gr={})),function(r){r[r.FINISHED=0]="FINISHED",r[r.HEIGHT_FADE=1]="HEIGHT_FADE"}(Pi||(Pi={}));class Vo{constructor(){this.anchorPointClouds=I(),this.cloudsHeight=1e5,this.radiusCurvatureCorrectionFactor=0,this.transform=X()}}function tu(r,e){const t=r.fragment;t.include(os),t.uniforms.add(new pt("nearFar",(i,s)=>s.camera.nearFar)),t.uniforms.add(new Rt("depthMap",(i,s)=>s.linearDepthTexture)),t.uniforms.add(new er("proj",(i,s)=>s.ssr.camera.projectionMatrix)),t.uniforms.add(new H("invResolutionHeight",(i,s)=>1/s.ssr.camera.height)),t.uniforms.add(new er("reprojectionMatrix",(i,s)=>s.ssr.reprojectionMatrix)),t.code.add(m`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${e.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}class ru{constructor(){this.reprojectionMatrix=X()}}class iu{constructor(e,t,i){this.shadowMap=e,this.ssaoHelper=t,this.slicePlane=i,this.slot=V.OPAQUE_MATERIAL,this.hasOccludees=!1,this.enableFillLights=!0,this._inverseViewport=Q(),this.oldLighting=new cs,this.newLighting=new cs,this._fadedLighting=new cs,this._lighting=this.newLighting,this.ssr=new ru,this.multipassTerrain=new dc,this.multipassGeometry=new Kd,this.overlays=[],this.cloudsFade=new eu}get camera(){return this._camera}set camera(e){this._camera=this.ssr.camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}get weatherFading(){return this._lighting===this._fadedLighting}fadeLighting(e){const{oldLighting:t,newLighting:i}=this;e>=1?this._lighting=i:(this._fadedLighting.lerpLighting(t,i,e),this._lighting=this._fadedLighting)}}class su{constructor(e,t,i,s=null){this.rctx=e,this.sliceHelper=s,this.lastFrameCamera=new Ur,this.output=w.Color,this.renderOccludedMask=Ho,this.bindParameters=new iu(t,i,C(s)?s.plane:null)}resetRenderOccludedMask(){this.renderOccludedMask=Ho}}const Ho=gt.Occlude|gt.OccludeAndTransparent|gt.OccludeAndTransparentStencil;var Go;(function(r){r[r.Highlight=0]="Highlight",r[r.Default=1]="Default"})(Go||(Go={}));class Di{constructor(){this.camera=new Ur,this.lightMat=X()}}class au{constructor(e,t){this._rctx=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureSize=0,this._numCascades=1,this._maxNumCascades=4,this._splitSchemeLambda=0,this._warp=!0,this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=We(),this._cascades=[new Di,new Di,new Di,new Di],this._maxTextureSize=Math.min(ct("esri-mobile")?2048:8192,this._rctx.parameters.maxTextureSize)}get depthTexture(){return this._depthTexture}get textureSize(){return this._textureSize}get numCascades(){return this._numCascades}get cascadeDistances(){return Tr(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}dispose(){this._discardDepthTexture(),this._discardAllSnapshots()}set maxCascades(e){this._maxNumCascades=Ht(Math.floor(e),1,4)}get maxCascades(){return this._maxNumCascades}set enabled(e){this._enabled=e,e||(this._discardDepthTexture(),this._discardAllSnapshots())}get enabled(){return this._enabled}get ready(){return this._enabled&&C(this._depthTexture)}getSnapshot(e){return this.enabled?this._snapshots[e]:null}getCascades(){for(let e=0;e<this._numCascades;++e)Ns[e]=this._cascades[e];return Ns.length=this._numCascades,Ns}start(e,t,i){ce(this.enabled),this._textureSize=this._computeTextureSize(e.fullWidth,e.fullHeight),this._ensureDepthTexture();const{near:s,far:o}=this._clampNearFar(i);this._computeCascadeDistances(o,s),this._setupMatrices(e,t);const a=e.viewMatrix,n=e.projectionMatrix;for(let l=0;l<this._numCascades;++l)this._constructCascade(l,n,a,t);this._lastOrigin=null,this.clear()}finish(e){ce(this.enabled),this._rctx.bindFramebuffer(e)}getShadowMapMatrices(e){if(!this._lastOrigin||!Cr(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||I(),z(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){la(Ko,this._cascades[t].lightMat,e);for(let i=0;i<16;++i)en[16*t+i]=Ko[i]}}return en}takeCascadeSnapshotTo(e,t){ce(this.enabled);const i=this._ensureSnapshot(t);this._bindFbo();const s=this._rctx,o=s.bindTexture(i,lr.TEXTURE_UNIT_FOR_UPDATES);s.gl.copyTexSubImage2D(Mr.TEXTURE_2D,0,e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[2],e.camera.viewport[3]),s.bindTexture(o,lr.TEXTURE_UNIT_FOR_UPDATES)}clear(){const e=this._rctx;this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(ui.COLOR_BUFFER_BIT|ui.DEPTH_BUFFER_BIT)}_computeTextureSize(e,t){const i=.5*Math.log(e*e+t*t)*Math.LOG2E,s=.35,o=2**Math.round(i+s);return Math.min(this._maxTextureSize,2*o)}_ensureDepthTexture(){if(C(this._depthTexture)&&this._depthTexture.descriptor.width===this._textureSize)return;this._discardDepthTexture();const e={target:Mr.TEXTURE_2D,pixelFormat:sr.RGBA,dataType:$r.UNSIGNED_BYTE,wrapMode:ar.CLAMP_TO_EDGE,samplingMode:hi.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};this._depthTexture=new lr(this._rctx,e),this._fbo=new qa(this._rctx,{colorTarget:Ba.TEXTURE,depthStencilTarget:Wa.DEPTH_RENDER_BUFFER,width:this._textureSize,height:this._textureSize},this._depthTexture)}_ensureSnapshot(e){let t=this._snapshots[e];if(C(t)&&t.descriptor.width===this._textureSize)return t;this._discardSnapshot(e);const i={target:Mr.TEXTURE_2D,pixelFormat:sr.RGBA,dataType:$r.UNSIGNED_BYTE,wrapMode:ar.CLAMP_TO_EDGE,samplingMode:hi.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};return t=new lr(this._rctx,i),this._snapshots[e]=t,t}_discardDepthTexture(){this._fbo=Le(this._fbo),this._depthTexture=Le(this._depthTexture)}_discardSnapshot(e){this._snapshots[e]=Le(this._snapshots[e])}_discardAllSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){const e=this._rctx;e.unbindTexture(this._depthTexture),e.bindFramebuffer(this._fbo)}_constructCascade(e,t,i,s){const o=this._cascades[e],a=-this._cascadeDistances[e],n=-this._cascadeDistances[e+1],l=(t[10]*a+t[14])/Math.abs(t[11]*a+t[15]),c=(t[10]*n+t[14])/Math.abs(t[11]*n+t[15]);ce(l<c);for(let h=0;h<8;++h){Tr(qo,h%4==0||h%4==3?-1:1,h%4==0||h%4==1?-1:1,h<4?l:c,1),qt(be[h],qo,ko);for(let f=0;f<3;++f)be[h][f]/=be[h][3]}vl(Ls,be[0]),la(Bo,Yo,Ls),o.camera.viewMatrix=Bo;for(let h=0;h<8;++h)q(be[h],be[h],o.camera.viewMatrix);z(Ze,be[0]),z(Je,be[0]);for(let h=1;h<8;++h)for(let f=0;f<3;++f)Ze[f]=Math.min(Ze[f],be[h][f]),Je[f]=Math.max(Je[f],be[h][f]);Ze[2]-=200,Je[2]+=200,o.camera.near=-Je[2],o.camera.far=-Ze[2],this._warp?this._constructTrapezoidalProjection(i,s,o):this._constructOrthogonalProjection(o),Ot(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const d=this._textureSize/2;o.camera.viewport[0]=e%2==0?0:d,o.camera.viewport[1]=Math.floor(e/2)===0?0:d,o.camera.viewport[2]=d,o.camera.viewport[3]=d}_constructOrthogonalProjection(e){ca(e.camera.projectionMatrix,Ze[0],Je[0],Ze[1],Je[1],e.camera.near,e.camera.far)}_constructTrapezoidalProjection(e,t,i){const s=1/be[0][3],o=1/be[4][3];ce(s<o);let a=s+Math.sqrt(s*o);const n=Math.sin(_l(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));a/=n,nu(be,a,n,Xo,Zo,ou,Jo,Qo),lu(Xo,Zo,Jo,Qo,i.camera.projectionMatrix),i.camera.projectionMatrix[10]=2/(Ze[2]-Je[2]),i.camera.projectionMatrix[14]=-(Ze[2]+Je[2])/(Ze[2]-Je[2])}_setupMatrices(e,t){Ot(Wo,e.projectionMatrix,e.viewMatrix),Wt(ko,Wo);const i=this._viewingMode===dt.Global?e.eye:U(Ls,0,0,1);na(Yo,[0,0,0],[-t[0],-t[1],-t[2]],i)}_clampNearFar(e){let{near:t,far:i}=e;return t<2&&(t=2),i<2&&(i=2),t>=i&&(t=2,i=4),{near:t,far:i}}_computeCascadeDistances(e,t){this._numCascades=Math.min(1+Math.floor(yl(e/t,4)),this._maxNumCascades);const i=(e-t)/this._numCascades,s=(e/t)**(1/this._numCascades);let o=t,a=t;for(let n=0;n<this._numCascades+1;++n)this._cascadeDistances[n]=bt(o,a,this._splitSchemeLambda),o*=s,a+=i}get gpuMemoryUsage(){var e,t;return this._snapshots.reduce((i,s)=>i+Fc(s),(t=(e=this._fbo)==null?void 0:e.gpuMemoryUsage)!=null?t:0)}get test(){const e=this;return{maxNumCascades:this._maxNumCascades,cascades:this._cascades,textureSize:this._textureSize,set splitSchemeLambda(t){e._splitSchemeLambda=t},get splitSchemeLambda(){return e._splitSchemeLambda},set warp(t){e._warp=t},get warp(){return e._warp}}}}const Bo=X(),Wo=X(),ko=X(),qo=We(),be=[];for(let r=0;r<8;++r)be.push(We());const Ze=I(),Je=I(),Xo=Q(),Zo=Q(),ou=Q(),Jo=Q(),Qo=Q(),Yo=X(),Ls=I(),Ns=[],Ko=X(),en=new Float32Array(64),Ie=Q(),mr=Q(),$t=[Q(),Q(),Q(),Q()],ie=Q(),Fs=Q(),St=Q(),Hr=Q(),vr=Q(),_r=Q(),Ei=Q();function nu(r,e,t,i,s,o,a,n){Ct(Ie,0,0);for(let b=0;b<4;++b)At(Ie,Ie,r[b]);Xt(Ie,Ie,.25),Ct(mr,0,0);for(let b=4;b<8;++b)At(mr,mr,r[b]);Xt(mr,mr,.25),br($t[0],r[4],r[5],.5),br($t[1],r[5],r[6],.5),br($t[2],r[6],r[7],.5),br($t[3],r[7],r[4],.5);let l=0,c=da($t[0],Ie);for(let b=1;b<4;++b){const A=da($t[b],Ie);A<c&&(c=A,l=b)}Zt(ie,$t[l],r[l+4]);const d=ie[0];let h,f;ie[0]=-ie[1],ie[1]=d,Zt(Fs,mr,Ie),pe(Fs,ie)<0&&Sl(ie,ie),br(ie,ie,Fs,t),ha(ie,ie),h=f=pe(Zt(St,r[0],Ie),ie);for(let b=1;b<8;++b){const A=pe(Zt(St,r[b],Ie),ie);A<h?h=A:A>f&&(f=A)}Gt(i,Ie),Xt(St,ie,h-e),At(i,i,St);let p=-1,g=1,_=0,T=0;for(let b=0;b<8;++b){Zt(Hr,r[b],i),ha(Hr,Hr);const A=ie[0]*Hr[1]-ie[1]*Hr[0];A>0?A>p&&(p=A,_=b):A<g&&(g=A,T=b)}Jt(p>0,"leftArea"),Jt(g<0,"rightArea"),Xt(vr,ie,h),At(vr,vr,Ie),Xt(_r,ie,f),At(_r,_r,Ie),Ei[0]=-ie[1],Ei[1]=ie[0];const y=ei(i,r[T],_r,At(St,_r,Ei),1,s),x=ei(i,r[_],_r,St,1,o),O=ei(i,r[_],vr,At(St,vr,Ei),1,a),R=ei(i,r[T],vr,St,1,n);Jt(y,"rayRay"),Jt(x,"rayRay"),Jt(O,"rayRay"),Jt(R,"rayRay")}function F(r,e){return 3*e+r}const tn=Q();function Ae(r,e){return Ct(tn,r[e],r[e+3]),tn}const we=Q(),P=Bi();function lu(r,e,t,i,s){Zt(we,t,i),Xt(we,we,.5),P[0]=we[0],P[1]=we[1],P[2]=0,P[3]=we[1],P[4]=-we[0],P[5]=0,P[6]=we[0]*we[0]+we[1]*we[1],P[7]=we[0]*we[1]-we[1]*we[0],P[8]=1,P[F(0,2)]=-pe(Ae(P,0),r),P[F(1,2)]=-pe(Ae(P,1),r);let o=pe(Ae(P,0),t)+P[F(0,2)],a=pe(Ae(P,1),t)+P[F(1,2)],n=pe(Ae(P,0),i)+P[F(0,2)],l=pe(Ae(P,1),i)+P[F(1,2)];o=-(o+n)/(a+l),P[F(0,0)]+=P[F(1,0)]*o,P[F(0,1)]+=P[F(1,1)]*o,P[F(0,2)]+=P[F(1,2)]*o,o=1/(pe(Ae(P,0),t)+P[F(0,2)]),a=1/(pe(Ae(P,1),t)+P[F(1,2)]),P[F(0,0)]*=o,P[F(0,1)]*=o,P[F(0,2)]*=o,P[F(1,0)]*=a,P[F(1,1)]*=a,P[F(1,2)]*=a,P[F(2,0)]=P[F(1,0)],P[F(2,1)]=P[F(1,1)],P[F(2,2)]=P[F(1,2)],P[F(1,2)]+=1,o=pe(Ae(P,1),e)+P[F(1,2)],a=pe(Ae(P,2),e)+P[F(2,2)],n=pe(Ae(P,1),t)+P[F(1,2)],l=pe(Ae(P,2),t)+P[F(2,2)],o=-.5*(o/a+n/l),P[F(1,0)]+=P[F(2,0)]*o,P[F(1,1)]+=P[F(2,1)]*o,P[F(1,2)]+=P[F(2,2)]*o,o=pe(Ae(P,1),e)+P[F(1,2)],a=pe(Ae(P,2),e)+P[F(2,2)],n=-a/o,P[F(1,0)]*=n,P[F(1,1)]*=n,P[F(1,2)]*=n,s[0]=P[0],s[1]=P[1],s[2]=0,s[3]=P[2],s[4]=P[3],s[5]=P[4],s[6]=0,s[7]=P[5],s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=P[6],s[13]=P[7],s[14]=0,s[15]=P[8]}class cu{constructor(){this.adds=new Re,this.removes=new Re,this.updates=new Re({allocator:e=>e||new du,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class du{}class hu{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}var xt,Mt;(function(r){r[r.OBJECT=0]="OBJECT",r[r.HUD=1]="HUD",r[r.TERRAIN=2]="TERRAIN",r[r.OVERLAY=3]="OVERLAY",r[r.I3S=4]="I3S",r[r.PCL=5]="PCL",r[r.LOD=6]="LOD",r[r.VOXEL=7]="VOXEL"})(xt||(xt={}));class uu{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=Mt.ALL}}(function(r){r[r.MIN=0]="MIN",r[r.MINMAX=1]="MINMAX",r[r.ALL=2]="ALL"})(Mt||(Mt={}));function pu(r){return C(r)&&C(r.dist)}const rn=1e-5;class fu{constructor(e){this.options=new uu,this._results=new gu,this.transform=new hc,this.tolerance=rn,this.verticalOffset=null,this._ray=ht(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e!=null?e:dt.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,t,i){this.resetWithRay(xl(e,t,this._ray),i)}resetWithRay(e,t){this.camera=t,e!==this._ray&&ki(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===dt.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,ee(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,t,i,s,o){this.point=t,this.filterPredicate=s,this.tolerance=i!=null?i:rn;const a=Ua(this.verticalOffset);if(C(e)&&e.length>0){const n=o?l=>{o(l)&&this.intersectObject(l)}:l=>{this.intersectObject(l)};for(const l of e){const c=l.getSpatialQueryAccelerator&&l.getSpatialQueryAccelerator();C(c)?(C(a)?c.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,n,a):c.forEachAlongRay(this._ray.origin,this._ray.direction,n),this.options.selectionMode&&this.options.hud&&c.forEachDegenerateObject(n)):l.objects.forAll(d=>n(d))}}this.sortResults()}intersectObject(e){const t=e.geometryRecords;if(!t)return;const i=e.transformation,s=Ua(this.verticalOffset);for(const o of t){const{geometry:a,material:n,instanceParameters:l}=o;if(li(l))continue;const c=a.id;this.transform.setAndInvalidateLazyTransforms(i,o.getShaderTransformation()),q(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),q(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const d=this.transform.transform;C(s)&&(s.objectTransform=this.transform),n.intersect(a,l,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(h,f,p,g,_,T)=>{if(h>=0){if(C(this.filterPredicate)&&!this.filterPredicate(this._ray.origin,this._rayEnd,h))return;const y=g?this._results.hud:this._results,x=g?O=>{const R={object:e,geometryId:c,triangleNr:p,center:C(T)?[T[0],T[1],T[2]]:null};O.set(xt.HUD,R,h,f,Vt,_)}:O=>O.set(xt.OBJECT,{object:e,geometryId:c,triangleNr:p},h,f,d,_);if((y.min.drapedLayerOrder==null||_>=y.min.drapedLayerOrder)&&(y.min.dist==null||h<y.min.dist)&&x(y.min),this.options.store!==Mt.MIN&&(y.max.drapedLayerOrder==null||_<y.max.drapedLayerOrder)&&(y.max.dist==null||h>y.max.dist)&&x(y.max),this.options.store===Mt.ALL)if(g){const O=new zs(this._ray);x(O),this._results.hud.all.push(O)}else{const O=new yr(this._ray);x(O),this._results.all.push(O)}}},o.shaderTransformation)}}sortResults(e=this._results.all){e.sort((t,i)=>t.dist!==i.dist?k(t.dist,0)-k(i.dist,0):t.drapedLayerOrder!==i.drapedLayerOrder?k(t.drapedLayerOrder,Number.MAX_VALUE)-k(i.drapedLayerOrder,Number.MAX_VALUE):k(i.drapedLayerGraphicOrder,Number.MIN_VALUE)-k(t.drapedLayerGraphicOrder,Number.MIN_VALUE))}}function pf(r){return new fu(r)}class gu{constructor(){this.min=new yr(ht()),this.max=new yr(ht()),this.hud={min:new zs(ht()),max:new zs(ht()),all:new Array},this.ground=new yr(ht()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}}class yr{constructor(e){this.intersector=xt.OBJECT,this.normal=I(),this.transformation=X(),this._ray=ht(),this.init(e)}get ray(){return this._ray}get distanceInRenderSpace(){return C(this.dist)?(W(Ii,this.ray.direction,this.dist),et(Ii)):null}getIntersectionPoint(e){return!!pu(this)&&(W(Ii,this.ray.direction,this.dist),ee(e,this.ray.origin,Ii),!0)}getTransformedNormal(e){return z(Gr,this.normal),Gr[3]=0,qt(Gr,Gr,this.transformation),z(e,Gr),se(e,e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=xt.OBJECT,ki(e,this._ray)}set(e,t,i,s,o,a,n){this.intersector=e,this.dist=i,z(this.normal,k(s,wl)),Ge(this.transformation,k(o,Vt)),this.target=t,this.drapedLayerOrder=a,this.drapedLayerGraphicOrder=n}copy(e){ki(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,z(this.normal,e.normal),Ge(this.transformation,e.transformation)}}class zs extends yr{constructor(){super(...arguments),this.intersector=xt.HUD}}function mu(r){return new yr(r)}const Ii=I(),Gr=We();function vu(r){const e=new Map,t=i=>{let s=e.get(i);return s||(s=new hu,e.set(i,s)),s};return r.removes.forAll(i=>{js(i)&&t(i.material).removes.push(i)}),r.adds.forAll(i=>{js(i)&&t(i.material).adds.push(i)}),r.updates.forAll(i=>{js(i.renderGeometry)&&t(i.renderGeometry.material).updates.push(i)}),e}function js(r){return r.data.indexCount>=1}class _u{constructor(e,t){this._material=e,this._repository=t,this._map=new Map}destroy(){this._map.forEach((e,t)=>{C(e)&&this._repository.release(this._material,t)})}load(e,t,i){if(!this._material.requiresSlot(t,i))return null;this._map.has(i)||this._map.set(i,this._repository.acquire(this._material,t,i));const s=this._map.get(i);if(C(s)){if(s.ensureResources(e)===zl.LOADED)return s;this._repository.requestRender()}return null}}class yu extends uc{constructor(e=I()){super(),this.origin=e,this.slicePlaneLocalOrigin=this.origin}}class Su{constructor(){this.enabled=!0,this._time=Tl(0)}get time(){return this._time}advance(e){return this._time!==e.time&&(this._time=e.time,!0)}}function xu(r){r.fragment.code.add(m`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function wu(r){r.fragment.code.add(m`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function sn(r){r.fragment.uniforms.add(new Rt("texWaveNormal",e=>e.waveNormal)),r.fragment.uniforms.add(new Rt("texWavePerturbation",e=>e.wavePertubation)),r.fragment.uniforms.add([new Te("waveParams",e=>Tr(Tu,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new pt("waveDirection",e=>Ct(Ou,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))]),r.include(xu),r.fragment.code.add(m`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const Tu=We(),Ou=Q();function an(r,e){e.spherical?r.vertex.code.add(m`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):r.vertex.code.add(m`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),e.spherical?r.vertex.code.add(m`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):r.vertex.code.add(m`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function Cu(r){r.fragment.code.add(m`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}class bu extends pc{constructor(e,t){super(e,"samplerCube",fc.Pass,(i,s,o)=>i.bindTexture(e,t(s,o)))}}function Au(r){const e=r.fragment;e.uniforms.add([new er("rotationMatrixClouds",(t,i)=>i.cloudsFade.parallax.transform),new er("rotationMatrixCloudsCrossFade",(t,i)=>i.cloudsFade.parallaxNew.transform),new Kt("anchorPosition",(t,i)=>i.cloudsFade.parallax.anchorPointClouds),new Kt("anchorPositionCrossFade",(t,i)=>i.cloudsFade.parallaxNew.anchorPointClouds),new H("cloudsHeight",(t,i)=>i.cloudsFade.parallax.cloudsHeight),new H("radiusCurvatureCorrectionFactor",(t,i)=>i.cloudsFade.parallax.radiusCurvatureCorrectionFactor),new H("totalFadeInOut",(t,i)=>i.cloudsFade.fadeInOut.stage===gr.FINISHED?i.cloudsFade.fadeInOutHeight.factor+1-i.cloudsFade.fadeIn.factor:i.cloudsFade.fadeInOutHeight.factor+1-i.cloudsFade.fadeInOut.factor),new H("crossFadeAnchorFactor",(t,i)=>Ht(i.cloudsFade.crossFade.factor,0,1)),new bu("cubeMap",(t,i)=>C(i.cloudsFade.data)&&C(i.cloudsFade.data.cubeMap)?i.cloudsFade.data.cubeMap.colorTexture:null),new ds("crossFade",(t,i)=>i.cloudsFade.crossFade.enabled),new ds("readChannelsRG",(t,i)=>i.cloudsFade.readChannels===Ai.RG),new ds("fadeTextureChannels",(t,i)=>i.cloudsFade.renderingStage===Vr.FADING_TEXTURE_CHANNELS)]),e.constants.add("planetRadius","float",Ol.radius),e.code.add(m`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),e.code.add(m`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),e.code.add(m`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),Va(e),Ha(e),e.code.add(m`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),e.code.add(m`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),e.code.add(m`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),e.code.add(m`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),e.code.add(m`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}function Ru(r,e){r.include(gc,e),r.include(Cu),r.include(wu),e.hasCloudsReflections&&r.include(Au,e),e.hasScreenSpaceReflections&&r.include(tu,e);const t=r.fragment;t.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),t.code.add(m`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),t.uniforms.add([new H("lightingSpecularStrength",(i,s)=>s.lighting.mainLight.specularStrength),new H("lightingEnvironmentStrength",(i,s)=>s.lighting.mainLight.environmentStrength)]),t.code.add(m`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.hasCloudsReflections&&t.code.add(m`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),e.hasScreenSpaceReflections?(t.uniforms.add(new er("view",(i,s)=>s.ssr.camera.viewMatrix)),t.uniforms.add(new Rt("lastFrameColorMap",(i,s)=>s.ssr.lastFrameColorTexture)),t.code.add(m`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`)):t.code.add(m`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.hasCloudsReflections?e.hasScreenSpaceReflections?t.code.add(m`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):t.code.add(m`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):t.code.add(m`return waterRenderedColor;
}`)}function Pu(r){const e=new Pr,{vertex:t,fragment:i}=e;Dr(t,r),e.include(ns,r),e.attributes.add(u.POSITION,"vec3"),e.attributes.add(u.UV0,"vec2");const s=new Te("waterColor",o=>o.color);if(r.output===w.Color&&r.isDraped)return e.varyings.add("vpos","vec3"),t.uniforms.add(s),t.code.add(m`
        void main(void) {
          if (waterColor.a < ${m.float(Ne)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(s),i.code.add(m`void main() {
gl_FragColor = waterColor;
}`),e;switch(r.output!==w.Color&&r.output!==w.Alpha||(e.include(an,r),e.include(mc,r),e.varyings.add("vuv","vec2"),e.varyings.add("vpos","vec3"),e.varyings.add("vnormal","vec3"),e.varyings.add("vtbnMatrix","mat3"),r.hasMultipassTerrain&&e.varyings.add("depth","float"),t.uniforms.add(s),t.code.add(m`
      void main(void) {
        if (waterColor.a < ${m.float(Ne)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${r.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${r.output===w.Color?"forwardLinearDepth();":""}
      }
    `)),e.include(ss,r),r.output){case w.Alpha:e.include(ft,r),i.uniforms.add(s),i.code.add(m`
        void main() {
          discardBySlice(vpos);
          ${r.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `);break;case w.Color:e.include(vc,r),e.include(_c,{pbrMode:Ga.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(sn),e.include(ft,r),e.include(yc,r),e.include(Ru,r),i.uniforms.add([s,new H("timeElapsed",o=>o.timeElapsed),t.uniforms.get("view"),t.uniforms.get("localOrigin")]),rs(i,r),i.include(ai),Va(i),Ha(i),i.code.add(m`
      void main() {
        discardBySlice(vpos);
        ${r.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${r.receiveShadows?m`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${r.transparencyPassType===K.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `);break;case w.Normal:e.include(an,r),e.include(sn,r),e.include(ft,r),e.varyings.add("vpos","vec3"),e.varyings.add("vuv","vec2"),t.uniforms.add(s),t.code.add(m`
        void main(void) {
          if (waterColor.a < ${m.float(Ne)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(new H("timeElapsed",o=>o.timeElapsed)),i.code.add(m`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case w.Highlight:e.include(di,r),e.varyings.add("vpos","vec3"),t.uniforms.add(s),t.code.add(m`
      void main(void) {
        if (waterColor.a < ${m.float(Ne)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),e.include(ft,r),i.code.add(m`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return e}const Du=Object.freeze(Object.defineProperty({__proto__:null,build:Pu},Symbol.toStringTag,{value:"Module"}));class $i extends tr{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Qr.WEBGL2,t.spherical=e.viewingMode===dt.Global,t.doublePrecisionRequiresObfuscation=Sc(e.rctx)}initializeProgram(e){return new rr(e.rctx,$i.shader.get().build(this.configuration),Ir)}_setPipelineState(e){const t=this.configuration,i=e===K.NONE,s=e===K.FrontFace;return ke({blending:t.output!==w.Normal&&t.output!==w.Highlight&&t.transparent?i?Ar:ri(e):null,depthTest:{func:Qi(e)},depthWrite:i?t.writeDepth&&Qt:va(e),colorWrite:tt,polygonOffset:i||s?null:_a(t.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}$i.shader=new ir(Du,()=>import("./WaterSurface.glsl.55895f78.js"));class le extends Yt{constructor(){super(...arguments),this.output=w.Color,this.transparencyPassType=K.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.isDraped=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}v([S({count:w.COUNT})],le.prototype,"output",void 0),v([S({count:K.COUNT})],le.prototype,"transparencyPassType",void 0),v([S()],le.prototype,"spherical",void 0),v([S()],le.prototype,"receiveShadows",void 0),v([S()],le.prototype,"hasSlicePlane",void 0),v([S()],le.prototype,"transparent",void 0),v([S()],le.prototype,"enableOffset",void 0),v([S()],le.prototype,"writeDepth",void 0),v([S()],le.prototype,"hasScreenSpaceReflections",void 0),v([S()],le.prototype,"doublePrecisionRequiresObfuscation",void 0),v([S()],le.prototype,"hasCloudsReflections",void 0),v([S()],le.prototype,"isDraped",void 0),v([S()],le.prototype,"hasMultipassTerrain",void 0),v([S()],le.prototype,"cullAboveGround",void 0),v([S({constValue:Ga.Water})],le.prototype,"pbrMode",void 0),v([S({constValue:!0})],le.prototype,"useCustomDTRExponentForWater",void 0),v([S({constValue:!0})],le.prototype,"highStepCount",void 0),v([S({constValue:!1})],le.prototype,"useFillLights",void 0);class Eu extends ci{_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})}_updateSSRState(e){e.ssr.enabled!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:e.ssr.enabled})}_updateCloudsReflectionState(e){const t=C(e.cloudsFade.data);t!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:t})}ensureResources(e){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(e)}beginSlot(e){return this._output===w.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters),this.ensureTechnique($i,e)}}class Iu extends Er{constructor(e){super(e,new $u),this._configuration=new le,this.animation=new Su}getConfiguration(e,t){return this._configuration.output=e,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.receiveShadows=this.parameters.receiveShadows,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections,this._configuration.hasCloudsReflections=this.parameters.hasCloudsReflections,this._configuration.isDraped=this.parameters.isDraped,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<ya,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<Mu;const i=this.animation.advance(e);return this.setParameters({timeElapsed:Cl(this.animation.time)*this.parameters.animationSpeed},!1),this.animation.enabled&&i}intersect(e,t,i,s,o,a,n){za(e,t,s,o,a,void 0,n)}requiresSlot(e,t){switch(t){case w.Normal:return e===V.DRAPED_WATER;case w.Color:if(this.parameters.isDraped)return e===V.DRAPED_MATERIAL;break;case w.Alpha:break;case w.Highlight:return e===V.OPAQUE_MATERIAL||e===V.DRAPED_MATERIAL;default:return!1}let i=V.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i}createGLMaterial(e){return new Eu(e)}createBufferWriter(){return new Es(yh)}}class $u extends ls{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=Wi(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=kt(0,0,0,0),this.transparent=!0,this.writeDepth=!0,this.hasSlicePlane=!1,this.isDraped=!1,this.receiveShadows=!0,this.hasScreenSpaceReflections=!1,this.hasCloudsReflections=!1}}const Mu=35e3;class Mi{constructor(){this.first=0,this.count=0}}class Sr{constructor(e=0,t=0){this.from=e,this.to=t}}class Lu extends Sr{constructor(e,t,i,s,o,a){super(t,i),this.id=e,this.isVisible=s,this.hasHighlights=o,this.hasOccludees=a}}function on(r){return Array.from(r.values()).sort(Nu)}function Nu(r,e){return r.from===e.from?r.to-e.to:r.from-e.from}function Li(r,e){const t=r.back();if(t==null){const i=r.pushNew();return i.first=e.from,void(i.count=e.to-e.from)}if(Fu(t,e)){const i=e.from-t.first+e.to-e.from;t.count=i}else{const i=r.pushNew();i.first=e.from,i.count=e.to-e.from}}function Fu(r,e){return r.first+r.count>=e.from}class zu{constructor(e,t){this._pool=e,this._size=0,this._buffer=e.newBuffer(Vs(t))}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0}release(){this.erase(0,this._size),this.dispose()}get buffer(){return this._buffer}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose()}allocate(e){return this._resize(e,!1)}_resize(e,t){let i;const s=ju(this._buffer.length,this._size,e);if(this._buffer.length!==s){const a=this._pool.newBuffer(s);t&&(a.array.set(this._buffer.array.subarray(0,Math.min(this._size,s))),a.vao.vertexBuffers.geometry.setSubData(a.array,0,0,a.array.length)),i=this._buffer,this._buffer=a}const o=this._size;return this._size=e,i?{dispose:()=>{i.array.fill(0,0,o),this._pool.deleteBuffer(i)},copy:(a,n,l)=>this._buffer.array.set(i.array.subarray(n,l),a),hasNewBuffer:!0}:{dispose:()=>{},copy:(a,n,l)=>{a!==n&&this._buffer.array.copyWithin(a,n,l)},hasNewBuffer:!1}}erase(e,t){this._buffer.array.fill(0,e,t)}}const Us=65536;function Vs(r){return Math.ceil(r/Us)*Us}function ju(r,e,t){return e<=t?r>=t?r:Vs(Math.max(2*r,t)):r<=2*t?r:Vs(t)}class Uu{constructor(e,t,i,s){this.vao=new xc(e,t,{geometry:i},{geometry:zc.createVertex(e,Nc.STATIC_DRAW)}),this.array=new Float32Array(s),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}const Vu=Al+1;class Hu{constructor(e,t,i){this._rctx=e,this._locations=t,this._layout=i,this._cache=e.newCache(`MergedRenderer pool ${wr()}`,Gu)}dispose(){this._cache.destroy()}newBuffer(e){const t=e.toString(),i=this._cache.pop(t);if(C(i)){const s=i.pop();return i.length>0&&this._cache.put(t,i,s.array.byteLength*i.length,Vu),s}return new Uu(this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const t=e.array.byteLength,i=e.array.length.toString(),s=this._cache.pop(i);return C(s)?(s.push(e),this._cache.put(i,s,t*s.length,-1)):this._cache.put(i,[e],t,-1),null}}function Gu(r,e){if(e===bl.ALL)return void r.forEach(s=>s.dispose());const t=r.pop(),i=r.length*t.array.byteLength;return t.dispose(),i}class Bu{constructor(e,t,i){this._rctx=e,this._materialRepository=t,this._material=i,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new Re,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new _u(this._material,this._materialRepository),this._bufferWriter=i.createBufferWriter(),this._bufferPool=new Hu(e,i.vertexAttributeLocations,Bc(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach(e=>e.geometry.dispose()),this._dataByOrigin.clear(),this._bufferPool.dispose()}get isEmpty(){return this._dataByOrigin.size===0}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this._material instanceof Iu}get rendersOccluded(){return!this.isEmpty&&this._material.renderOccluded!==gt.Occlude}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateDrawCommands()}_addAndRemoveGeometries(e,t){const i=this._bufferWriter,s=i.vertexBufferLayout.stride/4,o=this._dataByOrigin,a=ku(e,t);a.forEach((n,l)=>{a.delete(l);const c=n.add.reduce((y,x)=>y+i.elementCount(x.data),0);let d=o.get(l);if(d==null)ce(n.remove.length===0),d=new Xu(n.origin,new zu(this._bufferPool,c*s)),o.set(l,d);else if(n.add.length===0&&d.instances.size===n.remove.length)return d.geometry.dispose(),void o.delete(l);let h=0;d.instances.forEach(y=>h+=y.to-y.from);const f=n.remove.reduce((y,x)=>y+i.elementCount(x.data),0),p=d.geometry.size,g=(h+c-f)*s,_=Ju;if(g>Us&&(g<p/2||p-g>1048576)?this._removeAndRebuild(d,n.remove,s,g,_):n.remove.length>0&&this._remove(d,n.remove,s,_),n.add.length>0){const y=Qu;Rl(y,-n.origin[0],-n.origin[1],-n.origin[2]),this._add(d,n.add,s,y,_)}const T=d.geometry.buffer.vao.vertexBuffers.geometry;cn(_),_.forAll(({from:y,to:x})=>{if(y<x){const O=d.geometry.buffer.array;T.setSubData(O,y,y,x)}}),_.clear(),d.drawCommandsDirty=!0})}_updateGeometries(e){const t=this._bufferWriter,i=t.vertexBufferLayout.stride/4;for(const s of e){const o=s.renderGeometry,a=this._dataByOrigin.get(o.origin.id),n=a&&a.instances.get(o.id);if(!n)return;const l=s.updateType;if(l&Ue.VISIBILITIES&&(n.isVisible=o.instanceParameters.visible),l&(Ue.HIGHLIGHTS|Ue.VISIBILITIES)){const c=o.instanceParameters.visible;n.hasHighlights=!!o.instanceParameters.highlights&&c}if(l&Ue.OCCLUDEES&&(n.hasOccludees=!!o.instanceParameters.occludees),l&(Ue.VERTEXATTRS|Ue.TRANSFORMATION)){const{array:c,vao:d}=a.geometry.buffer;wc(o,Hs,Br),t.write(Hs,Br,o.data,t.vertexBufferLayout.createView(c.buffer),n.from),ce(n.from+t.elementCount(o.data)===n.to,"material VBO layout has changed"),d.vertexBuffers.geometry.setSubData(c,n.from*i,n.from*i,n.to*i)}a.drawCommandsDirty=!0}}_updateDrawCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach(t=>{t.hasHiddenInstances=!1,t.hasHighlights=!1,t.hasOccludees=!1,ut(t.instances,i=>(i.isVisible?(i.hasHighlights&&(this._hasHighlights=!0,t.hasHighlights=!0),i.hasOccludees&&(this._hasOccludees=!0,t.hasOccludees=!0)):t.hasHiddenInstances=!0,t.hasHiddenInstances&&t.hasHighlights&&t.hasOccludees))});const e=t=>{if(t.drawCommandsDefault.clear(),t.drawCommandsHighlight.clear(),t.drawCommandsOccludees.clear(),t.drawCommandsShadowHighlightRest.clear(),t.instances.size===0)return;if(!ln(t)){const s=t.drawCommandsDefault.pushNew();return s.first=1/0,s.count=0,t.instances.forEach(o=>{s.first=Math.min(s.first,o.from),s.count=Math.max(s.count,o.to)}),void(s.count-=s.first)}const i=on(t.instances);for(const s of i)s.isVisible&&(s.hasOccludees?Li(t.drawCommandsOccludees,s):Li(t.drawCommandsDefault,s),s.hasHighlights?Li(t.drawCommandsHighlight,s):Li(t.drawCommandsShadowHighlightRest,s))};this._dataByOrigin.forEach(t=>{t.drawCommandsDirty&&(e(t),t.drawCommandsDirty=!1)})}updateAnimation(e){return this._material.update(e)}requiresSlot(e,t){return this._material.requiresSlot(e,t)}render(e,t){if(!this.requiresSlot(t.slot,e))return!1;const i=e===w.Highlight||e===w.ShadowHighlight;if(i&&!this._hasHighlights)return!1;const s=e===w.ShadowExludeHighlight,o=!(i||s);if(this._dataByOrigin.forEach(d=>{if(i&&!d.hasHighlights)return;const h=(i?d.drawCommandsHighlight:s&&ln(d)?d.drawCommandsShadowHighlightRest:d.drawCommandsDefault)||null,f=o&&d.drawCommandsOccludees||null;((h==null?void 0:h.length)||(f==null?void 0:f.length))&&this._renderCommandData.push(new Zu(d.origin,d.geometry,h,f))}),this._renderCommandData.length===0)return!1;const a=this._rctx,n=this._glMaterials.load(a,t.slot,e);if(j(n))return this._renderCommandData.clear(),!1;const l=n.beginSlot(t),c=a.bindTechnique(l,this._material.parameters,t);return this._renderCommandData.forAll(d=>{c.bindDraw(d,t,this._material.parameters);const{geometry:h,renderCommands:f,occludeeCommands:p}=d;l.ensureAttributeLocations(h.buffer.vao),a.bindVAO(h.buffer.vao);const g=l.primitiveType;C(f)&&f.length>0&&(l.bindPipelineState(a,t.slot,!1),f.forAll(_=>a.drawArrays(g,_.first,_.count))),C(p)&&p.length>0&&(l.bindPipelineState(a,t.slot,!0),p.forAll(_=>a.drawArrays(g,_.first,_.count)))}),this._renderCommandData.clear(),!0}_removeAndRebuild(e,t,i,s,o){for(const d of t)e.instances.delete(d.id);const a=on(e.instances);e.instances.clear();const n=e.geometry.size,l=e.geometry.allocate(s);let c=0;for(const d of a){const h=d.from*i,f=d.to*i;l.copy(c,h,f),d.from=c/i,c+=f-h,d.to=c/i,e.instances.set(d.id,d)}o.push(new Sr(0,l.hasNewBuffer?e.geometry.buffer.array.length:n)),l.dispose(),e.geometry.erase(c,o.back().to),e.holes.clear()}_remove(e,t,i,s){for(const o of t){const a=o.id,n=e.instances.get(a),l=n.from*i,c=n.to*i;e.geometry.erase(l,c),e.holes.push(new Sr(n.from,n.to)),e.instances.delete(a),s.push(new Sr(l,c))}cn(e.holes)}_add(e,t,i,s,o){if(t.length===0)return;const a=this._bufferWriter;let n=a.vertexBufferLayout.createView(e.geometry.buffer.array.buffer);const l=e.holes.length>0;let c=Number.MAX_SAFE_INTEGER,d=Number.MIN_SAFE_INTEGER;for(const h of t){const f=C(h.transformation)?Ot(Hs,s,h.transformation):s;Wt(Br,f);const p=ra(Br,Br),g=a.elementCount(h.data),_=g*i;let T=qu(e.holes,g);j(T)&&(T=e.geometry.size/i,e.geometry.grow(_),n=a.vertexBufferLayout.createView(e.geometry.buffer.array.buffer)),a.write(f,p,h.data,n,T);const y=h.instanceParameters.visible,x=!!h.instanceParameters.highlights&&y,O=!!h.instanceParameters.occludees,R=new Lu(h.id,T,T+g,y,x,O);ce(e.instances.get(h.id)==null),e.instances.set(h.id,R),l?o.push(new Sr(R.from*i,R.to*i)):(c=Math.min(R.from,c),d=Math.max(R.to,d))}l||o.push(new Sr(c*i,d*i))}get test(){return{material:this._material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}class Wu{constructor(e){this.origin=e,this.add=new Array,this.remove=new Array}}function ku(r,e){const t=new Map;for(const i of r)nn(t,i,!0);for(const i of e)nn(t,i,!1);return t}function nn(r,e,t){const i=e.origin;if(j(i))return;let s=r.get(i.id);s==null&&(s=new Wu(i.vec3),r.set(i.id,s)),t?s.add.push(e):s.remove.push(e)}function ln(r){return r.hasOccludees||r.hasHighlights||r.hasHiddenInstances}function qu(r,e){let t;if(!r.some(s=>!(s.to-s.from<e)&&(t=s,!0)))return null;const i=t.from;return t.from+=e,t.from>=t.to&&r.removeUnordered(t),i}function cn(r){const e=new Map;r.forAll(i=>e.set(i.from,i));let t=!0;for(;t;)t=!1,r.forEach(i=>{const s=e.get(i.to);s&&(i.to=s.to,e.delete(s.from),r.removeUnordered(s),t=!0)})}class Xu{constructor(e,t){this.origin=e,this.geometry=t,this.instances=new Map,this.holes=new Re({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1,this.drawCommandsDefault=new Re({allocator:i=>i||new Mi,deallocator:i=>i}),this.drawCommandsHighlight=new Re({allocator:i=>i||new Mi,deallocator:i=>i}),this.drawCommandsOccludees=new Re({allocator:i=>i||new Mi,deallocator:i=>i}),this.drawCommandsShadowHighlightRest=new Re({allocator:i=>i||new Mi,deallocator:i=>i})}}class Zu extends yu{constructor(e,t,i,s){super(e),this.geometry=t,this.renderCommands=i,this.occludeeCommands=s}}const Ju=new Re({deallocator:null}),Qu=X(),Hs=X(),Br=X();let it=class extends pa{constructor(r){super(r),this._pending=new Yu,this._changes=new cu,this._materialRenderers=new Map,this._sortedMaterialRenderers=new Re,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forEach(r=>r.dispose()),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear(),this._geometries.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return ut(this._materialRenderers,r=>r.rendersOccluded)}get isEmpty(){return!this.updating&&this._materialRenderers.size===0&&this._geometries.size===0}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const r=vu(this._changes);let e=!1,t=!1,i=!1;return r.forEach((s,o)=>{let a=this._materialRenderers.get(o);if(!a&&s.adds.length>0&&(a=new Bu(this.rctx,this._materialRepository,o),this._materialRenderers.set(o,a),e=!0,t=!0,i=!0),!a)return;const n=t||a.hasHighlights,l=i||a.hasWater;a.modify(s),t=t||n!==a.hasHighlights,i=i||l!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(o),a.dispose(),e=!0)}),this._changes.clear(),e&&this._updateSortedMaterialRenderers(),t&&(this._hasHighlights=ut(this._materialRenderers,s=>s.hasHighlights)),i&&(this._hasWater=ut(this._materialRenderers,s=>s.hasWater)),this.notifyChange("updating"),!0}addGeometries(r,e){if(r.length===0)return;const t=this._validateRenderGeometries(r);for(const s of t)this._geometries.set(s.id,s);const i=this._pending.empty;for(const s of t)this._pending.adds.add(s);i&&this.notifyChange("updating"),e===Oi.UPDATE&&this._notifyGraphicGeometryChanged(r)}removeGeometries(r,e){const t=this._pending.empty,i=this._pending.adds;for(const s of r)i.has(s)?(this._pending.removed.add(s),i.delete(s)):this._pending.removed.has(s)||this._pending.removes.add(s),this._geometries.delete(Pl(s.id));t&&!this._pending.empty&&this.notifyChange("updating"),e===Oi.UPDATE&&this._notifyGraphicGeometryChanged(r)}modifyGeometries(r,e){const t=this._changes.updates.length===0;for(const i of r){const s=this._changes.updates.pushNew();s.renderGeometry=this._validateRenderGeometry(i),s.updateType=e}switch(t&&this._changes.updates.length>0&&this.notifyChange("updating"),e){case Ue.TRANSFORMATION:case Ue.VERTEXATTRS:return this._notifyGraphicGeometryChanged(r);case Ue.VISIBILITIES:return this._notifyGraphicVisibilityChanged(r)}}updateAnimation(r){let e=!1;return this._sortedMaterialRenderers.forAll(({materialRenderer:t})=>e=t.updateAnimation(r)||e),e}render(r,e){for(let t=0;t<this._sortedMaterialRenderers.length;t++){const i=this._sortedMaterialRenderers.data[t];i.material.shouldRender(r)&&i.materialRenderer.render(r.output,e)}}intersect(r,e,t,i,s){return this._geometries.forEach(o=>{if(i&&!i(o))return;this._intersectRenderGeometry(o,t,e,0,r,s);const a=this.rendererContext.longitudeCyclical;a&&(o.boundingSphere[0]-o.boundingSphere[3]<a.min&&this._intersectRenderGeometry(o,t,e,a.range,r,s),o.boundingSphere[0]+o.boundingSphere[3]>a.max&&this._intersectRenderGeometry(o,t,e,-a.range,r,s)),s++}),s}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let r=0;this._materialRenderers.forEach((e,t)=>{t.insertOrder=r++,this._sortedMaterialRenderers.push({material:t,materialRenderer:e})}),this._sortedMaterialRenderers.sort((e,t)=>{const i=t.material.renderPriority-e.material.renderPriority;return i!==0?i:e.material.insertOrder-t.material.insertOrder})}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let r=0;r<this._changes.updates.length;){const e=this._changes.updates.data[r];this._pending.has(e.renderGeometry)?this._changes.updates.removeUnorderedIndex(r):r++}this._pending.clear()}_intersectRenderGeometry(r,e,t,i,s,o){if(!r.instanceParameters.visible)return;let a=0;C(r.transformation)&&(i+=r.transformation[12],a=r.transformation[13]),Ni[0]=t[0]-i,Ni[1]=t[1]-a,Ni[2]=1,Fi[0]=t[0]-i,Fi[1]=t[1]-a,Fi[2]=0,r.screenToWorldRatio=this.rendererContext.screenToWorldRatio,r.material.intersect(r,null,r.getShaderTransformation(),s,Ni,Fi,(n,l,c)=>{Ku(e,c,r.material.renderPriority,o,s,r.layerUid,r.graphicUid)},r.calculateShaderTransformation,e)}_notifyGraphicGeometryChanged(r){if(j(this.drapeSource.notifyGraphicGeometryChanged))return;let e;for(const t of r){const i=t.graphicUid;C(i)&&i!==e&&(this.drapeSource.notifyGraphicGeometryChanged(i),e=i)}}_notifyGraphicVisibilityChanged(r){if(j(this.drapeSource.notifyGraphicVisibilityChanged))return;let e;for(const t of r){const i=t.graphicUid;C(i)&&i!==e&&(this.drapeSource.notifyGraphicVisibilityChanged(i),e=i)}}_validateRenderGeometries(r){for(const e of r)this._validateRenderGeometry(e);return r}_validateRenderGeometry(r){return j(r.origin)&&(r.origin=this._localOriginFactory.getOrigin(r.boundingSphere)),r}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};v([ze()],it.prototype,"drapeSource",void 0),v([ze()],it.prototype,"updating",null),v([ze()],it.prototype,"rctx",null),v([ze()],it.prototype,"rendererContext",void 0),v([ze()],it.prototype,"_materialRepository",null),v([ze()],it.prototype,"_localOriginFactory",null),it=v([ua("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],it);class Yu{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return this.adds.size===0&&this.removes.size===0&&this.removed.size===0}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}function Ku(r,e,t,i,s,o,a){const n={layerUid:o,graphicUid:a,triangleNr:e},l=c=>{c.set(xt.OVERLAY,n,r.dist,r.normal,r.transformation,t,i)};if((s.results.min.drapedLayerOrder==null||t>=s.results.min.drapedLayerOrder)&&(s.results.min.dist==null||s.results.ground.dist<=s.results.min.dist)&&l(s.results.min),s.options.store!==Mt.MIN&&(s.results.max.drapedLayerOrder==null||t<s.results.max.drapedLayerOrder)&&(s.results.max.dist==null||s.results.ground.dist>s.results.max.dist)&&l(s.results.max),s.options.store===Mt.ALL){const c=mu(s.ray);l(c),s.results.all.push(c)}}const Ni=I(),Fi=I();class zi extends tr{initializeProgram(e){return new rr(e.rctx,zi.shader.get().build(),Ir)}initializePipeline(){return this.configuration.hasAlpha?ke({blending:xa(qe.SRC_ALPHA,qe.ONE,qe.ONE_MINUS_SRC_ALPHA,qe.ONE_MINUS_SRC_ALPHA),colorWrite:tt}):ke({colorWrite:tt})}}zi.shader=new ir(Tc,()=>import("./TextureOnly.glsl.bfcb1d8f.js"));class dn extends ja{constructor(){super(...arguments),this.hasAlpha=!1}}v([S()],dn.prototype,"hasAlpha",void 0);let st=class extends Zh(pa){constructor(r){super(r),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._handles=new Ys,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new Re,this._passParameters=new Oc,this._rctx=null,this._materialRepository=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.worldToPCSRatio=1,this.events=new Qs,this.longitudeCyclical=null}get _bindParameters(){return this._renderContext.bindParameters}get rctx(){return this._rctx}get materialRepository(){return this._materialRepository}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}initialize(){const r=this.view._stage.renderView;this._rctx=r.renderingContext;const e=r.waterTextureRepository;this._stippleTextureRepository=new Jc(r.renderingContext),this._shaderTechniqueRepository=new kh({rctx:this._rctx,viewingMode:dt.Local,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:e}),this._renderContext=new su(this._rctx,new au(this._rctx,this.view.state.viewingMode),new Cc(this._shaderTechniqueRepository,this._rctx,()=>{})),this._handles.add([qi(()=>e.updating,()=>this.events.emit("content-changed"),fa),qi(()=>this.spatialReference,t=>this._localOriginFactory=new Kh(t),fa),Dl(()=>this.view.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0)]),this._materialRepository=new Jh(r.textureRepository,this._shaderTechniqueRepository,t=>{(t.renderOccluded&hn)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating")},()=>this.events.emit("content-changed")),this._bindParameters.slot=V.DRAPED_MATERIAL,this._bindParameters.highlightDepthTexture=bc(this._rctx),this._bindParameters.camera=Lt,this._bindParameters.transparencyPassType=K.NONE,this._bindParameters.newLighting.noonFactor=0,this._bindParameters.newLighting.globalFactor=0,this._bindParameters.newLighting.set([new Ac(Ut(1,1,1))]),this._handles.add(this.view.resourceController.scheduler.registerTask(El.STAGE,this))}dispose(){this._handles.destroy(),this._renderers.forEach(r=>r.destroy()),this._renderers.clear(),this._debugTextureTechnique=Il(this._debugTextureTechnique),this._passParameters.texture=Le(this._passParameters.texture),this._bindParameters.highlightDepthTexture=Le(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=Le(this._shaderTechniqueRepository),this._temporaryFBO=Le(this._temporaryFBO),this._quadVAO=Le(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedDrapeSourceRenderersDirty||ut(this._renderers,r=>r.updating)}get hasOverlays(){return C(this._overlays)&&C(this._overlayRenderTarget)}get gpuMemoryUsage(){return C(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}createGeometryDrapeSourceRenderer(r){return this.createDrapeSourceRenderer(r,it)}createDrapeSourceRenderer(r,e,t){const i=this._renderers.get(r);C(i)&&i.destroy();const s=new e(Zs(kr({},t),{rendererContext:this,drapeSource:r}));return this._renderers.set(r,s),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in r&&this._handles.add(qi(()=>r.fullOpacity,()=>this.events.emit("content-changed")),r),s}removeDrapeSourceRenderer(r){if(j(r))return;const e=this._renderers.get(r);j(e)||(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(r),this._handles.remove(r),e.destroy())}collectUnusedRenderTargetMemory(r){let e=!1;if(C(this._overlayRenderTarget))for(const t of this._overlayRenderTarget.renderTargets){const i=this.overlays[0].validTargets[t.type]||!this.overlays[1].validTargets[t.type];e=this._overlayRenderTarget.validateUsageForTarget(i,t,r)||e}return e}get overlays(){return k(this._overlays,[])}ensureDrapeTargets(r){C(this._overlays)&&this._overlays.forEach(e=>e.hasTargetWithoutRasterImage=Xi(r,t=>t.drapeTargetType===Is.WithoutRasterImage))}ensureDrapeSources(r){C(this._overlays)&&this._overlays.forEach(e=>{e.hasDrapedFeatureSource=Xi(r,t=>t.drapeSourceType===jr.Features),e.hasDrapedRasterSource=Xi(r,t=>t.drapeSourceType===jr.RasterImage)})}ensureOverlays(r,e){j(this._overlays)&&(this._overlayRenderTarget=new Bh(this._rctx),this._overlays=[new Fo(Yr.INNER,this._overlayRenderTarget),new Fo(Yr.OUTER,this._overlayRenderTarget)]),this.ensureDrapeTargets(r),this.ensureDrapeSources(e)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=Le(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(r){this._processDrapeSources(r,()=>!0)}_processDrapeSources(r,e){let t=!1;for(const[i,s]of this._renderers){if(r.done)break;(i.destroyed||e(i))&&s.commitChanges()&&(t=!0,r.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,t=!0,this._updateSortedDrapeSourceRenderers()),t&&(C(this._overlays)&&this._renderers.size===0&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this._updateHasHighlights(),this._updateRendersOccluded(),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources($l,r=>r.updatePolicy===Ji.SYNC)}isEmpty(){if(ga.OVERLAY_DRAW_DEBUG_TEXTURE)return!1;for(const r of this._renderers.values())if(!r.isEmpty)return!1;return!0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateAnimation(r){let e=!1;return this._renderers.forEach(t=>e=t.updateAnimation(r)||e),e}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}drawTarget(r,e,t){const i=r.canvasGeometries;if(i.numViews===0)return!1;this._screenToWorldRatio=t*r.mapUnitsPerPixel;const s=e.output;if(this.isEmpty()||s===w.Highlight&&!this.hasHighlights||s===w.Normal&&!this.hasWater||!r.hasSomeSizedView())return!1;const o=e.fbo;if(!o.isValid())return!1;const a=2*r.resolution,n=r.resolution;o.resize(a,n);const l=this._rctx;Lt.pixelRatio=r.pixelRatio*t,this._renderContext.output=s,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=s===w.Normal?V.DRAPED_WATER:V.DRAPED_MATERIAL,r.applyViewport(this._rctx),o.bind(l),r.index===Yr.INNER&&(l.setClearColor(0,0,0,0),l.clearSafe(ui.COLOR_BUFFER_BIT));const c=e.type===re.ColorNoRasterImage?wt.ExcludeRasterImage:e.type===re.Occluded?wt.OccludedOnly:wt.Normal;if(c===wt.OccludedOnly&&(this._renderContext.renderOccludedMask=hn),ga.OVERLAY_DRAW_DEBUG_TEXTURE&&c!==wt.OccludedOnly)for(let d=0;d<i.numViews;d++)this._setViewParameters(i.extents[d],r,Lt),this._drawDebugTexture(r.resolution,tp[r.index]);return this._renderers.size>0&&this._sortedRenderers.forAll(({drapeSource:d,renderer:h})=>{if(c===wt.ExcludeRasterImage&&d.drapeSourceType===jr.RasterImage)return;const{fullOpacity:f}=d,p=C(f)&&f<1&&s===w.Color;p&&(this.bindTemporaryFramebuffer(this._rctx,a,n),l.clearSafe(ui.COLOR_BUFFER_BIT));for(let g=0;g<i.numViews;g++)this._setViewParameters(i.extents[g],r,Lt),h.render(this._renderContext,this._bindParameters);p&&C(this._temporaryFBO)&&(o.bind(l),this.view._stage.renderView.compositingHelper.compositeOverlay(this._renderContext.bindParameters,this._temporaryFBO.getTexture(),f,r.index))}),l.bindFramebuffer(null),o.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(r,e,t){j(this._temporaryFBO)&&(this._temporaryFBO=new zo(r,!1)),this._temporaryFBO.resize(e,t),this._temporaryFBO.bind(r)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}notifyContentChanged(){this.events.emit("content-changed")}intersect(r,e,t,i){var o,a;let s=0;for(const n of this._renderers.values())s=(a=(o=n.intersect)==null?void 0:o.call(n,r,e,t,i,s))!=null?a:s}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),this._renderers.size===0)return;const r=this.view.map.allLayers;this._renderers.forEach((e,t)=>{const i=r.indexOf(t.layer);this._sortedRenderers.push(new ep(t,e,i<0?1/0:i))}),this._sortedRenderers.sort((e,t)=>e.index-t.index)}_setViewParameters(r,e,t){t.viewport[0]=t.viewport[1]=0,t.viewport[2]=t.viewport[3]=e.resolution,ca(t.projectionMatrix,0,r[2]-r[0],0,r[3]-r[1],t.near,t.far),Ml(t.viewMatrix,[-r[0],-r[1],0]),this._bindParameters.camera=t}_updateHasWater(){const r=ut(this._renderers,e=>e.hasWater);r!==this._hasWater&&(this._hasWater=r,this.events.emit("has-water",r))}_updateHasHighlights(){const r=ut(this._renderers,e=>e.hasHighlights);r!==this._hasHighlights&&(this._hasHighlights=r,this.events.emit("has-highlights",r))}_updateRendersOccluded(){const r=ut(this._renderers,e=>e.rendersOccluded);r!==this._rendersOccluded&&(this._rendersOccluded=r,this.events.emit("renders-occluded",r))}_drawDebugTexture(r,e){this._ensureDebugPatternResources(r,r,e);const t=this._rctx;t.bindTechnique(this._debugTextureTechnique,this._passParameters,null),t.bindVAO(this._quadVAO),t.drawArrays(or.TRIANGLE_STRIP,0,jc(this._quadVAO,"geometry"))}_ensureDebugPatternResources(r,e,t){if(U(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const i=new Uint8Array(r*e*4);let s=0;for(let a=0;a<e;a++)for(let n=0;n<r;n++){const l=Math.floor(n/10),c=Math.floor(a/10);l<2||c<2||10*l>r-20||10*c>e-20?(i[s++]=255,i[s++]=255,i[s++]=255,i[s++]=255):(i[s++]=255,i[s++]=255,i[s++]=255,i[s++]=1&l&&1&c?1&n^1&a?0:255:1&l^1&c?0:128)}this._passParameters.texture=new lr(this._rctx,{target:Mr.TEXTURE_2D,pixelFormat:sr.RGBA,dataType:$r.UNSIGNED_BYTE,samplingMode:hi.NEAREST,width:r,height:e},i);const o=new dn;o.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(zi,o),this._quadVAO=Rc(this._rctx)}get test(){return{drapeSourceRenderers:this._renderers,getDrapeSourceRenderer:r=>this._renderers.get(r)}}};var wt;v([ze()],st.prototype,"_sortedDrapeSourceRenderersDirty",void 0),v([Uo()],st.prototype,"_shaderTechniqueRepository",void 0),v([Uo()],st.prototype,"_stippleTextureRepository",void 0),v([ze({constructOnly:!0})],st.prototype,"view",void 0),v([ze()],st.prototype,"worldToPCSRatio",void 0),v([ze()],st.prototype,"spatialReference",void 0),v([ze({type:Boolean,readOnly:!0})],st.prototype,"updating",null),st=v([ua("esri.views.3d.terrain.OverlayRenderer")],st),function(r){r[r.Normal=0]="Normal",r[r.OccludedOnly=1]="OccludedOnly",r[r.ExcludeRasterImage=2]="ExcludeRasterImage"}(wt||(wt={}));class ep{constructor(e,t,i){this.drapeSource=e,this.renderer=t,this.index=i}}const tp=[[1,.5,.5],[.5,.5,1]],Lt=new Ur;Lt.near=1,Lt.far=1e4,Lt.relativeElevation=null;const rp=-2,hn=gt.OccludeAndTransparent;function ff(r,e,t,i){const s=r.type==="polygon"?pi.CCW_IS_HOLE:pi.NONE,o=r.type==="polygon"?r.rings:r.paths,{position:a,outlines:n}=ka(o,r.hasZ,s),l=new Float64Array(a.length),c=Id(a,r.spatialReference,0,l,0,a,0,a.length/3,e,t,i),d=c!=null;return{lines:d?un(n,a,l):[],projectionSuccess:d,sampledElevation:c}}function gf(r,e){const t=r.type==="polygon"?pi.CCW_IS_HOLE:pi.NONE,i=r.type==="polygon"?r.rings:r.paths,{position:s,outlines:o}=ka(i,!1,t),a=Jr(s,r.spatialReference,0,s,e,0,s.length/3);for(let n=2;n<s.length;n+=3)s[n]=rp;return{lines:a?un(o,s):[],projectionSuccess:a}}function un(r,e,t){const i=new Array;for(const{index:s,count:o}of r){if(o<=1)continue;const a=3*s,n=a+3*o;i.push({position:e.subarray(a,n),mapPosition:t?t.subarray(a,n):void 0})}return i}class ip{constructor(){this.visible=!0}}class mf{constructor(e,t,i={}){this.data=e,this.material=t,this.boundingSphere=We(),this.instanceParameters=new ip,this._transformation=X(),this._shaderTransformationDirty=!0,this.layerUid=k(i.layerUid,null),this.graphicUid=k(i.graphicUid,null),this.id=i.id?i.id:wr(),this.boundingInfo=k(i.boundingInfo,null),this.calculateShaderTransformation=k(i.calculateShaderTransformation,null),this.castShadow=!!i.castShadow&&i.castShadow}get transformation(){return this._transformation}updateTransformation(e){e(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)}shaderTransformationChanged(){this._shaderTransformationDirty=!0}computeBoundingSphere(e,t,i=Vi(e)){j(this.boundingInfo)||(q(t,this.boundingInfo.getCenter(),e),t[3]=this.boundingInfo.getBSRadius()*i)}get hasShaderTransformation(){return C(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return j(this.calculateShaderTransformation)?k(this.transformation,Vt):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=X()),Ge(this._shaderTransformation,this.calculateShaderTransformation(k(this.transformation,Vt))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(e){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,e)&&(C(this._transformation)&&q(e,e,this._transformation),!0);const t=this.indices.get(u.POSITION),i=this.vertexAttributes.get(u.POSITION);return!!Pc(i,t,e)&&(C(this._transformation)&&q(e,e,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const e=new hs(Zi.Highlight),t=this.instanceParameters;return t.highlights=Ki(t.highlights,e),e}removeHighlight(e){const t=this.instanceParameters;t.highlights=es(t.highlights,e)}}function sp(r){const e=new Pr,{vertex:t,fragment:i}=e;return e.include(ns,r),e.include(Fa,r),e.include(oo,r),Dr(t,r),r.stippleEnabled&&(e.attributes.add(u.UV0,"vec2"),e.attributes.add(u.AUXPOS1,"vec3"),t.uniforms.add(new Te("viewport",(s,o)=>o.camera.fullViewport))),e.attributes.add(u.POSITION,"vec3"),e.varyings.add("vpos","vec3"),t.code.add(m`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),r.stippleEnabled&&(t.code.add(m`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),r.draped?t.uniforms.add(new H("worldToScreenRatio",(s,o)=>1/o.screenToPCSRatio)):t.code.add(m`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),t.code.add(m`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),r.draped?t.code.add(m`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):t.code.add(m`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),t.uniforms.add(new H("stipplePatternPixelSize",s=>_s(s))),t.code.add(m`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),t.code.add(m`}`),r.output===w.Highlight&&e.include(di,r),e.include(ft,r),i.uniforms.add(new H("alphaCoverage",(s,o)=>Math.min(1,s.width*o.camera.pixelRatio))),r.hasVertexColors||i.uniforms.add(new Te("constantColor",s=>s.color)),i.code.add(m`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${r.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${m.float(Ne)}) {
      discard;
    }

    ${r.output===w.Color?m`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${r.output===w.Highlight?m`outputHighlight();`:""}
  }
  `),e}const ap=Object.freeze(Object.defineProperty({__proto__:null,build:sp},Symbol.toStringTag,{value:"Module"}));class ji extends tr{get _stippleEnabled(){return this.configuration.stippleEnabled&&this.configuration.output!==w.Highlight}initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Qr.WEBGL2}initializeProgram(e){return new rr(e.rctx,ji.shader.get().build(this.configuration),Ir)}initializePipeline(){const e=this.configuration,t=xa(qe.SRC_ALPHA,qe.ONE,qe.ONE_MINUS_SRC_ALPHA,qe.ONE_MINUS_SRC_ALPHA),i=(s,o=null,a=null)=>ke({blending:o,depthTest:Pa,depthWrite:a,colorWrite:tt,stencilWrite:e.hasOccludees?oi:null,stencilTest:e.hasOccludees?s?ni:as:null});return e.output===w.Color?(this._occludeePipelineState=i(!0,e.transparent||this._stippleEnabled?t:null,Qt),i(!1,e.transparent||this._stippleEnabled?t:null,Qt)):i(!1)}get primitiveType(){return or.LINES}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}ji.shader=new ir(ap,()=>import("./NativeLine.glsl.75de3fca.js"));class $e extends Yt{constructor(){super(...arguments),this.output=w.Color,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}v([S({count:w.COUNT})],$e.prototype,"output",void 0),v([S()],$e.prototype,"hasSlicePlane",void 0),v([S()],$e.prototype,"hasVertexColors",void 0),v([S()],$e.prototype,"transparent",void 0),v([S()],$e.prototype,"draped",void 0),v([S()],$e.prototype,"stippleEnabled",void 0),v([S()],$e.prototype,"stippleOffColorEnabled",void 0),v([S()],$e.prototype,"stipplePreferContinuous",void 0),v([S()],$e.prototype,"hasOccludees",void 0),v([S({constValue:!1})],$e.prototype,"stippleRequiresClamp",void 0),v([S({constValue:!1})],$e.prototype,"stippleScaleWithLineWidth",void 0),v([S({constValue:!1})],$e.prototype,"stippleRequiresStretchMeasure",void 0);var Ui;(function(r){r[r.START=0]="START",r[r.END=1]="END"})(Ui||(Ui={}));class vf extends Er{constructor(e){super(e,new lp),this._configuration=new $e}getConfiguration(e,t){this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._configuration.draped=t.slot===V.DRAPED_MATERIAL;const i=C(this.parameters.stipplePattern);return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&C(this.parameters.stippleOffColor),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._configuration}intersect(e,t,i,s,o,a,n,l,c){C(c)?Dc(e,s,c,a,1,n):this._intersectLineGeometry(e,t,i,s,n)}_intersectLineGeometry(e,t,i,s,o){if(!s.options.selectionMode||li(t))return;if(!Ks(i))return void Or.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial").error("intersection assumes a translation-only matrix");const a=e.vertexAttributes.get(u.POSITION).data,n=s.camera,l=dp;Gt(l,s.point);const c=2;U(Wr[0],l[0]-c,l[1]+c,0),U(Wr[1],l[0]+c,l[1]+c,0),U(Wr[2],l[0]+c,l[1]-c,0),U(Wr[3],l[0]-c,l[1]-c,0);for(let g=0;g<4;g++)if(!n.unprojectFromRenderScreen(Wr[g],at[g]))return;lt(n.eye,at[0],at[1],Gs),lt(n.eye,at[1],at[2],Bs),lt(n.eye,at[2],at[3],Ws),lt(n.eye,at[3],at[0],ks);let d=Number.MAX_VALUE,h=0;for(let g=0;g<a.length-5;g+=3){if(_e[0]=a[g]+i[12],_e[1]=a[g+1]+i[13],_e[2]=a[g+2]+i[14],ye[0]=a[g+3]+i[12],ye[1]=a[g+4]+i[13],ye[2]=a[g+5]+i[14],ae(Gs,_e)<0&&ae(Gs,ye)<0||ae(Bs,_e)<0&&ae(Bs,ye)<0||ae(Ws,_e)<0&&ae(Ws,ye)<0||ae(ks,_e)<0&&ae(ks,ye)<0)continue;if(n.projectToRenderScreen(_e,Ft),n.projectToRenderScreen(ye,zt),Ft[2]<0&&zt[2]>0){te(Qe,_e,ye);const T=n.frustum,y=-ae(T[vt.NEAR],_e)/Ke(Qe,Xr(T[vt.NEAR]));W(Qe,Qe,y),ee(_e,_e,Qe),n.projectToRenderScreen(_e,Ft)}else if(Ft[2]>0&&zt[2]<0){te(Qe,ye,_e);const T=n.frustum,y=-ae(T[vt.NEAR],ye)/Ke(Qe,Xr(T[vt.NEAR]));W(Qe,Qe,y),ee(ye,ye,Qe),n.projectToRenderScreen(ye,zt)}else if(Ft[2]<0&&zt[2]<0)continue;Ft[2]=0,zt[2]=0;const _=Za(nr(Ft,zt,gn),l);_<d&&(d=_,z(pn,_e),z(fn,ye),h=g/3)}const f=s.rayBegin,p=s.rayEnd;if(d<c*c){let g=Number.MAX_VALUE;if(Ja(nr(pn,fn,gn),nr(f,p,cp),Nt)){te(Nt,Nt,f);const _=et(Nt);W(Nt,Nt,1/_),g=_/nt(f,p)}o(g,Nt,h,!1)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const s=i.get(u.POSITION);return Da(s,null,!1,t)}requiresSlot(e,t){return!(t!==w.Color&&t!==w.Highlight&&t!==w.ObjectAndLayerIdColor||e!==V.OPAQUE_MATERIAL&&e!==V.DRAPED_MATERIAL)}createGLMaterial(e){return new op(e)}createBufferWriter(){const e=this.parameters.hasVertexColors?Lo:_h;return j(this.parameters.stipplePattern)?new Es(e):new np(e.clone().vec3f(u.AUXPOS1).vec2f(u.UV0))}}class op extends ci{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===w.Color&&this._updateOccludeeState(e);const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern,t)),this._stipplePattern=t),this.ensureTechnique(ji,e)}}class np{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(u.POSITION).length}write(e,t,i,s,o){Na(i,this.vertexBufferLayout,e,t,s,o),this._writeAuxpos1(e,i,s,o),this._writeUV0(e,i,s,o)}_writeAuxpos1(e,t,i,s){const o=i.getField(u.AUXPOS1,$c),a=t.indices.get(u.POSITION),n=t.vertexAttributes.get(u.POSITION).data,l=e,c=o.typedBufferStride,d=o.typedBuffer;s*=c;for(let h=0;h<a.length-1;h+=2)for(const f of[1,0]){const p=3*a[h+f],g=n[p],_=n[p+1],T=n[p+2],y=l[0]*g+l[4]*_+l[8]*T+l[12],x=l[1]*g+l[5]*_+l[9]*T+l[13],O=l[2]*g+l[6]*_+l[10]*T+l[14];d[s]=y,d[s+1]=x,d[s+2]=O,s+=c}}_writeUV0(e,t,i,s){var O;const o=i.getField(u.UV0,Mc),a=t.indices.get(u.POSITION),n=t.vertexAttributes.get(u.POSITION).data,l=(O=t.vertexAttributes.get(u.DISTANCETOSTART))==null?void 0:O.data,c=o.typedBufferStride,d=o.typedBuffer;let h=0;d[s*=c]=Ui.START,d[s+1]=h,s+=c;const f=3*a[0],p=U(_e,n[f],n[f+1],n[f+2]);e&&q(p,p,e);const g=ye,_=a.length-1;let T=1;const y=l?(R,b,A)=>h=l[A]:(R,b,A)=>h+=nt(R,b);for(let R=1;R<_;R+=2){const b=3*a[R];U(g,n[b],n[b+1],n[b+2]),e&&q(g,g,e),y(p,g,T++);for(let A=0;A<2;++A)d[s]=1-A,d[s+1]=h,s+=c;z(p,g)}const x=3*a[_];U(g,n[x],n[x+1],n[x+2]),e&&q(g,g,e),y(p,g,T),d[s]=Ui.END,d[s+1]=h}}class lp extends ls{constructor(){super(...arguments),this.color=Zr,this.hasVertexColors=!1,this.hasSlicePlane=!1,this.width=1,this.stipplePreferContinuous=!0,this.hasOccludees=!1,this.stippleTexture=null}}const _e=I(),ye=I(),Qe=I(),Nt=I(),Ft=Pe(),zt=Pe(),pn=I(),fn=I(),gn=fi(),cp=fi(),dp=I(),Wr=[Pe(),Pe(),Pe(),Pe()],at=[I(),I(),I(),I()],Gs=Ye(),Bs=Ye(),Ws=Ye(),ks=Ye();export{ef as $,Wp as A,Vp as B,Np as C,Bd as D,Oi as E,vf as F,Qp as G,_d as H,Hp as I,Ur as J,Dp as K,Ip as L,Ep as M,nf as N,qp as O,As as P,lf as Q,Mp as R,sf as S,mf as T,Dd as U,Qd as V,Jd as W,zp as X,Yd as Y,Up as Z,je as _,no as a,tf as a0,Gd as a1,rp as a2,Zp as a3,rf as a4,Ue as a5,ys as a6,Pt as a7,hr as a8,Zc as a9,sp as aA,th as aB,xi as aC,Pu as aD,gd as aa,Lr as ab,Ss as ac,po as ad,Gp as ae,de as af,Bp as ag,hf as ah,hs as ai,_u as aj,xt as ak,Mt as al,mu as am,Xp as an,Jp as ao,eo as ap,an as aq,To as ar,$u as as,Iu as at,pf as au,Kh as av,kp as aw,mi as ax,md as ay,xh as az,Lp as b,cf as c,uf as d,jr as e,Id as f,$p as g,Ao as h,ff as i,_i as j,yh as k,qc as l,Kp as m,Fp as n,ad as o,Xc as p,jp as q,df as r,gf as s,of as t,af as u,Es as v,Co as w,Wc as x,zd as y,Yp as z};
