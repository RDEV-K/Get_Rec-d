var db = require("../models");

module.exports = function(app) {
    app.get("/api/stat", function(req, res) {
      db.stat.findAll({}).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
    app.get("/api/stat/:id", function(req, res) {
      db.stat.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
    app.post("/api/stat", function(req, res) {
      db.stat.create(req.body).then(function(dbStat) {
        res.json(dbStat);
      });
    });

    //this is the dummy route for Chart.js
    app.post("/api/chart", function(req, res) {
      db.chart.create({
        stat1: parseInt(req.body.stat1),
        stat2: parseInt(req.body.stat2),
        stat3: parseInt(req.body.stat3),
        stat4: parseInt(req.body.stat4),
        stat5: parseInt(req.body.stat5),
        leagename: req.body.leaguename,
        teamname: req.body.teamname,
        username: req.body.username
    
      }).then(function(dbChart) {
        res.json(dbChart);
      });
    });

  
    app.delete("/api/stat/:id", function(req, res) {
      db.stat.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
  };
  