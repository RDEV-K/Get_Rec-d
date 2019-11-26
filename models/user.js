'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.team, { as: 'Teams', through: 'teamUserXR' })
    User.hasMany(models.message)

  };
  return User;
};