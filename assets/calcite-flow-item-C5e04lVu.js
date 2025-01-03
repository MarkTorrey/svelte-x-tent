import{p as y,H as w,h as i,eV as E,eW as B,eX as I,f0 as L,s as F,f1 as S,eY as P,eZ as T,e_ as x,m as A,eT as M,v as O,q as D,r as t,f5 as $,gD as o,u as z,d as R,g as _,e as H,y as U,c as W,f6 as q,d2 as V}from"./index-Cek7aMWl.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const X={backButton:"back-button"},f={backLeft:"chevron-left",backRight:"chevron-right"},s={actionBar:"action-bar",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions",footerEnd:"footer-end",footerStart:"footer-start"},Y=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",Z=Y,h=y(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=i(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=i(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=i(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=i(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){E(this),B(this),I(this)}async componentWillLoad(){await L(this),F(this)}componentDidRender(){S(this)}disconnectedCallback(){P(this),T(this),x(this)}componentDidLoad(){A(this)}effectiveLocaleChange(){M(this,this.effectiveLocale)}async setFocus(){await O(this);const{backButtonEl:e,containerEl:a}=this;if(e)return e.setFocus();if(a)return a.setFocus()}async scrollContentTo(e){var a;await((a=this.containerEl)==null?void 0:a.scrollContentTo(e))}renderBackButton(){const{el:e}=this,a=D(e)==="rtl",{showBackButton:l,backButtonClick:d,messages:r}=this,c=r.back,n=a?f.backRight:f.backLeft;return l?t("calcite-action",{"aria-label":c,class:X.backButton,icon:n,key:"flow-back-button",onClick:d,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:c,title:c}):null}render(){const{collapsed:e,collapseDirection:a,collapsible:l,closable:d,closed:r,description:c,disabled:n,heading:u,headingLevel:p,loading:g,menuOpen:k,messages:C,overlayPositioning:v}=this;return t(z,{key:"386f2c2d780c8b3a1be28a8680b6f99c9ded37e6"},t($,{key:"6e80e71a06923e966ac75f8b8c172586444e3ccb",disabled:n},t("calcite-panel",{key:"175b4bcfdecb5b4c59d5c76db6fcae7975ee5884",closable:d,closed:r,collapseDirection:a,collapsed:e,collapsible:l,description:c,disabled:n,heading:u,headingLevel:p,loading:g,menuOpen:k,messageOverrides:C,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:v,ref:this.setContainerRef},this.renderBackButton(),t("slot",{key:"6e0ac6b3c3b62a5be7a6a21fbe55e56c1d4ad90a",name:s.actionBar,slot:o.actionBar}),t("slot",{key:"b2036686e62d9b5c8ecc39e8ee025e98798d7dec",name:s.headerActionsStart,slot:o.headerActionsStart}),t("slot",{key:"66c09bbb9cd21327a9cc04b3046c5264b475a77d",name:s.headerActionsEnd,slot:o.headerActionsEnd}),t("slot",{key:"cd02bc580db5ecdd98b0bbbfa99655871c04bda4",name:s.headerContent,slot:o.headerContent}),t("slot",{key:"b855684ce946c66b4c13756abd1865ab420715f0",name:s.headerMenuActions,slot:o.headerMenuActions}),t("slot",{key:"f1d29575abbdb582c04d674dfef7f4a9d385da10",name:s.fab,slot:o.fab}),t("slot",{key:"3033128596131e0f1fd62b28cba07957d1707d0c",name:s.contentTop,slot:o.contentTop}),t("slot",{key:"c8cf03fbacebe288afc909b9c8989242c201df8c",name:s.contentBottom,slot:o.contentBottom}),t("slot",{key:"09e19f66b3a855689539dc511b1b826830a90283",name:s.footer,slot:o.footer},t("slot",{key:"e7519384a44ee5f1f19d9747c44007ca7b95f4c8",name:s.footerStart,slot:o.footerStart}),t("slot",{key:"abd54ab99d62783f603118361bda307c3d108af0",name:s.footerEnd,slot:o.footerEnd})),t("slot",{key:"9319eff4559e39701a1f838c1add5b8f57f01f2b",name:s.footerActions,slot:o.footerActions}),t("slot",{key:"bd1cc6da3068868bfaf3ba8a0e524d0d138db940"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Z}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function b(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,h);break;case"calcite-action":customElements.get(e)||V();break;case"calcite-action-menu":customElements.get(e)||q();break;case"calcite-icon":customElements.get(e)||W();break;case"calcite-loader":customElements.get(e)||U();break;case"calcite-panel":customElements.get(e)||H();break;case"calcite-popover":customElements.get(e)||_();break;case"calcite-scrim":customElements.get(e)||R();break}})}b();const J=h,K=b;export{J as CalciteFlowItem,K as defineCustomElement};
