"use strict";(self.webpackChunkAjel_admin=self.webpackChunkAjel_admin||[]).push([[2355,9360],{5645:function(e,n,t){var r=t(9139),i=(t(7313),t(7393)),a=t(5554),o=t(4267),c=t(6417);n.Z=function(e,n){return function(t){var d=(0,a.v9)((function(e){return e.profile})).data;return(0,o.Zu)(e,n,d)?t:function(){return(0,c.jsx)(r.ZP,{status:"403",title:"403",subTitle:(0,c.jsx)(i.Z,{id:"message.unauthorized"})})}}}},7644:function(e,n,t){t.r(n),t.d(n,{config:function(){return b}});var r=t(1413),i=t(3433),a=t(9439),o=t(7313),c=t(9095),d=t(3566),u=t(2006),l=t(2019),s=t(1741),f=t(9888),Z=t(7515),h=t(8467),x=t(6059),j=t(9491),p=t(2870),m=t(5554),g=t(3591),v=t(7393),y=t(34),k=t(5645),O=t(4267),P=t(6417),b={add:{url:"qualifications",method:"post",type:"create"},edit:{url:"qualifications",method:"put",type:"update"},delete:{url:"qualifications",method:"delete",type:"delete"},findOne:{url:"qualifications",method:"get",type:"read"}};n.default=(0,y.Z)((function(){var e=(0,h.s0)(),n=(0,m.v9)((function(e){return e.profile.data})),t=(0,m.v9)((function(e){return e.Auth})).idToken,y=(0,m.v9)((function(e){return e.LanguageSwitcher.language})).locale,k=(0,o.useState)(!1),_=(0,a.Z)(k,2),w=_[0],A=_[1];return(0,P.jsx)(c.Z,{config:b,url:"qualifications",refresher:w,addURL:"add",cols:(0,d._)([(0,r.Z)({title:"name_en",key:"name_en",sorter:!0},(0,u.Z)()),(0,r.Z)({title:"name_ar",key:"name_ar",sorter:!0},(0,u.Z)())].concat((0,i.Z)((0,O.Zu)(b.edit.url,b.edit.type,n)||(0,O.Zu)(b.findOne.url,b.findOne.type,n)||(0,O.Zu)(b.delete.url,b.delete.type,n)?[{title:"actions",content:function(r,i){return(0,P.jsxs)("div",{className:"flex gap-2",children:[(0,O.Zu)(b.edit.url,b.edit.type,n)?(0,P.jsx)(j.ZP,{onClick:function(){return e("edit/".concat(i.id))},icon:(0,P.jsx)(l.Z,{},"edit")}):"",(0,O.Zu)(b.findOne.url,b.findOne.type,n)?(0,P.jsx)(j.ZP,{onClick:function(){return e("show/".concat(i.id))},icon:(0,P.jsx)(s.Z,{},"show")}):"",(0,O.Zu)(b.delete.url,b.delete.type,n)?(0,P.jsx)(p.Z,{title:(0,P.jsx)(v.Z,{id:"delete.deleteItem"}),description:(0,P.jsx)(v.Z,{id:"delete.areYouSure"}),onConfirm:function(){return e=i.id,void x.ZP.promise(g.Z[b.delete.method]("".concat(b.delete.url,"/").concat(e),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:"ar"===y?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var n=e.data.message;return A((function(e){return!e})),n||"Backend Error Occured"},error:function(e){var n,t;return(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}});var e},icon:(0,P.jsx)(f.Z,{style:{color:"red"}}),children:(0,P.jsx)(j.ZP,{icon:(0,P.jsx)(Z.Z,{}),type:"primary",danger:!0})}):""]})}}]:[])))})}),[(0,k.Z)(b.findOne.url,b.findOne.type)])},6519:function(e,n,t){t.r(n);var r=t(9439),i=t(7313),a=t(3591),o=t(6059),c=t(9918),d=t(8197),u=t(9624),l=t(4988),s=t(9491),f=t(2870),Z=t(7393),h=t(5554),x=t(8467),j=t(9888),p=t(7515),m=t(7644),g=t(5645),v=t(34),y=t(4267),k=t(6417);n.default=(0,v.Z)((function(){var e,n,t=(0,x.TH)().pathname.split("/").filter((function(e){return e})),g=("/".concat(t.slice(0,2).join("/")),(0,h.v9)((function(e){return e.profile.data}))),v=(0,h.v9)((function(e){return e.Auth})).idToken,O=(0,h.v9)((function(e){return e.LanguageSwitcher.language})).locale,P=(0,x.UO)().id,b=(0,x.s0)(),_=(0,i.useState)(!1),w=(0,r.Z)(_,2),A=w[0],S=w[1],B=(0,i.useState)(!1),C=(0,r.Z)(B,2),q=C[0],E=C[1],N=(0,i.useState)({}),z=(0,r.Z)(N,2),I=z[0],T=z[1];return(0,i.useEffect)((function(){P&&(E(!0),a.Z[m.config.findOne.method]("".concat(m.config.findOne.url,"/").concat(P),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(v)}}).then((function(e){T(e.data.data),E(!1)})).catch((function(e){E(!1)})))}),[P,v]),(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(c.Z,{spinning:q,children:(0,k.jsx)(d.Z,{children:(0,k.jsxs)(u.Z,{span:24,children:[(0,k.jsxs)(l.Z,{bordered:!0,title:(0,k.jsx)(Z.Z,{id:"show"}),children:[(0,k.jsx)(l.Z.Item,{span:3,label:(0,k.jsx)(Z.Z,{id:"name_en"}),children:null!==(e=I.name_en)&&void 0!==e?e:(0,k.jsx)("div",{className:"text-[#ccc]",children:(0,k.jsx)(Z.Z,{id:"noData"})})}),(0,k.jsx)(l.Z.Item,{span:3,label:(0,k.jsx)(Z.Z,{id:"name_ar"}),children:null!==(n=I.name_ar)&&void 0!==n?n:(0,k.jsx)("div",{className:"text-[#ccc]",children:(0,k.jsx)(Z.Z,{id:"noData"})})})]}),(0,k.jsxs)("div",{className:"flex gap-4 flex-wrap mt-8",children:[(0,k.jsx)(s.ZP,{onClick:function(){return b(-1)},className:"w-[90px]",children:(0,k.jsx)(Z.Z,{id:"global.back"})}),P&&(0,y.Zu)(m.config.delete.url,m.config.delete.type,g)?(0,k.jsx)(f.Z,{title:(0,k.jsx)(Z.Z,{id:"delete.deleteItem"}),description:(0,k.jsx)(Z.Z,{id:"delete.areYouSure"}),onConfirm:function(){return S(!0),void o.Am.promise(a.Z[m.config.delete.method]("".concat(m.config.delete.url,"/").concat(P),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(v)}}),{loading:"ar"===O?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var n=e.data.message;return b(-1),S(!1),n||"Backend Error Occured"},error:function(e){var n,t;return S(!1),(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}})},icon:(0,k.jsx)(j.Z,{style:{color:"red"}}),children:(0,k.jsx)(s.ZP,{loading:A,icon:(0,k.jsx)(p.Z,{}),type:"primary",danger:!0,children:(0,k.jsx)(Z.Z,{id:"delete"})})}):""]})]})})})})}),[(0,g.Z)(m.config.findOne.url,m.config.findOne.type)])},34:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1413),i=(t(7313),t(6417));function a(e,n){return function(t){if(0===n.length||!n)return(0,i.jsx)(e,{});var a=function(){return(0,i.jsx)("h1",{children:"You should return component or next function"})},o=function(e,n,t){var r=0;return n[r](e,(function i(a){return++r<n.length?n[r](e,i):t(e)}))}(e,n,(function(e){return e}));return o?(0,i.jsx)(o,(0,r.Z)({},t)):(0,i.jsx)(a,{})}}}}]);