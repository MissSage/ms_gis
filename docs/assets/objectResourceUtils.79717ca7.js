var Ft=Object.defineProperty,Gt=Object.defineProperties;var Ut=Object.getOwnPropertyDescriptors;var Ge=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable;var Ue=(e,t,o)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))kt.call(t,o)&&Ue(e,o,t[o]);if(Ge)for(var o of Ge(t))jt.call(t,o)&&Ue(e,o,t[o]);return e},pe=(e,t)=>Gt(e,Ut(t));import{a as Wt}from"./devEnvironmentUtils.d8d0484c.js";import{h7 as ke,aD as l,ai as he,ag as P,O as p,i2 as je,ah as X,aP as Q,gz as Ht,hl as We,M as qt,go as Oe,X as Yt,g2 as Jt,gj as He,f_ as ve,aI as qe,aJ as Ye,g1 as Xt,h9 as Kt,U as Se,lE as Zt,lF as Qt,lG as Ae,bB as Je,K as eo,lH as Xe,kQ as fe,lI as to,kM as Ke,a1 as oo,$ as ao,bp as Ze,Y as ro,iL as Qe,gR as et,kF as io,kI as tt,ho as so,gf as no,gi as ot,lJ as at,f2 as lo}from"./vendor.1bde3be2.js";import{i as ge,c as rt,u as co,x as Le,L as uo,O as it,E as mo}from"./BufferView.a124dc0f.js";import{t as po,r as ho,f as st,e as vo}from"./vec33.eeba1728.js";import{m as fo,n as go,o as K,r as j,a as xo,b as To,c as nt,e as bo,t as yo,i as Co,f as Mo,d as wo}from"./DefaultMaterial_COLOR_GAMMA.6dc22eb8.js";import{t as $o}from"./requestImageUtils.8481d550.js";import{q as Oo,r as So,C as y,o as Z,n as U,v as ee,W as Ao,c as Lo,A as _o,h as No,l as Po,b as Ro,_ as Eo,e as Do,S as Vo}from"./OrderIndependentTransparency.9f3f7312.js";import{c as a,j as c,k as Io,b2 as Bo,b3 as lt,z as h,G as zo,b4 as Fo,aZ as Go,I as _e,o as R,g as ct,F as te,A as oe,b5 as ae,al as re,f as W,C as H,an as Uo,b6 as Ne,b7 as dt,b8 as E,a6 as ko,a7 as jo,az as Wo,b9 as ie,ba as Ho,a2 as se,aG as qo,a3 as ut,bb as Yo,a4 as mt,bc as Jo,bd as Xo,aO as b,aK as Pe,aN as Ko,a5 as Zo,aI as pt,aJ as Re,aH as Qo,aM as ea,be as ne,D as ta,d as ht,b0 as vt,bf as ft,y as xe,aL as gt,ay as xt,m as Tt,H as Te,bg as bt,aP as yt,e as be,bh as Ct,aE as oa,t as Mt,bi as aa,R as ra,s as ia,h as sa,aQ as na,i as la,E as ca,T as da,U as ua,V as ma,J as pa,K as ha,as as va,M as fa,aD as ga,q as ye,W as xa,P as Ta,L as wt,w as $t}from"./SSAOHelper.fdd527db.js";import{T as Ot}from"./InterleavedLayout.2f6f3736.js";import{O as v}from"./VertexAttribute.42396f25.js";import{r as B}from"./symbolColorUtils.40752bfb.js";import{I as St,D as At,E as Ee}from"./enums.2d9e6f64.js";function ba(e,t){const o=e.fragment;switch(o.code.add(a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case S.None:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ke(t.doubleSidedMode);case S.COUNT:}}var S;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(S||(S={}));function Lt(e){e.vertex.code.add(a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}class ya extends Io{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function _t(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(v.MODELORIGINHI,"vec3"),e.attributes.add(v.MODELORIGINLO,"vec3"),e.attributes.add(v.MODEL,"mat3"),e.attributes.add(v.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(Bo,t),o.uniforms.add(new lt("viewOriginHi",(r,s)=>Oo(he(Ce,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),Ce))),o.uniforms.add(new lt("viewOriginLo",(r,s)=>So(he(Ce,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),Ce)))),o.code.add(a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===h.Normal&&(zo(o),o.code.add(a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}l([c()],ya.prototype,"instancedDoublePrecision",void 0);const Ce=P();function Ca(e){e.vertex.code.add(a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.int(B.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.int(B.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.int(B.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.int(B.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Nt(e,t){t.hasSymbolColors?(e.include(Ca),e.attributes.add(v.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Fo("colorMixMode",o=>Go[o.colorMixMode])),e.vertex.code.add(a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Ma(e){e.fragment.code.add(a`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.float(_e)}) { discard; } }
  `)}function q(e,t){wa(e,t,new R("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function wa(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==y.Mask&&t.alphaDiscardMode!==y.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case y.Blend:return e.include(Ma);case y.Opaque:r.code.add(a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:r.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:e.fragment.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Pt(e,t){const{vertex:o,fragment:r}=e,s=t.hasModelTransformation;s&&o.uniforms.add(new ct("model",n=>p(n.modelTransformation)?n.modelTransformation:je));const i=t.hasColorTexture&&t.alphaDiscardMode!==y.Opaque;switch(t.output){case h.Depth:case h.Shadow:case h.ShadowHighlight:case h.ShadowExludeHighlight:case h.ObjectAndLayerIdColor:te(o,t),e.include(oe,t),e.include(ae,t),e.include(re,t),e.include(ko,t),e.include(H,t),e.include(jo,t),Wo(e),e.varyings.add("depth","float"),i&&r.uniforms.add(new W("tex",n=>n.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${s?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(q,t),r.code.add(a`
          void main(void) {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===h.ObjectAndLayerIdColor?a`outputObjectAndLayerIdColor();`:a`outputDepth(depth);`}
          }
        `);break;case h.Normal:te(o,t),e.include(oe,t),e.include(Ne,t),e.include(dt,t),e.include(ae,t),e.include(re,t),i&&r.uniforms.add(new W("tex",n=>n.texture)),e.varyings.add("vPositionView","vec3"),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===E.Attribute?a`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${s?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(H,t),e.include(q,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===E.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(vPositionView);`:a`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case h.Highlight:te(o,t),e.include(oe,t),e.include(ae,t),e.include(re,t),i&&r.uniforms.add(new W("tex",n=>n.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${s?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(H,t),e.include(q,t),e.include(Uo,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function $a(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(v.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===S.WindingOrder?o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==ie.None){e.include(Ho,t);const r=t.supportsTextureAtlas?t.hasWebGL2Context?se.None:se.Size:se.None;o.uniforms.add(t.pbrTextureBindType===qo.Pass?ut("normalTexture",s=>s.textureNormal,r):Yo("normalTexture",s=>s.textureNormal,r)),o.code.add(a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?a`vtc.size = ${mt(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function De(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(ut("ssaoTex",(r,s)=>s.ssaoHelper.colorTexture,t.hasWebGL2Context?se.None:se.InvSize)),o.constants.add("blurSizePixelsInverse","float",1/Jo),o.code.add(a`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${mt(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):o.code.add(a`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ve(e){e.constants.add("ambientBoostFactor","float",Xo)}function Ie(e){e.uniforms.add(new R("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function Rt(e,t){const o=e.fragment;switch(e.include(De,t),t.pbrMode!==b.Disabled&&e.include(Pe,t),e.include(Ko,t),e.include(Zo),o.code.add(a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===b.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ve(o),Ie(o),pt(o),o.code.add(a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?a`normalize(vPosWorld)`:a`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Re(o),o.code.add(a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case b.Disabled:case b.WaterOnIntegratedMesh:case b.Water:e.include(ea,t),o.code.add(a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case b.Normal:case b.Schematic:o.code.add(a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Qo("hasFillLights",(r,s)=>s.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new R("lightingSpecularStrength",(r,s)=>s.lighting.mainLight.specularStrength),new R("lightingEnvironmentStrength",(r,s)=>s.lighting.mainLight.environmentStrength)]),o.code.add(a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===b.Schematic?a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:ke(t.pbrMode);case b.COUNT:}}function Oa(e){e.vertex.uniforms.add(new ne("colorTextureTransformMatrix",t=>p(t.colorTextureTransformMatrix)?t.colorTextureTransformMatrix:X())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Sa(e){e.vertex.uniforms.add(new ne("normalTextureTransformMatrix",t=>p(t.normalTextureTransformMatrix)?t.normalTextureTransformMatrix:X())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Aa(e){e.vertex.uniforms.add(new ne("emissiveTextureTransformMatrix",t=>p(t.emissiveTextureTransformMatrix)?t.emissiveTextureTransformMatrix:X())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function La(e){e.vertex.uniforms.add(new ne("occlusionTextureTransformMatrix",t=>p(t.occlusionTextureTransformMatrix)?t.occlusionTextureTransformMatrix:X())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function _a(e){e.vertex.uniforms.add(new ne("metallicRoughnessTextureTransformMatrix",t=>p(t.metallicRoughnessTextureTransformMatrix)?t.metallicRoughnessTextureTransformMatrix:X())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Me(e){e.include(ta),e.code.add(a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.int(B.Multiply)}) {
        return allMixed;
      }
      if (mode == ${a.int(B.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(B.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.int(B.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(B.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Na(e){const t=new ht,{vertex:o,fragment:r,varyings:s}=t;return te(o,e),t.include(vt),s.add("vpos","vec3"),t.include(re,e),t.include(_t,e),t.include(ft,e),e.hasColorTextureTransform&&t.include(Oa),e.output!==h.Color&&e.output!==h.Alpha||(e.hasNormalTextureTransform&&t.include(Sa),e.hasEmissionTextureTransform&&t.include(Aa),e.hasOcclusionTextureTransform&&t.include(La),e.hasMetallicRoughnessTextureTransform&&t.include(_a),xe(o,e),t.include(Ne,e),t.include(oe,e),e.normalType===E.Attribute&&e.offsetBackfaces&&t.include(Lt),t.include($a,e),t.include(dt,e),e.instancedColor&&t.attributes.add(v.INSTANCECOLOR,"vec4"),s.add("localvpos","vec3"),t.include(ae,e),t.include(gt,e),t.include(Nt,e),t.include(xt,e),o.uniforms.add(new Tt("externalColor",i=>i.externalColor)),s.add("vcolorExt","vec4"),e.hasMultipassTerrain&&s.add("depth","float"),e.hasModelTransformation&&o.uniforms.add(new ct("model",i=>p(i.modelTransformation)?i.modelTransformation:je)),o.code.add(a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${a.float(_e)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===E.Attribute?a`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===E.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?a`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?a`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?a`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?a`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?a`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===h.Alpha&&(t.include(H,e),t.include(q,e),t.include(Te,e),r.uniforms.add([new R("opacity",i=>i.opacity),new R("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new W("tex",i=>i.texture)),r.include(Me),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===h.Color&&(t.include(H,e),t.include(Rt,e),t.include(De,e),t.include(q,e),t.include(e.instancedDoublePrecision?bt:yt,e),t.include(Te,e),xe(r,e),r.uniforms.add([o.uniforms.get("localOrigin"),new be("ambient",i=>i.ambient),new be("diffuse",i=>i.diffuse),new R("opacity",i=>i.opacity),new R("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new W("tex",i=>i.texture)),t.include(Ct,e),t.include(Pe,e),r.include(Me),t.include(ba,e),Ve(r),Ie(r),Re(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===E.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(localvpos);`:a`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?a`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:a`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?a`normalize(posWorld);`:a`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?a`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Z.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(Pt,e),t}const Pa=Object.freeze(Object.defineProperty({__proto__:null,build:Na},Symbol.toStringTag,{value:"Module"}));class Ra extends aa{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Q(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=U.Back,this.emissiveFactor=Q(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Ht(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=P(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=We(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=ee.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=ra,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ia.Occlude}}class yr extends oa{constructor(){super(...arguments),this.origin=P(),this.slicePlaneLocalOrigin=this.origin}}class le extends sa{initializeConfiguration(t,o){o.hasWebGL2Context=t.rctx.type===qt.WEBGL2,o.spherical=t.viewingMode===Oe.Global,o.doublePrecisionRequiresObfuscation=na(t.rctx),o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?ie.Default:ie.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,le.shader)}_initializeProgram(t,o){return new la(t.rctx,o.get().build(this.configuration),ca)}_convertDepthTestFunction(t){return t===ee.Lequal?St.LEQUAL:St.LESS}_makePipeline(t,o){const r=this.configuration,s=t===Z.NONE,i=t===Z.FrontFace;return Ao({blending:r.output!==h.Color&&r.output!==h.Alpha||!r.transparent?null:s?Lo:_o(t),culling:Ea(r)&&No(r.cullFace),depthTest:{func:Po(t,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:s||i?r.writeDepth&&Ro:null,colorWrite:Eo,stencilWrite:r.hasOccludees?da:null,stencilTest:r.hasOccludees?o?ua:ma:null,polygonOffset:s||i?null:Do(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(t,o){return o?this._occludeePipelineState:super.getPipelineState(t,o)}}function Ea(e){return e.cullFace!==U.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}le.shader=new Mt(Pa,()=>import("./DefaultMaterial.glsl.b24907c0.js"));class d extends pa{constructor(){super(...arguments),this.output=h.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=S.None,this.pbrMode=b.Disabled,this.cullFace=U.None,this.transparencyPassType=Z.NONE,this.normalType=E.Attribute,this.textureCoordinateType=ie.None,this.customDepthTest=ee.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}l([c({count:h.COUNT})],d.prototype,"output",void 0),l([c({count:y.COUNT})],d.prototype,"alphaDiscardMode",void 0),l([c({count:S.COUNT})],d.prototype,"doubleSidedMode",void 0),l([c({count:b.COUNT})],d.prototype,"pbrMode",void 0),l([c({count:U.COUNT})],d.prototype,"cullFace",void 0),l([c({count:Z.COUNT})],d.prototype,"transparencyPassType",void 0),l([c({count:E.COUNT})],d.prototype,"normalType",void 0),l([c({count:ie.COUNT})],d.prototype,"textureCoordinateType",void 0),l([c({count:ee.COUNT})],d.prototype,"customDepthTest",void 0),l([c()],d.prototype,"spherical",void 0),l([c()],d.prototype,"hasVertexColors",void 0),l([c()],d.prototype,"hasSymbolColors",void 0),l([c()],d.prototype,"hasVerticalOffset",void 0),l([c()],d.prototype,"hasSlicePlane",void 0),l([c()],d.prototype,"hasSliceHighlight",void 0),l([c()],d.prototype,"hasColorTexture",void 0),l([c()],d.prototype,"hasMetallicRoughnessTexture",void 0),l([c()],d.prototype,"hasEmissionTexture",void 0),l([c()],d.prototype,"hasOcclusionTexture",void 0),l([c()],d.prototype,"hasNormalTexture",void 0),l([c()],d.prototype,"hasScreenSizePerspective",void 0),l([c()],d.prototype,"hasVertexTangents",void 0),l([c()],d.prototype,"hasOccludees",void 0),l([c()],d.prototype,"hasMultipassTerrain",void 0),l([c()],d.prototype,"hasModelTransformation",void 0),l([c()],d.prototype,"offsetBackfaces",void 0),l([c()],d.prototype,"vvSize",void 0),l([c()],d.prototype,"vvColor",void 0),l([c()],d.prototype,"receiveShadows",void 0),l([c()],d.prototype,"receiveAmbientOcclusion",void 0),l([c()],d.prototype,"textureAlphaPremultiplied",void 0),l([c()],d.prototype,"instanced",void 0),l([c()],d.prototype,"instancedColor",void 0),l([c()],d.prototype,"objectAndLayerIdColorInstanced",void 0),l([c()],d.prototype,"instancedDoublePrecision",void 0),l([c()],d.prototype,"doublePrecisionRequiresObfuscation",void 0),l([c()],d.prototype,"writeDepth",void 0),l([c()],d.prototype,"transparent",void 0),l([c()],d.prototype,"enableOffset",void 0),l([c()],d.prototype,"cullAboveGround",void 0),l([c()],d.prototype,"snowCover",void 0),l([c()],d.prototype,"hasColorTextureTransform",void 0),l([c()],d.prototype,"hasEmissionTextureTransform",void 0),l([c()],d.prototype,"hasNormalTextureTransform",void 0),l([c()],d.prototype,"hasOcclusionTextureTransform",void 0),l([c()],d.prototype,"hasMetallicRoughnessTextureTransform",void 0),l([c({constValue:!0})],d.prototype,"hasVvInstancing",void 0),l([c({constValue:!1})],d.prototype,"useCustomDTRExponentForWater",void 0),l([c({constValue:!1})],d.prototype,"supportsTextureAtlas",void 0),l([c({constValue:!0})],d.prototype,"useFillLights",void 0);function Da(e){const t=new ht,{vertex:o,fragment:r,varyings:s}=t;return te(o,e),t.include(vt),s.add("vpos","vec3"),t.include(re,e),t.include(_t,e),t.include(ft,e),e.output!==h.Color&&e.output!==h.Alpha||(xe(t.vertex,e),t.include(Ne,e),t.include(oe,e),e.offsetBackfaces&&t.include(Lt),e.instancedColor&&t.attributes.add(v.INSTANCECOLOR,"vec4"),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3"),e.hasMultipassTerrain&&s.add("depth","float"),t.include(ae,e),t.include(gt,e),t.include(Nt,e),t.include(xt,e),o.uniforms.add(new Tt("externalColor",i=>i.externalColor)),s.add("vcolorExt","vec4"),o.code.add(a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${a.float(_e)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===h.Alpha&&(t.include(H,e),t.include(q,e),t.include(Te,e),r.uniforms.add([new R("opacity",i=>i.opacity),new R("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new W("tex",i=>i.texture)),r.include(Me),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===h.Color&&(t.include(H,e),t.include(Rt,e),t.include(De,e),t.include(q,e),t.include(e.instancedDoublePrecision?bt:yt,e),t.include(Te,e),xe(t.fragment,e),pt(r),Ve(r),Ie(r),r.uniforms.add([o.uniforms.get("localOrigin"),o.uniforms.get("view"),new be("ambient",i=>i.ambient),new be("diffuse",i=>i.diffuse),new R("opacity",i=>i.opacity),new R("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new W("tex",i=>i.texture)),t.include(Ct,e),t.include(Pe,e),r.include(Me),t.extensions.add("GL_OES_standard_derivatives"),Re(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?a`albedo = mix(albedo, vec3(1), 0.9);`:a``}
        ${a`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?e.spherical?a`vec3 normalGround = normalize(vpos + localOrigin);`:a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a``}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Z.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:a``}
      }
    `)),t.include(Pt,e),t}const Va=Object.freeze(Object.defineProperty({__proto__:null,build:Da},Symbol.toStringTag,{value:"Module"}));class we extends le{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=E.Attribute,o.doubleSidedMode=S.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,we.shader)}}we.shader=new Mt(Va,()=>import("./RealisticTree.glsl.c9d1d80f.js"));class Et extends ha{constructor(t){super(t,za),this.supportsEdges=!0,this._configuration=new d,this._vertexBufferLayout=Ga(this.parameters),this._instanceBufferLayout=t.instanced?Ua(this.parameters):null}isVisibleForOutput(t){return t!==h.Shadow&&t!==h.ShadowExludeHighlight&&t!==h.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{instanced:o,hasVertexColors:r,hasSymbolColors:s,vvColorEnabled:i}=t,n=p(o)&&o.includes("color"),m=t.colorMixMode==="replace",C=t.opacity>0,x=t.externalColor&&t.externalColor[3]>0;return r&&(n||i||s)?!!m||C:r?m?x:C:n||i||s?!!m||C:m?x:C}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=p(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=p(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normals==="screenDerivative"?E.ScreenDerivative:E.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,p(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?U.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=p(this.parameters.modelTransformation),t!==h.Color&&t!==h.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=S.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?S.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?S.WindingOrder:S.None,this._configuration.instancedColor=p(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!o.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?b.Schematic:b.Normal:b.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Vo,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return p(t.weather)&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,r,s,i,n,m){if(p(this.parameters.verticalOffset)){const C=s.camera;he(ze,r[12],r[13],r[14]);let x=null;switch(s.viewingMode){case Oe.Global:x=He(Dt,ze);break;case Oe.Local:x=Jt(Dt,Wa)}let f=0;const T=ve(Ha,ze,C.eye),O=qe(T),A=Ye(T,T,1/O);let M=null;this.parameters.screenSizePerspective&&(M=Xt(x,A)),f+=va(C,O,this.parameters.verticalOffset,M,this.parameters.screenSizePerspective),Ye(x,x,f),Kt(Be,x,s.transform.inverseRotation),i=ve(ka,i,Be),n=ve(ja,n,Be)}fa(t,o,s,i,n,ga(s.verticalOffset),m)}requiresSlot(t,o){return o===h.Color||o===h.Alpha||o===h.Depth||o===h.Normal||o===h.Shadow||o===h.ShadowHighlight||o===h.ShadowExludeHighlight||o===h.Highlight||o===h.ObjectAndLayerIdColor?t===(this.parameters.transparent?this.parameters.writeDepth?ye.TRANSPARENT_MATERIAL:ye.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ye.OPAQUE_MATERIAL)||t===ye.DRAPED_MATERIAL||o===h.ObjectAndLayerIdColor:!1}createGLMaterial(t){return new Ia(t)}createBufferWriter(){return new Fa(this._vertexBufferLayout,this._instanceBufferLayout)}}class Ia extends xa{constructor(t){super(k(k({},t),t.material.parameters))}_updateParameters(t){const o=this._material.parameters;this.updateTexture(o.textureId);const r=t.camera.viewInverseTransposeMatrix;return he(o.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?we:le,t)}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){return this._output!==h.Color&&this._output!==h.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t)),this._updateParameters(t)}}class Ba extends Ra{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const za=new Ba;class Fa{constructor(t,o){this.vertexBufferLayout=t,this.instanceBufferLayout=o}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.get(v.POSITION).length}write(t,o,r,s,i){Ta(r,this.vertexBufferLayout,t,o,s,i)}}function Ga(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=Ot().vec3f(v.POSITION).vec3f(v.NORMAL);return e.hasVertexTangents&&o.vec4f(v.TANGENT),t&&o.vec2f(v.UV0),e.hasVertexColors&&o.vec4u8(v.COLOR),e.hasSymbolColors&&o.vec4u8(v.SYMBOLCOLOR),Yt("enable-feature:objectAndLayerId-rendering")&&o.vec4u8(v.OBJECTANDLAYERIDCOLOR),o}function Ua(e){let t=Ot();return t=e.instancedDoublePrecision?t.vec3f(v.MODELORIGINHI).vec3f(v.MODELORIGINLO).mat3f(v.MODEL).mat3f(v.MODELNORMAL):t.mat4f(v.MODEL).mat4f(v.MODELNORMAL),p(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(v.INSTANCECOLOR)),p(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(v.INSTANCEFEATUREATTRIBUTE)),p(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(t=t.vec4u8(v.OBJECTANDLAYERIDCOLOR_INSTANCED)),t}const ka=P(),ja=P(),Wa=Q(0,0,1),Dt=P(),Be=P(),ze=P(),Ha=P();function ce(e){if(Se(e))return null;const t=p(e.offset)?e.offset:Zt,o=p(e.rotation)?e.rotation:0,r=p(e.scale)?e.scale:Qt,s=Ae(1,0,0,0,1,0,t[0],t[1],1),i=Ae(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),n=Ae(r[0],0,0,0,r[1],0,0,0,1),m=X();return Je(m,i,n),Je(m,s,m),m}class qa{constructor(t,o,r,s,i){this.name=t,this.stageResources=o,this.lodThreshold=r,this.pivotOffset=s,this.numberOfVertices=i}}const z=eo.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ya(e,t){const o=await Ja(e,t),r=await er(o.textureDefinitions,t);let s=0;for(const i in r)if(r.hasOwnProperty(i)){const n=r[i];s+=(n==null?void 0:n.image)?n.image.width*n.image.height*4:0}return{resource:o,textures:r,size:s+to(o)}}async function Ja(e,t){const o=p(t)&&t.streamDataRequester;if(o)return Xa(e,o,t);const r=await Ke(oo(e,ao(t)));if(r.ok===!0)return r.value.data;Ze(r.error),Vt(r.error)}async function Xa(e,t,o){const r=await Ke(t.request(e,"json",o));if(r.ok===!0)return r.value;Ze(r.error),Vt(r.error.details.url)}function Vt(e){throw new ro("",`Request for object resource failed: ${e}`)}function Ka(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(z.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const n in t.vertexAttributes){const m=i[n];m&&m.values?(m.valueType!=null&&m.valueType!=="UInt32"&&(z.warn(`Unsupported indexed geometry indices type '${m.valueType}', only UInt32 is currently supported`),r=!1),m.valuesPerElement!=null&&m.valuesPerElement!==1&&(z.warn(`Unsupported indexed geometry values per element '${m.valuesPerElement}', only 1 is currently supported`),r=!1)):(z.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),r=!1)}}else z.warn("Indexed geometries must specify faces"),r=!1;break}default:z.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(z.warn("Geometry requires material"),r=!1);const s=e.params.vertexAttributes;for(const i in s)s[i].values||(z.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Za(e,t){const o=[],r=[],s=[],i=[],n=e.resource,m=Xe.parse(n.version||"1.0","wosr");or.validate(m);const C=n.model.name,x=n.model.geometries,f=n.materialDefinitions,T=e.textures;let O=0;const A=new Map;for(let M=0;M<x.length;M++){const _=x[M];if(!Ka(_))continue;const g=tr(_),L=_.params.vertexAttributes,u=[];for(const w in L){const N=L[w],F=N.values;u.push([w,{data:F,size:N.valuesPerElement,exclusive:!0}])}const $=[];if(_.params.topology!=="PerAttributeArray"){const w=_.params.faces;for(const N in w)$.push([N,w[N].values])}const D=T&&T[g.texture];if(D&&!A.has(g.texture)){const{image:w,params:N}=D,F=new wt(w,N);i.push(F),A.set(g.texture,F)}const Y=A.get(g.texture),V=Y?Y.id:void 0;let I=s[g.material]?s[g.material][g.texture]:null;if(!I){const w=f[g.material.substring(g.material.lastIndexOf("/")+1)].params;w.transparency===1&&(w.transparency=0);const N=D&&D.alphaChannelUsage,F=w.transparency>0||N==="transparency"||N==="maskAndTransparency",J=D?It(D.alphaChannelUsage):void 0,G={ambient:Qe(w.diffuse),diffuse:Qe(w.diffuse),opacity:1-(w.transparency||0),transparent:F,textureAlphaMode:J,textureAlphaCutoff:.33,textureId:V,initTextureTransparent:!0,doubleSided:!0,cullFace:U.None,colorMixMode:w.externalColorMixMode||"tint",textureAlphaPremultiplied:!!D&&!!D.params.preMultiplyAlpha};p(t)&&t.materialParamsMixin&&Object.assign(G,t.materialParamsMixin),I=new Et(G),s[g.material]||(s[g.material]={}),s[g.material][g.texture]=I}r.push(I);const de=new $t(u,$);O+=$.position?$.position.length:0,o.push(de)}return{engineResources:[{name:C,stageResources:{textures:i,materials:r,geometries:o},pivotOffset:n.model.pivotOffset,numberOfVertices:O,lodThreshold:null}],referenceBoundingBox:Qa(o)}}function Qa(e){const t=et();return e.forEach(o=>{const r=o.boundingInfo;p(r)&&(fe(t,r.getBBMin()),fe(t,r.getBBMax()))}),t}async function er(e,t){const o=[];for(const i in e){const n=e[i],m=n.images[0].data;if(!m){z.warn("Externally referenced texture data is not yet supported");continue}const C=n.encoding+";base64,"+m,x="/textureDefinitions/"+i,f=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",T={noUnpackFlip:!0,wrap:{s:At.REPEAT,t:At.REPEAT},preMultiplyAlpha:It(f)!==y.Opaque},O=p(t)&&t.disableTextures?Promise.resolve(null):$o(C,t);o.push(O.then(A=>({refId:x,image:A,params:T,alphaChannelUsage:f})))}const r=await Promise.all(o),s={};for(const i of r)s[i.refId]=i;return s}function It(e){switch(e){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function tr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const or=new Xe(1,2,"wosr");async function ar(e,t){const o=Bt(Wt(e));if(o.fileType==="wosr"){const f=await(t.cache?t.cache.loadWOSR(o.url,t):Ya(o.url,t)),{engineResources:T,referenceBoundingBox:O}=Za(f,t);return{lods:T,referenceBoundingBox:O,isEsriSymbolResource:!1,isWosr:!0}}const r=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):fo(new go(t.streamDataRequester),o.url,t,t.usePBR)),s=io(r.model.meta,"ESRI_proxyEllipsoid"),i=r.meta.isEsriSymbolResource&&p(s)&&r.meta.uri.includes("/RealisticTrees/");i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,nr(r,s));const n=r.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},m=pe(k({},t.materialParamsMixin),{treeRendering:i}),{engineResources:C,referenceBoundingBox:x}=zt(r,n,m,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:C,referenceBoundingBox:x,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Bt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function zt(e,t,o,r){const s=e.model,i=new Array,n=new Map,m=new Map,C=s.lods.length,x=et();return s.lods.forEach((f,T)=>{const O=r.skipHighLods===!0&&(C>1&&T===0||C>3&&T===1)||r.skipHighLods===!1&&r.singleLodIndex!=null&&T!==r.singleLodIndex;if(O&&T!==0)return;const A=new Array;let M=0;if(f.parts.forEach(g=>{const{geometry:L,vertexCount:u}=rr(g);A.push(L),M+=u;const $=L.boundingInfo;p($)&&T===0&&(fe(x,$.getBBMin()),fe(x,$.getBBMax()))}),O)return;const _=new qa(f.name,{textures:new Array,materials:new Array,geometries:A},f.lodThreshold,[0,0,0],M);i.push(_),f.parts.forEach(g=>{const L=g.material+(g.attributes.normal?"_normal":"")+(g.attributes.color?"_color":"")+(g.attributes.texCoord0?"_texCoord0":"")+(g.attributes.tangent?"_tangent":""),u=s.materials.get(g.material),$=p(g.attributes.texCoord0),D=p(g.attributes.normal);if(Se(u))return;const Y=ir(u.alphaMode);if(!n.has(L)){if($){const G=(ue,Fe=!1)=>{if(p(ue)&&!m.has(ue)){const me=s.textures.get(ue);p(me)&&m.set(ue,new wt(me.data,Fe?pe(k({},me.parameters),{preMultiplyAlpha:Fe}):me.parameters))}};G(u.textureColor,Y!==y.Opaque),G(u.textureNormal),G(u.textureOcclusion),G(u.textureEmissive),G(u.textureMetallicRoughness)}const V=u.color[0]**(1/K),I=u.color[1]**(1/K),de=u.color[2]**(1/K),w=u.emissiveFactor[0]**(1/K),N=u.emissiveFactor[1]**(1/K),F=u.emissiveFactor[2]**(1/K),J=p(u.textureColor)&&$?m.get(u.textureColor):null;n.set(L,new Et(k(pe(k({},t),{transparent:Y===y.Blend,customDepthTest:ee.Lequal,textureAlphaMode:Y,textureAlphaCutoff:u.alphaCutoff,diffuse:[V,I,de],ambient:[V,I,de],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?U.None:U.Back,hasVertexColors:!!g.attributes.color,hasVertexTangents:!!g.attributes.tangent,normals:D?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:p(J)?J.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:p(u.textureNormal)&&$?m.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:p(J)&&!!J.params.preMultiplyAlpha,occlusionTextureId:p(u.textureOcclusion)&&$?m.get(u.textureOcclusion).id:void 0,emissiveTextureId:p(u.textureEmissive)&&$?m.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:p(u.textureMetallicRoughness)&&$?m.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[w,N,F],mrrFactors:[u.metallicFactor,u.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:ce(u.colorTextureTransform),normalTextureTransformMatrix:ce(u.normalTextureTransform),occlusionTextureTransformMatrix:ce(u.occlusionTextureTransform),emissiveTextureTransformMatrix:ce(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:ce(u.metallicRoughnessTextureTransform)}),o)))}if(_.stageResources.materials.push(n.get(L)),$){const V=I=>{p(I)&&_.stageResources.textures.push(m.get(I))};V(u.textureColor),V(u.textureNormal),V(u.textureOcclusion),V(u.textureEmissive),V(u.textureMetallicRoughness)}})}),{engineResources:i,referenceBoundingBox:x}}function rr(e){const t=sr(e.indices||e.attributes.position.count,e.primitiveType),o=e.attributes.position.count,r=j(ge,o);po(r,e.attributes.position,e.transform);const s=[[v.POSITION,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]],i=[[v.POSITION,t]];if(p(e.attributes.normal)){const n=j(ge,o);tt($e,e.transform),ho(n,e.attributes.normal,$e),s.push([v.NORMAL,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),i.push([v.NORMAL,t])}if(p(e.attributes.tangent)){const n=j(rt,o);tt($e,e.transform),xo(n,e.attributes.tangent,$e),s.push([v.TANGENT,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),i.push([v.TANGENT,t])}if(p(e.attributes.texCoord0)){const n=j(co,o);To(n,e.attributes.texCoord0),s.push([v.UV0,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),i.push([v.UV0,t])}if(p(e.attributes.color)){const n=j(Le,o);if(e.attributes.color.elementCount===4)e.attributes.color instanceof rt?nt(n,e.attributes.color,255):e.attributes.color instanceof Le?bo(n,e.attributes.color):e.attributes.color instanceof uo&&nt(n,e.attributes.color,1/256);else{yo(n,255,255,255,255);const m=new it(n.buffer,0,4);e.attributes.color instanceof ge?st(m,e.attributes.color,255):e.attributes.color instanceof it?vo(m,e.attributes.color):e.attributes.color instanceof mo&&st(m,e.attributes.color,1/256)}s.push([v.COLOR,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),i.push([v.COLOR,t])}return{geometry:new $t(s,i),vertexCount:o}}const $e=We();function ir(e){switch(e){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function sr(e,t){switch(t){case Ee.TRIANGLES:return wo(e);case Ee.TRIANGLE_STRIP:return Mo(e);case Ee.TRIANGLE_FAN:return Co(e)}}function nr(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const s of r.parts){const i=s.attributes.normal;if(Se(i))return;const n=s.attributes.position,m=n.count,C=P(),x=P(),f=P(),T=j(Le,m),O=j(ge,m),A=so(no(),s.transform);for(let M=0;M<m;M++){n.getVec(M,x),i.getVec(M,C),ot(x,x,s.transform),ve(f,x,t.center),at(f,f,t.radius);const _=f[2],g=qe(f),L=Math.min(.45+.55*g*g,1);at(f,f,t.radius),A!==null&&ot(f,f,A),He(f,f),o+1!==e.model.lods.length&&e.model.lods.length>1&&lo(f,f,C,_>-1?.2:Math.min(-4*_-3.8,1)),O.setVec(M,f),T.set(M,0,255*L),T.set(M,1,255*L),T.set(M,2,255*L),T.set(M,3,255)}s.attributes.normal=O,s.attributes.color=T}}}var Cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",fetch:ar,gltfToEngineResources:zt,parseUrl:Bt});export{Ua as B,Et as C,yr as E,Da as I,Na as Q,ar as Y,ce as c,ba as e,Ve as h,S as i,De as n,Cr as o,Rt as p,Ie as u};
