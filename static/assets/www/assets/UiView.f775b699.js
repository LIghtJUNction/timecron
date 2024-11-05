import{f as _,aC as j,aD as q,r as v,W as F,o as I,g as G,h as o,a as e,b as t,c as L,X as H,m as R,R as E,u as l,p as n,T as J,A as K,n as X,a2 as Q,I as Y,k as f,M as b,O as x,z as g,aE as Z,aF as ll,aG as ol,aH as W,aI as el,N as U,aJ as m,aK as O,aL as nl,J as tl,C as al,aM as il}from"./index.62c2fd96.js";import{_ as M,a as T}from"./CardBoxModal.413b2fd1.js";import{_ as C}from"./SectionTitle.a94b9082.js";import{_ as z}from"./FormField.28284586.js";import{_ as A}from"./FormCheckRadioGroup.08e3f5e4.js";import"./FormCheckRadio.602e6d51.js";const sl={class:"flex flex-col md:flex-row items-center"},ul={class:"text-center md:text-left md:py-2"},D={__name:"NotificationBar",props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,required:!0},small:Boolean},setup(N){const h=N,B=_(()=>h.outline?j[h.color]:q[h.color]),w=v(!1),y=()=>{w.value=!0},c=F(),p=_(()=>c.right);return(a,s)=>w.value?R("",!0):(I(),G("div",{key:0,class:X([l(B),"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"])},[o(K,null,{default:e(()=>[t("div",sl,[N.icon?(I(),L(H,{key:0,path:N.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"])):R("",!0),t("span",ul,[E(a.$slots,"default")])]),l(p)?E(a.$slots,"right",{key:0}):(I(),L(n,{key:1,icon:l(J),small:"","rounded-full":"",color:"white",onClick:y},null,8,["icon"]))]),_:3})],2))}},dl=t("p",null,"This is sample modal",-1),cl=t("p",null,"Lorem ipsum dolor",-1),rl=t("p",null,"This is sample modal",-1),ml=t("p",null,"Lorem ipsum dolor",-1),fl=t("p",null,"This is sample modal",-1),_l=t("p",null,"Lorem ipsum dolor",-1),bl={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},pl={class:"space-y-12"},gl=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),hl=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),vl=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),wl=t("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1),xl={class:"flex items-center justify-center mt-6"},Cl=t("b",null,"Info state",-1),Bl=t("b",null,"Success state",-1),yl=t("b",null,"Warning state",-1),kl=t("b",null,"Danger state",-1),$l=t("b",null,"Contrast",-1),Vl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Sl=t("div",{class:"space-y-3"},[t("p",null,"Card with title, icon & footer")],-1),Al={__name:"UiView",setup(N){const h=v(!1),B=v(!1),w=v(!1),y=v([]),c=_(()=>y.value.indexOf("outline")>-1),p=v([]),a=_(()=>p.value.indexOf("outline")>-1),s=_(()=>p.value.indexOf("small")>-1),u=_(()=>p.value.indexOf("disabled")>-1),d=_(()=>p.value.indexOf("rounded")>-1),k=v(["icon"]),$=_(()=>k.value.indexOf("outline")>-1),V=_(()=>k.value.indexOf("small")>-1),S=_(()=>k.value.indexOf("icon")>-1?il:null),P=Q();return(Ol,i)=>(I(),L(Y,null,{default:e(()=>[o(M,{modelValue:h.value,"onUpdate:modelValue":i[0]||(i[0]=r=>h.value=r),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[dl,cl]),_:1},8,["modelValue"]),o(M,{modelValue:B.value,"onUpdate:modelValue":i[1]||(i[1]=r=>B.value=r),title:"Unhandled exception",button:"danger"},{default:e(()=>[rl,ml]),_:1},8,["modelValue"]),o(M,{modelValue:w.value,"onUpdate:modelValue":i[2]||(i[2]=r=>w.value=r),title:"Success",button:"success"},{default:e(()=>[fl,_l]),_:1},8,["modelValue"]),o(C,{first:""},{default:e(()=>[f("Dark mode")]),_:1}),o(x,null,{default:e(()=>[o(b,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[t("div",bl,[o(n,{label:"Toggle",color:"contrast",onClick:i[3]||(i[3]=r=>l(P).setDarkMode())})])]),_:1})]),_:1}),o(C,null,{default:e(()=>[f("Modal examples")]),_:1}),o(x,null,{default:e(()=>[t("div",pl,[o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:i[4]||(i[4]=r=>h.value=!0)},{footer:e(()=>[o(g,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(T,{title:"Please confirm action"},{default:e(()=>[o(n,{icon:l(J),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),gl]),_:1}),o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:i[5]||(i[5]=r=>B.value=!0)},{footer:e(()=>[o(g,null,{default:e(()=>[o(n,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[o(T,{title:"Unhandled exception"}),hl]),_:1}),o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:i[6]||(i[6]=r=>w.value=!0)},{footer:e(()=>[o(n,{label:"Done",color:"success"})]),default:e(()=>[o(T,{title:"Success"}),vl]),_:1})])]),_:1}),o(C,{custom:""},{default:e(()=>[wl,t("div",xl,[o(A,{modelValue:y.value,"onUpdate:modelValue":i[7]||(i[7]=r=>y.value=r),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(x,null,{default:e(()=>[o(D,{color:"info",icon:l(Z),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"info":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Cl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),o(D,{color:"success",icon:l(ll),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"success":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Bl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),o(D,{color:"warning",icon:l(ol),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"warning":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[yl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),o(D,{color:"danger",icon:l(W),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"danger":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[kl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),o(D,{color:"contrast",icon:l(el),outline:l(c)},{default:e(()=>[$l,f(". NotificationBar ")]),_:1},8,["icon","outline"])]),_:1}),o(C,null,{default:e(()=>[f("Buttons")]),_:1}),o(x,null,{default:e(()=>[o(b,null,{default:e(()=>[o(z,{label:"Settings"},{default:e(()=>[o(A,{modelValue:p.value,"onUpdate:modelValue":i[8]||(i[8]=r=>p.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o(U),o(g,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o(U),o(g,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o(U),o(g,null,{default:e(()=>[o(n,{color:"lightDark",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",icon:l(m),small:l(s),outline:l(a),disabled:l(u),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[f("Pills")]),_:1}),o(x,null,{default:e(()=>[o(b,null,{default:e(()=>[o(z,{label:"Settings"},{default:e(()=>[o(A,{modelValue:k.value,"onUpdate:modelValue":i[9]||(i[9]=r=>k.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),o(U),o(g,null,{default:e(()=>[o(O,{color:"contrast",label:"Contrast",small:l(V),outline:l($),icon:l(S)},null,8,["small","outline","icon"]),o(O,{color:"info",label:"Info",small:l(V),outline:l($),icon:l(S)},null,8,["small","outline","icon"]),o(O,{color:"success",label:"Success",small:l(V),outline:l($),icon:l(S)},null,8,["small","outline","icon"]),o(O,{color:"warning",label:"Warning",small:l(V),outline:l($),icon:l(S)},null,8,["small","outline","icon"]),o(O,{color:"danger",label:"Danger",small:l(V),outline:l($),icon:l(S)},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[f("Cards")]),_:1}),o(x,null,{default:e(()=>[t("div",Vl,[o(b,null,{footer:e(()=>[o(g,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(T,{title:"With title & icon"},{default:e(()=>[o(n,{icon:l(nl),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),Sl]),_:1}),o(b,null,{footer:e(()=>[o(g,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[f(" Just body & footer ")]),_:1})]),o(tl,{icon:l(W),title:"Empty variation"},null,8,["icon"]),o(b,null,{default:e(()=>[o(al)]),_:1})]),_:1})]),_:1}))}};export{Al as default};
