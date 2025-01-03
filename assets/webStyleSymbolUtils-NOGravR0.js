import{A as w,ba as D,F as p,bK as d,bL as U,bM as I,bN as h,bO as S}from"./index-Cek7aMWl.js";import{c as M,a as N}from"./devEnvironmentUtils-D6qIi8Ky.js";import{b as O}from"./jsonUtils-C2l4B_cE.js";import{y as R,b as P,p as j,w as v,d as C}from"./styleUtils-Dv2EsbEO.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";function G(t,e,l,a){const r=t.name;return r==null?Promise.reject(new w("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&t.styleName==="Esri2DPointSymbolsStyle"?L(r,e,a):R(t,e,a).then(o=>K(o,r,e,l,C,a))}function E(t,e){return e.items.find(l=>l.name===t)}function K(t,e,l,a,r,o){var c,g;const s=(l==null?void 0:l.portal)!=null?l.portal:D.getDefault(),u={portal:s,url:p(t.baseUrl),origin:"portal-item"},m=E(e,t.data);if(!m){const y=`The symbol name '${e}' could not be found`;return Promise.reject(new w("symbolstyleutils:symbol-name-not-found",y,{symbolName:e}))}let i=d(r(m,a),u),b=((c=m.thumbnail)==null?void 0:c.href)??null;const f=(g=m.thumbnail)==null?void 0:g.imageData;M()&&(i=N(i)??"",b=N(b));const F={portal:s,url:p(U(i)),origin:"portal-item"};return P(i,o).then(y=>{const x=a==="cimRef"?j(y.data):y.data,n=O(x,F);if(n&&I(n)){if(b){const A=d(b,u);n.thumbnail=new h({url:A})}else f&&(n.thumbnail=new h({url:`data:image/png;base64,${f}`}));t.styleUrl?n.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(n.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return n})}function L(t,e,l){const a=v.replaceAll(/\{SymbolName\}/gi,t),r=e.portal!=null?e.portal:D.getDefault();return P(a,l).then(o=>{const s=j(o.data);return O(s,{portal:r,url:p(U(a)),origin:"portal-item"})})}export{K as fetchSymbolFromStyle,E as getStyleItemFromStyle,G as resolveWebStyleSymbol};
