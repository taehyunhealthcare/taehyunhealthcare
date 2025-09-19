$(document).ready(function () {
  var $slides = $('#slide a');
  var $indicators = $('#slide .indicators span');
  var current = 0;
  var slideCount = $slides.length;
  var interval;
  var fadeTime = 1000;

  // 초기 상태
  $slides.hide().eq(current).show();
  $indicators.eq(current).addClass('active');

  function showSlide(index) {
    if (current === index) return;
    $slides.eq(current).fadeOut(fadeTime);
    $slides.eq(index).fadeIn(fadeTime);
    $indicators.removeClass('active').eq(index).addClass('active');
    current = index;
  }

  function nextSlide() {
    var next = (current + 1) % slideCount;
    showSlide(next);
  }

  function prevSlide() {
    var prev = (current - 1 + slideCount) % slideCount;
    showSlide(prev);
  }

  // 자동 슬라이드
  function startSlider() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  // 버튼 이벤트
  $('.next').click(function(){
    stopSlider();
    nextSlide();
    startSlider();
  });

  $('.prev').click(function(){
    stopSlider();
    prevSlide();
    startSlider();
  });

  // 인디케이터 클릭 이벤트
  $indicators.click(function(){
    stopSlider();
    var index = $(this).data('index');
    showSlide(index);
    startSlider();
  });

  // 시작
  startSlider();
});
