$(document).ready(function (e) {
  "use strict";
  $("#header").load("header.html");
  $("#footer").load("footer.html");

  // Main Slider
  var swiper = new Swiper('.banner-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // function(e)
  e("[data-background]").each(function () {
    e(this).css("background-image", "url(" + e(this).attr("data-background") + ")")
  })

});


