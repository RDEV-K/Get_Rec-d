'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stat = sequelize.define('stat', {
    stat_name1: DataTypes.STRING,
    stat_name2: DataTypes.STRING,
    stat_name3: DataTypes.STRING,
    stat_name4: DataTypes.STRING,
    stat_name5: DataTypes.STRING

  }, {});
  Stat.associate = function(models) {
    // associations can be defined here
    Stat.belongsToMany(models.league, { as: 'League', through: 'leaguestatXR' })

  };
  return Stat;
};