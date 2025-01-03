import{eD as P,eE as N,eF as x,eG as v,eH as b,eI as S,eJ as A,eK as O,eL as U,eM as R,B as F,eN as $,eO as J,eP as K,eQ as H,eR as z}from"./index-BdDnxAOC.js";import{x as B}from"./MD5-C9MwAd2G.js";import{i as C}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-BjCeUZX2.js";function q(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=D(e,t,n);for(const a of o){const i=P(t,a,n);for(const r in s)i[r]=s[r]}}}function D(e,o,t){if((e==null?void 0:e.type)==="resource")return E(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=z;return{read:n,write:s}}}}function E(e,o,t){const n=N(o,t);return{type:String,read:(s,a,i)=>{const r=x(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(a[i]=v(s,r)):void(a[i]=s.write({},r));const c=M(s),p=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),d=n.type!==String&&(!C(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>S(r.origin)),l={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!A(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?G(l):L(l):r!=null&&r.portalItem&&(p==null||O(p)!=null||U(p)||d)?g(l):a[i]=p}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=R(o),c=I(n,o,s);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=t!=null&&t.contentAddressed&&c.type==="json"?B(c.jsonString):(r==null?void 0:r.filename)??$(),d=J((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),l=`${d}.${y(c)}`;if(t!=null&&t.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===l)??s.resources.toAdd.find(({resource:f})=>f.path===l);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(l);U(o)&&s.resources&&s.resources.pendingOperations.push(K(o).then(m=>{u.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(t==null?void 0:t.compress)??!1;s.resources&&w({...e,resource:u,content:c,compress:j,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function G(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),c=I(s,t,o),p=y(c),d=H(r.path),l=(n==null?void 0:n.compress)??!1;p===d?(o.resources&&w({...e,resource:r,content:c,compress:l,updates:o.resources.toUpdate}),a[i]=t):g(e)}function L({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function w({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){const i=r=>{Q(e,o,r)};t.push({resource:n,content:s,compress:a,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function M(e){return e==null?null:typeof e=="string"?e:e.url}function Q(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{q as j};