import{d8 as C,W as i,X as s,Y as I,aG as G,ay as B,ax as x,aH as F,g8 as W,g9 as k,aq as h,a0 as w,a8 as N,eX as M,gs as J,gt as S,gu as R,gv as $,a3 as z,B as X,dj as A,R as q,d_ as H,dW as K,dX as V,cP as U,g5 as Y,dB as L,dk as f,dl as Q,da as Z,gw as ee,gx as D,gc as te}from"./index-BdDnxAOC.js";import{S as re}from"./MultiOriginJSONSupport-BxqyqD-M.js";import oe from"./FeatureLayer-BDZN5grg.js";import{n as ie}from"./objectIdUtils-4dd1rf9p.js";import{b as le}from"./OperationalLayer-EPpXepzU.js";import{j as ae}from"./PortalLayer-DVe9srog.js";import"./UniqueValueRenderer-BWPFapkt.js";import"./ColorStop-D1flJukn.js";import"./colorRamps-feXPP0Fe.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CGgEbm3F.js";import"./jsonUtils-DM4hoWoB.js";import"./defaults-BX3STjdr.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-D8VmJ7nq.js";import"./jsonUtils-B03p0wkk.js";import"./LRUCache-CSFO1iZh.js";import"./FieldsIndex-DdufUIvd.js";import"./UnknownTimeZone-CDnwrDVp.js";import"./OverrideHelper-cJgBvMlU.js";import"./colorUtils-CXI_GYiL.js";import"./utils-DpS7XCOa.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BIIdN1xY.js";import"./heatmapUtils-BQROikav.js";import"./commonProperties-BBSEfxbj.js";import"./FeatureLayerBase-W0b2Hl-T.js";import"./featureLayerUtils-Cr_P5BEF.js";import"./LayerFloorInfo-DYBlEgwK.js";import"./Relationship-CL5GSwc1.js";import"./serviceCapabilitiesUtils-CxD1SJab.js";import"./editsZScale-C1SPDSrQ.js";import"./queryZScale-C2obsE-l.js";import"./FeatureSet-BSxK7X-2.js";import"./APIKeyMixin-C2GGgg_6.js";import"./ArcGISService-BxLjDx2U.js";import"./CustomParametersMixin-AjotzixX.js";import"./EditBusLayer-j7Kkv1qk.js";import"./FeatureEffectLayer-BvH28EDx.js";import"./FeatureEffect-DVNjjsKx.js";import"./FeatureFilter-mttTrSds.js";import"./FeatureReductionLayer-BVPeBmyG.js";import"./FeatureReductionSelection-DsrBapHO.js";import"./labelingInfo-C81qEnrv.js";import"./labelUtils-CE2jIVKQ.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-B2P-3Rdt.js";import"./OrderByInfo-NW2XP7xS.js";import"./RefreshableLayer-DdxF085B.js";import"./TemporalLayer-CQypAb8m.js";import"./TimeInfo-Kiz4nH72.js";import"./FeatureTemplate-Dyrv7v8V.js";import"./FeatureType-c5mpcoB0.js";import"./fieldProperties-CBBpMM_Y.js";import"./versionUtils-_ZHtErjP.js";import"./styleUtils-DtHx2LnQ.js";import"./popupUtils-CYXwczcX.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./portalItemUtils-knUv3sqD.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!E(e))}function E({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var l,n,p;return r===o.geometryTypeJSON&&((p=(n=(l=t.drawingInfo)==null?void 0:l.renderer)==null?void 0:n.symbol)==null?void 0:p.type)===o.identifyingSymbol.type})}function _(){return new Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const T=new C({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new C({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let u=class extends ee{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:$(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=M();return this.graphics.forEach(o=>{const l=o.geometry!=null?S(o.geometry,t).geometry:null;l!=null&&J(e,l.type==="point"?l:l.extent,e)}),R(e,D)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],u.prototype,"fullExtent",null),i([s({readOnly:!0})],u.prototype,"fullBounds",null),i([s({readOnly:!0})],u.prototype,"sublayers",null),i([s()],u.prototype,"layer",void 0),i([s()],u.prototype,"layerId",void 0),i([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=i([I("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new G().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let a=class extends W(k(le(ae(re(te))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(l=>{const n=new oe;return n.read(l,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=M();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const l=S(o.layerDefinition.extent,t).geometry;l!=null&&J(e,l,e)}),R(e,D)?S(_(),t).geometry:$(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let l=e.layers.reduce((n,p)=>Math.max(n,p.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:p,featureSet:y}=n,m=p.id??l++,d=E(n);if(d!=null){const c=new u({id:d.id,title:p.name,layerId:m,layer:this,graphics:y.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:P})=>z.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:P}))});o.push(c)}}return new w(o)}writeSublayers(t,e,r,o){var d;const{minScale:l,maxScale:n}=this;if(t==null)return;const p=t.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new X("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let m=this.spatialReference.toJSON();e:for(const c of t)for(const g of c.graphics)if(g.geometry!=null){m=g.geometry.spatialReference.toJSON();break e}for(const c of v){const g=t.find(O=>c.id===O.id);this._writeMapNoteSublayer(y,g,c,l,n,m,o)}A("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(l.geometry!=null){const n=l.geometry;t?q(n.spatialReference,t)||(H(n.spatialReference,t)||K()||await V(),l.geometry=U(n,t)):t=n.spatialReference,e.push(l)}const r=await Y(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,l,n,p){const y=[];if(e!=null){for(const m of e.graphics)this._writeMapNote(y,m,r.geometryType,p);this._normalizeObjectIds(y,T),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[T.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var m,d;if(e==null)return;const{geometry:l,symbol:n,popupTemplate:p}=e;if(l==null)return;if(l.type!==r)return void((m=o==null?void 0:o.messages)==null?void 0:m.push(new L("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new L("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const y={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let o=ie(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:p}=n;(p[r]==null||l.has(p[r]))&&(p[r]=o++),l.add(p[r])}}};i([s({readOnly:!0})],a.prototype,"capabilities",void 0),i([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([s({readOnly:!0})],a.prototype,"featureCollections",void 0),i([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],a.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([s({readOnly:!0})],a.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],a.prototype,"pointLayer",null),i([s({readOnly:!0})],a.prototype,"polygonLayer",null),i([s({readOnly:!0})],a.prototype,"polylineLayer",null),i([s({type:h})],a.prototype,"spatialReference",void 0),i([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([Q("web-map","sublayers")],a.prototype,"writeSublayers",null),i([s({readOnly:!0})],a.prototype,"textLayer",null),i([s()],a.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([I("esri.layers.MapNotesLayer")],a);const ct=a;export{ct as default};