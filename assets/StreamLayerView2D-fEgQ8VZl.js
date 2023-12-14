import{k as i,l as n,m as y,n as d,s as u,ex as h,e as _}from"./index-rwr9l75y.js";import{d as f}from"./FeatureSet-2nxwJf8L.js";import S from"./FeatureLayerView2D-onq_pH2e.js";import{e as v}from"./util-PmijqwOP.js";import{d as g}from"./FeatureEffect-hNFu_4zx.js";import"./Field-BSvFaGGy.js";import"./fieldType-3gjYBYno.js";import"./Container-m-X2DGFy.js";import"./parser-WHTFD6Ot.js";import"./definitions--BerIEB0.js";import"./enums-8pc8f5Ge.js";import"./Texture-IITjQftW.js";import"./Query-xcVNMwFB.js";import"./LayerView-SN8Ya_ml.js";import"./AttributeStoreView-2GRDdbO8.js";import"./TiledDisplayObject-NTAr5tsC.js";import"./diffUtils-g7Fohb1Y.js";import"./labelingInfo-l9wgedMn.js";import"./LabelClass-V8j5wui3.js";import"./labelUtils-JUCMTUQJ.js";import"./defaultsJSON-HVtDPFXZ.js";import"./jsonUtils-1tkaaT9f.js";import"./color-MSA9vB2T.js";import"./enums--FbEXJ87.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./WGLContainer-RWXnfBYU.js";import"./FramebufferObject-xhcDpZRj.js";import"./ProgramTemplate-drETQBUn.js";import"./GeometryUtils-pN0lJOJH.js";import"./heatmapUtils-y_chVdwW.js";import"./StyleDefinition-ohiNeWtS.js";import"./config-z2KFXUcx.js";import"./earcut-6aBD8Ssv.js";import"./featureConversionUtils-FNM6dcN0.js";import"./OptimizedGeometry-1RFAES06.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./visualVariablesUtils-ftjXEZ2Y.js";import"./ExpandedCIM-r039T5K9.js";import"./BidiEngine-8z8MVveq.js";import"./GeometryUtils-CEMOhUyj.js";import"./utils-8dHEt1x_.js";import"./Rect-pT1ASav_.js";import"./quantizationUtils-Us5VtfAD.js";import"./floatRGBA-Y0kA9R7X.js";import"./clusterUtils-CpC7FOKC.js";import"./MD5-uECS9GB-.js";import"./SizeVariable-Ekg0XaNX.js";import"./colorRamps-awdEZ3u_.js";import"./LegendOptions-E7OIex9R.js";import"./lengthUtils-fNXXQLZy.js";import"./BitmapTileContainer-ZMcVXm7i.js";import"./Bitmap--2UIO8fv.js";import"./TileContainer-941YHDRa.js";import"./CircularArray-1_thnT0U.js";import"./BufferPool-sURXGJBW.js";import"./FeatureContainer-sCP9pctf.js";import"./commonProperties-K0LcbBkz.js";import"./ElevationInfo-sf5mgUmK.js";import"./floorFilterUtils-zOdaZIyV.js";import"./popupUtils-M2Ta7QiJ.js";import"./RefreshableLayerView-olEw24_L.js";import"./jsonUtils-0YRyalyT.js";const x=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return i([n()],t.prototype,"_isUserPaused",void 0),i([n({readOnly:!0})],t.prototype,"connectionStatus",null),i([n({type:g})],t.prototype,"filter",void 0),t=i([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends x(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([d(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),d(()=>this.layer.purgeOptions,()=>this._update()),d(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new u("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return h(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),s=this;return _(()=>{a.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,s;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(s=this.layer.timeInfo)!=null&&s.trackIdField))throw new u("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const m=f.fromJSON(p);return m.features.forEach(l=>{l.layer=this.layer,l.sourceLayer=this.layer}),m})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){var m;const e=this.layer,{objectIdField:t}=e,r=e.fields.map(l=>l.toJSON()),a=v(e.geometryType),s=((m=e.timeInfo)==null?void 0:m.toJSON())||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:a,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};i([n()],o.prototype,"pipelineConnectionStatus",void 0),i([n()],o.prototype,"pipelineErrorString",void 0),i([n({readOnly:!0})],o.prototype,"connectionError",null),i([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=i([y("esri.views.2d.layers.StreamLayerView2D")],o);const Ne=o;export{Ne as default};
