import{g as k,l as F,n as C,bB as b,bm as R,F as K}from"./index-eSY5-lt-.js";import{i as E}from"./cimAnalyzer-DsuWkQlK.js";import{a as P,s as w}from"./diffUtils-x5OXhJZZ.js";import{p as $}from"./visualVariablesUtils-lT9viKWj.js";import{S as L}from"./color-Y1HD3ytM.js";import{x as A,o as I,a as O,E as U,n as B}from"./Matcher-Mv_XwJSb.js";import{p as z}from"./BaseProcessor-pS1qgLpW.js";import"./fontUtils-GE0ho--n.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-mThgM4t0.js";import"./OptimizedGeometry-CbNXANBG.js";import"./GeometryUtils-CEMOhUyj.js";import"./enums--FbEXJ87.js";import"./utils-jQLeeGOF.js";import"./alignmentUtils-XT3TYmYW.js";import"./definitions-otzk_d_r.js";import"./number-sTjsTbdA.js";import"./Rect-pT1ASav_.js";import"./callExpressionWithFeature-rytrJuuz.js";import"./quantizationUtils-DTwa03mn.js";import"./floatRGBA-9E5qKLsz.js";import"./enums-8pc8f5Ge.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-lq2gJIeK.js";import"./GeometryUtils-PBUEihia.js";import"./defaultsJSON-x-mq3Ho7.js";import"./earcut-wP_5WnqY.js";import"./LRUCache-mFQSPLKh.js";import"./ExpandedCIM-bbZk55Wb.js";class H{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,r){const s=this._resourceMap,i=s.get(e);if(i)return i;let o=this._inFlightResourceMap.get(e);if(o)return o;try{o=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...r}),this._inFlightResourceMap.set(e,o),o.then(a=>(this._inFlightResourceMap.delete(e),s.set(e,a),a))}catch(a){return k(a)?null:{width:0,height:0}}return o}getResource(e){return this._resourceMap.get(e)??null}loadFont(e){return Promise.resolve(null)}}function x(t,e){const r=e-e/4,s=e+e/2;return(!t.minScale||t.minScale>=r)&&(!t.maxScale||t.maxScale<=s)}function T(t){var s;const e=t.message,r={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const i in e.data){const o=i,a=e.data[o];if(r.message.data[o]=null,a!=null){const c=a.stride,n=a.indices.slice(0),h=a.vertices.slice(0),l=a.records.slice(0),f=(s=a.metrics)==null?void 0:s.slice(0),u={stride:c,indices:n,vertices:h,records:l,metrics:f};r.transferList.push(n,h,l),r.message.data[o]=u}}return r}let S=class extends z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new H(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){var i;const r=e.schema.processors[0];if(r.type!=="symbol")return;const s=P(this._schema,r);(w(s,"mesh")||w(s,"target"))&&(t.mesh=!0,(i=t.why)==null||i.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,r,s){return b(s),this._onTileData(t,e,r,s)}onTileClear(t,e){const r={clear:!0,end:e};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:r})}onTileError(t,e,r){const s=r.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:s})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(r=>{for(const s of r)s.message.tileKey===e.id&&this._updateTileMesh("append",e,T(s),[],!1,!1,null)})}_addBufferData(t,e){var r;this._bufferData.has(t)||this._bufferData.set(t,[]),(r=this._bufferData.get(t))==null||r.push(T(e))}_createFactory(t){const{geometryType:e,objectIdField:r,fields:s}=this.service,i=(h,l)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",h,l),o={geometryType:e,fields:s,spatialReference:R.fromJSON(this.spatialReference)},a=new A(i,this.tileStore.tileScheme.tileInfo),{matcher:c,aggregateMatcher:n}=t.mesh;return this._store=a,this._matchers.feature=I(c,a,o,this._resourceManagerProxy),this._matchers.aggregate=n?I(n,a,o,this._resourceManagerProxy):null,new O(e,r,a)}async _onTileData(t,e,r,s){var f;b(s);const{type:i,addOrUpdate:o,remove:a,clear:c,end:n}=e,h=!!this._schema.mesh.sortKey;if(!o){const u={type:i,addOrUpdate:null,remove:a,clear:c,end:n,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:u},s)}const l=this._processFeatures(t,o,r,s,(f=e.status)==null?void 0:f.version);try{const u=await l;if(u==null){const d={type:i,addOrUpdate:null,remove:a,clear:c,end:n,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:d},s)}const m=[];for(const d of u){let p=!1;const g=d.message.bufferIds,y=t.key.id,M=d.message.tileKey;if(y!==M&&g!=null){if(!this.tileStore.get(M)){this._addBufferData(y,d),m.push(d);continue}let _=this._bufferIds.get(M);_||(_=new Set,this._bufferIds.set(M,_));const D=Array.from(g);for(const v of D){if(_.has(v)){p=!0;break}_.add(v)}}p||(this._addBufferData(y,d),m.push(d))}await Promise.all(m.map(d=>{const p=t.key.id===d.message.tileKey,g=p?e.remove:[],y=p&&e.end;return this._updateTileMesh(i,t,d,g,y,!!e.clear,s.signal)}))}catch(u){this._handleError(t,u,s)}}async _updateTileMesh(t,e,r,s,i,o,a){const c=t,n=r.message.tileKey,h=!!this._schema.mesh.sortKey;n!==e.key.id&&(i=!1);const l=r==null?void 0:r.message,f={type:c,addOrUpdate:l,remove:s,clear:o,end:i,sort:h},u={transferList:(r==null?void 0:r.transferList)??[],signal:a};return b(u),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:n,data:f},u)}async _processFeatures(t,e,r,s,i){if(e==null||!e.hasFeatures)return null;const o={transform:t.transform,hasZ:!1,hasM:!1},a=this._factory,c={viewingMode:"",scale:t.scale},n=await this._matchers.feature,h=await this._matchers.aggregate;b(s);const l=this._getLabelInfos(t,e);return await a.analyze(e.getCursor(),this._resourceManagerProxy,n,h,o,c),b(s),this._writeFeatureSet(t,e,o,l,a,r,i)}_writeFeatureSet(t,e,r,s,i,o,a){const c=e.getSize(),n=this._schema.mesh.matcher.symbologyType,h=new U(t.key.id,{features:c,records:c,metrics:0},n,o,n!==L.HEATMAP,a),l={viewingMode:"",scale:t.scale},f=e.getCursor();for(;f.next();)try{const m=f.getDisplayId(),d=s!=null?s.get(m):null;i.writeCursor(h,f,r,l,t.level,d,this._resourceManagerProxy)}catch{}const u=t.tileInfoView.tileInfo.isWrappable;return h.serialize(u)}_handleError(t,e,r){if(!k(e)){const s={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(e==null)return null;if(e.type==="subtype"){const s={type:"subtype",classes:{}};let i=!1;for(const o in e.classes){const a=e.classes[o].filter(c=>x(c,t.scale));i=i||!!a.length,s.classes[o]=a}return i?s:null}const r=e.classes.filter(s=>x(s,t.scale));return r.length?{type:"simple",classes:r}:null}_getLabels(t,e){if(e.type==="subtype"){const r=this.service.subtypeField;K(r,"Expected to find subtype Field");const s=t.readAttribute(r);return s==null?[]:e.classes[s]??[]}return e.classes}_getLabelInfos(t,e){const r=this._getLabelingSchemaForScale(t);if(r==null)return null;const s=new Map,i=e.getCursor();for(;i.next();){const o=i.getDisplayId(),a=[],c=$(o),n=c&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",h=this._getLabels(i,r);for(const l of h){if(l.target!==n)continue;const f=i.getStorage(),u=c&&n==="feature"?f.getComputedStringAtIndex(i.readAttribute("referenceId"),l.fieldIndex):f.getComputedStringAtIndex(o,l.fieldIndex);if(!u)continue;const m=E(u.toString()),d=m[0],p=m[1];this._store.getMosaicItem(l.symbol,B(d)).then(g=>{a[l.index]={glyphs:g.glyphMosaicItems??[],rtl:p,index:l.index}})}s.set(o,a)}return s}};S=F([C("esri.views.2d.layers.features.processors.SymbolProcessor")],S);const be=S;export{be as default};
