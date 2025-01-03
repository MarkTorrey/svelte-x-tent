import{hl as o,hm as y,hn as p,cx as t,bH as d}from"./index-Cek7aMWl.js";const r=(n=>n)(["operational-layers","basemap","ground"]),w={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:r}}},f={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(n,e)=>!e.disablePopup},write:{enabled:!0,writer(n,e,a){e[a]=!n}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:r}}},b={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:y}}},g={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:r}}},u={value:null,type:p,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:r}}};function v(n){return{type:n,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const l={write:{enabled:!0,layerContainerTypes:r},read:!0},s={type:Number,json:{origins:{"web-document":l,"portal-item":{write:!0}}}},j={...s,json:{...s.json,origins:{"web-document":{...l,write:{enabled:!0,layerContainerTypes:r,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(n,e,a)=>{var i;return a&&a.origin!=="service"||!e.drawingInfo||e.drawingInfo.transparency===void 0?(i=e.layerDefinition)!=null&&i.drawingInfo&&e.layerDefinition.drawingInfo.transparency!==void 0?o(e.layerDefinition.drawingInfo.transparency):void 0:o(e.drawingInfo.transparency)}}}},I={type:t,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(n,e)=>{const a=t.fromJSON(n);return e.spatialReference!=null&&typeof e.spatialReference=="object"&&(a.spatialReference=d.fromJSON(e.spatialReference)),a}}}},read:!1}},D={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},C={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:r}}},name:"layerDefinition.minScale",write:!0}},N={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:r}}},name:"layerDefinition.maxScale",write:!0}},S={json:{write:{ignoreOrigin:!0,layerContainerTypes:r},origins:{"web-map":{read:!1,write:!1}}}};export{r as a,I as b,v as c,u as d,j as f,D as g,N as j,m as l,b as p,f as s,w as t,C as u,S as v,s as w,g as y};
