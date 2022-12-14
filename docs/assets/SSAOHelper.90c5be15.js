var Bi=Object.defineProperty,Vi=Object.defineProperties;var Hi=Object.getOwnPropertyDescriptors;var gr=Object.getOwnPropertySymbols;var Ui=Object.prototype.hasOwnProperty,Gi=Object.prototype.propertyIsEnumerable;var vr=(t,e,r)=>e in t?Bi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Lt=(t,e)=>{for(var r in e||(e={}))Ui.call(e,r)&&vr(t,r,e[r]);if(gr)for(var r of gr(e))Gi.call(e,r)&&vr(t,r,e[r]);return t},_r=(t,e)=>Vi(t,Hi(e));import{G as Re,iq as xr,E as R,A as g,Z as ce,gF as k,g9 as Ye,aG as Qe,dj as mt,x as br,J as Tr,iV as Se,h3 as Sr,ge as Et,hb as Ar,iO as Ft,g2 as Ie,gC as ji,a5 as U,j9 as Wi,ja as ki,fO as qi,g6 as Xi,a3 as C,H as Ki,ak as Nt,il as Yi,aC as pe,fM as zt,eR as Dt,fT as Qi,fP as K,aw as le,hw as Zi,h8 as He,aq as Ce,I as Ji,M as ft,gp as Bt,fN as Vt,g1 as Ht,g5 as Ut,jb as es,gm as Gt,dx as ts,bz as rs,K as pt,ac as is,jc as wr,dz as ss,jd as Ze,je as Je,W as Or,jf as as,Q as ns,R as os,gW as jt,gn as yr,hO as cs,gc as Le,jg as ls,jh as Pr,fR as et,gk as ds,ga as Mr,ji as $r,jj as us,jk as hs,jl as ms,fu as fs,bD as Wt}from"./vendor.150443b7.js";import{t as ps,g as gt,O as kt,k as qt,m as Ae,W as Rr,_ as Ir}from"./OrderIndependentTransparency.9f3f7312.js";import{h as gs,e as q}from"./Util.8c6c5989.js";import{w as vs}from"./triangle.21a14e09.js";import{u as Cr,n as _s}from"./Indices.b7b3c3c0.js";import{O as f}from"./VertexAttribute.42396f25.js";import{t as Lr}from"./requestImageUtils.d8f271c8.js";import{E as tt,C as ie,F as xs,M as rt,P as de,G as it,L as ge,u as ve,D as st,Y as Er,V as Fr,I as Ue,O as Y}from"./enums.2d9e6f64.js";import{a as bs,E as ue,n as Ts}from"./Texture.0551b3c6.js";import{a as Ss,E as As,_ as ws,x as vt,n as _t}from"./VertexArrayObject.b8066877.js";import{c as Os,x as Xt,u as ys,i as Nr}from"./BufferView.8b09f266.js";import{n as Kt,r as Ps}from"./vec3f32.1121a836.js";import{t as se}from"./VertexElementDescriptor.1fdca6da.js";class Ms extends Ss{}class zr{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Dr{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Re(this._program),this._pipeline=this._configuration=null}reload(e){Re(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return tt.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}}var I;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(I||(I={}));class Br{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new xr({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(I.Pass,this),this.bindDraw=r.generateBind(I.Draw,this),this._fragmentUniforms=bs()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(R(r)||r.glName==null){const s=this._textures.get(e);return s&&(this._context.bindTexture(null,s.unit),this._freeTextureUnit(s),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}class Ee{}function d(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(d||(d={}));function Yt(t){t.code.add(d`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Qt(t){t.include(Yt),t.code.add(d`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}class V{constructor(e,r,i,s,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[I.Pass]:null,[I.Draw]:null},g(i)&&g(s)&&(this.bind[i]=s)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class ae extends V{constructor(e,r){super(e,"vec2",I.Pass,(i,s,a)=>i.setUniform2fv(e,r(s,a)))}}class G extends V{constructor(e,r){super(e,"vec4",I.Pass,(i,s,a)=>i.setUniform4fv(e,r(s,a)))}}function $s(t){t.fragment.uniforms.add(new G("projInfo",(e,r)=>Rs(r))),t.fragment.uniforms.add(new ae("zScale",(e,r)=>Hr(r))),t.fragment.code.add(d`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Rs(t){const e=t.camera.projectionMatrix;return e[11]===0?k(Vr,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):k(Vr,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Vr=Ye();function Hr(t){return t.camera.projectionMatrix[11]===0?ce(Ur,0,1):ce(Ur,1,0)}const Ur=Qe();class j extends V{constructor(e,r){super(e,"vec3",I.Pass,(i,s,a)=>i.setUniform3fv(e,r(s,a)))}}class at extends V{constructor(e,r){super(e,"float",I.Pass,(i,s,a)=>i.setUniform1f(e,r(s,a)))}}const Zt="Size",xt="InvSize";function bt(t,e,r=!1,i=0){if(t.hasWebGL2Context){const s=d`vec2(textureSize(${e}, ${d.int(i)}))`;return r?"(1.0 / "+s+")":s}return r?e+xt:e+Zt}function Is(t,e,r,i=null,s=0){if(t.hasWebGL2Context)return d`texelFetch(${e}, ivec2(${r}), ${d.int(s)})`;let a=d`texture2D(${e}, ${r} * `;return a+=i?d`(${i}))`:d`${e+xt})`,a}var W;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(W||(W={}));class Fe extends V{constructor(e,r){super(e,"sampler2D",I.Pass,(i,s,a)=>i.bindTexture(e,r(s,a)))}}function nt(t,e,r=W.None){const i=[new Fe(t,e)];if(r&W.Size){const s=t+Zt;i.push(new ae(s,(a,n)=>{const o=e(a,n);return g(o)?ce(Gr,o.descriptor.width,o.descriptor.height):mt}))}if(r&W.InvSize){const s=t+xt;i.push(new ae(s,(a,n)=>{const o=e(a,n);return g(o)?ce(Gr,1/o.descriptor.width,1/o.descriptor.height):mt}))}return i}const Gr=Qe();class ot extends V{constructor(e,r){super(e,"mat4",I.Pass,(i,s,a)=>i.setUniformMatrix4fv(e,r(s,a)))}}const jr=br.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Wr{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){jr.error("Trying to include shader module multiple times with different sets of options.");const s=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&s.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&s.add(a);s.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}}class Jt extends Wr{constructor(){super(...arguments),this.vertex=new kr,this.fragment=new kr,this.attributes=new Es,this.varyings=new Fs,this.extensions=new Ge,this.constants=new E}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),s=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),o=a.code.generateSource(),l=e==="vertex"?zs:Ns,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${l}

${c.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${s.join(`
`)}

${o.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const o=n.bind[e];g(o)&&i.set(n.name,o)}),this.fragment.uniforms.entries.forEach(n=>{const o=n.bind[e];g(o)&&i.set(n.name,o)});const s=Array.from(i.values()),a=s.length;return(n,o,l)=>{for(let c=0;c<a;++c)s[c](r,n,o,l)}}}class Cs{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(R(e))jr.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Tr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>g(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class Ls{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class kr extends Wr{constructor(){super(...arguments),this.uniforms=new Cs,this.code=new Ls,this.constants=new E}get builder(){return this}}class Es{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class Fs{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class Ge{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Ge.ALLOWLIST_VERTEX:Ge.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}Ge.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Ge.ALLOWLIST_VERTEX=[];class E{constructor(){this._entries=new Set}add(e,r,i){let s="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":s=E._numberToFloatStr(i);break;case"int":s=E._numberToIntStr(i);break;case"bool":s=i.toString();break;case"vec2":s=`vec2(${E._numberToFloatStr(i[0])},                            ${E._numberToFloatStr(i[1])})`;break;case"vec3":s=`vec3(${E._numberToFloatStr(i[0])},                            ${E._numberToFloatStr(i[1])},                            ${E._numberToFloatStr(i[2])})`;break;case"vec4":s=`vec4(${E._numberToFloatStr(i[0])},                            ${E._numberToFloatStr(i[1])},                            ${E._numberToFloatStr(i[2])},                            ${E._numberToFloatStr(i[3])})`;break;case"ivec2":s=`ivec2(${E._numberToIntStr(i[0])},                             ${E._numberToIntStr(i[1])})`;break;case"ivec3":s=`ivec3(${E._numberToIntStr(i[0])},                             ${E._numberToIntStr(i[1])},                             ${E._numberToIntStr(i[2])})`;break;case"ivec4":s=`ivec4(${E._numberToIntStr(i[0])},                             ${E._numberToIntStr(i[1])},                             ${E._numberToIntStr(i[2])},                             ${E._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${r}(${Array.prototype.map.call(i,a=>E._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${s};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const Ns=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,zs=`precision highp float;
precision highp sampler2D;`,Tt=new Map([[f.POSITION,0],[f.NORMAL,1],[f.UV0,2],[f.COLOR,3],[f.SIZE,4],[f.TANGENT,4],[f.AUXPOS1,5],[f.SYMBOLCOLOR,5],[f.AUXPOS2,6],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[f.MODEL,8],[f.MODELNORMAL,12],[f.MODELORIGINHI,11],[f.MODELORIGINLO,15]]);new se(f.POSITION,3,ie.FLOAT,0,12);new se(f.POSITION,3,ie.FLOAT,0,20),new se(f.UV0,2,ie.FLOAT,12,20);new se(f.POSITION,3,ie.FLOAT,0,32),new se(f.NORMAL,3,ie.FLOAT,12,32),new se(f.UV0,2,ie.FLOAT,24,32);new se(f.POSITION,3,ie.FLOAT,0,16),new se(f.COLOR,4,ie.UNSIGNED_BYTE,12,16);const Ds=[new se(f.POSITION,2,ie.FLOAT,0,8)],Bs=[new se(f.POSITION,2,ie.FLOAT,0,16),new se(f.UV0,2,ie.FLOAT,8,16)];function qr(t,e=Ds,r=Tt,i=-1,s=1){let a=null;return e===Bs?a=new Float32Array([i,i,0,0,s,i,1,0,i,s,0,1,s,s,1,1]):a=new Float32Array([i,i,s,i,i,s,s,s]),new Ms(t,r,{geometry:e},{geometry:As.createVertex(t,xs.STATIC_DRAW,a)})}function Jn(t){return new ue(t,{target:rt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:it.UNSIGNED_BYTE,samplingMode:ge.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}var Xr;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Xr||(Xr={}));function Vs(t){return Math.abs(t*t*t)}function Kr(t,e,r){const i=r.parameters,s=r.paddingPixelsOverride;return ct.scale=Math.min(i.divisor/(e-i.offset),1),ct.factor=Vs(t),ct.minPixelSize=i.minPixelSize,ct.paddingPixels=s,ct}function Yr(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Qr(t,e){return Math.max(Se(t*e.scale,t,e.factor),Yr(t,e))}function Hs(t,e,r){const i=Kr(t,e,r);return i.minPixelSize=0,i.paddingPixels=0,Qr(1,i)}function eo(t,e,r,i){i.scale=Hs(t,e,r),i.factor=0,i.minPixelSize=r.parameters.minPixelSize,i.paddingPixels=r.paddingPixelsOverride}function to(t,e,r=[0,0]){const i=Math.min(Math.max(e.scale,Yr(t[1],e)/Math.max(1e-5,t[1])),1);return r[0]=t[0]*i,r[1]=t[1]*i,r}function Us(t,e,r,i){return Qr(t,Kr(e,r,i))}const ct={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function ro(t,e){return R(t)&&(t=[]),t.push(e),t}function io(t,e){if(R(t))return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}function Gs(t){return!!g(t)&&!t.visible}function so(t,e,r){const i=t.origin.vec3;gs(er,-i[0],-i[1],-i[2]),g(t.transformation)?Sr(e,er,t.transformation):Et(e,er),Ar(r,e),Ft(r,r)}function ao(t,e,r,i,s){St[0]=t.get(e,0),St[1]=t.get(e,1),St[2]=t.get(e,2),ps(St,Ne,3),r.set(s,0,Ne[0]),i.set(s,0,Ne[1]),r.set(s,1,Ne[2]),i.set(s,1,Ne[3]),r.set(s,2,Ne[4]),i.set(s,2,Ne[5])}const St=new Float64Array(3),Ne=new Float32Array(6),er=Ie(),At=ji();function no(t,e,r,i,s,a,n){if(!Gs(e))if(t.boundingInfo){q(t.primitiveType===gt.Triangle);const o=r.tolerance;Zr(t.boundingInfo,i,s,o,a,n)}else{const o=t.indices.get(f.POSITION),l=t.vertexAttributes.get(f.POSITION);ei(i,s,0,o.length/3,o,l,void 0,a,n)}}const js=C();function Zr(t,e,r,i,s,a){if(R(t))return;const n=ks(e,r,js);if(Wi(At,t.getBBMin()),ki(At,t.getBBMax()),g(s)&&s.applyToAabb(At),qs(At,e,n,i)){const{primitiveIndices:o,indices:l,position:c}=t,u=o?o.length:l.length/3;if(u>Qs){const h=t.getChildren();if(h!==void 0){for(let m=0;m<8;++m)h[m]!==void 0&&Zr(h[m],e,r,i,s,a);return}}ei(e,r,0,u,l,c,o,s,a)}}const Jr=C();function ei(t,e,r,i,s,a,n,o,l){if(n)return Ws(t,e,r,i,s,a,n,o,l);const c=a.data,u=a.stride||a.size,h=t[0],m=t[1],p=t[2],_=e[0]-h,S=e[1]-m,w=e[2]-p;for(let v=r,N=3*r;v<i;++v){let M=u*s[N++],O=c[M++],L=c[M++],b=c[M];M=u*s[N++];let T=c[M++],y=c[M++],A=c[M];M=u*s[N++];let x=c[M++],$=c[M++],P=c[M];g(o)&&([O,L,b]=o.applyToVertex(O,L,b,v),[T,y,A]=o.applyToVertex(T,y,A,v),[x,$,P]=o.applyToVertex(x,$,P,v));const F=T-O,B=y-L,z=A-b,H=x-O,he=$-L,me=P-b,Oe=S*me-he*w,ke=w*H-me*_,qe=_*he-H*S,re=F*Oe+B*ke+z*qe;if(Math.abs(re)<=Number.EPSILON)continue;const X=h-O,ye=m-L,Pe=p-b,oe=X*Oe+ye*ke+Pe*qe;if(re>0){if(oe<0||oe>re)continue}else if(oe>0||oe<re)continue;const fe=ye*z-B*Pe,Xe=Pe*F-z*X,Ke=X*B-F*ye,Me=_*fe+S*Xe+w*Ke;if(re>0){if(Me<0||oe+Me>re)continue}else if(Me>0||oe+Me<re)continue;const $e=(H*fe+he*Xe+me*Ke)/re;$e>=0&&l($e,ii(F,B,z,H,he,me,Jr),v,!1)}}function Ws(t,e,r,i,s,a,n,o,l){const c=a.data,u=a.stride||a.size,h=t[0],m=t[1],p=t[2],_=e[0]-h,S=e[1]-m,w=e[2]-p;for(let v=r;v<i;++v){const N=n[v];let M=3*N,O=u*s[M++],L=c[O++],b=c[O++],T=c[O];O=u*s[M++];let y=c[O++],A=c[O++],x=c[O];O=u*s[M];let $=c[O++],P=c[O++],F=c[O];g(o)&&([L,b,T]=o.applyToVertex(L,b,T,v),[y,A,x]=o.applyToVertex(y,A,x,v),[$,P,F]=o.applyToVertex($,P,F,v));const B=y-L,z=A-b,H=x-T,he=$-L,me=P-b,Oe=F-T,ke=S*Oe-me*w,qe=w*he-Oe*_,re=_*me-he*S,X=B*ke+z*qe+H*re;if(Math.abs(X)<=Number.EPSILON)continue;const ye=h-L,Pe=m-b,oe=p-T,fe=ye*ke+Pe*qe+oe*re;if(X>0){if(fe<0||fe>X)continue}else if(fe>0||fe<X)continue;const Xe=Pe*H-z*oe,Ke=oe*B-H*ye,Me=ye*z-B*Pe,$e=_*Xe+S*Ke+w*Me;if(X>0){if($e<0||fe+$e>X)continue}else if($e>0||fe+$e<X)continue;const pr=(he*Xe+me*Ke+Oe*Me)/X;pr>=0&&l(pr,ii(B,z,H,he,me,Oe,Jr),N,!1)}}const ti=C(),ri=C();function ii(t,e,r,i,s,a,n){return U(ti,t,e,r),U(ri,i,s,a),qi(n,ti,ri),Xi(n,n),n}function ks(t,e,r){return U(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function qs(t,e,r,i){return Xs(t,e,r,i,1/0)}function Xs(t,e,r,i,s){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let o=Math.min(a,n),l=Math.max(a,n);const c=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0||(o=Math.max(o,Math.min(c,u)),o>l))return!1;const h=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return l=Math.min(l,Math.max(h,m)),!(l<0)&&(o=Math.max(o,Math.min(h,m)),!(o>l)&&o<s)}function oo(t,e,r,i,s){let a=(r.screenLength||0)*t.pixelRatio;g(s)&&(a=Us(a,i,e,s));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Nt(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function si(t,e){const r=e?si(e):{};for(const i in t){let s=t[i];s&&s.forEach&&(s=Ys(s)),s==null&&i in r||(r[i]=s)}return r}function Ks(t,e){let r=!1;for(const i in e){const s=e[i];s!==void 0&&(Array.isArray(s)?t[i]===null?(t[i]=s.slice(),r=!0):Ki(t[i],s)&&(r=!0):t[i]!==s&&(r=!0,t[i]=s))}return r}function co(t,e,r,i,s,a){if(!e.options.selectionMode)return;const n=t.vertexAttributes.get(f.POSITION).data,o=t.vertexAttributes.get(f.SIZE),l=o&&o.data[0],c=i[0],u=i[1],h=((l+s)/2+4)*t.screenToWorldRatio;let m=Number.MAX_VALUE,p=0;for(let _=0;_<n.length-5;_+=3){const S=n[_],w=n[_+1],v=c-S,N=u-w,M=n[_+3]-S,O=n[_+4]-w,L=Nt((M*v+O*N)/(M*M+O*O),0,1),b=M*L-v,T=O*L-N,y=b*b+T*T;y<m&&(m=y,p=_/3)}m<h*h&&a(r.dist,r.normal,p,!1)}function Ys(t){const e=[];return t.forEach(r=>e.push(r)),e}const lo={multiply:1,ignore:2,replace:3,tint:4},Qs=1e3;class Zs{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function ze(t={}){return(e,r)=>{var i,s;if(e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const a=e._parameterNames.length-1,n=t.count||2,o=Math.ceil(Math.log2(n)),l=(s=e._parameterBits)!=null?s:[0];let c=0;for(;l[c]+o>16;)c++,c>=l.length&&l.push(0);e._parameterBits=l;const u=l[c],h=(1<<o)-1<<u;l[c]+=o,Object.defineProperty(e,r,{get(){return this[a]},set(m){if(this[a]!==m&&(this[a]=m,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~h|+m<<u&h,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof m}})}}}function tr(t,e=!0){t.attributes.add(f.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(d`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?d`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}class rr{constructor(){this.id=Yi()}unload(){}}var lt;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(lt||(lt={}));class ir{constructor(e,r,i,s){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=s,this.center=C(),this._children=void 0,q(e.length>=1),q(i.length%this._numIndexPerPrimitive==0),q(i.length>=e.length*this._numIndexPerPrimitive),q(s.size===3||s.size===4);const{data:a,size:n}=s,o=e.length;let l=n*i[this._numIndexPerPrimitive*e[0]];De.clear(),De.push(l),this.bbMin=pe(a[l],a[l+1],a[l+2]),this.bbMax=zt(this.bbMin);for(let u=0;u<o;++u){const h=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){l=n*i[h+m],De.push(l);let p=a[l];this.bbMin[0]=Math.min(p,this.bbMin[0]),this.bbMax[0]=Math.max(p,this.bbMax[0]),p=a[l+1],this.bbMin[1]=Math.min(p,this.bbMin[1]),this.bbMax[1]=Math.max(p,this.bbMax[1]),p=a[l+2],this.bbMin[2]=Math.min(p,this.bbMin[2]),this.bbMax[2]=Math.max(p,this.bbMax[2])}}Dt(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let u=0;u<De.length;++u){l=De.getItemAt(u);const h=a[l]-this.center[0],m=a[l+1]-this.center[1],p=a[l+2]-this.center[2],_=h*h+m*m+p*p;if(_<=c)continue;const S=Math.sqrt(_),w=.5*(S-this.radius);this.radius=this.radius+w,c=this.radius*this.radius;const v=w/S;this.center[0]+=h*v,this.center[1]+=m*v,this.center[2]+=p*v}De.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Qi(this.bbMin,this.bbMax)>1){const e=Dt(C(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),s=new Array(8);for(let c=0;c<8;++c)s[c]=0;const{data:a,size:n}=this.position;for(let c=0;c<r;++c){let u=0;const h=this._numIndexPerPrimitive*this.primitiveIndices[c];let m=n*this.indices[h],p=a[m],_=a[m+1],S=a[m+2];for(let w=1;w<this._numIndexPerPrimitive;++w){m=n*this.indices[h+w];const v=a[m],N=a[m+1],M=a[m+2];v<p&&(p=v),N<_&&(_=N),M<S&&(S=M)}p<e[0]&&(u|=1),_<e[1]&&(u|=2),S<e[2]&&(u|=4),i[c]=u,++s[u]}let o=0;for(let c=0;c<8;++c)s[c]>0&&++o;if(o<2)return;const l=new Array(8);for(let c=0;c<8;++c)l[c]=s[c]>0?new Uint32Array(s[c]):void 0;for(let c=0;c<8;++c)s[c]=0;for(let c=0;c<r;++c){const u=i[c];l[u][s[u]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)l[c]!==void 0&&(this._children[c]=new ir(l[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){De.prune()}}const De=new xr({deallocator:null});function Js(t,e,r){if(!t||!e)return!1;const{size:i,data:s}=t;U(r,0,0,0),U(Q,0,0,0);let a=0,n=0;for(let o=0;o<e.length-2;o+=3){const l=e[o+0]*i,c=e[o+1]*i,u=e[o+2]*i;U(D,s[l+0],s[l+1],s[l+2]),U(_e,s[c+0],s[c+1],s[c+2]),U(wt,s[u+0],s[u+1],s[u+2]);const h=vs(D,_e,wt);h?(K(D,D,_e),K(D,D,wt),le(D,D,1/3*h),K(r,r,D),a+=h):(K(Q,Q,D),K(Q,Q,_e),K(Q,Q,wt),n+=3)}return(n!==0||a!==0)&&(a!==0?(le(r,r,1/a),!0):n!==0&&(le(r,Q,1/n),!0))}function ea(t,e,r){if(!t||!e)return!1;const{size:i,data:s}=t;U(r,0,0,0);let a=-1,n=0;for(let o=0;o<e.length;o++){const l=e[o]*i;a!==l&&(r[0]+=s[l+0],r[1]+=s[l+1],r[2]+=s[l+2],n++),a=l}return n>1&&le(r,r,1/n),n>0}function uo(t,e,r,i){if(!t)return!1;const{size:s,data:a}=t;U(i,0,0,0),U(Q,0,0,0);let n=0,o=0;const l=e?e.length-1:a.length/s-1,c=l+(r?2:0);for(let u=0;u<c;u+=2){const h=u<l?u:l,m=u<l?u+1:0,p=(e?e[h]:h)*s,_=(e?e[m]:m)*s;D[0]=a[p+0],D[1]=a[p+1],D[2]=a[p+2],_e[0]=a[_+0],_e[1]=a[_+1],_e[2]=a[_+2],le(D,K(D,D,_e),.5);const S=Zi(D,_e);S>0?(K(i,i,le(D,D,S)),n+=S):(K(Q,Q,D),o++)}return n!==0?(le(i,i,1/n),!0):o!==0&&(le(i,Q,1/o),!0)}const D=C(),_e=C(),wt=C(),Q=C();class ai extends rr{constructor(e,r=[],i=gt.Triangle,s=null,a=-1){super(),this._primitiveType=i,this.objectAndLayerIdColor=s,this.edgeIndicesLength=a,this.type=lt.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,o]of e)o&&this._vertexAttributes.set(n,Lt({},o));if(r==null||r.length===0){const n=ta(this._vertexAttributes),o=Cr(n);this.edgeIndicesLength=this.edgeIndicesLength<0?n:this.edgeIndicesLength;for(const l of this._vertexAttributes.keys())this._indices.set(l,o)}else for(const[n,o]of r)o&&(this._indices.set(n,_s(o)),n===f.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new ai([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:r,_indices:i}=e;return this._vertexAttributes.forEach((s,a)=>r.set(a,s)),this._indices.forEach((s,a)=>i.set(a,s)),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return R(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===gt.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(f.POSITION),i=this.vertexAttributes.get(f.POSITION);return Js(i,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(f.POSITION),i=this.vertexAttributes.get(f.POSITION);return ea(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(f.POSITION);if(!e||e.length===0)return null;const r=this.primitiveType===gt.Triangle?3:1;q(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=Cr(e.length/r),s=this.vertexAttributes.get(f.POSITION);return s?new ir(i,r,e,s):null}}function ta(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}class ho extends rr{constructor(e,r){super(),this.type=lt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Tt,this._parameters=si(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Ks(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}var sr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(sr||(sr={}));class ra extends Ee{constructor(){super(...arguments),this.renderOccluded=sr.Occlude}}var Z;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExludeHighlight=5]="ShadowExludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(Z||(Z={}));class ia{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,r),this._technique),this._technique}ensureResources(e){return kt.LOADED}}class mo extends ra{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=pe(1,1,1),this.vvSizeMaxSize=pe(100,100,100),this.vvSizeOffset=pe(0,0,0),this.vvSizeFactor=pe(1,1,1),this.vvSizeValue=pe(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=He()}}const ar=8;class Be extends Zs{constructor(){super(...arguments),this.hasWebGL2Context=!1}}Ce([ze({constValue:!0})],Be.prototype,"hasSliceHighlight",void 0),Ce([ze({constValue:!1})],Be.prototype,"hasSliceInVertexProgram",void 0),Ce([ze({constValue:!1})],Be.prototype,"instancedDoublePrecision",void 0),Ce([ze({constValue:!1})],Be.prototype,"useLegacyTerrainShading",void 0),Ce([ze({constValue:!1})],Be.prototype,"hasModelTransformation",void 0),Ce([ze({constValue:I.Pass})],Be.prototype,"pbrTextureBindType",void 0),Ce([ze()],Be.prototype,"hasWebGL2Context",void 0);function sa(t){t.attributes.add(f.POSITION,"vec3"),t.vertex.code.add(d`vec3 positionModel() { return position; }`)}function aa({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function fo(t){return!!Ji("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}class xe extends V{constructor(e,r){super(e,"vec3",I.Draw,(i,s,a,n)=>i.setUniform3fv(e,r(s,a,n)))}}class ni extends V{constructor(e,r){super(e,"mat3",I.Draw,(i,s,a)=>i.setUniformMatrix3fv(e,r(s,a)))}}class nr extends V{constructor(e,r){super(e,"mat3",I.Pass,(i,s,a)=>i.setUniformMatrix3fv(e,r(s,a)))}}function oi(t,e){t.include(sa);const r=t.vertex;r.include(aa,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new j("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new j("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new nr("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new ot("transformProjFromView",i=>i.transformProjFromView),new ni("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new xe("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new xe("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?d`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new j("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class na extends Ee{constructor(){super(...arguments),this.transformWorldFromViewTH=C(),this.transformWorldFromViewTL=C(),this.transformViewFromCameraRelativeRS=He(),this.transformProjFromView=Ie()}}class oa extends Ee{constructor(){super(...arguments),this.transformWorldFromModelRS=He(),this.transformWorldFromModelTH=Kt(),this.transformWorldFromModelTL=Kt()}}function ci(t){t.varyings.add("linearDepth","float")}function ca(t){t.vertex.uniforms.add(new ae("nearFar",(e,r)=>r.camera.nearFar))}function li(t){t.vertex.code.add(d`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function po(t,e){const{vertex:r}=t;switch(e.output){case Z.Color:if(e.receiveShadows)return ci(t),void r.code.add(d`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case Z.Depth:case Z.Shadow:case Z.ShadowHighlight:case Z.ShadowExludeHighlight:return t.include(oi,e),ci(t),ca(t),li(t),void r.code.add(d`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(d`void forwardLinearDepth() {}`)}function go(t,e){la(t,e,[new xe("slicePlaneOrigin",(r,i)=>da(e,r,i)),new xe("slicePlaneBasis1",(r,i)=>{var s;return mi(e,r,i,(s=ft(i.slicePlane))==null?void 0:s.basis1)}),new xe("slicePlaneBasis2",(r,i)=>{var s;return mi(e,r,i,(s=ft(i.slicePlane))==null?void 0:s.basis2)})])}function la(t,e,r){if(!e.hasSlicePlane){const n=d`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,s=d`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?d`
        ${s}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:d`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function di(t,e,r){return t.instancedDoublePrecision?U(ua,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ui(t,e){return g(t)?Vt(Ot,e.origin,t):e.origin}function hi(t,e,r){return t.hasSliceTranslatedView?g(e)?Ht(ha,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function da(t,e,r){if(R(r.slicePlane))return Bt;const i=di(t,e,r),s=ui(i,r.slicePlane),a=hi(t,i,r);return g(a)?Ut(Ot,s,a):s}function mi(t,e,r,i){if(R(i)||R(r.slicePlane))return Bt;const s=di(t,e,r),a=ui(s,r.slicePlane),n=hi(t,s,r);return g(n)?(K(dt,i,a),Ut(Ot,a,n),Ut(dt,dt,n),Vt(dt,dt,Ot)):i}const ua=C(),Ot=C(),dt=C(),ha=Ie();function vo(t,e){const r=e.output===Z.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(f.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(d`
     void forwardObjectAndLayerIdColor() {
      ${r?i?d`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:d`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d``} }`),t.fragment.code.add(d`
      void outputObjectAndLayerIdColor() {
        ${r?d`gl_FragColor = objectAndLayerIdColorVarying;`:d``} }`)}class ma extends V{constructor(e,r,i){super(e,"vec4",I.Pass,(s,a,n)=>s.setUniform4fv(e,r(a,n)),i)}}class fa extends V{constructor(e,r,i){super(e,"float",I.Pass,(s,a,n)=>s.setUniform1fv(e,r(a,n)),i)}}function _o(t,e){switch(t.fragment.include(Yt),e.output){case Z.Shadow:case Z.ShadowHighlight:case Z.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case Z.Depth:t.fragment.code.add(d`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}class pa extends V{constructor(e,r){super(e,"mat4",I.Draw,(i,s,a)=>i.setUniformMatrix4fv(e,r(s,a)))}}function ga(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Bt):t.uniforms.add(new xe("cameraPosition",(r,i)=>U(pi,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function xo(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new ot("proj",(i,s)=>s.camera.projectionMatrix),new pa("view",(i,s)=>Ht(fi,s.camera.viewMatrix,i.origin)),new xe("localOrigin",i=>i.origin)]);const r=i=>U(pi,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new ot("proj",(i,s)=>s.camera.projectionMatrix),new ot("view",(i,s)=>Ht(fi,s.camera.viewMatrix,r(s))),new j("localOrigin",(i,s)=>r(s))])}const fi=es(),pi=C();function bo(t){t.uniforms.add(new ot("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}class gi extends Ee{constructor(){super(...arguments),this.color=Gt(1,1,1,1)}}function va(){const t=new Jt;return t.include(tr),t.fragment.uniforms.add([new Fe("tex",e=>e.texture),new G("uColor",e=>e.color)]),t.fragment.code.add(d`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}const To=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:gi,build:va},Symbol.toStringTag,{value:"Module"}));function _a(){if(R(or)){const t=e=>ts(`esri/libs/basisu/${e}`);or=import("./basis_transcoder.88644c5e.js").then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return or}let or;var Ve;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ve||(Ve={}));let ne=null,yt=null;async function vi(){return R(yt)&&(yt=_a(),ne=await yt),yt}function xa(t,e){if(R(ne))return t.byteLength;const r=new ne.BasisFile(new Uint8Array(t)),i=xi(r)?_i(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function ba(t,e){if(R(ne))return t.byteLength;const r=new ne.KTX2File(new Uint8Array(t)),i=bi(r)?_i(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function _i(t,e,r,i,s){const a=ws(e?ve.COMPRESSED_RGBA8_ETC2_EAC:ve.COMPRESSED_RGB8_ETC2),n=s&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function xi(t){return t.getNumImages()>=1&&!t.isUASTC()}function bi(t){return t.getFaces()>=1&&t.isETC1S()}async function Ta(t,e,r){R(ne)&&(ne=await vi());const i=new ne.BasisFile(new Uint8Array(r));if(!xi(i))return null;i.startTranscoding();const s=Ti(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,o)=>i.transcodeImage(o,0,a,n,0,0));return i.close(),i.delete(),s}async function Sa(t,e,r){R(ne)&&(ne=await vi());const i=new ne.KTX2File(new Uint8Array(r));if(!bi(i))return null;i.startTranscoding();const s=Ti(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,o)=>i.transcodeImage(o,a,0,0,n,0,-1,-1));return i.close(),i.delete(),s}function Ti(t,e,r,i,s,a,n,o){const{compressedTextureETC:l,compressedTextureS3TC:c}=t.capabilities,[u,h]=l?i?[Ve.ETC2_RGBA,ve.COMPRESSED_RGBA8_ETC2_EAC]:[Ve.ETC1_RGB,ve.COMPRESSED_RGB8_ETC2]:c?i?[Ve.BC3_RGBA,ve.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ve.BC1_RGB,ve.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ve.RGBA32,de.RGBA],m=e.hasMipmap?r:Math.min(1,r),p=[];for(let v=0;v<m;v++)p.push(new Uint8Array(n(v,u))),o(v,u,p[v]);const _=p.length>1,S=_?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,w=_r(Lt({},e),{samplingMode:S,hasMipmap:_,internalFormat:h,width:s,height:a});return new ue(t,w,{type:"compressed",levels:p})}const ut=br.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Aa=542327876,wa=131072,Oa=4;function cr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ya(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const Pa=cr("DXT1"),Ma=cr("DXT3"),$a=cr("DXT5"),Ra=31,Ia=0,Ca=1,La=2,Ea=3,Fa=4,Na=7,za=20,Da=21;function Ba(t,e,r){var o;const{textureData:i,internalFormat:s,width:a,height:n}=rs(Va(r,(o=e.hasMipmap)!=null?o:!1));return e.samplingMode=i.levels.length>1?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=s,e.width=a,e.height=n,new ue(t,e,i)}function Va(t,e){const r=new Int32Array(t,0,Ra);if(r[Ia]!==Aa)return ut.error("Invalid magic number in DDS header"),null;if(!(r[za]&Oa))return ut.error("Unsupported format, must contain a FourCC code"),null;const i=r[Da];let s,a;switch(i){case Pa:s=8,a=ve.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ma:s=16,a=ve.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case $a:s=16,a=ve.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ut.error("Unsupported FourCC code:",ya(i)),null}let n=1,o=r[Fa],l=r[Ea];(3&o)==0&&(3&l)==0||(ut.warn("Rounding up compressed texture size to nearest multiple of 4."),o=o+3&-4,l=l+3&-4);const c=o,u=l;let h,m;r[La]&wa&&e!==!1&&(n=Math.max(1,r[Na])),n===1||pt(o)&&pt(l)||(ut.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let p=r[Ca]+4;const _=[];for(let S=0;S<n;++S)m=(o+3>>2)*(l+3>>2)*s,h=new Uint8Array(t,p,m),_.push(h),p+=m,o=Math.max(1,o>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:_},internalFormat:a,width:c,height:u}}class J extends rr{constructor(e,r){super(),this._data=e,this.type=lt.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new is,this._passParameters=new gi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:st.REPEAT,t:st.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||qt.STRETCH,this.estimatedTexMemRequired=J._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;R(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(wr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){ss(e.src)||wr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(R(e))return 0;if(Ze(e)||Je(e))return r.encoding===J.KTX2_ENCODING?ba(e,r.mipmap):r.encoding===J.BASIS_ENCODING?xa(e,r.mipmap):e.byteLength;const{width:i,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?J._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*s*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:rt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:it.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const i=this._data;return R(i)?(this._glTexture=new ue(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(Ze(i)||Je(i))&&this.params.encoding===J.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,i)):(Ze(i)||Je(i))&&this.params.encoding===J.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,i)):(Ze(i)||Je(i))&&this.params.encoding===J.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,i)):Je(i)?this._loadFromPixelData(e,i):Ze(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this._data instanceof HTMLVideoElement)||R(this._glTexture)||this._data.readyState<ht.HAVE_CURRENT_DATA||i===this._data.currentTime)return i;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:s,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,r,s,a,n,this._glTexture)}else{const{videoWidth:s,videoHeight:a}=this._data,{width:n,height:o}=this._glTexture.descriptor;s!==n||a!==o?this._glTexture.updateData(0,0,0,Math.min(s,n),Math.min(a,o),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Ba(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Sa(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Ta(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){q(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?de.LUMINANCE:this.params.components===3?de.RGB:de.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new ue(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async s=>{const a=await Lr(i,{signal:s});return Or(s),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async s=>{const a=await as(i,i.src,!1,s);return Or(s),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=ht.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(s=>new Promise((a,n)=>{const o=()=>{i.removeEventListener("loadeddata",l),i.removeEventListener("error",c),cs(u)},l=()=>{i.readyState>=ht.HAVE_CURRENT_DATA&&(o(),a(this._loadFromImage(e,i,r)))},c=h=>{o(),n(h||new Tr("Failed to load video"))};i.addEventListener("loadeddata",l),i.addEventListener("error",c);const u=ns(s,()=>c(os()))}))}_loadFromImage(e,r,i){const s=J._getDataDimensions(r);this.params.width=s.width,this.params.height=s.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?de.RGB:de.RGBA,!this._requiresPowerOfTwo(e,a)||pt(s.width)&&pt(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new ue(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,s,a,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const s=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(s,s),i}_requiresPowerOfTwo(e,r){const i=st.CLAMP_TO_EDGE,s=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return!Ts(e.gl)&&(r.hasMipmap||!s)}_makePowerOfTwoTexture(e,r,i,s,a){const{width:n,height:o}=i,l=yr(n),c=yr(o);let u;switch(s.width=l,s.height=c,this.params.powerOfTwoResizeMode){case qt.PAD:s.textureCoordinateScaleFactor=[n/l,o/c],u=new ue(e,s),u.updateData(0,0,0,n,o,r);break;case qt.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,s,a());break;default:jt(this.params.powerOfTwoResizeMode)}return s.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,s){const a=new ue(e,i),n=new vt(e,{colorTarget:Er.TEXTURE,depthStencilTarget:Fr.NONE},a),o=new ue(e,{target:rt.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:it.UNSIGNED_BYTE,wrapMode:st.CLAMP_TO_EDGE,samplingMode:ge.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),l=qr(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,s,n,l,o,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:l,sourceTexture:o,framebuffer:n}:(l.dispose(!0),o.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,r,i,s,a,n){this._passParameters.texture=a,e.bindFramebuffer(i);const o=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(s),e.drawArrays(tt.TRIANGLE_STRIP,0,_t(s,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height),this._passParameters.texture=null}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var ht;J.DDS_ENCODING="image/vnd-ms.dds",J.KTX2_ENCODING="image/ktx2",J.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ht||(ht={}));function So(t,e){e.hasMultipassTerrain&&(t.fragment.include(Qt),t.fragment.uniforms.add(new Fe("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new ae("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new ae("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(d`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Ao{constructor(){this.enabled=!1,this.cullAboveGround=!1}}function Ha(t){t.vertex.code.add(d`const float PI = 3.141592653589793;`),t.fragment.code.add(d`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}const wo=.1,Oo=.001;function yo(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const Po={func:Ue.LESS},Mo={func:Ue.ALWAYS},$o={mask:255},Ro={mask:0},Io={function:{func:Ue.ALWAYS,ref:Ae.OutlineVisualElementMask,mask:Ae.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.ZERO}},Co={function:{func:Ue.ALWAYS,ref:Ae.OutlineVisualElementMask,mask:Ae.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.REPLACE}},Lo={function:{func:Ue.EQUAL,ref:Ae.OutlineVisualElementMask,mask:Ae.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.KEEP}},Eo={function:{func:Ue.NOTEQUAL,ref:Ae.OutlineVisualElementMask,mask:Ae.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.KEEP}};function Ua(t){t.vertex.code.add(d`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Fo(t){t.uniforms.add(new G("screenSizePerspective",e=>Si(e.screenSizePerspective)))}function Ga(t){t.uniforms.add(new G("screenSizePerspectiveAlignment",e=>Si(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Si(t){return k(ja,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const ja=Ye();function No(t,e){const r=t.vertex;e.hasVerticalOffset?(ka(r),e.hasScreenSizePerspective&&(t.include(Ua),Ga(r),ga(t.vertex,e)),r.code.add(d`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?d`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Wa=Ye();function ka(t){t.uniforms.add(new G("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:s,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;return k(Wa,a*o,n,i,s)}))}class zo extends ia{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Le(this._texture),this._textureNormal=Le(this._textureNormal),this._textureEmissive=Le(this._textureEmissive),this._textureOcclusion=Le(this._textureOcclusion),this._textureMetallicRoughness=Le(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?kt.LOADED:kt.LOADING}get textureBindParameters(){return new qa(g(this._texture)?this._texture.glTexture:null,g(this._textureNormal)?this._textureNormal.glTexture:null,g(this._textureEmissive)?this._textureEmissive.glTexture:null,g(this._textureOcclusion)?this._textureOcclusion.glTexture:null,g(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(R(this._texture)||e!==this._texture.id)&&(this._texture=Le(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(R(e))return void r(null);const i=this._textureRepository.acquire(e);if(ls(i))return++this._numLoading,void i.then(s=>{if(this._disposed)return Le(s),void r(null);r(s)}).finally(()=>--this._numLoading);r(i)}}class qa extends Ee{constructor(e=null,r=null,i=null,s=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=s,this.textureMetallicRoughness=a}}function Xa(t,e,r,i){const s=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let o=0;o<n;++o){const l=2*t[o];s[i]=e[l],s[i+1]=e[l+1],i+=a}}function Ai(t,e,r,i,s){const a=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,s==null||s===1)for(let l=0;l<o;++l){const c=3*t[l];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}else for(let l=0;l<o;++l){const c=3*t[l];for(let u=0;u<s;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}}function Ka(t,e,r,i,s=1){const a=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,s===1)for(let l=0;l<o;++l){const c=4*t[l];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}else for(let l=0;l<o;++l){const c=4*t[l];for(let u=0;u<s;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}}function Ya(t,e,r,i,s,a=1){if(!r)return void Ai(t,e,i,s,a);const n=i.typedBuffer,o=i.typedBufferStride,l=t.length,c=r[0],u=r[1],h=r[2],m=r[4],p=r[5],_=r[6],S=r[8],w=r[9],v=r[10],N=r[12],M=r[13],O=r[14];s*=o;let L=0,b=0,T=0;const y=Oi(r)?A=>{L=e[A]+N,b=e[A+1]+M,T=e[A+2]+O}:A=>{const x=e[A],$=e[A+1],P=e[A+2];L=c*x+m*$+S*P+N,b=u*x+p*$+w*P+M,T=h*x+_*$+v*P+O};if(a===1)for(let A=0;A<l;++A)y(3*t[A]),n[s]=L,n[s+1]=b,n[s+2]=T,s+=o;else for(let A=0;A<l;++A){y(3*t[A]);for(let x=0;x<a;++x)n[s]=L,n[s+1]=b,n[s+2]=T,s+=o}}function Qa(t,e,r,i,s,a=1){if(!r)return void Ai(t,e,i,s,a);const n=r,o=i.typedBuffer,l=i.typedBufferStride,c=t.length,u=n[0],h=n[1],m=n[2],p=n[4],_=n[5],S=n[6],w=n[8],v=n[9],N=n[10],M=!Pr(n),O=1e-6,L=1-O;s*=l;let b=0,T=0,y=0;const A=Oi(n)?x=>{b=e[x],T=e[x+1],y=e[x+2]}:x=>{const $=e[x],P=e[x+1],F=e[x+2];b=u*$+p*P+w*F,T=h*$+_*P+v*F,y=m*$+S*P+N*F};if(a===1)if(M)for(let x=0;x<c;++x){A(3*t[x]);const $=b*b+T*T+y*y;if($<L&&$>O){const P=1/Math.sqrt($);o[s]=b*P,o[s+1]=T*P,o[s+2]=y*P}else o[s]=b,o[s+1]=T,o[s+2]=y;s+=l}else for(let x=0;x<c;++x)A(3*t[x]),o[s]=b,o[s+1]=T,o[s+2]=y,s+=l;else for(let x=0;x<c;++x){if(A(3*t[x]),M){const $=b*b+T*T+y*y;if($<L&&$>O){const P=1/Math.sqrt($);b*=P,T*=P,y*=P}}for(let $=0;$<a;++$)o[s]=b,o[s+1]=T,o[s+2]=y,s+=l}}function Za(t,e,r,i,s,a=1){if(!r)return void Ka(t,e,i,s,a);const n=r,o=i.typedBuffer,l=i.typedBufferStride,c=t.length,u=n[0],h=n[1],m=n[2],p=n[4],_=n[5],S=n[6],w=n[8],v=n[9],N=n[10],M=!Pr(n),O=1e-6,L=1-O;if(s*=l,a===1)for(let b=0;b<c;++b){const T=4*t[b],y=e[T],A=e[T+1],x=e[T+2],$=e[T+3];let P=u*y+p*A+w*x,F=h*y+_*A+v*x,B=m*y+S*A+N*x;if(M){const z=P*P+F*F+B*B;if(z<L&&z>O){const H=1/Math.sqrt(z);P*=H,F*=H,B*=H}}o[s]=P,o[s+1]=F,o[s+2]=B,o[s+3]=$,s+=l}else for(let b=0;b<c;++b){const T=4*t[b],y=e[T],A=e[T+1],x=e[T+2],$=e[T+3];let P=u*y+p*A+w*x,F=h*y+_*A+v*x,B=m*y+S*A+N*x;if(M){const z=P*P+F*F+B*B;if(z<L&&z>O){const H=1/Math.sqrt(z);P*=H,F*=H,B*=H}}for(let z=0;z<a;++z)o[s]=P,o[s+1]=F,o[s+2]=B,o[s+3]=$,s+=l}}function wi(t,e,r,i,s,a=1){const n=i.typedBuffer,o=i.typedBufferStride,l=t.length;if(s*=o,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let c=0;c<l;++c){const u=3*t[c];for(let h=0;h<a;++h)n[s]=e[u],n[s+1]=e[u+1],n[s+2]=e[u+2],n[s+3]=255,s+=o}else for(let c=0;c<l;++c){const u=4*t[c];for(let h=0;h<a;++h)n[s]=e[u],n[s+1]=e[u+1],n[s+2]=e[u+2],n[s+3]=e[u+3],s+=o}else{if(r===4){for(let c=0;c<l;++c){const u=4*t[c];n[s]=e[u],n[s+1]=e[u+1],n[s+2]=e[u+2],n[s+3]=e[u+3],s+=o}return}for(let c=0;c<l;++c){const u=3*t[c];n[s]=e[u],n[s+1]=e[u+1],n[s+2]=e[u+2],n[s+3]=255,s+=o}}else{n[s]=e[0],n[s+1]=e[1],n[s+2]=e[2],n[s+3]=e[3];const c=new Uint32Array(i.typedBuffer.buffer,i.start),u=o/4,h=c[s/=4];s+=u;const m=l*a;for(let p=1;p<m;++p)c[s]=h,s+=u}}function Ja(t,e,r,i,s=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,s===1)for(let o=0;o<r;++o)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let o=0;o<r;++o)for(let l=0;l<s;++l)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function Do(t,e,r,i,s,a){for(const n of e.fieldNames){const o=t.vertexAttributes.get(n),l=t.indices.get(n);if(o&&l)switch(n){case f.POSITION:{q(o.size===3);const c=s.getField(n,Nr);c&&Ya(l,o.data,r,c,a);break}case f.NORMAL:{q(o.size===3);const c=s.getField(n,Nr);c&&Qa(l,o.data,i,c,a);break}case f.UV0:{q(o.size===2);const c=s.getField(n,ys);c&&Xa(l,o.data,c,a);break}case f.COLOR:{q(o.size===3||o.size===4);const c=s.getField(n,Xt);c&&wi(l,o.data,o.size,c,a);break}case f.SYMBOLCOLOR:{q(o.size===3||o.size===4);const c=s.getField(n,Xt);c&&wi(l,o.data,o.size,c,a);break}case f.TANGENT:{q(o.size===4);const c=s.getField(n,Os);c&&Za(l,o.data,i,c,a);break}}else if(n===f.OBJECTANDLAYERIDCOLOR&&g(t.objectAndLayerIdColor)&&t.objectAndLayerIdColor.length===4){const c=t.indices.get(f.POSITION);if(c){const u=c.length,h=s.getField(n,Xt);Ja(t.objectAndLayerIdColor,h,u,a)}}}}function Oi(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[8]===0&&t[9]===0&&t[10]===1}const en=Gt(1,1,0,1),tn=Gt(1,0,1,1);function Bo(t,e){t.fragment.uniforms.add(nt("depthTex",(r,i)=>i.highlightDepthTexture,e.hasWebGL2Context?W.None:W.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",en).add("unoccludedHighlightFlag","vec4",tn),t.fragment.code.add(d`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${Is(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}function Vo(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(f.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new j("vvSizeMinSize",i=>i.vvSizeMinSize)),r.uniforms.add(new j("vvSizeMaxSize",i=>i.vvSizeMaxSize)),r.uniforms.add(new j("vvSizeOffset",i=>i.vvSizeOffset)),r.uniforms.add(new j("vvSizeFactor",i=>i.vvSizeFactor)),r.uniforms.add(new nr("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new j("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",ar),e.hasVvInstancing&&r.uniforms.add([new fa("vvColorValues",i=>i.vvColorValues,ar),new ma("vvColorColors",i=>i.vvColorColors,ar)]),r.code.add(d`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?d`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(d`vec4 vvColor() { return vec4(1.0); }`)}function Ho(t,e){if(li(t),e.hasModelTransformation)return t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Uo(t,e){e.hasVertexColors?(t.attributes.add(f.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}class rn{constructor(e=C()){this.intensity=e}}class sn{constructor(e=C(),r=pe(.57735,.57735,.57735)){this.intensity=e,this.direction=r}}class lr{constructor(e=C(),r=pe(.57735,.57735,.57735),i=!0,s=1,a=1){this.intensity=e,this.direction=r,this.castShadows=i,this.specularStrength=s,this.environmentStrength=a}}class yi{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function an(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e[i];return r}function dr(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e;return r}function je(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]+e[i];return r}function Pi(t){return(t+1)*(t+1)}function nn(t){return Nt(Math.floor(Math.sqrt(t)-1),0,2)}function Mi(t,e,r){const i=t[0],s=t[1],a=t[2],n=r||[];return n.length=Pi(e),e>=0&&(n[0]=.28209479177),e>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*a,n[3]=.4886025119*s),e>=2&&(n[4]=1.09254843059*i*s,n[5]=1.09254843059*s*a,n[6]=.31539156525*(3*a*a-1),n[7]=1.09254843059*i*a,n[8]=.54627421529*(i*i-s*s)),n}function on(t,e){const r=Pi(t),i=e||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let s=0;s<r;s++)i.r[s]=i.g[s]=i.b[s]=0;return i}function cn(t,e){const r=nn(e.r.length);for(const i of t)ds(ur,i.direction),Mi(ur,r,be),an(be,Pt),dr(be,i.intensity[0],We),je(e.r,We),dr(be,i.intensity[1],We),je(e.g,We),dr(be,i.intensity[2],We),je(e.b,We);return e}function ln(t,e){Mi(ur,0,be);for(const r of t)e.r[0]+=be[0]*Pt[0]*r.intensity[0]*4*Math.PI,e.g[0]+=be[0]*Pt[0]*r.intensity[1]*4*Math.PI,e.b[0]+=be[0]*Pt[0]*r.intensity[2]*4*Math.PI;return e}function dn(t,e,r,i){on(e,i),U(r.intensity,0,0,0);let s=!1;const a=un,n=hn,o=mn;a.length=0,n.length=0,o.length=0;for(const l of t)l instanceof lr&&!s?(et(r.direction,l.direction),et(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,s=!0):l instanceof lr||l instanceof sn?a.push(l):l instanceof rn?n.push(l):l instanceof yi&&o.push(l);cn(a,i),ln(n,i);for(const l of o)je(i.r,l.r),je(i.g,l.g),je(i.b,l.b)}const un=[],hn=[],mn=[],be=[0],We=[0],ur=C(),Pt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class $i{constructor(){this.color=C(),this.intensity=1}}class fn{constructor(){this.direction=C(),this.ambient=new $i,this.diffuse=new $i}}const pn=.4;class Go{constructor(){this._shOrder=2,this._legacy=new fn,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new yi,this._mainLight=new lr(C(),pe(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){dn(e,this._shOrder,this._mainLight,this._sphericalHarmonics),et(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,le(this._legacy.diffuse.color,this._mainLight.intensity,r),et(Mt,this._legacy.diffuse.color),le(Mt,Mt,pn*this.globalFactor),K(this._legacy.ambient.color,this._legacy.ambient.color,Mt)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=zt(e.mainLight.direction),this._mainLight.intensity=zt(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,i){if(Dt(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,i),this._mainLight.environmentStrength=Se(e.mainLight.environmentStrength,r.mainLight.environmentStrength,i),this._mainLight.specularStrength=Se(e.mainLight.specularStrength,r.mainLight.specularStrength,i),et(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=Se(e.globalFactor,r.globalFactor,i),this.noonFactor=Se(e.noonFactor,r.noonFactor,i),e.sh.r.length===r.sh.r.length)for(let s=0;s<r.sh.r.length;s++)this._sphericalHarmonics.r[s]=Se(e.sh.r[s],r.sh.r[s],i),this._sphericalHarmonics.g[s]=Se(e.sh.g[s],r.sh.g[s],i),this._sphericalHarmonics.b[s]=Se(e.sh.b[s],r.sh.b[s],i);else for(let s=0;s<r.sh.r.length;s++)this._sphericalHarmonics.r[s]=r.sh.r[s],this._sphericalHarmonics.g[s]=r.sh.g[s],this._sphericalHarmonics.b[s]=r.sh.b[s]}}const Mt=C();class jo{constructor(){this._transform=Ie(),this._transformInverse=new $t({value:this._transform},Ar,Ie),this._transformInverseTranspose=new $t(this._transformInverse,Ft,Ie),this._transformTranspose=new $t({value:this._transform},Ft,Ie),this._transformInverseRotation=new $t({value:this._transform},ms,He)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Et(this._transform,e)}multiplyTransform(e){Sr(this._transform,this._transform,e)}set(e){Et(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,r){this.setTransformMatrix(e),this.multiplyTransform(r),this._invalidateLazyTransforms()}}class $t{constructor(e,r,i){this._original=e,this._update=r,this._dirty=!0,this._transform=i()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class gn{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=C(),this._mbs=Mr(),this._obb={center:C(),halfSize:Kt(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const s=e,a=r,n=i+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(s*s+a*a+n*n);return this._tmpVertex[0]=e+s*o,this._tmpVertex[1]=r+a*o,this._tmpVertex[2]=i+n*o,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],s=e[2]+this.componentLocalOriginLength,a=e[3],n=e[4],o=e[5]+this.componentLocalOriginLength,l=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),u=s*o<0?0:Math.min(Math.abs(s),Math.abs(o)),h=Math.sqrt(l*l+c*c+u*u);if(h<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=s<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=o>0?this._totalOffset:0,e;const m=Math.max(Math.abs(r),Math.abs(a)),p=Math.max(Math.abs(i),Math.abs(n)),_=Math.max(Math.abs(s),Math.abs(o)),S=Math.sqrt(m*m+p*p+_*_),w=this._totalOffset/S,v=this._totalOffset/h;return e[0]+=r*(r>0?w:v),e[1]+=i*(i>0?w:v),e[2]+=s*(s>0?w:v),e[3]+=a*(a<0?w:v),e[4]+=n*(n<0?w:v),e[5]+=o*(o<0?w:v),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,$r(this._obb.halfSize,e.halfSize,e.quaternion),K(this._obb.halfSize,this._obb.halfSize,e.center);const s=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*s,this._obb.halfSize[1]+=this._obb.halfSize[1]*s,this._obb.halfSize[2]+=this._obb.halfSize[2]*s,Vt(this._obb.halfSize,this._obb.halfSize,e.center),us(Ii,e.quaternion),$r(this._obb.halfSize,this._obb.halfSize,Ii),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class vn{constructor(e=0){this.offset=e,this.sphere=Mr(),this.tmpVertex=C()}applyToVertex(e,r,i){const s=this.objectTransform.transform;let a=s[0]*e+s[4]*r+s[8]*i+s[12],n=s[1]*e+s[5]*r+s[9]*i+s[13],o=s[2]*e+s[6]*r+s[10]*i+s[14];const l=this.offset/Math.sqrt(a*a+n*n+o*o);a+=a*l,n+=n*l,o+=o*l;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*n+c[8]*o+c[12],this.tmpVertex[1]=c[1]*a+c[5]*n+c[9]*o+c[13],this.tmpVertex[2]=c[2]*a+c[6]*n+c[10]*o+c[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const s=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*s,r[1]+=r[1]*s,r[2]+=r[2]*s}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const Ri=new vn;function Wo(t){return g(t)?(Ri.offset=t,Ri):null}new gn;const Ii=hs();function _n(t){const e=d`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function xn(t,e){e.normalType===we.Attribute&&(t.attributes.add(f.NORMAL,"vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`)),e.normalType===we.CompressedAttribute&&(t.include(_n),t.attributes.add(f.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(d`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===we.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var we;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(we||(we={}));function ko(t,e){e.normalType===we.Attribute||e.normalType===we.CompressedAttribute?(t.include(xn,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new ni("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new nr("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(d`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===we.Ground?(t.include(oi,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(d`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?d`normalize(vPositionWorldCameraRelative);`:d`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(d`void forwardNormal() {}`)}class qo extends na{constructor(){super(...arguments),this.transformNormalViewFromGlobal=He()}}class Xo extends oa{constructor(){super(...arguments),this.transformNormalGlobalFromModel=He(),this.toMapSpace=Ye()}}var ee;function bn(t,e){switch(e.textureCoordinateType){case ee.Default:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ee.Compressed:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(d`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ee.Atlas:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(f.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:jt(e.textureCoordinateType);case ee.None:return void t.vertex.code.add(d`void forwardTextureCoordinates() {}`);case ee.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(ee||(ee={}));function Tn(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Sn(t,e){switch(t.include(bn,e),t.fragment.code.add(d`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case ee.Default:case ee.Compressed:return void t.fragment.code.add(d`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case ee.Atlas:return t.include(Tn),void t.fragment.code.add(d`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:jt(e.textureCoordinateType);case ee.None:case ee.COUNT:return}}class hr extends V{constructor(e,r){super(e,"vec2",I.Draw,(i,s,a,n)=>i.setUniform2fv(e,r(s,a,n)))}}class Ci extends V{constructor(e,r){super(e,"sampler2D",I.Draw,(i,s,a)=>i.bindTexture(e,r(s,a)))}}function mr(t,e,r=W.None){const i=[new Ci(t,e)];if(r&W.Size){const s=t+Zt;i.push(new hr(s,(a,n)=>{const o=e(a,n);return g(o)?ce(Li,o.descriptor.width,o.descriptor.height):mt}))}if(r&W.InvSize){const s=t+xt;i.push(new hr(s,(a,n)=>{const o=e(a,n);return g(o)?ce(Li,1/o.descriptor.width,1/o.descriptor.height):mt}))}return i}const Li=Qe();Ps(0,.6,.2);var te;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(te||(te={}));function Ko(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===te.Normal&&i&&t.include(Sn,e),e.pbrMode!==te.Schematic)if(e.pbrMode!==te.Disabled){if(e.pbrMode===te.Normal){r.code.add(d`vec3 mrr;
vec3 emission;
float occlusion;`);const s=e.supportsTextureAtlas?e.hasWebGL2Context?W.None:W.Size:W.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===I.Pass?nt("texMetallicRoughness",n=>n.textureMetallicRoughness,s):mr("texMetallicRoughness",n=>n.textureMetallicRoughness,s)),r.code.add(d`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===I.Pass?nt("texEmission",n=>n.textureEmissive,s):mr("texEmission",n=>n.textureEmissive,s)),r.code.add(d`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===I.Pass?nt("texOcclusion",n=>n.textureOcclusion,s):mr("texOcclusion",n=>n.textureOcclusion,s)),r.code.add(d`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(d`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===I.Pass?[new j("emissionFactor",n=>n.emissiveFactor),new j("mrrFactors",n=>n.mrrFactors)]:[new xe("emissionFactor",n=>n.emissiveFactor),new xe("mrrFactors",n=>n.mrrFactors)]),r.code.add(d`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?d`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?d`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?d`
                vtc.size = ${bt(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:d`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?d`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?d`
                vtc.size = ${bt(e,"texEmission")};
                applyEmission(vtc);`:d`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?d`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?d`
                vtc.size = ${bt(e,"texOcclusion")};
                applyOcclusion(vtc);`:d`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(d`float getBakedOcclusion() { return 1.0; }`);else r.code.add(d`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Yo(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new j("lightingAmbientSH0",(s,a)=>U(Ei,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new G("lightingAmbientSH_R",(s,a)=>k(Te,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new G("lightingAmbientSH_G",(s,a)=>k(Te,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new G("lightingAmbientSH_B",(s,a)=>k(Te,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add([new j("lightingAmbientSH0",(s,a)=>U(Ei,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new G("lightingAmbientSH_R1",(s,a)=>k(Te,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new G("lightingAmbientSH_G1",(s,a)=>k(Te,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new G("lightingAmbientSH_B1",(s,a)=>k(Te,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new G("lightingAmbientSH_R2",(s,a)=>k(Te,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new G("lightingAmbientSH_G2",(s,a)=>k(Te,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new G("lightingAmbientSH_B2",(s,a)=>k(Te,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==te.Normal&&e.pbrMode!==te.Schematic||r.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ei=C(),Te=Ye();function An(t){t.uniforms.add(new j("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function wn(t){t.uniforms.add(new j("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function On(t,e){e.useLegacyTerrainShading?t.uniforms.add(new at("lightingFixedFactor",(r,i)=>i.lighting.noonFactor*(1-i.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function Qo(t,e){const r=t.fragment;An(r),wn(r),On(r,e),r.code.add(d`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}class yn extends V{constructor(e,r){super(e,"int",I.Pass,(i,s,a)=>i.setUniform1i(e,r(s,a)))}}class Pn extends V{constructor(e,r,i){super(e,"mat4",I.Draw,(s,a,n)=>s.setUniformMatrix4fv(e,r(a,n)),i)}}class Mn extends V{constructor(e,r,i){super(e,"mat4",I.Pass,(s,a,n)=>s.setUniformMatrix4fv(e,r(a,n)),i)}}function Zo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Mn("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Fi(t,e))}function Jo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Pn("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Fi(t,e))}function Fi(t,e){const r=t.fragment;r.include(Yt),r.uniforms.add([...nt("shadowMapTex",(i,s)=>s.shadowMap.depthTexture,e.hasWebGL2Context?W.None:W.Size),new yn("numCascades",(i,s)=>s.shadowMap.numCascades),new G("cascadeDistances",(i,s)=>s.shadowMap.cascadeDistances)]),r.code.add(d`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${bt(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function $n(t){const e=t.fragment.code;e.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(d`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ec(t,e){const r=t.fragment.code;t.include(Ha),e.pbrMode===te.Water||e.pbrMode===te.WaterOnIntegratedMesh?(r.add(d`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(d`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(d`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(d`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(d`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==te.Normal&&e.pbrMode!==te.Schematic||(t.include($n),r.add(d`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(d`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(d`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class tc extends V{constructor(e,r){super(e,"bool",I.Pass,(i,s,a)=>i.setUniform1b(e,r(s,a)))}}const fr=4;function Rn(){const t=new Jt,e=t.fragment;t.include(tr);const r=(fr+1)/2,i=1/(2*r*r);return e.include(Qt),e.uniforms.add([new Fe("depthMap",s=>s.depthTexture),new Ci("tex",s=>s.colorTexture),new hr("blurSize",s=>s.blurSize),new at("projScale",(s,a)=>{const n=fs(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,s.projScale-(n-5e4)):s.projScale}),new ae("nearFar",(s,a)=>a.camera.nearFar)]),e.code.add(d`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${d.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(d`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${d.int(fr)}; r <= ${d.int(fr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const In=Object.freeze(Object.defineProperty({__proto__:null,build:Rn},Symbol.toStringTag,{value:"Module"}));class Rt extends Dr{initializeProgram(e){return new Br(e.rctx,Rt.shader.get().build(),Tt)}initializePipeline(){return Rr({colorWrite:Ir})}}Rt.shader=new zr(In,()=>import("./SSAOBlur.glsl.970d1658.js"));const Ni=16,Cn=.5;function Ln(){const t=new Jt,e=t.fragment;return t.include(tr),e.include(Qt),t.include($s),e.uniforms.add(new at("radius",(r,i)=>zi(i))),e.code.add(d`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(d`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new ae("nearFar",(r,i)=>i.camera.nearFar),new Fe("normalMap",r=>r.normalTexture),new Fe("depthMap",r=>r.depthTexture),new ae("zScale",(r,i)=>Hr(i)),new at("projScale",r=>r.projScale),new Fe("rnm",r=>r.noiseTexture),new ae("rnmScale",(r,i)=>ce(Di,i.camera.fullWidth/ft(r.noiseTexture).descriptor.width,i.camera.fullHeight/ft(r.noiseTexture).descriptor.height)),new at("intensity",(r,i)=>4*Cn/zi(i)**6),new ae("screenSize",(r,i)=>ce(Di,i.camera.fullWidth,i.camera.fullHeight))]),e.code.add(d`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.int(Ni)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.int(Ni)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function zi(t){return Math.max(10,20*t.camera.computeRenderPixelSizeAtDist(Math.abs(4*t.camera.relativeElevation)))}const Di=Qe(),En=Object.freeze(Object.defineProperty({__proto__:null,build:Ln},Symbol.toStringTag,{value:"Module"}));class It extends Dr{initializeProgram(e){return new Br(e.rctx,It.shader.get().build(),Tt)}initializePipeline(){return Rr({colorWrite:Ir})}}It.shader=new zr(En,()=>import("./SSAO.glsl.8aa7ac06.js"));class Fn extends Ee{constructor(){super(...arguments),this.projScale=1}}class Nn extends Fn{}class zn extends Ee{}class Dn extends zn{constructor(){super(...arguments),this.blurSize=Qe()}}const Ct=2;class rc{constructor(e,r,i){this._techniqueRepository=e,this._rctx=r,this._requestRender=i,this._enabled=!1,this._quadVAO=null,this._passParameters=new Nn,this._drawParameters=new Dn}dispose(){this._quadVAO=Re(this._quadVAO)}disposeOffscreenBuffers(){Wt(this._ssaoFBO,e=>e.resize(0,0)),Wt(this._blur0FBO,e=>e.resize(0,0)),Wt(this._blur1FBO,e=>e.resize(0,0))}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enabled}get ready(){return this.enabled&&g(this._passParameters.noiseTexture)&&g(this._ssaoFBO)&&g(this._blur0FBO)&&g(this._blur1FBO)}get loading(){return this.enabled&&!this.ready}get colorTexture(){return g(this._blur1FBO)?this._blur1FBO.colorTexture:null}get width(){return g(this._ssaoFBO)?this._ssaoFBO.width:-1}get height(){return g(this._ssaoFBO)?this._ssaoFBO.height:-1}computeSSAO(e,r,i){if(!this.enabled||R(r)||R(i)||R(this._passParameters.noiseTexture)||R(this._ssaoFBO)||R(this._blur0FBO)||R(this._blur1FBO))return;const s=this._rctx,a=e.camera;this._passParameters.normalTexture=i,this._passParameters.depthTexture=r,this._passParameters.projScale=1/a.computeRenderPixelSizeAtDist(1);const n=a.fullViewport,o=n[2],l=n[3],c=o/Ct,u=l/Ct;this._ssaoFBO.resize(o,l),this._blur0FBO.resize(c,u),this._blur1FBO.resize(c,u),R(this._quadVAO)&&(this._quadVAO=qr(this._rctx)),s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,o,l),s.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),s.bindVAO(this._quadVAO),s.drawArrays(tt.TRIANGLE_STRIP,0,_t(this._quadVAO,"geometry"));const h=s.bindTechnique(this._blurTechnique,this._passParameters,e);s.setViewport(0,0,c,u),s.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,ce(this._drawParameters.blurSize,0,Ct/l),h.bindDraw(this._drawParameters,e,this._passParameters),s.setViewport(0,0,c,u),s.drawArrays(tt.TRIANGLE_STRIP,0,_t(this._quadVAO,"geometry")),s.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,ce(this._drawParameters.blurSize,Ct/o,0),h.bindDraw(this._drawParameters,e,this._passParameters),s.drawArrays(tt.TRIANGLE_STRIP,0,_t(this._quadVAO,"geometry")),s.setViewport(n[0],n[1],n[2],n[3])}_selectPrograms(){R(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(It)),R(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(Rt))}_enable(){this.enabled||(this._enabled=!0,this._loadResources(()=>{this._enabled&&this._initialize()}))}_loadResources(e){this._data?e():import("./SSAOHelperData.9718cffe.js").then(r=>{this._data=r,e()})}_initialize(){const e={target:rt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:it.UNSIGNED_BYTE,samplingMode:ge.LINEAR,wrapMode:st.CLAMP_TO_EDGE,width:0,height:0},r={colorTarget:Er.TEXTURE,depthStencilTarget:Fr.NONE};Lr(this._data.noiseTexture).then(i=>{this._enabled&&(this._ssaoFBO=new vt(this._rctx,r,e),this._blur0FBO=new vt(this._rctx,r,e),this._blur1FBO=new vt(this._rctx,r,e),this._passParameters.noiseTexture=new ue(this._rctx,{target:rt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:it.UNSIGNED_BYTE,hasMipmap:!0,width:i.width,height:i.height},i),this._requestRender())}),this._selectPrograms()}_disable(){this._enabled=!1,this._passParameters.noiseTexture=Re(this._passParameters.noiseTexture),this._blur1FBO=Re(this._blur1FBO),this._blur0FBO=Re(this._blur0FBO),this._ssaoFBO=Re(this._ssaoFBO)}get gpuMemoryUsage(){return(g(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(g(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(g(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}export{ar as $,Ho as A,Ks as B,go as C,yo as D,Tt as E,xo as F,bo as G,So as H,Oo as I,Be as J,ho as K,J as L,no as M,ia as N,ra as O,Do as P,Ya as Q,wo as R,si as S,$o as T,Co as U,Io as V,zo as W,rr as X,ro as Y,io as Z,fa as _,Qt as a,ei as a$,ma as a0,Yt as a1,W as a2,nt as a3,bt as a4,Ha as a5,_o as a6,vo as a7,ci as a8,li as a9,Go as aA,Ao as aB,jo as aC,Wo as aD,Xo as aE,V as aF,I as aG,tc as aH,An as aI,wn as aJ,ec as aK,po as aL,Qo as aM,Yo as aN,te as aO,Jo as aP,fo as aQ,so as aR,To as aS,gi as aT,rc as aU,Jn as aV,rn as aW,Js as aX,co as aY,lo as aZ,ao as a_,Mo as aa,Eo as ab,Ro as ac,Lo as ad,Po as ae,Gs as af,mo as ag,Ua as ah,ka as ai,Ga as aj,Is as ak,Vo as al,Fo as am,Bo as an,Qr as ao,to as ap,ea as aq,eo as ar,oo as as,qa as at,Qa as au,wi as av,Ka as aw,Ja as ax,Uo as ay,ca as az,ae as b,sa as b0,qs as b1,aa as b2,xe as b3,yn as b4,bn as b5,xn as b6,ko as b7,we as b8,ee as b9,Sn as ba,mr as bb,Ct as bc,pn as bd,nr as be,No as bf,Zo as bg,Ko as bh,qo as bi,va as bj,Rn as bk,Ln as bl,d as c,Jt as d,j as e,Fe as f,ot as g,Dr as h,Br as i,ze as j,Zs as k,tr as l,G as m,$s as n,at as o,Ee as p,Xr as q,Ms as r,sr as s,zr as t,qr as u,lt as v,ai as w,uo as x,ga as y,Z as z};
