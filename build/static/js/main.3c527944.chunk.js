(this.webpackJsonpshortly=this.webpackJsonpshortly||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(8),a=n.n(c),r=(n(30),n(31),n.p+"static/media/logo.83464303.svg"),o=n(20),l=n.n(o),d=n(0),j=function(){var e=Object(i.useRef)();return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header__left",children:Object(d.jsx)("img",{className:"header__leftLogo",src:r,alt:"logo"})}),Object(d.jsxs)("div",{ref:e,className:"header__right",children:[Object(d.jsxs)("ul",{className:"header__rightNavigation",children:[Object(d.jsx)("li",{className:"header__rightNavItem",children:Object(d.jsx)("a",{href:"#",children:"Features"})}),Object(d.jsx)("li",{className:"header__rightNavItem",children:Object(d.jsx)("a",{href:"#",children:"Pricing"})}),Object(d.jsx)("li",{className:"header__rightNavItem",children:Object(d.jsx)("a",{href:"#",children:"Resources"})})]}),Object(d.jsx)("button",{className:"header__rightButton loginBtn",children:"Login"}),Object(d.jsx)("button",{className:"header__rightButton signUpBtn",children:"Sign Up"})]}),Object(d.jsx)(l.a,{onClick:function(){var t=e.current.classList;t.contains("active")?t.remove("active"):t.add("active")}})]})},h=n.p+"static/media/illustration-working.c9b5ef54.svg",u=(n(41),n(42),n(43),n(11)),b=n.n(u),m=n(4),g=n(22),x=n(6),_=(n(45),n(23)),f=n.n(_),O=n(24),p=n.n(O),v=(n(65),function(e){var t,n,s=e.short_link,c=e.original_link,a=Object(i.useRef)();return Object(d.jsxs)("div",{className:"link",children:[Object(d.jsx)("a",{target:"_blank",href:c,className:"link__original",children:(t=c,n=50,t.length<=n?t:t.substring(0,n)+"...")}),Object(d.jsxs)("div",{className:"link__rightContainer",children:[Object(d.jsx)("h3",{className:"link__short",children:s}),Object(d.jsx)("button",{ref:a,onClick:function(){navigator.clipboard.writeText(s),a.current.style.backgroundColor="var(--dark-violet)",a.current.innerText="Copied!"},className:"link__copy",children:"Copy"})]})]})}),N=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)(),s=Object(i.useState)(null),c=Object(x.a)(s,2),a=c[0],r=c[1],o=Object(i.useState)([]),l=Object(x.a)(o,2),j=l[0],h=l[1],u=function(t){r(t),e.current.style.border="2px solid var(--red)"},_=function(){var i=Object(g.a)(b.a.mark((function i(){var s,c;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(""!==(s=e.current.value)){i.next=5;break}u("Input url field cannot be empty!"),i.next=14;break;case 5:if(f.a.isUri(s)){i.next=9;break}u("Seems like your input is not a valid url!"),i.next=14;break;case 9:return e.current.style.border="0",t.current.innerText="",i.next=12,p.a.post("https://shortly-mern.herokuapp.com/api/link/shorten",JSON.stringify({url:s}),{headers:{"Content-Type":"application/json"}});case 12:(c=i.sent).data.success?(console.log(c.data),h((function(e){return[].concat(Object(m.a)(e),[c.data.shortenedLink])})),n.current.offsetHeight>258&&(n.current.style.overflowY="scroll",n.current.style.height="258px")):r(c.data.error);case 14:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();return console.log(j),Object(d.jsxs)("div",{className:"shorten-link",children:[Object(d.jsx)("input",{ref:e,className:"shorten-link__input",type:"text",placeholder:"Shorten a link here.."}),Object(d.jsx)("button",{className:"shorten-link__button",type:"submit",onClick:_,children:"Shorten It!"}),Object(d.jsx)("span",{ref:t,className:"shorten-link__error",children:null!==a&&a}),Object(d.jsx)("div",{ref:n,className:"shorten-link__linksList",children:j&&j.map((function(e){return Object(d.jsx)(v,{short_link:e.shortened_url,original_link:e.original_url},e._id)}))})]})},k=(n(66),function(e){var t=e.icon,n=e.heading,i=e.text;return Object(d.jsxs)("div",{className:"feature-item",children:[Object(d.jsx)("div",{className:"feature-item__iconContainer",children:Object(d.jsx)("img",{className:"feature-item__icon",src:t,alt:"feature-icon"})}),Object(d.jsx)("h2",{className:"feature-item__heading",children:n}),Object(d.jsx)("p",{className:"feature-item__text",children:i})]})}),y=[{icon:n.p+"static/media/icon-brand-recognition.c349d3b6.svg",heading:"Brand Recognition",text:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."},{icon:n.p+"static/media/icon-detailed-records.265c8aea.svg",heading:"Detailed Records",text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."},{icon:n.p+"static/media/icon-fully-customizable.a1532a74.svg",heading:"Fully Customizable",text:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}],w=(n(67),function(e){var t=e.heading,n=e.links;return Object(d.jsxs)("div",{className:"footer-list",children:[Object(d.jsx)("h3",{className:"footer-list__itemHeading",children:t}),Object(d.jsx)("ul",{className:"footer-list__itemList",children:n.map((function(e,t){return Object(d.jsx)("li",{className:"footer__listItem",children:Object(d.jsx)("a",{href:"#",children:e})},t)}))})]})}),C=[{heading:"Features",links:["Link Shortening","Branded Links","Analytics"]},{heading:"Resources",links:["Blog","Developers","Support"]},,{heading:"Company",links:["About","Our Team","Careers","Contact"]}],S=(n(68),n.p+"static/media/icon-facebook.229c75a0.svg"),B=n.p+"static/media/icon-twitter.1d5c6d5e.svg",L=n.p+"static/media/icon-pinterest.a2d25ab4.svg",I=n.p+"static/media/icon-instagram.df587328.svg",R=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"footer__container",children:[Object(d.jsx)("div",{className:"footer__itemLogo",children:Object(d.jsx)("img",{src:r,alt:"logo-icon"})}),C.map((function(e,t){return Object(d.jsx)(w,{heading:e.heading,links:e.links},t)})),Object(d.jsxs)("div",{className:"footer__itemSocial",children:[Object(d.jsx)("img",{src:S,alt:"fb-icon"}),Object(d.jsx)("img",{src:B,alt:"twitter-icon"}),Object(d.jsx)("img",{src:L,alt:"pinterest-icon"}),Object(d.jsx)("img",{src:I,alt:"instagram-icon"})]})]})})})};var T=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"hero-section",children:[Object(d.jsx)("div",{className:"hero-section__text",children:Object(d.jsxs)("div",{className:"hero-section__textContainer",children:[Object(d.jsx)("h2",{className:"hero-section__mainHeading",children:"More than just shorter links"}),Object(d.jsx)("p",{className:"hero-section__subHeading",children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(d.jsx)("button",{className:"hero-section__ctaButton",children:"Get Started"})]})}),Object(d.jsx)("div",{className:"hero-section__image",children:Object(d.jsx)("img",{src:h,alt:"hero-image"})})]})]})}),Object(d.jsx)("div",{className:"features",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(N,{}),Object(d.jsxs)("div",{className:"features__container",children:[Object(d.jsxs)("div",{className:"features__heading",children:[Object(d.jsx)("h2",{className:"features__bigHeading",children:"Advanced Statistics"}),Object(d.jsx)("p",{className:"features__smallHeading",children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(d.jsxs)("div",{className:"features__items",children:[y.map((function(e){return Object(d.jsx)("div",{className:"features__item",children:Object(d.jsx)(k,{icon:e.icon,heading:e.heading,text:e.text})})})),Object(d.jsx)("div",{className:"features__itemsHrLine"})]})]})]})}),Object(d.jsx)("div",{className:"boost-links",children:Object(d.jsxs)("div",{className:"boost-links__container",children:[Object(d.jsx)("h2",{className:"boost-links__heading",children:"Boost your links today"}),Object(d.jsx)("button",{className:"boost-links__button",type:"submit",children:"Get Started"})]})}),Object(d.jsx)(R,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.3c527944.chunk.js.map