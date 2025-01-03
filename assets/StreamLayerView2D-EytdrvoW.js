import{W as s,X as n,Y as l,Z as m,B as c,aF as _,Q as g}from"./index-BdDnxAOC.js";import{d}from"./FeatureSet-BSxK7X-2.js";import{n as f,r as v}from"./FeatureLayerView2D-C18Jmwtp.js";import{d as S}from"./FeatureFilter-mttTrSds.js";import"./EffectView-CEbLCWgX.js";import"./featureConversionUtils-BCh95FQm.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-DKa-6YSI.js";import"./LayerView2D-C4DUwP3E.js";import"./Container-C3Ew2ox5.js";import"./TechniqueInstance-C7tjEbHB.js";import"./UpdateTracking2D-i6Vln34G.js";import"./BindType-BmZEZMMh.js";import"./Util-CMsZAslL.js";import"./Program-BEbyLHne.js";import"./BufferObject-CMCaTtYE.js";import"./LabelMetric-CP2ejxD5.js";import"./enums-CmIX1y88.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Tk_OBeCC.js";import"./TileContainer-CAeBc3OW.js";import"./WGLContainer-DzTbsEWo.js";import"./VertexArrayObject-BNd6u6rq.js";import"./ProgramTemplate-Dwf_s9I8.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-WSFqrkMp.js";import"./CIMSymbolHelper-vq9rAQVS.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-CiOfLTjw.js";import"./GeometryUtils-gjMcVHTd.js";import"./utils-DpS7XCOa.js";import"./Rect-CUzevAry.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./featureReductionUtils-Caulfaw_.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-NW2XP7xS.js";import"./labelingInfo-C81qEnrv.js";import"./labelUtils-CE2jIVKQ.js";import"./jsonUtils-DM4hoWoB.js";import"./heatmapUtils-BQROikav.js";import"./SDFHelper-DhGVVNzU.js";import"./floatRGBA-CrOZxjHk.js";import"./HighlightCounter-Czi-fdpx.js";import"./FeatureEffect-DVNjjsKx.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-prBco07P.js";import"./LayerView-C8i47HwB.js";import"./RefreshableLayerView-BG0mPyQL.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:S})],t.prototype,"filter",void 0),t=s([l("esri.views.layers.StreamLayerView")],t),t};let o=class extends C(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([m(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new c("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return g(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new c("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return f(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const h=d.fromJSON(y);return h.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),h}),new d({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([n()],o.prototype,"pipelineConnectionStatus",void 0),s([n()],o.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],o.prototype,"connectionError",null),s([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([l("esri.views.2d.layers.StreamLayerView2D")],o);const we=o;export{we as default};
