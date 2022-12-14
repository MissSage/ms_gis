import{$ as H,bT as $,S as b,a3 as _,bU as N,bV as O}from"./vendor.faf54504.js";import{x as E}from"./number.30628ef2.js";import{F as Y,G as L,C as T}from"./enums.2d9e6f64.js";import"./Texture.5f3d51a1.js";import{t as z}from"./VertexElementDescriptor.1fdca6da.js";function Ut(t,e=0,n=!1){const r=t[e+3];return t[e+0]*=r,t[e+1]*=r,t[e+2]*=r,n||(t[e+3]*=255),t}function Et(t){if(!t)return 0;const{r:e,g:n,b:r,a:s}=t;return E(e*s,n*s,r*s,255*s)}function pt(t){if(!t)return 0;const[e,n,r,s]=t;return E(e*(s/255),n*(s/255),r*(s/255),s)}function yt(t,e,n=0){if(H(e))return t[n+0]=0,t[n+1]=0,t[n+2]=0,void(t[n+3]=0);const{r,g:s,b:a,a:c}=e;t[n+0]=r*c/255,t[n+1]=s*c/255,t[n+2]=a*c/255,t[n+3]=c}var i,p,y,f,M,D,R,S;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(i||(i={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(p||(p={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(y||(y={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(f||(f={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(M||(M={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(D||(D={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(R||(R={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(S||(S={}));class C{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(e,n,r,s,a,c,d,u,I){this.color=e,this.haloColor=n,this.haloSize=r,this.size=s,this.angle=a,this.offsetX=c,this.offsetY=d,this.hAnchor=u,this.vAnchor=I}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}C.pool=new $(C);const A=b.getLogger("esri.views.2d.engine.webgl.Utils"),o="geometry",x=[{name:o,strideInBytes:36}],V=[{name:o,strideInBytes:12}],X=[{name:o,strideInBytes:36}],Z=[{name:o,strideInBytes:24}],k=[{name:o,strideInBytes:12}],j=[{name:o,strideInBytes:40}],K=[{name:o,strideInBytes:36}],W=[{name:o,strideInBytes:36}];function l(t){const e={};for(const n of t)e[n.name]=n.strideInBytes;return e}const q=l(x),J=l(V),Q=l(X),tt=l(Z),et=l(k),nt=l(j),rt=l(K),st=l(W);function Mt(t,e){switch(t){case i.MARKER:return e===S.HEATMAP?J:q;case i.FILL:switch(e){case S.DOT_DENSITY:return et;case S.SIMPLE:case S.OUTLINE_FILL_SIMPLE:return tt;default:return Q}case i.LINE:return nt;case i.TEXT:return rt;case i.LABEL:return st}}const at=[o],it=[o],ot=[o],ct=[o],ut=[o];function lt(t){switch(t){case i.MARKER:return at;case i.FILL:return it;case i.LINE:return ot;case i.TEXT:return ct;case i.LABEL:return ut}}function Tt(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function Dt(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function Rt(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function Ct(t){return t!=null}function gt(t){return typeof t=="number"}function Pt(t){switch(t){case"butt":return N.BUTT;case"round":return N.ROUND;case"square":return N.SQUARE;default:return A.error(new _("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),N.ROUND}}function wt(t){switch(t){case"miter":return O.MITER;case"bevel":return O.BEVEL;case"round":return O.ROUND;default:return A.error(new _("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),O.ROUND}}function Ft(t){switch(t){case"opacity":return f.OPACITY;case"color":return f.COLOR;case"rotation":return f.ROTATION;case"size":return f.SIZE;default:return A.error(`Cannot interpret unknown vv: ${t}`),null}}function Bt(t,e,n,r,s,a,c){for(const u in a){const I=a[u].stride,m=Tt(I),w=a[u].data,F=n[u].data,B=I*s.vertexCount/m,v=I*t/m,G=I*s.vertexFrom/m;for(let h=0;h<B;++h)F[h+v]=w[h+G]}const d=s.indexCount;for(let u=0;u<d;++u)r[u+e]=c[u+s.indexFrom]-s.vertexFrom+t}const vt={[o]:Y.STATIC_DRAW};function Gt(t,e){const n=[];for(let r=0;r<5;++r){const s=lt(r),a={};for(const c of s)a[c]={data:e(r,c)};n.push({data:t(r),buffers:a})}return n}function It(t){switch(t){case T.BYTE:case T.UNSIGNED_BYTE:return 1;case T.SHORT:case T.UNSIGNED_SHORT:return 2;case T.FLOAT:case T.INT:case T.UNSIGNED_INT:return 4}}function Ht(t){switch(t){case L.UNSIGNED_BYTE:return 1;case L.UNSIGNED_SHORT_4_4_4_4:return 2;case L.FLOAT:return 4;default:return void A.error(new _("webgl-utils",`Unable to handle type ${t}`))}}function $t(t){switch(t){case L.UNSIGNED_BYTE:return Uint8Array;case L.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case L.FLOAT:return Float32Array;default:return void A.error(new _("webgl-utils",`Unable to handle type ${t}`))}}function Lt(t){const e={};for(const n in t){const r=t[n];let s=0;e[n]=r.map(a=>{const c=new z(a.name,a.count,a.type,s,0,a.normalized||!1);return s+=a.count*It(a.type),c}),e[n].forEach(a=>a.stride=s)}return e}const ft=t=>{const e=new Map;for(const n in t)for(const r of t[n])e.set(r.name,r.location);return e},St=t=>{const e={};for(const n in t){const r=t[n];e[n]=r.length?r[0].stride:0}return e},U=new Map,bt=(t,e)=>{if(!U.has(t)){const n=Lt(e),r={strides:St(n),bufferLayouts:n,attributes:ft(e)};U.set(t,r)}return U.get(t)};function Yt(t){t(i.FILL),t(i.LINE),t(i.MARKER),t(i.TEXT),t(i.LABEL)}const zt=t=>"path"in t&&At(t.path),xt=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,Vt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,g=t=>t.startsWith("data:image/gif"),Xt=t=>"url"in t&&t.url&&(t.url.includes(".gif")||g(t.url))||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&g(t.imageData),P=t=>t.startsWith("data:image/png"),Zt=t=>"url"in t&&t.url&&(t.url.includes(".png")||P(t.url))||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&P(t.imageData),kt=t=>t.type&&t.type.toLowerCase().includes("3d");function jt(t){switch(t.type){case"line":{const e=t;return e.cim.type==="CIMSolidStroke"&&!e.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}const Kt=t=>t.includes("data:image/svg+xml");function Wt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return ht(t);default:return!0}}function qt(t){const e="maxVVSize"in t&&t.maxVVSize,n="width"in t&&t.width||"size"in t&&t.size||0;return e||n}function Jt(t){const e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}const At=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),ht=t=>{var e,n;return t.type==="fill"&&((n=(e=t==null?void 0:t.cim)==null?void 0:e.markerPlacement)==null?void 0:n.type)==="CIMMarkerPlacementInsidePolygon"};export{Zt as A,ht as B,Kt as D,Vt as E,Mt as G,y as I,Ct as J,Dt as K,jt as M,kt as N,R as O,gt as Q,S,xt as T,qt as U,Rt as W,Tt as X,Wt as _,zt as a,i as b,Bt as c,yt as d,pt as e,Et as f,bt as g,Yt as h,Gt as i,Pt as j,M as k,Ht as l,$t as m,Ut as n,D as o,Ft as r,vt as s,wt as t,Jt as v,Xt as w};
