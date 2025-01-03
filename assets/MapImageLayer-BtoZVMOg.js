import{g8 as $,g9 as T,b$ as O,eI as v,dV as g,gn as P,go as E,bJ as f,da as L,du as F,gp as M,B as x,T as R,W as o,X as a,gq as S,dk as J,dl as _,Y as j,gr as q,gc as N}from"./index-BdDnxAOC.js";import{S as U}from"./MultiOriginJSONSupport-BxqyqD-M.js";import{i as A}from"./APIKeyMixin-C2GGgg_6.js";import{m as V,f as k,t as z}from"./SublayersOwner-PJE88Mz1.js";import{l as B}from"./ArcGISService-BxLjDx2U.js";import{e as W}from"./CustomParametersMixin-AjotzixX.js";import{b as Z}from"./OperationalLayer-EPpXepzU.js";import{j as C}from"./PortalLayer-DVe9srog.js";import{f as D}from"./RefreshableLayer-DdxF085B.js";import{l as G}from"./TemporalLayer-CQypAb8m.js";import{y as H}from"./commonProperties-BBSEfxbj.js";import{y as K}from"./ExportImageParameters-DADFq-s-.js";import{t as X}from"./imageBitmapUtils-jWwodtfD.js";import{e as I}from"./sublayerUtils-DCudlAhu.js";import{t as Y}from"./versionUtils-_ZHtErjP.js";import"./portalItemUtils-knUv3sqD.js";import"./UniqueValueRenderer-BWPFapkt.js";import"./ColorStop-D1flJukn.js";import"./colorRamps-feXPP0Fe.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CGgEbm3F.js";import"./jsonUtils-DM4hoWoB.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-D8VmJ7nq.js";import"./jsonUtils-B03p0wkk.js";import"./LRUCache-CSFO1iZh.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./utils-DpS7XCOa.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BIIdN1xY.js";import"./heatmapUtils-BQROikav.js";import"./QueryTask-uTZ99T0t.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-BDOKguh2.js";import"./query-Cagu3AtE.js";import"./pbfQueryUtils-DZpH09BK.js";import"./pbf-loJXkAL8.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-C2obsE-l.js";import"./executeQueryJSON-DDHvBeeF.js";import"./FeatureSet-BSxK7X-2.js";import"./featureConversionUtils-BCh95FQm.js";import"./featureLayerUtils-Cr_P5BEF.js";import"./FeatureType-c5mpcoB0.js";import"./FeatureTemplate-Dyrv7v8V.js";import"./labelingInfo-C81qEnrv.js";import"./labelUtils-CE2jIVKQ.js";import"./LayerFloorInfo-DYBlEgwK.js";import"./Relationship-CL5GSwc1.js";import"./serviceCapabilitiesUtils-CxD1SJab.js";import"./popupUtils-CYXwczcX.js";import"./TimeInfo-Kiz4nH72.js";import"./floorFilterUtils-DZ5C6FQv.js";let i=class extends $(G(T(V(k(B(Z(C(U(D(A(W(N)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new K({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(O).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const n=r.supportedImageFormatTypes;return n&&n.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,n,t){var l,c,b;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:m})=>m&&m.toArray().reverse()).toArray();let p=!1;const h=v(t.origin);if((l=this.capabilities)!=null&&l.operations.supportsExportMap&&((b=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=I(s,m,g.SERVICE)}else if(h>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=I(s,m.sublayers,v(m.origin))}}const d=[],u={writeSublayerStructure:p,...t};let y=p||this.hasVisibleLayersForOrigin(h);s.forEach(m=>{const w=m.write({},u);d.push(w),y=y||m.originOf("visible")==="user"}),d.some(m=>Object.keys(m).length>1)&&(r.layers=d),y&&(r.visibleLayers=s.filter(m=>m.visible).map(m=>m.id))}createExportImageParameters(e,r,n,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=P({extent:e,width:r})*s;const p=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},d=e==null?void 0:e.spatialReference,u=E(d);p.dpi*=s;const y={};if(t!=null&&t.timeExtent){const{start:l,end:c}=t.timeExtent.toJSON();y.time=l&&c&&l===c?""+l:`${l??"null"},${c??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:r+","+n,...p,...h,...y}}async fetchImage(e,r,n,t){const{data:s}=await this._fetchImage("image",e,r,n,t);return s}async fetchImageBitmap(e,r,n,t){const{data:s,url:p}=await this._fetchImage("blob",e,r,n,t);return X(s,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:n}=await f(this.url,r),{extent:t,fullExtent:s,timeExtent:p}=n,h=t||s;return{fullExtent:h&&L.fromJSON(h),timeExtent:p&&F.fromJSON({start:p[0],end:p[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return Y(this,e)}async _fetchImage(e,r,n,t,s){var d,u,y;const p={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,n,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((d=p.query)==null?void 0:d.dynamicLayers)!=null&&!((y=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:l}=await f(h,p);return{data:l,url:h}}catch(l){throw R(l)?l:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:l})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:n}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};o([a(S("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),o([a({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),o([a()],i.prototype,"dpi",void 0),o([a()],i.prototype,"gdbVersion",void 0),o([a()],i.prototype,"imageFormat",void 0),o([J("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),o([a({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),o([a({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),o([a()],i.prototype,"imageTransparency",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([a({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),o([a({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([a(S("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),o([a()],i.prototype,"sourceJSON",void 0),o([a({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),o([_("sublayers",{layers:{type:[z]},visibleLayers:{type:[q]}})],i.prototype,"writeSublayers",null),o([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),o([a(H)],i.prototype,"url",void 0),i=o([j("esri.layers.MapImageLayer")],i);const ot=i;export{ot as default};
