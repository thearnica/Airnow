import $ from 'jquery';
import './slick.js';

if (window.matchMedia("(max-width: 639px)").matches) {
  $(document).ready(function () {
    $('.airnow-extra__list').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });

  $(document).ready(function () {
    $('.airnow-stories__list').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });
}
