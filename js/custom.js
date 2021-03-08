// recent menu click시 이동
$(document).ready(function () {
  
});
$("#recentBtn").click(function () {
  var offset = $(".containerBox").offset(); //선택한 태그의 위치를 반환

  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#homeBtn").click(function () {
  var offset = $(".search-box").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#genreBtn").click(function () {
  var offset = $(".genre-section").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});

$(".go").click(function () {
  var offset = $(".containerBox").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#mHome").click(function () {
  var offset = $(".search-box").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#mRecent").click(function () {
  var offset = $(".containerBox").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#mGenre").click(function () {
  var offset = $(".genre-section").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});




// mobile메뉴  slide
$(document).ready(function(){
  $(".mIcon").click(function(){
    $(".mNavSlider").slideToggle();
  });
});


//mobile menu click
let mobileMenu = function(){
  $(".mIcon").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
    }
  });
}

mobileMenu();


// allBtn 전체 보이기 기능
$(document).ready(function() {

  $("#allBtn").click(function() {

      $(".genreSubBox").show(); 
      // $(this).hide('fast'); 
  });

});

// 장르별 탭 설정, on클래스
$(".tablinks").click(function(){
  let index = $(this).index();
 
  $(".genreSubBox").hide();
  $(".genreSubBox").eq(index-1).show();

  $(".tablinks").removeClass("remove");
  $(".tablinks").eq(index).addClass("remove");

  
});


jQuery(function($){
  $(window).scroll(function () {
    if($(window).scrollTop() == 0) {
     $('.go').show(300);
    } else {
     $('.go').hide();
    }
   });
  
  });



