import{s as h,bp as y,ag as g,cR as _,f as d,j as F,c as w}from"./index-rwr9l75y.js";import{r as S,s as E}from"./featureConversionUtils-FNM6dcN0.js";import{m as q}from"./FeatureStore-pgucVUmR.js";import{x,j as R}from"./projectionSupport-hu9_r6iQ.js";import{W as T}from"./QueryEngine-N5JNB-Wr.js";import{E as I,N as b}from"./geojson-YqBT6uXP.js";import{p as j}from"./sourceUtils-xwe5FcVW.js";import{a as C,B as k}from"./wfsUtils-CCW1WL0i.js";import{Z as P}from"./FieldsIndex-PWGCOsyk.js";import"./OptimizedGeometry-1RFAES06.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./BoundsStore-OeGFPOhv.js";import"./PooledRBush-q2FQHlPj.js";import"./timeSupport-prwk1TB4.js";import"./json-v6EOeNTY.js";import"./LRUCache-9CocD9iD.js";import"./WhereClause-eR2YrswJ.js";import"./TimeOnly-ZwWj2Vlb.js";import"./UnknownTimeZone-jfi9eEf7.js";import"./fieldType-3gjYBYno.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./quantizationUtils-Us5VtfAD.js";import"./utils-Q3wgF_60.js";import"./heatmapUtils-y_chVdwW.js";import"./utils-rjkH63q7.js";import"./generateRendererUtils-_NOHyjAQ.js";import"./date-be_IQzZd.js";import"./xmlUtils-Q_9cB30b.js";import"./Field-BSvFaGGy.js";class ue{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:u,fields:n,geometryType:i,featureType:o,objectIdField:p,customParameters:a}=e,{spatialReference:s,getFeatureSpatialReference:m}=C(r,o,e.spatialReference);this._featureType=o,this._customParameters=a,this._getFeatureUrl=r,this._getFeatureOutputFormat=u,this._getFeatureSpatialReference=m;try{await x(m,s)}catch{throw new h("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:s})}y(t);const l=P.fromLayerJSON({fields:n,dateFieldsTimeReference:n.some(f=>f.type==="esriFieldTypeDate")?{timeZoneIANA:g}:null}),c=await this._snapshotFeatures({fieldsIndex:l,geometryType:i,objectIdField:p,spatialReference:s},t.signal);return this._queryEngine=new T({fieldsIndex:l,geometryType:i,hasM:!1,hasZ:!1,objectIdField:p,spatialReference:s,timeInfo:null,featureStore:new q({geometryType:i,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new h("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=_(r=>this._snapshotFeatures(this._queryEngine,r)),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),d(r)||F.getLogger("esri.layers.WFSLayer").error(new h("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:e,geometryType:t,spatialReference:r,fieldsIndex:u},n){const i=await k(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:n});I(i,this._getFeatureSpatialReference.wkid),y(n);const o=b(i,{geometryType:t,hasZ:!1,objectIdField:e});if(!w(r,this._getFeatureSpatialReference))for(const a of o)a.geometry!=null&&(a.geometry=S(R(E(a.geometry,t,!1,!1),this._getFeatureSpatialReference,r)));let p=1;for(const a of o){const s={};j(u,s,a.attributes,!0),a.attributes=s,s[e]==null&&(a.objectId=s[e]=p++)}return o}}export{ue as default};
