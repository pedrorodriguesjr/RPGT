(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{3257:function(e,o,a){Promise.resolve().then(a.bind(a,20511))},50551:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return t}});let n=a(99920);a(57437),a(2265);let i=n._(a(40148));function t(e,o){var a;let n={loading:e=>{let{error:o,isLoading:a,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let t={...n,...o};return(0,i.default)({...t,modules:null==(a=t.loadableGenerated)?void 0:a.modules})}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),e.exports=o.default)},10912:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=a(55592);function i(e){let{reason:o,children:a}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(o);return a}},40148:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return s}});let n=a(57437),i=a(2265),t=a(10912),l=a(61481);function r(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},s=function(e){let o={...c,...e},a=(0,i.lazy)(()=>o.loader().then(r)),s=o.loading;function d(e){let r=s?(0,n.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,c=o.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(l.PreloadCss,{moduleIds:o.modules}):null,(0,n.jsx)(a,{...e})]}):(0,n.jsx)(t.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(a,{...e})});return(0,n.jsx)(i.Suspense,{fallback:r,children:c})}return d.displayName="LoadableComponent",d}},61481:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"PreloadCss",{enumerable:!0,get:function(){return t}});let n=a(57437),i=a(58512);function t(e){let{moduleIds:o}=e;if("undefined"!=typeof window)return null;let a=(0,i.getExpectedRequestStore)("next/dynamic css"),t=[];if(a.reactLoadableManifest&&o){let e=a.reactLoadableManifest;for(let a of o){if(!e[a])continue;let o=e[a].files.filter(e=>e.endsWith(".css"));t.push(...o)}}return 0===t.length?null:(0,n.jsx)(n.Fragment,{children:t.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},20511:function(e,o,a){"use strict";a.r(o),a.d(o,{default:function(){return l}});var n=a(57437);a(60966);var i={cidadeLiberada:"1",marcador:[{link:"loja/taverna-pombodeouro",ativa:"1",tipoloja:"Taverna",nomelocal:"Taverna Pombo de Ouro",descricaolocal:"Taverna com boa comida, apesar de cara...",posicao:[13.410994034321702,13.886718750000002],cor:"#b85d49",borda:"#FFF",icone:"tavern"},{link:"loja/pocoes-tromisoras",ativa:"1",tipoloja:"Loja de Po\xe7\xf5es",nomelocal:"Po\xe7\xf5es Tromis Oras",descricaolocal:"Loja de po\xe7\xf5es gerais.",posicao:[-15.792253570362446,-19.16015625],cor:"#b85d49",borda:"#FFF",icone:"potion"},{link:"loja/joias-artemis",ativa:"1",tipoloja:"Joias",nomelocal:"Artemis Joias Arcanas.",descricaolocal:"Loja de joias para melhoria ou pra ficar lindo.",posicao:[-1.0546279422758742,18.808593750000004],cor:"#b85d49",borda:"#FFF",icone:"diamond"},{link:"loja/picareta-beco",ativa:"1",tipoloja:"Suspeita",nomelocal:"Picareta do Beco",descricaolocal:"Vai o que hoje, chefia?",posicao:[-5.0909441750333855,-39.55078125],cor:"#b85d49",borda:"#FFF",icone:"man"},{link:"loja/oficina-beluhga",ativa:"1",tipoloja:"Oficina",nomelocal:"Oficina Beluhga",descricaolocal:"Oficina especializada em melhorias",posicao:[20.797201434307,-24.257812500000004],cor:"#b85d49",borda:"#FFF",icone:"fire"},{link:"loja/espadas-kanpeki",ativa:"1",tipoloja:"Loja de Armas",nomelocal:"Kanpeki Espadas Especiais",descricaolocal:"Loja especializada em equipamentos",posicao:[-5.266007882805498,4.394531250000001],cor:"#b85d49",borda:"#FFF",icone:"sword"},{link:"loja/minerios-maravilhosos",ativa:"1",tipoloja:"Min\xe9rios",nomelocal:"Min\xe9rios Maravilhosos",descricaolocal:"Loja de min\xe9rios para melhorias",posicao:[16.46769474828897,27.070312500000004],cor:"#b85d49",borda:"#FFF",icone:"pickaxe"},{link:"loja/taverna-fimdomundo",ativa:"1",tipoloja:"Taverna",nomelocal:"Taverna Fim do Mundo",descricaolocal:"A taverna faz jus ao nome...",posicao:[-31.05293398570515,-2.9882812500000004],cor:"#b85d49",borda:"#FFF",icone:"tavern"}]},t=a(59694);function l(){return(0,n.jsx)("main",{children:(0,n.jsx)(t.G,{center:[0,0],zoom:1,maxzoom:3,minzoom:3,maxbounds:[[66.8600358953953,130.640625],[-66.93737246791483,-130.640625]],maxboundsviscosity:.9,maptiles:"/Yuvalin/{z}/{x}/{y}.png",data:i})})}},59694:function(e,o,a){"use strict";a.d(o,{G:function(){return i}});var n=a(50551);let i=a.n(n)()(()=>Promise.all([a.e(552),a.e(212),a.e(371),a.e(722)]).then(a.bind(a,63722)),{loadableGenerated:{webpack:()=>[63722]},ssr:!1})},60966:function(){}},function(e){e.O(0,[733,971,23,744],function(){return e(e.s=3257)}),_N_E=e.O()}]);