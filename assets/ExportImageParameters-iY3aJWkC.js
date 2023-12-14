import{k as t,l as a,m as h,a9 as c,c9 as p,ca as u}from"./index-rwr9l75y.js";import{j as b}from"./commonProperties-K0LcbBkz.js";import{n as m}from"./floorFilterUtils-zOdaZIyV.js";import{n as d}from"./sublayerUtils-3kcFtWDF.js";const f={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let r=class extends c{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const o=m(this.floors,s);return s.toExportImageJSON(o)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&d(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(f[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var o;const e=!!((o=this.floors)!=null&&o.length),s=this.visibleSublayers.filter(l=>l.definitionExpression!=null||e&&l.floorInfo!=null);return s.length?JSON.stringify(s.reduce((l,n)=>{const i=m(this.floors,n),y=p(i,n.definitionExpression);return y!=null&&(l[n.id]=y),l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,o=this.scale,l=i=>{i.visible&&(o===0||u(o,i.minScale,i.maxScale))&&(i.sublayers?i.sublayers.forEach(l):e.unshift(i))};s&&s.forEach(l);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((i,y)=>e[y]!==i)?e:n}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};t([a({readOnly:!0})],r.prototype,"dynamicLayers",null),t([a()],r.prototype,"floors",void 0),t([a({readOnly:!0})],r.prototype,"hasDynamicLayers",null),t([a()],r.prototype,"layer",null),t([a({readOnly:!0})],r.prototype,"layers",null),t([a({readOnly:!0})],r.prototype,"layerDefs",null),t([a({type:Number})],r.prototype,"scale",void 0),t([a(b)],r.prototype,"timeExtent",void 0),t([a({readOnly:!0})],r.prototype,"version",null),t([a({readOnly:!0})],r.prototype,"visibleSublayers",null),r=t([h("esri.layers.mixins.ExportImageParameters")],r);export{r as m};
