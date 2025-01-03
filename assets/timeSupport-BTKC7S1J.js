const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-DoX2EDjQ.js","./index-BdDnxAOC.js","./index-BvbKYc24.css","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{mt as A,mu as q,cs as g,cj as S,mv as C,mw as x,_ as F,B as G,fN as w,fH as O}from"./index-BdDnxAOC.js";import{I as j,P as I,$ as U,H as V,U as D,a as v,h as Z,K as M}from"./featureConversionUtils-BCh95FQm.js";import{s as R}from"./OptimizedGeometry-BF8iz5FO.js";import{x as H}from"./queryUtils-DQi3qLST.js";const T=new R,J=new R,$=new R,f={esriGeometryPoint:I,esriGeometryPolyline:U,esriGeometryPolygon:V,esriGeometryMultipoint:D};function ue(e,t,n,i=e.hasZ,l=e.hasM){if(t==null)return null;const r=e.hasZ&&i,s=e.hasM&&l;if(n){const o=v($,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,l);return I(o,r,s)}return I(t,r,s)}function d(e,t,n,i,l,r,s=t,o=n){var y,m,h;const u=t&&s,a=n&&o,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(l){let p=Z(J,c,t,n,e,l,s,o);return r&&(p=v($,p,u,a,e,r)),((y=f[e])==null?void 0:y.call(f,p,u,a))??null}if(r){const p=v($,c,t,n,e,r,s,o);return((m=f[e])==null?void 0:m.call(f,p,u,a))??null}return j(T,c,t,n,s,o),((h=f[e])==null?void 0:h.call(f,T,u,a))??null}function ae(e){return e&&E in e?JSON.parse(JSON.stringify(e,W)):e}const E="_geVersion",W=(e,t)=>e!==E?t:void 0;function Y(e){return e==="mesh"?A:q(e)}function _(e,t){return e?t?4:3:t?3:2}function B(e,t,n,i){return b(e,t,n,i.coords[0],i.coords[1])}function K(e,t,n,i,l,r){const s=_(l,r),{coords:o,lengths:u}=i;if(!u)return!1;for(let a=0,c=0;a<u.length;a++,c+=s)if(!b(e,t,n,o[c],o[c+1]))return!1;return!0}function b(e,t,n,i,l){if(!e)return!1;const r=_(t,n),{coords:s,lengths:o}=e;let u=!1,a=0;for(const c of o)u=L(u,s,r,a,c,i,l),a+=c*r;return u}function L(e,t,n,i,l,r,s){let o=e,u=i;for(let a=i,c=i+l*n;a<c;a+=n){u=a+n,u===c&&(u=i);const y=t[a],m=t[a+1],h=t[u],p=t[u+1];(m<s&&p>=s||p<s&&m>=s)&&y+(s-m)/(p-m)*(h-y)<r&&(o=!o)}return o}const P="unsupported-query",k={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},N={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function z(e){return e!=null&&N.spatialRelationship[e]===!0}function Q(e){return e!=null&&N.queryGeometry[O(e)]===!0}function X(e){return e!=null&&N.layerGeometry[e]===!0}function ee(){return F(()=>import("./geometryEngineJSON-DoX2EDjQ.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]),import.meta.url)}function ce(e,t,n,i,l){if(g(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const r=M(new R,t,!1,!1);return Promise.resolve(s=>B(r,!1,!1,s))}if(g(t)&&n==="esriGeometryMultipoint"){const r=M(new R,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(s=>K(r,!1,!1,s,i,l))}if(S(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(r=>C(t,d(n,i,l,r)));if(S(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(r=>x(t,d(n,i,l,r)));if(S(t)&&e==="esriSpatialRelIntersects"){const r=Y(n);return Promise.resolve(s=>r(t,d(n,i,l,s)))}return ee().then(r=>{const s=r[k[e]].bind(null,t.spatialReference,t);return o=>s(d(n,i,l,o))})}async function pe(e,t,n){var r;const{spatialRel:i,geometry:l}=e;if(l){if(!z(i))throw new G(P,"Unsupported query spatial relationship",{query:e});if(w(l.spatialReference)&&w(n)){if(!Q(l))throw new G(P,"Unsupported query geometry type",{query:e});if(!X(t))throw new G(P,"Unsupported layer geometry type",{query:e});if(e.outSR)return H((r=e.geometry)==null?void 0:r.spatialReference,e.outSR)}}}function fe(e){if(S(e))return!0;if(g(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function me(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:l}=e;let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&l)await t.forEach(o=>{const u=n.getAttribute(o,i),a=n.getAttribute(o,l);u==null||isNaN(u)||(r=Math.min(r,u)),a==null||isNaN(a)||(s=Math.max(s,a))});else{const o=i||l;await t.forEach(u=>{const a=n.getAttribute(u,o);a==null||isNaN(a)||(r=Math.min(r,a),s=Math.max(s,a))})}return{start:r,end:s}}function ye(e,t,n){var u;if(!t||!e)return null;const{startTimeField:i,endTimeField:l}=e;if(!i&&!l)return null;const{start:r,end:s}=t;if(r===null&&s===null)return null;if(r===void 0&&s===void 0)return ne();const o=((u=n.getAttributeAsTimestamp)==null?void 0:u.bind(n))??n.getAttribute.bind(n);return i&&l?te(o,i,l,r,s):re(o,i||l,r,s)}function te(e,t,n,i,l){return i!=null&&l!=null?r=>{const s=e(r,t),o=e(r,n);return(s==null||s<=l)&&(o==null||o>=i)}:i!=null?r=>{const s=e(r,n);return s==null||s>=i}:l!=null?r=>{const s=e(r,t);return s==null||s<=l}:void 0}function re(e,t,n,i){return n!=null&&i!=null&&n===i?l=>e(l,t)===n:n!=null&&i!=null?l=>{const r=e(l,t);return r!=null&&r>=n&&r<=i}:n!=null?l=>{const r=e(l,t);return r!=null&&r>=n}:i!=null?l=>{const r=e(l,t);return r!=null&&r<=i}:void 0}function ne(){return()=>!1}export{fe as I,ce as P,d as a,ae as h,me as n,ye as t,pe as v,ue as y};
