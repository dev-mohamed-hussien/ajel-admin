"use strict";(self.webpackChunkAjel_admin=self.webpackChunkAjel_admin||[]).push([[4643],{5018:function(e,n,t){t(7313);var r=t(9491),a=t(4523),i=t(4256),s=t(5554),l=t(3887),c=t(2434),o=t(6417),u=l.Z.changeLanguage;c.Z.changeTheme;n.Z=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.LanguageSwitcher.language}));return(0,o.jsx)(a.Z,{trigger:["click"],menu:{items:i.Z.options.map((function(n){return{label:(0,o.jsxs)(r.ZP,{type:"text",className:"hover:!bg-transparent focus-visible:!outline-none px-2  m-1 flex gap-1 ".concat("ar"===n.locale?"ar-font":""),onClick:function(){e(u(n.languageId))},children:[n.text," ",n.icon]}),key:n.languageId}})),selectable:!0,defaultSelectedKeys:[n.languageId]},children:(0,o.jsxs)(r.ZP,{type:"text",className:"".concat("ar"===n.locale?"ar-font":""," flex gap-1 px-1"),children:[(0,o.jsx)("span",{className:"md:inline hidden",children:n.text}),n.icon]})})}},6864:function(e,n,t){t.d(n,{A:function(){return l},C:function(){return s}});var r=t(7313),a=t(5554),i=t(8467);function s(e,n){var t=(0,a.v9)((function(e){return e.Auth})).idToken,s=(0,i.s0)();return(0,r.useLayoutEffect)((function(){t&&s("/dashboard")}),[t]),e}function l(e,n){var t=(0,a.v9)((function(e){return e.Auth})).idToken,s=(0,i.s0)();return(0,r.useLayoutEffect)((function(){t||s("/login")}),[t]),e}},8694:function(e,n,t){t.r(n);var r=t(9439),a=t(1868),i=t(5508),s=t(3375),l=t(685),c=t(2697),o=t(9491),u=t(7313),d=t(5018),f=t(531),m=t(2518),g=t(5554),h=t(34),x=t(6864),p=t(3591),v=t(6059),Z=t(7393),j=t(7692),b=t(4267),w=t(6417),y=j.Z.Title,k=f.Z.login,N=m.Z.fetchProfileDataSuccess;n.default=(0,h.Z)((function(){var e=(0,g.I0)(),n=(0,g.v9)((function(e){return e.LanguageSwitcher.language})).locale,t=(0,g.v9)((function(e){return e.ThemeSwitcher.theme})),f=a.Z.useToken().token,m=(0,u.useState)(!1),h=(0,r.Z)(m,2),x=h[0],j=h[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"w-full container mx-auto p-6 box-border",children:(0,w.jsxs)("div",{className:"w-full flex items-center justify-between",children:[(0,w.jsx)("div",{className:"flex items-center  no-underline hover:no-underline font-bold text-2xl lg:text-4xl",children:(0,w.jsx)("img",{width:300,height:146,className:"h-[64px] w-auto",style:{filter:"darkAlgorithm"===t?"contrast(0.5)":""}},111)}),(0,w.jsx)("ul",{className:"flex gap-3 items-center",children:(0,w.jsxs)("li",{className:"isoUser flex",children:[" ",(0,w.jsx)(d.Z,{})," "]})})]})}),(0,w.jsx)(i.Z,{style:{minHeight:"calc(100dvh - 144px)"},children:(0,w.jsx)("div",{style:{minHeight:"calc(100dvh - 144px)"},className:"w-full flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0",children:(0,w.jsx)("div",{style:{backgroundColor:f.colorBgContainer},className:"w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0",children:(0,w.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,w.jsx)(y,{className:"!text-l font-bold leading-tight tracking-tight  md:!text-xl ",children:(0,w.jsx)(Z.Z,{id:"signin.signToYourAccount"})}),(0,w.jsxs)(s.Z,{layout:"vertical",initialValues:{remember:!0},onFinish:function(t){j(!0);var r=p.Z.post("/login",t,{headers:{"X-Portal":"dashboard"}});v.Am.promise(r,{loading:(0,w.jsx)("div",{className:"min-w-[200px]",children:"ar"===n?"\u062c\u0627\u0631\u064a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 ":"Pending"}),success:function(n){j(!1);var t=n.data,r=t.token,a=t.data,i=t.message;return e(k(r)),a.permissions&&(a.permissions=(0,b.Wh)(a.permissions)),e(N(a)),i||"Backend Message Error Occured"},error:function(e){var n,t;return j(!1),(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Backend Error Occured"}},{style:{minWidth:"250px"},success:{duration:3e3,icon:"\ud83d\udd25"}})},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,w.jsx)(s.Z.Item,{label:(0,w.jsx)(Z.Z,{id:"email"}),name:"email",rules:[{required:!0,message:(0,w.jsx)(Z.Z,{id:"email"})}],children:(0,w.jsx)(l.Z,{size:"large"})}),(0,w.jsx)(s.Z.Item,{label:(0,w.jsx)(Z.Z,{id:"password"}),name:"password",rules:[{required:!0,message:(0,w.jsx)(Z.Z,{id:"password"})}],children:(0,w.jsx)(l.Z.Password,{size:"large"})}),(0,w.jsx)(s.Z.Item,{name:"remember",valuePropName:"checked",children:(0,w.jsx)(c.Z,{children:(0,w.jsx)(Z.Z,{id:"page.signInRememberMe"})})}),(0,w.jsx)(s.Z.Item,{children:(0,w.jsx)(o.ZP,{type:"primary",size:"large",className:"w-full",htmlType:"submit",loading:x,children:(0,w.jsx)(Z.Z,{id:"page.signInButton"})})})]})]})})})})]})}),[x.C])},3591:function(e,n,t){var r,a,i,s,l,c,o,u,d=t(6573),f=t(4669),m=t(7325),g=t(7701),h=d.Z.create({baseURL:"".concat("https://ajel.appssquare.com","/"),headers:{"X-Language":null!==(r=null===(a=g.h.getState())||void 0===a||null===(i=a.LanguageSwitcher)||void 0===i||null===(s=i.language)||void 0===s?void 0:s.locale)&&void 0!==r?r:"en","Accept-Language":null!==(l=null===(c=g.h.getState())||void 0===c||null===(o=c.LanguageSwitcher)||void 0===o||null===(u=o.language)||void 0===u?void 0:u.locale)&&void 0!==l?l:"en"}});(0,f.ZP)(h,{retries:3}),(0,m.Z)(h),h.interceptors.request.use((function(e){return e})),h.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response&&403===e.response.status&&"/login"!==e.response.config.url);else if(401!==e.response.status||"/login"===e.response.config.url)return Promise.reject(e)})),n.Z=h},4267:function(e,n,t){t.d(n,{Wh:function(){return a},Zu:function(){return i}});var r=JSON.parse(localStorage.getItem("profile"));function a(e){var n={};return e.forEach((function(e){"object"!=typeof n[e.name.split("_")[1]]&&(n[e.name.split("_")[1]]={}),Object.defineProperty(n[e.name.split("_")[1]],e.name.split("_")[0],{enumerable:!0,configurable:!0,writable:!0,value:1})})),n}var i=function(e,n){var t,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;return!(null===i||void 0===i||null===(t=i.permissions)||void 0===t||null===(a=t[e])||void 0===a||!a[n])}},34:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1413),a=(t(7313),t(6417));function i(e,n){return function(t){if(0===n.length||!n)return(0,a.jsx)(e,{});var i=function(){return(0,a.jsx)("h1",{children:"You should return component or next function"})},s=function(e,n,t){var r=0;return n[r](e,(function a(i){return++r<n.length?n[r](e,a):t(e)}))}(e,n,(function(e){return e}));return s?(0,a.jsx)(s,(0,r.Z)({},t)):(0,a.jsx)(i,{})}}},9649:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},s=t(7469),l=function(e,n){return a.createElement(s.Z,(0,r.Z)({},e,{ref:n,icon:i}))};var c=a.forwardRef(l)},9888:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},s=t(7469),l=function(e,n){return a.createElement(s.Z,(0,r.Z)({},e,{ref:n,icon:i}))};var c=a.forwardRef(l)},5508:function(e,n,t){var r=t(3642),a=t(4071),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=a.Z,n.Z=i}}]);