$((function(){const t=$("#site-name").width(),e=$("#menus").width(),i=$("#sidebar").width()||300,n=function(n){const o=$("#nav");let s;s=0===n||(1===n?t+e>o.width()-i-30:t+e>o.width()-30),s?o.addClass("hide-menu"):o.removeClass("hide-menu")},o=()=>{$("#sidebar").removeClass("tocOpenPc").animate({left:"-300px"},400),$("#menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#nav").hasClass("hide-menu")&&setTimeout((function(){n(2)}),400)},s=()=>{$("#nav").hasClass("hide-menu")||n(1),$("#sidebar").addClass("tocOpenPc").animate({left:0},400),$("#menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400)},a=()=>{const t=$("#toggle-menu"),e=$("#mobile-sidebar-menus"),i=$("#mobile-toc-button"),n=$("#menu_mask"),a=$("body"),c=$("#sidebar");function l(o){btf.sidebarPaddingR(),a.css("overflow","hidden"),n.fadeIn(),"menu"===o&&(t.removeClass("close").addClass("open"),e.addClass("open")),"toc"===o&&(i.removeClass("close").addClass("open"),c.addClass("tocOpenMobile").css({transform:"translate3d(-100%,0,0)",left:""}))}function d(o){a.css({overflow:"","padding-right":""}),n.fadeOut(),"menu"===o&&(t.removeClass("open").addClass("close"),e.removeClass("open")),"toc"===o&&(i.removeClass("open").addClass("close"),c.removeClass("tocOpenMobile").css({transform:""}))}t.on("click",(function(){l("menu")})),i.on("click",(function(){l("toc")})),n.on("click touchstart",(function(e){t.hasClass("open")&&d("menu"),i.hasClass("open")&&d("toc")})),$(window).on("resize",(function(e){t.is(":visible")||t.hasClass("open")&&d("menu")}));window.matchMedia("(max-width: 1024px)").addListener(t=>{t.matches?c.hasClass("tocOpenPc")&&o():($("#toggle-sidebar").hasClass("on")&&s(),i.hasClass("open")&&d("toc"))}),c.find(".toc-link").on("click",(function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<1024&&d("toc")}))};let c=!1;const l=function(){let t=0,e=!0;const i=$("#rightside"),n=$("#nav"),o="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow;$(window).scroll(btf.throttle((function(a){const c=$(this).scrollTop(),l=function(e){const i=e>t;return t=e,i}(c);c>56?(l?(n.hasClass("visible")&&n.removeClass("visible"),s&&!0===e&&(chatBtnHide(),e=!1)):(n.hasClass("visible")||n.addClass("visible"),o&&!1===e&&(window.chatBtnShow(),e=!0)),n.addClass("fixed"),"0"===i.css("opacity")&&i.css({opacity:"1",transform:"translateX(-38px)"})):(0===c&&n.removeClass("fixed").removeClass("visible"),i.css({opacity:"",transform:""}))}),200))},d=function(){$(".toc-child").hide(),$(window).scroll(btf.throttle((function(e){const i=$(this).scrollTop();t(i),n(i),o(i)}),100));const t=function(t){const e=$("#article-container"),i=e.height(),n=$(window).height(),o=(t-e.offset().top)/(i>n?i-n:$(document).height()-n),s=Math.round(100*o),a=s>100?100:s<=0?0:s;$("#sidebar .progress-num").text(a),$("#sidebar .sidebar-toc__progress-bar").animate({width:a+"%"},100)},e=GLOBAL_CONFIG.isanchor,i=GLOBAL_CONFIG.hexoversion.split(".")[0]>=5,n=function(t){if(0===$(".toc-link").length)return!1;const n=$("#article-container").find("h1,h2,h3,h4,h5,h6");let o="";n.each((function(){const e=$(this);t>e.offset().top-70&&(o=i?"#"+encodeURI($(this).attr("id")):"#"+$(this).attr("id"))})),""===o&&($(".toc-link").removeClass("active"),$(".toc-child").hide());const s=$(".toc-link.active");if(o&&s.attr("href")!==o){e&&(c=o,window.history.replaceState&&c!==window.location.hash&&window.history.replaceState(void 0,void 0,c)),$(".toc-link").removeClass("active");const t=$('.toc-link[href="'+o+'"]');t.addClass("active");const i=t.parents(".toc-child"),n=i.length>0?i.last():t;(a=n.closest(".toc-item").find(".toc-child")).is(":visible")||a.fadeIn(400),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}var a,c},o=function(t){if($(".toc-link").hasClass("active")){const e=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();e>t+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),e<t+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}},r=$("#rightside");if(r.on("click","#readmode",(function(){$("body").toggleClass("read-mode")})),$("#darkmode").length){const t=function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day))};r.on("click","#darkmode",()=>{t(),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(()=>window.disqusReset(),200)})}r.on("click","#rightside_config",()=>$("#rightside-config-hide").toggleClass("show")),r.on("click","#go-up",()=>btf.scrollToDest("body"));const h=function(){$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",(function(t){const e=$(this),i=e.parent();if(!i.hasClass("active")){const t=e.parents(".nav-tabs").next();i.siblings(".active").removeClass("active"),i.addClass("active");const n=e.attr("data-href");t.find("> .tab-item-content").removeClass("active"),t.find("> "+n).addClass("active");const o=t.find(n).find(".justified-gallery");o.length>0&&btf.initJustifiedGallery(o)}}))},f=()=>{$("#article-container .tabs .tab-to-top").on("click",(function(){btf.scrollToDest($(this).parents(".tabs"))}))};window.refreshFn=function(){window.innerWidth<768?n(0):n(2),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),GLOBAL_CONFIG_SITE.isPost&&(window.innerWidth>1024&&$("#toggle-sidebar").hasClass("on")&&setTimeout((function(){s()}),400),$("#toggle-sidebar").on("click",(function(){const t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),t?o():s()})),GLOBAL_CONFIG_SITE.isSidebar&&d(),void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const t=GLOBAL_CONFIG.noticeOutdate;var e=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){const i=`<div class="post-outdate-notice">${t.messagePrev+" "+e+" "+t.messageNext}</div>`;"top"===t.position?$("#article-container").prepend(i):$("#article-container").append(i)}}()),a(),GLOBAL_CONFIG_SITE.isHome&&$("#scroll_down").on("click",(function(){btf.scrollToDest("#content-inner")})),GLOBAL_CONFIG.highlight&&function(){const t=GLOBAL_CONFIG.highlight.highlightCopy,e=GLOBAL_CONFIG.highlight.highlightLang,i=GLOBAL_CONFIG_SITE.isHighlightShrink,n=t||e||void 0!==i,o="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]');if(n&&o.length){const n="prismjs"===GLOBAL_CONFIG.highlight.plugin;let s="",a="";const c=!0===i?"closed":"";if(void 0!==i&&(s=`<i class="fas fa-angle-down expand ${c}"></i>`),t&&(a='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),e)n?o.each((function(){const t=$(this),e=`<div class="code-lang">${void 0!==t.attr("data-language")?t.attr("data-language"):"Code"}</div>`;t.wrap('<figure class="highlight"></figure>').before(`<div class="highlight-tools ${c}">${s+e+a}</div>`)})):o.each((function(t,e){const i=$(this);let n=i.attr("class").split(" ")[1];"plain"!==n&&void 0!==n||(n="Code");const o=`<div class="code-lang">${n}</div>`;i.prepend(`<div class="highlight-tools ${c}">${s+o+a}</div>`)}));else{const t=`<div class="highlight-tools ${c}">${s+a}</div>`;n?o.wrap('<figure class="highlight"></figure>').before(t):o.prepend(t)}if(void 0!==i&&$(".highlight-tools >.expand").on("click",(function(){const t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")})),t){const t=function(t,e){document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,(function(){setTimeout((function(){$(e).prev(".copy-notice").animate({opacity:0},650)}),400)}))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)};$(".highlight-tools >.copy-button").on("click",(function(){const e=$(this).parents("figure.highlight");e.addClass("copy-true");const i=window.getSelection(),o=document.createRange();n?o.selectNodeContents(e.find("> pre code")[0]):o.selectNodeContents(e.find("table .code pre")[0]),i.removeAllRanges(),i.addRange(o);const s=i.toString();t(s,this),i.removeAllRanges(),e.removeClass("copy-true")}))}}}(),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each((function(t,e){const i=$(e);if(i.attr("alt")){const t=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>");i.after(t)}})),function(){const t=$(".justified-gallery");if(t.length){const e=t.find("img");e.unwrap(),e.length&&e.each((function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")})),c?btf.initJustifiedGallery(t):($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.justifiedGallery.css}">`),$.getScript(""+GLOBAL_CONFIG.justifiedGallery.js,(function(){btf.initJustifiedGallery(t)})),c=!0)}}(),function(){const t=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox){$("#article-container img:not(.gallery-group-img)").not($("a>img")).each((function(t,e){const i=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),n=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap(`<a href="${i}" data-fancybox="group" data-caption="${n}" class="fancybox"></a>`)})),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}else if(t){const t=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));t.on("open",(function(e){const i="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";t.update({background:i})}))}}(),l(),GLOBAL_CONFIG.runtime&&(()=>{const t=$("#runtimeshow");if(t.length){const e=t.attr("data-publishDate");t.text(btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime)}})(),(()=>{const t=$("#last-push-date");if(t.length){const e=t.attr("data-lastPushDate"),i=btf.diffDate(e,!0);t.text(i)}})(),$("#article-container table").not($("figure.highlight > table")).each((function(){$(this).wrap('<div class="table-wrap"></div>')})),function(){const t=$(".hide-button");t.length&&t.on("click",(function(t){const e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&i.find(".justified-gallery").length>0&&btf.initJustifiedGallery(i.find(".justified-gallery"))}))}(),h(),f(),$("#aside-cat-list .card-category-list-item.parent i").on("click",(function(t){t.preventDefault();const e=$(this);e.toggleClass("expand"),e.parents(".parent").next().toggle()})),function(){let t=!1;$("#switch-comments-btn").on("click",(function(){$("#post-comment > .comment-wrap > div").each((function(){$(this).is(":visible")?$(this).hide():$(this).css({display:"block",animation:"tabshow .5s"})})),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))}()},refreshFn(),$(window).on("resize",(function(){window.innerWidth<768?n(0):$("#sidebar").hasClass("tocOpenPc")&&$("#nav").hasClass("fixed")?n(1):n(2)})),$("#mobile-sidebar-menus .expand").on("click",(function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")})),$(window).on("touchmove",(function(t){const e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const t=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{let i;e.preventDefault();const n=window.getSelection(0).toString();return i=n.length>t.limitCount?n+"\n\n\n"+t.languages.author+"\n"+t.languages.link+window.location.href+"\n"+t.languages.source+"\n"+t.languages.info:n,e.clipboardData?e.clipboardData.setData("text",i):window.clipboardData.setData("text",i)}})(),GLOBAL_CONFIG.baiduPush&&(()=>{const t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js",t.dataset.pjax="";const i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)})()}));