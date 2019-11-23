var db = require("../models");

module.exports = function(app) {
    app.get("/api/teams", function(req, res) {
      db.Team.findAll({}).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.get("/api/teams/:id", function(req, res) {
      db.Team.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.post("/api/teams", function(req, res) {
      db.Team.create(req.body).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.delete("/api/teams/:id", function(req, res) {
      db.Team.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
  };
  