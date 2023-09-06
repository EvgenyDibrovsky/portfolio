"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[418],{5093:function(e,t,a){a(2791);var r=a(6907),n=a(9230),c=a(184);t.Z=function(e){var t=e.metaTitle,a=e.metaDescription,i=(0,n.$G)().i18n;return(0,c.jsxs)(r.ql,{children:[(0,c.jsx)("html",{lang:i.language}),(0,c.jsx)("title",{children:t}),(0,c.jsx)("meta",{name:"description",content:a})]})}},8006:function(e,t,a){var r=a(2791),n=a(184);t.Z=function(e){var t=e.children,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=a.current.querySelectorAll(".init-animate-1, .init-animate-2, .init-animate-3, .init-animate-4, .init-animate-5");var t=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;if(e.isIntersecting){var a,r=t.getAttribute("data-time")||"1s",n=t.getAttribute("data-delay")||"0s",c=1e3*parseFloat(n);t.classList.contains("init-animate-1")?a="animate-animate-1":t.classList.contains("init-animate-2")?a="animate-animate-2":t.classList.contains("init-animate-3")?a="animate-animate-3":t.classList.contains("init-animate-4")?a="animate-animate-4":t.classList.contains("init-animate-5")&&(a="animate-animate-5"),a&&(t.classList.remove("not-animated"),t.style.animationDuration=r,setTimeout((function(){t.classList.remove("opacity-0"),t.classList.add(a)}),c))}}))}),{threshold:.1,rootMargin:"0px 0px -5% 0px"});return e.forEach((function(e){e.classList.add("not-animated"),t.observe(e)})),function(){e.forEach((function(e){return t.unobserve(e)}))}}),[]),(0,n.jsx)("div",{ref:a,children:t})}},4443:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(2791),n=a(184);function c(e){var t=e.icon,a=e.title,c=t?r.cloneElement(t,{className:"text-iconColor dark:text-iconColorDark w-6 h-6"}):null;return(0,n.jsxs)("div",{className:"sm:w-full flex items-center gap-4",children:[c&&(0,n.jsx)("div",{className:"animate-iconTitle",children:c}),(0,n.jsx)("h1",{className:"text-[1.5rem] font-semibold text-black dark:text-white",children:a})]})}},5246:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(184);function n(e){var t=e.subTitle;return(0,r.jsx)("h2",{className:"w-full text-[1.25rem] text-black dark:text-white text-center sm:text-right ",children:t})}},6786:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(8006),n=a(184);function c(e){var t=e.children;return(0,n.jsx)(r.Z,{children:(0,n.jsx)("div",{className:"relative flex flex-col lg:flex-row items-center lg:justify-between gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 opacity-0 init-animate-3",children:t})})}},4418:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var r=a(4443),n=a(5246),c=a(9230),i=a(5861),l=a(9439),o=a(4687),s=a.n(o),m=a(2791),d=a(5705),f=a(6727),x=a(8006),u=a(1243),h=a(2686),b=a(184);function g(){var e=(0,c.$G)().t,t=(0,h.xX)().executeRecaptcha,a=(0,m.useState)(null),r=(0,l.Z)(a,2),n=r[0],o=r[1],g=(0,m.useState)(null),p=(0,l.Z)(g,2),j=p[0],w=p[1],k=f.Ry({name:f.Z_().required(e("contact-form.enter-name")),email:f.Z_().email().required(e("contact-form.enter-email")),subject:f.Z_().required(e("contact-form.enter-message-subject")),message:f.Z_().required(e("contact-form.enter-message")),confirmation_of_conditions:f.O7().required(e("contact-form.confirmation-required"))}),v=function(){var a=(0,i.Z)(s().mark((function a(r,n){var c,i,l;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c=n.setSubmitting,i=n.resetForm,r.confirmation_of_conditions){a.next=6;break}return o(e("contact-form.confirmation-required")),w(!1),c(!1),a.abrupt("return");case 6:if(!t){a.next=11;break}return a.next=9,t("contact_form");case 9:l=a.sent,r.recaptchaToken=l;case 11:u.Z.post("https://edweb.site/contact-form",r).then((function(t){o(e("contact-form.sent-successfully")),w(!0),i()})).catch((function(t){o(e("contact-form.sent-no-successfully")),w(!1)})).finally((function(){c(!1)}));case 12:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(x.Z,{children:(0,b.jsx)("div",{className:"w-full xl:w-10/12 mx-auto opacity-0 init-animate-1",children:(0,b.jsx)(d.J9,{initialValues:{name:"",email:"",subject:"",message:"",confirmation_of_conditions:""},validationSchema:k,onSubmit:v,children:function(t){var a=t.errors,r=t.touched;return(0,b.jsxs)(d.l0,{className:"w-full my-10 ",children:[(0,b.jsxs)("div",{className:"w-full flex-col lg:flex-row min-h-[18rem] flex gap-4 mb-10",children:[(0,b.jsxs)("div",{className:"w-full lg:w-6/12 flex gap-5 flex-col justify-between",children:[(0,b.jsxs)("label",{className:"flex flex-col gap-2 text-black dark:text-white",children:[e("contact-form.name"),(0,b.jsx)(d.gN,{name:"name",type:"text",placeholder:e("contact-form.enter-name"),className:"appearance-none  w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md ".concat(a.name&&r.name?"error":"")})]}),(0,b.jsxs)("label",{className:"flex flex-col gap-2 text-black dark:text-white",children:[e("contact-form.email"),(0,b.jsx)(d.gN,{name:"email",type:"email",placeholder:e("contact-form.enter-email"),className:"w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md ".concat(a.email&&r.email?"error":"")})]}),(0,b.jsxs)("label",{className:"flex flex-col gap-2 text-black dark:text-white",children:[e("contact-form.message-subject"),(0,b.jsx)(d.gN,{name:"subject",type:"text",placeholder:e("contact-form.enter-message-subject"),className:"w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md ".concat(a.subject&&r.subject?"error":"")})]})]}),(0,b.jsx)("div",{className:"w-full lg:w-6/12",children:(0,b.jsxs)("label",{className:"flex flex-col gap-2 h-[20rem] lg:h-full text-black dark:text-white",children:[e("contact-form.message"),(0,b.jsx)(d.gN,{as:"textarea",name:"message",placeholder:e("contact-form.enter-message"),className:"w-full h-full bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md resize-none ".concat(a.message&&r.message?"error":"")})]})})]}),(0,b.jsx)("div",{className:"block mb-4",children:(0,b.jsxs)("label",{className:"lg:inline-flex lg:items-center lg:gap-1 text-black dark:text-white",children:[(0,b.jsx)(d.gN,{type:"checkbox",name:"confirmation_of_conditions",className:"form-checkbox mr-2 ".concat(a.confirmation_of_conditions&&r.confirmation_of_conditions?"error":"")}),e("contact-form.accept-form"),(0,b.jsx)("a",{href:"/regulations-edweb",target:"_blank",rel:"noopener noreferrer",className:"inline-block font-semibold underline duration-200 hover:text-sky-600 ml-1 lg:ml-0","aria-label":e("regulations-edweb.title"),children:e("regulations-edweb.title")})]})}),(0,b.jsx)("div",{className:"mb-10",children:(0,b.jsxs)("p",{className:"text-xs text-black dark:text-white",children:[e("recaptcha.text-1"),(0,b.jsx)("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener noreferrer",className:"font-bold underline duration-200  hover:text-sky-600","aria-label":e("recaptcha.privacy-policy"),children:e("recaptcha.privacy-policy")}),e("recaptcha.text-2"),(0,b.jsx)("a",{href:"https://policies.google.com/terms",target:"_blank",rel:"noopener noreferrer",className:"font-bold underline duration-200  hover:text-sky-600","aria-label":e("recaptcha.terms-of-service"),children:e("recaptcha.terms-of-service")}),e("recaptcha.text-3")]})}),n&&(0,b.jsx)("div",{className:"flex justify-center items-center text-white text-center status-message h-16 sm:h-12 mb-10 rounded-sm ".concat(j?"bg-green-600":"bg-red-600"),children:n}),(0,b.jsx)("button",{type:"submit",className:"btn-contact-form inline-block mr-auto",title:e("contact-form.send"),children:e("contact-form.send")})]})}})})})})}var p=a(8185),j=a(5093);function w(){var e=(0,c.$G)().t;return(0,b.jsx)(x.Z,{children:(0,b.jsxs)("ul",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center",children:[(0,b.jsxs)("li",{className:"flex justify-center items-center gap-4 lg:flex-col xl:flex-row shadow-sm shadow-black dark:shadow-white h-20 lg:h-40 opacity-0 init-animate-1",children:[(0,b.jsx)(p.me1,{className:"w-8 h-8 text-orange-400"}),(0,b.jsx)("a",{className:"text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white transition-all duration-200 hover:underline",href:"tel:".concat(e("contact-dedails.phone-number")),children:e("contact-dedails.phone-number")})]}),(0,b.jsxs)("li",{className:"flex justify-center items-center gap-4 lg:flex-col xl:flex-row shadow-sm shadow-black dark:shadow-white h-20 lg:h-40 opacity-0 init-animate-1",children:[(0,b.jsx)(p.lZw,{className:"w-8 h-8 text-orange-400"}),(0,b.jsx)("a",{className:"text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white duration-200 hover:underline",href:"mailto:".concat(e("contact-dedails.email-address")),children:e("contact-dedails.email-address")})]}),(0,b.jsxs)("li",{className:"flex justify-center items-center gap-4 lg:flex-col xl:flex-row  shadow-sm shadow-black dark:shadow-white h-20 lg:h-40 opacity-0 init-animate-1",children:[(0,b.jsx)(p.bbv,{className:"w-8 h-8 text-orange-400"}),(0,b.jsx)("p",{className:"text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white",children:e("contact-dedails.localization")})]})]})})}var k=a(6786),v={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_RECAPTCHA_KEY;function N(){var e=(0,c.$G)().t;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j.Z,{metaTitle:e("contacts-page.meta-title"),metaDescription:e("contacts-page.meta-description")}),(0,b.jsxs)(k.Z,{children:[(0,b.jsx)(r.Z,{icon:(0,b.jsx)(p.me1,{}),title:e("contacts-page.title")}),(0,b.jsx)(n.Z,{subTitle:e("contacts-page.sub-title")})]}),(0,b.jsx)(w,{}),(0,b.jsx)(h.pm,{reCaptchaKey:v,children:(0,b.jsx)(g,{})})]})}}}]);
//# sourceMappingURL=418.a60402c0.chunk.js.map