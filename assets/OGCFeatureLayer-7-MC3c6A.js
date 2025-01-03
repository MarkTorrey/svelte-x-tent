import{W as r,X as i,Y as j,jE as L,dU as b,aq as C,jO as N,B as F,g8 as U,g9 as z,jK as I,dc as O,dv as H,d8 as J,da as V,fY as $,a1 as Z,gc as W}from"./index-BdDnxAOC.js";import"./UniqueValueRenderer-BWPFapkt.js";import{m as k,u as K}from"./jsonUtils-B03p0wkk.js";import{S as Y}from"./MultiOriginJSONSupport-BxqyqD-M.js";import{R as X,x as D,C as T,P as ee,O as te,N as re,q as oe,v as ie,k as se}from"./ogcFeatureUtils-5jKzfeSm.js";import{s as pe}from"./capabilities-Y9lFlGVh.js";import{d as ne}from"./FeatureSet-BSxK7X-2.js";import{i as ae}from"./APIKeyMixin-C2GGgg_6.js";import{e as le}from"./CustomParametersMixin-AjotzixX.js";import{c as ue}from"./FeatureEffectLayer-BvH28EDx.js";import{c as de}from"./FeatureReductionLayer-BVPeBmyG.js";import{b as ce}from"./OperationalLayer-EPpXepzU.js";import{p as ye}from"./OrderedLayer-B2P-3Rdt.js";import{j as me}from"./PortalLayer-DVe9srog.js";import{f as fe}from"./RefreshableLayer-DdxF085B.js";import{l as he}from"./TemporalLayer-CQypAb8m.js";import{c as ge,p as ve,d as Se,l as Ce,s as we,y as xe}from"./commonProperties-BBSEfxbj.js";import{n as Re}from"./FeatureType-c5mpcoB0.js";import{s as be}from"./fieldProperties-CBBpMM_Y.js";import{C as Fe,n as Ie}from"./labelingInfo-C81qEnrv.js";import{p as Oe}from"./popupUtils-CYXwczcX.js";import"./ColorStop-D1flJukn.js";import"./colorRamps-feXPP0Fe.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CGgEbm3F.js";import"./jsonUtils-DM4hoWoB.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-D8VmJ7nq.js";import"./LRUCache-CSFO1iZh.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./utils-DpS7XCOa.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BIIdN1xY.js";import"./heatmapUtils-BQROikav.js";import"./featureConversionUtils-BCh95FQm.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./geojson-V7yWxdTz.js";import"./date-DLgTylpo.js";import"./clientSideDefaults-D1QYHY7E.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./sourceUtils-Cl4uPLpW.js";import"./FeatureEffect-DVNjjsKx.js";import"./FeatureFilter-mttTrSds.js";import"./FeatureReductionSelection-DsrBapHO.js";import"./featureLayerUtils-Cr_P5BEF.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-NW2XP7xS.js";import"./portalItemUtils-knUv3sqD.js";import"./TimeInfo-Kiz4nH72.js";import"./FeatureTemplate-Dyrv7v8V.js";import"./labelUtils-CE2jIVKQ.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>ne.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>X(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${b(t)}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:pe,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??D,s=T(t);return s==null?C.WGS84:new C({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[D],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:m,hasZ:f,objectIdField:P,timeInfo:h,url:q}=e,E={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:N.toJSON(m),hasZ:f??!1,objectIdField:P,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:s},g=await ee(q,c),[w,x]=await Promise.all([te(g,c),re(g,c)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new F("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=x.collections.find(({id:u})=>u===n);if(!y)throw new F("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await oe(g,c):null,R=await ie(y,E,c),B=this._getMaxRecordCount(_),A=this._getCapabilities(R.hasZ,B),Q=this._getStorageSpatialReference(y).toJSON(),G=this._getSupportedSpatialReferences(y,x),M=new RegExp(`^${b(se)}`,"i"),v={};for(const u of G){const S=T(u);S!=null&&(v[S]||(v[S]=u.replace(M,"")))}this.featureDefinition={capabilities:A,collection:y,layerDefinition:R,spatialReference:Q,supportedCrs:v}}};r([i()],d.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"type",void 0),d=r([j("esri.layers.graphics.sources.OGCFeatureSource")],d);const $e=be();let o=class extends ae(le(de(ue(U(ye(he(z(ce(me(fe(Y(W)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Oe(this,e)}createQuery(){return new O}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(m=>{var f;return m.id==l&&(s=(f=m.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(O.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ge)],o.prototype,"elevationInfo",void 0),r([i({type:[J],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i($e.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:V,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Fe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(ve)],o.prototype,"labelsVisible",void 0),r([i(Se)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(Ce)],o.prototype,"popupEnabled",void 0),r([i({type:Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:k,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:K,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(we)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[Re]})],o.prototype,"types",void 0),r([i(xe)],o.prototype,"url",void 0),o=r([j("esri.layers.OGCFeatureLayer")],o);const Pt=o;export{Pt as default};