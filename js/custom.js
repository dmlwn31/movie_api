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

$("#allBtn").click(function () {
  var offset = $(".genre-section").offset(); 

  $("html").animate({ scrollTop: offset.top }, 1);
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


// 장르별 탭 설정, active클래스 
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("genreSubBox");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace("active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += "active";
// }

