'use strict';
module.exports = (sequelize, DataTypes) => {
  const Statxr = sequelize.define('statxr', {
    stat1: DataTypes.INTEGER,
    stat2: DataTypes.INTEGER,
    stat3: DataTypes.INTEGER,
    stat4: DataTypes.INTEGER,
    stat5: DataTypes.INTEGER
  }, {});
  // Statxr.associate = function(models) {
  //   // associations can be defined here
  // };
  return Statxr;
};