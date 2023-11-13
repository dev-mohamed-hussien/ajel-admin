"use strict";(self.webpackChunkAjel_admin=self.webpackChunkAjel_admin||[]).push([[2863,5096,7664],{5645:function(e,n,t){var r=t(9139),a=(t(7313),t(7393)),i=t(5554),o=t(4267),d=t(6417);n.Z=function(e,n){return function(t){var s=(0,i.v9)((function(e){return e.profile})).data;return(0,o.Zu)(e,n,s)?t:function(){return(0,d.jsx)(r.ZP,{status:"403",title:"403",subTitle:(0,d.jsx)(a.Z,{id:"message.unauthorized"})})}}}},3608:function(e,n,t){t.r(n);var r=t(5645),a=t(8655),i=t(34),o=t(3300),d=t(6417);n.default=(0,i.Z)((function(){return(0,d.jsx)(a.default,{})}),[(0,r.Z)(o.config.add.url,o.config.add.type)])},8655:function(e,n,t){t.r(n);var r=t(9439),a=t(7313),i=t(3591),o=t(6059),d=t(6778),s=t(5239),c=t(9918),u=t(2870),l=t(9491),f=t(8197),Z=t(9624),m=t(3375),h=t(685),p=t(7393),x=t(5554),g=t(8467),j=t(9888),v=t(7515),y=t(9432),_=t(1245),k=t(3300),P=t(34),B=t(5645),b=t(4267),O=t(6417),w=d.Z.Option;n.default=(0,P.Z)((function(){var e=(0,g.TH)().pathname.split("/").filter((function(e){return e})),n=("/".concat(e.slice(0,2).join("/")),(0,x.v9)((function(e){return e.profile.data}))),t=(0,x.v9)((function(e){return e.Auth})).idToken,P=(0,x.v9)((function(e){return e.LanguageSwitcher.language})).locale,B=(0,g.UO)().id,C=(0,_.Z)(),A=(0,r.Z)(C,1)[0],S=(0,g.s0)(),z=(0,a.useState)(!1),E=(0,r.Z)(z,2),N=E[0],I=E[1],T=(0,a.useState)(!1),X=(0,r.Z)(T,2),F=X[0],q=X[1],L=(0,a.useState)(!1),U=(0,r.Z)(L,2),Y=U[0],D=U[1],H=(0,a.useState)([]),R=(0,r.Z)(H,2),V=R[0],G=R[1],J=(0,a.useState)(!1),K=(0,r.Z)(J,2),M=K[0],Q=K[1],W=(0,a.useState)(0),$=(0,r.Z)(W,2),ee=$[0],ne=$[1];return(0,a.useEffect)((function(){Q(!0),i.Z.get("departments",{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}).then((function(e){G(e.data.data),Q(!1)})).catch((function(){Q(!1)}))}),[t]),(0,a.useEffect)((function(){B&&(D(!0),i.Z[k.config.findOne.method]("".concat(k.config.findOne.url,"/").concat(B),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}).then((function(e){A.setFieldsValue(e.data.data),D(!1)})).catch((function(e){D(!1)})))}),[B,t,A]),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(c.Z,{spinning:Y||M,children:[(0,O.jsx)("div",{className:"flex flex-row-reverse",children:B&&(0,b.Zu)(k.config.delete.url,k.config.delete.type,n)?(0,O.jsx)(u.Z,{title:(0,O.jsx)(p.Z,{id:"delete.deleteItem"}),description:(0,O.jsx)(p.Z,{id:"delete.areYouSure"}),onConfirm:function(){return q(!0),void o.Am.promise(i.Z[k.config.delete.method]("".concat(k.config.delete.url,"/").concat(B),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:"ar"===P?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var n=e.data.message;return S(-1),q(!1),n||"Backend Error Occured"},error:function(e){var n,t;return q(!1),(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}})},icon:(0,O.jsx)(j.Z,{style:{color:"red"}}),children:(0,O.jsx)(l.ZP,{loading:F,icon:(0,O.jsx)(v.Z,{}),type:"primary",danger:!0,children:(0,O.jsx)(p.Z,{id:"delete"})})}):""}),(0,O.jsx)(f.Z,{children:(0,O.jsx)(Z.Z,{span:24,children:(0,O.jsxs)(m.Z,{form:A,onFinish:function(e){var n=new FormData;for(var r in e)n.append(r,e[r]);"post"===k.config.edit.method&&B&&n.append("_method","put"),I(!0),o.Am.promise(i.Z[B?k.config.edit.method:k.config.add.method](B?"".concat(k.config.edit.url,"/").concat(B):k.config.add.url,e,{onUploadProgress:function(e){var n=e.loaded/e.total*100;ne(n)},headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:(0,O.jsxs)("div",{className:"min-w-[200px]",children:["ar"===P?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",(0,O.jsx)("div",{children:ee?(0,O.jsx)(s.Z,{percent:ee}):null})]}),success:function(e){var n=e.data.message;return S(-1),I(!1),ne(0),n||"Backend Error Occured"},error:function(e){var n,t;return I(!1),ne(0),(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}})},layout:"vertical",className:"login-form",children:[(0,O.jsx)(m.Z.Item,{label:(0,O.jsx)(p.Z,{id:"name_en"}),name:"name_en",rules:[{required:!0,message:(0,O.jsx)(p.Z,{id:"name_en"})}],children:(0,O.jsx)(h.Z,{type:"text",size:"large"})}),(0,O.jsx)(m.Z.Item,{label:(0,O.jsx)(p.Z,{id:"name_ar"}),name:"name_ar",rules:[{required:!0,message:(0,O.jsx)(p.Z,{id:"name_ar"})}],children:(0,O.jsx)(h.Z,{type:"text",size:"large"})}),(0,O.jsx)(m.Z.Item,{label:(0,O.jsx)(p.Z,{id:"department_id"}),name:"department_id",rules:[{required:!0,message:(0,O.jsx)(p.Z,{id:"department_id"})}],children:(0,O.jsx)(d.Z,{size:"large",placeholder:(0,O.jsx)(p.Z,{id:"department_id"}),children:V.map((function(e){return(0,O.jsx)(w,{value:e.id,children:"ar"===P?e.name_ar:e.name_en},e.id)}))})}),(0,O.jsxs)("div",{className:"flex gap-4 flex-wrap mt-8",children:[(0,O.jsx)(l.ZP,{className:"w-[90px]",icon:(0,O.jsx)(y.Z,{}),loading:N,type:"primary",htmlType:"submit",children:(0,O.jsx)("span",{children:(0,O.jsx)(p.Z,{id:"global.save"})})}),(0,O.jsx)(l.ZP,{onClick:function(){return S(-1)},className:"w-[90px]",children:(0,O.jsx)(p.Z,{id:"global.back"})})]})]})})})]})})}),[(0,B.Z)(k.config.edit.url,k.config.edit.type)])},3300:function(e,n,t){t.r(n),t.d(n,{config:function(){return k}});var r=t(1413),a=t(3433),i=t(9439),o=t(7313),d=t(9095),s=t(3566),c=t(2006),u=t(2019),l=t(1741),f=t(9888),Z=t(7515),m=t(8467),h=t(6059),p=t(9491),x=t(2870),g=t(5554),j=t(3591),v=t(7393),y=t(4267),_=t(6417),k={add:{url:"BusinessCategories",method:"post",type:"create"},edit:{url:"BusinessCategories",method:"put",type:"update"},delete:{url:"BusinessCategories",method:"delete",type:"delete"},findOne:{url:"BusinessCategories",method:"get",type:"read"}};n.default=function(){var e=(0,m.s0)(),n=(0,g.v9)((function(e){return e.profile.data})),t=(0,g.v9)((function(e){return e.Auth})).idToken,P=(0,g.v9)((function(e){return e.LanguageSwitcher.language})).locale,B=(0,o.useState)(!1),b=(0,i.Z)(B,2),O=b[0],w=b[1];return(0,_.jsx)(d.Z,{config:k,url:"BusinessCategories",refresher:O,addURL:"add",cols:(0,s._)([(0,r.Z)({title:"name_en",key:"name_en",sorter:!0},(0,c.Z)()),(0,r.Z)({title:"name_ar",key:"name_ar",sorter:!0},(0,c.Z)())].concat((0,a.Z)((0,y.Zu)(k.edit.url,k.edit.type,n)||(0,y.Zu)(k.findOne.url,k.findOne.type,n)||(0,y.Zu)(k.delete.url,k.delete.type,n)?[{title:"actions",content:function(r,a){return(0,_.jsxs)("div",{className:"flex gap-2",children:[(0,y.Zu)(k.edit.url,k.edit.type,n)?(0,_.jsx)(p.ZP,{onClick:function(){return e("edit/".concat(a.id))},icon:(0,_.jsx)(u.Z,{},"edit")}):"",(0,y.Zu)(k.findOne.url,k.findOne.type,n)?(0,_.jsx)(p.ZP,{onClick:function(){return e("show/".concat(a.id))},icon:(0,_.jsx)(l.Z,{},"show")}):"",(0,y.Zu)(k.delete.url,k.delete.type,n)?(0,_.jsx)(x.Z,{title:(0,_.jsx)(v.Z,{id:"delete.deleteItem"}),description:(0,_.jsx)(v.Z,{id:"delete.areYouSure"}),onConfirm:function(){return e=a.id,void h.ZP.promise(j.Z[k.delete.method]("/api/".concat(k.delete.url,"/").concat(e),{headers:{"X-Portal":"dashboard",Authorization:"Bearer ".concat(t)}}),{loading:"ar"===P?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending",success:function(e){var n=e.data.message;return w((function(e){return!e})),n||"Backend Error Occured"},error:function(e){var n,t;return(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}});var e},icon:(0,_.jsx)(f.Z,{style:{color:"red"}}),children:(0,_.jsx)(p.ZP,{icon:(0,_.jsx)(Z.Z,{}),type:"primary",danger:!0})}):""]})}}]:[])))})}},34:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1413),a=(t(7313),t(6417));function i(e,n){return function(t){if(0===n.length||!n)return(0,a.jsx)(e,{});var i=function(){return(0,a.jsx)("h1",{children:"You should return component or next function"})},o=function(e,n,t){var r=0;return n[r](e,(function a(i){return++r<n.length?n[r](e,a):t(e)}))}(e,n,(function(e){return e}));return o?(0,a.jsx)(o,(0,r.Z)({},t)):(0,a.jsx)(i,{})}}}}]);