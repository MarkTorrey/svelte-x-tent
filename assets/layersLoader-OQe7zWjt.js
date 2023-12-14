import{s as h,a$ as F,p as D}from"./index-rwr9l75y.js";import{t as k}from"./fetchService-2suPbAy4.js";import{a as x,n as $,s as G,i as P,l as T,t as g,r as j,e as L}from"./portalLayers-2w0cbumF.js";import{populateGroupLayer as E}from"./layersCreator-n9JZjKFq.js";import{t as C,a as O}from"./lazyLayerLoader-sdxgKXA_.js";import{e as R,l as J}from"./jsonContext-Nil50FAO.js";import{s as N}from"./portalItemUtils-hm4FAu7j.js";import{t as q}from"./styleUtils-Bp-u3KAs.js";import"./associatedFeatureServiceUtils-GcxbqtbT.js";async function le(t,a){const r=t.instance.portalItem;if(r!=null&&r.id)return await r.load(a),z(t),A(t,a)}function z(t){const a=t.instance.portalItem;if(!(a!=null&&a.type)||!t.supportedTypes.includes(a.type))throw new h("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a==null?void 0:a.type,expectedType:t.supportedTypes.join(", ")})}async function A(t,a){const r=t.instance,e=r.portalItem;if(!e)return;const{url:o,title:n}=e,i=R(e);if(r.type==="group")return B(r,i,t);o&&r.read({url:o},i);const s=new L,l=await S(t,s,a);return l&&r.read(l,i),r.resourceReferences={portalItem:e,paths:i.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:n},i),q(r,i)}async function B(t,a,r){const e=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:o,type:n}=e;if(n==="Group Layer"){if(!N(e,"Map"))throw new h("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return H(t)}return t.read({title:o},a),K(t,r)}async function H(t){const a=t.portalItem,r=await a.fetchData("json");if(!r)return;const e=J(a);t.read(r,e),await E(t,r,{context:e}),t.resourceReferences={portalItem:a,paths:e.readResourcePaths??[]}}async function K(t,a){let r;const{portalItem:e}=t;if(!e)return;const o=e.type,n=a.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":r=n.FeatureLayer;break;case"Stream Service":r=n.StreamLayer;break;case"Scene Service":r=n.SceneLayer;break;default:throw new h("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const i=new L;let[s,l]=await Promise.all([r(),S(a,i)]),u=()=>s;if(o==="Feature Service"){l=e.url?await x(l,e.url,i):{};const y=$(l),p=G(l),f=[];if(y.length||p!=null&&p.length){y.length&&f.push("SubtypeGroupLayer"),p!=null&&p.length&&f.push("OrientedImageryLayer");const w=[];for(const c of f){const d=n[c];w.push(d())}const M=await Promise.all(w),b=new Map;f.forEach((c,d)=>{b.set(c,M[d])}),u=c=>c.layerType?b.get(c.layerType)??s:s}const v=await Y(e.url);return await m(t,u,l,v)}return o==="Scene Service"&&e.url&&(l=await P(e,l,i)),T(l)>0?await m(t,u,l):await Q(t,u)}async function Q(t,a){var o,n;const{portalItem:r}=t;if(!(r!=null&&r.url))return;const e=await C(r.url);e&&m(t,a,{layers:(o=e.layers)==null?void 0:o.map(g),tables:(n=e.tables)==null?void 0:n.map(g)})}async function m(t,a,r,e){var i;let o=r.layers||[];const n=r.tables||[];if(((i=t.portalItem)==null?void 0:i.type)==="Feature Collection"?(o.forEach((s,l)=>{var u;s.id=l,((u=s==null?void 0:s.layerDefinition)==null?void 0:u.type)==="Table"&&n.push(s)}),o=o.filter(s=>{var l;return((l=s==null?void 0:s.layerDefinition)==null?void 0:l.type)!=="Table"})):(o.reverse(),n.reverse()),o.forEach(s=>{const l=e==null?void 0:e(s);if(l||!e){const u=I(t,a(s),r,s,l);t.add(u)}}),n.length){const s=await O.FeatureLayer();n.forEach(l=>{const u=e==null?void 0:e(l);if(u||!e){const y=I(t,s,r,l,u);t.tables.add(y)}})}}function I(t,a,r,e,o){const n=t.portalItem,i={portalItem:n.clone(),layerId:e.id};e.url!=null&&(i.url=e.url);const s=new a(i);if("sourceJSON"in s&&(s.sourceJSON=o),s.type!=="subtype-group"&&(s.sublayerTitleMode="service-name"),n.type==="Feature Collection"){const l={origin:"portal-item",portal:n.portal||F.getDefault()};s.read(e,l);const u=r.showLegend;u!=null&&s.read({showLegend:u},l)}return s}async function S(t,a,r){if(t.supportsData===!1)return;const e=t.instance,o=e.portalItem;if(!o)return;let n=null;try{n=await o.fetchData("json",r)}catch{}if(W(e)){let i=null;const s=await U(o,n,a);if((n!=null&&n.layers||n!=null&&n.tables)&&s>0){if(e.layerId==null){const l=$(n);e.layerId=e.type==="subtype-group"?l==null?void 0:l[0]:j(n)}i=V(n,e),i&&n.showLegend!=null&&(i.showLegend=n.showLegend)}return s>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),i}return n}async function U(t,a,r){var n,i,s,l;if(a!=null&&a.layers&&(a!=null&&a.tables))return T(a);const e=D(t.url);if(!e)return 1;const o=await r.fetchServiceMetadata(e.url.path).catch(()=>null);return(((n=a==null?void 0:a.layers)==null?void 0:n.length)??((i=o==null?void 0:o.layers)==null?void 0:i.length)??0)+(((s=a==null?void 0:a.tables)==null?void 0:s.length)??((l=o==null?void 0:o.tables)==null?void 0:l.length)??0)}function V(t,a){var o,n;const{layerId:r}=a,e=((o=t.layers)==null?void 0:o.find(i=>i.id===r))||((n=t.tables)==null?void 0:n.find(i=>i.id===r));return e&&X(e,a)?e:null}function W(t){return t.type!=="stream"&&"layerId"in t}function X(t,a){return!(a.type==="feature"&&"layerType"in t&&t.layerType==="SubtypeGroupLayer"||a.type==="subtype-group"&&!("layerType"in t))}async function Y(t){const{layersJSON:a}=await k(t);if(!a)return null;const r=[...a.layers,...a.tables];return e=>r.find(o=>o.id===e.id)}export{le as load};
