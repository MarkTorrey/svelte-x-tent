import{p as m,H as k,h as s,q as g,h$ as h,v as B,i0 as v,i1 as C,i2 as x,eV as y,i3 as I,i4 as R,s as w,m as F,eY as E,i5 as z,i6 as A,f1 as L,r as a,f5 as H,f4 as O,i7 as q,i8 as D,u as G}from"./index-Cek7aMWl.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const T={container:"container"},S=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,$=S,u=m(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalRadioButtonBlur=s(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=s(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=s(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=s(this,"calciteInternalRadioButtonFocus",6),this.selectItem=(e,o)=>{e[o].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(e=>e.name===this.name),this.isFocusable=()=>{const e=this.queryButtons(),o=e.find(i=>!i.disabled),t=e.find(i=>i.checked);return o===this.el&&!t},this.check=()=>{this.disabled||(this.focused=!0,this.setFocus(),!this.checked&&(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))},this.clickHandler=()=>{this.disabled||this.check()},this.setContainerEl=e=>{this.containerEl=e},this.handleKeyDown=e=>{const o=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "],{key:t}=e,{el:i}=this;if(o.indexOf(t)===-1)return;if(t===" "){this.check(),e.preventDefault();return}let c=t;g(i)==="rtl"&&(t==="ArrowRight"&&(c="ArrowLeft"),t==="ArrowLeft"&&(c="ArrowRight"));const n=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(r=>r.name===this.name);let d=0;const l=n.length;switch(n.some((r,p)=>{if(r.checked)return d=p,!0}),c){case"ArrowLeft":case"ArrowUp":e.preventDefault(),this.selectItem(n,h(Math.max(d-1,-1),l));return;case"ArrowRight":case"ArrowDown":e.preventDefault(),this.selectItem(n,h(d+1,l));return;default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())},this.checked=!1,this.disabled=!1,this.focused=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}handleHiddenChange(){this.updateTabIndexOfOtherRadioButtonsInGroup()}checkedChanged(e){e&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await B(this),this.disabled||v(this.containerEl)}syncHiddenFormInput(e){e.type="radio"}onLabelClick(e){if(this.disabled||this.el.hidden)return;const o=e.currentTarget,t=o.for?this.rootNode.querySelector(`calcite-radio-button[id="${o.for}"]`):o.querySelector(`calcite-radio-button[name="${this.name}"]`);t&&(t.focused=!0,this.setFocus(),!t.checked&&(this.uncheckOtherRadioButtonsInGroup(),t.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const o=this.queryButtons().filter(t=>t.checked);if((o==null?void 0:o.length)>1){const t=o[o.length-1];o.filter(i=>i!==t).forEach(i=>{i.checked=!1,i.emitCheckedChange()})}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach(o=>{o.checked&&(o.checked=!1,o.focused=!1)})}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter(t=>t.guid!==this.guid).forEach(t=>{t.checked&&(t.checked=!1,t.focused=!1)})}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter(t=>t.guid!==this.guid&&!t.disabled).forEach(t=>{C(t)})}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${x()}`,this.name&&this.checkLastRadioButton(),y(this),I(this),R(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){w(this)}componentDidLoad(){F(this),this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){E(this),z(this),A(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){L(this)}render(){const e=this.getTabIndex();return a(G,{key:"642f4817a74bd441bc64c14c1b955f806f768103",onClick:this.clickHandler,onKeyDown:this.handleKeyDown},a(H,{key:"84c69c965d8dabeb0d842fcac6def8540255daf6",disabled:this.disabled},a("div",{key:"54e2ff13cb11854e594b80b5ac73230768347f85","aria-checked":O(this.checked),"aria-label":q(this),class:T.container,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:e},a("div",{key:"6379e5099d9c9c51fe3579ebe01a6473f3ea8fa1",class:"radio"})),a(D,{key:"970dccd6968339fb67fcf5691fa39756c027ca9b",component:this})))}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],checked:["checkedChanged"],disabled:["disabledChanged"],name:["nameChanged"]}}static get style(){return $}},[1,"calcite-radio-button",{checked:[1540],disabled:[516],focused:[1540],form:[513],guid:[1537],hovered:[1540],label:[1],name:[513],required:[516],scale:[513],value:[1032],setFocus:[64],emitCheckedChange:[64]},[[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"]],{hidden:["handleHiddenChange"],checked:["checkedChanged"],disabled:["disabledChanged"],name:["nameChanged"]}]);function f(){if(typeof customElements>"u")return;["calcite-radio-button"].forEach(e=>{switch(e){case"calcite-radio-button":customElements.get(e)||customElements.define(e,u);break}})}f();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const _=u,N=f;export{_ as CalciteRadioButton,N as defineCustomElement};