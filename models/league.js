'use strict';
module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('League', {
    name: DataTypes.STRING
  }, {});
  // League.associate = function(models) {
  //   // Leagues have many teams
  //   League.hasMany(models.team);
  //   League.belongsToMany(models.stat, { as: 'Stat', through: 'leaguestatXR' })

  // };
  return League;
};