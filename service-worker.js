!function(){"use strict";const e="cache1628519520969",t=["/client/client.94822b5d.js","/client/inject_styles.5607aec6.js","/client/index.d4863ec1.js","/client/Footer.773b7510.js","/client/[tag].7954f66f.js","/client/macy.016dfa33.js"].concat(["/service-worker-index.html","/favicon.ico","/icon-192.png","/icon-256.png","/icon-32.png","/icon-512.png","/manifest.json","/meta-image.png","/onlinelearning.jpg","/phpid-learning-logo-hd.jpg","/phpid-learning-logo-small.jpg"]),n=new Set(t);self.addEventListener("install",(n=>{n.waitUntil(caches.open(e).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const n of t)n!==e&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),c=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,s=t.host===self.location.host&&n.has(t.pathname),i="only-if-cached"===e.request.cache&&!s;!c||a||i||e.respondWith((async()=>s&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1628596084529");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())}))}();
