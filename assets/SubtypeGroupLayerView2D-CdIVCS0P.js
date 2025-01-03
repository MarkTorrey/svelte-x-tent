import{W as a,Y as n,Z as d,$ as u,cm as l}from"./index-BdDnxAOC.js";import{r as g}from"./FeatureLayerView2D-C18Jmwtp.js";import"./EffectView-CEbLCWgX.js";import"./featureConversionUtils-BCh95FQm.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureFilter-mttTrSds.js";import"./timeSupport-DKa-6YSI.js";import"./FeatureSet-BSxK7X-2.js";import"./LayerView2D-C4DUwP3E.js";import"./Container-C3Ew2ox5.js";import"./TechniqueInstance-C7tjEbHB.js";import"./UpdateTracking2D-i6Vln34G.js";import"./BindType-BmZEZMMh.js";import"./Util-CMsZAslL.js";import"./Program-BEbyLHne.js";import"./BufferObject-CMCaTtYE.js";import"./LabelMetric-CP2ejxD5.js";import"./enums-CmIX1y88.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Tk_OBeCC.js";import"./TileContainer-CAeBc3OW.js";import"./WGLContainer-DzTbsEWo.js";import"./VertexArrayObject-BNd6u6rq.js";import"./ProgramTemplate-Dwf_s9I8.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-WSFqrkMp.js";import"./CIMSymbolHelper-vq9rAQVS.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-CiOfLTjw.js";import"./GeometryUtils-gjMcVHTd.js";import"./utils-DpS7XCOa.js";import"./Rect-CUzevAry.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./featureReductionUtils-Caulfaw_.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-NW2XP7xS.js";import"./labelingInfo-C81qEnrv.js";import"./labelUtils-CE2jIVKQ.js";import"./jsonUtils-DM4hoWoB.js";import"./heatmapUtils-BQROikav.js";import"./SDFHelper-DhGVVNzU.js";import"./floatRGBA-CrOZxjHk.js";import"./HighlightCounter-Czi-fdpx.js";import"./FeatureEffect-DVNjjsKx.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-prBco07P.js";import"./LayerView-C8i47HwB.js";import"./RefreshableLayerView-BG0mPyQL.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const $i=i;export{$i as default};
