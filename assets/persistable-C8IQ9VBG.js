import{eg as P,eh as x,ei as N,ej as v,ek as b,el as A,em as S,en as O,eo as U,ep as R,A as F,eq as $,er as J,es as K,et as k,eu as q}from"./index-Cek7aMWl.js";import{x as z}from"./MD5-C9MwAd2G.js";import{i as C}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-BDn8EayD.js";function Q(e){const s=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const o=H(e,t,n);for(const a of s){const i=P(t,a,n);for(const r in o)i[r]=o[r]}}}function H(e,s,t){if((e==null?void 0:e.type)==="resource")return V(e,s,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:o}=q;return{read:n,write:o}}}}function V(e,s,t){const n=x(s,t);return{type:String,read:(o,a,i)=>{const r=N(o,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(o,a,i,r){if(!(r!=null&&r.resources))return typeof o=="string"?void(a[i]=v(o,r)):void(a[i]=o.write({},r));const c=B(o),p=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),d=n.type!==String&&(!C(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>A(r.origin)),l={object:this,propertyName:t,value:o,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!S(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?Y(l):Z(l):r!=null&&r.portalItem&&(p==null||O(p)!=null||U(p)||d)?g(l):a[i]=p}}}}function g(e){var h;const{targetUrl:s,params:t,value:n,context:o,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=R(s),c=I(n,s,o);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=o.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=t!=null&&t.contentAddressed&&c.type==="json"?z(c.jsonString):(r==null?void 0:r.filename)??$(),d=J((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),l=`${d}.${y(c)}`;if(t!=null&&t.contentAddressed&&o.resources&&c.type==="json"){const m=o.resources.toKeep.find(({resource:f})=>f.path===l)??o.resources.toAdd.find(({resource:f})=>f.path===l);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=o.portalItem.resourceFromPath(l);U(s)&&o.resources&&o.resources.pendingOperations.push(K(s).then(m=>{u.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(t==null?void 0:t.compress)??!1;o.resources&&w({...e,resource:u,content:c,compress:j,updates:o.resources.toAdd}),a[i]=u.itemRelativeUrl}function Y(e){const{context:s,targetUrl:t,params:n,value:o,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=s.portalItem.resourceFromPath(t),c=I(o,t,s),p=y(c),d=k(r.path),l=(n==null?void 0:n.compress)??!1;p===d?(s.resources&&w({...e,resource:r,content:c,compress:l,updates:s.resources.toUpdate}),a[i]=t):g(e)}function Z({context:e,targetUrl:s,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(s),compress:!1}),t[n]=s)}function w({object:e,propertyName:s,updates:t,resource:n,content:o,compress:a}){const i=r=>{D(e,s,r)};t.push({resource:n,content:o,compress:a,finish:i})}function I(e,s,t){return typeof e=="string"?{type:"url",url:s}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function B(e){return e==null?null:typeof e=="string"?e:e.url}function D(e,s,t){typeof e[s]=="string"?e[s]=t.url:e[s].url=t.url}export{Q as j};