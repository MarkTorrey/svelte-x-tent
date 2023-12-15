import{k as a,K as h,L as l}from"./index-eSY5-lt-.js";import{V as u}from"./enums-8pc8f5Ge.js";import{i as _,o as c}from"./Texture-4vQG0qLG.js";const n=a.getLogger("esri.views.webgl.VertexArrayObject");let g=class{constructor(t,e,i,s,r=null){this._context=t,this._locations=e,this._layout=i,this._buffers=s,this._indexBuffer=r,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce((t,e)=>t+this._buffers[e].byteLength,this._indexBuffer!=null?this._indexBuffer.byteLength:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*h}dispose(){var t;if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const e in this._buffers)(t=this._buffers[e])==null||t.dispose(),delete this._buffers[e];this._indexBuffer=l(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&n.warn("Leaked WebGL VAO")}disposeVAOOnly(){var t,e;this._glName&&(((e=(t=this._context)==null?void 0:t.capabilities)==null?void 0:e.vao).deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(u.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e,this._context.instanceCounter.increment(u.VertexArrayObject,this)}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||n.error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const r in t){const o=t[r];o||n.error("Vertex buffer is uninitialized!");const f=e[r];f||n.error("Vertex element descriptor is empty!"),_(this._context,this._locations,o,f)}i!=null&&(this._context.capabilities.vao?s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||n.error("Vertex buffer dictionary is empty!");for(const i in t){const s=t[i];s||n.error("Vertex buffer is uninitialized!");const r=e[i];c(this._context,this._locations,s,r)}this._indexBuffer!=null&&this._context.unbindBuffer(this._indexBuffer.bufferType)}};export{g as f};
