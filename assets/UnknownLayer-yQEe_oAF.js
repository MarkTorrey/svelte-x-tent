import{fv as i,l as s,m as t,n as l,ff as p,s as y}from"./index-eSY5-lt-.js";import{m as u}from"./MultiOriginJSONSupport-vWhNPmo6.js";import{j as d}from"./PortalLayer-rHgWFtbi.js";import"./portalItemUtils-svYaQgLA.js";let e=class extends d(u(p)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),o(new y("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([t({type:["show","hide"]})],e.prototype,"listMode",void 0),s([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([l("esri.layers.UnknownLayer")],e);const h=e;export{h as default};