import{V as i,X as t,a7 as h,R as l,U as d}from"./index-Cek7aMWl.js";const f=s=>{let e=class extends s{initialize(){this.addHandles(h(()=>this.layer,"refresh",r=>{this.doRefresh(r.dataChanged).catch(a=>{l(a)||d.getLogger(this).error(a)})}),"RefreshableLayerView")}};return e=i([t("esri.views.layers.RefreshableLayerView")],e),e};export{f as i};