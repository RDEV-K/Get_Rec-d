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

module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    Team.associate = function (models) {
        // We're saying that a Team should belong to an Author
        // A Team can't be created without an League due to the foreign key constraint
        Team.belongsTo(models.League, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Team;
};
