'use strict';
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
var Team = require("./team.js");
var User = require("./user.js");

module.exports = (sequelize, DataTypes) => {
  const TeamUserXR = sequelize.define('teamUserXR', {
    name: DataTypes.STRING
  }, {});
  TeamUserXR.associate = function(models) {
    // associations can be defined here

    TeamUserXR.belongsToMany(models.leaguestatXR, { as: 'LeagueStatName', through: 'statxr' })

  };
  return TeamUserXR;
};