import{W as _,X as M,Y as x,aN as q,lx as Ee,fG as Oe,dm as B,dO as ye,m8 as Me,B as De,aA as G,gv as Fe,cm as Be,k1 as v,Q as Ge,li as Pe,i1 as se,mH as Le,je as we,bh as Ne,bi as ke,bp as P,gd as je,r9 as Ue,oX as J,ef as ze,gL as Qe,ez as ne,gK as We,ra as qe,hL as Ve,jh as Ye,mh as He,kM as be,rb as Je,bn as F,b4 as Ze,cI as Xe,aS as b,rc as Ke,rd as et,bT as tt,aQ as ie,b6 as rt,hD as st,dY as nt,jj as ae,aq as oe,dc as de,Z as it,$ as at}from"./index-BdDnxAOC.js";import{V as ot}from"./QueryEngine-fI4EtBUM.js";import{h as dt,E as Ie}from"./PooledRBush-CKDzTrD4.js";import{n as lt}from"./centroid-DdLmOD72.js";import{s as Z}from"./OptimizedGeometry-BF8iz5FO.js";import{d as ct}from"./query-Cagu3AtE.js";import{n as ut}from"./pbf-loJXkAL8.js";import{u as ht}from"./quantizationUtils-BIIdN1xY.js";import{Z as mt}from"./FieldsIndex-DdufUIvd.js";import{b as ft,h as pt}from"./pbfQueryUtils-DZpH09BK.js";import{l as _t,t as gt}from"./Indices-DL2vOaxI.js";import{q as yt,s as wt,t as bt}from"./projectVectorToPoint-BtXdAAk7.js";import{t as It}from"./glUtil-Dw6UJ_iI.js";import{n as L}from"./NormalAttribute.glsl-BvcOWU6V.js";import{u as Rt,a as vt,t as xt,V as Ct,b as Tt,c as St,d as At,e as N}from"./HUDMaterial.glsl-tln8Kpvy.js";import{A as le,q as $t,u as Et}from"./Geometry-0zkcBCci.js";import{e as p}from"./VertexAttribute-Cq4MnHjR.js";import{i as Ot,u as Mt,n as Dt,o as Ft,c as Bt}from"./RealisticTree.glsl-3n2GOgJt.js";import{e as ce}from"./basicInterfaces-CZwQPxTp.js";import{B as Re,o as Gt}from"./DefaultMaterial-ZWi4WMy4.js";import{C as Pt}from"./computeTranslationToOriginAndRotation-BpuGNDNV.js";import{c as Lt,D as Nt,t as ue}from"./dehydratedFeatureUtils-BOLOU81j.js";import{t as I}from"./orientedBoundingBox-CDDAEjLg.js";import{a as kt}from"./spatialReferenceEllipsoidUtils-dsdmGygT.js";import{J as jt,k as Ut}from"./boundedPlane-CkcDH2eT.js";import"./featureConversionUtils-BCh95FQm.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./LRUCache-CSFO1iZh.js";import"./WhereClause-pNTvpIeY.js";import"./TimeOnly-Ck8NzzKB.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./timeSupport-BTKC7S1J.js";import"./queryUtils-DQi3qLST.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Chs1SJpX.js";import"./heatmapUtils-BQROikav.js";import"./utils-DmAx5TEG.js";import"./utils-B7w1pNop.js";import"./ClassBreaksDefinition-C5Cld0P-.js";import"./SnappingCandidate-O5eRSE6e.js";import"./queryZScale-C2obsE-l.js";import"./InterleavedLayout-D4EIJKmV.js";import"./BufferView-DDmSnYbN.js";import"./types-D0PSWh4d.js";import"./Util-CMsZAslL.js";import"./IntersectorInterfaces-BgX4KEwK.js";import"./Octree-CHZqCJI3.js";import"./BufferObject-CMCaTtYE.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./interfaces-CJw7Cnm-.js";import"./NestedMap-GuqgquCN.js";import"./VertexArrayObject-BNd6u6rq.js";import"./floatRGBA-CrOZxjHk.js";import"./AlphaCutoff-UcccL64p.js";import"./renderState-BKlWY516.js";import"./BindType-BmZEZMMh.js";import"./requestImageUtils-vR0S8NIj.js";import"./triangle-DshsWHpa.js";import"./lineSegment-BdB5sSqU.js";import"./symbolColorUtils-DgKVAaAs.js";import"./doublePrecisionUtils-B0owpBza.js";import"./vec3f32-nZdmKIgz.js";let R=class extends q{constructor(e){super(e),this._removing=0,this._tiles=new Ee}destroy(){for(const e of this._tiles.values())e.remove();this._tiles.clear()}get updating(){if(this._removing>0)return!0;for(const e of this._tiles.values())if(!e.finished)return!0;return!1}async onTileTreeChange(e){const{added:t,removed:r}=e,i=this._tiles,n=[];for(const a of r){const o=i.get(a);o!=null&&(o.abort(),i.delete(a),n.push({tileId:a}))}for(const a of t)i.has(a.id)||i.set(a.id,Oe(o=>this._addTile(a,o)));await this._removeTiles(n)}async _addTile(e,t){const r=await this.addTile(e,t);return B(t),r}async _removeTiles(e){this._removing++,await this.removeTiles(e),this._removing--}};_([M()],R.prototype,"updating",null),_([M({constructOnly:!0})],R.prototype,"addTile",void 0),_([M({constructOnly:!0})],R.prototype,"removeTiles",void 0),_([M()],R.prototype,"_removing",void 0),R=_([x("esri.views.3d.layers.graphics.pipeline.Tile3DManager")],R);let X=class{constructor(e,t){this._index=e,this._view=t}getObjectId(){return this._view.getObjectId(this._index)}getAttribute(e){return this._view.getAttribute(this._index,e)}getAttributeAsTimestamp(e){return this._view.getAttributeAsTimestamp(this._index,e)}getAttributes(){return this._view.getAttributes(this._index)}getOptimizedGeometry(){return this._view.getOptimizedGeometry(this._index)}getCentroid(e){return this._view.getCentroid(this._index,e)}getBounds(){return this._view.getBounds(this._index)}getBoundingBox(){return this._view.getBoundingBox(this._index)}cloneWithGeometry(e){return new zt(this._index,this._view,e)}},zt=class extends X{constructor(e,t,r){super(e,t),this._geometryOverride=r}getOptimizedGeometry(){return this._geometryOverride}getCentroid(e){return lt(new Z,this._geometryOverride,e.hasZ,e.hasM)}},Qt=class{constructor(){this._storedTiles=new Map,this._pageBounds=new Map,this.events=new ye,this.featureAdapter=K.shared}addTile(e){this._storedTiles.set(e.descriptor.id,e);for(const t of e.pages)this._addPage(t)}removeTile(e){const t=this._storedTiles,r=t.get(e);if(r!=null){t.delete(e);for(const i of r.pages)this._removePage(i)}}_addPage(e){const{featureCount:t}=e;if(t===0)return;const r=new dt(9,n=>e.getBounds(n)),i=new Array;for(let n=0;n<t;++n)i[n]=n;r.load(i),this._pageBounds.set(e,r),this.events.emit("changed")}_removePage(e){this._pageBounds.delete(e),this.events.emit("changed")}clear(){this._storedTiles.clear(),this._pageBounds.clear(),this.events.emit("changed")}forEach(e){for(const[t,r]of this._pageBounds)r.all(i=>e(new X(i,t)))}forEachInBounds(e,t){D.minX=e[0],D.minY=e[1],D.maxX=e[2],D.maxY=e[3];for(const[r,i]of this._pageBounds)i.search(D,n=>t(new X(n,r)))}forEachBounds(e,t){for(const r of e)t(r.getBoundingBox())}getFullExtent(e){let t=1/0,r=1/0,i=-1/0,n=-1/0;for(const a of this._pageBounds.values()){const{minX:o,minY:d,maxX:c,maxY:u}=a.toJSON();t=Math.min(t,o),r=Math.min(r,d),i=Math.min(i,c),n=Math.min(n,u)}return{xmin:t,ymin:r,xmax:i,ymax:n,spatialReference:e}}},K=class{getObjectId(e){return e.getObjectId()}getAttribute(e,t){return e.getAttribute(t)}getAttributeAsTimestamp(e,t){return e.getAttributeAsTimestamp(t)}getAttributes(e){return e.getAttributes()}getGeometry(e){return e.getOptimizedGeometry()}getCentroid(e,t){return e.getCentroid(t)}cloneWithGeometry(e,t){return e.cloneWithGeometry(t)}};K.shared=new K;const D=new Ie;let Wt=class{constructor(e,t){this.descriptor=e,this.pages=t}},qt=class{constructor(e){const t=new ut(new Uint8Array(e),new DataView(e));this._reader=t,this._index=Vt(t)}get featureCount(){return this._index.featureIndices.length}get exceededTransferLimit(){return this._index.exceededTransferLimit}getObjectId(e){return this.getAttribute(e,this._index.objectIdFieldName)}getAttribute(e,t){var d;const{_index:{fieldsIndex:r,attributeIndices:i}}=this,n=(d=r.get(t))==null?void 0:d.index;if(n==null)return;const a=i[e*r.fields.length+n],o=this._reader;return o.move(a),Y(o)}getAttributeAsTimestamp(e,t){const r=this.getAttribute(e,t);return typeof r=="string"?new Date(r).getTime():typeof r=="number"||r==null?r:null}getAttributes(e){const{_index:{fieldsIndex:t,attributeIndices:r}}=this,i=e*t.fields.length,n=this._reader,a={};for(const o of t.fields){const d=r[i+o.index];n.move(d),a[o.name]=Y(n)}return a}getCoordinates(e,t,r=0){const i=this._reader,{transform:n,featureIndices:a}=this._index,{scale:o,translate:d}=n;i.move(a[e]),this._readCoordinates(o,d,t,r)}getOptimizedGeometry(e){const t=G();return this.getCoordinates(e,t),new Z([],t)}getCentroid(e,{hasZ:t,hasM:r}){this.getCoordinates(e,$);const[i,n,a]=$,o=[i,n];return t&&(o[3]=a),r&&(o[t?4:3]=0),new Z([],o)}getBounds(e){this.getCoordinates(e,$);const[t,r]=$,i=new Ie;return i.minX=t,i.minY=r,i.maxX=t,i.maxY=r,i}getBoundingBox(e){this.getCoordinates(e,$);const[t,r,i]=$;return Me(t,r,i,t,r,i)}readAllObjectIds(e,t=0){const r=this._reader,{_index:i,featureCount:n}=this,{objectIdFieldName:a,attributeIndices:o,fieldsIndex:d}=i,c=d.get(a).index,u=d.fields.length;for(let l=0;l<n;++l){const h=o[l*u+c];r.move(h),e[t++]=Y(r)}return t}readAllCoordinates(e,t=0){const r=this._reader,{transform:i,featureIndices:n}=this._index,{scale:a,translate:o}=i;for(const d of n)r.move(d),t=this._readCoordinates(a,o,e,t);return t}_readCoordinates([e,t,r],[i,n,a],o,d){const l=this._reader,h=l.getLength(),m=l.pos()+h;for(;l.pos()<m&&l.next();)switch(l.tag()){case 2:{const y=l.getLength(),g=l.pos()+y;for(;l.pos()<g&&l.next();)l.tag()===3?(l.getUInt32(),o[d++]=i+e*l.getSInt64(),o[d++]=n+t*l.getSInt64(),o[d++]=a+r*l.getSInt64()):l.skip();break}default:l.skip()}return d}};function Vt(s){for(;s.next();){if(s.tag()===2)return Yt(s.getMessage());s.skip()}Q()}function Yt(s){for(;s.next();){if(s.tag()===1)return Ht(s.getMessage());s.skip()}Q()}function Ht(s){let u,l,h=!1,m=!1,y=0;const g=new Array,C=new Array,T=new Array;for(;s.next();)switch(s.tag()){case 1:l=s.getString();break;case 7:s.getEnum()!==0&&Q();break;case 9:h=s.getBool()??!1;break;case 12:u=ht(s.processMessage(pt));break;case 13:{const A=s.processMessage(ft);A.index=y++,g.push(A);break}case 15:{C.push(s.pos());const A=s.getUInt32(),V=s.pos()+A;for(;s.pos()<V&&s.next();)s.tag()===1&&T.push(s.pos()),s.skip();break}case 10:m=s.getBool()??!1;break;default:s.skip()}const S=new mt(g);return u!=null&&m&&l!=null&&S.has(l)||Q(),{transform:u,exceededTransferLimit:h,fieldsIndex:S,objectIdFieldName:l,featureIndices:C,attributeIndices:T}}function Q(){const s=new De("pbf-parsing-failed","Error while parsing PBF",new Error);throw console.error(s),s}function Y(s){const u=s.getLength(),l=s.pos()+u;for(;s.pos()<l&&s.next();)switch(s.tag()){case 1:return s.getString();case 2:return s.getFloat();case 3:return s.getDouble();case 4:return s.getSInt32();case 5:return s.getUInt32();case 6:return s.getInt64();case 7:return s.getUInt64();case 8:return s.getSInt64();case 9:return s.getBool();default:return s.skip(),null}return null}const $=G(),he=8e3,Jt=4,Zt=4;let Xt=class{constructor(e,t,r,i,n){this.spatialReference=e,this.url=r,this.objectIdField=i,this.capabilities=n;const{supportsMaxRecordCountFactor:a,maxRecordCount:o}=this.capabilities.query,d=a?Jt:1,c=(o??he)*d;this._pageSize=Math.min(he,c);const u=t.clone();u.cacheHint=!0,u.resultType="tile",u.outSpatialReference=e,u.returnGeometry=!0,u.returnZ=!0,u.maxRecordCountFactor=d,u.num=this._pageSize,u.outFields=[i],this._baseQuery=u}async fetch(e,t){const{spatialReference:r}=this,i=Fe(e.extent,r),n=this._baseQuery.clone();n.geometry=i;const a=new Array;let o=0,d=!1,c=1;for(;!d;){const u=[];for(let h=0;h<c;++h)u.push(this._fetchPage(n,o++,t));const l=await Promise.all(u);B(t);for(const h of l){const m=h.featureCount!==0;d||(d=!h.exceededTransferLimit||!m),m&&a.push(h)}c=Math.min(c+1,Zt)}return new Wt(e,a)}async _fetchPage(e,t,r){const i=e.clone();i.start=t*this._pageSize;const n=(await ct(this.url,i,{signal:r})).data;return B(r),new qt(n)}},U=class extends Rt{constructor(s){super(s),this._hasHighlights=!1,this._glMaterials=null,this._produces=new Map,this._renderGeometries=new Map,this._vaoCache=null,this._drawParameters=new vt,this._bufferWriter=null}get produces(){return this._produces}initialize(){this._bufferWriter=this.material.createBufferWriter(),this.material.produces.forEach((s,e)=>{this._produces.set(e,t=>!!(t!==L.Highlight&&t!==L.ShadowHighlight||this._hasHighlights)&&s(t))})}destroy(){this._glMaterials.dispose();const s=this._renderGeometries.keys();for(const e of s)this.removeRenderGeometry(e)}acquireTechniques(s){const e=this.material;if(!e.shouldRender(s))return null;const{output:t,bind:r}=s,i=e.produces.get(r.slot);if(!(i!=null&&i(t))||(t===L.Highlight||t===L.ShadowHighlight)&&!this._hasHighlights)return null;const n=this._glMaterials.load(s.rctx,r.slot,t);return n==null?void 0:n.beginSlot(r)}render(s,e){const t=this._renderGeometries;if(t.size===0)return;const{bind:r}=s,i=r.slot===le.OCCLUDER_MATERIAL||r.slot===le.TRANSPARENT_OCCLUDER_MATERIAL?r.slot:null,n=s.rctx;n.runAppleAmdDriverHelper(),n.bindTechnique(e,r,this.material.parameters);const a=e.program;for(const[o,d]of t)this._drawParameters.origin=d.localOrigin,a.bindDraw(r,this.material.parameters,this._drawParameters),e.ensureAttributeLocations(d.vao),n.bindVAO(d.vao),n.setPipelineState(e.getPipeline(!1,i)),n.drawArrays(e.primitiveType,0,d.numElements)}initializeRenderContext(s,e){this._glMaterials=new xt(this.material,s.materials);const t=s.renderContext.rctx.getVaoCache(this.material.vertexAttributeLocations,It(this._bufferWriter.vertexBufferLayout));this._vaoCache=t}uninitializeRenderContext(){}addRenderGeometry(s,e,t){this.removeRenderGeometry(s);const r=this._bufferWriter.vertexBufferLayout.stride,i=this._vaoCache.newVao(Ct(e.data.byteLength));i.vertexBuffers.get("geometry").setSubData(new Uint8Array(e.data),0,0,e.elementCount*r);const n={localOrigin:t,vao:i,numElements:e.elementCount};return this._renderGeometries.set(s,n),n}removeRenderGeometry(s){const e=this._renderGeometries.get(s);e!=null&&(this._vaoCache.deleteVao(e.vao),this._renderGeometries.delete(s))}};_([M({constructOnly:!0})],U.prototype,"material",void 0),U=_([x("esri.views.3d.layers.graphics.pipeline.rendering.DirectRenderer")],U);let ee=class{constructor(e){this._optionalFields=new Array,this._instanceIndexToFeatureId=new Map,this._featureIdToInstanceIndex=new Map,this._disposeResourceHandles=new Array,this._lodRendererResources=null,this.layerUid=e.layerUid,this.view=e.view,this.sharedResources=this.view.sharedSymbolResources,this.scheduler=this.view.resourceController.scheduler}async doLoad(e,t,r){Be("enable-feature:objectAndLayerId-rendering")&&this._optionalFields.push(p.OBJECTANDLAYERIDCOLOR);const i=Kt(c=>t(c),e),n=this.view._stage,a=Ot(i);n.addMany(a),this._addDisposeResource(()=>n.removeMany(a));const o=Mt(i);n.addMany(o),this._addDisposeResource(()=>{o.forEach(c=>c.unload()),n.removeMany(o)}),await Promise.all(o.map(c=>this.view._stage.schedule(()=>c.load(n.renderView.renderingContext),r))),B(r);const d=await this._createLodRenderer(i,r);this._lodRendererResources={lodRenderer:d,materials:a,textures:o}}addInstances(e){const t=this._lodRendererResources;if(t==null)return;const{featureIds:r,localTransforms:i,globalTransforms:n}=e,a=t.lodRenderer;if(a==null)return;const o=a.instanceData,d=r.length;for(let c=0;c<d;++c){const u=r[c],l=o.addInstance(),h=o.view,m=16*c;h.localTransform.copyFromTypedBuffer(l,i,m),h.globalTransform.copyFromTypedBuffer(l,n,m),o.updateModelTransform(l),o.setVisible(l,!0),this._instanceIndexToFeatureId.set(l,u),this._featureIdToInstanceIndex.set(u,l)}}removeInstances(e){const t=this._lodRendererResources;if(t==null)return;const r=t==null?void 0:t.lodRenderer,i=r.instanceData,n=this._instanceIndexToFeatureId,a=this._featureIdToInstanceIndex,o=e.length;for(let d=0;d<o;++d){const c=e[d],u=a.get(c);u!=null&&(i.removeInstance(u),n.delete(u),a.delete(c))}}_addDisposeResource(e){this._disposeResourceHandles.push(e)}async _createLodRenderer(e,t){const r=this.view._stage,i={layerUid:this.layerUid,graphicUid:a=>1,notifyGraphicGeometryChanged:a=>1,notifyGraphicVisibilityChanged:a=>1},n=new yt({symbol:e,optionalFields:this._optionalFields,metadata:i,shaderTransformation:null},this.scheduler);return n.slicePlaneEnabled=!1,this._addDisposeResource(()=>{r.removeRenderPlugin(n),n.destroy()}),await r.addRenderPlugin(n,t),n}};function Kt(s,e){const t=e.levels.map(r=>{const i=r.components.map(n=>{const a=s(n.materialId);if(!er(a))throw new Error("LodRenderer only supports DefaultMaterial");const o=a.createBufferWriter(),d={material:a,vertexBufferLayout:o.vertexBufferLayout,buffer:n.renderGeometryBuffer.data,elementCount:n.renderGeometryBuffer.elementCount,boundingInfo:n.boundingInfo};return new Dt(d)});return new Ft(i,r.minScreenSpaceRadius)});return new Bt(t)}function er(s){return s!=null&&"materialType"in s&&s.materialType==="default"}ee=_([x("esri.views.3d.layers.graphics.pipeline.rendering.LodRenderer")],ee);let me=class extends q{constructor(e){super(),this.view=null,this.layerUid=null,this._renderGeometries=new Map,this._materials=new Map,this._directRenderers=new Map,this._lodRenderers=new Map,this.view=e.view,this.layerUid=e.layerUid}initialize(){}destroy(){}async executeRenderCommands(e){for(const t of e)switch(t.id){case"create-material":await this._createMaterial(t);break;case"create-direct-renderer":await this._createDirectRenderer(t);break;case"add-direct-renderer-geometry":await this._addDirectRendererGeometry(t);break;case"remove-direct-renderer-geometry":await this._removeDirectRendererGeometry(t);break;case"create-lod-renderer":await this._createLodRenderer(t);break;case"add-lod-instances":await this._addLodInstances(t);break;case"remove-lod-instances":await this._removeLodInstances(t)}}async _createMaterial(e){const{view:t}=this,{sharedSymbolResources:r}=t;if(r==null)throw new Error("No shared symbol resources found!");const{textures:i}=r,n=t.state.viewingMode===v.Global;let a=null;switch(e.type){case"default":a=tr(r,{physicalBasedRenderingEnabled:!0,slicePlaneEnabled:!1,castShadows:!0,isPrimitive:!0,screenSizePerspectiveEnabled:!0,doublePrecisionRequiresObfuscation:t._stage.renderView.renderingContext.driverTest.doublePrecisionRequiresObfuscation.result},n);break;case"hud":{const[o,d]=ve(i,n);this.addHandles([Ge(()=>Pe(d))]),a=o}break;default:throw new Error(`unable to create unknown material type ${e.type}`)}this._materials.set(e.materialId,a)}_getMaterial(e){return this._materials.get(e)}async _createDirectRenderer(e){const t=e.materialId,r=this._getMaterial(t);if(r==null)throw new Error(`material not found ${t}`);const{view:i}=this,n=new U({material:r});this._directRenderers.set(t,n),i._stage.addRenderPlugin(n),i._stage.renderView.renderer.updateHasFlags()}async _addDirectRendererGeometry(e){const t=e.renderGeometryId,r=e.materialId;this._renderGeometries.get(t)!=null&&await this._removeDirectRendererGeometry({renderGeometryId:t});const i=this._directRenderers.get(r);if(i==null)return void console.error("no renderer assigned to provided material");const n=i.addRenderGeometry(t,e.renderGeometryBuffer,e.localOrigin);this._renderGeometries.set(t,{renderGeometry:n,materialId:r}),this.view._stage.renderView.requestRender()}async _removeDirectRendererGeometry(e){const t=e.renderGeometryId,r=this._renderGeometries.get(t);if(r==null)return;const i=r.materialId,n=this._directRenderers.get(i);n!=null?n.removeRenderGeometry(e.renderGeometryId):console.error("no renderer assigned to provided material")}async _createLodRenderer(e){const t=new ee({view:this.view,layerUid:this.layerUid}),r=new AbortController,i=n=>this._getMaterial(n);await t.doLoad(e.lodRenderGeometry,i,r.signal),this._lodRenderers.set(e.lodRendererId,t)}async _addLodInstances(e){const t=this._lodRenderers.get(e.lodRendererId);if(t==null)throw new Error("no lod renderer assigned to provided lod renderer Id");t.addInstances(e.data)}async _removeLodInstances(e){const t=this._lodRenderers.get(e.lodRendererId);if(t==null)throw new Error("no lod renderer assigned to provided lod renderer Id");t.removeInstances(e.featureIds)}};function ve(s,e){const t={anchorPosition:wt.center,occlusionTest:!0,hasSlicePlane:!1},r=t,i=1;r.color=[1,0,0,1],r.outlineColor=[0,0,0,1],r.outlineSize=i;const n=null;if(s!=null){const a=s.fromData("circle-icon",()=>Tt("circle"));r.textureId=a.texture.id,r.textureIsSignedDistanceField=!0,r.sampleSignedDistanceFieldTexelCenter=At("circle")}return r.distanceFieldBoundingBox=sr,[new St(t,e),n]}function tr(s,e,t){const r={usePBR:e.physicalBasedRenderingEnabled,isSchematic:!0,mrrFactors:Gt,ambient:se,diffuse:se,hasSlicePlane:e.slicePlaneEnabled,hasSliceHighlight:!1,castShadows:e.castShadows,offsetTransparentBackfaces:!e.isPrimitive};return rr(r),r.screenSizePerspective=s.screenSizePerspectiveSettings,r.externalColor=Le,r.isInstanced=!0,new Re(r,{spherical:t,doublePrecisionRequiresObfuscation:!0})}function rr(s){const e=s.opacity??1,t=e<1;return s.transparent=t,s.opacity=e,s.cullFace=t?ce.None:ce.Back,s}me=_([x("esri.views.3d.layers.graphics.pipeline.rendering.FeaturePipelineRenderManager")],me);const sr=[N/2,N/2,1-N/2,1-N/2];let fe=class{constructor(e){this._bufferWriter=null,this._bufferWriter=e.createBufferWriter()}createBuffer(e,t){const r=this._bufferWriter;let i=null;if(e.transformation&&t)we(E,e.transformation),E[12]-=t[0],E[13]-=t[1],E[14]-=t[2],i=E;else{if(t)throw new Error("not implemented");e.transformation&&(i=e.transformation)}let n=null;i&&(Ne(k,E),ke(k,k),n=k);const a=e.attributes,o=r.elementCount(a),d=r.vertexBufferLayout.stride/4;o>Math.floor(nr/d)&&console.warn("geometry with very large number of elements encountered");const c=r.vertexBufferLayout.createBuffer(o);return r.write(i,n,a,e.objectAndLayerIdColor,c,0),{data:c.buffer,elementCount:o}}};const E=P(),k=P(),nr=16777216/4;let ir=class{constructor(e){this._context=e,this._commands=[],this._transferables=new Set}createMaterial(e){const t=this._context,r=t.generateId("material");switch(e){case"default":{const i=new Re({},{spherical:this._context.globalViewingMode,doublePrecisionRequiresObfuscation:!0}),n=new fe(i);t.registerRenderGeometryBufferWriter(r,n)}break;case"hud":{const i=ve(null,this._context.globalViewingMode)[0],n=new fe(i);t.registerRenderGeometryBufferWriter(r,n)}}return this._commands.push({id:"create-material",type:e,materialId:r}),r}createDirectRenderer(e){const t=this._context.generateId("material-renderer");return this._commands.push({id:"create-direct-renderer",materialRendererId:t,materialId:e}),t}addDirectRendererGeometry(e,t,r){const i=t.materialId,n=this._context.getRenderGeometryBufferWriter(i);if(n==null)throw new Error(`no bufferwriter found for material ${i}`);const a=n.createBuffer(t,r);this._transferables.add(a.data),this._commands.push({id:"add-direct-renderer-geometry",renderGeometryId:e,materialId:i,renderGeometryBuffer:a,localOrigin:r})}removeDirectRendererGeometry(e){this._commands.push({id:"remove-direct-renderer-geometry",renderGeometryId:e})}createLodRenderer(e){const t=this._context.generateId("lod-renderer"),r={levels:e.levels.map(i=>({components:i.components.map(n=>{const a=n.attributes.get(p.POSITION);if(!a||a.indices.length===0)throw new Error("positions attribute expected");const o=3,d=_t(a.indices.length/o),c=new $t(d,o,a),u=this._context.getRenderGeometryBufferWriter(n.materialId);if(u==null)throw new Error("writer not found");const l=u.createBuffer(n,null);return this._transferables.add(l.data),{materialId:n.materialId,renderGeometryBuffer:l,boundingInfo:{bbMax:c.bbMax,bbMin:c.bbMin}}}),minScreenSpaceRadius:i.minScreenSpaceRadius}))};return this._commands.push({id:"create-lod-renderer",lodRendererId:t,lodRenderGeometry:r}),t}addLodInstances(e,t){this._commands.push({id:"add-lod-instances",lodRendererId:e,data:t}),this._transferables.add(t.featureIds.buffer),this._transferables.add(t.globalTransforms.buffer),this._transferables.add(t.localTransforms.buffer)}removeLodInstances(e,t){this._commands.push({id:"remove-lod-instances",lodRendererId:e,featureIds:t}),this._transferables.add(t.buffer)}async dispatch(){const e=this._commands,t=Array.from(this._transferables);this._clearCommandBuffer(),this._context.dispatchRenderCommands(e,t)}_clearCommandBuffer(){this._commands=[],this._transferables.clear()}};class ar{constructor(e){this._idCounter=0,this._bufferWriters=new Map,this._dispatchRenderCommandsCallback=async()=>{},this.globalViewingMode=!1,this.globalViewingMode=e.viewingMode===v.Global,this._dispatchRenderCommandsCallback=e.dispatchRenderCommandsCallback}generateId(e=""){return`${e}${this._idCounter++}`}createEncoder(){return new ir(this)}async dispatchRenderCommands(e,t){this._dispatchRenderCommandsCallback(e,t)}registerRenderGeometryBufferWriter(e,t){this._bufferWriters.set(e,t)}getRenderGeometryBufferWriter(e){return this._bufferWriters.get(e)}}var f;(function(s){s[s.OBJECT_ID=0]="OBJECT_ID",s[s.PARTITION_ID=1]="PARTITION_ID",s[s.GEOMETRY_MAP_COORDINATES=2]="GEOMETRY_MAP_COORDINATES",s[s.GEOMETRY_RENDER_COORDINATES=3]="GEOMETRY_RENDER_COORDINATES",s[s.TILE_CENTER_RENDER_COORDINATES=4]="TILE_CENTER_RENDER_COORDINATES"})(f||(f={}));async function or(s,e){const{numFeatures:t,tile:r,partitionInfo:i}=s,{pages:n}=r;if(n.length===0||t===0)return new Uint32Array;const a=new Uint32Array(t);if(i){const o=n.reduce((l,{featureCount:h})=>l+h,0),d=new Uint32Array(o);let c=0;for(const l of n)c=l.readAllObjectIds(d,c);const u=i.tileIndices;for(let l=0;l<t;++l){const h=d[u[l]];a[l]=h}}else{let o=0;for(const d of n)o=d.readAllObjectIds(a,o)}return a}async function dr(s,e){const{numFeatures:t,tile:r,partitionInfo:i}=s,{pages:n}=r;if(n.length===0||t===0)return new Float64Array;const a=new Float64Array(3*t);if(i){const o=n.reduce((l,{featureCount:h})=>l+h,0),d=new Float64Array(3*o);let c=0;for(const l of n)c=l.readAllCoordinates(d,c);const u=i.tileIndices;for(let l=0;l<t;++l){const h=u[l],m=d[3*h+0],y=d[3*h+1],g=d[3*h+2];a[3*l+0]=m,a[3*l+1]=y,a[3*l+2]=g}}else{let o=0;for(const d of n)o=d.readAllCoordinates(a,o)}return a}async function lr(s,e){await s.provision([f.GEOMETRY_MAP_COORDINATES],e);const{numFeatures:t,tile:r,mapCoordinates:i}=s,{pages:n}=r;if(n.length===0||t===0)return new Float64Array;const a=e.viewSpatialReference,o=e.renderSpatialReference,d=new Float64Array(3*t);if(!je(i,a,0,d,o,0,t))throw new Error("Failed to project coordinates");return d}async function cr(s,e){const t=e.viewSpatialReference,r=e.renderSpatialReference,i=s.tile.descriptor.extent,n=Ue(i),a=G();return J([n[0],n[1],0],t,a,r),a}let xe=class{constructor(e,t,r=null){this._tile=e,this._numFeatures=t,this._partitionInfo=r}get partitionInfo(){return this._partitionInfo}get tile(){return this._tile}get numFeatures(){return this._numFeatures}get tileId(){return this._tile.descriptor.id}get objectIds(){if(this._objectIds==null)throw new Error("objectIds haven't been provisioned yet");return this._objectIds}get partitionIds(){if(this._partitionIds==null)throw new Error("partitionIds haven't been provisioned yet");return this._partitionIds}get mapCoordinates(){if(this._mapCoordinates==null)throw new Error("mapCoordinates haven't been provisioned yet");return this._mapCoordinates}get renderCoordinates(){if(this._renderCoordinates==null)throw new Error("renderCoordinates haven't been provisioned yet");return this._renderCoordinates}get tileCenterRenderCoordinates(){if(this._tileCenterRenderCoordinates==null)throw new Error("tileCenterRenderCoordinates hasn't been provisioned yet");return this._tileCenterRenderCoordinates}async provision(e,t){for(const r of e)switch(r){case f.OBJECT_ID:if(this._objectIds)return;this._objectIds=await or(this);break;case f.PARTITION_ID:if(this._partitionIds)return;this._partitionIds=new Uint32Array(this._numFeatures);break;case f.GEOMETRY_MAP_COORDINATES:if(this._mapCoordinates)return;this._mapCoordinates=await dr(this);break;case f.GEOMETRY_RENDER_COORDINATES:if(this._renderCoordinates)return;this._renderCoordinates=await lr(this,t);break;case f.TILE_CENTER_RENDER_COORDINATES:if(this._tileCenterRenderCoordinates)return;this._tileCenterRenderCoordinates=await cr(this,t);break;default:throw new Error("not implemented")}}dispose(){if(this.partitions){for(const e of this.partitions)e.dispose();this.partitions=void 0}}};function Ce(s){const e=new Map;for(const[t,r]of s)e.set(t,{...r,indices:gt(r.indices)});return e}function ur(s,e){const t=(r,i,n=!1)=>({levels:r.map(a=>{const o=Ce(i(a.tesselation));return n&&hr(o),{components:[{attributes:o,objectAndLayerIdColor:void 0,transformation:null,materialId:e}],minScreenSpaceRadius:a.minScreenSpaceRadius}})});switch(s){case"cone":return t(mr,r=>Lt(1,.5,r,!1),!0);case"sphere":case"cube":case"inverted-cone":case"cylinder":case"tetrahedron":case"diamond":throw new Error("not implemented");default:return}}function hr(s){const e=s,t=e.get(p.POSITION).data,r=e.get(p.NORMAL).data;if(r){const i=pe(s,p.NORMAL).data;for(let n=0;n<r.length;n+=3){const a=r[n+1];i[n+1]=-r[n+2],i[n+2]=a}}if(t){const i=pe(s,p.POSITION).data;for(let n=0;n<t.length;n+=3){const a=t[n+1];i[n+1]=-t[n+2],i[n+2]=a}}}function pe(s,e){let t=s.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:Et(t.data)},s.set(e,t)),t}const mr=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}];let te=class extends q{constructor(e){super(),this._context=e,this.lodRendererId=null,this._loaded=!1}get loaded(){return this._loaded}async load(e){const t=e.createMaterial("default"),r=ur("cone",t);this.lodRendererId=e.createLodRenderer(r),this._loaded=!0}async add(e,t){if(this.lodRendererId==null)throw new Error("expected lod renderer id to not be null");await this._provisionFeatureData(e);const r=e.numFeatures,i=!0,n=ze(Qe("cone")),a=ne(We(n)),o=ne(qe(a,{isPrimitive:i,width:100,depth:null,height:null})),d=new Float64Array(16*r),c=new Float64Array(16*r),u=e.mapCoordinates;for(let h=0;h<r;++h){const m=h,y=u[3*h+0],g=u[3*h+1],C=u[3*h+2],T=this._computeGlobalTransform(y,g,C,this._context.viewSpatialReference,pr),S=this._computeLocalTransform(o,a,fr);this._writeMatrixToTypedBuffer(d,m,S),this._writeMatrixToTypedBuffer(c,m,T)}const l={featureIds:new Uint32Array(e.objectIds),localTransforms:d,globalTransforms:c};t.addLodInstances(this.lodRendererId,l)}async remove(e,t){if(this.lodRendererId==null)return;const r=new Uint32Array(e.objectIds);t.removeLodInstances(this.lodRendererId,r)}async _provisionFeatureData(e){await e.provision([f.GEOMETRY_MAP_COORDINATES,f.OBJECT_ID],this._context)}_writeMatrixToTypedBuffer(e,t,r){let i=16*t;for(let n=0;n<16;n++)e[i++]=r[n]}_computeGlobalTransform(e,t,r,i,n){return j[0]=e,j[1]=t,j[2]=r,Pt(i,j,n,this._context.renderSpatialReference),n}_computeLocalTransform(e,t,r){return Ve(r),this._applyObjectScale(e,t,r),r}_applyObjectScale(e,t,r){const i=Nt(e,e,t,this._context.renderCoordsHelper.unitInMeters);i[0]===1&&i[1]===1&&i[2]===1||Ye(r,r,i)}};te=_([x("esri.views.3d.layers.graphics.pipeline.symbolization.TestObjectSymbol")],te);const j=G(),fr=P(),pr=P();let re=class extends q{constructor(s){super(),this._context=s,this.materialId=null,this._loaded=!1}get loaded(){return this._loaded}async load(s){this.materialId=s.createMaterial("hud"),s.createDirectRenderer(this.materialId),this._loaded=!0}async add(s,e){if(this.materialId==null)throw new Error("expected material not to be null");await this._provisionFeatureData(s);const{numFeatures:t,tileId:r,renderCoordinates:i,tileCenterRenderCoordinates:n}=s,a=new Float64Array([0,0,1]),o=new Float64Array([255,255,255,255]),d=new Float64Array([24,24]),c=new Float64Array([0,0,0,1]),u=new Float64Array([0,0]),l=new Float64Array([0]),h=new Uint32Array(t);for(let w=0;w<t;++w)h[w]=w;const m=new Uint32Array(t);for(let w=0;w<t;++w)m[w]=0;const y=new I(i,h,3,!0),g=new I(a,m,3,!0),C=new I(u,m,2,!0),T=new I(o,m,4,!0),S=new I(l,m,1,!0),A=new I(d,m,2,!0),V=new I(c,m,4,!0),Ae=[[p.POSITION,y],[p.NORMAL,g],[p.UV0,C],[p.COLOR,T],[p.ROTATION,S],[p.SIZE,A],[p.CENTEROFFSETANDDISTANCE,V]],$e={attributes:Ce(Ae),objectAndLayerIdColor:void 0,transformation:P(),materialId:this.materialId};e.addDirectRendererGeometry(r,$e,n)}async remove(s,e){e.removeDirectRendererGeometry(s.tileId)}async _provisionFeatureData(s){await s.provision([f.GEOMETRY_RENDER_COORDINATES,f.TILE_CENTER_RENDER_COORDINATES],this._context)}};re=_([x("esri.views.3d.layers.graphics.pipeline.symbolization.TestSymbol")],re);class _r{constructor(e){this._symbols=new Map,this._context=e}async load(){this._symbols.set(0,new re(this._context)),this._symbols.set(1,new te(this._context))}async add(e,t){await this._provisionFeatureData(e,this._context);const r=this._partition(e);await Promise.all(r.map(async i=>{var a;const n=await this._provisionSymbol((a=i.partitionInfo)==null?void 0:a.index,t);n&&await n.add(i,t)}))}async remove(e,t){const r=e.partitions;if(!r)throw new Error("partitioned featureset expected");await Promise.all(r.map(async i=>{var a;const n=await this._provisionSymbol((a=i.partitionInfo)==null?void 0:a.index,t);n&&await n.remove(i,t)}))}async _provisionFeatureData(e,t){await e.provision([f.PARTITION_ID,f.OBJECT_ID],t)}async _provisionSymbol(e,t){if(e==null)return null;const r=this._symbols.get(e);return r?(r.loaded||await r.load(t),r):null}_partition(e){const{numFeatures:t,objectIds:r,partitionIds:i}=e,n=[[],[]];for(let a=0;a<t;++a){const o=r[a]%2;n[o].push(a),i[a]=o}return e.partitions=n.filter(a=>a.length>0).map((a,o)=>{const d=a.length,c={index:o,tileIndices:new Uint32Array(a)};return new xe(e.tile,d,c)}),e.partitions}}function gr(s){const{value:e,operations:t}=s;return{operations:t,value:t.create(e)}}function yr(s,e,t){return s.operations.setExtent(s.value,e,t.value),t}function wr(s,e){return s.operations.getExtent(s.value,e),e}function br(s){return{operations:s,value:s.create()}}function Te(s,e,t=br(s)){return t.operations=s,s.copy(e,t.value),t}function Ir(s){return Te(Je,He(0,0,0,be(s).radius))}const _e=2**50;function Rr(){return Te(Ut,jt([0,0,0],[_e,0,0],[0,_e,0]))}function vr(s,e,t){return s.operations.axisAt(s.value,e,F.Z,t)}function xr(s,e,t,r){return s.operations.axisAt(s.value,e,t,r)}function Cr(s,e,t){return s.operations.intersectRay(s.value,e,t)}function Tr(s,e,t){return s.operations.intersectRayClosestSilhouette(s.value,e,t)}function Sr(s,e){return s.operations.altitudeAt(s.value,e)}function Se(s,e,t,r){return s.operations.setAltitudeAt(s.value,e,t,r)}function Ar(s,e,t,r){return e!==r&&we(r,e),Ze(O,r[12],r[13],r[14]),Se(s,O,t,O),r[12]=O[0],r[13]=O[1],r[14]=O[2],r}function H(s,e,t){return s.operations.elevate(s.value,e,t.value)}const O=G();class W{constructor(e,t,r,i){this.viewingMode=e,this.spatialReference=t,this.unitInMeters=r,this._coordinateSystem=i,this._tmpCoordinateSystem=gr(i),this.referenceEllipsoid=be(t),this.sphericalPCPF=kt(t)}set extent(e){e&&yr(this._coordinateSystem,e,this._coordinateSystem)}get extent(){return wr(this._coordinateSystem,Xe())}getAltitude(e){return Sr(this._coordinateSystem,e)}setAltitude(e,t,r=e){return Se(this._coordinateSystem,r,t,e)}setAltitudeOfTransformation(e,t){Ar(this._coordinateSystem,t,e,t)}worldUpAtPosition(e,t){return vr(this._coordinateSystem,e,t)}worldBasisAtPosition(e,t,r){return xr(this._coordinateSystem,e,t,r)}basisMatrixAtPosition(e,t){const r=this.worldBasisAtPosition(e,F.X,b.get()),i=this.worldBasisAtPosition(e,F.Y,b.get()),n=this.worldBasisAtPosition(e,F.Z,b.get());return Ke(t,r[0],r[1],r[2],0,i[0],i[1],i[2],0,n[0],n[1],n[2],0,0,0,0,1),t}headingAtPosition(e,t){const r=this.worldUpAtPosition(e,b.get()),i=this.worldBasisAtPosition(e,F.Y,b.get()),n=et(t,i,r);return tt(n)}intersectManifoldClosestSilhouette(e,t,r){return H(this._coordinateSystem,t,this._tmpCoordinateSystem),Tr(this._tmpCoordinateSystem,e,r),r}intersectManifold(e,t,r){H(this._coordinateSystem,t,this._tmpCoordinateSystem);const i=b.get();return Cr(this._tmpCoordinateSystem,e,i)?ie(r,i):null}intersectInfiniteManifold(e,t,r){if(this.viewingMode===v.Global)return this.intersectManifold(e,t,r);H(this._coordinateSystem,t,this._tmpCoordinateSystem);const i=this._tmpCoordinateSystem.value,n=b.get();return rt(i.plane,e,n)?ie(r,n):null}toRenderCoords(e,t,r){return ue(e)?st(e,t,this.spatialReference):J(e,t,r,this.spatialReference)}fromRenderCoords(e,t,r=null){return ue(t)?(r!=null&&(t.spatialReference=r),bt(e,this.spatialReference,t)?t:null):J(e,this.spatialReference,t,r)?t:null}static create(e,t){switch(e){case v.Local:return new W(v.Local,t,nt(t),Rr());case v.Global:return new W(v.Global,t,1,Ir(t))}}static renderUnitScaleFactor(e,t){return ae(e)/ae(t)}}class $r{constructor(e){this._tileFeatureData=new Map,this._context={viewSpatialReference:e.viewSpatialReference,renderSpatialReference:e.renderSpatialReference,renderCoordsHelper:W.create(e.viewingMode,e.renderSpatialReference)}}async add(e,t){this._featureRenderer||(this._featureRenderer=new _r(this._context),await this._featureRenderer.load());const r=this._addTileFeatureData(e);await this._featureRenderer.add(r,t)}async remove(e,t){const r=this._getFeatureSetFromTileId(e);r&&(this._featureRenderer&&this._featureRenderer.remove(r,t),this._removeTileFeatureData(e))}_getFeatureSetFromTileId(e){return this._tileFeatureData.get(e)}_addTileFeatureData(e){const t=e.descriptor.id,r=e.pages.reduce((n,{featureCount:a})=>n+a,0),i=new xe(e,r);return this._tileFeatureData.set(t,i),i}_removeTileFeatureData(e){const t=this._tileFeatureData.get(e);t&&(t.dispose(),this._tileFeatureData.delete(e))}}let z=class extends ye.EventedAccessor{constructor(){super(...arguments),this.remoteClient=null,this._featureStore=new Qt,this._tileManager=new R({addTile:(s,e)=>this._addTile(s,e),removeTiles:s=>this._removeTiles(s)}),this._renderCommandContext=null,this._fetcher=null,this._symbolizer=null,this._queryEngine=null,this._defaultQueryJSON=null}get updating(){return this._tileManager.updating}destroy(){this._featureStore.clear(),this._tileManager.destroy()}async setup({viewSpatialReference:s,renderSpatialReference:e,viewingMode:t,baseQuery:r,url:i,objectIdField:n,capabilities:a,fieldsIndex:o,timeInfo:d}){this._renderCommandContext=new ar({viewingMode:t,dispatchRenderCommandsCallback:(l,h)=>this.remoteClient.invoke("dispatchRenderCommands",l,{transferList:h})});const c=oe.fromJSON(s),u=oe.fromJSON(e);return this._fetcher=new Xt(c,de.fromJSON(r),i,n,a),this._symbolizer=new $r({viewSpatialReference:c,renderSpatialReference:u,viewingMode:t}),this._queryEngine=new ot({hasZ:!0,hasM:!1,geometryType:"esriGeometryPoint",objectIdField:n,fieldsIndex:o,availableFields:[n],spatialReference:s,featureStore:this._featureStore,timeInfo:d}),this._defaultQueryJSON=new de({outSpatialReference:c}).toJSON(),this.addHandles(it(()=>this.updating,async l=>{this.emit("notify-updating",{updating:l})}),at),ge}async executeQuery(s,e){return{result:await this._queryEngine.executeQuery(this._ensureQuery(s),e)}}async executeQueryForIds(s,e){const t=await this._queryEngine.executeQueryForIdSet(this._ensureQuery(s),e);return{result:Array.from(t)}}async executeQueryForCount(s,e){return{result:await this._queryEngine.executeQueryForCount(this._ensureQuery(s),e)}}async executeQueryForExtent(s,e){return{result:await this._queryEngine.executeQueryForExtent(this._ensureQuery(s),e)}}async executeQueryForLatestObservations(s,e){return{result:await this._queryEngine.executeQueryForLatestObservations(this._ensureQuery(s),e)}}async onTileTreeChange(s){return await this._tileManager.onTileTreeChange(s),ge}async _addTile(s,e){const t=await this._fetcher.fetch(s,e);B(e),this._featureStore.addTile(t);const r=this._renderCommandContext.createEncoder();return await this._symbolizer.add(t,r),await r.dispatch(),t}async _removeTiles(s){const e=this._renderCommandContext.createEncoder(),t=this._featureStore,r=this._symbolizer;for(const i of s)t.removeTile(i.tileId),await r.remove(i.tileId,e);await e.dispatch()}_ensureQuery(s){return s??this._defaultQueryJSON}};_([M()],z.prototype,"updating",null),z=_([x("esri.views.3d.layers.graphics.pipeline.Feature3DPipelineWorker")],z);const en=z,ge={result:void 0};export{en as default};