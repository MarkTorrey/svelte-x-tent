import{z as C,cm as v,dA as A}from"./index-BdDnxAOC.js";function t(e,s,r){return!!g(e,s,r)}function c(e,s,r){return g(e,s,r)}function g(e,s,r){return e&&e.hasOwnProperty(s)?e[s]:r}const S={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function Q(e){var r;const s=(r=e==null?void 0:e.supportedSpatialAggregationStatistics)==null?void 0:r.map(p=>p.toLowerCase());return{envelope:!!(s!=null&&s.includes("envelopeaggregate")),centroid:!!(s!=null&&s.includes("centroidaggregate")),convexHull:!!(s!=null&&s.includes("convexhullaggregate"))}}function d(e,s){var p;const r=(p=e==null?void 0:e.supportedOperationsWithCacheHint)==null?void 0:p.map(o=>o.toLowerCase());return!!(r!=null&&r.includes(s.toLowerCase()))}function f(e){var r;const s=(r=e==null?void 0:e.supportedStatisticTypes)==null?void 0:r.map(p=>p.toLowerCase());return{count:!!(s!=null&&s.includes("count")),sum:!!(s!=null&&s.includes("sum")),min:!!(s!=null&&s.includes("min")),max:!!(s!=null&&s.includes("max")),avg:!!(s!=null&&s.includes("avg")),var:!!(s!=null&&s.includes("var")),stddev:!!(s!=null&&s.includes("stddev")),percentileContinuous:!!(s!=null&&s.includes("percentile_continuous")),percentileDiscrete:!!(s!=null&&s.includes("percentile_discrete")),envelope:!!(s!=null&&s.includes("envelopeaggregate")),centroid:!!(s!=null&&s.includes("centroidaggregate")),convexHull:!!(s!=null&&s.includes("convexhullaggregate"))}}function I(e,s){return{analytics:x(e),attachment:R(e),data:F(e),metadata:B(e),operations:T(e.capabilities,e,s),query:D(e,s),queryBins:M(e),queryRelated:E(e),queryTopFeatures:w(e),editing:b(e)}}function x(e){return{supportsCacheHint:d(e.advancedQueryCapabilities,"queryAnalytics")}}function R(e){const s=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:t(e,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach(p=>{const o=S[p.name];o&&(r[o]=!!p.isEnabled)}),r}function F(e){return{isVersioned:t(e,"isDataVersioned",!1),isBranchVersioned:t(e,"isDataBranchVersioned",!1),supportsAttachment:t(e,"hasAttachments",!1),supportsM:t(e,"hasM",!1),supportsZ:t(e,"hasZ",!1)}}function B(e){return{supportsAdvancedFieldProperties:t(e,"supportsFieldDescriptionProperty",!1)}}function T(e,s,r){const p=e?e.toLowerCase().split(",").map(h=>h.trim()):[],o=r?C(r):null,y=p.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),u=p.includes("editing")&&!s.datesInUnknownTimezone;let n=u&&p.includes("create"),i=u&&p.includes("delete"),a=u&&p.includes("update");const m=p.includes("changetracking"),l=s.advancedQueryCapabilities;return u&&!(n||i||a)&&(n=i=a=!0),{supportsCalculate:t(s,"supportsCalculate",!1),supportsTruncate:t(s,"supportsTruncate",!1),supportsValidateSql:t(s,"supportsValidateSql",!1),supportsAdd:n,supportsDelete:i,supportsEditing:u,supportsChangeTracking:m,supportsQuery:y,supportsQueryAnalytics:t(l,"supportsQueryAnalytic",!1),supportsQueryAttachments:t(l,"supportsQueryAttachments",!1),supportsQueryBins:t(l,"supportsQueryBins",!1),supportsQueryTopFeatures:t(l,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:t(s,"supportsAttachmentsResizing",!1),supportsSync:p.includes("sync"),supportsUpdate:a,supportsExceedsLimitStatistics:t(s,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:t(s,"supportsAsyncConvert3D",!1)}}function D(e,s){const r=e.advancedQueryCapabilities,p=e.ownershipBasedAccessControlForFeatures,o=e.archivingInfo,y=e.currentVersion,u=s==null?void 0:s.includes("MapServer"),n=!u||y>=v("mapserver-pbf-version-support"),i=A(s),a=new Set((e.supportedQueryFormats??"").split(",").map(m=>m.toLowerCase().trim()));return{maxRecordCount:c(e,"maxRecordCount",void 0),maxRecordCountFactor:c(e,"maxRecordCountFactor",void 0),standardMaxRecordCount:c(e,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:Q(r),supportsCacheHint:t(r,"supportsQueryWithCacheHint",!1)||d(r,"query"),supportsCentroid:t(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:i,supportsDefaultSpatialReference:t(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:t(r,"supportsDisjointSpatialRel",!1),supportsDistance:t(r,"supportsQueryWithDistance",!1),supportsDistinct:t(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:t(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:n&&a.has("pbf"),supportsFullTextSearch:t(r,"supportsFullTextSearch",!1),supportsGeometryProperties:t(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:t(r,"supportsHavingClause",!1),supportsHistoricMoment:t(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:t(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:t(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:t(r,"supportsPagination",!1),supportsPercentileStatistics:t(r,"supportsPercentileStatistics",!1),supportsQuantization:t(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:t(e,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:t(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:t(p,"allowOthersToQuery",!0),supportsQueryGeometry:t(e,"supportsReturningQueryGeometry",!1),supportsResultType:t(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:t(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:t(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:t(e,"useStandardizedQueries",!1),supportsStatistics:t(r,"supportsStatistics",e.supportsStatistics),supportsTopFeaturesQuery:t(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:c(e,"tileMaxRecordCount",void 0)}}function E(e){const s=e.advancedQueryCapabilities,r=t(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:t(s,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:d(s,"queryRelated")}}function w(e){return{supportsCacheHint:d(e.advancedQueryCapabilities,"queryTopFilter")}}function M(e){const s=e?e.queryBinsCapabilities:void 0;return{supportsDate:t(s,"supportsDateBin",!1),supportsFixedInterval:t(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:t(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:t(s,"supportsFixedBoundariesBin",!1),supportedStatistics:f(s)}}function b(e){const s=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:t(e,"allowGeometryUpdates",!0),supportsGlobalId:t(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:t(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:t(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:t(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:t(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:t(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:t(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:t(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:t(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:t(r,"supportsAsyncApplyEdits",!1),zDefault:c(e,"zDefault",void 0)}}function q(e){var s;return{operations:{supportsAppend:t(e,"supportsAppend",!1),supportsCoverageQuery:((s=e==null?void 0:e.playbackInfo)==null?void 0:s.klv["0601"])??!1,supportsExportClip:t(e,"supportsExportClip",!1),supportsExportFrameset:t(e,"supportsExportFrameset",!1),supportsMensuration:t(e,"supportsMensuration",!1),supportsUpdate:t(e,"supportsUpdate",!1)}}}export{q as A,I as i};
