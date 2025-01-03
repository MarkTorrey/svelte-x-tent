import{co as de,V as t,W as i,bD as F,gs as ce,X as p,is as ee,cp as te,U as I,ah as re,bB as he,ll as me,A as x,a2 as ge,cx as fe,bH as ie,hn as be,a0 as ve,fg as se,bC as Se,$ as v,c2 as we,ng as $e,bI as g,aG as d,nh as Oe,eq as Ie,gd as xe,a9 as Fe,er as Le,bb as je,gq as Te,gk as Z,gl as Be,gm as Ae,gg as Ee}from"./index-Cek7aMWl.js";import{m as Pe,S as qe}from"./MultiOriginJSONSupport-BlAwjy_L.js";import"./UniqueValueRenderer-DoQjGRE5.js";import{u as _e}from"./jsonUtils-DGzEHX8a.js";import oe from"./FeatureLayer-BP8nxvLb.js";import{c as q,s as Ne,b as Re,y as ke,d as Me}from"./commonProperties-DbjJOfHD.js";import{s as Ue}from"./capabilities-CAweHQni.js";import{s as Qe}from"./fieldProperties-CRKzdtOw.js";import{Z as Ce}from"./FieldsIndex-Bjg3eA_S.js";import{r as De,L as Ke,C as H}from"./SceneService-DuctP16n.js";import{p as Ve,a as Ze,y as He,m as Je}from"./I3SLayerDefinitions-idb2KRAh.js";import{p as Ge}from"./popupUtils-BYVjdumh.js";import{$ as We}from"./I3SUtil-CFL3zrhX.js";import{n as Xe,p as ze}from"./popupUtils-vPBZ24BA.js";import{i as Ye}from"./APIKeyMixin-DdhuDYwL.js";import{l as et}from"./ArcGISService-CcXrOqVK.js";import{e as tt}from"./CustomParametersMixin-DLUUPWS3.js";import{b as rt}from"./OperationalLayer-B-J5coPH.js";import{j as it}from"./PortalLayer-B7KsXAi1.js";import{s as st}from"./associatedFeatureServiceUtils-IR5ip5Hi.js";import"./ColorStop-CqMXhorb.js";import"./colorRamps-4yJNyWKx.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Cdb7Kq7r.js";import"./jsonUtils-C2l4B_cE.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Dv2EsbEO.js";import"./LRUCache-pAqnhOsq.js";import"./Version-DJsGRXWf.js";import"./OverrideHelper-ClkM4CZ1.js";import"./colorUtils-BlCLzs4t.js";import"./utils-BE8joJvK.js";import"./quantizationUtils-DeBnMDmu.js";import"./heatmapUtils-NTzr8GZp.js";import"./FeatureLayerBase-C60xzZzS.js";import"./featureLayerUtils-ChIFdxrX.js";import"./RelationshipQuery-CWq1d8EN.js";import"./LayerFloorInfo-BFRsBa1U.js";import"./Relationship-AfZQ8hC5.js";import"./serviceCapabilitiesUtils-Bw0rlVLE.js";import"./editsZScale-t2eejO0b.js";import"./queryZScale-BXApFFgO.js";import"./FeatureSet-ClbNh9OS.js";import"./EditBusLayer-Z0o3093x.js";import"./FeatureEffectLayer-B8mIeO1h.js";import"./FeatureEffect-C7S4JiNp.js";import"./FeatureReductionLayer-ChbPfE6a.js";import"./FeatureReductionSelection-C2fvQ0bE.js";import"./labelingInfo-xEuuUnSV.js";import"./labelUtils-C4iNx9oT.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-YkoaksA8.js";import"./OrderByInfo-BunYYZ3s.js";import"./RefreshableLayer-CeoHeJiI.js";import"./TemporalLayer-Ba9mHalh.js";import"./TimeInfo-DDzm1g7J.js";import"./FeatureTemplate-CEfaRdgX.js";import"./FeatureType-CDkdd-Wk.js";import"./versionUtils-CHsRo-RE.js";import"./styleUtils-CNsOzTDI.js";import"./TopFeaturesQuery-BKhHgI5c.js";import"./interfaces-CL2NbQte.js";import"./UnknownTimeZone-Cjv2gi-C.js";import"./portalItemUtils-BCfDAbUL.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-DDW18jN7.js";import"./resourceUtils-CIWNNBhE.js";import"./resourceUtils-ClC4N9I2.js";import"./saveAPIKeyUtils-DYMhPG2q.js";import"./saveUtils-Bw9bTenU.js";import"./spatialReferenceEllipsoidUtils-DfobcDUq.js";import"./I3SBinaryReader-qr-rskwW.js";import"./VertexAttribute-BnAa5VW0.js";import"./edgeUtils-CBzT16wJ.js";import"./floatRGBA-Beo2b9N5.js";import"./symbolColorUtils-4G6BTQRD.js";import"./interfaces-B8ge7Jg9.js";import"./NormalAttribute.glsl-Bd6ePXD7.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-BJjR6-FR.js";import"./computeTranslationToOriginAndRotation-B1gLm2pX.js";let y=class extends de(Pe){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([F("service","title",["alias","name"])],y.prototype,"readTitle",null),t([i()],y.prototype,"layer",void 0),t([i({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([F("service","id")],y.prototype,"readIdOnlyOnce",null),t([i(q(String))],y.prototype,"modelName",void 0),t([i(q(Boolean))],y.prototype,"isEmpty",void 0),t([i({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([i({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([i({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,J=Qe();let o=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new Ce(this.fields)}readAssociatedLayer(e,r){const s=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return s!=null&&typeof a=="number"?new oe({portalItem:s,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,s=this._fetchService(r).then(()=>{this.indexInfo=De(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,I.getLogger(this),r)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return Ge(this,e)}async _fetchService(e){const r=(await re(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a,n,c;const s=(n=(a=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:a.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ue,{query:r,data:{supportsZ:s,supportsM:a,isVersioned:n}}=e;return{query:r,data:{supportsZ:s,supportsM:a,isVersioned:n}}}createQuery(){const e=new he;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const a of s.features)a.layer=this.layer,a.sourceLayer=this;return s})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const s=me(this.fieldsIndex,await Xe(this,ze(this)));return We(this.parsedUrl.path,this.attributeStorageInfo,e,r,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const s=await this.queryCachedAttributes(e,[r]);if(!s||s.length===0)throw new x("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new ge({attributes:s[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new x("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new x("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i({type:Ve,readOnly:!0})],o.prototype,"nodePages",void 0),t([i({type:[Ze],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([i({type:[He],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([i({type:[Je],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([i({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([i({readOnly:!0})],o.prototype,"store",void 0),t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([i(J.fields)],o.prototype,"fields",void 0),t([i({readOnly:!0})],o.prototype,"fieldsIndex",null),t([i({readOnly:!0,type:oe})],o.prototype,"associatedLayer",void 0),t([F("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([i(J.outFields)],o.prototype,"outFields",void 0),t([i({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([i({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([i({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([i({readOnly:!0,type:String})],o.prototype,"customParameters",null),t([i({readOnly:!0,type:fe})],o.prototype,"fullExtent",null),t([i({readOnly:!0,type:ie})],o.prototype,"spatialReference",null),t([i({readOnly:!0})],o.prototype,"version",null),t([i({readOnly:!0,type:be})],o.prototype,"elevationInfo",null),t([i({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([i({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([i({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([i({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([i({types:_e,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i(Ne)],o.prototype,"popupEnabled",void 0),t([i({type:ve,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([i()],o.prototype,"types",null),t([i()],o.prototype,"typeIdField",null),t([i({json:{write:!1}}),se(new Se({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([i()],o.prototype,"geometryType",null),t([i()],o.prototype,"profile",null),t([i({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),t([i({readOnly:!0})],o.prototype,"statisticsInfo",void 0),o=t([p("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const _=o;var N;const G={type:v,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,s){if(e&&Array.isArray(e))return new v(e.map(a=>{const n=ot(a);if(n){const c=new n;return c.read(a,s),c}return s!=null&&s.messages&&a&&s.messages.push(new we("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:s})),null}))}let m=N=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return $e(this,e=>N.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function ot(e){return e.layerType==="group"?m:_}t([i({type:["hide","show","hide-children"],json:{write:!0}})],m.prototype,"listMode",void 0),t([i(G)],m.prototype,"sublayers",void 0),m=N=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],m),function(e){function r(s,a){s.forEach(n=>{a(n),n.type==="building-group"&&r(n.sublayers,a)})}e.sublayersProperty=G,e.readSublayers=ne,e.forEachSublayer=r}(m||(m={}));const f=m;let L=class extends g{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],L);const le=L;var R;let S=R=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([i({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=R=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const at=S;var k;const nt=v.ofType(at);let j=k=class extends g{clone(){return new k({filterTypes:d(this.filterTypes)})}};t([i({type:nt,json:{write:!0}})],j.prototype,"filterTypes",void 0),j=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],j);const lt=j;var M;const pt=v.ofType(lt);let w=M=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new M({filterBlocks:d(this.filterBlocks)})}};t([i({type:["checkbox"]})],w.prototype,"type",void 0),t([i({type:pt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const W=w;let T=class extends g{};t([i({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const E=T;var U;let B=U=class extends E{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=U=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const Q=B;var C;let $=C=class extends E{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new C({edges:d(this.edges)})}};t([se({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([i(Oe)],$.prototype,"edges",void 0),$=C=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const X=$;var D;let A=D=class extends E{constructor(){super(...arguments),this.type="x-ray"}clone(){return new D}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=D=t([p("esri.layers.support.BuildingFilterModeXRay")],A);const z=A;var K;const yt={nonNullable:!0,types:{key:"type",base:E,typeMap:{solid:Q,"wire-frame":X,"x-ray":z}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return Q.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return z.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=K=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Q,this.title=""}clone(){return new K({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([i(yt)],b.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=K=t([p("esri.layers.support.BuildingFilterBlock")],b);const ut=b;var V;const dt=v.ofType(ut);let h=V=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Ie(),this.name=null}clone(){return new V({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([i({type:dt,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:le,typeMap:{checkbox:W}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?W.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=V=t([p("esri.layers.support.BuildingFilter")],h);const ct=h;let u=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],u.prototype,"fieldName",void 0),t([i({type:String})],u.prototype,"modelName",void 0),t([i({type:String})],u.prototype,"label",void 0),t([i({type:Number})],u.prototype,"min",void 0),t([i({type:Number})],u.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],u);let O=class extends ee.LoadableMixin(te(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(I.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([i({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const pe=O,ye=v.ofType(ct),ue=d(f.sublayersProperty);var Y;const P=(Y=ue.json)==null?void 0:Y.origins;P&&(P["web-scene"]={type:[_],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P["portal-item"]={type:[_],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends Ke(et(rt(it(xe(qe(tt(Ye(Ee)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Fe({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const a=f.readSublayers(e,r,s);return f.forEachSublayer(a,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:r,context:s}){f.forEachSublayer(e,a=>a.read(r.get(a.id),s))}readSublayerOverrides(e,r){var a;const s=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?s.set(n.id,n):(a=r.messages)==null||a.push(new x("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:s,context:r}}writeSublayerOverrides(e,r,s){const a=[];f.forEachSublayer(this.sublayers,n=>{const c=n.write({},s);Object.keys(c).length>1&&a.push(c)}),a.length>0&&(r.sublayers=a)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(s=>{r.sublayers.push(d(s))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this._sublayerOverrides=s}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const a=Le((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new pe({url:a})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(je).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Te(this,e=>{f.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(H.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(H.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new x("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await st(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){I.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";Z(I.getLogger(this),Be(r,"absolute-height",e)),Z(I.getLogger(this),Ae(r,e))}};t([i({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],l.prototype,"allSublayers",void 0),t([i(ue)],l.prototype,"sublayers",void 0),t([F("service","sublayers")],l.prototype,"readSublayers",null),t([i({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([F("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([i(Re)],l.prototype,"fullExtent",void 0),t([i(ke)],l.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([i(q(ie))],l.prototype,"spatialReference",void 0),t([i(Me)],l.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([i()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Vr=l;export{Vr as default};