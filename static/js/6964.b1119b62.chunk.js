"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6964],{6964:(o,t,i)=>{i.d(t,{Slower:()=>a});var s=i(4409);class n{constructor(){this.factor=3,this.radius=200}load(o){o&&(void 0!==o.factor&&(this.factor=o.factor),void 0!==o.radius&&(this.radius=o.radius))}}class a extends s.sJ{constructor(o){super(o)}clear(o,t,i){o.slow.inRange&&!i||(o.slow.factor=1)}init(){const o=this.container,t=o.actualOptions.interactivity.modes.slow;t&&(o.retina.slowModeRadius=t.radius*o.retina.pixelRatio)}async interact(){}isEnabled(o){var t;const i=this.container,n=i.interactivity.mouse,a=(null!==(t=null===o||void 0===o?void 0:o.interactivity)&&void 0!==t?t:i.actualOptions.interactivity).events;return a.onHover.enable&&!!n.position&&(0,s.hn)("slow",a.onHover.mode)}loadModeOptions(o){o.slow||(o.slow=new n);for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];for(const n of i)o.slow.load(null===n||void 0===n?void 0:n.slow)}reset(o){o.slow.inRange=!1;const t=this.container,i=t.actualOptions,n=t.interactivity.mouse.position,a=t.retina.slowModeRadius,e=i.interactivity.modes.slow;if(!e||!a||a<0||!n)return;const r=o.getPosition(),l=(0,s.Yf)(n,r),c=l/a,d=e.factor,{slow:u}=o;l>a||(u.inRange=!0,u.factor=c/d)}}}}]);
//# sourceMappingURL=6964.b1119b62.chunk.js.map