$(function(){function t(){$.ajax({url:o+"feature_flags",type:"GET",cache:!1,success:function(t){$.each(t.flags,function(t,a){return"stats"==a.name?void(c=String(a.status_name)):void 0}),"enabled"==c?(l=1,a()):$("#estatisticas, li.stats").hide()}})}function a(){$(".estatisticas").fadeOut(300),console.log("getting data"),$.ajax({url:o+"reports/stats.json",type:"GET",cache:!1,success:function(t){for(var a=0,n=0,r=0,i=0,o=0;o<t.stats.length;o++)a+=t.stats[o].statuses[0].count;for(var o=0;o<t.stats.length;o++)n+=t.stats[o].statuses[1].count;for(var o=0;o<t.stats.length;o++)r+=t.stats[o].statuses[2].count;i=a+n+r;var c=parseInt(a/i*100),l=parseInt(n/i*100),h=parseInt(r/i*100);$(".pie.resolvidas").each(function(){var t=$(this),a=e(h);s(t,a,"#78c953")}),$(".stats-wrapper.resolvidas > .stats > h1").html(r),$(".pie.andamento").each(function(){var t=$(this),a=e(c);s(t,a,"#ffac2d")}),$(".stats-wrapper.andamento > .stats > h1").html(a),$(".pie.aberto").each(function(){var t=$(this),a=e(l);s(t,a,"#ff6049")}),$(".stats-wrapper.aberto > .stats > h1").html(n),$(".loading-wrapper").fadeOut(500,function(){$(".estatisticas").fadeIn(300)})}})}$.imgpreload(["/images/participe_btn_appstore_hover@2x.png","/images/participe_btn_playstore_hover@2x.png","/images/participe_btn_cadastrese_completo_hover@2x.png"]);var e=function(t){t=t>=100?100:t;var a=3.6*t;return a},s=function(t,a,e){180>=a?(a=90+a,t.css("background","linear-gradient(90deg, #e3eaee 50%, transparent 50%), linear-gradient("+a+"deg, "+e+" 50%, #e3eaee 50%)")):(a-=90,t.css("background","linear-gradient(-90deg, "+e+" 50%, transparent 50%), linear-gradient("+a+"deg, #e3eaee 50%, "+e+" 50%)"))};$(".nav a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top},450),!1}});var n=$(document),r=$("nav, #navPlaceholder"),i="hasScrolled";n.scroll(function(){r.toggleClass(i,n.scrollTop()>=$("header").outerHeight())});var o="API_URL";"/"!==o.charAt(o.length-1)&&(o+="/");var c,l;t()});