var db = require("../models");

module.exports = function(app) {
    app.get("/api/teams", function(req, res) {
      db.Team.findAll({}).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.get("/api/team/:id", function(req, res) {
      db.team.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.post("/api/team", function(req, res) {
      db.team.create(req.body).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.delete("/api/team/:id", function(req, res) {
      db.team.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
  };
  