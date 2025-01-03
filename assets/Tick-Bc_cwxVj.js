import{gI as T}from"./index-BdDnxAOC.js";import{n as x,Y as G,aD as Y,P as y,R as X,aE as q,r as P,aF as Z,F as M,a8 as L,t as Q,aG as W,ap as E,aH as J,a5 as H}from"./Theme-DF9cfCnj.js";class ee extends q{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,i){this.processor&&this.processor.processRow(i),super._onSetIndex(e,t,i)}}class V extends Y{constructor(e,t,i){super(i),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class j extends x{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new ee}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll(e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,e.type==="clear")y(t,i=>{i.dispose()}),t.length=0,this._onDataClear();else if(e.type==="push"){const i=new V(this,e.newValue,this._makeDataItem(e.newValue));t.push(i),this.processDataItem(i)}else if(e.type==="setIndex"){const i=t[e.index],s=this._makeDataItem(e.newValue);i.bullets&&i.bullets.length==0&&(i.bullets=void 0),X(s).forEach(l=>{i.animate({key:l,to:s[l],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})}),i.dataContext=e.newValue}else if(e.type==="insertIndex"){const i=new V(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,i),this.processDataItem(i)}else if(e.type==="removeIndex")t[e.index].dispose(),t.splice(e.index,1);else{if(e.type!=="moveIndex")throw new Error("Unknown IStreamEvent type");{const i=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,i)}}this._afterDataChange()}))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},y(this.valueFields,e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})})),this.fields&&(this._fields=[],this._fieldsF={},y(this.fields,e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")}))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&y(this._valueFields,i=>{const s=this.get(this._valueFieldsF[i].fieldKey);t[i]=e[s],t[this._valueFieldsF[i].workingKey]=t[i]}),this._fields&&y(this._fields,i=>{const s=this.get(this._fieldsF[i]);t[i]=e[s]}),t}makeDataItem(e,t){let i=new V(this,t,e);return this.processDataItem(i),i}pushDataItem(e,t){const i=this.makeDataItem(e,t);return this._mainDataItems.push(i),i}disposeDataItem(e){}showDataItem(e,t){return T(this,void 0,void 0,function*(){e.set("visible",!0)})}hideDataItem(e,t){return T(this,void 0,void 0,function*(){e.set("visible",!1)})}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}function te(r){return new Promise((e,t)=>{setTimeout(e,r)})}Object.defineProperty(j,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(j,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:x.classNames.concat([j.className])});function oe(r,e,t,i,s,l,n){if(!n||s){let o=0;switch(s||e=="millisecond"||(o=r.getTimezoneOffset(),r.setUTCMinutes(r.getUTCMinutes()-o)),e){case"day":let d=r.getUTCDate();t>1||r.setUTCDate(d),r.setUTCHours(0,0,0,0);break;case"second":let h=r.getUTCSeconds();t>1&&(h=Math.floor(h/t)*t),r.setUTCSeconds(h,0);break;case"millisecond":if(t==1)return r;let m=r.getUTCMilliseconds();m=Math.floor(m/t)*t,r.setUTCMilliseconds(m);break;case"hour":let f=r.getUTCHours();t>1&&(f=Math.floor(f/t)*t),r.setUTCHours(f,0,0,0);break;case"minute":let u=r.getUTCMinutes();t>1&&(u=Math.floor(u/t)*t),r.setUTCMinutes(u,0,0);break;case"month":let a=r.getUTCMonth();t>1&&(a=Math.floor(a/t)*t),r.setUTCMonth(a,1),r.setUTCHours(0,0,0,0);break;case"year":let b=r.getUTCFullYear();t>1&&(b=Math.floor(b/t)*t),r.setUTCFullYear(b,0,1),r.setUTCHours(0,0,0,0);break;case"week":let v=r.getUTCDate(),g=r.getUTCDay();M(i)||(i=1),v=g>=i?v-g+i:v-(7+g)+i,r.setUTCDate(v),r.setUTCHours(0,0,0,0)}if(!s&&e!="millisecond"&&(r.setUTCMinutes(r.getUTCMinutes()+o),e=="day"||e=="week"||e=="month"||e=="year")){let d=r.getTimezoneOffset();if(d!=o){let h=d-o;r.setUTCMinutes(r.getUTCMinutes()+h)}}return r}{if(isNaN(r.getTime()))return r;let o=n.offsetUTC(r),d=r.getTimezoneOffset(),h=n.parseDate(r),m=h.year,f=h.month,u=h.day,a=h.hour,b=h.minute,v=h.second,g=h.millisecond,D=h.weekday,w=o-d;switch(e){case"day":a=0,b=w,v=0,g=0;break;case"second":b+=w,t>1&&(v=Math.floor(v/t)*t),g=0;break;case"millisecond":b+=w,t>1&&(g=Math.floor(g/t)*t);break;case"hour":t>1&&(a=Math.floor(a/t)*t),b=w,v=0,g=0;break;case"minute":t>1&&(b=Math.floor(b/t)*t),b+=w,v=0,g=0;break;case"month":t>1&&(f=Math.floor(f/t)*t),u=1,a=0,b=w,v=0,g=0;break;case"year":t>1&&(m=Math.floor(m/t)*t),f=0,u=1,a=0,b=w,v=0,g=0;break;case"week":M(i)||(i=1),u=D>=i?u-D+i:u-(7+D)+i,a=0,b=w,v=0,g=0}let C=(r=new Date(m,f,u,a,b,v,g)).getTimezoneOffset(),c=n.offsetUTC(r)-C;return c!=w&&r.setTime(r.getTime()+6e4*(c-w)),r}}class R extends j{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new q}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:x.new(this._root,{width:P,height:P,position:"absolute"})})}_afterNew(){this.valueFields.push("value","customValue"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll(e=>{if(e.type==="clear")this._handleBullets(this.dataItems);else if(e.type==="push")this._handleBullets(this.dataItems);else if(e.type==="setIndex")this._handleBullets(this.dataItems);else if(e.type==="insertIndex")this._handleBullets(this.dataItems);else if(e.type==="removeIndex")this._handleBullets(this.dataItems);else{if(e.type!=="moveIndex")throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}}))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){y(e,t=>{const i=t.bullets;i&&(y(i,s=>{s.dispose()}),t.bullets=void 0)}),this.markDirtyValues()}getDataItemById(e){return Z(this.dataItems,t=>t.get("id")==e)}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each(t=>{this._makeBullet(e,t)}))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,i){const s=t(this._root,this,e);return s&&(s._index=i,this._makeBulletReal(e,s)),s}_makeBulletReal(e,t){let i=t.get("sprite");i&&(i._setDataItem(e),i.setRaw("position","absolute"),this.bulletsContainer.children.push(i)),t.series=this,e.bullets.push(t)}addBullet(e,t){e.bullets||(e.bullets=[]),t&&this._makeBulletReal(e,t)}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("name")&&this.updateLegendValue(),this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const i=this.getPrivate("baseValueSeries");i&&this._disposers.push(i.onPrivate("startIndex",()=>{this.markDirtyValues()}))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0,e!=0&&(this._psi=void 0))),this._psi==e&&this._pei==t&&!this.isPrivateDirty("adjustedStartIndex")||this._selectionAggregatesCalculated||(e===0&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let i=this.get("tooltip");i&&(i.hide(0),i.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let i;const s=this.get("legendDataItem");if(s&&(i=s.get("markerRectangle"),i&&this.isVisible())){if(this.isDirty("stroke")){let l=this.get("stroke");i.set("stroke",l)}if(this.isDirty("fill")){let l=this.get("fill");i.set("fill",l)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let i=this.startIndex(),s=this.endIndex();s<this.dataItems.length&&s++;for(let l=i;l<s;l++){let n=this.dataItems[l];n.bullets||this._makeBullets(n)}}}_adjustStartIndex(e){return e}_calculateAggregates(e,t){let i=this._valueFields;if(!i)throw new Error("No value fields are set for the series.");const s={},l={},n={},o={},d={},h={},m={},f={},u={};y(i,a=>{s[a]=0,l[a]=0,n[a]=0}),y(i,a=>{let b=a+"Change",v=a+"ChangePercent",g=a+"ChangePrevious",D=a+"ChangePreviousPercent",w=a+"ChangeSelection",C=a+"ChangeSelectionPercent",c="valueY";a!="valueX"&&a!="openValueX"&&a!="lowValueX"&&a!="highValueX"||(c="valueX");const O=this.getPrivate("baseValueSeries"),A=this.getPrivate("adjustedStartIndex",e);for(let I=A;I<t;I++){const _=this.dataItems[I];if(_){let p=_.get(a);p!=null&&(n[a]++,s[a]+=p,l[a]+=Math.abs(p),f[a]=s[a]/n[a],(o[a]>p||o[a]==null)&&(o[a]=p),(d[a]<p||d[a]==null)&&(d[a]=p),m[a]=p,h[a]==null&&(h[a]=p,u[a]=p,O&&(h[c]=O._getBase(c))),e===0&&(_.setRaw(b,p-h[c]),_.setRaw(v,(p-h[c])/h[c]*100)),_.setRaw(g,p-u[c]),_.setRaw(D,(p-u[c])/u[c]*100),_.setRaw(w,p-h[c]),_.setRaw(C,(p-h[c])/h[c]*100),u[a]=p)}}if(t<this.dataItems.length-1){const I=this.dataItems[t];if(I){let _=I.get(a);I.setRaw(g,_-u[c]),I.setRaw(D,(_-u[c])/u[c]*100),I.setRaw(w,_-h[c]),I.setRaw(C,(_-h[c])/h[c]*100)}}e>0&&e--,delete u[a];for(let I=e;I<A;I++){const _=this.dataItems[I];if(_){let p=_.get(a);u[a]==null&&(u[a]=p),p!=null&&(_.setRaw(g,p-u[c]),_.setRaw(D,(p-u[c])/u[c]*100),_.setRaw(w,p-h[c]),_.setRaw(C,(p-h[c])/h[c]*100),u[a]=p)}}}),y(i,a=>{this.setPrivate(a+"AverageSelection",f[a]),this.setPrivate(a+"CountSelection",n[a]),this.setPrivate(a+"SumSelection",s[a]),this.setPrivate(a+"AbsoluteSumSelection",l[a]),this.setPrivate(a+"LowSelection",o[a]),this.setPrivate(a+"HighSelection",d[a]),this.setPrivate(a+"OpenSelection",h[a]),this.setPrivate(a+"CloseSelection",m[a])}),e===0&&t===this.dataItems.length&&y(i,a=>{this.setPrivate(a+"Average",f[a]),this.setPrivate(a+"Count",n[a]),this.setPrivate(a+"Sum",s[a]),this.setPrivate(a+"AbsoluteSum",l[a]),this.setPrivate(a+"Low",o[a]),this.setPrivate(a+"High",d[a]),this.setPrivate(a+"Open",h[a]),this.setPrivate(a+"Close",m[a])})}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&y(e,t=>{const i=t.minValue||this.getPrivate(t.dataField+"Low")||0,s=t.maxValue||this.getPrivate(t.dataField+"High")||0;y(t.target._entities,l=>{const n=l.dataItem.get(t.dataField);if(!M(n)){t.neutral&&l.set(t.key,t.neutral);const o=l.states;if(o){const d=o.lookup("default");d&&t.neutral&&d.set(t.key,t.neutral)}if(!t.customFunction)return}if(t.customFunction)t.customFunction.call(this,l,i,s,n);else{let o,d;o=t.logarithmic?(Math.log(n)*Math.LOG10E-Math.log(i)*Math.LOG10E)/(Math.log(s)*Math.LOG10E-Math.log(i)*Math.LOG10E):(n-i)/(s-i),!M(n)||M(o)&&Math.abs(o)!=1/0||(o=.5),M(t.min)?d=t.min+(t.max-t.min)*o:t.min instanceof L?d=L.interpolate(o,t.min,t.max):t.min instanceof Q&&(d=W(o,t.min,t.max)),l.set(t.key,d);const h=l.states;if(h){const m=h.lookup("default");m&&m.set(t.key,d)}}})}),this.get("visible")){let t=this.dataItems.length,i=this.startIndex(),s=this.endIndex();s<t&&s++,i>0&&i--;for(let l=0;l<i;l++)this._hideBullets(this.dataItems[l]);for(let l=i;l<s;l++)this._positionBullets(this.dataItems[l]);for(let l=s;l<t;l++)this._hideBullets(this.dataItems[l])}}_positionBullets(e){e.bullets&&y(e.bullets,t=>{this._positionBullet(t);const i=t.get("sprite");t.get("dynamic")&&(i&&(i._markDirtyKey("fill"),i.markDirtySize()),i instanceof x&&i.walkChildren(s=>{s._markDirtyKey("fill"),s.markDirtySize(),s instanceof E&&s.text.markDirtyText()})),i instanceof E&&i.get("populateText")&&i.text.markDirtyText()})}_hideBullets(e){e.bullets&&y(e.bullets,t=>{let i=t.get("sprite");i&&i.setPrivate("visible",!1)})}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&y(t,i=>{i.dispose()})}_getItemReaderLabel(){return""}showDataItem(e,t){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return T(this,void 0,void 0,function*(){const s=[i.showDataItem.call(this,e,t)],l=e.bullets;l&&y(l,n=>{const o=n.get("sprite");o&&s.push(o.show(t))}),yield Promise.all(s)})}hideDataItem(e,t){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return T(this,void 0,void 0,function*(){const s=[i.hideDataItem.call(this,e,t)],l=e.bullets;l&&y(l,n=>{const o=n.get("sprite");o&&s.push(o.hide(t))}),yield Promise.all(s)})}_sequencedShowHide(e,t){return T(this,void 0,void 0,function*(){if(this.get("sequencedInterpolation"))if(M(t)||(t=this.get("interpolationDuration",0)),t>0){const i=this.startIndex(),s=this.endIndex();yield Promise.all(H(this.dataItems,(l,n)=>T(this,void 0,void 0,function*(){let o=t||0;(n<i-10||n>s+10)&&(o=0);let d=this.get("sequencedDelay",0)+o/(s-i);yield te(d*(n-i)),e?yield this.showDataItem(l,o):yield this.hideDataItem(l,o)})))}else yield Promise.all(H(this.dataItems,i=>e?this.showDataItem(i,0):this.hideDataItem(i,0)))})}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const i=t.get("valueLabel");if(i){const l=i.text;let n="";i._setDataItem(e),n=this.get("legendValueText",l.get("text","")),i.set("text",n),l.markDirtyText()}const s=t.get("label");if(s){const l=s.text;let n="";s._setDataItem(e),n=this.get("legendLabelText",l.get("text","")),s.set("text",n),l.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function z(r,e){for(let t=0,i=e.length;t<i;t++){const s=e[t];if(s.length>0){let l=s[0];if(l.length>0){let n=l[0];r.moveTo(n.x,n.y);for(let o=0,d=s.length;o<d;o++)ie(r,s[o])}}}}function ie(r,e){for(let t=0,i=e.length;t<i;t++){const s=e[t];r.lineTo(s.x,s.y)}}Object.defineProperty(R,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(R,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:j.classNames.concat([R.className])});class F extends G{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let i=e[0];this._display.moveTo(i.x,i.y),z(this._display,[[e]])}else if(t)z(this._display,t);else if(!this.get("draw")){let i=this.width(),s=this.height();this._display.moveTo(0,0),this._display.lineTo(i,s)}}}}function he(r){return function(){return r}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:G.classNames.concat([F.className])});const $=Math.PI,B=2*$,k=1e-6,se=B-k;function K(r){this._+=r[0];for(let e=1,t=r.length;e<t;++e)this._+=arguments[e]+r[e]}function ae(r){let e=Math.floor(r);if(!(e>=0))throw new Error(`invalid digits: ${r}`);if(e>15)return K;const t=10**e;return function(i){this._+=i[0];for(let s=1,l=i.length;s<l;++s)this._+=Math.round(arguments[s]*t)/t+i[s]}}class le{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?K:ae(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,i,s){this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+s}`}bezierCurveTo(e,t,i,s,l,n){this._append`C${+e},${+t},${+i},${+s},${this._x1=+l},${this._y1=+n}`}arcTo(e,t,i,s,l){if(e=+e,t=+t,i=+i,s=+s,(l=+l)<0)throw new Error(`negative radius: ${l}`);let n=this._x1,o=this._y1,d=i-e,h=s-t,m=n-e,f=o-t,u=m*m+f*f;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(u>k)if(Math.abs(f*d-h*m)>k&&l){let a=i-n,b=s-o,v=d*d+h*h,g=a*a+b*b,D=Math.sqrt(v),w=Math.sqrt(u),C=l*Math.tan(($-Math.acos((v+u-g)/(2*D*w)))/2),c=C/w,O=C/D;Math.abs(c-1)>k&&this._append`L${e+c*m},${t+c*f}`,this._append`A${l},${l},0,0,${+(f*a>m*b)},${this._x1=e+O*d},${this._y1=t+O*h}`}else this._append`L${this._x1=e},${this._y1=t}`}arc(e,t,i,s,l,n){if(e=+e,t=+t,n=!!n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let o=i*Math.cos(s),d=i*Math.sin(s),h=e+o,m=t+d,f=1^n,u=n?s-l:l-s;this._x1===null?this._append`M${h},${m}`:(Math.abs(this._x1-h)>k||Math.abs(this._y1-m)>k)&&this._append`L${h},${m}`,i&&(u<0&&(u=u%B+B),u>se?this._append`A${i},${i},0,1,${f},${e-o},${t-d}A${i},${i},0,1,${f},${this._x1=h},${this._y1=m}`:u>k&&this._append`A${i},${i},0,${+(u>=$)},${f},${this._x1=e+i*Math.cos(l)},${this._y1=t+i*Math.sin(l)}`)}rect(e,t,i,s){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+s}h${-i}Z`}toString(){return this._}}function ue(r){let e=3;return r.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const i=Math.floor(t);if(!(i>=0))throw new RangeError(`invalid digits: ${t}`);e=i}return r},()=>new le(e)}class S extends x{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{width:P,height:P,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:x.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:P,height:P})})}}Object.defineProperty(S,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(S,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:x.classNames.concat([S.className])});class N extends S{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:x.new(this._root,{width:P,height:P,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new J})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll(t=>{if(t.type==="clear"){y(t.oldValues,l=>{this._removeSeries(l)});const i=this.get("colors");i&&i.reset();const s=this.get("patterns");s&&s.reset()}else if(t.type==="push")e.moveValue(t.newValue),this._processSeries(t.newValue);else if(t.type==="setIndex")e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="insertIndex")e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="removeIndex")this._removeSeries(t.oldValue);else{if(t.type!=="moveIndex")throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}}))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.classNames.concat([N.className])});class U extends F{}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:F.classNames.concat([U.className])});export{R as D,oe as I,N as R,U,ue as V,j as _,V as g,he as k};
