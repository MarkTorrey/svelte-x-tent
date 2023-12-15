import{i$ as We,nJ as et,db as B,dk as ye,hW as pt,i5 as Mn,nR as aa,d5 as ue,cU as Lr,cN as cr,ha as na,nO as Ln,cR as X,cH as re,d2 as Jt,cC as H,cz as I,c4 as la,e4 as ze,kO as Fn,u as ca,Q as rr,nS as Ns,nT as Nn,hM as mi,D as tt,l as h,e8 as Fr,m as E,aN as Nr,n as Je,cV as qe,lF as li,lj as zs,nU as zn,aF as Rt,da as oe,cG as Y,cD as he,bu as At,ag as da,hU as lt,kp as ys,aL as De,dq as js,dw as Us,dv as $i,dm as Wr,nV as jn,j0 as Un,d3 as ir,d4 as ha,lZ as zr,nW as Vn,nX as Vs,dW as Hs,cF as Pt,nY as Gs,nZ as Hn,d1 as Gn,ib as Bn,hY as Qt,kh as bt,dS as ft,dc as Ye,cX as Wn,k as xi,n_ as ua,n$ as xt,L as sr,f6 as Bs,o0 as ws,dn as Ar,_ as ur,cM as jr,o1 as kn,h_ as kr,m3 as Ve,d6 as Ws,o2 as Ss,h8 as pa,cy as gi,ec as J,li as ks,m1 as qn,o3 as Zn,cY as Yn,gX as Et,mG as _t,mH as Zt,ko as _r,i9 as qs,e9 as Yt,m6 as ge,o4 as Xn,kP as Zs,o5 as Ft,o6 as qr,dz as Cs,cB as Jn,o7 as Qn,hV as ss,iQ as Kn,o8 as el,f5 as Ys,o9 as Xt,oa as tl,ob as rl,dQ as il,o as Ii,eq as Xs,B as sl,f4 as ol,oc as Mi,jK as al,od as nl,it as ll,m2 as cl,cT as dl,i1 as hl,oe as ul,of as pl,og as fl,g$ as bs,oh as ml,oi as gl,oj as vl,iS as _l,gy as yl,nG as wl,nH as Sl,nI as Cl,ca as bl,ok as Ol,ol as xl,om as Tl,b9 as Rl,bB as Al,ih as Pl,on as El,iV as Js,gV as Dl,ic as $l,mg as Il,oo as Ml,op as Ll}from"./index-eSY5-lt-.js";import{o as Fl}from"./floatRGBA-9E5qKLsz.js";import{a as C,R as Pr,x as fa,y as dr,s as Xe,an as hr,o as Z,u as Nl,q as zl,a4 as Kt,T as ci,O as ma,Q as ga,ao as jl,v as pr,w as va,a0 as Te,ap as _a,ad as S,ae as Ur,aq as Qs,l as Os,ar as ya,Z as xs,as as Vr,al as Ul,N as Vl,j as wa,k as Ti,d as Ri,at as Sa,au as Hl,a3 as Ai,P as ct,V as Pi,t as Le,z as fr,A as mr,aa as os,ab as as,ac as Ca,C as gr,av as Ks,aw as Gl,ax as Bl,ay as Wl,az as kl,af as Ts,G as V,a9 as ut,aA as Rs,aB as ba,aC as Li,aD as ql,aE as Zl,aF as Yl,aG as Xl,ai as eo,a6 as Jl,ah as Ql,b as Oa,_ as Kl,f as xa,S as ec,M as tc,K as Ta,a2 as rc,B as Hr,aj as Ra,aH as ic,aI as sc,e as oc,F as ac,aJ as nc,aK as ns,am as Fe,aL as to,aM as Aa,aN as lc,aO as cc,aP as Pa,aQ as dc,a8 as ro,aR as hc,aS as uc,aT as pc,aU as fc,aV as io,ag as mc,aW as gc,ak as vc,aX as _c,aY as yc,aZ as wc,a_ as Sc,a$ as so,b0 as oo,b1 as Cc,$ as bc,m as Oc}from"./VertexColor.glsl-czCP619T.js";import{C as je,L as Ea,D as ao,E as vi,M as xc,_ as _i,F as Tc,R as ht,O as Rc}from"./enums-8pc8f5Ge.js";import{r as ae,n as ee,t as no}from"./vec3f32-cbLeGFQ-.js";import{t as As,a as lo}from"./DoubleArray-5XshLEpX.js";import{A as Ps,l as Ac}from"./Indices-bOD3sMcK.js";import{r as Da,e as vr,a as co,n as ho,b as uo,I as $e,t as N}from"./Geometry-TfLywN1e.js";import{E as Pc,e as m}from"./VertexAttribute-h46lBfqy.js";import{o as Ec,x as Dc,u as $c}from"./interfaces-uUGzHEiK.js";import{x as Ic}from"./BufferView-KywjVo63.js";import{H as it}from"./InterleavedLayout-anHqp-yr.js";import{o as g,n as $a,a as te,S as Ze,c as xr,A as Ei,l as Es,b as Di,E as Ia,_ as rt,f as Mc,d as Ma,e as La,g as Lc,i as Fa,h as Fc}from"./OrderIndependentTransparency-zg-ZjAWW.js";import{t as po,i as Nc,a as zc,e as Ds}from"./basicInterfaces-IwaMq8O_.js";import{u as yi,g as Na}from"./triangulationUtils-JJu18b-M.js";import{h as jc,v as fo,l as mo,L as Uc}from"./MeshTransform-sCiW0N8P.js";import{t as $s}from"./NestedMap-9UouPomH.js";import{W as Vc,I as Hc,u as Gc,L as Bc,l as Zr}from"./Octree-zeHYSLTZ.js";import{t as Ue}from"./VertexElementDescriptor-0hGjloLE.js";import{f as Wc}from"./VertexArrayObject-whl5pCEr.js";import{h as kc}from"./FramebufferObject-FWwprw92.js";import{e as za,T as wi}from"./Texture-4vQG0qLG.js";import{v as ja,M as qc,b as Fi,k as Zc}from"./lineSegment-EzA48HN-.js";import"./boundedPlane-l8xUIJF_.js";import{r as Yc}from"./glUtil-eBq9W4Bb.js";import{a as Ua,s as go}from"./LRUCache-mFQSPLKh.js";var Tr,Si,ls;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(Tr||(Tr={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(Si||(Si={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(ls||(ls={}));var Ci,ke;(function(t){t[t.ADD=0]="ADD",t[t.UPDATE=1]="UPDATE",t[t.REMOVE=2]="REMOVE"})(Ci||(Ci={})),function(t){t[t.NONE=0]="NONE",t[t.VISIBILITY=1]="VISIBILITY",t[t.GEOMETRY=2]="GEOMETRY",t[t.TRANSFORMATION=4]="TRANSFORMATION",t[t.HIGHLIGHT=8]="HIGHLIGHT",t[t.OCCLUDEE=16]="OCCLUDEE"}(ke||(ke={}));var Er;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Er||(Er={}));let Xc=class extends Da{get geometries(){return this._geometries}get transformation(){return this._transformation??We}set transformation(e){this._transformation=et(this._transformation??B(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?et(this._shaderTransformation??B(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=vr.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Va),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){ye(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const r=this._geometries.splice(e,1)[0];r&&(this._emit("geometryRemoved",{object:this,geometry:r}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,r,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:r,sync:i}),Pc(r)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const r of this._geometries)r.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new co(po.MaskOccludee);for(const r of this._geometries)r.occludees=ho(r.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const r of this._geometries)r.occludees=uo(r.occludees,e);this._emit("occlusionChanged",this)}highlight(){const e=new co(po.Highlight);for(const r of this._geometries)r.highlights=ho(r.highlights,e);return this._emit("highlightChanged",this),e}removeHighlight(e){for(const r of this._geometries)r.highlights=uo(r.highlights,e);this._emit("highlightChanged",this)}getCombinedStaticTransformation(e,r){return pt(r,this.transformation,e.transformation)}getCombinedShaderTransformation(e,r=B()){return pt(r,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new vo,this._validateBoundingVolume(this._bvWorldSpace,Rr.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new vo,this._validateBoundingVolume(this._bvObjectSpace,Rr.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,r){const i=r===Rr.ObjectSpace;for(const s of this._geometries){const o=s.boundingInfo;o&&Jc(o,e,i?s.transformation:this.getCombinedShaderTransformation(s))}Mn(e.bounds,e.min,e.max,.5);for(const s of this._geometries){const o=s.boundingInfo;if(o==null)continue;const a=i?s.transformation:this.getCombinedShaderTransformation(s),n=aa(a);ue(_o,o.center,a);const c=Lr(_o,e.bounds),l=o.radius*n;e.bounds[3]=Math.max(e.bounds[3],c+l)}}_invalidateBoundingVolume(){var r;const e=(r=this._bvWorldSpace)==null?void 0:r.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,r){this._parentLayer&&this._parentLayer.events.emit(e,r)}get test(){const e=this;return{hasGeometry:r=>e._geometries.includes(r),getGeometryIndex:r=>e._geometries.indexOf(r)}}},Va=class{constructor(){this.min=cr(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=cr(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}},vo=class extends Va{constructor(){super(...arguments),this.bounds=na()}};function Jc(t,e,r){const i=t.bbMin,s=t.bbMax;if(Ln(r)){const o=X(Qc,r[12],r[13],r[14]);re(Ae,i,o),re(Ne,s,o);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],Ae[a]),e.max[a]=Math.max(e.max[a],Ne[a])}else if(ue(Ae,i,r),Jt(i,s))for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],Ae[o]),e.max[o]=Math.max(e.max[o],Ae[o]);else{ue(Ne,s,r);for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],Ae[o],Ne[o]),e.max[o]=Math.max(e.max[o],Ae[o],Ne[o]);for(let o=0;o<3;++o){H(Ae,i),H(Ne,s),Ae[o]=s[o],Ne[o]=i[o],ue(Ae,Ae,r),ue(Ne,Ne,r);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],Ae[a],Ne[a]),e.max[a]=Math.max(e.max[a],Ae[a],Ne[a])}}}const Qc=I(),Ae=I(),Ne=I(),_o=I();var Rr;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(Rr||(Rr={}));const Kc=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ed=class extends Da{get objects(){return this._objects}constructor(e,r,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=vr.Layer,this.events=new la,this.visible=!0,this.pickable=!0,this.sliceable=!1,this._objects=new ze,this._objectsAdded=new ze,this._handles=new Fn,this.apiLayerUid=i,this.visible=(r==null?void 0:r.visible)??!0,this.pickable=(r==null?void 0:r.pickable)??!0,this.updatePolicy=(r==null?void 0:r.updatePolicy)??Er.ASYNC,this._disableOctree=(r==null?void 0:r.disableOctree)??!1,e.add(this);for(const s of Kc)this._handles.add(this.events.on(s,o=>e.handleEvent(s,o)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const r of e)r.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const r=new Array;if(this._objects.removeUnorderedMany(e,e.length,r),r.length!==0){for(const i of r)i.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:r}),this._octree!=null){for(let i=0;i<r.length;)this._objectsAdded.removeUnordered(r[i])?(r[i]=r[r.length-1],r.length-=1):++i;this._octree.remove(r)}}}sync(){this.updatePolicy!==Er.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,r){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,r)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Vc(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=ca(this._octree),this._objectsAdded.clear()}},td=class extends Wc{};var dt,yo,wo,So;(function(t){t[t.INNER=0]="INNER",t[t.OUTER=1]="OUTER"})(dt||(dt={})),function(t){t[t.REGULAR=0]="REGULAR",t[t.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",t[t.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",t[t.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(yo||(yo={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(wo||(wo={})),function(t){t[t.FADING=0]="FADING",t[t.IMMEDIATE=1]="IMMEDIATE",t[t.UNFADED=2]="UNFADED"}(So||(So={}));let rd=class{constructor(e,r){this.vec3=e,this.id=r}};function cs(t,e,r,i){return new rd(cr(t,e,r),i)}let Co=class{constructor(){this._extent=rr(),this.resolution=0,this.renderLocalOrigin=cs(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new id}get extent(){return this._extent}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const r=.001*e.range;if(this._extent[0]-r<=e.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Ns(this._extent,e.range,0,i)}if(this._extent[2]+r>=e.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Ns(this._extent,-e.range,0,i)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,Nn(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const r=this.canvasGeometries.extents[e];if(r[0]!==r[2]&&r[1]!==r[3])return!0}return!1}},id=class{constructor(){this.extents=[rr(),rr(),rr()],this.numViews=0}};var _e;(function(t){t[t.Color=0]="Color",t[t.ColorNoRasterImage=1]="ColorNoRasterImage",t[t.Highlight=2]="Highlight",t[t.WaterNormal=3]="WaterNormal",t[t.Occluded=4]="Occluded",t[t.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"})(_e||(_e={}));let sd=class{constructor(e,r){this._fbos=e,this._format=r}get valid(){return this._handle!=null}dispose(){this._handle=mi(this._handle)}get texture(){var e;return(e=this._handle)==null?void 0:e.colorTexture}bind(e,r,i){var s,o;this._handle&&this._handle.fbo.width===r&&this._handle.fbo.height===i||((s=this._handle)==null||s.release(),this._handle=this._fbos.acquire(this._format,r,i)),e.bindFramebuffer((o=this._handle)==null?void 0:o.fbo)}generateMipMap(){var e,r,i,s,o;(i=(r=(e=this._handle)==null?void 0:e.colorTexture)==null?void 0:r.descriptor)!=null&&i.hasMipmap&&((o=(s=this._handle)==null?void 0:s.colorTexture)==null||o.generateMipmap())}},od=class{constructor(e,r){this._cache=e(r,(i,s)=>this._remove(i,s))}hitrate(){return this._cache.hitRate}destroy(){this._cache.destroy()}clear(){this._cache.clear()}pop(e){const r=this._cache.peek(e);if(!r)return;const i=r.pop();if(r.length>0){const s=r.reduce((o,a)=>o+a.usedMemory,0);this._cache.updateSize(e,r,s)}else this._cache.pop(e);return i}put(e,r,i=Ua){const s=this._cache.peek(e);if(!s)return void this._cache.put(e,[r],r.usedMemory,i);s.push(r);const o=s.reduce((a,n)=>a+n.usedMemory,0);this._cache.updateSize(e,s,o)}_remove(e,r){var i;switch(r){case go.ALL:return e.forEach(s=>s.dispose()),0;case go.SOME:return(i=e.shift())==null||i.dispose(),e.reduce((s,o)=>s+o.usedMemory,0)}}},Nt=class{constructor(e,r,i,s=Pr.RGBA_MIPMAP){this.output=r,this.content=i,this.fbo=new sd(e,s)}get valid(){return this.fbo.valid}},ad=class{constructor(e){this.targets=[new Nt(e,C.Color,_e.Color),new Nt(e,C.Color,_e.ColorNoRasterImage),new Nt(e,C.Highlight,_e.Highlight,Pr.RGBA4),new Nt(e,C.Normal,_e.WaterNormal),new Nt(e,C.Color,_e.Occluded)],tt("enable-feature:objectAndLayerId-rendering")&&this.targets.push(new Nt(e,C.ObjectAndLayerIdColor,_e.ObjectAndLayerIdColor))}getTexture(e){var r;return(r=this.targets[e])==null?void 0:r.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce((e,r,i)=>r.valid?e|=1<<i:e,0)}};var bo;(function(t){t[t.Material=0]="Material",t[t.ShadowMap=1]="ShadowMap",t[t.Highlight=2]="Highlight"})(bo||(bo={}));function nd(t){t.fragment.code.add(g`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function ld(t){t.fragment.code.add(g`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function cd(t){t.fragment.code.add(g`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}function dd(t,e){const r=t.fragment;r.include(fa),r.uniforms.add(new dr("nearFar",(i,s)=>s.camera.nearFar)),r.uniforms.add(new Xe("depthMap",(i,s)=>{var o;return(o=s.linearDepth)==null?void 0:o.colorTexture})),r.uniforms.add(new hr("proj",(i,s)=>s.camera.projectionMatrix)),r.uniforms.add(new Z("invResolutionHeight",(i,s)=>1/s.camera.height)),r.uniforms.add(new hr("reprojectionMatrix",(i,s)=>s.ssr.reprojectionMatrix)),r.code.add(g`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${e.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}var Tt,bi;function hd(t){return t!=null&&!t.running}(function(t){t[t.RENDERING=0]="RENDERING",t[t.FADING=1]="FADING",t[t.FINISHED=2]="FINISHED"})(Tt||(Tt={})),function(t){t[t.RG=0]="RG",t[t.BA=1]="BA"}(bi||(bi={}));var ds;let Yr=ds=class extends Nr{constructor(t){super(t),this.type="cloudy",this.cloudCover=.5}clone(){return new ds({cloudCover:this.cloudCover})}};h([Fr({cloudy:"cloudy"})],Yr.prototype,"type",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],Yr.prototype,"cloudCover",void 0),Yr=ds=h([Je("esri.views.3d.environment.CloudyWeather")],Yr);var hs;let Xr=hs=class extends Nr{constructor(t){super(t),this.type="foggy",this.fogStrength=.5}clone(){return new hs({fogStrength:this.fogStrength})}};h([Fr({foggy:"foggy"})],Xr.prototype,"type",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],Xr.prototype,"fogStrength",void 0),Xr=hs=h([Je("esri.views.3d.environment.FoggyWeather")],Xr);var us;let yr=us=class extends Nr{constructor(t){super(t),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new us({cloudCover:this.cloudCover,precipitation:this.precipitation})}};h([Fr({rainy:"rainy"})],yr.prototype,"type",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],yr.prototype,"cloudCover",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],yr.prototype,"precipitation",void 0),yr=us=h([Je("esri.views.3d.environment.RainyWeather")],yr);var ps;let zt=ps=class extends Nr{constructor(t){super(t),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new ps({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};h([Fr({snowy:"snowy"})],zt.prototype,"type",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],zt.prototype,"cloudCover",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],zt.prototype,"precipitation",void 0),h([E({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],zt.prototype,"snowCover",void 0),zt=ps=h([Je("esri.views.3d.environment.SnowyWeather")],zt);var fs;let Jr=fs=class extends Nr{constructor(t){super(t),this.type="sunny",this.cloudCover=.5}clone(){return new fs({cloudCover:this.cloudCover})}};h([Fr({sunny:"sunny"})],Jr.prototype,"type",void 0),h([E({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],Jr.prototype,"cloudCover",void 0),Jr=fs=h([Je("esri.views.3d.environment.SunnyWeather")],Jr);const jt=1e4,ud=1e5;let pd=class{constructor(){this.readChannels=bi.RG,this.renderingStage=Tt.FINISHED,this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=I(),this.parallax=new Oo,this.parallaxNew=new Oo,this.pointOnGround=I(),this.fadeMode=q.HIDE,this.fadeFactor=0,this.opacity=0}updateParallax(e){const r=this.parallax,i=qe(e.eye);if(r.radiusCurvatureCorrectionFactor=.84*Math.sqrt(Math.max(i*i-li.radius*li.radius,0))/i,fo(xo,r.anchorPointClouds,Ut),zs(r.transform,We,Ut[3],mo(Ut)),this.fadeMode===q.CROSS_FADE){const s=this.parallaxNew;fo(xo,s.anchorPointClouds,Ut),zs(s.transform,We,Ut[3],mo(Ut))}}updateFading(e,r,i,s){this.isFading&&this._advanceFading(i,s),this._evaluateFading(e,r,i)}_evaluateFading(e,r,i){const s=e.relativeElevation,o=this._calculateDistanceToAnchorPoint(e);if((s>1.7*jt||s<-jt||o>_d)&&this.opacity>0)this._setFade(q.HIDE,i);else if(!this.isFading){if((s>jt||s<-.35*jt||o>vd)&&this.opacity>0)this._setFade(q.FADE_OUT,i);else if(s<=jt&&s>=-.35*jt&&r===zn.IDLE&&hd(this.data)){if(this.opacity===0)return void this._setFade(q.FADE_IN,i);(o>gd||this.renderingStage===Tt.FADING)&&this._setFade(q.CROSS_FADE,i)}}}_advanceFading(e,r){this._switchReadChannels(),this._updateAnchorPoint(),this._advanceFadingFactorAndOpacity(e,r)}_advanceFadingFactorAndOpacity(e,r){if(this.fadeFactor<1)return this.fadeFactor=r?Rt((e-this.startTime)/(md*r),0,1):1,this.fadeMode===q.FADE_OUT&&(this.opacity=1-this.fadeFactor),this.fadeMode===q.FADE_IN&&(this.opacity=this.fadeFactor),void(this.fadeMode===q.CROSS_FADE&&(this.opacity=1));this.fadeFactor=0,this.fadeMode===q.FADE_OUT&&(this.opacity=0),this.fadeMode===q.FADE_IN&&(this.opacity=1),this.fadeMode===q.CROSS_FADE&&(this.opacity=1),this.fadeMode=q.NONE}_switchReadChannels(){const e=this.fadeMode===q.CROSS_FADE&&this.fadeFactor===1,r=this.fadeMode===q.FADE_IN&&this.fadeFactor===0;this.renderingStage===Tt.FADING&&(e||r)&&(this.readChannels=1-this.readChannels,this.renderingStage=Tt.FINISHED)}_calculateDistanceToAnchorPoint(e){return oe(this.pointOnGround,e.eye),Y(this.pointOnGround,this.pointOnGround,li.radius),qe(he(fd,this.parallax.anchorPointClouds,this.pointOnGround))}_updateAnchorPoint(){this.fadeMode===q.CROSS_FADE&&(this.fadeFactor===0&&H(this.parallaxNew.anchorPointClouds,this.pointOnGround),this.fadeFactor===1&&H(this.parallax.anchorPointClouds,this.parallaxNew.anchorPointClouds)),this.fadeMode===q.FADE_IN&&this.fadeFactor===0&&H(this.parallax.anchorPointClouds,this.pointOnGround)}_setFade(e,r){switch(e){case q.HIDE:this.opacity=0;break;case q.FADE_OUT:this.opacity=1;break;case q.FADE_IN:this.opacity=0;break;case q.CROSS_FADE:this.opacity=1}this.fadeMode=e,this.fadeFactor=0,this.startTime=r}get isFading(){return this.fadeMode===q.FADE_OUT||this.fadeMode===q.FADE_IN||this.fadeMode===q.CROSS_FADE}};var q;(function(t){t[t.NONE=0]="NONE",t[t.HIDE=1]="HIDE",t[t.FADE_OUT=2]="FADE_OUT",t[t.FADE_IN=3]="FADE_IN",t[t.CROSS_FADE=4]="CROSS_FADE"})(q||(q={}));let Oo=class{constructor(){this.anchorPointClouds=I(),this.radiusCurvatureCorrectionFactor=0,this.transform=B()}};const xo=cr(0,0,1),Ut=jc(),fd=I(),md=1.25,gd=34e3,vd=64e3,_d=2e5;let yd=class extends Nl{constructor(e,r){super(e,"samplerCube",zl.Pass,(i,s,o)=>i.bindTexture(e,r(s,o)))}};function wd(t){const e=t.fragment;e.uniforms.add(new hr("rotationMatrixClouds",(r,i)=>i.cloudsFade.parallax.transform),new hr("rotationMatrixCloudsCrossFade",(r,i)=>i.cloudsFade.parallaxNew.transform),new Kt("anchorPosition",(r,i)=>i.cloudsFade.parallax.anchorPointClouds),new Kt("anchorPositionCrossFade",(r,i)=>i.cloudsFade.parallaxNew.anchorPointClouds),new Z("cloudsHeight",()=>ud),new Z("radiusCurvatureCorrectionFactor",(r,i)=>i.cloudsFade.parallax.radiusCurvatureCorrectionFactor),new Z("totalFadeInOut",(r,i)=>1-i.cloudsFade.opacity),new Z("crossFadeAnchorFactor",(r,i)=>Rt(i.cloudsFade.fadeFactor,0,1)),new yd("cubeMap",(r,i)=>{var s,o;return((o=(s=i.cloudsFade.data)==null?void 0:s.cubeMap)==null?void 0:o.colorTexture)??null}),new ci("crossFade",(r,i)=>i.cloudsFade.fadeMode===q.CROSS_FADE),new ci("readChannelsRG",(r,i)=>i.cloudsFade.readChannels===bi.RG),new ci("fadeTextureChannels",(r,i)=>i.cloudsFade.renderingStage===Tt.FADING)),e.constants.add("planetRadius","float",li.radius),e.code.add(g`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),e.code.add(g`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),e.code.add(g`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),ma(e),ga(e),e.code.add(g`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),e.code.add(g`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = texture(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),e.code.add(g`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),e.code.add(g`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),e.code.add(g`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}function Sd(t,e){t.include(jl,e),t.include(cd),t.include(ld),e.hasCloudsReflections&&t.include(wd,e),e.hasScreenSpaceReflections&&t.include(dd,e);const r=t.fragment;r.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(g`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new Z("lightingSpecularStrength",(i,s)=>s.lighting.mainLight.specularStrength),new Z("lightingEnvironmentStrength",(i,s)=>s.lighting.mainLight.environmentStrength)),r.code.add(g`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.hasCloudsReflections&&r.code.add(g`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),e.hasScreenSpaceReflections?(r.uniforms.add(new hr("view",(i,s)=>s.camera.viewMatrix),new Xe("lastFrameColorTexture",(i,s)=>{var o;return(o=s.ssr.lastFrameColor)==null?void 0:o.colorTexture}),new Z("fadeFactorSSR",(i,s)=>s.ssr.fadeFactor)),r.code.add(g`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`)):r.code.add(g`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.hasCloudsReflections?e.hasScreenSpaceReflections?r.code.add(g`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(g`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(g`return waterRenderedColor;
}`)}var er;(function(t){t[t.Disabled=0]="Disabled",t[t.Enabled=1]="Enabled",t[t.EnabledWithWater=2]="EnabledWithWater",t[t.COUNT=3]="COUNT"})(er||(er={}));let Is=class extends $a{constructor(){super(...arguments),this.color=At(1,1,1,1)}};function Ha(){const t=new pr;return t.include(va),t.fragment.uniforms.add(new Xe("tex",e=>e.texture),new Te("uColor",e=>e.color)),t.fragment.code.add(g`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * uColor;
}`),t}const Cd=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Is,build:Ha},Symbol.toStringTag,{value:"Module"}));let bd=class{constructor(e){this._context=e,this._perConstructorInstances=new $s,this._frameCounter=0,this._keepAliveFrameCount=To}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}destroy(){this._perConstructorInstances.forEach(e=>e.forEach(r=>r.technique.destroy())),this._perConstructorInstances.clear()}acquire(e,r=xd){const i=r.key;let s=this._perConstructorInstances.get(e,i);if(s==null){const o=new e(this._context,r,()=>this.release(o));s=new Od(o),this._perConstructorInstances.set(e,i,s)}return++s.refCount,s.technique}releaseAndAcquire(e,r,i){if(i!=null){if(r.key===i.key)return i;this.release(i)}return this.acquire(e,r)}release(e){if(e==null||this._perConstructorInstances.empty)return;const r=this._perConstructorInstances.get(e.constructor,e.key);r!=null&&(--r.refCount,r.refCount===0&&(r.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==To&&this._perConstructorInstances.forEach((e,r)=>{e.forEach((i,s)=>{i.refCount===0&&i.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(i.technique.destroy(),this._perConstructorInstances.delete(r,s))})})}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach((r,i)=>{const s=async(o,a)=>{const n=a.shader;n&&(await n.reload(),o.forEach(c=>c.technique.reload(this._context)))};e.push(s(r,i))}),await Promise.all(e)}},Od=class{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}};const To=-1,xd=new _a;function Td(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/e)}function Rd(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/r)}function Ad(t,e,r){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(e*e+r*r))}function Pd(t,e,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(e*e+r*r))}var ms;let j=ms=class extends da{constructor(t={}){super(t),this._center=I(),this._up=I(),this._viewUp=I(),this._viewForward=I(),this._viewRight=I(),this._ray=lt(),this._viewport=At(0,0,1,1),this._padding=At(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=ys(1,1e3),this._viewDirty=!0,this._viewMatrix=B(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=B(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=B(),this._frustumDirty=!0,this._frustum=Hc(),this._fullViewport=De(),this._pixelRatio=1,this.relativeElevation=0}get pixelRatio(){return this._pixelRatio}set pixelRatio(t){this._pixelRatio=t>0?t:1}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin)}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center,"_center")}get ray(){return he(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up,"_up")}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){et(this._viewMatrix,t),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),this._viewForward}get viewUp(){return this._ensureViewClean(),this._viewUp}get viewRight(){return this._ensureViewClean(),this._viewRight}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}get screenViewport(){if(this.pixelRatio===1)return this._viewport;const t=js(De(),this._viewport,1/this.pixelRatio),e=this._get("screenViewport");return e&&Us(t,e)?e:t}get screenPadding(){if(this.pixelRatio===1)return this._padding;const t=js(De(),this._padding,1/this.pixelRatio),e=this._get("screenPadding");return e&&Us(t,e)?e:t}get x(){return this._viewport[0]}set x(t){t+=this._padding[U.LEFT],this._viewport[0]!==t&&(this._viewport[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get y(){return this._viewport[1]}set y(t){t+=this._padding[U.BOTTOM],this._viewport[1]!==t&&(this._viewport[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get fullWidth(){return this._viewport[2]+this._padding[U.RIGHT]+this._padding[U.LEFT]}set fullWidth(t){this.width=t-(this._padding[U.RIGHT]+this._padding[U.LEFT])}get fullHeight(){return this._viewport[3]+this._padding[U.TOP]+this._padding[U.BOTTOM]}set fullHeight(t){this.height=t-(this._padding[U.TOP]+this._padding[U.BOTTOM])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[U.LEFT],this._fullViewport[1]=this._viewport[1]-this._padding[U.BOTTOM],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get _aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){$i(this._padding,t)||(this._viewport[0]+=t[U.LEFT]-this._padding[U.LEFT],this._viewport[1]+=t[U.BOTTOM]-this._padding[U.BOTTOM],this._viewport[2]-=t[U.RIGHT]+t[U.LEFT]-(this._padding[U.RIGHT]+this._padding[U.LEFT]),this._viewport[3]-=t[U.TOP]+t[U.BOTTOM]-(this._padding[U.TOP]+this._padding[U.BOTTOM]),Wr(this._padding,t),this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_padding"),this.notifyChange("_viewport"))}get viewProjectionMatrix(){return this._viewProjectionDirty&&(pt(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){const t=this.width,e=this.height,r=this.near*Math.tan(this.fovY/2),i=r*this._aspect,s=jn(B(),-i*(1+2*this._padding[U.LEFT]/t),i*(1+2*this._padding[U.RIGHT]/t),-r*(1+2*this._padding[U.BOTTOM]/e),r*(1+2*this._padding[U.TOP]/e),this.near,this.far),o=this._get("projectionMatrix");return o&&Un(o,s)?o:s}get inverseProjectionMatrix(){return ir(B(),this.projectionMatrix)||this._get("inverseProjectionMatrix")||B()}get fov(){return this._fov}set fov(t){this._fov=t,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return Ad(this._fov,this.width,this.height)}set fovX(t){this._fov=Td(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return Pd(this._fov,this.width,this.height)}set fovY(t){this._fov=Rd(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return Lr(this.center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(ir(this._viewInverseTransposeMatrix,this.viewMatrix),ha(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){const e=2*t-1;return 2*this.near*this.far/(this.far+this.near-e*(this.far-this.near))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return this.relativeElevation!=null&&this.relativeElevation>=0}copyFrom(t){H(this._ray.origin,t.eye),this.center=t.center,this.up=t.up,Wr(this._viewport,t.viewport),this.notifyChange("_viewport"),Wr(this._padding,t.padding),this.notifyChange("_padding"),zr(this._nearFar,t.nearFar),this.notifyChange("_nearFar"),this._fov=t.fov,this.relativeElevation=t.relativeElevation;const e=t;return this._viewDirty=e._viewDirty,this._viewDirty||(et(this._viewMatrix,t.viewMatrix),H(this._viewRight,t.viewRight),H(this._viewUp,t.viewUp),H(this._viewForward,t.viewForward)),this._viewProjectionDirty=!0,this._frustumDirty=e._frustumDirty,this._frustumDirty||(Gc(this._frustum,t.frustum),this._frustumDirty=!1),e._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(et(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),Wr(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up}clone(){return new ms().copyFrom(this)}equals(t){return Jt(this.eye,t.eye)&&Jt(this.center,t.center)&&Jt(this.up,t.up)&&$i(this._viewport,t.viewport)&&$i(this._padding,t.padding)&&Vn(this.nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation}almostEquals(t){const e=Math.max(1,1/this.pixelRatio,1/t.pixelRatio);if(Math.abs(t.fov-this._fov)>=.001||Vs(t.screenPadding,this.screenPadding)>=e||Vs(this.screenViewport,t.screenViewport)>=e)return!1;Hs(pe,t.eye,t.center),Hs(Ni,this.eye,this.center);const r=Pt(pe,Ni),i=Gs(pe),s=Gs(Ni),o=5e-4;return r*r>=(1-1e-10)*i*s&&Hn(t.eye,this.eye)<Math.max(i,s)*o*o}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perRenderPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t))}_viewDirectionDistance(t){return Math.abs(Gn(this.viewForward,he(pe,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,e){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(e||1)))}getScreenCenter(t=Bn()){return t[0]=(this.padding[U.LEFT]+this.width/2)/this.pixelRatio,t[1]=(this.padding[U.TOP]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,e=.5,r=.5){return t[0]=this.padding[U.LEFT]+this.width*e,t[1]=this.padding[U.BOTTOM]+this.height*r,t[2]=.5,t}setGLViewport(t){const e=this.viewport,r=this.padding;t.setViewport(e[0]-r[3],e[1]-r[2],e[2]+r[1]+r[3],e[3]+r[0]+r[2])}applyProjection(t,e){t!==L&&H(L,t),L[3]=1,Qt(L,L,this.projectionMatrix);const r=Math.abs(L[3]);Y(L,L,1/r);const i=this.fullViewport;e[0]=bt(0,i[0]+i[2],.5+.5*L[0]),e[1]=bt(0,i[1]+i[3],.5+.5*L[1]),e[2]=.5*(L[2]+1),e[3]=r}unapplyProjection(t,e){const r=this.fullViewport;L[0]=(t[0]/(r[0]+r[2])*2-1)*t[3],L[1]=(t[1]/(r[1]+r[3])*2-1)*t[3],L[2]=(2*t[2]-1)*t[3],L[3]=t[3],this.inverseProjectionMatrix!=null&&(Qt(L,L,this.inverseProjectionMatrix),e[0]=L[0],e[1]=L[1],e[2]=L[2])}projectToScreen(t,e){return this.projectToRenderScreen(t,zi),this.renderToScreen(zi,e),e}projectToRenderScreen(t,e){if(L[0]=t[0],L[1]=t[1],L[2]=t[2],L[3]=1,Qt(L,L,this.viewProjectionMatrix),L[3]===0)return null;Y(L,L,1/Math.abs(L[3]));const r=this.fullViewport;return"x"in e?(e.x=bt(0,r[0]+r[2],.5+.5*L[0]),e.y=bt(0,r[1]+r[3],.5+.5*L[1])):(e[0]=bt(0,r[0]+r[2],.5+.5*L[0]),e[1]=bt(0,r[1]+r[3],.5+.5*L[1]),e.length>2&&(e[2]=.5*(L[2]+1))),e}unprojectFromScreen(t,e){return this.unprojectFromRenderScreen(this.screenToRender(t,zi),e)}unprojectFromRenderScreen(t,e){if(pt(Qr,this.projectionMatrix,this.viewMatrix),!ir(Qr,Qr))return null;const r=this.fullViewport;return L[0]=2*(t[0]-r[0])/r[2]-1,L[1]=2*(t[1]-r[1])/r[3]-1,L[2]=2*t[2]-1,L[3]=1,Qt(L,L,Qr),L[3]===0?null:(e[0]=L[0]/L[3],e[1]=L[1]/L[3],e[2]=L[2]/L[3],e)}constrainWindowSize(t,e,r,i){const s=t*this.pixelRatio,o=e*this.pixelRatio,a=Math.max(s-r/2,0),n=Math.max(this.fullHeight-o-i/2,0),c=-Math.min(s-r/2,0),l=-Math.min(this.fullHeight-o-i/2,0),d=r-c- -Math.min(this.fullWidth-s-r/2,0),p=i-l- -Math.min(o-i/2,0);return[Math.round(a),Math.round(n),Math.round(d),Math.round(p)]}computeUp(t){t===ft.Global?this._computeUpGlobal():this._computeUpLocal()}screenToRender(t,e){const r=t[0]*this.pixelRatio,i=this.fullHeight-t[1]*this.pixelRatio;return e[0]=r,e[1]=i,e}renderToScreen(t,e){const r=t[0]/this.pixelRatio,i=(this.fullHeight-t[1])/this.pixelRatio;e[0]=r,e[1]=i}_computeUpGlobal(){he(pe,this.center,this.eye);const t=qe(this.center);t<1?(X(this._up,0,0,1),this._markViewDirty(),this.notifyChange("_up")):Math.abs(Pt(pe,this.center))>.9999*qe(pe)*t||(Ye(this._up,pe,this.center),Ye(this._up,this._up,pe),oe(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_computeUpLocal(){Wn(pe,this.eye,this.center),Math.abs(pe[2])<=.9999&&(Y(pe,pe,pe[2]),X(this._up,-pe[0],-pe[1],1-pe[2]),oe(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_compareAndSetView(t,e,r=""){typeof t[0]=="number"&&isFinite(t[0])&&typeof t[1]=="number"&&isFinite(t[1])&&typeof t[2]=="number"&&isFinite(t[2])?Jt(t,e)||(H(e,t),this._markViewDirty(),r.length&&this.notifyChange(r)):xi.getLogger("esri.views.3d.webgl-engine.lib.Camera").warn("Camera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&(Bc(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&(ua(this._viewMatrix,this.eye,this.center,this.up),X(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),X(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),X(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}};h([E()],j.prototype,"_center",void 0),h([E()],j.prototype,"_up",void 0),h([E()],j.prototype,"_viewport",void 0),h([E()],j.prototype,"_padding",void 0),h([E()],j.prototype,"_fov",void 0),h([E()],j.prototype,"_nearFar",void 0),h([E()],j.prototype,"_pixelRatio",void 0),h([E()],j.prototype,"pixelRatio",null),h([E()],j.prototype,"eye",null),h([E()],j.prototype,"center",null),h([E()],j.prototype,"up",null),h([E({readOnly:!0})],j.prototype,"nearFar",null),h([E()],j.prototype,"near",null),h([E()],j.prototype,"far",null),h([E()],j.prototype,"viewport",null),h([E({readOnly:!0})],j.prototype,"screenViewport",null),h([E({readOnly:!0})],j.prototype,"screenPadding",null),h([E()],j.prototype,"x",null),h([E()],j.prototype,"y",null),h([E()],j.prototype,"width",null),h([E()],j.prototype,"height",null),h([E()],j.prototype,"fullWidth",null),h([E()],j.prototype,"fullHeight",null),h([E({readOnly:!0})],j.prototype,"_aspect",null),h([E()],j.prototype,"padding",null),h([E({readOnly:!0})],j.prototype,"projectionMatrix",null),h([E({readOnly:!0})],j.prototype,"inverseProjectionMatrix",null),h([E()],j.prototype,"fov",null),h([E()],j.prototype,"fovX",null),h([E()],j.prototype,"fovY",null),j=ms=h([Je("esri.views.3d.webgl-engine.lib.Camera")],j);const L=De(),Qr=B(),pe=I(),Ni=I(),zi=xt();var U;(function(t){t[t.TOP=0]="TOP",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.LEFT=3]="LEFT"})(U||(U={}));let Ed=class{constructor(e,r,i,s){this._textureRepository=e,this._techniqueRepository=r,this.materialChanged=i,this.requestRender=s,this._id2glMaterialRef=new $s}dispose(){this._textureRepository.destroy()}acquire(e,r,i){if(this._ownMaterial(e),!e.produces(r,i))return null;let s=this._id2glMaterialRef.get(i,e.id);if(s==null){const o=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRepository:this._textureRepository,output:i});s=new Dd(o),this._id2glMaterialRef.set(i,e.id,s)}return s.ref(),s.glMaterial}release(e,r){const i=this._id2glMaterialRef.get(r,e.id);i!=null&&(i.unref(),i.referenced||(sr(i.glMaterial),this._id2glMaterialRef.delete(r,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&xi.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}},Dd=class{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,ye(this._refCnt>=0)}get referenced(){return this._refCnt>0}};new Ue(m.POSITION,3,je.FLOAT,0,12);new Ue(m.POSITION,3,je.FLOAT,0,20),new Ue(m.UV0,2,je.FLOAT,12,20);new Ue(m.POSITION,3,je.FLOAT,0,32),new Ue(m.NORMAL,3,je.FLOAT,12,32),new Ue(m.UV0,2,je.FLOAT,24,32);new Ue(m.POSITION,3,je.FLOAT,0,16),new Ue(m.COLOR,4,je.UNSIGNED_BYTE,12,16);new Ue(m.POSITION,2,je.FLOAT,0,8);new Ue(m.POSITION,2,je.FLOAT,0,16),new Ue(m.UV0,2,je.FLOAT,8,16);function $d(t){const e=new za(1);return e.samplingMode=Ea.NEAREST,new wi(t,e,new Uint8Array([255,255,255,255]))}let Id=class{constructor(){this.enabled=!0,this._time=Bs(0)}get time(){return this._time}advance({deltaTime:e,fixedTime:r}){return r!=null?this._time!==r&&(this._time=r,!0):(this._time=Bs(this._time+e),e!==0)}};var Dt,Dr;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(Dt||(Dt={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(Dr||(Dr={}));let le=class extends Ur{constructor(){super(...arguments),this.output=C.Color,this.transparencyPassType=te.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=Dt.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=Dr.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}get draped(){return this.space===Dt.Draped}};h([S({count:C.COUNT})],le.prototype,"output",void 0),h([S({count:te.COUNT})],le.prototype,"transparencyPassType",void 0),h([S()],le.prototype,"occluder",void 0),h([S()],le.prototype,"hasSlicePlane",void 0),h([S()],le.prototype,"writeDepth",void 0),h([S({count:Dt.COUNT})],le.prototype,"space",void 0),h([S()],le.prototype,"hideOnShortSegments",void 0),h([S()],le.prototype,"hasCap",void 0),h([S({count:Dr.COUNT})],le.prototype,"anchor",void 0),h([S()],le.prototype,"hasTip",void 0),h([S()],le.prototype,"vvSize",void 0),h([S()],le.prototype,"vvColor",void 0),h([S()],le.prototype,"vvOpacity",void 0),h([S()],le.prototype,"hasOccludees",void 0),h([S()],le.prototype,"multipassEnabled",void 0),h([S()],le.prototype,"cullAboveGround",void 0),h([S({constValue:!1})],le.prototype,"occlusionPass",void 0),h([S({constValue:!0})],le.prototype,"hasVvInstancing",void 0),h([S({constValue:!0})],le.prototype,"hasSliceTranslatedView",void 0);const Ro=8;function Md(t,e){const r=t.vertex;r.uniforms.add(new Z("intrinsicWidth",i=>i.width)),e.vvSize?(t.attributes.add(m.SIZEFEATUREATTRIBUTE,"float"),r.uniforms.add(new Kt("vvSizeMinSize",i=>i.vvSize.minSize),new Kt("vvSizeMaxSize",i=>i.vvSize.maxSize),new Kt("vvSizeOffset",i=>i.vvSize.offset),new Kt("vvSizeFactor",i=>i.vvSize.factor)),r.code.add(g`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(m.SIZE,"float"),r.code.add(g`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(m.OPACITYFEATUREATTRIBUTE,"float"),r.constants.add("vvOpacityNumber","int",8),r.uniforms.add(new Qs("vvOpacityValues",i=>i.vvOpacity.values,Ro),new Qs("vvOpacityOpacities",i=>i.vvOpacity.opacityValues,Ro)),r.code.add(g`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):r.code.add(g`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(Os,e),t.attributes.add(m.COLORFEATUREATTRIBUTE,"float"),r.code.add(g`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(m.COLOR,"vec4"),r.code.add(g`vec4 getColor(){
return applyOpacity(color);
}`))}function Ga(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function Ld(t){if(t==null)return 1;const e=Ga(t);return Math.floor(e.reduce((r,i)=>r+i))}function Fd(t){return Ga(t).reduce((e,r)=>Math.max(e,r))}function Nd(t){return t==null?ws:t.length===4?t:Ar(zd,t[0],t[1],t[2],1)}const zd=De();function jd(t,e){t.constants.add("stippleAlphaColorDiscard","float",.001),t.constants.add("stippleAlphaHighlightDiscard","float",.5),e.stippleEnabled?Ud(t,e):Vd(t)}function Ud(t,e){const r=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:s}=t;s.include(ya),e.draped||(xs(i,e),i.uniforms.add(new Z("worldToScreenPerDistanceRatio",(o,a)=>1/a.camera.perScreenPixelRatio)),i.code.add(g`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),i.code.add(g`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${Gd};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),i.code.add(g`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),i.code.add(g`
    if (segmentLengthPseudoScreen >= ${r?"patternLength":"1e4"}) {
  `),Vr(i),i.code.add(g`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),s.uniforms.add(new Xe("stipplePatternTexture",o=>o.stippleTexture),new Z("stipplePatternSDFNormalizer",o=>Hd(o.stipplePattern)),new Z("stipplePatternPixelSizeInv",o=>1/Ba(o))),s.code.add(g`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),e.stippleOffColorEnabled?(s.uniforms.add(new Te("stippleOffColor",o=>Nd(o.stippleOffColor))),s.code.add(g`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):s.code.add(g`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Vd(t){t.fragment.code.add(g`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function Hd(t){return t?(Math.floor(.5*(Fd(t)-1))+.5)/t.pixelRatio:1}function Ba(t){const e=t.stipplePattern;return e?Ld(t.stipplePattern)/e.pixelRatio:1}const Gd=g.float(.4),Wa=128,ka=.5;function Mf(t){return t==="cross"||t==="x"}function Lf(t,e=Wa,r=e*ka,i=0){const s=Bd(t,e,r,i);return new Ul(s,{mipmap:!1,wrap:{s:ao.CLAMP_TO_EDGE,t:ao.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0})}function Bd(t,e=Wa,r=e*ka,i=0){switch(t){case"circle":default:return Wd(e,r);case"square":return kd(e,r);case"cross":return Zd(e,r,i);case"x":return Yd(e,r,i);case"kite":return qd(e,r);case"triangle":return Xd(e,r);case"arrow":return Jd(e,r)}}function Wd(t,e){const r=t/2-.5;return Gr(t,Ya(r,r,e/2))}function kd(t,e){return qa(t,e,!1)}function qd(t,e){return qa(t,e,!0)}function Zd(t,e,r=0){return Za(t,e,!1,r)}function Yd(t,e,r=0){return Za(t,e,!0,r)}function Xd(t,e){return Gr(t,Xa(t/2,e,e/2))}function Jd(t,e){const r=e,i=e/2,s=t/2,o=.8*r,a=Ya(s,(t-e)/2-o,Math.sqrt(o*o+i*i)),n=Xa(s,r,i);return Gr(t,(c,l)=>Math.max(n(c,l),-a(c,l)))}function qa(t,e,r){return r&&(e/=Math.SQRT2),Gr(t,(i,s)=>{let o=i-.5*t+.25,a=.5*t-s-.75;if(r){const n=(o+a)/Math.SQRT2;a=(a-o)/Math.SQRT2,o=n}return Math.max(Math.abs(o),Math.abs(a))-.5*e})}function Za(t,e,r,i=0){e-=i,r&&(e*=Math.SQRT2);const s=.5*e;return Gr(t,(o,a)=>{let n,c=o-.5*t,l=.5*t-a-1;if(r){const d=(c+l)/Math.SQRT2;l=(l-c)/Math.SQRT2,c=d}return c=Math.abs(c),l=Math.abs(l),n=c>l?c>s?Math.sqrt((c-s)*(c-s)+l*l):l:l>s?Math.sqrt(c*c+(l-s)*(l-s)):c,n-=i/2,n})}function Ya(t,e,r){return(i,s)=>{const o=i-t,a=s-e;return Math.sqrt(o*o+a*a)-r}}function Xa(t,e,r){const i=Math.sqrt(e*e+r*r);return(s,o)=>{const a=Math.abs(s-t)-r,n=o-t+e/2+.75,c=(e*a+r*n)/i,l=-n;return Math.max(c,l)}}function Gr(t,e){const r=new Uint8Array(4*t*t);for(let i=0;i<t;i++)for(let s=0;s<t;s++){const o=s+t*i;let a=e(s,i);a=a/t+.5,Fl(a,r,4*o)}return r}const Ja=64,Qd=Ja/2,Kd=Qd/5,eh=Ja/Kd,Ff=.25;function th(t,e){const{vertex:r,constants:i}=t;i.add("markerSizePerLineWidth","float",eh),Vr(r),r.uniforms.get("markerScale")==null&&r.constants.add("markerScale","float",1),r.code.add(g`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===Dt.World&&(r.constants.add("maxSegmentLengthFraction","float",.45),r.uniforms.add(new Z("perRenderPixelRatio",(s,o)=>o.camera.perRenderPixelRatio)),r.code.add(g`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var $t;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})($t||($t={}));let k=class extends Ur{constructor(){super(...arguments),this.output=C.Color,this.capType=$t.BUTT,this.transparencyPassType=te.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}};h([S({count:C.COUNT})],k.prototype,"output",void 0),h([S({count:$t.COUNT})],k.prototype,"capType",void 0),h([S({count:te.COUNT})],k.prototype,"transparencyPassType",void 0),h([S()],k.prototype,"occluder",void 0),h([S()],k.prototype,"hasSlicePlane",void 0),h([S()],k.prototype,"hasPolygonOffset",void 0),h([S()],k.prototype,"writeDepth",void 0),h([S()],k.prototype,"draped",void 0),h([S()],k.prototype,"stippleEnabled",void 0),h([S()],k.prototype,"stippleOffColorEnabled",void 0),h([S()],k.prototype,"stipplePreferContinuous",void 0),h([S()],k.prototype,"roundJoins",void 0),h([S()],k.prototype,"applyMarkerOffset",void 0),h([S()],k.prototype,"vvSize",void 0),h([S()],k.prototype,"vvColor",void 0),h([S()],k.prototype,"vvOpacity",void 0),h([S()],k.prototype,"falloffEnabled",void 0),h([S()],k.prototype,"innerColorEnabled",void 0),h([S()],k.prototype,"hasOccludees",void 0),h([S()],k.prototype,"multipassEnabled",void 0),h([S()],k.prototype,"cullAboveGround",void 0),h([S()],k.prototype,"wireframe",void 0),h([S()],k.prototype,"objectAndLayerIdColorInstanced",void 0),h([S({constValue:!1})],k.prototype,"occlusionPass",void 0),h([S({constValue:!0})],k.prototype,"hasVvInstancing",void 0),h([S({constValue:!0})],k.prototype,"hasSliceTranslatedView",void 0);const $r=1;function Qa(t){const e=new pr,{vertex:r,fragment:i}=e,s=t.multipassEnabled&&(t.output===C.Color||t.output===C.Alpha);e.include(Vl),e.include(Md,t),e.include(jd,t);const o=t.applyMarkerOffset&&!t.draped;o&&(r.uniforms.add(new Z("markerScale",f=>f.markerScale)),e.include(th,{space:Dt.World,draped:!1})),t.output===C.Depth&&e.include(wa,t),e.include(Ti,t),Ri(r,t),r.uniforms.add(new hr("inverseProjectionMatrix",(f,v)=>v.camera.inverseProjectionMatrix),new dr("nearFar",(f,v)=>v.camera.nearFar),new Z("miterLimit",f=>f.join!=="miter"?0:f.miterLimit),new Te("viewport",(f,v)=>v.camera.fullViewport)),r.constants.add("LARGE_HALF_FLOAT","float",65500),e.attributes.add(m.POSITION,"vec3"),e.attributes.add(m.SUBDIVISIONFACTOR,"float"),e.attributes.add(m.UV0,"vec2"),e.attributes.add(m.AUXPOS1,"vec3"),e.attributes.add(m.AUXPOS2,"vec3"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),Sa(e),s&&e.varyings.add("depth","float");const a=t.stippleEnabled;a&&e.varyings.add("vLineSizeInv","float");const n=t.capType===$t.ROUND,c=a||n;c&&e.varyings.add("vLineWidth","float");const l=t.innerColorEnabled||n;l&&e.varyings.add("vLineDistance","float");const d=t.stippleEnabled&&n,p=t.falloffEnabled||d;p&&e.varyings.add("vLineDistanceNorm","float"),n&&(e.varyings.add("vSegmentSDF","float"),e.varyings.add("vReverseSegmentSDF","float")),r.code.add(g`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),r.code.add(g`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),Hl(e),r.code.add(g`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${s?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Vr(r),r.code.add(g`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${c?g`vLineWidth = lineWidth;`:""}
      ${a?g`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),o&&r.code.add(g`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),r.code.add(g`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(t.stippleEnabled||n)&&r.code.add(g`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${n?g`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),r.code.add(g`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),t.roundJoins?r.code.add(g`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${t.stippleEnabled?g`min(1.0, subdivisionFactor * ${g.float(($r+2)/($r+1))})`:g`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):r.code.add(g`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const u=t.capType!==$t.BUTT;return r.code.add(g`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${u?g`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),r.code.add(g`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${p||l?g`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${l?g`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${p?g`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),n&&r.code.add(g`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),t.stippleEnabled&&(t.draped?r.uniforms.add(new Z("worldToScreenRatio",(f,v)=>1/v.screenToPCSRatio)):r.code.add(g`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.code.add(g`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),t.draped?r.code.add(g`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):r.code.add(g`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),r.uniforms.add(new Z("stipplePatternPixelSize",f=>Ba(f))),r.code.add(g`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),r.code.add(g`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${t.wireframe&&!t.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),s&&e.include(Ai,t),e.include(ct,t),i.include(Pi),i.code.add(g`
  void main() {
    discardBySlice(vpos);
    ${s?"terrainDepthTest(depth);":""}
  `),t.wireframe?i.code.add(g`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(n&&i.code.add(g`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${g.float(Le)}) {
        discard;
      }
    `),d?i.code.add(g`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${g.float(Le)}, stippleCoverage);
      `):i.code.add(g`float stippleAlpha = getStippleAlpha();`),t.output!==C.ObjectAndLayerIdColor&&i.code.add(g`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`),i.uniforms.add(new Te("intrinsicColor",f=>f.color)),i.code.add(g`vec4 color = intrinsicColor * vColor;`),t.innerColorEnabled&&(i.uniforms.add(new Te("innerColor",f=>f.innerColor??f.color),new Z("innerWidth",(f,v)=>f.innerWidth*v.camera.pixelRatio)),i.code.add(g`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),i.code.add(g`vec4 finalColor = blendStipple(color, stippleAlpha);`),t.falloffEnabled&&(i.uniforms.add(new Z("falloff",f=>f.falloff)),i.code.add(g`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),i.code.add(g`
    ${t.output===C.ObjectAndLayerIdColor?g`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${g.float(Le)}) {
      discard;
    }

    ${t.output===C.Alpha?g`fragColor = vec4(finalColor.a);`:""}
    ${t.output===C.Color?g`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${t.output===C.Color&&t.transparencyPassType===te.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    ${t.output===C.Highlight?g`fragColor = vec4(1.0);`:""}
    ${t.output===C.Depth?g`outputDepth(linearDepth);`:""}
    ${t.output===C.ObjectAndLayerIdColor?g`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const rh=Object.freeze(Object.defineProperty({__proto__:null,build:Qa,ribbonlineNumRoundJoinSubdivisions:$r},Symbol.toStringTag,{value:"Module"})),Ka=new Map([[m.POSITION,0],[m.SUBDIVISIONFACTOR,1],[m.UV0,2],[m.AUXPOS1,3],[m.AUXPOS2,4],[m.COLOR,5],[m.COLORFEATUREATTRIBUTE,5],[m.SIZE,6],[m.SIZEFEATUREATTRIBUTE,6],[m.OPACITYFEATUREATTRIBUTE,7],[m.OBJECTANDLAYERIDCOLOR,8]]);let en=class tn extends fr{initializeProgram(e){return new mr(e.rctx,tn.shader.get().build(this.configuration),Ka)}_makePipelineState(e,r){const i=this.configuration,s=e===te.NONE,o=e===te.FrontFace;return Ze({blending:i.output===C.Color||i.output===C.Alpha?s?xr:Ei(e):null,depthTest:{func:Es(e)},depthWrite:s?i.writeDepth?Di:null:Ia(e),colorWrite:rt,stencilWrite:i.hasOccludees?os:null,stencilTest:i.hasOccludees?r?as:Ca:null,polygonOffset:s||o?i.hasPolygonOffset?Ao:null:Mc})}initializePipeline(){const e=this.configuration;if(e.occluder){const r=e.hasPolygonOffset?Ao:null;this._occluderPipelineTransparent=Ze({blending:xr,polygonOffset:r,depthTest:Ks,depthWrite:null,colorWrite:rt,stencilWrite:null,stencilTest:Gl}),this._occluderPipelineOpaque=Ze({blending:xr,polygonOffset:r,depthTest:Ks,depthWrite:null,colorWrite:rt,stencilWrite:Bl,stencilTest:Wl}),this._occluderPipelineMaskWrite=Ze({blending:null,polygonOffset:r,depthTest:kl,depthWrite:null,colorWrite:null,stencilWrite:os,stencilTest:as})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?vi.LINES:vi.TRIANGLE_STRIP}getPipeline(e,r,i){return e?this._occludeePipelineState:this.configuration.occluder?i?this._occluderPipelineTransparent:r?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipeline()}};en.shader=new gr(rh,()=>ur(()=>Promise.resolve().then(()=>Ip),void 0,import.meta.url));const Ao={factor:0,units:-4};var xe;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(xe||(xe={}));let ih=class extends Ts{constructor(e){super(e,new oh),this._configuration=new k,this._vertexAttributeLocations=Ka}getConfiguration(e,r){this._configuration.output=e,this._configuration.draped=r.slot===V.DRAPED_MATERIAL;const i=this.parameters.stipplePattern!=null&&e!==C.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&nh(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.occluder=this.parameters.renderOccluded===ut.OccludeAndTransparentStencil,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.wireframe=this.parameters.wireframe,this._configuration}intersectDraped(e,r,i,s,o,a){if(!i.options.selectionMode)return;const n=e.attributes.get(m.POSITION).data,c=e.attributes.get(m.SIZE);let l=this.parameters.width;if(this.parameters.vvSize){const _=e.attributes.get(m.SIZEFEATUREATTRIBUTE).data[0];l*=Rt(this.parameters.vvSize.offset[0]+_*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else c&&(l*=c.data[0]);const d=s[0],p=s[1],u=(l/2+4)*e.screenToWorldRatio;let f=Number.MAX_VALUE,v=0;for(let _=0;_<n.length-5;_+=3){const b=n[_],x=n[_+1],w=d-b,y=p-x,D=n[_+3]-b,O=n[_+4]-x,R=Rt((D*w+O*y)/(D*D+O*O),0,1),T=D*R-w,z=O*R-y,$=T*T+z*z;$<f&&(f=$,v=_/3)}f<u*u&&o(a.dist,a.normal,v,!1)}intersect(e,r,i,s,o,a){if(!i.options.selectionMode||!e.visible)return;if(!kn(r))return void xi.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const n=e.attributes,c=n.get(m.POSITION).data;let l=this.parameters.width;if(this.parameters.vvSize){const w=n.get(m.SIZEFEATUREATTRIBUTE).data[0];l*=Rt(this.parameters.vvSize.offset[0]+w*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n.has(m.SIZE)&&(l*=n.get(m.SIZE).data[0]);const d=i.camera,p=lh;zr(p,i.point);const u=l*d.pixelRatio/2+4*d.pixelRatio;X(wr[0],p[0]-u,p[1]+u,0),X(wr[1],p[0]+u,p[1]+u,0),X(wr[2],p[0]+u,p[1]-u,0),X(wr[3],p[0]-u,p[1]-u,0);for(let w=0;w<4;w++)if(!d.unprojectFromRenderScreen(wr[w],Ke[w]))return;kr(d.eye,Ke[0],Ke[1],Ui),kr(d.eye,Ke[1],Ke[2],Vi),kr(d.eye,Ke[2],Ke[3],Hi),kr(d.eye,Ke[3],Ke[0],Gi);let f=Number.MAX_VALUE,v=0;const _=rn(this.parameters,n)?c.length-2:c.length-5;for(let w=0;w<_;w+=3){we[0]=c[w]+r[12],we[1]=c[w+1]+r[13],we[2]=c[w+2]+r[14];const y=(w+3)%c.length;if(Se[0]=c[y]+r[12],Se[1]=c[y+1]+r[13],Se[2]=c[y+2]+r[14],Ve(Ui,we)<0&&Ve(Ui,Se)<0||Ve(Vi,we)<0&&Ve(Vi,Se)<0||Ve(Hi,we)<0&&Ve(Hi,Se)<0||Ve(Gi,we)<0&&Ve(Gi,Se)<0)continue;if(d.projectToRenderScreen(we,wt),d.projectToRenderScreen(Se,St),wt[2]<0&&St[2]>0){he(He,we,Se);const O=d.frustum,R=-Ve(O[Zr.NEAR],we)/Pt(He,Ws(O[Zr.NEAR]));Y(He,He,R),re(we,we,He),d.projectToRenderScreen(we,wt)}else if(wt[2]>0&&St[2]<0){he(He,Se,we);const O=d.frustum,R=-Ve(O[Zr.NEAR],Se)/Pt(He,Ws(O[Zr.NEAR]));Y(He,He,R),re(Se,Se,He),d.projectToRenderScreen(Se,St)}else if(wt[2]<0&&St[2]<0)continue;wt[2]=0,St[2]=0;const D=qc(Fi(wt,St,Do),p);D<f&&(f=D,H(Po,we),H(Eo,Se),v=w/3)}const b=i.rayBegin,x=i.rayEnd;if(f<u*u){let w=Number.MAX_VALUE;if(Zc(Fi(Po,Eo,Do),Fi(b,x,ch),yt)){he(yt,yt,b);const y=qe(yt);Y(yt,yt,1/y),w=y/Lr(b,x)}a(w,yt,v,!1)}}get _layout(){const e=it().vec3f(m.POSITION).f32(m.SUBDIVISIONFACTOR).vec2f(m.UV0).vec3f(m.AUXPOS1).vec3f(m.AUXPOS2);return this.parameters.vvSize?e.f32(m.SIZEFEATUREATTRIBUTE):e.f32(m.SIZE),this.parameters.vvColor?e.f32(m.COLORFEATUREATTRIBUTE):e.vec4f(m.COLOR),this.parameters.vvOpacity&&e.f32(m.OPACITYFEATUREATTRIBUTE),tt("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(m.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new ah(this._layout,this.parameters)}produces(e,r){return r===C.Color||r===C.Alpha||r===C.Highlight||r===C.Depth||r===C.ObjectAndLayerIdColor?e===V.DRAPED_MATERIAL?!0:this.parameters.renderOccluded===ut.OccludeAndTransparentStencil?e===V.OPAQUE_MATERIAL||e===V.OCCLUDER_MATERIAL||e===V.TRANSPARENT_OCCLUDER_MATERIAL:r===C.Color||r===C.Alpha?e===(this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e===V.OPAQUE_MATERIAL:!1}createGLMaterial(e){return new sh(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}},sh=class extends Rs{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==C.Color&&this._output!==C.Alpha||this._updateOccludeeState(e);const r=this._material.parameters.stipplePattern;return this._stipplePattern!==r&&(this._material.setParameters({stippleTexture:this._stippleTextureRepository.swap(r,this._stipplePattern)}),this._stipplePattern=r),this.ensureTechnique(en,e)}},oh=class extends ba{constructor(){super(...arguments),this.width=0,this.color=Ss,this.join="miter",this.cap=$t.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}},ah=class{constructor(e,r){this.vertexBufferLayout=e,this._parameters=r,this.numJoinSubdivisions=0;const i=r.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=$r+i}}_isClosed(e){return rn(this._parameters,e.attributes)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const i=e.attributes.get(m.POSITION).indices.length/2+1,s=this._isClosed(e);let o=s?2:2*2;return o+=((s?i:i-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),o+=2,this._parameters.wireframe&&(o=2+4*(o-2)),o}write(e,r,i,s,o){var M;const a=dh,n=hh,c=uh,l=i.attributes.get(m.POSITION),d=l.indices,p=l.data.length/3,u=(M=i.attributes.get(m.DISTANCETOSTART))==null?void 0:M.data;d&&d.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");let f=1,v=0;const _=this.vertexBufferLayout.fields.has(m.SIZEFEATUREATTRIBUTE);_?v=i.attributes.get(m.SIZEFEATUREATTRIBUTE).data[0]:i.attributes.has(m.SIZE)&&(f=i.attributes.get(m.SIZE).data[0]);let b=[1,1,1,1],x=0;const w=this.vertexBufferLayout.fields.has(m.COLORFEATUREATTRIBUTE);w?x=i.attributes.get(m.COLORFEATUREATTRIBUTE).data[0]:i.attributes.has(m.COLOR)&&(b=i.attributes.get(m.COLOR).data);const y=tt("enable-feature:objectAndLayerId-rendering")?i.objectAndLayerIdColor:null;let D=0;const O=this.vertexBufferLayout.fields.has(m.OPACITYFEATUREATTRIBUTE);O&&(D=i.attributes.get(m.OPACITYFEATUREATTRIBUTE).data[0]);const R=new Float32Array(s.buffer),T=tt("enable-feature:objectAndLayerId-rendering")?new Uint8Array(s.buffer):null,z=this.vertexBufferLayout.stride/4;let $=o*z;const P=$;let G=0;const W=u?(Q,ne,Re)=>G=u[Re]:(Q,ne,Re)=>G+=Lr(Q,ne),Mt=tt("enable-feature:objectAndLayerId-rendering"),be=(Q,ne,Re,Qe,Lt,$n,In)=>{if(R[$++]=ne[0],R[$++]=ne[1],R[$++]=ne[2],R[$++]=Qe,R[$++]=In,R[$++]=Lt,R[$++]=Q[0],R[$++]=Q[1],R[$++]=Q[2],R[$++]=Re[0],R[$++]=Re[1],R[$++]=Re[2],R[$++]=_?v:f,w)R[$++]=x;else{const Br=Math.min(4*$n,b.length-4);R[$++]=b[Br],R[$++]=b[Br+1],R[$++]=b[Br+2],R[$++]=b[Br+3]}O&&(R[$++]=D),Mt&&(y!=null&&(T[4*$]=y[0],T[4*$+1]=y[1],T[4*$+2]=y[2],T[4*$+3]=y[3]),$++)};$+=z,X(n,l.data[0],l.data[1],l.data[2]),e&&ue(n,n,e);const st=this._isClosed(i);if(st){const Q=l.data.length-3;X(a,l.data[Q],l.data[Q+1],l.data[Q+2]),e&&ue(a,a,e)}else X(c,l.data[3],l.data[4],l.data[5]),e&&ue(c,c,e),be(n,n,c,1,xe.LEFT_CAP_START,0,0),be(n,n,c,1,xe.RIGHT_CAP_START,0,0),H(a,n),H(n,c);const gt=st?0:1,vt=st?p:p-1;for(let Q=gt;Q<vt;Q++){const ne=(Q+1)%p*3;X(c,l.data[ne],l.data[ne+1],l.data[ne+2]),e&&ue(c,c,e),W(a,n,Q),be(a,n,c,0,xe.LEFT_JOIN_END,Q,G),be(a,n,c,0,xe.RIGHT_JOIN_END,Q,G);const Re=this.numJoinSubdivisions;for(let Qe=0;Qe<Re;++Qe){const Lt=(Qe+1)/(Re+1);be(a,n,c,Lt,xe.LEFT_JOIN_END,Q,G),be(a,n,c,Lt,xe.RIGHT_JOIN_END,Q,G)}be(a,n,c,1,xe.LEFT_JOIN_START,Q,G),be(a,n,c,1,xe.RIGHT_JOIN_START,Q,G),H(a,n),H(n,c)}st?(X(c,l.data[3],l.data[4],l.data[5]),e&&ue(c,c,e),G=W(a,n,vt),be(a,n,c,0,xe.LEFT_JOIN_END,gt,G),be(a,n,c,0,xe.RIGHT_JOIN_END,gt,G)):(G=W(a,n,vt),be(a,n,n,0,xe.LEFT_CAP_END,vt,G),be(a,n,n,0,xe.RIGHT_CAP_END,vt,G)),ji(R,P+z,R,P,z),$=ji(R,$-z,R,$,z),this._parameters.wireframe&&this._addWireframeVertices(s,P,$,z)}_addWireframeVertices(e,r,i,s){const o=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT,i-r);let n=0;const c=l=>n=ji(a,l,o,n,s);for(let l=0;l<a.length-1;l+=2*s)c(l),c(l+2*s),c(l+1*s),c(l+2*s),c(l+1*s),c(l+3*s)}};function ji(t,e,r,i,s){for(let o=0;o<s;o++)r[i++]=t[e++];return i}function rn(t,e){return t.isClosed?e.get(m.POSITION).indices.length>2:!1}function nh(t){return t.anchor===Dr.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const we=I(),Se=I(),He=I(),yt=I(),lh=I(),wt=xt(),St=xt(),Po=I(),Eo=I(),Do=ja(),ch=ja(),dh=I(),hh=I(),uh=I(),wr=[xt(),xt(),xt(),xt()],Ke=[I(),I(),I(),I()],Ui=jr(),Vi=jr(),Hi=jr(),Gi=jr();let ph=class{constructor(e){this._originSR=e,this._rootOriginId="root/"+pa(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const r=this._origins.get(this._rootOriginId);if(r==null){const d=cs(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const i=this._gridSize,s=Math.round(e[0]/i),o=Math.round(e[1]/i),a=Math.round(e[2]/i),n=`${s}/${o}/${a}`;let c=this._origins.get(n);const l=.5*i;if(he(ce,e,r.vec3),ce[0]=Math.abs(ce[0]),ce[1]=Math.abs(ce[1]),ce[2]=Math.abs(ce[2]),ce[0]<l&&ce[1]<l&&ce[2]<l){if(c){const d=Math.max(...ce);if(he(ce,e,c.vec3),ce[0]=Math.abs(ce[0]),ce[1]=Math.abs(ce[1]),ce[2]=Math.abs(ce[2]),Math.max(...ce)<d)return c}return r}return c||(c=cs(s*i,o*i,a*i,n),this._origins.set(n,c)),c}_drawOriginBox(e,r=At(1,1,0,1)){const i=window.view,s=i._stage,o=r.toString();if(!this._objects.has(o)){this._material=new ih({width:2,color:r}),s.add(this._material);const f=new ed(s,{pickable:!1}),v=new Xc({castShadow:!1});s.add(v),f.add(v),this._objects.set(o,v)}const a=this._objects.get(o),n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],c=n.length,l=new Array(3*c),d=new Array,p=.5*this._gridSize;for(let f=0;f<c;f++)l[3*f]=e[0]+(1&n[f]?p:-p),l[3*f+1]=e[1]+(2&n[f]?p:-p),l[3*f+2]=e[2]+(4&n[f]?p:-p),f>0&&d.push(f-1,f);gi(l,this._originSR,0,l,i.renderSpatialReference,0,c);const u=new $e(this._material,[[m.POSITION,new N(l,d,3,!0)]],null,vr.Line);s.add(u),a.addGeometry(u)}get test(){const e=this;return{set gridSize(r){e._gridSize=r}}}};const ce=I();var Ir;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(Ir||(Ir={}));function fh(t){t.include(fa),t.uniforms.add(new Xe("geometryDepthTexture",(e,r)=>{var i;return(i=r.multipassGeometry.linearDepth)==null?void 0:i.colorTexture}),new dr("nearFar",(e,r)=>r.camera.nearFar)),t.code.add(g`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}let mh=class{},gh=class{constructor(e,r){this.shadowMap=e,this.slicePlane=r,this.slot=V.OPAQUE_MATERIAL,this.hasOccludees=!1,this.enableFillLights=!0,this.transparencyPassType=te.NONE,this.alignPixelEnabled=!1,this.decorations=Nc.ON,this.overlayStretch=1,this._camera=new j,this._inverseViewport=J(),this.oldLighting=new Li,this.newLighting=new Li,this._fadedLighting=new Li,this._lighting=this.newLighting,this.ssr=new vh,this.multipassEnabled=!1,this.multipassTerrain=new ql,this.multipassGeometry=new mh,this.hudRenderStyle=Ir.Occluded,this.cloudsFade=new pd}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}get weatherFading(){return this._lighting===this._fadedLighting}fadeLighting(e){const{oldLighting:r,newLighting:i}=this;e>=1?this._lighting=i:(this._fadedLighting.lerpLighting(r,i,e),this._lighting=this._fadedLighting)}},vh=class{constructor(){this.fadeFactor=1,this.reprojectionMatrix=B()}},_h=class{constructor(e,r,i=null){this.rctx=e,this.sliceHelper=i,this.lastFrameCamera=new j,this.output=C.Color,this.renderOccludedMask=$o,this.bindParameters=new gh(r,i!=null?i.plane:null),this.bindParameters.alignPixelEnabled=!0}resetRenderOccludedMask(){this.renderOccludedMask=$o}};const $o=ut.Occlude|ut.OccludeAndTransparent|ut.OccludeAndTransparentStencil;let Or=class extends j{constructor(){super(...arguments),this._projectionMatrix=B()}get projectionMatrix(){return this._projectionMatrix}};h([E()],Or.prototype,"_projectionMatrix",void 0),h([E({readOnly:!0})],Or.prototype,"projectionMatrix",null),Or=h([Je("esri.views.3d.webgl-engine.lib.CascadeCamera")],Or);var Io;(function(t){t[t.Highlight=0]="Highlight",t[t.Default=1]="Default"})(Io||(Io={}));let Kr=class{constructor(){this.camera=new Or,this.lightMat=B()}},yh=class{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}},wh=class{get depthTexture(){var e;return(e=this._handle)==null?void 0:e.colorTexture}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return Ar(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}constructor(e,r){this._fbos=e,this._viewingMode=r,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new yh,this._projectionView=B(),this._projectionViewInverse=B(),this._modelViewLight=B(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=De(),this._cascades=[new Kr,new Kr,new Kr,new Kr],this._lastOrigin=null,this._maxTextureWidth=Math.min(tt("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}disposeOffscreenBuffers(){this._handle=mi(this._handle),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=Rt(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&this.depthTexture!=null}get cascades(){for(let e=0;e<this._numCascades;++e)Wi[e]=this._cascades[e];return Wi.length=this._numCascades,Wi}start(e,r,i,s,o){ye(this.enabled);const{near:a,far:n}=this._clampNearFar(i);this._computeCascadeDistances(a,n,s),this._textureHeight=this._computeTextureHeight(e,o,s),this._setupMatrices(e,r);const{viewMatrix:c,projectionMatrix:l}=e;for(let d=0;d<this._numCascades;++d)this._constructCascade(d,l,c,r);this._lastOrigin=null,this.clear()}finish(){var e;ye(this.enabled),(e=this._handle)==null||e.releaseDepth()}getShadowMapMatrices(e){if(!this._lastOrigin||!Jt(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||I(),H(this._lastOrigin,e);for(let r=0;r<this._numCascades;++r){ks(jo,this._cascades[r].lightMat,e);for(let i=0;i<16;++i)Uo[16*r+i]=jo[i]}}return Uo}moveSnapshot(e){var r,i;ye(this.enabled),(r=this._handle)==null||r.releaseDepth(),(i=this._snapshots[e])==null||i.release(),this._snapshots[e]=this._handle,this._handle=null}copySnapshot(e){var n,c,l,d;const r=(c=(n=this._handle)==null?void 0:n.colorTexture)==null?void 0:c.descriptor;if(!this.enabled||!r)return;(l=this._snapshots[e])==null||l.release();const{width:i,height:s}=r;this._snapshots[e]=this._fbos.acquire(Pr.RGBA4,i,s);const o=this._fbos.rctx;this._bindFbo();const a=o.bindTexture((d=this._snapshots[e])==null?void 0:d.colorTexture,wi.TEXTURE_UNIT_FOR_UPDATES);o.gl.copyTexSubImage2D(xc.TEXTURE_2D,0,0,0,0,0,i,s),o.bindTexture(a,wi.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(e){var r;return this.enabled?(r=this._snapshots[e])==null?void 0:r.colorTexture:null}clear(){const e=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(_i.COLOR_BUFFER_BIT|_i.DEPTH_BUFFER_BIT)}_computeTextureHeight(e,r,i){const s=Math.min(window.devicePixelRatio,r)/e.pixelRatio,o=i?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,a=Zl(Math.floor(Math.max(e.fullWidth,e.fullHeight)*s*o));return Math.min(this._maxTextureWidth,this._numCascades*a)/this._numCascades}_ensureFbo(){var e,r,i;((e=this._handle)==null?void 0:e.fbo.width)===this._textureWidth&&((r=this._handle)==null?void 0:r.fbo.height)===this._textureHeight||((i=this._handle)==null||i.release(),this._handle=this._fbos.acquire(Pr.RGBA4,this._textureWidth,this._textureHeight)),this._handle.acquireDepth(Yl.DEPTH16_BUFFER)}_discardSnapshot(e){this._snapshots[e]=mi(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){var r;const e=this._fbos.rctx;e.unbindTexture(this.depthTexture),e.bindFramebuffer((r=this._handle)==null?void 0:r.fbo)}_constructCascade(e,r,i,s){const o=this._cascades[e],a=-this._cascadeDistances[e],n=-this._cascadeDistances[e+1],c=(r[10]*a+r[14])/Math.abs(r[11]*a+r[15]),l=(r[10]*n+r[14])/Math.abs(r[11]*n+r[15]);ye(c<l);for(let f=0;f<8;++f){Ar(Mo,f%4==0||f%4==3?-1:1,f%4==0||f%4==1?-1:1,f<4?c:l,1);const v=Me[f];Qt(v,Mo,this._projectionViewInverse),v[0]/=v[3],v[1]/=v[3],v[2]/=v[3]}qn(Bi,Me[0]),o.camera.viewMatrix=ks(Sh,this._modelViewLight,Bi);for(let f=0;f<8;++f)ue(Me[f],Me[f],o.camera.viewMatrix);let d=Me[0][2],p=Me[0][2];for(let f=1;f<8;++f)d=Math.min(d,Me[f][2]),p=Math.max(p,Me[f][2]);d-=200,p+=200,o.camera.near=-p,o.camera.far=-d,xh(i,s,d,p,o.camera),pt(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const u=this._textureHeight;o.camera.viewport=[e*u,0,u,u]}_setupMatrices(e,r){pt(this._projectionView,e.projectionMatrix,e.viewMatrix),ir(this._projectionViewInverse,this._projectionView);const i=this._viewingMode===ft.Global?e.eye:X(Bi,0,0,1);ua(this._modelViewLight,[0,0,0],[-r[0],-r[1],-r[2]],i)}_clampNearFar(e){let{near:r,far:i}=e;return r<2&&(r=2),i<2&&(i=2),r>=i&&(r=2,i=4),{near:r,far:i}}_computeCascadeDistances(e,r,i){const s=i?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(Zn(r/e,4)),s);const o=(r-e)/this._numCascades,a=(r/e)**(1/this._numCascades);let n=e,c=e;for(let l=0;l<this._numCascades+1;++l)this._cascadeDistances[l]=bt(n,c,this.settings.splitSchemeLambda),n*=a,c+=o}get test(){return{cascades:this._cascades,textureHeight:this._textureHeight}}};const Sh=B(),Mo=De(),Me=[];for(let t=0;t<8;++t)Me.push(De());const Lo=J(),Fo=J(),Ch=J(),No=J(),zo=J(),Bi=I(),Wi=[],jo=B(),Uo=We.concat(We,We,We,We),Pe=J(),Vt=J(),Ct=[J(),J(),J(),J()],ie=J(),ki=J(),ot=J(),Sr=J(),Ht=J(),Gt=J(),ei=J();function bh(t,e,r,i,s,o,a,n){Et(Pe,0,0);for(let O=0;O<4;++O)_t(Pe,Pe,t[O]);Zt(Pe,Pe,.25),Et(Vt,0,0);for(let O=4;O<8;++O)_t(Vt,Vt,t[O]);Zt(Vt,Vt,.25),_r(Ct[0],t[4],t[5],.5),_r(Ct[1],t[5],t[6],.5),_r(Ct[2],t[6],t[7],.5),_r(Ct[3],t[7],t[4],.5);let c=0,l=qs(Ct[0],Pe);for(let O=1;O<4;++O){const R=qs(Ct[O],Pe);R<l&&(l=R,c=O)}Yt(ie,Ct[c],t[c+4]);const d=ie[0];let p,u;ie[0]=-ie[1],ie[1]=d,Yt(ki,Vt,Pe),ge(ki,ie)<0&&Xn(ie,ie),_r(ie,ie,ki,r),Zs(ie,ie),p=u=ge(Yt(ot,t[0],Pe),ie);for(let O=1;O<8;++O){const R=ge(Yt(ot,t[O],Pe),ie);R<p?p=R:R>u&&(u=R)}zr(i,Pe),Zt(ot,ie,p-e),_t(i,i,ot);let f=-1,v=1,_=0,b=0;for(let O=0;O<8;++O){Yt(Sr,t[O],i),Zs(Sr,Sr);const R=ie[0]*Sr[1]-ie[1]*Sr[0];R>0?R>f&&(f=R,_=O):R<v&&(v=R,b=O)}Ft(f>0,"leftArea"),Ft(v<0,"rightArea"),Zt(Ht,ie,p),_t(Ht,Ht,Pe),Zt(Gt,ie,u),_t(Gt,Gt,Pe),ei[0]=-ie[1],ei[1]=ie[0];const x=qr(i,t[b],Gt,_t(ot,Gt,ei),1,s),w=qr(i,t[_],Gt,ot,1,o),y=qr(i,t[_],Ht,_t(ot,Ht,ei),1,a),D=qr(i,t[b],Ht,ot,1,n);Ft(x,"rayRay"),Ft(w,"rayRay"),Ft(y,"rayRay"),Ft(D,"rayRay")}function F(t,e){return 3*e+t}const Vo=J();function Oe(t,e){return Et(Vo,t[e],t[e+3]),Vo}const Ce=J(),A=Cs();function Oh(t,e,r,i,s){Yt(Ce,r,i),Zt(Ce,Ce,.5),A[0]=Ce[0],A[1]=Ce[1],A[2]=0,A[3]=Ce[1],A[4]=-Ce[0],A[5]=0,A[6]=Ce[0]*Ce[0]+Ce[1]*Ce[1],A[7]=Ce[0]*Ce[1]-Ce[1]*Ce[0],A[8]=1,A[F(0,2)]=-ge(Oe(A,0),t),A[F(1,2)]=-ge(Oe(A,1),t);let o=ge(Oe(A,0),r)+A[F(0,2)],a=ge(Oe(A,1),r)+A[F(1,2)],n=ge(Oe(A,0),i)+A[F(0,2)],c=ge(Oe(A,1),i)+A[F(1,2)];o=-(o+n)/(a+c),A[F(0,0)]+=A[F(1,0)]*o,A[F(0,1)]+=A[F(1,1)]*o,A[F(0,2)]+=A[F(1,2)]*o,o=1/(ge(Oe(A,0),r)+A[F(0,2)]),a=1/(ge(Oe(A,1),r)+A[F(1,2)]),A[F(0,0)]*=o,A[F(0,1)]*=o,A[F(0,2)]*=o,A[F(1,0)]*=a,A[F(1,1)]*=a,A[F(1,2)]*=a,A[F(2,0)]=A[F(1,0)],A[F(2,1)]=A[F(1,1)],A[F(2,2)]=A[F(1,2)],A[F(1,2)]+=1,o=ge(Oe(A,1),e)+A[F(1,2)],a=ge(Oe(A,2),e)+A[F(2,2)],n=ge(Oe(A,1),r)+A[F(1,2)],c=ge(Oe(A,2),r)+A[F(2,2)],o=-.5*(o/a+n/c),A[F(1,0)]+=A[F(2,0)]*o,A[F(1,1)]+=A[F(2,1)]*o,A[F(1,2)]+=A[F(2,2)]*o,o=ge(Oe(A,1),e)+A[F(1,2)],a=ge(Oe(A,2),e)+A[F(2,2)],n=-a/o,A[F(1,0)]*=n,A[F(1,1)]*=n,A[F(1,2)]*=n,s[0]=A[0],s[1]=A[1],s[2]=0,s[3]=A[2],s[4]=A[3],s[5]=A[4],s[6]=0,s[7]=A[5],s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=A[6],s[13]=A[7],s[14]=0,s[15]=A[8]}function xh(t,e,r,i,s){const o=1/Me[0][3],a=1/Me[4][3];ye(o<a);let n=o+Math.sqrt(o*a);const c=Math.sin(Yn(t[2]*e[0]+t[6]*e[1]+t[10]*e[2]));n/=c,bh(Me,n,c,Lo,Fo,Ch,No,zo),Oh(Lo,Fo,No,zo,s.projectionMatrix),s.projectionMatrix[10]=2/(r-i),s.projectionMatrix[14]=-(r+i)/(r-i)}var mt,It;(function(t){t[t.OBJECT=0]="OBJECT",t[t.HUD=1]="HUD",t[t.TERRAIN=2]="TERRAIN",t[t.OVERLAY=3]="OVERLAY",t[t.I3S=4]="I3S",t[t.PCL=5]="PCL",t[t.LOD=6]="LOD",t[t.VOXEL=7]="VOXEL"})(mt||(mt={}));let Th=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=It.ALL}};(function(t){t[t.MIN=0]="MIN",t[t.MINMAX=1]="MINMAX",t[t.ALL=2]="ALL"})(It||(It={}));let Rh=class{constructor(e,r,i){this.object=e,this.geometryId=r,this.triangleNr=i}},Ah=class extends Rh{constructor(e,r,i,s){super(e,r,i),this.center=s!=null?Jn(s):null}},Ph=class{constructor(e){this.layerUid=e}},Eh=class extends Ph{constructor(e,r){super(e),this.graphicUid=r}};function Dh(t){return(t==null?void 0:t.dist)!=null}let $h=class extends Eh{constructor(e,r,i){super(e,r),this.triangleNr=i}},Ih=class{constructor(){this.adds=new ze,this.removes=new ze,this.updates=new ze({allocator:e=>e||new Mh,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}get empty(){return this.adds.length===0&&this.removes.length===0&&this.updates.length===0}},Mh=class{},Lh=class{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}};const Ho=1e-5;let Fh=class{constructor(e){this.options=new Th,this._results=new Nh,this.transform=new Xl,this.tolerance=Ho,this.verticalOffset=null,this._ray=lt(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e??ft.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,r,i){this.resetWithRay(Qn(e,r,this._ray),i)}resetWithRay(e,r){this.camera=r,e!==this._ray&&ss(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===ft.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,re(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,r,i,s,o){var n;this.point=r,this.filterPredicate=s,this.tolerance=i??Ho;const a=eo(this.verticalOffset);if(e&&e.length>0){const c=o?l=>{o(l)&&this.intersectObject(l)}:l=>{this.intersectObject(l)};for(const l of e){const d=(n=l.getSpatialQueryAccelerator)==null?void 0:n.call(l);d!=null?(a!=null?d.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,c,a):d.forEachAlongRay(this._ray.origin,this._ray.direction,c),this.options.selectionMode&&this.options.hud&&d.forEachDegenerateObject(c)):l.objects.forAll(p=>c(p))}}this.sortResults()}intersectObject(e){const r=e.geometries;if(!r)return;const i=e.effectiveTransformation,s=eo(this.verticalOffset);for(const o of r){if(!o.visible)continue;const{material:a,id:n}=o;this.transform.setAndInvalidateLazyTransforms(i,o.transformation),ue(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),ue(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const c=this.transform.transform;s!=null&&(s.objectTransform=this.transform),a.intersect(o,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(l,d,p,u,f,v)=>{if(l>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,l))return;const _=u?this._results.hud:this._results,b=u?x=>{const w=new Ah(e,n,p,v);x.set(mt.HUD,w,l,d,We,f)}:x=>x.set(mt.OBJECT,{object:e,geometryId:n,triangleNr:p},l,d,c,f);if((_.min.drapedLayerOrder==null||f>=_.min.drapedLayerOrder)&&(_.min.dist==null||l<_.min.dist)&&b(_.min),this.options.store!==It.MIN&&(_.max.drapedLayerOrder==null||f<_.max.drapedLayerOrder)&&(_.max.dist==null||l>_.max.dist)&&b(_.max),this.options.store===It.ALL)if(u){const x=new gs(this._ray);b(x),this._results.hud.all.push(x)}else{const x=new or(this._ray);b(x),this._results.all.push(x)}}})}}sortResults(e=this._results.all){e.sort((r,i)=>r.dist!==i.dist?(r.dist??0)-(i.dist??0):r.drapedLayerOrder!==i.drapedLayerOrder?(r.drapedLayerOrder??Number.MAX_VALUE)-(i.drapedLayerOrder??Number.MAX_VALUE):(i.drapedLayerGraphicOrder??Number.MIN_VALUE)-(r.drapedLayerGraphicOrder??Number.MIN_VALUE))}};function nm(t){return new Fh(t)}let Nh=class{constructor(){this.min=new or(lt()),this.max=new or(lt()),this.hud={min:new gs(lt()),max:new gs(lt()),all:new Array},this.ground=new or(lt()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},or=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(Y(ti,this.ray.direction,this.dist),qe(ti)):null}getIntersectionPoint(e){return!!Dh(this)&&(Y(ti,this.ray.direction,this.dist),re(e,this.ray.origin,ti),!0)}getTransformedNormal(e){return H(Cr,this.normal),Cr[3]=0,Qt(Cr,Cr,this.transformation),H(e,Cr),oe(e,e)}constructor(e){this.intersector=mt.OBJECT,this.normal=I(),this.transformation=B(),this._ray=lt(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=mt.OBJECT,ss(e,this._ray)}set(e,r,i,s,o,a,n){this.intersector=e,this.dist=i,H(this.normal,s??Kn),et(this.transformation,o??We),this.target=r,this.drapedLayerOrder=a,this.drapedLayerGraphicOrder=n}copy(e){ss(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,H(this.normal,e.normal),et(this.transformation,e.transformation)}},gs=class extends or{constructor(){super(...arguments),this.intersector=mt.HUD}};function zh(t){return new or(t)}const ti=I(),Cr=De();function jh(t){const e=new Map,r=i=>{let s=e.get(i);return s||(s=new Lh,e.set(i,s)),s};return t.removes.forAll(i=>{qi(i)&&r(i.material).removes.push(i)}),t.adds.forAll(i=>{qi(i)&&r(i.material).adds.push(i)}),t.updates.forAll(i=>{qi(i.renderGeometry)&&r(i.renderGeometry.material).updates.push(i)}),e}function qi(t){return t.geometry.indexCount>=1}let Uh=class{constructor(e,r){this._material=e,this._repository=r,this._map=new Map}dispose(){this._map.forEach((e,r)=>{e!=null&&this._repository.release(this._material,r)})}load(e,r,i){if(!this._material.produces(r,i))return null;this._map.has(i)||this._map.set(i,this._repository.acquire(this._material,r,i));const s=this._map.get(i);if(s!=null){if(s.ensureResources(e)===zc.LOADED)return s;this._repository.requestRender()}return null}},Vh=class extends Jl{constructor(e=I()){super(),this.origin=e,this.slicePlaneLocalOrigin=this.origin}};const pm=it().vec3f(m.POSITION),Hh=it().vec3f(m.POSITION).vec2f(m.UV0),fm=it().vec3f(m.POSITION).vec4u8(m.COLOR);it().vec3f(m.POSITION).vec4u8(m.OBJECTANDLAYERIDCOLOR);const Gh=it().vec3f(m.POSITION).vec2f(m.UV0).vec4u8(m.OBJECTANDLAYERIDCOLOR);it().vec3f(m.POSITION).vec4u8(m.COLOR).vec4u8(m.OBJECTANDLAYERIDCOLOR);class sn extends Ts{intersect(e,r,i,s,o,a){return Ql(e,i,s,o,void 0,a)}}function Go(t){t.fragment.uniforms.add(new Xe("texWaveNormal",e=>e.waveNormal),new Xe("texWavePerturbation",e=>e.wavePerturbation),new Te("waveParams",e=>Ar(Bh,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new dr("waveDirection",e=>Et(Wh,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),t.include(nd),t.fragment.code.add(g`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const Bh=De(),Wh=J();function Bo(t,e){e.spherical?t.vertex.code.add(g`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):t.vertex.code.add(g`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),e.spherical?t.vertex.code.add(g`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):t.vertex.code.add(g`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function on(t){const e=new pr,{vertex:r,fragment:i}=e;Ri(r,t),e.include(Oa,t),e.attributes.add(m.POSITION,"vec3"),e.attributes.add(m.UV0,"vec2");const s=new Te("waterColor",o=>o.color);if(t.output===C.Color&&t.isDraped)return e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(g`
        void main(void) {
          if (waterColor.a < ${g.float(Le)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(s),i.code.add(g`void main() {
fragColor = waterColor;
}`),e;switch(t.output!==C.Color&&t.output!==C.Alpha||(e.include(Bo,t),e.include(Kl,t),e.varyings.add("vuv","vec2"),e.varyings.add("vpos","vec3"),e.varyings.add("vnormal","vec3"),e.varyings.add("vtbnMatrix","mat3"),t.multipassEnabled&&e.varyings.add("depth","float"),r.uniforms.add(s),r.code.add(g`
      void main(void) {
        if (waterColor.a < ${g.float(Le)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${t.output===C.Color?"forwardLinearDepth();":""}
      }
    `)),e.include(Ai,t),t.output){case C.Alpha:e.include(ct,t),i.uniforms.add(s),i.code.add(g`
        void main() {
          discardBySlice(vpos);
          ${t.multipassEnabled?"terrainDepthTest(depth);":""}

          fragColor = vec4(waterColor.a);
        }
      `);break;case C.Color:e.include(ec),e.include(tc,{pbrMode:Ta.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(Go),e.include(ct,t),e.include(rc,t),e.include(Sd,t),i.uniforms.add(s,new Z("timeElapsed",o=>o.timeElapsed),r.uniforms.get("view"),r.uniforms.get("localOrigin")),xs(i,t),i.include(Pi),ma(i),ga(i),i.code.add(g`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${t.receiveShadows?g`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${t.transparencyPassType===te.Color?"fragColor = premultiplyAlpha(fragColor);":""}
      }
    `);break;case C.Normal:e.include(Bo,t),e.include(Go,t),e.include(ct,t),e.varyings.add("vpos","vec3"),e.varyings.add("vuv","vec2"),r.uniforms.add(s),r.code.add(g`
        void main(void) {
          if (waterColor.a < ${g.float(Le)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(new Z("timeElapsed",o=>o.timeElapsed)),i.code.add(g`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case C.Highlight:e.include(xa,t),e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(g`
      void main(void) {
        if (waterColor.a < ${g.float(Le)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),e.include(ct,t),i.code.add(g`void main() {
discardBySlice(vpos);
outputHighlight();
}`);break;case C.ObjectAndLayerIdColor:e.include(Ti,t),e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(g`
      void main(void) {
        if (waterColor.a < ${g.float(Le)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `),e.include(ct,t),i.code.add(g`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`)}return e}const kh=Object.freeze(Object.defineProperty({__proto__:null,build:on},Symbol.toStringTag,{value:"Module"}));let an=class nn extends fr{initializeConfiguration(e,r){r.spherical=e.viewingMode===ft.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result}initializeProgram(e){return new mr(e.rctx,nn.shader.get().build(this.configuration),Hr)}_setPipelineState(e){const r=this.configuration,i=e===te.NONE,s=e===te.FrontFace;return Ze({blending:r.output!==C.Normal&&r.output!==C.Highlight&&r.output!==C.ObjectAndLayerIdColor&&r.transparent?i?xr:Ei(e):null,depthTest:{func:Es(e)},depthWrite:i?r.writeDepth?Di:null:Ia(e),colorWrite:rt,polygonOffset:i||s?null:Ma(r.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}};an.shader=new gr(kh,()=>ur(()=>Promise.resolve().then(()=>Mp),void 0,import.meta.url));let se=class extends Ur{constructor(){super(...arguments),this.output=C.Color,this.transparencyPassType=te.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.objectAndLayerIdColorInstanced=!1,this.isDraped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}};h([S({count:C.COUNT})],se.prototype,"output",void 0),h([S({count:te.COUNT})],se.prototype,"transparencyPassType",void 0),h([S()],se.prototype,"spherical",void 0),h([S()],se.prototype,"receiveShadows",void 0),h([S()],se.prototype,"hasSlicePlane",void 0),h([S()],se.prototype,"transparent",void 0),h([S()],se.prototype,"enableOffset",void 0),h([S()],se.prototype,"writeDepth",void 0),h([S()],se.prototype,"hasScreenSpaceReflections",void 0),h([S()],se.prototype,"doublePrecisionRequiresObfuscation",void 0),h([S()],se.prototype,"hasCloudsReflections",void 0),h([S()],se.prototype,"objectAndLayerIdColorInstanced",void 0),h([S()],se.prototype,"isDraped",void 0),h([S()],se.prototype,"multipassEnabled",void 0),h([S()],se.prototype,"cullAboveGround",void 0),h([S({constValue:!1})],se.prototype,"occlusionPass",void 0),h([S({constValue:Ta.Water})],se.prototype,"pbrMode",void 0),h([S({constValue:!0})],se.prototype,"useCustomDTRExponentForWater",void 0),h([S({constValue:!0})],se.prototype,"highStepCount",void 0),h([S({constValue:!1})],se.prototype,"useFillLights",void 0);let qh=class extends Rs{_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})}_updateSSRState(e){const r=e.ssr.lastFrameColor!=null;r!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:r})}_updateCloudsReflectionState(e){const r=e.cloudsFade.data!=null;r!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:r})}ensureResources(e){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(e)}beginSlot(e){return this._output===C.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters),this.ensureTechnique(an,e)}},Zh=class extends sn{constructor(e){super(e,new Yh),this._configuration=new se,this._animation=new Id}getConfiguration(e,r){return this._configuration.output=e,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.receiveShadows=this.parameters.receiveShadows,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections,this._configuration.hasCloudsReflections=this.parameters.hasCloudsReflections,this._configuration.isDraped=this.parameters.isDraped,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<La,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration}update(e){const r=Math.min(e.camera.relativeElevation,e.camera.distance);this._animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*r<Xh;const i=this._animation.advance(e);return this.setParameters({timeElapsed:el(this._animation.time)*this.parameters.animationSpeed},!1),this._animation.enabled&&i}produces(e,r){switch(r){case C.Normal:return e===V.DRAPED_WATER;case C.Color:if(this.parameters.isDraped)return e===V.DRAPED_MATERIAL;break;case C.Alpha:break;case C.Highlight:case C.ObjectAndLayerIdColor:return e===V.OPAQUE_MATERIAL||e===V.DRAPED_MATERIAL;default:return!1}let i=V.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i}createGLMaterial(e){return new qh(e)}createBufferWriter(){return new Ra(tt("enable-feature:objectAndLayerId-rendering")?Gh:Hh)}get test(){return{animationEnabled:this._animation.enabled}}},Yh=class extends ic{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=ys(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=At(0,0,0,0),this.transparent=!0,this.writeDepth=!0,this.hasSlicePlane=!1,this.isDraped=!1,this.receiveShadows=!0,this.hasScreenSpaceReflections=!1,this.hasCloudsReflections=!1,this.origin=I(),this.modelTransformation=null}};const Xh=35e3;let Ms=class{constructor(e=0,r=0){this.from=e,this.to=r}get numElements(){return this.to-this.from}};function Wo(t){const e=new Map;t.forAll(i=>e.set(i.from,i));let r=!0;for(;r;)r=!1,t.forEach(i=>{const s=e.get(i.to);s&&(i.to=s.to,e.delete(s.from),t.removeUnordered(s),r=!0)})}let ko=class extends Ms{constructor(e,r,i){super(r,i),this.geometry=e}get isVisible(){return this.geometry.visible}get hasHighlights(){return this.geometry.highlights!=null&&this.isVisible}get hasOccludees(){return this.geometry.occludees!=null}},Jh=class{constructor(){this.first=0,this.count=0}},Qh=class{constructor(){this._numElements=0,this._instances=new Map,this.holes=new ze({allocator:e=>e||new Ms,deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!0,this.drawCommandsDefault=ri(),this.drawCommandsHighlight=ri(),this.drawCommandsOccludees=ri(),this.drawCommandsShadowHighlightRest=ri()}get numElements(){return this._numElements}get instances(){return this._instances}addInstance(e,r){this.deleteInstance(e),this._instances.set(e,r),this._numElements+=r.numElements}deleteInstance(e){const r=this._instances.get(e);r&&(this._numElements-=r.numElements,this._instances.delete(e))}updateInstance(e,r,i){const s=this._instances.get(e);s&&(this._numElements-=s.numElements,s.from=r,s.to=i,this._numElements+=s.numElements)}updateDrawState(e){e.isVisible?(e.hasHighlights&&(this.hasHighlights=!0),e.hasOccludees&&(this.hasOccludees=!0)):this.hasHiddenInstances=!0}updateDrawCommands(e){if(this.drawCommandsDefault.clear(),this.drawCommandsHighlight.clear(),this.drawCommandsOccludees.clear(),this.drawCommandsShadowHighlightRest.clear(),this.drawCommandsDirty=!1,this._instances.size===0)return;if(!this.needsMultipleCommands()){const i=this.drawCommandsDefault.pushNew(),s=this.holes.front();return this.vao!=null&&this.holes.length===1&&s.to===Math.floor(this.vao.byteSize/e)?(i.first=0,void(i.count=s.from)):(i.first=1/0,i.count=0,this._instances.forEach(o=>{i.first=Math.min(i.first,o.from),i.count=Math.max(i.count,o.to)}),void(i.count-=i.first))}const r=Array.from(this._instances.values()).sort((i,s)=>i.from===s.from?i.to-s.to:i.from-s.from);for(const i of r)i.isVisible&&(qo(i.hasOccludees?this.drawCommandsOccludees:this.drawCommandsDefault,i),qo(i.hasHighlights?this.drawCommandsHighlight:this.drawCommandsShadowHighlightRest,i))}needsMultipleCommands(){return this.hasOccludees||this.hasHighlights||this.hasHiddenInstances}};function Kh(t){return t.vao!=null}function ri(){return new ze({allocator:t=>t||new Jh,deallocator:t=>t})}function qo(t,e){const r=t.back();if(r==null){const i=t.pushNew();return i.first=e.from,void(i.count=e.numElements)}if(eu(r,e)){const i=e.from-r.first+e.numElements;r.count=i}else{const i=t.pushNew();i.first=e.from,i.count=e.numElements}}function eu(t,e){return t.first+t.count>=e.from}let tu=class{constructor(e){this.origin=e,this.buffers=new Array}dispose(){this.buffers.forEach(e=>e.vao.dispose()),this.buffers.length=0}findBuffer(e){return this.buffers.find(r=>r.instances.has(e))}};const ru=Ua+1;let iu=class{constructor(e,r,i){this._rctx=e,this._locations=r,this._layout=i,this._cache=new od(e.newCache,"VAOCache")}dispose(){this._cache.destroy()}newVao(e){const r=e.toString();let i=this._cache.pop(r);return i||(i=new td(this._rctx,this._locations,{geometry:this._layout},{geometry:kc.createVertex(this._rctx,Tc.STATIC_DRAW)}),i.vertexBuffers.geometry.setSize(e),i)}deleteVao(e){if(e==null)return;const r=e.byteSize.toString();this._cache.put(r,e,ru)}},di=class extends sc{constructor(e){super(e),this._vaoCache=null,this._glMaterials=null,this._bufferWriter=null,this._dataByOrigin=new Map,this._hasHighlights=!1,this._hasOccludees=!1,this.priority=0,this.produces=new Map}dispose(){this._glMaterials=sr(this._glMaterials),this._dataByOrigin.forEach(e=>e.dispose()),this._dataByOrigin.clear(),this._vaoCache=sr(this._vaoCache)}initializeRenderContext(e,r){const{rctx:i}=e.renderContext;this._glMaterials=new Uh(this.material,r??e.materialRepository),this._bufferWriter=this.material.createBufferWriter(),this._vaoCache=new iu(i,this.material.vertexAttributeLocations,Yc(this._bufferWriter.vertexBufferLayout))}uninitializeRenderContext(){}get isEmpty(){return this._dataByOrigin.size===0}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this.material instanceof Zh}get isDecoration(){return this.material.parameters.isDecoration}get rendersOccluded(){return!this.isEmpty&&this.material.parameters.renderOccluded!==ut.Occlude}get numGeometries(){let e=0;return this._dataByOrigin.forEach(r=>e+=r.buffers.reduce((i,s)=>i+s.instances.size,0)),e}get usedMemory(){let e=0;return this._dataByOrigin.forEach(r=>e+=r.buffers.reduce((i,s)=>i+s.vao.usedMemory,0)),e}forEachGeometry(e){this._dataByOrigin.forEach(r=>r.buffers.forEach(i=>i.instances.forEach(s=>e(s.geometry))))}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateDrawCommands()}_updateGeometries(e){const r=this._bufferWriter;if(r===null)return;const i=r.vertexBufferLayout.stride/4;for(const s of e){const o=s.renderGeometry,a=this._dataByOrigin.get(o.localOrigin.id),n=a==null?void 0:a.findBuffer(o.id);if(n==null)return;const c=n.instances.get(o.id);if(s.updateType&(ke.GEOMETRY|ke.TRANSFORMATION)){const l=oi(r.elementCount(c.geometry.geometry)*i),d=r.vertexBufferLayout.createView(l.buffer);this._writeGeometry(o,d,0),n.vao.vertexBuffers.geometry.setSubData(l,c.from*i,0,c.numElements*i)}s.updateType&(ke.HIGHLIGHT|ke.OCCLUDEE|ke.VISIBILITY)&&(n.drawCommandsDirty=!0)}}_computeDeltas(e,r){const i=new $s;for(const s of e){const o=s.localOrigin;if(o==null)continue;let a=i.get(o.id,null);a==null&&(a=new Zo(o.vec3),i.set(o.id,null,a)),a.changes.push(s)}for(const s of r){const o=s.localOrigin;if(o==null)continue;const a=this._dataByOrigin.get(o.id),n=a==null?void 0:a.findBuffer(s.id);if(n==null)continue;let c=i.get(o.id,n);c==null&&(c=new Zo(o.vec3),i.set(o.id,n,c)),c.changes.push(s)}return i}_addAndRemoveGeometries(e,r){if(this._bufferWriter===null||this._vaoCache===null)return;const{_bufferWriter:i,_dataByOrigin:s}=this,o=i.vertexBufferLayout.stride/4,a=this._computeDeltas(e,r);a.forEach((n,c)=>{const l=n.get(null),d=l!=null?l.changes:[];a.delete(c,null);let p=s.get(c);if(n.forEach((u,f)=>{if(a.delete(c,f),f==null)return void ye(!1,"No VAO for removed geometries");if(f.instances.size===u.changes.length)return this._vaoCache.deleteVao(f.vao),Ys(p.buffers,f),void(p.buffers.length===0&&d.length===0&&s.delete(c));const v=f.numElements,_=f.vao.byteSize/4,b=d.reduce((D,O)=>D+i.elementCount(O.geometry),0),x=u.changes.reduce((D,O)=>D+i.elementCount(O.geometry),0),w=Math.min((v+b-x)*o,si),y=w>_;w>Oi&&w<_/2?(u.changes.forEach(({id:D})=>f.deleteInstance(D)),f.instances.forEach(({geometry:D})=>d.push(D)),this._vaoCache.deleteVao(f.vao),Ys(p.buffers,f)):y?this._applyAndRebuild(f,d,u):this._applyRemoves(f,u)}),d.length>0)for(p==null&&(p=new tu(l.origin),s.set(c,p)),p.buffers.forEach(u=>this._applyAdds(u,d));d.length>0;)p.buffers.push(this._applyAndRebuild(new Qh,d,null))})}_updateDrawCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach(e=>{e.buffers.forEach(r=>{r.drawCommandsDirty&&(r.hasHiddenInstances=!1,r.hasHighlights=!1,r.hasOccludees=!1,Xt(r.instances,i=>(r.updateDrawState(i),r.hasHiddenInstances&&r.hasHighlights&&r.hasOccludees)),r.updateDrawCommands(this._bufferWriter.vertexBufferLayout.stride)),this._hasHighlights=this._hasHighlights||r.hasHighlights,this._hasOccludees=this._hasOccludees||r.hasOccludees})})}_applyAndRebuild(e,r,i){if(i!=null)for(const v of i.changes)e.deleteInstance(v.id);const s=this._bufferWriter,o=s.vertexBufferLayout.stride,a=o/4,n=Math.floor(si/a);let c=e.numElements;for(;r.length>0;){const v=r.pop(),_=s.elementCount(v.geometry);if(c+_>n&&c>0){r.push(v);break}c+=_;const b=new ko(v,0,0);ye(e.instances.get(v.id)==null),e.addInstance(v.id,b)}const l=c*a,d=oi(l),p=s.vertexBufferLayout.createView(d.buffer);let u=0;e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,e.instances.forEach((v,_)=>{this._writeGeometry(v.geometry,p,u);const b=u;u+=s.elementCount(v.geometry.geometry),e.updateInstance(_,b,u),e.updateDrawState(v)}),this._vaoCache.deleteVao(e.vao),e.vao=this._vaoCache.newVao(Jo(l)),e.vao.vertexBuffers.geometry.setSubData(d,0,0,u*a),e.holes.clear();const f=e.holes.pushNew();return f.from=u,f.to=Math.floor(e.vao.byteSize/o),e.updateDrawCommands(o),e}_applyRemoves(e,r){if(r.changes.length===0||this._bufferWriter===null)return;for(const n of r.changes){const c=n.id,l=e.instances.get(c);if(!l)continue;e.deleteInstance(c);const d=Ge.back();if(d){if(d.to===l.from){d.to=l.to;continue}if(d.from===l.to){d.from=l.from;continue}}const p=Ge.pushNew();p.from=l.from,p.to=l.to}Wo(Ge);const i=this._bufferWriter.vertexBufferLayout.stride/4,s=Ge.reduce((n,c)=>Math.max(n,c.numElements),0)*i,o=oi(s);o.fill(0,0,s);const a=e.vao.vertexBuffers.geometry;Ge.forAll(n=>a.setSubData(o,n.from*i,0,n.numElements*i)),e.holes.pushArray(Ge.data,Ge.length),Ge.forAll((n,c)=>Ge.data[c]=null),Ge.clear(),e.drawCommandsDirty=!0}_applyAdds(e,r){if(r.length===0||this._bufferWriter===null)return;if(!Kh(e))return void this._applyAndRebuild(e,r,null);const i=this._bufferWriter,s=i.vertexBufferLayout.stride/4,o=e.numElements,a=r.reduce((x,w)=>x+i.elementCount(w.geometry),0),n=Math.min((o+a)*s,si),c=4*n;if(e.vao.byteSize<Jo(si-Oi)&&c>e.vao.byteSize)return void this._applyAndRebuild(e,r,null);Wo(e.holes);const l=new Array;for(const x of r){const w=i.elementCount(x.geometry),y=su(e.holes,w);l.push(y)}const d=e.vao.vertexBuffers.geometry;let p=0,u=0,f=0;const v=oi(n),_=i.vertexBufferLayout.createView(v.buffer);r.forEach((x,w)=>{const y=l[w];if(y==null)return;if(f!==y){const R=f-u;R>0&&d.setSubData(v,u*s,0,R*s),u=y,p=0}const D=i.elementCount(x.geometry);this._writeGeometry(x,_,p),p+=D,f=y+D;const O=new ko(x,y,y+D);ye(e.instances.get(x.id)==null),e.addInstance(x.id,O),e.drawCommandsDirty=!0});const b=f-u;b>0&&d.setSubData(v,u*s,0,b*s),tl(r,(x,w)=>l[w]==null)}_writeGeometry(e,r,i){if(this._bufferWriter===null)return;const s=e.localOrigin.vec3;rl(Yo,-s[0],-s[1],-s[2]);const o=pt(ou,Yo,e.transformation);ir(ii,o),ha(ii,ii),this._bufferWriter.write(o,ii,e.geometry,r,i)}updateAnimation(e){return this.material.update(e)}prepareTechnique(e){if(!this.material.shouldRender(e))return null;const{output:r,bindParameters:i}=e;if(!this.material.produces(i.slot,r))return null;const s=r===C.Highlight||r===C.ShadowHighlight;if(s&&!this._hasHighlights)return null;const o=r===C.ShadowExcludeHighlight,a=!(s||o);for(const n of this._dataByOrigin.values())for(const c of n.buffers){if(s&&!c.hasHighlights)continue;const l=(s?c.drawCommandsHighlight:o&&c.needsMultipleCommands()?c.drawCommandsShadowHighlightRest:c.drawCommandsDefault)||null,d=a&&c.drawCommandsOccludees||null;if(l!=null&&l.length||d!=null&&d.length){const p=this._glMaterials.load(e.rctx,i.slot,r),u=p!=null?p.beginSlot(i):null;if(u!=null)return u}}return null}renderNode(e,r){const{output:i,bindParameters:s}=e,o=i===C.Highlight||i===C.ShadowHighlight,a=i===C.ShadowExcludeHighlight,n=!(o||a),c=e.rctx,l=e.bindParameters.slot===V.OCCLUDER_MATERIAL,d=e.bindParameters.slot===V.TRANSPARENT_OCCLUDER_MATERIAL;c.runAppleAmdDriverHelper(),c.bindTechnique(r,this.material.parameters,s);for(const p of this._dataByOrigin.values())for(const u of p.buffers){if(o&&!u.hasHighlights)continue;const f=(o?u.drawCommandsHighlight:a&&u.needsMultipleCommands()?u.drawCommandsShadowHighlightRest:u.drawCommandsDefault)||null,v=n&&u.drawCommandsOccludees||null;(f!=null&&f.length||v!=null&&v.length)&&(r.program.bindDraw(new Vh(p.origin),s,this.material.parameters),r.ensureAttributeLocations(u.vao),c.bindVAO(u.vao),f!=null&&f.length&&(c.setPipelineState(r.getPipeline(!1,l,d)),f.forAll(_=>c.drawArrays(r.primitiveType,_.first,_.count))),v!=null&&v.length&&(c.setPipelineState(r.getPipeline(!0,l,d)),v.forAll(_=>c.drawArrays(r.primitiveType,_.first,_.count))))}}get test(){return{material:this.material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}};h([E({constructOnly:!0})],di.prototype,"material",void 0),di=h([Je("esri.views.3d.webgl-engine.materials.renderers.MergedRenderer")],di);let Zo=class{constructor(e){this.origin=e,this.changes=new Array}};function su(t,e){let r;if(!t.some(s=>!(s.numElements<e)&&(r=s,!0)))return null;const i=r.from;return r.from+=e,r.from>=r.to&&t.removeUnordered(r),i}const Yo=B(),ou=B(),ii=B(),Ge=new ze({allocator:t=>t||new Ms,deallocator:null}),Oi=65536,Zi=4*Oi,Xo=1024,ln=16777216,si=ln/4;let Yi=new Float32Array(Oi);function oi(t){return Yi.length<t&&(Yi=new Float32Array(t)),Yi}function Jo(t){const e=4*t;return e<=Xo?Xo:e<Zi?il(e):Math.max(Math.min(Math.ceil(1.5*e/Zi)*Zi,ln),e)}let Ie=class extends da{constructor(e){super(e),this._pending=new au,this._changes=new Ih,this._materialRenderers=new ze,this._sortedMaterialRenderers=new ze,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forAll(e=>e.dispose()),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear(),this._geometries.clear(),this._pending.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._materialRenderers.some(e=>e.rendersOccluded)}get isEmpty(){return!this.updating&&this._materialRenderers.length===0&&this._geometries.size===0}getMemoryForMaterial(e){if(e==null)return 0;const r=this._materialRenderers.find(i=>i.material===e);return(r==null?void 0:r.usedMemory)??0}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=jh(this._changes);let r=!1,i=!1,s=!1;return e.forEach((o,a)=>{let n=this._materialRenderers.find(d=>d.material===a);if(!n&&o.adds.length>0){const d=new di({material:a});d.initializeRenderContext(this.rendererContext.pluginContext,this._materialRepository),n=d,this._materialRenderers.push(n),r=!0,i=!0,s=!0}if(!n)return;const c=i||n.hasHighlights,l=s||n.hasWater;n.modify(o),i=i||c!==n.hasHighlights,s=s||l!==n.hasWater,n.isEmpty&&(this._materialRenderers.removeUnordered(n),n.dispose(),r=!0)}),this._changes.clear(),r&&this._updateSortedMaterialRenderers(),i&&(this._hasHighlights=this._materialRenderers.some(o=>o.hasHighlights)),s&&(this._hasWater=this._materialRenderers.some(o=>o.hasWater)),this.notifyChange("updating"),!0}addGeometries(e,r){if(e.length===0)return;const i=this._validateRenderGeometries(e);for(const o of i)this._geometries.set(o.id,o);const s=this._pending.empty;for(const o of i)this._pending.adds.add(o);s&&this.notifyChange("updating"),r===Ci.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,r){const i=this._pending.empty,s=this._pending.adds;for(const o of e)s.has(o)?(this._pending.removed.add(o),s.delete(o)):this._pending.removed.has(o)||this._pending.removes.add(o),this._geometries.delete(o.id);i&&!this._pending.empty&&this.notifyChange("updating"),r===Ci.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,r){const i=this._changes.updates.length===0;for(const s of e){const o=this._changes.updates.pushNew();o.renderGeometry=this._validateRenderGeometry(s),o.updateType=r}switch(i&&this._changes.updates.length>0&&this.notifyChange("updating"),r){case ke.TRANSFORMATION:case ke.GEOMETRY:return this._notifyGraphicGeometryChanged(e);case ke.VISIBILITY:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let r=!1;return this._sortedMaterialRenderers.forAll(i=>r=i.updateAnimation(e)||r),r}shouldRender(e){return this._sortedMaterialRenderers.some(r=>r.prepareTechnique(e))}render(e){this._sortedMaterialRenderers.forAll(r=>{const i=r.prepareTechnique(e);i!=null&&r.renderNode(e,i)})}intersect(e,r,i,s,o){return this._geometries.forEach(a=>{if(s&&!s(a))return;this._intersectRenderGeometry(a,i,r,0,e,o);const n=this.rendererContext.longitudeCyclical;n&&(a.boundingSphere[0]-a.boundingSphere[3]<n.min&&this._intersectRenderGeometry(a,i,r,n.range,e,o),a.boundingSphere[0]+a.boundingSphere[3]>n.max&&this._intersectRenderGeometry(a,i,r,-n.range,e,o)),o++}),o}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear(),this._materialRenderers.forAll((e,r)=>{e.priority=r,this._sortedMaterialRenderers.push(e)}),this._sortedMaterialRenderers.sort((e,r)=>r.material.renderPriority===e.material.renderPriority?e.priority-r.priority:r.material.renderPriority-e.material.renderPriority)}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const r=this._changes.updates.data[e];this._pending.has(r.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}_intersectRenderGeometry(e,r,i,s,o,a){if(!e.visible)return;let n=0;s+=e.transformation[12],n=e.transformation[13],Xi[0]=i[0]-s,Xi[1]=i[1]-n,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersectDraped(e,null,o,Xi,(c,l,d)=>{nu(r,d,e.material.renderPriority,a,o,e.layerUid,e.graphicUid)},r)}_notifyGraphicGeometryChanged(e){if(this.drapeSource.notifyGraphicGeometryChanged==null)return;let r;for(const i of e){const s=i.graphicUid;s!=null&&s!==r&&(this.drapeSource.notifyGraphicGeometryChanged(s),r=s)}}_notifyGraphicVisibilityChanged(e){if(this.drapeSource.notifyGraphicVisibilityChanged==null)return;let r;for(const i of e){const s=i.graphicUid;s!=null&&s!==r&&(this.drapeSource.notifyGraphicVisibilityChanged(s),r=s)}}_validateRenderGeometries(e){for(const r of e)this._validateRenderGeometry(r);return e}_validateRenderGeometry(e){return e.localOrigin==null&&(e.localOrigin=this._localOriginFactory.getOrigin(e.boundingSphere)),e}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};h([E()],Ie.prototype,"drapeSource",void 0),h([E()],Ie.prototype,"updating",null),h([E()],Ie.prototype,"rctx",null),h([E({constructOnly:!0})],Ie.prototype,"rendererContext",void 0),h([E()],Ie.prototype,"_materialRepository",null),h([E()],Ie.prototype,"_localOriginFactory",null),h([E({readOnly:!0})],Ie.prototype,"isEmpty",null),h([E()],Ie.prototype,"_materialRenderers",void 0),h([E()],Ie.prototype,"_geometries",void 0),Ie=h([Je("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Ie);let au=class{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return this.adds.size===0&&this.removes.size===0&&this.removed.size===0}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}};function nu(t,e,r,i,s,o,a){const n=new $h(o,a,e),c=l=>{l.set(mt.OVERLAY,n,t.dist,t.normal,t.transformation,r,i)};if((s.results.min.drapedLayerOrder==null||r>=s.results.min.drapedLayerOrder)&&(s.results.min.dist==null||s.results.ground.dist<=s.results.min.dist)&&c(s.results.min),s.options.store!==It.MIN&&(s.results.max.drapedLayerOrder==null||r<s.results.max.drapedLayerOrder)&&(s.results.max.dist==null||s.results.ground.dist>s.results.max.dist)&&c(s.results.max),s.options.store===It.ALL){const l=zh(s.ray);c(l),s.results.all.push(l)}}const Xi=J();let cn=class dn extends fr{initializeProgram(e){return new mr(e.rctx,dn.shader.get().build(),Hr)}initializePipeline(){return this.configuration.hasAlpha?Ze({blending:Lc(ht.SRC_ALPHA,ht.ONE,ht.ONE_MINUS_SRC_ALPHA,ht.ONE_MINUS_SRC_ALPHA),colorWrite:rt}):Ze({colorWrite:rt})}};cn.shader=new gr(Cd,()=>ur(()=>Promise.resolve().then(()=>Lp),void 0,import.meta.url));let hn=class extends _a{constructor(){super(...arguments),this.hasAlpha=!1}};h([S()],hn.prototype,"hasAlpha",void 0);let Ls=class extends $a{constructor(){super(...arguments),this.overlayIndex=dt.INNER,this.opacity=1}};function un(){const t=new pr;return t.include(va),t.fragment.uniforms.add(new Xe("tex",e=>e.texture)),t.fragment.uniforms.add(new oc("overlayIdx",e=>e.overlayIndex)),t.fragment.uniforms.add(new Z("opacity",e=>e.opacity)),t.fragment.code.add(g`void main() {
vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;
}`),t}const lu=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Ls,build:un},Symbol.toStringTag,{value:"Module"}));let pn=class fn extends fr{initializeProgram(e){return new mr(e.rctx,fn.shader.get().build(),Hr)}initializePipeline(){return Ze({blending:Fa(ht.ONE,ht.ONE_MINUS_SRC_ALPHA),colorWrite:rt})}};pn.shader=new gr(lu,()=>ur(()=>Promise.resolve().then(()=>Fp),void 0,import.meta.url));let Be=class extends ac{get _bindParameters(){return this._renderContext.bindParameters}get _rctx(){return this.view._stage.renderView.renderingContext}get rctx(){return this._rctx}get materialRepository(){return this._materialRepository}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Ls,this.hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new ze,this._passParameters=new Is,this._materialRepository=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new j,this.worldToPCSRatio=1,this.events=new la,this.longitudeCyclical=null,this.produces=new Map([[V.DRAPED_MATERIAL,r=>r!==C.Highlight||this.hasHighlights],[V.DRAPED_WATER,()=>!0]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this.view._stage.renderer.fboCache,r=this.view._stage.renderView,{waterTextureRepository:i,stippleTextureRepository:s,markerTextureRepository:o}=r;this._shaderTechniqueRepository=new bd({rctx:this._rctx,viewingMode:ft.Local,stippleTextureRepository:s,markerTextureRepository:o,waterTextureRepository:i}),this._renderContext=new _h(this._rctx,new wh(e,this.view.state.viewingMode),null),this.addHandles([Ii(()=>i.updating,()=>this.events.emit("content-changed"),Xs),Ii(()=>this.spatialReference,a=>this._localOriginFactory=new ph(a),Xs),sl(()=>this.view.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0)]),this._materialRepository=new Ed(r.textureRepository,this._shaderTechniqueRepository,a=>{(a.parameters.renderOccluded&Qo)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")},()=>this.events.emit("content-changed")),this._bindParameters.slot=V.DRAPED_MATERIAL,this._bindParameters.mainDepth=$d(this._rctx),this._camera.near=1,this._camera.far=1e4,this._camera.relativeElevation=null,this._bindParameters.camera=this._camera,this._bindParameters.transparencyPassType=te.NONE,this._bindParameters.newLighting.noonFactor=0,this._bindParameters.newLighting.globalFactor=0,this._bindParameters.newLighting.set([new nc(cr(1,1,1))]),this.addHandles(this.view.resourceController.scheduler.registerTask(ol.STAGE,this))}destroy(){this._renderers.forEach(e=>e.destroy()),this._renderers.clear(),this._debugTextureTechnique=mi(this._debugTextureTechnique),this._passParameters.texture=sr(this._passParameters.texture),this._bindParameters.mainDepth=sr(this._bindParameters.mainDepth),this._shaderTechniqueRepository=ca(this._shaderTechniqueRepository),this.disposeOverlays()}initializeRenderContext(e){this.pluginContext=e}uninitializeRenderContext(){}renderNode(){}get updating(){return this._sortedDrapeSourceRenderersDirty||Xt(this._renderers,e=>e.updating)}get hasOverlays(){return this._overlays!=null&&this._renderTargets!=null}getMemoryForMaterial(e){return Array.from(this._renderers.values()).reduce((r,i)=>r+i.getMemoryForMaterial(e),0)}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,Ie)}createDrapeSourceRenderer(e,r,i){const s=this._renderers.get(e);s!=null&&s.destroy();const o=new r({...i,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles(Ii(()=>e.fullOpacity,()=>this.events.emit("content-changed")),e),o}removeDrapeSourceRenderer(e){if(e==null)return;const r=this._renderers.get(e);r!=null&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),r.destroy())}computeValidity(){var e;return((e=this._renderTargets)==null?void 0:e.computeValidity())??0}releaseRenderTargets(){var e;(e=this._renderTargets)==null||e.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&Mi(e,r=>r.drapeTargetType===ls.WithoutRasterImage)}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=Mi(e,r=>r.drapeSourceType===Tr.Features),this._hasDrapedRasterSource=Mi(e,r=>r.drapeSourceType===Tr.RasterImage)):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,r,i=this._bindParameters.overlayStretch){this._overlays==null&&(this._renderTargets=new ad(this.view._stage.renderer.fboCache),this._overlays=[new Co,new Co]),this.ensureDrapeTargets(e),this.ensureDrapeSources(r),this._bindParameters.overlayStretch=i}disposeOverlays(){this._overlays=null,this._renderTargets=sr(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){var r,i;if(e!=null)return e===_e.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?(r=this._renderTargets)==null?void 0:r.getTexture(_e.Color):(i=this._renderTargets)==null?void 0:i.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,()=>!0)}_processDrapeSources(e,r){let i=!1;for(const[s,o]of this._renderers){if(e.done)break;(s.destroyed||r(s))&&o.commitChanges()&&(i=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,i=!0,this._updateSortedDrapeSourceRenderers()),i&&(this._overlays!=null&&this._renderers.size===0&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=Xt(this._renderers,s=>s.hasHighlights),this._updateRendersOccluded(),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(al,e=>e.updatePolicy===Er.SYNC)}get isEmpty(){return!ns.OVERLAY_DRAW_DEBUG_TEXTURE&&!Xt(this._renderers,e=>!e.isEmpty)}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}get mode(){var e,r;return this.isEmpty?er.Disabled:(e=this._renderTargets)!=null&&e.getTexture(_e.WaterNormal)?er.EnabledWithWater:(r=this._renderTargets)!=null&&r.getTexture(_e.Color)?er.Enabled:er.Disabled}updateAnimation(e){let r=!1;return this._renderers.forEach(i=>r=i.updateAnimation(e)||r),r}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const r of this._overlays)this.longitudeCyclical?r.setupGeometryViewsCyclical(this.longitudeCyclical):r.setupGeometryViewsDirect();for(const r of this._renderTargets.targets)(r.content!==_e.ColorNoRasterImage||this._needsColorWithoutRasterImage)&&(this._drawTarget(dt.INNER,r,e),this._drawTarget(dt.OUTER,r,e))}}_drawTarget(e,r,i){const s=this._overlays[e],o=s.canvasGeometries;if(o.numViews===0)return;const{alignPixelEnabled:a,contentPixelRatio:n}=i;this._screenToWorldRatio=n*s.mapUnitsPerPixel/this._bindParameters.overlayStretch;const c=r.output;if(this.isEmpty||c===C.Highlight&&!this.hasHighlights||c===C.Normal&&!this.hasWater||!s.hasSomeSizedView())return;const l=this._rctx;this._camera.pixelRatio=s.pixelRatio*n,this._renderContext.output=c,this._bindParameters.alignPixelEnabled=a,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=c===C.Normal?V.DRAPED_WATER:V.DRAPED_MATERIAL;const d=ns.OVERLAY_DRAW_DEBUG_TEXTURE&&r.content!==_e.Occluded;if(!d&&!this._sortedRenderers.some(({renderer:_})=>_.shouldRender(this._renderContext)))return;const p=s.resolution;this._rctx.setViewport(e===dt.INNER?0:p,0,p,p);const u=2*s.resolution,f=s.resolution,v=r.fbo;if(v.bind(l,u,f),e===dt.INNER&&(l.setClearColor(0,0,0,0),l.clearSafe(_i.COLOR_BUFFER_BIT)),r.content===_e.Occluded&&(this._renderContext.renderOccludedMask=Qo),d)for(let _=0;_<o.numViews;_++)this._setViewParameters(o.extents[_],s),this._ensureDebugPatternResources(s.resolution,du[e]),this._rctx.bindTechnique(this._debugTextureTechnique,this._passParameters,null),this._rctx.screen.draw();this._sortedRenderers.forAll(({drapeSource:_,renderer:b})=>{if(r.content===_e.ColorNoRasterImage&&_.drapeSourceType===Tr.RasterImage)return;const{fullOpacity:x}=_,w=x!=null&&x<1&&c===C.Color?this.bindTemporaryFramebuffer(u,f):null;for(let y=0;y<o.numViews;y++)this._setViewParameters(o.extents[y],s),b.render(this._renderContext);if(w){v.bind(l,u,f),this._overlayParameters.texture=w.colorTexture,this._overlayParameters.opacity=x,this._overlayParameters.overlayIndex=e;const y=this.pluginContext.techniqueRepository.acquire(pn);this._rctx.bindTechnique(y,this._overlayParameters,this._renderContext.bindParameters),this._rctx.screen.draw(),y.release(),w.release()}}),l.bindFramebuffer(null),e===dt.OUTER&&v.generateMipMap(),this._renderContext.resetRenderOccludedMask()}bindTemporaryFramebuffer(e,r){const i=this.view._stage.renderer.fboCache,s=i.acquire(Pr.RGBA,e,r);return i.rctx.bindFramebuffer(s.fbo),i.rctx.clearSafe(_i.COLOR_BUFFER_BIT),s}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,r,i,s){var a;let o=0;for(const n of this._renderers.values())o=((a=n.intersect)==null?void 0:a.call(n,e,r,i,s,o))??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),this._renderers.size===0)return;const e=this.view.map.allLayers;this._renderers.forEach((r,i)=>{const s=e.indexOf(i.layer),o=s>=0,a=this._renderers.size*(i.renderGroup??(o?Si.MapLayer:Si.ViewLayer))+(o?s:0);this._sortedRenderers.push(new cu(i,r,a))}),this._sortedRenderers.sort((r,i)=>r.index-i.index)}_setViewParameters(e,r){const i=this._camera;i.viewport=[0,0,r.resolution,r.resolution],nl(i.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],i.near,i.far),ll(i.viewMatrix,[-e[0],-e[1],0])}_updateHasWater(){const e=Xt(this._renderers,r=>r.hasWater);e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}_updateRendersOccluded(){const e=Xt(this._renderers,r=>r.rendersOccluded);e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}_ensureDebugPatternResources(e,r){if(X(this._passParameters.color,r[0],r[1],r[2]),this._passParameters.texture)return;const i=new Uint8Array(e*e*4);let s=0;for(let n=0;n<e;n++)for(let c=0;c<e;c++){const l=Math.floor(c/10),d=Math.floor(n/10);l<2||d<2||10*l>e-20||10*d>e-20?(i[s++]=255,i[s++]=255,i[s++]=255,i[s++]=255):(i[s++]=255,i[s++]=255,i[s++]=255,i[s++]=1&l&&1&d?1&c^1&n?0:255:1&l^1&d?0:128)}const o=new za(e);o.samplingMode=Ea.NEAREST,this._passParameters.texture=new wi(this._rctx,o,i);const a=new hn;a.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(cn,a)}get test(){return{drapedRenderers:Array.from(this._renderers.values()),getDrapeSourceRenderer:e=>this._renderers.get(e)}}};h([E()],Be.prototype,"hasHighlights",void 0),h([E()],Be.prototype,"_sortedDrapeSourceRenderersDirty",void 0),h([E({autoDestroy:!0})],Be.prototype,"_shaderTechniqueRepository",void 0),h([E({constructOnly:!0})],Be.prototype,"view",void 0),h([E()],Be.prototype,"worldToPCSRatio",void 0),h([E()],Be.prototype,"spatialReference",void 0),h([E({type:Boolean,readOnly:!0})],Be.prototype,"updating",null),h([E()],Be.prototype,"isEmpty",null),Be=h([Je("esri.views.3d.terrain.OverlayRenderer")],Be);let cu=class{constructor(e,r,i){this.drapeSource=e,this.renderer=r,this.index=i}};const du=[[1,.5,.5],[.5,.5,1]],hu=-2,Qo=ut.OccludeAndTransparent;var vs;(function(t){function e(a,n){const c=a[n],l=a[n+1],d=a[n+2];return Math.sqrt(c*c+l*l+d*d)}function r(a,n){const c=a[n],l=a[n+1],d=a[n+2],p=1/Math.sqrt(c*c+l*l+d*d);a[n]*=p,a[n+1]*=p,a[n+2]*=p}function i(a,n,c){a[n]*=c,a[n+1]*=c,a[n+2]*=c}function s(a,n,c,l,d,p=n){(d=d||a)[p]=a[n]+c[l],d[p+1]=a[n+1]+c[l+1],d[p+2]=a[n+2]+c[l+2]}function o(a,n,c,l,d,p=n){(d=d||a)[p]=a[n]-c[l],d[p+1]=a[n+1]-c[l+1],d[p+2]=a[n+2]-c[l+2]}t.length=e,t.normalize=r,t.scale=i,t.add=s,t.subtract=o})(vs||(vs={}));const Bt=vs,Ji=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],uu=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],pu=[0,0,1,0,1,1,0,1],fu=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],mn=new Array(36);for(let t=0;t<6;t++)for(let e=0;e<6;e++)mn[6*t+e]=t;const Ot=new Array(36);for(let t=0;t<6;t++)Ot[6*t]=0,Ot[6*t+1]=1,Ot[6*t+2]=2,Ot[6*t+3]=2,Ot[6*t+4]=3,Ot[6*t+5]=0;function Im(t,e){Array.isArray(e)||(e=[e,e,e]);const r=new Array(24);for(let i=0;i<8;i++)r[3*i]=Ji[i][0]*e[0],r[3*i+1]=Ji[i][1]*e[1],r[3*i+2]=Ji[i][2]*e[2];return new $e(t,[[m.POSITION,new N(r,fu,3,!0)],[m.NORMAL,new N(uu,mn,3)],[m.UV0,new N(pu,Ot,2)]])}const Qi=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],mu=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],gu=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],vu=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Mm(t,e){Array.isArray(e)||(e=[e,e,e]);const r=new Array(18);for(let i=0;i<6;i++)r[3*i]=Qi[i][0]*e[0],r[3*i+1]=Qi[i][1]*e[1],r[3*i+2]=Qi[i][2]*e[2];return new $e(t,[[m.POSITION,new N(r,gu,3,!0)],[m.NORMAL,new N(mu,vu,3)]])}const hi=ae(-.5,0,-.5),ui=ae(.5,0,-.5),pi=ae(0,0,.5),fi=ae(0,.5,0),Wt=ee(),kt=ee(),ar=ee(),nr=ee(),lr=ee();he(Wt,hi,fi),he(kt,hi,ui),Ye(ar,Wt,kt),oe(ar,ar),he(Wt,ui,fi),he(kt,ui,pi),Ye(nr,Wt,kt),oe(nr,nr),he(Wt,pi,fi),he(kt,pi,hi),Ye(lr,Wt,kt),oe(lr,lr);const Ki=[hi,ui,pi,fi],_u=[0,-1,0,ar[0],ar[1],ar[2],nr[0],nr[1],nr[2],lr[0],lr[1],lr[2]],yu=[0,1,2,3,1,0,3,2,1,3,0,2],wu=[0,0,0,1,1,1,2,2,2,3,3,3];function Lm(t,e){Array.isArray(e)||(e=[e,e,e]);const r=new Array(12);for(let i=0;i<4;i++)r[3*i]=Ki[i][0]*e[0],r[3*i+1]=Ki[i][1]*e[1],r[3*i+2]=Ki[i][2]*e[2];return new $e(t,[[m.POSITION,new N(r,yu,3,!0)],[m.NORMAL,new N(_u,wu,3)]])}function Fm(t,e,r,i,s={uv:!0}){const o=-Math.PI,a=2*Math.PI,n=-Math.PI/2,c=Math.PI,l=Math.max(3,Math.floor(r)),d=Math.max(2,Math.floor(i)),p=(l+1)*(d+1),u=Fe(3*p),f=Fe(3*p),v=Fe(2*p),_=[];let b=0;for(let y=0;y<=d;y++){const D=[],O=y/d,R=n+O*c,T=Math.cos(R);for(let z=0;z<=l;z++){const $=z/l,P=o+$*a,G=Math.cos(P)*T,W=Math.sin(R),Mt=-Math.sin(P)*T;u[3*b]=G*e,u[3*b+1]=W*e,u[3*b+2]=Mt*e,f[3*b]=G,f[3*b+1]=W,f[3*b+2]=Mt,v[2*b]=$,v[2*b+1]=O,D.push(b),++b}_.push(D)}const x=new Array;for(let y=0;y<d;y++)for(let D=0;D<l;D++){const O=_[y][D],R=_[y][D+1],T=_[y+1][D+1],z=_[y+1][D];y===0?(x.push(O),x.push(T),x.push(z)):y===d-1?(x.push(O),x.push(R),x.push(T)):(x.push(O),x.push(R),x.push(T),x.push(T),x.push(z),x.push(O))}const w=[[m.POSITION,new N(u,x,3,!0)],[m.NORMAL,new N(f,x,3,!0)]];return s.uv&&w.push([m.UV0,new N(v,x,2,!0)]),s.offset&&(w[0][0]=m.OFFSET,w.push([m.POSITION,new N(Float64Array.from(s.offset),Ps(x.length),3,!0)])),new $e(t,w)}function Nm(t,e,r,i){const s=Su(e,r,i);return new $e(t,s)}function Su(t,e,r){const i=t;let s,o;if(r)s=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],o=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const l=i*(1+Math.sqrt(5))/2;s=[-i,l,0,i,l,0,-i,-l,0,i,-l,0,0,-i,l,0,i,l,0,-i,-l,0,i,-l,l,0,-i,l,0,i,-l,0,-i,-l,0,i],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let l=0;l<s.length;l+=3)Bt.scale(s,l,t/Bt.length(s,l));let a={};function n(l,d){l>d&&([l,d]=[d,l]);const p=l.toString()+"."+d.toString();if(a[p])return a[p];let u=s.length;return s.length+=3,Bt.add(s,3*l,s,3*d,s,u),Bt.scale(s,u,t/Bt.length(s,u)),u/=3,a[p]=u,u}for(let l=0;l<e;l++){const d=o.length,p=new Array(4*d);for(let u=0;u<d;u+=3){const f=o[u],v=o[u+1],_=o[u+2],b=n(f,v),x=n(v,_),w=n(_,f),y=4*u;p[y]=f,p[y+1]=b,p[y+2]=w,p[y+3]=v,p[y+4]=x,p[y+5]=b,p[y+6]=_,p[y+7]=w,p[y+8]=x,p[y+9]=b,p[y+10]=x,p[y+11]=w}o=p,a={}}const c=to(s);for(let l=0;l<c.length;l+=3)Bt.normalize(c,l);return[[m.POSITION,new N(to(s),o,3,!0)],[m.NORMAL,new N(c,o,3,!0)]]}function zm(t,e,r,i,s,o,a,n,c=null){const l=r?[r[0],r[1],r[2]]:[0,0,0],d=e?[e[0],e[1],e[2]]:[0,0,1];a=a||[0,0];const p=i?[255*i[0],255*i[1],255*i[2],i.length>3?255*i[3]:255]:[255,255,255,255],u=s!=null&&s.length===2?s:[1,1],f=Ps(1),v=[[m.POSITION,new N(l,f,3,!0)],[m.NORMAL,new N(d,f,3,!0)],[m.UV0,new N(a,f,a.length)],[m.COLOR,new N(p,f,4,!0)],[m.SIZE,new N(u,f,2)]];if(o!=null){const _=[o[0],o[1],o[2],o[3]];v.push([m.AUXPOS1,new N(_,f,4)])}if(n!=null){const _=[n[0],n[1],n[2],n[3]];v.push([m.FEATUREATTRIBUTE,new N(_,f,4)])}return new $e(t,v,null,vr.Point,c)}function jm(t,e,r,i,s,o=!0,a=!0){let n=0;const c=r,l=e;let d=ae(0,n,0),p=ae(0,n+l,0),u=ae(0,-1,0),f=ae(0,1,0);s&&(n=l,p=ae(0,0,0),d=ae(0,n,0),u=ae(0,1,0),f=ae(0,-1,0));const v=[p,d],_=[u,f],b=i+2,x=Math.sqrt(l*l+c*c);if(s)for(let T=i-1;T>=0;T--){const z=T*(2*Math.PI/i),$=ae(Math.cos(z)*c,n,Math.sin(z)*c);v.push($);const P=ae(l*Math.cos(z)/x,-c/x,l*Math.sin(z)/x);_.push(P)}else for(let T=0;T<i;T++){const z=T*(2*Math.PI/i),$=ae(Math.cos(z)*c,n,Math.sin(z)*c);v.push($);const P=ae(l*Math.cos(z)/x,c/x,l*Math.sin(z)/x);_.push(P)}const w=new Array,y=new Array;if(o){for(let T=3;T<v.length;T++)w.push(1),w.push(T-1),w.push(T),y.push(0),y.push(0),y.push(0);w.push(v.length-1),w.push(2),w.push(1),y.push(0),y.push(0),y.push(0)}if(a){for(let T=3;T<v.length;T++)w.push(T),w.push(T-1),w.push(0),y.push(T),y.push(T-1),y.push(1);w.push(0),w.push(2),w.push(v.length-1),y.push(1),y.push(2),y.push(_.length-1)}const D=Fe(3*b);for(let T=0;T<b;T++)D[3*T]=v[T][0],D[3*T+1]=v[T][1],D[3*T+2]=v[T][2];const O=Fe(3*b);for(let T=0;T<b;T++)O[3*T]=_[T][0],O[3*T+1]=_[T][1],O[3*T+2]=_[T][2];const R=[[m.POSITION,new N(D,w,3,!0)],[m.NORMAL,new N(O,y,3,!0)]];return new $e(t,R)}function Um(t,e,r,i,s,o,a){const n=s?no(s):ae(1,0,0),c=o?no(o):ae(0,0,0);a??(a=!0);const l=ee();oe(l,n);const d=ee();Y(d,l,Math.abs(e));const p=ee();Y(p,d,-.5),re(p,p,c);const u=ae(0,1,0);Math.abs(1-Pt(l,u))<.2&&X(u,0,0,1);const f=ee();Ye(f,l,u),oe(f,f),Ye(u,f,l);const v=2*i+(a?2:0),_=i+(a?2:0),b=Fe(3*v),x=Fe(3*_),w=Fe(2*v),y=new Array(3*i*(a?4:2)),D=new Array(3*i*(a?4:2));a&&(b[3*(v-2)]=p[0],b[3*(v-2)+1]=p[1],b[3*(v-2)+2]=p[2],w[2*(v-2)]=0,w[2*(v-2)+1]=0,b[3*(v-1)]=b[3*(v-2)]+d[0],b[3*(v-1)+1]=b[3*(v-2)+1]+d[1],b[3*(v-1)+2]=b[3*(v-2)+2]+d[2],w[2*(v-1)]=1,w[2*(v-1)+1]=1,x[3*(_-2)]=-l[0],x[3*(_-2)+1]=-l[1],x[3*(_-2)+2]=-l[2],x[3*(_-1)]=l[0],x[3*(_-1)+1]=l[1],x[3*(_-1)+2]=l[2]);const O=(P,G,W)=>{y[P]=G,D[P]=W};let R=0;const T=ee(),z=ee();for(let P=0;P<i;P++){const G=P*(2*Math.PI/i);Y(T,u,Math.sin(G)),Y(z,f,Math.cos(G)),re(T,T,z),x[3*P]=T[0],x[3*P+1]=T[1],x[3*P+2]=T[2],Y(T,T,r),re(T,T,p),b[3*P]=T[0],b[3*P+1]=T[1],b[3*P+2]=T[2],w[2*P]=P/i,w[2*P+1]=0,b[3*(P+i)]=b[3*P]+d[0],b[3*(P+i)+1]=b[3*P+1]+d[1],b[3*(P+i)+2]=b[3*P+2]+d[2],w[2*(P+i)]=P/i,w[2*P+1]=1;const W=(P+1)%i;O(R++,P,P),O(R++,P+i,P),O(R++,W,W),O(R++,W,W),O(R++,P+i,P),O(R++,W+i,W)}if(a){for(let P=0;P<i;P++){const G=(P+1)%i;O(R++,v-2,_-2),O(R++,P,_-2),O(R++,G,_-2)}for(let P=0;P<i;P++){const G=(P+1)%i;O(R++,P+i,_-1),O(R++,v-1,_-1),O(R++,G+i,_-1)}}const $=[[m.POSITION,new N(b,y,3,!0)],[m.NORMAL,new N(x,D,3,!0)],[m.UV0,new N(w,y,2,!0)]];return new $e(t,$)}function Vm(t,e,r,i,s,o){i=i||10,s=s==null||s,ye(e.length>1);const a=[[0,0,0]],n=[],c=[];for(let l=0;l<i;l++){n.push([0,-l-1,-(l+1)%i-1]);const d=l/i*2*Math.PI;c.push([Math.cos(d)*r,Math.sin(d)*r])}return Cu(t,c,e,a,n,s,o)}function Cu(t,e,r,i,s,o,a=ae(0,0,0)){const n=e.length,c=Fe(r.length*n*3+(6*i.length||0)),l=Fe(r.length*n*3+(i?6:0)),d=new Array,p=new Array;let u=0,f=0;const v=ee(),_=ee(),b=ee(),x=ee(),w=ee(),y=ee(),D=ee(),O=I(),R=ee(),T=ee(),z=ee(),$=ee(),P=ee(),G=jr();X(R,0,1,0),he(_,r[1],r[0]),oe(_,_),o?(re(O,r[0],a),oe(b,O)):X(b,0,0,1),Ko(_,b,R,R,w,b,ea),H(x,b),H($,w);for(let M=0;M<i.length;M++)Y(y,w,i[M][0]),Y(O,b,i[M][2]),re(y,y,O),re(y,y,r[0]),c[u++]=y[0],c[u++]=y[1],c[u++]=y[2];l[f++]=-_[0],l[f++]=-_[1],l[f++]=-_[2];for(let M=0;M<s.length;M++)d.push(s[M][0]>0?s[M][0]:-s[M][0]-1+i.length),d.push(s[M][1]>0?s[M][1]:-s[M][1]-1+i.length),d.push(s[M][2]>0?s[M][2]:-s[M][2]-1+i.length),p.push(0),p.push(0),p.push(0);let W=i.length;const Mt=i.length-1;for(let M=0;M<r.length;M++){let Q=!1;M>0&&(H(v,_),M<r.length-1?(he(_,r[M+1],r[M]),oe(_,_)):Q=!0,re(T,v,_),oe(T,T),re(z,r[M-1],x),cl(r[M],T,G),dl(G,hl(z,v),O)?(he(O,O,r[M]),oe(b,O),Ye(w,T,b),oe(w,w)):Ko(T,x,$,R,w,b,ea),H(x,b),H($,w)),o&&(re(O,r[M],a),oe(P,O));for(let ne=0;ne<n;ne++)if(Y(y,w,e[ne][0]),Y(O,b,e[ne][1]),re(y,y,O),oe(D,y),l[f++]=D[0],l[f++]=D[1],l[f++]=D[2],re(y,y,r[M]),c[u++]=y[0],c[u++]=y[1],c[u++]=y[2],!Q){const Re=(ne+1)%n;d.push(W+ne),d.push(W+n+ne),d.push(W+Re),d.push(W+Re),d.push(W+n+ne),d.push(W+n+Re);for(let Qe=0;Qe<6;Qe++){const Lt=d.length-6;p.push(d[Lt+Qe]-Mt)}}W+=n}const be=r[r.length-1];for(let M=0;M<i.length;M++)Y(y,w,i[M][0]),Y(O,b,i[M][1]),re(y,y,O),re(y,y,be),c[u++]=y[0],c[u++]=y[1],c[u++]=y[2];const st=f/3;l[f++]=_[0],l[f++]=_[1],l[f++]=_[2];const gt=W-n;for(let M=0;M<s.length;M++)d.push(s[M][0]>=0?W+s[M][0]:-s[M][0]-1+gt),d.push(s[M][2]>=0?W+s[M][2]:-s[M][2]-1+gt),d.push(s[M][1]>=0?W+s[M][1]:-s[M][1]-1+gt),p.push(st),p.push(st),p.push(st);const vt=[[m.POSITION,new N(c,d,3,!0)],[m.NORMAL,new N(l,p,3,!0)]];return new $e(t,vt)}function Hm(t,e,r,i){ye(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),ye(e[0].length===3,"createPolylineGeometry(): malformed vertex"),ye(r==null||r.length===e.length,"createPolylineGeometry: need same number of points and normals"),ye(r==null||r[0].length===3,"createPolylineGeometry(): malformed normal");const s=As(3*e.length),o=new Array(2*(e.length-1));let a=0,n=0;for(let l=0;l<e.length;l++){for(let d=0;d<3;d++)s[a++]=e[l][d];l>0&&(o[n++]=l-1,o[n++]=l)}const c=[[m.POSITION,new N(s,o,3,!0)]];if(r){const l=Fe(3*r.length);let d=0;for(let p=0;p<e.length;p++)for(let u=0;u<3;u++)l[d++]=r[p][u];c.push([m.NORMAL,new N(l,o,3,!0)])}return i&&c.push([m.COLOR,new N(i,Ac(i.length/4),4)]),new $e(t,c,null,vr.Line)}function Gm(t,e,r,i,s,o=0){const a=new Array(18),n=[[-r,o,s/2],[i,o,s/2],[0,e+o,s/2],[-r,o,-s/2],[i,o,-s/2],[0,e+o,-s/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)a[3*l]=n[l][0],a[3*l+1]=n[l][1],a[3*l+2]=n[l][2];return new $e(t,[[m.POSITION,new N(a,c,3,!0)]])}function Bm(t,e){const r=t.getMutableAttribute(m.POSITION).data;for(let i=0;i<r.length;i+=3){const s=r[i],o=r[i+1],a=r[i+2];X(qt,s,o,a),ue(qt,qt,e),r[i]=qt[0],r[i+1]=qt[1],r[i+2]=qt[2]}}function Wm(t,e=t){const r=t.attributes,i=r.get(m.POSITION).data,s=r.get(m.NORMAL).data;if(s){const o=e.getMutableAttribute(m.NORMAL).data;for(let a=0;a<s.length;a+=3){const n=s[a+1];o[a+1]=-s[a+2],o[a+2]=n}}if(i){const o=e.getMutableAttribute(m.POSITION).data;for(let a=0;a<i.length;a+=3){const n=i[a+1];o[a+1]=-i[a+2],o[a+2]=n}}}function es(t,e,r,i,s){return!(Math.abs(Pt(e,t))>s)&&(Ye(r,t,e),oe(r,r),Ye(i,r,t),oe(i,i),!0)}function Ko(t,e,r,i,s,o,a){return es(t,e,s,o,a)||es(t,r,s,o,a)||es(t,i,s,o,a)}const ea=.99619469809,qt=ee();let km=class{constructor(e,r={}){this.geometry=e,this.screenToWorldRatio=1,this._transformation=B(),this._shaderTransformation=null,this._boundingSphere=null,this.id=pa(),this.layerUid=r.layerUid,this.graphicUid=r.graphicUid,this.castShadow=r.castShadow??!1,r.objectShaderTransformation!=null&&this.objectShaderTransformationChanged(r.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){et(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){e==null?this._shaderTransformation=null:(this._shaderTransformation??(this._shaderTransformation=B()),pt(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(this._boundingSphere==null&&(this._boundingSphere??(this._boundingSphere=na()),ue(this._boundingSphere,this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*aa(this.shaderTransformation)),this._boundingSphere):ul}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation==null?this.transformation:this._shaderTransformation}get attributes(){return this.geometry.attributes}get highlights(){return this.geometry.highlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}};function gn(t){return t.type==="point"}function Zm(t,e){if(t.type==="point")return at(t,e,!1);if(Ec(t))switch(t.type){case"extent":return at(t.center,e,!1);case"polygon":return at(t.centroid,e,!1);case"polyline":return at(ta(t),e,!0);case"mesh":return at(t.origin,e,!1)}else switch(t.type){case"extent":return at(bu(t),e,!0);case"polygon":return at(Ou(t),e,!0);case"polyline":return at(ta(t),e,!0)}}function ta(t){const e=t.paths[0];if(!e||e.length===0)return null;const r=pl(e,fl(e)/2);return bs(r[0],r[1],r[2],t.spatialReference)}function bu(t){return bs(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function Ou(t){const e=t.rings[0];if(!e||e.length===0)return null;const r=ml(t.rings,!!t.hasZ);return bs(r[0],r[1],r[2],t.spatialReference)}function at(t,e,r){const i=r?t:Dc(t);return e&&t?gl(t,i,e)?i:null:i}function Ym(t,e,r,i=0){if(t){e||(e=rr());const s=t;let o=.5*s.width*(r-1),a=.5*s.height*(r-1);return s.width<1e-7*s.height?o+=a/20:s.height<1e-7*s.width&&(a+=o/20),Ar(e,s.xmin-o-i,s.ymin-a-i,s.xmax+o+i,s.ymax+a+i),e}return null}function xu(t,e){for(let r=0;r<t.geometries.length;++r){const i=t.geometries[r].getMutableAttribute(m.AUXPOS1);i&&i.data[3]!==e&&(i.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[r],m.AUXPOS1))}}function Xm(t,e,r=null){const i=vl(Ss);return t!=null&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),e!=null?i[3]=e:t!=null&&t.length>3&&(i[3]=t[3]),r&&(i[0]*=r,i[1]*=r,i[2]*=r,i[3]*=r),i}function Jm(t=yl,e,r,i=1){const s=new Array(3);if(e==null||r==null)s[0]=1,s[1]=1,s[2]=1;else{let o,a=0;for(let n=2;n>=0;n--){const c=t[n];let l;const d=c!=null,p=n===0&&!o&&!d,u=r[n];c==="symbol-value"||p?l=u!==0?e[n]/u:1:d&&c!=="proportional"&&isFinite(c)&&(l=u!==0?c/u:1),l!=null&&(s[n]=l,o=l,a=Math.max(a,Math.abs(l)))}for(let n=2;n>=0;n--)s[n]==null?s[n]=o:s[n]===0&&(s[n]=.001*a)}for(let o=2;o>=0;o--)s[o]/=i;return _l(s)}function Tu(t){return t.isPrimitive!=null}function Qm(t){return Ru(Tu(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function Ru(t){const e=r=>r==null||r>=0;return Array.isArray(t)?t.every(e):e(t)}function Km(t,e,r,i=B()){return t&&wl(i,i,-t/180*Math.PI),e&&Sl(i,i,e/180*Math.PI),r&&Cl(i,i,r/180*Math.PI),i}function eg(t,e,r){if(r.minDemResolution!=null)return r.minDemResolution;const i=bl(e),s=Ol(t)*i,o=xl(t)*i,a=Tl(t)*(e.isGeographic?1:i);return s===0&&o===0&&a===0?r.minDemResolutionForPoints:.01*Math.max(s,o,a)}let tg=class{constructor(e,r=null,i=0){this.array=e,this.spatialReference=r,this.offset=i}};function vn(t){return"array"in t}function ai(t,e,r="ground"){if(gn(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,r);if(vn(e)){let i=e.offset;return t.getElevation(e.array[i++],e.array[i++],e.array[i]||0,e.spatialReference??t.spatialReference,r)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,r)}function Au(t,e,r,i,s,o,a,n,c,l,d){const p=Lu[d.mode];let u,f,v=0;if(gi(t,e,r,i,c.spatialReference,s,n))return p.requiresAlignment(d)?(v=p.applyElevationAlignmentBuffer(i,s,o,a,n,c,l,d),u=o,f=a):(u=i,f=s),gi(u,c.spatialReference,f,o,l.spatialReference,a,n)?v:void 0}function _n(t,e,r,i,s){const o=(gn(t)?t.z:vn(t)?t.array[t.offset+2]:t[2])||0;switch(r.mode){case"on-the-ground":{const a=ai(e,t,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=a,void(s.z=a)}case"relative-to-ground":{const a=ai(e,t,"ground")??0,n=r.geometryZWithOffset(o,i);return s.verticalDistanceToGround=n,s.sampledElevation=a,void(s.z=n+a)}case"relative-to-scene":{const a=ai(e,t,"scene")??0,n=r.geometryZWithOffset(o,i);return s.verticalDistanceToGround=n,s.sampledElevation=a,void(s.z=n+a)}case"absolute-height":{const a=r.geometryZWithOffset(o,i),n=ai(e,t,"ground")??0;return s.verticalDistanceToGround=a-n,s.sampledElevation=n,void(s.z=a)}default:return void(s.z=0)}}function ig(t,e,r,i){return _n(t,e,r,i,tr),tr.z}function sg(t,e,r){return e==null||r==null?t.definedChanged:e==="on-the-ground"&&r==="on-the-ground"?t.staysOnTheGround:e===r||e!=="on-the-ground"&&r!=="on-the-ground"?_s.UPDATE:t.onTheGroundChanged}function og(t){return t==="relative-to-ground"||t==="relative-to-scene"}function ag(t){return t!=="absolute-height"}function ng(t,e,r,i,s){_n(e,r,s,i,tr),xu(t,tr.verticalDistanceToGround);const o=tr.sampledElevation,a=et(Fu,t.transformation);return ni[0]=e.x,ni[1]=e.y,ni[2]=tr.z,Uc(e.spatialReference,ni,a,i.spatialReference)?t.transformation=a:console.warn("Could not locate symbol object properly, it might be misplaced"),o}function Pu(t,e,r,i,s,o){let a=0;const n=o.spatialReference;e*=3,i*=3;for(let c=0;c<s;++c){const l=t[e],d=t[e+1],p=t[e+2],u=o.getElevation(l,d,p,n,"ground")??0;a+=u,r[i]=l,r[i+1]=d,r[i+2]=u,e+=3,i+=3}return a/s}function Eu(t,e,r,i,s,o,a,n){let c=0;const l=n.calculateOffsetRenderUnits(a),d=n.featureExpressionInfoContext,p=o.spatialReference;e*=3,i*=3;for(let u=0;u<s;++u){const f=t[e],v=t[e+1],_=t[e+2],b=o.getElevation(f,v,_,p,"ground")??0;c+=b,r[i]=f,r[i+1]=v,r[i+2]=d==null?_+b+l:b+l,e+=3,i+=3}return c/s}function Du(t,e,r,i,s,o,a,n){let c=0;const l=n.calculateOffsetRenderUnits(a),d=n.featureExpressionInfoContext,p=o.spatialReference;e*=3,i*=3;for(let u=0;u<s;++u){const f=t[e],v=t[e+1],_=t[e+2],b=o.getElevation(f,v,_,p,"scene")??0;c+=b,r[i]=f,r[i+1]=v,r[i+2]=d==null?_+b+l:b+l,e+=3,i+=3}return c/s}function $u(t){const e=t.meterUnitOffset,r=t.featureExpressionInfoContext;return e!==0||r!=null}function Iu(t,e,r,i,s,o,a,n){const c=n.calculateOffsetRenderUnits(a),l=n.featureExpressionInfoContext;e*=3,i*=3;for(let d=0;d<s;++d){const p=t[e],u=t[e+1],f=t[e+2];r[i]=p,r[i+1]=u,r[i+2]=l==null?f+c:c,e+=3,i+=3}return 0}class Mu{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var _s;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(_s||(_s={}));const Lu={"absolute-height":{applyElevationAlignmentBuffer:Iu,requiresAlignment:$u},"on-the-ground":{applyElevationAlignmentBuffer:Pu,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Eu,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Du,requiresAlignment:()=>!0}},Fu=B(),tr=new Mu,ni=I(),Nu=xi.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function zu(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function lg(t,e,r,i){const s=t==null?void 0:t.expression;if(typeof s!="string")return null;const o=Hu(s);if(o!=null)return{cachedResult:o};const a=await Rl();Al(r);const n=a.arcadeUtils,c=n.createSyntaxTree(s);return n.dependsOnView(c)?(i!=null&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:n.createFunction(c),context:n.createExecContext(null,{sr:e}),modules:a}}}function ju(t,e,r){return t.arcadeUtils.createFeature(e.attributes,e.geometry,r)}function Uu(t,e){if(t!=null&&!yn(t)){if(!e||!t.arcade)return void Nu.errorOncePerTick("Arcade support required but not provided");const r=e;r._geometry&&(r._geometry=$c(r._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function Vu(t){if(t!=null){if(yn(t))return t.cachedResult;const e=t.arcade;let r=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof r!="number"&&(t.cachedResult=0,r=0),r}return 0}function cg(t,e=!1){let r=t==null?void 0:t.featureExpressionInfo;const i=r==null?void 0:r.expression;return e||i==="0"||(r=null),r??null}const dg={cachedResult:0};function yn(t){return t.cachedResult!=null}function Hu(t){return t==="0"?0:null}let hg=class wn{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Pl(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,r){const i=this.calculateOffsetRenderUnits(r);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let r=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(r+=Vu(i)*this._metersPerElevationInfoUnit),r/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=El(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,r,i){if(e==null)return void(this._featureExpressionInfoContext=null);const s=e==null?void 0:e.arcade;s&&r!=null&&i!=null?(this._featureExpressionInfoContext=zu(e),Uu(this._featureExpressionInfoContext,ju(s.modules,r,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const r=new wn;return e!=null&&r.setFromElevationInfo(e),r}};function Gu(t){return t instanceof Float32Array&&t.length>=16}function Bu(t){return Array.isArray(t)&&t.length>=16}function Wu(t){return Gu(t)||Bu(t)}const Sn=.5;function ku(t,e){t.include(Aa),t.attributes.add(m.POSITION,"vec3"),t.attributes.add(m.NORMAL,"vec3"),t.attributes.add(m.AUXPOS1,"vec4");const r=t.vertex;Ri(r,e),xs(r,e),r.uniforms.add(new Te("viewport",(i,s)=>s.camera.fullViewport),new Z("polygonOffset",i=>i.shaderPolygonOffset),new Z("cameraGroundRelative",(i,s)=>s.camera.aboveGround?1:-1)),e.hasVerticalOffset&&lc(r),r.constants.add("smallOffsetAngle","float",.984807753012208),r.code.add(g`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.code.add(g`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?g.float(0):g`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||cc(r),e.draped||(r.uniforms.add(new Z("perDistancePixelRatio",(i,s)=>Math.tan(s.camera.fovY/2)/(s.camera.fullViewport[2]/2))),r.code.add(g`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${g.float(Sn)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Vr(r),e.hasScreenSizePerspective&&Pa(r),r.code.add(g`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offset of labels with respect to objects.
      // It also pulls the label towards the viewer so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?g`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":g`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}let qu=class{constructor(){this.factor=new ra,this.factorAlignment=new ra}},ra=class{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}};function Fs(t){t.uniforms.add(new ci("alignPixelEnabled",(e,r)=>r.alignPixelEnabled)),t.code.add(g`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(g`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Zu(t,e){const{vertex:r,fragment:i}=t;r.include(Fs),e.multipassEnabled&&(r.include(fh),t.varyings.add("depth","float")),r.code.add(g`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?g`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(Ai,e),i.code.add(g`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?g`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function Yu(t){t.vertex.uniforms.add(new Z("renderTransparentlyOccludedHUD",(e,r)=>r.hudRenderStyle===Ir.Occluded?1:r.hudRenderStyle===Ir.NotOccluded?0:.75),new Te("viewport",(e,r)=>r.camera.fullViewport),new Xe("hudVisibilityTexture",(e,r)=>{var i;return(i=r.hudVisibility)==null?void 0:i.colorTexture})),t.vertex.include(Fs),t.vertex.code.add(g`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function Cn(t){const e=new pr,r=t.signedDistanceFieldEnabled;if(e.include(ku,t),e.include(ct,t),t.occlusionPass)return e.include(Zu,t),e;const{vertex:i,fragment:s}=e;e.include(Aa),s.include(ya),s.include(Pi),e.include(Os,t),e.include(Ti,t),e.include(Yu),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),i.uniforms.add(new Te("viewport",(l,d)=>d.camera.fullViewport),new dr("screenOffset",(l,d)=>Et(bn,2*l.screenOffset[0]*d.camera.pixelRatio,2*l.screenOffset[1]*d.camera.pixelRatio)),new dr("anchorPosition",l=>Mr(l)),new Te("materialColor",l=>l.color)),Vr(i),r&&(i.uniforms.add(new Te("outlineColor",l=>l.outlineColor)),s.uniforms.add(new Te("outlineColor",l=>ia(l)?l.outlineColor:ws),new Z("outlineSize",l=>ia(l)?l.outlineSize:0))),t.pixelSnappingEnabled&&i.include(Fs),t.hasScreenSizePerspective&&(dc(i),Pa(i)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(m.UV0,"vec2"),e.attributes.add(m.COLOR,"vec4"),e.attributes.add(m.SIZE,"vec2"),e.attributes.add(m.FEATUREATTRIBUTE,"vec4"),i.code.add(g`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?g`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:g`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const o=g`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,a=t.pixelSnappingEnabled?r?g`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:g`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:g`posProj += quadOffset;`;i.code.add(g`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${o}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===C.ObjectAndLayerIdColor?g`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${g.float(Le)};
    ${r?`alphaDiscard = alphaDiscard && outlineColor.a < ${g.float(Le)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${a}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?g`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),s.uniforms.add(new Xe("tex",l=>l.texture));const n=t.debugDrawLabelBorder?g`(isBorder > 0.0 ? 0.0 : ${g.float(ro)})`:g.float(ro),c=g`
    ${t.debugDrawLabelBorder?g`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?g`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:g`
      vec2 samplePos = vtc;
      `}

    ${r?g`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${g.float(Le)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:g`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?g`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case C.Color:s.code.add(g`
        void main() {
          ${c}
          ${t.transparencyPassType===te.FrontFace?"fragColor.rgb /= fragColor.a;":""}
        }`);break;case C.Alpha:s.code.add(g`
        void main() {
          ${c}
          fragColor = vec4(fragColor.a);
        }`);break;case C.ObjectAndLayerIdColor:s.code.add(g`
        void main() {
          ${c}
          outputObjectAndLayerIdColor();
        }`);break;case C.Highlight:s.constants.add("occludedHighlightFlag","vec4",hc).add("unoccludedHighlightFlag","vec4",uc),s.code.add(g`
        void main() {
          ${c}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function ia(t){return t.outlineColor[3]>0&&t.outlineSize>0}function Mr(t,e=bn){return t.textureIsSignedDistanceField?Xu(t.anchorPosition,t.distanceFieldBoundingBox,e):zr(e,t.anchorPosition),e}function Xu(t,e,r){e!=null?Et(r,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):Et(r,0,0)}const bn=J(),Ju=Object.freeze(Object.defineProperty({__proto__:null,build:Cn,calculateAnchorPosForRendering:Mr},Symbol.toStringTag,{value:"Module"}));let On=class xn extends fr{initializeConfiguration(e,r){r.spherical=e.viewingMode===ft.Global}initializeProgram(e){return new mr(e.rctx,xn.shader.get().build(this.configuration),Hr)}initializePipeline(){const e=this.configuration.transparencyPassType,r=this.configuration,i=e===te.NONE,s=e===te.FrontFace,o=this.configuration.hasPolygonOffset?Qu:null,a=(i||s)&&r.output!==C.Highlight&&(r.depthEnabled||r.occlusionPass)?Di:null;return Ze({blending:r.output===C.Color||r.output===C.Alpha||r.output===C.Highlight?i?Ku:Ei(e):null,depthTest:{func:Rc.LEQUAL},depthWrite:a,colorWrite:rt,polygonOffset:o})}get primitiveType(){return this.configuration.occlusionPass?vi.POINTS:vi.TRIANGLES}};On.shader=new gr(Ju,()=>ur(()=>Promise.resolve().then(()=>Np),void 0,import.meta.url));const Qu={factor:0,units:-4},Ku=Fa(ht.ONE,ht.ONE_MINUS_SRC_ALPHA);class K extends Ur{constructor(){super(...arguments),this.output=C.Color,this.transparencyPassType=te.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}h([S({count:C.COUNT})],K.prototype,"output",void 0),h([S({count:te.COUNT})],K.prototype,"transparencyPassType",void 0),h([S()],K.prototype,"screenCenterOffsetUnitsEnabled",void 0),h([S()],K.prototype,"spherical",void 0),h([S()],K.prototype,"occlusionTestEnabled",void 0),h([S()],K.prototype,"signedDistanceFieldEnabled",void 0),h([S()],K.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),h([S()],K.prototype,"vvSize",void 0),h([S()],K.prototype,"vvColor",void 0),h([S()],K.prototype,"hasVerticalOffset",void 0),h([S()],K.prototype,"hasScreenSizePerspective",void 0),h([S()],K.prototype,"debugDrawLabelBorder",void 0),h([S()],K.prototype,"hasSlicePlane",void 0),h([S()],K.prototype,"hasPolygonOffset",void 0),h([S()],K.prototype,"depthEnabled",void 0),h([S()],K.prototype,"pixelSnappingEnabled",void 0),h([S()],K.prototype,"draped",void 0),h([S()],K.prototype,"multipassEnabled",void 0),h([S()],K.prototype,"cullAboveGround",void 0),h([S()],K.prototype,"occlusionPass",void 0),h([S()],K.prototype,"objectAndLayerIdColorInstanced",void 0),h([S({constValue:!0})],K.prototype,"hasSliceInVertexProgram",void 0),h([S({constValue:!1})],K.prototype,"hasVvInstancing",void 0);class fg extends Ts{constructor(e){super(e,new hp),this._configuration=new K}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=r.slot===V.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===C.Color||e===C.Alpha),e===C.Color&&(this._configuration.debugDrawLabelBorder=!!ns.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration}intersect(e,r,i,s,o,a){if(!(i.options.selectionMode&&i.options.hud&&e.visible&&i.point))return;const n=this.parameters,c=i.point,l=i.camera;let{scaleX:d,scaleY:p}=this._getScreenScale(e);d*=l.pixelRatio,p*=l.pixelRatio,Js(rs,r),e.attributes.has(m.FEATUREATTRIBUTE)&&rp(rs);const u=e.attributes.get(m.POSITION),f=e.attributes.get(m.SIZE),v=e.attributes.get(m.NORMAL),_=e.attributes.get(m.AUXPOS1);ye(u.size>=3);const b=Mr(n),x=this.parameters.centerOffsetUnits==="screen";for(let w=0;w<u.data.length/u.size;w++){const y=w*u.size;X(fe,u.data[y],u.data[y+1],u.data[y+2]),ue(fe,fe,r);const D=w*f.size;nt[0]=f.data[D]*d,nt[1]=f.data[D+1]*p,ue(fe,fe,l.viewMatrix);const O=w*_.size;if(X(Ee,_.data[O],_.data[O+1],_.data[O+2]),!x&&(fe[0]+=Ee[0],fe[1]+=Ee[1],Ee[2]!==0)){const T=Ee[2];oe(Ee,fe),he(fe,fe,Y(Ee,Ee,T))}const R=w*v.size;if(X(br,v.data[R],v.data[R+1],v.data[R+2]),this._normalAndViewAngle(br,rs,l,is),this._applyVerticalOffsetTransformationView(fe,is,l,ts),l.applyProjection(fe,ve),ve[0]>-1){x&&(Ee[0]||Ee[1])&&(ve[0]+=Ee[0]*l.pixelRatio,Ee[1]!==0&&(ve[1]+=pc(Ee[1],ts.factorAlignment)*l.pixelRatio),l.unapplyProjection(ve,fe)),ve[0]+=this.parameters.screenOffset[0]*l.pixelRatio,ve[1]+=this.parameters.screenOffset[1]*l.pixelRatio,ve[0]=Math.floor(ve[0]),ve[1]=Math.floor(ve[1]),fc(nt,ts.factor,nt);const T=lp*l.pixelRatio;let z=0;if(n.textureIsSignedDistanceField&&(z=n.outlineSize*l.pixelRatio/2),sa(c,ve[0],ve[1],nt,T,z,n,b)){const $=i.ray;if(ue(oa,fe,ir(op,l.viewMatrix)),ve[0]=c[0],ve[1]=c[1],l.unprojectFromRenderScreen(ve,fe)){const P=I();H(P,$.direction);const G=1/qe(P);Y(P,P,G),a(Lr($.origin,fe)*G,P,-1,!0,1,oa)}}}}}intersectDraped(e,r,i,s,o,a){const n=e.attributes.get(m.POSITION),c=e.attributes.get(m.SIZE),l=this.parameters,d=Mr(l);let{scaleX:p,scaleY:u}=this._getScreenScale(e);p*=e.screenToWorldRatio,u*=e.screenToWorldRatio;const f=cp*e.screenToWorldRatio;for(let v=0;v<n.data.length/n.size;v++){const _=v*n.size,b=n.data[_],x=n.data[_+1],w=v*c.size;nt[0]=c.data[w]*p,nt[1]=c.data[w+1]*u;let y=0;l.textureIsSignedDistanceField&&(y=l.outlineSize*e.screenToWorldRatio/2),sa(s,b,x,nt,f,y,l,d)&&o(a.dist,a.normal,-1,!1)}}createBufferWriter(){return new pp(this)}_normalAndViewAngle(e,r,i,s){return Wu(r)&&(r=Js(sp,r)),Dl(s.normal,e,r),ue(s.normal,s.normal,i.viewInverseTransposeMatrix),s.cosAngle=Pt(Tn,dp),s}_updateScaleInfo(e,r,i){const s=this.parameters;s.screenSizePerspective!=null?io(i,r,s.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),s.screenSizePerspectiveAlignment!=null?io(i,r,s.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,r,i,s,o,a,n){const c=this._normalAndViewAngle(r,i,o,is);return this._applyVerticalGroundOffsetView(e,c,o,n),this._applyVerticalOffsetTransformationView(n,c,o,a),this._applyPolygonOffsetView(n,c,s[3],o,n),this._applyCenterOffsetView(n,s,n),n}applyShaderOffsetsNDC(e,r,i,s,o){return this._applyCenterOffsetNDC(e,r,i,s),o!=null&&H(o,s),this._applyPolygonOffsetNDC(s,r,i,s),s}_applyPolygonOffsetView(e,r,i,s,o){const a=s.aboveGround?1:-1;let n=Math.sign(i);n===0&&(n=a);const c=a*n;if(this.parameters.shaderPolygonOffset<=0)return H(o,e);const l=Rt(Math.abs(r.cosAngle),.01,1),d=1-Math.sqrt(1-l*l)/l/s.viewport[2];return Y(o,e,c>0?d:1/d),o}_applyVerticalGroundOffsetView(e,r,i,s){const o=qe(e),a=i.aboveGround?1:-1,n=i.computeRenderPixelSizeAtDist(o)*Sn,c=Y(fe,r.normal,a*n);return re(s,e,c),s}_applyVerticalOffsetTransformationView(e,r,i,s){var l;const o=this.parameters;if(!((l=o.verticalOffset)!=null&&l.screenLength)){if(o.screenSizePerspective||o.screenSizePerspectiveAlignment){const d=qe(e);this._updateScaleInfo(s,d,r.cosAngle)}else s.factor.scale=1,s.factorAlignment.scale=1;return e}const a=qe(e),n=o.screenSizePerspectiveAlignment??o.screenSizePerspective,c=mc(i,a,o.verticalOffset,r.cosAngle,n);return this._updateScaleInfo(s,a,r.cosAngle),Y(r.normal,r.normal,c),re(e,e,r.normal)}_applyCenterOffsetView(e,r,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&H(i,e),s&&(i[0]+=r[0],i[1]+=r[1],r[2]&&(oe(br,i),re(i,i,Y(br,br,r[2])))),i}_applyCenterOffsetNDC(e,r,i,s){const o=this.parameters.centerOffsetUnits!=="screen";return s!==e&&H(s,e),o||(s[0]+=r[0]/i.fullWidth*2,s[1]+=r[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,r,i,s){const o=this.parameters.shaderPolygonOffset;if(e!==s&&H(s,e),o){const a=i.aboveGround?1:-1,n=a*Math.sign(r[3]);s[2]-=(n||a)*o}return s}produces(e,r){if(r===C.Color||r===C.Alpha||r===C.Highlight||r===C.ObjectAndLayerIdColor){if(e===V.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:i,occlusionTest:s}=this.parameters;return e===(i?V.LABEL_MATERIAL:V.HUD_MATERIAL)||s&&e===V.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new ep(e)}calculateRelativeScreenBounds(e,r,i=rr()){return tp(this.parameters,e,r,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}_getScreenScale(e){const r=e.attributes.get(m.FEATUREATTRIBUTE);if(r==null)return{scaleX:1,scaleY:1};const i=$l(r.data,np),[s,o]=gc(ap,this.parameters,i);return{scaleX:s,scaleY:o}}}class ep extends vc{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(On,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function tp(t,e,r,i=ip){return zr(i,t.anchorPosition),i[0]*=-e[0],i[1]*=-e[1],i[0]+=t.screenOffset[0]*r,i[1]+=t.screenOffset[1]*r,i}function rp(t){const e=t[0],r=t[1],i=t[2],s=t[3],o=t[4],a=t[5],n=t[6],c=t[7],l=t[8],d=1/Math.sqrt(e*e+r*r+i*i),p=1/Math.sqrt(s*s+o*o+a*a),u=1/Math.sqrt(n*n+c*c+l*l);return t[0]=e*d,t[1]=r*d,t[2]=i*d,t[3]=s*p,t[4]=o*p,t[5]=a*p,t[6]=n*u,t[7]=c*u,t[8]=l*u,t}function sa(t,e,r,i,s,o,a,n){let c=e-s-(n[0]>0?i[0]*n[0]:0),l=c+i[0]+2*s,d=r-s-(n[1]>0?i[1]*n[1]:0),p=d+i[1]+2*s;const u=a.distanceFieldBoundingBox;return a.textureIsSignedDistanceField&&u!=null&&(c+=i[0]*u[0],d+=i[1]*u[1],l-=i[0]*(1-u[2]),p-=i[1]*(1-u[3]),c-=o,l+=o,d-=o,p+=o),t[0]>c&&t[0]<l&&t[1]>d&&t[1]<p}const ts=new qu,ip=J(),fe=I(),br=I(),ve=De(),Tn=I(),oa=I(),rs=Cs(),sp=Cs(),op=B(),Ee=I(),ap=De(),np=De(),is={normal:Tn,cosAngle:0},lp=1,cp=2,nt=[0,0],dp=cr(0,0,1);class hp extends _c{constructor(){super(...arguments),this.renderOccluded=ut.Occlude,this.isDecoration=!1,this.color=At(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=ys(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=At(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const Rn=it().vec3f(m.POSITION).vec3f(m.NORMAL).vec2f(m.UV0).vec4u8(m.COLOR).vec2f(m.SIZE).vec4f(m.AUXPOS1).vec4f(m.FEATUREATTRIBUTE),up=Rn.clone().vec4u8(m.OBJECTANDLAYERIDCOLOR);class pp{constructor(e){this._material=e,this.vertexBufferLayout=tt("enable-feature:objectAndLayerId-rendering")?up:Rn}elementCount(e){return 6*e.attributes.get(m.POSITION).indices.length}write(e,r,i,s,o){var x;yc(i.attributes.get(m.POSITION),e,s.position,o,6),wc(i.attributes.get(m.NORMAL),r,s.normal,o,6);const a=i.attributes.get(m.UV0).data;let n,c,l,d;if(a==null||a.length<4){const w=this._material.parameters;n=0,c=0,l=w.texCoordScale[0],d=w.texCoordScale[1]}else n=a[0],c=a[1],l=a[2],d=a[3];l=Math.min(1.99999,l+1),d=Math.min(1.99999,d+1);let p=i.attributes.get(m.POSITION).indices.length,u=o;const f=s.uv0;for(let w=0;w<p;++w)f.set(u,0,n),f.set(u,1,c),u++,f.set(u,0,l),f.set(u,1,c),u++,f.set(u,0,l),f.set(u,1,d),u++,f.set(u,0,l),f.set(u,1,d),u++,f.set(u,0,n),f.set(u,1,d),u++,f.set(u,0,n),f.set(u,1,c),u++;Sc(i.attributes.get(m.COLOR),4,s.color,o,6);const{data:v,indices:_}=i.attributes.get(m.SIZE);p=_.length;const b=s.size;u=o;for(let w=0;w<p;++w){const y=v[2*_[w]],D=v[2*_[w]+1];for(let O=0;O<6;++O)b.set(u,0,y),b.set(u,1,D),u++}if(i.attributes.get(m.AUXPOS1)?so(i.attributes.get(m.AUXPOS1),s.auxpos1,o,6):oo(s.auxpos1,o,6*p),i.attributes.get(m.FEATUREATTRIBUTE)?so(i.attributes.get(m.FEATUREATTRIBUTE),s.featureAttribute,o,6):oo(s.featureAttribute,o,6*p),i.objectAndLayerIdColor!=null){const w=(x=i.attributes.get(m.POSITION))==null?void 0:x.indices;if(w){const y=w.length,D=s.getField(m.OBJECTANDLAYERIDCOLOR,Ic);Cc(i.objectAndLayerIdColor,D,y,o,6)}}}}function An(t){const e=new pr,{vertex:r,fragment:i,attributes:s,varyings:o}=e;Ri(r,t),e.include(Oa,t),e.include(bc,t),e.include(Os,t),e.include(Ti,t),s.add(m.POSITION,"vec3"),t.vvColor&&s.add(m.COLORFEATUREATTRIBUTE,"float"),o.add("vColor","vec4"),o.add("vpos","vec3");const a=t.multipassEnabled&&(t.output===C.Color||t.output===C.Alpha);a&&o.add("depth","float"),r.uniforms.add(new Te("eColor",l=>l.color));const n=t.output===C.Depth;n&&(e.include(wa,t),Oc(e),Sa(e)),r.code.add(g`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${a?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${n?g`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:g`transformPosition(proj, view, vpos);`}
    }
  `),e.include(ct,t),a&&e.include(Ai,t),i.include(Pi);const c=t.output===C.Highlight;return c&&e.include(xa,t),i.code.add(g`
  void main() {
    discardBySlice(vpos);
    ${a?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===C.ObjectAndLayerIdColor?g`fColor.a = 1.0;`:""}

    if (fColor.a < ${g.float(Le)}) {
      discard;
    }

    ${t.output===C.Alpha?g`fragColor = vec4(fColor.a);`:""}

    ${t.output===C.Color?g`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===te.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${c?g`outputHighlight();`:""};
    ${t.output===C.Depth?g`outputDepth(linearDepth);`:""};
    ${t.output===C.ObjectAndLayerIdColor?g`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const fp=Object.freeze(Object.defineProperty({__proto__:null,build:An},Symbol.toStringTag,{value:"Module"}));let Pn=class En extends fr{initializeProgram(e){return new mr(e.rctx,En.shader.get().build(this.configuration),Hr)}_createPipeline(e,r){const i=this.configuration,s=e===te.NONE,o=e===te.FrontFace;return Ze({blending:i.output!==C.Color&&i.output!==C.Alpha||!i.transparent?null:s?xr:Ei(e),culling:Fc(i.cullFace),depthTest:{func:Es(e)},depthWrite:(s||o)&&i.writeDepth?Di:null,colorWrite:rt,stencilWrite:i.hasOccludees?os:null,stencilTest:i.hasOccludees?r?as:Ca:null,polygonOffset:s||o?i.polygonOffset?mp:null:Ma(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};Pn.shader=new gr(fp,()=>ur(()=>Promise.resolve().then(()=>zp),void 0,import.meta.url));const mp={factor:1,units:1};class de extends Ur{constructor(){super(...arguments),this.output=C.Color,this.cullFace=Ds.None,this.transparencyPassType=te.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1}}h([S({count:C.COUNT})],de.prototype,"output",void 0),h([S({count:Ds.COUNT})],de.prototype,"cullFace",void 0),h([S({count:te.COUNT})],de.prototype,"transparencyPassType",void 0),h([S()],de.prototype,"hasSlicePlane",void 0),h([S()],de.prototype,"hasVertexColors",void 0),h([S()],de.prototype,"transparent",void 0),h([S()],de.prototype,"polygonOffset",void 0),h([S()],de.prototype,"enableOffset",void 0),h([S()],de.prototype,"writeDepth",void 0),h([S()],de.prototype,"hasOccludees",void 0),h([S()],de.prototype,"multipassEnabled",void 0),h([S()],de.prototype,"cullAboveGround",void 0),h([S()],de.prototype,"objectAndLayerIdColorInstanced",void 0),h([S()],de.prototype,"vvColor",void 0),h([S({constValue:!1})],de.prototype,"occlusionPass",void 0),h([S({constValue:!0})],de.prototype,"hasVvInstancing",void 0),h([S({constValue:!1})],de.prototype,"vvSize",void 0),h([S({constValue:!1})],de.prototype,"vvOpacity",void 0);class mg extends sn{constructor(e){super(e,new vp),this.supportsEdges=!0,this._configuration=new de}getConfiguration(e,r){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<La,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration}produces(e,r){return r===C.Color||r===C.Alpha||r===C.Highlight||r===C.Depth&&this.parameters.writeLinearDepth||r===C.ObjectAndLayerIdColor?e===V.DRAPED_MATERIAL?!0:r===C.Highlight?e===V.OPAQUE_MATERIAL:e===(this._isTransparent?this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:V.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new gp(e)}createBufferWriter(){const e=it().vec3f(m.POSITION);return tt("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(m.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(m.COLORFEATUREATTRIBUTE):e.vec4u8(m.COLOR),new Ra(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class gp extends Rs{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==C.Color&&this._output!==C.Alpha||this._updateOccludeeState(e),this.ensureTechnique(Pn,e)}}let vp=class extends ba{constructor(){super(...arguments),this.color=ws,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=Ds.None,this.hasOccludees=!1}};const me={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},_p={dash:me.dash,"dash-dot":[...me.dash,...me.dot],dot:me.dot,"long-dash":me["long-dash"],"long-dash-dot":[...me["long-dash"],...me.dot],"long-dash-dot-dot":[...me["long-dash"],...me.dot,...me.dot],none:null,"short-dash":me["short-dash"],"short-dash-dot":[...me["short-dash"],...me["short-dot"]],"short-dash-dot-dot":[...me["short-dash"],...me["short-dot"],...me["short-dot"]],"short-dot":me["short-dot"],solid:null},yp=8;function wp(t,e){return t==null?t:{pattern:t.slice(),pixelRatio:e}}function vg(t){return{pattern:[t,t],pixelRatio:2}}function _g(t){return t!=null&&t.type==="style"?Sp(t.style):null}function Sp(t){return t!=null?wp(_p[t],yp):null}function yg(t,e,r=null){const i=[],s=e.mapPositions;Cp(e,i);const o=i[0][1].data,a=i[0][1].indices.length,n=Ps(a);return bp(e,i,n),Tp(e,i,n),Op(e,i,n),xp(e,i,n),Rp(e,i,n),Ap(e,i,n),Pp(e,i,o),new $e(t,i,s,vr.Line,r)}function Cp(t,e){const{attributeData:{position:r},removeDuplicateStartEnd:i}=t,s=Ep(r)&&i,o=r.length/3-(s?1:0),a=new Array(2*(o-1)),n=s?r.slice(0,-3):r;let c=0;for(let l=0;l<o-1;l++)a[c++]=l,a[c++]=l+1;e.push([m.POSITION,new N(n,a,3,s)])}function bp(t,e,r){if(t.attributeData.colorFeature!=null)return;const i=t.attributeData.color;e.push([m.COLOR,new N(i??Ss,r,4)])}function Op(t,e,r){t.attributeData.normal&&e.push([m.NORMAL,new N(t.attributeData.normal,r,3)])}function xp(t,e,r){t.attributeData.colorFeature!=null&&e.push([m.COLORFEATUREATTRIBUTE,new N([t.attributeData.colorFeature],r,1,!0)])}function Tp(t,e,r){t.attributeData.sizeFeature==null&&e.push([m.SIZE,new N([t.attributeData.size??1],r,1,!0)])}function Rp(t,e,r){t.attributeData.sizeFeature!=null&&e.push([m.SIZEFEATUREATTRIBUTE,new N([t.attributeData.sizeFeature],r,1,!0)])}function Ap(t,e,r){t.attributeData.opacityFeature!=null&&e.push([m.OPACITYFEATUREATTRIBUTE,new N([t.attributeData.opacityFeature],r,1,!0)])}function Pp(t,e,r){if(t.overlayInfo==null||t.overlayInfo.renderCoordsHelper.viewingMode!==ft.Global||!t.overlayInfo.spatialReference.isGeographic)return;const i=As(r.length),s=Il(t.overlayInfo.spatialReference);for(let p=0;p<i.length;p+=3)Ml(r,p,i,p,s);const o=r.length/3,a=Fe(o+1);let n=Dp,c=$p,l=0,d=0;X(n,i[d++],i[d++],i[d++]),a[0]=0;for(let p=1;p<o+1;++p)p===o&&(d=0),X(c,i[d++],i[d++],i[d++]),l+=Ll(n,c),a[p]=l,[n,c]=[c,n];e.push([m.DISTANCETOSTART,new N(a,e[0][1].indices,1,!0)])}function Ep(t){const e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}const Dp=I(),$p=I();function wg(t,e,r,i){const s=t.type==="polygon"?yi.CCW_IS_HOLE:yi.NONE,o=t.type==="polygon"?t.rings:t.paths,{position:a,outlines:n}=Na(o,!!t.hasZ,s,t.spatialReference),c=As(a.length),l=Au(a,t.spatialReference,0,c,0,a,0,a.length/3,e,r,i),d=l!=null;return{lines:d?Dn(n,a,c):[],projectionSuccess:d,sampledElevation:l}}function Sg(t,e){const r=t.type==="polygon"?yi.CCW_IS_HOLE:yi.NONE,i=t.type==="polygon"?t.rings:t.paths,{position:s,outlines:o}=Na(i,!1,r),a=gi(s,t.spatialReference,0,s,e,0,s.length/3);for(let n=2;n<s.length;n+=3)s[n]=hu;return{lines:a?Dn(o,s):[],projectionSuccess:a}}function Dn(t,e,r=null){const i=new Array;for(const{index:s,count:o}of t){if(o<=1)continue;const a=3*s,n=3*o;i.push({position:lo(e,3*s,3*o),mapPositions:r!=null?lo(r,a,n):void 0})}return i}const Ip=Object.freeze(Object.defineProperty({__proto__:null,build:Qa,ribbonlineNumRoundJoinSubdivisions:$r},Symbol.toStringTag,{value:"Module"})),Mp=Object.freeze(Object.defineProperty({__proto__:null,build:on},Symbol.toStringTag,{value:"Module"})),Lp=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Is,build:Ha},Symbol.toStringTag,{value:"Module"})),Fp=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Ls,build:un},Symbol.toStringTag,{value:"Module"})),Np=Object.freeze(Object.defineProperty({__proto__:null,build:Cn,calculateAnchorPosForRendering:Mr},Symbol.toStringTag,{value:"Module"})),zp=Object.freeze(Object.defineProperty({__proto__:null,build:An},Symbol.toStringTag,{value:"Module"}));export{fg as $,Um as A,Vm as B,Er as C,jm as D,Ci as E,Cu as F,sn as G,Hh as H,cg as I,lg as J,_n as K,Wm as L,Mm as M,Lm as N,Im as O,Nm as P,xu as Q,Mu as R,tg as S,Uu as T,eg as U,Xc as V,dg as W,Xm as X,_s as Y,ng as Z,Fs as _,Si as a,ku as a0,Yu as a1,fh as a2,sg as a3,og as a4,ju as a5,Qm as a6,ag as a7,ke as a8,Wa as a9,Ym as aA,$t as aa,Dt as ab,Md as ac,th as ad,Dr as ae,Ja as af,Qd as ag,Ff as ah,le as ai,_g as aj,fm as ak,pm as al,Eh as am,Uh as an,mt as ao,It as ap,zh as aq,Jm as ar,Km as as,Ko as at,Bo as au,Ru as av,Yh as aw,Zh as ax,nm as ay,ph as az,ed as b,Mf as c,ig as d,Tr as e,Hm as f,zm as g,km as h,ka as i,mg as j,vg as k,Sg as l,yg as m,Au as n,hg as o,wg as p,Fm as q,td as r,hu as s,j as t,Lf as u,ai as v,Zm as w,ih as x,Gm as y,Bm as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}