import{k as t,cy as x,l as s,o as j,bh as h,bl as f,m as I,bP as T,aa as d,fW as y,gI as G,aQ as k,n as B,et as L}from"./index-rwr9l75y.js";import{a as b,c as C}from"./clusterUtils-CpC7FOKC.js";import{m as F,y as z,a as D}from"./commonProperties-K0LcbBkz.js";import{t as m,p as S}from"./FeatureReductionSelection-mFV-c50N.js";import"./UniqueValueRenderer-vpcJI4tu.js";import{m as M,o as g,p as O}from"./jsonUtils-E5tmSupD.js";import{D as N}from"./featureLayerUtils-5SK4-bW3.js";import{C as V}from"./LabelClass-V8j5wui3.js";var w;const J="esri.layers.support.FeatureReductionBinning";let a=w=class extends m{constructor(o){super(o),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(o,i,r){const e=o.filter(n=>n.statisticType!=="avg_angle").map(n=>n.toJSON());T(r,e,i)}readRenderer(o,i,r){var n;const e=(n=i.drawingInfo)==null?void 0:n.renderer;return e?g(e,i,r)??void 0:N(i,r)}clone(){return new w({fields:d(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate),renderer:d(this.renderer)})}};t([x({binning:"binning"})],a.prototype,"type",void 0),t([x({geohash:"geohash"})],a.prototype,"binType",void 0),t([s({type:Number,range:{min:1,max:9},json:{write:!0}})],a.prototype,"fixedBinLevel",void 0),t([s({type:[V],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],a.prototype,"labelingInfo",void 0),t([s(F)],a.prototype,"labelsVisible",void 0),t([s({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],a.prototype,"maxScale",void 0),t([s(z)],a.prototype,"popupEnabled",void 0),t([s({type:j,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),t([s({type:[b],json:{write:!0}})],a.prototype,"fields",void 0),t([h("fields")],a.prototype,"writeFields",null),t([s({types:M,json:{write:{target:"drawingInfo.renderer"}}})],a.prototype,"renderer",void 0),t([f("renderer",["drawingInfo.renderer"])],a.prototype,"readRenderer",null),a=w=t([I(J)],a);const E=a;var v;const H="esri.layers.support.FeatureReductionCluster";function R(o){var i;return o.type==="simple"&&!((i=o.visualVariables)!=null&&i.length)}let l=v=class extends k{constructor(o){super(o),this.type="cluster",this.clusterRadius=y("80px"),this.clusterMinSize=y("12px"),this.clusterMaxSize=y("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(o,i,r){var n,p;const e=(n=i.drawingInfo)==null?void 0:n.renderer;return(p=e==null?void 0:e.authoringInfo)!=null&&p.isAutoGenerated?null:e?R(e)?null:g(e,i,r)??void 0:N(i,r)}readSymbol(o,i,r){var n,p;const e=(n=i.drawingInfo)==null?void 0:n.renderer;if((p=e==null?void 0:e.authoringInfo)!=null&&p.isAutoGenerated)return null;if(e&&R(e)){const u=g(e,i,r);return u==null?void 0:u.symbol}return null}writeSymbol(o,i,r,e){var p,u;const n=(u=(p=this.renderer)==null?void 0:p.authoringInfo)==null?void 0:u.isAutoGenerated;if(!this.renderer||n){const c=new O({symbol:o});i.drawingInfo={renderer:c.write({},e)}}}writeFields(o,i,r){const e=o.filter(n=>n.statisticType!=="avg_angle").map(n=>n.toJSON());T(r,e,i)}readFields(o,i,r){return o.filter(e=>!e.isAutoGenerated).map(e=>b.fromJSON(e))}clone(){return new v({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,fields:d(this.fields),maxScale:this.maxScale,renderer:d(this.renderer),symbol:d(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate)})}};t([s({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),t([s({type:Number,cast:o=>o==="auto"?o:y(o),json:{write:!0}})],l.prototype,"clusterRadius",void 0),t([s({type:Number,cast:y,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),t([s({type:Number,cast:y,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),t([s({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),t([s(z)],l.prototype,"popupEnabled",void 0),t([s({type:j,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),t([s({types:M,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),t([f("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),t([s({types:G})],l.prototype,"symbol",void 0),t([f("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),t([h("symbol")],l.prototype,"writeSymbol",null),t([s({type:[V],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),t([s(F)],l.prototype,"labelsVisible",void 0),t([s({type:[b],json:{write:!0}})],l.prototype,"fields",void 0),t([h("fields")],l.prototype,"writeFields",null),t([f("fields")],l.prototype,"readFields",null),l=v=t([I(H)],l);const _=l,$={key:"type",base:m,typeMap:{cluster:_,binning:E}},P={types:{key:"type",base:m,typeMap:{selection:S,cluster:_,binning:E}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:$},"portal-item":{types:$},"web-scene":{types:{key:"type",base:m,typeMap:{selection:S}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:D}}}}},ee=o=>{let i=class extends o{constructor(...r){super(...r),this.addHandles(B(()=>this.renderer,()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}},L))}set featureReduction(r){const e=this._normalizeFeatureReduction(r);this._set("featureReduction",e)}set renderer(r){}_normalizeFeatureReduction(r){var c;if((r==null?void 0:r.type)!=="cluster")return r;const e=r.clone(),n=[new b({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],p=(e.fields??[]).filter(A=>!A.isAutoGenerated);if(r.renderer&&!((c=r.renderer.authoringInfo)!=null&&c.isAutoGenerated))return e.fields=[...n,...p],e;if(r.symbol)return e.fields=[...n,...p],e.renderer=null,e;if(!this.renderer)return r;const u=C(n,this.renderer,r,null,!1);return e.fields=[...n,...p],e.renderer=u,e}};return t([s(P)],i.prototype,"featureReduction",null),i=t([I("esri.layers.mixins.FeatureReductionLayer")],i),i};export{ee as c};
