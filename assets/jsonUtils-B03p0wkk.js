import{W as i,X as r,dx as q,a5 as b,gr as ue,Y as $,T as pe,cs as ye,ct as ce,V as P,bJ as Y,cV as de,B as he,lC as me,pZ as fe,a8 as p,au as ge,p_ as L,dl as K,gz as be,p$ as ve,ay as W,aG as we,fA as O,aL as X,ax as te,q0 as Se,kZ as ie,a4 as xe,lG as $e,dB as je}from"./index-BdDnxAOC.js";import{v as A,p as D,j as _e,n as Ie,c as Ve,b as Ee,d as Re,m as De,A as se,z as re}from"./UniqueValueRenderer-BWPFapkt.js";import{e as Me}from"./LRUCache-CSFO1iZh.js";import{Z as Ne}from"./FieldsIndex-DdufUIvd.js";import{y as Pe}from"./OverrideHelper-cJgBvMlU.js";import{J as Te,R as qe}from"./utils-DpS7XCOa.js";import{a as Ce,e as Fe,c as Le}from"./heatmapUtils-BQROikav.js";import{a as Oe}from"./ColorStop-D1flJukn.js";var H;let T=H=class extends q{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new H({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([r({type:b,json:{type:[ue],default:null,write:!0}})],T.prototype,"color",void 0),i([r({type:Number,json:{write:!0}})],T.prototype,"ratio",void 0),T=H=i([$("esri.renderers.support.HeatmapColorStop")],T);const C=T,Q="esri.renderers.support.DictionaryLoader",Ae={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let oe=class{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new Me(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){var V;let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(d){if(pe(d))return this._dictionaryPromise=null,null}const c=(V=this._dictionaryVersion)==null?void 0:V.greaterEqual(4,0),a={};if(this.fieldMap)for(const d of this._symbolFields){const n=Te(this.fieldMap[d],this._fieldIndex);if(n){const l=t.attributes[n];a[d]=c?l:l!=null?""+t.attributes[n]:""}else a[d]=""}let u=null;try{u=o==null?void 0:o(a,s)}catch{return null}if(!u||typeof u!="string"||u==="invalid")return null;const v=u.split(";"),S=[],f=[];for(let d=0;d<v.length;d++){const n=v[d];if(n){if(n.includes("po:")){const l=n.slice(3).split("|");if(l.length===3){const I=l[0],j=l[1];let x=l[2];const k="countrylabel";if(I===k&&j==="TextString"){if(this.fieldMap!=null){let g=this.fieldMap[k];g==null&&(g=k,this.fieldMap[g]=g),t.attributes[g]=x}continue}if(j==="DashTemplate")x=x.split(" ").map(g=>Number(g));else if(j==="Color"){const g=new b(x).toRgba();x=[g[0],g[1],g[2],255*g[3]]}else x=Number(x);f.push({primitiveName:I,propertyName:j,value:x,defaultValue:null})}}else if(n.includes("|")){for(const l of n.split("|"))if(this._itemNames.has(l)){S.push(l);break}}else if(this._itemNames.has(n))S.push(n);else if(d===0){S.length=0;let l="Invalid_P";t.geometry!=null&&(ye(t.geometry)?l="Invalid_A":ce(t.geometry)&&(l="Invalid_L")),S.push(l);break}}}const M=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,S,f,M,s)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void P.getLogger(Q).error("no valid URL!");const s=Y(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,de()]);if(!o)throw this._dictionaryPromise=null,new he("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:c,dictionary_version:a,expression:u,itemsNames:v}=o,S=u;let f=!1;a&&(this._dictionaryVersion=me.parse(a),f=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(v),this._symbolFields=c.symbol;const M={};if(this.config){const n=this.config;for(const l in n)M[l]=n[l]}if(c.configuration)for(const n of c.configuration)M.hasOwnProperty(n.name)||(M[n.name]=n.value);const V=[];if(t!=null&&t.fields&&this.fieldMap)for(const n in this.fieldMap){const l=this.fieldMap[n],I=t.fields.filter(j=>j.name.toLowerCase()===(l==null?void 0:l.toLowerCase()));I.length>0&&V.push({...I[0],type:f?I[0].type:"esriFieldTypeString"})}V.length>0&&(this._fieldIndex=new Ne(V));const d=fe(S,t!=null?t.spatialReference:null,V,M).then(n=>{const l={scale:0};return(I,j)=>{if(n==null)return null;const x=n.repurposeFeature({geometry:null,attributes:I});return l.scale=j!=null?j.scale??void 0:void 0,n.evaluate({$feature:x,$view:l},n.services)}}).catch(n=>(P.getLogger(Q).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(t,s,o,c,a){const u=new Array(s.length);for(let f=0;f<s.length;f++)u[f]=this._getSymbolPart(s[f],a);let v=await Promise.all(u);const S=this.fieldMap;if(S){v=p(v);for(const f of v)Pe.applyDictionaryTextOverrides(f,t,S,this._fieldIndex,qe(f))}return new ge({data:ke(v,o,c)})}async _getSymbolPart(t,s){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(u=>u.data);const c=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),a=Y(c,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,a),a.finally(()=>this._ongoingRequests.delete(t));try{const u=await a;return this._symbolCache.put(t,u.data),u.data}catch(u){throw u}}};function ke(e,t,s){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const c of e){const a=c;if(a.effects!=null)for(const u of a.symbolLayers)u.effects==null?u.effects=a.effects:u.effects.unshift(...a.effects);o.symbolLayers.unshift(...a.symbolLayers)}}return s&&(o.callout=Ae),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var z;let w=z=class extends A(D){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new oe(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,o){o!=null&&o.origin||super.writeVisualVariables(e,t,s,o)}clone(){return new z({config:p(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:p(this.fieldMap),url:p(this.url),visualVariables:p(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await L(e,t,this.scaleExpression);for(const s in this.fieldMap){const o=this.fieldMap[s];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([r({type:oe})],w.prototype,"_loader",null),i([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],w.prototype,"config",void 0),i([r({type:Object,json:{write:!0}})],w.prototype,"fieldMap",void 0),i([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],w.prototype,"scaleExpression",void 0),i([K("scaleExpression")],w.prototype,"writeData",null),i([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],w.prototype,"scaleExpressionTitle",void 0),i([r({type:String,json:{write:!0}})],w.prototype,"url",void 0),i([K("visualVariables")],w.prototype,"writeVisualVariables",null),w=z=i([$("esri.renderers.DictionaryRenderer")],w);const He=w;var B;let _=B=class extends q{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(P.getLogger(this).error(".field: field must be a string value"),null):ve(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new B({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:b,json:{type:[Number],write:!0}})],_.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"field",void 0),i([be("field")],_.prototype,"castField",null),i([r({type:String,json:{write:!0}})],_.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"valueExpression",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"valueExpressionTitle",void 0),_=B=i([$("esri.renderers.support.AttributeColorInfo")],_);const ne=_;var J;let F=J=class extends q{constructor(){super(...arguments),this.unit=null}clone(){return new J({unit:this.unit})}};i([r({type:String,json:{write:!0}})],F.prototype,"unit",void 0),F=J=i([$("esri.renderers.support.DotDensityLegendOptions")],F);const ze=F;var U;let h=U=class extends A(D){constructor(e){super(e),this.attributes=null,this.backgroundColor=new b([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new W,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new we({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new U({attributes:p(this.attributes),backgroundColor:p(this.backgroundColor),dotBlendingEnabled:p(this.dotBlendingEnabled),dotShape:p(this.dotShape),dotSize:p(this.dotSize),dotValue:p(this.dotValue),legendOptions:p(this.legendOptions),outline:p(this.outline),referenceScale:p(this.referenceScale),seed:p(this.seed),visualVariables:p(this.visualVariables),authoringInfo:p(this.authoringInfo)})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(s=>s.field||s.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes??[])s.valueExpression&&await L(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[ne],json:{write:!0}})],h.prototype,"attributes",void 0),i([r({type:b,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([r({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([r({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([r({type:ze,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([r({type:W,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([O({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=U=i([$("esri.renderers.DotDensityRenderer")],h);const Be=h;let N=class extends X(q){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([r({type:String,json:{write:!0}})],N.prototype,"minLabel",void 0),i([r({type:String,json:{write:!0}})],N.prototype,"maxLabel",void 0),i([r({type:String,json:{write:!0}})],N.prototype,"title",void 0),N=i([$("esri.renderers.support.HeatmapLegendOptions")],N);var Z;function ee(e){if(e!=null){const{maxDensity:t,minDensity:s,radius:o}=e;if(t!=null||s!=null||o!=null){const{blurRadius:c,maxPixelIntensity:a,minPixelIntensity:u,...v}=e;return v}}return e}let y=Z=class extends D{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new C({ratio:0,color:new b("rgba(255, 140, 0, 0)")}),new C({ratio:.75,color:new b("rgba(255, 140, 0, 1)")}),new C({ratio:.9,color:new b("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return ee(e)}get blurRadius(){return Ce(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",Fe(e)),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(Le**2*this.blurRadius**4)}read(e,t){e=ee(e),super.read(e,t)}getSymbol(){return new te}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const s=this.field,o=this.valueExpression;s&&typeof s=="string"&&Se(e,t,s),o&&typeof o=="string"&&await L(e,t,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new Z({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:p(this.colorStops),field:this.field,legendOptions:p(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:_e,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],y.prototype,"authoringInfo",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"blurRadius",null),i([r({type:[C],json:{write:!0}})],y.prototype,"colorStops",void 0),i([r({type:String,json:{write:!0}})],y.prototype,"field",void 0),i([r({type:N,json:{write:!0}})],y.prototype,"legendOptions",void 0),i([r({type:Number,json:{write:!0}})],y.prototype,"maxDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"maxPixelIntensity",null),i([r({type:Number,json:{write:!0}})],y.prototype,"minDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"minPixelIntensity",null),i([r({type:Number,cast:ie,json:{write:!0}})],y.prototype,"radius",void 0),i([r({type:Number,range:{min:0},json:{default:0,write:!0}})],y.prototype,"referenceScale",void 0),i([O({heatmap:"heatmap"})],y.prototype,"type",void 0),i([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],y.prototype,"valueExpression",void 0),i([r({type:String})],y.prototype,"valueExpressionTitle",void 0),i([r({readOnly:!0})],y.prototype,"_pixelIntensityToDensity",null),y=Z=i([$("esri.renderers.HeatmapRenderer")],y);const le=y;let R=class extends X(q){constructor(){super(...arguments),this.color=new b([0,0,0,0]),this.label=null,this.threshold=0}};i([r({type:b,json:{write:!0}})],R.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],R.prototype,"label",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],R.prototype,"threshold",void 0),R=i([$("esri.renderers.support.OthersCategory")],R);const Je={base:Ve,key:"type",typeMap:{size:Ee,opacity:Re}};let m=class extends A(X(D)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new b([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new R,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){var e;return new te({size:this.size?this.size/2+(((e=this.outline)==null?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(xe)}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes)s.valueExpression&&await L(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[ne],json:{write:!0}})],m.prototype,"attributes",void 0),i([r(Ie)],m.prototype,"backgroundFillSymbol",void 0),i([r({type:b,json:{write:!0}})],m.prototype,"defaultColor",void 0),i([r({type:String,json:{write:!0}})],m.prototype,"defaultLabel",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"holePercentage",void 0),i([r({type:R,json:{write:!0}})],m.prototype,"othersCategory",void 0),i([r({type:Oe,json:{write:!0}})],m.prototype,"legendOptions",void 0),i([r({type:W,json:{default:null,write:!0}})],m.prototype,"outline",void 0),i([r({type:Number,cast:ie,json:{write:!0}})],m.prototype,"size",void 0),i([O({pieChart:"pie-chart"})],m.prototype,"type",void 0),i([r({types:[Je]})],m.prototype,"visualVariables",void 0),m=i([$("esri.renderers.PieChartRenderer")],m);const Ue=m;var G;let E=G=class extends A(D){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(s=>s.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new G({description:this.description,label:this.label,symbol:p(this.symbol),visualVariables:p(this.visualVariables),authoringInfo:p(this.authoringInfo)})}};i([r({type:String,json:{write:!0}})],E.prototype,"description",void 0),i([r({type:String,json:{write:!0}})],E.prototype,"label",void 0),i([r(De)],E.prototype,"symbol",void 0),i([O({simple:"simple"})],E.prototype,"type",void 0),E=G=i([$("esri.renderers.SimpleRenderer")],E);const ae=E,Ze={key:"type",base:D,typeMap:{heatmap:le,simple:ae,"unique-value":se,"class-breaks":re,"dot-density":Be,dictionary:He,"pie-chart":Ue},errorContext:"renderer"},pt={key:"type",base:D,typeMap:{simple:ae,"unique-value":se,"class-breaks":re,heatmap:le},errorContext:"renderer",validate:Ge};function Ge(e){switch(e.type){case"simple":return We(e);case"unique-value":return Xe(e);case"class-breaks":return Ye(e);case"heatmap":return e}}function We(e){if(e.symbol)return e;P.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Xe(e){const t=e.uniqueValueInfos,s=t==null?void 0:t.filter(({symbol:o,label:c},a)=>(o||P.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${a}] ${c}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=s),e}function Ye(e){const t=e.classBreakInfos,s=t==null?void 0:t.filter(({symbol:o,label:c},a)=>(o||P.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${a}] ${c}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=s),e}function yt(e,t){return Qe(e,null,t)}const Ke=$e({types:Ze});function Qe(e,t,s){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(s!=null&&s.messages&&s.messages.push(new je("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:s})),null):Ke(e,t,s):null}export{C as l,Ze as m,Qe as o,ae as p,yt as t,pt as u};