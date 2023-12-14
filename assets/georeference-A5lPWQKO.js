import{hZ as Lt,h_ as et,h$ as jt,i0 as Bt,i1 as f,c as It,gt as Vt,i2 as b,i3 as Wt,hk as yt,cw as w,bx as Gt,aQ as $t,k as h,cy as zt,m as ht,i4 as Ht,i5 as Ut,i6 as qt,d0 as Yt,gW as kt,l as d,i7 as Dt,cx as mt,c$ as N,i8 as Kt,i9 as At,hA as rt,ia as Qt,j as Pt,fh as z,ib as nt,f8 as ot,f7 as at,ic as Zt,cN as Jt,id as Xt,cu as te,cv as ee,gU as U,ie as Ft,ig as it,ih as re,d5 as ne,bY as oe,ii as ae,ij as ie,gu as se,aM as le}from"./index-rwr9l75y.js";import{e as Tt}from"./mat3f64-sunSSgMR.js";import{e as E,o as V}from"./mat4f64-aoQZ5j3f.js";import{c as O}from"./spatialReferenceEllipsoidUtils-8C5019nR.js";import{m as ce,t as st,o as ue}from"./MeshLocalVertexSpace-POl-9qZz.js";import{m as fe}from"./MeshGeoreferencedRelativeVertexSpace-tKU2P3qA.js";import{v as D,y as pe,x as ge}from"./quat-YniXdMAg.js";import{e as J}from"./quatf64-5VCgza3C.js";import{n as _,s as dt,r as v}from"./vec32-Gt3b1FY4.js";import{i as F,T}from"./BufferView-NV8XicnI.js";function Mt(t,e,r){const n=Math.sin(t),o=Math.cos(t),a=Math.sin(e),s=Math.cos(e),i=r;return i[0]=-n,i[4]=-a*o,i[8]=s*o,i[12]=0,i[1]=o,i[5]=-a*n,i[9]=s*n,i[13]=0,i[2]=0,i[6]=s,i[10]=a,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function ye(t,e,r){return Mt(t,e,r),Lt(r,r),r}function H(t,e,r,n){if(t==null||n==null)return!1;const o=et(t,jt),a=et(n,Bt);if(o===a&&!lt(a)&&(o!==f.UNKNOWN||It(t,n)))return Vt(r,e),!0;if(lt(a)){const s=b[o][f.LON_LAT],i=b[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),Mt(S*A[0],S*A[1],r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}if((a===f.WEB_MERCATOR||a===f.PLATE_CARREE)&&(o===f.WGS84||o===f.CGCS2000&&a===f.PLATE_CARREE||o===f.SPHERICAL_ECEF||o===f.WEB_MERCATOR)){const s=b[o][f.LON_LAT],i=b[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),o===f.SPHERICAL_ECEF?ye(S*A[0],S*A[1],r):Wt(r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}return!1}function lt(t){return t===f.SPHERICAL_ECEF||t===f.SPHERICAL_MARS_PCPF||t===f.SPHERICAL_MOON_PCPF}const S=yt(1),A=w(),P=w();let W=class extends Gt($t){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};h([zt({georeferenced:"georeferenced"},{readOnly:!0})],W.prototype,"type",void 0),W=h([ht("esri.geometry.support.MeshGeoreferencedVertexSpace")],W);const $e=W;function R(t=Rt){return[t[0],t[1],t[2],t[3]]}function G(t,e,r=R()){return Yt(r,t),r[3]=e,r}function ct(t,e,r=R()){return D(L,t,K(t)),D(ut,e,K(e)),pe(L,ut,L),me(r,kt(ge(r,L)))}function Ze(t,e,r,n=R()){return G(Ht,t,j),G(Ut,e,ft),G(qt,r,pt),ct(j,ft,j),ct(j,pt,n),n}function Je(t){return t}function he(t){return t[3]}function K(t){return yt(t[3])}function me(t,e){return t[3]=e,t}const Rt=[0,0,1,0],L=J(),ut=J();R();const j=R(),ft=R(),pt=R();var Q;let $=Q=class extends $t{constructor(t){super(t),this.translation=w(),this.rotationAxis=Dt(Rt),this.rotationAngle=0,this.scale=mt(1,1,1)}get rotation(){return G(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=N(t),this.rotationAngle=he(t)}get localMatrix(){const t=E();return D(gt,this.rotation,K(this.rotation)),Kt(t,gt,this.translation,this.scale),t}get localMatrixInverse(){return At(E(),this.localMatrix)}applyLocal(t,e){return rt(e,t,this.localMatrix)}applyLocalInverse(t,e){return rt(e,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Qt(this.localMatrix,t.localMatrix)}clone(){const t={translation:N(this.translation),rotationAxis:N(this.rotationAxis),rotationAngle:this.rotationAngle,scale:N(this.scale)};return new Q(t)}};h([d({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"translation",void 0),h([d({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAxis",void 0),h([d({type:Number,nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAngle",void 0),h([d({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"scale",void 0),h([d()],$.prototype,"rotation",null),h([d()],$.prototype,"localMatrix",null),h([d()],$.prototype,"localMatrixInverse",null),$=Q=h([ht("esri.geometry.support.MeshTransform")],$);const gt=J(),Ae=$;function _t(t,e){return t.isGeographic||t.isWebMercator&&((e==null?void 0:e.geographic)??!0)}function Xe(t,e,r){const n=!t.isGeoreferenced;(r==null?void 0:r.geographic)!=null&&r.geographic!==n&&Pt.getLogger(e).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const q=Pt.getLogger("esri.geometry.support.meshUtils.normalProjection");function Pe(t,e,r,n,o){return k(n)?(Y(m.TO_PCPF,F.fromTypedArray(t),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o)),o):(q.error("Cannot convert spatial reference to PCPF"),o)}function Fe(t,e,r,n,o){return k(n)?(Y(m.FROM_PCPF,F.fromTypedArray(t),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o)),o):(q.error("Cannot convert to spatial reference from PCPF"),o)}function Te(t,e,r){return z(t,e,0,r,O(e),0,t.length/3),r}function de(t,e,r){return z(t,O(r),0,e,r,0,t.length/3),e}function Me(t,e,r){return U(u,r),_(e,t,u),Ft(u)||dt(e,e),e}function Re(t,e,r){if(U(u,r),_(e,t,u,4),Ft(u)||dt(e,e,4),t!==e)for(let n=3;n<t.length;n+=4)e[n]=t[n];return e}function _e(t,e,r,n,o){if(!k(n))return q.error("Cannot convert spatial reference to PCPF"),o;Y(m.TO_PCPF,F.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Ce(t,e,r,n,o){if(!k(n))return q.error("Cannot convert to spatial reference from PCPF"),o;Y(m.FROM_PCPF,F.fromTypedArray(t,16),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Y(t,e,r,n,o,a){if(!e)return;const s=r.count,i=O(o);if(Ct(o))for(let c=0;c<s;c++)n.getVec(c,B),e.getVec(c,y),H(i,B,I,i),nt(u,I),t===m.FROM_PCPF&&ot(u,u),at(y,y,u),a.setVec(c,y);else for(let c=0;c<s;c++){n.getVec(c,B),e.getVec(c,y),H(i,B,I,i),nt(u,I);const l=Zt(r.get(c,1));let p=Math.cos(l);t===m.TO_PCPF&&(p=1/p),u[0]*=p,u[1]*=p,u[2]*=p,u[3]*=p,u[4]*=p,u[5]*=p,t===m.FROM_PCPF&&ot(u,u),at(y,y,u),Jt(y,y),a.setVec(c,y)}return a}function k(t){return Ct(t)||xe(t)}function Ct(t){return t.isWGS84||Xt(t)||te(t)||ee(t)}function xe(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const B=w(),y=w(),I=E(),u=Tt();function X(t,e,r){return _t(e.spatialReference,r)?be(t,e,r):Oe(t,e,r)}function xt(t,e=V){const{position:r,normal:n,tangent:o}=t;return{position:v(new Float64Array(r.length),r,e),normal:n!=null?Me(n,new Float32Array(n.length),e):null,tangent:o!=null?Re(o,new Float32Array(o.length),e):null}}function Et(t,e,r,n){const{position:o,normal:a,tangent:s}=t;return e.isRelative?X(xt(t,r==null?void 0:r.localMatrix),e.getOriginPoint(n),{geographic:!e.isGeoreferenced}):{position:o,normal:a,tangent:s}}function Ee(t,e,r){if(r!=null&&r.useTransform){const{position:n,normal:o,tangent:a}=t,{x:s,y:i,z:c}=e,l=mt(s,i,c??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:r.geographic??1?new ce({origin:l}):new fe({origin:l}),transform:new Ae}}return{vertexAttributes:X(t,e,r),vertexSpace:new $e,transform:null}}function Z(t,e,r){return _t(e.spatialReference,r)?je(t,e,r):vt(t,e,r)}function ve(t,e,r,n,o){if(!e.isRelative)return Z(t,n,o);const{spatialReference:a}=n,s=Et(t,e,r,a);return n.equals(e.getOriginPoint(a))?vt(s,n,o):Z(s,n,o)}function we({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:s}){const i=r.isRelative?r.origin:it,c=r.isRelative?(e==null?void 0:e.localMatrix)??V:V;if(r.isGeoreferenced){const g=a??st(t.length);if(re(c,V)?ue(g,t):v(g,t,c),!ne(i,it)){const[bt,Nt,St]=i;for(let x=0;x<g.length;x+=3)g[x]+=bt,g[x+1]+=Nt,g[x+2]+=St}return z(g,n,0,g,o,0,g.length/3),g}let l=n;const p=O(n);l=o.isWebMercator&&s||!oe(n,p)?l:p,H(n,i,M,l),ae(M,M,c);const C=a??st(t.length);return v(C,t,M),z(C,l,0,C,o,0,C.length/3),C}function Oe(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*c+a,n[l+1]=o[l+1]*c+s,n[l+2]=o[l+2]*c+i;return{position:n,normal:t.normal,tangent:t.tangent}}function be(t,e,r){const n=e.spatialReference,o=wt(e,r,M),a=new Float64Array(t.position.length),s=Ne(t.position,o,n,a),i=U(Ot,o);return{position:s,normal:Se(s,a,t.normal,i,n),tangent:Le(s,a,t.tangent,i,n)}}function Ne(t,e,r,n){v(n,t,e);const o=new Float64Array(t.length);return de(n,o,r)}function Se(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);return _(a,r,n),Fe(a,t,e,o,a),a}function Le(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);_(a,r,n,4);for(let s=3;s<a.length;s+=4)a[s]=r[s];return Ce(a,t,e,o,a),a}function vt(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/c,n[l+1]=(o[l+1]-s)/c,n[l+2]=(o[l+2]-i)/c;return{position:n,normal:t.normal,tangent:t.tangent}}function je(t,e,r){const n=e.spatialReference;wt(e,r,M);const o=At(We,M),a=new Float64Array(t.position.length),s=Be(t.position,n,o,a),i=U(Ot,o);return{position:s,normal:Ie(t.normal,t.position,a,n,i),tangent:Ve(t.tangent,t.position,a,n,i)}}function wt(t,e,r){H(t.spatialReference,[t.x,t.y,t.z??0],r,O(t.spatialReference));const n=tt(e?e.unit:null,t.spatialReference);return ie(r,r,[n,n,n]),r}function Be(t,e,r,n){const o=Te(t,e,n),a=new Float64Array(o.length);return v(a,o,r),a}function Ie(t,e,r,n,o){if(t==null)return null;const a=Pe(t,e,r,n,new Float32Array(t.length));return _(a,a,o),a}function Ve(t,e,r,n,o){if(t==null)return null;const a=_e(t,e,r,n,new Float32Array(t.length));return _(a,a,o,4),a}function tt(t,e){if(t==null)return 1;const r=se(e);return 1/le(r,"meters",t)}const M=E(),We=E(),Ot=Tt(),tr=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:xt,georeference:X,georeferenceApplyTransform:Et,georeferenceByTransform:Ee,project:we,ungeoreference:Z,ungeoreferenceByTransform:ve},Symbol.toStringTag,{value:"Module"}));export{Ee as B,Z as D,ve as E,we as I,H as L,Ae as N,de as O,_e as R,X as U,xt as V,Fe as _,R as a,ct as b,tr as c,Ze as g,Te as h,Pe as j,Je as l,Xe as o,$e as p,Et as q,_t as r,Ce as v,K as w};
