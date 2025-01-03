import{a2 as k,cm as U,aA as C,U as T,cn as q}from"./index-Cek7aMWl.js";import{e as I,l as g,i as x,n as F}from"./sizeVariableUtils-Cmcuvw-4.js";const M=()=>T.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),z=t=>M().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${t}`),S=()=>M().error("Use of arcade expressions requires an arcade context"),D=new k,y=Math.PI,X=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function A(t,n,a){const e="visualVariables"in t&&t.visualVariables?t.visualVariables.find(c=>c.type==="color"):t;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void z("ColorVariable");const i=typeof n=="number",r=i?null:n,l=r==null?void 0:r.attributes;let o=i?n:null;const s=e.field,{ipData:f,hasExpression:d}=e.cache;let u=e.cache.compiledFunc;if(!s&&!d){const c=e.stops;return c&&c[0]&&c[0].color}if(typeof o!="number")if(d){if((a==null?void 0:a.arcade)==null)return void S();const c={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},p=a.arcade.arcadeUtils,h=p.getViewInfo(c),V=p.createExecContext(r,h,a.timeZone);if(!u){const w=p.createSyntaxTree(e.valueExpression);u=p.createFunction(w),e.cache.compiledFunc=u}o=p.executeFunction(u,V)}else l&&(o=l[s]);const v=e.normalizationField,b=l!=null&&v!=null?parseFloat(l[v]):void 0;if(o!=null&&(!v||i||!isNaN(b)&&b!==0)){isNaN(b)||i||(o/=b);const c=R(o,f);if(c){const p=c[0],h=c[1],V=p===h?e.stops[p].color:C.blendColors(e.stops[p].color,e.stops[h].color,c[2],a!=null?a.color:void 0);return new C(V)}}}function O(t,n,a){const e="visualVariables"in t&&t.visualVariables?t.visualVariables.find(c=>c.type==="opacity"):t;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void z("OpacityVariable");const i=typeof n=="number",r=i?null:n,l=r==null?void 0:r.attributes;let o=i?n:null;const s=e.field,{ipData:f,hasExpression:d}=e.cache;let u=e.cache.compiledFunc;if(!s&&!d){const c=e.stops;return c&&c[0]&&c[0].opacity}if(typeof o!="number")if(d){if((a==null?void 0:a.arcade)==null)return void S();const c={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},p=a.arcade.arcadeUtils,h=p.getViewInfo(c),V=p.createExecContext(r,h,a.timeZone);if(!u){const w=p.createSyntaxTree(e.valueExpression);u=p.createFunction(w),e.cache.compiledFunc=u}o=p.executeFunction(u,V)}else l&&(o=l[s]);const v=e.normalizationField,b=l!=null&&v!=null?parseFloat(l[v]):void 0;if(o!=null&&(!v||i||!isNaN(b)&&b!==0)){isNaN(b)||i||(o/=b);const c=R(o,f);if(c){const p=c[0],h=c[1];if(p===h)return e.stops[p].opacity;{const V=e.stops[p].opacity;return V+(e.stops[h].opacity-V)*c[2]}}}}function Z(t,n,a){const e="visualVariables"in t&&t.visualVariables?t.visualVariables.find(b=>b.type==="rotation"):t;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void z("RotationVariable");const i=e.axis||"heading",r=i==="heading"&&e.rotationType==="arithmetic"?90:0,l=i==="heading"&&e.rotationType==="arithmetic"?-1:1,o=typeof n=="number"?null:n,s=o==null?void 0:o.attributes,f=e.field,{hasExpression:d}=e.cache;let u=e.cache.compiledFunc,v=0;if(!f&&!d)return v;if(d){if((a==null?void 0:a.arcade)==null)return void S();const b={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},c=a.arcade.arcadeUtils,p=c.getViewInfo(b),h=c.createExecContext(o,p,a.timeZone);if(!u){const V=c.createSyntaxTree(e.valueExpression);u=c.createFunction(V),e.cache.compiledFunc=u}v=c.executeFunction(u,h)}else s&&(v=s[f]||0);return v=typeof v!="number"||isNaN(v)?null:r+l*v,v}function L(t,n,a){const e=typeof n=="number",i=e?null:n,r=i==null?void 0:i.attributes;let l=e?n:null;const{isScaleDriven:o}=t.cache;let s=t.cache.compiledFunc;if(o){const d=a!=null?a.scale:void 0,u=a!=null?a.view:void 0;l=d==null||u==="3d"?P(t):d}else if(!e)switch(t.inputValueType){case F.Expression:{if((a==null?void 0:a.arcade)==null)return void S();const d={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},u=a.arcade.arcadeUtils,v=u.getViewInfo(d),b=u.createExecContext(i,v,a.timeZone);if(!s){const c=u.createSyntaxTree(t.valueExpression);s=u.createFunction(c),t.cache.compiledFunc=s}l=u.executeFunction(s,b);break}case F.Field:r&&(l=r[t.field]);break;case F.Unknown:l=null}if(!g(l))return null;if(e||!t.normalizationField)return l;const f=r?parseFloat(r[t.normalizationField]):null;return g(f)&&f!==0?l/f:null}function P(t){let n=null,a=null;const e=t.stops;return e?(n=e[0].value,a=e[e.length-1].value):(n=t.minDataValue||0,a=t.maxDataValue||0),(n+a)/2}function E(t,n,a){const e="visualVariables"in t&&t.visualVariables?t.visualVariables.find(r=>r.type==="size"):t;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void z("SizeVariable");const i=J(L(e,n,a),e,n,a,e.cache.ipData);return i==null||isNaN(i)?0:i}function m(t,n,a){return t==null?null:I(t)?E(t,n,a):g(t)?t:null}function N(t,n,a){return g(a)&&t>a?a:g(n)&&t<n?n:t}function B(t,n,a,e){return t+((m(n.minSize,a,e)||n.minDataValue)??0)}function W(t,n,a){const e=t.stops;let i=(e==null?void 0:e.length)&&e[0].size;return i==null&&(i=t.minSize),m(i,n,a)}function $(t,n,a,e){const i=(t-n.minDataValue)/(n.maxDataValue-n.minDataValue),r=m(n.minSize,a,e),l=m(n.maxSize,a,e),o=e!=null?e.shape:void 0;if(t<=n.minDataValue)return r;if(t>=n.maxDataValue)return l;if(r==null||l==null)return null;if(n.scaleBy==="area"&&o){const s=o==="circle",f=s?y*(r/2)**2:r*r,d=f+i*((s?y*(l/2)**2:l*l)-f);return s?2*Math.sqrt(d/y):Math.sqrt(d)}return r+i*(l-r)}function j(t,n,a,e){const i=e!=null?e.shape:void 0,r=t/n.minDataValue,l=m(n.minSize,a,e),o=m(n.maxSize,a,e);let s=null;return s=i==="circle"?2*Math.sqrt(r*(l/2)**2):i==="square"||i==="diamond"||i==="image"?Math.sqrt(r*l**2):r*l,N(s,l,o)}function G(t,n,a,e,i){var s,f,d;const[r,l,o]=R(t,i);if(r===l)return m((s=n.stops)==null?void 0:s[r].size,a,e);{const u=m((f=n.stops)==null?void 0:f[r].size,a,e);return u+(m((d=n.stops)==null?void 0:d[l].size,a,e)-u)*o}}function H(t,n,a,e){const i=((e==null?void 0:e.resolution)??1)*q[n.valueUnit],r=m(n.minSize,a,e),l=m(n.maxSize,a,e),{valueRepresentation:o}=n;let s=null;return s=o==="area"?2*Math.sqrt(t/y)/i:o==="radius"||o==="distance"?2*t/i:t/i,N(s,r,l)}function J(t,n,a,e,i){switch(n.transformationType){case x.Additive:return B(t,n,a,e);case x.Constant:return W(n,a,e);case x.ClampedLinear:return $(t,n,a,e);case x.Proportional:return j(t,n,a,e);case x.Stops:return G(t,n,a,e,i);case x.RealWorldSize:return H(t,n,a,e);case x.Identity:return t;case x.Unknown:return null}}function Y(t,n,a){const{isScaleDriven:e}=t.cache;if(!(e&&a==="3d"||n))return null;const i={scale:n,view:a};let r=m(t.minSize,D,i),l=m(t.maxSize,D,i);if(r!=null||l!=null){if(r>l){const o=l;l=r,r=o}return{minSize:r,maxSize:l}}}function _(t,n,a){if(!t.visualVariables)return;const e=[],i=[],r=[],l=[],o=[];for(const s of t.visualVariables)switch(s.type){case"color":i.push(s);break;case"opacity":r.push(s);break;case"rotation":o.push(s);break;case"size":l.push(s)}return i.forEach(s=>{const f=A(s,n,a);e.push({variable:s,value:f})}),r.forEach(s=>{const f=O(s,n,a);e.push({variable:s,value:f})}),o.forEach(s=>{const f=Z(s,n,a);e.push({variable:s,value:f})}),l.forEach(s=>{const f=E(s,n,a);e.push({variable:s,value:f})}),e.filter(s=>s.value!=null)}function R(t,n){if(!n)return;let a=0,e=n.length-1;return n.some((i,r)=>t<i?(e=r,!0):(a=r,!1)),[a,e,(t-n[a])/(n[e]-n[a])]}function ee(t,n,a){const e=["proportional","proportional","proportional"];for(const i of t){const r=i.useSymbolValue?"symbol-value":E(i,n,a);switch(i.axis){case"width":e[0]=r;break;case"depth":e[1]=r;break;case"height":e[2]=r;break;case"width-and-depth":e[0]=r,e[1]=r;break;case"all":case void 0:case null:e[0]=r,e[1]=r,e[2]=r;break;default:U(i.axis)}}return e}export{ee as getAllSizes,A as getColor,O as getOpacity,Z as getRotationAngle,E as getSize,J as getSizeForValue,m as getSizeFromNumberOrVariable,Y as getSizeRangeAtScale,_ as getVisualVariableValues,X as viewScaleRE};