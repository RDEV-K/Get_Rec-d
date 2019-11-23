var db = require("../models");

module.exports = function(app) {
  app.get("/api/messages", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.User_id;
    }
    db.Message.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });

  app.get("/api/messages/:id", function(req, res) {
    db.Message.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });

  app.post("/api/messages", function(req, res) {
    db.Message.create(req.body).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });

  app.delete("/api/messages/:id", function(req, res) {
    db.Message.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });

  app.put("/api/messages", function(req, res) {
    db.Message.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });
};
