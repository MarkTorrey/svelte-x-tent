import{db as r,dc as c}from"./index-BdDnxAOC.js";import{S as f,p as i}from"./query-Cagu3AtE.js";async function d(a,t,o){const n=r(a),{data:s}=await f(n,c.from(t),o);return s.count}async function u(a,t,o){const n=r(a),{data:s}=await i(n,c.from(t),o);return s.objectIds}export{u as a,d as s};