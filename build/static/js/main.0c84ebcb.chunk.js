(this.webpackJsonpshortly=this.webpackJsonpshortly||[]).push([[0],{126:function(e,t,s){},152:function(e,t,s){},162:function(e,t,s){},241:function(e,t,s){},247:function(e,t,s){},249:function(e,t,s){},250:function(e,t,s){},252:function(e,t,s){},273:function(e,t,s){},274:function(e,t,s){},275:function(e,t,s){},276:function(e,t,s){},277:function(e,t,s){},278:function(e,t,s){},280:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(37),c=s.n(i),r=(s(126),s(28)),o=s(11),l=s(38),d=s.n(l),u=d.a.create({baseURL:"https://shortly-mern.herokuapp.com",withCredentials:!0}),j=s(17),b=s(63),h=Object(b.b)({name:"user",initialState:{user:null,isLoggedIn:!1},reducers:{loginUser:function(e,t){e.user=t.payload,e.isLoggedIn=!0},logOutUser:function(e,t){e.user=null,e.isLoggedIn=!1}}}),m=h.actions,p=m.loginUser,O=m.logOutUser,g=function(e){return e.user.user},x=function(e){return e.user.isLoggedIn},f=h.reducer,_=s(6),v=s.n(_),N=s(14),y=s(5),k=(s(152),s.p+"static/media/logo.83464303.svg"),w=s(116),S=s.n(w),L=s(292),C=s(115),E=s.n(C),I=s(19),B=(s(162),s(58)),T=s.n(B),R=s(64),U=s(93),F=s(107);function P(e){var t={};return e.email=F(e.email)?"":e.email,e.password=F(e.password)?"":e.password,U.isEmpty(e.email)?t.email="Email field is required":U.isEmail(e.email)||(t.email="Email is invalid"),U.isEmpty(e.password)&&(t.password="Password field is required"),U.isLength(e.password,{min:6,max:30})||(t.password="Password must be at least 6 characters"),{errors:t,isValid:F(t)}}s(241);var A=s(2),M=function(e){var t=e.isSuccess,s=e.alertMessage;return Object(A.jsx)("div",{className:"alert",style:t?{backgroundColor:"#22bb33"}:{backgroundColor:"#bb2124"},children:s})},q=function(e){var t=e.closeModal,s=Object(R.a)(),n=s.register,i=s.handleSubmit,c=s.reset,l=Object(a.useState)(null),d=Object(y.a)(l,2),b=d[0],h=d[1],m=Object(a.useState)(!1),O=Object(y.a)(m,2),g=O[0],x=O[1],f=Object(a.useState)(!1),_=Object(y.a)(f,2),k=_[0],w=_[1],S=Object(a.useState)(!1),L=Object(y.a)(S,2),C=L[0],E=L[1],B=Object(a.useState)(""),U=Object(y.a)(B,2),F=U[0],q=U[1],H=Object(a.useState)(!1),J=Object(y.a)(H,2),D=J[0],z=J[1],G=Object(j.b)(),V=(Object(o.g)(),function(){var e=Object(N.a)(v.a.mark((function e(t){var s,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=P(t),console.log(s),!s.isValid){e.next=17;break}return x(!0),w(!0),h(null),e.next=8,u.post("/api/auth/login",JSON.stringify({email:t.email,password:t.password}),{headers:{"Content-Type":"application/json"}});case 8:return a=e.sent,console.log(a.data),a.data.loggedIn?(z(!0),G(p(a.data.user))):a.data.error?(z(!1),n=a.data.error,q(n),E(!0),setTimeout((function(){E(!1)}),5e3)):h(a.data.errors),x(!1),w(!1),c({}),e.abrupt("return");case 17:h(s.errors);case 18:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(A.jsxs)("div",{className:"login",children:[Object(A.jsx)("h3",{className:"login__heading",children:"Get Started"}),Object(A.jsxs)("form",{className:"login__form",onSubmit:i(V),children:[Object(A.jsx)("input",Object(I.a)(Object(I.a)({type:"text",className:"login__formInput",placeholder:"e.g demo@gmail.com"},n("email")),{},{style:(null===b||void 0===b?void 0:b.email)&&{border:"1px solid var(--red)"}})),Object(A.jsx)("span",{className:"loginEmailErr",children:b&&(null===b||void 0===b?void 0:b.email)}),Object(A.jsx)("input",Object(I.a)(Object(I.a)({type:"password",className:"login__formInput",placeholder:"Type your password.."},n("password")),{},{style:(null===b||void 0===b?void 0:b.password)&&{border:"1px solid var(--red)"}})),Object(A.jsx)("span",{className:"loginPassErr",children:b&&(null===b||void 0===b?void 0:b.password)}),Object(A.jsx)("button",{className:"login__formBtn",type:"submit",disabled:k,children:g?"Logging In..":"Log In"})]}),Object(A.jsx)(T.a,{onClick:t,style:{fontSize:"2rem"}}),Object(A.jsxs)("p",{className:"login__noAccount",children:["Don't have an account? Sign Up"," ",Object(A.jsx)(r.b,{to:"/register",children:Object(A.jsx)("span",{className:"login_goToLogin",children:"here"})})," ","for free."]}),C&&Object(A.jsx)(M,{isSuccess:D,alertMessage:F})]})},H=(s(247),s(93)),J=s(107);function D(e){var t={};return e.full_name=J(e.full_name)?"":e.full_name,e.email=J(e.email)?"":e.email,e.pass1=J(e.pass1)?"":e.pass1,e.pass2=J(e.pass2)?"":e.pass2,H.isEmpty(e.full_name)&&(t.full_name="Full Name field is required"),H.isLength(e.full_name,{min:3,max:40})||(t.full_name="Your name should be between 3 and 40 characters!"),H.isEmpty(e.email)?t.email="Email field is required":H.isEmail(e.email)||(t.email="Email is invalid"),H.isEmpty(e.pass1)&&(t.password="Password field is required"),H.isEmpty(e.pass2)&&(t.password2="Confirm password field is required"),H.isLength(e.pass1,{min:6,max:30})||(t.password="Password must be at least 6 characters"),H.equals(e.pass1,e.pass2)||(t.password2="Passwords must match"),{errors:t,isValid:J(t)}}var z=function(e){var t=e.closeModal,s=Object(R.a)(),n=s.register,i=s.handleSubmit,c=s.reset,o=Object(a.useState)(null),l=Object(y.a)(o,2),u=l[0],j=l[1],b=Object(a.useState)(!1),h=Object(y.a)(b,2),m=h[0],p=h[1],O=Object(a.useState)(""),g=Object(y.a)(O,2),x=g[0],f=g[1],_=Object(a.useState)(!1),k=Object(y.a)(_,2),w=k[0],S=k[1],L=Object(a.useState)(!1),C=Object(y.a)(L,2),E=C[0],B=C[1],U=Object(a.useState)(!1),F=Object(y.a)(U,2),P=F[0],q=F[1],H=function(e){f(e),p(!0),setTimeout((function(){p(!1)}),5e3)},J=function(){var e=Object(N.a)(v.a.mark((function e(t){var s,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=D(t),console.log(s),!s.isValid){e.next=17;break}return B(!0),q(!0),j(null),e.next=8,d.a.post("https://shortly-mern.herokuapp.com/api/auth/register",JSON.stringify({full_name:t.full_name,email:t.email,pass1:t.pass1,pass2:t.pass2}),{headers:{"Content-Type":"application/json"}});case 8:return a=e.sent,console.log(a.data),a.data.success?(S(!0),H(a.data.success)):a.data.error?(S(!1),H(a.data.error)):j(a.data.errors),B(!1),q(!1),c({}),e.abrupt("return");case 17:j(s.errors);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{className:"register",children:[Object(A.jsx)("h3",{className:"register__heading",children:"Register Now"}),Object(A.jsxs)("form",{className:"register__form",onSubmit:i(J),children:[Object(A.jsx)("input",Object(I.a)(Object(I.a)({type:"text",className:"register__formInput",placeholder:"Your Full Name"},n("full_name")),{},{style:(null===u||void 0===u?void 0:u.full_name)&&{border:"1px solid var(--red)"}})),Object(A.jsx)("span",{className:"registerNameErr",children:u&&(null===u||void 0===u?void 0:u.full_name)}),Object(A.jsx)("input",Object(I.a)(Object(I.a)({type:"text",className:"register__formInput",placeholder:"Your Email"},n("email")),{},{style:(null===u||void 0===u?void 0:u.email)&&{border:"1px solid var(--red)"}})),Object(A.jsx)("span",{className:"registerEmailErr",children:u&&(null===u||void 0===u?void 0:u.email)}),Object(A.jsx)("input",Object(I.a)(Object(I.a)({type:"password",className:"register__formInput",placeholder:"Type your password.."},n("pass1")),{},{style:(null===u||void 0===u?void 0:u.password)&&{border:"1px solid var(--red)"}})),Object(A.jsx)("span",{className:"registerPassErr",children:u&&(null===u||void 0===u?void 0:u.password)}),Object(A.jsx)("input",Object(I.a)(Object(I.a)({type:"password",className:"register__formInput",placeholder:"Re-type your password.."},n("pass2")),{},{style:(null===u||void 0===u?void 0:u.password2)&&{border:"1px solid var(--red)"}})),Object(A.jsx)("span",{className:"registerPass2Err",children:u&&(null===u||void 0===u?void 0:u.password2)}),Object(A.jsx)("button",{className:"register__formBtn",type:"submit",disabled:P,children:E?"Processing..":"Sign Up"})]}),Object(A.jsx)(T.a,{onClick:t,style:{fontSize:"2rem"}}),Object(A.jsxs)("p",{className:"register__noAccount",children:["Already have an account? Log In"," ",Object(A.jsx)(r.b,{to:"/login",children:Object(A.jsx)("span",{className:"register_goToLogin",children:"here."})})]}),m&&Object(A.jsx)(M,{isSuccess:w,alertMessage:x})]})},G=function(e){var t=e.isLoggedIn,s=Object(a.useState)(!1),n=Object(y.a)(s,2),i=n[0],c=n[1],l=Object(a.useRef)(),d=Object(j.b)(),b=function(){c(!0),document.body.style.overflow="hidden"},h=function(){c(!1),document.body.style.overflow="unset"};return Object(A.jsxs)(L.a.div,{className:"header",variants:{hidden:{y:"-100vh",opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",duration:.7}}},initial:"hidden",animate:"visible",children:[Object(A.jsx)("div",{className:"header__left",children:Object(A.jsx)(r.b,{to:"/",children:Object(A.jsx)("img",{className:"header__leftLogo",src:k,alt:"logo"})})}),Object(A.jsxs)("div",{ref:l,className:"header__right",children:[Object(A.jsxs)("ul",{className:"header__rightNavigation",children:[Object(A.jsx)("li",{className:"header__rightNavItem",children:Object(A.jsx)("a",{href:"#",children:"Features"})}),Object(A.jsx)("li",{className:"header__rightNavItem",children:Object(A.jsx)("a",{href:"#",children:"Pricing"})}),Object(A.jsx)("li",{className:"header__rightNavItem",children:Object(A.jsx)("a",{href:"#",children:"Resources"})})]}),!t&&Object(A.jsx)(r.b,{className:"button__container",to:"/login",children:Object(A.jsx)("button",{onClick:b,className:"header__rightButton loginBtn",children:"Login"})}),!t&&Object(A.jsx)(r.b,{className:"button__container",to:"/register",children:Object(A.jsx)("button",{onClick:b,className:"header__rightButton signUpBtn",children:"Sign Up"})}),Object(A.jsx)(r.b,{to:"/account",children:t&&Object(A.jsx)("button",{className:"header__rightButton loginBtn",children:"Account"})}),t&&Object(A.jsx)("button",{onClick:function(){d(O()),u.get("/api/auth/logout").then((function(e){console.log(e.data)})).catch((function(e){console.log(e.message)}))},className:"header__rightButton signUpBtn",children:"Log Out"})]}),Object(A.jsx)(S.a,{onClick:function(){var e=l.current.classList;e.contains("active")?e.remove("active"):e.add("active")}}),Object(A.jsxs)(E.a,{isOpen:i,onRequestClose:h,className:"auth_modal",overlayClassName:"auth_overlay",ariaHideApp:!1,children:[Object(A.jsx)(o.b,{exact:!0,path:"/login",children:Object(A.jsx)(q,{closeModal:h})}),Object(A.jsx)(o.b,{exact:!0,path:"/register",children:Object(A.jsx)(z,{closeModal:h})})]})]})},V=(s(249),{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.3,duration:.7}}}),Y=function(){var e=Object(j.c)(x),t=Object(j.c)(g),s=Object(a.useState)(0),n=Object(y.a)(s,2),i=n[0],c=n[1],r=Object(a.useState)([]),o=Object(y.a)(r,2),l=o[0],d=o[1],b=Object(a.useState)(0),h=Object(y.a)(b,2),m=h[0],p=h[1],O=function(e,t){return e.length<=t?e:e.substring(0,t)+"..."},f=function(){var e=Object(N.a)(v.a.mark((function e(t){var s,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.target.parentElement,a=s.querySelector(".account__shortenedUrl").innerText,e.next=4,u.post("https://shortly-mern.herokuapp.com/api/link/delete",JSON.stringify({link:a}),{headers:{"Content-Type":"application/json"}});case 4:n=e.sent,console.log(n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(N.a)(v.a.mark((function e(){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/auth/currentLimit/"+t.id);case 2:s=e.sent,p(s.data.used_links);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u.post("/api/link/getAll",JSON.stringify({id:t.id}),{headers:{"Content-Type":"application/json"}}).then((function(e){d(e.data.links),c(e.data.links.length)})).catch((function(e){console.log(e.message)})),_()}),[]),Object(A.jsx)("div",{className:"account",children:Object(A.jsxs)("div",{className:"wrapper",children:[Object(A.jsx)(G,{isLoggedIn:e}),Object(A.jsxs)(L.a.div,{className:"account__body",variants:V,initial:"hidden",animate:"visible",children:[Object(A.jsx)("h3",{className:"account__heading",children:"My Account"}),Object(A.jsxs)("div",{className:"account__userInfo",children:[Object(A.jsxs)("div",{className:"account__userInfoLeft",children:[Object(A.jsxs)("h3",{className:"account__nameLabel",children:["Full Name: ",Object(A.jsx)("span",{className:"account__name",children:null===t||void 0===t?void 0:t.name})]}),Object(A.jsxs)("h3",{className:"account__emailLabel",children:["Email: ",Object(A.jsx)("span",{className:"account__email",children:null===t||void 0===t?void 0:t.email})]})]}),Object(A.jsxs)("div",{className:"account__userInfoRight",children:[Object(A.jsx)("h3",{className:"account__plan",children:"Account Plan: FREE"}),Object(A.jsxs)("h3",{className:"account__dailyCount",children:["Links daily limit: ",m&&m," / 10"]})]})]}),Object(A.jsxs)("div",{className:"account__linksHistory",children:[Object(A.jsxs)("h3",{className:"account__myLinks",children:["My Links: ",i&&i]}),l.map((function(e){return Object(A.jsxs)("div",{className:"account__link",children:[Object(A.jsx)("h3",{className:"account__originalUrl",children:O(e.original_url,50)}),Object(A.jsxs)("div",{className:"account__linkRight",children:[Object(A.jsx)("h3",{className:"account__shortenedUrl",children:e.shortened_url}),Object(A.jsx)("button",{onClick:f,className:"account__linkDelete",children:"Delete"})]})]},e._id)}))]})]})]})})},K=s(13),Q=(s(250),s(117)),W=s.n(Q),X=(s(252),s(118)),Z=s.n(X),$=function(e){var t,s,n=e.short_link,i=e.original_link,c=Object(a.useRef)();return Object(A.jsxs)("div",{className:"link",children:[Object(A.jsx)("a",{target:"_blank",href:i,className:"link__original",children:(t=i,s=50,(t.length<=s?t:t.substring(0,s)+"...")||Object(A.jsx)(Z.a,{count:2}))}),Object(A.jsxs)("div",{className:"link__rightContainer",children:[Object(A.jsx)("h3",{className:"link__short",children:n}),Object(A.jsx)("button",{ref:c,onClick:function(){navigator.clipboard.writeText(n),c.current.style.backgroundColor="var(--dark-violet)",c.current.innerText="Copied!"},className:"link__copy",children:"Copy"})]})]})},ee=s(119),te=s.n(ee),se=function(){var e=Object(a.useState)(!1),t=Object(y.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(!1),c=Object(y.a)(i,2),r=c[0],o=c[1],l=Object(a.useRef)(),u=Object(a.useRef)(),b=Object(a.useRef)(),h=Object(a.useState)(null),m=Object(y.a)(h,2),p=m[0],O=m[1],f=Object(a.useState)([]),_=Object(y.a)(f,2),k=_[0],w=_[1],S=Object(j.c)(x),L=Object(j.c)(g),C=function(e){O(e),l.current.style.border="2px solid var(--red)"},E=function(){var e=Object(N.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("https://shortly-mern.herokuapp.com/api/auth/userLimit",JSON.stringify({owner:S?L.id:"none"}),{headers:{"Content-Type":"application/json"}});case 2:(t=e.sent).data.success&&console.log(t.data.message);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(v.a.mark((function e(){var t,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=l.current.value)){e.next=5;break}C("Input url field cannot be empty!"),e.next=16;break;case 5:if(W.a.isUri(t)){e.next=9;break}C("Seems like your input is not a valid url!"),e.next=16;break;case 9:return l.current.style.border="0",u.current.innerText="",n(!0),o(!0),e.next=14,d.a.post("https://shortly-mern.herokuapp.com/api/link/shorten",JSON.stringify({url:t,owner:S?L.id:"none"}),{headers:{"Content-Type":"application/json"}});case 14:(s=e.sent).data.success?(console.log(s.data),w((function(e){return[].concat(Object(K.a)(e),[s.data.shortenedLink])})),n(!1),o(!1),b.current.offsetHeight>258&&(b.current.style.overflowY="scroll",b.current.style.height="258px"),E()):(O(s.data.error),n(!1),o(!1));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(k),Object(A.jsxs)("div",{className:"shorten-link",children:[Object(A.jsx)("input",{ref:l,className:"shorten-link__input",type:"text",placeholder:"Shorten a link here.."}),Object(A.jsx)("span",{ref:u,className:"shorten-link__error",children:null!==p&&p}),Object(A.jsx)("button",{className:"shorten-link__button",type:"submit",onClick:I,disabled:r,children:s?Object(A.jsx)(te.a,{visible:s,type:"ThreeDots",color:"#00BFFF",height:20,width:20}):"Shorten It!"}),Object(A.jsx)("div",{ref:b,className:"shorten-link__linksList",children:k&&k.map((function(e){return Object(A.jsx)($,{short_link:e.shortened_url,original_link:e.original_url},e._id)}))})]})},ae=(s(273),function(e){var t=e.icon,s=e.heading,a=e.text;return Object(A.jsxs)("div",{className:"feature-item",children:[Object(A.jsx)("div",{className:"feature-item__iconContainer",children:Object(A.jsx)("img",{className:"feature-item__icon",src:t,alt:"feature-icon"})}),Object(A.jsx)("h2",{className:"feature-item__heading",children:s}),Object(A.jsx)("p",{className:"feature-item__text",children:a})]})}),ne=[{icon:s.p+"static/media/icon-brand-recognition.c349d3b6.svg",heading:"Brand Recognition",text:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."},{icon:s.p+"static/media/icon-detailed-records.265c8aea.svg",heading:"Detailed Records",text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."},{icon:s.p+"static/media/icon-fully-customizable.a1532a74.svg",heading:"Fully Customizable",text:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}],ie=(s(274),function(e){var t=e.heading,s=e.links;return Object(A.jsxs)("div",{className:"footer-list",children:[Object(A.jsx)("h3",{className:"footer-list__itemHeading",children:t}),Object(A.jsx)("ul",{className:"footer-list__itemList",children:s.map((function(e,t){return Object(A.jsx)("li",{className:"footer__listItem",children:Object(A.jsx)("a",{href:"#",children:e})},t)}))})]})}),ce=[{heading:"Features",links:["Link Shortening","Branded Links","Analytics"]},{heading:"Resources",links:["Blog","Developers","Support"]},,{heading:"Company",links:["About","Our Team","Careers","Contact"]}],re=(s(275),s.p+"static/media/icon-facebook.229c75a0.svg"),oe=s.p+"static/media/icon-twitter.1d5c6d5e.svg",le=s.p+"static/media/icon-pinterest.a2d25ab4.svg",de=s.p+"static/media/icon-instagram.df587328.svg",ue=function(){return Object(A.jsx)("div",{className:"footer",children:Object(A.jsx)("div",{className:"wrapper",children:Object(A.jsxs)("div",{className:"footer__container",children:[Object(A.jsx)("div",{className:"footer__itemLogo",children:Object(A.jsx)("img",{src:k,alt:"logo-icon"})}),ce.map((function(e,t){return Object(A.jsx)(ie,{heading:e.heading,links:e.links},t)})),Object(A.jsxs)("div",{className:"footer__itemSocial",children:[Object(A.jsx)("img",{src:re,alt:"fb-icon"}),Object(A.jsx)("img",{src:oe,alt:"twitter-icon"}),Object(A.jsx)("img",{src:le,alt:"pinterest-icon"}),Object(A.jsx)("img",{src:de,alt:"instagram-icon"})]})]})})})},je=s.p+"static/media/illustration-working.c9b5ef54.svg",be=s(293),he=s(120),me=(s(276),s(277),s(278),{hidden:{opacity:0,x:"-100vw"},visible:{opacity:1,x:0,transition:{type:"spring",duration:.7,delay:.5}}}),pe={hidden:{opacity:0,scale:0,x:"100vh"},visible:{opacity:1,scale:1,x:0,transition:{type:"spring",duration:1,delay:1.2}}},Oe=function(){var e=Object(be.a)(),t=Object(he.a)().inView,s=Object(j.c)(x);return Object(a.useEffect)((function(){t&&e.start("visible"),t||e.start("hidden")}),[t,e]),Object(A.jsxs)("div",{className:"home",children:[Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"wrapper",children:[Object(A.jsx)(G,{isLoggedIn:s}),Object(A.jsxs)("div",{className:"hero-section",children:[Object(A.jsx)(L.a.div,{className:"hero-section__text",variants:me,initial:"hidden",animate:"visible",children:Object(A.jsxs)("div",{className:"hero-section__textContainer",children:[Object(A.jsx)("h2",{className:"hero-section__mainHeading",children:"More than just shorter links"}),Object(A.jsx)("p",{className:"hero-section__subHeading",children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(A.jsx)("button",{className:"hero-section__ctaButton",children:"Get Started"})]})}),Object(A.jsx)("div",{className:"hero-section__image",children:Object(A.jsx)(L.a.img,{src:je,alt:"hero-image",variants:pe,initial:"hidden",animate:"visible"})})]})]})}),Object(A.jsx)("div",{className:"features",children:Object(A.jsxs)("div",{className:"wrapper",children:[Object(A.jsx)(se,{}),Object(A.jsxs)("div",{className:"features__container",children:[Object(A.jsxs)("div",{className:"features__heading",children:[Object(A.jsx)("h2",{className:"features__bigHeading",children:"Advanced Statistics"}),Object(A.jsx)("p",{className:"features__smallHeading",children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(A.jsxs)("div",{className:"features__items",children:[ne.map((function(e){return Object(A.jsx)("div",{className:"features__item",children:Object(A.jsx)(ae,{icon:e.icon,heading:e.heading,text:e.text})})})),Object(A.jsx)("div",{className:"features__itemsHrLine"})]})]})]})}),Object(A.jsx)("div",{className:"boost-links",children:Object(A.jsxs)("div",{className:"boost-links__container",children:[Object(A.jsx)("h2",{className:"boost-links__heading",children:"Boost your links today"}),Object(A.jsx)("button",{className:"boost-links__button",type:"submit",children:"Get Started"})]})}),Object(A.jsx)(ue,{})]})};var ge=function(){var e=Object(j.b)(),t=Object(j.c)(x);return Object(a.useEffect)((function(){u.get("/api/auth/getCurrentUser").then((function(t){console.log(t.data),t.data.success?e(p(t.data.user)):e(O())})).catch((function(e){console.log(e.message)}))}),[]),Object(A.jsx)(r.a,{children:Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(o.b,{path:"/account",children:t?Object(A.jsx)(Y,{}):Object(A.jsx)(o.a,{to:"/"})}),Object(A.jsx)(o.b,{path:"/",children:Object(A.jsx)(Oe,{})})]})})})},xe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,294)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))},fe=Object(b.a)({reducer:{user:f}});c.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(j.a,{store:fe,children:Object(A.jsx)(ge,{})})}),document.getElementById("root")),xe()}},[[280,1,2]]]);
//# sourceMappingURL=main.0c84ebcb.chunk.js.map