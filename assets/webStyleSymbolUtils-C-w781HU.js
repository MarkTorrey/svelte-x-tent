import{B as N,b_ as D,F as y,dd as g,de as U,df as R,dg as h,dh as S}from"./index-BdDnxAOC.js";import{c as v,a as w}from"./devEnvironmentUtils-CnNDiFMM.js";import{p as P}from"./jsonUtils-DM4hoWoB.js";import{i as A,p as j,m as F,h as B,y as E}from"./styleUtils-D8VmJ7nq.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";function H(t,e,l,r){const n=t.name;return n==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?W(n,e,r):A(t,e,r).then(o=>T(o,n,e,l,E,r))}function M(t,e){return e.items.find(l=>l.name===t)}function T(t,e,l,r,n,o){var c,d;const s=(l==null?void 0:l.portal)!=null?l.portal:D.getDefault(),f={portal:s,url:y(t.baseUrl),origin:"portal-item"},m=M(e,t.data);if(!m){const u=`The symbol name '${e}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",u,{symbolName:e}))}let i=g(n(m,r),f),p=((c=m.thumbnail)==null?void 0:c.href)??null;const b=(d=m.thumbnail)==null?void 0:d.imageData;v()&&(i=w(i)??"",p=w(p));const O={portal:s,url:y(U(i)),origin:"portal-item"};return j(i,o).then(u=>{const x=r==="cimRef"?F(u.data):u.data,a=P(x,O);if(a&&R(a)){if(p){const I=g(p,f);a.thumbnail=new h({url:I})}else b&&(a.thumbnail=new h({url:`data:image/png;base64,${b}`}));t.styleUrl?a.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(a.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return a})}function W(t,e,l){const r=B.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:D.getDefault();return j(r,l).then(o=>{const s=F(o.data);return P(s,{portal:n,url:y(U(r)),origin:"portal-item"})})}export{T as fetchSymbolFromStyle,M as getStyleItemFromStyle,H as resolveWebStyleSymbol};