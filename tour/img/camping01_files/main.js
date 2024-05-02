$(function () {
  //
  $('.goto a').on('click', function (e) {
    var href = $(this).attr('href');
    var targetTop = $(href).offset().top - 80;
    /*
      // 한번에 가도록 하는 방법
      $(window).scrollTop(targetTop);
      */
    $('html').stop().animate({ scrollTop: targetTop }, 300);
    e.preventDefault();
  });

  //요금보기
  $('.price-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
  });
  $('.price-popup a.close').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().prev().removeClass('on');
  });
  $('.all-place > div').mouseenter(function (e) {
    $(this).addClass('hover');
    $(this).siblings().addClass('other');
  });
  $('.all-place > div').mouseleave(function (e) {
    $('.all-place > div').removeClass('other');
  });
  //슬라이더
  var mySwiper = new Swiper('.visual', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
      loop: true,
    },
    pagination: {
      el: '.visual .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.visual .swiper-button-next',
      prevEl: '.visual .swiper-button-prev',
    },
    autoHeight: true,
  });

  if ($('.pause-play-state').length == 0) {
    $('.swiper-container').on('mouseenter', function (e) {
      console.log('stop autoplay');
      mySwiper.autoplay.stop();
    });
    $('.swiper-container').on('mouseleave', function (e) {
      console.log('start autoplay');
      mySwiper.autoplay.start();
    });
  } else {
    $('.visual .pause-play-state a.play').on('click', function (e) {
      e.preventDefault();
      $(this).parent().removeClass('pause').addClass('play');
      mySwiper.autoplay.start();
    });
    $('.visual .pause-play-state a.pause').on('click', function (e) {
      e.preventDefault();
      $(this).parent().removeClass('play').addClass('pause');
      mySwiper.autoplay.stop();
    });
  }
  var swiper = new Swiper('.facility', {});
  var flOffset = $('.section .overview').offset().top;
  var voff = flOffset - 720;
  $('.floating').css('top', voff);
});
