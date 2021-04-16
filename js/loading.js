// $(window).on("load",function(){
//     $(".pageLoad").fadeOut("slow");
//   });

// window.addEventListener("scroll", function () {
//     const loader = document.querySelector(".loader");
//     loader.className = "loader hidden"; //class "loader hidden"
//     body.scrollTop(0);
//     documentElement.scrollTop(0);
// });

// window.addEventListener("scroll", function () {
//     const loader = document.querySelector(".loader");
//     const logo = document.querySelector("#logo");
//     loader.className = "loader hidden"; //class "loader hidden"
//     logo.className = "loading done";

// });

// window.addEventListener("load", function () {
//     window.addEventListener("scroll", function () {
//         const logo = document.querySelector("#logo");
//         // logo.className = "loading done";
//         $("loading").animate({top: '200px'});
//     });
// });

// window.addEventListener("load", function () {
//     window.addEventListener("scroll", function () {
//         const logo = document.querySelector("#logo");
//         // logo.className = "loading done";
//         logo.style.top = 0;
//     });
// });

// $(window).resize(function(e){
//     if($(window).width() <= 599) {
//         window.addEventListener("scroll", function changeElement() {
//             $("#value").slideUp("slow", function() { $(this).remove();});
//             $("#blank").slideUp( 1200, function() { $(this).remove();});
//             $("#cont").addClass("show");
//         });
//     } else if($(window).width() > 599 && $(window).width() <= 1027) {
//         window.addEventListener("scroll", function () {
//             $("#logo").addClass("move");
//             $("#value").slideUp("slow", function() { $(this).remove();});
//             $("#blank").slideUp( 1200, function() { $(this).remove();});
//             $("#cont").addClass("show");
//         });
//     } else if ($(window).width() > 1028) {
//         window.addEventListener("scroll", function () {
//             $("#value").slideUp("slow", function() { $(this).remove();});
//             $("#blank").slideUp( 1200, function() { $(this).remove();});
//             $("#cont").addClass("show");
//         });
//     }         
// });

// window.addEventListener("scroll", function () {
//     $("#logo").addClass("move");
//     $("#value").slideUp("slow", function() { $(this).remove();});
//     $("#blank").slideUp( 1200, function() { $(this).remove();});
//     $("#cont").addClass("show");
// });
// $(document).one('ready', function() {
//     window.addEventListener("scroll", function () {
//     if($(window).width() <= 599) {

//             // $("#value").slideUp("slow", function() { $(this).remove();});
//             $("#value").fadeOut();
//             $("#copyright").fadeOut();
//             $(".animate").fadeOut();
//             $("#blank").slideUp( 1200, function() { $(this).remove();});
//             $("#cont").addClass("show");
//     } else if($(window).width() > 599 && $(window).width() <= 1027) {
//             $("#logo").addClass("move");
//             // $("#value").slideUp("fast", function() { $(this).remove();});
//             $("#value").fadeOut();
//             $("#copyright").fadeOut();
//             $(".animate").fadeOut();
//             $("#blank").slideUp( 1200, function() { $(this).remove();});
//             $("#cont").addClass("show");
//     } else if ($(window).width() > 1027) {
//         // window.addEventListener("scroll", function () {
//         //     $("#logo").addClass("move");
//         //     $("#value").slideUp("slow", function() { $(this).remove();});
//         //     $("#blank").slideUp( 1200, function() { $(this).remove();});
//         //     $("#cont").addClass("show");
//         // });
//             $("#logo").addClass("move");
//             // $("#value").slideUp("fast", function() { $(this).remove();});
//             $("#value").fadeOut();
//             $("#copyright").fadeOut();
//             $(".animate").fadeOut();
//             $("#blank").slideUp( 1200, function() { $(this).remove();});
//             $("#cont").addClass("show");
//     }
// });
// });


    window.addEventListener("scroll", function () {
            $("#logo").addClass("move");
            // $("#value").slideUp("fast", function() { $(this).remove();});
            $("#value").fadeOut();
            $("#copyright").fadeOut();
            $(".animate").fadeOut();
            $("#blank").slideUp( 1200, function() { $(this).remove();});
            $("#cont").addClass("show");
});

// var prevScroll = window.pageYOffset;
// window.onScroll = function() {
//     var currScroll = window.pageYOffset;
//     if (prevScroll > currScroll) {
//         document.getElementsByClassName("loader").style.top = "0";
//     } else {
//         document.getElementsByClassName("loader").style.top = "-50";
//     }
//     prevScroll = currScroll;
// }

// window.onScroll = function() {
//         document.getElementsByIdName("loader").className = "loader hidden";
// }
// window.onScroll = function() {
//     var currScroll = window.pageYOffset;
//     if (currScroll >= 0) {
//         document.getElementsByClassName("loader").className = "loader hidden";
//         body.scrollTop = 0;
//         documentElement.scrollTop = 0;
//     }
// }