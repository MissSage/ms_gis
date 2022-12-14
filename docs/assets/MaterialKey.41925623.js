var X=Object.defineProperty,$=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var E=(s,t,e)=>t in s?X(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,l=(s,t)=>{for(var e in t||(t={}))D.call(t,e)&&E(s,e,t[e]);if(z)for(var e of z(t))G.call(t,e)&&E(s,e,t[e]);return s},S=(s,t)=>$(s,k(t));import{a3 as K}from"./vendor.faf54504.js";import{i as Y}from"./alignmentUtils.6849a0a8.js";import{S as o,b as i,k as n,o as p}from"./Utils.b66268a2.js";function j(s,t,e){const r=n.SIZE_FIELD_STOPS|n.SIZE_MINMAX_VALUE|n.SIZE_SCALE_STOPS|n.SIZE_UNIT_VALUE,a=(t&(p.FIELD_TARGETS_OUTLINE|p.MINMAX_TARGETS_OUTLINE|p.SCALE_TARGETS_OUTLINE|p.UNIT_TARGETS_OUTLINE))>>>4;return s===i.LINE&&e.isOutline||s===i.FILL&&P(e.symbologyType)?r&a:r&~a}const L=0,M=8,H=7,I=8,b=11,_=11,O=12,f=13,A=14,U=15,F=16,x=17,B=18,R=19,w=20,N=21,C=26,q=Object.keys(o).filter(s=>typeof o[s]=="number").reduce((s,t)=>S(l({},s),{[t]:o[t]}),{});function J(s){return s===o.SIMPLE||s===o.OUTLINE_FILL_SIMPLE}function P(s){return s===o.OUTLINE_FILL||s===o.OUTLINE_FILL_SIMPLE}function st(s){return J(s.symbologyType)}function it(s){return P(s.symbologyType)}function at(s,t){switch(s){case i.FILL:return V.from(t);case i.LINE:return g.from(t);case i.MARKER:return d.from(t);case i.TEXT:return T.from(t);case i.LABEL:return m.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${s}`)}}function rt(s){switch(v.load(s).geometryType){case i.MARKER:return new d(s);case i.FILL:return new V(s);case i.LINE:return new g(s);case i.TEXT:return new T(s);case i.LABEL:return new m(s)}}class v{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(I,b)}set geometryType(t){this.setBits(t,I,b)}get mapAligned(){return!!this.bit(w)}set mapAligned(t){this.setBit(w,t)}get sdf(){return!!this.bit(_)}set sdf(t){this.setBit(_,t)}get pattern(){return!!this.bit(O)}set pattern(t){this.setBit(O,t)}get textureBinding(){return this.bits(L,M)}set textureBinding(t){this.setBits(t,L,M)}get symbologyType(){return this.bits(N,C)}set symbologyType(t){this.setBits(t,N,C)}get geometryTypeString(){switch(this.geometryType){case i.FILL:return"fill";case i.MARKER:return"marker";case i.LINE:return"line";case i.TEXT:return"text";case i.LABEL:return"label";default:throw new K(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const r=1<<t;e?this._data|=r:this._data&=~r}bit(t){return(this._data&1<<t)>>t}setBits(t,e,r){for(let a=e,h=0;a<r;a++,h++)this.setBit(a,(t&1<<h)!=0)}bits(t,e){let r=0;for(let a=t,h=0;a<e;a++,h++)r|=this.bit(a)<<h;return r}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:o[this.symbologyType],options:q,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(H&this.textureBinding)}}v.shared=new v(0);const u=s=>class extends s{get vvSizeMinMaxValue(){return this.bit(F)!==0}set vvSizeMinMaxValue(t){this.setBit(F,t)}get vvSizeScaleStops(){return this.bit(x)!==0}set vvSizeScaleStops(t){this.setBit(x,t)}get vvSizeFieldStops(){return this.bit(B)!==0}set vvSizeFieldStops(t){this.setBit(B,t)}get vvSizeUnitValue(){return this.bit(R)!==0}set vvSizeUnitValue(t){this.setBit(R,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const r=j(this.geometryType,t,e)&t;this.vvSizeMinMaxValue=!!(r&n.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&n.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&n.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&n.SIZE_SCALE_STOPS)}},Z=s=>class extends s{get vvRotation(){return this.bit(U)!==0}set vvRotation(t){this.setBit(U,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&n.ROTATION)}},c=s=>class extends s{get vvColor(){return this.bit(f)!==0}set vvColor(t){this.setBit(f,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&n.COLOR)}},y=s=>class extends s{get vvOpacity(){return this.bit(A)!==0}set vvOpacity(t){this.setBit(A,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&n.OPACITY)}};class V extends c(y(u(v))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:r}=t,a=this.load(0);return a.geometryType=i.FILL,a.symbologyType=e,e!==o.DOT_DENSITY&&a.setVV(r,t),a.data}getVariation(){return S(l({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}V.shared=new V(0);class d extends c(y(Z(u(v)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:r}=t,a=this.load(0);return a.geometryType=i.MARKER,a.symbologyType=e,e!==o.HEATMAP&&a.setVV(r,t),a.data}getVariation(){return S(l({},super.getVariation()),{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}d.shared=new d(0);class g extends c(y(u(v))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=i.LINE,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return S(l({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}g.shared=new g(0);class T extends c(y(Z(u(v)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=i.TEXT,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return S(l({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}T.shared=new T(0);class m extends u(v){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=i.LABEL,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.mapAligned=Y(t.placement),e.data}getVariation(){return S(l({},super.getVariation()),{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}m.shared=new m(0);export{rt as A,g as C,d as N,it as O,T as P,v as U,m as Z,P as _,st as b,at as f,V as w};
