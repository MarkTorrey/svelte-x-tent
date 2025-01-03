const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-fHzXnvYZ.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./EditBusLayer-Z0o3093x.js","./infoFor3D-DsOdlPuA.js"])))=>i.map(i=>d[i]);
import{bB as y,bC as O,A as s,_ as F,ht as P,hu as j,hv as x,hw as E,bc as m,bS as R}from"./index-Cek7aMWl.js";import{p as C}from"./jsonUtils-DGzEHX8a.js";import{A as S}from"./UniqueValueRenderer-DoQjGRE5.js";import{c as L,d as q}from"./RelationshipQuery-CWq1d8EN.js";async function _(t,e,r){e=e.clone(),t.capabilities.query.supportsMaxRecordCountFactor&&(e.maxRecordCountFactor=A(t));const n=M(t),a=t.capabilities.query.supportsPagination;e.start=0,e.num=n;let o=null;for(;;){const i=await t.source.queryFeaturesJSON(e,r);if(o==null?o=i:o.features=o.features.concat(i.features),o.exceededTransferLimit=i.exceededTransferLimit,!a||!i.exceededTransferLimit)break;e.start+=n}return o}function M(t){return A(t)*T(t)}function T(t){return t.capabilities.query.maxRecordCount||2e3}function A(t){return t.capabilities.query.supportsMaxRecordCountFactor?y.MAX_MAX_RECORD_COUNT_FACTOR:1}const U=new O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function Z(t,e,r,n){const a=await f(t);if(await b(t,e,n),!a.addAttachment)throw new s(n,"Layer source does not support addAttachment capability");return a.addAttachment(e,r)}function b(t,e,r){var o,i;const{attributes:n}=e,{objectIdField:a}=t;return(i=(o=t.capabilities)==null?void 0:o.data)!=null&&i.supportsAttachment?e?n?a&&n[a]?Promise.resolve():Promise.reject(new s(r,`feature is missing the identifying attribute ${a}`)):Promise.reject(new s(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new s(r,"A feature is required to add/delete/update attachments")):Promise.reject(new s(r,"this layer doesn't support attachments"))}async function k(t,e,r,n,a){const o=await f(t);if(await b(t,e,a),!o.updateAttachment)throw new s(a,"Layer source does not support updateAttachment capability");return o.updateAttachment(e,r,n)}async function H(t,e,r){const{applyEdits:n}=await F(()=>import("./editingSupport-fHzXnvYZ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),a=await t.load();let o=r;return a.type==="feature"&&a.infoFor3D&&e.deleteFeatures!=null&&a.globalIdField!=null&&(o={...o,globalIdToObjectId:await v(a,e.deleteFeatures,a.globalIdField)}),n(a,a.source,e,r)}async function X(t,e,r){const{uploadAssets:n}=await F(()=>import("./editingSupport-fHzXnvYZ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),a=await t.load();return n(a,a.source,e,r)}async function z(t,e,r,n){const a=await f(t);if(await b(t,e,n),!a.deleteAttachments)throw new s(n,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(e,r)}async function B(t,e,r){const n=(await t.load({signal:e==null?void 0:e.signal})).source;if(!n.fetchRecomputedExtents)throw new s(r,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(e)}async function K(t,e,r,n){var g,I;e=L.from(e),await t.load();const a=t.source,o=t.capabilities;if(!((g=o==null?void 0:o.data)!=null&&g.supportsAttachment))throw new s(n,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:d,globalIds:p,num:u,size:c,start:l,where:w}=e;if(!((I=o==null?void 0:o.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(p==null?void 0:p.length)>0||(c==null?void 0:c.length)>0||u||l||w))throw new s(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(d!=null&&d.length||p!=null&&p.length||w))throw new s(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);if(!a.queryAttachments)throw new s(n,"Layer source does not support queryAttachments capability",e);return a.queryAttachments(e)}async function W(t,e,r,n){const a=await f(t);if(!a.queryObjectIds)throw new s(n,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(y.from(e)??t.createQuery(),r)}async function Y(t,e,r,n){const a=await f(t);if(!a.queryFeatureCount)throw new s(n,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(y.from(e)??t.createQuery(),r)}async function tt(t,e,r,n){const a=await f(t);if(!a.queryExtent)throw new s(n,"Layer source does not support queryExtent capability");return a.queryExtent(y.from(e)??t.createQuery(),r)}async function et(t,e,r,n){const a=await f(t);if(!a.queryRelatedFeatures)throw new s(n,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(q.from(e),r)}async function nt(t,e,r,n){const a=await f(t);if(!a.queryRelatedFeaturesCount)throw new s(n,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(q.from(e),r)}async function rt(t){const e=t.source;if(e!=null&&e.refresh)try{const{dataChanged:r,updates:n}=await e.refresh();if(n!=null&&(t.sourceJSON={...t.sourceJSON,...n},t.read(n,{origin:"service",url:t.parsedUrl})),r)return!0}catch{}if(t.definitionExpression)try{return(await P(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function at(t){var i,d;const e=new y,r=(i=t.capabilities)==null?void 0:i.data,n=(d=t.capabilities)==null?void 0:d.query;e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,n&&(e.compactGeometryEnabled=n.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&t.returnZ!=null&&(e.returnZ=t.returnZ),r.supportsM&&t.returnM!=null&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:a,timeExtent:o}=t;return e.timeExtent=a!=null&&o!=null?o.offset(-a.value,a.unit):o||null,e.multipatchOption=t.geometryType==="multipatch"?"xyFootprint":null,e}function ot(t){const{globalIdField:e,fields:r}=t;if(e)return e;if(r){for(const n of r)if(n.type==="esriFieldTypeGlobalID")return n.name}}function it(t){const{objectIdField:e,fields:r}=t;if(e)return e;if(r){for(const n of r)if(n.type==="esriFieldTypeOID")return n.name}}function st(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}function ut(t,e){const{subtypes:r,subtypeField:n}=t;if(!e||!(r!=null&&r.length)||!n)return null;const a=e.attributes[n];return a==null?null:r.find(o=>o.code===a)}async function f(t){return(await t.load()).source}async function $(t,e){if(!m||m.findCredential(t))return;let r;try{const n=await R(t,e);n&&(r=await m.checkSignInStatus(`${n}/sharing`))}catch{}if(r)try{const n=e!=null?e.signal:null;await m.getCredential(t,{signal:n})}catch{}}async function ct(t,e,r){var a;const n=(a=t.parsedUrl)==null?void 0:a.path;n&&t.authenticationTriggerEvent===e&&await $(n,r)}function lt(t){return!D(t)&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}const h=j({types:x});function dt(t,e){var r;if(t.defaultSymbol)return(r=t.types)!=null&&r.length?new S({defaultSymbol:h(t.defaultSymbol,t,e),field:t.typeIdField,uniqueValueInfos:t.types.map(n=>({id:n.id,symbol:h(n.symbol,n,e)}))}):new C({symbol:h(t.defaultSymbol,t,e)})}function pt(t){var n,a,o;let e=(n=t.sourceJSON)==null?void 0:n.cacheMaxAge;if(!e)return!1;const r=(o=(a=t.editingInfo)==null?void 0:a.lastEditDate)==null?void 0:o.getTime();return r==null||(e*=1e3,Date.now()-r<e)}async function v(t,e,r){if(e==null)return null;const n=[],{objectIdField:a}=t;if(e.forEach(u=>{let c=null;if("attributes"in u){const{attributes:l}=u;c={globalId:l[r],objectId:l[a]!=null&&l[a]!==-1?l[a]:null}}else c={globalId:u.globalId,objectId:u.objectId!=null&&u.objectId!==-1?u.objectId:null};c.globalId!=null&&(c.objectId!=null&&c.objectId!==-1||n.push(c.globalId))}),n.length===0)return null;const o=t.createQuery();o.where=n.map(u=>`${r}='${u}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,r],o.cacheHint=!1;const i=await E(_(t,o));if(!i.ok)return null;const d=new Map,p=i.value.features;for(const u of p){const c=u.attributes[r],l=u.attributes[a];c!=null&&l!=null&&l!==-1&&d.set(c,l)}return d}function ft(t,e,r){if(!e||!r||!t)return null;const n=r.getAttribute(e);return n==null?null:t.find(a=>{const{id:o}=a;return o!=null&&o.toString()===n.toString()})??null}function D(t){var e;return((e=t.sourceJSON)==null?void 0:e.isMultiServicesView)||G(t)}function G(t){var e,r;return!!((r=(e=t.sourceJSON)==null?void 0:e.capabilities)!=null&&r.toLowerCase().split(",").map(n=>n.trim()).includes("map"))}export{Y as A,st as C,rt as E,W as F,B as I,v as J,ut as L,it as M,ft as N,tt as O,et as P,ot as R,nt as S,ct as T,dt as U,pt as V,D as Z,H as b,X as g,z as j,Z as m,K as q,lt as v,k as w,at as x,U as y};
