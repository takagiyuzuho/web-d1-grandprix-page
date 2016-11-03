// // var num = 0;
// // var tgt = 23;
// // var speed = 10;
// // setInterval(function(){
// // if(num <= tgt){
// //     document.getElementById("js-time-23").innerText = num;
// //     num++;
// // }
// // },speed);

// $(function(){
//     var num = 0;
//     var num2 = 0;
//     var num3 = 0;
//     var tgt = 23;
//     var tgt2 = 3;
//     var tgt3 = 30;
//     var speed = 50;
//   $(window).scroll(function (){
//     $('.about-list').each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + 300){
//         if(num <= tgt){
//             document.getElementById("js-time-23").innerText = num;
//             num++;
//         }
//         if(num2 <= tgt2){
//             document.getElementById("js-time-3").innerText = num;
//             num2++;
//         }
//         if(num3 <= tgt3){
//             document.getElementById("js-time-30").innerText = num;
//             num++;
//         }
//       }
//     });
//   });
// });


// // $(function() {
// //     var topBtn = $('#page-top');
// //     topBtn.hide();
// //     //スクロールが100に達したらボタン表示
// //     $(window).scroll(function () {
// //         if ($(this).scrollTop() > 100) {
// //             topBtn.fadeIn();
// //         } else {
// //             topBtn.fadeOut();
// //         }
// //     });
// //     //スクロールしてトップ
// //     topBtn.click(function () {
// //         $('body,html').animate({
// //             scrollTop: 0
// //         }, 500);
// //         return false;
// //     });
// // });