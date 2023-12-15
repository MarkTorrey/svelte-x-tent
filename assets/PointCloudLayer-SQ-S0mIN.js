import{l as r,m as i,n as y,aN as B,bk as x,e8 as v,ah as u,fc as _,br as b,bZ as N,aZ as V,j_ as C,s as l,dM as E,O as L,im as T,io as O,k as F,ip as A,q as k,bq as D,bi as K,ff as M}from"./index-eSY5-lt-.js";import{m as G}from"./MultiOriginJSONSupport-vWhNPmo6.js";import{i as U}from"./APIKeyMixin-D4ISDt7k.js";import{l as Z}from"./ArcGISService-ZNLoHKjp.js";import{u as z}from"./OperationalLayer-3ukEE_2z.js";import{j as H}from"./PortalLayer-rHgWFtbi.js";import{E as J,P}from"./SceneService-DIfgkpyR.js";import{y as Q,f as W,c as X}from"./commonProperties-Z7yNesJQ.js";import{s as Y}from"./fieldProperties-54Gh-jYe.js";import{c as q,d as ee,b as te,a as re}from"./PointCloudUniqueValueRenderer-O1DDyFXW.js";import{p as ie}from"./popupUtils-7Uqan4_S.js";import"./portalItemUtils-svYaQgLA.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-5srUkGVJ.js";import"./saveUtils-Bh_hg79v.js";import"./resourceUtils-N0TRohcb.js";import"./FieldsIndex-_W1Us-oq.js";import"./UnknownTimeZone-iVS1S_Kf.js";import"./LegendOptions-x-5oaDqO.js";import"./ColorStop-y1faJUUg.js";let f=class extends B{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1}})],f.prototype,"type",void 0),f=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],f);const g=f;var w;let d=w=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new w({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([i({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([i({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=w=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const oe=d;var $;let h=$=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new $({field:this.field,includedReturns:u(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],h.prototype,"type",void 0),h=$=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],h);const se=h;var I;let p=I=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new I({field:this.field,mode:this.mode,values:u(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=I=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const ne=p,ae={key:"type",base:g,typeMap:{value:ne,bitfield:oe,return:se}};var S;let m=S=class extends q{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new S({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],m.prototype,"type",void 0),r([i({type:String,json:{write:!0}})],m.prototype,"field",void 0),m=S=r([y("esri.renderers.PointCloudRGBRenderer")],m);const le=m,R={key:"type",base:q,typeMap:{"point-cloud-class-breaks":ee,"point-cloud-rgb":le,"point-cloud-stretch":te,"point-cloud-unique-value":re},errorContext:"renderer"},j=Y();let o=class extends J(Z(z(H(_(G(U(M))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t!=null&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new b;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new b({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){N("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(V).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=ie(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=E(this.parsedUrl.path,`./statistics/${s.key}`);return L(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(c=>c.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(P.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;T(F.getLogger(this),O("Point cloud layers","absolute-height",e)),T(F.getLogger(this),A("Point cloud layers",e))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(Q)],o.prototype,"popupEnabled",void 0),r([i({type:k,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[ae],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[b]})],o.prototype,"fields",void 0),r([i(j.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([D("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(j.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(W)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(X)],o.prototype,"legendEnabled",void 0),r([i({types:R,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:R},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([K("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([y("esri.layers.PointCloudLayer")],o);const je=o;export{je as default};
