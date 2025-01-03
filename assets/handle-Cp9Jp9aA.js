import{c as u,p as g,H as f,h as i,eV as b,eX as p,eW as m,s as C,f0 as v,m as x,f1 as y,eY as T,e_ as H,eZ as A,eT as L,v as S,r as d,f4 as o}from"./index-Cek7aMWl.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const r={handle:"handle",handleSelected:"handle--selected"},k={drag:"drag"},s={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},w=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,D=w,I=g(class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=i(this,"calciteHandleChange",6),this.calciteHandleNudge=i(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=i(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){b(this),p(this),m(this)}async componentWillLoad(){C(this),await v(this)}componentDidLoad(){x(this)}componentDidRender(){y(this)}disconnectedCallback(){T(this),H(this),A(this)}effectiveLocaleChange(){L(this,this.effectiveLocale)}async setFocus(){var e;await S(this),(e=this.handleButton)==null||e.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(s.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:l,messages:a,selected:c}=this;return!a||!l||typeof n!="number"||typeof t!="number"?null:(e==="label"?c?a.dragHandleChange:a.dragHandleIdle:c?a.dragHandleActive:a.dragHandleCommit).replace(s.position,t.toString()).replace(s.itemLabel,l).replace(s.total,n.toString())}render(){return d("span",{key:"1b435a33669241997f126e273bd36801182a0ce5","aria-checked":this.disabled?null:o(this.selected),"aria-disabled":this.disabled?o(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[r.handle]:!0,[r.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:e=>{this.handleButton=e},role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip()},d("calcite-icon",{key:"da7f46a07a28eab86153f1a04a8f82f4d7b3a0c6",icon:k.drag,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return D}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[1040],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function E(){if(typeof customElements>"u")return;["calcite-handle","calcite-icon"].forEach(e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,I);break;case"calcite-icon":customElements.get(e)||u();break}})}E();export{E as d};