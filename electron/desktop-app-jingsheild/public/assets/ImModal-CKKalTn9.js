/* empty css              */import{S as u}from"./index-Bxqwtw46.js";import{B as f}from"./index-BY_Z3AGv.js";import{_ as v,Y as x,Z as S,o as h,E as y,w as o,e as t,G as c,a as i,A as k,h as r,X as b,p as g,i as I}from"./index-DM9u3KzT.js";const w=s=>(g("data-v-6ae57630"),s=s(),I(),s),B={class:"im-modal"},T={class:"im-modal-body"},C={class:"im-modal-header flex-between"},$={class:"im-modal-title"},N=w(()=>t("i",{class:"bi bi-x-lg"},null,-1)),V={class:"im-modal__content"},D={class:"im-modal__footer flex-end"},M={__name:"ImModal",props:{visible:Boolean,title:String,okText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"}},emits:["ok","cancel"],setup(s,{emit:_}){const a=s,n=_;return(p,e)=>{const l=f,m=u;return x((h(),y(b,{name:"bounce"},{default:o(()=>[t("section",B,[t("div",T,[t("div",C,[t("h3",$,c(a.title),1),i(l,{type:"primary",status:"danger",onClick:e[0]||(e[0]=d=>n("cancel"))},{default:o(()=>[N]),_:1})]),t("div",V,[k(p.$slots,"default",{},void 0,!0)]),t("div",D,[i(m,null,{default:o(()=>[i(l,{type:"primary",status:"danger",onClick:e[1]||(e[1]=d=>n("cancel"))},{default:o(()=>[r(c(a.cancelText),1)]),_:1}),i(l,{type:"primary",status:"success",onClick:e[2]||(e[2]=d=>n("ok"))},{default:o(()=>[r(c(a.okText),1)]),_:1})]),_:1})])])])]),_:3},512)),[[S,a.visible]])}}},Y=v(M,[["__scopeId","data-v-6ae57630"]]);export{Y as I};