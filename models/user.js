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
    var User = sequelize.define("User", {
      name: DataTypes.STRING,
      userpassword: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      zipcode: DataTypes.INTEGER      
    });
  
    User.associate = function(models) {
      User.hasMany(models.Message, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };

