$(function(e){
    $('#sea-tabmenu > li').mouseenter(function(){        
        $(this).find('.sea-subtabmenu').stop().slideDown();
    });
    $('#sea-tabmenu > li').mouseleave(function(){        
        $(this).find('.sea-subtabmenu').stop().slideUp();
    });
});