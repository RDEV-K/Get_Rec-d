'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    league_id: DataTypes.STRING,
    wins: DataTypes.STRING,
    losses: DataTypes.STRING
  }, {});
  // Team.associate = function(models) {
  //   // Teams belong to Leagues
  //   Team.belongsTo(models.league);
  //   Team.belongsToMany(models.user, { as: 'Players', through: 'teamUserXR' })

  // };
  return Team;
};