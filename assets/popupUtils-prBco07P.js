import{dS as h,dz as m}from"./index-BdDnxAOC.js";async function b(e,u=e.popupTemplate){var i,o;if(u==null)return[];const a=await u.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=u,{objectIdField:d,typeIdField:n,globalIdField:p,relationships:s}=e;if(a.includes("*"))return["*"];const c=r?h(e):[],l=m(e.fieldsIndex,[...a,...c]);return n&&l.push(n),l&&d&&((i=e.fieldsIndex)!=null&&i.has(d))&&!l.includes(d)&&l.push(d),l&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!l.includes(p)&&l.push(p),s&&s.forEach(I=>{var f;const{keyField:t}=I;l&&t&&((f=e.fieldsIndex)!=null&&f.has(t))&&!l.includes(t)&&l.push(t)}),l}function T(e,u){return e.popupTemplate?e.popupTemplate:u!=null&&u.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function E(e,u){return T(e,{defaultPopupTemplateEnabled:u})!=null}export{b as n,T as p,E as u};
