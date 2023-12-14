import{k as g,l as m,m as W,a9 as D,C as q,j as H,aa as O,ar as I,as as V,eY as P,a7 as w,ey as S}from"./index-rwr9l75y.js";import{y as $}from"./parser-WHTFD6Ot.js";import{M as E}from"./definitions--BerIEB0.js";import{D as G}from"./enums-8pc8f5Ge.js";import{e as A,T as F}from"./Texture-IITjQftW.js";const R=-1;let f=class extends D{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=q("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(M(t))}catch(e){this._transitionTo([]),H.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&x(this._current,M(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&x(this._current,t,this.scale)?(this._final=t,this._to=O(t),L(this._current,this._to,this.scale),this._from=O(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?O(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const r=this._current[i],h=this._from[i],l=this._to[i];r.scale=B(h.scale,l.scale,e);for(let o=0;o<r.effects.length;o++){const n=r.effects[o],d=h.effects[o],u=l.effects[o];n.interpolate(d,u,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?O(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,i=this._current.length-1;let r,h,l=1;if(e.length===1||t>=e[0].scale)h=r=e[0].effects;else if(t<=e[i].scale)h=r=e[i].effects;else for(let o=0;o<i;o++){const n=e[o],d=e[o+1];if(n.scale>=t&&d.scale<=t){l=(t-n.scale)/(d.scale-n.scale),r=n.effects,h=d.effects;break}}for(let o=0;o<this.effects.length;o++)this.effects[o].interpolate(r[o],h[o],l)}};function M(s){const t=$(s)||[];return j(t)?[{scale:R,effects:t}]:t}function x(s,t,e){var i,r,h,l;return!((i=s[0])!=null&&i.effects)||!((r=t[0])!=null&&r.effects)?!0:!((((h=s[0])==null?void 0:h.scale)===R||((l=t[0])==null?void 0:l.scale)===R)&&(s.length>1||t.length>1)&&e<=0)&&I(s[0].effects,t[0].effects)}function L(s,t,e){const i=s.length>t.length?s:t,r=s.length>t.length?t:s,h=r[r.length-1],l=(h==null?void 0:h.scale)??e,o=(h==null?void 0:h.effects)??[];for(let n=r.length;n<i.length;n++)r.push({scale:l,effects:[...o]});for(let n=0;n<i.length;n++)r[n].scale=r[n].scale===R?e:r[n].scale,i[n].scale=i[n].scale===R?e:i[n].scale,V(r[n].effects,i[n].effects)}function B(s,t,e){return s+(t-s)*e}function j(s){const t=s[0];return!!t&&"type"in t}g([m()],f.prototype,"_to",void 0),g([m()],f.prototype,"duration",void 0),g([m({value:""})],f.prototype,"effect",null),g([m({readOnly:!0})],f.prototype,"effects",void 0),g([m({readOnly:!0})],f.prototype,"hasEffects",null),g([m({value:0})],f.prototype,"scale",null),g([m({readOnly:!0})],f.prototype,"transitioning",null),f=g([W("esri.layers.effects.EffectView")],f);const k=1/q("mapview-transitions-duration");let U=class extends P{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var i;if(this._stage===t)return;const e=this._stage;this._stage=t,t?(i=this._stage)!=null&&i.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e==null||e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=w(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=w(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var t,e;(t=this._fadeInResolver)==null||t.call(this),this._fadeInResolver=null,(e=this._fadeOutResolver)==null||e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const i=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===i)this.computedVisible=this.visible;else{const h=t*k;this.computedOpacity=r>i?Math.max(i,r-h):Math.min(i,r+h),this.computedVisible=this.computedOpacity>0;const l=i===this.computedOpacity;this.inFadeTransition=!l,l||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const Y=1,st=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],rt=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],v=256,p={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},T=H.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function z(s,t){t.fillColor[0]=s.color.r/255,t.fillColor[1]=s.color.g/255,t.fillColor[2]=s.color.b/255,t.fillColor[3]=s.color.a,s.haloColor?(t.outlineColor[0]=s.haloColor.r/255,t.outlineColor[1]=s.haloColor.g/255,t.outlineColor[2]=s.haloColor.b/255,t.outlineColor[3]=s.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=s.fillOpacity,t.outlineColor[3]*=s.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=p.outlineWidth,t.outerHaloWidth=p.outerHaloWidth,t.innerHaloWidth=p.innerHaloWidth,t.outlinePosition=p.outlinePosition}const J=[0,0,0,0];class K{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:p.outlinePosition,outlineWidth:p.outlineWidth,innerHaloWidth:p.innerHaloWidth,outerHaloWidth:p.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*v),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;z(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,r=e.outlinePosition-e.outlineWidth/2,h=e.outlinePosition+e.outlineWidth/2,l=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,o=Math.sqrt(Math.PI/2)*Y,n=Math.abs(i)>o?Math.round(10*(Math.abs(i)-o))/10:0,d=Math.abs(l)>o?Math.round(10*(Math.abs(l)-o))/10:0;let u;n&&!d?T.error("The outer rim of the highlight is "+n+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!n&&d?T.error("The inner rim of the highlight is "+d+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):n&&d&&T.error("The highlight is "+Math.max(n,d)+"px away from the edge of the feature; consider reducing some width values.");const a=[void 0,void 0,void 0,void 0];function b(c,C,_){a[0]=(1-_)*c[0]+_*C[0],a[1]=(1-_)*c[1]+_*C[1],a[2]=(1-_)*c[2]+_*C[2],a[3]=(1-_)*c[3]+_*C[3]}const{_texelData:y}=this;for(let c=0;c<v;++c)u=i+c/(v-1)*(l-i),u<i?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):u<r?b(J,e.outlineColor,(u-i)/(r-i)):u<h?[a[0],a[1],a[2],a[3]]=e.outlineColor:u<l?b(e.outlineColor,e.fillColor,(u-h)/(l-h)):[a[0],a[1],a[2],a[3]]=e.fillColor,y[4*c]=255*a[0],y[4*c+1]=255*a[1],y[4*c+2]=255*a[2],y[4*c+3]=255*a[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=l,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const i=new A;i.wrapMode=G.CLAMP_TO_EDGE,i.width=v,i.height=1,this._shadeTex=new F(t,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,v,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,E),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}}class nt extends U{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new f),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new K),this._highlightGradient.setHighlightOptions(t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){var r;const e=this.createRenderParams(t),{painter:i}=e;i.beforeRenderLayer(e,(r=this._clips)!=null&&r.length?255:0,this.computedOpacity),this.renderChildren(e),i.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:S()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{f as a,rt as b,nt as h,U as i,Y as o,st as t};
