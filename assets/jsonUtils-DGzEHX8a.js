import{V as i,W as r,bI as C,aA as f,gs as ue,X as v,R as pe,U as R,ah as X,bi as ye,A as de,mS as ce,aG as l,db as he,mT as A,bF as K,eR as me,mU as ge,ax as Z,ay as ee,fg as F,b_ as L,iq as be,gB as fe,aw as te,mV as we,iN as ie,mW as ve,a3 as xe,hu as Se,c2 as $e}from"./index-Cek7aMWl.js";import{v as H,p as P,j as je,n as _e,A as se,w as re}from"./UniqueValueRenderer-DoQjGRE5.js";import{e as Ie}from"./LRUCache-pAqnhOsq.js";import{r as Ve}from"./Version-DJsGRXWf.js";import{Z as De}from"./FieldsIndex-Bjg3eA_S.js";import{y as Re}from"./OverrideHelper-ClkM4CZ1.js";import{B as Pe,j as Ee}from"./utils-BE8joJvK.js";import{a as Ne,e as Ce,c as Te}from"./heatmapUtils-NTzr8GZp.js";var k;let T=k=class extends C{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new k({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([r({type:f,json:{type:[ue],default:null,write:!0}})],T.prototype,"color",void 0),i([r({type:Number,json:{write:!0}})],T.prototype,"ratio",void 0),T=k=i([v("esri.renderers.support.HeatmapColorStop")],T);const q=T,Q="esri.renderers.support.DictionaryLoader",qe={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class oe{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new Ie(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){var I;let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(y){if(pe(y))return this._dictionaryPromise=null,null}const d=(I=this._dictionaryVersion)==null?void 0:I.since(4,0),a={};if(this.fieldMap)for(const y of this._symbolFields){const n=Pe(this.fieldMap[y],this._fieldIndex);if(n){const c=t.attributes[n];a[y]=d?c:c!=null?""+t.attributes[n]:""}else a[y]=""}let u=null;try{u=o==null?void 0:o(a,s)}catch{return null}if(!u||typeof u!="string"||u==="invalid")return null;const x=u.split(";"),j=[],m=[];for(const y of x)if(y)if(y.includes("po:")){const n=y.substr(3).split("|");if(n.length===3){const c=n[0],S=n[1];let b=n[2];if(S==="DashTemplate")b=b.split(" ").map(_=>Number(_));else if(S==="Color"){const _=new f(b).toRgba();b=[_[0],_[1],_[2],255*_[3]]}else b=Number(b);m.push({primitiveName:c,propertyName:S,value:b,defaultValue:null})}}else if(y.includes("|")){for(const n of y.split("|"))if(this._itemNames.has(n)){j.push(n);break}}else this._itemNames.has(y)&&j.push(y);const E=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,j,m,E,s)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void R.getLogger(Q).error("no valid URL!");const s=X(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,ye()]);if(!o)throw this._dictionaryPromise=null,new de("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:d,dictionary_version:a,expression:u,itemsNames:x}=o,j=u;let m=!1;a&&(this._dictionaryVersion=Ve.parse(a),m=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(x),this._symbolFields=d.symbol;const E={};if(this.config){const n=this.config;for(const c in n)E[c]=n[c]}if(d.configuration)for(const n of d.configuration)E.hasOwnProperty(n.name)||(E[n.name]=n.value);const I=[];if(t!=null&&t.fields&&this.fieldMap)for(const n in this.fieldMap){const c=this.fieldMap[n],S=t.fields.filter(b=>b.name.toLowerCase()===(c==null?void 0:c.toLowerCase()));S.length>0&&I.push({...S[0],type:m?S[0].type:"esriFieldTypeString"})}I.length>0&&(this._fieldIndex=new De(I));const y=ce(j,t!=null?t.spatialReference:null,I,E).then(n=>{const c={scale:0};return(S,b)=>{if(n==null)return null;const _=n.repurposeFeature({geometry:null,attributes:S});return c.scale=b!=null?b.scale??void 0:void 0,n.evaluate({$feature:_,$view:c},n.services)}}).catch(n=>(R.getLogger(Q).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=y,y}async _cimPartsToCIMSymbol(t,s,o,d,a){const u=new Array(s.length);for(let m=0;m<s.length;m++)u[m]=this._getSymbolPart(s[m],a);let x=await Promise.all(u);const j=this.fieldMap;if(j){x=l(x);for(const m of x)Re.applyDictionaryTextOverrides(m,t,j,this._fieldIndex,Ee(m))}return new he({data:Me(x,o,d)})}async _getSymbolPart(t,s){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(u=>u.data);const d=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),a=X(d,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,a),a.finally(()=>this._ongoingRequests.delete(t));try{const u=await a;return this._symbolCache.put(t,u.data),u.data}catch(u){throw u}}}function Me(e,t,s){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.symbolLayers=[];for(const d of e){const a=d;o.symbolLayers.unshift(...a.symbolLayers)}}return s&&(o.callout=qe),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var B;let w=B=class extends H(P){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new oe(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,o){o!=null&&o.origin||super.writeVisualVariables(e,t,s,o)}clone(){return new B({config:l(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:l(this.fieldMap),url:l(this.url),visualVariables:l(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await A(e,t,this.scaleExpression);for(const s in this.fieldMap){const o=this.fieldMap[s];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([r({type:oe})],w.prototype,"_loader",null),i([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],w.prototype,"config",void 0),i([r({type:Object,json:{write:!0}})],w.prototype,"fieldMap",void 0),i([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],w.prototype,"scaleExpression",void 0),i([K("scaleExpression")],w.prototype,"writeData",null),i([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],w.prototype,"scaleExpressionTitle",void 0),i([r({type:String,json:{write:!0}})],w.prototype,"url",void 0),i([K("visualVariables")],w.prototype,"writeVisualVariables",null),w=B=i([v("esri.renderers.DictionaryRenderer")],w);const Oe=w;var z;let $=z=class extends C{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(R.getLogger(this).error(".field: field must be a string value"),null):ge(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new z({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:f,json:{type:[Number],write:!0}})],$.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],$.prototype,"field",void 0),i([me("field")],$.prototype,"castField",null),i([r({type:String,json:{write:!0}})],$.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],$.prototype,"valueExpression",void 0),i([r({type:String,json:{write:!0}})],$.prototype,"valueExpressionTitle",void 0),$=z=i([v("esri.renderers.support.AttributeColorInfo")],$);const ne=$;var U;let M=U=class extends C{constructor(){super(...arguments),this.unit=null}clone(){return new U({unit:this.unit})}};i([r({type:String,json:{write:!0}})],M.prototype,"unit",void 0),M=U=i([v("esri.renderers.support.DotDensityLegendOptions")],M);const Ae=M;var J;let h=J=class extends H(P){constructor(e){super(e),this.attributes=null,this.backgroundColor=new f([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new Z,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new ee({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new J({attributes:l(this.attributes),backgroundColor:l(this.backgroundColor),dotBlendingEnabled:l(this.dotBlendingEnabled),dotShape:l(this.dotShape),dotSize:l(this.dotSize),dotValue:l(this.dotValue),legendOptions:l(this.legendOptions),outline:l(this.outline),referenceScale:l(this.referenceScale),seed:l(this.seed),visualVariables:l(this.visualVariables),authoringInfo:l(this.authoringInfo)})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(s=>s.field||s.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes??[])s.valueExpression&&await A(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[ne],json:{write:!0}})],h.prototype,"attributes",void 0),i([r({type:f,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([r({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([r({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([r({type:Ae,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([r({type:Z,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([F({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=J=i([v("esri.renderers.DotDensityRenderer")],h);const Fe=h;let N=class extends L(C){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([r({type:String,json:{write:!0}})],N.prototype,"minLabel",void 0),i([r({type:String,json:{write:!0}})],N.prototype,"maxLabel",void 0),i([r({type:String,json:{write:!0}})],N.prototype,"title",void 0),N=i([v("esri.renderers.support.HeatmapLegendOptions")],N);var G;function Y(e){if(e!=null){const{maxDensity:t,minDensity:s,radius:o}=e;if(t!=null||s!=null||o!=null){const{blurRadius:d,maxPixelIntensity:a,minPixelIntensity:u,...x}=e;return x}}return e}let p=G=class extends P{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new q({ratio:0,color:new f("rgba(255, 140, 0, 0)")}),new q({ratio:.75,color:new f("rgba(255, 140, 0, 1)")}),new q({ratio:.9,color:new f("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return Y(e)}get blurRadius(){return Ne(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",Ce(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(Te**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||be(this).getDefaultOrigin()==="user"&&(this._warnedProps[e]=!0,fe(()=>{ve(R.getLogger(this),e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})}))}read(e,t){e=Y(e),super.read(e,t)}getSymbol(){return new te}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const s=this.field,o=this.valueExpression;s&&typeof s=="string"&&we(e,t,s),o&&typeof o=="string"&&await A(e,t,o)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new G({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:l(this.colorStops),field:this.field,legendOptions:l(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:je,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"authoringInfo",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"blurRadius",null),i([r({type:[q],json:{write:!0}})],p.prototype,"colorStops",void 0),i([r({type:String,json:{write:!0}})],p.prototype,"field",void 0),i([r({type:N,json:{write:!0}})],p.prototype,"legendOptions",void 0),i([r({type:Number,json:{write:!0}})],p.prototype,"maxDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"maxPixelIntensity",null),i([r({type:Number,json:{write:!0}})],p.prototype,"minDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"minPixelIntensity",null),i([r({type:Number,cast:ie,json:{write:!0}})],p.prototype,"radius",void 0),i([r({type:Number,range:{min:0},json:{default:0,write:!0}})],p.prototype,"referenceScale",void 0),i([F({heatmap:"heatmap"})],p.prototype,"type",void 0),i([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],p.prototype,"valueExpression",void 0),i([r({type:String})],p.prototype,"valueExpressionTitle",void 0),i([r({readOnly:!0})],p.prototype,"_pixelIntensityToDensity",null),p=G=i([v("esri.renderers.HeatmapRenderer")],p);const le=p;let D=class extends L(C){constructor(){super(...arguments),this.color=new f([0,0,0,0]),this.label=null,this.threshold=0}};i([r({type:f,json:{write:!0}})],D.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],D.prototype,"label",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],D.prototype,"threshold",void 0),D=i([v("esri.renderers.support.OthersCategory")],D);let O=class extends L(C){constructor(){super(...arguments),this.title=null}};i([r({type:String,json:{write:!0}})],O.prototype,"title",void 0),O=i([v("esri.renderers.support.PieChartLegendOptions")],O);let g=class extends H(L(P)){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new f([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new D,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var t;return new te({size:this.size?this.size/2+(((t=this.outline)==null?void 0:t.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(xe)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((t,s)=>t+s.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((t,s)=>t+JSON.stringify(s),"")}async collectRequiredFields(t,s){await this.collectVVRequiredFields(t,s);for(const o of this.attributes)o.valueExpression&&await A(t,s,o.valueExpression),o.field&&t.add(o.field)}};i([r({type:[ne],json:{write:!0}})],g.prototype,"attributes",void 0),i([r({type:ee,json:{default:null,write:!0}})],g.prototype,"backgroundFillSymbol",void 0),i([r({type:f,json:{write:!0}})],g.prototype,"defaultColor",void 0),i([r({type:String,json:{write:!0}})],g.prototype,"defaultLabel",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],g.prototype,"holePercentage",void 0),i([r({type:D,json:{write:!0}})],g.prototype,"othersCategory",void 0),i([r({type:O,json:{write:!0}})],g.prototype,"legendOptions",void 0),i([r({type:Z,json:{default:null,write:!0}})],g.prototype,"outline",void 0),i([r({type:Number,cast:ie,json:{write:!0}})],g.prototype,"size",void 0),i([F({pieChart:"pie-chart"})],g.prototype,"type",void 0),g=i([v("esri.renderers.PieChartRenderer")],g);const Le=g;var W;let V=W=class extends H(P){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(s=>s.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new W({description:this.description,label:this.label,symbol:l(this.symbol),visualVariables:l(this.visualVariables),authoringInfo:l(this.authoringInfo)})}};i([r({type:String,json:{write:!0}})],V.prototype,"description",void 0),i([r({type:String,json:{write:!0}})],V.prototype,"label",void 0),i([r(_e)],V.prototype,"symbol",void 0),i([F({simple:"simple"})],V.prototype,"type",void 0),V=W=i([v("esri.renderers.SimpleRenderer")],V);const ae=V,He={key:"type",base:P,typeMap:{heatmap:le,simple:ae,"unique-value":se,"class-breaks":re,"dot-density":Fe,dictionary:Oe,"pie-chart":Le},errorContext:"renderer"},ot={key:"type",base:P,typeMap:{simple:ae,"unique-value":se,"class-breaks":re,heatmap:le},errorContext:"renderer",validate:ke};function ke(e){switch(e.type){case"simple":return Be(e);case"unique-value":return ze(e);case"class-breaks":return Ue(e);case"heatmap":return e}}function Be(e){if(e.symbol)return e;R.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function ze(e){const t=e.uniqueValueInfos,s=t==null?void 0:t.filter(({symbol:o,label:d},a)=>(o||R.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${a}] ${d}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=s),e}function Ue(e){const t=e.classBreakInfos,s=t==null?void 0:t.filter(({symbol:o,label:d},a)=>(o||R.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${a}] ${d}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=s),e}function nt(e,t){return Ge(e,null,t)}const Je=Se({types:He});function Ge(e,t,s){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(s!=null&&s.messages&&s.messages.push(new $e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:s})),null):Je(e,t,s):null}export{q as l,He as m,Ge as o,ae as p,nt as t,ot as u};