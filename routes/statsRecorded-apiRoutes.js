var db = require("../models");

module.exports = function(app) {
    app.get("/api/stats", function(req, res) {
      db.Stat.findAll({}).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
    app.get("/api/stats/:id", function(req, res) {
      db.Stat.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
    app.post("/api/stats", function(req, res) {
      db.Stat.create(req.body).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
    app.delete("/api/stats/:id", function(req, res) {
      db.Stat.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbStat) {
        res.json(dbStat);
      });
    });
  
  };
  