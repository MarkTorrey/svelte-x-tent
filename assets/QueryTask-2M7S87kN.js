import{bo as y,bp as _,b3 as T,l as s,m as u,bl as D,n as A,ag as w,I as Q,D as P,f1 as p,_ as a,fF as f,fG as h,s as j}from"./index-eSY5-lt-.js";import{n as q,s as L}from"./executeForIds-P5YhE_MJ.js";import{x as $}from"./query-ROhOLudR.js";import{a as J}from"./executeQueryJSON-6B7-53C9.js";import{n as N}from"./executeQueryPBF-Rksq-B8Z.js";import{d as z}from"./FeatureSet-mcxSPZVd.js";async function C(e,t,r){const o=y(e);return $(o,_.from(t),{...r}).then(c=>({count:c.data.count,extent:T.fromJSON(c.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var n;const r=this._normalizeQuery(e),o=((n=e.outStatistics)==null?void 0:n[0])!=null,c=P("featurelayer-pbf-statistics"),l=!o||c;let m;if(this.pbfSupported&&l)try{m=await N(this.url,r,t)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.pbfSupported=!1}return this.pbfSupported&&l||(m=await J(this.url,r,t)),this._normalizeFields(m.fields),m}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return z.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(a(()=>import("./meshFeatureSet-xC7Z8Sxz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return q(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return L(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([a(()=>import("./RelationshipQuery-ywbSZt88.js"),__vite__mapDeps([27,1,2]),import.meta.url),a(()=>import("./executeRelationshipQuery-w4L5nH1W.js"),__vite__mapDeps([28,1,2,29,30,31,32,33,34,35,26,27]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([a(()=>import("./RelationshipQuery-ywbSZt88.js"),__vite__mapDeps([27,1,2]),import.meta.url),a(()=>import("./executeRelationshipQuery-w4L5nH1W.js"),__vite__mapDeps([28,1,2,29,30,31,32,33,34,35,26,27]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:c}=await p(a(()=>import("./queryAttachments-SDdG9hCN.js"),__vite__mapDeps([36,1,2,29,30,31,32,33,34,35,37]),import.meta.url),t),l=y(this.url);return c(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(a(()=>import("./executeTopFeaturesQuery-BGsXMn7b.js"),__vite__mapDeps([38,1,2,39,29,30,31,32,33,34,35,26,40]),import.meta.url),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(a(()=>import("./executeForTopIds-fxp35tOt.js"),__vite__mapDeps([41,1,2,39,29,30,31,32,33,34,35,40]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(a(()=>import("./executeForTopExtents-FENlfpMP.js"),__vite__mapDeps([42,1,2,39,29,30,31,32,33,34,35,40]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(a(()=>import("./executeForTopCount-jy0eiGcg.js"),__vite__mapDeps([43,1,2,39,29,30,31,32,33,34,35,40]),import.meta.url),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:c}=r,l=f("model/gltf-binary",o)??h("glb",o),m=f("model/gltf+json",o)??h("gtlf",o);for(const n of c){if(n===l){t.formatOf3DObjects=n;break}n!==m||t.formatOf3DObjects||(t.formatOf3DObjects=n)}if(!t.formatOf3DObjects)throw new j("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:n,originY:d,originZ:S,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(n,d,S,b,F,x,O,g,V,E,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};s([u({type:D})],i.prototype,"dynamicDataSource",void 0),s([u()],i.prototype,"fieldsIndex",void 0),s([u()],i.prototype,"gdbVersion",void 0),s([u()],i.prototype,"infoFor3D",void 0),s([u({readOnly:!0})],i.prototype,"parsedUrl",null),s([u()],i.prototype,"pbfSupported",void 0),s([u()],i.prototype,"queryAttachmentsSupported",void 0),s([u()],i.prototype,"sourceSpatialReference",void 0),s([u({type:String})],i.prototype,"url",void 0),i=s([A("esri.tasks.QueryTask")],i);const K=i;export{K as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./meshFeatureSet-xC7Z8Sxz.js","./index-eSY5-lt-.js","./index-5m03CWEM.css","./MeshTransform-sCiW0N8P.js","./quat-7g9K7sUG.js","./MeshComponent-rZoIZFgK.js","./imageUtils-tXDgLQzN.js","./MeshGeoreferencedRelativeVertexSpace-5FoxqUmg.js","./georeference-IWrqLT4D.js","./spatialReferenceEllipsoidUtils-C7ZdwAmG.js","./DoubleArray-5XshLEpX.js","./MeshLocalVertexSpace-Hd9uQrLZ.js","./vec32-wV5-40u9.js","./BufferView-KywjVo63.js","./triangulationUtils-JJu18b-M.js","./earcut-wP_5WnqY.js","./Indices-bOD3sMcK.js","./deduplicate-QfgWUagS.js","./Geometry-TfLywN1e.js","./basicInterfaces-IwaMq8O_.js","./triangle-kBLwI83x.js","./lineSegment-EzA48HN-.js","./VertexAttribute-h46lBfqy.js","./doublePrecisionUtils-HJiLm-yC.js","./projectPointToVector-P8odY6kx.js","./External-DttYp5Xh.js","./FeatureSet-mcxSPZVd.js","./RelationshipQuery-ywbSZt88.js","./executeRelationshipQuery-w4L5nH1W.js","./query-ROhOLudR.js","./pbfQueryUtils-HEDqsMMp.js","./pbf-L_JjT3GM.js","./OptimizedGeometry-CbNXANBG.js","./OptimizedFeature-5RGb7-P9.js","./OptimizedFeatureSet-smVI1ez9.js","./queryZScale-ye882EvB.js","./queryAttachments-SDdG9hCN.js","./AttachmentInfo-51A6BUqb.js","./executeTopFeaturesQuery-BGsXMn7b.js","./queryTopFeatures-aIhHQyXw.js","./TopFeaturesQuery-1Hh7r5CS.js","./executeForTopIds-fxp35tOt.js","./executeForTopExtents-FENlfpMP.js","./executeForTopCount-jy0eiGcg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}