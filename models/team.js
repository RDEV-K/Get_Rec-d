'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    // Teams belong to Leagues
    Team.belongsTo(models.League,{
      foreignKey: "LeagueID",
      targetKey: "LeagueID"
    });
  };
  return Team;
};