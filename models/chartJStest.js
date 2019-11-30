'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chart = sequelize.define('chart', {
    stat1: DataTypes.INTEGER,
    stat2: DataTypes.INTEGER,
    stat3: DataTypes.INTEGER,
    stat4: DataTypes.INTEGER,
    stat5: DataTypes.INTEGER,
    leagename: DataTypes.STRING,
    teamname: DataTypes.STRING,
    username: DataTypes.STRING 
    
  }, {});
  // Chart.associate = function(models) {
  //   // associations can be defined here
  // };
  return Chart;
};