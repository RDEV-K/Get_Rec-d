
//animation for the home page
var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;


var landingPage = {};
landingPage.opacityIn = [0, 1];

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
  }).add({
    targets: ['.ml4 .letters-3', '.opening-screen'],
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.landing-page',
    opacity: landingPage.opacityIn,
    easing: "easeInOutCirc",
  }).add({
    targets: ['.ml4', '.opening-screen'],
    scale: 1
  });

  //outputs information on the profile page depending on the button pressed
  $("#leagues-card").on("click", function(){
    $("#profileContent").empty();
    $("#profileContent").text("this is where league information goes");
  });

  $("#teams-card").on("click", function(){
    $("#profileContent").empty();
    $("#profileContent").text("this is where team information goes");
  });

  $("#stats-card").on("click", function(){
    $("#profileContent").empty();
    $("#profileContent").text("this is where stat information goes");
  });

//submits data to and from the database
// $(function () {
//   //POST calls for the leagues page
//   submitLeague();
//   submitTeam();
//   joinTeam();

//   //POST call for the sign up page
//   newUser();


// });

// //POST ajax call to the database when creating a new league - will need to edit the titles/syntax
// function submitLeague() {
//   $("#submit-league").on("click", function () {
//     $.ajax("/api/leagues", {
//       type: "POST",
//       data: addedLeague
//     }).then(
//       function () {
//         console.log("created new league");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// };


// //POST ajax call to the database when creating a new team - will need to edit the titles/syntax
// function submitTeam() {
//   $("#submit-team").on("click", function () {
//     $.ajax("/api/teams", {
//       type: "POST",
//       data: addedTeam
//     }).then(
//       function () {
//         console.log("created new team");
//         location.reload();
//       }
//     );
//   });
// };


// //POST ajax call to the database when creating a new player - will need to edit the titles/syntax
// function joinTeam() {
//   $("#join-team").on("click", function () {
//     $.ajax("/api/teams", {
//       type: "POST",
//       data: addedPlayer
//     }).then(
//       function () {
//         console.log("added new player");
//         location.reload();
//       }
//     );
//   });
// };

// //POST ajax call to the database when create a new account
// function newUser(){
//   $("#new-user").on("click", function(){
//     $.ajax("/api/users", {
//       type: "POST",
//       data: addedUser
//     }).then(
//       function () {
//         console.log("created new user");
//         //think we would need to do a GET request for profile here instead of a reload...
//       }
//     )
//   })
// };

//Charts.js Testing 
var categories = [];
var categoryValue = [];

function getBudgets() {
  //userID needs to be passed thru
  //var userString = userID || "";
  //  if (userString) {
  //   userString = "/user/" + userString;
  // }

  $("#submit-new-stat").on("click", function(){
    var statsObj = {
     stat1: $("#value1").val(),
     stat2: $("#value2").val(),
  };
  $.get("/api/chart", function(data) {
    console.log(data);
    //add userString to get call
    console.log("Stats", data);
    // for (var i = 0; i < 5; i++){
    //   categories.push("stat"+[i]);
    //   categoryValue.push(data[i]);
    // }
  }).then(() => {
    renderChart();
  })
}

function renderChart () {
    new Chart(document.getElementById("myChart"), {
      type: 'bar',
      data: {
          labels: categories,
          datasets: [
              {
                  label: "Stats",
                  backgroundColor: ["#0000ff", "#ee82ee", "#3cba9f", "#e8c3b9", "#c45850",
                  "#00bfff", "#b22222", "#228b22", "#d2691e", "#4b0082", "#ffd700"],
                  data: categoryValue
              }
          ],
      }
    })
  }