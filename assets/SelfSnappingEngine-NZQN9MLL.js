import{aw as P,iX as f,nC as _,i$ as x,j2 as v,dY as B,nD as G,as as p,nE as $,hg as F,mi as H,fu as K,nF as R,nG as Q,nH as b,nI as z,nJ as A,nK as Y,nL as W,nM as Z,aA as C,nN as M,hB as J,hj as N,nO as ee,az as I,nP as S,ar as U,nQ as te,nR as se,nS as ie,jp as ne,iY as re,i_ as oe,iZ as ae,aR as he,b4 as de,nT as le,nU as ce,nV as pe,aN as ge,a0 as fe,iV as ue,hs as xe,W as L,X as q,Y as ve}from"./index-BdDnxAOC.js";import{u as X}from"./geodesicLengthMeasurementUtils-DRlq-BQ9.js";class k{constructor(s,e){this.view=s,this.options=e,this.squaredShortLineThreshold=P.shortLineThreshold*P.shortLineThreshold}snap(s,e){return e.vertexHandle!=null?e.vertexHandle.type!=="vertex"?[]:this.snapExistingVertex(s,e):this.snapNewVertex(s,e)}edgeExceedsShortLineThreshold(s,e){return this.exceedsShortLineThreshold(f(s.leftVertex.pos,this.view,e),f(s.rightVertex.pos,this.view,e),e)}exceedsShortLineThreshold(s,e,{spatialReference:t}){return this.squaredShortLineThreshold===0||_(x(e,t,v,this.view),x(s,t,v,this.view))>this.squaredShortLineThreshold}isVertical(s,e,{spatialReference:t}){const i=B(t);return G(p(s),p(e))*i<P.verticalLineThresholdMeters}squaredProximityThreshold(s){return s==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const{distance:s,touchSensitivityMultiplier:e}=this.options,t=s*e;return t*t}}class Ee extends k{snapNewVertex(s,e){const t=e.editGeometryOperations.data.components[0],i=t.edges.length,n=[];if(i<1)return n;const{spatialReference:r}=e,a=x(s,r,v,this.view),{view:o}=this,h=t.edges[i-1];let d=h;do{if(this.edgeExceedsShortLineThreshold(d,e)){const g=$(d,o,e);this._processCandidateProposal(g.left,g.right,s,a,e,n)}d=d.leftVertex.leftEdge}while(d&&d!==h);return n}snapExistingVertex(s,e){const t=[],i=e.vertexHandle,n=i.component;if(n.edges.length<2)return t;const{view:r}=this,{spatialReference:a}=e,o=x(s,a,v,r),h=i.leftEdge,d=i.rightEdge;h&&d&&this.edgeExceedsShortLineThreshold(h,e)&&this.edgeExceedsShortLineThreshold(d,e)&&this._processCandidateProposal(f(h.leftVertex.pos,r,e),f(d.rightVertex.pos,r,e),s,o,e,t);const g=n.edges[0];let c=g;do{if(c!==i.leftEdge&&c!==i.rightEdge&&this.edgeExceedsShortLineThreshold(c,e)){const u=$(c,r,e);this._processCandidateProposal(u.left,u.right,s,o,e,t)}c=c.rightVertex.rightEdge}while(c&&c!==g);return t}_processCandidateProposal(s,e,t,i,n,r){var g;const{spatialReference:a,pointer:o}=n,h=C();we(h,s,e,t,n);const d=F(H(h));_(i,x(d,a,v,this.view))<this.squaredProximityThreshold(o)&&r.push(new K({lineStart:s,lineEnd:e,targetPoint:d,isDraped:((g=n.elevationInfo)==null?void 0:g.mode)==="on-the-ground"}))}}function we(l,s,e,t,i){Ve(l,s,e,t,i)||me(l,t,s,e)}function Ve(l,s,e,t,{spatialReference:i}){const n=R(s,e,i,i);if(n==null)return!1;const r=R(e,t,i,i);if(r==null)return!1;const a=X(e,t,i);if(a==null)return!1;const o=Math.abs(Q.shortestSignedDiff(n,r))>Math.PI/2?b.normalize(n+Math.PI):n;return z(l,e,i,A(a,"meters"),Y(o,"radians","geographic"),"geodesic"),l[2]=t[2],!0}function me(l,s,e,t){W(s,{start:e,end:t,type:Z.LINE},l),l[2]=s[2]}let Pe=class extends k{snapNewVertex(s,e){const t=e.editGeometryOperations.data.components[0],i=t.edges.length,n=t.vertices.length,r=[];if(i<2)return r;const{view:a}=this,o=x(s,e.spatialReference,v,a),h=f(t.vertices[n-1].pos,a,e),d=f(t.vertices[0].pos,a,e),g=t.edges[i-1];let c=g;do{if(this.edgeExceedsShortLineThreshold(c,e)){const u=$(c,a,e);this._checkEdgeForParallelLines(u,h,s,o,e,r),this._checkEdgeForParallelLines(u,d,s,o,e,r)}c=c.leftVertex.leftEdge}while(c&&c!==g);return r}snapExistingVertex(s,e){const t=[],i=e.vertexHandle,n=i.component;if(n.edges.length<3)return t;const{view:r}=this,a=x(s,e.spatialReference,v,r),o=i.leftEdge,h=i.rightEdge,d=n.vertices[0],g=f(d.pos,r,e),c=n.vertices.length,u=n.vertices[c-1],V=f(u.pos,r,e),y=n.edges[0];let E=y;do{if(E!==o&&E!==h&&this.edgeExceedsShortLineThreshold(E,e)){const T=$(E,r,e);o&&this._checkEdgeForParallelLines(T,f(o.leftVertex.pos,r,e),s,a,e,t),h&&this._checkEdgeForParallelLines(T,f(h.rightVertex.pos,r,e),s,a,e,t),i===d?this._checkEdgeForParallelLines(T,V,s,a,e,t):i===u&&this._checkEdgeForParallelLines(T,g,s,a,e,t)}E=E.rightVertex.rightEdge}while(E&&E!==y);return t}_checkEdgeForParallelLines(s,e,t,i,n,r){var c;const a=s.left,o=s.right;if(M(w,p(e),p(a),p(o)),J(w,p(e))<P.parallelLineThreshold)return;M(w,p(t),p(a),p(o),p(e));const{spatialReference:h,pointer:d}=n,g=F(N(w[0],w[1],t[2]));if(_(i,x(g,h,v,this.view))<this.squaredProximityThreshold(d)){if(this.isVertical(g,e,n)||this.isVertical(a,o,n)||_e(s,r))return;r.push(new ee({referenceLine:s,lineStart:e,targetPoint:g,isDraped:((c=n.elevationInfo)==null?void 0:c.mode)==="on-the-ground"}))}}};function _e(l,s){const e=l.left,t=l.right;for(const i of s)if(M(w,p(t),p(i.constraint.start),p(i.constraint.end),p(e)),J(w,p(t))<P.parallelLineThreshold)return i.addReferenceLine(l),!0;return!1}const w=I();class ye extends k{snapNewVertex(s,e){const t=e.editGeometryOperations.data.components[0],i=[];if(t.vertices.length<2)return i;const{view:n}=this,r=x(s,e.spatialReference,v,n),a=t.vertices.at(-1);this._checkForSnappingCandidate(S.LastVertex,i,a.leftEdge,a,a.leftEdge.leftVertex,s,r,e);const o=t.vertices[0];return this._checkForSnappingCandidate(S.FirstVertex,i,o.rightEdge,o,o.rightEdge.rightVertex,s,r,e),i}snapExistingVertex(s,e){const t=[],i=e.vertexHandle;if(i.component.vertices.length<3)return t;const{view:n}=this,r=x(s,e.spatialReference,v,n),a=i.leftEdge,o=i.rightEdge;if(a!=null&&a.leftVertex.leftEdge){const h=a.leftVertex.leftEdge;this._checkForSnappingCandidate(S.ExistingEdge,t,h,h.rightVertex,h.leftVertex,s,r,e)}if(o!=null&&o.rightVertex.rightEdge){const h=o.rightVertex.rightEdge;this._checkForSnappingCandidate(S.ExistingEdge,t,h,h.leftVertex,h.rightVertex,s,r,e)}return t}_checkForSnappingCandidate(s,e,t,i,n,r,a,o){if(!this.edgeExceedsShortLineThreshold(t,o))return;const h=this.view,d=f(i.pos,h,o),g=f(n.pos,h,o);Te(O,g,d,r,o),this._checkForSnappingCandidateAlongProjectedRay(s,e,g,d,O,r,a,o)}_checkForSnappingCandidateAlongProjectedRay(s,e,t,i,n,r,a,o){var E;const{spatialReference:h,pointer:d}=o,g=U(j,p(r),p(i)),c=te(n,g)/se(n),u=ie(j,p(i),n,c),V=F(N(u[0],u[1],r[2]));if(_(a,x(V,h,v,this.view))>this.squaredProximityThreshold(d)||this.isVertical(V,i,o)||this.isVertical(i,t,o))return;const y=ne(C(),i,n,Math.sign(c));e.push(new re({targetPoint:V,constraint:new oe(i,H(y)),previousVertex:t,otherVertex:i,otherVertexType:ae.CENTER,selfSnappingType:s,isDraped:((E=o.elevationInfo)==null?void 0:E.mode)==="on-the-ground"}))}}function Te(l,s,e,t,i){Se(l,s,e,t,i)||Le(l,s,e)}function Se(l,s,e,t,{spatialReference:i}){const n=R(s,e,i,i);if(n==null)return!1;const r=R(e,t,i,i);if(r==null)return!1;const a=Math.sign(b.shortestSignedDiff(n,r))*Math.PI*.5,o=Y(n+a,"radians","geographic"),h=C(),d=X(e,t,i);return d!=null&&(z(h,e,i,A(d,"meters"),o,"geodesic"),he(l,h,e),!0)}function Le(l,s,e){const t=U(j,p(e),p(s));de(l,t[1],-t[0],0)}const j=I(),O=C();let $e=class extends k{snapNewVertex(s,e){const t=e.editGeometryOperations.data.components[0],i=[],n=t.vertices.length;if(e.editGeometryOperations.data.type!=="polygon"||n<2)return i;const{view:r}=this,a=t.vertices[0],o=t.vertices[n-1],h=f(a.pos,r,e),d=f(o.pos,r,e);return this._processCandidateProposal(h,d,s,e,i),i}snapExistingVertex(s,e){const t=[],i=e.vertexHandle,n=i.component;if(n.edges.length<2||e.editGeometryOperations.data.type==="polyline"&&(i.index===0||i.index===n.vertices.length-1))return t;const{view:r}=this,a=f(i.leftEdge.leftVertex.pos,r,e),o=f(i.rightEdge.rightVertex.pos,r,e);return this._processCandidateProposal(a,o,s,e,t),t}_processCandidateProposal(s,e,t,i,n){var u;if(!this.exceedsShortLineThreshold(s,e,i))return;const r=le(D,p(s),p(e),.5),a=.5*G(p(s),p(e)),o=ce(D,p(t),r,a),h=F(N(o[0],o[1],t[2])),{spatialReference:d,pointer:g}=i,c=x(t,d,v,this.view);if(_(c,x(h,d,v,this.view))<this.squaredProximityThreshold(g)){if(this.isVertical(s,h,i)||this.isVertical(h,e,i))return;n.push(new pe({targetPoint:h,point1:s,point2:e,isDraped:((u=i.elevationInfo)==null?void 0:u.mode)==="on-the-ground"}))}}};const D=I();let m=class extends ge{constructor(l){super(l),this.updating=!1,this._snappers=new fe,this._domain=ue.SELF}initialize(){this._snappers.push(new Pe(this.view,this.options),new Ee(this.view,this.options),new ye(this.view,this.options),new $e(this.view,this.options))}set options(l){this._set("options",l);for(const s of this._snappers)s.options=l}async fetchCandidates(l,s,e){if(!(s&this._domain&&this.options.effectiveSelfEnabled))return[];const t=[];for(const i of this._snappers.items)for(const n of i.snap(l,e))t.push(n);return xe(l,t),t}};L([q({readOnly:!0})],m.prototype,"updating",void 0),L([q({constructOnly:!0})],m.prototype,"view",void 0),L([q()],m.prototype,"options",null),m=L([ve("esri.views.interactive.snapping.SelfSnappingEngine")],m);export{m as SelfSnappingEngine};