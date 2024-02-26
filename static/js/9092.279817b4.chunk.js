"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9092],{932:(t,e,a)=>{a.d(e,{A:()=>n});a(5043);var i=a(5822),s=a(4117),l=a(579);const n=t=>{let{metaTitle:e,metaDescription:a}=t;const{i18n:n}=(0,s.Bd)();return(0,l.jsxs)(i.mg,{children:[(0,l.jsx)("html",{lang:n.language}),(0,l.jsx)("title",{children:e}),(0,l.jsx)("meta",{name:"description",content:a})]})}},7832:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(5043),s=a(579);const l=t=>{let{children:e}=t;const a=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const t=a.current.querySelectorAll(".init-animate-1, .init-animate-2, .init-animate-3, .init-animate-4, .init-animate-5");const e=new IntersectionObserver((function(t){t.forEach((t=>{const e=t.target;if(t.isIntersecting){let t,a=e.getAttribute("data-time")||"1s",i=e.getAttribute("data-delay")||"0s",s=1e3*parseFloat(i);e.classList.contains("init-animate-1")?t="animate-animate-1":e.classList.contains("init-animate-2")?t="animate-animate-2":e.classList.contains("init-animate-3")?t="animate-animate-3":e.classList.contains("init-animate-4")?t="animate-animate-4":e.classList.contains("init-animate-5")&&(t="animate-animate-5"),t&&(e.classList.remove("not-animated"),e.style.animationDuration=a,setTimeout((()=>{e.classList.remove("opacity-0"),e.classList.add(t)}),s))}}))}),{threshold:.1,rootMargin:"0px 0px -5% 0px"});return t.forEach((t=>{t.classList.add("not-animated"),e.observe(t)})),()=>{t.forEach((t=>e.unobserve(t)))}}),[]),(0,s.jsx)("div",{ref:a,children:e})}},9567:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(5043),s=a(579);function l(t){let{icon:e,title:a}=t;const l=e?i.cloneElement(e,{className:"text-iconColor dark:text-iconColorDark w-6 h-6"}):null;return(0,s.jsxs)("div",{className:"sm:w-full flex items-center gap-4",children:[l&&(0,s.jsx)("div",{className:"animate-iconTitle",children:l}),(0,s.jsx)("h1",{className:"text-[1.5rem] font-semibold text-black dark:text-white",children:a})]})}},24:(t,e,a)=>{a.d(e,{A:()=>s});var i=a(579);function s(t){let{subTitle:e}=t;return(0,i.jsx)("h2",{className:"w-full text-[1.25rem] text-black dark:text-white text-center sm:text-right ",children:e})}},5301:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(7832),s=a(579);function l(t){let{children:e}=t;return(0,s.jsx)(i.A,{children:(0,s.jsx)("div",{className:"relative flex flex-col lg:flex-row items-center lg:justify-between gap-4 mb-16 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-sky-600 opacity-0 init-animate-3",children:e})})}},9092:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var i=a(9567),s=a(24),l=a(4117),n=a(1462),r=a(7832),c=a(579);function o(){const{t:t}=(0,l.Bd)();return(0,c.jsx)(r.A,{children:(0,c.jsxs)("ul",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16",children:[(0,c.jsxs)("li",{className:"relative z-10 flex justify-start xl:justify-center items-center gap-5 lg:flex-col xl:flex-row bg-white dark:bg-neutral-900  shadow-lg px-10 py-6 lg:py-10 opacity-0 init-animate-1",children:[(0,c.jsx)(n.JpK,{className:"w-8 h-8 text-sky-600"}),(0,c.jsx)("p",{className:"text-[1rem] lg:text-[1.25rem] font-semibold text-center text-textColor dark:text-white",children:t("working-conditions.freelance")})]}),(0,c.jsxs)("li",{className:"relative z-10 flex justify-start xl:justify-center items-center gap-5 lg:flex-col xl:flex-row bg-white dark:bg-neutral-900  shadow-lg px-10 py-6 lg:py-10 opacity-0 init-animate-1",children:[(0,c.jsx)(n._yE,{className:"w-8 h-8 text-sky-600"}),(0,c.jsx)("p",{className:"text-[1rem] lg:text-[1.25rem] font-semibold text-center text-textColor dark:text-white",children:t("working-conditions.full-employment")})]}),(0,c.jsxs)("li",{className:"relative z-10 flex justify-start xl:justify-center items-center gap-5 lg:flex-col xl:flex-row bg-white dark:bg-neutral-900  shadow-lg px-10 py-6 lg:py-10 opacity-0 init-animate-1",children:[(0,c.jsx)(n.cau,{className:"w-8 h-8 text-sky-600"}),(0,c.jsx)("p",{className:"text-[1rem] lg:text-[1.25rem] font-semibold text-center text-textColor dark:text-white",children:t("working-conditions.b2b")})]})]})})}var x=a(932),m=a(5301);function d(){const{t:t}=(0,l.Bd)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x.A,{metaTitle:t("cooperation-page.meta-title"),metaDescription:t("cooperation-page.meta-description")}),(0,c.jsxs)(m.A,{children:[(0,c.jsx)(i.A,{icon:(0,c.jsx)(n.mG1,{}),title:t("cooperation-page.title")}),(0,c.jsx)(s.A,{subTitle:t("cooperation-page.sub-title")})]}),(0,c.jsx)(o,{}),(0,c.jsxs)("div",{className:"relative z-10 w-full lg:w-10/12 mx-auto mt-5 mb-10 p-8 bg-white/80 dark:bg-neutral-800/80",children:[(0,c.jsx)("p",{className:"text-black dark:text-white mb-5 ",children:t("cooperation-page.text-1")}),(0,c.jsxs)("div",{className:"mb-5",children:[(0,c.jsx)("h3",{className:"text-black dark:text-white text-[1.25rem] font-semibold",children:t("cooperation-page.text-2")}),(0,c.jsx)("p",{className:"text-black dark:text-white",children:t("cooperation-page.text-3")})]}),(0,c.jsxs)("div",{className:"mb-5",children:[(0,c.jsx)("h3",{className:"text-black dark:text-white text-[1.25rem] font-semibold",children:t("cooperation-page.text-4")}),(0,c.jsx)("p",{className:"text-black dark:text-white",children:t("cooperation-page.text-5")})]}),(0,c.jsxs)("div",{className:"mb-5",children:[(0,c.jsx)("h3",{className:"text-black dark:text-white  text-[1.25rem] font-semibold",children:t("cooperation-page.text-6")}),(0,c.jsx)("p",{className:"text-black dark:text-white",children:t("cooperation-page.text-7")})]}),(0,c.jsxs)("ul",{className:"text-black dark:text-white list-disc px-5 mb-5",children:[(0,c.jsx)("p",{className:"text-black dark:text-white mb-2 ",children:t("cooperation-page.text-8")}),(0,c.jsx)("li",{className:"text-black dark:text-white",children:t("cooperation-page.text-9")}),(0,c.jsx)("li",{className:"text-black dark:text-white",children:t("cooperation-page.text-10")}),(0,c.jsxs)("li",{className:"text-black dark:text-white",children:[" ",t("cooperation-page.text-11")]})]}),(0,c.jsx)("p",{className:"text-black dark:text-white",children:t("cooperation-page.text-12")})]})]})}}}]);
//# sourceMappingURL=9092.279817b4.chunk.js.map