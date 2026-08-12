$(document).ready(function() {
    $(".menu > li").hover(
        function () {
            $(this).find(".submenu").addClass("show");
        },
        function () {
            $(this).find(".submenu").removeClass("show");
        }
    );
});

function syncProductSelect() {
    var select = document.getElementById('productSelect');
    if (!select) return;

    // 현재 페이지 파일명 추출 (예: 01_products.html)
    var currentFile = window.location.pathname.split('/').pop();

    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === currentFile) {
            select.selectedIndex = i;
            break;
        }
    }
}

// 처음 로드될 때
document.addEventListener('DOMContentLoaded', syncProductSelect);

// bfcache로 복원될 때 (뒤로가기/앞으로가기)
window.addEventListener('pageshow', function (event) {
    syncProductSelect();
});
