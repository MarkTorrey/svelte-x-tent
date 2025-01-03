import{ih as f,dt as _,dp as m,ii as v,ij as l,V as x,X as y,dd as p,bR as L,ik as C,dh as u}from"./index-Cek7aMWl.js";import{v as V,h as P,M as S}from"./lineSegment-CMQTKrER.js";import{Y as b}from"./Octree-0huRLiDU.js";import{m as j}from"./edgeProcessing-kXEV4aNV.js";import"./Util-D3WFoRjI.js";import"./deduplicate-BRGImMLi.js";import"./Indices-CDfjiMVj.js";import"./InterleavedLayout-DapSkrn-.js";import"./BufferView-D7rTj7nO.js";import"./types-D0PSWh4d.js";import"./VertexAttribute-BnAa5VW0.js";import"./glUtil-C6KhMg1m.js";import"./enums-BlUEVwJR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-CaeqCbr7.js";const I=1e3;function T(t,n,o){const s=v(),e=l(s);return f(e,e,t,.5),f(e,e,n,.5),s[3]=_(e,t),m(e,e,o),s}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=V(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,n){await Promise.resolve(),L(n),await this._ensureEdgeLocations(t,n);const o=[];return this._edges.forEachNeighbor(s=>(this._addCandidates(t,s,o),o.length<I),t.bounds),{result:{candidates:o}}}async _ensureEdgeLocations(t,n){const o=[];if(this._components.forEachNeighbor(i=>{if(i.info==null){const{id:c,uid:d}=i;o.push({id:c,uid:d})}return!0},t.bounds),!o.length)return;const s={components:o},e=await this.remoteClient.invoke("fetchAllEdgeLocations",s,n??{});for(const i of e.components)this._setFetchEdgeLocations(i)}async add(t){const n=new h(t.id,t.bounds);return this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}}async remove(t){const n=this._idToComponent.get(t.id);if(n){const o=[];this._edges.forEachNeighbor(s=>(s.component===n&&o.push(s),!0),n.bounds),this._edges.remove(o),this._components.remove([n]),this._idToComponent.delete(n.id)}return{result:{}}}_setFetchEdgeLocations(t){const n=this._idToComponent.get(t.id);if(n==null||t.uid!==n.uid)return;const o=j.createView(t.locations),s=new Array(o.count),e=p(),i=p();for(let r=0;r<o.count;r++){o.position0.getVec(r,e),o.position1.getVec(r,i);const a=T(e,i,t.origin),E=new k(n,r,a);s[r]=E}this._edges.add(s);const{objectIds:c,origin:d}=t;n.info={locations:o,objectIds:c,origin:d}}_addCandidates(t,n,o){const{info:s}=n.component,{origin:e,objectIds:i}=s,c=s.locations,d=c.position0.getVec(n.index,this._tmpP1),r=c.position1.getVec(n.index,this._tmpP2);m(d,d,e),m(r,r,e);const a=i[c.componentIndex.get(n.index)];this._addEdgeCandidate(t,a,d,r,o),w(t,a,d,o),w(t,a,r,o)}_addEdgeCandidate(t,n,o,s,e){if(!t.returnEdge)return;const i=l(t.bounds),c=P(o,s,this._tmpLineSegment),d=S(c,i,this._tmpP3);C(t.bounds,d)&&e.push({type:"edge",objectId:n,target:u(d),distance:_(i,d),start:u(o),end:u(s)})}};g=x([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const J=g;function w(t,n,o,s){if(!t.returnVertex||!C(t.bounds,o))return;const e=l(t.bounds);s.push({type:"vertex",objectId:n,target:u(o),distance:_(e,o)})}class h{constructor(n,o){this.id=n,this.bounds=o,this.info=null,this.uid=++h.uid}}h.uid=0;class k{constructor(n,o,s){this.component=n,this.index=o,this.bounds=s}}export{J as default};
