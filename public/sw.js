if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise((async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]}))},e=(e,c)=>{Promise.all(e.map(s)).then((s=>c(1===s.length?s[0]:s)))},c={require:Promise.resolve(e)};self.define=(e,n,t)=>{c[e]||(c[e]=Promise.resolve().then((()=>{let c={};const i={uri:location.origin+e.slice(1)};return Promise.all(n.map((e=>{switch(e){case"exports":return c;case"module":return i;default:return s(e)}}))).then((s=>{const e=t(...s);return c.default||(c.default=e),c}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/5qCQckqHYomLQsgDIvJWN/_buildManifest.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/5qCQckqHYomLQsgDIvJWN/_ssgManifest.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/01c73b57.8a81eef17a0c0b540319.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/06045cc1.601e876908ab4e44f01e.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/25f7a2c5.dfb8a3b1ef485cd64a0b.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/4773bbc7.94fc72d8a76506389d20.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/4d5ae783.1304730ed649334dee13.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/6da900a4.af42fd33fadc2486887d.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/7b873e08.dae57dca1671af40c44e.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/8d4d63f3.694e700e8792a054f001.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/94be630f.2afa0fcd07361d470586.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/98e4668e.2515bb6357dbb977aa2b.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/9f81260f.ddbd4ee82ae99ed8e2ec.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/aef4e9ad.24897b729cb72cc06038.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/b46a5c35.25a1ca287423a06abf39.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/b5e4cee8.a7f98decd37ce71082b9.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/commons.2184988f29e80b73b065.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/d2632668.29e1cd7fffc7eb7294f3.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/d8569f70.c131f991ca0cf8992e46.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/da53f205.5b7e3fe01bb7533f32e6.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/dd19926b.a448082355c2b67f02e9.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/e0dd523f.1ccf528169dbf5f8d6d3.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/e55412e0.02a402043e0484e4cd20.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/e9ad8a3d.21c48a574131d4b2666e.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/f0bc7db0.7763f29510260a232b95.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.62f786f2ca28ba11a9e2.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/ffb0d7fb.3bc79dd19e043bd0e5f4.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/framework.e517df81bfe1ace171f1.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/main-a20c100b10f3d98f7226.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/pages/_app-551d97c0d3f9fd61cf9c.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/pages/_error-b22a69e11cfc67051763.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/polyfills-1682bd92282ca2daa11e.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/css/6e9ef204d6fd7ac61493.css",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/_next/static/css/c80821720d46d5dff69b.css",revision:"5qCQckqHYomLQsgDIvJWN"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[new s.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\/api\/.*$/i,new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/.*/i,new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
