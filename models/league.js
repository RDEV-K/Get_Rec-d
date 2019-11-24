'use strict';
module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('league', {
    name: DataTypes.STRING
  }, {});
  League.associate = function(models) {
    // Leagues have many teams
    League.hasMany(models.Team,{
      as: "Team",
      foreignKey: "LeagueID",
      sourceKey: "LeagueID"
    });
  };
  return League;
};