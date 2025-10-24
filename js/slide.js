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



// 모바일 이미지 슬라이드 

$(document).ready(function () {
  var $slides = $('#mobile-slide a');
  var $indicators = $('#mobile-slide .indicators span');
  var current = 0;
  var slideCount = $slides.length;
  var interval;
  var fadeTime = 1000;

  // 초기 상태
  $slides.css({ position: 'absolute', top: 0, left: 0 }).hide().eq(current).show();
  $indicators.eq(current).addClass('active');

  function showSlide(index) {
    if (current === index) return;

    // 자연스러운 전환
    $slides.eq(current).stop(true, true).fadeOut(fadeTime);
    $slides.eq(index).stop(true, true).fadeIn(fadeTime);

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

  // 인디케이터 클릭
  $indicators.click(function () {
    stopSlider();
    var index = $(this).data('index');
    showSlide(index);
    startSlider();
  });

  // 시작
  startSlider();
});
