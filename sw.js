const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Solitude°"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"351b3bbbf5c6741bdda6552edefe4cac",url:"./about/index.html"},{revision:"8f85e037ec15279fc787252fbc2f60d6",url:"./archives/2020/07/index.html"},{revision:"861c06ec46757962e77e40176321d972",url:"./archives/2020/08/index.html"},{revision:"fffb546c8661fd02b52f478ad7557fac",url:"./archives/2020/index.html"},{revision:"db99beba27b9884cefec2004e7f94ef6",url:"./archives/index.html"},{revision:"4bb24f400efc9348cb0dd2b3169529aa",url:"./categories/主题/index.html"},{revision:"202fe050b55a1e10bcc9a139445607f3",url:"./categories/Hello-Word/index.html"},{revision:"1375a30a7608cb257ad643227e7389d9",url:"./categories/Hexo/备份/index.html"},{revision:"30a994a4600c329aee85279d4f03eda9",url:"./categories/Hexo/部署/index.html"},{revision:"339d338ec58c61415cf48db1bfcac1d5",url:"./categories/Hexo/搭建/index.html"},{revision:"9109a3f7f59239fe8d5c802d0d0091f1",url:"./categories/Hexo/index.html"},{revision:"d963d2df079252e18aca154f03d2fd93",url:"./categories/index.html"},{revision:"ccb31df709e276689fffc26e5ea308bb",url:"./categories/Linux/Docker/index.html"},{revision:"224d133b183e8e57a226e3e425757dc3",url:"./categories/Linux/index.html"},{revision:"262e096c8bcd5aa5c5cd2c060466bd28",url:"./css/index.css"},{revision:"4c466a82269c0002cbef85a3c600916c",url:"./css/Solitude.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"b51f8275b07337680e097c9763c7560e",url:"./Gallery/index.html"},{revision:"a6ce1390906bc8c575fcae3919f39365",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"917f065096fedd8fe1d268b08df88bde",url:"./js/Solitude.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"2ae2767d78a22771bf563f595d5ca13e",url:"./link/index.html"},{revision:"b44aafe18ea83c0c5346259f1874c2dd",url:"./message/index.html"},{revision:"fa7f0d4f83696c268ea6a1f57edd5df0",url:"./posts/16107.html"},{revision:"a0afff0c8ed074257cf62ab6c82fb16d",url:"./posts/16294.html"},{revision:"0fba65138cb55b3effdfee4e04d4f13b",url:"./posts/16295.html"},{revision:"bf46bc764fad9cae812073d0daf0424e",url:"./posts/24860.html"},{revision:"03bf34181637273b44b23b82ff3db631",url:"./posts/27423.html"},{revision:"6e83d9752c4f5447201674ed8292f07b",url:"./posts/53634.html"},{revision:"f182e83797b674f2d25d35b8663be50a",url:"./pwa/manifest.json"},{revision:"0aa1b20e34721e9e935e7e7789aaee3b",url:"./tags/Butterfly/index.html"},{revision:"14b78c6667f1d637b058635cb7d3ae5b",url:"./tags/Docker/index.html"},{revision:"d2f5cd0262dee7aa5e332a2cd2cf1bc2",url:"./tags/git/index.html"},{revision:"e024ac3a768023a6d301973b51dafbfc",url:"./tags/gitee/index.html"},{revision:"9402abffbe0351117425460daf254caf",url:"./tags/github/index.html"},{revision:"f90e9aa682e0f41abdf0b9dfc4cd29df",url:"./tags/Hello-World/index.html"},{revision:"406de1357f0036f578c801a033095a4a",url:"./tags/Hexo/index.html"},{revision:"8d81c955df6b369a3e0c8a76144e068c",url:"./tags/index.html"},{revision:"d12e671ab56dd275e1da281916bd5435",url:"./tags/Mysql/index.html"},{revision:"5295a26293cbef1d6c6488993598cdca",url:"./tags/Nginx/index.html"},{revision:"aec5eb7bf2d47dae642b5e4f4fc2a38f",url:"./tags/Reids/index.html"},{revision:"d3baa861d42045551d9041c896a21c2b",url:"./tags/Tencent-Cloud/index.html"},{revision:"ea6467b690775457cc7755986753519b",url:"./tags/Tencent-CloudBase/index.html"},{revision:"193f0d4a16081e46f4d3808f7626be36",url:"./tags/thems/index.html"},{revision:"15954e7b67e7e40d05364088ff69ef8b",url:"./tags/Tomcat/index.html"},{revision:"b7f6e226ea58e30c489ac6c3c6be2d12",url:"./tags/win/index.html"},{revision:"12d63a67b305fae1c71ce1b1b2d4b799",url:"./timer-shaft/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();