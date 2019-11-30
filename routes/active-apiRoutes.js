var db = require("../models");

module.exports = function(app) {
    app.get("/api/active", function(req, res) {
      db.Active.findAll({}).then(function(dbActive) {
        res.json(dbActive);
      });
    });
  
    app.get("/api/active/:id", function(req, res) {
      db.Active.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbActive) {
        res.json(dbActive);
      });
    });
  
    app.post("/api/active", function(req, res) {
      db.Active.create(req.body).then(function(dbActive) {
        res.json(dbActive);
      });
    });

    app.put("/api/active", function(req, res) {
      db.Active.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbActive) {
        res.json(dbActive);
      });
    });
  
    app.delete("/api/active/:id", function(req, res) {
      db.Active.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbActive) {
        res.json(dbActive);
      });
    });
  
  };
  