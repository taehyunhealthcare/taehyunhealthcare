$(document).ready(function() {
    $(".menu-pc").hover(
        function () {
            let maxHeight = 0;

            // 각 submenu의 실제 높이를 계산
            $(".submenu").each(function() {
                $(this).css({
                    'display': 'block',
                    'visibility': 'hidden',
                    'position': 'absolute'
                });

                const currentHeight = $(this).outerHeight();
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight;
                }

                $(this).css({
                    'display': 'none',
                    'visibility': 'visible',
                    'position': 'absolute'
                });
            });

            const targetBgHeight = maxHeight + 10;

            // 서브메뉴 표시 (fade 방식)
            $(".submenu").stop(true, true).fadeIn(200);

            // 배경 높이 적용
            $(".menu-bg").stop(true, true).animate({
                height: targetBgHeight + "px"
            }, 200);
        },
        function () {
            // 서브메뉴 숨김
            $(".submenu").stop(true, true).fadeOut(150);

            // 배경 닫기
            $(".menu-bg").stop(true, true).animate({
                height: "0"
            }, 150);
        }
    );
});



      // 검색창 초기화 스크립트
    window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        const searchInput = document.querySelector('input[name="query"]');
        if (searchInput) searchInput.value = '';
    }
    });
