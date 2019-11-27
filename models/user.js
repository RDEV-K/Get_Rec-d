'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$",'i'],
      len: [5,25],
      notEmpty: true,
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      isNumeric: true,
      len: [10,11],
      notEmpty: true
    },

    zip: {
      type: DataTypes.STRING,
      isNumeric: true,
      len: [5],
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.team, { as: 'Teams', through: 'teamUserXR' })
    User.hasMany(models.message)

  };
  return User;
};