"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[632],{2520:(e,r,t)=>{t.d(r,{c:()=>o});t(9060);var a=t(9408),s=t(9204),i=t(2496);const o=e=>{let{metaTitle:r,metaDescription:t}=e;const{i18n:o}=(0,s.Gy)();return(0,i.jsxs)(a.So,{children:[(0,i.jsx)("html",{lang:o.language}),(0,i.jsx)("title",{children:r}),(0,i.jsx)("meta",{name:"description",content:t})]})}},704:(e,r,t)=>{t.d(r,{c:()=>i});var a=t(9060),s=t(2496);const i=e=>{let{children:r}=e;const t=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=t.current.querySelectorAll(".init-animate-1, .init-animate-2, .init-animate-3, .init-animate-4, .init-animate-5");const r=new IntersectionObserver((function(e){e.forEach((e=>{const r=e.target;if(e.isIntersecting){let e,t=r.getAttribute("data-time")||"1s",a=r.getAttribute("data-delay")||"0s",s=1e3*parseFloat(a);r.classList.contains("init-animate-1")?e="animate-animate-1":r.classList.contains("init-animate-2")?e="animate-animate-2":r.classList.contains("init-animate-3")?e="animate-animate-3":r.classList.contains("init-animate-4")?e="animate-animate-4":r.classList.contains("init-animate-5")&&(e="animate-animate-5"),e&&(r.classList.remove("not-animated"),r.style.animationDuration=t,setTimeout((()=>{r.classList.remove("opacity-0"),r.classList.add(e)}),s))}}))}),{threshold:.1,rootMargin:"0px 0px -5% 0px"});return e.forEach((e=>{e.classList.add("not-animated"),r.observe(e)})),()=>{e.forEach((e=>r.unobserve(e)))}}),[]),(0,s.jsx)("div",{ref:t,children:r})}},6751:(e,r,t)=>{t.d(r,{c:()=>i});var a=t(9060),s=t(2496);function i(e){let{icon:r,title:t}=e;const i=r?a.cloneElement(r,{className:"text-iconColor dark:text-iconColorDark w-6 h-6"}):null;return(0,s.jsxs)("div",{className:"sm:w-full flex items-center gap-4",children:[i&&(0,s.jsx)("div",{className:"animate-iconTitle",children:i}),(0,s.jsx)("h1",{className:"text-[1.5rem] font-semibold text-black dark:text-white",children:t})]})}},1512:(e,r,t)=>{t.d(r,{c:()=>s});var a=t(2496);function s(e){let{subTitle:r}=e;return(0,a.jsx)("h2",{className:"w-full text-[1.25rem] text-black dark:text-white text-center sm:text-right ",children:r})}},3720:(e,r,t)=>{t.d(r,{c:()=>i});var a=t(704),s=t(2496);function i(e){let{children:r}=e;return(0,s.jsx)(a.c,{children:(0,s.jsx)("div",{className:"relative flex flex-col lg:flex-row items-center lg:justify-between gap-4 mb-16 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 opacity-0 init-animate-3",children:r})})}},4632:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(6751),s=t(1512),i=t(9204),o=t(7752),c=t(9060),l=t(2622),n=t(4568),m=t(704),b=t(8372),f=t(2220),x=t(912),d=t(2496);function h(){const{t:e}=(0,i.Gy)(),{executeRecaptcha:r}=(0,f.UF)(),[t,a]=(0,c.useState)(null),[s,o]=(0,c.useState)(null),h=n.kt({first_name:n.Qb().required(e("brief-form.enter-name")),email:n.Qb().email().required(e("brief-form.enter-email")),phone_number:n.Qb().required(e("brief-form.enter-phone")),confirmation_of_conditions:n.cT().required(e("contact-form.confirmation-required"))});return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(m.c,{children:[(0,d.jsx)("div",{className:"mb-8 opacity-0 init-animate-1",children:(0,d.jsxs)("div",{className:"border-l-2 border-orange-400 pl-2",children:[(0,d.jsx)("p",{className:"italic mb-5 text-black dark:text-white",children:e("brief-page.text-information-1")}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:" underline mb-2 text-black dark:text-white",children:e("brief-page.text-information-2")}),(0,d.jsx)("p",{className:"text-black dark:text-white",children:e("brief-page.text-information-3")})]})]})}),(0,d.jsx)("div",{className:"w-full lg:w-10/12 mx-auto bg-bgForms/80 dark:bg-neutral-900/80 p-10 opacity-0 init-animate-1",children:(0,d.jsx)(l.QJ,{initialValues:{first_name:"",last_name:"",email:"",phone_number:"",business_type:"",website_url:"",business_info:"",website_type:[],design_project:[],liked_sites:"",marketing_type:[],extra_services:[],dop_info:"",confirmation_of_conditions:""},validationSchema:h,onSubmit:async(t,s)=>{let{setSubmitting:i,resetForm:c}=s;if(!t.confirmation_of_conditions)return a(e("brief-form.confirmation-required")),o(!1),void i(!1);if(r){const e=await r("brief_form");t.recaptchaToken=e}b.c.post("https://edweb.site/brief-form",t).then((r=>{a(e("brief-form.sent-successfully")),o(!0),c()})).catch((r=>{a(e("brief-form.sent-no-successfully")),o(!1)})).finally((()=>{i(!1)}))},children:r=>{let{errors:a,touched:i,isSubmitting:o}=r;return(0,d.jsxs)(l.QF,{children:[(0,d.jsx)("h3",{className:"text-[1.25rem] font-medium text-black dark:text-white mb-8",children:e("brief-form.step-1")}),(0,d.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,d.jsxs)("label",{className:"w-full lg:w-6/12 flex flex-col text-black dark:text-white",children:[e("brief-form.name"),(0,d.jsx)(l.IN,{name:"first_name",type:"text",placeholder:e("brief-form.enter-name"),className:"h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5 ".concat(a.first_name&&i.first_name?"error":"")})]}),(0,d.jsxs)("label",{className:"w-full lg:w-6/12 flex flex-col text-black dark:text-white",children:[e("brief-form.last-name"),(0,d.jsx)(l.IN,{name:"last_name",type:"text",className:"h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5",placeholder:e("brief-form.enter-last-name")})]})]}),(0,d.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,d.jsxs)("label",{className:"w-full lg:w-6/12 flex flex-col text-black dark:text-white",children:[e("brief-form.email"),(0,d.jsx)(l.IN,{name:"email",type:"email",placeholder:e("brief-form.enter-email"),className:"h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5 ".concat(a.email&&i.email?"error":"")})]}),(0,d.jsxs)("label",{className:"w-full lg:w-6/12 flex flex-col text-black dark:text-white",children:[e("brief-form.phone"),(0,d.jsx)(l.IN,{name:"phone_number",type:"tel",placeholder:e("brief-form.enter-phone"),className:'h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5"\n                  '.concat(a.phone_number&&i.phone_number?"error":"")})]})]}),(0,d.jsx)("h3",{className:"text-[1.25rem] font-medium text-black dark:text-white my-8",children:e("brief-form.step-2")}),(0,d.jsxs)("label",{className:"w-full flex flex-col text-black dark:text-white",children:[e("brief-form.activity-sphere"),(0,d.jsx)(l.IN,{name:"business_type",type:"text",className:"w-full h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5",placeholder:e("brief-form.specify-activity-sphere")})]}),(0,d.jsxs)("label",{className:"w-full flex flex-col text-black dark:text-white",children:[e("brief-form.www-address"),(0,d.jsx)(l.IN,{name:"website_url",type:"text",className:"w-full h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5",placeholder:e("brief-form.specify-domain-name")})]}),(0,d.jsxs)("label",{className:"w-full flex flex-col text-black dark:text-white",children:[e("brief-form.general-activity-info"),(0,d.jsx)(l.IN,{name:"business_info",as:"textarea",className:"w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-4 rounded-md focus:outline-none mt-2 mb-5 resize-none ",placeholder:e("brief-form.general-activity-info")})]}),(0,d.jsx)("h3",{className:"text-[1.25rem] font-medium text-black dark:text-white my-8",children:e("brief-form.step-3")}),(0,d.jsx)("h4",{className:"text-[1rem] text-black dark:text-white mb-6",children:e("brief-form.select-site-type")}),(0,d.jsxs)("div",{className:"grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-10 gap-6",children:[(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.visit-card"),className:"form-checkbox cursor-pointer"}),e("brief-form.visit-card")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.corporate-site"),className:"form-checkbox cursor-pointer"}),e("brief-form.corporate-site")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.e-shop"),className:"form-checkbox cursor-pointer"}),e("brief-form.e-shop")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.internet-portal"),className:"form-checkbox cursor-pointer"}),e("brief-form.internet-portal")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.ads-service"),className:"form-checkbox cursor-pointer"}),e("brief-form.ads-service")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.blog"),className:"form-checkbox cursor-pointer"}),e("brief-form.blog")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.site-upgrade"),className:"form-checkbox cursor-pointer"}),e("brief-form.site-upgrade")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.site-redesign"),className:"form-checkbox cursor-pointer"}),e("brief-form.site-redesign")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.online-catalog"),className:"form-checkbox cursor-pointer"}),e("brief-form.online-catalog")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.mobile-app"),className:"form-checkbox cursor-pointer"}),e("brief-form.mobile-app")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.custom-project"),className:"form-checkbox cursor-pointer"}),e("brief-form.custom-project")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"website_type",value:e("brief-form.site-accessibility"),className:"form-checkbox cursor-pointer"}),e("brief-form.site-accessibility")]})]}),(0,d.jsx)("h4",{className:" text-[1rem] text-black dark:text-white mb-6",children:e("brief-form.design")}),(0,d.jsxs)("div",{className:"grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-6",children:[(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"design_project",value:e("brief-form.has-design-project"),className:"form-checkbox cursor-pointer"}),e("brief-form.has-design-project")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"design_project",value:e("brief-form.no-design-project"),className:"form-checkbox cursor-pointer"}),e("brief-form.no-design-project")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"design_project",value:e("brief-form.ready-templates"),className:"form-checkbox cursor-pointer"}),e("brief-form.ready-templates")]})]}),(0,d.jsxs)("label",{className:"w-full flex flex-col text-black dark:text-white",children:[e("brief-form.liked-sites"),(0,d.jsx)(l.IN,{name:"liked_sites",as:"textarea",className:"w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-4 rounded-md focus:outline-none mt-2 mb-5 resize-none ",placeholder:e("brief-form.example-sites-prompt")})]}),(0,d.jsx)("h3",{className:"text-[1.25rem] font-medium text-black dark:text-white my-8",children:e("brief-form.step-4")}),(0,d.jsxs)("div",{className:"grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-6",children:[(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"marketing_type",value:e("brief-form.email-marketing"),className:"form-checkbox cursor-pointer"}),e("brief-form.email-marketing")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"marketing_type",value:e("brief-form.smm-marketing"),className:"form-checkbox cursor-pointer"}),e("brief-form.smm-marketing")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"marketing_type",value:e("brief-form.site-monetization"),className:"form-checkbox cursor-pointer"}),e("brief-form.site-monetization")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"marketing_type",value:e("brief-form.online-advertising"),className:"form-checkbox cursor-pointer"}),e("brief-form.online-advertising")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"marketing_type",value:e("brief-form.site-promotion"),className:"form-checkbox cursor-pointer"}),e("brief-form.site-promotion")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"marketing_type",value:e("brief-form.ad-links"),className:"form-checkbox cursor-pointer"}),e("brief-form.ad-links")]})]}),(0,d.jsx)("h3",{className:"text-[1.25rem] font-medium text-black dark:text-white  my-8",children:e("brief-form.step-5")}),(0,d.jsxs)("div",{className:"grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-6",children:[(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"extra_services",value:e("brief-form.hosting"),className:"form-checkbox cursor-pointer"}),e("brief-form.hosting")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"extra_services",value:e("brief-form.domain-registration"),className:"form-checkbox cursor-pointer"}),e("brief-form.domain-registration")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"extra_services",value:e("brief-form.ssl-certificate"),className:"form-checkbox cursor-pointer"}),e("brief-form.ssl-certificate")]}),(0,d.jsxs)("label",{className:"flex items-center gap-2 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"extra_services",value:e("brief-form.brand-emails"),className:"form-checkbox cursor-pointer"}),e("brief-form.brand-emails")]})]}),(0,d.jsx)("h3",{className:"text-[1.25rem] font-medium text-black dark:text-white my-8",children:e("brief-form.step-6")}),(0,d.jsx)("label",{className:"w-full flex flex-col text-black dark:text-white",children:(0,d.jsx)(l.IN,{name:"dop_info",as:"textarea",className:"w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-4 rounded-md focus:outline-none mt-2 mb-5 resize-none ",placeholder:e("brief-form.additional-project-wishes")})}),(0,d.jsx)("div",{className:"block mb-4",children:(0,d.jsxs)("label",{className:"lg:inline-flex lg:items-center lg:gap-1 text-black dark:text-white cursor-pointer",children:[(0,d.jsx)(l.IN,{type:"checkbox",name:"confirmation_of_conditions",className:"form-checkbox mr-2 cursor-pointer ".concat(a.confirmation_of_conditions&&i.confirmation_of_conditions?"error":"")}),e("brief-form.accept-form"),(0,d.jsx)("a",{href:"/regulations-edweb",target:"_blank",rel:"noopener noreferrer",className:"inline-block font-semibold underline duration-200 hover:text-sky-600 ml-1 lg:ml-0","aria-label":e("regulations-edweb.title"),children:e("regulations-edweb.title")})]})}),(0,d.jsx)("div",{className:"mb-10",children:(0,d.jsxs)("p",{className:"text-xs text-black dark:text-white",children:[e("recaptcha.text-1"),(0,d.jsx)("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener noreferrer",className:"font-bold underline duration-200 hover:text-sky-600","aria-label":e("recaptcha.privacy-policy"),children:e("recaptcha.privacy-policy")}),e("recaptcha.text-2"),(0,d.jsx)("a",{href:"https://policies.google.com/terms",target:"_blank",rel:"noopener noreferrer",className:"font-bold underline duration-200 hover:text-sky-600","aria-label":e("recaptcha.terms-of-service"),children:e("recaptcha.terms-of-service")}),e("recaptcha.text-3")]})}),t&&(0,d.jsx)("div",{className:"flex justify-center items-center text-white text-center font-semibold status-message h-16 sm:h-14 mb-10 rounded-sm ".concat(s?"bg-gradient-to-r from-green-600 via-green-400 to-green-600":"bg-gradient-to-r from-red-600 via-red-400 to-red-600"),children:t}),(0,d.jsxs)("button",{className:"btn-contact-form group",type:"submit",disabled:o,title:e("brief-form.submit-brief"),children:[e("brief-form.submit-brief"),(0,d.jsx)(x.iKy,{className:"duration-200 group-hover:translate-x-2"})]})]})}})})]})})}var p=t(2520),u=t(3720);const k={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_RECAPTCHA_KEY;function g(){const{t:e}=(0,i.Gy)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.c,{metaTitle:e("brief-page.meta-title"),metaDescription:e("brief-page.meta-description")}),(0,d.jsxs)(u.c,{children:[(0,d.jsx)(a.c,{icon:(0,d.jsx)(o.Szs,{}),title:e("brief-page.title")}),(0,d.jsx)(s.c,{subTitle:e("brief-page.sub-title")})]}),(0,d.jsx)(f.iG,{reCaptchaKey:k,children:(0,d.jsx)(h,{})})]})}}}]);
//# sourceMappingURL=632.2c211706.chunk.js.map