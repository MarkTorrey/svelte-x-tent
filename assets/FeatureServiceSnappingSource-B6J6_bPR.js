const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WhereClause-BO6P4l1i.js","./TimeOnly-BJnd6TEv.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./UnknownTimeZone-Cjv2gi-C.js"])))=>i.map(i=>d[i]);
import{dq as X,dd as Y,V as a,W as o,X as I,aE as k,ln as K,Y as v,h1 as B,ir as x,Z as b,ay as Q,a2 as L,aA as N,iT as ee,lo as te,lp as ie,lq as se,$ as ne,lr as ae,az as re,ls as U,O as oe,cz as le,gw as de,cr as G,g_ as ue,h3 as he,lt as pe,fY as ce,a3 as D,fM as ye,aS as ge,d3 as fe,cA as _e,gz as we,lu as ve,lv as Se,fV as me,bR as j,fU as be,h0 as _,a7 as Ie,k5 as W,h_ as Oe,lw as He,fu as ke,_ as Ee}from"./index-Cek7aMWl.js";import{W as Te,$ as Fe,a as $e}from"./boundedPlane-BL3qgVOW.js";import{i as Pe,o as Ce}from"./queryEngineUtils-C4FFihE_.js";import{h as Me}from"./WorkerHandle-Hp7g607k.js";import"./lineSegment-CMQTKrER.js";import"./VertexSnappingCandidate-DOB6o5TV.js";import"./PointSnappingHint-D4hTAt-c.js";function M(e,t){return Fe(t.extent,J),$e(J,X(ze,e.x,e.y,0))}const J=Te(),ze=Y();let f=class extends k{get tiles(){const t=this.tilesCoveringView,s=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((n,i)=>M(s,n)-M(s,i)),t}_scaleEnabled(){return K(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:s}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:n}=s,i=[];for(const{row:r,colFrom:l,colTo:h}of t)for(let p=l;p<=h;p++){const u=s.normalizeCol(p),y=new x(null,n,r,u);this.tileInfo.updateTileInfo(y),i.push(y)}return i}get tileInfo(){var t;return((t=this.view.featuresTilingScheme)==null?void 0:t.tileInfo)??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(v(()=>{var t,s;return(s=(t=this.view)==null?void 0:t.state)==null?void 0:s.viewpoint},()=>this.notifyChange("tilesCoveringView"),B))}};a([o({readOnly:!0})],f.prototype,"tiles",null),a([o({readOnly:!0})],f.prototype,"_scaleEnabled",null),a([o({readOnly:!0})],f.prototype,"tilesCoveringView",null),a([o({readOnly:!0})],f.prototype,"tileInfo",null),a([o({readOnly:!0})],f.prototype,"tileSize",null),a([o({constructOnly:!0})],f.prototype,"view",void 0),a([o({constructOnly:!0})],f.prototype,"layer",void 0),a([o()],f.prototype,"pointOfInterest",void 0),f=a([I("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],f);var V;(function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED",e[e.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE"})(V||(V={}));let w=class extends k{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(t!=null){const s=e.map(n=>M(t,n));for(let n=1;n<s.length;n++)if(s[n-1]>s[n])return e.sort((i,r)=>M(t,i)-M(t,r)),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles((t=(e=this.view.featureTiles)==null?void 0:e.tiles)==null?void 0:t.toArray()).map(Ne)}get tileInfo(){var e,t;return((t=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:t.toTileInfo())??null}get tileSize(){var e;return((e=this.view.featureTiles)==null?void 0:e.tileSize)??256}get _effectivePointOfInterest(){var t;const e=this.pointOfInterest;return e??((t=this.view.pointsOfInterest)==null?void 0:t.focus.location)}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(v(()=>this.view.featureTiles,e=>{this.removeHandles(q),e&&this.addHandles(e.addClient(),q)},b))}_filterTiles(e){return e==null?[]:e.filter(t=>{const s=t.measures;if(s.visibility===V.VISIBLE_ON_SURFACE){const n=s.screenRect;return Math.abs(n[3]-n[1])>Ve}return!1})}};function Ne({lij:[e,t,s],extent:n}){return new x(`${e}/${t}/${s}`,e,t,s,n)}a([o({readOnly:!0})],w.prototype,"tiles",null),a([o({readOnly:!0})],w.prototype,"tilesCoveringView",null),a([o({readOnly:!0})],w.prototype,"tileInfo",null),a([o({readOnly:!0})],w.prototype,"tileSize",null),a([o({constructOnly:!0})],w.prototype,"view",void 0),a([o()],w.prototype,"pointOfInterest",void 0),a([o()],w.prototype,"_effectivePointOfInterest",null),w=a([I("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],w);const Ve=50,q="feature-tiles",xe=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let H=class extends k{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=xe.map(e=>new Q({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=r=>{if(r.label!=null)return r.label;let l=r.lij.toString();return r.loadPriority!=null&&(l+=` (${r.loadPriority})`),l},t=this.getTiles(),s=new Array,n=new Set((this._labels.size,this._labels.keys()));t.forEach((r,l)=>{const h=r.lij.toString();n.delete(h);const p=r.lij[0],u=r.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const y=new L({geometry:u,symbol:this._symbols[p%this._symbols.length]});this._polygons.set(h,y),s.push(y)}if(this.enableLabels){const y=e(r),E=l/(t.length-1),O=U(0,200,E),T=U(20,6,E)/.75,F=r.loadPriority!=null&&r.loadPriority>=t.length,$=new N([O,F?0:O,F?0:O]),P=this.view.type==="3d"?()=>new ee({verticalOffset:new te({screenLength:40/.75}),callout:new ie({color:new N("white"),border:new se({color:new N("black")})}),symbolLayers:new ne([new ae({text:y,halo:{color:"white",size:1/.75},material:{color:$},size:T})])}):()=>new re({text:y,haloColor:"white",haloSize:1/.75,color:$,size:T}),m=this._labels.get(h);if(m){const d=P();m.symbol!=null&&JSON.stringify(d)===JSON.stringify(m.symbol)||(m.symbol=d)}else{const d=new L({geometry:u.extent.center,symbol:P()});this._labels.set(h,d),s.push(d)}}});const i=new Array;n.forEach(r=>{const l=this._polygons.get(r);l!=null&&(i.push(l),this._polygons.delete(r));const h=this._labels.get(r);h!=null&&(i.push(h),this._labels.delete(r))}),this.view.graphics.removeMany(i),this.view.graphics.addMany(s)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};a([o({constructOnly:!0})],H.prototype,"view",void 0),a([o({readOnly:!0})],H.prototype,"updating",void 0),a([o()],H.prototype,"enabled",null),H=a([I("esri.views.support.TileTreeDebugger")],H);let z=class extends H{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(oe(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(i=>{e.set(i.data.id,i.featureCount)}),this._debugInfo.pendingTiles.forEach(i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)});const s=i=>{const r=t.get(i),l=e.get(i)??"?";return r?`${r}:${l}
${i}`:`store:${l}
${i}`},n=new Map;return this._debugInfo.storedTiles.forEach(i=>{n.set(i.data.id,i.data)}),this._debugInfo.pendingTiles.forEach(i=>{n.set(i.data.id,i.data)}),Array.from(n.values()).map(i=>({lij:[i.level,i.row,i.col],geometry:le.fromExtent(de(i.extent,this.view.spatialReference)),label:s(i.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};a([o({constructOnly:!0})],z.prototype,"handle",void 0),z=a([I("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],z);let g=class extends k{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new G,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const s=[];for(const{points:n}of t.pointsInFeatures)for(const{z:i}of n)s.push(i);return{elevations:s,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=ue(async(t,s)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],s)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},s))})}destroy(){this._suspendController=he(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new Ae(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){var i;const s=Re(e.layer);if(s==null)return;const n={configuration:Z(e.configuration),serviceInfo:s,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:(i=e.layer.elevationInfo)==null?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const s=Z(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:s,filter:n,coordinateHelper:i}=e,r={...e,point:pe(s[0],s[1],s[2],i.spatialReference.toJSON()),filter:n==null?void 0:n.toJSON()};return this._workerHandle.invoke(r,t)}async updateTiles(e,t){const s={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var l,h,p;const s=this._editId++,n={id:s};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",n,t));const i=await this._updatingHandles.addPromise(ce(e.result,t)),r={id:s,edits:{addedFeatures:((l=i.addedFeatures)==null?void 0:l.map(({objectId:u})=>u).filter(D))??[],deletedFeatures:((h=i.deletedFeatures)==null?void 0:h.map(({objectId:u,globalId:y})=>({objectId:u,globalId:y})))??[],updatedFeatures:((p=i.updatedFeatures)==null?void 0:p.map(({objectId:u})=>u).filter(D))??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;(t=this._suspendController)==null||t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function Z(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}function Re(e){var t,s;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:((t=e.parsedUrl)==null?void 0:t.path)??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:ye.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(s=e.timeInfo)==null?void 0:s.toJSON()}}a([o({constructOnly:!0})],g.prototype,"schedule",void 0),a([o({constructOnly:!0})],g.prototype,"hasZ",void 0),a([o({constructOnly:!0})],g.prototype,"elevationAlignPointsInFeatures",void 0),a([o({constructOnly:!0})],g.prototype,"queryForSymbologySnapping",void 0),a([o({readOnly:!0})],g.prototype,"updating",null),a([o({readOnly:!0})],g.prototype,"availability",void 0),a([o()],g.prototype,"_workerHandleUpdating",void 0),g=a([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],g);class Ae extends Me{constructor(t,s){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:s})}}let S=class extends k{get tiles(){return[new x("0/0/0",0,0,0,ge(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new fe({origin:new _e({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new we({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};a([o({readOnly:!0})],S.prototype,"tiles",null),a([o({readOnly:!0})],S.prototype,"tileInfo",null),a([o({readOnly:!0})],S.prototype,"tileSize",null),a([o({constructOnly:!0})],S.prototype,"layer",void 0),a([o()],S.prototype,"pointOfInterest",void 0),S=a([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],S);let c=class extends k{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return(e=this.view)==null?void 0:e.allLayerViews.find(t=>t.layer===this._layer)}get _isSuspended(){var e;return ve(this._layer)&&!this.layerSource.sublayerSources.some(t=>t.enabled&&t.layer.visible)?!0:!!this.view&&(((e=this._layerView)==null?void 0:e.suspended)!==!1||!this.layerSource.enabled)}get updating(){var e;return((e=this._workerHandle)==null?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var y,E,O,T,F,$,P,m;const{view:e,_layerView:t,layerSource:s}=this,{layer:n}=s,{fieldsIndex:i,timeInfo:r,floorInfo:l,subtypeField:h}=n,p=t&&"filter"in t?t.filter:null,u=p!=null&&p.where&&p.where!=="1=1"?this._getOrLoadWhereFields(p.where,i):[];if(p!=null&&p.timeExtent&&r){const{startField:d,endField:C}=r,R=((y=i.get(d))==null?void 0:y.name)??d,A=((E=i.get(C))==null?void 0:E.name)??C;R&&u.push(R),A&&u.push(A)}if(e!=null&&e.map&&Se(e.map)&&((O=e.map.utilityNetworks)!=null&&O.find(d=>d.isUtilityLayer(n)))){const d=(T=n.fieldsIndex.get("assetGroup"))==null?void 0:T.name,C=(F=n.fieldsIndex.get("assetType"))==null?void 0:F.name;d&&C&&(u.push(d),u.push(C))}if(n&&(l!=null&&l.floorField)&&(($=e==null?void 0:e.floors)!=null&&$.length)){const d=((P=i.get(l.floorField))==null?void 0:P.name)??l.floorField;d&&u.push(d)}if(h){const d=((m=i.get(h))==null?void 0:m.name)??h;d&&u.push(d)}return new Set(u)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:s}=this._layer,n=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...s,token:t}:s,viewType:n}}get availability(){var e;return((e=this._workerHandle)==null?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new G,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=me(Pe)}initialize(){let e;const t=this.view;if(t==null||t.destroyed)this._tilesOfInterest=new S({layer:this._layer}),e=this._workerHandle=new g;else switch(t.type){case"2d":this._tilesOfInterest=new f({view:t,layer:this._layer}),e=this._workerHandle=new g;break;case"3d":{const{resourceController:s}=t,n=this._layer;this._tilesOfInterest=new w({view:t}),e=this._workerHandle=new g({schedule:i=>s.immediate.schedule(i),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(i,r)=>{const l=await t.whenLayerView(n);return j(r),l.elevationAlignPointsInFeatures(i,r)},queryForSymbologySnapping:async(i,r)=>{const l=await t.whenLayerView(n);return j(r),l.queryForSymbologySnapping(i,r)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:r}=n;be(i,r)&&_(e.notifyElevationSourceChange())}),v(()=>n.elevationInfo,()=>_(e.notifyElevationSourceChange()),b),v(()=>{var i,r;return(r=(i=this._layerView)==null?void 0:i.layer)==null?void 0:r.renderer},()=>_(e.notifySymbologyChange()),b),v(()=>{var i;return((i=this._layerView)==null?void 0:i.symbologySnappingSupported)??!1},i=>_(e.setSymbologySnappingSupported(i)),b),Ie(()=>{var i;return(i=this._layerView)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}this.addHandles([W(e)]),_(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>_(e.updateTiles(this._updateTilesParameters,null)),b),this.addHandles([v(()=>this.configuration,s=>_(e.configure(s,null)),B),v(()=>this._outFields,s=>_(e.updateOutFields(s)),b),v(()=>this._isSuspended,s=>_(e.setSuspended(s)),Oe)]),t!=null&&this.addHandles(v(()=>He.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,s=>{s&&!this._debug?(this._debug=new z({view:t,handle:e}),this.addHandles(W(this._debug),"debug")):!s&&this._debug&&this.removeHandles("debug")},b)),this.addHandles(this.layerSource.layer.on("apply-edits",s=>{_(e.applyEdits(s,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){var e;(e=this._workerHandle)==null||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:s,point:n}=e;this._tilesOfInterest.pointOfInterest=s.arrayToPoint(n);const i=this._memoizedMakeGetGroundElevation(this.view,s.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(r=>Ce(r,i))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:s}=this;if(!this._loadWhereModuleTask&&!s){const n=ke(async()=>{const i=await Ee(()=>import("./WhereClause-BO6P4l1i.js").then(r=>r.W),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return this._whereModule=i.WhereClause,this._whereModule});return this._loadWhereModuleTask=n,this._updatingHandles.addPromise(n.promise),[]}if(!s)return[];try{return s.create(e,t).fieldNames}catch{return[]}}};a([o({constructOnly:!0})],c.prototype,"spatialReference",void 0),a([o({constructOnly:!0})],c.prototype,"layerSource",void 0),a([o({constructOnly:!0})],c.prototype,"view",void 0),a([o()],c.prototype,"_tilesOfInterest",void 0),a([o({readOnly:!0})],c.prototype,"_updateTilesParameters",null),a([o()],c.prototype,"_layerView",null),a([o()],c.prototype,"_isSuspended",null),a([o({readOnly:!0})],c.prototype,"updating",null),a([o()],c.prototype,"_outFields",null),a([o({readOnly:!0})],c.prototype,"configuration",null),a([o({readOnly:!0})],c.prototype,"availability",null),a([o()],c.prototype,"_loadWhereModuleTask",void 0),a([o()],c.prototype,"_whereModule",void 0),c=a([I("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],c);export{c as FeatureServiceSnappingSource};