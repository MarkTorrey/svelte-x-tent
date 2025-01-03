const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WaterSurface.glsl-DAfDxRv3.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./ColorMaterial.glsl-CBrdTPxl.js","./floatRGBA-Beo2b9N5.js","./VertexColor.glsl-Op97CNy8.js","./enums-BlUEVwJR.js","./Texture-BjUzSnJr.js","./interfaces-B8ge7Jg9.js","./BindType-BmZEZMMh.js","./Util-D3WFoRjI.js","./VertexAttribute-BnAa5VW0.js","./NormalAttribute.glsl-Bd6ePXD7.js","./basicInterfaces-DngWxyLO.js","./Indices-CDfjiMVj.js","./triangle-BHpEeeo3.js","./lineSegment-CMQTKrER.js","./doublePrecisionUtils-B0owpBza.js","./requestImageUtils-wGhnx8WQ.js","./renderState-DVuP8FS-.js","./orientedBoundingBox-BJjR6-FR.js","./spatialReferenceEllipsoidUtils-DfobcDUq.js","./computeTranslationToOriginAndRotation-B1gLm2pX.js","./BufferView-D7rTj7nO.js","./vec3f32-nZdmKIgz.js","./DoubleArray-UXJnwWGc.js","./InterleavedLayout-DapSkrn-.js","./types-D0PSWh4d.js","./triangulationUtils-WcX9UuuB.js","./earcut-DbRqQWyy.js","./deduplicate-BRGImMLi.js","./Octree-0huRLiDU.js","./axisAngleDegrees-s-Pc0vGJ.js","./NestedMap-DgiGbX8E.js","./boundedPlane-BL3qgVOW.js","./glUtil-C6KhMg1m.js","./VertexElementDescriptor-BOD-G50G.js","./LRUCache-pAqnhOsq.js","./VertexArrayObject-DSiuLT7k.js","./BufferObject-Dtd0vzOu.js","./visualVariableUtils-Cdb7Kq7r.js","./sizeVariableUtils-Cmcuvw-4.js","./UniqueValueRenderer-DoQjGRE5.js","./ColorStop-CqMXhorb.js","./colorRamps-4yJNyWKx.js","./jsonUtils-C2l4B_cE.js","./defaults-fOuW8gwA.js","./defaultsJSON-GKolV7NZ.js","./styleUtils-Dv2EsbEO.js","./jsonUtils-DGzEHX8a.js","./Version-DJsGRXWf.js","./FieldsIndex-Bjg3eA_S.js","./UnknownTimeZone-Cjv2gi-C.js","./OverrideHelper-ClkM4CZ1.js","./colorUtils-BlCLzs4t.js","./utils-BE8joJvK.js","./quantizationUtils-DeBnMDmu.js","./heatmapUtils-NTzr8GZp.js","./dehydratedFeatures-8ibN4_wD.js","./rendererConversion-CyrEaF0d.js","./edgeUtils-CBzT16wJ.js","./symbolColorUtils-4G6BTQRD.js","./OptimizedFeature-7juV2tZm.js","./OptimizedGeometry-vU5jWBvU.js","./SnappingCandidate-xj0n6h40.js","./centroid-DdLmOD72.js","./featureConversionUtils-DoC7B3A2.js","./OptimizedFeatureSet-Blu9Ckm7.js","./vec3-BZAVlszX.js","./Normals-CaeqCbr7.js","./CIMSymbolHelper-CY__-kW6.js","./BidiEngine-BwB1Df7c.js","./fontUtils-DnX1oK2e.js","./GeometryUtils-B2Qq2Dwi.js","./enums-BRXbslMp.js","./definitions-Y_v3njP4.js","./Rect-CUzevAry.js","./BoundingBox-DD1zHGe8.js","./cimSymbolUtils-CiZiLm4M.js","./utils-Cp7l-Qiq.js","./MeshComponent-DwgliqsF.js","./imageUtils-DfzNVhIJ.js","./MeshVertexAttributes-CZVfbXVy.js","./projection-DfoxLsLx.js","./vec4-CB19uIrr.js","./resourceUtils-NnmhFWEt.js","./webStyleSymbolUtils-NOGravR0.js","./devEnvironmentUtils-D6qIi8Ky.js","./PooledRBush-MooUbwUC.js","./popupUtils-vPBZ24BA.js","./geometryServiceUtils-WFbq5_gF.js","./LayerView-Dyxjvlzf.js"])))=>i.map(i=>d[i]);
import{a as wa}from"./devEnvironmentUtils-D6qIi8Ky.js";import{cm as St,dF as Ca,eI as Ma,pk as Et,pl as se,V as c,W as J,X as Ot,aE as Sa,Y as $t,Z as Ea,A as _t,dt as Oa,_ as _e,b8 as At,h8 as Ce,a8 as xe,ae as $a,aU as _a,dq as Me,lg as j,dd as G,cd as Aa,dV as We,df as ye,aB as Ra,jw as qe,dj as Na,dN as Rt,dD as we,du as Nt,dm as dt,dy as Pa,eG as za,aF as La,pm as Ga,pn as Ba,jn as Ge,cU as ut,eP as Pt,po as Ia,bV as zt,ah as Fa,bb as Lt,ey as Gt,kB as Se,U as ja,eD as Da,eE as ht,eF as Va,dG as Ua,dP as Wa,dI as mt,o2 as pt,jk as qa}from"./index-Cek7aMWl.js";import{e as q,t as ke,c as g,a as Bt,b as Ha,d as Ye,o as B,f as ae,g as oe,h as re,l as pe,s as N,P as ie,i as ka,n as It,j as Ya,k as Ja,m as W,p as Za,q as Ft,r as He,u as le,v as Je,w as Ae,x as jt,y as Dt,z as Ze,A as Xe,O as Ke,B as Re,C as Xa,R as be,D as L,E as Ka,F as Qa,G as eo,H as Vt,N as Ut,I as Wt,J as Ee,K as qt,L as Ht,M as kt,Q as Yt,S as H,T as to,U as ao,V as oo,W as ro,X as io,Y as no,Z as so,_ as lo,$ as co,a0 as uo,a1 as ho,a2 as mo,a3 as p,a4 as po,a5 as fo,a6 as Be,a7 as go,a8 as vo,a9 as xo,aa as bo,ab as To,ac as yo,ad as Jt,ae as Zt,af as Te}from"./VertexColor.glsl-Op97CNy8.js";import{c as wo,x as Xt,L as Co,i as Kt,O as Mo,E as So}from"./BufferView-D7rTj7nO.js";import{e as Eo,f as Oo,l as ft,o as gt}from"./vec3-BZAVlszX.js";import{n as $o,s as vt}from"./vec4-CB19uIrr.js";import{l as _o,n as Ao,g as X,o as Ro,h as No,t as Po,i as zo}from"./DefaultMaterial_COLOR_GAMMA-DHPqUhsG.js";import{r as Ie}from"./resourceUtils-NnmhFWEt.js";import{t as Lo}from"./NestedMap-DgiGbX8E.js";import{r as Qt}from"./Version-DJsGRXWf.js";import{l as Go}from"./Indices-CDfjiMVj.js";import{t as Bo}from"./requestImageUtils-wGhnx8WQ.js";import{t as ee}from"./orientedBoundingBox-BJjR6-FR.js";import{s as y,O as ea,e as k,n as fe}from"./basicInterfaces-DngWxyLO.js";import{e as C}from"./VertexAttribute-BnAa5VW0.js";import{H as Io}from"./InterleavedLayout-DapSkrn-.js";import{o as v,t as Qe,a as _,n as Fe,r as je}from"./NormalAttribute.glsl-Bd6ePXD7.js";import{o as r,n as ta}from"./interfaces-B8ge7Jg9.js";import{n as U}from"./symbolColorUtils-4G6BTQRD.js";import{a as Ne}from"./BindType-BmZEZMMh.js";import{S as et,_ as tt,h as Fo,o as jo}from"./renderState-DVuP8FS-.js";import{D as Oe,G as Do,t as Vo,_ as Uo,f as Wo,O as xt}from"./enums-BlUEVwJR.js";import{e as qo,c as Ho}from"./Texture-BjUzSnJr.js";function ko(t){t.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(U.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(U.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(U.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(U.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function at(t){t.uniforms.add(new q("mainLightDirection",(e,a)=>a.lighting.mainLight.direction))}function Pe(t){t.uniforms.add(new q("mainLightIntensity",(e,a)=>a.lighting.mainLight.intensity))}function bt(t){at(t.fragment),Pe(t.fragment),t.fragment.code.add(r`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Yo(t){const e=t.fragment.code;e.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(r`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(r`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ot(t,e){const a=t.fragment.code;t.include(ke),e.pbrMode!==g.Normal&&e.pbrMode!==g.Schematic&&e.pbrMode!==g.Simplified&&e.pbrMode!==g.TerrainWithWater||(a.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==g.Normal&&e.pbrMode!==g.Schematic||(t.include(Yo),a.add(r`struct PBRShadingInfo
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
};`),a.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),a.add(r`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.add(r`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Mi(t,e){const a=t.fragment.code;t.include(ke),a.add(r`
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
  `),a.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.add(r`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.add(r`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),a.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)}const Jo=3e5,Tt=5e5;function Zo(t,e){const a=t.fragment;switch(a.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case A.None:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case A.View:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case A.WindingOrder:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:St(e.doubleSidedMode);case A.COUNT:}}var A;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(A||(A={}));function Xo({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:n,emissiveFactor:i,occlusionTexture:l}){return t==null&&e==null&&n==null&&(i==null||Ca(i,Ma))&&l==null&&(o==null||o===1)&&(a==null||a===1)}const aa=[1,1,.5],Ko=[0,.6,.2],Qo=[0,1,.2];function oa(t){t.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function ra(t,e){e.hasSymbolColors?(t.include(ko),t.attributes.add(C.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Bt("colorMixMode",a=>Ha[a.colorMixMode])),t.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ia(t){t.code.add(r`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function er(t,e){switch(e.output){case v.Shadow:case v.ShadowHighlight:case v.ShadowExcludeHighlight:case v.ViewshedShadow:t.fragment.include(ia),t.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function tr(t){t.fragment.code.add(r`
    #define discardOrAdjustAlpha(color) { if (color.a < ${r.float(Ye)}) { discard; } }
  `)}function ne(t,e){ar(t,e,new B("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function ar(t,e,a){const o=t.fragment;switch(e.alphaDiscardMode!==y.Mask&&e.alphaDiscardMode!==y.MaskBlend||o.uniforms.add(a),e.alphaDiscardMode){case y.Blend:return t.include(tr);case y.Opaque:o.code.add(r`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:o.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:t.fragment.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function na(t,e){const{vertex:a,fragment:o}=t,n=e.hasColorTexture&&e.alphaDiscardMode!==y.Opaque;switch(e.output){case v.Depth:ae(a,e),t.include(oe,e),t.include(ie,e),t.include(re,e),n&&o.uniforms.add(new N("tex",i=>i.texture)),a.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(ne,e),o.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case v.Shadow:case v.ShadowHighlight:case v.ShadowExcludeHighlight:case v.ViewshedShadow:case v.ObjectAndLayerIdColor:ae(a,e),t.include(oe,e),t.include(re,e),t.include(pe,e),t.include(er,e),t.include(ie,e),t.include(Ya,e),Ja(t),t.varyings.add("depth","float"),n&&o.uniforms.add(new N("tex",i=>i.texture)),a.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(ne,e),o.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===v.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}
          }
        `);break;case v.Normal:{ae(a,e),t.include(oe,e),t.include(Qe,e),t.include(It,e),t.include(re,e),t.include(pe,e),n&&o.uniforms.add(new N("tex",l=>l.texture)),e.normalType===_.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const i=e.normalType===_.Attribute||e.normalType===_.Compressed;a.code.add(r`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(ie,e),t.include(ne,e),o.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===_.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case v.Highlight:ae(a,e),t.include(oe,e),t.include(re,e),t.include(pe,e),n&&o.uniforms.add(new N("tex",i=>i.texture)),a.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(ie,e),t.include(ne,e),t.include(ka,e),o.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function or(t,e){const a=t.fragment;e.hasVertexTangents?(t.attributes.add(C.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===A.WindingOrder?a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),e.textureCoordinateType!==W.None&&(t.include(Za,e),a.uniforms.add(e.pbrTextureBindType===Ne.Pass?new N("normalTexture",o=>o.textureNormal):new Ft("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(a.uniforms.add(new He("scale",o=>o.scale??Et)),a.uniforms.add(new le("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??se))),a.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&a.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(r`return tangentSpace * rawNormal;
}`))}let te=class extends Sa{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([$t(()=>this.view.ready,e=>{var a;e&&((a=this.view._stage)==null||a.renderer.addRenderNode(this))},Ea)])}destroy(){var e,a;(a=(e=this.view._stage)==null?void 0:e.renderer)==null||a.removeRenderNode(this)}render(){throw new _t("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var o,n,i;const e=(n=(o=this._frameBuffer)==null?void 0:o.getTexture())==null?void 0:n.descriptor,a=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(i=a.fbo)==null||i.initializeAndBind(),a}bindRenderTarget(){var e,a;return(a=(e=this._frameBuffer)==null?void 0:e.fbo)==null||a.initializeAndBind(),this._frameBuffer}requestRender(e){var a;e===ea.UPDATE&&((a=this.view._stage)==null||a.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,a){this._context=a,this._frameBuffer=e.find(({name:o})=>o===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};c([J({constructOnly:!0})],te.prototype,"view",void 0),c([J({constructOnly:!0})],te.prototype,"consumes",void 0),c([J()],te.prototype,"produces",void 0),te=c([Ot("esri.views.3d.webgl.RenderNode")],te);const rr=te;let ir=class extends Je{constructor(e,a){super(e,"vec2",Ne.Draw,(o,n,i,l)=>o.setUniform2fv(e,a(n,i,l)))}};const De=4;function nr(){const t=new Ae,e=t.fragment;t.include(jt);const a=(De+1)/2,o=1/(2*a*a);return e.include(Dt),e.uniforms.add(new N("depthMap",n=>n.depthTexture),new Ft("tex",n=>n.colorTexture),new ir("blurSize",n=>n.blurSize),new B("projScale",(n,i)=>{const l=Oa(i.camera.eye,i.camera.center);return l>5e4?Math.max(0,n.projScale-(l-5e4)):n.projScale})),e.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(r`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${r.int(De)}; r <= ${r.int(De)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const sr=Object.freeze(Object.defineProperty({__proto__:null,build:nr},Symbol.toStringTag,{value:"Module"}));let sa=class la extends Ze{initializeProgram(e){return new Xe(e.rctx,la.shader.get().build(),Ke)}initializePipeline(){return et({colorWrite:tt})}};sa.shader=new Re(sr,()=>_e(()=>import("./WaterSurface.glsl-DAfDxRv3.js").then(t=>t.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]),import.meta.url));const lr="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let cr=class extends ta{constructor(){super(...arguments),this.projScale=1}},dr=class extends cr{constructor(){super(...arguments),this.intensity=1}},ur=class extends ta{},hr=class extends ur{constructor(){super(...arguments),this.blurSize=At()}};const yt=16;function mr(){const t=new Ae,e=t.fragment;return t.include(jt),t.include(Xa),e.include(Dt),e.uniforms.add(new B("radius",(a,o)=>rt(o.camera))).code.add(r`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new N("normalMap",a=>a.normalTexture),new N("depthMap",a=>a.depthTexture),new B("projScale",a=>a.projScale),new N("rnm",a=>a.noiseTexture),new He("rnmScale",(a,o)=>Ce(wt,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new B("intensity",a=>a.intensity),new He("screenSize",(a,o)=>Ce(wt,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(r`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${r.int(yt)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${r.int(yt)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function rt(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const wt=At(),pr=Object.freeze(Object.defineProperty({__proto__:null,build:mr,getRadius:rt},Symbol.toStringTag,{value:"Module"}));class ze extends Ze{initializeProgram(e){return new Xe(e.rctx,ze.shader.get().build(),Ke)}initializePipeline(){return et({colorWrite:tt})}}ze.shader=new Re(pr,()=>_e(()=>import("./WaterSurface.glsl-DAfDxRv3.js").then(t=>t.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]),import.meta.url));const me=2;let K=class extends rr{constructor(t){super(t),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=xe(0),this._passParameters=new dr,this._drawParameters=new hr}initialize(){const t=Uint8Array.from(atob(lr),a=>a.charCodeAt(0)),e=new qo;e.wrapMode=Oe.CLAMP_TO_EDGE,e.pixelFormat=Do.RGB,e.wrapMode=Oe.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Ho(this.renderingContext,e,t),this._ssaoTechnique=this.techniques.acquire(ze),this._blurTechnique=this.techniques.acquire(sa),this.addHandles($t(()=>this.isEnabled(),()=>this._enableTime=xe(0)))}destroy(){this._passParameters.noiseTexture=$a(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(t){const e=this.bindParameters,a=t.find(({name:Y})=>Y==="normals"),o=a==null?void 0:a.getTexture(),n=a==null?void 0:a.getTexture(Vo),i=this.fboCache,l=e.camera,u=l.fullViewport[2],s=l.fullViewport[3],d=Math.round(u/me),f=Math.round(s/me);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=xe(performance.now()),this.requestRender(),i.acquire(d,f,"ssao",be.RED);this._enableTime===0&&(this._enableTime=xe(performance.now()));const h=this.renderingContext,x=this.view.qualitySettings.fadeDuration,T=l.relativeElevation,S=_a((Tt-T)/(Tt-Jo),0,1),b=x>0?Math.min(x,performance.now()-this._enableTime)/x:1,w=b*S;this._passParameters.normalTexture=o,this._passParameters.depthTexture=n,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*fr/rt(l)**6*w;const M=i.acquire(u,s,"ssao input",be.RG);h.unbindTexture(M.fbo.colorTexture),h.bindFramebuffer(M.fbo),h.setViewport(0,0,u,s),h.bindTechnique(this._ssaoTechnique,e,this._passParameters,this._drawParameters),h.screen.draw();const O=i.acquire(d,f,"ssao blur",be.RED);h.unbindTexture(O.fbo.colorTexture),h.bindFramebuffer(O.fbo),this._drawParameters.colorTexture=M.getTexture(),Ce(this._drawParameters.blurSize,0,me/s),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,d,f),h.screen.draw(),M.release();const R=i.acquire(d,f,"ssao",be.RED);return h.unbindTexture(R.fbo.colorTexture),h.bindFramebuffer(R.fbo),h.setViewport(0,0,u,s),h.setClearColor(1,1,1,0),h.clear(Uo.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=O.getTexture(),Ce(this._drawParameters.blurSize,me/u,0),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,d,f),h.screen.draw(),h.setViewport4fv(l.fullViewport),O.release(),b<1&&this.requestRender(ea.UPDATE),R}};c([J()],K.prototype,"consumes",void 0),c([J()],K.prototype,"produces",void 0),c([J({constructOnly:!0})],K.prototype,"techniques",void 0),c([J({constructOnly:!0})],K.prototype,"isEnabled",void 0),K=c([Ot("esri.views.3d.webgl-engine.effects.ssao.SSAO")],K);const fr=.5;function it(t,e){const a=t.fragment;e.receiveAmbientOcclusion?(a.uniforms.add(new N("ssaoTex",(o,n)=>{var i;return(i=n.ssao)==null?void 0:i.getTexture()})),a.constants.add("blurSizePixelsInverse","float",1/me),a.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function gr(t,e){const a=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(a.uniforms.add(new q("lightingAmbientSH0",(n,i)=>Me(Ct,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),a.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(a.uniforms.add(new L("lightingAmbientSH_R",(n,i)=>j(D,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new L("lightingAmbientSH_G",(n,i)=>j(D,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new L("lightingAmbientSH_B",(n,i)=>j(D,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),a.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(a.uniforms.add(new q("lightingAmbientSH0",(n,i)=>Me(Ct,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new L("lightingAmbientSH_R1",(n,i)=>j(D,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new L("lightingAmbientSH_G1",(n,i)=>j(D,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new L("lightingAmbientSH_B1",(n,i)=>j(D,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new L("lightingAmbientSH_R2",(n,i)=>j(D,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new L("lightingAmbientSH_G2",(n,i)=>j(D,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new L("lightingAmbientSH_B2",(n,i)=>j(D,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),a.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==g.Normal&&e.pbrMode!==g.Schematic||a.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ct=G(),D=Aa();function nt(t){t.constants.add("ambientBoostFactor","float",Ka)}function st(t){t.uniforms.add(new B("lightingGlobalFactor",(e,a)=>a.lighting.globalFactor))}function ca(t,e){const a=t.fragment;switch(t.include(it,e),e.pbrMode!==g.Disabled&&t.include(ot,e),t.include(gr,e),t.include(ke),a.code.add(r`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===g.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),nt(a),st(a),at(a),a.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Pe(a),a.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case g.Disabled:case g.WaterOnIntegratedMesh:case g.Water:t.include(bt),a.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case g.Normal:case g.Schematic:a.code.add(r`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?a.uniforms.add(new Qa("hasFillLights",(o,n)=>n.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new B("lightingSpecularStrength",(o,n)=>n.lighting.mainLight.specularStrength),new B("lightingEnvironmentStrength",(o,n)=>n.lighting.mainLight.environmentStrength)),a.code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==g.Schematic||e.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case g.Simplified:case g.TerrainWithWater:t.include(bt),a.code.add(r`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:St(e.pbrMode);case g.COUNT:}}class vr extends Je{constructor(e,a,o){super(e,"mat4",Ne.Draw,(n,i,l,u)=>n.setUniformMatrix4fv(e,a(i,l,u)),o)}}class xr extends Je{constructor(e,a,o){super(e,"mat4",Ne.Pass,(n,i,l)=>n.setUniformMatrix4fv(e,a(i,l)),o)}}function da(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new xr("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),ha(t))}function ua(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new vr("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),ha(t))}function ha(t){const e=t.fragment;e.include(ia),e.uniforms.add(new N("shadowMap",(a,o)=>o.shadowMap.depthTexture),new Bt("numCascades",(a,o)=>o.shadowMap.numCascades),new L("cascadeDistances",(a,o)=>o.shadowMap.cascadeDistances)),e.code.add(r`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function br(t,e){e.hasColorTextureTransform?(t.vertex.uniforms.add(new le("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??se)),t.varyings.add("colorUV","vec2"),t.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardColorUV(){}`)}function Tr(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??se)),t.varyings.add("normalUV","vec2"),t.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardNormalUV(){}`)}function yr(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??se)),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardEmissiveUV(){}`)}function wr(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??se)),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardOcclusionUV(){}`)}function Cr(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??se)),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function ma(t){t.include(eo),t.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(U.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(U.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(U.Replace)}) {
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

      if (mode == ${r.int(U.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(U.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Mr(t){const e=new Ae,{vertex:a,fragment:o,varyings:n}=e;if(ae(a,t),e.include(Vt),n.add("vpos","vec3"),e.include(pe,t),e.include(Ut,t),e.include(Wt,t),e.include(br,t),t.output===v.Color){e.include(Tr,t),e.include(yr,t),e.include(wr,t),e.include(Cr,t),Ee(a,t),e.include(Qe,t),e.include(oe,t);const i=t.normalType===_.Attribute||t.normalType===_.Compressed;i&&t.offsetBackfaces&&e.include(oa),e.include(or,t),e.include(It,t),t.instancedColor&&e.attributes.add(C.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),e.include(re,t),e.include(qt,t),e.include(ra,t),e.include(Ht,t),a.uniforms.add(new L("externalColor",l=>l.externalColor)),n.add("vcolorExt","vec4"),t.multipassEnabled&&n.add("depth","float"),a.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(Ye)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),e.include(ie,t),e.include(ca,t),e.include(it,t),e.include(ne,t),e.include(t.instancedDoublePrecision?da:ua,t),e.include(kt,t),Ee(o,t),o.uniforms.add(a.uniforms.get("localOrigin"),new q("ambient",l=>l.ambient),new q("diffuse",l=>l.diffuse),new B("opacity",l=>l.opacity),new B("layerOpacity",l=>l.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new N("tex",l=>l.texture)),e.include(Yt,t),e.include(ot,t),o.include(ma),e.include(Zo,t),nt(o),st(o),Pe(o),t.transparencyPassType===H.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),o.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?r`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===_.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===g.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?r`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===g.Normal||t.pbrMode===g.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===H.ColorAlpha?r`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return e.include(na,t),e}const Sr=Object.freeze(Object.defineProperty({__proto__:null,build:Mr},Symbol.toStringTag,{value:"Module"}));let Er=class extends ao{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=We(aa),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=k.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ye(0,0,0),this.instancedDoublePrecision=!1,this.normalType=_.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=ye(.2,.2,.2),this.diffuse=ye(.8,.8,.8),this.externalColor=Ra(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=G(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=fe.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=oo,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ro.Occlude,this.isDecoration=!1}},Ni=class extends to{constructor(){super(...arguments),this.origin=G(),this.slicePlaneLocalOrigin=this.origin}},lt=class pa extends Ze{initializeConfiguration(e,a){a.spherical=e.viewingMode===qe.Global,a.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,a.textureCoordinateType=a.hasColorTexture||a.hasMetallicRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture||a.hasNormalTexture?W.Default:W.None,a.objectAndLayerIdColorInstanced=a.instanced}initializeProgram(e){return this._initializeProgram(e,pa.shader)}_initializeProgram(e,a){return new Xe(e.rctx,a.get().build(this.configuration),Ke)}_makePipeline(e,a){const o=this.configuration,n=e===H.NONE,i=e===H.FrontFace;return et({blending:o.output===v.Color&&o.transparent?n?io:no(e):null,culling:$r(o)?Fo(o.cullFace):null,depthTest:{func:so(e,Or(o.customDepthTest))},depthWrite:(n||i)&&o.writeDepth?jo:null,drawBuffers:o.output===v.Depth?{buffers:[Wo.NONE]}:lo(e),colorWrite:tt,stencilWrite:o.hasOccludees?co:null,stencilTest:o.hasOccludees?a?uo:ho:null,polygonOffset:n||i?null:mo(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Or(t){return t===fe.Lequal?xt.LEQUAL:xt.LESS}function $r(t){return t.cullFace!==k.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}lt.shader=new Re(Sr,()=>_e(()=>import("./WaterSurface.glsl-DAfDxRv3.js").then(t=>t.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]),import.meta.url));class m extends po{constructor(){super(...arguments),this.output=v.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=A.None,this.pbrMode=g.Disabled,this.cullFace=k.None,this.transparencyPassType=H.NONE,this.normalType=_.Attribute,this.textureCoordinateType=W.None,this.customDepthTest=fe.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}c([p({count:v.COUNT})],m.prototype,"output",void 0),c([p({count:y.COUNT})],m.prototype,"alphaDiscardMode",void 0),c([p({count:A.COUNT})],m.prototype,"doubleSidedMode",void 0),c([p({count:g.COUNT})],m.prototype,"pbrMode",void 0),c([p({count:k.COUNT})],m.prototype,"cullFace",void 0),c([p({count:H.COUNT})],m.prototype,"transparencyPassType",void 0),c([p({count:_.COUNT})],m.prototype,"normalType",void 0),c([p({count:W.COUNT})],m.prototype,"textureCoordinateType",void 0),c([p({count:fe.COUNT})],m.prototype,"customDepthTest",void 0),c([p()],m.prototype,"spherical",void 0),c([p()],m.prototype,"hasVertexColors",void 0),c([p()],m.prototype,"hasSymbolColors",void 0),c([p()],m.prototype,"hasVerticalOffset",void 0),c([p()],m.prototype,"hasSlicePlane",void 0),c([p()],m.prototype,"hasSliceHighlight",void 0),c([p()],m.prototype,"hasColorTexture",void 0),c([p()],m.prototype,"hasMetallicRoughnessTexture",void 0),c([p()],m.prototype,"hasEmissionTexture",void 0),c([p()],m.prototype,"hasOcclusionTexture",void 0),c([p()],m.prototype,"hasNormalTexture",void 0),c([p()],m.prototype,"hasScreenSizePerspective",void 0),c([p()],m.prototype,"hasVertexTangents",void 0),c([p()],m.prototype,"hasOccludees",void 0),c([p()],m.prototype,"multipassEnabled",void 0),c([p()],m.prototype,"hasModelTransformation",void 0),c([p()],m.prototype,"offsetBackfaces",void 0),c([p()],m.prototype,"vvSize",void 0),c([p()],m.prototype,"vvColor",void 0),c([p()],m.prototype,"receiveShadows",void 0),c([p()],m.prototype,"receiveAmbientOcclusion",void 0),c([p()],m.prototype,"textureAlphaPremultiplied",void 0),c([p()],m.prototype,"instanced",void 0),c([p()],m.prototype,"instancedColor",void 0),c([p()],m.prototype,"objectAndLayerIdColorInstanced",void 0),c([p()],m.prototype,"instancedDoublePrecision",void 0),c([p()],m.prototype,"doublePrecisionRequiresObfuscation",void 0),c([p()],m.prototype,"writeDepth",void 0),c([p()],m.prototype,"transparent",void 0),c([p()],m.prototype,"enableOffset",void 0),c([p()],m.prototype,"cullAboveGround",void 0),c([p()],m.prototype,"snowCover",void 0),c([p()],m.prototype,"hasColorTextureTransform",void 0),c([p()],m.prototype,"hasEmissionTextureTransform",void 0),c([p()],m.prototype,"hasNormalTextureTransform",void 0),c([p()],m.prototype,"hasOcclusionTextureTransform",void 0),c([p()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0),c([p({constValue:!1})],m.prototype,"occlusionPass",void 0),c([p({constValue:!0})],m.prototype,"hasVvInstancing",void 0),c([p({constValue:!1})],m.prototype,"useCustomDTRExponentForWater",void 0),c([p({constValue:!1})],m.prototype,"supportsTextureAtlas",void 0),c([p({constValue:!0})],m.prototype,"useFillLights",void 0);function _r(t){const e=new Ae,{vertex:a,fragment:o,varyings:n}=e;return ae(a,t),e.include(Vt),n.add("vpos","vec3"),e.include(pe,t),e.include(Ut,t),e.include(Wt,t),t.output===v.Color&&(Ee(e.vertex,t),e.include(Qe,t),e.include(oe,t),t.offsetBackfaces&&e.include(oa),t.instancedColor&&e.attributes.add(C.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),t.multipassEnabled&&n.add("depth","float"),e.include(re,t),e.include(qt,t),e.include(ra,t),e.include(Ht,t),a.uniforms.add(new L("externalColor",i=>i.externalColor)),n.add("vcolorExt","vec4"),a.code.add(r`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${r.float(Ye)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?r`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===v.Color&&(e.include(ie,t),e.include(ca,t),e.include(it,t),e.include(ne,t),e.include(t.instancedDoublePrecision?da:ua,t),e.include(kt,t),Ee(e.fragment,t),at(o),nt(o),st(o),o.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new q("ambient",i=>i.ambient),new q("diffuse",i=>i.diffuse),new B("opacity",i=>i.opacity),new B("layerOpacity",i=>i.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new N("tex",i=>i.texture)),e.include(Yt,t),e.include(ot,t),o.include(ma),t.transparencyPassType===H.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),Pe(o),o.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?r`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===g.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?r`albedo = mix(albedo, vec3(1), 0.9);`:r``}
        ${r`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===g.Normal||t.pbrMode===g.Schematic?t.spherical?r`vec3 normalGround = normalize(vpos + localOrigin);`:r`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r``}
        ${t.pbrMode===g.Normal||t.pbrMode===g.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?r`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===H.ColorAlpha?r`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),e.include(na,t),e}const Ar=Object.freeze(Object.defineProperty({__proto__:null,build:_r},Symbol.toStringTag,{value:"Module"}));let fa=class ga extends lt{initializeConfiguration(e,a){super.initializeConfiguration(e,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=_.Attribute,a.doubleSidedMode=A.WindingOrder,a.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ga.shader)}};fa.shader=new Re(Ar,()=>_e(()=>import("./WaterSurface.glsl-DAfDxRv3.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]),import.meta.url));let $e=class extends fo{constructor(e){super(e,Pr),this.supportsEdges=!0,this.produces=new Map([[Be.OPAQUE_MATERIAL,a=>(Fe(a)||je(a))&&!this.parameters.transparent],[Be.TRANSPARENT_MATERIAL,a=>(Fe(a)||je(a))&&this.parameters.transparent&&this.parameters.writeDepth],[Be.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>(Fe(a)||je(a))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new m,this._vertexBufferLayout=zr(this.parameters)}isVisibleForOutput(e){return e!==v.Shadow&&e!==v.ShadowExcludeHighlight&&e!==v.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:a,hasVertexColors:o,hasSymbolColors:n,vvColor:i}=e,l=e.colorMixMode==="replace",u=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,d=a||i||n;return o&&d?l||u:o?l?s:u:d?l||u:l?s:u}getConfiguration(e,a){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?k.None:this.parameters.cullFace,this._configuration.multipassEnabled=a.multipassEnabled,this._configuration.cullAboveGround=a.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e===v.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=A.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?A.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?A.WindingOrder:A.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&a.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?g.Schematic:g.Normal:g.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=a.transparencyPassType,this._configuration.enableOffset=a.camera.relativeElevation<go,this._configuration.snowCover=this.hasSnowCover(a),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,a,o,n,i,l){if(this.parameters.verticalOffset!=null){const u=o.camera;Me(Ue,a[12],a[13],a[14]);let s=null;switch(o.viewingMode){case qe.Global:s=Rt(Mt,Ue);break;case qe.Local:s=Na(Mt,Br)}let d=0;const f=we(Ir,Ue,u.eye),h=Nt(f),x=dt(f,f,1/h);let T=null;this.parameters.screenSizePerspective&&(T=Pa(s,x)),d+=vo(u,h,this.parameters.verticalOffset,T??0,this.parameters.screenSizePerspective),dt(s,s,d),za(Ve,s,o.transform.inverseRotation),n=we(Lr,n,Ve),i=we(Gr,i,Ve)}xo(e,o,n,i,bo(o.verticalOffset),l)}createGLMaterial(e){return new Rr(e)}createBufferWriter(){return new To(this._vertexBufferLayout)}},Rr=class extends yo{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===v.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const a=this._material.parameters;this.updateTexture(a.textureId);const o=e.camera.viewInverseTransposeMatrix;return Me(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(a.treeRendering?fa:lt,e)}};class Nr extends Er{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Pr=new Nr;function zr(t){const e=Io().vec3f(C.POSITION);return t.normalType===_.Compressed?e.vec2i16(C.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(C.NORMAL),t.hasVertexTangents&&e.vec4f(C.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(C.UV0),t.hasVertexColors&&e.vec4u8(C.COLOR),t.hasSymbolColors&&e.vec4u8(C.SYMBOLCOLOR),La("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(C.OBJECTANDLAYERIDCOLOR),e}const Lr=G(),Gr=G(),Br=ye(0,0,1),Mt=G(),Ve=G(),Ue=G(),Ir=G();function he(t){if(t==null)return null;const e=t.offset!=null?t.offset:Ga,a=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:Ba,n=Ge(1,0,0,0,1,0,e[0],e[1],1),i=Ge(Math.cos(a),-Math.sin(a),0,Math.sin(a),Math.cos(a),0,0,0,1),l=Ge(o[0],0,0,0,o[1],0,0,0,1),u=Pt();return ut(u,i,l),ut(u,n,u),u}class Fr{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class jr{constructor(e,a,o){this.name=e,this.lodThreshold=a,this.pivotOffset=o,this.stageResources=new Fr,this.numberOfVertices=0}}const V=()=>ja.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Dr(t,e){const a=await Vr(t,e),o=await kr(a.textureDefinitions??{},e);let n=0;for(const i in o)if(o.hasOwnProperty(i)){const l=o[i];n+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:a,textures:o,size:n+Ia(a)}}async function Vr(t,e){const a=e==null?void 0:e.streamDataRequester;if(a)return Ur(t,a,e);const o=await zt(Fa(t,e));if(o.ok===!0)return o.value.data;Lt(o.error),va(o.error)}async function Ur(t,e,a){const o=await zt(e.request(t,"json",a));if(o.ok===!0)return o.value;Lt(o.error),va(o.error.details.url)}function va(t){throw new _t("",`Request for object resource failed: ${t}`)}function Wr(t){const e=t.params,a=e.topology;let o=!0;switch(e.vertexAttributes||(V().warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const l in e.vertexAttributes){const u=i[l];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(V().warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),o=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(V().warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),o=!1)):(V().warn(`Indexed geometry does not specify face indices for '${l}' attribute`),o=!1)}}else V().warn("Indexed geometries must specify faces"),o=!1;break}default:V().warn(`Unsupported topology '${a}'`),o=!1}t.params.material||(V().warn("Geometry requires material"),o=!1);const n=t.params.vertexAttributes;for(const i in n)n[i].values||(V().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function qr(t,e){var S,b;const a=new Array,o=new Array,n=new Array,i=new Lo,l=t.resource,u=Qt.parse(l.version||"1.0","wosr");Jr.validate(u);const s=l.model.name,d=l.model.geometries,f=l.materialDefinitions??{},h=t.textures;let x=0;const T=new Map;for(let w=0;w<d.length;w++){const M=d[w];if(!Wr(M))continue;const O=Yr(M),R=M.params.vertexAttributes,Y=[],Z=E=>{if(M.params.topology==="PerAttributeArray")return null;const I=M.params.faces;for(const F in I)if(F===E)return I[F].values;return null},ce=R[C.POSITION],ge=ce.values.length/ce.valuesPerElement;for(const E in R){const I=R[E],F=I.values,Le=Z(E)??Go(ge);Y.push([E,new ee(F,Le,I.valuesPerElement,!0)])}const P=O.texture,$=h&&h[P];if($&&!T.has(P)){const{image:E,parameters:I}=$,F=new Jt(E,I);o.push(F),T.set(P,F)}const ve=T.get(P),de=ve?ve.id:void 0,z=O.material;let ue=i.get(z,P);if(ue==null){const E=f[z.substring(z.lastIndexOf("/")+1)].params;E.transparency===1&&(E.transparency=0);const I=$&&$.alphaChannelUsage,F=E.transparency>0||I==="transparency"||I==="maskAndTransparency",Le=$?xa($.alphaChannelUsage):void 0,ct={ambient:We(E.diffuse),diffuse:We(E.diffuse),opacity:1-(E.transparency||0),transparent:F,textureAlphaMode:Le,textureAlphaCutoff:.33,textureId:de,initTextureTransparent:!0,doubleSided:!0,cullFace:k.None,colorMixMode:E.externalColorMixMode||"tint",textureAlphaPremultiplied:($==null?void 0:$.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ct,e.materialParameters),ue=new $e(ct),i.set(z,P,ue)}n.push(ue);const ya=new Zt(ue,Y);x+=((b=(S=Y.find(E=>E[0]===C.POSITION))==null?void 0:S[1])==null?void 0:b.indices.length)??0,a.push(ya)}return{engineResources:[{name:s,stageResources:{textures:o,materials:n,geometries:a},pivotOffset:l.model.pivotOffset,numberOfVertices:x,lodThreshold:null}],referenceBoundingBox:Hr(a)}}function Hr(t){const e=Gt();return t.forEach(a=>{const o=a.boundingInfo;o!=null&&(Se(e,o.bbMin),Se(e,o.bbMax))}),e}async function kr(t,e){const a=new Array;for(const i in t){const l=t[i],u=l.images[0].data;if(!u){V().warn("Externally referenced texture data is not yet supported");continue}const s=l.encoding+";base64,"+u,d="/textureDefinitions/"+i,f=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:Oe.REPEAT,t:Oe.REPEAT},preMultiplyAlpha:xa(f)!==y.Opaque},x=e!=null&&e.disableTextures?Promise.resolve(null):Bo(s,e);a.push(x.then(T=>({refId:d,image:T,parameters:h,alphaChannelUsage:f})))}const o=await Promise.all(a),n={};for(const i of o)n[i.refId]=i;return n}function xa(t){switch(t){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function Yr(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Jr=new Qt(1,2,"wosr");async function Zr(t,e){var h;const a=ba(wa(t));if(a.fileType==="wosr"){const x=await(e.cache?e.cache.loadWOSR(a.url,e):Dr(a.url,e)),{engineResources:T,referenceBoundingBox:S}=qr(x,e);return{lods:T,referenceBoundingBox:S,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(a.url,e,!!e.usePBR):_o(new Ao(e.streamDataRequester),a.url,e,e.usePBR)),n=(h=o.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,i=o.meta.isEsriSymbolResource&&n!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,ei(o,n));const l=!!e.usePBR,u=o.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:i,mrrFactors:[...Qo]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...aa]},s={...e.materialParameters,treeRendering:i},{engineResources:d,referenceBoundingBox:f}=Ta(o,u,s,e.skipHighLods&&a.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:a.specifiedLodIndex});return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function ba(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Ta(t,e,a,o){const n=t.model,i=new Array,l=new Map,u=new Map,s=n.lods.length,d=Gt();return n.lods.forEach((f,h)=>{const x=o.skipHighLods===!0&&(s>1&&h===0||s>3&&h===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&h!==o.singleLodIndex;if(x&&h!==0)return;const T=new jr(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(S=>{const b=x?new $e({}):Xr(n,S,T,e,a,l,u),{geometry:w,vertexCount:M}=Kr(S,b??new $e({})),O=w.boundingInfo;O!=null&&h===0&&(Se(d,O.bbMin),Se(d,O.bbMax)),b!=null&&(T.stageResources.geometries.push(w),T.numberOfVertices+=M)}),x||i.push(T)}),{engineResources:i,referenceBoundingBox:d}}function Xr(t,e,a,o,n,i,l){var T,S;const u=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=t.materials.get(e.material),d=e.attributes.texCoord0!=null,f=e.attributes.normal!=null;if(s==null)return null;const h=Qr(s.alphaMode);if(!i.has(u)){if(d){const P=($,ve=!1)=>{if($!=null&&!l.has($)){const de=t.textures.get($);if(de!=null){const z=de.data;l.set($,new Jt(Ie(z)?z.data:z,{...de.parameters,preMultiplyAlpha:!Ie(z)&&ve,encoding:Ie(z)&&z.encoding!=null?z.encoding:void 0}))}}};P(s.textureColor,h!==y.Opaque),P(s.textureNormal),P(s.textureOcclusion),P(s.textureEmissive),P(s.textureMetallicRoughness)}const b=s.color[0]**(1/X),w=s.color[1]**(1/X),M=s.color[2]**(1/X),O=s.emissiveFactor[0]**(1/X),R=s.emissiveFactor[1]**(1/X),Y=s.emissiveFactor[2]**(1/X),Z=s.textureColor!=null&&d?l.get(s.textureColor):null,ce=Xo({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),ge=((T=s.normalTextureTransform)==null?void 0:T.scale)!=null?(S=s.normalTextureTransform)==null?void 0:S.scale:Et;i.set(u,new $e({...o,transparent:h===y.Blend,customDepthTest:fe.Lequal,textureAlphaMode:h,textureAlphaCutoff:s.alphaCutoff,diffuse:[b,w,M],ambient:[b,w,M],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?k.None:k.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:f?_.Attribute:_.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:Z!=null?Z.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&d?l.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:Z!=null&&!!Z.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&d?l.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&d?l.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&d?l.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[O,R,Y],mrrFactors:ce?[...Ko]:[s.metallicFactor,s.roughnessFactor,o.mrrFactors[2]],isSchematic:ce,colorTextureTransformMatrix:he(s.colorTextureTransform),normalTextureTransformMatrix:he(s.normalTextureTransform),scale:[ge[0],ge[1]],occlusionTextureTransformMatrix:he(s.occlusionTextureTransform),emissiveTextureTransformMatrix:he(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:he(s.metallicRoughnessTextureTransform),...n}))}const x=i.get(u);if(a.stageResources.materials.push(x),d){const b=w=>{w!=null&&a.stageResources.textures.push(l.get(w))};b(s.textureColor),b(s.textureNormal),b(s.textureOcclusion),b(s.textureEmissive),b(s.textureMetallicRoughness)}return x}function Kr(t,e){const a=t.attributes.position.count,o=Ro(t.indices||a,t.primitiveType),n=Te(3*a),{typedBuffer:i,typedBufferStride:l}=t.attributes.position;Eo(n,i,t.transform,3,l);const u=[[C.POSITION,new ee(n,o,3,!0)]];if(t.attributes.normal!=null){const d=Te(3*a),{typedBuffer:f,typedBufferStride:h}=t.attributes.normal;Da(Q,t.transform),Oo(d,f,Q,3,h),ht(Q)&&ft(d,d),u.push([C.NORMAL,new ee(d,o,3,!0)])}if(t.attributes.tangent!=null){const d=Te(4*a),{typedBuffer:f,typedBufferStride:h}=t.attributes.tangent;Va(Q,t.transform),$o(d,f,Q,4,h),ht(Q)&&ft(d,d,4),u.push([C.TANGENT,new ee(d,o,4,!0)])}if(t.attributes.texCoord0!=null){const d=Te(2*a),{typedBuffer:f,typedBufferStride:h}=t.attributes.texCoord0;No(d,f,2,h),u.push([C.UV0,new ee(d,o,2,!0)])}const s=t.attributes.color;if(s!=null){const d=new Uint8Array(4*a);s.elementCount===4?s instanceof wo?vt(d,s,255):s instanceof Xt?Po(d,s):s instanceof Co&&vt(d,s,1/256):(d.fill(255),s instanceof Kt?gt(d,s.typedBuffer,255,4,s.typedBufferStride):t.attributes.color instanceof Mo?zo(d,s.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof So&&gt(d,s.typedBuffer,1/256,4,s.typedBufferStride)),u.push([C.COLOR,new ee(d,o,4,!0)])}return{geometry:new Zt(e,u),vertexCount:a}}const Q=Pt();function Qr(t){switch(t){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function ei(t,e){for(let a=0;a<t.model.lods.length;++a){const o=t.model.lods[a];for(const n of o.parts){const i=n.attributes.normal;if(i==null)return;const l=n.attributes.position,u=l.count,s=G(),d=G(),f=G(),h=new Uint8Array(4*u),x=new Float64Array(3*u),T=Ua(Wa(),n.transform);let S=0,b=0;for(let w=0;w<u;w++){l.getVec(w,d),i.getVec(w,s),mt(d,d,n.transform),we(f,d,e.center),pt(f,f,e.radius);const M=f[2],O=Nt(f),R=Math.min(.45+.55*O*O,1);pt(f,f,e.radius),T!==null&&mt(f,f,T),Rt(f,f),a+1!==t.model.lods.length&&t.model.lods.length>1&&qa(f,f,s,M>-1?.2:Math.min(-4*M-3.8,1)),x[S]=f[0],x[S+1]=f[1],x[S+2]=f[2],S+=3,h[b]=255*R,h[b+1]=255*R,h[b+2]=255*R,h[b+3]=255,b+=4}n.attributes.normal=new Kt(x),n.attributes.color=new Xt(h)}}}const Gi=Object.freeze(Object.defineProperty({__proto__:null,fetch:Zr,gltfToEngineResources:Ta,parseUrl:ba},Symbol.toStringTag,{value:"Module"}));export{Mr as H,_r as I,Pe as a,Ko as b,aa as c,Zr as d,Jo as e,er as f,it as g,Zo as h,nt as i,$e as j,st as k,A as l,bt as m,gr as n,Tt as o,ca as p,nr as q,Mi as r,he as s,at as t,Xo as u,mr as v,rt as w,ua as x,Gi as y,Ni as z};
