var db = require("../models");

module.exports = function(app) {
    app.get("/api/user", function(req, res) {
      db.User.findAll({}).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.get("/api/user/:name", function(req, res) {
      db.User.findAll({
        where: {
          name: req.params.name
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });

    app.get("/api/user/team/:team_id", function(req, res) {
      db.User.findAll({
        where: {
          team_id: req.params.team_id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });

    app.get("/api/user/:id", function(req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.post("/api/user", function(req, res) {
      db.User.create(req.body
        // {
        // name: req.body.name,
        // password: req.body.password, 
        // email: req.body.email,
        // phone: parseInt(req.body.phone),
        // zip: parseInt(req.body.zip),
        // createdAt: req.body.createdAt,
        // updatedAt: req.body.updatedAt
      // }
      ).then(function(dbUser) {
        res.json(dbUser);
        //need to send each piecce individually for parseINT
      });
    });
  
    app.put("/api/user", function(req, res) {
      db.User.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbUser) {
        res.json(dbUser);
      });
    });

    app.delete("/api/user/:id", function(req, res) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };
  