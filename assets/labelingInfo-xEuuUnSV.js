import{V as i,W as s,bD as g,bF as u,X as S,bI as P,bC as $,iN as I,iO as j,iP as B,iQ as N,aG as h,A as D,U as O}from"./index-Cek7aMWl.js";import{E as d,u as V,_ as G,x as M,f as F,g as R}from"./labelUtils-C4iNx9oT.js";import{a as z}from"./defaults-fOuW8gwA.js";import{i as x}from"./jsonUtils-C2l4B_cE.js";var f;let p=f=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?d(r.value):e}writeExpression(e,r,n){this.value!=null&&(e=d(this.value)),e!=null&&(r[n]=e)}clone(){return new f({expression:this.expression,title:this.title,value:this.value})}};i([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),i([g("expression",["expression","value"])],p.prototype,"readExpression",null),i([u("expression")],p.prototype,"writeExpression",null),i([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),i([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=f=i([S("esri.layers.support.LabelExpressionInfo")],p);const L=p;var m;const b=new $({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function v(e,r,n){return{enabled:!N(n==null?void 0:n.layer)}}function E(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function U(e){return(e==null?void 0:e.type)==="map-image"}function A(e){var r,n;return!!U(e)&&!!((n=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&n.supportsArcadeExpressionForLabeling)}function J(e){return E(e)||A(e==null?void 0:e.layer)}let l=m=class extends P{static evaluateWhere(e,r){const n=(t,o,a)=>{switch(o){case"=":return t==a;case"<>":return t!=a;case">":return t>a;case">=":return t>=a;case"<":return t<a;case"<=":return t<=a}return!1};try{if(e==null)return!0;const t=e.split(" ");if(t.length===3)return n(r[t[0]],t[1],t[2]);if(t.length===7){const o=n(r[t[0]],t[1],t[2]),a=t[3],c=n(r[t[4]],t[5],t[6]);switch(a){case"AND":return o&&c;case"OR":return o||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=z,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const n=r.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,r,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=V(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const t=G(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}}e!=null&&(r[n]=e)}writeLabelExpressionInfo(e,r,n,t){if(e==null&&this.labelExpression!=null&&E(t))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(t);o.expression&&(r[n]=o)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return M(this)}getLabelExpressionArcade(){return F(this)}getLabelExpressionSingleField(){return R(this)}hash(){return JSON.stringify(this)}clone(){return new m({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:h(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:h(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};i([s({type:String,json:{write:!0}})],l.prototype,"name",void 0),i([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:v}}}}})],l.prototype,"allowOverrun",void 0),i([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:v}}}}})],l.prototype,"deconflictionStrategy",void 0),i([s({type:String,json:{write:{overridePolicy(e,r,n){return this.labelExpressionInfo&&(n==null?void 0:n.origin)==="service"&&A(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],l.prototype,"labelExpression",void 0),i([g("labelExpression")],l.prototype,"readLabelExpression",null),i([u("labelExpression")],l.prototype,"writeLabelExpression",null),i([s({type:L,json:{write:{overridePolicy:(e,r,n)=>J(n)?{allowNull:!0}:{enabled:!1}}}})],l.prototype,"labelExpressionInfo",void 0),i([u("labelExpressionInfo")],l.prototype,"writeLabelExpressionInfo",null),i([s({type:b.apiValues,json:{type:b.jsonValues,read:b.read,write:b.write}})],l.prototype,"labelPlacement",void 0),i([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"labelPosition",void 0),i([s({type:Number})],l.prototype,"maxScale",void 0),i([u("maxScale")],l.prototype,"writeMaxScale",null),i([s({type:Number})],l.prototype,"minScale",void 0),i([u("minScale")],l.prototype,"writeMinScale",null),i([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:v}}}}})],l.prototype,"repeatLabel",void 0),i([s({type:Number,cast:I,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:v}}}}})],l.prototype,"repeatLabelDistance",void 0),i([s({types:j,json:{origins:{"web-scene":{types:B,write:x,default:null}},write:x,default:null}})],l.prototype,"symbol",void 0),i([s({type:Boolean,json:{write:!0}})],l.prototype,"useCodedValues",void 0),i([s({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=m=i([S("esri.layers.support.LabelClass")],l);const W=l,y=()=>O.getLogger("esri.layers.support.labelingInfo"),k=/\[([^[\]]+)\]/gi;function T(e,r,n){return e?e.map(t=>{var a;const o=new W;if(o.read(t,n),o.labelExpression){const c=r.fields||((a=r.layerDefinition)==null?void 0:a.fields)||this.fields;o.labelExpression=o.labelExpression.replaceAll(k,(w,C)=>`[${H(C,c)}]`)}return o}):null}function H(e,r){if(!r)return e;const n=e.toLowerCase();for(let t=0;t<r.length;t++){const o=r[t].name;if(o.toLowerCase()===n)return o}return e}const Q={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function Y(e,r){const n=[];for(const t of e){const o=t.labelPlacement,a=Q[r];if(!t.symbol)return y().warn("No ILabelClass symbol specified."),[];if(!a)return y().error(new D("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),[];if(a.includes(o))n.push(t);else{const c=a[0];o&&y().warn(`Found invalid label placement type ${o} for ${r}. Defaulting to ${c}`);const w=t.clone();w.labelPlacement=c,n.push(w)}}return n}export{W as C,Y as a,T as l};
