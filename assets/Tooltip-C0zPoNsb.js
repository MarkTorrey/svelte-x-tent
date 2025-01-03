const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcite-button-BQ85dayr.js","./index-Cek7aMWl.js","./index-DRwmR_le.css","./calcite-icon-BSz57Dah.js","./calcite-input-Cv8wWHZn.js","./calcite-dropdown-Db9svtFd.js"])))=>i.map(i=>d[i]);
import{ov as se,ow as le,ox as re,cA as ae,bH as Bt,cC as zt,A as J,cD as ce,oy as V,bo as ue,mc as j,ma as st,m9 as de,bk as S,m6 as pe,oz as Nt,V as l,W as a,X as p,aE as fe,oA as he,fw as ve,a$ as me,eM as _e,oB as $e,Q as Xt,m7 as ye,mb as F,oC as qt,mm as Q,dt as tt,dq as ge,dd as D,oD as be,oE as we,oF as xe,kM as P,kO as s,ba as ke,oG as Ce,kL as lt,fV as Te,m5 as q,oH as h,n7 as Ee,kN as Et,hA as Ot,bR as Me,oI as De,oJ as Ie,iw as Ae,oK as Gt,oL as Ve,oM as Re,oN as ze,_ as w,Y as G,oO as et,cq as Oe,oP as Le,h7 as Se,a1 as Lt,h_ as nt,n6 as Fe}from"./index-Cek7aMWl.js";import{w as Pe,a as He}from"./spatialReferenceEllipsoidUtils-DfobcDUq.js";import{w as Ue,Z as Ze,g as Ye,D as Be,d as Ne,p as Xe,x as qe,y as Ge,F as Ke,$ as je,h as We,B as Je,M as Qe,j as tn,b as en}from"./unitFormatUtils-BXaJcNjA.js";function Mt(){return le()}function ei(){return se()}function Dt(e,t){const n=[];e=(e=(e=e.replaceAll(/[\u00B0\u00BA]/g,"^")).replaceAll("′","'")).replaceAll("″",'"');const i=sn(t);return re.dmsToGeog(i,1,[e],n)?new ae(n[0][0],n[0][1],Bt.WGS84):null}function nn(e){var t;return e&&Mt()?V(e)??((t=Dt(`0° 0' 0" N | ${e}`))==null?void 0:t.longitude)??null:null}function on(e){var t;return e&&Mt()?V(e)??((t=Dt(`${e} | 00° 00' 00" E`))==null?void 0:t.latitude)??null:null}function sn(e){let t=null;if(e||(e=Bt.WGS84),e.wkid){if(t=zt.geogcs(e.wkid),!t)throw new J("coordinate-formatter:invalid-spatial-reference","wkid is not valid")}else{if(!e.wkt2&&!e.wkt)throw new J("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");if(t=zt.fromString(ce.PE_TYPE_GEOGCS,e.wkt2||e.wkt),!t)throw new J("coordinate-formatter:invalid-spatial-reference","wkt is not valid")}return t}function It(e,t,n,i=2,o="abbr"){return Ye(e,j(t,n).value,n,i,o)}function Kt(e,t,n,i=2,o="abbr"){return Xe(e,j(t,n).value,n,i,o)}function ln(e,t,n=2,i="abbr"){return Be(e,t.value,t.unit,n,i)}function rn(e,t,n=2,i="abbr"){return qe(e,t.value,t.unit,n,i)}function an(e,t,n=2,i="abbr"){return Ge(e,t.value,t.unit,n,i)}function cn(e,t,n=2,i="abbr"){return Ke(e,t.value,t.unit,n,i)}function un(e,t,n=2,i="abbr"){return je(e,t.value,t.unit,n,i)}function dn(e,t,n=2,i="abbr"){return Ne(e,t.value,t.unit,n,i)}function pn(e,t,n=2,i="abbr"){return We(e,t.value,t.unit,n,i)}function fn(e,t,n=2,i="abbr"){return Je(e,t.value,t.unit,n,i)}function hn(e,t,n=2,i="abbr"){return Qe(e,t.value,t.unit,n,i)}function vn(e,t,n=2,i="abbr"){return tn(e,t.value,t.unit,n,i)}function H(e,t,n,i=ue,o=!0){return Ue(e.value,e.unit,e.rotationType,t,n,i,o)}function mn(e,t,n){return Ze(e.value,e.unit,e.rotationType,t,n)}function St(e,t,n,i,o="abbr"){switch(i=i??2,n){case"imperial":return dn(e,t,i,o);case"metric":return ln(e,t,i,o);default:return It(e,t,n,i,o)}}function _n(e,t,n,i=2,o="abbr"){switch(n){case"imperial":return pn(e,t,i,o);case"metric":return rn(e,t,i,o);default:return Kt(e,t,n,i,o)}}function $n(e,t,n,i=2,o="abbr"){switch(n){case"imperial":return fn(e,t,i,o);case"metric":return an(e,t,i,o);default:return It(e,t,n,i,o)}}function yn(e,t,n,i=2,o="abbr"){switch(n){case"imperial":return hn(e,t,i,o);case"metric":return cn(e,t,i,o);default:return Kt(e,t,n,i,o)}}function gn(e,t,n,i=2,o="abbr"){switch(n){case"imperial":return vn(e,t,i,o);case"metric":return un(e,t,i,o);default:return It(e,t,n,i,o)}}const W=1,jt=6;function bn(e,t){return{angleRelative:wn,direction:xn,directionRelative:kn,directionRelativeBilateral:Cn,latitudeDecimalDegrees:En,longitudeDecimalDegrees:Tn,area:(n,i)=>gn(e,n,i??t.area),length:(n,i,o)=>St(e,n,i??t.length,o),lengthRelative:(n,i)=>_n(e,n,i??t.length),totalLength:(n,i)=>St(e,n,i??t.length),verticalLength:(n,i)=>$n(e,n,i??t.length),verticalLengthRelative:(n,i)=>yn(e,n,i??t.verticalLength),percentage:Mn,scalar:Qt,scale:Dn}}function wn(e){return S(e,{signDisplay:"exceptZero",...At(W)})}function xn(e){return H(e,e.rotationType,W)}function kn(e){const t=pe(e);return S(t,{style:"unit",unitDisplay:"narrow",unit:"degree",signDisplay:t>0?"never":"exceptZero",...At(W)})}function Cn(e){return H(e,e.rotationType,W)}function Tn(e){return Wt(e,ee)}function En(e){return Wt(e,ne)}function ni(e){return Jt(e,ee)}function ii(e){return Jt(e,ne)}function Wt(e,t){return H(j(e,"degrees"),"geographic",jt,t,!1)}function Jt(e,t){const i=t.normalize(j(e,"degrees").value,void 0,!1);return Qt(st(i),jt)}function Mn(e){return S(e.value,{style:"percent"})}function Dn(e){return S(e,{style:"percent",maximumFractionDigits:0})}function Qt(e,t){return S(e.value,At(t))}function At(e){return{minimumFractionDigits:e,maximumFractionDigits:e}}function oi(e){return(t,n)=>{const i=V(t);return i!=null?e(i,n):null}}const In=e=>{let t=`[-+]?[0-9${e.thousands}]+`;return e.decimal!==""&&(t+=`${e.decimal}[0-9]+`),new RegExp(`^(${t}\\s*)${e.separator}(\\s*${t})$`,"i")},An=" ",te=[];for(const e of[",","\\|","\\s+"])for(const t of["\\.",",",""])for(const n of["",",","\\.",An,"\\s+"])e!==t&&e!==n&&t!==n&&te.push({separator:e,decimal:t,thousands:n,pattern:In({decimal:t,thousands:n,separator:e})});function si(e){for(const{decimal:t,thousands:n,pattern:i}of te){i.lastIndex=0;const o=e.match(i);if(!o)continue;const r=V(Ft(o[1],t,n)),c=V(Ft(o[2],t,n));if(r!=null&&c!=null)return{x:st(r),y:st(c)}}return null}function Ft(e,t,n){let i=e.replaceAll(/[\s+]/g,"");return n!==""&&(i=i.replaceAll(n,"")),t!==""&&(i=i.replaceAll(t,".")),i}function li(e){if(!e||V(e)!=null||!Mt())return null;const t=Dt(e),n=K(t==null?void 0:t.latitude),i=K(t==null?void 0:t.longitude);return i!=null&&n!=null?{latitude:n,longitude:i}:null}function ri(e){return K(nn(e))}function ai(e){return K(on(e))}function K(e){return e!=null?de(e,"degrees","geographic"):null}const ee=new Nt(-180,180),ne=new Nt(-90,90);let T=class extends fe{constructor(t){super(t),this.helpMessage=void 0,this.viewType=void 0}get visibleElements(){return this.sketchOptions.tooltips.visibleElements}get allFields(){return[]}get editableFields(){return this.allFields.filter(t=>t.visible&&!t.readOnly)}clearInputValues(){this.allFields.forEach(t=>t.clearInputValue())}};l([a()],T.prototype,"sketchOptions",void 0),l([a()],T.prototype,"visibleElements",null),l([a()],T.prototype,"helpMessage",void 0),l([a()],T.prototype,"viewType",void 0),l([a()],T.prototype,"allFields",null),l([a()],T.prototype,"editableFields",null),T=l([p("esri.views.interactive.tooltip.infos.SketchTooltipInfo")],T);function ie(e){return he(e)?ve(e)||me(e)||_e(e)||$e(e)?Pe:e:He(e)}var x;function Vn(e){return Rn(e,x.Horizontal)}function Rn(e,t){const{hasZ:n,spatialReference:i}=e,o=ie(i);let r=0;const c=qt(o);if(c==null)return null;const f=t===x.Direct?Ln:Vt;for(const k of e.paths){if(k.length<2)continue;const U=k.length-1;for(let I=0;I<U;++I){const R=k[I];$[0]=R[0],$[1]=R[1],$[2]=n?R[2]:0;const A=k[I+1];y[0]=A[0],y[1]=A[1],y[2]=n?A[2]:0;const z=f($,y,i);if(z==null)return null;r+=z.value}}return F(r,c)}function zn(e,t){const{spatialReference:n}=e;return Xt(n,t.spatialReference)?($[0]=e.x,$[1]=e.y,$[2]=e.hasZ?e.z:0,y[0]=t.x,y[1]=t.y,y[2]=t.hasZ?t.z:0,Vt($,y,n)):null}function ui(e,t){const{spatialReference:n}=e;return Xt(n,t.spatialReference)?($[0]=e.x,$[1]=e.y,$[2]=e.hasZ?e.z:0,y[0]=t.x,y[1]=t.y,y[2]=t.hasZ?t.z:0,Sn($,y,n)):null}function di(e){return e!=null?On(e.hasZ?e.z:0,e.spatialReference):null}function On(e,t){const n=ye(t);return n!=null?F(e??0,n):null}function Ln(e,t,n){const i=Rt(e,t,n,x.Direct);return i!=null?F(i.direct,i.unit):null}function Vt(e,t,n){const i=Rt(e,t,n,x.Horizontal);return i!=null?F(i.horizontal,i.unit):null}function Sn(e,t,n){const i=Rt(e,t,n,x.Vertical);return i!=null?F(i.verticalSigned,i.unit):null}function Rt(e,t,n,i){const o=ie(n),r=qt(o);if(r==null)return null;const c=t[2]-e[2];if(i===x.Vertical)return{verticalSigned:c,unit:r};if(!Q(e,n,it,o)||!Q(t,n,Z,o))return null;if(i===x.Direct)return{direct:tt(Z,it),unit:r};if(ge(Y,e[0],e[1],t[2]),!Q(Y,n,Y,o))return null;const f=tt(Y,Z);return i===x.Horizontal?{horizontal:f,unit:r}:{direct:tt(Z,it),horizontal:f,vertical:Math.abs(c),unit:r}}(function(e){e[e.Direct=0]="Direct",e[e.Horizontal=1]="Horizontal",e[e.Vertical=2]="Vertical"})(x||(x={}));const $=D(),y=D(),it=D(),Z=D(),Y=D();function pi(e){return we(e)??Vn(e)}function fi(e,t){return be(e,t)??zn(e,t)}function hi(e,t,n){return O[0]=e[0],O[1]=e[1],O[2]=e.length===3?e[2]:0,L[0]=t[0],L[1]=t[1],L[2]=t.length===3?t[2]:0,xe(O,L,n)??Vt(O,L,n)}const O=D(),L=D(),m="esri-tooltip",Fn=`${m}-content`,Pn=`${m}-content--input`,Hn=`${m}-content__header`,Un=`${m}-content__header__spacer`,Pt=`${m}-content__header__actions`,oe=`${m}-draw-header-actions`,Zn=`${m}-table`,Yn=`${m}-help-message`,Bn=`${m}-help-message__text`,Nn=`${m}-help-message__icon`,B=`${m}-field`,N={base:B,inputMode:`${B}--input`,title:`${B}__title`,value:`${B}__value`};let d=class extends P{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return s("div",{class:this.classes({[N.base]:!0,[N.inputMode]:this.mode==="input"})},s("div",{class:N.title},this.title),s("div",{class:N.value},this.value))}};l([a()],d.prototype,"hidden",void 0),l([a()],d.prototype,"mode",void 0),l([a()],d.prototype,"title",void 0),l([a()],d.prototype,"value",void 0),d=l([p("esri.views.interactive.tooltip.components.TooltipField")],d);const Xn={base:`${m}-value-by-value`};let C=class extends P{constructor(){super(...arguments),this.divider="×"}render(){return s("div",{class:Xn.base},s("span",null,this.left),s("span",null,this.divider),s("span",null,this.right))}};l([a()],C.prototype,"left",void 0),l([a()],C.prototype,"divider",void 0),l([a()],C.prototype,"right",void 0),C=l([p("esri.views.interactive.tooltip.components.ValueByValue")],C);function Ht(e){var o,r;const t="metric";if(e==null)return t;const n=e.map,i=(n&&"portalItem"in n?(o=n.portalItem)==null?void 0:o.portal:null)??ke.getDefault();switch(((r=i.user)==null?void 0:r.units)??i.units){case t:return t;case"english":return"imperial"}return Ce(e.spatialReference)??t}let u=class extends P{constructor(){super(...arguments),this._focusAbortController=new AbortController,this._transition=null,this._mode="feedback",this._getFormatters=Te(bn),this._onDiscard=()=>{this.info.clearInputValues(),this.exitInputMode()},this._onCommit=(e,t)=>{if(t==="commit-and-exit")return void this.exitInputMode();if(t==="commit-on-blur")return;const n=this._getFocusableElements(),i=n.length,o=n.indexOf(e);if(o===-1)return void this.exitInputMode();const r=((o+(t==="commit-and-next"?1:-1))%i+i)%i;X(n.at(r))},this._handleTab=e=>{if(e.code!==q.next)return;const t=this._getFocusableElements(),n=t.at(0),i=t.at(-1);n&&i&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),X(i)):document.activeElement===i&&(e.preventDefault(),X(n)))}}get mode(){return this._mode}get _displayUnits(){const e=Ht(this.tooltip.view);return{length:e,verticalLength:e,area:e,angle:"degrees"}}get _inputUnitInfos(){const e=this._messagesUnits,t=f=>({unit:f,abbreviation:en(e,f,"abbr")}),n=Ht(this.tooltip.view),i=t(Ve(n)),o=t(Re(n)),r=t(ze(n)),c=t("degrees");return{length:i,lengthRelative:i,verticalLength:o,verticalLengthRelative:o,area:r,direction:c,orientation:c,rotation:c,longitudeLatitude:c}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const{visibleElements:e}=this.info.sketchOptions.tooltips,t=this._renderedContent,n=this._renderedActions,i=this._renderedHelpMessage,o=t.length>0,r=o||!!i,c=this.mode==="input";return s("div",{class:Ee(Fn,c&&Pn),onkeydown:this._handleTab},c&&r&&e.header?s("div",{class:Hn,key:"header"},s("calcite-button",{appearance:"transparent","data-testid":"tooltip-back-button",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),n.length>0?s(h,null,s("div",{class:Un,key:"spacer"}),s("div",{class:Pt,key:"actions"},n)):null):null,o?s("div",{class:Zn,key:"content"},...t):null,i)}_renderActions(){return null}loadDependencies(){return Et({button:()=>w(()=>import("./calcite-button-BQ85dayr.js"),__vite__mapDeps([0,1,2]),import.meta.url),icon:()=>w(()=>import("./calcite-icon-BSz57Dah.js"),__vite__mapDeps([3,1,2]),import.meta.url),input:()=>w(()=>import("./calcite-input-Cv8wWHZn.js"),__vite__mapDeps([4,1,2]),import.meta.url)})}async enterInputMode(e){try{await this._transitionTo("input"),await this._focusField(e)}catch(t){Ot(t)}}async exitInputMode({focusOnView:e=!0}={}){var t;try{const{container:n,info:i}=this;i.clearInputValues();const o=e?(t=n==null?void 0:n.closest(".esri-view"))==null?void 0:t.querySelector(".esri-view-surface"):null;await this._transitionTo("feedback"),o instanceof HTMLElement&&o.focus()}catch(n){Ot(n)}}get _renderedContent(){return Ut(this._renderContent())}get _renderedActions(){return Ut(this._renderActions())}get _renderedHelpMessage(){const{sketchOptions:e,visibleElements:t}=this.info;if(!t.helpMessage)return null;const n=e.tooltips.helpMessage??this._defaultHelpMessage;if(!n)return null;const i=e.tooltips.helpMessageIcon??"information";return s("div",{class:Yn,key:"help-message"},i?s("calcite-icon",{class:Nn,icon:i,scale:"s"}):null,s("div",{class:Bn},n))}get _defaultHelpMessage(){var i,o,r;const{helpMessage:e,viewType:t}=this.info;if(e==null)return null;const n=t==="3d"?"helpMessages3d":"helpMessages2d";return(r=(o=(i=this._messagesTooltip)==null?void 0:i.sketch)==null?void 0:o[n])==null?void 0:r[e]}async _focusField(e){var o;(o=this._focusAbortController)==null||o.abort(),this._focusAbortController=new AbortController;const{signal:t}=this._focusAbortController;await this._waitForInputs(),Me(t);const n=this._getFocusableInputs(),i=e?n.find(r=>r.getAttribute("data-field-name")===e):n.at(0);await X(i)}async _transitionTo(e){var i,o;if(this._mode===e)return;const t=()=>{this._mode=e};if(!((i=this.domNode)!=null&&i.firstChild)||!document.startViewTransition||De())return void t();this.autoRenderingEnabled=!1,(o=this._transition)==null||o.skipTransition();const n=this._transition=document.startViewTransition(()=>{if(!this.destroyed)return this.autoRenderingEnabled=!0,t(),this.renderNow(),Ie()});try{await this._transition.finished}finally{n===this._transition&&(this._transition=null)}}async _waitForInputs(){const e=()=>{var t;return Array.from(((t=this.domNode)==null?void 0:t.querySelectorAll("calcite-input"))??[])};for(;e().length===0;)await Ae(qn);await Gt()}_getFocusableInputs(){var e;return Array.from(((e=this.domNode)==null?void 0:e.querySelectorAll("calcite-input:not([read-only]):not([disabled])"))??[])}_getFocusableElements(){var t;const e=(t=this.domNode)==null?void 0:t.querySelector(`.${oe}`);return[...Array.from((e==null?void 0:e.querySelectorAll(`.${Pt} calcite-button:not([disabled])`))??[]),...this._getFocusableInputs()]}};async function X(e){await(e==null?void 0:e.setFocus())}function Ut(e){return(Array.isArray(e)?e:[e]).flat(10).filter(t=>!!t)}l([lt("esri/core/t9n/Units"),a()],u.prototype,"_messagesUnits",void 0),l([lt("esri/views/interactive/tooltip/t9n/Tooltip"),a()],u.prototype,"_messagesTooltip",void 0),l([a()],u.prototype,"info",void 0),l([a()],u.prototype,"tooltip",void 0),l([a()],u.prototype,"_mode",void 0),l([a()],u.prototype,"mode",null),l([a()],u.prototype,"_displayUnits",null),l([a()],u.prototype,"_inputUnitInfos",null),l([a()],u.prototype,"_formatters",null),l([a()],u.prototype,"fieldContext",null),l([a()],u.prototype,"_renderedContent",null),l([a()],u.prototype,"_renderedActions",null),l([a()],u.prototype,"_renderedHelpMessage",null),l([a()],u.prototype,"_defaultHelpMessage",null),u=l([p("esri.views.interactive.tooltip.content.TooltipContent")],u);const qn=20;let rt=class extends u{_renderContent(){const{area:t,radius:n,xSize:i,ySize:o,visibleElements:r}=this.info,c=this._messagesTooltip.sketch,f=this._formatters;return s(h,null,r.radius&&n!=null?s(d,{title:c.radius,value:f.length(n)}):null,r.size&&i!=null&&o!=null?s(d,{title:c.size,value:s(C,{left:f.length(i),right:f.length(o)})}):null,r.area?s(d,{title:c.area,value:f.area(t)}):null)}};rt=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],rt);const _=`${m}-editable-field`,v={base:_,inputMode:`${_}--input`,feedbackMode:`${_}--feedback`,readOnly:`${_}--read-only`,locked:`${_}--locked`,title:`${_}__title`,value:`${_}__value`,valueContent:`${_}__value__content`,valueContentReadOnly:`${_}__value__content--read-only`,lockIcon:`${_}__lock-icon`,input:`${_}__input`,inputSuffix:`${_}__input-suffix`,button:`${_}__button`},ot={lock:"lock",unlock:"unlock"};let g=class extends P{constructor(){super(...arguments),this._input=null,this._onKeyDown=t=>{t.key===q.discard&&this.mode==="input"&&this._input&&this.context.onDiscard(this._input)},this._onInputKeyDown=t=>{const n=this._input;if(n)switch(t.key){case q.commit:return this.field.onCommit("commit-and-exit",n,this.context);case q.next:{t.preventDefault(),t.stopPropagation();const i=t.shiftKey?"commit-and-previous":"commit-and-next";return this.field.onCommit(i,n,this.context)}}},this._onInput=t=>{this.field.onInput(t.target.value)},this._onInputBlur=()=>{const t=this._input;t&&this.field.onCommit("commit-on-blur",t,this.context)},this._selectText=()=>{const t=()=>{var n;this._input===document.activeElement&&((n=this._input)==null||n.selectText())};t(),Gt().then(t)}}initialize(){this.addHandles(G(()=>this._rawDisplayValue,()=>{const{committed:t,inputValue:n}=this.field;t||n||this._input!==document.activeElement||this._selectText()}))}loadDependencies(){return Et({button:()=>w(()=>import("./calcite-button-BQ85dayr.js"),__vite__mapDeps([0,1,2]),import.meta.url),icon:()=>w(()=>import("./calcite-icon-BSz57Dah.js"),__vite__mapDeps([3,1,2]),import.meta.url),input:()=>w(()=>import("./calcite-input-Cv8wWHZn.js"),__vite__mapDeps([4,1,2]),import.meta.url)})}render(){const{field:t,mode:n}=this,i=n==="input",{locked:o,readOnly:r}=t;return s("div",{class:this.classes({[v.base]:!0,[v.feedbackMode]:n==="feedback",[v.inputMode]:n==="input",[v.locked]:o,[v.readOnly]:r})},s("div",{class:v.title,key:"title"},this._title),s("div",{class:v.value,key:"value",onkeydown:this._onKeyDown},i?this._renderValueInputMode():this._renderValueFeedbackMode()))}get _formattedValue(){return this.field.getFormattedValue(this.context)||Zt}get _rawDisplayValue(){return this.field.getRawDisplayValue(this.context)}get _suffix(){return this.field.getSuffix(this.context)}get _title(){const{title:t}=this.field;return typeof t=="string"?t:t(this.context)}_renderValueFeedbackMode(){return s(h,null,s("div",{class:v.valueContent,key:"value-feedback"},this._formattedValue),this.field.locked&&this.mode!=="input"?s("calcite-icon",{class:v.lockIcon,icon:ot.lock,key:"icon",scale:"s"}):null)}_renderValueInputMode(){return this.field.readOnly?this._renderValueReadOnly():this._renderValueWritable()}_renderValueReadOnly(){return s("div",{class:this.classes(v.valueContent,v.valueContentReadOnly),key:"value-read-only"},this._formattedValue)}_renderValueWritable(){var f;const{field:t}=this,{name:n,invalid:i,locked:o}=t,r=((f=this.context)==null?void 0:f.messages.sketch)??{},c=o?r.unlockConstraint:r.lockConstraint;return s(h,null,s("calcite-input",{afterCreate:k=>{this._input=k},class:v.input,"data-field-name":n,"data-testid":`tooltip-field-${n}`,onblur:this._onInputBlur,onfocus:this._selectText,onkeydown:this._onInputKeyDown,scale:"s",status:i?"invalid":"idle",type:"text",value:this._rawDisplayValue??Zt,onCalciteInputInput:this._onInput}),s("div",{class:v.inputSuffix,key:"suffix"},this._suffix),t.lockable?s("calcite-button",{alignment:"center",appearance:"transparent",class:v.button,"data-testid":`tooltip-field-${n}-lock`,iconStart:o?ot.lock:ot.unlock,key:"lock",kind:"neutral",label:c,onclick:()=>{t.toggleLock(this.context)},scale:"s",tabIndex:-1,title:c}):s("div",{key:"lock-empty"}))}};l([a()],g.prototype,"field",void 0),l([a()],g.prototype,"context",void 0),l([a()],g.prototype,"mode",void 0),l([a()],g.prototype,"_input",void 0),l([a()],g.prototype,"_formattedValue",null),l([a()],g.prototype,"_rawDisplayValue",null),l([a()],g.prototype,"_suffix",null),l([a()],g.prototype,"_title",null),g=l([p("esri.views.interactive.tooltip.components.TooltipEditableField")],g);const Zt="—";function E(e){const t=e.fields.filter(n=>(n==null?void 0:n.visible)===!0);return t.length===0?null:s(h,null,t.map(n=>s(g,{context:e.context,field:n,key:n.id,mode:e.mode})))}let at=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(E,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0,o.orientation?n.orientation:void 0,o.scale?n.scale:void 0],mode:i})}};at=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],at);let ct=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{elevation:o,visibleElements:r}=n;return s(E,{context:t,fields:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0,r.elevation?o:void 0],mode:i})}};ct=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],ct);let M=class extends P{constructor(e){super(e),this.visibleElements={}}render(){return s("div",{class:oe},this._isElementVisible("direction")?s(Gn,{messages:this.messages,sketchOptions:this.sketchOptions}):null)}loadDependencies(){return Et({button:()=>w(()=>import("./calcite-button-BQ85dayr.js"),__vite__mapDeps([0,1,2]),import.meta.url),dropdown:()=>w(()=>import("./calcite-dropdown-Db9svtFd.js"),__vite__mapDeps([5,1,2]),import.meta.url),"dropdown-item":()=>w(()=>import("./index-Cek7aMWl.js").then(e=>e.rZ),__vite__mapDeps([1,2]),import.meta.url),"dropdown-group":()=>w(()=>import("./index-Cek7aMWl.js").then(e=>e.rY),__vite__mapDeps([1,2]),import.meta.url)})}_isElementVisible(e){var t;return((t=this.visibleElements)==null?void 0:t[e])??this.sketchOptions.tooltips.visibleElements[e]}};function Gn(e){var c,f,k,U;const{directionMode:t}=e.sketchOptions.values,n=(c=e.messages)==null?void 0:c.sketch,i=(f=n==null?void 0:n.directionModeSelect)==null?void 0:f.title,o="absolute",r="relative";return s("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:I=>{var A,z;const R=(z=(A=I.target.selectedItems)==null?void 0:A[0])==null?void 0:z.getAttribute("data-mode");e.sketchOptions.values.directionMode=R??"absolute"}},s("calcite-button",{alignment:"end",appearance:"transparent",iconStart:et[t],kind:"neutral",label:i,scale:"s",slot:"trigger",title:i}),s("calcite-dropdown-group",{selectionMode:"single"},s("calcite-dropdown-item",{"data-mode":r,"data-testid":"tooltip-direction-mode-relative",iconStart:et.relative,key:"relative",selected:t===r},(k=n==null?void 0:n.directionModeSelect)==null?void 0:k.relative),s("calcite-dropdown-item",{"data-mode":o,"data-testid":"tooltip-direction-mode-absolute",iconStart:et.absolute,key:"absolute",selected:t===o},(U=n==null?void 0:n.directionModeSelect)==null?void 0:U.absolute)))}l([lt("esri/views/interactive/tooltip/t9n/Tooltip"),a()],M.prototype,"messages",void 0),l([a()],M.prototype,"sketchOptions",void 0),l([a()],M.prototype,"visibleElements",void 0),M=l([p("esri.views.interactive.tooltip.components.DrawHeaderActions")],M);let ut=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{xyMode:o,visibleElements:r}=n;return s(E,{context:t,fields:[...o==="direction-distance"?[r.direction?n.direction:void 0,r.distance?n.distance:void 0]:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0],r.elevation?n.elevation:void 0,r.area?n.area:void 0],mode:i})}_renderActions(){const{xyMode:t,sketchOptions:n}=this.info;return s(M,{sketchOptions:n,visibleElements:{direction:t==="direction-distance"}})}};ut=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],ut);let dt=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{xyMode:o,visibleElements:r}=n;return s(E,{context:t,fields:[...o==="direction-distance"?[r.direction?n.direction:void 0,r.distance?n.distance:void 0]:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0],r.elevation?n.elevation:void 0,r.totalLength?n.totalLength:void 0],mode:i})}_renderActions(){const{xyMode:t,sketchOptions:n}=this.info;return s(M,{sketchOptions:n,visibleElements:{direction:t==="direction-distance"}})}};dt=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],dt);let pt=class extends u{_renderContent(){const{area:t,xSize:n,ySize:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,c=this._formatters;return s(h,null,o.size&&n!=null&&i!=null?s(d,{title:r.size,value:s(C,{left:c.length(n),right:c.length(i)})}):null,o.area?s(d,{title:r.area,value:c.area(t)}):null)}};pt=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],pt);let ft=class extends u{_renderContent(){const{angle:t,visibleElements:n}=this.info,i=this._messagesTooltip.sketch;return s(h,null,n.rotation?s(d,{title:i.rotation,value:this._formatters.angleRelative(t)}):null)}};ft=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],ft);let ht=class extends u{_renderContent(){const t=this.info,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.size?s(d,{title:i.size,value:s(C,{left:o.length(t.xSize),right:o.length(t.ySize)})}):null,n.scale?s(d,{title:i.scale,value:s(C,{left:o.scale(t.xScale),right:o.scale(t.yScale)})}):null)}};ht=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],ht);let vt=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(E,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0],mode:i})}};vt=l([p("esri.views.interactive.tooltip.content.TooltipContentMovePoint")],vt);let mt=class extends u{_renderContent(){const{area:t,distance:n,totalLength:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,c=this._formatters;return s(h,null,o.distance?s(d,{title:r.distance,value:c.lengthRelative(n)}):null,o.area&&t!=null?s(d,{title:r.area,value:c.area(t)}):null,o.totalLength&&i!=null?s(d,{title:r.totalLength,value:c.length(i)}):null)}};mt=l([p("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],mt);let _t=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(E,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0,o.area&&n.geometryType==="polygon"?n.area:null,o.totalLength&&n.geometryType==="polyline"?n.totalLength:null],mode:i})}};_t=l([p("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")],_t);let $t=class extends u{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.orientation&&t.orientation!=null?s(d,{key:"orientation",title:i.orientation,value:H(t.orientation,t.rotationType,t.orientationPrecision)}):null,n.size&&t.size!=null?s(d,{key:"size",title:i.size,value:o.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};$t=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],$t);let yt=class extends u{_renderContent(){const{fieldContext:e,info:t,mode:n}=this,{visibleElements:i}=t;return s(E,{context:e,fields:[i.coordinates?t.effectiveX:void 0,i.coordinates?t.effectiveY:void 0,i.elevation?t.elevation:void 0,i.orientation?t.orientation:void 0,i.scale?t.scale:void 0],mode:n})}};yt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")],yt);let gt=class extends u{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(E,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0],mode:i})}};gt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")],gt);let bt=class extends u{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch;return s(h,null,n.rotation&&t.rotation!=null?s(d,{key:"rotation",title:i.rotation,value:mn(t.rotation,t.rotationType,t.rotationPrecision)}):null,n.orientation&&t.orientation!=null?s(d,{key:"orientation",title:i.orientation,value:H(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};bt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],bt);let wt=class extends u{_renderContent(){const{info:e}=this,{visibleElements:t}=e,n=this._messagesTooltip.sketch,i=this._formatters;return s(h,null,t.scale&&e.scale!=null?s(d,{key:"scale",title:n.scale,value:i.percentage(e.scale)}):null,t.size&&e.size!=null?s(d,{key:"size",title:n.size,value:i.length(e.size,e.sizeUnit,e.sizePrecision)}):null)}};wt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],wt);let xt=class extends u{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.distance?s(d,{title:i.distance,value:o.length(t.distance)}):null)}};xt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslate")],xt);let kt=class extends u{_renderContent(){const{distance:e,elevation:t,area:n,totalLength:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,c=this._formatters;return s(h,null,o.distance?s(d,{title:r.distance,value:c.length(e)}):null,o.elevation&&(t==null?void 0:t.actual)!=null?s(d,{title:r.elevation,value:c.verticalLength(t.actual)}):null,o.area&&n!=null?s(d,{title:r.area,value:c.area(n)}):null,o.totalLength&&i!=null?s(d,{title:r.totalLength,value:c.length(i)}):null)}};kt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],kt);let Ct=class extends u{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.distance?s(d,{title:i.distance,value:o.length(t.distance)}):null)}};Ct=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")],Ct);let Tt=class extends u{_renderContent(){const{info:e}=this,{visibleElements:t}=e,n=this._messagesTooltip.sketch;return s(h,null,t.distance?s(d,{title:n.distance,value:this._formatters.verticalLengthRelative(e.distance)}):null)}};Tt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")],Tt);function Kn(e,t){if(t==null)return null;const n=document.createElement("div");switch(t.type){case"draw-point":return new ct({tooltip:e,info:t,container:n});case"draw-polygon":return new ut({tooltip:e,info:t,container:n});case"draw-polyline":return new dt({tooltip:e,info:t,container:n});case"draw-mesh":return new at({tooltip:e,info:t,container:n});case"draw-rectangle":return new pt({tooltip:e,info:t,container:n});case"draw-circle":return new rt({tooltip:e,info:t,container:n});case"extent-rotate":return new ft({tooltip:e,info:t,container:n});case"extent-scale":return new ht({tooltip:e,info:t,container:n});case"move-point":return new vt({tooltip:e,info:t,container:n});case"selected-vertex":return new _t({tooltip:e,info:t,container:n});case"transform-absolute":return new $t({tooltip:e,info:t,container:n});case"transform-point":return new gt({tooltip:e,info:t,container:n});case"transform-mesh":return new yt({tooltip:e,info:t,container:n});case"transform-rotate":return new bt({tooltip:e,info:t,container:n});case"transform-scale":return new wt({tooltip:e,info:t,container:n});case"translate":return new xt({tooltip:e,info:t,container:n});case"translate-vertex":return new kt({tooltip:e,info:t,container:n});case"translate-z":return new Tt({tooltip:e,info:t,container:n});case"translate-xy":return new Ct({tooltip:e,info:t,container:n});case"reshape-edge-offset":return new mt({tooltip:e,info:t,container:n})}}const jn={base:`${m}`};let b=class extends Oe.EventedAccessor{constructor(e){super(e),this.info=null,this.position=null,this.content=null,this.contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(jn.base),Le(t),t})()}initialize(){const{contentContainer:e}=this;this.addHandles([G(()=>{var t;return(t=this.view.overlay)==null?void 0:t.surface},t=>{e.remove(),t==null||t.appendChild(e)},nt),G(()=>this.info,(t,n)=>{if(this.content!=null&&t!=null&&n!=null&&t.type===n.type)this.content.info=t;else{this.content=Lt(this.content);const i=Kn(this,t);i&&(this.content=i,i.container&&e.appendChild(i.container),this.exitInputMode())}},nt),G(()=>({container:this.contentContainer,content:this.content,screenPoint:this._screenPoint,positionMode:this.positionMode,position:this.position}),Wn,nt),Se(this.contentContainer,"paste",t=>{this.emit("paste",t)})])}destroy(){this.info=null,this.content=Lt(this.content),this.contentContainer.remove()}get positionMode(){var e;return((e=this.content)==null?void 0:e.mode)==="input"?"fixed":"follow-cursor"}get mode(){var e;return((e=this.content)==null?void 0:e.mode)??"feedback"}get _screenPoint(){const{inputManager:e}=this.view;return e!=null&&e.multiTouchActive?null:e==null?void 0:e.latestPointerLocation}get visible(){var e;return((e=this.contentContainer)==null?void 0:e.style.display)!=="none"}clear(){this.info=null}async enterInputMode(e){var t;await((t=this.content)==null?void 0:t.enterInputMode(e))}async exitInputMode(e){var t;await((t=this.content)==null?void 0:t.exitInputMode(e))}};function Wn(e){if(e.positionMode==="fixed"&&!e.position)return;const{style:t}=e.container,n=e.position??e.screenPoint;if(n!=null&&e.content!=null){t.display="block";const i=Fe(e.container),o=`translate(${Math.round(n.x)+Yt[0]*(i?-1:1)}px, ${Math.round(n.y)+Yt[1]}px)`;t.transform=i?`translate(-100%, 0) ${o}`:o}else t.display="none"}l([a({nonNullable:!0})],b.prototype,"view",void 0),l([a()],b.prototype,"info",void 0),l([a()],b.prototype,"positionMode",null),l([a()],b.prototype,"position",void 0),l([a()],b.prototype,"content",void 0),l([a()],b.prototype,"mode",null),l([a()],b.prototype,"contentContainer",void 0),l([a()],b.prototype,"_screenPoint",null),b=l([p("esri.views.interactive.tooltip.Tooltip")],b);const Yt=[20,20];export{ii as A,oi as B,li as G,ri as H,ai as J,K,ni as L,si as M,di as R,H as U,Mt as _,pi as c,Ht as e,Sn as g,b as h,ie as l,fi as m,T as r,hi as u,On as v,ei as w,St as x,ui as y};
