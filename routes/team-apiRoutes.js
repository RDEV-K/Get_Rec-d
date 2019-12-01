var db = require("../models");

module.exports = function(app) {
    app.get("/api/team", function(req, res) {
      db.Team.findAll({}).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.get("/api/team/league/:league_id", function(req, res) {
      db.Team.findAll({
        where: {
          league_id: req.params.league_id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
    
    app.get("/api/team/:id", function(req, res) {
      db.Team.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.post("/api/team", function(req, res) {
      db.Team.create(req.body).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
    app.put("/api/team", function(req, res) {
      db.Team.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
    
    app.delete("/api/team/:id", function(req, res) {
      db.Team.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
  };
  