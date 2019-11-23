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

module.exports = function(sequelize, DataTypes) {
    var League = sequelize.define("League", {
      // Giving the League model a name of type STRING
      league_name: DataTypes.STRING,
    });
  
    League.associate = function(models) {
      // Associating League with Teams
      // When a League is deleted, also delete any associated Teams
      League.hasMany(models.Team, {
        onDelete: "cascade"
      });
    };
  
    return League;
  };
  