const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealisticTree.glsl-3n2GOgJt.js","./index-BdDnxAOC.js","./index-BvbKYc24.css","./Geometry-0zkcBCci.js","./NormalAttribute.glsl-BvcOWU6V.js","./interfaces-CJw7Cnm-.js","./VertexAttribute-Cq4MnHjR.js","./orientedBoundingBox-CDDAEjLg.js","./spatialReferenceEllipsoidUtils-dsdmGygT.js","./computeTranslationToOriginAndRotation-BpuGNDNV.js","./renderState-BKlWY516.js","./basicInterfaces-CZwQPxTp.js","./BindType-BmZEZMMh.js","./boundedPlane-CkcDH2eT.js","./lineSegment-BdB5sSqU.js","./Util-CMsZAslL.js","./AlphaCutoff-UcccL64p.js","./requestImageUtils-vR0S8NIj.js","./BufferView-DDmSnYbN.js","./Indices-DL2vOaxI.js","./triangle-DshsWHpa.js","./symbolColorUtils-DgKVAaAs.js"])))=>i.map(i=>d[i]);
import{aJ as Qe,kA as ye,kN as ee,jd as Pe,j3 as Ot,b4 as q,aA as N,iv as Nt,dL as et,mf as zt,s8 as k,_ as de,az as tt,is as se,W as l,X as oe,Y as $t,cM as ie,e5 as At,e9 as De,ec as It,ea as Lt,Z as Gt,bM as Pt,nn as Dt,kT as Ft,ak as jt,o3 as z,dG as Rt,a6 as Bt,pU as Vt,le as Fe,k1 as je,aQ as Ht,bo as Wt,aR as ve,b8 as Ut,aU as Re,aT as qt,iq as Yt,a$ as kt}from"./index-BdDnxAOC.js";import{H as Zt}from"./InterleavedLayout-D4EIJKmV.js";import{n as g,t as Ce,a as E,u as at,b as Be,o as fe,r as Xt}from"./NormalAttribute.glsl-BvcOWU6V.js";import{v as Jt,x as F,y as Kt,z as Ve,h as Qt,B as ot,n as ea,o as O,a as B,D as V,E as H,F as Q,k as y,P as W,G as ta,H as it,I as aa,J as oa,K as D,L as ia,M as rt,N as we,Q as ue,R as nt,S as st,T as ra,U as _e,V as me,W as na,X as sa,Y as ge,Z as re,_ as Y,c as _,$ as h,a0 as Ee,a1 as la,a2 as Se,a3 as le,j as ca,a4 as da,a5 as lt,a6 as ua,a7 as ct,a8 as dt,f as ce,a9 as ut,aa as mt,ab as ht,ac as pt,ad as vt,ae as ma,af as ha,ag as pa,ah as He,ai as va,aj as fa,ak as ga,al as xa,am as ba,an as Ta,ao as Ma,ap as wa,aq as d,ar as G,as as Sa,at as ya,A as xe,au as Ca,av as _a,aw as Ea,d as Oa,ax as Na,ay as za,az as $a}from"./Geometry-0zkcBCci.js";import{o as i,r as p,t as ft}from"./interfaces-CJw7Cnm-.js";import{o as P}from"./AlphaCutoff-UcccL64p.js";import{i as I,a as We,e as te,n as he}from"./basicInterfaces-CZwQPxTp.js";import{e as M}from"./VertexAttribute-Cq4MnHjR.js";import{o as Aa,r as Ia}from"./doublePrecisionUtils-B0owpBza.js";import{n as A}from"./symbolColorUtils-DgKVAaAs.js";import{a as Oe}from"./BindType-BmZEZMMh.js";import{B as Ne,g as ze,f as La}from"./renderState-BKlWY516.js";function Ga(t){t.vertex.code.add(i`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.int(A.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.int(A.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.int(A.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.int(A.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Po({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:n,emissiveFactor:r,occlusionTexture:s}){return t==null&&e==null&&n==null&&(r==null||Qe(r,ye))&&s==null&&(o==null||o===1)&&(a==null||a===1)}const Pa=ee(1,1,.5),Do=ee(0,.6,.2),Fo=ee(0,1,.2);function gt(t){t.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const Ue=Nt();function xt(t,e){const a=e.hasModelTransformation,o=e.instancedDoublePrecision;a&&(t.vertex.uniforms.add(new Jt("model",r=>r.modelTransformation??Pe)),t.vertex.uniforms.add(new F("normalLocalOriginFromModel",r=>(Ot(Ue,r.modelTransformation??Pe),Ue)))),e.instanced&&o&&(t.attributes.add(M.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(M.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(M.INSTANCEMODEL,"mat3"),t.attributes.add(M.INSTANCEMODELNORMAL,"mat3"));const n=t.vertex;o&&(n.include(Kt,e),n.uniforms.add(new Ve("viewOriginHi",(r,s)=>Aa(q(ne,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),ne)),new Ve("viewOriginLo",(r,s)=>Ia(q(ne,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),ne)))),n.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?i`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===g.Normal&&(Qt(n),n.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&n.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ne=N();function bt(t,e){e.hasSymbolColors?(t.include(Ga),t.attributes.add(M.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new ot("colorMixMode",a=>ea[a.colorMixMode])),t.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Tt(t){t.code.add(i`const float MAX_RGBA4_FLOAT =
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
}`)}function Da(t,e){switch(e.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:t.fragment.include(Tt),t.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function U(t,e){Fa(t,e,new O("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function Fa(t,e,a){const o=t.fragment;switch(e.alphaDiscardMode){case I.Blend:t.fragment.code.add(i`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.float(P)}) { discard; } }
      `);break;case I.Opaque:o.code.add(i`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case I.Mask:o.uniforms.add(a).code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case I.MaskBlend:o.uniforms.add(a).code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Mt(t,e){const{vertex:a,fragment:o}=t,n=e.hasColorTexture&&e.alphaDiscardMode!==I.Opaque,{output:r,normalType:s,hasColorTextureTransform:m}=e;switch(r){case g.Depth:B(a,e),t.include(V,e),t.include(W,e),t.include(H,e),n&&o.uniforms.add(new y("tex",u=>u.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(U,e),o.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:B(a,e),t.include(V,e),t.include(H,e),t.include(Q,e),t.include(Da,e),t.include(W,e),t.include(aa,e),oa(t),t.varyings.add("depth","float"),n&&o.uniforms.add(new y("tex",u=>u.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(U,e),o.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${r===g.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case g.Normal:{B(a,e),t.include(V,e),t.include(Ce,e),t.include(it,e),t.include(H,e),t.include(Q,e),n&&o.uniforms.add(new y("tex",f=>f.texture)),s===E.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const u=s===E.Attribute||s===E.Compressed;a.main.add(i`
          vpos = getVertexInLocalOriginSpace();
          ${u?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),t.include(W,e),t.include(U,e),o.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${s===E.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case g.Highlight:B(a,e),t.include(V,e),t.include(H,e),t.include(Q,e),n&&o.uniforms.add(new y("tex",u=>u.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(W,e),t.include(U,e),t.include(ta,e),o.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function ja(t,e){const a=t.fragment;switch(a.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case C.None:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case C.View:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case C.WindingOrder:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:et(e.doubleSidedMode);case C.COUNT:}}var C;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(C||(C={}));function Ra(t,e){const a=t.fragment;e.hasVertexTangents?(t.attributes.add(M.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===C.WindingOrder?a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),e.textureCoordinateType!==D.None&&(t.include(ia,e),a.uniforms.add(e.bindType===Oe.Pass?new y("normalTexture",o=>o.textureNormal):new rt("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(a.uniforms.add(new we("scale",o=>o.scale??zt)),a.uniforms.add(new F("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??k))),a.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&a.code.add(i`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(i`return tangentSpace * rawNormal;
}`))}const Ba=3e5,qe=5e5,be=4;function Va(){const t=new ue,e=t.fragment;t.include(nt);const a=(be+1)/2,o=1/(2*a*a);return e.include(st),e.uniforms.add(new y("depthMap",n=>n.depthTexture),new rt("tex",n=>n.colorTexture),new ra("blurSize",n=>n.blurSize),new O("projScale",(n,r)=>{const s=r.camera.distance;return s>5e4?Math.max(0,n.projScale-(s-5e4)):n.projScale})),e.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(be)}; r <= ${i.int(be)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const Ha=Object.freeze(Object.defineProperty({__proto__:null,build:Va},Symbol.toStringTag,{value:"Module"}));class Ye extends _e{constructor(e,a,o){super(e,a,new me(Ha,()=>de(()=>import("./RealisticTree.glsl-3n2GOgJt.js").then(n=>n.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url)),o)}initializePipeline(){return Ne({colorWrite:ze})}}const Wa="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Ua=class extends ft{constructor(){super(...arguments),this.projScale=1}},qa=class extends Ua{constructor(){super(...arguments),this.intensity=1}},Ya=class extends ft{},ka=class extends Ya{constructor(){super(...arguments),this.blurSize=tt()}};const ke=16;function Za(){const t=new ue,e=t.fragment;return t.include(nt),t.include(na),e.include(st),e.uniforms.add(new O("radius",(a,o)=>$e(o.camera))).code.add(i`vec3 sphere[16] = vec3[16](
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
}`),e.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new y("normalMap",a=>a.normalTexture),new y("depthMap",a=>a.depthTexture),new O("projScale",a=>a.projScale),new y("rnm",a=>a.noiseTexture),new we("rnmScale",(a,o)=>se(Ze,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new O("intensity",a=>a.intensity),new we("screenSize",(a,o)=>se(Ze,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.main.add(i`
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

      for(int i = 0; i < ${i.int(ke)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${i.int(ke)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),t}function $e(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Ze=tt(),Xa=Object.freeze(Object.defineProperty({__proto__:null,build:Za,getRadius:$e},Symbol.toStringTag,{value:"Module"}));let Xe=class extends _e{constructor(e,a,o){super(e,a,new me(Xa,()=>de(()=>import("./RealisticTree.glsl-3n2GOgJt.js").then(n=>n.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url)),o)}initializePipeline(){return Ne({colorWrite:ze})}};const K=2;let R=class extends sa{constructor(t){super(t),this.consumes={required:["normals"]},this.produces=ge.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new qa,this._drawParameters=new ka}initialize(){const t=Uint8Array.from(atob(Wa),a=>a.charCodeAt(0)),e=new At;e.wrapMode=De.CLAMP_TO_EDGE,e.pixelFormat=It.RGB,e.wrapMode=De.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Lt(this.renderingContext,e,t),this.techniques.precompile(Xe),this.techniques.precompile(Ye),this.addHandles(Gt(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=Pt(this._passParameters.noiseTexture)}render(t){const e=this.bindParameters,a=t.find(({name:S})=>S==="normals"),o=a==null?void 0:a.getTexture(),n=a==null?void 0:a.getTexture(Dt),r=this.fboCache,s=e.camera,m=s.fullViewport[2],u=s.fullViewport[3],f=Math.round(m/K),x=Math.round(u/K),b=this.techniques.acquire(Xe),T=this.techniques.acquire(Ye);if(!b.compiled||!T.compiled)return this._enableTime=ie(performance.now()),this.requestRender(We.UPDATE),b.release(),T.release(),r.acquire(f,x,ge.SSAO,re.RED);this._enableTime===0&&(this._enableTime=ie(performance.now()));const v=this.renderingContext,L=this.view.qualitySettings.fadeDuration,w=s.relativeElevation,ae=jt((qe-w)/(qe-Ba),0,1),Z=L>0?Math.min(L,performance.now()-this._enableTime)/L:1,pe=Z*ae;this._passParameters.normalTexture=o,this._passParameters.depthTexture=n,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ja/$e(s)**6*pe;const X=r.acquire(m,u,"ssao input",re.RG);v.bindFramebuffer(X.fbo),v.setViewport(0,0,m,u),v.bindTechnique(b,e,this._passParameters,this._drawParameters),v.screen.draw(),b.release();const J=r.acquire(f,x,"ssao blur",re.RED);v.bindFramebuffer(J.fbo),this._drawParameters.colorTexture=X.getTexture(),se(this._drawParameters.blurSize,0,K/u),v.bindTechnique(T,e,this._passParameters,this._drawParameters),v.setViewport(0,0,f,x),v.screen.draw(),X.release();const j=r.acquire(f,x,ge.SSAO,re.RED);return v.bindFramebuffer(j.fbo),v.setViewport(0,0,m,u),v.setClearColor(1,1,1,0),v.clear(Ft.COLOR),this._drawParameters.colorTexture=J.getTexture(),se(this._drawParameters.blurSize,K/m,0),v.bindTechnique(T,e,this._passParameters,this._drawParameters),v.setViewport(0,0,f,x),v.screen.draw(),T.release(),v.setViewport4fv(s.fullViewport),J.release(),Z<1&&this.requestRender(We.UPDATE),j}};l([oe()],R.prototype,"consumes",void 0),l([oe()],R.prototype,"produces",void 0),l([oe({constructOnly:!0})],R.prototype,"techniques",void 0),l([oe({constructOnly:!0})],R.prototype,"isEnabled",void 0),R=l([$t("esri.views.3d.webgl-engine.effects.ssao.SSAO")],R);const Ja=.5;function Ae(t,e){const a=t.fragment;e.receiveAmbientOcclusion?(a.uniforms.add(new y("ssaoTex",(o,n)=>{var r;return(r=n.ssao)==null?void 0:r.getTexture()})),a.constants.add("blurSizePixelsInverse","float",1/K),a.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ka(t,e){const a=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(a.uniforms.add(new Y("lightingAmbientSH0",(n,r)=>q(Je,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(a.uniforms.add(new _("lightingAmbientSH_R",(n,r)=>z($,r.lighting.sh.r[0],r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3])),new _("lightingAmbientSH_G",(n,r)=>z($,r.lighting.sh.g[0],r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3])),new _("lightingAmbientSH_B",(n,r)=>z($,r.lighting.sh.b[0],r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(a.uniforms.add(new Y("lightingAmbientSH0",(n,r)=>q(Je,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0])),new _("lightingAmbientSH_R1",(n,r)=>z($,r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3],r.lighting.sh.r[4])),new _("lightingAmbientSH_G1",(n,r)=>z($,r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3],r.lighting.sh.g[4])),new _("lightingAmbientSH_B1",(n,r)=>z($,r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3],r.lighting.sh.b[4])),new _("lightingAmbientSH_R2",(n,r)=>z($,r.lighting.sh.r[5],r.lighting.sh.r[6],r.lighting.sh.r[7],r.lighting.sh.r[8])),new _("lightingAmbientSH_G2",(n,r)=>z($,r.lighting.sh.g[5],r.lighting.sh.g[6],r.lighting.sh.g[7],r.lighting.sh.g[8])),new _("lightingAmbientSH_B2",(n,r)=>z($,r.lighting.sh.b[5],r.lighting.sh.b[6],r.lighting.sh.b[7],r.lighting.sh.b[8]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==h.Normal&&e.pbrMode!==h.Schematic||a.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Je=N(),$=Rt();function Qa(t){const e=t.fragment.code;e.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(i`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ie(t,e){const a=t.fragment.code;t.include(Ee),e.pbrMode!==h.Normal&&e.pbrMode!==h.Schematic&&e.pbrMode!==h.Simplified&&e.pbrMode!==h.TerrainWithWater||(a.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==h.Normal&&e.pbrMode!==h.Schematic||(t.include(Qa),a.add(i`struct PBRShadingInfo
{
float NdotV;
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
};`),a.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),a.add(i`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.add(i`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Wo(t,e){const a=t.fragment.code;t.include(Ee),a.add(i`
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
  `),a.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.add(i`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.add(i`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),a.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Le(t){t.constants.add("ambientBoostFactor","float",la)}function Ge(t){t.uniforms.add(new O("lightingGlobalFactor",(e,a)=>a.lighting.globalFactor))}function wt(t,e){const a=t.fragment;switch(t.include(Ae,e),e.pbrMode!==h.Disabled&&t.include(Ie,e),t.include(Ka,e),t.include(Ee),a.code.add(i`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===h.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Le(a),Ge(a),Se(a),a.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),le(a),a.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case h.Disabled:case h.WaterOnIntegratedMesh:case h.Water:t.include(da),a.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case h.Normal:case h.Schematic:a.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?a.uniforms.add(new ca("hasFillLights",(o,n)=>n.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new O("lightingSpecularStrength",(o,n)=>n.lighting.mainLight.specularStrength),new O("lightingEnvironmentStrength",(o,n)=>n.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==h.Schematic||e.hasColorTexture?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case h.Simplified:case h.TerrainWithWater:Se(a),le(a),a.code.add(i`const float roughnessTerrain = 0.5;
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
}`);break;default:et(e.pbrMode);case h.COUNT:}}class eo extends lt{constructor(e,a,o){super(e,"mat4",Oe.Draw,(n,r,s,m)=>n.setUniformMatrix4fv(e,a(r,s,m)),o)}}class to extends lt{constructor(e,a,o){super(e,"mat4",Oe.Pass,(n,r,s)=>n.setUniformMatrix4fv(e,a(r,s)),o)}}function St(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new to("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),Ct(t))}function yt(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new eo("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),Ct(t))}function Ct(t){const e=t.fragment;e.include(Tt),e.uniforms.add(new y("shadowMap",(a,o)=>o.shadowMap.depthTexture),new ot("numCascades",(a,o)=>o.shadowMap.numCascades),new _("cascadeDistances",(a,o)=>o.shadowMap.cascadeDistances)).code.add(i`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function ao(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new F("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??k)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardColorUV(){}`)}function oo(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new F("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??k)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardNormalUV(){}`)}function io(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new F("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??k)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardEmissiveUV(){}`)}function ro(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new F("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??k)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardOcclusionUV(){}`)}function no(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new F("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??k)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function _t(t){t.include(ua),t.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(A.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(A.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(A.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(A.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(A.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function so(t){const e=new ue,{vertex:a,fragment:o,varyings:n}=e,{output:r,normalType:s,offsetBackfaces:m,instancedColor:u,spherical:f,receiveShadows:x,snowCover:b,pbrMode:T,textureAlphaPremultiplied:v,instancedDoublePrecision:L,hasVertexColors:w,hasVertexTangents:ae,hasColorTexture:Z,hasNormalTexture:pe,hasNormalTextureTransform:X,hasColorTextureTransform:J}=t;if(B(a,t),e.include(ct),n.add("vpos","vec3"),e.include(Q,t),e.include(xt,t),e.include(dt,t),e.include(ao,t),!at(r))return e.include(Mt,t),e;e.include(oo,t),e.include(io,t),e.include(ro,t),e.include(no,t),ce(a,t),e.include(Ce,t),e.include(V,t);const j=s===E.Attribute||s===E.Compressed;return j&&m&&e.include(gt),e.include(Ra,t),e.include(it,t),u&&e.attributes.add(M.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),e.include(H,t),e.include(ut,t),e.include(bt,t),e.include(mt,t),a.uniforms.add(new _("externalColor",S=>S.externalColor)),n.add("vcolorExt","vec4"),t.terrainDepthTest&&n.add("depth","float"),a.main.add(i`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${p(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${i.float(P)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${p(j,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${p(ae,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${p(j&&m,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${p(t.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),e.include(wt,t),e.include(Ae,t),e.include(U,t),e.include(L?St:yt,t),e.include(ht,t),e.include(W,t),e.include(pt,t),ce(o,t),o.uniforms.add(a.uniforms.get("localOrigin"),new Y("ambient",S=>S.ambient),new Y("diffuse",S=>S.diffuse),new O("opacity",S=>S.opacity),new O("layerOpacity",S=>S.layerOpacity)),Z&&o.uniforms.add(new y("tex",S=>S.texture)),e.include(vt,t),e.include(Ie,t),o.include(_t),e.include(ja,t),Le(o),Ge(o),le(o),o.main.add(i`
      discardBySlice(vpos);
      ${p(t.terrainDepthTest,"terrainDepthTest(depth);")}
      ${Z?i`
              vec4 texColor = texture(tex, ${J?"colorUV":"vuv0"});
              ${p(v,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${s===E.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${x?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(f,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${p(w,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${p(w,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${pe?`mat3 tangentSpace = computeTangentSpace(${ae?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${X?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${f?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${p(b,i`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${T===h.Normal||T===h.Schematic?i`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${p(b,i`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${b?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),e}const lo=Object.freeze(Object.defineProperty({__proto__:null,build:so},Symbol.toStringTag,{value:"Module"}));let co=class extends ma{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Pa,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=te.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ye,this.instancedDoublePrecision=!1,this.normalType=E.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ee(.2,.2,.2),this.diffuse=ee(.8,.8,.8),this.externalColor=Bt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=he.Less,this.textureAlphaMode=I.Blend,this.textureAlphaCutoff=P,this.textureAlphaPremultiplied=!1,this.renderOccluded=ha.Occlude,this.isDecoration=!1}};class qo extends pa{constructor(){super(...arguments),this.origin=N(),this.slicePlaneLocalOrigin=this.origin}}let Et=class extends _e{constructor(e,a,o,n=new me(lo,()=>de(()=>import("./RealisticTree.glsl-3n2GOgJt.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url))){super(e,a,n,o),this.type="DefaultMaterialTechnique"}_makePipeline(e,a){const{oitPass:o,output:n,transparent:r,cullFace:s,customDepthTest:m,hasOccludees:u,enableOffset:f}=e,x=o===He.NONE,b=o===He.FrontFace;return Ne({blending:at(n)&&r?va(o):null,culling:mo(e)?La(s):null,depthTest:{func:fa(o,uo(m))},depthWrite:ga(e),drawBuffers:n===g.Depth?{buffers:[Vt.NONE]}:xa(o,n),colorWrite:ze,stencilWrite:u?ba:null,stencilTest:u?a?Ta:Ma:null,polygonOffset:x||b?null:wa(f)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function uo(t){return t===he.Lequal?Fe.LEQUAL:Fe.LESS}function mo(t){return t.cullFace!==te.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}class c extends Sa{constructor(e,a){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=a,this.alphaDiscardMode=I.Opaque,this.doubleSidedMode=C.None,this.pbrMode=h.Disabled,this.cullFace=te.None,this.normalType=E.Attribute,this.customDepthTest=he.Less,this.emissionSource=G.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===G.Texture||this.hasOcclusionTexture||this.hasNormalTexture?D.Default:D.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}l([d({count:I.COUNT})],c.prototype,"alphaDiscardMode",void 0),l([d({count:C.COUNT})],c.prototype,"doubleSidedMode",void 0),l([d({count:h.COUNT})],c.prototype,"pbrMode",void 0),l([d({count:te.COUNT})],c.prototype,"cullFace",void 0),l([d({count:E.COUNT})],c.prototype,"normalType",void 0),l([d({count:he.COUNT})],c.prototype,"customDepthTest",void 0),l([d({count:G.COUNT})],c.prototype,"emissionSource",void 0),l([d()],c.prototype,"hasVertexColors",void 0),l([d()],c.prototype,"hasSymbolColors",void 0),l([d()],c.prototype,"hasVerticalOffset",void 0),l([d()],c.prototype,"hasSlicePlane",void 0),l([d()],c.prototype,"hasSliceHighlight",void 0),l([d()],c.prototype,"hasColorTexture",void 0),l([d()],c.prototype,"hasMetallicRoughnessTexture",void 0),l([d()],c.prototype,"hasOcclusionTexture",void 0),l([d()],c.prototype,"hasNormalTexture",void 0),l([d()],c.prototype,"hasScreenSizePerspective",void 0),l([d()],c.prototype,"hasVertexTangents",void 0),l([d()],c.prototype,"hasOccludees",void 0),l([d()],c.prototype,"hasModelTransformation",void 0),l([d()],c.prototype,"offsetBackfaces",void 0),l([d()],c.prototype,"vvSize",void 0),l([d()],c.prototype,"vvColor",void 0),l([d()],c.prototype,"receiveShadows",void 0),l([d()],c.prototype,"receiveAmbientOcclusion",void 0),l([d()],c.prototype,"textureAlphaPremultiplied",void 0),l([d()],c.prototype,"instanced",void 0),l([d()],c.prototype,"instancedColor",void 0),l([d()],c.prototype,"writeDepth",void 0),l([d()],c.prototype,"transparent",void 0),l([d()],c.prototype,"enableOffset",void 0),l([d()],c.prototype,"terrainDepthTest",void 0),l([d()],c.prototype,"cullAboveTerrain",void 0),l([d()],c.prototype,"snowCover",void 0),l([d()],c.prototype,"hasColorTextureTransform",void 0),l([d()],c.prototype,"hasEmissionTextureTransform",void 0),l([d()],c.prototype,"hasNormalTextureTransform",void 0),l([d()],c.prototype,"hasOcclusionTextureTransform",void 0),l([d()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0);function ho(t){const e=new ue,{vertex:a,fragment:o,varyings:n}=e,{output:r,offsetBackfaces:s,instancedColor:m,pbrMode:u,snowCover:f,spherical:x}=t,b=u===h.Normal||u===h.Schematic;if(B(a,t),e.include(ct),n.add("vpos","vec3"),e.include(Q,t),e.include(xt,t),e.include(dt,t),r===g.Color&&(ce(e.vertex,t),e.include(Ce,t),e.include(V,t),s&&e.include(gt),m&&e.attributes.add(M.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),t.terrainDepthTest&&n.add("depth","float"),e.include(H,t),e.include(ut,t),e.include(bt,t),e.include(mt,t),a.uniforms.add(new _("externalColor",T=>T.externalColor)),n.add("vcolorExt","vec4"),a.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${p(m,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${i.float(P)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${p(s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${p(t.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),r===g.Color){const{hasColorTexture:T,hasColorTextureTransform:v,receiveShadows:L}=t;e.include(wt,t),e.include(Ae,t),e.include(U,t),e.include(t.instancedDoublePrecision?St:yt,t),e.include(ht,t),e.include(W,t),e.include(pt,t),ce(e.fragment,t),Se(o),Le(o),Ge(o),o.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new Y("ambient",w=>w.ambient),new Y("diffuse",w=>w.diffuse),new O("opacity",w=>w.opacity),new O("layerOpacity",w=>w.layerOpacity)),T&&o.uniforms.add(new y("tex",w=>w.texture)),e.include(vt,t),e.include(Ie,t),o.include(_t),le(o),o.main.add(i`
      discardBySlice(vpos);
      ${p(t.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${T?`texture(tex, ${v?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(T,`${p(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${L?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":x?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${p(f,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${p(b,`vec3 normalGround = ${x?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${b?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${p(f,i`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${f?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return e.include(Mt,t),e}const po=Object.freeze(Object.defineProperty({__proto__:null,build:ho},Symbol.toStringTag,{value:"Module"}));class vo extends Et{constructor(e,a,o){super(e,a,o,new me(po,()=>de(()=>import("./RealisticTree.glsl-3n2GOgJt.js").then(n=>n.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url))),this.type="RealisticTreeTechnique"}}class ko extends ya{constructor(e,a){super(e,go),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[xe.OPAQUE_MATERIAL,o=>(Be(o)||fe(o))&&!this.parameters.transparent],[xe.TRANSPARENT_MATERIAL,o=>(Be(o)||fe(o))&&this.parameters.transparent&&this.parameters.writeDepth],[xe.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,o=>(Xt(o)||fe(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=bo(this.parameters),this._configuration=new c(a.spherical,a.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==g.Shadow&&e!==g.ShadowExcludeHighlight&&e!==g.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<P)return!1;const{hasInstancedColor:a,hasVertexColors:o,hasSymbolColors:n,vvColor:r}=e,s=a||r||n,m=e.colorMixMode==="replace",u=e.opacity>=P;if(o&&s)return m||u;const f=e.externalColor&&e.externalColor[3]>=P;return o?m?f:u:s?m||u:m?f:u}get hasEmissions(){return!!this.parameters.emissiveTextureId||!Qe(this.parameters.emissiveFactor,ye)}getConfiguration(e,a){const o=this.parameters,{treeRendering:n,doubleSided:r,doubleSidedType:s}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!n&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!n&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=o.verticalOffset!=null,this._configuration.hasScreenSizePerspective=o.screenSizePerspective!=null,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.hasSliceHighlight=o.hasSliceHighlight,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=n?E.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,o.customDepthTest!=null&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=a.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?te.None:o.cullFace,this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration.hasModelTransformation=!n&&o.modelTransformation!=null,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=n?C.WindingOrder:r&&s==="normal"?C.View:r&&s==="winding-order"?C.WindingOrder:C.None,this._configuration.instancedColor=o.hasInstancedColor,this._configuration.receiveShadows=o.receiveShadows&&o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&a.ssao!=null,this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?h.Schematic:h.Normal:h.Disabled,this._configuration.hasMetallicRoughnessTexture=!n&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=n?G.None:o.emissiveTextureId!=null?G.Texture:o.usePBR?G.Value:G.None,this._configuration.hasOcclusionTexture=!n&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=a.oitPass,this._configuration.enableOffset=a.camera.relativeElevation<Ca,this._configuration.snowCover=xo(a),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,a,o,n,r,s){if(this.parameters.verticalOffset!=null){const m=o.camera;q(Me,a[12],a[13],a[14]);let u=null;switch(o.viewingMode){case je.Global:u=Wt(Ke,Me);break;case je.Local:u=Ht(Ke,wo)}let f=0;const x=ve(So,Me,m.eye),b=Ut(x),T=Re(x,x,1/b);let v=null;this.parameters.screenSizePerspective&&(v=qt(u,T)),f+=_a(m,b,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),Re(u,u,f),Yt(Te,u,o.transform.inverseRotation),n=ve(To,n,Te),r=ve(Mo,r,Te)}Ea(e,o,n,r,Oa(o.verticalOffset),s)}createGLMaterial(e){return new fo(e)}createBufferWriter(){return new Na(this._vertexBufferLayout)}}class fo extends za{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const o=e.camera.viewInverseTransposeMatrix;return q(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(a.treeRendering?vo:Et,e)}}class go extends co{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function xo(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}function bo(t){const e=Zt().vec3f(M.POSITION);return t.normalType===E.Compressed?e.vec2i16(M.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(M.NORMAL),t.hasVertexTangents&&e.vec4f(M.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(M.UV0),t.hasVertexColors&&e.vec4u8(M.COLOR),t.hasSymbolColors&&e.vec4u8(M.SYMBOLCOLOR),$a()&&e.vec4u8(M.OBJECTANDLAYERIDCOLOR),e}const To=N(),Mo=N(),wo=kt(0,0,1),Ke=N(),Te=N(),Me=N(),So=N();export{ko as B,so as J,qo as N,ho as R,qe as a,Da as b,Ae as c,$e as d,Ba as e,Za as f,ja as g,Le as h,Va as i,C as j,Ka as k,Po as n,Do as o,wt as p,Wo as r,Fo as s,Pa as t,Ge as u,yt as x};
