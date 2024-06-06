import{af as et,aA as tt,j as b,d as Se,m as R,aB as nt,s as Pe,l as Z,a4 as xe,aj as ot,t as rt,v as it,k as A,x as he,as as lt,aa as st,K as at,b as ut,aC as ft,R as X,aD as ct,aE as dt,a as w,ae as ht,P as vt,X as mt,Y as bt,Z as pt,F as yt,D as ve,S as me,H as wt,J as _t}from"./index-DM9u3KzT.js";import{a as gt,C as Ot}from"./use-teleport-container-C4MI57Bu.js";import{o as Et}from"./index-JRQQbpTd.js";var Ae=function(){if(typeof Map<"u")return Map;function e(t,n){var o=-1;return t.some(function(r,l){return r[0]===n?(o=l,!0):!1}),o}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var o=e(this.__entries__,n),r=this.__entries__[o];return r&&r[1]},t.prototype.set=function(n,o){var r=e(this.__entries__,n);~r?this.__entries__[r][1]=o:this.__entries__.push([n,o])},t.prototype.delete=function(n){var o=this.__entries__,r=e(o,n);~r&&o.splice(r,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,o){o===void 0&&(o=null);for(var r=0,l=this.__entries__;r<l.length;r++){var s=l[r];n.call(o,s[1],s[0])}},t}()}(),Q=typeof window<"u"&&typeof document<"u"&&window.document===document,V=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Ct=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(V):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Tt=2;function Mt(e,t){var n=!1,o=!1,r=0;function l(){n&&(n=!1,e()),o&&f()}function s(){Ct(l)}function f(){var u=Date.now();if(n){if(u-r<Tt)return;o=!0}else n=!0,o=!1,setTimeout(s,t);r=u}return f}var St=20,Pt=["top","right","bottom","left","width","height","size","weight"],xt=typeof MutationObserver<"u",At=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Mt(this.refresh.bind(this),St)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,o=n.indexOf(t);~o&&n.splice(o,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Q||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),xt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Q||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,o=n===void 0?"":n,r=Pt.some(function(l){return!!~o.indexOf(l)});r&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ze=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var r=o[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},S=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||V},Be=H(0,0,0,0);function k(e){return parseFloat(e)||0}function be(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(o,r){var l=e["border-"+r+"-width"];return o+k(l)},0)}function zt(e){for(var t=["top","right","bottom","left"],n={},o=0,r=t;o<r.length;o++){var l=r[o],s=e["padding-"+l];n[l]=k(s)}return n}function Bt(e){var t=e.getBBox();return H(0,0,t.width,t.height)}function Ft(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Be;var o=S(e).getComputedStyle(e),r=zt(o),l=r.left+r.right,s=r.top+r.bottom,f=k(o.width),u=k(o.height);if(o.boxSizing==="border-box"&&(Math.round(f+l)!==t&&(f-=be(o,"left","right")+l),Math.round(u+s)!==n&&(u-=be(o,"top","bottom")+s)),!Dt(e)){var d=Math.round(f+l)-t,c=Math.round(u+s)-n;Math.abs(d)!==1&&(f-=d),Math.abs(c)!==1&&(u-=c)}return H(r.left,r.top,f,u)}var Lt=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof S(e).SVGGraphicsElement}:function(e){return e instanceof S(e).SVGElement&&typeof e.getBBox=="function"}}();function Dt(e){return e===S(e).document.documentElement}function jt(e){return Q?Lt(e)?Bt(e):Ft(e):Be}function $t(e){var t=e.x,n=e.y,o=e.width,r=e.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(l.prototype);return ze(s,{x:t,y:n,width:o,height:r,top:n,right:t+o,bottom:r+n,left:t}),s}function H(e,t,n,o){return{x:e,y:t,width:n,height:o}}var Wt=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=H(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=jt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Vt=function(){function e(t,n){var o=$t(n);ze(this,{target:t,contentRect:o})}return e}(),kt=function(){function e(t,n,o){if(this.activeObservations_=[],this.observations_=new Ae,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=o}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof S(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Wt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof S(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(o){return new Vt(o.target,o.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Fe=typeof WeakMap<"u"?new WeakMap:new Ae,Le=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=At.getInstance(),o=new kt(t,n,this);Fe.set(this,o)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Le.prototype[e]=function(){var t;return(t=Fe.get(this))[e].apply(t,arguments)}});var De=function(){return typeof V.ResizeObserver<"u"?V.ResizeObserver:Le}();const je=typeof window>"u"?global:window,Ht=je.requestAnimationFrame,pe=je.cancelAnimationFrame;function ye(e){let t=0;const n=(...o)=>{t&&pe(t),t=Ht(()=>{e(...o),t=0})};return n.cancel=()=>{pe(t),t=0},n}var It=Object.defineProperty,we=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,_e=(e,t,n)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))Nt.call(t,n)&&_e(e,n,t[n]);if(we)for(var n of we(t))Gt.call(t,n)&&_e(e,n,t[n]);return e};const qt=()=>{const{height:e,width:t}=tt();return{width:Math.min(t,window.innerWidth),height:Math.min(e,window.innerHeight)}},ge=(e,t)=>{var n,o;const r=e.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-t.top,scrollBottom:r.bottom-t.top,scrollLeft:r.left-t.left,scrollRight:r.right-t.left,width:(n=e.offsetWidth)!=null?n:e.clientWidth,height:(o=e.offsetHeight)!=null?o:e.clientHeight}},Kt=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},W=(e,t)=>{switch(t){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Yt=(e,t,{containerRect:n,triggerRect:o,popupRect:r,offset:l,translate:s})=>{const f=Kt(e),u=qt(),d={top:n.top+t.top,bottom:u.height-(n.top+t.top+r.height),left:n.left+t.left,right:u.width-(n.left+t.left+r.width)};let c=e;if(f==="top"&&d.top<0)if(o.top>r.height)t.top=-n.top;else{const v=B("bottom",o,r,{offset:l,translate:s});u.height-(n.top+v.top+r.height)>0&&(c=W(e,"bottom"),t.top=v.top)}if(f==="bottom"&&d.bottom<0)if(u.height-o.bottom>r.height)t.top=-n.top+(u.height-r.height);else{const v=B("top",o,r,{offset:l,translate:s});n.top+v.top>0&&(c=W(e,"top"),t.top=v.top)}if(f==="left"&&d.left<0)if(o.left>r.width)t.left=-n.left;else{const v=B("right",o,r,{offset:l,translate:s});u.width-(n.left+v.left+r.width)>0&&(c=W(e,"right"),t.left=v.left)}if(f==="right"&&d.right<0)if(u.width-o.right>r.width)t.left=-n.left+(u.width-r.width);else{const v=B("left",o,r,{offset:l,translate:s});n.left+v.left>0&&(c=W(e,"left"),t.left=v.left)}return(f==="top"||f==="bottom")&&(d.left<0?t.left=-n.left:d.right<0&&(t.left=-n.left+(u.width-r.width))),(f==="left"||f==="right")&&(d.top<0?t.top=-n.top:d.bottom<0&&(t.top=-n.top+(u.height-r.height))),{popupPosition:t,position:c}},B=(e,t,n,{offset:o=0,translate:r=[0,0]}={})=>{var l;const s=(l=et(r)?r:r[e])!=null?l:[0,0];switch(e){case"top":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(n.width/2)+s[0],top:t.scrollTop-n.height-o+s[1]};case"tl":return{left:t.scrollLeft+s[0],top:t.scrollTop-n.height-o+s[1]};case"tr":return{left:t.scrollRight-n.width+s[0],top:t.scrollTop-n.height-o+s[1]};case"bottom":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(n.width/2)+s[0],top:t.scrollBottom+o+s[1]};case"bl":return{left:t.scrollLeft+s[0],top:t.scrollBottom+o+s[1]};case"br":return{left:t.scrollRight-n.width+s[0],top:t.scrollBottom+o+s[1]};case"left":return{left:t.scrollLeft-n.width-o+s[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(n.height/2)+s[1]};case"lt":return{left:t.scrollLeft-n.width-o+s[0],top:t.scrollTop+s[1]};case"lb":return{left:t.scrollLeft-n.width-o+s[0],top:t.scrollBottom-n.height+s[1]};case"right":return{left:t.scrollRight+o+s[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(n.height/2)+s[1]};case"rt":return{left:t.scrollRight+o+s[0],top:t.scrollTop+s[1]};case"rb":return{left:t.scrollRight+o+s[0],top:t.scrollBottom-n.height+s[1]};default:return{left:0,top:0}}},Ut=e=>{let t="0";["top","bottom"].includes(e)?t="50%":["left","lt","lb","tr","br"].includes(e)&&(t="100%");let n="0";return["left","right"].includes(e)?n="50%":["top","tl","tr","lb","rb"].includes(e)&&(n="100%"),`${t} ${n}`},Xt=(e,t,n,o,{offset:r=0,translate:l=[0,0],customStyle:s={},autoFitPosition:f=!1}={})=>{let u=e,d=B(e,n,o,{offset:r,translate:l});if(f){const v=Yt(e,d,{containerRect:t,popupRect:o,triggerRect:n,offset:r,translate:l});d=v.popupPosition,u=v.position}return{style:z({left:`${d.left}px`,top:`${d.top}px`},s),position:u}},Jt=(e,t,n,{customStyle:o={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let l=Math.abs(t.scrollLeft+t.width/2-n.scrollLeft);return l>n.width-8&&(t.width>n.width?l=n.width/2:l=n.width-8),["top","tl","tr"].includes(e)?z({left:`${l}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},o):z({left:`${l}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},o)}let r=Math.abs(t.scrollTop+t.height/2-n.scrollTop);return r>n.height-8&&(t.height>n.height?r=n.height/2:r=n.height-8),["left","lt","lb"].includes(e)?z({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},o):z({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},o)},Zt=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,Oe=e=>{var t;const n=[];let o=e;for(;o&&o!==document.documentElement;)Zt(o)&&n.push(o),o=(t=o.parentElement)!=null?t:void 0;return n},$e=()=>{const e={},t=b(),n=()=>{const o=nt(e.value);o!==t.value&&(t.value=o)};return Se(()=>n()),R(()=>n()),{children:e,firstElement:t}};var Ee=Pe({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:t,slots:n}){const{children:o,firstElement:r}=$e();let l;const s=u=>{u&&(l=new De(d=>{const c=d[0];t("resize",c)}),l.observe(u))},f=()=>{l&&(l.disconnect(),l=null)};return Z(r,u=>{l&&f(),u&&s(u)}),xe(()=>{l&&f()}),()=>{var u;return o.value=(u=n.default)==null?void 0:u.call(n),o.value}}});function Qt(e,t){const n=b(e[t]);return R(()=>{const o=e[t];n.value!==o&&(n.value=o)}),n}const Ce=Symbol("ArcoTrigger"),Rt=({elementRef:e,onResize:t})=>{let n;return{createResizeObserver:()=>{e.value&&(n=new De(l=>{const s=l[0];ot(t)&&t(s)}),n.observe(e.value))},destroyResizeObserver:()=>{n&&(n.disconnect(),n=null)}}};var en=Object.defineProperty,tn=Object.defineProperties,nn=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertySymbols,on=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable,Me=(e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ln=(e,t)=>{for(var n in t||(t={}))on.call(t,n)&&Me(e,n,t[n]);if(Te)for(var n of Te(t))rn.call(t,n)&&Me(e,n,t[n]);return e},sn=(e,t)=>tn(e,nn(t));const an=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var J=Pe({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1},scrollToCloseDistance:{type:Number,default:0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:t,slots:n,attrs:o}){const{popupContainer:r}=rt(e),l=it("trigger"),s=A(()=>Et(o,an)),f=he(lt,void 0),u=A(()=>[].concat(e.trigger)),d=new Set,c=he(Ce,void 0),{children:v,firstElement:P}=$e(),C=b(),ee=b(e.defaultPopupVisible),F=b(e.position),te=b({}),ne=b({}),oe=b({}),We=b(),_=b({top:0,left:0});let L=null,D=null;const h=A(()=>{var i;return(i=e.popupVisible)!=null?i:ee.value}),{teleportContainer:Ve,containerRef:I}=gt({popupContainer:r,visible:h,documentContainer:!0}),{zIndex:ke}=st("popup",{visible:h});let x=0,g=!1,N=!1;const He=()=>{x&&(window.clearTimeout(x),x=0)},G=i=>{if(e.alignPoint){const{pageX:a,pageY:m}=i;_.value={top:m,left:a}}},O=()=>{if(!P.value||!C.value||!I.value)return;const i=I.value.getBoundingClientRect(),a=e.alignPoint?{top:_.value.top,bottom:_.value.top,left:_.value.left,right:_.value.left,scrollTop:_.value.top,scrollBottom:_.value.top,scrollLeft:_.value.left,scrollRight:_.value.left,width:0,height:0}:ge(P.value,i),m=()=>ge(C.value,i),T=m(),{style:E,position:M}=Xt(e.position,i,a,T,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(ne.value={transformOrigin:Ut(M)}),e.autoFitPopupMinWidth?E.minWidth=`${a.width}px`:e.autoFitPopupWidth&&(E.width=`${a.width}px`),F.value!==M&&(F.value=M),te.value=E,e.showArrow&&ve(()=>{oe.value=Jt(M,a,m(),{customStyle:e.arrowStyle})})},p=(i,a)=>{if(i===h.value&&x===0)return;const m=()=>{ee.value=i,t("update:popupVisible",i),t("popupVisibleChange",i),i&&ve(()=>{O()})};i||(L=null,D=null),a?(He(),i!==h.value&&(x=window.setTimeout(m,a))):m()},Ie=i=>{var a;(a=o.onClick)==null||a.call(o,i),!(e.disabled||h.value&&!e.clickToClose)&&(u.value.includes("click")?(G(i),p(!h.value)):u.value.includes("contextMenu")&&h.value&&p(!1))},re=i=>{var a;(a=o.onMouseenter)==null||a.call(o,i),!(e.disabled||!u.value.includes("hover"))&&(G(i),p(!0,e.mouseEnterDelay))},ie=i=>{c==null||c.onMouseenter(i),re(i)},le=i=>{var a;(a=o.onMouseleave)==null||a.call(o,i),!(e.disabled||!u.value.includes("hover"))&&p(!1,e.mouseLeaveDelay)},se=i=>{c==null||c.onMouseleave(i),le(i)},Ne=i=>{var a;(a=o.onFocusin)==null||a.call(o,i),!(e.disabled||!u.value.includes("focus"))&&p(!0,e.focusDelay)},Ge=i=>{var a;(a=o.onFocusout)==null||a.call(o,i),!(e.disabled||!u.value.includes("focus"))&&e.blurToClose&&p(!1)},qe=i=>{var a;(a=o.onContextmenu)==null||a.call(o,i),!(e.disabled||!u.value.includes("contextMenu")||h.value&&!e.clickToClose)&&(G(i),p(!h.value),i.preventDefault())};at(Ce,ut({onMouseenter:ie,onMouseleave:se,addChildRef:i=>{d.add(i),c==null||c.addChildRef(i)},removeChildRef:i=>{d.delete(i),c==null||c.removeChildRef(i)}}));const q=()=>{me(document.documentElement,"mousedown",K),g=!1},ae=Qt(n,"content"),Ke=A(()=>{var i;return e.hideEmpty&&ft((i=ae.value)==null?void 0:i.call(ae))}),K=i=>{var a,m,T;if(!((a=P.value)!=null&&a.contains(i.target)||(m=C.value)!=null&&m.contains(i.target))){for(const E of d)if((T=E.value)!=null&&T.contains(i.target))return;q(),p(!1)}},ue=(i,a)=>{const[m,T]=i,{scrollTop:E,scrollLeft:M}=a;return Math.abs(E-m)>=e.scrollToCloseDistance||Math.abs(M-T)>=e.scrollToCloseDistance},j=ye(i=>{if(h.value)if(e.scrollToClose||f!=null&&f.scrollToClose){const a=i.target;L||(L=[a.scrollTop,a.scrollLeft]),ue(L,a)?p(!1):O()}else O()}),fe=()=>{me(window,"scroll",ce),N=!1},ce=ye(i=>{const a=i.target.documentElement;D||(D=[a.scrollTop,a.scrollLeft]),ue(D,a)&&(p(!1),fe())}),Y=()=>{h.value&&O()},Ye=()=>{Y(),t("resize")},Ue=i=>{e.preventFocus&&i.preventDefault()};c==null||c.addChildRef(C);const Xe=A(()=>h.value?e.openedClass:void 0);let y;Z(h,i=>{if(e.clickOutsideToClose&&(!i&&g?q():i&&!g&&(X(document.documentElement,"mousedown",K),g=!0)),(e.scrollToClose||f!=null&&f.scrollToClose)&&(X(window,"scroll",ce),N=!0),e.updateAtScroll||f!=null&&f.updateAtScroll){if(i){y=Oe(P.value);for(const a of y)a.addEventListener("scroll",j)}else if(y){for(const a of y)a.removeEventListener("scroll",j);y=void 0}}i&&(U.value=!0)}),Z(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{h.value&&O()});const{createResizeObserver:Je,destroyResizeObserver:Ze}=Rt({elementRef:I,onResize:Y});Se(()=>{if(Je(),h.value&&(O(),e.clickOutsideToClose&&!g&&(X(document.documentElement,"mousedown",K),g=!0),e.updateAtScroll||f!=null&&f.updateAtScroll)){y=Oe(P.value);for(const i of y)i.addEventListener("scroll",j)}}),R(()=>{h.value&&O()}),ct(()=>{p(!1)}),xe(()=>{if(c==null||c.removeChildRef(C),Ze(),g&&q(),N&&fe(),y){for(const i of y)i.removeEventListener("scroll",j);y=void 0}});const U=b(h.value),$=b(!1),de=()=>{$.value=!0},Qe=()=>{$.value=!1,h.value&&t("show")},Re=()=>{$.value=!1,h.value||(U.value=!1,t("hide"))};return()=>{var i,a;return v.value=(a=(i=n.default)==null?void 0:i.call(n))!=null?a:[],dt(v.value,{class:Xe.value,onClick:Ie,onMouseenter:re,onMouseleave:le,onFocusin:Ne,onFocusout:Ge,onContextmenu:qe}),w(yt,null,[e.autoFixPosition?w(Ee,{onResize:Ye},{default:()=>[v.value]}):v.value,w(Ot,null,{default:()=>[w(ht,{to:Ve.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||h.value||U.value)&&!Ke.value&&w(Ee,{onResize:Y},{default:()=>[w("div",vt({ref:C,class:[`${l}-popup`,`${l}-position-${F.value}`],style:sn(ln({},te.value),{zIndex:ke.value,pointerEvents:$.value?"none":"auto"}),"trigger-placement":F.value,onMouseenter:ie,onMouseleave:se,onMousedown:Ue},s.value),[w(mt,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:de,onAfterEnter:Qe,onBeforeLeave:de,onAfterLeave:Re},{default:()=>{var m;return[bt(w("div",{class:`${l}-popup-wrapper`,style:ne.value},[w("div",{class:[`${l}-content`,e.contentClass],style:e.contentStyle},[(m=n.content)==null?void 0:m.call(n)]),e.showArrow&&w("div",{ref:We,class:[`${l}-arrow`,e.arrowClass],style:oe.value},null)]),[[pt,h.value]])]}})])]})]})]})])}}});const vn=Object.assign(J,{install:(e,t)=>{wt(e,t);const n=_t(t);e.component(n+J.name,J)}});export{Ee as R,vn as T,De as i,ye as t,Qt as u};
