import{aL as B,dx as g,W as e,X as r,Y as y,jM as h,dw as R,fA as d,i2 as D,V as O,dj as j,p8 as M,aq as x,dC as N,dD as V,p9 as I,pa as Z,pb as L}from"./index-BdDnxAOC.js";import{R as S}from"./queryUtils-DQi3qLST.js";import"./json-Wa8cmqdu.js";let l=class extends B(g){constructor(i){super(i),this.alias=null,this.expression=null,this.field=null,this.responseType=null}};e([r({type:String,json:{write:!0}})],l.prototype,"alias",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"expression",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"responseType",void 0),l=e([y("esri.rest.support.BinParametersAttributes")],l);const w=l;l.from=h(l);const W=new R({naturalLog:"natural-log",squareRoot:"square-root"});let s=class extends B(g){constructor(i){super(i),this.expression=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitByAttributes=null,this.stackByAttributes=null,this.transformation=null}};e([r({type:String,json:{write:!0}})],s.prototype,"expression",void 0),e([r({type:String,json:{name:"onField",write:!0}})],s.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"firstDayOfWeek",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"hideUpperBound",void 0),e([r({type:w,json:{write:{target:{splitBy:{type:String},splitByField:{type:String},splitByAlias:{type:String}},writer:(t,i)=>{t.field!=null&&(i.splitByField=t.field),t.expression!=null&&(i.splitBy=t.expression),t.alias!=null&&(i.splitByAlias=t.alias)}},read:{source:["splitBy","splitByField","splitByAlias"],reader:(t,i)=>new w({field:i.splitByField,expression:i.splitBy,alias:i.splitByAlias})}}})],s.prototype,"splitByAttributes",void 0),e([r({type:w,json:{write:{target:{stackBy:{type:String},stackByField:{type:String},stackByAlias:{type:String},jsonStyle:{type:String}},writer:(t,i)=>{t.field!=null&&(i.stackByField=t.field),t.expression!=null&&(i.stackBy=t.expression),t.alias!=null&&(i.stackByAlias=t.alias),t.responseType!=null&&(i.jsonStyle=t.responseType)},overridePolicy(){var t,i;return{enabled:((t=this.stackByAttributes)==null?void 0:t.field)!=null||((i=this.stackByAttributes)==null?void 0:i.expression)!=null}}},read:{source:["stackBy","stackByField","stackByAlias","jsonStyle"],reader:(t,i)=>new w({field:i.stackByField,expression:i.stackBy,alias:i.stackByAlias,responseType:i.jsonStyle})}}})],s.prototype,"stackByAttributes",void 0),e([d(W)],s.prototype,"transformation",void 0),s=e([y("esri.rest.support.BinParametersBase")],s);const f=s,_=D()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),T="percent-of-total",z="field",q=t=>{let i=class extends t{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let n=this._get("normalizationType");const v=!!this.normalizationField,b=this.normalizationTotal!=null;return v||b?(n=v&&z||b&&T||null,v&&b&&O.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):n!==z&&n!==T||(n=null),n}set normalizationType(n){this._set("normalizationType",n)}};return e([r({type:String,json:{name:"parameters.normalizationField",write:!0}})],i.prototype,"normalizationField",void 0),e([r({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],i.prototype,"normalizationMaxValue",void 0),e([r({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],i.prototype,"normalizationMinValue",void 0),e([r({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],i.prototype,"normalizationTotal",void 0),e([d(_,{name:"parameters.normalizationType"})],i.prototype,"normalizationType",null),i=e([y("esri.rest.support.NormalizationBinParametersMixin")],i),i};function $(t,i,n){j(n,t instanceof Date?t.getTime():t,i)}let p=class extends q(f){constructor(i){super(i),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};e([r({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],p.prototype,"bins",void 0),e([r({json:{name:"parameters.end",write:{writer:$}}})],p.prototype,"end",void 0),e([r({json:{name:"parameters.start",write:{writer:$}}})],p.prototype,"start",void 0),e([d({autoIntervalBin:"auto-interval"},{readOnly:!0})],p.prototype,"type",void 0),p=e([y("esri.rest.support.AutoIntervalBinParameters")],p);const H=p;p.from=h(p);const U=D()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let m=class extends B(g){constructor(i){super(i),this.value=null,this.units=null}};e([r({type:Number,json:{name:"number",write:!0}})],m.prototype,"value",void 0),e([d(U,{name:"unit"})],m.prototype,"units",void 0),m=e([y("esri.rest.support.DateBinTimeInterval")],m);const A=m;m.from=h(m);function k(t,i,n){j(n,typeof t=="string"?t:t==null?void 0:t.getTime(),i)}function F(t,i){const n=t.parameters[i];return n?typeof n=="string"?n:new Date(n):null}let a=class extends f{constructor(i){super(i),this.end=null,this.interval=null,this.offset=null,this.start=null,this.type="date"}};e([r({cast:t=>t?typeof t=="string"?t:new Date(t):null,json:{name:"parameters.end",read:{reader:(t,i)=>F(i,"end")},write:{writer:k}}})],a.prototype,"end",void 0),e([r({type:A,json:{name:"parameters",write:!0}})],a.prototype,"interval",void 0),e([r({type:A,json:{name:"parameters.offset",write:!0}})],a.prototype,"offset",void 0),e([r({cast:t=>t?typeof t=="string"?t:new Date(t):null,json:{name:"parameters.start",read:{reader:(t,i)=>F(i,"start")},write:{writer:k}}})],a.prototype,"start",void 0),e([d({dateBin:"date"},{readOnly:!0})],a.prototype,"type",void 0),a=e([y("esri.rest.support.DateBinParameters")],a);const C=a;a.from=h(a);function Q(t){return t[0]instanceof Date}function X(t,i,n){j(n,t&&Q(t)?t.map(v=>v.getTime()):t,i)}let c=class extends f{constructor(i){super(i),this.boundaries=null,this.type="fixed-boundaries"}};e([r({json:{name:"parameters.boundaries",write:{writer:X}}})],c.prototype,"boundaries",void 0),e([d({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],c.prototype,"type",void 0),c=e([y("esri.rest.support.FixedBoundariesBinParameters")],c);const Y=c;c.from=h(c);function P(t,i,n){j(n,t instanceof Date?t.getTime():t,i)}let u=class extends q(f){constructor(t){super(t),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};e([r({json:{name:"parameters.end",write:{writer:P}}})],u.prototype,"end",void 0),e([r({type:Number,json:{name:"parameters.interval",write:!0}})],u.prototype,"interval",void 0),e([r({json:{name:"parameters.start",write:{writer:P}}})],u.prototype,"start",void 0),e([d({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],u.prototype,"type",void 0),u=e([y("esri.rest.support.FixedIntervalBinParameters")],u);const E=u;u.from=h(u);const G=new R({asc:"ascending",desc:"descending"}),J={base:f,key:"type",typeMap:{"auto-interval":H,date:C,"fixed-boundaries":Y,"fixed-interval":E}};let o=class extends B(g){constructor(t){super(t),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(t){this._set("outTimeZone",t),t&&!M(t)&&O.getLogger(this).warn("#outTimeZone",`the parsed value '${t}' may not be a valid IANA time zone`)}};e([r({types:J,json:{name:"bin",write:!0}})],o.prototype,"binParameters",void 0),e([d(G)],o.prototype,"binOrder",void 0),e([r({type:Boolean,json:{write:!0}})],o.prototype,"cacheHint",void 0),e([r({json:{write:!0}})],o.prototype,"datumTransformation",void 0),e([r({type:x,json:{name:"defaultSR",write:!0}})],o.prototype,"defaultSpatialReference",void 0),e([r({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],o.prototype,"distance",void 0),e([r({types:N,json:{read:V,write:!0}})],o.prototype,"geometry",void 0),e([r({type:String,json:{write:!0}})],o.prototype,"lowerBoundaryAlias",void 0),e([r({type:x,json:{name:"outSR",write:!0}})],o.prototype,"outSpatialReference",void 0),e([r({type:[I],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],o.prototype,"outStatistics",void 0),e([r({value:null,json:{name:"outTimeReference",read:{reader:t=>t.ianaTimeZone},write:{writer:(t,i,n)=>{t&&(i[n]={ianaTimeZone:t})}}}})],o.prototype,"outTimeZone",null),e([r({type:Z,json:{write:!0}})],o.prototype,"quantizationParameters",void 0),e([r({type:Boolean,json:{write:!0}})],o.prototype,"returnDistinctValues",void 0),e([d(L,{name:"spatialRel"})],o.prototype,"spatialRelationship",void 0),e([r({type:String,json:{write:!0}})],o.prototype,"upperBoundaryAlias",void 0),e([r({type:String,json:{read:S.read,write:{writer:S.write,overridePolicy(t){return{enabled:t!=null&&this.distance!=null&&this.distance>0}}}}})],o.prototype,"units",void 0),e([r({type:String,json:{write:!0}})],o.prototype,"where",void 0),o=e([y("esri.rest.support.BinsQuery")],o);const lt=o;o.from=h(o);export{lt as default};