$(document).ready(function () {

    // Tinder Swipe

    $(".buddy").on("swiperight", function () {
        $(this).addClass('rotate-left').delay(700).fadeOut(1);
        $('.buddy').find('.status').remove();

        $(this).append('<div class="status like">Like!</div>');
        if ($(this).is(':last-child')) {
            $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
        } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        }
    });

    $(".buddy").on("swipeleft", function () {
        $(this).addClass('rotate-right').delay(700).fadeOut(1);
        $('.buddy').find('.status').remove();
        $(this).append('<div class="status dislike">Dislike!</div>');

        if ($(this).is(':last-child')) {
            $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
            alert('OUPS');
        } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        }

    });

    $.get("/api/pets", function (data) {

        var i = 0

        function pullInfo() {
            
            console.log(data[i].firstName);
            $(".image").empty();
            $(".petName").empty();
            $(".aboutMe").empty();
            $(".aboutHome").empty();
            $(".image").append("<img src='" + data[i].picture + "' " + "alt='" + data[i].firstName + " " + data[i].lastName + "'>")
            $(".petName").append(data[i].firstName + " " + data[i].lastName);
            $(".aboutMe").append(data[i].bio);
            $(".aboutHome").append(data[i].conditions);
            i++;

        }
    });
      

















    // for (var i = 0; i < data.length; i++) {
    // console.log(data);
    // console.log(data[0].picture);
    //     var pet = data[i];
    //     console.log(data[i]);





    // // Emptying out the buddy div
    // $('.buddy').empty();

    // // This is dynamically creating a div with the class buddy. This is going to house both the picture and the description div
    // var profileCard = $("<div>").attr("class", "buddy").attr("class", "card");
    // var avatar = $("<img src='" + data[0].picture + "' " + "alt='" + data[0].firstName + " " + data[0].lastName + "'>").attr("class", "avatar").attr("class", "card-content");

    // // TODO:: Need to do the back side / reveal section of the card which contains the About Me info

    // var revealCard = $("<div>").attr("class", "reveal").attr("class", "card");

    // // First Name in the reveal card
    // var name = $(data[0].firstName + " " + data[0].lastName).attr("class", "name").attr("class", "caption");

    // // Bio in the reveal card
    // var bio = $(data[0].bio).attr("class", "bio").attr("class", "caption");

    // // Conditions in the reveal card
    // var conditions = $(data[0].conditions).attr("class", "conditions").attr("class", "caption");


    // // Appending the profileCard to the container (which is the static element on the html page)
    // $("#container").append(profileCard);
    // // Appending the avatar to the profile card
    // $(profileCard).append(avatar);
    // // Appending information to the reveal card :: when this thing flips 
    //     // TODO:: Figure out how the reveal thing can be worked into the html page
    // $(".reveal").append(firstName).append(lastName).append(picture).append(bio).append(conditions);

});