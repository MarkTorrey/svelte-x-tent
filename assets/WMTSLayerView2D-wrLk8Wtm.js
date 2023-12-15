import{h as _,y as w,r as g,f as u,j as p,g as m,k as I,l as f,m as S,n as T}from"./index-eSY5-lt-.js";import{r as V,n as d}from"./imageUtils-owCsLWb-.js";import{m as v}from"./LayerView2D-fHeQM5c3.js";import{u as x}from"./LayerView-CRo_qb-x.js";import{a as M}from"./RefreshableLayerView-FnCvUyzs.js";import"./BitmapTileContainer-zWhyqFAw.js";import"./Bitmap-Qg1VS7OT.js";import"./Container-AO0ma2pG.js";import"./EffectView-eHJp2ynv.js";import"./definitions-otzk_d_r.js";import"./enums-8pc8f5Ge.js";import"./Texture-4vQG0qLG.js";import"./TiledDisplayObject-yP0_0rbx.js";import"./WGLContainer-NUKBXko_.js";import"./FramebufferObject-FWwprw92.js";import"./VertexArrayObject-whl5pCEr.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./vec4f32-NvfHy9q7.js";import"./color-Y1HD3ytM.js";import"./enums--FbEXJ87.js";import"./number-sTjsTbdA.js";import"./ProgramTemplate-mAY_399P.js";import"./GeometryUtils-PBUEihia.js";import"./alignmentUtils-XT3TYmYW.js";import"./heatmapUtils-QdzYLNxE.js";import"./StyleDefinition-ohiNeWtS.js";import"./config-z2KFXUcx.js";import"./earcut-wP_5WnqY.js";import"./featureConversionUtils-91rcTs0M.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./OptimizedGeometry-CbNXANBG.js";import"./TileContainer-Dws-iayU.js";const q=new Set([102113,102100,3857,3785,900913]),R=[0,0];let a=class extends M(V(v(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new _(e),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s)}),this._tileStrategy=new g({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return u((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const l=new p(0,0,0,0);let o;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),o=await this._fetchImage(l,s)}catch(h){if(m(h))throw h;if(r<3){const n=this._tileInfoView.getTileParentId(e.id);if(n){const c=new p(n),y=await this.fetchTile(c,{...t,resamplingLevel:r+1});return d(this._tileInfoView,y,c,e)}}throw h}return d(this._tileInfoView,o,l,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){m(t)||I.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>{var r;return u((r=s.tileInfo)==null?void 0:r.spatialReference,t)});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>{var r;return q.has(((r=s.tileInfo)==null?void 0:r.spatialReference.wkid)??-1)})),i}};f([S({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=f([T("esri.views.2d.layers.WMTSLayerView2D")],a);const oe=a;export{oe as default};