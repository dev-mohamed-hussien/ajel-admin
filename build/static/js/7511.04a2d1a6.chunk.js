"use strict";(self.webpackChunkAjel_admin=self.webpackChunkAjel_admin||[]).push([[7511,135],{5645:function(e,t,r){var n=r(9139),s=(r(7313),r(7393)),a=r(5554),o=r(4267),i=r(6417);t.Z=function(e,t){return function(r){var d=(0,a.v9)((function(e){return e.profile})).data;return(0,o.Zu)(e,t,d)?r:function(){return(0,i.jsx)(n.ZP,{status:"403",title:"403",subTitle:(0,i.jsx)(s.Z,{id:"message.unauthorized"})})}}}},4534:function(e,t,r){r.r(t);var n=r(9439),s=r(7313),a=r(3591),o=r(6059),i=r(5239),d=r(9918),c=r(2870),l=r(9491),u=r(8197),m=r(9624),x=r(3375),h=r(685),f=r(7393),p=r(5554),g=r(8467),Z=r(9888),j=r(7515),v=r(9432),A=r(1245),b=r(4335),y=r(5645),N=r(34),k=r(4267),w=r(6417);t.default=(0,N.Z)((function(){var e=(0,g.TH)().pathname.split("/").filter((function(e){return e})),t=("/".concat(e.slice(0,2).join("/")),(0,p.v9)((function(e){return e.Auth})).idToken),r=(0,p.v9)((function(e){return e.LanguageSwitcher.language})).locale,y=(0,g.UO)().id,N=(0,A.Z)(),P=(0,n.Z)(N,1)[0],O=(0,g.s0)(),S=(0,s.useState)(!1),_=(0,n.Z)(S,2),C=_[0],B=_[1],E=(0,s.useState)(!1),z=(0,n.Z)(E,2),F=z[0],I=z[1],T=(0,s.useState)(!1),L=(0,n.Z)(T,2),U=L[0],X=(L[1],(0,s.useState)(0)),D=(0,n.Z)(X,2),R=D[0],q=D[1],V=(0,s.useState)(!1),Y=(0,n.Z)(V,2),H=Y[0],K=Y[1];(0,s.useEffect)((function(){}),[]),(0,s.useEffect)((function(){y&&(I(!0),a.Z[b.config.findOne.method]("".concat(b.config.findOne.url,"/").concat(y),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}).then((function(e){P.setFieldsValue(e.data.data),I(!1)})).catch((function(e){I(!1)})))}),[y,t,P]);var G=(0,p.v9)((function(e){return e.profile.data}));return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(d.Z,{spinning:F||U,children:[(0,w.jsx)("div",{className:"flex flex-row-reverse",children:y&&(0,k.Zu)(b.config.delete.url,b.config.delete.type,G)?(0,w.jsx)(c.Z,{title:(0,w.jsx)(f.Z,{id:"delete.deleteItem"}),description:(0,w.jsx)(f.Z,{id:"delete.areYouSure"}),onConfirm:function(){return K(!0),void o.Am.promise(a.Z[b.config.delete.method]("".concat(b.config.delete.url,"/").concat(y),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:"ar"===r?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var t=e.data.message;return O(-1),K(!1),t||"Backend Error Occured"},error:function(e){var t,r;return K(!1),(null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Backend Error Occured"}})},icon:(0,w.jsx)(Z.Z,{style:{color:"red"}}),children:(0,w.jsx)(l.ZP,{loading:H,icon:(0,w.jsx)(j.Z,{}),type:"primary",danger:!0,children:(0,w.jsx)(f.Z,{id:"delete"})})}):""}),(0,w.jsx)(u.Z,{children:(0,w.jsx)(m.Z,{span:24,children:(0,w.jsxs)(x.Z,{form:P,onFinish:function(e){var n=new FormData;for(var s in e)n.append(s,e[s]);"post"===b.config.edit.method&&y&&n.append("_method","put"),B(!0),o.Am.promise(a.Z[y?b.config.edit.method:b.config.add.method](y?"".concat(b.config.edit.url,"/").concat(y):b.config.add.url,e,{onUploadProgress:function(e){var t=e.loaded/e.total*100;q(t)},headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:(0,w.jsxs)("div",{className:"min-w-[200px]",children:["ar"===r?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",(0,w.jsx)("div",{children:R?(0,w.jsx)(i.Z,{percent:R}):null})]}),success:function(e){var t=e.data.message;return O(-1),B(!1),q(0),t||"Backend Error Occured"},error:function(e){var t,r;return B(!1),q(0),(null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Backend Error Occured"}})},layout:"vertical",className:"login-form",children:[(0,w.jsx)(x.Z.Item,{label:(0,w.jsx)(f.Z,{id:"name_en"}),name:"name_en",rules:[{required:!0,message:(0,w.jsx)(f.Z,{id:"name_en"})}],children:(0,w.jsx)(h.Z,{type:"text",size:"large"})}),(0,w.jsx)(x.Z.Item,{label:(0,w.jsx)(f.Z,{id:"name_ar"}),name:"name_ar",rules:[{required:!0,message:(0,w.jsx)(f.Z,{id:"name_ar"})}],children:(0,w.jsx)(h.Z,{type:"text",size:"large"})}),(0,w.jsxs)("div",{className:"flex gap-4 flex-wrap mt-8",children:[(0,w.jsx)(l.ZP,{className:"w-[90px]",icon:(0,w.jsx)(v.Z,{}),loading:C,type:"primary",htmlType:"submit",children:(0,w.jsx)("span",{children:(0,w.jsx)(f.Z,{id:"global.save"})})}),(0,w.jsx)(l.ZP,{onClick:function(){return O(-1)},className:"w-[90px]",children:(0,w.jsx)(f.Z,{id:"global.back"})})]})]})})})]})})}),[(0,y.Z)(b.config.edit.url,b.config.edit.type)])},4335:function(e,t,r){r.r(t),r.d(t,{config:function(){return N}});var n=r(3433),s=r(1413),a=r(9439),o=r(7313),i=r(9095),d=r(3566),c=r(2006),l=r(2019),u=r(1741),m=r(9888),x=r(7515),h=r(8467),f=r(6059),p=r(9491),g=r(2870),Z=r(5554),j=r(3591),v=r(7393),A=r(34),b=r(4267),y=r(6417),N={add:{url:"areas",method:"post",type:"create"},edit:{url:"areas",method:"put",type:"update"},delete:{url:"areas",method:"delete",type:"delete"},findOne:{url:"school/get",method:"get",type:"read"}};t.default=(0,A.Z)((function(){var e=(0,Z.v9)((function(e){return e.profile.data})),t=(0,h.s0)(),r=(0,Z.v9)((function(e){return e.Auth})).idToken,A=(0,Z.v9)((function(e){return e.LanguageSwitcher.language})).locale,k=(0,o.useState)(!1),w=(0,a.Z)(k,2),P=w[0],O=w[1],S={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("header",{className:"bg-white py-6 px-10 flex justify-between items-center",children:[(0,y.jsx)("h1",{className:"text-2xl font-bold",children:"Schools List"}),(0,y.jsxs)("div",{className:"flex gap-4",children:[(0,y.jsx)(p.ZP,{className:"text-base p-3 rounded h-auto ",type:"default",children:"Import From CSV"}),(0,y.jsx)(p.ZP,{className:"text-base p-3 rounded h-auto ",type:"primary",children:"Add Schoold"})]})]}),(0,y.jsxs)("main",{className:"p-4",children:[(0,y.jsxs)("section",{className:"stats-section grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,auto))]",children:[(0,y.jsxs)("div",{className:"p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg",children:[(0,y.jsx)("h1",{className:" text-xs text-[#A3A7AA] ",children:"No. of schools"}),(0,y.jsx)("h2",{className:" text-sm font-medium",children:"200"})]}),(0,y.jsxs)("div",{className:"p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg",children:[(0,y.jsx)("h1",{className:" text-xs text-[#A3A7AA] ",children:"No. of schools"}),(0,y.jsx)("h2",{className:" text-sm font-medium",children:"200"})]}),(0,y.jsxs)("div",{className:"p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg",children:[(0,y.jsx)("h1",{className:" text-xs text-[#A3A7AA] ",children:"No. of schools"}),(0,y.jsx)("h2",{className:" text-sm font-medium",children:"200"})]}),(0,y.jsxs)("div",{className:"p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg",children:[(0,y.jsx)("h1",{className:" text-xs text-[#A3A7AA] ",children:"No. of schools"}),(0,y.jsx)("h2",{className:" text-sm font-medium",children:"200"})]})]}),(0,y.jsx)(i.Z,{rowClassName:function(e,t){return t%2===0?"odd-row":"even-row"},rowSelection:(0,s.Z)({type:"checkbox"},S),getData:function(e){return""},config:N,url:"areas",refresher:P,addURL:"add",cols:(0,d._)([(0,s.Z)({title:"name",key:"name",sorter:!0},(0,c.Z)()),(0,s.Z)({title:"username",sorter:!0,key:"username"},(0,c.Z)()),{title:"contact_number",sorter:!0,key:"contact_number"},{title:"government",sorter:!0,key:"government"},{title:"city",sorter:!0,key:"city"},{title:"status",sorter:!0,key:"status"}].concat((0,n.Z)((0,b.Zu)(N.edit.url,N.edit.type,e)||(0,b.Zu)(N.findOne.url,N.findOne.type,e)||(0,b.Zu)(N.delete.url,N.delete.type,e)?[{title:"actions",content:function(n,s){return(0,y.jsxs)("div",{className:"flex gap-2",children:[(0,b.Zu)(N.edit.url,N.edit.type,e)?(0,y.jsx)(p.ZP,{onClick:function(){return t("edit/".concat(s.id))},icon:(0,y.jsx)(l.Z,{},"edit")}):"",(0,b.Zu)(N.findOne.url,N.findOne.type,e)?(0,y.jsx)(p.ZP,{onClick:function(){return t("show/".concat(s.id))},icon:(0,y.jsx)(u.Z,{},"show")}):"",(0,b.Zu)(N.delete.url,N.delete.type,e)?(0,y.jsx)(g.Z,{title:(0,y.jsx)(v.Z,{id:"delete.deleteItem"}),description:(0,y.jsx)(v.Z,{id:"delete.areYouSure"}),onConfirm:function(){return e=s.id,void f.ZP.promise(j.Z[N.delete.method]("".concat(N.delete.url,"/").concat(e),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(r)}}),{loading:"ar"===A?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var t=e.data.message;return O((function(e){return!e})),t||"Backend Error Occured"},error:function(e){var t,r;return(null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Backend Error Occured"}});var e},icon:(0,y.jsx)(m.Z,{style:{color:"red"}}),children:(0,y.jsx)(p.ZP,{icon:(0,y.jsx)(x.Z,{}),type:"primary",danger:!0})}):""]})}}]:[])))})]})]})}),[])}}]);