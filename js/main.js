"use strict";
var $portfolio_filter,$grid_selectors,$blog,$port_filter;
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


/*==============================================================
 owl slider
 ==============================================================*/

$(document).ready(function () {

    bind_shrink_header();
    
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    
    $(&#039;.owl-slider-full&#039;).owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        items: 3,
        paginationSpeed: 400,
        autoPlay: 5000,
        singleItem: true,
        navigationText: [&#039;<i class="fa fa-long-arrow-left"></i>&#039;, &#039;<i class="fa fa-long-arrow-right"></i>&#039;]
    });
    
    $(&#039;.owl-slider-style2&#039;).owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        items: 2,
        itemsDesktop: [1200, 2],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1],
        paginationSpeed: 400,
         navigationText: [&#039;<i class="fa fa-long-arrow-left"></i>&#039;, &#039;<i class="fa fa-long-arrow-right"></i>&#039;]
    });

    $(&#039;.owl-slider-style3&#039;).owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        items: 3,
        itemsDesktop: [1200, 4],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1],
        paginationSpeed: 400,
        navigationText: [&#039;<i class="fa fa-long-arrow-left"></i>&#039;, &#039;<i class="fa fa-long-arrow-right"></i>&#039;]
    });

    $(&#039;.owl-slider-style4&#039;).owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        items: 4,
        itemsDesktop: [1200, 4],
        itemsTablet: [991, 3],
        itemsMobile: [767, 1],
        paginationSpeed: 400,
         navigationText: [&#039;<i class="fa fa-long-arrow-left"></i>&#039;, &#039;<i class="fa fa-long-arrow-right"></i>&#039;]
    });

    $(&#039;.testimonial-style3&#039;).owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
    });

    $(&#039;.gallery-style4&#039;).owlCarousel({
        navigation: false,
        items: 4,
        itemsDesktop: [1200, 4],
        itemsTablet: [991, 3],
        itemsMobile: [767, 1]
    });

    $(&#039;.owl-slider-auto&#039;).owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        items: 3,
        autoPlay: 5000,
        paginationSpeed: 400,
        singleItem: true,
         navigationText: [&#039;<i class="fa fa-long-arrow-left"></i>&#039;, &#039;<i class="fa fa-long-arrow-right"></i>&#039;]
    });

    $(&#039;.popup-youtube, .popup-vimeo, .popup-gmaps&#039;).magnificPopup({
        disableOn: 700,
        type: &#039;iframe&#039;,
        mainClass: &#039;mfp-fade&#039;,
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //set equalize height
    $(&#039;.equalize&#039;).equalize();

    //fit videos
    $(".fit-videos").fitVids();

    /* ===================================
     counter number reset while scrolling
     ====================================== */
    $(&#039;.timer&#039;).removeClass(&#039;appear&#039;);
    $(&#039;.timer&#039;).appear();
    $(document.body).on(&#039;appear&#039;, &#039;.timer&#039;, function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass(&#039;appear&#039;)) {
            animatecounters();
            $(this).addClass(&#039;appear&#039;);
        }
    });

    /* ===================================
     Tab Active After Export
     ====================================== */
    
    var tab_id = $(&#039;.nav-tabs&#039;).parents(&#039;section&#039;).attr(&#039;id&#039;);
    if(tab_id != undefined)
    {
        var tz_tabs = tab_id.substring(0,3);
        if(tz_tabs == &#039;tab&#039;)
        {
            var rem_href = $(&#039;#&#039;+tab_id).find(&#039;.nav-tabs li.active&#039;).find(&#039;a&#039;).attr(&#039;href&#039;);
            var rem_active =  $(&#039;#&#039;+tab_id).find(&#039;.nav-tabs li.active&#039;).removeClass(&#039;active&#039;);
            $(&#039;#&#039;+tab_id).find(rem_href).removeClass(&#039;active&#039;);
            $(&#039;#&#039;+tab_id).find(&#039;.nav-tabs li&#039;).first().addClass(&#039;active&#039;);
            var first_href = $(&#039;#&#039;+tab_id).find(&#039;.nav-tabs li&#039;).first().find(&#039;a&#039;).attr(&#039;href&#039;);
            $(&#039;#&#039;+tab_id).find(first_href).addClass(&#039;active in&#039;);
        }
    }

    /* ===================================
     Toggle Close 
     ====================================== */
    $(document).on(&#039;click&#039;, &#039;ul.navbar-nav li&#039;, function (event) { 
        $(&#039;#bs-example-navbar-collapse-1&#039;).removeClass(&#039;in&#039;);
        $(&#039;#bs-example-navbar-collapse-1&#039;).addClass(&#039;collapse&#039;);
        $(&#039;.navbar-toggle&#039;).addClass(&#039;collapsed&#039;);
    });


    /* ===================================
     masonry
     ====================================== */

    $blog = $(&#039;.masonry-items&#039;);
    $blog.imagesLoaded(function () {
        $blog.isotope({
            itemSelector: &#039;li&#039;,
            layoutMode: &#039;masonry&#039;
        });
    });

    /*==============================================================*/
    //Lightbox gallery - START CODE
    /*==============================================================*/
    
     $(&#039;.lightbox-gallery&#039;).magnificPopup({
        delegate: &#039;a&#039;,
        type: &#039;image&#039;,
        closeOnContentClick: true,
        closeBtnInside: false,
        midClick: true,
        tLoading: &#039;Loading image #%curr%...&#039;,
        mainClass: &#039;mfp-fade&#039;,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: &#039;<a href="%url%">The image #%curr%</a> could not be loaded.&#039;,
            titleSrc: function (item) {
                return item.el.attr(&#039;title&#039;);
            }
        },
        callbacks: {
                open: function () {
                    $.magnificPopup.instance.close = function() {
                        if (!isMobile){
                            $.magnificPopup.proto.close.call(this);
                        } else {
                            $(document).on(&#039;click&#039;, &#039;button.mfp-close&#039;, function (event) {
                               $.magnificPopup.proto.close.call(this);
                            });
                        }
                    }
                }
            }
    });

     /*==============================================================
     smooth scroll With Shrink Navigation
     ==============================================================*/

    $(window).scroll(function () {
        
        var shrink_header = $(&#039;.shrink-header&#039;).length;
        var shrink_medium_header = $(&#039;.shrink-medium-header&#039;).length;
        var shrink_big_header = $(&#039;.shrink-big-header&#039;).length;
        var shrink_transparent_header_light = $(&#039;.shrink-transparent-header-light&#039;).length;
        var shrink_transparent_header_dark = $(&#039;.shrink-transparent-header-dark&#039;).length;
        if(shrink_medium_header)
        {
            var windowsize = $(window).width();
            if(windowsize <= 991 && windowsize == 768)
            {
              var header_offset = -106;
            }else if(windowsize <= 767){
              var header_offset = -90;
            }else{
              var header_offset = -110;
            }
            
        }else if(shrink_big_header){
            var windowsize = $(window).width();
            if(windowsize <= 991)
            {
              var header_offset = -64;
            }else{
              var header_offset = -115;
            }
            
        }else if(shrink_header || shrink_transparent_header_light || shrink_transparent_header_dark){
            var windowsize = $(window).width();
            if(windowsize <= 991 && windowsize == 768)
            {
              var header_offset = -64;
            }else if(windowsize <= 767){
              var header_offset = -60;
            }else{
              var header_offset = -68;
            }
            
        }else{
            var header_offset = 1;
        }
        $(&#039;.inner-link&#039;).smoothScroll({
            speed: 900,
            offset: header_offset
        });

        $(&#039;a.btn:not(.inner-link)&#039;).smoothScroll({
            speed: 900,
            offset: header_offset
        });
    });


    /* ===================================
     shrink navigation Active
     ====================================== */
    $(&#039;.navigation-menu&#039;).onePageNav({
        scrollSpeed: 750,
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 79, //Height of Navigation Bar
        currentClass: &#039;active&#039;,
        filter: &#039;:not(.btn-very-small)&#039;
    });
    /*===========================================================
     Contact Form 
     ============================================================ */

    $(&#039;.tz_submit&#039;).on(&#039;click&#039;, function (event) {
        event.preventDefault();
        var name_attr = [];
        var values = [];
        var tz_process = "";
        if($(this).closest("section").attr(&#039;id&#039;) !== undefined)
        {
            var section_id = $(this).closest("section").attr(&#039;id&#039;);
        }else{
            var section_id = $(this).closest("footer").attr(&#039;id&#039;);
        }
        var submit_loader = &#039;<div class="loading text-deep-green display-inline-block margin-five no-margin-tb no-margin-right" id="loading">Loading...</div>&#039;;
        $(&#039;#&#039; + section_id).find(&#039;form&#039;).find(&#039;button&#039;).after(submit_loader);
        $(&#039;#&#039; + section_id).find(&#039;form input, form select,form textarea&#039;).each(
                function (index) {
                    
                    if ($(this).is(&#039;[data-email="required"]&#039;)) {
                        var required_val = $(this).val();
                        if (required_val != &#039;&#039;) {
                            name_attr.push($(this).attr(&#039;name&#039;));
                            values.push($(this).val());
                            tz_process = true;
                        } else {
                            $(&#039;#loading&#039;).remove();
                            $(this).addClass(&#039;tz_input_error&#039;);
                            tz_process = false;
                        }
                    }

                    if (!$(this).is(&#039;[data-email="required"]&#039;)) {
                        name_attr.push($(this).attr(&#039;name&#039;));
                        values.push($(this).val());
                    }

                });
        
        var captcha_length = $(&#039;.g-recaptcha&#039;).length;
        if (captcha_length >= 1) {
            var response = grecaptcha.getResponse();
            //recaptcha failed validation
            if (response.length == 0) {
                $(&#039;#loading&#039;).remove();
                $(&#039;#google-recaptcha-error&#039;).remove();
                $(&#039;#&#039; + section_id).find(&#039;.g-recaptcha&#039;).after(&#039;<span class="google-recaptcha-error" id="google-recaptcha-error">Invalid recaptcha</span>&#039;);
                tz_process = false;
            } else {
                $(&#039;#google-recaptcha-error&#039;).remove();
                $(&#039;#recaptcha-error&#039;).hide();
                tz_process = true;
            }
        }
        if (tz_process) 
        {
            localStorage.setItem(&#039;tz_section&#039;,section_id);
            $.post("tz_mail/contact.php", {
                data: { input_name: name_attr,values:values,section_id:section_id},
                type: "POST",
            }, function (data) {
                $(&#039;#loading&#039;).remove();
                var tz_form_output = &#039;&#039;;
                if(data) 
                {
                    if(data.type == "tz_message") 
                    {
                       $(&#039;#error&#039;).remove(); 
                       $(&#039;#success&#039;).remove();
                       $(&#039;#google-recaptcha-error&#039;).remove(); 
                       var tz_form_output = &#039;<div id="success" class="no-margin-lr alt-font">&#039;+data.text+&#039;</div>&#039;;
                    }else if (data.type == "tz_error") {
                        $(&#039;#success&#039;).remove();
                        $(&#039;#error&#039;).remove(); 
                        var tz_form_output = &#039;<div id="error" class="no-margin-lr alt-font">&#039;+data.text+&#039;</div>&#039;;
                    }else{
                        var tz_form_output = &#039;&#039;;
                    } 
                }

                if(tz_form_output != &#039;&#039;)
                {
                    var section_id = localStorage.getItem(&#039;tz_section&#039;);
                    $(&#039;#&#039;+section_id).find(&#039;form&#039;).before(tz_form_output);
                }
                $(&#039;#&#039; + section_id).find(&#039;form input,form textarea&#039;).each(function (index) {
                    $(this).val(&#039;&#039;);
                    $(this).removeClass(&#039;tz_input_error&#039;);
                });

                setTimeout(function(){
                    $(&#039;#success&#039;).fadeOut();
                    $(&#039;#success&#039;).remove();
                    $(&#039;#error&#039;).fadeOut();
                    $(&#039;#error&#039;).remove();
                    $(this).submit();
                 },5000);
                localStorage.removeItem(&#039;tz_section&#039;);
            }, &#039;json&#039;);
        }
        
        $(&#039;#&#039; + section_id).find(&#039;form input,form textarea&#039;).each(function (index) {
            $(this).keypress(function () {
                $(this).removeClass(&#039;tz_input_error&#039;);
            });
        });

        $(&#039;#&#039; + section_id).find(&#039;form input,form textarea&#039;).each(function (index) {
            if ($(this).is(":focus")) {
                $(this).removeClass(&#039;tz_input_error&#039;);
            }
        });

        $(&#039;#&#039; + section_id).find(&#039;form select&#039;).each(function (index) {
            $(this).on("change", function () {
                var val = this.value;
                if (val == &#039;&#039;){
                    $(this).removeClass(&#039;tz_input_error&#039;);
                }
            });
        });
    });
    
});

/* ===================================
 shrink navigation
 ====================================== */
$(window).scroll(function () {
    bind_shrink_header();
});

function bind_shrink_header() {
    if ($(&#039;nav&#039;).hasClass(&#039;shrink-header&#039;)) {

        $(&#039;.shrink-header&#039;).addClass(&#039;shrink-nav&#039;);
        $(&#039;section:first&#039;).addClass(&#039;header-margin-top&#039;);

    } else if ($(&#039;nav&#039;).hasClass(&#039;shrink-big-header&#039;)) {

        $(&#039;.shrink-big-header&#039;).addClass(&#039;shrink-nav&#039;);
        $(&#039;section:first&#039;).addClass(&#039;header-margin-top-big&#039;);

    } else if ($(&#039;nav&#039;).hasClass(&#039;shrink-medium-header&#039;)) {

        $(&#039;.shrink-medium-header&#039;).addClass(&#039;shrink-nav&#039;);
        $(&#039;section:first&#039;).addClass(&#039;header-margin-top-medium&#039;);

    } else if ($(&#039;nav&#039;).hasClass(&#039;shrink-transparent-header-dark&#039;)) {

        $(&#039;.shrink-transparent-header-dark&#039;).addClass(&#039;shrink-nav&#039;);

    } else if ($(&#039;nav&#039;).hasClass(&#039;shrink-transparent-header-light&#039;)) {

        $(&#039;.shrink-transparent-header-light&#039;).addClass(&#039;shrink-nav&#039;);

    } else {

        $(&#039;.shrink-header&#039;).removeClass(&#039;shrink-nav&#039;);
        $(&#039;section:first&#039;).removeClass(&#039;header-margin-top&#039;);
    }

    if ($(window).scrollTop() > 10) {
        $(&#039;nav&#039;).addClass(&#039;shrink&#039;);
    } else {
        $(&#039;nav&#039;).removeClass(&#039;shrink&#039;);
    }
}

setTimeout(function () {
    $(window).scroll();
}, 500);


/*==============================================================
 portfolio-filter
 ==============================================================*/

$portfolio_filter = $(&#039;.grid&#039;);
$portfolio_filter.imagesLoaded(function () {
    $portfolio_filter.isotope({
        itemSelector: &#039;li&#039;,
        layoutMode: &#039;masonry&#039;
    });
});

$grid_selectors = $(&#039;.portfolio-filter > li > a&#039;);
$grid_selectors.on(&#039;click&#039;, function ()
{
    $portfolio_filter = $(&#039;.grid&#039;);
    $(&#039;.portfolio-filter > li&#039;).removeClass(&#039;active&#039;);
    $(this).parent().addClass(&#039;active&#039;);

    var selector = $(this).attr(&#039;data-filter&#039;);
    $portfolio_filter.imagesLoaded(function () {
        $portfolio_filter.isotope({
            filter: selector,
            itemSelector: &#039;li&#039;,
            layoutMode: &#039;masonry&#039;

        });
    });
    return false;
});

$(window).resize(function () {
    setTimeout(function () {
        $portfolio_filter.isotope(&#039;layout&#039;);
        //set equalize height
        if (!isMobile.any()) {
            $(window).unbind(&#039;equalize&#039;);
            //$(&#039;.equalize > div&#039;).css(&#039;height&#039;, &#039;&#039;);
            $(&#039;.equalize&#039;).equalize();
        }
    }, 500);
});

$(window).on("orientationchange", function () {
    if (isMobile.any()) {
        $(window).unbind(&#039;equalize&#039;);
        setTimeout(function () {
            $(&#039;.equalize&#039;).equalize();
        }, 500);
    }
});

$(window).load(function () {
    //set equalize height
    $(&#039;.equalize&#039;).equalize();
});

/*==============================================================
 accordion
 ==============================================================*/

$(&#039;.accordion-style1 .collapse&#039;).on(&#039;show.bs.collapse&#039;, function () {
    var id = $(this).attr(&#039;id&#039;);
    $(&#039;a[href="#&#039; + id + &#039;"]&#039;).closest(&#039;.panel-heading&#039;).addClass(&#039;active-accordion&#039;);
    $(&#039;a[href="#&#039; + id + &#039;"] .panel-title&#039;).find(&#039;i&#039;).addClass(&#039;fa-angle-up&#039;).removeClass(&#039;fa-angle-down&#039;);
});
$(&#039;.accordion-style1 .collapse&#039;).on(&#039;hide.bs.collapse&#039;, function () {
    var id = $(this).attr(&#039;id&#039;);
    $(&#039;a[href="#&#039; + id + &#039;"]&#039;).closest(&#039;.panel-heading&#039;).removeClass(&#039;active-accordion&#039;);
    $(&#039;a[href="#&#039; + id + &#039;"] .panel-title&#039;).find(&#039;i&#039;).removeClass(&#039;fa-angle-up&#039;).addClass(&#039;fa-angle-down&#039;);
});

/*==============================================================
 countdown timer
 ==============================================================*/

$(&#039;#counter-event&#039;).countdown($(&#039;#counter-event&#039;).attr("data-enddate")).on(&#039;update.countdown&#039;, function (event) {
    var $this = $(this).html(event.strftime(&#039;&#039; + &#039;<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>&#039; + &#039;<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>&#039; + &#039;<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>&#039; + &#039;<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>&#039;))
});

/*==============================================================
 counter
 ==============================================================*/

jQuery(function ($) {
    // start all the timers
    animatecounters();
});

function animatecounters() {
    $(&#039;.timer&#039;).each(count);
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data(&#039;countToOptions&#039;) || {});
        $this.countTo(options);
    }

}

/* ===========================================================
   TWITTER FEED
============================================================== */
function handleTweets(tweets) {
    
    var x = tweets.length,
    n = 0,
    element = document.getElementById(&#039;twitter-feed&#039;),
    html = &#039;<div class="twitter-post-slides">&#039;;
    while (n < x) {
        html += &#039;<div>&#039; + tweets[n] + &#039;</div>&#039;;
        n++;
    }
    html += &#039;</div>&#039;;
    
    element.innerHTML = html;
       
    /* Twits attached to owl-carousel */
    $(".twitter-post-slides").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay: true,
        pagination: false,
        transitionStyle : "fade",
        singleItem: true
    });
}

if( $(&#039;#twitter-feed&#039;).length ) 
{   
    var widgetId = $(&#039;#twitter-feed&#039;).attr(&#039;data-widget-id&#039;);
    var tz_config_feed = {
      "id": widgetId,
      "domId": &#039;twitter-feed&#039;,
      "maxTweets": 5,
      "enableLinks": true,
      "showUser": false,
      "showTime": true,
      "dateFunction": &#039;&#039;,
      "showRetweet": false,
      "customCallback": handleTweets,
      "showInteraction": false
    };
    twitterFetcher.fetch(tz_config_feed);
}

/*==============================================================
 wow animation - on scroll
 ==============================================================*/

var wow = new WOW({
    boxClass: &#039;wow&#039;,
    animateClass: &#039;animated&#039;,
    offset: 90,
    mobile: false,
    live: true
});
wow.init();