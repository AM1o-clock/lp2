
// Slick
$('.carousel').slick({
  autoplay: false, // 自動再生
  autoplaySpeed: 2000, // 自動再生の速さ、単位はミリ秒
  dots: true, // ドットを表示
  fade: false, // フェードで切り替え
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
