import{q as o,o as s,g as y,w as m,u as a,a as t,c as b,z as R,A as C,b as x,v as I,F as S,B as j,n as z,p as H,t as O}from"./vendor.94a8c413.js";import{_ as V}from"./MianCanvas.0d98f767.js";import{V as Z}from"./vue-draggable-next.esm-bundler.4df5a048.js";import{a as u,s as r,C as B,g as p}from"./utils.1944985b.js";import{_ as D}from"./index.61d49838.js";var N="/helpy-sheets/assets/blue.47e70866.png",U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N}),$="/helpy-sheets/assets/green.24b44025.png",G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$}),L="/helpy-sheets/assets/indigo.e04f247a.png",A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L}),F="/helpy-sheets/assets/orange.9072530e.png",q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F}),E="/helpy-sheets/assets/purple.a9f013bd.png",P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E}),J="/helpy-sheets/assets/red.aae9c658.png",K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J}),Q="/helpy-sheets/assets/yellow.ebd488fa.png",W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q}),X="/helpy-sheets/assets/smiling_drop.3f18194a.png",g=[{name:"blue",id:"d364083b1e8158a62999653c38a94c9f",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/blue.png"},{name:"green",id:"d68dc583a61b80b6041eac4b6d756e5a",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/green.png"},{name:"indigo",id:"c8ca04cd044f7ec7db7e6a90acbfe72d",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/indigo.png"},{name:"orange",id:"2077a58e1f18a1a2bb19816d565e42f1",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/orange.png"},{name:"purple",id:"0ea7abc57150eb84df62967c29197bed",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/purple.png"},{name:"red",id:"156c24afdd9898a0f4695d9b5cceda01",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/red.png"},{name:"yellow",id:"5c7e7ecea825c5b25e44b7e4f1c6dd90",type:"MakeTheRainbow",category:"make_the_rainbow",path:"/src/assets/MakeTheRainbow/make_the_rainbow/yellow.png"}];const Y={id:"game-canvas",class:"flex-grow"},ee={id:"rainbow-canvas",class:"relative p-1"},ae={class:"mx-auto max-h-[300px]",viewBox:"0 0 600 300",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te=["fill"],oe=["fill"],le=["fill"],ne=["fill"],se=["fill"],re=["fill"],ie=["fill"],de={src:X,alt:"Smiling Drop",class:"absolute right-4 -bottom-10 max-w-[250px] animate-bounce sm:right-8 md:right-6 lg:right-32 xl:right-60 2xl:right-80"},_e={id:"colour-sort-canvas",class:"relative p-1"},be={id:"check-button-canvas",class:"flex grow items-center justify-center p-1"},ue={setup(ce){const w={"/src/assets/MakeTheRainbow/make_the_rainbow/blue.png":U,"/src/assets/MakeTheRainbow/make_the_rainbow/green.png":G,"/src/assets/MakeTheRainbow/make_the_rainbow/indigo.png":A,"/src/assets/MakeTheRainbow/make_the_rainbow/orange.png":q,"/src/assets/MakeTheRainbow/make_the_rainbow/purple.png":P,"/src/assets/MakeTheRainbow/make_the_rainbow/red.png":K,"/src/assets/MakeTheRainbow/make_the_rainbow/yellow.png":W};u(g);const f=o(w);let v=function(n){return f.value[n].default},c=o(!1),e={};e.MakeTheRainbowItems=o(g);let i=o({group:"description",disabled:!1,delay:5,"touch-start-threshold":5,animation:200,sort:!0});function k(_){r(_.item.innerText)}function M(){if(i.value.disabled=!0,e.MakeTheRainbowItems.value[0].name=="red"&&e.MakeTheRainbowItems.value[1].name=="orange"&&e.MakeTheRainbowItems.value[2].name=="yellow"&&e.MakeTheRainbowItems.value[3].name=="green"&&e.MakeTheRainbowItems.value[4].name=="blue"&&e.MakeTheRainbowItems.value[5].name=="indigo"&&e.MakeTheRainbowItems.value[6].name=="purple"){c.value=!0,r("Great job!");return}else r("Try again");u(d.value),h.value=p(1,360),i.value.disabled=!1}r("Let's make the rainbow");let d=o(["#ff2400","#e81d1d","#e8b71d","#e3e81d","#1de840","#1ddde8","#2b1de8","#dd00f3","#dd00f3"]);u(d);let h=o(p(1,360)),T=function(){return`background: linear-gradient(${h.value}deg,${d.value.join()});
  background-size: 1800% 1800%;
  animation: rainbow 80s cubic-bezier(0.38, 0.74, 0.67, 0.26) infinite;
`};return(_,n)=>(s(),y(V,{"customize-style":a(T)()},{default:m(()=>[t("div",Y,[t("div",ee,[(s(),b("svg",ae,[t("path",{id:"red","fill-rule":"evenodd","clip-rule":"evenodd",d:"M600 300C600 134.315 465.685 0 300 0C134.4 0 0.138216 134.176 0 299.744V300H24.9999C24.9999 148.122 148.122 25 300 25C451.878 25 575 148.122 575 300H600Z",fill:a(e).MakeTheRainbowItems.value[0].name},null,8,te),t("path",{id:"orange","fill-rule":"evenodd","clip-rule":"evenodd",d:"M575 300C575 148.122 451.878 25 300 25C148.122 25 25 148.122 25 300H50C50 161.929 161.929 50 300 50C438.071 50 550 161.929 550 300H575Z",fill:a(e).MakeTheRainbowItems.value[1].name},null,8,oe),t("path",{id:"yellow","fill-rule":"evenodd","clip-rule":"evenodd",d:"M550 300C550 161.929 438.071 50 300 50C161.929 50 50 161.929 50 300H75C75 175.736 175.736 75 300 75C424.264 75 525 175.736 525 300H550Z",fill:a(e).MakeTheRainbowItems.value[2].name},null,8,le),t("path",{id:"green","fill-rule":"evenodd","clip-rule":"evenodd",d:"M525 300C525 175.736 424.264 75 300 75C175.736 75 75 175.736 75 300H100C100 189.543 189.543 100 300 100C410.457 100 500 189.543 500 300H525Z",fill:a(e).MakeTheRainbowItems.value[3].name},null,8,ne),t("path",{id:"blue","fill-rule":"evenodd","clip-rule":"evenodd",d:"M500 300C500 189.543 410.457 100 300 100C189.543 100 100 189.543 100 300H125C125 203.35 203.35 125 300 125C396.65 125 475 203.35 475 300H500Z",fill:a(e).MakeTheRainbowItems.value[4].name},null,8,se),t("path",{id:"indigo","fill-rule":"evenodd","clip-rule":"evenodd",d:"M475 300C475 203.35 396.65 125 300 125C203.35 125 125 203.35 125 300H150C150 217.157 217.157 150 300 150C382.843 150 450 217.157 450 300H475Z",fill:a(e).MakeTheRainbowItems.value[5].name},null,8,re),t("path",{id:"purple","fill-rule":"evenodd","clip-rule":"evenodd",d:"M450 300C450 217.157 382.843 150 300 150C217.157 150 150 217.157 150 300H175C175 229.86 230.964 173 300 173C369.036 173 425 229.86 425 300H450Z",fill:a(e).MakeTheRainbowItems.value[6].name},null,8,ie)])),R(t("img",de,null,512),[[C,a(c)]])]),t("div",_e,[x(a(Z),j({modelValue:a(e).MakeTheRainbowItems.value,"onUpdate:modelValue":n[0]||(n[0]=l=>a(e).MakeTheRainbowItems.value=l),class:"list-group mx-auto max-w-[700px] bg-slate-100/50 p-2"},a(i),{onChoose:k}),{default:m(()=>[(s(!0),b(S,null,I(a(e).MakeTheRainbowItems.value,l=>(s(),b("div",{key:l.id,class:"m-1 flex max-h-[50px] min-h-[50px] min-w-[80px] cursor-move select-none flex-col justify-end border-2 border-cyan-600 bg-slate-50/[.1] bg-contain bg-left bg-no-repeat p-1 text-center text-lg font-bold capitalize text-violet-900 underline decoration-orange-600 decoration-2 drop-shadow-md",style:H({backgroundImage:`url(${a(v)(l.path)})`,textShadow:"rgb(255, 251, 37) 1px 0 10px"})},[t("span",null,O(l.name),1)],4))),128))]),_:1},16,["modelValue"])]),t("div",be,[t("button",{class:z(a(B)+" grow-0"),onClick:M},"Check",2)])])]),_:1},8,["customize-style"]))}};var fe=D(ue,[["__scopeId","data-v-02a7fdaa"]]);export{fe as default};
