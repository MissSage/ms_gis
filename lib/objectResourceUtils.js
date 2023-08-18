var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { cz as n$3, N as e$3, aS as o$2, a1 as n$4, C as r$2, dw as o$4, hY as e$9, bJ as r$6, bY as r$7, cN as e$e, et as r$8, bK as l$1, dc as has, bg as r$9, bE as z$1, b9 as e$i, ba as s$6, bc as g, bf as P$2, cB as S$1, a2 as t$6, hZ as c$7, h_ as i$7, h$ as t$7, i0 as i$8, ea as s$7, i1 as r$a, g_ as c$8, i2 as e$j, gT as b$3, U as U$3, A as e$k, gU as w$2, s as s$8, ej as e$l, cf as A$2, i3 as a$7, gJ as q$1, gM as g$1, cQ as h$5, bA as e$o, bD as O$2, i4 as i$b, a0 as A$3 } from "./index.js";
import { i as i$9, c as c$9, u as u$4, x as x$3, L as L$2, O as O$1, E as E$4 } from "./BufferView.js";
import { t as t$9, r as r$c, f as f$3, e as e$n } from "./vec33.js";
import { m as m$2, n as n$9, o as o$g, r as r$b, a as r$d, b as n$a, c as o$h, e as e$m, t as t$a, i as i$a, f as f$4, d as o$i } from "./DefaultMaterial_COLOR_GAMMA.js";
import { t as t$8 } from "./requestImageUtils.js";
import { p as o$1, r, C as C$1, o as o$b, n as n$8, q as e$f, W, c as c$6, A as A$1, h as h$3, l as l$2, a as a$5, _ as _$2, d as a$6, S } from "./OrderIndependentTransparency.js";
import { c as n$2, j as e$4, k as t$2, b2 as c$3, b3 as o, z as h$1, G as d$1, b4 as e$5, aZ as U$2, I as t$3, o as o$3, g as e$6, F as v$2, A as r$3, b5 as o$5, al as s$3, f, C as u$1, an as a, b6 as o$6, b7 as n$5, b8 as i$4, a6 as o$7, a7 as d$2, az as i$5, b9 as d$3, ba as a$1, a2 as e$7, aG as a$2, a3 as u$2, bb as u$3, a4 as r$4, bc as w$1, bd as _$1, aO as d$4, aK as n$6, aN as m, a5 as t$4, aI as o$8, aJ as a$3, aH as s$4, aM as r$5, be as e$8, D as e$a, d as o$9, b0 as o$a, bf as a$4, y as c$4, aL as d$5, ay as e$b, m as e$c, H as n$7, bg as h$2, aP as v$3, e as e$d, bh as x$1, aE as c$5, t as t$5, bi as f$1, R as o$c, s as o$d, h as e$g, aQ as i$6, i as o$e, E as E$2, T as e$h, U as o$f, V as f$2, J as s$5, K as d$6, as as L, M as x$2, aD as y, q as E$3, W as h$4, P as m$1, L as L$1, w as d$7 } from "./SSAOHelper.js";
import { T as T$1 } from "./InterleavedLayout.js";
import { O } from "./VertexAttribute.js";
import { r as r$1 } from "./symbolColorUtils.js";
import { I as I$2, D as D$1, E as E$5 } from "./enums.js";
function e$2(e2, o2) {
  const n2 = e2.fragment;
  switch (n2.code.add(n$2`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), o2.doubleSidedMode) {
    case i$3.None:
      n2.code.add(n$2`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case i$3.View:
      n2.code.add(n$2`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case i$3.WindingOrder:
      n2.code.add(n$2`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      n$3(o2.doubleSidedMode);
    case i$3.COUNT:
  }
}
var i$3;
!function(a2) {
  a2[a2.None = 0] = "None", a2[a2.View = 1] = "View", a2[a2.WindingOrder = 2] = "WindingOrder", a2[a2.COUNT = 3] = "COUNT";
}(i$3 || (i$3 = {}));
function e$1(e2) {
  e2.vertex.code.add(n$2`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}
class v$1 extends t$2 {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = false;
  }
}
function p$1(e2, i2) {
  i2.instanced && i2.instancedDoublePrecision && (e2.attributes.add(O.MODELORIGINHI, "vec3"), e2.attributes.add(O.MODELORIGINLO, "vec3"), e2.attributes.add(O.MODEL, "mat3"), e2.attributes.add(O.MODELNORMAL, "mat3"));
  const c2 = e2.vertex;
  i2.instancedDoublePrecision && (c2.include(c$3, i2), c2.uniforms.add(new o("viewOriginHi", (e3, i3) => o$1(o$2(b$2, i3.camera.viewInverseTransposeMatrix[3], i3.camera.viewInverseTransposeMatrix[7], i3.camera.viewInverseTransposeMatrix[11]), b$2))), c2.uniforms.add(new o("viewOriginLo", (e3, i3) => r(o$2(b$2, i3.camera.viewInverseTransposeMatrix[3], i3.camera.viewInverseTransposeMatrix[7], i3.camera.viewInverseTransposeMatrix[11]), b$2)))), c2.code.add(n$2`
    vec3 calculateVPos() {
      ${i2.instancedDoublePrecision ? "return model * localPosition().xyz;" : "return localPosition().xyz;"}
    }
    `), c2.code.add(n$2`
    vec3 subtractOrigin(vec3 _pos) {
      ${i2.instancedDoublePrecision ? n$2`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), c2.code.add(n$2`
    vec3 dpNormal(vec4 _normal) {
      ${i2.instancedDoublePrecision ? "return normalize(modelNormal * _normal.xyz);" : "return normalize(_normal.xyz);"}
    }
    `), i2.output === h$1.Normal && (d$1(c2), c2.code.add(n$2`
    vec3 dpNormalView(vec4 _normal) {
      ${i2.instancedDoublePrecision ? "return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);" : "return normalize((viewNormal * _normal).xyz);"}
    }
    `)), i2.hasVertexTangents && c2.code.add(n$2`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i2.instancedDoublePrecision ? "return vec4(modelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}

    }
    `);
}
e$3([e$4()], v$1.prototype, "instancedDoublePrecision", void 0);
const b$2 = n$4();
function e(e2) {
  e2.vertex.code.add(n$2`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n$2.int(r$1.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n$2.int(r$1.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n$2.int(r$1.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n$2.int(r$1.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}
function i$2(i2, t2) {
  t2.hasSymbolColors ? (i2.include(e), i2.attributes.add(O.SYMBOLCOLOR, "vec4"), i2.varyings.add("colorMixMode", "mediump float"), i2.vertex.code.add(n$2`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)) : (i2.fragment.uniforms.add(new e$5("colorMixMode", (o2) => U$2[o2.colorMixMode])), i2.vertex.code.add(n$2`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));
}
function d(d2) {
  d2.fragment.code.add(n$2`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n$2.float(t$3)}) { discard; } }
  `);
}
function s$2(a2, e2) {
  l(a2, e2, new o$3("textureAlphaCutoff", (a3) => a3.textureAlphaCutoff));
}
function l(e2, r2, s2) {
  const t2 = e2.fragment;
  switch (r2.alphaDiscardMode !== C$1.Mask && r2.alphaDiscardMode !== C$1.MaskBlend || t2.uniforms.add(s2), r2.alphaDiscardMode) {
    case C$1.Blend:
      return e2.include(d);
    case C$1.Opaque:
      t2.code.add(n$2`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
      break;
    case C$1.Mask:
      t2.code.add(n$2`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);
      break;
    case C$1.MaskBlend:
      e2.fragment.code.add(n$2`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);
  }
}
function b$1(b2, O2) {
  const { vertex: w2, fragment: C2 } = b2, T2 = O2.hasModelTransformation;
  T2 && w2.uniforms.add(new e$6("model", (e2) => r$2(e2.modelTransformation) ? e2.modelTransformation : o$4));
  const V2 = O2.hasColorTexture && O2.alphaDiscardMode !== C$1.Opaque;
  switch (O2.output) {
    case h$1.Depth:
    case h$1.Shadow:
    case h$1.ShadowHighlight:
    case h$1.ShadowExludeHighlight:
    case h$1.ObjectAndLayerIdColor:
      v$2(w2, O2), b2.include(r$3, O2), b2.include(o$5, O2), b2.include(s$3, O2), b2.include(o$7, O2), b2.include(u$1, O2), b2.include(d$2, O2), i$5(b2), b2.varyings.add("depth", "float"), V2 && C2.uniforms.add(new f("tex", (o2) => o2.texture)), w2.code.add(n$2`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${T2 ? "model," : ""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `), b2.include(s$2, O2), C2.code.add(n$2`
          void main(void) {
            discardBySlice(vpos);
            ${V2 ? n$2`
                    vec4 texColor = texture2D(tex, ${O2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            ${O2.output === h$1.ObjectAndLayerIdColor ? n$2`outputObjectAndLayerIdColor();` : n$2`outputDepth(depth);`}
          }
        `);
      break;
    case h$1.Normal:
      v$2(w2, O2), b2.include(r$3, O2), b2.include(o$6, O2), b2.include(n$5, O2), b2.include(o$5, O2), b2.include(s$3, O2), V2 && C2.uniforms.add(new f("tex", (o2) => o2.texture)), b2.varyings.add("vPositionView", "vec3"), w2.code.add(n$2`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${O2.normalType === i$4.Attribute ? n$2`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : ""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T2 ? "model," : ""} vpos);
            forwardTextureCoordinates();
          }
        `), b2.include(u$1, O2), b2.include(s$2, O2), C2.code.add(n$2`
          void main() {
            discardBySlice(vpos);
            ${V2 ? n$2`
                    vec4 texColor = texture2D(tex, ${O2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}

            ${O2.normalType === i$4.ScreenDerivative ? n$2`
                vec3 normal = screenDerivativeNormal(vPositionView);` : n$2`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);
      break;
    case h$1.Highlight:
      v$2(w2, O2), b2.include(r$3, O2), b2.include(o$5, O2), b2.include(s$3, O2), V2 && C2.uniforms.add(new f("tex", (o2) => o2.texture)), w2.code.add(n$2`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T2 ? "model," : ""} vpos);
            forwardTextureCoordinates();
          }
        `), b2.include(u$1, O2), b2.include(s$2, O2), b2.include(a, O2), C2.code.add(n$2`
          void main() {
            discardBySlice(vpos);
            ${V2 ? n$2`
                    vec4 texColor = texture2D(tex, ${O2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            outputHighlight();
          }
        `);
  }
}
function c$2(c2, u2) {
  const l2 = c2.fragment;
  if (u2.hasVertexTangents ? (c2.attributes.add(O.TANGENT, "vec4"), c2.varyings.add("vTangent", "vec4"), u2.doubleSidedMode === i$3.WindingOrder ? l2.code.add(n$2`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : l2.code.add(n$2`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : (c2.extensions.add("GL_OES_standard_derivatives"), l2.code.add(n$2`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)), u2.textureCoordinateType !== d$3.None) {
    c2.include(a$1, u2);
    const e2 = u2.supportsTextureAtlas ? u2.hasWebGL2Context ? e$7.None : e$7.Size : e$7.None;
    l2.uniforms.add(u2.pbrTextureBindType === a$2.Pass ? u$2("normalTexture", (e3) => e3.textureNormal, e2) : u$3("normalTexture", (e3) => e3.textureNormal, e2)), l2.code.add(n$2`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${u2.supportsTextureAtlas ? n$2`vtc.size = ${r$4(u2, "normalTexture")};` : ""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `);
  }
}
function n$1(n2, a2) {
  const i2 = n2.fragment;
  a2.receiveAmbientOcclusion ? (i2.uniforms.add(u$2("ssaoTex", (e2, r2) => r2.ssaoHelper.colorTexture, a2.hasWebGL2Context ? e$7.None : e$7.InvSize)), i2.constants.add("blurSizePixelsInverse", "float", 1 / w$1), i2.code.add(n$2`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${r$4(a2, "ssaoTex", true)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)) : i2.code.add(n$2`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);
}
function h(i2) {
  i2.constants.add("ambientBoostFactor", "float", _$1);
}
function u(i2) {
  i2.uniforms.add(new o$3("lightingGlobalFactor", (i3, n2) => n2.lighting.globalFactor));
}
function p(g2, p2) {
  const v2 = g2.fragment;
  switch (g2.include(n$1, p2), p2.pbrMode !== d$4.Disabled && g2.include(n$6, p2), g2.include(m, p2), g2.include(t$4), v2.code.add(n$2`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p2.pbrMode === d$4.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), h(v2), u(v2), o$8(v2), v2.code.add(n$2`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p2.spherical ? n$2`normalize(vPosWorld)` : n$2`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), a$3(v2), v2.code.add(n$2`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`), p2.pbrMode) {
    case d$4.Disabled:
    case d$4.WaterOnIntegratedMesh:
    case d$4.Water:
      g2.include(r$5, p2), v2.code.add(n$2`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);
      break;
    case d$4.Normal:
    case d$4.Schematic:
      v2.code.add(n$2`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), v2.code.add(n$2`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), p2.useFillLights ? v2.uniforms.add(new s$4("hasFillLights", (i2, n2) => n2.enableFillLights)) : v2.constants.add("hasFillLights", "bool", false), v2.code.add(n$2`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), v2.uniforms.add([new o$3("lightingSpecularStrength", (i2, n2) => n2.lighting.mainLight.specularStrength), new o$3("lightingEnvironmentStrength", (i2, n2) => n2.lighting.mainLight.environmentStrength)]), v2.code.add(n$2`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), v2.code.add(n$2`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p2.pbrMode === d$4.Schematic ? n$2`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));` : n$2`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);
      break;
    default:
      n$3(p2.pbrMode);
    case d$4.COUNT:
  }
}
function s$1(s2) {
  s2.vertex.uniforms.add(new e$8("colorTextureTransformMatrix", (o2) => r$2(o2.colorTextureTransformMatrix) ? o2.colorTextureTransformMatrix : e$9())), s2.varyings.add("colorUV", "vec2"), s2.vertex.code.add(n$2`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function i$1(s2) {
  s2.vertex.uniforms.add(new e$8("normalTextureTransformMatrix", (o2) => r$2(o2.normalTextureTransformMatrix) ? o2.normalTextureTransformMatrix : e$9())), s2.varyings.add("normalUV", "vec2"), s2.vertex.code.add(n$2`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function t$1(s2) {
  s2.vertex.uniforms.add(new e$8("emissiveTextureTransformMatrix", (o2) => r$2(o2.emissiveTextureTransformMatrix) ? o2.emissiveTextureTransformMatrix : e$9())), s2.varyings.add("emissiveUV", "vec2"), s2.vertex.code.add(n$2`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function n(s2) {
  s2.vertex.uniforms.add(new e$8("occlusionTextureTransformMatrix", (o2) => r$2(o2.occlusionTextureTransformMatrix) ? o2.occlusionTextureTransformMatrix : e$9())), s2.varyings.add("occlusionUV", "vec2"), s2.vertex.code.add(n$2`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function x(s2) {
  s2.vertex.uniforms.add(new e$8("metallicRoughnessTextureTransformMatrix", (o2) => r$2(o2.metallicRoughnessTextureTransformMatrix) ? o2.metallicRoughnessTextureTransformMatrix : e$9())), s2.varyings.add("metallicRoughnessUV", "vec2"), s2.vertex.code.add(n$2`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function i(i2) {
  i2.include(e$a), i2.code.add(n$2`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n$2.int(r$1.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n$2.int(r$1.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$2.int(r$1.Replace)}) {
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

      if (mode == ${n$2.int(r$1.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$2.int(r$1.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}
function Q(Q2) {
  const X2 = new o$9(), { vertex: Y2, fragment: Z2, varyings: ee2 } = X2;
  return v$2(Y2, Q2), X2.include(o$a), ee2.add("vpos", "vec3"), X2.include(s$3, Q2), X2.include(p$1, Q2), X2.include(a$4, Q2), Q2.hasColorTextureTransform && X2.include(s$1), Q2.output !== h$1.Color && Q2.output !== h$1.Alpha || (Q2.hasNormalTextureTransform && X2.include(i$1), Q2.hasEmissionTextureTransform && X2.include(t$1), Q2.hasOcclusionTextureTransform && X2.include(n), Q2.hasMetallicRoughnessTextureTransform && X2.include(x), c$4(Y2, Q2), X2.include(o$6, Q2), X2.include(r$3, Q2), Q2.normalType === i$4.Attribute && Q2.offsetBackfaces && X2.include(e$1), X2.include(c$2, Q2), X2.include(n$5, Q2), Q2.instancedColor && X2.attributes.add(O.INSTANCECOLOR, "vec4"), ee2.add("localvpos", "vec3"), X2.include(o$5, Q2), X2.include(d$5, Q2), X2.include(i$2, Q2), X2.include(e$b, Q2), Y2.uniforms.add(new e$c("externalColor", (e2) => e2.externalColor)), ee2.add("vcolorExt", "vec4"), Q2.hasMultipassTerrain && ee2.add("depth", "float"), Q2.hasModelTransformation && Y2.uniforms.add(new e$6("model", (o2) => r$2(o2.modelTransformation) ? o2.modelTransformation : o$4)), Y2.code.add(n$2`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${Q2.instancedColor ? "vcolorExt *= instanceColor;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n$2.float(t$3)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${Q2.normalType === i$4.Attribute ? n$2`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${Q2.hasVertexTangents ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, ${Q2.hasModelTransformation ? "model," : ""} vpos);
          ${Q2.normalType === i$4.Attribute && Q2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
        }

        ${Q2.hasMultipassTerrain ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${Q2.hasColorTextureTransform ? n$2`forwardColorUV();` : ""}
        ${Q2.hasNormalTextureTransform ? n$2`forwardNormalUV();` : ""}
        ${Q2.hasEmissionTextureTransform ? n$2`forwardEmissiveUV();` : ""}
        ${Q2.hasOcclusionTextureTransform ? n$2`forwardOcclusionUV();` : ""}
        ${Q2.hasMetallicRoughnessTextureTransform ? n$2`forwardMetallicRoughnessUV();` : ""}
      }
    `)), Q2.output === h$1.Alpha && (X2.include(u$1, Q2), X2.include(s$2, Q2), X2.include(n$7, Q2), Z2.uniforms.add([new o$3("opacity", (e2) => e2.opacity), new o$3("layerOpacity", (e2) => e2.layerOpacity)]), Q2.hasColorTexture && Z2.uniforms.add(new f("tex", (e2) => e2.texture)), Z2.include(i), Z2.code.add(n$2`
      void main() {
        discardBySlice(vpos);
        ${Q2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${Q2.hasColorTexture ? n$2`
                vec4 texColor = texture2D(tex, ${Q2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                ${Q2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$2`vec4 texColor = vec4(1.0);`}
        ${Q2.hasVertexColors ? n$2`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$2`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)), Q2.output === h$1.Color && (X2.include(u$1, Q2), X2.include(p, Q2), X2.include(n$1, Q2), X2.include(s$2, Q2), X2.include(Q2.instancedDoublePrecision ? h$2 : v$3, Q2), X2.include(n$7, Q2), c$4(Z2, Q2), Z2.uniforms.add([Y2.uniforms.get("localOrigin"), new e$d("ambient", (e2) => e2.ambient), new e$d("diffuse", (e2) => e2.diffuse), new o$3("opacity", (e2) => e2.opacity), new o$3("layerOpacity", (e2) => e2.layerOpacity)]), Q2.hasColorTexture && Z2.uniforms.add(new f("tex", (e2) => e2.texture)), X2.include(x$1, Q2), X2.include(n$6, Q2), Z2.include(i), X2.include(e$2, Q2), h(Z2), u(Z2), a$3(Z2), Z2.code.add(n$2`
      void main() {
        discardBySlice(vpos);
        ${Q2.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${Q2.hasColorTexture ? n$2`
                vec4 texColor = texture2D(tex, ${Q2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                ${Q2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$2`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${Q2.normalType === i$4.ScreenDerivative ? n$2`
                vec3 normal = screenDerivativeNormal(localvpos);` : n$2`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${Q2.pbrMode === d$4.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${Q2.receiveShadows ? "readShadowMap(vpos, linearDepth)" : Q2.spherical ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${Q2.hasVertexColors ? n$2`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$2`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Q2.hasNormalTexture ? n$2`
                mat3 tangentSpace = ${Q2.hasVertexTangents ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);` : n$2`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${Q2.spherical ? n$2`normalize(posWorld);` : n$2`vec3(0.0, 0.0, 1.0);`}

        ${Q2.snowCover ? n$2`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);` : ""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${Q2.pbrMode === d$4.Normal || Q2.pbrMode === d$4.Schematic ? n$2`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Q2.snowCover ? n$2`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n$2`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Q2.transparencyPassType === o$b.Color ? n$2`gl_FragColor = premultiplyAlpha(gl_FragColor);` : ""}
      }
    `)), X2.include(b$1, Q2), X2;
}
const X = Object.freeze(Object.defineProperty({ __proto__: null, build: Q }, Symbol.toStringTag, { value: "Module" }));
class k$2 extends f$1 {
  constructor() {
    super(...arguments), this.isSchematic = false, this.usePBR = false, this.mrrFactors = r$6(0, 1, 0.5), this.hasVertexColors = false, this.hasSymbolColors = false, this.doubleSided = false, this.doubleSidedType = "normal", this.cullFace = n$8.Back, this.emissiveFactor = r$6(0, 0, 0), this.instancedDoublePrecision = false, this.normals = "default", this.receiveSSAO = true, this.receiveShadows = true, this.castShadows = true, this.shadowMappingEnabled = false, this.ambient = r$6(0.2, 0.2, 0.2), this.diffuse = r$6(0.8, 0.8, 0.8), this.externalColor = r$7(1, 1, 1, 1), this.colorMixMode = "multiply", this.opacity = 1, this.layerOpacity = 1, this.origin = n$4(), this.hasSlicePlane = false, this.hasSliceHighlight = true, this.offsetTransparentBackfaces = false, this.vvSizeEnabled = false, this.vvSizeMinSize = [1, 1, 1], this.vvSizeMaxSize = [100, 100, 100], this.vvSizeOffset = [0, 0, 0], this.vvSizeFactor = [1, 1, 1], this.vvSizeValue = [1, 1, 1], this.vvColorEnabled = false, this.vvColorValues = [0, 0, 0, 0, 0, 0, 0, 0], this.vvColorColors = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], this.vvSymbolAnchor = [0, 0, 0], this.vvSymbolRotationMatrix = e$e(), this.vvOpacityEnabled = false, this.vvOpacityValues = [], this.vvOpacityOpacities = [], this.transparent = false, this.writeDepth = true, this.customDepthTest = e$f.Less, this.textureAlphaMode = C$1.Blend, this.textureAlphaCutoff = o$c, this.textureAlphaPremultiplied = false, this.hasOccludees = false, this.renderOccluded = o$d.Occlude;
  }
}
class E$1 extends c$5 {
  constructor() {
    super(...arguments), this.origin = n$4(), this.slicePlaneLocalOrigin = this.origin;
  }
}
class _ extends e$g {
  initializeConfiguration(e2, t2) {
    t2.hasWebGL2Context = e2.rctx.type === r$8.WEBGL2, t2.spherical = e2.viewingMode === l$1.Global, t2.doublePrecisionRequiresObfuscation = i$6(e2.rctx), t2.textureCoordinateType = t2.hasColorTexture || t2.hasMetallicRoughnessTexture || t2.hasEmissionTexture || t2.hasOcclusionTexture || t2.hasNormalTexture ? d$3.Default : d$3.None, t2.objectAndLayerIdColorInstanced = t2.instanced;
  }
  initializeProgram(e2) {
    return this._initializeProgram(e2, _.shader);
  }
  _initializeProgram(e2, t2) {
    return new o$e(e2.rctx, t2.get().build(this.configuration), E$2);
  }
  _convertDepthTestFunction(e2) {
    return e2 === e$f.Lequal ? I$2.LEQUAL : I$2.LESS;
  }
  _makePipeline(e2, t2) {
    const i2 = this.configuration, s2 = e2 === o$b.NONE, r2 = e2 === o$b.FrontFace;
    return W({ blending: i2.output !== h$1.Color && i2.output !== h$1.Alpha || !i2.transparent ? null : s2 ? c$6 : A$1(e2), culling: V$1(i2) && h$3(i2.cullFace), depthTest: { func: l$2(e2, this._convertDepthTestFunction(i2.customDepthTest)) }, depthWrite: s2 || r2 ? i2.writeDepth && a$5 : null, colorWrite: _$2, stencilWrite: i2.hasOccludees ? e$h : null, stencilTest: i2.hasOccludees ? t2 ? o$f : f$2 : null, polygonOffset: s2 || r2 ? null : a$6(i2.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._makePipeline(this.configuration.transparencyPassType, true), this._makePipeline(this.configuration.transparencyPassType, false);
  }
  getPipelineState(e2, t2) {
    return t2 ? this._occludeePipelineState : super.getPipelineState(e2, t2);
  }
}
function V$1(e2) {
  return e2.cullFace !== n$8.None || !e2.hasSlicePlane && (!e2.transparent && !e2.doubleSidedMode);
}
_.shader = new t$5(X, () => import("./DefaultMaterial.glsl.js"));
class c$1 extends s$5 {
  constructor() {
    super(...arguments), this.output = h$1.Color, this.alphaDiscardMode = C$1.Opaque, this.doubleSidedMode = i$3.None, this.pbrMode = d$4.Disabled, this.cullFace = n$8.None, this.transparencyPassType = o$b.NONE, this.normalType = i$4.Attribute, this.textureCoordinateType = d$3.None, this.customDepthTest = e$f.Less, this.spherical = false, this.hasVertexColors = false, this.hasSymbolColors = false, this.hasVerticalOffset = false, this.hasSlicePlane = false, this.hasSliceHighlight = true, this.hasColorTexture = false, this.hasMetallicRoughnessTexture = false, this.hasEmissionTexture = false, this.hasOcclusionTexture = false, this.hasNormalTexture = false, this.hasScreenSizePerspective = false, this.hasVertexTangents = false, this.hasOccludees = false, this.hasMultipassTerrain = false, this.hasModelTransformation = false, this.offsetBackfaces = false, this.vvSize = false, this.vvColor = false, this.receiveShadows = false, this.receiveAmbientOcclusion = false, this.textureAlphaPremultiplied = false, this.instanced = false, this.instancedColor = false, this.objectAndLayerIdColorInstanced = false, this.instancedDoublePrecision = false, this.doublePrecisionRequiresObfuscation = false, this.writeDepth = true, this.transparent = false, this.enableOffset = true, this.cullAboveGround = false, this.snowCover = false, this.hasColorTextureTransform = false, this.hasEmissionTextureTransform = false, this.hasNormalTextureTransform = false, this.hasOcclusionTextureTransform = false, this.hasMetallicRoughnessTextureTransform = false;
  }
}
e$3([e$4({ count: h$1.COUNT })], c$1.prototype, "output", void 0), e$3([e$4({ count: C$1.COUNT })], c$1.prototype, "alphaDiscardMode", void 0), e$3([e$4({ count: i$3.COUNT })], c$1.prototype, "doubleSidedMode", void 0), e$3([e$4({ count: d$4.COUNT })], c$1.prototype, "pbrMode", void 0), e$3([e$4({ count: n$8.COUNT })], c$1.prototype, "cullFace", void 0), e$3([e$4({ count: o$b.COUNT })], c$1.prototype, "transparencyPassType", void 0), e$3([e$4({ count: i$4.COUNT })], c$1.prototype, "normalType", void 0), e$3([e$4({ count: d$3.COUNT })], c$1.prototype, "textureCoordinateType", void 0), e$3([e$4({ count: e$f.COUNT })], c$1.prototype, "customDepthTest", void 0), e$3([e$4()], c$1.prototype, "spherical", void 0), e$3([e$4()], c$1.prototype, "hasVertexColors", void 0), e$3([e$4()], c$1.prototype, "hasSymbolColors", void 0), e$3([e$4()], c$1.prototype, "hasVerticalOffset", void 0), e$3([e$4()], c$1.prototype, "hasSlicePlane", void 0), e$3([e$4()], c$1.prototype, "hasSliceHighlight", void 0), e$3([e$4()], c$1.prototype, "hasColorTexture", void 0), e$3([e$4()], c$1.prototype, "hasMetallicRoughnessTexture", void 0), e$3([e$4()], c$1.prototype, "hasEmissionTexture", void 0), e$3([e$4()], c$1.prototype, "hasOcclusionTexture", void 0), e$3([e$4()], c$1.prototype, "hasNormalTexture", void 0), e$3([e$4()], c$1.prototype, "hasScreenSizePerspective", void 0), e$3([e$4()], c$1.prototype, "hasVertexTangents", void 0), e$3([e$4()], c$1.prototype, "hasOccludees", void 0), e$3([e$4()], c$1.prototype, "hasMultipassTerrain", void 0), e$3([e$4()], c$1.prototype, "hasModelTransformation", void 0), e$3([e$4()], c$1.prototype, "offsetBackfaces", void 0), e$3([e$4()], c$1.prototype, "vvSize", void 0), e$3([e$4()], c$1.prototype, "vvColor", void 0), e$3([e$4()], c$1.prototype, "receiveShadows", void 0), e$3([e$4()], c$1.prototype, "receiveAmbientOcclusion", void 0), e$3([e$4()], c$1.prototype, "textureAlphaPremultiplied", void 0), e$3([e$4()], c$1.prototype, "instanced", void 0), e$3([e$4()], c$1.prototype, "instancedColor", void 0), e$3([e$4()], c$1.prototype, "objectAndLayerIdColorInstanced", void 0), e$3([e$4()], c$1.prototype, "instancedDoublePrecision", void 0), e$3([e$4()], c$1.prototype, "doublePrecisionRequiresObfuscation", void 0), e$3([e$4()], c$1.prototype, "writeDepth", void 0), e$3([e$4()], c$1.prototype, "transparent", void 0), e$3([e$4()], c$1.prototype, "enableOffset", void 0), e$3([e$4()], c$1.prototype, "cullAboveGround", void 0), e$3([e$4()], c$1.prototype, "snowCover", void 0), e$3([e$4()], c$1.prototype, "hasColorTextureTransform", void 0), e$3([e$4()], c$1.prototype, "hasEmissionTextureTransform", void 0), e$3([e$4()], c$1.prototype, "hasNormalTextureTransform", void 0), e$3([e$4()], c$1.prototype, "hasOcclusionTextureTransform", void 0), e$3([e$4()], c$1.prototype, "hasMetallicRoughnessTextureTransform", void 0), e$3([e$4({ constValue: true })], c$1.prototype, "hasVvInstancing", void 0), e$3([e$4({ constValue: false })], c$1.prototype, "useCustomDTRExponentForWater", void 0), e$3([e$4({ constValue: false })], c$1.prototype, "supportsTextureAtlas", void 0), e$3([e$4({ constValue: true })], c$1.prototype, "useFillLights", void 0);
function I$1(I2) {
  const R2 = new o$9(), { vertex: z2, fragment: k2, varyings: G2 } = R2;
  return v$2(z2, I2), R2.include(o$a), G2.add("vpos", "vec3"), R2.include(s$3, I2), R2.include(p$1, I2), R2.include(a$4, I2), I2.output !== h$1.Color && I2.output !== h$1.Alpha || (c$4(R2.vertex, I2), R2.include(o$6, I2), R2.include(r$3, I2), I2.offsetBackfaces && R2.include(e$1), I2.instancedColor && R2.attributes.add(O.INSTANCECOLOR, "vec4"), G2.add("vNormalWorld", "vec3"), G2.add("localvpos", "vec3"), I2.hasMultipassTerrain && G2.add("depth", "float"), R2.include(o$5, I2), R2.include(d$5, I2), R2.include(i$2, I2), R2.include(e$b, I2), z2.uniforms.add(new e$c("externalColor", (e2) => e2.externalColor)), G2.add("vcolorExt", "vec4"), z2.code.add(n$2`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I2.instancedColor ? "vcolorExt *= instanceColor;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n$2.float(t$3)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
          }
          ${I2.hasMultipassTerrain ? n$2`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), I2.output === h$1.Alpha && (R2.include(u$1, I2), R2.include(s$2, I2), R2.include(n$7, I2), k2.uniforms.add([new o$3("opacity", (e2) => e2.opacity), new o$3("layerOpacity", (e2) => e2.layerOpacity)]), I2.hasColorTexture && k2.uniforms.add(new f("tex", (e2) => e2.texture)), k2.include(i), k2.code.add(n$2`
      void main() {
        discardBySlice(vpos);
        ${I2.hasMultipassTerrain ? n$2`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${I2.hasColorTexture ? n$2`
                vec4 texColor = texture2D(tex, ${I2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                ${I2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$2`vec4 texColor = vec4(1.0);`}
        ${I2.hasVertexColors ? n$2`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$2`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)), I2.output === h$1.Color && (R2.include(u$1, I2), R2.include(p, I2), R2.include(n$1, I2), R2.include(s$2, I2), R2.include(I2.instancedDoublePrecision ? h$2 : v$3, I2), R2.include(n$7, I2), c$4(R2.fragment, I2), o$8(k2), h(k2), u(k2), k2.uniforms.add([z2.uniforms.get("localOrigin"), z2.uniforms.get("view"), new e$d("ambient", (e2) => e2.ambient), new e$d("diffuse", (e2) => e2.diffuse), new o$3("opacity", (e2) => e2.opacity), new o$3("layerOpacity", (e2) => e2.layerOpacity)]), I2.hasColorTexture && k2.uniforms.add(new f("tex", (e2) => e2.texture)), R2.include(x$1, I2), R2.include(n$6, I2), k2.include(i), R2.extensions.add("GL_OES_standard_derivatives"), a$3(k2), k2.code.add(n$2`
      void main() {
        discardBySlice(vpos);
        ${I2.hasMultipassTerrain ? n$2`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${I2.hasColorTexture ? n$2`
                vec4 texColor = texture2D(tex, ${I2.hasColorTextureTransform ? n$2`colorUV` : n$2`vuv0`});
                ${I2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : n$2`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I2.pbrMode === d$4.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I2.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : I2.spherical ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I2.hasVertexColors ? n$2`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n$2`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I2.snowCover ? n$2`albedo = mix(albedo, vec3(1), 0.9);` : n$2``}
        ${n$2`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I2.pbrMode === d$4.Normal || I2.pbrMode === d$4.Schematic ? I2.spherical ? n$2`vec3 normalGround = normalize(vpos + localOrigin);` : n$2`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : n$2``}
        ${I2.pbrMode === d$4.Normal || I2.pbrMode === d$4.Schematic ? n$2`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I2.snowCover ? n$2`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n$2`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I2.transparencyPassType === o$b.Color ? n$2`gl_FragColor = premultiplyAlpha(gl_FragColor);` : n$2``}
      }
    `)), R2.include(b$1, I2), R2;
}
const R$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: I$1 }, Symbol.toStringTag, { value: "Module" }));
class t extends _ {
  initializeConfiguration(i2, a2) {
    super.initializeConfiguration(i2, a2), a2.hasMetallicRoughnessTexture = false, a2.hasEmissionTexture = false, a2.hasOcclusionTexture = false, a2.hasNormalTexture = false, a2.hasModelTransformation = false, a2.normalType = i$4.Attribute, a2.doubleSidedMode = i$3.WindingOrder, a2.hasVertexTangents = false;
  }
  initializeProgram(e2) {
    return this._initializeProgram(e2, t.shader);
  }
}
t.shader = new t$5(R$1, () => import("./RealisticTree.glsl.js"));
class C extends d$6 {
  constructor(e2) {
    super(e2, P$1), this.supportsEdges = true, this._configuration = new c$1(), this._vertexBufferLayout = j$1(this.parameters), this._instanceBufferLayout = e2.instanced ? B(this.parameters) : null;
  }
  isVisibleForOutput(e2) {
    return e2 !== h$1.Shadow && e2 !== h$1.ShadowExludeHighlight && e2 !== h$1.ShadowHighlight || this.parameters.castShadows;
  }
  isVisible() {
    const t2 = this.parameters;
    if (!super.isVisible() || t2.layerOpacity === 0)
      return false;
    const { instanced: r2, hasVertexColors: a2, hasSymbolColors: s2, vvColorEnabled: i2 } = t2, o2 = r$2(r2) && r2.includes("color"), n2 = t2.colorMixMode === "replace", h2 = t2.opacity > 0, c2 = t2.externalColor && t2.externalColor[3] > 0;
    return a2 && (o2 || i2 || s2) ? !!n2 || h2 : a2 ? n2 ? c2 : h2 : o2 || i2 || s2 ? !!n2 || h2 : n2 ? c2 : h2;
  }
  getConfiguration(t2, r2) {
    return this._configuration.output = t2, this._configuration.hasNormalTexture = !!this.parameters.normalTextureId, this._configuration.hasColorTexture = !!this.parameters.textureId, this._configuration.hasVertexTangents = this.parameters.hasVertexTangents, this._configuration.instanced = !!this.parameters.instanced, this._configuration.instancedDoublePrecision = this.parameters.instancedDoublePrecision, this._configuration.vvSize = this.parameters.vvSizeEnabled, this._configuration.hasVerticalOffset = r$2(this.parameters.verticalOffset), this._configuration.hasScreenSizePerspective = r$2(this.parameters.screenSizePerspective), this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasSliceHighlight = this.parameters.hasSliceHighlight, this._configuration.alphaDiscardMode = this.parameters.textureAlphaMode, this._configuration.normalType = this.parameters.normals === "screenDerivative" ? i$4.ScreenDerivative : i$4.Attribute, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, r$2(this.parameters.customDepthTest) && (this._configuration.customDepthTest = this.parameters.customDepthTest), this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.cullFace = this.parameters.hasSlicePlane ? n$8.None : this.parameters.cullFace, this._configuration.hasMultipassTerrain = r2.multipassTerrain.enabled, this._configuration.cullAboveGround = r2.multipassTerrain.cullAboveGround, this._configuration.hasModelTransformation = r$2(this.parameters.modelTransformation), t2 !== h$1.Color && t2 !== h$1.Alpha || (this._configuration.hasVertexColors = this.parameters.hasVertexColors, this._configuration.hasSymbolColors = this.parameters.hasSymbolColors, this.parameters.treeRendering ? this._configuration.doubleSidedMode = i$3.WindingOrder : this._configuration.doubleSidedMode = this.parameters.doubleSided && this.parameters.doubleSidedType === "normal" ? i$3.View : this.parameters.doubleSided && this.parameters.doubleSidedType === "winding-order" ? i$3.WindingOrder : i$3.None, this._configuration.instancedColor = r$2(this.parameters.instanced) && this.parameters.instanced.includes("color"), this._configuration.receiveShadows = this.parameters.receiveShadows && this.parameters.shadowMappingEnabled, this._configuration.receiveAmbientOcclusion = !!r2.ssaoHelper.ready && this.parameters.receiveSSAO, this._configuration.vvColor = this.parameters.vvColorEnabled, this._configuration.textureAlphaPremultiplied = !!this.parameters.textureAlphaPremultiplied, this._configuration.pbrMode = this.parameters.usePBR ? this.parameters.isSchematic ? d$4.Schematic : d$4.Normal : d$4.Disabled, this._configuration.hasMetallicRoughnessTexture = !!this.parameters.metallicRoughnessTextureId, this._configuration.hasEmissionTexture = !!this.parameters.emissiveTextureId, this._configuration.hasOcclusionTexture = !!this.parameters.occlusionTextureId, this._configuration.offsetBackfaces = !(!this.parameters.transparent || !this.parameters.offsetTransparentBackfaces), this._configuration.transparencyPassType = r2.transparencyPassType, this._configuration.enableOffset = r2.camera.relativeElevation < S, this._configuration.snowCover = this.hasSnowCover(r2), this._configuration.hasColorTextureTransform = !!this.parameters.colorTextureTransformMatrix, this._configuration.hasNormalTextureTransform = !!this.parameters.normalTextureTransformMatrix, this._configuration.hasEmissionTextureTransform = !!this.parameters.emissiveTextureTransformMatrix, this._configuration.hasOcclusionTextureTransform = !!this.parameters.occlusionTextureTransformMatrix, this._configuration.hasMetallicRoughnessTextureTransform = !!this.parameters.metallicRoughnessTextureTransformMatrix), this._configuration;
  }
  hasSnowCover(t2) {
    return r$2(t2.weather) && t2.weatherVisible && t2.weather.type === "snowy" && t2.weather.snowCover === "enabled";
  }
  intersect(c2, u2, m2, p2, d2, f2, g$12) {
    if (r$2(this.parameters.verticalOffset)) {
      const e2 = p2.camera;
      o$2(k$1, m2[12], m2[13], m2[14]);
      let c3 = null;
      switch (p2.viewingMode) {
        case l$1.Global:
          c3 = z$1(U$1, k$1);
          break;
        case l$1.Local:
          c3 = r$9(U$1, G);
      }
      let u3 = 0;
      const g$13 = e$i(q, k$1, e2.eye), T2 = s$6(g$13), _2 = g(g$13, g$13, 1 / T2);
      let b2 = null;
      this.parameters.screenSizePerspective && (b2 = P$2(c3, _2)), u3 += L(e2, T2, this.parameters.verticalOffset, b2, this.parameters.screenSizePerspective), g(c3, c3, u3), S$1(z, c3, p2.transform.inverseRotation), d2 = e$i(V, d2, z), f2 = e$i(H, f2, z);
    }
    x$2(c2, u2, p2, d2, f2, y(p2.verticalOffset), g$12);
  }
  requiresSlot(e2, t2) {
    if (t2 === h$1.Color || t2 === h$1.Alpha || t2 === h$1.Depth || t2 === h$1.Normal || t2 === h$1.Shadow || t2 === h$1.ShadowHighlight || t2 === h$1.ShadowExludeHighlight || t2 === h$1.Highlight || t2 === h$1.ObjectAndLayerIdColor) {
      return e2 === (this.parameters.transparent ? this.parameters.writeDepth ? E$3.TRANSPARENT_MATERIAL : E$3.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : E$3.OPAQUE_MATERIAL) || e2 === E$3.DRAPED_MATERIAL || t2 === h$1.ObjectAndLayerIdColor;
    }
    return false;
  }
  createGLMaterial(e2) {
    return new R(e2);
  }
  createBufferWriter() {
    return new N(this._vertexBufferLayout, this._instanceBufferLayout);
  }
}
class R extends h$4 {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, e2), e2.material.parameters));
  }
  _updateParameters(e2) {
    const r2 = this._material.parameters;
    this.updateTexture(r2.textureId);
    const a2 = e2.camera.viewInverseTransposeMatrix;
    return o$2(r2.origin, a2[3], a2[7], a2[11]), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(r2.treeRendering ? t : _, e2);
  }
  _updateShadowState(e2) {
    e2.shadowMap.enabled !== this._material.parameters.shadowMappingEnabled && this._material.setParameters({ shadowMappingEnabled: e2.shadowMap.enabled });
  }
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e2.hasOccludees });
  }
  beginSlot(e2) {
    return this._output !== h$1.Color && this._output !== h$1.Alpha || (this._updateShadowState(e2), this._updateOccludeeState(e2)), this._updateParameters(e2);
  }
}
class D extends k$2 {
  constructor() {
    super(...arguments), this.initTextureTransparent = false, this.treeRendering = false, this.hasVertexTangents = false;
  }
}
const P$1 = new D();
class N {
  constructor(e2, t2) {
    this.vertexBufferLayout = e2, this.instanceBufferLayout = t2;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return e2.indices.get(O.POSITION).length;
  }
  write(e2, t2, r2, a2, s2) {
    m$1(r2, this.vertexBufferLayout, e2, t2, a2, s2);
  }
}
function j$1(e2) {
  const t2 = e2.textureId || e2.normalTextureId || e2.metallicRoughnessTextureId || e2.emissiveTextureId || e2.occlusionTextureId, r2 = T$1().vec3f(O.POSITION).vec3f(O.NORMAL);
  return e2.hasVertexTangents && r2.vec4f(O.TANGENT), t2 && r2.vec2f(O.UV0), e2.hasVertexColors && r2.vec4u8(O.COLOR), e2.hasSymbolColors && r2.vec4u8(O.SYMBOLCOLOR), has("enable-feature:objectAndLayerId-rendering") && r2.vec4u8(O.OBJECTANDLAYERIDCOLOR), r2;
}
function B(t2) {
  let r2 = T$1();
  return r2 = t2.instancedDoublePrecision ? r2.vec3f(O.MODELORIGINHI).vec3f(O.MODELORIGINLO).mat3f(O.MODEL).mat3f(O.MODELNORMAL) : r2.mat4f(O.MODEL).mat4f(O.MODELNORMAL), r$2(t2.instanced) && t2.instanced.includes("color") && (r2 = r2.vec4f(O.INSTANCECOLOR)), r$2(t2.instanced) && t2.instanced.includes("featureAttribute") && (r2 = r2.vec4f(O.INSTANCEFEATUREATTRIBUTE)), r$2(t2.instanced) && t2.instanced.includes("objectAndLayerIdColor") && (r2 = r2.vec4u8(O.OBJECTANDLAYERIDCOLOR_INSTANCED)), r2;
}
const V = n$4(), H = n$4(), G = r$6(0, 0, 1), U$1 = n$4(), z = n$4(), k$1 = n$4(), q = n$4();
function c(c2) {
  if (t$6(c2))
    return null;
  const m2 = r$2(c2.offset) ? c2.offset : c$7, e2 = r$2(c2.rotation) ? c2.rotation : 0, i2 = r$2(c2.scale) ? c2.scale : i$7, h2 = t$7(1, 0, 0, 0, 1, 0, m2[0], m2[1], 1), u2 = t$7(Math.cos(e2), -Math.sin(e2), 0, Math.sin(e2), Math.cos(e2), 0, 0, 0, 1), p2 = t$7(i2[0], 0, 0, 0, i2[1], 0, 0, 0, 1), j2 = e$9();
  return i$8(j2, u2, p2), i$8(j2, h2, j2), j2;
}
class s {
  constructor(s2, t2, e2, h2, i2) {
    this.name = s2, this.stageResources = t2, this.lodThreshold = e2, this.pivotOffset = h2, this.numberOfVertices = i2;
  }
}
const w = s$7.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
async function b(e2, t2) {
  const n2 = await v(e2, t2), s2 = await E(n2.textureDefinitions, t2);
  let a2 = 0;
  for (const r2 in s2)
    if (s2.hasOwnProperty(r2)) {
      const e3 = s2[r2];
      a2 += (e3 == null ? void 0 : e3.image) ? e3.image.width * e3.image.height * 4 : 0;
    }
  return { resource: n2, textures: s2, size: a2 + e$j(n2) };
}
async function v(r2, n2) {
  const s2 = r$2(n2) && n2.streamDataRequester;
  if (s2)
    return j(r2, s2, n2);
  const u2 = await b$3(U$3(r2, e$k(n2)));
  if (u2.ok === true)
    return u2.value.data;
  w$2(u2.error), A(u2.error);
}
async function j(e2, r2, n2) {
  const s2 = await b$3(r2.request(e2, "json", n2));
  if (s2.ok === true)
    return s2.value;
  w$2(s2.error), A(s2.error.details.url);
}
function A(e2) {
  throw new s$8("", `Request for object resource failed: ${e2}`);
}
function M(e2) {
  const t2 = e2.params, r2 = t2.topology;
  let n2 = true;
  switch (t2.vertexAttributes || (w.warn("Geometry must specify vertex attributes"), n2 = false), t2.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const e3 = t2.faces;
      if (e3) {
        if (t2.vertexAttributes)
          for (const r3 in t2.vertexAttributes) {
            const t3 = e3[r3];
            t3 && t3.values ? (t3.valueType != null && t3.valueType !== "UInt32" && (w.warn(`Unsupported indexed geometry indices type '${t3.valueType}', only UInt32 is currently supported`), n2 = false), t3.valuesPerElement != null && t3.valuesPerElement !== 1 && (w.warn(`Unsupported indexed geometry values per element '${t3.valuesPerElement}', only 1 is currently supported`), n2 = false)) : (w.warn(`Indexed geometry does not specify face indices for '${r3}' attribute`), n2 = false);
          }
      } else
        w.warn("Indexed geometries must specify faces"), n2 = false;
      break;
    }
    default:
      w.warn(`Unsupported topology '${r2}'`), n2 = false;
  }
  e2.params.material || (w.warn("Geometry requires material"), n2 = false);
  const s2 = e2.params.vertexAttributes;
  for (const a2 in s2) {
    s2[a2].values || (w.warn("Geometries with externally defined attributes are not yet supported"), n2 = false);
  }
  return n2;
}
function P(e2, t2) {
  const r2 = [], n2 = [], s2 = [], o2 = [], i2 = e2.resource, c2 = r$a.parse(i2.version || "1.0", "wosr");
  k.validate(c2);
  const m2 = i2.model.name, p2 = i2.model.geometries, d2 = i2.materialDefinitions, h2 = e2.textures;
  let w2 = 0;
  const b2 = new Map();
  for (let u2 = 0; u2 < p2.length; u2++) {
    const e3 = p2[u2];
    if (!M(e3))
      continue;
    const i3 = T(e3), c3 = e3.params.vertexAttributes, m3 = [];
    for (const t3 in c3) {
      const e4 = c3[t3], r3 = e4.values;
      m3.push([t3, { data: r3, size: e4.valuesPerElement, exclusive: true }]);
    }
    const v2 = [];
    if (e3.params.topology !== "PerAttributeArray") {
      const t3 = e3.params.faces;
      for (const e4 in t3)
        v2.push([e4, t3[e4].values]);
    }
    const j2 = h2 && h2[i3.texture];
    if (j2 && !b2.has(i3.texture)) {
      const { image: e4, params: t3 } = j2, r3 = new L$1(e4, t3);
      o2.push(r3), b2.set(i3.texture, r3);
    }
    const A2 = b2.get(i3.texture), P2 = A2 ? A2.id : void 0;
    let U2 = s2[i3.material] ? s2[i3.material][i3.texture] : null;
    if (!U2) {
      const e4 = d2[i3.material.substring(i3.material.lastIndexOf("/") + 1)].params;
      e4.transparency === 1 && (e4.transparency = 0);
      const r3 = j2 && j2.alphaChannelUsage, n3 = e4.transparency > 0 || r3 === "transparency" || r3 === "maskAndTransparency", o3 = j2 ? I(j2.alphaChannelUsage) : void 0, u3 = { ambient: e$l(e4.diffuse), diffuse: e$l(e4.diffuse), opacity: 1 - (e4.transparency || 0), transparent: n3, textureAlphaMode: o3, textureAlphaCutoff: 0.33, textureId: P2, initTextureTransparent: true, doubleSided: true, cullFace: n$8.None, colorMixMode: e4.externalColorMixMode || "tint", textureAlphaPremultiplied: !!j2 && !!j2.params.preMultiplyAlpha };
      r$2(t2) && t2.materialParamsMixin && Object.assign(u3, t2.materialParamsMixin), U2 = new C(u3), s2[i3.material] || (s2[i3.material] = {}), s2[i3.material][i3.texture] = U2;
    }
    n2.push(U2);
    const E2 = new d$7(m3, v2);
    w2 += v2.position ? v2.position.length : 0, r2.push(E2);
  }
  return { engineResources: [{ name: m2, stageResources: { textures: o2, materials: n2, geometries: r2 }, pivotOffset: i2.model.pivotOffset, numberOfVertices: w2, lodThreshold: null }], referenceBoundingBox: U(r2) };
}
function U(e2) {
  const t2 = A$2();
  return e2.forEach((e3) => {
    const r2 = e3.boundingInfo;
    r$2(r2) && (c$8(t2, r2.getBBMin()), c$8(t2, r2.getBBMax()));
  }), t2;
}
async function E(e2, t2) {
  const r2 = [];
  for (const o2 in e2) {
    const n3 = e2[o2], s3 = n3.images[0].data;
    if (!s3) {
      w.warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const i2 = n3.encoding + ";base64," + s3, u2 = "/textureDefinitions/" + o2, l2 = n3.channels === "rgba" ? n3.alphaChannelUsage || "transparency" : "none", c2 = { noUnpackFlip: true, wrap: { s: D$1.REPEAT, t: D$1.REPEAT }, preMultiplyAlpha: I(l2) !== C$1.Opaque }, m2 = r$2(t2) && t2.disableTextures ? Promise.resolve(null) : t$8(i2, t2);
    r2.push(m2.then((e3) => ({ refId: u2, image: e3, params: c2, alphaChannelUsage: l2 })));
  }
  const n2 = await Promise.all(r2), s2 = {};
  for (const a2 of n2)
    s2[a2.refId] = a2;
  return s2;
}
function I(e2) {
  switch (e2) {
    case "mask":
      return C$1.Mask;
    case "maskAndTransparency":
      return C$1.MaskBlend;
    case "none":
      return C$1.Opaque;
    default:
      return C$1.Blend;
  }
}
function T(e2) {
  const t2 = e2.params;
  return { id: 1, material: t2.material, texture: t2.texture, region: t2.texture };
}
const k = new r$a(1, 2, "wosr");
async function Y(s2, o2) {
  const i2 = Z(a$7(s2));
  if (i2.fileType === "wosr") {
    const e2 = await (o2.cache ? o2.cache.loadWOSR(i2.url, o2) : b(i2.url, o2)), { engineResources: t2, referenceBoundingBox: r2 } = P(e2, o2);
    return { lods: t2, referenceBoundingBox: r2, isEsriSymbolResource: false, isWosr: true };
  }
  const n2 = await (o2.cache ? o2.cache.loadGLTF(i2.url, o2, o2.usePBR) : m$2(new n$9(o2.streamDataRequester), i2.url, o2, o2.usePBR)), a2 = q$1(n2.model.meta, "ESRI_proxyEllipsoid"), u2 = n2.meta.isEsriSymbolResource && r$2(a2) && n2.meta.uri.includes("/RealisticTrees/");
  u2 && !n2.customMeta.esriTreeRendering && (n2.customMeta.esriTreeRendering = true, ie(n2, a2));
  const l2 = n2.meta.isEsriSymbolResource ? { usePBR: o2.usePBR, isSchematic: false, treeRendering: u2, mrrFactors: [0, 1, 0.2] } : { usePBR: o2.usePBR, isSchematic: false, treeRendering: false, mrrFactors: [0, 1, 0.5] }, c2 = __spreadProps(__spreadValues({}, o2.materialParamsMixin), { treeRendering: u2 }), { engineResources: m2, referenceBoundingBox: f2 } = ee(n2, l2, c2, o2.skipHighLods && i2.specifiedLodIndex == null ? { skipHighLods: true } : { skipHighLods: false, singleLodIndex: i2.specifiedLodIndex });
  return { lods: m2, referenceBoundingBox: f2, isEsriSymbolResource: n2.meta.isEsriSymbolResource, isWosr: false };
}
function Z(e2) {
  const t2 = e2.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  if (t2)
    return { fileType: "gltf", url: t2[1], specifiedLodIndex: t2[4] != null ? Number(t2[4]) : null };
  return e2.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: e2, specifiedLodIndex: null } : { fileType: "unknown", url: e2, specifiedLodIndex: null };
}
function ee(e2, t2, o2, i2) {
  const n2 = e2.model, a2 = new Array(), u2 = new Map(), l2 = new Map(), c$12 = n2.lods.length, m2 = A$2();
  return n2.lods.forEach((e3, f2) => {
    const d2 = i2.skipHighLods === true && (c$12 > 1 && f2 === 0 || c$12 > 3 && f2 === 1) || i2.skipHighLods === false && i2.singleLodIndex != null && f2 !== i2.singleLodIndex;
    if (d2 && f2 !== 0)
      return;
    const p2 = new Array();
    let g2 = 0;
    if (e3.parts.forEach((e4) => {
      const { geometry: t3, vertexCount: s2 } = te(e4);
      p2.push(t3), g2 += s2;
      const o3 = t3.boundingInfo;
      r$2(o3) && f2 === 0 && (c$8(m2, o3.getBBMin()), c$8(m2, o3.getBBMax()));
    }), d2)
      return;
    const h2 = new s(e3.name, { textures: new Array(), materials: new Array(), geometries: p2 }, e3.lodThreshold, [0, 0, 0], g2);
    a2.push(h2), e3.parts.forEach((e4) => {
      const i3 = e4.material + (e4.attributes.normal ? "_normal" : "") + (e4.attributes.color ? "_color" : "") + (e4.attributes.texCoord0 ? "_texCoord0" : "") + (e4.attributes.tangent ? "_tangent" : ""), a3 = n2.materials.get(e4.material), c$13 = r$2(e4.attributes.texCoord0), m3 = r$2(e4.attributes.normal);
      if (t$6(a3))
        return;
      const f3 = se(a3.alphaMode);
      if (!u2.has(i3)) {
        if (c$13) {
          const e5 = (e6, t3 = false) => {
            if (r$2(e6) && !l2.has(e6)) {
              const s3 = n2.textures.get(e6);
              r$2(s3) && l2.set(e6, new L$1(s3.data, t3 ? __spreadProps(__spreadValues({}, s3.parameters), { preMultiplyAlpha: t3 }) : s3.parameters));
            }
          };
          e5(a3.textureColor, f3 !== C$1.Opaque), e5(a3.textureNormal), e5(a3.textureOcclusion), e5(a3.textureEmissive), e5(a3.textureMetallicRoughness);
        }
        const s2 = a3.color[0] ** (1 / o$g), d3 = a3.color[1] ** (1 / o$g), p3 = a3.color[2] ** (1 / o$g), g3 = a3.emissiveFactor[0] ** (1 / o$g), x2 = a3.emissiveFactor[1] ** (1 / o$g), h3 = a3.emissiveFactor[2] ** (1 / o$g), b2 = r$2(a3.textureColor) && c$13 ? l2.get(a3.textureColor) : null;
        u2.set(i3, new C(__spreadValues(__spreadProps(__spreadValues({}, t2), { transparent: f3 === C$1.Blend, customDepthTest: e$f.Lequal, textureAlphaMode: f3, textureAlphaCutoff: a3.alphaCutoff, diffuse: [s2, d3, p3], ambient: [s2, d3, p3], opacity: a3.opacity, doubleSided: a3.doubleSided, doubleSidedType: "winding-order", cullFace: a3.doubleSided ? n$8.None : n$8.Back, hasVertexColors: !!e4.attributes.color, hasVertexTangents: !!e4.attributes.tangent, normals: m3 ? "default" : "screenDerivative", castShadows: true, receiveSSAO: true, textureId: r$2(b2) ? b2.id : void 0, colorMixMode: a3.colorMixMode, normalTextureId: r$2(a3.textureNormal) && c$13 ? l2.get(a3.textureNormal).id : void 0, textureAlphaPremultiplied: r$2(b2) && !!b2.params.preMultiplyAlpha, occlusionTextureId: r$2(a3.textureOcclusion) && c$13 ? l2.get(a3.textureOcclusion).id : void 0, emissiveTextureId: r$2(a3.textureEmissive) && c$13 ? l2.get(a3.textureEmissive).id : void 0, metallicRoughnessTextureId: r$2(a3.textureMetallicRoughness) && c$13 ? l2.get(a3.textureMetallicRoughness).id : void 0, emissiveFactor: [g3, x2, h3], mrrFactors: [a3.metallicFactor, a3.roughnessFactor, t2.mrrFactors[2]], isSchematic: false, colorTextureTransformMatrix: c(a3.colorTextureTransform), normalTextureTransformMatrix: c(a3.normalTextureTransform), occlusionTextureTransformMatrix: c(a3.occlusionTextureTransform), emissiveTextureTransformMatrix: c(a3.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: c(a3.metallicRoughnessTextureTransform) }), o2)));
      }
      if (h2.stageResources.materials.push(u2.get(i3)), c$13) {
        const e5 = (e6) => {
          r$2(e6) && h2.stageResources.textures.push(l2.get(e6));
        };
        e5(a3.textureColor), e5(a3.textureNormal), e5(a3.textureOcclusion), e5(a3.textureEmissive), e5(a3.textureMetallicRoughness);
      }
    });
  }), { engineResources: a2, referenceBoundingBox: m2 };
}
function te(e2) {
  const t2 = oe(e2.indices || e2.attributes.position.count, e2.primitiveType), s2 = e2.attributes.position.count, i2 = r$b(i$9, s2);
  t$9(i2, e2.attributes.position, e2.transform);
  const n2 = [[O.POSITION, { data: i2.typedBuffer, size: i2.elementCount, exclusive: true }]], a2 = [[O.POSITION, t2]];
  if (r$2(e2.attributes.normal)) {
    const r2 = r$b(i$9, s2);
    g$1(re, e2.transform), r$c(r2, e2.attributes.normal, re), n2.push([O.NORMAL, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O.NORMAL, t2]);
  }
  if (r$2(e2.attributes.tangent)) {
    const r2 = r$b(c$9, s2);
    g$1(re, e2.transform), r$d(r2, e2.attributes.tangent, re), n2.push([O.TANGENT, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O.TANGENT, t2]);
  }
  if (r$2(e2.attributes.texCoord0)) {
    const r2 = r$b(u$4, s2);
    n$a(r2, e2.attributes.texCoord0), n2.push([O.UV0, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O.UV0, t2]);
  }
  if (r$2(e2.attributes.color)) {
    const r2 = r$b(x$3, s2);
    if (e2.attributes.color.elementCount === 4)
      e2.attributes.color instanceof c$9 ? o$h(r2, e2.attributes.color, 255) : e2.attributes.color instanceof x$3 ? e$m(r2, e2.attributes.color) : e2.attributes.color instanceof L$2 && o$h(r2, e2.attributes.color, 1 / 256);
    else {
      t$a(r2, 255, 255, 255, 255);
      const t3 = new O$1(r2.buffer, 0, 4);
      e2.attributes.color instanceof i$9 ? f$3(t3, e2.attributes.color, 255) : e2.attributes.color instanceof O$1 ? e$n(t3, e2.attributes.color) : e2.attributes.color instanceof E$4 && f$3(t3, e2.attributes.color, 1 / 256);
    }
    n2.push([O.COLOR, { data: r2.typedBuffer, size: r2.elementCount, exclusive: true }]), a2.push([O.COLOR, t2]);
  }
  return { geometry: new d$7(n2, a2), vertexCount: s2 };
}
const re = e$e();
function se(e2) {
  switch (e2) {
    case "BLEND":
      return C$1.Blend;
    case "MASK":
      return C$1.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return C$1.Opaque;
  }
}
function oe(e2, t2) {
  switch (t2) {
    case E$5.TRIANGLES:
      return o$i(e2);
    case E$5.TRIANGLE_STRIP:
      return f$4(e2);
    case E$5.TRIANGLE_FAN:
      return i$a(e2);
  }
}
function ie(e2, t2) {
  for (let r2 = 0; r2 < e2.model.lods.length; ++r2) {
    const o2 = e2.model.lods[r2];
    for (const i2 of o2.parts) {
      const o3 = i2.attributes.normal;
      if (t$6(o3))
        return;
      const g2 = i2.attributes.position, x2 = g2.count, b2 = n$4(), T2 = n$4(), v2 = n$4(), M2 = r$b(x$3, x2), y2 = r$b(i$9, x2), j2 = h$5(e$o(), i2.transform);
      for (let s2 = 0; s2 < x2; s2++) {
        g2.getVec(s2, T2), o3.getVec(s2, b2), O$2(T2, T2, i2.transform), e$i(v2, T2, t2.center), i$b(v2, v2, t2.radius);
        const n2 = v2[2], a2 = s$6(v2), p2 = Math.min(0.45 + 0.55 * a2 * a2, 1);
        i$b(v2, v2, t2.radius), j2 !== null && O$2(v2, v2, j2), z$1(v2, v2), r2 + 1 !== e2.model.lods.length && e2.model.lods.length > 1 && A$3(v2, v2, b2, n2 > -1 ? 0.2 : Math.min(-4 * n2 - 3.8, 1)), y2.setVec(s2, v2), M2.set(s2, 0, 255 * p2), M2.set(s2, 1, 255 * p2), M2.set(s2, 2, 255 * p2), M2.set(s2, 3, 255);
      }
      i2.attributes.normal = y2, i2.attributes.color = M2;
    }
  }
}
var objectResourceUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  fetch: Y,
  gltfToEngineResources: ee,
  parseUrl: Z
});
export { B, C, E$1 as E, I$1 as I, Q, Y, c, e$2 as e, h, i$3 as i, n$1 as n, objectResourceUtils as o, p, u };
