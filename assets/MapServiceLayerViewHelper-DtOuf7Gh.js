const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./visualVariableUtils-Cdb7Kq7r.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./sizeVariableUtils-Cmcuvw-4.js"])))=>i.map(i=>d[i]);
import{fv as X,gp as Y,go as K,cO as V,cP as J,V as n,W as u,bG as ee,bJ as te,bF as k,cx as q,bH as re,bY as ie,X as G,bI as z,gQ as se,a2 as A,bD as oe,iB as ae,bA as ne,g8 as le,gP as ue,gO as pe,ah as ye,aE as ce,g_ as he,a7 as de,A as M,O as _,$ as fe,a3 as L,aw as U,_ as me,aq as ge,cy as be,aF as we,k9 as H,ka as ve,bR as Q,kb as xe,bi as $e}from"./index-Cek7aMWl.js";import{n as Se}from"./sublayerUtils-CsQjXgeP.js";import{n as Fe,p as Oe}from"./popupUtils-vPBZ24BA.js";function Ee(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:a,height:s,historicMoment:y,layerOption:c,mapExtent:l,maxAllowableOffset:p,returnFieldName:h,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:O,timeExtent:f,tolerance:F,width:b}=t.toJSON(),{dynamicLayers:g,layerDefs:w,layerIds:P}=je(t),R=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:y,geometryPrecision:a,maxAllowableOffset:p,returnFieldName:h,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:F},E=(R==null?void 0:R.toJSON())||r;v.imageDisplay=`${b},${s},${i}`,o&&(v.gdbVersion=o),E&&(delete E.spatialReference,v.geometry=JSON.stringify(E),v.geometryType=X(E));const T=O??(E==null?void 0:E.spatialReference)??(l==null?void 0:l.spatialReference);if(T&&(v.sr=Y(T)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:D,ymin:Z,xmax:W,ymax:C}=l;v.mapExtent=`${D},${Z},${W},${C}`}return w&&(v.layerDefs=w),g&&!w&&(v.dynamicLayers=g),v.layers=c==="popup"?"visible":c,P&&!g&&(v.layers+=`:${P.join(",")}`),v}function je(t){var $,O;const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:a,layerOption:s,gdbVersion:y}=t,c=(O=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:O.serviceSublayers,l=s==="popup",p={},h=K({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const F=h===0,b=f.minScale===0||h<=f.minScale,g=f.maxScale===0||h>=f.maxScale;if(f.visible&&(F||b&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((a==null?void 0:a.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)p.layerIds=[];else{const f=Se(m,c,y),F=m.map(b=>{const g=V(i,b);return b.toExportImageJSON(g)});if(f)p.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:w})=>w);a&&(g=g.filter(w=>a.includes(w))),p.layerIds=g}else a!=null&&a.length&&(p.layerIds=a);const b=Pe(i,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(p.layerDefs=JSON.stringify(g))}}}return p}function Pe(t,e){const i=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const a=V(t,r),s=J(a,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var N;let d=N=class extends z{static from(t){return se(N,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([u({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([u()],d.prototype,"floors",void 0),n([u({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([u({types:ee,json:{read:te,write:!0}})],d.prototype,"geometry",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([u({type:Date})],d.prototype,"historicMoment",void 0),n([k("historicMoment")],d.prototype,"writeHistoricMoment",null),n([u({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([u({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([u({type:q,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([u({type:re,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([u()],d.prototype,"sublayers",void 0),n([u({type:ie,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=N=n([G("esri.rest.support.IdentifyParameters")],d);const B=d;let S=class extends z{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return A.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=ae.toJSON(o.type))}};n([u({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),n([u({type:A})],S.prototype,"feature",void 0),n([oe("feature",["attributes","geometry"])],S.prototype,"readFeature",null),n([k("feature")],S.prototype,"writeFeature",null),n([u({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),n([u({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=n([G("esri.rest.support.IdentifyResult")],S);const Re=S;async function _e(t,e,i){const o=(e=Ne(e)).geometry?[e.geometry]:[],r=ne(t);return r.path+="/identify",le(o).then(a=>{const s=Ee(e,{geometry:a==null?void 0:a[0]}),y=ue({...r.query,f:"json",...s}),c=pe(y,i);return ye(r.path,c).then(Ie).then(l=>Ve(l,e.sublayers))})}function Ie(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Re.fromJSON(i)),e}function Ne(t){return t=B.from(t)}function Ve(t,e){if(!(e!=null&&e.length))return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let I=null;function Qe(t,e){return e.type==="tile"||e.type==="map-image"}let j=class extends ce{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=he(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([de(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var s,y;const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new M("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ge(i.sublayers,o,e);if(!r.length)return[];const a=await Te(i,r);if(!((((y=(s=i.capabilities)==null?void 0:s.operations)==null?void 0:y.supportsIdentify)??!0)&&i.version>=10.5)&&!a)throw new M("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return _();let i=null;if(t instanceof A?i=[t]:fe.isCollection(t)&&t.length>0?i=t.toArray():Array.isArray(t)&&t.length>0&&(i=t),i=i==null?void 0:i.filter(L),!(i!=null&&i.length))return _();for(const o of i){const r=o.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),_(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async s=>{var l;s||(s=new U);let y=null;const c="visualVariables"in a?(l=a.visualVariables)==null?void 0:l.find(p=>p.type==="size"):void 0;c&&(I||(I=(await me(async()=>{const{getSize:p}=await import("./visualVariableUtils-Cdb7Kq7r.js");return{getSize:p}},__vite__mapDeps([0,1,2,3]),import.meta.url)).getSize),y=I(c,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),y||(y="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(r)&&(r.symbol=new U({style:"square",size:y,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const p=l.sourceLayer;ge(s,p,()=>new Map).set(l.getObjectId(),l)}const y=Array.from(s,([l,p])=>{const h=l.createQuery();return h.objectIds=[...p.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=a,h.outSpatialReference=i.spatialReference,l.queryFeatures(h)}),c=await Promise.all(y);if(!this.destroyed)for(const{features:l}of c)for(const p of l){const h=p.sourceLayer,m=s.get(h).get(p.getObjectId());m&&o.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*be(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,o,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:s,scale:y}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const c=Math.min(we("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?H({renderer:$.renderer,pointerType:i==null?void 0:i.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,c),p=ve(y,s),h=Math.round(l.width/p),m=new q({xmin:l.center.x-p*h,ymin:l.center.y-p*h,xmax:l.center.x+p*h,ymax:l.center.y+p*h,spatialReference:l.spatialReference});return new B({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:a,tolerance:c,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:s,popupTemplate:y})=>{var w;if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const c=s.createQuery(),l=H({renderer:s.renderer,pointerType:i==null?void 0:i.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,l),h=new Set,[m]=await Promise.all([Fe(s,y),(w=s.renderer)==null?void 0:w.collectRequiredFields(h,s.fieldsIndex)]);Q(i),xe(h,s.fieldsIndex,m);const x=Array.from(h).sort();c.geometry=p,c.outFields=x,c.timeExtent=r;const $=V(o,s);c.where=J(c.where,$);const O=this._getTargetResolution(p.width/l),f=await Ae(y);Q(i);const F=s.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(y);F||(c.maxAllowableOffset=O);let{features:b}=await s.queryFeatures(c,i);const g=F?0:O;b=await Me(s,b,i);for(const P of b)this._featuresResolutions.set(P,g);return b});return(await Promise.allSettled(a)).reduce((s,y)=>y.status==="fulfilled"?[...s,...y.value]:s,[]).filter(L)}};function Ge(t,e,i){const o=[];if(!t)return o;const r=a=>{const s=a.minScale===0||e<=a.minScale,y=a.maxScale===0||e>=a.maxScale;if(a.visible&&s&&y){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const c=Oe(a,{...i,defaultPopupTemplateEnabled:!1});c!=null&&o.unshift({sublayer:a,popupTemplate:c})}}};return t.map(r),o}function Ae(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?$e():Promise.resolve()}async function Te(t,e){var i,o;if((o=(i=t.capabilities)==null?void 0:i.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Me(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([u({constructOnly:!0})],j.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([u({constructOnly:!0})],j.prototype,"layerView",void 0),n([u({constructOnly:!0})],j.prototype,"highlightGraphics",void 0),n([u({constructOnly:!0})],j.prototype,"highlightGraphicUpdated",void 0),n([u({constructOnly:!0})],j.prototype,"updatingHandles",void 0),j=n([G("esri.views.layers.support.MapServiceLayerViewHelper")],j);export{Qe as U,j as _};