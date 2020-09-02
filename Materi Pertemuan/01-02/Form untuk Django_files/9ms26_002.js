// source --> https://www.duniailkom.com/wp-content/themes/mts_newsonline/js/customscript.js?ver=7d1891d66a703cfb056f8c65bac8e28f 
jQuery.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

/*----------------------------------------------------
/* Show/hide Scroll to top
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
	//move-to-top arrow
	jQuery("body").prepend("<a id='move-to-top' class='animate ' href='#blog'><i class='fa fa-angle-up'></i></a>");
    
	var scrollDes = 'html,body';  
	/*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
	if(navigator.userAgent.match(/opera/i)){
		scrollDes = 'html';
	}
	//show ,hide
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 160) {
			jQuery('#move-to-top').addClass('filling').removeClass('hiding');
		} else {
			jQuery('#move-to-top').removeClass('filling').addClass('hiding');
		}
	});
});

/*----------------------------------------------------
/* Header Search
/*---------------------------------------------------*/
jQuery(document).ready(function($){
    var $header = $('.main-header');
    var $trigger = $('#trigger-overlay');
    var $overlay = $header.find('.overlay');
    var $input = $header.find('.hideinput, .header-search .fa-search');
    $trigger.click(function(e){
        $overlay.addClass('open').find('input').focus();
    });
    $('.overlay-close').click(function(e) {
        jQuery('.main-header .overlay').addClass('closed').removeClass('open');
        setTimeout(function() { jQuery('.main-header .overlay').removeClass('closed'); }, 400);
    });
}).click(function(e) {
    $target = jQuery(e.target);
    if ($target.is('.overlay') || $target.closest('.overlay').length) return true;

    jQuery('.main-header .overlay').addClass('closed').removeClass('open');
    setTimeout(function() { jQuery('.main-header .overlay').removeClass('closed'); }, 400);
});

jQuery(document).ready(function($){
    $('#trigger-overlay').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
});

/*----------------------------------------------------
/* Make all anchor links smooth scrolling
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
 // scroll handler
  var scrollToAnchor = function( id, event ) {
    // grab the element to scroll to based on the name
    var elem = $("a[name='"+ id +"']");
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = $("#"+id);
    }
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" ) {
      // cancel default event propagation
      event.preventDefault();

      // do the scroll
      var scroll_to = elem.offset().top;
      $('html, body').animate({
              scrollTop: scroll_to
      }, 600, 'swing', function() { if (scroll_to > 46) window.location.hash = id; } );
    }
  };
  // bind to click event
  $("a").click(function( event ) {
    // only do this if it's an anchor link
    var href = $(this).attr("href");
    if ( href && href.match("#") && href !== '#' ) {
      // scroll to the location
      var parts = href.split('#'),
        url = parts[0],
        target = parts[1];
      if ((!url || url == window.location.href.split('#')[0]) && target)
        scrollToAnchor( target, event );
    }
  });
});

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
if (mts_customscript.responsive && mts_customscript.nav_menu != 'none') {
    jQuery(document).ready(function($){
        // merge if two menus exist
        if (mts_customscript.nav_menu == 'both') {
            $('#navigation').not('.mobile-menu-wrapper').find('.menu').clone().appendTo('.mobile-menu-wrapper').hide();
        }
    
        $('.toggle-mobile-menu').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('body').toggleClass('mobile-menu-active');
        });
        
        // prevent propagation of scroll event to parent
        $(document).on('DOMMouseScroll mousewheel', '.mobile-menu-wrapper', function(ev) {
            var $this = $(this),
                scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = $this.height(),
                delta = (ev.type == 'DOMMouseScroll' ?
                    ev.originalEvent.detail * -40 :
                    ev.originalEvent.wheelDelta),
                up = delta > 0;
        
            var prevent = function() {
                ev.stopPropagation();
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            }

            if ( $('a#pull').css('display') !== 'none' ) { // if toggle menu button is visible ( small screens )
        
              if (!up && -delta > scrollHeight - height - scrollTop) {
                  // Scrolling down, but this will take us past the bottom.
                  $this.scrollTop(scrollHeight);
                  return prevent();
              } else if (up && delta > scrollTop) {
                  // Scrolling up, but this will take us past the top.
                  $this.scrollTop(0);
                  return prevent();
              }
            }
        });
    }).on('click', function(event) {

        var $target = jQuery(event.target);
        if ( ( $target.hasClass("fa") && $target.parent().hasClass("toggle-caret") ) ||  $target.hasClass("toggle-caret") ) {// allow clicking on menu toggles
            return;
        }

        jQuery('body').removeClass('mobile-menu-active');
    });


}

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) {
    
    function mtsDropdownMenu() {
        var wWidth = $(window).width();
        if(wWidth > 865) {
            $('#navigation ul.sub-menu, #navigation ul.children').hide();
            var timer;
            var delay = 100;
            $('#navigation li').hover( 
              function() {
                var $this = $(this);
                timer = setTimeout(function() {
                    $this.children('ul.sub-menu, ul.children').slideDown('fast');
                }, delay);
                
              },
              function() {
                $(this).children('ul.sub-menu, ul.children').hide();
                clearTimeout(timer);
              }
            );
        } else {
            $('#navigation li').unbind('hover');
            $('#navigation li.active > ul.sub-menu, #navigation li.active > ul.children').show();
        }
    }

    mtsDropdownMenu();

    $(window).resize(function() {
        mtsDropdownMenu();
    });
});

/*---------------------------------------------------
/*  Vertical menus toggles
/* -------------------------------------------------*/
jQuery(document).ready(function($) {

    $('.widget_nav_menu, #navigation .menu').addClass('toggle-menu');
    $('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
    $('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');

    $('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="fa fa-plus"></i></span>');

    $('.toggle-caret').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
    });
});

