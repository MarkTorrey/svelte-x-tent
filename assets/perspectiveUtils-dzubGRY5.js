import{V as t,W as l,X as R,aE as $,hD as p,gu as q,cz as w,dq as y,eG as g,hE as z,h8 as c,cU as m,hF as x,hG as i,dd as D,eP as d}from"./index-Cek7aMWl.js";import{p as F}from"./normalizeUtilsSync-BuSxwAtS.js";let s=class extends ${constructor(e){super(e)}get bounds(){const e=this.coords;return(e==null?void 0:e.extent)==null?null:p(e.extent)}get coords(){var o;const e=(o=this.element.georeference)==null?void 0:o.coords;return q(e,this.spatialReference).geometry}get normalizedCoords(){return w.fromJSON(F(this.coords))}get normalizedBounds(){const e=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return e!=null?p(e):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([R("esri.layers.support.MediaElementView")],s);const r=D(),a=d(),u=d(),h=d();function N(e,o,n){return y(r,o[0],o[1],1),g(r,r,z(a,n)),r[2]===0?c(e,r[0],r[1]):c(e,r[0]/r[2],r[1]/r[2])}function O(e,o,n){return f(u,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),f(h,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),m(e,x(u,u),h),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function f(e,o,n,C,v,E,S,V,b){i(e,o,C,E,n,v,S,1,1,1),y(r,V,b,1),x(a,e);const[j,B,G]=g(r,r,z(a,a));return i(a,j,0,0,0,B,0,0,0,G),m(e,a,e)}export{O as j,s as m,N as p};