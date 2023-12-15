import{l,m as c,aX as f,bq as w,bi as E,n as b,u as U,_ as $,bB as H,g as F,k as L,aZ as n,af as O,bC as T,bD as D,a_ as y,aY as I,bE as v,bF as S,O as k,bG as M,bH as R,s as j}from"./index-eSY5-lt-.js";import{p as P}from"./portalItemUtils-svYaQgLA.js";const C=_=>{let i=class extends _{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=U(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,e,t){if(e.itemId)return new f({id:e.itemId,portal:t==null?void 0:t.portal})}writePortalItem(r,e){r!=null&&r.id&&(e.itemId=r.id)}async loadFromPortal(r,e){var t;if((t=this.portalItem)!=null&&t.id)try{const{load:s}=await $(()=>import("./layersLoader-JqERifoX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return H(e),await s({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},e)}catch(s){throw F(s)||L.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${s}`),s}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(e=>(n(e),!0)))}async setUserPrivileges(r,e){if(!O.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:a}}=await this._fetchUserPrivileges(r,e);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",a)}catch(t){n(t)}}async _fetchUserPrivileges(r,e){var d;let t=this.portalItem;if(!r||!t||!t.loaded||t.sourceUrl)return this._fetchFallbackUserPrivileges(e);const s=r===t.id;if(s&&t.portal.user)return P(t);let a,h;if(s)a=t.portal.url;else try{a=await T(this.url,e)}catch(o){n(o)}if(!a||!D(a,t.portal.url))return this._fetchFallbackUserPrivileges(e);try{const o=e!=null?e.signal:null;h=await((d=y)==null?void 0:d.getCredential(`${a}/sharing`,{prompt:!1,signal:o}))}catch(o){n(o)}const m=!0,u=!1,p=!1;if(!h)return{features:{edit:m,fullEdit:u},content:{updateItem:p}};try{if(s?await t.reload():(t=new f({id:r,portal:{url:a}}),await t.load(e)),t.portal.user)return P(t)}catch(o){n(o)}return{features:{edit:m,fullEdit:u},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(r){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(r)}catch(t){n(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){var s;const e=this.url?(s=y)==null?void 0:s.findCredential(this.url):null;if(!e)return!0;const t=g.credential===e?g.user:await this._fetchEditingUser(r);return g.credential=e,g.user=t,(t==null?void 0:t.privileges)==null||t.privileges.includes("features:user:edit")}async _fetchEditingUser(r){var p,d;const e=(d=(p=this.portalItem)==null?void 0:p.portal)==null?void 0:d.user;if(e)return e;const t=y.findServerInfo(this.url??"");if(!(t!=null&&t.owningSystemUrl))return null;const s=`${t.owningSystemUrl}/sharing/rest`,a=I.getDefault();if(a&&a.loaded&&v(a.restUrl)===v(s))return a.user;const h=`${s}/community/self`,m=r!=null?r.signal:null,u=await S(k(h,{authMode:"no-prompt",query:{f:"json"},signal:m}));return u.ok?M.fromJSON(u.value.data):null}read(r,e){e&&(e.layer=this),super.read(r,e)}write(r,e){var a;const t=e==null?void 0:e.portal,s=((a=this.portalItem)==null?void 0:a.id)&&(this.portalItem.portal||I.getDefault());return t&&s&&!R(s.restUrl,t.restUrl)?(e.messages&&e.messages.push(new j("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...e,layer:this})}};return l([c({type:f})],i.prototype,"portalItem",null),l([w("web-document","portalItem",["itemId"])],i.prototype,"readPortalItem",null),l([E("web-document","portalItem",{itemId:{type:String}})],i.prototype,"writePortalItem",null),l([c({clonable:!1})],i.prototype,"resourceReferences",void 0),l([c({type:Boolean,readOnly:!0})],i.prototype,"userHasEditingPrivileges",void 0),l([c({type:Boolean,readOnly:!0})],i.prototype,"userHasFullEditingPrivileges",void 0),l([c({type:Boolean,readOnly:!0})],i.prototype,"userHasUpdateItemPrivileges",void 0),i=l([b("esri.layers.mixins.PortalLayer")],i),i},g={credential:null,user:null};export{C as j};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./layersLoader-JqERifoX.js","./index-eSY5-lt-.js","./index-5m03CWEM.css","./fetchService-GBO3P7GB.js","./lazyLayerLoader-yzrHI9gA.js","./portalLayers-UpS2HqeU.js","./associatedFeatureServiceUtils-ri3rxIXJ.js","./portalItemUtils-svYaQgLA.js","./layersCreator-PX7PzyU1.js","./styleUtils-KC8yNoSs.js","./jsonContext-YSqJBqeH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}