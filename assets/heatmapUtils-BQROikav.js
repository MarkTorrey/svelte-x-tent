import{av as u,dE as l,dF as h,dG as m,ak as p}from"./index-BdDnxAOC.js";const s=2.4;function A(r){return u(r*s)}function M(r){return l(r)/s}function d(r,i,t,a){let{color:c,ratio:e}=i,{color:f,ratio:o}=t;o===e&&(o===1?e-=1e-6:o+=1e-6);const n=p((a-e)/(o-e),0,1);h(r,c.toArray(),f.toArray(),n)}function g(r){const t=new Uint8ClampedArray(2048);if(r=r.filter(({ratio:o})=>o>=0&&o<=1).sort((o,n)=>o.ratio-n.ratio).map(({color:o,ratio:n})=>({color:o,ratio:Math.max(n,.001)})),r.length<1)return t;let a=r[0],c=r[0],e=1;const f=m();for(let o=0;o<512;o++){const n=(o+.5)/512;for(;n>c.ratio&&e<r.length;)a=c,c=r[e++];d(f,a,c,n),t.set(f,4*o)}return t}function x(r,i,t){const a=Math.sqrt(r**2+i**2)/t;return a>1?0:3/(Math.PI*t**2)*(1-a**2)**2}function k(r){return typeof r=="function"?r:r?i=>+i[r]:()=>1}export{M as a,s as c,A as e,g as f,x as l,k as u};
