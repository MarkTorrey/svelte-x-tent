import{k as w,fO as b,fP as g,s as f,fQ as h,am as v,b5 as y,b8 as x,an as $,bb as E}from"./index-eSY5-lt-.js";import{x as F,_ as A}from"./labelUtils-x_C8o7Up.js";const d=w.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},L={getAttribute:(r,t)=>r.field(t)};async function j(r,t,c){if(!r||!r.symbol||!t)return p;const o=r.where,l=F(r);let a;if(l.type==="arcade"){const e=await b(l.expression,c,t);if(e==null)return p;a={type:"arcade",evaluate(u,n){try{const s="attributes"in u?e.repurposeFeature(u):u;s.contextTimeZone=n??null;const i=e.evaluate({$view:{timeZone:n},$feature:s},e.services);if(i!=null)return i.toString()}catch(s){d.error(new f("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:s,feature:u,expression:l}))}return null},needsHydrationToEvaluate:()=>A(l.expression)==null}}else a={type:"simple",evaluate:e=>l.expression.replaceAll(/{[^}]*}/g,u=>{const n=u.slice(1,-1),s=t.get(n);if(!s)return u;let i=null;return"attributes"in e?e&&e.attributes&&(i=e.attributes[s.name]):i=e.field(s.name),i==null?"":T(i,s)})};if(o){let e;try{e=await g(o,t)}catch(n){return d.error(new f("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:o,error:n})),p}const u=a.evaluate;a.evaluate=(n,s)=>{const i="attributes"in n?void 0:L;try{if(e.testFeature(n,i))return u(n,s)}catch(m){d.error(new f("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:o,feature:n,error:m}))}return null}}return a}function T(r,t){if(r==null)return"";const c=t.domain;if(c){if(c.type==="codedValue"||c.type==="coded-value"){const l=r;for(const a of c.codedValues)if(a.code===l)return a.name}else if(c.type==="range"){const{max:l,min:a}=h(t),e=+r;if(a!=null&&l!=null&&a<=e&&e<=l)return c.name}}let o=r;return v(t)?o=y(o,x("short-date")):$(t)&&(o=E(+o)),o||""}export{j as createLabelFunction,T as formatField};