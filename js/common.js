
// 메뉴 스크립트

$(document).ready(function () {
  // 메뉴 호버 시 서브메뉴 표시
  $('.menu > li').mouseover(function () {
    $('.submenu', this).stop().slideDown(100);
  });
  $('.menu > li').mouseout(function () {
    $('.submenu', this).stop().slideUp(100);
  });

  // 아이콘 클릭 시 기본 동작 방지 (스크롤 방지용)
  document.getElementById('fixedIcon')?.addEventListener('click', function (event) {
    event.preventDefault();
  });
});





// 커뮤니티 스크립트 (마우스 호버시 기존에 있던 이미지는 사라지고 텍스트가 나오는 스크립트)

$(document).ready(function () {
  $('.user').mouseover(function () {
    $('.user > p').show();
    $('.user > img').hide();
  });
  $('.user').mouseout(function () {
    $('.user > p').hide();
    $('.user > img').show();
  });

  $('.talk').mouseover(function () {
    $('.talk > p').show();
    $('.talk > img').hide();
  });
  $('.talk').mouseout(function () {
    $('.talk > p').hide();
    $('.talk > img').show();
  });
});

// 이하동문
$(document).ready(function () {
  $('.partnership').mouseover(function () {
    $('.partnership > p').show();
    $('.partnership > img').hide();
  });
  $('.partnership').mouseout(function () {
    $('.partnership > p').hide();
    $('.partnership > img').show();
  });

  $('.memo').mouseover(function () {
    $('.memo > p').show();
    $('.memo > img').hide();
  });
  $('.memo').mouseout(function () {
    $('.memo > p').hide();
    $('.memo > img').show();
  });
});