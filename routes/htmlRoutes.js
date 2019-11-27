var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index", {layout: 'nonav.handlebars'});
    });

    app.get("/signup", function(req, res) {
        res.render("partials/signup.handlebars", {layout: 'nonav.handlebars'});
    });

    app.get("/profile", function(req, res) {
        res.render("profile.handlebars");
    });

    app.get("/stats", function(req, res) {
        res.render("stats.handlebars");
    });

    app.get("/leagues", function(req, res) {
        res.render("leagues.handlebars");
    });

    app.get("/community", function(req, res) {
        res.render("community.handlebars");
    });
 
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
};
