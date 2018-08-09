
var track = 1;
var max;

$.get("/api/pets", function (data) {
    max = data.length;
    console.log(max);
    for (var num = 0; num <= data.length; num++) {

        if (num < data.length) {
            var card = `<div class="container new-card" data="${data[num].uid}" style='position:absolute;left:270px;z-index:${999-num}'>
      <div class="row">
          <div class="col s3"></div>
          <div class="col s6">
              <div class="card" style="margin-top: 3em;">
                  <div class="card-image waves-effect waves-block waves-light image">
                  <img  class='interestPic' src='${data[num].picture}' alt='${data[num].firstName + " " + data[num].lastName}'>
                  </div>
                  <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4 petName">
                      ${data[num].firstName} ${data[num].lastName}
          </span>
        </div>
                  <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4 petName">
                          <i class="material-icons right">close</i>
                      </span>
                      <div class="caption">About Me:

                      </div>
                      <div class="content aboutMe">
                      ${data[num].bio}
                      </div>
                      <div class="caption">My Home: </div>
                      <div class="content aboutHome">
                      ${data[num].conditions}
                      </div>
                  </div>
              </div>
          </div>
          <div class="col s3"></div>
      </div>
  </div>`
            $(card).appendTo("body").draggable({
                revert: true
            });
        } else {
            var card = `<div class="container new-card" style='position:absolute;left:20px;z-index:${999-num}'>
      <div class="row">
          <div class="col s3"></div>
          <div class="col s6">
              <div class="card" style="margin-top: 3em;">
                  <div class="card-image waves-effect waves-block waves-light image">
                  <img src='https://media1.tenor.com/images/3c1073e2391a972945a17a402d67b2cb/tenor.gif?itemid=10095569' alt='Swipe right to see more profiles!'>
                  </div>
                  <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4 petName">
                      Swipe right to go back to profile page!
                      Swipe left to pay for more likes!
          </span>
        </div>
                  <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4 petName">
                          <i class="material-icons right">close</i>
                      </span>
                      <div class="caption">About Me:
                          <div class="content aboutMe">
                          Visa
                          </div>
                      </div>
                      <div class="caption">My Home: </div>
                      <div class="content aboutHome">
                      </div>
                  </div>
              </div>
          </div>
          <div class="col s3"></div>
      </div>
  </div>`
            $(card).appendTo("body").draggable({
                revert: true
            });
        }
    }
    $(".new-card").css("display", "none");
    $(".new-card:eq(0)").css("display", "block");
});
$("body").on("mousedown", ".new-card", function (event) {
    var oPos = event.clientX;
    console.log(oPos);
    $(this).on("mouseup", (event) => {
        console.log(event.clientX);
        if ((oPos - event.clientX) < 0) {
            console.log("like");
            $(this).fadeOut();
            $.post("/api/allpets", {
                uid: $(this).attr("data"),
                interested: true
            }, function () {})
            $(".new-card:eq(" + track + ")").css("display", "block");
            track++;
            if (track == max + 2) {
                window.location.replace("http://localhost:8080/userProfile");
            }
        } else if ((oPos - event.clientX) > 0) {
            console.log("dislike");
            $(this).fadeOut();
            $.post("/api/allpets", {
                uid: $(this).attr("data"),
                interested: false
            }, function () {})
            $(".new-card:eq(" + track + ")").css("display", "block");
            track++;
            if (track == max + 2) {
                window.location.replace("http://localhost:8080/userProfile");
            }
        }
    })
})