import{eV as a,eW as d,eX as i}from"./index-eSY5-lt-.js";import{r as g}from"./VertexSnappingCandidate-UrIt3CGy.js";function e({x:t,y:r,z:n}){return i(t,r,n??0)}function u(t,r){switch(t.type){case"edge":return t.draped?new a({edgeStart:e(t.start),edgeEnd:e(t.end),targetPoint:e(t.target),objectId:t.objectId,getGroundElevation:r}):new d({edgeStart:e(t.start),edgeEnd:e(t.end),targetPoint:e(t.target),objectId:t.objectId,isDraped:!1});case"vertex":return new g({targetPoint:e(t.target),objectId:t.objectId,isDraped:!1})}}function p(t,r){return t!=null&&t.type==="3d"?(n,o)=>t.elevationProvider.getElevation(n,o,0,r,"ground"):()=>null}export{u as a,p as o};