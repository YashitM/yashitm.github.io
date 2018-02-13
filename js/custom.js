$(function(){
    $(".custom-nav").hide();
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 20,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    
    $('.custom-nav').singlePageNav({
        offset: $(".custom-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".custom-nav").fadeIn(500);                        
            $(".custom-nav").addClass("sticky");

        }
        else{
            $(".custom-nav").fadeOut(500);
        }
    });
    
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('body').bind('touchstart', function() {});
    new WOW().init();
});

$(window).load(function(){
	$('.preloader').fadeOut(1000); 
});
