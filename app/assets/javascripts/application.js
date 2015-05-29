// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require sly.min
//= require_tree .
//= require turbolinks


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(function(){
    if(isMobile)
        $('body').addClass('mobile')
});

$(function(){
    var $frame  = $('.luxury-list');
    var $wrap   = $frame.parent();

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        mouseDragging: 0,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        prev: $wrap.find('.controls .prev'),
        next: $wrap.find('.controls .next')
    });
});


$(function(){
    var $frame  = $('.citations .frame');
    var $wrap   = $frame.parent();

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        mouseDragging: 0,
        touchDragging: 0,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        prev: $wrap.find('.controls .prev'),
        next: $wrap.find('.controls .next')
    });
});



$(function(){
    var $frame = $('.calendars');
    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        mouseDragging: 0,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        //easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1

        //// Buttons
        //prev: $('.months .prev'),
        //next: $('.months .next')
    });
    $('.months li').on('click', function(e){
        var $this = $(this);
        if($this.hasClass('prev')) $frame.sly('prev');
        if($this.hasClass('next')) $frame.sly('next');
        return false;
    })
});

$(function(){
    var $frame = $('.media-container > .gallery');
    var $controls = $frame.siblings('.controls');
    var qty = $frame.find('ul.slidee > li').length;
    $controls.find('span.total').html(qty);
    $frame.find('ul.slidee > li').first().find('.switch.prev').addClass('disabled');
    $frame.find('ul.slidee > li').last().find('.switch.next').addClass('disabled');
    // Call Sly on frame


    $frame.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        mouseDragging: 0,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
        prev: $controls.find('.prev'),
        next: $controls.find('.next')
    });


    $frame.sly('on', 'active', function(a,b){
        $controls.find('span.counter').html(b+1);
    });

    if (!isMobile) {
        $frame.find('.slidee > li > .switch').on('click', function(e){
            var $this = $(this);
            if($this.hasClass('prev')) $frame.sly('prev');
            if($this.hasClass('next')) $frame.sly('next');
            return false;
        })
    }

});






$(function(){

    $(document).on('click', function(e){
        if( !$(e.target).is('span.dropdown') && ( $(e.target).parents('span.dropdown').length == 0 ))
            $('span.dropdown').removeClass('active');
    });

    $('span.dropdown').on('click', function(e){
        var $this = $(this);
        var $target = $(e.target);
        $this.toggleClass('active');
        if($target.is('li')) {
            $target.addClass('active').siblings().removeClass('active');
            $this.find('span').html($target.data('city'))
        }
    });
});


$(function(){
    $('[data-inherited-link]').each(function(){
        var $this = $(this);
        var $link = $this.find($this.data('inheritedLink')).eq(0);
        $this.on('click', function(){
            document.location = $link.attr('href');
        });
        $this.hover(function(){
            $link.addClass('hovered');
        }, function(){
            $link.removeClass('hovered');
        });
    });
});


$(function(){
    $('.sliding-tabs').each(function(){
        var $tabs = $(this);
        var $activeTab = $tabs.find('li.active').eq(0);
        if (!$activeTab.length) {
            $activeTab = $tabs.find('li').eq(0).addClass('active');
        }
        var $bg = $('<div class="bg" />');
        $tabs.prepend($bg);
        $bg.css({
            width: $activeTab.outerWidth(),
            height: $activeTab.outerHeight(),
            top: $activeTab.position().top,
            left: $activeTab.position().left
        });
        $tabs.on('click', 'li', function(){
            var $tab = $(this);
            if($tab.is('.active')) return false;
            $($tabs.find('.active').data('container')).removeClass('active');
            $tab.addClass('active').siblings().removeClass('active');
            $($tab.data('container')).addClass('active');
            console.log($tab.position());
            $bg.css({
                width: $tab.outerWidth(),
                height: $tab.outerHeight(),
                top: $tab.position().top,
                left: $tab.position().left
            })
        });
    });
});





// smooth scroll by CSS-Tricks
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});





$(function(){
    $('header form .open').on('click', function(){
        var $this = $(this);
        if(!isMobile) {
            $this.parents('form').first().addClass('active').find('input').focus();
            $('#fader').addClass('active');
        }
        else {
            document.location = $this.data('url');
        }

    });

    $('header form .close').on('click', function(){
        $('form.main-search').removeClass('active');
        $('#fader').removeClass('active');
    });

    $(document).on('click.mainSearch', function(e){
        var $target = $(e.target);
        if ( !$target.is('form.main-search') && !$target.parents().is('form.main-search') ) {
            $('form.main-search').removeClass('active');
            $('#fader').removeClass('active');
        }
    });
});



// fixed menu
$(function(){
    if (!isMobile) {
        $(document).scroll(function(){
            $('header').toggleClass('scrolled', ($(document).scrollTop() > 70));
        });
    }

});



$(function(){
    $('#event-hat > ul > li').on('click.eventHat', function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $(document).on('click.eventHat', function(e){
        if( !$(e.target).is('#event-hat > ul > li') && ( $(e.target).parents('#event-hat > ul > li').length == 0 ))
            $('#event-hat > ul > li').removeClass('active');
    });
});

