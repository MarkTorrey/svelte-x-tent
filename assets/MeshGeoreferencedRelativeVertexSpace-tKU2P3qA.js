import{bx as n,aQ as a,cw as c,b2 as p,cx as l,k as o,cy as g,l as y,m as d}from"./index-rwr9l75y.js";let r=class extends n(a){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=c()}getOriginPoint(e){const[t,i,s]=this.origin;return new p({x:t,y:i,z:s,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:i}){this.origin=l(e,t,i??0)}};o([g({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],r.prototype,"type",void 0),o([y({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=o([d("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],r);const x=r;export{x as m};
