import{aO as l,aP as s,er as o,aR as t,aS as c}from"./index-eSY5-lt-.js";import{l as r,a as d}from"./label2-hpOGNwRK.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const h={container:"container"},m=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}",a=l(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=o(this,"calciteInternalLabelClick",2),this.labelClickHandler=n=>{this.calciteInternalLabelClick.emit({sourceEvent:n})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}connectedCallback(){document.dispatchEvent(new CustomEvent(r))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(d))}render(){return t(c,{onClick:this.labelClickHandler},t("div",{class:h.container},t("slot",null)))}get el(){return this}static get style(){return m}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]}]);function i(){if(typeof customElements>"u")return;["calcite-label"].forEach(e=>{switch(e){case"calcite-label":customElements.get(e)||customElements.define(e,a);break}})}i();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const p=a,g=i;export{p as CalciteLabel,g as defineCustomElement};
