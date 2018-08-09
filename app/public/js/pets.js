$(document).ready(function(){

$.get("/api/pets", function (data) {

  var num = 0
  console.log(num);

  $(".image").empty();
  $(".petName").empty()
  $(".aboutMe").empty();
  $(".aboutHome").empty();
  $(".like").empty();
  $(".dislike").empty();
  $(".image").append("<img src='"+data[num].picture + "' " + "alt='"+data[num].firstName + " " + data[num].lastName + "'>" )
  $(".petName").append(data[num].firstName + " " + data[num].lastName);
  $(".aboutMe").append(data[num].bio);
  $(".aboutHome").append(data[num].conditions);
  $("<button class='likeButton'>Like</button>").appendTo(".like");
  $("<button class='dislikeButton'>DisLike</button>").appendTo(".dislike");

  function clickButton(){
    if (num < data.length){
      $(".image").empty();
      $(".petName").empty()
      $(".aboutMe").empty();
      $(".aboutHome").empty();
      $(".like").empty();
      $(".dislike").empty();
      $(".image").append("<img src='"+data[num].picture + "' " + "alt='"+data[num].firstName + " " + data[num].lastName + "'>" )
      $(".petName").append(data[num].firstName + " " + data[num].lastName);
      $(".aboutMe").append(data[num].bio);
      $(".aboutHome").append(data[num].conditions);
      $("<button class='likeButton' data='"+data[num].uid+"'>Like</button>").appendTo(".like");
      $("<button class='dislikeButton data='"+data[num].uid+"''>DisLike</button>").appendTo(".dislike");
      num++

    };
  }


  $(".like").on("click",".likeButton", function(event){
    clickButton();
    console.log("working")
  })

  $(".dislike").on("click", ".dislikeButton",function(event){
    clickButton();
  })
});
});
// var data = ["a", "b", "c", "d"];

// var num = 0;
// console.log(data[num]);
// alert("hello")
// $("#testButton").on("click", function(event){
//   console.log("Hello")
//   newArray();
// })
// function newArray(){
//   $(".aboutMe").append(data[num]);
// }

$(".like").on("click",".likeButton",function(){
  
  console.log({uid:$(this).attr("data"),interested:true})
  $.post("/api/allpets",{uid:$(this).attr("data"),interested:true},function(){



  })


})