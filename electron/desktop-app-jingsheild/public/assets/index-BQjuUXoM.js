import{j as he,k as j,d as pe,U as me,V as ve,q as ge,s as we,t as be,v as ye,K as xe,b as Oe,o as _e,c as je,A as Ee,z as He,C as $e}from"./index-DM9u3KzT.js";function re(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function ne(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function G(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return ne(r.overflowY,t)||ne(r.overflowX,t)||function(s){var n=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(s);return!!n&&(n.clientHeight<s.scrollHeight||n.clientWidth<s.scrollWidth)}(e)}return!1}function N(e,t,r,s,n,i,o,u){return i<e&&o>t||i>e&&o<t?0:i<=e&&u<=r||o>=t&&u>=r?i-e-s:o>t&&u<r||i<e&&u>r?o-t+n:0}var ie=function(e,t){var r=window,s=t.scrollMode,n=t.block,i=t.inline,o=t.boundary,u=t.skipOverflowHiddenElements,m=typeof o=="function"?o:function(de){return de!==o};if(!re(e))throw new TypeError("Invalid target");for(var k,b,y=document.scrollingElement||document.documentElement,x=[],a=e;re(a)&&m(a);){if((a=(b=(k=a).parentElement)==null?k.getRootNode().host||null:b)===y){x.push(a);break}a!=null&&a===document.body&&G(a)&&!G(document.documentElement)||a!=null&&G(a,u)&&x.push(a)}for(var c=r.visualViewport?r.visualViewport.width:innerWidth,h=r.visualViewport?r.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,E=window.scrollY||pageYOffset,O=e.getBoundingClientRect(),H=O.height,$=O.width,W=O.top,Q=O.right,K=O.bottom,S=O.left,f=n==="start"||n==="nearest"?W:n==="end"?K:W+H/2,d=i==="center"?S+$/2:i==="end"?Q:S,X=[],Y=0;Y<x.length;Y++){var l=x[Y],_=l.getBoundingClientRect(),V=_.height,P=_.width,M=_.top,Z=_.right,F=_.bottom,L=_.left;if(s==="if-needed"&&W>=0&&S>=0&&K<=h&&Q<=c&&W>=M&&K<=F&&S>=L&&Q<=Z)return X;var I=getComputedStyle(l),T=parseInt(I.borderLeftWidth,10),A=parseInt(I.borderTopWidth,10),q=parseInt(I.borderRightWidth,10),z=parseInt(I.borderBottomWidth,10),v=0,g=0,R="offsetWidth"in l?l.offsetWidth-l.clientWidth-T-q:0,C="offsetHeight"in l?l.offsetHeight-l.clientHeight-A-z:0,J="offsetWidth"in l?l.offsetWidth===0?0:P/l.offsetWidth:0,B="offsetHeight"in l?l.offsetHeight===0?0:V/l.offsetHeight:0;if(y===l)v=n==="start"?f:n==="end"?f-h:n==="nearest"?N(E,E+h,h,A,z,E+f,E+f+H,H):f-h/2,g=i==="start"?d:i==="center"?d-c/2:i==="end"?d-c:N(p,p+c,c,T,q,p+d,p+d+$,$),v=Math.max(0,v+E),g=Math.max(0,g+p);else{v=n==="start"?f-M-A:n==="end"?f-F+z+C:n==="nearest"?N(M,F,V,A,z+C,f,f+H,H):f-(M+V/2)+C/2,g=i==="start"?d-L-T:i==="center"?d-(L+P/2)+R/2:i==="end"?d-Z+q+R:N(L,Z,P,T,q+R,d,d+$,$);var ee=l.scrollLeft,te=l.scrollTop;f+=te-(v=Math.max(0,Math.min(te+v/B,l.scrollHeight-V/B+C))),d+=ee-(g=Math.max(0,Math.min(ee+g/J,l.scrollWidth-P/J+R)))}X.push({el:l,top:v,left:g})}return X},ke=Object.defineProperty,We=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,oe=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))Ve.call(t,r)&&oe(e,r,t[r]);if(se)for(var r of se(t))Pe.call(t,r)&&oe(e,r,t[r]);return e},Le=(e,t)=>We(e,Se(t));const le=["xxl","xl","lg","md","sm","xs"],U={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let w=[],Ie=-1,D={};const ae={matchHandlers:{},dispatch(e,t){return D=e,w.length<1?!1:(w.forEach(r=>{r.func(D,t)}),!0)},subscribe(e){w.length===0&&this.register();const t=(++Ie).toString();return w.push({token:t,func:e}),e(D,null),t},unsubscribe(e){w=w.filter(t=>t.token!==e),w.length===0&&this.unregister()},unregister(){Object.keys(U).forEach(e=>{const t=U[e];if(!t)return;const r=this.matchHandlers[t];r&&r.mql&&r.listener&&(r.mql.removeEventListener?r.mql.removeEventListener("change",r.listener):r.mql.removeListener(r.listener))})},register(){Object.keys(U).forEach(e=>{const t=U[e];if(!t)return;const r=({matches:n})=>{this.dispatch(Le(Me({},D),{[e]:n}),e)},s=window.matchMedia(t);s.addEventListener?s.addEventListener("change",r):s.addListener(r),this.matchHandlers[t]={mql:s,listener:r},r(s)})}};function ue(e){return ve(e)}function ce(e,t,r=!1){const s=he({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),n=j(()=>{let o=t;if(ue(e.value))for(let u=0;u<le.length;u++){const m=le[u];if((s.value[m]||m==="xs"&&r)&&e.value[m]!==void 0){o=e.value[m];break}}else o=e.value;return o});let i="";return pe(()=>{i=ae.subscribe(o=>{ue(e.value)&&(s.value=o)})}),me(()=>{i&&ae.unsubscribe(i)}),n}function fe(e){return e===Object(e)&&Object.keys(e).length!==0}function Te(e,t){t===void 0&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(s){var n=s.el,i=s.top,o=s.left;n.scroll&&r?n.scroll({top:i,left:o,behavior:t}):(n.scrollTop=i,n.scrollLeft=o)})}function Ae(e){return e===!1?{block:"end",inline:"nearest"}:fe(e)?e:{block:"start",inline:"nearest"}}function Ne(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(fe(t)&&typeof t.behavior=="function")return t.behavior(r?ie(e,t):[]);if(r){var s=Ae(t);return Te(ie(e,s),s.behavior)}}const qe=Symbol("RowContextInjectionKey"),ze=we({name:"Row",props:{gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start"},align:{type:String,default:"start"},div:{type:Boolean},wrap:{type:Boolean,default:!0}},setup(e){const{gutter:t,align:r,justify:s,div:n,wrap:i}=be(e),o=ye("row"),u=j(()=>({[`${o}`]:!n.value,[`${o}-nowrap`]:!i.value,[`${o}-align-${r.value}`]:r.value,[`${o}-justify-${s.value}`]:s.value})),m=j(()=>Array.isArray(t.value)?t.value[0]:t.value),k=j(()=>Array.isArray(t.value)?t.value[1]:0),b=ce(m,0),y=ce(k,0),x=j(()=>{const c={};if((b.value||y.value)&&!n.value){const h=-b.value/2,p=-y.value/2;h&&(c.marginLeft=`${h}px`,c.marginRight=`${h}px`),p&&(c.marginTop=`${p}px`,c.marginBottom=`${p}px`)}return c}),a=j(()=>[b.value,y.value]);return xe(qe,Oe({gutter:a,div:n})),{classNames:u,styles:x}}});function Re(e,t,r,s,n,i){return _e(),je("div",{class:He(e.classNames),style:$e(e.styles)},[Ee(e.$slots,"default")],6)}var Ue=ge(ze,[["render",Re]]);export{Ue as R,le as a,qe as b,ae as r,Ne as s,ce as u};