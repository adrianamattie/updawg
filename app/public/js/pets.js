$(document).ready(function () {

  $.get("/api/pets", function (data) {

    var num = 0
    console.log(num);

    $(".image").empty();
    $(".petName").empty()
    $(".aboutMe").empty();
    $(".aboutHome").empty();
    $(".like").empty();
    $(".dislike").empty();
    $(".image").append("<img src='" + data[num].picture + "' " + "alt='" + data[num].firstName + " " + data[num].lastName + "'>")
    $(".petName").append(data[num].firstName + " " + data[num].lastName);
    $(".aboutMe").append(data[num].bio);
    $(".aboutHome").append(data[num].conditions);
    $("<button class='likeButton waves-effect waves-light red darken-1 btn'> Like  </button>").appendTo(".like");
    $("<button class='dislikeButton waves-effect waves-light red darken-1 btn'>Dislike</button>").appendTo(".dislike");

    function clickButton() {
      if (num < data.length) {
        $(".image").empty();
        $(".petName").empty()
        $(".aboutMe").empty();
        $(".aboutHome").empty();
        $(".like").empty();
        $(".dislike").empty();
        $(".image").append("<img src='" + data[num].picture + "' " + "alt='" + data[num].firstName + " " + data[num].lastName + "'>")
        $(".petName").append(data[num].firstName + " " + data[num].lastName);
        $(".aboutMe").append(data[num].bio);
        $(".aboutHome").append(data[num].conditions);
        $("<button class='likeButton waves-effect waves-light red darken-1 btn' data='" + data[num].uid + "'>Like</button>").appendTo(".like");
        $("<button class='dislikeButton waves-effect waves-light red darken-1 btn' data='" + data[num].uid + "''>Dislike</button>").appendTo(".dislike");
        num++

      } else {
        $(".image").empty();
        $(".petName").empty()
        $(".aboutMe").empty();
        $(".aboutHome").empty();
        $(".like").empty();
        $(".dislike").empty();
        $("<a class='btn goback' style='height:100%;width:100%'>Go Back To Profile</a>").appendTo(".image");
        $("<img src='https://media1.tenor.com/images/3c1073e2391a972945a17a402d67b2cb/tenor.gif?itemid=10095569'>").appendTo(".image");
        $(".card-content").remove();
      };
    }


    $(".like").on("click", ".likeButton", function (event) {
      clickButton();
    })

    $(".dislike").on("click", ".dislikeButton", function (event) {
      clickButton();
    })
  });
});

$(".image").on("click", ".goback", function () {
  window.location.replace("http://localhost:8080/userProfile");
})


$(".like").on("click", ".likeButton", function () {

  console.log({
    uid: $(this).attr("data"),
    interested: true
  })
  $.post("/api/allpets", {
    uid: $(this).attr("data"),
    interested: true
  }, function () {
  })
});

$(".dislike").on("click", ".dislikeButton", function () {

  $.post("/api/allpets", {
    uid: $(this).attr("data"),
    interested: false
  }, function () {
  })
})