(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{70437:function(e,t,n){Promise.resolve().then(n.bind(n,94672))},50551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let l=n(99920);n(57437),n(2265);let o=l._(n(40148));function r(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let r={...l,...t};return(0,o.default)({...r,modules:null==(n=r.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let l=n(55592);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},40148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let l=n(57437),o=n(2265),r=n(10912),u=n(61481);function a(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},n=(0,o.lazy)(()=>t.loader().then(a)),d=t.loading;function s(e){let a=d?(0,l.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(u.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(o.Suspense,{fallback:a,children:i})}return s.displayName="LoadableComponent",s}},61481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let l=n(57437),o=n(58512);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,o.getExpectedRequestStore)("next/dynamic css"),r=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,l.jsx)(l.Fragment,{children:r.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},94672:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var l=n(57437);n(60966);var o=n(59694),r={marcador:[{link:"mapa/yuvalin",ativa:"1",tipolocal:"Cidade",nomelocal:"Yuvalin",descricaolocal:"Cidade de Yuvalin",posicao:[-14.136575651477944,-22.016601562500004],cor:"#b85d49",borda:"#FFF",icone:""}]};function u(){return(0,l.jsx)("main",{children:(0,l.jsx)(o.G,{center:[0,0],zoom:1,maxzoom:5,minzoom:3,maxbounds:[[66.8600358953953,130.640625],[-66.93737246791483,-130.640625]],maxboundsviscosity:.9,maptiles:"/Arton/{z}/{x}/{y}.png",data:r})})}n(2265)},59694:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var l=n(50551);let o=n.n(l)()(()=>Promise.all([n.e(552),n.e(212),n.e(371),n.e(722)]).then(n.bind(n,63722)),{loadableGenerated:{webpack:()=>[63722]},ssr:!1})},60966:function(){}},function(e){e.O(0,[733,971,23,744],function(){return e(e.s=70437)}),_N_E=e.O()}]);