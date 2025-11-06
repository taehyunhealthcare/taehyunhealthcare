$(document).ready(function() {
    let maxHeight = 0;


    $(".submenu").each(function() {
        $(this).css({
            'display': 'block', 
            'position': 'absolute', 
            'visibility': 'hidden' 
        });
        
        const currentHeight = $(this).outerHeight(); 
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
        }
        
        $(this).css({
            'display': 'none', 
            'position': 'absolute', 
            'visibility': 'visible' 
        });
    });

    const targetBgHeight = maxHeight + 10;

    $(".menu-pc").hover(
        function() {
            $(".submenu").stop(true, true).slideDown(250);
            $(".menu-bg").stop(true, true).animate({
                height: targetBgHeight + 'px'
            }, 250);
        },
        function() {
            $(".submenu").stop(true, true).slideUp(200);
            $(".menu-bg").stop(true, true).animate({
                height: '0'
            }, 200);
        }
    );
});

    // app.post('/submit', (req, res) => {
    // const { title, writer, content } = req.body;
    // const date = new Date();

    
    // db.collection('inquiries').insertOne({
    //     title, writer, content, date
    // });

    // res.redirect('/inquiries'); 
    // });

      // 검색창 초기화 스크립트
    window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        const searchInput = document.querySelector('input[name="query"]');
        if (searchInput) searchInput.value = '';
    }
    });
