import{o as l,P as n,V as g,q as f,l as w,n as d}from"./index-eSY5-lt-.js";import{t as u,p as h}from"./jsonUtils-M3inctU9.js";import{d as V}from"./FeatureSet-mcxSPZVd.js";import{m as b}from"./LayerView2D-fHeQM5c3.js";import{i as S}from"./GraphicContainer-Pp_yEz1D.js";import{r as _}from"./GraphicsView2D-i7e92lLy.js";import{u as T}from"./LayerView-CRo_qb-x.js";import"./UniqueValueRenderer-hljh8Sos.js";import"./LegendOptions-x-5oaDqO.js";import"./diffUtils-x5OXhJZZ.js";import"./SizeVariable-221gAT5i.js";import"./colorRamps-rojoPCoV.js";import"./ColorStop-y1faJUUg.js";import"./jsonUtils-1IxKPsH1.js";import"./styleUtils-BMYfqyTs.js";import"./DictionaryLoader-W3_-N3pK.js";import"./LRUCache-mFQSPLKh.js";import"./Version-DuGO31mq.js";import"./FieldsIndex-_W1Us-oq.js";import"./UnknownTimeZone-iVS1S_Kf.js";import"./heatmapUtils-QdzYLNxE.js";import"./Container-AO0ma2pG.js";import"./EffectView-eHJp2ynv.js";import"./definitions-otzk_d_r.js";import"./enums-8pc8f5Ge.js";import"./Texture-4vQG0qLG.js";import"./color-Y1HD3ytM.js";import"./enums--FbEXJ87.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./number-sTjsTbdA.js";import"./BaseGraphicContainer-i9-NOgp7.js";import"./FeatureContainer-x5rBbMr_.js";import"./AttributeStoreView-v_U2sesH.js";import"./TiledDisplayObject-yP0_0rbx.js";import"./labelingInfo-Ik6k9hmR.js";import"./LabelClass-Ii0xtB2a.js";import"./labelUtils-x_C8o7Up.js";import"./defaults--brCOrwa.js";import"./defaultsJSON-x-mq3Ho7.js";import"./WGLContainer-NUKBXko_.js";import"./FramebufferObject-FWwprw92.js";import"./VertexArrayObject-whl5pCEr.js";import"./vec4f32-NvfHy9q7.js";import"./ProgramTemplate-mAY_399P.js";import"./GeometryUtils-PBUEihia.js";import"./alignmentUtils-XT3TYmYW.js";import"./StyleDefinition-ohiNeWtS.js";import"./config-z2KFXUcx.js";import"./earcut-wP_5WnqY.js";import"./featureConversionUtils-91rcTs0M.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./OptimizedGeometry-CbNXANBG.js";import"./visualVariablesUtils-lT9viKWj.js";import"./cimAnalyzer-DsuWkQlK.js";import"./fontUtils-GE0ho--n.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-mThgM4t0.js";import"./GeometryUtils-CEMOhUyj.js";import"./utils-jQLeeGOF.js";import"./Rect-pT1ASav_.js";import"./callExpressionWithFeature-rytrJuuz.js";import"./quantizationUtils-DTwa03mn.js";import"./floatRGBA-9E5qKLsz.js";import"./ExpandedCIM-bbZk55Wb.js";import"./clusterUtils-kJgVNgUU.js";import"./MD5-uECS9GB-.js";import"./util-7E7JUKUD.js";import"./TileContainer-Dws-iayU.js";import"./vec3f32-cbLeGFQ-.js";import"./normalizeUtilsSync-vawo822E.js";import"./projectionSupport-7ZBNFFZX.js";import"./json-v6EOeNTY.js";import"./Matcher-Mv_XwJSb.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-lq2gJIeK.js";import"./ComputedAttributeStorage-JNIiBSw3.js";import"./TimeOnly-WOAkj6tI.js";let y=class extends b(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,o){if(!this.graphicsViews.length)return null;const e=this.layer;return this.graphicsViews.reverse().flatMap(r=>{const t=this._popupTemplates.get(r),m=r.hitTest(i);for(const p of m)p.layer=e,p.sourceLayer=e,p.popupTemplate=t;return m}).map(r=>({type:"graphic",graphic:r,layer:e,mapPoint:i}))}update(i){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:o,featureSet:e,layerDefinition:r}of i){const t=V.fromJSON(e),m=new g(t.features),p=r.drawingInfo,c=o?f.fromJSON(o):null,s=u(p.renderer),a=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:m,renderer:s,container:new S(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=a,this._popupTemplates.set(a,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},n),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new h({symbol:i})},n),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new h({symbol:i})},n),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new h({symbol:i})},n)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=w([d("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Ki=y;export{Ki as default};
