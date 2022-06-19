'use strict'

// ドムコン
// document.addEventListener('DOMContentLoaded', () => {
//     setInterval(() => {
//        let target = currentIndex + 1;
//        if(target === images.length){
//            target = 0;
//        } 
//        document.querySelectorAll('.carousel__thumbnails > li')[target].click();
//     }, 2000);
// })

// window object
window.addEventListener('load', () => {
    setInterval(() => {
    //    let target = currentIndex + 1;
    //    if(target === images.length){
    //        target = 0;
    //    } 

    // ランダム実装の場合
    let target = Math.floor(Math.random() * images.length);
       document.querySelectorAll('.carousel__thumbnails > li')[target].click();
    }, 2000);
});

// 即時関数
(function immediate(){
    console.log('即時関数です');
})();

// 
for(let i = 0 ; i < 10 ; i++){
    console.log(Math.floor(Math.random() * 7));
}
