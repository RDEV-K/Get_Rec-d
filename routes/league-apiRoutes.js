var db = require("../models");

module.exports = function(app) {
    app.get("/api/leagues", function(req, res) {
      db.League.findAll({}).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
    app.get("/api/leagues/:id", function(req, res) {
      db.League.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
    app.post("/api/leagues", function(req, res) {
      db.League.create(req.body).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
    app.delete("/api/leagues/:id", function(req, res) {
      db.League.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbLeague) {
        res.json(dbLeague);
      });
    });
  
  };
  