import{fo as Ut}from"./index-BdDnxAOC.js";function Bt(g,b){for(var w=0;w<b.length;w++){const p=b[w];if(typeof p!="string"&&!Array.isArray(p)){for(const h in p)if(h!=="default"&&!(h in g)){const m=Object.getOwnPropertyDescriptor(p,h);m&&Object.defineProperty(g,h,m.get?m:{enumerable:!0,get:()=>p[h]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}var rt,ot={exports:{}};function Dt(){return rt||(rt=1,g=ot,b=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,w=function(p={}){var h,m,e=p;e.ready=new Promise((t,n)=>{h=t,m=n});var q=Object.assign({},e),L=typeof window=="object",x=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var U,l="";function at(t){return e.locateFile?e.locateFile(t,l):l+t}(L||x)&&(x?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),b&&(l=b),l=l.indexOf("blob:")!==0?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",x&&(U=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var E,T,ut=e.print||console.log.bind(console),A=e.printErr||console.error.bind(console);Object.assign(e,q),q=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(E=e.wasmBinary),typeof WebAssembly!="object"&&X("no native wasm support detected");var j,O,$=!1;function z(){var t=T.buffer;e.HEAP8=new Int8Array(t),e.HEAP16=new Int16Array(t),e.HEAPU8=j=new Uint8Array(t),e.HEAPU16=new Uint16Array(t),e.HEAP32=new Int32Array(t),e.HEAPU32=O=new Uint32Array(t),e.HEAPF32=new Float32Array(t),e.HEAPF64=new Float64Array(t)}var N=[],Y=[],G=[];function ft(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)lt(e.preRun.shift());B(N)}function ct(){B(Y)}function st(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ht(e.postRun.shift());B(G)}function lt(t){N.unshift(t)}function pt(t){Y.unshift(t)}function ht(t){G.unshift(t)}var d=0,R=null;function mt(t){var n;d++,(n=e.monitorRunDependencies)==null||n.call(e,d)}function yt(t){var o;if(d--,(o=e.monitorRunDependencies)==null||o.call(e,d),d==0&&R){var n=R;R=null,n()}}function X(t){var o;(o=e.onAbort)==null||o.call(e,t),A(t="Aborted("+t+")"),$=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw m(n),n}var P,dt="data:application/octet-stream;base64,",J=t=>t.startsWith(dt);function K(t){if(t==P&&E)return new Uint8Array(E);if(U)return U(t);throw"both async and sync fetching of the wasm failed"}function vt(t){return E||!L&&!x||typeof fetch!="function"?Promise.resolve().then(()=>K(t)):fetch(t,{credentials:"same-origin"}).then(n=>{if(!n.ok)throw"failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()}).catch(()=>K(t))}function Q(t,n,o){return vt(t).then(r=>WebAssembly.instantiate(r,n)).then(r=>r).then(o,r=>{A(`failed to asynchronously prepare wasm: ${r}`),X(r)})}function gt(t,n,o,r){return t||typeof WebAssembly.instantiateStreaming!="function"||J(n)||typeof fetch!="function"?Q(n,o,r):fetch(n,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,o).then(r,function(a){return A(`wasm streaming compile failed: ${a}`),A("falling back to ArrayBuffer instantiation"),Q(n,o,r)}))}function bt(){var t={a:It};function n(r,i){return s=r.exports,T=s.i,z(),V=s.m,pt(s.j),yt(),s}function o(r){n(r.instance)}if(mt(),e.instantiateWasm)try{return e.instantiateWasm(t,n)}catch(r){A(`Module.instantiateWasm callback failed with error: ${r}`),m(r)}return gt(E,P,t,o).catch(m),{}}J(P="libtess.wasm")||(P=at(P));var B=t=>{for(;t.length>0;)t.shift()(e)};e.noExitRuntime;var V,wt=()=>{throw 1/0},At=(t,n,o)=>j.copyWithin(t,n,n+o),Et=()=>2147483648,Rt=t=>{var n=(t-T.buffer.byteLength+65535)/65536;try{return T.grow(n),z(),1}catch{}},Pt=t=>{var n=j.length;t>>>=0;var o=Et();if(t>o)return!1;for(var r=(f,c)=>f+(c-f%c)%c,i=1;i<=4;i*=2){var a=n*(1+.2/i);a=Math.min(a,t+100663296);var u=Math.min(o,r(Math.max(t,a),65536));if(Rt(u))return!0}return!1},St=[null,[],[]],Z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,_t=(t,n,o)=>{for(var r=n+o,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&Z)return Z.decode(t.subarray(n,i));for(var a="";n<i;){var u=t[n++];if(128&u){var f=63&t[n++];if((224&u)!=192){var c=63&t[n++];if((u=(240&u)==224?(15&u)<<12|f<<6|c:(7&u)<<18|f<<12|c<<6|63&t[n++])<65536)a+=String.fromCharCode(u);else{var I=u-65536;a+=String.fromCharCode(55296|I>>10,56320|1023&I)}}else a+=String.fromCharCode((31&u)<<6|f)}else a+=String.fromCharCode(u)}return a},Ht=(t,n)=>{var o=St[t];n===0||n===10?((t===1?ut:A)(_t(o,0)),o.length=0):o.push(n)},W=[],C=t=>{var n=W[t];return n||(t>=W.length&&(W.length=t+1),W[t]=n=V.get(t)),n},It={e:wt,g:At,f:Pt,c:(t,n,o,r)=>{for(var i=0,a=0;a<o;a++){var u=O[n>>2],f=O[n+4>>2];n+=8;for(var c=0;c<f;c++)Ht(t,j[u+c]);i+=f}return O[r>>2]=i,0},b:jt,h:Ot,d:Tt,a:xt},s=bt();e._malloc=t=>(e._malloc=s.k)(t),e._free=t=>(e._free=s.l)(t),e._triangulate=(t,n,o,r,i,a)=>(e._triangulate=s.n)(t,n,o,r,i,a);var F,S=(t,n)=>(S=s.o)(t,n),_=()=>(_=s.p)(),H=t=>(H=s.q)(t);function xt(t,n,o){var r=_();try{C(t)(n,o)}catch(i){if(H(r),i!==i+0)throw i;S(1,0)}}function Tt(t,n){var o=_();try{C(t)(n)}catch(r){if(H(o),r!==r+0)throw r;S(1,0)}}function jt(t,n){var o=_();try{return C(t)(n)}catch(r){if(H(o),r!==r+0)throw r;S(1,0)}}function Ot(t,n,o,r){var i=_();try{return C(t)(n,o,r)}catch(a){if(H(i),a!==a+0)throw a;S(1,0)}}function tt(){function t(){F||(F=!0,e.calledRun=!0,$||(ct(),h(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),st()))}d>0||(ft(),d>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()))}if(R=function t(){F||tt(),F||(R=t)},e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();tt();let D=null,y=null,v=null,M=null;const Wt=2,et=4e3;let nt=0;const Ct=(t,n,o)=>{D||(D=e._triangulate);let r=e.HEAPF32;const i=e.HEAP32.BYTES_PER_ELEMENT,a=2,u=r.BYTES_PER_ELEMENT;o>nt&&(nt=o,v&&(e._free(v),v=0),y&&(e._free(y),y=0)),v||(v=e._malloc(o*u)),M||(M=e._malloc(et*i));const f=o*Wt;y||(y=e._malloc(f*u)),r=e.HEAPF32,r.set(t,v/u),e.HEAP32.set(n,M/i);const c=f/a,I=D(v,M,Math.min(n.length,et),a,y,c),Ft=I*a;r=e.HEAPF32;const Mt=r.slice(y/u,y/u+Ft),k={};return k.buffer=Mt,k.vertexCount=I,k};return e.triangulate=Ct,p.ready},g.exports=w),ot.exports;var g,b,w}var it=Dt();const qt=Bt({__proto__:null,default:Ut(it)},[it]);export{qt as l};