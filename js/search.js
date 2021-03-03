
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

      if (obj.items.lenghth == 0) {
        alert("데이터가 없습니다.");
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

