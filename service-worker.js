!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const n=["client/50baa6a78d63aec0a39a/1.1.js","client/50baa6a78d63aec0a39a/index.2.js","client/50baa6a78d63aec0a39a/index~tag_$tag.0.js","client/50baa6a78d63aec0a39a/main.js","client/50baa6a78d63aec0a39a/tag_$tag.4.js","client/index.fa470666ba7123fc3fee.css","client/index~tag_$tag.a808383a5b74cda92fff.css","client/main.9ce2bc6910f10838297a.css","client/new_bg_hero.cbc47a607c1a56c34a16af339662c3f6.webp","client/tag_$tag.fa470666ba7123fc3fee.css"].concat(["service-worker-index.html","favicon.ico","icon-256.png","icon-32.png","icon-512.png","manifest.json","meta-image.png"]),c=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1617372541975").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1617372541975"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1617372541975").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const n=await t.match(e.request);if(n)return n;throw a}}))))})}]);