import{a5 as i,a6 as H,a7 as w,a8 as L,a9 as q,aa as B}from"./index-BdDnxAOC.js";function C(t){return"r"in t&&"g"in t&&"b"in t}function x(t){return"h"in t&&"s"in t&&"v"in t}function k(t){return"l"in t&&"a"in t&&"b"in t}function y(t){return"l"in t&&"c"in t&&"h"in t}function G(t){return"x"in t&&"y"in t&&"z"in t}const I=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],R=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function z(t,r){const n=[];let o,e;if(t[0].length!==r.length)throw new Error("dimensions do not match");const u=t.length,c=t[0].length;let a=0;for(o=0;o<u;o++){for(a=0,e=0;e<c;e++)a+=t[o][e]*r[e];n.push(a)}return n}function A(t){const r=[t.r/255,t.g/255,t.b/255].map(o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4),n=z(I,r);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function d(t){const r=z(R,[t.x/100,t.y/100,t.z/100]).map(n=>{const o=n<=.0031308?12.92*n:1.055*n**.4166666666666667-.055;return Math.min(1,Math.max(o,0))});return{r:Math.round(255*r[0]),g:Math.round(255*r[1]),b:Math.round(255*r[2])}}function v(t){const r=[t.x/95.047,t.y/100,t.z/108.883].map(n=>n>.008856451679035631?n**.3333333333333333:7.787037037037035*n+.13793103448275862);return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function $(t){const r=t.l,n=[(r+16)/116+t.a/500,(r+16)/116,(r+16)/116-t.b/200].map(o=>o>6/29?o**3:3*(6/29)**2*(o-4/29));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function E(t){const r=t.l,n=t.a,o=t.b,e=Math.sqrt(n*n+o*o);let u=Math.atan2(o,n);return u=u>0?u:u+2*Math.PI,{l:r,c:e,h:u}}function P(t){const r=t.l,n=t.c,o=t.h;return{l:r,a:n*Math.cos(o),b:n*Math.sin(o)}}function U(t){return v(A(t))}function j(t){return d($(t))}function D(t){return E(v(A(t)))}function F(t){return d($(P(t)))}function J(t){const r=t.r,n=t.g,o=t.b,e=Math.max(r,n,o),u=e-Math.min(r,n,o);let c=e,a=u===0?0:e===r?(n-o)/u%6:e===n?(o-r)/u+2:(r-n)/u+4,s=u===0?0:u/c;return a<0&&(a+=6),a*=60,s*=100,c*=100/255,{h:a,s,v:c}}function K(t){const r=(t.h+360)%360/60,n=t.s/100,o=t.v/100*255,e=o*n,u=e*(1-Math.abs(r%2-1));let c;switch(Math.floor(r)){case 0:c={r:e,g:u,b:0};break;case 1:c={r:u,g:e,b:0};break;case 2:c={r:0,g:e,b:u};break;case 3:c={r:0,g:u,b:e};break;case 4:c={r:u,g:0,b:e};break;case 5:case 6:c={r:e,g:0,b:u};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+o-e),c.g=Math.round(c.g+o-e),c.b=Math.round(c.b+o-e),c}function f(t){return C(t)?t:y(t)?F(t):k(t)?j(t):G(t)?d(t):x(t)?K(t):t}function N(t){return x(t)?t:J(f(t))}function O(t){return k(t)?t:U(f(t))}function X(t){return y(t)?t:D(f(t))}function Q(t){let{r,g:n,b:o,a:e}=t;return e<1&&(r=Math.round(e*r+255*(1-e)),n=Math.round(e*n+255*(1-e)),o=Math.round(e*o+255*(1-e))),new i({r,g:n,b:o})}function S(t,r){const{r:n,g:o,b:e}=r!=null&&r.ignoreAlpha?t:Q(t);return .2126*n+.7152*o+.0722*e}var M;function Y(t,r=M.High){return S(t,{ignoreAlpha:!0})>r?new i([0,0,0,t.a]):new i([255,255,255,t.a])}function Z(t,r){const n=O(t);n.l*=1-r;const o=f(n),e=t.clone();return e.setColor(o),e.a=t.a,e}function _(t,r){const n=t.clone();return n.a*=r,n}function tt(t,r){const n=N(t);n.s*=r;const o=f(n),e=t.clone();return e.setColor(o),e.a=t.a,e}function rt(t){return i.toUnitRGBA(t)}function nt(t,r){return t===r||t!=null&&t.equals(r)}function ot(t,r){return t===r||t!=null&&r!=null&&B(t,r)}function et(t){return H(t[0],t[1],t[2],t.length>3?t[3]:1)}function ut(t,r){const n=i.toUnitRGBA(t);return n[3]*=r,n}function ct(t,r,n={}){if(t.length===0||r<=0)return[];if((t=t.map(o=>typeof o=="string"?new i(o):o)).length===1||r===1){const o=[],e=t[0];for(let u=0;u<r;u++)o.push(e.clone());return o}if(n.shuffle&&(t=w(L(t),n.seed)),t.length>=r){const o=[],e=(t.length-1)/(r-1);for(let u=0;u<r;u++){const c=Math.round(u*e);o.push(t[c].clone())}return o}return T(t,r,n)}function T(t,r,n={}){const o=[],e=t.length-1,u=Math.ceil((r-t.length)/e);t:for(let c=0;c<e;c++){const a=t[c],s=t[c+1];for(let h=1;h<=u;h++){const l=h/(u+1);if(o.push(V(a,s,l,n)),o.length+t.length===r)break t}}return[...t.map(c=>c.clone()),...w(o,n.seed??1)]}(function(t){t[t.Low=160]="Low",t[t.High=225]="High"})(M||(M={}));const b=(t,r)=>{const n=Math.floor(10*r())-5;return Math.min(255,Math.max(0,t+n))};function V(t,r,n,o={}){const e=t.r,u=t.g,c=t.b,a=r.r,s=r.g,h=r.b,l=Math.round(e+(a-e)*n),m=Math.round(u+(s-u)*n),p=Math.round(c+(h-c)*n);if(!o.offset)return new i([l,m,p]);const g=q(o.seed);return new i([b(l,g),b(m,g),b(p,g)])}export{f as A,N as B,O as C,rt as D,Z as E,nt as F,S as G,X as H,_ as I,ot as J,et as K,M as L,ut as N,ct as O,tt as P,Y as R,C as c};
