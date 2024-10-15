
// Slick
$('.carousel').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  fade: false,
  prevArrow: '<button type=”button” class=slick-prev><i class="bi bi-arrow-left-short"></i></button>',
  nextArrow: '<button type=”button” class=slick-next><i class="bi bi-arrow-right-short"></i></button>',
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      }
    },]
});




// アコーディオン
$(function () {
  $('.accordion__item--answer').hide();
  $('.accordion__item--question').on('click', function() {
  $(this).children("div").toggleClass("accordion__item--button-active");
  $(this).next().slideToggle();

});
});
