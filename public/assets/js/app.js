//title animation for the home page
var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({ loop: false })
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  });

//when user clicks on Sign Up button, we make AJAX call to new html route
$(function () {

  $.get({
    $('.signup').on('click', function(event) {
      event.preventDefault();
      var attrID = $(this).data('id');
      console.log(attrID);
    
      $.ajax({ ... });
    });

  });
})
//create new player with their data and store them 
  // $(".create-form").on("submit", function (event) {
  //   event.preventDefault();

  //   var newPlayer = {
  //     name: $("#usernameInput").val().trim(),
  //     password: $("#pwdInput").val().trim(),
  //     email: $("#emailInput").val().trim(),
  //     zipcode: $("#zipInput").val().trim(),
  //     phone: $("#phone").val().trim(),
  //   };
  //   console.log(newPlayer);

  //   //add new player, send as POST request
  //   $.ajax("/players/createNew", {
  //     type: "POST",
  //     data: newPlayer,
  //   }).then(
  //     function () {
  //       console.log("new player is added!");
  //     }
  //   )
  // })
