import{bo as i,b3 as a}from"./index-eSY5-lt-.js";import{d as e}from"./queryTopFeatures-aIhHQyXw.js";import{S as n}from"./TopFeaturesQuery-1Hh7r5CS.js";import"./query-ROhOLudR.js";import"./pbfQueryUtils-HEDqsMMp.js";import"./pbf-L_JjT3GM.js";import"./OptimizedGeometry-CbNXANBG.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./queryZScale-ye882EvB.js";async function E(o,r,m){const p=i(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{E as executeForTopExtents};
