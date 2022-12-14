var A=Object.defineProperty;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var k=(t,e,a)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))j.call(e,a)&&k(t,a,e[a]);if(x)for(var a of x(e))H.call(e,a)&&k(t,a,e[a]);return t};import{oT as z,oU as _,oY as L,oV as i,p0 as w,oX as I,oZ as C,o_ as $}from"./vendor.f59460b9.js";import{c as O}from"./observers.1d519db5.js";import{u as V}from"./interactive.d71a7a54.js";import{d as B}from"./icon.8df16821.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const F='@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) * 2) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:none}:host([active]){display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);transform:scale(1, 1)}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 2.4)}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 3.2)}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 3.867)}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',P=z(class extends _{constructor(){super();this.__registerHost(),this.__attachShadow(),this.active=!1,this.inline=!1,this.scale="m",this.value=0,this.text="",this.noPadding=!1}render(){const{el:t,inline:e,label:a,scale:n,text:l,type:d,value:r}=this,b=t.id||L(),u=.45,c=e?this.getInlineSize(n):this.getSize(n),m=c*u,f=`0 0 ${c} ${c}`,v=d==="determinate",p=2*m*Math.PI,g=r/100*p,S=p-g,y=Math.floor(r),D={"aria-valuenow":y,"aria-valuemin":0,"aria-valuemax":100,complete:y===100},h={r:m,cx:c/2,cy:c/2},T={"stroke-dasharray":`${g} ${S}`};return i(w,s({"aria-label":a,id:b,role:"progressbar"},v?D:{}),i("div",{class:"loader__svgs"},i("svg",{class:"loader__svg loader__svg--1",viewBox:f},i("circle",s({},h))),i("svg",{class:"loader__svg loader__svg--2",viewBox:f},i("circle",s({},h))),i("svg",s({class:"loader__svg loader__svg--3",viewBox:f},v?{style:T}:{}),i("circle",s({},h)))),l&&i("div",{class:"loader__text"},l),v&&i("div",{class:"loader__percentage"},r))}getSize(t){return{s:32,m:56,l:80}[t]}getInlineSize(t){return{s:12,m:16,l:20}[t]}get el(){return this}static get style(){return F}},[1,"calcite-loader",{active:[516],inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],noPadding:[516,"no-padding"]}]);function E(){if(typeof customElements=="undefined")return;["calcite-loader"].forEach(e=>{switch(e){case"calcite-loader":customElements.get(e)||customElements.define(e,P);break}})}E();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const o={button:"button",buttonTextVisible:"button--text-visible",buttonCompact:"button--compact",iconContainer:"icon-container",slotContainer:"slot-container",slotContainerHidden:"slot-container--hidden",textContainer:"text-container",textContainerVisible:"text-container--visible"},U={loading:"Loading"},M={tooltip:"tooltip"},R='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=clear]) .button,:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus,:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button,:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button--text-visible .text-container--visible{margin-inline-end:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}',X=z(class extends _{constructor(){super();this.__registerHost(),this.__attachShadow(),this.calciteActionClick=I(this,"calciteActionClick",6),this.active=!1,this.appearance="solid",this.compact=!1,this.disabled=!1,this.indicator=!1,this.intlLoading=U.loading,this.loading=!1,this.scale="m",this.textEnabled=!1,this.mutationObserver=O("mutation",()=>$(this)),this.handleTooltipSlotChange=t=>{const a=t.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-tooltip"))[0];a&&(a.referenceElement=this.buttonEl)},this.calciteActionClickHandler=()=>{this.disabled||this.calciteActionClick.emit()}}connectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0||t.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0||t.disconnect()}componentDidRender(){V(this)}async setFocus(){var t;(t=this.buttonEl)===null||t===void 0||t.focus()}renderTextContainer(){const{text:t,textEnabled:e}=this,a={[o.textContainer]:!0,[o.textContainerVisible]:e};return t?i("div",{class:a,key:"text-container"},t):null}renderIconContainer(){var t;const{loading:e,icon:a,scale:n,el:l,intlLoading:d}=this,r=n==="l"?"m":"s",u=e?i("calcite-loader",{active:!0,inline:!0,label:d,scale:n==="l"?"l":"m"}):null,c=a?i("calcite-icon",{icon:a,scale:r}):null,m=u||c,f=m||((t=l.children)===null||t===void 0?void 0:t.length),v=i("div",{class:{[o.slotContainer]:!0,[o.slotContainerHidden]:e}},i("slot",null));return f?i("div",{"aria-hidden":"true",class:o.iconContainer,key:"icon-container"},m,v):null}render(){const{compact:t,disabled:e,loading:a,textEnabled:n,label:l,text:d}=this,r=l||d,b={[o.button]:!0,[o.buttonTextVisible]:n,[o.buttonCompact]:t};return i(w,{onClick:this.calciteActionClickHandler},i("button",{"aria-busy":C(a),"aria-disabled":C(e),"aria-label":r,class:b,disabled:e,ref:u=>this.buttonEl=u},this.renderIconContainer(),this.renderTextContainer()),i("slot",{name:M.tooltip,onSlotchange:this.handleTooltipSlotChange}))}get el(){return this}static get style(){return R}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],indicator:[516],intlLoading:[1,"intl-loading"],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],setFocus:[64]}]);function Y(){if(typeof customElements=="undefined")return;["calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-action":customElements.get(e)||customElements.define(e,X);break;case"calcite-icon":customElements.get(e)||B();break;case"calcite-loader":customElements.get(e)||E();break}})}Y();export{X as A,Y as a,E as d};
