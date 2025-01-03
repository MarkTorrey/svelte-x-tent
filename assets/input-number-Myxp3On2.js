import{p as z,H as N,h as g,i as V,gW as E,gX as r,gY as m,gZ as S,g_ as y,g$ as H,h0 as C,h1 as D,gE as x,e$ as B,f1 as O,f2 as L,h2 as F,h3 as A,h4 as k,m as M,h5 as P,h6 as T,f3 as W,f4 as j,s as U,f6 as K,f7 as $,v as G,h7 as R,h8 as q,f8 as _,q as Y,r as n,gG as v,fa as Z,h9 as X,fb as J,t as Q,ha as ee,ff as te,u as ie,hb as ne,fg as ae,c as oe,hc as se}from"./index-BdDnxAOC.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"},I={validationMessage:"inputNumberValidationMessage"},re={action:"action"},le=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,ce=le,ue=z(class extends N{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputNumberFocus=g(this,"calciteInternalInputNumberFocus",6),this.calciteInternalInputNumberBlur=g(this,"calciteInternalInputNumberBlur",6),this.calciteInputNumberInput=g(this,"calciteInputNumberInput",7),this.calciteInputNumberChange=g(this,"calciteInputNumberChange",6),this.previousValueOrigin="initial",this.mutationObserver=V("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputValue(e),e.preventDefault()),e.key==="Enter"&&E(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setNumberValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedNumberValue&&(this.calciteInputNumberChange.emit(),this.setPreviousEmittedNumberValue(this.value))},this.inputNumberBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputNumberBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=e.composedPath();!t.includes(this.inputWrapperEl)||t.includes(this.actionWrapperEl)||this.setFocus()},this.inputNumberFocusHandler=()=>{this.calciteInternalInputNumberFocus.emit()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly||this.value==="Infinity"||this.value==="-Infinity")return;const t=e.target.value;r.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=r.delocalize(t);e.inputType==="insertFromPaste"?((!m(i)||this.integer&&(i.includes("e")||i.includes(".")))&&e.preventDefault(),this.setNumberValue({nativeEvent:e,origin:"user",value:S(i)}),this.childNumberEl.value=this.displayedValue):this.setNumberValue({nativeEvent:e,origin:"user",value:i})},this.inputNumberKeyDownHandler=e=>{if(this.disabled||this.readOnly)return;if(this.value==="Infinity"||this.value==="-Infinity"){e.preventDefault(),(e.key==="Backspace"||e.key==="Delete")&&this.clearInputValue(e);return}if(e.key==="ArrowUp"){e.preventDefault(),this.nudgeNumberValue("up",e);return}if(e.key==="ArrowDown"){this.nudgeNumberValue("down",e);return}const t=[...se,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&e.key==="Tab";if(t.includes(e.key)||i){e.key==="Enter"&&this.emitChangeIfUserModified();return}r.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(e.key===r.decimal&&!this.integer&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(r.decimal)===-1))&&(/[eE]/.test(e.key)&&!this.integer&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||e.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||e.preventDefault())},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat)return;const i=this.maxString?parseFloat(this.maxString):null,d=this.minString?parseFloat(this.minString):null,a=150;this.incrementOrDecrementNumberValue(e,i,d,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let l=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(l){l=!1;return}this.incrementOrDecrementNumberValue(e,i,d,t)},a)},this.nudgeButtonPointerUpHandler=e=>{y(e)&&window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerDownHandler=e=>{if(!y(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setNumberValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputNumberValue=e=>{this.childNumberEl&&(this.childNumberEl.value=e)},this.setPreviousEmittedNumberValue=e=>{this.previousEmittedNumberValue=this.normalizeValue(e)},this.setPreviousNumberValue=e=>{this.previousValue=this.normalizeValue(e)},this.setNumberValue=({committing:e=!1,nativeEvent:t,origin:i,previousValue:d,value:a})=>{var h,f;r.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const l=((h=this.previousValue)==null?void 0:h.length)>a.length||((f=this.value)==null?void 0:f.length)>a.length,c=this.integer?a.replace(/[e.]/g,""):a,b=c.charAt(c.length-1)===".",p=b&&l?c:H(c),s=a&&!p?m(this.previousValue)?this.previousValue:"":p;let u=r.localize(s);i!=="connected"&&!b&&(u=C(u,s,r)),this.displayedValue=b&&l?`${u}${r.decimal}`:u,this.setPreviousNumberValue(d??this.value),this.previousValueOrigin=i,this.userChangedValue=i==="user"&&this.value!==s,this.value=["-","."].includes(s)?"":s,i==="direct"&&(this.setInputNumberValue(u),this.setPreviousEmittedNumberValue(u)),t&&(this.calciteInputNumberInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue=r.localize(this.previousValue)):e&&this.emitChangeIfUserModified())},this.inputNumberKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.groupSeparator=!1,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.integer=!1,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.displayedValue=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){D(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var e;this.maxString=((e=this.max)==null?void 0:e.toString())||null}minWatcher(){var e;this.minString=((e=this.min)==null?void 0:e.toString())||null}onMessagesChange(){}valueWatcher(e,t){if(!this.userChangedValue){if(e==="Infinity"||e==="-Infinity"){this.displayedValue=e,this.previousEmittedNumberValue=e;return}this.setNumberValue({origin:"direct",previousValue:t,value:e==null||e==""?"":m(e)?e:this.previousValue||""}),this.warnAboutInvalidNumberValue(e)}this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=x({},this.icon,"number")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleWatcher(e){B(this,this.effectiveLocale),r.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:!1}}connectedCallback(){var e;O(this),L(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),F(this),A(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(k,this.onHiddenFormInputInput)}componentDidLoad(){M(this)}disconnectedCallback(){var e;P(this),T(this),W(this),j(this),(e=this.mutationObserver)==null||e.disconnect(),this.el.removeEventListener(k,this.onHiddenFormInputInput)}async componentWillLoad(){var e,t;U(this),this.maxString=(e=this.max)==null?void 0:e.toString(),this.minString=(t=this.min)==null?void 0:t.toString(),this.requestedIcon=x({},this.icon,"number"),await K(this),this.setPreviousEmittedNumberValue(this.value),this.setPreviousNumberValue(this.value),this.warnAboutInvalidNumberValue(this.value),this.value==="Infinity"||this.value==="-Infinity"?(this.displayedValue=this.value,this.previousEmittedNumberValue=this.value):this.setNumberValue({origin:"connected",value:m(this.value)?this.value:""})}componentShouldUpdate(e,t,i){return i==="value"&&e&&!m(e)?(this.setNumberValue({origin:"reset",value:t}),!1):!0}componentDidRender(){$(this)}async setFocus(){var e;await G(this),(e=this.childNumberEl)==null||e.focus()}async selectText(){var e;(e=this.childNumberEl)==null||e.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,d){const{value:a}=this;if(a==="Infinity"||a==="-Infinity")return;const l=e==="up"?1:-1,c=this.integer&&this.step!=="any"?Math.round(this.step):this.step,b=c==="any"?1:Math.abs(c||1),s=new R(a!==""?a:"0").add(`${b*l}`),u=()=>typeof i=="number"&&!isNaN(i)&&s.subtract(`${i}`).isNegative,h=()=>typeof t=="number"&&!isNaN(t)&&!s.subtract(`${t}`).isNegative,f=u()?`${i}`:h()?`${t}`:s.toString();this.setNumberValue({committing:!0,nativeEvent:d,origin:"user",value:f})}syncHiddenFormInput(e){q("number",this,e)}setDisabledAction(){const e=_(this.el,"action");e&&(this.disabled?(e.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return m(e)?e:""}warnAboutInvalidNumberValue(e){e&&!m(e)&&console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`)}render(){const e=Y(this.el),t=n("div",{key:"cc2f276e80dee457d8a8f38e06d18967647e4591",class:o.loader},n("calcite-progress",{key:"2764fc118ec3063a7e76e0738050fa7b3872018a",label:this.messages.loading,type:"indeterminate"})),i=n("button",{key:"6bb6db58c8c20594f88c60f2d717ad9b4dfb9fe0","aria-label":this.messages.clear,class:o.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},n("calcite-icon",{key:"1746fe8d0a79b4516beb7574ba6b74b6a5070d81",icon:"x",scale:v(this.scale)})),d=n("calcite-icon",{key:"4d57c3fedac7bedd8f9397c4b276866ee5b7237f",class:o.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:v(this.scale)}),a=this.numberButtonType==="horizontal",l=n("button",{key:"c0e52d338c61d3d6f6349975751f6af707325db3","aria-hidden":"true",class:{[o.numberButtonItem]:!0,[o.buttonItemHorizontal]:a},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"28697a2ed4b3581c5d190c86ef3d7ab1d70823f8",icon:"chevron-up",scale:v(this.scale)})),c=n("button",{key:"11f9db5af2916069d412089875d53fdea0b453c0","aria-hidden":"true",class:{[o.numberButtonItem]:!0,[o.buttonItemHorizontal]:a},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"1614213fecd0d957cda096df5ddf220bacc49dca",icon:"chevron-down",scale:v(this.scale)})),b=n("div",{key:"e8822b7270ea89e13ebf3703b6f271be512c6a9b",class:o.numberButtonWrapper},l,c),p=n("div",{key:"333318e5c2f5fbd0d307255c7a0a4eebde29b5c8",class:o.prefix},this.prefixText),s=n("div",{key:"4812a571237e8016e9d173036e663e91ef7df638",class:o.suffix},this.suffixText),u=n("input",{"aria-errormessage":I.validationMessage,"aria-invalid":Z(this.status==="invalid"),"aria-label":X(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?!0:null,defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),inputMode:this.el.inputMode||this.el.getAttribute("inputmode")||"decimal",key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.displayedValue});return n(ie,{key:"a765b9d4616c91517c512bf08511e7dd979ba8cc",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n(J,{key:"b9ea4743c23e8dc2773cfb600b0e345797c3558d",disabled:this.disabled},n("div",{key:"17dfcce5d569e546184d908cc595914d5aefe132",class:{[o.inputWrapper]:!0,[Q.rtl]:e==="rtl"},ref:h=>this.inputWrapperEl=h},this.numberButtonType==="horizontal"&&!this.readOnly?c:null,this.prefixText?p:null,n("div",{key:"db2a55ec06a2418761f7a64c06b88680156870c3",class:o.wrapper},u,this.isClearable?i:null,this.requestedIcon?d:null,this.loading?t:null),n("div",{key:"26fa02f076266dd8e4e9441d17b708994bac580d",class:o.actionWrapper,ref:h=>this.actionWrapperEl=h},n("slot",{key:"cf216669a1ef119c5512515f014be59ee6c8121e",name:re.action})),this.numberButtonType==="vertical"&&!this.readOnly?b:null,this.suffixText?s:null,this.numberButtonType==="horizontal"&&!this.readOnly?l:null,n(ee,{key:"efc80f0a385d1d56971473fde6862738cb06b446",component:this})),this.validationMessage&&this.status==="invalid"?n(te,{icon:this.validationIcon,id:I.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return ce}},[1,"calcite-input-number",{alignment:[513],autofocus:[4],clearable:[516],disabled:[516],enterKeyHint:[1,"enter-key-hint"],form:[513],groupSeparator:[516,"group-separator"],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],inputMode:[1,"input-mode"],integer:[4],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],displayedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}]);function de(){if(typeof customElements>"u")return;["calcite-input-number","calcite-icon","calcite-input-message","calcite-progress"].forEach(e=>{switch(e){case"calcite-input-number":customElements.get(e)||customElements.define(e,ue);break;case"calcite-icon":customElements.get(e)||oe();break;case"calcite-input-message":customElements.get(e)||ae();break;case"calcite-progress":customElements.get(e)||ne();break}})}de();export{ue as I,de as d};
