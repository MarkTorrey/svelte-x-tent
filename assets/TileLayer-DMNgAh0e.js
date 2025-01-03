import{gc as _,gd as S,bb as b,bH as v,F as T,ah as h,gA as w,gq as O,A as u,z as $,c1 as R,fN as W,fD as U,V as s,W as a,bD as A,bF as P,eR as j,X as L,gg as N}from"./index-Cek7aMWl.js";import{S as B}from"./MultiOriginJSONSupport-BlAwjy_L.js";import{i as D}from"./APIKeyMixin-DdhuDYwL.js";import{p as I}from"./ArcGISCachedService-CX9rUPdH.js";import{m as M,f as C,t as k}from"./SublayersOwner-kJu7ornw.js";import{l as J}from"./ArcGISService-CcXrOqVK.js";import{e as q}from"./CustomParametersMixin-DLUUPWS3.js";import{b as G}from"./OperationalLayer-B-J5coPH.js";import{j as V}from"./PortalLayer-B7KsXAi1.js";import{f as E}from"./RefreshableLayer-CeoHeJiI.js";import{p as F}from"./commonProperties-DbjJOfHD.js";import{o as y}from"./imageBitmapUtils-CNpI-FDC.js";import"./TileInfoTilemapCache-B6CmZF1H.js";import"./TilemapCache-VS6IeOYO.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-pAqnhOsq.js";import"./Version-DJsGRXWf.js";import"./portalItemUtils-BCfDAbUL.js";import"./UniqueValueRenderer-DoQjGRE5.js";import"./ColorStop-CqMXhorb.js";import"./colorRamps-4yJNyWKx.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Cdb7Kq7r.js";import"./jsonUtils-C2l4B_cE.js";import"./defaults-fOuW8gwA.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Dv2EsbEO.js";import"./jsonUtils-DGzEHX8a.js";import"./FieldsIndex-Bjg3eA_S.js";import"./UnknownTimeZone-Cjv2gi-C.js";import"./OverrideHelper-ClkM4CZ1.js";import"./colorUtils-BlCLzs4t.js";import"./utils-BE8joJvK.js";import"./quantizationUtils-DeBnMDmu.js";import"./heatmapUtils-NTzr8GZp.js";import"./QueryTask-BLYX2f6M.js";import"./infoFor3D-DsOdlPuA.js";import"./executeForIds-DbtIfq3g.js";import"./query-Dg0JyN0I.js";import"./pbfQueryUtils-D7UGG6Td.js";import"./pbf-CEYKCTdB.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-BXApFFgO.js";import"./executeQueryJSON-uMDcT6zK.js";import"./FeatureSet-ClbNh9OS.js";import"./executeQueryPBF-BtoMtVDP.js";import"./featureConversionUtils-DoC7B3A2.js";import"./featureLayerUtils-ChIFdxrX.js";import"./RelationshipQuery-CWq1d8EN.js";import"./FeatureType-CDkdd-Wk.js";import"./FeatureTemplate-CEfaRdgX.js";import"./labelingInfo-xEuuUnSV.js";import"./labelUtils-C4iNx9oT.js";import"./LayerFloorInfo-BFRsBa1U.js";import"./Relationship-AfZQ8hC5.js";import"./serviceCapabilitiesUtils-Bw0rlVLE.js";import"./popupUtils-BYVjdumh.js";import"./sublayerUtils-CsQjXgeP.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends _(S(M(I(C(G(V(J(B(E(D(q(N)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...o};p.forEach(l=>{const m=l.write({},c);n.push(m)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>T(r).path):null}fetchTile(e,r,t,o={}){const{signal:p}=o,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return h(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:p}=o;if(this.fetchTile!==d.prototype.fetchTile){const m=await this.fetchTile(e,r,t,o);return y(m,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await h(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=w({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return O(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=$(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");h(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!R(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!W(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return h(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return U("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([A("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([P("sublayers",{layers:{type:[k]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([j("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(F)],i.prototype,"url",void 0),i=d=s([L("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ye=i;export{Ye as default};
