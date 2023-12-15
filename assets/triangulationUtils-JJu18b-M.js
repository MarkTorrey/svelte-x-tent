import{i as S}from"./earcut-wP_5WnqY.js";import{cM as P,d6 as X,h0 as W,d9 as h,ca as Z,bX as v,h1 as F,cR as H,b3 as Y,b0 as j,h2 as C}from"./index-eSY5-lt-.js";import{a as B,e as G,t as x}from"./DoubleArray-5XshLEpX.js";import{A as V,t as N}from"./Indices-bOD3sMcK.js";import{e as L}from"./deduplicate-QfgWUagS.js";import{t as m,I as _,e as T}from"./Geometry-TfLywN1e.js";import{e as A}from"./VertexAttribute-h46lBfqy.js";function k(t,n,r,o){const e=(s=>!Array.isArray(s[0]))(n)?(s,a)=>n[3*s+a]:(s,a)=>n[s][a],i=o?Z(o)/v(o):1;return F(t,(s,a)=>H(s,e(a,0)*i,e(a,1)*i,e(a,2)),r)}function U(t,n,r){const o=k(R,t,n,r)?X(R):[0,0,1];return Math.abs(o[2])>Math.cos(W(80))?h.Z:Math.abs(o[1])>Math.abs(o[0])?h.Y:h.X}const R=P();function rt(t,n,r){const o=U(t,(n.length>0?n[0]:t.length/3)-1,r);if(o!==h.Z){t=t.slice();for(let e=0;e<t.length;e+=3)t[e+o]=t[e+2]}return S(t,n,3)}function at(t){const n=[[A.POSITION,new m(t.attributeData.position,t.indices,3,!0)]],r=V(t.indices.length);return t.attributeData.colorFeature!=null?n.push([A.COLORFEATUREATTRIBUTE,new m([t.attributeData.colorFeature],r,1,!0)]):t.attributeData.color&&n.push([A.COLOR,new m(t.attributeData.color,r,4,!0)]),t.attributeData.uvMapSpace&&n.push([A.UVMAPSPACE,new m(t.attributeData.uvMapSpace,t.indices,4,!0)]),t.attributeData.boundingRect&&n.push([A.BOUNDINGRECT,new m(t.attributeData.boundingRect,t.indices,9,!0)]),new _(t.material,n,t.mapPositions,T.Mesh,t.attributeData.objectAndLayerIdColor)}function it(t,n=null){const r=[[A.POSITION,new m(t.attributeData.position,t.indices,3,!0)],[A.UV0,new m(t.attributeData.uv0,t.indices,2,!0)]];return new _(t.material,r,t.mapPositions,T.Mesh,n)}function st(t){switch(t.type){case"extent":if(t instanceof Y)return j.fromExtent(t);break;case"polygon":return t}return null}class ct{constructor(n,r,o){this.renderData=n,this.layerUid=r,this.graphicUid=o,this.outGeometries=new Array}}function lt(t){const n=q(t.rings,t.hasZ,D.CCW_IS_HOLE,t.spatialReference),r=new Array;let o=0,e=0;for(const a of n.polygons){const c=a.count,f=a.index,d=B(n.position,3*f,3*c),I=a.holeIndices.map(u=>u-f),b=N(S(d,I,3));r.push({position:d,faces:b}),o+=d.length,e+=b.length}const i=z(r,o,e),s=Array.isArray(i.position)?L(i.position,3,{originalIndices:i.faces}):L(i.position.buffer,6,{originalIndices:i.faces});return i.position=G(new Float64Array(s.buffer)),i.faces=s.indices,i}function z(t,n,r){if(t.length===1)return t[0];const o=x(n),e=new Array(r);let i=0,s=0,a=0;for(const c of t){for(let f=0;f<c.position.length;f++)o[i++]=c.position[f];for(const f of c.faces)e[s++]=f+a;a=i/3}return{position:o,faces:N(e)}}function q(t,n,r,o){const e=t.length,i=new Array(e),s=new Array(e),a=new Array(e);let c=0,f=0,d=0,I=0;for(let g=0;g<e;++g)I+=t[g].length;const b=x(3*I);let u=0;for(let g=e-1;g>=0;g--){const l=t[g],E=r===D.CCW_IS_HOLE&&J(l,n,o);if(E&&e!==1)i[c++]=l;else{let M=l.length;for(let p=0;p<c;++p)M+=i[p].length;const y={index:u,pathLengths:new Array(c+1),count:M,holeIndices:new Array(c)};y.pathLengths[0]=l.length,l.length>0&&(a[d++]={index:u,count:l.length}),u=E?O(l,l.length-1,-1,b,u,l.length,n):O(l,0,1,b,u,l.length,n);for(let p=0;p<c;++p){const w=i[p];y.holeIndices[p]=u,y.pathLengths[p+1]=w.length,w.length>0&&(a[d++]={index:u,count:w.length}),u=O(w,0,1,b,u,w.length,n)}c=0,y.count>0&&(s[f++]=y)}}for(let g=0;g<c;++g){const l=i[g];l.length>0&&(a[d++]={index:u,count:l.length}),u=O(l,0,1,b,u,l.length,n)}return s.length=f,a.length=d,{position:b,polygons:s,outlines:a}}function O(t,n,r,o,e,i,s){e*=3;for(let a=0;a<i;++a){const c=t[n];o[e++]=c[0],o[e++]=c[1],o[e++]=s?c[2]:0,n+=r}return e/3}function J(t,n,r){if(n){const o=t.length-1,e=U(t,o,r);if(e===h.X)return!C(t,h.Y,h.Z);if(e===h.Y)return!C(t,h.X,h.Z)}return!C(t,h.X,h.Y)}var D;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(D||(D={}));export{st as A,it as D,ct as O,at as d,lt as f,q as g,D as u,rt as w};
