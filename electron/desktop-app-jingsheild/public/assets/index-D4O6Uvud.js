import{q as y,s as h,v as C,x as R,j as T,k as P,y as F,r as c,o as b,c as $,z as f,A as s,a as m,B as S,w as l,e as O,C as K,t as j,K as _,b as q,E as z,O as D,h as J,G as Y,F as L,P as I,H as Q,J as U}from"./index-DM9u3KzT.js";import{T as M}from"./index-b-VCEi3L.js";import{S as W,E as X,u as H,I as Z,a as x}from"./index-BDhnDJro.js";import{B as ee,a as oe}from"./index-BY_Z3AGv.js";const N=Symbol("ArcoDropdown"),te=h({name:"DropdownPanel",components:{Scrollbar:W,Empty:X},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:o,slots:t}){const i=C("dropdown"),p=R(N,{}),r=T(),n=a=>{const{scrollTop:g,scrollHeight:E,offsetHeight:G}=a.target;E-(g+G)<=e.bottomOffset&&o("reachBottom",a),o("scroll",a)},u=P(()=>{if(F(p.popupMaxHeight))return{maxHeight:`${p.popupMaxHeight}px`};if(!p.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),d=P(()=>[i,{[`${i}-has-footer`]:!!t.footer}]);return{prefixCls:i,cls:d,style:u,wrapperRef:r,handleScroll:n}}});function ne(e,o,t,i,p,r){const n=c("empty"),u=c("Scrollbar");return b(),$("div",{class:f(e.cls)},[e.isEmpty?(b(),$("div",{key:0,class:f(`${e.prefixCls}-empty`)},[s(e.$slots,"empty",{},()=>[m(n)])],2)):S("v-if",!0),m(u,{ref:"wrapperRef",class:f(`${e.prefixCls}-list-wrapper`),style:K(e.style),onScroll:e.handleScroll},{default:l(()=>[O("ul",{class:f(`${e.prefixCls}-list`)},[s(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(b(),$("div",{key:1,class:f(`${e.prefixCls}-footer`)},[s(e.$slots,"footer")],2)):S("v-if",!0)],2)}var A=y(te,[["render",ne]]);const se=h({name:"Dropdown",components:{Trigger:M,DropdownPanel:A},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:i,popupMaxHeight:p}=j(e),r=C("dropdown"),{computedPopupVisible:n,handlePopupVisibleChange:u}=H({defaultPopupVisible:t,popupVisible:i,emit:o});return _(N,q({popupMaxHeight:p,onOptionClick:(a,g)=>{o("select",a,g),e.hideOnSelect&&u(!1)}})),{prefixCls:r,computedPopupVisible:n,handlePopupVisibleChange:u}}});function ie(e,o,t,i,p,r){const n=c("DropdownPanel"),u=c("Trigger");return b(),z(u,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:l(()=>[m(n,null,D({default:l(()=>[s(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:l(()=>[s(e.$slots,"footer")])}:void 0]),1024)]),default:l(()=>[s(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var v=y(se,[["render",ie]]);const pe=h({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=C("dropdown-option"),i=T(),p=P(()=>{var d,a,g;return(g=(a=e.value)!=null?a:(d=i.value)==null?void 0:d.textContent)!=null?g:void 0}),r=e.uninjectContext?void 0:R(N,void 0),n=d=>{e.disabled||(o("click",d),r==null||r.onOptionClick(p.value,d))},u=P(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:u,liRef:i,handleClick:n}}});function le(e,o,t,i,p,r){return b(),$("li",{ref:"liRef",class:f([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:o[0]||(o[0]=(...n)=>e.handleClick&&e.handleClick(...n))},[e.$slots.icon?(b(),$("span",{key:0,class:f(`${e.prefixCls}-icon`)},[s(e.$slots,"icon")],2)):S("v-if",!0),O("span",{class:f(`${e.prefixCls}-content`)},[s(e.$slots,"default")],2),e.$slots.suffix?(b(),$("span",{key:1,class:f(`${e.prefixCls}-suffix`)},[s(e.$slots,"suffix")],2)):S("v-if",!0)],2)}var V=y(pe,[["render",le]]);const re=h({name:"Dgroup",props:{title:String},setup(){return{prefixCls:C("dropdown-group")}}});function ae(e,o,t,i,p,r){return b(),$(L,null,[O("li",{class:f(`${e.prefixCls}-title`)},[s(e.$slots,"title",{},()=>[J(Y(e.title),1)])],2),s(e.$slots,"default")],64)}var B=y(re,[["render",ae]]);const ue=h({name:"Dsubmenu",components:{Trigger:M,DropdownPanel:A,DropdownOption:V,IconRight:Z},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:i}=j(e),p=C("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:n}=H({defaultPopupVisible:t,popupVisible:i,emit:o});return{prefixCls:p,computedPopupVisible:r,handlePopupVisibleChange:n}}});function de(e,o,t,i,p,r){const n=c("IconRight"),u=c("dropdown-option"),d=c("dropdown-panel"),a=c("Trigger");return b(),z(a,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:l(()=>[m(d,{class:f(`${e.prefixCls}-submenu`)},D({default:l(()=>[s(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:l(()=>[s(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:l(()=>[m(u,I(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),D({suffix:l(()=>[s(e.$slots,"suffix",{},()=>[m(n)])]),default:l(()=>[s(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:l(()=>[s(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var w=y(ue,[["render",de]]);const ce=h({name:"DropdownButton",components:{IconMore:x,Button:ee,ButtonGroup:oe,Dropdown:v},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:i}=j(e),p=C("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:n}=H({defaultPopupVisible:t,popupVisible:i,emit:o});return{prefixCls:p,computedPopupVisible:r,handleClick:a=>{o("click",a)},handleSelect:(a,g)=>{o("select",a,g)},handlePopupVisibleChange:n}}});function fe(e,o,t,i,p,r){const n=c("Button"),u=c("IconMore"),d=c("Dropdown"),a=c("ButtonGroup");return b(),z(a,null,{default:l(()=>[m(n,I({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:l(()=>[s(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),m(d,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:l(()=>[s(e.$slots,"content")]),default:l(()=>[m(n,{size:e.size,type:e.type,disabled:e.disabled},{icon:l(()=>[s(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[m(u)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var k=y(ce,[["render",fe]]);const he=Object.assign(v,{Option:V,Group:B,Submenu:w,Button:k,install:(e,o)=>{Q(e,o);const t=U(o);e.component(t+v.name,v),e.component(t+V.name,V),e.component(t+B.name,B),e.component(t+w.name,w),e.component(t+k.name,k)}});export{V as D,he as a};
