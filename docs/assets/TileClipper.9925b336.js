import{I as Lt,dx as Bt,bB as C,bC as H}from"./vendor.f59460b9.js";import{X as It,o as kt}from"./definitions.d3c1cadf.js";import{t as U,s as tt}from"./Geometry.d049a63c.js";import{g as pt}from"./GeometryUtils.51c4032a.js";const Dt=128e3;let vt=null,bt=null;async function Ht(){return vt||(vt=Ut()),vt}async function Ut(){bt=await(Lt("esri-csp-restrictions")?await import("./libtess-asm.35b825b8.js").then(t=>t.l):await import("./libtess.1a722897.js").then(t=>t.l)).load({locateFile:t=>Bt(`esri/core/libs/libtess/${t}`)})}function Wt(o,t){const i=Math.max(o.length,Dt);return bt.triangulate(o,t,i)}function Vt(o,t){return o.x===t.x&&o.y===t.y}function St(o){if(!o)return;const t=o.length;if(t<=1)return;let i=0;for(let n=1;n<t;n++)Vt(o[n],o[i])||++i===n||(o[i]=o[n]);o.length=i+1}function O(o,t){return o.x=t.y,o.y=-t.x,o}function S(o,t){return o.x=-t.y,o.y=t.x,o}function Mt(o,t){return o.x=t.x,o.y=t.y,o}function wt(o,t){return o.x=-t.x,o.y=-t.y,o}function Rt(o){return Math.sqrt(o.x*o.x+o.y*o.y)}function $t(o,t){return o.x*t.y-o.y*t.x}function Et(o,t){return o.x*t.x+o.y*t.y}function ht(o,t,i,n){return o.x=t.x*i+t.y*n,o.y=t.x*n-t.y*i,o}class Xt{constructor(t,i,n){this._writeVertex=t,this._writeTriangle=i,this._canUseThinTessellation=n,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){St(t),this._canUseThinTessellation&&i.halfWidth<It&&!i.offset?this._tessellateThin(t,i):this._tessellate(t,i)}_tessellateThin(t,i){if(t.length<2)return;const n=i.wrapDistance||65535;let h=i.initialDistance||0,r=!1,x=t[0].x,a=t[0].y;const y=t.length;for(let u=1;u<y;++u){r&&(r=!1,h=0);let P=t[u].x,T=t[u].y,m=P-x,p=T-a,_=Math.sqrt(m*m+p*p);if(m/=_,p/=_,h+_>n){r=!0;const s=(n-h)/_;_=n-h,P=(1-s)*x+s*P,T=(1-s)*a+s*T,--u}const l=this._writeVertex(x,a,0,0,m,p,p,-m,0,-1,h),c=this._writeVertex(x,a,0,0,m,p,-p,m,0,1,h);h+=_;const d=this._writeVertex(P,T,0,0,m,p,p,-m,0,-1,h),e=this._writeVertex(P,T,0,0,m,p,-p,m,0,1,h);this._writeTriangle(l,c,d),this._writeTriangle(c,d,e),x=P,a=T}}_tessellate(t,i){const n=t[0],h=t[t.length-1],r=Vt(n,h),x=r?3:2;if(t.length<x)return;const a=i.pixelCoordRatio,y=i.capType!=null?i.capType:C.BUTT,u=i.joinType!=null?i.joinType:H.MITER,P=i.miterLimit!=null?Math.min(i.miterLimit,4):2,T=i.roundLimit!=null?Math.min(i.roundLimit,1.05):1.05,m=i.halfWidth!=null?i.halfWidth:2,p=!!i.textured;let _,l,c,d=null;const e=this._prevNormal,s=this._nextNormal;let it=-1,G=-1;const g=this._joinNormal;let b,V;const lt=this._textureNormalLeft,rt=this._textureNormalRight,N=this._textureNormal;let M=-1,v=-1;const ft=i.wrapDistance||65535;let w=i.initialDistance||0;const Pt=this._writeVertex,Nt=this._writeTriangle,E=($,yt,Y,I,A,W)=>{const X=Pt(l,c,b,V,Y,I,$,yt,A,W,w);return M>=0&&v>=0&&X>=0&&Nt(M,v,X),M=v,v=X,X};r&&(_=t[t.length-2],s.x=h.x-_.x,s.y=h.y-_.y,G=Rt(s),s.x/=G,s.y/=G);let st=!1;for(let $=0;$<t.length;++$){if(st&&(st=!1,w=0),_&&(e.x=-s.x,e.y=-s.y,it=G,w+it>ft&&(st=!0)),st){const f=(ft-w)/it;it=ft-w,_={x:(1-f)*_.x+f*t[$].x,y:(1-f)*_.y+f*t[$].y},--$}else _=t[$];l=_.x,c=_.y;const yt=$<=0&&!st,Y=$===t.length-1;if(yt||(w+=it),d=Y?r?t[1]:null:t[$+1],d?(s.x=d.x-l,s.y=d.y-c,G=Rt(s),s.x/=G,s.y/=G):(s.x=void 0,s.y=void 0),!r){if(yt){S(g,s),b=g.x,V=g.y,y===C.SQUARE&&(E(-s.y-s.x,s.x-s.y,s.x,s.y,0,-1),E(s.y-s.x,-s.x-s.y,s.x,s.y,0,1)),y===C.ROUND&&(E(-s.y-s.x,s.x-s.y,s.x,s.y,-1,-1),E(s.y-s.x,-s.x-s.y,s.x,s.y,-1,1)),y!==C.ROUND&&y!==C.BUTT||(E(-s.y,s.x,s.x,s.y,0,-1),E(s.y,-s.x,s.x,s.y,0,1));continue}if(Y){O(g,e),b=g.x,V=g.y,y!==C.ROUND&&y!==C.BUTT||(E(e.y,-e.x,-e.x,-e.y,0,-1),E(-e.y,e.x,-e.x,-e.y,0,1)),y===C.SQUARE&&(E(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),E(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),y===C.ROUND&&(E(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),E(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let I,A,W=-$t(e,s);if(Math.abs(W)<.01)Et(e,s)>0?(g.x=e.x,g.y=e.y,W=1,I=Number.MAX_VALUE,A=!0):(S(g,s),W=1,I=1,A=!1);else{g.x=(e.x+s.x)/W,g.y=(e.y+s.y)/W,I=Rt(g);const f=(I-1)*m*a;A=I>4||f>it&&f>G}b=g.x,V=g.y;let X=u;switch(u){case H.BEVEL:I<1.05&&(X=H.MITER);break;case H.ROUND:I<T&&(X=H.MITER);break;case H.MITER:I>P&&(X=H.BEVEL)}switch(X){case H.MITER:if(E(g.x,g.y,-e.x,-e.y,0,-1),E(-g.x,-g.y,-e.x,-e.y,0,1),Y)break;if(p){const f=st?0:w;M=this._writeVertex(l,c,b,V,s.x,s.y,g.x,g.y,0,-1,f),v=this._writeVertex(l,c,b,V,s.x,s.y,-g.x,-g.y,0,1,f)}break;case H.BEVEL:{const f=W<0;let B,k,J,j;if(f){const R=M;M=v,v=R,B=lt,k=rt}else B=rt,k=lt;if(A)J=f?S(this._innerPrev,e):O(this._innerPrev,e),j=f?O(this._innerNext,s):S(this._innerNext,s);else{const R=f?wt(this._inner,g):Mt(this._inner,g);J=R,j=R}const z=f?O(this._bevelStart,e):S(this._bevelStart,e);E(J.x,J.y,-e.x,-e.y,B.x,B.y);const ot=E(z.x,z.y,-e.x,-e.y,k.x,k.y);if(Y)break;const q=f?S(this._bevelEnd,s):O(this._bevelEnd,s);if(A){const R=this._writeVertex(l,c,b,V,-e.x,-e.y,0,0,0,0,w);M=this._writeVertex(l,c,b,V,s.x,s.y,j.x,j.y,B.x,B.y,w),v=this._writeVertex(l,c,b,V,s.x,s.y,q.x,q.y,k.x,k.y,w),this._writeTriangle(ot,R,v)}else{if(p){const R=this._bevelMiddle;R.x=(z.x+q.x)/2,R.y=(z.y+q.y)/2,ht(N,R,-e.x,-e.y),E(R.x,R.y,-e.x,-e.y,N.x,N.y),ht(N,R,s.x,s.y),M=this._writeVertex(l,c,b,V,s.x,s.y,R.x,R.y,N.x,N.y,w),v=this._writeVertex(l,c,b,V,s.x,s.y,j.x,j.y,B.x,B.y,w)}else{const R=M;M=v,v=R}E(q.x,q.y,s.x,s.y,k.x,k.y)}if(f){const R=M;M=v,v=R}break}case H.ROUND:{const f=W<0;let B,k;if(f){const D=M;M=v,v=D,B=lt,k=rt}else B=rt,k=lt;const J=f?wt(this._inner,g):Mt(this._inner,g);let j,z;A?(j=f?S(this._innerPrev,e):O(this._innerPrev,e),z=f?O(this._innerNext,s):S(this._innerNext,s)):(j=J,z=J);const ot=f?O(this._roundStart,e):S(this._roundStart,e),q=f?S(this._roundEnd,s):O(this._roundEnd,s),R=E(j.x,j.y,-e.x,-e.y,B.x,B.y),at=E(ot.x,ot.y,-e.x,-e.y,k.x,k.y);if(Y)break;const K=this._writeVertex(l,c,b,V,-e.x,-e.y,0,0,0,0,w);A||this._writeTriangle(M,v,K);const Q=wt(this._outer,J),Z=this._writeVertex(l,c,b,V,s.x,s.y,q.x,q.y,k.x,k.y,w);let et,nt;const ut=I>2;if(ut){let D;I!==Number.MAX_VALUE?(Q.x/=I,Q.y/=I,D=Et(e,Q),D=(I*(D*D-1)+1)/D):D=-1,et=f?O(this._startBreak,e):S(this._startBreak,e),et.x+=e.x*D,et.y+=e.y*D,nt=f?S(this._endBreak,s):O(this._endBreak,s),nt.x+=s.x*D,nt.y+=s.y*D}ht(N,Q,-e.x,-e.y);const ct=this._writeVertex(l,c,b,V,-e.x,-e.y,Q.x,Q.y,N.x,N.y,w);ht(N,Q,s.x,s.y);const gt=p?this._writeVertex(l,c,b,V,s.x,s.y,Q.x,Q.y,N.x,N.y,w):ct,Tt=K,mt=p?this._writeVertex(l,c,b,V,s.x,s.y,0,0,0,0,w):K;let xt=-1,_t=-1;if(ut&&(ht(N,et,-e.x,-e.y),xt=this._writeVertex(l,c,b,V,-e.x,-e.y,et.x,et.y,N.x,N.y,w),ht(N,nt,s.x,s.y),_t=this._writeVertex(l,c,b,V,s.x,s.y,nt.x,nt.y,N.x,N.y,w)),p?ut?(this._writeTriangle(Tt,at,xt),this._writeTriangle(Tt,xt,ct),this._writeTriangle(mt,gt,_t),this._writeTriangle(mt,_t,Z)):(this._writeTriangle(Tt,at,ct),this._writeTriangle(mt,gt,Z)):ut?(this._writeTriangle(K,at,xt),this._writeTriangle(K,xt,_t),this._writeTriangle(K,_t,Z)):(this._writeTriangle(K,at,ct),this._writeTriangle(K,gt,Z)),A?(M=this._writeVertex(l,c,b,V,s.x,s.y,z.x,z.y,B.x,B.y,w),v=Z):(M=p?this._writeVertex(l,c,b,V,s.x,s.y,z.x,z.y,B.x,B.y,w):R,this._writeTriangle(M,mt,Z),v=Z),f){const D=M;M=v,v=D}break}}}}}class dt{constructor(t,i,n){this.ratio=t,this.x=i,this.y=n}}class qt{constructor(t,i,n,h=8,r=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=r,this._tileSize=kt*h,this._dz=t,this._yPos=i,this._xPos=n}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const n=t>>this._dz;i>n&&(i=n),this._margin=i,this._xmin=n*this._xPos-i,this._ymin=n*this._yPos-i,this._xmax=this._xmin+n+2*i,this._ymax=this._ymin+n+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new U(t,i),this._firstPt=new U(t,i),this._dist=0}lineTo(t,i){const n=this._isIn(t,i),h=new U(t,i),r=U.distance(this._prevPt,h);let x,a,y,u,P,T,m,p;if(n)this._prevIsIn?this._lineTo(t,i,!0):(x=this._prevPt,a=h,y=this._intersect(a,x),this._start=this._dist+r*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(a.x,a.y,!0));else if(this._prevIsIn)a=this._prevPt,x=h,y=this._intersect(a,x),this._lineTo(y.x,y.y,!0),this._lineTo(x.x,x.y,!1);else{const _=this._prevPt,l=h;if(_.x<=this._xmin&&l.x<=this._xmin||_.x>=this._xmax&&l.x>=this._xmax||_.y<=this._ymin&&l.y<=this._ymin||_.y>=this._ymax&&l.y>=this._ymax)this._lineTo(l.x,l.y,!1);else{const c=[];if((_.x<this._xmin&&l.x>this._xmin||_.x>this._xmin&&l.x<this._xmin)&&(u=(this._xmin-_.x)/(l.x-_.x),p=_.y+u*(l.y-_.y),p<=this._ymin?T=!1:p>=this._ymax?T=!0:c.push(new dt(u,this._xmin,p))),(_.x<this._xmax&&l.x>this._xmax||_.x>this._xmax&&l.x<this._xmax)&&(u=(this._xmax-_.x)/(l.x-_.x),p=_.y+u*(l.y-_.y),p<=this._ymin?T=!1:p>=this._ymax?T=!0:c.push(new dt(u,this._xmax,p))),(_.y<this._ymin&&l.y>this._ymin||_.y>this._ymin&&l.y<this._ymin)&&(u=(this._ymin-_.y)/(l.y-_.y),m=_.x+u*(l.x-_.x),m<=this._xmin?P=!1:m>=this._xmax?P=!0:c.push(new dt(u,m,this._ymin))),(_.y<this._ymax&&l.y>this._ymax||_.y>this._ymax&&l.y<this._ymax)&&(u=(this._ymax-_.y)/(l.y-_.y),m=_.x+u*(l.x-_.x),m<=this._xmin?P=!1:m>=this._xmax?P=!0:c.push(new dt(u,m,this._ymax))),c.length===0)P?T?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):T?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(c.length>1&&c[0].ratio>c[1].ratio)this._start=this._dist+r*c[1].ratio,this._lineTo(c[1].x,c[1].y,!0),this._lineTo(c[0].x,c[0].y,!0);else{this._start=this._dist+r*c[0].ratio;for(let d=0;d<c.length;d++)this._lineTo(c[d].x,c[d].y,!0)}this._lineTo(l.x,l.y,!1)}}this._dist+=r,this._prevIsIn=n,this._prevPt=h}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const n=this._line;let h=n.length;for(;h>=4&&(n[0].x===n[1].x&&n[0].x===n[h-2].x||n[0].y===n[1].y&&n[0].y===n[h-2].y);)n.pop(),n[0].x=n[h-2].x,n[0].y=n[h-2].y,--h}}result(t=!0){return this._pushLine(),this._lines.length===0?null:(this._type===tt.Polygon&&t&&F.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==tt.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,i=t.length;if(i===0)return null;const n=[];for(let h=0;h<i;h++)n.push({line:t[h],start:this._starts[h]||0});return n}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let n,h,r;if(i.x>=this._xmin&&i.x<=this._xmax)h=i.y<=this._ymin?this._ymin:this._ymax,r=(h-t.y)/(i.y-t.y),n=t.x+r*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)n=i.x<=this._xmin?this._xmin:this._xmax,r=(n-t.x)/(i.x-t.x),h=t.y+r*(i.y-t.y);else{h=i.y<=this._ymin?this._ymin:this._ymax,n=i.x<=this._xmin?this._xmin:this._xmax;const x=(n-t.x)/(i.x-t.x),a=(h-t.y)/(i.y-t.y);x<a?(r=x,h=t.y+x*(i.y-t.y)):(r=a,n=t.x+a*(i.x-t.x))}return this._r=r,new U(n,h)}_pushLine(){this._line&&(this._type===tt.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===tt.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===tt.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,i,n){this._type!==tt.Polygon?n&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new U(t,i))):(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new U(t,i)),this._isH=!1,this._isV=!1)}_lineTo(t,i,n){let h,r;if(this._type!==tt.Polygon)if(n){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(t,i)))return;this._line.push(new U(t,i))}else this._line&&this._line.length>0&&this._pushLine();else if(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const x=h.x===t,a=h.y===i;if(x&&a)return;this._isH&&x||this._isV&&a?(h.x=t,h.y=i,r=this._line[this._line.length-2],r.x===t&&r.y===i?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(r=this._line[this._line.length-2],this._isH=r.x===t,this._isV=r.y===i)):(this._isH=r.x===t,this._isV=r.y===i)):(this._line.push(new U(t,i)),this._isH=x,this._isV=a)}else this._line.push(new U(t,i))}}class Qt{setExtent(t){this._ratio=t===4096?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const n=this._ratio;this._line.push(new U(t*n,i*n))}lineTo(t,i){const n=this._ratio;this._line.push(new U(t*n,i*n))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}var L;(function(o){o[o.sideLeft=0]="sideLeft",o[o.sideRight=1]="sideRight",o[o.sideTop=2]="sideTop",o[o.sideBottom=3]="sideBottom"})(L||(L={}));class F{static simplify(t,i,n){if(!n)return;const h=-i,r=t+i,x=-i,a=t+i,y=[],u=[],P=n.length;for(let m=0;m<P;++m){const p=n[m];if(!p||p.length<2)continue;let _,l=p[0];const c=p.length;for(let d=1;d<c;++d)_=p[d],l.x===_.x&&(l.x<=h&&(l.y>_.y?(y.push(m),y.push(d),y.push(L.sideLeft),y.push(-1)):(u.push(m),u.push(d),u.push(L.sideLeft),u.push(-1))),l.x>=r&&(l.y<_.y?(y.push(m),y.push(d),y.push(L.sideRight),y.push(-1)):(u.push(m),u.push(d),u.push(L.sideRight),u.push(-1)))),l.y===_.y&&(l.y<=x&&(l.x<_.x?(y.push(m),y.push(d),y.push(L.sideTop),y.push(-1)):(u.push(m),u.push(d),u.push(L.sideTop),u.push(-1))),l.y>=a&&(l.x>_.x?(y.push(m),y.push(d),y.push(L.sideBottom),y.push(-1)):(u.push(m),u.push(d),u.push(L.sideBottom),u.push(-1)))),l=_}if(y.length===0||u.length===0)return;F.fillParent(n,u,y),F.fillParent(n,y,u);const T=[];F.calcDeltas(T,u,y),F.calcDeltas(T,y,u),F.addDeltas(T,n)}static fillParent(t,i,n){const h=n.length,r=i.length;for(let x=0;x<r;x+=4){const a=i[x],y=i[x+1],u=i[x+2],P=t[a][y-1],T=t[a][y];let m=8092,p=-1;for(let _=0;_<h;_+=4){if(n[_+2]!==u)continue;const l=n[_],c=n[_+1],d=t[l][c-1],e=t[l][c];switch(u){case L.sideLeft:case L.sideRight:if(pt(P.y,d.y,e.y)&&pt(T.y,d.y,e.y)){const s=Math.abs(e.y-d.y);s<m&&(m=s,p=_)}break;case L.sideTop:case L.sideBottom:if(pt(P.x,d.x,e.x)&&pt(T.x,d.x,e.x)){const s=Math.abs(e.x-d.x);s<m&&(m=s,p=_)}}}i[x+3]=p}}static calcDeltas(t,i,n){const h=i.length;for(let r=0;r<h;r+=4){const x=[],a=F.calcDelta(r,i,n,x);t.push(i[r]),t.push(i[r+1]),t.push(i[r+2]),t.push(a)}}static calcDelta(t,i,n,h){const r=i[t+3];if(r===-1)return 0;const x=h.length;return x>1&&h[x-2]===r?0:(h.push(r),F.calcDelta(r,n,i,h)+1)}static addDeltas(t,i){const n=t.length;let h=0;for(let r=0;r<n;r+=4){const x=t[r+3];x>h&&(h=x)}for(let r=0;r<n;r+=4){const x=i[t[r]],a=t[r+1],y=h-t[r+3];switch(t[r+2]){case L.sideLeft:x[a-1].x-=y,x[a].x-=y,a===1&&(x[x.length-1].x-=y),a===x.length-1&&(x[0].x-=y);break;case L.sideRight:x[a-1].x+=y,x[a].x+=y,a===1&&(x[x.length-1].x+=y),a===x.length-1&&(x[0].x+=y);break;case L.sideTop:x[a-1].y-=y,x[a].y-=y,a===1&&(x[x.length-1].y-=y),a===x.length-1&&(x[0].y-=y);break;case L.sideBottom:x[a-1].y+=y,x[a].y+=y,a===1&&(x[x.length-1].y+=y),a===x.length-1&&(x[0].y+=y)}}}}export{Qt as _,Xt as c,Ht as i,qt as n,Wt as r};
