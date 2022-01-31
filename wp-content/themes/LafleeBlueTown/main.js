/* リンク先変更*/
var winw = $(window).width() / -2;

$(function(){
    winw * -2;
    console.log(winw);
    if(winw > -390.5){
        console.log('スマホサイズ');
        $('header nav .con').attr("href", "mailto:k019g1425@g.neec.ac.jp");
        $('footer nav .con').attr("href", "mailto:k019g1425@g.neec.ac.jp");
    }
})