'use strict';
module.exports = (sequelize, DataTypes) => {
  const LeaguestatXR = sequelize.define('leaguestatXR', {
    season: DataTypes.INTEGER,
    league_name: DataTypes.STRING,
    stat_name: DataTypes.STRING
  }, {});
  // LeaguestatXR.associate = function(models) {
  //   // associations can be defined here
  //   LeaguestatXR.belongsToMany(models.teamUserXR, { as: 'LeagueStatName', through: 'statxr' })

  // };
  return LeaguestatXR;
};