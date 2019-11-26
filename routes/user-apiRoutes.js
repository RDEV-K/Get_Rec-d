var db = require("../models");

module.exports = function(app) {
    app.get("/api/user", function(req, res) {
      db.user.findAll({}).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.get("/api/user/:id", function(req, res) {
      db.user.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.post("/api/user", function(req, res) {
      db.user.create({
        name: req.body.name,
        password: req.body.password, 
        email: req.body.email,
        phone: parseInt(req.body.phone),
        zip: parseInt(req.body.zip),
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt

      }).then(function(dbUser) {
        res.json(dbUser);
        //need to send each piecce individually for parseINT
      });
    });
  
    app.delete("/api/user/:id", function(req, res) {
      db.user.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };
  