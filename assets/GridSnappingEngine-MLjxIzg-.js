import{aN as z,bR as E,fp as U,cP as F,fq as L,fr as f,V as W,ad as D,fs as I,ft as O,fu as G,fv as q,W as o,X as u,fw as B,fx as V,Y as H}from"./index-BdDnxAOC.js";import{l as K,u as N,t as T}from"./gridUtils-DhxsThy4.js";let s=class extends z{constructor(e){super(e),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){var e;return(e=this.grid)!=null&&e.rotateWithMap?0:E(this.view.rotation??0)}get gridRotation(){var e;return E(((e=this.grid)==null?void 0:e.rotation)??0)}get gridCenter(){var t;const{spatialReference:e,grid:i}=this;if(!i||!e||!U(i.center.spatialReference,e))return null;try{const r=F(i.center,e),n=e.isWrappable&&((t=this.view)==null?void 0:t.center)!=null?L(r.x,this.view.center.x,e):r.x;return f(n,r.y,r.z)}catch(r){return W.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:e,grid:i}=this;if(!i||!e)return 1;const{majorLineInterval:t,dynamicScaling:r}=i;return t<1?null:K(t,e,r)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:e}=this;return e?D(e.spacing,e.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:e}=this;return e==null?null:e*I(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:e}=this.view;return this.gridCenter?N(this.gridCenter[0],this.gridCenter[1],e):null}get pixelsPerStride(){const{gridMetersPerStride:e,viewMetersPerPixel:i}=this;return i&&e?e/i:null}get updating(){return this.grid!=null&&this.spatialReference!=null&&this.viewMetersPerSRUnit==null}async fetchCandidates(e,i,t){var p;const{options:r,view:n}=this;if(!(r!=null&&r.effectiveGridEnabled)||!n.grid||(p=t.feature)!=null&&p.attributes&&O in t.feature.attributes)return[];const a=t.coordinateHelper.arrayToPoint(e),l=r.distance*(t.pointer==="touch"?r.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(a,l)}fetchCandidatesSync(e,i){const t=[],{grid:r,effectiveViewRotation:n,gridRotation:a,gridCenter:l,viewMetersPerPixel:p,viewMetersPerSRUnit:g,offsetScaleFactor:v,spatialReference:h,gridMetersPerStride:C,pixelsPerStride:b}=this;if(!(r&&p&&g&&l&&h&&v&&C&&b)||!r.dynamicScaling&&b<T||!U(e.spatialReference,h))return t;const P=F(e,h),Y=f(P.x,P.y,P.z),c=S(Y,-a,l,-n),R=C/g*v,d=_(c,R,l),{shouldSnapX:w,shouldSnapY:y}=k(d,c,i,p,g);if(!w&&!y)return[];const j=f((w?d:c)[0],(y?d:c)[1]),M=S(j,a,l,n),$=S(d,a,l,n);if(y){const x=X(d,c,R,"y"),m=S(x,a,l,n);t.push(new G({lineStart:$,lineEnd:m,targetPoint:M,isDraped:!1}))}if(w){const x=X(d,c,R,"x"),m=S(x,a,l,n);t.push(new G({lineStart:$,lineEnd:m,targetPoint:M,isDraped:!1}))}return w&&y&&t.push(new q(M,t[0],t[1],!1)),t}};o([u({constructOnly:!0})],s.prototype,"view",void 0),o([u()],s.prototype,"options",void 0),o([u()],s.prototype,"grid",null),o([u()],s.prototype,"effectiveViewRotation",null),o([u()],s.prototype,"gridRotation",null),o([u()],s.prototype,"gridCenter",null),o([u()],s.prototype,"offsetScaleFactor",null),o([u()],s.prototype,"spatialReference",null),o([u()],s.prototype,"gridMetersPerStride",null),o([u()],s.prototype,"viewMetersPerPixel",null),o([u()],s.prototype,"viewMetersPerSRUnit",null),o([u()],s.prototype,"pixelsPerStride",null),o([u()],s.prototype,"updating",null),s=o([H("esri.views.interactive.snapping.GridSnappingEngine")],s);const S=(e,i,t,r)=>{const n=B(e[0],e[1],e[2]);return V(n,V(n,n,t,i),t,r)},_=(e,i,t)=>{const r=(e[0]-t[0])/i,n=(e[1]-t[1])/i,a=Math.trunc(r),l=Math.trunc(n),p=Math.round(r%1),g=Math.round(n%1),v=t[0]+(a+p)*i,h=t[1]+(l+g)*i;return f(v,h)},k=(e,i,t,r,n)=>{if(r<=0)return{shouldSnapX:!1,shouldSnapY:!1};const a=(e[0]-i[0])/r,l=(e[1]-i[1])/r;return{shouldSnapX:Math.abs(a*n)<t,shouldSnapY:Math.abs(l*n)<t}},X=(e,i,t,r)=>{if(r==="y"){const a=i[0]>e[0]?1:-1;return f(e[0]+t*a,e[1])}const n=i[1]>e[1]?1:-1;return f(e[0],e[1]+t*n)};export{s as GridSnappingEngine};