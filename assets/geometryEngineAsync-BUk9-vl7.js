import{cA as l,bJ as w,d5 as h}from"./index-Cek7aMWl.js";function n(e){var t;return Array.isArray(e)?(t=e[0])==null?void 0:t.spatialReference:e==null?void 0:e.spatialReference}function p(e){return e&&(Array.isArray(e)?e.map(p):e.toJSON?e.toJSON():e)}function c(e){return Array.isArray(e)?e.map(t=>w(t)):w(e)}function S(e,t){let r;return Array.isArray(e)?r=e:(r=[],r.push(e),t!=null&&r.push(t)),r}let f;async function d(){return f||(f=h("geometryEngineWorker",{strategy:"distributed"})),f}async function a(e,t){return(await d()).invoke("executeGEOperation",{operation:e,parameters:p(t)})}async function m(e,t){const r=await d();return Promise.all(r.broadcast("executeGEOperation",{operation:e,parameters:p(t)}))}function A(e){return a("extendedSpatialReferenceInfo",[e])}async function R(e,t){return c(await a("clip",[n(e),e,t]))}async function O(e,t){return c(await a("cut",[n(e),e,t]))}function J(e,t){return a("contains",[n(e),e,t])}function D(e,t){return a("crosses",[n(e),e,t])}function N(e,t,r){return a("distance",[n(e),e,t,r])}function L(e,t){return a("equals",[n(e),e,t])}function T(e,t){return a("intersects",[n(e),e,t])}function V(e,t){return a("touches",[n(e),e,t])}function b(e,t){return a("within",[n(e),e,t])}function v(e,t){return a("disjoint",[n(e),e,t])}function E(e,t){return a("overlaps",[n(e),e,t])}function z(e,t,r){return a("relate",[n(e),e,t,r])}function H(e){return a("isSimple",[n(e),e])}async function I(e){return c(await a("simplify",[n(e),e]))}async function P(e,t=!1){return c(await a("convexHull",[n(e),e,t]))}async function j(e,t){return c(await a("difference",[n(e),e,t]))}async function k(e,t){return c(await a("symmetricDifference",[n(e),e,t]))}async function q(e,t){return c(await a("intersect",[n(e),e,t]))}async function B(e,t=null){const r=S(e,t);return c(await a("union",[n(r),r]))}async function C(e,t,r,i,s,u){return c(await a("offset",[n(e),e,t,r,i,s,u]))}async function G(e,t,r,i=!1){const s=[n(e),e,t,r,i];return c(await a("buffer",s))}async function $(e,t,r,i,s,u){const g=[n(e),e,t,r,i,s,u];return c(await a("geodesicBuffer",g))}async function W(e,t,r=!0){const i=await a("nearestCoordinate",[n(e),e,t,r]);return{...i,coordinate:l.fromJSON(i.coordinate)}}async function F(e,t){const r=await a("nearestVertex",[n(e),e,t]);return{...r,coordinate:l.fromJSON(r.coordinate)}}async function K(e,t,r,i){return(await a("nearestVertices",[n(e),e,t,r,i])).map(s=>({...s,coordinate:l.fromJSON(s.coordinate)}))}function y(e){var t;return"xmin"in e?e.center:"x"in e?e:(t=e.extent)==null?void 0:t.center}async function M(e,t,r){if(e==null)throw new o;const i=e.spatialReference;if((r=r??y(e))==null)throw new o;const s=e.constructor.fromJSON(await a("rotate",[i,e,t,r]));return s.spatialReference=i,s}async function Q(e,t){if(e==null)throw new o;const r=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await a("flipHorizontal",[r,e,t]));return i.spatialReference=r,i}async function U(e,t){if(e==null)throw new o;const r=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await a("flipVertical",[r,e,t]));return i.spatialReference=r,i}async function X(e,t,r,i){return c(await a("generalize",[n(e),e,t,r,i]))}async function Y(e,t,r){return c(await a("densify",[n(e),e,t,r]))}async function Z(e,t,r,i=0){return c(await a("geodesicDensify",[n(e),e,t,r,i]))}function _(e,t){return a("planarArea",[n(e),e,t])}function ee(e,t){return a("planarLength",[n(e),e,t])}function te(e,t,r){return a("geodesicArea",[n(e),e,t,r])}function re(e,t,r){return a("geodesicLength",[n(e),e,t,r])}async function ae(e,t){return c(await a("intersectLinesToPoints",[n(e),e,t]))}async function ne(e,t){await m("changeDefaultSpatialReferenceTolerance",[e,t])}async function ie(e){await m("clearDefaultSpatialReferenceTolerance",[e])}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{G as buffer,ne as changeDefaultSpatialReferenceTolerance,ie as clearDefaultSpatialReferenceTolerance,R as clip,J as contains,P as convexHull,D as crosses,O as cut,Y as densify,j as difference,v as disjoint,N as distance,L as equals,A as extendedSpatialReferenceInfo,Q as flipHorizontal,U as flipVertical,X as generalize,te as geodesicArea,$ as geodesicBuffer,Z as geodesicDensify,re as geodesicLength,q as intersect,ae as intersectLinesToPoints,T as intersects,H as isSimple,W as nearestCoordinate,F as nearestVertex,K as nearestVertices,C as offset,E as overlaps,_ as planarArea,ee as planarLength,z as relate,M as rotate,I as simplify,k as symmetricDifference,V as touches,B as union,b as within};
