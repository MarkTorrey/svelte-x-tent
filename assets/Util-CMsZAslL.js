import{az as l}from"./index-BdDnxAOC.js";class g{constructor(o){this.message=o}toString(){return`AssertException: ${this.message}`}}function m(n,o="Assertion"){if(!n){const e=new Error(o).stack;throw new g(`${o} at ${e}`)}}function w(n,o){n||(o=o||"",console.warn("Verify failed: "+o+`
`+new Error("verify").stack))}function $(n,o,e,f){let i,c=(e[0]-n[0])/o[0],t=(f[0]-n[0])/o[0];c>t&&(i=c,c=t,t=i);let u=(e[1]-n[1])/o[1],r=(f[1]-n[1])/o[1];if(u>r&&(i=u,u=r,r=i),c>r||u>t)return!1;u>c&&(c=u),r<t&&(t=r);let s=(e[2]-n[2])/o[2],a=(f[2]-n[2])/o[2];return s>a&&(i=s,s=a,a=i),!(c>a||s>t)&&(a<t&&(t=a),!(t<0))}function p(n,o,e,f,i,c=l()){const t=(f[i]-e[i])*(o[0]-n[0])-(f[0]-e[0])*(o[i]-n[i]),u=(f[0]-e[0])*(n[i]-e[i])-(f[i]-e[i])*(n[0]-e[0]);if(t===0)return!1;const r=u/t;return c[0]=n[0]+r*(o[0]-n[0]),c[1]=n[i]+r*(o[i]-n[i]),!0}function E(n,o){return Math.log(n)/Math.log(o)}function k(n){return n[0]===1&&n[1]===0&&n[2]===0&&n[3]===0&&n[4]===0&&n[5]===1&&n[6]===0&&n[7]===0&&n[8]===0&&n[9]===0&&n[10]===1&&n[11]===0&&n[15]===1}export{w as c,p as f,$ as i,k as m,m as s,E as u};