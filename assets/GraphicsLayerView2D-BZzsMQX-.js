import{a2 as o,a3 as m,a0 as g,a4 as l,Q as p,W as a,X as n,Y as c}from"./index-BdDnxAOC.js";import{j as d}from"./LayerView2D-C4DUwP3E.js";import{t as u}from"./GraphicContainer-D_BrvAv9.js";import{F as w}from"./GraphicsView2D-CJbb9JQt.js";import{e as y}from"./HighlightCounter-Czi-fdpx.js";import{y as V}from"./LayerView-C8i47HwB.js";import"./Container-C3Ew2ox5.js";import"./EffectView-CEbLCWgX.js";import"./AGraphicContainer-Cghh_e-f.js";import"./TechniqueInstance-C7tjEbHB.js";import"./UpdateTracking2D-i6Vln34G.js";import"./BindType-BmZEZMMh.js";import"./Util-CMsZAslL.js";import"./Program-BEbyLHne.js";import"./BufferObject-CMCaTtYE.js";import"./LabelMetric-CP2ejxD5.js";import"./enums-CmIX1y88.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Tk_OBeCC.js";import"./TileContainer-CAeBc3OW.js";import"./WGLContainer-DzTbsEWo.js";import"./VertexArrayObject-BNd6u6rq.js";import"./ProgramTemplate-Dwf_s9I8.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BCh95FQm.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-WSFqrkMp.js";import"./CIMSymbolHelper-vq9rAQVS.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-CiOfLTjw.js";import"./GeometryUtils-gjMcVHTd.js";import"./utils-DpS7XCOa.js";import"./Rect-CUzevAry.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./constants-F8oTIn7N.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./quantizationUtils-BIIdN1xY.js";import"./AttributeStore-vJIDWxy-.js";import"./TimeOnly-Ck8NzzKB.js";import"./centroid-DdLmOD72.js";import"./labelUtils-CE2jIVKQ.js";import"./queryUtils-DQi3qLST.js";import"./json-Wa8cmqdu.js";import"./timeSupport-BTKC7S1J.js";import"./normalizeUtilsSync-Chqxc3Gu.js";let s=class extends d(V){constructor(){super(...arguments),this._highlightCounter=new y}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof m?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):g.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(l);return e!=null&&e.length?(this._addHighlight(e,t),p(()=>this._removeHighlight(e,t))):p()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(r),h=this._getHighlightBits(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};a([n()],s.prototype,"graphicsView",void 0),s=a([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const fi=s;export{fi as default};
