var winw = $(window).width() / -2;
console.log(winw);

$('header nav').css('right',winw);
$('header nav').css('display','none');
let number = 0;

/* ハンバーガーメニュー */
$('.button').click(function(){
    if(number == 0){
        number++;
        $('.bg').toggleClass("open");
        $('header nav').css('display','block');
        window.setTimeout(function(){
            $('header nav').css('right',0);
            $('html,body').css('overflow','hidden')
            function disableScroll(event) {
                event.preventDefault();
              }
              // イベントと関数を紐付け
              document.addEventListener('touchmove', disableScroll, {
                  passive: false
                });
            }, 50);
    }
    else{
        number = 0;
        $('.bg').toggleClass("open");
        $('header nav').css('right',winw);
        $('html,body').css('overflow','visible');    
        window.setTimeout(function(){
            $('header nav').css('display','none');
        }, 300);
    }
})

/* リンク先変更*/
$(function(){
    winw * -2;
    if(winw > -390.5){
        console.log('スマホサイズ');
        $('header nav .con').attr("href", "mailto:k019g1425@g.neec.ac.jp");
        $('footer nav .con').attr("href", "mailto:k019g1425@g.neec.ac.jp");
    }
})