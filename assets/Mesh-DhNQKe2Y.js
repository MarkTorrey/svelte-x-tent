const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loadGLTFMesh-DU5OzztT.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./MeshComponent-DwgliqsF.js","./imageUtils-DfzNVhIJ.js","./MeshVertexAttributes-CZVfbXVy.js","./BufferView-D7rTj7nO.js","./vec3-BZAVlszX.js","./vec4-CB19uIrr.js","./types-D0PSWh4d.js","./DefaultMaterial_COLOR_GAMMA-DHPqUhsG.js","./enums-BlUEVwJR.js","./Version-DJsGRXWf.js","./resourceUtils-NnmhFWEt.js","./basicInterfaces-DngWxyLO.js","./Indices-CDfjiMVj.js","./vertexSpaceConversion-CMBtQgFR.js","./spatialReferenceEllipsoidUtils-DfobcDUq.js","./computeTranslationToOriginAndRotation-B1gLm2pX.js","./projection-DfoxLsLx.js","./DoubleArray-UXJnwWGc.js","./gltfexport-D2prrWak.js"])))=>i.map(i=>d[i]);
import{A as W,mC as at,cJ as it,mD as ct,cx as Re,mE as lt,ix as H,fq as _,dD as ut,dp as pt,dd as w,df as ae,j$ as ie,fk as Z,U as re,fY as Fe,_ as ce,bR as oe,cA as F,bL as ft,mF as ht,fZ as mt,j6 as dt,j8 as gt,V as d,W as g,X as _e,kw as xt,$ as yt,a7 as vt,k8 as Q,eG as le,dN as wt,eP as Ie,mG as Me,dq as ue,dW as $t,mH as Pe,hh as At,eI as se,eK as Te,mI as Oe,fo as Le,mJ as Ee,mK as Ne,eF as bt,dL as St,dI as Rt,dP as he,dZ as Ft,jm as _t,dm as It,is as Mt,cp as Pt,Y as Tt,mL as de,cz as Ot,mM as Lt,gV as Et}from"./index-Cek7aMWl.js";import{b as je,A as Ce,y as ee,k as ze,w as Nt}from"./axisAngleDegrees-s-Pc0vGJ.js";import{h as G}from"./MeshComponent-DwgliqsF.js";import{N as J}from"./MeshTransform-4dnYKNDH.js";import{l as te}from"./MeshVertexAttributes-CZVfbXVy.js";import{f as jt}from"./triangulationUtils-WcX9UuuB.js";import{project as Ct,logProjectionError as v,loadProjectErrorMessage as T,projectToPCPF as De,projectNormalToPCPF as Ue,projectTangentToPCPF as Ve,projectFromPCPF as ke,projectNormalFromPCPF as Ge,projectTangentFromPCPF as Be}from"./projection-DfoxLsLx.js";import{M as pe,X as zt,N as Ye}from"./vertexSpaceConversion-CMBtQgFR.js";import{u as ge,y as Dt,h as Ut}from"./External-DDCpGaYY.js";import{a as qe}from"./spatialReferenceEllipsoidUtils-DfobcDUq.js";import{u as Vt}from"./computeTranslationToOriginAndRotation-B1gLm2pX.js";const kt="Mesh must be loaded before applying operations",Gt="Provided component is not part of the list of components",Bt="Expected polygon to be a Polygon instance",q="Expected location to be a Point instance";let xe=class extends W{constructor(){super("invalid-input:location",q)}};function Yt([e,t,n,r,o,s],a,i,l){ye??(ye=new Float64Array(24));const c=ye;return c[0]=e,c[1]=t,c[2]=n,c[3]=e,c[4]=o,c[5]=n,c[6]=r,c[7]=o,c[8]=n,c[9]=r,c[10]=t,c[11]=n,c[12]=e,c[13]=t,c[14]=s,c[15]=e,c[16]=o,c[17]=s,c[18]=r,c[19]=o,c[20]=s,c[21]=r,c[22]=t,c[23]=s,Ct({positions:c,transform:a,vertexSpace:i,inSpatialReference:l,outSpatialReference:l,outPositions:c}),He(c,l)}let ye=null;function We(e){if(e.length===0)return at;const t=it([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return ct(t,e),t}function He(e,t){const[n,r,o,s,a,i]=We(e);return new Re({xmin:n,ymin:r,zmin:o,xmax:s,ymax:a,zmax:i,spatialReference:t})}function me(e,t,n,r){if(r!==void 0){lt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!H(t)||r===o)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const K=()=>re.getLogger("esri.geometry.support.meshUtils.centerAt");function qt(e,t,n){var a;if(!((a=e.vertexAttributes)!=null&&a.position))return;const{vertexSpace:r}=e,o=(n==null?void 0:n.origin)??e.anchor,s=me(K,r,o.spatialReference,n==null?void 0:n.geographic);H(r)?Wt(e,t,o):s?Ht(e,t,o):Jt(e,t,o)}function Wt(e,t,n){const{vertexSpace:r}=e;if(!H(r))return;const o=Ke,s=Je;if(!_(t,s,e.spatialReference))return void v(K(),t.spatialReference,e.spatialReference,T);if(!_(n,o,e.spatialReference)){const i=e.origin;return o[0]=i.x,o[1]=i.y,o[2]=i.z,void v(K(),n.spatialReference,e.spatialReference,T)}const a=ut(Xt,s,o);r.origin=pt(w(),r.origin,a)}function Ht(e,t,n){const r=ae(n.x,n.y,n.z??0),o=pe(e,new ie({origin:r}));if(!o)return;const s=ae(t.x,t.y,t.z??0),a=pe({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new ie({origin:s})},new Z);if(!a)return;const{position:i,normal:l,tangent:c}=a;e.vertexAttributes.position=i,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=c,e.vertexAttributesChanged()}function Jt(e,t,n){const r=Ke,o=Je;if(_(t,o,e.spatialReference)){if(!_(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void v(K(),n.spatialReference,e.spatialReference,T)}Kt(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else v(K(),t.spatialReference,e.spatialReference,T)}function Kt(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const Je=w(),Ke=w(),Xt=w();async function Zt(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await Fe(ce(()=>import("./loadGLTFMesh-DU5OzztT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url),n),s=await en(r,n);oe(n);const a=o(new F({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:Qt(s),signal:n==null?void 0:n.signal,expectedType:s.type});a.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:i,components:l}=await a;e.vertexAttributes=i,e.components=l}function Qt(e){const t=ft(e.url);return n=>{const r=ht(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function en(e,t){if(Array.isArray(e)){if(!e.length)throw new W("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?nn(e):rn(e,t)}return Xe(e)}async function tn(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new B(n[0].partUrl);const s=await e.toBlob(t);return oe(t),B.fromBlob(s,tt(o,r))}function Xe(e){return B.fromBlob(e,tt(e.name,e.type))}function nn(e){return et(e.map(t=>({name:t.name,mimeType:t.type,source:Xe(t)})))}async function rn(e,t){const n=await mt(e.map(async r=>{const o=await tn(r);return oe(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(dt(t))throw n.forEach(r=>r.source.dispose()),gt();return et(n)}const Ze=/^model\/gltf\+json$/,Qe=/^model\/gltf-binary$/,fe=/\.gltf$/i,on=/\.glb$/i;function et(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:s,source:a}of e)r===null&&(Ze.test(s)||fe.test(o)?(r=a.url,n="gltf"):(Qe.test(s)||on.test(o))&&(r=a.url,n="glb")),t.set(o,a.url),a.files.forEach((i,l)=>t.set(l,i));if(r==null)throw new W("mesh-load-external:missing-files","Missing files to load external mesh source");return new B(r,()=>e.forEach(({source:o})=>o.dispose()),t,n)}class B{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new B(r,()=>URL.revokeObjectURL(r),void 0,n)}}function tt(e,t){return Ze.test(t)||fe.test(e)?"gltf":Qe.test(t)||fe.test(e)?"glb":void 0}let P=class extends xt{constructor(e){super(e),this.externalSources=new yt,this._explicitDisplaySource=null,this.addHandles(vt(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ge(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Dt(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Ut(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ge)}};d([g()],P.prototype,"externalSources",void 0),d([g()],P.prototype,"displaySource",null),d([g()],P.prototype,"_implicitDisplaySource",null),d([g()],P.prototype,"_explicitDisplaySource",void 0),P=d([_e("esri.geometry.support.meshUtils.Metadata")],P);function sn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=dn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,c=0,u=0,f=0;for(let h=0;h<e.length;h++){const p=e[h],x=l/3;for(const A of t)i[f++]=x+A;const O=p.corners;for(let A=0;A<4;A++){const L=O[A];let $=0;a[u++]=.25*n[A][0]+p.uvOrigin[0],a[u++]=p.uvOrigin[1]-.25*n[A][1];for(let S=0;S<3;S++)p.axis[S]!==0?(o[l++]=.5*p.axis[S],s[c++]=p.axis[S]):(o[l++]=.5*L[$++],s[c++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function an(e,t){const n=e.components[0],r=n.faces,o=gn[t],s=6*o,a=new Array(6),i=new Array(r.length-6);let l=0,c=0;for(let u=0;u<r.length;u++)u>=s&&u<s+6?a[l++]=r[u]:i[c++]=r[u];if(e.vertexAttributes.uv!=null){const u=new Float32Array(e.vertexAttributes.uv),f=4*o*2,h=[0,1,1,1,1,0,0,0];for(let p=0;p<h.length;p++)u[f+p]=h[p];e.vertexAttributes.uv=u}return e.components=[new G({faces:a,material:n.material}),new G({faces:i})],e}function cn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let l=0,c=0,u=0,f=0;for(let h=0;h<=t;h++){const p=h/t*Math.PI+.5*Math.PI,x=Math.cos(p),O=Math.sin(p);m[2]=O;const A=h===0||h===t,L=A?n-1:n;for(let $=0;$<=L;$++){const S=$/L*2*Math.PI;m[0]=-Math.sin(S)*x,m[1]=Math.cos(S)*x;for(let I=0;I<3;I++)o[l]=.5*m[I],s[l]=m[I],++l;a[c++]=($+(A?.5:0))/n,a[c++]=h/t,h!==0&&$!==n&&(h!==t&&(i[u++]=f,i[u++]=f+1,i[u++]=f-n),h!==1&&(i[u++]=f,i[u++]=f-n,i[u++]=f-n-1)),f++}}return{position:o,normal:s,uv:a,faces:i}}function ln(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,c=0,u=0,f=0,h=0;for(let p=0;p<=5;p++){const x=p===0||p===5,O=p<=1||p>=4,A=p===2||p===4,L=x?n-1:n;for(let $=0;$<=L;$++){const S=$/L*2*Math.PI,I=x?0:.5;m[0]=I*Math.sin(S),m[1]=I*-Math.cos(S),m[2]=p<=2?.5:-.5;for(let j=0;j<3;j++)o[l++]=m[j],s[c++]=O?j===2?p<=1?1:-1:0:j===2?0:m[j]/I;a[u++]=($+(x?.5:0))/n,a[u++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,A||p===0||$===n||(p!==5&&(i[f++]=h,i[f++]=h+1,i[f++]=h-n),p!==1&&(i[f++]=h,i[f++]=h-n,i[f++]=h-n-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function un(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function pn(e){const t=Y.facingAxisOrderSwap[e],n=Y.position,r=Y.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const l=a;for(let c=0;c<3;c++){const u=t[c],f=Math.abs(u)-1,h=u>=0?1:-1;o[a]=n[l+f]*h,s[a]=r[l+f]*h,a++}}return{position:o,normal:s,uv:new Float32Array(Y.uv),faces:new Uint32Array(Y.faces),isPlane:!0}}const C=1,z=2,D=3,Y={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[D,C,z],west:[-D,-C,z],north:[-C,D,z],south:[C,-D,z],up:[C,z,D],down:[C,-z,-D]}};function X(e,t,n){e.isPlane||fn(e),mn(e,hn(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const r=Q(t,n),o=t.spatialReference.isGeographic?Q(t):r,s=pe({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new te({...s,uv:e.uv}),vertexSpace:r,components:[new G({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function fn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function hn(e,t,n){const r=zt(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function mn(e,t){if(t!=null){M[0]=t[0],M[4]=t[1],M[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)m[r]=e.position[n+r];le(m,m,M);for(let r=0;r<3;r++)e.position[n+r]=m[r]}if(t[0]!==t[1]||t[1]!==t[2]){M[0]=1/t[0],M[4]=1/t[1],M[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)m[r]=e.normal[n+r];le(m,m,M),wt(m,m);for(let r=0;r<3;r++)e.normal[n+r]=m[r]}}}}const dn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},gn={south:0,east:1,north:2,west:3,up:4,down:5},m=w(),M=Ie(),E=()=>re.getLogger("esri.geometry.support.meshUtils.rotate");function xn(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=(n==null?void 0:n.origin)??e.anchor,a=n==null?void 0:n.geographic,i=me(E,o,r,a);Me(e)?yn(e,t,s):i?vn(e,t,s):wn(e,t,s)}function yn(e,t,n){e.transform??(e.transform=new J);const{vertexSpace:r,transform:o,spatialReference:s}=e,[a,i,l]=r.origin,c=new F({x:a,y:i,z:l,spatialReference:s}),u=U;if(c.equals(n))ue(u,0,0,0);else if(!Ye(u,n,e))return void v(E(),n.spatialReference,s,T);$t(Ae,ee(t),Ce(t));const f=Pe(ve,Ae,se,At,u),{localMatrix:h}=o,p=Te(ve,f,h);o.scale=Oe(w(),p),Le(p,p,Ee(U,o.scale));const x=o.rotationAxis;o.rotation=ze(p),o.rotationAngle===0&&(o.rotationAxis=x),o.translation=Ne(w(),p)}function vn(e,t,n){const r=e.spatialReference,o=qe(r),s=nt;if(!_(n,s,o)&&(v(E(),n.spatialReference,o,"Falling back to mesh origin"),!_(e.origin,s,o)))return void v(E(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(a.length),u=i!=null?new Float32Array(i.length):null,f=l!=null?new Float32Array(l.length):null;Vt(o,s,ne,o),bt($e,ne);const h=we;le(ee(we),ee(t),$e),h[3]=t[3],De(a,r,c)&&(i==null||u==null||Ue(i,a,c,r,u))&&(l==null||f==null||Ve(l,a,c,r,f))?(k(c,h,3,s),ke(c,a,r)&&(i==null||u==null||(k(u,h,3),Ge(u,a,c,r,i)))&&(l==null||f==null||(k(f,h,4),Be(f,a,c,r,l)))?e.vertexAttributesChanged():v(E(),o,r)):v(E(),r,o)}function wn(e,t,n){const r=nt;if(!_(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void v(E(),n.spatialReference,e.spatialReference,T)}k(e.vertexAttributes.position,t,3,r),k(e.vertexAttributes.normal,t,3),k(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function k(e,t,n,r=se){if(e!=null){St(ne,Ce(t),ee(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)U[s]=e[o+s]-r[s];Rt(U,U,ne);for(let s=0;s<3;s++)e[o+s]=U[s]+r[s]}}}const U=w(),ve=he(),we=je(),ne=he(),$e=Ie(),nt=w(),Ae=Ft(),N=()=>re.getLogger("esri.geometry.support.meshUtils.scale");function $n(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position))return;const{vertexSpace:r,spatialReference:o}=e,s=(n==null?void 0:n.origin)??e.anchor,a=n==null?void 0:n.geographic,i=me(N,r,o,a);Me(e)?An(e,t,s):i?bn(e,t,s):Sn(e,t,s)}function An(e,t,n){e.transform??(e.transform=new J);const{vertexSpace:r,transform:o,spatialReference:s}=e,[a,i,l]=r.origin,c=new F({x:a,y:i,z:l,spatialReference:s}),u=V;if(c.equals(n))ue(u,0,0,0);else if(!Ye(u,n,e))return void v(N(),n.spatialReference,s,T);const f=ue(Rn,t,t,t),h=Pe(be,_t,se,f,u),{localMatrix:p}=o,x=Te(be,h,p);o.scale=Oe(w(),x),Le(x,x,Ee(V,o.scale));const O=o.rotationAxis;o.rotation=ze(x),o.rotationAngle===0&&(o.rotationAxis=O),o.translation=Ne(w(),x)}function bn(e,t,n){const r=e.spatialReference,o=qe(r),s=ot;if(!_(n,s,o)&&(v(N(),n.spatialReference,o,"Falling back to mesh origin"),!_(e.origin,s,o)))return void v(N(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(a.length),u=i!=null?new Float32Array(i.length):null,f=l!=null?new Float32Array(l.length):null;De(a,r,c)&&(i==null||u==null||Ue(i,a,c,r,u))&&(l==null||f==null||Ve(l,a,c,r,f))?(rt(c,t,s),ke(c,a,r)&&(i==null||u==null||Ge(u,a,c,r,i))&&(l==null||f==null||Be(f,a,c,r,l))?e.vertexAttributesChanged():v(N(),o,r)):v(N(),r,o)}function Sn(e,t,n){const r=ot;if(!_(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void v(N(),n.spatialReference,e.spatialReference,T)}rt(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function rt(e,t,n=se){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)V[o]=e[r+o]-n[o];It(V,V,t);for(let o=0;o<3;o++)e[r+o]=V[o]+n[o]}}const V=w(),Rn=w(),be=he(),ot=w();var b;const st="esri.geometry.Mesh";function R(){return re.getLogger(st)}const Fn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:Z,local:ie}};let y=b=class extends Mt.LoadableMixin(Pt(Et)){constructor(e){super(e),this.components=null,this.vertexSpace=new Z,this.transform=null,this.metadata=new P,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new te,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(Tt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new Re({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(H(r)){const{_untransformedBounds:s,transform:a}=this;return Yt(s,a,r,t)}return He(o,t)}get _untransformedBounds(){return We(this.vertexAttributes.position)}get anchor(){const e=de(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new F({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const e=de(this.vertexSpace,this.spatialReference);return e??this._transformedExtent.center}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(G.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}R().error("removeComponent()",Gt)}}rotate(e,t,n,r){return Nt(e,t,n,Se),xn(this,Se,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o==null?void 0:o.position;if(!s)return this;if(H(r)){const[a,i,l]=r.origin;r.origin=ae(a+e,i+t,l+n)}else{for(let a=0;a<s.length;a+=3)s[a]+=e,s[a+1]+=t,s[a+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?($n(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(qt(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Zt(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone())}cloneAndModifyVertexAttributes(e,t){var o;let n=null;if(this.components){const s=new Map,a=new Map;n=this.components.map(i=>i.cloneWithDeduplication(s,a))}const r={components:n,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:((o=this.transform)==null?void 0:o.clone())??null,metadata:this.metadata.clone()};return new b(r)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([ce(()=>import("./gltfexport-D2prrWak.js"),__vite__mapDeps([21,1,2,3,4,5,16,17,18,7,19,20,6,8,11,13,14]),import.meta.url),this.load(e)]);return oe(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(R().error(e,kt),!1)}static createBox(e,t){if(!(e instanceof F))return R().error(".createBox()",q),null;const n=new b(X(sn(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?an(n,t.imageFace):n}static createSphere(e,t){return e instanceof F?new b(X(cn((t==null?void 0:t.densificationFactor)||0),e,t)):(R().error(".createSphere()",q),null)}static createCylinder(e,t){return e instanceof F?new b(X(ln((t==null?void 0:t.densificationFactor)||0),e,t)):(R().error(".createCylinder()",q),null)}static createPlane(e,t){if(!(e instanceof F))return R().error(".createPlane()",q),null;const n=(t==null?void 0:t.facing)??"up",r=un(n,t==null?void 0:t.size);return new b(X(pn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof Ot))return R().error(".createFromPolygon()",Bt),null;const n=jt(e);return new b({vertexAttributes:new te({position:n.position}),components:[new G({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new Z})}static async createFromGLTF(e,t,n){if(!(e instanceof F)){const o=new xe;throw R().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await Fe(ce(()=>import("./loadGLTFMesh-DU5OzztT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url),n);return new b(await r(e,t,n))}static async createFromFiles(e,t,n){Lt(R(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>R().error(".createFromFiles()",o.message);if(!(e instanceof F)){const o=new xe;throw r(o),o}if(!(n!=null&&n.layer))throw new W("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var c;const r=(n==null?void 0:n.extent)??null,{spatialReference:o}=e,s=((c=n==null?void 0:n.transform)==null?void 0:c.clone())??new J,a=Q(e,n),i={source:t,extent:r},l=new P;return l.externalSources.push(i),new b({metadata:l,transform:s,vertexSpace:a,spatialReference:o})}static createIncomplete(e,t){var a;const{spatialReference:n}=e,r=((a=t==null?void 0:t.transform)==null?void 0:a.clone())??new J,o=Q(e,t),s=new b({transform:r,vertexSpace:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new W("mesh-incomplete","Mesh resources are not complete"))),s}};d([g({type:[G],json:{write:!0}})],y.prototype,"components",void 0),d([g({nonNullable:!0,types:Fn,constructOnly:!0,json:{write:!0}})],y.prototype,"vertexSpace",void 0),d([g({type:J,json:{write:!0}})],y.prototype,"transform",void 0),d([g({constructOnly:!0})],y.prototype,"metadata",void 0),d([g()],y.prototype,"hasExtent",null),d([g()],y.prototype,"_transformedExtent",null),d([g()],y.prototype,"_untransformedBounds",null),d([g()],y.prototype,"anchor",null),d([g()],y.prototype,"origin",null),d([g({readOnly:!0,json:{read:!1}})],y.prototype,"extent",null),d([g({readOnly:!0,json:{read:!1,write:!0,default:!0}})],y.prototype,"hasZ",void 0),d([g({readOnly:!0,json:{read:!1,write:!0,default:!1}})],y.prototype,"hasM",void 0),d([g({type:te,nonNullable:!0,json:{write:!0}})],y.prototype,"vertexAttributes",void 0),y=b=d([_e(st)],y);const Se=je(),Dn=y;export{Dn as $};
