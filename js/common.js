$(document).ready(function() {
    // 1. 기존의 복잡한 높이 계산 및 .menu-bg 제어 코드는 삭제합니다.
    // 2. 각 메뉴 항목(li)에 마우스를 올렸을 때의 동작만 정의합니다.

    $(".menu > li").hover(
        function () {
            // 현재 마우스가 올라간 항목의 서브메뉴만 표시
            $(this).find(".submenu").stop(true, true).fadeIn(200);
        },
        function () {
            // 마우스가 나가면 해당 서브메뉴만 숨김
            $(this).find(".submenu").stop(true, true).fadeOut(150);
        }
    );
});
