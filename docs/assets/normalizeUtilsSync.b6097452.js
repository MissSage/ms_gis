import{aQ as V,E as J,aP as j,cI as A,cJ as S,bi as N,bj as R,be as X,aV as E,bd as T,b6 as K,cK as Q,cL as q,cM as p}from"./vendor.f59460b9.js";function H(t){return L(t,!0)}function U(t){return L(t,!1)}function L(t,s){if(J(t))return null;const n=t.spatialReference,i=j(n),e="toJSON"in t?t.toJSON():t;if(!i)return e;const h=A(n)?102100:4326,u=S[h].maxX,_=S[h].minX;if(N(e))return b(e,u,_);if(R(e))return e.points=e.points.map(o=>b(o,u,_)),e;if(X(e))return z(e,i);if(E(e)||T(e)){const o=K(D,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),m=x===0?e:Q(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?M(m,u,s):r.xmin<_?M(m,_,s):m}return e}function z(t,s){if(!s)return t;const n=B(t,s).map(i=>i.extent);return n.length<2?n[0]||t:n.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:n.map(i=>[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]])}}function b(t,s,n){if(Array.isArray(t)){const i=t[0];if(i>s){const e=p(i,s);t[0]=i+e*(-2*s)}else if(i<n){const e=p(i,n);t[0]=i+e*(-2*n)}}else{const i=t.x;if(i>s){const e=p(i,s);t.x+=e*(-2*s)}else if(i<n){const e=p(i,n);t.x+=e*(-2*n)}}return t}function B(t,s){const n=[],{ymin:i,ymax:e,xmin:h,xmax:u}=t,_=t.xmax-t.xmin,[o,r]=s.valid,{x,frameId:m}=w(t.xmin,s),{x:a,frameId:c}=w(t.xmax,s),k=x===a&&_>0;if(_>2*r){const g={xmin:h<u?x:a,ymin:i,xmax:r,ymax:e},O={xmin:o,ymin:i,xmax:h<u?a:x,ymax:e},P={xmin:0,ymin:i,xmax:r,ymax:e},C={xmin:o,ymin:i,xmax:0,ymax:e},f=[],d=[];I(g,P)&&f.push(m),I(g,C)&&d.push(m),I(O,P)&&f.push(c),I(O,C)&&d.push(c);for(let y=m+1;y<c;y++)f.push(y),d.push(y);n.push(new l(g,[m]),new l(O,[c]),new l(P,f),new l(C,d))}else x>a||k?n.push(new l({xmin:x,ymin:i,xmax:r,ymax:e},[m]),new l({xmin:o,ymin:i,xmax:a,ymax:e},[c])):n.push(new l({xmin:x,ymin:i,xmax:a,ymax:e},[m]));return n}function w(t,s){const[n,i]=s.valid,e=2*i;let h,u=0;return t>i?(h=Math.ceil(Math.abs(t-i)/e),t-=h*e,u=h):t<n&&(h=Math.ceil(Math.abs(t-n)/e),t+=h*e,u=-h),{x:t,frameId:u}}function I(t,s){const{xmin:n,ymin:i,xmax:e,ymax:h}=s;return v(t,n,i)&&v(t,n,h)&&v(t,e,h)&&v(t,e,i)}function v(t,s,n){return s>=t.xmin&&s<=t.xmax&&n>=t.ymin&&n<=t.ymax}function M(t,s,n=!0){const i=!T(t);if(i&&q(t),n)return new F().cut(t,s);const e=i?t.rings:t.paths,h=i?4:2,u=e.length,_=-2*s;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const m of r)x.push([m[0]+_,m[1]]);e.push(x)}}return i?t.rings=e:t.paths=e,t}class l{constructor(s,n){this.extent=s,this.frameIds=n}}const D=V();class F{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,n){let i;if(this._xCut=n,s.rings)this._closed=!0,i=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,i=s.paths,this._minPts=2}for(const h of i){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&i.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=e;i.push(h)}return this._closed?s.rings=i:s.paths=i,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const n=this._side(s[0]);if(n*this._prevSide==-1){const i=this._intersect(this._prevPt,s);this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(s[0],s[1],n)}else this._lineTo(s[0],s[1],n);this._prevSide=n,this._prevPt=s}close(){const s=this._firstPt,n=this._prevPt;s[0]===n[0]&&s[1]===n[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,n,i){this._closed?(this._lineIn.push([i<=0?s:this._xCut,n]),this._lineOut.push([i>=0?s:this._xCut,n])):(i<=0&&this._lineIn.push([s,n]),i>=0&&this._lineOut.push([s,n]))}_lineTo(s,n,i){this._closed?(this._addPolyVertex(this._lineIn,i<=0?s:this._xCut,n),this._addPolyVertex(this._lineOut,i>=0?s:this._xCut,n)):i<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,n])):i>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,n])):this._prevSide<0?(this._lineIn.push([s,n]),this._lineOut.push([s,n])):this._prevSide>0&&(this._lineOut.push([s,n]),this._lineIn.push([s,n]))}_addPolyVertex(s,n,i){const e=s.length;e>1&&s[e-1][0]===n&&s[e-2][0]===n?s[e-1][1]=i:s.push([n,i])}_checkClosingPt(s){const n=s.length;n>3&&s[0][0]===this._xCut&&s[n-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[n-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,n){const i=(this._xCut-s[0])/(n[0]-s[0]);return s[1]+i*(n[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{H as a,U as p};
