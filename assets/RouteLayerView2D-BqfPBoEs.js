import{a0 as l,eo as u,$ as _,a4 as p,Q as c,Z as d,W as n,X as m,Y as w}from"./index-BdDnxAOC.js";import{c as y,y as f,C as k,T as M,j as F,S as V,w as I}from"./Stop-BmUEbswf.js";import{j as v}from"./LayerView2D-C4DUwP3E.js";import{t as G}from"./GraphicContainer-D_BrvAv9.js";import{F as H}from"./GraphicsView2D-CJbb9JQt.js";import{y as C}from"./LayerView-C8i47HwB.js";import"./Container-C3Ew2ox5.js";import"./EffectView-CEbLCWgX.js";import"./AGraphicContainer-Cghh_e-f.js";import"./TechniqueInstance-C7tjEbHB.js";import"./UpdateTracking2D-i6Vln34G.js";import"./BindType-BmZEZMMh.js";import"./Util-CMsZAslL.js";import"./Program-BEbyLHne.js";import"./BufferObject-CMCaTtYE.js";import"./LabelMetric-CP2ejxD5.js";import"./enums-CmIX1y88.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Tk_OBeCC.js";import"./TileContainer-CAeBc3OW.js";import"./WGLContainer-DzTbsEWo.js";import"./VertexArrayObject-BNd6u6rq.js";import"./ProgramTemplate-Dwf_s9I8.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BCh95FQm.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-WSFqrkMp.js";import"./CIMSymbolHelper-vq9rAQVS.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-CiOfLTjw.js";import"./GeometryUtils-gjMcVHTd.js";import"./utils-DpS7XCOa.js";import"./Rect-CUzevAry.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./constants-F8oTIn7N.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./quantizationUtils-BIIdN1xY.js";import"./AttributeStore-vJIDWxy-.js";import"./TimeOnly-Ck8NzzKB.js";import"./centroid-DdLmOD72.js";import"./labelUtils-CE2jIVKQ.js";import"./queryUtils-DQi3qLST.js";import"./json-Wa8cmqdu.js";import"./timeSupport-BTKC7S1J.js";import"./normalizeUtilsSync-Chqxc3Gu.js";const $=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof F||t instanceof V||t instanceof I}function U(t){return l.isCollection(t)&&t.length&&g(t.at(0))}function b(t){return Array.isArray(t)&&t.length>0&&g(t[0])}const j=new Set(["default"]);let o=class extends v(C){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter(({popupTemplate:i})=>!!i)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:b(t)?t.map(r=>this._getNetworkFeatureUid(r)):U(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(p);return i.length?(this._addHighlight(i),c(()=>this._removeHighlight(i))):c()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new G(t.featuresTilingScheme);this._graphicsView=new H({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return $.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(p));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const h=this._createGraphic(t);return this._networkFeatureMap.set(t,h),this._networkGraphicMap.set(h,t),void this._graphics.add(h)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=this._getHighlightBits(j);this._graphicsView.setHighlight(t.map(i=>({objectId:i,highlightFlags:e})))}};n([m()],o.prototype,"_graphics",void 0),n([m()],o.prototype,"_routeItems",null),o=n([w("esri.views.2d.layers.RouteLayerView2D")],o);const At=o;export{At as default};
