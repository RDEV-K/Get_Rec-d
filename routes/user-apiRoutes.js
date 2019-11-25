var db = require("../models");

module.exports = function(app) {
    app.get("/api/user", function(req, res) {
      db.user.findAll({}).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.get("/api/user/:id", function(req, res) {
      db.user.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.post("/api/user", function(req, res) {
      db.user.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.delete("/api/user/:id", function(req, res) {
      db.user.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };
  