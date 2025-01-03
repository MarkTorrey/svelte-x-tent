const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./meshFeatureSet-DImZuZI2.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./Mesh-DhNQKe2Y.js","./axisAngleDegrees-s-Pc0vGJ.js","./MeshComponent-DwgliqsF.js","./imageUtils-DfzNVhIJ.js","./MeshVertexAttributes-CZVfbXVy.js","./MeshTransform-4dnYKNDH.js","./triangulationUtils-WcX9UuuB.js","./earcut-DbRqQWyy.js","./DoubleArray-UXJnwWGc.js","./Indices-CDfjiMVj.js","./deduplicate-BRGImMLi.js","./projection-DfoxLsLx.js","./spatialReferenceEllipsoidUtils-DfobcDUq.js","./computeTranslationToOriginAndRotation-B1gLm2pX.js","./BufferView-D7rTj7nO.js","./vec3-BZAVlszX.js","./vec4-CB19uIrr.js","./vertexSpaceConversion-CMBtQgFR.js","./External-DDCpGaYY.js","./infoFor3D-DsOdlPuA.js","./FeatureSet-ClbNh9OS.js","./RelationshipQuery-CWq1d8EN.js","./executeRelationshipQuery-TV2hz4l8.js","./query-Dg0JyN0I.js","./pbfQueryUtils-D7UGG6Td.js","./pbf-CEYKCTdB.js","./OptimizedGeometry-vU5jWBvU.js","./OptimizedFeature-7juV2tZm.js","./OptimizedFeatureSet-Blu9Ckm7.js","./queryZScale-BXApFFgO.js","./queryAttachments-DgJpkSkJ.js","./AttachmentInfo-k_mTVEZG.js","./executeTopFeaturesQuery-C7HriVWg.js","./queryTopFeatures-C15HfwYd.js","./TopFeaturesQuery-BKhHgI5c.js","./executeForTopIds-3PHrkUWF.js","./executeForTopExtents-DkgmL2L-.js","./executeForTopCount-C8tPkdaG.js"])))=>i.map(i=>d[i]);
import{bA as _,bB as S,cx as A,V as n,W as l,hk as D,X as T,aE as N,F as Q,aF as j,fY as p,_ as u,A as f,Q as P}from"./index-Cek7aMWl.js";import{u as h,i as y}from"./infoFor3D-DsOdlPuA.js";import{s as q,a as L}from"./executeForIds-DbtIfq3g.js";import{x as $}from"./query-Dg0JyN0I.js";import{a as J}from"./executeQueryJSON-uMDcT6zK.js";import{n as z}from"./executeQueryPBF-BtoMtVDP.js";import{d as C}from"./FeatureSet-ClbNh9OS.js";async function U(e,t,r){const o=_(e),a=await $(o,S.from(t),{...r}),i=a.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:A.fromJSON(i)}}let s=class extends N{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,a=j("featurelayer-pbf-statistics"),i=!o||a;let m;if(this.pbfSupported&&i)try{m=await z(this.url,r,t)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.pbfSupported=!1}return this.pbfSupported&&i||(m=await J(this.url,r,t)),this._normalizeFields(m.fields),m}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return C.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-DImZuZI2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return q(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return L(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./RelationshipQuery-CWq1d8EN.js").then(a=>a.R),__vite__mapDeps([24,1,2]),import.meta.url),u(()=>import("./executeRelationshipQuery-TV2hz4l8.js"),__vite__mapDeps([25,1,2,26,27,28,29,30,31,32,23,24]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./RelationshipQuery-CWq1d8EN.js").then(a=>a.R),__vite__mapDeps([24,1,2]),import.meta.url),u(()=>import("./executeRelationshipQuery-TV2hz4l8.js"),__vite__mapDeps([25,1,2,26,27,28,29,30,31,32,23,24]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:a}=await p(u(()=>import("./queryAttachments-DgJpkSkJ.js"),__vite__mapDeps([33,1,2,26,27,28,29,30,31,32,34]),import.meta.url),t),i=_(this.url);return a(i,await(this.queryAttachmentsSupported?r(i,e,t):o(i,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-C7HriVWg.js"),__vite__mapDeps([35,1,2,36,26,27,28,29,30,31,32,23,37]),import.meta.url),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-3PHrkUWF.js"),__vite__mapDeps([38,1,2,36,26,27,28,29,30,31,32,37]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-DkgmL2L-.js"),__vite__mapDeps([39,1,2,36,26,27,28,29,30,31,32,37]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-C8tPkdaG.js"),__vite__mapDeps([40,1,2,36,26,27,28,29,30,31,32,37]),import.meta.url),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:a}=r,i=h("model/gltf-binary",o)??y("glb",o),m=h("model/gltf+json",o)??y("gltf",o);for(const c of a){if(c===i){t.formatOf3DObjects=c;break}c!==m||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new f("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!P(t.outSpatialReference,this.sourceSpatialReference))throw new f("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:d,originZ:x,translationX:b,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:V,rotationX:E,rotationY:I,rotationZ:v,rotationDeg:w}=r.transformFieldRoles;t.outFields.push(c,d,x,b,F,O,g,R,V,E,I,v,w)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],s.prototype,"dynamicDataSource",void 0),n([l()],s.prototype,"fieldsIndex",void 0),n([l()],s.prototype,"gdbVersion",void 0),n([l()],s.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],s.prototype,"parsedUrl",null),n([l()],s.prototype,"pbfSupported",void 0),n([l()],s.prototype,"queryAttachmentsSupported",void 0),n([l()],s.prototype,"sourceSpatialReference",void 0),n([l({type:String})],s.prototype,"url",void 0),s=n([T("esri.layers.graphics.sources.support.QueryTask")],s);const W=s;export{W as x};