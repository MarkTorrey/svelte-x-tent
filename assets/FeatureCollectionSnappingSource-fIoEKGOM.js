import{ag as E,e_ as F,o as h,P as d,B as V,e$ as C,f0 as D,bB as p,l as o,m as r,n as $,f1 as A}from"./index-eSY5-lt-.js";import{t as I}from"./memoize-uBdPJ80n.js";import{o as P,a as G}from"./queryEngineUtils-SOTtx6Iw.js";import{i as v,r as q,n as S}from"./symbologySnappingCandidates-HmjxrDnS.js";import"./VertexSnappingCandidate-UrIt3CGy.js";import"./PointSnappingHint-gEubw2iI.js";import"./LRUCache-mFQSPLKh.js";let a=class extends E{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return v();const n=async(s,l)=>(await A(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(s,l);return v(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return q(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?S(this._symbologySnappingSupported,async(i,n)=>{const s=await e.whenLayerView(t);return p(n),s.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):S()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;F(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),d),h(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.processor)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),d),V(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=I(P)}refresh(){}async fetchCandidates(e,t){var c;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const s=C(i),l=D(e,((c=this.view)==null?void 0:c.type)??"2d",s),m=await n.querySnapping(l,{signal:t});p(t);const g=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(m.candidates,g,t);p(t);const u=await this._symbologySnappingFetcher.fetch(y,t);p(t);const w=u.length===0?y:[...y,...u],_=this._snappingElevationFilter.filter(l,w),f=this._memoizedMakeGetGroundElevation(this.view,g);return _.map(b=>G(b,f))}};o([r({constructOnly:!0})],a.prototype,"layerSource",void 0),o([r({constructOnly:!0})],a.prototype,"view",void 0),o([r()],a.prototype,"_snappingElevationAligner",null),o([r()],a.prototype,"_snappingElevationFilter",null),o([r()],a.prototype,"_symbologySnappingFetcher",null),o([r()],a.prototype,"_layerView3D",void 0),o([r()],a.prototype,"_symbologySnappingSupported",null),a=o([$("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],a);export{a as FeatureCollectionSnappingSource};
