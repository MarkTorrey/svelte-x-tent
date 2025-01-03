import{jm as S,a4 as O,aq as v,gd as x,jn as C,jo as F,bX as k}from"./index-BdDnxAOC.js";import{t as A,n as w}from"./vec3f32-nZdmKIgz.js";import{a as R,b as U,d as B}from"./PointCloudUniqueValueRenderer-Bux4z2Md.js";import{w as J,l as N,c as V,I as q}from"./I3SBinaryReader-4zdF4rvW.js";import{I as T}from"./orientedBoundingBox-CDDAEjLg.js";import"./ColorStop-D1flJukn.js";import"./VertexAttribute-Cq4MnHjR.js";import"./spatialReferenceEllipsoidUtils-dsdmGygT.js";import"./computeTranslationToOriginAndRotation-BpuGNDNV.js";function j(l,t,a,n){const{rendererJSON:f,isRGBRenderer:p}=l;let o=null,s=null;if(t&&p)o=t;else if(t&&(f==null?void 0:f.type)==="pointCloudUniqueValueRenderer"){s=R.fromJSON(f);const e=s.colorUniqueValueInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const u=(c?c(t[r]):t[r])+"";for(let i=0;i<e.length;i++)if(e[i].values.includes(u)){o[3*r]=e[i].color.r,o[3*r+1]=e[i].color.g,o[3*r+2]=e[i].color.b;break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudStretchRenderer"){s=U.fromJSON(f);const e=s.stops;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const u=c?c(t[r]):t[r],i=e.length-1;if(u<e[0].value)o[3*r]=e[0].color.r,o[3*r+1]=e[0].color.g,o[3*r+2]=e[0].color.b;else if(u>=e[i].value)o[3*r]=e[i].color.r,o[3*r+1]=e[i].color.g,o[3*r+2]=e[i].color.b;else for(let b=1;b<e.length;b++)if(u<e[b].value){const m=(u-e[b-1].value)/(e[b].value-e[b-1].value);o[3*r]=e[b].color.r*m+e[b-1].color.r*(1-m),o[3*r+1]=e[b].color.g*m+e[b-1].color.g*(1-m),o[3*r+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudClassBreaksRenderer"){s=B.fromJSON(f);const e=s.colorClassBreakInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const u=c?c(t[r]):t[r];for(let i=0;i<e.length;i++)if(u>=e[i].minValue&&u<=e[i].maxValue){o[3*r]=e[i].color.r,o[3*r+1]=e[i].color.g,o[3*r+2]=e[i].color.b;break}}}else o=new Uint8Array(3*n).fill(255);if(a&&(s!=null&&s.colorModulation)){const e=s.colorModulation.minValue,c=s.colorModulation.maxValue,r=.3;for(let u=0;u<n;u++){const i=a[u],b=i>=c?1:i<=e?r:r+(1-r)*(i-e)/(c-e);o[3*u]=b*o[3*u],o[3*u+1]=b*o[3*u+1],o[3*u+2]=b*o[3*u+2]}}return o}function z(l,t){if(l.encoding==null||l.encoding===""){const a=J(t,l);if(a.vertexAttributes.position==null)return;const n=N(t,a.vertexAttributes.position),f=a.header.fields,p=[f.offsetX,f.offsetY,f.offsetZ],o=[f.scaleX,f.scaleY,f.scaleZ],s=n.length/3,e=new Float64Array(3*s);for(let c=0;c<s;c++)e[3*c]=n[3*c]*o[0]+p[0],e[3*c+1]=n[3*c+1]*o[1]+p[1],e[3*c+2]=n[3*c+2]*o[2]+p[2];return e}if(l.encoding==="lepcc-xyz")return V(t).result}function h(l,t,a){return l!=null&&l.attributeInfo.useElevation?t?X(t,a):null:l!=null&&l.attributeInfo.storageInfo?q(l.attributeInfo.storageInfo,l.buffer,a):null}function X(l,t){const a=new Float64Array(t);for(let n=0;n<t;n++)a[n]=l[3*n+2];return a}function E(l,t,a,n,f){const p=l.length/3;let o=0;for(let s=0;s<p;s++){let e=!0;for(let c=0;c<n.length&&e;c++){const{filterJSON:r}=n[c],u=f[c].values[s];switch(r.type){case"pointCloudValueFilter":{const i=r.mode==="exclude";r.values.includes(u)===i&&(e=!1);break}case"pointCloudBitfieldFilter":{const i=M(r.requiredSetBits),b=M(r.requiredClearBits);((u&i)!==i||u&b)&&(e=!1);break}case"pointCloudReturnFilter":{const i=15&u,b=u>>>4&15,m=b>1,D=i===1,I=i===b;let y=!1;for(const d of r.includedReturns)if(d==="last"&&I||d==="firstOfMany"&&D&&m||d==="lastOfMany"&&I&&m||d==="single"&&!m){y=!0;break}y||(e=!1);break}}}e&&(a[o]=s,l[3*o]=l[3*s],l[3*o+1]=l[3*s+1],l[3*o+2]=l[3*s+2],t[3*o]=t[3*s],t[3*o+1]=t[3*s+1],t[3*o+2]=t[3*s+2],o++)}return o}function g(l){switch(l){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function M(l){let t=0;for(const a of l||[])t|=1<<a;return t}class Y{transform(t){const a=this._transform(t),n=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&n.push(a.pointIdFilterMap.buffer);for(const f of a.attributes)"buffer"in f.values&&S(f.values.buffer)&&f.values.buffer!==a.rgb.buffer&&n.push(f.values.buffer);return Promise.resolve({result:a,transferList:n})}_transform(t){const a=z(t.schema,t.geometryBuffer);let n=a.length/3,f=null;const p=new Array,o=h(t.primaryAttributeData,a,n);t.primaryAttributeData!=null&&o&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const s=h(t.modulationAttributeData,a,n);t.modulationAttributeData!=null&&s&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:s});let e=j(t.rendererInfo,o,s,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const r=t.filterAttributesData.filter(O).map(u=>{const i=h(u,a,n),b={attributeInfo:u.attributeInfo,values:i};return p.push(b),b});f=new Uint32Array(n),n=E(a,e,f,t.filterInfo,r)}for(const r of t.userAttributesData){const u=h(r,a,n);p.push({attributeInfo:r.attributeInfo,values:u})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),_(a,n,t.elevationOffset);const c=Z(a,n,T.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:c,rgb:e,attributes:p,pointIdFilterMap:f}}}function Z(l,t,a,n,f){if(!x(l,n,0,l,f,0,t))throw new Error("Can't reproject");const p=A(a.center),o=w(),s=w(),e=A(a.halfSize);C($,a.quaternion);const c=new Float32Array(3*t);for(let r=0;r<t;r++){let u=3*r;o[0]=l[u]-p[0],o[1]=l[u+1]-p[1],o[2]=l[u+2]-p[2],F(s,o,$),e[0]=Math.max(e[0],Math.abs(s[0])),e[1]=Math.max(e[1],Math.abs(s[1])),e[2]=Math.max(e[2],Math.abs(s[2])),c[u++]=o[0],c[u++]=o[1],c[u]=o[2]}return a.halfSize=e,c}function _(l,t,a){if(a!==0)for(let n=0;n<t;n++)l[3*n+2]+=a}const $=k();function ot(){return new Y}export{ot as default};
