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
  