var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/signup", function(req, res) {
        res.render("partials/signup.handlebars");
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
 

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.recLTS_db.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("index", {
        user: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
