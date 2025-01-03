import{$ as l,a9 as u,Z as _,a3 as p,O as c,Y as m,V as n,W as d,X as w}from"./index-Cek7aMWl.js";import{c as y,y as f,C as k,T as V,j as M,S as I,w as v}from"./Stop-B2XPoCu9.js";import{t as G}from"./highlightReasons-B4N7T4kB.js";import{f as F}from"./LayerView2D-BVUnvPSB.js";import{t as H}from"./GraphicContainer-Dde5PEzo.js";import{V as C}from"./GraphicsView2D-dxjiOMsf.js";import{y as $}from"./LayerView-Dyxjvlzf.js";import"./Container-BHyIqe9V.js";import"./EffectView-xdWvf2J0.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-BjUzSnJr.js";import"./AGraphicContainer-DCIE21Ap.js";import"./TechniqueInstance-BfDw3KsI.js";import"./UpdateTracking2D-B5DpfoKL.js";import"./BindType-BmZEZMMh.js";import"./Util-D3WFoRjI.js";import"./Program-DDsdwrVN.js";import"./BufferObject-Dtd0vzOu.js";import"./LabelMetric-BX4Cxpgy.js";import"./enums-BRXbslMp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-DD1zHGe8.js";import"./TileContainer-CeQi5mdh.js";import"./WGLContainer-BWXDcjjt.js";import"./VertexArrayObject-DSiuLT7k.js";import"./vec4f32-CjrfB-0a.js";import"./ProgramTemplate-CwsURtYf.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-DbRqQWyy.js";import"./featureConversionUtils-DoC7B3A2.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-D8t0EUoQ.js";import"./CIMSymbolHelper-CY__-kW6.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DnX1oK2e.js";import"./GeometryUtils-B2Qq2Dwi.js";import"./utils-BE8joJvK.js";import"./Rect-CUzevAry.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";import"./constants-D5zmR9t2.js";import"./FieldsIndex-Bjg3eA_S.js";import"./UnknownTimeZone-Cjv2gi-C.js";import"./OverrideHelper-ClkM4CZ1.js";import"./colorUtils-BlCLzs4t.js";import"./quantizationUtils-DeBnMDmu.js";import"./AttributeStore-BqZyTXj5.js";import"./labelUtils-C4iNx9oT.js";import"./TimeOnly-BJnd6TEv.js";import"./centroid-DdLmOD72.js";import"./timeSupport-4nmKr68x.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BuSxwAtS.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof V||t instanceof M||t instanceof I||t instanceof v}function b(t){return l.isCollection(t)&&t.length&&g(t.at(0))}function O(t){return Array.isArray(t)&&t.length>0&&g(t[0])}let o=class extends F($){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter(({popupTemplate:i})=>!!i)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:O(t)?t.map(r=>this._getNetworkFeatureUid(r)):b(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(p);return i.length?(this._addHighlight(i),c(()=>this._removeHighlight(i))):c()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(p));for(const e of t.added)this.addHandles([m(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),m(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const h=this._createGraphic(t);return this._networkFeatureMap.set(t,h),this._networkGraphicMap.set(h,t),void this._graphics.add(h)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=G("highlight");this._graphicsView.setHighlight(t.map(i=>({objectId:i,highlightFlags:e})))}};n([d()],o.prototype,"_graphics",void 0),n([d()],o.prototype,"_routeItems",null),o=n([w("esri.views.2d.layers.RouteLayerView2D")],o);const Lt=o;export{Lt as default};
