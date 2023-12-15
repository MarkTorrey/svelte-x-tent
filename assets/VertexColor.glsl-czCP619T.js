import{L as Dt,e4 as Oi,dn as Q,aL as St,gX as tr,ec as Li,k as Mr,dk as z,s as jt,ag as Nr,kh as Se,cj as Ci,nE as Mi,nF as Ni,cR as U,dc as Di,da as Pi,jD as Fi,cz as E,aF as Et,l as R,m as M,n as zi,h7 as xt,dz as Oe,db as oe,hM as $e,fS as Hi,cN as rt,iN as Bi,iV as Ui,nG as Vi,nH as Gi,nI as Wi,nJ as Pt,nK as ki,hW as Dr,j1 as ji,li as gt,g5 as rr,i_ as qt,i$ as ir,iY as qi,d5 as it,cH as Pr,cD as Fr,_ as Xi,gb as Ki,c4 as Yi,dJ as ar,aG as Qi,h9 as je,lk as qe,bB as sr,nL as Zi,hQ as Ji,hT as ea,j8 as ta,cC as Ie,m1 as ra,cG as nr,i5 as ia,ha as zr,cV as fe,dX as Me,dY as or,dU as lr,dV as aa,nM as sa,dS as na,d3 as oa,d4 as cr,nN as la,nO as Hr,nP as Br,bu as Ur,cK as Vr,cL as ca}from"./index-eSY5-lt-.js";import{E as da,G as ne,P as at,D as ve,U as At,L as le,B as yt,c as pe,O as ze,I as te}from"./enums-8pc8f5Ge.js";import{b as ua,e as ge,T as Qe,E as ha}from"./Texture-4vQG0qLG.js";import{o as c,n as He}from"./OrderIndependentTransparency-zg-ZjAWW.js";import{e as f}from"./VertexAttribute-h46lBfqy.js";import"./LRUCache-mFQSPLKh.js";import{i as $t}from"./FramebufferObject-FWwprw92.js";import{a as Ft,i as fa,u as Ze,N as Ee}from"./basicInterfaces-IwaMq8O_.js";import{o as ma,r as pa}from"./doublePrecisionUtils-HJiLm-yC.js";import{e as Xt,r as Gr}from"./Geometry-TfLywN1e.js";import{t as va}from"./requestImageUtils-YgTUQT6h.js";import{H as ga,e as _a}from"./orientedBoundingBox-frFJc-wI.js";import{x as Wr,c as dr,y as Ta,u as Sa,q as Ea,i as ur}from"./BufferView-KywjVo63.js";let Qn=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Jn=class{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Dt(this._program),this._pipeline=this._configuration=null}reload(e){Dt(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return da.TRIANGLES}getPipeline(e,r,i){return this._pipeline}initializeConfiguration(e,r){}},to=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Oi({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=ua()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const a=this._textures.get(e);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};function kr(t){t.code.add(c`const float MAX_RGBA_FLOAT =
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
}`)}function xa(t){t.include(kr),t.code.add(c`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}var S;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(S||(S={}));let j=class{constructor(e,r,i,a,s=null){if(this.name=e,this.type=r,this.arraySize=s,this.bind={[S.Pass]:null,[S.Draw]:null},a)switch(i){case S.Pass:this.bind[S.Pass]=a;break;case S.Draw:this.bind[S.Draw]=a}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Kt=class extends j{constructor(e,r){super(e,"vec2",S.Pass,(i,a,s)=>i.setUniform2fv(e,r(a,s)))}},Z=class extends j{constructor(e,r){super(e,"vec4",S.Pass,(i,a,s)=>i.setUniform4fv(e,r(a,s)))}};function no(t){t.fragment.uniforms.add(new Z("projInfo",(e,r)=>Aa(r))),t.fragment.uniforms.add(new Kt("zScale",(e,r)=>ba(r))),t.fragment.code.add(c`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Aa(t){const e=t.camera.projectionMatrix;return e[11]===0?Q(hr,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):Q(hr,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const hr=St();function ba(t){return t.camera.projectionMatrix[11]===0?tr(fr,0,1):tr(fr,1,0)}const fr=Li();let k=class extends j{constructor(e,r){super(e,"vec3",S.Pass,(i,a,s)=>i.setUniform3fv(e,r(a,s)))}},Ra=class extends j{constructor(e,r){super(e,"float",S.Pass,(i,a,s)=>i.setUniform1f(e,r(a,s)))}},De=class extends j{constructor(e,r){super(e,"sampler2D",S.Pass,(i,a,s)=>i.bindTexture(e,r(a,s)))}},Pe=class extends j{constructor(e,r){super(e,"mat4",S.Pass,(i,a,s)=>i.setUniformMatrix4fv(e,r(a,s)))}};const jr=Mr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let qr=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){jr.error("Trying to include shader module multiple times with different sets of options.");const a=new Set;for(const s of Object.keys(i))i[s]!==e[s]&&a.add(s);for(const s of Object.keys(e))i[s]!==e[s]&&a.add(s);a.forEach(s=>console.error(`  ${s}: current ${i[s]} new ${e[s]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},fo=class extends qr{constructor(){super(...arguments),this.vertex=new mr,this.fragment=new mr,this.attributes=new Ia,this.varyings=new wa,this.extensions=new zt,this.constants=new Xr,this.outputs=new Bt}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,n=s.uniforms.generateSource(),o=s.code.generateSource(),l=e==="vertex"?La:Oa,d=this.constants.generateSource().concat(s.constants.generateSource()),u=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${l}

${d.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${u.join(`
`)}

${o.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(s=>{const n=s.bind[S.Pass];n&&r.set(s.name,n)}),this.fragment.uniforms.entries.forEach(s=>{const n=s.bind[S.Pass];n&&r.set(s.name,n)});const i=Array.from(r.values()),a=i.length;return(s,n)=>{for(let o=0;o<a;++o)i[o](e,s,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(s=>{const n=s.bind[S.Draw];n&&r.set(s.name,n)}),this.fragment.uniforms.entries.forEach(s=>{const n=s.bind[S.Draw];n&&r.set(s.name,n)});const i=Array.from(r.values()),a=i.length;return(s,n,o)=>{for(let l=0;l<a;++l)i[l](e,s,n,o)}}},ya=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new jt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else jr.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},$a=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},mr=class extends qr{constructor(){super(...arguments),this.uniforms=new ya,this.code=new $a,this.constants=new Xr}get builder(){return this}},Ia=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},wa=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&z(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,a)=>r.push(e==="vertex"?`out ${i} ${a};`:`in ${i} ${a};`)),r}},zt=class Ht{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Ht.ALLOWLIST_VERTEX:Ht.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};zt.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],zt.ALLOWLIST_VERTEX=[];let Bt=class Ut{constructor(){this._entries=new Map}add(e,r,i=0){const a=this._entries.get(i);a?z(a.name===e&&a.type===r,`Fragment shader output location ${i} occupied`):this._entries.set(i,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Ut.DEFAULT_NAME,type:Ut.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((i,a)=>r.push(`layout(location = ${a}) out ${i.type} ${i.name};`)),r}};Bt.DEFAULT_TYPE="vec4",Bt.DEFAULT_NAME="fragColor";let Xr=class N{constructor(){this._entries=new Set}add(e,r,i){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=N._numberToFloatStr(i);break;case"int":a=N._numberToIntStr(i);break;case"bool":a=i.toString();break;case"vec2":a=`vec2(${N._numberToFloatStr(i[0])},                            ${N._numberToFloatStr(i[1])})`;break;case"vec3":a=`vec3(${N._numberToFloatStr(i[0])},                            ${N._numberToFloatStr(i[1])},                            ${N._numberToFloatStr(i[2])})`;break;case"vec4":a=`vec4(${N._numberToFloatStr(i[0])},                            ${N._numberToFloatStr(i[1])},                            ${N._numberToFloatStr(i[2])},                            ${N._numberToFloatStr(i[3])})`;break;case"ivec2":a=`ivec2(${N._numberToIntStr(i[0])},                             ${N._numberToIntStr(i[1])})`;break;case"ivec3":a=`ivec3(${N._numberToIntStr(i[0])},                             ${N._numberToIntStr(i[1])},                             ${N._numberToIntStr(i[2])})`;break;case"ivec4":a=`ivec4(${N._numberToIntStr(i[0])},                             ${N._numberToIntStr(i[1])},                             ${N._numberToIntStr(i[2])},                             ${N._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(i,s=>N._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const Oa=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,La=`precision highp float;
precision highp sampler2D;`;var B;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.CompositeColor=9]="CompositeColor",t[t.COUNT=10]="COUNT"})(B||(B={}));const Ca={required:[]},So={required:[B.Depth]};B.CompositeColor;B.Highlight;const Eo={required:[B.Depth,B.Normal]};let Yt=class extends Nr{consumes(){return Ca}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}},Ao=class extends Yt{},Ro=class extends Yt{},$o=class extends Yt{};var pr;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.ANTIALIASING=10]="ANTIALIASING",t[t.COMPOSITE=11]="COMPOSITE",t[t.BLIT=12]="BLIT",t[t.SSAO=13]="SSAO",t[t.HIGHLIGHT=14]="HIGHLIGHT",t[t.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",t[t.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",t[t.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=18]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=20]="HUD_MATERIAL",t[t.LABEL_MATERIAL=21]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=22]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",t[t.DRAPED_WATER=25]="DRAPED_WATER",t[t.VOXEL=26]="VOXEL",t[t.MAX_SLOTS=27]="MAX_SLOTS"})(pr||(pr={}));function Ma(t){return Math.abs(t*t*t)}function Kr(t,e,r){const i=r.parameters;return It.scale=Math.min(i.divisor/(e-i.offset),1),It.factor=Ma(t),It}function Yr(t,e){return Se(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function Na(t,e,r){const i=Kr(t,e,r);return i.minScaleFactor=0,Yr(1,i)}function wo(t,e,r,i){i.scale=Na(t,e,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function Oo(t,e,r=[0,0]){const i=Math.min(Math.max(e.scale,e.minScaleFactor),1);return r[0]=t[0]*i,r[1]=t[1]*i,r}function Da(t,e,r,i){return Yr(t,Kr(e,r,i))}const It={scale:0,factor:0,minScaleFactor:0},st=Ci();function Lo(t,e,r,i,a,s){if(t.visible)if(t.boundingInfo){z(t.type===Xt.Mesh);const n=e.tolerance;Qr(t.boundingInfo,r,i,n,a,s)}else{const n=t.attributes.get(f.POSITION),o=n.indices;Jr(r,i,0,o.length/3,o,n,void 0,a,s)}}const Pa=E();function Qr(t,e,r,i,a,s){if(t==null)return;const n=za(e,r,Pa);if(Mi(st,t.bbMin),Ni(st,t.bbMax),a!=null&&a.applyToAabb(st),Ha(st,e,n,i)){const{primitiveIndices:o,position:l}=t,d=o?o.length:l.indices.length/3;if(d>Ga){const u=t.getChildren();if(u!==void 0){for(const h of u)Qr(h,e,r,i,a,s);return}}Jr(e,r,0,d,l.indices,l,o,a,s)}}const Zr=E();function Jr(t,e,r,i,a,s,n,o,l){if(n)return Fa(t,e,r,i,a,s,n,o,l);const{data:d,stride:u}=s,h=t[0],p=t[1],b=t[2],y=e[0]-h,V=e[1]-p,q=e[2]-b;for(let P=r,K=3*r;P<i;++P){let w=u*a[K++],$=d[w++],L=d[w++],C=d[w];w=u*a[K++];let g=d[w++],_=d[w++],x=d[w];w=u*a[K++];let v=d[w++],m=d[w++],A=d[w];o!=null&&([$,L,C]=o.applyToVertex($,L,C,P),[g,_,x]=o.applyToVertex(g,_,x,P),[v,m,A]=o.applyToVertex(v,m,A,P));const T=g-$,O=_-L,H=x-C,F=v-$,G=m-L,ce=A-C,xe=V*ce-G*q,Be=q*F-ce*y,Ue=y*G-F*V,re=T*xe+O*Be+H*Ue;if(Math.abs(re)<=Number.EPSILON)continue;const Y=h-$,Ae=p-L,be=b-C,se=Y*xe+Ae*Be+be*Ue;if(re>0){if(se<0||se>re)continue}else if(se>0||se<re)continue;const de=Ae*H-O*be,Ve=be*T-H*Y,Ge=Y*O-T*Ae,Re=y*de+V*Ve+q*Ge;if(re>0){if(Re<0||se+Re>re)continue}else if(Re>0||se+Re<re)continue;const ye=(F*de+G*Ve+ce*Ge)/re;ye>=0&&l(ye,ei(T,O,H,F,G,ce,Zr),P,!1)}}function Fa(t,e,r,i,a,s,n,o,l){const{data:d,stride:u}=s,h=t[0],p=t[1],b=t[2],y=e[0]-h,V=e[1]-p,q=e[2]-b;for(let P=r;P<i;++P){const K=n[P];let w=3*K,$=u*a[w++],L=d[$++],C=d[$++],g=d[$];$=u*a[w++];let _=d[$++],x=d[$++],v=d[$];$=u*a[w];let m=d[$++],A=d[$++],T=d[$];o!=null&&([L,C,g]=o.applyToVertex(L,C,g,P),[_,x,v]=o.applyToVertex(_,x,v,P),[m,A,T]=o.applyToVertex(m,A,T,P));const O=_-L,H=x-C,F=v-g,G=m-L,ce=A-C,xe=T-g,Be=V*xe-ce*q,Ue=q*G-xe*y,re=y*ce-G*V,Y=O*Be+H*Ue+F*re;if(Math.abs(Y)<=Number.EPSILON)continue;const Ae=h-L,be=p-C,se=b-g,de=Ae*Be+be*Ue+se*re;if(Y>0){if(de<0||de>Y)continue}else if(de>0||de<Y)continue;const Ve=be*F-H*se,Ge=se*O-F*Ae,Re=Ae*H-O*be,ye=y*Ve+V*Ge+q*Re;if(Y>0){if(ye<0||de+ye>Y)continue}else if(ye>0||de+ye<Y)continue;const er=(G*Ve+ce*Ge+xe*Re)/Y;er>=0&&l(er,ei(O,H,F,G,ce,xe,Zr),K,!1)}}const vr=E(),gr=E();function ei(t,e,r,i,a,s,n){return U(vr,t,e,r),U(gr,i,a,s),Di(n,vr,gr),Pi(n,n),n}function za(t,e,r){return U(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Ha(t,e,r,i){return Ba(t,e,r,i,1/0)}function Ba(t,e,r,i,a){const s=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let o=Math.min(s,n),l=Math.max(s,n);const d=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(l=Math.min(l,Math.max(d,u)),l<0||(o=Math.max(o,Math.min(d,u)),o>l))return!1;const h=(t[2]-i-e[2])*r[2],p=(t[5]+i-e[2])*r[2];return l=Math.min(l,Math.max(h,p)),!(l<0)&&(o=Math.max(o,Math.min(h,p)),!(o>l)&&o<a)}function Co(t,e,r,i,a){let s=(r.screenLength||0)*t.pixelRatio;a!=null&&(s=Da(s,i,e,a));const n=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Et(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function ti(t,e){const r=e?ti(e):{};for(const i in t){let a=t[i];a!=null&&a.forEach&&(a=Va(a)),a==null&&i in r||(r[i]=a)}return r}function Ua(t,e){let r=!1;for(const i in e){const a=e[i];a!==void 0&&(Array.isArray(a)?t[i]===null?(t[i]=a.slice(),r=!0):Fi(t[i],a)&&(r=!0):t[i]!==a&&(r=!0,t[i]=a))}return r}function Va(t){const e=[];return t.forEach(r=>e.push(r)),e}const Mo={multiply:1,ignore:2,replace:3,tint:4},Ga=1e3;let Wa=class extends He{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}};function Je(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const i=e._parameterNames.length-1,a=t.count||2,s=Math.ceil(Math.log2(a)),n=e._parameterBits??[0];let o=0;for(;n[o]+s>16;)o++,o>=n.length&&n.push(0);e._parameterBits=n;const l=n[o],d=(1<<s)-1<<l;n[o]+=s,Object.defineProperty(e,r,{get(){return this[i]},set(u){if(this[i]!==u&&(this[i]=u,this._keyDirty=!0,this._parameterBits[o]=this._parameterBits[o]&~d|+u<<l&d,typeof u!="number"&&typeof u!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof u)}})}}}const ka=new Map([[f.POSITION,0],[f.NORMAL,1],[f.NORMALCOMPRESSED,1],[f.UV0,2],[f.COLOR,3],[f.COLORFEATUREATTRIBUTE,3],[f.SIZE,4],[f.TANGENT,4],[f.AUXPOS1,5],[f.SYMBOLCOLOR,5],[f.AUXPOS2,6],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.INSTANCEOBJECTANDLAYERIDCOLOR,7],[f.INSTANCEMODEL,8],[f.INSTANCEMODELNORMAL,12],[f.INSTANCEMODELORIGINHI,11],[f.INSTANCEMODELORIGINLO,15]]);function Do(t,e=!0){t.attributes.add(f.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(c`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?c`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}let I=class extends Nr{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};R([M()],I.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),R([M()],I.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),R([M()],I.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),R([M()],I.prototype,"DECONFLICTOR_SHOW_GRID",void 0),R([M()],I.prototype,"LABELS_SHOW_BORDER",void 0),R([M()],I.prototype,"TEXT_SHOW_BASELINE",void 0),R([M()],I.prototype,"TEXT_SHOW_BORDER",void 0),R([M()],I.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),R([M()],I.prototype,"OVERLAY_SHOW_CENTER",void 0),R([M()],I.prototype,"SHOW_POI",void 0),R([M()],I.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),R([M()],I.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),R([M()],I.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),R([M()],I.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),R([M()],I.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),R([M()],I.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),R([M()],I.prototype,"I3S_TREE_SHOW_TILES",void 0),R([M()],I.prototype,"I3S_SHOW_MODIFICATIONS",void 0),R([M()],I.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),R([M()],I.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),R([M()],I.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),R([M()],I.prototype,"LINE_WIREFRAMES",void 0),I=R([zi("esri.views.3d.support.DebugFlags")],I);const ja=new I;var he;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(he||(he={}));const ht=new ge;ht.pixelFormat=ne.RED,ht.internalFormat=at.R8,ht.wrapMode=ve.CLAMP_TO_EDGE;const ft=new ge;ft.pixelFormat=ne.RG,ft.internalFormat=at.RG8,ft.wrapMode=ve.CLAMP_TO_EDGE;const mt=new ge;mt.internalFormat=at.RGBA4,mt.dataType=At.UNSIGNED_SHORT_4_4_4_4,mt.wrapMode=ve.CLAMP_TO_EDGE;const ri=new ge;ri.wrapMode=ve.CLAMP_TO_EDGE;const Xe=new ge;Xe.wrapMode=ve.CLAMP_TO_EDGE,Xe.samplingMode=le.LINEAR_MIPMAP_LINEAR,Xe.hasMipmap=!0,Xe.maxAnisotropy=8;const Ke=new ge;Ke.pixelFormat=ne.RED,Ke.dataType=At.HALF_FLOAT,Ke.internalFormat=at.R16F,Ke.samplingMode=le.NEAREST;const pt=new ge;pt.dataType=At.HALF_FLOAT,pt.internalFormat=at.RGBA16F,pt.samplingMode=le.NEAREST;he.RED+"",he.RG+"",he.RGBA4+"",he.RGBA+"",he.RGBA_MIPMAP+"",he.R16F+"",he.RGBA16F+"";var Ne;(function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",t[t.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",t[t.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"})(Ne||(Ne={}));const Ye=new ge;Ye.pixelFormat=ne.DEPTH_STENCIL,Ye.dataType=At.UNSIGNED_INT_24_8,Ye.samplingMode=le.NEAREST,Ye.wrapMode=ve.CLAMP_TO_EDGE;Ne.DEPTH_STENCIL_TEXTURE+"",Ne.DEPTH_STENCIL_BUFFER+"",new $t(yt.DEPTH24_STENCIL8,4),Ne.DEPTH24_BUFFER+"",new $t(yt.DEPTH_COMPONENT24,4),Ne.DEPTH16_BUFFER+"",new $t(yt.DEPTH_COMPONENT16,4);function qa(t,e){switch(e.normalType){case J.Compressed:t.attributes.add(f.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(c`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case J.Attribute:t.attributes.add(f.NORMAL,"vec3"),t.vertex.code.add(c`vec3 normalModel() {
return normal;
}`);break;case J.ScreenDerivative:t.fragment.code.add(c`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:xt(e.normalType);case J.COUNT:case J.Ground:}}var J;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(J||(J={}));function Xa(t){t.attributes.add(f.POSITION,"vec3"),t.vertex.code.add(c`vec3 positionModel() { return position; }`)}function ii({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(c`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):t.add(c`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let ie=class extends j{constructor(e,r){super(e,"vec3",S.Draw,(i,a,s,n)=>i.setUniform3fv(e,r(a,s,n)))}},ai=class extends j{constructor(e,r){super(e,"mat3",S.Draw,(i,a,s)=>i.setUniformMatrix3fv(e,r(a,s)))}},bt=class extends j{constructor(e,r){super(e,"mat3",S.Pass,(i,a,s)=>i.setUniformMatrix3fv(e,r(a,s)))}};function si(t,e){t.include(Xa);const r=t.vertex;r.include(ii,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new k("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new bt("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new Pe("transformProjFromView",i=>i.transformProjFromView),new ai("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new ie("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new ie("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(c`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(c`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?c`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:c`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(c`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(c`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ka=class extends He{constructor(){super(...arguments),this.transformWorldFromViewTH=E(),this.transformWorldFromViewTL=E(),this.transformViewFromCameraRelativeRS=Oe(),this.transformProjFromView=oe()}},Ya=class extends He{constructor(){super(...arguments),this.transformWorldFromModelRS=Oe(),this.transformWorldFromModelTH=E(),this.transformWorldFromModelTL=E()}};function Vo(t,e){switch(e.normalType){case J.Attribute:case J.Compressed:t.include(qa,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new ai("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new bt("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(c`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case J.Ground:t.include(si,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(c`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?c`normalize(vPositionWorldCameraRelative);`:c`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case J.ScreenDerivative:t.vertex.code.add(c`void forwardNormal() {}`);break;default:xt(e.normalType);case J.COUNT:}}let Go=class extends Ka{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Oe()}},ko=class extends Ya{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Oe(),this.toMapSpace=St()}};function Qa(t){t.uniforms.add(new k("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function Za(t){t.uniforms.add(new k("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function qo(t){Qa(t.fragment),Za(t.fragment),t.fragment.code.add(c`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}var ee;function Ja(t,e){switch(e.textureCoordinateType){case ee.Default:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(c`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ee.Compressed:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(c`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ee.Atlas:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(f.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(c`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:xt(e.textureCoordinateType);case ee.None:return void t.vertex.code.add(c`void forwardTextureCoordinates() {}`);case ee.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(ee||(ee={}));function es(t){t.fragment.code.add(c`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function ts(t,e){switch(t.include(Ja,e),e.textureCoordinateType){case ee.Default:case ee.Compressed:return void t.fragment.code.add(c`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case ee.Atlas:return t.include(es),void t.fragment.code.add(c`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:xt(e.textureCoordinateType);case ee.None:case ee.COUNT:return}}let wt=class extends j{constructor(e,r){super(e,"sampler2D",S.Draw,(i,a,s)=>i.bindTexture(e,r(a,s)))}},rs=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return Ft.LOADED}},Yo=class extends rs{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=$e(this._texture),this._textureNormal=$e(this._textureNormal),this._textureEmissive=$e(this._textureEmissive),this._textureOcclusion=$e(this._textureOcclusion),this._textureMetallicRoughness=$e(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Ft.LOADED:Ft.LOADING}get textureBindParameters(){return new is(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=$e(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textureRepository.acquire(e);if(Hi(i))return++this._numLoading,void i.then(a=>{if(this._disposed)return $e(a),void r(null);r(a)}).finally(()=>--this._numLoading);r(i)}},is=class extends He{constructor(e=null,r=null,i=null,a=null,s=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=a,this.textureMetallicRoughness=s}};var X;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(X||(X={}));function Jo(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===X.Normal&&i&&t.include(ts,e),e.pbrMode!==X.Schematic)if(e.pbrMode!==X.Disabled){if(e.pbrMode===X.Normal){r.code.add(c`vec3 mrr;
vec3 emission;
float occlusion;`);const a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===S.Pass?new De("texMetallicRoughness",s=>s.textureMetallicRoughness):new wt("texMetallicRoughness",s=>s.textureMetallicRoughness)),r.code.add(c`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===S.Pass?new De("texEmission",s=>s.textureEmissive):new wt("texEmission",s=>s.textureEmissive)),r.code.add(c`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===S.Pass?new De("texOcclusion",s=>s.textureOcclusion):new wt("texOcclusion",s=>s.textureOcclusion)),r.code.add(c`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(c`float getBakedOcclusion() { return 1.0; }`),a===S.Pass?r.uniforms.add(new k("emissionFactor",s=>s.emissiveFactor),new k("mrrFactors",s=>s.mrrFactors)):r.uniforms.add(new ie("emissionFactor",s=>s.emissiveFactor),new ie("mrrFactors",s=>s.mrrFactors)),r.code.add(c`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?c`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?c`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?c`applyEmission(${e.hasEmissiveTextureTransform?c`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?c`applyOcclusion(${e.hasOcclusionTextureTransform?c`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(c`float getBakedOcclusion() { return 1.0; }`);else r.code.add(c`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function as(t){const e=t.fragment.code;e.add(c`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(c`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(c`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ni(t){t.vertex.code.add(c`const float PI = 3.141592653589793;`),t.fragment.code.add(c`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function el(t,e){const r=t.fragment.code;t.include(ni),e.pbrMode!==X.Normal&&e.pbrMode!==X.Schematic&&e.pbrMode!==X.Terrain&&e.pbrMode!==X.TerrainWithWater||(r.add(c`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(c`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==X.Normal&&e.pbrMode!==X.Schematic||(t.include(as),r.add(c`struct PBRShadingInfo
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
};`),r.add(c`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(c`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(c`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function tl(t,e){const r=t.fragment.code;t.include(ni),r.add(c`
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
  `),r.add(c`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(c`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(c`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(c`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)}let rl=class extends j{constructor(e,r){super(e,"bool",S.Pass,(i,a,s)=>i.setUniform1b(e,r(a,s)))}},al=class extends Gr{constructor(e,r){super(),this.type=Xt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=ka,this._pp0=rt(0,0,1),this._pp1=rt(0,0,0),this._parameters=ti(e,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Ua(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===fa.ON)&&(this.parameters.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){var e;(e=this.repository)==null||e.materialChanged(this)}intersectDraped(e,r,i,a,s,n){return this._pp0[0]=this._pp1[0]=a[0],this._pp0[1]=this._pp1[1]=a[1],this.intersect(e,r,i,this._pp0,this._pp1,s)}};var _t;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(_t||(_t={}));let nl=class extends He{constructor(){super(...arguments),this.renderOccluded=_t.Occlude,this.isDecoration=!1}};var W,_r;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(W||(W={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(_r||(_r={}));let Qt=class{constructor(e){this.field=e}},ss=class extends Qt{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[W.Undefined,W.Undefined,W.Undefined]}},ns=class extends Qt{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},os=class extends Qt{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}},ls=class{};function We(t){return t!=null}function Le(t){return typeof t=="number"}function Rt(t){return typeof t=="string"}function cs(t){return t==null||Rt(t)}function D(t,e){t&&t.push(e)}function ds(t,e,r,i=oe()){const a=t||0,s=e||0,n=r||0;return a!==0&&Vi(i,i,-a/180*Math.PI),s!==0&&Gi(i,i,s/180*Math.PI),n!==0&&Wi(i,i,n/180*Math.PI),i}function _e(t,e,r,i,a){var o;const s=t.minSize,n=t.maxSize;if(t.expression)return D(a,"Could not convert size info: expression not supported"),!1;if(t.useSymbolValue){const l=i.symbolSize[r];return e.minSize[r]=l,e.maxSize[r]=l,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=W.DefinedSize,!0}if(We(t.field))return We(t.stops)?t.stops.length===2&&Le(t.stops[0].size)&&Le(t.stops[1].size)?(Tr(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=W.DefinedSize,!0):(D(a,"Could not convert size info: stops only supported with 2 elements"),!1):Le(s)&&Le(n)&&We(t.minDataValue)&&We(t.maxDataValue)?(Tr(s,n,t.minDataValue,t.maxDataValue,e,r),e.type[r]=W.DefinedSize,!0):t.valueUnit==="unknown"?(D(a,"Could not convert size info: proportional size not supported"),!1):rr[t.valueUnit]!=null?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/rr[t.valueUnit],e.type[r]=W.DefinedSize,!0):(D(a,"Could not convert size info: scale-dependent size not supported"),!1);if(!We(t.field)){if((o=t.stops)!=null&&o[0]&&Le(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=W.DefinedSize,!0;if(Le(s))return e.minSize[r]=s,e.maxSize[r]=s,e.offset[r]=s,e.factor[r]=0,e.type[r]=W.DefinedSize,!0}return D(a,"Could not convert size info: unsupported variant of sizeInfo"),!1}function Tr(t,e,r,i,a,s){const n=Math.abs(i-r)>0?(e-t)/(i-r):0;a.minSize[s]=n>0?t:e,a.maxSize[s]=n>0?e:t,a.offset[s]=t-r*n,a.factor[s]=n}function us(t,e,r,i){if(t.normalizationField||t.valueRepresentation)return D(i,"Could not convert size info: unsupported property"),null;if(!cs(t.field))return D(i,"Could not convert size info: field is not a string"),null;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return D(i,"Could not convert size info: multiple fields in use"),null}else e.size.field=t.field}else e.size=new ss(t.field);let a;switch(t.axis){case"width":return a=_e(t,e.size,0,r,i),a?e:null;case"height":return a=_e(t,e.size,2,r,i),a?e:null;case"depth":return a=_e(t,e.size,1,r,i),a?e:null;case"width-and-depth":return a=_e(t,e.size,0,r,i),a&&_e(t,e.size,1,r,i),a?e:null;case null:case void 0:case"all":return a=_e(t,e.size,0,r,i),a=a&&_e(t,e.size,1,r,i),a=a&&_e(t,e.size,2,r,i),a?e:null;default:return D(i,`Could not convert size info: unknown axis "${t.axis}""`),null}}function hs(t,e,r){for(let a=0;a<3;++a){let s=e.unitInMeters;t.type[a]===W.DefinedSize&&(s*=e.modelSize[a],t.type[a]=W.DefinedScale),t.minSize[a]=t.minSize[a]/s,t.maxSize[a]=t.maxSize[a]/s,t.offset[a]=t.offset[a]/s,t.factor[a]=t.factor[a]/s}let i;if(t.type[0]!==W.Undefined)i=0;else if(t.type[1]!==W.Undefined)i=1;else{if(t.type[2]===W.Undefined)return D(r,"No size axis contains a valid size or scale"),!1;i=2}for(let a=0;a<3;++a)t.type[a]===W.Undefined&&(t.minSize[a]=t.minSize[i],t.maxSize[a]=t.maxSize[i],t.offset[a]=t.offset[i],t.factor[a]=t.factor[i],t.type[a]=t.type[i]);return!0}function Sr(t,e,r){t[4*e]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function fs(t,e,r){if(t.normalizationField)return D(r,"Could not convert color info: unsupported property"),null;if(Rt(t.field)){if(!t.stops)return D(r,"Could not convert color info: missing stops or colors"),null;{if(t.stops.length>8)return D(r,"Could not convert color info: too many color stops"),null;e.color=new ns(t.field);const i=t.stops;for(let a=0;a<8;++a){const s=i[Math.min(a,i.length-1)];e.color.values[a]=s.value,Sr(e.color.colors,a,s.color)}}}else{if(!(t.stops&&t.stops.length>=0))return D(r,"Could not convert color info: no field and no colors/stops"),null;{const i=t.stops&&t.stops.length>=0&&t.stops[0].color;e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let a=0;a<8;a++)e.color.values[a]=1/0,Sr(e.color.colors,a,i)}}return e}function ms(t,e,r){if(t.normalizationField)return D(r,"Could not convert opacity info: unsupported property"),null;if(Rt(t.field)){if(!t.stops)return D(r,"Could not convert opacity info: missing stops or opacities"),null;{if(t.stops.length>8)return D(r,"Could not convert opacity info: too many opacity stops"),null;e.opacity=new os(t.field);const i=t.stops;for(let a=0;a<8;++a){const s=i[Math.min(a,i.length-1)];e.opacity.values[a]=s.value,e.opacity.opacityValues[a]=s.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return D(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const i=t.stops&&t.stops.length>=0?t.stops[0].opacity:0;e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let a=0;a<8;a++)e.opacity.values[a]=1/0,e.opacity.opacityValues[a]=i}}return e}function Ot(t,e,r){const i=r===2&&t.rotationType==="arithmetic";e.offset[r]=i?90:0,e.factor[r]=i?-1:1,e.type[r]=1}function ps(t,e,r){if(!Rt(t.field))return D(r,"Could not convert rotation info: field is not a string"),null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return D(r,"Could not convert rotation info: multiple fields in use"),null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return Ot(t,e.rotation,0),e;case"roll":return Ot(t,e.rotation,1),e;case null:case void 0:case"heading":return Ot(t,e.rotation,2),e;default:return D(r,`Could not convert rotation info: unknown axis "${t.axis}""`),null}}let fl=class{constructor(e,r=[1,1,1],i=[1,1,1],a=1,s=[0,0,0],n=[1,1,1],o=[0,0,0]){this.supports=e,this.modelSize=r,this.symbolSize=i,this.unitInMeters=a,this.anchor=s,this.scale=n,this.rotation=o}};function oi(t,e,r){if(!t)return null;const i=t.reduce((a,s)=>{if(!a)return a;if(s.valueExpression)return D(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(s.type){case"size":return e.supports.size?us(s,a,e,r):a;case"color":return e.supports.color?fs(s,a,r):a;case"opacity":return e.supports.opacity?ms(s,a,r):null;case"rotation":return e.supports.rotation?ps(s,a,r):a;default:return null}},new ls);return!(t.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i!=null&&i.size&&!hs(i.size,e,r)?null:i:null}let vs=class{constructor(e,r,i){this.visualVariables=e,this.materialParameters=r,this.requiresShaderTransformation=i}};function vl(t,e){if(!t||ja.TESTS_DISABLE_FAST_UPDATES)return null;const r=oi(t.visualVariables,e);return r?new vs(r,ci(r,e),!!r.size):null}function gl(t,e,r){if(!e||!t)return!1;const i=t.visualVariables,a=oi(e.visualVariables,r);return!!a&&!!(nt(i.size,a.size,"size")&&nt(i.color,a.color,"color")&&nt(i.rotation,a.rotation,"rotation")&&nt(i.opacity,a.opacity,"opacity"))&&(t.visualVariables=a,t.materialParameters=ci(a,r),t.requiresShaderTransformation=!!a.size,!0)}function nt(t,e,r){if(!!t!=!!e||t&&t.field!==(e==null?void 0:e.field))return!1;if(t&&r==="rotation"){const i=t,a=e;for(let s=0;s<3;s++)if(i.type[s]!==a.type[s]||i.offset[s]!==a.offset[s]||i.factor[s]!==a.factor[s])return!1}return!0}class li extends He{constructor(e){super(),this.vvSize=(e==null?void 0:e.size)??null,this.vvColor=(e==null?void 0:e.color)??null,this.vvOpacity=(e==null?void 0:e.opacity)??null}}function ci(t,e){const r=new li(t);return r.vvSize&&(r.vvSymbolAnchor=e.anchor,Bi(et),ds(e.rotation[2],e.rotation[0],e.rotation[1],et),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||Oe(),Ui(r.vvSymbolRotationMatrix,et)),r}function _l(t,e,r){if(!t.vvSize)return r;Pt(Te,r);const i=t.vvSymbolRotationMatrix;ki(et,i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1),Dr(Te,Te,et);for(let a=0;a<3;++a){const s=t.vvSize.offset[a]+e[0]*t.vvSize.factor[a];Er[a]=Et(s,t.vvSize.minSize[a],t.vvSize.maxSize[a])}return ji(Te,Te,Er),gt(Te,Te,t.vvSymbolAnchor),Te}function Tl(t,e,r){if(!e.vvSize)return U(t,1,1,1),t;for(let i=0;i<3;++i){const a=e.vvSize.offset[i]+r[0]*e.vvSize.factor[i];t[i]=Et(a,e.vvSize.minSize[i],e.vvSize.maxSize[i])}return t}function Sl(t,e){const r=t==null?0:e.attributes[t];return typeof r=="number"&&isFinite(r)?r:0}const Te=oe(),Er=E(),et=oe();let El=class extends li{constructor(){super(...arguments),this.renderOccluded=_t.Occlude,this.isDecoration=!1}};const Lt=8;let gs=class extends j{constructor(e,r){super(e,"mat4",S.Draw,(i,a,s)=>i.setUniformMatrix4fv(e,r(a,s)))}};function _s(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",qt):t.uniforms.add(new ie("cameraPosition",(r,i)=>U(di,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function bl(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Pe("proj",(i,a)=>a.camera.projectionMatrix),new gs("view",(i,a)=>gt(xr,a.camera.viewMatrix,i.origin)),new ie("localOrigin",i=>i.origin));const r=i=>U(di,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Pe("proj",(i,a)=>a.camera.projectionMatrix),new Pe("view",(i,a)=>gt(xr,a.camera.viewMatrix,r(a))),new k("localOrigin",(i,a)=>r(a)))}const xr=oe(),di=E();function Ts(t){t.uniforms.add(new Pe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function Rl(t){t.uniforms.add(new Ra("pixelRatio",(e,r)=>r.camera.pixelRatio/r.overlayStretch))}let Vt=class extends Wa{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};R([Je()],Vt.prototype,"instancedDoublePrecision",void 0),R([Je()],Vt.prototype,"hasModelTransformation",void 0);const Ar=Oe();function $l(t,e){const r=e.hasModelTransformation,i=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Pe("model",s=>s.modelTransformation??ir)),t.vertex.uniforms.add(new bt("normalLocalOriginFromModel",s=>(qi(Ar,s.modelTransformation??ir),Ar)))),e.instanced&&i&&(t.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(f.INSTANCEMODEL,"mat3"),t.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const a=t.vertex;i&&(a.include(ii,e),a.uniforms.add(new ie("viewOriginHi",(s,n)=>ma(U(ot,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ot)),new ie("viewOriginLo",(s,n)=>pa(U(ot,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ot)))),a.code.add(c`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?c`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),a.code.add(c`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===B.Normal&&(Ts(a),a.code.add(c`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&a.code.add(c`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ot=E();let Ct=class extends Vt{};R([Je({constValue:!0})],Ct.prototype,"hasSliceHighlight",void 0),R([Je({constValue:!1})],Ct.prototype,"hasSliceInVertexProgram",void 0),R([Je({constValue:S.Pass})],Ct.prototype,"pbrTextureBindType",void 0);function br(t){t.varyings.add("linearDepth","float")}function Ss(t){t.vertex.uniforms.add(new Kt("nearFar",(e,r)=>r.camera.nearFar))}function ui(t){t.vertex.code.add(c`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function wl(t,e){const{vertex:r}=t;switch(e.output){case B.Color:if(e.receiveShadows)return br(t),void r.code.add(c`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case B.Depth:case B.Shadow:case B.ShadowHighlight:case B.ShadowExcludeHighlight:return t.include(si,e),br(t),Ss(t),ui(t),void r.code.add(c`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(c`void forwardLinearDepth() {}`)}function Ol(t,e){Es(t,e,new ie("slicePlaneOrigin",(r,i)=>xs(e,r,i)),new ie("slicePlaneBasis1",(r,i)=>{var a;return Rr(e,r,i,(a=i.slicePlane)==null?void 0:a.basis1)}),new ie("slicePlaneBasis2",(r,i)=>{var a;return Rr(e,r,i,(a=i.slicePlane)==null?void 0:a.basis2)}))}function Es(t,e,...r){if(!e.hasSlicePlane){const n=c`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const i=c`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=c`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,s=e.hasSliceHighlight?c`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(s)}function hi(t,e,r){return t.instancedDoublePrecision?U(As,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function fi(t,e){return t!=null?Fr(Tt,e.origin,t):e.origin}function mi(t,e,r){return t.hasSliceTranslatedView?e!=null?gt(bs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function xs(t,e,r){if(r.slicePlane==null)return qt;const i=hi(t,e,r),a=fi(i,r.slicePlane),s=mi(t,i,r);return s!=null?it(Tt,a,s):a}function Rr(t,e,r,i){if(i==null||r.slicePlane==null)return qt;const a=hi(t,e,r),s=fi(a,r.slicePlane),n=mi(t,a,r);return n!=null?(Pr(ke,i,s),it(Tt,s,n),it(ke,ke,n),Fr(ke,ke,Tt)):i}const As=E(),Tt=E(),ke=E(),bs=oe();function Ll(t,e){const r=e.output===B.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(f.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(c`
     void forwardObjectAndLayerIdColor() {
      ${r?i?c`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:c`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:c``} }`),t.fragment.code.add(c`
      void outputObjectAndLayerIdColor() {
        ${r?c`fragColor = objectAndLayerIdColorVarying;`:c``} }`)}let Rs=class extends j{constructor(e,r,i){super(e,"vec4",S.Pass,(a,s,n)=>a.setUniform4fv(e,r(s,n)),i)}},ys=class extends j{constructor(e,r,i){super(e,"float",S.Pass,(a,s,n)=>a.setUniform1fv(e,r(s,n)),i)}};function Nl(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(f.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new k("vvSizeMinSize",a=>a.vvSize.minSize)),r.uniforms.add(new k("vvSizeMaxSize",a=>a.vvSize.maxSize)),r.uniforms.add(new k("vvSizeOffset",a=>a.vvSize.offset)),r.uniforms.add(new k("vvSizeFactor",a=>a.vvSize.factor)),r.uniforms.add(new bt("vvSymbolRotationMatrix",a=>a.vvSymbolRotationMatrix)),r.uniforms.add(new k("vvSymbolAnchor",a=>a.vvSymbolAnchor)),r.code.add(c`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(c`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?c`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(c`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Lt),r.uniforms.add(new ys("vvColorValues",a=>a.vvColor.values,Lt),new Rs("vvColorColors",a=>a.vvColor.colors,Lt)),r.code.add(c`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?c`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(c`vec4 vvColor() { return vec4(1.0); }`)}function pi(t){t.code.add(c`const float MAX_RGBA4_FLOAT =
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
}`)}function Dl(t,e){switch(e.output){case B.Shadow:case B.ShadowHighlight:case B.ShadowExcludeHighlight:t.fragment.include(pi),t.fragment.code.add(c`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case B.Depth:t.fragment.include(kr),t.fragment.code.add(c`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}function $s(){if(Mt==null){const t=e=>Ki(`esri/libs/basisu/${e}`);Mt=Xi(()=>import("./basis_transcoder-iKkZrsXb.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Mt}let Mt;var we;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(we||(we={}));let ae=null,lt=null;async function vi(){return lt==null&&(lt=$s(),ae=await lt),lt}function Is(t,e){if(ae==null)return t.byteLength;const r=new ae.BasisFile(new Uint8Array(t)),i=_i(r)?gi(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function ws(t,e){if(ae==null)return t.byteLength;const r=new ae.KTX2File(new Uint8Array(t)),i=Ti(r)?gi(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function gi(t,e,r,i,a){const s=ha(e?pe.COMPRESSED_RGBA8_ETC2_EAC:pe.COMPRESSED_RGB8_ETC2),n=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*s*n)}function _i(t){return t.getNumImages()>=1&&!t.isUASTC()}function Ti(t){return t.getFaces()>=1&&t.isETC1S()}async function Os(t,e,r){ae==null&&(ae=await vi());const i=new ae.BasisFile(new Uint8Array(r));if(!_i(i))return null;i.startTranscoding();const a=Si(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(s,n)=>i.getImageTranscodedSizeInBytes(0,s,n),(s,n,o)=>i.transcodeImage(o,0,s,n,0,0));return i.close(),i.delete(),a}async function Ls(t,e,r){ae==null&&(ae=await vi());const i=new ae.KTX2File(new Uint8Array(r));if(!Ti(i))return null;i.startTranscoding();const a=Si(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(s,n)=>i.getImageTranscodedSizeInBytes(s,0,0,n),(s,n,o)=>i.transcodeImage(o,s,0,0,n,0,-1,-1));return i.close(),i.delete(),a}function Si(t,e,r,i,a,s,n,o){const{compressedTextureETC:l,compressedTextureS3TC:d}=t.capabilities,[u,h]=l?i?[we.ETC2_RGBA,pe.COMPRESSED_RGBA8_ETC2_EAC]:[we.ETC1_RGB,pe.COMPRESSED_RGB8_ETC2]:d?i?[we.BC3_RGBA,pe.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[we.BC1_RGB,pe.COMPRESSED_RGB_S3TC_DXT1_EXT]:[we.RGBA32,ne.RGBA],p=e.hasMipmap?r:Math.min(1,r),b=[];for(let y=0;y<p;y++)b.push(new Uint8Array(n(y,u))),o(y,u,b[y]);return e.internalFormat=h,e.hasMipmap=b.length>1,e.samplingMode=e.hasMipmap?le.LINEAR_MIPMAP_LINEAR:le.LINEAR,e.width=a,e.height=s,new Qe(t,e,{type:"compressed",levels:b})}const ct=Mr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Cs=542327876,Ms=131072,Ns=4;function Zt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Ds(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const Ps=Zt("DXT1"),Fs=Zt("DXT3"),zs=Zt("DXT5"),Hs=31,Bs=0,Us=1,Vs=2,Gs=3,Ws=4,ks=7,js=20,qs=21;function Xs(t,e,r){const i=Ks(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:a,internalFormat:s,width:n,height:o}=i;return e.samplingMode=a.levels.length>1?le.LINEAR_MIPMAP_LINEAR:le.LINEAR,e.hasMipmap=a.levels.length>1,e.internalFormat=s,e.width=n,e.height=o,new Qe(t,e,a)}function Ks(t,e){const r=new Int32Array(t,0,Hs);if(r[Bs]!==Cs)return ct.error("Invalid magic number in DDS header"),null;if(!(r[js]&Ns))return ct.error("Unsupported format, must contain a FourCC code"),null;const i=r[qs];let a,s;switch(i){case Ps:a=8,s=pe.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Fs:a=16,s=pe.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case zs:a=16,s=pe.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ct.error("Unsupported FourCC code:",Ds(i)),null}let n=1,o=r[Ws],l=r[Gs];!(3&o)&&!(3&l)||(ct.warn("Rounding up compressed texture size to nearest multiple of 4."),o=o+3&-4,l=l+3&-4);const d=o,u=l;let h,p;r[Vs]&Ms&&e!==!1&&(n=Math.max(1,r[ks]));let b=r[Us]+4;const y=[];for(let V=0;V<n;++V)p=(o+3>>2)*(l+3>>2)*a,h=new Uint8Array(t,b,p),y.push(h),b+=p,o=Math.max(1,o>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:y},internalFormat:s,width:d,height:u}}const yr=16;function Pl(t){return Math.ceil(t/yr)*yr}function Ys(t,e){let s=t.width*t.height;if(s<4096)return t instanceof ImageData?Ei(t):t;let n=t.width,o=t.height;do n=Math.ceil(n/2),o=Math.ceil(o/2),s=n*o;while(s>1048576||e!=null&&(n>e||o>e));return Jt(t,n,o)}function Qs(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const i=e/r;return Jt(t,Math.round(t.width*i),Math.round(t.height*i))}function Jt(t,e,r){if(t instanceof ImageData)return Jt(Ei(t),e,r);const i=document.createElement("canvas");return i.width=e,i.height=r,i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function Ei(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new jt("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}let Fl=class extends Gr{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=Xt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Yi,this._parameters={...Js,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(ar(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Qi(e.src)||ar(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new ge;return r.wrapMode=this._parameters.wrap??ve.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?le.LINEAR_MIPMAP_LINEAR:le.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||Zs(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new Qe(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(je(r)||qe(r))&&this._parameters.encoding===Ze.DDS_ENCODING?this._loadFromDDSData(e,r):(je(r)||qe(r))&&this._parameters.encoding===Ze.KTX2_ENCODING?this._loadFromKTX2(e,r):(je(r)||qe(r))&&this._parameters.encoding===Ze.BASIS_ENCODING?this._loadFromBasis(e,r):qe(r)?this._loadFromPixelData(e,r):je(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<tt.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=Xs(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Ls(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Os(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){z(this._parameters.width>0&&this._parameters.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===1?ne.LUMINANCE:this._parameters.components===3?ne.RGB:ne.RGBA,i.width=this._parameters.width??0,i.height=this._parameters.height??0,this._glTexture=new Qe(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const a=await va(r,{signal:i});return sr(i),this._loadFromImage(e,a)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const a=await Zi(r,r.src,!1,i);return sr(i),this._loadFromImage(e,a)})}_loadFromVideoElement(e,r){return r.readyState>=tt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((a,s)=>{const n=()=>{r.removeEventListener("loadeddata",o),r.removeEventListener("error",l),ta(d)},o=()=>{r.readyState>=tt.HAVE_CURRENT_DATA&&(n(),a(this._loadFromImage(e,r)))},l=u=>{n(),s(u||new jt("Failed to load video"))};r.addEventListener("loadeddata",o),r.addEventListener("error",l);const d=Ji(i,()=>l(ea()))}))}_loadFromImage(e,r){let i=r;if(!(i instanceof HTMLVideoElement)){const{maxTextureSize:n}=e.parameters;i=this._parameters.downsampleUncompressed?Ys(i,n):Qs(i,n)}const a=xi(i);this._parameters.width=a.width,this._parameters.height=a.height;const s=this._createDescriptor(e);return s.pixelFormat=this._parameters.components===3?ne.RGB:ne.RGBA,s.width=a.width,s.height=a.height,this._glTexture=new Qe(e,s,i),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(a,a),i}unload(){if(this._glTexture=Dt(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Zs(t,e){if(t==null)return 0;if(je(t)||qe(t))return e.encoding===Ze.KTX2_ENCODING?ws(t,!!e.mipmap):e.encoding===Ze.BASIS_ENCODING?Is(t,!!e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?xi(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}function xi(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var tt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(tt||(tt={}));const Js={wrap:{s:ve.REPEAT,t:ve.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function Hl(t,e){if(!e.multipassEnabled)return;t.fragment.include(xa),t.fragment.uniforms.add(new De("terrainDepthTexture",(i,a)=>{var s;return(s=a.multipassTerrain.linearDepth)==null?void 0:s.colorTexture})),t.fragment.uniforms.add(new Kt("nearFar",(i,a)=>a.camera.nearFar));const r=e.occlusionPass;t.fragment.code.add(c`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?c`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:c`
          if(fragmentDepth ${e.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}let Bl=class{constructor(){this.cullAboveGround=!1}};const Vl=.1,Gl=.001;function Wl(t){t.code.add(c`vec4 premultiplyAlpha(vec4 v) {
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
}`)}const kl={func:ze.LESS},jl={func:ze.ALWAYS},ql={mask:255},Xl={mask:0},Kl={function:{func:ze.ALWAYS,ref:Ee.OutlineVisualElementMask,mask:Ee.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.ZERO}},Yl={function:{func:ze.ALWAYS,ref:Ee.OutlineVisualElementMask,mask:Ee.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.REPLACE}},Ql={function:{func:ze.EQUAL,ref:Ee.OutlineVisualElementMask,mask:Ee.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.KEEP}},Zl={function:{func:ze.NOTEQUAL,ref:Ee.OutlineVisualElementMask,mask:Ee.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.KEEP}};let en=class{constructor(e=E()){this.intensity=e}};class tn{constructor(e=E(),r=rt(.57735,.57735,.57735)){this.intensity=e,this.direction=r}}let Gt=class{constructor(e=E(),r=rt(.57735,.57735,.57735),i=!0,a=1,s=1){this.intensity=e,this.direction=r,this.castShadows=i,this.specularStrength=a,this.environmentStrength=s}},Ai=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function rn(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e[i];return r}function Nt(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e;return r}function Fe(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]+e[i];return r}function bi(t){return(t+1)*(t+1)}function an(t){return Et(Math.floor(Math.sqrt(t)-1),0,2)}function Ri(t,e,r){const i=t[0],a=t[1],s=t[2],n=r||[];return n.length=bi(e),e>=0&&(n[0]=.28209479177),e>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*s,n[3]=.4886025119*a),e>=2&&(n[4]=1.09254843059*i*a,n[5]=1.09254843059*a*s,n[6]=.31539156525*(3*s*s-1),n[7]=1.09254843059*i*s,n[8]=.54627421529*(i*i-a*a)),n}function sn(t,e){const r=bi(t),i=e||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let a=0;a<r;a++)i.r[a]=i.g[a]=i.b[a]=0;return i}function nn(t,e){const r=an(e.r.length);for(const i of t)ra(Wt,i.direction),Ri(Wt,r,me),rn(me,vt),Nt(me,i.intensity[0],Ce),Fe(e.r,Ce),Nt(me,i.intensity[1],Ce),Fe(e.g,Ce),Nt(me,i.intensity[2],Ce),Fe(e.b,Ce);return e}function on(t,e){Ri(Wt,0,me);for(const r of t)e.r[0]+=me[0]*vt[0]*r.intensity[0]*4*Math.PI,e.g[0]+=me[0]*vt[0]*r.intensity[1]*4*Math.PI,e.b[0]+=me[0]*vt[0]*r.intensity[2]*4*Math.PI;return e}function ln(t,e,r,i){sn(e,i),U(r.intensity,0,0,0);let a=!1;const s=cn,n=dn,o=un;s.length=0,n.length=0,o.length=0;for(const l of t)l instanceof Gt&&!a?(Ie(r.direction,l.direction),Ie(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,a=!0):l instanceof Gt||l instanceof tn?s.push(l):l instanceof en?n.push(l):l instanceof Ai&&o.push(l);nn(s,i),on(n,i);for(const l of o)Fe(i.r,l.r),Fe(i.g,l.g),Fe(i.b,l.b)}const cn=[],dn=[],un=[],me=[0],Ce=[0],Wt=E(),vt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class $r{constructor(){this.color=E(),this.intensity=1}}let hn=class{constructor(){this.direction=E(),this.ambient=new $r,this.diffuse=new $r}};const fn=.4;class ic{constructor(){this._shOrder=2,this._legacy=new hn,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Ai,this._mainLight=new Gt(E(),rt(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){ln(e,this._shOrder,this._mainLight,this._sphericalHarmonics),Ie(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,nr(this._legacy.diffuse.color,this._mainLight.intensity,r),Ie(dt,this._legacy.diffuse.color),nr(dt,dt,fn*this.globalFactor),Pr(this._legacy.ambient.color,this._legacy.ambient.color,dt)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),Ie(this._mainLight.direction,e.mainLight.direction),Ie(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,i){if(ia(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,i),this._mainLight.environmentStrength=Se(e.mainLight.environmentStrength,r.mainLight.environmentStrength,i),this._mainLight.specularStrength=Se(e.mainLight.specularStrength,r.mainLight.specularStrength,i),Ie(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=Se(e.globalFactor,r.globalFactor,i),this.noonFactor=Se(e.noonFactor,r.noonFactor,i),e.sh.r.length===r.sh.r.length)for(let a=0;a<r.sh.r.length;a++)this._sphericalHarmonics.r[a]=Se(e.sh.r[a],r.sh.r[a],i),this._sphericalHarmonics.g[a]=Se(e.sh.g[a],r.sh.g[a],i),this._sphericalHarmonics.b[a]=Se(e.sh.b[a],r.sh.b[a],i);else for(let a=0;a<r.sh.r.length;a++)this._sphericalHarmonics.r[a]=r.sh.r[a],this._sphericalHarmonics.g[a]=r.sh.g[a],this._sphericalHarmonics.b[a]=r.sh.b[a]}}const dt=E();let ac=class{constructor(){this._transform=oe(),this._transformInverse=new ut({value:this._transform},oa,oe),this._transformInverseTranspose=new ut(this._transformInverse,cr,oe),this._transformTranspose=new ut({value:this._transform},cr,oe),this._transformInverseRotation=new ut({value:this._transform},la,Oe)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Pt(this._transform,e)}multiplyTransform(e){Dr(this._transform,this._transform,e)}set(e){Pt(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,r){this.setTransformMatrix(e),this.multiplyTransform(r),this._invalidateLazyTransforms()}},ut=class{constructor(e,r,i){this._original=e,this._update=r,this._dirty=!0,this._transform=i()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}};class mn{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=E(),this._mbs=zr(),this._obb=ga(),this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=fe(e)}applyToVertex(e,r,i){const a=U(kt,e,r,i),s=U(wr,e,r,i+this.componentLocalOriginLength),n=this._totalOffset/fe(s);return Me(this._tmpVertex,a,s,n),this._tmpVertex}applyToAabb(e){const r=U(kt,e[0],e[1],e[2]+this.componentLocalOriginLength),i=U(wr,e[3],e[4],e[5]+this.componentLocalOriginLength),a=or(vn,r),s=or(gn,i),n=lr(_n,r),o=lr(Tn,i),l=aa(Or,n,o);l[0]=a[0]*s[0]<0?0:l[0],l[1]=a[1]*s[1]<0?0:l[1],l[2]=a[2]*s[2]<0?0:l[2];const d=fe(l);if(d<this._totalOffset)return e[0]-=r[0]<0?this._totalOffset:0,e[1]-=r[1]<0?this._totalOffset:0,e[2]-=r[2]<0?this._totalOffset:0,e[3]+=i[0]>0?this._totalOffset:0,e[4]+=i[1]>0?this._totalOffset:0,e[5]+=i[2]>0?this._totalOffset:0,e;const u=sa(Or,n,o),h=fe(u),p=this._totalOffset/h,b=this._totalOffset/d;return e[0]+=r[0]*(r[0]>0?p:b),e[1]+=r[1]*(r[1]>0?p:b),e[2]+=r[2]*(r[2]>0?p:b),e[3]+=i[0]*(i[0]<0?p:b),e[4]+=i[1]*(i[1]<0?p:b),e[5]+=i[2]*(i[2]<0?p:b),e}applyToMbs(e){const r=fe(e),i=this._totalOffset/r;return Me(this._mbs,e,e,i),this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){return _a(e,this._totalOffset,this._totalOffset,na.Global,this._obb),this._obb}}class pn{constructor(e=0){this.offset=e,this.sphere=zr(),this.tmpVertex=E()}applyToVertex(e,r,i){const a=this.objectTransform.transform,s=U(kt,e,r,i),n=it(s,s,a),o=this.offset/fe(n);Me(n,n,n,o);const l=this.objectTransform.inverse;return it(this.tmpVertex,n,l),this.tmpVertex}applyToMinMax(e,r){const i=this.offset/fe(e);Me(e,e,e,i);const a=this.offset/fe(r);Me(r,r,r,a)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=fe(e),i=this.offset/r;return Me(this.sphere,e,e,i),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const Ir=new pn;function oc(t){return t!=null?(Ir.offset=t,Ir):null}new mn;const kt=E(),wr=E(),vn=E(),gn=E(),_n=E(),Tn=E(),Or=E();function lc(t,e,r,i=1){const{data:a,indices:s}=t,n=e.typedBuffer,o=e.typedBufferStride,l=s.length;if(r*=o,i===1)for(let d=0;d<l;++d)n[r]=a[s[d]],r+=o;else for(let d=0;d<l;++d){const u=a[s[d]];for(let h=0;h<i;h++)n[r]=u,r+=o}}function Lr(t,e,r){const{data:i,indices:a}=t,s=e.typedBuffer,n=e.typedBufferStride,o=a.length;r*=n;for(let l=0;l<o;++l){const d=2*a[l];s[r]=i[d],s[r+1]=i[d+1],r+=n}}function yi(t,e,r,i){const{data:a,indices:s}=t,n=e.typedBuffer,o=e.typedBufferStride,l=s.length;if(r*=o,i==null||i===1)for(let d=0;d<l;++d){const u=3*s[d];n[r]=a[u],n[r+1]=a[u+1],n[r+2]=a[u+2],r+=o}else for(let d=0;d<l;++d){const u=3*s[d];for(let h=0;h<i;++h)n[r]=a[u],n[r+1]=a[u+1],n[r+2]=a[u+2],r+=o}}function $i(t,e,r,i=1){const{data:a,indices:s}=t,n=e.typedBuffer,o=e.typedBufferStride,l=s.length;if(r*=o,i===1)for(let d=0;d<l;++d){const u=4*s[d];n[r]=a[u],n[r+1]=a[u+1],n[r+2]=a[u+2],n[r+3]=a[u+3],r+=o}else for(let d=0;d<l;++d){const u=4*s[d];for(let h=0;h<i;++h)n[r]=a[u],n[r+1]=a[u+1],n[r+2]=a[u+2],n[r+3]=a[u+3],r+=o}}function cc(t,e,r){const i=t.typedBuffer,a=t.typedBufferStride;e*=a;for(let s=0;s<r;++s)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=a}function Sn(t,e,r,i,a=1){if(!e)return void yi(t,r,i,a);const{data:s,indices:n}=t,o=r.typedBuffer,l=r.typedBufferStride,d=n.length,u=e[0],h=e[1],p=e[2],b=e[4],y=e[5],V=e[6],q=e[8],P=e[9],K=e[10],w=e[12],$=e[13],L=e[14];i*=l;let C=0,g=0,_=0;const x=Hr(e)?v=>{C=s[v]+w,g=s[v+1]+$,_=s[v+2]+L}:v=>{const m=s[v],A=s[v+1],T=s[v+2];C=u*m+b*A+q*T+w,g=h*m+y*A+P*T+$,_=p*m+V*A+K*T+L};if(a===1)for(let v=0;v<d;++v)x(3*n[v]),o[i]=C,o[i+1]=g,o[i+2]=_,i+=l;else for(let v=0;v<d;++v){x(3*n[v]);for(let m=0;m<a;++m)o[i]=C,o[i+1]=g,o[i+2]=_,i+=l}}function En(t,e,r,i,a=1){if(!e)return void yi(t,r,i,a);const{data:s,indices:n}=t,o=e,l=r.typedBuffer,d=r.typedBufferStride,u=n.length,h=o[0],p=o[1],b=o[2],y=o[4],V=o[5],q=o[6],P=o[8],K=o[9],w=o[10],$=!Br(o),L=1e-6,C=1-L;i*=d;let g=0,_=0,x=0;const v=Hr(o)?m=>{g=s[m],_=s[m+1],x=s[m+2]}:m=>{const A=s[m],T=s[m+1],O=s[m+2];g=h*A+y*T+P*O,_=p*A+V*T+K*O,x=b*A+q*T+w*O};if(a===1)if($)for(let m=0;m<u;++m){v(3*n[m]);const A=g*g+_*_+x*x;if(A<C&&A>L){const T=1/Math.sqrt(A);l[i]=g*T,l[i+1]=_*T,l[i+2]=x*T}else l[i]=g,l[i+1]=_,l[i+2]=x;i+=d}else for(let m=0;m<u;++m)v(3*n[m]),l[i]=g,l[i+1]=_,l[i+2]=x,i+=d;else for(let m=0;m<u;++m){if(v(3*n[m]),$){const A=g*g+_*_+x*x;if(A<C&&A>L){const T=1/Math.sqrt(A);g*=T,_*=T,x*=T}}for(let A=0;A<a;++A)l[i]=g,l[i+1]=_,l[i+2]=x,i+=d}}function xn(t,e,r,i,a=1){if(!e)return void $i(t,r,i,a);const{data:s,indices:n}=t,o=e,l=r.typedBuffer,d=r.typedBufferStride,u=n.length,h=o[0],p=o[1],b=o[2],y=o[4],V=o[5],q=o[6],P=o[8],K=o[9],w=o[10],$=!Br(o),L=1e-6,C=1-L;if(i*=d,a===1)for(let g=0;g<u;++g){const _=4*n[g],x=s[_],v=s[_+1],m=s[_+2],A=s[_+3];let T=h*x+y*v+P*m,O=p*x+V*v+K*m,H=b*x+q*v+w*m;if($){const F=T*T+O*O+H*H;if(F<C&&F>L){const G=1/Math.sqrt(F);T*=G,O*=G,H*=G}}l[i]=T,l[i+1]=O,l[i+2]=H,l[i+3]=A,i+=d}else for(let g=0;g<u;++g){const _=4*n[g],x=s[_],v=s[_+1],m=s[_+2],A=s[_+3];let T=h*x+y*v+P*m,O=p*x+V*v+K*m,H=b*x+q*v+w*m;if($){const F=T*T+O*O+H*H;if(F<C&&F>L){const G=1/Math.sqrt(F);T*=G,O*=G,H*=G}}for(let F=0;F<a;++F)l[i]=T,l[i+1]=O,l[i+2]=H,l[i+3]=A,i+=d}}function An(t,e,r,i,a=1){const{data:s,indices:n}=t,o=r.typedBuffer,l=r.typedBufferStride,d=n.length;if(i*=l,e!==s.length||e!==4)if(a!==1)if(e!==4)for(let u=0;u<d;++u){const h=3*n[u];for(let p=0;p<a;++p)o[i]=s[h],o[i+1]=s[h+1],o[i+2]=s[h+2],o[i+3]=255,i+=l}else for(let u=0;u<d;++u){const h=4*n[u];for(let p=0;p<a;++p)o[i]=s[h],o[i+1]=s[h+1],o[i+2]=s[h+2],o[i+3]=s[h+3],i+=l}else{if(e===4){for(let u=0;u<d;++u){const h=4*n[u];o[i]=s[h],o[i+1]=s[h+1],o[i+2]=s[h+2],o[i+3]=s[h+3],i+=l}return}for(let u=0;u<d;++u){const h=3*n[u];o[i]=s[h],o[i+1]=s[h+1],o[i+2]=s[h+2],o[i+3]=255,i+=l}}else{o[i]=s[0],o[i+1]=s[1],o[i+2]=s[2],o[i+3]=s[3];const u=new Uint32Array(r.typedBuffer.buffer,r.start),h=l/4,p=u[i/=4];i+=h;const b=d*a;for(let y=1;y<b;++y)u[i]=p,i+=h}}function bn(t,e,r){const{data:i,indices:a}=t,s=e.typedBuffer,n=e.typedBufferStride,o=a.length,l=i[0];r*=n;for(let d=0;d<o;++d)s[r]=l,r+=n}function Rn(t,e,r,i,a=1){const s=e.typedBuffer,n=e.typedBufferStride;if(i*=n,a===1)for(let o=0;o<r;++o)s[i]=t[0],s[i+1]=t[1],s[i+2]=t[2],s[i+3]=t[3],i+=n;else for(let o=0;o<r;++o)for(let l=0;l<a;++l)s[i]=t[0],s[i+1]=t[1],s[i+2]=t[2],s[i+3]=t[3],i+=n}function yn(t,e,r,i,a,s){var n;for(const o of e.fields.keys()){const l=t.attributes.get(o),d=l==null?void 0:l.indices;if(l&&d)$n(o,l,r,i,a,s);else if(o===f.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const u=(n=t.attributes.get(f.POSITION))==null?void 0:n.indices;if(u){const h=u.length,p=a.getField(o,Wr);Rn(t.objectAndLayerIdColor,p,h,s)}}}}function $n(t,e,r,i,a,s){switch(t){case f.POSITION:{z(e.size===3);const n=a.getField(t,ur);z(!!n,`No buffer view for ${t}`),n&&Sn(e,r,n,s);break}case f.NORMAL:{z(e.size===3);const n=a.getField(t,ur);z(!!n,`No buffer view for ${t}`),n&&En(e,i,n,s);break}case f.NORMALCOMPRESSED:{z(e.size===2);const n=a.getField(t,Ea);z(!!n,`No buffer view for ${t}`),n&&Lr(e,n,s);break}case f.UV0:{z(e.size===2);const n=a.getField(t,Sa);z(!!n,`No buffer view for ${t}`),n&&Lr(e,n,s);break}case f.COLOR:case f.SYMBOLCOLOR:{const n=a.getField(t,Wr);z(!!n,`No buffer view for ${t}`),z(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||An(e,e.size,n,s);break}case f.COLORFEATUREATTRIBUTE:{const n=a.getField(t,Ta);z(!!n,`No buffer view for ${t}`),z(e.size===1),n&&e.size===1&&bn(e,n,s);break}case f.TANGENT:{z(e.size===4);const n=a.getField(t,dr);z(!!n,`No buffer view for ${t}`),n&&xn(e,i,n,s);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{z(e.size===4);const n=a.getField(t,dr);z(!!n,`No buffer view for ${t}`),n&&$i(e,n,s)}}}let dc=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(f.POSITION).indices.length}write(e,r,i,a,s){yn(i,this.vertexBufferLayout,e,r,a,s)}},In=class extends j{constructor(e,r){super(e,"int",S.Pass,(i,a,s)=>i.setUniform1i(e,r(a,s)))}},wn=class extends j{constructor(e,r,i){super(e,"mat4",S.Draw,(a,s,n,o)=>a.setUniformMatrix4fv(e,r(s,n,o)),i)}},On=class extends j{constructor(e,r,i){super(e,"mat4",S.Pass,(a,s,n)=>a.setUniformMatrix4fv(e,r(s,n)),i)}};function pc(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new On("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Ii(t))}function vc(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new wn("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Ii(t))}function Ii(t){const e=t.fragment;e.include(pi),e.uniforms.add(new De("shadowMapTex",(r,i)=>i.shadowMap.depthTexture),new In("numCascades",(r,i)=>i.shadowMap.numCascades),new Z("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)),e.code.add(c`int chooseCascade(float depth, out mat4 mat) {
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
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}function gc(t){ui(t),t.vertex.code.add(c`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(c`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const Ln=Ur(1,1,0,1),Cn=Ur(1,0,1,1);function _c(t){t.fragment.uniforms.add(new De("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",Ln).add("unoccludedHighlightFlag","vec4",Cn),t.fragment.code.add(c`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}function Tc(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new k("lightingAmbientSH0",(a,s)=>U(Cr,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0]))),r.code.add(c`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new Z("lightingAmbientSH_R",(a,s)=>Q(ue,s.lighting.sh.r[0],s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3])),new Z("lightingAmbientSH_G",(a,s)=>Q(ue,s.lighting.sh.g[0],s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3])),new Z("lightingAmbientSH_B",(a,s)=>Q(ue,s.lighting.sh.b[0],s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3]))),r.code.add(c`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):i===2&&(r.uniforms.add(new k("lightingAmbientSH0",(a,s)=>U(Cr,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0])),new Z("lightingAmbientSH_R1",(a,s)=>Q(ue,s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3],s.lighting.sh.r[4])),new Z("lightingAmbientSH_G1",(a,s)=>Q(ue,s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3],s.lighting.sh.g[4])),new Z("lightingAmbientSH_B1",(a,s)=>Q(ue,s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3],s.lighting.sh.b[4])),new Z("lightingAmbientSH_R2",(a,s)=>Q(ue,s.lighting.sh.r[5],s.lighting.sh.r[6],s.lighting.sh.r[7],s.lighting.sh.r[8])),new Z("lightingAmbientSH_G2",(a,s)=>Q(ue,s.lighting.sh.g[5],s.lighting.sh.g[6],s.lighting.sh.g[7],s.lighting.sh.g[8])),new Z("lightingAmbientSH_B2",(a,s)=>Q(ue,s.lighting.sh.b[5],s.lighting.sh.b[6],s.lighting.sh.b[7],s.lighting.sh.b[8]))),r.code.add(c`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==X.Normal&&e.pbrMode!==X.Schematic||r.code.add(c`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Cr=E(),ue=St();function Sc(t,e=!1){return t<=Vr?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function Ec(t){return(ca(t)?t.length:t.byteLength/8)<=Vr?Array.from(t):new Float32Array(t)}function xc(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}function Mn(t){t.vertex.code.add(c`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(c`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(c`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(c`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(c`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(c`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Ac(t){t.uniforms.add(new k("screenSizePerspective",e=>wi(e.screenSizePerspective)))}function Nn(t){t.uniforms.add(new k("screenSizePerspectiveAlignment",e=>wi(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function wi(t){return U(Dn,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Dn=E();function bc(t,e){const r=t.vertex;e.hasVerticalOffset?(Fn(r),e.hasScreenSizePerspective&&(t.include(Mn),Nn(r),_s(t.vertex,e)),r.code.add(c`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?c`vec3 worldNormal = normalize(worldPos + localOrigin);`:c`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?c`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(c`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Pn=St();function Fn(t){t.uniforms.add(new Z("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:a,screenLength:s}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;return Q(Pn,s*o,n,i,a)}))}function Rc(t,e){e.hasVertexColors?(t.attributes.add(f.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(c`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(c`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(c`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{Rc as $,to as A,ka as B,Qn as C,no as D,Mo as E,Ao as F,pr as G,Eo as H,Ca as I,fn as J,X as K,el as L,Tc as M,ni as N,Qa as O,Ol as P,Za as Q,he as R,qo as S,rl as T,bt as U,Wl as V,Xa as W,$l as X,bc as Y,_s as Z,wl as _,B as a,$i as a$,Z as a0,pc as a1,vc as a2,Hl as a3,k as a4,Jo as a5,ko as a6,Go as a7,Vl as a8,_t as a9,rs as aA,El as aB,ic as aC,Bl as aD,Pl as aE,Ne as aF,ac as aG,nl as aH,Ro as aI,en as aJ,ja as aK,Ec as aL,Mn as aM,Fn as aN,Ts as aO,Nn as aP,Ac as aQ,Ln as aR,Cn as aS,Yr as aT,Oo as aU,wo as aV,Tl as aW,is as aX,Sn as aY,En as aZ,An as a_,ql as aa,Yl as ab,Kl as ac,Je as ad,Ct as ae,al as af,Co as ag,Lo as ah,oc as ai,dc as aj,Yo as ak,Fl as al,Sc as am,Pe as an,tl as ao,Wa as ap,ys as aq,kr as ar,Rl as as,br as at,ui as au,jl as av,Zl as aw,Xl as ax,Ql as ay,kl as az,gc as b,cc as b0,Rn as b1,So as b2,Ua as b3,yn as b4,lc as b5,$n as b6,Sl as b7,vl as b8,gl as b9,fl as ba,$o as bb,_l as bc,xc as bd,Jr as be,Lt as bf,Rs as bg,Ha as bh,Ja as c,bl as d,In as e,_c as f,qa as g,Vo as h,J as i,Dl as j,Ll as k,Nl as l,Ss as m,ee as n,Ra as o,ts as p,S as q,wt as r,De as s,Gl as t,j as u,fo as v,Do as w,xa as x,Kt as y,Jn as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./basis_transcoder-iKkZrsXb.js","./index-eSY5-lt-.js","./index-5m03CWEM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}