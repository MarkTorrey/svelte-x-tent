import{b7 as un}from"./index-Cek7aMWl.js";var It,it,Ot,Ht={exports:{}};It=Ht,it=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,Ot=function(J={}){var ot,z,i=J!==void 0?J:{};i.ready=new Promise((t,e)=>{ot=t,z=e});var at=Object.assign({},i),ut=typeof window=="object",D=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var K,b="";function zt(t){return i.locateFile?i.locateFile(t,b):b+t}(ut||D)&&(D?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),it&&(b=it),b=b.indexOf("blob:")!==0?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",D&&(K=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var U,V,Dt=i.print||console.log.bind(console),F=i.printErr||console.warn.bind(console);Object.assign(i,at),at=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(U=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&B("no native wasm support detected");var E,v,R,M,W,p,ct,st,ft,lt=!1;function dt(){var t=V.buffer;i.HEAP8=E=new Int8Array(t),i.HEAP16=R=new Int16Array(t),i.HEAP32=W=new Int32Array(t),i.HEAPU8=v=new Uint8Array(t),i.HEAPU16=M=new Uint16Array(t),i.HEAPU32=p=new Uint32Array(t),i.HEAPF32=ct=new Float32Array(t),i.HEAPF64=st=new Float64Array(t)}var pt=[],vt=[],ht=[];function Vt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)qt(i.preRun.shift());Q(pt)}function Mt(){Q(vt)}function Bt(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Lt(i.postRun.shift());Q(ht)}function qt(t){pt.unshift(t)}function Nt(t){vt.unshift(t)}function Lt(t){ht.unshift(t)}var k=0,I=null;function $t(t){k++,i.monitorRunDependencies&&i.monitorRunDependencies(k)}function Gt(t){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),k==0&&I){var e=I;I=null,e()}}function B(t){i.onAbort&&i.onAbort(t),F(t="Aborted("+t+")"),lt=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw z(e),e}var O,Xt="data:application/octet-stream;base64,";function mt(t){return t.startsWith(Xt)}function gt(t){try{if(t==O&&U)return new Uint8Array(U);if(K)return K(t);throw"both async and sync fetching of the wasm failed"}catch(e){B(e)}}function Zt(t){return U||!ut&&!D||typeof fetch!="function"?Promise.resolve().then(()=>gt(t)):fetch(t,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()}).catch(()=>gt(t))}function yt(t,e,n){return Zt(t).then(r=>WebAssembly.instantiate(r,e)).then(r=>r).then(n,r=>{F("failed to asynchronously prepare wasm: "+r),B(r)})}function Jt(t,e,n,r){return t||typeof WebAssembly.instantiateStreaming!="function"||mt(e)||typeof fetch!="function"?yt(e,n,r):fetch(e,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,n).then(r,function(u){return F("wasm streaming compile failed: "+u),F("falling back to ArrayBuffer instantiation"),yt(e,n,r)}))}function Kt(){var t={env:Rt,wasi_snapshot_preview1:Rt};function e(r,o){var u=r.exports;return i.asm=u,V=i.asm.memory,dt(),ft=i.asm.__indirect_function_table,Nt(i.asm.__wasm_call_ctors),Gt(),u}function n(r){e(r.instance)}if($t(),i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(r){F("Module.instantiateWasm callback failed with error: "+r),z(r)}return Jt(U,O,t,n).catch(z),{}}function Q(t){for(;t.length>0;)t.shift()(i)}mt(O="i3s.wasm")||(O=zt(O));var q=[];function Y(t){var e=q[t];return e||(t>=q.length&&(q.length=t+1),q[t]=e=ft.get(t)),e}function Qt(t,e){Y(t)(e)}function Yt(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(e){p[this.ptr+4>>2]=e},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(e){p[this.ptr+8>>2]=e},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,E[this.ptr+12|0]=e},this.get_caught=function(){return E[this.ptr+12|0]!=0},this.set_rethrown=function(e){e=e?1:0,E[this.ptr+13|0]=e},this.get_rethrown=function(){return E[this.ptr+13|0]!=0},this.init=function(e,n){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(n)},this.set_adjusted_ptr=function(e){p[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(xt(this.get_type()))return p[this.excPtr>>2];var e=this.get_adjusted_ptr();return e!==0?e:this.excPtr}}function te(t,e,n){throw new Yt(t).init(e,n),t}var N={};function _t(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function L(t){return this.fromWireType(W[t>>2])}var S={},j={},$={},ee=48,ne=57;function re(t){if(t===void 0)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=ee&&e<=ne?"_"+t:t}function ie(t,e){return t=re(t),{[t]:function(){return e.apply(this,arguments)}}[t]}function tt(t,e){var n=ie(e,function(r){this.name=e,this.message=r;var o=new Error(r).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var wt=void 0;function bt(t){throw new wt(t)}function At(t,e,n){function r(a){var s=n(a);s.length!==t.length&&bt("Mismatched type converter count");for(var f=0;f<t.length;++f)A(t[f],s[f])}t.forEach(function(a){$[a]=e});var o=new Array(e.length),u=[],c=0;e.forEach((a,s)=>{j.hasOwnProperty(a)?o[s]=j[a]:(u.push(a),S.hasOwnProperty(a)||(S[a]=[]),S[a].push(()=>{o[s]=j[a],++c===u.length&&r(o)}))}),u.length===0&&r(o)}function oe(t){var e=N[t];delete N[t];var n=e.rawConstructor,r=e.rawDestructor,o=e.fields;At([t],o.map(u=>u.getterReturnType).concat(o.map(u=>u.setterArgumentType)),u=>{var c={};return o.forEach((a,s)=>{var f=a.fieldName,l=u[s],d=a.getter,C=a.getterContext,y=u[s+o.length],_=a.setter,P=a.setterContext;c[f]={read:w=>l.fromWireType(d(C,w)),write:(w,rt)=>{var Z=[];_(P,w,y.toWireType(Z,rt)),_t(Z)}}}),[{name:e.name,fromWireType:function(a){var s={};for(var f in c)s[f]=c[f].read(a);return r(a),s},toWireType:function(a,s){for(var f in c)if(!(f in s))throw new TypeError('Missing field:  "'+f+'"');var l=n();for(f in c)c[f].write(l,s[f]);return a!==null&&a.push(r,l),l},argPackAdvance:8,readValueFromPointer:L,destructorFunction:r}]})}function ae(t,e,n,r,o){}function et(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function ue(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Tt=t}var Tt=void 0;function h(t){for(var e="",n=t;v[n];)e+=Tt[v[n++]];return e}var Ct=void 0;function m(t){throw new Ct(t)}function A(t,e,n={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(t||m('type "'+r+'" must have a positive integer typeid pointer'),j.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;m("Cannot register type '"+r+"' twice")}if(j[t]=e,delete $[t],S.hasOwnProperty(t)){var o=S[t];delete S[t],o.forEach(u=>u())}}function ce(t,e,n,r,o){var u=et(n);A(t,{name:e=h(e),fromWireType:function(c){return!!c},toWireType:function(c,a){return a?r:o},argPackAdvance:8,readValueFromPointer:function(c){var a;if(n===1)a=E;else if(n===2)a=R;else{if(n!==4)throw new TypeError("Unknown boolean type size: "+e);a=W}return this.fromWireType(a[c>>u])},destructorFunction:null})}function se(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.allocate=function(t){let e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}}var g=new se;function Pt(t){t>=g.reserved&&--g.get(t).refcount==0&&g.free(t)}function fe(){for(var t=0,e=g.reserved;e<g.allocated.length;++e)g.allocated[e]!==void 0&&++t;return t}function le(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=fe}var G={toValue:t=>(t||m("Cannot use deleted val. handle = "+t),g.get(t).value),toHandle:t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:t})}}};function de(t,e){A(t,{name:e=h(e),fromWireType:function(n){var r=G.toValue(n);return Pt(n),r},toWireType:function(n,r){return G.toHandle(r)},argPackAdvance:8,readValueFromPointer:L,destructorFunction:null})}function pe(t,e){switch(e){case 2:return function(n){return this.fromWireType(ct[n>>2])};case 3:return function(n){return this.fromWireType(st[n>>3])};default:throw new TypeError("Unknown float type: "+t)}}function ve(t,e,n){var r=et(n);A(t,{name:e=h(e),fromWireType:function(o){return o},toWireType:function(o,u){return u},argPackAdvance:8,readValueFromPointer:pe(e,r),destructorFunction:null})}function he(t,e,n,r,o,u){var c=e.length;c<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=e[1]!==null&&n!==null,s=!1,f=1;f<e.length;++f)if(e[f]!==null&&e[f].destructorFunction===void 0){s=!0;break}var l=e[0].name!=="void",d=c-2,C=new Array(d),y=[],_=[];return function(){var P;arguments.length!==d&&m("function "+t+" called with "+arguments.length+" arguments, expected "+d+" args!"),_.length=0,y.length=a?2:1,y[0]=o,a&&(P=e[1].toWireType(_,this),y[1]=P);for(var w=0;w<d;++w)C[w]=e[w+2].toWireType(_,arguments[w]),y.push(C[w]);function rt(Z){if(s)_t(_);else for(var x=a?1:2;x<e.length;x++){var an=x===1?P:C[x-2];e[x].destructorFunction!==null&&e[x].destructorFunction(an)}if(l)return e[0].fromWireType(Z)}return rt(r.apply(null,y))}}function me(t,e,n){if(t[e].overloadTable===void 0){var r=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[r.argCount]=r}}function ge(t,e,n){i.hasOwnProperty(t)?((n===void 0||i[t].overloadTable!==void 0&&i[t].overloadTable[n]!==void 0)&&m("Cannot register public name '"+t+"' twice"),me(i,t,t),i.hasOwnProperty(n)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[t].overloadTable[n]=e):(i[t]=e,n!==void 0&&(i[t].numArguments=n))}function ye(t,e){for(var n=[],r=0;r<t;r++)n.push(p[e+4*r>>2]);return n}function _e(t,e,n){i.hasOwnProperty(t)||bt("Replacing nonexistant public symbol"),i[t].overloadTable!==void 0&&n!==void 0?i[t].overloadTable[n]=e:(i[t]=e,i[t].argCount=n)}function we(t,e,n){var r=i["dynCall_"+t];return n&&n.length?r.apply(null,[e].concat(n)):r.call(null,e)}function be(t,e,n){return t.includes("j")?we(t,e,n):Y(e).apply(null,n)}function Ae(t,e){var n=[];return function(){return n.length=0,Object.assign(n,arguments),be(t,e,n)}}function H(t,e){function n(){return t.includes("j")?Ae(t,e):Y(e)}t=h(t);var r=n();return typeof r!="function"&&m("unknown function pointer with signature "+t+": "+e),r}var Et=void 0;function Wt(t){var e=St(t),n=h(e);return T(e),n}function Te(t,e){var n=[],r={};function o(u){r[u]||j[u]||($[u]?$[u].forEach(o):(n.push(u),r[u]=!0))}throw e.forEach(o),new Et(t+": "+n.map(Wt).join([", "]))}function Ce(t,e,n,r,o,u,c){var a=ye(e,n);t=h(t),o=H(r,o),ge(t,function(){Te("Cannot call "+t+" due to unbound types",a)},e-1),At([],a,function(s){var f=[s[0],null].concat(s.slice(1));return _e(t,he(t,f,null,o,u),e-1),[]})}function Pe(t,e,n){switch(e){case 0:return n?function(r){return E[r]}:function(r){return v[r]};case 1:return n?function(r){return R[r>>1]}:function(r){return M[r>>1]};case 2:return n?function(r){return W[r>>2]}:function(r){return p[r>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function Ee(t,e,n,r,o){e=h(e);var u=et(n),c=l=>l;if(r===0){var a=32-8*n;c=l=>l<<a>>>a}var s=e.includes("unsigned"),f=(l,d)=>{};A(t,{name:e,fromWireType:c,toWireType:s?function(l,d){return f(d,this.name),d>>>0}:function(l,d){return f(d,this.name),d},argPackAdvance:8,readValueFromPointer:Pe(e,u,r!==0),destructorFunction:null})}function We(t,e,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(u){var c=p,a=c[u>>=2],s=c[u+1];return new r(c.buffer,s,a)}A(t,{name:n=h(n),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function ke(t,e,n,r){if(!(r>0))return 0;for(var o=n,u=n+r-1,c=0;c<t.length;++c){var a=t.charCodeAt(c);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++c)),a<=127){if(n>=u)break;e[n++]=a}else if(a<=2047){if(n+1>=u)break;e[n++]=192|a>>6,e[n++]=128|63&a}else if(a<=65535){if(n+2>=u)break;e[n++]=224|a>>12,e[n++]=128|a>>6&63,e[n++]=128|63&a}else{if(n+3>=u)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63,e[n++]=128|a>>6&63,e[n++]=128|63&a}}return e[n]=0,n-o}function je(t,e,n){return ke(t,v,e,n)}function Fe(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r<=127?e++:r<=2047?e+=2:r>=55296&&r<=57343?(e+=4,++n):e+=3}return e}var kt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function jt(t,e,n){for(var r=e+n,o=e;t[o]&&!(o>=r);)++o;if(o-e>16&&t.buffer&&kt)return kt.decode(t.subarray(e,o));for(var u="";e<o;){var c=t[e++];if(128&c){var a=63&t[e++];if((224&c)!=192){var s=63&t[e++];if((c=(240&c)==224?(15&c)<<12|a<<6|s:(7&c)<<18|a<<12|s<<6|63&t[e++])<65536)u+=String.fromCharCode(c);else{var f=c-65536;u+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else u+=String.fromCharCode((31&c)<<6|a)}else u+=String.fromCharCode(c)}return u}function Re(t,e){return t?jt(v,t,e):""}function Se(t,e){var n=(e=h(e))==="std::string";A(t,{name:e,fromWireType:function(r){var o,u=p[r>>2],c=r+4;if(n)for(var a=c,s=0;s<=u;++s){var f=c+s;if(s==u||v[f]==0){var l=Re(a,f-a);o===void 0?o=l:(o+="\0",o+=l),a=f+1}}else{var d=new Array(u);for(s=0;s<u;++s)d[s]=String.fromCharCode(v[c+s]);o=d.join("")}return T(r),o},toWireType:function(r,o){var u;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),u=n&&c?Fe(o):o.length;var a=nt(4+u+1),s=a+4;if(p[a>>2]=u,n&&c)je(o,s,u+1);else if(c)for(var f=0;f<u;++f){var l=o.charCodeAt(f);l>255&&(T(s),m("String has UTF-16 code units that do not fit in 8 bits")),v[s+f]=l}else for(f=0;f<u;++f)v[s+f]=o[f];return r!==null&&r.push(T,a),a},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(r){T(r)}})}var Ft=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function xe(t,e){for(var n=t,r=n>>1,o=r+e/2;!(r>=o)&&M[r];)++r;if((n=r<<1)-t>32&&Ft)return Ft.decode(v.subarray(t,n));for(var u="",c=0;!(c>=e/2);++c){var a=R[t+2*c>>1];if(a==0)break;u+=String.fromCharCode(a)}return u}function Ue(t,e,n){if(n===void 0&&(n=2147483647),n<2)return 0;for(var r=e,o=(n-=2)<2*t.length?n/2:t.length,u=0;u<o;++u){var c=t.charCodeAt(u);R[e>>1]=c,e+=2}return R[e>>1]=0,e-r}function Ie(t){return 2*t.length}function Oe(t,e){for(var n=0,r="";!(n>=e/4);){var o=W[t+4*n>>2];if(o==0)break;if(++n,o>=65536){var u=o-65536;r+=String.fromCharCode(55296|u>>10,56320|1023&u)}else r+=String.fromCharCode(o)}return r}function He(t,e,n){if(n===void 0&&(n=2147483647),n<4)return 0;for(var r=e,o=r+n-4,u=0;u<t.length;++u){var c=t.charCodeAt(u);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++u)),W[e>>2]=c,(e+=4)+4>o)break}return W[e>>2]=0,e-r}function ze(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&++n,e+=4}return e}function De(t,e,n){var r,o,u,c,a;n=h(n),e===2?(r=xe,o=Ue,c=Ie,u=()=>M,a=1):e===4&&(r=Oe,o=He,c=ze,u=()=>p,a=2),A(t,{name:n,fromWireType:function(s){for(var f,l=p[s>>2],d=u(),C=s+4,y=0;y<=l;++y){var _=s+4+y*e;if(y==l||d[_>>a]==0){var P=r(C,_-C);f===void 0?f=P:(f+="\0",f+=P),C=_+e}}return T(s),f},toWireType:function(s,f){typeof f!="string"&&m("Cannot pass non-string to C++ string type "+n);var l=c(f),d=nt(4+l+e);return p[d>>2]=l>>a,o(f,d+4,l+e),s!==null&&s.push(T,d),d},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(s){T(s)}})}function Ve(t,e,n,r,o,u){N[t]={name:h(e),rawConstructor:H(n,r),rawDestructor:H(o,u),fields:[]}}function Me(t,e,n,r,o,u,c,a,s,f){N[t].fields.push({fieldName:h(e),getterReturnType:n,getter:H(r,o),getterContext:u,setterArgumentType:c,setter:H(a,s),setterContext:f})}function Be(t,e){A(t,{isVoid:!0,name:e=h(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})}function qe(t){t>4&&(g.get(t).refcount+=1)}var Ne={};function Le(t){var e=Ne[t];return e===void 0?h(t):e}function $e(t){return G.toHandle(Le(t))}function Ge(t,e){var n=j[t];return n===void 0&&m(e+" has unknown type "+Wt(t)),n}function Xe(t,e){var n=(t=Ge(t,"_emval_take_value")).readValueFromPointer(e);return G.toHandle(n)}function Ze(){B("")}function Je(t,e,n){v.copyWithin(t,e,e+n)}function Ke(){return 2147483648}function Qe(t){var e=V.buffer;try{return V.grow(t-e.byteLength+65535>>>16),dt(),1}catch{}}function Ye(t){var e=v.length;t>>>=0;var n=Ke();if(t>n)return!1;let r=(c,a)=>c+(a-c%a)%a;for(var o=1;o<=4;o*=2){var u=e*(1+.2/o);if(u=Math.min(u,t+100663296),Qe(Math.min(n,r(Math.max(t,u),65536))))return!0}return!1}function tn(t){return 52}function en(t,e,n,r,o){return 70}var nn=[null,[],[]];function rn(t,e){var n=nn[t];e===0||e===10?((t===1?Dt:F)(jt(n,0)),n.length=0):n.push(e)}function on(t,e,n,r){for(var o=0,u=0;u<n;u++){var c=p[e>>2],a=p[e+4>>2];e+=8;for(var s=0;s<a;s++)rn(t,v[c+s]);o+=a}return p[r>>2]=o,0}wt=i.InternalError=tt(Error,"InternalError"),ue(),Ct=i.BindingError=tt(Error,"BindingError"),le(),Et=i.UnboundTypeError=tt(Error,"UnboundTypeError");var Rt={__call_sighandler:Qt,__cxa_throw:te,_embind_finalize_value_object:oe,_embind_register_bigint:ae,_embind_register_bool:ce,_embind_register_emval:de,_embind_register_float:ve,_embind_register_function:Ce,_embind_register_integer:Ee,_embind_register_memory_view:We,_embind_register_std_string:Se,_embind_register_std_wstring:De,_embind_register_value_object:Ve,_embind_register_value_object_field:Me,_embind_register_void:Be,_emval_decref:Pt,_emval_incref:qe,_emval_new_cstring:$e,_emval_take_value:Xe,abort:Ze,emscripten_memcpy_big:Je,emscripten_resize_heap:Ye,fd_close:tn,fd_seek:en,fd_write:on};Kt();var nt=function(){return(nt=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},St=function(){return(St=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var X,xt=function(){return(xt=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function Ut(){function t(){X||(X=!0,i.calledRun=!0,lt||(Mt(),ot(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),Bt()))}k>0||(Vt(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),t()},1)):t()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},I=function t(){X||Ut(),X||(I=t)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ut(),J.ready},It.exports=Ot;const cn=un(Ht.exports),fn=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"}));export{fn as i};
