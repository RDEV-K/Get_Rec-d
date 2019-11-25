'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stat = sequelize.define('stat', {
    stat_name: DataTypes.STRING
  }, {});
  Stat.associate = function(models) {
    // associations can be defined here
    Stat.belongsToMany(models.league, { as: 'League', through: 'leaguestatXR' })

  };
  return Stat;
};