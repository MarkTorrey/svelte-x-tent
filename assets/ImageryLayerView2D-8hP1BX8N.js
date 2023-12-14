import{k as s,l as o,m as v,a9 as R,f as b,j as _,q as P,eI as I,b6 as B,n as f,fn as z,dM as A,L as C,s as V,b2 as E,i as U,et as $,V as S,e as q}from"./index-rwr9l75y.js";import{d as M,f as j,h as L}from"./RasterVFDisplayObject-70rkDF8o.js";import{m as O,u as H}from"./LayerView-SN8Ya_ml.js";import{r as N}from"./GraphicsView2D-L3UlZANi.js";import{a as G}from"./HighlightGraphicContainer-8x6pefx_.js";import{M as J,m as W,f as K}from"./dataUtils-Md93pCh6.js";import{a as Q}from"./BitmapContainer-pfwWg5Ik.js";import{h as X}from"./Container-m-X2DGFy.js";import{l as Y}from"./Bitmap--2UIO8fv.js";import{v as Z}from"./ExportStrategy-BAnY5loQ.js";import{J as tt}from"./rasterProjectionHelper-TR4Ea9T9.js";import{T}from"./color-MSA9vB2T.js";import{n as et}from"./WGLContainer-RWXnfBYU.js";import{j as it}from"./commonProperties-K0LcbBkz.js";import{b as rt}from"./Query-xcVNMwFB.js";import{p as at}from"./popupUtils-M2Ta7QiJ.js";import{a as st}from"./RefreshableLayerView-olEw24_L.js";import"./FramebufferObject-xhcDpZRj.js";import"./Texture-IITjQftW.js";import"./enums-8pc8f5Ge.js";import"./ProgramTemplate-drETQBUn.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./ExpandedCIM-r039T5K9.js";import"./BidiEngine-8z8MVveq.js";import"./visualVariablesUtils-ftjXEZ2Y.js";import"./OptimizedGeometry-1RFAES06.js";import"./definitions--BerIEB0.js";import"./GeometryUtils-CEMOhUyj.js";import"./enums--FbEXJ87.js";import"./utils-8dHEt1x_.js";import"./GeometryUtils-pN0lJOJH.js";import"./Rect-pT1ASav_.js";import"./quantizationUtils-Us5VtfAD.js";import"./floatRGBA-Y0kA9R7X.js";import"./normalizeUtilsSync-UY7exMMQ.js";import"./projectionSupport-hu9_r6iQ.js";import"./json-v6EOeNTY.js";import"./LabelClass-V8j5wui3.js";import"./labelUtils-JUCMTUQJ.js";import"./defaultsJSON-HVtDPFXZ.js";import"./jsonUtils-1tkaaT9f.js";import"./AttributeStoreView-2GRDdbO8.js";import"./TiledDisplayObject-NTAr5tsC.js";import"./diffUtils-g7Fohb1Y.js";import"./labelingInfo-l9wgedMn.js";import"./clusterUtils-CpC7FOKC.js";import"./MD5-uECS9GB-.js";import"./SizeVariable-Ekg0XaNX.js";import"./colorRamps-awdEZ3u_.js";import"./LegendOptions-E7OIex9R.js";import"./lengthUtils-fNXXQLZy.js";import"./util-PmijqwOP.js";import"./Matcher-5VzK9-Dg.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-w-LQISZ9.js";import"./earcut-6aBD8Ssv.js";import"./LRUCache-9CocD9iD.js";import"./ComputedAttributeStorage-puCMOryp.js";import"./featureConversionUtils-FNM6dcN0.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./FieldsIndex-PWGCOsyk.js";import"./UnknownTimeZone-jfi9eEf7.js";import"./TimeOnly-ZwWj2Vlb.js";import"./BaseGraphicContainer-nkQkRClz.js";import"./FeatureContainer-sCP9pctf.js";import"./TileContainer-941YHDRa.js";import"./vec3f32-6rWBPTzX.js";import"./parser-WHTFD6Ot.js";import"./heatmapUtils-y_chVdwW.js";import"./StyleDefinition-ohiNeWtS.js";import"./config-z2KFXUcx.js";import"./ElevationInfo-sf5mgUmK.js";import"./Field-BSvFaGGy.js";import"./fieldType-3gjYBYno.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new X,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Q}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{b(e)||_.getLogger(this).error(e)})}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{b(t)||_.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(e)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=J(i,e);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,e,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new Y(n.pixelBlock,(c=n.extent)==null?void 0:c.clone(),a.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([v("esri.views.2d.layers.imagery.ImageryView2D")],h);const ot=h;class nt extends et{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[M],target:()=>this.children,drawPhase:T.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===T.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=I((e,i)=>this._update(e,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:a}=t.state,n=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,c]=t.state.size;this._loading=this.fetchPixels(n,l,c,i);const p=await this._loading;this._addToDisplay(p,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=t,n=new j(a);n.offset=[0,0],n.symbolizerParameters=e,n.rawPixelData=t,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*e.symbolTileSize,n.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const lt=y;let m=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new nt,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:c,height:p}=W(t,e,i,n,a);if(a!=null&&!a.intersects(t))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,c,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?K(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new lt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),z),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{b(e)||_.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&r&&a}async _getProjectedFullExtent(t){try{return tt(this.layer.fullExtent,t)}catch{try{const i=(await C(this.layer.url,{query:{option:"footprints",outSR:A(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],m.prototype,"attached",void 0),s([o()],m.prototype,"container",void 0),s([o()],m.prototype,"layer",void 0),s([o()],m.prototype,"timeExtent",void 0),s([o()],m.prototype,"type",void 0),s([o()],m.prototype,"view",void 0),s([o()],m.prototype,"updating",null),m=s([v("esri.views.2d.layers.imagery.VectorFieldView2D")],m);const ht=m,pt=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:a}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a,l=at(a,r);if(!n||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const c=await l.getRequiredFields(),p=new rt;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=c,p.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:g}=this.view,x=this.view.type==="2d"?new E(d,d,g):new E(.5*d,.5*d,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:D,signal:r!=null?r.signal:null};return a.queryVisibleRasters(p,k).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([o()],e.prototype,"layer",void 0),s([o()],e.prototype,"suspended",void 0),s([o(it)],e.prototype,"timeExtent",void 0),s([o()],e.prototype,"view",void 0),e=s([v("esri.views.layers.ImageryLayerView")],e),e};let w=class extends pt(st(O(H))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new U,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new N({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new G(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},$),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:S.isCollection(t)?t.at(0):t)instanceof P))return q();let i=[];return Array.isArray(t)||S.isCollection(t)?i=t.map(r=>r.clone()):t instanceof P&&(i=[t.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:a}=this.subview;if(a===e)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new ot({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new ht({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new L({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([o()],w.prototype,"pixelData",null),s([o()],w.prototype,"subview",void 0),w=s([v("esri.views.2d.layers.ImageryLayerView2D")],w);const Be=w;export{Be as default};
