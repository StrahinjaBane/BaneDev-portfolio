/**
 * User: Strahinja
 * Date: 25/05/2018
 * Time: 11:55 AM
 */
"use strict";
(function(){
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');




    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');


    headerContainer.load('header.html',function(){
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
    });



    footerContainer.load('footer.html');


}());


$(window).scroll(function() {
    if ($(document).scrollTop() > 70) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 70) {
        $('.logo-container').addClass('small');
    } else {
        $('.logo-container').removeClass('small');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 70) {
        $('.main-menu-container').addClass('x-small');
    } else {
        $('.main-menu-container').removeClass('x-small');
    }
});



