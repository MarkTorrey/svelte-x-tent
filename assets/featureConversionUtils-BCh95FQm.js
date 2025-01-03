import{cr as or,cs as er,ct as tr,cu as sr,B as x,V as ur,cv as cr,cw as lr,b3 as ir,cx as ar}from"./index-BdDnxAOC.js";import{e as F}from"./OptimizedFeature-6cJ-QFG5.js";import{e as fr}from"./OptimizedFeatureSet-Blu9Ckm7.js";import{s as T}from"./OptimizedGeometry-BF8iz5FO.js";function p(r,n){return r?n?4:3:n?3:2}const v=()=>ur.getLogger("esri.layers.graphics.featureConversionUtils"),B={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},hr=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t},A=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t,r[o+2]=n[e+2]},dr=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t,r[o+2]=n[e+3]},mr=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t,r[o+2]=n[e+2],r[o+3]=n[e+3]};function q(r,n,o,e){if(r){if(o)return n&&e?mr:A;if(n&&e)return dr}else if(n&&e)return A;return hr}function $({scale:r,translate:n},o){return Math.round((o-n[0])/r[0])}function z({scale:r,translate:n},o){return Math.round((n[1]-o)/r[1])}function E({scale:r,translate:n},o,e){return o*r[e]+n[e]}function Ur(r,n,o){return r?n?o?R(r):U(r):o?V(r):j(r):null}function j(r){const n=r.coords;return{x:n[0],y:n[1]}}function D(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r}function U(r){const n=r.coords;return{x:n[0],y:n[1],z:n[2]}}function gr(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r.coords[2]=n.z,r}function V(r){const n=r.coords;return{x:n[0],y:n[1],m:n[2]}}function yr(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r.coords[2]=n.m,r}function R(r){const n=r.coords;return{x:n[0],y:n[1],z:n[2],m:n[3]}}function pr(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r.coords[2]=n.z,r.coords[3]=n.m,r}function br(r,n,o,e){let s=j;o&&e?s=R:o?s=U:e&&(s=V);for(const t of n){const{geometry:u,attributes:c}=t,i=u!=null?s(u):null;r.push({attributes:c,geometry:i})}return r}function S(r,n){return r&&n?pr:r?gr:n?yr:D}function wr(r,n,o,e,s){const t=S(o,e);for(const{geometry:u,attributes:c}of n){const i=u!=null?t(new T,u):null;r.push(new F(i,c,null,s?c[s]:void 0))}return r}function Ir(r,n,o=S(n.z!=null,n.m!=null)){return o(r,n)}function Mr(r,n,o,e){for(const{geometry:s,attributes:t}of n)r.push({attributes:t,geometry:s!=null?H(s,o,e):null});return r}function H(r,n,o){if(r==null)return null;const e=p(n,o),s=[];for(let t=0;t<r.coords.length;t+=e){const u=[];for(let c=0;c<e;c++)u.push(r.coords[t+c]);s.push(u)}return n?o?{points:s,hasZ:n,hasM:o}:{points:s,hasZ:n}:o?{points:s,hasM:o}:{points:s}}function Gr(r,n,o,e,s){const t=p(o,e);for(const{geometry:u,attributes:c}of n){const i=u!=null?J(new T,u,t):null;r.push(new F(i,c,null,s?c[s]:void 0))}return r}function J(r,n,o=p(n.hasZ,n.hasM)){r.lengths[0]=n.points.length;const e=r.coords;let s=0;for(const t of n.points)for(let u=0;u<o;u++)e[s++]=t[u];return r}function Nr(r,n,o,e){for(const{geometry:s,attributes:t}of n)r.push({attributes:t,geometry:s!=null?K(s,o,e):null});return r}function K(r,n,o){if(!r)return null;const e=p(n,o),{coords:s,lengths:t}=r,u=[];let c=0;for(const i of t){const l=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[c++]);l.push(f)}u.push(l)}return n?o?{paths:u,hasZ:n,hasM:o}:{paths:u,hasZ:n}:o?{paths:u,hasM:o}:{paths:u}}function Tr(r,n,o,e,s){const t=p(o,e);for(const{geometry:u,attributes:c,centroid:i}of n){const l=u!=null?Q(new T,u,t):null,a=i!=null?Ir(new T,i):null;r.push(new F(l,c,a,s?c[s]:void 0))}return r}function Q(r,n,o=p(n.hasZ,n.hasM)){const{lengths:e,coords:s}=r;let t=0;for(const u of n.paths){for(const c of u)for(let i=0;i<o;i++)s[t++]=c[i];e.push(u.length)}return r}function Pr(r,n,o,e){for(const{geometry:s,attributes:t,centroid:u}of n){const c=s!=null?W(s,o,e):null;if(u!=null){const i=j(u);r.push({attributes:t,centroid:i,geometry:c})}else r.push({attributes:t,geometry:c})}return r}function W(r,n,o){if(!r)return null;const e=p(n,o),{coords:s,lengths:t}=r,u=[];let c=0;for(const i of t){const l=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[c++]);l.push(f)}u.push(l)}return n?o?{rings:u,hasZ:n,hasM:o}:{rings:u,hasZ:n}:o?{rings:u,hasM:o}:{rings:u}}function Fr(r,n,o,e,s){for(const{geometry:t,centroid:u,attributes:c}of n){const i=t!=null?X(new T,t,o,e):null,l=s?c[s]:void 0;u!=null?r.push(new F(i,c,D(new T,u),l)):r.push(new F(i,c,null,l))}return r}function X(r,n,o=n.hasZ,e=n.hasM){return Zr(r,n.rings,o,e)}function Zr(r,n,o,e){const s=p(o,e),{lengths:t,coords:u}=r;let c=0;N(r);for(const i of n){for(const l of i)for(let a=0;a<s;a++)u[c++]=l[a];t.push(i.length)}return r}const P=[],Z=[];function Vr(r,n,o,e,s){P[0]=r;const[t]=rr(Z,P,n,o,e,s);return G(P),G(Z),t}function rr(r,n,o,e,s,t){if(G(r),!o){for(const u of n){const c=t?u.attributes[t]:void 0;r.push(new F(null,u.attributes,null,c))}return r}switch(o){case"esriGeometryPoint":return wr(r,n,e,s,t);case"esriGeometryMultipoint":return Gr(r,n,e,s,t);case"esriGeometryPolyline":return Tr(r,n,e,s,t);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return Fr(r,n,e,s,t);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`)),G(r)}return r}function Rr(r,n,o,e){Z[0]=r,nr(P,Z,n,o,e);const s=P[0];return G(P),G(Z),s}function Sr(r,n,o){if(r==null)return null;const e=new T;return"hasZ"in r&&n==null&&(n=r.hasZ),"hasM"in r&&o==null&&(o=r.hasM),or(r)?S(n??r.z!=null,o??r.m!=null)(e,r):er(r)?X(e,r,n,o):tr(r)?Q(e,r,p(n,o)):sr(r)?J(e,r,p(n,o)):void v().error("convertFromGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${r}'`))}function xr(r,n,o,e){const s=r&&("coords"in r?r:r.geometry);if(s==null)return null;switch(n){case"esriGeometryPoint":{let t=j;return o&&e?t=R:o?t=U:e&&(t=V),t(s)}case"esriGeometryMultipoint":return H(s,o,e);case"esriGeometryPolyline":return K(s,o,e);case"esriGeometryPolygon":return W(s,o,e);default:return v().error("convertToGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`)),null}}function vr(r,n){for(const o of n)r.push({attributes:o.attributes});return r}function nr(r,n,o,e,s){if(G(r),o==null)return vr(r,n);switch(o){case"esriGeometryPoint":return br(r,n,e,s);case"esriGeometryMultipoint":return Mr(r,n,e,s);case"esriGeometryPolyline":return Nr(r,n,e,s);case"esriGeometryPolygon":return Pr(r,n,e,s);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`))}return r}function Yr(r){const{objectIdFieldName:n,spatialReference:o,transform:e,fields:s,hasM:t,hasZ:u,features:c,geometryType:i,exceededTransferLimit:l,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=r,d={features:nr([],c,i,u,t),fields:s,geometryType:i,objectIdFieldName:n,spatialReference:o,uniqueIdField:a,queryGeometry:xr(f,h,!1,!1)};return e&&(d.transform=e),l&&(d.exceededTransferLimit=l),t&&(d.hasM=t),u&&(d.hasZ=u),d}function _r(r,n){const o=new fr,{hasM:e,hasZ:s,features:t,objectIdFieldName:u,spatialReference:c,geometryType:i,exceededTransferLimit:l,transform:a,fields:f}=r;return f&&(o.fields=f),o.geometryType=i??null,o.objectIdFieldName=u??n??null,o.spatialReference=c??null,o.objectIdFieldName?(t&&rr(o.features,t,i,s,e,o.objectIdFieldName),l&&(o.exceededTransferLimit=l),e&&(o.hasM=e),s&&(o.hasZ=s),a&&(o.transform=a),o):(v().error(new x("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function Ar(r){const{transform:n,features:o,hasM:e,hasZ:s}=r;if(!n)return r;for(const t of o)t.geometry!=null&&O(t.geometry,t.geometry,e,s,n),t.centroid!=null&&O(t.centroid,t.centroid,e,s,n);return r.transform=null,r}function Cr(r,n){const{geometryType:o,features:e,hasM:s,hasZ:t}=n;if(!r)return n;for(let u=0;u<e.length;u++){const c=e[u],i=c.weakClone();i.geometry=new T,C(i.geometry,c.geometry,s,t,o,r),c.centroid&&(i.centroid=new T,C(i.centroid,c.centroid,s,t,"esriGeometryPoint",r)),e[u]=i}return n.transform=r,n}function C(r,n,o,e,s,t,u=o,c=e){if(N(r),!(n!=null&&n.coords.length))return null;const i=B[s],{coords:l,lengths:a}=n,f=p(o,e),h=p(o&&u,e&&c),d=q(o,e,u,c);if(!a.length)return d(r.coords,l,0,0,$(t,l[0]),z(t,l[1])),N(r,f,0),r;let m,y,w,I,b=0,g=0,M=g;for(const Y of a){if(Y<i)continue;let k=0;g=M,w=m=$(t,l[b]),I=y=z(t,l[b+1]),d(r.coords,l,g,b,w,I),k++,b+=f,g+=h;for(let _=1;_<Y;_++,b+=f)w=$(t,l[b]),I=z(t,l[b+1]),w===m&&I===y||(d(r.coords,l,g,b,w-m,I-y),g+=h,k++,m=w,y=I);k>=i&&(r.lengths.push(k),M=g)}return G(r.coords,M),r.coords.length?r:null}function Or(r,n,o,e,s,t,u=o,c=e){if(N(r),!(n!=null&&n.coords.length))return null;const i=B[s],{coords:l,lengths:a}=n,f=p(o,e),h=p(o&&u,e&&c),d=q(o,e,u,c);if(!a.length)return d(r.coords,l,0,0,l[0],l[1]),N(r,f,0),r;let m=0;const y=t*t;for(const w of a){if(w<i){m+=w*f;continue}const I=r.coords.length/h,b=m,g=m+(w-1)*f;d(r.coords,l,r.coords.length,b,l[b],l[b+1]),L(r.coords,l,f,y,d,b,g),d(r.coords,l,r.coords.length,g,l[g],l[g+1]);const M=r.coords.length/h-I;M>=i?r.lengths.push(M):G(r.coords,I*h),m+=w*f}return r.coords.length?r:null}function kr(r,n,o,e){const s=r[n],t=r[n+1],u=r[o],c=r[o+1],i=r[e],l=r[e+1];let a=u,f=c,h=i-a,d=l-f;if(h!==0||d!==0){const m=((s-a)*h+(t-f)*d)/(h*h+d*d);m>1?(a=i,f=l):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=t-f,h*h+d*d}function L(r,n,o,e,s,t,u){let c,i=e,l=0;for(let a=t+o;a<u;a+=o)c=kr(n,a,t,u),c>i&&(l=a,i=c);i>e&&(l-t>o&&L(r,n,o,e,s,t,l),s(r,n,r.length,l,n[l],n[l+1]),u-l>o&&L(r,n,o,e,s,l,u))}function Br(r,n,o,e){var l;if(!((l=n==null?void 0:n.coords)!=null&&l.length))return null;const s=p(o,e);let t=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(n&&n.coords){const a=n.coords;for(let f=0;f<a.length;f+=s){const h=a[f],d=a[f+1];t=Math.min(t,h),c=Math.max(c,h),u=Math.min(u,d),i=Math.max(i,d)}}return cr(r)?lr(r,t,u,c,i):ir(t,u,c,i,r),r}function O(r,n,o,e,s){const{coords:t,lengths:u}=n,c=p(o,e);if(!t.length)return r!==n&&N(r),r;ar(s);const{originPosition:i,scale:l,translate:a}=s,f=$r;f.originPosition=i;const h=f.scale;h[0]=l[0]??1,h[1]=-(l[1]??1),h[2]=l[2]??1,h[3]=l[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<c;++y)r.coords[y]=E(f,t[y],y);return r!==n&&N(r,c,0),r}let m=0;for(let y=0;y<u.length;y++){const w=u[y];r.lengths[y]=w;for(let g=0;g<c;++g)r.coords[m+g]=E(f,t[m+g],g);let I=r.coords[m],b=r.coords[m+1];m+=c;for(let g=1;g<w;g++,m+=c){I+=t[m]*h[0],b+=t[m+1]*h[1],r.coords[m]=I,r.coords[m+1]=b;for(let M=2;M<c;++M)r.coords[m+M]=E(f,t[m+M],M)}}return r!==n&&N(r,t.length,u.length),r}function Dr(r,n,o,e,s,t){if(N(r),r.lengths.push(...n.lengths),o===s&&e===t)for(let u=0;u<n.coords.length;u++)r.coords.push(n.coords[u]);else{const u=p(o,e),c=q(o,e,s,t),i=n.coords;for(let l=0;l<i.length;l+=u)c(r.coords,i,r.coords.length,l,i[l],i[l+1])}return r}function jr(r,n,o,e){let s=0,t=r[e*n],u=r[e*(n+1)];for(let c=1;c<o;c++){const i=t+r[e*(n+c)],l=u+r[e*(n+c)+1],a=(i-t)*(l+u);t=i,u=l,s+=a}return .5*s}function Hr(r,n){const{coords:o,lengths:e}=r;let s=0,t=0;for(let u=0;u<e.length;u++){const c=e[u];t+=jr(o,s,c,n),s+=c}return Math.abs(t)}function N(r,n=0,o=0){G(r.lengths,o),G(r.coords,n)}function G(r,n=0){r.length!==n&&(r.length=n)}const $r={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{K as $,W as H,Dr as I,X as K,$ as N,Ir as O,Ur as P,Zr as Q,H as U,C as a,Hr as b,_r as c,rr as e,Cr as f,Br as g,Or as h,Ar as i,Yr as l,Rr as n,Sr as o,O as p,xr as r,Vr as t,z as w};