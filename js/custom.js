// recent menu click시 이동
$(document).ready(function () {
  $("#recentBtn").click(function () {
    var offset = $(".containerBox").offset(); //선택한 태그의 위치를 반환

    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함

    $("html").animate({ scrollTop: offset.top }, 400);
  });
});