$.get("/api/pets", function (data) {

  var num = 0

  function clickButton(){
    $(".image").empty();
    $(".petName").empty()
    $(".aboutMe").empty();
    $(".aboutHome").empty();
    $(".image").append("<img src='"+data[num].picture+ "' " + "alt='"+data[num].firstName + " " + data[1].lastName + "'>" )
    $(".petName").append(data[num].firstName + " " + data[num].lastName);
    $(".aboutMe").append(data[num].bio);
    $(".aboutHome").append(data[num].conditions);
    num++
  }



  $("#likeButton").on("click", function(event){
    clickButton();
  })

  $("#dislikeButton").on("click", function(event){

  })
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