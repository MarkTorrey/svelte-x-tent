import{fg as O,t as C,bi as I,fh as k,fi as x}from"./index-rwr9l75y.js";import{O as D}from"./quat-YniXdMAg.js";import{e as F}from"./quatf64-5VCgza3C.js";import{r as R,n as A}from"./vec3f32-6rWBPTzX.js";import{a as $,b as U,d as z}from"./PointCloudUniqueValueRenderer-hI318KfE.js";import{w as B,l as J,c as N,I as V}from"./I3SBinaryReader-GQ6AqQxi.js";import"./mat3f64-sunSSgMR.js";import"./LegendOptions-E7OIex9R.js";import"./ColorStop-hqYqJZzQ.js";import"./VertexAttribute-BUG0xkjK.js";function T(u,t,a,r){const{rendererJSON:i,isRGBRenderer:p}=u;let n=null,l=null;if(t&&p)n=t;else if(t&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){l=$.fromJSON(i);const e=l.colorUniqueValueInfos;n=new Uint8Array(3*r);const s=g(l.fieldTransformType);for(let o=0;o<r;o++){const c=(s?s(t[o]):t[o])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(c)){n[3*o]=e[f].color.r,n[3*o+1]=e[f].color.g,n[3*o+2]=e[f].color.b;break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){l=U.fromJSON(i);const e=l.stops;n=new Uint8Array(3*r);const s=g(l.fieldTransformType);for(let o=0;o<r;o++){const c=s?s(t[o]):t[o],f=e.length-1;if(c<e[0].value)n[3*o]=e[0].color.r,n[3*o+1]=e[0].color.g,n[3*o+2]=e[0].color.b;else if(c>=e[f].value)n[3*o]=e[f].color.r,n[3*o+1]=e[f].color.g,n[3*o+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(c<e[b].value){const m=(c-e[b-1].value)/(e[b].value-e[b-1].value);n[3*o]=e[b].color.r*m+e[b-1].color.r*(1-m),n[3*o+1]=e[b].color.g*m+e[b-1].color.g*(1-m),n[3*o+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){l=z.fromJSON(i);const e=l.colorClassBreakInfos;n=new Uint8Array(3*r);const s=g(l.fieldTransformType);for(let o=0;o<r;o++){const c=s?s(t[o]):t[o];for(let f=0;f<e.length;f++)if(c>=e[f].minValue&&c<=e[f].maxValue){n[3*o]=e[f].color.r,n[3*o+1]=e[f].color.g,n[3*o+2]=e[f].color.b;break}}}else n=new Uint8Array(3*r).fill(255);if(a&&(l!=null&&l.colorModulation)){const e=l.colorModulation.minValue,s=l.colorModulation.maxValue,o=.3;for(let c=0;c<r;c++){const f=a[c],b=f>=s?1:f<=e?o:o+(1-o)*(f-e)/(s-e);n[3*c]=b*n[3*c],n[3*c+1]=b*n[3*c+1],n[3*c+2]=b*n[3*c+2]}}return n}function _(u,t){if(u.encoding==null||u.encoding===""){const a=B(t,u);if(a.vertexAttributes.position==null)return;const r=J(t,a.vertexAttributes.position),i=a.header.fields,p=[i.offsetX,i.offsetY,i.offsetZ],n=[i.scaleX,i.scaleY,i.scaleZ],l=r.length/3,e=new Float64Array(3*l);for(let s=0;s<l;s++)e[3*s]=r[3*s]*n[0]+p[0],e[3*s+1]=r[3*s+1]*n[1]+p[1],e[3*s+2]=r[3*s+2]*n[2]+p[2];return e}if(u.encoding==="lepcc-xyz")return N(t).result}function h(u,t,a){return u!=null&&u.attributeInfo.useElevation?t?q(t,a):null:u!=null&&u.attributeInfo.storageInfo?V(u.attributeInfo.storageInfo,u.buffer,a):null}function q(u,t){const a=new Float64Array(t);for(let r=0;r<t;r++)a[r]=u[3*r+2];return a}function E(u,t,a,r,i){const p=u.length/3;let n=0;for(let l=0;l<p;l++){let e=!0;for(let s=0;s<r.length&&e;s++){const{filterJSON:o}=r[s],c=i[s].values[l];switch(o.type){case"pointCloudValueFilter":{const f=o.mode==="exclude";o.values.includes(c)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=w(o.requiredSetBits),b=w(o.requiredClearBits);(c&f)===f&&!(c&b)||(e=!1);break}case"pointCloudReturnFilter":{const f=15&c,b=c>>>4&15,m=b>1,M=f===1,y=f===b;let v=!1;for(const d of o.includedReturns)if(d==="last"&&y||d==="firstOfMany"&&M&&m||d==="lastOfMany"&&y&&m||d==="single"&&!m){v=!0;break}v||(e=!1);break}}}e&&(a[n]=l,u[3*n]=u[3*l],u[3*n+1]=u[3*l+1],u[3*n+2]=u[3*l+2],t[3*n]=t[3*l],t[3*n+1]=t[3*l+1],t[3*n+2]=t[3*l+2],n++)}return n}function g(u){switch(u){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function w(u){let t=0;for(const a of u||[])t|=1<<a;return t}class P{transform(t){const a=this._transform(t),r=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&r.push(a.pointIdFilterMap.buffer);for(const i of a.attributes)"buffer"in i.values&&O(i.values.buffer)&&i.values.buffer!==a.rgb.buffer&&r.push(i.values.buffer);return Promise.resolve({result:a,transferList:r})}_transform(t){const a=_(t.schema,t.geometryBuffer);let r=a.length/3,i=null;const p=new Array,n=h(t.primaryAttributeData,a,r);t.primaryAttributeData!=null&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const l=h(t.modulationAttributeData,a,r);t.modulationAttributeData!=null&&l&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:l});let e=T(t.rendererInfo,n,l,r);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const o=t.filterAttributesData.filter(C).map(c=>{const f=h(c,a,r),b={attributeInfo:c.attributeInfo,values:f};return p.push(b),b});i=new Uint32Array(r),r=E(a,e,i,t.filterInfo,o)}for(const o of t.userAttributesData){const c=h(o,a,r);p.push({attributeInfo:o.attributeInfo,values:c})}3*r<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(a,r,t.elevationOffset);const s=this._transformCoordinates(a,r,t.obb,I.fromJSON(t.inSR),I.fromJSON(t.outSR));return{obb:t.obb,points:s,rgb:e,attributes:p,pointIdFilterMap:i}}_transformCoordinates(t,a,r,i,p){if(!k(t,i,0,t,p,0,a))throw new Error("Can't reproject");const n=R(r.center[0],r.center[1],r.center[2]),l=A(),e=A();D(S,r.quaternion);const s=new Float32Array(3*a);for(let o=0;o<a;o++)l[0]=t[3*o]-n[0],l[1]=t[3*o+1]-n[1],l[2]=t[3*o+2]-n[2],x(e,l,S),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(e[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(e[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(e[2])),s[3*o]=l[0],s[3*o+1]=l[1],s[3*o+2]=l[2];return s}_applyElevationOffsetInPlace(t,a,r){if(r!==0)for(let i=0;i<a;i++)t[3*i+2]+=r}}const S=F();function tt(){return new P}export{tt as default};
