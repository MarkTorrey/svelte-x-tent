import{W as t,X as i,Y as C,jE as U,gQ as J,da as T,B as k,fY as h,f$ as W,ev as Y,cm as X,V as D,c9 as H,g8 as L,g9 as Q,aq as j,jK as I,dv as V,d8 as P,dj as G,F as z,dc as y,gq as B,dl as Z,gr as f,a1 as A,gc as M}from"./index-BdDnxAOC.js";import"./UniqueValueRenderer-BWPFapkt.js";import{m as K,u as ee}from"./jsonUtils-B03p0wkk.js";import{S as te}from"./MultiOriginJSONSupport-BxqyqD-M.js";import{y as re,u as ie}from"./clientSideDefaults-D1QYHY7E.js";import{v as oe,W as se,z as ae,Y as ne,S as pe}from"./wfsUtils-DKKRi19U.js";import{d as le}from"./FeatureSet-BSxK7X-2.js";import{e as de}from"./CustomParametersMixin-AjotzixX.js";import{c as ue}from"./FeatureEffectLayer-BvH28EDx.js";import{c as me}from"./FeatureReductionLayer-BVPeBmyG.js";import{b as ye}from"./OperationalLayer-EPpXepzU.js";import{p as ce}from"./OrderedLayer-B2P-3Rdt.js";import{j as fe}from"./PortalLayer-DVe9srog.js";import{f as he}from"./RefreshableLayer-DdxF085B.js";import{l as ge}from"./TemporalLayer-CQypAb8m.js";import{c as we,p as ve,d as Fe,b as xe,l as be,s as Oe,y as Se}from"./commonProperties-BBSEfxbj.js";import{s as Ie}from"./fieldProperties-CBBpMM_Y.js";import{C as Re,n as Ce}from"./labelingInfo-C81qEnrv.js";import{p as Te}from"./popupUtils-CYXwczcX.js";import"./ColorStop-D1flJukn.js";import"./colorRamps-feXPP0Fe.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CGgEbm3F.js";import"./jsonUtils-DM4hoWoB.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-D8VmJ7nq.js";import"./LRUCache-CSFO1iZh.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./utils-DpS7XCOa.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BIIdN1xY.js";import"./heatmapUtils-BQROikav.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./geojson-V7yWxdTz.js";import"./date-DLgTylpo.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./xmlUtils-CtUoQO7q.js";import"./FeatureEffect-DVNjjsKx.js";import"./FeatureFilter-mttTrSds.js";import"./FeatureReductionSelection-DsrBapHO.js";import"./featureLayerUtils-Cr_P5BEF.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-NW2XP7xS.js";import"./portalItemUtils-knUv3sqD.js";import"./TimeInfo-Kiz4nH72.js";import"./labelUtils-CE2jIVKQ.js";let d=class extends U{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=re(!1,!1),this.type="wfs",this.refresh=J(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const s=await this.queryFeaturesJSON(e,r);return le.fromJSON(s)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:s.count,extent:T.fromJSON(s.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async _createLoadOptions(e){var O,S;const{url:r,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:u,maxRecordCount:m,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new k("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await oe(r,{customParameters:s,...e}));const q=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),l=q?await se(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:s,signal:e==null?void 0:e.signal}):{...ae(a??[]),geometryType:u,name:n,namespaceUri:p,spatialReference:c,swapXY:v},$=ne(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),_=h.toJSON(l.geometryType),{operations:b}=this.wfsCapabilities,E=b.GetFeature.url,N=b.GetFeature.outputFormat;return{customParameters:s,featureType:$,fields:((O=l.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:l.geometryField,geometryType:_,getFeatureUrl:E,getFeatureOutputFormat:N,maxRecordCount:m,maxPageCount:g,maxTotalRecordCount:w,objectIdField:l.objectIdField,spatialReference:(S=l.spatialReference)==null?void 0:S.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[r,s]=await W([this._createLoadOptions(e),Y("WFSSourceWorker",{...e,strategy:X("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=r.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(a,e);for(const m of u.warnings)D.getLogger(this.layer).warn("#load()",`${m.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:m});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:H},extent:u.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:ie(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],d.prototype,"capabilities",void 0),t([i({constructOnly:!0})],d.prototype,"layer",void 0),t([i()],d.prototype,"sourceJSON",void 0),t([i()],d.prototype,"type",void 0),t([i()],d.prototype,"wfsCapabilities",void 0),d=t([C("esri.layers.graphics.sources.WFSSource")],d);var x;const R=Ie();let o=x=class extends ce(de(me(ue(L(ge(he(Q(ye(fe(te(M))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:m,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new x({customParameters:r,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:m,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),I(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,s){const n=e.filter(p=>p.name!==pe);this.geometryField&&n.unshift(new P({name:this.geometryField,alias:this.geometryField,type:"geometry"})),G(s,n.map(p=>p.toJSON()),r)}get parsedUrl(){return z(this.url)}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Te(this,e)}createQuery(){const e=new y({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:r,timeExtent:s}=this;return e.timeExtent=r!=null&&s!=null?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,r){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){var r;return(r=this.fieldsIndex)==null?void 0:r.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],o.prototype,"capabilities",null),t([i({type:String})],o.prototype,"copyright",void 0),t([i({readOnly:!0})],o.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),t([i(B("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i({type:String})],o.prototype,"displayField",void 0),t([i(we)],o.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),t([i({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),t([Z("fields")],o.prototype,"writeFields",null),t([i(R.fieldsIndex)],o.prototype,"fieldsIndex",void 0),t([i({type:T,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),t([i()],o.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],o.prototype,"geometryType",void 0),t([i({type:String})],o.prototype,"id",void 0),t([i(ve)],o.prototype,"labelsVisible",void 0),t([i({type:[Re],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ce},write:!0}})],o.prototype,"labelingInfo",void 0),t([i(Fe)],o.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:String})],o.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),t([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxRecordCount",void 0),t([i({type:f})],o.prototype,"maxPageCount",void 0),t([i({type:f})],o.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),t([i(xe)],o.prototype,"opacity",void 0),t([i(R.outFields)],o.prototype,"outFields",void 0),t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i(be)],o.prototype,"popupEnabled",void 0),t([i({type:A,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([i({types:K,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ee,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),t([i(Oe)],o.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],o.prototype,"source",void 0),t([i({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i(Se)],o.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),t([i()],o.prototype,"wfsCapabilities",null),o=x=t([C("esri.layers.WFSLayer")],o);const Ct=o;export{Ct as default};