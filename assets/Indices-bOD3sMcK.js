import{cK as i,cL as u}from"./index-eSY5-lt-.js";function h(n){if(u(n)){if(n.length<i)return n}else if(n.length<i)return Array.from(n);let r=!0,e=!0;return n.some((o,y)=>(r=r&&o===0,e=e&&o===y,!r&&!e)),r?U(n.length):e?w(n.length):u(n)||n.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?A(n):n}function A(n){let r=!0;for(const e of n){if(e>=65536)return u(n)?new Uint32Array(n):n;e>=256&&(r=!1)}return r?new Uint8Array(n):new Uint16Array(n)}function g(n){return n<=i?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}function s(n){return n<=i?new Array(n):new Uint32Array(n)}let t=(()=>{const n=new Uint32Array(131072);for(let r=0;r<n.length;++r)n[r]=r;return n})();const l=[0],a=(()=>{const n=new Uint16Array(65536);for(let r=0;r<n.length;++r)n[r]=r;return n})();function w(n){if(n===1)return l;if(n<i)return Array.from(new Uint16Array(a.buffer,0,n));if(n<a.length)return new Uint16Array(a.buffer,0,n);if(n>t.length){const r=Math.max(2*t.length,n);t=new Uint32Array(r);for(let e=0;e<t.length;e++)t[e]=e}return new Uint32Array(t.buffer,0,n)}let f=new Uint8Array(65536);function U(n){if(n===1)return l;if(n<i)return new Array(n).fill(0);if(n>f.length){const r=Math.max(2*f.length,n);f=new Uint8Array(r)}return new Uint8Array(f.buffer,0,n)}export{U as A,s as f,g as i,w as l,h as t};
