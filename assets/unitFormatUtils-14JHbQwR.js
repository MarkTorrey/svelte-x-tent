import{gA as g,gB as a,gC as x,bb as c,gD as f,aH as d,gE as y,gF as D,gG as $,gH as F,gI as B,gJ as M,aF as w}from"./index-eSY5-lt-.js";function T(n,t){return{type:g(t),value:n,unit:t}}function I(n,t){return{type:g(t),value:n,unit:t}}function S(n,t){return{type:g(t),value:n,unit:t}}function m(n,t,e="arithmetic"){return{type:g(t),value:n,unit:t,rotationType:e}}function U(n,t){const e=Z(n,t);return n.type==="angle"?m(e,t,n.rotationType):T(e,t)}function Z(n,t){return a(n.value,n.unit,t)}function z(n,t){return n==null?t:t==null||n.value>a(t.value,t.unit,n.unit)?n:t}function G(n,t){return n==null?null:{...n,value:n.value*t}}function E(n,t,e){if(t===e)return n;switch(e){case"arithmetic":case"geographic":return 90-n}}const K=I(0,"meters"),j=S(0,"square-meters");m(0,"radians");const k=m(0,"degrees");function h(n,t,e){return n.units[t][e]}function o(n,t,e,i=2,u="abbr"){return`${c(t,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:t>0?"never":"exceptZero"})} ${h(n,e,u)}`}function l(n,t,e,i=2,u="abbr"){return`${c(t,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:"exceptZero"})} ${h(n,e,u)}`}function A(n,t,e,i=2,u="abbr"){const r=y(t,e);return o(n,a(t,e,r),r,i,u)}function H(n,t,e,i=2,u="abbr"){const r=y(t,e);return l(n,a(t,e,r),r,i,u)}function J(n,t,e,i=2,u="abbr"){const r=D(t,e);return o(n,a(t,e,r),r,i,u)}function L(n,t,e,i=2,u="abbr"){const r=D(t,e);return l(n,a(t,e,r),r,i,u)}function N(n,t,e,i=2,u="abbr"){const r=$(t,e);return o(n,a(t,e,r),r,i,u)}function Y(n,t,e,i=2,u="abbr"){const r=$(t,e);return l(n,a(t,e,r),r,i,u)}function q(n,t,e,i=2,u="abbr"){const r=F(t,e);return o(n,a(t,e,r),r,i,u)}function C(n,t,e,i=2,u="abbr"){const r=F(t,e);return l(n,a(t,e,r),r,i,u)}function P(n,t,e,i=2,u="abbr"){const r=B(t,e);return o(n,a(t,e,r),r,i,u)}function Q(n,t,e,i=2,u="abbr"){const r=M(t,e);return o(n,a(t,e,r),r,i,u)}function R(n,t,e,i,u){u=u??2;let r=x.normalize(E(a(n,t,"degrees"),e,i),0,!0);const s={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:u,minimumFractionDigits:u,signDisplay:r>0?"never":"exceptZero"};return r=v(r,s),c(r,s)}function V(n,t,e,i,u){e!==i&&(n=-n);const r={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:u=u??2,minimumFractionDigits:u,signDisplay:"exceptZero"};let s=a(n,t,"degrees")%360;return s=v(s,r),c(s,r)}const b=new Map;function v(n,t){const e=JSON.stringify(t);let i=b.get(e);return i||(i=new Intl.NumberFormat("en-US",t),b.set(e,i)),/\-?\+?360/.test(i.format(n))?0:n}const p=["B","kB","MB","GB","TB"];function W(n,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(f.KILOBYTES));e=w(e,0,p.length-1);const i=c(t/f.KILOBYTES**e,{maximumFractionDigits:2});return d(n.units.bytes[p[e]],{fileSize:i})}export{Q as $,q as B,A as D,L as F,C as M,W as O,k as U,R as a,o as b,N as c,j as d,Y as e,U as f,E as g,K as h,I as i,P as j,h as k,S as l,G as m,z as n,m as o,l as p,Z as s,V as w,H as x,J as y};
