import{A as c,a3 as p}from"./index-Cek7aMWl.js";import{S as a,g as o}from"./jsonUtils-C2l4B_cE.js";function d(e){return e==null||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function k(e,r){if(e==null)return null;if(!d(e))return new c("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return m(e,r);case"unique-value":return f(e,r);case"class-breaks":return y(e,r);case"dictionary":case"heatmap":return null}return null}function i(e,r){if(!r)return null;let n;if(n=Array.isArray(r)?r:[r],n.length>0){const s=n.map(t=>t.details.symbol.type||t.details.symbol.declaredClass).filter(t=>!!t);s.sort();const l=[];return s.forEach((t,u)=>{u!==0&&t===s[u-1]||l.push(t)}),new c("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${l.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}function m(e,r){const n={...a,...r,cimFallbackEnabled:!0};return i(e,o(e.symbol,n).error)}function f(e,r){var t;const n={...a,...r,cimFallbackEnabled:!0},s=(t=e.uniqueValueInfos)==null?void 0:t.map(u=>o(u.symbol,n).error).filter(p),l=o(e.defaultSymbol,n);return l.error&&(s==null||s.unshift(l.error)),i(e,s)}function y(e,r){const n={...a,...r,cimFallbackEnabled:!0},s=e.classBreakInfos.map(t=>o(t.symbol,n).error).filter(p),l=o(e.defaultSymbol,n);return l.error&&s.unshift(l.error),i(e,s)}export{k as s,d as t};
