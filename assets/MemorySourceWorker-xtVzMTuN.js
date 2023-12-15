import{s as I,eB as Q,eC as Z,aq as A,ar as C,eD as F,eA as S,W as v}from"./index-eSY5-lt-.js";import{e as w,n as k,t as P}from"./featureConversionUtils-91rcTs0M.js";import{t as $,n as G}from"./objectIdUtils-GktMsX8e.js";import{m as W}from"./FeatureStore-fDdfu0NS.js";import{x as E,j as _}from"./projectionSupport-7ZBNFFZX.js";import{W as L}from"./QueryEngine-jwyOZ-jF.js";import{i as z,o as B,a as N}from"./clientSideDefaults-U4Hwip-x.js";import{I as H,f as g,p as T,d as j,w as O}from"./sourceUtils-z_rGuRYe.js";import{Z as D}from"./FieldsIndex-_W1Us-oq.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./OptimizedGeometry-CbNXANBG.js";import"./BoundsStore-vcsjlm-7.js";import"./PooledRBush-vORPUHCE.js";import"./timeSupport-S5YlMQCQ.js";import"./optimizedFeatureQueryEngineAdapter-v2zLUxFL.js";import"./json-v6EOeNTY.js";import"./LRUCache-mFQSPLKh.js";import"./WhereClause-apv-PO0T.js";import"./TimeOnly-WOAkj6tI.js";import"./UnknownTimeZone-iVS1S_Kf.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./quantizationUtils-DTwa03mn.js";import"./utils-WM7Tu82W.js";import"./heatmapUtils-QdzYLNxE.js";import"./utils-ogjc0K8k.js";import"./generateRendererUtils-3gFntpPN.js";import"./SnappingCandidate-JeTxy3r2.js";import"./defaultsJSON-x-mq3Ho7.js";import"./date-be_IQzZd.js";const U=S,J={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(h){return v(h)?h.z!=null:!!h.hasZ}function X(h){return v(h)?h.m!=null:!!h.hasM}class Oe{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),l=e.fields||[],u=e.hasM!=null?e.hasM:!!n.hasM,f=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,d=p?U:e.spatialReference||n.spatialReference,y=p?J:null,m=e.geometryType||n.geometryType,o=!m;let t=e.objectIdField||n.objectIdField,r=e.timeInfo;const c=new D(l);if(!o&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!m))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const s=c.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const b={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(b[s.name]=q)}if(r){if(r.startTimeField){const s=c.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=c.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=c.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const x=c.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??C}:null;this._createDefaultAttributes=z(b,t);const R={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:B(m),templates:N(b),extent:y,geometryType:m,objectIdField:t,fields:l,hasZ:f,hasM:u,timeInfo:r,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new L({fieldsIndex:D.fromLayerJSON({fields:l,timeInfo:r,dateFieldsTimeReference:x}),geometryType:m,hasM:u,hasZ:f,objectIdField:t,spatialReference:d,featureStore:new W({geometryType:m,hasM:u,hasZ:f}),timeInfo:r,cacheSpatialQueries:!0}),!(a!=null&&a.length))return this._nextObjectId=$,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,d),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([H(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,n,l=null,u=null,f=null;for(const p of e){const d=p.geometry;if(d!=null&&(l||(l=F(d)),u||(u=d.spatialReference),a==null&&(a=V(d)),n==null&&(n=X(d)),l&&u&&a!=null&&n!=null))break}if(i&&i.length){let p=null;i.some(d=>{const y=d.type==="esriFieldTypeOID",m=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return p=d,y||m})&&(f=p.name)}return{geometryType:l,spatialReference:u,objectIdField:f,hasM:n,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:u,spatialReference:f,featureStore:p,fieldsIndex:d}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),c=T(d,r,t.attributes,!0);c?e.featureErrors.push(c):(this._assignObjectId(r,t.attributes,!0),t.attributes=r,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,f)),y.push(t))}p.addMany(w([],y,a,l,n,u));const{fullExtent:m,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,o){const{start:t,end:r}=o;e.layerDefinition.timeInfo.timeExtent=[t,r]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:n}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),a!=null&&a.length&&this._applyUpdateEdits(l,a),n==null?void 0:n.length){for(const p of n)l.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:u,timeExtent:f}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:f,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:n,hasM:l,hasZ:u,objectIdField:f,spatialReference:p,featureStore:d,fieldsIndex:y}=this._queryEngine,m=[];for(const o of i){if(o.geometry&&n!==F(o.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(y,t,o.attributes);if(r)a.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,o.uid!=null){const c=o.attributes[f];e.uidToObjectId[o.uid]=c}if(o.geometry!=null){const c=o.geometry.spatialReference??p;o.geometry=_(O(o.geometry,c),c,p)}m.push(o),a.push(j(o.attributes[f]))}}d.addMany(w([],m,n,u,l,f))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:u,spatialReference:f,featureStore:p,fieldsIndex:d}=this._queryEngine;for(const y of i){const{attributes:m,geometry:o}=y,t=m==null?void 0:m[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const r=k(p.getFeature(t),a,l,n);if(o!=null){if(a!==F(o)){e.push(g("Incorrect geometry type."));continue}const c=o.spatialReference??f;r.geometry=_(O(o,c),c,f)}if(m){const c=T(d,r.attributes,m);if(c){e.push(c);continue}}p.add(P(r,a,l,n,u)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const n=this._queryEngine.objectIdField;a&&i&&isFinite(i[n])?e[n]=i[n]:e[n]=this._nextObjectId++}}export{Oe as default};
