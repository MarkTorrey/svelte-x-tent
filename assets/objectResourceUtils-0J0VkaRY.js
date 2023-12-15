import{a as ao}from"./devEnvironmentUtils-3qgG8Z2w.js";import{h7 as mt,d2 as ro,i_ as io,cU as no,_ as Ce,ec as ht,gX as pe,l as c,m as Qe,n as so,o as lo,eq as co,L as uo,f6 as mo,fZ as Z,cz as L,iS as Le,cN as ue,bu as ho,dS as Ne,cR as pt,cC as po,da as ft,cD as me,cV as vt,cG as et,cF as fo,gV as vo,D as go,n3 as xo,n4 as bo,n5 as Oe,J as tt,k as To,n6 as yo,bF as gt,O as Co,aZ as xt,s as Mo,e0 as bt,ju as fe,iY as ot,dz as wo,d3 as Eo,db as So,d5 as at,lO as rt,i5 as $o}from"./index-eSY5-lt-.js";import{e as Oo,E as _o,t as Ge,o as O,a as f,d as ee,b as te,c as oe,l as ae,s as z,P as W,f as Ao,g as Fe,h as Tt,i as P,j as Po,k as Ro,m as zo,n as re,p as Lo,q as yt,r as Ct,u as No,v as Me,w as Mt,x as wt,y as he,z as Be,A as De,B as Ie,C as we,D as jo,F as Go,G as H,H as Fo,I as Bo,R as _e,J as Do,K as b,L as Ve,M as Io,N as Vo,O as Et,Q as Ue,S as it,T as Uo,U as ie,V as Wo,W as St,X as $t,Y as Ot,Z as ve,_ as _t,$ as At,a0 as Pt,a1 as Rt,a2 as zt,a3 as ge,a4 as xe,a5 as Lt,a6 as qo,a7 as Yo,a8 as Jo,a9 as ko,aa as Zo,ab as Xo,ac as Ko,ad as m,ae as Ho,af as Qo,ag as ea,ah as ta,ai as oa,aj as aa,ak as ra,al as Nt,am as le}from"./VertexColor.glsl-czCP619T.js";import{c as ia,x as jt,L as na,i as Gt,O as sa,E as la}from"./BufferView-KywjVo63.js";import{r as ca,n as da,u as nt}from"./vec32-wV5-40u9.js";import{l as ua,n as ma,i as Y,o as ha,j as pa,k as fa,u as st,t as va,m as ga}from"./DefaultMaterial_COLOR_GAMMA-Ix8HIOzJ.js";import{r as Ae}from"./resourceUtils-U9HveiKh.js";import{t as xa}from"./NestedMap-9UouPomH.js";import{r as Ft}from"./Version-DuGO31mq.js";import{l as ba}from"./Indices-bOD3sMcK.js";import{t as Ta}from"./requestImageUtils-YgTUQT6h.js";import{t as J,I as Bt}from"./Geometry-TfLywN1e.js";import{s as y,e as I,n as ne}from"./basicInterfaces-IwaMq8O_.js";import{e as M}from"./VertexAttribute-h46lBfqy.js";import{H as ya}from"./InterleavedLayout-anHqp-yr.js";import{o as r,S as We,_ as qe,n as Dt,a as k,c as Ca,A as Ma,h as wa,l as Ea,b as Sa,d as $a,e as Oa}from"./OrderIndependentTransparency-zg-ZjAWW.js";import{n as D}from"./symbolColorUtils-L3SXnlGD.js";import{D as be,G as _a,_ as Aa,O as lt}from"./enums-8pc8f5Ge.js";import{e as Pa,T as Ra}from"./Texture-4vQG0qLG.js";function za(e,t){const o=e.fragment;switch(o.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case R.None:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case R.View:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case R.WindingOrder:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:mt(t.doubleSidedMode);case R.COUNT:}}var R;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(R||(R={}));function La({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:s,emissiveFactor:i,occlusionTexture:l}){return e==null&&t==null&&s==null&&(i==null||ro(i,io))&&l==null&&(a==null||a===1)&&(o==null||o===1||o===0)}const It=[1,1,.5],Na=[0,.6,.2],ja=[0,1,.2];function Vt(e){e.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ga(e){e.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(D.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(D.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(D.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(D.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ut(e,t){t.hasSymbolColors?(e.include(Ga),e.attributes.add(M.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Oo("colorMixMode",o=>_o[o.colorMixMode])),e.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Fa(e){e.fragment.code.add(r`
    #define discardOrAdjustAlpha(color) { if (color.a < ${r.float(Ge)}) { discard; } }
  `)}function q(e,t){Ba(e,t,new O("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function Ba(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==y.Mask&&t.alphaDiscardMode!==y.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case y.Blend:return e.include(Fa);case y.Opaque:a.code.add(r`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:a.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:e.fragment.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Wt(e,t){const{vertex:o,fragment:a}=e,s=t.hasColorTexture&&t.alphaDiscardMode!==y.Opaque;switch(t.output){case f.Depth:case f.Shadow:case f.ShadowHighlight:case f.ShadowExcludeHighlight:case f.ObjectAndLayerIdColor:ee(o,t),e.include(te,t),e.include(oe,t),e.include(ae,t),e.include(Po,t),e.include(W,t),e.include(Ro,t),zo(e),e.varyings.add("depth","float"),s&&a.uniforms.add(new z("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(q,t),a.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===f.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}
          }
        `);break;case f.Normal:{ee(o,t),e.include(te,t),e.include(Fe,t),e.include(Tt,t),e.include(oe,t),e.include(ae,t),s&&a.uniforms.add(new z("tex",l=>l.texture)),t.normalType===P.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===P.Attribute||t.normalType===P.Compressed;o.code.add(r`
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
        `),e.include(W,t),e.include(q,t),a.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===P.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case f.Highlight:ee(o,t),e.include(te,t),e.include(oe,t),e.include(ae,t),s&&a.uniforms.add(new z("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(W,t),e.include(q,t),e.include(Ao,t),a.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Da(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(M.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===R.WindingOrder?o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==re.None&&(e.include(Lo,t),o.uniforms.add(t.pbrTextureBindType===yt.Pass?new z("normalTexture",a=>a.textureNormal):new Ct("normalTexture",a=>a.textureNormal)),o.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}let Ia=class extends No{constructor(t,o){super(t,"vec2",yt.Draw,(a,s,i,l)=>a.setUniform2fv(t,o(s,i,l)))}};const Pe=4;function Va(){const e=new Me,t=e.fragment;e.include(Mt);const o=(Pe+1)/2,a=1/(2*o*o);return t.include(wt),t.uniforms.add(new z("depthMap",s=>s.depthTexture),new Ct("tex",s=>s.colorTexture),new Ia("blurSize",s=>s.blurSize),new O("projScale",(s,i)=>{const l=no(i.camera.eye,i.camera.center);return l>5e4?Math.max(0,s.projScale-(l-5e4)):s.projScale}),new he("nearFar",(s,i)=>i.camera.nearFar)),t.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(r`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${r.int(Pe)}; r <= ${r.int(Pe)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const Ua=Object.freeze(Object.defineProperty({__proto__:null,build:Va},Symbol.toStringTag,{value:"Module"}));let qt=class Yt extends Be{initializeProgram(t){return new De(t.rctx,Yt.shader.get().build(),Ie)}initializePipeline(){return We({colorWrite:qe})}};qt.shader=new we(Ua,()=>Ce(()=>import("./Pattern.glsl-QU10RXSC.js").then(e=>e.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]),import.meta.url));const Wa="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let qa=class extends Dt{constructor(){super(...arguments),this.projScale=1}},Ya=class extends qa{constructor(){super(...arguments),this.intensity=1}},Ja=class extends Dt{},ka=class extends Ja{constructor(){super(...arguments),this.blurSize=ht()}};const ct=16;function Za(){const e=new Me,t=e.fragment;return e.include(Mt),t.include(wt),e.include(jo),t.uniforms.add(new O("radius",(o,a)=>Ye(a.camera))),t.code.add(r`vec3 sphere[16];
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
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new he("nearFar",(o,a)=>a.camera.nearFar),new z("normalMap",o=>o.normalTexture),new z("depthMap",o=>o.depthTexture),new O("projScale",o=>o.projScale),new z("rnm",o=>o.noiseTexture),new he("rnmScale",(o,a)=>pe(dt,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new O("intensity",o=>o.intensity),new he("screenSize",(o,a)=>pe(dt,a.camera.fullWidth,a.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.code.add(r`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${r.int(ct)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${r.int(ct)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function Ye(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const dt=ht(),Xa=Object.freeze(Object.defineProperty({__proto__:null,build:Za,getRadius:Ye},Symbol.toStringTag,{value:"Module"}));class Ee extends Be{initializeProgram(t){return new De(t.rctx,Ee.shader.get().build(),Ie)}initializePipeline(){return We({colorWrite:qe})}}Ee.shader=new we(Xa,()=>Ce(()=>import("./Pattern.glsl-QU10RXSC.js").then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]),import.meta.url));var je;(function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(je||(je={}));const Q=2;let ce=class extends Go{constructor(e){super(e),this._context=null,this._passParameters=new Ya,this._drawParameters=new ka,this.produces=new Map([[H.SSAO,()=>this._produces()]])}_produces(){return this._enableTime!=null&&this._context!=null}consumes(){return this._produces()?Fo:Bo}initializeRenderContext(e){this._context=e,this.addHandles([lo(()=>{var t;return this.view.qualitySettings.ambientOcclusion||((t=this._context)==null?void 0:t.isFeatureEnabled(je.SSAO))},t=>t?this._enable():this._disable(),co)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=uo(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var o;if(this._enableTime!=null||!this._context)return;const e=Uint8Array.from(atob(Wa),a=>a.charCodeAt(0)),t=new Pa;t.wrapMode=be.CLAMP_TO_EDGE,t.pixelFormat=_a.RGB,t.wrapMode=be.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Ra(this._context.renderContext.rctx,t,e),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ee)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(qt)),this._enableTime=mo(0),(o=this._context)==null||o.requestRender()}renderNode(e,t,o){var _,G;const a=e.bindParameters,s=(_=a.linearDepth)==null?void 0:_.colorTexture,i=(G=o==null?void 0:o.normal)==null?void 0:G.colorTexture;if(this._enableTime==null||this._context==null||s==null||!i)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=e.time);const l=e.rctx,u=a.camera,n=this.view.qualitySettings.fadeDuration,p=n>0?Math.min(n,e.time-this._enableTime)/n:1;this._passParameters.normalTexture=i,this._passParameters.depthTexture=s,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ka/Ye(u)**6*p;const h=u.fullViewport[2],g=u.fullViewport[3],x=Math.round(h/Q),v=Math.round(g/Q),T=this._context.fbos,C=T.acquire(_e.RED,h,g);l.bindFramebuffer(C.fbo),l.setViewport(0,0,h,g),l.bindTechnique(this._ssaoTechnique,this._passParameters,a).bindDraw(this._drawParameters,a,this._passParameters),l.screen.draw();const S=l.bindTechnique(this._blurTechnique,this._passParameters,a);l.setViewport(0,0,x,v);const $=T.acquire(_e.RED,x,v);l.bindFramebuffer($.fbo),this._drawParameters.colorTexture=C.colorTexture,pe(this._drawParameters.blurSize,0,Q/g),S.bindDraw(this._drawParameters,a,this._passParameters),l.setViewport(0,0,x,v),l.screen.draw(),C.release();const A=T.acquire(_e.RED,x,v);return l.bindFramebuffer(A.fbo),l.setViewport(0,0,h,g),l.setClearColor(1,1,1,0),l.clear(Aa.COLOR_BUFFER_BIT),l.setViewport(0,0,x,v),this._drawParameters.colorTexture=$.colorTexture,pe(this._drawParameters.blurSize,Q/h,0),S.bindDraw(this._drawParameters,a,this._passParameters),l.screen.draw(),l.setViewport4fv(u.fullViewport),$.release(),p<1&&this._context.requestRender(),A}};c([Qe({constructOnly:!0})],ce.prototype,"view",void 0),c([Qe()],ce.prototype,"_context",void 0),ce=c([so("esri.views.3d.webgl-engine.effects.ssao.SSAO")],ce);const Ka=.5;function Je(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new z("ssaoTex",(a,s)=>{var i;return(i=s.ssao)==null?void 0:i.colorTexture})),o.constants.add("blurSizePixelsInverse","float",1/Q),o.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function ke(e){e.constants.add("ambientBoostFactor","float",Do)}function Ze(e){e.uniforms.add(new O("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function Jt(e,t){const o=e.fragment;switch(e.include(Je,t),t.pbrMode!==b.Disabled&&e.include(Ve,t),e.include(Io,t),e.include(Vo),o.code.add(r`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===b.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),ke(o),Ze(o),Et(o),o.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ue(o),o.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case b.Disabled:case b.WaterOnIntegratedMesh:case b.Water:e.include(it),o.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case b.Normal:case b.Schematic:o.code.add(r`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Uo("hasFillLights",(a,s)=>s.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new O("lightingSpecularStrength",(a,s)=>s.lighting.mainLight.specularStrength),new O("lightingEnvironmentStrength",(a,s)=>s.lighting.mainLight.environmentStrength)),o.code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==b.Schematic||t.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case b.Terrain:case b.TerrainWithWater:e.include(it),o.code.add(r`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
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
}`);break;default:mt(t.pbrMode);case b.COUNT:}}function Ha(e){e.vertex.uniforms.add(new ie("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix!=null?t.colorTextureTransformMatrix:Z())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Qa(e){e.vertex.uniforms.add(new ie("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix!=null?t.normalTextureTransformMatrix:Z())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function er(e){e.vertex.uniforms.add(new ie("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix!=null?t.emissiveTextureTransformMatrix:Z())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function tr(e){e.vertex.uniforms.add(new ie("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix!=null?t.occlusionTextureTransformMatrix:Z())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function or(e){e.vertex.uniforms.add(new ie("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix!=null?t.metallicRoughnessTextureTransformMatrix:Z())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Te(e){e.include(Wo),e.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(D.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(D.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(D.Replace)}) {
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

      if (mode == ${r.int(D.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(D.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function ar(e){const t=new Me,{vertex:o,fragment:a,varyings:s}=t;if(ee(o,e),t.include(St),s.add("vpos","vec3"),t.include(ae,e),t.include($t,e),t.include(Ot,e),e.hasColorTextureTransform&&t.include(Ha),e.output===f.Color||e.output===f.Alpha){e.hasNormalTextureTransform&&t.include(Qa),e.hasEmissionTextureTransform&&t.include(er),e.hasOcclusionTextureTransform&&t.include(tr),e.hasMetallicRoughnessTextureTransform&&t.include(or),ve(o,e),t.include(Fe,e),t.include(te,e);const i=e.normalType===P.Attribute||e.normalType===P.Compressed;i&&e.offsetBackfaces&&t.include(Vt),t.include(Da,e),t.include(Tt,e),e.instancedColor&&t.attributes.add(M.INSTANCECOLOR,"vec4"),s.add("vPositionLocal","vec3"),t.include(oe,e),t.include(_t,e),t.include(Ut,e),t.include(At,e),o.uniforms.add(new Pt("externalColor",l=>l.externalColor)),s.add("vcolorExt","vec4"),e.multipassEnabled&&s.add("depth","float"),o.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(Ge)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?r`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?r`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?r`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?r`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?r`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case f.Alpha:t.include(W,e),t.include(q,e),t.include(ge,e),a.uniforms.add(new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),a.include(Te),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?r`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case f.Color:t.include(W,e),t.include(Jt,e),t.include(Je,e),t.include(q,e),t.include(e.instancedDoublePrecision?Rt:zt,e),t.include(ge,e),ve(a,e),a.uniforms.add(o.uniforms.get("localOrigin"),new xe("ambient",i=>i.ambient),new xe("diffuse",i=>i.diffuse),new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),t.include(Lt,e),t.include(Ve,e),a.include(Te),t.include(za,e),ke(a),Ze(a),Ue(a),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===P.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?r`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===k.Color?r`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(Wt,e),t}const rr=Object.freeze(Object.defineProperty({__proto__:null,build:ar},Symbol.toStringTag,{value:"Module"}));let ir=class extends Yo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Le(It),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=I.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ue(0,0,0),this.instancedDoublePrecision=!1,this.normalType=P.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=ue(.2,.2,.2),this.diffuse=ue(.8,.8,.8),this.externalColor=ho(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=L(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=ne.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=Jo,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ko.Occlude,this.isDecoration=!1}},ri=class extends qo{constructor(){super(...arguments),this.origin=L(),this.slicePlaneLocalOrigin=this.origin}},Xe=class kt extends Be{initializeConfiguration(t,o){o.spherical=t.viewingMode===Ne.Global,o.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?re.Default:re.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,kt.shader)}_initializeProgram(t,o){return new De(t.rctx,o.get().build(this.configuration),Ie)}_convertDepthTestFunction(t){return t===ne.Lequal?lt.LEQUAL:lt.LESS}_makePipeline(t,o){const a=this.configuration,s=t===k.NONE,i=t===k.FrontFace;return We({blending:a.output!==f.Color&&a.output!==f.Alpha||!a.transparent?null:s?Ca:Ma(t),culling:nr(a)?wa(a.cullFace):null,depthTest:{func:Ea(t,this._convertDepthTestFunction(a.customDepthTest))},depthWrite:(s||i)&&a.writeDepth?Sa:null,colorWrite:qe,stencilWrite:a.hasOccludees?Zo:null,stencilTest:a.hasOccludees?o?Xo:Ko:null,polygonOffset:s||i?null:$a(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}};function nr(e){return e.cullFace!==I.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Xe.shader=new we(rr,()=>Ce(()=>import("./Pattern.glsl-QU10RXSC.js").then(e=>e.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]),import.meta.url));class d extends Ho{constructor(){super(...arguments),this.output=f.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=R.None,this.pbrMode=b.Disabled,this.cullFace=I.None,this.transparencyPassType=k.NONE,this.normalType=P.Attribute,this.textureCoordinateType=re.None,this.customDepthTest=ne.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}c([m({count:f.COUNT})],d.prototype,"output",void 0),c([m({count:y.COUNT})],d.prototype,"alphaDiscardMode",void 0),c([m({count:R.COUNT})],d.prototype,"doubleSidedMode",void 0),c([m({count:b.COUNT})],d.prototype,"pbrMode",void 0),c([m({count:I.COUNT})],d.prototype,"cullFace",void 0),c([m({count:k.COUNT})],d.prototype,"transparencyPassType",void 0),c([m({count:P.COUNT})],d.prototype,"normalType",void 0),c([m({count:re.COUNT})],d.prototype,"textureCoordinateType",void 0),c([m({count:ne.COUNT})],d.prototype,"customDepthTest",void 0),c([m()],d.prototype,"spherical",void 0),c([m()],d.prototype,"hasVertexColors",void 0),c([m()],d.prototype,"hasSymbolColors",void 0),c([m()],d.prototype,"hasVerticalOffset",void 0),c([m()],d.prototype,"hasSlicePlane",void 0),c([m()],d.prototype,"hasSliceHighlight",void 0),c([m()],d.prototype,"hasColorTexture",void 0),c([m()],d.prototype,"hasMetallicRoughnessTexture",void 0),c([m()],d.prototype,"hasEmissionTexture",void 0),c([m()],d.prototype,"hasOcclusionTexture",void 0),c([m()],d.prototype,"hasNormalTexture",void 0),c([m()],d.prototype,"hasScreenSizePerspective",void 0),c([m()],d.prototype,"hasVertexTangents",void 0),c([m()],d.prototype,"hasOccludees",void 0),c([m()],d.prototype,"multipassEnabled",void 0),c([m()],d.prototype,"hasModelTransformation",void 0),c([m()],d.prototype,"offsetBackfaces",void 0),c([m()],d.prototype,"vvSize",void 0),c([m()],d.prototype,"vvColor",void 0),c([m()],d.prototype,"receiveShadows",void 0),c([m()],d.prototype,"receiveAmbientOcclusion",void 0),c([m()],d.prototype,"textureAlphaPremultiplied",void 0),c([m()],d.prototype,"instanced",void 0),c([m()],d.prototype,"instancedColor",void 0),c([m()],d.prototype,"objectAndLayerIdColorInstanced",void 0),c([m()],d.prototype,"instancedDoublePrecision",void 0),c([m()],d.prototype,"doublePrecisionRequiresObfuscation",void 0),c([m()],d.prototype,"writeDepth",void 0),c([m()],d.prototype,"transparent",void 0),c([m()],d.prototype,"enableOffset",void 0),c([m()],d.prototype,"cullAboveGround",void 0),c([m()],d.prototype,"snowCover",void 0),c([m()],d.prototype,"hasColorTextureTransform",void 0),c([m()],d.prototype,"hasEmissionTextureTransform",void 0),c([m()],d.prototype,"hasNormalTextureTransform",void 0),c([m()],d.prototype,"hasOcclusionTextureTransform",void 0),c([m()],d.prototype,"hasMetallicRoughnessTextureTransform",void 0),c([m({constValue:!1})],d.prototype,"occlusionPass",void 0),c([m({constValue:!0})],d.prototype,"hasVvInstancing",void 0),c([m({constValue:!1})],d.prototype,"useCustomDTRExponentForWater",void 0),c([m({constValue:!1})],d.prototype,"supportsTextureAtlas",void 0),c([m({constValue:!0})],d.prototype,"useFillLights",void 0);function sr(e){const t=new Me,{vertex:o,fragment:a,varyings:s}=t;return ee(o,e),t.include(St),s.add("vpos","vec3"),t.include(ae,e),t.include($t,e),t.include(Ot,e),e.output!==f.Color&&e.output!==f.Alpha||(ve(t.vertex,e),t.include(Fe,e),t.include(te,e),e.offsetBackfaces&&t.include(Vt),e.instancedColor&&t.attributes.add(M.INSTANCECOLOR,"vec4"),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3"),e.multipassEnabled&&s.add("depth","float"),t.include(oe,e),t.include(_t,e),t.include(Ut,e),t.include(At,e),o.uniforms.add(new Pt("externalColor",i=>i.externalColor)),s.add("vcolorExt","vec4"),o.code.add(r`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${r.float(Ge)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?r`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===f.Alpha&&(t.include(W,e),t.include(q,e),t.include(ge,e),a.uniforms.add(new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),a.include(Te),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?r`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===f.Color&&(t.include(W,e),t.include(Jt,e),t.include(Je,e),t.include(q,e),t.include(e.instancedDoublePrecision?Rt:zt,e),t.include(ge,e),ve(t.fragment,e),Et(a),ke(a),Ze(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new xe("ambient",i=>i.ambient),new xe("diffuse",i=>i.diffuse),new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),t.include(Lt,e),t.include(Ve,e),a.include(Te),Ue(a),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?r`albedo = mix(albedo, vec3(1), 0.9);`:r``}
        ${r`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?e.spherical?r`vec3 normalGround = normalize(vpos + localOrigin);`:r`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r``}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?r`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===k.Color?r`fragColor = premultiplyAlpha(fragColor);`:r``}
      }
    `)),t.include(Wt,e),t}const lr=Object.freeze(Object.defineProperty({__proto__:null,build:sr},Symbol.toStringTag,{value:"Module"}));let Zt=class Xt extends Xe{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=P.Attribute,o.doubleSidedMode=R.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,Xt.shader)}};Zt.shader=new we(lr,()=>Ce(()=>import("./Pattern.glsl-QU10RXSC.js").then(e=>e.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]),import.meta.url));let ye=class extends Qo{constructor(t){super(t,ur),this.supportsEdges=!0,this._configuration=new d,this._vertexBufferLayout=mr(this.parameters)}isVisibleForOutput(t){return t!==f.Shadow&&t!==f.ShadowExcludeHighlight&&t!==f.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{hasInstancedColor:o,hasVertexColors:a,hasSymbolColors:s,vvColor:i}=t,l=t.colorMixMode==="replace",u=t.opacity>0,n=t.externalColor&&t.externalColor[3]>0,p=o||i||s;return a&&p?l||u:a?l?n:u:p?l||u:l?n:u}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?I.None:this.parameters.cullFace,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,t!==f.Color&&t!==f.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=R.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?R.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?R.WindingOrder:R.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=o.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?b.Schematic:b.Normal:b.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Oa,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,a,s,i,l){if(this.parameters.verticalOffset!=null){const u=a.camera;pt(ze,o[12],o[13],o[14]);let n=null;switch(a.viewingMode){case Ne.Global:n=ft(ut,ze);break;case Ne.Local:n=po(ut,fr)}let p=0;const h=me(vr,ze,u.eye),g=vt(h),x=et(h,h,1/g);let v=null;this.parameters.screenSizePerspective&&(v=fo(n,x)),p+=ea(u,g,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),et(n,n,p),vo(Re,n,a.transform.inverseRotation),s=me(hr,s,Re),i=me(pr,i,Re)}ta(t,a,s,i,oa(a.verticalOffset),l)}produces(t,o){return o===f.Color||o===f.Alpha||o===f.Depth||o===f.Normal||o===f.Shadow||o===f.ShadowHighlight||o===f.ShadowExcludeHighlight||o===f.Highlight||o===f.ObjectAndLayerIdColor?t===(this.parameters.transparent?this.parameters.writeDepth?H.TRANSPARENT_MATERIAL:H.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:H.OPAQUE_MATERIAL)||t===H.DRAPED_MATERIAL:!1}createGLMaterial(t){return new cr(t)}createBufferWriter(){return new aa(this._vertexBufferLayout)}},cr=class extends ra{constructor(t){super({...t,...t.material.parameters})}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){this._output!==f.Color&&this._output!==f.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const o=this._material.parameters;this.updateTexture(o.textureId);const a=t.camera.viewInverseTransposeMatrix;return pt(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?Zt:Xe,t)}},dr=class extends ir{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const ur=new dr;function mr(e){const t=ya().vec3f(M.POSITION);return e.normalType===P.Compressed?t.vec2i16(M.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(M.NORMAL),e.hasVertexTangents&&t.vec4f(M.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(M.UV0),e.hasVertexColors&&t.vec4u8(M.COLOR),e.hasSymbolColors&&t.vec4u8(M.SYMBOLCOLOR),go("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(M.OBJECTANDLAYERIDCOLOR),t}const hr=L(),pr=L(),fr=ue(0,0,1),ut=L(),Re=L(),ze=L(),vr=L();function K(e){if(e==null)return null;const t=e.offset!=null?e.offset:xo,o=e.rotation!=null?e.rotation:0,a=e.scale!=null?e.scale:bo,s=Oe(1,0,0,0,1,0,t[0],t[1],1),i=Oe(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),l=Oe(a[0],0,0,0,a[1],0,0,0,1),u=Z();return tt(u,i,l),tt(u,s,u),u}class gr{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class xr{constructor(t,o,a){this.name=t,this.lodThreshold=o,this.pivotOffset=a,this.stageResources=new gr,this.numberOfVertices=0}}const B=To.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function br(e,t){const o=await Tr(e,t),a=await Er(o.textureDefinitions??{},t);let s=0;for(const i in a)if(a.hasOwnProperty(i)){const l=a[i];s+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:o,textures:a,size:s+yo(o)}}async function Tr(e,t){const o=t==null?void 0:t.streamDataRequester;if(o)return yr(e,o,t);const a=await gt(Co(e,t));if(a.ok===!0)return a.value.data;xt(a.error),Kt(a.error)}async function yr(e,t,o){const a=await gt(t.request(e,"json",o));if(a.ok===!0)return a.value;xt(a.error),Kt(a.error.details.url)}function Kt(e){throw new Mo("",`Request for object resource failed: ${e}`)}function Cr(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(B.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const l in t.vertexAttributes){const u=i[l];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(B.warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),a=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(B.warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),a=!1)):(B.warn(`Indexed geometry does not specify face indices for '${l}' attribute`),a=!1)}}else B.warn("Indexed geometries must specify faces"),a=!1;break}default:B.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(B.warn("Geometry requires material"),a=!1);const s=e.params.vertexAttributes;for(const i in s)s[i].values||(B.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function Mr(e,t){var T,C;const o=new Array,a=new Array,s=new Array,i=new xa,l=e.resource,u=Ft.parse(l.version||"1.0","wosr");$r.validate(u);const n=l.model.name,p=l.model.geometries,h=l.materialDefinitions??{},g=e.textures;let x=0;const v=new Map;for(let S=0;S<p.length;S++){const $=p[S];if(!Cr($))continue;const A=Sr($),_=$.params.vertexAttributes,G=[],V=E=>{if($.params.topology==="PerAttributeArray")return null;const j=$.params.faces;for(const F in j)if(F===E)return j[F].values;return null},U=_[M.POSITION],Se=U.values.length/U.valuesPerElement;for(const E in _){const j=_[E],F=j.values,$e=V(E)??ba(Se);G.push([E,new J(F,$e,j.valuesPerElement,!0)])}const N=A.texture,w=g&&g[N];if(w&&!v.has(N)){const{image:E,parameters:j}=w,F=new Nt(E,j);a.push(F),v.set(N,F)}const Ke=v.get(N),to=Ke?Ke.id:void 0,se=A.material;let X=i.get(se,N);if(X==null){const E=h[se.substring(se.lastIndexOf("/")+1)].params;E.transparency===1&&(E.transparency=0);const j=w&&w.alphaChannelUsage,F=E.transparency>0||j==="transparency"||j==="maskAndTransparency",$e=w?Ht(w.alphaChannelUsage):void 0,He={ambient:Le(E.diffuse),diffuse:Le(E.diffuse),opacity:1-(E.transparency||0),transparent:F,textureAlphaMode:$e,textureAlphaCutoff:.33,textureId:to,initTextureTransparent:!0,doubleSided:!0,cullFace:I.None,colorMixMode:E.externalColorMixMode||"tint",textureAlphaPremultiplied:(w==null?void 0:w.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParameters&&Object.assign(He,t.materialParameters),X=new ye(He),i.set(se,N,X)}s.push(X);const oo=new Bt(X,G);x+=((C=(T=G.find(E=>E[0]===M.POSITION))==null?void 0:T[1])==null?void 0:C.indices.length)??0,o.push(oo)}return{engineResources:[{name:n,stageResources:{textures:a,materials:s,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:x,lodThreshold:null}],referenceBoundingBox:wr(o)}}function wr(e){const t=bt();return e.forEach(o=>{const a=o.boundingInfo;a!=null&&(fe(t,a.bbMin),fe(t,a.bbMax))}),t}async function Er(e,t){const o=new Array;for(const i in e){const l=e[i],u=l.images[0].data;if(!u){B.warn("Externally referenced texture data is not yet supported");continue}const n=l.encoding+";base64,"+u,p="/textureDefinitions/"+i,h=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",g={noUnpackFlip:!0,wrap:{s:be.REPEAT,t:be.REPEAT},preMultiplyAlpha:Ht(h)!==y.Opaque},x=t!=null&&t.disableTextures?Promise.resolve(null):Ta(n,t);o.push(x.then(v=>({refId:p,image:v,parameters:g,alphaChannelUsage:h})))}const a=await Promise.all(o),s={};for(const i of a)s[i.refId]=i;return s}function Ht(e){switch(e){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function Sr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const $r=new Ft(1,2,"wosr");async function Or(e,t){var g;const o=Qt(ao(e));if(o.fileType==="wosr"){const x=await(t.cache?t.cache.loadWOSR(o.url,t):br(o.url,t)),{engineResources:v,referenceBoundingBox:T}=Mr(x,t);return{lods:v,referenceBoundingBox:T,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):ua(new ma(t.streamDataRequester),o.url,t,t.usePBR)),s=(g=a.model.meta)==null?void 0:g.ESRI_proxyEllipsoid,i=a.meta.isEsriSymbolResource&&s!=null&&a.meta.uri.includes("/RealisticTrees/");i&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,Rr(a,s));const l=!!t.usePBR,u=a.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:i,mrrFactors:[...ja]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...It]},n={...t.materialParameters,treeRendering:i},{engineResources:p,referenceBoundingBox:h}=eo(a,u,n,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:p,referenceBoundingBox:h,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function Qt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function eo(e,t,o,a){const s=e.model,i=new Array,l=new Map,u=new Map,n=s.lods.length,p=bt();return s.lods.forEach((h,g)=>{const x=a.skipHighLods===!0&&(n>1&&g===0||n>3&&g===1)||a.skipHighLods===!1&&a.singleLodIndex!=null&&g!==a.singleLodIndex;if(x&&g!==0)return;const v=new xr(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(T=>{const C=x?new ye({}):_r(s,T,v,t,o,l,u),{geometry:S,vertexCount:$}=Ar(T,C??new ye({})),A=S.boundingInfo;A!=null&&g===0&&(fe(p,A.bbMin),fe(p,A.bbMax)),C!=null&&(v.stageResources.geometries.push(S),v.numberOfVertices+=$)}),x||i.push(v)}),{engineResources:i,referenceBoundingBox:p}}function _r(e,t,o,a,s,i,l){const u=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),n=e.materials.get(t.material),p=t.attributes.texCoord0!=null,h=t.attributes.normal!=null;if(n==null)return null;const g=Pr(n.alphaMode);if(!i.has(u)){if(p){const V=(U,Se=!1)=>{if(U!=null&&!l.has(U)){const N=e.textures.get(U);if(N!=null){const w=N.data;l.set(U,new Nt(Ae(w)?w.data:w,{...N.parameters,preMultiplyAlpha:!Ae(w)&&Se,encoding:Ae(w)&&w.encoding!=null?w.encoding:void 0}))}}};V(n.textureColor,g!==y.Opaque),V(n.textureNormal),V(n.textureOcclusion),V(n.textureEmissive),V(n.textureMetallicRoughness)}const v=n.color[0]**(1/Y),T=n.color[1]**(1/Y),C=n.color[2]**(1/Y),S=n.emissiveFactor[0]**(1/Y),$=n.emissiveFactor[1]**(1/Y),A=n.emissiveFactor[2]**(1/Y),_=n.textureColor!=null&&p?l.get(n.textureColor):null,G=La({normalTexture:n.textureNormal,metallicRoughnessTexture:n.textureMetallicRoughness,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,emissiveTexture:n.textureEmissive,emissiveFactor:n.emissiveFactor,occlusionTexture:n.textureOcclusion});i.set(u,new ye({...a,transparent:g===y.Blend,customDepthTest:ne.Lequal,textureAlphaMode:g,textureAlphaCutoff:n.alphaCutoff,diffuse:[v,T,C],ambient:[v,T,C],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?I.None:I.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?P.Attribute:P.ScreenDerivative,castShadows:!0,textureId:_!=null?_.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:n.textureNormal!=null&&p?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:_!=null&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:n.textureOcclusion!=null&&p?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:n.textureEmissive!=null&&p?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:n.textureMetallicRoughness!=null&&p?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[S,$,A],mrrFactors:G?[...Na]:[n.metallicFactor,n.roughnessFactor,a.mrrFactors[2]],isSchematic:G,colorTextureTransformMatrix:K(n.colorTextureTransform),normalTextureTransformMatrix:K(n.normalTextureTransform),occlusionTextureTransformMatrix:K(n.occlusionTextureTransform),emissiveTextureTransformMatrix:K(n.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:K(n.metallicRoughnessTextureTransform),...s}))}const x=i.get(u);if(o.stageResources.materials.push(x),p){const v=T=>{T!=null&&o.stageResources.textures.push(l.get(T))};v(n.textureColor),v(n.textureNormal),v(n.textureOcclusion),v(n.textureEmissive),v(n.textureMetallicRoughness)}return x}function Ar(e,t){const o=e.attributes.position.count,a=ha(e.indices||o,e.primitiveType),s=le(3*o),{typedBuffer:i,typedBufferStride:l}=e.attributes.position;ca(s,i,e.transform,3,l);const u=[[M.POSITION,new J(s,a,3,!0)]];if(e.attributes.normal!=null){const n=le(3*o),{typedBuffer:p,typedBufferStride:h}=e.attributes.normal;ot(de,e.transform),da(n,p,de,3,h),u.push([M.NORMAL,new J(n,a,3,!0)])}if(e.attributes.tangent!=null){const n=le(4*o),{typedBuffer:p,typedBufferStride:h}=e.attributes.tangent;ot(de,e.transform),pa(n,p,de,4,h),u.push([M.TANGENT,new J(n,a,4,!0)])}if(e.attributes.texCoord0!=null){const n=le(2*o),{typedBuffer:p,typedBufferStride:h}=e.attributes.texCoord0;fa(n,p,2,h),u.push([M.UV0,new J(n,a,2,!0)])}if(e.attributes.color!=null){const n=new Uint8Array(4*o);e.attributes.color.elementCount===4?e.attributes.color instanceof ia?st(n,e.attributes.color,255):e.attributes.color instanceof jt?va(n,e.attributes.color):e.attributes.color instanceof na&&st(n,e.attributes.color,1/256):(n.fill(255),e.attributes.color instanceof Gt?nt(n,e.attributes.color,255,4):e.attributes.color instanceof sa?ga(n,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof la&&nt(n,e.attributes.color,1/256,4)),u.push([M.COLOR,new J(n,a,4,!0)])}return{geometry:new Bt(t,u),vertexCount:o}}const de=wo();function Pr(e){switch(e){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function Rr(e,t){for(let o=0;o<e.model.lods.length;++o){const a=e.model.lods[o];for(const s of a.parts){const i=s.attributes.normal;if(i==null)return;const l=s.attributes.position,u=l.count,n=L(),p=L(),h=L(),g=new Uint8Array(4*u),x=new Float64Array(3*u),v=Eo(So(),s.transform);let T=0,C=0;for(let S=0;S<u;S++){l.getVec(S,p),i.getVec(S,n),at(p,p,s.transform),me(h,p,t.center),rt(h,h,t.radius);const $=h[2],A=vt(h),_=Math.min(.45+.55*A*A,1);rt(h,h,t.radius),v!==null&&at(h,h,v),ft(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&$o(h,h,n,$>-1?.2:Math.min(-4*$-3.8,1)),x[T]=h[0],x[T+1]=h[1],x[T+2]=h[2],T+=3,g[C]=255*_,g[C+1]=255*_,g[C+2]=255*_,g[C+3]=255,C+=4}s.attributes.normal=new Gt(x),s.attributes.color=new jt(g)}}}const ci=Object.freeze(Object.defineProperty({__proto__:null,fetch:Or,gltfToEngineResources:eo,parseUrl:Qt},Symbol.toStringTag,{value:"Module"}));export{ar as H,ye as I,ri as N,Or as X,Na as a,ke as b,Va as c,Ye as d,za as e,Za as f,sr as g,Ze as h,R as i,It as n,ci as o,Jt as p,K as r,Je as t,La as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Pattern.glsl-QU10RXSC.js","./index-eSY5-lt-.js","./index-5m03CWEM.css","./ColorMaterial.glsl-ymzfBx6s.js","./floatRGBA-9E5qKLsz.js","./VertexColor.glsl-czCP619T.js","./enums-8pc8f5Ge.js","./Texture-4vQG0qLG.js","./OrderIndependentTransparency-zg-ZjAWW.js","./basicInterfaces-IwaMq8O_.js","./VertexAttribute-h46lBfqy.js","./LRUCache-mFQSPLKh.js","./FramebufferObject-FWwprw92.js","./doublePrecisionUtils-HJiLm-yC.js","./Geometry-TfLywN1e.js","./Indices-bOD3sMcK.js","./triangle-kBLwI83x.js","./lineSegment-EzA48HN-.js","./requestImageUtils-YgTUQT6h.js","./orientedBoundingBox-frFJc-wI.js","./quat-7g9K7sUG.js","./BufferView-KywjVo63.js","./vec3f32-cbLeGFQ-.js","./DoubleArray-5XshLEpX.js","./interfaces-uUGzHEiK.js","./InterleavedLayout-anHqp-yr.js","./types-GBdbcYRa.js","./triangulationUtils-JJu18b-M.js","./earcut-wP_5WnqY.js","./deduplicate-QfgWUagS.js","./MeshTransform-sCiW0N8P.js","./NestedMap-9UouPomH.js","./Octree-zeHYSLTZ.js","./VertexElementDescriptor-0hGjloLE.js","./VertexArrayObject-whl5pCEr.js","./boundedPlane-l8xUIJF_.js","./glUtil-eBq9W4Bb.js","./diffUtils-x5OXhJZZ.js","./SizeVariable-221gAT5i.js","./colorRamps-rojoPCoV.js","./LegendOptions-x-5oaDqO.js","./UniqueValueRenderer-hljh8Sos.js","./ColorStop-y1faJUUg.js","./jsonUtils-1IxKPsH1.js","./styleUtils-BMYfqyTs.js","./jsonUtils-M3inctU9.js","./DictionaryLoader-W3_-N3pK.js","./Version-DuGO31mq.js","./FieldsIndex-_W1Us-oq.js","./UnknownTimeZone-iVS1S_Kf.js","./heatmapUtils-QdzYLNxE.js","./projectVectorToVector-EjL4REoi.js","./dehydratedFeatures-RW4WXA7F.js","./rendererConversion-fvISt8-K.js","./defaults--brCOrwa.js","./defaultsJSON-x-mq3Ho7.js","./edgeUtils-MePQoKVe.js","./OptimizedFeature-5RGb7-P9.js","./OptimizedGeometry-CbNXANBG.js","./optimizedFeatureQueryEngineAdapter-v2zLUxFL.js","./projectPointToVector-P8odY6kx.js","./featureConversionUtils-91rcTs0M.js","./OptimizedFeatureSet-smVI1ez9.js","./vec32-wV5-40u9.js","./SnappingCandidate-JeTxy3r2.js","./utils-NbMqmVX1.js","./cimSymbolUtils-i5s4LTBQ.js","./utils-jQLeeGOF.js","./callExpressionWithFeature-rytrJuuz.js","./quantizationUtils-DTwa03mn.js","./MeshComponent-rZoIZFgK.js","./imageUtils-tXDgLQzN.js","./georeference-IWrqLT4D.js","./spatialReferenceEllipsoidUtils-C7ZdwAmG.js","./MeshGeoreferencedRelativeVertexSpace-5FoxqUmg.js","./MeshLocalVertexSpace-Hd9uQrLZ.js","./resourceUtils-U9HveiKh.js","./symbolColorUtils-L3SXnlGD.js","./webStyleSymbolUtils-kjfVwPY4.js","./devEnvironmentUtils-3qgG8Z2w.js","./fontUtils-GE0ho--n.js","./PooledRBush-vORPUHCE.js","./popupUtils-CDV9bUjJ.js","./geometryServiceUtils-SZUkmQMv.js","./LayerView-CRo_qb-x.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}