/*----------------------------------------------------
/* Ajax top posts
/*---------------------------------------------------*/
jQuery(document).ready(function($) {
    jQuery('.featured-top-news .dropdown li a').on('click', function(e) {
      e.preventDefault();
      //if ($(this).hasClass('noclick')) return true;

      var period = jQuery(this).data('period');
      var cat = jQuery(this).closest('.dropdown').data('cat');
      if (!cat) cat = '';
      jQuery('.get_posts').empty();
      jQuery('.get_posts').append('<i class="fa fa-spinner fa-spin"></i>');
      jQuery.ajax({
           type : 'post',
           url: mts_customscript.ajaxurl,
           data: {
              'action':'mts_top_post',
              'period' : period,
              'cat' : cat
          },

           success: function(response) {
            if(response=='')
            {
                jQuery('.get_posts').empty();
                jQuery('.get_posts').append('<li>'+mts_customscript.noposts+'</li>');
              }
              else
              {
                jQuery('.get_posts').empty();
                jQuery('.get_posts').append(response);

              }
            }
      });   
    }); 
});

/*----------------------------------------------------
/* Social button scripts
/*---------------------------------------------------*/
jQuery(document).ready(function($){
	(function(d, s) {
	  var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.src = url; js.id = id;
		fjs.parentNode.insertBefore(js, fjs);
	  };
	jQuery('span.facebookbtn, .facebook_like').exists(function() {
	  load('//connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
	});
	jQuery('span.gplusbtn').exists(function() {
	  load('https://apis.google.com/js/plusone.js', 'gplus1js');
	});
	jQuery('span.twitterbtn').exists(function() {
	  load('//platform.twitter.com/widgets.js', 'tweetjs');
	});
	jQuery('span.linkedinbtn').exists(function() {
	  load('//platform.linkedin.com/in.js', 'linkedinjs');
	});
	jQuery('span.pinbtn').exists(function() {
	  load('//assets.pinterest.com/js/pinit.js', 'pinterestjs');
	});
	jQuery('span.stumblebtn').exists(function() {
	  load('//platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
	});
	}(document, 'script'));
});

/*----------------------------------------------------
/* Lazy load avatars
/*---------------------------------------------------*/
jQuery(document).ready(function($){
    var lazyloadAvatar = function(){
        $('.comment-author .avatar').each(function(){
            var distanceToTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var isVisible = distanceToTop - scroll < windowHeight;
            if( isVisible ){
                var hashedUrl = $(this).attr('data-src');
                if ( hashedUrl ) {
                    $(this).attr('src',hashedUrl).removeClass('loading');
                }
            }
        });
    };
    if ( $('.comment-author .avatar').length > 0 ) {
        $('.comment-author .avatar').each(function(i,el){
            $(el).attr('data-src', el.src).removeAttr('src').addClass('loading');
        });
        $(function(){
            $(window).scroll(function(){
                lazyloadAvatar();
            });
        });
        lazyloadAvatar();
    }
});

jQuery(document).ready(function($){

  $('#featured-dropdown').on('click', function() {
    $(this).toggleClass('active');
  });
  $('body').click(function(e) {
    if (!$(e.target).closest('#featured-dropdown').length)
      $('#featured-dropdown').removeClass('active');
  });

  $('#featured-dropdown li').on('click', function() {
    var first = $(this).text();
    $('#featured-dropdown .alltime').text(first);
  });
  $('.noclick').click(function(event) {
    event.preventDefault();
  });

});
// source --> https://www.duniailkom.com/wp-content/themes/mts_newsonline/js/jquery.webticker.min.js?ver=7d1891d66a703cfb056f8c65bac8e28f 
(function(e){var f=(function(){var k=document.createElement("p").style,j=["ms","O","Moz","Webkit"];if(k.transition==""){return true}while(j.length){if(j.pop()+"Transition" in k){return true}}return false})();function b(k,j){var m=k.data("settings");if(typeof j==="undefined"){j=false}if(j){a(k)}var l=h(k);k.animate(l.css,l.time,"linear",function(){k.css(m.direction,"0");b(k,true)})}function h(j){var m=j.data("settings");var n=j.children().first();var o=Math.abs(-j.css(m.direction).replace("px","").replace("auto","0")-n.outerWidth(true));var m=j.data("settings");var k=o*1000/m.speed;var l={};l[m.direction]=j.css(m.direction).replace("px","").replace("auto","0")-o;return{css:l,time:k}}function a(j){var k=j.data("settings");j.css("transition-duration","0s").css(k.direction,"0");var l=j.children().first();if(l.hasClass("webticker-init")){l.remove()}else{j.children().last().after(l)}}function d(k,j){if(typeof j==="undefined"){j=false}if(j){a(k)}var l=h(k);var m=l.time/1000;m+="s";k.css(l.css).css("transition-duration",m)}function i(l,k,j){var m;e.get(l,function(o){var n=e(o);n.find("item").each(function(){var q=e(this),p={title:q.find("title").text(),link:q.find("link").text()};listItem="<li><a href='"+p.link+"'>"+p.title+"</a></li>";m+=listItem});j.webTicker("update",m,k)})}function g(l){var n=l.data("settings");l.width("auto");var m=0;l.children("li").each(function(){m+=e(this).outerWidth(true)});if(m<l.parent().width()||l.children().length==1){if(n.duplicate){itemWidth=Math.max.apply(Math,l.children().map(function(){return e(this).width()}).get());while(m-itemWidth<l.parent().width()||l.children().length==1){var o=l.children().clone();l.append(o);m=0;l.children("li").each(function(){m+=e(this).outerWidth(true)});itemWidth=Math.max.apply(Math,l.children().map(function(){return e(this).width()}).get())}}else{var k=l.parent().width()-m;k+=l.find("li:first").width();var j=l.find("li:first").height();l.append('<li class="ticker-spacer" style="width:'+k+"px;height:"+j+'px;"></li>')}}if(n.startEmpty){var j=l.find("li:first").height();l.prepend('<li class="webticker-init" style="width:'+l.parent().width()+"px;height:"+j+'px;"></li>')}m=0;l.children("li").each(function(){m+=e(this).outerWidth(true)});l.width(m+200);widthCompare=0;l.children("li").each(function(){widthCompare+=e(this).outerWidth(true)});while(widthCompare>=l.width()){l.width(l.width()+200);widthCompare=0;l.children("li").each(function(){widthCompare+=e(this).outerWidth(true)})}}var c={init:function(j){j=jQuery.extend({speed:50,direction:"left",moving:true,startEmpty:true,duplicate:false,rssurl:false,hoverpause:true,rssfrequency:0,updatetype:"reset"},j);return this.each(function(){jQuery(this).data("settings",j);var k=jQuery(this);k.addClass("newsticker");var m=k.wrap("<div class='mask'></div>");m.after("<span class='tickeroverlay-left'>&nbsp;</span><span class='tickeroverlay-right'>&nbsp;</span>");var l=k.parent().wrap("<div class='tickercontainer'></div>");g(k);if(j.rssurl){i(j.rssurl,j.type,k);if(j.rssfrequency>0){window.setInterval(function(){i(j.rssurl,j.type,k)},j.rssfrequency*1000*60)}}if(f){k.css("transition-duration","0s").css(j.direction,"0");d(k,false);k.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(n){if(!k.is(n.target)){return false}d(e(this),true)})}else{b(e(this))}if(j.hoverpause){k.hover(function(){if(f){var n=e(this).css(j.direction);e(this).css("transition-duration","0s").css(j.direction,n)}else{jQuery(this).stop()}},function(){if(jQuery(this).data("settings").moving){if(f){d(e(this),false)}else{b(k)}}})}})},stop:function(){var j=e(this).data("settings");if(j.moving){j.moving=false;return this.each(function(){if(f){var k=e(this).css(j.direction);e(this).css("transition-duration","0s").css(j.direction,k)}else{e(this).stop()}})}},cont:function(){var j=e(this).data("settings");if(!j.moving){j.moving=true;return this.each(function(){if(f){d(e(this),false)}else{b(e(this))}})}},update:function(p,n,o,j){n=n||"reset";if(typeof o==="undefined"){o=true}if(typeof j==="undefined"){j=false}if(typeof p==="string"){p=e(p)}var k=e(this);k.webTicker("stop");var m=e(this).data("settings");if(n=="reset"){k.html(p);k.css(m.direction,"0");g(k)}else{if(n=="swap"){k.children("li").addClass("old");for(var l=0;l<p.length;l++){id=e(p[l]).data("update");match=k.find('[data-update="'+id+'"]');if(match.length<1){if(o){if(k.find(".ticker-spacer:first-child").length==0&&k.find(".ticker-spacer").length>0){k.children("li.ticker-spacer").before(p[l])}else{k.append(p[l])}}}else{k.find('[data-update="'+id+'"]').replaceWith(p[l])}}k.children("li.webticker-init, li.ticker-spacer").removeClass("old");if(j){k.children("li").remove(".old")}stripWidth=0;k.children("li").each(function(){stripWidth+=e(this).outerWidth(true)});k.width(stripWidth+200)}}k.webTicker("cont")}};e.fn.webTicker=function(j){if(c[j]){return c[j].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof j==="object"||!j){return c.init.apply(this,arguments)}else{e.error("Method "+j+" does not exist on jQuery.webTicker")}}}})(jQuery);
jQuery(function(){
	jQuery(".trending-slider").webTicker({startEmpty:false});	
});