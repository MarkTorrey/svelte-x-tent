const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-D2MUeDZI.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{A as b,fs as he,bv as ie,bw as ae,as as $e,bi as Ee,fB as re,Q as C,ai as de,fz as X,_ as Ze,kW as je,kX as fe,kI as Be,kY as ke,aG as J,at as Le,k4 as me,a1 as He,kZ as A,g8 as ye,bJ as pe,bR as Ue,k_ as Je,cK as Ye,cJ as We,cM as Xe,cy as K,k$ as ge,c_ as Ke,cH as et,aD as tt,aS as xe,aN as st,b1 as it,aZ as at,d0 as rt}from"./index-Cek7aMWl.js";import{e as _e,h as nt,r as lt}from"./LRUCache-pAqnhOsq.js";import{o as ot}from"./featureConversionUtils-DoC7B3A2.js";import{O as ut}from"./WhereClause-BO6P4l1i.js";import{a as O,h as Z,j as z,y as ee,P as Ve,x as ne,g as M,b as ct,n as ht,S as Fe,v as G,t as dt,I as Ce,c as ft}from"./timeSupport-4nmKr68x.js";import{t as mt}from"./QueryEngineCapabilities-CTDe3LlQ.js";import{s as we}from"./quantizationUtils-DeBnMDmu.js";import{w as yt}from"./utils-XJ1T__tY.js";import{c as te,B as pt,d as Se,p as Ie,C as gt,k as xt,$ as _t,E as Ft,P as wt,U as St,T as It,v as Tt,f as Rt}from"./utils-DP5uPz0P.js";import{e as vt,t as Te}from"./SnappingCandidate-xj0n6h40.js";import{Z as bt}from"./FieldsIndex-Bjg3eA_S.js";class At{constructor(e,t){this._cache=new _e(e),this._invalidCache=new _e(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!=null)return null;try{const a=ut.create(e,t);return this._cache.put(s,a),a}catch(a){return this._invalidCache.put(s,a),null}}getError(e,t){const s=`${t.uid}:${e}`;return this._invalidCache.get(s)??null}}const Qe=new At(50,500),j="unsupported-query",ze=" as ",De=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),qe=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),$t=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...De,...qe]);function le(o,e,t={}){const s=D(e,o);if(!s){const a=Qe.getError(e,o);throw new b(j,"invalid SQL expression",{expression:e,error:a})}const i=t.expressionName||"expression";if(t.validateStandardized&&!s.isStandardized)throw new b(j,`${i} is not standard`,{expression:e});if(t.validateAggregate&&!s.isAggregate)throw new b(j,`${i} does not contain a valid aggregate function`,{expression:e});return s.fieldNames}function Et(o,e,t,s){if(!t)return!0;const i="where clause";return Q(o,e,le(o,t,{validateStandardized:!0,expressionName:i}),{expressionName:i,query:s}),!0}function Vt(o,e,t,s,i){if(!t)return!0;const a="having clause",r=le(o,t,{validateAggregate:!0,expressionName:a});Q(o,e,r,{expressionName:a,query:i});const n=D(t,o);if(!(n==null?void 0:n.getExpressions().every(u=>{var f;const{aggregateType:c,field:h}=u,m=(f=o.get(h))==null?void 0:f.name;return s.some(y=>{var I;const{onStatisticField:d,statisticType:F}=y;return((I=o.get(d))==null?void 0:I.name)===m&&F.toLowerCase().trim()===c})})))throw new b(j,"expressions in having clause should also exist in outStatistics",{having:t});return!0}function D(o,e){return o?Qe.get(o,e):null}function Me(o){return/\((.*?)\)/.test(o)?o:o.split(ze)[0]}function Ct(o){return o.split(ze)[1]}function Q(o,e,t,s={}){const i=new Map;if(Qt(i,o,e,s.allowedFieldTypes??$t,t),i.size){const a=s.expressionName??"expression";throw new b(j,`${a} contains invalid or missing fields`,{errors:Array.from(i.values()),query:s.query})}}function Qt(o,e,t,s,i){const a=i.includes("*")?[...t,...i.filter(r=>r!=="*")]:i;for(const r of a)if(e.get(r))Re(o,e,t,s,r);else try{const n=le(e,Me(r),{validateStandardized:!0});for(const l of n)Re(o,e,t,s,l)}catch(n){o.set(r,{type:"expression-error",expression:r,error:n})}}function Re(o,e,t,s,i){const a=e.get(i);a?t.has(a.name)?s!=="all"&&(s==null?void 0:s.has(a.type))===!1&&o.set(i,{type:"invalid-type",fieldName:a.name,fieldType:he.fromJSON(a.type),allowedFieldTypes:Array.from(s,r=>he.fromJSON(r))}):o.set(i,{type:"missing-field",fieldName:a.name}):o.set(i,{type:"invalid-field",fieldName:i})}let U=class{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let a=0;for(const r of i){const n=Me(r),l=this.fieldsIndex.get(n),u=l?null:D(n,s),c=l?l.name:Ct(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:c,clause:u})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){var r;const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=(r=this._fieldDataCache.get(i))==null?void 0:r.clause:s||(a=D(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a==null?void 0:a.calculateValue(e,this.featureAdapter)}getDataValues(e,t,s=!0){const i=t.normalizationType,a=t.normalizationTotal,r=this.fieldsIndex.get(t.field),n=ie(r)||ae(r),l=$e(r);return e.map(u=>{let c=t.field&&this.getFieldValue(u,t.field,this.fieldsIndex.get(t.field));if(t.field2?(c=`${te(c)}${t.fieldDelimiter}${te(this.getFieldValue(u,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(c=`${c}${t.fieldDelimiter}${te(this.getFieldValue(u,t.field3,this.fieldsIndex.get(t.field3)))}`)):typeof c=="string"&&s&&(n?c=c?new Date(c).getTime():null:l&&(c=c?yt(c):null)),i&&Number.isFinite(c)){const h=i==="field"&&t.normalizationField?this.getFieldValue(u,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;c=pt(c,i,h,a)}return c})}async getExpressionValues(e,t,s,i,a){const{arcadeUtils:r}=await Ee(),n=r.hasGeometryOperations(t);n&&await r.enableGeometryOperations();const l=r.createFunction(t),u=r.getViewInfo(s),c={fields:this.fieldsIndex.fields};return e.map(h=>{const m={attributes:this.featureAdapter.getAttributes(h),layer:c,geometry:n?{...O(i.geometryType,i.hasZ,i.hasM,this.featureAdapter.getGeometry(h)),spatialReference:s==null?void 0:s.spatialReference}:null},f=r.createExecContext(m,u,a);return r.executeFunction(l,f)})}validateItem(e,t){var s,i;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:D(t,this.fieldsIndex)}),((i=(s=this._fieldDataCache.get(t))==null?void 0:s.clause)==null?void 0:i.testFeature(e,this.featureAdapter))??!1}validateItems(e,t){var s,i;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:D(t,this.fieldsIndex)}),((i=(s=this._fieldDataCache.get(t))==null?void 0:s.clause)==null?void 0:i.testSet(e,this.featureAdapter))??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!(t!=null&&t.length))return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(e==null||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:n}=this._fieldDataCache.get(r);s.push(e[n])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}};class v{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new U(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!(t==null?void 0:t.length))return 1;const r=new Map,n=new Map,l=new Set;for(const u of i){const{statisticType:c}=u,h=c!=="exceedslimit"?u.onStatisticField:void 0;if(!n.has(h)){const f=[];for(const y of t){const d=this._getAttributeValues(e,y,r);f.push(d)}n.set(h,this._calculateUniqueValues(f,e.returnDistinctValues))}const m=n.get(h);for(const f in m){const{data:y,items:d}=m[f],F=y.join(",");s&&!e.validateItems(d,s)||l.add(F)}}return l.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;re(this.query.outSR)&&!C(t.spatialReference,this.query.outSR)?e.queryGeometry=Z({spatialReference:this.query.outSR,...z(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=Z({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const s=this.featureAdapter,i=ve(this.hasZ,this.hasM),{point:a,mode:r}=e,n=typeof e.distance=="number"?e.distance:e.distance.x,l=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),m=new be(null,0),f=new be(null,0),y={x:0,y:0,z:0};for(const d of this.items){const F=s.getGeometry(d);if(F==null)continue;const{coords:_,lengths:I}=F;if(m.coords=_,f.coords=_,e.returnEdge){let T=0;for(let p=0;p<I.length;p++){const g=I[p];for(let w=0;w<g;w++,T+=i){const x=m;if(x.coordsIndex=T,w!==g-1){const S=f;S.coordsIndex=T+i;const R=y;zt(y,a,x,S);const $=(a.x-R.x)/n,B=(a.y-R.y)/l,k=$*$+B*B;k<=1&&u.candidates.push(vt(s.getObjectId(d),h(R),Math.sqrt(k),h(x),h(S)))}}}}if(e.vertexMode!=="none"){const T=c?_.length-i:_.length;if(e.vertexMode==="all")for(let p=0;p<T;p+=i){const g=m;g.coordsIndex=p;const w=(a.x-g.x)/n,x=(a.y-g.y)/l,S=w*w+x*x;S<=1&&u.candidates.push(Te(s.getObjectId(d),h(g),Math.sqrt(S)))}else if(e.vertexMode==="ends"){const p=[0];c||p.push(_.length-i);for(const g of p){const w=m;w.coordsIndex=g;const x=(a.x-w.x)/n,S=(a.y-w.y)/l,R=x*x+S*S;R<=1&&u.candidates.push(Te(s.getObjectId(d),h(w),Math.sqrt(R)))}}}}return u.candidates.sort((d,F)=>d.distance-F.distance),u}_getPointCreator(e,t,s){const i=s==null||C(t,s)?n=>n:n=>z(n,t,s),{hasZ:a}=this,r=0;return e==="3d"?a?({x:n,y:l,z:u})=>i({x:n,y:l,z:u}):({x:n,y:l})=>i({x:n,y:l,z:r}):({x:n,y:l})=>i({x:n,y:l})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:l,scale:u,timeZone:c}=e,h=this.fieldsIndex.get(t),m=de(h)||ie(h)||ae(h),f=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:u,timeZone:c}),y=Rt({normalizationType:a,normalizationField:i,minValue:n,maxValue:l}),d={value:.5,fieldType:h==null?void 0:h.type},F=X(h)?Se({values:f,supportsNullCount:y,percentileParams:d}):Ie({values:f,minValue:n,maxValue:l,useSampleStdDev:!a,supportsNullCount:y,percentileParams:d});return gt(F,m)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domains:i,returnAllCodedValues:a,scale:r,timeZone:n}=e,l=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:s,scale:r,timeZone:n},!1),u=xt(l);return _t(u,i,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h,scale:m,timeZone:f}=e,y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:m,timeZone:f}),d=Ft(y,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h});return wt(d,n)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h,scale:m,timeZone:f}=e,y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:m,timeZone:f});return St(y,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&(t!=null&&t.length))for(const i of t.reverse()){const a=i.split(" "),r=a[0],n=this.fieldsIndex.get(r),l=!!a[1]&&a[1].toLowerCase()==="desc",u=It(n==null?void 0:n.type,l);e.sort((c,h)=>{const m=s(c,r,n),f=s(h,r,n);return u(m,f)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:m,returnZ:f,returnM:y}=e,d=h!=null&&t.length>(m||0)+h,F=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map(_=>this.fieldsIndex.get(_)));return{exceededTransferLimit:d,features:this._createFeatures(e,t),fields:F,geometryType:s,hasM:i&&y,hasZ:a&&f,objectIdFieldName:r,spatialReference:Z(u||n),transform:c&&we(c)||null}}_createFeatures(e,t){const s=new U(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:l,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:m,returnZ:f=!1,returnM:y=!1}=e,d=a&&f,F=i&&y;let _=[],I=0;const T=[...t];if(this._sortFeatures(T,r,(g,w,x)=>s.getFieldValue(g,w,x)),this.geometryType&&(l||u)){const g=we(n)??void 0,w=this.geometryType==="esriGeometryPolygon"||this.geometryType==="esriGeometryPolyline";if(l&&!u)for(const x of T){const S=this.featureAdapter.getGeometry(x),R={attributes:s.getAttributes(x),geometry:O(this.geometryType,this.hasZ,this.hasM,S,c,g,d,F)};w&&S&&!R.geometry&&(R.centroid=ee(this,this.featureAdapter.getCentroid(x,this),g)),_[I++]=R}else if(!l&&u)for(const x of T)_[I++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),g)};else for(const x of T)_[I++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),g),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),c,g,d,F)}}else for(const g of T){const w=s.getAttributes(g);w&&(_[I++]={attributes:w})}const p=h||0;if(m!=null){const g=p+m;_=_.slice(p,Math.min(_.length,g))}return _}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=ve(this.hasZ,this.hasM),n=this.featureAdapter;t=this.items.reduce((l,u)=>{const c=n.getGeometry(u);return l+(c!=null&&c.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){var T;const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,n=new Map,l=new U(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:m,resultRecordCount:f}=e,y=c==null?void 0:c.length,d=!!y,F=d?c[0]:null,_=d&&!this.fieldsIndex.get(F);for(const p of u??[]){const{outStatisticFieldName:g,statisticType:w}=p,x=p,S=w!=="exceedslimit"?p.onStatisticField:void 0,R=w==="percentile_disc"||w==="percentile_cont",$=w==="EnvelopeAggregate"||w==="CentroidAggregate"||w==="ConvexHullAggregate",B=d&&y===1&&(S===F||_)&&w==="count";if(d){if(!r.has(S)){const L=[];for(const W of c){const H=this._getAttributeValues(l,W,i);L.push(H)}r.set(S,this._calculateUniqueValues(L,!$&&l.returnDistinctValues))}const E=r.get(S);if(!E)continue;const Y=Object.keys(E);for(const L of Y){const{count:W,data:H,items:oe,itemPositions:Ne}=E[L],ue=H.join(",");if(!h||l.validateItems(oe,h)){const q=n.get(ue)||{attributes:{}};if($){q.aggregateGeometries||(q.aggregateGeometries={});const{aggregateGeometries:V,outStatisticFieldName:N}=await this._getAggregateGeometry(x,oe);q.aggregateGeometries[N]=V}else{let V=null;if(B)V=W;else{const N=this._getAttributeValues(l,S,i),ce=Ne.map(Oe=>N[Oe]);V=R&&"statisticParameters"in x?this._getPercentileValue(x,ce):this._getStatisticValue(x,ce,null,l.returnDistinctValues)}q.attributes[g]=V}let Ge=0;c.forEach((V,N)=>q.attributes[this.fieldsIndex.get(V)?V:"EXPR_"+ ++Ge]=H[N]),n.set(ue,q)}}}else if($){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:E,outStatisticFieldName:Y}=await this._getAggregateGeometry(x,this.items);t.aggregateGeometries[Y]=E}else{const E=this._getAttributeValues(l,S,i);t.attributes[g]=R&&"statisticParameters"in x?this._getPercentileValue(x,E):this._getStatisticValue(x,E,a,l.returnDistinctValues)}const k=w!=="min"&&w!=="max"||!X(this.fieldsIndex.get(S))&&!this._isAnyDateField(S)?null:(T=this.fieldsIndex.get(S))==null?void 0:T.type;s.push({name:g,alias:g,type:k||"esriFieldTypeDouble"})}const I=d?Array.from(n.values()):[t];return this._sortFeatures(I,m,(p,g)=>p.attributes[g]),f&&(I.length=Math.min(f,I.length)),{fields:s,features:I}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return de(t)||ie(t)||ae(t)||$e(t)}async _getAggregateGeometry(e,t){const{convexHull:s,union:i}=await Ze(()=>import("./geometryEngineJSON-D2MUeDZI.js").then(d=>d.g),__vite__mapDeps([0,1,2,3]),import.meta.url),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:n,spatialReference:l,geometryType:u,hasZ:c,hasM:h}=this,m=t.map(d=>O(u,c,h,n.getGeometry(d))),f=s(l,m,!0)[0],y={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const d=f?je(f):fe(i(l,m));y.aggregateGeometries={...d,spatialReference:l},y.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const d=f?Be(f):ke(fe(i(l,m)));y.aggregateGeometries={x:d[0],y:d[1],spatialReference:l},y.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(y.aggregateGeometries=f,y.outStatisticFieldName=r||"convexHull");return y}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=s!=null&&s.has(a)?s.get(a):X(this.fieldsIndex.get(a))||this._isAnyDateField(a)?Se({values:t,returnDistinct:i}):Ie({values:i?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,n),n[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:n}=i,l=this.fieldsIndex.get(s);return Tt(t,{value:r,orderBy:n,fieldType:l==null?void 0:l.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const n=i[r],l=[];for(const c of e)l.push(c[r]);const u=l.join(",");s[u]==null?s[u]={count:1,data:l,items:[n],itemPositions:[r]}:(t||s[u].count++,s[u].items.push(n),s[u].itemPositions.push(r))}return s}async _getDataValues(e,t=!0){const s=new U(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,scale:a,timeZone:r}=e;return i?s.getExpressionValues(this.items,i,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):s.getDataValues(this.items,J(e),t)}}function zt(o,e,t,s){const i=s.x-t.x,a=s.y-t.y,r=i*i+a*a,n=(e.x-t.x)*i+(e.y-t.y)*a,l=Math.min(1,Math.max(0,n/r));o.x=t.x+i*l,o.y=t.y+a*l}function ve(o,e){return o?e?4:3:e?3:2}class be{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const P="unsupported-query";async function Ae(o,{fieldsIndex:e,geometryType:t,spatialReference:s,availableFields:i}){if((o.distance??0)<0||o.geometryPrecision!=null||o.multipatchOption&&o.multipatchOption!=="xyFootprint"||o.pixelSize||o.relationParam||o.text)throw new b(P,"Unsupported query options",{query:o});return Pe(e,i,o),qt(e,i,o),Promise.all([Ve(o,t,s),ne(s,o.outSR)]).then(()=>o)}function Pe(o,e,t){const{outFields:s,orderByFields:i,returnDistinctValues:a,outStatistics:r}=t,n=r?r.map(l=>l.outStatisticFieldName&&l.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const l=" asc",u=" desc",c=i.map(h=>{const m=h.toLowerCase();return m.includes(l)?m.split(l)[0]:m.includes(u)?m.split(u)[0]:h}).filter(h=>!n.includes(h));Q(o,e,c,{expressionName:"orderByFields",query:t})}if(s&&s.length>0)Q(o,e,s,{expressionName:"outFields",query:t,allowedFieldTypes:"all"});else if(a)throw new b(P,"outFields should be specified for returnDistinctValues",{query:t});Et(o,e,t.where,t)}const Dt=new Set([...De,...qe]);function qt(o,e,t){const{outStatistics:s,groupByFieldsForStatistics:i,having:a}=t,r=i==null?void 0:i.length,n=s==null?void 0:s.length;if(a){if(!r||!n)throw new b(P,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});Vt(o,e,a,s,t)}if(n){if(!Nt(s))return;const l=s.map(u=>u.onStatisticField).filter(Boolean);Q(o,e,l,{expressionName:"onStatisticFields",query:t}),r&&Q(o,e,i,{expressionName:"groupByFieldsForStatistics",query:t});for(const u of s){const{onStatisticField:c,statisticType:h}=u;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:m}=u;if(!m)throw new b(P,"statisticParameters should be set for percentile type",{definition:u,query:t})}else o.get(c)&&h!=="count"&&h!=="min"&&h!=="max"&&Q(o,e,[c],{expressionName:`outStatistics with '${h}' statistic type`,allowedFieldTypes:Dt,query:t})}}}async function Mt(o,e,{fieldsIndex:t,geometryType:s,spatialReference:i,availableFields:a}){if((o.distance??0)<0||o.geometryPrecision!=null||o.multipatchOption||o.pixelSize||o.relationParam||o.text||o.outStatistics||o.groupByFieldsForStatistics||o.having||o.orderByFields)throw new b(P,"Unsupported query options",{query:o});return Pe(t,a,o),Promise.all([Pt(t,a,e,o),Ve(o,s,i),ne(i,o.outSR)]).then(()=>o)}async function Pt(o,e,t,s){let i=[];if(t.valueExpression){const{arcadeUtils:a}=await Ee();i=a.extractFieldNames(t.valueExpression)}if(t.field&&i.push(t.field),t.field2&&i.push(t.field2),t.field3&&i.push(t.field3),t.normalizationField&&i.push(t.normalizationField),!i.length&&!t.valueExpression)throw new b(P,"field or valueExpression is required",{params:t});Q(o,e,i,{expressionName:"statistics",query:s})}function Nt(o){return o!=null&&o.every(e=>e.statisticType!=="exceedslimit")}const Gt="unsupported-query",Ot=new nt(2e6);let Zt=0;class ts{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:mt},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new lt(Zt+++"$$",Ot)),this.fieldsIndex=Le(e.fieldsIndex)?e.fieldsIndex:bt.fromJSON(e.fieldsIndex),!e.availableFields||e.availableFields.length===1&&e.availableFields[0]==="*"?this.availableFields=new Set(this.fieldsIndex.fields.map(t=>t.name)):this.availableFields=new Set(e.availableFields.map(t=>{var s;return(s=this.fieldsIndex.get(t))==null?void 0:s.name}).filter(t=>t!=null)),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=me(this._frameTask),this.clearCache(),He(this._geometryQueryCache),this._changeHandle=me(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const s=A(t);try{return(await this._executeQuery(e,{},s)).createQueryResponse()}catch(i){if(i!==M)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const s=A(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},s)).createQueryResponseForCount()}catch(i){if(i!==M)throw i;return 0}}async executeQueryForExtent(e,t){const s=A(t),i=e.outSR;try{const a=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),r=a.size;return r?{count:r,extent:await this._getBounds(a.items,a.spatialReference,i||this.spatialReference)}:{count:0,extent:null}}catch(a){if(a===M)return{count:0,extent:null};throw a}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){const s=A(t);try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),a=i.items,r=new Set;return await this._reschedule(()=>{for(const n of a)r.add(i.featureAdapter.getObjectId(n))},s),r}catch(i){if(i===M)return new Set;throw i}}async executeQueryForSnapping(e,t){const s=A(t),{point:i,distance:a,returnEdge:r,vertexMode:n}=e;if(!r&&n==="none")return{candidates:[]};let l=J(e.query);l=await this._schedule(()=>ct(l,this.definitionExpression,this.spatialReference),s),l=await this._reschedule(()=>Ae(l,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const u=!C(i.spatialReference,this.spatialReference);u&&await ne(i.spatialReference,this.spatialReference);const c=typeof a=="number"?a:a.x,h=typeof a=="number"?a:a.y,m={xmin:i.x-c,xmax:i.x+c,ymin:i.y-h,ymax:i.y+h,spatialReference:i.spatialReference},f=u?z(m,this.spatialReference):m;if(!f)return{candidates:[]};const y=(await ye(pe(i),null,{signal:s}))[0],d=(await ye(pe(f),null,{signal:s}))[0];if(y==null||d==null)return{candidates:[]};const F=new v(await this._reschedule(()=>this._searchFeatures(se(d.toJSON())),s),l,this);await this._reschedule(()=>this._executeObjectIdsQuery(F),s),await this._reschedule(()=>this._executeTimeQuery(F),s),await this._reschedule(()=>this._executeAttributesQuery(F),s),await this._reschedule(()=>this._executeGeometryQueryForSnapping(F,s),s);const _=y.toJSON(),I=u?z(_,this.spatialReference):_,T=u?Math.max(f.xmax-f.xmin,f.ymax-f.ymin)/2:a;return F.createSnappingResponse({...e,point:I,distance:T},i.spatialReference)}async executeQueryForLatestObservations(e,t){var i;const s=A(t);if(!((i=this.timeInfo)!=null&&i.trackIdField))throw new b(Gt,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const a=await this._executeQuery(e,{},s);return await this._reschedule(()=>this._filterLatest(a),s),a.createQueryResponse()}catch(a){if(a!==M)throw a;return new v([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const i=A(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const i=A(s),{field:a,field2:r,field3:n,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:n,valueExpression:l},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const i=A(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const i=A(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=A(e);this._timeExtentPromise||(this._timeExtentPromise=ht(this.timeInfo,this.featureStore));const[s,i]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return Ue(t),{fullExtent:s,timeExtent:i}}async _getBounds(e,t,s){const i=Je(We(),Ye);await this.featureStore.forEachBounds(e,n=>Xe(i,n));const a={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:Z(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(a.zmin=i[2],a.zmax=i[5],a.hasZ=!0);const r=z(a,t,s);if(r.spatialReference=Z(s),r.xmax-r.xmin==0){const n=K(r.spatialReference);r.xmin-=n,r.xmax+=n}if(r.ymax-r.ymin==0){const n=K(r.spatialReference);r.ymin-=n,r.ymax+=n}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const n=K(r.spatialReference);r.zmin-=n,r.zmax+=n}return r}_getFullExtent(){return this._fullExtentPromise||(this._fullExtentPromise="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(e=>this._getBounds(e,this.spatialReference,this.spatialReference))),this._fullExtentPromise}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(ge)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(ge)}async _getAllFeaturesQueryEngineResult(e){return new v(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=J(e),e=await this._schedule(()=>Fe(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Ae(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,l=r==null||C(r,n.spatialReference)?n:z(n,r);if(!l)return null;const u=i||a,c=re(s)&&!C(this.spatialReference,s)&&u?async d=>this._project(d,s):d=>d,h=this.featureAdapter,m=await this._reschedule(()=>this._searchFeatures(se(l)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!m.length)return null;const d=new Set;for(const I of m)d.add(h.getObjectId(I));const F=await this._reschedule(()=>this._getAllFeatures(),t),_=await this._reschedule(async()=>{const I=await G("esriSpatialRelDisjoint",l,this.geometryType,this.hasZ,this.hasM),T=g=>!d.has(h.getObjectId(g))||I(h.getGeometry(g)),p=await this._runSpatialFilter(F,T,t);return new v(p,e,this)},t);return c(_)}if(!m.length)return new v([],e,this);if(this._canExecuteSinglePass(l,e))return c(new v(m,e,this));const f=await G("esriSpatialRelContains",l,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(m,d=>f(h.getGeometry(d)),t);return c(new v(y,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:a,spatialRel:r,returnGeometry:n,returnCentroid:l}=e,u=this.featureStore.featureSpatialReference,c=!i||u==null||C(u,i.spatialReference)?i:z(i,u),h=n||l,m=re(a)&&!C(this.spatialReference,a),f=this._geometryQueryCache&&t==null?JSON.stringify(m&&h?{originalFilterGeometry:i,spatialRelationship:r,outSpatialReference:a}:{originalFilterGeometry:i,spatialRelationship:r}):null,y=f?this._geometryQueryCache.get(f):null;if(y!=null)return new v(y,e,this);const d=async p=>(m&&h&&await this._project(p,a),f&&this._geometryQueryCache.put(f,p.items,p.items.length+1),p);if(!c)return d(t??await this._getAllFeaturesQueryEngineResult(e));const F=this.featureAdapter;let _=await this._reschedule(()=>this._searchFeatures(se(i)),s);if(r==="esriSpatialRelDisjoint"){if(!_.length)return d(t??await this._getAllFeaturesQueryEngineResult(e));const p=new Set;for(const x of _)p.add(F.getObjectId(x));const g=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),w=await this._reschedule(async()=>{const x=await G(r,c,this.geometryType,this.hasZ,this.hasM),S=$=>!p.has(F.getObjectId($))||x(F.getGeometry($)),R=await this._runSpatialFilter(g,S,s);return new v(R,e,this)},s);return d(w)}if(t!=null){const p=new rt;_=_.filter(g=>Ke(t.items,g,t.items.length,p)>=0)}if(!_.length){const p=new v([],e,this);return f&&this._geometryQueryCache.put(f,p.items,1),p}if(this._canExecuteSinglePass(c,e))return d(new v(_,e,this));const I=await G(r,c,this.geometryType,this.hasZ,this.hasM),T=await this._runSpatialFilter(_,p=>I(F.getGeometry(p)),s);return d(new v(T,e,this))}async _executeGeometryQueryForSnapping(e,t){var n;const{query:s}=e,{spatialRel:i}=s;if(!((n=e==null?void 0:e.items)!=null&&n.length)||!s.geometry||!i)return;const a=await G(i,s.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,l=>a(l.geometry),t);e.items=r}_executeAggregateIdsQuery(e){var i;if(e.items.length===0||!((i=e.query.aggregateIds)!=null&&i.length)||this.aggregateAdapter==null)return;const t=new Set;for(const a of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(a).forEach(r=>t.add(r));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(a=>t.has(s(a)))}_executeObjectIdsQuery(e){var i;if(e.items.length===0||!((i=e.query.objectIds)!=null&&i.length))return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(a=>t.has(s(a)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=dt(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=D(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(n=>t(n));let i=0;const a=new Array,r=async n=>{for(;i<e.length;){const l=e[i++];t(l)&&(a.push(l),n.madeProgress()),n.done&&await this._reschedule(u=>r(u),s)}};return this._reschedule(n=>r(n),s).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,a=i||s,r=new Map,n=this.featureAdapter.getAttribute;for(const l of e.items){const u=n(l,t),c=n(l,a),h=r.get(u);(!h||c>n(h,a))&&r.set(u,l)}e.items=Array.from(r.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return Ce(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"))}async _project(e,t){if(!t||C(this.spatialReference,t))return e;const s=this.featureAdapter;let i;try{const r=await this._getFullExtent();i=et(this.spatialReference,t,r)}catch{}const a=await ft(e.items.map(r=>O(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t,i);return e.items=a.map((r,n)=>s.cloneWithGeometry(e.items[n],ot(r,this.hasZ,this.hasM))),e}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,a=>t.add(a))));const s=Array.from(t.values());return t.clear(),s}async _executeQueryForStatistics(e,t,s){e=J(e);try{e=await this._schedule(()=>Fe(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Mt(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}catch(i){if(i!==M)throw i;return new v([],e,this)}}}function se(o){if(Ce(o)){if(tt(o))return[xe(Math.min(o.xmin,o.xmax),Math.min(o.ymin,o.ymax),Math.max(o.xmin,o.xmax),Math.max(o.ymin,o.ymax))];if(st(o))return o.rings.map(e=>xe(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1])))}return[it(at(),o)]}export{ts as $};
