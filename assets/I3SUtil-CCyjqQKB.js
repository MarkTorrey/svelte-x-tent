import{cI as u,bJ as N,fR as R,fS as C}from"./index-BdDnxAOC.js";import{I as D}from"./I3SBinaryReader-4zdF4rvW.js";import{g as _}from"./edgeUtils-DNOQ1mK8.js";import"./symbolColorUtils-DgKVAaAs.js";import{I as d}from"./orientedBoundingBox-CDDAEjLg.js";u();var c;async function w(r,a,t,l,S,T,m,e){const f=[];for(const n of a)if(n&&S.includes(n.name)){const o=`${r}/nodes/${t}/attributes/${n.key}/0`;f.push({url:o,storageInfo:n})}const i=await Promise.allSettled(f.map(n=>N(n.url,{responseType:"array-buffer",query:{...m,token:T},signal:e==null?void 0:e.signal}).then(o=>D(n.storageInfo,o.data)))),E=[];for(const n of l){const o={};for(let s=0;s<i.length;s++){const I=i[s];if(I.status==="fulfilled"){const p=I.value;o[f[s].storageInfo.name]=$(p,n)}}E.push(o)}return E}(function(r){r[r.OUTSIDE=0]="OUTSIDE",r[r.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",r[r.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",r[r.INSIDE=3]="INSIDE"})(c||(c={}));const g=-32768,y=-(2**31);function $(r,a){if(!r)return null;const t=r[a];return R(r)?t===g?null:t:C(r)?t===y?null:t:t!=t?null:t}_({color:[0,0,0,0],opacity:0});u();u();new d;new Array(72);export{w as V};