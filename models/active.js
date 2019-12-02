'use strict';
module.exports = (sequelize, DataTypes) => {
  const Active = sequelize.define('Active', {
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    zip: DataTypes.STRING,
    team_id: DataTypes.STRING,
    touchdowns: DataTypes.STRING,
    goals: DataTypes.STRING,
    score: DataTypes.STRING
  });
  return Active;
};