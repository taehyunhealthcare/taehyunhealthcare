
// 배너 스크립트

$(document).ready(function () {
  $('#banner1').click(function () {
    $('#banner3, #banner4, #banner5, .close').show();
    $('#banner1').hide();
  });

  $('.close').click(function () {
    $('#banner3, #banner4, #banner5, .close').hide();
    $('#banner1').show();
  });
});