import{V as o,W as n,X as v,aE as R,R as b,U as _,a2 as P,g_ as F,cx as B,Y as f,h_ as I,ah as T,gp as U,A as z,bR as C,bB as O,cA as V,J as L,h1 as $,$ as E,O as S,aF as M}from"./index-Cek7aMWl.js";import{d as H,f as N,a as j}from"./RasterVFDisplayObject-BrKDrKEr.js";import{f as J}from"./LayerView2D-BVUnvPSB.js";import{V as G}from"./GraphicsView2D-dxjiOMsf.js";import{h as W}from"./HighlightGraphicContainer-Bifb2Uon.js";import{M as X,m as Y,f as K}from"./dataUtils-yXCaW0rn.js";import{a as Q}from"./BitmapContainer-C1NznjUW.js";import{h as Z,E as q}from"./Container-BHyIqe9V.js";import{l as tt}from"./Bitmap-DNzEY9pm.js";import{_ as et}from"./ExportStrategy-T9ZLbXA1.js";import{J as it}from"./rasterProjectionHelper-43RoyB55.js";import{n as rt}from"./WGLContainer-BWXDcjjt.js";import{i as st}from"./timeSupport-BuPGwwv2.js";import{p as at}from"./popupUtils-vPBZ24BA.js";import{y as ot}from"./LayerView-Dyxjvlzf.js";import{i as nt}from"./RefreshableLayerView-DrkgiCbv.js";import"./BufferObject-Dtd0vzOu.js";import"./Texture-BjUzSnJr.js";import"./enums-BlUEVwJR.js";import"./VertexArrayObject-DSiuLT7k.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./LabelMetric-BX4Cxpgy.js";import"./enums-BRXbslMp.js";import"./Program-DDsdwrVN.js";import"./BoundingBox-DD1zHGe8.js";import"./FieldsIndex-Bjg3eA_S.js";import"./UnknownTimeZone-Cjv2gi-C.js";import"./CIMSymbolHelper-CY__-kW6.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DnX1oK2e.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./GeometryUtils-B2Qq2Dwi.js";import"./utils-BE8joJvK.js";import"./definitions-Y_v3njP4.js";import"./Rect-CUzevAry.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";import"./OverrideHelper-ClkM4CZ1.js";import"./colorUtils-BlCLzs4t.js";import"./quantizationUtils-DeBnMDmu.js";import"./AttributeStore-BqZyTXj5.js";import"./UpdateTracking2D-B5DpfoKL.js";import"./BindType-BmZEZMMh.js";import"./Util-D3WFoRjI.js";import"./highlightReasons-B4N7T4kB.js";import"./labelUtils-C4iNx9oT.js";import"./TimeOnly-BJnd6TEv.js";import"./centroid-DdLmOD72.js";import"./featureConversionUtils-DoC7B3A2.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-4nmKr68x.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-D8t0EUoQ.js";import"./constants-D5zmR9t2.js";import"./normalizeUtilsSync-BuSxwAtS.js";import"./AGraphicContainer-DCIE21Ap.js";import"./TechniqueInstance-BfDw3KsI.js";import"./TileContainer-CeQi5mdh.js";import"./vec3f32-nZdmKIgz.js";import"./pixelRangeUtils-DR2RxTkt.js";import"./EffectView-xdWvf2J0.js";import"./vec4f32-CjrfB-0a.js";import"./ProgramTemplate-CwsURtYf.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-DbRqQWyy.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new Z,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Q}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new et({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:i}=e;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=s=>this.layer.pixelFilter?this.layer.applyFilter(s):{...r,extent:i.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const i=this.view.extent,r=e.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(i)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),s=X(r,i);return s!=null?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,i,r,s){var h;(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const a=await this.layer.fetchImage(e,i,r,s);if(a.imageBitmap)return a.imageBitmap;const l=await this.layer.applyRenderer(a.pixelData,{signal:s.signal}),d=new tt(l.pixelBlock,(h=l.extent)==null?void 0:h.clone(),a.pixelData.pixelBlock);return d.filter=m=>this.layer.applyFilter(m),d}};o([n()],p.prototype,"attached",void 0),o([n()],p.prototype,"container",void 0),o([n()],p.prototype,"layer",void 0),o([n()],p.prototype,"strategy",void 0),o([n()],p.prototype,"timeExtent",void 0),o([n()],p.prototype,"view",void 0),o([n()],p.prototype,"updateRequested",void 0),o([n()],p.prototype,"updating",null),o([n()],p.prototype,"type",void 0),p=o([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const lt=p;class ht extends rt{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[H],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=F((e,i)=>this._update(e,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:s}=t.state,a=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,d]=t.state.size;this._loading=this.fetchPixels(a,l,d,i);const h=await this._loading;this._addToDisplay(h,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=t,a=new N(s);a.offset=[0,0],a.symbolizerParameters=e,a.rawPixelData=t,a.invalidateVAO(),a.x=r.xmin,a.y=r.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=s.width*e.symbolTileSize,a.height=s.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(a)}};o([n()],y.prototype,"fetchPixels",void 0),o([n()],y.prototype,"container",void 0),o([n()],y.prototype,"_loading",void 0),o([n()],y.prototype,"updating",null),y=o([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pt=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ht,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:l,width:d,height:h}=Y(t,e,i,a,s);if(s!=null&&!s.intersects(t))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,d,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=m;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?K(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),I),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{b(e)||_.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&i&&r&&s}async _getProjectedFullExtent(t){try{return it(this.layer.fullExtent,t)}catch{try{const i=(await T(this.layer.url,{query:{option:"footprints",outSR:U(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};o([n()],c.prototype,"attached",void 0),o([n()],c.prototype,"container",void 0),o([n()],c.prototype,"layer",void 0),o([n()],c.prototype,"timeExtent",void 0),o([n()],c.prototype,"type",void 0),o([n()],c.prototype,"view",void 0),o([n()],c.prototype,"updating",null),c=o([v("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const mt=c,ct=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return st(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:a}=s,l=at(s,r);if(!a||l==null)return[];const d=await l.getRequiredFields();C(r);const h=new O;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=d,h.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:g}=this.view,x=this.view.type==="2d"?new V(m,m,g):new V(.5*m,.5*m,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:D,signal:r==null?void 0:r.signal};return s.queryVisibleRasters(h,k).then(A=>A)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return o([n()],e.prototype,"layer",void 0),o([n()],e.prototype,"suspended",void 0),o([n({readOnly:!0})],e.prototype,"timeExtent",null),o([n()],e.prototype,"view",void 0),e=o([v("esri.views.layers.ImageryLayerView")],e),e};let w=class extends ct(nt(J(ot))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new L,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new G({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new W(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},$),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:E.isCollection(t)?t.at(0):t)instanceof P))return S();let i=[];return Array.isArray(t)||E.isCollection(t)?i=t.map(r=>r.clone()):t instanceof P&&(i=[t.clone()]),this._highlightGraphics.addMany(i),S(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var e,i;const t=!this.subview||this.subview.updating||!!((e=this._highlightView)!=null&&e.updating);return M("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),t}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:s}=this.subview;if(s===e)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new lt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new mt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};o([n()],w.prototype,"pixelData",null),o([n()],w.prototype,"subview",void 0),w=o([v("esri.views.2d.layers.ImageryLayerView2D")],w);const Ee=w;export{Ee as default};