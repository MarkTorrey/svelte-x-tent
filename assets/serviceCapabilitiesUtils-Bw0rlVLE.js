import{z as g,aF as A,c1 as S}from"./index-Cek7aMWl.js";function t(s,e,r){return!!h(s,e,r)}function c(s,e,r){return h(s,e,r)}function h(s,e,r){return s&&s.hasOwnProperty(e)?s[e]:r}const Q={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function v(s){var r;const e=(r=s==null?void 0:s.supportedSpatialAggregationStatistics)==null?void 0:r.map(p=>p.toLowerCase());return{envelope:!!(e!=null&&e.includes("envelopeaggregate")),centroid:!!(e!=null&&e.includes("centroidaggregate")),convexHull:!!(e!=null&&e.includes("convexhullaggregate"))}}function d(s,e){var p;const r=(p=s==null?void 0:s.supportedOperationsWithCacheHint)==null?void 0:p.map(o=>o.toLowerCase());return!!(r!=null&&r.includes(e.toLowerCase()))}function b(s,e){return{analytics:f(s),attachment:R(s),data:x(s),metadata:F(s),operations:T(s.capabilities,s,e),query:E(s,e),queryRelated:w(s),queryTopFeatures:D(s),editing:M(s)}}function f(s){return{supportsCacheHint:d(s.advancedQueryCapabilities,"queryAnalytics")}}function R(s){const e=s.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(s.advancedQueryCapabilities,"queryAttachments"),supportsResize:t(s,"supportsAttachmentsResizing",!1)};return e&&Array.isArray(e)&&e.forEach(p=>{const o=Q[p.name];o&&(r[o]=!!p.isEnabled)}),r}function x(s){return{isVersioned:t(s,"isDataVersioned",!1),supportsAttachment:t(s,"hasAttachments",!1),supportsM:t(s,"hasM",!1),supportsZ:t(s,"hasZ",!1)}}function F(s){return{supportsAdvancedFieldProperties:t(s,"supportsFieldDescriptionProperty",!1)}}function T(s,e,r){const p=s?s.toLowerCase().split(",").map(C=>C.trim()):[],o=r?g(r):null,l=p.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),u=p.includes("editing")&&!e.datesInUnknownTimezone;let a=u&&p.includes("create"),n=u&&p.includes("delete"),i=u&&p.includes("update");const y=p.includes("changetracking"),m=e.advancedQueryCapabilities;return u&&!(a||n||i)&&(a=n=i=!0),{supportsCalculate:t(e,"supportsCalculate",!1),supportsTruncate:t(e,"supportsTruncate",!1),supportsValidateSql:t(e,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:n,supportsEditing:u,supportsChangeTracking:y,supportsQuery:l,supportsQueryAnalytics:t(m,"supportsQueryAnalytic",!1),supportsQueryAttachments:t(m,"supportsQueryAttachments",!1),supportsQueryTopFeatures:t(m,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:t(e,"supportsAttachmentsResizing",!1),supportsSync:p.includes("sync"),supportsUpdate:i,supportsExceedsLimitStatistics:t(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:t(e,"supportsAsyncConvert3D",!1)}}function E(s,e){const r=s.advancedQueryCapabilities,p=s.ownershipBasedAccessControlForFeatures,o=s.archivingInfo,l=s.currentVersion,u=e==null?void 0:e.includes("MapServer"),a=!u||l>=A("mapserver-pbf-version-support"),n=S(e),i=new Set((s.supportedQueryFormats??"").split(",").map(y=>y.toLowerCase().trim()));return{maxRecordCount:c(s,"maxRecordCount",void 0),maxRecordCountFactor:c(s,"maxRecordCountFactor",void 0),standardMaxRecordCount:c(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:v(r),supportsCacheHint:t(r,"supportsQueryWithCacheHint",!1)||d(r,"query"),supportsCentroid:t(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:n,supportsDefaultSpatialReference:t(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:t(r,"supportsDisjointSpatialRel",!1),supportsDistance:t(r,"supportsQueryWithDistance",!1),supportsDistinct:t(r,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:t(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:a&&i.has("pbf"),supportsFullTextSearch:t(r,"supportsFullTextSearch",!1),supportsGeometryProperties:t(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:t(r,"supportsHavingClause",!1),supportsHistoricMoment:t(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:t(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:t(r,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:t(r,"supportsPagination",!1),supportsPercentileStatistics:t(r,"supportsPercentileStatistics",!1),supportsQuantization:t(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:t(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:t(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:t(p,"allowOthersToQuery",!0),supportsQueryGeometry:t(s,"supportsReturningQueryGeometry",!1),supportsResultType:t(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:t(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:t(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:t(s,"useStandardizedQueries",!1),supportsStatistics:t(r,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:t(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:c(s,"tileMaxRecordCount",void 0)}}function w(s){const e=s.advancedQueryCapabilities,r=t(e,"supportsAdvancedQueryRelated",!1);return{supportsPagination:t(e,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:d(e,"queryRelated")}}function D(s){return{supportsCacheHint:d(s.advancedQueryCapabilities,"queryTopFilter")}}function M(s){const e=s.ownershipBasedAccessControlForFeatures,r=s?s.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:t(s,"allowGeometryUpdates",!0),supportsGlobalId:t(s,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:t(s,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:t(s,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:t(s,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:t(s,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:t(e,"allowAnonymousToDelete",!0),supportsDeleteByOthers:t(e,"allowOthersToDelete",!0),supportsUpdateByAnonymous:t(e,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:t(e,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:t(r,"supportsAsyncApplyEdits",!1),zDefault:c(s,"zDefault",void 0)}}function q(s){var e;return{operations:{supportsAppend:t(s,"supportsAppend",!1),supportsExportClip:t(s,"supportsExportClip",!1),supportsExportFrameset:t(s,"supportsExportFrameset",!1),supportsMensuration:t(s,"supportsMensuration",!1),supportsUpdate:t(s,"supportsUpdate",!1)},query:{supportsCoverageQuery:((e=s==null?void 0:s.playbackInfo)==null?void 0:e.klv["0601"])??!1}}}export{b as a,q as g};
