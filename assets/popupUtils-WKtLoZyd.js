import{o as u,bB as f,bC as m,bD as b,bE as s,bF as p,bG as w,bH as g,bI as F}from"./index-rwr9l75y.js";function j({displayField:e,editFieldsInfo:i,fields:a,objectIdField:t,title:r},o){if(!a)return null;const l=C({editFieldsInfo:i,fields:a,objectIdField:t},o);if(!l.length)return null;const c=B({titleBase:r,fields:a,displayField:e}),d=N();return new u({title:c,content:d,fieldInfos:l})}const y=(e,i)=>i.visibleFieldNames?i.visibleFieldNames.has(e.name):F(e,i);function I(e,i){const a=e;return i&&(e=e.filter(t=>!i.includes(t.type))),e===a&&(e=e.slice()),e.sort(v),e}function v(e,i){return e.type==="oid"?-1:i.type==="oid"?1:n(e)?-1:n(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function C(e,i){const a=i==null?void 0:i.visibleFieldNames;return I(e.fields??[],(i==null?void 0:i.ignoreFieldTypes)||$).map(t=>new f({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:L(t),visible:y(t,{...e,visibleFieldNames:a})}))}function L(e){switch(e.type){case"small-integer":case"integer":case"single":return new s({digitSeparator:!0,places:0});case"double":return new s({digitSeparator:!0,places:2});case"string":return b(e.name)?new s({digitSeparator:!0,places:0}):null;default:return null}}function N(){return[new p,new w]}function B(e){const i=g(e),{titleBase:a}=e;return i?`${a}: {${i.trim()}}`:a??""}function n(e){return(e.name&&e.name.toLowerCase())==="name"?!0:(e.alias&&e.alias.toLowerCase())==="name"}const $=["geometry","blob","raster","guid","xml"];export{j as p};
