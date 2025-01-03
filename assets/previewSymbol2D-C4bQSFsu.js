import{cb as w,A as H,aA as E,gJ as L}from"./index-Cek7aMWl.js";import{H as A}from"./colorUtils-BlCLzs4t.js";import{c as U}from"./fontUtils-DnX1oK2e.js";import{u as T,y as O,g as V,f as W}from"./utils-Cp7l-Qiq.js";import{t as S,e as I,d as D,l as J}from"./symbolUtils-gs7zz1py.js";import"./cimSymbolUtils-CiZiLm4M.js";import"./utils-BE8joJvK.js";import"./LRUCache-pAqnhOsq.js";import"./ColorStop-CqMXhorb.js";import"./utils-CGzR1Xtt.js";import"./jsonUtils-DGzEHX8a.js";import"./UniqueValueRenderer-DoQjGRE5.js";import"./colorRamps-4yJNyWKx.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Cdb7Kq7r.js";import"./jsonUtils-C2l4B_cE.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Dv2EsbEO.js";import"./Version-DJsGRXWf.js";import"./FieldsIndex-Bjg3eA_S.js";import"./UnknownTimeZone-Cjv2gi-C.js";import"./OverrideHelper-ClkM4CZ1.js";import"./quantizationUtils-DeBnMDmu.js";import"./heatmapUtils-NTzr8GZp.js";import"./webStyleSymbolUtils-NOGravR0.js";import"./devEnvironmentUtils-D6qIi8Ky.js";const R="picture-fill",G="picture-marker",K="simple-fill",N="simple-line",Q="simple-marker",X="text",Y="Aa",_=S.size,C=S.maxSize,$=S.maxOutlineSize,F=S.lineWidth,Z=225,ee=document.createElement("canvas");function q(a,e){const o=ee.getContext("2d"),i=[];e&&(e.weight&&i.push(e.weight),e.size&&i.push(e.size+"px"),e.family&&i.push(e.family)),o.font=i.join(" ");const{width:r,actualBoundingBoxLeft:h,actualBoundingBoxRight:p,actualBoundingBoxAscent:t,actualBoundingBoxDescent:m}=o.measureText(a);return{width:Math.ceil(Math.max(r,h+p)),height:Math.ceil(t+m),x:Math.floor(h),y:Math.floor((t-m)/2)}}function x(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function ae(a,e){const o=e.fill,i=a.color;if((o==null?void 0:o.type)==="pattern"&&i&&a.type!==R){const r=await W(o.src,i.toCss(!0));o.src=r,e.fill=o}}async function ie(a,e,o,i){var p,t,m;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await U(a.font)}catch{}const{width:r,height:h}=x(i);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){const{width:d,height:f,x:n,y:l}=q(e.shape.text,{weight:(p=e.font)==null?void 0:p.weight,size:(t=e.font)==null?void 0:t.size,family:(m=e.font)==null?void 0:m.family});o[0]=r??d,o[1]=h??f,e.shape.x=n,e.shape.y=l;const b=(i==null?void 0:i.rotation)!=null?i.rotation:"angle"in a?a.angle:null;if(b){const M=b*(Math.PI/180),c=Math.abs(Math.sin(M)),u=Math.abs(Math.cos(M));o[1]=o[0]*c+o[1]*u}}}function oe(a,e,o,i,r){var h;if(a.haloColor!=null&&a.haloSize!=null){r.masking??(r.masking=o.map(()=>[]));const p=w(a.haloSize);i[0]+=p,i[1]+=p,o.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*p,join:"round",cap:"round"}}]),r.masking.unshift([{shape:{type:"rect",x:0,y:0,width:i[0]+2*L,height:i[1]+2*L},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(i[0]+=2*L,i[1]+=2*L,o.unshift([{shape:{type:"rect",x:0,y:0,width:i[0],height:i[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(h=r.masking)==null||h.unshift([]))}function P(a,e){return a>e?"dark":"light"}function ne(a,e){var M;const o=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,i=o!=null?w(o):null,r=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,h=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,p=T(a);let t=O(a);le(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(t={width:.75,...t,color:"#bdc3c7"});const m={shape:null,fill:p,stroke:t,offset:[0,0]};t!=null&&t.width&&(t.width=Math.min(t.width,$));const d=(t==null?void 0:t.width)||0;let f=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),n=0,l=0,b=!1;switch(a.type){case Q:{const c=a.style,{width:u,height:s}=x(e),v=u===s&&u!=null?u:i??Math.min(w(a.size),r||C);switch(n=v,l=v,c){case"circle":m.shape={type:"circle",cx:0,cy:0,r:.5*v},f||(n+=d,l+=d);break;case"cross":m.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[n,.5*l]},{command:"M",values:[.5*n,0]},{command:"L",values:[.5*n,l]}]};break;case"diamond":m.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,.5*l]},{command:"L",values:[.5*n,l]},{command:"Z",values:[]}]},f||(n+=d,l+=d);break;case"square":m.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},f||(n+=d,l+=d),h&&(b=!0);break;case"triangle":m.shape={type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},f||(n+=d,l+=d),h&&(b=!0);break;case"x":m.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,l]},{command:"M",values:[n,0]},{command:"L",values:[0,l]}]},h&&(b=!0);break;case"path":m.shape={type:"path",path:a.path||""},f||(n+=d,l+=d),h&&(b=!0),f=!0}break}case N:{const{width:c,height:u}=x(e),s=V(t).reduce((B,k)=>B+k,0),v=s&&Math.ceil(F/s),y=u??i??d,g=c??(s*v||F);t&&(t.width=y),n=g,l=y,f=!0,m.shape={type:"path",path:[{command:"M",values:[y/2,l/2]},{command:"L",values:[n-y/2,l/2]}]};break}case R:case K:{const c=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((M=e==null?void 0:e.symbolConfig)!=null&&M.isSquareFill),{width:u,height:s}=x(e);n=!c&&u!==s||u==null?i??_:u,l=!c&&u!==s||s==null?n:s,f||(n+=d,l+=d),f=!0,m.shape=c?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,l]},{command:"L",values:[0,l]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:I.fill[0];break}case G:{const c=Math.min(w(a.width),r||C),u=Math.min(w(a.height),r||C),{width:s,height:v}=x(e),y=s===v&&s!=null?s:i??Math.max(c,u),g=c/u;n=g<=1?Math.ceil(y*g):y,l=g<=1?y:Math.ceil(y/g),m.shape={type:"image",x:-Math.round(n/2),y:-Math.round(l/2),width:n,height:l,src:a.url||""},h&&(b=!0);break}case X:{const c=a,u=(e==null?void 0:e.overrideText)||c.text||Y,s=c.font,{width:v,height:y}=x(e),g=y??i??Math.min(w(s.size),r||C),{width:B,height:k}=q(u,{weight:s.weight,size:g,family:s.family}),z=/[\uE600-\uE6FF]/.test(u);n=v??(z?g:B),l=z?g:k;let j=.5*(z?g:k);z&&(j+=5),m.shape={type:"text",text:u,x:c.xoffset||0,y:c.yoffset||j,align:"middle",alignBaseline:c.verticalAlignment,decoration:s&&s.decoration,rotated:c.rotated,kerning:c.kerning},m.font=s&&{size:g,style:s.style,decoration:s.decoration,weight:s.weight,family:s.family};break}}return{shapeDescriptor:m,size:[n,l],renderOptions:{node:e==null?void 0:e.node,scale:f,opacity:e==null?void 0:e.opacity,rotation:h,useRotationSize:b,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function Fe(a,e){var p;const{shapeDescriptor:o,size:i,renderOptions:r}=ne(a,e);if(!o.shape)throw new H("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ae(a,o),await ie(a,o,i,e);const h=[[o]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((p=e==null?void 0:e.symbolConfig)!=null&&p.applyColorModulation)){const t=.6*i[0];h.unshift([{...o,offset:[-t,0],fill:D(o.fill,-.3)}]),h.push([{...o,offset:[t,0],fill:D(o.fill,.3)}]),i[0]+=2*t,r.scale=!1}return a.type==="text"&&oe(a,o,h,i,r),J(h,i,r)}function le(a,e=Z){const o=T(a),i=O(a),r=!o||"type"in o?null:new E(o),h=i!=null&&i.color?new E(i==null?void 0:i.color):null,p=r?P(A(r),e):null,t=h?P(A(h),e):null;return t?p?p===t?p:e>=Z?"light":"dark":t:p}export{le as getContrastingBackgroundTheme,ne as getRenderSymbolParameters,Fe as previewSymbol2D};