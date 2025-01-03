import{V as t,W as i,X as c,aE as m,cO as h,cP as u,cQ as p}from"./index-Cek7aMWl.js";import{n as b}from"./sublayerUtils-CsQjXgeP.js";const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let r=class extends m{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const y=h(this.floors,s);return s.toExportImageJSON(y)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&b(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(d[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var y;const e=!!((y=this.floors)!=null&&y.length),s=this.visibleSublayers.filter(l=>l.definitionExpression!=null||e&&l.floorInfo!=null);return s.length?JSON.stringify(s.reduce((l,n)=>{const a=h(this.floors,n),o=u(a,n.definitionExpression);return o!=null&&(l[n.id]=o),l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,y=this.scale,l=a=>{a.visible&&(y===0||p(y,a.minScale,a.maxScale))&&(a.sublayers?a.sublayers.forEach(l):e.unshift(a))};s&&s.forEach(l);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((a,o)=>e[o]!==a)?e:n}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};t([i({readOnly:!0})],r.prototype,"dynamicLayers",null),t([i()],r.prototype,"floors",void 0),t([i({readOnly:!0})],r.prototype,"hasDynamicLayers",null),t([i()],r.prototype,"layer",null),t([i({readOnly:!0})],r.prototype,"layers",null),t([i({readOnly:!0})],r.prototype,"layerDefs",null),t([i({type:Number})],r.prototype,"scale",void 0),t([i({readOnly:!0})],r.prototype,"version",null),t([i({readOnly:!0})],r.prototype,"visibleSublayers",null),r=t([c("esri.layers.support.ExportImageParameters")],r);export{r as y};
