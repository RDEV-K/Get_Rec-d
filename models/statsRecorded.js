var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
  }

  var League = require("./league.js");
  var Team = require("./team.js");
  var User = require("./user.js");
  var StatName = require("./statsDefined.js")
  

module.exports = function (sequelize, DataTypes) {
    var Stat = sequelize.define("stat", {
        stats: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        league_id: {
            type: Sequelize.INTEGER,
            references: {
                model: League,
                key: "id",
                allowNull: false
            }
        },
        team_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Team,
                key: "id",
                allowNull: false
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: "id",
                allowNull: false
            }
        },
        stats_defined_id: {
            type: Sequelize.INTEGER,
            references: {
                model: StatName,
                key: "id",
                allowNull: false
            }
        },


    });
    return Stat;
};
