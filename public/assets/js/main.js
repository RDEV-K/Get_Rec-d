$(document).ready(function() {
//This is the code for the login page
    $("#loginUser").on("click", function(event) {
        event.preventDefault();
        var currentUser = $("#usernameInput").val().trim();
        var currentPassword = $("#pwdInput").val().trim();
        $.get("/api/user", function(data) {
            console.log(data)
            var checkUser = "";
            var checkPassword = "";
            for (var i=0; i < data.length; i++){
                checkUser = data[i].name;
                checkPassword = data[i].password;
                if (currentUser === checkUser && currentPassword === checkPassword){
                    console.log(data[i])
                    var active = {
                        name: data[i].name,
                        firstName: data[i].firstName,
                        lastName: data[i].lastName,
                        password: data[i].password,
                        email: data[i].email,
                        phone: data[i].phone,
                        zip: data[i].zip,
                        team_id: "0"
                    }
                    $.post("/api/active", active).then(getUser)
                    location.replace("/profile");
                }
                else if (i === data.length - 1){
                    $("#loginError").text("No match, try again!");
                }
            }
        });
    });

//This is the code for the signup page
    $("#new-user").on("click", function(event) {
        event.preventDefault();
        var newUser = {
            name: $("#usernameInput").val().trim(),
            // firstName: $("#first-name").val().trim(),
            // lastName: $("#last-name").val().trim(),
            password: $("#pwdInput").val().trim(),
            email: $("#emailInput").val().trim(),
            phone: $("#zipInput").val().trim(),
            zip: $("#phone").val().trim(),
            team_id: "0"
        };
        console.log(newUser)
        $.post("/api/user", newUser)
        $.post("/api/active", newUser).then(getUser)
        location.replace("/profile");
    });
    
    function getUser(){
        $.get("/api/user", function(data) {
        console.log("This is the return")
        console.log(data)
        });
        }

//This is the code for the leagues page
    //Submit-league create a new league and a new team for that league
        $("#submit-league").on("click", function(event) {
            event.preventDefault();
                var newLeague = {
                    name: $("#new-league-name").val().trim()
                };
                console.log(newLeague)
                $.get("/api/league", function(data) {
                    console.log(data)
                    if (data.length === 0){
                        $.post("/api/league", newLeague).then(getNewLeagueID)
                    }
                    else {
                        for (var i=0; i < data.length; i++){
                            if (newLeague.name === data[i].name){
                                $("#duplicateLeague").text("League name already used, try again!");
                            }
                            else if (i === data.length - 1){
                                $("#duplicateLeague").text("");
                                $.post("/api/league", newLeague).then(getNewLeagueID)
                            }
                        }
                    }
                });
        });
    
        function getNewLeagueID (){
            $.get("/api/league", function(data) {
                console.log(data)
                var lastEntry = data.length - 1;
                var LeagueSelect = data[lastEntry].id;
                var LeagueName = data[lastEntry].name;
                console.log(LeagueSelect)
                console.log(LeagueName)
                var newTeam = {
                    name: $("#new-league-team").val().trim(),
                    league_id: LeagueSelect,
                    wins: "0",
                    losses: "0"
                };
                console.log(newTeam)
                $.post("/api/team", newTeam).then(getT)
            });
        };
        function getT(){
            $.get("/api/team", function(data) {
            console.log(data);
            })}
            
    //Submit-team create a new team and add to an existing league
        $("#createTeam").on("click", function(event) {
            event.preventDefault();
            $.get("/api/league", function(data) {
                $("#league-choices").empty();
                for (var i = 0; i < data.length; i++){
                    var newOption = $("<option>");
                    console.log(data[i].id)
                    newOption.attr("value", data[i].id);
                    newOption.html(data[i].name)
                    $("#league-choices").append(newOption);
                }
            });
        });
                $("#submit-team").on("click", function(event) {
                    event.preventDefault();
                    var newTeam = {
                        name: $("#new-team-name").val().trim(),
                        league_id: $("#league-choices").val().trim(),
                        wins: "0",
                        losses: "0"
                    };
                    console.log(newTeam)
                    $.post("/api/team", newTeam)
                });
        //     });
        // });
    //Join-team add user to an existing team
    $("#joinTeam").on("click", function(event) {
        event.preventDefault();
        $("#team-choices").empty();
        $.ajax({
            url: "/api/team",
            method: "GET"
            })
            .then(function(response){
            console.log(response)
            var id;
                $.ajax({
                    url: "/api/league",
                    method: "GET"
                    })
                    .then(function(res){
                        for (var i=0; i < response.length; i++){
                            for (var j=0; j < res.length; j++){
                                if (parseInt(response[i].league_id) === res[j].id){
                                    var newOption = $("<option>");
                                    newOption.attr("value", response[i].id);
                                    newOption.html(res[j].name + ": " + response[i].name)
                                    $("#team-choices").append(newOption);
                                }
                            }
                        }
                    });
            });
    });
    $("#join-team").on("click", function(event) {
        event.preventDefault();
        $.ajax({
            url: "/api/active",
            method: "GET"
            })
            .then(function(response){
                console.log("HERE")
                var activeLength = response.length - 1;
                var activeUser = response[activeLength];
                console.log(response)
                console.log(activeUser)
                var addUserToTeam = {
                    name: activeUser.name,
                    firstName: activeUser.firstName,
                    lastName: activeUser.lastName,
                    password: activeUser.password,
                    email: activeUser.email,
                    phone: activeUser.phone,
                    zip: activeUser.zip,
                    team_id: $("#team-choices").val().trim(),
                    touchdowns: "0",
                    goals: "0",
                    score: "0"
                };
                console.log(addUserToTeam)
                $.post("/api/user", addUserToTeam)
            });
    });


//This is the code for the profile page
    //Enter team stat lists all leagues and teams user belongs to
    $("#teamStat").on("click", function(event) {
        event.preventDefault();
        $("#teamStat-choices").empty();
        $("#teamStat-select").empty();
        $("#new-stat-value").empty();
        $.get("/api/active", function(data) {
            var activeLength = data.length - 1;
            var name = data[activeLength].name;
            $.get("/api/user/" + name, function(res) {
                var id;
                var newOption;
                for (var i=0; i < res.length; i++){
                    id = res[i].team_id;
                    if (id !== "0"){
                        $.get("/api/team/" + id, function(userTeam) {
                            id = userTeam.league_id;
                                $.get("/api/league/" + id, function(userLeague) {
                                    newOption = $("<option>");
                                    newOption.attr("value", userTeam.id);
                                    newOption.html(userLeague.name + ": " + userTeam.name)
                                    $("#teamStat-choices").append(newOption);
                                });
                        });
                    }
                }
                var newStatOption = $("<option>");
                newStatOption.attr("value", "wins");
                newStatOption.text("Wins")
                $("#teamStat-select").append(newStatOption);
                newStatOption = $("<option>");
                newStatOption.attr("value", "losses");
                newStatOption.text("Losses")
                $("#teamStat-select").append(newStatOption);
                $("#enter-teamStat").on("click", function(event) {
                    event.preventDefault();
                    var statSelected = $("#teamStat-select").val().trim();
                    if (statSelected === "wins"){
                        var addStatToTeam = {
                            id: $("#teamStat-choices").val().trim(),
                            wins: $("#new-stat-value").val().trim()
                        };
                    } else {
                        var addStatToTeam = {
                            id: $("#teamStat-choices").val().trim(),
                            losses: $("#new-stat-value").val().trim()
                        };
                    }
                    $.ajax({
                        method: "PUT",
                        url: "/api/team",
                        data: addStatToTeam
                      });
                });
            });
        });
    });

    //Enter your stat lists all leagues and teams user belongs to
    $("#userStat").on("click", function(event) {
        event.preventDefault();
        $("#userStat-choices").empty();
        $("#userStat-select").empty();
        $("#userStat-value").empty();
        $.get("/api/active", function(data) {
            var activeLength = data.length - 1;
            var name = data[activeLength].name;
            $.get("/api/user/" + name, function(res) {
                var id;
                var newOption;
                for (var i=0; i < res.length; i++){
                    id = res[i].team_id;
                    if (id !== "0"){
                        $.get("/api/team/" + id, function(userTeam) {
                            id = userTeam.league_id;
                                $.get("/api/league/" + id, function(userLeague) {
                                    newOption = $("<option>");
                                    newOption.attr("value", userTeam.id);
                                    newOption.html(userLeague.name + ": " + userTeam.name)
                                    $("#userStat-choices").append(newOption);
                                });
                        });
                    }
                }
                var newStatOption = $("<option>");
                newStatOption.attr("value", "touchdowns");
                newStatOption.text("Touchdowns")
                $("#userStat-select").append(newStatOption);
                newStatOption = $("<option>");
                newStatOption.attr("value", "goals");
                newStatOption.text("Goals")
                $("#userStat-select").append(newStatOption);
                newStatOption = $("<option>");
                newStatOption.attr("value", "score");
                newStatOption.text("Score")
                $("#userStat-select").append(newStatOption);
                $("#enter-userStat").on("click", function(event) {
                    event.preventDefault();
                    var statSelected = $("#userStat-select").val().trim();
                    if (statSelected === "touchdowns"){
                        var addStatToUser = {
                            id: $("#userStat-choices").val().trim(),
                            touchdowns: $("#userStat-value").val().trim()
                        };
                    } else if (statSelected === "goals") {
                        var addStatToUser = {
                            id: $("#userStat-choices").val().trim(),
                            goals: $("#userStat-value").val().trim()
                        };
                    } else {
                        var addStatToUser = {
                            id: $("#userStat-choices").val().trim(),
                            score: $("#userStat-value").val().trim()
                        };
                    }
                    $.ajax({
                        method: "PUT",
                        url: "/api/user",
                        data: addStatToUser
                      });
                });
            });
        });
    });

    //Leagues-card lists the leagues the active user belongs to
    $("#leagues-card").on("click", function(event) {
        event.preventDefault();
        $.get("/api/active", function(data) {
            var activeLength = data.length - 1;
            var name = data[activeLength].name;
            $.get("/api/user/" + name, function(data) {
                var id;
                for (var i=0; i < data.length; i++){
                    id = data[i].team_id;
                    if (id !== "0"){
                        $.get("/api/team/" + id, function(data) {
                            id = data.league_id;
                                $.get("/api/league/" + id, function(data) {
                                    console.log(data)
                                    var leagueName = data.name;
                                    $("#profileContent").append("<br>" + leagueName);
                                });
                        });
                    }
                }
            });
        });
    });
    //Teams-card lists the teams the active user belongs to
    $("#teams-card").on("click", function(event) {
        event.preventDefault();
        $.get("/api/active", function(data) {
            var activeLength = data.length - 1;
            var name = data[activeLength].name;
            $.get("/api/user/" + name, function(data) {
                var id;
                for (var i=0; i < data.length; i++){
                    id = data[i].team_id;
                    if (id !== "0"){
                        $.get("/api/team/" + id, function(data) {
                            console.log(data)
                            var teamName = data.name;
                            $("#profileContent").append("<br>" + teamName);
                        });
                    }
                }
            });
        });
    });


//This is the code for the stats page
    //Leagues-card lists the leagues the active user belongs to


});