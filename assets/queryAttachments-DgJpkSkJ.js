import{gY as u,gZ as f,ah as p}from"./index-Cek7aMWl.js";import{t as d}from"./query-Dg0JyN0I.js";import{a as l}from"./AttachmentInfo-k_mTVEZG.js";import"./pbfQueryUtils-D7UGG6Td.js";import"./pbf-CEYKCTdB.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-BXApFFgO.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function w(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,h=u(f(`${n.path}/${o}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:h,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function z(n,t,e){let a={query:d({...n.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),p(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function G(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{z as executeAttachmentQuery,G as fetchAttachments,w as processAttachmentQueryResult};
