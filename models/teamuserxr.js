'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamUserXR = sequelize.define('teamUserXR', {
    name: DataTypes.STRING
  }, {});
  // TeamUserXR.associate = function(models) {
  //   // associations can be defined here

  //   TeamUserXR.belongsToMany(models.leaguestatXR, { as: 'LeagueStatName', through: 'statxr' })

  // };
  return TeamUserXR;
};