import{s as c,bo as n,fK as u,fL as p,O as m}from"./index-eSY5-lt-.js";async function g(i,s,o,e){if(!s)throw new c("post:missing-guid","guid for version is missing");const t=n(i),a=o.toJSON(),r=u(t.query,{query:p({...a,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:f}=await m(d,r);return f.success}export{g as deleteForwardEdits};
