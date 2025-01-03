import{aa as R,ab as A,ac as F,U as b}from"./index-Cek7aMWl.js";import{u as f}from"./Texture-BjUzSnJr.js";import{A as n,F as h,V as c,C as a}from"./enums-BlUEVwJR.js";const E=()=>b.getLogger("esri.views.webgl.BufferObject");let x=class r{static createIndex(t,e,s){return new r(t,n.ELEMENT_ARRAY_BUFFER,e,s)}static createVertex(t,e,s){return new r(t,n.ARRAY_BUFFER,e,s)}static createUniform(t,e,s){return new r(t,n.UNIFORM_BUFFER,e,s)}static createPixelPack(t,e=h.STREAM_READ,s){const i=new r(t,n.PIXEL_PACK_BUFFER,e);return s&&i.setSize(s),i}static createPixelUnpack(t,e=h.STREAM_DRAW,s){return new r(t,n.PIXEL_UNPACK_BUFFER,e,s)}static createTransformFeedback(t,e=h.STATIC_DRAW,s){const i=new r(t,n.TRANSFORM_FEEDBACK_BUFFER,e);return i.setSize(s),i}constructor(t,e,s,i){this._context=t,this.bufferType=e,this.usage=s,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(c.BufferObject,this),this._glName=this._context.gl.createBuffer(),f(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===n.ELEMENT_ARRAY_BUFFER?this._indexType===a.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===n.ELEMENT_ARRAY_BUFFER||this.bufferType===n.ARRAY_BUFFER}dispose(){var t;(t=this._context)!=null&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(c.BufferObject,this),this._context=null):this._glName&&E().warn("Leaked WebGL buffer object")}setSize(t,e=null){if(this.bufferType===n.ELEMENT_ARRAY_BUFFER&&e!=null)switch(this._indexType=e,e){case a.UNSIGNED_SHORT:t*=2;break;case a.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===n.ELEMENT_ARRAY_BUFFER&&(R(t)&&(e/=2,this._indexType=a.UNSIGNED_SHORT),A(t)&&(e/=4,this._indexType=a.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;e!=null?i.bufferData(this.bufferType,e,this.usage):i.bufferData(this.bufferType,t,this.usage),f(i),this._isVAOAware&&this._context.bindVAO(s)}setSubData(t,e,s,i){if(!t)return;const u=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:_}=this._context;_.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,s,i-s),f(_),this._isVAOAware&&this._context.bindVAO(u)}getSubData(t,e=0,s,i){if(s<0||i<0)return;const u=l(t)?t.BYTES_PER_ELEMENT:1;if(u*((s??0)+(i??0))>t.byteLength)return;e+u*(i??0)>this.usedMemory&&E().warn("Potential problem getting subdata: requested data exceeds buffer size!");const _=this._context.gl;this.bufferType===n.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,n.TRANSFORM_FEEDBACK_BUFFER),_.getBufferSubData(n.TRANSFORM_FEEDBACK_BUFFER,e,t,s,i),this._context.unbindBuffer(n.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,n.COPY_READ_BUFFER),_.getBufferSubData(n.COPY_READ_BUFFER,e,t,s,i),this._context.unbindBuffer(n.COPY_READ_BUFFER))}async getSubDataAsync(t,e=0,s,i){await this._context.clientWaitAsync(),this.getSubData(t,e,s,i)}};function l(o){return F(o)}export{x as c};