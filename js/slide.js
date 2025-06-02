
// 슬라이드 페이드인 페이드 아웃

$(document).ready(function () {
  $('#slide a:gt(0)').hide();
  setInterval(function () {
    $('#slide a:first')
      .fadeOut(1000)
      .next('a')
      .fadeIn(1000)
      .end()
      .appendTo('#slide');
  }, 3000);
});