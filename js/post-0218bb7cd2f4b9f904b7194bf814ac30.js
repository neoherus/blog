function $(e){return document.querySelector(e)}function $$(e){return document.querySelectorAll(e)}function switchSidebar(){"block"===sidebar.style.display?(sidebar.style.display=shade.style.display="none",nav.className="fa fa-bars circle-button"):(sidebar.style.display=shade.style.display="block",nav.className="fa fa-times circle-button")}HTMLCollection.prototype.forEach=function(e){for(var t,i=0;(t=this[i++])&&!1!==e(t););};var $imgView=$("#image-view img"),$body=document.body,sidebar=$(".sidebar"),shade=$(".shade"),nav=$("#nav");tocbot.init({tocSelector:".sidebar",contentSelector:"article",headingSelector:"h1, h2, h3",onClick:function(){"block"===shade.style.display&&switchSidebar()}}),window.addEventListener("scroll",function(){document.documentElement.scrollTop/document.body.scrollHeight>=.2?$("#back-to-top").style.display="block":$("#back-to-top").style.display="none"}),shade.addEventListener("click",function(){switchSidebar()}),nav.addEventListener("click",function(){switchSidebar()});