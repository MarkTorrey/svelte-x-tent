import{n as r}from"./centroid-DdLmOD72.js";import{e as o}from"./OptimizedFeature-6cJ-QFG5.js";import{s as i}from"./OptimizedGeometry-BF8iz5FO.js";const c={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=r(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{c as o};
