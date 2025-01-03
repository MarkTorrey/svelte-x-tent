import{aG as d,bc as I,cI as w,aC as k,ah as x,cJ as b,cK as h,cL as g,cM as S,cN as E,bH as v,a0 as M}from"./index-Cek7aMWl.js";import{t as O}from"./jsonUtils-DGzEHX8a.js";import{d as F}from"./FeatureSet-ClbNh9OS.js";const C={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(s){var u;const r=s.folders||[],e=r.slice(),o=new Map,i=new Map,f=new Map,a=new Map,y=new Map,l={esriGeometryPoint:i,esriGeometryPolyline:f,esriGeometryPolygon:a};(((u=s.featureCollection)==null?void 0:u.layers)||[]).forEach(t=>{const p=d(t);p.featureSet.features=[];const c=t.featureSet.geometryType;o.set(c,p);const m=t.layerDefinition.objectIdField;c==="esriGeometryPoint"?G(i,m,t.featureSet.features):c==="esriGeometryPolyline"?G(f,m,t.featureSet.features):c==="esriGeometryPolygon"&&G(a,m,t.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(t=>{y.set(t.id,t)}),r.forEach(t=>{t.networkLinkIds.forEach(p=>{const c=L(p,t.id,s.networkLinks);c&&e.push(c)})}),e.forEach(t=>{var p;if(t.featureInfos){t.points=d(o.get("esriGeometryPoint")),t.polylines=d(o.get("esriGeometryPolyline")),t.polygons=d(o.get("esriGeometryPolygon")),t.mapImages=[];for(const c of t.featureInfos)switch(c.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const m=l[c.type].get(c.id);m&&((p=t[C[c.type]])==null||p.featureSet.features.push(m));break}case"GroundOverlay":{const m=y.get(c.id);m&&t.mapImages.push(m);break}}t.fullExtent=P([t])}});const n=P(e);return{folders:r,sublayers:e,extent:n}}function z(s,r,e,o){var a;const i=(a=I)==null?void 0:a.findCredential(s);s=w(s,{token:i==null?void 0:i.token});const f=k.kmlServiceUrl;return x(f,{query:{url:s,model:"simple",folders:"",refresh:e!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function D(s,r,e=null,o=[]){const i=[],f={},a=r.sublayers,y=new Set(r.folders.map(l=>l.id));return a.forEach(l=>{var u;const n=new s;if(e?n.read(l,e):n.read(l),o.length&&y.has(n.id)&&(n.visible=o.includes(n.id)),f[l.id]=n,l.parentFolderId!=null&&l.parentFolderId!==-1){const t=f[l.parentFolderId];t.sublayers||(t.sublayers=[]),(u=t.sublayers)==null||u.unshift(n)}else i.unshift(n)}),i}function G(s,r,e){e.forEach(o=>{s.set(o.attributes[r],o)})}function J(s,r){let e;return r.some(o=>o.id===s&&(e=o,!0)),e}function L(s,r,e){const o=J(s,e);return o&&(o.parentFolderId=r,o.networkLink=o),o}async function R(s){const r=F.fromJSON(s.featureSet).features,e=s.layerDefinition,o=O(e.drawingInfo.renderer),i=M.fromJSON(s.popupInfo),f=[];for(const a of r){const y=await o.getSymbolAsync(a);a.symbol=y,a.popupTemplate=i,a.visible=!0,f.push(a)}return f}function P(s){var o,i,f,a,y,l;const r=b(h),e=b(h);for(const n of s){if((i=(o=n.polygons)==null?void 0:o.featureSet)!=null&&i.features)for(const u of n.polygons.featureSet.features)g(r,u.geometry),S(e,r);if((a=(f=n.polylines)==null?void 0:f.featureSet)!=null&&a.features)for(const u of n.polylines.featureSet.features)g(r,u.geometry),S(e,r);if((l=(y=n.points)==null?void 0:y.featureSet)!=null&&l.features)for(const u of n.points.featureSet.features)g(r,u.geometry),S(e,r);if(n.mapImages)for(const u of n.mapImages)g(r,u.extent),S(e,r)}return E(e,h)?void 0:{xmin:e[0],ymin:e[1],zmin:e[2],xmax:e[3],ymax:e[4],zmax:e[5],spatialReference:v.WGS84}}export{D as S,R as b,T as d,z as g,P as j};
