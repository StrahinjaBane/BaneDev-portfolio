/**
 * Author: Strahinja Bane Drcelic (drcelicbane@gmail.com)
 * Date: 11-Jul-18
 * Time: 1:06 PM
 */
"use strict";

// $(document).ready(function() {
//
// var ScrollLink = $('.scroll');
//     console.log(ScrollLink);
//
// ScrollLink.click(function(e) {
// e.preventDefault();
// })
//
// });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});