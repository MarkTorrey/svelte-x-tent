const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-C2U-E8Yy.js","./index-BdDnxAOC.js","./index-BvbKYc24.css","./EditBusLayer-j7Kkv1qk.js","./infoFor3D-CxdEiWhp.js"])))=>i.map(i=>d[i]);
import{W as r,X as i,Y as F,jE as $,gQ as j,da as O,B as m,dZ as w,ev as J,cm as N,fY as E,V as f,g8 as R,g9 as q,aq as I,b$ as T,jK as g,dv as P,F as v,_ as k,dc as h,gq as D,d8 as Z,a1 as G,gc as Q}from"./index-BdDnxAOC.js";import"./UniqueValueRenderer-BWPFapkt.js";import{m as C,u as z}from"./jsonUtils-B03p0wkk.js";import{S as L}from"./MultiOriginJSONSupport-BxqyqD-M.js";import{y as V}from"./clientSideDefaults-D1QYHY7E.js";import{d as W}from"./FeatureSet-BSxK7X-2.js";import{e as A}from"./CustomParametersMixin-AjotzixX.js";import{c as B}from"./FeatureEffectLayer-BvH28EDx.js";import{c as U}from"./FeatureReductionLayer-BVPeBmyG.js";import{b as M}from"./OperationalLayer-EPpXepzU.js";import{p as Y}from"./OrderedLayer-B2P-3Rdt.js";import{j as K}from"./PortalLayer-DVe9srog.js";import{f as X}from"./RefreshableLayer-DdxF085B.js";import{l as H}from"./TemporalLayer-CQypAb8m.js";import{T as ee,c as te,u as re,p as ie,d as oe,f as se,l as ne,s as ae,y as le}from"./commonProperties-BBSEfxbj.js";import{p as pe}from"./FeatureTemplate-Dyrv7v8V.js";import{s as ue}from"./fieldProperties-CBBpMM_Y.js";import{C as de,n as he}from"./labelingInfo-C81qEnrv.js";import{p as ce}from"./popupUtils-CYXwczcX.js";import"./ColorStop-D1flJukn.js";import"./colorRamps-feXPP0Fe.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CGgEbm3F.js";import"./jsonUtils-DM4hoWoB.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-D8VmJ7nq.js";import"./LRUCache-CSFO1iZh.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./utils-DpS7XCOa.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BIIdN1xY.js";import"./heatmapUtils-BQROikav.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./FeatureEffect-DVNjjsKx.js";import"./FeatureFilter-mttTrSds.js";import"./FeatureReductionSelection-DsrBapHO.js";import"./featureLayerUtils-Cr_P5BEF.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-NW2XP7xS.js";import"./portalItemUtils-knUv3sqD.js";import"./TimeInfo-Kiz4nH72.js";import"./labelUtils-CE2jIVKQ.js";let p=class extends ${constructor(){super(...arguments),this.type="geojson",this.refresh=j(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>W.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:O.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new m("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],l=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)l.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:l,deletes:n}).then(({extent:a,timeExtent:u,featureEditResults:c})=>(this.sourceJSON.extent=a,u&&(this.sourceJSON.timeInfo.timeExtent=[u.start,u.end]),this._createEditsResult(c)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?w.fromExtent(t.extent):t}async _startWorker(e){this._connection=await J("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:s,hasZ:n,geometryType:l,objectIdField:a,url:u,timeInfo:c,customParameters:S}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",_={url:u,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:E.toJSON(l),hasZ:n,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:x?null:s&&s.toJSON()},d=await this._connection.invoke("load",_,{signal:e});for(const y of d.warnings)f.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});d.featureErrors.length&&f.getLogger(this.layer).warn("#load()",`Encountered ${d.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:d.featureErrors}),this.sourceJSON=d.layerDefinition,this.capabilities=V(this.sourceJSON.hasZ,!0)}};r([i()],p.prototype,"capabilities",void 0),r([i()],p.prototype,"type",void 0),r([i({constructOnly:!0})],p.prototype,"layer",void 0),r([i()],p.prototype,"sourceJSON",void 0),p=r([F("esri.layers.graphics.sources.GeoJSONSource")],p);const b=ue();let o=class extends Y(A(U(B(R(H(q(X(M(K(L(Q))))))))))){constructor(e){super(e),this.attributeTableTemplate=null,this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=I.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(T).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),P(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await k(()=>import("./editingSupport-C2U-E8Yy.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return ce(this,e)}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(h.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(h.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(h.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(h.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i(ee)],o.prototype,"attributeTableTemplate",void 0),r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i(D("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(te)],o.prototype,"elevationInfo",void 0),r([i({type:[Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(b.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:O,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:E.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(re)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(ie)],o.prototype,"labelsVisible",void 0),r([i({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:he},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(oe)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(se)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i(b.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(ne)],o.prototype,"popupEnabled",void 0),r([i({type:G,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:C,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:z}}}})],o.prototype,"renderer",null),r([i(ae)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:I})],o.prototype,"spatialReference",void 0),r([i({type:[pe]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(le)],o.prototype,"url",null),o=r([F("esri.layers.GeoJSONLayer")],o);const at=o;export{at as default};
