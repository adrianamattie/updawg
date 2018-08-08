$(document).ready(function(){
  $('.modal').modal();
})


//handle authentication
var config = {
    apiKey: "AIzaSyBdKKNfe0cwgREyNhcvn7rxBG2-SxvRGh4",
    authDomain: "updawg-e1145.firebaseapp.com",
    databaseURL: "https://updawg-e1145.firebaseio.com",
    projectId: "updawg-e1145",
    storageBucket: "updawg-e1145.appspot.com",
    messagingSenderId: "23565913569"
  };
  firebase.initializeApp(config);
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        displayUserData(user.uid);
        var globalData;
        $.get("/api/interested",function(data){
          globalData =data;
          for(var i = 0; i < data.length; i++){
            var contain = $("<div class='row'></div>");

            var card = $("<div class='card col s6 likes'></div>");
            $("<h3>"+data[i].firstName+" "+data[i].lastName +"</h3>").appendTo(card);
            $("<img src ='"+data[i].picture+"'>").appendTo(card);
            card.appendTo(contain);
            contain.appendTo(".likes-display");
            card.attr("data",data[i].uid);
            contain.on("click",".likes",function(){
              $('.modal').modal('open');
              $.get('/api/profiles/'+$(this).attr("data"),function(dataS){
                var display=$(".liked-user-display");
                display.empty();
                $("<h3>"+dataS[0].firstName+" "+dataS[0].lastName +"</h3>").appendTo(display);
                $("<img src ='"+dataS[0].picture+"'>").appendTo(display);
                $("<p>"+dataS[0].bio+"</p>").appendTo(display);
                $("<p>"+dataS[0].conditions+"</p>").appendTo(display);
              });

              

             
            })

          
          }
      })
    } 
  });


function displayUserData(uid){
    $.get('/api/profiles/'+uid,function(data){
        //insert into display things
        //data returns an array
        $(".userPic").attr("src",data[0].picture);
        $(".adopterName").html(data[0].firstName +" "+ data[0].lastName)
        $(".bio").html(data[0].bio);
        $(".conditions").html(data[0].conditions);
        
    })
}
