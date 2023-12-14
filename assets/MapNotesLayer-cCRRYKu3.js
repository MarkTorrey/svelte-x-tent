import{k as i,l as s,m as C,dy as G,dv as B,dx as L,dQ as F,bi as h,V as w,aa as N,cf as M,dR as J,dS as S,dT as I,dU as $,q as k,s as W,bP as z,c as A,bY as U,bV as V,bW as q,bS as H,dV as K,bA as T,bl as f,bh as Q,b6 as Y,dW as R,cc as Z}from"./index-rwr9l75y.js";import{m as X}from"./MultiOriginJSONSupport-2V-G1xbs.js";import ee from"./FeatureLayer-4rjmbq6O.js";import{h as te}from"./GraphicsLayer-do1sCuA6.js";import{n as re}from"./objectIdUtils-GktMsX8e.js";import{a as oe}from"./BlendLayer-3kNYNVFw.js";import{u as ie}from"./OperationalLayer-1-FtoNGP.js";import{j as le}from"./PortalLayer-_Q57Kb8E.js";import{t as ae}from"./ScaleRangeLayer-xyAAcj00.js";import{y as D}from"./Field-BSvFaGGy.js";import"./UniqueValueRenderer-vpcJI4tu.js";import"./LegendOptions-E7OIex9R.js";import"./diffUtils-g7Fohb1Y.js";import"./SizeVariable-Ekg0XaNX.js";import"./colorRamps-awdEZ3u_.js";import"./lengthUtils-fNXXQLZy.js";import"./ColorStop-hqYqJZzQ.js";import"./jsonUtils-1tkaaT9f.js";import"./styleUtils-u-o4YNNJ.js";import"./jsonUtils-E5tmSupD.js";import"./DictionaryLoader-uaxQVTqz.js";import"./LRUCache-9CocD9iD.js";import"./Version-VeHGbusC.js";import"./FieldsIndex-PWGCOsyk.js";import"./UnknownTimeZone-jfi9eEf7.js";import"./heatmapUtils-y_chVdwW.js";import"./commonProperties-K0LcbBkz.js";import"./ElevationInfo-sf5mgUmK.js";import"./FeatureLayerBase-QJ-LJX0M.js";import"./featureLayerUtils-5SK4-bW3.js";import"./Query-xcVNMwFB.js";import"./AttachmentQuery-mNo7qWQD.js";import"./RelationshipQuery-Rjgxs11T.js";import"./fieldType-3gjYBYno.js";import"./LayerFloorInfo-HyJxw1xl.js";import"./serviceCapabilitiesUtils-OTnU9eU9.js";import"./editsZScale-BeSQZuaR.js";import"./queryZScale-EIbHvUEY.js";import"./FeatureSet-2nxwJf8L.js";import"./APIKeyMixin-dy0QiC8S.js";import"./ArcGISService-vs3FBQvR.js";import"./CustomParametersMixin-PFAUWQha.js";import"./EditBusLayer-BnK4DbeP.js";import"./FeatureEffectLayer-EAseW86J.js";import"./FeatureEffect-hNFu_4zx.js";import"./jsonUtils-0YRyalyT.js";import"./parser-WHTFD6Ot.js";import"./FeatureReductionLayer-QqVOFpxL.js";import"./clusterUtils-CpC7FOKC.js";import"./MD5-uECS9GB-.js";import"./FeatureReductionSelection-mFV-c50N.js";import"./LabelClass-V8j5wui3.js";import"./labelUtils-JUCMTUQJ.js";import"./defaultsJSON-HVtDPFXZ.js";import"./OrderedLayer-8i5R7tzA.js";import"./RefreshableLayer-PTSrPNGJ.js";import"./TemporalLayer-6cXUqjfc.js";import"./FeatureTemplate-OHAm9Vc6.js";import"./FeatureType-jv7ahdQ_.js";import"./fieldProperties-A_lnIwNt.js";import"./labelingInfo-l9wgedMn.js";import"./versionUtils-qfWN2_GX.js";import"./styleUtils-Bp-u3KAs.js";import"./TopFeaturesQuery-DVolXONq.js";import"./popupUtils-WKtLoZyd.js";import"./interfaces-JKqm7GXy.js";import"./portalItemUtils-hm4FAu7j.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!E(e))}function E({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var l,n,p;return r===o.geometryTypeJSON&&((p=(n=(l=t.drawingInfo)==null?void 0:l.renderer)==null?void 0:n.symbol)==null?void 0:p.type)===o.identifyingSymbol.type})}function _(){return new Y({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new D({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new D({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let m=class extends te{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:$(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=M();return this.graphics.forEach(o=>{const l=o.geometry!=null?S(o.geometry,t).geometry:null;l!=null&&J(e,l.type==="point"?l:l.extent,e)}),I(e,R)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],m.prototype,"fullExtent",null),i([s({readOnly:!0})],m.prototype,"fullBounds",null),i([s({readOnly:!0})],m.prototype,"sublayers",null),i([s()],m.prototype,"layer",void 0),i([s()],m.prototype,"layerId",void 0),i([s({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=i([C("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new G().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let a=class extends oe(ae(ie(le(X(Z))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new m({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(l=>{const n=new ee;return n.read(l,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=M();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const l=S(o.layerDefinition.extent,t).geometry;l!=null&&J(e,l,e)}),I(e,R)?S(_(),t).geometry:$(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let l=e.layers.reduce((n,p)=>Math.max(n,p.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:p,featureSet:y}=n,u=p.id??l++,d=E(n);if(d!=null){const c=new m({id:d.id,title:p.name,layerId:u,layer:this,graphics:y.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:P})=>k.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:P}))});o.push(c)}}return new w(o)}writeSublayers(t,e,r,o){var d;const{minScale:l,maxScale:n}=this;if(t==null)return;const p=t.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new W("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const c of t)for(const g of c.graphics)if(g.geometry!=null){u=g.geometry.spatialReference.toJSON();break e}for(const c of v){const g=t.find(O=>c.id===O.id);this._writeMapNoteSublayer(y,g,c,l,n,u,o)}z("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(l.geometry!=null){const n=l.geometry;t?A(n.spatialReference,t)||(U(n.spatialReference,t)||V()||await q(),l.geometry=H(n,t)):t=n.spatialReference,e.push(l)}const r=await K(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,l,n,p){const y=[];if(e!=null){for(const u of e.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[x.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var u,d;if(e==null)return;const{geometry:l,symbol:n,popupTemplate:p}=e;if(l==null)return;if(l.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const y={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let o=re(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:p}=n;(p[r]==null||l.has(p[r]))&&(p[r]=o++),l.add(p[r])}}};i([s({readOnly:!0})],a.prototype,"capabilities",void 0),i([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([s({readOnly:!0})],a.prototype,"featureCollections",void 0),i([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],a.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([s({readOnly:!0})],a.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],a.prototype,"pointLayer",null),i([s({readOnly:!0})],a.prototype,"polygonLayer",null),i([s({readOnly:!0})],a.prototype,"polylineLayer",null),i([s({type:h})],a.prototype,"spatialReference",void 0),i([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([Q("web-map","sublayers")],a.prototype,"writeSublayers",null),i([s({readOnly:!0})],a.prototype,"textLayer",null),i([s()],a.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([C("esri.layers.MapNotesLayer")],a);const wt=a;export{wt as default};
