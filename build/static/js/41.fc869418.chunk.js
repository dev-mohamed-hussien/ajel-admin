"use strict";(self.webpackChunkAjel_admin=self.webpackChunkAjel_admin||[]).push([[41,7274],{5645:function(e,n,t){var r=t(9139),i=(t(7313),t(7393)),a=t(5554),o=t(4267),c=t(6417);n.Z=function(e,n){return function(t){var d=(0,a.v9)((function(e){return e.profile})).data;return(0,o.Zu)(e,n,d)?t:function(){return(0,c.jsx)(r.ZP,{status:"403",title:"403",subTitle:(0,c.jsx)(i.Z,{id:"message.unauthorized"})})}}}},4820:function(e,n,t){t.r(n),t.d(n,{config:function(){return O}});var r=t(1413),i=t(3433),a=t(9439),o=t(7313),c=t(9095),d=t(3566),u=t(2006),s=t(2019),l=t(1741),f=t(9888),Z=t(7515),x=t(8467),h=t(6059),j=t(9491),m=t(2870),p=t(5554),g=t(3591),v=t(7393),y=t(4267),k=t(6417),O={add:{url:"BusinessCategories",method:"post",type:"create"},edit:{url:"BusinessCategories",method:"put",type:"update"},delete:{url:"BusinessCategories",method:"delete",type:"delete"},findOne:{url:"BusinessCategories",method:"get",type:"read"}};n.default=function(){var e=(0,x.s0)(),n=(0,p.v9)((function(e){return e.profile.data})),t=(0,p.v9)((function(e){return e.Auth})).idToken,_=(0,p.v9)((function(e){return e.LanguageSwitcher.language})).locale,b=(0,o.useState)(!1),B=(0,a.Z)(b,2),C=B[0],P=B[1];return(0,k.jsx)(c.Z,{config:O,url:"BusinessCategories",refresher:C,addURL:"add",cols:(0,d._)([(0,r.Z)({title:"name_en",key:"name_en",sorter:!0},(0,u.Z)()),(0,r.Z)({title:"name_ar",key:"name_ar",sorter:!0},(0,u.Z)())].concat((0,i.Z)((0,y.Zu)(O.edit.url,O.edit.type,n)||(0,y.Zu)(O.findOne.url,O.findOne.type,n)||(0,y.Zu)(O.delete.url,O.delete.type,n)?[{title:"actions",content:function(r,i){return(0,k.jsxs)("div",{className:"flex gap-2",children:[(0,y.Zu)(O.edit.url,O.edit.type,n)?(0,k.jsx)(j.ZP,{onClick:function(){return e("edit/".concat(i.id))},icon:(0,k.jsx)(s.Z,{},"edit")}):"",(0,y.Zu)(O.findOne.url,O.findOne.type,n)?(0,k.jsx)(j.ZP,{onClick:function(){return e("show/".concat(i.id))},icon:(0,k.jsx)(l.Z,{},"show")}):"",(0,y.Zu)(O.delete.url,O.delete.type,n)?(0,k.jsx)(m.Z,{title:(0,k.jsx)(v.Z,{id:"delete.deleteItem"}),description:(0,k.jsx)(v.Z,{id:"delete.areYouSure"}),onConfirm:function(){return e=i.id,void h.ZP.promise(g.Z[O.delete.method]("/api/".concat(O.delete.url,"/").concat(e),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:"ar"===_?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var n=e.data.message;return P((function(e){return!e})),n||"Backend Error Occured"},error:function(e){var n,t;return(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}});var e},icon:(0,k.jsx)(f.Z,{style:{color:"red"}}),children:(0,k.jsx)(j.ZP,{icon:(0,k.jsx)(Z.Z,{}),type:"primary",danger:!0})}):""]})}}]:[])))})}},5877:function(e,n,t){t.r(n);var r=t(9439),i=t(7313),a=t(3591),o=t(6059),c=t(9918),d=t(8197),u=t(9624),s=t(4988),l=t(9491),f=t(2870),Z=t(7393),x=t(5554),h=t(8467),j=t(9888),m=t(7515),p=t(4820),g=t(34),v=t(5645),y=t(4267),k=t(6417);n.default=(0,g.Z)((function(){var e,n,t,g=(0,h.TH)().pathname.split("/").filter((function(e){return e})),v=("/".concat(g.slice(0,2).join("/")),(0,x.v9)((function(e){return e.profile.data}))),O=(0,x.v9)((function(e){return e.Auth})).idToken,_=(0,x.v9)((function(e){return e.LanguageSwitcher.language})).locale,b=(0,h.UO)().id,B=(0,h.s0)(),C=(0,i.useState)(!1),P=(0,r.Z)(C,2),w=P[0],A=P[1],S=(0,i.useState)(!1),N=(0,r.Z)(S,2),E=N[0],I=N[1],z=(0,i.useState)({}),T=(0,r.Z)(z,2),D=T[0],L=T[1];return(0,i.useEffect)((function(){b&&(I(!0),a.Z[p.config.findOne.method]("".concat(p.config.findOne.url,"/").concat(b),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(O)}}).then((function(e){L(e.data.data),I(!1)})).catch((function(e){I(!1)})))}),[b,O]),(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(c.Z,{spinning:E,children:(0,k.jsx)(d.Z,{children:(0,k.jsxs)(u.Z,{span:24,children:[(0,k.jsxs)(s.Z,{bordered:!0,title:(0,k.jsx)(Z.Z,{id:"show"}),children:[(0,k.jsx)(s.Z.Item,{span:3,label:(0,k.jsx)(Z.Z,{id:"name_en"}),children:null!==(e=D.name_en)&&void 0!==e?e:(0,k.jsx)("div",{className:"text-[#ccc]",children:(0,k.jsx)(Z.Z,{id:"noData"})})}),(0,k.jsx)(s.Z.Item,{span:3,label:(0,k.jsx)(Z.Z,{id:"name_ar"}),children:null!==(n=D.name_ar)&&void 0!==n?n:(0,k.jsx)("div",{className:"text-[#ccc]",children:(0,k.jsx)(Z.Z,{id:"noData"})})}),(0,k.jsx)(s.Z.Item,{span:3,label:(0,k.jsx)(Z.Z,{id:"department_name"}),children:null!==(t=D.department_name)&&void 0!==t?t:(0,k.jsx)("div",{className:"text-[#ccc]",children:(0,k.jsx)(Z.Z,{id:"noData"})})})]}),(0,k.jsxs)("div",{className:"flex gap-4 flex-wrap mt-8",children:[(0,k.jsx)(l.ZP,{onClick:function(){return B(-1)},className:"w-[90px]",children:(0,k.jsx)(Z.Z,{id:"global.back"})}),b&&(0,y.Zu)(p.config.delete.url,p.config.delete.type,v)?(0,k.jsx)(f.Z,{title:(0,k.jsx)(Z.Z,{id:"delete.deleteItem"}),description:(0,k.jsx)(Z.Z,{id:"delete.areYouSure"}),onConfirm:function(){return A(!0),void o.Am.promise(a.Z[p.config.delete.method]("".concat(p.config.delete.url,"/").concat(b),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(O)}}),{loading:"ar"===_?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var n=e.data.message;return B(-1),A(!1),n||"Backend Error Occured"},error:function(e){var n,t;return A(!1),(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}})},icon:(0,k.jsx)(j.Z,{style:{color:"red"}}),children:(0,k.jsx)(l.ZP,{loading:w,icon:(0,k.jsx)(m.Z,{}),type:"primary",danger:!0,children:(0,k.jsx)(Z.Z,{id:"delete"})})}):""]})]})})})})}),[(0,v.Z)(p.config.findOne.url,p.config.findOne.type)])},34:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1413),i=(t(7313),t(6417));function a(e,n){return function(t){if(0===n.length||!n)return(0,i.jsx)(e,{});var a=function(){return(0,i.jsx)("h1",{children:"You should return component or next function"})},o=function(e,n,t){var r=0;return n[r](e,(function i(a){return++r<n.length?n[r](e,i):t(e)}))}(e,n,(function(e){return e}));return o?(0,i.jsx)(o,(0,r.Z)({},t)):(0,i.jsx)(a,{})}}}}]);