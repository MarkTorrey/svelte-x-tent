import{l,m as s,n as U,ag as V,gU as d,fm as k,b0 as w,cR as f,gV as $,gW as y,gX as c,J as z,gY as h,H as p,cz as E,dz as u}from"./index-eSY5-lt-.js";import{p as H}from"./normalizeUtilsSync-vawo822E.js";let n=class extends V{constructor(t){super(t)}get bounds(){const t=this.coords;return(t==null?void 0:t.extent)==null?null:d(t.extent)}get coords(){var o;const t=(o=this.element.georeference)==null?void 0:o.coords;return k(t,this.spatialReference).geometry}get normalizedCoords(){return w.fromJSON(H(this.coords))}get normalizedBounds(){const t=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return t!=null?d(t):null}};l([s()],n.prototype,"spatialReference",void 0),l([s()],n.prototype,"element",void 0),l([s()],n.prototype,"bounds",null),l([s()],n.prototype,"coords",null),l([s()],n.prototype,"normalizedCoords",null),l([s()],n.prototype,"normalizedBounds",null),n=l([U("esri.layers.support.MediaElementView")],n);const r=E(),a=u(),i=u(),m=u();function W(e,t,o){return f(r,t[0],t[1],1),$(r,r,y(a,o)),r[2]===0?c(e,r[0],r[1]):c(e,r[0]/r[2],r[1]/r[2])}function X(e,t,o){return g(i,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),g(m,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),z(e,h(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function g(e,t,o,x,b,C,R,j,v){p(e,t,x,C,o,b,R,1,1,1),f(r,j,v,1),h(a,e);const[B,J,S]=$(r,r,y(a,a));return p(a,B,0,0,0,J,0,0,0,S),z(e,a,e)}export{W as h,n as i,X as j};
