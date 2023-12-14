import{_ as u,J as d,K as w,L as f,f as p,s as y}from"./index-rwr9l75y.js";let r=null,s=!0;function T(e,a,t){if(!e||!a)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(e,a)}catch{s=!1}return m(e,a,t)}function E(e,a,t,n){if(!a||!t)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(e,a,t)}catch{s=!1}const i=m(a,t,n);return i.data.set(e,0),i}function g(){return r||(r=document.createElement("canvas"),r.width=1,r.height=1),r}function m(e,a,t){return t||(t=g()),t.getContext("2d").createImageData(e,a)}async function h(e,a){const t=window.URL.createObjectURL(e);try{const{data:n}=await f(t,{...a,responseType:"image"});return n}catch(n){throw p(n)?n:new y("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function L(e,a){const{arrayBuffer:t,mediaType:n}=await _(e,a),i=n==="image/png";if(n==="image/gif"){const{isAnimatedGIF:o,parseGif:c}=await u(()=>import("./gif-LzqniBYv.js"),__vite__mapDeps([0,1,2]),import.meta.url);if(o(t))return c(t,a)}if(i){const{isAnimatedPNG:o,parseApng:c}=await u(()=>import("./apng-XdXg54DB.js"),__vite__mapDeps([3,1,2]),import.meta.url);if(o(t))return c(t,a)}return h(new Blob([t],{type:n}),a)}async function _(e,a){const t=d(e);if(t!=null&&t.isBase64)return{arrayBuffer:w(t.data),mediaType:t.mediaType};const n=await f(e,{responseType:"array-buffer",...a});return{arrayBuffer:n.data,mediaType:n.getHeader("Content-Type")}}export{E as c,L as p,T as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./gif-LzqniBYv.js","./index-rwr9l75y.js","./index-xrtMHV0G.css","./apng-XdXg54DB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}