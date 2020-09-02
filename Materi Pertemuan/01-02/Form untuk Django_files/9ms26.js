// source --> https://www.duniailkom.com/wp-content/plugins/jquery-colorbox/js/jquery.colorbox-min.js?ver=1.4.33 
/*!
	Colorbox v1.4.33 - 2013-10-31
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);
// source --> https://www.duniailkom.com/wp-content/plugins/jquery-colorbox/js/jquery-colorbox-wrapper-min.js?ver=4.6.2 
var COLORBOX_INTERNAL_LINK_PATTERN=/^#.*/;var COLORBOX_SUFFIX_PATTERN=/\.(?:jpe?g|gif|png|bmp)/i;var COLORBOX_MANUAL="colorbox-manual";var COLORBOX_OFF_CLASS=".colorbox-off";var COLORBOX_LINK_CLASS=".colorbox-link";var COLORBOX_OFF="colorbox-off";var COLORBOX_CLASS_PATTERN="colorbox-[0-9]+";var COLORBOX_LINK_CLASS_PATTERN="colorbox-link-[0-9]+";jQuery(document).ready(function(){emulateConsoleForIE();console.group("jQuery Colorbox log messages");if(typeof jQueryColorboxSettingsArray!=="object"){jQueryColorboxSettingsArray=getColorboxConfigDefaults()}if(jQueryColorboxSettingsArray.autoColorboxJavaScript==="true"){colorboxAddManualClass()}if(jQueryColorboxSettingsArray.colorboxAddClassToLinks==="true"){colorboxAddClassToLinks()}if(jQueryColorboxSettingsArray.autoHideFlash==="true"){colorboxHideFlash();colorboxShowFlash()}colorboxSelector();console.groupEnd()});(function(a){emulateConsoleForIE=function(){if(!console){console={}}var b=["log","info","warn","error","debug","trace","dir","group","groupCollapsed","groupEnd","time","timeEnd","profile","profileEnd","dirxml","assert","count","markTimeline","timeStamp","clear"];for(var c=0;c<b.length;c++){if(!console[b[c]]){console[b[c]]=function(){}}}}})(jQuery);(function(a){colorboxShowFlash=function(){a(document).bind("cbox_closed",function(){console.group("Showing flash objects");var e=document.getElementsByTagName("object");for(var d=0;d<e.length;d++){console.debug("Show object %o",e[d]);e[d].style.visibility="visible"}var b=document.getElementsByTagName("embed");for(var c=0;c<b.length;c++){console.debug("Show embed %o",b[c]);b[c].style.visibility="visible"}console.groupEnd()})}})(jQuery);(function(a){colorboxHideFlash=function(){a(document).bind("cbox_open",function(){console.group("Hiding flash objects");var e=document.getElementsByTagName("object");for(var d=0;d<e.length;d++){console.debug("Hide object %o",e[d]);e[d].style.visibility="hidden"}var b=document.getElementsByTagName("embed");for(var c=0;c<b.length;c++){console.debug("Hide embed %o",b[c]);b[c].style.visibility="hidden"}console.groupEnd()})}})(jQuery);(function(a){colorboxAddClassToLinks=function(){console.group("Add colorbox-link class to links pointing to images");a("a:not(:contains(img))").each(function(d,f){var c=a(f);var b=c.attr("class");if(b!==undefined&&!b.match("colorbox")){var e=c.attr("href");if(e!==undefined&&a(f).attr("href").match(COLORBOX_SUFFIX_PATTERN)){console.debug("Add colorbox-link class to %o.",c);c.addClass("colorbox-link")}}});console.groupEnd()}})(jQuery);(function(a){colorboxAddManualClass=function(){console.group("Add colorbox-manual class to images");a("img").each(function(c,e){var d=a(e);var b=d.attr("class");if(b===undefined||!b.match("colorbox")){console.debug("Add colorbox-manual class to image %o",d);d.addClass("colorbox-manual")}});console.groupEnd()}})(jQuery);(function(a){colorboxSelector=function(){console.group("Find image links and apply colorbox effect.");a("a:has(img[class*=colorbox-]):not(.colorbox-off)").each(function(b,d){console.group("Found link %o.",d);ColorboxLocal=a.extend(true,{},jQueryColorboxSettingsArray);ColorboxLocal.colorboxMaxWidth=ColorboxLocal.colorboxImageMaxWidth;ColorboxLocal.colorboxMaxHeight=ColorboxLocal.colorboxImageMaxHeight;ColorboxLocal.colorboxHeight=ColorboxLocal.colorboxImageHeight;ColorboxLocal.colorboxWidth=ColorboxLocal.colorboxImageWidth;var c=a(d).attr("href");if(c!==undefined&&c.match(COLORBOX_SUFFIX_PATTERN)){colorboxImage(b,d)}console.groupEnd()});console.groupEnd();console.group("Find links and apply colorbox effect.");a("a[class*=colorbox-link]").each(function(b,d){console.group("Found link %o.",d);ColorboxLocal=a.extend(true,{},jQueryColorboxSettingsArray);var c=a(d).attr("href");if(c!==undefined){colorboxLink(b,d,c)}console.groupEnd()});console.groupEnd()}})(jQuery);(function(a){colorboxImage=function(b,g){var d=a(g).find("img:first");var f=a(g).attr("class");if(f!==undefined){ColorboxLocal.colorboxGroupId=f.match(COLORBOX_CLASS_PATTERN)||f.match(COLORBOX_MANUAL)}if(!ColorboxLocal.colorboxGroupId){var h=d.attr("class");if(h!==undefined&&!h.match(COLORBOX_OFF)){ColorboxLocal.colorboxGroupId=h.match(COLORBOX_CLASS_PATTERN)||h.match(COLORBOX_MANUAL)}if(ColorboxLocal.colorboxGroupId){ColorboxLocal.colorboxGroupId=ColorboxLocal.colorboxGroupId.toString().split("-")[1];if(ColorboxLocal.colorboxGroupId==="manual"){ColorboxLocal.colorboxGroupId="nofollow"}var c=d.attr("title");if(c!==undefined){ColorboxLocal.colorboxTitle=c}else{var e=d.attr("alt");if(e!==undefined){ColorboxLocal.colorboxTitle=e}}if(jQueryColorboxSettingsArray.addZoomOverlay==="true"){colorboxAddZoomOverlayToImages(a(g),d)}console.debug("Call colorbox for image %o.",d);colorboxWrapper(g)}}}})(jQuery);(function(a){colorboxLink=function(c,e,f){ColorboxLocal.colorboxGroupId=a(e).attr("class").match(COLORBOX_LINK_CLASS_PATTERN);if(ColorboxLocal.colorboxGroupId!==undefined&&ColorboxLocal.colorboxGroupId!==null){ColorboxLocal.colorboxGroupId=ColorboxLocal.colorboxGroupId.toString().split("-")[2]}else{ColorboxLocal.colorboxGroupId="nofollow"}var b=a(e);var d=b.attr("title");if(d!==undefined){ColorboxLocal.colorboxTitle=d}else{ColorboxLocal.colorboxTitle=""}if(f.match(COLORBOX_SUFFIX_PATTERN)){ColorboxLocal.colorboxMaxWidth=ColorboxLocal.colorboxImageMaxWidth;ColorboxLocal.colorboxMaxHeight=ColorboxLocal.colorboxImageMaxHeight;ColorboxLocal.colorboxHeight=ColorboxLocal.colorboxImageHeight;ColorboxLocal.colorboxWidth=ColorboxLocal.colorboxImageWidth}else{ColorboxLocal.colorboxMaxWidth=false;ColorboxLocal.colorboxMaxHeight=false;ColorboxLocal.colorboxHeight=ColorboxLocal.colorboxLinkHeight;ColorboxLocal.colorboxWidth=ColorboxLocal.colorboxLinkWidth;if(f.match(COLORBOX_INTERNAL_LINK_PATTERN)){ColorboxLocal.colorboxInline=true}else{ColorboxLocal.colorboxIframe=true}}console.debug("Call colorbox for link %o.",e);colorboxWrapper(e)}})(jQuery);(function(a){colorboxWrapper=function(b){a.each(ColorboxLocal,function(c,d){if(d==="false"){ColorboxLocal[c]=false}else{if(d==="true"){ColorboxLocal[c]=true}}});console.debug("Apply colorbox to link %o with values %o",b,ColorboxLocal);a(b).colorbox({transition:ColorboxLocal.colorboxTransition,speed:parseInt(ColorboxLocal.colorboxSpeed),title:ColorboxLocal.colorboxTitle,rel:ColorboxLocal.colorboxGroupId,scalePhotos:ColorboxLocal.colorboxScalePhotos,scrolling:ColorboxLocal.colorboxScrolling,opacity:ColorboxLocal.colorboxOpacity,preloading:ColorboxLocal.colorboxPreloading,overlayClose:ColorboxLocal.colorboxOverlayClose,escKey:ColorboxLocal.colorboxEscKey,arrowKey:ColorboxLocal.colorboxArrowKey,loop:ColorboxLocal.colorboxLoop,current:ColorboxLocal.colorboxCurrent,previous:ColorboxLocal.colorboxPrevious,next:ColorboxLocal.colorboxNext,close:ColorboxLocal.colorboxClose,xhrError:ColorboxLocal.colorboxXhrError,imgError:ColorboxLocal.colorboxImgError,iframe:ColorboxLocal.colorboxIframe,inline:ColorboxLocal.colorboxInline,width:ColorboxLocal.colorboxWidth,height:ColorboxLocal.colorboxHeight,initialWidth:ColorboxLocal.colorboxInitialWidth,initialHeight:ColorboxLocal.colorboxInitialHeight,maxWidth:ColorboxLocal.colorboxMaxWidth,maxHeight:ColorboxLocal.colorboxMaxHeight,slideshow:ColorboxLocal.colorboxSlideshow,slideshowSpeed:parseInt(ColorboxLocal.colorboxSlideshowSpeed),slideshowAuto:ColorboxLocal.colorboxSlideshowAuto,slideshowStart:ColorboxLocal.colorboxSlideshowStart,slideshowStop:ColorboxLocal.colorboxSlideshowStop})}})(jQuery);(function(a){colorboxAddZoomOverlayToImages=function(c,d){console.debug("Add zoom hover to link %o",c);var b=a('<span class="zoomHover" style="opacity: 0; margin: 0; padding: 0;"></span>');c.css("float",d.css("float"));c.append(b);c.addClass("zoomLink");c.hover(function(){b.stop().animate({opacity:0.8},300);d.stop().animate({opacity:0.6},300)},function(){b.stop().animate({opacity:0},300);d.stop().animate({opacity:1},300)})}})(jQuery);(function(a){getColorboxConfigDefaults=function(){return{colorboxInline:false,colorboxIframe:false,colorboxGroupId:"",colorboxTitle:"",colorboxWidth:false,colorboxHeight:false,colorboxMaxWidth:false,colorboxMaxHeight:false,colorboxSlideshow:false,colorboxSlideshowAuto:false,colorboxScalePhotos:false,colorboxPreloading:false,colorboxOverlayClose:false,colorboxLoop:false,colorboxEscKey:true,colorboxArrowKey:true,colorboxScrolling:false,colorboxOpacity:"0.85",colorboxTransition:"elastic",colorboxSpeed:"350",colorboxSlideshowSpeed:"2500",colorboxClose:"close",colorboxNext:"next",colorboxPrevious:"previous",colorboxSlideshowStart:"start slideshow",colorboxSlideshowStop:"stop slideshow",colorboxCurrent:"{current} of {total} images",colorboxXhrError:"This content failed to load.",colorboxImgError:"This image failed to load.",colorboxImageMaxWidth:false,colorboxImageMaxHeight:false,colorboxImageHeight:false,colorboxImageWidth:false,colorboxLinkHeight:false,colorboxLinkWidth:false,colorboxInitialHeight:100,colorboxInitialWidth:300,autoColorboxJavaScript:false,autoHideFlash:false,autoColorbox:false,autoColorboxGalleries:false,colorboxAddClassToLinks:false,useGoogleJQuery:false,addZoomOverlay:false}}})(jQuery);