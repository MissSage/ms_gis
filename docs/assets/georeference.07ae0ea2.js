import{aq as u,ar as g,as as C,dC as G,a3 as F,aC as I,jC as S,o1 as V,hb as b,g2 as m,g5 as j,fl as N,iE as L,h3 as Y,gG as D,o2 as H,hR as J,ay as U,A as T,gh as W,o3 as Z,fM as $,jk as K,gr as Q,kv as z,E as f,dv as X,e$ as tt,f2 as rt,h8 as nt}from"./vendor.f59460b9.js";import{a as B,x as et,g as at}from"./axisAngleDegrees.8a388e40.js";import{T as h,i as y}from"./BufferView.5c51c693.js";import{t as A,e as ot,r as x}from"./vec33.eeb71c8e.js";import{O as it,h as st,L as lt,M as ct,j as pt,k as ut,R as gt,v as ft,V as ht}from"./projection.811b4f07.js";var d;let p=d=class extends G{constructor(t){super(t),this.origin=F(),this.translation=F(),this.rotation=B(),this.scale=I(1,1,1),this.geographic=!0}get localMatrix(){const t=m();return S(O,at(this.rotation),et(this.rotation)),V(t,O,this.translation,this.scale),t}get localMatrixInverse(){return b(m(),this.localMatrix)}applyLocal(t,n){return j(n,t,this.localMatrix)}applyLocalInverse(t,n){return j(n,t,this.localMatrixInverse)}project(t,n){const r=new Float64Array(t.length),e=h.fromTypedArray(r),a=h.fromTypedArray(t);if(this.geographic){const s=N(n),c=m();return L(n,this.origin,c,s),Y(c,c,this.localMatrix),A(e,a,c),D(r,s,0,r,n,0,r.length/3),r}const{localMatrix:o,origin:i}=this;H(o,J)?ot(e,a):A(e,a,o);for(let s=0;s<r.length;s+=3)r[s+0]+=i[0],r[s+1]+=i[1],r[s+2]+=i[2];return r}getOriginPoint(t){const[n,r,e]=this.origin;return new U({x:n,y:r,z:e,spatialReference:t})}equals(t){return T(t)&&this.geographic===t.geographic&&W(this.origin,t.origin)&&Z(this.localMatrix,t.localMatrix)}clone(){const t={origin:$(this.origin),translation:$(this.translation),rotation:B(this.rotation),scale:$(this.scale),geographic:this.geographic};return new d(t)}};u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"translation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),u([g({type:Boolean,nonNullable:!0,json:{write:!0}})],p.prototype,"geographic",void 0),u([g()],p.prototype,"localMatrix",null),u([g()],p.prototype,"localMatrixInverse",null),p=d=u([C("esri.geometry.support.MeshTransform")],p);const O=K(),yt=p;function v(t,n){var r;return t.isGeographic||t.isWebMercator&&((r=n==null?void 0:n.geographic)!=null?r:!0)}function P(t,n,r){return v(n.spatialReference,r)?vt(t,n,r):xt(t,n,r)}function mt(t,n,r){const{position:e,normal:a,tangent:o}=t;if(f(n))return{position:e,normal:a,tangent:o};const i=n.localMatrix;return P({position:gt(e,new Float64Array(e.length),i),normal:T(a)?ft(a,new Float32Array(a.length),i):null,tangent:T(o)?ht(o,new Float32Array(o.length),i):null},n.getOriginPoint(r),{geographic:n.geographic})}function Bt(t,n,r){var e;if(r==null?void 0:r.useTransform){const{position:a,normal:o,tangent:i}=t;return{vertexAttributes:{position:a,normal:o,tangent:i},transform:new yt({origin:[n.x,n.y,(e=n.z)!=null?e:0],geographic:v(n.spatialReference,r)})}}return{vertexAttributes:P(t,n,r),transform:null}}function At(t,n,r){return v(n.spatialReference,r)?_(t,n,r):M(t,n,r)}function Ot(t,n,r,e){if(f(n))return At(t,r,e);const a=mt(t,n,r.spatialReference);return r.equals(n.getOriginPoint(r.spatialReference))?M(a,r,e):v(r.spatialReference,e)?_(a,r,e):M(a,r,e)}function xt(t,n,r){const e=new Float64Array(t.position.length),a=t.position,o=n.x,i=n.y,s=n.z||0,{horizontal:c,vertical:w}=R(r?r.unit:null,n.spatialReference);for(let l=0;l<a.length;l+=3)e[l+0]=a[l+0]*c+o,e[l+1]=a[l+1]*c+i,e[l+2]=a[l+2]*w+s;return{position:e,normal:t.normal,tangent:t.tangent}}function vt(t,n,r){const e=n.spatialReference,a=k(n,r,E),o=new Float64Array(t.position.length),i=wt(t.position,a,e,o),s=z(q,a);return{position:i,normal:Tt(i,o,t.normal,s,e),tangent:$t(i,o,t.tangent,s,e)}}function wt(t,n,r,e){A(h.fromTypedArray(e),h.fromTypedArray(t),n);const a=new Float64Array(t.length);return it(e,a,r)}function Tt(t,n,r,e,a){if(f(r))return null;const o=new Float32Array(r.length);return x(y.fromTypedArray(o),y.fromTypedArray(r),e),st(o,t,n,a,o),o}function $t(t,n,r,e,a){if(f(r))return null;const o=new Float32Array(r.length);x(y.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),y.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),e);for(let i=3;i<o.length;i+=4)o[i]=r[i];return lt(o,t,n,a,o),o}function M(t,n,r){const e=new Float64Array(t.position.length),a=t.position,o=n.x,i=n.y,s=n.z||0,{horizontal:c,vertical:w}=R(r?r.unit:null,n.spatialReference);for(let l=0;l<a.length;l+=3)e[l+0]=(a[l+0]-o)/c,e[l+1]=(a[l+1]-i)/c,e[l+2]=(a[l+2]-s)/w;return{position:e,normal:t.normal,tangent:t.tangent}}function _(t,n,r){const e=n.spatialReference;k(n,r,E);const a=b(Et,E),o=new Float64Array(t.position.length),i=dt(t.position,e,a,o),s=z(q,a);return{position:i,normal:Mt(t.normal,t.position,o,e,s),tangent:Rt(t.tangent,t.position,o,e,s)}}function k(t,n,r){L(t.spatialReference,[t.x,t.y,t.z||0],r,N(t.spatialReference));const{horizontal:e,vertical:a}=R(n?n.unit:null,t.spatialReference);return Q(r,r,[e,e,a]),r}function dt(t,n,r,e){const a=ct(t,n,e),o=h.fromTypedArray(a),i=new Float64Array(a.length),s=h.fromTypedArray(i);return A(s,o,r),i}function Mt(t,n,r,e,a){if(f(t))return null;const o=pt(t,n,r,e,new Float32Array(t.length)),i=y.fromTypedArray(o);return x(i,i,a),o}function Rt(t,n,r,e,a){if(f(t))return null;const o=ut(t,n,r,e,new Float32Array(t.length)),i=y.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return x(i,i,a),o}function R(t,n){if(f(t))return Ft;const r=n.isGeographic?1:X(n),e=n.isGeographic?1:tt(n),a=rt(1,t,"meters");return{horizontal:a*r,vertical:a*e}}const E=m(),Et=m(),q=nt(),Ft={horizontal:1,vertical:1};export{yt as L,Ot as M,Bt as _,At as b,mt as k,v as r,P as x};
