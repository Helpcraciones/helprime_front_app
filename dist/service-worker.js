if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let l={};const c=e=>n(e,s),t={module:{uri:s},exports:l,require:c};i[s]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(o(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"webapp"}),self.skipWaiting(),e.precacheAndRoute([{url:"/img/dofree.fbc0ccdd.png",revision:null},{url:"/img/go_diego.7a8e7e4a.png",revision:null},{url:"/img/imporbox.8f2cf6cc.png",revision:null},{url:"/index.html",revision:"a76f36305822d652eb7818d503d11eef"},{url:"/js/37.c80db257.js",revision:null},{url:"/js/app.2efbaebc.js",revision:null},{url:"/js/chunk-vendors.a49104d1.js",revision:null},{url:"/manifest.json",revision:"c2582c0ff168690a597fceff64cac6a4"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
