const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./groupLayerUtils-mS6fVEVV.js","./utils-BLybfNzW.js","./index-BdDnxAOC.js","./index-BvbKYc24.css","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./jsonContext-BOumTY8x.js","./portalItemUtils-knUv3sqD.js","./saveUtils-PwGz79jI.js","./resourceUtils-D5lD2oCn.js","./resourceUtils-CQ1l2Cne.js"])))=>i.map(i=>d[i]);
import{g8 as b,g9 as v,jt as c,ju as m,eo as f,jv as _,gQ as g,Z as y,dV as w,jw as I,bZ as L,b$ as O,gp as S,jx as $,W as r,X as l,dl as h,dk as V,iM as A,dR as M,gk as u,Y as P,gc as E,_ as j,V as C}from"./index-BdDnxAOC.js";import{S as x}from"./MultiOriginJSONSupport-BxqyqD-M.js";import{b as T}from"./OperationalLayer-EPpXepzU.js";import{j as R}from"./PortalLayer-DVe9srog.js";import{b as G}from"./fetchService-BBXWKjiR.js";import{A as p}from"./interfaces-CL2NbQte.js";import{r as H}from"./saveUtils-PwGz79jI.js";import"./commonProperties-BBSEfxbj.js";import"./portalItemUtils-knUv3sqD.js";const k=Symbol("WebScene");let s=class extends b(v(T(R(c(m(x(E))))))){constructor(e){super(e),this.allLayers=new f({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=_(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=g(async(i,t,a)=>{const{save:o,saveAs:n}=await j(()=>import("./groupLayerUtils-mS6fVEVV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);switch(i){case p.SAVE:return o(this,t);case p.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([y(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&k in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(M(()=>this.tables,"before-add",t=>{t.preventDefault(),C.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},A),y(()=>this.visible,this._onVisibilityChange.bind(this),u)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===w.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const d=I(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);d!=null&&d.layerType&&o.push(d)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new L({id:a,portal:t==null?void 0:t.portal})}writePortalItem(e,i){e!=null&&e.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return H(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:G},e).catch(t=>{if(O(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return S(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(p.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(y(()=>e.visible,i=>this._onChildVisibilityChange(e,i),u),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!$(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([h("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:(e==null?void 0:e.type)==="Group Layer"&&(t==null?void 0:t.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([V("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([h("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([P("esri.layers.GroupLayer")],s);const X=s;export{X as default};