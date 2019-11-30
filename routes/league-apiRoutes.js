var db = require("../models");

module.exports = function(app) {
    app.get("/api/league", function(req, res) {
      db.League.findAll({}).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
    app.get("/api/league/:id", function(req, res) {
      db.League.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
    app.post("/api/league", function(req, res) {
      db.League.create(req.body).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
    app.delete("/api/league/:id", function(req, res) {
      db.League.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
  };
  