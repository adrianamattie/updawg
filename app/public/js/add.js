// The code in add.js handles what happens when the user clicks the "Add a book" button.
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

var uid;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
    console.log(user.displayName);
    if(user.displayName=="Member"){
    $.get("/api/profiles/"+uid,function(data){
      console.log(data);
      if(data.length>0){
        window.location.replace("http://localhost:8080/userProfile");
      }
    })
    

  }else {
    user.updateProfile({
      displayName: "Member"
    })
    console.log(user.displayName);
    console.log('changing to block');
    $("body").css("display","block"); 
    // User is signed out.
  }
}
});
// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newAdopter = {
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    picture: $("#petPicture").val().trim(),
    bio: $("#bio").val().trim(),
    conditions: $("#livingCondition").val().trim(),
    uid:uid,
    interested:true,
    profile: $("select").val(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/userProfiles", newAdopter,function(data){
    console.log(data);
    window.location.replace("http://localhost:8080/userProfile");

  })
  

  // Empty each input box by replacing the value with an empty string
  $("#firstName").val("");
  $("#lastName").val("");
  $("#petPicture").val("");
  $("#bio").val("");
  $("#livingCondition").val("");

});

