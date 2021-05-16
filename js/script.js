
/* ヘッダー */
window.addEventListener("scroll", function() {

    var header = document.querySelector("header");
    header.classList.toggle("scroll-nav",
        window.scrollY > 100);

});

/* //ヘッダー */

/* モーダル */
$(function() {
    //is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
    //アニメーションはcss側に記載しています
    $('.openModal').on('click', function() {
        $('.modalArea').toggleClass('is-show');
    });
    $('.closeModal').on('click', function() {
        $('.modalArea').toggleClass('is-show');
    });
    $('.modalBg').on('click', function() {
        $('.modalArea').toggleClass('is-show');
    });
});

flatpickr(".flatpickr", {});


/* //モーダル */



/* bg-slider */
function sliderStart() {

    const slide = document.getElementById('slide_wrap');      //スライダー親
    const slideItem = slide.querySelectorAll('.slide_item');   //スライド要素
    const totalNum = slideItem.length - 1;                     // スライドの枚数を取得
    const FadeTime = 2000;                                     //フェードインの時間
    const IntarvalTime = 5000;                                 //クロスフェードさせるまでの間隔
    let actNum = 0;                                            //現在アクティブな番号
    let nowSlide;                                              //現在表示中のスライド
    let NextSlide;                                             //次に表示するスライド

    // DOM読み込み時にスライドの1枚目をフェードイン
    slideItem[0].classList.add('show_', 'zoom_');

    // 処理を繰り返す
    setInterval(() => {
        if (actNum < totalNum) {
          
            nowSlide = slideItem[actNum];
            NextSlide = slideItem[++actNum];

            //.show_削除でフェードアウト
            nowSlide.classList.remove('show_');
            // と同時に、次のスライドがズームしながらフェードインする
            NextSlide.classList.add('show_', 'zoom_');
            //フェードアウト完了後、.zoom_削除
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);


        } else {

            nowSlide = slideItem[actNum];
            NextSlide = slideItem[actNum = 0];

            //.show_削除でフェードアウト
            nowSlide.classList.remove('show_');
            // と同時に、次のスライドがズームしながらフェードインする
            NextSlide.classList.add('show_', 'zoom_');
            //フェードアウト完了後、.zoom_削除
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);

        };
    }, IntarvalTime);

}



/* //bg-slider */

/* ハンバーガー */
(function($) {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var open = 'open'; // class
    // menu open close
    $btn.on('click', function() {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });
    // mask close
    $mask.on('click', function() {
        $nav.removeClass(open);
    });
})(jQuery);

/* //ハンバーガー */


/* aosアニメーション */
AOS.init()
/* //aosアニメーション */
