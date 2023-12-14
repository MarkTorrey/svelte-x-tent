import{aP as Tr}from"./index-rwr9l75y.js";function Cr(R,Y){for(var x=0;x<Y.length;x++){const i=Y[x];if(typeof i!="string"&&!Array.isArray(i)){for(const M in i)if(M!=="default"&&!(M in R)){const D=Object.getOwnPropertyDescriptor(i,M);D&&Object.defineProperty(R,M,D.get?D:{enumerable:!0,get:()=>i[M]})}}}return Object.freeze(Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}))}var Zt,N,$t,it={exports:{}};it.exports,Zt=it,it.exports,N=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,typeof __filename<"u"&&(N=N||__filename),$t=function(R){var Y,x,i=(R=R||{})!==void 0?R:{};i.ready=new Promise(function(t,n){Y=t,x=n});var M,D,X,vt=Object.assign({},i),ot="./this.program",_t=typeof window=="object",z=typeof importScripts=="function",at=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",F="";function Qt(t){return i.locateFile?i.locateFile(t,F):F+t}if(at){var wt=require("fs"),ut=require("path");F=z?ut.dirname(F)+"/":__dirname+"/",M=(t,n)=>(t=$(t)?new URL(t):ut.normalize(t),wt.readFileSync(t,n?void 0:"utf8")),X=t=>{var n=M(t,!0);return n.buffer||(n=new Uint8Array(n)),n},D=(t,n,r)=>{t=$(t)?new URL(t):ut.normalize(t),wt.readFile(t,function(e,o){e?r(e):n(o.buffer)})},process.argv.length>1&&(ot=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(t){if(!(t instanceof hn))throw t}),process.on("unhandledRejection",function(t){throw t}),i.inspect=function(){return"[Emscripten Module object]"}}else(_t||z)&&(z?F=self.location.href:typeof document<"u"&&document.currentScript&&(F=document.currentScript.src),N&&(F=N),F=F.indexOf("blob:")!==0?F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1):"",M=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},z&&(X=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),D=(t,n,r)=>{var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=()=>{e.status==200||e.status==0&&e.response?n(e.response):r()},e.onerror=r,e.send(null)});i.print||console.log.bind(console);var V,ct,B=i.printErr||console.warn.bind(console);Object.assign(i,vt),vt=null,i.arguments&&i.arguments,i.thisProgram&&(ot=i.thisProgram),i.quit&&i.quit,i.wasmBinary&&(V=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&Z("no native wasm support detected");var ft,P,_,U,J,h,g,bt,At,Tt,Ct=!1,Et=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function tn(t,n,r){for(var e=n+r,o=n;t[o]&&!(o>=e);)++o;if(o-n>16&&t.buffer&&Et)return Et.decode(t.subarray(n,o));for(var a="";n<o;){var c=t[n++];if(128&c){var f=63&t[n++];if((224&c)!=192){var s=63&t[n++];if((c=(240&c)==224?(15&c)<<12|f<<6|s:(7&c)<<18|f<<12|s<<6|63&t[n++])<65536)a+=String.fromCharCode(c);else{var p=c-65536;a+=String.fromCharCode(55296|p>>10,56320|1023&p)}}else a+=String.fromCharCode((31&c)<<6|f)}else a+=String.fromCharCode(c)}return a}function st(t,n){return t?tn(_,t,n):""}function Ft(t,n,r,e){if(!(e>0))return 0;for(var o=r,a=r+e-1,c=0;c<t.length;++c){var f=t.charCodeAt(c);if(f>=55296&&f<=57343&&(f=65536+((1023&f)<<10)|1023&t.charCodeAt(++c)),f<=127){if(r>=a)break;n[r++]=f}else if(f<=2047){if(r+1>=a)break;n[r++]=192|f>>6,n[r++]=128|63&f}else if(f<=65535){if(r+2>=a)break;n[r++]=224|f>>12,n[r++]=128|f>>6&63,n[r++]=128|63&f}else{if(r+3>=a)break;n[r++]=240|f>>18,n[r++]=128|f>>12&63,n[r++]=128|f>>6&63,n[r++]=128|63&f}}return n[r]=0,r-o}function nn(t,n,r){return Ft(t,_,n,r)}function Pt(t){for(var n=0,r=0;r<t.length;++r){var e=t.charCodeAt(r);e<=127?n++:e<=2047?n+=2:e>=55296&&e<=57343?(n+=4,++r):n+=3}return n}function St(t){ft=t,i.HEAP8=P=new Int8Array(t),i.HEAP16=U=new Int16Array(t),i.HEAP32=h=new Int32Array(t),i.HEAPU8=_=new Uint8Array(t),i.HEAPU16=J=new Uint16Array(t),i.HEAPU32=g=new Uint32Array(t),i.HEAPF32=bt=new Float32Array(t),i.HEAPF64=At=new Float64Array(t)}i.INITIAL_MEMORY;var Wt=[],Mt=[],jt=[];function rn(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)an(i.preRun.shift());lt(Wt)}function en(){lt(Mt)}function on(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)cn(i.postRun.shift());lt(jt)}function an(t){Wt.unshift(t)}function un(t){Mt.unshift(t)}function cn(t){jt.unshift(t)}var k=0,q=null;function fn(t){k++,i.monitorRunDependencies&&i.monitorRunDependencies(k)}function sn(t){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),k==0&&q){var n=q;q=null,n()}}function Z(t){i.onAbort&&i.onAbort(t),B(t="Aborted("+t+")"),Ct=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw x(n),n}var w,ln="data:application/octet-stream;base64,";function Ot(t){return t.startsWith(ln)}function $(t){return t.startsWith("file://")}function Rt(t){try{if(t==w&&V)return new Uint8Array(V);if(X)return X(t);throw"both async and sync fetching of the wasm failed"}catch(n){Z(n)}}function pn(){if(!V&&(_t||z)){if(typeof fetch=="function"&&!$(w))return fetch(w,{credentials:"same-origin"}).then(function(t){if(!t.ok)throw"failed to load wasm binary file at '"+w+"'";return t.arrayBuffer()}).catch(function(){return Rt(w)});if(D)return new Promise(function(t,n){D(w,function(r){t(new Uint8Array(r))},n)})}return Promise.resolve().then(function(){return Rt(w)})}function dn(){var t={a:br};function n(a,c){var f=a.exports;i.asm=f,St((ct=i.asm.w).buffer),Tt=i.asm.y,un(i.asm.x),sn()}function r(a){n(a.instance)}function e(a){return pn().then(function(c){return WebAssembly.instantiate(c,t)}).then(function(c){return c}).then(a,function(c){B("failed to asynchronously prepare wasm: "+c),Z(c)})}function o(){return V||typeof WebAssembly.instantiateStreaming!="function"||Ot(w)||$(w)||at||typeof fetch!="function"?e(r):fetch(w,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,t).then(r,function(c){return B("wasm streaming compile failed: "+c),B("falling back to ArrayBuffer instantiation"),e(r)})})}if(fn(),i.instantiateWasm)try{return i.instantiateWasm(t,n)}catch(a){B("Module.instantiateWasm callback failed with error: "+a),x(a)}return o().catch(x),{}}function hn(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function lt(t){for(;t.length>0;)t.shift()(i)}function mn(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(n){g[this.ptr+4>>2]=n},this.get_type=function(){return g[this.ptr+4>>2]},this.set_destructor=function(n){g[this.ptr+8>>2]=n},this.get_destructor=function(){return g[this.ptr+8>>2]},this.set_refcount=function(n){h[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,P[this.ptr+12>>0]=n},this.get_caught=function(){return P[this.ptr+12>>0]!=0},this.set_rethrown=function(n){n=n?1:0,P[this.ptr+13>>0]=n},this.get_rethrown=function(){return P[this.ptr+13>>0]!=0},this.init=function(n,r){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=h[this.ptr>>2];h[this.ptr>>2]=n+1},this.release_ref=function(){var n=h[this.ptr>>2];return h[this.ptr>>2]=n-1,n===1},this.set_adjusted_ptr=function(n){g[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return g[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Xt(this.get_type()))return g[this.excPtr>>2];var n=this.get_adjusted_ptr();return n!==0?n:this.excPtr}}function yn(t,n,r){throw new mn(t).init(n,r),t}function gn(t,n,r,e,o){}function pt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function vn(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);xt=t}Ot(w="lclayout.wasm")||(w=Qt(w));var xt=void 0;function b(t){for(var n="",r=t;_[r];)n+=xt[_[r++]];return n}var I={},H={},K={},_n=48,wn=57;function bn(t){if(t===void 0)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=_n&&n<=wn?"_"+t:t}function An(t,n){return t=bn(t),function(){return n.apply(this,arguments)}}function dt(t,n){var r=An(n,function(e){this.name=n,this.message=e;var o=new Error(e).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},r}var Dt=void 0;function A(t){throw new Dt(t)}var kt=void 0;function Ut(t){throw new kt(t)}function It(t,n,r){function e(f){var s=r(f);s.length!==t.length&&Ut("Mismatched type converter count");for(var p=0;p<t.length;++p)j(t[p],s[p])}t.forEach(function(f){K[f]=n});var o=new Array(n.length),a=[],c=0;n.forEach((f,s)=>{H.hasOwnProperty(f)?o[s]=H[f]:(a.push(f),I.hasOwnProperty(f)||(I[f]=[]),I[f].push(()=>{o[s]=H[f],++c===a.length&&e(o)}))}),a.length===0&&e(o)}function j(t,n,r={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=n.name;if(t||A('type "'+e+'" must have a positive integer typeid pointer'),H.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;A("Cannot register type '"+e+"' twice")}if(H[t]=n,delete K[t],I.hasOwnProperty(t)){var o=I[t];delete I[t],o.forEach(a=>a())}}function Tn(t,n,r,e,o){var a=pt(r);j(t,{name:n=b(n),fromWireType:function(c){return!!c},toWireType:function(c,f){return f?e:o},argPackAdvance:8,readValueFromPointer:function(c){var f;if(r===1)f=P;else if(r===2)f=U;else{if(r!==4)throw new TypeError("Unknown boolean type size: "+n);f=h}return this.fromWireType(f[c>>a])},destructorFunction:null})}function Cn(t,n,r){t=b(t),It([],[n],function(e){return e=e[0],i[t]=e.fromWireType(r),[]})}var ht=[],S=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function En(t){t>4&&--S[t].refcount==0&&(S[t]=void 0,ht.push(t))}function Fn(){for(var t=0,n=5;n<S.length;++n)S[n]!==void 0&&++t;return t}function Pn(){for(var t=5;t<S.length;++t)if(S[t]!==void 0)return S[t];return null}function Sn(){i.count_emval_handles=Fn,i.get_first_emval=Pn}var Ht={toValue:t=>(t||A("Cannot use deleted val. handle = "+t),S[t].value),toHandle:t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=ht.length?ht.pop():S.length;return S[n]={refcount:1,value:t},n}}};function mt(t){return this.fromWireType(h[t>>2])}function Wn(t,n){j(t,{name:n=b(n),fromWireType:function(r){var e=Ht.toValue(r);return En(r),e},toWireType:function(r,e){return Ht.toHandle(e)},argPackAdvance:8,readValueFromPointer:mt,destructorFunction:null})}function Mn(t,n){switch(n){case 2:return function(r){return this.fromWireType(bt[r>>2])};case 3:return function(r){return this.fromWireType(At[r>>3])};default:throw new TypeError("Unknown float type: "+t)}}function jn(t,n,r){var e=pt(r);j(t,{name:n=b(n),fromWireType:function(o){return o},toWireType:function(o,a){return a},argPackAdvance:8,readValueFromPointer:Mn(n,e),destructorFunction:null})}function On(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function Rn(t,n,r,e,o){var a=n.length;a<2&&A("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=n[1]!==null&&r!==null,f=!1,s=1;s<n.length;++s)if(n[s]!==null&&n[s].destructorFunction===void 0){f=!0;break}var p=n[0].name!=="void",d=a-2,m=new Array(d),y=[],T=[];return function(){var W;arguments.length!==d&&A("function "+t+" called with "+arguments.length+" arguments, expected "+d+" args!"),T.length=0,y.length=c?2:1,y[0]=o,c&&(W=n[1].toWireType(T,this),y[1]=W);for(var C=0;C<d;++C)m[C]=n[C+2].toWireType(T,arguments[C]),y.push(m[C]);function rt(G){if(f)On(T);else for(var u=c?1:2;u<n.length;u++){var l=u===1?W:m[u-2];n[u].destructorFunction!==null&&n[u].destructorFunction(l)}if(p)return n[0].fromWireType(G)}return rt(e.apply(null,y))}}function xn(t,n,r){if(t[n].overloadTable===void 0){var e=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||A("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[e.argCount]=e}}function Dn(t,n,r){i.hasOwnProperty(t)?((r===void 0||i[t].overloadTable!==void 0&&i[t].overloadTable[r]!==void 0)&&A("Cannot register public name '"+t+"' twice"),xn(i,t,t),i.hasOwnProperty(r)&&A("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[t].overloadTable[r]=n):(i[t]=n,r!==void 0&&(i[t].numArguments=r))}function kn(t,n){for(var r=[],e=0;e<t;e++)r.push(g[n+4*e>>2]);return r}function Un(t,n,r){i.hasOwnProperty(t)||Ut("Replacing nonexistant public symbol"),i[t].overloadTable!==void 0&&r!==void 0?i[t].overloadTable[r]=n:(i[t]=n,i[t].argCount=r)}function In(t,n,r){var e=i["dynCall_"+t];return r&&r.length?e.apply(null,[n].concat(r)):e.call(null,n)}var Q=[];function Yt(t){var n=Q[t];return n||(t>=Q.length&&(Q.length=t+1),Q[t]=n=Tt.get(t)),n}function Hn(t,n,r){return t.includes("j")?In(t,n,r):Yt(n).apply(null,r)}function Yn(t,n){var r=[];return function(){return r.length=0,Object.assign(r,arguments),Hn(t,n,r)}}function zn(t,n){function r(){return t.includes("j")?Yn(t,n):Yt(n)}t=b(t);var e=r();return typeof e!="function"&&A("unknown function pointer with signature "+t+": "+n),e}var zt=void 0;function Vn(t){var n=Nt(t),r=b(n);return O(n),r}function Bn(t,n){var r=[],e={};function o(a){e[a]||H[a]||(K[a]?K[a].forEach(o):(r.push(a),e[a]=!0))}throw n.forEach(o),new zt(t+": "+r.map(Vn).join([", "]))}function qn(t,n,r,e,o,a){var c=kn(n,r);t=b(t),o=zn(e,o),Dn(t,function(){Bn("Cannot call "+t+" due to unbound types",c)},n-1),It([],c,function(f){var s=[f[0],null].concat(f.slice(1));return Un(t,Rn(t,s,null,o,a),n-1),[]})}function Ln(t,n,r){switch(n){case 0:return r?function(e){return P[e]}:function(e){return _[e]};case 1:return r?function(e){return U[e>>1]}:function(e){return J[e>>1]};case 2:return r?function(e){return h[e>>2]}:function(e){return g[e>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function Gn(t,n,r,e,o){n=b(n);var a=pt(r),c=d=>d;if(e===0){var f=32-8*r;c=d=>d<<f>>>f}var s=n.includes("unsigned"),p=(d,m)=>{};j(t,{name:n,fromWireType:c,toWireType:s?function(d,m){return p(m,this.name),m>>>0}:function(d,m){return p(m,this.name),m},argPackAdvance:8,readValueFromPointer:Ln(n,a,e!==0),destructorFunction:null})}function Nn(t,n,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function o(a){var c=g,f=c[a>>=2],s=c[a+1];return new e(ft,s,f)}j(t,{name:r=b(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Xn(t,n){var r=(n=b(n))==="std::string";j(t,{name:n,fromWireType:function(e){var o,a=g[e>>2],c=e+4;if(r)for(var f=c,s=0;s<=a;++s){var p=c+s;if(s==a||_[p]==0){var d=st(f,p-f);o===void 0?o=d:(o+="\0",o+=d),f=p+1}}else{var m=new Array(a);for(s=0;s<a;++s)m[s]=String.fromCharCode(_[c+s]);o=m.join("")}return O(e),o},toWireType:function(e,o){var a;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||A("Cannot pass non-string to std::string"),a=r&&c?Pt(o):o.length;var f=gt(4+a+1),s=f+4;if(g[f>>2]=a,r&&c)nn(o,s,a+1);else if(c)for(var p=0;p<a;++p){var d=o.charCodeAt(p);d>255&&(O(s),A("String has UTF-16 code units that do not fit in 8 bits")),_[s+p]=d}else for(p=0;p<a;++p)_[s+p]=o[p];return e!==null&&e.push(O,f),f},argPackAdvance:8,readValueFromPointer:mt,destructorFunction:function(e){O(e)}})}var Vt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Jn(t,n){for(var r=t,e=r>>1,o=e+n/2;!(e>=o)&&J[e];)++e;if((r=e<<1)-t>32&&Vt)return Vt.decode(_.subarray(t,r));for(var a="",c=0;!(c>=n/2);++c){var f=U[t+2*c>>1];if(f==0)break;a+=String.fromCharCode(f)}return a}function Zn(t,n,r){if(r===void 0&&(r=2147483647),r<2)return 0;for(var e=n,o=(r-=2)<2*t.length?r/2:t.length,a=0;a<o;++a){var c=t.charCodeAt(a);U[n>>1]=c,n+=2}return U[n>>1]=0,n-e}function $n(t){return 2*t.length}function Kn(t,n){for(var r=0,e="";!(r>=n/4);){var o=h[t+4*r>>2];if(o==0)break;if(++r,o>=65536){var a=o-65536;e+=String.fromCharCode(55296|a>>10,56320|1023&a)}else e+=String.fromCharCode(o)}return e}function Qn(t,n,r){if(r===void 0&&(r=2147483647),r<4)return 0;for(var e=n,o=e+r-4,a=0;a<t.length;++a){var c=t.charCodeAt(a);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++a)),h[n>>2]=c,(n+=4)+4>o)break}return h[n>>2]=0,n-e}function tr(t){for(var n=0,r=0;r<t.length;++r){var e=t.charCodeAt(r);e>=55296&&e<=57343&&++r,n+=4}return n}function nr(t,n,r){var e,o,a,c,f;r=b(r),n===2?(e=Jn,o=Zn,c=$n,a=()=>J,f=1):n===4&&(e=Kn,o=Qn,c=tr,a=()=>g,f=2),j(t,{name:r,fromWireType:function(s){for(var p,d=g[s>>2],m=a(),y=s+4,T=0;T<=d;++T){var W=s+4+T*n;if(T==d||m[W>>f]==0){var C=e(y,W-y);p===void 0?p=C:(p+="\0",p+=C),y=W+n}}return O(s),p},toWireType:function(s,p){typeof p!="string"&&A("Cannot pass non-string to C++ string type "+r);var d=c(p),m=gt(4+d+n);return g[m>>2]=d>>f,o(p,m+4,d+n),s!==null&&s.push(O,m),m},argPackAdvance:8,readValueFromPointer:mt,destructorFunction:function(s){O(s)}})}function rr(t,n){j(t,{isVoid:!0,name:n=b(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(r,e){}})}var Bt,er=!0;function ir(){return er}function or(){Z("")}function ar(){return Date.now()}function qt(){return 2147483648}function ur(){return qt()}function cr(t,n,r){_.copyWithin(t,n,n+r)}function fr(t){try{return ct.grow(t-ft.byteLength+65535>>>16),St(ct.buffer),1}catch{}}function sr(t){var n=_.length;t>>>=0;var r=qt();if(t>r)return!1;let e=(c,f)=>c+(f-c%f)%f;for(var o=1;o<=4;o*=2){var a=n*(1+.2/o);if(a=Math.min(a,t+100663296),fr(Math.min(r,e(Math.max(t,a),65536))))return!0}return!1}Bt=at?()=>{var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:()=>performance.now();var yt={};function lr(){return ot||"./this.program"}function L(){if(!L.strings){var t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:lr()};for(var n in yt)yt[n]===void 0?delete t[n]:t[n]=yt[n];var r=[];for(var n in t)r.push(n+"="+t[n]);L.strings=r}return L.strings}function pr(t,n,r){for(var e=0;e<t.length;++e)P[n++>>0]=t.charCodeAt(e);r||(P[n>>0]=0)}function dr(t,n){var r=0;return L().forEach(function(e,o){var a=n+r;g[t+4*o>>2]=a,pr(e,a),r+=e.length+1}),0}function hr(t,n){var r=L();g[t>>2]=r.length;var e=0;return r.forEach(function(o){e+=o.length+1}),g[n>>2]=e,0}function tt(t){return t%4==0&&(t%100!=0||t%400==0)}function mr(t,n){for(var r=0,e=0;e<=n;r+=t[e++]);return r}var Lt=[31,29,31,30,31,30,31,31,30,31,30,31],Gt=[31,28,31,30,31,30,31,31,30,31,30,31];function yr(t,n){for(var r=new Date(t.getTime());n>0;){var e=tt(r.getFullYear()),o=r.getMonth(),a=(e?Lt:Gt)[o];if(!(n>a-r.getDate()))return r.setDate(r.getDate()+n),r;n-=a-r.getDate()+1,r.setDate(1),o<11?r.setMonth(o+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1))}return r}function gr(t,n,r){var e=r>0?r:Pt(t)+1,o=new Array(e),a=Ft(t,o,0,o.length);return n&&(o.length=a),o}function vr(t,n){P.set(t,n)}function _r(t,n,r,e){var o=h[e+40>>2],a={tm_sec:h[e>>2],tm_min:h[e+4>>2],tm_hour:h[e+8>>2],tm_mday:h[e+12>>2],tm_mon:h[e+16>>2],tm_year:h[e+20>>2],tm_wday:h[e+24>>2],tm_yday:h[e+28>>2],tm_isdst:h[e+32>>2],tm_gmtoff:h[e+36>>2],tm_zone:o?st(o):""},c=st(r),f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in f)c=c.replace(new RegExp(s,"g"),f[s]);var p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=["January","February","March","April","May","June","July","August","September","October","November","December"];function m(u,l,E){for(var v=typeof u=="number"?u.toString():u||"";v.length<l;)v=E[0]+v;return v}function y(u,l){return m(u,l,"0")}function T(u,l){function E(et){return et<0?-1:et>0?1:0}var v;return(v=E(u.getFullYear()-l.getFullYear()))===0&&(v=E(u.getMonth()-l.getMonth()))===0&&(v=E(u.getDate()-l.getDate())),v}function W(u){switch(u.getDay()){case 0:return new Date(u.getFullYear()-1,11,29);case 1:return u;case 2:return new Date(u.getFullYear(),0,3);case 3:return new Date(u.getFullYear(),0,2);case 4:return new Date(u.getFullYear(),0,1);case 5:return new Date(u.getFullYear()-1,11,31);case 6:return new Date(u.getFullYear()-1,11,30)}}function C(u){var l=yr(new Date(u.tm_year+1900,0,1),u.tm_yday),E=new Date(l.getFullYear(),0,4),v=new Date(l.getFullYear()+1,0,4),et=W(E),Ar=W(v);return T(et,l)<=0?T(Ar,l)<=0?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var rt={"%a":function(u){return p[u.tm_wday].substring(0,3)},"%A":function(u){return p[u.tm_wday]},"%b":function(u){return d[u.tm_mon].substring(0,3)},"%B":function(u){return d[u.tm_mon]},"%C":function(u){return y((u.tm_year+1900)/100|0,2)},"%d":function(u){return y(u.tm_mday,2)},"%e":function(u){return m(u.tm_mday,2," ")},"%g":function(u){return C(u).toString().substring(2)},"%G":function(u){return C(u)},"%H":function(u){return y(u.tm_hour,2)},"%I":function(u){var l=u.tm_hour;return l==0?l=12:l>12&&(l-=12),y(l,2)},"%j":function(u){return y(u.tm_mday+mr(tt(u.tm_year+1900)?Lt:Gt,u.tm_mon-1),3)},"%m":function(u){return y(u.tm_mon+1,2)},"%M":function(u){return y(u.tm_min,2)},"%n":function(){return`
`},"%p":function(u){return u.tm_hour>=0&&u.tm_hour<12?"AM":"PM"},"%S":function(u){return y(u.tm_sec,2)},"%t":function(){return"	"},"%u":function(u){return u.tm_wday||7},"%U":function(u){var l=u.tm_yday+7-u.tm_wday;return y(Math.floor(l/7),2)},"%V":function(u){var l=Math.floor((u.tm_yday+7-(u.tm_wday+6)%7)/7);if((u.tm_wday+371-u.tm_yday-2)%7<=2&&l++,l){if(l==53){var E=(u.tm_wday+371-u.tm_yday)%7;E==4||E==3&&tt(u.tm_year)||(l=1)}}else{l=52;var v=(u.tm_wday+7-u.tm_yday-1)%7;(v==4||v==5&&tt(u.tm_year%400-1))&&l++}return y(l,2)},"%w":function(u){return u.tm_wday},"%W":function(u){var l=u.tm_yday+7-(u.tm_wday+6)%7;return y(Math.floor(l/7),2)},"%y":function(u){return(u.tm_year+1900).toString().substring(2)},"%Y":function(u){return u.tm_year+1900},"%z":function(u){var l=u.tm_gmtoff,E=l>=0;return l=(l=Math.abs(l)/60)/60*100+l%60,(E?"+":"-")+("0000"+l).slice(-4)},"%Z":function(u){return u.tm_zone},"%%":function(){return"%"}};for(var s in c=c.replace(/%%/g,"\0\0"),rt)c.includes(s)&&(c=c.replace(new RegExp(s,"g"),rt[s](a)));var G=gr(c=c.replace(/\0\0/g,"%"),!1);return G.length>n?0:(vr(G,t),G.length-1)}function wr(t,n,r,e,o){return _r(t,n,r,e)}vn(),Dt=i.BindingError=dt(Error,"BindingError"),kt=i.InternalError=dt(Error,"InternalError"),Sn(),zt=i.UnboundTypeError=dt(Error,"UnboundTypeError");var br={a:yn,m:gn,k:Tn,i:Cn,j:Wn,h:jn,c:qn,d:Gn,b:Nn,g:Xn,e:nr,l:rr,r:ir,f:or,s:ar,n:ur,u:Bt,v:cr,t:sr,p:dr,q:hr,o:wr};dn(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.x).apply(null,arguments)};var Nt=i.___getTypeName=function(){return(Nt=i.___getTypeName=i.asm.z).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.A).apply(null,arguments)};var nt,gt=i._malloc=function(){return(gt=i._malloc=i.asm.B).apply(null,arguments)},O=i._free=function(){return(O=i._free=i.asm.C).apply(null,arguments)},Xt=i.___cxa_is_pointer_type=function(){return(Xt=i.___cxa_is_pointer_type=i.asm.D).apply(null,arguments)};function Jt(t){function n(){nt||(nt=!0,i.calledRun=!0,Ct||(en(),Y(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),on()))}k>0||(rn(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),n()},1)):n()))}if(i.dynCall_viijii=function(){return(i.dynCall_viijii=i.asm.E).apply(null,arguments)},i.dynCall_iiiiij=function(){return(i.dynCall_iiiiij=i.asm.F).apply(null,arguments)},i.dynCall_iiiiijj=function(){return(i.dynCall_iiiiijj=i.asm.G).apply(null,arguments)},i.dynCall_iiiiiijj=function(){return(i.dynCall_iiiiiijj=i.asm.H).apply(null,arguments)},q=function t(){nt||Jt(),nt||(q=t)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Jt(),R.ready},Zt.exports=$t;var Kt=it.exports;const Fr=Cr({__proto__:null,default:Tr(Kt)},[Kt]);export{Fr as l};
