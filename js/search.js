$(function () {
  let searchValue = document.location.href.split("=")[1];
  let decodeValue = decodeURI(searchValue);
  console.log(decodeValue);

  $.ajax({
    type: "POST",
    url: "/movie_api/data/api.php",
    data: {
      search_value: decodeValue,
    },
    success: function (data) {
      let obj = JSON.parse(data);
      //console.log(obj);
      //console.log(obj.items);

      if (obj.items.length == 0) {
        alert('검색된 자료가 없습니다.');
        location.href = "/movie_api/index.html";
      }

      let itemContents = [];
      $.each(obj.items, function (i, item) {
        //console.log(item.title);
        let itemHTML = `<div class="movie_box">
                          <img src="${item.image}" alt="" />
                          <div class="titBox">
                            <h2>${item.title}</h2>
                            <ul>
                              <li>감독 : ${item.director}</p>
                              <li>개봉 : ${item.pubDate}</p>
                              <li>평점 : ${item.userRating}</p>
                            </ul>
                          </div>  
                        </div>`;
        itemContents.push($(itemHTML).get(0));
      });
      $(".wrap").append(itemContents);
    },
  });
});

$(function () {
  function searchMovie() {
    let searchResult = $(".searchInput").val();
    if (!searchResult) {
      alert("검색어를 입력해 주세요.");
      return false;
    }

    location.href = "/movie_api/search.html?key=" + searchResult;
  }

  $(".sendBtn").click(function () {
    searchMovie();
  });

  //press enter
  document.addEventListener("keydown", function (e) {
    const keyCode = e.keyCode;
    if (keyCode == 13) {
      searchMovie();
    }
  });
});
