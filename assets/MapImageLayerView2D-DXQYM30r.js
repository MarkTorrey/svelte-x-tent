import{V as r,W as o,X as m,J as g,R as l,U as d,N as u,Y as c}from"./index-Cek7aMWl.js";import{a as y}from"./BitmapContainer-C1NznjUW.js";import{f}from"./LayerView2D-BVUnvPSB.js";import{V as x}from"./GraphicsView2D-dxjiOMsf.js";import{h as _}from"./HighlightGraphicContainer-Bifb2Uon.js";import{_ as w}from"./ExportStrategy-T9ZLbXA1.js";import{y as H}from"./LayerView-Dyxjvlzf.js";import{y as v}from"./ExportImageParameters-B9DCnJwi.js";import{i as I}from"./timeSupport-BuPGwwv2.js";import{i as V}from"./RefreshableLayerView-DrkgiCbv.js";import{_ as $}from"./MapServiceLayerViewHelper-DtOuf7Gh.js";import"./WGLContainer-BWXDcjjt.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-BX4Cxpgy.js";import"./enums-BRXbslMp.js";import"./Texture-BjUzSnJr.js";import"./enums-BlUEVwJR.js";import"./Program-DDsdwrVN.js";import"./BufferObject-Dtd0vzOu.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-DD1zHGe8.js";import"./VertexArrayObject-DSiuLT7k.js";import"./vec4f32-CjrfB-0a.js";import"./ProgramTemplate-CwsURtYf.js";import"./vec3f32-nZdmKIgz.js";import"./Container-BHyIqe9V.js";import"./EffectView-xdWvf2J0.js";import"./highlightReasons-B4N7T4kB.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-DbRqQWyy.js";import"./featureConversionUtils-DoC7B3A2.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-Bjg3eA_S.js";import"./UnknownTimeZone-Cjv2gi-C.js";import"./CIMSymbolHelper-CY__-kW6.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DnX1oK2e.js";import"./GeometryUtils-B2Qq2Dwi.js";import"./utils-BE8joJvK.js";import"./Rect-CUzevAry.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";import"./OverrideHelper-ClkM4CZ1.js";import"./colorUtils-BlCLzs4t.js";import"./quantizationUtils-DeBnMDmu.js";import"./AttributeStore-BqZyTXj5.js";import"./UpdateTracking2D-B5DpfoKL.js";import"./BindType-BmZEZMMh.js";import"./Util-D3WFoRjI.js";import"./labelUtils-C4iNx9oT.js";import"./TimeOnly-BJnd6TEv.js";import"./centroid-DdLmOD72.js";import"./timeSupport-4nmKr68x.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-D8t0EUoQ.js";import"./constants-D5zmR9t2.js";import"./normalizeUtilsSync-BuSxwAtS.js";import"./AGraphicContainer-DCIE21Ap.js";import"./TechniqueInstance-BfDw3KsI.js";import"./TileContainer-CeQi5mdh.js";import"./Bitmap-DNzEY9pm.js";import"./sublayerUtils-CsQjXgeP.js";import"./popupUtils-vPBZ24BA.js";const E=t=>{let i=class extends t{initialize(){this.exportImageParameters=new v({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return I(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return r([o()],i.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],i.prototype,"floors",null),r([o({readOnly:!0})],i.prototype,"exportImageVersion",null),r([o()],i.prototype,"layer",void 0),r([o()],i.prototype,"suspended",void 0),r([o({readOnly:!0})],i.prototype,"timeExtent",null),i=r([m("esri.views.layers.MapImageLayerView")],i),i};let a=class extends E(V(f(H))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{l(e)||d.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,p=e>=10.3,n=e>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(s,h)=>u(s,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,h)=>{this._highlightView.graphicUpdateHandler({graphic:s,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:p,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,p){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...p})}fetchImageBitmap(t,i,e,p){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...p})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],a.prototype,"strategy",void 0),r([o()],a.prototype,"updating",void 0),a=r([m("esri.views.2d.layers.MapImageLayerView2D")],a);const Bt=a;export{Bt as default};
