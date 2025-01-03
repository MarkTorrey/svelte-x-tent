import{aN as F,hm as E,Z as h,dR as V,hn as $,ho as C,hp as D,dm as p,W as r,X as o,hq as A,$ as d,Y as I}from"./index-BdDnxAOC.js";import{o as R,i as q}from"./queryEngineUtils-CJcHT23N.js";import{i as v,r as G,n as S}from"./symbologySnappingCandidates-CLXMu7zo.js";import"./VertexSnappingCandidate-aiDPUd11.js";import"./PointSnappingHint-xTfZ1GaJ.js";import"./LRUCache-CSFO1iZh.js";let a=class extends F{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,n=e!=null&&e.type==="3d";if(!n||t.type==="subtype-group")return v();const i=async(l,s)=>(await A(e.whenLayerView(t),s)).elevationAlignPointsInFeatures(l,s);return v(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:i})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?S(this._symbologySnappingSupported,async(n,i)=>{const l=await e.whenLayerView(t);return p(i),l.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},i)}):S()}get _layerView3D(){const{view:e}=this;if(e==null||e.type==="2d")return null;const{layer:t}=this.layerSource;return e.allLayerViews.find(n=>n.layer===t)}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&this.addHandles([e.elevationProvider.on("elevation-change",({context:n})=>{const{elevationInfo:i}=t;E(n,i)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),d),h(()=>{var n;return this._layerView3D!=null?(n=this._layerView3D.layer)==null?void 0:n.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),d),V(()=>{var n;return(n=this._layerView3D)==null?void 0:n.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=$(q)}refresh(){}async fetchCandidates(e,t){var c;const{layer:n}=this.layerSource,i=n.source;if(!(i!=null&&i.querySnapping))return[];const l=C(n),s=D(e,((c=this.view)==null?void 0:c.type)??"2d",l),m=await i.querySnapping(s,{signal:t});p(t);const u=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(m.candidates,u,t);p(t);const g=await this._symbologySnappingFetcher.fetch(y,t);p(t);const w=g.length===0?y:[...y,...g],_=this._snappingElevationFilter.filter(s,w),f=this._memoizedMakeGetGroundElevation(this.view,u);return _.map(b=>R(b,f))}};r([o({constructOnly:!0})],a.prototype,"layerSource",void 0),r([o({constructOnly:!0})],a.prototype,"view",void 0),r([o()],a.prototype,"_snappingElevationAligner",null),r([o()],a.prototype,"_snappingElevationFilter",null),r([o()],a.prototype,"_symbologySnappingFetcher",null),r([o()],a.prototype,"_layerView3D",null),r([o()],a.prototype,"_symbologySnappingSupported",null),a=r([I("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],a);export{a as FeatureCollectionSnappingSource};
